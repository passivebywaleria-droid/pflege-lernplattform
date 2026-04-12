"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { renderBold } from "./fachbegriff-tooltip";

interface ErrorSpotError {
  start: number;
  end: number;
  correction: string;
  explanation: string;
  explanationB1?: string;
}

interface StepErrorSpotProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  instruction: string;
  text: string;
  errors: ErrorSpotError[];
  onNext: (correct: boolean) => void;
}

export function StepErrorSpot({
  title,
  body,
  glossar: _glossar,
  sprachLevel = "c1",
  instruction,
  text,
  errors,
  onNext,
}: StepErrorSpotProps) {
  const [found, setFound] = useState<Set<number>>(new Set());
  const [wrongClicks, setWrongClicks] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Text in Segmente aufteilen: normal und Fehler
  const segments: { text: string; errorIdx: number | null; start: number }[] = [];
  let pos = 0;
  const sortedErrors = [...errors].sort((a, b) => a.start - b.start);

  for (let i = 0; i < sortedErrors.length; i++) {
    const err = sortedErrors[i];
    if (pos < err.start) {
      segments.push({ text: text.slice(pos, err.start), errorIdx: null, start: pos });
    }
    segments.push({ text: text.slice(err.start, err.end), errorIdx: i, start: err.start });
    pos = err.end;
  }
  if (pos < text.length) {
    segments.push({ text: text.slice(pos), errorIdx: null, start: pos });
  }

  const handleClick = useCallback(
    (errorIdx: number | null) => {
      if (submitted) return;
      if (errorIdx !== null) {
        setFound((prev) => new Set(prev).add(errorIdx));
      } else {
        setWrongClicks((prev) => prev + 1);
      }
    },
    [submitted],
  );

  const allFound = found.size === errors.length;
  const score = errors.length > 0 ? found.size / errors.length : 0;

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <div className="rounded-2xl bg-[#C96B5C]/8 border border-[#C96B5C]/20 p-4">
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>
        <p className="text-sm text-[var(--lern-text-tertiary)] mt-1">
          {found.size}/{errors.length} Fehler gefunden
        </p>
      </div>

      {/* Text mit klickbaren Segmenten */}
      <div className="rounded-2xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-5">
        <p className="text-[15px] leading-relaxed">
          {segments.map((seg, i) => {
            const isError = seg.errorIdx !== null;
            const isFound = isError && found.has(seg.errorIdx!);
            const showCorrection = submitted && isError;

            return (
              <span
                key={i}
                onClick={() => !submitted && handleClick(seg.errorIdx)}
                className={`${
                  isError
                    ? isFound
                      ? "bg-[#6B8F71]/20 line-through decoration-[#6B8F71] cursor-default"
                      : submitted
                        ? "bg-[#C96B5C]/20 underline decoration-wavy decoration-[#C96B5C] cursor-default"
                        : "cursor-pointer hover:bg-[#D4956A]/10 rounded transition-colors"
                    : submitted
                      ? ""
                      : "cursor-pointer"
                }`}
              >
                {seg.text}
                {showCorrection && (
                  <span className="text-[#6B8F71] font-semibold ml-1">[{errors[seg.errorIdx!].correction}]</span>
                )}
              </span>
            );
          })}
        </p>
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
        >
          {allFound ? "Alle gefunden — Auflösung zeigen" : "Auflösung zeigen"}
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              score >= 0.8
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : score >= 0.5
                  ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold">
              {allFound
                ? "Alle Fehler gefunden!"
                : `Du hast ${found.size} von ${errors.length} Fehlern gefunden.`}
              {wrongClicks > 0 && ` (${wrongClicks} Fehlklick${wrongClicks > 1 ? "s" : ""})`}
            </p>
          </motion.div>

          {/* Erklärungen */}
          {errors.map((err, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-3"
            >
              <p className="text-sm">
                <span className="line-through text-[#C96B5C]">{text.slice(err.start, err.end)}</span>
                {" → "}
                <span className="font-semibold text-[#6B8F71]">{err.correction}</span>
              </p>
              <p className="text-xs text-[var(--lern-text-primary)]/60 mt-1">
                {renderBold((sprachLevel === "b1" && err.explanationB1) || err.explanation)}
              </p>
            </motion.div>
          ))}

          <button
            onClick={() => onNext(score >= 0.8)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
