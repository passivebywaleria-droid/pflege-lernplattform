#!/usr/bin/env npx tsx
/**
 * Step-Qualitäts-Prüfer — Automatisierte Qualitätsprüfung generierter LEs
 *
 * Prüft: Lesbarkeit, Monotonie, Didaktik, displayFormat, Sandwich, Vollständigkeit
 *
 * Usage:
 *   npx tsx scripts/step-quality-check.ts le-01
 *   npx tsx scripts/step-quality-check.ts le-01 --report   (zusätzlich Markdown-Datei)
 */

import * as fs from "fs";
import * as path from "path";

// ============================================================
// Types (inline — vermeidet ts-node Import-Probleme)
// ============================================================

interface ContentStep {
  stepId: string;
  phase: string;
  stepType: string;
  bloomLevel: number;
  kompetenzbereich: string;
  quellen: string[];
  track?: string;
  modus?: string;
  lernziel?: string;
  themenblockPhase?: string;
  displayFormat?: string;
  imageUrl?: string;
  contentC1: { title: string; body: string; fallbezug?: string };
  contentB1?: { title: string; body: string; fallbezug?: string };
  question?: {
    fragetext?: string;
    optionen?: { text: string; isCorrect: boolean; explanation: string; explanationB1?: string }[];
    fillin?: { sentence: string };
    cloze?: { textWithBlanks: string };
    swipe?: { cards: { explanation?: string }[] };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

// ============================================================
// Severity & Check Result
// ============================================================

type Severity = "FAIL" | "WARN" | "PASS";

interface CheckResult {
  id: string;
  rule: string;
  severity: Severity;
  stepId?: string;
  detail: string;
  session?: string;
}

// ============================================================
// Constants
// ============================================================

const SAME_FEELING: Record<string, string> = {
  text: "lesen",
  reveal: "lesen",
  mc: "quiz",
  truefalse: "quiz",
  fillin: "quiz",
  cloze: "quiz",
  freetext: "schreiben",
  reflection: "schreiben",
};

const DISPLAY_FORMATS = new Set([
  "mnemonic", "analogy", "beforeafter", "procontra",
  "quote", "news", "diary", "glossary",
]);

const FILL_PHRASES = [
  "bevor wir einsteigen",
  "in dieser session lernst du",
  "lass uns gemeinsam",
  "erinnerst du dich an",
  "jetzt wird es spannend",
  "schauen wir uns das mal genauer an",
  "wie du vielleicht schon weißt",
  "in diesem abschnitt",
  "nun wollen wir",
];

const NEGATIVE_FEEDBACK_STARTS = [
  "falsch",
  "leider falsch",
  "das ist falsch",
  "nein, das stimmt nicht",
  "das ist nicht richtig",
  "leider nicht",
  "leider nein",
];

const PHASE_ORDER = [
  "BRÜCKE", "SZENE", "ERKLÄRUNG", "CHECKPOINT",
  "ANDERS_ERKLÄRT", "STORYTELLING", "PRAXIS_DIALOG",
  "PATIENTEN_PERSPEKTIVE", "ANGEHÖRIGEN_BERATUNG",
  "PFLEGEPLANUNG", "ANWENDUNG", "REFLEXION",
];

// ============================================================
// Helpers
// ============================================================

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function getAllText(step: ContentStep): string {
  const parts = [
    step.contentC1.title,
    step.contentC1.body,
    step.contentB1?.body ?? "",
    step.question?.fragetext ?? "",
  ];
  return parts.join(" ");
}

function getAllFeedbackTexts(step: ContentStep): string[] {
  const feedbacks: string[] = [];
  if (step.question?.optionen) {
    for (const opt of step.question.optionen) {
      if (opt.explanation) feedbacks.push(opt.explanation);
      if (opt.explanationB1) feedbacks.push(opt.explanationB1);
    }
  }
  if (step.question?.swipe?.cards) {
    for (const card of step.question.swipe.cards) {
      if (card.explanation) feedbacks.push(card.explanation);
    }
  }
  return feedbacks;
}

// ============================================================
// CHECK A — Lesbarkeit (Text-Länge)
// ============================================================

function checkLesbarkeit(steps: ContentStep[], session: string): CheckResult[] {
  const results: CheckResult[] = [];

  for (const step of steps) {
    const c1Words = countWords(step.contentC1.body);
    const b1Words = step.contentB1 ? countWords(step.contentB1.body) : 0;
    const titleWords = countWords(step.contentC1.title);

    // A1: C1 Body zu lang
    if (c1Words > 200) {
      results.push({ id: "A1", rule: "C1 Body > 200 Wörter", severity: "FAIL", stepId: step.stepId, detail: `${c1Words} Wörter`, session });
    } else if (c1Words > 150) {
      results.push({ id: "A1", rule: "C1 Body > 150 Wörter", severity: "WARN", stepId: step.stepId, detail: `${c1Words} Wörter`, session });
    }

    // A2: B1 Body zu lang
    if (step.contentB1) {
      if (b1Words > 120) {
        results.push({ id: "A2", rule: "B1 Body > 120 Wörter", severity: "FAIL", stepId: step.stepId, detail: `${b1Words} Wörter`, session });
      } else if (b1Words > 80) {
        results.push({ id: "A2", rule: "B1 Body > 80 Wörter", severity: "WARN", stepId: step.stepId, detail: `${b1Words} Wörter`, session });
      }
    }

    // A3: Title zu lang
    if (titleWords > 8) {
      results.push({ id: "A3", rule: "Title > 8 Wörter", severity: "WARN", stepId: step.stepId, detail: `${titleWords} Wörter: "${step.contentC1.title}"`, session });
    }

    // A4: Feedback zu lang
    const feedbacks = getAllFeedbackTexts(step);
    for (const fb of feedbacks) {
      const fbWords = countWords(fb);
      if (fbWords > 40) {
        results.push({ id: "A4", rule: "Feedback > 40 Wörter", severity: "WARN", stepId: step.stepId, detail: `${fbWords} Wörter: "${fb.substring(0, 60)}..."`, session });
      }
    }
  }

  return results;
}

// ============================================================
// CHECK B — Monotonie (Sequenz-Analyse)
// ============================================================

function checkMonotonie(steps: ContentStep[], session: string): CheckResult[] {
  const results: CheckResult[] = [];

  // B1: Gleicher stepType 3× hintereinander
  for (let i = 2; i < steps.length; i++) {
    if (steps[i].stepType === steps[i - 1].stepType && steps[i].stepType === steps[i - 2].stepType) {
      results.push({
        id: "B1", rule: "3× gleicher stepType hintereinander", severity: "FAIL",
        stepId: steps[i].stepId,
        detail: `${steps[i - 2].stepId} → ${steps[i - 1].stepId} → ${steps[i].stepId} (alle ${steps[i].stepType})`,
        session,
      });
    }
  }

  // B2: Gleiches Gefühl 2× hintereinander
  for (let i = 1; i < steps.length; i++) {
    const prev = SAME_FEELING[steps[i - 1].stepType];
    const curr = SAME_FEELING[steps[i].stepType];
    if (prev && curr && prev === curr) {
      results.push({
        id: "B2", rule: "Gleiches Gefühl hintereinander", severity: "FAIL",
        stepId: steps[i].stepId,
        detail: `${steps[i - 1].stepType} → ${steps[i].stepType} (beides "${curr}")`,
        session,
      });
    }
  }

  // B3: displayFormat-Vielfalt
  const textSteps = steps.filter(s => s.stepType === "text");
  if (textSteps.length >= 3) {
    const formats = new Set(textSteps.map(s => s.displayFormat).filter(Boolean));
    const noFormat = textSteps.filter(s => !s.displayFormat);

    if (formats.size < 3) {
      results.push({
        id: "B3", rule: "< 3 verschiedene displayFormats", severity: "FAIL",
        detail: `${formats.size} Formate bei ${textSteps.length} text-Steps: ${[...formats].join(", ") || "(keine)"}`,
        session,
      });
    }
    if (noFormat.length > 2) {
      results.push({
        id: "B3b", rule: "> 2 text-Steps ohne displayFormat", severity: "WARN",
        detail: `${noFormat.length} ohne Format: ${noFormat.map(s => s.stepId).join(", ")}`,
        session,
      });
    }

    // Gleiches displayFormat mehr als 2×
    const formatCounts: Record<string, number> = {};
    textSteps.forEach(s => {
      if (s.displayFormat) formatCounts[s.displayFormat] = (formatCounts[s.displayFormat] || 0) + 1;
    });
    for (const [fmt, count] of Object.entries(formatCounts)) {
      if (count > 2) {
        results.push({
          id: "B3c", rule: "displayFormat > 2× pro Session", severity: "WARN",
          detail: `"${fmt}" kommt ${count}× vor`, session,
        });
      }
    }
  }

  // B4: Gleicher Modus 4× hintereinander
  for (let i = 3; i < steps.length; i++) {
    const m = steps[i].modus;
    if (m && m === steps[i - 1].modus && m === steps[i - 2].modus && m === steps[i - 3].modus) {
      results.push({
        id: "B4", rule: "4× gleicher Modus hintereinander", severity: "WARN",
        stepId: steps[i].stepId, detail: `4× "${m}" am Stück`, session,
      });
      break; // Nur einmal melden
    }
  }

  // B5: Step-Typ-Vielfalt pro Session
  const uniqueTypes = new Set(steps.map(s => s.stepType));
  if (uniqueTypes.size < 8) {
    results.push({
      id: "B5", rule: "< 8 verschiedene stepTypes pro Session", severity: "WARN",
      detail: `${uniqueTypes.size} Typen: ${[...uniqueTypes].join(", ")}`, session,
    });
  }

  return results;
}

// ============================================================
// CHECK C — Didaktik (Reihenfolge & Regeln)
// ============================================================

function checkDidaktik(steps: ContentStep[], session: string): CheckResult[] {
  const results: CheckResult[] = [];

  // C1: Erster Step darf kein Selfrating/Reflection sein
  if (steps.length > 0 && (steps[0].stepType === "selfrating" || steps[0].stepType === "reflection")) {
    results.push({
      id: "C1", rule: "Opener ist selfrating/reflection", severity: "FAIL",
      stepId: steps[0].stepId, detail: `Erster Step ist ${steps[0].stepType}`, session,
    });
  }

  // C2: CHECKPOINT muss nach ERKLÄRUNG kommen
  const phases = steps.map(s => s.themenblockPhase).filter(Boolean);
  for (let i = 0; i < phases.length; i++) {
    if (phases[i] === "CHECKPOINT") {
      const before = phases.slice(0, i);
      if (!before.includes("ERKLÄRUNG")) {
        results.push({
          id: "C2", rule: "CHECKPOINT ohne vorherige ERKLÄRUNG", severity: "FAIL",
          detail: `CHECKPOINT bei Step ${i + 1} ohne ERKLÄRUNG davor`, session,
        });
      }
    }
  }

  // C3: CHECKPOINT muss MC sein
  for (const step of steps) {
    if (step.themenblockPhase === "CHECKPOINT" && step.stepType !== "mc") {
      results.push({
        id: "C3", rule: "CHECKPOINT ist nicht MC", severity: "FAIL",
        stepId: step.stepId, detail: `CHECKPOINT ist ${step.stepType} statt mc`, session,
      });
    }
  }

  // C4: Bloom aufsteigend prüfen (S1 max 3, letzte Sessions min 4)
  const bloomLevels = steps.map(s => s.bloomLevel);
  const maxBloom = Math.max(...bloomLevels);
  const sessionNum = parseInt(session.replace("s", ""));
  if (sessionNum === 1 && maxBloom > 3) {
    results.push({
      id: "C4", rule: "S1 hat Bloom > 3", severity: "WARN",
      detail: `Max Bloom in S1: ${maxBloom} (empfohlen: max 3)`, session,
    });
  }

  // C5: Track-Verteilung
  const basisCount = steps.filter(s => s.track === "basis").length;
  const basisPct = Math.round((basisCount / steps.length) * 100);
  if (basisPct < 55 || basisPct > 75) {
    results.push({
      id: "C5", rule: "Track-Verteilung außerhalb 55-75% basis", severity: "WARN",
      detail: `basis: ${basisPct}% (${basisCount}/${steps.length})`, session,
    });
  }

  // C6: Phasen-Reihenfolge innerhalb eines Themenblocks
  // Rücksprung auf SZENE/BRÜCKE = neuer Themenblock (OK)
  // Rücksprung innerhalb eines Themenblocks = Problem
  let lastPhaseIdx = -1;
  for (const step of steps) {
    if (step.themenblockPhase) {
      const idx = PHASE_ORDER.indexOf(step.themenblockPhase);
      // Neuer Themenblock: SZENE oder BRÜCKE → Reset
      if (step.themenblockPhase === "SZENE" || step.themenblockPhase === "BRÜCKE") {
        lastPhaseIdx = idx;
        continue;
      }
      if (idx >= 0 && idx < lastPhaseIdx && lastPhaseIdx - idx > 3) {
        results.push({
          id: "C6", rule: "Phasen-Reihenfolge invertiert", severity: "WARN",
          stepId: step.stepId,
          detail: `${PHASE_ORDER[lastPhaseIdx]} → ${step.themenblockPhase} (Rücksprung innerhalb TB)`,
          session,
        });
      }
      if (idx >= 0) lastPhaseIdx = idx;
    }
  }

  return results;
}

// ============================================================
// CHECK D — Sandwich-Prinzip (Feedback-Tonalität)
// ============================================================

function checkSandwich(steps: ContentStep[], session: string): CheckResult[] {
  const results: CheckResult[] = [];

  for (const step of steps) {
    if (!step.question?.optionen) continue;

    for (const opt of step.question.optionen) {
      if (opt.isCorrect || !opt.explanation) continue;

      const lower = opt.explanation.toLowerCase().trim();

      // D1: Feedback beginnt negativ
      for (const neg of NEGATIVE_FEEDBACK_STARTS) {
        if (lower.startsWith(neg)) {
          results.push({
            id: "D1", rule: "Feedback beginnt negativ (kein Sandwich)", severity: "FAIL",
            stepId: step.stepId,
            detail: `"${opt.explanation.substring(0, 60)}..."`,
            session,
          });
          break;
        }
      }
    }
  }

  return results;
}

// ============================================================
// CHECK E — Vollständigkeit
// ============================================================

function checkVollstaendigkeit(steps: ContentStep[], session: string): CheckResult[] {
  const results: CheckResult[] = [];

  // E1: contentB1 fehlt
  const noB1 = steps.filter(s => !s.contentB1).map(s => s.stepId);
  if (noB1.length > 0) {
    results.push({
      id: "E1", rule: "contentB1 fehlt", severity: "FAIL",
      detail: `${noB1.length} Steps ohne B1: ${noB1.slice(0, 5).join(", ")}${noB1.length > 5 ? "..." : ""}`,
      session,
    });
  }

  // E2: Lernziel fehlt
  const noLernziel = steps.filter(s => !s.lernziel).map(s => s.stepId);
  if (noLernziel.length > 0) {
    results.push({
      id: "E2", rule: "Lernziel fehlt", severity: "WARN",
      detail: `${noLernziel.length} Steps: ${noLernziel.slice(0, 5).join(", ")}`,
      session,
    });
  }

  // E3: Quellen fehlt bei Fakten-Steps
  const FAKTEN_TYPEN = new Set(["text", "mc", "fillin", "cloze", "truefalse"]);
  const noQuellen = steps
    .filter(s => FAKTEN_TYPEN.has(s.stepType) && (!s.quellen || s.quellen.length === 0))
    .map(s => s.stepId);
  if (noQuellen.length > 0) {
    results.push({
      id: "E3", rule: "Quellen fehlt bei Fakten-Step", severity: "WARN",
      detail: `${noQuellen.length} Steps: ${noQuellen.slice(0, 5).join(", ")}`,
      session,
    });
  }

  // E4: MC ohne Explanation
  for (const step of steps) {
    if (step.question?.optionen) {
      const noExpl = step.question.optionen.filter(o => !o.explanation || o.explanation.trim() === "");
      if (noExpl.length > 0) {
        results.push({
          id: "E4", rule: "MC-Option ohne Explanation", severity: "WARN",
          stepId: step.stepId,
          detail: `${noExpl.length} Optionen ohne Erklärung`,
          session,
        });
      }
    }
  }

  // E5: themenblockPhase fehlt
  const noPhase = steps.filter(s => !s.themenblockPhase).map(s => s.stepId);
  if (noPhase.length > 0) {
    results.push({
      id: "E5", rule: "themenblockPhase fehlt", severity: "WARN",
      detail: `${noPhase.length} Steps: ${noPhase.slice(0, 5).join(", ")}`,
      session,
    });
  }

  return results;
}

// ============================================================
// CHECK F — Füllsätze & Halluzinationen
// ============================================================

const HALLUZINATIONS_MUSTER: { pattern: RegExp; name: string }[] = [
  { pattern: /\b55\s*%.*38\s*%|38\s*%.*55\s*%|Mehrabian/i, name: "Mehrabian-Mythos" },
  { pattern: /Studien\s+(zeigen|belegen|beweisen),?\s+dass\s+\d/i, name: "Unbelegte Studienaussage" },
  { pattern: /\d+\s*%\s+aller\s+(Pflege|Kranken|Patienten)/i, name: "Prozentzahl ohne Quelle" },
];

function checkTextqualitaet(steps: ContentStep[], session: string): CheckResult[] {
  const results: CheckResult[] = [];

  for (const step of steps) {
    const allText = getAllText(step).toLowerCase();

    // F1: Füllsätze
    for (const phrase of FILL_PHRASES) {
      if (allText.includes(phrase)) {
        results.push({
          id: "F1", rule: "Füllsatz", severity: "WARN",
          stepId: step.stepId, detail: `"${phrase}"`, session,
        });
        break;
      }
    }

    // F2: Halluzinations-Muster
    for (const { pattern, name } of HALLUZINATIONS_MUSTER) {
      if (pattern.test(allText)) {
        results.push({
          id: "F2", rule: "Halluzinations-Muster", severity: "FAIL",
          stepId: step.stepId, detail: name, session,
        });
      }
    }

    // F3: Prozentzahl ohne Quellen
    if (/\d+\s*%/.test(allText) && (!step.quellen || step.quellen.length === 0)) {
      results.push({
        id: "F3", rule: "Prozentzahl ohne Quellen-Array", severity: "WARN",
        stepId: step.stepId, detail: "Enthält %-Zahl aber quellen[] ist leer", session,
      });
    }
  }

  return results;
}

// ============================================================
// Session Loader (dynamisch .ts Dateien laden)
// ============================================================

async function loadStepsFromFile(filePath: string): Promise<ContentStep[]> {
  const mod = await import(filePath);
  // Verschiedene Export-Namen unterstützen
  const stepsKey = Object.keys(mod).find(k => k.startsWith("STEPS"));
  if (!stepsKey) {
    throw new Error(`Kein STEPS_* Export in ${filePath}`);
  }
  return mod[stepsKey] as ContentStep[];
}

async function loadAllSessions(leDir: string): Promise<Map<string, ContentStep[]>> {
  const sessions = new Map<string, ContentStep[]>();
  const files = fs.readdirSync(leDir).filter(f => f.match(/^steps-s\d+\.ts$/)).sort();

  for (const file of files) {
    const sessionNum = file.match(/steps-(s\d+)\.ts/)?.[1] ?? "s?";
    const fullPath = path.resolve(leDir, file);
    try {
      const steps = await loadStepsFromFile(fullPath);
      sessions.set(sessionNum, steps);
    } catch (e) {
      console.error(`  Fehler beim Laden von ${file}: ${(e as Error).message}`);
    }
  }

  return sessions;
}

// ============================================================
// Reporting
// ============================================================

const RED = "\x1b[31m";
const YELLOW = "\x1b[33m";
const GREEN = "\x1b[32m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

function severityIcon(s: Severity): string {
  if (s === "FAIL") return `${RED}✗${RESET}`;
  if (s === "WARN") return `${YELLOW}⚠${RESET}`;
  return `${GREEN}✓${RESET}`;
}

function printTerminalReport(allResults: CheckResult[], leId: string, totalSteps: number, sessionCount: number): void {
  const fails = allResults.filter(r => r.severity === "FAIL");
  const warns = allResults.filter(r => r.severity === "WARN");

  const overall = fails.length > 0 ? `${RED}${BOLD}FAIL${RESET}` : warns.length > 0 ? `${YELLOW}${BOLD}WARN${RESET}` : `${GREEN}${BOLD}PASS${RESET}`;

  console.log("");
  console.log(`${BOLD}━━━ Step-Qualitäts-Check: ${leId} ━━━${RESET}`);
  console.log(`${DIM}${sessionCount} Sessions, ${totalSteps} Steps${RESET}`);
  console.log(`Ergebnis: ${overall}  ${RED}${fails.length} Fehler${RESET}  ${YELLOW}${warns.length} Warnungen${RESET}`);
  console.log("");

  // Gruppiert nach Session
  const bySession = new Map<string, CheckResult[]>();
  for (const r of allResults) {
    const s = r.session ?? "global";
    if (!bySession.has(s)) bySession.set(s, []);
    bySession.get(s)!.push(r);
  }

  for (const [session, results] of bySession) {
    const sessionFails = results.filter(r => r.severity !== "PASS");
    if (sessionFails.length === 0) {
      console.log(`  ${GREEN}✓${RESET} ${BOLD}${session}${RESET} — alle Checks bestanden`);
      continue;
    }

    console.log(`  ${BOLD}${session}:${RESET}`);
    for (const r of sessionFails) {
      const stepInfo = r.stepId ? `${DIM}[${r.stepId}]${RESET} ` : "";
      console.log(`    ${severityIcon(r.severity)} ${stepInfo}${r.rule}: ${r.detail}`);
    }
  }

  console.log("");
}

function generateMarkdownReport(allResults: CheckResult[], leId: string, totalSteps: number, sessionCount: number): string {
  const fails = allResults.filter(r => r.severity === "FAIL");
  const warns = allResults.filter(r => r.severity === "WARN");
  const overall = fails.length > 0 ? "FAIL" : warns.length > 0 ? "WARN" : "PASS";

  const lines: string[] = [];
  lines.push(`# Quality Report: ${leId}`);
  lines.push("");
  lines.push(`**Datum:** ${new Date().toISOString().split("T")[0]}`);
  lines.push(`**Sessions:** ${sessionCount} | **Steps:** ${totalSteps}`);
  lines.push(`**Ergebnis:** ${overall} — ${fails.length} Fehler, ${warns.length} Warnungen`);
  lines.push("");

  if (fails.length > 0) {
    lines.push("## Fehler (FAIL)");
    lines.push("");
    lines.push("| Session | Step | Regel | Detail |");
    lines.push("|---------|------|-------|--------|");
    for (const r of fails) {
      lines.push(`| ${r.session ?? ""} | ${r.stepId ?? ""} | ${r.id}: ${r.rule} | ${r.detail} |`);
    }
    lines.push("");
  }

  if (warns.length > 0) {
    lines.push("## Warnungen (WARN)");
    lines.push("");
    lines.push("| Session | Step | Regel | Detail |");
    lines.push("|---------|------|-------|--------|");
    for (const r of warns) {
      lines.push(`| ${r.session ?? ""} | ${r.stepId ?? ""} | ${r.id}: ${r.rule} | ${r.detail} |`);
    }
    lines.push("");
  }

  // Zusammenfassung pro Regel
  lines.push("## Regel-Übersicht");
  lines.push("");
  lines.push("| Regel | Beschreibung | Treffer |");
  lines.push("|-------|-------------|---------|");

  const ruleMap: Record<string, { rule: string; count: number; severity: Severity }> = {};
  for (const r of allResults) {
    if (r.severity === "PASS") continue;
    if (!ruleMap[r.id]) ruleMap[r.id] = { rule: r.rule, count: 0, severity: r.severity };
    ruleMap[r.id].count++;
  }
  for (const [id, { rule, count, severity }] of Object.entries(ruleMap).sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`| ${id} | ${rule} | ${count}× ${severity} |`);
  }

  return lines.join("\n");
}

// ============================================================
// Cross-Session Checks (über alle Sessions hinweg)
// ============================================================

function checkCrossSession(allSessions: Map<string, ContentStep[]>): CheckResult[] {
  const results: CheckResult[] = [];
  const allSteps: ContentStep[] = [];
  allSessions.forEach(steps => allSteps.push(...steps));

  // CS1: Gesamt Step-Typ-Vielfalt (min 15 über alle Sessions)
  const allTypes = new Set(allSteps.map(s => s.stepType));
  if (allTypes.size < 15) {
    results.push({
      id: "CS1", rule: "< 15 verschiedene stepTypes über alle Sessions", severity: "FAIL",
      detail: `${allTypes.size} Typen gesamt: ${[...allTypes].join(", ")}`,
      session: "gesamt",
    });
  }

  // CS2: Opener-Typ kommt doppelt vor
  const openerTypes: Record<string, string[]> = {};
  for (const [session, steps] of allSessions) {
    if (steps.length > 0) {
      const type = steps[0].stepType;
      if (!openerTypes[type]) openerTypes[type] = [];
      openerTypes[type].push(session);
    }
  }
  for (const [type, sessions] of Object.entries(openerTypes)) {
    if (sessions.length > 1) {
      results.push({
        id: "CS2", rule: "Gleicher Opener-Typ in mehreren Sessions", severity: "WARN",
        detail: `"${type}" als Opener in: ${sessions.join(", ")}`,
        session: "gesamt",
      });
    }
  }

  // CS3: Bloom-Progression über Sessions
  const sessionBlooms: { session: string; avg: number }[] = [];
  for (const [session, steps] of allSessions) {
    const avg = steps.reduce((sum, s) => sum + s.bloomLevel, 0) / steps.length;
    sessionBlooms.push({ session, avg: Math.round(avg * 10) / 10 });
  }
  // Grob: letzte Session sollte höher sein als erste
  if (sessionBlooms.length >= 3) {
    const first = sessionBlooms[0].avg;
    const last = sessionBlooms[sessionBlooms.length - 1].avg;
    if (last <= first) {
      results.push({
        id: "CS3", rule: "Bloom-Level steigt nicht über Sessions", severity: "WARN",
        detail: `S1: ∅${first} → S${sessionBlooms.length}: ∅${last}`,
        session: "gesamt",
      });
    }
  }

  return results;
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  const leId = process.argv[2];
  const skipReport = process.argv.includes("--no-report");

  if (!leId) {
    console.log("Usage: npx tsx scripts/step-quality-check.ts <le-id> [--no-report]");
    console.log("  Beispiel: npx tsx scripts/step-quality-check.ts le-01");
    console.log("  --no-report  Nur Terminal-Ausgabe, kein Markdown-File");
    process.exit(1);
  }

  const leDir = path.resolve(__dirname, "..", "content", leId);
  if (!fs.existsSync(leDir)) {
    console.error(`Verzeichnis nicht gefunden: ${leDir}`);
    process.exit(1);
  }

  console.log(`Lade Sessions aus content/${leId}/...`);
  const sessions = await loadAllSessions(leDir);

  if (sessions.size === 0) {
    console.error("Keine Steps-Dateien gefunden.");
    process.exit(1);
  }

  let totalSteps = 0;
  const allResults: CheckResult[] = [];

  // Pro Session prüfen
  for (const [session, steps] of sessions) {
    totalSteps += steps.length;

    allResults.push(...checkLesbarkeit(steps, session));
    allResults.push(...checkMonotonie(steps, session));
    allResults.push(...checkDidaktik(steps, session));
    allResults.push(...checkSandwich(steps, session));
    allResults.push(...checkVollstaendigkeit(steps, session));
    allResults.push(...checkTextqualitaet(steps, session));
  }

  // Cross-Session Checks
  allResults.push(...checkCrossSession(sessions));

  // Terminal-Report
  printTerminalReport(allResults, leId, totalSteps, sessions.size);

  // Markdown-Report (Standard — immer schreiben außer mit --no-report)
  if (!skipReport) {
    const md = generateMarkdownReport(allResults, leId, totalSteps, sessions.size);
    const reportPath = path.join(leDir, "quality-report.md");
    fs.writeFileSync(reportPath, md, "utf-8");
    console.log(`${GREEN}→ Report geschrieben: content/${leId}/quality-report.md${RESET}`);
  }

  // Exit-Code
  const fails = allResults.filter(r => r.severity === "FAIL").length;
  process.exit(fails > 0 ? 1 : 0);
}

main().catch(e => {
  console.error("Fehler:", e);
  process.exit(1);
});
