#!/usr/bin/env npx tsx
/**
 * Karteikarten-Auto-Generator
 *
 * Liest alle phase-*.ts einer Situation, extrahiert inlineWissen-Steps
 * mit karteikarte-Daten, dedupliziert über bausteinRef, und schreibt
 * eine typisierte karteikarten-auto.ts im Situations-Verzeichnis.
 *
 * Usage:
 *   npx tsx scripts/karteikarten-auto-gen.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/karteikarten-auto-gen.ts ce-02 --all
 */

import * as fs from "fs";
import * as path from "path";

// ─── CLI Args ───────────────────────────────────────────────────

const [ceId, situationArg] = process.argv.slice(2);

if (!ceId || !situationArg) {
  console.error(
    "Usage:\n" +
      "  npx tsx scripts/karteikarten-auto-gen.ts <ceId> <situationId>\n" +
      "  npx tsx scripts/karteikarten-auto-gen.ts <ceId> --all\n" +
      "\n" +
      "Beispiel:\n" +
      "  npx tsx scripts/karteikarten-auto-gen.ts ce-02 frau-m-nacht-sturz\n" +
      "  npx tsx scripts/karteikarten-auto-gen.ts ce-02 --all",
  );
  process.exit(1);
}

const CONTENT_ROOT = path.resolve(__dirname, "..", "content");

// ─── Typen (inline, um Import-Probleme mit tsx zu vermeiden) ────

interface InlineKarteikarte {
  vorderseite: string;
  rueckseite: string;
  vorderseiteB1?: string;
  rueckseiteB1?: string;
}

interface InlineWissenData {
  bausteinRef?: string;
  themaPrimaer?: string;
  karteikarte: InlineKarteikarte;
}

interface ExtractedCard {
  id: string;
  bausteinRef: string;
  themaPrimaer: string;
  vorderseite: string;
  rueckseite: string;
  situationsId: string;
}

// ─── Helfer ─────────────────────────────────────────────────────

/**
 * Registriert einen ts-Loader, der require() für .ts-Dateien ermöglicht.
 * Wir nutzen dynamischen Import über tsx — die Phase-Dateien exportieren
 * SituationsPhase-Objekte mit kernSteps + optionaleSteps.
 */

async function loadPhaseModule(filePath: string): Promise<Record<string, unknown>> {
  // tsx unterstützt dynamische imports von .ts-Dateien direkt
  const module = await import(filePath);
  return module;
}

/**
 * Extrahiert alle inlineWissen-Karteikarten aus einem Phase-Modul.
 */
function extractCardsFromModule(
  mod: Record<string, unknown>,
  situationsId: string,
): ExtractedCard[] {
  const cards: ExtractedCard[] = [];

  for (const exportName of Object.keys(mod)) {
    const exported = mod[exportName] as Record<string, unknown> | undefined;
    if (!exported || typeof exported !== "object") continue;

    // SituationsPhase hat kernSteps und optionaleSteps
    const allSteps: unknown[] = [];
    if (Array.isArray(exported.kernSteps)) allSteps.push(...exported.kernSteps);
    if (Array.isArray(exported.optionaleSteps)) allSteps.push(...exported.optionaleSteps);

    for (const step of allSteps) {
      if (!step || typeof step !== "object") continue;
      const s = step as Record<string, unknown>;

      if (s.stepType !== "inlineWissen") continue;
      if (!s.inlineWissen || typeof s.inlineWissen !== "object") continue;

      const iw = s.inlineWissen as Record<string, unknown>;
      if (!iw.karteikarte || typeof iw.karteikarte !== "object") continue;

      const kk = iw.karteikarte as Record<string, unknown>;
      const vorderseite = kk.vorderseite as string | undefined;
      const rueckseite = kk.rueckseite as string | undefined;

      if (!vorderseite || !rueckseite) continue;

      const bausteinRef = (iw.bausteinRef as string) || (s.stepId as string) || "unknown";

      // themaPrimaer: erst auf Step-Ebene suchen, dann in inlineWissen
      const themaPrimaer =
        (s.themaPrimaer as string) ||
        (iw.themaPrimaer as string) ||
        "unbekannt";

      const id = `kk-auto-${bausteinRef}`;

      cards.push({
        id,
        bausteinRef,
        themaPrimaer,
        vorderseite,
        rueckseite,
        situationsId,
      });
    }
  }

  return cards;
}

/**
 * Verarbeitet eine einzelne Situation und gibt die extrahierten Karten zurück.
 */
async function processSituation(
  ceDir: string,
  situationsId: string,
): Promise<ExtractedCard[]> {
  const sitDir = path.join(ceDir, "situationen", situationsId);

  if (!fs.existsSync(sitDir)) {
    console.error(`  ✗ Verzeichnis nicht gefunden: ${sitDir}`);
    return [];
  }

  const phaseFiles = fs
    .readdirSync(sitDir)
    .filter((f) => (f.startsWith("phase-") || f === "inline-wissen.ts") && f.endsWith(".ts"))
    .sort();

  if (phaseFiles.length === 0) {
    console.error(`  ✗ Keine phase-*.ts Dateien in: ${sitDir}`);
    return [];
  }

  const allCards: ExtractedCard[] = [];

  for (const phaseFile of phaseFiles) {
    const filePath = path.join(sitDir, phaseFile);
    try {
      const mod = await loadPhaseModule(filePath);
      const cards = extractCardsFromModule(mod, situationsId);
      allCards.push(...cards);
    } catch (err) {
      console.error(`  ✗ Fehler beim Laden von ${phaseFile}:`, (err as Error).message);
    }
  }

  return allCards;
}

/**
 * Dedupliziert Karten über bausteinRef — erste Karte gewinnt.
 */
function deduplicateCards(cards: ExtractedCard[]): ExtractedCard[] {
  const seen = new Map<string, ExtractedCard>();
  for (const card of cards) {
    if (!seen.has(card.bausteinRef)) {
      seen.set(card.bausteinRef, card);
    }
  }
  return Array.from(seen.values());
}

/**
 * Escapet einen String für TypeScript-Template-Literal-Ausgabe.
 */
function escapeForTs(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

/**
 * Generiert den TypeScript-Output und schreibt ihn in die Datei.
 */
function writeOutput(cards: ExtractedCard[], outputPath: string): void {
  // Relative Import-Tiefe berechnen (situationen/{id}/ → ../../_types)
  const lines: string[] = [];

  lines.push("// Auto-generiert von scripts/karteikarten-auto-gen.ts");
  lines.push("// Nicht manuell bearbeiten — wird bei jedem Lauf überschrieben.");
  lines.push("");
  lines.push("export interface AutoKarteikarte {");
  lines.push("  id: string;");
  lines.push("  bausteinRef: string;");
  lines.push("  themaPrimaer: string;");
  lines.push("  vorderseite: string;");
  lines.push("  rueckseite: string;");
  lines.push("  situationsId: string;");
  lines.push("}");
  lines.push("");
  lines.push("export const KARTEIKARTEN_AUTO: AutoKarteikarte[] = [");

  for (const card of cards) {
    lines.push("  {");
    lines.push(`    id: "${escapeForTs(card.id)}",`);
    lines.push(`    bausteinRef: "${escapeForTs(card.bausteinRef)}",`);
    lines.push(`    themaPrimaer: "${escapeForTs(card.themaPrimaer)}",`);
    lines.push(`    vorderseite: "${escapeForTs(card.vorderseite)}",`);
    lines.push(`    rueckseite: "${escapeForTs(card.rueckseite)}",`);
    lines.push(`    situationsId: "${escapeForTs(card.situationsId)}",`);
    lines.push("  },");
  }

  lines.push("];");
  lines.push("");

  fs.writeFileSync(outputPath, lines.join("\n"), "utf-8");
}

// ─── Main ───────────────────────────────────────────────────────

async function main(): Promise<void> {
  const ceDir = path.join(CONTENT_ROOT, ceId);

  if (!fs.existsSync(ceDir)) {
    console.error(`CE-Verzeichnis nicht gefunden: ${ceDir}`);
    process.exit(1);
  }

  const situationenDir = path.join(ceDir, "situationen");
  if (!fs.existsSync(situationenDir)) {
    console.error(`Keine Situationen in: ${situationenDir}`);
    process.exit(1);
  }

  // Situationen bestimmen
  let situationIds: string[];

  if (situationArg === "--all") {
    situationIds = fs
      .readdirSync(situationenDir)
      .filter((d) => fs.statSync(path.join(situationenDir, d)).isDirectory())
      .sort();
    console.log(`\n🗂  ${ceId.toUpperCase()} — ${situationIds.length} Situationen gefunden\n`);
  } else {
    situationIds = [situationArg];
  }

  let totalCards = 0;
  let totalSituations = 0;

  for (const sitId of situationIds) {
    console.log(`► ${sitId}`);

    const cards = await processSituation(ceDir, sitId);

    if (cards.length === 0) {
      console.log(`  → Keine inlineWissen-Karteikarten gefunden.\n`);
      continue;
    }

    const deduplicated = deduplicateCards(cards);
    const outputPath = path.join(situationenDir, sitId, "karteikarten-auto.ts");

    writeOutput(deduplicated, outputPath);

    const dupCount = cards.length - deduplicated.length;
    const dupInfo = dupCount > 0 ? ` (${dupCount} Duplikate entfernt)` : "";

    console.log(`  ✓ ${deduplicated.length} Karteikarten geschrieben${dupInfo}`);
    console.log(`  → ${outputPath}\n`);

    totalCards += deduplicated.length;
    totalSituations++;
  }

  console.log(`\n═══════════════════════════════════════════`);
  console.log(`Gesamt: ${totalCards} Karteikarten in ${totalSituations} Situationen`);
  console.log(`═══════════════════════════════════════════\n`);
}

main().catch((err) => {
  console.error("Fataler Fehler:", err);
  process.exit(1);
});
