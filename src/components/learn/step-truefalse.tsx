"use client";

/**
 * StepTrueFalse — Wahr/Falsch Karten
 *
 * Design-Standards:
 * - FALSCH-Button links, WAHR-Button rechts — neben dem Statement
 * - Drag-Swipe weiterhin möglich (links=falsch, rechts=wahr)
 * - Nach Antwort: Erklärung mit richtig/falsch Feedback
 * - Inline-style color auf Container (shadcn-glass-ui Fix)
 */

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface TrueFalseCard {
  statement: string;
  statementB1?: string;
  isTrue: boolean;
  explanation: string;
  explanationB1?: string;
}

interface StepTrueFalseProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  cards: TrueFalseCard[];
  onNext: (correct: boolean) => void;
}

export function StepTrueFalse({
  title,
  body,
  glossar,
  sprachLevel = "c1",
  cards,
  onNext,
}: StepTrueFalseProps) {
  const [cardIdx, setCardIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    correct: boolean;
    explanation: string;
    wasTrue: boolean;
  } | null>(null);

  const card = cards[cardIdx];
  const done = cardIdx >= cards.length;

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-8, 8]);
  const leftBg = useTransform(
    x,
    [-150, -30, 0],
    ["rgba(255,59,48,0.2)", "rgba(255,59,48,0.05)", "rgba(255,59,48,0)"],
  );
  const rightBg = useTransform(
    x,
    [0, 30, 150],
    ["rgba(48,209,88,0)", "rgba(48,209,88,0.05)", "rgba(48,209,88,0.2)"],
  );

  const handleSwipe = (answeredTrue: boolean) => {
    const correct = answeredTrue === card.isTrue;
    const explanation =
      sprachLevel === "b1" && card.explanationB1
        ? card.explanationB1
        : card.explanation;
    setResults((r) => [...r, correct]);
    setLastAnswer({ correct, explanation, wasTrue: card.isTrue });
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
      <div className="space-y-6" style={{ color: "var(--lern-text-primary)" }}>
        <h2 className="text-2xl font-bold">
          Wahr/Falsch abgeschlossen!
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 ${
            allCorrect
              ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
              : "bg-[#D4956A]/10 border border-[#D4956A]/30"
          }`}
        >
          <p className="font-semibold">
            {allCorrect
              ? `Perfekt! Alle ${cards.length} richtig erkannt!`
              : `${correctCount} von ${cards.length} richtig erkannt.`}
          </p>
        </motion.div>
        <button
          onClick={() => onNext(allCorrect)}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          Weiter
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-sm" style={{ color: "var(--lern-text-secondary)" }}>
        Tippe Falsch oder Wahr — oder wische die Karte.
      </p>

      {/* Progress */}
      <div className="flex items-center gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < results.length
                ? results[i]
                  ? "bg-[#6B8F71]"
                  : "bg-[#C96B5C]"
                : i === cardIdx
                  ? "bg-[var(--lern-accent)] animate-pulse"
                  : "bg-[var(--lern-divider)]"
            }`}
          />
        ))}
        <span className="text-xs ml-1" style={{ color: "var(--lern-text-secondary)" }}>
          {cardIdx + 1}/{cards.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={`card-${cardIdx}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-stretch gap-2"
          >
            {/* FALSCH Button — links */}
            <motion.button
              onClick={() => handleSwipe(false)}
              style={{ backgroundColor: leftBg }}
              className="flex-shrink-0 w-16 rounded-2xl border-2 border-[#C96B5C]/30 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            >
              <span className="text-lg">✗</span>
              <span className="text-[10px] font-bold" style={{ color: "#C96B5C" }}>
                FALSCH
              </span>
            </motion.button>

            {/* Statement — Mitte, draggable */}
            <motion.div
              style={{ x, rotate }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_: never, info: PanInfo) => {
                if (info.offset.x > 80) handleSwipe(true);
                else if (info.offset.x < -80) handleSwipe(false);
              }}
              className="flex-1 rounded-2xl border-2 border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5 min-h-[140px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none shadow-sm"
            >
              <p className="text-center text-base font-medium leading-snug">
                <FachbegriffText glossar={glossar ?? []}>
                  {sprachLevel === "b1" && card.statementB1 ? card.statementB1 : card.statement}
                </FachbegriffText>
              </p>
            </motion.div>

            {/* WAHR Button — rechts */}
            <motion.button
              onClick={() => handleSwipe(true)}
              style={{ backgroundColor: rightBg }}
              className="flex-shrink-0 w-16 rounded-2xl border-2 border-[#6B8F71]/30 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            >
              <span className="text-lg">✓</span>
              <span className="text-[10px] font-bold" style={{ color: "#6B8F71" }}>
                WAHR
              </span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key={`result-${cardIdx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {/* Ergebnis */}
            <div
              className={`rounded-2xl border-2 p-5 ${
                lastAnswer?.correct
                  ? "border-[#6B8F71] bg-[#6B8F71]/5"
                  : "border-[#C96B5C] bg-[#C96B5C]/5"
              }`}
            >
              <p className="font-bold text-base mb-1">
                {lastAnswer?.correct ? "✓ Richtig!" : "✗ Falsch!"}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--lern-text-primary)" }}>
                <FachbegriffText glossar={glossar ?? []}>
                  {lastAnswer?.explanation ?? ""}
                </FachbegriffText>
              </p>
              {!lastAnswer?.correct && (
                <p className="text-xs font-semibold mt-2" style={{ color: "#6B8F71" }}>
                  Richtige Antwort: {lastAnswer?.wasTrue ? "WAHR" : "FALSCH"}
                </p>
              )}
            </div>

            <button
              onClick={nextCard}
              className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
            >
              {cardIdx + 1 < cards.length ? "Nächste Karte" : "Weiter"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
