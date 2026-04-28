// CE-02 Situation Frau Schmidt — Phase 4: Maßnahmen durchführen
// Steps: 9 · Bloom: B4–B5 · Zeit: ~40–55 Min
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
          "Atmungsaktives textiles Faltenvlies in die Falte einlegen (AWMF S2k Intertrigo 2022) — keine okklusiven Pasten IN die Falte; Hautschutz-Creme nur auf intakter Haut außerhalb der Falte",
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
        body: "Analogie: Kohlenhydrate = Kurzzeit-Kraftstoff (schnell verfügbar, schnell verbraucht). Fette = Langzeit-Reserve (langfristige Energie, Wärmeschutz). Proteine = Baumaterial (Wundheilung, Immunabwehr, Muskeln, Albumin).\n\nWarum ist Protein für Frau Schmidt so wichtig? Albumin-Mangel (31 g/l) bedeutet: Der Körper kann keine Wunden heilen, keine Immunabwehr aufbauen und keine Ödeme verhindern.\n\n**Protein-Bedarf bei Adipositas mit Mangelernährung — Berechnung:** Wichtig: Bei Adipositas wird das **Idealgewicht** als Berechnungsbasis genommen (nicht das Istgewicht — sonst Überschätzung), nach BMI 22 oder Broca. Bei Frau Schmidt (1,60 m): Idealgewicht ca. 56 kg.\n- Erhaltungsbedarf (gesund): 0,8 g × 56 kg = ca. 45 g/Tag (DGE D-A-CH 2024)\n- Bei nachgewiesener Mangelernährung: 1,2 g × 56 kg = **ca. 67 g/Tag** (ESPEN 2017 Guidelines)\n\nFertigpizza (Beispiel Frau Schmidt): ca. 6–8 g Protein pro Portion. Hüttenkäse 200 g: ca. 26 g Protein. Der Unterschied liegt nicht im Verzicht, sondern in der Auswahl.",
        fallbezug:
          "Frau Schmidt isst aktuell proteinarme Fertigprodukte. Die Analogie macht verständlich warum das trotz ausreichender Kalorien problematisch ist. Berechnungsbasis: Idealgewicht 56 kg (BMI 22 bei 1,60 m), nicht Istgewicht 98 kg.",
        glossarBegriffe: ["Protein", "Albumin", "Makronährstoffe", "Idealgewicht"],
      },
      contentB1: {
        title: "Makro-Nährstoffe einfach erklärt",
        body: "Analogie: Was sind Makro-Nährstoffe?\n- **Kohlenhydrate** (= Zucker und Stärke) = schnelle Energie. Zum Beispiel: Brot, Nudeln, Reis.\n- **Fette** = lang andauernde Energie. Zum Beispiel: Öl, Käse, Nüsse.\n- **Protein** (= Eiweiß) = Baumaterial für den Körper. Zum Beispiel: Fleisch, Eier, Hülsenfrüchte.\n\nFrau Schmidt braucht mehr Protein. Warum? Protein hilft: Wunden heilen, Immunsystem stärken, Ödeme (= Wasser-Einlagerungen) verhindern. Eine Fertig-Pizza hat viel Kohlenhydrate und Fett — aber wenig Protein.\n\n**Wie viel Protein braucht Frau Schmidt?** Wichtig: Bei Adipositas rechnet man mit dem **Idealgewicht**, nicht mit dem aktuellen Gewicht. Frau Schmidts Idealgewicht ist ca. 56 kg (bei 1,60 m).\n- Gesund: 0,8 g × 56 kg = ca. 45 g/Tag\n- Bei Mangel-Ernährung wie bei Frau Schmidt: 1,2 g × 56 kg = ca. **67 g/Tag**",
        glossarBegriffe: ["Protein", "Albumin", "Idealgewicht"],
      },
    },

    // Step 4.2b — Mini-Übergang zwischen 4.3 und 4.4 (F-12 Fix)
    {
      stepId: "ce02-schmidt-dur-02b-bruecke-kochen",
      phase: 4,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2017): Expertenstandard Ernährungsmanagement"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-dur-bruecke",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Übergang — von der Biographie zum Konkreten",
        body: "Du hast gehört: Frau Schmidt fehlt die Freude am Kochen seit der Scheidung. Fertigprodukte wurden zur Gewohnheit. Bevor du jetzt über Lebensmittel sprichst, baust du eine Brücke: \"Frau Schmidt, ich hab eine Idee. Drei alltagsnahe Mahlzeiten — die brauchen kein Kochen. Hüttenkäse aufs Brot. Ein gekochtes Ei. Joghurt mit Nüssen. Das passt zu Ihrem Alltag — und liefert Protein.\"\n\nDieser Übergang ist wichtig: Du knüpfst an ihre Biographie an. Du machst aus dem \"Kochen-keine-Freude-mehr\" keine Kritik — sondern eine Lösung. Erst danach öffnet sich Frau Schmidt für konkrete Lebensmittel-Sortierung.",
        fallbezug:
          "Frau Schmidts Biographie (Kochen ohne Freude) wird zum Anker: Drei No-Cook-Mahlzeiten als realistischer Vorschlag.",
        glossarBegriffe: ["Motivierende Gesprächsführung"],
      },
      contentB1: {
        title: "Übergang — von Biographie zu Lebensmitteln",
        body: "Du hast gehört: Frau Schmidt mag das Kochen nicht mehr. Fertig-Essen ist Gewohnheit.\n\nDu sagst: \"Frau Schmidt, ich habe eine Idee. Drei einfache Mahlzeiten — ohne Kochen. Hüttenkäse aufs Brot. Ein gekochtes Ei. Joghurt mit Nüssen. Das passt zu Ihrem Alltag — und hat viel Protein.\"\n\nDas ist wichtig: Du nimmst Frau Schmidts Geschichte ernst. Du machst keine Vorwürfe. Du gibst eine Lösung, die zu ihr passt.",
        glossarBegriffe: [],
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
            "Du hast bei der Fußinspektion von Frau Schmidt (Zimmer 8) trockene Haut plantar, erste Rissbildung am großen Zeh und verdickte Nägel gefunden. Keine offene Wunde. Wagner Grad 1 (Wagner-Klassifikation; ohne Infektion = nach Wagner-Armstrong wäre das Stadium 1A). Du weißt: Pflege darf Nägel und Risse beim diabetischen Fußsyndrom nicht behandeln. Strukturiere deine Meldung nach SBAR (Situation — Background — Assessment — Recommendation).",
          situationB1:
            "Du hast Frau Schmidts Füße geschaut (Zimmer 8). Trockene, rissige Haut. Verdickte Nägel. Keine offene Wunde. Wagner Grad 1. Die Pflege darf die Nägel NICHT schneiden — das ist nur Sache des Podologen. Schreibe die Meldung in SBAR-Struktur: S = Situation, B = Hintergrund, A = Einschätzung, R = Bitte.",
          systemPrompt:
            "Du bist der Stationsarzt. Der Schüler meldet einen Fußbefund. Prüfe ob die Meldung der SBAR-Struktur folgt (Aktionsbündnis Patientensicherheit): SITUATION (Patientenname + Zimmer + akuter Anlass), BACKGROUND (Diabetes-Hintergrund, Wagner-Grad), ASSESSMENT (eigene Einschätzung der Pflege + Kompetenzgrenze: Pflege darf nicht schneiden/feilen), RECOMMENDATION (konkrete Bitte um Podologen-Überweisung). Gib konstruktives Feedback auf fehlende SBAR-Elemente und fehlende Inhalte.",
          maxTurns: 4,
          evaluationCriteria: [
            "SBAR-Struktur erkennbar (Situation / Background / Assessment / Recommendation)",
            "Situation: Patientenname und Zimmer genannt",
            "Background: Diabetes-Hintergrund + Wagner-Grad genannt",
            "Assessment: Befund vollständig (Hautbefund + Nagelzustand) + Kompetenzgrenze Pflege/Podologe genannt (DARF NICHT)",
            "Recommendation: Konkrete Bitte um Podologen-Überweisung",
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
          tolerance: 1,
          explanation:
            "254 − 180 = 74 mg/dl über dem Ziel. Du dokumentierst den Wert und informierst den Arzt wegen der anhaltenden Hyperglykämie. Wichtig zur Einordnung: Metformin wurde erst Tag 1 angesetzt — die volle Wirkung tritt erst nach 1–2 Wochen ein, eine sofortige Dosis-Erhöhung ist nicht automatisch indiziert. Aufgabe der Pflege: Trend dokumentieren, Arzt informieren. Aufgabe des Arztes: über Metformin-Eindosierung, ggf. Bridging-Insulin oder andere Anpassungen entscheiden. (DDG 2023: postprandiales Ziel < 180 mg/dl; Metformin-Wirkeintritt 1–2 Wochen)",
          explanationB1:
            "254 mg/dl − 180 mg/dl = 74 mg/dl über dem Ziel. Du dokumentierst den Wert und informierst den Arzt. Wichtig: Metformin wirkt erst nach 1–2 Wochen voll. Die Pflege misst und meldet — der Arzt entscheidet ob Dosis erhöht wird oder ob kurzzeitig Insulin nötig ist.",
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
            text: "\"Natürlich. Zeigen Sie mir, wie Sie es machen — ich helfe nur wenn Sie wollen. Die Klingel lege ich Ihnen in Reichweite, ich bleibe im Zimmer in der Nähe.\"",
            feedback:
              "Richtig. Ressourcenorientierte Pflege (§ 2 PflBG) UND Sturzprophylaxe (DNQP Sturz 2022) zusammen. Frau Schmidt hat mehrere Sturz-Risiken: Adipositas Grad II, frisch eingestellter Diabetes (Hypoglykämie-Risiko unter Metformin), Belastungsinkontinenz, Atemnot bei Anstrengung — bei Aufnahme zudem Schwäche/Schwindel. Selbstpflege fördern: ja. Aber: Klingel in Reichweite, Pflegekraft in der Nähe, ggf. kurzer Vital-/Schellong-Check vor dem Aufstehen ans Bett-Ende. Du beobachtest diskret und greifst nur ein wenn nötig. So bleibt Würde gewahrt UND Sicherheit gegeben.",
            feedbackB1:
              "Richtig! Du sagst: \"Ich helfe nur wenn Sie möchten.\" Wichtig: Klingel in Reichweite legen — du bleibst in der Nähe. Frau Schmidt hat Sturz-Risiken (Adipositas, neuer Diabetes mit möglicher Unterzuckerung, Inkontinenz, Atemnot). Pflege die stärkt UND sichert.",
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
  geschaetzteDauer: 50,
};
