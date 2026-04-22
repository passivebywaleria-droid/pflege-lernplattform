/**
 * CE-MANIFEST — Single Source of Truth für alle Curricularen Einheiten.
 *
 * Plattform nutzt ausschließlich CE+Themen+Situationen Format.
 * Keine LEs mehr.
 */

import type { LeManifestEntry, CEManifestEntry } from "./_types";

// LE-MANIFEST bleibt als leeres Array (API-Kompatibilität)
export const LE_MANIFEST: LeManifestEntry[] = [];

// ═══════════════════════════════════════════════════
// CE-MANIFEST (Situationsbasiert — ab CE-02)
// ═══════════════════════════════════════════════════

export const CE_MANIFEST: CEManifestEntry[] = [
  {
    ceId: "ce-02",
    ceNumber: 2,
    titel: "An der Pflege von Menschen in kurativen Prozessen mitwirken",
    titelShort: "Pflege in kurativen Prozessen",
    gesamtUE: 170,
    themen: [
      // Cluster A — Pflegeprozess (LE-05, 30 UE)
      "pflegeprozess",
      "pflegeplanung",
      "pflegedokumentation",
      "assessments-expertenstandards",
      // Cluster B — Mobilität (LE-06, 40 UE)
      "kinaesthetik",
      "positionierung",
      "mobilisation",
      "dekubitus-prophylaxe",
      "thrombose-prophylaxe",
      "sturz-prophylaxe",
      "kontraktur-prophylaxe",
      "pneumonie-prophylaxe",
      "schlaf",
      // Cluster C — Körperpflege (LE-07, 50 UE)
      "haut",
      "ganzkörperpflege",
      "mundpflege",
      "saeuglingspflege",
      "basale-stimulation",
      // Cluster D — Ernährung (LE-08, 30 UE)
      "ernaehrungsgrundlagen",
      "ernaehrungsassessment",
      "essen-anreichen",
      "enterale-ernaehrung",
      // Cluster E — Ausscheidung (LE-09, 30 UE)
      "harnausscheidung",
      "blasenkatheter",
      "stuhlausscheidung",
    ],
    situationen: [
      // Spirale 1
      "frau-m-nacht-sturz", // ✅ PILOT — fertig produziert durch Pipeline v9
      "ls-yilmaz-hueft-tep",
      "ls-bauer-demenz-sturz",
      "ls-emilia-saeugling",
      "ls-petrov-schlaganfall",
      // Spirale 2
      "ls-schmidt-adipositas",
      "ls-yilmaz-spirale2",
      // Spirale 3
      "ls-kovac-ambulant",
      "ls-nguyen-stoma",
      "ls-lukas-verbruehung",
      // Spirale 4
      "ls-pruefung-ce02",
    ],
    status: "published",
    sortOrder: 2,
  },
  // Neue CEs hier eintragen
];

// ── LE-Helper (Legacy) ──

/** LEs filtern, die für DB-Import bereit sind (geprueft oder published). */
export function getImportableLEs(): LeManifestEntry[] {
  return LE_MANIFEST.filter((le) => le.status === "geprueft" || le.status === "published");
}

/** LE per leId finden. */
export function findLE(leId: string): LeManifestEntry | undefined {
  return LE_MANIFEST.find((le) => le.leId === leId);
}

/** Prefix aus leId ableiten: "le-01" → "LE01". */
export function lePrefix(leId: string): string {
  return leId.replace("-", "").toUpperCase();
}

// ═══════════════════════════════════════════════════
// UE-VERTEILUNG pro Thema (CE-02, freigegeben 2026-04-19)
// ═══════════════════════════════════════════════════

/** Geschätzte UE pro Thema (à 45 Min). Summe = 170 UE. */
export const THEMEN_UE: Record<string, number> = {
  // Cluster A — Pflegeprozess (30 UE)
  "pflegeprozess": 8,
  "pflegeplanung": 8,
  "pflegedokumentation": 7,
  "assessments-expertenstandards": 7,
  // Cluster B — Mobilität (40 UE)
  "kinaesthetik": 5,
  "positionierung": 5,
  "mobilisation": 6,
  "dekubitus-prophylaxe": 6,
  "thrombose-prophylaxe": 4,
  "sturz-prophylaxe": 4,
  "kontraktur-prophylaxe": 3,
  "pneumonie-prophylaxe": 4,
  "schlaf": 3,
  // Cluster C — Körperpflege (50 UE)
  "haut": 12,
  "ganzkörperpflege": 12,
  "mundpflege": 7,
  "saeuglingspflege": 10,
  "basale-stimulation": 9,
  // Cluster D — Ernährung (30 UE)
  "ernaehrungsgrundlagen": 8,
  "ernaehrungsassessment": 8,
  "essen-anreichen": 7,
  "enterale-ernaehrung": 7,
  // Cluster E — Ausscheidung (30 UE)
  "harnausscheidung": 10,
  "blasenkatheter": 10,
  "stuhlausscheidung": 10,
};

// ── CE-Helper (Neu) ──

/** CE per ceId finden. */
export function findCE(ceId: string): CEManifestEntry | undefined {
  return CE_MANIFEST.find((ce) => ce.ceId === ceId);
}

/** CEs filtern die importierbar sind (geprueft oder published). */
export function getImportableCEs(): CEManifestEntry[] {
  return CE_MANIFEST.filter((ce) => ce.status === "geprueft" || ce.status === "published");
}

/** Alle verfügbaren CEs (synchron). */
export function getAllCEs(): CEManifestEntry[] {
  return CE_MANIFEST;
}
