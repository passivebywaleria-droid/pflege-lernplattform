// Content-Loader v2: Lädt Lektionsdaten dynamisch für alle 55 LEs
// CE-übergreifend, variable Session-Anzahl, Track-Filter

import type { ContentStep, LektionData, LektionMetadata, GlossarEntry, LernTrack } from "./_types";
import { calculateXP } from "./_xp-formula";
import type { StepType } from "./_types";

export type SessionId = string; // "s1", "s2", "s3", ...

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
}

// Statisches Manifest — wird vom Content-Generator aktualisiert
// Nur LEs mit generiertem Content sind hier eingetragen
const LE_MANIFEST: LeManifestEntry[] = [
  // === CE 05 (alt, bestehend) ===
  {
    leId: "le-03-ra-definition",
    ceId: "ce-05",
    title: "Rheumatoide Arthritis — Definition & Grundlagen",
    titleShort: "RA Definition",
    zeitrichtwert: 10,
    sessions: ["s1", "s2", "s3"],
    hasGlossar: true,
    status: "geprueft",
  },
  {
    leId: "le-04-ra-symptome-diagnose",
    ceId: "ce-05",
    title: "Rheumatoide Arthritis — Symptome & Diagnostik",
    titleShort: "RA Symptome",
    zeitrichtwert: 10,
    sessions: ["s1", "s2", "s3"],
    hasGlossar: true,
    status: "geprueft",
  },
  // === CE 01 (neu, Pipeline v2) ===
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
  // Neue LEs werden hier eingefügt wenn Content generiert wird
];

// Session-Loader Registry — statische Imports für Webpack/Next.js
// Jeder Eintrag: leId → sessionId → () => Promise<ContentStep[]>
type SessionLoader = () => Promise<ContentStep[]>;
type MetadataLoader = () => Promise<LektionMetadata>;
type GlossarLoader = () => Promise<GlossarEntry[]>;

interface LeLoaders {
  sessions: Record<string, SessionLoader>;
  metadata: MetadataLoader;
  glossar?: GlossarLoader;
}

const LOADERS: Record<string, LeLoaders> = {
  "le-03-ra-definition": {
    sessions: {
      s1: async () => {
        const m = await import("./ce-05/le-03-ra-definition/steps");
        return m.STEPS;
      },
      s2: async () => {
        const m = await import("./ce-05/le-03-ra-definition/steps-s2");
        return m.STEPS_S2;
      },
      s3: async () => {
        const m = await import("./ce-05/le-03-ra-definition/steps-s3");
        return m.STEPS_S3;
      },
    },
    metadata: async () => {
      const m = await import("./ce-05/le-03-ra-definition/steps");
      return m.METADATA;
    },
    glossar: async () => {
      const m = await import("./ce-05/le-03-ra-definition/steps");
      return m.GLOSSAR;
    },
  },
  "le-04-ra-symptome-diagnose": {
    sessions: {
      s1: async () => {
        const m = await import("./ce-05/le-04-ra-symptome-diagnose/steps");
        return m.STEPS;
      },
      s2: async () => {
        const m = await import("./ce-05/le-04-ra-symptome-diagnose/steps-s2");
        return m.STEPS_S2;
      },
      s3: async () => {
        const m = await import("./ce-05/le-04-ra-symptome-diagnose/steps-s3");
        return m.STEPS_S3;
      },
    },
    metadata: async () => {
      const m = await import("./ce-05/le-04-ra-symptome-diagnose/steps");
      return m.METADATA;
    },
    glossar: async () => {
      const m = await import("./ce-05/le-04-ra-symptome-diagnose/steps");
      return m.GLOSSAR;
    },
  },
  "le-01": {
    sessions: {
      s1: async () => (await import("./le-01/steps-s1")).STEPS_S1,
      s2: async () => (await import("./le-01/steps-s2")).STEPS_S2,
      s3: async () => (await import("./le-01/steps-s3")).STEPS_S3,
      s4: async () => (await import("./le-01/steps-s4")).STEPS_S4,
      s5: async () => (await import("./le-01/steps-s5")).STEPS_S5,
      s6: async () => (await import("./le-01/steps-s6")).STEPS_S6,
      s7: async () => (await import("./le-01/steps-s7")).STEPS_S7,
      s8: async () => (await import("./le-01/steps-s8")).STEPS_S8,
    },
    metadata: async () => (await import("./le-01/steps-s1")).METADATA,
    glossar: async () => (await import("./le-01/glossar")).GLOSSAR,
  },
  // Neue LEs: Generierte Content-Dateien werden hier registriert
  // Format für neue LEs:
  // "le-01": {
  //   sessions: {
  //     s1: async () => (await import("./le-01/steps-s1")).STEPS,
  //     s2: async () => (await import("./le-01/steps-s2")).STEPS,
  //     s3: async () => (await import("./le-01/steps-s3")).STEPS,
  //   },
  //   metadata: async () => (await import("./le-01/steps-s1")).METADATA,
  //   glossar: async () => (await import("./le-01/glossar")).GLOSSAR,
  // },
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
 * Lädt eine komplette Lektion (alle Sessions + Metadata + Glossar).
 */
export async function loadLektion(leId: string): Promise<LektionData | null> {
  const manifest = getLeManifest(leId);
  if (!manifest) return null;

  const metadata = await loadMetadata(leId);
  if (!metadata) return null;

  const glossar = (await loadGlossar(leId)) ?? [];

  // Alle Sessions laden und zusammenführen
  const allSteps: ContentStep[] = [];
  for (const sessionId of manifest.sessions) {
    const steps = await loadSession(leId, sessionId);
    if (steps) allSteps.push(...steps);
  }

  return { steps: allSteps, metadata, glossar };
}

/**
 * Berechnet XP für einen Step (convenience export).
 */
export function getXP(step: ContentStep): number {
  return step.xpValue ?? calculateXP(step.stepType as StepType, step.bloomLevel);
}
