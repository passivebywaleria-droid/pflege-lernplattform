// Session 7: "Sprechen, Schlafen, Schreiben — Die weichen Faktoren" — LE 06
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB13: Kommunikation bei Mobilisation (II-01, II-02, III-01)
// TB14: Schlaf, Arbeitsschutz, Dokumentation (V-01, V-02, V-03)
// Bloom: B2-B4, 22 Steps, ~30 Min
// Interleaving: ~10% (LE-03)

import type { ContentStep } from "../_types";

export const STEPS_S7: ContentStep[] = [
  // =============================================================
  // Step 1: Advance Organizer — 3 Themen-Vorschau
  // =============================================================
  {
    stepId: "le06-s7-tb13-01",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    imageUrl: "svg:compass",
    contentC1: {
      title: "Drei unterschaetzte Faktoren",
      body: "Heute geht es um 3 Themen, die oft unterschaetzt werden:\n\n1) Wie du MIT dem Patienten sprichst — nicht nur WAS du tust\n2) Warum Schlaf eine Ressource ist — und Schlafmittel ein Risiko\n3) Was du dokumentierst — und warum das Leben retten kann\n\nAlle drei Themen verbinden Kommunikation, Sicherheit und Qualitaet. Sie machen den Unterschied zwischen guter und exzellenter Pflege.",
    },
    contentB1: {
      title: "Drei wichtige Themen",
      body: "Heute lernst du 3 Dinge:\n\n1) Wie du mit dem Patienten sprichst\n2) Warum Schlaf wichtig ist\n3) Was du aufschreiben musst\n\nDiese 3 Themen sind sehr wichtig fuer gute Pflege.",
    },
  },

  // =============================================================
  // Step 2: BRUECKE — Recall Kommunikationsregel
  // =============================================================
  {
    stepId: "le06-s7-tb13-02",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "BRÜCKE",
    tag: "pflege",
    contentC1: {
      title: "Erinnerst du dich?",
      body: "In Session 1 hast du die Kinaesthetik-Praxisregeln gelernt. Eine davon betrifft die Kommunikation.",
    },
    contentB1: {
      title: "Weisst du noch?",
      body: "In der ersten Session hast du Regeln fuer die Kinaesthetik gelernt. Eine Regel war ueber das Sprechen.",
    },
    question: {
      fragetext: "Was war die Kinaesthetik-Regel zur Kommunikation vor jeder Mobilisation?",
      optionen: [
        {
          text: "Ziel besprechen und Zwischenschritte erklaeren",
          isCorrect: true,
          explanation: "Richtig! Vor jeder Mobilisation muss der Patient wissen WAS passiert und WARUM. Ziel besprechen, Zwischenschritte erklaeren, Hilfsmittel benennen.",
          explanationB1: "Richtig! Der Patient muss vorher wissen: Was passiert? Warum?",
        },
        {
          text: "Nur kurz 'Achtung!' rufen",
          isCorrect: false,
          explanation: "'Achtung!' reicht nicht. Der Patient braucht eine vollstaendige Information: Was ist das Ziel? Welche Schritte kommen? Welche Hilfsmittel werden benutzt?",
          explanationB1: "'Achtung!' reicht nicht. Der Patient muss alles vorher wissen.",
        },
        {
          text: "Nichts sagen — einfach anfangen",
          isCorrect: false,
          explanation: "Ohne Kommunikation fehlt dem Patienten die Vorbereitung. Er kann nicht mitarbeiten und erschrickt moeglicherweise. Das widerspricht allen Kinaesthetik-Grundsaetzen.",
          explanationB1: "Ohne Sprechen kann der Patient nicht mithelfen. Das ist falsch.",
        },
        {
          text: "Nur den Arzt informieren",
          isCorrect: false,
          explanation: "Der Arzt muss nicht vor jeder Mobilisation informiert werden. Die Kommunikation muss direkt mit dem Patienten stattfinden — er ist der Partner bei der Bewegung.",
          explanationB1: "Nicht den Arzt. Du musst mit dem Patienten sprechen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 3: SZENE — Frau Becker Entlassungsgespraech
  // =============================================================
  {
    stepId: "le06-s7-tb13-03",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347", "Q2 S.400-404"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Frau Becker geht nach Hause",
      body: "Frau Becker (79) wird morgen entlassen. Sie sitzt am Bett und fragt dich: 'Was muss ich zuhause beachten?' Du beraetest sie zur sicheren Mobilitaet zuhause.",
      fallbezug: "Frau Becker, 79 Jahre, Hueft-TEP, 7 Tage postoperativ. Barthel-Index 65. Rollator bewilligt.",
    },
    contentB1: {
      title: "Frau Becker geht heim",
      body: "Frau Becker geht morgen nach Hause. Sie fragt dich: 'Was muss ich zuhause machen?' Du gibst ihr Tipps.",
      fallbezug: "Frau Becker, 79 Jahre, neue Huefte, bald Entlassung.",
    },
    question: {
      fragetext: "Frau Becker fragt: 'Was muss ich zuhause beachten?'",
      patientName: "Frau Becker",
      dialogPhases: [
        {
          context: "Frau Becker sieht dich erwartungsvoll an. 'Mein Sohn hat schon aufgeraeumt, sagt er. Aber ich habe Angst, zuhause zu stuerzen. Was soll ich noch beachten?'",
          contextB1: "Frau Becker sagt: 'Mein Sohn hat aufgeraeumt. Aber ich habe Angst vor Stuerzen. Was soll ich tun?'",
          speaker: "Frau Becker",
          options: [
            {
              text: "Frau Becker, das sind die wichtigsten Punkte: Teppiche weg oder fixieren, Haltegriffe im Bad, Nachtlicht im Flur, feste Schuhe statt Pantoffeln, und den Rollator immer in Reichweite. Soll ich das aufschreiben?",
              textB1: "Wichtig: Teppiche weg, Haltegriffe im Bad, Nachtlicht, feste Schuhe, Rollator immer dabei. Soll ich das aufschreiben?",
              patientResponse: "Ja bitte! Das ist viel auf einmal. Aber wenn Sie das aufschreiben, kann mein Sohn das alles vorbereiten.",
              patientResponseB1: "Ja, schreiben Sie das auf! Mein Sohn macht das dann.",
              score: 3,
              feedback: "Sehr gut! Du gibst konkrete, umsetzbare Massnahmen und bietest schriftliche Information an. Das ist professionelle Entlassungsberatung — verstaendlich, vollstaendig und patientenorientiert.",
              feedbackB1: "Super! Du gibst klare Tipps und schreibst sie auf. Das ist sehr gut.",
            },
            {
              text: "Achten Sie auf ausreichende Dekubitus- und Thromboseprophylaxe, vermeiden Sie extrinsische Sturzrisikofaktoren und nutzen Sie Ihr Mobilitaetshilfsmittel konsequent.",
              textB1: "Passen Sie auf Dekubitus und Thrombose auf. Vermeiden Sie Sturzgefahren.",
              patientResponse: "Aeh... was genau meinen Sie? Ich bin keine Aerztin...",
              patientResponseB1: "Ich verstehe das nicht. Was soll ich machen?",
              score: 1,
              feedback: "Fachlich korrekt, aber fuer Frau Becker unverstaendlich. Entlassungsberatung muss in Alltagssprache stattfinden. Statt 'extrinsische Sturzrisikofaktoren' sagst du besser 'Stolperfallen wie Teppiche oder Kabel'.",
              feedbackB1: "Das ist zu schwer fuer die Patientin. Benutze einfache Woerter!",
            },
            {
              text: "Ach, das wird schon. Sie haben ja den Rollator. Und Ihr Sohn ist ja da.",
              textB1: "Das wird schon. Sie haben den Rollator. Ihr Sohn hilft.",
              patientResponse: "Naja... mein Sohn kommt nur am Wochenende. Unter der Woche bin ich allein.",
              patientResponseB1: "Mein Sohn kommt nur am Wochenende. Sonst bin ich allein.",
              score: 1,
              feedback: "Zu wenig Information! Frau Becker lebt unter der Woche allein. Sie braucht konkrete Massnahmen: Stolperfallen beseitigen, Haltegriffe, Notrufknopf. Beruhigen ohne Beratung ist nicht professionell.",
              feedbackB1: "Das ist zu wenig! Frau Becker ist unter der Woche allein. Sie braucht mehr Tipps.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 4: ERKLAERUNG — Sprache bei Mobilisation
  // =============================================================
  {
    stepId: "le06-s7-tb13-04",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "interview",
    contentC1: {
      title: "Kommunikation bei der Mobilisation",
      body: "Frage: Warum ist Kommunikation vor Mobilisation Pflicht?\nAntwort: Weil der Patient wissen muss, WAS passiert und WARUM. Nur dann kann er mitarbeiten.\n\nFrage: Was bedeutet 'eindeutige Sprache'?\nAntwort: Richtungsbegriffe aus Sicht des liegenden Patienten formulieren. 'Kopfende' statt 'oben'. 'Linke Seite' statt 'da drueben'.\n\nFrage: Was ist der haeufigste Fehler?\nAntwort: Anweisungsketten! 'Drehen Sie sich, greifen Sie, stehen Sie auf' ist zu viel auf einmal. Immer nur EINEN Schritt ansagen, warten, dann den naechsten.\n\nFrage: Was muss der Patient vorher wissen?\nAntwort: Drei Dinge — Was passiert? Warum? Welche Hilfsmittel werden benutzt?",
      glossarBegriffe: ["Mobilisation", "Kinästhetik"],
    },
    contentB1: {
      title: "Wie du mit dem Patienten sprichst",
      body: "Frage: Warum musst du vorher mit dem Patienten sprechen?\nAntwort: Der Patient muss wissen, was du tust. Dann kann er mithelfen.\n\nFrage: Was heisst 'eindeutig sprechen'?\nAntwort: Sage 'Kopfende' statt 'oben'. Sage 'linke Seite' statt 'da drueben'.\n\nFrage: Was ist ein haeufiger Fehler?\nAntwort: Zu viel auf einmal sagen! Sage immer nur einen Schritt. Warte. Dann sage den naechsten Schritt.\n\nFrage: Was muss der Patient wissen?\nAntwort: Was passiert? Warum? Welche Hilfe gibt es?",
      glossarBegriffe: ["Mobilisation"],
    },
  },

  // =============================================================
  // Step 5: CHECKPOINT — MC Kommunikationsfehler
  // =============================================================
  {
    stepId: "le06-s7-tb13-05",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Was ist hier falsch?",
      body: "Frau Becker liegt im Bett. Du sagst: 'Drehen Sie sich nach oben.' Was ist an dieser Anweisung problematisch?",
    },
    contentB1: {
      title: "Was ist falsch?",
      body: "Frau Becker liegt im Bett. Du sagst: 'Drehen Sie sich nach oben.' Was ist das Problem?",
    },
    question: {
      fragetext: "Was ist an der Anweisung 'Drehen Sie sich nach oben' problematisch?",
      optionen: [
        {
          text: "'Oben' ist mehrdeutig — besser 'Kopfende' oder 'zur Decke' sagen",
          isCorrect: true,
          explanation: "Richtig! Fuer einen liegenden Patienten ist 'oben' unklar: Meint man die Decke? Das Kopfende? Eindeutige Richtungsbegriffe aus der Perspektive des Patienten verwenden!",
          explanationB1: "Richtig! 'Oben' ist unklar. Sage besser 'Kopfende' oder 'zur Decke'.",
        },
        {
          text: "Nichts — die Anweisung ist korrekt",
          isCorrect: false,
          explanation: "'Oben' ist ein typischer Fehler in der Kommunikation bei Mobilisation. Ein liegender Patient hat eine andere Perspektive als eine stehende Pflegekraft.",
          explanationB1: "'Oben' ist unklar fuer den Patienten. Er liegt ja.",
        },
        {
          text: "Die Anweisung war zu leise",
          isCorrect: false,
          explanation: "Lautstaerke kann ein Problem sein, aber hier ist der Inhalt falsch: 'Oben' ist nicht eindeutig aus der Perspektive einer liegenden Person.",
          explanationB1: "Nicht die Lautstaerke ist das Problem. Das Wort 'oben' ist unklar.",
        },
        {
          text: "Der Zeitpunkt war falsch",
          isCorrect: false,
          explanation: "Der Zeitpunkt wird hier nicht thematisiert. Das Problem ist die mehrdeutige Richtungsangabe 'oben' statt einer klaren Bezeichnung wie 'Kopfende'.",
          explanationB1: "Nicht der Zeitpunkt. Das Wort 'oben' ist das Problem.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: ANWENDUNG — Errorspot Mobilisationsanweisung
  // =============================================================
  {
    stepId: "le06-s7-tb13-06",
    phase: "s7",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fehler finden",
      body: "Die folgende Mobilisationsanweisung enthaelt 3 Fehler. Finde sie!",
    },
    contentB1: {
      title: "Finde die Fehler",
      body: "Dieser Text hat 3 Fehler. Finde sie!",
    },
    question: {
      fragetext: "Finde die 3 Fehler in dieser Mobilisationsanweisung:",
      errorspot: {
        instruction: "Markiere die 3 fehlerhaften Stellen in der Mobilisationsanweisung.",
        text: "Kommen Sie mal hoch, drehen Sie sich da rueber und stehen Sie mal auf.",
        errors: [
          {
            start: 15,
            end: 19,
            correction: "an die Bettkante",
            explanation: "'Hoch' ist mehrdeutig. Besser: 'an die Bettkante' oder 'zum Kopfende' — eindeutige Richtungsangabe aus Patientensicht.",
            explanationB1: "'Hoch' ist unklar. Sage besser 'an die Bettkante'.",
          },
          {
            start: 34,
            end: 44,
            correction: "nach rechts zum Rollstuhl",
            explanation: "'Da drueber' ist keine eindeutige Richtungsangabe. Besser: 'nach rechts zum Rollstuhl' — konkrete Richtung und Ziel benennen.",
            explanationB1: "'Da drueber' ist unklar. Sage besser 'nach rechts zum Rollstuhl'.",
          },
          {
            start: 0,
            end: 73,
            correction: "Einzelschritte statt Kette",
            explanation: "Die gesamte Anweisung ist eine Kette aus 3 Handlungen auf einmal. Kinaesthetik-Regel: Immer nur EINEN Schritt ansagen, warten, dann den naechsten.",
            explanationB1: "Zu viel auf einmal! Sage immer nur einen Schritt. Warte. Dann den naechsten.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: ANGEHOERIGEN-BERATUNG — Sohn von Frau Becker
  // =============================================================
  {
    stepId: "le06-s7-tb13-07",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q2 S.400-404", "Q1 S.346"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    tag: "pflege",
    contentC1: {
      title: "Beratung der Angehoerigen",
      body: "Frau Beckers Sohn kommt vorbei. Er will wissen, was er fuer die Entlassung seiner Mutter vorbereiten soll.",
      fallbezug: "Frau Becker, 79 Jahre, Hueft-TEP. Entlassung morgen. Sohn kommt am Wochenende, unter der Woche lebt sie allein.",
    },
    contentB1: {
      title: "Der Sohn fragt",
      body: "Frau Beckers Sohn ist da. Er will wissen, was er zu Hause vorbereiten soll.",
      fallbezug: "Frau Becker geht morgen nach Hause. Sie lebt unter der Woche allein.",
    },
    question: {
      fragetext: "Frau Beckers Sohn fragt: 'Mama kommt morgen heim. Was muessen wir vorbereiten?'",
      patientName: "Sohn von Frau Becker",
      dialogPhases: [
        {
          context: "Der Sohn setzt sich neben dich. 'Ich mache mir Sorgen. Mama lebt allein, und nach der Huefte... Was muessen wir vorbereiten?'",
          contextB1: "Der Sohn sagt: 'Ich mache mir Sorgen. Was muessen wir zuhause vorbereiten?'",
          speaker: "Sohn",
          options: [
            {
              text: "Gute Frage! Drei Bereiche: Erstens Wohnung — Teppiche entfernen oder fixieren, Haltegriffe im Bad, Nachtlicht im Flur. Zweitens Hilfsmittel — Rollator, Duschhocker, erhoehter Toilettensitz. Drittens Notfall — Notrufknopf oder Handy immer in Reichweite.",
              textB1: "Drei Dinge sind wichtig: 1) Wohnung sicher machen: Teppiche weg, Haltegriffe im Bad, Nachtlicht. 2) Hilfsmittel: Rollator, Duschhocker. 3) Notfall: Telefon immer in der Naehe.",
              patientResponse: "Das ist sehr hilfreich! Den Rollator hat sie schon. Ich kuemmere mich um die Haltegriffe und den Notrufknopf.",
              patientResponseB1: "Danke! Das mache ich. Den Rollator hat sie schon.",
              score: 3,
              feedback: "Perfekt strukturiert! Du beraetest in 3 klaren Bereichen (Wohnung, Hilfsmittel, Notfall) und gibst konkrete Massnahmen. Das ist professionelle Angehoerigenberatung.",
              feedbackB1: "Super! Du gibst klare Tipps in 3 Bereichen. Das ist sehr gut.",
            },
            {
              text: "Naja, passen Sie halt auf Ihre Mutter auf. Vielleicht sollten Sie oefter vorbeischauen.",
              textB1: "Passen Sie auf Ihre Mutter auf. Kommen Sie oefter vorbei.",
              patientResponse: "Das versuche ich ja... aber ich kann nicht jeden Tag da sein. Was soll ich konkret machen?",
              patientResponseB1: "Aber was genau soll ich machen? Ich kann nicht jeden Tag kommen.",
              score: 1,
              feedback: "Zu unkonkret! Der Sohn braucht konkrete Massnahmen: Was muss in der Wohnung veraendert werden? Welche Hilfsmittel werden gebraucht? Was ist der Notfallplan?",
              feedbackB1: "Das ist zu wenig! Gib ihm konkrete Tipps, was er machen soll.",
            },
            {
              text: "Ihre Mutter braucht eigentlich rund um die Uhr Betreuung. Koennen Sie nicht eine Pflegekraft engagieren?",
              textB1: "Ihre Mutter braucht jemanden, der immer da ist.",
              patientResponse: "Das koennen wir uns nicht leisten... Gibt es nicht andere Moeglichkeiten?",
              patientResponseB1: "Das geht nicht. Was kann ich sonst machen?",
              score: 1,
              feedback: "Frau Becker hat einen Barthel-Index von 65 — sie ist nicht komplett pflegeabhaengig. Statt maximaler Betreuung braucht sie eine sichere Umgebung und passende Hilfsmittel. Sturzprophylaxe zuhause ist der Schluessel.",
              feedbackB1: "Frau Becker kann vieles allein. Sie braucht eine sichere Wohnung und gute Hilfsmittel.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 8: ANWENDUNG — Entlassungscheckliste
  // =============================================================
  {
    stepId: "le06-s7-tb13-08",
    phase: "s7",
    stepType: "tablefillin",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.400-404", "Q1 S.346"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Entlassungscheckliste erstellen",
      body: "Erstelle eine Entlassungscheckliste fuer Frau Becker. Fuelle die Luecken in der Tabelle aus.",
    },
    contentB1: {
      title: "Checkliste fuer die Entlassung",
      body: "Fuelle die Tabelle aus. Was braucht Frau Becker zuhause?",
    },
    question: {
      fragetext: "Fuelle die Luecken in der Entlassungscheckliste aus:",
      tablefillin: {
        instruction: "Ergaenze die fehlenden Felder in der Entlassungscheckliste fuer Frau Becker.",
        headers: ["Bereich", "Massnahme", "Wer organisiert"],
        rows: [
          [
            { value: "Wohnung", isBlank: false },
            { value: "Haltegriffe im Bad", isBlank: true, options: ["Haltegriffe im Bad", "Blumen giessen", "Fenster putzen", "Bett kaufen"] },
            { value: "Sohn", isBlank: false },
          ],
          [
            { value: "Hilfsmittel", isBlank: false },
            { value: "Rollator + Duschhocker", isBlank: false },
            { value: "Sanitaetshaus", isBlank: true, options: ["Sanitaetshaus", "Apotheke", "Friseur", "Nachbar"] },
          ],
          [
            { value: "Notfall", isBlank: false },
            { value: "Notrufknopf bestellen", isBlank: true, options: ["Notrufknopf bestellen", "Urlaub buchen", "Zeitung abbestellen", "Fernseher kaufen"] },
            { value: "Sohn + Pflegedienst", isBlank: false },
          ],
          [
            { value: "Medikamente", isBlank: false },
            { value: "Heparin-Spritzen + MTS fuer 2 Wochen", isBlank: false },
            { value: "Hausarzt + Apotheke", isBlank: false },
          ],
        ],
      },
    },
  },

  // =============================================================
  // Step 9: SNACK — Swipe Kommunikation
  // =============================================================
  {
    stepId: "le06-s7-sn-01",
    phase: "s7",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Vier Aussagen zur Kommunikation bei der Mobilisation. Richtig oder falsch?",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Vier Aussagen. Wische nach rechts (richtig) oder links (falsch).",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      swipe: {
        instruction: "Wische: Richtig oder falsch?",
        cards: [
          {
            statement: "'Kopfende' ist besser als 'oben' bei Richtungsangaben fuer liegende Patienten.",
            statementB1: "'Kopfende' ist besser als 'oben'.",
            isCorrect: true,
            explanation: "Richtig! 'Oben' ist mehrdeutig fuer einen liegenden Patienten. 'Kopfende' ist eindeutig und aus seiner Perspektive verstaendlich.",
            explanationB1: "Richtig! 'Kopfende' versteht der Patient besser als 'oben'.",
          },
          {
            statement: "Lange Anweisungsketten sind effizient und sparen Zeit bei der Mobilisation.",
            statementB1: "Viele Anweisungen auf einmal sind gut.",
            isCorrect: false,
            explanation: "Falsch! Anweisungsketten ueberfordern den Patienten. Kinaesthetik-Regel: Immer nur EINEN Schritt ansagen, warten, dann den naechsten.",
            explanationB1: "Falsch! Sage immer nur einen Schritt. Nicht alles auf einmal.",
          },
          {
            statement: "Der Patient muss vor jeder Mobilisation das Ziel kennen.",
            statementB1: "Der Patient muss vorher wissen, was passiert.",
            isCorrect: true,
            explanation: "Richtig! Vor JEDER Mobilisation: Was ist das Ziel? Welche Schritte kommen? Welche Hilfsmittel werden benutzt? Der Patient ist Partner, nicht passives Objekt.",
            explanationB1: "Richtig! Der Patient muss immer vorher wissen: Was passiert jetzt?",
          },
          {
            statement: "Stille Mobilisation ohne Worte ist ein Zeichen von Professionalitaet.",
            statementB1: "Nicht sprechen bei der Mobilisation ist professionell.",
            isCorrect: false,
            explanation: "Falsch! Stille Mobilisation widerspricht allen Kinaesthetik-Grundsaetzen. Kommunikation vor und waehrend der Bewegung ist Pflicht.",
            explanationB1: "Falsch! Du musst mit dem Patienten sprechen. Immer!",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: SZENE — Herr Schmidt kann nicht schlafen
  // =============================================================
  {
    stepId: "le06-s7-tb14-01",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.360-368"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Herr Schmidt kann nicht schlafen",
      body: "Nachtdienst. Herr Schmidt (56, Hemiplegie rechts, Tag 10) dreht sich unruhig hin und her. Er klingelt.",
      fallbezug: "Herr Schmidt, 56 Jahre, Schlaganfall, rechtsseitige Hemiplegie. Frustriert, schlaeft seit Tagen schlecht.",
    },
    contentB1: {
      title: "Herr Schmidt schlaeft nicht",
      body: "Es ist Nacht. Herr Schmidt kann nicht schlafen. Er dreht sich hin und her. Er klingelt.",
      fallbezug: "Herr Schmidt, 56 Jahre, Schlaganfall. Er kann nicht gut schlafen.",
    },
    question: {
      fragetext: "Herr Schmidt sagt: 'Im Krankenhaus kann man einfach nicht schlafen.' Was tust du?",
      patientName: "Herr Schmidt",
      dialogPhases: [
        {
          context: "Herr Schmidt liegt wach. Das Licht vom Flur scheint durch die Tuerspalte. Ein Patient im Nebenzimmer hustet. 'Im Krankenhaus kann man einfach nicht schlafen. Koennen Sie mir nicht was geben?'",
          contextB1: "Herr Schmidt liegt wach. Licht und Laerm stoeren ihn. Er sagt: 'Ich kann nicht schlafen. Geben Sie mir etwas zum Schlafen?'",
          speaker: "Herr Schmidt",
          options: [
            {
              text: "Ich verstehe, dass Sie nicht schlafen koennen, Herr Schmidt. Lassen Sie mich erstmal schauen, was stoert: Ist es das Licht? Der Laerm? Haben Sie Schmerzen? Wir finden bestimmt eine Loesung ohne Medikamente.",
              textB1: "Ich verstehe. Was stoert Sie? Das Licht? Der Laerm? Schmerzen? Wir finden eine Loesung ohne Tabletten.",
              patientResponse: "Naja... das Licht vom Flur stoert schon. Und mein Arm tut weh, wenn ich auf der Seite liege.",
              patientResponseB1: "Das Licht stoert mich. Und mein Arm tut weh.",
              score: 3,
              feedback: "Perfekt! Du fragst nach den Ursachen, statt sofort Medikamente zu holen. Die Schlafhygiene beginnt mit der Erfassung der Stoerfaktoren: Licht, Laerm, Schmerzen, Position.",
              feedbackB1: "Super! Du fragst erst, was das Problem ist. Keine Tabletten ohne Grund.",
            },
            {
              text: "Ich bringe Ihnen eine Schlaftablette. Moment, ich frage den Arzt.",
              textB1: "Ich hole Ihnen eine Schlaftablette.",
              patientResponse: "Ja, bitte. Irgendwas muss doch helfen.",
              patientResponseB1: "Ja, bitte! Ich will schlafen.",
              score: 1,
              feedback: "Schlafmedikamente sind das LETZTE Mittel, nicht das erste! Bei sturzgefaehrdeten Patienten wie Herrn Schmidt erhoehen sie das Sturzrisiko erheblich. Erst Ursachen erfragen, dann nicht-medikamentoese Massnahmen.",
              feedbackB1: "Schlaftabletten sind gefaehrlich fuer Herr Schmidt! Er koennte stuerzen. Frage erst, was das Problem ist.",
            },
            {
              text: "Versuchen Sie einfach die Augen zuzumachen. Es ist spaet.",
              textB1: "Machen Sie die Augen zu. Es ist spaet.",
              patientResponse: "Das versuche ich doch seit 2 Stunden...",
              patientResponseB1: "Das versuche ich ja schon!",
              score: 1,
              feedback: "Das ist keine professionelle Pflege. Der Patient hat ein reales Problem. Schlaflosigkeit im Krankenhaus hat konkrete Ursachen (Licht, Laerm, Schmerzen, Sorgen) die du aktiv adressieren kannst.",
              feedbackB1: "Das ist nicht hilfreich. Der Patient hat ein echtes Problem. Hilf ihm!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 11: ERKLAERUNG — Schlaf als Ressource
  // =============================================================
  {
    stepId: "le06-s7-tb14-02",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.360-368"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "news",
    contentC1: {
      title: "Studie: Schlafmittel erhoehen Sturzrisiko um 40%",
      body: "Schlaf ist eine Ressource — und Schlafmangel ein Risikofaktor.\n\nWichtige Fakten:\n- Individuelle Schlafgewohnheiten beruecksichtigen (nicht jeder braucht 8 Stunden)\n- Stoerfaktoren im Krankenhaus: Licht, Laerm, Schmerzen, ungewohnte Umgebung\n- Aeltere Menschen: Kuerzere Tiefschlafphasen, haeufigeres Erwachen — das ist NORMAL\n- Schlafmedikamente: Nur als letztes Mittel! Sie erhoehen das Sturzrisiko erheblich\n- Besonders gefaehrlich bei Patienten mit Sturzrisiko (wie Herr Schmidt nach Schlaganfall)\n\nSchlafhygiene-Massnahmen ZUERST:\n1. Schmerzen behandeln\n2. Umgebung anpassen (Licht dimmen, Tuer schliessen, Laerm reduzieren)\n3. Individuelle Gewohnheiten beruecksichtigen (warme Milch, Lesen, Gespraech)\n4. Entspannungstechniken anbieten\n5. Medikamente — LETZTES Mittel, nur nach Arztruecksprache",
      glossarBegriffe: ["Sturzprophylaxe", "Schlafhygiene"],
    },
    contentB1: {
      title: "Schlaftabletten sind gefaehrlich",
      body: "Schlaf ist wichtig fuer die Gesundheit.\n\nWichtige Fakten:\n- Jeder Mensch schlaeft anders. Nicht jeder braucht 8 Stunden.\n- Im Krankenhaus gibt es viel Laerm und Licht. Das stoert den Schlaf.\n- Aeltere Menschen wachen nachts oefter auf. Das ist normal.\n- Schlaftabletten sind gefaehrlich! Der Patient kann stuerzen.\n\nWas du tun kannst:\n1. Frage: Hast du Schmerzen?\n2. Mache das Licht aus und die Tuer zu.\n3. Frage: Was hilft dir beim Einschlafen?\n4. Schlaftabletten nur als letztes Mittel!",
      glossarBegriffe: ["Sturzprophylaxe"],
    },
  },

  // =============================================================
  // Step 12: CHECKPOINT — Anticipation MC Schlafmittel
  // =============================================================
  {
    stepId: "le06-s7-tb14-03",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.360-368", "Q2 S.398-400"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Warum sind Schlafmittel problematisch?",
      body: "Denke nach, BEVOR du die Erklaerung liest.",
    },
    contentB1: {
      title: "Warum sind Schlaftabletten gefaehrlich?",
      body: "Denke nach. Was glaubst du?",
    },
    question: {
      fragetext: "Warum sind Schlafmedikamente bei sturzgefaehrdeten Patienten besonders problematisch?",
      mcVariant: "anticipation",
      optionen: [
        {
          text: "Sie machen schlaefrig, die Reaktionszeit sinkt und das Sturzrisiko steigt deutlich",
          isCorrect: true,
          explanation: "Richtig! Schlafmedikamente (Sedativa) verlangsamen die Reaktion, beeintraechtigen das Gleichgewicht und machen benommen. Bei Patienten mit ohnehin erhoehtem Sturzrisiko (Alter, Hemiplegie, postoperativ) wird das Sturzrisiko nochmals deutlich erhoeht.",
          explanationB1: "Richtig! Schlaftabletten machen muede und langsam. Der Patient kann leichter stuerzen.",
        },
        {
          text: "Sie sind zu teuer fuer das Krankenhausbudget",
          isCorrect: false,
          explanation: "Die Kosten sind nicht der Hauptgrund. Das Problem ist die Erhoehung des Sturzrisikos durch Benommenheit, verlangsamte Reaktion und Gleichgewichtsstoerungen.",
          explanationB1: "Nicht wegen dem Geld. Das Problem ist: Der Patient kann stuerzen.",
        },
        {
          text: "Sie schmecken schlecht und Patienten nehmen sie nicht gern",
          isCorrect: false,
          explanation: "Geschmack ist kein klinisch relevantes Argument. Die Gefahr liegt in der Wirkung: Schlafmittel erhoehen das Sturzrisiko bei ohnehin gefaehrdeten Patienten erheblich.",
          explanationB1: "Das ist nicht der Grund. Schlaftabletten sind wegen Sturzgefahr problematisch.",
        },
        {
          text: "Sie heilen die Schlaflosigkeit dauerhaft",
          isCorrect: false,
          explanation: "Schlafmittel behandeln nur das Symptom, nicht die Ursache. Ausserdem machen viele abhaengig und erhoehen das Sturzrisiko — ein doppeltes Problem bei aelteren und neurologischen Patienten.",
          explanationB1: "Schlaftabletten heilen nicht. Sie koennen sogar neue Probleme machen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 13: ANWENDUNG — Schlafhygiene sortieren
  // =============================================================
  {
    stepId: "le06-s7-tb14-04",
    phase: "s7",
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.360-368"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Schlafhygiene nach Prioritaet",
      body: "Bringe die Schlafhygiene-Massnahmen in die richtige Reihenfolge — von der wichtigsten zur letzten Massnahme.",
    },
    contentB1: {
      title: "Was zuerst?",
      body: "Sortiere die Massnahmen. Was machst du zuerst? Was zuletzt?",
    },
    question: {
      fragetext: "Sortiere die Schlafhygiene-Massnahmen nach Prioritaet (wichtigste zuerst):",
      sortItems: [
        "Schmerzen behandeln (Analgesie anpassen)",
        "Umgebung anpassen (Licht dimmen, Tuer schliessen)",
        "Individuelle Gewohnheiten beruecksichtigen",
        "Entspannungstechniken anbieten",
        "Schlafmedikamente (letztes Mittel, Arztruecksprache)",
      ],
    },
  },

  // =============================================================
  // Step 14: ERKLAERUNG — Dokumentation
  // =============================================================
  {
    stepId: "le06-s7-tb14-05",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.400", "Q3"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "checklist",
    imageUrl: "svg:table",
    contentC1: {
      title: "Drei Dokumentations-Typen",
      body: "In der Mobilisation gibt es 3 wichtige Dokumentationen:\n\n1. Mobilisationsplan\n- Ziele (z.B. 'Patient steht 30s am Bett bis Tag 10')\n- Schritte (Reihenfolge der Massnahmen)\n- Hilfsmittel (Rollator, Rutschbrett, Drehscheibe)\n- Evaluation (Wird das Ziel erreicht?)\n\n2. Sturzprotokoll\n- Wann? (Datum, Uhrzeit)\n- Wo? (Zimmer, Bad, Flur)\n- Wie? (Hergang, Was ist passiert?)\n- Verletzungen? (Wunden, Schmerzen, Prellungen)\n- Vitalzeichen (Blutdruck, Puls)\n- Massnahmen (Arzt informiert, Kuehlung, Roentgen)\n\n3. Positionierungsprotokoll\n- Intervalle (alle 2h, individuell angepasst)\n- Position (30-Grad-Seite, Rueckenlage, etc.)\n- Hautinspektion (Roetung, Dekubitus-Zeichen)\n\nWichtig: Sturzrisikoerfassung bei Aufnahme UND regelmaessig im Verlauf!",
      glossarBegriffe: ["Sturzprotokoll", "Mobilisationsplan", "Positionierung"],
    },
    contentB1: {
      title: "Was musst du aufschreiben?",
      body: "Es gibt 3 wichtige Dokumente:\n\n1. Mobilisationsplan\n- Was ist das Ziel?\n- Welche Schritte?\n- Welche Hilfsmittel?\n\n2. Sturzprotokoll (nach jedem Sturz!)\n- Wann ist der Patient gestuerzt?\n- Wo?\n- Wie ist es passiert?\n- Ist er verletzt?\n- Was hast du gemacht?\n\n3. Positionierungsprotokoll\n- Wie oft umlagern?\n- Welche Position?\n- Wie sieht die Haut aus?",
      glossarBegriffe: ["Sturzprotokoll", "Mobilisation"],
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — Branching Sturzprotokoll
  // =============================================================
  {
    stepId: "le06-s7-tb14-06",
    phase: "s7",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.400", "Q3"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Herr Schmidt ist gestuerzt",
      body: "Nachtdienst, 2:30 Uhr. Die Sensormatte hat nicht ausgeloest. Du findest Herr Schmidt neben dem Bett auf dem Boden. Er haelt sich das rechte Knie. 'Ich wollte nur zur Toilette...'",
      fallbezug: "Herr Schmidt, 56 Jahre, Hemiplegie rechts, Sturzrisiko erhoeht.",
    },
    contentB1: {
      title: "Herr Schmidt ist gefallen",
      body: "Es ist 2:30 Uhr nachts. Herr Schmidt liegt auf dem Boden neben dem Bett. Er haelt sein Knie fest. Er sagt: 'Ich wollte nur zur Toilette.'",
      fallbezug: "Herr Schmidt, Schlaganfall, Sturzrisiko.",
    },
    question: {
      fragetext: "Herr Schmidt ist nachts gestuerzt. Was dokumentierst du?",
      branchingOptions: [
        {
          text: "Vollstaendiges Sturzprotokoll: Datum/Uhrzeit, Ort (neben Bett, Zimmer 8), Hergang (wollte zur Toilette, Sensormatte defekt), Verletzungen (Knieprellung rechts), Vitalzeichen, Massnahmen (Kuehlung, Arzt informiert, Sensormatte geprueft), Angehoerige informiert.",
          feedback: "Exzellent! Das ist ein vollstaendiges Sturzprotokoll nach DNQP-Standard. Du hast alle relevanten Informationen erfasst: Wann, Wo, Wie, Verletzungen, Vitalzeichen, Massnahmen und Information. Besonders gut: Du hast auch die defekte Sensormatte dokumentiert.",
          feedbackB1: "Sehr gut! Du hast alles aufgeschrieben: Wann, Wo, Wie, Verletzung, was du gemacht hast. Das ist richtig!",
          isCorrect: true,
        },
        {
          text: "Kurzer Vermerk: 'Patient gestuerzt. Keine sichtbaren Verletzungen.'",
          feedback: "Viel zu wenig! Ein Sturzprotokoll muss umfassend sein: Datum, Uhrzeit, Ort, Hergang, Verletzungen (Knie!), Vitalzeichen, Massnahmen, wer wurde informiert. Ausserdem hat Herr Schmidt eine Knieprellung — 'keine sichtbaren Verletzungen' stimmt nicht.",
          feedbackB1: "Das ist zu wenig! Du musst viel mehr aufschreiben. Und Herr Schmidt HAT eine Verletzung am Knie!",
          isCorrect: false,
        },
        {
          text: "Erstmal abwarten ob der Sturz Folgen hat. Morgen frueh dokumentieren.",
          feedback: "Gefaehrlich! Ein Sturz muss SOFORT dokumentiert werden — nicht am naechsten Morgen. Zeitverzoegerte Dokumentation kann rechtliche Konsequenzen haben. Ausserdem muss der Arzt sofort informiert werden (moegliche innere Verletzungen, Kniefraktur).",
          feedbackB1: "Nein! Du musst sofort aufschreiben, was passiert ist. Sofort! Und den Arzt anrufen!",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 16: ANWENDUNG — Freetext Sturzprotokoll
  // =============================================================
  {
    stepId: "le06-s7-tb14-07",
    phase: "s7",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.400", "Q3"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Sturzprotokoll schreiben",
      body: "Erstelle ein vollstaendiges Sturzprotokoll fuer Herrn Schmidts naechtlichen Sturz. Beruecksichtige alle relevanten Punkte: Datum/Uhrzeit, Ort, Hergang, Verletzungen, Vitalzeichen, Massnahmen, Information.",
      fallbezug: "Herr Schmidt, 56 Jahre, Hemiplegie rechts. Sturz um 2:30 Uhr nachts, neben dem Bett, auf dem Weg zur Toilette. Knieprellung rechts. Sensormatte hat nicht ausgeloest.",
    },
    contentB1: {
      title: "Schreibe das Sturzprotokoll",
      body: "Herr Schmidt ist nachts gefallen. Schreibe auf, was passiert ist. Benutze die Satzanfaenge.",
      fallbezug: "Herr Schmidt ist um 2:30 Uhr nachts gefallen. Er wollte zur Toilette. Er hat eine Prellung am rechten Knie.",
    },
    question: {
      fragetext: "Erstelle ein Sturzprotokoll fuer Herrn Schmidts Sturz.",
      musterantwort: "Sturzprotokoll: Datum 15.04.2026, Uhrzeit 02:30 Uhr. Ort: Zimmer 8, neben dem Bett auf dem Boden. Hergang: Patient wollte selbststaendig zur Toilette gehen. Sensormatte hat nicht ausgeloest. Patient auf dem Boden neben Bett vorgefunden, bei Bewusstsein. Verletzungen: Prellung rechtes Knie, Schwellung und Druckschmerz. Keine offene Wunde. Vitalzeichen: RR 145/85, Puls 88, wach und orientiert. Massnahmen: Kuehlung rechtes Knie, Arzt telefonisch informiert (Dr. Mueller, 02:45 Uhr), Roentgen Knie angeordnet. Sensormatte geprueft — Batterie leer, ausgetauscht. Bettseitenteile besprochen — Patient lehnt ab. Nachtlicht eingeschaltet, Urinflasche ans Bett gestellt. Sohn morgens informiert.",
      bewertungskriterien: [
        "Datum und Uhrzeit angegeben",
        "Ort praezise beschrieben",
        "Hergang mit Ursache (Toilettengang, Sensormatte defekt)",
        "Verletzungen dokumentiert (Knieprellung)",
        "Vitalzeichen erhoben",
        "Massnahmen aufgelistet (Kuehlung, Arzt, Roentgen)",
        "Information an Arzt und Angehoerige",
      ],
      satzanfaengeB1: [
        "Datum und Uhrzeit: ...",
        "Ort: Der Patient lag ...",
        "Was ist passiert: Er wollte ...",
        "Verletzungen: Am rechten Knie ...",
        "Das habe ich gemacht: ...",
        "Ich habe informiert: ...",
      ],
    },
  },

  // =============================================================
  // Step 17: INTERLEAVING — LE-03 Kinaesthetik begruenden
  // =============================================================
  {
    stepId: "le06-s7-sn-02",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345", "Q1 S.348"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Rueckblick: Warum spiralig?",
      body: "Du hast Liam (8 Monate) ueber die Seite aufgehoben statt parallel. Eine Kollegin sagt: 'Das macht doch keinen Unterschied.'",
    },
    contentB1: {
      title: "Warum ueber die Seite?",
      body: "Du hast Baby Liam ueber die Seite hochgehoben. Eine Kollegin sagt: 'Egal wie man das macht.'",
    },
    question: {
      fragetext: "Wie begruendest du, dass du Liam ueber die Seite aufgehoben hast statt parallel?",
      optionen: [
        {
          text: "Spiralige Bewegung ist natuerlicher, verursacht weniger vestibulare Reizung und unterstuetzt die Eigenbewegung des Kindes",
          isCorrect: true,
          explanation: "Richtig! Spiralige Bewegung nutzt 2 Achsen und ist leichter als parallele Bewegung. Bei Saeuglingen ist dies besonders wichtig, da paralleles Hochheben den Vestibularapparat ueberreizt und die Eigenbewegung blockiert.",
          explanationB1: "Richtig! Ueber die Seite ist besser fuer das Baby. Es ist natuerlicher und das Baby kann mithelfen.",
        },
        {
          text: "Es sieht professioneller aus",
          isCorrect: false,
          explanation: "Professionelles Aussehen ist nicht der Grund. Die Begruendung ist biomechanisch: Spiralige Bewegungen nutzen 2 Achsen, sind leichter und natuerlicher. Bei Saeuglingen vermeiden sie vestibulare Ueberreizung.",
          explanationB1: "Nicht weil es besser aussieht. Es ist besser fuer das Baby.",
        },
        {
          text: "Es ist schneller",
          isCorrect: false,
          explanation: "Geschwindigkeit ist nicht der Grund. Im Gegenteil — kinaesthetisches Handling braucht etwas mehr Zeit. Der Vorteil ist die physiologische Qualitaet der Bewegung und die geringere Belastung fuer Kind und Pflegekraft.",
          explanationB1: "Nein, nicht schneller. Aber besser fuer das Baby.",
        },
        {
          text: "Es gibt keinen Unterschied, die Kollegin hat recht",
          isCorrect: false,
          explanation: "Doch, es gibt einen erheblichen Unterschied! Paralleles Hochheben blockiert die Eigenbewegung, belastet den Vestibularapparat und ist fuer die Pflegekraft anstrengender. Kinaesthetik Infant Handling ist evidenzbasiert.",
          explanationB1: "Nein, es gibt einen Unterschied! Ueber die Seite ist viel besser.",
        },
      ],
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Timer Schnellfragen S1-S7
  // =============================================================
  {
    stepId: "le06-s7-sn-03",
    phase: "s7",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-372", "Q2 S.392-444"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Schnellrunde: Alles auf einen Blick",
      body: "8 Fragen in 60 Sekunden — ein Mix aus allen bisherigen Sessions. Wie schnell bist du?",
    },
    contentB1: {
      title: "Schnellrunde!",
      body: "8 Fragen in 60 Sekunden. Wie viele schaffst du?",
    },
    question: {
      fragetext: "Beantworte so viele Fragen wie moeglich!",
      timeLimitSeconds: 60,
      timerQuestions: [
        {
          question: "Wie viele Massen hat der Koerper laut Kinaesthetik?",
          options: ["5", "7", "9", "3"],
          correctIndex: 1,
        },
        {
          question: "Welche Bewegung ist bei der Mobilisation zu bevorzugen?",
          options: ["Parallele", "Spiralige", "Beide gleich", "Keine"],
          correctIndex: 1,
        },
        {
          question: "TUG-Test: Ab wie vielen Sekunden gilt erhoehtes Sturzrisiko?",
          options: ["5 Sekunden", "10 Sekunden", "20 Sekunden", "30 Sekunden"],
          correctIndex: 2,
        },
        {
          question: "Welche Positionierung bei Dekubitusprophylaxe?",
          options: ["Rückenlage flach", "30-Grad-Seitenlage", "Bauchlage", "Sitzposition"],
          correctIndex: 1,
        },
        {
          question: "Virchow-Trias: Wie viele Risikofaktoren fuer Thrombose?",
          options: ["2", "3", "4", "5"],
          correctIndex: 1,
        },
        {
          question: "Bobath: Auf welcher Seite steht der Nachttisch bei Hemiplegie rechts?",
          options: ["Links", "Rechts (betroffene Seite)", "Egal", "Hinter dem Bett"],
          correctIndex: 1,
        },
        {
          question: "Kontraktur am Fuss heisst?",
          options: ["Plattfuss", "Spitzfuss", "Senkfuss", "Spreizfuss"],
          correctIndex: 1,
        },
        {
          question: "Schlafmittel bei Sturzrisiko sind...?",
          options: ["Erste Wahl", "Letztes Mittel", "Immer verboten", "Harmlos"],
          correctIndex: 1,
        },
      ],
    },
  },

  // =============================================================
  // Step 19: PRAXIS-DIALOG — Interprofessionelles Team-Meeting
  // =============================================================
  {
    stepId: "le06-s7-tb14-08",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-III",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "Team-Meeting: Herr Schmidts Mobilisationsplan",
      body: "Interprofessionelles Team-Meeting. Anwesend: Du (Pflegeschuelerin), Physiotherapeutin Frau Klein, Stationsarzt Dr. Mueller. Thema: Herr Schmidts Mobilisationsplan nach dem naechtlichen Sturz.",
    },
    contentB1: {
      title: "Besprechung: Herr Schmidt",
      body: "Team-Besprechung. Du, die Physiotherapeutin und der Arzt sprechen ueber Herr Schmidt.",
    },
    question: {
      fragetext: "Die Physiotherapeutin fragt: 'Wie sieht es pflegerisch aus? Was koennen Sie uns berichten?'",
      patientName: "Physiotherapeutin Frau Klein",
      dialogPhases: [
        {
          context: "Frau Klein (Physiotherapeutin) schaut dich an: 'Sie betreuen Herrn Schmidt. Wie sieht es pflegerisch aus? Barthel-Index, Motivation, besondere Beobachtungen?'",
          contextB1: "Die Physiotherapeutin fragt: 'Wie geht es Herrn Schmidt? Was hast du beobachtet?'",
          speaker: "Physiotherapeutin",
          options: [
            {
              text: "Barthel-Index aktuell 45, Motivation schwankend — er verweigert immer wieder Uebungen fuer die rechte Hand. Letzte Nacht Sturz beim Toilettengang, Knieprellung rechts. Kontrakturrisiko rechter Arm steigt. Ich schlage vor: Bobath konsequent, Motivationsgespraech und Sensormatte pruefen.",
              textB1: "Barthel-Index 45. Er will oft nicht ueben. Letzte Nacht ist er gestuerzt. Ich denke: Bobath weitermachen, mit ihm sprechen, Sensormatte pruefen.",
              patientResponse: "Danke fuer die ausfuehrliche Einschaetzung! Das Kontrakturrisiko am rechten Arm sehe ich auch. Wir koennten die Uebungen in den Alltag einbauen — zum Beispiel beim Essen die rechte Hand einbeziehen.",
              patientResponseB1: "Danke! Das ist sehr hilfreich. Wir machen die Uebungen beim Essen — rechte Hand einbeziehen.",
              score: 3,
              feedback: "Hervorragend! Du bringst konkrete Daten (Barthel-Index), Beobachtungen (Motivation, Sturz) und Vorschlaege (Bobath, Sensormatte) ein. Das ist interprofessionelle Zusammenarbeit auf hohem Niveau.",
              feedbackB1: "Super! Du sagst konkrete Zahlen und Beobachtungen. Das ist sehr professionell.",
            },
            {
              text: "Naja, er ist halt schwierig. Macht nicht mit. Gestern ist er auch noch gestuerzt.",
              textB1: "Er macht nicht mit. Und gestern ist er gestuerzt.",
              patientResponse: "Koennen Sie das genauer beschreiben? Barthel-Index? Welche Uebungen verweigert er? Sturzhergang?",
              patientResponseB1: "Koennen Sie mir mehr sagen? Was genau passiert?",
              score: 1,
              feedback: "Zu vage! In einem interprofessionellen Meeting brauchst du konkrete Daten: Barthel-Index, welche Uebungen genau, Sturzprotokoll. 'Schwierig' und 'macht nicht mit' sind keine fachlichen Aussagen.",
              feedbackB1: "Zu wenig! Sage genau: Barthel-Index, welche Uebungen, was beim Sturz passiert ist.",
            },
            {
              text: "Ich habe das Sturzprotokoll geschrieben. Den Rest koennen Sie im System nachlesen.",
              textB1: "Ich habe alles aufgeschrieben. Lesen Sie es im Computer.",
              patientResponse: "Im Meeting ist muendlicher Austausch wichtig. Koennen Sie uns trotzdem kurz zusammenfassen?",
              patientResponseB1: "Bitte sagen Sie es uns kurz muendlich.",
              score: 1,
              feedback: "Dokumentation ist wichtig, aber im interprofessionellen Meeting ist der direkte Austausch der Kern. Deine Pflegeperspektive — Beobachtungen, Einschaetzungen, Vorschlaege — kann niemand anders einbringen.",
              feedbackB1: "Im Meeting musst du muendlich berichten. Nicht nur auf den Computer verweisen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 20: REFLEXION — Wichtigste Erkenntnis
  // =============================================================
  {
    stepId: "le06-s7-tb14-09",
    phase: "s7",
    stepType: "reflection",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Deine wichtigste Erkenntnis",
      body: "Du hast in 7 Sessions viel ueber Mobilitaet gelernt. Jetzt geht es um dich: Was nimmst du mit?",
    },
    contentB1: {
      title: "Was hast du gelernt?",
      body: "Du hast viel gelernt. Was war am wichtigsten fuer dich?",
    },
    question: {
      fragetext: "Was war fuer dich in den letzten 7 Sessions die wichtigste Erkenntnis ueber Mobilisation? Nenne eine Situation aus deiner Praxis, wo du das anwenden koenntest.",
      reflection: {
        prompt: "Was war fuer dich in den letzten 7 Sessions die wichtigste Erkenntnis ueber Mobilisation? Nenne eine Situation aus deiner Praxis, wo du das anwenden koenntest.",
        placeholder: "Fuer mich war die wichtigste Erkenntnis, dass...",
        systemPrompt: "Der Schueler reflektiert ueber 7 Sessions zum Thema Mobilitaet (Kinaesthetik, Positionierung, Prophylaxen, Bobath, Transfer, Kommunikation, Dokumentation). Bewerte: Wird ein konkretes Beispiel genannt? Wird Praxisbezug hergestellt? Ist die Reflexion ehrlich und tiefgehend? Reagiere mit dem Sandwich-Prinzip: Loben, korrigieren, ermutigen.",
      },
    },
  },

  // =============================================================
  // Step 21: REFLEXION — Konfidenz-Kalibrierung
  // =============================================================
  {
    stepId: "le06-s7-tb14-10",
    phase: "s7",
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Wie sicher bist du?",
      body: "Schaetze deine Sicherheit in den 5 Themenbereichen ein. Sei ehrlich — die naechste Session ist die Pruefungsvorbereitung!",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Wie gut kennst du die 5 Themen? Sei ehrlich!",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich in diesen Bereichen?",
      selfratingVariant: "rubrik",
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 7
  // =============================================================
  {
    stepId: "le06-s7-tb14-11",
    phase: "s7",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q1 S.360-368", "Q2 S.400"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "audio:zusammenfassung",
    contentC1: {
      title: "Session 7 — Zusammenfassung",
      body: "Du hast heute drei unterschaetzte Faktoren kennengelernt:\n\n1. Kommunikation: Eindeutige Richtungsangaben, Schritt-fuer-Schritt, vor JEDER Mobilisation das Ziel besprechen\n2. Schlafhygiene: Stoerfaktoren erfassen, individuelle Gewohnheiten, Schlafmittel als LETZTES Mittel\n3. Dokumentation: Mobilisationsplan, Sturzprotokoll, Positionierungsprotokoll\n\nAusserdem: Interprofessionelle Zusammenarbeit — deine Pflegeperspektive ist unersetzlich!\n\nNaechste Session: Grosses Finale! Neuer Patient, Pruefungssimulation, alles zusammen.",
    },
    contentB1: {
      title: "Session 7 — Das hast du gelernt",
      body: "Heute hast du 3 Dinge gelernt:\n\n1. Wie du mit dem Patienten sprichst (eindeutig, Schritt fuer Schritt)\n2. Warum Schlaf wichtig ist (keine Schlaftabletten ohne Grund!)\n3. Was du aufschreiben musst (3 verschiedene Protokolle)\n\nNaechste Session: Alles zusammen! Neuer Patient und Pruefungsvorbereitung.",
    },
    question: {
      fragetext: "Zusammenfassung Session 7",
      summary: {
        reflexionRueckbezug: "Kommunikation, Schlaf und Dokumentation — drei Faktoren die den Unterschied zwischen guter und exzellenter Pflege machen.",
        kernaussagen: [
          "Eindeutige Sprache bei Mobilisation: Kopfende statt oben, Einzelschritte statt Ketten",
          "Schlafhygiene: Stoerfaktoren erfassen, Medikamente als letztes Mittel (Sturzrisiko!)",
          "3 Dokumentations-Typen: Mobilisationsplan, Sturzprotokoll, Positionierungsprotokoll",
          "Interprofessionelle Zusammenarbeit: Pflegeperspektive aktiv einbringen",
          "Naechste Session: Pruefungsvorbereitung mit neuem Patienten (Frau Weber, Parkinson)",
        ],
      },
    },
  },
];
