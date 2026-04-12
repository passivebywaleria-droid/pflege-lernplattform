/**
 * Wochenplan-Generator
 *
 * Erstellt einen 5-Tage-Plan (Mo-Fr) basierend auf dem Lernfortschritt.
 * Regeln aus VISION.md:
 * - Mo: Neues Thema starten
 * - Di: Vertiefen
 * - Mi: Neues Thema (Abwechslung / Themenwechsel)
 * - Do: Vertiefen
 * - Fr: Wiederholung der ganzen Woche (Spaced Repetition)
 */

import type { LeManifestEntry } from "../../content/content-loader";
import type { LernProfil } from "@/hooks/use-lern-fortschritt";

// --- Types ---

export type Wochentag = "Mo" | "Di" | "Mi" | "Do" | "Fr";

export interface WochenplanTag {
  tag: Wochentag;
  thema: string;
  ceId: string;
  leId: string;
  typ: "neu" | "vertiefung" | "wiederholung";
  sessions: number;
  fortschrittProzent: number;
}

export interface Wochenplan {
  kalenderwoche: number;
  jahr: number;
  tage: WochenplanTag[];
  erstelltAm: string;
}

// --- Helpers ---

function getKalenderwoche(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/**
 * Bestimmt welche LEs der Schüler als nächstes bearbeiten sollte.
 * Priorisierung:
 * 1. Angefangene aber nicht fertige LEs
 * 2. Nächste geplante LEs (nach Reihenfolge)
 * 3. LEs die wiederholt werden sollten
 */
function bestimmeNaechsteLEs(
  fortschritt: LernProfil | null,
  alleLektionen: LeManifestEntry[],
): { aktuelle: LeManifestEntry[]; wiederholung: LeManifestEntry[] } {
  const fertigeLEs = new Set<string>();
  const angefangeneLEs: string[] = [];

  if (fortschritt) {
    for (const [leId, le] of Object.entries(fortschritt.fortschritte)) {
      if (le.abgeschlossen) {
        fertigeLEs.add(leId);
      } else if (Object.keys(le.sessions).length > 0) {
        angefangeneLEs.push(leId);
      }
    }
  }

  // Verfügbare LEs (die Content haben)
  const verfuegbar = alleLektionen.filter((le) => le.status === "geprueft" || le.status === "steps");

  // Angefangene zuerst
  const angefangen = verfuegbar.filter((le) => angefangeneLEs.includes(le.leId));

  // Neue (noch nicht angefangen und nicht fertig)
  const neue = verfuegbar.filter(
    (le) => !fertigeLEs.has(le.leId) && !angefangeneLEs.includes(le.leId),
  );

  // Wiederholung: Fertige LEs mit niedrigem Score
  const wiederholung = verfuegbar.filter((le) => {
    if (!fertigeLEs.has(le.leId) || !fortschritt) return false;
    const leFort = fortschritt.fortschritte[le.leId];
    if (!leFort) return false;
    // Wiederholung wenn durchschnittlicher Score < 70%
    const sessions = Object.values(leFort.sessions);
    if (sessions.length === 0) return false;
    const avgScore = sessions.reduce((sum, s) => sum + (s.totalQuestions > 0 ? s.score / s.totalQuestions : 0), 0) / sessions.length;
    return avgScore < 0.7;
  });

  return {
    aktuelle: [...angefangen, ...neue],
    wiederholung,
  };
}

/**
 * Berechnet den Fortschritt einer LE in Prozent.
 */
function berechneLeForstschritt(leId: string, fortschritt: LernProfil | null): number {
  if (!fortschritt) return 0;
  const le = fortschritt.fortschritte[leId];
  if (!le) return 0;
  if (le.abgeschlossen) return 100;

  const sessions = Object.values(le.sessions);
  if (sessions.length === 0) return 0;

  // Durchschnittlicher Fortschritt über alle Sessions
  const totalProgress = sessions.reduce((sum, s) => {
    return sum + (s.totalSteps > 0 ? (s.currentStep / s.totalSteps) * 100 : 0);
  }, 0);

  return Math.round(totalProgress / Math.max(sessions.length, 1));
}

// --- Generator ---

export function generiereWochenplan(
  fortschritt: LernProfil | null,
  alleLektionen: LeManifestEntry[],
): Wochenplan {
  const jetzt = new Date();
  const { aktuelle, wiederholung } = bestimmeNaechsteLEs(fortschritt, alleLektionen);

  // Thema 1: Erstes aktuelles Thema (oder erstes verfügbares)
  const thema1 = aktuelle[0] ?? alleLektionen.find((le) => le.status === "geprueft" || le.status === "steps") ?? alleLektionen[0];

  // Thema 2: Zweites aktuelles Thema (anderes CE für Abwechslung)
  const thema2 = aktuelle.find((le) => le.ceId !== thema1?.ceId) ?? aktuelle[1] ?? thema1;

  // Wiederholungsthemen für Freitag
  const wiederholungsThemen = wiederholung.length > 0 ? wiederholung : (thema1 ? [thema1] : []);

  const tage: WochenplanTag[] = [];

  // Montag: Neues Thema 1
  if (thema1) {
    tage.push({
      tag: "Mo",
      thema: thema1.title,
      ceId: thema1.ceId,
      leId: thema1.leId,
      typ: "neu",
      sessions: 2,
      fortschrittProzent: berechneLeForstschritt(thema1.leId, fortschritt),
    });
  }

  // Dienstag: Vertiefung Thema 1
  if (thema1) {
    tage.push({
      tag: "Di",
      thema: thema1.title,
      ceId: thema1.ceId,
      leId: thema1.leId,
      typ: "vertiefung",
      sessions: 2,
      fortschrittProzent: berechneLeForstschritt(thema1.leId, fortschritt),
    });
  }

  // Mittwoch: Neues Thema 2 (Abwechslung)
  if (thema2) {
    tage.push({
      tag: "Mi",
      thema: thema2.title,
      ceId: thema2.ceId,
      leId: thema2.leId,
      typ: "neu",
      sessions: 2,
      fortschrittProzent: berechneLeForstschritt(thema2.leId, fortschritt),
    });
  }

  // Donnerstag: Vertiefung Thema 2
  if (thema2) {
    tage.push({
      tag: "Do",
      thema: thema2.title,
      ceId: thema2.ceId,
      leId: thema2.leId,
      typ: "vertiefung",
      sessions: 2,
      fortschrittProzent: berechneLeForstschritt(thema2.leId, fortschritt),
    });
  }

  // Freitag: Wiederholung der Woche
  const freitagThema = wiederholungsThemen[0] ?? thema1;
  if (freitagThema) {
    tage.push({
      tag: "Fr",
      thema: `Wiederholung: ${freitagThema.title}`,
      ceId: freitagThema.ceId,
      leId: freitagThema.leId,
      typ: "wiederholung",
      sessions: 2,
      fortschrittProzent: berechneLeForstschritt(freitagThema.leId, fortschritt),
    });
  }

  return {
    kalenderwoche: getKalenderwoche(jetzt),
    jahr: jetzt.getFullYear(),
    tage,
    erstelltAm: jetzt.toISOString(),
  };
}

/**
 * Gibt den aktuellen Wochentag als Index zurück (0=Mo, 4=Fr).
 * Am Wochenende wird -1 zurückgegeben.
 */
export function getAktuellerWochentagIndex(): number {
  const tag = new Date().getDay(); // 0=So, 1=Mo, ..., 6=Sa
  if (tag === 0 || tag === 6) return -1;
  return tag - 1; // Mo=0, Di=1, Mi=2, Do=3, Fr=4
}
