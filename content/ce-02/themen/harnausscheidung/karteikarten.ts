// CE-02 Thema Harnausscheidung & Inkontinenz — Karteikarten
// Quelle: content/ce-02/themen/harnausscheidung/karteikarten-plan.md (16 Karteikarten)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_HARNAUSSCHEIDUNG_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-harn-kk-01",
    vorderseite: "Welche 5 Normalwerte hat Urin beim Erwachsenen?",
    rueckseiteC1:
      "Menge 1500-2000 ml/24h, Farbe strohgelb klar, Geruch leicht aromatisch, pH 5-7, spezifisches Gewicht 1010-1025 g/l.",
    rueckseiteB1:
      "Menge 1500-2000 ml pro Tag, Farbe strohgelb, Geruch leicht aromatisch, pH 5-7, spezifisches Gewicht 1010-1025.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-02",
    vorderseite: "Definiere Oligurie, Anurie und Polyurie mit den jeweiligen Mengen.",
    rueckseiteC1:
      "Oligurie <500 ml/24h (Warnsignal). Anurie <100 ml/24h (Notfall — sofort Arzt). Polyurie >2500 ml/24h (häufig Diabetes-Hinweis — Blutzucker messen).",
    rueckseiteB1:
      "Oligurie: weniger als 500 ml — Warnsignal. Anurie: weniger als 100 ml — Notfall, sofort Arzt! Polyurie: mehr als 2500 ml — oft Diabetes, Blutzucker messen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-03",
    vorderseite: "Was bedeutet süßlicher Geruch im Urin — und was machst du sofort?",
    rueckseiteC1:
      "Ketonurie — Hinweis auf entgleisten Diabetes mellitus (Ketoazidose möglich). Sofort Blutzucker messen, Arzt informieren.",
    rueckseiteB1:
      "Süßlicher Geruch = Ketonurie = Diabetes entgleist. Sofort: Blutzucker messen, Arzt rufen.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-04",
    vorderseite: "Was bedeutet Nitrit + Leukozyten positiv im Urin-Teststreifen?",
    rueckseiteC1:
      "Harnwegsinfekt (HWI). Nitrit entsteht durch Bakterien (Harnstoff-Spaltung), Leukozyten zeigen Entzündungsreaktion. Symptome prüfen, Arzt informieren.",
    rueckseiteB1:
      "Nitrit + Leukozyten = Harnwegsinfekt. Nitrit: Bakterien zerlegen Harnstoff. Leukozyten: Entzündung. Du schaust auf Symptome und rufst den Arzt.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-05",
    vorderseite: "Nenne und definiere 5 Miktionsstörungen.",
    rueckseiteC1:
      "Pollakisurie = häufig/wenig. Nykturie = nachts >1×. Dysurie = schmerzhaft. Strangurie = krampfartig. Harnverhalt = keine Entleerung trotz voller Blase (Notfall).",
    rueckseiteB1:
      "Pollakisurie: oft, aber wenig Urin. Nykturie: nachts mehr als einmal. Dysurie: Schmerzen beim Wasserlassen. Strangurie: krampfhafte Schmerzen. Harnverhalt: kein Urin trotz voller Blase — Notfall!",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "ICS; AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-06",
    vorderseite: "Definiere Kontinenz und Inkontinenz nach ICS/DNQP (2014).",
    rueckseiteC1:
      "Kontinenz = willkürliche Kontrolle über Zeitpunkt und Ort der Blasenentleerung (spüren + aufschieben + Toilette erreichen). Inkontinenz = jeder unfreiwillige Harnverlust mit sozialem oder hygienischem Problem — behandelbares Symptom, kein Schicksal.",
    rueckseiteB1:
      "Kontinenz: du entscheidest selbst — Drang spüren, aushalten, Toilette erreichen. Inkontinenz: Urin geht ungewollt ab, belastet den Alltag. Kein Schicksal — es ist behandelbar.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "ICS; DNQP (2014)",
  },
  {
    id: "ce02-harn-kk-07",
    vorderseite: "Was ist Belastungsinkontinenz — Leitsymptom, Ursache, Therapie 1. Wahl?",
    rueckseiteC1:
      "Urinverlust bei körperlicher Belastung (Husten, Niesen, Heben, Sport) ohne Harndrang. Ursache: Beckenbodenschwäche (nach Geburten, Wechseljahren, Prostata-OP). Therapie 1. Wahl: Beckenbodentraining (Kegel-Übungen, mind. 3 Monate). (AWMF 2023)",
    rueckseiteB1:
      "Urin geht ab bei Anstrengung — ohne Drang. Beckenboden ist schwach. Therapie: Beckenbodentraining, mindestens 3 Monate.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "ICS; AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-08",
    vorderseite: "Was ist Dranginkontinenz — Mechanismus, typische Trigger, Therapie 1. Wahl?",
    rueckseiteC1:
      "Plötzlicher imperativer Harndrang durch unwillkürliche Detrusor-Kontraktion — Patient kommt nicht mehr zur Toilette. Trigger: Schlüssel im Schloss, Wasserrauschen, Kälte. Therapie 1. Wahl: Blasentraining mit Miktionsprotokoll + schrittweise Intervall-Verlängerung. (AWMF 2023)",
    rueckseiteB1:
      "Starker, plötzlicher Drang — Detrusor zieht unkontrolliert zusammen. Trigger: Schlüssel, Wasser, Kälte. Therapie: Blasentraining mit Miktionsprotokoll.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "ICS; AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-09",
    vorderseite: "Wie unterscheidest du Belastungs- von Dranginkontinenz — das wichtigste Merkmal?",
    rueckseiteC1:
      "Belastungsinkontinenz: Urinverlust bei Anstrengung ohne Harndrang (Beckenboden schwach). Dranginkontinenz: Urinverlust mit plötzlichem starken Harndrang (Detrusor überaktiv). Mischinkontinenz = beides gleichzeitig → Miktionsprotokoll zeigt, was überwiegt.",
    rueckseiteB1:
      "Belastung: Urin weg bei Anstrengung, kein Drang vorher. Drang: starker Drang kommt plötzlich, zu spät zur Toilette. Mischinkontinenz = beides. Miktionsprotokoll zeigt, was mehr ist.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "ICS; AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-10",
    vorderseite: "Was ist Überlaufinkontinenz und welche Komplikation droht?",
    rueckseiteC1:
      "Tropfenweiser Urinverlust bei chronisch überfüllter Blase (Restharn dauerhaft hoch), häufigste Ursache Prostatahyperplasie. Gefahr: Harnstau in Nieren → Hydronephrose → Nierenversagen. Sofortmaßnahme: Einmalkatheter zur Blasenentlastung.",
    rueckseiteB1:
      "Blase immer zu voll, Urin tropft ab. Oft Prostata-Problem. Gefahr: Niere geht kaputt. Sofort Katheter legen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "ICS; AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-11",
    vorderseite: "Überlaufblase vs. Überlaufinkontinenz: Wie unterscheidest du beide klinisch?",
    rueckseiteC1:
      "Überlaufblase = akute Harnretention, prall voll, starke Schmerzen, kein Urin → Notfall, sofort Einmalkatheter. Überlaufinkontinenz = chronisch überfüllt, Urin tropft, kein Schmerz (Gewöhnung), Nierenschaden droht langsam. Beide: katheterisieren. (AWMF 2023)",
    rueckseiteB1:
      "Überlaufblase: akut, sehr voll, starke Schmerzen — Notfall! Überlaufinkontinenz: chronisch, tropft, kein Schmerz, Niere in Gefahr. Beides: Katheter.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "ICS; AWMF S2k-Leitlinie (2023)",
  },
  {
    id: "ce02-harn-kk-12",
    vorderseite: "Was unterscheidet Reflexinkontinenz von funktioneller Inkontinenz?",
    rueckseiteC1:
      "Reflex: nervale Schädigung (Querschnittlähmung, MS) → Blase entleert sich ohne Drang-Gefühl (kein kortikaler Einfluss). Funktionell: Blase & Nerven intakt, aber Umstände (Demenz, Immobilität, fehlende Orientierung) verhindern rechtzeitigen Toilettengang → pflegerisch oft gut therapierbar. (DNQP 2014)",
    rueckseiteB1:
      "Reflexinkontinenz: Nerv kaputt (z. B. Querschnittlähmung) — Blase leert sich ohne Drang. Funktionell: Blase okay, aber der Weg zur Toilette klappt nicht (Demenz, Immobilität) — oft pflegerisch lösbar.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP (2014)",
  },
  {
    id: "ce02-harn-kk-13",
    vorderseite: "Nenne die 5 Kontinenzprofile nach DNQP (2014) — und was ist das pflegerische Ziel?",
    rueckseiteC1:
      "1. Kontinent. 2. Unabhängig kontinent (selbst mit Hilfsmitteln). 3. Abhängig kontinent (trocken mit Pflegehilfe). 4. Unabhängig nicht-kontinent (verliert Urin, handelt selbst). 5. Abhängig nicht-kontinent (verliert, braucht Pflegehilfe). Ziel: ein Profil nach oben bringen — messbar.",
    rueckseiteB1:
      "1. Kontinent. 2. Selbst trocken mit Hilfsmitteln. 3. Trocken mit Pflegehilfe. 4. Verliert Urin, macht alles selbst. 5. Verliert Urin und braucht Pflegehilfe. Ziel: eine Stufe besser — messbar.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP (2014)",
  },
  {
    id: "ce02-harn-kk-14",
    vorderseite: "Wie lange und was dokumentiert man im Miktionsprotokoll? Warum ist die Menge (ml) Pflicht?",
    rueckseiteC1:
      "3 Tage: Uhrzeit, Miktionsvolumen (ml!), Trinkmenge, Drang, Urinverlust mit Auslöser, Nykturie. Menge ist Pflicht, weil sie die funktionelle Blasenkapazität zeigt → daraus ergibt sich das Trainings-Intervall. Basis für Trainingsplan und Erfolgskontrolle. (DNQP 2014)",
    rueckseiteB1:
      "3 Tage aufschreiben: Uhrzeit, Urinmenge (ml!), Trinkmenge, Drang, Verlust, Auslöser, Nykturie. Die Menge zeigt wie groß die Blase wirklich ist — das bestimmt das Trainings-Intervall.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP (2014)",
  },
  {
    id: "ce02-harn-kk-15",
    vorderseite: "Ordne die 4 Kontinenz-Trainings ihrer Inkontinenzform zu (DNQP 2014).",
    rueckseiteC1:
      "Blasentraining → Dranginkontinenz (Intervalle verlängern). Beckenbodentraining → Belastungsinkontinenz (Kegel, 3 Monate!). Toilettentraining → Demenz/Immobilität (feste Zeiten, Pflege führt). Gewohnheitstraining → unregelmäßiges Muster (15 Min vor Episode). Basis immer: Miktionsprotokoll.",
    rueckseiteB1:
      "Blasentraining: Dranginkontinenz — Intervalle verlängern. Beckenbodentraining: Belastungsinkontinenz — Kegel, 3 Monate. Toilettentraining: Demenz/Immobilität — feste Zeiten. Gewohnheitstraining: unregelmäßiges Muster — 15 Min vorher.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP (2014)",
  },
  {
    id: "ce02-harn-kk-16",
    vorderseite: "Nenne 5 Maßnahmen zur HWI-Prophylaxe und warum ist der Dauerkatheter kontraindiziert?",
    rueckseiteC1:
      "1,5-2 L trinken / vollständige Blasenentleerung / Wischrichtung vorne nach hinten (Frauen) / Miktion nach Geschlechtsverkehr / pH-neutrale Intimhygiene / warmhalten. Dauerkatheter kontraindiziert: ca. 3-10 % Infektionsrisiko pro Tag — nur bei medizinischer Indikation (Harnverhalt, Intensivbilanzierung). (DNQP 2014; RKI 2022)",
    rueckseiteB1:
      "HWI-Prophylaxe: 1,5-2 L trinken, vollständig entleeren, von vorne nach hinten wischen, nach Sex Blase leeren, pH-neutrale Pflege, warmhalten. Dauerkatheter: 3-10 % Infektionsrisiko pro Tag — nur wenn wirklich nötig.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP (2014); RKI (2022)",
  },
];
