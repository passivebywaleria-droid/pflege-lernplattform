/**
 * step-grounding-check.ts <ce> [--strict]  — Pipeline-Härtung Stage 2 (W2)
 *
 * Dehnt die „kein erfundener Content"-Garantie über die Kernfakten-Grenze hinaus
 * auf den lernende-sichtbaren Step-Text aus: Jeder claim-tragende Step muss per
 * `kernfaktId: string[]` auf ≥1 existierenden, in den Kernfakten belegten `F-XX`
 * zeigen. Sonst behauptet die App etwas, dessen Stütze nirgends nachweisbar ist.
 *
 * Referenz-Format (pro kernfaktId-Eintrag):
 *   - bare:           "F-08"                  → Thema = step.themaPrimaer
 *   - vollqualifiziert: "sturz-prophylaxe/F-08"  → explizites Thema
 *
 * Gating-Logik (bewusst graduell, damit Retrofit nicht in einer Fehler-Flut ertrinkt):
 *   - AUTO-STRICT pro Situation: Sobald EINE Situation anfängt zu grounden (≥1 Step
 *     mit kernfaktId), MÜSSEN ALLE claim-tragenden Steps dieser Situation gegroundet
 *     sein — eine halb-gegroundete Situation ist ein Fehler.
 *   - Noch nicht adoptierte Situationen (0 gegroundete Steps) → nur Coverage-Hinweis,
 *     kein Fehler (außer --strict erzwingt globale Adoption).
 *   - DANGLING-REF (kernfaktId zeigt auf nicht existierendes Thema/F-XX, oder bare-Ref
 *     ohne themaPrimaer) → IMMER Fehler, unabhängig von Adoption (kaputte Referenz).
 *
 * Usage:
 *   npx tsx scripts/step-grounding-check.ts ce-02
 *   npx tsx scripts/step-grounding-check.ts ce-02 --strict
 */
import { readdirSync, readFileSync, existsSync, writeFileSync } from "fs";
import { join, resolve } from "path";
import { pathToFileURL } from "url";

// ─────────────────────────────────────────────────────────────────────────────
// Pure, testbare Kernlogik (von tests/unit/step-grounding.test.ts importiert)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Claim-FREIE Step-Typen — behaupten keinen klinischen Fakt als autoritativ richtig
 * (subjektiv/meta/Modalität). Bewusst KLEIN gehalten: lieber ein Step zu viel
 * grounden als einen claim-tragenden durchrutschen lassen. Alles nicht hier
 * Gelistete gilt als claim-tragend.
 */
export const CLAIM_FREE_STEP_TYPES: ReadonlySet<string> = new Set([
  "reflection", // freie Reflexion, keine Wahr/Falsch-Wertung
  "selfrating", // Selbsteinschätzung (subjektiv)
  "confidence", // Konfidenz-Abfrage (subjektiv)
  "crowdPoll",  // Meinungs-Umfrage mit Seed-Ergebnissen
  "audio",      // reine Audio-Wiedergabe (Modalität)
  "speech",     // Ausspracheübung (Modalität)
]);

export function isClaimBearing(stepType: string): boolean {
  return !CLAIM_FREE_STEP_TYPES.has(stepType);
}

/** Extrahiert alle `F-XX`-IDs aus einer Kernfakten-.md (Header `### F-08: …`). */
export function parseKernfaktIds(md: string): Set<string> {
  const ids = new Set<string>();
  for (const m of md.matchAll(/^#{2,4}\s+(F-\d+)\b/gim)) {
    ids.add(m[1].toUpperCase());
  }
  return ids;
}

export interface ParsedRef {
  thema: string | null; // null → über step.themaPrimaer auflösen
  fakt: string;         // normalisiert, z.B. "F-08"
}

/** Zerlegt einen kernfaktId-Eintrag in Thema (optional) + F-XX. */
export function parseRef(ref: string): ParsedRef {
  const trimmed = ref.trim();
  const slash = trimmed.lastIndexOf("/");
  if (slash === -1) {
    return { thema: null, fakt: trimmed.toUpperCase() };
  }
  return {
    thema: trimmed.slice(0, slash).trim(),
    fakt: trimmed.slice(slash + 1).trim().toUpperCase(),
  };
}

/** Faktenindex: themaId → Menge vorhandener F-XX. */
export type FactIndex = Map<string, Set<string>>;

export type FindingKind =
  | "MISSING_GROUNDING" // claim-tragend, adoptierte Situation, aber keine kernfaktId
  | "DANGLING_REF";     // kernfaktId zeigt ins Leere (Thema/F-XX fehlt, bare ohne Thema)

export interface Finding {
  kind: FindingKind;
  situationId: string;
  stepId: string;
  stepType: string;
  detail: string;
}

export interface StepLike {
  stepId?: string;
  stepType?: string;
  themaPrimaer?: string;
  kernfaktId?: string[];
}

/**
 * Prüft die kernfaktId-Referenzen EINES Steps gegen den Faktenindex.
 * Liefert ausschließlich DANGLING_REF-Findings (Referenz-Integrität).
 * `hasValidRef` = true, wenn der Step mindestens eine auflösbare Referenz hat.
 */
export function checkStepRefs(
  step: StepLike,
  factIndex: FactIndex,
  situationId: string
): { findings: Finding[]; hasValidRef: boolean } {
  const findings: Finding[] = [];
  const stepId = step.stepId ?? "(ohne stepId)";
  const stepType = step.stepType ?? "(ohne stepType)";
  let hasValidRef = false;

  for (const raw of step.kernfaktId ?? []) {
    const { thema, fakt } = parseRef(raw);
    const themaId = thema ?? step.themaPrimaer ?? null;

    if (!themaId) {
      findings.push({
        kind: "DANGLING_REF", situationId, stepId, stepType,
        detail: `kernfaktId "${raw}" ist bare (ohne Thema) und der Step hat kein themaPrimaer — nicht auflösbar.`,
      });
      continue;
    }
    const faktSet = factIndex.get(themaId);
    if (!faktSet) {
      findings.push({
        kind: "DANGLING_REF", situationId, stepId, stepType,
        detail: `kernfaktId "${raw}" → Thema "${themaId}" hat keine Kernfakten-Datei.`,
      });
      continue;
    }
    if (!faktSet.has(fakt)) {
      findings.push({
        kind: "DANGLING_REF", situationId, stepId, stepType,
        detail: `kernfaktId "${raw}" → "${fakt}" existiert nicht in Thema "${themaId}".`,
      });
      continue;
    }
    hasValidRef = true;
  }
  return { findings, hasValidRef };
}

export interface SituationReport {
  situationId: string;
  claimBearingTotal: number;
  grounded: number;       // claim-tragende Steps mit ≥1 (irgend-)kernfaktId
  adopted: boolean;       // Situation hat angefangen zu grounden
  findings: Finding[];
}

/**
 * Prüft eine ganze Situation. `globalStrict` erzwingt Adoption auch ohne
 * vorhandene Groundings (jede claim-tragende Lücke wird Fehler).
 */
export function checkSituation(
  situationId: string,
  steps: StepLike[],
  factIndex: FactIndex,
  globalStrict = false
): SituationReport {
  const claimBearing = steps.filter((s) => isClaimBearing(s.stepType ?? ""));
  const hasAnyRef = (s: StepLike) => (s.kernfaktId?.length ?? 0) > 0;
  const groundedSteps = claimBearing.filter(hasAnyRef);
  const adopted = globalStrict || groundedSteps.length > 0;

  const findings: Finding[] = [];

  // 1) Referenz-Integrität für ALLE Steps mit Referenzen (auch in nicht-adoptierten
  //    Situationen — eine kaputte Referenz ist immer ein Fehler).
  for (const s of steps) {
    if ((s.kernfaktId?.length ?? 0) === 0) continue;
    findings.push(...checkStepRefs(s, factIndex, situationId).findings);
  }

  // 2) Fehlendes Grounding — nur in adoptierten Situationen ein Fehler.
  if (adopted) {
    for (const s of claimBearing) {
      if (!hasAnyRef(s)) {
        findings.push({
          kind: "MISSING_GROUNDING",
          situationId,
          stepId: s.stepId ?? "(ohne stepId)",
          stepType: s.stepType ?? "(ohne stepType)",
          detail: `Claim-tragender Step ohne kernfaktId — die Situation ist gegroundet, dieser Step nicht.`,
        });
      }
    }
  }

  return {
    situationId,
    claimBearingTotal: claimBearing.length,
    grounded: groundedSteps.length,
    adopted,
    findings,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// IO-Schicht: Faktenindex laden + Situationen importieren
// ─────────────────────────────────────────────────────────────────────────────

/** Liest specs/{ce}/kernfakten/*.md → themaId → Set<F-XX>. */
export function loadFactIndex(ce: string, kernfaktenRoot = "specs"): FactIndex {
  const dir = join(kernfaktenRoot, ce, "kernfakten");
  const index: FactIndex = new Map();
  if (!existsSync(dir)) return index;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".md")) continue;
    const themaId = f.replace(/\.md$/, "");
    index.set(themaId, parseKernfaktIds(readFileSync(join(dir, f), "utf8")));
  }
  return index;
}

/** Sammelt alle Steps einer Lernsituation (kernSteps + optionaleSteps + Komplikationen). */
function collectSteps(situation: unknown): StepLike[] {
  const s = situation as {
    phasen?: { kernSteps?: StepLike[]; optionaleSteps?: StepLike[] }[];
    komplikationen?: { steps?: StepLike[] }[];
  };
  const out: StepLike[] = [];
  for (const p of s.phasen ?? []) {
    out.push(...(p.kernSteps ?? []), ...(p.optionaleSteps ?? []));
  }
  for (const k of s.komplikationen ?? []) {
    out.push(...(k.steps ?? []));
  }
  return out;
}

/** Importiert die Situationen einer CE über deren index.ts (CE{NN}_SITUATIONEN). */
async function loadSituationen(ce: string): Promise<{ situationId: string; steps: StepLike[] }[]> {
  const indexPath = resolve(process.cwd(), "content", ce, "index.ts");
  if (!existsSync(indexPath)) return [];
  const mod = (await import(pathToFileURL(indexPath).href)) as Record<string, unknown>;
  const prefix = ce.replace("-", "").toUpperCase(); // ce-02 → CE02
  const situationen = (mod[`${prefix}_SITUATIONEN`] as unknown[] | undefined) ?? [];
  return situationen.map((sit) => ({
    situationId: (sit as { situationId?: string }).situationId ?? "(ohne situationId)",
    steps: collectSteps(sit),
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  const ce = process.argv[2] || "ce-02";
  const globalStrict = process.argv.includes("--strict");

  const factIndex = loadFactIndex(ce);
  const situationen = await loadSituationen(ce);

  console.log("═".repeat(68));
  console.log(`STEP-GROUNDING-CHECK (W2) — ${ce}${globalStrict ? "  [--strict]" : ""}`);
  console.log("═".repeat(68));
  console.log(`Kernfakten-Themen: ${factIndex.size} · Situationen: ${situationen.length}`);

  if (situationen.length === 0) {
    console.log(`\n⚠️  Keine Situationen gefunden (content/${ce}/index.ts fehlt oder leer).`);
    console.log("Nichts zu prüfen — kein Fehler.");
    process.exit(0);
  }

  const reports = situationen.map((s) =>
    checkSituation(s.situationId, s.steps, factIndex, globalStrict)
  );

  let totalFindings = 0;
  let dangling = 0;
  let missing = 0;
  const mdLines: string[] = [`# Step-Grounding-Report — ${ce}`, ""];

  for (const r of reports) {
    const status = r.adopted ? (r.findings.length === 0 ? "✅ PASS" : "❌ FAIL") : "⏳ nicht adoptiert";
    console.log(`\n${status}  ${r.situationId}`);
    console.log(`   claim-tragend: ${r.claimBearingTotal} · gegroundet: ${r.grounded}`);
    mdLines.push(`## ${r.situationId} — ${status}`);
    mdLines.push(`- claim-tragende Steps: ${r.claimBearingTotal}, gegroundet: ${r.grounded}, adoptiert: ${r.adopted}`);
    for (const f of r.findings) {
      totalFindings++;
      if (f.kind === "DANGLING_REF") dangling++;
      else missing++;
      const tag = f.kind === "DANGLING_REF" ? "🔴 DANGLING" : "🟠 MISSING";
      console.log(`   ${tag}  ${f.stepId} (${f.stepType}): ${f.detail}`);
      mdLines.push(`  - ${tag} \`${f.stepId}\` (${f.stepType}): ${f.detail}`);
    }
    mdLines.push("");
  }

  console.log(`\n${"─".repeat(68)}`);
  console.log(`Findings: ${totalFindings}  (DANGLING ${dangling} · MISSING ${missing})`);

  const adoptedCount = reports.filter((r) => r.adopted).length;
  if (adoptedCount === 0 && !globalStrict) {
    console.log(`Noch keine Situation gegroundet — Warn-Modus (kein Fehler).`);
    console.log(`Sobald eine Situation kernfaktId nutzt, wird sie automatisch streng geprüft.`);
  }

  // Report-Dateien schreiben (für Pipeline-Checkliste)
  try {
    const outDir = join("content", ce);
    if (existsSync(outDir)) {
      writeFileSync(join(outDir, "step-grounding-report.md"), mdLines.join("\n"));
      writeFileSync(
        join(outDir, "step-grounding-report.json"),
        JSON.stringify({ ce, reports, totals: { totalFindings, dangling, missing } }, null, 2)
      );
    }
  } catch {
    /* Report-Schreiben ist optional, nie blockierend */
  }

  const fail = totalFindings > 0;
  console.log(fail ? "❌ FAIL — Grounding-Lücken/Dangling-Refs gefunden." : "✅ PASS — alle adoptierten Situationen vollständig gegroundet.");
  process.exit(fail ? 1 : 0);
}

const isCLI = process.argv[1]?.includes("step-grounding-check");
if (isCLI) {
  main().catch((e) => {
    console.error("step-grounding-check Fehler:", e);
    process.exit(2);
  });
}
