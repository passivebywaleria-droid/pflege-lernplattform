"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { StepActionBar } from "./step-action-bar";

interface TextSegment {
  text: string;
  isError: boolean;
  reason?: string;
  reasonB1?: string;
}

interface StepHighlightProps {
  title: string;
  body?: string;
  segments: TextSegment[];
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepHighlight({
  title,
  body,
  segments,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepHighlightProps) {
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);

  const errors = segments.filter((s) => s.isError);
  const correctlyMarked = segments.filter(
    (s, i) => s.isError && marked.has(i)
  ).length;
  const wronglyMarked = segments.filter(
    (s, i) => !s.isError && marked.has(i)
  ).length;

  const allCorrect =
    correctlyMarked === errors.length && wronglyMarked === 0;

  const toggle = (idx: number) => {
    if (checked) return;
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-base font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-sm text-[var(--lern-text-secondary)]">
        Markiere alle fehlerhaften Formulierungen.
        <span className="ml-2 text-xs">
          ({marked.size} markiert, {errors.length} Fehler vorhanden)
        </span>
      </p>

      {/* Text with markable segments */}
      <div className="rounded-2xl bg-[var(--lern-bg-primary)] border-[1.5px] border-[var(--lern-border)] p-5">
        <p className="text-sm leading-relaxed text-[var(--lern-text-primary)]">
          {segments.map((segment, i) => {
            const isMarked = marked.has(i);
            const isError = segment.isError;
            const isCorrectMark = checked && isMarked && isError;
            const isWrongMark = checked && isMarked && !isError;
            const isMissed = checked && !isMarked && isError;

            // Non-interactive segments
            if (!isError && !isMarked && !checked) {
              return <span key={i}>{segment.text}</span>;
            }

            return (
              <motion.span
                key={i}
                whileTap={!checked ? { scale: 0.97 } : undefined}
                onClick={() => toggle(i)}
                className={`cursor-pointer px-1 py-0.5 rounded transition-all inline ${
                  isCorrectMark
                    ? "bg-[#3E5A6A]/20 text-[var(--lern-text-primary)] font-medium"
                    : isWrongMark
                      ? "bg-[#C96B5C]/20 text-[#C96B5C] line-through"
                      : isMissed
                        ? "bg-[#D4956A]/30 text-[var(--lern-text-primary)] underline decoration-wavy decoration-[#D4956A]"
                        : isMarked
                          ? "bg-[#BFA48E]/40 text-[var(--lern-text-primary)]"
                          : "hover:bg-[#BFA48E]/10"
                }`}
              >
                {segment.text}
              </motion.span>
            );
          })}
        </p>
      </div>

      {/* Legend after check */}
      {checked && (
        <div className="flex flex-wrap gap-3 text-xs text-[var(--lern-text-secondary)]">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#3E5A6A]/20" /> Richtig
            markiert
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#C96B5C]/20" /> Falsch
            markiert
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#D4956A]/30" /> Übersehen
          </span>
        </div>
      )}

      {/* Error explanations after check */}
      {checked && (
        <div className="space-y-2">
          {segments
            .filter((s) => s.isError)
            .map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span className="text-[#D4956A] mt-0.5">&#8594;</span>
                <div>
                  <span className="font-medium text-[var(--lern-text-primary)]">
                    &quot;{s.text.trim()}&quot;
                  </span>
                  <span className="text-[var(--lern-text-secondary)] ml-1">
                    &mdash; {(sprachLevel === "b1" && s.reasonB1) || s.reason}
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}

      {checked && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-3 ${
            allCorrect
              ? "bg-[var(--lern-success)]/10 border border-[var(--lern-success)]/30"
              : "bg-[var(--lern-warning)]/10 border border-[var(--lern-warning)]/30"
          }`}
        >
          <p className="font-semibold text-sm text-[var(--lern-text-primary)]">
            {allCorrect
              ? "Perfekt! Alle Fehler erkannt."
              : `${correctlyMarked}/${errors.length} Fehler gefunden${wronglyMarked > 0 ? `, ${wronglyMarked} falsch markiert` : ""}.`}
          </p>
        </motion.div>
      )}

      {!checked ? (
        <StepActionBar>
          <button
            onClick={() => setChecked(true)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52]"
          >
            Prüfen
          </button>
        </StepActionBar>
      ) : (
        <StepActionBar>
          <button
            onClick={() => onNext(allCorrect)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52]"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}
