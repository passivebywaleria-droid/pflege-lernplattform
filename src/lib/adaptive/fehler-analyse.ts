// Fehler-Kategorisierung
// VISION.md: "Wenn ein Schüler falsch antwortet, fragt die KI sich: Warum?"

import type { StepAntwort } from "@/hooks/use-lern-fortschritt";

export type FehlerKategorie = "raten" | "konzept" | "sprache" | "verwechslung" | "fluechtig";

// --- Fehler-Analyse-Ergebnis ---

export interface FehlerAnalyse {
  kategorie: FehlerKategorie;
  konfidenz: number; // 0-1
  erklaerung: string; // Für den Schüler (Sandwich-Ermutigung)
}

// --- Fehler-Analyse-Texte pro Kategorie ---

const FEHLER_TEXTE: Record<FehlerKategorie, { erklaerung: string; konfidenz: number }> = {
  raten: {
    erklaerung: "Du hast sehr schnell geantwortet. Lies die Frage nochmal in Ruhe durch.",
    konfidenz: 0.8,
  },
  fluechtig: {
    erklaerung: "Fast richtig! Schau nochmal genau hin.",
    konfidenz: 0.6,
  },
  sprache: {
    erklaerung: "Der Fachbegriff war schwierig. Schau dir das Glossar an.",
    konfidenz: 0.7,
  },
  verwechslung: {
    erklaerung: "Du verwechselst hier zwei ähnliche Begriffe. Lass uns den Unterschied anschauen.",
    konfidenz: 0.5,
  },
  konzept: {
    erklaerung: "Das Thema scheint noch neu für dich zu sein. Kein Problem — wir erklären es nochmal anders.",
    konfidenz: 0.7,
  },
};

/**
 * Analysiert WARUM ein Schüler falsch geantwortet hat und gibt
 * eine FehlerAnalyse mit Kategorie, Konfidenz und Erklärungstext zurück.
 *
 * Wird von Step-Komponenten für Sandwich-Feedback genutzt.
 */
export function analysiereFehler(
  antwortZeitMs: number,
  gewaehlteAntwort: string,
  richtigeAntwort: string,
  optionen: string[],
  stepType: string,
  sprachLevel?: number,
  vorherigeAntworten?: StepAntwort[],
): FehlerAnalyse {
  // 1. Raten: Antwortzeit < 3s bei 3+ Optionen
  if (antwortZeitMs < 3000 && optionen.length >= 3 && RATEN_TYPEN.has(stepType)) {
    return { ...FEHLER_TEXTE.raten, kategorie: "raten" };
  }

  // 2. Sprache: Niedriger Sprachlevel + lange Überlegung
  if (sprachLevel !== undefined && sprachLevel <= 2 && antwortZeitMs > 15000) {
    return { ...FEHLER_TEXTE.sprache, kategorie: "sprache" };
  }

  // 3. Flüchtigkeitsfehler: Schnelle Antwort (< 5s), Antwort teilt Wortteile mit richtiger
  if (antwortZeitMs < 5000 && hatAehnlichkeit(gewaehlteAntwort, richtigeAntwort)) {
    return { ...FEHLER_TEXTE.fluechtig, kategorie: "fluechtig" };
  }

  // 4. Konzept: Lange Überlegung (> 20s) oder wiederholte Fehler im Thema
  if (antwortZeitMs > 20000) {
    return { ...FEHLER_TEXTE.konzept, kategorie: "konzept" };
  }

  // 5. Konzept: 2+ vorherige Fehler im selben Themenbereich
  if (vorherigeAntworten && vorherigeAntworten.filter((a) => a.correct === false).length >= 2) {
    return { ...FEHLER_TEXTE.konzept, kategorie: "konzept" };
  }

  // 6. Default: Verwechslung (mittlere Antwortzeit, hat überlegt aber falsch gewählt)
  return { ...FEHLER_TEXTE.verwechslung, kategorie: "verwechslung" };
}

/**
 * Prüft ob zwei Strings eine gewisse Ähnlichkeit haben
 * (gemeinsame Wortanfänge oder Teilstrings).
 */
function hatAehnlichkeit(a: string, b: string): boolean {
  const worteA = a.toLowerCase().split(/\s+/);
  const worteB = b.toLowerCase().split(/\s+/);
  // Mindestens ein gemeinsames Wort mit >= 4 Zeichen
  return worteA.some((wa) =>
    worteB.some((wb) => wa.length >= 4 && wb.length >= 4 && (wa.startsWith(wb.slice(0, 4)) || wb.startsWith(wa.slice(0, 4)))),
  );
}

// Step-Typen bei denen schnelle Antworten = Raten sein können
const RATEN_TYPEN = new Set(["mc", "truefalse", "swipe", "confidence", "fillin"]);

/**
 * Analysiert WARUM ein Schüler falsch geantwortet hat.
 *
 * 5 Kategorien (aus VISION.md):
 * - raten: Antwortzeit zu kurz (< 2s bei MC) → Thema nochmal erklären
 * - fluechtig: Schnelle Antwort, Antwort ähnlich der richtigen → Hinweis genauer lesen
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

  // Flüchtigkeitsfehler: Schnell aber nicht zu schnell (2-5s)
  if (
    RATEN_TYPEN.has(antwort.stepType) &&
    antwort.zeitMs >= 2000 &&
    antwort.zeitMs < 5000
  ) {
    return "fluechtig";
  }

  // Sprache: Schüler hat niedrigen Sprachlevel + Fachbegriff-lastiger Step
  if (sprachLevel <= 2 && antwort.zeitMs > 15000) {
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
