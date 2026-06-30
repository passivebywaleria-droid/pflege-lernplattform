"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, Lightbulb, Users } from "lucide-react";
import { TtsButton } from "./tts-button";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { StepActionBar } from "./step-action-bar";
import type { GlossarEntry, InlineWissenData } from "../../../content/_types";

interface StepInlineWissenProps {
  title: string;
  data: InlineWissenData;
  sprachLevel: "c1" | "b1";
  glossar?: GlossarEntry[];
  onNext: () => void;
}

/**
 * Schätzt Lesezeit für den Hauptteil (Story-Aufhänger + Kerntext + Faustregel).
 * Lesegeschwindigkeit aus Zeit-Modell v3:
 *   C1 = 17 Zeichen/s, B1 = 12 Zeichen/s. +5s Pause-Aufschlag für Verarbeitung.
 */
function leseZeitMinSec(
  data: InlineWissenData,
  sprachLevel: "c1" | "b1"
): string {
  const zeichen =
    (sprachLevel === "b1"
      ? data.storyAufhaengerB1?.length ?? data.storyAufhaenger.length
      : data.storyAufhaenger.length) +
    (sprachLevel === "b1"
      ? data.kerntextB1?.length ?? data.kerntext.length
      : data.kerntext.length) +
    (sprachLevel === "b1"
      ? data.faustregelB1?.length ?? data.faustregel.length
      : data.faustregel.length);
  const zeichenProSec = sprachLevel === "b1" ? 12 : 17;
  const sekunden = Math.round(zeichen / zeichenProSec) + 5;
  if (sekunden < 60) return `ca. ${sekunden} Sek`;
  const min = Math.floor(sekunden / 60);
  const sec = sekunden % 60;
  return `ca. ${min}:${String(sec).padStart(2, "0")} Min`;
}

/**
 * StepInlineWissen — Themen-Baustein als 30-60-Sek Lese-Karte im Situations-Flow.
 *
 * Visuell BEWUSST anders als Anwendungs-Steps:
 *   • Sage-Grün-Tönung statt Card-Default (Hintergrund)
 *   • "Pflege-Wissen"-Header mit BookOpen-Icon
 *   • Story-Aufhänger > Kerntext > Faustregel (prominent) > Spektrum (collapsible) > Sonst-Box (collapsible)
 *   • Kein Quiz, kein Score — nur Lese-Snack mit "Weiter"-Button
 *
 * Logik: Wissen kommt VOR der Anwendung. Der Schüler hat keine
 * "Was-soll-ich-jetzt-wissen"-Lücke beim nachfolgenden Anwendungs-Step.
 */
export function StepInlineWissen({
  title,
  data,
  sprachLevel,
  glossar,
  onNext,
}: StepInlineWissenProps) {
  const [spektrumOpen, setSpektrumOpen] = useState(false);
  const [sonstOpen, setSonstOpen] = useState(false);

  const aufhaenger =
    sprachLevel === "b1" && data.storyAufhaengerB1
      ? data.storyAufhaengerB1
      : data.storyAufhaenger;
  const kerntext =
    sprachLevel === "b1" && data.kerntextB1 ? data.kerntextB1 : data.kerntext;
  const faustregel =
    sprachLevel === "b1" && data.faustregelB1
      ? data.faustregelB1
      : data.faustregel;
  const sonst =
    sprachLevel === "b1" && data.sonstBoxB1 ? data.sonstBoxB1 : data.sonstBox;

  const lesezeit = leseZeitMinSec(data, sprachLevel);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border-[1.5px] p-4 sm:p-5 flex flex-col gap-4"
        style={{
          // Universum: ChatGPT-Teal-Palette (gleiches Team wie Anwendungs-Steps,
          // aber dezent als „Lese-Modus" markiert via blasser Hintergrund).
          backgroundColor: "var(--lern-wissen-bg, #EAF4F0)",
          borderColor: "var(--lern-accent, #5A7D60)",
          color: "var(--lern-text-primary)",
        }}
      >
        {/* Header — Teal-Farbe wie Kind-Labels in Anwendungs-Steps */}
        <div className="flex items-center gap-2">
          <BookOpen
            className="w-4 h-4"
            style={{ color: "var(--lern-accent, #5A7D60)" }}
            aria-hidden="true"
          />
          <span
            className="text-[10px] font-semibold tracking-wider uppercase"
            style={{ color: "var(--lern-accent, #5A7D60)" }}
          >
            Pflege-Wissen · {lesezeit}
          </span>
        </div>

        {/* Titel */}
        <h2 className="text-base font-bold leading-tight">{title}</h2>

        {/* Story-Aufhänger */}
        <div
          className="text-sm italic leading-relaxed pl-3 border-l-[3px] whitespace-pre-line"
          style={{
            borderColor: "var(--lern-accent, #5A7D60)",
            color: "var(--lern-text-secondary)",
          }}
        >
          <FachbegriffText glossar={glossar ?? []}>{aufhaenger}</FachbegriffText>
        </div>

        {/* Kerntext — whitespace-pre-line damit \n\n als Absätze + • als Bullets sichtbar bleiben */}
        <div className="text-sm leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{kerntext}</FachbegriffText>
        </div>

        {/* Faustregel — prominent */}
        <div
          className="rounded-xl p-3 flex items-start gap-2"
          style={{
            backgroundColor: "var(--lern-wissen-faustregel-bg, #F8F5F0)",
            border: "1.5px solid var(--lern-accent, #5A7D60)",
          }}
        >
          <Lightbulb
            className="w-4 h-4 mt-0.5 shrink-0"
            style={{ color: "var(--lern-accent, #5A7D60)" }}
            aria-hidden="true"
          />
          <div className="flex-1">
            <span
              className="text-[10px] font-semibold tracking-wider uppercase block mb-1"
              style={{ color: "var(--lern-accent, #5A7D60)" }}
            >
              Faustregel
            </span>
            <p className="text-sm font-medium leading-snug">{faustregel}</p>
          </div>
        </div>

        {/* Spektrum — collapsible */}
        {data.spektrum && data.spektrum.length > 0 && (
          <div
            className="rounded-xl border-[1.5px]"
            style={{ borderColor: "var(--lern-accent, #5A7D60)" }}
          >
            <button
              type="button"
              onClick={() => setSpektrumOpen(!spektrumOpen)}
              className="w-full flex items-center gap-2 p-3 text-left"
              aria-expanded={spektrumOpen}
              aria-controls="spektrum-panel"
            >
              <Users
                className="w-4 h-4"
                style={{ color: "var(--lern-accent, #5A7D60)" }}
                aria-hidden="true"
              />
              <span
                className="text-[10px] font-semibold tracking-wider uppercase flex-1"
                style={{ color: "var(--lern-accent, #5A7D60)" }}
              >
                Spektrum: bei anderen Patient*innen anders
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${spektrumOpen ? "rotate-180" : ""}`}
                style={{ color: "var(--lern-accent, #5A7D60)" }}
                aria-hidden="true"
              />
            </button>
            {spektrumOpen && (
              <div
                id="spektrum-panel"
                className="px-3 pb-3 flex flex-col gap-2 text-sm leading-relaxed"
              >
                {data.spektrum.map((eintrag, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="font-semibold">
                      {eintrag.patientName} <span className="font-normal opacity-70">— {eintrag.hauptfaktor}</span>
                    </div>
                    <div className="text-sm opacity-90">{eintrag.kurzbeschreibung}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Sonst-Box — collapsible */}
        {sonst && (
          <div
            className="rounded-xl border-[1.5px] border-dashed"
            style={{ borderColor: "var(--lern-accent, #5A7D60)" }}
          >
            <button
              type="button"
              onClick={() => setSonstOpen(!sonstOpen)}
              className="w-full flex items-center gap-2 p-3 text-left"
              aria-expanded={sonstOpen}
              aria-controls="sonst-panel"
            >
              <span
                className="text-[10px] font-semibold tracking-wider uppercase flex-1"
                style={{ color: "var(--lern-accent, #5A7D60)" }}
              >
                Sonst noch wichtig (kommt in keinem Patienten-Fall vor)
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${sonstOpen ? "rotate-180" : ""}`}
                style={{ color: "var(--lern-accent, #5A7D60)" }}
                aria-hidden="true"
              />
            </button>
            {sonstOpen && (
              <div
                id="sonst-panel"
                className="px-3 pb-3 text-sm leading-relaxed whitespace-pre-line"
              >
                <FachbegriffText glossar={glossar ?? []}>{sonst}</FachbegriffText>
              </div>
            )}
          </div>
        )}

        {/* TTS Button */}
        <div className="flex justify-end">
          <TtsButton text={`${title}. ${aufhaenger} ${kerntext} ${faustregel}`} />
        </div>
      </motion.div>

      <StepActionBar>
        <button
          type="button"
          onClick={onNext}
          className="flex-1 rounded-xl py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
          style={{
            backgroundColor: "var(--lern-accent)",
          }}
        >
          Weiter
        </button>
      </StepActionBar>
    </>
  );
}
