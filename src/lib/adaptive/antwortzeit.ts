// Antwortzeit-Klassifikation
// VISION.md: "Die Zeit ist ein ehrlicheres Signal als die Antwort selbst"

export type ZeitKlasse = "blitz" | "sicher" | "normal" | "unsicher" | "geraten";

// Step-Typen die schnelle Antworten erlauben (wenige Optionen)
const SCHNELLE_TYPEN = new Set([
  "mc", "truefalse", "swipe", "confidence", "fillin", "timer",
]);

// Step-Typen die naturgemäß länger dauern
const LANGSAME_TYPEN = new Set([
  "freetext", "reflection", "dialog", "crossword", "memory",
  "branching", "highlight", "categorize",
]);

/**
 * Klassifiziert die Antwortzeit basierend auf Step-Typ.
 *
 * Schnelle Typen (MC, TF, Swipe):
 *   < 2s → geraten (bei MC mit 4 Optionen = Zufall)
 *   2-5s → blitz (weiß es sofort)
 *   5-15s → sicher (überlegt kurz)
 *   15-30s → normal
 *   > 30s → unsicher
 *
 * Langsame Typen (Freetext, Dialog, Crossword):
 *   Schwellenwerte verdoppelt
 */
export function klassifiziereZeit(zeitMs: number, stepType: string): ZeitKlasse {
  const faktor = LANGSAME_TYPEN.has(stepType) ? 2 : 1;

  if (SCHNELLE_TYPEN.has(stepType) && zeitMs < 2000) {
    return "geraten";
  }

  if (zeitMs < 5000 * faktor) return "blitz";
  if (zeitMs < 15000 * faktor) return "sicher";
  if (zeitMs < 30000 * faktor) return "normal";
  return "unsicher";
}

/**
 * Berechnet einen Konfidenz-Score (0-1) aus der Antwortzeit.
 * Hoher Score = schnell und sicher. Niedriger Score = langsam oder geraten.
 */
export function zeitKonfidenz(zeitMs: number, stepType: string): number {
  const klasse = klassifiziereZeit(zeitMs, stepType);
  switch (klasse) {
    case "blitz": return 1.0;
    case "sicher": return 0.8;
    case "normal": return 0.5;
    case "unsicher": return 0.3;
    case "geraten": return 0.1;
  }
}
