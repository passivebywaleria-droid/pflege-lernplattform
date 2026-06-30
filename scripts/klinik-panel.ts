/**
 * klinik-panel.ts <ce> [--situation <id>] [--json]  — Pipeline-Härtung Stage 4 (W6)
 *
 * ADVERSARIALES KLINIK-PANEL. Ersetzt den Einzel-pflege-validator durch ein Panel
 * aus VIER getrennten, unabhängigen Lenses, die PARALLEL prüfen (Gründerin-Regel:
 * „alles, nicht einzeln"). Jeder Lens ist blind für die anderen, jeder Befund ist
 * literaturbelegt; die Befunde werden gemerged + dedupliziert. Die Gründerin bleibt
 * menschlicher Backstop (kann jeden Befund overrulen) — das Panel liefert die Vorlage.
 *
 *   Lens 1  Arzneimittel-/Zahlen-Sicherheit  → reuse W1 (klinik-zahlen-check)
 *   Lens 2  Recht & Ethik                    → reuse Standards-Currency-Registry (Teil D)
 *   Lens 3  DNQP-/Standard-Konformität       → reuse W2-Grounding + Anti-Pattern-Register
 *   Lens 4  Konsistenz (Patient-Daten/Cross-Step)
 *
 * Der semantische `pflege-validator`-Agent bleibt der 5., menschlich-semantische Lens
 * (er unterscheidet „empfiehlt Falsches" von „lehrt über Falsches") — siehe
 * .claude/agents/klinik-panel.md. Dieses Skript deckt die deterministisch
 * automatisierbaren Lenses ab.
 *
 * Exit-Codes:
 *   0 — kein K.O. (keine HOCH-Befunde)
 *   1 — mindestens ein HOCH-Befund (K.O. für Live-Deploy)
 *   2 — Setup-Fehler (Registry/Referenzwerte nicht ladbar)
 *
 * Usage:
 *   npx tsx scripts/klinik-panel.ts ce-02
 *   npx tsx scripts/klinik-panel.ts ce-02 --json
 */
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import { pathToFileURL } from "url";

import {
  analyzeText,
  buildLineExempt,
  loadReferenzwerte,
  type ReferenzWert,
} from "./klinik-zahlen-check";
import {
  scanTextForOutdatedNorms,
  loadCurrencyRegistry,
  type NormEntry,
} from "./standards-currency-check";
import {
  checkSituation,
  loadFactIndex,
  type FactIndex,
  type StepLike,
} from "./step-grounding-check";

// ─────────────────────────────────────────────────────────────────────────────
// Panel-Datenmodell (pure)
// ─────────────────────────────────────────────────────────────────────────────

export type Lens = "arzneimittel" | "recht" | "dnqp-standard" | "konsistenz";
export type Severity = "HOCH" | "MITTEL" | "NIEDRIG";

export interface Beleg {
  quelle: string;
  zitat?: string;
}

export interface PanelFinding {
  lens: Lens;
  severity: Severity;
  code: string;
  title: string;
  detail: string;
  file?: string;
  line?: number;
  situationId?: string;
  stepId?: string;
  /** Literaturbeleg. null → Befund ohne Beleg → Beschaffungs-Sektion. */
  beleg: Beleg | null;
}

export const SEVERITY_RANK: Record<Severity, number> = { HOCH: 3, MITTEL: 2, NIEDRIG: 1 };
export const LENS_LABEL: Record<Lens, string> = {
  arzneimittel: "Arzneimittel-/Zahlen-Sicherheit",
  recht: "Recht & Ethik",
  "dnqp-standard": "DNQP-/Standard-Konformität",
  konsistenz: "Konsistenz (Patient-Daten / Cross-Step)",
};

const normTitle = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

/** Dedup-Schlüssel: gleiche Stelle + gleicher Befundtyp = ein Befund. */
export function dedupKey(f: PanelFinding): string {
  return [
    f.lens,
    f.code,
    f.file ?? "",
    f.line ?? "",
    f.situationId ?? "",
    f.stepId ?? "",
    normTitle(f.title),
  ].join("|");
}

/**
 * Merge + Dedup über alle Lenses. Bei Kollision bleibt der Befund mit der
 * höheren Severity. Stabile Sortierung: Severity desc, dann Lens, Datei, Zeile.
 */
export function mergeFindings(findings: PanelFinding[]): PanelFinding[] {
  const byKey = new Map<string, PanelFinding>();
  for (const f of findings) {
    const k = dedupKey(f);
    const prev = byKey.get(k);
    if (!prev || SEVERITY_RANK[f.severity] > SEVERITY_RANK[prev.severity]) {
      byKey.set(k, f);
    }
  }
  return [...byKey.values()].sort((a, b) => {
    if (SEVERITY_RANK[b.severity] !== SEVERITY_RANK[a.severity])
      return SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity];
    if (a.lens !== b.lens) return a.lens.localeCompare(b.lens);
    if ((a.file ?? "") !== (b.file ?? "")) return (a.file ?? "").localeCompare(b.file ?? "");
    return (a.line ?? 0) - (b.line ?? 0);
  });
}

export interface PanelVerdict {
  hoch: number;
  mittel: number;
  niedrig: number;
  total: number;
  belegt: number;
  beschaffung: number;
  ko: boolean;
}

/** K.O. = mindestens ein HOCH-Befund (analog Validator-Verdikt). */
export function panelVerdict(findings: PanelFinding[]): PanelVerdict {
  const hoch = findings.filter((f) => f.severity === "HOCH").length;
  const mittel = findings.filter((f) => f.severity === "MITTEL").length;
  const niedrig = findings.filter((f) => f.severity === "NIEDRIG").length;
  const belegt = findings.filter((f) => f.beleg !== null).length;
  return {
    hoch,
    mittel,
    niedrig,
    total: findings.length,
    belegt,
    beschaffung: findings.length - belegt,
    ko: hoch > 0,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Lens 4 — Konsistenz (pure)
// ─────────────────────────────────────────────────────────────────────────────

export interface KonsistenzStep {
  stepId?: string;
  patientId?: string;
}
export interface KonsistenzSituation {
  situationId: string;
  patientId?: string;
  steps: KonsistenzStep[];
}

/**
 * Deterministische Konsistenz-Checks ohne fragile NLP:
 *  - doppelte stepId innerhalb einer Situation (Copy-Paste-Bug),
 *  - step.patientId, der dem Patienten der Situation widerspricht (Fremd-Fall eingemischt).
 */
export function konsistenzFindings(sit: KonsistenzSituation): PanelFinding[] {
  const out: PanelFinding[] = [];
  const seen = new Map<string, number>();
  for (const s of sit.steps) {
    if (!s.stepId) continue;
    seen.set(s.stepId, (seen.get(s.stepId) ?? 0) + 1);
  }
  for (const [stepId, count] of seen) {
    if (count > 1) {
      out.push({
        lens: "konsistenz",
        severity: "MITTEL",
        code: "DUP-STEPID",
        title: `Doppelte stepId "${stepId}"`,
        detail: `stepId "${stepId}" kommt ${count}× in der Situation vor — Steps müssen eindeutig sein (Tracking/Adaptivität bricht sonst).`,
        situationId: sit.situationId,
        stepId,
        beleg: { quelle: "Datenmodell: ContentStep.stepId muss eindeutig sein" },
      });
    }
  }
  if (sit.patientId) {
    for (const s of sit.steps) {
      if (s.patientId && s.patientId !== sit.patientId) {
        out.push({
          lens: "konsistenz",
          severity: "NIEDRIG",
          code: "PATIENT-MISMATCH",
          title: `Fremde patientId "${s.patientId}"`,
          detail: `Step "${s.stepId ?? "?"}" referenziert patientId "${s.patientId}", die Situation gehört aber zu "${sit.patientId}". Prüfen, ob ein Fremd-Fall eingemischt wurde (oder bewusster Cross-Fall-Verweis).`,
          situationId: sit.situationId,
          stepId: s.stepId,
          beleg: { quelle: "pflege-konformitaet.md — Cross-Step-Konsistenz (Patient-Daten konsistent)" },
        });
      }
    }
  }
  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// Lens-Runner (pure-ish: Daten rein, Findings raus)
// ─────────────────────────────────────────────────────────────────────────────

export interface FileText {
  file: string;
  text: string;
}

/** Lens 1 — Arzneimittel-/Zahlen-Sicherheit (reuse W1). */
export function lensArzneimittel(files: FileText[], db: ReferenzWert[]): PanelFinding[] {
  const out: PanelFinding[] = [];
  for (const { file, text } of files) {
    const { findings } = analyzeText(text, db, buildLineExempt(text));
    for (const f of findings) {
      const range = `${f.min ?? "−∞"}…${f.max ?? "+∞"} ${f.unit}`;
      out.push({
        lens: "arzneimittel",
        severity: "HOCH",
        code: `ZAHL-${f.refId}`,
        title: `Falsch gelehrter Normwert: ${f.groesse} (${f.zielgruppe})`,
        detail: `Gelehrt ${f.badValues.join("/")} ${f.unit}, belegter Normbereich ${range}. „${f.snippet}"`,
        file,
        beleg: { quelle: `${f.quelle.datei}:${f.quelle.zeile}`, zitat: f.quelle.zitat },
      });
    }
  }
  return out;
}

/** Lens 2 — Recht & Ethik: veraltete Normen (reuse Standards-Currency). */
export function lensRecht(files: FileText[], registry: NormEntry[]): PanelFinding[] {
  const out: PanelFinding[] = [];
  for (const { file, text } of files) {
    for (const h of scanTextForOutdatedNorms(text, registry)) {
      out.push({
        lens: "recht",
        severity: h.severity,
        code: `NORM-${h.id}`,
        title: `Veraltete Norm „${h.matched}"`,
        detail: `Seit ${h.datumAbloesung} ersetzt durch ${h.ersetztDurch}. ${h.grund} („${h.snippet}")`,
        file,
        line: h.line,
        beleg: h.beleg,
      });
    }
  }
  return out;
}

/**
 * Lens 3 — DNQP-/Standard-Konformität: Step-Grounding (W2). Claim-tragende Steps
 * müssen auf belegte Kernfakten zeigen; kaputte Referenzen sind harte Fehler.
 * (Das regex-Anti-Pattern-Register ist der Pre-Filter des SEMANTISCHEN Lens —
 * pflege-validator-Agent —, nicht dieses deterministischen; siehe klinik-panel.md.)
 */
export function lensDnqpStandard(
  situationen: { situationId: string; steps: StepLike[] }[],
  factIndex: FactIndex
): PanelFinding[] {
  const out: PanelFinding[] = [];
  for (const sit of situationen) {
    const report = checkSituation(sit.situationId, sit.steps, factIndex);
    for (const f of report.findings) {
      const dangling = f.kind === "DANGLING_REF";
      out.push({
        lens: "dnqp-standard",
        severity: dangling ? "HOCH" : "MITTEL",
        code: f.kind,
        title: dangling ? "Kaputte Kernfakt-Referenz" : "Claim-tragender Step ohne Grounding",
        detail: f.detail,
        situationId: sit.situationId,
        stepId: f.stepId,
        // Grounding-Befunde sind selbst die „Beschaffung" (fehlende Beleg-Kette) →
        // bewusst beleg=null, damit sie in der Beschaffungs-Bilanz erscheinen.
        beleg: dangling ? { quelle: "Pipeline W2 — kernfaktId muss auf existierenden F-XX zeigen" } : null,
      });
    }
  }
  return out;
}

/** Lens 4 — Konsistenz. */
export function lensKonsistenz(situationen: KonsistenzSituation[]): PanelFinding[] {
  return situationen.flatMap(konsistenzFindings);
}

// ─────────────────────────────────────────────────────────────────────────────
// IO-Schicht: Situationen + Dateien laden
// ─────────────────────────────────────────────────────────────────────────────

interface PanelStep extends StepLike, KonsistenzStep {
  bloomLevel?: number;
}
interface LoadedSituation {
  situationId: string;
  patientId?: string;
  steps: PanelStep[];
}

function collectSteps(situation: unknown): PanelStep[] {
  const s = situation as {
    phasen?: { kernSteps?: PanelStep[]; optionaleSteps?: PanelStep[] }[];
    komplikationen?: { steps?: PanelStep[] }[];
  };
  const out: PanelStep[] = [];
  for (const p of s.phasen ?? []) out.push(...(p.kernSteps ?? []), ...(p.optionaleSteps ?? []));
  for (const k of s.komplikationen ?? []) out.push(...(k.steps ?? []));
  return out;
}

async function loadSituationen(ce: string): Promise<LoadedSituation[]> {
  const indexPath = resolve(process.cwd(), "content", ce, "index.ts");
  if (!existsSync(indexPath)) return [];
  const mod = (await import(pathToFileURL(indexPath).href)) as Record<string, unknown>;
  const prefix = ce.replace("-", "").toUpperCase();
  const situationen = (mod[`${prefix}_SITUATIONEN`] as unknown[] | undefined) ?? [];
  return situationen.map((sit) => {
    const o = sit as { situationId?: string; patient?: { patientId?: string } };
    return {
      situationId: o.situationId ?? "(ohne situationId)",
      patientId: o.patient?.patientId,
      steps: collectSteps(sit),
    };
  });
}

/** Sammelt phase-*.ts + patient.ts-Texte unter content/{ce}/situationen. */
function loadSituationFileTexts(ce: string): FileText[] {
  const dir = join(process.cwd(), "content", ce, "situationen");
  const out: FileText[] = [];
  if (!existsSync(dir)) return out;
  const walk = (d: string) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e);
      let st;
      try { st = statSync(p); } catch { continue; }
      if (st.isDirectory()) { walk(p); continue; }
      if ((e.startsWith("phase-") && e.endsWith(".ts")) || e === "patient.ts") {
        out.push({ file: p.replace(process.cwd() + "/", ""), text: readFileSync(p, "utf8") });
      }
    }
  };
  walk(dir);
  return out;
}

// ─────────────────────────────────────────────────────────────────────────────
// Report
// ─────────────────────────────────────────────────────────────────────────────

export function renderMarkdown(ce: string, findings: PanelFinding[], verdict: PanelVerdict): string {
  const md: string[] = [];
  md.push(`# Klinik-Panel-Report — ${ce}`, "");
  md.push(`> Adversariales 4-Lens-Panel (W6). Gründerin = menschlicher Backstop.`, "");
  md.push(`**Verdikt:** ${verdict.ko ? "❌ K.O. (≥1 HOCH)" : "✅ PASS"} · ` +
    `HOCH ${verdict.hoch} · MITTEL ${verdict.mittel} · NIEDRIG ${verdict.niedrig} · ` +
    `belegt ${verdict.belegt}/${verdict.total}`, "");

  for (const lens of Object.keys(LENS_LABEL) as Lens[]) {
    const list = findings.filter((f) => f.lens === lens);
    md.push(`## Lens: ${LENS_LABEL[lens]} (${list.length})`, "");
    if (list.length === 0) { md.push("_keine Befunde_", ""); continue; }
    for (const f of list) {
      const loc = [f.file, f.line ? `Z${f.line}` : "", f.situationId, f.stepId].filter(Boolean).join(" · ");
      md.push(`### [${f.severity}] ${f.code} — ${f.title}`);
      md.push(`- **Stelle:** ${loc || "—"}`);
      md.push(`- **Detail:** ${f.detail}`);
      md.push(`- **Beleg:** ${f.beleg ? `${f.beleg.quelle}${f.beleg.zitat ? ` — „${f.beleg.zitat}"` : ""}` : "⚠️ kein Beleg → Beschaffung"}`);
      md.push("");
    }
  }

  if (verdict.beschaffung > 0) {
    md.push(`## Beschaffung (${verdict.beschaffung} Befund(e) ohne Literaturbeleg)`, "");
    for (const f of findings.filter((x) => x.beleg === null)) {
      md.push(`- ${f.code} (${f.situationId ?? f.file ?? "?"}): ${f.title}`);
    }
    md.push("");
  }
  return md.join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes("--json");
  const ce = args.find((a) => /^ce-\d+/.test(a)) ?? "ce-02";
  const sitFilter = args.includes("--situation") ? args[args.indexOf("--situation") + 1] : undefined;

  let db: ReferenzWert[];
  let registry: NormEntry[];
  try {
    db = loadReferenzwerte();
    registry = loadCurrencyRegistry();
  } catch (e) {
    console.error("❌ Panel-Setup fehlgeschlagen:", (e as Error).message);
    process.exit(2);
    return;
  }

  const factIndex = loadFactIndex(ce);
  let situationen = await loadSituationen(ce);
  let fileTexts = loadSituationFileTexts(ce);
  if (sitFilter) {
    situationen = situationen.filter((s) => s.situationId === sitFilter);
    fileTexts = fileTexts.filter((f) => f.file.includes(`/${sitFilter}/`));
  }

  // Vier Lenses — unabhängig, parallel.
  const [l1, l2, l3, l4] = await Promise.all([
    Promise.resolve(lensArzneimittel(fileTexts, db)),
    Promise.resolve(lensRecht(fileTexts, registry)),
    Promise.resolve(
      lensDnqpStandard(
        situationen.map((s) => ({ situationId: s.situationId, steps: s.steps as StepLike[] })),
        factIndex
      )
    ),
    Promise.resolve(lensKonsistenz(situationen)),
  ]);

  const merged = mergeFindings([...l1, ...l2, ...l3, ...l4]);
  const verdict = panelVerdict(merged);

  if (isJson) {
    console.log(JSON.stringify({ ce, verdict, findings: merged }, null, 2));
    process.exit(verdict.ko ? 1 : 0);
    return;
  }

  console.log("═".repeat(74));
  console.log(`ADVERSARIALES KLINIK-PANEL (W6) — ${ce}${sitFilter ? ` · ${sitFilter}` : ""}`);
  console.log("═".repeat(74));
  console.log(`Situationen: ${situationen.length} · Dateien: ${fileTexts.length} · Kernfakten-Themen: ${factIndex.size}`);
  console.log(
    `Lenses → Zahlen ${l1.length} · Recht ${l2.length} · DNQP/Standard ${l3.length} · Konsistenz ${l4.length}\n`
  );
  console.log(`Befunde (dedupliziert): ${verdict.total}  ` +
    `(HOCH ${verdict.hoch} · MITTEL ${verdict.mittel} · NIEDRIG ${verdict.niedrig})`);
  console.log(`Literaturbelegt: ${verdict.belegt}/${verdict.total}` +
    (verdict.beschaffung ? ` · Beschaffung: ${verdict.beschaffung}` : ""));
  console.log();

  for (const lens of Object.keys(LENS_LABEL) as Lens[]) {
    const list = merged.filter((f) => f.lens === lens);
    const icon = list.some((f) => f.severity === "HOCH") ? "❌" : list.length ? "⚠️ " : "✅";
    console.log(`${icon} ${LENS_LABEL[lens]} (${list.length})`);
    for (const f of list.slice(0, 8)) {
      const loc = [f.file, f.line ? `Z${f.line}` : "", f.situationId, f.stepId].filter(Boolean).join(" · ");
      console.log(`   [${f.severity}] ${f.code} — ${f.title}`);
      console.log(`      ${loc}`);
    }
    if (list.length > 8) console.log(`   … +${list.length - 8} weitere`);
  }

  // Report-Dateien (best effort)
  try {
    const outDir = join("content", ce);
    if (existsSync(outDir)) {
      writeFileSync(join(outDir, "klinik-panel-report.md"), renderMarkdown(ce, merged, verdict));
      writeFileSync(join(outDir, "klinik-panel-report.json"), JSON.stringify({ ce, verdict, findings: merged }, null, 2));
    }
  } catch {
    /* Report optional, nie blockierend */
  }

  console.log(`\n${"═".repeat(74)}`);
  console.log(verdict.ko
    ? `❌ K.O. — ${verdict.hoch} HOCH-Befund(e). Live-Deploy blockiert (Gründerin kann overrulen).`
    : `✅ PASS — kein HOCH-Befund. (Panel = Vorlage, Gründerin bleibt Backstop.)`);
  process.exit(verdict.ko ? 1 : 0);
}

const isCLI = process.argv[1]?.includes("klinik-panel");
if (isCLI) {
  main().catch((e) => {
    console.error("klinik-panel Fehler:", e);
    process.exit(2);
  });
}
