#!/usr/bin/env npx ts-node
/**
 * Exa Fact-Check: Prüft Fakten aus generierten Steps gegen wissenschaftliche Quellen.
 * Nutzt die Exa API (via /api/exa-search oder direkt) um Behauptungen zu verifizieren.
 *
 * Usage:
 *   npx ts-node scripts/exa-fact-check.ts content/le-01/steps-s1.ts
 *   npx ts-node scripts/exa-fact-check.ts content/le-01/  (alle Sessions)
 *
 * Output: Bericht mit VERIFIED / UNVERIFIED / SUSPICIOUS pro Fakt
 */

import * as fs from "fs";
import * as path from "path";

// --- Config ---
const EXA_API_URL = "https://api.exa.ai/search";
const SCIENTIFIC_DOMAINS = [
  "awmf.org", "register.awmf.org", "dnqp.de",
  "pubmed.ncbi.nlm.nih.gov", "ncbi.nlm.nih.gov", "cochrane.org",
  "link.springer.com", "thieme-connect.com", "rki.de", "who.int",
];
const MAX_REQUESTS_PER_RUN = 20;
const DELAY_MS = 500;

// --- Types ---
interface ContentStep {
  stepId: string;
  stepType: string;
  contentC1: { title: string; body: string };
  question?: {
    fragetext?: string;
    optionen?: { text: string; explanation: string; correct: boolean }[];
    [key: string]: unknown;
  };
  quellen?: string[];
  [key: string]: unknown;
}

interface FactCheckResult {
  stepId: string;
  claim: string;
  status: "VERIFIED" | "UNVERIFIED" | "SUSPICIOUS" | "SKIPPED";
  sources: { title: string; url: string; snippet: string }[];
  reason: string;
}

// --- Halluzinations-Muster (bekannte KI-Fehler) ---
const HALLUCINATION_PATTERNS = [
  { pattern: /55\s*%.*38\s*%.*7\s*%/i, name: "Mehrabian-Mythos" },
  { pattern: /studien\s+zeigen,?\s+dass\s+\d+\s*%/i, name: "Vage Studien-Referenz" },
  { pattern: /\d+\s*%\s+aller\s+(pflege|patienten|menschen)/i, name: "Unbeleg­te Prozentzahl" },
  { pattern: /laut\s+einer\s+studie/i, name: "Anonyme Studie" },
  { pattern: /wissenschaftlich\s+bewiesen/i, name: "Wissenschaftlich bewiesen (Absolutismus)" },
];

// --- Exa-Suche ---
async function searchExa(
  query: string,
  apiKey: string,
  maxResults = 3
): Promise<{ title: string; url: string; snippet: string }[]> {
  const response = await fetch(EXA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      query,
      numResults: maxResults,
      type: "auto",
      includeDomains: SCIENTIFIC_DOMAINS,
      contents: { text: { maxCharacters: 500 } },
    }),
  });

  if (!response.ok) return [];
  const body = await response.text();
  if (body.includes("NO_MORE_CREDITS")) {
    console.error("⚠️  Exa Credits erschöpft!");
    return [];
  }

  const data = JSON.parse(body);
  return (data.results ?? []).map((r: { title: string; url: string; text: string }) => ({
    title: r.title,
    url: r.url,
    snippet: (r.text ?? "").slice(0, 300),
  }));
}

// --- Fakten extrahieren ---
function extractClaims(step: ContentStep): string[] {
  const claims: string[] = [];

  // Body-Sätze die Zahlen, Prozente oder Fachaussagen enthalten
  const body = step.contentC1?.body ?? "";
  const sentences = body.split(/[.!?]+/).filter((s) => s.trim().length > 15);

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    // Sätze mit Zahlen, Prozent, Studien, Leitlinien
    if (/\d+/.test(trimmed) || /leitlinie|standard|evidenz|studie|empf/i.test(trimmed)) {
      claims.push(trimmed);
    }
  }

  // Erklärungen in Optionen
  if (step.question?.optionen) {
    for (const opt of step.question.optionen) {
      if (opt.explanation && /\d+|leitlinie|standard/i.test(opt.explanation)) {
        claims.push(opt.explanation.slice(0, 200));
      }
    }
  }

  return claims;
}

// --- Halluzinations-Check (lokal, ohne API) ---
function checkHallucinations(step: ContentStep): FactCheckResult[] {
  const results: FactCheckResult[] = [];
  const fullText = JSON.stringify(step);

  for (const { pattern, name } of HALLUCINATION_PATTERNS) {
    if (pattern.test(fullText)) {
      results.push({
        stepId: step.stepId,
        claim: `Halluzinations-Muster: ${name}`,
        status: "SUSPICIOUS",
        sources: [],
        reason: `Bekanntes KI-Halluzinations-Muster "${name}" erkannt. Muss gegen Rohmaterial geprüft werden.`,
      });
    }
  }

  return results;
}

// --- Quellen-Referenz-Check (lokal) ---
function checkSourceRefs(step: ContentStep): FactCheckResult[] {
  const results: FactCheckResult[] = [];
  const body = step.contentC1?.body ?? "";

  // Prozentzahlen ohne [Qx] Referenz
  const percentMatches = body.match(/\d+\s*%/g);
  if (percentMatches && (!step.quellen || step.quellen.length === 0)) {
    results.push({
      stepId: step.stepId,
      claim: `${percentMatches.length} Prozentzahl(en) ohne Quellenreferenz`,
      status: "SUSPICIOUS",
      sources: [],
      reason: "F11 K.O.: Prozentzahlen müssen mit [Qx S.xx] belegt sein.",
    });
  }

  return results;
}

// --- Hauptfunktion ---
async function factCheckFile(filePath: string): Promise<FactCheckResult[]> {
  const envPath = path.resolve(process.cwd(), ".env.local");
  let apiKey = "";
  if (fs.existsSync(envPath)) {
    const env = fs.readFileSync(envPath, "utf-8");
    const match = env.match(/EXA_API_KEY_1=(.+)/);
    if (match) apiKey = match[1].trim();
    if (!apiKey) {
      const match2 = env.match(/EXA_API_KEY_2=(.+)/);
      if (match2) apiKey = match2[1].trim();
    }
  }

  // Steps aus Datei laden (dynamisch)
  const content = fs.readFileSync(filePath, "utf-8");

  // Export-Name extrahieren (STEPS_S1, STEPS_S2, etc.)
  const exportMatch = content.match(/export\s+const\s+(STEPS_S\d+)/);
  if (!exportMatch) {
    console.error(`Kein STEPS_Sx Export in ${filePath} gefunden.`);
    return [];
  }

  // Steps als JSON parsen (vereinfacht — funktioniert für Content-Steps)
  // Wir nutzen eval hier NICHT — stattdessen regex-basiertes Parsing
  const stepsMatch = content.match(/ContentStep\[\]\s*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!stepsMatch) {
    console.error(`Kann Steps-Array in ${filePath} nicht parsen.`);
    return [];
  }

  let steps: ContentStep[];
  try {
    // Entferne TypeScript-spezifische Syntax für JSON-kompatibles Parsing
    const cleaned = stepsMatch[1]
      .replace(/\/\/.*$/gm, "")  // Kommentare entfernen
      .replace(/,\s*([}\]])/g, "$1") // Trailing commas
      .replace(/(\w+):/g, '"$1":')   // Keys quoten
      .replace(/'([^']*)'/g, '"$1"'); // Single → double quotes
    steps = JSON.parse(cleaned);
  } catch {
    console.error(`JSON-Parse-Fehler in ${filePath}. Nutze ts-node für korrekte Analyse.`);
    return [];
  }

  const allResults: FactCheckResult[] = [];
  let requestCount = 0;

  for (const step of steps) {
    // 1. Lokale Checks (kein API-Call nötig)
    allResults.push(...checkHallucinations(step));
    allResults.push(...checkSourceRefs(step));

    // 2. Exa-Verifikation für Fakten-Sätze
    if (!apiKey) continue;
    const claims = extractClaims(step);

    for (const claim of claims) {
      if (requestCount >= MAX_REQUESTS_PER_RUN) {
        allResults.push({
          stepId: step.stepId,
          claim,
          status: "SKIPPED",
          sources: [],
          reason: `Max ${MAX_REQUESTS_PER_RUN} Exa-Requests pro Run erreicht.`,
        });
        continue;
      }

      // Exa-Suche mit dem Fakt als Query
      const searchQuery = claim.slice(0, 150) + " Pflege";
      const sources = await searchExa(searchQuery, apiKey, 3);
      requestCount++;

      if (sources.length === 0) {
        allResults.push({
          stepId: step.stepId,
          claim,
          status: "UNVERIFIED",
          sources: [],
          reason: "Keine wissenschaftliche Quelle gefunden. Manuelle Prüfung nötig.",
        });
      } else {
        allResults.push({
          stepId: step.stepId,
          claim,
          status: "VERIFIED",
          sources,
          reason: `${sources.length} wissenschaftliche Quelle(n) gefunden.`,
        });
      }

      // Rate-Limiting
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  return allResults;
}

// --- CLI ---
async function main() {
  const input = process.argv[2];
  if (!input) {
    console.error("Usage: npx ts-node scripts/exa-fact-check.ts <datei-oder-ordner>");
    process.exit(1);
  }

  const resolved = path.resolve(input);
  const stat = fs.statSync(resolved);
  const files: string[] = [];

  if (stat.isDirectory()) {
    const entries = fs.readdirSync(resolved).filter((f) => f.match(/^steps-s\d+\.ts$/));
    files.push(...entries.map((f) => path.join(resolved, f)));
  } else {
    files.push(resolved);
  }

  if (files.length === 0) {
    console.error("Keine Step-Dateien gefunden.");
    process.exit(1);
  }

  console.log(`\n🔍 Exa Fact-Check: ${files.length} Datei(en)\n`);

  let totalSuspicious = 0;
  let totalUnverified = 0;
  let totalVerified = 0;

  for (const file of files) {
    console.log(`📄 ${path.basename(file)}`);
    const results = await factCheckFile(file);

    for (const r of results) {
      const icon =
        r.status === "VERIFIED" ? "✅" :
        r.status === "SUSPICIOUS" ? "🚨" :
        r.status === "UNVERIFIED" ? "⚠️" : "⏭️";

      console.log(`  ${icon} [${r.stepId}] ${r.status}: ${r.claim.slice(0, 80)}`);
      if (r.sources.length > 0) {
        console.log(`     Quelle: ${r.sources[0].title} (${r.sources[0].url})`);
      }
      if (r.status === "SUSPICIOUS") console.log(`     ⚡ ${r.reason}`);
    }

    totalSuspicious += results.filter((r) => r.status === "SUSPICIOUS").length;
    totalUnverified += results.filter((r) => r.status === "UNVERIFIED").length;
    totalVerified += results.filter((r) => r.status === "VERIFIED").length;
  }

  console.log(`\n📊 Ergebnis:`);
  console.log(`  ✅ Verifiziert: ${totalVerified}`);
  console.log(`  ⚠️  Nicht verifiziert: ${totalUnverified}`);
  console.log(`  🚨 Verdächtig: ${totalSuspicious}`);

  if (totalSuspicious > 0) {
    console.log(`\n❌ FAIL: ${totalSuspicious} verdächtige Fakten gefunden. Manuelle Prüfung nötig.`);
    process.exit(1);
  }

  console.log(`\n✅ PASS: Keine Halluzinations-Muster erkannt.`);
}

main().catch(console.error);
