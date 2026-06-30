/**
 * stuetzt-check.ts --file <kernfakten.md> [--strict]  — Pipeline-Härtung Stage 2 (W5)
 *
 * Der `zitat-verifizierer` prüft nur String-EXISTENZ ("steht das Zitat in der Quelle?").
 * Er kann NICHT entscheiden, ob ein wörtlich vorhandenes Zitat den KONKRETEN Claim
 * stützt — oder nur das allgemeine Thema berührt (Self-Grading-Lücke).
 *
 * Dieser Check schließt sie semantisch + adversarial:
 *   - Pro (Claim, Beleg-Zitat)-Paar fragen MEHRERE unabhängige Lenses (verschiedene
 *     Blickwinkel, KEIN Self-Grading): "Stützt dieses Zitat den KONKRETEN Claim?"
 *   - Mehrheits-Entscheid über die Lenses. STÜTZT braucht echte Mehrheit; sonst Flag.
 *
 * Läuft zur BUILD-ZEIT (Token-Kosten), nicht in CI/Commit-Gate. Ohne NEBIUS_API_KEY
 * wird sichtbar übersprungen (nicht stumm).
 *
 * Usage:
 *   npx tsx scripts/stuetzt-check.ts --self-test
 *   npx tsx scripts/stuetzt-check.ts --file specs/ce-02/kernfakten/sturz-prophylaxe.md
 *   npx tsx scripts/stuetzt-check.ts --file <md> --strict
 */
import { readFileSync } from "fs";

// ─────────────────────────────────────────────────────────────────────────────
// Pure, testbare Kernlogik (von tests/unit/stuetzt-check.test.ts importiert)
// ─────────────────────────────────────────────────────────────────────────────

export interface BelegPair {
  quelle: string;
  zitat: string;
}

export interface Fakt {
  id: string;     // "F-08"
  titel: string;  // "Keine Fixierung als Sturzprophylaxe"
  fakt: string;   // der Claim-Text aus **Fakt:**
  belege: BelegPair[];
}

/** Parst eine Kernfakten-.md in Fakt-Objekte (Claim + zugehörige Belege). */
export function parseFakten(md: string): Fakt[] {
  const lines = md.split("\n");
  const headers: { idx: number; id: string; titel: string }[] = [];
  lines.forEach((l, i) => {
    const m = l.match(/^#{2,4}\s+(F-\d+):?\s*(.*)$/i);
    if (m) headers.push({ idx: i, id: m[1].toUpperCase(), titel: m[2].trim() });
  });

  const fakten: Fakt[] = [];
  for (let h = 0; h < headers.length; h++) {
    const start = headers[h].idx;
    const end = h + 1 < headers.length ? headers[h + 1].idx : lines.length;
    const section = lines.slice(start, end);

    // Fakt-Claim: ab "**Fakt:**" bis zum nächsten **Feld:**- oder Header-Zeile.
    let fakt = "";
    for (let i = 0; i < section.length; i++) {
      const fm = section[i].match(/^\*\*Fakt:\*\*\s*(.*)$/);
      if (!fm) continue;
      const buf = [fm[1]];
      for (let j = i + 1; j < section.length; j++) {
        if (/^\s*\*\*[^*]+:\*\*/.test(section[j])) break;
        if (/^#{2,4}\s/.test(section[j])) break;
        buf.push(section[j]);
      }
      fakt = buf.join(" ").replace(/\s+/g, " ").trim();
      break;
    }

    // Belege: jeder "**Beleg:**"-Block, Zitat an die zuletzt gesehene Quelle gebunden.
    const belege: BelegPair[] = [];
    for (let i = 0; i < section.length; i++) {
      if (!/\*\*Beleg:\*\*/.test(section[i])) continue;
      let quelle = "";
      for (let j = i + 1; j < section.length; j++) {
        const l = section[j].trim();
        if (!l.startsWith("-")) break;
        const mQ = l.match(/Quelle:\s*`([^`]+)`/);
        if (mQ) { quelle = mQ[1]; continue; }
        const mZ = l.match(/Zitat:\s*"([^"]+)"/);
        if (mZ && quelle) belege.push({ quelle, zitat: mZ[1] });
      }
    }

    fakten.push({ id: headers[h].id, titel: headers[h].titel, fakt, belege });
  }
  return fakten;
}

export type Verdict = "STUETZT" | "NUR_THEMA" | "WIDERSPRICHT" | "UNKLAR";

/** Eine Lens = ein unabhängiger Blickwinkel auf dieselbe (Claim, Zitat)-Frage. */
export interface Lens {
  id: string;
  systemPrompt: string;
}

export const LENSES: Lens[] = [
  {
    id: "wortlaut",
    systemPrompt:
      "Du bist Pflegewissenschaftler:in und prüfst Quellenbindung. Frage: Enthält das ZITAT die Kernaussage des CLAIMS (wörtlich oder eindeutig sinngemäß)? " +
      "Antworte mit GENAU einem Wort: STUETZT (Zitat trägt die Aussage), NUR_THEMA (Zitat berührt nur das Thema, trägt die konkrete Aussage aber nicht), WIDERSPRICHT (Zitat sagt etwas Gegenteiliges), UNKLAR.",
  },
  {
    id: "spezifisch",
    systemPrompt:
      "Du bist ein strenger Faktenprüfer. Frage: Belegt das ZITAT den SPEZIFISCHEN Claim — oder nur ein allgemeines Oberthema? Ein Zitat, das nur das Thema erwähnt, ohne die konkrete Behauptung zu decken, ist NUR_THEMA. " +
      "Antworte mit GENAU einem Wort: STUETZT, NUR_THEMA, WIDERSPRICHT, UNKLAR.",
  },
  {
    id: "skeptiker",
    systemPrompt:
      "Du bist Advocatus Diaboli. Versuche aktiv zu WIDERLEGEN, dass das Zitat den Claim stützt. Nur wenn dir das nicht gelingt, ist es STUETZT. Fehlt im Zitat ein Teil dessen, was der Claim behauptet, ist es NUR_THEMA. " +
      "Antworte mit GENAU einem Wort: STUETZT, NUR_THEMA, WIDERSPRICHT, UNKLAR.",
  },
];

export type Judge = (claim: string, zitat: string, lens: Lens) => Promise<Verdict>;

export interface Aggregated {
  verdict: Verdict;
  stuetztStimmen: number;
  total: number;
  unanimous: boolean;
  einzel: Verdict[];
}

/**
 * Mehrheits-Entscheid: STUETZT gewinnt nur bei echter Mehrheit (> Hälfte).
 * Sonst wird das gravierendste Gegen-Votum gemeldet (WIDERSPRICHT > NUR_THEMA > UNKLAR).
 */
export function aggregateVotes(verdicts: Verdict[]): Aggregated {
  const total = verdicts.length;
  const count = (v: Verdict) => verdicts.filter((x) => x === v).length;
  const s = count("STUETZT");
  if (total > 0 && s > total / 2) {
    return { verdict: "STUETZT", stuetztStimmen: s, total, unanimous: s === total, einzel: verdicts };
  }
  const severity: Verdict[] = ["WIDERSPRICHT", "NUR_THEMA", "UNKLAR"];
  const verdict = severity.find((v) => count(v) > 0) ?? "UNKLAR";
  return { verdict, stuetztStimmen: s, total, unanimous: false, einzel: verdicts };
}

export interface BelegResult {
  faktId: string;
  faktTitel: string;
  quelle: string;
  zitat: string;
  agg: Aggregated;
}

/** Führt den adversarialen Stützt-Check über alle Belege aller Fakten aus. */
export async function runStuetztCheck(
  fakten: Fakt[],
  judge: Judge,
  lenses: Lens[] = LENSES
): Promise<BelegResult[]> {
  const results: BelegResult[] = [];
  for (const f of fakten) {
    for (const b of f.belege) {
      const verdicts = await Promise.all(lenses.map((lens) => judge(f.fakt, b.zitat, lens)));
      results.push({
        faktId: f.id,
        faktTitel: f.titel,
        quelle: b.quelle,
        zitat: b.zitat,
        agg: aggregateVotes(verdicts),
      });
    }
  }
  return results;
}

/** Mappt freie LLM-Antwort robust auf ein Verdict. */
export function parseVerdict(raw: string): Verdict {
  const t = raw.toUpperCase();
  if (/\bWIDERSPRICHT\b|WIDERSPRUCH/.test(t)) return "WIDERSPRICHT";
  if (/NUR[_\s-]?THEMA/.test(t)) return "NUR_THEMA";
  if (/\bST(U|Ü|UE)TZT\b|\bSTUETZT\b|SUPPORT/.test(t)) return "STUETZT";
  return "UNKLAR";
}

// ─────────────────────────────────────────────────────────────────────────────
// Nebius-Judge (Llama 3.3 70B) — Build-Zeit-Adapter
// ─────────────────────────────────────────────────────────────────────────────

const NEBIUS_API_URL = "https://api.studio.nebius.com/v1/chat/completions";

export function makeNebiusJudge(apiKey: string): Judge {
  return async (claim, zitat, lens) => {
    const userMessage =
      `CLAIM:\n"""${claim}"""\n\nZITAT (aus der zitierten Quelle):\n"""${zitat}"""\n\n` +
      `Stützt das ZITAT den CLAIM? Antworte mit genau einem Wort.`;
    try {
      const res = await fetch(NEBIUS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.3-70B-Instruct",
          messages: [
            { role: "system", content: lens.systemPrompt },
            { role: "user", content: userMessage },
          ],
          max_tokens: 8,
          temperature: 0,
        }),
      });
      if (!res.ok) return "UNKLAR";
      const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
      const content = data.choices?.[0]?.message?.content ?? "";
      return parseVerdict(content);
    } catch {
      return "UNKLAR";
    }
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────────────────────────────────────

function printReport(results: BelegResult[]): { flagged: number } {
  console.log("═".repeat(68));
  console.log("STÜTZT-CHECK (W5) — adversariale Quellenbindung");
  console.log("═".repeat(68));
  console.log(`Geprüfte Belege: ${results.length} (je ${LENSES.length} Lenses)\n`);

  let flagged = 0;
  for (const r of results) {
    const ok = r.agg.verdict === "STUETZT";
    if (!ok) flagged++;
    const icon = ok ? (r.agg.unanimous ? "✅" : "🟢") : "🔴";
    console.log(`${icon} [${r.faktId}] ${r.agg.verdict}  (${r.agg.stuetztStimmen}/${r.agg.total} STÜTZT: ${r.agg.einzel.join("/")})`);
    if (!ok) {
      console.log(`     Quelle: ${r.quelle}`);
      console.log(`     Zitat:  "${r.zitat.slice(0, 90)}${r.zitat.length > 90 ? "…" : ""}"`);
    }
  }
  console.log(`\n${"─".repeat(68)}`);
  console.log(
    flagged === 0
      ? "✅ Alle Belege stützen ihren konkreten Claim (Mehrheits-Entscheid)."
      : `🔴 ${flagged} Beleg(e) stützen den konkreten Claim NICHT (NUR_THEMA/WIDERSPRICHT/UNKLAR) — prüfen.`
  );
  return { flagged };
}

async function main() {
  const argv = process.argv.slice(2);

  if (argv.includes("--self-test")) {
    // Deterministischer Mock-Judge: demonstriert Mehrheits-Aggregation ohne Netz.
    const fakten: Fakt[] = [
      { id: "F-01", titel: "Klar gestützt", fakt: "Ein Sturz ist ein unbeabsichtigtes Zu-Boden-Kommen.", belege: [{ quelle: "q", zitat: "Ein Sturz ist ein Ereignis, bei dem die Person unbeabsichtigt auf dem Boden landet." }] },
      { id: "F-02", titel: "Nur Thema", fakt: "Benzodiazepine erhöhen das Sturzrisiko um den Faktor 3.", belege: [{ quelle: "q", zitat: "Medikamente können das Sturzrisiko beeinflussen." }] },
    ];
    const mock: Judge = async (claim) =>
      claim.includes("Faktor 3") ? "NUR_THEMA" : "STUETZT";
    const results = await runStuetztCheck(fakten, mock);
    const { flagged } = printReport(results);
    console.log(`\nSelf-Test: erwartet 1 geflaggt (F-02). Tatsächlich: ${flagged}.`);
    process.exit(flagged === 1 ? 0 : 1);
  }

  const fileIdx = argv.indexOf("--file");
  if (fileIdx === -1 || !argv[fileIdx + 1]) {
    console.log("Usage: stuetzt-check.ts --file <kernfakten.md> [--strict] | --self-test");
    process.exit(2);
  }
  const mdPath = argv[fileIdx + 1];
  const strict = argv.includes("--strict");
  const fakten = parseFakten(readFileSync(mdPath, "utf8"));
  const belegAnzahl = fakten.reduce((n, f) => n + f.belege.length, 0);
  console.log(`Datei: ${mdPath} · Fakten: ${fakten.length} · Belege: ${belegAnzahl}`);

  const apiKey = process.env.NEBIUS_API_KEY;
  if (!apiKey) {
    console.log("\n⚠️  NEBIUS_API_KEY nicht gesetzt — semantischer Stützt-Check ÜBERSPRUNGEN.");
    console.log("    (Der deterministische zitat-verifizierer bleibt das Mindest-Gate.)");
    console.log("    Setze NEBIUS_API_KEY und führe diesen Check vor dem Live-Deploy aus.");
    process.exit(0);
  }

  const results = await runStuetztCheck(fakten, makeNebiusJudge(apiKey));
  const { flagged } = printReport(results);
  process.exit(strict && flagged > 0 ? 1 : 0);
}

const isCLI = process.argv[1]?.includes("stuetzt-check");
if (isCLI) {
  main().catch((e) => {
    console.error("stuetzt-check Fehler:", e);
    process.exit(2);
  });
}
