#!/usr/bin/env npx tsx
/**
 * Berechnet Lesezeit für Inline-Wissens-Bausteine in einer Phase.
 *
 * Lesegeschwindigkeit (aus calculate-step-time.ts Zeit-Modell v3):
 *   C1 (Muttersprache): 17 Zeichen/s
 *   B1 (DaZ): 12 Zeichen/s
 *
 * Plus Pause-Aufschlag (Aha-Moment bei Faustregel verarbeiten):
 *   +5s pro Inline-Baustein
 */

import { CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN } from "../content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren";

const ZEICHEN_PRO_S_C1 = 17;
const ZEICHEN_PRO_S_B1 = 12;
const PAUSE_AUFSCHLAG_S = 5;

interface BausteinZeit {
  stepId: string;
  title: string;
  zeichenC1: number;
  zeichenB1: number;
  sekundenC1: number;
  sekundenB1: number;
  sekundenC1Vollstaendig: number; // inkl. Spektrum + SonstBox
  sekundenB1Vollstaendig: number;
}

function zeichen(text: string | undefined): number {
  return text?.length ?? 0;
}

function analyse(): BausteinZeit[] {
  const steps = CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN.kernSteps.filter(
    (s) => s.stepType === "inlineWissen" && s.inlineWissen
  );

  return steps.map((s) => {
    const w = s.inlineWissen!;

    // Hauptteil = Story-Aufhänger + Kerntext + Faustregel
    const c1Haupt =
      zeichen(w.storyAufhaenger) +
      zeichen(w.kerntext) +
      zeichen(w.faustregel);
    const b1Haupt =
      zeichen(w.storyAufhaengerB1 || w.storyAufhaenger) +
      zeichen(w.kerntextB1 || w.kerntext) +
      zeichen(w.faustregelB1 || w.faustregel);

    // Vollständig = + Spektrum + SonstBox
    const spektrumZeichen = (w.spektrum || []).reduce(
      (sum, e) =>
        sum +
        zeichen(e.patientName) +
        zeichen(e.hauptfaktor) +
        zeichen(e.kurzbeschreibung),
      0
    );
    const sonstC1 = zeichen(w.sonstBox);
    const sonstB1 = zeichen(w.sonstBoxB1 || w.sonstBox);

    const c1Voll = c1Haupt + spektrumZeichen + sonstC1;
    const b1Voll = b1Haupt + spektrumZeichen + sonstB1;

    return {
      stepId: s.stepId,
      title: s.contentC1.title,
      zeichenC1: c1Haupt,
      zeichenB1: b1Haupt,
      sekundenC1: Math.round(c1Haupt / ZEICHEN_PRO_S_C1) + PAUSE_AUFSCHLAG_S,
      sekundenB1: Math.round(b1Haupt / ZEICHEN_PRO_S_B1) + PAUSE_AUFSCHLAG_S,
      sekundenC1Vollstaendig:
        Math.round(c1Voll / ZEICHEN_PRO_S_C1) + PAUSE_AUFSCHLAG_S,
      sekundenB1Vollstaendig:
        Math.round(b1Voll / ZEICHEN_PRO_S_B1) + PAUSE_AUFSCHLAG_S,
    };
  });
}

function fmt(s: number): string {
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function main() {
  const result = analyse();
  console.log(`\nInline-Wissens-Bausteine in Frau-M.-Sturz Phase 1\n`);
  console.log(`(C1 = 17 Zeichen/s, B1 = 12 Zeichen/s, +5s Pause-Aufschlag)\n`);
  console.log(
    `${"Step".padEnd(45)} ${"C1 Haupt".padStart(10)} ${"C1 voll".padStart(10)} ${"B1 Haupt".padStart(10)} ${"B1 voll".padStart(10)}`
  );
  console.log("─".repeat(90));
  for (const r of result) {
    const stepShort = r.title.slice(0, 43);
    console.log(
      `${stepShort.padEnd(45)} ${fmt(r.sekundenC1).padStart(10)} ${fmt(r.sekundenC1Vollstaendig).padStart(10)} ${fmt(r.sekundenB1).padStart(10)} ${fmt(r.sekundenB1Vollstaendig).padStart(10)}`
    );
  }
  console.log("─".repeat(90));

  const sumC1 = result.reduce((a, r) => a + r.sekundenC1, 0);
  const sumC1Voll = result.reduce((a, r) => a + r.sekundenC1Vollstaendig, 0);
  const sumB1 = result.reduce((a, r) => a + r.sekundenB1, 0);
  const sumB1Voll = result.reduce((a, r) => a + r.sekundenB1Vollstaendig, 0);

  console.log(
    `${"Summe".padEnd(45)} ${fmt(sumC1).padStart(10)} ${fmt(sumC1Voll).padStart(10)} ${fmt(sumB1).padStart(10)} ${fmt(sumB1Voll).padStart(10)}`
  );

  console.log(`\nLegende:`);
  console.log(`  Haupt = Story-Aufhänger + Kerntext + Faustregel`);
  console.log(`  voll  = + Spektrum + Sonst-Box (alles ausgeklappt gelesen)`);
  console.log(`\nVergleich Pilot-Versprechen "ca. 60 Sek":`);
  for (const r of result) {
    const status =
      r.sekundenC1 <= 70 ? "✅" : r.sekundenC1 <= 90 ? "🟡 grenzwertig" : "❌ ZU LANG";
    console.log(
      `  ${r.title.slice(0, 50).padEnd(50)} → ${fmt(r.sekundenC1)} C1 ${status}`
    );
  }
}

main();
