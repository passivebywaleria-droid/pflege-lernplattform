"use client";

import { motion, AnimatePresence } from "framer-motion";

interface HeartsDisplayProps {
  hearts: number;
  maxHearts: number;
}

export function HeartsDisplay({ hearts, maxHearts }: HeartsDisplayProps) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxHearts }).map((_, i) => (
        <AnimatePresence key={i} mode="wait">
          {i < hearts ? (
            <motion.span
              key="full"
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              className="text-sm"
            >
              ❤️
            </motion.span>
          ) : (
            <motion.span
              key="empty"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              className="text-sm grayscale"
            >
              🤍
            </motion.span>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}
