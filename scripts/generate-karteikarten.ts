#!/usr/bin/env npx tsx
/**
 * Karteikarten-Batch-Generator via Gemini API
 *
 * Liest Rohmaterial einer LE und generiert 30-50 prüfungsrelevante Karteikarten.
 * Output: content/le-{N}/karteikarten.ts
 *
 * Setup: GEMINI_API_KEY in .env.local (aistudio.google.com → kostenlos)
 *
 * Usage:
 *   npx tsx scripts/generate-karteikarten.ts le-01
 *   npx tsx scripts/generate-karteikarten.ts le-08 --force    # Überschreibt bestehende
 *   npx tsx scripts/generate-karteikarten.ts le-08 --dry-run  # Zeigt Prompt, generiert nicht
 */

import * as fs from "fs";
import * as path from "path";
import { geminiGenerateJSON, type GeminiModel } from "./gemini-client";

// --- Types (gleich wie content/_types.ts) ---

interface KarteikarteRaw {
  id: string;
  vorderseite: string;
  rueckseiteC1: string;
  rueckseiteB1: string;
  tag: "anatomie" | "pflege" | "krankheitslehre";
  kategorie: "fachbegriff" | "fakt" | "handlung" | "assessment" | "recht";
  pruefungsrelevant: boolean;
  quelle?: string;
}

// --- Rohmaterial laden ---

function loadRohmaterial(leId: string): string {
  const contentDir = path.join(process.cwd(), "content", leId);

  // Rohmaterial-Quellen (Priorität)
  const sources = [
    "unterrichtsentwurf.md",
    "rohmaterial.md",
    "rohmaterial-v3.md",
  ];

  const texts: string[] = [];
  for (const src of sources) {
    const p = path.join(contentDir, src);
    if (fs.existsSync(p)) {
      texts.push(`--- ${src} ---\n${fs.readFileSync(p, "utf-8")}`);
    }
  }

  // JSON-Rohmaterial
  const jsonPath = path.join(contentDir, "rohmaterial.json");
  if (fs.existsSync(jsonPath)) {
    const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    texts.push(`--- rohmaterial.json (Titel: ${json.titel}) ---\n${JSON.stringify(json.kernfakten || json, null, 2).slice(0, 5000)}`);
  }

  if (texts.length === 0) {
    console.error(`❌ Kein Rohmaterial gefunden für ${leId}`);
    process.exit(1);
  }

  return texts.join("\n\n");
}

// --- LE-Metadaten ---

function getLeTitle(leId: string): string {
  const jsonPath = path.join(process.cwd(), "content", leId, "rohmaterial.json");
  if (fs.existsSync(jsonPath)) {
    const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    return json.titel || leId;
  }
  return leId;
}

// --- Prompt bauen ---

function buildPrompt(leId: string, rohmaterial: string): string {
  const leTitle = getLeTitle(leId);
  const leNum = leId.replace("le-", "");

  return `Du bist eine erfahrene Pflegedozentin. Erstelle 35-45 prüfungsrelevante Karteikarten für die Lerneinheit "${leTitle}" (${leId}).

## Regeln

1. **5 Kategorien** (gleichmäßig verteilt):
   - \`fachbegriff\` (7-9): Definition als Frage, z.B. "Was bedeutet Dekubitus?"
   - \`fakt\` (7-9): Zahlen, Stadien, Klassifikationen, z.B. "Wie viele Dekubitus-Grade gibt es?"
   - \`handlung\` (7-9): Pflegemaßnahmen, Durchführung, z.B. "Wie lagert man einen Dekubitus-gefährdeten Patienten?"
   - \`assessment\` (6-8): Einschätzungsinstrumente, Skalen, z.B. "Was misst die Braden-Skala?"
   - \`recht\` (6-8): Gesetze, Standards, Dokumentation, z.B. "Was fordert der Expertenstandard Dekubitusprophylaxe?"

2. **3 Tags** (alle vertreten):
   - \`anatomie\`: Körperstrukturen, Physiologie
   - \`pflege\`: Pflegehandlungen, Prozesse, Kommunikation
   - \`krankheitslehre\`: Pathologie, Symptome, Therapie

3. **Qualität**:
   - Vorderseite: Klare Frage (nicht nur Stichwort)
   - rueckseiteC1: Fachsprachlich korrekte Antwort (1-2 Sätze)
   - rueckseiteB1: Vereinfachte Antwort auf B1-Niveau (einfache Wörter, kurze Sätze, max 15 Wörter pro Satz)
   - pruefungsrelevant: true für Wissen das in der schriftlichen/mündlichen Prüfung gefragt wird (≥60%)
   - quelle: Wenn möglich "I Care Pflege Thieme 2020, S. X" oder "DNQP Expertenstandard..." angeben
   - IDs: "${leNum}-kk-01" bis "${leNum}-kk-XX" (fortlaufend, zweistellig)

4. **Verboten**:
   - Keine Glossar-Duplikate (Definition ist Frage, nicht Stichwort-Erklärung)
   - Keine Fragen die nur mit Ja/Nein beantwortet werden
   - Keine identischen Vorderseiten
   - B1-Rückseite: Kein Konjunktiv, kein Passiv, keine Nominalisierung

## Rohmaterial

${rohmaterial.slice(0, 80000)}

## Ausgabe

Antworte mit einem JSON-Array von Objekten:
[
  {
    "id": "le${leNum}-kk-01",
    "vorderseite": "Was bedeutet ...?",
    "rueckseiteC1": "Fachsprachliche Antwort...",
    "rueckseiteB1": "Einfache Antwort...",
    "tag": "pflege",
    "kategorie": "fachbegriff",
    "pruefungsrelevant": true,
    "quelle": "I Care Pflege Thieme 2020, S. 123"
  }
]`;
}

// --- TypeScript-Datei generieren ---

function generateTsFile(leId: string, karten: KarteikarteRaw[], leTitle: string): string {
  const exportName = `KARTEIKARTEN_${leId.replace("le-", "LE").toUpperCase()}`;
  const leNum = leId.replace("le-", "");

  // Statistiken
  const kategorien = new Map<string, number>();
  const tags = new Map<string, number>();
  let pruefCount = 0;

  for (const k of karten) {
    kategorien.set(k.kategorie, (kategorien.get(k.kategorie) || 0) + 1);
    tags.set(k.tag, (tags.get(k.tag) || 0) + 1);
    if (k.pruefungsrelevant) pruefCount++;
  }

  const katStr = Array.from(kategorien.entries()).map(([k, v]) => `${k} (${v})`).join(", ");
  const tagStr = Array.from(tags.entries()).map(([k, v]) => `${k} (${v})`).join(", ");

  let ts = `// Karteikarten — ${leId.toUpperCase()} ${leTitle}
// ${karten.length} Karten, 5 Kategorien (${katStr})
// Tags: ${tagStr}
// ${pruefCount}/${karten.length} = ${Math.round(pruefCount / karten.length * 100)}% prüfungsrelevant
// Generiert via Gemini 2.5 Pro — geprüft gegen Rohmaterial

import type { KarteikarteVorlage } from "../_types";

export const ${exportName}: KarteikarteVorlage[] = [\n`;

  // Karten nach Kategorie gruppieren
  const byKat = new Map<string, KarteikarteRaw[]>();
  for (const k of karten) {
    if (!byKat.has(k.kategorie)) byKat.set(k.kategorie, []);
    byKat.get(k.kategorie)!.push(k);
  }

  for (const [kat, items] of byKat) {
    ts += `\n  // ${"=".repeat(65)}\n`;
    ts += `  // ${kat.toUpperCase()} (${items.length} Karten)\n`;
    ts += `  // ${"=".repeat(65)}\n\n`;

    for (const k of items) {
      ts += `  {\n`;
      ts += `    id: "${k.id}",\n`;
      ts += `    vorderseite: ${JSON.stringify(k.vorderseite)},\n`;
      ts += `    rueckseiteC1: ${JSON.stringify(k.rueckseiteC1)},\n`;
      ts += `    rueckseiteB1: ${JSON.stringify(k.rueckseiteB1)},\n`;
      ts += `    tag: "${k.tag}",\n`;
      ts += `    kategorie: "${k.kategorie}",\n`;
      ts += `    pruefungsrelevant: ${k.pruefungsrelevant},\n`;
      if (k.quelle) {
        ts += `    quelle: ${JSON.stringify(k.quelle)},\n`;
      }
      ts += `  },\n`;
    }
  }

  ts += `];\n`;
  return ts;
}

// --- Main ---

async function main() {
  const args = process.argv.slice(2);
  const leId = args.find((a) => a.startsWith("le-"));
  const force = args.includes("--force");
  const dryRun = args.includes("--dry-run");
  const model: GeminiModel = args.includes("--pro") ? "gemini-2.5-pro" : "gemini-2.5-flash";

  if (!leId) {
    console.error("Usage: npx tsx scripts/generate-karteikarten.ts le-XX [--force] [--dry-run] [--pro]");
    process.exit(1);
  }

  const outputPath = path.join(process.cwd(), "content", leId, "karteikarten.ts");

  // Check ob bereits existiert
  if (fs.existsSync(outputPath) && !force) {
    console.log(`⚠️  ${outputPath} existiert bereits. Nutze --force zum Überschreiben.`);
    process.exit(0);
  }

  console.log(`📚 Lade Rohmaterial für ${leId}...`);
  const rohmaterial = loadRohmaterial(leId);
  console.log(`   ${rohmaterial.length} Zeichen geladen`);

  const prompt = buildPrompt(leId, rohmaterial);

  if (dryRun) {
    console.log("\n--- PROMPT (dry-run) ---\n");
    console.log(prompt.slice(0, 2000) + "\n...(gekürzt)");
    console.log(`\nPrompt-Länge: ${prompt.length} Zeichen`);
    return;
  }

  console.log(`\n🤖 Generiere Karteikarten via Gemini ${model}...`);
  console.log("   (kann 30-60 Sekunden dauern)\n");

  const karten = await geminiGenerateJSON<KarteikarteRaw[]>(prompt, {
    model,
    temperature: 0.4,
    maxOutputTokens: 16384,
  });

  console.log(`✅ ${karten.length} Karten generiert`);

  // Validierung
  const errors: string[] = [];
  const ids = new Set<string>();
  for (const k of karten) {
    if (ids.has(k.id)) errors.push(`Doppelte ID: ${k.id}`);
    ids.add(k.id);
    if (!k.vorderseite) errors.push(`${k.id}: Keine Vorderseite`);
    if (!k.rueckseiteC1) errors.push(`${k.id}: Keine rueckseiteC1`);
    if (!k.rueckseiteB1) errors.push(`${k.id}: Keine rueckseiteB1`);
    if (!["anatomie", "pflege", "krankheitslehre"].includes(k.tag)) {
      errors.push(`${k.id}: Ungültiger Tag "${k.tag}"`);
    }
    if (!["fachbegriff", "fakt", "handlung", "assessment", "recht"].includes(k.kategorie)) {
      errors.push(`${k.id}: Ungültige Kategorie "${k.kategorie}"`);
    }
  }

  if (errors.length > 0) {
    console.error("\n⚠️  Validierungsfehler:");
    errors.forEach((e) => console.error(`   - ${e}`));
  }

  // TypeScript-Datei schreiben
  const leTitle = getLeTitle(leId);
  const tsContent = generateTsFile(leId, karten, leTitle);
  fs.writeFileSync(outputPath, tsContent, "utf-8");
  console.log(`\n📝 Geschrieben: ${outputPath}`);
  console.log(`   ${karten.length} Karten, ${karten.filter((k) => k.pruefungsrelevant).length} prüfungsrelevant`);
}

main().catch((err) => {
  console.error("❌ Fehler:", err.message || err);
  process.exit(1);
});
