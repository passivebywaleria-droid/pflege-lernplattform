"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { analysiereFehler } from "@/lib/adaptive/fehler-analyse";
import type { FehlerAnalyse } from "@/lib/adaptive/fehler-analyse";
import { generiereSandwichFeedback, SandwichFeedbackDisplay } from "./bloom-feedback";

interface MCOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
  explanationB1?: string;
}

interface StepMCProps {
  title: string;
  body?: string;
  fragetext: string;
  optionen: MCOption[];
  multiSelect?: boolean;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  bloomLevel?: number;
  isAnticipation?: boolean;
  onNext: (correct: boolean, gewaehlteAntwort?: string) => void;
}

export function StepMC({
  title,
  body,
  fragetext,
  optionen,
  multiSelect,
  glossar,
  sprachLevel = "c1",
  bloomLevel,
  isAnticipation = false,
  onNext,
}: StepMCProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [fehlerAnalyse, setFehlerAnalyse] = useState<FehlerAnalyse | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Accent color: purple for anticipation, blue for normal
  const accentColor = isAnticipation ? "#9B7EA6" : "#C4877F";
  const accentHover = isAnticipation ? "#8A6D95" : "#B07A72";

  // Reset startTime wenn sich der Step ändert
  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [title, fragetext]);

  const handleSelect = useCallback((idx: number) => {
    if (submitted) return;
    if (multiSelect) {
      setSelected((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
      );
    } else {
      setSelected([idx]);
    }
  }, [submitted, multiSelect]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);

    // Bei Anticipation keine Fehleranalyse
    if (isAnticipation) return;

    // Fehleranalyse durchführen wenn falsch
    const correct = multiSelect
      ? optionen.every((o, i) => o.isCorrect === selected.includes(i))
      : selected.length === 1 && optionen[selected[0]].isCorrect;

    if (!correct && selected.length > 0) {
      const antwortZeit = Date.now() - startTimeRef.current;
      const gewaehlteTexte = selected.map((i) => optionen[i].text).join(", ");
      const richtigeTexte = optionen.filter((o) => o.isCorrect).map((o) => o.text).join(", ");
      const alleTexte = optionen.map((o) => o.text);

      const analyse = analysiereFehler(
        antwortZeit,
        gewaehlteTexte,
        richtigeTexte,
        alleTexte,
        "mc",
        sprachLevel === "b1" ? 2 : 4,
      );
      setFehlerAnalyse(analyse);
    }
  }, [multiSelect, optionen, selected, sprachLevel, isAnticipation]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= optionen.length) {
        handleSelect(num - 1);
        return;
      }
      if (e.key === "Enter") {
        if (!submitted && selected.length > 0) {
          handleSubmit();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [submitted, selected, optionen.length, handleSelect, handleSubmit]);

  const isCorrect = multiSelect
    ? optionen.every(
        (o, i) => o.isCorrect === selected.includes(i),
      )
    : selected.length === 1 && optionen[selected[0]].isCorrect;

  const labels = ["A", "B", "C", "D", "E", "F"];

  // Sandwich-Feedback generieren (nicht bei Anticipation)
  const richtigeAntwort = optionen.filter((o) => o.isCorrect).map((o) => o.text).join(", ");
  const richtigeErklaerung = optionen.find((o) => o.isCorrect)?.explanation;
  const sandwich = submitted && !isAnticipation
    ? generiereSandwichFeedback(
        isCorrect,
        richtigeAntwort,
        richtigeErklaerung,
        fehlerAnalyse ?? undefined,
        bloomLevel,
      )
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

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">
        <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
      </p>

      {multiSelect && !submitted && (
        <p className="text-sm text-[var(--lern-text-secondary)]">
          Mehrere Antworten möglich
        </p>
      )}

      <div className="space-y-3" role={multiSelect ? "group" : "radiogroup"} aria-label={fragetext}>
        {optionen.map((option, idx) => {
          const isSelected = selected.includes(idx);
          const showResult = submitted;
          const optionCorrect = option.isCorrect;

          let borderColor = "border-[var(--lern-border)]";
          let bgColor = "bg-[var(--lern-bg-primary)]";

          if (isAnticipation && showResult) {
            // Anticipation: alle Optionen neutral nach Submit (kein grün/rot)
            if (isSelected) {
              borderColor = `border-[${accentColor}]`;
              bgColor = `bg-[${accentColor}]/10`;
            }
          } else if (showResult && isSelected && optionCorrect) {
            borderColor = "border-[#6B8F71]";
            bgColor = "bg-[#6B8F71]/5";
          } else if (showResult && isSelected && !optionCorrect) {
            borderColor = "border-[#C96B5C]";
            bgColor = "bg-[#C96B5C]/5";
          } else if (showResult && !isSelected && optionCorrect) {
            borderColor = "border-[#6B8F71]/50";
            bgColor = "bg-[#6B8F71]/5";
          } else if (isSelected) {
            borderColor = `border-[${accentColor}]`;
            bgColor = `bg-[${accentColor}]/5`;
          }

          return (
            <motion.button
              key={idx}
              onClick={() => handleSelect(idx)}
              whileTap={!submitted ? { scale: 0.98 } : undefined}
              role={multiSelect ? "checkbox" : "radio"}
              aria-checked={isSelected}
              aria-label={`Option ${labels[idx]}: ${option.text}`}
              tabIndex={0}
              className={`w-full rounded-2xl border-2 ${borderColor} ${bgColor} p-4 text-left transition-colors focus:outline-2 focus:outline-offset-2`}
              style={{ outlineColor: accentColor }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={
                    !isAnticipation && showResult && optionCorrect
                      ? { backgroundColor: "#6B8F71", color: "white" }
                      : !isAnticipation && showResult && isSelected && !optionCorrect
                        ? { backgroundColor: "#C96B5C", color: "white" }
                        : isSelected
                          ? { backgroundColor: accentColor, color: "white" }
                          : { backgroundColor: "var(--lern-card-bg)", color: "var(--lern-text-secondary)" }
                  }
                >
                  {!isAnticipation && showResult && isSelected
                    ? optionCorrect
                      ? "\u2713"
                      : "\u2717"
                    : labels[idx]}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-[var(--lern-text-primary)]">
                    <FachbegriffText glossar={glossar ?? []}>{option.text}</FachbegriffText>
                  </p>
                  <AnimatePresence>
                    {showResult && !isAnticipation && option.explanation && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2"
                      >
                        {/* Warum richtig/falsch Label */}
                        {!isSelected && optionCorrect && (
                          <p className="text-xs font-semibold text-[#6B8F71] mb-0.5">Richtige Antwort</p>
                        )}
                        {isSelected && !optionCorrect && (
                          <p className="text-xs font-semibold text-[#C96B5C] mb-0.5">Deshalb nicht richtig:</p>
                        )}
                        {!isSelected && !optionCorrect && (
                          <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] mb-0.5">Warum nicht:</p>
                        )}
                        <p className="text-sm text-[var(--lern-text-secondary)]">
                          <FachbegriffText glossar={glossar ?? []}>{(sprachLevel === "b1" && option.explanationB1) || option.explanation}</FachbegriffText>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected.length === 0}
          aria-label={isAnticipation ? "Vermutung abgeben" : "Antwort prüfen"}
          className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2"
          style={{ backgroundColor: accentColor, outlineColor: accentColor }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
        >
          {isAnticipation ? "Bin gespannt!" : "Prüfen"}
        </button>
      ) : (
        <div className="space-y-4">
          {isAnticipation ? (
            <div
              className="rounded-2xl p-4 text-center"
              style={{
                backgroundColor: `color-mix(in srgb, ${accentColor} 8%, var(--lern-bg-primary))`,
                border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
              }}
            >
              <p className="text-sm font-medium" style={{ color: accentColor }}>
                Spannend! Lies jetzt die Erklärung — danach prüfen wir richtig.
              </p>
            </div>
          ) : (
            sandwich && (
              <SandwichFeedbackDisplay
                feedback={sandwich}
                correct={isCorrect}
                fehlerKategorie={fehlerAnalyse?.kategorie}
              />
            )
          )}

          <button
            onClick={() => {
              if (isAnticipation) {
                // Anticipation: kein Score, undefined = nicht gewertet
                onNext(undefined as unknown as boolean);
              } else {
                onNext(isCorrect, selected.map((i) => optionen[i].text).join(", "));
              }
            }}
            aria-label={isAnticipation ? "Weiter zur Erklärung" : "Weiter zum nächsten Schritt"}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] focus:outline-2 focus:outline-offset-2"
            style={{ backgroundColor: accentColor, outlineColor: accentColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accentColor)}
          >
            {isAnticipation ? "Weiter zur Erklärung" : "Weiter"}
          </button>
        </div>
      )}
    </div>
  );
}
