// CE-02 Situation Frau Schmidt — Phase 6: Dokumentieren
// Steps: 4 · Bloom: B5–B6 · Zeit: ~20–30 Min
// Quelle: phase-dokumentieren.md

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
        body: "Schreibe den Pflegebericht für Frau Schmidt, Frühdienst heute. Dein Text soll enthalten: 1) Zustand der Haut (Hautfalten — Befund nach Inspektion), 2) BZ-Messwert und Kommentar (nüchtern + postprandial), 3) BZ-Tagesprofil-Trend (5 Tage), 4) Ernährungsgespräch (was besprochen, wie Frau Schmidt reagiert), 5) Fußbefund + Podologie-Termin (was gemacht, was initiiert), 6) Inkontinenzversorgung (Typ, Selbstpflege-Fähigkeit), 7) Verhalten/Stimmung von Frau Schmidt.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Pflege-Bericht — Frühdienst heute",
        body: "Schreibe einen Pflege-Bericht für Frau Schmidt — Frühdienst heute. Dein Text soll enthalten:\n1. Haut der Falten: Wie sieht die Haut aus?\n2. Blutzucker: Welcher Wert? Kommentar?\n3. Blutzucker-Trend: Besser oder schlechter?\n4. Ernährungs-Gespräch: Was besprochen? Wie hat Frau Schmidt reagiert?\n5. Fuß-Befund: Was gesehen? Wem gemeldet?\n6. Inkontinenz-Versorgung: Wie war die Versorgung heute?\n7. Stimmung: Wie war Frau Schmidt?\n\nSchreibe objektiv (= nur was du gesehen hast, keine Meinungen). Schreibe kurz.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Schreibe den vollständigen Pflegebericht für Frau Schmidt — Frühdienst heute. (~120–180 Wörter)",
        musterantwort:
          "08:30 Morgenpflege durchgeführt. Frau Schmidt kooperativ und kommunikativ. Hautfalten (submammär, inguinal, abdominal) inspiziert: trocken, intakt, kein Erythem, kein Geruch. Trockentupfen und dünn Hautschutzlotion aufgetragen, Befund dokumentiert. BZ nüchtern 08:00: 148 mg/dl (Trend Tag 1–5: 398→287→187→165→148, deutlich rückläufig, Zielwert < 130 noch nicht erreicht). BZ postprandial 12:00: 189 mg/dl (Ziel < 180, knapp drüber). Ernährungsgespräch geführt: Frau Schmidt offen für eiweißreiche Mahlzeiten, sagt \"das macht Sinn mit dem Zucker\". Ernährungsberaterin-Protokoll eingesehen. Fußinspektion: Wagner-1-Befund unverändert, heute Morgen erste Podologin-Behandlung erfolgt (Nägel fachgerecht versorgt, Risse desinfiziert). Inkontinenzversorgung: Frau Schmidt wechselt selbst, keine Hilfe nötig. Stimmung: entspannt, kommunikativ, Entlassungsplanung angesprochen — Frau Schmidt freut sich nach Hause zu kommen.",
        bewertungskriterien: [
          "Hautbefund (Inspektion aller Hautfalten, Befund)",
          "BZ-Werte (nüchtern + postprandial, Trend-Kommentar)",
          "Ernährungsgespräch (Inhalt + Reaktion Frau Schmidt)",
          "Fußbefund + Podologie-Termin erwähnt",
          "Inkontinenzversorgung (Art + Selbständigkeit)",
          "Stimmung/Verhalten Frau Schmidt",
          "Objektive Sprache, Vergangenheitsform, keine Wertungen",
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

    // Step 6.2 — Cloze: Ernährungsprotokoll-Lückentext
    {
      stepId: "ce02-schmidt-dok-02-ernaehrungsprotokoll-lueckentext",
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
      lernziel: "ce02-schmidt-dok-ernaehrungsprotokoll",
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
            "Ernährungsprotokoll Frau Schmidt, geb. 1958, Zimmer 8.\n\nNRS-2002-Score bei Aufnahme: [BLANK_1]. Screeningdatum: [BLANK_2].\n\nProtein-Bedarf: ca. [BLANK_3] g/Tag (Berechnung: 0,8 g × Idealgewicht ca. 90 kg).\n\nZiel: täglich mindestens 3 [BLANK_4]-reiche Mahlzeiten.\n\nBesonderheit: Kein Protein-Supplement ohne [BLANK_5]-Anordnung.\n\nZuständige Ernährungsberaterin: [BLANK_6] (Name eintragen).",
          blanks: [
            {
              id: 1,
              correct: "3",
              distractors: ["0", "1", "2", "4"],
            },
            {
              id: 2,
              correct: "Aufnahmetag (Tag 1 des stationären Aufenthalts)",
              distractors: ["Entlassungstag", "Tag 3", "Tag 5"],
            },
            {
              id: 3,
              correct: "72",
              distractors: ["40", "55", "100", "120"],
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
              correct: "(Name eintragen — individuell)",
              distractors: [],
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
            left: "Ernährungsprotokoll + Beratungsergebnis (eiweißreiche Kost, NRS-Score 3)",
            right: "Externe Ernährungsberaterin ambulant + Hausarzt",
          },
          {
            left: "BZ-Tagesprofil 5 Tage + Metformin 500 mg 2× täglich (aktuell)",
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
            "Ernährungsgespräch ist Beziehungsarbeit: Biographie zuerst, Fragen vor Aussagen, keine Verbotslisten. Autonomie stärken statt Diätvorschriften machen.",
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
