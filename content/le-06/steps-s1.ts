// LE-06: Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Steps S1: Pfade 1–4 (Grundlagen Mobilität, Kinästhetik-Basics, Bewegungsmuster, Grundpositionen)
// Bloom: B1–B3, 1. Ausbildungsdrittel

import type { ContentStep } from "../_types";

// ================================================================
// PFAD 1: Mobilität — Was ist das und warum ist sie so wichtig?
// Kapitel 1–2, 13 Steps, Bloom B1–B3
// ================================================================

export const LE06_STEPS_S1: ContentStep[] = [
  {
    stepId: "le06-s1-cp-01",
    phase: "s1",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "Vgl. DNQP 2020; F06",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "SZENE",
    tag: "anatomie",
    xpValue: 10,
    contentC1: {
      title: "Muskelabbau — schneller als du denkst",
      body: "Frau Siebert (81) liegt seit 2 Tagen nach ihrer Hüft-OP im Bett. Die Physiotherapeutin kommt vorbei und sagt: „Wir müssen sie heute bewegen, sonst verliert sie schnell an Kraft.\"",
    },
    contentB1: {
      title: "Muskelabbau — schneller als du denkst",
      body: "Frau Siebert ist 81 Jahre alt. Sie liegt seit 2 Tagen im Bett. Sie hatte eine Hüft-OP. Die Physiotherapeutin sagt: „Wir müssen sie heute bewegen. Sonst verliert sie schnell Kraft.\"",
    },
    question: {
      fragetext: "Was schätzt du — nach wie vielen Tagen Bettruhe beginnt messbarer Muskelabbau?",
      crowdPoll: {
        question: "Was schätzt du — nach wie vielen Tagen Bettruhe beginnt messbarer Muskelabbau?",
        questionB1: "Was denkst du: Nach wie vielen Tagen im Bett baut der Körper Muskeln ab?",
        inputType: "choice",
        options: [
          {
            id: "a",
            text: "Nach 1–3 Tagen",
          },
          {
            id: "b",
            text: "Nach 7–10 Tagen",
          },
          {
            id: "c",
            text: "Nach 2–3 Wochen",
          },
          {
            id: "d",
            text: "Erst nach einem Monat",
          },
        ],
        seedResponses: [
          {
            text: "Nach 1–3 Tagen",
            count: 28,
            highlight: true,
          },
          {
            text: "Nach 7–10 Tagen",
            count: 22,
          },
          {
            text: "Nach 2–3 Wochen",
            count: 12,
          },
          {
            text: "Erst nach einem Monat",
            count: 6,
          },
        ],
        totalVotes: 68,
        fazit: "Bereits nach wenigen Tagen Bettruhe ist ein messbarer Muskelverlust nachweisbar. Bei älteren Menschen geht es noch schneller — und der Wiederaufbau dauert deutlich länger als der Abbau. (DNQP, Expertenstandard Mobilität, 2020)",
        fazitB1: "Schon nach wenigen Tagen im Bett verliert der Körper Muskeln. Bei älteren Menschen geht das noch schneller. Und Muskeln aufbauen dauert viel länger als Muskeln verlieren.",
      },
    },
  },
  {
    stepId: "le06-s1-tx-02",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(§ 4 PflBG)",
      "(DNQP, Expertenstandard Mobilität, 2020)",
      "F01",
      "F03",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "analogy",
    xpValue: 10,
    contentC1: {
      title: "Mobilität — der Schlüssel zur Selbstständigkeit",
      body: "Stell dir vor, du könntest dich nicht mehr im Bett umdrehen. Nicht aufstehen, nicht zur Toilette gehen, nicht ans Fenster treten. Mobilität umfasst alles: von der kleinen Lageveränderung im Bett über das Aufstehen bis zum Treppensteigen. Sie ist die Grundvoraussetzung für Selbstständigkeit und Teilhabe. Laut Pflegeberufegesetz gehört die Förderung der Mobilität zu den vorbehaltenen Tätigkeiten von Pflegefachpersonen (§ 4 PflBG).",
    },
    contentB1: {
      title: "Mobilität — der Schlüssel zur Selbstständigkeit",
      body: "Stell dir vor: Du kannst dich nicht im Bett umdrehen. Du kannst nicht aufstehen. Du kannst nicht zur Toilette gehen. Mobilität (= Bewegungs-Fähigkeit) bedeutet alles: sich im Bett drehen, aufstehen, gehen, Treppen steigen. Ohne Mobilität kann ein Mensch nicht selbstständig leben. Das Pflegeberufegesetz sagt: Die Förderung der Mobilität ist eine wichtige Aufgabe von Pflegefachpersonen (§ 4 PflBG).",
    },
    question: {
      fragetext: "Lies den Text aufmerksam.",
    },
  },
  {
    stepId: "le06-s1-ma-03",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP, diverse Expertenstandards)",
      "F02",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Wenn Bewegung fehlt — was passiert?",
      body: "Immobilität ist wie ein Dominoeffekt: Wer sich nicht bewegt, ist gleichzeitig für mehrere Komplikationen gefährdet. Jede erfordert eigene Prophylaxe-Maßnahmen.",
    },
    contentB1: {
      title: "Wenn Bewegung fehlt — was passiert?",
      body: "Immobilität (= keine Bewegung) ist wie ein Domino-Effekt. Wer sich nicht bewegt, kann mehrere Probleme bekommen. Jedes Problem braucht eigene Vorbeuge-Maßnahmen. Diese heißen Prophylaxe (= Vorbeugung).",
    },
    question: {
      fragetext: "Ordne jede Immobilitätsfolge der passenden Prophylaxe zu.",
      matchingPairs: [
        {
          left: "Druckschädigung der Haut",
          right: "Dekubitusprophylaxe",
        },
        {
          left: "Blutgerinnsel in den Beinvenen",
          right: "Thromboseprophylaxe",
        },
        {
          left: "Lungenentzündung durch flache Atmung",
          right: "Pneumonieprophylaxe",
        },
        {
          left: "Gelenkversteifung",
          right: "Kontrakturenprophylaxe",
        },
        {
          left: "Gleichgewichtsverlust und Sturzgefahr",
          right: "Sturzprophylaxe",
        },
      ],
    },
  },
  {
    stepId: "le06-s1-fc-04",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Anatomie-Grundlagenwissen)",
      "F04",
      "F05",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 10,
    contentC1: {
      title: "Gerüst und Antrieb — dein Bewegungsapparat",
      body: "Der Bewegungsapparat hat zwei Teile, die perfekt zusammenspielen.",
    },
    contentB1: {
      title: "Gerüst und Antrieb — dein Bewegungsapparat",
      body: "Der Bewegungs-Apparat hat zwei Teile. Diese zwei Teile arbeiten zusammen.",
    },
    question: {
      fragetext: "Drehe die Karten um und lerne die beiden Teile kennen.",
      flipcard: {
        instruction: "Drehe die Karten um und lerne die beiden Teile kennen.",
        cards: [
          {
            front: "Passiver Bewegungsapparat",
            back: "Knochen, Knorpel, Gelenke, Bänder — das tragende Gerüst. Über 200 Knochen bilden die Struktur.",
            backB1: "Knochen, Knorpel, Gelenke, Bänder — das Gerüst des Körpers. Es gibt über 200 Knochen.",
          },
          {
            front: "Aktiver Bewegungsapparat",
            back: "Skelettmuskulatur — der Antrieb. Rund 400 Muskeln bewegen das Skelett.",
            backB1: "Skelett-Muskulatur — der Antrieb. Rund 400 Muskeln bewegen das Skelett.",
          },
          {
            front: "Kugelgelenk (z. B. Schulter, Hüfte)",
            back: "Bewegung in alle Richtungen möglich — der größte Bewegungsumfang.",
            backB1: "Bewegung in alle Richtungen möglich. Dieses Gelenk hat den größten Bewegungsumfang.",
          },
          {
            front: "Scharniergelenk (z. B. Knie, Ellbogen)",
            back: "Nur Beugung und Streckung — wie eine Tür.",
            backB1: "Nur Beugung und Streckung. Wie eine Tür.",
          },
          {
            front: "Kinästhetik-Konzept: Funktionale Anatomie",
            back: "Zwei Ebenen: Knochen tragen Gewicht (die 7 Massen), Muskeln bewegen und halten Position (die 6 Zwischenräume). Praxisregel nach Hatch/Maietta: „Massen fassen, Zwischenräume spielen lassen“ — beim Transfer niemals Gelenke greifen, sondern die knöchernen Massen.",
            backB1: "Zwei Ebenen: Knochen tragen das Gewicht (die 7 Massen). Muskeln bewegen und halten (die 6 Zwischenräume). Regel für die Praxis: „Massen fassen, Zwischenräume spielen lassen.“ Das heißt: Beim Umlagern greifst du nie an ein Gelenk. Du greifst nur an die festen Körperteile mit Knochen.",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-s1-sw-05",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(§ 4 PflBG)",
      "(DNQP 2020)",
      "F01",
      "F03",
      "F06",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Fakten-Check: Mobilität",
      body: "Manche Aussagen über Mobilität klingen logisch — stimmen aber nicht. Wische nach rechts für „stimmt\" und nach links für „stimmt nicht\".",
    },
    contentB1: {
      title: "Fakten-Check: Mobilität",
      body: "Manche Aussagen klingen richtig. Aber sie stimmen nicht. Wische nach rechts für „stimmt\". Wische nach links für „stimmt nicht\".",
    },
    question: {
      fragetext: "Stimmt die Aussage oder nicht?",
      swipe: {
        instruction: "Wische nach rechts für „stimmt\", nach links für „stimmt nicht\".",
        cards: [
          {
            statement: "Muskelabbau beginnt erst nach 2 Wochen Bettruhe.",
            statementB1: "Muskelabbau beginnt erst nach 2 Wochen Bettruhe.",
            isCorrect: false,
            explanation: "Schon nach wenigen Tagen ist Muskelverlust messbar — besonders bei älteren Menschen.",
            explanationB1: "Schon nach wenigen Tagen verliert der Körper Muskeln. Besonders bei älteren Menschen.",
          },
          {
            statement: "Mobilität umfasst auch kleine Lageveränderungen im Bett.",
            statementB1: "Mobilität umfasst auch kleine Lageveränderungen im Bett.",
            isCorrect: true,
            explanation: "Genau! Schon eine Drehung im Bett ist Mobilität.",
            explanationB1: "Genau! Schon eine Drehung im Bett ist Mobilität.",
          },
          {
            statement: "Ältere Menschen bauen Muskeln genauso schnell wieder auf wie jüngere.",
            statementB1: "Ältere Menschen bauen Muskeln genauso schnell auf wie jüngere.",
            isCorrect: false,
            explanation: "Leider nicht — der Wiederaufbau dauert bei älteren Menschen deutlich länger als der Abbau.",
            explanationB1: "Leider nicht. Muskeln aufbauen dauert bei älteren Menschen viel länger als Muskeln verlieren.",
          },
          {
            statement: "Mobilisationsplanung gehört zu den vorbehaltenen Tätigkeiten laut PflBG.",
            statementB1: "Die Planung der Mobilisation gehört laut PflBG zu den vorbehaltenen Tätigkeiten.",
            isCorrect: true,
            explanation: "Richtig! § 4 PflBG definiert die Erhebung des Pflegebedarfs als vorbehaltene Tätigkeit.",
            explanationB1: "Richtig! § 4 PflBG sagt: Die Erhebung des Pflegebedarfs ist eine vorbehaltene Tätigkeit.",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-s1-tx-06",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer — Leitfall Frau Siebert]",
      "F02",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Frau Siebert — Tag 2 nach der Hüft-OP",
      body: "Frau Siebert (81) liegt seit 2 Tagen nach ihrer Hüft-TEP in Rückenlage. Sie war vor dem Sturz noch komplett selbstständig — ging dreimal pro Woche zum Markt, kochte jeden Tag frisch. Jetzt sagt sie: „Lassen Sie mich einfach liegen. Ich will nicht wieder fallen.\" Ihr Barthel-Index liegt bei 40 Punkten. Sie trinkt wenig und hat kaum Appetit. Dein Auftrag: Du planst die Pflege für Frau Siebert.",
    },
    contentB1: {
      title: "Frau Siebert — Tag 2 nach der Hüft-OP",
      body: "Frau Siebert ist 81 Jahre alt. Sie liegt seit 2 Tagen auf dem Rücken. Sie hatte eine Hüft-OP (Hüft-TEP). Vor dem Sturz war sie selbstständig. Sie ging dreimal pro Woche zum Markt. Sie kochte jeden Tag. Jetzt sagt sie: „Lassen Sie mich liegen. Ich will nicht wieder fallen.\" Ihr Barthel-Index (= Test für Selbstständigkeit) ist 40 von 100 Punkten. Sie trinkt wenig und hat wenig Appetit. Dein Auftrag: Plane die Pflege für Frau Siebert.",
    },
    question: {
      fragetext: "Lies die Szene aufmerksam.",
    },
  },
  {
    stepId: "le06-s1-mc-07",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP, diverse Expertenstandards)",
      "F02",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Prophylaxe-Risiken bei Frau Siebert",
      body: "Frau Siebert liegt seit 2 Tagen, hat wenig Appetit, trinkt wenig, ist 81 Jahre alt und hat eine Hüft-TEP. Denke an den Dominoeffekt der Immobilität.",
    },
    contentB1: {
      title: "Prophylaxe-Risiken bei Frau Siebert",
      body: "Frau Siebert liegt seit 2 Tagen. Sie isst wenig und trinkt wenig. Sie ist 81 Jahre alt und hatte eine Hüft-OP. Denke an den Domino-Effekt: Keine Bewegung = viele Risiken.",
    },
    question: {
      fragetext: "Für welche Komplikationen ist Frau Siebert gefährdet? (Mehrfachauswahl)",
      multiSelect: true,
      optionen: [
        {
          text: "Dekubitus durch Immobilität und geringes Körpergewicht",
          isCorrect: true,
          explanation: "Richtig! Immobilität und geringes Gewicht sind klassische Dekubitus-Risikofaktoren.",
          explanationB1: "Richtig! Keine Bewegung und wenig Gewicht erhöhen das Dekubitus-Risiko.",
        },
        {
          text: "Thrombose durch OP, Immobilität und geringe Flüssigkeitszufuhr",
          isCorrect: true,
          explanation: "Richtig! OP + Immobilität + wenig Trinken = hohes Thromboserisiko.",
          explanationB1: "Richtig! OP + keine Bewegung + wenig Trinken = hohes Thrombose-Risiko.",
        },
        {
          text: "Pneumonie durch flache Atmung und Schonhaltung nach OP",
          isCorrect: true,
          explanation: "Richtig! Flache Atmung durch Schonung führt zu schlechter Belüftung der unteren Lungenabschnitte.",
          explanationB1: "Richtig! Flache Atmung durch Schonung nach der OP. Die Lunge wird schlecht belüftet.",
        },
        {
          text: "Kontraktur durch dauerhafte Rückenlage ohne Bewegungsübungen",
          isCorrect: true,
          explanation: "Richtig! Dauerhafte Rückenlage ohne Bewegung kann zu Gelenkversteifungen führen.",
          explanationB1: "Richtig! Immer auf dem Rücken liegen ohne Bewegung kann die Gelenke versteifen.",
        },
        {
          text: "Sturz durch Sturzangst, Gangunsicherheit und Muskelabbau",
          isCorrect: true,
          explanation: "Richtig! Sturzangst + Gangunsicherheit + Muskelabbau = hohes Sturzrisiko.",
          explanationB1: "Richtig! Angst vor Stürzen + unsicheres Gehen + Muskelabbau = hohes Sturzrisiko.",
        },
        {
          text: "Alle genannten Komplikationen treffen auf Frau Siebert zu",
          isCorrect: true,
          explanation: "Stark! Frau Siebert vereint praktisch alle Risikofaktoren: Immobilität (Dekubitus, Kontraktur), Alter + OP + wenig Trinken (Thrombose), flache Atmung durch Schonung (Pneumonie), Sturzangst + Gangunsicherheit (Sturz). Deshalb braucht sie ein komplettes Prophylaxe-Bündel.",
          explanationB1: "Sehr gut! Frau Siebert hat ALLE Risiken. Sie bewegt sich nicht, ist alt, hatte eine OP, trinkt wenig und hat Angst vor Stürzen. Deshalb braucht sie alle 5 Prophylaxen.",
        },
      ],
    },
  },
  {
    stepId: "le06-s1-hs-08",
    phase: "s1",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(EPUAP/NPUAP 2014; DNQP 2017)",
      "F45",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 20,
    bildhinweis: "Menschlicher Körper in Rückenlage, Seitenansicht. Prädilektionsstellen markierbar.",
    bildkategorie: "anatomie",
    contentC1: {
      title: "Wo drückt es? — Prädilektionsstellen",
      body: "Frau Siebert liegt in Rückenlage. Überall wo Knochen direkt unter der Haut liegen, entsteht erhöhter Druck auf das Gewebe.",
    },
    contentB1: {
      title: "Wo drückt es? — Prädilektionsstellen",
      body: "Frau Siebert liegt auf dem Rücken. Überall, wo Knochen direkt unter der Haut liegen, drückt es auf das Gewebe. Dort kann ein Dekubitus (= Druckgeschwür) entstehen.",
    },
    question: {
      fragetext: "Tippe auf die Stellen am Körper, die bei Rückenlage für Dekubitus gefährdet sind.",
      hotspot: {
        imageUrl: "/images/content/svg/körper-rückenlage.svg",
        imageAlt: "Menschlicher Körper in Rückenlage",
        instruction: "Tippe auf die Stellen am Körper, die bei Rückenlage für Dekubitus gefährdet sind.",
        zones: [
          {
            id: "hinterhaupt",
            x: 12,
            y: 10,
            radius: 8,
            label: "Hinterhaupt",
          },
          {
            id: "schulterblatt-l",
            x: 30,
            y: 25,
            radius: 8,
            label: "Schulterblätter",
          },
          {
            id: "ellbogen-l",
            x: 8,
            y: 45,
            radius: 6,
            label: "Ellbogen",
          },
          {
            id: "kreuzbein",
            x: 30,
            y: 55,
            radius: 8,
            label: "Kreuzbein/Steißbein",
          },
          {
            id: "fersen",
            x: 30,
            y: 90,
            radius: 6,
            label: "Fersen",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-s1-me-09",
    phase: "s1",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F01",
      "F02",
      "F03",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Memory: Fachbegriffe der Mobilität",
      body: "Finde die zusammengehörenden Paare — Begriff und Bedeutung.",
    },
    contentB1: {
      title: "Memory: Fachbegriffe der Mobilität",
      body: "Finde die Paare. Welcher Begriff gehört zu welcher Bedeutung?",
    },
    question: {
      fragetext: "Finde die zusammengehörenden Paare.",
      memoryPairs: [
        {
          a: "Mobilität",
          b: "Fähigkeit, den Körper zielgerichtet zu bewegen",
        },
        {
          a: "Immobilität",
          b: "Einschränkung der selbstständigen Bewegung",
        },
        {
          a: "Mobilisation",
          b: "Pflegerische Maßnahmen zur Bewegungsförderung",
        },
        {
          a: "Positionierung",
          b: "Therapeutische Lagerung mit definiertem Ziel",
        },
        {
          a: "Prädilektionsstelle",
          b: "Körperstelle mit erhöhtem Dekubitusrisiko",
        },
        {
          a: "Prophylaxe",
          b: "Vorbeugende Maßnahme gegen eine Komplikation",
        },
      ],
    },
  },
  {
    stepId: "le06-s1-ti-10",
    phase: "s1",
    stepType: "timer",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP, diverse Expertenstandards)",
      "F02",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Schnell-Check: Die 5 großen Prophylaxen",
      body: "Du hast 2 Minuten. Zähle alle 5 großen Prophylaxen auf, die bei Immobilität relevant sind.",
    },
    contentB1: {
      title: "Schnell-Check: Die 5 großen Prophylaxen",
      body: "Du hast 2 Minuten Zeit. Zähle alle 5 großen Prophylaxen (= Vorbeuge-Maßnahmen) auf. Diese sind wichtig bei Patienten ohne Bewegung.",
    },
    question: {
      fragetext: "Nenne die 5 Prophylaxen, die bei immobilen Patienten bedacht werden müssen.",
      timerQuestions: [
        {
          question: "Prophylaxe gegen Druckschäden der Haut?",
          options: [
            "Dekubitusprophylaxe",
            "Pneumonieprophylaxe",
            "Sturzprophylaxe",
          ],
          correctIndex: 0,
        },
        {
          question: "Prophylaxe gegen Blutgerinnsel?",
          options: [
            "Kontrakturenprophylaxe",
            "Thromboseprophylaxe",
            "Dekubitusprophylaxe",
          ],
          correctIndex: 1,
        },
        {
          question: "Prophylaxe gegen Lungenentzündung?",
          options: [
            "Sturzprophylaxe",
            "Thromboseprophylaxe",
            "Pneumonieprophylaxe",
          ],
          correctIndex: 2,
        },
        {
          question: "Prophylaxe gegen Gelenkversteifung?",
          options: [
            "Kontrakturenprophylaxe",
            "Dekubitusprophylaxe",
            "Pneumonieprophylaxe",
          ],
          correctIndex: 0,
        },
        {
          question: "Prophylaxe gegen Gleichgewichtsverlust?",
          options: [
            "Thromboseprophylaxe",
            "Kontrakturenprophylaxe",
            "Sturzprophylaxe",
          ],
          correctIndex: 2,
        },
      ],
      timeLimitSeconds: 120,
    },
  },
  {
    stepId: "le06-s1-cat-11",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP, diverse Expertenstandards)",
      "F02",
      "F46",
      "F52",
      "F57",
      "F69",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 30,
    contentC1: {
      title: "Risikofaktor-Sortierung bei Frau Siebert",
      body: "Frau Siebert hat viele Risikofaktoren. Sortiere sie in die richtige Prophylaxe-Kategorie. Manche Faktoren können mehreren Prophylaxen zugeordnet werden — wähle die passendste.",
    },
    contentB1: {
      title: "Risikofaktor-Sortierung bei Frau Siebert",
      body: "Frau Siebert hat viele Risikofaktoren (= Gründe für Probleme). Sortiere sie. Welcher Risikofaktor gehört zu welcher Prophylaxe? Wähle die Prophylaxe, die am besten passt.",
    },
    question: {
      fragetext: "Ordne jeden Risikofaktor der Prophylaxe zu, für die er am relevantesten ist.",
      categories: [
        {
          name: "Dekubitusprophylaxe",
        },
        {
          name: "Thromboseprophylaxe",
        },
        {
          name: "Sturzprophylaxe",
        },
        {
          name: "Pneumonieprophylaxe",
        },
        {
          name: "Kontrakturenprophylaxe",
        },
      ],
      categoryItems: [
        {
          text: "Geringes Körpergewicht (BMI 19,8)",
          correctCategory: 0,
        },
        {
          text: "OP vor 2 Tagen + Immobilität",
          correctCategory: 1,
        },
        {
          text: "Sturzangst + Gangunsicherheit",
          correctCategory: 2,
        },
        {
          text: "Flache Atmung durch Schonhaltung",
          correctCategory: 3,
        },
        {
          text: "Dauerhafte Rückenlage",
          correctCategory: 4,
        },
      ],
    },
  },
  {
    stepId: "le06-s1-est-12",
    phase: "s1",
    stepType: "estimation",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Barthel/Mahoney, 1965)",
      "F78",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Was bedeutet ein Barthel-Index von 40?",
      body: "Frau Siebert hat einen Barthel-Index von 40 Punkten (von 100). Der Barthel-Index misst die Selbstständigkeit bei 10 Aktivitäten des täglichen Lebens.",
    },
    contentB1: {
      title: "Was bedeutet ein Barthel-Index von 40?",
      body: "Frau Siebert hat einen Barthel-Index von 40 Punkten. Das Maximum ist 100 Punkte. Der Barthel-Index misst: Wie selbstständig ist ein Mensch? Er prüft 10 Alltags-Aktivitäten.",
    },
    question: {
      fragetext: "Schätze ein: Wie viel Prozent ihrer Alltagsaktivitäten kann Frau Siebert aktuell selbstständig durchführen?",
      estimation: {
        instruction: "Schätze ein: Wie viel Prozent ihrer Alltagsaktivitäten kann Frau Siebert aktuell selbstständig durchführen?",
        unit: "Prozent",
        correctValue: 40,
        tolerance: 10,
        funFact: "Der Barthel-Index wurde 1965 von Barthel und Mahoney entwickelt und ist bis heute eines der am häufigsten eingesetzten Assessments in der Pflege.",
        explanation: "40 von 100 Punkten bedeutet: Frau Siebert braucht bei den meisten Aktivitäten Hilfe. Sie kann vermutlich noch selbstständig essen und hat teilweise Kontinenz, aber Aufstehen, Gehen, Baden und Ankleiden schafft sie aktuell nicht allein. (Barthel/Mahoney, 1965)",
        explanationB1: "40 von 100 Punkten bedeutet: Frau Siebert braucht bei den meisten Aktivitäten Hilfe. Sie kann vielleicht noch allein essen. Aber Aufstehen, Gehen und Anziehen schafft sie nicht allein.",
      },
    },
  },
  {
    stepId: "le06-s1-rf-13",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(§ 4 PflBG)",
      "(DNQP 2020)",
      "F01",
      "F02",
      "F03",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-mobilität",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Reflexion: Mobilität als Schlüsselkompetenz",
      body: "Du hast gelernt, dass Immobilität einen Dominoeffekt auslöst — und dass Pflegefachpersonen diesen aktiv verhindern können.",
    },
    contentB1: {
      title: "Reflexion: Mobilität als Schlüsselkompetenz",
      body: "Du hast gelernt: Wenn ein Mensch sich nicht bewegt, kommen viele Probleme. Das ist der Domino-Effekt. Pflegefachpersonen können das verhindern.",
    },
    question: {
      fragetext: "Formuliere in 2–3 Sätzen: Warum ist die Förderung der Mobilität laut PflBG eine der wichtigsten Pflegeaufgaben? Denke an Frau Siebert.",
      reflection: {
        prompt: "Formuliere in 2–3 Sätzen: Warum ist die Förderung der Mobilität laut PflBG eine der wichtigsten Pflegeaufgaben? Denke an Frau Siebert.",
        placeholder: "Schreibe mindestens 2 Sätze...",
        systemPrompt: "Bewerte die Reflexion: Mobilität = Voraussetzung für Selbstständigkeit und Teilhabe; Immobilität = Risiko für 5 Komplikationen gleichzeitig; vorbehaltene Tätigkeit laut § 4 PflBG. Bezug auf Frau Siebert als Beispiel.",
      },
      bewertungskriterien: [
        "Mobilität als Voraussetzung für Selbstständigkeit genannt",
        "Dominoeffekt / 5 Komplikationen erwähnt",
        "Bezug auf PflBG oder vorbehaltene Tätigkeit",
      ],
    },
  },
];
