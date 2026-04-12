"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { SequencingItem, GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";

interface StepSequencingProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  items: SequencingItem[];
  onNext: (correct: boolean) => void;
}

export function StepSequencing({
  title,
  body,
  glossar,
  instruction,
  items,
  onNext,
}: StepSequencingProps) {
  // Zufällige Anfangsreihenfolge
  const [order, setOrder] = useState<number[]>(() => {
    const indices = items.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragIdx, setDragIdx] = useState<number | null>(null);

  const moveUp = useCallback(
    (pos: number) => {
      if (submitted || pos === 0) return;
      setOrder((prev) => {
        const next = [...prev];
        [next[pos - 1], next[pos]] = [next[pos], next[pos - 1]];
        return next;
      });
    },
    [submitted]
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
    [submitted, order.length]
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
        {instruction}
      </p>

      <p className="text-sm text-[var(--lern-text-secondary)]">
        Nutze die Pfeile, um die richtige Reihenfolge herzustellen.
      </p>

      <div className="space-y-2">
        {order.map((itemIdx, pos) => {
          const item = items[itemIdx];
          return (
            <motion.div
              key={item.id}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
              className={`flex items-center gap-3 rounded-xl border-2 p-3 transition-colors ${
                submitted && correctPositions[pos]
                  ? "border-[#6B8F71] bg-[#6B8F71]/5"
                  : submitted && !correctPositions[pos]
                    ? "border-[#C96B5C] bg-[#C96B5C]/5"
                    : dragIdx === pos
                      ? "border-[var(--lern-accent)] bg-[var(--lern-accent-bg)]"
                      : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)]"
              }`}
              onPointerDown={() => !submitted && setDragIdx(pos)}
              onPointerUp={() => setDragIdx(null)}
            >
              {/* Positionsnummer */}
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  submitted && correctPositions[pos]
                    ? "bg-[#6B8F71] text-white"
                    : submitted && !correctPositions[pos]
                      ? "bg-[#C96B5C] text-white"
                      : "bg-[var(--lern-bg)] text-[var(--lern-text-secondary)]"
                }`}
              >
                {pos + 1}
              </span>

              {/* Bild (optional) */}
              {item.imageUrl && (
                <div className="h-12 w-12 shrink-0 rounded-lg overflow-hidden bg-[var(--lern-bg)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Label */}
              <p className="flex-1 text-sm font-medium text-[var(--lern-text-primary)]">
                {renderBold(item.label)}
              </p>

              {/* Pfeil-Buttons */}
              {!submitted && (
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveUp(pos)}
                    disabled={pos === 0}
                    className="rounded-lg bg-[var(--lern-bg)] px-2 py-1 text-xs disabled:opacity-30 active:bg-[var(--lern-divider)]"
                  >
                    ▲
                  </button>
                  <button
                    onClick={() => moveDown(pos)}
                    disabled={pos === order.length - 1}
                    className="rounded-lg bg-[var(--lern-bg)] px-2 py-1 text-xs disabled:opacity-30 active:bg-[var(--lern-divider)]"
                  >
                    ▼
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[var(--lern-accent)]"
        >
          Prüfen
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
              {isCorrect
                ? "Perfekte Reihenfolge!"
                : `${correctPositions.filter(Boolean).length} von ${items.length} an der richtigen Position`}
            </p>
            {!isCorrect && (
              <div className="mt-2">
                <p className="text-sm text-[var(--lern-text-secondary)]">Richtige Reihenfolge:</p>
                <ol className="mt-1 space-y-1">
                  {items.map((item, i) => (
                    <li key={item.id} className="text-sm text-[var(--lern-text-primary)]/70">
                      {i + 1}. {item.label}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </motion.div>

          <button
            onClick={() => onNext(isCorrect)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[var(--lern-accent)]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
