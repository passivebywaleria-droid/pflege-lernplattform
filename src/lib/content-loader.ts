// Content-Loader: Thin proxy zu content/content-loader.ts (neue Pipeline v2)
// CE-05 entfernt — nur noch CE-übergreifendes System

import type { ContentStep, LektionData } from "../../content/_types";
import {
  getAllLektionen as _getAllLektionen,
  getLeManifest,
  getAvailableSessions as _getAvailableSessions,
  getSessionLabel as _getSessionLabel,
  loadSession as _loadSession,
  loadLektion as _loadLektion,
  loadKarteikarten as _loadKarteikarten,
} from "../../content/content-loader";
import type { KarteikarteVorlage } from "../../content/_types";
import type { LeManifestEntry, SessionLabel } from "../../content/content-loader";

// Re-export Typen
export type { LeManifestEntry, SessionLabel };

export type SessionNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Gibt alle Lektionen aus dem Manifest zurück.
 */
export function getAllLektionen(): LeManifestEntry[] {
  return _getAllLektionen();
}

/**
 * Gibt Manifest-Eintrag für eine leId zurück.
 */
export function getLektionManifest(leId: string): LeManifestEntry | undefined {
  return getLeManifest(leId);
}

/**
 * Gibt zurück welche Sessions für eine leId verfügbar sind (als Nummern).
 */
export function getAvailableSessions(leId: string): SessionNumber[] {
  const sessions = _getAvailableSessions(leId);
  return sessions.map((s) => parseInt(s.replace("s", ""), 10) as SessionNumber);
}

/**
 * Lädt eine Lektion dynamisch per leId.
 */
export async function loadLektion(leId: string): Promise<LektionData | null> {
  return _loadLektion(leId);
}

/**
 * Gibt Pfad-Label für eine Session zurück (null wenn keine Pfad-Labels definiert).
 */
export function getSessionLabel(leId: string, session: SessionNumber): SessionLabel | null {
  return _getSessionLabel(leId, `s${session}`);
}

/**
 * Lädt Steps für eine bestimmte Session.
 * Akzeptiert SessionNumber (1-12) und wandelt zu SessionId ("s1"-"s12") um.
 */
export async function loadSession(leId: string, session: SessionNumber): Promise<ContentStep[] | null> {
  return _loadSession(leId, `s${session}`);
}

/**
 * Lädt pre-generierte Karteikarten für eine LE.
 */
export async function loadKarteikarten(leId: string): Promise<KarteikarteVorlage[] | null> {
  return _loadKarteikarten(leId);
}
