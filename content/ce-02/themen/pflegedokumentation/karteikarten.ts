// CE-02 Thema Pflegedokumentation & Übergabe — Karteikarten
// Quelle: content/ce-02/themen/pflegedokumentation/karteikarten-plan.md (14 Karten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_PFLEGEDOKUMENTATION_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-dokud-kk-01",
    vorderseite:
      "Welcher Grundsatz gilt für die Pflegedokumentation? (Rechtsgrundlage nennen)",
    rueckseiteC1:
      "Was nicht dokumentiert ist, gilt als nicht durchgeführt (Beweislastumkehr nach § 630f BGB).",
    rueckseiteB1:
      "Was nicht aufgeschrieben ist, gilt als nicht gemacht. Das steht im Gesetz (§ 630f BGB).",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB",
  },
  {
    id: "ce02-dokud-kk-02",
    vorderseite:
      "Welche 5 Pflichtinhalte muss jede Pflegedokumentation enthalten?",
    rueckseiteC1:
      "Durchgeführte Maßnahmen, Beobachtungen, ärztliche Anordnungen + Umsetzung, Reaktionen des Patienten, Besonderheiten/Abweichungen.",
    rueckseiteB1:
      "Was du gemacht hast, was du gesehen hast, was der Arzt gesagt hat, wie der Patient reagiert hat, alles Besondere.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB",
  },
  {
    id: "ce02-dokud-kk-03",
    vorderseite: "Welche 5 Regeln gelten für einen Pflegebericht?",
    rueckseiteC1:
      "Chronologisch, sachlich, wertfrei, in Ich-Form, konkret (mit Zahlen/Zeiten/Zitaten).",
    rueckseiteB1:
      "Zeitlich geordnet, sachlich, ohne Meinung, in Ich-Form ('Ich habe...'), mit Zahlen und Zeiten.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB; DNQP 2023",
  },
  {
    id: "ce02-dokud-kk-04",
    vorderseite:
      "Nenne die 6 Themenfelder der SIS (Strukturierte Informationssammlung, BMG 2014).",
    rueckseiteC1:
      "1. Kognition/Kommunikation, 2. Mobilität, 3. krankheitsbezogene Anforderungen, 4. Selbstversorgung, 5. soziale Beziehungen, 6. Haushalt/Wohnen (stationär: Tages-/Nachtgestaltung).",
    rueckseiteB1:
      "1. Denken/Sprechen, 2. Bewegung, 3. Krankheit, 4. Selbst-Versorgung, 5. Soziales Leben, 6. Wohnen und Alltag.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "BMG / Beikirch & Roes (2014)",
  },
  {
    id: "ce02-dokud-kk-05",
    vorderseite: "Nenne die 4 Elemente des Strukturmodells (BMG 2014).",
    rueckseiteC1:
      "1. SIS (Strukturierte Informationssammlung), 2. individueller Maßnahmenplan, 3. Berichteblatt (Fokus Abweichung), 4. Evaluation.",
    rueckseiteB1:
      "1. SIS (Infos sammeln), 2. Maßnahmen-Plan (planen), 3. Bericht (nur bei Besonderem), 4. Evaluation (prüfen).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "BMG / Beikirch & Roes (2014)",
  },
  {
    id: "ce02-dokud-kk-06",
    vorderseite:
      "Wofür stehen die Buchstaben S-B-A-R im SBAR-Schema (Leonard 2004)?",
    rueckseiteC1:
      "S = Situation (aktuelles Problem), B = Background (Vorgeschichte), A = Assessment (pflegerische Einschätzung), R = Recommendation (Empfehlung/Vorschlag).",
    rueckseiteB1:
      "S = was ist jetzt? B = was war vorher? A = was denkst du? R = was brauchst du?",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Leonard M. et al. (2004): BMJ Qual Saf",
  },
  {
    id: "ce02-dokud-kk-07",
    vorderseite:
      "Nenne die 3 Übergabeformen in der Pflege und je einen Vor- und Nachteil.",
    rueckseiteC1:
      "1. Mündlich (schnell, aber fehleranfällig). 2. Schriftlich (rechtssicher, aber keine Rückfragen). 3. Bedside-Handover (Patient einbezogen, mehr Sicherheit, aber zeitintensiver).",
    rueckseiteB1:
      "1. Mündlich (schnell, aber vergisst man was). 2. Schriftlich (immer lesbar, aber kann nicht fragen). 3. Am Bett (Patient dabei, mehr Sicherheit, aber dauert länger).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2023",
  },
  {
    id: "ce02-dokud-kk-08",
    vorderseite:
      "Was ist der Unterschied zwischen SBAR und ISBAR? Wofür steht das I?",
    rueckseiteC1:
      "ISBAR = Identification + SBAR. Das I steht vor S-B-A-R und identifiziert Anrufer + Patient (Name, Geburtsdatum, Station). WHO-Empfehlung seit 2007 zur Vermeidung von Patientenverwechslungen.",
    rueckseiteB1:
      "ISBAR = I + SBAR. I = Identification: Wer bist du? Wer ist der Patient? (Name, Geburtstag). WHO empfiehlt ISBAR seit 2007.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "WHO Patient Safety Alliance (2007)",
  },
  {
    id: "ce02-dokud-kk-09",
    vorderseite:
      "Nenne je 2 Vor- und Nachteile von Papier- und elektronischer Pflegedokumentation.",
    rueckseiteC1:
      "Papier: + ausfallsicher, günstig. − schwer lesbar, keine Suche. eDoku: + lesbar, durchsuchbar, automatische Warnungen. − systemabhängig, Klick-Fatigue, Kosten.",
    rueckseiteB1:
      "Papier: + geht immer, günstig. − schwer lesbar, keine Suche. eDoku: + lesbar, suchbar, Warnungen. − Serverausfall, viele Klicks, teuer.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB; DSGVO",
  },
  {
    id: "ce02-dokud-kk-10",
    vorderseite:
      "Wie lange müssen Pflegedokumentationen aufbewahrt werden? (Rechtsgrundlage)",
    rueckseiteC1:
      "10 Jahre nach § 630f Abs. 3 BGB (nach Abschluss der Behandlung). Bei Minderjährigen bis zum 28. Lebensjahr. Bei Strahlentherapie 30 Jahre (Röntgenverordnung).",
    rueckseiteB1:
      "10 Jahre (§ 630f BGB). Bei Kindern bis zum 28. Geburtstag. Bei Strahlentherapie 30 Jahre.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 630f Abs. 3 BGB",
  },
  {
    id: "ce02-dokud-kk-11",
    vorderseite:
      "Wie korrigiert man einen Fehler in der handschriftlichen Pflegedokumentation korrekt?",
    rueckseiteC1:
      "1. Einmal durchstreichen (Original lesbar lassen), 2. Korrektur daneben schreiben, 3. Datum + Uhrzeit + Handzeichen. Verboten: Tippex, Überkleben, Ausradieren, Rückdatieren (§ 267 StGB Urkundenfälschung).",
    rueckseiteB1:
      "1. Einmal durchstreichen (Alt muss lesbar bleiben), 2. Korrektur daneben, 3. Datum + Kürzel. Verboten: Tippex, Rückdatieren — sonst Urkundenfälschung.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB; § 267 StGB",
  },
  {
    id: "ce02-dokud-kk-12",
    vorderseite:
      "Welche 4 Ausnahmen von der Schweigepflicht (§ 203 StGB) gibt es in der Pflege?",
    rueckseiteC1:
      "1. Einwilligung des Patienten, 2. Gesetzliche Meldepflicht (z.B. § 6 IfSG), 3. Lebensgefahr (rechtfertigender Notstand § 34 StGB), 4. Gesetzlicher Betreuer/Vormund mit nachgewiesener Vollmacht.",
    rueckseiteB1:
      "1. Patient erlaubt es, 2. Gesetz verlangt es (z.B. Tuberkulose), 3. Lebensgefahr, 4. Gesetzlicher Betreuer mit Vollmacht.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 203 StGB; § 34 StGB; § 6 IfSG",
  },
  {
    id: "ce02-dokud-kk-13",
    vorderseite:
      "Gliedere eine Meldung an den Arzt bei Hypoglykämie-Verdacht nach ISBAR (5 Teile, je 1 Beispielsatz).",
    rueckseiteC1:
      "I: 'Schwester X, Station Y, Patientin Z, geb. TT.MM.JJ.' S: 'BZ 48 mg/dl, apathisch.' B: 'Diabetikerin, Insulin vor 2h, kein Frühstück.' A: 'Vermute Hypoglykämie.' R: 'Bitte sofort kommen, soll ich Glukose bereithalten?'",
    rueckseiteB1:
      "I: Wer bist du, welche Patientin? S: Was ist jetzt? (BZ 48, apathisch). B: Was war vorher? (Diabetes, Insulin, kein Essen). A: Was vermutest du? (Unterzuckerung). R: Was brauchst du? (Kommen + Glukose bereithalten?).",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Leonard M. et al. (2004); WHO (2007)",
  },
  {
    id: "ce02-dokud-kk-14",
    vorderseite:
      "Welche 5 Fehler werden in unsachlichen Pflegeberichten am häufigsten gemacht?",
    rueckseiteC1:
      "1. Wertung der Persönlichkeit ('typisch'), 2. Unsachliche Sprache ('gerast'), 3. Fehlende konkrete Angaben (Zeit/Ort/Zahlen), 4. Spekulationen/Fragen statt Fakten ('Hätten wir...'), 5. Urteile statt Beobachtung ('hört nicht zu').",
    rueckseiteB1:
      "1. Meinungen über die Person ('typisch'), 2. Unsachliche Wörter ('gerast'), 3. Keine Zeit, kein Ort, keine Zahlen, 4. Fragen statt Fakten, 5. Urteile statt Beobachtung.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 630f BGB; DNQP 2023",
  },
];
