// Session 2: "Wenn der Körper hungert" — LE 08 Menschen aller Altersstufen bei der Ernährung unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB3: Mangelernährung, Dehydratation, Assessments (ce02-le08-mangelernaehrung, ce02-le08-assessment)
// Leitfall-Variation: Frau Hoffmann (79, Gewichtsverlust), Elisabeth Kramer (42, MS)
// Bloom: B2-B3, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // =============================================================
  // Step 1: BRÜCKE — Recall S1 Flüssigkeitsbedarf
  // =============================================================
  {
    stepId: "le08-s2-tb3-01",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 452-453"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "BRÜCKE",
    tag: "pflege",
    contentC1: {
      title: "Erinnerst du dich?",
      body: "Letzte Session hast du den Flüssigkeitsbedarf gelernt. Eine kurze Wiederholung zum Start.",
    },
    contentB1: {
      title: "Weißt du es noch?",
      body: "Letzte Stunde hast du gelernt, wie viel ein Patient trinken muss. Weißt du es noch?",
    },
    question: {
      fragetext: "Wie viel Flüssigkeit braucht ein 70 kg schwerer Patient pro Tag?",
      optionen: [
        {
          text: "2100-2450 ml",
          isCorrect: true,
          explanation: "Richtig! 30-35 ml × 70 kg = 2100-2450 ml pro Tag.",
          explanationB1: "Richtig! 30-35 ml mal 70 kg = 2100-2450 ml am Tag.",
        },
        {
          text: "1000 ml",
          isCorrect: false,
          explanation: "Zu wenig! 1000 ml reichen nicht — der Bedarf liegt bei 30-35 ml pro kg Körpergewicht.",
          explanationB1: "Zu wenig! 1000 ml reichen nicht. Der Patient braucht 30-35 ml pro kg.",
        },
        {
          text: "5000 ml",
          isCorrect: false,
          explanation: "Zu viel! 5000 ml wären für einen 70-kg-Patienten deutlich über dem Bedarf — bei manchen Patienten sogar gefährlich.",
          explanationB1: "Zu viel! 5000 ml sind viel mehr als nötig. Das kann sogar gefährlich sein.",
        },
        {
          text: "500 ml",
          isCorrect: false,
          explanation: "Viel zu wenig! 500 ml am Tag führen schnell zur Dehydratation.",
          explanationB1: "Viel zu wenig! 500 ml am Tag machen den Körper trocken.",
        },
      ],
    },
  },

  // =============================================================
  // Step 2: SZENE — Dialog Frau Hoffmann
  // =============================================================
  {
    stepId: "le08-s2-tb3-02",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Das stehen gelassene Frühstück",
      body: "Morgenschicht auf Station. Du gehst in Zimmer 3. Frau Hoffmann (79) hat das Frühstück wieder stehen lassen. Die Kollegin sagt nur: 'Ist halt so bei alten Leuten.'",
    },
    contentB1: {
      title: "Frau Hoffmann isst nicht",
      body: "Morgens auf Station. Frau Hoffmann (79) hat nicht gegessen. Die Kollegin sagt: 'Alte Menschen essen wenig. Das ist normal.'",
    },
    question: {
      fragetext: "Wie reagierst du?",
      patientName: "du",
      dialogPhases: [
        {
          context: "Das Frühstückstablett von Frau Hoffmann ist unberührt. Deine Kollegin zuckt die Schultern: 'Im Alter lässt der Appetit nach. Da kann man nichts machen.'",
          contextB1: "Das Essen von Frau Hoffmann ist noch da. Die Kollegin sagt: 'Im Alter isst man wenig.'",
          speaker: "Kollegin",
          options: [
            {
              text: "Nein, wir müssen herausfinden warum sie nicht isst — da stecken immer Ursachen dahinter.",
              textB1: "Nein, wir müssen herausfinden warum sie nicht isst.",
              patientResponse: "Meinst du? Sie ist doch einfach nur alt. Was willst du da noch untersuchen?",
              patientResponseB1: "Warum? Sie ist doch nur alt.",
              score: 3,
              feedback: "Genau richtig! Nahrungsverweigerung hat IMMER Ursachen: Schmerzen, Schluckstörung, Depression, Medikamente, Einsamkeit, schlechte Zahnprothese. 'Im Alter isst man wenig' ist keine akzeptable Erklärung.",
              feedbackB1: "Richtig! Es gibt immer Gründe: Schmerzen, Schluckprobleme, Traurigkeit, Medikamente oder Einsamkeit. 'Sie ist alt' reicht nicht.",
            },
            {
              text: "Stimmt, im Alter isst man weniger — das ist ganz normal.",
              textB1: "Ja, im Alter essen die Menschen weniger.",
              patientResponse: "Genau. Alles normal. Räum das Tablett ab und dokumentier es.",
              patientResponseB1: "Genau. Räum das Tablett weg.",
              score: 1,
              feedback: "Das ist ein häufiger Schülerfehler! Ja, der Appetit kann im Alter nachlassen. Aber bevor du das akzeptierst, musst du ALLE möglichen Ursachen prüfen: Mundstatus, Schmerzen, Medikamente, psychosoziale Faktoren.",
              feedbackB1: "Das ist ein Fehler! Vor dem Akzeptieren musst du alle Gründe prüfen: Mund, Schmerzen, Medikamente, Einsamkeit.",
            },
            {
              text: "Ich dokumentiere es erst mal und schaue ob es morgen besser ist.",
              textB1: "Ich schreibe es auf und warte bis morgen.",
              patientResponse: "Gut, mach das. Aber wenn es so weitergeht, müssen wir was unternehmen.",
              patientResponseB1: "Gut. Wenn es morgen auch so ist, müssen wir was tun.",
              score: 2,
              feedback: "Dokumentieren ist richtig — aber Abwarten allein reicht nicht! Bei einer 79-jährigen Patientin, die nicht isst, solltest du sofort nach Ursachen suchen und ein Assessment durchführen.",
              feedbackB1: "Aufschreiben ist gut. Aber nur warten reicht nicht! Du musst nach Gründen suchen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Mangelernährung Definition + Statistik
  // =============================================================
  {
    stepId: "le08-s2-tb3-03",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411", "DNQP 2017a"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "glossary",
    contentC1: {
      title: "Mangelernährung — Definition und Fakten",
      body: "**Mangelernährung** (DNQP 2017): Anhaltendes Defizit an Energie und/oder Nährstoffen durch eine negative Bilanz zwischen Aufnahme und Bedarf. Führt zu Einbußen bei Ernährungszustand, physiologischer Funktion und Gesundheitszustand. **Wichtig:** Auch bei übergewichtigen Menschen möglich! Ein adipöser Patient mit Zinkmangel ist mangelernährt. **Statistik:** 32-55 % der Krankenhauspatienten sind mangelernährt, 18,2 % bereits bei Aufnahme.",
      glossarBegriffe: ["Malnutrition"],
    },
    contentB1: {
      title: "Mangelernährung — was ist das?",
      body: "**Mangelernährung** bedeutet: Der Körper bekommt zu wenig Nährstoffe oder Energie. Das kann auch bei übergewichtigen Menschen passieren! Zum Beispiel: Ein schwerer Patient mit Diabetes hat zu wenig Zink. Er ist mangelernährt. **Zahlen:** Etwa jeder dritte Patient im Krankenhaus ist mangelernährt.",
      glossarBegriffe: ["Malnutrition"],
    },

  },

  // =============================================================
  // Step 4: ERKLÄRUNG — Risikofaktoren (Flipcard)
  // =============================================================
  {
    stepId: "le08-s2-tb3-04",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "5 Risikofaktor-Gruppen für Mangelernährung",
      body: "Mangelernährung hat viele Ursachen. Decke die 5 Gruppen auf!",
    },
    contentB1: {
      title: "Warum essen Menschen zu wenig? 5 Gruppen",
      body: "Es gibt 5 Gruppen von Gründen. Tippe auf die Karten!",
    },
    question: {
      fragetext: "Decke die 5 Risikofaktor-Gruppen auf.",
      flipcard: {
        instruction: "Tippe auf eine Karte um die Risikofaktoren zu sehen.",
        cards: [
          {
            front: "Erkrankungen",
            back: "Demenz, Apoplex (Dysphagie), COPD, Tumorerkrankungen, Morbus Crohn, Soor, Depression — all diese Krankheiten können den Appetit oder die Nahrungsaufnahme stören.",
            backB1: "Demenz, Schlaganfall, Krebs, Entzündung im Mund, Depression — diese Krankheiten machen, dass Menschen weniger essen.",
          },
          {
            front: "Soziale Faktoren",
            back: "Einsamkeit, Armut, Isolation, allein essen — wer allein isst, isst oft weniger und ungesünder.",
            backB1: "Einsamkeit, kein Geld für gutes Essen, allein essen — das nimmt den Appetit.",
          },
          {
            front: "Medikamente",
            back: "Polypharmazie führt zu Appetitlosigkeit (z.B. Benzodiazepine, Digitalispräparate). Viele Medikamente gleichzeitig = weniger Hunger.",
            backB1: "Viele Tabletten gleichzeitig können den Appetit nehmen.",
          },
          {
            front: "Funktionelle Probleme",
            back: "Schlechte Zahnprothese, Kauschwierigkeiten, Schluckstörungen, eingeschränkte Armfunktion — wenn der Körper nicht mitmacht.",
            backB1: "Schlechte Zähne, Schluckprobleme, der Arm kann sich nicht bewegen — wenn der Körper nicht mitmacht.",
          },
          {
            front: "Institutionelle Faktoren",
            back: "Unruhige Essensumgebung, nicht schmeckende Mahlzeiten, Essen zu frühen Zeiten — das Umfeld im Krankenhaus oder Pflegeheim.",
            backB1: "Laut beim Essen, das Essen schmeckt nicht, zu früh Abendessen — das Umfeld im Heim.",
          },
        ],
        shuffled: false,
      },
    },
  },

  // =============================================================
  // Step 5: CHECKPOINT — MC Mangelernährung (Fallstrick)
  // =============================================================
  {
    stepId: "le08-s2-tb3-05",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Wer ist NICHT gefährdet?",
      body: "Nicht jeder Patient hat ein Risiko für Mangelernährung. Einer dieser vier Patienten ist nicht gefährdet.",
    },
    contentB1: {
      title: "Wer hat kein Risiko?",
      body: "Einer von diesen vier Patienten hat kein Risiko für Mangelernährung. Welcher?",
    },
    question: {
      fragetext: "Welcher Patient ist NICHT von Mangelernährung bedroht?",
      mcVariant: "fallstrick",
      optionen: [
        {
          text: "Gesunder 30-Jähriger ohne Vorerkrankungen",
          isCorrect: true,
          explanation: "Richtig! Ein gesunder junger Erwachsener ohne Vorerkrankungen hat in der Regel kein erhöhtes Risiko für Mangelernährung.",
          explanationB1: "Richtig! Ein gesunder junger Mensch hat meistens kein Risiko.",
        },
        {
          text: "79-Jährige, allein lebend, wenig soziale Kontakte",
          isCorrect: false,
          explanation: "Falsch! Diese Patientin hat gleich mehrere Risikofaktoren: hohes Alter, Einsamkeit, allein essen. Ein Assessment ist dringend nötig.",
          explanationB1: "Falsch! Diese Frau hat Risiko: alt, allein, einsam. Sie braucht eine Prüfung.",
        },
        {
          text: "Adipöser Dialysepatient",
          isCorrect: false,
          explanation: "Falsch! Adipös heißt NICHT gut ernährt! Ein Dialysepatient kann trotz Übergewicht mangelernährt sein — z.B. Eiweißmangel, Vitaminmangel.",
          explanationB1: "Falsch! Übergewicht heißt nicht gut ernährt! Auch schwere Menschen können zu wenig Nährstoffe haben.",
        },
        {
          text: "Demenz-Patient im Pflegeheim",
          isCorrect: false,
          explanation: "Falsch! Demenzpatienten sind besonders gefährdet: Sie vergessen zu essen, erkennen Nahrung nicht, haben oft Schluckstörungen.",
          explanationB1: "Falsch! Menschen mit Demenz vergessen das Essen. Sie sind besonders gefährdet.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: ANDERS ERKLÄRT — Comparison Nicht-Können vs. Nicht-Wollen
  // =============================================================
  {
    stepId: "le08-s2-tb3-06",
    phase: "s2",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Nicht essen KÖNNEN vs. nicht essen WOLLEN",
      body: "Ein wichtiger Unterschied in der Pflege: Kann der Patient nicht essen — oder will er nicht? Die Ursachen und Maßnahmen sind grundverschieden.",
    },
    contentB1: {
      title: "Kann nicht essen oder will nicht essen?",
      body: "Wichtiger Unterschied: Kann der Patient nicht essen? Oder will er nicht? Das ist ein großer Unterschied.",
    },
    question: {
      fragetext: "Vergleiche die beiden Situationen.",
      comparison: {
        instruction: "Vergleiche: Was sind die Unterschiede?",
        columns: [
          { label: "Nicht essen KÖNNEN", icon: "heart-pulse" },
          { label: "Nicht essen WOLLEN", icon: "brain" },
        ],
        rows: [
          {
            criterion: "Typische Ursachen",
            values: [
              "Schluckstörung, Zahnprothese sitzt nicht, Armparese, Übelkeit, Schmerzen",
              "Depression, Trauer, bewusste Entscheidung (Lebensende), Appetitlosigkeit durch Medikamente",
            ],
            valuesB1: [
              "Schluckprobleme, schlechte Zähne, Arm kann sich nicht bewegen, Übelkeit, Schmerzen",
              "Traurigkeit, Trauer, bewusste Entscheidung, kein Appetit durch Medikamente",
            ],
          },
          {
            criterion: "Zeichen",
            values: [
              "Husten beim Essen, Nahrung bleibt im Mund, braucht sehr lange, Erschöpfung",
              "Schiebt Teller weg, sagt 'Ich mag nicht', Gewichtsverlust trotz Essensangebot",
            ],
            valuesB1: [
              "Husten beim Essen, Essen bleibt im Mund, sehr langsam, müde",
              "Schiebt den Teller weg, sagt 'Ich will nicht', nimmt ab",
            ],
          },
          {
            criterion: "Pflegerische Maßnahme",
            values: [
              "Logopädin einschalten, Kostform anpassen, Hilfsmittel, Positionierung",
              "Ursachensuche (Depression?), Gesprächsangebot, Arzt informieren, Wunschkost",
            ],
            valuesB1: [
              "Schlucktherapie, Essen anpassen, Hilfsmittel, richtig hinsetzen",
              "Ursache suchen, Gespräch anbieten, Arzt informieren, Lieblingsessen",
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: STORYTELLING — Diary Frau Hoffmann (Score C)
  // =============================================================
  {
    stepId: "le08-s2-tb3-07",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 408-411"],
    track: "vertiefung",
    modus: "story",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "STORYTELLING",
    tag: "krankheitslehre",
    displayFormat: "diary",
    contentC1: {
      title: "Frau Hoffmanns Morgen",
      body: "Frau Hoffmann saß früher immer mit ihrem Mann am Frühstückstisch. Seit er gestorben ist, isst sie allein. Das Brot schmeckt nicht mehr. Der Tisch ist leer. Einsamkeit frisst den Appetit. Sie kann essen — aber sie hat verlernt es zu wollen.",
    },
    contentB1: {
      title: "Frau Hoffmanns Morgen",
      body: "Frau Hoffmann hat früher mit ihrem Mann zusammen gegessen. Er ist gestorben. Jetzt isst sie allein. Das Brot schmeckt nicht mehr. Der Tisch ist leer. Sie ist einsam. Sie kann essen. Aber sie will nicht mehr.",
    },

  },

  // =============================================================
  // Step 8: ERKLÄRUNG — Auswirkungen Mangelernährung (Reveal)
  // =============================================================
  {
    stepId: "le08-s2-tb3-08",
    phase: "s2",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    contentC1: {
      title: "Der Teufelskreis der Mangelernährung",
      body: "Wie Dominosteine: Eins kippt, alle fallen. Decke die Auswirkungen der Reihe nach auf!",
      glossarBegriffe: ["Sarkopenie"],
    },
    contentB1: {
      title: "Wie Dominosteine — eines kippt, alle fallen",
      body: "Mangelernährung macht vieles kaputt im Körper. Decke die Karten auf!",
      glossarBegriffe: ["Sarkopenie"],
    },
    question: {
      fragetext: "Decke die Dominosteine des Teufelskreises auf — in der richtigen Reihenfolge.",
      reveal: {
        instruction: "Tippe der Reihe nach auf die Karten.",
        cards: [
          { id: "d1", label: "Domino 1", content: "**Sarkopenie** (Muskelschwund) — Mangelernährung greift die Muskulatur an. Der Körper baut Muskelprotein ab um Energie zu gewinnen.", contentB1: "**Sarkopenie** (Muskelschwund) — Mangelernährung macht die Muskeln schwach.", icon: "dumbbell" },
          { id: "d2", label: "Domino 2", content: "**Sturzgefahr** — Weniger Muskelmasse bedeutet weniger Kraft und Gleichgewicht. Die Sturzgefahr steigt dramatisch.", contentB1: "**Sturzgefahr** — Schwache Muskeln machen Stürze.", icon: "alert-triangle" },
          { id: "d3", label: "Domino 3", content: "**Immobilität** — Nach Stürzen oft Bettlägerigkeit. Weniger Bewegung verschlechtert den Ernährungszustand weiter.", contentB1: "**Bettlägerigkeit** — Nach einem Sturz liegt der Patient oft im Bett.", icon: "bed" },
          { id: "d4", label: "Domino 4", content: "**Dekubitus** — Immobilität + Mangelernährung = hohes Dekubitus-Risiko. Die Haut wird nicht ausreichend versorgt.", contentB1: "**Druckgeschwüre** — Im Bett liegen + wenig Nährstoffe = die Haut geht kaputt.", icon: "circle-alert" },
          { id: "d5", label: "Domino 5", content: "**Weitere Folgen:** Wundheilungsstörungen, erhöhte Infektanfälligkeit, kognitive Verschlechterung und erhöhte Mortalität.", contentB1: "**Noch mehr Probleme:** Wunden heilen schlecht, öfter krank, das Denken wird schlechter.", icon: "heart-crack" },
        ],
        revealMode: "sequential",
      },
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG — Swipe Mythen Mangelernährung
  // =============================================================
  {
    stepId: "le08-s2-tb3-09",
    phase: "s2",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Mythen über Mangelernährung",
      body: "Einige weit verbreitete Annahmen über Mangelernährung sind falsch. Erkennst du die Mythen?",
    },
    contentB1: {
      title: "Stimmt das wirklich?",
      body: "Manche Aussagen über Mangelernährung sind falsch. Erkennst du die falschen?",
    },
    question: {
      fragetext: "Wische rechts wenn die Aussage stimmt, links wenn sie falsch ist.",
      swipe: {
        instruction: "Rechts = richtig, links = falsch.",
        cards: [
          {
            statement: "Übergewichtige können nicht mangelernährt sein.",
            statementB1: "Dicke Menschen können nicht mangelernährt sein.",
            isCorrect: false,
            explanation: "Falsch! Auch übergewichtige Menschen können mangelernährt sein — wenn ihnen bestimmte Nährstoffe fehlen (z.B. Proteine, Vitamine, Zink).",
            explanationB1: "Falsch! Auch übergewichtige Menschen können zu wenig Nährstoffe haben.",
          },
          {
            statement: "Einsamkeit kann Appetitlosigkeit verursachen.",
            statementB1: "Einsamkeit kann den Appetit nehmen.",
            isCorrect: true,
            explanation: "Richtig! Soziale Isolation ist ein wichtiger Risikofaktor. Allein essen schmeckt weniger — der Appetit leidet.",
            explanationB1: "Richtig! Wer allein isst, hat oft weniger Appetit.",
          },
          {
            statement: "Mangelernährung betrifft nur alte Menschen.",
            statementB1: "Nur alte Menschen sind mangelernährt.",
            isCorrect: false,
            explanation: "Falsch! Mangelernährung kann in jedem Alter auftreten: bei Tumorpatienten, nach Operationen, bei Essstörungen, bei Kindern mit Gedeihstörung.",
            explanationB1: "Falsch! Mangelernährung gibt es in jedem Alter: bei Krebs, nach Operationen, bei Kindern.",
          },
          {
            statement: "Polypharmazie kann den Appetit verringern.",
            statementB1: "Viele Medikamente können den Appetit nehmen.",
            isCorrect: true,
            explanation: "Richtig! Viele Medikamente haben als Nebenwirkung Appetitlosigkeit oder Übelkeit — besonders bei Polypharmazie (viele Medikamente gleichzeitig).",
            explanationB1: "Richtig! Viele Tabletten zusammen machen oft keinen Appetit.",
          },
          {
            statement: "Sarkopenie bedeutet Muskelaufbau.",
            statementB1: "Sarkopenie heißt Muskelaufbau.",
            isCorrect: false,
            explanation: "Falsch! Sarkopenie ist das Gegenteil — altersassoziierter Muskelschwund. Es ist ein häufiges Problem bei Mangelernährung.",
            explanationB1: "Falsch! Sarkopenie heißt Muskelschwund. Die Muskeln werden im Alter schwächer.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: ERKLÄRUNG — Refeeding-Syndrom (News)
  // =============================================================
  {
    stepId: "le08-s2-tb3-10",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "news",
    contentC1: {
      title: "WARNUNG: Zu schnell ernähren kann tödlich sein",
      body: "Das **Refeeding-Syndrom** ist lebensbedrohlich! Es tritt auf, wenn einem ausgezehrten Körper zu schnell zu viel Nahrung zugeführt wird. Folge: **Hypophosphatämie** (zu wenig Phosphat im Blut), neurologische Ausfälle, schlimmstenfalls Atemstillstand. Deshalb gilt: Bei schwerer Mangelernährung die Nahrungszufuhr LANGSAM steigern!",
      glossarBegriffe: ["Refeeding-Syndrom", "Hypophosphatämie"],
    },
    contentB1: {
      title: "Achtung: Nicht zu schnell füttern!",
      body: "Das **Refeeding-Syndrom** (Wiedernährungs-Syndrom) ist sehr gefährlich! Wenn ein ausgezehrter Mensch zu schnell zu viel Essen bekommt, wird er krank. Es gibt Probleme mit den Blutwerten. Das kann zum Tod führen. Deshalb: Bei starker Mangelernährung das Essen LANGSAM steigern!",
      glossarBegriffe: ["Refeeding-Syndrom"],
    },

  },

  // =============================================================
  // Step 11: ANWENDUNG — Sorting Wiederernährung
  // =============================================================
  {
    stepId: "le08-s2-tb3-11",
    phase: "s2",
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Schritte bei der Wiederernährung",
      body: "Bei schwerer Mangelernährung muss die Nahrungszufuhr schrittweise gesteigert werden. Die Reihenfolge ist entscheidend!",
    },
    contentB1: {
      title: "Richtige Reihenfolge beim Wiederernähren",
      body: "Bei starker Mangelernährung gibt man das Essen langsam. Die Reihenfolge ist sehr wichtig!",
    },
    question: {
      fragetext: "Bringe die 5 Schritte der Wiederernährung in die richtige Reihenfolge.",
      sortItems: [
        "Elektrolyte kontrollieren (Phosphat, Kalium, Magnesium)",
        "Langsam beginnen: ca. 10 kcal pro kg Körpergewicht",
        "Täglich langsam steigern",
        "Phosphat-Spiegel engmaschig überwachen",
        "Zielkalorien nach 5-7 Tagen erreichen",
      ],
    },
  },

  // =============================================================
  // Step 12: SZENE — Dialog Assessment-Wahl
  // =============================================================
  {
    stepId: "le08-s2-tb3-12",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411", "DNQP 2017a"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Welches Assessment?",
      body: "Die Stationsleitung kommt zu dir: 'Frau Hoffmann hat in 3 Monaten 5 kg abgenommen. Welches Ernährungs-Assessment machst du?'",
    },
    contentB1: {
      title: "Welchen Test machst du?",
      body: "Die Stationsleitung fragt: 'Frau Hoffmann hat 5 kg abgenommen. Welchen Test machst du?'",
    },
    question: {
      fragetext: "Welches Assessment wählst du?",
      patientName: "Stationsleitung",
      dialogPhases: [
        {
          context: "Die Stationsleitung: 'Frau Hoffmann hat in 3 Monaten 5 kg verloren. Sie ist 79 und lebt im Pflegeheim. Welches Assessment machst du?'",
          contextB1: "Die Stationsleitung fragt: 'Frau Hoffmann (79, Pflegeheim) hat 5 kg abgenommen. Welchen Test machst du?'",
          speaker: "Stationsleitung",
          options: [
            {
              text: "MNA — Mini Nutritional Assessment, weil sie über 65 ist und im geriatrischen Setting lebt.",
              textB1: "MNA, weil sie über 65 ist und im Pflegeheim lebt.",
              patientResponse: "Richtig gedacht! Im geriatrischen Setting ist der MNA das passende Instrument. Zeig mir, wie du ihn durchführst.",
              patientResponseB1: "Richtig! Im Pflegeheim ist der MNA der richtige Test.",
              score: 3,
              feedback: "Genau! Das MNA (Mini Nutritional Assessment) ist für Patienten ab 65 im geriatrischen Setting gedacht. Im Krankenhaus hingegen wäre der NRS 2002 richtig.",
              feedbackB1: "Richtig! Der MNA ist für ältere Menschen im Pflegeheim. Im Krankenhaus nimmt man den NRS 2002.",
            },
            {
              text: "NRS 2002, das ist doch Standard.",
              textB1: "NRS 2002 — das ist der Standardtest.",
              patientResponse: "NRS 2002 ist gut — aber nur fürs Krankenhaus! Frau Hoffmann lebt im Pflegeheim. Welches Assessment passt besser?",
              patientResponseB1: "NRS 2002 ist für das Krankenhaus. Frau Hoffmann lebt im Heim. Welcher Test passt besser?",
              score: 2,
              feedback: "Fast! NRS 2002 ist das Standard-Screening im Krankenhaus. Aber Frau Hoffmann ist im Pflegeheim — dort ist der MNA das passende Instrument.",
              feedbackB1: "Fast! NRS 2002 ist für das Krankenhaus. Im Pflegeheim nimmt man den MNA.",
            },
            {
              text: "BMI reicht doch — einfach wiegen und Größe messen.",
              textB1: "BMI reicht. Einfach wiegen.",
              patientResponse: "Der BMI allein reicht NICHT! Er wird verfälscht durch Ödeme, Amputationen und verrät nichts über den Nährstoffstatus.",
              patientResponseB1: "BMI allein reicht nicht! Er zeigt nicht alles.",
              score: 1,
              feedback: "Das ist ein häufiger Schülerfehler! Der BMI ist ein Screening-Parameter, reicht aber allein nicht aus. Assessments wie MNA oder NRS 2002 sind aussagekräftiger.",
              feedbackB1: "Fehler! BMI allein zeigt nicht genug. Du brauchst den MNA oder NRS 2002 Test.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 13: ERKLÄRUNG — MNA vs. NRS 2002 (ProContra)
  // =============================================================
  {
    stepId: "le08-s2-tb3-13",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411", "DNQP 2017a"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "procontra",
    contentC1: {
      title: "MNA vs. NRS 2002 — Welches Assessment wann?",
      body: "**MNA (ab 65 J., Pflegeheim/Geriatrie):** Short Form mit 6 Fragen als Screening, dann Voll-MNA mit 18 Fragen. Ergebnis: 24-30 = normal, 17-23,5 = Risiko, unter 17 = Mangelernährung. **NRS 2002 (Krankenhaus, alle Altersgruppen):** Vorscreening mit 4 Ja/Nein-Fragen, bei Auffälligkeit Hauptscreening (Ernährungsstatus + Krankheitsschwere + Alter). Score ab 3 = Ernährungsintervention nötig.",
      glossarBegriffe: ["MNA", "NRS 2002"],
    },
    contentB1: {
      title: "Zwei Tests — wann welchen?",
      body: "**MNA:** Für ältere Menschen ab 65 im Pflegeheim. Erst 6 kurze Fragen, dann 18 Fragen wenn nötig. Ergebnis: Zahl unter 17 = Mangelernährung. **NRS 2002:** Für alle Patienten im Krankenhaus. Erst 4 Ja/Nein-Fragen. Wenn etwas auffällt: mehr Fragen. Ergebnis: Ab 3 Punkten muss man handeln.",
      glossarBegriffe: ["MNA", "NRS 2002"],
    },

  },

  // =============================================================
  // Step 14: CHECKPOINT — MC Assessment-Wahl Elisabeth Kramer
  // =============================================================
  {
    stepId: "le08-s2-tb3-14",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Elisabeth Kramer — welches Assessment?",
      body: "Elisabeth Kramer, 42 Jahre, wird mit Gewichtsverlust auf die neurologische Station aufgenommen. MS-Schub mit Dysphagie.",
    },
    contentB1: {
      title: "Frau Kramer — welcher Test?",
      body: "Frau Kramer (42 Jahre) kommt ins Krankenhaus. Sie hat abgenommen und kann schlecht schlucken.",
    },
    question: {
      fragetext: "Welches Assessment führst du bei Frau Kramer durch?",
      optionen: [
        {
          text: "NRS 2002",
          isCorrect: true,
          explanation: "Richtig! Frau Kramer ist im Krankenhaus — dort ist der NRS 2002 Standard. Sie ist 42, also nicht geriatrisch. Vorscreening positiv (Gewichtsverlust + neurologische Erkrankung) → Hauptscreening → Score vermutlich ab 3.",
          explanationB1: "Richtig! Frau Kramer ist im Krankenhaus. Dort nimmt man den NRS 2002. Sie ist erst 42 — nicht der MNA.",
        },
        {
          text: "MNA",
          isCorrect: false,
          explanation: "Der MNA ist für das geriatrische Setting (ab 65 J., Pflegeheim). Frau Kramer ist 42 und im Krankenhaus — hier passt der NRS 2002!",
          explanationB1: "Der MNA ist für ältere Menschen ab 65 im Pflegeheim. Frau Kramer ist 42 und im Krankenhaus.",
        },
        {
          text: "SGA",
          isCorrect: false,
          explanation: "Der SGA (Subjective Global Assessment) ist ein ergänzendes Instrument — aber das Standard-Screening im Krankenhaus ist der NRS 2002.",
          explanationB1: "Der SGA ist ein Zusatz-Test. Standard im Krankenhaus ist der NRS 2002.",
        },
        {
          text: "Nur BMI berechnen",
          isCorrect: false,
          explanation: "BMI allein reicht nicht! Bei Frau Kramer kann der BMI durch den Gewichtsverlust zwar auf Untergewicht hinweisen, aber er erfasst nicht die Ursachen und das Ausmaß der Mangelernährung.",
          explanationB1: "BMI allein reicht nicht! Er zeigt nicht warum jemand abnimmt.",
        },
      ],
    },
  },

  // =============================================================
  // Step 15: ANDERS ERKLÄRT — Diagram Flowchart Assessment-Auswahl
  // =============================================================
  {
    stepId: "le08-s2-tb3-15",
    phase: "s2",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "Entscheidungsbaum — Welches Assessment?",
      body: "Je nach Setting und Alter des Patienten wählst du ein anderes Assessment. Dieser Entscheidungsbaum zeigt dir den Weg.",
    },
    contentB1: {
      title: "Welchen Test nehme ich? Entscheidungsbaum",
      body: "Welchen Test du nimmst, hängt vom Ort und vom Alter ab. Dieser Baum zeigt dir den Weg.",
    },
    question: {
      fragetext: "Verfolge den Entscheidungsbaum.",
      diagram: {
        diagramType: "flowchart",
        instruction: "Folge dem Entscheidungsbaum von oben nach unten.",
        nodes: [
          { id: "start", label: "Patient kommt an", highlight: true },
          { id: "setting", label: "Welches Setting?" },
          { id: "kh", label: "Krankenhaus" },
          { id: "geriatrie", label: "Geriatrie/Pflegeheim" },
          { id: "kinder", label: "Kinder-Station" },
          { id: "nrs", label: "NRS 2002", labelB1: "NRS 2002", highlight: true },
          { id: "mna", label: "MNA", labelB1: "MNA", highlight: true },
          { id: "strong", label: "STRONGkids", labelB1: "STRONGkids", highlight: true },
          { id: "positiv", label: "Screening positiv?" },
          { id: "ja", label: "Ernährungsplan erstellen!" },
          { id: "nein", label: "Wöchentlich wiederholen" },
        ],
        edges: [
          { from: "start", to: "setting" },
          { from: "setting", to: "kh", label: "Krankenhaus" },
          { from: "setting", to: "geriatrie", label: "ab 65 J." },
          { from: "setting", to: "kinder", label: "Kinder" },
          { from: "kh", to: "nrs" },
          { from: "geriatrie", to: "mna" },
          { from: "kinder", to: "strong" },
          { from: "nrs", to: "positiv" },
          { from: "mna", to: "positiv" },
          { from: "strong", to: "positiv" },
          { from: "positiv", to: "ja", label: "Ja" },
          { from: "positiv", to: "nein", label: "Nein" },
        ],
        interactive: false,
      },
    },
  },

  // =============================================================
  // Step 16: ERKLÄRUNG — BMI + Mnemonic
  // =============================================================
  {
    stepId: "le08-s2-tb3-16",
    phase: "s2",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 459, 410-411", "DNQP 2017a"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "mnemonic",
    contentC1: {
      title: "BMI = Braucht Mehr Information",
      body: "**BMI-Formel:** Gewicht (kg) geteilt durch Größe² (m). Normalgewicht: 18,5-24,9. Untergewicht: unter 18,5. Adipositas Grad I: 30-34,9. **ABER:** BMI allein reicht NICHT! Er wird verfälscht bei Ödemen, Amputationen, Kyphose. Gewichtsverläufe und Assessment-Scores sind aussagekräftiger. **DNQP-Expertenstandard:** Screening auf Mangelernährung bei Aufnahme!",
      glossarBegriffe: ["BMI", "Adipositas"],
    },
    contentB1: {
      title: "BMI = Braucht Mehr Information",
      body: "**BMI:** Gewicht geteilt durch Größe mal Größe. Normal: 18,5-24,9. Zu dünn: unter 18,5. Zu schwer: über 30. **Aber Achtung:** BMI allein reicht nicht! Bei Wassereinlagerungen zeigt er falsches Gewicht. Besser: Gewicht regelmäßig wiegen und schauen ob es weniger wird.",
      glossarBegriffe: ["BMI"],
    },

  },

  // =============================================================
  // Step 17: ANWENDUNG — Calculation BMI Elisabeth Kramer
  // =============================================================
  {
    stepId: "le08-s2-tb3-17",
    phase: "s2",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 459"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "BMI berechnen — Frau Kramer",
      body: "Elisabeth Kramer wiegt 48,5 kg bei einer Körpergröße von 1,65 m. Berechne ihren BMI und ordne das Ergebnis ein.",
    },
    contentB1: {
      title: "BMI ausrechnen — Frau Kramer",
      body: "Frau Kramer wiegt 48,5 kg. Sie ist 1,65 m groß. Rechne den BMI aus.",
    },
    question: {
      fragetext: "Berechne den BMI: 48,5 kg geteilt durch (1,65 m)².",
      calculation: {
        instruction: "BMI = 48,5 / (1,65 × 1,65) = 48,5 / 2,72 = ?",
        formula: "BMI = Gewicht (kg) / Größe² (m)",
        correctValue: 17.8,
        unit: "",
        tolerance: 0.3,
        explanation: "BMI = 48,5 / (1,65)² = 48,5 / 2,7225 = 17,8. Das ist Untergewicht (unter 18,5). Frau Kramer ist mangelernährt und braucht dringend eine Ernährungsintervention.",
        explanationB1: "BMI = 48,5 geteilt durch 2,72 = 17,8. Das ist Untergewicht (unter 18,5). Frau Kramer braucht dringend Hilfe beim Essen.",
      },
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Estimation Mangelernährung Statistik
  // =============================================================
  {
    stepId: "le08-s2-tb3-18",
    phase: "s2",
    stepType: "estimation",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Wie viele Patienten sind mangelernährt?",
      body: "Schätze: Wie viel Prozent der Krankenhauspatienten sind bereits bei der Aufnahme mangelernährt?",
    },
    contentB1: {
      title: "Wie viele Patienten haben zu wenig Nährstoffe?",
      body: "Rate: Wie viele von 100 Patienten im Krankenhaus haben schon bei der Aufnahme zu wenig Nährstoffe?",
    },
    question: {
      fragetext: "Schätze den Prozentsatz.",
      estimation: {
        instruction: "Schiebe den Regler auf deine Schätzung.",
        unit: "%",
        correctValue: 18,
        tolerance: 20,
        funFact: "Im Verlauf des Krankenhausaufenthalts steigt die Zahl auf 32-55 %!",
        explanation: "Ca. 18,2 % der Krankenhauspatienten sind bereits bei Aufnahme mangelernährt. Im Verlauf steigt der Anteil auf 32-55 %.",
        explanationB1: "Etwa 18 von 100 Patienten haben schon bei der Aufnahme zu wenig Nährstoffe. Später werden es noch mehr: 32-55 von 100.",
      },
    },
  },

  // =============================================================
  // Step 19: INTERLEAVING — MC Dekubitus + Mangelernährung
  // =============================================================
  {
    stepId: "le08-s2-tb3-19",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Querverbindung: Mangelernährung und Dekubitus",
      body: "Du hast in LE-06 gelernt, dass viele Faktoren das Dekubitus-Risiko beeinflussen. Mangelernährung spielt dabei eine wichtige Rolle.",
    },
    contentB1: {
      title: "Mangelernährung und Druckgeschwüre",
      body: "In LE-06 hast du Druckgeschwüre (Dekubitus) gelernt. Mangelernährung macht das Risiko höher.",
    },
    question: {
      fragetext: "Warum erhöht Mangelernährung das Dekubitus-Risiko?",
      optionen: [
        {
          text: "Die Gewebetoleranz sinkt — Haut und Unterhautgewebe werden anfälliger für Druckschäden.",
          isCorrect: true,
          explanation: "Richtig! Bei Mangelernährung fehlen Proteine und Mikronährstoffe, die das Gewebe schützen. Die Haut wird dünner und anfälliger für Druck.",
          explanationB1: "Richtig! Bei Mangelernährung wird die Haut dünner. Sie hält Druck schlechter aus.",
        },
        {
          text: "Der Patient schwitzt mehr.",
          isCorrect: false,
          explanation: "Schwitzen ist kein typisches Zeichen der Mangelernährung. Das Problem ist die reduzierte Gewebetoleranz durch fehlende Nährstoffe.",
          explanationB1: "Schwitzen hat nichts damit zu tun. Das Problem ist: Die Haut wird schwächer.",
        },
        {
          text: "Die Haut wird dicker.",
          isCorrect: false,
          explanation: "Im Gegenteil! Bei Mangelernährung wird die Haut dünner, nicht dicker — sie verliert ihre Schutzfunktion.",
          explanationB1: "Falsch! Die Haut wird dünner, nicht dicker. Sie schützt nicht mehr so gut.",
        },
        {
          text: "Der BMI steigt.",
          isCorrect: false,
          explanation: "Bei Mangelernährung sinkt der BMI — nicht steigt er. Aber auch bei hohem BMI kann Mangelernährung vorliegen.",
          explanationB1: "Nein, der BMI sinkt bei Mangelernährung. Er steigt nicht.",
        },
      ],
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG — Reveal Dehydratation/Exsikkose
  // =============================================================
  {
    stepId: "le08-s2-tb3-20",
    phase: "s2",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453, 410"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Dehydratation und Exsikkose erkennen",
      body: "Flüssigkeitsmangel ist besonders bei älteren Menschen häufig — und gefährlich. Decke die 5 klinischen Zeichen auf.",
      glossarBegriffe: ["Dehydratation", "Exsikkose"],
    },
    contentB1: {
      title: "Zeichen von Wassermangel erkennen",
      body: "Zu wenig Wasser im Körper ist gefährlich. Besonders für alte Menschen. Lerne die 5 Zeichen.",
      glossarBegriffe: ["Dehydratation", "Exsikkose"],
    },
    question: {
      fragetext: "Decke die 5 Zeichen der Dehydratation auf.",
      reveal: {
        instruction: "Tippe auf die Karten um die Zeichen zu sehen.",
        cards: [
          { id: "z1", label: "Zeichen 1", content: "**Stehende Hautfalten** — ziehe die Haut am Handrücken hoch. Bleibt sie stehen? Das ist ein Alarmsignal!", contentB1: "**Stehende Hautfalte** — wenn man die Haut hochzieht und sie stehenbleibt. Das ist ein Alarmzeichen!", icon: "search" },
          { id: "z2", label: "Zeichen 2", content: "**Trockene Schleimhäute** — trockene Lippen, trockener Mund, belegte Zunge.", contentB1: "**Trockener Mund** — trockene Lippen, trockener Mund, Belag auf der Zunge.", icon: "droplet" },
          { id: "z3", label: "Zeichen 3", content: "**Konzentrierter Urin** — dunkelgelb bis bräunlich, wenig Menge, starker Geruch.", contentB1: "**Dunkler Urin** — wenig, dunkel und riecht stark.", icon: "flask-round" },
          { id: "z4", label: "Zeichen 4", content: "**Verwirrtheit** — plötzliche Desorientierung, besonders bei älteren Menschen ein Warnsignal!", contentB1: "**Verwirrtheit** — plötzlich weiß der Patient nicht mehr wo er ist. Besonders bei alten Menschen!", icon: "brain" },
          { id: "z5", label: "Zeichen 5", content: "**Tachykardie** — das Herz schlägt schneller, weil weniger Blutvolumen vorhanden ist.", contentB1: "**Schneller Herzschlag** — das Herz schlägt schneller weil zu wenig Wasser im Blut ist.", icon: "heart-pulse" },
        ],
        revealMode: "free",
      },
    },
  },

  // =============================================================
  // Step 21: ANWENDUNG — Freetext Frau Hoffmann
  // =============================================================
  {
    stepId: "le08-s2-tb3-21",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411", "DNQP 2017a"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Pflegerische Analyse — Frau Hoffmann",
      body: "Frau Hoffmann (79) hat in 3 Monaten 5 kg abgenommen, isst wenig und lebt allein im Pflegeheim. Analysiere die Situation.",
    },
    contentB1: {
      title: "Was ist los mit Frau Hoffmann?",
      body: "Frau Hoffmann (79) hat 5 kg abgenommen. Sie isst wenig. Sie lebt allein im Heim. Was denkst du?",
    },
    question: {
      fragetext: "Welche 3 Ursachen vermutest du? Welches Assessment führst du durch? Schreibe 3-4 Sätze.",
      freetext: {
        prompt: "Welche 3 Ursachen vermutest du bei Frau Hoffmann? Welches Assessment führst du durch?",
        promptB1: "Was könnten die Gründe sein? Welchen Test machst du? Schreibe 3-4 Sätze.",
        satzanfaenge: [
          "Mögliche Ursachen sind...",
          "Ich führe folgendes Assessment durch...",
          "Als pflegerische Maßnahme würde ich...",
        ],
        systemPrompt: "Bewerte ob der Schüler mindestens 2 plausible Ursachen nennt (z.B. Einsamkeit, Depression, Zahnprothese, Medikamente) und das richtige Assessment wählt (MNA für geriatrisches Setting). Sandwich-Prinzip: erst loben, dann korrigieren.",
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 2
  // =============================================================
  {
    stepId: "le08-s2-tb3-22",
    phase: "s2",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411", "DNQP 2017a"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "/audio/le-08/s2-zusammenfassung.mp3",
    audioLabel: "Zusammenfassung anhören (ca. 3 Min)",
    contentC1: {
      title: "Zusammenfassung — Session 2",
      body: "Du hast Mangelernährung, ihre Risikofaktoren und die passenden Assessments kennengelernt.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Du weißt jetzt was Mangelernährung ist, warum sie entsteht und welchen Test du machst.",
    },
    question: {
      fragetext: "Zusammenfassung der Session",
      summary: {
        reflexionRueckbezug: "Nächste Session: Wie du Patienten beim Essen unterstützt — Positionierung, Trinkhilfen und warum der Schnabelbecher gefährlich ist.",
        kernaussagen: [
          "**Mangelernährung:** Auch bei Übergewicht möglich! Anhaltendes Defizit an Energie und/oder Nährstoffen.",
          "**5 Risikofaktor-Gruppen:** Erkrankungen, Soziales, Medikamente, Funktionell, Institutionell.",
          "**Refeeding-Syndrom:** Bei schwerer Mangelernährung LANGSAM ernähren! Sonst lebensgefährlich.",
          "**MNA vs. NRS 2002:** MNA im geriatrischen Setting (ab 65 J.), NRS 2002 im Krankenhaus.",
          "**BMI allein reicht nicht:** Gewichtsverläufe und Assessment-Scores sind aussagekräftiger.",
          "**Dehydratation:** 5 Zeichen — stehende Hautfalten, trockene Schleimhäute, dunkler Urin, Verwirrtheit, Tachykardie.",
        ],
      },
    },
  },
];
