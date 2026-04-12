// Session 3: "Sicher auf den Beinen" — LE 06 Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB5: Sturzprophylaxe (KB-I, I-11, I-12) + TB6: Barthel-Index & Assessment (KB-I, I-17, KB-V V-03)
// Leitfall: Frau Becker (79, Hüft-TEP, Tag 3) + Interleaving LE-04 (FEM)
// Bloom: B2-B3, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // =============================================================
  // Step 1: BRÜCKE — Recall S2 (Prüfungs-MC)
  // =============================================================
  {
    stepId: "le06-s3-bk-01",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351", "Q4"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "BRÜCKE",
    tag: "pflege",
    contentC1: {
      title: "Kurzer Recall aus Session 2",
      body: "Prüfungsformat: Welche Positionierung entlastet den Trochanter major?",
    },
    contentB1: {
      title: "Erinnerst du dich?",
      body: "Welche Lagerung entlastet den Trochanter (Hüftknochen an der Seite)?",
    },
    question: {
      fragetext: "Bei welcher Positionierung wird der Trochanter major entlastet?",
      optionen: [
        {
          text: "30°-Seitenlage",
          isCorrect: true,
          explanation: "Richtig! Die 30°-Seitenlage entlastet gezielt den Trochanter major UND das Kreuzbein. Sie ist die Standard-Position zur Dekubitusprophylaxe.",
          explanationB1: "Richtig! Bei der 30°-Seitenlage liegt der Patient schräg. Der Hüftknochen wird nicht gedrückt.",
        },
        {
          text: "90°-Seitenlage",
          isCorrect: false,
          explanation: "Falsch. Bei der 90°-Seitenlage liegt der Patient direkt AUF dem Trochanter — das erhöht den Druck statt ihn zu entlasten.",
          explanationB1: "Nein. Bei 90° liegt der Patient genau auf dem Hüftknochen. Das ist schlecht.",
        },
        {
          text: "Rückenlage flach",
          isCorrect: false,
          explanation: "Falsch. In Rückenlage wird das Kreuzbein/Steißbein belastet, nicht der Trochanter entlastet.",
          explanationB1: "Nein. In Rückenlage drückt es auf das Steißbein.",
        },
        {
          text: "Bauchlage",
          isCorrect: false,
          explanation: "Falsch. Bauchlage wird vor allem bei ARDS auf der Intensivstation eingesetzt — nicht zur Trochanter-Entlastung.",
          explanationB1: "Nein. Bauchlage ist für die Intensivstation, nicht zur Druckentlastung am Hüftknochen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 2: SZENE — Frau Becker Tag 3 will allein zur Toilette
  // =============================================================
  {
    stepId: "le06-s3-tb5-01",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q3"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Frau Becker will allein zur Toilette",
      body: "Tag 3 nach der Hüft-TEP. Frau Becker hat genug vom Bett und will zum ersten Mal allein aufstehen.",
      fallbezug: "Frau Becker (79 Jahre, Hüft-TEP). Bisher immer mit Unterstützung mobilisiert.",
    },
    contentB1: {
      title: "Frau Becker steht allein auf",
      body: "Tag 3 nach der Hüft-OP. Frau Becker will allein zur Toilette gehen.",
      fallbezug: "Frau Becker (79 Jahre) hat eine neue Hüfte. Bisher hatte sie immer Hilfe beim Aufstehen.",
    },
    question: {
      fragetext: "Du kommst ins Zimmer. Frau Becker steht schwankend neben dem Bett und hält sich am Nachttisch fest.",
      patientName: "Frau Becker",
      dialogPhases: [
        {
          context: "Frau Becker steht schwankend neben dem Bett. Sie hält sich mit einer Hand am Nachttisch fest. 'Ich wollte nur zur Toilette. Ich schaff das schon allein!'",
          contextB1: "Frau Becker steht unsicher neben dem Bett. Sie hält sich am Nachttisch fest. 'Ich will nur zur Toilette!'",
          speaker: "Frau Becker",
          options: [
            {
              text: "Ich stütze Sie und begleite Sie zur Toilette. Lassen Sie mich Ihnen den Rollator holen.",
              textB1: "Ich helfe Ihnen. Ich hole den Rollator.",
              patientResponse: "Na gut... aber ich bin doch nicht gebrechlich! Naja, mit dem Rollator geht es vielleicht besser.",
              patientResponseB1: "Ok... Mit dem Rollator ist es vielleicht einfacher.",
              score: 3,
              feedback: "Perfekt! Du sicherst die Patientin ab, bietest Hilfsmittel an und respektierst ihren Wunsch nach Selbstständigkeit. Das ist kinästhetisch korrekt: Unterstützen, nicht übernehmen.",
              feedbackB1: "Sehr gut! Du hilfst und gibst ihr den Rollator. Du nimmst ihr nichts ab, sondern unterstützt sie.",
            },
            {
              text: "Frau Becker, bitte setzen Sie sich sofort wieder hin! Das ist viel zu gefährlich!",
              textB1: "Setzen Sie sich hin! Das ist zu gefährlich!",
              patientResponse: "Aber ich muss doch zur Toilette! Wollen Sie mich einsperren?",
              patientResponseB1: "Aber ich muss zur Toilette! Ich will nicht im Bett bleiben!",
              score: 1,
              feedback: "Verständlich, dass du dir Sorgen machst. Aber kategorisch verbieten verletzt die Autonomie. Besser: Sichern, begleiten und Hilfsmittel anbieten.",
              feedbackB1: "Du machst dir Sorgen, das ist gut. Aber verbieten ist nicht richtig. Besser: Helfen und begleiten.",
            },
            {
              text: "Ich rufe schnell eine Kollegin, Sie sollten nicht allein stehen!",
              textB1: "Warten Sie! Ich hole eine Kollegin!",
              patientResponse: "Jetzt muss ich auch noch warten... Ich stehe doch schon!",
              patientResponseB1: "Ich stehe doch schon! Warum soll ich warten?",
              score: 2,
              feedback: "Kollegin rufen ist nicht falsch, aber Frau Becker steht bereits. Jetzt weggehen erhöht das Sturzrisiko. Besser: Direkt stabilisieren und begleiten.",
              feedbackB1: "Hilfe holen ist okay. Aber Frau Becker steht schon. Weggehen ist jetzt gefährlich. Besser: Sofort helfen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Sturzrisikofaktoren (DNQP)
  // =============================================================
  {
    stepId: "le06-s3-tb5-02",
    phase: "s3",
    stepType: "text",
    displayFormat: "news",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q3"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "DNQP warnt: Jeder 3. über 65 stürzt mindestens 1x pro Jahr",
      body: "**Sturzrisikofaktoren** nach dem DNQP-Expertenstandard Sturzprophylaxe (2013, Update 2022):\n\nStürze sind kein Zufall. Es gibt klare Risikofaktoren:\n\n- **Alter >65 Jahre** — Muskelmasse und Gleichgewicht nehmen ab\n- **Medikamente** — Sedativa (Beruhigungsmittel), Antihypertensiva (Blutdrucksenker) machen schwindelig\n- **Sehstörungen** — Wer schlecht sieht, stolpert leichter\n- **Gleichgewichtsstörungen** — z.B. nach Schlaganfall oder bei Polyneuropathie\n- **Kognitive Einschränkungen** — Demenz, Delir: Gefahren werden nicht erkannt\n- **Sturzanamnese** — Wer schon gestürzt ist, stürzt mit höherer Wahrscheinlichkeit erneut\n- **Umgebungsgefahren** — Kabel, nasse Böden, schlechte Beleuchtung, fehlende Haltegriffe",
      glossarBegriffe: ["Sturzprophylaxe", "DNQP"],
    },
    contentB1: {
      title: "Warum stürzen Menschen? — 7 Gründe",
      body: "Jeder dritte Mensch über 65 Jahre stürzt mindestens 1 Mal pro Jahr. Das sind die Gründe:\n\n- **Alter über 65** — Die Muskeln werden schwächer\n- **Medikamente** — Manche Medikamente machen schwindelig\n- **Schlechte Augen** — Wer schlecht sieht, stolpert leichter\n- **Gleichgewicht** — Manche Menschen sind wackelig auf den Beinen\n- **Vergesslichkeit** — Menschen mit Demenz erkennen Gefahren nicht\n- **Schon mal gestürzt** — Wer schon gestürzt ist, stürzt oft wieder\n- **Gefahren im Zimmer** — Kabel auf dem Boden, nasser Boden, kein Licht",
      glossarBegriffe: ["Sturz", "Prophylaxe"],
    },
  },

  // =============================================================
  // Step 4: ERKLÄRUNG — Timed-Up-and-Go-Test (Reveal)
  // =============================================================
  {
    stepId: "le06-s3-tb5-03",
    phase: "s3",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q3"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Der Timed-Up-and-Go-Test (TUG)",
      body: "Ein einfacher, standardisierter Test zur Sturzrisiko-Einschätzung. Decke die Schritte auf!",
      glossarBegriffe: ["Timed-Up-and-Go-Test"],
    },
    contentB1: {
      title: "Der TUG-Test — Sturzrisiko testen",
      body: "Ein einfacher Test: Wie sicher kann ein Patient gehen? Tippe auf die Karten!",
      glossarBegriffe: ["Timed-Up-and-Go-Test"],
    },
    question: {
      fragetext: "Entdecke die 5 Schritte des TUG-Tests und die Auswertung:",
      reveal: {
        instruction: "Tippe auf jede Karte um den Ablauf zu entdecken:",
        revealMode: "sequential" as const,
        cards: [
          {
            id: "tug-1",
            label: "Schritt 1: Start",
            content: "Patient sitzt auf einem Stuhl mit Armlehnen. Stoppuhr bereit. Kommando: Los!",
            contentB1: "Der Patient sitzt auf einem Stuhl. Du sagst: Los!",
            icon: "timer",
          },
          {
            id: "tug-2",
            label: "Schritt 2: Aufstehen",
            content: "Patient steht selbstständig auf (Armlehne darf benutzt werden).",
            contentB1: "Der Patient steht allein auf. Er darf sich am Stuhl festhalten.",
            icon: "arrow-up",
          },
          {
            id: "tug-3",
            label: "Schritt 3: 3 Meter gehen",
            content: "Patient geht 3 Meter geradeaus in normalem Tempo. Hilfsmittel erlaubt.",
            contentB1: "Der Patient geht 3 Meter geradeaus. Ein Rollator ist erlaubt.",
            icon: "footprints",
          },
          {
            id: "tug-4",
            label: "Schritt 4: Umdrehen & Zurück",
            content: "Patient dreht sich um, geht 3 Meter zurück zum Stuhl.",
            contentB1: "Der Patient dreht sich um und geht 3 Meter zurück.",
            icon: "rotate-ccw",
          },
          {
            id: "tug-5",
            label: "Schritt 5: Hinsetzen — Stopp!",
            content: "Patient setzt sich hin. Stoppuhr stoppen.",
            contentB1: "Der Patient setzt sich hin. Du stoppst die Uhr.",
            icon: "circle-check",
          },
          {
            id: "tug-auswertung",
            label: "Auswertung",
            content: "Unter 10 Sekunden = normal. 10-19 Sekunden = leichtes Sturzrisiko. Ab 20 Sekunden = erhöhtes Sturzrisiko. Frau Becker: 25 Sekunden = erhöhtes Risiko!",
            contentB1: "Unter 10 Sekunden = kein Risiko. 10-19 Sekunden = ein bisschen Risiko. Ab 20 Sekunden = hohes Risiko. Frau Becker braucht 25 Sekunden = hohes Risiko!",
            icon: "alert-triangle",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: CHECKPOINT — MC TUG-Ergebnis Frau Becker
  // =============================================================
  {
    stepId: "le06-s3-tb5-04",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q3"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Was bedeutet das Ergebnis?",
      body: "Frau Becker braucht 25 Sekunden beim Timed-Up-and-Go-Test. Was heißt das?",
    },
    contentB1: {
      title: "Was bedeutet das?",
      body: "Frau Becker braucht 25 Sekunden beim TUG-Test. Was heißt das?",
    },
    question: {
      fragetext: "Frau Becker braucht 25 Sekunden beim Timed-Up-and-Go-Test. Was bedeutet das?",
      optionen: [
        {
          text: "Erhöhtes Sturzrisiko — Maßnahmen notwendig",
          isCorrect: true,
          explanation: "Richtig! Ab 20 Sekunden besteht ein erhöhtes Sturzrisiko nach DNQP. 25 Sekunden bedeutet: Sturzprophylaxe-Maßnahmen sind dringend erforderlich.",
          explanationB1: "Richtig! Ab 20 Sekunden ist das Sturzrisiko hoch. 25 Sekunden = Frau Becker braucht Schutzmaßnahmen.",
        },
        {
          text: "Normales Ergebnis — kein Handlungsbedarf",
          isCorrect: false,
          explanation: "Falsch. Normal wäre unter 10 Sekunden. 25 Sekunden liegt deutlich über der Grenze von 20 Sekunden für erhöhtes Risiko.",
          explanationB1: "Nein. Normal ist unter 10 Sekunden. 25 Sekunden ist viel zu langsam.",
        },
        {
          text: "Leichtes Sturzrisiko — Beobachtung reicht",
          isCorrect: false,
          explanation: "Falsch. Leichtes Risiko wäre 10-19 Sekunden. 25 Sekunden ist ERHÖHTES Risiko und erfordert aktive Maßnahmen.",
          explanationB1: "Nein. Leichtes Risiko ist 10-19 Sekunden. 25 Sekunden ist hohes Risiko.",
        },
        {
          text: "Test ist ungültig — zu kurze Strecke",
          isCorrect: false,
          explanation: "Falsch. Der TUG-Test ist standardisiert auf 3 Meter hin und 3 Meter zurück. Die Strecke ist korrekt.",
          explanationB1: "Nein. Der Test ist richtig so. 3 Meter hin und 3 Meter zurück.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: ANDERS ERKLÄRT — Timeline TUG-Test (Score B/C)
  // =============================================================
  {
    stepId: "le06-s3-tb5-05",
    phase: "s3",
    stepType: "timeline",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-400", "Q3"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "TUG-Test — Schritt für Schritt mit Zeitmarken",
      body: "So läuft der Timed-Up-and-Go-Test ab. Achte auf die Bewertungsgrenzen.",
    },
    contentB1: {
      title: "Der TUG-Test — Schritt für Schritt",
      body: "So funktioniert der Test. Achte auf die Zeiten.",
    },
    question: {
      fragetext: "Der Ablauf des Timed-Up-and-Go-Tests:",
      timeline: {
        instruction: "Verfolge den Ablauf des TUG-Tests:",
        events: [
          {
            id: "tug-t1",
            time: "0 Sek",
            title: "Start: Im Stuhl sitzen",
            description: "Patient sitzt mit dem Rücken angelehnt. Hände auf den Armlehnen.",
            descriptionB1: "Der Patient sitzt im Stuhl.",
            icon: "armchair",
          },
          {
            id: "tug-t2",
            time: "ca. 2-5 Sek",
            title: "Aufstehen",
            description: "Patient steht ohne fremde Hilfe auf. Armlehne als Stütze erlaubt.",
            descriptionB1: "Der Patient steht allein auf.",
            icon: "arrow-up",
          },
          {
            id: "tug-t3",
            time: "ca. 5-10 Sek",
            title: "3 Meter gehen",
            description: "Normales Gehtempo. Hilfsmittel (Rollator, Stock) erlaubt.",
            descriptionB1: "3 Meter geradeaus gehen. Rollator ist erlaubt.",
            icon: "footprints",
          },
          {
            id: "tug-t4",
            time: "ca. 10-15 Sek",
            title: "Umdrehen",
            description: "Patient dreht sich um (180°). Häufigste Sturzstelle!",
            descriptionB1: "Der Patient dreht sich um. Hier stürzen viele Menschen!",
            icon: "rotate-ccw",
            highlight: true,
          },
          {
            id: "tug-t5",
            time: "ca. 15-20 Sek",
            title: "3 Meter zurück",
            description: "Zurück zum Stuhl gehen.",
            descriptionB1: "Zurück zum Stuhl gehen.",
            icon: "arrow-left",
          },
          {
            id: "tug-t6",
            time: "Stopp!",
            title: "Hinsetzen — Stoppuhr stoppen",
            description: "Unter 10s = normal. 10-19s = leichtes Risiko. Ab 20s = erhöhtes Risiko.",
            descriptionB1: "Unter 10 Sekunden = gut. 10-19 = ein bisschen Risiko. Ab 20 = hohes Risiko.",
            icon: "timer-off",
            highlight: true,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: ERKLÄRUNG — Barthel-Index (10 Bereiche)
  // =============================================================
  {
    stepId: "le06-s3-tb6-01",
    phase: "s3",
    stepType: "text",
    displayFormat: "stepbystep",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q5", "Q1 S.346"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Der Barthel-Index — Wie selbstständig ist der Patient?",
      body: "Der Barthel-Index ist ein standardisiertes ADL-Assessment mit 10 Bereichen. Skala: 0-100 Punkte.\n\n**Die 10 Bereiche:**\n1. Essen (0/5/10)\n2. Baden (0/5)\n3. Körperpflege (0/5)\n4. An-/Auskleiden (0/5/10)\n5. Stuhlkontrolle (0/5/10)\n6. Harnkontrolle (0/5/10)\n7. Toilettenbenutzung (0/5/10)\n8. Bett-Rollstuhl-Transfer (0/5/10/15)\n9. Mobilität/Gehen (0/5/10/15)\n10. Treppensteigen (0/5/10)\n\n**Einstufung:**\n- 0-30 Punkte: Weitgehend pflegeabhängig\n- 35-80 Punkte: Pflegebedürftig\n- 85-100 Punkte: Punktuell hilfsbedürftig",
      glossarBegriffe: ["Barthel-Index"],
    },
    contentB1: {
      title: "Der Barthel-Index — Was kann der Patient allein?",
      body: "Der Barthel-Index misst: Was kann der Patient selbst machen? 10 Bereiche, 0-100 Punkte.\n\n**Die 10 Bereiche:**\n1. Essen\n2. Baden/Waschen\n3. Körperpflege (Zähne, Haare)\n4. Anziehen/Ausziehen\n5. Stuhlgang kontrollieren\n6. Urin kontrollieren\n7. Toilette benutzen\n8. Vom Bett in den Rollstuhl\n9. Gehen oder Rollstuhl fahren\n10. Treppen steigen\n\n**Was bedeuten die Punkte?**\n- 0-30 = Braucht bei fast allem Hilfe\n- 35-80 = Braucht bei vielen Dingen Hilfe\n- 85-100 = Braucht nur manchmal Hilfe",
      glossarBegriffe: ["Barthel-Index"],
    },
  },

  // =============================================================
  // Step 8: ANWENDUNG — Calculation Barthel-Index Frau Becker
  // =============================================================
  {
    stepId: "le06-s3-tb6-02",
    phase: "s3",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q5", "Q1 S.346"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Berechne Frau Beckers Barthel-Index",
      body: "Tag 3 nach Hüft-TEP. Wie selbstständig ist Frau Becker aktuell? Addiere die Punkte.",
      fallbezug: "Frau Becker, 79 Jahre, Tag 3 nach Hüft-TEP. Noch unsicher beim Gehen.",
    },
    contentB1: {
      title: "Wie viele Punkte hat Frau Becker?",
      body: "Rechne die Punkte zusammen. Wie selbstständig ist Frau Becker?",
      fallbezug: "Frau Becker, 79, Tag 3 nach der Hüft-OP.",
    },
    question: {
      fragetext: "Frau Becker Tag 3 nach Hüft-TEP:\n- Essen: selbstständig (10 Punkte)\n- Baden: mit Hilfe (0 Punkte)\n- Körperpflege: selbstständig (5 Punkte)\n- Ankleiden: mit Hilfe (5 Punkte)\n- Stuhlkontrolle: selbstständig (10 Punkte)\n- Harnkontrolle: selbstständig (10 Punkte)\n- Toilette: mit Hilfe (5 Punkte) \n- Transfer: mit Hilfe (10 Punkte)\n- Mobilität: mit Rollator (10 Punkte)\n- Treppensteigen: nicht möglich (0 Punkte)\n\nBerechne den Barthel-Index:",
      calculation: {
        instruction: "Addiere alle Punktwerte: 10 + 0 + 5 + 5 + 10 + 10 + 5 + 10 + 10 + 0 = ?",
        correctValue: 65,
        unit: "Punkte",
        tolerance: 0,
        explanation: "10+0+5+5+10+10+5+10+10+0 = 65 Punkte. Das bedeutet: Frau Becker ist pflegebedürftig (35-80 Punkte). Sie braucht Unterstützung bei Baden, Ankleiden, Toilettengang und kann keine Treppen steigen.",
        explanationB1: "10+0+5+5+10+10+5+10+10+0 = 65 Punkte. Das heißt: Frau Becker braucht bei vielen Dingen Hilfe (35-80 Punkte).",
      },
    },
  },

  // =============================================================
  // Step 9: CHECKPOINT — Anticipation-MC Barthel-Konsequenzen
  // =============================================================
  {
    stepId: "le06-s3-tb6-03",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q5", "Q1 S.346"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Was bedeutet das für die Pflege?",
      body: "Frau Becker hat 65 Punkte im Barthel-Index. Was folgt daraus?",
    },
    contentB1: {
      title: "Was heißt das für Frau Becker?",
      body: "65 Punkte im Barthel-Index. Was muss die Pflege jetzt machen?",
    },
    question: {
      fragetext: "Was bedeutet ein Barthel-Index von 65 Punkten für die Pflegeplanung?",
      mcVariant: "anticipation" as const,
      optionen: [
        {
          text: "Gezielte Unterstützung bei Defiziten + Förderung der Selbstständigkeit",
          isCorrect: true,
          explanation: "Richtig! 65 Punkte = pflegebedürftig. Aber Frau Becker hat Ressourcen (Essen, Kontinenz, Mobilität mit Rollator). Ziel: Defizite unterstützen, Ressourcen stärken, Selbstständigkeit fördern.",
          explanationB1: "Richtig! 65 Punkte heißt: Frau Becker braucht Hilfe, ABER sie kann auch vieles allein. Wir helfen nur wo nötig.",
        },
        {
          text: "Komplette Übernahme aller Aktivitäten — sie ist zu eingeschränkt",
          isCorrect: false,
          explanation: "Falsch. 65 Punkte bedeutet NICHT komplette Abhängigkeit. Frau Becker kann vieles selbst (Essen, Körperpflege, Kontinenz). Komplettübernahme widerspricht dem Kinästhetik-Prinzip.",
          explanationB1: "Nein! Frau Becker kann vieles allein. Alles für sie machen ist falsch.",
        },
        {
          text: "Keine besonderen Maßnahmen — 65 Punkte ist fast normal",
          isCorrect: false,
          explanation: "Falsch. 65 Punkte liegt im Bereich pflegebedürftig (35-80). Punktuell hilfsbedürftig wäre erst ab 85 Punkten.",
          explanationB1: "Nein. 65 Punkte heißt: Sie braucht Hilfe. Normal wäre ab 85 Punkte.",
        },
        {
          text: "Sofortige Entlassung — sie ist mobil genug",
          isCorrect: false,
          explanation: "Falsch. Frau Becker kann keine Treppen steigen, braucht Hilfe beim Baden und Ankleiden. Eine Entlassung ist erst nach weiterer Rehabilitation sinnvoll.",
          explanationB1: "Nein. Frau Becker kann noch nicht allein zu Hause leben. Sie braucht noch Hilfe.",
        },
      ],
    },
  },

  // =============================================================
  // Step 10: ERKLÄRUNG — Sturzprophylaxe-Maßnahmen (Checklist)
  // =============================================================
  {
    stepId: "le06-s3-tb5-06",
    phase: "s3",
    stepType: "text",
    displayFormat: "checklist",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.400-404", "Q3"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Sturzprophylaxe — 9 Maßnahmen",
      body: "Diese Maßnahmen empfiehlt der DNQP-Expertenstandard zur Sturzprophylaxe:\n\n- Festes Schuhwerk (keine Pantoffeln, keine Socken auf glattem Boden)\n- Haltegriffe installieren (Bad, Toilette, Flur)\n- Beleuchtung sicherstellen (auch nachts! Nachtlicht)\n- Stolperfallen beseitigen (Kabel, Teppichkanten, nasse Böden)\n- Bettbremsen feststellen (Bett darf nicht wegrollen)\n- Klingel in Reichweite (Patient muss sie im Liegen erreichen)\n- Kraft- und Gleichgewichtstraining (Physiotherapie)\n- Medikamentenüberprüfung (Sedativa, Antihypertensiva = Sturzrisiko)\n- Sturzprotokoll nach jedem Sturz (Was? Wann? Wo? Verletzungen?)",
      glossarBegriffe: ["Sturzprophylaxe"],
    },
    contentB1: {
      title: "So verhinderst du Stürze — 9 Maßnahmen",
      body: "Was kannst du tun damit Patienten nicht stürzen?\n\n- Feste Schuhe (keine Socken, keine Pantoffeln)\n- Haltegriffe im Bad und auf dem Flur\n- Licht an! Auch nachts ein Nachtlicht\n- Kabel und Stolperfallen wegräumen\n- Bett-Bremsen feststellen\n- Klingel so legen, dass der Patient sie erreicht\n- Übungen für Kraft und Gleichgewicht\n- Medikamente prüfen (manche machen schwindelig)\n- Nach jedem Sturz ein Protokoll schreiben",
      glossarBegriffe: ["Sturzprophylaxe"],
    },
  },

  // =============================================================
  // Step 11: ANWENDUNG — Categorize Sturzprophylaxe-Maßnahmen
  // =============================================================
  {
    stepId: "le06-s3-tb5-07",
    phase: "s3",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.400-404", "Q3"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Maßnahmen sortieren",
      body: "Ordne die Sturzprophylaxe-Maßnahmen den richtigen Kategorien zu.",
    },
    contentB1: {
      title: "Sortiere die Maßnahmen",
      body: "Welche Maßnahme gehört wohin? Ziehe sie in die richtige Gruppe.",
    },
    question: {
      fragetext: "Ordne die 8 Maßnahmen den 3 Kategorien zu:",
      categories: [
        { name: "Umgebung anpassen" },
        { name: "Patient stärken" },
        { name: "Dokumentation & Kontrolle" },
      ],
      categoryItems: [
        { text: "Haltegriffe installieren", correctCategory: 0 },
        { text: "Beleuchtung sicherstellen", correctCategory: 0 },
        { text: "Stolperfallen beseitigen", correctCategory: 0 },
        { text: "Krafttraining", correctCategory: 1 },
        { text: "Festes Schuhwerk", correctCategory: 1 },
        { text: "Gleichgewichtstraining", correctCategory: 1 },
        { text: "Sturzprotokoll", correctCategory: 2 },
        { text: "Medikamentencheck", correctCategory: 2 },
      ],
    },
  },

  // =============================================================
  // Step 12: PRAXIS_DIALOG — Frau Beckers Sohn will Bettseitenteile
  // =============================================================
  {
    stepId: "le06-s3-tb5-08",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q2 S.400", "IV-02"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "Bettseitenteile — ja oder nein?",
      body: "Du gehst mit Frau Becker über den Flur. Sie erzählt dir etwas.",
      fallbezug: "Frau Becker hat Sturzangst. Ihr Sohn ist besorgt.",
    },
    contentB1: {
      title: "Bettseitenteile?",
      body: "Frau Becker erzählt dir etwas über ihren Sohn.",
      fallbezug: "Frau Beckers Sohn hat Angst, dass sie stürzt.",
    },
    question: {
      fragetext: "Frau Becker sagt: 'Mein Sohn will Bettseitenteile für mich kaufen. Er hat Angst, dass ich nachts aus dem Bett falle.'",
      patientName: "Frau Becker",
      dialogPhases: [
        {
          context: "Frau Becker erzählt beim Spaziergang über den Flur: 'Mein Sohn will Bettseitenteile kaufen. Er hat so Angst, dass ich nachts rausfalle. Ist das nicht eine gute Idee?'",
          contextB1: "Frau Becker sagt: 'Mein Sohn will Bettseitenteile kaufen. Er hat Angst, dass ich aus dem Bett falle.'",
          speaker: "Frau Becker",
          options: [
            {
              text: "Ich verstehe die Sorge. Aber Bettseitenteile sind eine freiheitsbeschränkende Maßnahme und brauchen eine richterliche Genehmigung. Es gibt bessere Alternativen.",
              textB1: "Ich verstehe. Aber Bettseitenteile darf man nicht einfach so benutzen. Man braucht eine Genehmigung vom Gericht. Es gibt bessere Lösungen.",
              patientResponse: "Ach, das wusste ich nicht! Was gibt es denn für Alternativen?",
              patientResponseB1: "Das wusste ich nicht! Was kann man sonst machen?",
              score: 3,
              feedback: "Sehr gut! Du erklärst korrekt, dass Bettseitenteile eine freiheitsbeschränkende Maßnahme (FEM) sind und bietest Alternativen an. KB IV: Ethisch handeln.",
              feedbackB1: "Super! Du weißt: Bettseitenteile darf man nicht einfach benutzen. Und du bietest andere Lösungen an.",
            },
            {
              text: "Das ist eine gute Idee! Sicherheit geht vor.",
              textB1: "Gute Idee! Sicherheit ist wichtig.",
              patientResponse: "Dann sage ich meinem Sohn, er soll welche kaufen!",
              patientResponseB1: "Dann kauft mein Sohn welche!",
              score: 1,
              feedback: "Vorsicht! Bettseitenteile sind eine freiheitsbeschränkende Maßnahme (FEM). Sie brauchen eine richterliche Genehmigung. Außerdem können Patienten darüberklettern und schlimmer stürzen.",
              feedbackB1: "Achtung! Bettseitenteile darf man nicht einfach benutzen. Man braucht eine Genehmigung. Und sie können sogar gefährlicher sein.",
            },
            {
              text: "Fragen wir mal den Arzt, was er dazu sagt.",
              textB1: "Fragen wir den Arzt.",
              patientResponse: "Ja, der Arzt wird es schon wissen.",
              patientResponseB1: "Ok, fragen wir den Arzt.",
              score: 2,
              feedback: "Den Arzt einzubeziehen ist nicht falsch. Aber als Pflegefachkraft solltest du selbst wissen: Bettseitenteile = FEM = brauchen richterliche Genehmigung. Das ist Pflegekompetenz, nicht Arztentscheidung.",
              feedbackB1: "Den Arzt fragen ist ok. Aber du als Pflegekraft solltest das selber wissen: Bettseitenteile brauchen eine Genehmigung vom Gericht.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 13: ANWENDUNG — Branching FEM-Alternativen
  // =============================================================
  {
    stepId: "le06-s3-tb5-09",
    phase: "s3",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q2 S.400", "IV-02"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Alternativen zu Bettseitenteilen",
      body: "Frau Beckers Sohn ruft an und besteht auf Bettseitenteilen. Was empfiehlst du?",
    },
    contentB1: {
      title: "Was statt Bettseitenteile?",
      body: "Der Sohn von Frau Becker will unbedingt Bettseitenteile. Was schlägst du vor?",
    },
    question: {
      fragetext: "Frau Beckers Sohn besteht am Telefon auf Bettseitenteile: 'Meine Mutter ist schon 3x zuhause gestürzt! Ich will nicht, dass das hier auch passiert!'",
      branchingOptions: [
        {
          text: "Niedrigbett + Sensormatte — so merken wir sofort wenn sie aufsteht, ohne sie einzuschränken.",
          feedback: "Perfekt! Niedrigbett (geringe Fallhöhe) + Sensormatte (Alarm bei Aufstehen) ist die leitliniengerechte Alternative. Keine FEM, trotzdem Sicherheit. DNQP empfiehlt genau diese Kombination.",
          feedbackB1: "Super! Niedrigbett (das Bett ist ganz niedrig) + Sensormatte (ein Alarm wenn sie aufsteht) ist die beste Lösung. Keine Genehmigung nötig.",
          isCorrect: true,
        },
        {
          text: "Ich organisiere Bettseitenteile mit ärztlicher Anordnung.",
          feedback: "Ärztliche Anordnung reicht NICHT. Bettseitenteile sind eine freiheitsbeschränkende Maßnahme und brauchen eine richterliche Genehmigung — nicht nur eine Arztanordnung.",
          feedbackB1: "Das reicht nicht. Bettseitenteile brauchen eine Genehmigung vom Gericht, nicht nur vom Arzt.",
          isCorrect: false,
        },
        {
          text: "Ich organisiere eine Sitzwache für die Nacht.",
          feedback: "Eine Sitzwache ist grundsätzlich eine Alternative, aber im Krankenhaus personell kaum umsetzbar. Niedrigbett + Sensormatte ist praktikabler und genauso sicher.",
          feedbackB1: "Eine Sitzwache ist möglich, aber sehr schwierig (es fehlt Personal). Niedrigbett + Sensormatte ist einfacher.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 14: INTERLEAVING — LE-04 FEM/Rechte
  // =============================================================
  {
    stepId: "le06-s3-sn-01",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["IV-02"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    wusstestDuDas: "In Deutschland werden jährlich ca. 200.000 freiheitsbeschränkende Maßnahmen richterlich genehmigt. Alternativen wie Niedrigbetten reduzieren Stürze nachweislich genauso effektiv.",
    contentC1: {
      title: "Interleaving: LE-04 Rechte",
      body: "Erinnerst du dich an die Rechte aus LE-04? Hier die Verknüpfung zur Sturzprophylaxe.",
    },
    contentB1: {
      title: "Rechte (LE-04)",
      body: "In LE-04 hast du Rechte gelernt. Das passt zur Sturzprophylaxe.",
    },
    question: {
      fragetext: "Was braucht man rechtlich für Bettseitenteile bei einem sturzgefährdeten Patienten?",
      optionen: [
        {
          text: "Richterliche Genehmigung (Betreuungsgericht)",
          isCorrect: true,
          explanation: "Richtig! Bettseitenteile sind eine freiheitsbeschränkende Maßnahme nach §1831 BGB. Sie brauchen eine richterliche Genehmigung — es sei denn, der Patient stimmt selbst zu UND ist einwilligungsfähig.",
          explanationB1: "Richtig! Bettseitenteile schränken die Freiheit ein. Man braucht eine Erlaubnis vom Gericht.",
        },
        {
          text: "Ärztliche Anordnung reicht aus",
          isCorrect: false,
          explanation: "Falsch. Eine ärztliche Anordnung reicht NICHT für freiheitsbeschränkende Maßnahmen. Es muss eine richterliche Genehmigung vorliegen.",
          explanationB1: "Nein. Der Arzt allein darf das nicht entscheiden. Ein Gericht muss zustimmen.",
        },
        {
          text: "Einwilligung der Angehörigen genügt",
          isCorrect: false,
          explanation: "Falsch. Angehörige dürfen NICHT über FEM entscheiden, es sei denn, sie sind rechtliche Betreuer mit entsprechendem Aufgabenkreis. Auch dann braucht es die richterliche Genehmigung.",
          explanationB1: "Nein. Die Familie allein darf das nicht entscheiden. Nur ein Gericht kann FEM erlauben.",
        },
        {
          text: "Keine besondere Genehmigung nötig — Standardmaßnahme",
          isCorrect: false,
          explanation: "Falsch! Bettseitenteile sind KEINE Standardmaßnahme, sondern eine freiheitsbeschränkende Maßnahme. Ohne Genehmigung ist es rechtswidrig.",
          explanationB1: "Nein! Bettseitenteile sind keine normale Maßnahme. Ohne Genehmigung ist es verboten.",
        },
      ],
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — TableFillIn Sturzprotokoll
  // =============================================================
  {
    stepId: "le06-s3-tb5-10",
    phase: "s3",
    stepType: "tablefillin",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.400", "V-03"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Sturzprotokoll ausfüllen",
      body: "Frau Becker ist auf dem Weg zur Toilette gestürzt. Fülle das Sturzprotokoll aus.",
      fallbezug: "Fiktives Szenario: Frau Becker, Tag 4, Sturz auf dem Flur um 06:15 Uhr.",
    },
    contentB1: {
      title: "Sturzprotokoll schreiben",
      body: "Frau Becker ist gestürzt. Fülle die Tabelle aus.",
      fallbezug: "Frau Becker ist um 06:15 Uhr auf dem Flur gestürzt.",
    },
    question: {
      fragetext: "Szenario: Frau Becker (79 J.) ist am 15.03. um 06:15 Uhr auf dem Flur vor dem Badezimmer gestürzt. Sie wollte allein zur Toilette. Sie hat eine Prellung am rechten Knie. Keine offene Wunde. Fülle das Sturzprotokoll aus:",
      tablefillin: {
        instruction: "Fülle die fehlenden Felder im Sturzprotokoll aus:",
        headers: ["Feld", "Eintrag"],
        rows: [
          [{ value: "Datum", isBlank: false }, { value: "15.03.", isBlank: true, options: ["15.03.", "16.03.", "14.03."] }],
          [{ value: "Uhrzeit", isBlank: false }, { value: "06:15", isBlank: true, options: ["06:15", "07:00", "05:30"] }],
          [{ value: "Ort", isBlank: false }, { value: "Flur vor Badezimmer", isBlank: true, options: ["Flur vor Badezimmer", "Patientenzimmer", "Speisesaal"] }],
          [{ value: "Hergang", isBlank: false }, { value: "Patientin wollte allein zur Toilette", isBlank: false }],
          [{ value: "Verletzungen", isBlank: false }, { value: "Prellung rechtes Knie", isBlank: false }],
          [{ value: "Maßnahmen", isBlank: false }, { value: "Kühlung, Arzt informiert", isBlank: false }],
        ],
      },
    },
  },

  // =============================================================
  // Step 16: ERKLÄRUNG — Flowchart DNQP-Kreislauf
  // =============================================================
  {
    stepId: "le06-s3-tb5-11",
    phase: "s3",
    stepType: "diagram",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q3"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "DNQP-Kreislauf: Sturzprophylaxe",
      body: "Die Sturzprophylaxe ist kein einmaliges Ereignis, sondern ein fortlaufender Kreislauf.",
    },
    contentB1: {
      title: "Sturzprophylaxe — ein Kreislauf",
      body: "Sturzprophylaxe hört nie auf. Es ist ein Kreislauf.",
    },
    question: {
      fragetext: "Der DNQP-Kreislauf der Sturzprophylaxe:",
      diagram: {
        diagramType: "cycle" as const,
        instruction: "Verfolge den Kreislauf der Sturzprophylaxe nach DNQP:",
        nodes: [
          { id: "n1", label: "Sturzrisiko erfassen", labelB1: "Risiko erkennen", highlight: true },
          { id: "n2", label: "Risikofaktoren analysieren", labelB1: "Gründe finden" },
          { id: "n3", label: "Maßnahmenplan erstellen", labelB1: "Plan machen" },
          { id: "n4", label: "Maßnahmen umsetzen", labelB1: "Plan umsetzen" },
          { id: "n5", label: "Wirksamkeit prüfen", labelB1: "Hat es geholfen?" },
          { id: "n6", label: "Re-Assessment", labelB1: "Nochmal prüfen", highlight: true },
        ],
        edges: [
          { from: "n1", to: "n2", label: "bei Aufnahme" },
          { from: "n2", to: "n3", label: "individuell" },
          { from: "n3", to: "n4", label: "sofort" },
          { from: "n4", to: "n5", label: "regelmäßig" },
          { from: "n5", to: "n6", label: "bei Veränderung" },
          { from: "n6", to: "n1", label: "Kreislauf" },
        ],
        interactive: false,
      },
    },
  },

  // =============================================================
  // Step 17: PATIENTEN_PERSPEKTIVE — Frau Beckers Sturzangst
  // =============================================================
  {
    stepId: "le06-s3-tb5-12",
    phase: "s3",
    stepType: "text",
    displayFormat: "diary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    tag: "pflege",
    contentC1: {
      title: "Frau Beckers Tagebuch: Die Angst aufzustehen",
      body: "Heute Nacht konnte ich nicht schlafen. Ich musste zur Toilette, aber ich hatte Angst aufzustehen. Zuhause bin ich 3 Mal gestürzt letztes Jahr. Einmal lag ich 2 Stunden auf dem kalten Boden, bevor mein Sohn kam. Ich habe geschrien, aber niemand hat mich gehört.\n\nSeitdem habe ich Angst, allein aufzustehen. Jedes Mal wenn ich mich bewege, denke ich: Was wenn ich wieder falle? Und hier im Krankenhaus ist alles fremd. Andere Möbel, anderer Boden, andere Schuhe.\n\nDie Schwester hat gesagt, ich soll klingeln wenn ich zur Toilette muss. Aber ich will doch nicht stören! Es ist mitten in der Nacht, alle haben so viel zu tun...",
      fallbezug: "Frau Becker traut sich nachts nicht allein aufzustehen. Sturzangst ist ein eigenständiger Risikofaktor.",
    },
    contentB1: {
      title: "Frau Becker erzählt: Angst vor dem Stürzen",
      body: "Ich konnte letzte Nacht nicht schlafen. Ich musste zur Toilette. Aber ich hatte Angst aufzustehen.\n\nZu Hause bin ich 3 Mal gefallen. Einmal lag ich 2 Stunden auf dem Boden. Niemand hat mich gehört.\n\nJetzt habe ich immer Angst wenn ich aufstehe. Was ist, wenn ich wieder falle?\n\nDie Schwester sagt: Klingeln Sie wenn Sie zur Toilette müssen. Aber ich will doch nicht stören...",
      fallbezug: "Frau Becker hat Angst aufzustehen. Diese Angst ist ein extra Risikofaktor für Stürze.",
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Hotspot Sturzfallen im Patientenzimmer
  // =============================================================
  {
    stepId: "le06-s3-tb5-13",
    phase: "s3",
    stepType: "hotspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.400-404", "Q3"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Finde die 6 Sturzfallen!",
      body: "Dieses Patientenzimmer hat 6 Gefahrenquellen für Stürze. Markiere sie alle.",
    },
    contentB1: {
      title: "Finde 6 Gefahren!",
      body: "In diesem Zimmer gibt es 6 Dinge, die einen Sturz verursachen können. Tippe darauf.",
    },
    question: {
      fragetext: "Markiere alle 6 Sturzfallen im Patientenzimmer:",
      hotspot: {
        imageUrl: "/images/content/le-06/patientenzimmer-sturzfallen.svg",
        imageAlt: "Patientenzimmer mit 6 versteckten Sturzfallen",
        instruction: "Tippe auf alle 6 Sturzfallen:",
        zones: [
          { id: "hz1", x: 80, y: 90, radius: 8, label: "Nasses Badezimmer" },
          { id: "hz2", x: 45, y: 70, radius: 8, label: "Kabel auf dem Boden" },
          { id: "hz3", x: 85, y: 40, radius: 8, label: "Fehlende Haltegriffe" },
          { id: "hz4", x: 30, y: 50, radius: 8, label: "Zu hohes Bett" },
          { id: "hz5", x: 20, y: 85, radius: 8, label: "Pantoffeln statt feste Schuhe" },
          { id: "hz6", x: 60, y: 20, radius: 8, label: "Dunkler Flur ohne Nachtlicht" },
        ],
      },
    },
  },

  // =============================================================
  // Step 19: ANWENDUNG — Freetext Sturzprophylaxe für Entlassung
  // =============================================================
  {
    stepId: "le06-s3-tb5-14",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.400-404", "Q3"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Entlassungsplanung: Sturzprophylaxe zuhause",
      body: "Frau Becker wird bald entlassen. Welche 3 Sturzprophylaxe-Maßnahmen empfiehlst du ihr für zuhause?",
      fallbezug: "Frau Becker, 79 Jahre, lebt allein. Sohn kommt nur am Wochenende. Schon 3x zuhause gestürzt.",
    },
    contentB1: {
      title: "Was soll Frau Becker zuhause machen?",
      body: "Frau Becker geht bald nach Hause. Was empfiehlst du gegen Stürze?",
      fallbezug: "Frau Becker wohnt allein. Ihr Sohn kommt nur am Wochenende.",
    },
    question: {
      fragetext: "Erstelle 3 Sturzprophylaxe-Maßnahmen für Frau Becker zuhause. Begründe jede Maßnahme.",
      musterantwort: "1. Haltegriffe im Bad und neben dem Bett installieren — Frau Becker stürzt vor allem nachts und im Bad. 2. Stolperfallen beseitigen: Teppichkanten, Kabel, Schwellen — sie lebt allein und niemand kann helfen. 3. Nachtlicht installieren — sie muss nachts zur Toilette und soll nicht im Dunkeln gehen.",
      bewertungskriterien: [
        "Nennt 3 konkrete, unterschiedliche Maßnahmen",
        "Bezieht sich auf Frau Beckers individuelle Situation (allein lebend, 79 Jahre, Sturzanamnese)",
        "Begründet mindestens 2 Maßnahmen nachvollziehbar",
      ],
      satzanfaengeB1: [
        "Erstens empfehle ich..., weil...",
        "Zweitens soll Frau Becker..., denn...",
        "Drittens ist wichtig, dass...",
      ],
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG — WordOrder Fachsprache
  // =============================================================
  {
    stepId: "le06-s3-sn-02",
    phase: "s3",
    stepType: "wordorder",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q2 S.400", "V-03"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fachsprache üben: Dokumentation",
      body: "Bringe die Satzbausteine in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Satz ordnen",
      body: "Bringe die Wörter in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Ordne die Satzbausteine zu einem korrekten Dokumentationssatz:",
      wordorder: {
        instruction: "Bringe die Bausteine in die richtige Reihenfolge:",
        words: [
          "Bei erhöhtem Sturzrisiko",
          "dokumentieren wir",
          "den Timed-Up-and-Go-Test",
          "bei Aufnahme",
          "und regelmäßig",
          "im Verlauf.",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        hint: "Der Satz beginnt mit der Bedingung und endet mit dem Zeitraum.",
      },
    },
  },

  // =============================================================
  // Step 21: REFLEXION — Selfrating Sturzprophylaxe + Assessment
  // =============================================================
  {
    stepId: "le06-s3-tb5-15",
    phase: "s3",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Selbsteinschätzung: Sturzprophylaxe & Assessment",
      body: "Wie sicher fühlst du dich bei diesen Themen?",
    },
    contentB1: {
      title: "Was kannst du schon?",
      body: "Wie gut kennst du diese Themen? Schätze dich ein.",
    },
    question: {
      fragetext: "Bewerte dich selbst:",
      selfratingVariant: "rubrik" as const,
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 3
  // =============================================================
  {
    stepId: "le06-s3-tb5-16",
    phase: "s3",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.398-404", "Q3", "Q5"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-sturzprophylaxe",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Session 3 — Zusammenfassung",
      body: "Das hast du heute gelernt: Sturzrisikofaktoren, TUG-Test, Barthel-Index, Sturzprophylaxe und FEM-Alternativen.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Sturzrisiko, TUG-Test, Barthel-Index, Maßnahmen gegen Stürze und warum Bettseitenteile eine Genehmigung brauchen.",
    },
    question: {
      fragetext: "Zusammenfassung Session 3:",
      summary: {
        reflexionRueckbezug: "Du hast heute Frau Becker bei der Sturzprophylaxe begleitet und gelernt, wie man Sturzrisiken erkennt, misst und Maßnahmen plant.",
        kernaussagen: [
          "Sturzrisikofaktoren: Alter >65, Medikamente, Sehstörung, Gleichgewicht, Sturzanamnese, Umgebungsgefahren",
          "Timed-Up-and-Go-Test: <10s normal, 10-19s leichtes Risiko, ab 20s erhöhtes Risiko",
          "Barthel-Index: 10 Bereiche, 0-100 Punkte (0-30 pflegeabhängig, 35-80 pflegebedürftig, 85-100 punktuell hilfsbedürftig)",
          "Sturzprophylaxe: Umgebung anpassen + Patient stärken + Dokumentation",
          "Bettseitenteile = FEM = richterliche Genehmigung nötig. Alternativen: Niedrigbett + Sensormatte",
          "Nächste Session: Thrombose (Virchow-Trias) + Kontraktur (Teufelskreis Immobilität)",
        ],
      },
    },
  },
];
