"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface BranchingOption {
  text: string;
  feedback: string;
  feedbackB1?: string;
  isCorrect: boolean;
}

interface StepBranchingProps {
  title: string;
  body: string;
  fragetext: string;
  options: BranchingOption[];
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepBranching({
  title,
  body,
  fragetext,
  options,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepBranchingProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      <div className="rounded-2xl bg-[var(--lern-warning)]/5 border border-[var(--lern-warning)]/15 p-4">
        <p className="text-sm font-medium text-[var(--lern-warning)] mb-1">
          💬 Situation
        </p>
        <p className="text-[var(--lern-text-primary)] leading-relaxed italic">
          &ldquo;<FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>&rdquo;
        </p>
      </div>

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">
        <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
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
                  ? "border-[var(--lern-success)] bg-[var(--lern-success)]/5"
                  : "border-[var(--lern-error)] bg-[var(--lern-error)]/5"
                : selected !== null
                  ? option.isCorrect
                    ? "border-[var(--lern-success)]/40 bg-[var(--lern-success)]/5"
                    : "border-[var(--lern-border)] opacity-60"
                  : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)] hover:border-[var(--lern-accent)]/40"
            }`}
          >
            <p className="font-medium text-[var(--lern-text-primary)]">
              <FachbegriffText glossar={glossar ?? []}>{option.text}</FachbegriffText>
            </p>

            <AnimatePresence>
              {selected === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 pt-3 border-t border-current/10"
                >
                  <p className="text-sm text-[var(--lern-text-secondary)]">
                    <FachbegriffText glossar={glossar ?? []}>{(sprachLevel === "b1" && option.feedbackB1) || option.feedback}</FachbegriffText>
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
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          Weiter
        </motion.button>
      )}
    </div>
  );
}
