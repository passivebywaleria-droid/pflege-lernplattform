#!/usr/bin/env npx tsx
/**
 * Cross-LE-Checker — Prüft Konsistenz über LE-Grenzen hinweg.
 *
 * Checks:
 *   1. Glossar-Konsistenz: Gleicher Begriff → gleiche Definition?
 *   2. Duplikat-Steps: Identische Fragen in verschiedenen LEs?
 *   3. Patienten-Konsistenz: Gleicher Patient → gleiche Daten?
 *   4. Curriculum-Abdeckung: Welche CEs fehlen noch?
 *
 * Usage:
 *   npx tsx scripts/cross-le-checker.ts           # Alle LEs
 *   npx tsx scripts/cross-le-checker.ts le-06      # LE-06 gegen Rest
 */

import * as fs from "fs";
import * as path from "path";

// ═══════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════

interface Finding {
  check: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  detail: string;
  les: string[];
}

interface GlossarEntry {
  begriff: string;
  erklaerung: string;
  [key: string]: unknown;
}

interface StepLike {
  stepId: string;
  stepType: string;
  contentC1: { title: string; body: string };
  [key: string]: unknown;
}

interface PatientInfo {
  id: string;
  name?: string;
  alter?: number;
  diagnose?: string;
  leId: string;
}

// ═══════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════

function getLeIds(contentDir: string): string[] {
  return fs
    .readdirSync(contentDir)
    .filter(
      (d) =>
        d.startsWith("le-") &&
        !d.includes("backup") &&
        !d.includes(".") &&
        fs.existsSync(path.join(contentDir, d, "steps-s1.ts"))
    )
    .sort();
}

function loadGlossar(leDir: string): GlossarEntry[] {
  try {
    const mod = require(path.join(leDir, "glossar.ts"));
    const key =
      Object.keys(mod).find((k) => k.endsWith("_GLOSSAR")) ?? "GLOSSAR";
    return mod[key] || [];
  } catch {
    return [];
  }
}

function loadSteps(leDir: string): StepLike[] {
  const stepFiles = fs
    .readdirSync(leDir)
    .filter((f) => f.startsWith("steps-s") && f.endsWith(".ts"))
    .sort();
  const allSteps: StepLike[] = [];
  for (const file of stepFiles) {
    try {
      const filePath = path.join(leDir, file);
      const mod = require(filePath);
      const stepsKey = Object.keys(mod).find((k) =>
        /(_STEPS_S\d|^STEPS_)/.test(k)
      );
      if (stepsKey) allSteps.push(...(mod[stepsKey] as StepLike[]));
      delete require.cache[require.resolve(filePath)];
    } catch {
      /* skip */
    }
  }
  return allSteps;
}

function loadPatienten(leDir: string, leId: string): PatientInfo[] {
  try {
    const mod = require(path.join(leDir, "fallverlaeufe.ts"));
    const key = Object.keys(mod).find((k) => k.includes("FALLVERLAEUFE"));
    if (!key) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const faelle = mod[key] as any[];
    return faelle.map((f) => ({
      id: f.fallId || f.patientId || "unknown",
      name: f.patient?.name || f.patientName,
      alter: f.patient?.alter,
      diagnose: f.patient?.diagnose,
      leId,
    }));
  } catch {
    return [];
  }
}

function ngramOverlap(a: string, b: string, n = 4): number {
  const normalize = (t: string) =>
    t.toLowerCase().replace(/[^a-zäöüß\s]/g, "").trim();
  const toNgrams = (t: string) => {
    const words = normalize(t).split(/\s+/);
    const grams = new Set<string>();
    for (let i = 0; i <= words.length - n; i++) {
      grams.add(words.slice(i, i + n).join(" "));
    }
    return grams;
  };

  const gramsA = toNgrams(a);
  const gramsB = toNgrams(b);
  if (gramsA.size === 0 || gramsB.size === 0) return 0;

  let overlap = 0;
  for (const g of gramsA) {
    if (gramsB.has(g)) overlap++;
  }
  return overlap;
}

// ═══════════════════════════════════════════════════════════
// Checks
// ═══════════════════════════════════════════════════════════

function checkGlossarKonsistenz(
  glossarByLe: Map<string, GlossarEntry[]>
): Finding[] {
  const findings: Finding[] = [];

  // Sammle alle Begriffe über alle LEs
  const begriffMap = new Map<
    string,
    { erklaerung: string; leId: string }[]
  >();
  for (const [leId, entries] of glossarByLe) {
    for (const entry of entries) {
      const key = entry.begriff.toLowerCase();
      if (!begriffMap.has(key)) begriffMap.set(key, []);
      begriffMap.get(key)!.push({ erklaerung: entry.erklaerung, leId });
    }
  }

  // Vergleiche
  for (const [begriff, entries] of begriffMap) {
    if (entries.length < 2) continue;
    const normSet = new Set(entries.map((e) => e.erklaerung?.toLowerCase().trim()));
    if (normSet.size > 1) {
      findings.push({
        check: "GLOSSAR_INKONSISTENZ",
        severity: "HIGH",
        detail: `"${begriff}": unterschiedliche Definitionen in ${entries.map((e) => e.leId).join(", ")}`,
        les: entries.map((e) => e.leId),
      });
    }
  }

  return findings;
}

function checkDuplikatSteps(
  stepsByLe: Map<string, StepLike[]>
): Finding[] {
  const findings: Finding[] = [];

  // Sammle Bodies über alle LEs
  const bodyIndex: { body: string; leId: string; stepId: string }[] = [];
  for (const [leId, steps] of stepsByLe) {
    for (const step of steps) {
      const body = step.contentC1?.body;
      if (body && body.length > 50) {
        bodyIndex.push({ body, leId, stepId: step.stepId });
      }
    }
  }

  // Paarweiser LE-Vergleich (nur über LE-Grenzen)
  const leIds = Array.from(stepsByLe.keys());
  for (let i = 0; i < leIds.length; i++) {
    for (let j = i + 1; j < leIds.length; j++) {
      const stepsA = bodyIndex.filter((s) => s.leId === leIds[i]);
      const stepsB = bodyIndex.filter((s) => s.leId === leIds[j]);

      for (const a of stepsA) {
        for (const b of stepsB) {
          const overlap = ngramOverlap(a.body, b.body);
          if (overlap >= 5) {
            findings.push({
              check: "DUPLIKAT_STEP",
              severity: overlap >= 8 ? "HIGH" : "MEDIUM",
              detail: `${a.stepId} ↔ ${b.stepId}: ${overlap} 4-Gramm-Treffer`,
              les: [a.leId, b.leId],
            });
          }
        }
      }
    }
  }

  return findings;
}

function checkPatientenKonsistenz(
  patientenByLe: Map<string, PatientInfo[]>
): Finding[] {
  const findings: Finding[] = [];

  // Alle Patienten nach Name gruppieren
  const byName = new Map<string, PatientInfo[]>();
  for (const [, patienten] of patientenByLe) {
    for (const p of patienten) {
      const key = p.name?.toLowerCase() || p.id;
      if (!byName.has(key)) byName.set(key, []);
      byName.get(key)!.push(p);
    }
  }

  for (const [name, infos] of byName) {
    const les = new Set(infos.map((i) => i.leId));
    if (les.size < 2) continue;

    // Alter-Check
    const alters = new Set(infos.map((i) => i.alter).filter(Boolean));
    if (alters.size > 1) {
      findings.push({
        check: "PATIENT_ALTER",
        severity: "HIGH",
        detail: `"${name}": Alter ${Array.from(alters).join(" vs ")} in ${Array.from(les).join(", ")}`,
        les: Array.from(les),
      });
    }
  }

  return findings;
}

function checkCurriculumAbdeckung(
  contentDir: string,
  leIds: string[]
): Finding[] {
  const findings: Finding[] = [];

  try {
    const manifestSrc = fs.readFileSync(
      path.join(contentDir, "_manifest.ts"),
      "utf-8"
    );
    const ceMatches = manifestSrc.matchAll(/ceId:\s*["']([^"']+)["']/g);
    const coveredCEs = new Set<string>();
    for (const m of ceMatches) coveredCEs.add(m[1]);

    const allCEs = Array.from({ length: 11 }, (_, i) =>
      `ce-${String(i + 1).padStart(2, "0")}`
    );
    const missing = allCEs.filter((ce) => !coveredCEs.has(ce));
    if (missing.length > 0) {
      findings.push({
        check: "CURRICULUM_LUECKE",
        severity: "LOW",
        detail: `${missing.length}/11 CEs ohne LE: ${missing.join(", ")}`,
        les: leIds,
      });
    }
  } catch {
    /* skip */
  }

  return findings;
}

// ═══════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════

function main() {
  const contentDir = path.resolve(__dirname, "..", "content");
  const leIds = getLeIds(contentDir);

  console.log(`\n${"═".repeat(60)}`);
  console.log(`  CROSS-LE-CHECKER: ${leIds.length} LEs`);
  console.log("═".repeat(60));

  // Daten sammeln
  const glossarByLe = new Map<string, GlossarEntry[]>();
  const stepsByLe = new Map<string, StepLike[]>();
  const patientenByLe = new Map<string, PatientInfo[]>();

  for (const leId of leIds) {
    const leDir = path.join(contentDir, leId);
    const glossar = loadGlossar(leDir);
    const steps = loadSteps(leDir);
    const patienten = loadPatienten(leDir, leId);
    glossarByLe.set(leId, glossar);
    stepsByLe.set(leId, steps);
    patientenByLe.set(leId, patienten);
    console.log(
      `  ${leId}: ${steps.length} Steps, ${glossar.length} Glossar, ${patienten.length} Patienten`
    );
  }

  // Checks
  console.log("\n── Checks ──");
  const allFindings: Finding[] = [];

  const gf = checkGlossarKonsistenz(glossarByLe);
  allFindings.push(...gf);
  console.log(`  ${gf.length === 0 ? "✅" : "⚠️"} Glossar-Konsistenz: ${gf.length}`);

  const df = checkDuplikatSteps(stepsByLe);
  allFindings.push(...df);
  console.log(`  ${df.length === 0 ? "✅" : "⚠️"} Duplikat-Steps: ${df.length}`);

  const pf = checkPatientenKonsistenz(patientenByLe);
  allFindings.push(...pf);
  console.log(`  ${pf.length === 0 ? "✅" : "⚠️"} Patienten-Konsistenz: ${pf.length}`);

  const cf = checkCurriculumAbdeckung(contentDir, leIds);
  allFindings.push(...cf);
  for (const f of cf) console.log(`  ℹ️  ${f.detail}`);

  // Ergebnis
  console.log(`\n${"═".repeat(60)}`);
  const high = allFindings.filter((f) => f.severity === "HIGH").length;
  const medium = allFindings.filter((f) => f.severity === "MEDIUM").length;
  const low = allFindings.filter((f) => f.severity === "LOW").length;

  if (allFindings.length === 0) {
    console.log(`  ✅ Keine Cross-LE-Probleme`);
  } else {
    console.log(`  📊 ${allFindings.length} Findings (${high} HIGH, ${medium} MEDIUM, ${low} LOW)`);
    for (const f of allFindings) {
      const icon = f.severity === "HIGH" ? "❌" : f.severity === "MEDIUM" ? "⚠️" : "ℹ️";
      console.log(`  ${icon} [${f.check}] ${f.detail}`);
    }
  }
  console.log("═".repeat(60));

  // Report
  const reportPath = path.join(contentDir, "cross-le-report.json");
  fs.writeFileSync(
    reportPath,
    JSON.stringify({ timestamp: new Date().toISOString(), lesChecked: leIds, findings: allFindings }, null, 2),
    "utf-8"
  );
  console.log(`  → ${reportPath}`);

  process.exit(high > 0 ? 1 : 0);
}

main();
