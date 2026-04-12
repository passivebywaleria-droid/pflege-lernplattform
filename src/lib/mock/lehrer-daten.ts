/**
 * Mock-Daten für das Lehrer-Dashboard MVP
 */

export type SchuelerStatus = "aktiv" | "inaktiv" | "brauchtHilfe";

export interface MockSchueler {
  id: string;
  name: string;
  letzterLogin: string;
  fortschritt: number;
  aktiveCE: string;
  status: SchuelerStatus;
  /** Tage ohne Login (für Inaktivitäts-Anzeige) */
  tageInaktiv: number;
  /** Sprachlevel */
  sprachLevel: "b1" | "b2" | "c1";
  /** Streak in Tagen */
  streak: number;
}

export interface SchwierigkeitThema {
  thema: string;
  ce: string;
  fehlversuche: number;
  betroffeneSchueler: string[];
}

export const mockSchueler: MockSchueler[] = [
  {
    id: "s1",
    name: "Mehmet Y.",
    letzterLogin: "Heute",
    fortschritt: 34,
    aktiveCE: "CE 01",
    status: "aktiv",
    tageInaktiv: 0,
    sprachLevel: "b1",
    streak: 12,
  },
  {
    id: "s2",
    name: "Sarah K.",
    letzterLogin: "Gestern",
    fortschritt: 67,
    aktiveCE: "CE 02",
    status: "aktiv",
    tageInaktiv: 1,
    sprachLevel: "c1",
    streak: 28,
  },
  {
    id: "s3",
    name: "Ahmad R.",
    letzterLogin: "Vor 5 Tagen",
    fortschritt: 12,
    aktiveCE: "CE 01",
    status: "inaktiv",
    tageInaktiv: 5,
    sprachLevel: "b1",
    streak: 0,
  },
  {
    id: "s4",
    name: "Lisa M.",
    letzterLogin: "Heute",
    fortschritt: 89,
    aktiveCE: "CE 08",
    status: "aktiv",
    tageInaktiv: 0,
    sprachLevel: "c1",
    streak: 45,
  },
  {
    id: "s5",
    name: "Fatma Ö.",
    letzterLogin: "Vor 2 Tagen",
    fortschritt: 23,
    aktiveCE: "CE 02",
    status: "brauchtHilfe",
    tageInaktiv: 2,
    sprachLevel: "b1",
    streak: 3,
  },
  {
    id: "s6",
    name: "Max B.",
    letzterLogin: "Gestern",
    fortschritt: 51,
    aktiveCE: "CE 04",
    status: "aktiv",
    tageInaktiv: 1,
    sprachLevel: "c1",
    streak: 15,
  },
  {
    id: "s7",
    name: "Ayşe D.",
    letzterLogin: "Vor 3 Tagen",
    fortschritt: 41,
    aktiveCE: "CE 03",
    status: "brauchtHilfe",
    tageInaktiv: 3,
    sprachLevel: "b2",
    streak: 7,
  },
  {
    id: "s8",
    name: "Jonas W.",
    letzterLogin: "Heute",
    fortschritt: 76,
    aktiveCE: "CE 06",
    status: "aktiv",
    tageInaktiv: 0,
    sprachLevel: "c1",
    streak: 21,
  },
];

export const schwierigsteThemen: SchwierigkeitThema[] = [
  {
    thema: "Dekubitusprophylaxe — Stadien-Einteilung",
    ce: "CE 02",
    fehlversuche: 14,
    betroffeneSchueler: ["Mehmet Y.", "Ahmad R.", "Fatma Ö.", "Ayşe D."],
  },
  {
    thema: "Pflegeprozess — Evaluation dokumentieren",
    ce: "CE 01",
    fehlversuche: 11,
    betroffeneSchueler: ["Ahmad R.", "Fatma Ö.", "Ayşe D."],
  },
  {
    thema: "Vitalzeichen — Blutdruckmessung Fehlerquellen",
    ce: "CE 04",
    fehlversuche: 9,
    betroffeneSchueler: ["Mehmet Y.", "Fatma Ö."],
  },
  {
    thema: "Hygiene — Nosokomiale Infektionen",
    ce: "CE 02",
    fehlversuche: 8,
    betroffeneSchueler: ["Ahmad R.", "Max B.", "Ayşe D."],
  },
];

/**
 * Berechne Klassen-Statistiken aus Mock-Daten
 */
export function berechneKlassenStatistiken(schueler: MockSchueler[]) {
  const durchschnitt = Math.round(
    schueler.reduce((sum, s) => sum + s.fortschritt, 0) / schueler.length
  );

  const aktivste = [...schueler]
    .sort((a, b) => b.streak - a.streak)
    .slice(0, 3);

  const brauchenHilfe = schueler.filter((s) => s.status === "brauchtHilfe");
  const inaktive = schueler.filter((s) => s.status === "inaktiv");
  const aktive = schueler.filter((s) => s.status === "aktiv");

  return {
    durchschnitt,
    aktivste,
    brauchenHilfe,
    inaktive,
    aktive,
    gesamt: schueler.length,
  };
}
