#!/usr/bin/env npx tsx
/**
 * Prüft ob ALLE Steps einer LE die Pflichtfelder für ihren Renderer haben.
 * Spiegelt EXAKT die Logik aus step-renderer.tsx wider.
 *
 * Usage: npx tsx scripts/check-steps-renderable.ts le-01
 */

import * as fs from "fs";
import * as path from "path";

const leId = process.argv[2];
if (!leId) {
  console.log("Usage: npx tsx scripts/check-steps-renderable.ts <le-id>");
  process.exit(1);
}

const contentDir = path.resolve(__dirname, "..", "content", leId);

if (!fs.existsSync(contentDir)) {
  console.error(`❌ ${contentDir} nicht gefunden`);
  process.exit(1);
}

console.log(`\n${"═".repeat(60)}`);
console.log(`  RENDERER-CHECK: ${leId.toUpperCase()} — Alle Steps klickbar?`);
console.log("═".repeat(60));

interface StepError {
  stepId: string;
  stepType: string;
  session: string;
  issues: string[];
}

const errors: StepError[] = [];
const warnings: string[] = [];
let totalSteps = 0;
let totalSessions = 0;

// Steps laden
const stepFiles = fs.readdirSync(contentDir)
  .filter(f => f.startsWith("steps-s") && f.endsWith(".ts"))
  .sort();

for (const file of stepFiles) {
  const sessionId = file.replace("steps-", "").replace(".ts", "");
  totalSessions++;

  try {
    const mod = require(path.join(contentDir, file));
    const stepsKey = Object.keys(mod).find(k => k.startsWith("STEPS_"));
    if (!stepsKey) {
      console.log(`  ⚠️  ${file}: Kein STEPS_* Export gefunden`);
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const steps: any[] = mod[stepsKey];
    console.log(`\n  Session ${sessionId}: ${steps.length} Steps`);
    totalSteps += steps.length;

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const issues: string[] = [];

      // Basis-Pflichtfelder (ContentStep-Struktur)
      if (!step.stepId) issues.push("stepId fehlt");
      if (!step.stepType) issues.push("stepType fehlt");
      if (!step.contentC1?.title) issues.push("contentC1.title fehlt");

      const t = step.stepType;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const q: any = step.question || {};

      // ══════════════════════════════════════════════════
      // Exakte Renderer-Logik aus step-renderer.tsx
      // Jeder case prüft: "Würde der Renderer null zurückgeben?"
      // ══════════════════════════════════════════════════
      switch (t) {
        // --- Immer renderbar (kein null-return) ---
        case "text":
        case "selfrating":
        case "freetext":
          break;

        // --- Optional chaining, Fallback auf selfrating/text ---
        case "reflection":
          if (!q.reflection?.prompt && !q.fragetext) issues.push("reflection: weder reflection.prompt noch fragetext");
          break;

        case "careplan":
          // Fallback auf StepText wenn kein careplan-Objekt
          break;

        case "speech":
          // Fallback auf StepText wenn kein speech-Objekt
          break;

        // --- Brauchen spezifische verschachtelte Felder ---
        case "crowdPoll":
          if (!q.crowdPoll) issues.push("crowdPoll: q.crowdPoll fehlt");
          break;

        case "hotspot":
          if (!q.hotspot) issues.push("hotspot: q.hotspot fehlt");
          break;

        case "confidence":
          if (!q.confidenceCards && !q.statements) issues.push("confidence: weder confidenceCards noch statements");
          break;

        case "cloze":
          if (!q.cloze) issues.push("cloze: q.cloze fehlt");
          break;

        case "sequencing":
          if (!q.sequencing) issues.push("sequencing: q.sequencing fehlt");
          break;

        case "fillin":
          if (!q.fillin) issues.push("fillin: q.fillin fehlt");
          break;

        case "wordorder":
          if (!q.wordorder) issues.push("wordorder: q.wordorder fehlt");
          break;

        case "calculation":
          if (!q.calculation) issues.push("calculation: q.calculation fehlt");
          break;

        case "estimation":
          if (!q.estimation) issues.push("estimation: q.estimation fehlt");
          break;

        case "errorspot":
          if (!q.errorspot) issues.push("errorspot: q.errorspot fehlt");
          break;

        case "tablefillin":
          if (!q.tablefillin) issues.push("tablefillin: q.tablefillin fehlt");
          break;

        case "matrix":
          if (!q.matrix) issues.push("matrix: q.matrix fehlt");
          break;

        case "conceptmap":
          if (!q.conceptmap) issues.push("conceptmap: q.conceptmap fehlt");
          break;

        case "chatSim":
          if (!q.chatSim) issues.push("chatSim: q.chatSim fehlt");
          break;

        case "labelImage":
          if (!q.labelImage) issues.push("labelImage: q.labelImage fehlt");
          break;

        case "imageInteraction":
          if (!q.imageInteraction) issues.push("imageInteraction: q.imageInteraction fehlt");
          break;

        // --- Felder mit Fallback-Namen ---
        case "mc":
          if (!q.optionen && !q.options) issues.push("mc: weder optionen noch options");
          break;

        case "matching":
          if (!q.matchingPairs && !q.pairs) issues.push("matching: weder matchingPairs noch pairs");
          break;

        case "sorting":
          if (!q.sortItems && !q.items) issues.push("sorting: weder sortItems noch items");
          break;

        case "branching":
          if (!q.branchingOptions && !q.options) issues.push("branching: weder branchingOptions noch options");
          break;

        case "truefalse":
          if (!q.trueFalseCards && !q.cards) issues.push("truefalse: weder trueFalseCards noch cards");
          break;

        case "timer":
          if (!q.timerQuestions) issues.push("timer: q.timerQuestions fehlt");
          break;

        case "memory":
          if (!q.memoryPairs && !q.pairs) issues.push("memory: weder memoryPairs noch pairs");
          break;

        case "crossword":
          if (!q.crosswordWords && !q.words) issues.push("crossword: weder crosswordWords noch words");
          break;

        case "categorize":
          if (!q.categories) issues.push("categorize: q.categories fehlt");
          if (!q.categoryItems && !q.items) issues.push("categorize: weder categoryItems noch items");
          break;

        case "highlight":
          if (!q.highlightSegments) issues.push("highlight: q.highlightSegments fehlt");
          break;

        case "dialog":
          if (!q.dialogPhases && !q.dialogLines) issues.push("dialog: weder dialogPhases noch dialogLines");
          break;

        case "swipe":
          if (!q.swipe && !q.cards) issues.push("swipe: weder swipe noch cards");
          break;

        case "flipcard":
          if (!q.flipcard && !q.cards) issues.push("flipcard: weder flipcard noch cards");
          break;

        case "reveal":
          if (!q.reveal && !q.revealItems) issues.push("reveal: weder reveal noch revealItems");
          break;

        case "timeline":
          if (!q.timeline && !q.timelineEvents) issues.push("timeline: weder timeline noch timelineEvents");
          break;

        case "comparison":
          if (!q.comparison && !q.comparisonItems) issues.push("comparison: weder comparison noch comparisonItems");
          break;

        case "diagram":
          if (!q.diagram && !q.diagramType) issues.push("diagram: weder diagram noch diagramType");
          break;

        case "slider":
          if (!q.slider && q.min == null) issues.push("slider: weder slider noch min");
          break;

        case "summary":
          if (!q.summary && !q.summaryPoints) issues.push("summary: weder summary noch summaryPoints");
          break;

        case "audio":
          if (!q.audio?.audioUrl && !q.audioUrl && !step.audioUrl) issues.push("audio: keine audioUrl");
          break;

        default:
          // Unbekannte Typen → default case in Renderer zeigt StepText (kein null)
          warnings.push(`${step.stepId}: Unbekannter stepType "${t}" → wird als Text gerendert`);
          break;
      }

      if (issues.length > 0) {
        errors.push({ stepId: step.stepId || `index-${i}`, stepType: t, session: sessionId, issues });
        console.log(`    ❌ ${step.stepId} (${t}): ${issues.join(", ")}`);
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ ${file}: Import-Fehler: ${msg}`);
  }
}

// Artikel prüfen
const artikelPath = path.join(contentDir, "artikel.ts");
if (fs.existsSync(artikelPath)) {
  try {
    const mod = require(artikelPath);
    const key = Object.keys(mod).find(k => k.includes("ARTIKEL"));
    if (key) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const kapitel: any[] = mod[key];
      console.log(`\n  Artikel: ${kapitel.length} Kapitel`);
      for (const kap of kapitel) {
        // LE-01 nutzt kapitelId/titel/bloecke, LE-08 nutzt id/title/content
        const hasId = kap.kapitelId || kap.id;
        const hasTitle = kap.titel || kap.title;
        const hasContent = kap.bloecke || kap.contentC1 || kap.content;
        if (!hasId) console.log(`    ❌ Kapitel ohne id/kapitelId`);
        if (!hasTitle) console.log(`    ❌ Kapitel ohne title/titel`);
        if (!hasContent) console.log(`    ⚠️  Kapitel ${hasId}: kein Content`);
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ artikel.ts: Import-Fehler: ${msg}`);
  }
} else {
  console.log(`\n  ⚠️  artikel.ts nicht vorhanden (Wissen-Tab leer)`);
}

// Fallverläufe prüfen
const fallPath = path.join(contentDir, "fallverlaeufe.ts");
if (fs.existsSync(fallPath)) {
  try {
    const mod = require(fallPath);
    const key = Object.keys(mod).find(k => k.includes("FALLVERLAEUFE"));
    if (key) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const faelle: any[] = mod[key];
      console.log(`  Fallverläufe: ${faelle.length} Patienten`);
      for (const fall of faelle) {
        if (!fall.patient?.name && !fall.patientName) console.log(`    ❌ Fall ohne Patientenname`);
        // Stationen (Pipeline v5) oder Phasen (alt)
        if (!fall.stationen && !fall.phasen && !fall.phases) console.log(`    ❌ Fall ohne Stationen/Phasen`);
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ fallverlaeufe.ts: Import-Fehler: ${msg}`);
  }
} else {
  console.log(`  ⚠️  fallverlaeufe.ts nicht vorhanden (Fall-Tab leer)`);
}

// Praxis prüfen
const praxisPath = path.join(contentDir, "praxis.ts");
if (fs.existsSync(praxisPath)) {
  try {
    const mod = require(praxisPath);
    const key = Object.keys(mod).find(k => k.includes("PRAXIS"));
    if (key) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const uebungen: any[] = mod[key];
      console.log(`  Praxis: ${uebungen.length} Übungen`);
      for (const u of uebungen) {
        if (!u.uebungId && !u.id) console.log(`    ❌ Übung ohne id`);
        if (!u.titel && !u.title) console.log(`    ❌ Übung ohne Titel`);
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ praxis.ts: Import-Fehler: ${msg}`);
  }
} else {
  console.log(`  ⚠️  praxis.ts nicht vorhanden (Praxis-Tab leer)`);
}

// Prüfungsfall prüfen
const pruefPath = path.join(contentDir, "pruefungsfall.ts");
if (fs.existsSync(pruefPath)) {
  try {
    const mod = require(pruefPath);
    const key = Object.keys(mod).find(k => k.includes("PRUEFUNGSFALL"));
    if (key) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const examCase: any = mod[key];
      console.log(`  Prüfungsfall: ${examCase.patient?.name || examCase.patientName || "vorhanden"}`);
      if (!examCase.aufgaben && !examCase.tasks && !examCase.fragen && !examCase.stationen && !examCase.phasen) {
        console.log(`    ❌ Prüfungsfall ohne Aufgaben/Phasen/Stationen`);
      }
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ pruefungsfall.ts: Import-Fehler: ${msg}`);
  }
} else {
  console.log(`  ⚠️  pruefungsfall.ts nicht vorhanden (Prüfungs-Tab leer)`);
}

// Glossar prüfen
const glossarPath = path.join(contentDir, "glossar.ts");
if (fs.existsSync(glossarPath)) {
  try {
    const mod = require(glossarPath);
    const key = Object.keys(mod).find(k => k.includes("GLOSSAR"));
    if (key) {
      console.log(`  Glossar: ${mod[key].length} Einträge`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ glossar.ts: Import-Fehler: ${msg}`);
  }
}

// Karteikarten prüfen
const kkPath = path.join(contentDir, "karteikarten.ts");
if (fs.existsSync(kkPath)) {
  try {
    const mod = require(kkPath);
    const key = Object.keys(mod).find(k => k.includes("KARTEIKARTEN"));
    if (key) {
      console.log(`  Karteikarten: ${mod[key].length} Karten`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.log(`  ❌ karteikarten.ts: Import-Fehler: ${msg}`);
  }
}

// Ergebnis
console.log(`\n${"═".repeat(60)}`);
if (warnings.length > 0) {
  console.log(`  ⚠️  ${warnings.length} Warnungen:`);
  for (const w of warnings) console.log(`     ${w}`);
  console.log();
}

if (errors.length === 0) {
  console.log(`  ✅ ALLE ${totalSteps} STEPS IN ${totalSessions} SESSIONS RENDERBAR`);
} else {
  console.log(`  ❌ ${errors.length} STEPS NICHT RENDERBAR (von ${totalSteps}):`);
  for (const e of errors) {
    console.log(`     ${e.session}/${e.stepId} (${e.stepType}): ${e.issues.join(", ")}`);
  }
}
console.log("═".repeat(60));

process.exit(errors.length > 0 ? 1 : 0);
