/**
 * W4 — Stage-3-Anti-Patterns: feuern auf affirmative Falschlehre, werden durch
 * korpus-konformen Korrektur-Kontext (ignoreIf) unterdrückt. Schützt gegen
 * Regex-Drift, die entweder die Misconception durchrutschen lässt (False Negative)
 * oder korrekten Lehrinhalt flaggt (False Positive).
 */
import { describe, it, expect } from "vitest";
import { ANTI_PATTERNS } from "../../scripts/pflege-anti-pattern-check";

/** Bildet die checkFile-Logik nach: Regex trifft UND ignoreIf trifft nicht. */
function fires(id: string, text: string): boolean {
  const p = ANTI_PATTERNS.find((x) => x.id === id);
  if (!p) throw new Error(`Pattern ${id} nicht gefunden`);
  if (!new RegExp(p.regex, "gi").test(text)) return false;
  if (p.ignoreIf && p.ignoreIf.test(text)) return false;
  return true;
}

describe("W4 — neue Anti-Patterns existieren", () => {
  const ids = ["AP-2H-LAGERUNG-STARR", "AP-DEKUBITUS-MASSAGE", "AP-DEKUBITUS-HAUTMYTHOS", "AP-OPIOID-ATEMDEPRESSION-MYTHOS"];
  it.each(ids)("%s ist registriert", (id) => {
    expect(ANTI_PATTERNS.some((p) => p.id === id)).toBe(true);
  });
});

describe("AP-2H-LAGERUNG-STARR", () => {
  it("feuert bei starrer 2-Stunden-Regel", () => {
    expect(fires("AP-2H-LAGERUNG-STARR", "Lagere jeden Patienten nach der 2-Stunden-Regel.")).toBe(true);
  });
  it("schweigt, wenn die Regel als aufgegeben gelehrt wird", () => {
    expect(fires("AP-2H-LAGERUNG-STARR", "Der DNQP 2024 hat die starre 2h-Regel aufgegeben.")).toBe(false);
  });
  it("schweigt bei korrektem 'alle 2 Stunden Druckentlastung' (kein Regel-Noun)", () => {
    expect(fires("AP-2H-LAGERUNG-STARR", "alle 2 Stunden Druck-Entlastung durch Umlagern")).toBe(false);
  });
});

describe("AP-DEKUBITUS-MASSAGE", () => {
  it("feuert bei Massage geröteter Stellen als Maßnahme", () => {
    expect(fires("AP-DEKUBITUS-MASSAGE", "Massiere die geröteten Stellen zur Durchblutungsförderung.")).toBe(true);
  });
  it("schweigt bei korrektivem 'verboten'", () => {
    expect(fires("AP-DEKUBITUS-MASSAGE", "Massieren geröteter Stellen ist verboten.")).toBe(false);
  });
  it("schweigt bei Shampoo-einmassieren (kein Haut-/Druck-Term)", () => {
    expect(fires("AP-DEKUBITUS-MASSAGE", "Shampoo einmassieren, gründlich ausspülen.")).toBe(false);
  });
});

describe("AP-DEKUBITUS-HAUTMYTHOS", () => {
  it("feuert bei Franzbranntwein-Empfehlung", () => {
    expect(fires("AP-DEKUBITUS-HAUTMYTHOS", "Reibe die Haut mit Franzbranntwein ein, das fördert die Durchblutung.")).toBe(true);
  });
  it("schweigt bei korrektivem Kontext", () => {
    expect(fires("AP-DEKUBITUS-HAUTMYTHOS", "Franzbranntwein ist kontraindiziert, er trocknet die Haut aus.")).toBe(false);
  });
});

describe("AP-OPIOID-ATEMDEPRESSION-MYTHOS", () => {
  it("feuert bei 'Morphin beschleunigt das Sterben'", () => {
    expect(fires("AP-OPIOID-ATEMDEPRESSION-MYTHOS", "Morphin beschleunigt das Sterben, daher vorsichtig.")).toBe(true);
  });
  it("feuert bei Vorenthalten aus Angst vor Atemdepression", () => {
    expect(fires("AP-OPIOID-ATEMDEPRESSION-MYTHOS", "Aus Angst vor Atemdepression wurde Morphin vorenthalten.")).toBe(true);
  });
  it("schweigt bei widerlegender Lehre ('beschleunigen NICHT')", () => {
    expect(fires("AP-OPIOID-ATEMDEPRESSION-MYTHOS", "Opioide beschleunigen das Sterben NICHT — Mythos.")).toBe(false);
  });
});
