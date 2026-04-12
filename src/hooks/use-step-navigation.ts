"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import type { ContentStep, ErlebnisModus } from "../../content/_types";
import type { StepAntwort } from "./use-lern-fortschritt";
import { kategorisiereFehler } from "@/lib/adaptive/fehler-analyse";
import type { AdaptiveSequencer, SequencerContext, CheckpointScore } from "@/lib/adaptive/sequencer";
import { calculateXP } from "../../content/_xp-formula";
import type { StepType, ThemenblockPhase, ErlebnisModus as ErlebnisModusV2 } from "../../content/_types";

// Phase → Modus Mapping: erzeugt automatischen Rhythmuswechsel
// Modus-Werte müssen aus ErlebnisModus stammen (content/_types.ts)
const PHASE_MODUS_MAP: Partial<Record<ThemenblockPhase, ErlebnisModusV2>> = {
  "SZENE": "story",
  "ERKLÄRUNG": "entdecker",
  "CHECKPOINT": "checkpoint",
  "ANDERS_ERKLÄRT": "entdecker",
  "STORYTELLING": "story",
  "PRAXIS_DIALOG": "challenge",
  "PATIENTEN_PERSPEKTIVE": "story",
  "ANGEHÖRIGEN_BERATUNG": "praxis-sim",
  "PFLEGEPLANUNG": "praxis-sim",
  "ANWENDUNG": "challenge",
  "REFLEXION": "schreibtisch",
  "BRÜCKE": "puzzle",
};

interface UseStepNavigationParams {
  steps: ContentStep[];
  leId: string;
  currentModus: ErlebnisModus | null;
  setCurrentModus: (modus: ErlebnisModus | null) => void;
  setShowModusTransition: (show: boolean) => void;
  sprachLevel: "c1" | "b1";
  setSprachLevel: (level: "c1" | "b1") => void;
  sequencerRef: React.MutableRefObject<AdaptiveSequencer | null>;
  profil: { achsen?: { sprache?: number } } | null;
  saveAntwort: (antwort: StepAntwort) => void;
  updateKompetenzEintrag: (antwort: StepAntwort, lernziel: string | undefined, leId: string) => void;
  addSchwaeche: (s: { leId: string; begriff: string; fragetext: string; richtigeAntwort: string; falscheAntwort: string }) => void;
  updateAchsen: () => void;
  isReviewingPhase: boolean;
  setIsReviewingPhase: (v: boolean) => void;
  reviewSteps: ContentStep[];
  reviewIndex: number;
  setReviewIndex: (fn: (i: number) => number) => void;
  onSessionComplete: () => void;
  // Gamification callbacks
  onXpEarned: (xp: number, stepId: string, stepType: StepType, bloomLevel: number) => void;
  onCorrect: () => void;
  onWrong: () => void;
  setFeedbackType: (type: "correct" | "wrong" | null) => void;
  incrementB1Toggle: () => void;
}

export function useStepNavigation({
  steps,
  leId,
  currentModus,
  setCurrentModus,
  setShowModusTransition,
  sprachLevel,
  setSprachLevel,
  sequencerRef,
  profil,
  saveAntwort,
  updateKompetenzEintrag,
  addSchwaeche,
  updateAchsen,
  isReviewingPhase,
  setIsReviewingPhase,
  reviewSteps,
  reviewIndex,
  setReviewIndex,
  onSessionComplete,
  onXpEarned,
  onCorrect,
  onWrong,
  setFeedbackType,
  incrementB1Toggle,
}: UseStepNavigationParams) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<Record<number, { correct: boolean | null; answered: boolean }>>({});
  const [retryQueue, setRetryQueue] = useState<{ step: ContentStep; insertAfter: number }[]>([]);
  const [activeRetryStep, setActiveRetryStep] = useState<ContentStep | null>(null);
  const [adaptiveStep, setAdaptiveStep] = useState<ContentStep | null>(null);
  const [adaptiveReason, setAdaptiveReason] = useState<string | null>(null);
  const [lastCheckpointScore, setLastCheckpointScore] = useState<CheckpointScore | null>(null);
  const [checkpointSkipCount, setCheckpointSkipCount] = useState(0);
  const [sessionAntworten, setSessionAntworten] = useState<StepAntwort[]>([]);
  const [scaffoldingText, setScaffoldingText] = useState<{ erklaerung: string; analogie: string; tipp: string } | null>(null);
  // Strategiewechsel-Engine: KI-Scaffolding für ALLE Fehler
  const [scaffoldingData, setScaffoldingData] = useState<{
    sandwich: { lob: string; korrektur: string; ermutigung: string };
    alternativeErklaerung: string;
    analogie?: string;
    strategieTyp: string;
  } | null>(null);
  const [scaffoldingLoading, setScaffoldingLoading] = useState(false);
  const scaffoldingStrategien = useRef<Record<string, string[]>>({});

  const stepStartTime = useRef<number>(Date.now());
  const sessionStartTime = useRef<number>(Date.now());
  const containerRef = useRef<HTMLDivElement>(null);

  // Retry-Step erzeugen: gleicher Inhalt, anderer Typ
  const createRetryStep = useCallback((original: ContentStep): ContentStep | null => {
    if (!original.question?.optionen || !original.question.fragetext) return null;

    if (original.stepType === "mc" && original.question.optionen.length >= 2) {
      const correct = original.question.optionen.find((o) => o.isCorrect);
      if (!correct) return null;
      return {
        ...original,
        stepId: `${original.stepId}-retry`,
        stepType: "truefalse",
        modus: "challenge",
        xpValue: 5,
        question: {
          ...original.question,
          trueFalseCards: [
            {
              statement: `${correct.text} — stimmt das zum Thema "${original.contentC1.title}"?`,
              isTrue: true,
              explanation: correct.explanation,
            },
          ],
        },
      };
    }

    if (original.stepType !== "mc" && original.question.optionen) {
      return {
        ...original,
        stepId: `${original.stepId}-retry`,
        stepType: "mc",
        modus: "challenge",
        xpValue: 5,
        contentC1: {
          ...original.contentC1,
          title: `Nochmal: ${original.contentC1.title}`,
        },
      };
    }

    return null;
  }, []);

  const goPrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setIsReviewMode(true);
    }
  }, [currentStep]);

  const advanceStep = useCallback(() => {
    // Antwortzeit-Referenz für nächsten Step zurücksetzen
    stepStartTime.current = Date.now();

    // Checkpoint-Score nach einem Step zurücksetzen
    if (lastCheckpointScore) {
      setLastCheckpointScore(null);
      setCheckpointSkipCount(0);
    }

    // Review-Phase am Session-Start abarbeiten
    if (isReviewingPhase && reviewSteps.length > 0) {
      if (reviewIndex < reviewSteps.length - 1) {
        setReviewIndex((i: number) => i + 1);
        return;
      } else {
        setIsReviewingPhase(false);
        return;
      }
    }

    // Adaptiven Step zurücksetzen wenn einer aktiv war
    if (adaptiveStep) {
      setAdaptiveStep(null);
      setAdaptiveReason(null);
      return;
    }

    // Legacy Retry-System
    if (activeRetryStep === null) {
      const dueRetry = retryQueue.find((r) => r.insertAfter <= currentStep);
      if (dueRetry) {
        setRetryQueue((q) => q.filter((r) => r !== dueRetry));
        setActiveRetryStep(dueRetry.step);
        return;
      }
    } else {
      setActiveRetryStep(null);
    }

    setIsReviewMode(false);

    if (currentStep < steps.length - 1) {
      // --- Adaptive Sequencer prüfen ---
      if (sequencerRef.current) {
        const ctx: SequencerContext = {
          currentIndex: currentStep,
          lastAntwort: sessionAntworten[sessionAntworten.length - 1] ?? null,
          sessionAntworten,
          streak,
          sprachLevel,
          sessionStartTime: sessionStartTime.current,
          leId,
        };

        // Checkpoint-Branching
        if (sequencerRef.current.isCheckpointStep(currentStep)) {
          const cpScore = sequencerRef.current.evaluateCheckpoint(ctx);
          setLastCheckpointScore(cpScore);
          const skipCount = sequencerRef.current.getSkipCountAfterCheckpoint(ctx, cpScore);
          if (skipCount > 0) {
            setCheckpointSkipCount(skipCount);
            const targetIndex = Math.min(currentStep + 1 + skipCount, steps.length - 1);
            const targetStep = steps[targetIndex];
            if (targetStep?.modus && targetStep.modus !== currentModus) {
              setCurrentModus(targetStep.modus);
            }
            setCurrentStep(targetIndex);
            return;
          }
        }

        const result = sequencerRef.current.getNextStep(ctx);

        if (result.isInserted) {
          setAdaptiveStep(result.step);
          setAdaptiveReason(result.reason ?? null);
          return;
        }

        if (result.shouldSkip && currentStep < steps.length - 2) {
          setCurrentStep((s) => s + 2);
          const skipToStep = steps[currentStep + 2];
          if (skipToStep?.modus && skipToStep.modus !== currentModus) {
            setCurrentModus(skipToStep.modus);
          }
          return;
        }

        if (sequencerRef.current.shouldSwitchToB1(ctx) && sprachLevel !== "b1") {
          setSprachLevel("b1");
          incrementB1Toggle();
        }
      }

      const nextStep = steps[currentStep + 1];
      // Phase→Modus: automatischer Rhythmus basierend auf Themenbogen-Phase
      const phaseModus = nextStep?.themenblockPhase
        ? PHASE_MODUS_MAP[nextStep.themenblockPhase as ThemenblockPhase]
        : undefined;
      const nextModus = phaseModus ?? nextStep?.modus;

      if (nextModus && nextModus !== currentModus) {
        setCurrentModus(nextModus);
      }

      setCurrentStep((s) => s + 1);
    } else {
      setIsComplete(true);
      updateAchsen();
      onSessionComplete();
    }
  }, [currentStep, steps, currentModus, retryQueue, activeRetryStep, updateAchsen, adaptiveStep, sessionAntworten, streak, sprachLevel, isReviewingPhase, reviewSteps, reviewIndex, leId, setCurrentModus, setShowModusTransition, setSprachLevel, sequencerRef, setIsReviewingPhase, setReviewIndex, onSessionComplete, lastCheckpointScore, incrementB1Toggle]);

  const goNext = useCallback(
    (correct?: boolean, gewaehlteAntwort?: string) => {
      const currentStepData = steps[currentStep];
      const zeitMs = Date.now() - stepStartTime.current;

      // Antwort in History speichern
      setAnswerHistory((prev) => ({
        ...prev,
        [currentStep]: { correct: correct ?? null, answered: true },
      }));

      // Adaptive Datensammlung
      if (currentStepData) {
        const sprachAchse = profil?.achsen?.sprache ?? 3;
        const antwort: StepAntwort = {
          stepId: currentStepData.stepId,
          stepType: currentStepData.stepType,
          correct: correct ?? null,
          zeitMs,
          bloomLevel: currentStepData.bloomLevel,
          gewaehlteOption: gewaehlteAntwort,
        };

        if (correct === false) {
          antwort.fehlerKategorie = kategorisiereFehler(
            antwort,
            sessionAntworten,
            sprachAchse,
          );
        }

        setSessionAntworten((prev) => [...prev, antwort]);
        saveAntwort(antwort);
        updateKompetenzEintrag(antwort, currentStepData.lernziel, leId);

        // Achsen alle 5 Antworten aktualisieren (nicht nur am Session-Ende)
        // Ermöglicht B1-Switch auch mid-session
        if ((sessionAntworten.length + 1) % 5 === 0) {
          updateAchsen();
        }
      }

      // XP für jeden Step berechnen
      if (currentStepData) {
        const earnedXp = calculateXP(currentStepData.stepType as StepType, currentStepData.bloomLevel ?? 1);
        onXpEarned(earnedXp, currentStepData.stepId, currentStepData.stepType as StepType, currentStepData.bloomLevel ?? 1);
      }

      if (correct !== undefined) {
        setTotalQuestions((t) => t + 1);
        setFeedbackType(correct ? "correct" : "wrong");

        if (correct) {
          setScore((s) => s + 1);
          setStreak((s) => {
            const newStreak = s + 1;
            setMaxStreak((m) => Math.max(m, newStreak));
            return newStreak;
          });
          onCorrect();
        } else {
          setStreak(0);
          onWrong();

          if (currentStepData?.question?.fragetext) {
            addSchwaeche({
              leId,
              begriff: currentStepData.contentC1.title,
              fragetext: currentStepData.question.fragetext,
              richtigeAntwort: currentStepData.question.optionen?.find((o) => o.isCorrect)?.text ?? "",
              falscheAntwort: gewaehlteAntwort ?? "",
            });
          }

          if (retryQueue.length < 3 && currentStepData) {
            const retry = createRetryStep(currentStepData);
            if (retry) {
              const insertAfter = currentStep + 3 + Math.floor(Math.random() * 3);
              setRetryQueue((q) => [...q, { step: retry, insertAfter }]);
            }
          }

          // KI-Scaffolding bei JEDER falschen Antwort (Strategiewechsel-Engine)
          if (currentStepData) {
            const richtigeAntwortText = currentStepData.question?.optionen?.find((o: { isCorrect?: boolean }) => o.isCorrect)?.text ?? "";
            const fehlerKat = sessionAntworten[sessionAntworten.length - 1]?.fehlerKategorie ?? "konzept";
            const themaKey = currentStepData.lernziel ?? currentStepData.contentC1.title;
            const bisherige = scaffoldingStrategien.current[themaKey] ?? [];
            const versuch = bisherige.length + 1;

            setScaffoldingLoading(true);
            setScaffoldingData(null);

            fetch("/api/ki-scaffolding", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                stepId: currentStepData.stepId,
                fehlerKategorie: fehlerKat,
                thema: currentStepData.contentC1.title,
                gewaehlteAntwort: gewaehlteAntwort ?? "",
                richtigeAntwort: richtigeAntwortText,
                sprachLevel,
                versuch,
                bisherigeStrategien: bisherige,
              }),
            })
              .then(r => r.json())
              .then(data => {
                if (data.sandwich) {
                  setScaffoldingData(data);
                  // Strategie merken für nächsten Fehler zum selben Thema
                  scaffoldingStrategien.current[themaKey] = [...bisherige, data.strategieTyp ?? "analogie"];
                }
                // Legacy-Feld für Rückwärtskompatibilität
                if (data.erklaerung || data.sandwich?.korrektur) {
                  setScaffoldingText({
                    erklaerung: data.sandwich?.korrektur ?? data.erklaerung ?? "",
                    analogie: data.analogie ?? data.alternativeErklaerung ?? "",
                    tipp: data.sandwich?.ermutigung ?? data.tipp ?? "",
                  });
                }
              })
              .catch(() => {
                // Statischer Fallback
                setScaffoldingData({
                  sandwich: {
                    lob: "Guter Versuch!",
                    korrektur: `Die richtige Antwort ist: ${richtigeAntwortText}`,
                    ermutigung: "Beim nächsten Mal klappt es bestimmt!",
                  },
                  alternativeErklaerung: "",
                  strategieTyp: "fallback",
                });
              })
              .finally(() => setScaffoldingLoading(false));
          }
        }
      }

      advanceStep();
    },
    [currentStep, steps, addSchwaeche, leId, advanceStep, retryQueue, createRetryStep, profil, sessionAntworten, saveAntwort, updateKompetenzEintrag, updateAchsen, onXpEarned, onCorrect, onWrong, setFeedbackType, sprachLevel],
  );

  // Reset für Session-Wechsel
  const resetNavigation = useCallback(() => {
    setCurrentStep(0);
    setScore(0);
    setTotalQuestions(0);
    setIsComplete(false);
    setStreak(0);
    setMaxStreak(0);
    setSessionAntworten([]);
    setAnswerHistory({});
    setRetryQueue([]);
    setActiveRetryStep(null);
    setAdaptiveStep(null);
    setAdaptiveReason(null);
    setScaffoldingText(null);
    sessionStartTime.current = Date.now();
    stepStartTime.current = Date.now();
  }, []);

  // Aktuellen Step bestimmen (memoisiert um Re-Renders zu vermeiden — #45)
  const step = useMemo(() => {
    if (isReviewingPhase && reviewSteps[reviewIndex]) {
      return reviewSteps[reviewIndex];
    }
    return adaptiveStep ?? activeRetryStep ?? steps[currentStep];
  }, [isReviewingPhase, reviewSteps, reviewIndex, adaptiveStep, activeRetryStep, steps, currentStep]);

  const progress = useMemo(
    () => steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0,
    [steps.length, currentStep],
  );

  return {
    currentStep,
    setCurrentStep,
    score,
    setScore,
    totalQuestions,
    setTotalQuestions,
    streak,
    maxStreak,
    isComplete,
    setIsComplete,
    isReviewMode,
    setIsReviewMode,
    answerHistory,
    adaptiveStep,
    adaptiveReason,
    lastCheckpointScore,
    checkpointSkipCount,
    sessionAntworten,
    activeRetryStep,
    containerRef,
    stepStartTime,
    step,
    progress,
    scaffoldingText,
    setScaffoldingText,
    scaffoldingData,
    setScaffoldingData,
    scaffoldingLoading,
    goPrev,
    goNext,
    advanceStep,
    resetNavigation,
  };
}
