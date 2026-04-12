"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LottieFeedback } from "./lottie-feedback";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";

interface StreakBadgeProps {
  streak: number;
}

/**
 * Zeigt Streak ab 3 richtigen Antworten hintereinander.
 * Ab 5: Lottie-Feuer statt Emoji.
 */
export function StreakBadge({ streak }: StreakBadgeProps) {
  return (
    <AnimatePresence>
      {streak >= 3 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="flex items-center gap-1 rounded-full bg-[#D4956A]/10 px-2.5 py-1"
        >
          {streak >= 5 ? (
            <LottieFeedback animation="streak" size={20} loop />
          ) : (
            <HandDrawnIcon name="fire" size={16} color="#D4956A" />
          )}
          <span className="text-xs font-bold text-[#D4956A]">{streak}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
