"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { analysiereFehler } from "@/lib/adaptive/fehler-analyse";
import type { FehlerAnalyse } from "@/lib/adaptive/fehler-analyse";
import { generiereSandwichFeedback, SandwichFeedbackDisplay } from "./bloom-feedback";

interface StepFillInProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sentence: string;
  options: string[];
  correctIndex: number;
  sprachLevel?: "c1" | "b1";
  bloomLevel?: number;
  onNext: (correct: boolean) => void;
}

export function StepFillIn({
  title,
  body,
  glossar,
  sentence,
  options,
  correctIndex,
  sprachLevel = "c1",
  bloomLevel,
  onNext,
}: StepFillInProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fehlerAnalyse, setFehlerAnalyse] = useState<FehlerAnalyse | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Reset startTime bei neuem Step
  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [title, sentence]);

  const parts = sentence.split("___");
  const isCorrect = selected === correctIndex;

  const handleSubmit = () => {
    setSubmitted(true);

    if (!isCorrect && selected !== null) {
      const antwortZeit = Date.now() - startTimeRef.current;
      const analyse = analysiereFehler(
        antwortZeit,
        options[selected],
        options[correctIndex],
        options,
        "fillin",
        sprachLevel === "b1" ? 2 : 4,
      );
      setFehlerAnalyse(analyse);
    }
  };

  // Sandwich-Feedback generieren
  const sandwich = submitted
    ? generiereSandwichFeedback(
        isCorrect,
        options[correctIndex],
        undefined,
        fehlerAnalyse ?? undefined,
        bloomLevel,
      )
    : null;

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-base font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      {/* Sentence with blanks */}
      <div className="rounded-2xl bg-[var(--lern-bg-primary)] border-[1.5px] border-[var(--lern-border)] p-5">
        <p className="text-lg text-[var(--lern-text-primary)] leading-relaxed">
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              <FachbegriffText glossar={glossar ?? []}>{part}</FachbegriffText>
              {i < parts.length - 1 && (
                <span
                  className={`inline-block px-3 py-0.5 mx-1 rounded-lg font-semibold transition-colors ${
                    submitted && isCorrect
                      ? "bg-[#3E5A6A]/20 text-[var(--lern-text-primary)]"
                      : submitted && !isCorrect
                        ? "bg-[#C96B5C]/20 text-[var(--lern-text-primary)]"
                        : selected !== null
                          ? "bg-[#218C71]/10 text-[#218C71]"
                          : "bg-[var(--lern-border)] text-[var(--lern-text-tertiary)]"
                  }`}
                >
                  {selected !== null ? options[selected] : "___"}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2" role="radiogroup" aria-label="Antwortmöglichkeiten">
        {options.map((opt, i) => {
          let borderColor = "border-[var(--lern-border)]";
          let bgColor = "bg-[var(--lern-bg-primary)]";

          if (submitted && correctIndex === i) {
            borderColor = "border-[#3E5A6A]";
            bgColor = "bg-[#3E5A6A]/5";
          } else if (submitted && selected === i && correctIndex !== i) {
            borderColor = "border-[#C96B5C]";
            bgColor = "bg-[#C96B5C]/5";
          } else if (selected === i) {
            borderColor = "border-[#218C71]";
            bgColor = "bg-[#218C71]/5";
          }

          return (
            <motion.button
              key={i}
              onClick={() => !submitted && setSelected(i)}
              whileTap={!submitted ? { scale: 0.98 } : undefined}
              role="radio"
              aria-checked={selected === i}
              aria-label={`Option: ${opt}`}
              className={`w-full rounded-xl border-[1.5px] ${borderColor} ${bgColor} p-3 text-left text-sm font-medium text-[var(--lern-text-primary)] transition-colors focus:outline-2 focus:outline-[#218C71] focus:outline-offset-2`}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          aria-label="Antwort prüfen"
          className="w-full rounded-2xl bg-[#218C71] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-[#218C71] focus:outline-offset-2"
        >
          Prüfen
        </button>
      ) : (
        <div className="space-y-4">
          {sandwich && (
            <SandwichFeedbackDisplay
              feedback={sandwich}
              correct={isCorrect}
              fehlerKategorie={fehlerAnalyse?.kategorie}
            />
          )}

          <button
            onClick={() => onNext(isCorrect)}
            aria-label="Weiter zum nächsten Schritt"
            className="w-full rounded-2xl bg-[#218C71] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359] focus:outline-2 focus:outline-[#218C71] focus:outline-offset-2"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
