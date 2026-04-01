"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
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

  // Initialize cards (shuffled)
  useEffect(() => {
    const allCards = pairs
      .flatMap((p, i) => [
        { id: i * 2, text: p.a, pairId: i },
        { id: i * 2 + 1, text: p.b, pairId: i },
      ])
      .sort(() => Math.random() - 0.5);
    setCards(allCards);
  }, [pairs]);

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
    "bg-[#0071e3]/10 text-[#0071e3] border-[#0071e3]/30",
    "bg-[#30D158]/10 text-[#30D158] border-[#30D158]/30",
    "bg-[#FF9500]/10 text-[#FF9500] border-[#FF9500]/30",
    "bg-[#AF52DE]/10 text-[#AF52DE] border-[#AF52DE]/30",
    "bg-[#FF3B30]/10 text-[#FF3B30] border-[#FF3B30]/30",
    "bg-[#5AC8FA]/10 text-[#5AC8FA] border-[#5AC8FA]/30",
    "bg-[#FFD60A]/10 text-[#FFD60A] border-[#FFD60A]/30",
    "bg-[#FF2D55]/10 text-[#FF2D55] border-[#FF2D55]/30",
  ];

  // Längsten Text messen um Spaltenanzahl zu berechnen
  const longestText = cards.reduce((max, c) => Math.max(max, c.text.length), 0);
  // Bei langen Texten (>25 Zeichen) nur 2 Spalten, sonst 3
  const cols = longestText > 25 ? 2 : pairs.length <= 6 ? 3 : 4;

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

      <div className="flex items-center justify-between">
        <p className="text-sm text-[#6e6e73]">
          Finde die <strong>{pairs.length} Paare</strong>.
        </p>
        <span className="text-xs text-[#6e6e73]">
          {moves} Züge &middot; {found.length / 2}/{pairs.length} Paare
        </span>
      </div>

      <div
        className="grid gap-2.5"
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
              className={`min-h-[4.5rem] rounded-2xl border-2 text-[11px] font-medium flex items-center justify-center p-2 text-center overflow-hidden transition-colors ${
                isFound
                  ? `${pairColor}`
                  : isFlipped
                    ? "border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3]"
                    : "border-[#d2d2d7] bg-white text-[#6e6e73] hover:border-[#0071e3]/50 cursor-pointer"
              }`}
            >
              {isFlipped || isFound ? (
                <motion.span
                  key="front"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="leading-tight text-[#1d1d1f] break-words hyphens-auto"
                  lang="de"
                >
                  {renderBold(card.text)}
                </motion.span>
              ) : (
                <span className="text-2xl">?</span>
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
            className="rounded-2xl p-4 bg-[#30D158]/10 border border-[#30D158]/30"
          >
            <p className="font-semibold text-[#1d1d1f]">
              Alle Paare in {moves} Zügen gefunden!{" "}
              {moves <= pairs.length * 2
                ? "Hervorragend!"
                : moves <= pairs.length * 3
                  ? "Gut gemacht!"
                  : "Übung macht den Meister!"}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(true)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
