"use client";

import { motion, AnimatePresence } from "framer-motion";

interface StreakBadgeProps {
  streak: number;
}

/**
 * Zeigt Streak ab 3 richtigen Antworten hintereinander.
 */
export function StreakBadge({ streak }: StreakBadgeProps) {
  return (
    <AnimatePresence>
      {streak >= 3 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="flex items-center gap-1 rounded-full bg-[#FF9500]/10 px-2.5 py-1"
        >
          <span className="text-sm">🔥</span>
          <span className="text-xs font-bold text-[#FF9500]">{streak}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
