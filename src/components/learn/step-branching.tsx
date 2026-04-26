"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { StepShell } from "./step-shell";
import { StepActionBar } from "./step-action-bar";

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

  const safeFragetext = fragetext ?? "";
  const safeTitle = title ?? "";
  const titleEqualsFrage =
    safeTitle.trim().toLowerCase() === safeFragetext.trim().toLowerCase();
  const question = titleEqualsFrage
    ? safeFragetext
    : safeTitle || safeFragetext;

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      <StepShell
        kindLabel="Entscheidung"
        question={question}
        glossar={glossar}
      >
        {/* Situation als Sprechblase oben */}
        {body && (
          <div className="mb-3 rounded-xl bg-[var(--lern-warning)]/5 border border-[var(--lern-warning)]/15 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--lern-warning)] mb-1">
              Situation
            </p>
            <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed italic">
              &ldquo;<FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>&rdquo;
            </p>
          </div>
        )}

        {!titleEqualsFrage && title && (
          <p className="mb-3 text-sm font-medium text-[var(--lern-text-primary)]">
            <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
          </p>
        )}

        <div className="flex flex-col gap-2">
          {options.map((option, idx) => (
            <motion.button
              key={idx}
              onClick={() => selected === null && setSelected(idx)}
              whileTap={selected === null ? { scale: 0.98 } : undefined}
              className={`w-full rounded-xl border text-left transition-all ${
                selected === idx
                  ? option.isCorrect
                    ? "border-[var(--lern-success)] bg-[var(--lern-success)]/8"
                    : "border-[var(--lern-error)] bg-[var(--lern-error)]/8"
                  : selected !== null
                    ? option.isCorrect
                      ? "border-[var(--lern-success)]/40 bg-[var(--lern-success)]/5"
                      : "border-[var(--lern-border)] opacity-60"
                    : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)] hover:border-[var(--lern-accent)]/40"
              }`}
              style={{ padding: "12px 14px" }}
            >
              <p className="text-sm leading-snug text-[var(--lern-text-primary)]">
                <FachbegriffText glossar={glossar ?? []}>{option.text}</FachbegriffText>
              </p>

              <AnimatePresence>
                {selected === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 pt-2 border-t border-current/10"
                  >
                    <p className="text-xs text-[var(--lern-text-secondary)] leading-relaxed">
                      <FachbegriffText glossar={glossar ?? []}>
                        {(sprachLevel === "b1" && option.feedbackB1) || option.feedback}
                      </FachbegriffText>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </StepShell>

      {selected !== null && (
        <StepActionBar>
          <button
            onClick={() => onNext(options[selected].isCorrect)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359]"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}
