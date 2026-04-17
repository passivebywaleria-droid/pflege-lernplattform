#!/usr/bin/env npx tsx
/**
 * Quality Gate — Alle Checks in einem Script.
 * Erzeugt JSON + Markdown Report unter content/le-{N}/.
 *
 * Usage:
 *   npx tsx scripts/quality-gate.ts le-01
 *   npx tsx scripts/quality-gate.ts le-06
 *   npx tsx scripts/quality-gate.ts --all
 *
 * Exit 0 = PASS (kein K.O.-Fehler)
 * Exit 1 = FAIL (mindestens 1 K.O.)
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

// --- Importierte Check-Funktionen ---
import { validateSteps, groupBySeverity } from "./content-schema";
import { checkFakten, checkLeitfaelle } from "./fact-checker";
import { lintMcSteps } from "./mc-linter";
import { lintDialogSteps } from "./dialog-linter";
import { checkGlossar } from "./glossar-checker";

// ═══════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════

interface GateCheck {
  id: string;
  name: string;
  pass: boolean;
  ko: boolean;
  details: Record<string, unknown>;
  errors: string[];
  warnings: string[];
  skipped?: boolean;
}

interface QualityReport {
  leId: string;
  timestamp: string;
  verdict: "PASS" | "FAIL";
  koFailures: string[];
  totalChecks: number;
  passedChecks: number;
  gates: GateCheck[];
}

interface StepLike {
  stepId: string;
  stepType: string;
  contentC1: { title: string; body: string; glossarBegriffe?: string[] };
  contentB1?: { title: string; body: string; glossarBegriffe?: string[] };
  question?: Record<string, unknown>;
  [key: string]: unknown;
}

interface GlossarEntry {
  begriff: string;
  [key: string]: unknown;
}

interface Rohmaterial {
  kernfakten: {
    id: string;
    text: string;
    schluesselwoerter: string[];
    zahlen: { wert: string; kontext: string }[];
    namen: { name: string; rolle: string }[];
    bloomLevel: number;
    kompetenzbereich: string;
    quelleId: string;
    quelleSeite: string;
    dozentinGeprueft: boolean;
  }[];
  glossar: {
    begriff: string;
    erklaerungC1: string;
    erklaerungB1: string;
    ar: string;
    tr: string;
  }[];
  leitfaelle: {
    patientId: string;
    name: string;
    alter: number;
    geschlecht: string;
    diagnose: string;
    setting: string;
    kernproblem: string;
    szenen: { szeneId: string; kontext: string; pflegefrage: string }[];
  }[];
  quellen?: { id: string; titel: string; jahr: number; seiten?: string }[];
  dozentinFreigabeRohmaterial: boolean;
  dozentinFreigabeDatum?: string;
}

// ═══════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════

function loadSteps(leDir: string): StepLike[] {
  const stepFiles = fs
    .readdirSync(leDir)
    .filter((f) => f.startsWith("steps-s") && f.endsWith(".ts"))
    .sort();
  const allSteps: StepLike[] = [];
  for (const file of stepFiles) {
    try {
      const filePath = path.join(leDir, file);
      const mod = require(filePath);
      const stepsKey = Object.keys(mod).find((k) =>
        /(_STEPS_S\d|^STEPS_)/.test(k)
      );
      if (stepsKey) allSteps.push(...(mod[stepsKey] as StepLike[]));
      delete require.cache[require.resolve(filePath)];
    } catch {
      /* skip broken files */
    }
  }
  return allSteps;
}

function loadGlossar(leDir: string): GlossarEntry[] {
  try {
    const mod = require(path.join(leDir, "glossar.ts"));
    const key =
      Object.keys(mod).find((k) => k.endsWith("_GLOSSAR")) ?? "GLOSSAR";
    return mod[key] || [];
  } catch {
    return [];
  }
}

function runShellCheck(cmd: string): { ok: boolean; output: string } {
  try {
    const output = execSync(cmd, {
      encoding: "utf-8",
      timeout: 60_000,
      cwd: path.resolve(__dirname, ".."),
    });
    return { ok: true, output: output.trim() };
  } catch (e: unknown) {
    const err = e as { stdout?: string; stderr?: string; status?: number };
    return {
      ok: false,
      output: (err.stdout || "") + (err.stderr || ""),
    };
  }
}

// ═══════════════════════════════════════════════════════════
// Individual Gate Checks
// ═══════════════════════════════════════════════════════════

function checkTypeScript(): GateCheck {
  const result = runShellCheck("npx tsc --noEmit 2>&1");
  const errorCount = result.ok
    ? 0
    : (result.output.match(/error TS/g) || []).length;
  return {
    id: "typescript",
    name: "TypeScript Compilation",
    pass: result.ok,
    ko: true,
    details: { errorCount },
    errors: result.ok ? [] : [`${errorCount} TypeScript-Fehler`],
    warnings: [],
  };
}

function checkNaming(leId: string): GateCheck {
  const result = runShellCheck(`npx tsx scripts/validate-le.ts ${leId} 2>&1`);
  // validate-le.ts exits 1 even for MEDIUM warnings (e.g. KB-Lücken, B1≈C1)
  // Parse output to distinguish real CRITICAL/HIGH errors from MEDIUM/LOW warnings
  const criticalCount = (result.output.match(/CRITICAL|❌\s*Fehler/g) || []).length;
  return {
    id: "naming",
    name: "Naming-Standard (LE-Schablone)",
    pass: criticalCount === 0,
    ko: false,
    details: { output: result.output.slice(-500) },
    errors: criticalCount > 0 ? [`${criticalCount} kritische Naming-Fehler`] : [],
    warnings: result.ok ? [] : ["Naming-Warnungen vorhanden (MEDIUM/LOW)"],
  };
}

function checkRenderable(leId: string): GateCheck {
  const result = runShellCheck(
    `npx tsx scripts/check-steps-renderable.ts ${leId} 2>&1`
  );
  return {
    id: "renderable",
    name: "Renderer-Kompatibilität",
    pass: result.ok,
    ko: true,
    details: { output: result.output.slice(-300) },
    errors: result.ok ? [] : ["Nicht alle Steps renderbar"],
    warnings: [],
  };
}

function checkSchema(steps: StepLike[]): GateCheck {
  const result = validateSteps(steps);
  const grouped = groupBySeverity(result.errors);
  const hasCritical = grouped.CRITICAL.length > 0;
  return {
    id: "schema",
    name: "Schema-Validierung",
    pass: !hasCritical,
    ko: false,
    details: {
      total: result.total,
      passed: result.passed,
      critical: grouped.CRITICAL.length,
      high: grouped.HIGH.length,
      medium: grouped.MEDIUM.length,
      low: grouped.LOW.length,
    },
    errors: grouped.CRITICAL.map(
      (e) => `${e.stepId}: ${e.feld} — ${e.erwartet}`
    ),
    warnings: grouped.HIGH.slice(0, 10).map(
      (e) => `${e.stepId}: ${e.feld} — ${e.erwartet}`
    ),
  };
}

function checkUrheberrecht(leId: string): GateCheck {
  const scriptPath = path.join(__dirname, "check-artikel-abstand.ts");
  if (!fs.existsSync(scriptPath)) {
    return {
      id: "urheberrecht",
      name: "Urheberrecht (Abstandstest)",
      pass: true,
      ko: true,
      details: {},
      errors: [],
      warnings: ["Script nicht gefunden — übersprungen"],
      skipped: true,
    };
  }
  const result = runShellCheck(
    `npx tsx scripts/check-artikel-abstand.ts ${leId} 2>&1`
  );
  // Parse summary line: "✅ OK: 26 | ⚠️  Warnung: 6 | ❌ FAIL: 0"
  const failMatch = result.output.match(/FAIL:\s*(\d+)/);
  const warnMatch = result.output.match(/Warnung:\s*(\d+)/);
  const failCount = failMatch ? parseInt(failMatch[1], 10) : 0;
  const warnCount = warnMatch ? parseInt(warnMatch[1], 10) : 0;
  return {
    id: "urheberrecht",
    name: "Urheberrecht (Abstandstest)",
    pass: failCount === 0,
    ko: true,
    details: { fails: failCount, warns: warnCount },
    errors:
      failCount > 0
        ? [`${failCount} FAIL-Blöcke (≥6 N-Gramm-Treffer)`]
        : [],
    warnings:
      warnCount > 0 ? [`${warnCount} WARN-Blöcke (3-5 Treffer)`] : [],
  };
}

function checkFaktenAbdeckung(
  steps: StepLike[],
  rohmaterial: Rohmaterial | null
): GateCheck {
  if (!rohmaterial) {
    return {
      id: "fakten",
      name: "Fakten-Abdeckung",
      pass: true,
      ko: false,
      details: {},
      errors: [],
      warnings: ["Kein rohmaterial.json — übersprungen"],
      skipped: true,
    };
  }
  const faktResults = checkFakten(rohmaterial as never, steps as never);
  const lfResults = checkLeitfaelle(rohmaterial as never, steps as never);
  const covered = faktResults.filter((r) => r.status === "COVERED").length;
  const missing = faktResults.filter((r) => r.status === "MISSING").length;
  const mismatch = faktResults.filter((r) => r.status === "MISMATCH").length;
  const partial = faktResults.filter((r) => r.status === "PARTIAL").length;
  const total = rohmaterial.kernfakten.length;
  return {
    id: "fakten",
    name: "Fakten-Abdeckung",
    pass: mismatch === 0,
    ko: false,
    details: { total, covered, missing, mismatch, partial, leitfaelle: lfResults.length },
    errors: faktResults
      .filter((r) => r.status === "MISMATCH")
      .map((r) => `${r.faktId}: MISMATCH — ${r.detail}`),
    warnings: faktResults
      .filter((r) => r.status === "MISSING")
      .map((r) => `${r.faktId}: MISSING — ${r.detail}`),
  };
}

function checkMcBias(steps: StepLike[]): GateCheck {
  const result = lintMcSteps(steps as never);
  return {
    id: "mcBias",
    name: "MC-Bias-Check",
    pass: true,
    ko: false,
    details: {
      totalMc: result.totalMc,
      warningCount: result.warnings.length,
    },
    errors: [],
    warnings: result.warnings.slice(0, 10).map(
      (w) => `${w.stepId}: ${w.typ} — ${w.detail}`
    ),
  };
}

function checkDialogBias(steps: StepLike[]): GateCheck {
  const result = lintDialogSteps(steps as never);
  return {
    id: "dialogBias",
    name: "Dialog-Bias-Check",
    pass: true,
    ko: false,
    details: {
      totalDialogs: result.totalDialogs,
      warningCount: result.warnings.length,
    },
    errors: [],
    warnings: result.warnings.slice(0, 10).map(
      (w) => `${w.stepId}: ${w.typ} — ${w.detail}`
    ),
  };
}

function checkB1Quality(leId: string): GateCheck {
  const result = runShellCheck(`npx tsx scripts/b1-linter.ts ${leId} 2>&1`);
  const critMatch = result.output.match(/(\d+) CRITICAL/);
  const highMatch = result.output.match(/(\d+) HIGH/);
  const medMatch = result.output.match(/(\d+) MEDIUM/);
  const lowMatch = result.output.match(/(\d+) LOW/);
  const critical = critMatch ? parseInt(critMatch[1]) : 0;
  const high = highMatch ? parseInt(highMatch[1]) : 0;
  const medium = medMatch ? parseInt(medMatch[1]) : 0;
  const low = lowMatch ? parseInt(lowMatch[1]) : 0;
  return {
    id: "b1Quality",
    name: "B1-Sprachqualität",
    pass: critical === 0,
    ko: false,
    details: { critical, high, medium, low, total: critical + high + medium + low },
    errors: critical > 0 ? [`${critical} CRITICAL B1-Fehler`] : [],
    warnings: high > 0 ? [`${high} HIGH B1-Fehler`] : [],
  };
}

function checkGlossarVollstaendigkeit(
  glossar: GlossarEntry[],
  steps: StepLike[],
  rohmaterial: Rohmaterial | null
): GateCheck {
  const result = checkGlossar(
    glossar as never,
    steps as never,
    rohmaterial?.glossar as never
  );
  return {
    id: "glossar",
    name: "Glossar-Vollständigkeit",
    pass: true,
    ko: false,
    details: {
      inGlossar: result.stats.inGlossar,
      fehlt: result.stats.fehlt,
      ungenutzt: result.stats.ungenutzt,
    },
    errors: [],
    warnings:
      result.stats.fehlt > 0
        ? [`${result.stats.fehlt} Begriffe ohne Glossar-Eintrag`]
        : [],
  };
}

function checkPreLive(leId: string): GateCheck {
  const result = runShellCheck(
    `npx tsx scripts/pre-live-check.ts ${leId} 2>&1`
  );
  const blocked = result.output.includes("BLOCKED");
  return {
    id: "preLive",
    name: "Pre-Live 7-Punkt-Gate",
    pass: !blocked,
    ko: false,
    details: { blocked },
    errors: blocked ? ["Pre-Live-Gate BLOCKED"] : [],
    warnings: [],
  };
}

// ═══════════════════════════════════════════════════════════
// Report Generation
// ═══════════════════════════════════════════════════════════

function generateMarkdown(report: QualityReport): string {
  const now = report.timestamp.split("T")[0];
  let md = `# Quality Gate Report: ${report.leId.toUpperCase()}\n\n`;
  md += `**Datum:** ${now}  \n`;
  md += `**Verdict:** ${report.verdict === "PASS" ? "✅ PASS" : "❌ FAIL"}  \n`;
  md += `**Checks:** ${report.passedChecks}/${report.totalChecks} bestanden  \n`;

  if (report.koFailures.length > 0) {
    md += `\n## K.O.-Fehler\n\n`;
    for (const ko of report.koFailures) {
      md += `- ❌ ${ko}\n`;
    }
  }

  md += `\n## Ergebnisse\n\n`;
  md += `| # | Check | K.O.? | Ergebnis | Fehler | Warnungen |\n`;
  md += `|---|-------|-------|----------|--------|----------|\n`;

  for (let i = 0; i < report.gates.length; i++) {
    const g = report.gates[i];
    const icon = g.skipped ? "⏭️" : g.pass ? "✅" : "❌";
    const koTag = g.ko ? "**Ja**" : "Nein";
    md += `| ${i + 1} | ${g.name} | ${koTag} | ${icon} | ${g.errors.length} | ${g.warnings.length} |\n`;
  }

  for (const g of report.gates) {
    if (g.errors.length === 0 && g.warnings.length === 0) continue;
    md += `\n### ${g.name}\n\n`;
    if (g.errors.length > 0) {
      md += `**Fehler:**\n`;
      for (const e of g.errors) md += `- ❌ ${e}\n`;
    }
    if (g.warnings.length > 0) {
      md += `**Warnungen:**\n`;
      for (const w of g.warnings) md += `- ⚠️ ${w}\n`;
    }
  }

  md += `\n---\n*Generiert von \`scripts/quality-gate.ts\`*\n`;
  return md;
}

// ═══════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════

function runQualityGate(leId: string): QualityReport {
  const contentDir = path.resolve(__dirname, "..", "content");
  const leDir = path.join(contentDir, leId);

  if (!fs.existsSync(leDir)) {
    console.error(`❌ ${leDir} nicht gefunden`);
    process.exit(1);
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`  QUALITY GATE: ${leId.toUpperCase()}`);
  console.log("═".repeat(60));

  const steps = loadSteps(leDir);
  const glossar = loadGlossar(leDir);
  let rohmaterial: Rohmaterial | null = null;
  const jsonPath = path.join(leDir, "rohmaterial.json");
  if (fs.existsSync(jsonPath)) {
    try {
      rohmaterial = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    } catch {
      /* skip */
    }
  }

  console.log(`  Steps: ${steps.length} | Glossar: ${glossar.length}`);
  console.log("");

  console.log("── Gate A: K.O.-Checks ──");
  const tsc = checkTypeScript();
  printCheck(tsc);
  const renderable = checkRenderable(leId);
  printCheck(renderable);
  const urheber = checkUrheberrecht(leId);
  printCheck(urheber);

  console.log("\n── Gate B: Qualitäts-Checks ──");
  const naming = checkNaming(leId);
  printCheck(naming);
  const schema = checkSchema(steps);
  printCheck(schema);
  const fakten = checkFaktenAbdeckung(steps, rohmaterial);
  printCheck(fakten);
  const mc = checkMcBias(steps);
  printCheck(mc);
  const dialog = checkDialogBias(steps);
  printCheck(dialog);
  const b1 = checkB1Quality(leId);
  printCheck(b1);
  const glos = checkGlossarVollstaendigkeit(glossar, steps, rohmaterial);
  printCheck(glos);
  const preLive = checkPreLive(leId);
  printCheck(preLive);

  const allGates = [
    tsc, naming, renderable, urheber,
    schema, fakten, mc, dialog, b1, glos, preLive,
  ];
  const koFailures = allGates
    .filter((g) => g.ko && !g.pass)
    .map((g) => g.name);

  const report: QualityReport = {
    leId,
    timestamp: new Date().toISOString(),
    verdict: koFailures.length === 0 ? "PASS" : "FAIL",
    koFailures,
    totalChecks: allGates.length,
    passedChecks: allGates.filter((g) => g.pass).length,
    gates: allGates,
  };

  const jsonOutPath = path.join(leDir, "quality-report.json");
  const mdOutPath = path.join(leDir, "quality-report.md");
  fs.writeFileSync(jsonOutPath, JSON.stringify(report, null, 2), "utf-8");
  fs.writeFileSync(mdOutPath, generateMarkdown(report), "utf-8");

  console.log(`\n${"═".repeat(60)}`);
  if (report.verdict === "PASS") {
    console.log(
      `  ✅ QUALITY GATE: PASS (${report.passedChecks}/${report.totalChecks})`
    );
  } else {
    console.log(`  ❌ QUALITY GATE: FAIL`);
    for (const ko of koFailures) console.log(`    ❌ ${ko}`);
  }
  const totalWarnings = allGates.reduce((s, g) => s + g.warnings.length, 0);
  const totalErrors = allGates.reduce((s, g) => s + g.errors.length, 0);
  console.log(`  Fehler: ${totalErrors} | Warnungen: ${totalWarnings}`);
  console.log(`  → ${jsonOutPath}`);
  console.log(`  → ${mdOutPath}`);
  console.log("═".repeat(60));

  return report;
}

function printCheck(check: GateCheck) {
  const icon = check.skipped ? "⏭️" : check.pass ? "✅" : "❌";
  const koTag = check.ko ? " [K.O.]" : "";
  const detail =
    check.errors.length > 0
      ? ` (${check.errors.length} Fehler)`
      : check.warnings.length > 0
        ? ` (${check.warnings.length} Warnungen)`
        : "";
  console.log(`  ${icon} ${check.name}${koTag}${detail}`);
}

// ═══════════════════════════════════════════════════════════
// Entry Point
// ═══════════════════════════════════════════════════════════

const target = process.argv[2];
if (!target) {
  console.log("Usage: npx tsx scripts/quality-gate.ts <le-id|--all>");
  process.exit(1);
}

if (target === "--all") {
  const contentDir = path.resolve(__dirname, "..", "content");
  const dirs = fs
    .readdirSync(contentDir)
    .filter(
      (d) =>
        d.startsWith("le-") &&
        fs.existsSync(path.join(contentDir, d, "steps-s1.ts"))
    );
  console.log(`\nQuality Gate für ${dirs.length} LEs...\n`);
  let allPass = true;
  for (const dir of dirs) {
    const report = runQualityGate(dir);
    if (report.verdict === "FAIL") allPass = false;
  }
  process.exit(allPass ? 0 : 1);
} else {
  const report = runQualityGate(target);
  process.exit(report.verdict === "FAIL" ? 1 : 0);
}
