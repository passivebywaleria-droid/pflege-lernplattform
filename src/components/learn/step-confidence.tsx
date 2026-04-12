"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ConfidenceCard, GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";

interface StepConfidenceProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
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
    return { text: "Sitzt! Du wusstest es und warst dir sicher.", color: "var(--lern-success)" };
  }
  if (isCorrect && confidence === "mittel") {
    return { text: "Richtig! Vertrau dir ruhig mehr.", color: "var(--lern-success)" };
  }
  if (isCorrect && confidence === "unsicher") {
    return { text: "Gut geraten — lies nochmal nach, damit es beim nächsten Mal sitzt.", color: "var(--lern-warning)" };
  }
  if (!isCorrect && confidence === "sicher") {
    return { text: "Achtung — Fehlkonzept! Du warst dir sicher, aber es stimmt nicht. Lies die Erklärung genau.", color: "var(--lern-error)" };
  }
  if (!isCorrect && confidence === "mittel") {
    return { text: "Leider falsch. Schau dir die Erklärung an.", color: "var(--lern-error)" };
  }
  return { text: "Falsch, aber du warst unsicher — das ist okay. Jetzt weißt du es!", color: "var(--lern-warning)" };
}

export function StepConfidence({
  title,
  body,
  glossar,
  sprachLevel = "c1",
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
      <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
        <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
          {title} — Ergebnis
        </h2>

        <div className="rounded-2xl bg-[var(--lern-bg)] p-4 space-y-3">
          <p className="text-lg font-bold text-[var(--lern-text-primary)]">
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
                <p className="text-sm font-medium text-[var(--lern-text-primary)]">
                  <FachbegriffText glossar={glossar ?? []}>
                    {sprachLevel === "b1" && cards[i].statementB1 ? cards[i].statementB1 : cards[i].statement}
                  </FachbegriffText>
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
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
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
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      {/* Progress */}
      <p className="text-sm text-[var(--lern-text-secondary)]">
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
          <div className="rounded-2xl bg-[var(--lern-bg-primary)] border-2 border-[var(--lern-border)] p-6 mb-6">
            <p className="text-lg font-medium text-[var(--lern-text-primary)] text-center">
              &ldquo;<FachbegriffText glossar={glossar ?? []}>
                {sprachLevel === "b1" && card.statementB1 ? card.statementB1 : card.statement}
              </FachbegriffText>&rdquo;
            </p>
          </div>

          {/* Phase 1: Wahr/Falsch */}
          {phase === "answer" && (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="rounded-2xl border-2 border-[var(--lern-success)] bg-[var(--lern-success)]/5 px-6 py-4 text-base font-semibold text-[var(--lern-success)] transition-all active:scale-[0.98]"
              >
                Wahr
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="rounded-2xl border-2 border-[var(--lern-error)] bg-[var(--lern-error)]/5 px-6 py-4 text-base font-semibold text-[var(--lern-error)] transition-all active:scale-[0.98]"
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
              <p className="text-center text-sm font-medium text-[var(--lern-text-secondary)]">
                Wie sicher bist du?
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(["unsicher", "mittel", "sicher"] as ConfidenceLevel[]).map(
                  (level) => (
                    <button
                      key={level}
                      onClick={() => handleConfidence(level)}
                      className="rounded-xl border-2 border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-3 py-3 text-sm font-medium text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
                    >
                      {level === "unsicher" && "🤔"}
                      {level === "mittel" && "😊"}
                      {level === "sicher" && <HandDrawnIcon name="muscle" size={16} color="var(--lern-success)" />}
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

              <div className="rounded-2xl bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/15 p-4">
                <p className="text-sm font-medium text-[var(--lern-accent)] mb-1">
                  Erklärung
                </p>
                <p className="text-sm text-[var(--lern-text-primary)]/70">
                  <FachbegriffText glossar={glossar ?? []}>
                    {sprachLevel === "b1" && card.explanationB1 ? card.explanationB1 : card.explanation}
                  </FachbegriffText>
                </p>
              </div>

              <button
                onClick={handleNext}
                className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
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
