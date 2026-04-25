// CE-02 Situation Frau Schmidt — Phase 4: Maßnahmen durchführen
// Steps: 8 · Bloom: B4–B5 · Zeit: ~35–50 Min
// Quelle: phase-durchfuehren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-durchfuehren",
  phase: "durchfuehren",
  titel: "Maßnahmen durchführen",
  titelB1: "Pflege durchführen",
  kontext:
    "Es ist 09:45 Uhr. Morgenpflege ist abgeschlossen. Frau Schmidt liegt frisch gewaschen im Bett, wirkt etwas entspannter. Du setzt dich auf den Stuhl. Du weißt: Die Ernährungsberaterin kommt am Nachmittag — dein Gespräch jetzt ist die Vorbereitung, nicht der Ersatz. Deine Aufgabe: Frau Schmidt verstehen, nicht erziehen.",
  kontextB1:
    "Es ist 09:45 Uhr. Die Morgenpflege ist fertig. Frau Schmidt liegt sauber und frisch im Bett. Sie wirkt ruhiger. Du setzt dich auf den Stuhl neben ihr Bett. Du weißt: Heute Nachmittag kommt die Ernährungs-Beraterin. Dein Gespräch jetzt ist eine Vorbereitung — kein Ersatz. Deine Aufgabe: Frau Schmidt verstehen. Nicht erziehen.",
  kernSteps: [
    // Step 4.1 — Sorting: Hautpflege Hautfalten durchführen
    {
      stepId: "ce02-schmidt-dur-01-haut-hautfalten",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie Intertrigo DDG (2022)",
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-dur-hautfalten",
      tag: "pflege",
      contentC1: {
        title: "Hautpflege der Hautfalten — korrekte Durchführung",
        body: "Frau Schmidt ist kooperativ. Führe die Hautpflege der Hautfalten korrekt durch. Bringe die Karten in die richtige Reihenfolge. Bloom 4: Handlungsplanung + Risikobewusstsein (Reihenfolge hat Konsequenzen).",
        glossarBegriffe: ["Intertrigo", "Mazerierung"],
      },
      contentB1: {
        title: "Haut-Pflege der Haut-Falten — richtige Reihenfolge",
        body: "Haut-Pflege der Haut-Falten korrekt durchführen. Bringe in die richtige Reihenfolge.",
        glossarBegriffe: ["Intertrigo"],
      },
      question: {
        fragetext:
          "Bringe die Schritte der Hautfalten-Pflege in die richtige Reihenfolge.",
        sortItems: [
          "Handschuhe anziehen, Falte vorsichtig auseinander halten",
          "Inspektion: Rötung? Feuchtigkeit? Geruch? — genau hinschauen",
          "Trocken TUPFEN mit weichem Tuch — nicht reiben (Reibung erhöht Verletzungsgefahr bei sensibilisierter Haut)",
          "Hautschutzpräparat dünn auftragen, wenn keine offene Wunde vorhanden",
          "Befund sofort notieren (was siehst du, was riechst du, was veränderst du)",
        ],
      },
    },

    // Step 4.2 — Text/analogy: Makronährstoffe erklärt
    {
      stepId: "ce02-schmidt-dur-02-makronährstoffe-erklaert",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
        "Cederholm T. et al. (2019): GLIM-Kriterien",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-dur-makronährstoffe",
      tag: "krankheitslehre",
      displayFormat: "analogy",
      contentC1: {
        title: "Makronährstoffe — Vorbereitung auf das Gespräch",
        body: "Analogie: Kohlenhydrate = Kurzzeit-Kraftstoff (schnell verfügbar, schnell verbraucht). Fette = Langzeit-Reserve (langfristige Energie, Wärmeschutz). Proteine = Baumaterial (Wundheilung, Immunabwehr, Muskeln, Albumin).\n\nWarum ist Protein für Frau Schmidt so wichtig? Albumin-Mangel (31 g/l) bedeutet: Der Körper kann keine Wunden heilen, keine Immunabwehr aufbauen und keine Ödeme verhindern. DGE-Empfehlung für Erwachsene: 0,8 g Protein pro kg Körpergewicht täglich (DGE D-A-CH 2024). Bei stationärer Erkrankung oft höher — nach ärztlicher Absprache.\n\nFertigpizza (Beispiel Frau Schmidt): ca. 6–8 g Protein pro Portion. Hüttenkäse 200 g: ca. 26 g Protein. Der Unterschied liegt nicht im Verzicht, sondern in der Auswahl.",
        fallbezug:
          "Frau Schmidt isst aktuell proteinarme Fertigprodukte. Die Analogie macht verständlich warum das trotz ausreichender Kalorien problematisch ist.",
        glossarBegriffe: ["Protein", "Albumin", "Makronährstoffe"],
      },
      contentB1: {
        title: "Makro-Nährstoffe einfach erklärt",
        body: "Analogie: Was sind Makro-Nährstoffe?\n- **Kohlenhydrate** (= Zucker und Stärke) = schnelle Energie. Zum Beispiel: Brot, Nudeln, Reis.\n- **Fette** = lang andauernde Energie. Zum Beispiel: Öl, Käse, Nüsse.\n- **Protein** (= Eiweiß) = Baumaterial für den Körper. Zum Beispiel: Fleisch, Eier, Hülsenfrüchte.\n\nFrau Schmidt braucht mehr Protein. Warum? Protein hilft: Wunden heilen, Immunsystem stärken, Ödeme (= Wasser-Einlagerungen) verhindern. Eine Fertig-Pizza hat viel Kohlenhydrate und Fett — aber wenig Protein. Empfehlung (DGE 2024): Erwachsene brauchen ca. 0,8 g Protein pro kg Körpergewicht pro Tag.",
        glossarBegriffe: ["Protein", "Albumin"],
      },
    },

    // Step 4.3 — Branching (GROSS): Ernährungsgespräch
    {
      stepId: "ce02-schmidt-dur-03-ernaehrungsgespraech-hauptbranching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "Motivational Interviewing — Miller & Rollnick (2012)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-dur-ernaehrungsgespraech",
      tag: "pflege",
      contentC1: {
        title: "Ernährungsgespräch — Hauptbranching",
        body: "Du beginnst das Gespräch mit Frau Schmidt: \"Frau Schmidt, ich würde gerne mit Ihnen über Ihre Ernährung sprechen. Nicht um zu kritisieren — sondern um zu verstehen.\"\n\nFrau Schmidt sagt: \"Salat? Ich bin doch kein Kaninchen. Aber wenn Sie sagen, was ich konkret machen soll — ich mein's ernst.\"\n\nDu wählst deinen Ansatz:",
        glossarBegriffe: ["Motivierende Gesprächsführung"],
      },
      contentB1: {
        title: "Ernährungs-Gespräch — du wählst deinen Weg",
        body: "Du sagst: \"Frau Schmidt, darf ich über das Essen sprechen? Nicht um zu kritisieren.\"\nDu sagst weiter: \"Ich möchte nur verstehen.\"\nFrau Schmidt sagt: \"Salat? Ich bin kein Kaninchen. Aber wenn Sie sagen was ich machen soll — ich mein's ernst.\"\n\nDu wählst deinen Ansatz:",
        glossarBegriffe: ["Motivierende Gesprächsführung"],
      },
      question: {
        fragetext:
          "Frau Schmidt ist offen für ein Gespräch. Wie gehst du vor?",
        branchingOptions: [
          {
            text: "\"Super, dann fangen wir mit einer Diät-Liste an. Kein Weißbrot, keine Pizza, kein Zucker — das sind die wichtigsten Punkte.\"",
            feedback:
              "Verbotslisten aktivieren Abwehr. Frau Schmidt hat jahrelange Erfahrung mit gescheiterten Diäten — das Wort \"Verbote\" löst reflexartigen Rückzug aus. Sie schaltet innerlich ab. Ernährungsumstellung braucht Biographie-Verständnis, nicht Regeln. Motivierende Gesprächsführung: Fragen vor Antworten. (Miller & Rollnick, 2012)",
            feedbackB1:
              "Verbots-Listen helfen nicht. Frau Schmidt hat schon viele Diäten versucht — und immer versagt. Sie hört innerlich auf zu zuhören. Versuche es nochmal: Frage zuerst — erkläre danach.",
            isCorrect: false,
          },
          {
            text: "\"Was essen Sie zuhause so — erzählen Sie mir mal von einem normalen Tag.\"",
            feedback:
              "Richtig. Biographie zuerst — dann Ernährungsinformation. Du öffnest das Gespräch, statt es zu füllen. Frau Schmidt erzählt: Fertigessen, Alleine-Essen, Kochen hat keine Freude mehr nach der Scheidung. Das ist die Basis für jede sinnvolle Empfehlung. (Motivierende Gesprächsführung: Miller & Rollnick, 2012)",
            feedbackB1:
              "Richtig! Du fragst zuerst. Frau Schmidt erzählt von Fertig-Essen und davon, dass Kochen keine Freude mehr macht. Das ist wichtig! Jetzt verstehst du warum — und kannst helfen.",
            isCorrect: true,
          },
          {
            text: "\"Das überlasse ich lieber der Ernährungsberaterin am Nachmittag. Ich sage ihr dann was Sie gesagt haben.\"",
            feedback:
              "Pflege ist Teil des Teams, nicht Durchlaufstation. Die erste Beziehung zum Thema entsteht jetzt — nicht nachmittags. Wenn du dich entziehst, signalisierst du: Das Thema ist nicht meine Aufgabe. Das beschädigt Vertrauen und die Beraterin startet nachmittags ohne Grundlage.",
            feedbackB1:
              "Nein! Die erste Beziehung zum Thema entsteht JETZT. Nicht am Nachmittag. Pflege ist nicht nur Weiterleiterin — du bist Teil des Teams.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.4 — Categorize: Protein-Gehalte sortieren
    {
      stepId: "ce02-schmidt-dur-04-protein-sortierung",
      phase: 4,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
        "Bundeslebensmittelschlüssel (BLS) 3.02",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-dur-protein-gehalte",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was enthält viel Protein? — Lebensmittel sortieren",
        body: "Nach Pfad B: Frau Schmidt hat erzählt. Jetzt bringst du konkrete Informationen. Sortiere die Lebensmittel nach ihrem Proteingehalt. Kein Verbot — Mengen verschieben ist die Strategie.",
        glossarBegriffe: ["Protein", "Makronährstoffe"],
      },
      contentB1: {
        title: "Was hat viel Protein? Sortiere!",
        body: "Was hat viel Protein? Sortiere die Lebensmittel.",
        glossarBegriffe: ["Protein"],
      },
      question: {
        fragetext:
          "Sortiere die Lebensmittel: Hoher Proteingehalt — Mittlerer Proteingehalt — Niedriger Proteingehalt.",
        categories: [
          { name: "Hoher Proteingehalt (≥ 15 g / Portion)" },
          { name: "Mittlerer Proteingehalt (5–15 g / Portion)" },
          { name: "Niedriger Proteingehalt (< 5 g / Portion)" },
        ],
        categoryItems: [
          {
            text: "Hähnchenbrustfilet 100 g (ca. 31 g Protein)",
            correctCategory: 0,
          },
          {
            text: "Hüttenkäse 200 g (ca. 26 g Protein)",
            correctCategory: 0,
          },
          {
            text: "Naturjoghurt 150 g (ca. 10 g Protein)",
            correctCategory: 1,
          },
          {
            text: "Ei (ca. 6 g Protein)",
            correctCategory: 1,
          },
          {
            text: "Vollkornbrot 2 Scheiben (ca. 7 g Protein)",
            correctCategory: 1,
          },
          {
            text: "Kartoffeln 150 g (ca. 3 g Protein)",
            correctCategory: 2,
          },
          {
            text: "Fertig-Pizza (ca. 6–8 g Protein pro Portion, bei hohem Kalorien-Anteil)",
            correctCategory: 2,
          },
          {
            text: "Weißbrot 2 Scheiben (ca. 4 g Protein)",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 4.5 — MC: Diabetes-Ernährung
    {
      stepId: "ce02-schmidt-dur-05-diabetes-ernaehrung",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Deutsche Diabetes Gesellschaft / DDG (2023): Praxisempfehlungen Diabetes Typ 2",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-dur-diabetes-ernaehrung",
      tag: "krankheitslehre",
      contentC1: {
        title: "Ernährungsempfehlung bei Diabetes Typ 2",
        body: "Was ist die wichtigste Ernährungsempfehlung bei Diabetes Typ 2 für Frau Schmidt?",
        glossarBegriffe: ["Glykämischer Index", "Insulinsensitivität"],
      },
      contentB1: {
        title: "Ernährungs-Empfehlung bei Diabetes Typ 2",
        body: "Was ist die wichtigste Ernährungs-Empfehlung bei Diabetes Typ 2?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was ist die wichtigste Ernährungsempfehlung bei Diabetes Typ 2 für Frau Schmidt?",
        optionen: [
          {
            text: "Keine Kohlenhydrate essen — strikte ketogene Ernährung.",
            isCorrect: false,
            explanation:
              "Keto ist bei Typ-2-Diabetes nicht generell empfohlen und nicht für alle Patienten geeignet. Bei Nierenproblemen kann Keto kontraindiziert sein. Immer mit Diabetologen besprechen — und für Frau Schmidt wäre das ein sofortiger Gesprächsabbruch. (DDG 2023)",
            explanationB1:
              "Keine Kohlenhydrate ist zu extrem und nicht für alle geeignet. Bei Frau Schmidt würde das sofort Widerstand erzeugen.",
          },
          {
            text: "Kohlenhydrate über den Tag verteilen, komplexe Kohlenhydrate bevorzugen, Süßgetränke meiden.",
            isCorrect: true,
            explanation:
              "Richtig. Gleichmäßige Kohlenhydrate = gleichmäßiger Blutzucker. Vollkorn statt Weißbrot (langsamere Resorption, niedrigerer glykämischer Index). Keine Süßgetränke (schnelle BZ-Spitzen). Das ist die DDG-Empfehlung 2023 — praktisch, umsetzbar, ohne Verbots-Charakter.",
            explanationB1:
              "Richtig! Gleichmäßige Kohlenhydrate = gleichmäßiger Blutzucker. Vollkorn statt Weißbrot. Keine Süßgetränke. Das ist umsetzbar.",
          },
          {
            text: "Fette stark reduzieren — Fette erhöhen den Blutzucker.",
            isCorrect: false,
            explanation:
              "Fette enthalten keine Glukose und erhöhen den BZ nicht direkt. Indirekt können Fette über Gewichtszunahme und Insulinresistenz wirken — aber nicht als primäre Maßnahme. Fette sind auch für Sättigung und Nährstoffaufnahme wichtig.",
            explanationB1:
              "Falsch. Fette erhöhen den Blutzucker nicht direkt. Fette sind auch wichtig für den Körper.",
          },
          {
            text: "Proteine meiden — zu viel Protein belastet die Nieren.",
            isCorrect: false,
            explanation:
              "Nein — Nierenbelastung durch Protein ist erst relevant bei fortgeschrittener diabetischer Nephropathie (GFR < 30 ml/min). Bei Frau Schmidt ist das nicht der Fall. Und: Protein ist genau das, was bei ihr fehlt (Albumin 31 g/l). Proteinrestriktion wäre kontraproduktiv.",
            explanationB1:
              "Falsch. Protein meiden wäre das Gegenteil von dem was Frau Schmidt braucht. Ihr Albumin ist zu niedrig — sie braucht mehr Protein, nicht weniger.",
          },
        ],
      },
    },

    // Step 4.6 — ChatSim: Fußbefund an Arzt melden
    {
      stepId: "ce02-schmidt-dur-06-fuss-arztmeldung",
      phase: 4,
      stepType: "chatSim",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
        "AWMF S3-Leitlinie NVL Typ-2-Diabetes (2023): Fußversorgung und Podologie",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-dur-arztmeldung",
      tag: "pflege",
      contentC1: {
        title: "Fußbefund melden — Chat-Simulation",
        body: "Du meldest den Fußbefund von Frau Schmidt dem Stationsarzt. Du tippst eine kurze Nachricht in die Simulation. Wichtig: Patientenname + Zimmer, Befund, deine Einschätzung (was darf Pflege nicht — und warum), deine Bitte (Podologen-Überweisung).",
        glossarBegriffe: ["SBAR", "Wagner-Armstrong-Klassifikation"],
      },
      contentB1: {
        title: "Fuß-Befund melden",
        body: "Du meldest den Fuß-Befund dem Stationsarzt. Was schreibst du? Wichtige Punkte: Name + Zimmer, Befund, deine Einschätzung, deine Bitte.",
        glossarBegriffe: ["Wagner-Armstrong-Klassifikation"],
      },
      question: {
        fragetext:
          "Schreibe eine kurze Nachricht an den Stationsarzt zum Fußbefund von Frau Schmidt.",
        chatSim: {
          patientName: "Frau Schmidt",
          situation:
            "Du hast bei der Fußinspektion von Frau Schmidt (Zimmer 8) trockene Haut plantar, erste Rissbildung am großen Zeh und verdickte Nägel gefunden. Keine offene Wunde. Wagner-Armstrong Kategorie 1. Du weißt: Pflege darf Nägel und Risse beim diabetischen Fußsyndrom nicht behandeln.",
          situationB1:
            "Du hast Frau Schmidts Füße geschaut (Zimmer 8). Trockene, rissige Haut. Verdickte Nägel. Keine offene Wunde. Wagner-Kategorie 1. Die Pflege darf die Nägel NICHT schneiden — das ist nur Sache des Podologen.",
          systemPrompt:
            "Du bist der Stationsarzt. Der Schüler meldet einen Fußbefund. Prüfe: Sind Patientenname und Zimmer genannt? Ist der Befund vollständig (Hautbefund, Nagelzustand, kein Ulkus, Wagner-Kategorie)? Ist die Kompetenzgrenze der Pflege genannt (Pflege darf nicht schneiden/feilen)? Ist die Bitte um Podologen-Überweisung konkret? Gib konstruktives Feedback auf fehlende Elemente.",
          maxTurns: 4,
          evaluationCriteria: [
            "Patientenname und Zimmer genannt",
            "Befund vollständig (Hautbefund + Nagelzustand + Wagner-Kategorie)",
            "Kompetenzgrenze Pflege/Podologe genannt (DARF NICHT)",
            "Konkrete Bitte um Podologen-Überweisung",
          ],
        },
      },
    },

    // Step 4.7 — Calculation: BZ postprandial berechnen
    {
      stepId: "ce02-schmidt-dur-07-bz-postprandial",
      phase: 4,
      stepType: "calculation",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Deutsche Diabetes Gesellschaft / DDG (2023): Praxisempfehlungen Diabetes Typ 2",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-dur-bz-berechnung",
      tag: "pflege",
      contentC1: {
        title: "BZ postprandial — Abweichung berechnen",
        body: "Frau Schmidt hat heute Mittag gegessen. Du misst den BZ 2 Stunden nach dem Essen: 254 mg/dl. Der Zielwert postprandial ist < 180 mg/dl (DDG 2023). Berechne die Abweichung und entscheide: Arzt informieren?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "BZ nach dem Essen berechnen",
        body: "Frau Schmidt hat heute Mittag gegessen. Du misst den Blutzucker 2 Stunden danach: 254 mg/dl. Ziel nach dem Essen: unter 180 mg/dl. Rechne: Wie weit ist der Wert über dem Ziel?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "BZ postprandial: 254 mg/dl. Zielwert: < 180 mg/dl. Wie viel mg/dl liegt der aktuelle Wert über dem Zielbereich?",
        calculation: {
          instruction:
            "Berechne: 254 mg/dl − 180 mg/dl = ? mg/dl Abweichung. Informierst du den Arzt?",
          formula: "Aktueller BZ − Zielwert = Abweichung",
          correctValue: 74,
          unit: "mg/dl",
          tolerance: 0,
          explanation:
            "254 − 180 = 74 mg/dl über dem Ziel. Ja, der Arzt muss informiert werden: Der Wert ist deutlich zu hoch und der BZ-Trend ist wichtig für die Beurteilung der Metformin-Dosierung. (DDG 2023: postprandiales Ziel < 180 mg/dl)",
          explanationB1:
            "254 mg/dl − 180 mg/dl = 74 mg/dl über dem Ziel. Was machst du? Du informierst den Arzt. Warum? Der Wert ist deutlich zu hoch. Der Arzt muss prüfen ob Metformin ausreicht.",
        },
      },
    },

    // Step 4.8 — Branching (Klein): Inkontinenz-Autonomie
    {
      stepId: "ce02-schmidt-dur-08-inkontinenz-versorgung-kleinbranching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "§ 2 PflBG — Ressourcenorientierte Pflege",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-dur-inkontinenz-autonomie",
      tag: "pflege",
      contentC1: {
        title: "Inkontinenz-Versorgung — Autonomie respektieren",
        body: "Frau Schmidt sagt beim Wechsel der Inkontinenzversorgung plötzlich: \"Ich möchte das selbst machen. Ich bin nicht hilflos.\" Was tust du?",
        glossarBegriffe: ["Ressourcenorientierung", "Autonomie"],
      },
      contentB1: {
        title: "Frau Schmidt möchte es selbst machen",
        body: "Frau Schmidt sagt beim Wechsel der Inkontinenz-Versorgung: \"Ich möchte das selbst machen. Ich bin nicht hilflos.\" Was tust du?",
        glossarBegriffe: ["Ressourcenorientierung"],
      },
      question: {
        fragetext:
          "Frau Schmidt möchte die Inkontinenzversorgung selbst wechseln. Wie reagierst du?",
        branchingOptions: [
          {
            text: "\"Das geht nicht, wir müssen das dokumentieren, also machen wir es.\"",
            feedback:
              "Autonomie verletzt, rechtlich falsch. Frau Schmidt hat das Recht auf Selbstpflege soweit möglich (§ 2 PflBG — ressourcenorientierte Pflege). Dokumentation ist deine Aufgabe — nicht ein Argument gegen die Selbstständigkeit der Patientin. Du übernimmst, was Frau Schmidt noch kann.",
            feedbackB1:
              "Nein! Frau Schmidt hat das Recht, selbst zu entscheiden. Das ist ihr Körper. Dokumentation ist deine Aufgabe — kein Argument gegen sie.",
            isCorrect: false,
          },
          {
            text: "\"Natürlich. Zeigen Sie mir, wie Sie es machen — ich helfe nur wenn Sie wollen.\"",
            feedback:
              "Richtig. Ressourcenorientierte Pflege: stärken was da ist, nicht übernehmen was noch geht. Frau Schmidt macht es selbst, du beobachtest diskret ob sie es schafft und ob Korrekturen nötig sind. Das fördert Selbständigkeit und Würde. (§ 2 PflBG)",
            feedbackB1:
              "Richtig! Du sagst: \"Ich helfe nur wenn Sie möchten.\" Du beobachtest diskret. Frau Schmidt macht es selbst. Das ist Pflege die stärkt — nicht übernimmt.",
            isCorrect: true,
          },
          {
            text: "Schweigen und abwarten — mal sehen was passiert.",
            feedback:
              "Ambiguität ist keine Entscheidung. Frau Schmidt hat eine Aussage gemacht und braucht eine Reaktion. Schweigen kann als Ablehnung oder als Gleichgültigkeit interpretiert werden. Eine Reaktion muss her — die richtige ist Option 2.",
            feedbackB1:
              "Nein! Frau Schmidt braucht eine Antwort. Schweigen ist keine Entscheidung — und hilft ihr nicht.",
            isCorrect: false,
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 45,
};
