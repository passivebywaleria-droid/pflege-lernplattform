"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

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
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f]">
        {fragetext}
      </p>

      <p className="text-sm text-[#6e6e73]">
        Nutze die Pfeile, um die Reihenfolge zu aendern.
      </p>

      <div className="space-y-2">
        {order.map((itemIdx, pos) => (
          <motion.div
            key={itemIdx}
            layout
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className={`flex items-center gap-3 rounded-xl border-2 p-3 transition-colors ${
              submitted && correctPositions[pos]
                ? "border-[#30D158] bg-[#30D158]/5"
                : submitted && !correctPositions[pos]
                  ? "border-[#FF3B30] bg-[#FF3B30]/5"
                  : "border-[#d2d2d7] bg-white"
            }`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                submitted && correctPositions[pos]
                  ? "bg-[#30D158] text-white"
                  : submitted && !correctPositions[pos]
                    ? "bg-[#FF3B30] text-white"
                    : "bg-[#f5f5f7] text-[#6e6e73]"
              }`}
            >
              {pos + 1}
            </span>

            <p className="flex-1 text-sm font-medium text-[#1d1d1f]">
              {items[itemIdx]}
            </p>

            {!submitted && (
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveUp(pos)}
                  disabled={pos === 0}
                  className="rounded-lg bg-[#f5f5f7] px-2 py-1 text-xs disabled:opacity-30 active:bg-[#e5e5ea]"
                >
                  ▲
                </button>
                <button
                  onClick={() => moveDown(pos)}
                  disabled={pos === order.length - 1}
                  className="rounded-lg bg-[#f5f5f7] px-2 py-1 text-xs disabled:opacity-30 active:bg-[#e5e5ea]"
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
              isCorrect
                ? "bg-[#30D158]/10 border border-[#30D158]/30"
                : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"
            }`}
          >
            <p className="font-semibold">
              {isCorrect
                ? "✅ Perfekte Reihenfolge!"
                : `❌ ${correctPositions.filter(Boolean).length} von ${items.length} an der richtigen Position`}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(isCorrect)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
