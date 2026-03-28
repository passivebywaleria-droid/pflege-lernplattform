"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ConfidenceCard, GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepConfidenceProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  cards: ConfidenceCard[];
  onNext: (correct: boolean) => void;
}

type ConfidenceLevel = "unsicher" | "mittel" | "sicher";

interface CardResult {
  answer: boolean;
  confidence: ConfidenceLevel;
  isCorrect: boolean;
}

const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  unsicher: "Unsicher",
  mittel: "Ziemlich sicher",
  sicher: "Ganz sicher",
};

function getFeedback(isCorrect: boolean, confidence: ConfidenceLevel): { text: string; color: string } {
  if (isCorrect && confidence === "sicher") {
    return { text: "Sitzt! Du wusstest es und warst dir sicher.", color: "#30D158" };
  }
  if (isCorrect && confidence === "mittel") {
    return { text: "Richtig! Vertrau dir ruhig mehr.", color: "#30D158" };
  }
  if (isCorrect && confidence === "unsicher") {
    return { text: "Gut geraten — lies nochmal nach, damit es beim nächsten Mal sitzt.", color: "#FF9500" };
  }
  if (!isCorrect && confidence === "sicher") {
    return { text: "Achtung — Fehlkonzept! Du warst dir sicher, aber es stimmt nicht. Lies die Erklärung genau.", color: "#FF3B30" };
  }
  if (!isCorrect && confidence === "mittel") {
    return { text: "Leider falsch. Schau dir die Erklärung an.", color: "#FF3B30" };
  }
  return { text: "Falsch, aber du warst unsicher — das ist okay. Jetzt weißt du es!", color: "#FF9500" };
}

export function StepConfidence({
  title,
  body,
  glossar,
  cards,
  onNext,
}: StepConfidenceProps) {
  const [currentCard, setCurrentCard] = useState(0);
  const [phase, setPhase] = useState<"answer" | "confidence" | "feedback">("answer");
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [selectedConfidence, setSelectedConfidence] = useState<ConfidenceLevel | null>(null);
  const [results, setResults] = useState<CardResult[]>([]);
  const [allDone, setAllDone] = useState(false);

  const card = cards[currentCard];

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setPhase("confidence");
  };

  const handleConfidence = (level: ConfidenceLevel) => {
    setSelectedConfidence(level);
    const isCorrect = selectedAnswer === card.isTrue;
    const result: CardResult = {
      answer: selectedAnswer!,
      confidence: level,
      isCorrect,
    };
    setResults((prev) => [...prev, result]);
    setPhase("feedback");
  };

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard((c) => c + 1);
      setPhase("answer");
      setSelectedAnswer(null);
      setSelectedConfidence(null);
    } else {
      setAllDone(true);
    }
  };

  const correctCount = results.filter((r) => r.isCorrect).length;

  if (allDone) {
    return (
      <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          {title} — Ergebnis
        </h2>

        <div className="rounded-2xl bg-[#f5f5f7] p-4 space-y-3">
          <p className="text-lg font-bold text-[#1d1d1f]">
            {correctCount} von {cards.length} richtig
          </p>
          {results.map((r, i) => {
            const fb = getFeedback(r.isCorrect, r.confidence);
            return (
              <div
                key={i}
                className="rounded-xl p-3 border"
                style={{
                  borderColor: `${fb.color}30`,
                  backgroundColor: `${fb.color}08`,
                }}
              >
                <p className="text-sm font-medium text-[#1d1d1f]">
                  {cards[i].statement}
                </p>
                <p className="text-xs mt-1" style={{ color: fb.color }}>
                  {r.isCorrect ? "Richtig" : "Falsch"} · {CONFIDENCE_LABELS[r.confidence]} — {fb.text}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => onNext(correctCount >= cards.length / 2)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </button>
      </div>
    );
  }

  const feedback = phase === "feedback" && selectedConfidence
    ? getFeedback(selectedAnswer === card.isTrue, selectedConfidence)
    : null;

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

      {/* Progress */}
      <p className="text-sm text-[#6e6e73]">
        Aussage {currentCard + 1} von {cards.length}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Aussage */}
          <div className="rounded-2xl bg-white border-2 border-[#d2d2d7] p-6 mb-6">
            <p className="text-lg font-medium text-[#1d1d1f] text-center">
              &ldquo;{card.statement}&rdquo;
            </p>
          </div>

          {/* Phase 1: Wahr/Falsch */}
          {phase === "answer" && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="rounded-2xl border-2 border-[#30D158] bg-[#30D158]/5 px-6 py-4 text-base font-semibold text-[#30D158] transition-all active:scale-[0.98]"
              >
                Wahr
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="rounded-2xl border-2 border-[#FF3B30] bg-[#FF3B30]/5 px-6 py-4 text-base font-semibold text-[#FF3B30] transition-all active:scale-[0.98]"
              >
                Falsch
              </button>
            </div>
          )}

          {/* Phase 2: Confidence */}
          {phase === "confidence" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <p className="text-center text-sm font-medium text-[#6e6e73]">
                Wie sicher bist du?
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(["unsicher", "mittel", "sicher"] as ConfidenceLevel[]).map(
                  (level) => (
                    <button
                      key={level}
                      onClick={() => handleConfidence(level)}
                      className="rounded-xl border-2 border-[#d2d2d7] bg-white px-3 py-3 text-sm font-medium text-[#1d1d1f] transition-all active:scale-[0.98]"
                    >
                      {level === "unsicher" && "🤔"}
                      {level === "mittel" && "😊"}
                      {level === "sicher" && "💪"}
                      <br />
                      <span className="text-xs">{CONFIDENCE_LABELS[level]}</span>
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}

          {/* Phase 3: Feedback */}
          {phase === "feedback" && feedback && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div
                className="rounded-2xl p-4 border"
                style={{
                  borderColor: `${feedback.color}30`,
                  backgroundColor: `${feedback.color}08`,
                }}
              >
                <p className="font-semibold mb-1" style={{ color: feedback.color }}>
                  {selectedAnswer === card.isTrue ? "Richtig!" : "Falsch"}
                </p>
                <p className="text-sm" style={{ color: feedback.color }}>
                  {feedback.text}
                </p>
              </div>

              <div className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4">
                <p className="text-sm font-medium text-[#0071e3] mb-1">
                  Erklärung
                </p>
                <p className="text-sm text-[#1d1d1f]/70">
                  {card.explanation}
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
              >
                {currentCard < cards.length - 1 ? "Nächste Aussage" : "Ergebnis"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
