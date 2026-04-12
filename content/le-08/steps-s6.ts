// Session 6: "Prüfungsreif — Alles zusammen" — LE 08 Menschen aller Altersstufen bei der Ernährung unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// Prüfungssession: Neuer Transfer-Patient Maria Petrov (68, Apoplex, Hemiparese, Dysphagie)
// Bloom: B3-B6, min 25% B5/B6, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S6: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — In Medias Res: Neue Patientin Maria Petrov
  // =============================================================
  {
    stepId: "le08-s6-tb3-01",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411, 455-456"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Neue Patientin: Maria Petrov",
      body: "Prüfungssimulation. Du beginnst deine Frühschicht auf der neurologischen Station. Neue Patientin: Maria Petrov, 68 Jahre, Apoplex vor 5 Tagen, Hemiparese rechts. Sie verschluckt sich regelmäßig beim Trinken. BMI 19,1 (72 kg, 1,68 m). Lebt allein, keine Angehörigen vor Ort. Der Arzt fragt dich: 'Was ist Ihr Pflegeplan?'",
    },
    contentB1: {
      title: "Neue Patientin: Frau Petrov",
      body: "Neue Patientin: Frau Petrov, 68 Jahre. Schlaganfall vor 5 Tagen. Sie kann die rechte Seite nicht gut bewegen. Sie verschluckt sich beim Trinken. Sie wiegt 72 Kilo. Sie wohnt allein.",
    },
    question: {
      fragetext: "Der Arzt fragt: 'Was ist als Erstes zu tun?' Wie antwortest du?",
      patientName: "Arzt",
      dialogPhases: [
        {
          context: "Frau Petrov liegt im Bett. Der Arzt steht an der Tür und wartet auf deine Antwort. Die Frühstückstabletts werden gerade verteilt.",
          contextB1: "Frau Petrov liegt im Bett. Der Arzt fragt dich. Das Frühstück kommt gerade.",
          speaker: "Arzt",
          options: [
            {
              text: "Zuerst führe ich ein Ernährungs-Screening durch — NRS 2002, da wir im Krankenhaus sind. Dann prüfe ich die Schluckfähigkeit: Logopädin hinzuziehen. Bis dahin keine dünnflüssigen Getränke.",
              textB1: "Zuerst mache ich einen Ernährungstest (NRS 2002). Dann prüfe ich, ob sie schlucken kann. Bis dahin kein dünnes Trinken.",
              patientResponse: "Gut strukturiert. Machen Sie das. Und dokumentieren Sie bitte alles — Gewicht, Essprotokoll, Flüssigkeitsbilanz.",
              patientResponseB1: "Gut. Machen Sie das. Schreiben Sie alles auf.",
              score: 3,
              feedback: "Ausgezeichnet! Du zeigst klinisches Denken: Screening (NRS 2002 im KH!), Schluckdiagnostik durch Logopädin, und Vorsichtsmaßnahmen bis zur Abklärung.",
              feedbackB1: "Sehr gut! Du weißt: Im Krankenhaus den NRS 2002 machen. Und die Logopädin fragen, ob die Patientin schlucken kann.",
            },
            {
              text: "Ich gebe ihr erstmal das Frühstück und schaue, wie sie isst.",
              textB1: "Ich gebe ihr Frühstück und schaue.",
              patientResponse: "Moment — sie verschluckt sich regelmäßig! Wenn Sie ihr dünnflüssigen Kaffee geben und sie aspiriert, haben wir ein Problem.",
              patientResponseB1: "Warten Sie! Sie verschluckt sich! Kein dünnes Trinken ohne Prüfung!",
              score: 1,
              feedback: "Gefährlich! Bei bekannter Schluckstörung darf man nicht einfach normales Essen/Trinken geben. Erst Schluckdiagnostik, dann passende Kostform und Konsistenz festlegen.",
              feedbackB1: "Vorsicht! Frau Petrov verschluckt sich. Du darfst ihr nicht einfach normales Trinken geben. Erst prüfen!",
            },
            {
              text: "Ich berechne den BMI und bestelle eine MNA-Testung.",
              textB1: "Ich rechne den BMI aus und mache einen MNA-Test.",
              patientResponse: "BMI-Berechnung ist gut. Aber warum MNA? Frau Petrov ist 68 und im Krankenhaus — welches Screening passt besser?",
              patientResponseB1: "BMI ist gut. Aber MNA ist für alte Menschen im Pflegeheim. Im Krankenhaus benutzt man den NRS 2002!",
              score: 2,
              feedback: "Guter Ansatz mit BMI! Aber MNA ist für geriatrische Settings (≥ 65 Jahre, Pflegeheim). Im Krankenhaus ist der NRS 2002 das Standard-Screening — unabhängig vom Alter!",
              feedbackB1: "BMI ausrechnen ist gut! Aber MNA ist für das Pflegeheim. Im Krankenhaus benutzt man den NRS 2002.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ANWENDUNG — MC: Assessment-Wahl (Transferleistung)
  // =============================================================
  {
    stepId: "le08-s6-tb3-02",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Assessment-Wahl bei Frau Petrov",
      body: "Frau Petrov ist 68 Jahre alt und wurde ins Krankenhaus aufgenommen. Welches Ernährungs-Assessment führst du durch?",
    },
    contentB1: {
      title: "Welchen Test bei Frau Petrov?",
      body: "Frau Petrov ist 68 und liegt im Krankenhaus. Welchen Ernährungstest machst du?",
    },
    question: {
      fragetext: "Welches Assessment ist richtig?",
      mcVariant: "fallstrick",
      optionen: [
        {
          text: "NRS 2002",
          isCorrect: true,
          explanation: "Richtig! Im Krankenhaus wird IMMER der NRS 2002 verwendet — egal wie alt der Patient ist. Der MNA ist für geriatrische Settings (Pflegeheim, geriatrische Station), nicht fürs allgemeine Krankenhaus.",
          explanationB1: "Richtig! Im Krankenhaus benutzt man den NRS 2002. Das gilt für alle Patienten, egal wie alt.",
        },
        {
          text: "MNA (weil sie 68 ist = geriatrisch)",
          isCorrect: false,
          explanation: "Vorsicht — Fallstrick! Alter 68 verleitet zu MNA, aber entscheidend ist das SETTING, nicht das Alter. MNA = Pflegeheim/geriatrische Station. NRS 2002 = Krankenhaus. Frau Petrov ist im Krankenhaus!",
          explanationB1: "Vorsicht! MNA ist NICHT fürs Krankenhaus. Auch wenn Frau Petrov schon älter ist — im Krankenhaus benutzt man den NRS 2002.",
        },
        {
          text: "STRONGkids",
          isCorrect: false,
          explanation: "STRONGkids ist für Kinder (1-18 Jahre) im Krankenhaus. Frau Petrov ist 68 — hier ist der NRS 2002 das richtige Screening.",
          explanationB1: "STRONGkids ist für Kinder. Frau Petrov ist 68 Jahre alt. Für sie: NRS 2002.",
        },
        {
          text: "Nur BMI berechnen reicht",
          isCorrect: false,
          explanation: "BMI allein reicht NICHT! Er ist verfälscht bei Ödemen, Amputationen, Dehydratation. Der DNQP-Expertenstandard fordert ein standardisiertes Screening (NRS 2002 im KH) bei jedem Patienten bei Aufnahme.",
          explanationB1: "BMI allein reicht nicht! Er zeigt nicht alles. Man braucht auch den NRS 2002 Test.",
        },
      ],
      erklaerung: "Merke: Das Setting bestimmt das Assessment! Krankenhaus = NRS 2002. Pflegeheim/Geriatrie = MNA. Kinder im KH = STRONGkids.",
      erklaerungB1: "Merke: Krankenhaus = NRS 2002. Pflegeheim = MNA. Kinder = STRONGkids.",
    },
  },

  // =============================================================
  // Step 3: ANWENDUNG — Calculation: BMI + Flüssigkeitsbedarf + Klinik
  // =============================================================
  {
    stepId: "le08-s6-tb3-03",
    phase: "s6",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 452-453, 459"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "BMI und Flüssigkeitsbedarf berechnen",
      body: "Frau Petrov: 72 kg, 1,68 m. Berechne den BMI. Beachte: Sie hat eine leichte Herzinsuffizienz — was bedeutet das für den Flüssigkeitsbedarf?",
    },
    contentB1: {
      title: "BMI ausrechnen",
      body: "Frau Petrov wiegt 72 kg und ist 1,68 m groß. Rechne den BMI aus. Achtung: Ihr Herz ist schwach — was heißt das fürs Trinken?",
    },
    question: {
      fragetext: "Berechne den BMI von Frau Petrov (72 kg, 1,68 m). Runde auf eine Dezimalstelle.",
      calculation: {
        instruction: "BMI = Gewicht (kg) / Größe² (m). Berechne: 72 / (1,68 × 1,68).",
        formula: "BMI = 72 / (1,68)² = 72 / 2,82",
        correctValue: 25.5,
        unit: "kg/m²",
        tolerance: 0.3,
        explanation: "BMI = 72 / (1,68)² = 72 / 2,8224 = 25,5 → Übergewicht (25,0-29,9). ABER: BMI allein sagt nicht alles! Frau Petrov hat eine Herzinsuffizienz → Einfuhrbeschränkung prüfen! 'Viel trinken' ist hier möglicherweise GEFÄHRLICH (Lungenödem-Risiko). Immer ärztliche Anordnung zur Flüssigkeitsmenge einholen!",
        explanationB1: "BMI = 72 geteilt durch (1,68 mal 1,68) = 25,5. Das ist leichtes Übergewicht. Aber Achtung: Frau Petrov hat ein schwaches Herz! Sie darf vielleicht nicht viel trinken. Immer den Arzt fragen!",
      },
    },
  },

  // =============================================================
  // Step 4: ANWENDUNG — Branching: Dysphagie-Management (mehrstufig)
  // =============================================================
  {
    stepId: "le08-s6-tb5-01",
    phase: "s6",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456, 472-475"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Frau Petrov verschluckt sich!",
      body: "Beim Mittagessen verschluckt sich Frau Petrov am Wasser. Sie hustet heftig. Was tust du?",
    },
    contentB1: {
      title: "Frau Petrov verschluckt sich!",
      body: "Frau Petrov trinkt Wasser und hustet stark. Was machst du?",
    },
    question: {
      fragetext: "Was ist die richtige Reaktion?",
      branching: {
        situation: "Frau Petrov trinkt einen Schluck Wasser und beginnt heftig zu husten. Ihr Gesicht wird rot. Du stehst direkt neben ihr.",
        situationB1: "Frau Petrov trinkt Wasser und hustet sehr stark. Ihr Gesicht ist rot.",
        options: [
          {
            text: "Ich stelle den Oberkörper höher, passe die Konsistenz an (Wasser andicken) und kontaktiere die Logopädin für eine Schluckdiagnostik.",
            textB1: "Ich stelle das Bett höher. Ich verdicke das Wasser. Ich rufe die Logopädin.",
            outcome: "Die Logopädin bestätigt: Dysphagie Grad II. Alle Flüssigkeiten müssen angedickt werden, feste Nahrung passiert. Du erstellst den Pflegeplan und dokumentierst alles.",
            outcomeB1: "Die Logopädin sagt: Frau Petrov hat eine Schluckstörung. Alle Getränke müssen dicker gemacht werden. Du schreibst alles auf.",
            score: 3,
          },
          {
            text: "Ich hole schnell einen Schnabelbecher — der ist auslaufsicher.",
            textB1: "Ich hole einen Schnabelbecher.",
            outcome: "STOPP! Der Schnabelbecher erzwingt eine Kopfüberstreckung → der Kehldeckel öffnet sich → Aspirationsgefahr steigt MASSIV! Bei Dysphagie ist der Schnabelbecher verboten. Strohhalm oder Glas mit Nasenausschnitt sind die sicheren Alternativen.",
            outcomeB1: "STOPP! Der Schnabelbecher ist gefährlich! Er zwingt den Kopf nach hinten. Dann kann Wasser in die Lunge kommen. Besser: Strohhalm!",
            score: 0,
          },
          {
            text: "Ich stoppe das Essen sofort und rufe den Arzt an.",
            textB1: "Ich stoppe alles und rufe den Arzt.",
            outcome: "Das Essen zu stoppen ist richtig, den Arzt zu rufen auch. Aber du hättest auch selbst Sofortmaßnahmen einleiten können: Oberkörper höher, Konsistenz anpassen, Logopädin hinzuziehen. Als Pflegekraft kannst du eigenständig handeln!",
            outcomeB1: "Essen stoppen und Arzt rufen ist nicht falsch. Aber du kannst auch selbst helfen: Bett höher stellen, Wasser dicker machen. Du musst nicht auf den Arzt warten!",
            score: 2,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: ANWENDUNG — Errorspot: Pflegebericht (alle Schülerfehler)
  // =============================================================
  {
    stepId: "le08-s6-tb4-01",
    phase: "s6",
    stepType: "errorspot",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 472-476"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fehler im Pflegebericht — Frau Petrov",
      body: "Der folgende Pflegebericht enthält 4 Fehler. Finde sie alle!",
    },
    contentB1: {
      title: "4 Fehler finden!",
      body: "In diesem Pflegebericht sind 4 Fehler. Finde alle!",
    },
    question: {
      fragetext: "Tippe auf die Fehler!",
      errorspot: {
        instruction: "Finde die 4 Fehler im Pflegebericht über Frau Petrov.",
        text: "Patientin aß mit Hilfe. Schnabelbecher verwendet da praktisch. Medikamente im Joghurt versteckt weil sie die Tabletten verweigerte. Oberkörper nach Essen sofort flach gelegt. Verschiedene Konsistenzen im Teller gemischt.",
        errors: [
          {
            start: 26,
            end: 60,
            correction: "KEIN Schnabelbecher! Erzwingt Kopfüberstreckung → Aspirationsgefahr. Strohhalm oder Glas mit Nasenausschnitt verwenden.",
            explanation: "Der Schnabelbecher ist bei Dysphagie verboten! Er erzwingt eine Kopfüberstreckung, bei der sich der Kehldeckel öffnet. Das erhöht die Aspirationsgefahr massiv.",
            explanationB1: "Der Schnabelbecher ist gefährlich! Er zwingt den Kopf nach hinten. Dann kann Trinken in die Lunge kommen. Benutze einen Strohhalm!",
          },
          {
            start: 62,
            end: 118,
            correction: "Medikamente NIEMALS ohne Wissen des Patienten im Essen verstecken! Das ist Körperverletzung (§ 223 StGB).",
            explanation: "Medikamente im Essen zu verstecken ist rechtlich eine Körperverletzung — auch bei Verweigerung, auch 'im besten Interesse'. Alternativen: Saftform, Schmelztablette, Arzt konsultieren.",
            explanationB1: "Medizin im Essen verstecken ist verboten! Das ist eine Straftat. Auch wenn die Patientin die Tabletten nicht nehmen will. Frage den Arzt nach einer anderen Form.",
          },
          {
            start: 120,
            end: 157,
            correction: "Oberkörper nach dem Essen noch 20 Minuten ERHÖHT lassen! Aspirationsprophylaxe!",
            explanation: "Nach dem Essen muss der Oberkörper mindestens 20 Minuten erhöht bleiben. Flach legen direkt nach dem Essen → Reflux → Aspirationsgefahr!",
            explanationB1: "Nach dem Essen den Oberkörper noch 20 Minuten oben lassen! Sofort flach legen ist gefährlich. Das Essen kann zurück in den Hals kommen.",
          },
          {
            start: 159,
            end: 203,
            correction: "Verschiedene Konsistenzen NIEMALS mischen! Aspirationsgefahr bei Dysphagie!",
            explanation: "Bei Dysphagie-Patienten dürfen verschiedene Konsistenzen nicht gemischt werden. Suppe und Kartoffeln zusammen auf einem Löffel = Aspirationsgefahr, weil die Flüssigkeit schneller in den Rachen fließt.",
            explanationB1: "Verschiedene Konsistenzen nicht mischen! Suppe und Kartoffeln zusammen auf dem Löffel ist gefährlich. Immer nur eine Art Essen auf einmal.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: ANWENDUNG — Sequencing: Sondennahrung komplett
  // =============================================================
  {
    stepId: "le08-s6-tb6-01",
    phase: "s6",
    stepType: "sequencing",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Sondennahrung: Der komplette Ablauf",
      body: "Bringe alle 8 Schritte der Sondennahrung-Verabreichung in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Nahrung über die Sonde: 8 Schritte",
      body: "Bringe die 8 Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Sortiere die 8 Schritte der Sondennahrungsgabe!",
      sequencing: {
        instruction: "Bringe alle Schritte in die richtige Reihenfolge — von oben nach unten.",
        items: [
          { id: "seq1", label: "Hände desinfizieren" },
          { id: "seq2", label: "Patientin informieren" },
          { id: "seq3", label: "Oberkörper auf ≥ 30° erhöhen" },
          { id: "seq4", label: "Lagekontrolle: Aspirat-pH prüfen" },
          { id: "seq5", label: "Markierung an der Sonde kontrollieren" },
          { id: "seq6", label: "Sondennahrung anschließen" },
          { id: "seq7", label: "Laufrate einstellen" },
          { id: "seq8", label: "Sonde mit 30-50 ml Wasser spülen" },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: CHECKPOINT — Timer: Blitz-Quiz (TB1-TB9 Mix)
  // =============================================================
  {
    stepId: "le08-s6-bk-02",
    phase: "s6",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 449-476"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Blitz-Quiz: Ernährung komplett",
      body: "8 Fragen aus ALLEN Themenblöcken. 20 Sekunden pro Frage. Zeig was du weißt!",
    },
    contentB1: {
      title: "Schnell-Quiz: Alles über Ernährung",
      body: "8 Fragen. 20 Sekunden pro Frage. Wie viele schaffst du?",
    },
    question: {
      fragetext: "Bereit? Los!",
      timerVariant: "blitz",
      timeLimitSeconds: 160,
      timerQuestions: [
        {
          question: "Wie viele Phasen hat der Schluckakt?",
          options: ["2", "3", "4", "5"],
          correctIndex: 1,
        },
        {
          question: "Welcher Makronährstoff liefert 9 kcal/g?",
          options: ["Kohlenhydrate", "Proteine", "Fette", "Ballaststoffe"],
          correctIndex: 2,
        },
        {
          question: "Was droht bei zu schneller Wiederernährung?",
          options: ["Refeeding-Syndrom", "Adipositas", "Obstipation", "Exsikkose"],
          correctIndex: 0,
        },
        {
          question: "Welche Trinkhilfe ist bei Dysphagie verboten?",
          options: ["Strohhalm", "Nasenausschnittglas", "Schnabelbecher", "Andickungsmittel"],
          correctIndex: 2,
        },
        {
          question: "Wann ist eine PEG statt Magensonde indiziert?",
          options: ["Nach 1 Woche", "Nach 4 Wochen", "Sofort bei Dysphagie", "Nie"],
          correctIndex: 1,
        },
        {
          question: "Auf welcher Perzentile liegt eine Gedeihstörung?",
          options: ["Unter 3.", "Unter 10.", "Unter 25.", "Unter 50."],
          correctIndex: 0,
        },
        {
          question: "Was gehört NICHT zur Flüssigkeitsbilanz-Einfuhr?",
          options: ["Infusion", "Sondennahrung-Wasser", "Stuhlgang", "Orale Flüssigkeit"],
          correctIndex: 2,
        },
        {
          question: "Welche Kostform bei terminaler Krebserkrankung?",
          options: ["Leichte Vollkost", "Flüssigkost", "Wunschkost", "Diabeteskost"],
          correctIndex: 2,
        },
      ],
    },
  },

  // =============================================================
  // Step 8: ANWENDUNG — Freetext: Pflegeplan (Bloom B5)
  // =============================================================
  {
    stepId: "le08-s6-tb3-04",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411, 455-456, 472-476"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Pflegeplan für Frau Petrov",
      body: "Erstelle einen Pflegeplan: 3 Pflegediagnosen mit je einem Ziel und 2 Maßnahmen.",
    },
    contentB1: {
      title: "Pflegeplan schreiben",
      body: "Schreibe 3 Pflegeprobleme auf. Für jedes Problem: 1 Ziel und 2 Maßnahmen.",
    },
    question: {
      fragetext: "Erstelle einen Pflegeplan für Frau Petrov (68, Apoplex, Dysphagie, BMI 19,1). Themen: Aspiration, Mangelernährung, Selbstversorgungsdefizit Essen.",
      freetext: {
        prompt: "Schreibe 3 Pflegediagnosen mit je einem Ziel und 2 Maßnahmen. Nutze die Satzanfänge als Struktur.",
        promptB1: "Schreibe 3 Probleme auf. Für jedes Problem: Was ist das Ziel? Was machst du? (2 Dinge pro Problem).",
        satzanfaenge: [
          "Pflegediagnose 1: Aspirationsgefahr...",
          "Ziel: ...",
          "Maßnahme 1: ...",
          "Maßnahme 2: ...",
          "Pflegediagnose 2: Mangelernährung...",
          "Pflegediagnose 3: Selbstversorgungsdefizit Essen...",
        ],
        systemPrompt: "Bewerte den Pflegeplan nach: 1) Aspirationsgefahr: Ziel z.B. 'Keine Aspiration', Maßnahmen z.B. Oberkörper hoch, Konsistenz anpassen, kein Schnabelbecher, Logopädin. 2) Mangelernährung: Ziel z.B. 'Gewichtsstabilisierung', Maßnahmen z.B. NRS 2002, hochkalorische Trinknahrung, Essprotokoll, 6 kleine Mahlzeiten. 3) Selbstversorgungsdefizit: Ziel z.B. 'Größtmögliche Selbstständigkeit', Maßnahmen z.B. Hilfsmittel (Griffverdickung), von betroffener Seite anreichen, aktivierende Pflege. Sandwich-Prinzip. Auch teilrichtige Antworten positiv bewerten.",
      },
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG — Crossword: Fachbegriffe gesamt
  // =============================================================
  {
    stepId: "le08-s6-bk-03",
    phase: "s6",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-476"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    contentC1: {
      title: "Kreuzworträtsel: Ernährungs-Fachbegriffe",
      body: "10 Fachbegriffe aus der gesamten LE-08. Nutze die Hinweise!",
    },
    contentB1: {
      title: "Kreuzworträtsel: Fachwörter",
      body: "10 Fachwörter. Die Hinweise helfen dir!",
    },
    question: {
      fragetext: "Fülle das Kreuzworträtsel aus!",
      crosswordWords: [
        { word: "DYSPHAGIE", clue: "Schluckstörung — wenn man sich leicht verschluckt" },
        { word: "PERISTALTIK", clue: "Wellenförmige Darmbewegung die Nahrung transportiert" },
        { word: "ASPIRATION", clue: "Wenn Nahrung in die Lunge gelangt" },
        { word: "MALNUTRITION", clue: "Mangelernährung — zu wenig Nährstoffe" },
        { word: "EXSIKKOSE", clue: "Austrocknung des Körpers — stehende Hautfalten" },
        { word: "REFEEDING", clue: "Syndrom bei zu schneller Wiederernährung" },
        { word: "SARKOPENIE", clue: "Muskelschwund im Alter" },
        { word: "BILANZIERUNG", clue: "Einfuhr minus Ausfuhr von Flüssigkeit" },
        { word: "KOSTFORM", clue: "Art der Nahrungszubereitung je nach Krankheit" },
        { word: "ANDICKUNG", clue: "Flüssigkeiten dicker machen bei Schluckstörung" },
      ],
    },
  },

  // =============================================================
  // Step 10: ANWENDUNG — MC: Ethik-Transfer (Herr Bergmann)
  // =============================================================
  {
    stepId: "le08-s6-tb8-01",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179; DNQP 2017a"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Wer entscheidet bei Herrn Bergmann?",
      body: "Herr Bergmann (84, Demenz, PEG). Seine Frau möchte, dass er Kuchen isst. Die Logopädin sagt: stille Aspiration.",
    },
    contentB1: {
      title: "Wer entscheidet?",
      body: "Herr Bergmann hat Demenz und eine Sonde. Seine Frau will, dass er Kuchen isst. Die Logopädin sagt: zu gefährlich.",
    },
    question: {
      fragetext: "Wer entscheidet über das weitere Vorgehen?",
      optionen: [
        {
          text: "Interprofessionelles Team (Arzt, Pflege, Logopädin) + Betreuer nach mutmaßlichem Patientenwillen",
          isCorrect: true,
          explanation: "Richtig! Die Entscheidung wird gemeinsam getroffen: Arzt, Pflege, Logopädin und der Betreuer (oder die Bevollmächtigte). Der mutmaßliche Wille des Patienten hat Vorrang — nicht der Wunsch der Ehefrau.",
          explanationB1: "Richtig! Alle zusammen entscheiden: Arzt, Pflege, Logopädin und der Betreuer. Was der Patient gewollt hätte, ist am wichtigsten.",
        },
        {
          text: "Die Ehefrau allein, weil sie die nächste Angehörige ist",
          isCorrect: false,
          explanation: "Die Ehefrau hat zwar ein Mitspracherecht, aber sie entscheidet nicht allein. Entscheidend ist der mutmaßliche Wille des Patienten (Patientenverfügung) und die gemeinsame Beratung im Team.",
          explanationB1: "Die Ehefrau darf mitreden. Aber sie entscheidet nicht allein. Was der Patient wollte, ist wichtiger.",
        },
        {
          text: "Der Arzt allein",
          isCorrect: false,
          explanation: "Nein! Ethische Entscheidungen in der Pflege sind IMMER interdisziplinär. Die Pflege kennt den Patienten im Alltag am besten und hat eine eigene Stimme in der Fallbesprechung.",
          explanationB1: "Nein! Der Arzt entscheidet nicht allein. Alle im Team reden mit. Auch die Pflege!",
        },
        {
          text: "Die Pflegekraft allein, weil sie den Patienten am besten kennt",
          isCorrect: false,
          explanation: "Die Pflegekraft hat eine wichtige Stimme, entscheidet aber nicht allein. Ethische Fragen werden im interprofessionellen Team besprochen.",
          explanationB1: "Die Pflegekraft redet mit. Aber sie entscheidet nicht allein. Alle zusammen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 11: ANWENDUNG — Branching: Angehörigen-Beratung Frau Petrov (B5)
  // =============================================================
  {
    stepId: "le08-s6-tb8-02",
    phase: "s6",
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 175, 179"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Frau Petrovs Tochter fordert: 'Zwingen Sie sie!'",
      body: "Die Tochter von Frau Petrov kommt zu Besuch: 'Meine Mutter isst nichts mehr! Bitte zwingen Sie sie!'",
    },
    contentB1: {
      title: "Die Tochter will Zwang",
      body: "Die Tochter sagt: 'Meine Mutter isst nicht! Zwingen Sie sie!'",
    },
    question: {
      fragetext: "Was antwortest du der Tochter?",
      branching: {
        situation: "Frau Petrovs Tochter ist aufgelöst. Ihre Mutter hat heute nur 3 Löffel Suppe gegessen. Die Tochter fordert, dass du eingreifst.",
        situationB1: "Die Tochter ist aufgeregt. Ihre Mutter hat fast nichts gegessen. Sie will, dass du etwas tust.",
        options: [
          {
            text: "Ich verstehe Ihre Sorge. Wir machen uns auch Sorgen. Aber zuerst müssen wir herausfinden WARUM Ihre Mutter nicht isst. Hat sie Schmerzen? Schmeckt ihr das Essen nicht? Ist die Schluckstörung schlimmer geworden? Es gibt immer einen Grund.",
            textB1: "Ich verstehe Ihre Sorge. Aber zuerst müssen wir herausfinden warum Ihre Mutter nicht isst. Hat sie Schmerzen? Schmeckt es nicht?",
            outcome: "Die Tochter beruhigt sich: 'Stimmt, sie hat gestern über Schmerzen im Mund geklagt.' Du inspizierst den Mundraum: Stomatitis! Daher die Nahrungsverweigerung. Problem erkannt, Lösung möglich.",
            outcomeB1: "Die Tochter sagt: 'Stimmt, sie hatte Mundschmerzen!' Du schaust in den Mund: Entzündung! Das ist der Grund. Jetzt kannst du helfen.",
            score: 3,
          },
          {
            text: "Ihre Mutter hat das Recht, das Essen abzulehnen. Wir können sie nicht zwingen.",
            textB1: "Ihre Mutter darf 'Nein' sagen. Wir können sie nicht zwingen.",
            outcome: "Rechtlich korrekt, aber du hast die Ursachensuche übersprungen! Erst wenn ALLE behandelbaren Ursachen ausgeschlossen sind, kann es eine autonome Entscheidung sein. Schmerzen, Mundstatus, Medikamente prüfen!",
            outcomeB1: "Das stimmt. Aber du hast nicht gefragt WARUM sie nicht isst! Vielleicht hat sie Schmerzen. Immer zuerst die Ursache suchen!",
            score: 2,
          },
          {
            text: "Natürlich. Ich werde darauf achten, dass sie mehr isst.",
            textB1: "Okay, ich passe besser auf.",
            outcome: "STOPP! Zwangsernährung ist im Pflegeheim und Krankenhaus nicht erlaubt (nur in der Psychiatrie unter eng definierten Bedingungen und richterlicher Genehmigung). Und: Du hast nicht nach der Ursache gefragt!",
            outcomeB1: "STOPP! Du darfst niemanden zum Essen zwingen! Und du hast nicht gefragt, warum sie nicht isst!",
            score: 0,
          },
        ],
      },
    },
    wusstestDuDas: "Die häufigste Ursache für plötzliche Nahrungsverweigerung im Krankenhaus ist NICHT mangelnder Appetit, sondern Schmerzen (Mund, Magen), Medikamenten-Nebenwirkungen oder eine verschlechterte Schluckfähigkeit.",
  },

  // =============================================================
  // Step 12: ANWENDUNG — Estimation: Eiweißbedarf (Snack)
  // =============================================================
  {
    stepId: "le08-s6-tb3-05",
    phase: "s6",
    stepType: "estimation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411, 452"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Wie viel Eiweiß braucht Frau Petrov?",
      body: "Frau Petrov wiegt 72 kg. Proteinbedarf zur Sarkopenie-Prävention: 0,8-1,5 g/kg KG/Tag.",
    },
    contentB1: {
      title: "Wie viel Eiweiß?",
      body: "Frau Petrov wiegt 72 Kilo. Wie viel Eiweiß braucht sie jeden Tag?",
    },
    question: {
      fragetext: "Schätze: Wie viel Gramm Eiweiß braucht Frau Petrov mindestens pro Tag?",
      estimation: {
        instruction: "Schiebe den Regler auf deine Schätzung. Proteinbedarf: 0,8-1,5 g pro kg Körpergewicht.",
        unit: "g",
        correctValue: 86,
        tolerance: 25,
        funFact: "Ein Ei hat nur ca. 6 g Eiweiß. Frau Petrov bräuchte also mindestens 10 Eier pro Tag, nur für den Proteinbedarf!",
        explanation: "Proteinbedarf: 0,8-1,5 g/kg × 72 kg = 58-108 g/Tag. Mittelwert ca. 86 g. Bei Sarkopenie-Risiko (wie bei immobilen Patienten nach Apoplex) eher am oberen Ende: 1,2-1,5 g/kg.",
        explanationB1: "Eiweiß: 0,8 bis 1,5 Gramm pro Kilo. Bei 72 Kilo: 58 bis 108 Gramm pro Tag. Ein Ei hat nur 6 Gramm! Man braucht also sehr viel Eiweiß.",
      },
    },
  },

  // =============================================================
  // Step 13: ANWENDUNG — Tablefillin: Bilanz Frau Petrov (B4)
  // =============================================================
  {
    stepId: "le08-s6-tb9-01",
    phase: "s6",
    stepType: "tablefillin",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 462-463"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-bilanz",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Bilanz berechnen: Frau Petrov",
      body: "Einfuhr: 500 ml oral, 1000 ml Infusion, 200 ml Sondenspülung. Ausfuhr: 1800 ml Urin, 300 ml Erbrechen. Berechne die Bilanz und entscheide: Was tust du?",
    },
    contentB1: {
      title: "Bilanz rechnen: Frau Petrov",
      body: "Rein: 500 ml getrunken, 1000 ml Infusion, 200 ml Spülwasser. Raus: 1800 ml Urin, 300 ml Erbrechen. Wie ist die Bilanz?",
    },
    question: {
      fragetext: "Fülle die Lücken aus und bestimme die Bilanz!",
      tablefillin: {
        instruction: "Berechne die Gesamteinfuhr, Gesamtausfuhr und die Bilanz.",
        headers: ["Position", "Menge (ml)"],
        rows: [
          [
            { value: "Orale Flüssigkeit", isBlank: false },
            { value: "500", isBlank: false },
          ],
          [
            { value: "Infusion", isBlank: false },
            { value: "1000", isBlank: false },
          ],
          [
            { value: "Sondenspülung", isBlank: false },
            { value: "200", isBlank: false },
          ],
          [
            { value: "GESAMTEINFUHR", isBlank: false },
            { value: "1700", isBlank: true, options: ["1500", "1700", "2000", "1200"] },
          ],
          [
            { value: "Urin", isBlank: false },
            { value: "1800", isBlank: false },
          ],
          [
            { value: "Erbrechen", isBlank: false },
            { value: "300", isBlank: false },
          ],
          [
            { value: "GESAMTAUSFUHR", isBlank: false },
            { value: "2100", isBlank: true, options: ["1800", "2100", "2300", "1500"] },
          ],
          [
            { value: "BILANZ", isBlank: false },
            { value: "-400", isBlank: true, options: ["+400", "-400", "+700", "-200"] },
          ],
        ],
      },
    },
  },

  // =============================================================
  // Step 14: INTERLEAVING — MC: Prophylaxen (LE-06 Querverbindung)
  // =============================================================
  {
    stepId: "le08-s6-tb3-06",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Querverbindung: Prophylaxen bei Immobilität + Mangelernährung",
      body: "Frau Petrov ist immobil (Hemiparese) und mangelernährt (BMI 19,1, Gewichtsverlust). Welche Prophylaxen sind besonders wichtig?",
    },
    contentB1: {
      title: "Welche Vorbeugung braucht Frau Petrov?",
      body: "Frau Petrov kann sich kaum bewegen und isst zu wenig. Welche Vorbeugung ist besonders wichtig?",
    },
    question: {
      fragetext: "Welche Prophylaxen sind bei Frau Petrov BESONDERS wichtig?",
      optionen: [
        {
          text: "Dekubitusprophylaxe + Thromboseprophylaxe",
          isCorrect: true,
          explanation: "Richtig! Immobilität + Mangelernährung = doppeltes Risiko. Mangelernährung senkt die Gewebetoleranz (→ Dekubitus!) und die Immobilität erhöht das Thromboserisiko. Beide Prophylaxen sind hier Pflicht!",
          explanationB1: "Richtig! Frau Petrov kann sich nicht bewegen und isst zu wenig. Das macht Druckstellen (Dekubitus) und Blutgerinnsel (Thrombose) besonders gefährlich.",
        },
        {
          text: "Nur Thromboseprophylaxe",
          isCorrect: false,
          explanation: "Thromboseprophylaxe ist richtig, aber nicht allein! Mangelernährung ist ein Risikofaktor für Dekubitus — die Gewebetoleranz sinkt. Beide Prophylaxen sind nötig.",
          explanationB1: "Thrombose-Vorbeugung ist richtig. Aber auch Dekubitus-Vorbeugung! Wer zu wenig isst, bekommt leichter Druckstellen.",
        },
        {
          text: "Nur Dekubitusprophylaxe",
          isCorrect: false,
          explanation: "Dekubitusprophylaxe ist richtig, aber Frau Petrov ist auch thrombosegefährdet (Immobilität nach Apoplex). Beide Prophylaxen müssen durchgeführt werden.",
          explanationB1: "Dekubitus-Vorbeugung ist richtig. Aber auch Thrombose-Vorbeugung! Wer sich nicht bewegt, bekommt leichter Blutgerinnsel.",
        },
        {
          text: "Keine besonderen Prophylaxen nötig",
          isCorrect: false,
          explanation: "Falsch! Bei Immobilität + Mangelernährung sind Prophylaxen Pflicht. Das Risiko für Dekubitus, Thrombose und Pneumonie ist deutlich erhöht.",
          explanationB1: "Falsch! Frau Petrov braucht Vorbeugung. Sie kann sich nicht bewegen und isst zu wenig. Das ist gefährlich.",
        },
      ],
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — Hotspot: PEG-Einstichstelle inspizieren
  // =============================================================
  {
    stepId: "le08-s6-tb6-02",
    phase: "s6",
    stepType: "hotspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 466-468"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    bildhinweis: "PEG-Einstichstelle am Bauch: Rötung (ca. 2 cm Durchmesser) um die Einstichstelle, gelbliches Sekret sichtbar, Halteplatte sitzt direkt auf der Haut (zu fest). Klares Bild mit 3 markierbaren Problemzonen.",
    contentC1: {
      title: "PEG-Einstichstelle: Was ist auffällig?",
      body: "Du inspizierst Herrn Bergmanns PEG-Einstichstelle. Markiere alle Befunde, die du dokumentierst und dem Arzt meldest.",
    },
    contentB1: {
      title: "Was ist hier falsch?",
      body: "Du schaust dir die Stelle am Bauch an, wo die Sonde ist. Markiere alles, was nicht in Ordnung ist.",
    },
    question: {
      fragetext: "Markiere alle auffälligen Befunde!",
      hotspot: {
        imageUrl: "/images/content/le-08/peg-einstichstelle.svg",
        imageAlt: "PEG-Einstichstelle mit Rötung, Sekret und zu fest sitzender Halteplatte",
        instruction: "Tippe auf alle Stellen, die du dem Arzt melden würdest.",
        zones: [
          { id: "z1", x: 50, y: 40, radius: 15, label: "Rötung 2 cm" },
          { id: "z2", x: 55, y: 55, radius: 10, label: "Gelbliches Sekret" },
          { id: "z3", x: 50, y: 65, radius: 12, label: "Halteplatte zu fest auf der Haut" },
        ],
      },
    },
  },

  // =============================================================
  // Step 16: ANWENDUNG — Matrix: Assessment-Zuordnung (B4)
  // =============================================================
  {
    stepId: "le08-s6-tb3-07",
    phase: "s6",
    stepType: "matrix",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Assessment-Matrix: Wer bekommt welchen Test?",
      body: "Ordne die Assessments in die richtige Zelle der Matrix.",
    },
    contentB1: {
      title: "Welcher Test für wen?",
      body: "Ordne die Tests in die richtige Stelle.",
    },
    question: {
      fragetext: "Ziehe die Assessments in das richtige Feld!",
      matrix: {
        instruction: "Ordne jedes Assessment dem richtigen Quadranten zu.",
        axisX: { label: "Alter", low: "Kinder", high: "Erwachsene" },
        axisY: { label: "Setting", low: "Ambulant/Heim", high: "Krankenhaus" },
        items: [
          { id: "m1", text: "NRS 2002", correctQuadrant: 2 },
          { id: "m2", text: "MNA", correctQuadrant: 1 },
          { id: "m3", text: "STRONGkids", correctQuadrant: 4 },
          { id: "m4", text: "Perzentilenkurve", correctQuadrant: 3 },
        ],
      },
    },
  },

  // =============================================================
  // Step 17: ANWENDUNG — Conceptmap: Zusammenhänge (Bloom B5)
  // =============================================================
  {
    stepId: "le08-s6-tb3-08",
    phase: "s6",
    stepType: "conceptmap",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-476"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Zusammenhänge erkennen",
      body: "Verbinde die Konzepte mit den richtigen Beziehungen. Wie hängt alles zusammen?",
    },
    contentB1: {
      title: "Wie hängt alles zusammen?",
      body: "Verbinde die Begriffe mit der richtigen Verbindung.",
    },
    question: {
      fragetext: "Ziehe Verbindungen zwischen den Konzepten!",
      conceptmap: {
        instruction: "Verbinde die Knoten mit der passenden Beziehung.",
        nodes: [
          { id: "n1", label: "Mangelernährung", fixed: true },
          { id: "n2", label: "Sarkopenie", fixed: true },
          { id: "n3", label: "Dekubitus", fixed: true },
          { id: "n4", label: "Dysphagie", fixed: true },
          { id: "n5", label: "Aspiration", fixed: true },
          { id: "n6", label: "Dehydratation", fixed: true },
          { id: "n7", label: "Refeeding-Syndrom", fixed: true },
          { id: "n8", label: "PEG", fixed: true },
        ],
        correctConnections: [
          { from: "n1", to: "n2", label: "führt zu" },
          { from: "n2", to: "n3", label: "Risikofaktor für" },
          { from: "n4", to: "n5", label: "verursacht" },
          { from: "n4", to: "n1", label: "führt zu" },
          { from: "n1", to: "n6", label: "oft zusammen mit" },
          { from: "n7", to: "n1", label: "Komplikation bei" },
          { from: "n8", to: "n4", label: "Alternative bei" },
        ],
        availableLabels: ["führt zu", "verursacht", "Risikofaktor für", "oft zusammen mit", "Komplikation bei", "Alternative bei"],
      },
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Freetext: Ethische Stellungnahme (Bloom B6)
  // =============================================================
  {
    stepId: "le08-s6-tb8-03",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 6,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 175, 179; DNQP 2017a"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-ethik-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Deine pflegerische Stellungnahme: Frau Petrov",
      body: "Du bist in einer ethischen Fallbesprechung zu Frau Petrov. Sie verweigert zunehmend die Nahrung. Die Tochter fordert eine PEG. Der Arzt ist unsicher.",
    },
    contentB1: {
      title: "Was empfiehlst du?",
      body: "Frau Petrov isst immer weniger. Die Tochter will eine Sonde. Der Arzt fragt dich: Was empfiehlst du?",
    },
    question: {
      fragetext: "Formuliere in 5-6 Sätzen deine pflegerische Stellungnahme: Was empfiehlst du für Frau Petrov und warum?",
      freetext: {
        prompt: "Schreibe deine pflegerische Stellungnahme. Berücksichtige: Ursachensuche (warum isst sie nicht?), Patientenrechte, Evidenz, und was DU als nächsten Schritt empfiehlst.",
        promptB1: "Was empfiehlst du? Warum isst Frau Petrov nicht? Was sind ihre Rechte? Was schlägst du vor? Schreibe 4-5 Sätze.",
        satzanfaenge: [
          "Bevor wir über eine PEG entscheiden...",
          "Frau Petrov hat das Recht...",
          "Meiner Einschätzung als Pflegekraft nach...",
          "Als nächsten Schritt empfehle ich...",
        ],
        systemPrompt: "Bewerte die Stellungnahme nach Bloom B6 (Erschaffen): 1) Ursachensuche BEVOR PEG-Entscheidung (Mundstatus, Schmerzen, Medikamente, Depression, Schluckstörung verschlechtert?), 2) Patientenrechte (Nahrungsverweigerung ist ein Recht), 3) Evidenz (erst alle behandelbaren Ursachen ausschließen), 4) Konkreter Vorschlag (z.B. Mundinspektion, Logopädin erneut, Diätassistentin, Schmerzassessment). Besonders gut: Wenn der Schüler den Zusammenhang zur Stomatitis aus Step 11 herstellt. Sandwich-Prinzip.",
      },
    },
  },

  // =============================================================
  // Step 19: ANWENDUNG — Dialog: Baby Emre Abschluss (positiv)
  // =============================================================
  {
    stepId: "le08-s6-tb7-01",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 5,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Gute Nachrichten von Baby Emre!",
      body: "Einen Monat später ruft Ayşe Demir in der Kinderarztpraxis an: 'Emre nimmt zu! Die Stillberatung hat geholfen!'",
      fallbezug: "Leitfall B: Positiver Abschluss — Stillberatung als pflegerischer Erfolg.",
    },
    contentB1: {
      title: "Emre nimmt zu!",
      body: "Ayşe ruft an: 'Emre nimmt zu! Die Hilfe beim Stillen hat geholfen!'",
      fallbezug: "Gute Nachricht: Baby Emre wird gesund, weil die Stillberatung geholfen hat.",
    },
    question: {
      fragetext: "Ayşe fragt: 'Was war der Schlüssel? Warum hat es jetzt geklappt?' Was antwortest du?",
      patientName: "Ayşe Demir (telefonisch)",
      dialogPhases: [
        {
          context: "Ayşe klingt erleichtert am Telefon. Emre hat in einem Monat 600 g zugenommen. Er liegt jetzt auf der 10. Perzentile.",
          contextB1: "Ayşe ist glücklich. Emre wiegt mehr. Er wächst jetzt normal.",
          speaker: "Ayşe Demir",
          options: [
            {
              text: "Die Stillberatung hat Ihnen geholfen, die richtige Anlegetechnik zu lernen. Und die zusätzliche Pre-Nahrung hat Emre die Energie gegeben, die er brauchte. Sie haben das toll gemacht — SIE haben Emre ernährt, nicht wir.",
              textB1: "Die Stillberatung hat geholfen. Und die Extra-Milch hat Emre stärker gemacht. Sie haben das toll gemacht!",
              patientResponse: "Danke! Und nächsten Monat fangen wir mit dem Brei an, oder? Den Gemüsebrei, wie Sie gesagt haben.",
              patientResponseB1: "Danke! Ab wann bekommt er Brei?",
              score: 3,
              feedback: "Wunderbar! Du bestätigst die Kompetenz der Mutter (Empowerment), erklärst den Erfolg und stärkst ihr Selbstvertrauen. Genau so funktioniert gute Beratung.",
              feedbackB1: "Sehr gut! Du machst der Mutter Mut. Du sagst ihr: Sie hat es geschafft! Das stärkt ihr Selbstvertrauen.",
            },
            {
              text: "Es lag an der Pre-Nahrung. Ohne die hätte es nicht geklappt.",
              textB1: "Die Flaschenmilch hat geholfen.",
              patientResponse: "Also war meine Milch doch nicht gut genug?",
              patientResponseB1: "Also war meine Milch schlecht?",
              score: 1,
              feedback: "Vorsicht! Du weckst wieder Schuldgefühle. Die Pre-Nahrung war eine ERGÄNZUNG. Die Stillberatung hat die Technik verbessert. Beide Maßnahmen zusammen waren der Schlüssel.",
              feedbackB1: "Vorsicht! So denkst die Mutter wieder, sie hat etwas falsch gemacht. Beides hat geholfen: Stillberatung UND Extra-Milch.",
            },
            {
              text: "Sie hatten Glück. Bei manchen Kindern klappt es einfach nicht.",
              textB1: "Sie hatten Glück.",
              patientResponse: "Glück? Ich dachte, die Beratung hat geholfen?",
              patientResponseB1: "Glück? Ich dachte, die Hilfe hat funktioniert?",
              score: 0,
              feedback: "Nein! Das war kein Glück, sondern das Ergebnis professioneller Stillberatung und gezielter Ernährungsintervention. Als Pflegekraft solltest du den Erfolg eurer Maßnahmen anerkennen!",
              feedbackB1: "Nein! Das war nicht Glück. Die Beratung und die Hilfe haben geholfen. Das war gute Pflege!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 20: REFLEXION — Transfer-Reflexion (Bloom B5)
  // =============================================================
  {
    stepId: "le08-s6-bk-04",
    phase: "s6",
    stepType: "reflection",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 408-476"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-demenz-ernaehrung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Was nimmst du mit?",
      body: "In dieser LE hast du 3 ganz verschiedene Situationen erlebt: Frau Kramer (Dysphagie), Baby Emre (Gedeihstörung) und Herr Bergmann (Demenz/PEG).",
    },
    contentB1: {
      title: "Was nimmst du mit in die Praxis?",
      body: "Du hast 3 verschiedene Patienten kennengelernt: Frau Kramer (Schluckproblem), Baby Emre (nimmt nicht zu), Herr Bergmann (Demenz und Sonde).",
    },
    question: {
      fragetext: "Welche Situation hat dich am meisten berührt? Was nimmst du für die Praxis mit?",
      reflection: {
        prompt: "Reflektiere: Welche der 3 Situationen (Kramer/Emre/Bergmann) hat dich am meisten berührt? Was hast du gelernt, das du auf Station anwenden wirst?",
        placeholder: "Am meisten hat mich berührt...",
        systemPrompt: "Transfer-Reflexion über die gesamte LE. Es gibt keine falsche Antwort. Wertschätze ehrliche Selbstreflexion. Bestätige die emotionale Komponente der Pflege. Wenn der Schüler konkrete Handlungsabsichten nennt (z.B. 'Ich werde immer den Mundstatus prüfen bevor ich Nahrungsverweigerung akzeptiere'), besonders positiv hervorheben.",
      },
    },
  },

  // =============================================================
  // Step 21: REFLEXION — Selfrating: Prüfungsreife (rubrik-Variante)
  // =============================================================
  {
    stepId: "le08-s6-bk-05",
    phase: "s6",
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-476"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Prüfungsreife-Check: Ernährung",
      body: "Schätze dich ehrlich ein: Wie sicher fühlst du dich?",
    },
    contentB1: {
      title: "Wie sicher fühlst du dich?",
      body: "Schätze dich ein. Sei ehrlich!",
    },
    question: {
      fragetext: "Bewerte dich selbst.",
      selfratingVariant: "rubrik",
      bewertungskriterien: [
        "Ich kann den BMI berechnen und die Ergebnisse interpretieren.",
        "Ich kenne die Aspirationsprophylaxe und weiß warum der Schnabelbecher verboten ist.",
        "Ich kann eine Flüssigkeitsbilanz erstellen und auswerten.",
        "Ich weiß, wann eine PEG indiziert ist und wann eine Magensonde.",
        "Ich kenne die Rechte des Patienten bei Nahrungsverweigerung.",
        "Ich fühle mich prüfungsbereit für das Thema Ernährung.",
      ],
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary: Gesamtabschluss LE-08
  // =============================================================
  {
    stepId: "le08-s6-bk-06",
    phase: "s6",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-476; DNQP 2017a"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "LE-08 — Gesamtzusammenfassung",
      body: "6 Sessions, 3 Leitfälle, 42 Fachbegriffe. Du hast es geschafft!",
    },
    contentB1: {
      title: "Alles geschafft!",
      body: "6 Lerneinheiten, 3 Patienten, 42 Fachwörter. Du hast viel gelernt!",
    },
    question: {
      fragetext: "Die Top 10 der LE-08 — dein Ernährungs-Wissen kompakt!",
      summary: {
        reflexionRueckbezug: "Du hast die gesamte LE-08 geschafft — 6 Sessions, 3 Leitfälle, 42 Fachbegriffe. Als Nächstes kommt LE-09: Ausscheidung. Vieles baut direkt auf dem auf, was du hier gelernt hast — besonders die Flüssigkeitsbilanz.",
        kernaussagen: [
          "Schluckakt: 3 Phasen (oral, pharyngeal, ösophageal) — wenn eine Phase gestört ist → Dysphagie.",
          "Schnabelbecher = NEIN! Erzwingt Kopfüberstreckung → Aspirationsgefahr. Strohhalm oder Nasenausschnittglas.",
          "BMI allein reicht NICHT zur Ernährungseinschätzung. Gewichtsverläufe und Assessments (NRS 2002, MNA) sind besser.",
          "Lagekontrolle IMMER vor jeder Sondengabe! Aspirat pH < 5,5.",
          "Refeeding-Syndrom: Bei schwerer Mangelernährung LANGSAM steigern! Nie sofort volle Kalorien.",
          "Kein Honig unter 2 Jahren — Botulismus-Gefahr!",
          "PEG bei fortgeschrittener Demenz verlängert NICHT die Lebenszeit (Cochrane Review).",
          "Patientenrechte: Nahrungsverweigerung respektieren. Medikamente NIE heimlich im Essen.",
          "Kultursensible Ernährung: Religiöse Vorschriften sind kein Sonderwunsch!",
          "Basale Stimulation: Geschmack auf Lippen tupfen = Genuss ohne Aspirationsrisiko.",
        ],
      },
    },
  },
];
