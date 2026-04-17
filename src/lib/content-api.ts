/**
 * Content API Client — Lädt Content aus der DB via API-Endpoints.
 * Zentrale Stelle für alle Content-Fetches.
 */

import type {
  ContentStep,
  ArtikelKapitel,
  GlossarEntry,
  KarteikarteVorlage,
  LernSnack,
  Fallverlauf,
  PraxisUebung,
  ExamCase,
} from "../../content/_types"
import type { LeManifestEntry } from "../../content/content-loader"

const API_BASE = "/api/content"

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

/**
 * Liste aller publizierten LEs (ersetzt statisches LE_MANIFEST).
 */
export async function fetchLes(): Promise<LeManifestEntry[]> {
  return (await fetchJson<LeManifestEntry[]>(`${API_BASE}/les`)) ?? []
}

/**
 * Steps für eine Session laden.
 */
export async function fetchSteps(
  leId: string,
  session: string
): Promise<ContentStep[]> {
  const data = await fetchJson<{ steps: ContentStep[] }>(
    `${API_BASE}/le/${leId}/steps/${session}`
  )
  return data?.steps ?? []
}

/**
 * Alle Steps einer LE laden (alle Sessions).
 */
export async function fetchAllSteps(
  leId: string,
  sessions: string[]
): Promise<ContentStep[]> {
  const results = await Promise.all(
    sessions.map((s) => fetchSteps(leId, s))
  )
  return results.flat()
}

/**
 * Artikel-Kapitel laden.
 */
export async function fetchArtikel(
  leId: string
): Promise<ArtikelKapitel[]> {
  return (await fetchJson<ArtikelKapitel[]>(`${API_BASE}/le/${leId}/artikel`)) ?? []
}

/**
 * Glossar laden.
 */
export async function fetchGlossar(
  leId: string
): Promise<GlossarEntry[]> {
  return (await fetchJson<GlossarEntry[]>(`${API_BASE}/le/${leId}/glossar`)) ?? []
}

/**
 * Karteikarten laden.
 */
export async function fetchKarteikarten(
  leId: string
): Promise<KarteikarteVorlage[]> {
  return (await fetchJson<KarteikarteVorlage[]>(`${API_BASE}/le/${leId}/karteikarten`)) ?? []
}

/**
 * Lern-Snacks laden.
 */
export async function fetchSnacks(
  leId: string
): Promise<LernSnack[]> {
  return (await fetchJson<LernSnack[]>(`${API_BASE}/le/${leId}/snack`)) ?? []
}

/**
 * Fallverläufe laden (mit Patient-Daten).
 */
export async function fetchFallverlaeufe(
  leId: string
): Promise<Fallverlauf[]> {
  return (await fetchJson<Fallverlauf[]>(`${API_BASE}/le/${leId}/fall`)) ?? []
}

/**
 * Praxis-Übungen laden (mit aufgelösten Steps).
 */
export async function fetchPraxis(
  leId: string
): Promise<PraxisUebung[]> {
  return (await fetchJson<PraxisUebung[]>(`${API_BASE}/le/${leId}/praxis`)) ?? []
}

/**
 * Prüfungsfall laden (mit Patient-Daten).
 */
export async function fetchPruefungsfall(
  leId: string
): Promise<ExamCase | null> {
  return fetchJson<ExamCase>(`${API_BASE}/le/${leId}/pruefung`)
}
