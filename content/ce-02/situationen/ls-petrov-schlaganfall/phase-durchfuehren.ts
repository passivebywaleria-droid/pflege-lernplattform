// CE-02 Situation Petrov — Phase 4: Durchführen
// Steps: 9 (inkl. 2 Komplikationen) · Bloom: B4-B5 · Zeit: ~40-60 Min
// Quelle: phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-petrov-durchfuehren",
  phase: "durchfuehren",
  titel: "Durchführen — Morgenpflege & Komplikationen",
  titelB1: "Die Pflege durchführen",
  kontext:
    "07:55 Uhr. Du hast alles vorbereitet: frische Bettwäsche, Waschschüssel, angedickte Flüssigkeit, Einmalhandschuhe. Das Zimmer ist auf 22°C aufgeheizt, die Tür ist zu. Herr Petrov schaut dich an. Er hat sein Foto von Natalya in die linke Hand genommen.\n\n\"Bitte... langsam.\"\n\nDas ist sein Wunsch. Du nimmst ihn als Leitprinzip.",
  kontextB1:
    "Es ist 07:55 Uhr. Du hast alles vorbereitet. Du hast: frische Bett-Wäsche, eine Wasch-Schüssel, angedickte Flüssigkeit, Einmal-Handschuhe. Das Zimmer ist warm: 22 Grad. Die Tür ist zu. Herr Petrov schaut dich an. Er hält das Foto von seiner Frau Natalya in der linken Hand. Er sagt: \"Bitte... langsam.\" Das ist sein Wunsch. Du machst alles langsam und sagst immer vorher, was du tust.",
  kernSteps: [
    // Step 4.1 — Text: Vorbereitung nach Bobath (stepbystep)
    {
      stepId: "ce02-petrov-dur-01-vorbereitung-bobath-lagerung",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "LasthandhabV §2",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-vorbereitung",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Vier Schritte vor der Körperpflege",
        body: "Bevor du anfängst, 4 Vorbereitungsschritte nach Bobath-Prinzip:\n\n1) **Bett auf Arbeitshöhe** bringen — Rückenprävention (LasthandhabV §2). Du arbeitest sicher, wenn du nicht gebückt bist.\n2) **Herrn Petrov über alles informieren** was als nächstes kommt — jeder Handgriff wird angekündigt. \"Ich drehe jetzt Ihren Arm leicht nach außen.\" Nie überraschend anfassen.\n3) **Betroffene Seite (rechts) als gleichwertige Seite einbeziehen** — nicht übergehen, nicht kompensieren. Bobath: Die betroffene Seite ist nicht weg — sie braucht gezielte Angebote.\n4) **Ressourcen aktivieren:** Was kann er selbst? Linke Hand am Waschvorgang beteiligen. Grundsatz Bobath: Bewegungsangebote machen, nicht übernehmen. (Bobath B. 1990)",
        glossarBegriffe: ["Bobath-Konzept", "betroffene Seite", "Ressourcen"],
      },
      contentB1: {
        title: "Vor der Körper-Pflege — 4 Schritte",
        body: "Schritt 1: Stelle das Bett auf die richtige Höhe. Das schützt deinen Rücken.\nSchritt 2: Sage Herrn Petrov immer vorher, was du machst. Zum Beispiel: \"Jetzt drehe ich Sie auf die Seite.\"\nSchritt 3: Die rechte Seite ist die betroffene Seite. Sie ist genauso wichtig. Übergehe sie nicht. Beziehe sie mit ein.\nSchritt 4: Was kann Herr Petrov selbst tun? Seine linke Hand ist aktiv. Lass ihn mitmachen. Das ist das Bobath-Prinzip: Bewegung anbieten — nicht übernehmen.",
        glossarBegriffe: ["Bobath-Konzept"],
      },
    },

    // Step 4.2 — Sequencing: Ganzkörperpflege nach Bobath
    {
      stepId: "ce02-petrov-dur-02-ganzkoerperpflege-sequencing",
      phase: 4,
      stepType: "sequencing",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1990 Adult Hemiplegia",
        "Fröhlich A. 1998 Basale Stimulation",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-dur-ganzkoerperpflege",
      tag: "pflege",
      contentC1: {
        title: "Ganzkörperpflege — richtige Reihenfolge",
        body: "Bringe die Schritte der Ganzkörperpflege beim halbseitig betroffenen Patienten in die richtige Reihenfolge nach Bobath. Merkhilfe: \"Ausziehen: Gesunde zuerst — Anziehen: Betroffene zuerst.\"",
        glossarBegriffe: [
          "Bobath-Konzept",
          "betroffene Seite",
          "Körperpflege",
          "Seitenlage",
        ],
      },
      contentB1: {
        title: "Die Reihenfolge der Körper-Pflege",
        body: "Bringe die Schritte in die richtige Reihenfolge. Merkhilfe: \"Ausziehen: Gesunde zuerst. Anziehen: Betroffene zuerst.\"",
        glossarBegriffe: ["Bobath-Konzept", "Körperpflege"],
      },
      question: {
        fragetext:
          "Bringe die Schritte der Ganzkörperpflege in die richtige Reihenfolge nach Bobath.",
        sequencing: {
          instruction: "Ordne die Schritte in der richtigen Reihenfolge.",
          items: [
            {
              id: "gesicht",
              label:
                "Gesicht und Hals waschen — Herr Petrov beginnt selbst mit linker Hand",
            },
            {
              id: "oberkörper",
              label:
                "Oberkörper: gesunde Seite zuerst entkleiden, betroffene Seite zuerst ankleiden",
            },
            {
              id: "ruecken",
              label: "Rücken: Seitlage nach Bobath-Prinzip (auf betroffene Seite)",
            },
            {
              id: "intimpflege",
              label: "Intimpflege: Anleitung zur Eigenpflege soweit möglich",
            },
            {
              id: "beine",
              label:
                "Beine: gesunde Seite zuerst waschen, betroffene Seite aktiv-assistiv einbeziehen",
            },
            {
              id: "fersen",
              label:
                "Fersen und Prädilektionsstellen inspizieren und eincremen",
            },
          ],
        },
      },
    },

    // Step 4.3 — Diagram: Drehen und Seitenlage (Ablaufdiagramm)
    {
      stepId: "ce02-petrov-dur-03-drehen-seitenlage",
      phase: 4,
      stepType: "diagram",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bobath B. 1948/1990",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-drehen",
      tag: "anatomie",
      bildkategorie: "prozedur",
      imageAlt:
        "Ablaufdiagramm 5 Schritte für das Drehen eines Schlaganfall-Patienten auf die betroffene Seite nach Bobath",
      bildhinweis:
        "Step-by-step diagram showing 5 steps of turning a hemiplegic patient to their affected side using Bobath technique, annotated arrows, clear numbered panels, medical illustration style, absolutely no text no labels no words",
      contentC1: {
        title: "Drehen auf die betroffene Seite — 5 Schritte",
        body: "Ablauf: Drehen von Herrn Petrov auf die betroffene Seite (rechts) nach Bobath-Prinzip.\n\nMerkhilfe: \"Schulterblatt und Beckenkamm — nicht Achsel und Taille.\"",
        glossarBegriffe: [
          "Bobath-Konzept",
          "Schulterblatt",
          "Beckenkamm",
          "Seitenlage",
        ],
      },
      contentB1: {
        title: "Drehen auf die Seite — 5 Schritte",
        body: "Du drehst Herrn Petrov auf die Seite. 5 Schritte:\n1. Linkes Bein anstellen: Der Fuß ist auf der Matratze, das Knie zeigt nach oben (90°).\n2. Linken Arm über die Brust legen.\n3. Deine rechte Hand liegt an seiner Schulter-Blatt (nicht an der Schulter!). Deine linke Hand liegt an seinem Becken-Kamm.\n4. Drehe ihn langsam und gleichmäßig.\n5. Korrekte Seiten-Lage: Schulter nach vorne ziehen. Arm gestreckt auf Kissen. Bein ein wenig gebeugt.\nMerkhilfe: \"Schulter-Blatt und Becken-Kamm — nicht Achsel und Taille.\"",
        glossarBegriffe: ["Seitenlage", "Schulterblatt", "Beckenkamm"],
      },
      question: {
        fragetext:
          "Ordne die 5 Schritte des Drehens in die richtige Reihenfolge.",
        diagram: {
          diagramType: "flowchart",
          instruction: "Ablauf: Drehen auf die betroffene Seite nach Bobath.",
          nodes: [
            {
              id: "s1",
              label: "Linkes Bein anstellen (90°, Fuß auf Matratze)",
              highlight: true,
            },
            { id: "s2", label: "Linken Arm quer über die Brust" },
            {
              id: "s3",
              label: "Hand an Schulterblatt (!) und Beckenkamm",
            },
            { id: "s4", label: "Drehen in gleichmäßigem Zug" },
            {
              id: "s5",
              label:
                "Seitenlage: Schulter nach vorne, Arm auf Kissen, Bein leicht gebeugt",
              highlight: true,
            },
          ],
          edges: [
            { from: "s1", to: "s2" },
            { from: "s2", to: "s3" },
            { from: "s3", to: "s4" },
            { from: "s4", to: "s5" },
          ],
          interactive: false,
        },
      },
    },

    // Step 4.4 — Matching: Atemübungen + Pneumonieprophylaxe
    {
      stepId: "ce02-petrov-dur-04-atemuebungen",
      phase: 4,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "KRINKO/RKI 2013 Nosokomiale Pneumonie",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "DGG 2022 S1-Leitlinie Frühmobilisation",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-petrov-dur-pneumonieprophylaxe",
      tag: "krankheitslehre",
      contentC1: {
        title: "Pneumonieprophylaxe — Maßnahmen und Wirkung",
        body: "Ordne die Maßnahmen der Pneumonieprophylaxe ihrer jeweiligen Wirkung zu.",
        glossarBegriffe: [
          "Atelektase",
          "Lippenbremse",
          "Frühmobilisation",
          "Oberkörperhochlagerung",
        ],
      },
      contentB1: {
        title: "Pneumonie-Prophylaxe — Was wirkt wie?",
        body: "Ordne jede Maßnahme ihrer Wirkung zu.",
        glossarBegriffe: ["Pneumonie", "Atelektase", "Mobilisation"],
      },
      question: {
        fragetext:
          "Ordne die Pneumonieprophylaxe-Maßnahmen ihrer Wirkung zu.",
        matchingPairs: [
          {
            left: "Oberkörperhochlagerung 30°",
            right:
              "Schleim kann leichter abfließen, Zwerchfell fällt nach unten",
          },
          {
            left: "Tiefatemübungen, Lippenbremse",
            right:
              "Alveolen bleiben offen, Atelektasen werden verhindert",
          },
          {
            left: "Abhusten auf Anleitung",
            right: "Sekret wird mobilisiert und abtransportiert",
          },
          {
            left: "Frühmobilisation — Bettkante",
            right:
              "Vertikale Körperhaltung verbessert Atemvolumen um bis zu 30%",
          },
        ],
      },
    },

    // Step 4.5 — Text: Essen anreichen (checklist)
    {
      stepId: "ce02-petrov-dur-05-essen-anreichen",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "IDDSI 2019 International Dysphagia Diet Standardisation Initiative",
        "DGG/DGN 2020 Neurogene Dysphagie",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-dur-essen-anreichen",
      tag: "pflege",
      displayFormat: "checklist",
      contentC1: {
        title: "Frühstück anreichen — 6 Punkte",
        body: "Checkliste für das Anreichen bei Herrn Petrov (Dysphagie Grad 2, IDDSI Level 2):\n\n☐ Oberkörper auf 90° aufgerichtet (Aspirationsschutz, IDDSI 2019)\n☐ Angedickte Flüssigkeit Level 2 bereitgestellt — kein normales Wasser\n☐ Löffel von der gesunden Seite (links) anreichen — Schluckreiz stimulieren\n☐ Kleine Portionen: max. 5 ml pro Löffel\n☐ Ruhige Atmosphäre: kein Radio, kein Gesprächsdruck\n☐ Beobachten: Hustet er? Feuchte Stimme? Verschluckt er sich? → Wenn ja: sofort Stop.\n\n(IDDSI 2019; DGG/DGN 2020 Neurogene Dysphagie)",
        glossarBegriffe: ["IDDSI", "Dysphagie", "Aspiration", "Schluckreiz"],
      },
      contentB1: {
        title: "Frühstück anreichen — 6 Punkte",
        body: "Herr Petrov isst Frühstück. Du reichst ihm das Essen an. 6 Punkte:\nOber-Körper auf 90° aufgerichtet — das schützt vor Verschlucken.\nAngedickte Flüssigkeit Level 2 bereitstellen — kein normales Wasser.\nLöffel von links anreichen — das ist seine gesunde Seite.\nKleine Portionen: max. 5 ml pro Löffel.\nRuhige Atmosphäre: Kein Radio. Kein Gesprächs-Druck.\nBeobachten: Hustet er? Klingt die Stimme feucht? Verschluckt er sich? Wenn ja: Sofort aufhören.",
        glossarBegriffe: ["IDDSI", "Dysphagie", "Aspiration"],
      },
    },

    // KOMPLIKATION 1 — Step 4.6: Verschlucken (großes Branching)
    {
      stepId: "ce02-petrov-dur-06-komp1-verschlucken",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: [
        "DGG/DGN 2020 Neurogene Dysphagie",
        "IDDSI 2019",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-petrov-dur-aspiration-akut",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 1 — Herr Petrov verschluckt sich",
        body: "Während des Frühstücks: Herr Petrov hustet plötzlich heftig. Er greift mit der linken Hand zur Kehle.\n\n*(hustet heftig, greift mit linker Hand zur Kehle)*\n\nWas tust du als erstes?",
        glossarBegriffe: ["Aspiration", "Aspirationspneumonie", "Obstruktion"],
      },
      contentB1: {
        title: "Komplikation 1 — Herr Petrov hustet stark",
        body: "Beim Frühstück: Herr Petrov hustet stark. Er greift mit der linken Hand an den Hals. Was tust du als erstes?",
        glossarBegriffe: ["Aspiration", "Husten"],
      },
      question: {
        fragetext: "Herr Petrov hustet stark beim Trinken. Was tust du als erstes?",
        branchingOptions: [
          {
            text: "Ich schlage ihm fest auf den Rücken, damit er frei bekommt.",
            isCorrect: false,
            feedback:
              "Fehler! Rückenschlag ist nur bei vollständiger Atemwegsobstruktion (Patient kann gar nicht mehr atmen/sprechen) indiziert. Bei einem Aspirationsereignis (Verschlucken, Husten) kann ein Rückenschlag den Bolus tiefer in die Atemwege treiben. Die richtige Reaktion ist: Anreichen stoppen, aufrichten, Husten fördern, beobachten.",
            feedbackB1:
              "Falsch. Nicht auf den Rücken schlagen. Das kann das Essen tiefer drücken. Das machst du nur, wenn er sich gar keine Luft mehr kriegt (= vollständige Obstruktion). Hier hustet er — der Körper schützt sich selbst.",
          },
          {
            text: "Ich stoppe das Anreichen sofort, fordere Herrn Petrov auf zu husten wenn er kann, setze ihn auf 90° auf, beobachte Atemgeräusch und Sättigung.",
            isCorrect: true,
            feedback:
              "Richtig vorgegangen. 5 Maßnahmen bei Aspirationsereignis: 1) Sofort Stop — kein weiteres Anreichen. 2) Husten fördern — aktiver Schutzmechanismus, der Aspirat entfernt. 3) Aufrichten 90° — Schwerkraft unterstützt Selbstreinigung der Atemwege. 4) Atemgeräusch beurteilen: klar = gut, gurgelnd/feucht = stille Aspiration. 5) Sattelpuls/SpO2 beobachten wenn Pulsox verfügbar. Dann: Befund dokumentieren + Schlucktherapeutin informieren. (DGG/DGN 2020)",
            feedbackB1:
              "Richtig. Das sind die richtigen Schritte: Stopp. Husten anregen. Aufrichten. Beobachten. Und danach dokumentieren und die Schluck-Therapeutin informieren.",
          },
          {
            text: "Ich rufe sofort den Arzt — das ist ein Notfall.",
            isCorrect: false,
            feedback:
              "Zu früh. Erst die Situation stabilisieren, dann bewerten ob ärztliche Intervention nötig ist. Wenn du sofort den Arzt rufst ohne vorher zu stabilisieren, ist Herrn Petrov in diesen Minuten niemand zur Seite — und du kannst dem Arzt keinen klaren Befund liefern. Erst stabilisieren → dann beurteilen → dann ggf. Arzt informieren mit SBAR.",
            feedbackB1:
              "Zu früh für den Arzt. Erst: Stopp, Aufrichten, Beobachten. Wenn es danach nicht besser wird — dann Arzt rufen mit klarem Befund.",
          },
        ],
      },
    },

    // Step 4.7 — Timer: Nachbeobachtungsprotokoll
    {
      stepId: "ce02-petrov-dur-07-komp1-nachbeobachtung",
      phase: 4,
      stepType: "timer",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "DGG/DGN 2020 Neurogene Dysphagie",
        "KRINKO/RKI 2013 Nosokomiale Pneumonie",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-dur-nachbeobachtung",
      tag: "krankheitslehre",
      contentC1: {
        title: "3-Minuten-Beobachtungsprotokoll",
        body: "Nach dem Aspirationsereignis beobachtest du strukturiert — 3 Minuten, 6 Punkte. Tick ab was du beobachtet hast:",
        glossarBegriffe: [
          "Atemfrequenz",
          "Sauerstoffsättigung",
          "Pulsoximeter",
        ],
      },
      contentB1: {
        title: "Jetzt beobachtest du 3 Minuten lang",
        body: "Nach dem Verschlucken beobachtest du 3 Minuten. 6 Punkte:",
        glossarBegriffe: ["Atemfrequenz", "Sauerstoffsättigung"],
      },
      question: {
        fragetext: "Beobachte 3 Minuten strukturiert — tick ab was du prüfst.",
        timeLimitSeconds: 180,
        timerVariant: "standard",
        timerQuestions: [
          {
            question: "Atemfrequenz jetzt: zähle 15 Sekunden × 4.",
            options: ["12-18/Min (normal)", ">18/Min (erhöht — beachten)", "<12/Min (erniedrigt — beachten)"],
            correctIndex: 0,
          },
          {
            question:
              "Atemgeräusch: klingt die Atmung klar oder feucht-rasselnd?",
            options: [
              "Klar — kein Hinweis auf Aspiration in den Bronchien",
              "Feucht/gurgelnd — mögliche stille Aspiration",
            ],
            correctIndex: 0,
          },
          {
            question: "Sauerstoffsättigung (wenn Pulsox verfügbar)?",
            options: [
              "≥ 95% — kein akuter Handlungsbedarf",
              "< 95% — sofort Arzt informieren",
            ],
            correctIndex: 0,
          },
          {
            question:
              "Wie geht es Herrn Petrov nach 1 Minute — ruhiger oder weiter Husten?",
            options: [
              "Ruhiger, kein weiterer Husten",
              "Hustet weiter — Befund dokumentieren, Arzt informieren",
            ],
            correctIndex: 0,
          },
          {
            question: "Klingt die Stimme noch feucht? Bitte ihn, etwas zu sagen.",
            options: [
              "Stimme klar — kein Hinweis auf Flüssigkeit in den Stimmlippen",
              "Feuchte Stimme — mögliche residuelle Aspiration",
            ],
            correctIndex: 0,
          },
          {
            question: "Entscheidung: Was jetzt?",
            options: [
              "Weiter mit angepasster Konsistenz (Level 3 prüfen) + Schlucktherapeutin informieren",
              "Orales Essen für heute stoppen + Arzt informieren",
            ],
            correctIndex: 0,
          },
        ],
      },
    },

    // KOMPLIKATION 2 — Step 4.8: Natalya mit normalem Tee (ChatSim)
    {
      stepId: "ce02-petrov-dur-08-komp2-natalya",
      phase: 4,
      stepType: "chatSim",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "IDDSI 2019",
        "DGG/DGN 2020 Neurogene Dysphagie",
        "ICN 2021 Code of Ethics",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-dur-angehoerige-beratung",
      tag: "pflege",
      contentC1: {
        title: "KOMPLIKATION 2 — Ehefrau Natalya möchte normalen Tee geben",
        body: "09:00 Uhr. Natalya betritt das Zimmer mit einer Thermoskanne. Sie lächelt. Sie sagt:\n\n\"Ich habe Tee mitgebracht, normalen — er trinkt immer ohne Zucker. Darf ich ihm geben?\"\n\nSimuliertes Beratungsgespräch: Wähle bei jedem Schritt die beste Antwort.",
        glossarBegriffe: ["Angehörigenberatung", "Dysphagie", "IDDSI"],
      },
      contentB1: {
        title: "Komplikation 2 — Natalya kommt mit Tee",
        body: "09:00 Uhr. Natalya kommt ins Zimmer. Sie hat eine Thermos-Kanne dabei. Sie lächelt. Sie sagt: \"Ich habe Tee mitgebracht — normalen. Er trinkt immer ohne Zucker. Darf ich ihm geben?\" Du führst ein Gespräch mit ihr.",
        glossarBegriffe: ["Angehörigenberatung", "Dysphagie"],
      },
      question: {
        fragetext:
          "Simuliertes Beratungsgespräch mit Natalya — wähle bei jedem Schritt die beste Antwort.",
        chatSim: {
          patientName: "Natalya (Ehefrau)",
          situation:
            "Natalya betritt das Zimmer mit einer Thermoskanne und möchte ihrem Mann normalen Tee geben. Sie weiß nichts über seine Schluckstörung. Du musst sie informieren und einbeziehen.",
          situationB1:
            "Natalya kommt mit Tee. Sie weiß nicht, dass ihr Mann keine dünnen Flüssigkeiten trinken darf. Du erklärst es ihr.",
          systemPrompt:
            "Du spielst Natalya, die liebende Ehefrau von Viktor Petrov. Du bist besorgt und willst helfen. Du wirst kooperativ wenn man dir freundlich und klar erklärt warum normaler Tee gefährlich ist. Du reagierst positiv auf Einbeziehung — du möchtest mithelfen, nicht ausgeschlossen werden. Spreche auf Deutsch, einfach und emotional.",
          maxTurns: 4,
          evaluationCriteria: [
            "Natalya freundlich begrüßt (nicht abgewiesen)",
            "Dysphagie in einfacher Sprache erklärt (ohne Fachbegriffe oder mit Erklärung)",
            "Konkreter Grund für die Gefahr genannt (Lungenaspiration)",
            "Alternative angeboten (angedickte Flüssigkeit zeigen/erklären)",
            "Natalya aktiv einbezogen (sie darf anreichen mit Anleitung)",
          ],
        },
      },
    },

    // Step 4.9 — Dialog: Mobilisation Bettkante (4 Phasen)
    {
      stepId: "ce02-petrov-dur-09-mobilisation-bettkante",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DGG 2022 S1-Leitlinie Frühmobilisation",
        "Bobath B. 1948/1990",
        "DNQP Mobilität 2020",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-petrov-dur-mobilisation",
      tag: "pflege",
      contentC1: {
        title: "Mobilisation: Bettkante",
        body: "Du möchtest Herrn Petrov an die Bettkante bringen. Das ist der wichtigste Mobilisationsschritt des Tages — für die Atmung, für die Lage, für das Selbstgefühl.",
        glossarBegriffe: [
          "Frühmobilisation",
          "Bettkante",
          "Orthostase",
          "Bobath-Konzept",
        ],
      },
      contentB1: {
        title: "An die Bett-Kante",
        body: "Du möchtest Herrn Petrov an die Bett-Kante bringen. Das ist wichtig für die Atmung und für den Arm.",
        glossarBegriffe: ["Frühmobilisation", "Bettkante"],
      },
      question: {
        fragetext:
          "Wähle bei jeder Phase die beste Handlung.",
        patientName: "Herr Petrov",
        dialogPhases: [
          {
            context:
              "Du möchtest Herrn Petrov ankündigen, dass ihr jetzt an die Bettkante geht. Was sagst du?",
            contextB1:
              "Du willst Herrn Petrov erklären, was jetzt kommt. Was sagst du?",
            speaker: "Du",
            options: [
              {
                text: "\"Herr Petrov, wir versuchen jetzt, an die Bettkante zu kommen. Das ist wichtig für die Atmung und für Ihren Arm. Wenn es zu viel wird — zeigen Sie mir das.\"",
                textB1:
                  "\"Herr Petrov, wir gehen jetzt an die Bett-Kante. Das ist gut für die Lunge und den Arm. Wenn es zu viel wird — zeigen Sie mir das.\"",
                patientResponse:
                  "Herr Petrov nickt. Er schaut auf seine Beine.",
                patientResponseB1: "Herr Petrov nickt. Er schaut auf die Beine.",
                score: 3,
                feedback:
                  "Richtig: Ankündigen was kommt, Begründung liefern (Atmung + Arm), Kontrollmöglichkeit geben. Drei Elemente in einem Satz.",
                feedbackB1:
                  "Sehr gut. Du erklärst was kommt, warum, und gibst ihm Kontrolle.",
              },
              {
                text: "\"Wir heben Sie jetzt mal kurz an die Kante — kein Problem.\"",
                textB1:
                  "\"Wir heben Sie kurz an die Kante. Kein Problem.\"",
                patientResponse:
                  "Herr Petrov schaut unsicher. Er greift mit der linken Hand an die Bettkante.",
                patientResponseB1:
                  "Herr Petrov schaut unsicher. Er greift an die Kante.",
                score: 0,
                feedback:
                  "\"Heben\" ist falsch: Bobath bedeutet Bewegungsangebot machen, nicht übernehmen/heben. \"Kein Problem\" minimiert seine Anstrengung — für ihn ist es sehr anstrengend. Kein Grund genannt warum es wichtig ist.",
                feedbackB1:
                  "\"Heben\" ist falsch. Nach Bobath: Bewegung anbieten, nicht übernehmen. Außerdem: Sage warum es wichtig ist.",
              },
              {
                text: "\"Ich frage schnell Frau Wegner ob wir das machen sollen.\"",
                textB1:
                  "\"Ich frage erst Frau Wegner.\"",
                patientResponse:
                  "Herr Petrov schaut zur Decke.",
                patientResponseB1: "Herr Petrov wartet.",
                score: 1,
                feedback:
                  "Nicht nötig. Mobilisation zur Bettkante ist ein geplanter Teil der Frühschicht — du hast bereits die Priorisierung erledigt (Phase 3). Frau Wegner ist erreichbar, aber diese Maßnahme ist in deiner Kompetenz.",
                feedbackB1:
                  "Nicht nötig. Mobilisation war im Plan. Du kannst das allein entscheiden.",
              },
            ],
          },
          {
            context:
              "Du willst Herrn Petrov von der Rückenlage in die Sitzposition an der Bettkante bringen. Welches Vorgehen ist Bobath-gerecht?",
            contextB1:
              "Wie setzt du Herrn Petrov auf? Welcher Weg ist richtig?",
            speaker: "Du",
            options: [
              {
                text: "Drehen zur betroffenen Seite (Bobath), dann Beine über die Kante und mit linker Hand abstützen lassen — langsam, kein Zug am rechten Arm.",
                textB1:
                  "Drehen auf die Seite (Bobath), Beine über die Kante, linker Arm stützt — langsam, kein Zug am rechten Arm.",
                patientResponse:
                  "Herr Petrov dreht sich mit. Es dauert. Nach 2 Minuten sitzt er an der Kante.",
                patientResponseB1:
                  "Herr Petrov dreht sich mit. Langsam. Er sitzt an der Kante.",
                score: 3,
                feedback:
                  "Korrekt nach Bobath. Drehen über die betroffene Seite: Der Patient kann mitarbeiten, gesunde Seite übernimmt nicht. Kein Zug am rechten Arm: Schultergelenk eines hemiparetischen Patienten ist luxationsgefährdet — das ist ein Schmerz- und Verletzungsrisiko.",
                feedbackB1:
                  "Richtig nach Bobath. Drehen — nicht heben. Kein Zug am rechten Arm — das ist wichtig: Der Schulter-Gelenk kann verletzt werden.",
              },
              {
                text: "Ich hebe Herrn Petrov unter den Achseln auf — geht schneller.",
                textB1:
                  "Ich hebe ihn unter den Achseln hoch — geht schneller.",
                patientResponse:
                  "Herr Petrov zieht scharf die Luft ein.",
                patientResponseB1: "Herr Petrov zieht scharf die Luft ein.",
                score: 0,
                feedback:
                  "Gefährlich. Heben unter den Achseln bei Hemiparese: Subluxationsgefahr des Schultergelenks rechts (der betroffenen Seite). Das kann massive Schmerzen und dauerhafte Schäden verursachen. Außerdem: Bobath-Prinzip = Bewegungsangebot, nicht Übernehmen.",
                feedbackB1:
                  "Sehr gefährlich. Bei Hemiparese: Das Schulter-Gelenk kann herausspringen (= Subluxation). Das verursacht starke Schmerzen. Immer nach Bobath drehen.",
              },
              {
                text: "Ich ziehe ihn an beiden Händen in die Sitzposition.",
                textB1:
                  "Ich ziehe ihn an beiden Händen hoch.",
                patientResponse:
                  "Herr Petrov winkt mit der linken Hand — Stopp-Geste.",
                patientResponseB1:
                  "Herr Petrov macht eine Stopp-Geste mit der linken Hand.",
                score: 0,
                feedback:
                  "Falsch und gefährlich. Zug an beiden Händen: Rechter Arm hat keinen Muskeltonus — kein gezielter Griff möglich, Zug führt zu Überstreckung des Ellenbogen- und Schultergelenks. Herr Petrov selbst reagiert richtig: Stopp-Signal.",
                feedbackB1:
                  "Falsch. Zug am rechten Arm ist gefährlich. Der Arm hat keine Kraft — er kann beim Zug verletzt werden.",
              },
            ],
          },
          {
            context:
              "Herr Petrov sitzt an der Bettkante. Seine Beine hängen herunter. Er hält mit der linken Hand die Kante. Nach 8 Minuten zeigt er den linken Daumen hoch. Du beurteilst: Was jetzt?",
            contextB1:
              "Herr Petrov sitzt 8 Minuten an der Bett-Kante. Er zeigt den Daumen hoch. Was machst du jetzt?",
            speaker: "Du",
            options: [
              {
                text: "\"Super! Noch 5 Minuten — Sie schaffen das.\" (Blickkontakt, Hand kurz an die Schulter)",
                textB1:
                  "\"Noch 5 Minuten — das schaffen Sie!\" (Augenkontakt, Hand an Schulter)",
                patientResponse:
                  "Herr Petrov nickt. Er sitzt weiter.",
                patientResponseB1:
                  "Herr Petrov nickt. Er sitzt weiter.",
                score: 3,
                feedback:
                  "Richtig. Daumen hoch = er ist noch okay. 5 Minuten mehr sind realistisch. Positive Verstärkung + Kontakt an der Schulter = Sicherheit und Ermutigung.",
                feedbackB1:
                  "Gut. Er signalisiert: Es geht. Dann 5 Minuten mehr ist richtig.",
              },
              {
                text: "Sofort zurück ins Bett — 8 Minuten ist genug für Tag 1.",
                textB1:
                  "Zurück ins Bett — 8 Minuten reichen.",
                patientResponse:
                  "Herr Petrov schüttelt den Kopf. Er sitzt weiter.",
                patientResponseB1:
                  "Herr Petrov schüttelt den Kopf.",
                score: 1,
                feedback:
                  "Nicht falsch — 8 Minuten ist ein gutes Ergebnis. Aber: Herr Petrov zeigt Daumen hoch — er will noch. Sein Wunsch zählt. Wenn Schwindel oder Schwäche auftreten würde er das signalisieren. Lass ihn entscheiden wenn es sicher ist.",
                feedbackB1:
                  "Nicht falsch. Aber: Er zeigt Daumen hoch — er will weiter. Lass ihn bestimmen wenn es sicher ist.",
              },
              {
                text: "Ich lasse ihn allein — er sitzt ja gut.",
                textB1:
                  "Ich gehe kurz — er sitzt ja gut.",
                patientResponse:
                  "Herr Petrov schaut dir nach.",
                patientResponseB1: "Herr Petrov schaut dir nach.",
                score: 0,
                feedback:
                  "Gefährlich. Sturzgefahr! Ein hemiparetischer Patient an der Bettkante ohne Begleitung: Wenn er das Gleichgewicht verliert oder orthostatische Dysregulation einsetzt, kann er ohne Gegenwehr fallen. Mobilisation = immer begleitet, nie allein lassen.",
                feedbackB1:
                  "Gefährlich! Herr Petrov darf nicht alleine an der Kante sitzen. Sturzgefahr. Immer bei ihm bleiben.",
              },
            ],
          },
          {
            context:
              "Herr Petrov hat insgesamt 13 Minuten an der Bettkante gesessen. Er signalisiert: genug. Du bringst ihn zurück in die Rückenlage.",
            contextB1:
              "Herr Petrov hat 13 Minuten gesessen. Er will zurück. Du legst ihn wieder hin.",
            speaker: "Du",
            options: [
              {
                text: "\"Sehr gut, Herr Petrov. 13 Minuten — das ist mehr als das Ziel. Ich lege Sie jetzt wieder hin und lagere Sie nach Bobath.\" (Dokumentation im Kopf: Ziel übertroffen, Auskultation danach prüfen)",
                textB1:
                  "\"13 Minuten — sehr gut! Ich lege Sie jetzt hin und lagere Sie.\" (Notiz: Ziel übertroffen, danach Lunge prüfen)",
                patientResponse:
                  "Herr Petrov nickt. Er lehnt sich leicht zu dir.",
                patientResponseB1: "Herr Petrov nickt.",
                score: 3,
                feedback:
                  "Perfekt. Lob konkret (13 Minuten, Zielübertreffen), nächsten Schritt ankündigen (Hinlegen + Bobath-Lagerung), Evaluation im Kopf (Auskultation nach Mobilisation prüfen — Atemvolumen hat sich verändert). Das ist professionelle Pflege.",
                feedbackB1:
                  "Sehr gut. Lob konkret. Nächsten Schritt ankündigen. Danach Lunge prüfen.",
              },
              {
                text: "\"Super! Können wir das morgen nochmal machen?\"",
                textB1:
                  "\"Gut! Morgen machen wir das nochmal?\"",
                patientResponse:
                  "Herr Petrov nickt, schaut zur Decke.",
                patientResponseB1: "Herr Petrov nickt.",
                score: 1,
                feedback:
                  "Gut gemeint — aber du springst zu schnell in die Zukunft. Morgen ist Spätdienst, andere Kollegen. Und: Du hast das Hinlegen + die Bobath-Lagerung noch nicht angekündigt. Erst Gegenwart abschließen, dann Ausblick.",
                feedbackB1:
                  "Morgen ist gut — aber erst: Jetzt hinlegen und lagern. Das haben wir noch nicht gemacht.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 55,
};
