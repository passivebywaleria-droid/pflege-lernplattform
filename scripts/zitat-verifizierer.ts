/**
 * zitat-verifizierer.ts — Phase-1-Härtung (Roadmap 1.3)
 *
 * Prüft, ob ein wörtliches Zitat (`woertlichesZitat`) eines Kernfakt-Belegs
 * tatsächlich in der zitierten Quelldatei (recherche/) steht — per String-Match.
 * Deterministisch, billig, kein KI-Ermessen. Fängt Paraphrasen-Drift an der
 * Entstehungsstelle (Kernfakten-Recherche).
 *
 * Beleg-Format (Rev. 2): { werk, quelldatei, woertlichesZitat, primaerquelle }
 * KEINE Seitenzahl — recherche/-Extrakte sind chapter-level ohne verlässliche
 * Seiten; das Verbatim-Zitat ist der maschinell prüfbare Anker.
 *
 * Usage:
 *   npx tsx scripts/zitat-verifizierer.ts --self-test
 *   npx tsx scripts/zitat-verifizierer.ts <quelldatei> "<zitat>"
 */
import { readFileSync } from "fs";
import { join } from "path";

/** Normalisiert Text für robustes Matching trotz messy PDF-Extraktion:
 *  - Markdown-Auszeichnung (**, *, `, |, #) raus
 *  - Whitespace/Zeilenumbrüche zu einem Space
 *  - Anführungs-Varianten vereinheitlicht, lowercase */
export function normalize(s: string): string {
  return s
    .replace(/[*`#|>]/g, " ")
    .replace(/[„“”»«"']/g, '"')
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

export interface Beleg {
  werk: string;
  quelldatei: string; // relativ zu recherche/
  woertlichesZitat: string;
  primaerquelle?: string;
}

export interface VerifyResult {
  ok: boolean;
  grund: string;
  quelldatei: string;
}

export function verifyZitat(beleg: Beleg, rechercheRoot = "recherche"): VerifyResult {
  const pfad = join(rechercheRoot, beleg.quelldatei);
  let inhalt: string;
  try {
    inhalt = readFileSync(pfad, "utf8");
  } catch {
    return { ok: false, grund: `Quelldatei nicht gefunden: ${pfad}`, quelldatei: beleg.quelldatei };
  }
  const hay = normalize(inhalt);
  const needle = normalize(beleg.woertlichesZitat);
  if (needle.length < 12) {
    return { ok: false, grund: "Zitat zu kurz (<12 Zeichen normalisiert) — nicht eindeutig", quelldatei: beleg.quelldatei };
  }
  if (hay.includes(needle)) {
    return { ok: true, grund: "Verbatim-Match in Quelldatei", quelldatei: beleg.quelldatei };
  }
  // Teilmatch-Diagnose: längster gemeinsamer Wort-Lauf
  const words = needle.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j <= words.length; j++) {
      const sub = words.slice(i, j).join(" ");
      if (sub.length > longest.length && hay.includes(sub)) longest = sub;
    }
  }
  const quote = longest.length > 0 ? Math.round((longest.length / needle.length) * 100) : 0;
  return {
    ok: false,
    grund: `Kein Verbatim-Match. Längster Teil-Treffer ${quote}%: "${longest.slice(0, 80)}"`,
    quelldatei: beleg.quelldatei,
  };
}

// ─── CLI / Self-Test ───
const arg = process.argv[2];
if (arg === "--self-test") {
  // Echte Fakten aus specs/ce-02/kernfakten/sturz-prophylaxe.md gegen
  // recherche/expertenstandards-index/sturzprophylaxe.md
  const tests: Beleg[] = [
    {
      werk: "DNQP Expertenstandard Sturzprophylaxe (2. Akt. 2022)",
      quelldatei: "expertenstandards-index/sturzprophylaxe.md",
      woertlichesZitat: "KEIN einzelnes Instrument wird empfohlen",
      primaerquelle: "(DNQP 2022)",
    },
    {
      werk: "DNQP Expertenstandard Sturzprophylaxe",
      quelldatei: "expertenstandards-index/sturzprophylaxe.md",
      woertlichesZitat: "Klinische Einschätzung (multifaktorielle Analyse)",
    },
    {
      werk: "Negativ-Kontrolle (erfundenes Zitat)",
      quelldatei: "expertenstandards-index/sturzprophylaxe.md",
      woertlichesZitat: "Bettgitter sind die wirksamste Sturzprophylaxe bei Demenz",
    },
  ];
  console.log("═".repeat(60));
  console.log("ZITAT-VERIFIZIERER — Self-Test (sturz-prophylaxe)");
  console.log("═".repeat(60));
  let pass = 0;
  for (const t of tests) {
    const r = verifyZitat(t);
    const erwartet = t.werk.startsWith("Negativ") ? !r.ok : r.ok;
    if (erwartet) pass++;
    console.log(`\n${erwartet ? "✅" : "❌"} ${t.werk}`);
    console.log(`   Zitat: "${t.woertlichesZitat}"`);
    console.log(`   → ${r.ok ? "MATCH" : "KEIN MATCH"} — ${r.grund}`);
  }
  console.log(`\n${"─".repeat(60)}`);
  console.log(`Erwartetes Verhalten: ${pass}/${tests.length} (2 Matches + 1 korrekte Ablehnung)`);
} else if (arg) {
  const r = verifyZitat({ werk: "CLI", quelldatei: arg, woertlichesZitat: process.argv[3] ?? "" });
  console.log(`${r.ok ? "✅ MATCH" : "❌ KEIN MATCH"} — ${r.grund}`);
  process.exit(r.ok ? 0 : 1);
} else {
  console.log("Usage: zitat-verifizierer.ts --self-test  |  <quelldatei> \"<zitat>\"");
}
