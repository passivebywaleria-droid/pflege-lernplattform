"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";

interface TrueFalseCard {
  statement: string;
  isTrue: boolean;
  explanation: string;
}

interface StepTrueFalseProps {
  title: string;
  body?: string;
  cards: TrueFalseCard[];
  onNext: (correct: boolean) => void;
}

export function StepTrueFalse({
  title,
  body,
  cards,
  onNext,
}: StepTrueFalseProps) {
  const [cardIdx, setCardIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    correct: boolean;
    explanation: string;
  } | null>(null);

  const card = cards[cardIdx];
  const done = cardIdx >= cards.length;

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const leftOpacity = useTransform(x, [-200, -50], [1, 0]);
  const rightOpacity = useTransform(x, [50, 200], [0, 1]);

  const handleSwipe = (answeredTrue: boolean) => {
    const correct = answeredTrue === card.isTrue;
    setResults((r) => [...r, correct]);
    setLastAnswer({ correct, explanation: card.explanation });
    setShowResult(true);
  };

  const nextCard = () => {
    setShowResult(false);
    setLastAnswer(null);
    setCardIdx((i) => i + 1);
  };

  if (done) {
    const correctCount = results.filter(Boolean).length;
    const allCorrect = correctCount === cards.length;
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
          Wahr/Falsch abgeschlossen!
        </h2>
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
              ? `Perfekt! Alle ${cards.length} richtig erkannt!`
              : `${correctCount} von ${cards.length} richtig erkannt.`}
          </p>
        </motion.div>
        <button
          onClick={() => onNext(allCorrect)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </button>
      </div>
    );
  }

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
        Wische nach rechts fuer WAHR, nach links fuer FALSCH — oder tippe die
        Buttons.
      </p>

      <div className="flex items-center gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < results.length
                ? results[i]
                  ? "bg-[#30D158]"
                  : "bg-[#FF3B30]"
                : i === cardIdx
                  ? "bg-[#0071e3] animate-pulse"
                  : "bg-[#e8e8ed] dark:bg-white/10"
            }`}
          />
        ))}
        <span className="text-xs text-[#6e6e73] ml-1">
          {cardIdx + 1}/{cards.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={`card-${cardIdx}`}
            style={{ x, rotate }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_: never, info: PanInfo) => {
              if (info.offset.x > 100) handleSwipe(true);
              else if (info.offset.x < -100) handleSwipe(false);
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative rounded-2xl border-2 border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5 p-6 sm:p-8 min-h-[200px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              style={{ opacity: leftOpacity }}
              className="absolute top-4 left-4 px-3 py-1 bg-[#FF3B30] text-white text-xs font-bold rounded-full"
            >
              FALSCH
            </motion.div>
            <motion.div
              style={{ opacity: rightOpacity }}
              className="absolute top-4 right-4 px-3 py-1 bg-[#30D158] text-white text-xs font-bold rounded-full"
            >
              WAHR
            </motion.div>
            <p className="text-center text-lg font-medium text-[#1d1d1f] dark:text-white">
              {card.statement}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={`result-${cardIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border-2 p-6 ${
              lastAnswer?.correct
                ? "border-[#30D158] bg-[#30D158]/5"
                : "border-[#FF3B30] bg-[#FF3B30]/5"
            }`}
          >
            <p className="font-bold text-base mb-2 text-[#1d1d1f] dark:text-white">
              {lastAnswer?.correct ? "Richtig!" : "Falsch!"}
            </p>
            <p className="text-sm text-[#1d1d1f]/80 dark:text-white/80">
              {lastAnswer?.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {!showResult ? (
          <>
            <button
              onClick={() => handleSwipe(false)}
              className="flex-1 py-3 bg-[#FF3B30] text-white rounded-full font-semibold text-sm active:scale-[0.97] transition-all"
            >
              Falsch
            </button>
            <button
              onClick={() => handleSwipe(true)}
              className="flex-1 py-3 bg-[#30D158] text-white rounded-full font-semibold text-sm active:scale-[0.97] transition-all"
            >
              Wahr
            </button>
          </>
        ) : (
          <button
            onClick={nextCard}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            {cardIdx + 1 < cards.length ? "Naechste Karte" : "Weiter"}
          </button>
        )}
      </div>
    </div>
  );
}
