"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { SandwichFeedback } from "./bloom-feedback";
import type { FehlerKategorie } from "@/lib/adaptive/fehler-analyse";
import { ErklaerAnders, type ErklaerAndersKontext } from "./erklaer-anders";

interface AnswerSheetProps {
  open: boolean;
  isCorrect: boolean;
  feedback: SandwichFeedback;
  /**
   * Fehlerkategorie aus analysiereFehler. Adaptiv-v1 (Station ②): bei „raten"
   * rückt „Erklär mir das anders" VOR die Erklärung — wer geraten hat, braucht
   * einen anderen Zugang, nicht dieselbe Erklärung (VISION-Strategiewechsel).
   */
  fehlerKategorie?: FehlerKategorie;
  /**
   * Adaptiv-v1 (Station ②): Falsch am Anker-Step → der Spickzettel-Baustein
   * lässt sich direkt aus dem Feedback öffnen.
   */
  spickzettelOeffnen?: () => void;
  /**
   * „Erklär mir das anders" (VISION-Strategiewechsel): Wenn gesetzt und die
   * Antwort falsch war, kann der Schüler eine KI-Alternativ-Erklärung anfordern
   * (RAG-gebunden an den Lernstoff der Situation).
   */
  erklaerAnders?: ErklaerAndersKontext;
  /** Warum die GEWÄHLTE (falsche) Antwort nicht stimmt — kommt vor der Musterlösung. */
  warumWahl?: string;
  /** Erklärungen der übrigen Optionen — eingeklappt („Warum die anderen nicht?"). */
  andereErklaerungen?: { text: string; erklaerung: string }[];
  onNext: () => void;
}

export function AnswerSheet({
  open,
  isCorrect,
  feedback,
  fehlerKategorie,
  erklaerAnders,
  warumWahl,
  andereErklaerungen,
  spickzettelOeffnen,
  onNext,
}: AnswerSheetProps) {
  // Bei „geraten" zuerst der Strategiewechsel, dann die Erklärung.
  const geraten = !isCorrect && fehlerKategorie === "raten";
  // Falsch = warmes Amber (unterstützend), nicht wertendes Rot (Dozentin-Feedback
  // 2026-07-16: „das Rot wirkt wertend"). Der Weiter-Button bleibt IMMER der neutrale
  // Sage-Akzent — „weiter" ist eine Handlung, kein Urteil (Verdikt von Aktion entkoppelt).
  const color = isCorrect ? "#3E5A6A" : "#D4956A";
  const ctaColor = "var(--lern-accent)";
  const ctaHover = "#4C6A52";

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
          {/* max-h + Scroll: mit Alternativ-Erklärung(en) kann das Sheet wachsen —
              es darf den Screen nie sprengen (iPhone-Pilot). */}
          <div
            className="px-5 pt-5 space-y-3 max-w-lg mx-auto max-h-[80dvh] overflow-y-auto"
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

            {/* Bei „geraten": Strategiewechsel ZUERST (VISION: von Grund auf
                anders erklären, nicht dieselbe Musterlösung nochmal). */}
            {geraten && erklaerAnders && <ErklaerAnders kontext={erklaerAnders} />}

            {/* Feedback-Anatomie (KERN-LOOP-STANDARD 2026-07-16): Verdikt →
                Warum (eigene Wahl + Musterlösung) → Tiefe on-demand. Die
                Erklärungen der Optionen stehen NUR noch hier, nicht mehr
                unter den Optionen selbst. */}
            {warumWahl && (
              <p className="text-sm text-[var(--lern-text-primary)]">
                {warumWahl}
              </p>
            )}

            {feedback.korrektur && (
              <p className="text-sm text-[var(--lern-text-primary)]">
                {feedback.korrektur}
              </p>
            )}

            <p className="text-sm text-[var(--lern-text-secondary)]">
              {feedback.ermutigung}
            </p>

            {/* Adaptiv-v1: Spickzettel direkt aus dem Feedback öffnen —
                der Schüler muss nicht wissen, dass er unterm Step hängt. */}
            {!isCorrect && spickzettelOeffnen && (
              <button
                type="button"
                onClick={spickzettelOeffnen}
                className="w-full rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-4 py-2.5 text-sm font-medium text-[var(--lern-text-primary)] transition-all active:scale-[0.99]"
              >
                🗒 Spickzettel ansehen
              </button>
            )}

            {/* Strategiewechsel nur bei falscher Antwort — wer richtig lag,
                braucht keine zweite Erklärung. */}
            {!geraten && !isCorrect && erklaerAnders && (
              <ErklaerAnders kontext={erklaerAnders} />
            )}

            {/* Übrige Optionen: eingeklappt, on-demand */}
            {andereErklaerungen && andereErklaerungen.length > 0 && (
              <details className="group">
                <summary
                  className="cursor-pointer list-none text-sm font-medium text-[var(--lern-text-secondary)]"
                  aria-label="Warum die anderen Antworten nicht richtig sind"
                >
                  Warum die anderen nicht?{" "}
                  <span className="inline-block transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <div className="mt-2 space-y-2">
                  {andereErklaerungen.map((a, i) => (
                    <p
                      key={i}
                      className="text-xs leading-relaxed text-[var(--lern-text-secondary)]"
                    >
                      <span className="font-semibold">„{a.text}"</span> —{" "}
                      {a.erklaerung}
                    </p>
                  ))}
                </div>
              </details>
            )}

            <button
              onClick={onNext}
              className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] focus:outline-2 focus:outline-offset-2 mt-1"
              style={{ backgroundColor: ctaColor, outlineColor: ctaColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ctaHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ctaColor)}
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

