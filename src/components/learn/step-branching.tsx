"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BranchingOption {
  text: string;
  feedback: string;
  isCorrect: boolean;
}

interface StepBranchingProps {
  title: string;
  body: string;
  fragetext: string;
  options: BranchingOption[];
  onNext: (correct: boolean) => void;
}

export function StepBranching({
  title,
  body,
  fragetext,
  options,
  onNext,
}: StepBranchingProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      <div className="rounded-2xl bg-[#FFF9E6] dark:bg-[#FFD60A]/10 border border-[#FFD60A]/30 p-4">
        <p className="text-sm font-medium text-[#FF9500] mb-1">
          💬 Situation
        </p>
        <p className="text-[#1d1d1f] dark:text-white/90 leading-relaxed italic">
          &ldquo;{body}&rdquo;
        </p>
      </div>

      <p className="text-lg font-medium text-[#1d1d1f] dark:text-white">
        {fragetext}
      </p>

      <div className="space-y-3">
        {options.map((option, idx) => (
          <motion.button
            key={idx}
            onClick={() => selected === null && setSelected(idx)}
            whileTap={selected === null ? { scale: 0.98 } : undefined}
            className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
              selected === idx
                ? option.isCorrect
                  ? "border-[#30D158] bg-[#30D158]/5"
                  : "border-[#FF3B30] bg-[#FF3B30]/5"
                : selected !== null
                  ? option.isCorrect
                    ? "border-[#30D158]/40 bg-[#30D158]/5"
                    : "border-[#d2d2d7] dark:border-white/15 opacity-60"
                  : "border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5 hover:border-[#0071e3]/40"
            }`}
          >
            <p className="font-medium text-[#1d1d1f] dark:text-white">
              {option.text}
            </p>

            <AnimatePresence>
              {selected === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 pt-3 border-t border-current/10"
                >
                  <p className="text-sm text-[#6e6e73] dark:text-white/60">
                    {option.feedback}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      {selected !== null && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => onNext(options[selected].isCorrect)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </motion.button>
      )}
    </div>
  );
}
