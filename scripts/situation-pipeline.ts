#!/usr/bin/env npx tsx
/**
 * Situation-Pipeline — Status-Orchestrator
 *
 * Zeigt den Pipeline-Status für eine Situation und benennt den nächsten
 * Schritt. Schreibt nichts — nur Status-Anzeige.
 *
 * Pipeline (User-Regel: doppelter Pflege-Check):
 *   1. Recherche      → kernfakten.md
 *   2. Plan-Phase     → bausteine-plan.md + sessionsplan.md + patient-plan.md
 *   3. Plan-Validator → pflege-review-plan.md (PASS Pflicht)
 *   4. Code-Generator → phase-*.ts + patient.ts
 *   5. Code-Validator → pflege-review.md (PASS Pflicht)
 *   6. Pflege-Gate    → quality-report.md (PASS Pflicht)
 *   7. Live-Deploy    ✅
 *
 * Usage:
 *   npx tsx scripts/situation-pipeline.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/situation-pipeline.ts ce-02 --all
 */

import * as fs from "fs";
import * as path from "path";

interface PipelineStatus {
  ceId: string;
  situationId: string;
  steps: {
    name: string;
    artefakt: string;
    status: "✅" | "❌" | "⚠️" | "⏭️";
    detail: string;
  }[];
  naechsterSchritt: string;
  liveDeployFreigegeben: boolean;
}

function checkSituation(ceId: string, situationId: string): PipelineStatus {
  const dir = path.join(
    process.cwd(),
    "content",
    ceId,
    "situationen",
    situationId
  );
  const status: PipelineStatus["steps"] = [];

  // 1. Recherche / Kernfakten
  const kernfakten = path.join(dir, "kernfakten.md");
  // Auch in themen-Verzeichnis möglich
  status.push({
    name: "1. Recherche",
    artefakt: "kernfakten.md",
    status: fs.existsSync(kernfakten) ? "✅" : "⏭️",
    detail: fs.existsSync(kernfakten) ? "vorhanden" : "optional / im Themen-Ordner",
  });

  // 2. Plan-Phase
  const planFiles = ["bausteine-plan.md", "sessionsplan.md", "patient-plan.md"];
  const planVorhanden = planFiles.some((f) =>
    fs.existsSync(path.join(dir, f))
  );
  status.push({
    name: "2. Plan-Phase",
    artefakt: "bausteine-plan.md / sessionsplan.md / patient-plan.md",
    status: planVorhanden ? "✅" : "❌",
    detail: planVorhanden
      ? planFiles.filter((f) => fs.existsSync(path.join(dir, f))).join(", ")
      : "fehlt",
  });

  // 3. Plan-Validator
  const planReview = path.join(dir, "pflege-review-plan.md");
  let planVerdikt = "fehlt";
  if (fs.existsSync(planReview)) {
    const c = fs.readFileSync(planReview, "utf-8");
    if (/K\.O\.-Verdikt[^\n]*FAIL/i.test(c)) planVerdikt = "FAIL";
    else if (/K\.O\.-Verdikt[^\n]*PASS/i.test(c)) planVerdikt = "PASS";
  }
  status.push({
    name: "3. Plan-Validator (pflege-validator mode=plan)",
    artefakt: "pflege-review-plan.md",
    status:
      planVerdikt === "PASS" ? "✅" : planVerdikt === "FAIL" ? "❌" : "❌",
    detail: planVerdikt,
  });

  // 4. Code-Generator
  const phaseFiles = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.startsWith("phase-") && f.endsWith(".ts"))
    : [];
  status.push({
    name: "4. Code-Generator",
    artefakt: "phase-*.ts + patient.ts",
    status: phaseFiles.length >= 4 ? "✅" : "❌",
    detail: `${phaseFiles.length} Phase-Files`,
  });

  // 5. Code-Validator
  const codeReview = path.join(dir, "pflege-review.md");
  let codeVerdikt = "fehlt";
  if (fs.existsSync(codeReview)) {
    const c = fs.readFileSync(codeReview, "utf-8");
    if (/K\.O\.-Verdikt[^\n]*FAIL/i.test(c)) codeVerdikt = "FAIL";
    else if (/K\.O\.-Verdikt[^\n]*PASS/i.test(c)) codeVerdikt = "PASS";
  }
  status.push({
    name: "5. Code-Validator (pflege-validator mode=code)",
    artefakt: "pflege-review.md",
    status:
      codeVerdikt === "PASS" ? "✅" : codeVerdikt === "FAIL" ? "❌" : "❌",
    detail: codeVerdikt,
  });

  // 6. Pflege-Gate
  const pflegeGateReport = path.join(dir, "pflege-gate-report.md");
  status.push({
    name: "6. Pflege-Gate",
    artefakt: "pflege-gate-report.md (oder npx tsx scripts/pflege-gate.ts)",
    status:
      planVerdikt === "PASS" && codeVerdikt === "PASS"
        ? phaseFiles.length >= 4
          ? "⚠️"
          : "❌"
        : "❌",
    detail:
      planVerdikt === "PASS" && codeVerdikt === "PASS"
        ? "lauffähig"
        : "blockiert",
  });

  // Nächster Schritt
  let naechster = "Live-Deploy ✅";
  if (codeVerdikt !== "PASS") naechster = "Code-Validator (mode=code) laufen lassen";
  if (phaseFiles.length < 4) naechster = "Code-Generator laufen lassen";
  if (planVerdikt !== "PASS") naechster = "Plan-Validator (mode=plan) laufen lassen";
  if (!planVorhanden) naechster = "Plan-Phase: didaktik-regisseur";

  return {
    ceId,
    situationId,
    steps: status,
    naechsterSchritt: naechster,
    liveDeployFreigegeben:
      planVerdikt === "PASS" &&
      codeVerdikt === "PASS" &&
      phaseFiles.length >= 4,
  };
}

function printStatus(s: PipelineStatus) {
  console.log(`\n${"═".repeat(72)}`);
  console.log(`  ${s.ceId} / ${s.situationId}`);
  console.log("═".repeat(72));
  for (const step of s.steps) {
    console.log(`  ${step.status}  ${step.name}`);
    console.log(`       └─ ${step.artefakt} → ${step.detail}`);
  }
  console.log("─".repeat(72));
  if (s.liveDeployFreigegeben) {
    console.log(`  ✅ Live-Deploy freigegeben`);
  } else {
    console.log(`  ⛔ Nicht deploy-bereit`);
    console.log(`  ➜ Nächster Schritt: ${s.naechsterSchritt}`);
  }
  console.log("═".repeat(72));
}

function main() {
  const args = process.argv.slice(2);
  const isAll = args.includes("--all");
  const ceId = args.find((a) => a.startsWith("ce-"));
  const sit = args.find((a) => !a.startsWith("--") && a !== ceId);

  if (!ceId) {
    console.error("Usage: situation-pipeline.ts ce-XX [situation-id|--all]");
    process.exit(1);
  }

  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) {
    console.error(`CE fehlt: ${ceDir}`);
    process.exit(1);
  }

  const sits = isAll
    ? fs.readdirSync(ceDir).filter((d) => fs.statSync(path.join(ceDir, d)).isDirectory())
    : sit
      ? [sit]
      : [];

  for (const s of sits) {
    printStatus(checkSituation(ceId, s));
  }
}

main();
