// Fehler-Kategorisierung
// VISION.md: "Wenn ein Schüler falsch antwortet, fragt die KI sich: Warum?"

import type { StepAntwort } from "@/hooks/use-lern-fortschritt";

export type FehlerKategorie = "raten" | "konzept" | "sprache" | "verwechslung";

// Step-Typen bei denen schnelle Antworten = Raten sein können
const RATEN_TYPEN = new Set(["mc", "truefalse", "swipe", "confidence", "fillin"]);

/**
 * Analysiert WARUM ein Schüler falsch geantwortet hat.
 *
 * 4 Kategorien (aus VISION.md):
 * - raten: Antwortzeit zu kurz (< 2s bei MC) → Thema nochmal erklären
 * - sprache: Schüler versteht Fachbegriffe nicht → einfachere Sprache
 * - verwechslung: Plausible aber falsche Antwort → Unterschied erklären
 * - konzept: Wiederholter Fehler im Thema → anderen Erklärungsweg
 */
export function kategorisiereFehler(
  antwort: StepAntwort,
  vorherigeAntworten: StepAntwort[],
  sprachLevel: number,
): FehlerKategorie {
  // Raten: Zu schnell bei Multiple-Choice-artigen Typen
  if (
    RATEN_TYPEN.has(antwort.stepType) &&
    antwort.zeitMs < 2000
  ) {
    return "raten";
  }

  // Sprache: Schüler hat niedrigen Sprachlevel + Fachbegriff-lastiger Step
  if (sprachLevel <= 2 && antwort.zeitMs > 20000) {
    return "sprache";
  }

  // Konzept: Gleicher Kompetenzbereich wurde schon 2+ mal falsch beantwortet
  const gleicheThemaFehler = vorherigeAntworten.filter(
    (a) => a.correct === false && !a.stepId.includes("-retry")
  );
  if (gleicheThemaFehler.length >= 2) {
    return "konzept";
  }

  // Verwechslung: Mittlere Antwortzeit (hat überlegt, aber falsch)
  if (antwort.zeitMs >= 5000 && antwort.zeitMs <= 25000) {
    return "verwechslung";
  }

  // Default: Konzeptproblem
  return "konzept";
}

/**
 * Zählt wie oft ein Schüler beim gleichen Lernziel/Thema falsch lag.
 */
export function zaehleThemaFehler(
  antworten: StepAntwort[],
  aktuellerStepId: string,
): number {
  // Prefix-Matching: s1-05 und s1-05-retry gehören zusammen
  const prefix = aktuellerStepId.replace(/-retry$/, "").slice(0, 4);
  return antworten.filter(
    (a) => a.correct === false && a.stepId.startsWith(prefix)
  ).length;
}
