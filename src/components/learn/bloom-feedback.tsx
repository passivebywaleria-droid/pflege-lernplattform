"use client";

import { motion } from "framer-motion";
import type { FehlerAnalyse, FehlerKategorie } from "@/lib/adaptive/fehler-analyse";

// --- Bloom-Level-Daten ---

const BLOOM_DATA: Record<
  number,
  { name: string; farbe: string; erklaerung: string }
> = {
  1: {
    name: "Erinnern",
    farbe: "#6B8F71",
    erklaerung: "Du musstest Fakten oder Begriffe abrufen.",
  },
  2: {
    name: "Verstehen",
    farbe: "#C4877F",
    erklaerung: "Du musstest etwas in eigenen Worten erklären können.",
  },
  3: {
    name: "Anwenden",
    farbe: "#BFA48E",
    erklaerung: "Du musstest Wissen auf eine neue Situation übertragen.",
  },
  4: {
    name: "Analysieren",
    farbe: "#D4956A",
    erklaerung: "Du musstest Zusammenhänge erkennen und zergliedern.",
  },
  5: {
    name: "Bewerten",
    farbe: "#C96B5C",
    erklaerung: "Du musstest eine Situation beurteilen und begründen.",
  },
  6: {
    name: "Erschaffen",
    farbe: "#9B7EA6",
    erklaerung: "Du musstest etwas Neues erstellen oder planen.",
  },
};

// --- Bloom-Level-Kompetenz-Feedback ---

const BLOOM_KOMPETENZ: Record<string, string> = {
  "1-2": "Du kennst die Fakten — gut!",
  "3-4": "Du kannst das Wissen anwenden — stark!",
  "5-6": "Du denkst wie eine Pflegefachkraft — exzellent!",
};

function getBloomKompetenzText(level: number): string {
  if (level <= 2) return BLOOM_KOMPETENZ["1-2"];
  if (level <= 4) return BLOOM_KOMPETENZ["3-4"];
  return BLOOM_KOMPETENZ["5-6"];
}

// --- Sandwich-Feedback ---

export interface SandwichFeedback {
  lob: string;
  korrektur?: string;
  ermutigung: string;
}

/**
 * Generiert Sandwich-Feedback nach dem Prinzip: Loben → Korrigieren → Ermutigen
 * VISION.md: "Die KI ist nie negativ. Nie frustrierend. Nie herablassend."
 */
export function generiereSandwichFeedback(
  richtig: boolean,
  richtigeAntwort: string,
  erklaerung?: string,
  fehlerAnalyse?: FehlerAnalyse,
  bloomLevel?: number,
): SandwichFeedback {
  if (richtig) {
    const bloomText = bloomLevel ? getBloomKompetenzText(bloomLevel) : "";
    return {
      lob: "Super gemacht!",
      ermutigung: bloomText || erklaerung || "Weiter so!",
    };
  }

  // Sandwich bei falscher Antwort — Lob basierend auf Fehlerkategorie
  const lob = getLobFuerKategorie(fehlerAnalyse?.kategorie);
  const korrekturText = richtigeAntwort
    ? `Die richtige Antwort ist: ${richtigeAntwort}${erklaerung ? `. ${erklaerung}` : ""}`
    : erklaerung || "";
  const ermutigungText = fehlerAnalyse?.erklaerung || "Beim nächsten Mal klappt es bestimmt!";

  return {
    lob,
    korrektur: korrekturText || undefined,
    ermutigung: ermutigungText,
  };
}

function getLobFuerKategorie(kategorie?: FehlerKategorie): string {
  switch (kategorie) {
    case "fluechtig":
      return "Fast richtig!";
    case "raten":
      return "Gut, dass du es versucht hast!";
    case "verwechslung":
      return "Guter Ansatz — du warst nah dran!";
    case "sprache":
      return "Du hast das Konzept verstanden!";
    case "konzept":
      return "Guter Versuch!";
    default:
      return "Guter Ansatz!";
  }
}

// --- Komponenten ---

interface BloomFeedbackProps {
  bloomLevel: number;
  correct: boolean;
}

export function BloomFeedback({ bloomLevel, correct }: BloomFeedbackProps) {
  const bloom = BLOOM_DATA[bloomLevel];
  if (!bloom) return null;

  const nextBloom = BLOOM_DATA[bloomLevel + 1];
  const kompetenzText = correct ? getBloomKompetenzText(bloomLevel) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-3 rounded-2xl border border-[var(--lern-border)]/50 bg-[var(--lern-bg-primary)]/50 px-4 py-3"
    >
      <div className="flex items-center gap-2 mb-1">
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
          style={{ backgroundColor: bloom.farbe }}
        >
          Bloom {bloomLevel}
        </span>
        <span className="text-xs font-semibold text-[var(--lern-text-primary)]">
          {bloom.name}
        </span>
      </div>
      <p className="text-xs text-[var(--lern-text-secondary)]">{bloom.erklaerung}</p>
      {kompetenzText && (
        <p className="text-xs font-medium text-[var(--lern-text-primary)] mt-1">
          {kompetenzText}
        </p>
      )}
      {correct && nextBloom && (
        <p className="text-xs text-[var(--lern-text-secondary)] mt-1">
          Nächste Stufe:{" "}
          <span className="font-semibold" style={{ color: nextBloom.farbe }}>
            Bloom {bloomLevel + 1}: {nextBloom.name}
          </span>
        </p>
      )}
    </motion.div>
  );
}

// --- Sandwich-Feedback-Komponente ---

interface SandwichFeedbackDisplayProps {
  feedback: SandwichFeedback;
  correct: boolean;
  fehlerKategorie?: FehlerKategorie;
}

export function SandwichFeedbackDisplay({
  feedback,
  correct,
  fehlerKategorie,
}: SandwichFeedbackDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      aria-live="polite"
      className={`rounded-2xl p-4 space-y-2 ${
        correct
          ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
          : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
      }`}
    >
      {/* Lob (immer) */}
      <p className="font-semibold text-[var(--lern-text-primary)]">
        {correct ? (
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[#6B8F71]">✓</span> {feedback.lob}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[#C96B5C]">✗</span> {feedback.lob}
          </span>
        )}
      </p>

      {/* Korrektur (nur bei Fehler) */}
      {feedback.korrektur && (
        <p className="text-sm text-[var(--lern-text-primary)]">
          {feedback.korrektur}
        </p>
      )}

      {/* Ermutigung (immer) */}
      <p className="text-sm text-[var(--lern-text-secondary)]">
        {feedback.ermutigung}
      </p>

      {/* Fehler-Kategorie-Hinweis (nur bei Fehler, klein) */}
      {fehlerKategorie && !correct && (
        <p className="text-[10px] text-[var(--lern-text-tertiary,#8e8e93)] mt-1">
          {getFehlerHinweisKurz(fehlerKategorie)}
        </p>
      )}
    </motion.div>
  );
}

function getFehlerHinweisKurz(kategorie: FehlerKategorie): string {
  switch (kategorie) {
    case "raten":
      return "Tipp: Nimm dir mehr Zeit zum Lesen.";
    case "fluechtig":
      return "Tipp: Lies die Optionen nochmal genau.";
    case "sprache":
      return "Tipp: Nutze das Glossar für Fachbegriffe.";
    case "verwechslung":
      return "Tipp: Achte auf die feinen Unterschiede.";
    case "konzept":
      return "Tipp: Lies den Erklärtext nochmal durch.";
    default:
      return "";
  }
}
