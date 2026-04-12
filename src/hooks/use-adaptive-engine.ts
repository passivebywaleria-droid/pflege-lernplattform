"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type { ContentStep } from "../../content/_types";
import { AdaptiveSequencer, createSequencer } from "@/lib/adaptive/sequencer";
import { zaehleWiederholungen } from "@/lib/adaptive/session-planner";
import type { LernProfil } from "./use-lern-fortschritt";

// Pure function, no hook dependencies — can be called outside of hooks
export function filterStepsByTrack(allSteps: ContentStep[], track: "basis" | "all"): ContentStep[] {
  if (track === "all") return allSteps;
  return allSteps.filter((s) => !s.track || s.track === "basis");
}

interface UseAdaptiveEngineParams {
  steps: ContentStep[];
  profil: LernProfil | null;
  currentStep: number;
  allStepsRef: React.MutableRefObject<ContentStep[]>;
}

export function useAdaptiveEngine({
  steps,
  profil,
  currentStep,
  allStepsRef,
}: UseAdaptiveEngineParams) {
  const [sprachLevel, setSprachLevel] = useState<"c1" | "b1">("c1");
  const [activeTrack, setActiveTrack] = useState<"basis" | "all">("all");
  const [showVertiefungPrompt, setShowVertiefungPrompt] = useState(false);
  const [showModusTransition, setShowModusTransition] = useState(false);
  const [currentModus, setCurrentModus] = useState<import("../../content/_types").ErlebnisModus | null>(null);
  const [reviewSteps, setReviewSteps] = useState<ContentStep[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isReviewingPhase, setIsReviewingPhase] = useState(false);
  const [pingCount, setPingCount] = useState(0);

  const sequencerRef = useRef<AdaptiveSequencer | null>(null);

  // Track-Filter: Filtert Steps nach aktuellem Track
  const filterByTrack = useCallback((allSteps: ContentStep[], track: "basis" | "all"): ContentStep[] => {
    if (track === "all") return allSteps;
    return allSteps.filter((s) => !s.track || s.track === "basis");
  }, []);

  // Track umschalten → Steps neu filtern
  const toggleTrack = useCallback((newTrack: "basis" | "all", setSteps: (steps: ContentStep[]) => void, setCurrentStep: (fn: (s: number) => number) => void) => {
    setActiveTrack(newTrack);
    const filtered = filterByTrack(allStepsRef.current, newTrack);
    setSteps(filtered);
    setCurrentStep((s: number) => s >= filtered.length ? Math.max(0, filtered.length - 1) : s);
    setShowVertiefungPrompt(false);
  }, [filterByTrack, allStepsRef]);

  // Ping-Count berechnen
  useEffect(() => {
    if (profil?.kompetenzRegister) {
      setPingCount(zaehleWiederholungen(profil.kompetenzRegister));
    }
  }, [profil]);

  // Sequencer initialisieren wenn Steps + Profil bereit
  useEffect(() => {
    if (steps.length > 0 && profil) {
      const seq = createSequencer(steps, profil);
      sequencerRef.current = seq;

      const reviews = seq.getReviewSteps(3);
      if (reviews.length > 0 && currentStep === 0 && !isReviewingPhase && reviewSteps.length === 0) {
        setReviewSteps(reviews);
        setReviewIndex(0);
        setIsReviewingPhase(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [steps, profil]);

  // Profil im Sequencer aktualisieren
  useEffect(() => {
    if (sequencerRef.current && profil) {
      sequencerRef.current.updateProfil(profil);
    }
  }, [profil]);

  // #38: Initiale Sprachlevel-Setzung aus Einstufungs-Profil
  // Wenn sprache < 3 → automatisch B1 statt manueller Toggle
  useEffect(() => {
    if (profil?.achsen?.sprache !== undefined && profil.achsen.sprache < 3) {
      setSprachLevel("b1");
    }
  }, [profil?.achsen?.sprache, setSprachLevel]);

  // Adaptiver Vertiefungs-Prompt: Nach 3+ richtigen Antworten in Folge
  const checkVertiefungPrompt = useCallback((streak: number) => {
    if (activeTrack !== "basis") return;
    if (streak < 3) return;
    const hasVertiefung = allStepsRef.current.some((s) => s.track === "vertiefung");
    if (!hasVertiefung) return;
    if (!showVertiefungPrompt) {
      setShowVertiefungPrompt(true);
    }
  }, [activeTrack, showVertiefungPrompt, allStepsRef]);

  return {
    sprachLevel,
    setSprachLevel,
    activeTrack,
    setActiveTrack,
    showVertiefungPrompt,
    setShowVertiefungPrompt,
    showModusTransition,
    setShowModusTransition,
    currentModus,
    setCurrentModus,
    reviewSteps,
    reviewIndex,
    setReviewIndex,
    isReviewingPhase,
    setIsReviewingPhase,
    pingCount,
    sequencerRef,
    filterByTrack,
    toggleTrack,
    checkVertiefungPrompt,
  };
}
