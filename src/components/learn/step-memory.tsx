"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";

interface MemoryPair {
  a: string;
  b: string;
}

interface StepMemoryProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  pairs: MemoryPair[];
  onNext: (correct: boolean) => void;
}

interface MemoryCard {
  id: number;
  text: string;
  pairId: number;
}

export function StepMemory({
  title,
  body,
  glossar,
  pairs,
  onNext,
}: StepMemoryProps) {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [found, setFound] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  // Max 4 Paare = 8 Karten — mehr wird unübersichtlich auf Mobile
  const limitedPairs = useMemo(() => pairs.slice(0, 4), [pairs]);

  // Initialize cards (shuffled)
  useEffect(() => {
    const allCards = limitedPairs
      .flatMap((p, i) => [
        { id: i * 2, text: p.a, pairId: i },
        { id: i * 2 + 1, text: p.b, pairId: i },
      ])
      .sort(() => Math.random() - 0.5);
    setCards(allCards);
  }, [limitedPairs]);

  const handleFlip = (id: number) => {
    if (locked || flipped.includes(id) || found.includes(id)) return;

    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [first, second] = newFlipped;
      const card1 = cards.find((c) => c.id === first)!;
      const card2 = cards.find((c) => c.id === second)!;

      if (card1.pairId === card2.pairId) {
        setTimeout(() => {
          setFound((f) => [...f, first, second]);
          setFlipped([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 1000);
      }
    }
  };

  const allFound = found.length === cards.length && cards.length > 0;

  const pairColors = [
    "bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] border-[var(--lern-accent)]/30",
    "bg-[#6B8F71]/10 text-[#6B8F71] border-[#6B8F71]/30",
    "bg-[#D4956A]/10 text-[#D4956A] border-[#D4956A]/30",
    "bg-[#9B7EA6]/10 text-[#9B7EA6] border-[#9B7EA6]/30",
    "bg-[#C96B5C]/10 text-[#C96B5C] border-[#C96B5C]/30",
    "bg-[#8AABB5]/10 text-[#8AABB5] border-[#8AABB5]/30",
    "bg-[#BFA48E]/10 text-[#BFA48E] border-[#BFA48E]/30",
    "bg-[#B07A72]/10 text-[#B07A72] border-[#B07A72]/30",
  ];

  // Längsten Text messen um Spaltenanzahl zu berechnen
  const longestText = cards.reduce((max, c) => Math.max(max, c.text.length), 0);
  // Bei langen Texten (>25 Zeichen) nur 2 Spalten, sonst 3
  const cols = longestText > 25 ? 2 : limitedPairs.length <= 3 ? 3 : 4;

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

      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--lern-text-secondary)]">
          Finde die <strong>{limitedPairs.length} Paare</strong>.
        </p>
        <span className="text-xs text-[var(--lern-text-secondary)]">
          {moves} Züge &middot; {found.length / 2}/{limitedPairs.length} Paare
        </span>
      </div>

      <div
        className="grid gap-2.5"
        role="grid"
        aria-label="Memory-Spiel"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cards.map((card) => {
          const isFlipped = flipped.includes(card.id);
          const isFound = found.includes(card.id);
          const pairColor = pairColors[card.pairId % pairColors.length];

          return (
            <motion.button
              key={card.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFlip(card.id)}
              aria-label={isFlipped || isFound ? card.text : "Verdeckte Karte"}
              aria-hidden={isFound ? true : undefined}
              className={`min-h-[4.5rem] rounded-2xl border-2 text-[11px] font-medium flex items-center justify-center p-2 text-center overflow-hidden transition-colors focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2 ${
                isFound
                  ? `${pairColor}`
                  : isFlipped
                    ? "border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] text-[var(--lern-accent)]"
                    : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)] text-[var(--lern-text-secondary)] hover:border-[var(--lern-accent)]/50 cursor-pointer"
              }`}
            >
              {isFlipped || isFound ? (
                <motion.span
                  key="front"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="leading-tight text-[var(--lern-text-primary)] break-words hyphens-auto"
                  lang="de"
                >
                  {renderBold(card.text)}
                </motion.span>
              ) : (
                <span className="text-2xl" aria-hidden="true">?</span>
              )}
            </motion.button>
          );
        })}
      </div>

      {allFound && (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            aria-live="polite"
            className="rounded-2xl p-4 bg-[#6B8F71]/10 border border-[#6B8F71]/30"
          >
            <p className="font-semibold text-[var(--lern-text-primary)]">
              Alle Paare in {moves} Zügen gefunden!{" "}
              {moves <= limitedPairs.length * 2
                ? "Hervorragend!"
                : moves <= limitedPairs.length * 3
                  ? "Gut gemacht!"
                  : "Übung macht den Meister!"}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(true)}
            aria-label="Weiter zum nächsten Schritt"
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
