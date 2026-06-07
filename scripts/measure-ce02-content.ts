/**
 * measure-ce02-content.ts — EINMALIGE EMPIRISCHE MESSUNG
 *
 * Misst den TATSÄCHLICH gebauten CE-02-Content (nicht Modell-Annahmen):
 * - Alle Steps in allen Situationen → echte App-Minuten via Zeit-Modell v3
 * - Alle Bausteine + Karteikarten in allen Themen
 * Stellt das Ergebnis den 180 Curriculum-Stunden von CE-02 (LE 5-9) gegenüber.
 */
import { CE02_SITUATIONEN } from "../content/ce-02/situationen";
import { CE02_THEMEN } from "../content/ce-02/themen";
import { calculateStepTime, type StepTimeInput } from "./calculate-step-time";

// Sammelt rekursiv alle "lesbaren" Strings (len > 15) → Lese-Last in Zeichen
function visibleChars(obj: unknown, depth = 0): number {
  if (depth > 8 || obj == null) return 0;
  if (typeof obj === "string") return obj.length > 15 ? obj.length : 0;
  if (Array.isArray(obj)) return obj.reduce<number>((s, v) => s + visibleChars(v, depth + 1), 0);
  if (typeof obj === "object") {
    return Object.entries(obj as Record<string, unknown>).reduce<number>((s, [k, v]) => {
      // strukturelle/ID-Felder überspringen
      if (/^(id|stepId|phaseId|stepType|phase|naming|bausteinId|themaId|quellen)$/i.test(k)) return s;
      return s + visibleChars(v, depth + 1);
    }, 0);
  }
  return 0;
}

function countByType(obj: unknown, acc: Record<string, number>, depth = 0): void {
  if (depth > 8 || obj == null || typeof obj !== "object") return;
  if (Array.isArray(obj)) { obj.forEach((v) => countByType(v, acc, depth + 1)); return; }
  const o = obj as Record<string, unknown>;
  if (typeof o.stepType === "string" && typeof o.bloomLevel === "number") {
    const st = o.stepType as string;
    acc[st] = (acc[st] || 0) + 1;
  }
  Object.values(o).forEach((v) => countByType(v, acc, depth + 1));
}

// Walkt rekursiv und sammelt alle Step-Objekte (haben stepType + bloomLevel)
type Step = { stepType: string; bloomLevel: number } & Record<string, unknown>;
function collectSteps(obj: unknown, out: Step[], depth = 0): void {
  if (depth > 8 || obj == null || typeof obj !== "object") return;
  if (Array.isArray(obj)) { obj.forEach((v) => collectSteps(v, out, depth + 1)); return; }
  const o = obj as Record<string, unknown>;
  if (typeof o.stepType === "string" && typeof o.bloomLevel === "number") {
    out.push(o as Step);
  }
  Object.values(o).forEach((v) => collectSteps(v, out, depth + 1));
}

const STEP_KEY_MAP: Record<string, StepTimeInput["stepType"]> = {
  // unbekannte Typen auf nächstliegenden Modell-Typ mappen
  comparison: "comparison", matrix: "categorize", timeline: "sequencing",
  tablefillin: "fillin", cloze: "fillin", wordorder: "sorting",
  careplan: "freetext", pflegewagen: "categorize", estimation: "calculation",
  diagram: "hotspot", conceptmap: "matching", slider: "confidence",
  timer: "blitz", selfrating: "confidence",
  inlineWissen: "text", crowdPoll: "confidence", summary: "summary",
};

// ─── Situationen messen ───
const allSteps: Step[] = [];
collectSteps(CE02_SITUATIONEN, allSteps);

let totalSek = 0;
const perType: Record<string, { n: number; sek: number }> = {};
for (const step of allSteps) {
  const zeichen = visibleChars(step);
  const mappedType = (STEP_KEY_MAP[step.stepType] || step.stepType) as StepTimeInput["stepType"];
  let sek: number;
  try {
    sek = calculateStepTime({
      zeichen,
      bloomLevel: step.bloomLevel as StepTimeInput["bloomLevel"],
      stepType: mappedType,
      sprachLevel: "c1",
    }).total;
  } catch {
    sek = NaN;
  }
  if (!Number.isFinite(sek)) {
    // Fallback für unbekannte Typen: Lese-Zeit + Nachdenk-Zeit
    sek = zeichen / 13.6 + step.bloomLevel * 12;
  }
  totalSek += sek;
  const key = step.stepType;
  perType[key] = perType[key] || { n: 0, sek: 0 };
  perType[key].n++;
  perType[key].sek += sek;
}

// ─── Themen messen (Bausteine + Karteikarten) ───
const themenChars = visibleChars(CE02_THEMEN);
const typeAcc: Record<string, number> = {};
countByType(CE02_THEMEN, typeAcc);

// Bausteine: 3 Stufen lesen + denken. Karteikarte: kurze Wiederholung.
// Lesezeit + grobe Interaktionszeit pro Baustein.
let bausteinCount = 0;
function countBausteine(obj: unknown, depth = 0): void {
  if (depth > 8 || obj == null || typeof obj !== "object") return;
  if (Array.isArray(obj)) { obj.forEach((v) => countBausteine(v, depth + 1)); return; }
  const o = obj as Record<string, unknown>;
  if (typeof o.bausteinId === "string") bausteinCount++;
  Object.values(o).forEach((v) => countBausteine(v, depth + 1));
}
countBausteine(CE02_THEMEN);
// Themen-Lesezeit (C1, 13.6 Z/s) + ~45s Interaktion/Denken pro Baustein
const themenSek = themenChars / 13.6 + bausteinCount * 45;

// ─── Report ───
const fmtH = (s: number) => (s / 3600).toFixed(1) + " h";
const fmtM = (s: number) => (s / 60).toFixed(0) + " min";

console.log("═".repeat(64));
console.log("EMPIRISCHE MESSUNG — Gebauter CE-02-Content vs. Curriculum");
console.log("═".repeat(64));
console.log(`\nSITUATIONEN (Hauptlernweg):`);
console.log(`  Steps gesamt:        ${allSteps.length}`);
console.log(`  App-Zeit gemessen:   ${fmtM(totalSek)}  =  ${fmtH(totalSek)}`);
console.log(`\n  Top Step-Typen nach Zeitanteil:`);
Object.entries(perType).sort((a, b) => b[1].sek - a[1].sek).slice(0, 8)
  .forEach(([t, v]) => console.log(`    ${t.padEnd(14)} ${String(v.n).padStart(3)}×  ${fmtM(v.sek).padStart(8)}  (Ø ${(v.sek / v.n).toFixed(0)}s)`));

console.log(`\nTHEMEN (Nachschlagewerk + Karteikarten):`);
console.log(`  Bausteine:           ${bausteinCount}`);
console.log(`  Lese-Zeichen:        ${themenChars.toLocaleString("de")}`);
console.log(`  App-Zeit geschätzt:  ${fmtM(themenSek)}  =  ${fmtH(themenSek)}`);

const gesamtSek = totalSek + themenSek;
console.log(`\n${"─".repeat(64)}`);
console.log(`GESAMT gebauter CE-02-Content:  ${fmtH(gesamtSek)}  (${fmtM(gesamtSek)})`);
console.log(`${"─".repeat(64)}`);

const CURRICULUM_H = 180; // CE-02 = LE 5-9
console.log(`\nGEGENÜBERSTELLUNG:`);
console.log(`  Curriculum-Soll CE-02:     ${CURRICULUM_H} h  (LE 5-9, PflBG-Rahmenplan)`);
console.log(`  Gebauter Content liefert:  ${fmtH(gesamtSek)}`);
console.log(`  Deckungsgrad:              ${((gesamtSek / 3600 / CURRICULUM_H) * 100).toFixed(1)} %`);
console.log(`\n  Spaced Repetition (×3-4 Wiederholung erhöht effektive Lernzeit):`);
console.log(`    konservativ ×3:          ${fmtH(gesamtSek * 3)}  → ${((gesamtSek * 3 / 3600 / CURRICULUM_H) * 100).toFixed(0)} %`);
console.log(`    optimistisch ×4:         ${fmtH(gesamtSek * 4)}  → ${((gesamtSek * 4 / 3600 / CURRICULUM_H) * 100).toFixed(0)} %`);
console.log("");
