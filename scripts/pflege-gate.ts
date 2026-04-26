#!/usr/bin/env npx tsx
/**
 * Pflege-Quality-Gate — Situations-basiert
 *
 * Bündelt alle pflegefachlichen Sicherheitschecks für eine Lernsituation.
 * Verpflichtend vor Live-Deploy (User-Regel: kein erfundener Content).
 *
 * Doppelter Pflege-Validator (Plan + Code):
 *   1. pflege-review-plan.md  — Validator über Markdown-Pläne
 *   2. pflege-review.md       — Validator über generierte phase-*.ts
 *
 * Plus regex-basierte und strukturelle Validierung:
 *   3. Anti-Pattern-Check (Pseudo-Empathie, NRS-Bagatellisierung etc.)
 *   4. quellen[]-Pflichtfeld pro Step
 *   5. Patient-Konsistenz (Werte konsistent zwischen Phasen)
 *
 * Usage:
 *   npx tsx scripts/pflege-gate.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/pflege-gate.ts ce-02 --all     # alle Situationen einer CE
 *   npx tsx scripts/pflege-gate.ts --json          # CI-Output
 *
 * Exit-Codes:
 *   0 — alle K.O.-Checks PASS
 *   1 — mindestens ein K.O.-Check FAIL
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

interface GateCheck {
  id: string;
  name: string;
  pass: boolean;
  ko: boolean;
  errors: string[];
  warnings: string[];
  details?: Record<string, unknown>;
}

interface GateReport {
  ceId: string;
  situationId: string;
  timestamp: string;
  verdict: "PASS" | "FAIL";
  koFailures: string[];
  totalChecks: number;
  passedChecks: number;
  gates: GateCheck[];
}

// ─── Check 1: Pflege-Reviews (Plan + Code) ────────────────────

function checkPflegeReviews(situationDir: string): GateCheck {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const file of ["pflege-review-plan.md", "pflege-review.md"]) {
    const p = path.join(situationDir, file);
    if (!fs.existsSync(p)) {
      errors.push(`${file} fehlt — pflege-validator muss laufen`);
      continue;
    }
    const content = fs.readFileSync(p, "utf-8");
    if (/K\.O\.-Verdikt[^\n]*FAIL/i.test(content)) {
      errors.push(`${file}: Verdikt FAIL — Findings ungelöst`);
    } else if (!/K\.O\.-Verdikt[^\n]*PASS/i.test(content)) {
      warnings.push(`${file}: kein eindeutiges PASS-Verdikt`);
    }
  }

  return {
    id: "pflegeReviews",
    name: "Pflege-Reviews (Plan + Code, doppelter Check)",
    pass: errors.length === 0,
    ko: true,
    errors,
    warnings,
  };
}

// ─── Check 2: Anti-Pattern-Schnellcheck (Regex) ──────────────

function checkAntiPatterns(ceId: string, situationId: string): GateCheck {
  const errors: string[] = [];
  const warnings: string[] = [];
  try {
    execSync(`npx tsx scripts/pflege-anti-pattern-check.ts ${ceId}`, {
      stdio: "pipe",
    });
    return {
      id: "antiPatterns",
      name: "Anti-Pattern-Check (Regex)",
      pass: true,
      ko: false,
      errors,
      warnings,
    };
  } catch (e) {
    const output = (e as { stdout?: Buffer }).stdout?.toString() ?? "";
    // Filtere Fundzahlen für die spezifische Situation
    const matchesSit = (output.match(
      new RegExp(`content/${ceId}/situationen/${situationId}/[^\\s]+`, "g")
    ) ?? []).length;
    if (matchesSit > 0) {
      warnings.push(
        `${matchesSit} Anti-Pattern-Treffer in dieser Situation — manuell prüfen ob False-Positive (Anti-Pattern als Lehrbeispiel zitiert)`
      );
    }
    return {
      id: "antiPatterns",
      name: "Anti-Pattern-Check (Regex)",
      pass: matchesSit === 0,
      ko: false, // viele False Positives — Warning
      errors,
      warnings,
      details: { matchesSit },
    };
  }
}

// ─── Check 3: quellen[]-Pflichtfeld pro Step ─────────────────

function checkQuellen(situationDir: string): GateCheck {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!fs.existsSync(situationDir)) {
    return {
      id: "quellen",
      name: "Quellen-Pflichtfeld",
      pass: false,
      ko: true,
      errors: [`Situation-Verzeichnis fehlt: ${situationDir}`],
      warnings: [],
    };
  }

  const phaseFiles = fs
    .readdirSync(situationDir)
    .filter((f) => f.startsWith("phase-") && f.endsWith(".ts"));

  let stepsTotal = 0;
  let stepsOhne = 0;
  let stepsLeer = 0;

  for (const phaseFile of phaseFiles) {
    const content = fs.readFileSync(path.join(situationDir, phaseFile), "utf-8");
    const stepBlocks = content.split(/^\s*{\s*$/m).slice(1); // grobes Splitting an step-Objekten
    for (const block of stepBlocks) {
      if (!block.includes("stepId:")) continue;
      stepsTotal += 1;
      const quellenMatch = block.match(/quellen:\s*\[([^\]]*)\]/);
      if (!quellenMatch) {
        stepsOhne += 1;
      } else if (
        quellenMatch[1].trim().length === 0 ||
        quellenMatch[1].trim() === ","
      ) {
        stepsLeer += 1;
      }
    }
  }

  if (stepsOhne > 0)
    errors.push(`${stepsOhne}/${stepsTotal} Steps ohne quellen[]-Feld`);
  if (stepsLeer > 0)
    warnings.push(`${stepsLeer}/${stepsTotal} Steps mit leerem quellen[]`);

  return {
    id: "quellen",
    name: "Quellen-Pflichtfeld pro Step",
    pass: errors.length === 0,
    ko: true,
    details: { stepsTotal, stepsOhne, stepsLeer },
    errors,
    warnings,
  };
}

// ─── Check 4: Patient-Konsistenz ──────────────────────────────

function checkPatientKonsistenz(situationDir: string): GateCheck {
  const errors: string[] = [];
  const warnings: string[] = [];

  const patientPath = path.join(situationDir, "patient.ts");
  if (!fs.existsSync(patientPath)) {
    // Manche SituationsTypen haben keinen Patient (z. B. orientierung)
    return {
      id: "patientKonsistenz",
      name: "Patient-Daten Konsistenz",
      pass: true,
      ko: false,
      details: { skipped: "kein patient.ts" },
      errors,
      warnings,
    };
  }

  const patientContent = fs.readFileSync(patientPath, "utf-8");
  // Diagnosen extrahieren
  const diagnosenMatch = patientContent.match(
    /diagnosen:\s*\[([\s\S]*?)\]/
  );
  const diagnosen = diagnosenMatch
    ? [...diagnosenMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
    : [];

  const phaseFiles = fs
    .readdirSync(situationDir)
    .filter((f) => f.startsWith("phase-") && f.endsWith(".ts"));

  // Sammle alle erwähnten Medikamente in Phasen, die im patient.ts fehlen
  // Heuristik: Medikamenten-Namen mit großem Anfangsbuchstaben + (mg|µg|IE|ml)
  const erwaehntePhasen = new Set<string>();
  const medikamentRegex = /\b([A-ZÄÖÜ][a-zäöüß]{4,})\s+\d+(?:[.,]\d+)?\s*(mg|µg|IE|ml)\b/g;
  for (const phaseFile of phaseFiles) {
    const content = fs.readFileSync(path.join(situationDir, phaseFile), "utf-8");
    for (const m of content.matchAll(medikamentRegex)) {
      erwaehntePhasen.add(m[1]);
    }
  }

  // Prüfe ob die in patient.ts aktuelleMedikation oder diagnosen zumindest
  // referenziert sind (heuristisch)
  const fehlendeMeds: string[] = [];
  for (const med of erwaehntePhasen) {
    if (!patientContent.includes(med)) {
      fehlendeMeds.push(med);
    }
  }

  if (fehlendeMeds.length > 0) {
    warnings.push(
      `Medikamente in Phasen erwähnt aber nicht in patient.ts: ${fehlendeMeds.slice(0, 5).join(", ")}${fehlendeMeds.length > 5 ? ` (+${fehlendeMeds.length - 5})` : ""}`
    );
  }

  return {
    id: "patientKonsistenz",
    name: "Patient-Daten Konsistenz (Single-Source-of-Truth)",
    pass: errors.length === 0,
    ko: false, // Heuristik, daher Warning
    details: { diagnosen: diagnosen.length, fehlendeMeds: fehlendeMeds.length },
    errors,
    warnings,
  };
}

// ─── Hauptlauf ────────────────────────────────────────────────

function runForSituation(ceId: string, situationId: string): GateReport {
  const situationDir = path.join(
    process.cwd(),
    "content",
    ceId,
    "situationen",
    situationId
  );

  const gates: GateCheck[] = [
    checkPflegeReviews(situationDir),
    checkAntiPatterns(ceId, situationId),
    checkQuellen(situationDir),
    checkPatientKonsistenz(situationDir),
  ];

  const koFailures = gates.filter((g) => g.ko && !g.pass).map((g) => g.name);

  return {
    ceId,
    situationId,
    timestamp: new Date().toISOString(),
    verdict: koFailures.length === 0 ? "PASS" : "FAIL",
    koFailures,
    totalChecks: gates.length,
    passedChecks: gates.filter((g) => g.pass).length,
    gates,
  };
}

function printReport(report: GateReport, isJson: boolean) {
  if (isJson) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  console.log(
    `\n${"═".repeat(70)}\n  Pflege-Gate: ${report.ceId} / ${report.situationId}\n${"═".repeat(70)}\n`
  );
  for (const g of report.gates) {
    const icon = g.pass ? "✅" : "❌";
    const koTag = g.ko ? " [K.O.]" : "";
    console.log(`  ${icon} ${g.name}${koTag}`);
    for (const err of g.errors) console.log(`     ✗ ${err}`);
    for (const w of g.warnings) console.log(`     ⚠ ${w}`);
  }
  console.log(`\n${"─".repeat(70)}`);
  if (report.verdict === "PASS") {
    console.log(`  ✅ PFLEGE-GATE: PASS  (${report.passedChecks}/${report.totalChecks})`);
  } else {
    console.log(`  ❌ PFLEGE-GATE: FAIL`);
    for (const ko of report.koFailures) console.log(`     ❌ ${ko}`);
  }
  console.log(`${"═".repeat(70)}\n`);
}

function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes("--json");
  const all = args.includes("--all");
  const ceId = args.find((a) => a.startsWith("ce-"));
  const situationArg = args.find((a) => !a.startsWith("--") && a !== ceId);

  if (!ceId) {
    console.error("Usage: pflege-gate.ts ce-XX [situation-id|--all] [--json]");
    process.exit(1);
  }

  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) {
    console.error(`CE-Verzeichnis fehlt: ${ceDir}`);
    process.exit(1);
  }

  const situationen = all
    ? fs
        .readdirSync(ceDir)
        .filter((d) => fs.statSync(path.join(ceDir, d)).isDirectory())
    : situationArg
      ? [situationArg]
      : [];

  if (situationen.length === 0) {
    console.error(
      "Keine Situation angegeben. Nutze: pflege-gate.ts ce-02 <situationId> oder --all"
    );
    process.exit(1);
  }

  const reports = situationen.map((s) => runForSituation(ceId, s));

  if (isJson) {
    console.log(JSON.stringify(reports, null, 2));
  } else {
    for (const r of reports) printReport(r, false);
    const failed = reports.filter((r) => r.verdict === "FAIL").length;
    if (reports.length > 1) {
      console.log(
        `\n${"═".repeat(70)}\n  Gesamt: ${reports.length - failed}/${reports.length} PASS\n${"═".repeat(70)}\n`
      );
    }
  }

  const anyFail = reports.some((r) => r.verdict === "FAIL");
  process.exit(anyFail ? 1 : 0);
}

main();
