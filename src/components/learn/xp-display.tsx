"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateXP } from "../../../content/_xp-formula";
import type { StepType } from "../../../content/_types";

interface XpPopProps {
  /** Trigger: stepId ändert sich → neue Animation */
  stepId: string;
  stepType: StepType;
  bloomLevel: number;
  /** Nur anzeigen wenn Step beantwortet wurde (nicht bei reinen Text-Steps) */
  show: boolean;
}

/**
 * "+15 XP" Animation nach Beantwortung eines Steps.
 * Goldener Text, fade-up, verschwindet nach 1.5s.
 */
export function XpPop({ stepId, stepType, bloomLevel, show }: XpPopProps) {
  const [visible, setVisible] = useState(false);
  const [xp, setXp] = useState(0);
  const [lastStepId, setLastStepId] = useState("");

  useEffect(() => {
    if (show && stepId !== lastStepId) {
      const earned = calculateXP(stepType, bloomLevel);
      setXp(earned);
      setLastStepId(stepId);
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [show, stepId, stepType, bloomLevel, lastStepId]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -24 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute right-4 top-1 z-30"
        >
          <span className="text-sm font-bold text-[#D4956A] drop-shadow-sm">
            +{xp} XP
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface SessionXpCounterProps {
  /** Gesamte XP der aktuellen Session */
  sessionXp: number;
}

/**
 * Session-XP-Counter in der oberen Leiste.
 * Goldenes Badge mit animiertem Zähler.
 */
export function SessionXpCounter({ sessionXp }: SessionXpCounterProps) {
  return (
    <motion.div
      className="flex items-center gap-1 rounded-full bg-[#D4956A]/10 px-2.5 py-1"
      key={sessionXp}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4956A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      <motion.span
        key={sessionXp}
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="text-xs font-bold text-[#D4956A] tabular-nums"
      >
        {sessionXp}
      </motion.span>
    </motion.div>
  );
}
