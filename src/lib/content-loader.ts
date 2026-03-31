// Content-Loader: Laedt Lektionsdaten dynamisch per leId
// Verwendet dynamic import() fuer Code-Splitting pro Lektion
// Aktualisiert fuer 16-LE-Struktur (CE 05 Neustrukturierung)

import { CE05_MANIFEST, findLektion, BLOCK_LABELS } from "../../content/ce-05/_manifest";
import type { ContentStep, LektionData } from "../../content/ce-05/_types";
import type { LektionManifest } from "../../content/ce-05/_manifest";

export { BLOCK_LABELS };

export type SessionNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// Map leId → dynamic import
// Nur LEs mit tatsaechlichem Content werden eingetragen
// Andere LEs geben null zurueck (Content noch nicht generiert)
const CONTENT_LOADERS: Record<string, () => Promise<LektionData>> = {
  "le-03-ra-definition": async () => {
    const m = await import("../../content/ce-05/le-03-ra-definition/steps");
    return { steps: m.STEPS, metadata: m.METADATA, glossar: m.GLOSSAR };
  },
  "le-04-ra-symptome-diagnose": async () => {
    const m = await import("../../content/ce-05/le-04-ra-symptome-diagnose/steps");
    return { steps: m.STEPS, metadata: m.METADATA, glossar: m.GLOSSAR };
  },
  "le-01": async () => {
    const [s1, glossarMod] = await Promise.all([
      import("../../content/le-01/steps-s1"),
      import("../../content/le-01/glossar"),
    ]);
    return { steps: s1.STEPS_S1, metadata: s1.METADATA, glossar: glossarMod.GLOSSAR } as unknown as LektionData;
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
  "le-04-ra-symptome-diagnose": {
    2: async () => {
      const m = await import("../../content/ce-05/le-04-ra-symptome-diagnose/steps-s2");
      return m.STEPS_S2;
    },
    3: async () => {
      const m = await import("../../content/ce-05/le-04-ra-symptome-diagnose/steps-s3");
      return m.STEPS_S3;
    },
  },
  "le-01": {
    2: async () => (await import("../../content/le-01/steps-s2")).STEPS_S2 as unknown as ContentStep[],
    3: async () => (await import("../../content/le-01/steps-s3")).STEPS_S3 as unknown as ContentStep[],
    4: async () => (await import("../../content/le-01/steps-s4")).STEPS_S4 as unknown as ContentStep[],
    5: async () => (await import("../../content/le-01/steps-s5")).STEPS_S5 as unknown as ContentStep[],
    6: async () => (await import("../../content/le-01/steps-s6")).STEPS_S6 as unknown as ContentStep[],
    7: async () => (await import("../../content/le-01/steps-s7")).STEPS_S7 as unknown as ContentStep[],
    8: async () => (await import("../../content/le-01/steps-s8")).STEPS_S8 as unknown as ContentStep[],
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
  const loaders = SESSION_LOADERS[leId];
  if (loaders) {
    ([2, 3, 4, 5, 6, 7, 8] as SessionNumber[]).forEach((n) => {
      if (loaders[n]) sessions.push(n);
    });
  }
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
  const found = findLektion(leId);
  if (found) return found;
  // Fallback: LE existiert in CONTENT_LOADERS aber nicht in CE05_MANIFEST
  if (CONTENT_LOADERS[leId]) {
    return {
      leId,
      ceId: "ce-01",
      block: "A",
      order: 1,
      title: leId,
      titleShort: leId,
      ueCount: 80,
      estimatedSteps: 22,
      estimatedMinC1: 45,
      estimatedMinB1: 60,
      kompetenzbereiche: ["I"],
      bloomRange: [1, 4],
      pruefungsrelevanz: "hoch",
      voraussetzungen: [],
      status: "fertig",
      inhaltspunkte: [1, 2, 3],
    } as LektionManifest;
  }
  return undefined;
}
