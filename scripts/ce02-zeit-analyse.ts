/**
 * ce02-zeit-analyse.ts
 *
 * Aggregiert Zeichen + Zeit über alle CE-02 Inhalte nach Bloom-Level.
 */

import { CE02_THEMEN } from "../content/ce-02/themen";
import { CE02_SITUATIONEN } from "../content/ce-02/situationen";
import { calculateStepTime } from "./calculate-step-time";
import type { ContentStep, Wissensbaustein } from "../content/_types";

interface BloomBucket {
  bloom: number;
  steps: number;
  zeichen: number;
  zeitSek: number;
}

const buckets: Record<number, BloomBucket> = {};

function addToBucket(bloom: number, zeichen: number, zeitSek: number) {
  if (!buckets[bloom]) {
    buckets[bloom] = { bloom, steps: 0, zeichen: 0, zeitSek: 0 };
  }
  buckets[bloom].steps += 1;
  buckets[bloom].zeichen += zeichen;
  buckets[bloom].zeitSek += zeitSek;
}

function countZeichenInStep(step: ContentStep): number {
  let z = 0;
  // Title + body
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyStep = step as any;
  if (anyStep.contentC1?.title) z += anyStep.contentC1.title.length;
  if (anyStep.contentC1?.body) z += anyStep.contentC1.body.length;
  if (anyStep.contentB1?.body) z += anyStep.contentB1.body.length;
  if (anyStep.body) z += String(anyStep.body).length;
  if (anyStep.title) z += String(anyStep.title).length;
  // Question text
  if (anyStep.question?.fragetext) z += String(anyStep.question.fragetext).length;
  // Options (for MC)
  if (anyStep.question?.options) {
    for (const opt of anyStep.question.options) {
      if (opt.text) z += String(opt.text).length;
    }
  }
  return z;
}

function analyzeStep(step: ContentStep) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyStep = step as any;
  const bloom = (anyStep.bloomLevel ?? 3) as number;
  const zeichen = countZeichenInStep(step);

  // Robuste Formel: Lesen @ 17 Zeichen/s (C1) + Bloom-Aufschlag + Interaktions-Zeit
  const bloomFaktor: Record<number, number> = { 0: 1.2, 1: 1.2, 2: 1.3, 3: 1.4, 4: 1.6, 5: 1.8, 6: 2.0 };
  const leseZeit = zeichen / 17;
  const interaktion = (anyStep.question?.options?.length ?? 0) > 0 ? 20 : 5; // MC +20s, sonst +5s
  const zeitSek = Math.max(15, leseZeit * (bloomFaktor[bloom] ?? 1.4) + interaktion);

  addToBucket(bloom, zeichen, zeitSek);
}

function analyzeBaustein(b: Wissensbaustein) {
  // Bloom aus stufe3.step übernehmen falls vorhanden
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stepBloom = (b.stufe3?.step as any)?.bloomLevel ?? 3;
  // Stufe 1 Denkfrage (meist Bloom 3-5)
  const z1 = (b.stufe1?.frage?.length ?? 0) + (b.stufe1?.antwort?.length ?? 0);
  addToBucket(Math.max(3, stepBloom), z1, Math.max(15, z1 / 17 * 1.4 + 20));

  // Stufe 2 Hinweis
  const z2 = (b.stufe2?.text?.length ?? 0);
  addToBucket(stepBloom, z2, Math.max(15, z2 / 17 * 1.3 + 5));

  // Stufe 3 Step
  if (b.stufe3?.step) analyzeStep(b.stufe3.step);
}

console.log("═══ CE-02 Zeit- und Zeichen-Analyse nach Bloom ═══\n");

// Themen
let themenZeichen = 0;
let themenSteps = 0;
for (const thema of CE02_THEMEN) {
  for (const b of thema.bausteine) {
    themenSteps += 3; // Stufe 1, 2, 3
    analyzeBaustein(b);
    themenZeichen += (b.stufe1?.frage?.length ?? 0)
      + (b.stufe1?.antwort?.length ?? 0)
      + (b.stufe2?.text?.length ?? 0)
      + countZeichenInStep(b.stufe3.step);
  }
}

// Situationen
let sitZeichen = 0;
let sitSteps = 0;
for (const sit of CE02_SITUATIONEN) {
  for (const phase of sit.phasen) {
    for (const step of [...phase.kernSteps, ...phase.optionaleSteps]) {
      sitSteps += 1;
      sitZeichen += countZeichenInStep(step);
      analyzeStep(step);
    }
  }
}

console.log(`Themen: ${CE02_THEMEN.length} (${themenSteps} Stufen, ~${Math.round(themenZeichen / 1000)}k Zeichen)`);
console.log(`Situationen: ${CE02_SITUATIONEN.length} (${sitSteps} Steps, ~${Math.round(sitZeichen / 1000)}k Zeichen)\n`);

console.log("─── Aufteilung nach Bloom-Level ───");
console.log("Bloom | Steps | Zeichen  | Zeit (Min) | Zeit (UE à 45min)");
console.log("──────┼───────┼──────────┼────────────┼───────────────────");
let totalSek = 0;
let totalZeichen = 0;
let totalSteps = 0;
const sortedBlooms = Object.keys(buckets).map(Number).sort((a, b) => a - b);
for (const b of sortedBlooms) {
  const bucket = buckets[b];
  totalSek += bucket.zeitSek;
  totalZeichen += bucket.zeichen;
  totalSteps += bucket.steps;
  const min = Math.round(bucket.zeitSek / 60);
  const ue = (bucket.zeitSek / 60 / 45).toFixed(1);
  console.log(
    `  B${b} | ${String(bucket.steps).padStart(5)} | ${String(Math.round(bucket.zeichen / 1000) + "k").padStart(8)} | ${String(min).padStart(10)} | ${String(ue).padStart(17)}`
  );
}

console.log("──────┼───────┼──────────┼────────────┼───────────────────");
console.log(
  `TOTAL | ${String(totalSteps).padStart(5)} | ${String(Math.round(totalZeichen / 1000) + "k").padStart(8)} | ${String(Math.round(totalSek / 60)).padStart(10)} | ${String((totalSek / 60 / 45).toFixed(1)).padStart(17)}`
);

const budget = 170 * 45 * 0.55; // CE-02 Gesamt-UE × App-Dichte
const actual = totalSek / 60;
const pct = (actual / budget * 100).toFixed(0);

console.log(`\n═══ Budget-Vergleich ═══`);
console.log(`CE-02 Ziel-UE:       170 UE × 45 Min × 0,55 (App-Dichte) = ${Math.round(budget)} Min`);
console.log(`Aktueller Content:   ${Math.round(actual)} Min (${pct}% vom Budget)`);
if (actual < budget * 0.8) {
  console.log(`Status: ⚠️  unter Budget (-${Math.round(budget - actual)} Min)`);
} else if (actual > budget * 1.2) {
  console.log(`Status: ⚠️  ueber Budget (+${Math.round(actual - budget)} Min)`);
} else {
  console.log(`Status: ✅ im Ziel-Korridor`);
}
