// Strategie-Auswahl-Engine
// VISION.md: "Die KI hat mehrere Wege zum selben Lernziel.
// Wenn Weg 1 nicht funktioniert, nimmt sie Weg 2."

import type { FehlerKategorie } from "./fehler-analyse";

// --- Typen ---

export type StrategieTyp =
  | "einfach"       // Schritt für Schritt, langsam
  | "analogie"      // Vergleich mit Alltag
  | "vergleich"     // Unterschied zwischen Konzepten
  | "schrittweise"  // Kernaussage zuerst, dann Details
  | "fallbeispiel"  // Konkreter Patient statt abstrakte Theorie
  | "bild";         // Visuell, Glossar-Begriffe hervorheben

export interface StrategiePraeferenzen {
  effektiv: Partial<Record<StrategieTyp, number>>;    // +1 bei Retry korrekt
  ineffektiv: Partial<Record<StrategieTyp, number>>;  // +1 bei Retry falsch
}

// --- Strategie-Map: Fehler-Kategorie → priorisierte Strategien ---

const STRATEGIE_MAP: Record<FehlerKategorie, StrategieTyp[]> = {
  raten:        ["schrittweise", "einfach", "bild"],
  sprache:      ["einfach", "bild", "analogie"],
  verwechslung: ["vergleich", "analogie", "fallbeispiel"],
  konzept:      ["analogie", "fallbeispiel", "vergleich"],
  fluechtig:    ["schrittweise", "einfach"],
};

// --- Strategie wählen ---

/**
 * Wählt die beste Strategie für einen Fehler.
 *
 * Logik:
 * 1. Prüfe Schüler-Präferenzen (Erfolgs-Rate pro Strategie)
 * 2. Filtere bereits versuchte Strategien raus → nie 2× dieselbe
 * 3. Bei sprachLevel < 2.5 → "einfach" priorisieren
 * 4. Fallback: Erste verfügbare aus der Map
 */
export function waehleStrategie(
  fehlerKategorie: FehlerKategorie,
  praeferenzen: StrategiePraeferenzen | undefined,
  bereitsVersucht: StrategieTyp[],
  sprachLevel: number,
): StrategieTyp {
  const kandidaten = STRATEGIE_MAP[fehlerKategorie] ?? STRATEGIE_MAP.konzept;

  // Filtere bereits versuchte
  const verfuegbar = kandidaten.filter((s) => !bereitsVersucht.includes(s));

  // Wenn alle verbraucht: Reset, aber sortiere nach Effektivität
  const pool = verfuegbar.length > 0 ? verfuegbar : kandidaten;

  // Bei niedrigem Sprachlevel: "einfach" priorisieren
  if (sprachLevel < 2.5 && pool.includes("einfach")) {
    // Nur wenn "einfach" noch nicht versucht wurde
    if (!bereitsVersucht.includes("einfach")) {
      return "einfach";
    }
  }

  // Schüler-Präferenzen: Sortiere nach Erfolgsrate
  if (praeferenzen) {
    const mitScore = pool.map((s) => {
      const eff = praeferenzen.effektiv[s] ?? 0;
      const ineff = praeferenzen.ineffektiv[s] ?? 0;
      const total = eff + ineff;
      const score = total > 0 ? eff / total : 0.5; // 50% default
      return { strategie: s, score };
    });
    mitScore.sort((a, b) => b.score - a.score);
    return mitScore[0].strategie;
  }

  // Default: Erste aus der Map
  return pool[0];
}

/**
 * Aktualisiert die Strategie-Präferenzen nach einem Retry.
 * Wird aufgerufen wenn ein Schüler nach einer Strategie-Hilfe
 * eine Frage nochmal beantwortet.
 */
export function updateStrategiePraeferenz(
  praeferenzen: StrategiePraeferenzen | undefined,
  strategie: StrategieTyp,
  effektiv: boolean,
): StrategiePraeferenzen {
  const base: StrategiePraeferenzen = praeferenzen ?? {
    effektiv: {},
    ineffektiv: {},
  };

  if (effektiv) {
    return {
      ...base,
      effektiv: {
        ...base.effektiv,
        [strategie]: (base.effektiv[strategie] ?? 0) + 1,
      },
    };
  }

  return {
    ...base,
    ineffektiv: {
      ...base.ineffektiv,
      [strategie]: (base.ineffektiv[strategie] ?? 0) + 1,
    },
  };
}
