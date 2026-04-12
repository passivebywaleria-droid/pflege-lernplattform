// Session 2: "Positionen mit System" — LE 06 Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB3: 7 Grundpositionen + Positionierungsarten (KB-I, I-04, I-08, I-09)
// TB4: Infant Handling + Umgebungsgestaltung (KB-I, I-07, I-10)
// Leitfall A: Frau Becker (79, Hüft-TEP, Tag 2) + Leitfall B: Liam (8 Monate, Bronchitis)
// Bloom: B1-B3, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // =============================================================
  // Step 1: BRÜCKE — Recall S1 (MC)
  // =============================================================
  {
    stepId: "le06-s2-tb3-01",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "BRÜCKE",
    tag: "pflege",
    contentC1: {
      title: "Erinnerst du dich?",
      body: "Kurze Wiederholung aus Session 1. Warum greift man bei der Mobilisation an den Massen und nicht in die Zwischenräume?",
    },
    contentB1: {
      title: "Weißt du noch?",
      body: "Wiederholung: Warum fasst man an Schulter und Becken an — und NICHT unter die Arme?",
    },
    question: {
      fragetext: "Warum greift man bei der Mobilisation an den Massen und nicht in die Zwischenräume?",
      optionen: [
        {
          text: "Weil die Eigenbewegung des Patienten erhalten bleibt, wenn Zwischenräume frei sind",
          isCorrect: true,
          explanation: "Richtig! Zwischenräume sind die beweglichen Verbindungen (Gelenke). Nur wenn sie frei sind, kann der Patient sich selbst bewegen.",
          explanationB1: "Richtig! Zwischenräume müssen frei sein. Dann kann der Patient sich selbst bewegen.",
        },
        {
          text: "Weil Massen leichter zu greifen sind",
          isCorrect: false,
          explanation: "Es geht nicht um Bequemlichkeit. Der Grund ist: Zwischenräume müssen frei bleiben, damit der Patient sich selbst bewegen kann.",
          explanationB1: "Nein. Der Grund ist: Zwischenräume müssen frei bleiben für die Eigenbewegung.",
        },
        {
          text: "Weil es so im Lehrbuch steht",
          isCorrect: false,
          explanation: "Es hat einen fachlichen Grund: Zwischenräume sind Gelenke. Greift man dort hinein, blockiert man die Bewegung.",
          explanationB1: "Es gibt einen Grund: Zwischenräume sind Gelenke. Wenn man sie festhält, geht keine Bewegung mehr.",
        },
        {
          text: "Weil der Patient sonst Schmerzen hat",
          isCorrect: false,
          explanation: "Schmerz kann vorkommen, aber der kinästhetische Grund ist: Zwischenräume = bewegliche Stellen. Blockiert man sie, blockiert man die Eigenbewegung.",
          explanationB1: "Schmerz ist nicht der Hauptgrund. Der Grund ist: Zwischenräume müssen frei bleiben.",
        },
      ],
    },
  },

  // =============================================================
  // Step 2: SZENE — Frau Becker Tag 2, Atemnot (Dialog)
  // =============================================================
  {
    stepId: "le06-s2-tb3-02",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.348-351"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Frau Becker — Tag 2",
      body: "Frau Becker liegt flach im Bett und klagt über Atemnot. Du überlegst: Welche Position könnte helfen?",
      fallbezug: "Frau Becker, 79 Jahre, Tag 2 nach Hüft-TEP. Flache Rückenlage, Atemnot.",
    },
    contentB1: {
      title: "Frau Becker — Tag 2",
      body: "Frau Becker liegt flach im Bett. Sie sagt: 'Ich bekomme schlecht Luft.' Was machst du?",
      fallbezug: "Frau Becker liegt flach. Sie bekommt schlecht Luft.",
    },
    question: {
      fragetext: "Frau Becker hat Atemnot. Welche Position könnte helfen?",
      patientName: "Frau Becker",
      dialogPhases: [
        {
          context: "Frau Becker liegt flach auf dem Rücken. 'Schwester, ich bekomme so schlecht Luft. Können Sie etwas machen?' Du weißt: Die Position kann die Atmung beeinflussen.",
          contextB1: "Frau Becker liegt flach. Sie sagt: 'Ich bekomme schlecht Luft.' Du weißt: Die Position hilft.",
          speaker: "Frau Becker",
          options: [
            {
              text: "Ich bringe Sie in die Oberkörperhochlage — das erleichtert die Atmung. Ich stelle das Kopfteil hoch.",
              textB1: "Ich stelle das Bett hoch. Dann können Sie besser atmen.",
              patientResponse: "Oh ja, das ist besser! Ich kann viel leichter atmen so.",
              patientResponseB1: "Ja, so ist es besser! Ich bekomme mehr Luft.",
              score: 3,
              feedback: "Richtig! Oberkörperhochlage erleichtert die Atmung, weil das Zwerchfell sich besser senken kann. Wichtig bei Herz-/Lungenerkrankungen und nach OPs.",
              feedbackB1: "Richtig! Wenn der Oberkörper hoch ist, kann man besser atmen.",
            },
            {
              text: "Ich drehe Sie auf den Bauch — Bauchlage hilft bei Atemproblemen.",
              textB1: "Ich drehe Sie auf den Bauch.",
              patientResponse: "Auf den Bauch? Nach der Hüft-OP? Das tut weh!",
              patientResponseB1: "Auf den Bauch? Das geht doch nicht nach der OP!",
              score: 1,
              feedback: "Vorsicht! Bauchlage wird bei ARDS auf der Intensivstation eingesetzt, nicht nach Hüft-TEP. Für Frau Becker ist Oberkörperhochlage die richtige Wahl.",
              feedbackB1: "Vorsicht! Bauchlage ist hier falsch. Oberkörper hochstellen ist besser für Frau Becker.",
            },
            {
              text: "Ich lasse Sie so liegen und rufe den Arzt.",
              textB1: "Ich lasse Sie liegen und rufe den Arzt.",
              patientResponse: "Bitte helfen Sie mir schnell, ich bekomme kaum Luft!",
              patientResponseB1: "Bitte helfen Sie mir!",
              score: 2,
              feedback: "Arzt rufen kann richtig sein, aber die Positionierung kannst und solltest du sofort selbst anpassen. Oberkörperhochlage ist eine pflegerische Basismaßnahme.",
              feedbackB1: "Arzt rufen ist okay. Aber du kannst jetzt schon helfen: Oberkörper hoch!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — 7 Grundpositionen (displayFormat: stepbystep)
  // =============================================================
  {
    stepId: "le06-s2-tb3-03",
    phase: "s2",
    stepType: "text",
    displayFormat: "stepbystep",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345-346"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Die 7 Grundpositionen",
      body: "Die 7 Grundpositionen der Kinästhetik — aufsteigend nach Komplexität. Jede Position braucht mehr Muskelkontrolle als die vorherige:\n\n1. **Rückenlage** — Einfachste Position, kein Muskelaufwand nötig\n2. **Bauchlage mit Ellbogenstütz** — Oberkörper leicht angehoben\n3. **Schneidersitz** — Aufrecht, Becken stabil\n4. **Hand-Knie-Stand (Vierfüßlerstand)** — Arme und Beine tragen\n5. **Einbein-Knie-Stand** — Nur 3 Stützpunkte, mehr Balance\n6. **Einbeinstand** — Hohes Gleichgewicht nötig\n7. **Zweibeinstand (normales Stehen)** — Komplexeste Position\n\nJede Position ist die Basis für die nächste Bewegung. Bei Mobilisation: Schritt für Schritt durch die Positionen — nicht von der Rückenlage direkt zum Stehen!",
      glossarBegriffe: ["Grundposition", "Mobilisation"],
    },
    contentB1: {
      title: "7 Positionen — von einfach bis schwer",
      body: "Der Körper hat 7 Positionen. Von einfach (Liegen) bis schwer (Stehen):\n\n1. **Rückenlage** — Liegen, ganz einfach\n2. **Bauchlage mit Stütze** — Auf dem Bauch, Arme stützen\n3. **Schneidersitz** — Aufrecht sitzen\n4. **Vierfüßlerstand** — Auf Händen und Knien\n5. **Kniestand auf einem Bein** — Schwieriger, mehr Balance\n6. **Stehen auf einem Bein** — Sehr schwer\n7. **Normales Stehen** — Am schwierigsten\n\nBeim Mobilisieren: Immer Schritt für Schritt! Nicht direkt vom Liegen zum Stehen!",
      glossarBegriffe: ["Grundposition"],
    },
  },

  // =============================================================
  // Step 4: ERKLÄRUNG — Sequencing: 7 Grundpositionen ordnen
  // =============================================================
  {
    stepId: "le06-s2-tb3-04",
    phase: "s2",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345-346"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "In die richtige Reihenfolge!",
      body: "Bringe die 7 Grundpositionen in die richtige Reihenfolge — von der einfachsten zur komplexesten.",
    },
    contentB1: {
      title: "Ordne die Positionen!",
      body: "Welche Position ist am einfachsten? Welche am schwersten? Ordne!",
    },
    question: {
      fragetext: "Ordne die 7 Grundpositionen von einfach nach komplex:",
      sequencing: {
        instruction: "Ziehe die Positionen in die richtige Reihenfolge (einfach → komplex).",
        items: [
          { id: "p1", label: "Rückenlage" },
          { id: "p2", label: "Bauchlage mit Ellbogenstütz" },
          { id: "p3", label: "Schneidersitz" },
          { id: "p4", label: "Hand-Knie-Stand" },
          { id: "p5", label: "Einbein-Knie-Stand" },
          { id: "p6", label: "Einbeinstand" },
          { id: "p7", label: "Zweibeinstand" },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: CHECKPOINT — Anticipation-MC: Warum ist 30°-Seitenlage wichtig?
  // =============================================================
  {
    stepId: "le06-s2-tb3-05",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Was glaubst du?",
      body: "Bevor wir die Positionierungen besprechen: Warum ist die 30-Grad-Seitenlage in der Pflege besonders wichtig?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Warum ist die 30-Grad-Seitenlage so wichtig?",
    },
    question: {
      fragetext: "Warum ist die 30-Grad-Seitenlage besonders wichtig in der Pflege?",
      mcVariant: "anticipation" as const,
      optionen: [
        {
          text: "Weil sie Dekubitus vorbeugt, indem sie Trochanter und Kreuzbein entlastet",
          isCorrect: true,
          explanation: "Richtig! Die 30-Grad-Seitenlage entlastet gezielt die typischen Dekubitus-Prädilektionsstellen: Kreuzbein, Trochanter major und Fersen.",
          explanationB1: "Richtig! Die 30-Grad-Lage schützt vor Druckgeschwüren. Die gefährdeten Stellen werden entlastet.",
        },
        {
          text: "Weil der Patient in dieser Position am besten schlafen kann",
          isCorrect: false,
          explanation: "Schlafqualität ist nicht der Hauptgrund. Die 30-Grad-Seitenlage dient primär der Dekubitusprophylaxe — sie entlastet Kreuzbein und Trochanter.",
          explanationB1: "Schlaf ist nicht der Hauptgrund. Die 30-Grad-Lage schützt vor Druckgeschwüren.",
        },
        {
          text: "Weil sie bei Schlaganfall-Patienten Pflicht ist",
          isCorrect: false,
          explanation: "Bei Schlaganfall wird eher die 90-Grad-Seitenlage auf der betroffenen Seite eingesetzt (Bobath). Die 30-Grad-Lage dient der Dekubitusprophylaxe.",
          explanationB1: "Bei Schlaganfall wird eine andere Position benutzt. Die 30-Grad-Lage ist für Dekubitus-Vorbeugung.",
        },
        {
          text: "Weil sie am wenigsten Arbeit macht",
          isCorrect: false,
          explanation: "Aufwand ist nicht der Grund. Die 30-Grad-Seitenlage hat einen medizinischen Zweck: Druckentlastung zur Dekubitusprophylaxe.",
          explanationB1: "Das ist nicht der Grund. Die 30-Grad-Lage hat einen medizinischen Zweck: Sie schützt vor Druckgeschwüren.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: ERKLÄRUNG — Positionierungsarten (displayFormat: glossary)
  // =============================================================
  {
    stepId: "le06-s2-tb3-06",
    phase: "s2",
    stepType: "text",
    displayFormat: "glossary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Die wichtigsten Positionierungen",
      body: "**Rückenlage (flach):** Bei Wirbelsäulen-OP, Spinalanästhesie.\n\n**Oberkörperhochlage:** Bei Herz-/Lungenerkrankung, zum Essen, bei Atemnot. Erleichtert die Atmung.\n\n**30-Grad-Seitenlage:** Dekubitusprophylaxe. Entlastet Trochanter major, Kreuzbein und Sitzbein. Wichtigste Prophylaxe-Position!\n\n**90-Grad-Seitenlage:** Bei Hemiplegie (Bobath), nach Lungen-OP. Auf die betroffene Seite bei Schlaganfall.\n\n**135-Grad-Lage:** Zwischen Seiten- und Bauchlage. Alternative für Patienten die keine Bauchlage tolerieren.\n\n**Bauchlage:** Bei ARDS auf der Intensivstation. Verbessert Gasaustausch. Nicht im Normalbereich!",
      glossarBegriffe: ["Positionierung", "Dekubitus", "Bobath-Konzept"],
    },
    contentB1: {
      title: "Welche Positionen gibt es?",
      body: "**Rückenlage (flach):** Nach Wirbelsäulen-OP.\n\n**Oberkörper hoch:** Bei Atemnot, zum Essen, bei Herzproblemen.\n\n**30-Grad-Seitenlage:** Gegen Druckgeschwüre (Dekubitus). Sehr wichtig!\n\n**90-Grad-Seitenlage:** Nach Schlaganfall (Bobath). Auf die kranke Seite.\n\n**135-Grad-Lage:** Zwischen Seite und Bauch. Eine Alternative.\n\n**Bauchlage:** Nur auf der Intensivstation. Bei schwerer Atemnot (ARDS).",
      glossarBegriffe: ["Positionierung", "Dekubitus"],
    },
  },

  // =============================================================
  // Step 7: ERKLÄRUNG — Flipcards: Positionierung + Indikation
  // =============================================================
  {
    stepId: "le06-s2-tb3-07",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Position ↔ Wann einsetzen?",
      body: "Dreh die Karten um: Vorne steht die Positionierung, hinten die Indikation und was sie bewirkt.",
    },
    contentB1: {
      title: "Welche Position wann?",
      body: "Dreh die Karten um. Lerne: Welche Position bei welchem Problem?",
    },
    question: {
      fragetext: "Dreh die Karten um:",
      flipcard: {
        instruction: "Tippe auf eine Karte zum Umdrehen.",
        cards: [
          {
            front: "30-Grad-Seitenlage",
            back: "Dekubitus-Prophylaxe. Entlastet Trochanter major und Kreuzbein. Kissen unter Rücken und zwischen Knie.",
            backB1: "Gegen Druckgeschwüre. Schützt Hüfte und Steißbein. Kissen unter den Rücken legen.",
          },
          {
            front: "Oberkörperhochlage",
            back: "Bei Atemnot, Herz-/Lungenerkrankung, zum Essen. Erleichtert die Atmung, weil das Zwerchfell sich besser senken kann.",
            backB1: "Bei Atemnot und zum Essen. Wenn der Oberkörper hoch ist, kann man besser atmen.",
          },
          {
            front: "90-Grad-Seitenlage",
            back: "Bei Hemiplegie (Schlaganfall): Bobath-Lagerung auf der betroffenen Seite. Auch nach Lungen-OP auf der operierten Seite.",
            backB1: "Bei Schlaganfall: Auf die kranke Seite legen. Auch nach Lungen-OP.",
          },
          {
            front: "Rückenlage (flach)",
            back: "Nach Wirbelsäulen-OP oder Spinalanästhesie. Patient muss flach liegen. Achtung: Dekubitusgefahr am Kreuzbein!",
            backB1: "Nach OP an der Wirbelsäule. Patient muss flach liegen. Achtung: Druckgeschwür-Gefahr!",
          },
          {
            front: "Bauchlage",
            back: "Nur Intensivstation bei ARDS (schwerer Lungenschaden). Verbessert den Gasaustausch. Im Normalbereich nicht üblich.",
            backB1: "Nur auf der Intensivstation. Bei schwerer Lungenerkrankung. Sonst nicht benutzen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: CHECKPOINT — MC Frau Becker Positionierung (Score A/B/C)
  // =============================================================
  {
    stepId: "le06-s2-tb3-08",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Kurzer Check!",
      body: "Frau Becker hat Atemnot nach der OP. Welche Positionierung wählst du?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Frau Becker bekommt schlecht Luft. Welche Position hilfst du ihr?",
    },
    question: {
      fragetext: "Frau Becker hat Atemnot nach der Hüft-OP. Welche Positionierung wählst du?",
      optionen: [
        {
          text: "Oberkörperhochlage",
          isCorrect: true,
          explanation: "Richtig! Oberkörperhochlage erleichtert die Atmung. Das Zwerchfell kann sich besser senken, die Lunge hat mehr Platz. Standardmaßnahme bei Atemnot.",
          explanationB1: "Richtig! Oberkörper hoch = besser atmen. Das ist die richtige Maßnahme bei Atemnot.",
        },
        {
          text: "30-Grad-Seitenlage",
          isCorrect: false,
          explanation: "Die 30-Grad-Seitenlage ist für Dekubitusprophylaxe, nicht primär für Atemnot. Bei Atemnot: Oberkörperhochlage.",
          explanationB1: "Die 30-Grad-Lage ist gegen Druckgeschwüre. Bei Atemnot: Oberkörper hoch!",
        },
        {
          text: "Bauchlage",
          isCorrect: false,
          explanation: "Bauchlage wird nur bei ARDS auf der Intensivstation eingesetzt. Nach Hüft-TEP ist Bauchlage kontraindiziert.",
          explanationB1: "Bauchlage ist hier falsch. Das macht man nur auf der Intensivstation.",
        },
        {
          text: "Flache Rückenlage beibehalten",
          isCorrect: false,
          explanation: "Flache Rückenlage verschlechtert die Atemnot, weil das Zwerchfell durch die Bauchorgane nach oben gedrückt wird. Oberkörper hochstellen!",
          explanationB1: "Falsch! Flach liegen ist schlecht bei Atemnot. Oberkörper hoch!",
        },
      ],
    },
  },

  // =============================================================
  // Step 9: ANDERS ERKLÄRT — Comparison: 3 Seitenlagen vergleichen
  // Nur bei Score B/C
  // =============================================================
  {
    stepId: "le06-s2-tb3-09",
    phase: "s2",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "3 Seitenlagen im Vergleich",
      body: "Was ist der Unterschied zwischen 30-Grad, 90-Grad und 135-Grad? Diese Tabelle zeigt es.",
    },
    contentB1: {
      title: "3 Seitenlagen — Unterschiede",
      body: "Was ist der Unterschied? Schau in die Tabelle.",
    },
    question: {
      fragetext: "Vergleiche die drei Seitenlage-Varianten:",
      comparison: {
        instruction: "Vergleiche die 3 Seitenlagen anhand der Kriterien.",
        columns: [
          { label: "30-Grad-Seitenlage" },
          { label: "90-Grad-Seitenlage" },
          { label: "135-Grad-Lage" },
        ],
        rows: [
          {
            criterion: "Hauptindikation",
            values: [
              "Dekubitusprophylaxe",
              "Hemiplegie (Bobath), Lungen-OP",
              "Alternative wenn Bauchlage nicht geht",
            ],
            valuesB1: [
              "Gegen Druckgeschwüre",
              "Nach Schlaganfall",
              "Wenn Bauchlage nicht geht",
            ],
          },
          {
            criterion: "Druckentlastung",
            values: [
              "Kreuzbein + Trochanter entlastet",
              "Nur eine Körperseite entlastet",
              "Rücken + Gesäß entlastet",
            ],
            valuesB1: [
              "Steißbein + Hüfte frei",
              "Eine Seite frei",
              "Rücken + Po frei",
            ],
          },
          {
            criterion: "Kontraindikation",
            values: [
              "Keine allgemeine KI",
              "Instabile Wirbelsäule",
              "Frische Bauch-OP",
            ],
            valuesB1: [
              "Keine bekannte",
              "Wirbelsäulen-Verletzung",
              "Nach Bauch-OP",
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: PRAXIS_DIALOG — 30-Grad-Lage bei Frau Becker
  // =============================================================
  {
    stepId: "le06-s2-tb3-10",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "30-Grad-Seitenlage bei Frau Becker",
      body: "Die Praxisanleiterin sagt: 'Zeig mir, wie du Frau Becker in die 30-Grad-Seitenlage bringst.' Was machst du zuerst?",
      fallbezug: "Frau Becker muss umgelagert werden. Dekubitusprophylaxe nach Hüft-TEP.",
    },
    contentB1: {
      title: "Frau Becker umlagern",
      body: "Die Praxisanleiterin sagt: 'Zeig mir die 30-Grad-Seitenlage.' Was machst du zuerst?",
      fallbezug: "Frau Becker muss umgelagert werden gegen Druckgeschwüre.",
    },
    question: {
      fragetext: "Die Praxisanleiterin fragt: Was machst du zuerst?",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Frau Becker liegt auf dem Rücken. Du sollst sie in die 30-Grad-Seitenlage bringen. Die Praxisanleiterin beobachtet dich.",
          contextB1: "Frau Becker liegt auf dem Rücken. Du bringst sie in die 30-Grad-Lage. Die Praxisanleiterin schaut zu.",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Zuerst informiere ich Frau Becker: 'Ich möchte Sie umlagern, damit kein Druckgeschwür entsteht.' Dann inspiziere ich ihre Haut an den gefährdeten Stellen.",
              textB1: "Ich sage Frau Becker was ich mache. Dann schaue ich ihre Haut an.",
              patientResponse: "Sehr gut! Information zuerst, dann Hautinspektion — bevor du die Position veränderst. Genau richtig.",
              patientResponseB1: "Richtig! Erst informieren, dann Haut anschauen.",
              score: 3,
              feedback: "Perfekt! Kommunikation vor Aktivität + Hautinspektion vor Positionswechsel. So erkennst du früh ob bereits Rötungen (Dekubitus Grad I) vorhanden sind.",
              feedbackB1: "Super! Erst erklären, dann Haut prüfen. So findest du rote Stellen früh.",
            },
            {
              text: "Ich schiebe ein Kissen unter ihren Rücken und drehe sie leicht zur Seite.",
              textB1: "Ich lege ein Kissen unter den Rücken.",
              patientResponse: "Das Kissen ist richtig — aber was hast du vergessen bevor du angefangen hast?",
              patientResponseB1: "Das Kissen stimmt. Aber was hast du vergessen?",
              score: 2,
              feedback: "Das Kissen ist korrekt für die 30-Grad-Lage. Aber VOR dem Positionieren: 1) Patientin informieren, 2) Haut inspizieren. Dann erst positionieren.",
              feedbackB1: "Das Kissen ist richtig. Aber vorher: Patientin informieren und Haut ansehen!",
            },
            {
              text: "Ich hole erstmal 5 Kissen und einen Schaumstoffkeil.",
              textB1: "Ich hole viele Kissen.",
              patientResponse: "Nicht zu viele Hilfsmittel! Ein gut platziertes Kissen reicht oft. Und was hast du vorher vergessen?",
              patientResponseB1: "Nicht so viele Kissen! Eines reicht. Und was machst du vorher?",
              score: 1,
              feedback: "Zu viele Hilfsmittel sind kontraproduktiv. Prinzip: Gezielt wenige Hilfsmittel einsetzen. Und vorher: Kommunikation + Hautinspektion.",
              feedbackB1: "Zu viele Kissen sind schlecht. Ein Kissen reicht. Und vorher: Erst erklären und Haut anschauen!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 11: ANWENDUNG — Estimation: Wie oft umlagern?
  // =============================================================
  {
    stepId: "le06-s2-tb3-11",
    phase: "s2",
    stepType: "estimation",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q4"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Wie oft umlagern?",
      body: "Schätze: Wie oft pro Tag sollte eine immobile Patientin wie Frau Becker umgelagert werden?",
    },
    contentB1: {
      title: "Wie oft umlagern?",
      body: "Rate: Wie oft am Tag muss man Frau Becker umlagern?",
    },
    question: {
      fragetext: "Wie oft pro Tag (12h wach) sollte eine immobile Patientin umgelagert werden?",
      estimation: {
        instruction: "Schätze die Anzahl der Umlagerungen pro Tag (12 Stunden).",
        unit: "Mal pro Tag",
        correctValue: 6,
        tolerance: 20,
        funFact: "Der DNQP-Expertenstandard empfiehlt keine pauschalen 2-Stunden-Intervalle mehr. Die Intervalle sollen individuell angepasst werden — basierend auf Hautinspektion und Risikofaktoren.",
        explanation: "Bei einem Intervall von ca. 2 Stunden kommt man auf ungefähr 6 Umlagerungen in 12 Stunden. Aber: Der DNQP empfiehlt individuelle Intervalle, nicht pauschal alle 2 Stunden.",
        explanationB1: "Alle 2 Stunden umlagern = ca. 6 Mal am Tag. Aber: Es ist besser, individuell zu schauen. Manche Patienten brauchen öfter Umlagerung.",
      },
    },
  },

  // =============================================================
  // Step 12: SZENE — Liam Leitfall-Einführung (Dialog)
  // =============================================================
  {
    stepId: "le06-s2-tb4-01",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.348"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Neuer Patient: Liam (8 Monate)",
      body: "Szenenwechsel: Kinderstation. Liam, 8 Monate alt, wurde wegen obstruktiver Bronchitis aufgenommen. Seine Mutter ist bei ihm (Rooming-in). Sie hält ihn flach auf dem Arm.",
      fallbezug: "Liam braucht eine atemunterstützende Position. Seine Mutter muss angeleitet werden.",
    },
    contentB1: {
      title: "Neuer Patient: Liam (8 Monate)",
      body: "Jetzt sind wir auf der Kinderstation. Liam ist 8 Monate alt. Er hat eine Bronchitis und bekommt schlecht Luft. Seine Mutter ist bei ihm.",
      fallbezug: "Liam braucht Hilfe beim Atmen. Die Mutter muss lernen, wie.",
    },
    question: {
      fragetext: "Liams Mutter hält ihn flach. Wie sollte Liam positioniert werden?",
      patientName: "Liams Mutter",
      dialogPhases: [
        {
          context: "Liams Mutter hält ihn flach auf dem Arm. Er röchelt und hustet. 'Schwester, er bekommt so schlecht Luft! Was soll ich tun?'",
          contextB1: "Liams Mutter hält ihn flach. Er hustet und röchelt. 'Was soll ich tun?'",
          speaker: "Liams Mutter",
          options: [
            {
              text: "Halten Sie Liams Oberkörper etwas höher — das erleichtert die Atmung. Ich zeige Ihnen, wie Sie ihn gut positionieren können.",
              textB1: "Halten Sie Liam etwas höher. Ich zeige Ihnen wie.",
              patientResponse: "So besser? Ja, er atmet ruhiger so! Danke!",
              patientResponseB1: "Ja, so ist es besser! Danke!",
              score: 3,
              feedback: "Richtig! Oberkörperhochlage erleichtert auch bei Säuglingen die Atmung. Du leitest die Mutter an und zeigst ihr die Technik — Patientenedukation!",
              feedbackB1: "Richtig! Auch bei Babys hilft es, den Oberkörper höher zu halten. Du zeigst der Mutter wie es geht.",
            },
            {
              text: "Legen Sie Liam auf den Bauch, das hilft bei Bronchitis.",
              textB1: "Legen Sie Liam auf den Bauch.",
              patientResponse: "Auf den Bauch? Ist das nicht gefährlich wegen dem plötzlichen Kindstod?",
              patientResponseB1: "Auf den Bauch? Ist das nicht gefährlich?",
              score: 1,
              feedback: "Vorsicht! Bauchlage bei Säuglingen birgt ein SIDS-Risiko (plötzlicher Kindstod). Oberkörperhochlage ist die sichere Wahl bei Atemproblemen.",
              feedbackB1: "Vorsicht! Bauchlage bei Babys ist gefährlich (plötzlicher Kindstod). Besser: Oberkörper hoch.",
            },
            {
              text: "Geben Sie Liam mir, ich bringe ihn zur Inhalation.",
              textB1: "Geben Sie mir Liam. Ich bringe ihn zur Inhalation.",
              patientResponse: "Aber was mache ich, wenn er danach wieder schlecht Luft bekommt?",
              patientResponseB1: "Und wenn er danach wieder schlecht atmet?",
              score: 2,
              feedback: "Inhalation ist eine gute Maßnahme, aber du solltest der Mutter auch zeigen, wie sie Liam atemunterstützend positionieren kann. Anleitung ist Teil der Pflege.",
              feedbackB1: "Inhalation ist gut. Aber zeige der Mutter auch wie sie Liam richtig hält. Sie muss es zuhause auch können!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 13: ERKLÄRUNG — Infant Handling (displayFormat: checklist)
  // =============================================================
  {
    stepId: "le06-s2-tb4-02",
    phase: "s2",
    stepType: "text",
    displayFormat: "checklist",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.348"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Kinästhetik Infant Handling",
      body: "Kinästhetik-Prinzipien für Säuglinge und Neugeborene:\n\n1. **Immer über die Seite aufheben** — nicht parallel hochziehen!\n2. **Spiralige Bewegungen bevorzugen** — das Kind dreht sich, nicht nur hoch/runter\n3. **Beim Ablegen: Füße zuerst Kontakt zur Unterlage** — dann über die Seitenlage in die Rückenlage\n4. **Nie kopfüber ablegen** — vestibuläre Überreizung (Schwindel, Unruhe)\n5. **Ruhig und langsam** — Säuglinge brauchen Zeit, Bewegungsänderungen zu verarbeiten\n\n**Hintergrund:** Säuglinge bewegen sich von Natur aus spiralig. Wenn wir sie parallel hochheben, unterbrechen wir ihre natürliche Bewegung und überstimulieren das Gleichgewichtssystem.",
      glossarBegriffe: ["Kinästhetik"],
    },
    contentB1: {
      title: "Wie hebt man ein Baby richtig hoch?",
      body: "Regeln für Babys:\n\n1. **Über die Seite aufheben** — nicht einfach hochziehen!\n2. **Drehen lassen** — Baby dreht sich, nicht nur hoch und runter\n3. **Ablegen: Füße zuerst runter** — dann auf die Seite, dann auf den Rücken\n4. **Nie mit dem Kopf nach unten** — das macht dem Baby Angst und Schwindel\n5. **Langsam machen** — Babys brauchen Zeit\n\nBabys drehen sich von Natur aus. Wir sollen das unterstützen.",
      glossarBegriffe: ["Kinästhetik"],
    },
  },

  // =============================================================
  // Step 14: CHECKPOINT — ErrorSpot: Fehler im Infant Handling
  // =============================================================
  {
    stepId: "le06-s2-tb4-03",
    phase: "s2",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.348"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Finde die Fehler!",
      body: "Im folgenden Text sind 3 Fehler versteckt. Finde und markiere sie.",
    },
    contentB1: {
      title: "Wo sind die Fehler?",
      body: "In diesem Text sind 3 Fehler. Finde sie!",
    },
    question: {
      fragetext: "Markiere die 3 Fehler im folgenden Text:",
      errorspot: {
        instruction: "Tippe auf die Fehler im Text. Es sind genau 3 Fehler versteckt.",
        text: "Die Pflegekraft hebt Liam parallel hoch, greift unter die Achseln und legt ihn direkt auf den Rücken.",
        errors: [
          {
            start: 23,
            end: 36,
            correction: "über die Seite",
            explanation: "Falsch: parallel hochheben. Richtig: Über die Seite aufheben (spiralige Bewegung). Babys bewegen sich natürlicherweise spiralig.",
            explanationB1: "Falsch! Nicht gerade hochheben. Über die Seite drehen!",
          },
          {
            start: 44,
            end: 66,
            correction: "unterstützt an Schulter und Becken",
            explanation: "Falsch: unter die Achseln greifen. Richtig: An den Massen unterstützen (Schulter, Becken). Achselhöhle ist ein Zwischenraum!",
            explanationB1: "Falsch! Nicht unter die Arme greifen. An Schulter und Becken anfassen!",
          },
          {
            start: 75,
            end: 100,
            correction: "legt ihn zuerst mit den Füßen ab, dann über die Seite auf den Rücken",
            explanation: "Falsch: direkt auf den Rücken. Richtig: Füße zuerst Kontakt, dann über die Seitenlage in die Rückenlage. So wird das Gleichgewichtssystem nicht überreizt.",
            explanationB1: "Falsch! Nicht direkt auf den Rücken. Erst Füße runter, dann über die Seite auf den Rücken.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — Branching: Liam und Inhalation
  // =============================================================
  {
    stepId: "le06-s2-tb4-04",
    phase: "s2",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.348"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Liam wird unruhig",
      body: "Liam wird bei der Inhalation unruhig und weint. Seine Mutter will ihn sofort hochnehmen.",
      fallbezug: "Liam, 8 Monate, obstruktive Bronchitis. Inhalationstherapie. Mutter möchte helfen.",
    },
    contentB1: {
      title: "Liam weint",
      body: "Liam weint bei der Inhalation. Die Mutter will ihn hochnehmen.",
      fallbezug: "Liam hat Bronchitis. Er bekommt Inhalation. Er weint.",
    },
    question: {
      fragetext: "Liams Mutter will ihn hochnehmen. Was sagst du?",
      branchingOptions: [
        {
          text: "'Nehmen Sie ihn ruhig hoch — aber über die Seite, nicht unter den Achseln. Ich zeige Ihnen wie.' Du demonstrierst das Infant Handling.",
          feedback: "Perfekt! Du erlaubst der Mutter, ihren Sohn zu trösten (Bindung!), und nutzt die Gelegenheit zur Anleitung: Kinästhetisches Infant Handling über die Seite. Patientenedukation in Aktion.",
          feedbackB1: "Super! Die Mutter darf Liam trösten. Und du zeigst ihr wie man ein Baby richtig hochhebt. Über die Seite!",
          isCorrect: true,
        },
        {
          text: "'Lassen Sie ihn bitte liegen. Die Inhalation muss fertig werden.'",
          feedback: "Die Inhalation ist wichtig, aber ein weinendes Baby inhaliert nicht effektiv. Besser: Mutter trösten lassen (Bindung!), dann Inhalation fortsetzen. Und: Gelegenheit zur Anleitung nutzen!",
          feedbackB1: "Liam weint — dann klappt die Inhalation nicht. Besser: Mutter trösten lassen, dann weitermachen.",
          isCorrect: false,
        },
        {
          text: "'Ich nehme Liam und beruhige ihn. Gehen Sie kurz raus.'",
          feedback: "Mutter-Kind-Bindung ist wichtig — die Mutter sollte trösten dürfen. Du kannst ihr zeigen WIE (Infant Handling), statt ihr das Kind wegzunehmen.",
          feedbackB1: "Die Mutter soll bei Liam bleiben. Zeige ihr, wie sie ihn richtig hochnimmt.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 16: ERKLÄRUNG — Umgebungsgestaltung (displayFormat: procontra)
  // =============================================================
  {
    stepId: "le06-s2-tb4-05",
    phase: "s2",
    stepType: "text",
    displayFormat: "procontra",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Weiche Matratze — Pro und Contra",
      body: "**PRO weiche Matratze:**\n- Verteilt Druck besser auf größere Fläche\n- Anti-Dekubitus-Matratzen reduzieren Auflagedruck\n- Bequemer für den Patienten\n\n**CONTRA weiche Matratze:**\n- Patient 'sinkt ein' und kann sich schlechter drehen\n- Eigenbewegung wird erschwert\n- Kann Mobilisation behindern\n\n**Weitere Umgebungs-Tipps:**\n- Bett so einstellen, dass Füße den Boden erreichen\n- **Eingerollte Handtücher** bieten besseren Widerstand zum Abdrücken als weiche Kissen\n- Hilfsmittel des Patienten bereitstellen, nicht im Schrank vergessen\n- Klingel immer in Reichweite",
      glossarBegriffe: ["Positionierung", "Dekubitus"],
    },
    contentB1: {
      title: "Weiche Matratze — gut oder schlecht?",
      body: "**Gut:**\n- Weniger Druck auf der Haut\n- Bequemer\n\n**Schlecht:**\n- Patient sinkt ein\n- Kann sich nicht gut drehen\n- Bewegung wird schwerer\n\n**Mehr Tipps:**\n- Bett richtig einstellen: Füße auf dem Boden!\n- Eingerollte Handtücher sind besser als weiche Kissen\n- Hilfsmittel bereitstellen (Brille, Rollator etc.)\n- Klingel immer in Reichweite",
      glossarBegriffe: ["Dekubitus"],
    },
  },

  // =============================================================
  // Step 17: ANWENDUNG — Memory: Positionierung ↔ Indikation
  // =============================================================
  {
    stepId: "le06-s2-tb4-06",
    phase: "s2",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.348-351"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Memory: Position trifft Indikation",
      body: "Finde die Paare: Welche Positionierung gehört zu welcher Indikation?",
    },
    contentB1: {
      title: "Memory: Finde die Paare!",
      body: "Welche Position passt zu welchem Problem?",
    },
    question: {
      fragetext: "Finde die passenden Paare:",
      memoryPairs: [
        { a: "30-Grad-Seitenlage", b: "Dekubitus" },
        { a: "Oberkörperhoch", b: "Atemnot" },
        { a: "Bauchlage", b: "ARDS" },
        { a: "Rückenlage flach", b: "Wirbelsäulen-OP" },
        { a: "90-Grad-Seite", b: "Hemiplegie" },
        { a: "Infant Handling", b: "Säugling" },
      ],
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Dialog: Anleitung Liams Mutter (Patientenedukation)
  // =============================================================
  {
    stepId: "le06-s2-tb4-07",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.348"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Anleitung für Liams Mutter",
      body: "Du bereitest Liam auf die Entlassung vor. Seine Mutter muss wissen: Wie lagert sie Liam zuhause? Atemunterstützend? Schlafposition?",
      fallbezug: "Entlassungsplanung: Liams Mutter braucht Wissen für zuhause.",
    },
    contentB1: {
      title: "Liams Mutter lernt",
      body: "Liam geht bald nach Hause. Seine Mutter muss wissen: Wie legt sie Liam hin?",
      fallbezug: "Liam geht bald nach Hause. Die Mutter muss es allein können.",
    },
    question: {
      fragetext: "Du erklärst der Mutter die Schlafposition für Liam zuhause.",
      patientName: "Liams Mutter",
      dialogPhases: [
        {
          context: "Liams Mutter fragt: 'Wie soll ich Liam zuhause hinlegen? Auf dem Bauch? Auf der Seite? Auf dem Rücken?'",
          contextB1: "Die Mutter fragt: 'Wie soll ich Liam zuhause hinlegen?'",
          speaker: "Liams Mutter",
          options: [
            {
              text: "Zum Schlafen immer auf den Rücken — das ist die sicherste Position wegen SIDS. Tagsüber bei Atemproblemen den Oberkörper leicht erhöhen.",
              textB1: "Zum Schlafen: immer auf den Rücken. Das ist am sichersten. Bei Atemnot: Oberkörper etwas höher.",
              patientResponse: "Rückenlage zum Schlafen, Oberkörper hoch bei Atemnot — das merke ich mir. Und wenn er tagsüber auf dem Arm ist?",
              patientResponseB1: "Okay, auf den Rücken zum Schlafen. Oberkörper hoch bei Atemnot. Und auf dem Arm?",
              score: 3,
              feedback: "Perfekt! SIDS-Prävention: Rückenlage ist die sicherste Schlafposition für Säuglinge. Bei Atemunterstützung tagsüber: Oberkörper leicht erhöht. Klare, verständliche Anleitung.",
              feedbackB1: "Super! Rückenlage zum Schlafen = sicher (gegen plötzlichen Kindstod). Oberkörper hoch bei Atemproblemen.",
            },
            {
              text: "Am besten auf der Seite, das ist gut für die Verdauung und die Atmung.",
              textB1: "Auf die Seite legen. Das ist gut.",
              patientResponse: "Sind Sie sicher? Die Kinderärztin hat gesagt, auf dem Rücken sei am sichersten...",
              patientResponseB1: "Die Ärztin hat gesagt: auf dem Rücken...",
              score: 2,
              feedback: "Seitenlage ist nicht die empfohlene Schlafposition für Säuglinge! Die sicherste Position ist die Rückenlage (SIDS-Prävention). Seitenlage nur mit ärztlicher Anordnung.",
              feedbackB1: "Seitenlage ist nicht die beste Schlafposition für Babys. Rückenlage ist am sichersten!",
            },
            {
              text: "Auf den Bauch — das hilft am besten gegen die Bronchitis.",
              textB1: "Auf den Bauch legen.",
              patientResponse: "Auf den Bauch? Das macht mir Angst. Ist das wirklich sicher?",
              patientResponseB1: "Auf den Bauch? Ist das sicher?",
              score: 1,
              feedback: "Falsch! Bauchlage erhöht das SIDS-Risiko drastisch! Zum Schlafen IMMER Rückenlage. Bei Atemproblemen tagsüber: Oberkörper leicht erhöhen, NICHT Bauchlage.",
              feedbackB1: "Falsch! Bauchlage ist gefährlich für Babys (plötzlicher Kindstod)! Zum Schlafen: immer Rückenlage!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 19: REFLEXION — Reflection: Frau Becker vs. Liam
  // =============================================================
  {
    stepId: "le06-s2-tb4-08",
    phase: "s2",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345-351"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Vergleich: Erwachsene vs. Säugling",
      body: "Du hast heute Frau Becker (79 Jahre) und Liam (8 Monate) positioniert. Was war gleich, was war anders? Reflektiere in 2-3 Sätzen.",
    },
    contentB1: {
      title: "Was war gleich? Was war anders?",
      body: "Du hast Frau Becker und Liam positioniert. Was war gleich? Was war anders? Schreibe 2-3 Sätze.",
    },
    question: {
      fragetext: "Was war gleich und was war anders bei der Positionierung von Frau Becker (79 J.) und Liam (8 Mon.)?",
      reflection: {
        prompt: "Reflektiere: Was war gleich bei der Positionierung von Frau Becker und Liam? Was war anders?",
        placeholder: "Bei beiden war gleich, dass... Anders war, dass...",
        systemPrompt: "Bewerte ob der Schüler Gemeinsamkeiten (Kommunikation, spiralige Bewegung, Massen/Zwischenräume, Oberkörperhochlage bei Atemnot) und Unterschiede (Infant Handling, SIDS-Risiko, Elternanleitung, Größe/Gewicht) erkennt. Sandwich-Prinzip: Loben, korrigieren, ermutigen.",
      },
    },
  },

  // =============================================================
  // Step 20: INTERLEAVING — MC aus LE-01 (Autonomie)
  // =============================================================
  {
    stepId: "le06-s2-tb4-09",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Rückblick: LE-01",
      body: "Erinnerst du dich an LE-01? Diese Frage verknüpft dein Wissen mit dem heutigen Thema.",
    },
    contentB1: {
      title: "Erinnerst du dich?",
      body: "Eine Frage aus LE-01. Wie hängt das mit heute zusammen?",
    },
    question: {
      fragetext: "Warum ist 'Unterstützen statt Übernehmen' ein Grundprinzip guter Pflege?",
      optionen: [
        {
          text: "Weil es die Autonomie und Selbstwirksamkeit des Patienten fördert",
          isCorrect: true,
          explanation: "Richtig! Das Pflegeverständnis seit dem PflBG basiert auf Autonomie und Selbstbestimmung. Auch bei Kinästhetik: Ressourcen nutzen statt alles übernehmen.",
          explanationB1: "Richtig! Der Patient soll so viel wie möglich selbst machen. Das stärkt ihn. Genau wie bei Kinästhetik.",
        },
        {
          text: "Weil Pflegekräfte zu wenig Zeit haben",
          isCorrect: false,
          explanation: "Zeitmangel ist kein Grund. Das Prinzip basiert auf dem Menschenbild: Jeder Mensch hat Ressourcen und das Recht auf Selbstbestimmung.",
          explanationB1: "Zeitmangel ist nicht der Grund. Der Grund ist: Jeder Mensch soll selbst entscheiden können.",
        },
        {
          text: "Weil es billiger ist",
          isCorrect: false,
          explanation: "Kosten sind nicht der Grund. Es geht um das professionelle Pflegeverständnis: Autonomie fördern, Ressourcen nutzen, Würde achten.",
          explanationB1: "Geld ist nicht der Grund. Es geht um den Menschen und seine Selbstständigkeit.",
        },
        {
          text: "Weil der Arzt es anordnet",
          isCorrect: false,
          explanation: "Pflege ist eigenverantwortlich. 'Unterstützen statt Übernehmen' ist ein pflegerisches Grundprinzip, keine ärztliche Anordnung.",
          explanationB1: "Nein! Pflege entscheidet selbst. Das ist ein Pflege-Prinzip, keine Arzt-Anordnung.",
        },
      ],
    },
  },

  // =============================================================
  // Step 21: ANWENDUNG — Crossword: Fachbegriffe festigen
  // =============================================================
  {
    stepId: "le06-s2-tb4-10",
    phase: "s2",
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-351"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Kreuzworträtsel: Fachbegriffe",
      body: "Löse das Kreuzworträtsel mit den Fachbegriffen aus Session 1 und 2.",
    },
    contentB1: {
      title: "Kreuzworträtsel",
      body: "Finde die richtigen Wörter! Die Hinweise helfen dir.",
    },
    question: {
      fragetext: "Löse das Kreuzworträtsel:",
      crosswordWords: [
        {
          word: "KINAESTHETIK",
          clue: "Methode für richtige Bewegung in der Pflege (Q1 S.342)",
        },
        {
          word: "SPIRALIG",
          clue: "Drehbewegung — leichter und natürlicher als parallel (Q1 S.345)",
        },
        {
          word: "POSITIONIERUNG",
          clue: "Patient in eine bestimmte Lage bringen (Q1 S.348)",
        },
        {
          word: "DEKUBITUS",
          clue: "Druckgeschwür durch zu langen Druck auf die Haut (Q4)",
        },
        {
          word: "BRONCHITIS",
          clue: "Entzündung der Bronchien — Liam hat diese Erkrankung",
        },
        {
          word: "ZWISCHENRAUM",
          clue: "Bewegliche Stelle am Körper — dort NICHT anfassen (Q1 S.344)",
        },
      ],
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 2
  // =============================================================
  {
    stepId: "le06-s2-bk-01",
    phase: "s2",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345-351"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 2 abgeschlossen! Hier ist deine Zusammenfassung.",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Sehr gut! Session 2 ist fertig. Hier ist die Zusammenfassung.",
    },
    question: {
      fragetext: "Zusammenfassung Session 2",
      summary: {
        reflexionRueckbezug: "Du hast die 7 Grundpositionen gelernt (von Rückenlage bis Zweibeinstand), 6 Positionierungsarten mit ihren Indikationen kennengelernt, Infant Handling bei Liam geübt und die Umgebungsgestaltung für Mobilisation verstanden.",
        kernaussagen: [
          "7 Grundpositionen: aufsteigend von einfach (Rückenlage) bis komplex (Zweibeinstand)",
          "6 Positionierungen: Rückenlage flach, Oberkörperhoch, 30-Grad, 90-Grad, 135-Grad, Bauchlage — jede mit eigener Indikation",
          "30-Grad-Seitenlage = wichtigste Dekubitusprophylaxe-Position",
          "Infant Handling: über die Seite, spiralig, Füße zuerst, nie kopfüber",
          "Umgebung gestalten: Betthöhe, Handtücher statt weiche Kissen, Hilfsmittel bereitstellen",
          "Nächste Session: Sturzrisiko + Barthel-Index + Sturzprophylaxe",
        ],
      },
    },
  },
];
