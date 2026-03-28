// KompetenzRegister — Thema-basiertes Mastery-Tracking
// VISION.md: "Die Plattform entscheidet autonom wann ein Thema als bestanden gilt"
// Recherche: Khan Academy (Attempted→Mastered) + Antwortzeit-Signal-Matrix

import type { StepAntwort } from "@/hooks/use-lern-fortschritt";
import { klassifiziereZeit, type ZeitKlasse } from "./antwortzeit";

// --- Typen ---

/** Khan-Academy-inspiriert: 5 Stufen */
export type KompetenzStufe =
  | "unbekannt"   // Noch nie bearbeitet
  | "versucht"    // Mind. 1 Antwort, aber noch nicht verstanden
  | "vertraut"    // 1× richtig (kein Raten)
  | "sicher"      // 2× richtig in Folge + Antwortzeit ≤ "sicher"
  | "gemeistert"; // 2× mehr richtig + mind. 1× bei Bloom 3+

export interface KompetenzEintrag {
  lernzielId: string;             // z.B. "ce05-le03-ra-definition"
  stufe: KompetenzStufe;
  richtigInFolge: number;         // Konsekutiv richtige Antworten
  gesamtVersuche: number;
  gesamtRichtig: number;
  letzteAntwort: string;          // ISO-Timestamp
  naechsteWiederholung: string;   // ISO-Timestamp (Spaced Repetition)
  bloomMax: number;               // Höchstes korrekt beantwortetes Bloom-Level
}

/** Map: lernzielId → KompetenzEintrag */
export type KompetenzRegister = Record<string, KompetenzEintrag>;

// --- Spaced-Repetition-Intervalle (Tage) ---

const WIEDERHOLUNG_TAGE: Record<KompetenzStufe, number> = {
  unbekannt: 0,     // Sofort
  versucht: 0,      // Gleiche Session
  vertraut: 1,      // Morgen
  sicher: 4,        // In 4 Tagen
  gemeistert: 14,   // In 2 Wochen
};

// --- Kern-Logik ---

/**
 * Berechnet die neue Kompetenz-Stufe nach einer Antwort.
 * Basiert auf: Richtigkeit + Antwortzeit + Bloom-Level
 */
export function berechneNeueStufe(
  eintrag: KompetenzEintrag,
  antwort: StepAntwort,
): KompetenzStufe {
  const zeitKlasse = klassifiziereZeit(antwort.zeitMs, antwort.stepType);

  // Geraten → zählt nicht, Stufe bleibt gleich
  if (zeitKlasse === "geraten") {
    return eintrag.stufe;
  }

  // Keine bewertbare Antwort (Text, Reflexion)
  if (antwort.correct === null) {
    return eintrag.stufe;
  }

  // --- Richtig ---
  if (antwort.correct) {
    const neueRichtigInFolge = eintrag.richtigInFolge + 1;
    const schnell = zeitKlasse === "blitz" || zeitKlasse === "sicher";
    const bloomHoch = (antwort.bloomLevel ?? 1) >= 3;

    switch (eintrag.stufe) {
      case "unbekannt":
      case "versucht":
        // 1× richtig (kein Raten) → vertraut
        return "vertraut";

      case "vertraut":
        // 2× richtig in Folge + schnell → sicher
        if (neueRichtigInFolge >= 2 && schnell) return "sicher";
        return "vertraut";

      case "sicher":
        // 2× mehr richtig in Folge + mind. 1× Bloom 3+ → gemeistert
        if (neueRichtigInFolge >= 2 && (bloomHoch || eintrag.bloomMax >= 3)) {
          return "gemeistert";
        }
        return "sicher";

      case "gemeistert":
        return "gemeistert";
    }
  }

  // --- Falsch ---
  // 2× falsch in Folge → 1 Stufe runter
  // Nur "versucht" oder höher können absteigen
  const neueFalschInFolge = eintrag.richtigInFolge < 0
    ? Math.abs(eintrag.richtigInFolge) + 1
    : 1;

  if (neueFalschInFolge >= 2) {
    switch (eintrag.stufe) {
      case "gemeistert": return "sicher";
      case "sicher": return "vertraut";
      case "vertraut": return "versucht";
      default: return "versucht";
    }
  }

  // 1× falsch → Stufe bleibt, aber richtigInFolge wird negativ
  return eintrag.stufe;
}

/**
 * Aktualisiert einen KompetenzEintrag nach einer Antwort.
 * Gibt den neuen Eintrag zurück (immutable).
 */
export function updateKompetenz(
  eintrag: KompetenzEintrag | undefined,
  lernzielId: string,
  antwort: StepAntwort,
): KompetenzEintrag {
  const jetzt = new Date().toISOString();
  const zeitKlasse = klassifiziereZeit(antwort.zeitMs, antwort.stepType);

  // Neuer Eintrag wenn noch nicht vorhanden
  const basis: KompetenzEintrag = eintrag ?? {
    lernzielId,
    stufe: "unbekannt",
    richtigInFolge: 0,
    gesamtVersuche: 0,
    gesamtRichtig: 0,
    letzteAntwort: jetzt,
    naechsteWiederholung: jetzt,
    bloomMax: 0,
  };

  // Geraten oder nicht bewertbar → nur Versuchszähler erhöhen
  if (zeitKlasse === "geraten" || antwort.correct === null) {
    return {
      ...basis,
      gesamtVersuche: basis.gesamtVersuche + (antwort.correct !== null ? 1 : 0),
      letzteAntwort: jetzt,
    };
  }

  const richtigInFolge = antwort.correct
    ? Math.max(0, basis.richtigInFolge) + 1
    : -1 * (basis.richtigInFolge < 0 ? Math.abs(basis.richtigInFolge) + 1 : 1);

  const bloomMax = antwort.correct
    ? Math.max(basis.bloomMax, antwort.bloomLevel ?? 1)
    : basis.bloomMax;

  const neueStufe = berechneNeueStufe(
    { ...basis, richtigInFolge },
    antwort,
  );

  const intervallTage = WIEDERHOLUNG_TAGE[neueStufe];
  const naechsteWiederholung = new Date(
    Date.now() + intervallTage * 24 * 60 * 60 * 1000,
  ).toISOString();

  return {
    lernzielId,
    stufe: neueStufe,
    richtigInFolge,
    gesamtVersuche: basis.gesamtVersuche + 1,
    gesamtRichtig: basis.gesamtRichtig + (antwort.correct ? 1 : 0),
    letzteAntwort: jetzt,
    naechsteWiederholung,
    bloomMax,
  };
}

// --- Abfrage-Funktionen ---

/**
 * Ist ein Lernziel gemeistert? (Kein Wiederholungsbedarf)
 */
export function istGemeistert(register: KompetenzRegister, lernzielId: string): boolean {
  return register[lernzielId]?.stufe === "gemeistert";
}

/**
 * Braucht ein Lernziel Wiederholung? (Spaced Repetition fällig)
 */
export function brauchtWiederholung(register: KompetenzRegister, lernzielId: string): boolean {
  const eintrag = register[lernzielId];
  if (!eintrag) return false;
  if (eintrag.stufe === "unbekannt") return false;
  return new Date(eintrag.naechsteWiederholung) <= new Date();
}

/**
 * Gibt alle Lernziele zurück die Wiederholung brauchen, sortiert nach Dringlichkeit.
 */
export function faelligeWiederholungen(register: KompetenzRegister): KompetenzEintrag[] {
  const jetzt = new Date();
  return Object.values(register)
    .filter((e) => e.stufe !== "unbekannt" && new Date(e.naechsteWiederholung) <= jetzt)
    .sort((a, b) => {
      // Niedrigste Stufe zuerst, dann älteste zuerst
      const stufenPrio: Record<KompetenzStufe, number> = {
        unbekannt: 5, versucht: 1, vertraut: 2, sicher: 3, gemeistert: 4,
      };
      const diff = stufenPrio[a.stufe] - stufenPrio[b.stufe];
      if (diff !== 0) return diff;
      return new Date(a.naechsteWiederholung).getTime() - new Date(b.naechsteWiederholung).getTime();
    });
}

/**
 * Kompetenz-Zusammenfassung für eine LE (z.B. für Dashboard).
 */
export function kompetenzUebersicht(
  register: KompetenzRegister,
  lePrefix: string,
): { gesamt: number; gemeistert: number; sicher: number; vertraut: number; versucht: number; unbekannt: number } {
  const eintraege = Object.values(register).filter((e) => e.lernzielId.startsWith(lePrefix));
  return {
    gesamt: eintraege.length,
    gemeistert: eintraege.filter((e) => e.stufe === "gemeistert").length,
    sicher: eintraege.filter((e) => e.stufe === "sicher").length,
    vertraut: eintraege.filter((e) => e.stufe === "vertraut").length,
    versucht: eintraege.filter((e) => e.stufe === "versucht").length,
    unbekannt: eintraege.filter((e) => e.stufe === "unbekannt").length,
  };
}

/**
 * Leitet lernzielId aus einem Step ab.
 * Nutzt step.lernziel wenn vorhanden, sonst leId + stepId als Fallback.
 */
export function lernzielVonStep(stepId: string, lernziel?: string, leId?: string): string {
  if (lernziel) return lernziel;
  // Fallback: "ce05-le03-s1-step01" → "ce05-le03" (LE-Level)
  if (leId) return leId;
  // Letzter Fallback: stepId selbst
  return stepId;
}
