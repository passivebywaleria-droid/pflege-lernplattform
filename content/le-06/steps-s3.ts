// LE-06: Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Steps S3: Pfade 9–12 (Mobilisation Vorbereitung→Bettkante, Transfer Bett→Rollstuhl, Hilfsmittel, Bobath-Konzept)
// Bloom: B1–B3, 1. Ausbildungsdrittel
// Hinweis: Pfade 10 und 11 sind im Plan im Kurzformat (nur Step-Titel + Typ), daher TODO-Hinweise.

import type { ContentStep } from "../_types";

export const LE06_STEPS_S3: ContentStep[] = [
  {
    stepId: "le-06-s3-tb9-01",
    phase: "s3",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer — Frau Siebert]",
      "F31",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Frau Siebert: Erstmobilisation",
      body: "Tag 3 post-OP. Frau Siebert darf mit 20 kg teilbelasten. Sie hat Angst und bittet: Lassen Sie mich liegen. Du stehst vor einer typischen Herausforderung: motivieren ohne zu überreden.",
    },
    contentB1: {
      title: "Frau Siebert: Erstmobilisation",
      body: "Tag 3 nach der OP. Frau Siebert darf mit 20 kg belasten. Sie hat Angst. Sie sagt: Lassen Sie mich liegen. Du sollst sie motivieren — ohne Druck.",
    },
    question: {
      fragetext: "Präge dir die Situation ein.",
    },
  },
  {
    stepId: "le-06-s3-tb9-02",
    phase: "s3",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2020)",
      "F31",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "6 Schritte vor der Mobilisation",
      body: "Bevor die Mobilisation startet, stehen 6 Vorbereitungs-Schritte an.",
    },
    contentB1: {
      title: "6 Schritte vor der Mobilisation",
      body: "Vor der Mobilisation: 6 wichtige Schritte.",
    },
    question: {
      fragetext: "Decke die 6 Schritte auf.",
      reveal: {
        instruction: "Tippe, um die Schritte aufzudecken.",
        cards: [
          {
            id: "1",
            label: "Befinden erfragen",
            content: "Wie geht es Ihnen heute? Schmerzen?",
          },
          {
            id: "2",
            label: "Kreislauf kontrollieren",
            content: "Blutdruck und Puls vor Aufrichten.",
          },
          {
            id: "3",
            label: "Muskelvenenpumpe aktivieren",
            content: "Füße strecken und anziehen.",
          },
          {
            id: "4",
            label: "Ziel erklären",
            content: "Heute nur bis zur Bettkante.",
          },
          {
            id: "5",
            label: "Hilfsmittel bereitstellen",
            content: "Schuhe, ggf. Rollator in Reichweite.",
          },
          {
            id: "6",
            label: "Sicherheit schaffen",
            content: "Bett auf Arbeitshöhe, Bremsen an, Platz frei.",
          },
        ],
        revealMode: "free",
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-03",
    phase: "s3",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2020)",
      "F31",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Vorbereitung sortieren",
      body: "Bringe die Vorbereitungsschritte in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Vorbereitung sortieren",
      body: "Sortiere die Schritte.",
    },
    question: {
      fragetext: "Reihenfolge der Vorbereitung.",
      fragetextB1: "Bringe die Schritte in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Reihenfolge der Vorbereitung.",
        items: [
          {
            id: "1",
            label: "Befinden erfragen",
          },
          {
            id: "2",
            label: "Kreislauf kontrollieren",
          },
          {
            id: "3",
            label: "Ziel erklären",
          },
          {
            id: "4",
            label: "Hilfsmittel bereitstellen",
          },
          {
            id: "5",
            label: "Sicherheit schaffen",
          },
          {
            id: "6",
            label: "Muskelvenenpumpe aktivieren",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-04",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F31",
      "F32",
      "[Transfer]",
    ],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Frau Siebert motivieren",
      body: "Frau Siebert sagt: Lassen Sie mich heute liegen, ich habe solche Angst.",
    },
    contentB1: {
      title: "Frau Siebert motivieren",
      body: "Frau Siebert sagt: Lassen Sie mich heute liegen. Ich habe Angst.",
    },
    question: {
      fragetext: "Wie reagierst du?",
      fragetextB1: "Was sagst du?",
      dialogPhases: [
        {
          context: "Frau Siebert liegt mit geschlossenen Augen. Sie wirkt erschöpft. Wie beginnst du?",
          contextB1: "Frau Siebert liegt da. Sie hat die Augen zu. Sie ist müde. Wie fängst du an?",
          options: [
            {
              text: "Sie MÜSSEN heute aufstehen, das ist Pflicht.",
              patientResponse: "",
              score: 1,
              feedback: "Druck verstärkt Widerstand — keine gute Einleitung.",
              feedbackB1: "Druck macht es schlimmer.",
            },
            {
              text: "Ich verstehe Ihre Angst. Wir machen heute nur die Bettkante. Ich bin die ganze Zeit bei Ihnen.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — empathisch, klare Abgrenzung, Sicherheit.",
              feedbackB1: "Perfekt — einfühlsam und klar.",
            },
            {
              text: "Dann verschieben wir es einfach auf morgen.",
              patientResponse: "",
              score: 1,
              feedback: "Jeder Tag Immobilität verschlechtert die Prognose.",
              feedbackB1: "Jeder Tag im Bett macht es schlimmer.",
            },
          ],
        },
        {
          context: "Frau Siebert öffnet die Augen: Und wenn mir schwindlig wird? Wie antwortest du?",
          contextB1: "Frau Siebert fragt: Und wenn mir schlecht wird? Was sagst du?",
          options: [
            {
              text: "Das passiert nicht, keine Sorge.",
              patientResponse: "",
              score: 1,
              feedback: "Falsch — Schwindel kann passieren und sollte ernst genommen werden.",
              feedbackB1: "Falsch — Schwindel kann vorkommen.",
            },
            {
              text: "Wir kontrollieren vorher Ihren Kreislauf. Wenn doch Schwindel kommt, legen wir Sie sofort wieder hin.",
              patientResponse: "",
              score: 3,
              feedback: "Sehr gut — Sicherheit durch Protokoll und Ausstiegsoption.",
              feedbackB1: "Sehr gut — du erklärst den Plan.",
            },
            {
              text: "Dann stoppen wir einfach.",
              patientResponse: "",
              score: 2,
              feedback: "Richtig, aber zu knapp — erkläre erst das Vorher.",
              feedbackB1: "Richtig, aber zu kurz.",
            },
          ],
        },
        {
          context: "Frau Siebert nickt zögerlich. Sie ist bereit, es zu versuchen. Wie unterstützt du sie beim Start?",
          contextB1: "Frau Siebert nickt. Sie will es versuchen. Wie hilfst du ihr?",
          options: [
            {
              text: "Ich zähle bis 3, dann hoch.",
              patientResponse: "",
              score: 1,
              feedback: "Zu schnell — eine Anweisung pro Schritt.",
              feedbackB1: "Zu schnell.",
            },
            {
              text: "Jetzt drehen wir uns zuerst auf die Seite. Eins nach dem anderen, mit Pausen.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — eine Anweisung pro Schritt, mit Pausen.",
              feedbackB1: "Perfekt — Schritt für Schritt.",
            },
            {
              text: "Fassen Sie meinen Hals, ich hebe Sie hoch.",
              patientResponse: "",
              score: 1,
              feedback: "Riskant — nicht heben, Ressourcen nutzen.",
              feedbackB1: "Nicht heben! Die Ressourcen nutzen.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb9-05",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta)",
      "F32",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "stepbystep",
    xpValue: 10,
    contentC1: {
      title: "Eine Anweisung pro Schritt",
      body: "Nicht: Setzen Sie sich auf und schwingen Sie die Beine raus. Sondern: Ein Schritt, Pause, warten, Rückmeldung, nächster Schritt. Das gibt Orientierung und verhindert Überforderung.",
    },
    contentB1: {
      title: "Eine Anweisung pro Schritt",
      body: "Nicht: Setzen Sie sich auf und schwingen Sie die Beine raus. Sondern: Ein Schritt. Pause. Warten. Dann der nächste Schritt. So ist es klar und nicht zu viel auf einmal.",
    },
    question: {
      fragetext: "Verstehe das Prinzip: eine Anweisung, eine Pause.",
    },
  },
  {
    stepId: "le-06-s3-tb9-06",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(§ 2 PflBG)",
      "F33",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Ressourcenorientierung",
      body: "Ressourcenorientierung bedeutet: das nutzen, was der Mensch noch kann.",
    },
    contentB1: {
      title: "Ressourcen nutzen",
      body: "Was kann der Patient noch selbst? Das nutzen wir.",
    },
    question: {
      fragetext: "Wie setzt du Ressourcenorientierung bei Frau Siebert um?",
      fragetextB1: "Wie nutzt du Frau Sieberts Ressourcen?",
      optionen: [
        {
          text: "Ich hebe sie komplett aus dem Bett.",
          isCorrect: false,
          explanation: "Das ist passiv — Ressourcen werden nicht genutzt.",
          explanationB1: "Das ist nicht aktivierend.",
        },
        {
          text: "Sie greift mit dem gesunden Arm den Bettgalgen und zieht sich selbst hoch.",
          isCorrect: true,
          explanation: "Richtig — eigene Kraft nutzen, das ist aktivierende Pflege (§ 2 PflBG).",
          explanationB1: "Richtig — sie nutzt eigene Kraft. Das ist aktivierende Pflege.",
        },
        {
          text: "Ich lege ihr alles passiv zurecht.",
          isCorrect: false,
          explanation: "Das fördert keine Ressourcen.",
          explanationB1: "Das hilft den Ressourcen nicht.",
        },
        {
          text: "Ich lasse sie alles allein machen.",
          isCorrect: false,
          explanation: "Zu viel alleine ist Überforderung und Sturzrisiko.",
          explanationB1: "Zu viel alleine ist gefährlich.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb9-07",
    phase: "s3",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F34",
      "F35",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Rückenlage zur Bettkante",
      body: "Der Weg von der Rückenlage zum Sitz an der Bettkante folgt einem festen Ablauf.",
    },
    contentB1: {
      title: "Rückenlage zur Bettkante",
      body: "Vom Liegen zum Sitzen an der Bettkante — Schritt für Schritt.",
    },
    question: {
      fragetext: "Sortiere die Schritte.",
      fragetextB1: "Sortiere die Schritte.",
      sequencing: {
        instruction: "Sortiere die Schritte.",
        items: [
          {
            id: "1",
            label: "Auf die Seite drehen",
          },
          {
            id: "2",
            label: "Beine aus dem Bett gleiten lassen",
          },
          {
            id: "3",
            label: "Oberkörper aufrichten (Hebelprinzip)",
          },
          {
            id: "4",
            label: "An Bettkante sitzen",
          },
          {
            id: "5",
            label: "Kreislauf kontrollieren",
          },
          {
            id: "6",
            label: "1–2 Minuten warten",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-08",
    phase: "s3",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2020)",
      "F31",
      "F35",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Mobilisationsprinzipien",
      body: "Richtig oder falsch? Wische entsprechend.",
    },
    contentB1: {
      title: "Mobilisations-Regeln",
      body: "Richtig oder falsch?",
    },
    question: {
      fragetext: "Stimmt die Aussage?",
      fragetextB1: "Stimmt die Aussage?",
      swipe: {
        instruction: "Wische nach rechts für \"richtig\", nach links für \"falsch\".",
        cards: [
          {
            statement: "Kreislauf kontrollieren vor Mobilisation",
            isCorrect: true,
            explanation: "Richtig — immer vor Aufrichten prüfen.",
          },
          {
            statement: "Patienten sofort aufstehen lassen, ohne Pause an der Bettkante",
            isCorrect: false,
            explanation: "Falsch — erst 1–2 Min. sitzen, Kreislauf stabilisieren.",
          },
          {
            statement: "Eine Anweisung pro Schritt geben",
            isCorrect: true,
            explanation: "Richtig — klare Struktur, keine Überforderung.",
          },
          {
            statement: "Muskelvenenpumpe: Füße strecken und anziehen",
            isCorrect: true,
            explanation: "Richtig — aktiviert den venösen Rückstrom.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-09",
    phase: "s3",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta)",
      "F11",
      "F34",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Unterstützungspunkte",
      body: "Wo darfst du bei der Mobilisation an Frau Siebert fassen?",
    },
    contentB1: {
      title: "Unterstützungspunkte",
      body: "Wo darfst du sie anfassen?",
    },
    question: {
      fragetext: "Markiere die Massen — NICHT die Zwischenräume.",
      fragetextB1: "Markiere die Massen. Nicht die Zwischenräume.",
      hotspot: {
        imageUrl: "/images/content/le-06/svg/mobilisation-bettkante.svg",
        imageAlt: "Patientin an der Bettkante mit möglichen Unterstützungspunkten",
        instruction: "Markiere die relevanten Stellen.",
        zones: [
          {
            id: "1",
            x: 30,
            y: 25,
            radius: 8,
            label: "Schulter (Masse)",
          },
          {
            id: "2",
            x: 55,
            y: 55,
            radius: 8,
            label: "Becken (Masse)",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-10",
    phase: "s3",
    stepType: "matrix",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2020)",
      "F31",
      "F32",
      "F33",
      "F34",
      "F35",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Wer macht was?",
      body: "Mobilisation ist Teamarbeit zwischen Pflegekraft und Patient.",
    },
    contentB1: {
      title: "Wer macht was?",
      body: "Mobilisation: Pflegekraft und Patient arbeiten zusammen.",
    },
    question: {
      fragetext: "Ordne die Aufgaben zu.",
      fragetextB1: "Wer macht was?",
      matrix: {
        instruction: "Ordne die Items in die Matrix.",
        axisX: {
          label: "X-Achse",
          low: "gering",
          high: "hoch",
        },
        axisY: {
          label: "Y-Achse",
          low: "gering",
          high: "hoch",
        },
        items: [
          {
            id: "1",
            text: "Kreislauf kontrollieren",
            correctQuadrant: 1,
          },
          {
            id: "2",
            text: "Massen unterstützen (Schulter/Becken)",
            correctQuadrant: 1,
          },
          {
            id: "3",
            text: "Bettbremsen anlegen",
            correctQuadrant: 1,
          },
          {
            id: "4",
            text: "Bein aufstellen",
            correctQuadrant: 1,
          },
          {
            id: "5",
            text: "Abdrücken mit dem Arm",
            correctQuadrant: 1,
          },
          {
            id: "6",
            text: "Füße aufstellen",
            correctQuadrant: 1,
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-11",
    phase: "s3",
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F31",
      "F32",
      "F33",
      "F34",
      "F35",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Mobilisation-Fachbegriffe",
      body: "Kreuzworträtsel zu den wichtigsten Begriffen.",
    },
    contentB1: {
      title: "Mobilisation-Wörter",
      body: "Kreuzworträtsel.",
    },
    question: {
      fragetext: "Löse die Hinweise.",
      fragetextB1: "Löse die Hinweise.",
      crosswordWords: [
        {
          word: "HEBELPRINZIP",
          clue: "Physikalisches Prinzip beim Aufrichten",
        },
        {
          word: "MOBILITAET",
          clue: "Bewegungsfähigkeit (Fachbegriff)",
        },
        {
          word: "RESSOURCENORIENTIERUNG",
          clue: "Prinzip: Nutze was der Mensch kann",
        },
        {
          word: "KOMMUNIKATION",
          clue: "Eine Anweisung pro Schritt ist ein Prinzip davon",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb9-12",
    phase: "s3",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F35",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Wartezeit an der Bettkante",
      body: "Nach dem Aufrichten sollte der Patient nicht sofort stehen.",
    },
    contentB1: {
      title: "Wartezeit an der Bettkante",
      body: "Nach dem Aufrichten: nicht sofort stehen.",
    },
    question: {
      fragetext: "Wie viele Minuten sitzt der Patient mindestens an der Bettkante, bevor er aufstehen darf?",
      fragetextB1: "Wie viele Minuten soll der Patient an der Bettkante sitzen?",
      estimation: {
        instruction: "Schätze den Wert.",
        unit: "Minuten",
        correctValue: 2,
        tolerance: 1,
        funFact: "",
        explanation: "1–2 Minuten an der Bettkante — der Kreislauf muss sich auf die aufrechte Position einstellen.",
        explanationB1: "1–2 Minuten sitzen. So stabilisiert sich der Kreislauf.",
      },
    },
  },
  {
    stepId: "le-06-s3-tb9-13",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F31",
      "F32",
      "F33",
      "F34",
      "F35",
      "(§ 4 PflBG)",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Mobilisationsbericht",
      body: "Dokumentiere die Erstmobilisation von Frau Siebert.",
    },
    contentB1: {
      title: "Mobilisations-Bericht",
      body: "Schreibe einen Bericht über Frau Sieberts erste Mobilisation.",
    },
    question: {
      fragetext: "Schreibe einen Pflegebericht: Ausgangssituation, Maßnahmen, Reaktion der Patientin, Kreislaufwerte, Plan für den nächsten Tag.",
      fragetextB1: "Schreibe einen Bericht: Wie war die Situation? Was hast du gemacht? Wie reagierte sie? Kreislauf? Plan für morgen?",
      bewertungskriterien: [
        "Ausgangssituation (Tag 3 post-OP, 20 kg Teilbelastung)",
        "Durchgeführte Maßnahmen (Vorbereitung, Bettkante)",
        "Reaktion der Patientin (Angst, dann kooperativ)",
        "Kreislaufwerte vor/nach Mobilisation",
        "Plan für nächsten Tag (Steigerung)",
      ],
    },
  },
  {
    stepId: "le-06-s3-tb10-01",
    phase: "s3",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer — Herr Demir]",
      "F36",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Herr Demir: Erster Transfer",
      body: "Herr Demir (64) nach Schlaganfall soll heute erstmals vom Bett in den Rollstuhl wechseln. Hemiparese rechts. Seine Frau Elif ist dabei.",
    },
    contentB1: {
      title: "Herr Demir: Erster Transfer",
      body: "Herr Demir (64) nach Schlaganfall. Heute zum ersten Mal vom Bett in den Rollstuhl. Rechts ist er schwach. Ehefrau Elif ist dabei.",
    },
    question: {
      fragetext: "Präge dir die Situation ein.",
    },
  },
  {
    stepId: "le-06-s3-tb10-02",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Rollstuhl bei Bobath",
      body: "Die Platzierung des Rollstuhls folgt bei Bobath einer klaren Regel.",
    },
    contentB1: {
      title: "Rollstuhl bei Bobath",
      body: "Wo stellst du den Rollstuhl hin?",
    },
    question: {
      fragetext: "Auf welcher Seite stellst du den Rollstuhl bei Herrn Demir (Hemiparese rechts)?",
      fragetextB1: "Auf welcher Seite steht der Rollstuhl?",
      optionen: [
        {
          text: "Links (gesunde Seite) — Patient kann leichter greifen",
          isCorrect: false,
          explanation: "Nein — bei Bobath steht der Rollstuhl auf der betroffenen Seite.",
          explanationB1: "Falsch — bei Bobath: betroffene Seite.",
        },
        {
          text: "Rechts (betroffene Seite) — Bobath fördert Wahrnehmung",
          isCorrect: true,
          explanation: "Richtig! Der Rollstuhl steht auf der betroffenen Seite, damit die Wahrnehmung gefördert wird.",
          explanationB1: "Richtig! Auf der schwachen Seite — das fördert die Wahrnehmung.",
        },
        {
          text: "Egal, Hauptsache in Reichweite",
          isCorrect: false,
          explanation: "Nicht egal — bei Bobath ist die Seite entscheidend.",
          explanationB1: "Nicht egal — die Seite ist wichtig.",
        },
        {
          text: "Am Fußende",
          isCorrect: false,
          explanation: "Das ist praktisch ungünstig für den Transfer.",
          explanationB1: "Das passt beim Transfer nicht.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb10-03",
    phase: "s3",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F36",
      "F37",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "5-Schritt-Transfer",
      body: "Der aktivierende Transfer folgt 5 Schritten.",
    },
    contentB1: {
      title: "5-Schritt-Transfer",
      body: "Der Transfer hat 5 Schritte.",
    },
    question: {
      fragetext: "Bringe die Schritte in Reihenfolge.",
      fragetextB1: "Sortiere die Schritte.",
      sequencing: {
        instruction: "Bringe die Schritte in Reihenfolge.",
        items: [
          {
            id: "1",
            label: "Rollstuhl positionieren, Bremsen feststellen",
          },
          {
            id: "2",
            label: "Patient zur Bettkante mobilisieren",
          },
          {
            id: "3",
            label: "Beide Füße auf dem Boden, Knie zu Knie",
          },
          {
            id: "4",
            label: "Gewicht verlagern, aufstehen, drehen",
          },
          {
            id: "5",
            label: "Kontrolliert im Rollstuhl absetzen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb10-04",
    phase: "s3",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F36",
      "F37",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Aktivierend oder passiv?",
      body: "Zwei Transfer-Arten mit sehr unterschiedlichen Zielen.",
    },
    contentB1: {
      title: "Aktivierend oder passiv?",
      body: "Zwei Arten von Transfer.",
    },
    question: {
      fragetext: "Vergleiche aktivierenden und passiven Transfer.",
      fragetextB1: "Vergleiche die beiden Transfers.",
      comparison: {
        instruction: "Vergleiche die Optionen.",
        columns: [
          {
            label: "Aktivierender Transfer",
          },
          {
            label: "Passiver Transfer",
          },
        ],
        rows: [
          {
            criterion: "Ziel",
            values: [
              "Ressourcen nutzen",
              "Sicher bewegen",
            ],
          },
          {
            criterion: "Einsatz",
            values: [
              "Wenn Patient mithelfen kann",
              "Bei starker Einschränkung",
            ],
          },
          {
            criterion: "Hilfsmittel",
            values: [
              "Rutschbrett, Drehscheibe",
              "Lifter",
            ],
          },
          {
            criterion: "Personen",
            values: [
              "1 Pflegekraft",
              "2 Pflegekräfte oder Lifter",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb10-05",
    phase: "s3",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F36",
      "F37",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Transfer-Fehler finden",
      body: "Finde die Fehler in der Beschreibung.",
    },
    contentB1: {
      title: "Transfer-Fehler",
      body: "Finde die Fehler.",
    },
    question: {
      fragetext: "Kollege transferiert Herrn Demir: Rollstuhl ohne Bremse auf die linke Seite, Patient wird unter den Achseln hochgezogen.",
      fragetextB1: "Der Kollege macht es so: Rollstuhl links, keine Bremse, Patient unter den Achseln hochziehen.",
      errorspot: {
        instruction: "Kollege transferiert Herrn Demir: Rollstuhl ohne Bremse auf die linke Seite, Patient wird unter den Achseln hochgezogen.",
        text: "Kollege transferiert Herrn Demir: Rollstuhl ohne Bremse auf die linke Seite, Patient wird unter den Achseln hochgezogen.",
        errors: [
          {
            start: 0,
            end: 0,
            correction: "Bremsen müssen immer feststehen — Sturzrisiko!",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Bei Bobath: Rollstuhl auf die betroffene (rechte) Seite.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Nicht an Zwischenräumen greifen — Massen nutzen.",
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb10-06",
    phase: "s3",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F37",
      "(SGB V § 33)",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Passiver Transfer: Hilfsmittel",
      body: "Jedes Hilfsmittel hat eine klare Einsatzsituation.",
    },
    contentB1: {
      title: "Passive Transfer-Hilfen",
      body: "Jedes Hilfsmittel hat seinen Zweck.",
    },
    question: {
      fragetext: "Ordne Hilfsmittel und Einsatz zu.",
      fragetextB1: "Ordne Hilfsmittel und Einsatz zu.",
      matchingPairs: [
        {
          left: "Rutschbrett",
          right: "Gleich hohe Flächen, Patient kann mithelfen",
        },
        {
          left: "Drehscheibe",
          right: "Stehfähig, aber Drehung schwer",
        },
        {
          left: "Lifter",
          right: "Keine Stehfähigkeit, vollständig passiv",
        },
        {
          left: "Transferhilfe (Gurt)",
          right: "Griff-Masse für Pflegekraft",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb10-07",
    phase: "s3",
    stepType: "timer",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F36",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "60-Sekunden-Sicherheitscheck",
      body: "Was muss vor jedem Transfer geprüft werden?",
    },
    contentB1: {
      title: "60-Sekunden-Check",
      body: "Was prüfst du vor dem Transfer?",
    },
    question: {
      fragetext: "4 Sicherheits-Punkte — auf Zeit.",
      fragetextB1: "4 Punkte — schnell.",
      timerQuestions: [
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
      ],
      timeLimitSeconds: 60,
    },
  },
  {
    stepId: "le-06-s3-tb10-08",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F37",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Lifter: Personalbedarf",
      body: "Ein Lifter ist ein maschinelles Hilfsmittel.",
    },
    contentB1: {
      title: "Lifter: Wie viele Personen?",
      body: "Der Lifter ist eine Maschine.",
    },
    question: {
      fragetext: "Der Lifter kann auch von einer einzelnen Pflegekraft sicher bedient werden.",
      fragetextB1: "Eine Pflegekraft allein kann den Lifter sicher bedienen.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: false,
          explanation: "Richtig — 2 Personen: 1 bedient den Lifter, 1 sichert den Patienten.",
          explanationB1: "Richtig — 2 Personen: eine bedient, eine sichert.",
        },
        {
          text: "Falsch",
          isCorrect: true,
          explanation: "Falsch — 2 Personen sind Standard: 1 bedient, 1 sichert.",
          explanationB1: "Falsch — normal sind 2 Personen.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb10-09",
    phase: "s3",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F36",
      "F37",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Transfer-Zusammenfassung",
      body: "Fülle die Schlüsselbegriffe ein.",
    },
    contentB1: {
      title: "Transfer — Lückentext",
      body: "Setze die richtigen Wörter ein.",
    },
    question: {
      fragetext: "Ergänze den Text.",
      fragetextB1: "Setze die Wörter ein.",
      cloze: {
        textWithBlanks: "Vor dem Transfer werden die [1] festgestellt. Bei Bobath steht der Rollstuhl auf der [2] Seite. Gegriffen wird an den [3] (Schulter, Becken), nicht an den [4] (Achsel, Leiste).",
        blanks: [
          {
            id: 1,
            correct: "Bremsen",
            distractors: [],
          },
          {
            id: 2,
            correct: "betroffenen",
            distractors: [
              "betroffene",
            ],
          },
          {
            id: 3,
            correct: "Massen",
            distractors: [],
          },
          {
            id: 4,
            correct: "Zwischenräumen",
            distractors: [
              "Zwischenräume",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb10-10",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Bobath Herrn Demir erklären",
      body: "Herr Demir fragt: Warum stehen Sie immer auf meiner schlechten Seite?",
    },
    contentB1: {
      title: "Bobath erklären",
      body: "Herr Demir fragt: Warum stehen Sie immer rechts?",
    },
    question: {
      fragetext: "Wie erklärst du Bobath?",
      fragetextB1: "Wie erklärst du es?",
      dialogPhases: [
        {
          context: "Herr Demir schaut ärgerlich. Er wirkt genervt von der ungewohnten Seite. Wie startest du?",
          contextB1: "Herr Demir ist genervt. Er will nicht rechts angesprochen werden. Wie fängst du an?",
          options: [
            {
              text: "So ist die Vorschrift, daran halten wir uns.",
              patientResponse: "",
              score: 1,
              feedback: "Vorschrift-Argument motiviert nicht.",
              feedbackB1: "Das motiviert nicht.",
            },
            {
              text: "Ihre rechte Seite braucht jetzt besonders viele Reize, damit Ihr Gehirn sie wieder nutzen lernt.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — einfach und korrekt erklärt.",
              feedbackB1: "Perfekt — einfach und richtig.",
            },
            {
              text: "Das müssen Sie den Arzt fragen.",
              patientResponse: "",
              score: 1,
              feedback: "Nein — Bobath-Prinzipien kannst du selbst erklären.",
              feedbackB1: "Du kannst das selbst erklären.",
            },
          ],
        },
        {
          context: "Herr Demir: Aber mit links fällt mir alles leichter. Wie gehst du mit dem Einwand um?",
          contextB1: "Herr Demir: Mit links geht alles besser. Was sagst du?",
          options: [
            {
              text: "Genau deshalb sollen wir die linke Seite jetzt NICHT zu oft einsetzen.",
              patientResponse: "",
              score: 3,
              feedback: "Richtig — sonst verstärkt sich der Neglect.",
              feedbackB1: "Richtig — sonst wird die rechte Seite vergessen.",
            },
            {
              text: "Dann machen wir halt alles mit links.",
              patientResponse: "",
              score: 1,
              feedback: "Falsch — das verstärkt den Neglect.",
              feedbackB1: "Falsch — das macht es schlimmer.",
            },
            {
              text: "Das liegt nur an der Gewohnheit.",
              patientResponse: "",
              score: 2,
              feedback: "Teilweise richtig — aber der Kernpunkt ist der Neglect.",
              feedbackB1: "Teilweise — aber der Hauptgrund ist der Neglect.",
            },
          ],
        },
        {
          context: "Herr Demir ist überzeugt und will mitmachen. Wie planst du den Transfer jetzt?",
          contextB1: "Herr Demir will mitmachen. Wie geht es weiter?",
          options: [
            {
              text: "Rollstuhl rechts, ich stehe rechts, Ihre Frau kommt von rechts dazu.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — konsequente Bobath-Umsetzung.",
              feedbackB1: "Perfekt — alles auf der rechten Seite.",
            },
            {
              text: "Rollstuhl links wie gewohnt.",
              patientResponse: "",
              score: 1,
              feedback: "Falsch — das wäre nicht Bobath-konform.",
              feedbackB1: "Falsch — nicht Bobath.",
            },
            {
              text: "Egal, Hauptsache wir kommen voran.",
              patientResponse: "",
              score: 1,
              feedback: "Bei Bobath zählt gerade die Konsequenz.",
              feedbackB1: "Bei Bobath muss man konsequent sein.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb10-11",
    phase: "s3",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F36",
      "F37",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Welcher Transfer für wen?",
      body: "Formuliere deine Entscheidungskriterien.",
    },
    contentB1: {
      title: "Welcher Transfer für wen?",
      body: "Schreibe deine Regeln.",
    },
    question: {
      fragetext: "Nach welchen Kriterien entscheidest du zwischen aktivem Transfer, passiven Hilfsmitteln und Lifter?",
      fragetextB1: "Wann aktiv? Wann passiv? Wann Lifter?",
      reflection: {
        placeholder: "Deine Antwort...",
        systemPrompt: "Gib konstruktives Feedback zur Reflexion.",
        prompt: "Formuliere die Entscheidungskriterien in 3–4 Sätzen.",
      },
    },
  },
  {
    stepId: "le-06-s3-tb11-01",
    phase: "s3",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "(SGB V § 33)",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Welches Hilfsmittel für Frau Siebert?",
      body: "Frau Siebert kann Teilbelastung 20 kg, unsicher beim Stehen. Welches Hilfsmittel?",
    },
    contentB1: {
      title: "Welches Hilfsmittel?",
      body: "Frau Siebert darf 20 kg belasten. Sie steht unsicher. Was hilft?",
    },
    question: {
      fragetext: "Welches Hilfsmittel passt für Frau Siebert?",
      crowdPoll: {
        question: "Welches Hilfsmittel passt?",
        questionB1: "Welches Hilfsmittel passt?",
        inputType: "choice",
        options: [
          {
            id: "opt1",
            text: "Gehstock",
          },
          {
            id: "opt2",
            text: "Unterarmgehstütze (UAG)",
          },
          {
            id: "opt3",
            text: "Rollator",
          },
          {
            id: "opt4",
            text: "Rollstuhl",
          },
        ],
        seedResponses: [
          {
            text: "Gehstock",
            count: 8,
          },
          {
            text: "Unterarmgehstütze (UAG)",
            count: 18,
          },
          {
            text: "Rollator",
            count: 32,
            highlight: true,
          },
          {
            text: "Rollstuhl",
            count: 12,
          },
        ],
        totalVotes: 70,
        fazit: "Der Rollator bietet beidseitige Abstützung, Sitzfläche für Pausen und ist bei Teilbelastung ideal.",
        fazitB1: "Der Rollator stützt beide Seiten und hat eine Sitzfläche für Pausen.",
      },
    },
  },
  {
    stepId: "le-06-s3-tb11-02",
    phase: "s3",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "(SGB V § 33)",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "checklist",
    xpValue: 10,
    contentC1: {
      title: "Hilfsmittel individuell auswählen",
      body: "Keine Regel ohne Ausnahme — wähle nach Belastung, Gleichgewicht, Wohnsituation und Kognition. Das richtige Hilfsmittel ist das, das der Patient sicher bedienen kann.",
    },
    contentB1: {
      title: "Hilfsmittel — individuell",
      body: "Es gibt keine feste Regel. Wichtig sind: Belastung, Gleichgewicht, Wohnung, Kognition. Das Hilfsmittel muss zum Patienten passen.",
    },
    question: {
      fragetext: "Verstehe die 4 Kriterien.",
    },
  },
  {
    stepId: "le-06-s3-tb11-03",
    phase: "s3",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "F39",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "4 Hilfsmittel",
      body: "Die wichtigsten Gehhilfen im Überblick.",
    },
    contentB1: {
      title: "4 Hilfsmittel",
      body: "Die wichtigsten Gehhilfen.",
    },
    question: {
      fragetext: "Drehe die Karten um.",
      fragetextB1: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten um.",
        cards: [
          {
            front: "Gehstock",
            back: "Ein Bein schwach, kontralateral einsetzen.",
          },
          {
            front: "Unterarmgehstütze (UAG)",
            back: "Teilbelastung 10–20 kg, beidseits.",
          },
          {
            front: "Rollator",
            back: "Beidseitige Stütze, Sitzfläche, unsicher im Gehen.",
          },
          {
            front: "Rollstuhl",
            back: "Keine Gehfähigkeit, Transferhilfe.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb11-04",
    phase: "s3",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "F39",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Hilfsmittel und Indikation",
      body: "Welches Hilfsmittel passt zu welcher Situation?",
    },
    contentB1: {
      title: "Hilfsmittel und Situation",
      body: "Was passt zu wem?",
    },
    question: {
      fragetext: "Ordne zu.",
      fragetextB1: "Ordne zu.",
      matchingPairs: [
        {
          left: "Einseitige Schwäche, gute Balance",
          right: "Gehstock",
        },
        {
          left: "Teilbelastung 20 kg, gutes Gleichgewicht",
          right: "Unterarmgehstützen",
        },
        {
          left: "Unsicher beim Gehen, braucht Pausen",
          right: "Rollator",
        },
        {
          left: "Keine Stehfähigkeit",
          right: "Rollstuhl",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb11-05",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F39",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Gehstock — welche Seite?",
      body: "Der Gehstock wird nach einer klaren Regel eingesetzt.",
    },
    contentB1: {
      title: "Gehstock — welche Seite?",
      body: "Wo hält man den Gehstock?",
    },
    question: {
      fragetext: "Das rechte Bein ist schwach. In welcher Hand hält der Patient den Gehstock?",
      fragetextB1: "Das rechte Bein ist schwach. Wo hält er den Stock?",
      optionen: [
        {
          text: "Rechts (auf der schwachen Seite)",
          isCorrect: false,
          explanation: "Falsch — der Stock wird kontralateral, also auf der Gegenseite, getragen.",
          explanationB1: "Falsch — der Stock ist auf der anderen Seite.",
        },
        {
          text: "Links (auf der gesunden Seite, kontralateral)",
          isCorrect: true,
          explanation: "Richtig — der Stock entlastet das schwache Bein von der Gegenseite aus.",
          explanationB1: "Richtig — der Stock ist auf der gesunden Seite. So entlastet er die schwache Seite.",
        },
        {
          text: "Beidhändig",
          isCorrect: false,
          explanation: "Beidhändig wäre UAG oder Rollator.",
          explanationB1: "Beide Seiten wären UAG oder Rollator.",
        },
        {
          text: "Abwechselnd",
          isCorrect: false,
          explanation: "Nein — immer auf der Gegenseite des schwachen Beins.",
          explanationB1: "Nein — immer auf der anderen Seite.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb11-06",
    phase: "s3",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "F39",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Hilfsmittel-Fakten",
      body: "Richtig oder falsch?",
    },
    contentB1: {
      title: "Hilfsmittel — stimmt das?",
      body: "Richtig oder falsch?",
    },
    question: {
      fragetext: "Stimmt die Aussage?",
      fragetextB1: "Stimmt das?",
      swipe: {
        instruction: "Wische nach rechts für \"richtig\", nach links für \"falsch\".",
        cards: [
          {
            statement: "Der Rollator hat meist eine Sitzfläche für Pausen.",
            isCorrect: true,
            explanation: "Richtig — eines der wichtigsten Merkmale.",
          },
          {
            statement: "Der Gehstock gehört auf die schwache Seite.",
            isCorrect: false,
            explanation: "Falsch — kontralateral, also auf die gesunde Seite.",
          },
          {
            statement: "UAG sind für Teilbelastung bis ca. 20 kg geeignet.",
            isCorrect: true,
            explanation: "Richtig — typische Indikation nach Hüft-TEP.",
          },
          {
            statement: "Der Rollstuhl ist immer die erste Wahl bei Gangunsicherheit.",
            isCorrect: false,
            explanation: "Falsch — zuerst Gehhilfen, dann Rollstuhl.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb11-07",
    phase: "s3",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "F39",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Hilfsmittel nach 2 Wochen",
      body: "Frau Siebert ist 2 Wochen weiter. Sie kann voll belasten, ist aber unsicher bei längeren Strecken.",
    },
    contentB1: {
      title: "Hilfsmittel nach 2 Wochen",
      body: "Frau Siebert ist 2 Wochen weiter. Sie darf voll belasten. Lange Strecken sind schwer.",
    },
    question: {
      fragetext: "Welche Hilfsmittel-Anpassung schlägst du vor?",
      fragetextB1: "Welche Hilfe passt jetzt?",
      branchingOptions: [
        {
          text: "UAG weiter",
          feedback: "",
          isCorrect: false,
        },
        {
          text: "Rollator",
          feedback: "",
          isCorrect: false,
        },
        {
          text: "Gehstock",
          feedback: "",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb11-08",
    phase: "s3",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Teilbelastung einschätzen",
      body: "Nach Hüft-TEP ist oft eine Teilbelastung vorgegeben.",
    },
    contentB1: {
      title: "Teilbelastung",
      body: "Nach Hüft-OP: Wie viel Kilo?",
    },
    question: {
      fragetext: "Wie viele Kilogramm Teilbelastung sind nach Hüft-TEP typischerweise für Frau Siebert vorgegeben?",
      fragetextB1: "Wie viele Kilo darf Frau Siebert belasten?",
      estimation: {
        instruction: "Schätze den Wert.",
        unit: "kg",
        correctValue: 20,
        tolerance: 5,
        funFact: "",
        explanation: "20 kg Teilbelastung ist der typische Wert in den ersten Wochen nach Hüft-TEP.",
        explanationB1: "20 kg sind normal in den ersten Wochen nach Hüft-OP.",
      },
    },
  },
  {
    stepId: "le-06-s3-tb11-09",
    phase: "s3",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Gehhilfen oder Transferhilfen?",
      body: "Hilfsmittel lassen sich in zwei Grundkategorien einteilen.",
    },
    contentB1: {
      title: "Gehhilfen oder Transferhilfen?",
      body: "Es gibt 2 Gruppen.",
    },
    question: {
      fragetext: "Ordne zu.",
      fragetextB1: "Ordne zu.",
      categories: [
        {
          name: "Gehhilfen",
        },
        {
          name: "Transferhilfen",
        },
      ],
      categoryItems: [
        {
          text: "Gehstock",
          correctCategory: 0,
        },
        {
          text: "Unterarmgehstütze",
          correctCategory: 0,
        },
        {
          text: "Rollator",
          correctCategory: 0,
        },
        {
          text: "Rutschbrett",
          correctCategory: 1,
        },
        {
          text: "Drehscheibe",
          correctCategory: 1,
        },
        {
          text: "Lifter",
          correctCategory: 1,
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb11-10",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F38",
      "F39",
      "F40",
      "(SGB V § 33)",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Entlassungs-Hilfsmittel-Empfehlung",
      body: "Frau Siebert wird entlassen. Schreibe eine Empfehlung für die häusliche Versorgung.",
    },
    contentB1: {
      title: "Hilfsmittel zu Hause",
      body: "Frau Siebert darf nach Hause. Was empfiehlst du?",
    },
    question: {
      fragetext: "Welches Hilfsmittel empfiehlst du für zu Hause? Begründe (Wohnung, Treppen, Umfeld).",
      fragetextB1: "Welches Hilfsmittel passt zu Hause? Warum?",
      bewertungskriterien: [
        "Wohnsituation bedenken (Treppen, Türbreiten)",
        "Belastungsgrenze berücksichtigen",
        "Hilfsmittel-Verordnung (§ 33 SGB V)",
        "Einweisung in die Nutzung",
      ],
    },
  },
  {
    stepId: "le-06-s3-tb12-01",
    phase: "s3",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer — Herr Demir]",
      "F41",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Herr Demir nach Schlaganfall",
      body: "Herr Demir (64), Schlaganfall links-hemisphärisch, rechtsseitige Hemiparese. Frustriert: Gestern konnte ich noch alles. Ehefrau Elif ist täglich da.",
    },
    contentB1: {
      title: "Herr Demir nach Schlaganfall",
      body: "Herr Demir (64) hatte einen Schlaganfall. Die rechte Seite ist schwach. Er ist traurig: Gestern ging noch alles. Seine Frau Elif ist jeden Tag da.",
    },
    question: {
      fragetext: "Präge dir den Patienten ein.",
    },
  },
  {
    stepId: "le-06-s3-tb12-02",
    phase: "s3",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath, 1970er)",
      "F41",
      "F42",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Bobath-Grundprinzipien",
      body: "Bobath ist mehr als eine Therapie — es ist ein 24-Stunden-Konzept.",
    },
    contentB1: {
      title: "Bobath — die Grundregeln",
      body: "Bobath ist kein 1-Stunden-Training. Es gilt immer.",
    },
    question: {
      fragetext: "Decke die Prinzipien auf.",
      reveal: {
        instruction: "Tippe, um die Prinzipien aufzudecken.",
        cards: [
          {
            id: "1",
            label: "Betroffene Seite aktiv einbeziehen",
            content: "Nicht schonen — integrieren.",
          },
          {
            id: "2",
            label: "Von betroffener Seite ansprechen",
            content: "So wird die Wahrnehmung gefördert.",
          },
          {
            id: "3",
            label: "Nachttisch auf betroffene Seite",
            content: "Jeder Griff aktiviert die schwache Seite.",
          },
          {
            id: "4",
            label: "Über betroffene Seite mobilisieren",
            content: "Alle Bewegungen führen über die betroffene Seite.",
          },
          {
            id: "5",
            label: "Ziel: Muskeltonus normalisieren",
            content: "Normale Bewegung anbahnen, nicht nur Kraft aufbauen.",
          },
        ],
        revealMode: "free",
      },
    },
  },
  {
    stepId: "le-06-s3-tb12-03",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Neglect verstärken?",
      body: "Was passiert, wenn die betroffene Seite ignoriert wird?",
    },
    contentB1: {
      title: "Neglect",
      body: "Was passiert, wenn man die schwache Seite ignoriert?",
    },
    question: {
      fragetext: "Wenn die betroffene Seite ignoriert wird, verstärkt sich ein Neglect.",
      fragetextB1: "Wenn die schwache Seite ignoriert wird, wird der Neglect stärker.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: true,
          explanation: "Richtig! Neglect (die Seite wird vergessen) verschlimmert sich, wenn man die gesunde Seite bevorzugt.",
          explanationB1: "Richtig! Wenn man die schwache Seite ignoriert, wird der Neglect schlimmer.",
        },
        {
          text: "Falsch",
          isCorrect: false,
          explanation: "Doch — gerade das Ignorieren verstärkt den Neglect.",
          explanationB1: "Doch — Ignorieren macht den Neglect schlimmer.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb12-04",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Von welcher Seite ansprechen?",
      body: "Du betrittst das Zimmer von Herrn Demir. Er hat eine Hemiparese rechts.",
    },
    contentB1: {
      title: "Von welcher Seite ansprechen?",
      body: "Herr Demir hat Hemiparese rechts. Du kommst ins Zimmer.",
    },
    question: {
      fragetext: "Von welcher Seite sprichst du ihn an?",
      fragetextB1: "Von welcher Seite sprichst du ihn an?",
      optionen: [
        {
          text: "Links (gesunde Seite)",
          isCorrect: false,
          explanation: "Falsch — das bevorzugt die gesunde Seite, Neglect-Risiko steigt.",
          explanationB1: "Falsch — das ist nicht Bobath.",
        },
        {
          text: "Rechts (betroffene Seite)",
          isCorrect: true,
          explanation: "Richtig — Bobath-Prinzip: Von der betroffenen Seite ansprechen.",
          explanationB1: "Richtig — bei Bobath: von der schwachen Seite.",
        },
        {
          text: "Von vorne, damit er dich sieht",
          isCorrect: false,
          explanation: "Klingt logisch, aber Bobath verlangt die betroffene Seite.",
          explanationB1: "Klingt gut, aber Bobath sagt: von rechts.",
        },
        {
          text: "Egal, Hauptsache laut",
          isCorrect: false,
          explanation: "Die Seite ist entscheidend, nicht die Lautstärke.",
          explanationB1: "Die Seite ist wichtig.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb12-05",
    phase: "s3",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F41",
      "F42",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Bobath-Mythen",
      body: "Richtig oder falsch?",
    },
    contentB1: {
      title: "Bobath — stimmt das?",
      body: "Richtig oder falsch?",
    },
    question: {
      fragetext: "Stimmt die Aussage?",
      fragetextB1: "Stimmt das?",
      swipe: {
        instruction: "Wische nach rechts für \"richtig\", nach links für \"falsch\".",
        cards: [
          {
            statement: "Nachttisch auf die gesunde Seite stellen",
            isCorrect: false,
            explanation: "Falsch — Nachttisch kommt auf die betroffene Seite.",
          },
          {
            statement: "Bei Hemiparese rechts den Rollstuhl rechts stellen",
            isCorrect: true,
            explanation: "Richtig — Rollstuhl auf die betroffene Seite.",
          },
          {
            statement: "Die betroffene Seite schonen, damit sie heilt",
            isCorrect: false,
            explanation: "Falsch — Schonen verstärkt den Neglect.",
          },
          {
            statement: "Bobath eignet sich auch für MS und Parkinson, nicht nur für Schlaganfall",
            isCorrect: true,
            explanation: "Richtig — Bobath ist bei verschiedenen neurologischen Erkrankungen anwendbar.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb12-06",
    phase: "s3",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Bobath im Alltag",
      body: "Alltägliche Situationen lassen sich Bobath-konform gestalten.",
    },
    contentB1: {
      title: "Bobath im Alltag",
      body: "Alltag mit Bobath.",
    },
    question: {
      fragetext: "Ordne Alltagssituation und Bobath-Umsetzung zu.",
      fragetextB1: "Ordne zu.",
      matchingPairs: [
        {
          left: "Essen anreichen",
          right: "Teller auf betroffene Seite stellen",
        },
        {
          left: "Besucher kommt",
          right: "Von der betroffenen Seite eintreten lassen",
        },
        {
          left: "Mobilisation",
          right: "Über betroffene Seite an die Bettkante",
        },
        {
          left: "TV schauen",
          right: "Fernseher auf betroffene Seite",
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb12-07",
    phase: "s3",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Bobath-Fehler auf Station",
      body: "Finde die Fehler im Stationsalltag.",
    },
    contentB1: {
      title: "Bobath-Fehler",
      body: "Finde die Fehler.",
    },
    question: {
      fragetext: "Pfleger stellt Nachttisch links (gesund), spricht Herrn Demir von links an und mobilisiert über die linke Seite.",
      fragetextB1: "Der Pfleger stellt den Nachttisch links. Er spricht Herrn Demir von links an. Er mobilisiert über links.",
      errorspot: {
        instruction: "Pfleger stellt Nachttisch links (gesund), spricht Herrn Demir von links an und mobilisiert über die linke Seite.",
        text: "Pfleger stellt Nachttisch links (gesund), spricht Herrn Demir von links an und mobilisiert über die linke Seite.",
        errors: [
          {
            start: 0,
            end: 0,
            correction: "Nachttisch gehört auf die betroffene (rechte) Seite.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Ansprechen von der betroffenen (rechten) Seite.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Mobilisation über die betroffene (rechte) Seite.",
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s3-tb12-08",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F42",
    ],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Ehefrau Elif einbeziehen",
      body: "Elif fragt: Kann mein Mann wieder arbeiten? Und: Warum soll ich immer von rechts kommen?",
    },
    contentB1: {
      title: "Elif einbeziehen",
      body: "Elif fragt: Kann er wieder arbeiten? Warum soll ich immer von rechts kommen?",
    },
    question: {
      fragetext: "Wie reagierst du?",
      fragetextB1: "Was sagst du?",
      dialogPhases: [
        {
          context: "Elif sieht dich bittend an und hofft auf Antworten. Wie beginnst du?",
          contextB1: "Elif schaut dich an und hofft auf Antworten. Wie fängst du an?",
          options: [
            {
              text: "Ihr Mann wird wieder arbeiten können, keine Sorge.",
              patientResponse: "",
              score: 1,
              feedback: "Prognose ist ärztliche Aufgabe — nicht versprechen.",
              feedbackB1: "Das darf nur der Arzt sagen.",
            },
            {
              text: "Die Prognose bespricht Ihr Arzt mit Ihnen. Zu Bobath kann ich Ihnen sofort etwas zeigen.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — Zuständigkeit klar, Bobath-Teil übernimmst du.",
              feedbackB1: "Perfekt — Arzt für Prognose, du erklärst Bobath.",
            },
            {
              text: "Dafür bin ich nicht zuständig.",
              patientResponse: "",
              score: 1,
              feedback: "Zu knapp — verweise konkret auf den Arzt und biete Bobath-Erklärung an.",
              feedbackB1: "Zu kurz. Zeige eine Lösung.",
            },
          ],
        },
        {
          context: "Elif nickt und fragt nach Bobath. Wie erklärst du ihr das Prinzip?",
          contextB1: "Elif nickt und will über Bobath wissen. Wie erklärst du Bobath?",
          options: [
            {
              text: "Das ist zu kompliziert, das versteht nur das Fachpersonal.",
              patientResponse: "",
              score: 1,
              feedback: "Respektlos — Angehörige haben Recht auf Erklärung.",
              feedbackB1: "Das ist nicht höflich.",
            },
            {
              text: "Jeder Griff und jede Bewegung über die rechte Seite hilft seinem Gehirn, die Seite wieder zu spüren.",
              patientResponse: "",
              score: 3,
              feedback: "Sehr gut — einfach und kausal erklärt.",
              feedbackB1: "Sehr gut — einfach und richtig.",
            },
            {
              text: "Das hat was mit Neuroplastizität zu tun.",
              patientResponse: "",
              score: 2,
              feedback: "Fachbegriff ohne Erklärung verwirrt.",
              feedbackB1: "Fachwort allein hilft nicht.",
            },
          ],
        },
        {
          context: "Elif will Bobath sofort anwenden. Wie leitest du sie an?",
          contextB1: "Elif will es gleich ausprobieren. Wie hilfst du ihr?",
          options: [
            {
              text: "Treten Sie von rechts ans Bett. Ich zeige Ihnen, wie Sie ihm von rechts die Hand geben.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — konkret und praktisch angeleitet.",
              feedbackB1: "Perfekt — praktisch erklärt.",
            },
            {
              text: "Machen Sie einfach das Gleiche wie ich.",
              patientResponse: "",
              score: 1,
              feedback: "Zu vage, braucht klare Struktur.",
              feedbackB1: "Zu ungenau.",
            },
            {
              text: "Erst wenn die Therapeuten da sind.",
              patientResponse: "",
              score: 1,
              feedback: "Nein — du kannst Angehörige jetzt anleiten.",
              feedbackB1: "Nein — du kannst jetzt helfen.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s3-tb12-09",
    phase: "s3",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F41",
      "F42",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Bobath — wie sicher bist du?",
      body: "Schätze deinen aktuellen Kenntnisstand ein.",
    },
    contentB1: {
      title: "Wie sicher bist du bei Bobath?",
      body: "Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei Bobath-Anwendung im Alltag?",
      fragetextB1: "Wie sicher bist du bei Bobath?",
      statements: [
        "sehr unsicher",
        "unsicher",
        "neutral",
        "sicher",
        "sehr sicher",
      ],
    },
  },
  {
    stepId: "le-06-s3-tb12-10",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F41",
      "F42",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Bobath-Handlungsplan",
      body: "Erstelle einen Plan für Herrn Demir.",
    },
    contentB1: {
      title: "Bobath-Plan",
      body: "Schreibe einen Plan.",
    },
    question: {
      fragetext: "Welche 5 konkreten Bobath-Maßnahmen setzt du bei Herrn Demir im Stationsalltag um?",
      fragetextB1: "Welche 5 Bobath-Maßnahmen machst du bei Herrn Demir?",
      bewertungskriterien: [
        "Ansprechen von rechts (betroffene Seite)",
        "Nachttisch rechts platzieren",
        "Mobilisation über die rechte Seite",
        "Rollstuhl rechts vom Bett",
        "Angehörige (Elif) einbeziehen und anleiten",
      ],
    },
  },
];
