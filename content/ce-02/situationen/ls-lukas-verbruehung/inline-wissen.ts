// CE-02 Situation Lukas — Inline-Wissens-Bausteine
// Themen: saeuglingspflege, haut, pflegeprozess, ernaehrungsgrundlagen
// Bausteine: 12 · Verteilt ueber 6 Phasen · Lehr-Patient: Lukas
// Generiert: 2026-04-26

import type { ContentStep } from "../../../_types";

// ============================================================
// PHASE 1 — INFORMIEREN (2 Bausteine)
// ============================================================

/**
 * 1A — U-Untersuchungen + STIKO + Tetanus-Impfung
 * Position: VOR ce02-lukas-info-04-u-heft-impfstatus
 * Begriffe: U-Untersuchungen, STIKO, Tetanus-Impfung
 */
export const CE02_LUKAS_INLINE_01A_U_UNTERSUCHUNG: ContentStep = {
  stepId: "ce02-lukas-info-03b-u-untersuchung",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 1,
  kompetenzbereich: "I.1",
  quellen: [
    "Gemeinsamer Bundesausschuss — Kinder-Richtlinie 2022",
    "STIKO — Empfehlungen des Robert Koch-Instituts 2024",
    "Hoehl/Kullick 2019 — Gesundheits- und Kinderkrankenpflege Kap. 8",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-info-u-untersuchung",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du weisst jetzt, was U-Untersuchungen und STIKO-Impfungen sind. Gleich pruefst du Lukas U-Heft — und erkennst, ob alles aktuell ist.",
  contentC1: {
    title: "U-Untersuchungen und Impfstatus — was du im U-Heft suchst",
    body: "",
    glossarBegriffe: ["U-Untersuchungen", "STIKO", "Tetanus-Impfung"],
  },
  contentB1: {
    title: "Was steht im U-Heft?",
    body: "",
    glossarBegriffe: ["U-Untersuchungen", "Tetanus-Impfung"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-u-untersuchungen",
    storyAufhaenger:
      "Sandra hat Lukas U-Heft mitgebracht. Ein gelbes Heft mit Stempeln und Eintragungen. U6 ist durchgefuehrt, U7 steht noch aus. Aber was sagt dir das genau? Und warum ist der Impfstatus bei einer Verbruehung relevant?",
    storyAufhaengerB1:
      "Sandra hat Lukas gelbes Heft dabei. Es zeigt, welche Untersuchungen er hatte und welche Impfungen. Warum ist das jetzt wichtig?",
    kerntext:
      "**U-Untersuchungen — Vorsorge fuer Kinder:**\n\n• **U1-U9** sind gesetzlich vorgesehene Vorsorgeuntersuchungen fuer Kinder von Geburt bis 5 Jahre. Sie pruefen Entwicklung, Gewicht, Motorik, Sprache, Hoeren, Sehen.\n\n• Lukas (2,5 Jahre): **U6** (10.-12. Monat) ist durch. **U7** (21.-24. Monat) ist ueberfaellig — nicht dramatisch, aber relevant fuer den Kinderschutz-Screening: Fehlende Vorsorgen koennen ein Hinweis auf Versorgungsluecken sein.\n\n• **STIKO** (Staendige Impfkommission am RKI) empfiehlt den Impfkalender. Bei 2,5 Jahren sollten Grundimmunisierungen gegen Tetanus, Diphtherie, Pertussis, Polio, Hib, Hepatitis B abgeschlossen sein.\n\n• **Tetanus-Impfung bei Verbruehung:** Thermische Wunden (Verbruehung, Verbrennung) sind per se kein Tetanus-Risiko — Tetanus braucht anaerobe Bedingungen (Erde, Rost). Aber: Bei offenen Wundflechen und Kontamination ist der Impfstatus trotzdem relevant. Bei vollstaendiger Grundimmunisierung → kein Handlungsbedarf.\n\nQuelle: (G-BA Kinder-RL 2022; STIKO/RKI 2024; Hoehl/Kullick 2019)",
    kerntextB1:
      "**Was sind U-Untersuchungen?**\n\n• Regelmässige Checks fuer Babys und Kinder: Gewicht, Entwicklung, Sprache, Motorik.\n• **U1 bis U9**: Von Geburt bis 5 Jahre. Lukas hat U6 — U7 fehlt noch.\n• **STIKO**: Die STIKO empfiehlt, welche Impfungen Kinder wann brauchen.\n• **Tetanus-Impfung**: Wichtig bei offenen Wunden. Bei Verbruehung pruefen: Hat Lukas alle Impfungen? Ja → kein Problem.\n• **Kinderschutz**: Wenn Vorsorge-Untersuchungen fehlen, kann das ein Hinweis sein. U7 fehlt — das notierst du.",
    faustregel:
      "**U-Heft immer pruefen bei Kinderaufnahme.** Fehlende Vorsorgen + fehlende Impfungen = Dokumentationspflicht im Kinderschutz-Screening.",
    faustregelB1:
      "Bei jedem Kind: U-Heft anschauen. Fehlende Untersuchungen oder Impfungen aufschreiben.",
    spektrum: [
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Saeugling: U2-U4 relevant",
        kurzbeschreibung:
          "Bei Emilia (6 Wochen) sind U1-U3 relevant. Bei Lukas (2,5 Jahre) U6-U7. Gleiches System, andere Altersstufe.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Erwachsener: Tetanus-Auffrischung alle 10 Jahre",
        kurzbeschreibung:
          "Bei Erwachsenen: STIKO empfiehlt Tetanus-Auffrischung alle 10 Jahre. Kein U-Heft, aber Impfpass pruefen.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Lukas (2,5 Jahre) hat U6 durch, U7 fehlt. Warum ist das relevant — und was bedeutet der Impfstatus bei einer Verbruehung?",
      rueckseite:
        "U7 (21.-24. Monat) ueberfaellig → notieren im Kinderschutz-Screening (fehlende Vorsorge = moegliches Warnsignal, kein Beweis). STIKO: Mit 2,5 J. sollte Grundimmunisierung abgeschlossen sein (Tetanus, Diphtherie, Pertussis u.a.). Tetanus bei Verbruehung: Thermische Wunden sind kein typisches Tetanus-Risiko (anaerobe Bedingungen fehlen), aber Impfstatus bei offener Wunde trotzdem pruefen. Faustregel: U-Heft + Impfpass bei jeder Kinderaufnahme pruefen.",
    },
  },
};

/**
 * 1B — Deeskalation (Grundlagen, erste Erwaehnung)
 * Position: VOR ce02-lukas-info-03-kinderschutz-erklaeren (frueh, da Vater Kevin angespannt)
 * Begriffe: Deeskalation
 */
export const CE02_LUKAS_INLINE_01B_DEESKALATION: ContentStep = {
  stepId: "ce02-lukas-info-02c-deeskalation",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "II.1",
  quellen: [
    "Schulz von Thun 2014 — Kommunikationsmodelle",
    "ProDeMa 2020 — Professionelles Deeskalationsmanagement",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-info-deeskalation",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["saeuglingspflege"],
  transition:
    "Du weisst jetzt, wie Deeskalation funktioniert. Das wirst du brauchen — Vater Kevin ist angespannt und das Kinderschutz-Screening steht bevor.",
  contentC1: {
    title: "Deeskalation — Angespannte Eltern professionell begleiten",
    body: "",
    glossarBegriffe: ["Deeskalation"],
  },
  contentB1: {
    title: "Was tun, wenn ein Elternteil laut wird?",
    body: "",
    glossarBegriffe: ["Deeskalation"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-deeskalation",
    storyAufhaenger:
      "Kevin (31) steht im Flur. Arme verschraenkt, Kiefer angespannt. Er hat Angst: um seinen Sohn, vor dem Krankenhaus, vor dem Kinderschutz-Screening. Wenn du jetzt sagst \"Wir muessen ueber Kinderschutz sprechen\", kann die Situation kippen. Deeskalation beginnt VOR dem Konflikt.",
    storyAufhaengerB1:
      "Kevins Koerpersprache sagt: Ich habe Angst und bin bereit zu kaempfen. Wenn du das Kinderschutz-Thema ansprichst, kann er laut werden. Wie bereitest du dich vor?",
    kerntext:
      "**Deeskalation — 5 Prinzipien fuer angespannte Situationen:**\n\n• **1. Eigene Haltung pruefen:** Bist du ruhig? Wenn du selbst angespannt bist, uebertraegt sich das. Tief durchatmen, offene Koerperhaltung, keine verschraenkten Arme.\n\n• **2. Zuhoeren vor Erklaeren:** Kevin will gehoert werden. \"Ich sehe, dass Sie sich Sorgen machen. Was bewegt Sie gerade am meisten?\" — Bevor du dein Thema bringst.\n\n• **3. Validieren, nicht beschwichtigen:** \"Ihre Sorge ist verstaendlich\" statt \"Beruhigen Sie sich\". Gefuehle anerkennen, nicht kleinreden.\n\n• **4. Transparenz:** \"Ich erklaere Ihnen genau, warum wir diese Fragen stellen. Das ist Standard, kein Vorwurf.\" Unklarheit erzeugt Angst, Angst erzeugt Aggression.\n\n• **5. Raumwechsel als Technik:** Wenn es laut wird — ruhig vorschlagen: \"Moechten wir kurz in den Elternraum gehen? Dort koennen wir in Ruhe sprechen.\" Ortswechsel unterbricht das Erregungsmuster.\n\nQuelle: (ProDeMa 2020; Schulz von Thun 2014)",
    kerntextB1:
      "**Was tun, wenn jemand laut wird?**\n\n• **Bleib ruhig.** Atme tief durch. Offene Haltung — keine verschraenkten Arme.\n• **Zuhoeren:** Frage zuerst: \"Was macht Ihnen Sorgen?\" Lass ihn reden.\n• **Gefuehle anerkennen:** \"Ich verstehe, dass Sie sich Sorgen machen.\" Nicht sagen: \"Beruhigen Sie sich!\"\n• **Erklaeren:** Sag genau warum du die Fragen stellst. \"Das ist Standard. Kein Vorwurf.\"\n• **Raumwechsel:** Wenn es zu laut wird: \"Moechten wir in den Elternraum gehen?\" Ortswechsel hilft.",
    faustregel:
      "**Zuhoeren → Validieren → Transparenz.** Nie: \"Beruhigen Sie sich.\" Immer: \"Ich verstehe Ihre Sorge.\"",
    faustregelB1:
      "Erst zuhoeren. Dann Gefuehle anerkennen. Dann erklaeren. Nie sagen: Beruhigen Sie sich!",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Abwehr bei Demenz",
        kurzbeschreibung:
          "Bei Herr Bauer ist Abwehr Ausdruck von Ueberforderung und Angst (Demenz). Deeskalation dort: Validation, langsam, Vertrautes nutzen.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Sprachbarriere + Scham",
        kurzbeschreibung:
          "Bei Herrn Nguyen ist die Anspannung durch Sprachbarriere und Scham (Stoma) bedingt. Deeskalation dort: Dolmetscher, Wuerdeschutz.",
      },
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Bagatellisierung als Selbstschutz",
        kurzbeschreibung:
          "Frau M. wird nicht laut — sie verharmlost. Andere Form der Abwehr, gleiche Strategie: Zuhoeren, nicht konfrontieren.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Kevin (Lukas Vater) verschraenkt die Arme und spannt den Kiefer an, als er vom Kinderschutz-Screening hoert. Wie deeskalierst du?",
      rueckseite:
        "1) Eigene Ruhe pruefen. 2) Zuhoeren: \"Was bewegt Sie gerade?\" 3) Validieren: \"Ihre Sorge ist verstaendlich.\" 4) Transparenz: \"Das ist Standard, kein Vorwurf.\" 5) Raumwechsel anbieten wenn es eskaliert. Nie: \"Beruhigen Sie sich.\" Nie: Konfrontation vor dem Kind. Quelle: ProDeMa 2020, Schulz von Thun 2014. Faustregel: Zuhoeren → Validieren → Transparenz.",
    },
  },
};

// ============================================================
// PHASE 2 — BEOBACHTEN (3 Bausteine)
// ============================================================

/**
 * 2A — Verbruehungsgrad
 * Position: VOR ce02-lukas-beob-03-wundgradierung-mc
 * Begriffe: Verbruehungsgrad
 */
export const CE02_LUKAS_INLINE_02A_VERBRUEHUNGSGRAD: ContentStep = {
  stepId: "ce02-lukas-beob-02b-verbruehungsgrad",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGV/GNPI S2k-Leitlinie Thermische Verletzungen im Kindesalter 2021",
    "Pallua/Bernasconi 2011 — Verbrennungschirurgie Kap. 4",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-beob-verbruehungsgrad",
  tag: "krankheitslehre",
  themaPrimaer: "haut",
  themenSekundaer: ["saeuglingspflege"],
  transition:
    "Du kannst jetzt die Verbruehungsgrade unterscheiden. Gleich ordnest du Lukas Verbruehung dem richtigen Grad zu.",
  contentC1: {
    title: "Verbruehungsgrade bei Kindern — Grade, Tiefe, Konsequenzen",
    body: "",
    glossarBegriffe: ["Verbruehungsgrad"],
  },
  contentB1: {
    title: "Wie schwer ist eine Verbruehung?",
    body: "",
    glossarBegriffe: ["Verbruehungsgrad"],
  },
  inlineWissen: {
    bausteinRef: "haut-verbruehungsgrad",
    storyAufhaenger:
      "Lukas Unterarm und Schulter sind rot, feucht, teilweise mit Blasen bedeckt. Sandra fragt: \"Ist das schlimm?\" Du siehst die Wunde, aber wie ordnest du sie fachlich ein? Die Gradeinteilung entscheidet ueber Schmerztherapie, Verbandmaterial und Prognose.",
    storyAufhaengerB1:
      "Lukas Haut ist rot und hat Blasen. Sandra fragt: Ist das schlimm? Die Antwort haengt vom Grad ab — wie tief ist der Schaden?",
    kerntext:
      "**Verbruehungsgrade — Einteilung nach Tiefe:**\n\n• **Grad 1**: Nur Epidermis betroffen. Roetung, Schmerz, keine Blasen. Heilt ohne Narbe in 3-5 Tagen.\n\n• **Grad 2a** (oberflaechlich dermal): Epidermis + obere Dermis. **Feuchte Blasen**, Wundgrund rosa, starker Schmerz (Nervenendigungen intakt). Heilt in 10-14 Tagen, meist ohne Narbe. → **Lukas hat Grad 2a.**\n\n• **Grad 2b** (tief dermal): Bis in tiefe Dermis. Blasen oft geplatzt, Wundgrund weisslich, weniger Schmerz (Nervenenden teilweise zerstoert). Narbengefahr hoch, oft OP noetig.\n\n• **Grad 3**: Gesamte Haut zerstoert. Weiss-grau, lederartig, KEIN Schmerz (Nerven komplett zerstoert). Immer OP + Hauttransplantation.\n\n• **Kinderhaut ist duenner** als Erwachsenenhaut → gleiche Temperatur verursacht tiefere Schaeden. Bei 70-75 °C Tee reichen 2-3 Sekunden fuer Grad 2a.\n\n• **KOF-Bestimmung bei Kindern**: Handflaeche des Kindes = ~1 % KOF (Handflaechen-Regel). Lukas: ~15 % KOF = mittelgross, stationaer.\n\nQuelle: (DGV/GNPI S2k 2021; Pallua 2011)",
    kerntextB1:
      "**Wie tief ist der Schaden?**\n\n• **Grad 1**: Nur rot, keine Blasen. Heilt in 3-5 Tagen.\n• **Grad 2a**: Blasen, feucht, rosa, STARKER Schmerz. Heilt in 10-14 Tagen. → **Das hat Lukas.**\n• **Grad 2b**: Blasen geplatzt, weisslich, weniger Schmerz. Oft OP noetig.\n• **Grad 3**: Weiss-lederartig, kein Schmerz. Immer OP.\n\n**Bei Kindern:** Die Haut ist duenner. Heisser Tee schadet schneller als bei Erwachsenen. Lukas: ~15 % Koerperoberflaeche betroffen → stationaer.",
    faustregel:
      "**Grad 2a = feuchte Blasen + starker Schmerz + rosa Wundgrund.** Bei Kindern: Hautduenner → gleiche Temperatur verursacht tieferen Schaden.",
    faustregelB1:
      "Grad 2a: Blasen, feucht, rosa, starker Schmerz. Kinderhaut ist duenner — heisses Wasser schadet schneller.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II: Hautschaedigung durch Druck",
        kurzbeschreibung:
          "Anderer Mechanismus (Druck statt Hitze), aehnliches Ergebnis: Teilverlust der Haut. Dekubitus Kat. II entspricht ungefaehr Verbruehung Grad 2a in der Tiefe.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Peristomale Hautschaedigung durch Leckage",
        kurzbeschreibung:
          "Bei Herrn Nguyen ist es Stuhl auf der Haut — chemische Schaedigung statt thermische. Andere Ursache, gleiche Beobachtungslogik.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Lukas hat feuchte Blasen, rosa Wundgrund und starke Schmerzen. Welcher Verbruehungsgrad — und warum ist Kinderhaut besonders gefaehrdet?",
      rueckseite:
        "Grad 2a (oberflaechlich dermal): Feuchte Blasen, rosa Wundgrund, starker Schmerz (Nerven intakt). Heilt 10-14 Tage, meist narbenfrei. Kinderhaut duenner als Erwachsenenhaut → 70-75 °C Tee reicht fuer Grad 2a in 2-3 Sek. KOF: Handflaeche des Kindes = ~1 %. Lukas ~15 % → stationaer. Faustregel: Grad 2a = feuchte Blasen + starker Schmerz + rosa.",
    },
  },
};

/**
 * 2B — Exsikkose + Holliday-Segar + Vitalwerte Kleinkind
 * Position: VOR ce02-lukas-beob-05-trinken-mundschleimhaut
 * Begriffe: Exsikkose, Holliday-Segar-Regel, Herzfrequenz, Atemfrequenz, SpO₂, Normwerte Kleinkind
 */
export const CE02_LUKAS_INLINE_02B_EXSIKKOSE_VITALWERTE: ContentStep = {
  stepId: "ce02-lukas-beob-04b-exsikkose-vitalwerte",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Holliday/Segar 1957 — Grundformel Fluessigkeitsbedarf",
    "Hoehl/Kullick 2019 — Kap. 12 Vitalzeichen bei Kindern",
    "GNPI S2k-Leitlinie Dehydration bei Kindern 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-beob-exsikkose",
  tag: "krankheitslehre",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["ernaehrungsgrundlagen"],
  transition:
    "Du weisst jetzt, wie du Exsikkose erkennst und warum Lukas Vitalwerte andere Normwerte haben als Erwachsene. Gleich pruefst du seinen Trinkstatus.",
  contentC1: {
    title: "Exsikkose, Holliday-Segar und Vitalwerte im Kleinkindalter",
    body: "",
    glossarBegriffe: ["Exsikkose", "Holliday-Segar-Regel", "Herzfrequenz", "Atemfrequenz", "SpO₂", "Normwerte Kleinkind"],
  },
  contentB1: {
    title: "Trinkt Lukas genug? Und was ist normal bei einem Kleinkind?",
    body: "",
    glossarBegriffe: ["Exsikkose", "Herzfrequenz", "Atemfrequenz"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-exsikkose-vitalwerte",
    storyAufhaenger:
      "Lukas trinkt seit dem Unfall kaum — die Mundschleimhaut ist leicht trocken. Am Monitor steht: HF 142, AF 28, SpO₂ 98 %. Bei einem Erwachsenen waere HF 142 ein Alarm. Bei einem 2,5-Jaehrigen ist es — fast normal. Aber nur fast.",
    storyAufhaengerB1:
      "Lukas trinkt wenig seit dem Unfall. Sein Mund ist etwas trocken. Am Monitor: HF 142, AF 28, SpO₂ 98 %. Sind diese Werte normal fuer ein Kind?",
    kerntext:
      "**Exsikkose bei Kleinkindern:**\n\n• **Exsikkose** (Austrocknung) = Fluessigkeitsverlust > 5 % des Koerpergewichts. Bei Kindern gefaehrlicher als bei Erwachsenen: hoeherer Wasseranteil (60-75 % KG), schnellerer Umsatz.\n\n• **Zeichen:** Trockene Mundschleimhaut, stehende Hautfalte (am Bauch testen), eingesunkene Fontanelle (bei Saeuglingen), wenig Urin, Weinen ohne Traenen.\n\n• **Holliday-Segar-Formel** (Grundfluessigkeitsbedarf/24h):\n  Erste 10 kg: 100 ml/kg → Lukas (13,2 kg): 10 × 100 = 1.000 ml\n  11-20 kg: 50 ml/kg → 3,2 × 50 = 160 ml\n  **Gesamt: 1.160 ml/24h Grundbedarf.** Bei Verbruehung + Fieber: Mehrbedarf 10-20 %.\n\n**Vitalwerte Kleinkind (2-3 Jahre) vs. Erwachsener:**\n\n| Parameter | Kleinkind | Erwachsener |\n|-----------|-----------|-------------|\n| Herzfrequenz | 90-140/min | 60-80/min |\n| Atemfrequenz | 20-30/min | 12-18/min |\n| SpO₂ | ≥95 % | ≥96 % |\n\nLukas: HF 142 = leicht erhoehrt (Schmerz/Stress), AF 28 = normal, SpO₂ 98 % = gut.\n\nQuelle: (Holliday/Segar 1957; Hoehl/Kullick 2019; GNPI 2019)",
    kerntextB1:
      "**Trinkt Lukas genug?**\n\n• **Exsikkose** heisst: der Koerper hat zu wenig Wasser. Bei Kindern geht das schneller als bei Erwachsenen.\n• **Zeichen:** Trockener Mund, wenig Pipi, klebrige Lippen.\n• **Wie viel braucht Lukas?** Ca. 1.160 ml pro Tag (Holliday-Segar-Formel). Wegen der Verbruehung sogar etwas mehr.\n\n**Was ist normal bei einem Kleinkind?**\n• Herz: 90-140 Schlaege/Min (bei Erwachsenen: 60-80). Lukas: 142 = leicht erhoehrt (Schmerz).\n• Atmung: 20-30/Min (bei Erwachsenen: 12-18). Lukas: 28 = normal.\n• Sauerstoff: ≥95 %. Lukas: 98 % = gut.",
    faustregel:
      "**Kinder-Vitalwerte ≠ Erwachsenen-Werte.** HF 140 bei Kleinkind = normal bis leicht erhoehrt. HF 140 bei Erwachsenem = Alarm.",
    faustregelB1:
      "Kinder haben einen schnelleren Herzschlag und schnellere Atmung als Erwachsene. Das ist normal!",
    spektrum: [
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Saeugling: noch duennere Reserven",
        kurzbeschreibung:
          "Bei Emilia (6 Wochen) ist die Exsikkose-Gefahr noch groesser — Saeuglingen fehlen Reserven schneller. Holliday-Segar: 100 ml/kg fuer die ersten 10 kg.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Exsikkose bei alten Menschen",
        kurzbeschreibung:
          "Herr Bauer trinkt zu wenig wegen Demenz. Bei Kindern und alten Menschen ist Exsikkose gleich gefaehrlich — aber aus unterschiedlichen Gruenden.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Trinkverweigerung bei COPD",
        kurzbeschreibung:
          "Frau Kovac trinkt 800 ml — deutlich zu wenig. Exsikkose-Risiko durch andere Ursache (Angst vor Inkontinenz), gleiches Ergebnis.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Lukas (2,5 J., 13,2 kg) hat HF 142, AF 28, SpO₂ 98 %. Sind die Werte normal — und wie viel Fluessigkeit braucht er pro Tag?",
      rueckseite:
        "HF 142 = leicht erhoehrt (Norm 90-140), AF 28 = normal (Norm 20-30), SpO₂ 98 % = gut (≥95 %). Holliday-Segar: 10 × 100 + 3,2 × 50 = 1.160 ml/24h Grundbedarf. Bei Verbruehung + Schmerz: +10-20 %. Exsikkose-Zeichen: trockene Schleimhaut, wenig Urin, stehende Hautfalte. Faustregel: Kinder-Werte ≠ Erwachsenen-Werte. HF 140 bei Kleinkind = normal.",
    },
  },
};

/**
 * 2C — Haematom
 * Position: VOR ce02-lukas-beob-04-haematome-screening
 * Begriffe: Haematom
 */
export const CE02_LUKAS_INLINE_02C_HAEMATOM: ContentStep = {
  stepId: "ce02-lukas-beob-03b-haematom",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie Kindesmisshandlung 2019",
    "Hoehl/Kullick 2019 — Kap. 5 Kinderschutz",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-beob-haematom",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du weisst jetzt, welche Haematome normal sind und welche Fragen aufwerfen. Gleich untersuchst du Lukas — sachlich, nicht verdaechtigend.",
  contentC1: {
    title: "Haematome bei Kindern — was ist normal, was faellt auf?",
    body: "",
    glossarBegriffe: ["Haematom"],
  },
  contentB1: {
    title: "Blaue Flecken bei Kindern — wann ist es normal?",
    body: "",
    glossarBegriffe: ["Haematom"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-haematom-screening",
    storyAufhaenger:
      "Beim Ausziehen fuer die Wundversorgung siehst du: Lukas hat einen blauen Fleck am rechten Schienbein und einen kleinen am Stirnrand. Beides typische Stellen fuer ein aktives 2,5-jaehriges Kind. Aber du pruefst trotzdem systematisch — weil das deine Pflicht ist.",
    storyAufhaengerB1:
      "Lukas hat blaue Flecken am Schienbein und an der Stirn. Ist das normal? Die meisten kleinen Kinder haben blaue Flecken. Trotzdem musst du genau hinschauen.",
    kerntext:
      "**Haematome bei Kindern — Normal vs. verdaechtig:**\n\n• **Typische Lokalisationen** (Spielen, Fallen): Stirn, Schienbein, Knie, Ellenbogen. Kinder ab Laufalter haben fast immer blaue Flecken an vorspringenden Koerperstellen.\n\n• **Atypische Lokalisationen** (AWMF S3 2019): Wangen, Ohren, Hals, Oberarme (Innenseite), Ruecken, Gesaess, Oberschenkel-Innenseite. Hier entstehen Haematome selten durch Spielen.\n\n• **Formmerkmale:** Fingerabdruck-foermig, streifenfoermig (Gurt/Gegenstand), beidseitig symmetrisch → immer dokumentieren und melden.\n\n• **Bei Lukas:** Schienbein + Stirn = typisch fuer aktives Kleinkind. Kein Handlungsbedarf — aber dokumentieren, weil es Teil des Kinderschutz-Screenings ist.\n\n• **Wichtig:** Du beurteilst nicht, ob Misshandlung vorliegt. Du dokumentierst sachlich und meldest Auffaelligkeiten dem Arzt/Kinderschutzbeauftragten.\n\nQuelle: (AWMF S3 Kindesmisshandlung 2019; Hoehl/Kullick 2019)",
    kerntextB1:
      "**Blaue Flecken bei Kindern:**\n\n• **Normal:** Stirn, Schienbein, Knie, Ellenbogen — dort fallen Kinder hin.\n• **Ungewoehnlich:** Wangen, Ohren, Hals, Oberschenkel innen, Ruecken. Dort entstehen blaue Flecken selten beim Spielen.\n• **Lukas:** Schienbein + Stirn = normal fuer ein aktives Kind.\n• **Deine Aufgabe:** Sachlich aufschreiben. Nicht beschuldigen. Bei ungewoehnlichen Stellen: Arzt informieren.",
    faustregel:
      "**Haematome ueber Knochenvorspruengen = typisch. Haematome an geschuetzten Stellen (Ohren, Hals, Innenseiten) = dokumentieren + melden.**",
    faustregelB1:
      "Blaue Flecken an Stirn und Schienbein = normal bei Kindern. An Ohren, Hals oder Innenseiten = aufschreiben und Arzt sagen.",
    spektrum: [
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Saeugling: Haematome VOR Laufalter sind immer auffaellig",
        kurzbeschreibung:
          "Bei Emilia (6 Wochen, noch nicht mobil): Jedes Haematom waere ungewoehnlich. Bei Lukas (2,5, laeuft) sind Schienbein-Haematome normal.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Lukas hat blaue Flecken am Schienbein und an der Stirn. Wie bewertest du das im Kinderschutz-Screening?",
      rueckseite:
        "Schienbein + Stirn = typische Lokalisationen fuer aktives Kleinkind (ueber Knochenvorspruengen). Atypisch waeren: Wangen, Ohren, Hals, Oberarm-Innenseite, Gesaess. Formmerkmale beachten: fingerfoermig/streifenfoermig = melden. Pflege-Aufgabe: Sachlich dokumentieren, bei Auffaelligkeiten Arzt/Kinderschutzbeauftragten informieren. Keine eigene Beurteilung ueber Misshandlung. Faustregel: Knochen = normal, geschuetzte Stellen = dokumentieren + melden.",
    },
  },
};

// ============================================================
// PHASE 3 — PLANEN (2 Bausteine)
// ============================================================

/**
 * 3A — Holliday-Segar + Fluessigkeitsbilanz + Wundauflage
 * Position: VOR ce02-lukas-plan-01-massnahmen-matrix
 * Begriffe: Holliday-Segar-Regel, Fluessigkeitsbilanz, Wundauflage, Fluessigkeitsbedarf, Grundfluessigkeitsbedarf
 */
export const CE02_LUKAS_INLINE_03A_FLUESSIGKEIT: ContentStep = {
  stepId: "ce02-lukas-plan-00b-fluessigkeit-wundauflage",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Holliday/Segar 1957",
    "DGV/GNPI S2k-Leitlinie 2021",
    "AWMF S3-Leitlinie Wundmanagement 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-plan-fluessigkeit",
  tag: "pflege",
  themaPrimaer: "ernaehrungsgrundlagen",
  themenSekundaer: ["haut", "saeuglingspflege"],
  transition:
    "Du weisst jetzt, wie du den Fluessigkeitsbedarf berechnest und welche Wundauflagen passen. Gleich erstellst du den Massnahmenplan.",
  contentC1: {
    title: "Fluessigkeitsbedarf bei Verbruehung + Wundauflagen im Kindesalter",
    body: "",
    glossarBegriffe: ["Holliday-Segar-Regel", "Fluessigkeitsbilanz", "Wundauflage", "Fluessigkeitsbedarf", "Grundfluessigkeitsbedarf"],
  },
  contentB1: {
    title: "Wie viel muss Lukas trinken — und was kommt auf die Wunde?",
    body: "",
    glossarBegriffe: ["Fluessigkeitsbilanz", "Wundauflage"],
  },
  inlineWissen: {
    bausteinRef: "ernaehrungsgrundlagen-fluessigkeit-wundauflage",
    storyAufhaenger:
      "Lukas trinkt seit dem Unfall nur schluckweise. Gleichzeitig verliert er ueber die Wunde Fluessigkeit — 15 % KOF ohne intakte Hautbarriere bedeutet erhoehten Verlust. Du brauchst zwei Plaene: Einen fuer die Fluessigkeit, einen fuer die Wunde.",
    storyAufhaengerB1:
      "Lukas trinkt wenig und verliert Fluessigkeit ueber die Wunde. Wie viel braucht er? Und was kommt auf die Wunde?",
    kerntext:
      "**Fluessigkeitsbedarf bei Verbruehung:**\n\n• **Grundbedarf** (Holliday-Segar): 1.160 ml/24h fuer 13,2 kg.\n• **Mehrbedarf** durch Verbruehung: + ~10-20 % (erhoehte Perspiratio ueber geschaedigte Haut, Schmerz-Stress-Metabolismus, ggf. Fieber). → Ziel: ~1.300-1.400 ml/24h.\n• **Fluessigkeitsbilanz**: Oral + IV vs. Urin (Windel wiegen: 1 g = 1 ml) + Perspiratio.\n\n**Wundauflagen bei Verbruehung Grad 2a:**\n\n• **Feuchte Wundbehandlung** ist Standard (DGV/GNPI 2021): Feuchtes Milieu foerdert Epithelialisierung, reduziert Schmerz, schuetzt vor Austrocknung.\n• **Geeignet:** Fettgaze (Jelonet, Adaptic), Silber-haltige Auflagen (Mepilex Ag), Hydrokolloid bei kleinen Flaechern.\n• **NICHT geeignet:** Trockene Kompressen (kleben an der Wunde, Schmerz beim Wechsel), Puder, Hausmittel (Mehl, Zahnpasta).\n• **Verbandwechsel-Frequenz:** Alle 1-2 Tage, bei Kindern: Analgesie VOR dem Wechsel planen.\n\nQuelle: (Holliday/Segar 1957; DGV/GNPI 2021; AWMF 2019)",
    kerntextB1:
      "**Wie viel muss Lukas trinken?**\n\n• Grundbedarf: ca. 1.160 ml pro Tag (Holliday-Segar-Formel).\n• Wegen der Verbruehung + Schmerz: etwas mehr, ca. 1.300-1.400 ml.\n• Urin kontrollieren: Windel wiegen (1 Gramm = 1 ml Urin).\n\n**Was kommt auf die Wunde?**\n\n• Feuchte Auflage — das ist der Standard. Fettgaze oder Silber-Auflagen.\n• NICHT: Trockene Kompressen (kleben!), kein Puder, keine Hausmittel.\n• Vor dem Verbandwechsel: Schmerzmittel geben. Kinder haben Angst — Ablenkung nutzen.",
    faustregel:
      "**Verbruehung Grad 2a = feucht verbinden, nie trocken.** Holliday-Segar + 10-20 % Mehrbedarf bei Wundflaechenverlust.",
    faustregelB1:
      "Wunde feucht verbinden (nie trocken!). Lukas braucht ca. 1.300 ml pro Tag — mehr als normal wegen der Verbruehung.",
    karteikarte: {
      vorderseite:
        "Lukas (13,2 kg, Verbruehung Grad 2a, 15 % KOF) trinkt kaum. Wie hoch ist sein Fluessigkeitsbedarf — und welche Wundauflagen sind korrekt?",
      rueckseite:
        "Holliday-Segar: 1.000 + 160 = 1.160 ml Grundbedarf. + 10-20 % Mehrbedarf (Wunde, Fieber) = ~1.300-1.400 ml/24h. Wundauflage: Feuchte Wundbehandlung (DGV/GNPI 2021): Fettgaze, Silber-Auflagen. Nie: trockene Kompressen, Puder, Hausmittel. Verbandwechsel alle 1-2 Tage, Analgesie VOR Wechsel. Bilanzierung: Windel wiegen (1 g = 1 ml). Faustregel: Verbruehung 2a = feucht verbinden.",
    },
  },
};

/**
 * 3B — Interprofessionelle Zusammenarbeit
 * Position: VOR ce02-lukas-plan-05-interprofessionell
 * Begriffe: Interprofessionelle Zusammenarbeit
 */
export const CE02_LUKAS_INLINE_03B_INTERPROFESSIONELL: ContentStep = {
  stepId: "ce02-lukas-plan-04b-interprofessionell",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "IV.1",
  quellen: [
    "WHO 2010 — Framework for Action on Interprofessional Education & Collaborative Practice",
    "Sachverstaendigenrat Gesundheit 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-plan-interprofessionell",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["saeuglingspflege"],
  transition:
    "Du weisst jetzt, welche Berufsgruppen bei Lukas zusammenarbeiten. Gleich ordnest du Aufgaben den richtigen Fachleuten zu.",
  contentC1: {
    title: "Interprofessionelle Zusammenarbeit bei Kinderverbruehung",
    body: "",
    glossarBegriffe: ["Interprofessionelle Zusammenarbeit"],
  },
  contentB1: {
    title: "Wer kuemmert sich worum bei Lukas?",
    body: "",
    glossarBegriffe: ["Interprofessionelle Zusammenarbeit"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-interprofessionell",
    storyAufhaenger:
      "Bei Lukas kommen zusammen: Kinderaerztin, Chirurg, Pflegefachkraft, Kinderschutzbeauftragte, Psychologin, Sozialarbeiterin. Jeder hat eine eigene Aufgabe — aber alle arbeiten am selben Ziel: Lukas Genesung und die Sicherheit der Familie.",
    storyAufhaengerB1:
      "Viele verschiedene Fachleute kuemmern sich um Lukas. Wer macht was?",
    kerntext:
      "**Interprofessionelle Zusammenarbeit bei kindlicher Verbruehung:**\n\n• **Kinderaerztin:** Diagnostik, Schmerztherapie-Anordnung, Entscheidung ueber Kostenuebernahme/Verlegung.\n• **Chirurg:** Beurteilung der Wundtiefe, Entscheidung ueber OP (bei Grad 2b/3), Verbandwechsel-Protokoll.\n• **Pflege:** Wundversorgung, Bilanzierung, Vitalzeichen, Elternbegleitung, Kinderschutz-Screening (Ersterhebung).\n• **Kinderschutzbeauftragte(r):** Bewertung der Screening-Ergebnisse, ggf. Meldung an Jugendamt (§ 4 KKG).\n• **Psychologe/Psychologin:** Traumabegleitung (Kind + Eltern), Krisenintervention bei belasteten Eltern.\n• **Sozialarbeit:** Familienhilfe, Entlassplanung, Anbindung an Netzwerke.\n\n• **Pflege-Rolle:** Du bist die Schnittstelle — du siehst das Kind am meisten und kommunizierst mit allen Berufsgruppen. Dokumentation ist dein Werkzeug.\n\nQuelle: (WHO 2010; SVR 2023)",
    kerntextB1:
      "**Wer macht was?**\n\n• **Aerztin:** Untersucht Lukas, verschreibt Schmerzmittel.\n• **Chirurg:** Schaut wie tief die Wunde ist. Entscheidet ueber OP.\n• **Du (Pflege):** Wunde versorgen, Trinkmenge pruefen, Eltern begleiten, Kinderschutz-Bogen ausfuellen.\n• **Kinderschutz-Fachkraft:** Prueft ob zu Hause alles sicher ist.\n• **Psychologe:** Hilft Lukas und den Eltern mit der Angst.\n• **Sozialarbeit:** Hilft der Familie wenn noetig.\n\nDu bist am meisten bei Lukas. Deshalb erzaehlst du den anderen Fachleuten, was du siehst.",
    faustregel:
      "**Pflege = Schnittstelle im interprofessionellen Team.** Du siehst das Kind am meisten — deine Beobachtungen steuern die Zusammenarbeit.",
    faustregelB1:
      "Du bist am meisten beim Kind. Was du siehst und aufschreibst, hilft allen anderen Fachleuten.",
    karteikarte: {
      vorderseite:
        "Welche Berufsgruppen arbeiten bei Lukas zusammen — und was ist die Rolle der Pflege?",
      rueckseite:
        "Aerztin (Diagnostik, Schmerz), Chirurg (Wundtiefe, OP), Pflege (Versorgung, Bilanzierung, Eltern, Kinderschutz-Screening), Kinderschutzbeauftragte (§ 4 KKG), Psychologie (Trauma), Sozialarbeit (Familienhilfe). Pflege = Schnittstelle: meiste Kontaktzeit, dokumentiert, kommuniziert mit allen. Faustregel: Pflege sieht das Kind am meisten → Beobachtungen steuern das Team.",
    },
  },
};

// ============================================================
// PHASE 4 — DURCHFUEHREN (2 Bausteine)
// ============================================================

/**
 * 4A — Analgesie + Mundpflege Kleinkind
 * Position: VOR ce02-lukas-dur-01-vorbereitung-kinder
 * Begriffe: Analgesie, Mundpflege Kleinkind
 */
export const CE02_LUKAS_INLINE_04A_ANALGESIE: ContentStep = {
  stepId: "ce02-lukas-dur-00c-analgesie-mundpflege",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.2",
  quellen: [
    "AWMF S3-Leitlinie Schmerztherapie bei Kindern 2021",
    "Hoehl/Kullick 2019 — Kap. 14",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-dur-analgesie",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["mundpflege"],
  transition:
    "Du weisst jetzt, warum Analgesie VOR dem Verbandwechsel kommen muss. Gleich bereitest du alles vor — inklusive Ablenkung.",
  contentC1: {
    title: "Analgesie und Mundpflege bei Kleinkindern",
    body: "",
    glossarBegriffe: ["Analgesie (= Schmerzmittel)", "Mundpflege Kleinkind"],
  },
  contentB1: {
    title: "Schmerzmittel und Mundpflege bei Lukas",
    body: "",
    glossarBegriffe: ["Analgesie (= Schmerzmittel)", "Mundpflege Kleinkind"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-analgesie-mundpflege",
    storyAufhaenger:
      "Der Verbandwechsel steht an. Lukas KUSS-Skala ist bei 8/10. Ohne Schmerzmittel vorher wird der Wechsel fuer Lukas traumatisch — und fuer dich fast unmoeglich. Timing ist alles: Analgesie muss WIRKEN bevor du anfaengst.",
    storyAufhaengerB1:
      "Lukas hat starke Schmerzen (KUSS 8/10). Bevor du die Wunde versorgen kannst, muss er Schmerzmittel bekommen. Und: wann machst du Mundpflege bei einem Kleinkind?",
    kerntext:
      "**Analgesie vor Massnahmen — Timing entscheidend:**\n\n• **Schmerztherapie VOR dem Verbandwechsel** ist Pflicht (AWMF S3 2021). Ibuprofen-Saft wirkt nach 30-45 Min, Metamizol i.v. nach 15-20 Min. Paracetamol-Zaepfchen: 45-60 Min einplanen.\n\n• **KUSS-Skala** (Kindliche Unbehagens- und Schmerz-Skala): 0-10 Punkte. ≥4 = Interventionsbedarf. Lukas mit 8 = starker Schmerz → Analgesie Pflicht.\n\n• **Nicht-medikamentoese Massnahmen:** Ablenkung (Seifenblasen, Musik, Knisterfolie), elterliche Naehe (Sandra darf bleiben und Lukas Hand halten), ruhige Stimme, Tempo des Kindes respektieren.\n\n**Mundpflege bei Kleinkind:**\n\n• Kleinkinder koennen nicht gurgeln → Mundpflege mit feuchtem Tupfer (kein Chlorhexidin bei Kindern <6 Jahre).\n• Trinkbecher statt Schnabeltasse (foerdert Mundmotorik).\n• Bei reduzierter Trinkmenge: Mundschleimhaut feucht halten durch regelmaessiges Anbieten.\n\nQuelle: (AWMF S3 2021; Hoehl/Kullick 2019)",
    kerntextB1:
      "**Schmerzmittel VOR dem Verbandwechsel:**\n\n• Schmerzmittel-Saft braucht 30-45 Minuten zum Wirken. Also: VORHER geben, nicht erst wenn es wehtut.\n• KUSS-Skala: 8 von 10 = starker Schmerz. Schmerzmittel ist Pflicht.\n• **Ablenkung hilft:** Seifenblasen, Musik, Mama darf dabei sein und Haendchen halten.\n\n**Mundpflege bei Kleinkind:**\n• Lukas kann nicht gurgeln → feuchten Tupfer nehmen.\n• Regelmaessig Trinken anbieten — haelt den Mund feucht.\n• Trinkbecher statt Schnabeltasse.",
    faustregel:
      "**Analgesie VORHER, nicht waehrenddessen.** 30 Min Vorlauf einplanen. Ablenkung ist therapeutisch, nicht Spielerei.",
    faustregelB1:
      "Schmerzmittel 30 Minuten VOR dem Verbandwechsel geben. Ablenkung mit Seifenblasen oder Musik ist erlaubt und hilft.",
    karteikarte: {
      vorderseite:
        "Lukas (KUSS 8/10) braucht einen Verbandwechsel. Wie bereitest du die Analgesie vor — und wie machst du Mundpflege beim Kleinkind?",
      rueckseite:
        "Analgesie VOR Verbandwechsel: Ibuprofen-Saft 30-45 Min, Metamizol i.v. 15-20 Min, Paracetamol-Supp 45-60 Min. KUSS ≥4 = Interventionspflicht (AWMF S3 2021). Nicht-medikamentoes: Seifenblasen, Musik, Mutter anwesend. Mundpflege Kleinkind: Feuchter Tupfer (kein Chlorhexidin <6 J.), Trinkbecher, regelmaessig anbieten. Faustregel: Analgesie VORHER + 30 Min Vorlauf.",
    },
  },
};

/**
 * 4B — Raumwechsel als Deeskalationstechnik
 * Position: VOR ce02-lukas-dur-06-komplikation-vater-laut
 * Begriffe: Raumwechsel als Technik (Wiederbegegnung Deeskalation)
 */
export const CE02_LUKAS_INLINE_04B_RAUMWECHSEL: ContentStep = {
  stepId: "ce02-lukas-dur-05b-raumwechsel",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "II.1",
  quellen: [
    "ProDeMa 2020 — Professionelles Deeskalationsmanagement Stufe 4",
    "Schulz von Thun 2014",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-dur-raumwechsel",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["saeuglingspflege"],
  transition:
    "Du weisst jetzt, wie Raumwechsel als Deeskalationstechnik funktioniert. Gleich wird Vater Kevin laut — und du entscheidest.",
  contentC1: {
    title: "Raumwechsel als Deeskalationstechnik — Eskalation unterbrechen",
    body: "",
    glossarBegriffe: ["Deeskalation", "Raumwechsel als Technik"],
  },
  contentB1: {
    title: "Was tun, wenn es im Zimmer zu laut wird?",
    body: "",
    glossarBegriffe: ["Deeskalation"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-deeskalation",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-deeskalation",
      basisPatient: "Lukas (Phase 1)",
      vertiefung:
        "In Phase 1 hast du die 5 Deeskalations-Prinzipien gelernt (Zuhoeren, Validieren, Transparenz). Jetzt kommt Prinzip 5 in der Praxis: Kevin wird laut, Lukas erschrickt. Der **Raumwechsel** unterbricht das Erregungsmuster physisch — neuer Raum, neue Atmosphaere, neue Chance fuer ruhiges Gespraech.",
      vertiefungB1:
        "In Phase 1 hast du gelernt: Zuhoeren, Gefuehle anerkennen, Transparenz. Jetzt wird Kevin laut. Lukas erschrickt. Was tust du? Raumwechsel = den Raum wechseln. Das unterbricht die Situation.",
    },
    storyAufhaenger:
      "Kevin steht auf und sagt laut: \"Hoeren Sie auf, uns Vorwuerfe zu machen! Das kann jedem passieren!\" Lukas zuckt zusammen und faengt an zu weinen. Sandra wird blass. Der Raum ist geladen. Du hast 5 Sekunden fuer eine Entscheidung.",
    storyAufhaengerB1:
      "Kevin wird laut. Lukas weint. Sandra ist still. Du musst jetzt handeln — schnell und ruhig.",
    kerntext:
      "**Raumwechsel als Deeskalations-Technik (ProDeMa Stufe 4):**\n\n• **Warum funktioniert es?** Ein Ortswechsel unterbricht das physiologische Erregungsmuster: Puls senkt sich, Tunnelblick loest sich, neue Umgebung ermoeglicht Neuorientierung.\n\n• **Formulierung:** Ruhig, bestimmt, nicht als Strafe: \"Herr K., ich sehe, dass Sie sich Sorgen machen. Moechten wir kurz in den Elternraum gehen? Dort koennen wir in Ruhe sprechen — und Lukas bekommt hier seine Versorgung.\"\n\n• **Kind schuetzen:** Lukas ist 2,5 — er versteht den Inhalt nicht, aber spuert Lautstaerke und Angst. Trennung des Konflikts vom Kind ist primaer fuer das Kindeswohl.\n\n• **Wenn Kevin ablehnt:** Nicht zwingen. Stattdessen: \"Gut, dann sprechen wir hier weiter. Ich erklaere Ihnen alles Schritt fuer Schritt.\" Deeskalation heisst auch: Akzeptieren wenn der andere Weg nicht geht.\n\n• **Danach:** Gespraech im neuen Raum nutzen fuer: Kinderschutz-Erklaerung, Fragen beantworten, Angst ansprechen.\n\nQuelle: (ProDeMa 2020 Stufe 4; Schulz von Thun 2014)",
    kerntextB1:
      "**Raumwechsel — wie geht das?**\n\n• **Warum?** Neuer Raum = neue Atmosphaere. Der Stress sinkt.\n• **So sagst du es:** \"Herr K., moechten wir kurz in den Elternraum gehen? Dort koennen wir in Ruhe reden.\"\n• **Lukas schuetzen:** Er spuert die Lautstaerke. Nimm den Konflikt weg vom Kind.\n• **Wenn Kevin nein sagt:** Zwinge ihn nicht. Sage: \"Gut, dann erklaere ich alles hier.\" Bleib ruhig.",
    faustregel:
      "**Raumwechsel = Eskalation physisch unterbrechen.** Kind schuetzen, Elternteil nicht vor dem Kind konfrontieren.",
    faustregelB1:
      "Wenn es laut wird: Raumwechsel anbieten. Das schuetzt das Kind und beruhigt die Situation.",
    karteikarte: {
      vorderseite:
        "Kevin wird laut im Krankenzimmer. Lukas weint. Wie setzt du den Raumwechsel als Deeskalationstechnik ein?",
      rueckseite:
        "Raumwechsel = ProDeMa Stufe 4: Ortswechsel unterbricht physiologische Erregung (Puls sinkt, Tunnelblick loest sich). Formulierung: \"Moechten wir in den Elternraum gehen?\" Bestimmt, ruhig, keine Strafe. Primaeres Ziel: Kind schuetzen (Lukas spuert Lautstaerke). Bei Ablehnung: nicht zwingen, vor Ort weiterreden. Faustregel: Raumwechsel = Eskalation physisch unterbrechen.",
    },
  },
};

// ============================================================
// PHASE 5 — EVALUIEREN (1 Baustein)
// ============================================================

/**
 * 5A — Rötungswall + KUSS-Verlauf + Exsikkose (Evaluation)
 * Position: VOR ce02-lukas-eval-01-wundstatus
 * Begriffe: Exsikkose, Roetungswall, KUSS-Skala (Wiederbegegnung)
 */
export const CE02_LUKAS_INLINE_05A_WUNDEVALUATION: ContentStep = {
  stepId: "ce02-lukas-eval-00c-wundevaluation",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGV/GNPI S2k-Leitlinie 2021",
    "AWMF S3-Leitlinie Wundmanagement 2019",
    "Bueche/Zernikow 2015 — Schmerztherapie bei Kindern",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-eval-wundevaluation",
  tag: "pflege",
  themaPrimaer: "haut",
  themenSekundaer: ["saeuglingspflege", "ernaehrungsgrundlagen"],
  transition:
    "Du weisst jetzt, worauf du bei der Wund-Evaluation achtest. Gleich pruefst du Lukas Verbruehung — hat sich etwas veraendert?",
  contentC1: {
    title: "Wund-Evaluation bei Kindern — Roetungswall, KUSS-Verlauf, Exsikkose-Check",
    body: "",
    glossarBegriffe: ["Exsikkose", "Roetungswall (= Entzuendungszeichen um die Wunde)", "KUSS-Skala (= Schmerzmessung fuer Kinder)"],
  },
  contentB1: {
    title: "Wie pruefst du, ob es Lukas besser geht?",
    body: "",
    glossarBegriffe: ["Exsikkose", "KUSS-Skala (= Schmerzmessung fuer Kinder)"],
  },
  inlineWissen: {
    bausteinRef: "haut-wundevaluation-kinder",
    storyAufhaenger:
      "Es ist Nachmittag, 6 Stunden nach der Aufnahme. Der Verbandwechsel ist gemacht, Lukas hat getrunken, die Analgesie wirkt. Jetzt evaluierst du: Hat sich die Wunde veraendert? Wie viel hat er getrunken? Ist der Schmerz besser?",
    storyAufhaengerB1:
      "6 Stunden sind vergangen. Du pruefst: Sieht die Wunde anders aus? Hat Lukas genug getrunken? Wie sind die Schmerzen?",
    kerntext:
      "**Wund-Evaluation bei Verbruehung:**\n\n• **Roetungswall** (Erythemrand um die Wunde): Leichte Roetung (1-2 cm) = normale Entzuendungsreaktion. Zunehmende Roetung, Waerme, Schwellung, eitriges Exsudat → Infektionsverdacht → Arzt informieren.\n\n• **Exsudatmenge:** Verbruehung Grad 2a produziert in den ersten 24-48h reichlich seroeses (klares) Exsudat. Das ist normal. Veraenderung zu trueb/eitrig = Warnsignal.\n\n• **KUSS-Verlauf:** KUSS bei Aufnahme 8/10. Nach Analgesie + 6h: Ziel ist KUSS ≤4. Bei persistierend ≥6: Schmerzregime ueberpruefen (Arzt).\n\n• **Exsikkose-Re-Check:** Mundschleimhaut feucht? Urin in den letzten 4h? (Windel wiegen). Trinkprotokoll: Wie viel von den 1.300 ml Tagesziel erreicht? Wenn <50 %: Arzt informieren wegen i.v.-Gabe.\n\nQuelle: (DGV/GNPI 2021; AWMF 2019; Bueche/Zernikow 2015)",
    kerntextB1:
      "**Was pruefst du?**\n\n• **Wunde:** Ist die Roetung um die Wunde herum staerker geworden? Leichte Roetung = normal. Starke Roetung + Eiter = Arzt rufen.\n• **Schmerz:** KUSS war 8/10. Jetzt? Unter 4 waere gut. Wenn immer noch ueber 6 → Arzt.\n• **Trinken:** Hat Lukas genug getrunken? Mindestens 650 ml bis zum Nachmittag (Haelfte des Tagesziels). Weniger? → Arzt fragen wegen Infusion.\n• **Windel pruefen:** Windel wiegen = Urinmenge wissen.",
    faustregel:
      "**Roetungswall leicht = normal. Zunehmend + eitrig = Infekt.** KUSS-Ziel nach 6h: ≤4.",
    faustregelB1:
      "Leichte Roetung um die Wunde = normal. Staerker + Eiter = Arzt rufen. Schmerz-Ziel: unter 4.",
    karteikarte: {
      vorderseite:
        "Lukas (Verbruehung 2a, KUSS 8 bei Aufnahme): 6 Stunden spaeter — was evaluierst du und wann informierst du den Arzt?",
      rueckseite:
        "1) Roetungswall: leicht = normal, zunehmend/eitrig = Infekt → Arzt. 2) KUSS: Ziel ≤4 nach Analgesie, bei ≥6 → Arzt (Schmerzregime). 3) Exsikkose: Trinkprotokoll (Ziel 1.300 ml/24h), Windel wiegen, Mundschleimhaut pruefen. Bei <50 % Trinkmenge → i.v. 4) Exsudat: Seroes (klar) = normal Tag 1-2. Trueb/eitrig = Warnsignal. Faustregel: Roetungswall + KUSS + Trinkmenge = dein Evaluations-Dreieck.",
    },
  },
};

// ============================================================
// PHASE 6 — DOKUMENTIEREN (1 Baustein)
// ============================================================

/**
 * 6A — Sachliche Dokumentation (Kinderschutz)
 * Position: VOR ce02-lukas-dok-02-kinderschutz-doku
 * Begriffe: Sachliche Dokumentation
 */
export const CE02_LUKAS_INLINE_06A_SACHLICHE_DOKU: ContentStep = {
  stepId: "ce02-lukas-dok-01b-sachliche-doku",
  phase: 6,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "IV.1",
  quellen: [
    "AWMF S3-Leitlinie Kindesmisshandlung 2019",
    "§ 4 KKG (Bundeskinderschutzgesetz)",
    "BGB § 630f (Dokumentationspflicht)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-lukas-verbruehung-dok-sachliche-doku",
  tag: "pflege",
  themaPrimaer: "pflegedokumentation",
  themenSekundaer: ["pflegeprozess", "saeuglingspflege"],
  transition:
    "Du weisst jetzt, wie sachliche Kinderschutz-Dokumentation aussieht. Gleich ordnest du Beispielformulierungen — welche sind sachlich, welche wertend?",
  contentC1: {
    title: "Sachliche Dokumentation im Kinderschutz — beobachten, nicht bewerten",
    body: "",
    glossarBegriffe: ["Sachliche Dokumentation"],
  },
  contentB1: {
    title: "Wie schreibst du auf, was du beim Kinderschutz-Screening siehst?",
    body: "",
    glossarBegriffe: ["Sachliche Dokumentation"],
  },
  inlineWissen: {
    bausteinRef: "pflegedokumentation-kinderschutz",
    storyAufhaenger:
      "Du hast Lukas untersucht, das Kinderschutz-Screening durchgefuehrt, mit Sandra und Kevin gesprochen. Jetzt musst du aufschreiben was du gesehen und gehoert hast. Jedes Wort zaehlt — denn diese Dokumentation kann in einer Fallkonferenz oder vor Gericht gelesen werden.",
    storyAufhaengerB1:
      "Du musst aufschreiben was du gesehen hast. Bei Kinderschutz ist es besonders wichtig: Nur Fakten, keine Meinungen.",
    kerntext:
      "**Sachliche Dokumentation im Kinderschutz:**\n\n• **Beobachtungen trennen von Interpretationen:** Schreibe was du SIEHST, nicht was du DENKST. \"Haematom 2×3 cm, rechtes Schienbein, gruen-gelblich\" statt \"verdaechtiger blauer Fleck\".\n\n• **Wortwahl entscheidet:** \"Mutter weint, sagt: 'Es ist alles meine Schuld.'\" = sachlich. \"Mutter wirkt schuldbewusst\" = Interpretation. \"Vater wird laut\" = sachlich. \"Vater ist aggressiv\" = Wertung.\n\n• **Direkte Zitate nutzen:** \"Mutter berichtet: 'Lukas hat die Tasse vom Tisch gezogen.'\" — In Anfuehrungszeichen, woertlich, ohne Kuerzung.\n\n• **Koerperliche Befunde mit Mass:** Lokalisierung, Groesse (cm), Farbe, Form, Seitenvergleich. Keine Diagnosen (\"das sieht aus wie...\").\n\n• **Zeitangaben:** \"Mutter berichtet Unfall gegen 09:20 Uhr. Aufnahme Notaufnahme 10:15 Uhr.\" Zeitluecken dokumentieren, nicht erklaeren.\n\n• **Kinderschutz-Bogen:** Standardisiertes Formular nutzen (klinikspezifisch). Nie aendern, nie ergaenzen, nie weglassen.\n\nQuelle: (AWMF S3 2019; § 4 KKG; § 630f BGB)",
    kerntextB1:
      "**Wie schreibst du sachlich?**\n\n• Schreibe was du SIEHST: \"Blauer Fleck, 2×3 cm, rechtes Schienbein.\" Nicht: \"Verdaechtiger Fleck.\"\n• Schreibe was du HOERST: \"Mutter sagt: 'Lukas hat die Tasse gezogen.'\" — Genau so, in Anfuehrungszeichen.\n• **Keine Meinungen:** Nicht: \"Mutter wirkt schuldig.\" Sondern: \"Mutter weint.\"\n• **Nicht:** \"Vater ist aggressiv.\" Sondern: \"Vater wird lauter, steht auf, verschraenkt die Arme.\"\n• **Groessen in cm.** Farben genau beschreiben. Zeitpunkte aufschreiben.",
    faustregel:
      "**Sehen ≠ Bewerten. Schreibe Fakten, keine Interpretationen.** Jedes Wort kann vor Gericht gelesen werden.",
    faustregelB1:
      "Nur aufschreiben was du siehst und hoerst. Keine Meinungen. Jedes Wort kann spaeter wichtig werden.",
    karteikarte: {
      vorderseite:
        "Du dokumentierst das Kinderschutz-Screening bei Lukas. Welche Formulierung ist sachlich — und warum ist die Wortwahl so wichtig?",
      rueckseite:
        "Sachlich: \"Haematom 2×3 cm, Schienbein re., gruen-gelblich. Mutter: 'Lukas hat die Tasse gezogen.' Vater steht auf, wird lauter.\" Nicht sachlich: \"Verdaechtiger Fleck\", \"Mutter wirkt schuldig\", \"Vater aggressiv\". Prinzip: Beobachtung ≠ Interpretation. Direkte Zitate in Anfuehrungszeichen. Koerperbefunde mit cm + Farbe + Lokalisation. Kinderschutz-Bogen vollstaendig ausfuellen. Rechtsgrundlage: § 4 KKG, § 630f BGB. Faustregel: Sehen ≠ Bewerten.",
    },
  },
};

// ============================================================
// EXPORT — alle 12 Inline-Wissens-Bausteine
// ============================================================

export const CE02_LUKAS_VERBRUEHUNG_INLINE_WISSEN: ContentStep[] = [
  // Phase 1 — Informieren
  CE02_LUKAS_INLINE_01A_U_UNTERSUCHUNG,
  CE02_LUKAS_INLINE_01B_DEESKALATION,
  // Phase 2 — Beobachten
  CE02_LUKAS_INLINE_02A_VERBRUEHUNGSGRAD,
  CE02_LUKAS_INLINE_02B_EXSIKKOSE_VITALWERTE,
  CE02_LUKAS_INLINE_02C_HAEMATOM,
  // Phase 3 — Planen
  CE02_LUKAS_INLINE_03A_FLUESSIGKEIT,
  CE02_LUKAS_INLINE_03B_INTERPROFESSIONELL,
  // Phase 4 — Durchfuehren
  CE02_LUKAS_INLINE_04A_ANALGESIE,
  CE02_LUKAS_INLINE_04B_RAUMWECHSEL,
  // Phase 5 — Evaluieren
  CE02_LUKAS_INLINE_05A_WUNDEVALUATION,
  // Phase 6 — Dokumentieren
  CE02_LUKAS_INLINE_06A_SACHLICHE_DOKU,
];
