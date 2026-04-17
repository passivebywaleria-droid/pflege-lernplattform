/**
 * LE-MANIFEST — Single Source of Truth für alle Lerneinheiten.
 *
 * Eine neue LE registrieren = Eintrag hier hinzufügen + Dateien in `content/le-{NN}/` anlegen.
 * Sonst nichts ändern.
 *
 * Lesen:
 *   - `content/content-loader.ts` (Frontend Auto-Loader, dynamische Imports)
 *   - `scripts/import-content-to-db.ts` (DB-Migration, LE-agnostisch)
 *   - `scripts/validate-le.ts` (Validierung gegen Naming-Standard)
 *
 * Naming-Standard: siehe `specs/LE-SCHABLONE.md` Abschnitt "Naming-Standard"
 *
 * Status-Workflow:
 *   "rohmaterial" → "sessionplan" → "steps" → "geprueft" → "published"
 *
 * Engine-Import-fähig: Status "geprueft" oder "published"
 */

import type { LeManifestEntry } from "./_types";

export const LE_MANIFEST: LeManifestEntry[] = [
  // === CE 01 — Personen- und situationsorientiert pflegen ===
  {
    leId: "le-01",
    ceId: "ce-01",
    ceNumber: 1,
    title: "Personen- und situationsorientiert professionell pflegen",
    titleShort: "Professionell pflegen",
    zeitrichtwert: 40,
    sessions: ["s1", "s2", "s3", "s4", "s5", "s6"],
    hasGlossar: true,
    hasSnack: true,
    hasFall: true,
    hasPraxis: true,
    hasPruefung: true,
    status: "published",
    sortOrder: 1,
  },
  // === CE 02 — An der Pflege von Menschen mitwirken (Mobilität) ===
  {
    leId: "le-06",
    ceId: "ce-02",
    ceNumber: 2,
    title: "Menschen aller Altersstufen in ihrer Mobilität unterstützen",
    titleShort: "Mobilität unterstützen",
    zeitrichtwert: 40,
    sessions: ["s1", "s2", "s3", "s4", "s5", "s6"],
    hasGlossar: true,
    hasSnack: true,
    hasFall: true,
    hasPraxis: true,
    hasPruefung: true,
    status: "published", // 2026-04-16: Published. I7 gefixt + Quick Fixes (Q8 Körper-SVG, EPUAP/NPUAP Glossar). Facts 28/28, Artikel 0 FAIL.
    sortOrder: 6,
  },
  // Neue LEs hier eintragen — sonst nichts!
];

// ── Helper ──

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
