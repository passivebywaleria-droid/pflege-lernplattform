"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { SandwichFeedback } from "./bloom-feedback";
import type { FehlerKategorie } from "@/lib/adaptive/fehler-analyse";

interface AnswerSheetProps {
  open: boolean;
  isCorrect: boolean;
  feedback: SandwichFeedback;
  fehlerKategorie?: FehlerKategorie;
  onNext: () => void;
}

export function AnswerSheet({
  open,
  isCorrect,
  feedback,
  fehlerKategorie,
  onNext,
}: AnswerSheetProps) {
  const color = isCorrect ? "#3E5A6A" : "#C96B5C";
  const hoverColor = isCorrect ? "#2F4654" : "#b05e50";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl shadow-2xl"
          style={{
            backgroundColor: `color-mix(in srgb, ${color} 10%, var(--lern-bg-primary, #fff))`,
            borderTop: `3px solid color-mix(in srgb, ${color} 40%, transparent)`,
          }}
          role="alert"
          aria-live="polite"
        >
          <div
            className="px-5 pt-5 space-y-3 max-w-lg mx-auto"
            style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {isCorrect ? "✓" : "✗"}
              </span>
              <p className="font-semibold text-base" style={{ color }}>
                {feedback.lob}
              </p>
            </div>

            {feedback.korrektur && (
              <p className="text-sm text-[var(--lern-text-primary)]">
                {feedback.korrektur}
              </p>
            )}

            <p className="text-sm text-[var(--lern-text-secondary)]">
              {feedback.ermutigung}
            </p>

            {fehlerKategorie && !isCorrect && (
              <p className="text-xs text-[var(--lern-text-tertiary,#8e8e93)]">
                {getFehlerHinweis(fehlerKategorie)}
              </p>
            )}

            <button
              onClick={onNext}
              className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] focus:outline-2 focus:outline-offset-2 mt-1"
              style={{ backgroundColor: color, outlineColor: color }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = color)}
              aria-label="Weiter zum nächsten Schritt"
            >
              Weiter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getFehlerHinweis(kategorie: FehlerKategorie): string {
  switch (kategorie) {
    case "raten":
      return "Tipp: Nimm dir mehr Zeit zum Lesen.";
    case "fluechtig":
      return "Tipp: Lies die Optionen nochmal genau.";
    case "sprache":
      return "Tipp: Nutze das Glossar für Fachbegriffe.";
    case "verwechslung":
      // FIX (walkthrough B-05): Verweis auf konkret sichtbare Option-Erklärungen
      // statt vager "feine Unterschiede".
      return "Tipp: Lies die Erklärung unter der richtigen Antwort — dort steht der Unterschied.";
    case "konzept":
      return "Tipp: Lies den Erklärtext nochmal durch.";
    default:
      return "";
  }
}
