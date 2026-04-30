// CE-02 Situation Frau Schmidt — Phase 6: Dokumentieren
// Steps: 4 + 1 Inline-Wissen · Bloom: B2–B6 · Zeit: ~25–35 Min
// Quelle: phase-dokumentieren.md + inline-wissen-generator

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren",
  titelB1: "Dokumentation schreiben",
  kontext:
    "Es ist 14:00 Uhr, Übergabe naht. Du hast 20 Minuten bis zur Schichtübergabe. Frau Schmidts Entlassung ist in zwei Tagen. Du dokumentierst jetzt alles, was in den letzten 5 Tagen war — und planst die Entlassungsdokumentation mit. Deine Kollegin im Spätdienst muss sofort verstehen, was bei Frau Schmidt wichtig ist — ohne dass du nochmal erreichbar bist.",
  kontextB1:
    "Es ist 14:00 Uhr. In 20 Minuten ist Schicht-Übergabe. Frau Schmidt kommt in 2 Tagen nach Hause. Jetzt dokumentierst du: Was ist heute passiert? Du planst auch die Entlassungs-Dokumentation. Deine Kollegin im Spätdienst muss sofort verstehen: Was ist bei Frau Schmidt wichtig?",
  kernSteps: [
    // Step 6.1 — Freetext LANG: Pflegebericht schreiben
    {
      stepId: "ce02-schmidt-dok-01-pflegebericht-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
        "§ 2 PflBG — Ressourcenorientierte Pflege",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-dok-pflegebericht",
      tag: "pflege",
      contentC1: {
        title: "Pflegebericht — Frühdienst heute",
        body: "Schreibe den Pflegebericht für Frau Schmidt, Frühdienst heute. **Wichtig — § 630f BGB / DBfK-Pflegedokumentationsstandard:** Pflegedokumentation muss OBJEKTIV sein. Erlaubt sind: Beobachtungen, Messwerte, Handlungen, wörtliche Patientenzitate. NICHT erlaubt sind: Wertungen wie \"fachgerecht\", \"gut versorgt\", \"freut sich\". Statt Wertung den BEFUND beschreiben.\n\nDein Text soll enthalten: 1) Zustand der Haut (Hautfalten — Befund nach Inspektion), 2) BZ-Messwert (nüchtern + postprandial), 3) BZ-Tagesprofil-Trend (5 Tage), 4) Ernährungsgespräch (was besprochen, mit wörtlichem Patientenzitat statt Bewertung), 5) Fußbefund + Podologie-Termin (was beobachtet, was geleistet, KEINE Bewertung der Fremd-Leistung), 6) Inkontinenzversorgung (Beobachtung der Selbstständigkeit), 7) Verhalten/Stimmung — beschreiben, nicht interpretieren.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Pflege-Bericht — Frühdienst heute",
        body: "Schreibe einen Pflege-Bericht für Frau Schmidt — Frühdienst heute.\n\n**Wichtig:** Pflege-Dokumentation muss OBJEKTIV sein (§ 630f BGB).\n- Schreibe nur was du gesehen, gemessen, gemacht hast.\n- KEINE Wertungen wie \"gut\", \"fachgerecht\", \"freut sich\". Stattdessen: Befund beschreiben oder Frau Schmidt zitieren.\n\nDein Text soll enthalten:\n1. Haut der Falten: Wie sieht die Haut aus?\n2. Blutzucker: Welcher Wert?\n3. Blutzucker-Trend: Welche Werte über 5 Tage?\n4. Ernährungs-Gespräch: Was besprochen? Was hat Frau Schmidt wörtlich gesagt?\n5. Fuß-Befund: Was gesehen? Wer war heute morgen da?\n6. Inkontinenz-Versorgung: Wie hat sie es heute gemacht?\n7. Stimmung: Was hast du beobachtet?\n\nSchreibe kurz und sachlich.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Schreibe den vollständigen Pflegebericht für Frau Schmidt — Frühdienst heute. OBJEKTIVE Sprache, keine Wertungen (§ 630f BGB). (~120–180 Wörter)",
        musterantwort:
          "08:30 Morgenpflege durchgeführt. Hautfalten (submammär, inguinal, abdominal) inspiziert: Haut trocken, intakt, kein Erythem, kein Geruch. Trockentupfen, Faltenvlies eingelegt. Hautschutz-Creme dünn auf umgebende intakte Haut außerhalb der Falte aufgetragen. BZ nüchtern 08:00: 148 mg/dl (Trend Tag 1–5: 398/287/187/165/148, Zielwert < 130 noch nicht erreicht). BZ postprandial 12:00: 189 mg/dl (Ziel < 180). Ernährungsgespräch geführt; Frau Schmidt äußerte: \"Das macht Sinn mit dem Zucker.\" Ernährungsberaterin-Protokoll eingesehen. Fußinspektion: Befund Wagner Grad 1 unverändert, kein Ulkus. Podologin Frau X führte 09:00–09:30 Nagelpflege und Hautrissversorgung durch. Befund nach Behandlung: Nägel gekürzt, Risse trocken, kein Erythem. Inkontinenzversorgung: Frau Schmidt wechselte die Vorlage selbstständig, keine Hilfestellung erforderlich. Verhalten: zugewandt, im Gespräch aktiv beteiligt; Frau Schmidt äußerte zur bevorstehenden Entlassung: \"Ich freu mich daheim.\"",
        bewertungskriterien: [
          "Hautbefund (Inspektion aller Hautfalten, beobachteter Befund — KEINE Wertung)",
          "BZ-Werte (nüchtern + postprandial mit Zielbereich-Vergleich, ohne Bewertung)",
          "Ernährungsgespräch — Inhalt + WÖRTLICHES Patientenzitat (statt Interpretation)",
          "Fußbefund + Podologie-Termin: nur Fakten dokumentiert (Uhrzeit, Behandelnde, beobachteter Befund nach Behandlung) — KEINE Wertung der Podologen-Leistung wie \"fachgerecht\"",
          "Inkontinenzversorgung: beobachtete Selbstständigkeit, ohne Bewertung",
          "Verhalten/Stimmung: Beobachtung beschrieben (zugewandt, aktiv) ODER Patientenzitat — nicht interpretiert",
          "Objektive Sprache, Vergangenheitsform, keine Wertungen (§ 630f BGB / DBfK-Pflegedokumentationsstandard)",
        ],
        satzanfaengeB1: [
          "Haut der Falten: ___ (Befund).",
          "Blutzucker nüchtern heute: ___ mg/dl. Trend: ___",
          "Ernährungs-Gespräch: Frau Schmidt hat erzählt ___",
          "Fuß-Befund gemeldet an Stationsarzt. Podologen-Überweisung ___",
          "Inkontinenz-Versorgung: Frau Schmidt hat ___",
          "Stimmung: Frau Schmidt wirkte ___",
        ],
      },
    },

    // Step 6.1b — Inline-Wissen: Ernährungsdokumentation — was muss ins Protokoll?
    // Schüler hat gerade den freien Pflegebericht geschrieben (Step 6.1). Bevor er
    // das strukturierte Ernährungsprotokoll ausfüllt (Step 6.2), braucht er Wissen:
    // Was gehört in ein Ernährungsprotokoll, warum ist es Pflicht, welche Fehler sind typisch?
    {
      stepId: "ce02-schmidt-dok-01b-ernährungsdoku",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement zur Sicherstellung und Förderung der oralen Ernährung",
        "Kondrup J. et al. (2003): NRS 2002 — ESPEN Guidelines",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-dok-ernährungsprotokoll",
      tag: "pflege",
      themaPrimaer: "ernährungsassessment",
      themenSekundaer: ["ernährungsgrundlagen"],
      transition: "Du weißt jetzt was ins Protokoll gehört. Gleich füllst du es aus — für Frau Schmidt.",
      contentC1: {
        title: "Ernährungsprotokoll — was muss rein?",
        body: "",
        glossarBegriffe: ["Ernährungsprotokoll", "Trinkprotokoll", "Bilanzierung"],
      },
      contentB1: {
        title: "Was muss ins Ernährungs-Protokoll?",
        body: "",
        glossarBegriffe: ["Ernährungsprotokoll"],
      },
      inlineWissen: {
        bausteinRef: "ernährungsassessment-dokumentation",
        storyAufhaenger:
          "Du hast den Pflegebericht geschrieben. Aber Frau Schmidt bekommt zusätzlich ein Ernährungsprotokoll — 3 Tage lang, mit genaür Dokumentation jeder Mahlzeit. Warum reicht der Pflegebericht allein nicht?",
        storyAufhaengerB1:
          "Du hast den Pflege-Bericht geschrieben. Aber Frau Schmidt bekommt auch ein Ernährungs-Protokoll. Warum beides?",
        kerntext:
          "Das **Ernährungsprotokoll** ist ein standardisiertes Erfassungsinstrument (DNQP 2017). Es unterscheidet sich vom Pflegebericht:\n\n**Pflegebericht:** Freitext, narrativ, subjektiv. Beschreibt WAS passiert ist und WIE der Patient sich verhält.\n\n**Ernährungsprotokoll:** Strukturiert, quantitativ, objektiv. Dokumentiert WAS, WIEVIEL und WANN gegessen/getrunken wurde.\n\n**Pflicht-Inhalte (DNQP 2017):**\n\n• **Zeitpunkt** jeder Mahlzeit (Frühstück, Mittag, Abend, Zwischenmahlzeiten)\n\n• **Art und Menge** der Nahrung (\"1 Scheibe Vollkornbrot, 30 g Hüttenkäse\")\n\n• **Trinkmenge** (Trinkprotokoll) — Gesamtmenge pro Tag\n\n• **Besonderheiten**: Appetit, Übelkeit, Nahrungsverweigerung, Hilfe beim Essen\n\n• **Bilanzierung**: geschätzte Kalorien + Proteinmenge wenn möglich\n\n**Häufige Fehler:**\n\n• \"Gut gegessen\" statt konkreter Mengenangabe\n\n• Zwischenmahlzeiten und Getränke vergessen\n\n• Keine Unterscheidung was angeboten vs. was tatsächlich gegessen wurde\n\n**Bei Frau Schmidt:** 3-Tage-Protokoll als Grundlage für die Ernährungsberaterin. Ohne Protokoll fehlen Daten — die Beratung wird zum Raten.",
        kerntextB1:
          "Das **Ernährungs-Protokoll** ist ein Formular. Es zeigt genau: Was hat der Patient gegessen und getrunken?\n\n**Was muss rein:**\n\n• **Wann:** Frühstück, Mittag, Abend, Snacks\n\n• **Was und wie viel:** \"1 Scheibe Vollkorn-Brot mit Hüttenkäse\"\n\n• **Trinkmenge:** Wie viel getrunken? Wasser, Tee, Saft?\n\n• **Besonderheiten:** Appetit? Übelkeit? Hilfe beim Essen gebraucht?\n\n**Häufige Fehler:**\n\n• \"Hat gut gegessen\" — zu ungenau! Wie viel genau?\n\n• Snacks und Getränke vergessen\n\n**Warum bei Frau Schmidt?** Die Ernährungs-Beraterin braucht genaue Daten. Ohne Protokoll kann sie nicht helfen.",
        faustregel:
          "\"Gut gegessen\" ist keine Dokumentation. Menge, Art, Zeitpunkt — sonst kann die Ernährungsberaterin nicht arbeiten.",
        faustregelB1:
          "\"Gut gegessen\" reicht nicht. Schreib auf: Was genau, wie viel, wann.",
        spektrum: [
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "IDDSI-Stufe dokumentieren",
            kurzbeschreibung:
              "Bei ihm muss zusätzlich die Konsistenz dokumentiert werden (IDDSI-Stufe 3 = liquidisiert, Stufe 4 = püriert). Was er geschluckt hat vs. was aspiriert wurde.",
          },
          {
            patientName: "Herr Nguyen",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Ein- und Ausfuhr-Bilanz",
            kurzbeschreibung:
              "Bei Stoma: Ernährungsprotokoll + Stoma-Ausscheidungs-Bilanz (Menge, Konsistenz, Farbe). Ohne beides kann der Flüssigkeits- und Elektrolytbedarf nicht berechnet werden.",
          },
          {
            patientName: "Emilia (Säugling)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Trinkprotokoll bei Bronchiolitis",
            kurzbeschreibung:
              "Bei Säuglingen: ml pro Mahlzeit + Trinkbereitschaft + Erbrechen. Trinkmenge <50 % des Tagesbedarfs = Arzt informieren. Jede Mahlzeit dokumentieren.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Im Pflegebericht steht: \"Frau Schmidt hat gut gegessen.\" Reicht das als Ernährungsdokumentation?",
          rueckseite:
            "Nein. \"Gut gegessen\" ist nicht quantifizierbar. Ein Ernährungsprotokoll dokumentiert: **Was** (Art), **wie viel** (Menge), **wann** (Zeitpunkt), **Besonderheiten** (Appetit, Hilfe). DNQP 2017: Pflicht bei Ernährungsintervention.\n\nSpektrum: Petrov (IDDSI-Stufe), Nguyen (Stoma-Bilanz), Emilia (Trinkmenge in ml).\n\nFaustregel: **Menge, Art, Zeitpunkt — sonst kann die Beraterin nicht arbeiten.**",
        },
      },
    },

    // Step 6.2 — Cloze: Ernährungsprotokoll-Lückentext
    {
      stepId: "ce02-schmidt-dok-02-ernährungsprotokoll-lückentext",
      phase: 6,
      stepType: "cloze",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-dok-ernährungsprotokoll",
      tag: "pflege",
      contentC1: {
        title: "Ernährungsprotokoll — Lückentext",
        body: "Fülle das Ernährungsprotokoll für Frau Schmidt aus. 6 Lücken.",
        glossarBegriffe: ["NRS 2002", "Protein"],
      },
      contentB1: {
        title: "Ernährungs-Protokoll — Lückentext",
        body: "Fülle die Lücken aus.",
        glossarBegriffe: ["NRS 2002", "Protein"],
      },
      question: {
        fragetext:
          "Fülle alle Lücken im Ernährungsprotokoll aus.",
        cloze: {
          textWithBlanks:
            "Ernährungsprotokoll Frau Schmidt, geb. 1958, Zimmer 8.\n\nNRS-2002-Score bei Aufnahme: [BLANK_1] (= 0 Ernährungsstatus + 1 Erkrankungsschwere + 0 Alter < 70). Screeningdatum: [BLANK_2].\n\nGLIM-Diagnose: Mangelernährung Stadium 1 (trotz BMI 38) — Albumin 31 g/l, reduzierte Proteinzufuhr.\n\nProtein-Bedarf: ca. [BLANK_3] g/Tag (Berechnung: 1,2 g × Idealgewicht ca. 56 kg nach BMI 22 bei 1,60 m Körpergröße; ESPEN 2017 bei Mangelernährung). NICHT mit Istgewicht 98 kg rechnen!\n\nZiel: täglich mindestens 3 [BLANK_4]-reiche Mahlzeiten.\n\nBesonderheit: Kein Protein-Supplement ohne [BLANK_5]-Anordnung.\n\nZuständige Ernährungsberaterin: [BLANK_6].",
          blanks: [
            {
              id: 1,
              correct: "1",
              distractors: ["0", "2", "3", "4"],
            },
            {
              id: 2,
              correct: "Aufnahmetag (Tag 1 des stationären Aufenthalts)",
              distractors: ["Entlassungstag", "Tag 3", "Tag 5"],
            },
            {
              id: 3,
              correct: "67",
              distractors: ["45", "78", "100", "120"],
            },
            {
              id: 4,
              correct: "eiweiß",
              distractors: ["kohlenhydrat", "fett", "vitamin"],
            },
            {
              id: 5,
              correct: "ärztliche",
              distractors: ["pflegerische", "eigene", "mündliche"],
            },
            {
              id: 6,
              correct: "(Name der Ernährungsberaterin individüll eintragen)",
              distractors: ["(Name individüll)"],
            },
          ],
        },
      },
    },

    // Step 6.3 — Matching: Entlassungsplanung
    {
      stepId: "ce02-schmidt-dok-03-entlassungsplanung",
      phase: 6,
      stepType: "matching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Entlassungsmanagement",
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-dok-entlassung",
      tag: "pflege",
      contentC1: {
        title: "Entlassungsplanung — wer bekommt welche Information?",
        body: "Entlassungsplanung: Ordne zu, welche Information an wen übergeben wird. 4 Übergabepunkte.",
        glossarBegriffe: ["Entlassungsmanagement"],
      },
      contentB1: {
        title: "Entlassungs-Planung — wer bekommt was?",
        body: "Entlassungs-Planung: Wer bekommt welche Information? Ordne zu.",
        glossarBegriffe: ["Entlassungsmanagement"],
      },
      question: {
        fragetext:
          "Ordne jeden Übergabepunkt dem richtigen Empfänger zu.",
        matchingPairs: [
          {
            left: "Fußbefund Wagner 1, ambulante Podologie nötig (Termin noch nicht vereinbart)",
            right: "Arztbrief + Hausarzt + Überweisung zum Podologen",
          },
          {
            left: "Ernährungsprotokoll + Beratungsergebnis (eiweißreiche Kost; NRS-2002-Score 1, GLIM-Diagnose Mangelernährung Stadium 1)",
            right: "Externe Ernährungsberaterin ambulant + Hausarzt",
          },
          {
            left: "BZ-Tagesprofil 5 Tage + Metformin 500 mg 2× täglich (aktüll)",
            right: "Hausarzt + ggf. Diabetologin für ambulante Weiterbetreuung",
          },
          {
            left: "Inkontinenzversorgung (Typ, Frau Schmidt kann selbst wechseln, soziale Isolation durch Inkontinenz)",
            right: "Pflegebrief + Empfehlung Gynäkologie-Überweisung Hausarzt",
          },
        ],
      },
    },

    // Step 6.4 — Summary: Session-Zusammenfassung
    {
      stepId: "ce02-schmidt-dok-04-session-zusammenfassung",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-schmidt-dok-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Das hast du in dieser Situation gelernt",
        body: "Session-Zusammenfassung: Was aus dieser Situation für dich bleibt.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Das hast du gelernt",
        body: "Session-Zusammenfassung.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Zusammenfassung: Das nimmst du aus der Situation mit Frau Schmidt mit.",
        summary: {
          reflexionRueckbezug:
            "Du hast Frau Schmidt fünf Tage begleitet — von der Aufnahme bis kurz vor Entlassung. Du hast gelernt, was Adipositas wirklich bedeutet, warum Protein fehlt obwohl der Teller voll ist, und warum ein Nagelschneider beim Diabetikerfuß nichts zu suchen hat. Du hast ein Gespräch geführt, das gehört werden wollte. Das ist Pflege.",
          kernaussagen: [
            "Adipositas ≠ gut ernährt — Albumin ist der Proteinmarker, NRS 2002 ist das Screening-Werkzeug. Übergewicht und Proteinmangel schließen sich nicht aus.",
            "Diabetisches Fußsyndrom: Nagelpflege und jede invasive Fußpflege gehören ausschließlich zum Podologen. Pflege inspiziert, dokumentiert, initiiert die Überweisung — greift aber nicht ein.",
            "Ernährungsgespräch ist Beziehungsarbeit: Biographie zürst, Fragen vor Aussagen, keine Verbotslisten. Autonomie stärken statt Diätvorschriften machen.",
            "Inkontinenz würdevoll ansprechen: Normalisieren senkt die Schambarriere. Selbstpflege fördern soweit möglich (§ 2 PflBG).",
            "Interprofessionelles Team: Kompetenzgrenzen kennen ist Qualitätssicherung — nicht Schwäche. Podologe, Ernährungsberaterin, Arzt, Pflege haben klar verteilte Aufgaben.",
          ],
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 25,
};
