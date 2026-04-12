"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepWordOrderProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  words: string[];
  correctOrder: number[];
  hint?: string;
  onNext: (correct: boolean) => void;
}

export function StepWordOrder({
  title,
  body,
  glossar,
  instruction,
  words,
  correctOrder,
  hint,
  onNext,
}: StepWordOrderProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const available = words.map((_, i) => i).filter((i) => !selected.includes(i));

  const handleSelect = useCallback(
    (idx: number) => {
      if (submitted) return;
      setSelected((prev) => [...prev, idx]);
    },
    [submitted],
  );

  const handleRemove = useCallback(
    (pos: number) => {
      if (submitted) return;
      setSelected((prev) => prev.filter((_, i) => i !== pos));
    },
    [submitted],
  );

  const isCorrect =
    selected.length === correctOrder.length &&
    selected.every((val, i) => val === correctOrder[i]);

  const correctSentence = correctOrder.map((i) => words[i]).join(" ");

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <div className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4">
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>
      </div>

      {/* Gewählte Reihenfolge */}
      <div className="min-h-[56px] rounded-2xl bg-[var(--lern-card-bg)] border-2 border-dashed border-[var(--lern-border)] p-3 flex flex-wrap gap-2">
        {selected.length === 0 && (
          <p className="text-sm text-[var(--lern-text-tertiary)] italic">Tippe auf die Wörter in der richtigen Reihenfolge…</p>
        )}
        {selected.map((wordIdx, pos) => (
          <motion.button
            key={`sel-${pos}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => handleRemove(pos)}
            disabled={submitted}
            className={`rounded-xl px-3 py-2 text-sm font-medium transition-all active:scale-95 ${
              submitted
                ? wordIdx === correctOrder[pos]
                  ? "bg-[#6B8F71]/15 text-[#6B8F71] border border-[#6B8F71]/30"
                  : "bg-[#C96B5C]/15 text-[#C96B5C] border border-[#C96B5C]/30"
                : "bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] border border-[var(--lern-accent)]/30"
            }`}
          >
            {words[wordIdx]}
          </motion.button>
        ))}
      </div>

      {/* Verfügbare Wörter */}
      <div className="flex flex-wrap gap-2">
        {available.map((wordIdx) => (
          <motion.button
            key={`avail-${wordIdx}`}
            layout
            onClick={() => handleSelect(wordIdx)}
            disabled={submitted}
            className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] px-3 py-2 text-sm font-medium text-[var(--lern-text-primary)] transition-all active:scale-95 hover:border-[var(--lern-accent)]/50"
          >
            {words[wordIdx]}
          </motion.button>
        ))}
      </div>

      {hint && !submitted && selected.length === 0 && (
        <p className="text-xs text-[var(--lern-text-tertiary)] italic">{hint}</p>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={selected.length !== words.length}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40"
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              isCorrect
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold">
              {isCorrect ? "Richtig! Der Satz stimmt." : "Leider nicht ganz richtig."}
            </p>
            {!isCorrect && (
              <p className="text-sm text-[var(--lern-text-primary)]/70 mt-2">
                Richtige Reihenfolge: {correctSentence}
              </p>
            )}
          </motion.div>

          <button
            onClick={() => onNext(isCorrect)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
