/**
 * measure-content.ts <ce|--all>
 *
 * Schnelle Ist-Messung des gebauten Contents pro CE, kalibriert an der
 * exakten CE-02-Messung (measure-ce02-content.ts):
 *   3,05 min / Situations-Step   ·   2,65 min / Baustein
 * Stellt das Ergebnis dem dichte-adjustierten Curriculum-Ziel gegenüber.
 *
 * Zweck: Fortschritt gegen CONTENT-SIZING-2026-06-07.md verfolgen.
 * Für präzise Step-Zeiten (Lese-/Denkzeit pro Step): measure-ce02-content.ts.
 */
import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

// Kalibriert an präziser CE-02-Messung (measure-ce02-content.ts, echtes Zeit-Modell):
//   Situationen 48,4 h / 597 Steps = 4,86 min   ·   Themen 33,9 h / 362 Bausteine = 5,62 min
const MIN_PRO_STEP = 4.86;
const MIN_PRO_BAUSTEIN = 5.62;
const DICHTE = 0.55;

// Curriculum-Stunden pro CE (Näherung, Multi-CE-LE anteilig; KB-Raster ist belastbarer)
const CE_CURRICULUM_H: Record<string, number> = {
  "ce-01": 100, "ce-02": 180, "ce-03": 100, "ce-04": 210, "ce-05": 380,
  "ce-06": 150, "ce-07": 230, "ce-08": 300, "ce-09": 210, "ce-10": 230, "ce-11": 190,
};

function walkTs(dir: string): string[] {
  const out: string[] = [];
  let entries: string[];
  try { entries = readdirSync(dir); } catch { return out; }
  for (const e of entries) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walkTs(p));
    else if (e.endsWith(".ts")) out.push(p);
  }
  return out;
}

function countMatches(files: string[], re: RegExp): number {
  let n = 0;
  for (const f of files) {
    const m = readFileSync(f, "utf8").match(re);
    if (m) n += m.length;
  }
  return n;
}

function measureCe(ce: string) {
  const base = join("content", ce);
  const sitFiles = walkTs(join(base, "situationen"));
  const thmFiles = walkTs(join(base, "themen"));
  const steps = countMatches(sitFiles, /stepType:/g);
  const bausteine = countMatches(thmFiles, /bausteinId:/g);
  const istH = (steps * MIN_PRO_STEP + bausteine * MIN_PRO_BAUSTEIN) / 60;
  const currH = CE_CURRICULUM_H[ce] ?? 0;
  const zielH = currH * DICHTE;
  const deck = zielH ? (istH / zielH) * 100 : 0;
  return { ce, steps, bausteine, istH, currH, zielH, deck, luecke: Math.max(0, zielH - istH) };
}

const arg = process.argv[2] || "--all";
const ces = arg === "--all" ? Object.keys(CE_CURRICULUM_H) : [arg];

console.log(`${"CE".padEnd(6)} ${"Curr-h".padStart(7)} ${"Ziel-h".padStart(7)} ${"Ist-h".padStart(6)} ${"Deck".padStart(5)} ${"Lücke".padStart(7)}  Steps/Baust.`);
console.log("─".repeat(66));
let tZ = 0, tI = 0, tC = 0;
for (const ce of ces) {
  const r = measureCe(ce);
  tZ += r.zielH; tI += r.istH; tC += r.currH;
  console.log(
    `${r.ce.padEnd(6)} ${String(r.currH).padStart(7)} ${r.zielH.toFixed(0).padStart(7)} ${r.istH.toFixed(1).padStart(6)} ${(r.deck.toFixed(0) + "%").padStart(5)} ${r.luecke.toFixed(0).padStart(7)}  ${r.steps}/${r.bausteine}`
  );
}
if (ces.length > 1) {
  console.log("─".repeat(66));
  console.log(`${"Σ".padEnd(6)} ${String(tC).padStart(7)} ${tZ.toFixed(0).padStart(7)} ${tI.toFixed(1).padStart(6)} ${((tI / tZ) * 100).toFixed(0) + "%"}`.padEnd(40) + `Lücke ~${(tZ - tI).toFixed(0)}h`);
  console.log(`\nHinweis: Per-CE-Stunden genähert (Multi-CE-LE). KB-Raster in CONTENT-SIZING-2026-06-07.md ist belastbarer.`);
}
