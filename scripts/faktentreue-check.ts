/**
 * faktentreue-check.ts <ce> [--strict|--warn]  — Pipeline-Härtung (W3)
 *
 * Prüft, ob der generierte Content nur Fakten verwendet, die in der verifizierten
 * Faktenbasis (Kernfakten + Glossar) gedeckt sind. Zweites Gate gegen Erfindungen,
 * die der Generator trotz korrektem Plan einbaut.
 *
 * Deterministischer Kern (vertrauenswürdig, wenig False-Positives):
 *   Jedes benannte klinische INSTRUMENT/STANDARD/SKALA im Content muss in der
 *   Faktenbasis vorkommen — sonst referenziert die App ein Werkzeug, das sie nie
 *   gelehrt/belegt hat (erfundene oder falsch benannte Skala).
 *
 * Patienten-Vitalwerte (NRS X, RR x/y) werden NICHT geprüft — das sind authored
 * Fall-Daten, keine Autoritäts-Claims.
 *
 * W3 — SCHARFSCHALTEN: Das Gate war früher fest `exit 0`. Jetzt:
 *   - Kernfakten-Coverage = (# Kernfakten-Themen) / (# Themen der CE).
 *   - Coverage ≥ Schwelle (Default 0.8) → STRICT: exit 1 bei ungedeckten Instrumenten.
 *   - Coverage < Schwelle → WARN: exit 0, aber sichtbar geloggt (nicht stumm).
 *   - Override-Flags `--strict` / `--warn` erzwingen den Modus.
 *
 * Usage: npx tsx scripts/faktentreue-check.ts ce-02
 */
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join } from "path";

// ─────────────────────────────────────────────────────────────────────────────
// Pure, testbare Kernlogik (von tests/unit/faktentreue-gate.test.ts importiert)
// ─────────────────────────────────────────────────────────────────────────────

/** Benannte klinische Instrumente/Standards/Skalen (Fabrikations-relevant). */
export const INSTRUMENTE = [
  "Braden", "Norton", "Waterlow", "Tinetti", "Morse", "STRATIFY", "Hendrich",
  "Barthel", "FIM", "NRS", "VAS", "BESD", "KUSS", "ZOPA", "Doloplus",
  "NRS-2002", "MNA", "MUST", "PEMU", "SGA", "Glasgow", "GCS", "RASS",
  "Schellong", "SBAR", "ISBAR", "ABCDE", "Apgar", "Bromage",
  "EPUAP", "NPUAP", "DNQP", "Beers", "PRISCUS", "Bristol", "Braden-Q",
  "Aldrete", "CAM", "DOS", "Timed-Up", "Esslinger",
];

export const DEFAULT_COVERAGE_THRESHOLD = 0.8;

export type GateMode = "strict" | "warn";

/** Coverage = Kernfakten-Themen / CE-Themen, gedeckelt auf 1. */
export function computeCoverage(kernfaktenCount: number, themenCount: number): number {
  if (themenCount <= 0) return 0;
  return Math.min(1, kernfaktenCount / themenCount);
}

export interface ModeDecision {
  mode: GateMode;
  reason: string;
}

/** Entscheidet Strict vs. Warn aus Coverage + optionalem Override. */
export function decideMode(opts: {
  coverage: number;
  threshold?: number;
  override?: GateMode | null;
}): ModeDecision {
  const threshold = opts.threshold ?? DEFAULT_COVERAGE_THRESHOLD;
  if (opts.override === "strict") return { mode: "strict", reason: "per --strict erzwungen" };
  if (opts.override === "warn") return { mode: "warn", reason: "per --warn erzwungen" };
  if (opts.coverage >= threshold) {
    return { mode: "strict", reason: `Coverage ${(opts.coverage * 100).toFixed(0)}% ≥ Schwelle ${(threshold * 100).toFixed(0)}%` };
  }
  return { mode: "warn", reason: `Coverage ${(opts.coverage * 100).toFixed(0)}% < Schwelle ${(threshold * 100).toFixed(0)}%` };
}

/** Teilt verwendete Instrumente in gedeckt/ungedeckt gegen die (lowercase) Faktenbasis. */
export function evaluateInstrumente(
  verwendet: Iterable<string>,
  faktenbasisLower: string
): { gedeckt: string[]; ungedeckt: string[] } {
  const gedeckt: string[] = [];
  const ungedeckt: string[] = [];
  for (const instr of [...verwendet].sort()) {
    if (faktenbasisLower.includes(instr.toLowerCase())) gedeckt.push(instr);
    else ungedeckt.push(instr);
  }
  return { gedeckt, ungedeckt };
}

/** exit-Code-Entscheidung: nur im Strict-Modus failt eine Lücke. */
export function gateExitCode(mode: GateMode, ungedecktCount: number): number {
  return mode === "strict" && ungedecktCount > 0 ? 1 : 0;
}

// ─────────────────────────────────────────────────────────────────────────────
// IO-Helfer
// ─────────────────────────────────────────────────────────────────────────────

function walkTs(dir: string): string[] {
  const out: string[] = [];
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walkTs(p));
    else if (e.endsWith(".ts")) out.push(p);
  }
  return out;
}

function readAll(paths: string[]): string {
  return paths.map((p) => { try { return readFileSync(p, "utf8"); } catch { return ""; } }).join("\n");
}

function countThemen(ce: string): number {
  const dir = join("content", ce, "themen");
  if (!existsSync(dir)) return 0;
  return readdirSync(dir).filter((e) => {
    try { return statSync(join(dir, e)).isDirectory(); } catch { return false; }
  }).length;
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

function main() {
  const ce = process.argv.find((a) => /^ce-\d+/.test(a)) || "ce-02";
  const override: GateMode | null =
    process.argv.includes("--strict") ? "strict" :
    process.argv.includes("--warn") ? "warn" : null;

  // Faktenbasis: Kernfakten + Glossar
  const kernfaktenDir = join("specs", ce, "kernfakten");
  const kernfaktenFiles = existsSync(kernfaktenDir)
    ? readdirSync(kernfaktenDir).filter((f) => f.endsWith(".md")).map((f) => join(kernfaktenDir, f))
    : [];
  const glossarFiles = walkTs(join("content", ce, "themen")).filter((f) => f.includes("glossar"));
  const faktenbasis = (readAll(kernfaktenFiles) + readAll(glossarFiles)).toLowerCase();

  // Content: Situationen
  const sitFiles = walkTs(join("content", ce, "situationen"));
  const reInstr = new RegExp(`\\b(${INSTRUMENTE.join("|")})\\b`, "g");
  const proSituation: Record<string, Set<string>> = {};
  const alleVerwendet = new Set<string>();
  for (const f of sitFiles) {
    const sit = f.split("/situationen/")[1]?.split("/")[0] ?? f;
    const txt = readFileSync(f, "utf8");
    for (const m of txt.matchAll(reInstr)) {
      (proSituation[sit] ??= new Set()).add(m[1]);
      alleVerwendet.add(m[1]);
    }
  }

  // Coverage + Modus
  const themenCount = countThemen(ce);
  const coverage = computeCoverage(kernfaktenFiles.length, themenCount);
  const { mode, reason } = decideMode({ coverage, override });
  const { gedeckt, ungedeckt } = evaluateInstrumente(alleVerwendet, faktenbasis);

  console.log("═".repeat(64));
  console.log(`FAKTENTREUE-CHECK — ${ce}`);
  console.log("═".repeat(64));
  console.log(`Faktenbasis: ${kernfaktenFiles.length} Kernfakten-Dateien + ${glossarFiles.length} Glossare`);
  console.log(`Content: ${sitFiles.length} Situations-Dateien`);
  console.log(`Kernfakten-Coverage: ${kernfaktenFiles.length}/${themenCount} Themen = ${(coverage * 100).toFixed(0)}%`);
  console.log(`Gate-Modus: ${mode === "strict" ? "🔒 STRICT (exit 1 bei Lücke)" : "⚠️  WARN (exit 0)"} — ${reason}\n`);

  console.log(`INSTRUMENTE/STANDARDS im Content: ${alleVerwendet.size}`);
  console.log(`  ✅ in Faktenbasis gedeckt: ${gedeckt.length}  (${gedeckt.join(", ") || "—"})`);
  console.log(`  ⚠️  NICHT in Faktenbasis:  ${ungedeckt.length}  (${ungedeckt.join(", ") || "—"})`);

  if (ungedeckt.length) {
    console.log(`\nUngedeckte Instrumente — wo verwendet (→ Kernfakt/Glossar fehlt oder erfunden?):`);
    for (const instr of ungedeckt) {
      const sits = Object.entries(proSituation).filter(([, s]) => s.has(instr)).map(([s]) => s);
      console.log(`  ${instr.padEnd(12)} → ${sits.join(", ")}`);
    }
  }

  const exitCode = gateExitCode(mode, ungedeckt.length);
  console.log(`\n${"─".repeat(64)}`);
  if (ungedeckt.length === 0) {
    console.log("✅ Alle referenzierten Instrumente sind in der Faktenbasis gedeckt.");
  } else if (mode === "strict") {
    console.log(`❌ ${ungedeckt.length} Instrument(e) ohne Faktenbasis-Deckung — Gate ist SCHARF (FAIL).`);
    console.log("   Pro Treffer: fehlenden Kernfakt nachtragen ODER erfundenes/falsch benanntes Instrument entfernen.");
  } else {
    console.log(`⚠️  ${ungedeckt.length} Instrument(e) ohne Faktenbasis-Deckung — WARN-Modus (Coverage noch unter Schwelle).`);
    console.log("   Solange Kernfakten unvollständig sind, sind viele Treffer Coverage-Lücken, keine Erfindungen.");
    console.log("   Das Gate schaltet automatisch scharf, sobald die Kernfakten-Coverage die Schwelle erreicht.");
  }
  process.exit(exitCode);
}

const isCLI = process.argv[1]?.includes("faktentreue-check");
if (isCLI) main();
