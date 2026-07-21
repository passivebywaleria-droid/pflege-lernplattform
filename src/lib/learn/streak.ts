// Tages-Streak — die EINE reine Regel, geteilt von useLernFortschritt (LE-Player)
// und dem Situations-Player. Kein zweiter Zähler, keine Logik-Dopplung (Drift-Guard).

export interface StreakStand {
  streakTage: number;
  /** ISO-Datum (YYYY-MM-DD) des letzten gezählten Lerntags, oder null. */
  letzterStreakTag: string | null;
}

/**
 * Nächster Streak-Stand nach einem Lerntag:
 *  - heute schon gezählt  → unverändert
 *  - gestern war der letzte → +1 (Kette hält)
 *  - sonst                 → Reset auf 1 (neuer Anlauf, nicht bestrafend)
 *
 * `heute` als ISO-Datum (YYYY-MM-DD) übergeben, damit die Funktion rein/testbar
 * bleibt (kein verstecktes Date.now()).
 */
export function naechsterStreak(prev: StreakStand, heute: string): StreakStand {
  if (prev.letzterStreakTag === heute) return prev; // schon gezählt

  const gestern = new Date(new Date(heute).getTime() - 86400000)
    .toISOString()
    .split("T")[0];

  const streakTage = prev.letzterStreakTag === gestern ? prev.streakTage + 1 : 1;
  return { streakTage, letzterStreakTag: heute };
}
