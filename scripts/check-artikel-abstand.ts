#!/usr/bin/env npx tsx
/**
 * Prüft ob Artikel-Texte "hinreichenden Abstand" zu I Care Originalen haben.
 * Findet wörtliche Übernahmen (N-Gramm-Vergleich) und warnt bei zu hoher Ähnlichkeit.
 *
 * Usage: npx tsx scripts/check-artikel-abstand.ts le-01
 */

import * as fs from "fs";
import * as path from "path";

const leId = process.argv[2];
if (!leId) {
  console.log("Usage: npx tsx scripts/check-artikel-abstand.ts <le-id>");
  process.exit(1);
}

// ── Konfiguration ──
const MIN_NGRAM = 5;        // Ab 5 Wörter am Stück = Treffer
const WARN_THRESHOLD = 3;   // Ab 3 Treffern pro Block = Warnung
const FAIL_THRESHOLD = 6;   // Ab 6 Treffern pro Block = FAIL

// ── I Care Extrakte laden ──
const icareDir = path.resolve(__dirname, "..", "recherche", "icare-index");
const quellenMd = path.resolve(__dirname, "..", "content", leId, "icare-quellen.md");

function loadIcareTexts(): string[] {
  const texts: string[] = [];

  // 1. icare-quellen.md im LE-Ordner (LE-spezifische Extrakte)
  if (fs.existsSync(quellenMd)) {
    texts.push(fs.readFileSync(quellenMd, "utf-8"));
  }

  // 2. icare-index — alle Kapitel als Referenz (generisch für jede LE)
  if (fs.existsSync(icareDir)) {
    const files = fs.readdirSync(icareDir).filter(f => f.endsWith(".md") && f !== "README.md");
    for (const f of files) {
      texts.push(fs.readFileSync(path.join(icareDir, f), "utf-8"));
    }
  }

  return texts;
}

// ── N-Gramm-Extraktion ──
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[„""»«]/g, "")
    .replace(/[^\wäöüß\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractNgrams(text: string, n: number): Set<string> {
  const words = normalizeText(text).split(" ").filter(w => w.length > 0);
  const ngrams = new Set<string>();
  for (let i = 0; i <= words.length - n; i++) {
    ngrams.add(words.slice(i, i + n).join(" "));
  }
  return ngrams;
}

// ── Hauptlogik ──
console.log(`\n${"═".repeat(60)}`);
console.log(`  ABSTANDSTEST: ${leId.toUpperCase()} — Artikel vs. I Care`);
console.log("═".repeat(60));

const icareTexts = loadIcareTexts();
if (icareTexts.length === 0) {
  console.log("  ⚠️  Keine I Care Extrakte gefunden — Test übersprungen");
  process.exit(0);
}

// Alle I Care N-Gramme sammeln
const icareNgrams = new Set<string>();
for (const text of icareTexts) {
  for (const ng of extractNgrams(text, MIN_NGRAM)) {
    icareNgrams.add(ng);
  }
}
console.log(`  I Care Referenz: ${icareNgrams.size} ${MIN_NGRAM}-Gramme aus ${icareTexts.length} Dateien\n`);

// Artikel laden
const artikelPath = path.join(path.resolve(__dirname, "..", "content", leId), "artikel.ts");
if (!fs.existsSync(artikelPath)) {
  console.log("  ❌ artikel.ts nicht gefunden");
  process.exit(1);
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const mod = require(artikelPath);
const key = Object.keys(mod).find(k => k.includes("ARTIKEL"));
if (!key) {
  console.log("  ❌ Kein ARTIKEL-Export gefunden");
  process.exit(1);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const kapitel: any[] = mod[key];

interface BlockResult {
  kapitelTitel: string;
  blockIndex: number;
  blockType: string;
  matches: string[];
  level: "ok" | "warn" | "fail";
}

const results: BlockResult[] = [];
let totalMatches = 0;
let failCount = 0;

for (const kap of kapitel) {
  const bloecke = kap.bloecke || [];
  for (let i = 0; i < bloecke.length; i++) {
    const block = bloecke[i];

    // Beide Sprachversionen prüfen
    const textsToCheck = [block.contentC1, block.contentB1].filter(Boolean);
    const allMatches: string[] = [];

    for (const text of textsToCheck) {
      const artikelNgrams = extractNgrams(text, MIN_NGRAM);
      for (const ng of artikelNgrams) {
        if (icareNgrams.has(ng)) {
          allMatches.push(ng);
        }
      }
    }

    // Deduplizieren (überlappende N-Gramme)
    const uniqueMatches = [...new Set(allMatches)];
    totalMatches += uniqueMatches.length;

    const level = uniqueMatches.length >= FAIL_THRESHOLD ? "fail"
      : uniqueMatches.length >= WARN_THRESHOLD ? "warn" : "ok";

    if (level === "fail") failCount++;

    results.push({
      kapitelTitel: kap.titel || kap.kapitelId,
      blockIndex: i,
      blockType: block.type,
      matches: uniqueMatches,
      level,
    });

    const icon = level === "fail" ? "❌" : level === "warn" ? "⚠️ " : "✅";
    if (level !== "ok") {
      console.log(`  ${icon} ${kap.kapitelId} Block ${i} (${block.type}): ${uniqueMatches.length} Übereinstimmungen`);
      for (const m of uniqueMatches.slice(0, 5)) {
        console.log(`      "${m}"`);
      }
      if (uniqueMatches.length > 5) {
        console.log(`      ... +${uniqueMatches.length - 5} weitere`);
      }
    }
  }
}

// ── Ergebnis ──
console.log(`\n${"═".repeat(60)}`);

const okBlocks = results.filter(r => r.level === "ok").length;
const warnBlocks = results.filter(r => r.level === "warn").length;
const failBlocks = results.filter(r => r.level === "fail").length;

console.log(`  ${results.length} Blöcke geprüft | ${totalMatches} Übereinstimmungen gesamt`);
console.log(`  ✅ OK: ${okBlocks} | ⚠️  Warnung: ${warnBlocks} | ❌ FAIL: ${failBlocks}`);

if (failCount > 0) {
  console.log(`\n  ❌ ${failCount} BLÖCKE MIT ZU HOHER I-CARE-ÄHNLICHKEIT`);
  console.log(`     → Diese Blöcke müssen umgeschrieben werden.`);
} else if (warnBlocks > 0) {
  console.log(`\n  ⚠️  ${warnBlocks} Blöcke mit leichter Ähnlichkeit — manuell prüfen`);
} else {
  console.log(`\n  ✅ ALLE BLÖCKE BESTEHEN DEN ABSTANDSTEST`);
}

console.log("═".repeat(60));
process.exit(failCount > 0 ? 1 : 0);
