"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { generiereSandwichFeedback, SandwichFeedbackDisplay } from "./bloom-feedback";

interface StepSortingProps {
  title: string;
  body?: string;
  fragetext: string;
  items: string[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

export function StepSorting({
  title,
  body,
  fragetext,
  items,
  glossar,
  onNext,
}: StepSortingProps) {
  const [order, setOrder] = useState(() => {
    const indices = items.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });
  const [submitted, setSubmitted] = useState(false);

  const moveUp = useCallback(
    (pos: number) => {
      if (submitted || pos === 0) return;
      setOrder((prev) => {
        const next = [...prev];
        [next[pos - 1], next[pos]] = [next[pos], next[pos - 1]];
        return next;
      });
    },
    [submitted],
  );

  const moveDown = useCallback(
    (pos: number) => {
      if (submitted || pos === order.length - 1) return;
      setOrder((prev) => {
        const next = [...prev];
        [next[pos], next[pos + 1]] = [next[pos + 1], next[pos]];
        return next;
      });
    },
    [submitted, order.length],
  );

  const isCorrect = order.every((val, idx) => val === idx);
  const correctPositions = order.map((val, idx) => val === idx);

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">
        <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
      </p>

      <p className="text-sm text-[var(--lern-text-secondary)]">
        Nutze die Pfeile, um die Reihenfolge zu ändern.
      </p>

      <div className="space-y-2" role="list" aria-label="Sortierbare Elemente">
        {order.map((itemIdx, pos) => (
          <motion.div
            key={itemIdx}
            layout
            role="listitem"
            aria-label={`Position ${pos + 1}: ${items[itemIdx]}`}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className={`flex items-center gap-3 rounded-xl border-2 p-3 transition-colors ${
              submitted && correctPositions[pos]
                ? "border-[#6B8F71] bg-[#6B8F71]/5"
                : submitted && !correctPositions[pos]
                  ? "border-[#C96B5C] bg-[#C96B5C]/5"
                  : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)]"
            }`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                submitted && correctPositions[pos]
                  ? "bg-[#6B8F71] text-white"
                  : submitted && !correctPositions[pos]
                    ? "bg-[#C96B5C] text-white"
                    : "bg-[var(--lern-card-bg)] text-[var(--lern-text-secondary)]"
              }`}
            >
              {pos + 1}
            </span>

            <p className="flex-1 text-sm font-medium text-[var(--lern-text-primary)]">
              {renderBold(items[itemIdx])}
            </p>

            {!submitted && (
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveUp(pos)}
                  disabled={pos === 0}
                  aria-label={`${items[itemIdx]} nach oben verschieben`}
                  className="rounded-lg bg-[var(--lern-card-bg)] px-2 py-1 text-xs disabled:opacity-30 active:bg-[var(--lern-border)] focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
                >
                  ▲
                </button>
                <button
                  onClick={() => moveDown(pos)}
                  disabled={pos === order.length - 1}
                  aria-label={`${items[itemIdx]} nach unten verschieben`}
                  className="rounded-lg bg-[var(--lern-card-bg)] px-2 py-1 text-xs disabled:opacity-30 active:bg-[var(--lern-border)] focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
                >
                  ▼
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          aria-label="Reihenfolge prüfen"
          className="w-full rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
        >
          Prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <SandwichFeedbackDisplay
            feedback={generiereSandwichFeedback(
              isCorrect,
              isCorrect ? "" : `${correctPositions.filter(Boolean).length} von ${items.length} an der richtigen Position`,
              isCorrect ? "Perfekte Reihenfolge!" : undefined,
            )}
            correct={isCorrect}
          />

          <button
            onClick={() => onNext(isCorrect)}
            aria-label="Weiter zum nächsten Schritt"
            className="w-full rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
