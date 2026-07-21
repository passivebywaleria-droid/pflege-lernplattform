import { describe, it, expect } from "vitest";
import { naechsterStreak } from "@/lib/learn/streak";

describe("naechsterStreak — geteilte Tages-Streak-Regel", () => {
  const heute = "2026-07-21";
  const gestern = "2026-07-20";
  const vorgestern = "2026-07-19";

  it("erster Lerntag: startet bei 1", () => {
    expect(naechsterStreak({ streakTage: 0, letzterStreakTag: null }, heute)).toEqual({
      streakTage: 1,
      letzterStreakTag: heute,
    });
  });

  it("gestern gelernt: Kette hält (+1)", () => {
    expect(
      naechsterStreak({ streakTage: 4, letzterStreakTag: gestern }, heute)
    ).toEqual({ streakTage: 5, letzterStreakTag: heute });
  });

  it("heute schon gezählt: unverändert", () => {
    const prev = { streakTage: 5, letzterStreakTag: heute };
    expect(naechsterStreak(prev, heute)).toBe(prev);
  });

  it("Lücke (vorgestern): Reset auf 1, nicht bestrafend darunter", () => {
    expect(
      naechsterStreak({ streakTage: 9, letzterStreakTag: vorgestern }, heute)
    ).toEqual({ streakTage: 1, letzterStreakTag: heute });
  });
});
