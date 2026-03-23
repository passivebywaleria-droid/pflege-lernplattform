// Content-Loader: Laedt Lektionsdaten dynamisch per leId
// Verwendet dynamic import() fuer Code-Splitting pro Lektion
// Aktualisiert fuer 16-LE-Struktur (CE 05 Neustrukturierung)

import { CE05_MANIFEST, findLektion, BLOCK_LABELS } from "../../content/ce-05/_manifest";
import type { ContentStep, LektionData } from "../../content/ce-05/_types";
import type { LektionManifest } from "../../content/ce-05/_manifest";

export { BLOCK_LABELS };

export type SessionNumber = 1 | 2 | 3;

// Map leId → dynamic import
// Nur LEs mit tatsaechlichem Content werden eingetragen
// Andere LEs geben null zurueck (Content noch nicht generiert)
const CONTENT_LOADERS: Record<string, () => Promise<LektionData>> = {
  "le-03-ra-definition": async () => {
    const m = await import("../../content/ce-05/le-03-ra-definition/steps");
    return { steps: m.STEPS, metadata: m.METADATA, glossar: m.GLOSSAR };
  },
};

// Session-Loader fuer S2/S3 (wo vorhanden)
const SESSION_LOADERS: Record<string, Record<number, () => Promise<ContentStep[]>>> = {
  "le-03-ra-definition": {
    2: async () => {
      const m = await import("../../content/ce-05/le-03-ra-definition/steps-s2");
      return m.STEPS_S2;
    },
    3: async () => {
      const m = await import("../../content/ce-05/le-03-ra-definition/steps-s3");
      return m.STEPS_S3;
    },
  },
};

/**
 * Laedt eine Lektion dynamisch per leId.
 * Gibt null zurueck wenn die leId nicht existiert oder Content noch nicht generiert.
 */
export async function loadLektion(leId: string): Promise<LektionData | null> {
  const loader = CONTENT_LOADERS[leId];
  if (!loader) return null;
  return loader();
}

/**
 * Laedt Steps fuer eine bestimmte Session (1, 2 oder 3).
 * Session 1 = steps.ts (Standard), Session 2/3 = steps-s2.ts / steps-s3.ts
 */
export async function loadSession(leId: string, session: SessionNumber): Promise<ContentStep[] | null> {
  if (session === 1) {
    const data = await loadLektion(leId);
    return data?.steps ?? null;
  }
  const loader = SESSION_LOADERS[leId]?.[session];
  if (!loader) return null;
  return loader();
}

/**
 * Gibt zurueck welche Sessions fuer eine leId verfuegbar sind.
 */
export function getAvailableSessions(leId: string): SessionNumber[] {
  const sessions: SessionNumber[] = [];
  if (CONTENT_LOADERS[leId]) sessions.push(1);
  if (SESSION_LOADERS[leId]?.[2]) sessions.push(2);
  if (SESSION_LOADERS[leId]?.[3]) sessions.push(3);
  return sessions;
}

/**
 * Gibt alle Lektionen aus dem Manifest zurueck.
 * Fuer die Uebersichtsseite — laedt KEINEN Content.
 */
export function getAllLektionen(): LektionManifest[] {
  return CE05_MANIFEST;
}

/**
 * Gibt Manifest-Eintrag fuer eine leId zurueck.
 */
export function getLektionManifest(leId: string): LektionManifest | undefined {
  return findLektion(leId);
}
