"use client";

import { useState, useCallback } from "react";
import type { StepType } from "../../content/_types";

export function useGamification() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"correct" | "wrong" | null>(null);
  const [sessionXp, setSessionXp] = useState(0);
  const [lastAnsweredStepId, setLastAnsweredStepId] = useState("");
  const [showXpPop, setShowXpPop] = useState(false);

  const onXpEarned = useCallback((xp: number, stepId: string, _stepType: StepType, _bloomLevel: number) => {
    setSessionXp((prev) => prev + xp);
    setLastAnsweredStepId(stepId);
    setShowXpPop(true);
  }, []);

  const resetGamification = useCallback(() => {
    setShowConfetti(false);
    setSessionXp(0);
    setShowXpPop(false);
  }, []);

  return {
    showConfetti,
    setShowConfetti,
    feedbackType,
    setFeedbackType,
    sessionXp,
    lastAnsweredStepId,
    showXpPop,
    onXpEarned,
    resetGamification,
  };
}
