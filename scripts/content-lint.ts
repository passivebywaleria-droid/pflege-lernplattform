#!/usr/bin/env npx ts-node
/**
 * Content-Lint: Automatisierte Prüfung der generierten Steps.
 * Prüft Diversity, Pflichtfelder, Textqualität.
 *
 * Usage: npx ts-node scripts/content-lint.ts content/le-01/steps-s1.ts
 *        npx ts-node scripts/content-lint.ts content/le-01/  (alle Sessions)
 */

import * as fs from "fs";
import * as path from "path";

// Types inline (avoid import issues with ts-node)
type StepType = string;
type LernTrack = "basis" | "vertiefung";

interface ContentStep {
  stepId: string;
  phase: string;
  stepType: StepType;
  bloomLevel: number;
  kompetenzbereich: string;
  quellen: string[];
  track: LernTrack;
  modus: string;
  lernziel: string;
  imageUrl?: string;
  contentC1: { title: string; body: string; fallbezug?: string };
  contentB1?: { title: string; body: string; fallbezug?: string };
  question?: {
    fragetext?: string;
    optionen?: { explanation: string }[];
    fillin?: { sentence: string };
    cloze?: { textWithBlanks: string };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

// === CHECKS ===

interface CheckResult {
  id: string;
  name: string;
  pass: boolean;
  detail: string;
  ko?: boolean;
}

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

const PLAYFUL = new Set(["memory", "crossword", "matching"]);
const INTERACTIVE = new Set(["timer", "swipe", "confidence", "slider"]);
const VISUAL = new Set(["reveal", "flipcard", "timeline", "comparison", "hotspot", "labelImage", "diagram"]);
const STORY = new Set(["dialog", "branching"]);

const FILL_PHRASES = [
  "Bevor wir einsteigen",
  "In dieser Session lernst du",
  "Lass uns gemeinsam",
  "Erinnerst du dich an",
  "Jetzt wird es spannend",
  "Schauen wir uns das mal genauer an",
  "Wie du vielleicht schon weißt",
];

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function countSentences(text: string): string[] {
  return text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
}

function checkDiversity(steps: ContentStep[], sessionLabel: string): CheckResult[] {
  const results: CheckResult[] = [];
  const types = new Set(steps.map((s) => s.stepType));
  const typeCounts: Record<string, number> = {};
  steps.forEach((s) => {
    typeCounts[s.stepType] = (typeCounts[s.stepType] || 0) + 1;
  });

  // DIV1: Step-Typ-Vielfalt (checked per session — aggregated later)
  results.push({
    id: "DIV1",
    name: `Step-Typ-Vielfalt ${sessionLabel}`,
    pass: types.size >= 8, // Per session min 8, over all sessions min 15
    detail: `${types.size} verschiedene Typen: ${[...types].join(", ")}`,
    ko: false, // KO only when checking all sessions combined
  });

  // DIV2: Gleiches Gefühl hintereinander
  const sameFeeling: string[] = [];
  for (let i = 1; i < steps.length; i++) {
    const prev = SAME_FEELING[steps[i - 1].stepType];
    const curr = SAME_FEELING[steps[i].stepType];
    if (prev && curr && prev === curr) {
      sameFeeling.push(`Step ${i}: ${steps[i - 1].stepType}→${steps[i].stepType} (${curr})`);
    }
  }
  results.push({
    id: "DIV2",
    name: `Gleiches Gefühl ${sessionLabel}`,
    pass: sameFeeling.length === 0,
    detail: sameFeeling.length === 0 ? "Kein gleiches Gefühl hintereinander" : sameFeeling.join("; "),
    ko: true,
  });

  // DIV3: Spielerisch
  const playCount = steps.filter((s) => PLAYFUL.has(s.stepType)).length;
  results.push({
    id: "DIV3",
    name: `Spielerisch ${sessionLabel}`,
    pass: playCount >= 2,
    detail: `${playCount} spielerische Steps (min 2)`,
  });

  // DIV4: Interaktiv
  const interCount = steps.filter((s) => INTERACTIVE.has(s.stepType)).length;
  results.push({
    id: "DIV4",
    name: `Interaktiv ${sessionLabel}`,
    pass: interCount >= 2,
    detail: `${interCount} interaktive Steps (min 2)`,
  });

  // DIV5: Visuell
  const visCount = steps.filter((s) => VISUAL.has(s.stepType)).length;
  results.push({
    id: "DIV5",
    name: `Visuell ${sessionLabel}`,
    pass: visCount >= 2,
    detail: `${visCount} visuelle Steps (min 2)`,
  });

  // Max gleicher Typ
  const maxType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];
  results.push({
    id: "A1",
    name: `Max gleicher Typ ${sessionLabel}`,
    pass: (maxType?.[1] || 0) <= 4,
    detail: maxType ? `${maxType[0]}: ${maxType[1]}x (max 4)` : "Keine Steps",
  });

  // Text ≤ 4
  const textCount = typeCounts["text"] || 0;
  results.push({
    id: "TEXT_MAX",
    name: `Text-Steps ${sessionLabel}`,
    pass: textCount <= 4,
    detail: `${textCount} Text-Steps (max 4)`,
  });

  // Quiz ≤ 5
  const quizCount = (typeCounts["mc"] || 0) + (typeCounts["truefalse"] || 0) + (typeCounts["fillin"] || 0) + (typeCounts["cloze"] || 0);
  results.push({
    id: "QUIZ_MAX",
    name: `Quiz-Steps ${sessionLabel}`,
    pass: quizCount <= 5,
    detail: `${quizCount} Quiz-Steps (max 5)`,
  });

  // Story/Dialog ≥ 3
  const storyCount = steps.filter((s) => STORY.has(s.stepType)).length;
  results.push({
    id: "STORY_MIN",
    name: `Story/Dialog ${sessionLabel}`,
    pass: storyCount >= 3,
    detail: `${storyCount} Story-Steps (min 3)`,
  });

  // Bilder ≥ 30%
  const imgCount = steps.filter((s) => s.imageUrl).length;
  const imgPct = Math.round((imgCount / steps.length) * 100);
  results.push({
    id: "V6",
    name: `Bilder ${sessionLabel}`,
    pass: imgPct >= 30,
    detail: `${imgPct}% haben Bild (${imgCount}/${steps.length}, min 30%)`,
  });

  return results;
}

function checkPflichtfelder(steps: ContentStep[], sessionLabel: string): CheckResult[] {
  const results: CheckResult[] = [];

  // H1: Lernziel vorhanden
  const noLernziel = steps.filter((s) => !s.lernziel).map((s) => s.stepId);
  results.push({
    id: "H1",
    name: `Lernziel vorhanden ${sessionLabel}`,
    pass: noLernziel.length === 0,
    detail: noLernziel.length === 0 ? "Alle Steps haben Lernziel" : `Fehlt: ${noLernziel.join(", ")}`,
  });

  // H3: Track vorhanden
  const noTrack = steps.filter((s) => !s.track).map((s) => s.stepId);
  results.push({
    id: "H3",
    name: `Track vorhanden ${sessionLabel}`,
    pass: noTrack.length === 0,
    detail: noTrack.length === 0 ? "Alle Steps haben Track" : `Fehlt: ${noTrack.join(", ")}`,
  });

  // H4: Modus vorhanden
  const noModus = steps.filter((s) => !s.modus).map((s) => s.stepId);
  results.push({
    id: "H4",
    name: `Modus vorhanden ${sessionLabel}`,
    pass: noModus.length === 0,
    detail: noModus.length === 0 ? "Alle Steps haben Modus" : `Fehlt: ${noModus.join(", ")}`,
  });

  // L1: Track-Verteilung
  const basis = steps.filter((s) => s.track === "basis").length;
  const basisPct = Math.round((basis / steps.length) * 100);
  results.push({
    id: "L1",
    name: `Track-Verteilung ${sessionLabel}`,
    pass: basisPct >= 55 && basisPct <= 75,
    detail: `basis: ${basisPct}%, vertiefung: ${100 - basisPct}% (Ziel: 60-70% basis)`,
  });

  // L3: B1 vorhanden
  const noB1 = steps.filter((s) => !s.contentB1).map((s) => s.stepId);
  results.push({
    id: "L3",
    name: `B1 vorhanden ${sessionLabel}`,
    pass: noB1.length === 0,
    detail: noB1.length === 0 ? "Alle Steps haben contentB1" : `Fehlt: ${noB1.join(", ")}`,
  });

  return results;
}

// Bekannte KI-Halluzinations-Muster
const HALLUZINATIONS_MUSTER: { pattern: RegExp; beschreibung: string }[] = [
  { pattern: /\b55\s*%.*38\s*%|38\s*%.*55\s*%|Mehrabian/i, beschreibung: "Mehrabian-Mythos (55%/38%/7%)" },
  { pattern: /\b(93|7)\s*%.*nonverbal|nonverbal.*(93|7)\s*%/i, beschreibung: "Mehrabian-Mythos (nonverbal)" },
  { pattern: /Studien\s+(zeigen|belegen|beweisen),?\s+dass\s+\d/i, beschreibung: "Unbelegte Studienaussage mit Zahl" },
  { pattern: /\d+\s*%\s+aller\s+(Pflege|Kranken|Patienten)/i, beschreibung: "Prozentzahl ohne Quelle" },
  { pattern: /laut\s+(einer\s+)?Studie\s+\d/i, beschreibung: "Nicht zugeordnete Studie" },
];

function checkHalluzinationsRisiko(steps: ContentStep[], sessionLabel: string): CheckResult[] {
  const results: CheckResult[] = [];

  // F11: Nackte Statistiken (Prozentzahl ohne Quellen-Array)
  const nackteStats: string[] = [];
  steps.forEach((s) => {
    const texte = [
      s.contentC1.body,
      s.contentC1.title,
      s.contentB1?.body ?? "",
      s.question?.fragetext ?? "",
      // Feedback aus Optionen
      ...(s.question?.optionen ?? []).map((o: { explanation: string }) => o.explanation),
    ].join(" ");

    // Prozentzahl ohne Quellenangabe wenn quellen-Array leer
    const hatProzent = /\d+\s*%/.test(texte);
    const hatQuelle = s.quellen && s.quellen.length > 0;
    if (hatProzent && !hatQuelle) {
      nackteStats.push(`${s.stepId}: Prozentzahl ohne quellen[]`);
    }

    // Bekannte Muster prüfen
    HALLUZINATIONS_MUSTER.forEach(({ pattern, beschreibung }) => {
      if (pattern.test(texte)) {
        nackteStats.push(`${s.stepId}: ${beschreibung}`);
      }
    });
  });

  results.push({
    id: "F11",
    name: `Halluzinations-Nachweis ${sessionLabel}`,
    pass: nackteStats.length === 0,
    detail: nackteStats.length === 0
      ? "Keine nackten Statistiken oder Halluzinations-Muster"
      : nackteStats.join("; "),
    ko: true,
  });

  // F7: Leeres quellen-Array bei Steps mit Faktenwissen (text/mc/fillin)
  const FAKTEN_TYPEN = new Set(["text", "mc", "fillin", "cloze", "truefalse", "selfrating"]);
  const ohneQuellen = steps
    .filter((s) => FAKTEN_TYPEN.has(s.stepType) && (!s.quellen || s.quellen.length === 0))
    .map((s) => s.stepId);

  results.push({
    id: "F7",
    name: `Quellengrundierung ${sessionLabel}`,
    pass: ohneQuellen.length === 0,
    detail: ohneQuellen.length === 0
      ? "Alle Fakten-Steps haben quellen[]"
      : `Kein quellen[]: ${ohneQuellen.join(", ")}`,
    ko: true,
  });

  return results;
}

function checkTextqualitaet(steps: ContentStep[], sessionLabel: string): CheckResult[] {
  const results: CheckResult[] = [];

  // G1: Title ohne Fragezeichen
  const titleFrage = steps.filter((s) => s.question?.fragetext && s.contentC1.title.endsWith("?")).map((s) => s.stepId);
  results.push({
    id: "G1",
    name: `Title ohne ? ${sessionLabel}`,
    pass: titleFrage.length === 0,
    detail: titleFrage.length === 0 ? "OK" : `? im Title: ${titleFrage.join(", ")}`,
  });

  // I1: C1-Satzlänge
  const longSentences: string[] = [];
  steps.forEach((s) => {
    countSentences(s.contentC1.body).forEach((sent) => {
      if (countWords(sent) > 20) {
        longSentences.push(`${s.stepId}: "${sent.trim().substring(0, 50)}..." (${countWords(sent)} Wörter)`);
      }
    });
  });
  results.push({
    id: "I1",
    name: `C1-Satzlänge ${sessionLabel}`,
    pass: longSentences.length === 0,
    detail: longSentences.length === 0 ? "Alle ≤20 Wörter" : longSentences.slice(0, 3).join("; "),
  });

  // L2: B1-Satzlänge
  const longB1: string[] = [];
  steps.forEach((s) => {
    if (s.contentB1) {
      countSentences(s.contentB1.body).forEach((sent) => {
        if (countWords(sent) > 15) {
          longB1.push(`${s.stepId}: ${countWords(sent)} Wörter`);
        }
      });
    }
  });
  results.push({
    id: "L2",
    name: `B1-Satzlänge ${sessionLabel}`,
    pass: longB1.length === 0,
    detail: longB1.length === 0 ? "Alle ≤15 Wörter" : longB1.slice(0, 3).join("; "),
  });

  // I2: Füllsätze
  const fillFound: string[] = [];
  steps.forEach((s) => {
    const text = s.contentC1.body + " " + s.contentC1.title;
    FILL_PHRASES.forEach((phrase) => {
      if (text.toLowerCase().includes(phrase.toLowerCase())) {
        fillFound.push(`${s.stepId}: "${phrase}"`);
      }
    });
  });
  results.push({
    id: "I2",
    name: `Füllsätze ${sessionLabel}`,
    pass: fillFound.length === 0,
    detail: fillFound.length === 0 ? "Keine Füllsätze" : fillFound.join("; "),
  });

  // I4: Body-Länge
  const longBody: string[] = [];
  steps.forEach((s) => {
    const sentences = countSentences(s.contentC1.body);
    const isText = s.stepType === "text";
    const max = isText ? 5 : 3;
    if (sentences.length > max) {
      longBody.push(`${s.stepId} (${s.stepType}): ${sentences.length} Sätze (max ${max})`);
    }
  });
  results.push({
    id: "I4",
    name: `Body-Länge ${sessionLabel}`,
    pass: longBody.length === 0,
    detail: longBody.length === 0 ? "OK" : longBody.slice(0, 3).join("; "),
  });

  return results;
}

// === MAIN ===

function lint(steps: ContentStep[], sessionLabel: string): CheckResult[] {
  return [
    ...checkHalluzinationsRisiko(steps, sessionLabel), // Zuerst — K.O. zuerst sehen
    ...checkDiversity(steps, sessionLabel),
    ...checkPflichtfelder(steps, sessionLabel),
    ...checkTextqualitaet(steps, sessionLabel),
  ];
}

function printReport(allResults: CheckResult[]): boolean {
  const passed = allResults.filter((r) => r.pass).length;
  const failed = allResults.filter((r) => !r.pass).length;
  const koFailed = allResults.filter((r) => !r.pass && r.ko).length;

  console.log("\n╔══════════════════════════════════════════╗");
  console.log(`║  CONTENT-LINT: ${koFailed > 0 ? "❌ FAIL (K.O.)" : failed > 0 ? "⚠️  FAIL" : "✅ PASS"}  ║`);
  console.log("╚══════════════════════════════════════════╝\n");

  console.log(`Bestanden: ${passed}/${allResults.length} | Nicht bestanden: ${failed}/${allResults.length}\n`);

  if (failed > 0) {
    console.log("FEHLER:");
    allResults
      .filter((r) => !r.pass)
      .forEach((r) => {
        console.log(`  ${r.ko ? "🔴" : "🟡"} [${r.id}] ${r.name}: ${r.detail}`);
      });
    console.log("");
  }

  if (passed > 0) {
    console.log("BESTANDEN:");
    allResults
      .filter((r) => r.pass)
      .forEach((r) => {
        console.log(`  ✅ [${r.id}] ${r.name}`);
      });
  }

  return failed === 0;
}

// Entry point
const targetPath = process.argv[2];
if (!targetPath) {
  console.log("Usage: npx ts-node scripts/content-lint.ts <path-to-steps-file-or-dir>");
  process.exit(1);
}

console.log(`\nContent-Lint prüft: ${targetPath}\n`);
console.log("Hinweis: Dieses Script prüft automatisierbare Kriterien.");
console.log("Didaktische + fachliche Prüfung braucht den KI-Prüfer.\n");

// For now, print usage instructions since we can't easily import .ts files at runtime
console.log("TODO: Integrate with compiled steps. For now, use as reference for check logic.");
console.log("The checks above are designed to be run against imported ContentStep[] arrays.");
