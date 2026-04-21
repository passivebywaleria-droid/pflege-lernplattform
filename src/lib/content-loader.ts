// Content-Loader Proxy: API-First mit Static-Fallback
// Nutzt API-Endpoints wenn verfügbar, fällt auf statische .ts-Dateien zurück

import type { ContentStep, LektionData, Thema, Lernsituation, CEManifestEntry } from "../../content/_types";
import {
  getAllLektionen as _staticGetAllLektionen,
  getLeManifest as _staticGetLeManifest,
  getAvailableSessions as _staticGetAvailableSessions,
  getSessionLabel as _staticGetSessionLabel,
  loadSession as _staticLoadSession,
  loadLektion as _staticLoadLektion,
  loadKarteikarten as _staticLoadKarteikarten,
  loadMetadata as _staticLoadMetadata,
  loadGlossar as _staticLoadGlossar,
  getAllCEs as _staticGetAllCEs,
  getCeManifest as _staticGetCeManifest,
  loadThemen as _staticLoadThemen,
  loadThema as _staticLoadThema,
  loadSituationen as _staticLoadSituationen,
  loadSituation as _staticLoadSituation,
  isCEBasiert as _staticIsCEBasiert,
} from "../../content/content-loader";
import type { KarteikarteVorlage, GlossarEntry, LektionMetadata } from "../../content/_types";
import type { LeManifestEntry, SessionLabel } from "../../content/content-loader";
import {
  fetchLes,
  fetchSteps,
  fetchGlossar as fetchGlossarApi,
  fetchKarteikarten as fetchKarteikartenApi,
} from "./content-api";

// Re-export Typen
export type { LeManifestEntry, SessionLabel, CEManifestEntry };

export type SessionNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// ── Manifest Cache ──

let apiManifestCache: LeManifestEntry[] | null = null;

/**
 * Gibt alle Lektionen zurück (synchron: Cache/Static).
 */
export function getAllLektionen(): LeManifestEntry[] {
  return apiManifestCache ?? _staticGetAllLektionen();
}

/**
 * Lädt alle LEs async via API (mit Caching).
 */
export async function getAllLektionenAsync(): Promise<LeManifestEntry[]> {
  if (apiManifestCache) return apiManifestCache;

  try {
    const manifest = await fetchLes();
    if (manifest.length > 0) {
      apiManifestCache = manifest;
      return manifest;
    }
  } catch {
    // API unavailable
  }
  return _staticGetAllLektionen();
}

/**
 * Gibt Manifest-Eintrag für eine leId zurück.
 */
export function getLektionManifest(leId: string): LeManifestEntry | undefined {
  return getAllLektionen().find((le) => le.leId === leId) ?? _staticGetLeManifest(leId);
}

/**
 * Gibt zurück welche Sessions für eine leId verfügbar sind (als Nummern).
 */
export function getAvailableSessions(leId: string): SessionNumber[] {
  const manifest = getLektionManifest(leId);
  if (!manifest) return [];
  return manifest.sessions.map((s) => parseInt(s.replace("s", ""), 10) as SessionNumber);
}

/**
 * Lädt eine Lektion dynamisch per leId (verwendet API für Steps).
 */
export async function loadLektion(leId: string): Promise<LektionData | null> {
  // Ensure manifest is loaded
  await getAllLektionenAsync();

  const manifest = getLektionManifest(leId);
  if (!manifest) return null;

  const metadata = await loadMetadata(leId);
  if (!metadata) return null;

  const glossar = (await loadGlossar(leId)) ?? [];
  const karteikarten = (await loadKarteikarten(leId)) ?? undefined;

  // Load all sessions (API-First per session)
  const allSteps: ContentStep[] = [];
  for (const sessionId of manifest.sessions) {
    const sessionNum = parseInt(sessionId.replace("s", ""), 10) as SessionNumber;
    const steps = await loadSession(leId, sessionNum);
    if (steps) allSteps.push(...steps);
  }

  return { steps: allSteps, metadata, glossar, karteikarten };
}

/**
 * Gibt Pfad-Label für eine Session zurück.
 */
export function getSessionLabel(leId: string, session: SessionNumber): SessionLabel | null {
  return _staticGetSessionLabel(leId, `s${session}`);
}

/**
 * Lädt Steps für eine Session (API-First, Static-Fallback).
 */
export async function loadSession(leId: string, session: SessionNumber): Promise<ContentStep[] | null> {
  try {
    const steps = await fetchSteps(leId, `s${session}`);
    if (steps.length > 0) return steps;
  } catch {
    // API unavailable
  }
  return _staticLoadSession(leId, `s${session}`);
}

/**
 * Lädt Metadata für eine LE (derzeit nur static).
 */
export async function loadMetadata(leId: string): Promise<LektionMetadata | null> {
  return _staticLoadMetadata(leId);
}

/**
 * Lädt Glossar (API-First, Static-Fallback).
 */
export async function loadGlossar(leId: string): Promise<GlossarEntry[] | null> {
  try {
    const glossar = await fetchGlossarApi(leId);
    if (glossar.length > 0) return glossar;
  } catch {
    // API unavailable
  }
  return _staticLoadGlossar(leId);
}

/**
 * Lädt pre-generierte Karteikarten (API-First, Static-Fallback).
 */
export async function loadKarteikarten(leId: string): Promise<KarteikarteVorlage[] | null> {
  try {
    const kk = await fetchKarteikartenApi(leId);
    if (kk.length > 0) return kk;
  } catch {
    // API unavailable
  }
  return _staticLoadKarteikarten(leId);
}

// ── CE-basierte Loader (Situationsbasiert) ──

/** Alle CEs aus dem Manifest (synchron). */
export function getAllCEs(): CEManifestEntry[] {
  return _staticGetAllCEs();
}

/** CE-Manifest per ceId. */
export function getCeManifest(ceId: string): CEManifestEntry | undefined {
  return _staticGetCeManifest(ceId);
}

/** Themen einer CE laden. */
export async function loadThemen(ceId: string): Promise<Thema[]> {
  return _staticLoadThemen(ceId);
}

/** Einzelnes Thema laden. */
export async function loadThema(ceId: string, themaId: string): Promise<Thema | null> {
  return _staticLoadThema(ceId, themaId);
}

/** Lernsituationen einer CE laden. */
export async function loadSituationen(ceId: string): Promise<Lernsituation[]> {
  return _staticLoadSituationen(ceId);
}

/** Einzelne Lernsituation laden. */
export async function loadSituation(ceId: string, situationId: string): Promise<Lernsituation | null> {
  return _staticLoadSituation(ceId, situationId);
}

/** Prüft ob ein CE situationsbasiert ist. */
export function isCEBasiert(ceId: string): boolean {
  return _staticIsCEBasiert(ceId);
}
