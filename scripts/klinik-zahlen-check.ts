#!/usr/bin/env npx tsx
/**
 * klinik-zahlen-check.ts <ce> [--strict] [--json]  — Pipeline-Härtung Stage 3 (W1)
 *
 * Prüft klinische Zahlenwerte im Content gegen korpus-belegte Referenz-Ranges
 * (`recherche/referenzwerte.json`). Fängt FALSCH GELEHRTE Normwerte ab — z.B.
 * „Normaler Blutdruck ist 160/100" oder „SpO2-Normwert liegt bei 80 %".
 *
 * PRÄZISIONS-PRINZIP (gegen False-Positive-Flut, siehe Spec W1 Edge Case):
 *   Es werden NUR Autoritäts-Claims geprüft — eine Aussage über DEN Normwert.
 *   Ein Treffer braucht ALLE drei Dinge eng beieinander:
 *     1. einen Norm-Marker („Normwert", „Normbereich", „physiologisch", …),
 *     2. direkt danach (ohne Komma/Punkt dazwischen) einen Zahlenwert + Einheit,
 *     3. im Fenster einen Alias der konkreten Größe (z.B. „SpO2", „Blutdruck").
 *   Patienten-Falldaten (NRS 5, RR 90/58 — absichtlich abnormal) tragen KEINEN
 *   Norm-Marker neben der Zahl → werden nie geprüft. Zusätzlich:
 *     - `patient.ts` wird komplett übersprungen (reine Falldaten).
 *     - Eine Zeile mit `klinik-zahlen:ignore` wird übersprungen (markierte Falldaten).
 *     - Reine Kommentarzeilen werden übersprungen.
 *
 * ALTERSGRUPPEN: Im Kinder-Kontext (Kleinkind, Säugling, …) greifen die
 * pädiatrischen Einträge. Fehlt für eine Größe im Kinder-Kontext ein belegter
 * Normwert (z.B. SpO2/Temperatur Kind), wird der Claim NICHT geflaggt, sondern
 * als Coverage-Lücke geloggt (→ Beschaffungsliste). Nie erfinden, nie raten.
 *
 * Exit-Codes:
 *   0 — keine Out-of-Range-Claims (Skips/Coverage-Lücken sind kein Fehler)
 *   1 — mindestens ein Out-of-Range-Claim (falsch gelehrter Normwert)
 *
 * Usage:
 *   npx tsx scripts/klinik-zahlen-check.ts ce-02
 *   npx tsx scripts/klinik-zahlen-check.ts ce-02 --json
 */
import { readdirSync, readFileSync, statSync, existsSync, writeFileSync } from "fs";
import { join } from "path";

// ─────────────────────────────────────────────────────────────────────────────
// Datenmodell (Range-DB)
// ─────────────────────────────────────────────────────────────────────────────

export type PhysEinheit = "mmHg" | "/min" | "°C" | "%" | "mg/dl" | "mmol/l";
export type Position = "systolisch" | "diastolisch";

export interface ReferenzWert {
  id: string;
  groesse: string;
  physEinheit: PhysEinheit;
  position: Position | null;
  zielgruppe: "erwachsen" | "kind";
  /** Regex-Quelle, die den Kinder-Kontext einer Altersstufe erkennt (null = Erwachsen). */
  altersMarker: string | null;
  aliasse: string[];
  min: number | null;
  max: number | null;
  quelle: { datei: string; zeile: number; zitat: string };
  hinweis: string | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Pure, testbare Kernlogik (von tests/unit/klinik-zahlen-check.test.ts importiert)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Norm-Marker-Stämme. Wort-Anfang via Lookbehind, beliebiger Suffix
 * (Normwert→Normwerte/Normwerten, physiologisch→physiologischer …).
 * Bewusst OHNE bloßes „normal" (zu breit) — nur unzweideutige Norm-Aussagen
 * inkl. der gängigen Komposita (Normaltemperatur, Normalpuls …).
 */
const NORM_MARKER_STEMS = [
  "normwert",
  "normalwert",
  "normbereich",
  "normalbereich",
  "normaltemperatur",
  "normalpuls",
  "normalfrequenz",
  "normalatmung",
  "normaldruck",
  "referenzwert",
  "referenzbereich",
  "sollwert",
  "physiologisch",
  "eupnoe",
];

export const NORM_MARKER_RE = new RegExp(
  "(?<![a-zäöüß])(" + NORM_MARKER_STEMS.join("|") + ")[a-zäöüß]*",
  "gi"
);

/** Pädiatrischer Kontext (entscheidet Erwachsen- vs. Kinder-Einträge). */
export const PED_KONTEXT_RE =
  /(neugeboren|säugling|saeugling|kleinkind|schulkind|jugendlich|frühgeboren|fruehgeboren|pädiatr|paediatr|\bkind(?:er|es|lich)?\b|\bsäuglings?\b)/i;

/** Normalisiert Text für Alias-/Kontext-Vergleich (lowercase, Subscript-Ziffern). */
export function normalizeForMatch(s: string): string {
  return s
    .toLowerCase()
    .replace(/₀/g, "0").replace(/₁/g, "1").replace(/₂/g, "2").replace(/₃/g, "3")
    .replace(/₄/g, "4").replace(/₅/g, "5").replace(/₆/g, "6").replace(/₇/g, "7")
    .replace(/₈/g, "8").replace(/₉/g, "9");
}

/** Deutsche Zahl („36,5" / „37.5" / „120") → number. */
export function parseGermanNumber(s: string): number {
  return parseFloat(s.replace(",", "."));
}

/** Alias im Fenster? Kurze Token (≤4, alnum) mit Wortgrenze, sonst Substring. */
export function aliasInWindow(alias: string, normalizedWindow: string): boolean {
  const a = normalizeForMatch(alias).trim();
  if (a.length === 0) return false;
  if (a.length <= 4 && /^[a-z0-9]+$/.test(a)) {
    return new RegExp(`(?<![a-z0-9])${a}(?![a-z0-9])`, "i").test(normalizedWindow);
  }
  return normalizedWindow.includes(a);
}

export interface ParsedValue {
  unit: PhysEinheit;
  /** Allgemeine Werte (für nicht-mmHg). */
  values: number[];
  /** Nur mmHg: systolische / diastolische Zahlen getrennt. */
  syst?: number[];
  diast?: number[];
}

/**
 * Parst eine Wert+Einheit-Angabe, die am ANFANG von `region` steht (region beginnt
 * an der ersten Ziffer). Liefert null, wenn dort keine bekannte Einheit klebt.
 * Reihenfolge: spezifische/zusammengesetzte Einheiten zuerst.
 */
export function parseValueAtStart(region: string): ParsedValue | null {
  // mmHg-Paar: „120/80 mmHg", „120–129/80–89 mmHg"
  let m = region.match(
    /^(\d{2,3})(?:\s*[–-]\s*(\d{2,3}))?\s*\/\s*(\d{2,3})(?:\s*[–-]\s*(\d{2,3}))?\s*mmHg/i
  );
  if (m) {
    const syst = [m[1], m[2]].filter(Boolean).map((x) => parseGermanNumber(x!));
    const diast = [m[3], m[4]].filter(Boolean).map((x) => parseGermanNumber(x!));
    return { unit: "mmHg", values: [...syst, ...diast], syst, diast };
  }
  // mg/dl
  m = region.match(/^(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?\s*mg\s*\/\s*dl/i);
  if (m) return { unit: "mg/dl", values: pair(m) };
  // mmol/l
  m = region.match(
    /^(\d{1,2}(?:[.,]\d+)?)(?:\s*[–-]\s*(\d{1,2}(?:[.,]\d+)?))?\s*mmol\s*\/\s*l/i
  );
  if (m) return { unit: "mmol/l", values: pair(m) };
  // /min (Puls / Atemfrequenz), evtl. „Atemzüge/min", „Schläge/min"
  m = region.match(
    /^(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?\s*(?:[A-Za-zäöü]+\s*)?\/\s*min/i
  );
  if (m) return { unit: "/min", values: pair(m) };
  // °C
  m = region.match(
    /^(\d{1,2}(?:[.,]\d+)?)(?:\s*(?:[–-]|bis)\s*(\d{1,2}(?:[.,]\d+)?))?\s*°\s*C/i
  );
  if (m) return { unit: "°C", values: pair(m) };
  // %
  m = region.match(/^(\d{1,3})(?:\s*[–-]\s*(\d{1,3}))?\s*%/);
  if (m) return { unit: "%", values: pair(m) };
  return null;
}

function pair(m: RegExpMatchArray): number[] {
  return [m[1], m[2]].filter(Boolean).map((x) => parseGermanNumber(x!));
}

export type SkipReason =
  | "kein-paediatrischer-normwert"
  | "kein-erwachsenen-normwert";

export interface Finding {
  refId: string;
  groesse: string;
  zielgruppe: string;
  unit: PhysEinheit;
  claimedValues: number[];
  badValues: number[];
  min: number | null;
  max: number | null;
  marker: string;
  snippet: string;
  index: number;
  quelle: ReferenzWert["quelle"];
}

export interface SkipNote {
  reason: SkipReason;
  groesse: string;
  unit: PhysEinheit;
  marker: string;
  snippet: string;
  index: number;
}

export interface AnalyzeResult {
  findings: Finding[];
  skips: SkipNote[];
  claimsChecked: number;
}

const MARKER_FORWARD = 34; // max. Distanz Marker→Zahl (eng = präzise)
const ALIAS_BACK = 90; // Rückwärts-Fenster für Alias/Kontext

/**
 * Analysiert einen Text gegen die Range-DB. Reiner String-in/Findings-out —
 * kein IO. `text` ist der Inhalt EINER Datei (Whitelist/Kommentar-Filter passiert
 * außerhalb bzw. zeilenweise über `lineIsExempt`).
 */
export function analyzeText(
  text: string,
  db: ReferenzWert[],
  lineIsExempt?: (lineIndex0: number) => boolean
): AnalyzeResult {
  const findings: Finding[] = [];
  const skips: SkipNote[] = [];
  let claimsChecked = 0;

  // Zeilen-Offsets für Exempt-Prüfung
  const lineStarts: number[] = [0];
  for (let i = 0; i < text.length; i++) if (text[i] === "\n") lineStarts.push(i + 1);
  const lineOf = (idx: number): number => {
    let lo = 0, hi = lineStarts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (lineStarts[mid] <= idx) lo = mid;
      else hi = mid - 1;
    }
    return lo;
  };

  const re = new RegExp(NORM_MARKER_RE.source, "gi");
  let mm: RegExpExecArray | null;
  while ((mm = re.exec(text)) !== null) {
    const markerStart = mm.index;
    const markerText = mm[0];
    const markerEnd = markerStart + markerText.length;

    if (lineIsExempt && lineIsExempt(lineOf(markerStart))) continue;

    const seg = text.slice(markerEnd, markerEnd + MARKER_FORWARD);
    const digitPos = seg.search(/\d/);
    if (digitPos < 0) continue;
    const gap = seg.slice(0, digitPos);
    // Wert muss zur Marker-Klausel gehören: kein Komma/Punkt/Semikolon dazwischen
    // (löst Falldaten-Listen wie „Normbereich), Fieber 38,2 °C" auf).
    if (/[.,;\n]/.test(gap)) continue;

    // Die Zahl beginnt innerhalb von MARKER_FORWARD; die EINHEIT darf aber über das
    // Fenster hinausragen — daher die Region ab der Ziffer aus dem Volltext lesen,
    // sonst wird „/min" / „mmHg" abgeschnitten (s/min → kein Treffer).
    const absDigit = markerEnd + digitPos;
    const region = text.slice(absDigit, absDigit + 26);
    const parsed = parseValueAtStart(region);
    if (!parsed) continue;

    const window = normalizeForMatch(
      text.slice(Math.max(0, markerStart - ALIAS_BACK), markerEnd + MARKER_FORWARD)
    );
    const isPed = PED_KONTEXT_RE.test(window);

    // Kandidaten: gleiche Einheit + Alias der Größe im Fenster (Größe identifiziert)
    const unitAlias = db.filter(
      (e) => e.physEinheit === parsed.unit && e.aliasse.some((a) => aliasInWindow(a, window))
    );
    if (unitAlias.length === 0) continue; // Einheit ohne identifizierte Größe → ignorieren

    const ageMatches = unitAlias.filter((e) =>
      isPed
        ? e.zielgruppe === "kind" &&
          (!e.altersMarker || new RegExp(e.altersMarker, "i").test(window))
        : e.zielgruppe === "erwachsen"
    );

    const snippet = text
      .slice(markerStart, markerEnd + MARKER_FORWARD)
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 90);

    if (ageMatches.length === 0) {
      // Größe identifiziert, aber keine belegte Range für diese Altersgruppe →
      // Coverage-Lücke (Beschaffungsliste), KEIN Fehler.
      skips.push({
        reason: isPed ? "kein-paediatrischer-normwert" : "kein-erwachsenen-normwert",
        groesse: unitAlias[0].groesse,
        unit: parsed.unit,
        marker: markerText,
        snippet,
        index: markerStart,
      });
      continue;
    }

    for (const e of ageMatches) {
      const vals =
        parsed.unit === "mmHg"
          ? e.position === "diastolisch"
            ? parsed.diast ?? []
            : parsed.syst ?? []
          : parsed.values;
      if (vals.length === 0) continue;
      claimsChecked++;
      const bad = vals.filter(
        (v) => (e.min != null && v < e.min) || (e.max != null && v > e.max)
      );
      if (bad.length > 0) {
        findings.push({
          refId: e.id,
          groesse: e.groesse,
          zielgruppe: e.zielgruppe,
          unit: parsed.unit,
          claimedValues: vals,
          badValues: bad,
          min: e.min,
          max: e.max,
          marker: markerText,
          snippet,
          index: markerStart,
          quelle: e.quelle,
        });
      }
    }
  }

  return { findings, skips, claimsChecked };
}

// ─────────────────────────────────────────────────────────────────────────────
// IO-Schicht
// ─────────────────────────────────────────────────────────────────────────────

export function loadReferenzwerte(
  path = join("recherche", "referenzwerte.json")
): ReferenzWert[] {
  const raw = JSON.parse(readFileSync(path, "utf8")) as { werte: ReferenzWert[] };
  return raw.werte;
}

/** Datei wird komplett übersprungen (reine Falldaten). */
function isWhitelistedFile(file: string): boolean {
  return file.endsWith("/patient.ts") || file.endsWith("patient.ts");
}

/** Zeilen-Exempt: Kommentarzeile oder expliziter Ignore-Marker (markierte Falldaten). */
export function buildLineExempt(text: string): (lineIndex0: number) => boolean {
  const lines = text.split("\n");
  return (i: number) => {
    const t = (lines[i] ?? "").trimStart();
    if (t.startsWith("//") || t.startsWith("*") || t.startsWith("/*")) return true;
    if ((lines[i] ?? "").includes("klinik-zahlen:ignore")) return true;
    // Ignore-Marker auch in der Zeile DARÜBER erlaubt
    if (i > 0 && (lines[i - 1] ?? "").includes("klinik-zahlen:ignore")) return true;
    return false;
  };
}

function* walkTsFiles(ceFilter?: string): Generator<string> {
  const contentDir = join(process.cwd(), "content");
  if (!existsSync(contentDir)) return;
  const walk = function* (dir: string): Generator<string> {
    for (const e of readdirSync(dir)) {
      const p = join(dir, e);
      let st;
      try { st = statSync(p); } catch { continue; }
      if (st.isDirectory()) yield* walk(p);
      else if (e.endsWith(".ts") && !e.endsWith(".d.ts")) yield p;
    }
  };
  for (const ce of readdirSync(contentDir)) {
    if (!ce.startsWith("ce-")) continue;
    if (ceFilter && ce !== ceFilter) continue;
    const ceDir = join(contentDir, ce);
    if (!statSync(ceDir).isDirectory()) continue;
    yield* walk(ceDir);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

interface FileResult {
  file: string;
  findings: Finding[];
  skips: SkipNote[];
}

function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes("--json");
  const ceFilter = args.find((a) => /^ce-\d+/.test(a));

  let db: ReferenzWert[];
  try {
    db = loadReferenzwerte();
  } catch (e) {
    console.error("❌ referenzwerte.json nicht ladbar:", (e as Error).message);
    process.exit(2);
    return;
  }

  const fileResults: FileResult[] = [];
  let totalChecked = 0;
  for (const file of walkTsFiles(ceFilter)) {
    if (isWhitelistedFile(file)) continue;
    const text = readFileSync(file, "utf8");
    const { findings, skips, claimsChecked } = analyzeText(text, db, buildLineExempt(text));
    totalChecked += claimsChecked;
    if (findings.length > 0 || skips.length > 0) {
      fileResults.push({ file: file.replace(process.cwd() + "/", ""), findings, skips });
    }
  }

  const allFindings = fileResults.flatMap((r) => r.findings);
  const allSkips = fileResults.flatMap((r) => r.skips);

  if (isJson) {
    console.log(JSON.stringify({ ce: ceFilter ?? "alle", totalChecked, fileResults }, null, 2));
    process.exit(allFindings.length > 0 ? 1 : 0);
    return;
  }

  console.log("═".repeat(72));
  console.log(`KLINIK-ZAHLEN-CHECK (W1)${ceFilter ? ` — ${ceFilter}` : " — alle CEs"}`);
  console.log("═".repeat(72));
  console.log(`Range-DB: ${db.length} belegte Referenzwerte · Autoritäts-Claims geprüft: ${totalChecked}`);
  console.log(`Out-of-Range: ${allFindings.length} · Coverage-Lücken (Skips): ${allSkips.length}\n`);

  if (allFindings.length === 0) {
    console.log("✅ Keine falsch gelehrten Normwerte gefunden.");
  } else {
    for (const r of fileResults) {
      if (r.findings.length === 0) continue;
      console.log(`❌ ${r.file}`);
      for (const f of r.findings) {
        const range = `${f.min ?? "−∞"}…${f.max ?? "+∞"} ${f.unit}`;
        console.log(
          `   ${f.groesse} (${f.zielgruppe}): gelehrt ${f.badValues.join("/")} ${f.unit}, ` +
            `belegter Normbereich ${range}`
        );
        console.log(`     „${f.snippet}"`);
        console.log(`     Beleg: ${f.quelle.datei}:${f.quelle.zeile}`);
      }
      console.log();
    }
  }

  if (allSkips.length > 0) {
    console.log(`\n${"─".repeat(72)}`);
    console.log("ℹ️  Coverage-Lücken (kein Fehler — Normwert für diese Gruppe nicht belegt,");
    console.log("    siehe recherche/BESCHAFFUNGSLISTE-REFERENZWERTE.md):");
    const seen = new Set<string>();
    for (const s of allSkips) {
      const key = `${s.reason}:${s.groesse}`;
      if (seen.has(key)) continue;
      seen.add(key);
      console.log(`   • ${s.groesse} — ${s.reason}`);
    }
  }

  // Report-Dateien (best effort)
  try {
    if (ceFilter) {
      const outDir = join("content", ceFilter);
      if (existsSync(outDir)) {
        writeFileSync(
          join(outDir, "klinik-zahlen-report.json"),
          JSON.stringify({ ce: ceFilter, totalChecked, fileResults }, null, 2)
        );
      }
    }
  } catch {
    /* Report optional, nie blockierend */
  }

  console.log(`\n${"═".repeat(72)}`);
  const fail = allFindings.length > 0;
  console.log(fail ? "❌ FAIL — falsch gelehrte Normwerte." : "✅ PASS — keine falsch gelehrten Normwerte.");
  process.exit(fail ? 1 : 0);
}

const isCLI = process.argv[1]?.includes("klinik-zahlen-check");
if (isCLI) main();
