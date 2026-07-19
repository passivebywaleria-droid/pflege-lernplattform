"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { analysiereFehler } from "@/lib/adaptive/fehler-analyse";
import type { FehlerAnalyse } from "@/lib/adaptive/fehler-analyse";
import { generiereSandwichFeedback } from "./bloom-feedback";
import { AnswerSheet } from "./answer-sheet";
import { StepShell } from "./step-shell";
import { StepActionBar } from "./step-action-bar";
import { dedupeTrailingQuestion } from "@/lib/learn/dedupe-question";

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
  /** „Erklär mir das anders": Step-Adresse für die RAG-gebundene Alternativ-Erklärung. */
  erklaerKontext?: { ceId: string; situationId: string; stepId: string };
  /** Adaptiv-v1: Spickzettel dieses Steps aus dem AnswerSheet öffnen. */
  spickzettelOeffnen?: () => void;
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
  erklaerKontext,
  spickzettelOeffnen,
  onNext,
}: StepMCProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [fehlerAnalyse, setFehlerAnalyse] = useState<FehlerAnalyse | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const accentColor = isAnticipation ? "#9B7EA6" : "#5A7D60";
  const accentHover = isAnticipation ? "#8A6D95" : "#4C6A52";

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [title, fragetext]);

  const handleSelect = useCallback(
    (idx: number) => {
      if (submitted) return;
      if (multiSelect) {
        setSelected((prev) =>
          prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
        );
      } else {
        setSelected([idx]);
      }
    },
    [submitted, multiSelect]
  );

  const handleSubmit = useCallback(() => {
    setSubmitted(true);

    if (isAnticipation) return;

    const correct = multiSelect
      ? optionen.every((o, i) => o.isCorrect === selected.includes(i))
      : selected.length === 1 && optionen[selected[0]].isCorrect;

    if (!correct && selected.length > 0) {
      const antwortZeit = Date.now() - startTimeRef.current;
      const gewaehlteTexte = selected.map((i) => optionen[i].text).join(", ");
      const richtigeTexte = optionen
        .filter((o) => o.isCorrect)
        .map((o) => o.text)
        .join(", ");
      const alleTexte = optionen.map((o) => o.text);

      const analyse = analysiereFehler(
        antwortZeit,
        gewaehlteTexte,
        richtigeTexte,
        alleTexte,
        "mc",
        sprachLevel === "b1" ? 2 : 4
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
    ? optionen.every((o, i) => o.isCorrect === selected.includes(i))
    : selected.length === 1 && optionen[selected[0]].isCorrect;

  const richtigeAntwort = optionen
    .filter((o) => o.isCorrect)
    .map((o) => o.text)
    .join(", ");
  // B1-Fix (Didaktik-Audit 2026-07-18, Lücke 4): Die Musterlösung im Sheet muss
  // die B1-Erklärung nutzen, wenn vorhanden — vorher bekamen B1-Schüler C1-Text.
  const korrekteOption = optionen.find((o) => o.isCorrect);
  const richtigeErklaerung = korrekteOption
    ? (sprachLevel === "b1" && korrekteOption.explanationB1) ||
      korrekteOption.explanation
    : undefined;

  // Feedback-Anatomie (KERN-LOOP-STANDARD): Das Sheet erklärt die EIGENE
  // (falsche) Wahl + die richtige Antwort; die übrigen Optionen wandern
  // eingeklappt in „Warum die anderen nicht?".
  const erklaerungFuer = (o: MCOption) =>
    (sprachLevel === "b1" && o.explanationB1) || o.explanation;
  const gewaehlteFalsche = selected
    .map((i) => optionen[i])
    .find((o) => !o.isCorrect);
  const warumWahl =
    submitted && !isCorrect && gewaehlteFalsche
      ? erklaerungFuer(gewaehlteFalsche)
      : undefined;
  const andereErklaerungen = submitted
    ? optionen
        .filter(
          (o, i) => !o.isCorrect && o !== gewaehlteFalsche && !!o.explanation && !selected.includes(i)
        )
        .map((o) => ({ text: o.text, erklaerung: erklaerungFuer(o) }))
    : [];
  const sandwich =
    submitted && !isAnticipation
      ? generiereSandwichFeedback(
          isCorrect,
          richtigeAntwort,
          richtigeErklaerung,
          fehlerAnalyse ?? undefined,
          bloomLevel
        )
      : null;

  // Bundle-Disziplin: wenn Titel ≈ Fragetext, nur einmal zeigen
  const safeTitle = title ?? "";
  const safeFragetext = fragetext ?? "";
  const titleEqualsQuestion =
    safeTitle.trim().toLowerCase() === safeFragetext.trim().toLowerCase();
  const question = titleEqualsQuestion
    ? safeFragetext
    : safeTitle || safeFragetext;

  // Frage-Dopplung vermeiden (Dozentin-Feedback 2026-07-16): Viele Bodies enden
  // mit derselben Frage, die der Fragetext darunter wiederholt. Ist der letzte
  // Body-Satz eine Frage und sinngleich mit dem Fragetext (Wortüberlappung),
  // wird er in der Anzeige weggelassen — der Fragetext IST die Frage.
  const displayBody = dedupeTrailingQuestion(body, safeFragetext);

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      <StepShell question={question} body={displayBody} glossar={glossar}>
        {/* Falls Titel + Fragetext beide existieren und unterschiedlich sind:
            Frage darunter als Sub-Frage. */}
        {!titleEqualsQuestion && title && (
          <p className="-mt-2 mb-3 text-sm font-medium text-[var(--lern-text-primary)]">
            <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
          </p>
        )}

        {/* Mehrfachauswahl-Hinweis in der Optionen-Ecke statt Streu-Tipp unten
            (KERN-LOOP-STANDARD 2026-07-16) */}
        {multiSelect && !submitted && (
          <p className="mb-1.5 text-right text-[11px] text-[var(--lern-text-tertiary)]">
            Mehrere Antworten möglich
          </p>
        )}

        {/* Optionen — Bundle-Stil: 18px Radio-Indikator + Text */}
        <div
          className="flex flex-col gap-2"
          role={multiSelect ? "group" : "radiogroup"}
          aria-label={fragetext}
        >
          {optionen.map((option, idx) => {
            const isSelected = selected.includes(idx);
            const showResult = submitted;
            const optionCorrect = option.isCorrect;

            let borderColorVar = "var(--lern-border)";
            let bgColorVar = "var(--lern-bg-primary)";
            let boxShadow = "none";

            if (isAnticipation && showResult) {
              if (isSelected) {
                borderColorVar = accentColor;
                bgColorVar = `color-mix(in srgb, ${accentColor} 10%, var(--lern-bg-primary))`;
              }
            } else if (showResult && isSelected && optionCorrect) {
              borderColorVar = "var(--lern-success)";
              bgColorVar =
                "color-mix(in srgb, var(--lern-success) 8%, var(--lern-bg-primary))";
            } else if (showResult && isSelected && !optionCorrect) {
              borderColorVar = "var(--lern-error)";
              bgColorVar =
                "color-mix(in srgb, var(--lern-error) 8%, var(--lern-bg-primary))";
            } else if (showResult && !isSelected && optionCorrect) {
              borderColorVar =
                "color-mix(in srgb, var(--lern-success) 50%, transparent)";
              bgColorVar =
                "color-mix(in srgb, var(--lern-success) 5%, var(--lern-bg-primary))";
            } else if (isSelected) {
              borderColorVar = accentColor;
              bgColorVar = `color-mix(in srgb, ${accentColor} 5%, var(--lern-bg-primary))`;
              boxShadow = `0 0 0 3px color-mix(in srgb, ${accentColor} 22%, transparent)`;
            }

            const indicatorBorderColor =
              !isAnticipation && showResult && optionCorrect
                ? "var(--lern-success)"
                : !isAnticipation && showResult && isSelected && !optionCorrect
                  ? "var(--lern-error)"
                  : isSelected
                    ? accentColor
                    : "var(--lern-text-tertiary)";

            const indicatorBg =
              !isAnticipation && showResult && optionCorrect
                ? "var(--lern-success)"
                : !isAnticipation && showResult && isSelected && !optionCorrect
                  ? "var(--lern-error)"
                  : isSelected
                    ? accentColor
                    : "transparent";

            return (
              <motion.button
                key={idx}
                onClick={() => handleSelect(idx)}
                whileTap={!submitted ? { scale: 0.98 } : undefined}
                role={multiSelect ? "checkbox" : "radio"}
                aria-checked={isSelected}
                aria-label={`Option ${idx + 1}: ${option.text}`}
                tabIndex={0}
                className="w-full rounded-xl border text-left transition-all focus:outline-2 focus:outline-offset-2"
                style={{
                  borderColor: borderColorVar,
                  backgroundColor: bgColorVar,
                  boxShadow,
                  padding: "12px 14px",
                  outlineColor: accentColor,
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex shrink-0 items-center justify-center rounded-full transition-colors"
                    style={{
                      width: 18,
                      height: 18,
                      border: `1.5px solid ${indicatorBorderColor}`,
                      backgroundColor: indicatorBg,
                      marginTop: 2,
                    }}
                  >
                    {(isSelected ||
                      (!isAnticipation && showResult && optionCorrect)) && (
                      <span
                        className="rounded-full"
                        style={{
                          width: 6,
                          height: 6,
                          background: "white",
                        }}
                      />
                    )}
                  </span>
                  {/* KERN-LOOP-STANDARD (2026-07-16): Nach dem Prüfen werden die
                      Optionen nur noch MARKIERT — erklärt wird an genau einem Ort,
                      im AnswerSheet (Verdikt → Warum → „Warum die anderen nicht?"). */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-snug text-[var(--lern-text-primary)]">
                      <FachbegriffText glossar={glossar ?? []}>
                        {option.text}
                      </FachbegriffText>
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Anticipation-Hinweis nach Submit */}
        {submitted && isAnticipation && (
          <div
            className="mt-3 rounded-xl p-3 text-center"
            style={{
              backgroundColor: `color-mix(in srgb, ${accentColor} 8%, var(--lern-bg-primary))`,
              border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)`,
            }}
          >
            <p className="text-sm font-medium" style={{ color: accentColor }}>
              Spannend! Lies jetzt die Erklärung — danach prüfen wir richtig.
            </p>
          </div>
        )}
      </StepShell>

      {/* Action-Bar fix unten — Bundle-Stil */}
      {!submitted && (
        <StepActionBar>
          <button
            onClick={handleSubmit}
            disabled={selected.length === 0}
            aria-label={isAnticipation ? "Vermutung abgeben" : "Antwort prüfen"}
            className="flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-offset-2"
            style={{ backgroundColor: accentColor, outlineColor: accentColor }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = accentHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = accentColor)
            }
          >
            {isAnticipation ? "Bin gespannt!" : "Prüfen"}
          </button>
        </StepActionBar>
      )}
      {submitted && isAnticipation && (
        <StepActionBar>
          <button
            onClick={() => onNext(undefined as unknown as boolean)}
            aria-label="Weiter zur Erklärung"
            className="flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] focus:outline-2 focus:outline-offset-2"
            style={{ backgroundColor: accentColor, outlineColor: accentColor }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = accentHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = accentColor)
            }
          >
            Weiter zur Erklärung
          </button>
        </StepActionBar>
      )}

      {/* Feedback Bottom-Sheet — nur für nicht-Anticipation */}
      {sandwich && !isAnticipation && (
        <AnswerSheet
          open={submitted}
          isCorrect={isCorrect}
          feedback={sandwich}
          fehlerKategorie={fehlerAnalyse?.kategorie}
          warumWahl={warumWahl}
          andereErklaerungen={andereErklaerungen}
          spickzettelOeffnen={spickzettelOeffnen}
          erklaerAnders={
            !isCorrect && erklaerKontext
              ? {
                  ...erklaerKontext,
                  frage: fragetext,
                  gewaehlteAntwort: selected
                    .map((i) => optionen[i].text)
                    .join(", "),
                  richtigeAntwort,
                  sprachLevel,
                }
              : undefined
          }
          onNext={() =>
            onNext(
              isCorrect,
              selected.map((i) => optionen[i].text).join(", ")
            )
          }
        />
      )}
    </div>
  );
}
