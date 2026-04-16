// LE-06: Menschen aller Altersstufen in ihrer Mobilität unterstuetzen
// Steps S6: Pfade 21-22 (Dokumentation, Arbeitsschutz)
// Bloom: B1-B3, 1. Ausbildungsdrittel
// HINWEIS: Alle Pfade im Plan als Kurzformat — Details ergaenzt

import type { ContentStep } from "../_types";

export const LE06_STEPS_S6: ContentStep[] = [
  {
    stepId: "le-06-s6-tb21-01",
    phase: "s6",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F81",
      "PflBG-Paragraph-4",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Rechtliche Bedeutung der Dokumentation verstehen",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    displayFormat: "quote",
    contentC1: {
      title: "Warum dokumentieren?",
      body: "Was nicht dokumentiert ist, ist nicht passiert. Die Dokumentation ist rechtlich bindend und schützt Pflegekraft und Patient (Paragraph 4 PflBG).",
    },
    contentB1: {
      title: "Warum aufschreiben?",
      body: "Was nicht aufgeschrieben ist, gilt als nicht getan. Dokumentation ist Pflicht und Schutz.",
    },
  },
  {
    stepId: "le-06-s6-tb21-02",
    phase: "s6",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F81",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "3 Dokumentationsarten kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "3 Dokumentationsarten",
      body: "Decke auf.",
    },
    contentB1: {
      title: "3 Arten",
      body: "Welche Dokumente gibt es?",
    },
    question: {
      fragetext: "Decke die 3 Arten auf.",
      reveal: {
        instruction: "Tippe die Karten an.",
        cards: [
          {
            id: "1",
            label: "Mobilisationsplan",
            content: "Welche Mobilisation, wann, wie lange, durch wen, Reaktion des Patienten",
          },
          {
            id: "2",
            label: "Positionierungsprotokoll",
            content: "Uhrzeit, Position, Hilfsmittel, Hautzustand, Besonderheiten",
          },
          {
            id: "3",
            label: "Sturzprotokoll",
            content: "Wann, wo, Verletzungen, mögliche Ursachen, Sofortmaßnahmen",
          },
        ],
        revealMode: "free",
      },
    },
  },
  {
    stepId: "le-06-s6-tb21-03",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F82",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Inhalt eines Positionierungsprotokolls kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Positionierungsprotokoll",
      body: "Was gehört rein?",
    },
    contentB1: {
      title: "Was aufschreiben?",
      body: "Positionierung.",
    },
    question: {
      fragetext: "Was gehört ins Positionierungsprotokoll?",
      optionen: [
        {
          text: "Nur die Uhrzeit der Lagerung",
          isCorrect: false,
          explanation: "Unvollständig.",
          explanationB1: "Zu wenig.",
        },
        {
          text: "Uhrzeit, Position, Hautzustand, Hilfsmittel, Besonderheiten",
          isCorrect: true,
          explanation: "Richtig. Nachvollziehbarkeit und Qualitätssicherung.",
          explanationB1: "Richtig. Alles Wichtige.",
        },
        {
          text: "Nur wer die Lagerung durchgeführt hat",
          isCorrect: false,
          explanation: "Zu wenig. Details fehlen.",
          explanationB1: "Zu wenig.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s6-tb21-04",
    phase: "s6",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F82",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Dokument und Inhalt zuordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Dokument und Inhalt",
      body: "Ordne zu.",
    },
    contentB1: {
      title: "Was wo?",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Welcher Inhalt gehört in welches Dokument?",
      matchingPairs: [
        {
          left: "Mobilisationsplan",
          right: "Geplante Aktivitäten und Dauer",
        },
        {
          left: "Positionierungsprotokoll",
          right: "Position + Uhrzeit + Hautzustand",
        },
        {
          left: "Sturzprotokoll",
          right: "Ereignis + Ursachen + Maßnahmen",
        },
        {
          left: "Pflegebericht",
          right: "Verlaufsbeschreibung",
        },
      ],
    },
  },
  {
    stepId: "le-06-s6-tb21-05",
    phase: "s6",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F82",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Mobilisationsplan korrekt ausfüllen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Mobilisationsplan",
      body: "Fülle die Lücken.",
    },
    contentB1: {
      title: "Fülle aus",
      body: "Mobilisationsplan.",
    },
    question: {
      fragetext: "Fülle die Lücken aus.",
      cloze: {
        textWithBlanks: "Frau Siebert wurde um ___ Uhr an die ___ mobilisiert. Dauer ___ Minuten. Reaktion: ___ . Dokumentiert durch: ___ .",
        blanks: [
          {
            id: 1,
            correct: "10:00",
            distractors: [
              "10 Uhr",
            ],
          },
          {
            id: 2,
            correct: "Bettkante",
            distractors: [],
          },
          {
            id: 3,
            correct: "15",
            distractors: [],
          },
          {
            id: 4,
            correct: "stabil",
            distractors: [
              "unauffällig",
              "keine Beschwerden",
            ],
          },
          {
            id: 5,
            correct: "Handzeichen",
            distractors: [
              "Pflegekraft",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s6-tb21-06",
    phase: "s6",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F82",
    ],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "Unvollständige Dokumentation erkennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Dokumentation prüfen",
      body: "Finde die Fehler.",
    },
    contentB1: {
      title: "Was fehlt?",
      body: "Fehler finden.",
    },
    question: {
      fragetext: "Welche Einträge sind fehlerhaft oder unvollständig?",
      errorspot: {
        instruction: "Welche Einträge sind fehlerhaft oder unvollständig?",
        text: "Pflegebericht einer Schülerin.",
        errors: [
          {
            start: 0,
            end: 22,
            correction: "",
            explanation: "Zu vage. Wohin? Wie lange? Reaktion?",
          },
          {
            start: 1,
            end: 21,
            correction: "",
            explanation: "Keine wertenden Begriffe. Konkrete Beobachtungen dokumentieren.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s6-tb21-07",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F82",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Dokumentationspflicht beim Fingertest verstehen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Fingertest dokumentieren?",
      body: "Prüfe.",
    },
    contentB1: {
      title: "Muss man das aufschreiben?",
      body: "Prüfe.",
    },
    question: {
      fragetext: "Das Ergebnis des Fingertests muss bei jedem Positionswechsel dokumentiert werden.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: true,
          explanation: "Richtig. Hautzustand und Fingertest gehören zum Positionierungsprotokoll.",
        },
        {
          text: "Falsch",
          isCorrect: false,
          explanation: "",
        },
      ],
    },
  },
  {
    stepId: "le-06-s6-tb21-08",
    phase: "s6",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F82",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Sturzprotokoll in richtiger Reihenfolge ausfüllen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Sturzprotokoll",
      body: "Was zuerst?",
    },
    contentB1: {
      title: "Reihenfolge",
      body: "Ordne.",
    },
    question: {
      fragetext: "Sortiere die Einträge im Sturzprotokoll.",
      sequencing: {
        instruction: "Sortiere die Einträge im Sturzprotokoll.",
        items: [
          {
            id: "1",
            label: "Datum + Uhrzeit + Ort des Sturzes",
          },
          {
            id: "2",
            label: "Verletzungen und Vitalzeichen",
          },
          {
            id: "3",
            label: "Mögliche Ursachen (Medikamente, Umgebung)",
          },
          {
            id: "4",
            label: "Sofortmaßnahmen (was wurde getan)",
          },
          {
            id: "5",
            label: "Information an Arzt und Angehörige",
          },
          {
            id: "6",
            label: "Prophylaxeanpassungen für die Zukunft",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s6-tb21-09",
    phase: "s6",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F81",
      "F82",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Dokumentationspflichten einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Muss dokumentiert werden?",
      body: "Swipe.",
    },
    contentB1: {
      title: "Pflicht oder nicht?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Muss das dokumentiert werden?",
      swipe: {
        instruction: "Muss das dokumentiert werden?",
        cards: [
          {
            statement: "Sturz ohne Verletzung",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Beinahestürze",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Normale Positionierung",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Kurzes Pausengespräch im Stationszimmer",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Hautveränderungen am Sakrum",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s6-tb21-10",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F81",
      "F82",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Pflegebericht formulieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Pflegebericht: Mobilisation",
      body: "Schreibe einen Pflegeberichtseintrag für Frau Sieberts Mobilisation an die Bettkante (Tag 3 postoperativ, stabil, keine Komplikationen).",
    },
    contentB1: {
      title: "Bericht schreiben",
      body: "Formuliere einen kurzen Bericht.",
    },
    question: {
      fragetext: "Formuliere einen professionellen Pflegeberichtseintrag.",
      musterantwort: "10:00 Uhr: Frau Siebert an die Bettkante mobilisiert, Dauer 15 Min. Hautzustand am Sakrum reizlos. VAS 2/10. Kreislauf stabil (RR 135/80, Puls 78). Keine Schwindelsymptome. Patient war motiviert. (Handzeichen)",
    },
  },
  {
    stepId: "le-06-s6-tb22-01",
    phase: "s6",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F83",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Selbstreflexion zum Thema Rücken aktivieren",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Rückenschmerzen?",
      body: "Hast du das kennengelernt?",
    },
    contentB1: {
      title: "Rücken weh?",
      body: "Schon gehabt?",
    },
    question: {
      fragetext: "Hattest du schon mal Rückenschmerzen nach einem Pflegetag?",
    },
  },
  {
    stepId: "le-06-s6-tb22-02",
    phase: "s6",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F83",
      "BGW",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Berufskrankheit Rücken verstehen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    displayFormat: "news",
    contentC1: {
      title: "Berufskrankheit Rücken",
      body: "Pflegeberufe haben die meisten Muskel-Skelett-Beschwerden aller Berufsgruppen (BGW). Rückenschonendes Arbeiten ist nicht Luxus - es ist Voraussetzung für einen langen Berufsweg.",
    },
    contentB1: {
      title: "Rücken und Pflege",
      body: "Pflegekräfte haben oft Rückenschmerzen. Mehr als andere Berufe. Darum: Rücken schonen.",
    },
  },
  {
    stepId: "le-06-s6-tb22-03",
    phase: "s6",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F83",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "5 Regeln für rückenschonendes Arbeiten kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "5 Regeln",
      body: "Rückenschonendes Arbeiten.",
    },
    contentB1: {
      title: "5 Regeln",
      body: "Rücken schonen.",
    },
    question: {
      fragetext: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten.",
        cards: [
          {
            front: "Arbeitshöhe",
            back: "Bett auf Hüfthöhe einstellen, nie gebückt arbeiten",
          },
          {
            front: "Aus den Beinen",
            back: "In die Knie gehen, Rücken gerade lassen",
          },
          {
            front: "Nah am Patienten",
            back: "Enger Körperkontakt reduziert Hebelkräfte",
          },
          {
            front: "Hilfsmittel nutzen",
            back: "Rutschbrett, Drehscheibe, Lifter bei Bedarf",
          },
          {
            front: "Zweite Person holen",
            back: "Bei schweren Transfers immer zu zweit",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s6-tb22-04",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F84",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Richtige Betthöhe kennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Betthöhe?",
      body: "Wie hoch stellen?",
    },
    contentB1: {
      title: "Wie hoch?",
      body: "Bett einstellen.",
    },
    question: {
      fragetext: "Wie hoch sollte das Bett zum Arbeiten stehen?",
      optionen: [
        {
          text: "So tief wie möglich, zur Sicherheit des Patienten",
          isCorrect: false,
          explanation: "Patientensicherheit ist ein guter Gedanke — aber ein zu tiefes Bett zwingt dich in Rumpfbeugung und schadet deinem Rücken. Die richtige Arbeitshöhe ist Hüfthöhe. Du bist auf dem richtigen Weg!",
          explanationB1: "Sicherheit ist gut gedacht. Aber zu tief = Rücken kaputt. Bett auf Hüfte ist richtig.",
        },
        {
          text: "Oberkante Matratze = Hüfthöhe der Pflegeperson",
          isCorrect: true,
          explanation: "Richtig. So wird aus den Beinen gearbeitet.",
          explanationB1: "Richtig. Bett = Hüfte.",
        },
        {
          text: "Schulterhöhe, damit man alles gut sieht",
          isCorrect: false,
          explanation: "Gut gesehen — in Schulterhöhe ist die Sicht perfekt. Beim Arbeiten jedoch überstreckt das die Schultern und belastet den Nacken. Hüfthöhe ist optimal. Guter Gedanke in die richtige Richtung!",
          explanationB1: "Gute Sicht — aber zu hoch = Schultern kaputt. Richtig ist Hüfthöhe.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s6-tb22-05",
    phase: "s6",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F83",
      "F84",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Arbeitsschutz-Regeln einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Swipe.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Ist die Aussage zum Arbeitsschutz korrekt?",
      swipe: {
        instruction: "Ist die Aussage zum Arbeitsschutz korrekt?",
        cards: [
          {
            statement: "Bett auf Hüfthöhe einstellen",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Schwere Patienten immer alleine transferieren",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Lifter nutzen, wenn Patient nicht mithelfen kann",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Patient ziehen statt schieben",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Aktives Einbeziehen des Patienten entlastet mich",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s6-tb22-06",
    phase: "s6",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F83",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Kinästhetik und Arbeitsschutz verbinden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Kinästhetik und Rücken",
      body: "Zusammenhang.",
    },
    contentB1: {
      title: "Zusammenhang",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Wie hängt Kinästhetik mit Arbeitsschutz zusammen?",
      matchingPairs: [
        {
          left: "Patient aktiv bewegt sich mit",
          right: "Pflegekraft weniger belastet",
        },
        {
          left: "Enger Körperkontakt zum Patient",
          right: "Weniger Hebelwirkung auf Rücken",
        },
        {
          left: "Bewegungsführung statt Heben",
          right: "Rücken geschont",
        },
        {
          left: "Ressourcen nutzen",
          right: "Patient und Pflegekraft profitieren",
        },
      ],
    },
  },
  {
    stepId: "le-06-s6-tb22-07",
    phase: "s6",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F84",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Optimale Betthöhe schätzen",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 10,
    contentC1: {
      title: "Betthöhe in cm",
      body: "Wie hoch ist die Hüfte durchschnittlich?",
    },
    contentB1: {
      title: "Wie viele cm?",
      body: "Hüfte von oben.",
    },
    question: {
      fragetext: "Schätze die optimale Betthöhe (Hüfthöhe der Pflegeperson).",
      estimation: {
        instruction: "Schätze die optimale Betthöhe (Hüfthöhe der Pflegeperson).",
        unit: "cm",
        correctValue: 90,
        tolerance: 10,
        funFact: "",
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s6-tb22-08",
    phase: "s6",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F83",
      "F84",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Eigene Praxis reflektieren und Vorsätze formulieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Was ändere ich?",
      body: "Reflektiere deine letzten Einsätze. Welche 3 Dinge änderst du ab morgen für deinen Rücken?",
    },
    contentB1: {
      title: "Was nehme ich mit?",
      body: "Was machst du ab morgen anders?",
    },
    question: {
      fragetext: "Formuliere 3 konkrete Vorsätze.",
      reflection: {
        prompt: "Formuliere 3 konkrete Vorsätze.",
        placeholder: "Schreibe mindestens 80 Zeichen.",
        systemPrompt: "Bewerte die Reflexion auf Tiefe und Bezug zum Thema.",
      },
    },
  },
];
