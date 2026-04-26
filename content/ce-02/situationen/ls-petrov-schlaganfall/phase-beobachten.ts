// CE-02 Situation Petrov — Phase 2: Beobachten
// Steps: 7 · Bloom: B3-B4 · Zeit: ~30-45 Min
// Quelle: phase-beobachten.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-petrov-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Risiken erkennen",
  titelB1: "Schauen und Risiken finden",
  kontext:
    "Du stehst am Bett von Herrn Petrov. Frühschicht, 07:25 Uhr. Du hast dich vorgestellt, er hat genickt. Jetzt beginnt das strukturierte Beobachten — bevor du irgendetwas tust. Du willst wissen: Wie ist sein Zustand heute Morgen?",
  kontextB1:
    "Du stehst am Bett von Herrn Petrov. Es ist 07:25 Uhr. Du hast dich vorgestellt. Er hat genickt. Jetzt schaust du genau hin. Bevor du etwas tust, beobachtest du. Du stellst dir die Frage: Wie geht es ihm heute Morgen?",
  kernSteps: [
    // Step 2.1 — Freetext: Motorik-Brilliantfrage
    {
      stepId: "ce02-petrov-beob-01-motorik-brilliantfrage",
      phase: 2,
      stepType: "freetext",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-petrov-beob-motorik",
      tag: "pflege",
      bildkategorie: "szene",
      imageAlt:
        "Pflegeschüler beobachtet Patienten mit schlaff hängendem rechten Arm am Bett, Frühschicht",
      bildhinweis:
        "Nurse student observing stroke patient in hospital bed, right arm lying limp on mattress, morning light, attentive professional posture, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "BRILLIANT-FRAGE: Was siehst du?",
        body: "Vor dir die Beschreibung: Herrn Petrovs rechter Arm liegt gestreckt auf der Matratze. Er schaut auf ihn — der Arm bewegt sich nicht. Sein rechtes Bein kann er minimal heben, aber der Fuß hängt nach unten.\n\nBevor wir erklären, was das bedeutet: Beschreibe in 1-2 Sätzen was du siehst und was das für die Pflege bedeuten könnte.",
        glossarBegriffe: ["Muskeltonus", "Lagerung", "Hemiparese"],
      },
      contentB1: {
        title: "Was siehst du?",
        body: "Schau dir Herrn Petrovs rechten Arm an. Der Arm liegt auf der Matratze. Er bewegt sich nicht. Herr Petrov schaut auf seinen Arm. Sein rechter Fuß hängt nach unten. Was siehst du? Schreibe 1-2 Sätze. Zum Beispiel: \"Ich sehe, dass der rechte Arm keine Spannung hat. Die Lagerung ist falsch.\"",
        glossarBegriffe: ["Lagerung", "Hemiparese"],
      },
      question: {
        fragetext:
          "Was nimmst du wahr, bevor du irgendetwas anfasst? Beschreibe in 1-2 Sätzen was du siehst und was das für die Pflege bedeuten könnte.",
        musterantwort:
          "Der rechte Arm liegt schlaff und gestreckt auf der Matratze — kein Tonus, keine Eigenaktivität. Der hängende Fuß deutet auf fehlende Dorsalflexion hin. Die Lagerung muss Bobath-gerecht korrigiert werden: Schulter nach vorne, Arm gestützt auf Kissen, Fuß neutral.",
        bewertungskriterien: [
          "Erwähnung von Tonus oder fehlender Spannung im Arm",
          "Erwähnung der Lagerung oder Notwendigkeit zur Korrektur",
          "Beobachtung als Vorstufe zur Handlung formuliert",
        ],
        satzanfaengeB1: [
          "Ich sehe, dass der rechte Arm ...",
          "Der Fuß hängt ...",
          "Das bedeutet für die Pflege: ...",
        ],
      },
    },

    // Step 2.2 — Categorize: Motorik-Assessment
    {
      stepId: "ce02-petrov-beob-02-motorik-assessment",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-beob-motorik-einordnen",
      tag: "krankheitslehre",
      contentC1: {
        title: "Motorik-Assessment",
        body: "Du beobachtest Herrn Petrov beim Versuch, verschiedene Bewegungen durchzuführen. Ordne die Beobachtungen den richtigen Kategorien zu.",
        glossarBegriffe: ["Hemiparese", "Dorsalflexion", "Motorik"],
      },
      contentB1: {
        title: "Was kann Herr Petrov noch?",
        body: "Du beobachtest Herrn Petrov. Du sortierst seine Bewegungen. Was funktioniert? Was nicht?",
        glossarBegriffe: ["Motorik", "Hemiparese"],
      },
      question: {
        fragetext:
          "Ordne die Beobachtungen bei Herrn Petrov den richtigen Motorik-Kategorien zu.",
        categories: [
          { name: "Funktion erhalten" },
          { name: "Partiell erhalten" },
          { name: "Komplett ausgefallen" },
        ],
        categoryItems: [
          { text: "Linke Hand zum Gesicht führen", correctCategory: 0 },
          { text: "Kopf drehen", correctCategory: 0 },
          { text: "Mit links ein Glas halten", correctCategory: 0 },
          { text: "Rechtes Bein anheben", correctCategory: 1 },
          { text: "Rechter Fuß Dorsalflexion", correctCategory: 1 },
          { text: "Rechter Arm: gezielter Griff", correctCategory: 2 },
          { text: "Rechts schreiben", correctCategory: 2 },
        ],
      },
    },

    // Step 2.3 — Branching: Schluckversuch
    {
      stepId: "ce02-petrov-beob-03-schluckversuch",
      phase: 2,
      stepType: "branching",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "GUSS (Trapl M. et al. 2007, Stroke 38:2948-2952)",
        "IDDSI (2019)",
        "DGG/DGN 2020 Neurogene Dysphagie",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-petrov-beob-schluckstatus",
      tag: "pflege",
      contentC1: {
        title: "Schluckstatus prüfen",
        body: "Du möchtest den Schluckstatus von Herrn Petrov beurteilen. Angedickte Flüssigkeit und normales Wasser stehen auf dem Nachttisch. Du weißt: Er hat Dysphagie Grad 2 laut Akte. Was machst du?",
        glossarBegriffe: ["GUSS", "Dysphagie", "Aspiration", "IDDSI"],
      },
      contentB1: {
        title: "Kann Herr Petrov schlucken?",
        body: "Du möchtest sehen, ob Herr Petrov gut schlucken kann. Auf dem Tisch steht normales Wasser und angedickte Flüssigkeit. Was machst du?",
        glossarBegriffe: ["Dysphagie", "Aspiration"],
      },
      question: {
        fragetext: "Du willst den Schluckstatus prüfen. Was machst du?",
        branchingOptions: [
          {
            text: "Ich hole ein Glas Wasser und bitte ihn zu trinken — um zu sehen ob er schlucken kann.",
            isCorrect: false,
            feedback:
              "Aspirationsgefahr! Der GUSS-Befund aus der Akte sagt eindeutig: Dysphagie Grad 2, Dünnflüssiges aspirationsgefährdet. Du musst die Akte kennen bevor du handelst — nicht testen was bereits getestet wurde. Dünnflüssiges Wasser beim Grad-2-Patienten kann eine stille Aspiration auslösen.",
            feedbackB1:
              "Das ist gefährlich! Die Akte sagt: Dysphagie Grad 2. Dünne Flüssigkeit kann in die Lunge kommen. Erst Akte lesen — dann handeln.",
          },
          {
            text: "Ich lese den GUSS-Befund aus der Akte (Dysphagie Grad 2), übernehme die ärztlich/logopädisch verordnete Konsistenz (IDDSI Level 2) und beobachte beim regulären Frühstück konkret: Hustet er? Feuchte Stimme? Verschluckt er sich?",
            isCorrect: true,
            feedback:
              "Richtig vorgegangen. Akte → GUSS-Befund → Verordnung übernehmen → Beobachtung bei regulärer Nahrungsgabe. Wichtig: GUSS wird durch geschultes Personal (Schlucktherapie/geschulte Pflege) durchgeführt — er ist hier bereits gemacht (Grad 2 dokumentiert). Pflegerische Aufgabe ist Anreichen nach Verordnung + kontinuierliche Beobachtung der Schluckzeichen, kein erneuter eigenständiger Schluckversuch. Husten = aktive Schutzreaktion, feuchte Stimme nach dem Schlucken = stille Aspiration möglich, Verschlucken = offensichtliches Aspirationsereignis. (GUSS Trapl 2007; IDDSI 2019; DGG/DGN 2020)",
            feedbackB1:
              "Richtig. Erst Akte lesen. Du machst keinen neuen Schluck-Test — der ist schon gemacht. Du gibst die angedickte Flüssigkeit beim Frühstück nach Verordnung und schaust genau hin: Hustet er? Klingt die Stimme feucht? Das sind wichtige Zeichen.",
          },
          {
            text: "Ich frage den Arzt bevor ich irgendetwas tue — Schluckstatus ist Arztaufgabe.",
            isCorrect: false,
            feedback:
              "Teilrichtig, aber nicht vollständig. Beobachten ist eine pflegerische Aufgabe — die kannst und sollst du selbst tun. Die Akte gibt dir alle Informationen die du für die Beobachtung brauchst. Erst beobachten mit dem was bekannt ist, dann bei Verschlechterung oder Unklarheit den Arzt informieren. Passives Abwarten ist keine Pflegequalität.",
            feedbackB1:
              "Nicht ganz richtig. Beobachten ist deine Aufgabe als Pflegekraft. Die Akte sagt dir was du tun sollst. Erst beobachten — dann bei Problemen den Arzt rufen.",
          },
        ],
      },
    },

    // Step 2.4 — Text: Lungenbeobachtung (stepbystep)
    {
      stepId: "ce02-petrov-beob-04-lunge-auskultieren",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "KRINKO 2013 Nosokomiale Pneumonie",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-beob-lunge",
      tag: "krankheitslehre",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Atembeobachtung — 4 Schritte",
        body: "Pneumonieprophylaxe beginnt mit pflegerischer Atembeobachtung. Auskultation mit dem Stethoskop ist ärztliche Aufgabe — Pflege beobachtet strukturiert und dokumentiert Auffälligkeiten.\n\n1) Atemfrequenz zählen: 15 Sek × 4 = Atemzüge/Min. Norm: 12-18/Min. Abweichung dokumentieren.\n2) Atemtiefe beobachten: flache vs. tiefe Atmung. Schlaganfall-Patienten atmen oft flach — Atelektasegefahr.\n3) Hörbare Atemgeräusche am Bett: Klingt die Atmung normal? Hörst du Rasseln, Giemen oder Brodeln ohne Stethoskop? Gibt es eine sichtbare Seitendifferenz der Atemexkursion?\n4) Husten und Sekret: Ist Husten möglich? Farbe des Sekrets (klar = normal, gelb/grün = Infektion möglich), Hautfarbe (Lippen, Akren).\n\nBefund Herr Petrov: Atemfrequenz 17/Min, hörbares Atemgeräusch unauffällig, leicht reduzierte Atemexkursion rechts, kein Auswurf, keine Zyanose. → Pneumonieprophylaxe weiterführen, bei Auffälligkeiten ärztliche Auskultation veranlassen. (KRINKO 2013; PflBG-Kompetenzen)",
        glossarBegriffe: ["Atelektase", "Atemexkursion", "Pneumonie", "Sekret"],
      },
      contentB1: {
        title: "Die Atmung beobachten — 4 Schritte",
        body: "Du beobachtest die Atmung von Herrn Petrov. 4 Schritte:\nSchritt 1: Zähle die Atemzüge in 15 Sekunden. Dann × 4. Normal sind 12-18 pro Minute.\nSchritt 2: Atmet er tief oder flach?\nSchritt 3: Hörst du am Bett ein Rasseln oder Brodeln (ohne Stethoskop)? Bewegt sich der Brust-Korb gleichmäßig auf beiden Seiten?\nSchritt 4: Hustet er? Kommt Sekret (= Schleim) heraus? Welche Farbe haben Lippen und Haut?\nWichtig: Mit dem Stethoskop hört der Arzt die Lunge ab (= Auskultation). Das ist nicht deine Aufgabe als Pflege-Schülerin.\nBefund bei Herrn Petrov: 17 Atemzüge pro Minute. Atmung gleichmäßig, kein Rasseln hörbar, kein Husten.\nDeshalb machst du weiter mit der Pneumonie-Prophylaxe (= Lungenentzündung verhindern).",
        glossarBegriffe: ["Pneumonie", "Atemfrequenz", "Atemexkursion"],
      },
    },

    // Step 2.5 — TrueFalse: Katheter-Check (4 Aussagen)
    {
      stepId: "ce02-petrov-beob-05-katheter-check",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "III.2",
      quellen: [
        "KRINKO 2015 Prävention katheter-assoziierter Harnwegsinfektionen",
        "§ 4 PflBG",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-beob-katheter",
      tag: "pflege",
      contentC1: {
        title: "Katheter-Beurteilung",
        body: "Du schaust dir den Blasenverweilkatheter an. Vier Aussagen — richtig oder falsch?",
        glossarBegriffe: ["BVK", "CAUTI", "Katheter", "Bilanzierung"],
      },
      contentB1: {
        title: "Den Blasen-Katheter beurteilen",
        body: "Du schaust dir den Blasen-Katheter (= BVK) an. 4 Aussagen — richtig oder falsch?",
        glossarBegriffe: ["BVK", "Katheter"],
      },
      question: {
        fragetext: "Richtig oder falsch? Beurteile jede Aussage.",
        trueFalseCards: [
          {
            statement:
              "Urin goldgelb, ca. 1.800 ml/24h laut Bilanzblatt — das ist ein Normalbefund.",
            isTrue: true,
            explanation:
              "Richtig. Normwert Ausscheidung: 1.500-2.000 ml/24h. Goldgelber Urin = ausreichende Hydratation. Abweichungen (dunkelgelb = zu wenig Trinken, trüb + übelriechend = Infektionsverdacht) müssen dokumentiert und gemeldet werden. (KRINKO 2015)",
          },
          {
            statement:
              "Der Katheterbeutel liegt auf der Matratze — das ist hygienisch und praktisch.",
            isTrue: false,
            explanation:
              "Falsch. Der Beutel muss hängen, nie auf der Matratze liegen. Auf der Matratze: Rückfluss-Gefahr (Urin fließt zurück in die Blase = Keimaszension) und Keimübertragung durch Kontakt. Standard: Beutel unterhalb Blasenniveau, nicht den Boden berühren. (KRINKO 2015)",
          },
          {
            statement:
              "Ich prüfe die Eintrittsstelle des Katheters an der Harnröhrenöffnung auf Rötung und Ausfluss.",
            isTrue: true,
            explanation:
              "Richtig. Tägliche Beobachtung der Eintrittsstelle ist Pflichtroutine nach KRINKO 2015: Rötung, Sekret, Schwellung können erste Zeichen einer CAUTI (katheter-assoziierter Harnwegsinfekt) sein. Frühzeitiges Erkennen verhindert systemische Infektion.",
          },
          {
            statement:
              "BVK-Wechsel ist nach 14 Tagen fällig — das erledigt der Arzt ohne meine Beteiligung.",
            isTrue: false,
            explanation:
              "Falsch. Pflege plant den Wechsel vor, bereitet ihn vor, beobachtet Zeichen einer Infektion und informiert die ärztliche Anordnung. Außerdem: KRINKO empfiehlt BVK so früh wie möglich zu entfernen (nicht erst nach 14 Tagen). Proaktive Pflege fragt täglich: Ist der Katheter noch nötig?",
          },
        ],
      },
    },

    // Step 2.6 — Hotspot: Hautinspektion (Körpersilhouette)
    {
      stepId: "ce02-petrov-beob-06-hautinspektion",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Dekubitusprophylaxe 2017/2024",
        "EPUAP/NPUAP Klassifikation 2014",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-petrov-beob-haut",
      tag: "anatomie",
      contentC1: {
        title: "Hautinspektion — wo prüfst du?",
        body: "Herr Petrov ist seit 5 Tagen überwiegend immobil. Markiere alle Körperstellen, die du bei einem immobilen Schlaganfall-Patienten auf Druckschäden prüfen würdest.",
        glossarBegriffe: ["Dekubitus", "Prädilektionsstellen", "EPUAP"],
      },
      contentB1: {
        title: "Welche Stellen prüfst du?",
        body: "Du schaust die Haut von Herrn Petrov an. Er liegt viel im Bett. Das ist gefährlich für die Haut. Wo kann ein Druckgeschwür (= Dekubitus) entstehen? Tippe auf die Stellen.",
        glossarBegriffe: ["Dekubitus", "Haut"],
      },
      question: {
        fragetext:
          "Markiere alle Körperstellen, die du bei einem immobilen Schlaganfall-Patienten auf Druckschäden prüfen würdest.",
        hotspot: {
          imageUrl: "/images/anatomie/koerper-ruecken-liegend.svg",
          imageAlt:
            "Körpersilhouette Rückenansicht liegend mit markierbaren Prädilektionsstellen",
          instruction:
            "Tippe auf alle Stellen, die du auf Druckschäden prüfen würdest.",
          zones: [
            {
              id: "steissbein",
              x: 50,
              y: 68,
              radius: 5,
              label: "Steißbein (Sakrum)",
            },
            {
              id: "ferse-links",
              x: 44,
              y: 95,
              radius: 4,
              label: "Linke Ferse",
            },
            {
              id: "ferse-rechts",
              x: 56,
              y: 95,
              radius: 4,
              label: "Rechte Ferse",
            },
            {
              id: "hinterhaupt",
              x: 50,
              y: 5,
              radius: 4,
              label: "Hinterhaupt (Okziput)",
            },
            {
              id: "schulterblatt-links",
              x: 42,
              y: 25,
              radius: 4,
              label: "Linkes Schulterblatt",
            },
            {
              id: "schulterblatt-rechts",
              x: 58,
              y: 25,
              radius: 4,
              label: "Rechtes Schulterblatt",
            },
            {
              id: "ohr-links",
              x: 38,
              y: 7,
              radius: 3,
              label: "Linkes Ohr (seitlich)",
            },
            {
              id: "ellenbogen-rechts",
              x: 62,
              y: 40,
              radius: 3,
              label: "Rechter Ellenbogen",
            },
          ],
        },
      },
    },

    // Step 2.7 — Matrix: Risikosynthese
    {
      stepId: "ce02-petrov-beob-07-risikosynthese",
      phase: 2,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Dekubitusprophylaxe 2017/2024",
        "KRINKO 2015",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "IDDSI 2019",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-beob-risikoeinordnung",
      tag: "pflege",
      contentC1: {
        title: "Risikoeinordnung",
        body: "Du hast beobachtet. Jetzt ordnest du: Welche Risiken sind bei Herrn Petrov hoch, mittel, niedrig — und welche musst du sofort, diese Schicht oder langfristig adressieren?",
        glossarBegriffe: [
          "Aspiration",
          "Pneumonie",
          "Dekubitus",
          "CAUTI",
          "Kontraktur",
        ],
      },
      contentB1: {
        title: "Welche Risiken hat Herr Petrov?",
        body: "Du ordnest die Risiken von Herrn Petrov. Was ist gefährlich?",
        glossarBegriffe: ["Aspiration", "Pneumonie", "Dekubitus", "Katheter"],
      },
      question: {
        fragetext:
          "Ordne die Risiken von Herrn Petrov nach Risikoart und Dringlichkeit in die Matrix ein.",
        matrix: {
          instruction:
            "Ordne jedes Risiko dem richtigen Quadranten zu: Priorität (Hoch/Mittel) × Zeitraum (Sofort/Diese Schicht).",
          axisX: {
            label: "Priorität",
            low: "Mittel",
            high: "Hoch (akut)",
          },
          axisY: {
            label: "Zeitraum",
            low: "Langfristig planen",
            high: "Sofort / Diese Schicht",
          },
          items: [
            {
              id: "aspiration",
              text: "Aspiration (Verschlucken in die Lunge)",
              correctQuadrant: 1,
            },
            {
              id: "pneumonie",
              text: "Pneumonie (Lungenentzündung durch Atelektasen)",
              correctQuadrant: 1,
            },
            {
              id: "katheter-hwi",
              text: "Katheter-Harnwegsinfekt (CAUTI)",
              correctQuadrant: 2,
            },
            {
              id: "dekubitus",
              text: "Dekubitus (Druckgeschwür)",
              correctQuadrant: 2,
            },
            {
              id: "kontraktur",
              text: "Kontraktur (Gelenkversteifung durch Immobilität)",
              correctQuadrant: 3,
            },
            {
              id: "sturz",
              text: "Sturz (noch bettlägerig, aber Mobilisation geplant)",
              correctQuadrant: 3,
            },
          ],
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 38,
};
