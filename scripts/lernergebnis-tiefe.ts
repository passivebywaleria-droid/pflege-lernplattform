/**
 * lernergebnis-tiefe.ts <ce-nummer> [--strict]  — Pipeline-Härtung Stage 4 (W10)
 *
 * COVERAGE-TIEFE STATT PRÄSENZ. Die bisherige Coverage zählt nur Berührung
 * („kommt vor"). Dieses Gate leitet pro Lernergebnis eine TIEFE-STUFE aus dem
 * Bloom-Level der zugeordneten Steps ab:
 *
 *   Bloom 1–2 (erinnern/verstehen)      → „berührt"  (passiv dargeboten)
 *   Bloom 3–4 (anwenden/analysieren)    → „geübt"    (aktiv interaktiv geübt)
 *   Bloom 5–6 (bewerten/erschaffen)     → „geprüft"  (Prüfungsniveau)
 *   keine Steps zugeordnet              → „fehlt"
 *
 * Aus „0 FEHLT" wird damit „0 FEHLT + jedes LE mind. auf Stufe ‚geübt'".
 *
 * Die Step→LE-ZUORDNUNG ist semantisch (welcher Step deckt welches Rahmenplan-
 * Lernergebnis) und wird beim Coverage-Recheck erstellt — als maschinenlesbares
 * Mapping `specs/{ce}/lernergebnis-mapping.json` (`{ "<leId>": ["<stepId>", …] }`).
 * Dieses Skript JOINT Mapping × Step-Blooms × Katalog und leitet die Tiefe
 * deterministisch ab. Ohne Mapping läuft es im Warn-Modus (kein Fehler) — analog
 * zur Auto-Strict-Adoption des Step-Groundings: erst messen, wenn Daten da sind.
 *
 * Exit-Codes:
 *   0 — alle (nicht by-design-befreiten) LE ≥ „geübt"  ODER  Mapping fehlt (Warn)
 *   1 — mit Mapping: mindestens ein LE unter „geübt"
 *
 * Usage:
 *   npx tsx scripts/lernergebnis-tiefe.ts 2
 *   npx tsx scripts/lernergebnis-tiefe.ts 2 --strict
 */
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { resolve, join } from "path";
import { pathToFileURL } from "url";

// ─────────────────────────────────────────────────────────────────────────────
// Pure, testbare Kernlogik
// ─────────────────────────────────────────────────────────────────────────────

export type Tiefe = "fehlt" | "berührt" | "geübt" | "geprüft";

export const TIEFE_RANK: Record<Tiefe, number> = { fehlt: 0, "berührt": 1, "geübt": 2, "geprüft": 3 };

export interface LernergebnisLite {
  id: string;
  text: string;
  typ: "wissen" | "koennen" | "einstellung";
  bloomStufe: number;
  altersbezug: boolean;
  motorisch: boolean;
}

/** Bloom-Level → erreichte Tiefe-Stufe eines EINZELNEN Steps. */
export function bloomToTiefe(bloom: number): Exclude<Tiefe, "fehlt"> {
  if (bloom >= 5) return "geprüft";
  if (bloom >= 3) return "geübt";
  return "berührt"; // Bloom 1–2 (und alles < 1 defensiv)
}

/** Höchste Tiefe über alle zugeordneten Step-Blooms. Leer → „fehlt". */
export function deriveLeTiefe(stepBlooms: number[]): Tiefe {
  if (stepBlooms.length === 0) return "fehlt";
  return stepBlooms
    .map(bloomToTiefe)
    .reduce<Tiefe>((acc, t) => (TIEFE_RANK[t] > TIEFE_RANK[acc] ? t : acc), "berührt");
}

export function meetsMinimum(achieved: Tiefe, min: Tiefe): boolean {
  return TIEFE_RANK[achieved] >= TIEFE_RANK[min];
}

export type GateStatus = "PASS" | "FAIL" | "BY-DESIGN";

export interface LeTiefeResult {
  id: string;
  typ: LernergebnisLite["typ"];
  bloomSoll: number;
  zugeordneteSteps: number;
  erreichteTiefe: Tiefe;
  status: GateStatus;
  begruendung: string;
}

/**
 * Bewertet EIN Lernergebnis. Standard-Mindeststufe ist „geübt".
 *
 * By-design-Ausnahmen (kein FAIL, sondern BY-DESIGN — konsistent mit den
 * Coverage-Scaffold-Regeln):
 *  - motorisch: die Plattform deckt nur kognitiv vor → „berührt"/„geübt" reicht.
 *  - einstellung: Haltungsziele werden reflektiert, nicht auf Prüfungsniveau
 *    „geübt" im engen Bloom-Sinn — „berührt" genügt, solange ein Reflexionsformat
 *    existiert (das prüft der semantische Recheck, nicht dieses Gate).
 */
export function gateLe(le: LernergebnisLite, stepBlooms: number[], min: Tiefe = "geübt"): LeTiefeResult {
  const erreichteTiefe = deriveLeTiefe(stepBlooms);
  const base: Omit<LeTiefeResult, "status" | "begruendung"> = {
    id: le.id,
    typ: le.typ,
    bloomSoll: le.bloomStufe,
    zugeordneteSteps: stepBlooms.length,
    erreichteTiefe,
  };

  if (le.motorisch) {
    return {
      ...base,
      status: erreichteTiefe === "fehlt" ? "FAIL" : "BY-DESIGN",
      begruendung: erreichteTiefe === "fehlt"
        ? "Motorisches Ziel, aber gar nicht berührt — mind. kognitive Vorbereitung nötig."
        : "Motorisches Ziel — Handausführung by-design nur kognitiv vorbereitbar.",
    };
  }
  if (le.typ === "einstellung") {
    return {
      ...base,
      status: erreichteTiefe === "fehlt" ? "FAIL" : "BY-DESIGN",
      begruendung: erreichteTiefe === "fehlt"
        ? "Einstellungsziel ohne jeden Berührungspunkt — Reflexionsformat fehlt."
        : "Einstellungsziel — Tiefe über Reflexion, nicht über Bloom-Stufe (semantischer Recheck).",
    };
  }
  const ok = meetsMinimum(erreichteTiefe, min);
  return {
    ...base,
    status: ok ? "PASS" : "FAIL",
    begruendung: ok
      ? `Erreicht „${erreichteTiefe}" (≥ „${min}").`
      : erreichteTiefe === "fehlt"
        ? `Kein Step zugeordnet — FEHLT.`
        : `Nur „${erreichteTiefe}" — unter Mindeststufe „${min}". Interaktiven Anwenden/Analysieren-Step (Bloom 3–4) ergänzen.`,
  };
}

export interface TiefeBilanz {
  total: number;
  pass: number;
  fail: number;
  byDesign: number;
  fehlt: number;
  verteilung: Record<Tiefe, number>;
}

export function bilanz(results: LeTiefeResult[]): TiefeBilanz {
  const verteilung: Record<Tiefe, number> = { fehlt: 0, "berührt": 0, "geübt": 0, "geprüft": 0 };
  for (const r of results) verteilung[r.erreichteTiefe]++;
  return {
    total: results.length,
    pass: results.filter((r) => r.status === "PASS").length,
    fail: results.filter((r) => r.status === "FAIL").length,
    byDesign: results.filter((r) => r.status === "BY-DESIGN").length,
    fehlt: verteilung.fehlt,
    verteilung,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// IO-Schicht
// ─────────────────────────────────────────────────────────────────────────────

interface Katalog {
  ce: number;
  anzahl: number;
  lernergebnisse: (LernergebnisLite & Record<string, unknown>)[];
}

export type StepMapping = Record<string, string[]>; // leId → [stepId, …]

function loadKatalog(NN: string): Katalog | null {
  const p = `specs/curriculum/ce-${NN}-lernergebnisse.json`;
  if (!existsSync(p)) return null;
  return JSON.parse(readFileSync(p, "utf8")) as Katalog;
}

function loadMapping(NN: string): StepMapping | null {
  const p = `specs/ce-${NN}/lernergebnis-mapping.json`;
  if (!existsSync(p)) return null;
  const raw = JSON.parse(readFileSync(p, "utf8"));
  // Akzeptiert { mapping: {...} } oder direkt {...}
  return (raw.mapping ?? raw) as StepMapping;
}

interface BloomStep { stepId?: string; bloomLevel?: number }

function collectBloomSteps(situation: unknown): BloomStep[] {
  const s = situation as {
    phasen?: { kernSteps?: BloomStep[]; optionaleSteps?: BloomStep[] }[];
    komplikationen?: { steps?: BloomStep[] }[];
  };
  const out: BloomStep[] = [];
  for (const p of s.phasen ?? []) out.push(...(p.kernSteps ?? []), ...(p.optionaleSteps ?? []));
  for (const k of s.komplikationen ?? []) out.push(...(k.steps ?? []));
  return out;
}

/** stepId → bloomLevel über alle Situationen einer CE. */
async function loadStepBloomIndex(ce: string): Promise<Map<string, number>> {
  const index = new Map<string, number>();
  const indexPath = resolve(process.cwd(), "content", ce, "index.ts");
  if (!existsSync(indexPath)) return index;
  const mod = (await import(pathToFileURL(indexPath).href)) as Record<string, unknown>;
  const prefix = ce.replace("-", "").toUpperCase();
  const situationen = (mod[`${prefix}_SITUATIONEN`] as unknown[] | undefined) ?? [];
  for (const sit of situationen) {
    for (const s of collectBloomSteps(sit)) {
      if (s.stepId && typeof s.bloomLevel === "number") index.set(s.stepId, s.bloomLevel);
    }
  }
  return index;
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  const ceArg = process.argv[2];
  if (!ceArg || !/^\d{1,2}$/.test(ceArg)) {
    console.error("Aufruf: npx tsx scripts/lernergebnis-tiefe.ts <ce-nummer 1-11> [--strict]");
    process.exit(1);
    return;
  }
  const NN = String(parseInt(ceArg, 10)).padStart(2, "0");
  const ce = `ce-${NN}`;
  const forceStrict = process.argv.includes("--strict");

  const katalog = loadKatalog(NN);
  if (!katalog) {
    console.error(`❌ Katalog fehlt: specs/curriculum/ce-${NN}-lernergebnisse.json`);
    process.exit(1);
    return;
  }

  const mapping = loadMapping(NN);
  const stepBloom = await loadStepBloomIndex(ce);

  console.log("═".repeat(72));
  console.log(`LERNERGEBNIS-TIEFE (W10) — ${ce}`);
  console.log("═".repeat(72));
  console.log(`Lernergebnisse: ${katalog.lernergebnisse.length} · Steps im Content: ${stepBloom.size}`);

  if (!mapping) {
    console.log(`\n⚠️  Kein Mapping (specs/ce-${NN}/lernergebnis-mapping.json) — WARN-Modus.`);
    console.log(`   Coverage-Tiefe wird gemessen, sobald der Recheck das Mapping erzeugt:`);
    console.log(`   { "<leId>": ["<stepId>", …] }  (welcher Step deckt welches Lernergebnis).`);
    console.log(`   Bis dahin kein Fehler (analog Step-Grounding-Adoption).`);
    process.exit(0);
    return;
  }

  // Unbekannte Step-Referenzen im Mapping sammeln (Integritäts-Hinweis)
  const danglingSteps: string[] = [];
  const results: LeTiefeResult[] = katalog.lernergebnisse.map((le) => {
    const stepIds = mapping[le.id] ?? [];
    const blooms: number[] = [];
    for (const sid of stepIds) {
      const b = stepBloom.get(sid);
      if (b === undefined) danglingSteps.push(`${le.id}→${sid}`);
      else blooms.push(b);
    }
    return gateLe(le, blooms);
  });

  const b = bilanz(results);
  console.log(`\nTiefe-Verteilung: ` +
    `fehlt ${b.verteilung.fehlt} · berührt ${b.verteilung["berührt"]} · ` +
    `geübt ${b.verteilung["geübt"]} · geprüft ${b.verteilung["geprüft"]}`);
  console.log(`Gate: PASS ${b.pass} · FAIL ${b.fail} · by-design ${b.byDesign}`);

  const fails = results.filter((r) => r.status === "FAIL");
  if (fails.length) {
    console.log(`\n❌ ${fails.length} Lernergebnis(se) unter Mindeststufe „geübt":`);
    for (const r of fails.slice(0, 25)) {
      console.log(`   ${r.id} [${r.erreichteTiefe}] — ${r.begruendung}`);
    }
    if (fails.length > 25) console.log(`   … +${fails.length - 25} weitere`);
  }
  if (danglingSteps.length) {
    console.log(`\n⚠️  ${danglingSteps.length} Mapping-Referenz(en) auf unbekannte stepIds:`);
    console.log(`   ${danglingSteps.slice(0, 10).join(", ")}${danglingSteps.length > 10 ? " …" : ""}`);
  }

  // Report
  try {
    const outDir = join("content", ce);
    mkdirSync(outDir, { recursive: true });
    let md = `# Lernergebnis-Tiefe-Report — ${ce}\n\n`;
    md += `Mindeststufe: „geübt" (Bloom ≥ 3). PASS ${b.pass} · FAIL ${b.fail} · by-design ${b.byDesign} · total ${b.total}\n\n`;
    md += `| LE | Typ | Bloom-Soll | Steps | Tiefe | Status |\n|----|-----|-----------|-------|-------|--------|\n`;
    for (const r of results) {
      md += `| ${r.id} | ${r.typ} | ${r.bloomSoll} | ${r.zugeordneteSteps} | ${r.erreichteTiefe} | ${r.status} |\n`;
    }
    writeFileSync(join(outDir, "lernergebnis-tiefe-report.md"), md);
    writeFileSync(join(outDir, "lernergebnis-tiefe-report.json"), JSON.stringify({ ce, bilanz: b, results, danglingSteps }, null, 2));
  } catch {
    /* Report optional */
  }

  void forceStrict; // mit vorhandenem Mapping ist das Gate ohnehin scharf
  const fail = b.fail > 0;
  console.log(`\n${"═".repeat(72)}`);
  console.log(fail
    ? `❌ FAIL — ${b.fail} LE unter „geübt". (0 FEHLT reicht nicht — jedes LE mind. geübt.)`
    : `✅ PASS — jedes Lernergebnis mind. auf Stufe „geübt" (oder by-design befreit).`);
  process.exit(fail ? 1 : 0);
}

const isCLI = process.argv[1]?.includes("lernergebnis-tiefe");
if (isCLI) {
  main().catch((e) => {
    console.error("lernergebnis-tiefe Fehler:", e);
    process.exit(2);
  });
}
