"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MemoryPair {
  a: string;
  b: string;
}

interface StepMemoryProps {
  title: string;
  body?: string;
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

  // Calculate grid columns based on pair count
  const cols = pairs.length <= 4 ? 3 : pairs.length <= 6 ? 3 : 4;

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

      <div className="flex items-center justify-between">
        <p className="text-sm text-[#6e6e73]">
          Finde die <strong>{pairs.length} Paare</strong>.
        </p>
        <span className="text-xs text-[#6e6e73]">
          {moves} Zuege &middot; {found.length / 2}/{pairs.length} Paare
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
              className={`aspect-[3/2] rounded-2xl border-2 text-xs font-medium flex items-center justify-center p-2 text-center transition-all ${
                isFound
                  ? `${pairColor}`
                  : isFlipped
                    ? "border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3]"
                    : "border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5 text-[#6e6e73] hover:border-[#0071e3]/50 cursor-pointer"
              }`}
            >
              <AnimatePresence mode="wait">
                {isFlipped || isFound ? (
                  <motion.span
                    key="front"
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    className="leading-tight text-[#1d1d1f] dark:text-white"
                  >
                    {card.text}
                  </motion.span>
                ) : (
                  <motion.span
                    key="back"
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    className="text-2xl"
                  >
                    ?
                  </motion.span>
                )}
              </AnimatePresence>
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
            <p className="font-semibold text-[#1d1d1f] dark:text-white">
              Alle Paare in {moves} Zuegen gefunden!{" "}
              {moves <= pairs.length * 2
                ? "Hervorragend!"
                : moves <= pairs.length * 3
                  ? "Gut gemacht!"
                  : "Uebung macht den Meister!"}
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
