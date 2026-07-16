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

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { StepActionBar } from "./step-action-bar";

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
  /**
   * Play-then-Gate: wenn gesetzt, wird die ERSTE Antwort abgefangen — statt
   * das Feedback zu zeigen, ruft die Komponente onGatedAnswer() auf (die Seite
   * blendet dann das Gate ein). Die Antwort bleibt "pending".
   */
  onGatedAnswer?: () => void;
  /**
   * Sobald true, wird die abgefangene "pending" Antwort doch enthüllt
   * (z. B. nachdem das soft-Gate weggetippt wurde).
   */
  gateReleased?: boolean;
}


/**
 * Entfernt ein führendes Verdikt („Falsch.", „Richtig!", „Stimmt nicht,") aus der
 * Erklärung — das Urteil steht bereits eindeutig in der Ergebnis-Headline und
 * doppelte „Falsch"-Nennungen waren mehrdeutig (Antwort vs. Aussage).
 */
function stripVerdictPrefix(text: string): string {
  return text.replace(/^\s*(Richtig|Falsch|Wahr|Stimmt(?: nicht)?|Genau)\s*[.!:,—-]\s*/u, "");
}

export function StepTrueFalse({
  title,
  body,
  glossar,
  sprachLevel = "c1",
  cards,
  onNext,
  onGatedAnswer,
  gateReleased = false,
}: StepTrueFalseProps) {
  const [cardIdx, setCardIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    correct: boolean;
    explanation: string;
    wasTrue: boolean;
  } | null>(null);
  // Play-then-Gate: abgefangene Antwort, die noch nicht enthüllt wurde.
  const [pending, setPending] = useState<{
    correct: boolean;
    explanation: string;
    wasTrue: boolean;
  } | null>(null);
  const gateFiredRef = useRef(false);

  const card = cards[cardIdx];
  const done = cardIdx >= cards.length;

  // Reveal der abgefangenen Antwort, sobald das Gate weggetippt wurde.
  useEffect(() => {
    if (gateReleased && pending) {
      setResults((r) => [...r, pending.correct]);
      setLastAnswer(pending);
      setShowResult(true);
      setPending(null);
    }
  }, [gateReleased, pending]);

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
    // Play-then-Gate: erste Antwort abfangen — Feedback zurückhalten, Gate zeigen.
    if (onGatedAnswer && !gateFiredRef.current) {
      gateFiredRef.current = true;
      setPending({ correct, explanation, wasTrue: card.isTrue });
      onGatedAnswer();
      return;
    }
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
        <h2 className="text-base font-bold">
          Wahr/Falsch abgeschlossen!
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 ${
            allCorrect
              ? "bg-[#3E5A6A]/10 border border-[#3E5A6A]/30"
              : "bg-[#D4956A]/10 border border-[#D4956A]/30"
          }`}
        >
          <p className="font-semibold">
            {allCorrect
              ? `Perfekt! Alle ${cards.length} richtig erkannt!`
              : `${correctCount} von ${cards.length} richtig erkannt.`}
          </p>
        </motion.div>
        <StepActionBar>
          <button
            onClick={() => onNext(allCorrect)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52]"
          >
            Weiter
          </button>
        </StepActionBar>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full" style={{ color: "var(--lern-text-primary)" }}>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-5">
      <h2 className="text-base font-bold">{title}</h2>

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
                  ? "bg-[#3E5A6A]"
                  : "bg-[#D4956A]"
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
              className="flex-shrink-0 w-16 rounded-2xl border-[1.5px] border-[#C96B5C]/30 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            >
              <span className="text-lg">✗</span>
              <span className="text-xs font-bold" style={{ color: "var(--lern-error)" }}>
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
              className="flex-1 rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5 min-h-[140px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none shadow-sm"
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
              className="flex-shrink-0 w-16 rounded-2xl border-[1.5px] border-[#3E5A6A]/30 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
            >
              <span className="text-lg">✓</span>
              <span className="text-xs font-bold" style={{ color: "#3E5A6A" }}>
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
            {/* Ergebnis — Headline sagt eindeutig, WAS falsch/wahr ist (die Aussage,
                nicht „du"). Kein Rot bei falscher Antwort (wertend), sondern warmes
                Amber; kein drittes „FALSCH" mehr (Dozentin-Feedback 2026-07-16). */}
            <div
              className={`rounded-2xl border-[1.5px] p-5 ${
                lastAnswer?.correct
                  ? "border-[#3E5A6A]/30 bg-[#3E5A6A]/5"
                  : "border-[#D4956A]/40 bg-[#D4956A]/10"
              }`}
            >
              <p className="font-bold text-base mb-1">
                {lastAnswer?.correct
                  ? `✓ Richtig erkannt — die Aussage ist ${lastAnswer?.wasTrue ? "wahr" : "falsch"}.`
                  : `Nicht ganz — die Aussage ist ${lastAnswer?.wasTrue ? "wahr" : "falsch"}.`}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--lern-text-primary)" }}>
                <FachbegriffText glossar={glossar ?? []}>
                  {stripVerdictPrefix(lastAnswer?.explanation ?? "")}
                </FachbegriffText>
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
      </div>
      {showResult && (
        <StepActionBar>
          <button
            onClick={nextCard}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52]"
          >
            {cardIdx + 1 < cards.length ? "Nächste Karte" : "Weiter"}
          </button>
        </StepActionBar>
      )}
    </div>
  );
}
