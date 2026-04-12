"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
interface FlipCardItem {
  front: string;
  back: string;
  backB1?: string;
  category?: string;
}

interface StepFlipCardProps {
  title: string;
  body?: string;
  instruction: string;
  cards: FlipCardItem[];
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

function FlipCard({
  item,
  index,
  isFlipped,
  onFlip,
  sprachLevel,
}: {
  item: FlipCardItem;
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
  sprachLevel: "c1" | "b1";
}) {
  const backText =
    sprachLevel === "b1" && item.backB1 ? item.backB1 : item.back;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="cursor-pointer"
      onClick={onFlip}
    >
      {/* Nicht geflippt: Front */}
      {!isFlipped && (
        <div className="rounded-2xl border-2 border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5 flex flex-col items-center justify-center shadow-sm min-h-[120px]">
          {item.category && (
            <span className="text-[10px] text-[var(--lern-text-secondary)] font-medium uppercase tracking-wider mb-2">
              {item.category}
            </span>
          )}
          <p className="text-sm font-semibold text-[var(--lern-text-primary)] text-center leading-snug">
            {renderBold(item.front)}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)] mt-2">Antippen ↻</p>
        </div>
      )}

      {/* Geflippt: Back — volle Größe, kein Abschneiden */}
      {isFlipped && (
        <motion.div
          initial={{ rotateY: 90 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border-2 border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] p-5 min-h-[120px]"
        >
          {item.category && (
            <span className="text-[10px] text-[var(--lern-accent)] font-medium uppercase tracking-wider block mb-2 text-center">
              {item.category}
            </span>
          )}
          <p className="text-sm text-[var(--lern-text-primary)] text-center leading-relaxed">
            {renderBold(backText)}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)] mt-2 text-center">Antippen ↻</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export function StepFlipCard({
  title,
  body,
  instruction,
  cards,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepFlipCardProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const allFlipped = flippedCards.size === cards.length;

  const toggleFlip = (idx: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="space-y-5 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium" style={{ color: "var(--lern-text-primary)" }}>{instruction}</p>

      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--lern-text-secondary)]">
          {flippedCards.size} von {cards.length} aufgedeckt
        </span>
        <div className="flex gap-1">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                flippedCards.has(i) ? "bg-[var(--lern-accent)]" : "bg-[var(--lern-divider)]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 gap-3">
        {cards.map((card, i) => (
          <FlipCard
            key={i}
            item={card}
            index={i}
            isFlipped={flippedCards.has(i)}
            onFlip={() => toggleFlip(i)}
            sprachLevel={sprachLevel}
          />
        ))}
      </div>

      {/* Continue — immer sichtbar */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => onNext(true)}
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[var(--lern-accent)]"
      >
        Weiter
      </motion.button>
    </div>
  );
}
