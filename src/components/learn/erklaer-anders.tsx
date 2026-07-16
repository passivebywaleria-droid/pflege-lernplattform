"use client";

// „Erklär mir das anders" — Strategiewechsel-Button im AnswerSheet (VISION-USP).
//
// Nach einer falschen Antwort kann der Schüler bis zu 2 Alternativ-Erklärungen
// anfordern (Versuch 1: Alltags-Analogie, Versuch 2: Schritt-für-Schritt —
// entscheidet die API). RAG-gebunden über /api/erklaer-anders; offline und
// bei Fehlern degradiert der Button graceful (Hinweis statt Spinner-Falle).

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface ErklaerAndersKontext {
  ceId: string;
  situationId: string;
  stepId: string;
  frage: string;
  gewaehlteAntwort: string;
  richtigeAntwort: string;
  sprachLevel?: "c1" | "b1";
}

interface ErklaerAndersProps {
  kontext: ErklaerAndersKontext;
}

const MAX_VERSUCHE = 2;

export function ErklaerAnders({ kontext }: ErklaerAndersProps) {
  const [erklaerungen, setErklaerungen] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hinweis, setHinweis] = useState<string | null>(null);
  // Nach „nicht im Lernstoff"/Limit ist ein weiterer Versuch sinnlos → Button weg.
  const [gesperrt, setGesperrt] = useState(false);

  const anfordern = async () => {
    if (loading || gesperrt || erklaerungen.length >= MAX_VERSUCHE) return;
    setHinweis(null);

    // Klassenzimmer-Realität: schlechtes WLAN → ehrliche Ansage statt Spinner.
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      setHinweis(
        "Du bist gerade offline. Die Alternativ-Erklärung braucht Internet — versuch es später nochmal."
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/erklaer-anders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...kontext,
          versuch: erklaerungen.length + 1,
        }),
      });
      const data = (await response.json()) as {
        erklaerung?: string;
        source?: string;
        error?: string;
      };

      if (!response.ok || !data.erklaerung) {
        setHinweis(
          "Die Alternativ-Erklärung klappt gerade nicht. Versuch es gleich nochmal."
        );
        return;
      }

      if (data.source === "nicht-im-lernstoff" || data.source === "limit") {
        // Ehrlicher Fallback: anzeigen, aber keine weiteren Versuche anbieten.
        setHinweis(data.erklaerung);
        setGesperrt(true);
        return;
      }

      setErklaerungen((prev) => [...prev, data.erklaerung as string]);
    } catch {
      setHinweis(
        "Die Alternativ-Erklärung klappt gerade nicht. Versuch es gleich nochmal."
      );
    } finally {
      setLoading(false);
    }
  };

  const buttonSichtbar = !gesperrt && erklaerungen.length < MAX_VERSUCHE;

  return (
    <div className="space-y-2">
      <AnimatePresence initial={false}>
        {erklaerungen.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="rounded-xl px-4 py-3"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--lern-accent) 8%, var(--lern-bg-primary, #fff))",
              border:
                "1.5px solid color-mix(in srgb, var(--lern-accent) 25%, transparent)",
            }}
          >
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
              {i === 0 ? "Anders erklärt" : "Noch ein Weg"}
            </p>
            <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--lern-text-primary)]">
              {text}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>

      {hinweis && (
        <p className="text-sm text-[var(--lern-text-secondary)]" role="status">
          {hinweis}
        </p>
      )}

      {loading && (
        <div
          className="flex items-center gap-2 px-1 py-2"
          role="status"
          aria-label="Alternative Erklärung wird erstellt"
        >
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--lern-text-tertiary)]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--lern-text-tertiary)] [animation-delay:0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--lern-text-tertiary)] [animation-delay:0.3s]" />
          <span className="text-xs text-[var(--lern-text-secondary)]">
            Ich überlege mir einen anderen Weg …
          </span>
        </div>
      )}

      {buttonSichtbar && !loading && (
        <button
          onClick={anfordern}
          className="flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all active:scale-[0.98] focus:outline-2 focus:outline-offset-2"
          style={{
            color: "var(--lern-accent)",
            border: "1.5px solid color-mix(in srgb, var(--lern-accent) 45%, transparent)",
            backgroundColor: "transparent",
            outlineColor: "var(--lern-accent)",
          }}
          aria-label={
            erklaerungen.length === 0
              ? "Erklär mir das anders"
              : "Noch mal anders erklären"
          }
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {erklaerungen.length === 0
            ? "Erklär mir das anders"
            : "Noch mal anders erklären"}
        </button>
      )}
    </div>
  );
}
