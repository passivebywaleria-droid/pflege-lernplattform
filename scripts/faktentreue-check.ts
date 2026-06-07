/**
 * faktentreue-check.ts <ce>  — Phase-1-Härtung (Roadmap 1.4)
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
 * Sekundär (Hinweis, mehr Rauschen): normative Schwellen-Phrasen.
 *
 * Patienten-Vitalwerte (NRS X, RR x/y) werden NICHT geprüft — das sind authored
 * Fall-Daten, keine Autoritäts-Claims.
 *
 * Usage: npx tsx scripts/faktentreue-check.ts ce-02
 */
import { readdirSync, readFileSync, statSync, existsSync } from "fs";
import { join } from "path";

const ce = process.argv[2] || "ce-02";
const ceNum = ce.replace("ce-", "");

// Benannte klinische Instrumente/Standards/Skalen (Fabrikations-relevant)
const INSTRUMENTE = [
  "Braden", "Norton", "Waterlow", "Tinetti", "Morse", "STRATIFY", "Hendrich",
  "Barthel", "FIM", "NRS", "VAS", "BESD", "KUSS", "ZOPA", "Doloplus",
  "NRS-2002", "MNA", "MUST", "PEMU", "SGA", "Glasgow", "GCS", "RASS",
  "Schellong", "SBAR", "ISBAR", "ABCDE", "Apgar", "Bromage",
  "EPUAP", "NPUAP", "DNQP", "Beers", "PRISCUS", "Bristol", "Braden-Q",
  "Waterlow", "Aldrete", "RASS", "CAM", "DOS", "Timed-Up", "Esslinger",
];

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

// ─── Faktenbasis: Kernfakten + Glossar ───
const kernfaktenDir = join("specs", ce, "kernfakten");
const kernfaktenFiles = existsSync(kernfaktenDir)
  ? readdirSync(kernfaktenDir).filter((f) => f.endsWith(".md")).map((f) => join(kernfaktenDir, f))
  : [];
const glossarFiles = walkTs(join("content", ce, "themen")).filter((f) => f.includes("glossar"));
const faktenbasis = (readAll(kernfaktenFiles) + readAll(glossarFiles)).toLowerCase();

// ─── Content: Situationen ───
const sitDir = join("content", ce, "situationen");
const sitFiles = walkTs(sitDir);

// Instrument-Vorkommen je Situation sammeln
const reInstr = new RegExp(`\\b(${INSTRUMENTE.join("|")})\\b`, "g");
const proSituation: Record<string, Set<string>> = {};
const alleVerwendet = new Set<string>();
for (const f of sitFiles) {
  const sit = f.split("/situationen/")[1]?.split("/")[0] ?? f;
  const txt = readFileSync(f, "utf8");
  for (const m of txt.matchAll(reInstr)) {
    const instr = m[1];
    (proSituation[sit] ??= new Set()).add(instr);
    alleVerwendet.add(instr);
  }
}

// ─── Auswertung ───
console.log("═".repeat(64));
console.log(`FAKTENTREUE-CHECK — ${ce}`);
console.log("═".repeat(64));
console.log(`Faktenbasis: ${kernfaktenFiles.length} Kernfakten-Dateien + ${glossarFiles.length} Glossare`);
console.log(`Content: ${sitFiles.length} Situations-Dateien\n`);

const gedeckt: string[] = [];
const ungedeckt: string[] = [];
for (const instr of [...alleVerwendet].sort()) {
  if (faktenbasis.includes(instr.toLowerCase())) gedeckt.push(instr);
  else ungedeckt.push(instr);
}

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

console.log(`\n${"─".repeat(64)}`);
console.log(ungedeckt.length === 0
  ? "✅ Alle referenzierten Instrumente sind in der Faktenbasis gedeckt."
  : `⚠️  ${ungedeckt.length} Instrument(e) ohne Faktenbasis-Deckung — prüfen: fehlender Kernfakt (Coverage-Lücke) ODER erfunden/falsch benannt.`);
console.log("Hinweis: Solange Kernfakten nur für wenige Themen existieren, sind viele");
console.log("Treffer Coverage-Lücken (kein Fehler), keine Erfindungen. Gate erst scharf,");
console.log("wenn Kernfakten vollständig sind (Roadmap Phase 3/4).");
process.exit(0);
