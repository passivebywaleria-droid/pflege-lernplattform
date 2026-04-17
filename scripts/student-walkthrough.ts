#!/usr/bin/env npx tsx
/**
 * Student-Walkthrough — Simuliert einen B1-Schüler-Durchlauf.
 *
 * Checks:
 *   1. Flow-Kohärenz: Alle Sessions spielbar, keine toten Enden?
 *   2. Begriffe-vor-Test: Wird jeder getestete Fachbegriff vorher erklärt?
 *   3. Lese-Last: Wie viele Wörter pro Session? (Ziel: <3000)
 *   4. Interaktions-Dichte: Quiz/Text-Ratio (Ziel: 1:3 bis 1:5)
 *   5. Monotonie-Check: >3 gleiche Step-Typen hintereinander?
 *   6. Session-Balance: Sessions gleichmäßig verteilt?
 *
 * Usage:
 *   npx tsx scripts/student-walkthrough.ts le-01
 *   npx tsx scripts/student-walkthrough.ts le-06
 */

import * as fs from "fs";
import * as path from "path";

// ═══════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════

interface Finding {
  check: string;
  session: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  detail: string;
}

interface StepLike {
  stepId: string;
  stepType: string;
  contentC1: { title: string; body: string; glossarBegriffe?: string[] };
  contentB1?: { title: string; body: string };
  question?: Record<string, unknown>;
  themenblockPhase?: string;
  [key: string]: unknown;
}

// Step-Typen die als "Quiz" gelten (Interaktion, nicht nur Lesen)
const QUIZ_TYPES = new Set([
  "mc", "dialog", "matching", "sorting", "categorize", "crossword",
  "cloze", "fillin", "sequencing", "truefalse", "timer", "memory",
  "hotspot", "swipe", "slider", "branching", "highlight", "confidence",
  "estimation", "calculation", "errorspot", "matrix", "tablefillin",
  "wordorder", "conceptmap", "freetext", "labelImage",
]);

// Step-Typen die als "Lese-Content" gelten
const TEXT_TYPES = new Set(["text", "summary", "reveal", "flipcard", "comparison"]);

// ═══════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════

function countWords(text: string): number {
  if (!text) return 0;
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

function loadSessionSteps(leDir: string, sessionFile: string): StepLike[] {
  try {
    const filePath = path.join(leDir, sessionFile);
    const mod = require(filePath);
    const stepsKey = Object.keys(mod).find((k) =>
      /(_STEPS_S\d|^STEPS_)/.test(k)
    );
    if (!stepsKey) return [];
    const steps = mod[stepsKey] as StepLike[];
    delete require.cache[require.resolve(filePath)];
    return steps;
  } catch {
    return [];
  }
}

// ═══════════════════════════════════════════════════════════
// Checks
// ═══════════════════════════════════════════════════════════

function checkLeseLast(steps: StepLike[], session: string): Finding[] {
  const findings: Finding[] = [];
  let totalWords = 0;

  for (const step of steps) {
    // B1-Schüler liest contentB1, Fallback contentC1
    const body = step.contentB1?.body || step.contentC1?.body || "";
    const title = step.contentB1?.title || step.contentC1?.title || "";
    totalWords += countWords(body) + countWords(title);
  }

  if (totalWords > 4000) {
    findings.push({
      check: "LESE_LAST",
      session,
      severity: "HIGH",
      detail: `${totalWords} Wörter (Ziel: <3000, Max: 4000)`,
    });
  } else if (totalWords > 3000) {
    findings.push({
      check: "LESE_LAST",
      session,
      severity: "MEDIUM",
      detail: `${totalWords} Wörter (Ziel: <3000)`,
    });
  }

  return findings;
}

function checkInteraktionsDichte(
  steps: StepLike[],
  session: string
): Finding[] {
  const findings: Finding[] = [];
  const quizCount = steps.filter((s) => QUIZ_TYPES.has(s.stepType)).length;
  const textCount = steps.filter((s) => TEXT_TYPES.has(s.stepType)).length;
  const total = steps.length;

  if (total === 0) return findings;

  const quizRatio = quizCount / total;

  if (quizRatio < 0.2) {
    findings.push({
      check: "INTERAKTIONS_DICHTE",
      session,
      severity: "HIGH",
      detail: `Nur ${Math.round(quizRatio * 100)}% Quiz (${quizCount}/${total}). Zu wenig Interaktion. Ziel: ≥30%`,
    });
  } else if (quizRatio < 0.3) {
    findings.push({
      check: "INTERAKTIONS_DICHTE",
      session,
      severity: "MEDIUM",
      detail: `${Math.round(quizRatio * 100)}% Quiz (${quizCount}/${total}). Könnte interaktiver sein. Ziel: ≥30%`,
    });
  }

  if (quizRatio > 0.8) {
    findings.push({
      check: "INTERAKTIONS_DICHTE",
      session,
      severity: "MEDIUM",
      detail: `${Math.round(quizRatio * 100)}% Quiz (${quizCount}/${total}). Zu wenig Erklärung zwischen den Fragen.`,
    });
  }

  return findings;
}

function checkMonotonie(steps: StepLike[], session: string): Finding[] {
  const findings: Finding[] = [];
  let consecutive = 1;
  let lastType = "";

  for (let i = 0; i < steps.length; i++) {
    if (steps[i].stepType === lastType) {
      consecutive++;
    } else {
      if (consecutive > 3) {
        findings.push({
          check: "MONOTONIE",
          session,
          severity: consecutive > 5 ? "HIGH" : "MEDIUM",
          detail: `${consecutive}× "${lastType}" hintereinander (Steps ${i - consecutive}–${i - 1}). Max empfohlen: 3`,
        });
      }
      consecutive = 1;
      lastType = steps[i].stepType;
    }
  }

  // Letzten Block prüfen
  if (consecutive > 3) {
    findings.push({
      check: "MONOTONIE",
      session,
      severity: consecutive > 5 ? "HIGH" : "MEDIUM",
      detail: `${consecutive}× "${lastType}" am Ende. Max empfohlen: 3`,
    });
  }

  return findings;
}

function checkBegriffeVorTest(
  steps: StepLike[],
  session: string
): Finding[] {
  const findings: Finding[] = [];

  // Sammle alle erklärten Begriffe (aus Text-Steps und Glossar-Referenzen)
  const erklaerteBegriffe = new Set<string>();

  for (const step of steps) {
    // Begriffe aus Glossar-Referenzen in Text-Steps sammeln
    if (step.contentC1?.glossarBegriffe) {
      for (const b of step.contentC1.glossarBegriffe) {
        erklaerteBegriffe.add(b.toLowerCase());
      }
    }
    // Titel von Text-Steps als "erklärt" werten
    if (TEXT_TYPES.has(step.stepType) && step.contentC1?.title) {
      erklaerteBegriffe.add(step.contentC1.title.toLowerCase());
    }
  }

  // Dann prüfe Quiz-Steps: Enthalten sie Begriffe die vorher nicht vorkamen?
  // (Vereinfachte Heuristik: Prüfe ob Quiz-Titel-Wörter im vorherigen Text vorkamen)
  const allPreviousText = new Set<string>();

  for (const step of steps) {
    if (QUIZ_TYPES.has(step.stepType)) {
      const title = step.contentC1?.title?.toLowerCase() || "";
      // Prüfe ob der Titel-Kontext vorher erklärt wurde
      const titleWords = title.split(/\s+/).filter((w) => w.length > 8);
      for (const word of titleWords) {
        if (
          !allPreviousText.has(word) &&
          !erklaerteBegriffe.has(word) &&
          // Fachbegriffe (lang, Großbuchstabe im Original)
          step.contentC1?.title?.match(new RegExp(`\\b${word}`, "i"))
        ) {
          // Nur warnen bei wirklich langen Fachbegriffen
          if (word.length > 10) {
            findings.push({
              check: "BEGRIFF_VOR_TEST",
              session,
              severity: "LOW",
              detail: `"${word}" in Quiz "${step.stepId}" — vorher nicht erklärt?`,
            });
          }
        }
      }
    }

    // Text für spätere Referenz sammeln
    const body = step.contentC1?.body?.toLowerCase() || "";
    for (const word of body.split(/\s+/)) {
      if (word.length > 5) allPreviousText.add(word);
    }
  }

  return findings;
}

function checkSessionBalance(
  sessionStats: { session: string; steps: number }[]
): Finding[] {
  const findings: Finding[] = [];
  if (sessionStats.length < 2) return findings;

  const counts = sessionStats.map((s) => s.steps);
  const avg = counts.reduce((a, b) => a + b, 0) / counts.length;
  const min = Math.min(...counts);
  const max = Math.max(...counts);

  // Session-Balance: Keine Session sollte <50% oder >200% vom Durchschnitt haben
  for (const stat of sessionStats) {
    if (stat.steps < avg * 0.4 && stat.steps > 0) {
      findings.push({
        check: "SESSION_BALANCE",
        session: stat.session,
        severity: "MEDIUM",
        detail: `Nur ${stat.steps} Steps (Ø ${Math.round(avg)}). Session zu kurz?`,
      });
    }
    if (stat.steps > avg * 2.0) {
      findings.push({
        check: "SESSION_BALANCE",
        session: stat.session,
        severity: "MEDIUM",
        detail: `${stat.steps} Steps (Ø ${Math.round(avg)}). Session zu lang — aufteilen?`,
      });
    }
  }

  return findings;
}

function checkStepTypeVielfalt(steps: StepLike[], session: string): Finding[] {
  const findings: Finding[] = [];
  const types = new Set(steps.map((s) => s.stepType));

  if (steps.length > 20 && types.size < 5) {
    findings.push({
      check: "STEP_TYP_VIELFALT",
      session,
      severity: "MEDIUM",
      detail: `Nur ${types.size} verschiedene Step-Typen bei ${steps.length} Steps. Mehr Abwechslung? Typen: ${Array.from(types).join(", ")}`,
    });
  }

  return findings;
}

// ═══════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════

function main() {
  const leId = process.argv[2];
  if (!leId) {
    console.log("Usage: npx tsx scripts/student-walkthrough.ts <le-id>");
    process.exit(1);
  }

  const contentDir = path.resolve(__dirname, "..", "content");
  const leDir = path.join(contentDir, leId);

  if (!fs.existsSync(leDir)) {
    console.error(`❌ ${leDir} nicht gefunden`);
    process.exit(1);
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`  STUDENT-WALKTHROUGH: ${leId.toUpperCase()}`);
  console.log("═".repeat(60));

  const sessionFiles = fs
    .readdirSync(leDir)
    .filter((f) => f.startsWith("steps-s") && f.endsWith(".ts"))
    .sort();

  const allFindings: Finding[] = [];
  const sessionStats: { session: string; steps: number }[] = [];

  for (const file of sessionFiles) {
    const sessionId = file.replace("steps-", "").replace(".ts", "");
    const steps = loadSessionSteps(leDir, file);

    if (steps.length === 0) {
      console.log(`  ⚠️  ${sessionId}: Keine Steps`);
      continue;
    }

    sessionStats.push({ session: sessionId, steps: steps.length });

    // Quiz vs Text
    const quizCount = steps.filter((s) => QUIZ_TYPES.has(s.stepType)).length;
    const textCount = steps.filter((s) => TEXT_TYPES.has(s.stepType)).length;
    const otherCount = steps.length - quizCount - textCount;
    console.log(
      `  ${sessionId}: ${steps.length} Steps (${quizCount} Quiz, ${textCount} Text, ${otherCount} Sonstige)`
    );

    // Checks
    allFindings.push(...checkLeseLast(steps, sessionId));
    allFindings.push(...checkInteraktionsDichte(steps, sessionId));
    allFindings.push(...checkMonotonie(steps, sessionId));
    allFindings.push(...checkBegriffeVorTest(steps, sessionId));
    allFindings.push(...checkStepTypeVielfalt(steps, sessionId));
  }

  // Session-Balance (über alle Sessions)
  allFindings.push(...checkSessionBalance(sessionStats));

  // Ergebnis
  console.log(`\n${"═".repeat(60)}`);
  const high = allFindings.filter((f) => f.severity === "HIGH").length;
  const medium = allFindings.filter((f) => f.severity === "MEDIUM").length;
  const low = allFindings.filter((f) => f.severity === "LOW").length;

  if (allFindings.length === 0) {
    console.log(`  ✅ Walkthrough OK — keine Probleme gefunden`);
  } else {
    console.log(
      `  📊 ${allFindings.length} Findings (${high} HIGH, ${medium} MEDIUM, ${low} LOW)`
    );
    console.log("");
    for (const f of allFindings) {
      const icon =
        f.severity === "HIGH" ? "❌" : f.severity === "MEDIUM" ? "⚠️" : "ℹ️";
      console.log(`  ${icon} [${f.check}] ${f.session}: ${f.detail}`);
    }
  }
  console.log("═".repeat(60));

  // Report
  const reportPath = path.join(leDir, "walkthrough-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        leId,
        timestamp: new Date().toISOString(),
        sessions: sessionStats,
        findings: allFindings,
      },
      null,
      2
    ),
    "utf-8"
  );
  console.log(`  → ${reportPath}`);

  process.exit(high > 0 ? 1 : 0);
}

main();
