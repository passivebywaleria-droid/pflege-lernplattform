#!/usr/bin/env npx tsx
/**
 * pick-review-sample.ts
 *
 * Erstellt eine Review-Checkliste für menschliche Stichproben-Prüfung.
 *
 * Pipeline v9 definiert 2 Review-Punkte:
 * - Review #1 (nach Dozentin B Phase 1): Lernziele + Bausteine prüfen
 * - Review #2 (vor Published): Steps durchspielen
 *
 * Strategie (Option D aus D3):
 * - Erste CE (CE-02) → 100% prüfen (Kalibrierung)
 * - Ab CE-03 → Mix: Pflicht-Checks + 10-20% Zufall
 *
 * Usage:
 *   npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 1
 *   npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 2
 *   npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 2 --situation sturz-prophylaxe
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, resolve } from "path";

// ─── Config ──────────────────────────────────────────────────────────────

/** CEs die zu 100% geprüft werden (Kalibrierung) */
const FULL_REVIEW_CES = ["ce-02"];

/** Pflicht-Check-Trigger für Review #2 */
const CRITICAL_STEP_TYPES = [
  "freetext", // Am schwierigsten qualitativ
  "reflection", // Offen, braucht Tiefe
  "branching", // Entscheidungswege
  "dialog", // Sprachqualität wichtig
  "roleplay",
  "chatsim",
];

const CRITICAL_BLOOM_LEVELS = [5, 6];

/** Sensible Themen (immer prüfen) */
const SENSIBLE_THEMEN_KEYWORDS = [
  "medikament",
  "dosier",
  "notfall",
  "reanimation",
  "palliativ",
  "fixierung",
  "schmerz",
  "sterben",
  "dokument",
];

// ─── Seeded RNG ──────────────────────────────────────────────────────────

function seedFromString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function makeRng(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

// ─── Daten-Strukturen ────────────────────────────────────────────────────

interface ReviewItem {
  id: string;
  type: "baustein" | "step" | "thema" | "situation";
  themaId?: string;
  situationId?: string;
  phase?: string;
  stepType?: string;
  bloomLevel?: number;
  triggerReason: string; // Warum auf Liste: "pflicht: freetext" / "pflicht: bloom 6" / "zufall"
  priority: "pflicht" | "stichprobe";
}

// ─── File-Scanning ───────────────────────────────────────────────────────

function scanBausteine(themaPath: string, themaId: string): ReviewItem[] {
  const items: ReviewItem[] = [];
  const bausteinePlan = join(themaPath, "bausteine-plan.md");
  if (!existsSync(bausteinePlan)) return items;

  const content = readFileSync(bausteinePlan, "utf-8");

  // Simple regex-based baustein-extraction
  const bausteinRegex = /## Baustein \d+: ([^\n]+)[\s\S]*?bausteinId: ([^\s\n]+)[\s\S]*?bloomLevel:\*?\*?\s*(\d)/g;
  let m;
  while ((m = bausteinRegex.exec(content)) !== null) {
    const [, titel, bausteinId, bloomStr] = m;
    const bloom = parseInt(bloomStr, 10);
    const isSensibel = SENSIBLE_THEMEN_KEYWORDS.some((k) => titel.toLowerCase().includes(k));
    const isCriticalBloom = CRITICAL_BLOOM_LEVELS.includes(bloom);

    let priority: "pflicht" | "stichprobe" = "stichprobe";
    let reason = "zufall";

    if (isCriticalBloom) {
      priority = "pflicht";
      reason = `pflicht: Bloom ${bloom} (komplex)`;
    } else if (isSensibel) {
      priority = "pflicht";
      reason = `pflicht: sensibles Thema`;
    }

    items.push({
      id: bausteinId,
      type: "baustein",
      themaId,
      bloomLevel: bloom,
      triggerReason: reason,
      priority,
    });
  }

  return items;
}

function scanSituation(
  situationPath: string,
  situationId: string,
): { items: ReviewItem[]; patientInfo?: string } {
  const items: ReviewItem[] = [];

  // Phasen-Dateien scannen
  const phases = [
    "informieren",
    "beobachten",
    "planen",
    "durchfuehren",
    "evaluieren",
    "dokumentieren",
  ];

  for (const phase of phases) {
    const phaseFile = join(situationPath, `phase-${phase}.ts`);
    if (!existsSync(phaseFile)) continue;

    const content = readFileSync(phaseFile, "utf-8");

    // Step-Extraktion (simpel, regex)
    const stepRegex = /stepId:\s*"([^"]+)"[\s\S]*?stepType:\s*"([^"]+)"(?:[\s\S]*?bloomLevel:\s*(\d))?/g;
    let m;
    let stepCount = 0;
    while ((m = stepRegex.exec(content)) !== null) {
      stepCount++;
      const [, stepId, stepType, bloomStr] = m;
      const bloom = bloomStr ? parseInt(bloomStr, 10) : 0;

      let priority: "pflicht" | "stichprobe" = "stichprobe";
      let reason = "zufall";

      if (CRITICAL_STEP_TYPES.includes(stepType)) {
        priority = "pflicht";
        reason = `pflicht: ${stepType}`;
      } else if (CRITICAL_BLOOM_LEVELS.includes(bloom)) {
        priority = "pflicht";
        reason = `pflicht: Bloom ${bloom}`;
      } else if (stepCount <= 2) {
        // Erste 1-2 Steps jeder Phase als Pflicht (Einstieg)
        priority = "pflicht";
        reason = `pflicht: Phasen-Einstieg`;
      }

      items.push({
        id: stepId,
        type: "step",
        situationId,
        phase,
        stepType,
        bloomLevel: bloom,
        triggerReason: reason,
        priority,
      });
    }
  }

  return { items };
}

// ─── Stichprobe: Zufallsauswahl aus non-pflicht ──────────────────────────

function addRandomSample(
  items: ReviewItem[],
  sampleRate: number,
  ceId: string,
): ReviewItem[] {
  const nonPflicht = items.filter((i) => i.priority === "stichprobe");
  const pflicht = items.filter((i) => i.priority === "pflicht");

  const targetCount = Math.round(nonPflicht.length * sampleRate);
  const rng = makeRng(seedFromString(ceId));

  // Shuffle non-pflicht und nimm die ersten N
  const shuffled = [...nonPflicht].sort(() => rng() - 0.5);
  const sample = shuffled.slice(0, targetCount);
  const rest = shuffled.slice(targetCount);

  // Non-sampled markieren wir als "skip" (nicht auf Liste)
  for (const i of rest) {
    i.priority = "stichprobe";
    i.triggerReason = "skip";
  }

  return [...pflicht, ...sample];
}

// ─── Output-Markdown-Generator ───────────────────────────────────────────

function generateMarkdown(
  items: ReviewItem[],
  ceId: string,
  reviewType: 1 | 2,
  scope: string,
): string {
  const pflicht = items.filter((i) => i.priority === "pflicht");
  const stichprobe = items.filter((i) => i.priority === "stichprobe" && i.triggerReason !== "skip");

  const estimateMin = reviewType === 1 ? 3 : 5; // Min pro Item
  const totalMin = (pflicht.length + stichprobe.length) * estimateMin;

  let md = `# Review #${reviewType} — ${ceId} — ${scope}\n\n`;
  md += `**Erstellt:** ${new Date().toISOString().slice(0, 10)}\n\n`;
  md += `**Review-Typ:** ${reviewType === 1 ? "Review #1 (Lernziele/Bausteine nach Dozentin B)" : "Review #2 (Steps vor Published)"}\n\n`;
  md += `**Scope:** ${scope}\n\n`;
  md += `**Geschätzte Zeit:** ${Math.round(totalMin / 60)}h ${totalMin % 60} Min\n\n`;
  md += `---\n\n`;

  md += `## Pflicht-Checks (${pflicht.length})\n\n`;
  md += `Diese MÜSSEN geprüft werden — kritische Bereiche.\n\n`;

  for (const item of pflicht) {
    const loc = item.phase
      ? `${item.situationId} / Phase ${item.phase}`
      : item.themaId || item.situationId || "—";
    md += `- [ ] **${item.id}** (${item.type}) — ${loc} — ${item.triggerReason}\n`;
    if (item.stepType) md += `  - Step-Typ: \`${item.stepType}\`${item.bloomLevel ? ` | Bloom ${item.bloomLevel}` : ""}\n`;
  }

  md += `\n## Stichprobe (${stichprobe.length})\n\n`;
  md += `Zufallsauswahl aus unkritischen Items (Seed: \`${ceId}\`).\n\n`;

  for (const item of stichprobe) {
    const loc = item.phase
      ? `${item.situationId} / Phase ${item.phase}`
      : item.themaId || item.situationId || "—";
    md += `- [ ] **${item.id}** (${item.type}) — ${loc}\n`;
    if (item.stepType) md += `  - Step-Typ: \`${item.stepType}\`${item.bloomLevel ? ` | Bloom ${item.bloomLevel}` : ""}\n`;
  }

  md += `\n---\n\n`;
  md += `## Review-Kriterien\n\n`;

  if (reviewType === 1) {
    md += `Pro Baustein prüfen:\n\n`;
    md += `1. **Lernziel handlungsorientiert?** (z.B. "wählt korrekte Prophylaxe" statt "kennt Prophylaxe")\n`;
    md += `2. **Bloom-Level passt zum Lernziel?** (Bloom 1 = Erinnern, Bloom 5 = Bewerten)\n`;
    md += `3. **Misconceptions sind typische Fehler?** (nicht zufällig-falsch)\n`;
    md += `4. **Baustein-Granularität sinnvoll?** (nicht zu grob, nicht zu fein)\n`;
    md += `5. **Quelle angegeben + Primärquelle?** (keine Buch-Seiten als Zitat)\n\n`;
  } else {
    md += `Pro Step durchspielen (als Schüler):\n\n`;
    md += `1. **Fühlt sich der Step didaktisch richtig an?**\n`;
    md += `2. **Sind Distraktoren sinnvoll?** (adressieren echte Misconceptions)\n`;
    md += `3. **Ist Feedback spezifisch?** (nicht nur "Richtig/Falsch")\n`;
    md += `4. **Passt Step-Typ zum Lernziel?** (Bloom-Match)\n`;
    md += `5. **Ist Abwechslung gut?** (nicht 3× dasselbe)\n`;
    md += `6. **Sprache B1-tauglich?** (wenn B1-Version vorhanden)\n\n`;
  }

  md += `---\n\n`;
  md += `## Entscheidung\n\n`;
  md += `- [ ] **GO** — Alle Pflicht-Checks PASS, Stichprobe max 2 kleinere Issues\n`;
  md += `- [ ] **NO-GO** — Notizen unten, zurück zu ${reviewType === 1 ? "Dozentin B" : "Regisseur/Generator"}\n\n`;

  md += `## Notizen\n\n`;
  md += `_Freies Feedback zur Qualität, spezifische Probleme, Verbesserungsvorschläge_\n\n`;

  return md;
}

// ─── Main ────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const ceIdx = args.indexOf("--ce");
  const reviewIdx = args.indexOf("--review");
  const sitIdx = args.indexOf("--situation");
  const themaIdx = args.indexOf("--thema");

  if (ceIdx === -1 || reviewIdx === -1) {
    console.error(
      "Usage: npx tsx scripts/pick-review-sample.ts --ce ce-02 --review 1|2 [--thema sturz-prophylaxe] [--situation xyz]",
    );
    process.exit(1);
  }

  const ceId = args[ceIdx + 1];
  const reviewType = parseInt(args[reviewIdx + 1], 10) as 1 | 2;
  const specificSituation = sitIdx !== -1 ? args[sitIdx + 1] : null;
  const specificThema = themaIdx !== -1 ? args[themaIdx + 1] : null;

  const cePath = resolve(process.cwd(), "content", ceId);
  if (!existsSync(cePath)) {
    console.error(`CE-Pfad nicht gefunden: ${cePath}`);
    process.exit(1);
  }

  let allItems: ReviewItem[] = [];
  let scope = "";

  if (reviewType === 1) {
    // Review #1: Bausteine aus Themen
    const themenPath = join(cePath, "themen");
    if (!existsSync(themenPath)) {
      console.error(`Keine Themen gefunden: ${themenPath}`);
      process.exit(1);
    }

    const themen = readdirSync(themenPath).filter((d) => statSync(join(themenPath, d)).isDirectory());
    const targetThemen = specificThema ? [specificThema] : themen;

    for (const themaId of targetThemen) {
      const themaPath = join(themenPath, themaId);
      if (!existsSync(themaPath)) continue;
      const bausteine = scanBausteine(themaPath, themaId);
      allItems.push(...bausteine);
    }

    scope = specificThema ? `Thema: ${specificThema}` : `Alle Themen (${targetThemen.length})`;
  } else {
    // Review #2: Steps aus Situationen
    const sitPath = join(cePath, "situationen");
    if (!existsSync(sitPath)) {
      console.error(`Keine Situationen gefunden: ${sitPath}`);
      process.exit(1);
    }

    const situationen = readdirSync(sitPath).filter((d) =>
      statSync(join(sitPath, d)).isDirectory(),
    );
    const targetSit = specificSituation ? [specificSituation] : situationen;

    for (const situationId of targetSit) {
      const situationPath = join(sitPath, situationId);
      const { items } = scanSituation(situationPath, situationId);
      allItems.push(...items);
    }

    scope = specificSituation ? `Situation: ${specificSituation}` : `Alle Situationen (${targetSit.length})`;
  }

  // Zufalls-Sampling (außer bei FULL_REVIEW_CES = 100%)
  const sampleRate = FULL_REVIEW_CES.includes(ceId) ? 1.0 : 0.15;
  allItems = addRandomSample(allItems, sampleRate, ceId);

  // Markdown generieren
  const md = generateMarkdown(allItems, ceId, reviewType, scope);

  const outputFile = join(
    cePath,
    "reports",
    `review-${reviewType}-${specificSituation || specificThema || "alle"}.md`,
  );

  // reports/ Ordner erstellen falls nötig
  const reportsDir = join(cePath, "reports");
  if (!existsSync(reportsDir)) {
    import("fs").then(({ mkdirSync }) => mkdirSync(reportsDir, { recursive: true }));
  }

  writeFileSync(outputFile, md);

  console.log(`\n=== Review #${reviewType} Sample erstellt ===`);
  console.log(`Scope: ${scope}`);
  console.log(`Items gesamt: ${allItems.length}`);
  console.log(
    `  - Pflicht: ${allItems.filter((i) => i.priority === "pflicht").length}`,
  );
  console.log(
    `  - Stichprobe: ${allItems.filter((i) => i.priority === "stichprobe" && i.triggerReason !== "skip").length}`,
  );
  console.log(`Sample-Rate: ${Math.round(sampleRate * 100)}%`);
  console.log(`\nOutput: ${outputFile}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { scanBausteine, scanSituation, generateMarkdown };
