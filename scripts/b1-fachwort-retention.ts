/**
 * B1-Fachwort-Retentions-Check (CE-06).
 *
 * Prüft: Steht ein Pflegefachbegriff in der C1-Prosa eines Wissens-Tabs, muss er
 * AUCH im B1-Text vorkommen (erklärt, nicht ersetzt). Die Schüler müssen die
 * Fachsprache lernen — B1 vereinfacht die SPRACHE, streicht aber NICHT die
 * fachlich zwingenden Begriffe (Dekubitus, intravenös, Apoplex, Reanimation …).
 *
 * Signal: Begriff in C1-Prosa vorhanden, in B1-Prosa des GLEICHEN Tabs fehlend
 * → WARN (potenziell weg-vereinfacht). Muss dann geprüft/nachgetragen werden.
 *
 * Vokabular: CE06_GLOSSAR (102 Must-know-Begriffe) + kuratierte Kernliste.
 * Der Check ist ein Pre-Filter; der semantische Review (anderes Modell) bleibt Instanz.
 *
 * Usage: npx tsx scripts/b1-fachwort-retention.ts <situationId> | --all
 */
import { CE06_SITUATIONEN } from "../content/ce-06/situationen";
import { CE06_GLOSSAR } from "../content/ce-06/glossar";

// Zusätzliche essenzielle Pflegefachwörter, die NIE weg-vereinfacht werden dürfen
// (auch wenn nicht im CE-06-Glossar). Erweiterbar.
const KERN_FACHWOERTER = [
  "intravenös", "i.v.", "intramuskulär", "i.m.", "subkutan", "s.c.",
  "Reanimation", "reanimieren", "Defibrillation", "Defibrillator", "AED",
  "Infusion", "Injektion", "Katheter", "Punktion", "Elektrode", "Sauerstoff",
  "Monitoring", "Vitalzeichen", "Diagnose", "Aspiration", "Zyanose", "Hämatom",
  "Fraktur", "Indikation", "Kontraindikation", "Sedierung", "Analgesie",
  "Anamnese", "Palliativ", "Blutdruck", "Puls", "Atmung", "Bewusstsein",
  "Nitroglycerin", "Nitrat", "Adrenalin", "Perfusor", "Stoma",
];

// Stoppwörter: Kürzel/Kerne, die mit Alltagswörtern kollidieren → nicht auto-flaggen.
const STOP = new Set(["als", "kit", "kur"]);

// Begriff → matchbarer Kern (Klammer weg, lowercase). Multiword bleibt.
function kern(begriff: string): string {
  return begriff.replace(/\(.*?\)/g, "").trim().toLowerCase();
}

// Vokabular aufbauen (dedupliziert)
const VOCAB: string[] = Array.from(
  new Set([...CE06_GLOSSAR.map((g: { begriff: string }) => g.begriff), ...KERN_FACHWOERTER].map(kern))
).filter((k) => k.length >= 3 && !STOP.has(k));

function norm(t: string): string {
  return " " + t.toLowerCase().replace(/\s+/g, " ") + " ";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function c1Prosa(iw: any): string {
  return [
    iw.storyAufhaenger, iw.kerntext, iw.faustregel, iw.sonstBox,
    ...(iw.spektrum ?? []).map((x: { kurzbeschreibung?: string }) => x.kurzbeschreibung),
    iw.karteikarte?.vorderseite, iw.karteikarte?.rueckseite,
  ].filter(Boolean).join("  ");
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function b1Prosa(iw: any): string {
  return [
    iw.storyAufhaengerB1, iw.kerntextB1, iw.faustregelB1, iw.sonstBoxB1,
    ...(iw.spektrum ?? []).map((x: { kurzbeschreibungB1?: string }) => x.kurzbeschreibungB1),
    iw.karteikarte?.vorderseiteB1, iw.karteikarte?.rueckseiteB1,
  ].filter(Boolean).join("  ");
}

// ── Nicht-Tab-Steps (MC/Branching/TrueFalse/Dialog/Pflegewagen) ──
// KERN-C1 (retentionspflichtig): Fragestellung + RICHTIGE Option + Feedback der richtigen
// Branching-Option + TrueFalse-Erklärungen + Pflegewagen-Begründung. Distraktor-Erklärungen
// falscher Optionen sind NICHT retentionspflichtig (Karikatur-Fehler dürfen Fachwort auslassen).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function coreC1Step(step: any): string {
  const q = step.question ?? {};
  const parts: (string | undefined)[] = [step.contentC1?.title, step.contentC1?.body, q.fragetext, q.begruendung];
  for (const o of q.optionen ?? []) if (o.isCorrect) parts.push(o.explanation);
  for (const o of q.branchingOptions ?? []) if (o.isCorrect) parts.push(o.feedback);
  for (const c of q.trueFalseCards ?? []) parts.push(c.explanation);
  // Pflegewagen: Item-Erklärungen lehren (auch bei Distraktoren) → retentionspflichtig.
  // Labels sind kurze Tap-Targets → NICHT retentionspflichtig (Kürze erlaubt).
  for (const it of q.pflegewagen?.items ?? []) parts.push(it.erklaerung);
  return parts.filter(Boolean).join("  ");
}
// Aggregierte B1-Prosa des Steps (alle B1-Felder — dort darf der Begriff überall wieder auftauchen).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function b1Step(step: any): string {
  const q = step.question ?? {};
  const parts: (string | undefined)[] = [step.contentB1?.title, step.contentB1?.body, q.begruendungB1];
  for (const o of q.optionen ?? []) parts.push(o.explanationB1);
  for (const o of q.branchingOptions ?? []) parts.push(o.feedbackB1);
  for (const c of q.trueFalseCards ?? []) parts.push(c.explanationB1);
  const pw = q.pflegewagen;
  if (pw) {
    parts.push(pw.fragetextB1);
    for (const it of pw.items ?? []) { parts.push(it.labelB1); parts.push(it.beschreibungB1); parts.push(it.erklaerungB1); }
    for (const z of pw.zonen ?? []) { parts.push(z.labelB1); parts.push(z.beschreibungB1); }
  }
  return parts.filter(Boolean).join("  ");
}

// Substring-Match auf Wortstamm: Term als Ganzes ODER (bei Einwort) als Präfix-Stamm.
function contains(prose: string, term: string): boolean {
  const p = norm(prose);
  if (p.includes(term)) return true;
  // Einwort-Stamm: erlaube Flexion (Term + Endung), z.B. "fraktur" → "frakturen"
  if (!term.includes(" ") && term.length >= 5) {
    return new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\w{0,3}\\b`).test(p);
  }
  return false;
}

function checkSituation(situationId: string): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sit = (CE06_SITUATIONEN as any[]).find((s) => s.situationId === situationId);
  if (!sit) { console.log(`  ❌ nicht gefunden: ${situationId}`); return 1; }
  const includeSteps = process.argv.includes("--steps") || process.argv.includes("--all-fields");
  let tabs = 0;
  let steps = 0;
  const drops: { step: string; term: string; kind: "Tab" | "Step" }[] = [];
  for (const phase of sit.phasen ?? []) {
    for (const step of [...(phase.kernSteps ?? []), ...(phase.optionaleSteps ?? [])]) {
      if (step.stepType === "inlineWissen" && step.inlineWissen) {
        tabs++;
        const c1 = c1Prosa(step.inlineWissen);
        const b1 = b1Prosa(step.inlineWissen);
        if (!b1) continue;
        for (const term of VOCAB) {
          if (contains(c1, term) && !contains(b1, term)) drops.push({ step: step.stepId, term, kind: "Tab" });
        }
      } else if (includeSteps) {
        const c1 = coreC1Step(step);
        const b1 = b1Step(step);
        if (!c1 || !b1) continue; // kein B1 → Coverage-Check separat
        steps++;
        for (const term of VOCAB) {
          if (contains(c1, term) && !contains(b1, term)) drops.push({ step: step.stepId, term, kind: "Step" });
        }
      }
    }
  }
  for (const d of drops) console.log(`  ⚠️  [${d.kind} ${d.step}] Fachwort im C1, FEHLT im B1: "${d.term}"`);
  const status = drops.length === 0 ? "✅" : "⚠️";
  const scope = includeSteps ? `${tabs} Tabs + ${steps} Steps` : `${tabs} Tabs`;
  console.log(`  ${situationId}: ${scope} · ${drops.length} fehlende Fachwörter → ${status}`);
  return drops.length === 0 ? 0 : 1;
}

const arg = process.argv[2];
console.log("════════════════════════════════════════════════════════════════");
console.log("  B1-FACHWORT-RETENTION CE-06 (Fachwörter im C1 dürfen im B1 nicht fehlen)");
console.log(`  Vokabular: ${VOCAB.length} Begriffe (Glossar + Kernliste)`);
console.log("════════════════════════════════════════════════════════════════");
let exit = 0;
if (arg === "--all") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const s of CE06_SITUATIONEN as any[]) exit |= checkSituation(s.situationId);
} else if (arg) {
  exit = checkSituation(arg);
} else {
  console.log("  Usage: npx tsx scripts/b1-fachwort-retention.ts <situationId> | --all");
  process.exit(2);
}
process.exit(exit);
