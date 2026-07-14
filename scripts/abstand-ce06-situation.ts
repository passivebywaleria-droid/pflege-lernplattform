/**
 * Abstandstest für CE-06-Situationen (Wissens-Tabs vs. Quell-Korpus).
 *
 * Prüft die PROSA der inlineWissen-Steps einer Situation (storyAufhaenger, kerntext, faustregel,
 * spektrum.kurzbeschreibung, karteikarte, wiederbegegnung.vertiefung) auf 5-Wort-N-Gramm-Überlappung
 * mit den urheberrechtlich geschützten Volltext-Quellen. Ziel: 0 Treffer (paraphrasiert).
 *
 * Der LE-basierte scripts/check-artikel-abstand.ts liest artikel.ts (nur I-Care/LE) und passt NICHT
 * auf Situationen — dieses Skript schließt die Lücke (Memory: „Abstandstest-Script erweitern").
 *
 * Ausnahme: wörtlicher Gesetzestext (§-Zitate, amtliches Werk, gemeinfrei § 5 UrhG) ist ein legitimer
 * Treffer und wird NICHT als Verstoß gewertet — solche Treffer manuell prüfen (Skript meldet sie nur).
 *
 * Usage: npx tsx scripts/abstand-ce06-situation.ts <situationId>
 *        npx tsx scripts/abstand-ce06-situation.ts --all
 */
import * as fs from "fs";
import * as path from "path";
import { CE06_SITUATIONEN } from "../content/ce-06/situationen";

const MIN_NGRAM = 5;

// Urheberrechtlich geschützte Quell-Korpora (paraphrasieren!). Gesetzestexte bewusst NICHT hier —
// die dürfen wörtlich sein (gemeinfrei); ihre Treffer wären ohnehin nur in leitlinien-volltext.
const QUELLEN = [
  "recherche/pflege-heute-volltext/pflege-heute.txt",
  "recherche/icare-krankheitslehre-volltext/icare-krankheitslehre.txt",
  "recherche/icare-pflege-volltext/icare-pflege.txt",
];

function norm(t: string): string {
  return t
    .toLowerCase()
    .replace(/[„""»«‚']/g, " ")
    .replace(/[^\wäöüß\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ngrams(t: string, n: number): string[] {
  const w = norm(t).split(" ").filter(Boolean);
  const out: string[] = [];
  for (let i = 0; i <= w.length - n; i++) out.push(w.slice(i, i + n).join(" "));
  return out;
}

const root = path.resolve(__dirname, "..");

let srcSet: Set<string> | null = null;
function loadQuellen(): Set<string> {
  if (srcSet) return srcSet;
  srcSet = new Set<string>();
  for (const rel of QUELLEN) {
    const p = path.join(root, rel);
    if (!fs.existsSync(p)) continue;
    for (const g of ngrams(fs.readFileSync(p, "utf-8"), MIN_NGRAM)) srcSet.add(g);
  }
  return srcSet;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function prosaOf(iw: any): string {
  return [
    iw.storyAufhaenger,
    iw.kerntext,
    iw.faustregel,
    iw.sonstBox,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(iw.spektrum ?? []).map((x: any) => x.kurzbeschreibung),
    iw.karteikarte?.vorderseite,
    iw.karteikarte?.rueckseite,
    iw.wiederbegegnung?.vertiefung,
  ]
    .filter(Boolean)
    .join("\n");
}

function checkSituation(situationId: string): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sit = (CE06_SITUATIONEN as any[]).find((s) => s.situationId === situationId);
  if (!sit) {
    console.log(`  ❌ Situation nicht gefunden: ${situationId}`);
    return 1;
  }
  const src = loadQuellen();
  let hits = 0;
  let total = 0;
  let tabs = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const ph of sit.phasen as any[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (const step of ph.kernSteps as any[]) {
      if (step.stepType !== "inlineWissen" || !step.inlineWissen) continue;
      tabs++;
      for (const g of ngrams(prosaOf(step.inlineWissen), MIN_NGRAM)) {
        total++;
        if (src.has(g)) {
          hits++;
          console.log(`  TREFFER [${step.stepId}]: "${g}"`);
        }
      }
    }
  }
  const status = hits === 0 ? "✅ ABSTAND 0" : `⚠️  ${hits} Treffer — prüfen (Gesetzestext = ok, sonst paraphrasieren)`;
  console.log(`  ${situationId}: ${tabs} Tabs · ${total} 5-Gramme · ${hits} Treffer → ${status}`);
  return hits === 0 ? 0 : 2;
}

const arg = process.argv[2];
if (!arg) {
  console.log("Usage: npx tsx scripts/abstand-ce06-situation.ts <situationId> | --all");
  process.exit(1);
}

console.log(`\n${"═".repeat(64)}\n  ABSTANDSTEST CE-06 (Wissens-Tabs vs. Korpus, ${MIN_NGRAM}-Gramm)\n${"═".repeat(64)}`);

let worst = 0;
if (arg === "--all") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const s of CE06_SITUATIONEN as any[]) worst = Math.max(worst, checkSituation(s.situationId));
} else {
  worst = checkSituation(arg);
}
// exit 2 = Treffer (könnten Gesetzestext sein → manuell prüfen), 0 = sauber
process.exit(worst === 1 ? 1 : 0);
