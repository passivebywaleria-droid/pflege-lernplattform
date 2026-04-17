#!/usr/bin/env npx tsx
/**
 * Pipeline-Checklist — Interaktiver Runner für die Content-Pipeline.
 *
 * Prüft wo eine LE in der Pipeline steht und zeigt den nächsten Schritt.
 * Kein Agent-Spawning, nur deterministische Checks + klare Anweisungen.
 *
 * Usage:
 *   npx tsx scripts/pipeline-checklist.ts le-02
 *   npx tsx scripts/pipeline-checklist.ts le-06
 *   npx tsx scripts/pipeline-checklist.ts --all       # Status aller LEs
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const target = process.argv[2];
if (!target) {
  console.log("Usage: npx tsx scripts/pipeline-checklist.ts <le-id|--all>");
  process.exit(1);
}

const contentDir = path.resolve(__dirname, "..", "content");

// ── Types ──

interface ManifestEntry {
  leId: string;
  ceId: string;
  title: string;
  titleShort: string;
  status: string;
  sessions: string[];
  [key: string]: unknown;
}

interface PipelineStatus {
  leId: string;
  currentStatus: string;
  nextStep: string;
  nextAgent: string;
  nextCommand: string;
  checks: CheckResult[];
  blockers: string[];
}

interface CheckResult {
  name: string;
  passed: boolean;
  detail: string;
}

// ── Manifest Loader ──

function loadManifest(): ManifestEntry[] {
  const manifestPath = path.join(contentDir, "_manifest.ts");
  const mod = require(manifestPath);
  return mod.LE_MANIFEST as ManifestEntry[];
}

// ── File Checks ──

function fileExists(leId: string, filename: string): boolean {
  return fs.existsSync(path.join(contentDir, leId, filename));
}

function countFiles(leId: string, pattern: RegExp): number {
  const leDir = path.join(contentDir, leId);
  if (!fs.existsSync(leDir)) return 0;
  return fs.readdirSync(leDir).filter((f) => pattern.test(f)).length;
}

// ── Pipeline Status Check ──

function checkPipelineStatus(entry: ManifestEntry): PipelineStatus {
  const leId = entry.leId;
  const checks: CheckResult[] = [];
  const blockers: string[] = [];

  // Phase 1: Rohmaterial
  const hasRohmaterialMd = fileExists(leId, "rohmaterial.md") || fileExists(leId, "rohmaterial-v3.md");
  const hasRohmaterialJson = fileExists(leId, "rohmaterial.json");
  checks.push({ name: "Rohmaterial (.md)", passed: hasRohmaterialMd, detail: hasRohmaterialMd ? "vorhanden" : "fehlt" });
  checks.push({ name: "Rohmaterial (.json)", passed: hasRohmaterialJson, detail: hasRohmaterialJson ? "vorhanden" : "fehlt" });

  // Phase 2: Plan-Dateien
  const planFiles = ["artikel-plan.md", "glossar-plan.md", "karteikarten-plan.md", "lern-snack-plan.md", "steps-plan.md", "fall-plan.md", "praxis-plan.md", "pruefung-plan.md"];
  const planCount = planFiles.filter((f) => fileExists(leId, f)).length;
  checks.push({ name: "Plan-Dateien", passed: planCount === 8, detail: `${planCount}/8` });

  // Phase 3: TypeScript-Dateien
  const tsFiles = ["metadata.ts", "artikel.ts", "glossar.ts", "karteikarten.ts", "lern-snack.ts", "fallverlaeufe.ts", "praxis.ts", "pruefungsfall.ts", "index.ts"];
  const tsCount = tsFiles.filter((f) => fileExists(leId, f)).length;
  const stepCount = countFiles(leId, /^steps-s\d+\.ts$/);
  checks.push({ name: "TS-Dateien", passed: tsCount >= 8, detail: `${tsCount}/9 + ${stepCount} steps-s*.ts` });

  // Phase 4: Quality-Report
  const hasQualityReport = fileExists(leId, "quality-report.json");
  let qualityPass = false;
  if (hasQualityReport) {
    try {
      const report = JSON.parse(fs.readFileSync(path.join(contentDir, leId, "quality-report.json"), "utf-8"));
      qualityPass = report.verdict === "PASS";
    } catch { /* ignore */ }
  }
  checks.push({ name: "Quality-Gate", passed: qualityPass, detail: hasQualityReport ? (qualityPass ? "PASS" : "FAIL") : "nicht gelaufen" });

  // Phase 5: Prüfbericht
  const hasPruefbericht = fileExists(leId, "pruefbericht.md");
  checks.push({ name: "Prüfbericht", passed: hasPruefbericht, detail: hasPruefbericht ? "vorhanden" : "fehlt" });

  // Determine next step based on status
  let nextStep = "";
  let nextAgent = "";
  let nextCommand = "";

  switch (entry.status) {
    case "rohmaterial":
      if (planCount === 0) {
        nextStep = "Dozentin Phase 2: 8 Plan-Dateien erstellen";
        nextAgent = "dozentin.md (Opus)";
        nextCommand = "Agent: dozentin → Phase 2 für " + leId;
      } else if (planCount < 8) {
        nextStep = `Dozentin Phase 2: ${8 - planCount} Plan-Dateien fehlen noch`;
        nextAgent = "dozentin.md (Opus)";
        nextCommand = "Agent: dozentin → fehlende Plans für " + leId;
        blockers.push(`${8 - planCount} Plan-Dateien fehlen`);
      } else {
        nextStep = "Manifest-Status auf 'sessionplan' setzen";
        nextAgent = "Manuell";
        nextCommand = `Edit: content/_manifest.ts → status: "sessionplan"`;
      }
      break;

    case "sessionplan":
      nextStep = "B1-Dozentin: Inline B1 bei 4 Plan-Dateien → dann Generator";
      nextAgent = "b1-dozentin.md (Opus) → content-generator.md (Sonnet)";
      nextCommand = "Agent: b1-dozentin → dann Generator für " + leId;
      break;

    case "steps":
      if (!hasQualityReport || !qualityPass) {
        nextStep = "Quality-Gate laufen lassen";
        nextAgent = "Script (automatisch)";
        nextCommand = `npx tsx scripts/quality-gate.ts ${leId}`;
        if (hasQualityReport && !qualityPass) {
          blockers.push("Quality-Gate FAIL — Fehler beheben");
        }
      } else if (!hasPruefbericht) {
        nextStep = "KI-Prüfer: 32 semantische Kriterien";
        nextAgent = "didaktik-pruefer.md (Opus)";
        nextCommand = "Agent: didaktik-pruefer für " + leId;
      } else {
        nextStep = "Manifest-Status auf 'geprueft' setzen (wenn Prüfbericht PASS)";
        nextAgent = "didaktik-pruefer.md setzt automatisch";
        nextCommand = `Prüfe content/${leId}/pruefbericht.md → PASS?`;
      }
      break;

    case "geprueft":
      nextStep = "Go-Live: Manifest-Status auf 'published' setzen + Deployment";
      nextAgent = "Mensch";
      nextCommand = `Edit: content/_manifest.ts → status: "published" → npx vercel --prod`;
      break;

    case "published":
      nextStep = "✅ Live — keine Aktion nötig";
      nextAgent = "-";
      nextCommand = "-";
      break;

    default:
      nextStep = "Unbekannter Status — Manifest prüfen";
      nextAgent = "Manuell";
      nextCommand = `Prüfe content/_manifest.ts für ${leId}`;
  }

  return {
    leId,
    currentStatus: entry.status,
    nextStep,
    nextAgent,
    nextCommand,
    checks,
    blockers,
  };
}

// ── Output ──

function printStatus(status: PipelineStatus): void {
  const statusIcons: Record<string, string> = {
    rohmaterial: "📝",
    sessionplan: "📋",
    steps: "⚙️",
    geprueft: "✅",
    published: "🟢",
  };

  const icon = statusIcons[status.currentStatus] ?? "❓";
  console.log(`\n  ${icon} ${status.leId.toUpperCase()} — Status: ${status.currentStatus}`);
  console.log("  " + "─".repeat(50));

  // Checks
  for (const check of status.checks) {
    const checkIcon = check.passed ? "✅" : "⬜";
    console.log(`  ${checkIcon} ${check.name}: ${check.detail}`);
  }

  // Blockers
  if (status.blockers.length > 0) {
    console.log(`\n  🛑 Blocker:`);
    for (const b of status.blockers) {
      console.log(`     - ${b}`);
    }
  }

  // Next step
  console.log(`\n  → Nächster Schritt: ${status.nextStep}`);
  console.log(`    Agent: ${status.nextAgent}`);
  if (status.nextCommand !== "-") {
    console.log(`    Kommando: ${status.nextCommand}`);
  }
}

// ── Main ──

console.log(`\n${"═".repeat(60)}`);
console.log(`  PIPELINE-CHECKLIST`);
console.log("═".repeat(60));

const manifest = loadManifest();

if (target === "--all") {
  // Status overview for all LEs
  console.log(`\n  ${manifest.length} LEs registriert:\n`);

  const statusOrder = ["published", "geprueft", "steps", "sessionplan", "rohmaterial"];
  const sorted = [...manifest].sort(
    (a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
  );

  for (const entry of sorted) {
    const status = checkPipelineStatus(entry);
    const icon =
      status.currentStatus === "published" ? "🟢" :
      status.currentStatus === "geprueft" ? "✅" :
      status.currentStatus === "steps" ? "⚙️" :
      status.currentStatus === "sessionplan" ? "📋" : "📝";
    console.log(
      `  ${icon} ${entry.leId.padEnd(8)} ${entry.status.padEnd(14)} → ${status.nextStep}`
    );
  }
} else {
  const entry = manifest.find((e) => e.leId === target);
  if (!entry) {
    console.error(`\n  ❌ ${target} nicht im Manifest gefunden`);
    console.log(`  Registrierte LEs: ${manifest.map((e) => e.leId).join(", ")}`);
    process.exit(1);
  }

  const status = checkPipelineStatus(entry);
  printStatus(status);
}

console.log(`\n${"═".repeat(60)}`);
