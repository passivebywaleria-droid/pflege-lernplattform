/**
 * W5 — Adversarialer Stützt-Check: Parser, Mehrheits-Aggregation, Verdict-Parsing
 * und der Runner mit Mock-Judge (kein Netz, deterministisch).
 */
import { describe, it, expect } from "vitest";
import {
  parseFakten,
  aggregateVotes,
  parseVerdict,
  runStuetztCheck,
  LENSES,
  type Judge,
  type Verdict,
} from "../../scripts/stuetzt-check";

const SAMPLE_MD = [
  "# Kernfakten: Test",
  "",
  "### F-01: Definition Sturz",
  "",
  "**Fakt:** Ein Sturz ist ein Ereignis, bei dem die Person unbeabsichtigt",
  "auf dem Boden landet.",
  "",
  "**Prüfungsrelevanz:** hoch",
  "**Beleg:**",
  "- Quelle: `dnqp/sturz.txt`",
  '- Zitat: "Ein Sturz ist ein Ereignis, bei dem der Betroffene unbeabsichtigt auf dem Boden aufkommt"',
  '- Zitat: "Beinahestürze gelten nicht als Sturz"',
  "**Praxisfehler:** Fast-Stürze werden nicht dokumentiert.",
  "",
  "### F-02: Fixierung",
  "",
  "**Fakt:** Bettgitter sind keine Sturzprophylaxe.",
  "",
  "**Beleg:**",
  "- Quelle: `dnqp/fem.txt`",
  '- Zitat: "Freiheitsentziehende Maßnahmen senken das Sturzaufkommen nicht"',
].join("\n");

describe("parseFakten", () => {
  const fakten = parseFakten(SAMPLE_MD);

  it("findet beide Fakten mit IDs + Titeln", () => {
    expect(fakten.map((f) => f.id)).toEqual(["F-01", "F-02"]);
    expect(fakten[0].titel).toBe("Definition Sturz");
  });

  it("liest mehrzeiligen Fakt-Claim bis zum nächsten Feld", () => {
    expect(fakten[0].fakt).toBe(
      "Ein Sturz ist ein Ereignis, bei dem die Person unbeabsichtigt auf dem Boden landet."
    );
    expect(fakten[0].fakt).not.toContain("Prüfungsrelevanz");
  });

  it("bindet mehrere Zitate an dieselbe Quelle", () => {
    expect(fakten[0].belege).toHaveLength(2);
    expect(fakten[0].belege[0].quelle).toBe("dnqp/sturz.txt");
    expect(fakten[0].belege[1].zitat).toContain("Beinahestürze");
  });

  it("F-02 hat genau einen Beleg", () => {
    expect(fakten[1].belege).toHaveLength(1);
    expect(fakten[1].belege[0].quelle).toBe("dnqp/fem.txt");
  });
});

describe("parseVerdict", () => {
  it("mappt LLM-Freitext robust", () => {
    expect(parseVerdict("STUETZT")).toBe("STUETZT");
    expect(parseVerdict("stützt")).toBe("STUETZT");
    expect(parseVerdict("Antwort: NUR_THEMA")).toBe("NUR_THEMA");
    expect(parseVerdict("nur thema, weil ...")).toBe("NUR_THEMA");
    expect(parseVerdict("das WIDERSPRICHT dem Claim")).toBe("WIDERSPRICHT");
    expect(parseVerdict("hmm weiß nicht")).toBe("UNKLAR");
  });
});

describe("aggregateVotes — Mehrheits-Entscheid", () => {
  it("echte Mehrheit STUETZT → STUETZT", () => {
    const a = aggregateVotes(["STUETZT", "STUETZT", "NUR_THEMA"]);
    expect(a.verdict).toBe("STUETZT");
    expect(a.unanimous).toBe(false);
    expect(a.stuetztStimmen).toBe(2);
  });

  it("einstimmig → unanimous true", () => {
    expect(aggregateVotes(["STUETZT", "STUETZT", "STUETZT"]).unanimous).toBe(true);
  });

  it("Gleichstand 1:1:1 zählt NICHT als STUETZT (gravierendstes Gegen-Votum)", () => {
    const a = aggregateVotes(["STUETZT", "NUR_THEMA", "WIDERSPRICHT"]);
    expect(a.verdict).toBe("WIDERSPRICHT");
  });

  it("exakt Hälfte STÜTZT reicht nicht (> Hälfte nötig)", () => {
    const a = aggregateVotes(["STUETZT", "NUR_THEMA"]);
    expect(a.verdict).toBe("NUR_THEMA");
  });

  it("Mehrheit NUR_THEMA → NUR_THEMA", () => {
    expect(aggregateVotes(["NUR_THEMA", "NUR_THEMA", "STUETZT"]).verdict).toBe("NUR_THEMA");
  });
});

describe("runStuetztCheck — Runner mit Mock-Judge", () => {
  it("ruft jede Lens pro Beleg und aggregiert", async () => {
    const calls: string[] = [];
    const judge: Judge = async (_claim, _zitat, lens) => {
      calls.push(lens.id);
      return "STUETZT" as Verdict;
    };
    const fakten = parseFakten(SAMPLE_MD);
    const results = await runStuetztCheck(fakten, judge);
    // 3 Belege gesamt (2 + 1) × 3 Lenses
    expect(results).toHaveLength(3);
    expect(calls).toHaveLength(3 * LENSES.length);
    expect(results.every((r) => r.agg.verdict === "STUETZT")).toBe(true);
  });

  it("flaggt einen Beleg, dessen Mehrheit NUR_THEMA sagt", async () => {
    const judge: Judge = async (claim) =>
      claim.includes("Bettgitter") ? "NUR_THEMA" : "STUETZT";
    const fakten = parseFakten(SAMPLE_MD);
    const results = await runStuetztCheck(fakten, judge);
    const f02 = results.find((r) => r.faktId === "F-02")!;
    expect(f02.agg.verdict).toBe("NUR_THEMA");
    const flagged = results.filter((r) => r.agg.verdict !== "STUETZT");
    expect(flagged).toHaveLength(1);
  });
});
