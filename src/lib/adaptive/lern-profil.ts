// Zwei-Achsen-Lernprofil
// VISION.md: "Achse 1: Sprachkompetenz, Achse 2: Pflegefachliches Wissen"

import type { StepAntwort, SchwachstellenKarte } from "@/hooks/use-lern-fortschritt";
import { zeitKonfidenz } from "./antwortzeit";

export interface LernAchsen {
  sprache: number;           // 1-5 (1=B1 schwach, 5=C1+ Muttersprachler)
  fachwissen: number;        // 1-5 (1=Anfänger, 5=Fortgeschritten)
  letzteBerechnung: string;  // ISO-String
}

/**
 * Berechnet die zwei Achsen aus den letzten Antworten.
 * Wird nach jeder Session neu berechnet.
 *
 * Sprach-Achse (1-5):
 *   - B1-Toggle-Nutzung (häufig = niedrig)
 *   - Fehlerquote bei Fachbegriff-Fragen
 *   - Antwortzeit bei Text-lastigen Steps
 *
 * Fachwissen-Achse (1-5):
 *   - Richtig-Quote gewichtet nach Bloom-Level
 *   - Antwortzeit-Konfidenz
 *   - Schwächenkarten-Anzahl
 */
export function berechneAchsen(
  antworten: StepAntwort[],
  schwaechen: SchwachstellenKarte[],
  b1ToggleCount: number,
  totalSteps: number,
): LernAchsen {
  if (antworten.length === 0) {
    return { sprache: 3, fachwissen: 3, letzteBerechnung: new Date().toISOString() };
  }

  // --- Sprach-Achse ---
  const b1Anteil = totalSteps > 0 ? b1ToggleCount / totalSteps : 0;
  // 0% B1-Nutzung → 5, 50%+ → 1
  const sprachVonToggle = Math.max(1, Math.min(5, 5 - b1Anteil * 8));

  // Fehlerquote bei Steps mit hohem Bloom (die sprachlich anspruchsvoller sind)
  const hochBloom = antworten.filter((a) => (a.bloomLevel ?? 3) >= 4);
  const hochBloomRichtig = hochBloom.filter((a) => a.correct === true).length;
  const hochBloomQuote = hochBloom.length > 0 ? hochBloomRichtig / hochBloom.length : 0.5;
  const sprachVonBloom = 1 + hochBloomQuote * 4; // 0% → 1, 100% → 5

  const sprache = Math.round(((sprachVonToggle * 0.6) + (sprachVonBloom * 0.4)) * 10) / 10;

  // --- Fachwissen-Achse ---
  // Gewichtete Richtig-Quote (höherer Bloom = mehr Gewicht)
  let gewichteteRichtig = 0;
  let gewichteteGesamt = 0;
  for (const a of antworten) {
    if (a.correct === null) continue; // Text/Reflexion ignorieren
    const gewicht = (a.bloomLevel ?? 2) / 3; // Bloom 1=0.33, Bloom 6=2.0
    gewichteteGesamt += gewicht;
    if (a.correct) gewichteteRichtig += gewicht;
  }
  const gewichteteQuote = gewichteteGesamt > 0 ? gewichteteRichtig / gewichteteGesamt : 0.5;

  // Konfidenz aus Antwortzeiten (schnell + richtig = hohes Fachwissen)
  const richtigeAntworten = antworten.filter((a) => a.correct === true);
  const durchschnittKonfidenz = richtigeAntworten.length > 0
    ? richtigeAntworten.reduce((sum, a) => sum + zeitKonfidenz(a.zeitMs, a.stepType), 0) / richtigeAntworten.length
    : 0.5;

  // Schwächenkarten-Malus (viele offene Schwächen = niedrigeres Fachwissen)
  const offeneSchwaechen = schwaechen.filter(
    (s) => new Date(s.naechsteWiederholung) <= new Date()
  ).length;
  const schwaechenMalus = Math.min(1, offeneSchwaechen * 0.1); // Max -1

  const fachwissen = Math.round(
    Math.max(1, Math.min(5,
      (1 + gewichteteQuote * 4) * 0.5 +
      (1 + durchschnittKonfidenz * 4) * 0.3 +
      (5 - schwaechenMalus * 5) * 0.2
    )) * 10
  ) / 10;

  return {
    sprache: Math.max(1, Math.min(5, sprache)),
    fachwissen: Math.max(1, Math.min(5, fachwissen)),
    letzteBerechnung: new Date().toISOString(),
  };
}

/**
 * Gibt eine textuelle Einschätzung der Achsen zurück.
 */
export function achsenBeschreibung(achsen: LernAchsen): { sprache: string; fachwissen: string } {
  const sprachLabels = ["", "B1 — braucht einfache Sprache", "B1-B2 — Fachsprache unsicher", "B2 — solide Basis", "B2-C1 — gute Fachsprache", "C1+ — Muttersprachler-Niveau"];
  const fachLabels = ["", "Anfänger — alles neu", "Grundwissen — Theorie lückenhaft", "Solide — kennt die Grundlagen", "Fortgeschritten — Praxiserfahrung", "Experte — kann Fälle lösen"];

  return {
    sprache: sprachLabels[Math.round(achsen.sprache)] ?? "",
    fachwissen: fachLabels[Math.round(achsen.fachwissen)] ?? "",
  };
}
