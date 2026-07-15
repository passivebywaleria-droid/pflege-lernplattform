/**
 * B1-Sprachcheck für CE-06-Wissens-Tabs (deterministischer Pre-Filter).
 *
 * Prüft die B1-Prosa-Felder (storyAufhaengerB1, kerntextB1, faustregelB1,
 * spektrum[].kurzbeschreibungB1, karteikarte.*B1) gegen das Profil in
 * specs/B1-SPRACHPROFIL.md:
 *   - Satzlänge (Warnung > 20 Wörter, Info bei Median > 11)
 *   - verbotene Konnektoren (zu hoch: insofern, zumal, hinsichtlich …)
 *   - Futur-Marker (werden + Infinitiv → Präsens+Zeitangabe)
 *   - Konjunktiv-I-Marker der indirekten Rede (sei, habe, käme …)
 *   - latinisierte Fachterme, die unerklärt tragend im Text stehen
 *
 * Der Check ist ein PRE-FILTER (wie pflege-anti-pattern-check): er ersetzt nicht
 * die menschliche Dozentin, fängt aber die groben Register-Verstöße mechanisch.
 * Fehlende B1-Felder werden gemeldet (Coverage), sind aber kein Fehler.
 *
 * Usage: npx tsx scripts/b1-sprachcheck-ce06.ts <situationId> | --all
 */
import { CE06_SITUATIONEN } from "../content/ce-06/situationen";

const MAX_WORDS = 20; // harte Obergrenze pro Satz (Profil §1)
const MEDIAN_WARN = 11; // Median-Warnschwelle

// Konnektoren, die über B1 liegen (Profil §1)
const VERBOTEN_KONNEKTOREN = [
  "insofern", "zumal", "wenngleich", "hinsichtlich", "bezüglich",
  "sofern", "mithin", "dahingehend", "indes", "obgleich", "gleichwohl",
];

// Konjunktiv-I-Marker der indirekten Rede (Profil §2 — schärfster B2/C1-Marker).
// Nur als eigenständiges Wort; „sei" u.a. sind eindeutig, „habe/gebe" via Regex mit Wortgrenze.
const KONJUNKTIV1 = ["sei", "seien", "habe", "haben es", "gebe", "käme", "träte", "würde es sich"];

// Latinisierte Fachterme, die im Fließtext B1-verboten sind, wenn NICHT erklärt (Profil §4).
// Erklärt = im selben Satz Klammer/Gedankenstrich mit Alltagswort. Hier nur grobe Präsenz-Warnung.
const LATIN_TERME = [
  "Pyrexie", "Vertigo", "Synkope", "Tussis", "Hämoptoe", "Sputum",
  "Pruritus", "Exanthem", "Nausea", "Emesis", "Tachykardie", "Bradykardie",
  "Dyspnoe", "Apnoe", "Diarrhö", "Obstipation", "Adipositas", "Kachexie",
  "agonale Atmung", "Zyanose",
];

function saetze(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .replace(/(\d)\.\s/g, "$1 ") // "30. " nicht als Satzende werten
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.split(" ").length >= 3);
}

function wortzahl(s: string): number {
  return s.split(" ").filter(Boolean).length;
}

interface Finding {
  step: string;
  feld: string;
  schwere: "WARN" | "INFO";
  text: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function b1FelderOf(iw: any): { feld: string; text: string }[] {
  const out: { feld: string; text: string }[] = [];
  const push = (feld: string, t?: string) => t && out.push({ feld, text: t });
  push("storyAufhaengerB1", iw.storyAufhaengerB1);
  push("kerntextB1", iw.kerntextB1);
  push("faustregelB1", iw.faustregelB1);
  push("sonstBoxB1", iw.sonstBoxB1);
  (iw.spektrum ?? []).forEach((x: { kurzbeschreibungB1?: string }, i: number) =>
    push(`spektrum[${i}].kurzbeschreibungB1`, x.kurzbeschreibungB1)
  );
  push("karteikarte.vorderseiteB1", iw.karteikarte?.vorderseiteB1);
  push("karteikarte.rueckseiteB1", iw.karteikarte?.rueckseiteB1);
  return out;
}

function pruefeText(step: string, feld: string, text: string): Finding[] {
  const f: Finding[] = [];
  const ss = saetze(text);
  // Satzlänge
  for (const s of ss) {
    const w = wortzahl(s);
    if (w > MAX_WORDS) {
      f.push({ step, feld, schwere: "WARN", text: `Satz ${w} W (> ${MAX_WORDS}): "${s.slice(0, 70)}…"` });
    }
  }
  const laengen = ss.map(wortzahl).sort((a, b) => a - b);
  const median = laengen.length ? laengen[Math.floor(laengen.length / 2)] : 0;
  if (median > MEDIAN_WARN) {
    f.push({ step, feld, schwere: "INFO", text: `Median-Satzlänge ${median} W (> ${MEDIAN_WARN})` });
  }
  const low = " " + text.toLowerCase() + " ";
  for (const k of VERBOTEN_KONNEKTOREN) {
    if (low.includes(` ${k} `)) f.push({ step, feld, schwere: "WARN", text: `verbotener Konnektor: "${k}"` });
  }
  // Futur: "wird/werden … <Infinitiv am Satzende>" — grobe Heuristik
  if (/\bwerden?\b[^.!?]*\b\w+en\b[.!?]/.test(text) && /\b(wird|werden)\b/.test(text)) {
    // nur flaggen, wenn nicht offensichtlich Passiv ("wird gedrückt/gegeben/gelegt" = Partizip, kein Futur)
    const passivPartizip = /\b(wird|werden)\b\s+\w*(gt|en|et|ht)\b/.test(text);
    if (!passivPartizip)
      f.push({ step, feld, schwere: "INFO", text: `mögliches Futur (Profil: Präsens+Zeitangabe) prüfen` });
  }
  for (const k of KONJUNKTIV1) {
    if (new RegExp(`\\b${k}\\b`).test(low)) f.push({ step, feld, schwere: "INFO", text: `mögl. Konjunktiv I: "${k}" prüfen` });
  }
  for (const t of LATIN_TERME) {
    if (text.includes(t)) {
      // erklärt, wenn im Satz eine Klammer/Gedankenstrich-Auflösung folgt
      const erklaert = new RegExp(`${t}[^.!?]*[(–—-][^.!?]*[)]?`).test(text);
      f.push({
        step, feld, schwere: erklaert ? "INFO" : "WARN",
        text: `latin. Fachterm "${t}" ${erklaert ? "(scheinbar erklärt — prüfen)" : "UNERKLÄRT im Text"}`,
      });
    }
  }
  return f;
}

function checkSituation(situationId: string): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sit = (CE06_SITUATIONEN as any[]).find((s) => s.situationId === situationId);
  if (!sit) {
    console.log(`  ❌ Situation nicht gefunden: ${situationId}`);
    return 1;
  }
  const findings: Finding[] = [];
  let tabs = 0;
  let mitB1 = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const phase of sit.phasen as any[]) {
    for (const step of [...(phase.kernSteps ?? []), ...(phase.optionaleSteps ?? [])]) {
      if (step.stepType !== "inlineWissen" || !step.inlineWissen) continue;
      tabs++;
      const felder = b1FelderOf(step.inlineWissen);
      if (felder.some((x) => x.feld === "kerntextB1")) mitB1++;
      for (const { feld, text } of felder) findings.push(...pruefeText(step.stepId, feld, text));
    }
  }
  const warns = findings.filter((f) => f.schwere === "WARN");
  const infos = findings.filter((f) => f.schwere === "INFO");
  for (const f of warns) console.log(`  ⚠️  [${f.step} · ${f.feld}] ${f.text}`);
  for (const f of infos) console.log(`  ·   [${f.step} · ${f.feld}] ${f.text}`);
  const cov = tabs ? `${mitB1}/${tabs} Tabs mit B1` : "keine Tabs";
  const status = warns.length === 0 ? "✅" : "⚠️";
  console.log(`  ${situationId}: ${cov} · ${warns.length} WARN · ${infos.length} INFO → ${status}`);
  return warns.length === 0 ? 0 : 1;
}

const arg = process.argv[2];
console.log("════════════════════════════════════════════════════════════════");
console.log("  B1-SPRACHCHECK CE-06 (Pre-Filter, Profil specs/B1-SPRACHPROFIL.md)");
console.log("════════════════════════════════════════════════════════════════");
let exit = 0;
if (arg === "--all") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const s of CE06_SITUATIONEN as any[]) exit |= checkSituation(s.situationId);
} else if (arg) {
  exit = checkSituation(arg);
} else {
  console.log("  Usage: npx tsx scripts/b1-sprachcheck-ce06.ts <situationId> | --all");
  process.exit(2);
}
process.exit(exit);
