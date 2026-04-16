// LE-06: Menschen aller Altersstufen in ihrer Mobilität unterstuetzen
// Steps S5: Pfade 17-20 (Pneumonieprophylaxe, Prophylaxe-Bündel, Schlaf, Assessments)
// Bloom: B1-B3, 1. Ausbildungsdrittel
// HINWEIS: Alle Pfade im Plan als Kurzformat — Details ergaenzt

import type { ContentStep } from "../_types";

export const LE06_STEPS_S5: ContentStep[] = [
  {
    stepId: "le-06-s5-tb17-01",
    phase: "s5",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F68",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Zusammenhang Mundpflege und Pneumonie aktivieren",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Mundpflege und Pneumonie?",
      body: "Was hat das eine mit dem anderen zu tun?",
    },
    contentB1: {
      title: "Mundpflege und Lunge?",
      body: "Gibt es einen Zusammenhang?",
    },
    question: {
      fragetext: "Was denkst du?",
    },
  },
  {
    stepId: "le-06-s5-tb17-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F68",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "LISA-Prinzip kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    displayFormat: "mnemonic",
    contentC1: {
      title: "LISA - Merkhilfe Pneumonieprophylaxe",
      body: "L = Lungenbelüftung fördern, I = Infektionen vermeiden, S = Sekret mobilisieren, A = Aspiration vermeiden.",
    },
    contentB1: {
      title: "LISA",
      body: "L = Luft in die Lunge, I = keine Infektion, S = Schleim lösen, A = nichts verschlucken.",
    },
  },
  {
    stepId: "le-06-s5-tb17-03",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F68",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "LISA-Buchstaben und Maßnahmen verknüpfen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "LISA und Maßnahmen",
      body: "Ordne zu.",
    },
    contentB1: {
      title: "Was passt?",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Ordne Buchstabe und Maßnahme zu.",
      matchingPairs: [
        {
          left: "L - Lungenbelüftung",
          right: "Atemübungen, aufrechte Lagerung",
        },
        {
          left: "I - Infektionen",
          right: "Mundpflege, Händehygiene",
        },
        {
          left: "S - Sekret",
          right: "Inhalation, Abklopfen, Flüssigkeit",
        },
        {
          left: "A - Aspiration",
          right: "Oberkörper hoch beim Essen, Schluckstatus prüfen",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb17-04",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F69",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Risikofaktoren für Pneumonie kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Risikofaktoren",
      body: "Wer ist besonders gefährdet?",
    },
    contentB1: {
      title: "Wer hat Risiko?",
      body: "Welche Patienten sind gefährdet?",
    },
    question: {
      fragetext: "Welcher Patient hat das höchste Pneumonie-Risiko?",
      optionen: [
        {
          text: "Junger Sportler mit Unterschenkelfraktur",
          isCorrect: false,
          explanation: "Mobil, keine weiteren Risiken.",
          explanationB1: "Zu gesund.",
        },
        {
          text: "78-Jähriger mit Schluckstörung nach Schlaganfall, bettlägerig",
          isCorrect: true,
          explanation: "Dysphagie + Immobilität + Schonatmung = hoch.",
          explanationB1: "Richtig. Alle Risiken zusammen.",
        },
        {
          text: "45-Jährige nach ambulanter Knie-OP",
          isCorrect: false,
          explanation: "Nur kurz immobil.",
          explanationB1: "Kurze Ruhigstellung.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb17-05",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F68",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "4 Säulen mit konkreten Maßnahmen kennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "4 Säulen konkret",
      body: "Welche Maßnahmen wirken?",
    },
    contentB1: {
      title: "Was hilft?",
      body: "4 Säulen.",
    },
    question: {
      fragetext: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten.",
        cards: [
          {
            front: "Lungenbelüftung",
            back: "Atemübungen, Incentive Spirometer, Oberkörperhoch, Mobilisation",
          },
          {
            front: "Infektionen",
            back: "Mundpflege 3x tgl., Händedesinfektion, Impfungen (Pneumokokken, Influenza)",
          },
          {
            front: "Sekretmobilisation",
            back: "Inhalation, Vibrax, Klopfmassage, 1,5-2 L Flüssigkeit",
          },
          {
            front: "Aspirationsschutz",
            back: "Oberkörper 30-45 Grad beim Essen, Schluckkontrolle, angepasste Kost",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb17-06",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F68",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Richtige von falschen Maßnahmen trennen",
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
      fragetext: "Pneumonieprophylaxe: richtig?",
      swipe: {
        instruction: "Pneumonieprophylaxe: richtig?",
        cards: [
          {
            statement: "Mundpflege mindestens 3x täglich",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Bei Husten immer sofort stoppen",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Oberkörper beim Essen flach liegen lassen",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Ausreichende Flüssigkeit fördert Sekretlösung",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Mobilisation auch bei Fieber hilfreich",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb17-07",
    phase: "s5",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F69",
      "RKI",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Pneumoniefälle pro Jahr schätzen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Pneumonie-Fälle pro Jahr in DE",
      body: "Wie viele jährlich?",
    },
    contentB1: {
      title: "Wie häufig?",
      body: "Fälle pro Jahr in Deutschland?",
    },
    question: {
      fragetext: "Schätze die jährliche Fallzahl.",
      estimation: {
        instruction: "Schätze die jährliche Fallzahl.",
        unit: "Fälle",
        correctValue: 500000,
        tolerance: 100000,
        funFact: "",
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s5-tb17-08",
    phase: "s5",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.3",
    quellen: [
      "F70",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Atemübung anleiten",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Atemübung anleiten",
      body: "Sortiere die Schritte.",
    },
    contentB1: {
      title: "Atemübung",
      body: "Was zuerst?",
    },
    question: {
      fragetext: "Sortiere die Anleitung einer Atemübung.",
      sequencing: {
        instruction: "Sortiere die Anleitung einer Atemübung.",
        items: [
          {
            id: "item-1",
            label: "Patient aufrecht hinsetzen lassen",
          },
          {
            id: "item-2",
            label: "Durch die Nase tief einatmen",
          },
          {
            id: "item-3",
            label: "Kurz den Atem halten (2-3 Sekunden)",
          },
          {
            id: "item-4",
            label: "Langsam durch den Mund ausatmen (Lippenbremse)",
          },
          {
            id: "item-5",
            label: "5-10 Wiederholungen, dann Pause",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb17-09",
    phase: "s5",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F70",
    ],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "Fehler in Pneumonieprophylaxe erkennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Fehler bei Herrn Demir",
      body: "Finde die Fehler.",
    },
    contentB1: {
      title: "Was ist falsch?",
      body: "Fehler finden.",
    },
    question: {
      fragetext: "Finde die Fehler in der Pneumonieprophylaxe bei Herrn Demir.",
      errorspot: {
        instruction: "Finde die Fehler in der Pneumonieprophylaxe bei Herrn Demir.",
        text: "Herr Demir (Schlaganfall, Dysphagie). Kollegin beschreibt ihre Pflege.",
        errors: [
          {
            start: 0,
            end: 44,
            correction: "",
            explanation: "Flache Lage bei Dysphagie = Aspirationsgefahr. Mind. 45 Grad.",
          },
          {
            start: 1,
            end: 37,
            correction: "",
            explanation: "Zu selten. Mind. 3x tgl., bei Dysphagie 6-8x tgl.",
          },
          {
            start: 2,
            end: 45,
            correction: "",
            explanation: "Bei Dysphagie: angedickte Flüssigkeit.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb17-10",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F68",
      "F69",
      "F70",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "LISA-Plan für Herrn Demir erstellen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "LISA-Plan Herr Demir",
      body: "Herr Demir (64, Schlaganfall, Dysphagie, bettlägerig). Erstelle einen LISA-Plan mit je 1 Maßnahme pro Buchstaben.",
    },
    contentB1: {
      title: "LISA-Plan",
      body: "Was machst du bei jedem Buchstaben?",
    },
    question: {
      fragetext: "Formuliere 4 konkrete Maßnahmen (L-I-S-A) mit Begründung.",
      musterantwort: "L: Oberkörperhoch 45 Grad + Atemübungen 4x tgl.; I: Mundpflege 6x tgl., Händehygiene; S: Inhalation, 1,5 L Flüssigkeit (angedickt); A: Schluckstatus vor Essen, angedickte Kost, nach Essen 30 Min aufrecht.",
    },
  },
  {
    stepId: "le-06-s5-tb18-01",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Frühmobilisation als universelle Maßnahme verstehen",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    displayFormat: "procontra",
    contentC1: {
      title: "Frühmobilisation: Die Super-Maßnahme",
      body: "Frühmobilisation wirkt gleichzeitig auf ALLE 5 Prophylaxen: Dekubitus (Druckentlastung), Thrombose (Blutfluss), Pneumonie (Lungenbelüftung), Kontraktur (Bewegung), Sturz (Kraftaufbau).",
    },
    contentB1: {
      title: "Eine Maßnahme - viele Wirkungen",
      body: "Frühmobilisation hilft gegen alle 5 Probleme gleichzeitig.",
    },
  },
  {
    stepId: "le-06-s5-tb18-02",
    phase: "s5",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Vernetzung der 5 Prophylaxen verstehen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Vernetzung der 5 Prophylaxen",
      body: "Wie hängen sie zusammen?",
    },
    contentB1: {
      title: "Verknüpfung",
      body: "Wie hängt alles zusammen?",
    },
    question: {
      fragetext: "Erforsche die Vernetzung.",
      diagram: {
        instruction: "Erforsche das Diagramm.",
        diagramType: "mindmap",
        nodes: [
          {
            id: "n1",
            label: "Dekubitus-Prophylaxe",
          },
          {
            id: "n2",
            label: "Thrombose-Prophylaxe",
          },
          {
            id: "n3",
            label: "Pneumonie-Prophylaxe",
          },
          {
            id: "n4",
            label: "Kontraktur-Prophylaxe",
          },
          {
            id: "n5",
            label: "Sturz-Prophylaxe",
          },
        ],
        edges: [
          {
            from: "zentral",
            to: "n1",
            label: "Druckentlastung",
          },
          {
            from: "zentral",
            to: "n2",
            label: "Muskelpumpe",
          },
          {
            from: "zentral",
            to: "n3",
            label: "Lungenbelüftung",
          },
          {
            from: "zentral",
            to: "n4",
            label: "Gelenkbewegung",
          },
          {
            from: "zentral",
            to: "n5",
            label: "Kraftaufbau",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb18-03",
    phase: "s5",
    stepType: "matrix",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F72",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Maßnahmen-Wirkungsmatrix verstehen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Wirkungsmatrix",
      body: "Markiere, auf welche Prophylaxe die Maßnahme wirkt.",
    },
    contentB1: {
      title: "Was wirkt wo?",
      body: "Matrix ausfüllen.",
    },
    question: {
      fragetext: "Welche Maßnahme wirkt auf welche Prophylaxe?",
      matrix: {
        instruction: "Ordne die Maßnahmen in die Matrix nach Wirkung auf Thromboseprophylaxe (X) und Sturzprophylaxe (Y).",
        axisX: {
          label: "Wirkung auf Thromboseprophylaxe",
          low: "gering",
          high: "hoch",
        },
        axisY: {
          label: "Wirkung auf Sturzprophylaxe",
          low: "gering",
          high: "hoch",
        },
        items: [
          { id: "mob", text: "Frühmobilisation", correctQuadrant: 1 },
          { id: "ath", text: "Anti-Thrombose-Strümpfe", correctQuadrant: 4 },
          { id: "halt", text: "Haltegriffe im Bad", correctQuadrant: 2 },
          { id: "beleu", text: "Nachtbeleuchtung", correctQuadrant: 2 },
          { id: "bewegung", text: "Bewegungsübungen im Bett", correctQuadrant: 4 },
          { id: "schuhe", text: "Festes Schuhwerk", correctQuadrant: 2 },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb18-04",
    phase: "s5",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F72",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Maßnahmen den Prophylaxen zuordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Welche Prophylaxe?",
      body: "Ordne zu.",
    },
    contentB1: {
      title: "Sortiere",
      body: "Welche Prophylaxe?",
    },
    question: {
      fragetext: "Ordne die Maßnahmen ihrer hauptsächlichen Prophylaxe zu.",
      categories: [
        {
          name: "Dekubitus",
        },
        {
          name: "Sturz",
        },
        {
          name: "Thrombose",
        },
        {
          name: "Pneumonie",
        },
      ],
      categoryItems: [
        {
          text: "Wechseldruckmatratze",
          correctCategory: 0,
        },
        {
          text: "MTS",
          correctCategory: 0,
        },
        {
          text: "Atemübungen",
          correctCategory: 0,
        },
        {
          text: "TUG-Test",
          correctCategory: 0,
        },
        {
          text: "Braden-Skala",
          correctCategory: 0,
        },
        {
          text: "Nachtlicht",
          correctCategory: 0,
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb18-05",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Maßnahme mit breitester Wirkung identifizieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Frau Siebert: Beste Maßnahme?",
      body: "Welche hat den breitesten Effekt?",
    },
    contentB1: {
      title: "Welche Maßnahme wirkt am meisten?",
      body: "Frau Siebert.",
    },
    question: {
      fragetext: "Welche einzelne Maßnahme bringt Frau Siebert am meisten?",
      optionen: [
        {
          text: "Frühmobilisation (alle 5 Prophylaxen)",
          isCorrect: true,
          explanation: "Richtig. Wirkt auf alle 5 Prophylaxen gleichzeitig.",
          explanationB1: "Richtig. Hilft gegen alle Risiken.",
        },
        {
          text: "MTS (nur Thrombose)",
          isCorrect: false,
          explanation: "Wirkt nur auf Thrombose.",
          explanationB1: "Nur für Thrombose.",
        },
        {
          text: "Bettseitenteile hoch (nur Sturz)",
          isCorrect: false,
          explanation: "Schützt nur vor Sturz aus dem Bett.",
          explanationB1: "Nur gegen Sturz.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb18-06",
    phase: "s5",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
      "F72",
    ],
    track: "vertiefung",
    modus: "praxis-sim",
    lernziel: "Prophylaxe-Bündel planen bei komplexem Fall",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Komplexer Fall",
      body: "Ein 80-jähriger Patient nach Oberschenkelhalsfraktur, bettlägerig, leichte Dysphagie. Plane das Prophylaxe-Bündel.",
    },
    contentB1: {
      title: "Schwieriger Fall",
      body: "Patient mit vielen Risiken. Welche Maßnahmen?",
    },
    question: {
      fragetext: "Triff die richtigen Entscheidungen.",
      branchingOptions: [
        {
          text: "Absolute Bettruhe für 48h",
          feedback: "Vorsicht ist verständlich — du willst Schutz geben. Aber Immobilität schadet: VTE, Dekubitus, Muskelabbau. Die S3-LL fordert Frühmobilisation. Du denkst in die richtige Richtung, nur die Maßnahme kippt um!",
          isCorrect: false,
        },
        {
          text: "Frühmobilisation an die Bettkante noch heute",
          feedback: "Richtig. Frühmobilisation höchste Priorität.",
          isCorrect: false,
        },
        {
          text: "Nur passive Bewegung, kein Aufstehen",
          feedback: "Guter Ansatz — Bewegung ist Pflicht. Aber passive Bewegung allein reicht nicht: Kreislauf, Muskulatur und Atmung brauchen aktive Belastung. Frühmobilisation an die Bettkante ist der Standard. Du bist auf dem Weg!",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb18-07",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Prophylaxe-Zusammenhänge erfassen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Zusammenhänge",
      body: "Swipe.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Sind die Zusammenhänge korrekt?",
      swipe: {
        instruction: "Sind die Zusammenhänge korrekt?",
        cards: [
          {
            statement: "Bewegung fördert Blutfluss",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Immobilität schützt vor allen Risiken",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Eine Maßnahme kann mehrere Prophylaxen abdecken",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Frühmobilisation erhöht Sturzrisiko und ist gefährlich",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb18-08",
    phase: "s5",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F72",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Einzelprophylaxe und Bündel unterscheiden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Einzel vs. Bündel",
      body: "Vergleiche.",
    },
    contentB1: {
      title: "Einzeln oder alles?",
      body: "Was ist besser?",
    },
    question: {
      fragetext: "Vergleiche die Ansätze.",
      comparison: {
        instruction: "Vergleiche die Optionen.",
        columns: [
          {
            label: "Einzelprophylaxe",
          },
          {
            label: "Prophylaxe-Bündel",
          },
        ],
        rows: [
          {
            criterion: "Fokus",
            values: [
              "Eine Prophylaxe",
              "Alle relevanten Prophylaxen",
            ],
          },
          {
            criterion: "Planung",
            values: [
              "Einfach",
              "Komplex, aber wirksamer",
            ],
          },
          {
            criterion: "Synergie",
            values: [
              "Keine",
              "Nutzt Überlappungen (z.B. Frühmobilisation)",
            ],
          },
          {
            criterion: "Fallbeispiel",
            values: [
              "Nur MTS bei OP",
              "MTS + Heparin + Mobilisation + MTS",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb18-09",
    phase: "s5",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Eigene Sicherheit im Prophylaxe-Bündel einschätzen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Wie sicher?",
      body: "Schätze deine Sicherheit ein.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Schätze ein.",
    },
    question: {
      fragetext: "Wie sicher fehlst du dich, ein Prophylaxe-Bündel für einen Patienten zu planen?",
      statements: [
        "Unsicher - brauche Schritt-für-Schritt-Anleitung",
        "Mit Spickzettel schaffe ich es",
        "Selbständig mit gelegentlichem Rückfragen",
        "Sicher und systematisch",
      ],
    },
  },
  {
    stepId: "le-06-s5-tb18-10",
    phase: "s5",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F71",
      "F72",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Komplettes Prophylaxe-Bündel für Frau Siebert erstellen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 40,
    contentC1: {
      title: "Prophylaxe-Bündel Frau Siebert",
      body: "Erstelle einen Plan: Alle 5 Prophylaxen mit je 2 konkreten Maßnahmen.",
    },
    contentB1: {
      title: "Plan für Frau Siebert",
      body: "Alle 5 Prophylaxen, je 2 Maßnahmen.",
    },
    question: {
      fragetext: "Erstelle einen vollständigen Prophylaxe-Plan.",
      careplan: {
        patientName: "Leitfall",
        situation: "Erstelle einen vollständigen Prophylaxe-Plan.",
        steps: [
          {
            phase: "massnahme",
            prompt: "Nenne Maßnahmen zur undefined",
            musterantwort: "Maßnahmen siehe Fachliteratur.",
          },
          {
            phase: "massnahme",
            prompt: "Nenne Maßnahmen zur undefined",
            musterantwort: "Maßnahmen siehe Fachliteratur.",
          },
          {
            phase: "massnahme",
            prompt: "Nenne Maßnahmen zur undefined",
            musterantwort: "Maßnahmen siehe Fachliteratur.",
          },
          {
            phase: "massnahme",
            prompt: "Nenne Maßnahmen zur undefined",
            musterantwort: "Maßnahmen siehe Fachliteratur.",
          },
          {
            phase: "massnahme",
            prompt: "Nenne Maßnahmen zur undefined",
            musterantwort: "Maßnahmen siehe Fachliteratur.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb19-01",
    phase: "s5",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F73",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Vorwissen zu Schlafzyklen aktivieren",
    themenblockPhase: "SZENE",
    tag: "anatomie",
    xpValue: 10,
    contentC1: {
      title: "Wie viele Schlafzyklen?",
      body: "Pro Nacht?",
    },
    contentB1: {
      title: "Wie oft?",
      body: "Schlafzyklen pro Nacht?",
    },
    question: {
      fragetext: "Wie viele Schlafzyklen hat ein gesunder Erwachsener pro Nacht?",
    },
  },
  {
    stepId: "le-06-s5-tb19-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F73",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Schlafzyklen und Schlafarchitektur verstehen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 10,
    displayFormat: "analogy",
    contentC1: {
      title: "Schlafzyklen",
      body: "Schlaf besteht aus 4-7 Zyklen zu je ca. 90 Minuten. Jeder Zyklus durchläuft Non-REM (4 Stadien) und REM-Schlaf. Vergleich: wie eine Achterbahn-Fahrt, die mehrmals die gleiche Strecke abfährt.",
    },
    contentB1: {
      title: "Schlaf-Phasen",
      body: "Schlaf hat 4-7 Zyklen pro Nacht. Jeder Zyklus dauert ca. 90 Minuten. Es gibt Tiefschlaf und Traumschlaf.",
    },
  },
  {
    stepId: "le-06-s5-tb19-03",
    phase: "s5",
    stepType: "timeline",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F73",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Phasen eines Schlafzyklus ordnen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Ein Schlafzyklus",
      body: "Phasen in Reihenfolge.",
    },
    contentB1: {
      title: "Phasen",
      body: "Reihenfolge.",
    },
    question: {
      fragetext: "Ordne die Phasen.",
      timeline: {
        instruction: "Lies die Zeitleiste.",
        events: [
          {
            id: "1",
            time: "N1",
            title: "Einschlafphase",
            description: "Leichter Schlaf, 5-10 Min",
          },
          {
            id: "2",
            time: "N2",
            title: "Leichter Schlaf",
            description: "Ca. 50% der Nacht",
          },
          {
            id: "3",
            time: "N3",
            title: "Tiefschlaf",
            description: "Körperliche Regeneration",
          },
          {
            id: "4",
            time: "REM",
            title: "Traumschlaf",
            description: "Gehirn aktiv, Körper entspannt",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb19-04",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F74",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Altersabhängige Schlafveränderungen von Schlafstörungen unterscheiden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Schlaf im Alter?",
      body: "Prüfe.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Prüfe.",
    },
    question: {
      fragetext: "Schlafveränderungen im Alter (kürzere Tiefschlafphasen, häufigere Wachphasen) sind eine Schlafstörung.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: false,
          explanation: "Verständlicher Schluss — die Veränderungen wirken ja wie eine Störung. Aber kürzere Tiefschlafphasen und häufigere Wachphasen sind physiologisch, also normal im Alter. Eine Störung liegt erst bei Leidensdruck oder Tagesbeeinträchtigung vor. Guter kritischer Blick!",
        },
        {
          text: "Falsch",
          isCorrect: true,
          explanation: "Richtig. Die Veränderungen sind physiologisch, nicht pathologisch. Erst Leidensdruck oder Tagesbeeinträchtigung machen daraus eine Schlafstörung.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb19-05",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F75",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Schlaf und Mobilität verknüpfen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Schlaf und Mobilität",
      body: "Wie hängen sie zusammen?",
    },
    contentB1: {
      title: "Zusammenhang",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Verbinde Ursache und Wirkung.",
      matchingPairs: [
        {
          left: "Schlafmangel",
          right: "Müdigkeit und Sturzrisiko",
        },
        {
          left: "Sedativa",
          right: "Unsicherer Gang, Sturzgefahr",
        },
        {
          left: "Tiefschlafmangel",
          right: "Muskelregeneration gestört",
        },
        {
          left: "REM-Schlaf",
          right: "Gedächtnisbildung, emotionale Verarbeitung",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb19-06",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F76",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Schlafhygiene-Maßnahmen kennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Schlafhygiene",
      body: "Konkrete Maßnahmen.",
    },
    contentB1: {
      title: "Maßnahmen",
      body: "Was hilft?",
    },
    question: {
      fragetext: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten.",
        cards: [
          {
            front: "Lichtmanagement",
            back: "Dunkelheit nachts, Tageslicht tagsüber",
          },
          {
            front: "Lärm reduzieren",
            back: "Geräuschkulisse minimieren, Türschlagen vermeiden",
          },
          {
            front: "Rituale fördern",
            back: "Gewohnte Abendroutinen erhalten",
          },
          {
            front: "Körperliche Aktivität am Tag",
            back: "Tagsüber mobilisieren, nachts schlafen",
          },
          {
            front: "Temperatur",
            back: "Kühles Zimmer (16-18 Grad), leichte Decke",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb19-07",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F76",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Risiken von Schlafmedikamenten verstehen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Schlafmedikamente",
      body: "Problem oder Lösung?",
    },
    contentB1: {
      title: "Tabletten zum Schlafen?",
      body: "Gut oder schlecht?",
    },
    question: {
      fragetext: "Welche Aussage stimmt zu Schlafmedikamenten?",
      optionen: [
        {
          text: "Sie sind unbedenklich und immer erste Wahl",
          isCorrect: false,
          explanation: "Nachvollziehbar — Medikamente wirken oft schnell und verlockend. Aber Hypnotika haben ein hohes Abhängigkeitspotenzial, verändern die Schlafarchitektur und erhöhen das Sturzrisiko. Erste Wahl sind nicht-medikamentöse Maßnahmen. Guter Reflexionspunkt!",
          explanationB1: "Gut gedacht, aber nicht richtig. Schlaftabletten machen abhängig und erhöhen das Sturzrisiko. Zuerst Schlafhygiene probieren.",
        },
        {
          text: "Sie verändern die Schlafarchitektur und erhöhen Sturzrisiko",
          isCorrect: true,
          explanation: "Richtig. Weniger Tiefschlaf, mehr Sturzrisiko, Abhängigkeit.",
          explanationB1: "Richtig. Sie verändern den Schlaf und Sturzrisiko steigt.",
        },
        {
          text: "Sie fördern REM-Schlaf",
          isCorrect: false,
          explanation: "Guter Gedanke — du denkst an die Schlafphasen. Genau hier liegt der Haken: Benzodiazepine und Z-Substanzen unterdrücken REM-Schlaf sogar. Das führt zu unerholsamem Schlaf trotz Einschlafhilfe. Du bist nah am richtigen Verständnis!",
          explanationB1: "Schlafphasen sind wichtig — richtig gedacht. Aber sie unterdrücken REM-Schlaf. Du kommst der Lösung näher!",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb19-08",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F76",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Schlafhygiene-Maßnahmen einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Schlafhygiene: Richtig/Falsch",
      body: "Swipe.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Ist die Maßnahme schlaffördernd?",
      swipe: {
        instruction: "Ist die Maßnahme schlaffördernd?",
        cards: [
          {
            statement: "Nachtlicht dimmen, aber nicht komplett aus",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Abends noch viel Flüssigkeit anbieten",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Routinen respektieren (z.B. Radio, Lieblingskissen)",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Patient tagsüber lange schlafen lassen",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Kühles Zimmer (16-18 Grad)",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb19-09",
    phase: "s5",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F76",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Störfaktoren kategorisieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Störfaktoren",
      body: "Veränderbar oder nicht?",
    },
    contentB1: {
      title: "Was können wir ändern?",
      body: "Sortiere.",
    },
    question: {
      fragetext: "Ordne die Störfaktoren.",
      categories: [
        {
          name: "Veränderbar",
        },
        {
          name: "Nicht veränderbar",
        },
      ],
      categoryItems: [
        {
          text: "Mitbewohner schnarcht",
          correctCategory: 0,
        },
        {
          text: "Demenz-bedingte Nachtaktivität",
          correctCategory: 0,
        },
        {
          text: "Zimmerbeleuchtung",
          correctCategory: 0,
        },
        {
          text: "Altersbedingte Schlafveränderung",
          correctCategory: 0,
        },
        {
          text: "Nächtliche Routinemaßnahmen",
          correctCategory: 0,
        },
        {
          text: "Schmerzen",
          correctCategory: 0,
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb19-10",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.3",
    quellen: [
      "F77",
    ],
    track: "vertiefung",
    modus: "praxis-sim",
    lernziel: "Mit Patientin über Schlaf sprechen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Frau Siebert schläft schlecht",
      body: "Sie ist müde und klagt über gestörten Nachtschlaf. Führe das Gespräch.",
    },
    contentB1: {
      title: "Gespräch mit Frau Siebert",
      body: "Sie schläft schlecht. Was sagst du?",
    },
    question: {
      fragetext: "Wähle die beste Reaktion.",
      dialogPhases: [
        {
          context: "Guten Morgen Frau Siebert, wie haben Sie geschlafen?",
          options: [
            {
              text: "Gar nicht! Um 3 war eine Schwester da und hat mich geweckt.",
              patientResponse: "",
              score: 3,
              feedback: "Offene Antwort - gut, dass du nachfragst.",
            },
            {
              text: "Das müssen Sie schon alleine lösen.",
              patientResponse: "",
              score: 1,
              feedback: "Ablehnend.",
            },
            {
              text: "Bei uns ist halt viel los nachts.",
              patientResponse: "",
              score: 1,
              feedback: "Ignoriert das Problem.",
            },
          ],
        },
        {
          context: "Frau Siebert möchte um 22 Uhr Radio hören, wie zuhause.",
          options: [
            {
              text: "Nein, das stört die Mitbewohnerin.",
              patientResponse: "",
              score: 1,
              feedback: "Zu starr.",
            },
            {
              text: "Mit Kopfhörern oder leise - wir schauen was geht.",
              patientResponse: "",
              score: 3,
              feedback: "Lösungsorientiert und ritualwahrend.",
            },
            {
              text: "Das ist hier nicht erlaubt.",
              patientResponse: "",
              score: 1,
              feedback: "Nicht personenzentriert.",
            },
          ],
        },
        {
          context: "Sie fragt nach einer Schlaftablette.",
          options: [
            {
              text: "Kein Problem, geb ich Ihnen mit.",
              patientResponse: "",
              score: 1,
              feedback: "Nicht unsere Entscheidung. Und: Sturzrisiko steigt.",
            },
            {
              text: "Lassen Sie uns erst über Schlafhygiene sprechen. Wenn das nicht hilft, klären wir mit der Ärztin.",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt - Leitliniengerecht.",
            },
            {
              text: "Tabletten sind giftig!",
              patientResponse: "",
              score: 1,
              feedback: "Zu wertend, verunsichert.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb19-11",
    phase: "s5",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F73",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Dauer eines Schlafzyklus kennen",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 10,
    contentC1: {
      title: "Schlafzyklus-Dauer",
      body: "Wie lang?",
    },
    contentB1: {
      title: "Wie lang?",
      body: "Ein Zyklus?",
    },
    question: {
      fragetext: "Schätze die Dauer.",
      estimation: {
        instruction: "Schätze die Dauer.",
        unit: "Minuten",
        correctValue: 90,
        tolerance: 10,
        funFact: "",
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s5-tb19-12",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F76",
      "F77",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Schlafförderungsplan erstellen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Schlafförderungsplan",
      body: "Erstelle einen Plan für Frau Siebert: 5 konkrete Maßnahmen.",
    },
    contentB1: {
      title: "Plan für guten Schlaf",
      body: "5 Maßnahmen.",
    },
    question: {
      fragetext: "Formuliere 5 konkrete Maßnahmen mit Begründung.",
      musterantwort: "Rituale erhalten; Licht dimmen nach 22 Uhr; nächtliche Visiten bündeln; Tagesaktivität fördern; Schmerzmanagement optimieren; keine Schlaftablette als Erstmaßnahme.",
    },
  },
  {
    stepId: "le-06-s5-tb20-01",
    phase: "s5",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F78",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Sinn von Assessments verstehen",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    displayFormat: "analogy",
    contentC1: {
      title: "Warum messen statt raten?",
      body: "Assessments objektivieren Eindrücke. Wie bei einem Arzt: Statt nur zu schauen, wird gemessen. So werden Zustände vergleichbar und Veränderungen sichtbar.",
    },
    contentB1: {
      title: "Warum messen?",
      body: "Zahlen sind klarer als Gefühle. Mit Tests sehen wir, was sich verändert.",
    },
  },
  {
    stepId: "le-06-s5-tb20-02",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F78",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "3 Assessments im Überblick kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "3 Assessments",
      body: "Barthel, Braden, TUG.",
    },
    contentB1: {
      title: "Drei Tests",
      body: "Welche?",
    },
    question: {
      fragetext: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten.",
        cards: [
          {
            front: "Barthel-Index",
            back: "10 ATL, 0-100 Punkte, Selbstständigkeit messen (Mahoney 1965)",
          },
          {
            front: "Braden-Skala",
            back: "6 Subskalen, 6-23 Punkte, Dekubitusrisiko (Braden/Bergstrom 1987)",
          },
          {
            front: "TUG",
            back: "Timed Up and Go, <10s/10-19s/>=20s, Sturzrisiko (Podsiadlo/Richardson 1991)",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb20-03",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F78",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Assessment und Anwendung zuordnen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Assessment und Anwendung",
      body: "Ordne zu.",
    },
    contentB1: {
      title: "Was misst was?",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Ordne Assessment und Zweck zu.",
      matchingPairs: [
        {
          left: "Barthel-Index",
          right: "Selbstständigkeit",
        },
        {
          left: "Braden-Skala",
          right: "Dekubitusrisiko",
        },
        {
          left: "TUG",
          right: "Sturzrisiko",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb20-04",
    phase: "s5",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F79",
      "Barthel/Mahoney 1965",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Barthel-Index anwenden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Barthel-Index für Frau Siebert",
      body: "Sie braucht Hilfe beim Waschen, kann aber selbstständig essen. 10 Aktivitäten werden mit Punkten bewertet. Max 100 Punkte = völlig selbstständig.",
    },
    contentB1: {
      title: "Barthel-Punkte",
      body: "10 Aktivitäten, Punkte geben. 100 = alles alleine.",
    },
  },
  {
    stepId: "le-06-s5-tb20-05",
    phase: "s5",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F79",
      "Braden/Bergstrom 1987",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Braden-Score einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Braden-Score",
      body: "Kritischer Wert?",
    },
    contentB1: {
      title: "Risiko ab?",
      body: "Welcher Wert?",
    },
    question: {
      fragetext: "Ab welchem Braden-Score beginnt das hohe Risiko?",
      slider: {
        instruction: "Wähle den Wert.",
        unit: "Punkte",
        min: 6,
        max: 23,
        step: 1,
        correctValue: 12,
        tolerance: 1,
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s5-tb20-06",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F80",
      "Podsiadlo/Richardson 1991",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "TUG-Ergebnisse interpretieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "TUG: Ergebnis",
      body: "15 Sekunden - was heißt das?",
    },
    contentB1: {
      title: "15 Sekunden",
      body: "Was bedeutet das?",
    },
    question: {
      fragetext: "Patient braucht 15 Sekunden für den TUG. Interpretation?",
      optionen: [
        {
          text: "Kein Risiko (unter 10s)",
          isCorrect: false,
          explanation: "Du hast die TUG-Schwelle im Kopf — stark. Aber die Grenze „kein Risiko\" liegt unter 10 Sekunden, und 15 s liegt bereits im Bereich 10–19 s = leicht erhöhtes Risiko. Beim nächsten Mal sitzen die Zahlen!",
          explanationB1: "Gut, dass du die Zeiten kennst. Aber 15 s ist nicht unter 10 s. Richtig: 10–19 s = leicht erhöht.",
        },
        {
          text: "Leicht erhöhtes Risiko (10-19s)",
          isCorrect: true,
          explanation: "Richtig. 15s liegt im mittleren Bereich.",
          explanationB1: "Richtig. Mittel.",
        },
        {
          text: "Hohes Risiko (ab 20s)",
          isCorrect: false,
          explanation: "Fast richtig gedacht — du hast die obere Risikostufe erkannt. Aber ab 20 s wäre Kategorie „hoch\", und 15 s liegt darunter, also noch im mittleren Bereich (10–19 s). Du bist auf dem richtigen Weg!",
          explanationB1: "Du kennst die Grenze — gut! Aber 15 s ist noch nicht 20 s. Richtig: 10–19 s = mittel.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb20-07",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F78",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Assessment-Fakten einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Assessments: Richtig/Falsch",
      body: "Swipe.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Ist die Aussage korrekt?",
      swipe: {
        instruction: "Ist die Aussage korrekt?",
        cards: [
          {
            statement: "Assessments sollten nach Standard wiederholt werden",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Ein guter Eindruck reicht, Messung ist unnötig",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Braden misst Dekubitusrisiko",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Barthel-Index misst Sturzrisiko",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "TUG nur, wenn Patient noch laufen kann",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb20-08",
    phase: "s5",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F79",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Barthel und Braden unterscheiden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Barthel vs. Braden",
      body: "Was unterscheidet sie?",
    },
    contentB1: {
      title: "Unterschied?",
      body: "Vergleiche.",
    },
    question: {
      fragetext: "Vergleiche die Assessments.",
      comparison: {
        instruction: "Vergleiche die Optionen.",
        columns: [
          {
            label: "Barthel",
          },
          {
            label: "Braden",
          },
        ],
        rows: [
          {
            criterion: "Misst",
            values: [
              "Selbstständigkeit (ATL)",
              "Dekubitusrisiko",
            ],
          },
          {
            criterion: "Items",
            values: [
              "10 Aktivitäten",
              "6 Subskalen",
            ],
          },
          {
            criterion: "Skala",
            values: [
              "0-100 Punkte",
              "6-23 Punkte",
            ],
          },
          {
            criterion: "Hohes Risiko / Schlecht",
            values: [
              "niedrige Punktzahl",
              "niedrige Punktzahl (<=12)",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb20-09",
    phase: "s5",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F80",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Assessment-Reihenfolge bei Aufnahme",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Aufnahme-Assessments",
      body: "Welche Reihenfolge?",
    },
    contentB1: {
      title: "Was zuerst?",
      body: "Ordne.",
    },
    question: {
      fragetext: "Sortiere die Assessments bei Aufnahme.",
      sequencing: {
        instruction: "Sortiere die Assessments bei Aufnahme.",
        items: [
          {
            id: "item-1",
            label: "Allgemeine Pflegeanamnese + Medikation",
          },
          {
            id: "item-2",
            label: "Barthel-Index (Selbstständigkeit)",
          },
          {
            id: "item-3",
            label: "Braden-Skala (Dekubitusrisiko)",
          },
          {
            id: "item-4",
            label: "TUG (nur wenn Gehfähigkeit vorhanden)",
          },
          {
            id: "item-5",
            label: "Pflegeplan auf Basis der Ergebnisse erstellen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s5-tb20-10",
    phase: "s5",
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F78",
      "F79",
      "F80",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Assessment-Begriffe festigen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Kreuzworträtsel",
      body: "Löse.",
    },
    contentB1: {
      title: "Rätsel",
      body: "Löse.",
    },
    question: {
      fragetext: "Löse die Begriffe.",
      crosswordWords: [
        {
          word: "BARTHEL",
          clue: "Misst Selbstständigkeit",
        },
        {
          word: "BRADEN",
          clue: "Misst Dekubitusrisiko",
        },
        {
          word: "UP",
          clue: "Timed ___ and Go",
        },
        {
          word: "ATL",
          clue: "Aktivität des täglichen Lebens (Abkürzung)",
        },
      ],
    },
  },
  {
    stepId: "le-06-s5-tb20-11",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F78",
      "F79",
      "F80",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Assessment-Ergebnisse interpretieren und dokumentieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Assessment-Interpretation",
      body: "Frau Siebert: Barthel 50, Braden 12, TUG 22s. Interpretiere und dokumentiere.",
    },
    contentB1: {
      title: "Ergebnisse deuten",
      body: "Was bedeuten die Zahlen?",
    },
    question: {
      fragetext: "Interpretiere die Assessment-Ergebnisse und leite Pflegeschwerpunkte ab.",
      musterantwort: "Barthel 50 = mittlere Hilfebedürftigkeit. Braden 12 = hohes Dekubitusrisiko. TUG 22s = hohes Sturzrisiko. Schwerpunkte: Dekubitus- und Sturzprophylaxe priorisieren, Mobilisation schrittweise aufbauen.",
    },
  },
];
