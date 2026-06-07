#!/usr/bin/env npx tsx
/**
 * Content-Walkthrough-Validator
 *
 * Validiert alle Content-Situationen aus Schüler-Sicht — ohne Browser,
 * rein auf Datenstruktur. Prüft Dialog-Context, MC-Options, Step-Felder,
 * Encoding-Artefakte, Inline-Wissen-Vollständigkeit und mehr.
 *
 * Usage:
 *   npx tsx scripts/content-walkthrough-validator.ts ce-02 frau-m-nacht-sturz
 *   npx tsx scripts/content-walkthrough-validator.ts ce-02 --all
 *   npx tsx scripts/content-walkthrough-validator.ts ce-02 --all --pipeline
 */

import * as fs from "fs";
import * as path from "path";

// ─── Typen ─────────────────────────────────────────────────────

type Severity = "HOCH" | "MITTEL" | "NIEDRIG";

interface Finding {
  ruleId: string;
  severity: Severity;
  location: string;       // z.B. "informieren/ce02-frau-m-info-01" oder "phase-informieren.ts:14"
  message: string;
}

interface SituationReport {
  situationId: string;
  totalSteps: number;
  findings: Finding[];
  hochCount: number;
  mittelCount: number;
  niedrigCount: number;
}

// ─── Konstanten ────────────────────────────────────────────────

const PHASE_FILES = [
  "phase-informieren",
  "phase-beobachten",
  "phase-planen",
  "phase-durchfuehren",
  "phase-evaluieren",
  "phase-dokumentieren",
];

const PHASE_NAMES = [
  "informieren",
  "beobachten",
  "planen",
  "durchfuehren",
  "evaluieren",
  "dokumentieren",
];

// Bekannte Encoding-Artefakte (aus fix-umlaute.ts)
const ENCODING_ARTEFAKTE = [
  "zürst", "aktüll", "konseqü", "daürhaft", "Vertraün", "Baür",
  "neüs", "neür", "Freqünz", "individüll", "Saürstoff", "visülle",
  "schaün", "kontextüll", "daürt", "qüngeln", "Betreür", "Traür",
  "eventüll", "residüll", "Steürung", "genaür", "Augenbraün",
  "Seqüncing", "Atemfreqünz", "berühigst", "überzügen", "Feürsturm",
  "aufbaün",
];

// Sprechverben für D-01 Check
const SPRECHVERBEN = [
  "sagt", "spricht", "murmelt", "flüstert", "ruft", "fragt",
  "antwortet", "erwidert", "stöhnt", "seufzt", "wispert",
];

// ─── Helfer ────────────────────────────────────────────────────

function findPhaseExport(mod: Record<string, unknown>): { kernSteps: unknown[]; optionaleSteps: unknown[]; kontext?: string } | null {
  for (const key of Object.keys(mod)) {
    const val = mod[key] as Record<string, unknown> | undefined;
    if (val && typeof val === "object" && Array.isArray(val.kernSteps)) {
      return {
        kernSteps: val.kernSteps as unknown[],
        optionaleSteps: (val.optionaleSteps as unknown[]) || [],
        kontext: val.kontext as string | undefined,
      };
    }
  }
  return null;
}

function findPatientExport(mod: Record<string, unknown>): Record<string, unknown> | null {
  for (const key of Object.keys(mod)) {
    const val = mod[key] as Record<string, unknown> | undefined;
    if (val && typeof val === "object" && typeof val.patientId === "string") {
      return val;
    }
  }
  return null;
}

function str(val: unknown): string {
  if (typeof val === "string") return val;
  return "";
}

function num(val: unknown): number {
  if (typeof val === "number") return val;
  return -1;
}

function arr(val: unknown): unknown[] {
  if (Array.isArray(val)) return val;
  return [];
}

// ─── Validierungs-Regeln ───────────────────────────────────────

function validateStep(
  step: Record<string, unknown>,
  phaseName: string,
  findings: Finding[],
  seenStepIds: Set<string>,
): void {
  const stepId = str(step.stepId);
  const stepType = str(step.stepType);
  const phase = step.phase;
  const bloomLevel = num(step.bloomLevel);
  const quellen = arr(step.quellen);
  const transition = step.transition;
  const contentC1 = step.contentC1 as Record<string, unknown> | undefined;
  const contentB1 = step.contentB1 as Record<string, unknown> | undefined;
  const question = step.question as Record<string, unknown> | undefined;
  const inlineWissen = step.inlineWissen as Record<string, unknown> | undefined;

  const loc = `${phaseName}/${stepId || "(leer)"}`;

  // ── G-01: stepId leer ──
  if (!stepId || stepId.trim() === "") {
    findings.push({ ruleId: "G-01", severity: "HOCH", location: loc, message: "stepId ist leer" });
  }

  // ── G-10: Duplikat-stepId ──
  if (stepId && seenStepIds.has(stepId)) {
    findings.push({ ruleId: "G-10", severity: "HOCH", location: loc, message: `Duplikat-stepId: "${stepId}"` });
  }
  if (stepId) seenStepIds.add(stepId);

  // ── G-03: title leer ──
  const title = contentC1 ? str(contentC1.title) : "";
  if (!title || title.trim() === "") {
    findings.push({ ruleId: "G-03", severity: "HOCH", location: loc, message: "contentC1.title ist leer" });
  }

  // ── G-04: body leer (Ausnahme: inlineWissen) ──
  const body = contentC1 ? str(contentC1.body) : "";
  if ((!body || body.trim() === "") && stepType !== "inlineWissen") {
    findings.push({ ruleId: "G-04", severity: "HOCH", location: loc, message: "contentC1.body ist leer (kein inlineWissen-Step)" });
  }

  // ── G-02: Encoding-Artefakte in stepId ──
  if (stepId) {
    for (const art of ENCODING_ARTEFAKTE) {
      if (stepId.toLowerCase().includes(art.toLowerCase())) {
        findings.push({ ruleId: "G-02", severity: "MITTEL", location: loc, message: `Encoding-Artefakt in stepId: "${art}"` });
        break;
      }
    }
  }

  // ── G-05: contentB1 fehlt wenn contentC1 existiert ──
  if (contentC1 && !contentB1) {
    findings.push({ ruleId: "G-05", severity: "MITTEL", location: loc, message: "contentB1 fehlt (contentC1 existiert)" });
  }

  // ── G-06: phase nicht 1-6 ──
  const validPhases = [1, 2, 3, 4, 5, 6, "s1", "s2", "s3", "s4", "s5", "s6"];
  if (phase !== undefined && phase !== null && !validPhases.includes(phase as string | number)) {
    findings.push({ ruleId: "G-06", severity: "NIEDRIG", location: loc, message: `phase "${phase}" nicht im erwarteten Bereich (1-6 oder s1-s6)` });
  }

  // ── G-07: bloomLevel nicht 1-6 ──
  if (bloomLevel !== -1 && (bloomLevel < 1 || bloomLevel > 6)) {
    findings.push({ ruleId: "G-07", severity: "NIEDRIG", location: loc, message: `bloomLevel ${bloomLevel} nicht im Bereich 1-6` });
  }

  // ── G-08: quellen Array leer ──
  if (quellen.length === 0) {
    findings.push({ ruleId: "G-08", severity: "MITTEL", location: loc, message: "quellen Array ist leer" });
  }

  // ── Transition-Checks ──
  if (transition !== undefined && transition !== null) {
    const transStr = str(transition);
    // T-01: transition vorhanden aber leer
    if (transStr.trim() === "") {
      findings.push({ ruleId: "T-01", severity: "NIEDRIG", location: loc, message: "transition vorhanden aber leer" });
    }
    // T-02: transition endet mit ":"
    if (transStr.trim().endsWith(":")) {
      findings.push({ ruleId: "T-02", severity: "MITTEL", location: loc, message: `transition endet mit ":"` });
    }
    // T-03: transition > 200 Zeichen
    if (transStr.length > 200) {
      findings.push({ ruleId: "T-03", severity: "NIEDRIG", location: loc, message: `transition hat ${transStr.length} Zeichen (> 200)` });
    }
  }

  // ── Dialog-Checks (D-01, D-02, D-03) ──
  if (question && Array.isArray(question.dialogPhases)) {
    const dialogPhases = question.dialogPhases as Record<string, unknown>[];

    for (let i = 0; i < dialogPhases.length; i++) {
      const dp = dialogPhases[i];
      const dpLoc = `${loc}/dialogPhase[${i}]`;
      const context = str(dp.context);
      const options = arr(dp.options) as Record<string, unknown>[];

      // D-01: Dialog-Context ohne Patienten-Zitat
      if (context.trim().endsWith(":") && !/"[^"]+"/.test(context)) {
        findings.push({ ruleId: "D-01", severity: "HOCH", location: dpLoc, message: `Dialog-Context endet mit ":" ohne Patienten-Zitat in Anführungszeichen` });
      }
      // Auch: Sprechverben + ":" ohne Zitat
      for (const verb of SPRECHVERBEN) {
        const pattern = new RegExp(`${verb}[^"]*:\\s*$`, "i");
        if (pattern.test(context) && !/"[^"]+"/.test(context)) {
          findings.push({ ruleId: "D-01", severity: "HOCH", location: dpLoc, message: `Dialog-Context enthält Sprechverb "${verb}" + ":" ohne Zitat` });
          break;
        }
      }

      // D-02: Dialog-Option unvollständig
      for (let j = 0; j < options.length; j++) {
        const opt = options[j];
        const optLoc = `${dpLoc}/option[${j}]`;
        if (!str(opt.text).trim()) {
          findings.push({ ruleId: "D-02", severity: "HOCH", location: optLoc, message: "Dialog-Option text ist leer" });
        }
        if (!str(opt.patientResponse).trim()) {
          findings.push({ ruleId: "D-02", severity: "HOCH", location: optLoc, message: "Dialog-Option patientResponse ist leer" });
        }
        if (typeof opt.score !== "number") {
          findings.push({ ruleId: "D-02", severity: "HOCH", location: optLoc, message: "Dialog-Option score fehlt oder ist kein number" });
        }
        if (!str(opt.feedback).trim()) {
          findings.push({ ruleId: "D-02", severity: "HOCH", location: optLoc, message: "Dialog-Option feedback ist leer" });
        }
      }

      // D-03: Score-Verteilung
      if (options.length > 0) {
        const scores = options.map(o => num(o.score));
        const hasHigh = scores.some(s => s >= 2);
        const hasLow = scores.some(s => s <= 1);
        if (!hasHigh) {
          findings.push({ ruleId: "D-03", severity: "HOCH", location: dpLoc, message: "Keine Option mit score >= 2 (keine gute Antwort)" });
        }
        if (!hasLow) {
          findings.push({ ruleId: "D-03", severity: "HOCH", location: dpLoc, message: "Keine Option mit score <= 1 (kein Distraktor)" });
        }
      }
    }
  }

  // ── MC-Checks (MC-01, MC-02, MC-03) ──
  if (stepType === "mc" && question) {
    const optionen = arr(question.optionen) as Record<string, unknown>[];
    if (optionen.length > 0) {
      // MC-01: Keine richtige Antwort
      const hasCorrect = optionen.some(o => o.isCorrect === true);
      if (!hasCorrect) {
        findings.push({ ruleId: "MC-01", severity: "HOCH", location: loc, message: "Keine Option mit isCorrect: true" });
      }

      // MC-02: Leere Explanation
      for (let i = 0; i < optionen.length; i++) {
        const expl = str(optionen[i].explanation);
        if (!expl || expl.length < 10) {
          findings.push({ ruleId: "MC-02", severity: "HOCH", location: `${loc}/option[${i}]`, message: `explanation fehlt oder zu kurz (${expl.length} Zeichen)` });
        }
      }

      // MC-03: B1-Explanation fehlt wenn contentB1 existiert
      if (contentB1) {
        for (let i = 0; i < optionen.length; i++) {
          const explB1 = str(optionen[i].explanationB1);
          if (!explB1 || explB1.trim() === "") {
            findings.push({ ruleId: "MC-03", severity: "MITTEL", location: `${loc}/option[${i}]`, message: "explanationB1 fehlt (contentB1 existiert)" });
          }
        }
      }
    }
  }

  // ── Sorting-Check (S-01) ──
  if (stepType === "sorting" && question) {
    const sortItems = arr(question.sortItems);
    if (sortItems.length < 2) {
      findings.push({ ruleId: "S-01", severity: "MITTEL", location: loc, message: `sortItems hat ${sortItems.length} Items (< 2)` });
    }
  }

  // ── Matching-Check (M-01) ──
  if (stepType === "matching" && question) {
    const matchingPairs = arr(question.matchingPairs);
    if (matchingPairs.length === 0) {
      findings.push({ ruleId: "M-01", severity: "MITTEL", location: loc, message: "matchingPairs ist leer" });
    }
  }

  // ── InlineWissen-Checks (IW-01 bis IW-05) ──
  if (stepType === "inlineWissen") {
    if (!inlineWissen) {
      findings.push({ ruleId: "IW-01", severity: "HOCH", location: loc, message: "stepType=inlineWissen aber inlineWissen-Objekt fehlt" });
    } else {
      const kerntext = str(inlineWissen.kerntext);
      const faustregel = str(inlineWissen.faustregel);
      const karteikarte = inlineWissen.karteikarte as Record<string, unknown> | undefined;
      const storyAufhaenger = str(inlineWissen.storyAufhaenger);
      const kerntextB1 = inlineWissen.kerntextB1;

      // IW-01: kerntext leer
      if (!kerntext || kerntext.trim() === "") {
        findings.push({ ruleId: "IW-01", severity: "HOCH", location: loc, message: "inlineWissen.kerntext ist leer" });
      }

      // IW-02: faustregel leer
      if (!faustregel || faustregel.trim() === "") {
        findings.push({ ruleId: "IW-02", severity: "HOCH", location: loc, message: "inlineWissen.faustregel ist leer" });
      }

      // IW-03: karteikarte fehlt oder vorderseite/rueckseite leer
      if (!karteikarte) {
        findings.push({ ruleId: "IW-03", severity: "HOCH", location: loc, message: "inlineWissen.karteikarte fehlt" });
      } else {
        if (!str(karteikarte.vorderseite).trim()) {
          findings.push({ ruleId: "IW-03", severity: "HOCH", location: loc, message: "inlineWissen.karteikarte.vorderseite ist leer" });
        }
        if (!str(karteikarte.rueckseite).trim()) {
          findings.push({ ruleId: "IW-03", severity: "HOCH", location: loc, message: "inlineWissen.karteikarte.rueckseite ist leer" });
        }
      }

      // IW-04: storyAufhaenger leer
      if (!storyAufhaenger || storyAufhaenger.trim() === "") {
        findings.push({ ruleId: "IW-04", severity: "MITTEL", location: loc, message: "inlineWissen.storyAufhaenger ist leer" });
      }

      // IW-05: kerntextB1 fehlt wenn kerntext existiert
      if (kerntext && kerntext.trim() !== "" && (!kerntextB1 || str(kerntextB1).trim() === "")) {
        findings.push({ ruleId: "IW-05", severity: "MITTEL", location: loc, message: "inlineWissen.kerntextB1 fehlt (kerntext existiert)" });
      }
    }
  }
}

function validateEncodingInFile(
  filePath: string,
  fileName: string,
  findings: Finding[],
): void {
  let content: string;
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch {
    return;
  }

  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const art of ENCODING_ARTEFAKTE) {
      if (line.includes(art)) {
        findings.push({
          ruleId: "ENC-01",
          severity: "MITTEL",
          location: `${fileName}:${i + 1}`,
          message: `Encoding-Artefakt "${art}" gefunden`,
        });
      }
    }
  }
}

// ─── Situations-Validierung ────────────────────────────────────

async function validateSituation(ceId: string, situationId: string): Promise<SituationReport> {
  const dir = path.join(process.cwd(), "content", ceId, "situationen", situationId);
  const findings: Finding[] = [];
  let totalSteps = 0;
  const seenStepIds = new Set<string>();

  // ── PAT-01: patient.ts prüfen ──
  const patientPath = path.join(dir, "patient.ts");
  if (!fs.existsSync(patientPath)) {
    findings.push({ ruleId: "PAT-01", severity: "HOCH", location: "patient.ts", message: "patient.ts fehlt" });
  } else {
    try {
      const patMod = await import(patientPath);
      const patient = findPatientExport(patMod);
      if (!patient) {
        findings.push({ ruleId: "PAT-01", severity: "HOCH", location: "patient.ts", message: "Kein PatientBeschreibung-Export gefunden" });
      } else {
        if (!str(patient.name).trim()) {
          findings.push({ ruleId: "PAT-01", severity: "HOCH", location: "patient.ts", message: "patient.name fehlt" });
        }
        if (num(patient.alter) <= 0) {
          findings.push({ ruleId: "PAT-01", severity: "HOCH", location: "patient.ts", message: "patient.alter fehlt oder ungültig" });
        }
        if (arr(patient.diagnosen).length === 0) {
          findings.push({ ruleId: "PAT-01", severity: "HOCH", location: "patient.ts", message: "patient.diagnosen ist leer" });
        }
      }
    } catch (err) {
      findings.push({ ruleId: "PAT-01", severity: "HOCH", location: "patient.ts", message: `Import-Fehler: ${(err as Error).message.slice(0, 100)}` });
    }

    // Encoding-Check auf patient.ts
    validateEncodingInFile(patientPath, "patient.ts", findings);
  }

  // ── P-01: Alle 6 Phase-Dateien müssen existieren ──
  for (let i = 0; i < PHASE_FILES.length; i++) {
    const phaseFile = PHASE_FILES[i];
    const phaseName = PHASE_NAMES[i];
    const filePath = path.join(dir, `${phaseFile}.ts`);

    if (!fs.existsSync(filePath)) {
      findings.push({ ruleId: "P-01", severity: "HOCH", location: `${phaseFile}.ts`, message: `Phase-Datei fehlt: ${phaseFile}.ts` });
      continue;
    }

    // Encoding-Check auf Roh-Datei
    validateEncodingInFile(filePath, `${phaseFile}.ts`, findings);

    // Dynamischer Import
    let phase: { kernSteps: unknown[]; optionaleSteps: unknown[]; kontext?: string } | null = null;
    try {
      const mod = await import(filePath);
      phase = findPhaseExport(mod);
    } catch (err) {
      findings.push({
        ruleId: "P-01",
        severity: "HOCH",
        location: `${phaseFile}.ts`,
        message: `Import-Fehler: ${(err as Error).message.slice(0, 120)}`,
      });
      continue;
    }

    if (!phase) {
      findings.push({ ruleId: "P-01", severity: "HOCH", location: `${phaseFile}.ts`, message: "Kein SituationsPhase-Export mit kernSteps gefunden" });
      continue;
    }

    // ── P-03: Leerer Kontext ──
    if (!phase.kontext || phase.kontext.trim() === "") {
      findings.push({ ruleId: "P-03", severity: "HOCH", location: `${phaseFile}.ts`, message: "kontext der Phase ist leer" });
    }

    // ── P-02: Weniger als 3 kernSteps ──
    if (phase.kernSteps.length < 3) {
      findings.push({ ruleId: "P-02", severity: "HOCH", location: `${phaseFile}.ts`, message: `Nur ${phase.kernSteps.length} kernSteps (Minimum: 3)` });
    }

    // Alle Steps validieren
    const allSteps = [...phase.kernSteps, ...phase.optionaleSteps];
    totalSteps += allSteps.length;

    for (const step of allSteps) {
      if (step && typeof step === "object") {
        validateStep(step as Record<string, unknown>, phaseName, findings, seenStepIds);
      }
    }
  }

  // Encoding-Check auch für inline-wissen.ts und inline-wissen-patch.ts
  for (const extra of ["inline-wissen.ts", "inline-wissen-patch.ts"]) {
    const extraPath = path.join(dir, extra);
    if (fs.existsSync(extraPath)) {
      validateEncodingInFile(extraPath, extra, findings);
    }
  }

  const hochCount = findings.filter(f => f.severity === "HOCH").length;
  const mittelCount = findings.filter(f => f.severity === "MITTEL").length;
  const niedrigCount = findings.filter(f => f.severity === "NIEDRIG").length;

  return {
    situationId,
    totalSteps,
    findings,
    hochCount,
    mittelCount,
    niedrigCount,
  };
}

// ─── Main ──────────────────────────────────────────────────────

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const ceId = args[0];
  const sitArg = args[1] ?? "--all";
  const isPipeline = args.includes("--pipeline");

  if (!ceId) {
    console.error(
      "Usage:\n" +
      "  npx tsx scripts/content-walkthrough-validator.ts <ceId> <situationId>\n" +
      "  npx tsx scripts/content-walkthrough-validator.ts <ceId> --all\n" +
      "  npx tsx scripts/content-walkthrough-validator.ts <ceId> --all --pipeline\n",
    );
    process.exit(1);
  }

  const ceDir = path.join(process.cwd(), "content", ceId, "situationen");
  if (!fs.existsSync(ceDir)) {
    console.error(`CE-Verzeichnis nicht gefunden: ${ceDir}`);
    process.exit(1);
  }

  // Situationen bestimmen
  let situationIds: string[];
  if (sitArg === "--all") {
    situationIds = fs.readdirSync(ceDir)
      .filter(d => fs.statSync(path.join(ceDir, d)).isDirectory())
      .sort();
  } else {
    situationIds = [sitArg];
  }

  if (!isPipeline) {
    console.log("");
    console.log("═".repeat(63));
    console.log(`  CONTENT-WALKTHROUGH-VALIDATOR — ${ceId.toUpperCase()}`);
    console.log("═".repeat(63));
    console.log("");
  }

  const allReports: SituationReport[] = [];
  let globalHoch = 0;
  let globalMittel = 0;
  let globalNiedrig = 0;

  for (const sitId of situationIds) {
    const report = await validateSituation(ceId, sitId);
    allReports.push(report);

    globalHoch += report.hochCount;
    globalMittel += report.mittelCount;
    globalNiedrig += report.niedrigCount;

    if (!isPipeline) {
      const icon = report.hochCount === 0 ? "✅" : "❌";
      console.log(
        `${icon} ${report.situationId} (${report.totalSteps} Steps) — ` +
        `${report.hochCount} HOCH, ${report.mittelCount} MITTEL, ${report.niedrigCount} NIEDRIG`,
      );

      // Findings ausgeben
      for (const f of report.findings) {
        const sevIcon = f.severity === "HOCH" ? "❌" : f.severity === "MITTEL" ? "⚠️" : "ℹ️";
        const sevPad = f.severity.padEnd(6);
        console.log(`   ${sevIcon} ${f.ruleId.padEnd(7)} ${sevPad} ${f.location}`);
        console.log(`                        ${f.message}`);
      }

      if (report.findings.length > 0) console.log("");
    }
  }

  // ── JSON-Report schreiben ──
  const datum = new Date().toISOString().split("T")[0];
  const reportPath = path.join(process.cwd(), "content", ceId, `walkthrough-report-${datum}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(allReports, null, 2), "utf-8");

  if (!isPipeline) {
    console.log("═".repeat(63));
    console.log(`  ${ceId.toUpperCase()} GESAMT`);
    console.log(`  ${situationIds.length} Situationen, ${allReports.reduce((s, r) => s + r.totalSteps, 0)} Steps`);
    console.log(`  ${globalHoch} HOCH, ${globalMittel} MITTEL, ${globalNiedrig} NIEDRIG`);
    console.log(`  Report: ${reportPath}`);
    console.log("═".repeat(63));
    console.log("");
  }

  // ── Pipeline-Modus ──
  if (isPipeline) {
    for (const r of allReports) {
      console.log(JSON.stringify({
        situationId: r.situationId,
        totalSteps: r.totalSteps,
        hoch: r.hochCount,
        mittel: r.mittelCount,
        niedrig: r.niedrigCount,
      }));
    }
    if (globalHoch > 0) {
      process.exit(1);
    }
  }
}

main().catch((err) => {
  console.error("Fataler Fehler:", err);
  process.exit(1);
});
