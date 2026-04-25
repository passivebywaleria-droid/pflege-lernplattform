// CE-02 Thema Schlaf & Schlafhygiene — Karteikarten
// Quelle: content/ce-02/themen/schlaf/karteikarten-plan.md (9 Karteikarten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_SCHLAF_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-schlaf-kk-01",
    vorderseite: "Wie lange dauert ein Schlafzyklus — und wie viele Zyklen hat eine normale Nacht?",
    rueckseiteC1:
      "Ein Schlafzyklus dauert ca. 90 Minuten. Pro Nacht: 4-6 Zyklen. Jeder Zyklus wechselt zwischen NREM (N1-N3) und REM. Tiefschlaf (N3) dominiert die erste Nachthälfte, REM die zweite.",
    rueckseiteB1:
      "Ein Schlafzyklus dauert ca. 90 Minuten. Pro Nacht hast du 4 bis 6 Zyklen. Jeder hat NREM (N1, N2, N3) und REM. Tiefschlaf früh, Traumschlaf gegen Morgen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AASM Scoring Manual 2020",
  },
  {
    id: "ce02-schlaf-kk-02",
    vorderseite: "Was ist der wichtigste Zeitgeber für den zirkadianen Rhythmus — und wo sitzt die zentrale innere Uhr?",
    rueckseiteC1:
      "Der wichtigste Zeitgeber ist Licht (vor allem morgens). Die zentrale innere Uhr ist der Nucleus suprachiasmaticus (SCN) im Hypothalamus. Das Hormon Melatonin wird bei Dunkelheit ausgeschüttet.",
    rueckseiteB1:
      "Licht ist das wichtigste Signal für die innere Uhr. Die Uhr sitzt im Nucleus suprachiasmaticus im Gehirn. Melatonin macht abends müde.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Borbély 1982; DGSM S3-Leitlinie 2017",
  },
  {
    id: "ce02-schlaf-kk-03",
    vorderseite: "Wie viele Stunden Schlaf empfiehlt die National Sleep Foundation für: (a) Neugeborene, (b) Erwachsene, (c) Über 65-Jährige?",
    rueckseiteC1:
      "(a) Neugeborene (0-3 Mon): 14-17 h. (b) Erwachsene (18-64 J): 7-9 h. (c) Ältere (65+): 7-8 h. Individuelle Bandbreite groß. Qualität und Erholungsgefühl wichtiger als genaue Stundenzahl.",
    rueckseiteB1:
      "(a) Neugeborene: 14-17 Stunden. (b) Erwachsene: 7-9 Stunden. (c) Über 65 Jahre: 7-8 Stunden. Qualität ist wichtiger als die genaue Zahl.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: false,
    quelle: "National Sleep Foundation 2015",
  },
  {
    id: "ce02-schlaf-kk-04",
    vorderseite: "Ab wann spricht man klinisch von einer chronischen Insomnie nach DGSM S3-Leitlinie? Nenne die 4 Hauptkriterien.",
    rueckseiteC1:
      "(1) Ein-, Durchschlafstörung oder frühes Erwachen, (2) mindestens 3 Nächte pro Woche, (3) über mindestens 3 Monate, (4) mit Tagesbeeinträchtigung (Müdigkeit, Konzentration, Stimmung). Unter 3 Monaten = Kurzzeit-Insomnie.",
    rueckseiteB1:
      "(1) Schlafprobleme (einschlafen, durchschlafen, zu früh aufwachen), (2) mindestens 3 Nächte pro Woche, (3) über 3 Monate, (4) Probleme am Tag (müde, unkonzentriert). Unter 3 Monaten = Kurzzeit-Insomnie.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DGSM S3-Leitlinie 2017; ICSD-3 (AASM 2023)",
  },
  {
    id: "ce02-schlaf-kk-05",
    vorderseite: "Welche Parasomnien treten typischerweise im NREM-Schlaf (1. Nachthälfte) vs. im REM-Schlaf (2. Nachthälfte) auf? Nenne je 2 Beispiele.",
    rueckseiteC1:
      "NREM-Parasomnien (1. Nachthälfte, Tiefschlaf): Schlafwandeln (Somnambulismus), Pavor nocturnus, Schlaftrunkenheit. REM-Parasomnien (2. Nachthälfte): Albträume, REM-Schlafverhaltensstörung (RBD), Schlafparalyse.",
    rueckseiteB1:
      "NREM früh in der Nacht: Schlafwandeln, Nachtschreck (Pavor nocturnus). REM spät in der Nacht: Albträume, Träume ausleben (RBD).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: false,
    quelle: "ICSD-3 (AASM 2023)",
  },
  {
    id: "ce02-schlaf-kk-06",
    vorderseite: "Was bedeuten die 8 Buchstaben im STOP-BANG-Screening für obstruktive Schlafapnoe — und ab welchem Punktwert besteht erhöhtes OSA-Risiko?",
    rueckseiteC1:
      "Snoring, Tired, Observed apnea, Pressure (Hypertonie), BMI > 35, Age > 50, Neck > 40 cm, Gender (männlich). ≥ 3 Ja = erhöhtes Risiko → Schlaflabor empfohlen. Goldstandard-Therapie bei OSA: nCPAP.",
    rueckseiteB1:
      "Schnarchen, Müdigkeit am Tag, Atempausen beobachtet, Bluthochdruck, BMI über 35, Alter über 50, Nackenumfang über 40 cm, Mann. 3 oder mehr Ja → Risiko hoch → Schlaflabor.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Chung F. 2008; DGSM S3-Leitlinie SBAS 2020",
  },
  {
    id: "ce02-schlaf-kk-07",
    vorderseite: "Nenne 3 Kategorien von Schlaf-Störfaktoren im Krankenhaus mit je 1-2 Beispielen. Und: Nenne 3 Kernmaßnahmen des Sleep Bundle.",
    rueckseiteC1:
      "(1) Umgebung: Lärm (Monitore, Kollegen), Licht, Mitpatient. (2) Medizinisch/Pflegerisch: Vitalzeichenkontrollen, Medikation, Blutabnahme 5-6 Uhr. (3) Psychisch: Schmerzen, Angst, Sundowning. Sleep Bundle: Zimmerrunden reduzieren, Flüsterton nachts, Monitore stumm, Medikamentenzeiten clustern, Patient nach Gewohnheiten fragen.",
    rueckseiteB1:
      "(1) Umgebung: Lärm, Licht, Mitpatient. (2) Pflegerisch: Blutdruckmessen, Medikamente, Blutabnahme. (3) Psychisch: Schmerzen, Angst. Sleep Bundle: Flüstern, Monitore leiser, Maßnahmen zusammenlegen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Kamdar et al. 2012; DGSM 2020",
  },
  {
    id: "ce02-schlaf-kk-08",
    vorderseite: "Was ist die 20-Minuten-Regel der Schlafhygiene (Stimulus-Kontrolle nach Bootzin)? Warum funktioniert sie?",
    rueckseiteC1:
      "Wer nach 20 Minuten im Bett nicht eingeschlafen ist: aufstehen, in anderen Raum gehen, ruhige Tätigkeit (lesen, kein Bildschirm). Zurück ins Bett erst bei echter Müdigkeit. Prinzip: Das Bett soll mit Schlaf konditioniert werden, nicht mit Wachliegen/Grübeln. Bei chronischer Insomnie ist KVT-I die Therapie erster Wahl — wirksamer als Schlafmittel.",
    rueckseiteB1:
      "Nach 20 Minuten ohne Schlaf: aufstehen, ruhige Tätigkeit, erst zurück wenn müde. Das Gehirn lernt: Bett = schlafen. KVT-I wirkt besser als Schlaftabletten.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGSM S3-Leitlinie 2017 (Bootzin 1972)",
  },
  {
    id: "ce02-schlaf-kk-09",
    vorderseite: "Warum sind Z-Substanzen (Zolpidem, Zopiclon) und Benzodiazepine bei älteren Patienten problematisch? Nenne 3 Gründe und 3 pflegerische Beobachtungspunkte.",
    rueckseiteC1:
      "3 Gründe: (1) Sturzrisiko +40-60% (Muskelrelaxation + Sedierung), (2) Abhängigkeit bereits nach 2-4 Wochen (trotz Marketing), (3) Delir-Risiko, paradoxe Wirkung (Agitation statt Sedierung). Beers-Liste (AGS 2023) — potenziell inadäquate Medikation ab 65 J. 3 Pflegerische Beobachtungspunkte: (1) Sturzprophylaxe (Nachtlicht, Rufanlage, Toilettengang begleiten), (2) Hangover-Effekt morgens — Vorsicht beim Aufstehen, (3) Delir-Zeichen beobachten (CAM-Screening).",
    rueckseiteB1:
      "3 Gründe: Stürze (+40-60%), Abhängigkeit nach 2-4 Wochen, Delir. Beers-Liste: nicht ab 65 J. Pflege: Nachtlicht anmachen, Toilettengang begleiten, auf Verwirrtheit achten.",
    tag: "krankheitslehre",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Beers-Liste AGS 2023; DGSM S3-Leitlinie 2017",
  },
];
