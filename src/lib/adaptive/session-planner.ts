// SessionPlanner — Evidenzbasierte Session-Level-Planung
// Carroll (1963): Lerngrad = Zeit aufgewendet / Zeit benötigt
// Karpicke & Roediger (2008): Testing Effect (3 Pings am Start)
// Springer (2023): Fast-Forward bei Overlearning

import type { LernProfil, LernAchsen, SessionFortschritt } from "@/hooks/use-lern-fortschritt";
import type { LektionManifest } from "../../../content/ce-05/_manifest";
import type { SessionNumber } from "../content-loader";
import {
  faelligeWiederholungen,
  kompetenzUebersicht,
  type KompetenzRegister,
  type KompetenzEintrag,
  type KompetenzStufe,
} from "./kompetenz-register";

// --- Typen ---

export interface RepetitionPing {
  lernzielId: string;
  kompetenzStufe: KompetenzStufe;
  faelligSeit: string; // ISO
}

export type EmpfehlungTyp =
  | "weiter"       // Angefangene Session fortsetzen
  | "neue-session" // Nächste Session in aktueller LE
  | "neue-le"      // Neue LE starten
  | "wiederholung" // Spaced Repetition
  | "challenge";   // Challenge für schnelle Schüler

export interface SessionEmpfehlung {
  typ: EmpfehlungTyp;
  leId: string;
  session: SessionNumber;
  grund: string;
  geschaetzteMinuten: number;
  prioritaet: number; // 1 = höchste
}

export interface FastForwardResult {
  skip: boolean;
  masteryQuote: number;
  grund: string;
}

// --- 1. Spaced-Repetition-Pings ---

/**
 * Findet die dringendsten Wiederholungs-Lernziele.
 * Testing Effect (Karpicke 2008): 3 Fragen am Session-Start
 * sind 2× effektiver als Erklärtext-Wiederholung.
 */
export function getRepetitionPings(
  register: KompetenzRegister | undefined,
  maxAnzahl = 3,
): RepetitionPing[] {
  if (!register) return [];

  const faellig = faelligeWiederholungen(register);
  return faellig.slice(0, maxAnzahl).map((eintrag) => ({
    lernzielId: eintrag.lernzielId,
    kompetenzStufe: eintrag.stufe,
    faelligSeit: eintrag.naechsteWiederholung,
  }));
}

/**
 * Zählt wie viele Wiederholungen insgesamt fällig sind.
 */
export function zaehleWiederholungen(register: KompetenzRegister | undefined): number {
  if (!register) return 0;
  return faelligeWiederholungen(register).length;
}

// --- 2. Session-Empfehlungen ---

/**
 * Gibt bis zu 3 priorisierte Empfehlungen zurück.
 *
 * Regel-Reihenfolge:
 * 1. Angefangene Session fortsetzen (höchste Prio)
 * 2. Spaced Repetition wenn ≥5 Lernziele fällig
 * 3. Nächste Session in aktueller LE
 * 4. Neue LE starten (wenn Voraussetzungen erfüllt)
 * 5. Challenge (wenn ≥80% gemeistert in aktueller LE)
 */
export function getSessionEmpfehlungen(
  profil: LernProfil,
  manifest: LektionManifest[],
): SessionEmpfehlung[] {
  const empfehlungen: SessionEmpfehlung[] = [];
  const achsen = profil.achsen ?? { sprache: 3, fachwissen: 3, letzteBerechnung: "" };

  // 1. Angefangene Session fortsetzen
  const angefangen = findeAngefangeneSession(profil);
  if (angefangen) {
    const le = manifest.find((m) => m.leId === angefangen.leId);
    empfehlungen.push({
      typ: "weiter",
      leId: angefangen.leId,
      session: angefangen.session,
      grund: `Weitermachen: ${le?.titleShort ?? angefangen.leId} · Session ${angefangen.session}`,
      geschaetzteMinuten: schaetzeRestdauer(angefangen.fortschritt, achsen),
      prioritaet: 1,
    });
  }

  // 2. Spaced Repetition wenn viele fällig
  const wiederholungsCount = zaehleWiederholungen(profil.kompetenzRegister);
  if (wiederholungsCount >= 5) {
    empfehlungen.push({
      typ: "wiederholung",
      leId: "",
      session: 1,
      grund: `${wiederholungsCount} Lernziele brauchen Auffrischung`,
      geschaetzteMinuten: Math.min(15, wiederholungsCount * 2),
      prioritaet: 2,
    });
  }

  // 3. Nächste Session in aktueller LE / Neue LE
  const naechste = findeNaechsteSession(profil, manifest);
  if (naechste) {
    const le = manifest.find((m) => m.leId === naechste.leId);
    empfehlungen.push({
      typ: naechste.session === 1 ? "neue-le" : "neue-session",
      leId: naechste.leId,
      session: naechste.session,
      grund: naechste.session === 1
        ? `Neue Lektion: ${le?.title ?? naechste.leId}`
        : `${le?.titleShort ?? naechste.leId} · Session ${naechste.session}`,
      geschaetzteMinuten: schaetzeSessionDauer(achsen, naechste.session, {
        gemeistert: 0,
        gesamt: le?.estimatedSteps ?? 20,
      }),
      prioritaet: naechste.session === 1 ? 4 : 3,
    });
  }

  // 4. Challenge für schnelle Schüler
  if (achsen.fachwissen >= 4 && empfehlungen.length < 3) {
    const challengeLe = findeChallengeLE(profil, manifest);
    if (challengeLe) {
      empfehlungen.push({
        typ: "challenge",
        leId: challengeLe.leId,
        session: 3,
        grund: `Challenge: ${challengeLe.titleShort} — teste dein Wissen!`,
        geschaetzteMinuten: 15,
        prioritaet: 5,
      });
    }
  }

  return empfehlungen
    .sort((a, b) => a.prioritaet - b.prioritaet)
    .slice(0, 3);
}

// --- 3. Zeitschätzung ---

/**
 * Schätzt Minuten für eine Session basierend auf Schüler-Profil.
 *
 * Carroll's Modell: Zeit benötigt = f(Aptitude, Sprachkompetenz, Vorwissen)
 *
 * Basis: 25 Min (Durchschnitt)
 * Sprachfaktor: 1.0 (C1) bis 1.3 (B1) — +30% bei B1
 * Fachwissenfaktor: 0.7 (Experte) bis 1.2 (Anfänger)
 * Session 3 (Transfer) ist tendenziell länger als Session 1 (Einstieg)
 */
export function schaetzeSessionDauer(
  achsen: LernAchsen,
  sessionNr: SessionNumber,
  leKompetenz: { gemeistert: number; gesamt: number },
): number {
  const BASIS_MINUTEN = 25;

  // Sprachfaktor: Achse 1 (5=C1+) → 1.0, Achse 1 (1=B1) → 1.3
  const sprachFaktor = 1.0 + (5 - achsen.sprache) * 0.075;

  // Fachwissenfaktor: Achse 5 → 0.7, Achse 1 → 1.2
  const fachwissenFaktor = 0.7 + (5 - achsen.fachwissen) * 0.125;

  // Mastery-Rabatt: Wenn viel schon gemeistert, geht es schneller
  const masteryQuote = leKompetenz.gesamt > 0
    ? leKompetenz.gemeistert / leKompetenz.gesamt
    : 0;
  const masteryRabatt = 1 - masteryQuote * 0.3; // Max 30% schneller

  // Session-Faktor: S1=0.9, S2=1.0, S3=1.1 (Transfer dauert länger)
  const sessionFaktor = sessionNr === 1 ? 0.9 : sessionNr === 2 ? 1.0 : 1.1;

  const geschaetzt = BASIS_MINUTEN * sprachFaktor * fachwissenFaktor * masteryRabatt * sessionFaktor;

  // Minimum 10, Maximum 45 Minuten
  return Math.round(Math.max(10, Math.min(45, geschaetzt)));
}

// --- 4. Fast-Forward-Erkennung ---

/**
 * Prüft ob ein Schüler eine Session überspringen kann.
 *
 * Springer (2023): Systeme die Overlearning überspringen
 * sind effizienter ohne Qualitätseinbußen.
 *
 * Bedingung: ≥80% der Lernziele dieser LE sind "sicher" oder "gemeistert".
 * Session 3 (Transfer) kann NICHT übersprungen werden (immer Fallarbeit).
 */
export function kannSessionUeberspringen(
  register: KompetenzRegister | undefined,
  leId: string,
  session: SessionNumber,
): FastForwardResult {
  // Session 3 (Transfer) nie überspringen — Fallarbeit ist immer wertvoll
  if (session === 3) {
    return { skip: false, masteryQuote: 0, grund: "Transfer-Sessions werden nicht übersprungen" };
  }

  if (!register) {
    return { skip: false, masteryQuote: 0, grund: "Kein Kompetenz-Register vorhanden" };
  }

  // Lernziel-Prefix für diese LE: z.B. "ce05-le03"
  const lePrefix = `ce05-${leId.replace(/-/g, "").replace(/le(\d+).*/, "le$1")}`;
  const uebersicht = kompetenzUebersicht(register, lePrefix);

  if (uebersicht.gesamt === 0) {
    return { skip: false, masteryQuote: 0, grund: "Noch keine Lernziele für diese LE bekannt" };
  }

  const masteryQuote = (uebersicht.gemeistert + uebersicht.sicher) / uebersicht.gesamt;

  if (masteryQuote >= 0.8) {
    return {
      skip: true,
      masteryQuote: Math.round(masteryQuote * 100),
      grund: `${Math.round(masteryQuote * 100)}% bereits sicher — du kannst diese Session überspringen`,
    };
  }

  return {
    skip: false,
    masteryQuote: Math.round(masteryQuote * 100),
    grund: `Erst ${Math.round(masteryQuote * 100)}% sicher — weiter üben empfohlen`,
  };
}

// --- Hilfsfunktionen ---

interface AngefangeneSession {
  leId: string;
  session: SessionNumber;
  fortschritt: SessionFortschritt;
}

/**
 * Findet die zuletzt angefangene, nicht abgeschlossene Session.
 */
function findeAngefangeneSession(profil: LernProfil): AngefangeneSession | null {
  let latest: AngefangeneSession | null = null;

  for (const [leId, le] of Object.entries(profil.fortschritte)) {
    for (const [sessStr, data] of Object.entries(le.sessions)) {
      const sess = parseInt(sessStr) as SessionNumber;
      if (
        data.currentStep > 0 &&
        data.currentStep < data.totalSteps - 1 &&
        (!latest || data.updatedAt > latest.fortschritt.updatedAt)
      ) {
        latest = { leId, session: sess, fortschritt: data };
      }
    }
  }

  return latest;
}

/**
 * Schätzt die Restdauer einer angefangenen Session.
 */
function schaetzeRestdauer(fortschritt: SessionFortschritt, achsen: LernAchsen): number {
  const verbleibend = fortschritt.totalSteps - fortschritt.currentStep;
  const anteil = verbleibend / fortschritt.totalSteps;
  // Durchschnittlich 25 Min pro Session, skaliert nach Profil
  const volleDauer = schaetzeSessionDauer(achsen, 1, { gemeistert: 0, gesamt: fortschritt.totalSteps });
  return Math.round(volleDauer * anteil);
}

/**
 * Findet die nächste noch nicht gestartete Session.
 * Reihenfolge: Erst aktuelle LE abschließen, dann nächste LE im Manifest.
 */
function findeNaechsteSession(
  profil: LernProfil,
  manifest: LektionManifest[],
): { leId: string; session: SessionNumber } | null {
  // Sortiert nach order
  const sortiert = [...manifest].sort((a, b) => a.order - b.order);

  for (const le of sortiert) {
    // Nur LEs mit Content (status "fertig" oder "entwurf")
    if (le.status === "geplant") continue;

    const fortschritt = profil.fortschritte[le.leId];
    const sessions: SessionNumber[] = [1, 2, 3];

    for (const sess of sessions) {
      const sessionData = fortschritt?.sessions[sess];

      // Session noch nicht gestartet
      if (!sessionData) {
        // Voraussetzung: Vorherige Session muss abgeschlossen sein
        if (sess > 1) {
          const vorherigeData = fortschritt?.sessions[sess - 1];
          if (!vorherigeData || vorherigeData.currentStep < vorherigeData.totalSteps - 1) {
            break; // Vorherige Session nicht fertig → diese LE erstmal abschließen
          }
        }

        // Voraussetzungs-LEs prüfen
        if (sess === 1 && le.voraussetzungen.length > 0) {
          const alleVoraussetzungenErfuellt = le.voraussetzungen.every((vorId) => {
            const vorFortschritt = profil.fortschritte[vorId];
            return vorFortschritt?.abgeschlossen;
          });
          if (!alleVoraussetzungenErfuellt) continue;
        }

        return { leId: le.leId, session: sess };
      }

      // Session gestartet aber nicht fertig → wird von findeAngefangeneSession() behandelt
      if (sessionData.currentStep < sessionData.totalSteps - 1) {
        break;
      }

      // Session fertig → nächste Session prüfen
    }
  }

  return null;
}

/**
 * Findet eine LE für Challenge-Modus (schnelle Schüler).
 * Wählt eine LE wo der Schüler ≥60% sicher ist aber noch nicht alles gemeistert hat.
 */
function findeChallengeLE(
  profil: LernProfil,
  manifest: LektionManifest[],
): LektionManifest | null {
  if (!profil.kompetenzRegister) return null;

  for (const le of manifest) {
    if (le.pruefungsrelevanz !== "hoch") continue;

    const lePrefix = `ce05-${le.leId.replace(/-/g, "").replace(/le(\d+).*/, "le$1")}`;
    const uebersicht = kompetenzUebersicht(profil.kompetenzRegister, lePrefix);

    if (uebersicht.gesamt === 0) continue;

    const sicherQuote = (uebersicht.gemeistert + uebersicht.sicher) / uebersicht.gesamt;
    if (sicherQuote >= 0.6 && sicherQuote < 1.0) {
      return le;
    }
  }

  return null;
}
