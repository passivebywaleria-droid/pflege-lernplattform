"use client";

/**
 * StepSwipe — Wahr/Falsch Statement Cards
 *
 * Design: Große zentrierte Statement-Card mit "WAHR ODER FALSCH?" Header.
 * Zwei große Buttons darunter: Falsch (links) / Wahr (rechts).
 * Nach Antwort: Erklärung + Nächste-Button.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface SwipeCardProps {
  statement: string;
  statementB1?: string;
  isCorrect: boolean;
  explanation: string;
  explanationB1?: string;
}

interface StepSwipeProps {
  title: string;
  body?: string;
  instruction: string;
  cards: SwipeCardProps[];
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepSwipe({
  title,
  body,
  instruction,
  cards,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepSwipeProps) {
  const [cardIdx, setCardIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    correct: boolean;
    explanation: string;
    userAgreed: boolean;
  } | null>(null);

  const card = cards[cardIdx];
  const done = cardIdx >= cards.length;

  const handleAnswer = (agreed: boolean) => {
    if (showResult) return;
    const correct = agreed === card.isCorrect;
    const explanation =
      sprachLevel === "b1" && card.explanationB1
        ? card.explanationB1
        : card.explanation;
    setResults((r) => [...r, correct]);
    setLastAnswer({ correct, explanation, userAgreed: agreed });
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
        <h2 className="text-xl font-bold text-center">
          Einschätzung abgeschlossen!
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-5 text-center ${
            allCorrect
              ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
              : "bg-[#D4956A]/10 border border-[#D4956A]/30"
          }`}
        >
          <p className="font-bold text-lg">
            {allCorrect
              ? `Alle ${cards.length} richtig!`
              : `${correctCount} von ${cards.length} richtig.`}
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--lern-text-secondary)" }}>
            {allCorrect
              ? "Du hattest ein gutes Vorwissen!"
              : "Kein Problem — jetzt weißt du es besser."}
          </p>
        </motion.div>
        <button
          onClick={() => onNext(allCorrect)}
          className="w-full rounded-full bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          Weiter
        </button>
      </div>
    );
  }

  const statement =
    sprachLevel === "b1" && card.statementB1
      ? card.statementB1
      : card.statement;

  return (
    <div className="space-y-5" style={{ color: "var(--lern-text-primary)" }}>
      {/* Title */}
      <h2 className="text-xl font-bold">{title}</h2>

      {body && (
        <p className="text-sm leading-relaxed" style={{ color: "var(--lern-text-secondary)" }}>
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      {/* Progress Dots */}
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
                  ? "bg-[var(--lern-accent)]"
                  : "bg-[var(--lern-divider)]"
            }`}
          />
        ))}
        <span className="text-xs ml-1" style={{ color: "var(--lern-text-secondary)" }}>
          {cardIdx + 1}/{cards.length}
        </span>
      </div>

      {/* Statement Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`card-${cardIdx}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="space-y-4"
        >
          {/* "WAHR ODER FALSCH?" Label */}
          <p className="text-center text-xs font-bold uppercase tracking-widest" style={{ color: "var(--lern-accent)" }}>
            Wahr oder Falsch?
          </p>

          {/* Die große Statement-Card */}
          <div className={`rounded-2xl border-2 p-6 text-center transition-colors ${
            showResult
              ? lastAnswer?.correct
                ? "border-[#6B8F71] bg-[#6B8F71]/5"
                : "border-[#C96B5C] bg-[#C96B5C]/5"
              : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)] shadow-sm"
          }`}>
            <p className="text-base font-medium leading-relaxed">
              &ldquo;<FachbegriffText glossar={glossar ?? []}>{statement}</FachbegriffText>&rdquo;
            </p>
          </div>

          {/* Buttons: Falsch / Wahr */}
          {!showResult && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer(false)}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#C96B5C]/40 bg-[#C96B5C]/5 px-5 py-3.5 text-sm font-bold text-[#C96B5C] transition-all active:scale-[0.96] active:bg-[#C96B5C]/20"
              >
                <span className="text-base">✗</span>
                Falsch
              </button>
              <button
                onClick={() => handleAnswer(true)}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#6B8F71]/40 bg-[#6B8F71]/5 px-5 py-3.5 text-sm font-bold text-[#6B8F71] transition-all active:scale-[0.96] active:bg-[#6B8F71]/20"
              >
                <span className="text-base">✓</span>
                Wahr
              </button>
            </div>
          )}

          {/* Erklärung nach Antwort */}
          {showResult && lastAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className={`rounded-2xl p-4 ${
                lastAnswer.correct
                  ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
              }`}>
                <p className="font-bold text-sm mb-1">
                  {lastAnswer.correct ? "✓ Richtig!" : "✗ Nicht ganz!"}
                </p>
                <p className="text-xs mb-2" style={{ color: "var(--lern-text-secondary)" }}>
                  Die Aussage ist{" "}
                  <span className="font-semibold">
                    {card.isCorrect ? "wahr" : "falsch"}
                  </span>.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lern-text-primary)" }}>
                  <FachbegriffText glossar={glossar ?? []}>{lastAnswer.explanation}</FachbegriffText>
                </p>
              </div>

              <button
                onClick={nextCard}
                className="w-full rounded-full bg-[var(--lern-accent)] px-6 py-3.5 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
              >
                {cardIdx + 1 < cards.length ? "Nächste Aussage" : "Weiter"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
