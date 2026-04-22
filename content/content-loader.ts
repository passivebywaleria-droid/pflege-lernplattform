// Content-Loader v4: Auto-Loader basierend auf `_manifest.ts`.
// API-Layer befindet sich in `src/lib/content-loader.ts`.
//
// Neue LE registrieren:
//   1. Eintrag in `content/_manifest.ts` ergänzen
//   2. Datei-Set in `content/le-{NN}/` mit Naming-Standard ablegen (`LE{NN}_*`)
//   3. Eintrag in `LE_MODULES` unten ergänzen (eine Zeile)
//
// Sonst nichts ändern.

import type {
  ContentStep,
  LektionData,
  LektionMetadata,
  GlossarEntry,
  LernTrack,
  KarteikarteVorlage,
  ArtikelKapitel,
  LernSnack,
  Fallverlauf,
  PraxisUebung,
  ExamCase,
  LeManifestEntry,
  CEManifestEntry,
  SessionId,
  SessionLabel,
  StepType,
  Thema,
  Lernsituation,
} from "./_types";
import { calculateXP } from "./_xp-formula";
import { LE_MANIFEST, CE_MANIFEST, lePrefix } from "./_manifest";

// Re-Export für Konsumenten (Frontend nutzt diese Typen via `src/lib/content-loader.ts`)
export type { LeManifestEntry, CEManifestEntry, SessionId, SessionLabel };

// ── LE-Modul-Loader (Webpack-friendly explicit map) ──
//
// Hintergrund: Next.js/Webpack unterstützt dynamische Imports mit Template-Literalen,
// erzeugt dabei aber einen Context-Bundle für ALLE Matching-Dateien (Build-Warnung).
// Daher: eine Zeile pro LE hier — bleibt vorhersagbar und tree-shakable.

const LE_MODULES: Record<string, () => Promise<Record<string, unknown>>> = {
  // Alle LEs entfernt — Plattform nutzt CE+Themen+Situationen Format
};

async function loadLeModule(leId: string): Promise<Record<string, unknown> | null> {
  const loader = LE_MODULES[leId];
  if (!loader) return null;
  return loader();
}

// ── Loader-Factory ──

interface LeLoaders {
  sessions: Record<string, () => Promise<ContentStep[]>>;
  metadata: () => Promise<LektionMetadata | null>;
  glossar: () => Promise<GlossarEntry[]>;
  karteikarten: () => Promise<KarteikarteVorlage[]>;
  artikel: () => Promise<ArtikelKapitel[]>;
  snack: () => Promise<LernSnack[]>;
  fall: () => Promise<Fallverlauf[]>;
  praxis: () => Promise<PraxisUebung[]>;
  pruefung: () => Promise<ExamCase | null>;
}

function createLoadersForLE(le: LeManifestEntry): LeLoaders {
  const prefix = lePrefix(le.leId); // "le-01" → "LE01"

  const get = async <T>(key: string, fallback: T): Promise<T> => {
    const mod = await loadLeModule(le.leId);
    if (!mod) return fallback;
    const value = mod[key];
    return (value as T | undefined) ?? fallback;
  };

  const sessions: Record<string, () => Promise<ContentStep[]>> = {};
  for (const s of le.sessions) {
    const upper = s.toUpperCase(); // "s1" → "S1"
    sessions[s] = () => get<ContentStep[]>(`${prefix}_STEPS_${upper}`, []);
  }

  return {
    sessions,
    metadata: async () => {
      const mod = await loadLeModule(le.leId);
      return ((mod?.[`${prefix}_METADATA`] as LektionMetadata | undefined) ?? null);
    },
    glossar: () => get<GlossarEntry[]>(`${prefix}_GLOSSAR`, []),
    karteikarten: () => get<KarteikarteVorlage[]>(`${prefix}_KARTEIKARTEN`, []),
    artikel: () => get<ArtikelKapitel[]>(`${prefix}_ARTIKEL`, []),
    snack: () => get<LernSnack[]>(`${prefix}_LERN_SNACK`, []),
    fall: () => get<Fallverlauf[]>(`${prefix}_FALLVERLAEUFE`, []),
    praxis: () => get<PraxisUebung[]>(`${prefix}_PRAXIS`, []),
    pruefung: async () => {
      const mod = await loadLeModule(le.leId);
      return ((mod?.[`${prefix}_PRUEFUNGSFALL`] as ExamCase | undefined) ?? null);
    },
  };
}

const LOADERS: Record<string, LeLoaders> = Object.fromEntries(
  LE_MANIFEST.map((le) => [le.leId, createLoadersForLE(le)]),
);

// ── Public API ──

/** Alle LEs aus dem Manifest (synchron, ohne Content zu laden). */
export function getAllLektionen(): LeManifestEntry[] {
  return LE_MANIFEST;
}

/** LEs nach CE filtern. */
export function getLektionenByCe(ceId: string): LeManifestEntry[] {
  return LE_MANIFEST.filter((le) => le.ceId === ceId);
}

/** Manifest-Eintrag für eine leId. */
export function getLeManifest(leId: string): LeManifestEntry | undefined {
  return LE_MANIFEST.find((le) => le.leId === leId);
}

/** Pfad-Label für eine Session (optional, je nach LE). */
export function getSessionLabel(leId: string, sessionId: SessionId): SessionLabel | null {
  const manifest = getLeManifest(leId);
  return manifest?.sessionLabels?.[sessionId] ?? null;
}

/** Verfügbare Sessions für eine LE. */
export function getAvailableSessions(leId: string): SessionId[] {
  return getLeManifest(leId)?.sessions ?? [];
}

/** Steps für eine Session (static only). */
export async function loadSession(leId: string, sessionId: SessionId): Promise<ContentStep[] | null> {
  const loader = LOADERS[leId]?.sessions[sessionId];
  if (!loader) return null;
  return loader();
}

/** Steps gefiltert nach Track. */
export async function loadSessionByTrack(
  leId: string,
  sessionId: SessionId,
  track: LernTrack | "all" = "all",
): Promise<ContentStep[] | null> {
  const steps = await loadSession(leId, sessionId);
  if (!steps) return null;
  if (track === "all") return steps;
  return steps.filter((s) => s.track === track);
}

/** Metadata für eine LE. */
export async function loadMetadata(leId: string): Promise<LektionMetadata | null> {
  const loader = LOADERS[leId]?.metadata;
  if (!loader) return null;
  return loader();
}

/** Glossar für eine LE. */
export async function loadGlossar(leId: string): Promise<GlossarEntry[] | null> {
  const loader = LOADERS[leId]?.glossar;
  if (!loader) return null;
  return loader();
}

/** Pre-generierte Karteikarten für eine LE. */
export async function loadKarteikarten(leId: string): Promise<KarteikarteVorlage[] | null> {
  const loader = LOADERS[leId]?.karteikarten;
  if (!loader) return null;
  return loader();
}

/** Artikel-Kapitel für eine LE. */
export async function loadArtikel(leId: string): Promise<ArtikelKapitel[] | null> {
  const loader = LOADERS[leId]?.artikel;
  if (!loader) return null;
  return loader();
}

/** Lern-Snack-Kapitel für eine LE. */
export async function loadSnack(leId: string): Promise<LernSnack[] | null> {
  const loader = LOADERS[leId]?.snack;
  if (!loader) return null;
  return loader();
}

/** Fallverläufe für eine LE. */
export async function loadFall(leId: string): Promise<Fallverlauf[] | null> {
  const loader = LOADERS[leId]?.fall;
  if (!loader) return null;
  return loader();
}

/** Praxis-Übungen für eine LE. */
export async function loadPraxis(leId: string): Promise<PraxisUebung[] | null> {
  const loader = LOADERS[leId]?.praxis;
  if (!loader) return null;
  return loader();
}

/** Prüfungsfall für eine LE. */
export async function loadPruefung(leId: string): Promise<ExamCase | null> {
  const loader = LOADERS[leId]?.pruefung;
  if (!loader) return null;
  return loader();
}

/** Komplette Lektion (alle Sessions + Metadata + Glossar + Karteikarten). */
export async function loadLektion(leId: string): Promise<LektionData | null> {
  const manifest = getLeManifest(leId);
  if (!manifest) return null;

  const metadata = await loadMetadata(leId);
  if (!metadata) return null;

  const glossar = (await loadGlossar(leId)) ?? [];
  const karteikarten = (await loadKarteikarten(leId)) ?? undefined;

  const allSteps: ContentStep[] = [];
  for (const sessionId of manifest.sessions) {
    const steps = await loadSession(leId, sessionId);
    if (steps) allSteps.push(...steps);
  }

  return { steps: allSteps, metadata, glossar, karteikarten };
}

/** XP-Berechnung für einen Step. */
export function getXP(step: ContentStep): number {
  return step.xpValue ?? calculateXP(step.stepType as StepType, step.bloomLevel);
}

// ── Tag-Statistiken ──

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
        else pflege++;
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

// ── Cross-LE Patient Steps ──

export async function loadPatientSteps(leId: string, patientId: string): Promise<ContentStep[]> {
  const data = await loadLektion(leId);
  if (!data) return [];
  return data.steps.filter((s) => s.patientId === patientId);
}

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

// ═══════════════════════════════════════════════════
// CE-BASIERTER CONTENT-LOADER (Situationsbasiert)
// ═══════════════════════════════════════════════════

// CE-Modul-Loader (Webpack-friendly explicit map)
const CE_MODULES: Record<string, () => Promise<Record<string, unknown>>> = {
  // Wird ergänzt wenn CE-02 Content produziert wird:
  // "ce-02": () => import("./ce-02/index"),
};

async function loadCeModule(ceId: string): Promise<Record<string, unknown> | null> {
  const loader = CE_MODULES[ceId];
  if (!loader) return null;
  return loader();
}

/** Alle CEs aus dem Manifest (synchron). */
export function getAllCEs(): CEManifestEntry[] {
  return CE_MANIFEST;
}

/** CE-Manifest per ceId. */
export function getCeManifest(ceId: string): CEManifestEntry | undefined {
  return CE_MANIFEST.find((ce) => ce.ceId === ceId);
}

/** Themen einer CE laden. */
export async function loadThemen(ceId: string): Promise<Thema[]> {
  const mod = await loadCeModule(ceId);
  if (!mod) return [];
  const prefix = ceId.replace("-", "").toUpperCase(); // "ce-02" → "CE02"
  return (mod[`${prefix}_THEMEN`] as Thema[] | undefined) ?? [];
}

/** Einzelnes Thema per themaId laden. */
export async function loadThema(ceId: string, themaId: string): Promise<Thema | null> {
  const themen = await loadThemen(ceId);
  return themen.find((t) => t.themaId === themaId) ?? null;
}

/** Lernsituationen einer CE laden. */
export async function loadSituationen(ceId: string): Promise<Lernsituation[]> {
  const mod = await loadCeModule(ceId);
  if (!mod) return [];
  const prefix = ceId.replace("-", "").toUpperCase();
  return (mod[`${prefix}_SITUATIONEN`] as Lernsituation[] | undefined) ?? [];
}

/** Einzelne Lernsituation per situationId laden. */
export async function loadSituation(ceId: string, situationId: string): Promise<Lernsituation | null> {
  const situationen = await loadSituationen(ceId);
  return situationen.find((s) => s.situationId === situationId) ?? null;
}

/** Prüft ob ein Content-Eintrag CE-basiert (situationsbasiert) oder LE-basiert (legacy) ist. */
export function isCEBasiert(ceId: string): boolean {
  return CE_MANIFEST.some((ce) => ce.ceId === ceId);
}
