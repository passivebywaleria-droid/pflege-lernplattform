// Session 1: "Bewegung beginnt im Kopf" — LE 06 Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB1: Kinästhetik-Grundlagen (KB-I, I-01 bis I-06) + TB2: Parallele/spiralige Bewegung + Praxisregeln
// Leitfall: Frau Becker (79, Hüft-TEP, Tag 1 postoperativ)
// Bloom: B1-B3, 22 Steps, ~30 Min

import type { ContentStep, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-06",
  ceId: "ce-02",
  title: "Menschen aller Altersstufen in ihrer Mobilität unterstützen",
  titleShort: "Mobilität unterstützen",
  zeitrichtwert: 40,
  sessionCount: 8,
  geschaetzteLernzeit: { c1: 30, b1: 35 },
  kompetenzbereiche: ["KB-I.1", "KB-II.1", "KB-IV.1", "KB-V.1"],
  bloomStufen: [1, 2, 3],
  voraussetzungen: [],
  leitfall: {
    name: "Frau Becker",
    alter: 79,
    beruf: "Rentnerin",
    diagnose: "Hüft-TEP, Tag 1 postoperativ",
    setting: "Krankenhaus, orthopädische Station",
    kernproblem: "Sturzangst nach Hüft-OP, Erstmobilisation",
  },
  glossarCount: 21,
  quellenCount: 6,
};

export const STEPS_S1: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — WOW-Moment Dialog (Curiosity Gap)
  // Herr K. steht nach 69 Jahren allein auf (Rohmaterial K)
  // =============================================================
  {
    stepId: "le06-s1-tb1-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-343"],
    track: "basis",
    bildhinweis: 'Älterer Patient (Herr K.) sitzt auf der Bettkante und stützt sich selbst ab — er steht gerade allein auf, zum ersten Mal seit Wochen. Die Kinästhetik-Trainerin steht daneben, eine Hand ermutigend auf seiner Schulter, die andere locker an der Seite. Sie lächelt stolz und greift NICHT ein. Kernaussage: Eigenbewegung fördern statt für den Patienten machen. Der Moment des Erfolgs.',
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Bewegung beginnt im Kopf",
      body: "Station 5, Zimmer 12. Herr K. liegt seit Wochen mit einem steifen Bein im Bett. Die Pflegekräfte haben alles versucht. Dann kommt die Kinästhetik-Trainerin.",
      fallbezug: "Kinästhetik nutzt die Ressourcen des Patienten statt ihn passiv zu bewegen.",
    },
    contentB1: {
      title: "Ein besonderer Moment",
      body: "Herr K. liegt lange im Bett. Sein Bein ist steif. Niemand kann ihn bewegen. Dann kommt eine Trainerin.",
      fallbezug: "Kinästhetik bedeutet: Der Patient bewegt sich selbst. Wir helfen nur.",
    },
    question: {
      fragetext: "Was passiert als Nächstes?",
      patientName: "Kinästhetik-Trainerin",
      dialogPhases: [
        {
          context: "Die Kinästhetik-Trainerin betritt das Zimmer. Statt Herrn K. einfach hochzuziehen, setzt sie sich ans Bett und fragt: 'Herr K., wie stehen Sie denn normalerweise zuhause auf?' Er überlegt — und zeigt es. Langsam dreht er sich zur Seite, stützt sich ab... und steht auf. Nach Wochen im Bett. Allein.",
          contextB1: "Die Trainerin fragt: 'Wie stehen Sie zuhause auf?' Herr K. zeigt es — und steht allein auf! Nach vielen Wochen im Bett.",
          speaker: "Kinästhetik-Trainerin",
          options: [
            {
              text: "Wow, das hätte ich nicht erwartet! Was hat sie anders gemacht als die anderen Pflegekräfte?",
              textB1: "Wie hat sie das gemacht?",
              patientResponse: "Sie hat seine Ressourcen genutzt. Statt ihn zu bewegen, hat sie ihn gefragt wie ER sich bewegt. Das ist Kinästhetik: Eigenbewegung fördern statt übernehmen.",
              patientResponseB1: "Sie hat gefragt statt gemacht. Der Patient hat sich selbst bewegt. Das ist Kinästhetik.",
              score: 3,
              feedback: "Genau! Kinästhetik bedeutet: Der Mensch bewegt sich selbst. Wir unterstützen nur — statt zu übernehmen. Die Trainerin hat Herrn K.s Ressourcen entdeckt.",
              feedbackB1: "Richtig! Kinästhetik heißt: Der Mensch bewegt sich selbst. Wir helfen nur dabei.",
            },
            {
              text: "Konnte er die ganze Zeit aufstehen und hat es nur nicht versucht?",
              textB1: "Konnte er die ganze Zeit aufstehen?",
              patientResponse: "Nicht ganz. Er wusste nicht mehr WIE. Die anderen haben ihn immer parallel hochgezogen — das hat nicht funktioniert. Die Trainerin hat ihn an seine eigene Bewegung erinnert.",
              patientResponseB1: "Nicht ganz. Er hat vergessen wie es geht. Die Trainerin hat ihm geholfen es wieder zu finden.",
              score: 2,
              feedback: "Gute Frage! Herr K. hatte die Fähigkeit noch — aber durch das passive 'Hochgezogen-Werden' hat er verlernt, sie zu nutzen. Kinästhetik aktiviert vorhandene Ressourcen.",
              feedbackB1: "Gute Frage! Herr K. konnte es noch. Aber er hat es vergessen. Kinästhetik hilft ihm, es wieder zu finden.",
            },
            {
              text: "Das klingt zu einfach. In der Praxis ist das bestimmt anders.",
              textB1: "Das klingt zu einfach.",
              patientResponse: "Es ist tatsächlich nicht immer so einfach. Aber das Prinzip stimmt: Erst fragen, dann beobachten, dann unterstützen — nicht sofort übernehmen. Genau das lernst du jetzt.",
              patientResponseB1: "Es ist nicht immer so einfach. Aber das Prinzip ist: Erst fragen, dann helfen. Nicht alles übernehmen.",
              score: 1,
              feedback: "Verständliche Skepsis! Kinästhetik ist kein Wundermittel — aber das Prinzip 'Ressourcen nutzen statt übernehmen' ist wissenschaftlich belegt und funktioniert in vielen Situationen.",
              feedbackB1: "Das ist verständlich. Kinästhetik hilft nicht immer sofort. Aber das Prinzip 'Fragen statt Übernehmen' funktioniert oft.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: SZENE — Alltagsmythen Swipe
  // =============================================================
  {
    stepId: "le06-s1-tb1-02",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-348"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Mythen über Mobilisation",
      body: "Bevor wir Kinästhetik lernen: Was glaubst du — stimmen diese Aussagen? Wische nach rechts (stimmt) oder links (stimmt nicht).",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Was ist richtig? Was ist falsch? Wische nach rechts oder links.",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      swipe: {
        instruction: "Wische: Richtig oder falsch?",
        cards: [
          {
            statement: "Alte Menschen kann man nicht mehr mobilisieren.",
            statementB1: "Alte Menschen kann man nicht mehr bewegen.",
            isCorrect: false,
            explanation: "Falsch! Auch hochbetagte Menschen haben Bewegungsressourcen. Kinästhetik hilft, diese zu entdecken und zu nutzen — wie bei Herrn K.",
            explanationB1: "Falsch! Auch alte Menschen können sich bewegen. Man muss ihre Ressourcen finden.",
          },
          {
            statement: "Patienten muss man zum Aufstehen hochziehen.",
            statementB1: "Man muss Patienten hochziehen.",
            isCorrect: false,
            explanation: "Falsch! Hochziehen blockiert die Eigenbewegung. Kinästhetik setzt auf spiralige Bewegung und Unterstützung an den richtigen Stellen.",
            explanationB1: "Falsch! Hochziehen ist schlecht. Der Patient soll sich selbst drehen und aufstehen. Wir helfen nur.",
          },
          {
            statement: "Kinästhetik ist nur etwas für Physiotherapeuten.",
            statementB1: "Kinästhetik ist nur für Physiotherapeuten.",
            isCorrect: false,
            explanation: "Falsch! Kinästhetik ist ein Werkzeug für alle Pflegenden. Jede Pflegekraft kann kinästhetische Prinzipien im Alltag anwenden.",
            explanationB1: "Falsch! Alle Pflegekräfte können Kinästhetik nutzen. Nicht nur Physiotherapeuten.",
          },
          {
            statement: "Je weicher die Matratze, desto besser für den Patienten.",
            statementB1: "Eine weiche Matratze ist am besten.",
            isCorrect: false,
            explanation: "Falsch! Weiche Matratzen erschweren die Eigenbewegung, weil der Patient 'einsinkt'. Eingerollte Handtücher bieten besseren Widerstand zum Abdrücken.",
            explanationB1: "Falsch! Weiche Matratzen sind schlecht für die Bewegung. Der Patient sinkt ein und kann sich nicht gut drehen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Was ist Kinästhetik? (displayFormat: glossary)
  // =============================================================
  {
    stepId: "le06-s1-tb1-03",
    phase: "s1",
    stepType: "text",
    displayFormat: "glossary",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-343"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Was ist Kinästhetik?",
      body: "**Kinästhetik** ist ein Werkzeug, das sich mit dem Ablauf menschlicher Bewegung und Aktivität beschäftigt.\n\n**Entwickelt** in den 1970er Jahren von Dr. Frank Hatch (Tänzer und Verhaltenskybernetiker) und Dr. Lenny Maietta (Psychologin) in den USA.\n\n**Ziele der Kinästhetik:**\n- Ressourcen des Patienten nutzen\n- Selbstständigkeit fördern\n- Körperbewusstsein stärken\n- Physiologische Bewegung ermöglichen\n- Nonverbale Kommunikation verstehen\n\n**Wichtig:** Kinästhetik ist kein Therapieverfahren, sondern ein Werkzeug für den Pflegealltag. Jede Pflegekraft kann es anwenden.",
      glossarBegriffe: ["Kinästhetik", "Mobilisation"],
    },
    contentB1: {
      title: "Was ist Kinästhetik?",
      body: "**Kinästhetik** = Eine Methode für Bewegung.\n\nWir lernen: Wie bewegen wir uns richtig? Wie helfen wir dem Patienten?\n\n**Die Ziele:**\n- Was kann der Patient schon? Das nutzen wir!\n- Der Patient soll so viel wie möglich selbst machen\n- Wir helfen nur so viel wie nötig\n\nKinästhetik ist kein Therapie-Verfahren. Es ist ein Werkzeug für jeden Tag.",
      glossarBegriffe: ["Kinästhetik", "Mobilisation"],
    },
  },

  // =============================================================
  // Step 4: ERKLÄRUNG — 6 Kinästhetik-Konzepte (Reveal)
  // =============================================================
  {
    stepId: "le06-s1-tb1-04",
    phase: "s1",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.343-346"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Die 6 Kinästhetik-Konzepte",
      body: "Tippe auf jede Karte, um das Konzept zu entdecken. Kinästhetik basiert auf 6 Grundkonzepten.",
    },
    contentB1: {
      title: "6 Konzepte der Kinästhetik",
      body: "Tippe auf jede Karte. Was gehört alles zur Kinästhetik?",
    },
    question: {
      fragetext: "Entdecke die 6 Konzepte:",
      reveal: {
        instruction: "Tippe auf jede Karte, um mehr zu erfahren.",
        revealMode: "free" as const,
        cards: [
          {
            id: "k1",
            label: "Interaktion",
            content: "Alle Sinne nutzen, besonders das kinästhetische Sinnessystem: Spüren, wie sich der Körper bewegt.",
            contentB1: "Alle Sinne nutzen. Spüren, wie der Körper sich bewegt.",
          },
          {
            id: "k2",
            label: "Funktionale Anatomie",
            content: "Knochen tragen das Gewicht, Muskeln halten die Position. Merksatz: 'Massen fassen, Zwischenräume spielen lassen.'",
            contentB1: "Knochen tragen das Gewicht. Muskeln halten die Position. Regel: An den festen Teilen anfassen, nicht an den weichen Stellen.",
          },
          {
            id: "k3",
            label: "Menschliche Bewegung",
            content: "Unterscheidung: Haltungsbewegung (Position halten) und Transportbewegung (Ort wechseln). Bewegungsmuster: parallel oder spiralig.",
            contentB1: "Es gibt 2 Arten: Position halten und sich von A nach B bewegen. Die Bewegung kann gerade oder drehend sein.",
          },
          {
            id: "k4",
            label: "Anstrengung",
            content: "Drücken und Ziehen als Grundkräfte. Spiralige Bewegungen brauchen weniger Kraft als parallele.",
            contentB1: "Drücken und Ziehen. Drehen braucht weniger Kraft als gerade Bewegung.",
          },
          {
            id: "k5",
            label: "Menschliche Funktion",
            content: "7 Grundpositionen vom Liegen bis zum Stehen. Jede Position ist Basis für die nächste Bewegung.",
            contentB1: "7 Positionen: vom Liegen bis zum Stehen. Jede Position ist wichtig.",
          },
          {
            id: "k6",
            label: "Umgebung",
            content: "Die Umgebung beeinflusst die Bewegung: Betthöhe, Matratze, Hilfsmittel, Platz. Gut gestaltet = leichtere Bewegung.",
            contentB1: "Die Umgebung ist wichtig: Wie hoch ist das Bett? Ist genug Platz? Sind Hilfsmittel da?",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: CHECKPOINT — Anticipation-MC (Brilliant-Prinzip)
  // Warum nicht in die Achselhöhle greifen?
  // =============================================================
  {
    stepId: "le06-s1-tb1-05",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Was glaubst du?",
      body: "Bevor wir es erklären: Was denkst du — warum soll man beim Mobilisieren NICHT in die Achselhöhle greifen?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Warum soll man NICHT unter die Arme greifen beim Mobilisieren?",
    },
    question: {
      fragetext: "Warum soll man beim Mobilisieren NICHT in die Achselhöhle greifen?",
      mcVariant: "anticipation" as const,
      optionen: [
        {
          text: "Weil es die Eigenbewegung des Patienten blockiert",
          isCorrect: true,
          explanation: "Richtig! Wenn man in die Achselhöhle (= Zwischenraum) greift, kann der Patient seinen Oberkörper nicht mehr selbst bewegen. Die Eigenbewegung wird blockiert.",
          explanationB1: "Richtig! Wenn man unter die Arme greift, kann sich der Patient nicht mehr selbst bewegen.",
        },
        {
          text: "Weil es dem Patienten wehtut",
          isCorrect: false,
          explanation: "Schmerz kann ein Nebeneffekt sein, aber der Hauptgrund ist: Der Zwischenraum Achsel wird blockiert und der Patient kann sich nicht mehr selbst bewegen.",
          explanationB1: "Ja, es kann wehtun. Aber der Hauptgrund ist: Der Patient kann sich nicht mehr selbst bewegen.",
        },
        {
          text: "Weil es für die Pflegekraft anstrengender ist",
          isCorrect: false,
          explanation: "Es ist tatsächlich anstrengender, aber der kinästhetische Grund ist: Zwischenräume müssen frei bleiben, damit der Patient sich selbst bewegen kann.",
          explanationB1: "Ja, es ist schwerer. Aber der Hauptgrund ist: Zwischenräume müssen frei bleiben.",
        },
        {
          text: "Weil der Patient dann nicht atmen kann",
          isCorrect: false,
          explanation: "Die Atmung wird nicht direkt blockiert. Der kinästhetische Grund ist: Greift man in Zwischenräume, blockiert man die Eigenbewegung des Patienten.",
          explanationB1: "Die Atmung ist nicht das Problem. Der Grund ist: Man blockiert die eigene Bewegung des Patienten.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: ERKLÄRUNG — 7 Massen + 6 Zwischenräume (displayFormat: analogy)
  // =============================================================
  {
    stepId: "le06-s1-tb1-06",
    phase: "s1",
    stepType: "text",
    displayFormat: "analogy",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    contentC1: {
      title: "7 Massen und 6 Zwischenräume",
      body: "**Stell dir den Körper wie eine Kette aus 7 Kugeln vor:**\n\nDie **7 Massen** (= die schweren Teile):\nKopf, Brustkorb, Becken, 2 Arme, 2 Beine\n\nDie **6 Zwischenräume** (= die beweglichen Verbindungen):\nHals, Taille, 2 Achselhöhlen, 2 Leisten\n\n**Die goldene Regel:**\n- An den **Massen** unterstützen (Schulter, Becken)\n- Die **Zwischenräume** FREI lassen (Achselhöhle, Taille, Leiste)\n\nWarum? Weil Zwischenräume die Gelenke sind, die Bewegung ermöglichen. Greifst du dort hinein, blockierst du die Eigenbewegung — wie ein Scharnier, das man festhält.",
      glossarBegriffe: ["Kinästhetik", "Mobilisation"],
    },
    contentB1: {
      title: "7 Massen und 6 Zwischenräume",
      body: "**Der Körper hat 7 schwere Teile (Massen):**\nKopf, Brustkorb, Becken, 2 Arme, 2 Beine\n\n**Und 6 bewegliche Stellen (Zwischenräume):**\nHals, Taille, 2 Achselhöhlen, 2 Leisten\n\n**Die Regel:**\n- An den Massen anfassen (Schulter, Becken) = RICHTIG\n- In die Zwischenräume greifen (Achsel, Taille) = FALSCH\n\nWarum? Die Zwischenräume sind wie Scharniere. Wenn du sie festhältst, kann sich der Patient nicht bewegen.",
      glossarBegriffe: ["Kinästhetik"],
    },
  },

  // =============================================================
  // Step 7: CHECKPOINT — MC Massen/Zwischenräume (Score A/B/C)
  // =============================================================
  {
    stepId: "le06-s1-tb1-07",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "anatomie",
    contentC1: {
      title: "Kurzer Check!",
      body: "Frau Becker liegt im Bett und soll sich zur Seite drehen. Wo greifst du an?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Du hilfst Frau Becker beim Drehen. Wo fasst du an?",
    },
    question: {
      fragetext: "Wo greifst du bei Frau Becker an, um sie beim Drehen zu unterstützen?",
      optionen: [
        {
          text: "An Schulter und Becken (Massen)",
          isCorrect: true,
          explanation: "Richtig! Schulter und Becken sind Massen — dort unterstützt du, ohne die Eigenbewegung zu blockieren.",
          explanationB1: "Richtig! Schulter und Becken sind Massen. Dort fasst du an.",
        },
        {
          text: "Unter den Achselhöhlen",
          isCorrect: false,
          explanation: "Falsch! Die Achselhöhle ist ein Zwischenraum. Greifst du dort hinein, blockierst du die Bewegung des Oberkörpers.",
          explanationB1: "Falsch! Die Achselhöhle ist ein Zwischenraum. Da greifst du NICHT hin.",
        },
        {
          text: "An der Taille",
          isCorrect: false,
          explanation: "Falsch! Die Taille ist ein Zwischenraum. Hier muss der Körper frei beweglich bleiben, damit sich die Patientin drehen kann.",
          explanationB1: "Falsch! Die Taille ist ein Zwischenraum. Dort nicht anfassen.",
        },
        {
          text: "An den Handgelenken und ziehen",
          isCorrect: false,
          explanation: "Falsch! Ziehen an Extremitäten ist weder kinästhetisch noch sicher. Unterstütze immer an den großen Massen: Schulter und Becken.",
          explanationB1: "Falsch! Nie an den Händen ziehen. Immer an Schulter und Becken anfassen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 8: ANDERS ERKLÄRT — Flipcards Massen/Zwischenräume
  // Nur bei Score B/C
  // =============================================================
  {
    stepId: "le06-s1-tb1-08",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "anatomie",
    contentC1: {
      title: "Massen vs. Zwischenräume — Nochmal anders",
      body: "Dreh die Karten um: Vorne steht das Körperteil, hinten erfährst du ob du dort anfassen darfst — und warum.",
    },
    contentB1: {
      title: "Wo anfassen? Wo nicht?",
      body: "Dreh die Karten um. Du lernst: Wo fasst du an? Wo nicht?",
    },
    question: {
      fragetext: "Dreh die Karten um:",
      flipcard: {
        instruction: "Tippe auf eine Karte zum Umdrehen.",
        cards: [
          {
            front: "Schulter",
            back: "MASSE — Hier anfassen! Du unterstützt das Gewicht, ohne die Bewegung zu blockieren.",
            backB1: "MASSE — Hier anfassen! Das ist richtig.",
          },
          {
            front: "Achselhöhle",
            back: "ZWISCHENRAUM — NICHT anfassen! Blockiert die Drehbewegung des Oberkörpers. Der Patient hängt nur noch.",
            backB1: "ZWISCHENRAUM — NICHT anfassen! Der Patient kann sich dann nicht bewegen.",
          },
          {
            front: "Becken",
            back: "MASSE — Hier anfassen! Das Becken ist die schwerste Masse. Von hier startet die Drehbewegung.",
            backB1: "MASSE — Hier anfassen! Das Becken ist der schwerste Teil. Hier helfen wir beim Drehen.",
          },
          {
            front: "Taille",
            back: "ZWISCHENRAUM — NICHT anfassen! Muss frei bleiben, damit sich Brustkorb und Becken gegeneinander drehen können.",
            backB1: "ZWISCHENRAUM — NICHT anfassen! Muss frei sein für die Drehbewegung.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 9: STORYTELLING — Szenario Achselhöhle (nur bei Score C)
  // displayFormat: scenario
  // =============================================================
  {
    stepId: "le06-s1-tb1-09",
    phase: "s1",
    stepType: "text",
    displayFormat: "scenario",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "STORYTELLING",
    tag: "pflege",
    contentC1: {
      title: "So fühlt es sich an",
      body: "**Stell dir vor:** Jemand greift dir von hinten in beide Achselhöhlen und zieht dich hoch. Was passiert?\n\nDu kannst dich nicht mehr bewegen. Du hängst. Deine Arme sind blockiert, dein Oberkörper ist fixiert. Du kannst dich weder drehen noch abstützen. Du bist komplett passiv.\n\n**Genau so fühlt es sich für den Patienten an.** Er verliert jede Möglichkeit, sich selbst zu bewegen. Statt seine Ressourcen zu nutzen, machst du ihn zum passiven Objekt.\n\nDeshalb die Regel: **Massen fassen, Zwischenräume spielen lassen.**",
    },
    contentB1: {
      title: "So fühlt es sich an",
      body: "**Stell dir vor:** Jemand greift dir unter die Arme und zieht dich hoch.\n\nWas passiert? Du kannst dich nicht mehr bewegen. Du hängst nur noch.\n\nSo fühlt es sich für den Patienten an. Er kann nichts mehr selbst machen.\n\n**Deshalb:** An den Massen anfassen (Schulter, Becken). Zwischenräume frei lassen!",
    },
  },

  // =============================================================
  // Step 10: ANWENDUNG — Hotspot: 7 Massen markieren
  // =============================================================
  {
    stepId: "le06-s1-tb1-10",
    phase: "s1",
    stepType: "hotspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.344"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    contentC1: {
      title: "Markiere die 7 Massen",
      body: "Tippe auf dem Bild auf die 7 Massen des menschlichen Körpers.",
    },
    contentB1: {
      title: "Finde die 7 Massen",
      body: "Tippe auf die 7 schweren Körperteile (Massen).",
    },
    question: {
      fragetext: "Markiere die 7 Massen auf dem Körperbild.",
      hotspot: {
        imageUrl: "/images/content/le-06/koerper-massen.svg",
        imageAlt: "Schematische Darstellung eines menschlichen Körpers mit markierbaren Zonen",
        instruction: "Tippe auf alle 7 Massen. Achte darauf, die Massen (nicht Zwischenräume!) zu treffen.",
        zones: [
          { id: "kopf", x: 50, y: 8, radius: 8, label: "Kopf" },
          { id: "brustkorb", x: 50, y: 28, radius: 12, label: "Brustkorb" },
          { id: "becken", x: 50, y: 48, radius: 10, label: "Becken" },
          { id: "arm-links", x: 25, y: 35, radius: 8, label: "Linker Arm" },
          { id: "arm-rechts", x: 75, y: 35, radius: 8, label: "Rechter Arm" },
          { id: "bein-links", x: 40, y: 75, radius: 8, label: "Linkes Bein" },
          { id: "bein-rechts", x: 60, y: 75, radius: 8, label: "Rechtes Bein" },
        ],
      },
    },
  },

  // =============================================================
  // Step 11: REFLEXION — Selfrating Kinästhetik-Basics
  // =============================================================
  {
    stepId: "le06-s1-tb1-11",
    phase: "s1",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Wie sicher bist du?",
      body: "Schätze dich selbst ein. Sei ehrlich — das hilft dir beim Lernen.\n\n- Ich kann die 7 Massen benennen.\n- Ich verstehe warum man nicht in Zwischenräume greift.\n- Ich kann Kinästhetik in einem Satz erklären.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Wie gut verstehst du das? Sei ehrlich.\n\n- Ich kann die 7 Massen sagen.\n- Ich verstehe: Nicht in Zwischenräume greifen.\n- Ich kann erklären was Kinästhetik ist.",
    },
  },

  // =============================================================
  // Step 12: SZENE — Frau Becker Leitfall-Einführung (Dialog)
  // =============================================================
  {
    stepId: "le06-s1-tb2-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-347"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Frau Becker — Tag 1 nach der Hüft-OP",
      body: "Frau Becker, 79 Jahre, hat gestern eine neue Hüfte bekommen (Hüft-TEP). Du betrittst ihr Zimmer. Sie liegt ängstlich im Bett und klammert sich am Bettgitter fest.",
      fallbezug: "Frau Becker hat Sturzangst. Die Erstmobilisation ist geplant, aber sie traut sich nicht.",
    },
    contentB1: {
      title: "Frau Becker — Tag 1 nach der OP",
      body: "Frau Becker ist 79 Jahre alt. Gestern hat sie eine neue Hüfte bekommen. Heute soll sie zum ersten Mal aufstehen. Aber sie hat Angst.",
      fallbezug: "Frau Becker hat Angst zu fallen. Du musst ihr helfen.",
    },
    question: {
      fragetext: "Frau Becker sagt: 'Ich trau mich nicht aufzustehen. Was wenn ich falle?'",
      patientName: "Frau Becker",
      dialogPhases: [
        {
          context: "Frau Becker liegt steif im Bett, die Hände am Bettgitter. 'Schwester, ich trau mich nicht aufzustehen. Letzte Nacht hatte ich solche Schmerzen. Was wenn ich falle?'",
          contextB1: "Frau Becker liegt im Bett. Sie hat Angst. Sie sagt: 'Ich trau mich nicht aufzustehen. Was wenn ich falle?'",
          speaker: "Frau Becker",
          options: [
            {
              text: "Frau Becker, ich verstehe Ihre Angst. Wir machen das Schritt für Schritt. Zuerst erklär ich Ihnen genau was wir tun — und dann entscheiden Sie, ob Sie bereit sind.",
              textB1: "Ich verstehe Ihre Angst. Wir machen das langsam. Ich erkläre alles vorher.",
              patientResponse: "Na gut... wenn Sie mir vorher sagen was passiert, dann versuche ich es vielleicht.",
              patientResponseB1: "Okay... wenn Sie mir alles vorher erklären.",
              score: 3,
              feedback: "Sehr gut! Du kommunizierst vor der Aktivität, erklärst das Ziel und respektierst ihre Autonomie. Das entspricht den Kinästhetik-Praxisregeln: Kommunikation vor Aktivität, Zeit lassen.",
              feedbackB1: "Super! Du erklärst vorher was du machst. Du lässt Frau Becker entscheiden. Das ist richtig.",
            },
            {
              text: "Keine Sorge, Frau Becker, das wird schon. Kommen Sie, wir stehen jetzt auf.",
              textB1: "Keine Sorge! Kommen Sie, wir stehen auf.",
              patientResponse: "Aber... ich hab doch Angst! Warten Sie!",
              patientResponseB1: "Aber ich hab Angst! Warten Sie!",
              score: 1,
              feedback: "Vorsicht! Du übergehst ihre Angst und startest ohne Erklärung. Kinästhetik-Regel: Kommunikation VOR Aktivität. Erkläre zuerst das Ziel und die Schritte.",
              feedbackB1: "Vorsicht! Du hörst nicht auf ihre Angst. Erst erklären, dann bewegen!",
            },
            {
              text: "Verstanden, dann machen wir das morgen. Ruhen Sie sich aus.",
              textB1: "Okay, dann machen wir das morgen.",
              patientResponse: "Danke... aber morgen hab ich bestimmt genauso Angst.",
              patientResponseB1: "Danke... aber morgen habe ich auch Angst.",
              score: 2,
              feedback: "Verständnisvoll, aber medizinisch problematisch: Frühmobilisation nach Hüft-TEP ist wichtig (Thrombose-/Kontrakturprophylaxe). Besser: Angst ernst nehmen UND motivieren.",
              feedbackB1: "Du bist nett. Aber: Frau Becker muss sich heute bewegen. Sonst gibt es Probleme (Thrombose!). Besser: Angst verstehen und trotzdem motivieren.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 13: ERKLÄRUNG — Parallele vs. spiralige Bewegung (displayFormat: beforeafter)
  // =============================================================
  {
    stepId: "le06-s1-tb2-02",
    phase: "s1",
    stepType: "text",
    displayFormat: "beforeafter",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    contentC1: {
      title: "Parallele vs. spiralige Bewegung",
      body: "**Parallele Bewegung:**\nRechte und linke Körperseite bewegen sich gleichzeitig, synchron auf einer Achse. Beispiel: Einen Patienten gerade nach oben ziehen. Schwerer, unnatürlicher.\n\n**Spiralige Bewegung:**\nDrehbewegung über 2 Achsen. Beispiel: Der Patient dreht sich von der Rückenlage über die Seite zum Sitzen. Leichter, natürlicher.\n\n**Warum spiralig?**\n- Kleinkinder nutzen spontan spiralige Muster beim Drehen\n- Braucht weniger Kraft\n- Nutzt die natürliche Bewegungsrichtung der Gelenke\n- Fördert die Eigenbewegung des Patienten\n\n**Bei der Mobilisation: Immer spiralige Bewegung bevorzugen!**",
      glossarBegriffe: ["Kinästhetik", "Mobilisation"],
    },
    contentB1: {
      title: "Gerade oder drehend bewegen?",
      body: "**Parallele Bewegung (gerade):**\nBeide Seiten bewegen sich gleichzeitig. Beispiel: Patient gerade hochziehen.\nDas ist schwerer und nicht natürlich.\n\n**Spiralige Bewegung (drehend):**\nDer Patient dreht sich. Beispiel: Von der Rückenlage über die Seite zum Sitzen.\nDas ist leichter und natürlicher.\n\n**Babys drehen sich automatisch spiralig!**\n\nBei der Pflege: Immer die Drehbewegung benutzen!",
      glossarBegriffe: ["Kinästhetik"],
    },
  },

  // =============================================================
  // Step 14: ERKLÄRUNG — WordOrder Fachsprache
  // =============================================================
  {
    stepId: "le06-s1-tb2-03",
    phase: "s1",
    stepType: "wordorder",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Fachsatz bilden",
      body: "Bringe die Satzbausteine in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Satz ordnen",
      body: "Ordne die Wörter zu einem richtigen Satz.",
    },
    question: {
      fragetext: "Bringe die Satzteile in die richtige Reihenfolge:",
      wordorder: {
        instruction: "Ziehe die Bausteine in die richtige Reihenfolge.",
        words: [
          "Bei der Mobilisation",
          "bevorzugen wir",
          "spiralige Bewegungen,",
          "weil sie",
          "natürlicher",
          "und leichter sind.",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
      },
    },
  },

  // =============================================================
  // Step 15: CHECKPOINT — TrueFalse parallel/spiralig
  // =============================================================
  {
    stepId: "le06-s1-tb2-04",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Teste dein Wissen über parallele und spiralige Bewegung.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Was stimmt? Was stimmt nicht?",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      trueFalseCards: [
        {
          statement: "Parallele Bewegung ist leichter als spiralige Bewegung.",
          isTrue: false,
          explanation: "Falsch! Spiralige Bewegung ist leichter, weil sie 2 Achsen nutzt und der natürlichen Gelenkbewegung entspricht.",
        },
        {
          statement: "Säuglinge bewegen sich spontan spiralig, wenn sie sich drehen.",
          isTrue: true,
          explanation: "Richtig! Kleinkinder nutzen von Natur aus spiralige Muster — das zeigt, dass es die natürlichere Bewegungsform ist.",
        },
        {
          statement: "Spiralige Bewegung nutzt 2 Bewegungsachsen.",
          isTrue: true,
          explanation: "Richtig! Spiralige Bewegung nutzt 2 Achsen (Drehung), parallele nur 1 Achse. Deshalb ist spiralig effizienter.",
        },
        {
          statement: "Beim Drehen im Bett ist paralleles Hochziehen die korrekte Technik.",
          isTrue: false,
          explanation: "Falsch! Paralleles Hochziehen blockiert die Eigenbewegung. Spiralig über die Seite drehen ist kinästhetisch korrekt.",
        },
      ],
    },
  },

  // =============================================================
  // Step 16: ANWENDUNG — Branching: Frau Becker mobilisieren
  // =============================================================
  {
    stepId: "le06-s1-tb2-05",
    phase: "s1",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.345-347"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Frau Becker soll sich drehen",
      body: "Frau Becker liegt auf dem Rücken und soll sich zur Bettkante drehen, um anschließend aufzusitzen. Wie gehst du vor?",
      fallbezug: "Erstmobilisation nach Hüft-TEP. Frau Becker hat Angst, braucht aber Bewegung.",
    },
    contentB1: {
      title: "Frau Becker dreht sich",
      body: "Frau Becker liegt auf dem Rücken. Sie soll sich zur Seite drehen. Wie hilfst du?",
      fallbezug: "Frau Becker hat eine neue Hüfte. Sie muss sich heute bewegen.",
    },
    question: {
      fragetext: "Wie mobilisierst du Frau Becker von der Rückenlage zum Sitzen an der Bettkante?",
      branchingOptions: [
        {
          text: "Ich erkläre ihr die Schritte, dann unterstütze ich sie spiralig: Kopf drehen → Schulter folgt → Becken nachziehen → über die Seite aufsitzen.",
          feedback: "Perfekt! Du kommunizierst vorher, nutzt spiralige Bewegung und unterstützt an den Massen (Schulter, Becken). Frau Becker kann ihre Eigenbewegung nutzen.",
          feedbackB1: "Perfekt! Du erklärst vorher und hilfst beim Drehen. Schulter und Becken. Spiralig!",
          isCorrect: true,
        },
        {
          text: "Ich greife unter ihre Achseln und ziehe sie parallel nach oben zum Sitzen.",
          feedback: "Falsch! Paralleles Hochziehen unter den Achseln blockiert die Eigenbewegung. Die Achselhöhle ist ein Zwischenraum — dort nicht anfassen! Spiralig über die Seite ist richtig.",
          feedbackB1: "Falsch! Nicht unter die Arme greifen! Das blockiert die Bewegung. Besser: Über die Seite drehen.",
          isCorrect: false,
        },
        {
          text: "Ich warte, bis die Physiotherapie kommt — das ist deren Aufgabe.",
          feedback: "Nicht optimal! Grundlegende Mobilisation ist Aufgabe der Pflege. Kinästhetik ist ein Werkzeug für alle Pflegenden, nicht nur für Physiotherapeuten. Bei komplexen Fällen: Absprache mit Physio — aber Erstmobilisation ist Pflege.",
          feedbackB1: "Nicht ganz richtig! Mobilisation ist auch Pflege-Aufgabe. Nicht nur Physiotherapie. Du kannst das!",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 17: ERKLÄRUNG — 6 Kinästhetik-Praxisregeln (displayFormat: checklist)
  // =============================================================
  {
    stepId: "le06-s1-tb2-06",
    phase: "s1",
    stepType: "text",
    displayFormat: "checklist",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "6 Kinästhetik-Praxisregeln",
      body: "Diese 6 Regeln gelten bei JEDER Mobilisation:\n\n1. **Ressourcen zuerst einschätzen** — Was kann der Patient selbst?\n2. **Kommunikation vor Aktivität** — Ziel besprechen, Zwischenschritte erklären\n3. **Zeit lassen** — Nicht hetzen, Patient braucht Momente zum Verarbeiten\n4. **Unterstützen, nicht übernehmen** — Nur so viel helfen wie nötig\n5. **Eindeutige Sprache** — 'Kopfende' statt 'oben', 'zur Tür hin' statt 'nach rechts'\n6. **Schritt-für-Schritt-Anweisungen** — Keine Anweisungsketten, immer einzeln\n\nDiese Regeln schützen den Patienten UND deinen Rücken.",
      glossarBegriffe: ["Kinästhetik"],
    },
    contentB1: {
      title: "6 Regeln für die Praxis",
      body: "Bei jeder Mobilisation:\n\n1. **Was kann der Patient selbst?** — Zuerst schauen!\n2. **Vorher erklären** — Was machen wir? Warum?\n3. **Zeit lassen** — Nicht schnell machen\n4. **Nur helfen, nicht alles machen** — Der Patient macht so viel wie möglich selbst\n5. **Klare Sprache** — 'Zum Fenster hin' statt 'nach rechts'\n6. **Ein Schritt nach dem anderen** — Nicht alles auf einmal sagen",
      glossarBegriffe: ["Kinästhetik"],
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Matching: Praxisregel ↔ Beispiel
  // =============================================================
  {
    stepId: "le06-s1-tb2-07",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Regel trifft Praxis",
      body: "Ordne jede Kinästhetik-Praxisregel dem passenden Beispiel zu.",
    },
    contentB1: {
      title: "Regel und Beispiel",
      body: "Welche Regel passt zu welchem Beispiel?",
    },
    question: {
      fragetext: "Ordne die Praxisregel dem Beispiel zu:",
      matchingPairs: [
        {
          left: "Eindeutige Sprache",
          right: "'Kopfende' statt 'oben' sagen",
        },
        {
          left: "Kommunikation vor Aktivität",
          right: "Zuerst erklären: 'Wir setzen Sie jetzt an die Bettkante.'",
        },
        {
          left: "Ressourcen einschätzen",
          right: "Erst beobachten was der Patient allein kann",
        },
        {
          left: "Unterstützen, nicht übernehmen",
          right: "Patient dreht sich selbst, Pflegekraft gibt Impuls",
        },
        {
          left: "Zeit lassen",
          right: "Nach jeder Teilbewegung kurz warten",
        },
      ],
    },
  },

  // =============================================================
  // Step 19: ERKLÄRUNG — Mindmap Kinästhetik (Diagram)
  // =============================================================
  {
    stepId: "le06-s1-tb2-08",
    phase: "s1",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.343-347"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Kinästhetik auf einen Blick",
      body: "Diese Mindmap zeigt dir die 6 Konzepte mit je einem Praxis-Beispiel.",
    },
    contentB1: {
      title: "Kinästhetik — Übersicht",
      body: "So hängt alles zusammen. 6 Konzepte und ein Beispiel für jedes.",
    },
    question: {
      fragetext: "Kinästhetik — 6 Konzepte im Überblick",
      diagram: {
        diagramType: "mindmap" as const,
        instruction: "Erkunde die Mindmap: Tippe auf die Konzepte für Praxis-Beispiele.",
        nodes: [
          { id: "center", label: "Kinästhetik", highlight: true },
          { id: "n1", label: "Interaktion", labelB1: "Sinne nutzen" },
          { id: "n2", label: "Funktionale Anatomie", labelB1: "Massen + Zwischenräume" },
          { id: "n3", label: "Menschliche Bewegung", labelB1: "Spiralig bewegen" },
          { id: "n4", label: "Anstrengung", labelB1: "Weniger Kraft" },
          { id: "n5", label: "Menschliche Funktion", labelB1: "7 Positionen" },
          { id: "n6", label: "Umgebung", labelB1: "Bett + Hilfsmittel" },
          { id: "p1", label: "Spüren, wie sich der Körper bewegt" },
          { id: "p2", label: "Schulter/Becken anfassen, nicht Achselhöhle" },
          { id: "p3", label: "Drehen statt gerade hochziehen" },
          { id: "p4", label: "Spiralig = leichter als parallel" },
          { id: "p5", label: "Rückenlage → Sitzen → Stehen" },
          { id: "p6", label: "Betthöhe anpassen, Handtücher statt Kissen" },
        ],
        edges: [
          { from: "center", to: "n1" },
          { from: "center", to: "n2" },
          { from: "center", to: "n3" },
          { from: "center", to: "n4" },
          { from: "center", to: "n5" },
          { from: "center", to: "n6" },
          { from: "n1", to: "p1" },
          { from: "n2", to: "p2" },
          { from: "n3", to: "p3" },
          { from: "n4", to: "p4" },
          { from: "n5", to: "p5" },
          { from: "n6", to: "p6" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG — Dialog: Praxis mit Frau Becker
  // =============================================================
  {
    stepId: "le06-s1-tb2-09",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Praxisanleitung bei Frau Becker",
      body: "Die Praxisanleiterin zeigt dir die Mobilisation bei Frau Becker. Sie fragt dich: 'Was machst du zuerst?'",
      fallbezug: "Frau Becker, Tag 1 nach Hüft-TEP. Erstmobilisation von Rückenlage zum Sitzen an der Bettkante.",
    },
    contentB1: {
      title: "Dein erster Einsatz",
      body: "Die Praxisanleiterin fragt: 'Was machst du zuerst bei Frau Becker?'",
      fallbezug: "Frau Becker muss zum ersten Mal aufstehen nach der OP.",
    },
    question: {
      fragetext: "Die Praxisanleiterin fragt: Was machst du zuerst?",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Ihr steht vor Frau Beckers Zimmer. Die Praxisanleiterin sagt: 'Du darfst die Mobilisation leiten. Was ist dein erster Schritt?'",
          contextB1: "Du stehst vor dem Zimmer. Die Praxisanleiterin fragt: 'Was machst du zuerst?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich bespreche mit Frau Becker das Ziel: Wir möchten sie an die Bettkante setzen. Ich erkläre die Schritte und frage ob sie bereit ist.",
              textB1: "Ich erkläre Frau Becker was wir machen. Ich frage ob sie bereit ist.",
              patientResponse: "Sehr gut! Kommunikation vor Aktivität — das ist eine der wichtigsten Kinästhetik-Regeln. Und du fragst ob sie bereit ist. Weiter so!",
              patientResponseB1: "Super! Erst erklären, dann fragen. Das ist richtig!",
              score: 3,
              feedback: "Perfekt! Kinästhetik-Praxisregel Nr. 2: Kommunikation vor Aktivität. Du erklärst das Ziel, die Schritte und respektierst die Autonomie der Patientin.",
              feedbackB1: "Perfekt! Erst erklären, dann anfangen. Das ist die wichtigste Regel.",
            },
            {
              text: "Ich stelle das Bett auf die richtige Höhe ein, damit ihre Füße den Boden erreichen.",
              textB1: "Ich stelle das Bett richtig ein.",
              patientResponse: "Guter Gedanke — Umgebung vorbereiten ist wichtig. Aber was fehlt noch BEVOR du am Bett arbeitest?",
              patientResponseB1: "Das ist gut. Aber was machst du VORHER?",
              score: 2,
              feedback: "Richtig, Umgebung vorbereiten ist wichtig. Aber VOR der Umgebung kommt die Kommunikation: Frau Becker muss wissen was du vorhast und einverstanden sein.",
              feedbackB1: "Das Bett einstellen ist gut. Aber zuerst erklären was du machst!",
            },
            {
              text: "Ich ziehe Handschuhe an und fange an.",
              textB1: "Ich ziehe Handschuhe an.",
              patientResponse: "Handschuhe brauchst du bei der Mobilisation in der Regel nicht. Und: Was fehlt noch bevor du anfängst?",
              patientResponseB1: "Handschuhe brauchst du nicht. Und: Was machst du vorher?",
              score: 1,
              feedback: "Handschuhe sind bei Mobilisation normalerweise nicht nötig (es sei denn, es gibt Wunden oder Infektionen). Wichtiger: Kommunikation vor Aktivität — erst erklären, dann handeln.",
              feedbackB1: "Handschuhe brauchst du hier nicht. Und: Erst erklären was du machst!",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 21: REFLEXION — Freetext: Erstmobilisation beschreiben (OQ1 vereinfacht)
  // =============================================================
  {
    stepId: "le06-s1-tb2-10",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-347"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Dein erster Pflegebericht",
      body: "Beschreibe in 3-4 Sätzen, wie du Frau Becker zum Sitzen an der Bettkante mobilisierst. Nutze mindestens 2 Kinästhetik-Prinzipien.",
      fallbezug: "Frau Becker, 79 Jahre, Tag 1 nach Hüft-TEP. Erstmobilisation von der Rückenlage zum Sitzen an der Bettkante.",
    },
    contentB1: {
      title: "Beschreibe die Mobilisation",
      body: "Schreibe 3-4 Sätze: Wie hilfst du Frau Becker zum Sitzen? Nutze 2 Kinästhetik-Regeln.",
      fallbezug: "Frau Becker hat eine neue Hüfte. Du hilfst ihr beim Aufsetzen.",
    },
    question: {
      fragetext: "Beschreibe, wie du Frau Becker vom Liegen zum Sitzen an der Bettkante mobilisierst.",
      musterantwort: "Zuerst erkläre ich Frau Becker das Ziel: Wir setzen sie an die Bettkante. Dann drehe ich sie spiralig zur Bettkante — ich unterstütze an Schulter und Becken (Massen), nicht in den Zwischenräumen. Ihre Beine schwingen über die Bettkante. Ich gebe Schritt-für-Schritt-Anweisungen und lasse ihr Zeit.",
      bewertungskriterien: [
        "Nennt mindestens 2 Kinästhetik-Prinzipien (z.B. spiralig, Massen, Ressourcen, Kommunikation)",
        "Beschreibt den Ablauf in logischer Reihenfolge",
        "Erwähnt Kommunikation vor der Mobilisation",
      ],
      satzanfaengeB1: [
        "Zuerst sage ich Frau Becker: ...",
        "Dann dreht sie sich ...",
        "Ich helfe an der Schulter und am Becken, aber nicht ...",
      ],
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 1
  // =============================================================
  {
    stepId: "le06-s1-bk-02",
    phase: "s1",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.342-347"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 1 abgeschlossen! Hier ist deine Zusammenfassung.",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Sehr gut! Das war Session 1. Hier ist die Zusammenfassung.",
    },
    question: {
      fragetext: "Zusammenfassung Session 1",
      summary: {
        reflexionRueckbezug: "Du hast gelernt was Kinästhetik ist, wie der Körper aufgebaut ist (7 Massen, 6 Zwischenräume) und warum spiralige Bewegung besser ist als parallele. Du hast Frau Becker kennengelernt und erste Mobilisationsschritte geübt.",
        kernaussagen: [
          "Kinästhetik = Ressourcen nutzen, Eigenbewegung fördern, nicht übernehmen",
          "7 Massen (anfassen) vs. 6 Zwischenräume (frei lassen)",
          "Spiralig > parallel: natürlicher, leichter, fördert Eigenbewegung",
          "6 Praxisregeln: Ressourcen einschätzen, kommunizieren, Zeit lassen, unterstützen, klare Sprache, Schritt für Schritt",
          "Nächste Session: 7 Grundpositionen + Positionierungsarten bei Frau Becker und Liam",
        ],
      },
    },
  },
];
