// Content-Loader v2: Lädt Lektionsdaten dynamisch für alle 55 LEs
// CE-übergreifend, variable Session-Anzahl, Track-Filter

import type { ContentStep, LektionData, LektionMetadata, GlossarEntry, LernTrack, KarteikarteVorlage } from "./_types";
import { calculateXP } from "./_xp-formula";
import type { StepType } from "./_types";

export type SessionId = string; // "s1", "s2", "s3", ...

// Pfad-Label für themenbasierte Sessions
export interface SessionLabel {
  title: string;
  titleShort: string;
  tag: "anatomie" | "pflege" | "krankheitslehre";
  bloomRange: string;
}

// Manifest-Eintrag pro LE
export interface LeManifestEntry {
  leId: string;
  ceId: string;
  title: string;
  titleShort: string;
  zeitrichtwert: number;
  sessions: SessionId[];   // Verfügbare Sessions ["s1", "s2", "s3"]
  hasGlossar: boolean;
  status: "rohmaterial" | "sessionplan" | "steps" | "geprueft";
  // Optional: Themenbasierte Pfad-Labels (Mentimeter: Sessions = Pfade)
  sessionLabels?: Record<SessionId, SessionLabel>;
}

// Statisches Manifest — wird vom Content-Generator aktualisiert
// Nur LEs mit generiertem Content sind hier eingetragen
const LE_MANIFEST: LeManifestEntry[] = [
  // === CE 01 (Pipeline v2) ===
  {
    leId: "le-01",
    ceId: "ce-01",
    title: "Personen- und situationsorientiert professionell pflegen",
    titleShort: "Professionell pflegen",
    zeitrichtwert: 40,
    sessions: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"],
    hasGlossar: true,
    status: "geprueft",
  },
  // === CE 02 (neu, Pipeline v2) ===
  {
    leId: "le-06",
    ceId: "ce-02",
    title: "Menschen aller Altersstufen in ihrer Mobilität unterstützen",
    titleShort: "Mobilität unterstützen",
    zeitrichtwert: 40,
    sessions: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"],
    hasGlossar: true,
    status: "steps",
  },
  // === CE 02 (Ernährung, Pipeline v2 + Dozentin) — 12 themenbasierte Pfade ===
  {
    leId: "le-08",
    ceId: "ce-02",
    title: "Menschen aller Altersstufen bei der Nahrungsaufnahme unterstützen",
    titleShort: "Ernährung unterstützen",
    zeitrichtwert: 30,
    sessions: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12"],
    hasGlossar: true,
    status: "steps",
    sessionLabels: {
      s1:  { title: "Verdauungstrakt", titleShort: "Verdauung", tag: "anatomie", bloomRange: "1–3" },
      s2:  { title: "Nährstoffe & Energiebedarf", titleShort: "Nährstoffe", tag: "pflege", bloomRange: "1–3" },
      s3:  { title: "Ernährung in Lebensphasen", titleShort: "Lebensphasen", tag: "pflege", bloomRange: "1–2" },
      s4:  { title: "Mangelernährung & Refeeding", titleShort: "Mangel", tag: "krankheitslehre", bloomRange: "1–3" },
      s5:  { title: "Dehydratation & Exsikkose", titleShort: "Dehydratation", tag: "krankheitslehre", bloomRange: "1–3" },
      s6:  { title: "Ernährungszustand erfassen", titleShort: "Assessment", tag: "pflege", bloomRange: "1–3" },
      s7:  { title: "Essen & Trinken anreichen", titleShort: "Anreichen", tag: "pflege", bloomRange: "1–4" },
      s8:  { title: "Schluckstörungen & Aspiration", titleShort: "Dysphagie", tag: "krankheitslehre", bloomRange: "1–4" },
      s9:  { title: "Künstliche Ernährung", titleShort: "Künstl. Ernähr.", tag: "pflege", bloomRange: "1–4" },
      s10: { title: "Kostformen & Diäten", titleShort: "Kostformen", tag: "pflege", bloomRange: "1–2" },
      s11: { title: "Flüssigkeitsbilanz", titleShort: "Bilanz", tag: "pflege", bloomRange: "1–2" },
      s12: { title: "Ethik & Recht", titleShort: "Ethik", tag: "pflege", bloomRange: "1–2" },
    },
  },
  // Neue LEs werden hier eingefügt wenn Content generiert wird
];

// Session-Loader Registry — statische Imports für Webpack/Next.js
// Jeder Eintrag: leId → sessionId → () => Promise<ContentStep[]>
type SessionLoader = () => Promise<ContentStep[]>;
type MetadataLoader = () => Promise<LektionMetadata>;
type GlossarLoader = () => Promise<GlossarEntry[]>;
type KarteikartenLoader = () => Promise<KarteikarteVorlage[]>;

interface LeLoaders {
  sessions: Record<string, SessionLoader>;
  metadata: MetadataLoader;
  glossar?: GlossarLoader;
  karteikarten?: KarteikartenLoader;
}

const LOADERS: Record<string, LeLoaders> = {
  "le-01": {
    sessions: {
      s1: async () => (await import("./le-01/steps-s1")).STEPS_S1,
      s2: async () => (await import("./le-01/steps-s2")).STEPS_S2,
      s3: async () => (await import("./le-01/steps-s3")).STEPS_S3,
      s4: async () => (await import("./le-01/steps-s4")).STEPS_S4,
      s5: async () => (await import("./le-01/steps-s5")).STEPS_S5,
      s6: async () => (await import("./le-01/steps-s6")).STEPS_S6,
    },
    metadata: async () => (await import("./le-01/steps-s1")).METADATA,
    glossar: async () => (await import("./le-01/glossar")).GLOSSAR,
    karteikarten: async () => (await import("./le-01/karteikarten")).KARTEIKARTEN_LE01,
  },
  "le-06": {
    sessions: {
      s1: async () => (await import("./le-06/steps-s1")).STEPS_S1,
      s2: async () => (await import("./le-06/steps-s2")).STEPS_S2,
      s3: async () => (await import("./le-06/steps-s3")).STEPS_S3,
      s4: async () => (await import("./le-06/steps-s4")).STEPS_S4,
      s5: async () => (await import("./le-06/steps-s5")).STEPS_S5,
      s6: async () => (await import("./le-06/steps-s6")).STEPS_S6,
      s7: async () => (await import("./le-06/steps-s7")).STEPS_S7,
      s8: async () => (await import("./le-06/steps-s8")).STEPS_S8,
    },
    metadata: async () => (await import("./le-06/steps-s1")).METADATA,
    glossar: async () => (await import("./le-06/glossar")).GLOSSAR_LE06,
    karteikarten: async () => (await import("./le-06/karteikarten")).KARTEIKARTEN_LE06,
  },
  "le-08": {
    sessions: {
      s1: async () => (await import("./le-08/steps-s1")).STEPS_S1,
      s2: async () => (await import("./le-08/steps-s2")).STEPS_S2,
      s3: async () => (await import("./le-08/steps-s3")).STEPS_S3,
      s4: async () => (await import("./le-08/steps-s4")).STEPS_S4,
      s5: async () => (await import("./le-08/steps-s5")).STEPS_S5,
      s6: async () => (await import("./le-08/steps-s6")).STEPS_S6,
      s7: async () => (await import("./le-08/steps-s7")).STEPS_S7,
      s8: async () => (await import("./le-08/steps-s8")).STEPS_S8,
      s9: async () => (await import("./le-08/steps-s9")).STEPS_S9,
      s10: async () => (await import("./le-08/steps-s10")).STEPS_S10,
      s11: async () => (await import("./le-08/steps-s11")).STEPS_S11,
      s12: async () => (await import("./le-08/steps-s12")).STEPS_S12,
    },
    metadata: async () => (await import("./le-08/steps-s1")).METADATA,
    glossar: async () => (await import("./le-08/glossar")).GLOSSAR_LE08,
    karteikarten: async () => (await import("./le-08/karteikarten")).KARTEIKARTEN_LE08,
  },
};

/**
 * Alle LEs aus dem Manifest (ohne Content zu laden).
 */
export function getAllLektionen(): LeManifestEntry[] {
  return LE_MANIFEST;
}

/**
 * LEs nach CE filtern.
 */
export function getLektionenByCe(ceId: string): LeManifestEntry[] {
  return LE_MANIFEST.filter((le) => le.ceId === ceId);
}

/**
 * Manifest-Eintrag für eine leId.
 */
export function getLeManifest(leId: string): LeManifestEntry | undefined {
  return LE_MANIFEST.find((le) => le.leId === leId);
}

/**
 * Gibt Pfad-Label für eine Session zurück (Themen-Name, Tag, Bloom).
 * Null wenn keine sessionLabels definiert (= generisches Label).
 */
export function getSessionLabel(leId: string, sessionId: SessionId): SessionLabel | null {
  const manifest = getLeManifest(leId);
  return manifest?.sessionLabels?.[sessionId] ?? null;
}

/**
 * Verfügbare Sessions für eine LE.
 */
export function getAvailableSessions(leId: string): SessionId[] {
  return getLeManifest(leId)?.sessions ?? [];
}

/**
 * Lädt Steps für eine bestimmte Session.
 */
export async function loadSession(leId: string, sessionId: SessionId): Promise<ContentStep[] | null> {
  const loader = LOADERS[leId]?.sessions[sessionId];
  if (!loader) return null;
  return loader();
}

/**
 * Lädt Steps gefiltert nach Track (basis/vertiefung).
 */
export async function loadSessionByTrack(
  leId: string,
  sessionId: SessionId,
  track: LernTrack | "all" = "all"
): Promise<ContentStep[] | null> {
  const steps = await loadSession(leId, sessionId);
  if (!steps) return null;
  if (track === "all") return steps;
  return steps.filter((s) => s.track === track);
}

/**
 * Lädt Metadata für eine LE.
 */
export async function loadMetadata(leId: string): Promise<LektionMetadata | null> {
  const loader = LOADERS[leId]?.metadata;
  if (!loader) return null;
  return loader();
}

/**
 * Lädt Glossar für eine LE.
 */
export async function loadGlossar(leId: string): Promise<GlossarEntry[] | null> {
  const loader = LOADERS[leId]?.glossar;
  if (!loader) return null;
  return loader();
}

/**
 * Lädt pre-generierte Karteikarten für eine LE.
 */
export async function loadKarteikarten(leId: string): Promise<KarteikarteVorlage[] | null> {
  const loader = LOADERS[leId]?.karteikarten;
  if (!loader) return null;
  return loader();
}

/**
 * Lädt eine komplette Lektion (alle Sessions + Metadata + Glossar).
 */
export async function loadLektion(leId: string): Promise<LektionData | null> {
  const manifest = getLeManifest(leId);
  if (!manifest) return null;

  const metadata = await loadMetadata(leId);
  if (!metadata) return null;

  const glossar = (await loadGlossar(leId)) ?? [];
  const karteikarten = (await loadKarteikarten(leId)) ?? undefined;

  // Alle Sessions laden und zusammenführen
  const allSteps: ContentStep[] = [];
  for (const sessionId of manifest.sessions) {
    const steps = await loadSession(leId, sessionId);
    if (steps) allSteps.push(...steps);
  }

  return { steps: allSteps, metadata, glossar, karteikarten };
}

/**
 * Berechnet XP für einen Step (convenience export).
 */
export function getXP(step: ContentStep): number {
  return step.xpValue ?? calculateXP(step.stepType as StepType, step.bloomLevel);
}

/**
 * Tag-Statistiken pro LE (für Themen-Übersichtsseite).
 */
export interface LeTagStats {
  leId: string;
  ceId: string;
  title: string;
  titleShort: string;
  total: number;
  anatomie: number;
  pflege: number;
  krankheitslehre: number;
  sessions: SessionId[];
}

/**
 * Lädt Tag-Statistiken für alle LEs mit Content.
 * Gibt für jede LE die Anzahl Steps pro Tag zurück.
 */
export async function loadAllTagStats(): Promise<LeTagStats[]> {
  const results: LeTagStats[] = [];

  for (const entry of LE_MANIFEST) {
    const loaders = LOADERS[entry.leId];
    if (!loaders) continue;

    let anatomie = 0;
    let pflege = 0;
    let krankheitslehre = 0;
    let total = 0;

    for (const sessionId of entry.sessions) {
      const loader = loaders.sessions[sessionId];
      if (!loader) continue;
      const steps = await loader();
      for (const step of steps) {
        total++;
        if (step.tag === "anatomie") anatomie++;
        else if (step.tag === "krankheitslehre") krankheitslehre++;
        else pflege++; // Default: pflege (auch für steps ohne tag)
      }
    }

    if (total > 0) {
      results.push({
        leId: entry.leId,
        ceId: entry.ceId,
        title: entry.title,
        titleShort: entry.titleShort,
        total,
        anatomie,
        pflege,
        krankheitslehre,
        sessions: entry.sessions,
      });
    }
  }

  return results;
}

// === CROSS-LE PRÜFUNGSFÄLLE ===

/**
 * Lädt alle Steps einer LE die einem bestimmten Patienten zugeordnet sind.
 */
export async function loadPatientSteps(leId: string, patientId: string): Promise<ContentStep[]> {
  const data = await loadLektion(leId);
  if (!data) return [];
  return data.steps.filter((s) => s.patientId === patientId);
}

/**
 * Lädt Steps für einen Patienten über ALLE seine LEs hinweg.
 * Gibt Steps gruppiert nach LE zurück.
 */
export async function loadPatientAcrossLEs(
  patientId: string,
  sourceLEs: string[],
): Promise<Record<string, ContentStep[]>> {
  const result: Record<string, ContentStep[]> = {};
  for (const leId of sourceLEs) {
    const steps = await loadPatientSteps(leId, patientId);
    if (steps.length > 0) {
      result[leId] = steps;
    }
  }
  return result;
}
