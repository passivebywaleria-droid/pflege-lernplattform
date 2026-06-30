/**
 * Drift-Guard (W8): Skript-Anti-Patterns ↔ Regel-Register müssen synchron sein.
 *
 * Zwei Wahrheitsquellen (scripts/pflege-anti-pattern-check.ts und
 * .claude/rules/pflege-konformitaet.md) liefen früher auseinander. Dieser Test
 * erzwingt Bidirektionalität: Jede `id` im Skript steht im Regel-Register und
 * umgekehrt. Schlägt fehl, sobald jemand ein Pattern nur an einer Stelle ändert.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";
import { ANTI_PATTERNS } from "../../scripts/pflege-anti-pattern-check";

const RULE_PATH = join(process.cwd(), ".claude/rules/pflege-konformitaet.md");

/** AP-IDs aus dem Regel-Register (Backtick-umschlossene `AP-...`-Tokens). */
function ruleDocIds(): Set<string> {
  const md = readFileSync(RULE_PATH, "utf8");
  const ids = new Set<string>();
  for (const m of md.matchAll(/`(AP-[A-Z0-9-]+)`/g)) ids.add(m[1]);
  return ids;
}

describe("Pflege-Anti-Pattern Drift-Guard (W8)", () => {
  const scriptIds = new Set(ANTI_PATTERNS.map((p) => p.id));
  const docIds = ruleDocIds();

  it("hat überhaupt Patterns + ein gefülltes Register", () => {
    expect(scriptIds.size).toBeGreaterThan(0);
    expect(docIds.size).toBeGreaterThan(0);
  });

  it("jede Skript-id ist im Regel-Register dokumentiert", () => {
    const fehlend = [...scriptIds].filter((id) => !docIds.has(id));
    expect(
      fehlend,
      `Im Skript, aber nicht in pflege-konformitaet.md (Pattern-Register ergänzen): ${fehlend.join(", ")}`
    ).toEqual([]);
  });

  it("jede Register-id existiert im Skript (keine veralteten Doku-Einträge)", () => {
    const verwaist = [...docIds].filter((id) => !scriptIds.has(id));
    expect(
      verwaist,
      `Im Register, aber nicht (mehr) im Skript (Register bereinigen): ${verwaist.join(", ")}`
    ).toEqual([]);
  });

  it("Pattern-ids sind eindeutig (keine Duplikate)", () => {
    const ids = ANTI_PATTERNS.map((p) => p.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
});
