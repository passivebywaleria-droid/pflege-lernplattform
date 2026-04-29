#!/usr/bin/env npx tsx
/**
 * Pipeline v10 — 10-Stufen-Orchestrator für Situationen
 *
 * Prüft den vollständigen Pipeline-Status einer Situation über alle 10 Stufen.
 * Schreibt nichts — nur Status-Anzeige.
 *
 * Stufen:
 *   1.  Recherche-Check      → kernfakten.md
 *   2.  Plan-Phase           → bausteine-plan.md + sessionsplan.md + patient-plan.md
 *   3.  Plan-Validator       → pflege-review-plan.md (K.O.-Verdikt PASS)
 *   4.  Code-Generator       → phase-*.ts (mind. 4)
 *   5.  Code-Validator       → pflege-review.md (K.O.-Verdikt PASS)
 *   6.  Inline-Wissen        → mind. 1 Step mit stepType "inlineWissen"
 *   7.  Transitionen         → mind. 1 Step mit transition-Feld
 *   8.  Curriculum-Coverage  → lehr-patient-mapping.md im CE-Ordner
 *   9.  Karteikarten         → karteikarten-auto.ts
 *   10. QA-Score             → qa-report.json (score >= 70)
 *
 * Usage:
 *   npx tsx scripts/pipeline-v10.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/pipeline-v10.ts ce-02 --all
 */

import * as fs from "fs";
import * as path from "path";

// ─── Types ───────────────────────────────────────────────────────────────────

type StepStatus = "✅" | "❌" | "⏭️";

interface PipelineStep {
  nr: number;
  name: string;
  artefakt: string;
  status: StepStatus;
  detail: string;
}

interface PipelineResult {
  ceId: string;
  situationId: string;
  steps: PipelineStep[];
  passed: number;
  failed: number;
  skipped: number;
  gesamt: "PASS" | "FAIL";
  naechsterSchritt: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extrahiert das LETZTE K.O.-Verdikt aus einem Review-File.
 * Reviews enthalten historische FAIL-Verdikte mit nachfolgenden Fix-Blöcken —
 * das letzte Vorkommen zählt.
 */
function extractLastVerdikt(filePath: string): "PASS" | "FAIL" | null {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  const matches = content.match(/K\.O\.-Verdikt[^\n]*(PASS|FAIL)/gi);
  if (!matches || matches.length === 0) return null;
  const last = matches[matches.length - 1];
  return /FAIL/i.test(last) ? "FAIL" : "PASS";
}

/**
 * Liest alle phase-*.ts Dateien im Situations-Ordner und gibt deren
 * kombinierten Inhalt als String zurück.
 */
function readAllPhaseContent(dir: string): string {
  if (!fs.existsSync(dir)) return "";
  const phaseFiles = fs.readdirSync(dir).filter(
    (f) => f.startsWith("phase-") && f.endsWith(".ts")
  );
  return phaseFiles
    .map((f) => fs.readFileSync(path.join(dir, f), "utf-8"))
    .join("\n");
}

/**
 * Zählt das Vorkommen eines stepType in den Phase-Dateien.
 * Sucht nach `stepType: "xxx"` oder `stepType: 'xxx'`.
 */
function countStepType(phaseContent: string, stepType: string): number {
  const regex = new RegExp(`stepType:\\s*["']${stepType}["']`, "g");
  const matches = phaseContent.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Prüft ob mindestens ein Step ein transition-Feld hat.
 * Sucht nach `transition:` (nicht in Kommentaren).
 */
function hasTransitions(phaseContent: string): boolean {
  // Suche nach transition: gefolgt von einem String-Literal
  return /^\s*transition\s*:/m.test(phaseContent);
}

// ─── Pipeline Check ──────────────────────────────────────────────────────────

function checkSituation(ceId: string, situationId: string): PipelineResult {
  const dir = path.join(process.cwd(), "content", ceId, "situationen", situationId);
  const ceDir = path.join(process.cwd(), "content", ceId);
  const steps: PipelineStep[] = [];

  // Phase-Files und Content einmal lesen (wird mehrfach gebraucht)
  const phaseFiles = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.startsWith("phase-") && f.endsWith(".ts"))
    : [];
  const phaseContent = readAllPhaseContent(dir);

  // ── 1. Recherche-Check ─────────────────────────────────────────────────
  const kernfaktenSit = path.join(dir, "kernfakten.md");
  const kernfaktenExists = fs.existsSync(kernfaktenSit);
  steps.push({
    nr: 1,
    name: "Recherche-Check",
    artefakt: "kernfakten.md",
    status: kernfaktenExists ? "✅" : "❌",
    detail: kernfaktenExists ? "vorhanden" : "fehlt",
  });

  // ── 2. Plan-Phase ──────────────────────────────────────────────────────
  const planFileNames = ["bausteine-plan.md", "sessionsplan.md", "patient-plan.md"];
  const planFound = planFileNames.filter((f) => fs.existsSync(path.join(dir, f)));
  const planComplete = planFound.length === planFileNames.length;
  steps.push({
    nr: 2,
    name: "Plan-Phase",
    artefakt: "bausteine-plan.md + sessionsplan.md + patient-plan.md",
    status: planComplete ? "✅" : planFound.length > 0 ? "❌" : "❌",
    detail: planComplete
      ? "alle 3 vorhanden"
      : planFound.length > 0
        ? `${planFound.length}/3: ${planFound.join(", ")}`
        : "fehlt",
  });

  // ── 3. Plan-Validator ──────────────────────────────────────────────────
  const planReviewPath = path.join(dir, "pflege-review-plan.md");
  const planVerdikt = extractLastVerdikt(planReviewPath);
  steps.push({
    nr: 3,
    name: "Plan-Validator",
    artefakt: "pflege-review-plan.md",
    status: planVerdikt === "PASS" ? "✅" : "❌",
    detail: planVerdikt ?? "fehlt",
  });

  // ── 4. Code-Generator ─────────────────────────────────────────────────
  steps.push({
    nr: 4,
    name: "Code-Generator",
    artefakt: "phase-*.ts (mind. 4)",
    status: phaseFiles.length >= 4 ? "✅" : "❌",
    detail: `${phaseFiles.length} Phase-Files`,
  });

  // ── 5. Code-Validator ─────────────────────────────────────────────────
  const codeReviewPath = path.join(dir, "pflege-review.md");
  const codeVerdikt = extractLastVerdikt(codeReviewPath);
  steps.push({
    nr: 5,
    name: "Code-Validator",
    artefakt: "pflege-review.md",
    status: codeVerdikt === "PASS" ? "✅" : "❌",
    detail: codeVerdikt ?? "fehlt",
  });

  // ── 6. Inline-Wissen ──────────────────────────────────────────────────
  const inlineCount = countStepType(phaseContent, "inlineWissen");
  steps.push({
    nr: 6,
    name: "Inline-Wissen",
    artefakt: "stepType: inlineWissen (mind. 1)",
    status: inlineCount >= 1 ? "✅" : "❌",
    detail: `${inlineCount} Steps`,
  });

  // ── 7. Transitionen ───────────────────────────────────────────────────
  const hasTrans = hasTransitions(phaseContent);
  steps.push({
    nr: 7,
    name: "Transitionen",
    artefakt: "transition-Feld (mind. 1)",
    status: hasTrans ? "✅" : "❌",
    detail: hasTrans ? "vorhanden" : "fehlt",
  });

  // ── 8. Curriculum-Coverage ─────────────────────────────────────────────
  const mappingPath = path.join(ceDir, "lehr-patient-mapping.md");
  const mappingExists = fs.existsSync(mappingPath);
  steps.push({
    nr: 8,
    name: "Curriculum-Coverage",
    artefakt: `content/${ceId}/lehr-patient-mapping.md`,
    status: mappingExists ? "✅" : "❌",
    detail: mappingExists ? "vorhanden" : "fehlt",
  });

  // ── 9. Karteikarten ───────────────────────────────────────────────────
  const karteiPath = path.join(dir, "karteikarten-auto.ts");
  const karteiExists = fs.existsSync(karteiPath);
  steps.push({
    nr: 9,
    name: "Karteikarten",
    artefakt: "karteikarten-auto.ts",
    status: karteiExists ? "✅" : "❌",
    detail: karteiExists ? "vorhanden" : "fehlt",
  });

  // ── 10. QA-Score ──────────────────────────────────────────────────────
  const qaPath = path.join(dir, "qa-report.json");
  let qaScore: number | null = null;
  if (fs.existsSync(qaPath)) {
    try {
      const qaData = JSON.parse(fs.readFileSync(qaPath, "utf-8")) as {
        totalScore?: number;
        score?: number;
      };
      qaScore = qaData.totalScore ?? qaData.score ?? null;
    } catch {
      qaScore = null;
    }
  }
  steps.push({
    nr: 10,
    name: "QA-Score",
    artefakt: "qa-report.json (score >= 70)",
    status: qaScore !== null && qaScore >= 70 ? "✅" : "❌",
    detail:
      qaScore !== null
        ? `Score: ${qaScore}/100`
        : fs.existsSync(qaPath)
          ? "Parse-Fehler"
          : "fehlt",
  });

  // ── Auswertung ────────────────────────────────────────────────────────
  const passed = steps.filter((s) => s.status === "✅").length;
  const failed = steps.filter((s) => s.status === "❌").length;
  const skipped = steps.filter((s) => s.status === "⏭️").length;
  const gesamt: "PASS" | "FAIL" = failed === 0 && skipped === 0 ? "PASS" : "FAIL";

  // Nächster Schritt = erste fehlende Stufe
  const firstFail = steps.find((s) => s.status === "❌");
  const naechsterSchritt = firstFail
    ? `Stufe ${firstFail.nr}: ${firstFail.name}`
    : "Alle Stufen bestanden — Live-Deploy möglich";

  return {
    ceId,
    situationId,
    steps,
    passed,
    failed,
    skipped,
    gesamt,
    naechsterSchritt,
  };
}

// ─── Output ──────────────────────────────────────────────────────────────────

function printResult(r: PipelineResult) {
  const w = 72;
  console.log(`\n${"═".repeat(w)}`);
  console.log(`  ${r.ceId} / ${r.situationId}`);
  console.log(`${"═".repeat(w)}`);

  for (const step of r.steps) {
    const nr = String(step.nr).padStart(2, " ");
    console.log(`  ${step.status}  ${nr}. ${step.name}`);
    console.log(`        └─ ${step.artefakt} → ${step.detail}`);
  }

  console.log(`${"─".repeat(w)}`);
  console.log(
    `  Ergebnis: ${r.passed}✅  ${r.failed}❌  ${r.skipped}⏭️  → ${r.gesamt}`
  );
  if (r.gesamt === "PASS") {
    console.log(`  ✅ Alle 10 Stufen bestanden — Live-Deploy möglich`);
  } else {
    console.log(`  ⛔ Nicht deploy-bereit`);
    console.log(`  ➜ Nächster Schritt: ${r.naechsterSchritt}`);
  }
  console.log(`${"═".repeat(w)}`);
}

function printSummary(results: PipelineResult[]) {
  if (results.length <= 1) return;

  const w = 72;
  console.log(`\n${"═".repeat(w)}`);
  console.log(`  ZUSAMMENFASSUNG (${results.length} Situationen)`);
  console.log(`${"═".repeat(w)}`);

  // Header
  const cols = [
    "Situation",
    " 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10",
    "Gesamt",
  ];
  console.log(`  ${cols[0].padEnd(30)} ${cols.slice(1, 11).join(" ")}  ${cols[11]}`);
  console.log(`  ${"─".repeat(30)} ${cols.slice(1, 11).map(() => "──").join(" ")}  ${"──────"}`);

  for (const r of results) {
    const name = r.situationId.length > 28
      ? r.situationId.slice(0, 28) + "…"
      : r.situationId;
    const stepIcons = r.steps.map((s) => ` ${s.status}`).join("");
    const verdict = r.gesamt === "PASS" ? " PASS" : " FAIL";
    console.log(`  ${name.padEnd(30)}${stepIcons}  ${verdict}`);
  }

  const passCount = results.filter((r) => r.gesamt === "PASS").length;
  console.log(`\n  ${passCount}/${results.length} Situationen PASS`);
  console.log(`${"═".repeat(w)}`);
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    console.log(`
Pipeline v10 — 10-Stufen-Orchestrator

Usage:
  npx tsx scripts/pipeline-v10.ts ce-XX situation-id
  npx tsx scripts/pipeline-v10.ts ce-XX --all

Stufen:
   1. Recherche-Check       kernfakten.md
   2. Plan-Phase            bausteine-plan.md + sessionsplan.md + patient-plan.md
   3. Plan-Validator        pflege-review-plan.md (K.O.-Verdikt PASS)
   4. Code-Generator        phase-*.ts (mind. 4)
   5. Code-Validator        pflege-review.md (K.O.-Verdikt PASS)
   6. Inline-Wissen         stepType: inlineWissen (mind. 1)
   7. Transitionen          transition-Feld (mind. 1)
   8. Curriculum-Coverage   lehr-patient-mapping.md im CE-Ordner
   9. Karteikarten          karteikarten-auto.ts
  10. QA-Score              qa-report.json (score >= 70)
    `);
    process.exit(0);
  }

  const isAll = args.includes("--all");
  const ceId = args.find((a) => a.startsWith("ce-"));
  const sitArg = args.find((a) => !a.startsWith("--") && a !== ceId);

  if (!ceId) {
    console.error("Fehler: CE-ID fehlt (z.B. ce-02)");
    console.error("Usage: npx tsx scripts/pipeline-v10.ts ce-XX [situation-id|--all]");
    process.exit(1);
  }

  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) {
    console.error(`CE-Ordner fehlt: ${ceDir}`);
    process.exit(1);
  }

  let situationIds: string[];
  if (isAll) {
    situationIds = fs
      .readdirSync(ceDir)
      .filter((d) => {
        const full = path.join(ceDir, d);
        return fs.statSync(full).isDirectory();
      })
      .sort();
  } else if (sitArg) {
    situationIds = [sitArg];
  } else {
    console.error("Fehler: Situation-ID oder --all fehlt");
    console.error("Usage: npx tsx scripts/pipeline-v10.ts ce-XX [situation-id|--all]");
    process.exit(1);
  }

  if (situationIds.length === 0) {
    console.error(`Keine Situationen gefunden in ${ceDir}`);
    process.exit(1);
  }

  const results: PipelineResult[] = [];
  for (const sitId of situationIds) {
    const result = checkSituation(ceId, sitId);
    printResult(result);
    results.push(result);
  }

  printSummary(results);

  // Exit-Code: 0 wenn alle PASS, 1 wenn mind. 1 FAIL
  const allPass = results.every((r) => r.gesamt === "PASS");
  process.exit(allPass ? 0 : 1);
}

main();
