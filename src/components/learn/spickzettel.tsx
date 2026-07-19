"use client";

// Spickzettel (Option A, KERN-LOOP-STANDARD Baustein 3): Der VOLLSTÄNDIGE
// Wissens-Baustein am Anwendungs-Step — on-demand als Sheet von unten.
//
// Fachlichkeits-Garantie (Waleria 2026-07-17): Es wird NICHTS gekürzt —
// Faustregel, kompletter Kerntext, Spektrum, Sonst-Box und Wiederbegegnung
// kommen wortgleich aus denselben InlineWissenData wie der Wissen-Tab.
// Nur der Story-Aufhänger entfällt inline (die Situation IST die Szene).
//
// „Kennst du schon?"-Pills: Spektrum-Einträge mit situationsId verlinken in
// die andere Situation (mit ?von=<aktuelle>) — der Player dort zeigt einen
// Rückkehr-Chip, und der Fortschritt HIER bleibt gespeichert (localStorage/
// Server pro Situation). Saubere Hin-und-zurück-Kante.

import { useEffect, useState, type MutableRefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { NotebookText, ArrowRight } from "lucide-react";
import type { ContentStep, GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { trackFunnel } from "@/lib/funnel/track";

interface SpickzettelProps {
  /** Die verlagerten inlineWissen-Steps, die an diesem Antwort-Step hängen. */
  bausteine: ContentStep[];
  situationId: string;
  ceId: string;
  locale: string;
  sprachLevel?: "c1" | "b1";
  glossar?: GlossarEntry[];
  /**
   * Adaptiv-v1 (Station ②): Ref, über die das AnswerSheet den ersten Baustein
   * direkt aus dem Feedback öffnen kann („Spickzettel ansehen").
   */
  oeffnenRef?: MutableRefObject<(() => void) | null>;
}

/** localStorage-Key fürs Besucht-Tracking (füttert Adaptivität + Lernzeit-Nachweis). */
export function spickzettelBesuchtKey(situationId: string, stepId: string): string {
  return `spickzettel:${situationId}:${stepId}`;
}

export function Spickzettel({
  bausteine,
  situationId,
  ceId,
  locale,
  sprachLevel = "c1",
  glossar,
  oeffnenRef,
}: SpickzettelProps) {
  const router = useRouter();
  const [offenerIndex, setOffenerIndex] = useState<number | null>(null);

  // Externes Öffnen (AnswerSheet-Angebot) — Ref statt Prop-Drilling des States.
  useEffect(() => {
    if (!oeffnenRef) return;
    oeffnenRef.current = () => {
      if (bausteine.length > 0) oeffnen(0);
    };
    return () => {
      oeffnenRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oeffnenRef, bausteine]);

  if (bausteine.length === 0) return null;

  const oeffnen = (idx: number) => {
    setOffenerIndex(idx);
    const step = bausteine[idx];
    try {
      // Key-Existenz = besucht (Adaptivitäts-Signal + Lernzeit-Nachweis).
      localStorage.setItem(spickzettelBesuchtKey(situationId, step.stepId), "1");
    } catch {
      // localStorage nicht verfügbar — Tracking ist best effort
    }
    trackFunnel("spickzettel_offen", { situationId, stepId: step.stepId });
  };

  const offener = offenerIndex !== null ? bausteine[offenerIndex] : null;
  const wissen = offener?.inlineWissen;
  const b1 = sprachLevel === "b1";

  const kerntext = wissen
    ? (b1 && wissen.kerntextB1) || wissen.kerntext
    : "";
  const faustregel = wissen
    ? (b1 && wissen.faustregelB1) || wissen.faustregel
    : "";
  const sonstBox = wissen ? (b1 && wissen.sonstBoxB1) || wissen.sonstBox : undefined;

  // Spektrum: Einträge zur EIGENEN Situation nicht als Pill zeigen (Selbstbezug).
  const spektrum = (wissen?.spektrum ?? []).filter(
    (s) => s.situationsId !== situationId
  );

  return (
    <>
      {/* Chips — einer pro Baustein, unter den Optionen */}
      <div className="mt-3 flex flex-wrap gap-2">
        {bausteine.map((step, idx) => (
          <button
            key={step.stepId}
            onClick={() => oeffnen(idx)}
            aria-expanded={offenerIndex === idx}
            className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-[var(--lern-accent)]/40 bg-[var(--lern-accent-bg)] px-3.5 py-1.5 text-xs font-semibold text-[var(--lern-accent)] transition-transform active:scale-95"
          >
            <NotebookText className="h-3.5 w-3.5" aria-hidden="true" />
            Spickzettel: {step.contentC1.title}
          </button>
        ))}
      </div>

      {/* Sheet — vollständiger Baustein */}
      <AnimatePresence>
        {offener && wissen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/45"
            onClick={() => setOffenerIndex(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 max-h-[86dvh] overflow-y-auto rounded-t-3xl bg-[var(--lern-bg-primary)] shadow-2xl"
              style={{ borderTop: "3px solid color-mix(in srgb, var(--lern-accent) 45%, transparent)" }}
              role="dialog"
              aria-label={`Spickzettel: ${offener.contentC1.title}`}
            >
              <div
                className="px-5 pt-4 max-w-lg mx-auto"
                style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
              >
                <div className="mx-auto mb-3 h-1 w-11 rounded-full bg-[var(--lern-border)]" />

                <div className="mb-2.5 flex items-baseline justify-between gap-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--lern-accent)]">
                    Spickzettel · {offener.contentC1.title}
                  </p>
                  {offener.quellen?.[0] && (
                    <p className="shrink-0 text-[10px] text-[var(--lern-text-tertiary)]">
                      {offener.quellen[0].split(",")[0]}
                    </p>
                  )}
                </div>

                {/* Wiederbegegnung — „kennst du von …" zuerst, wenn vorhanden */}
                {wissen.wiederbegegnung && (
                  <p className="mb-3 rounded-xl bg-[var(--lern-accent-bg)] px-3 py-2 text-xs text-[var(--lern-text-secondary)]">
                    Kennst du von <b>{wissen.wiederbegegnung.basisPatient}</b> —{" "}
                    {(b1 && wissen.wiederbegegnung.vertiefungB1) ||
                      wissen.wiederbegegnung.vertiefung}
                  </p>
                )}

                {/* Faustregel — der destillierte Kern, fett zuerst */}
                <p className="mb-3 border-s-[3px] border-[var(--lern-accent)] ps-3 text-[15px] font-bold leading-relaxed text-[var(--lern-text-primary)] [text-wrap:balance]">
                  {faustregel}
                </p>

                {/* Kerntext — VOLLSTÄNDIG, wortgleich zum Wissen-Tab */}
                <div className="space-y-2.5">
                  {kerntext.split(/\n\n+/).map((absatz, i) => (
                    <p key={i} className="text-sm leading-relaxed text-[var(--lern-text-primary)]">
                      <FachbegriffText glossar={glossar ?? []}>{absatz}</FachbegriffText>
                    </p>
                  ))}
                </div>

                {sonstBox && (
                  <details className="mt-3 rounded-xl border-[1.5px] border-[var(--lern-border)] px-3 py-2.5">
                    <summary className="cursor-pointer text-sm font-medium text-[var(--lern-text-secondary)]">
                      Gut zu wissen
                    </summary>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--lern-text-secondary)]">
                      {sonstBox}
                    </p>
                  </details>
                )}

                {/* Kennst du schon? — Spektrum als Pills, Cross-Links tappbar */}
                {spektrum.length > 0 && (
                  <div className="mt-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[var(--lern-text-tertiary)]">
                      Kennst du schon?
                    </p>
                    {spektrum.map((s, i) => {
                      const beschreibung =
                        (b1 && s.kurzbeschreibungB1) || s.kurzbeschreibung;
                      const inhalt = (
                        <>
                          <span className="block text-[13px] font-semibold text-[var(--lern-text-primary)]">
                            {s.patientName} · {s.hauptfaktor}
                          </span>
                          <span className="block text-xs text-[var(--lern-text-secondary)]">
                            {beschreibung}
                          </span>
                        </>
                      );
                      return s.situationsId ? (
                        <button
                          key={i}
                          onClick={() =>
                            router.push(
                              `/${locale}/lernen/situation/${s.situationsId}?ce=${ceId}&von=${situationId}`
                            )
                          }
                          className="mb-2 flex w-full items-center gap-2.5 rounded-2xl border-[1.5px] border-[var(--lern-accent)]/35 bg-[var(--lern-bg)] px-3.5 py-2.5 text-start transition-transform active:scale-[0.98]"
                        >
                          <span className="min-w-0 flex-1">{inhalt}</span>
                          <ArrowRight
                            className="h-4 w-4 shrink-0 text-[var(--lern-accent)]"
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <div
                          key={i}
                          className="mb-2 rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg)] px-3.5 py-2.5"
                        >
                          {inhalt}
                        </div>
                      );
                    })}
                  </div>
                )}

                <p className="mt-3 text-center text-[11px] text-[var(--lern-text-tertiary)]">
                  Vollständiger Wissens-Baustein — jederzeit auch im Wissen-Tab.
                </p>

                <button
                  onClick={() => setOffenerIndex(null)}
                  className="mt-2.5 w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#4C6A52] active:scale-[0.98]"
                >
                  Zurück zur Frage
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
