"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { loadLektion, getLektionManifest, loadSession, getAvailableSessions } from "@/lib/content-loader";
import { recordLearningActivity } from "@/components/pwa/learning-reminder-banner";
import type { SessionNumber } from "@/lib/content-loader";
import type { ContentStep, GlossarEntry, LektionMetadata } from "../../content/_types";
import type { useLernFortschritt } from "./use-lern-fortschritt";
import { filterStepsByTrack } from "./use-adaptive-engine";

/**
 * Szene-First Reorder: Wenn Step[0] ein Bookend/Selfrating ist und Step[1+] eine SZENE hat,
 * wird die SZENE direkt nach dem Bookend geschoben (vor allen ERKLÄRUNG-Steps).
 * Dadurch startet jede Session mit dem Patienten-Szenario statt mit Theorie.
 */
function reorderSzeneFirst(steps: ContentStep[]): ContentStep[] {
  if (steps.length < 3) return steps;

  // Prüfe ob Step[0] ein Bookend ist (selfrating/text ohne themenblockPhase oder mit BRÜCKE)
  const first = steps[0];
  const isBookend = !first.themenblockPhase || first.themenblockPhase === "BRÜCKE";
  if (!isBookend) return steps;

  // Finde den ersten SZENE-Step
  const szeneIndex = steps.findIndex((s, i) => i > 0 && s.themenblockPhase === "SZENE");
  if (szeneIndex <= 1) return steps; // Schon an Position 1 oder nicht vorhanden

  // Verschiebe SZENE-Step direkt nach Bookend (Position 1)
  const reordered = [...steps];
  const [szeneStep] = reordered.splice(szeneIndex, 1);
  reordered.splice(1, 0, szeneStep);
  return reordered;
}

/**
 * Brilliant-Prinzip: Vor der Erklärung eine Anticipation-Frage einfügen.
 * Für jeden Themenblock wird der erste CHECKPOINT-MC-Step als "Anticipation" kopiert
 * und direkt nach dem SZENE-Step eingefügt (vor ERKLÄRUNG).
 * Kein XP, kein Scoring — nur Neugier wecken.
 */
function injectAnticipation(steps: ContentStep[]): ContentStep[] {
  // Collect anticipation MCs per themenblock, then insert before first ERKLÄRUNG
  const anticipationByTB = new Map<string, ContentStep>();
  // Track which original CHECKPOINT stepIds are used as anticipation (to remove duplicates)
  const usedCheckpointIds = new Set<string>();

  // First pass: find CHECKPOINT MCs per themenblock
  for (const step of steps) {
    if (step.themenblockPhase !== "CHECKPOINT" || step.stepType !== "mc") continue;
    const tbMatch = step.stepId.match(/tb(\d+)/);
    if (!tbMatch || anticipationByTB.has(tbMatch[1])) continue;

    const mcOptions = step.question?.optionen ?? (step.question as Record<string, unknown>)?.options;
    if (!mcOptions) continue;

    usedCheckpointIds.add(step.stepId);
    anticipationByTB.set(tbMatch[1], {
      ...step,
      stepId: `${step.stepId}-anticipation`,
      themenblockPhase: "SZENE" as ContentStep["themenblockPhase"],
      modus: "puzzle" as ContentStep["modus"],
      xpValue: 0,
      track: "basis" as ContentStep["track"],
      contentC1: {
        ...step.contentC1,
        title: "Was denkst du?",
        body: step.contentC1.body || "Bevor wir es erklären — rate mal!",
      },
      contentB1: step.contentB1 ? {
        ...step.contentB1,
        title: "Was denkst du?",
        body: step.contentB1.body || "Was ist deine Vermutung?",
      } : undefined,
    });
  }

  if (anticipationByTB.size === 0) return steps;

  // Second pass: insert anticipation before first ERKLÄRUNG, skip original CHECKPOINT duplicates
  const injectedTBs = new Set<string>();
  const result: ContentStep[] = [];

  for (const step of steps) {
    // Before inserting an ERKLÄRUNG step, inject the anticipation MC (if not done yet)
    if (step.themenblockPhase === "ERKLÄRUNG") {
      const tbMatch = step.stepId.match(/tb(\d+)/);
      if (tbMatch && !injectedTBs.has(tbMatch[1]) && anticipationByTB.has(tbMatch[1])) {
        injectedTBs.add(tbMatch[1]);
        result.push(anticipationByTB.get(tbMatch[1])!);
      }
    }
    // Skip the original CHECKPOINT MC that was already used as anticipation
    if (usedCheckpointIds.has(step.stepId)) continue;
    result.push(step);
  }

  return result;
}

/**
 * Entfernt bereits beantwortete Quiz-Steps aus dem Array bei Session-Re-Entry.
 * Behält Text/Info-Steps (kein question), entfernt nur beantwortete Quiz-Steps.
 */
function deduplicateAnsweredSteps(
  steps: ContentStep[],
  answeredStepIds: Set<string>,
): ContentStep[] {
  if (answeredStepIds.size === 0) return steps;

  return steps.filter((step) => {
    // Basis-stepId ohne Suffixe (anticipation, retry, review, etc.)
    const baseId = step.stepId.replace(/-(?:anticipation|retry|review|challenge|adapt)$/, "");
    // Text-Steps und Info-Steps IMMER behalten (kein Quiz)
    if (step.stepType === "text" || step.stepType === "summary" || !step.question) return true;
    // Bookend-Steps behalten (Session-Intro/Outro)
    if (step.stepId.includes("-bk-")) return true;
    // Bereits beantwortet → rausfiltern
    return !answeredStepIds.has(baseId) && !answeredStepIds.has(step.stepId);
  });
}

interface UseSessionLoaderParams {
  leId: string;
  profilLoaded: boolean;
  getLeFortschritt: ReturnType<typeof useLernFortschritt>["getLeFortschritt"];
  activeTrack: "basis" | "all";
}

export function useSessionLoader({
  leId,
  profilLoaded,
  getLeFortschritt,
  activeTrack,
}: UseSessionLoaderParams) {
  const [steps, setSteps] = useState<ContentStep[]>([]);
  const [metadata, setMetadata] = useState<LektionMetadata | null>(null);
  const [glossar, setGlossar] = useState<GlossarEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [showWeitermachen, setShowWeitermachen] = useState(false);
  const [savedStep, setSavedStep] = useState<number | null>(null);
  const [activeSession, setActiveSession] = useState<SessionNumber>(1);
  const [availableSessions, setAvailableSessions] = useState<SessionNumber[]>([1]);
  const allStepsRef = useRef<ContentStep[]>([]);
  const hasCheckedWeitermachen = useRef(false);

  // Lektion + Sessions laden
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);

    const manifest = getLektionManifest(leId);
    if (!manifest) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    setAvailableSessions(getAvailableSessions(leId));

    loadLektion(leId).then((data) => {
      if (cancelled) return;
      if (!data) {
        setNotFound(true);
      } else {
        allStepsRef.current = data.steps;
        setSteps(injectAnticipation(reorderSzeneFirst(filterStepsByTrack(data.steps, activeTrack))));
        setMetadata(data.metadata);
        setGlossar(data.glossar);
        recordLearningActivity();
      }
      setLoading(false);
    }).catch((err) => {
      console.error("loadLektion failed:", err);
      if (!cancelled) {
        setNotFound(true);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leId]);

  // Session wechseln
  const switchSession = useCallback((session: SessionNumber, resetCallbacks: () => void) => {
    setLoading(true);
    setActiveSession(session);
    resetCallbacks();

    loadSession(leId, session).then((sessionSteps) => {
      if (sessionSteps) {
        allStepsRef.current = sessionSteps;
        setSteps(injectAnticipation(reorderSzeneFirst(filterStepsByTrack(sessionSteps, activeTrack))));
      }
      setLoading(false);
    });
  }, [leId, activeTrack]);

  // "Weitermachen" NUR einmal beim initialen Laden prüfen + Dedup
  useEffect(() => {
    if (hasCheckedWeitermachen.current) return;
    if (profilLoaded && steps.length > 0) {
      hasCheckedWeitermachen.current = true;
      const le = getLeFortschritt(leId);
      const saved = le?.sessions[activeSession];
      if (saved && saved.currentStep > 0 && saved.currentStep < saved.totalSteps - 1) {
        // Dedup: Bereits beantwortete Quiz-Steps aus dem Array entfernen
        const answeredIds = new Set(
          saved.antworten
            .map((a) => a.stepId.replace(/-(?:anticipation|retry|review|challenge|adapt)$/, ""))
        );
        if (answeredIds.size > 0) {
          setSteps((prev) => deduplicateAnsweredSteps(prev, answeredIds));
        }
        setSavedStep(saved.currentStep);
        setShowWeitermachen(true);
      }
    }
  }, [profilLoaded, steps.length, leId, activeSession, getLeFortschritt]);

  return {
    steps,
    setSteps,
    metadata,
    glossar,
    loading,
    notFound,
    showWeitermachen,
    setShowWeitermachen,
    savedStep,
    activeSession,
    availableSessions,
    allStepsRef,
    switchSession,
  };
}
