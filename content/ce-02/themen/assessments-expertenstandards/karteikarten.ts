// CE-02 Thema Assessments & Expertenstandards — Karteikarten
// Quelle: content/ce-02/themen/assessments-expertenstandards/karteikarten-plan.md
// Pipeline v9 — 2026-04-23
// 14 Karteikarten (1 pro Baustein) — alle prüfungsrelevant

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-assess-kk-01",
    vorderseite: "Was ist der Unterschied zwischen Screening und Assessment?",
    rueckseiteC1:
      "Screening = kurzes Such-Verfahren mit wenigen Items, filtert Risiko-Personen. Assessment = tiefe, standardisierte Einschätzung bei auffälligen Personen. Erst Screening, dann bei Bedarf Assessment.",
    rueckseiteB1:
      "Screening ist kurz und sucht breit. Es findet Menschen mit vielleicht einem Problem. Assessment ist lang und genau. Es prüft tief nach, wie groß das Problem ist. Beide braucht man zusammen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP-Verfahrensordnung (2024)",
  },
  {
    id: "ce02-assess-kk-02",
    vorderseite: "Was ist das DNQP und welche juristische Bedeutung haben seine Expertenstandards?",
    rueckseiteC1:
      "DNQP = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege, Hochschule Osnabrück, seit 1999. Expertenstandards gelten juristisch als antizipiertes Sachverständigengutachten. Rechtsgrundlagen: § 113a SGB XI (Altenpflege), § 137a SGB V.",
    rueckseiteB1:
      "DNQP ist die Pflege-Expertengruppe in Osnabrück. Sie schreibt seit 1999 die wichtigsten Pflege-Regeln. Die Regeln gelten auch juristisch. In der Altenpflege über § 113a SGB XI.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "DNQP (2024); § 113a SGB XI",
  },
  {
    id: "ce02-assess-kk-03",
    vorderseite: "Wie viele DNQP-Expertenstandards gibt es aktuell? Nenne 6 davon.",
    rueckseiteC1:
      "12 Standards. Beispiele: Dekubitus (2017/2024), Sturz (2022), Schmerz akut (2011), Schmerz chronisch (2015), Harnkontinenz (2014), Ernährungsmanagement (2017), Chronische Wunden (2015), Beziehungsgestaltung Demenz (2019), Mobilität (2014), Mundgesundheit (2022), Hautintegrität (2023), Entlassungsmanagement (2019).",
    rueckseiteB1:
      "Es gibt 12 Expertenstandards. Neueste: Hautintegrität (2023), Mundgesundheit (2022), Sturz (2022). Alle paar Jahre werden sie neu geschrieben.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP (2024)",
  },
  {
    id: "ce02-assess-kk-04",
    vorderseite: "Was bedeutet die S-P-E-Struktur in Expertenstandards? Wer hat das Modell entwickelt?",
    rueckseiteC1:
      "S = Struktur (Voraussetzungen, Ressourcen), P = Prozess (Handeln), E = Ergebnis (Zielerreichung). Modell von Avedis Donabedian (1966). Jedes der 6 Standardkriterien hat S/P/E: S1/P1/E1 bis S6/P6/E6.",
    rueckseiteB1:
      "S = Struktur (was ist da?), P = Prozess (was wird getan?), E = Ergebnis (was kommt raus?). Von Donabedian (1966). Jedes Kriterium im Standard hat alle 3.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Donabedian A. (1966); DNQP (2024)",
  },
  {
    id: "ce02-assess-kk-05",
    vorderseite: "Nenne die 6 Subskalen der Braden-Skala. Wie wird das Risiko interpretiert?",
    rueckseiteC1:
      "Sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Jede 1-4 Punkte (Reibung 1-3). Summe 6-23. Niedrige Punktzahl = hohes Dekubitus-Risiko. (Braden & Bergstrom 1987)",
    rueckseiteB1:
      "6 Subskalen: Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung. Jede 1-4 Punkte. Summe 6-23. Wenig Punkte = hohes Risiko für Dekubitus.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Braden B.J., Bergstrom N. (1987)",
  },
  {
    id: "ce02-assess-kk-06",
    vorderseite: "Was misst der Barthel-Index? Was ist die Punkteskala?",
    rueckseiteC1:
      "Körperliche Selbstständigkeit bei 10 Alltagsaktivitäten (ADLs): Essen, Baden, Körperpflege, Ankleiden, Stuhl-/Harnkontrolle, WC, Transfer, Gehen, Treppen. Skala 0-100. 100 = vollständig selbstständig, 0 = vollständig abhängig. Misst Leistung, nicht Kapazität. (Mahoney & Barthel 1965)",
    rueckseiteB1:
      "10 Alltagsbereiche (Essen, Waschen, Gehen etc.). Summe: 0-100. Viel Punkte = selbstständig. Er misst, was der Patient wirklich tut — nicht was er könnte.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Mahoney F.I., Barthel D.W. (1965)",
  },
  {
    id: "ce02-assess-kk-07",
    vorderseite: "Was ist die NRS? Welche Alternativen gibt es für Kinder, Demenz, Beatmung?",
    rueckseiteC1:
      "NRS = Numeric Rating Scale, 0 (kein Schmerz) bis 10 (stärkster Schmerz). Alternativen: VAS (visuelle Linie), Smiley-/Gesichter-Skala (Kinder ab ~4 J.), BESD (Beurteilung Schmerz bei Demenz), BPS (Behavioral Pain Scale — Beatmung).",
    rueckseiteB1:
      "NRS: Patient sagt Zahl von 0 bis 10. Für Kinder: Smiley-Skala. Für Demenz: BESD. Für Beatmung: BPS.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP-Expertenstandard Schmerzmanagement (2011/2015)",
  },
  {
    id: "ce02-assess-kk-08",
    vorderseite: "Was ist das MNA? Welche zwei Stufen hat es und wie werden die Werte interpretiert?",
    rueckseiteC1:
      "Mini Nutritional Assessment (Guigoz 1994), validiert für Menschen ≥65 Jahre. MNA-SF (Screening, 6 Items, 0-14 Punkte): 12-14 normal, 8-11 Risiko, 0-7 Mangelernährung. Bei Auffälligkeit volles MNA (18 Items, 0-30).",
    rueckseiteB1:
      "MNA ist ein Test für Mangelernährung bei älteren Menschen. Erst kurzer Test (MNA-SF, 0-14). Wenn Risiko: langer Test (0-30). Von Guigoz (1994).",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Guigoz Y., Vellas B., Garry P.J. (1994); DNQP (2017)",
  },
  {
    id: "ce02-assess-kk-09",
    vorderseite: "Was ist der TUG-Test? Wie wird er durchgeführt, ab wie vielen Sekunden besteht Sturzrisiko?",
    rueckseiteC1:
      "Timed-Up-and-Go: Patient steht aus Stuhl auf, geht 3 m, dreht um, geht zurück, setzt sich. Zeit messen. <10 Sek. normal, 10-19 grenzwertig, 20-29 erhöhtes Sturzrisiko, ≥30 stark eingeschränkt. Hilfsmittel erlaubt und dokumentieren. (Podsiadlo & Richardson 1991)",
    rueckseiteB1:
      "TUG: Aufstehen, 3 Meter gehen, umdrehen, zurück, hinsetzen. Zeit stoppen. Über 20 Sekunden = Sturzgefahr. Über 30 = sehr hohe Sturzgefahr.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Podsiadlo D., Richardson S. (1991)",
  },
  {
    id: "ce02-assess-kk-10",
    vorderseite: "Ordne zu: Welches Assessment misst Dekubitusrisiko, Sturzrisiko, Ernährungsstatus, Schmerz, Selbstständigkeit im Alltag?",
    rueckseiteC1:
      "Braden-Skala = Dekubitus-Risiko. TUG = Sturz-Risiko/Mobilität. MNA (MNA-SF) = Mangelernährungsrisiko. NRS = Schmerzintensität. Barthel-Index = ADL-Selbstständigkeit.",
    rueckseiteB1:
      "Braden = Dekubitus. TUG = Sturz. MNA = Essen. NRS = Schmerz. Barthel = Selbstständigkeit.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP (2024)",
  },
  {
    id: "ce02-assess-kk-11",
    vorderseite: "Wofür stehen NANDA-I, NIC und NOC? Was misst jedes System?",
    rueckseiteC1:
      "NANDA-I = Pflegediagnosen (seit 1982, ~250). NIC = Nursing Interventions Classification (~554 Pflegemaßnahmen). NOC = Nursing Outcomes Classification (messbare Pflegeergebnisse). Oft zusammen als 'NNN-Verbindung'. Weitere: ICNP (ICN), ENP (europäischer Raum).",
    rueckseiteB1:
      "NANDA = Pflegediagnosen. NIC = Pflegemaßnahmen. NOC = Pflegeergebnisse. Oft zusammen: 'NNN-Verbindung'.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "NANDA International (2021-2023)",
  },
  {
    id: "ce02-assess-kk-12",
    vorderseite: "Nenne die 6 Standardkriterien eines DNQP-Expertenstandards in der richtigen Reihenfolge.",
    rueckseiteC1:
      "1. Risikoerhebung/Screening/Assessment, 2. Voraussetzungen/Verfahrensregelung, 3. Maßnahmenplanung, 4. Durchführung, 5. Information/Beratung/Schulung/Anleitung, 6. Evaluation. Jedes Kriterium hat S/P/E (Donabedian 1966).",
    rueckseiteB1:
      "1. Risiko prüfen, 2. Voraussetzungen schaffen, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. Informieren + beraten, 6. Evaluieren.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP (2024)",
  },
  {
    id: "ce02-assess-kk-13",
    vorderseite: "Warum haben Expertenstandards juristische Bedeutung? Wer trägt welche Verantwortung?",
    rueckseiteC1:
      "Gelten als antizipiertes Sachverständigengutachten. Abweichung ohne Begründung = Fahrlässigkeit. Beweislastumkehr: Einrichtung muss standardkonformes Handeln nachweisen. Zwei Ebenen: PFK = Durchführungsverantwortung, Leitung = Organisationsverantwortung. Rechtsgrundlagen: § 113a SGB XI, § 137a SGB V.",
    rueckseiteB1:
      "Expertenstandards gelten vor Gericht wie ein Gutachten. Ohne Grund abweichen = fahrlässig. Pflegekraft = Durchführungsverantwortung, Leitung = Organisationsverantwortung. Gesetze: § 113a SGB XI, § 137a SGB V.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 113a SGB XI; DNQP (2024)",
  },
  {
    id: "ce02-assess-kk-14",
    vorderseite: "Welche Grenzen haben standardisierte Assessments? Was sagt der DNQP dazu?",
    rueckseiteC1:
      "Momentaufnahme, Interrater-Unterschiede, kulturelle Prägung, Risiko der Skala-Gläubigkeit. DNQP (Dekubitus 2017/2024) sieht die klinische Einschätzung der PFK als primäres Instrument — Skalen ergänzen, ersetzen nicht. Bei Abweichung zwischen Bauchgefühl und Skala: beides dokumentieren.",
    rueckseiteB1:
      "Assessments haben Grenzen: Momentaufnahmen, kulturell geprägt, nicht perfekt objektiv. DNQP sagt: Deine Einschätzung als Pflegekraft ist am wichtigsten. Skala hilft nur. Wenn dein Bauchgefühl anders sagt — beides aufschreiben und vorsichtig planen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP (2024)",
  },
];
