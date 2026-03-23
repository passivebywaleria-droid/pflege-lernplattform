"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TextSegment {
  text: string;
  isError: boolean;
  reason?: string;
}

interface StepHighlightProps {
  title: string;
  body?: string;
  segments: TextSegment[];
  onNext: (correct: boolean) => void;
}

export function StepHighlight({
  title,
  body,
  segments,
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
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      <p className="text-sm text-[#6e6e73]">
        Markiere alle fehlerhaften Formulierungen.
        <span className="ml-2 text-xs">
          ({marked.size} markiert, {errors.length} Fehler vorhanden)
        </span>
      </p>

      {/* Text with markable segments */}
      <div className="rounded-2xl bg-white dark:bg-white/5 border border-[#d2d2d7] dark:border-white/15 p-5">
        <p className="text-sm leading-relaxed text-[#1d1d1f] dark:text-white">
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
                    ? "bg-[#30D158]/20 text-[#1d1d1f] dark:text-white font-medium"
                    : isWrongMark
                      ? "bg-[#FF3B30]/20 text-[#FF3B30] line-through"
                      : isMissed
                        ? "bg-[#FF9500]/30 text-[#1d1d1f] dark:text-white underline decoration-wavy decoration-[#FF9500]"
                        : isMarked
                          ? "bg-[#FFD60A]/40 text-[#1d1d1f] dark:text-white"
                          : "hover:bg-[#FFD60A]/10"
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
        <div className="flex flex-wrap gap-3 text-xs text-[#6e6e73]">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#30D158]/20" /> Richtig
            markiert
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#FF3B30]/20" /> Falsch
            markiert
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-[#FF9500]/30" /> Uebersehen
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
                <span className="text-[#FF9500] mt-0.5">&#8594;</span>
                <div>
                  <span className="font-medium text-[#1d1d1f] dark:text-white">
                    &quot;{s.text.trim()}&quot;
                  </span>
                  <span className="text-[#6e6e73] ml-1">
                    &mdash; {s.reason}
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}

      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Pruefen
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              allCorrect
                ? "bg-[#30D158]/10 border border-[#30D158]/30"
                : "bg-[#FF9500]/10 border border-[#FF9500]/30"
            }`}
          >
            <p className="font-semibold text-[#1d1d1f] dark:text-white">
              {allCorrect
                ? "Perfekt! Alle Fehler erkannt."
                : `${correctlyMarked}/${errors.length} Fehler gefunden${wronglyMarked > 0 ? `, ${wronglyMarked} falsch markiert` : ""}.`}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(allCorrect)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
