/**
 * gold-standard-test.ts — Phase 2.1: misst die Treffsicherheit des Grounding-Gates.
 *
 * Kuratiertes Testset: echte Primärquellen-Zitate (sollen MATCHEN) + manipulierte
 * oder erfundene Zitate (sollen ABGELEHNT werden). Misst True-Positive-Rate
 * (echte erkannt) und True-Negative-Rate (Fälschungen abgelehnt) → Validator-
 * Baseline. „Pflegefachlicher" wird damit zur Zahl statt Meinung.
 *
 * Usage: npx tsx scripts/gold-standard-test.ts
 */
import { verifyZitat } from "./zitat-verifizierer";

interface Case {
  zitat: string;
  quelle: string;
  erwartet: "match" | "reject";
  art: string; // Beschreibung der Fälschungsart bei reject
}

const DNQP = "dnqp-standards-index/sturzprophylaxe.txt";
const PH = "pflege-heute-volltext/pflege-heute.txt";

const CASES: Case[] = [
  // ── ECHT (sollen MATCHEN) ──
  { zitat: "Ein Sturz ist ein Ereignis, bei dem der oder die Betroffene unbeabsichtigt auf dem Boden oder auf einer anderen tieferen Ebene aufkommt", quelle: DNQP, erwartet: "match", art: "echt" },
  { zitat: "Die Pflegefachkraft dokumentiert und analysiert jeden Sturz", quelle: DNQP, erwartet: "match", art: "echt" },
  { zitat: "das multifaktorielle Geschehen, das zu einem Sturz führt und entsprechend komplexer Interventionen bedarf", quelle: DNQP, erwartet: "match", art: "echt" },
  { zitat: "Die im Alter häufige Polypharmazie erhöht das Sturzrisiko durch wenig kalkulierbare Wechselwirkungen der Arzneimittel", quelle: PH, erwartet: "match", art: "echt" },
  { zitat: "Dadurch entsteht ein Teufelskreis, weil die Bewegungseinschränkung und der damit verbundene Trainingsmangel das Sturzrisiko weiter fördern", quelle: PH, erwartet: "match", art: "echt" },
  { zitat: "freiheitsentziehende Maßnahmen benötigen grundsätzlich einen richterlichen Beschluss durch das Betreuungsgericht", quelle: PH, erwartet: "match", art: "echt" },
  { zitat: "Sturzprävention ist eine multiprofessionelle Aufgabe", quelle: PH, erwartet: "match", art: "echt" },
  { zitat: "muss das Verletzungsrisiko bei einem Sturz betrachtet und reduziert werden", quelle: PH, erwartet: "match", art: "echt" },

  // ── FÄLSCHUNG (sollen ABGELEHNT werden) ──
  { zitat: "Bettgitter beidseitig sind die wirksamste Sturzprophylaxe bei Demenz", quelle: DNQP, erwartet: "reject", art: "frei erfunden (fachlich falsch)" },
  { zitat: "freiheitsentziehende Maßnahmen benötigen grundsätzlich einen ärztlichen Beschluss durch das Krankenhaus", quelle: PH, erwartet: "reject", art: "Wort getauscht (richterlich→ärztlich) — verfälscht Bedeutung" },
  { zitat: "Die im Alter häufige Polypharmazie senkt das Sturzrisiko durch kalkulierbare Wechselwirkungen", quelle: PH, erwartet: "reject", art: "Aussage umgekehrt (erhöht→senkt)" },
  { zitat: "Ein Sturz ist ein Ereignis, bei dem der Betroffene absichtlich auf dem Boden landet", quelle: DNQP, erwartet: "reject", art: "Bedeutung verdreht (unbeabsichtigt→absichtlich)" },
  { zitat: "Die Pflegefachkraft dokumentiert jeden Sturz innerhalb von 24 Stunden schriftlich", quelle: DNQP, erwartet: "reject", art: "erfundene Frist hinzugefügt" },
  { zitat: "Kraft- und Balancetraining muss mindestens 20 Wochen lang dreimal wöchentlich erfolgen", quelle: PH, erwartet: "reject", art: "erfundene Zahlen" },
  { zitat: "Sturzprävention ist allein Aufgabe der Pflege", quelle: PH, erwartet: "reject", art: "Aussage verfälscht (multiprofessionell→allein Pflege)" },
  { zitat: "Hüftprotektoren verhindern nachweislich alle Stürze bei Hochrisikopatienten", quelle: PH, erwartet: "reject", art: "Überzogene Behauptung (verhindern Frakturen, nicht Stürze)" },
];

let tp = 0, tn = 0, fp = 0, fn = 0;
const fehler: string[] = [];
for (const c of CASES) {
  const ok = verifyZitat({ werk: "", quelldatei: c.quelle, woertlichesZitat: c.zitat }).ok;
  const korrekt = (c.erwartet === "match") === ok;
  if (c.erwartet === "match") { ok ? tp++ : fn++; }
  else { ok ? fp++ : tn++; }
  if (!korrekt) fehler.push(`${c.erwartet === "match" ? "FN (echtes nicht erkannt)" : "FP (Fälschung durchgelassen)"}: "${c.zitat.slice(0, 55)}…" [${c.art}]`);
}

const echt = CASES.filter((c) => c.erwartet === "match").length;
const fake = CASES.filter((c) => c.erwartet === "reject").length;
console.log("═".repeat(60));
console.log("GOLD-STANDARD-TEST — Grounding-Gate (Zitat-Verifizierer)");
console.log("═".repeat(60));
console.log(`Testfälle: ${CASES.length}  (${echt} echt, ${fake} Fälschungen)\n`);
console.log(`  True-Positive  (echt → match):    ${tp}/${echt}  = ${((tp / echt) * 100).toFixed(0)}%`);
console.log(`  True-Negative  (Fälschung → reject): ${tn}/${fake}  = ${((tn / fake) * 100).toFixed(0)}%`);
console.log(`  False-Positive (Fälschung durchgelassen): ${fp}`);
console.log(`  False-Negative (echtes abgelehnt):        ${fn}`);
if (fehler.length) { console.log(`\nFehler:`); fehler.forEach((f) => console.log(`  ❌ ${f}`)); }
console.log(`\n${fp === 0 && fn === 0 ? "✅ Perfekte Trennung — Gate fängt alle Fälschungen, lässt echte durch." : `⚠️  ${fp + fn} Fehlklassifikation(en) — Gate justieren.`}`);
process.exit(fp === 0 && fn === 0 ? 0 : 1);
