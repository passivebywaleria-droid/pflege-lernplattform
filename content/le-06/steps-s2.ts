// LE-06: Menschen aller Altersstufen in ihrer Mobilität unterstützen
// Steps S2: Pfade 5–8 (Infant Handling, Positionierung Grundlagen, 30°/90°-Seitenlage, Spezial-Positionierungen)
// Bloom: B1–B3, 1. Ausbildungsdrittel

import type { ContentStep } from "../_types";

export const LE06_STEPS_S2: ContentStep[] = [
  {
    stepId: "le-06-s2-tb5-01",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer — Leitfall Baby Nisa]",
      "F20",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Baby Nisa auf der Nachsorge-Station",
      body: "Baby Nisa (4 Monate, korrigiert) liegt auf der Nachsorge-Station. Sie wurde als Frühgeborenes in der 31. SSW geboren und hat einen niedrigen Muskeltonus. Vater Kemal steht neben dem Bettchen und traut sich kaum, sie hochzunehmen: „Sie ist so klein, ich habe Angst ihr wehzutun.“ Die Großmutter empfiehlt: „Wickle sie fest ein, dann wird sie ruhiger.“ Du bist die zuständige Pflegefachperson und sollst Kemal zeigen, wie er Nisa richtig aufnimmt.",
    },
    contentB1: {
      title: "Baby Nisa auf der Nachsorge-Station",
      body: "Baby Nisa ist 4 Monate alt. Sie liegt auf der Nachsorge-Station. Sie wurde in der 31. Woche geboren. Das ist zu früh. Normal sind 40 Wochen. Nisa hat wenig Muskel-Spannung (= Muskeltonus). Vater Kemal steht neben dem Bett. Er traut sich nicht, Nisa hochzunehmen. Er sagt: „Sie ist so klein. Ich habe Angst.“ Die Großmutter sagt: „Wickle sie fest ein.“ Du sollst Kemal zeigen, wie er Nisa richtig aufnimmt.",
    },
    question: {
      fragetext: "Lies die Situation und präge dir die wichtigsten Infos ein.",
    },
  },
  {
    stepId: "le-06-s2-tb5-02",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F21",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Warum ist paralleles Hochheben bei Säuglingen problematisch?",
      body: "Die Kinästhetik-Grundregel gilt auch bei Säuglingen: Spiralige Bewegung bevorzugen. Aber warum ist das bei Babys besonders wichtig?",
    },
    contentB1: {
      title: "Warum ist paralleles Hochheben bei Säuglingen problematisch?",
      body: "Die Kinästhetik-Regel gilt auch bei Babys: Spiralig bewegen! Aber warum ist das bei Babys besonders wichtig?",
    },
    question: {
      fragetext: "Was kann bei abruptem, parallelem Hochheben eines Säuglings passieren?",
      fragetextB1: "Was kann passieren, wenn man ein Baby schnell und gerade hochhebt?",
      optionen: [
        {
          text: "Es passiert nichts — Säuglinge sind flexibel",
          isCorrect: false,
          explanation: "Doch: Abruptes Hochheben überreizt das Gleichgewichtsorgan.",
          explanationB1: "Doch: Schnelles Hochheben ist zu viel für das Gleichgewicht.",
        },
        {
          text: "Eine vestibuläre Überreizung — das Gleichgewichtsorgan wird überstimuliert",
          isCorrect: true,
          explanation: "Richtig! Abruptes Hochheben ohne Drehen kann bei Säuglingen eine vestibuläre Überreizung auslösen. Das Gleichgewichtsorgan wird überstimuliert und das Baby reagiert mit Schrecken, Weinen oder Unruhe.",
          explanationB1: "Richtig! Schnelles Hochheben kann eine vestibuläre Überreizung auslösen. Das Gleichgewichts-Organ bekommt zu viele Reize. Das Baby erschrickt, weint oder wird unruhig.",
        },
        {
          text: "Eine Muskelverletzung an den Armen",
          isCorrect: false,
          explanation: "Nein: Muskelverletzungen sind nicht das Hauptrisiko beim Heben.",
          explanationB1: "Nein: Muskelverletzungen sind nicht das Haupt-Risiko.",
        },
        {
          text: "Eine Gehirnerschütterung durch die Bewegung",
          isCorrect: false,
          explanation: "Nein: Eine Gehirnerschütterung entsteht durch Stöße, nicht durch Heben.",
          explanationB1: "Nein: Eine Gehirnerschütterung kommt von Stößen.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb5-03",
    phase: "s2",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F20",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Baby Nisa aufnehmen — Schritt für Schritt",
      body: "Du zeigst Vater Kemal, wie er Nisa richtig aus dem Bettchen nimmt. Sortiere die Schritte.",
    },
    contentB1: {
      title: "Baby Nisa aufnehmen — Schritt für Schritt",
      body: "Du zeigst Kemal, wie er Nisa richtig aus dem Bettchen nimmt. Sortiere die Schritte.",
    },
    question: {
      fragetext: "Bringe die Handlungsschritte in die richtige Reihenfolge.",
      fragetextB1: "Bringe die Schritte in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Bringe die Handlungsschritte in die richtige Reihenfolge.",
        items: [
          {
            id: "1",
            label: "Kemal erklären, was du tust und warum",
          },
          {
            id: "2",
            label: "Nisa sanft ansprechen und berühren (Interaktion)",
          },
          {
            id: "3",
            label: "Nisa zur Seite drehen (spiralige Bewegung einleiten)",
          },
          {
            id: "4",
            label: "Über die Seite aufnehmen — NICHT parallel hochheben",
          },
          {
            id: "5",
            label: "Nisa sicher am Körper halten",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb5-04",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F20",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Aufnehmen und Ablegen — zwei verschiedene Abläufe",
      body: "Aufnehmen und Ablegen folgen dem gleichen Prinzip (spiralig), aber in umgekehrter Reihenfolge.",
    },
    contentB1: {
      title: "Aufnehmen und Ablegen — zwei verschiedene Abläufe",
      body: "Aufnehmen und Ablegen folgen dem gleichen Prinzip: spiralig. Aber die Reihenfolge ist umgekehrt.",
    },
    question: {
      fragetext: "Drehe die Karten um und vergleiche die Abläufe.",
      fragetextB1: "Drehe die Karten um. Vergleiche: Aufnehmen und Ablegen.",
      flipcard: {
        instruction: "Drehe die Karten um.",
        cards: [
          {
            front: "Aufnehmen",
            back: "(1) Zur Seite drehen, (2) Über die Seite aufnehmen, (3) Am Körper sichern",
          },
          {
            front: "Ablegen",
            back: "(1) Füße zuerst Kontakt zur Unterlage, (2) Über die Seitenlage in Rückenlage führen, (3) Sanft loslassen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb5-05",
    phase: "s2",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F20",
      "F21",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Fakten-Check: Infant Handling",
      body: "Wische nach rechts für „richtig“ und nach links für „falsch“.",
    },
    contentB1: {
      title: "Fakten-Check: Infant Handling",
      body: "Wische nach rechts für „richtig“. Wische nach links für „falsch“.",
    },
    question: {
      fragetext: "Stimmt die Aussage zum Infant Handling?",
      fragetextB1: "Stimmt die Aussage zum Infant Handling (= Umgang mit Säuglingen)?",
      swipe: {
        instruction: "Wische nach rechts für \"richtig\", nach links für \"falsch\".",
        cards: [
          {
            statement: "Beim Ablegen des Säuglings kommen zuerst die Füße in Kontakt mit der Unterlage.",
            isCorrect: true,
            explanation: "Genau! Füße zuerst geben dem Baby Orientierung und Sicherheit.",
          },
          {
            statement: "Säuglinge dürfen parallel hochgehoben werden, wenn man es schnell macht.",
            isCorrect: false,
            explanation: "Nein — gerade schnelles, paralleles Hochheben überreizt das Gleichgewichtsorgan. Immer spiralig und sanft.",
          },
          {
            statement: "Beim Aufnehmen wird der Säugling zuerst zur Seite gedreht.",
            isCorrect: true,
            explanation: "Richtig — über die Seite aufnehmen, genau wie bei Erwachsenen.",
          },
          {
            statement: "Die Großmutter hat recht: Festes Einwickeln ist immer gut für Frühgeborene.",
            isCorrect: false,
            explanation: "Nicht pauschal. Swaddling kann beruhigend wirken, aber Frühgeborene brauchen auch Bewegungsfreiheit für die motorische Entwicklung.",
          },
          {
            statement: "Einen Säugling darfst du kopfüber halten, solange du ihn fest im Griff hast.",
            isCorrect: false,
            explanation: "Auf keinen Fall. Ein Säugling darf niemals kopfüber gehalten oder angehoben werden — das überreizt das Vestibularsystem und kann Hirndruck und Reflux auslösen. Immer über die Seite und nah am Körper aufnehmen.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb5-06",
    phase: "s2",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer — Hintergrundwissen Neonatologie]",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Frühgeburt: Ab welcher Woche ist es kritisch?",
      body: "Baby Nisa wurde in der 31. Schwangerschaftswoche geboren. Eine normale Schwangerschaft dauert 40 Wochen.",
    },
    contentB1: {
      title: "Frühgeburt: Ab welcher Woche ist es kritisch?",
      body: "Baby Nisa wurde in der 31. Woche geboren. Eine normale Schwangerschaft dauert 40 Wochen.",
    },
    question: {
      fragetext: "Wie viele Wochen zu früh wurde Nisa geboren?",
      fragetextB1: "Wie viele Wochen zu früh wurde Nisa geboren?",
      estimation: {
        instruction: "Schätze den Wert.",
        unit: "Wochen",
        correctValue: 9,
        tolerance: 10,
        funFact: "",
        explanation: "Nisa wurde 9 Wochen zu früh geboren. Frühgeborene vor der 32. SSW gelten als „sehr frühe Frühgeborene“ — sie brauchen besonders sensibles Handling, weil ihr Nervensystem noch unreif ist.",
        explanationB1: "Nisa wurde 9 Wochen zu früh geboren. Babys vor der 32. Woche sind sehr empfindlich. Ihr Nervensystem ist noch nicht fertig.",
      },
    },
  },
  {
    stepId: "le-06-s2-tb5-07",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F20",
    ],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Vater Kemal lernt Infant Handling",
      body: "Kemal hat zugesehen, wie du Nisa aufnimmst. Jetzt soll er es selbst versuchen. Er ist nervös.",
    },
    contentB1: {
      title: "Vater Kemal lernt Infant Handling",
      body: "Kemal hat zugesehen. Jetzt soll er es selbst versuchen. Er ist nervös.",
    },
    question: {
      fragetext: "Wie leitest du Kemal an?",
      fragetextB1: "Was sagst du zu Kemal? Wie erklärst du es ihm?",
      dialogPhases: [
        {
          context: "Kemal steht am Bettchen und traut sich nicht, Nisa anzufassen. Seine Hände zittern leicht. Wie beginnst du die Anleitung?",
          contextB1: "Kemal steht am Bett. Er traut sich nicht, Nisa anzufassen. Seine Hände zittern. Wie fängst du an?",
          options: [
            {
              text: "„Machen Sie es einfach so wie ich — das ist nicht schwer.“",
              patientResponse: "",
              score: 1,
              feedback: "Gut gemeint, aber zu vage. Kemal braucht klare Schritt-für-Schritt-Anleitung und Ermutigung.",
              feedbackB1: "Zu ungenau. Kemal braucht klare Schritte.",
            },
            {
              text: "„Herr Demir, ich erkläre Ihnen jeden Schritt einzeln. Wir machen es zusammen.“",
              patientResponse: "",
              score: 3,
              feedback: "Hervorragend! Du kündigst Struktur an und nimmst Kemal die Angst.",
              feedbackB1: "Sehr gut! Du erklärst Schritt für Schritt. Das nimmt die Angst.",
            },
            {
              text: "„Vielleicht sollte erstmal nur Ihre Frau Nisa aufnehmen, bis Sie sicherer sind.“",
              patientResponse: "",
              score: 1,
              feedback: "Das verstärkt Kemals Unsicherheit. Väter sollten von Anfang an einbezogen werden.",
              feedbackB1: "Das macht Kemal unsicherer. Väter sollen von Anfang an dabei sein.",
            },
          ],
        },
        {
          context: "Kemal dreht Nisa zaghaft zur Seite. Es klappt. Wie reagierst du? (Tipp: Nutze bei Anweisungen eindeutige Richtungsbegriffe — Kopfende statt oben, Fußende statt unten.)",
          contextB1: "Kemal dreht Nisa vorsichtig zur Seite. Es klappt. Was sagst du? (Tipp: Sag nicht oben oder unten. Sag Kopfende und Fußende. Das ist klarer.)",
          options: [
            {
              text: "„Weiter, nicht stehenbleiben — schnell weitermachen.“",
              patientResponse: "",
              score: 1,
              feedback: "Falscher Ton. Kemal braucht Bestätigung, nicht Druck.",
              feedbackB1: "Zu hart. Kemal braucht Lob, nicht Druck.",
            },
            {
              text: "„Genau so — sehr gut! Jetzt zum Kopfende hin drehen und sie auf den Arm nehmen.“",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt! Lob nach jedem Schritt, dann die nächste klare Anweisung mit eindeutigem Richtungsbegriff (Kopfende statt oben).",
              feedbackB1: "Perfekt! Du lobst. Du sagst klar Kopfende — nicht oben.",
            },
            {
              text: "Schweigen und zusehen.",
              patientResponse: "",
              score: 2,
              feedback: "Anleitung lebt von Rückmeldung — Schweigen verunsichert.",
              feedbackB1: "Ohne Rückmeldung wird Kemal unsicher.",
            },
          ],
        },
        {
          context: "Nisa ist jetzt sicher in Kemals Armen. Er strahlt. Wie schließt du die Anleitung ab?",
          contextB1: "Nisa ist jetzt sicher in Kemals Armen. Er freut sich. Wie beendest du die Anleitung?",
          options: [
            {
              text: "„Das haben Sie toll gemacht. Beim nächsten Mal üben wir das Ablegen.“",
              patientResponse: "",
              score: 3,
              feedback: "Ideal: Lob, Perspektive, nächster Schritt geplant.",
              feedbackB1: "Sehr gut: Lob und Plan für das nächste Mal.",
            },
            {
              text: "„So, jetzt können Sie das ja.“",
              patientResponse: "",
              score: 1,
              feedback: "Zu knapp — keine Perspektive, kein nächster Lernschritt.",
              feedbackB1: "Zu wenig. Der nächste Schritt fehlt.",
            },
            {
              text: "„Legen Sie sie gleich wieder ab, sonst verlernen Sie es.“",
              patientResponse: "",
              score: 1,
              feedback: "Druck statt Ermutigung. Frischlernende brauchen Pausen.",
              feedbackB1: "Zu viel Druck. Kemal darf lernen.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb5-08",
    phase: "s2",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F20",
      "F21",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Was macht Kemal falsch?",
      body: "Kemal versucht es zum zweiten Mal und macht dabei einige Fehler.",
    },
    contentB1: {
      title: "Was macht Kemal falsch?",
      body: "Kemal versucht es noch einmal. Er macht dabei Fehler.",
    },
    question: {
      fragetext: "Finde die Fehler: „Kemal greift Nisa unter den Achseln, hebt sie gerade nach oben und legt sie dann direkt auf den Rücken ab — Kopf zuerst.“",
      fragetextB1: "Finde die Fehler: „Kemal greift Nisa unter den Achseln. Er hebt sie gerade hoch. Dann legt er sie auf den Rücken — Kopf zuerst.“",
      errorspot: {
        instruction: "Finde die Fehler: „Kemal greift Nisa unter den Achseln, hebt sie gerade nach oben und legt sie dann direkt auf den Rücken ab — Kopf zuerst.“",
        text: "Kemal greift Nisa unter den Achseln, hebt sie gerade nach oben und legt sie dann direkt auf den Rücken ab — Kopf zuerst.",
        errors: [
          {
            start: 0,
            end: 0,
            correction: "Massen-Zwischenraum-Regel: Nicht an den Achselhöhlen greifen.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Spiralig über die Seite aufnehmen, nicht parallel hochheben.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Beim Ablegen: Füße zuerst Kontakt zur Unterlage.",
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb5-09",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Hatch/Maietta, Kinästhetik Infant Handling)",
      "F20",
      "F21",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kinästhetik",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Anleitung für die Eltern schreiben",
      body: "Du sollst ein kurzes Anleitungsblatt für Nisas Eltern schreiben, das sie mit nach Hause nehmen können. Kernpunkt: Auch ein Säugling ist ein Pflegeempfänger mit eigener Wahrnehmung — er entscheidet über Tempo und Rhythmus mit, indem er Zeichen gibt (Strecken, Weinen, Ruhephasen).",
    },
    contentB1: {
      title: "Anleitung für die Eltern schreiben",
      body: "Du schreibst ein kurzes Blatt für Nisas Eltern. Sie nehmen es mit nach Hause. Wichtig: Auch ein Baby ist ein Pflegeempfänger. Es zeigt dir, ob das Tempo passt — durch Strecken, Weinen oder Ruhe. Du sollst das ernst nehmen.",
    },
    question: {
      fragetext: "Schreibe in 3–4 Sätzen eine Anleitung für die Eltern: Wie nimmt man ein Frühgeborenes richtig auf und legt es wieder ab?",
      fragetextB1: "Schreibe in 3–4 Sätzen: Wie nimmt man ein Frühgeborenes richtig hoch? Und wie legt man es wieder hin?",
      bewertungskriterien: [
        "Über die Seite aufnehmen (spiralig), nicht parallel hochheben",
        "Beim Ablegen: Füße zuerst Kontakt zur Unterlage",
        "Sanft und langsam bewegen",
        "Vestibuläre Überreizung vermeiden",
        "Signale des Säuglings als Pflegeempfänger respektieren",
      ],
    },
  },
  {
    stepId: "le-06-s2-tb6-01",
    phase: "s2",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP, Expertenstandard Dekubitusprophylaxe, 2017)",
      "F23",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Positionierungsintervall — was denkst du?",
      body: "Frau Siebert liegt seit 3 Stunden in Rückenlage. Eine Kollegin sagt: „Wir lagern immer alle 2 Stunden um — das reicht.“ Stimmt das?",
    },
    contentB1: {
      title: "Positionierungsintervall — was denkst du?",
      body: "Frau Siebert liegt seit 3 Stunden auf dem Rücken. Eine Kollegin sagt: „Wir lagern immer alle 2 Stunden um.“ Stimmt das?",
    },
    question: {
      fragetext: "Was denkst du — sollte man pauschal alle 2 Stunden umlagern?",
      crowdPoll: {
        question: "Was denkst du — sollte man pauschal alle 2 Stunden umlagern?",
        questionB1: "Was denkst du: Reicht es, immer alle 2 Stunden umzulagern?",
        inputType: "choice",
        options: [
          {
            id: "opt1",
            text: "Ja, alle 2 Stunden ist der Standard",
          },
          {
            id: "opt2",
            text: "Nein, das Intervall muss individuell bestimmt werden",
          },
          {
            id: "opt3",
            text: "Nur bei Dekubitusrisiko",
          },
          {
            id: "opt4",
            text: "Nur nachts",
          },
        ],
        seedResponses: [
          {
            text: "Ja, alle 2 Stunden ist der Standard",
            count: 34,
          },
          {
            text: "Nein, das Intervall muss individuell bestimmt werden",
            count: 28,
            highlight: true,
          },
          {
            text: "Nur bei Dekubitusrisiko",
            count: 8,
          },
          {
            text: "Nur nachts",
            count: 2,
          },
        ],
        totalVotes: 72,
        fazit: "Pauschale 2-Stunden-Intervalle sind nicht mehr evidenzbasiert! Das Umlagerungsintervall wird individuell bestimmt — auf Basis der Hautbeobachtung (Fingertest) und der Eigenbewegungsfähigkeit. (DNQP, Expertenstandard Dekubitusprophylaxe, 2017)",
        fazitB1: "Alle 2 Stunden reicht nicht immer. Das Intervall wird für jeden Patienten einzeln bestimmt. Mit Fingertest und Blick auf die Eigenbewegung.",
      },
    },
  },
  {
    stepId: "le-06-s2-tb6-02",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F22",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "glossary",
    xpValue: 10,
    contentC1: {
      title: "Positionierung — mehr als nur „Lagerung“",
      body: "Positionierung ist eine pflegerische Maßnahme mit einem konkreten Ziel: Dekubitusprophylaxe, Atemerleichterung, Schmerzlinderung oder Förderung der Eigenbewegung. Der Fachbegriff „Positionierung“ hat den älteren Begriff „Lagerung“ zunehmend abgelöst, weil „Lagern“ etwas Passives suggeriert — man lagert Kisten, aber keine Menschen. Jede Positionierung muss individuell auf den pflegebedürftigen Menschen abgestimmt sein.",
    },
    contentB1: {
      title: "Positionierung — mehr als nur „Lagerung“",
      body: "Positionierung (= therapeutische Lagerung) ist eine Pflege-Maßnahme mit einem klaren Ziel. Zum Beispiel: Dekubitus-Vorbeugung, leichteres Atmen, weniger Schmerzen oder Bewegung fördern. Man sagt heute „Positionierung“ statt „Lagerung“. Denn man lagert Kisten, aber keine Menschen. Jede Positionierung muss zum Patienten passen.",
    },
    question: {
      fragetext: "Lies den Unterschied zwischen „Lagerung“ und „Positionierung“.",
    },
  },
  {
    stepId: "le-06-s2-tb6-03",
    phase: "s2",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F23",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Die 4 Grundsätze",
      body: "Gute Positionierung folgt vier Prinzipien. Decke sie nacheinander auf.",
    },
    contentB1: {
      title: "Die 4 Grundsätze",
      body: "Gute Positionierung hat 4 Regeln. Decke sie nacheinander auf.",
    },
    question: {
      fragetext: "Decke die 4 Grundsätze auf.",
      reveal: {
        instruction: "Tippe, um die Grundsätze aufzudecken.",
        cards: [
          {
            id: "1",
            label: "Bequemlichkeit",
            content: "Der Mensch muss sich wohlfühlen, sonst bewegt er sich sofort zurück.",
          },
          {
            id: "2",
            label: "Hilfsmittel gezielt einsetzen",
            content: "Jedes überflüssige Kissen nimmt Bewegungsfreiheit.",
          },
          {
            id: "3",
            label: "Scherkräfte vermeiden",
            content: "Beim Rutschen im Bett wird die Haut geschädigt.",
          },
          {
            id: "4",
            label: "Intervalle individuell bestimmen",
            content: "Nicht pauschal alle 2 Stunden, sondern nach Hautbeobachtung.",
          },
        ],
        revealMode: "free",
      },
    },
  },
  {
    stepId: "le-06-s2-tb6-04",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(NPUAP/EPUAP 2014; DNQP 2017)",
      "F24",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Fingertest: Was bedeutet das Ergebnis?",
      body: "Du kontrollierst Frau Sieberts Kreuzbein und bemerkst eine gerötete Stelle. Du drückst mit dem Finger darauf.",
    },
    contentB1: {
      title: "Fingertest: Was bedeutet das Ergebnis?",
      body: "Du siehst bei Frau Siebert eine rote Stelle am Kreuzbein. Du drückst mit dem Finger darauf.",
    },
    question: {
      fragetext: "Die Rötung wird beim Drücken NICHT weiß. Was bedeutet das?",
      fragetextB1: "Die rote Stelle wird beim Drücken nicht weiß. Was bedeutet das?",
      optionen: [
        {
          text: "Normale Durchblutungsreaktion — kein Problem",
          isCorrect: false,
          explanation: "Nein — bei normaler Durchblutung wird die Rötung weiß.",
          explanationB1: "Nein — bei gesunder Haut wird die Rötung weiß.",
        },
        {
          text: "Dekubitus Kategorie I — sofortige Druckentlastung nötig",
          isCorrect: true,
          explanation: "Richtig! Eine nicht wegdrückbare Rötung bei intakter Haut = Dekubitus Kategorie I.",
          explanationB1: "Richtig! Eine rote Stelle, die nicht weiß wird, ist ein Dekubitus Kategorie I.",
        },
        {
          text: "Dekubitus Kategorie II — Wundversorgung einleiten",
          isCorrect: false,
          explanation: "Kategorie II hätte bereits eine offene Stelle — hier ist die Haut intakt.",
          explanationB1: "Kategorie II wäre eine offene Wunde. Hier ist die Haut noch zu.",
        },
        {
          text: "Eine Allergie auf das Laken",
          isCorrect: false,
          explanation: "Allergien sehen anders aus und wären wegdrückbar.",
          explanationB1: "Allergien sehen anders aus.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb6-05",
    phase: "s2",
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
    xpValue: 15,
    contentC1: {
      title: "Dekubitusgefahr in Seitenlage",
      body: "Frau Siebert wird auf die Seite positioniert. Auch hier gibt es gefährdete Stellen.",
    },
    contentB1: {
      title: "Dekubitusgefahr in Seitenlage",
      body: "Frau Siebert liegt auf der Seite. Auch hier gibt es gefährdete Stellen.",
    },
    question: {
      fragetext: "Markiere die Prädilektionsstellen in Seitenlage.",
      fragetextB1: "Markiere die gefährdeten Stellen in Seitenlage.",
      hotspot: {
        imageUrl: "/images/content/le-06/svg/körper-seitenlage.svg",
        imageAlt: "Körperumriss in Seitenlage mit Prädilektionsstellen",
        instruction: "Markiere die relevanten Stellen.",
        zones: [
          {
            id: "1",
            x: 15,
            y: 10,
            radius: 6,
            label: "Ohr",
          },
          {
            id: "2",
            x: 28,
            y: 22,
            radius: 7,
            label: "Schulter",
          },
          {
            id: "3",
            x: 55,
            y: 45,
            radius: 8,
            label: "Trochanter major",
          },
          {
            id: "4",
            x: 68,
            y: 68,
            radius: 6,
            label: "Knie-Innenseite",
          },
          {
            id: "5",
            x: 85,
            y: 90,
            radius: 6,
            label: "Außenknöchel",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb6-06",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F25",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Flache Rückenlage — wann und warum?",
      body: "Die flache Rückenlage hat klare Indikationen und Risiken. Entdecke sie.",
    },
    contentB1: {
      title: "Flache Rückenlage — wann und warum?",
      body: "Die flache Rückenlage ist nicht immer sinnvoll. Schau dir an, wann sie passt.",
    },
    question: {
      fragetext: "Drehe die Karten um.",
      fragetextB1: "Drehe die Karten um.",
      flipcard: {
        instruction: "Drehe die Karten um.",
        cards: [
          {
            front: "Wann?",
            back: "Nach Wirbelsäulen-OP, bei Bewusstlosigkeit",
          },
          {
            front: "Dekubitusrisiko",
            back: "Hinterhaupt, Schulterblätter, Ellbogen, Kreuzbein, Fersen",
          },
          {
            front: "Pneumonierisiko",
            back: "Untere Lungenabschnitte schlechter belüftet",
          },
          {
            front: "Pflegerische Maßnahme",
            back: "Regelmäßige Positionswechsel, Hautinspektion, Atemübungen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb6-07",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F26",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Oberkörperhochlage: Richtig oder falsch?",
      body: "Prüfe die Aussage zur Oberkörperhochlage.",
    },
    contentB1: {
      title: "Oberkörperhochlage: Richtig oder falsch?",
      body: "Stimmt die Aussage?",
    },
    question: {
      fragetext: "Beim Essen und Trinken im Bett muss der Oberkörper mindestens auf 30° erhöht sein — um Aspiration zu vermeiden.",
      fragetextB1: "Beim Essen im Bett muss der Oberkörper mindestens auf 30° hoch sein — damit nichts in die Lunge kommt (= Aspiration).",
      optionen: [
        {
          text: "Richtig",
          isCorrect: true,
          explanation: "Richtig! Beim Essen ist Oberkörperhochlage Pflicht gegen Aspiration.",
          explanationB1: "Richtig! Beim Essen muss der Oberkörper hoch sein. Sonst droht Aspiration.",
        },
        {
          text: "Falsch",
          isCorrect: false,
          explanation: "Doch — beim Essen droht im Liegen Aspiration. Oberkörper hoch!",
          explanationB1: "Doch — beim Essen im Liegen droht Aspiration. Oberkörper hoch!",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb6-08",
    phase: "s2",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F23",
      "F26",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Scherkräfte vermeiden",
      body: "Scherkräfte entstehen, wenn die Haut haftet, aber der Körper rutscht.",
    },
    contentB1: {
      title: "Scherkräfte vermeiden",
      body: "Scherkräfte entstehen, wenn die Haut klebt, aber der Körper rutscht.",
    },
    question: {
      fragetext: "Ordne Ursache und Vermeidungsmaßnahme zu.",
      fragetextB1: "Ordne Ursache und Maßnahme zu.",
      matchingPairs: [
        {
          left: "Patient rutscht im Bett nach unten",
          right: "Fußteil anheben oder Anti-Rutsch-Unterlage",
        },
        {
          left: "Kopfteil hochgestellt, Patient verrutscht",
          right: "Patient aktiv hochrutschen lassen",
        },
        {
          left: "Laken nicht glatt",
          right: "Laken straff ziehen, Falten vermeiden",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb6-09",
    phase: "s2",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F22",
      "F23",
      "F24",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Memory: Positionierung und Dekubitus",
      body: "Finde die Paare aus Begriff und Definition.",
    },
    contentB1: {
      title: "Memory: Positionierung und Dekubitus",
      body: "Finde die Paare.",
    },
    question: {
      fragetext: "Decke die Paare auf.",
      memoryPairs: [
        {
          a: "Fingertest",
          b: "Druck auf gerötete Hautstelle — wird sie weiß?",
        },
        {
          a: "Prädilektionsstelle",
          b: "Körperstelle mit erhöhtem Dekubitusrisiko",
        },
        {
          a: "Scherkraft",
          b: "Tangential wirkende Kraft beim Rutschen",
        },
        {
          a: "Positionierung",
          b: "Therapeutische Lagerung mit definiertem Ziel",
        },
        {
          a: "Kategorie I",
          b: "Nicht wegdrückbare Rötung bei intakter Haut",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb6-10",
    phase: "s2",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Braden/Bergstrom, 1987; DNQP 2017)",
      "F47",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Braden-Skala verstehen",
      body: "Die Braden-Skala: 6 Subskalen, Score 6–23. Niedrig = hohes Risiko.",
    },
    contentB1: {
      title: "Braden-Skala verstehen",
      body: "Die Braden-Skala: 6 Bereiche, Punkte von 6 bis 23. Wenige Punkte = hohes Risiko.",
    },
    question: {
      fragetext: "Frau Siebert: Sensorik 3, Feuchtigkeit 3, Aktivität 2, Mobilität 2, Ernährung 2, Reibung 2. Braden-Score?",
      fragetextB1: "Frau Siebert hat die Werte 3, 3, 2, 2, 2, 2. Wie hoch ist der Braden-Score?",
      slider: {
        instruction: "Wähle den Wert.",
        unit: "Punkte",
        min: 6,
        max: 23,
        step: 1,
        correctValue: 14,
        tolerance: 0,
        explanation: "14 Punkte = erhöhtes Dekubitusrisiko. (Braden/Bergstrom, 1987)",
        explanationB1: "14 Punkte = erhöhtes Risiko für Dekubitus.",
      },
    },
  },
  {
    stepId: "le-06-s2-tb6-11",
    phase: "s2",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F46",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Risikofaktoren: Person, Umgebung oder Therapie?",
      body: "Dekubitus-Risikofaktoren lassen sich in drei Gruppen einteilen.",
    },
    contentB1: {
      title: "Risikofaktoren: Person, Umgebung oder Therapie?",
      body: "Dekubitus-Risiken gibt es in 3 Gruppen.",
    },
    question: {
      fragetext: "Ordne die Risikofaktoren den Kategorien zu.",
      fragetextB1: "Ordne die Risiken zu.",
      categories: [
        {
          name: "Personenbezogen",
        },
        {
          name: "Umgebungsbezogen",
        },
        {
          name: "Therapiebezogen",
        },
      ],
      categoryItems: [
        {
          text: "Eingeschränkte Mobilität",
          correctCategory: 0,
        },
        {
          text: "Feuchtigkeit",
          correctCategory: 1,
        },
        {
          text: "Sedierung",
          correctCategory: 2,
        },
        {
          text: "Mangelernährung",
          correctCategory: 0,
        },
        {
          text: "Ungeeignete Matratze",
          correctCategory: 1,
        },
        {
          text: "Lange OP-Dauer",
          correctCategory: 2,
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb6-12",
    phase: "s2",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F22",
      "F23",
      "F24",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Grundsätze der Positionierung",
      body: "Fülle die Lücken mit dem passenden Fachbegriff.",
    },
    contentB1: {
      title: "Grundsätze der Positionierung",
      body: "Setze die fehlenden Wörter ein.",
    },
    question: {
      fragetext: "Ergänze die Lücken.",
      fragetextB1: "Setze die richtigen Wörter ein.",
      cloze: {
        textWithBlanks: "Eine gute Positionierung hat immer ein konkretes [1]. Das Intervall wird [2] bestimmt, nicht pauschal alle [3] Stunden. Der [4] zeigt, ob eine Rötung wegdrückbar ist.",
        blanks: [
          {
            id: 1,
            correct: "Ziel",
            distractors: [],
          },
          {
            id: 2,
            correct: "individuell",
            distractors: [],
          },
          {
            id: 3,
            correct: "2",
            distractors: [
              "zwei",
            ],
          },
          {
            id: 4,
            correct: "Fingertest",
            distractors: [],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb6-13",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F22–F24",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Positionierungsplan für Frau Siebert",
      body: "Braden-Score 14. Erstelle einen Plan für 24 Stunden.",
    },
    contentB1: {
      title: "Positionierungsplan für Frau Siebert",
      body: "Braden 14 — Risiko. Schreibe einen Plan für 24 Stunden.",
    },
    question: {
      fragetext: "Welche Positionen, welche Reihenfolge, welches Intervall? Begründe.",
      fragetextB1: "Welche Positionen? In welcher Reihenfolge? Wie oft? Warum?",
      bewertungskriterien: [
        "Wechsel Rückenlage und 30°-Seitenlage",
        "Individuelle Intervalle, nicht pauschal alle 2 Stunden",
        "Fingertest an den Prädilektionsstellen",
        "Oberkörperhochlage zum Essen",
      ],
    },
  },
  {
    stepId: "le-06-s2-tb7-01",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "[Transfer]",
      "F27",
      "F28",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Welche Seitenlage für welchen Patienten?",
      body: "Station 3A, Frühschicht. Frau Siebert (Dekubitusrisiko) und Herr Demir (Hemiplegie rechts) liegen auf dem gleichen Flur. Beide sollen auf die Seite — aber brauchen völlig verschiedene Seitenlagen.",
    },
    contentB1: {
      title: "Welche Seitenlage für welchen Patienten?",
      body: "Station 3A, Frühschicht. Frau Siebert hat Dekubitus-Risiko. Herr Demir hat eine Lähmung rechts (Hemiplegie). Beide sollen auf die Seite. Sie brauchen aber verschiedene Seitenlagen.",
    },
    question: {
      fragetext: "Präge dir die beiden Patienten ein.",
    },
  },
  {
    stepId: "le-06-s2-tb7-02",
    phase: "s2",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017; Bobath)",
      "F27",
      "F28",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Der große Vergleich",
      body: "30° und 90° — zwei Seitenlagen mit sehr unterschiedlichen Einsatzgebieten.",
    },
    contentB1: {
      title: "Der große Vergleich",
      body: "30° und 90° — zwei Seitenlagen mit verschiedenen Aufgaben.",
    },
    question: {
      fragetext: "Vergleiche die beiden Seitenlagen.",
      fragetextB1: "Vergleiche die beiden Seitenlagen.",
      comparison: {
        instruction: "Vergleiche die Optionen.",
        columns: [
          {
            label: "30°-Seitenlage",
          },
          {
            label: "90°-Seitenlage",
          },
        ],
        rows: [
          {
            criterion: "Form",
            values: [
              "Leicht schräg, Kissen im Rücken",
              "Volle Seitenlage",
            ],
          },
          {
            criterion: "Hauptziel",
            values: [
              "Dekubitusprophylaxe",
              "Bobath bei Hemiplegie, Lungen-OP",
            ],
          },
          {
            criterion: "Druck auf Trochanter",
            values: [
              "Trochanter entlastet",
              "Hoher Druck auf Trochanter",
            ],
          },
          {
            criterion: "Typischer Einsatz",
            values: [
              "Für alle mit Dekubitusrisiko",
              "Für Dekubitus UNGEEIGNET",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb7-03",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F27",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Die richtige Wahl",
      body: "Frau Siebert hat Dekubitusrisiko (Braden 14).",
    },
    contentB1: {
      title: "Die richtige Wahl",
      body: "Frau Siebert hat Dekubitus-Risiko (Braden 14).",
    },
    question: {
      fragetext: "Welche Seitenlage wählst du für Frau Siebert?",
      fragetextB1: "Welche Seitenlage passt für Frau Siebert?",
      optionen: [
        {
          text: "30°-Seitenlage",
          isCorrect: true,
          explanation: "Richtig! 30° ist Standard für Dekubitusprophylaxe — Trochanter wird entlastet.",
          explanationB1: "Richtig! 30° ist Standard bei Dekubitus-Risiko.",
        },
        {
          text: "90°-Seitenlage",
          isCorrect: false,
          explanation: "90° erzeugt zu viel Druck auf den Trochanter — kontraproduktiv.",
          explanationB1: "90° macht zu viel Druck. Nicht gut bei Dekubitus.",
        },
        {
          text: "Beide sind gleich geeignet",
          isCorrect: false,
          explanation: "Sie unterscheiden sich stark: 30° für Dekubitus, 90° für Bobath.",
          explanationB1: "Die beiden sind sehr verschieden.",
        },
        {
          text: "Keine Seitenlage",
          isCorrect: false,
          explanation: "Ein Wechsel ist nötig — die Frage ist nur: welcher.",
          explanationB1: "Ein Wechsel ist nötig.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb7-04",
    phase: "s2",
    stepType: "labelImage",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F27",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Kissen richtig platzieren",
      body: "Die 30°-Seitenlage braucht gezielte Kissenplatzierung.",
    },
    contentB1: {
      title: "Kissen richtig platzieren",
      body: "Die 30°-Seitenlage braucht Kissen an den richtigen Stellen.",
    },
    question: {
      fragetext: "Beschrifte das Bild.",
      fragetextB1: "Beschrifte das Bild.",
      labelImage: {
        imageUrl: "/images/content/le-06/svg/30-grad-seitenlage.svg",
        imageAlt: "30°-Seitenlage mit Kissenpositionierung",
        instruction: "Beschrifte das Bild.",
        labels: [
          {
            id: "1",
            correct: "Kissen im Rücken (30°-Neigung sichern)",
            position: {
              x: 30,
              y: 35,
            },
          },
          {
            id: "2",
            correct: "Trochanter entlastet",
            position: {
              x: 55,
              y: 50,
            },
          },
          {
            id: "3",
            correct: "Fersen frei",
            position: {
              x: 85,
              y: 85,
            },
          },
          {
            id: "4",
            correct: "Beine leicht angewinkelt",
            position: {
              x: 65,
              y: 75,
            },
          },
        ],
        mode: "select",
      },
    },
  },
  {
    stepId: "le-06-s2-tb7-05",
    phase: "s2",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017; Bobath)",
      "F27",
      "F28",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Schnell-Zuordnung",
      body: "Wische: Links = 30°, Rechts = 90°.",
    },
    contentB1: {
      title: "Schnell-Zuordnung",
      body: "Wische: Links = 30°, Rechts = 90°.",
    },
    question: {
      fragetext: "Welche Seitenlage passt?",
      fragetextB1: "Welche Seitenlage passt?",
      swipe: {
        instruction: "Wische nach rechts für \"90°\", nach links für \"30°\".",
        cards: [
          {
            statement: "Dekubitusprophylaxe bei 80-Jährigem",
            isCorrect: false,
            explanation: "Richtig — 30° für Dekubitusprophylaxe.",
          },
          {
            statement: "Hemiplegie rechts, Bobath",
            isCorrect: true,
            explanation: "Richtig — 90° beim Bobath-Konzept.",
          },
          {
            statement: "Post-OP, Dekubitusrisiko",
            isCorrect: false,
            explanation: "Richtig — bei Dekubitusrisiko immer 30°.",
          },
          {
            statement: "Lungen-OP, operierte Seite oben",
            isCorrect: true,
            explanation: "Richtig — 90° bei Lungen-OP.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb7-06",
    phase: "s2",
    stepType: "cloze",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017; Bobath)",
      "F27",
      "F28",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Tabelle: 30° vs. 90°",
      body: "Vergleichstabelle mit Lücken.",
    },
    contentB1: {
      title: "Tabelle: 30° vs. 90°",
      body: "Vergleich mit Lücken.",
    },
    question: {
      fragetext: "Fülle die Lücken aus.",
      fragetextB1: "Fülle die Lücken aus.",
      cloze: {
        textWithBlanks: "Hauptindikation 30°: [1]. Druck auf Trochanter bei 30°: [2]. 90° ist für Dekubitusprophylaxe geeignet: [3]. Typischer Patient für 30°: [4].",
        blanks: [
          {
            id: 1,
            correct: "Dekubitusprophylaxe",
            distractors: [],
          },
          {
            id: 2,
            correct: "Gering",
            distractors: [
              "gering",
              "niedrig",
            ],
          },
          {
            id: 3,
            correct: "Nein",
            distractors: [
              "nein",
            ],
          },
          {
            id: 4,
            correct: "Frau Siebert",
            distractors: [],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb7-07",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F28",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Mythos oder Fakt?",
      body: "Prüfe die Aussage.",
    },
    contentB1: {
      title: "Mythos oder Fakt?",
      body: "Prüfe die Aussage.",
    },
    question: {
      fragetext: "Die 90°-Seitenlage eignet sich gut für die allgemeine Dekubitusprophylaxe.",
      fragetextB1: "Die 90°-Seitenlage passt gut, um Dekubitus vorzubeugen.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: false,
          explanation: "Richtig — 90° ist NICHT für Dekubitusprophylaxe geeignet! Hoher Druck auf Trochanter.",
          explanationB1: "Richtig — 90° ist nicht gut für Dekubitus-Vorbeugung.",
        },
        {
          text: "Falsch",
          isCorrect: true,
          explanation: "Doch, es ist falsch — 90° erzeugt hohen Druck auf den Trochanter.",
          explanationB1: "Falsch: 90° macht zu viel Druck auf den Trochanter.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb7-08",
    phase: "s2",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F27",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "30° einschätzen",
      body: "Der Standard für Dekubitusprophylaxe.",
    },
    contentB1: {
      title: "30° einschätzen",
      body: "Der Standard für Dekubitus-Vorbeugung.",
    },
    question: {
      fragetext: "Wie viel Grad hat die Standard-Seitenlage für Dekubitusprophylaxe?",
      fragetextB1: "Wie viel Grad hat die Standard-Seitenlage gegen Dekubitus?",
      estimation: {
        instruction: "Schätze den Wert.",
        unit: "Grad",
        correctValue: 30,
        tolerance: 5,
        funFact: "",
        explanation: "30° ist der Standard — leicht schräg, Trochanter entlastet.",
        explanationB1: "30° ist der Standard. Leicht schräg, Trochanter frei.",
      },
    },
  },
  {
    stepId: "le-06-s2-tb7-09",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(Bobath)",
      "F28",
      "F42",
    ],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Warum 90° bei Hemiplegie?",
      body: "Herr Demir fragt: „Warum muss ich so komisch auf der Seite liegen?“",
    },
    contentB1: {
      title: "Warum 90° bei Hemiplegie?",
      body: "Herr Demir fragt: „Warum liege ich so komisch auf der Seite?“",
    },
    question: {
      fragetext: "Wie erklärst du es Herrn Demir?",
      fragetextB1: "Wie erklärst du es Herrn Demir?",
      dialogPhases: [
        {
          context: "Herr Demir schaut dich fragend an. Er wirkt skeptisch. Wie reagierst du?",
          contextB1: "Herr Demir schaut dich fragend an. Er ist skeptisch. Was sagst du?",
          options: [
            {
              text: "„Das ist eben so bei Schlaganfall.“",
              patientResponse: "",
              score: 1,
              feedback: "Zu knapp — erklärt nichts.",
              feedbackB1: "Das erklärt nichts.",
            },
            {
              text: "„Bei Ihnen setzen wir das Bobath-Konzept ein. Die 90°-Position hilft, dass Ihr Gehirn die rechte Seite wieder besser wahrnimmt.“",
              patientResponse: "",
              score: 3,
              feedback: "Perfekt — Konzept benannt, Zweck erklärt.",
              feedbackB1: "Sehr gut — du nennst das Konzept und den Zweck.",
            },
            {
              text: "„Weil Ihr Dekubitusrisiko niedriger ist.“",
              patientResponse: "",
              score: 1,
              feedback: "Nicht korrekt — der Grund ist Bobath, nicht Dekubitus.",
              feedbackB1: "Falsch — der Grund ist Bobath.",
            },
          ],
        },
        {
          context: "Herr Demir fragt nach: „Was bedeutet Bobath?“ Wie erklärst du Bobath?",
          contextB1: "Herr Demir fragt: „Was heißt Bobath?“ Was sagst du?",
          options: [
            {
              text: "„Das ist zu kompliziert, das verstehen Sie nicht.“",
              patientResponse: "",
              score: 1,
              feedback: "Respektlos — Patienten haben das Recht auf Erklärung.",
              feedbackB1: "Das ist nicht höflich. Patienten dürfen alles wissen.",
            },
            {
              text: "„Ein Therapiekonzept, das die betroffene Seite einbezieht — nichts wird einfach ausgelassen.“",
              patientResponse: "",
              score: 3,
              feedback: "Sehr gut — verständlich und korrekt.",
              feedbackB1: "Sehr gut — einfach und richtig erklärt.",
            },
            {
              text: "„Ein Konzept zur Muskelentspannung.“",
              patientResponse: "",
              score: 2,
              feedback: "Nicht ganz — Bobath normalisiert den Muskeltonus (nicht nur Entspannung).",
              feedbackB1: "Fast — Bobath macht den Muskel-Ton wieder normal.",
            },
          ],
        },
        {
          context: "Herr Demir sagt: „Aber die rechte Seite tut weh in dieser Lage.“ Wie gehst du damit um?",
          contextB1: "Herr Demir sagt: „Meine rechte Seite tut weh.“ Was machst du?",
          options: [
            {
              text: "„Das gehört dazu, da müssen Sie durch.“",
              patientResponse: "",
              score: 1,
              feedback: "Nie Schmerzen ignorieren — Schmerz ist ein Warnsignal.",
              feedbackB1: "Nie Schmerzen ignorieren.",
            },
            {
              text: "„Ich passe die Lage an und schaue nach Druckstellen. Sagen Sie mir, wenn es besser wird.“",
              patientResponse: "",
              score: 3,
              feedback: "Richtig — Schmerz ernst nehmen und anpassen.",
              feedbackB1: "Sehr gut — Schmerz ernst nehmen.",
            },
            {
              text: "„Ich drehe Sie sofort in Rückenlage.“",
              patientResponse: "",
              score: 2,
              feedback: "Zu schnell — erst anpassen, dann entscheiden.",
              feedbackB1: "Zu schnell. Erst anpassen.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb7-10",
    phase: "s2",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017; Bobath)",
      "F27",
      "F28",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Wann 30°, wann 90°?",
      body: "Formuliere deine Entscheidungsregel.",
    },
    contentB1: {
      title: "Wann 30°, wann 90°?",
      body: "Schreibe deine Regel auf.",
    },
    question: {
      fragetext: "Formuliere die Entscheidungsregel in 2–3 Sätzen.",
      fragetextB1: "Schreibe die Regel in 2–3 Sätzen auf.",
      reflection: {
        placeholder: "Deine Antwort...",
        systemPrompt: "Gib konstruktives Feedback zur Reflexion.",
        prompt: "Wann 30°, wann 90°? Formuliere eine klare Regel.",
      },
    },
  },
  {
    stepId: "le-06-s2-tb8-01",
    phase: "s2",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F30",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Spezial-Positionen",
      body: "Neben den Grundlagen gibt es Spezial-Positionen für besondere Situationen.",
    },
    contentB1: {
      title: "Spezial-Positionen",
      body: "Für besondere Situationen gibt es Spezial-Positionen.",
    },
    question: {
      fragetext: "In welcher Situation wird die Schocklage eingesetzt?",
      crowdPoll: {
        question: "In welcher Situation wird die Schocklage eingesetzt?",
        questionB1: "Wann wird die Schocklage angewendet?",
        inputType: "choice",
        options: [
          {
            id: "opt1",
            text: "Schlafstörungen",
          },
          {
            id: "opt2",
            text: "Kreislaufschock",
          },
          {
            id: "opt3",
            text: "Rückenschmerzen",
          },
          {
            id: "opt4",
            text: "Dekubitus",
          },
        ],
        seedResponses: [
          {
            text: "Schlafstörungen",
            count: 4,
          },
          {
            text: "Kreislaufschock",
            count: 52,
            highlight: true,
          },
          {
            text: "Rückenschmerzen",
            count: 6,
          },
          {
            text: "Dekubitus",
            count: 10,
          },
        ],
        totalVotes: 72,
        fazit: "Schocklage (Beine hoch, Oberkörper flach) verbessert venösen Rückstrom bei drohendem Schock.",
        fazitB1: "Schocklage: Beine hoch, Oberkörper flach. Das hilft dem Kreislauf bei drohendem Schock.",
      },
    },
  },
  {
    stepId: "le-06-s2-tb8-02",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F29",
      "F30",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "4 Speziallagerungen",
      body: "Jede Speziallagerung hat ihre eigene Indikation.",
    },
    contentB1: {
      title: "4 Speziallagerungen",
      body: "Jede Spezial-Lagerung hat ihren Zweck.",
    },
    question: {
      fragetext: "Drehe die Karten um.",
      fragetextB1: "Drehe die Karten um.",
      flipcard: {
        instruction: "Drehe die Karten um.",
        cards: [
          {
            front: "135°-Lage",
            back: "Entlastet Kreuzbein/Fersen, Dekubitus-Wechselposition",
          },
          {
            front: "Herzbettlage",
            back: "Oberkörper hoch, Beine tief, Herzinsuffizienz",
          },
          {
            front: "Schocklage",
            back: "Beine hoch, Oberkörper flach, Kreislaufschock",
          },
          {
            front: "Nestlage",
            back: "Begrenzung für Frühgeborene, Selbstwahrnehmung",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb8-03",
    phase: "s2",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F29",
      "F30",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Speziallage und Indikation",
      body: "Jede Speziallage hat eine klare Indikation.",
    },
    contentB1: {
      title: "Speziallage und Indikation",
      body: "Jede Spezial-Lage hat einen klaren Zweck.",
    },
    question: {
      fragetext: "Ordne Speziallage und Indikation zu.",
      fragetextB1: "Ordne Speziallage und Zweck zu.",
      matchingPairs: [
        {
          left: "135°-Lage",
          right: "Dekubitusprophylaxe (Wechselposition)",
        },
        {
          left: "Herzbettlage",
          right: "Herzinsuffizienz",
        },
        {
          left: "Schocklage",
          right: "Kreislaufschock",
        },
        {
          left: "Nestlage",
          right: "Frühgeborene",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb8-04",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F30",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Herzbett oder Schock?",
      body: "Zwei Spezial-Lagen, leicht zu verwechseln.",
    },
    contentB1: {
      title: "Herzbett oder Schock?",
      body: "Zwei Spezial-Lagen, leicht zu verwechseln.",
    },
    question: {
      fragetext: "Was ist der Unterschied zwischen Herzbettlage und Schocklage?",
      fragetextB1: "Was ist der Unterschied zwischen Herzbett und Schocklage?",
      optionen: [
        {
          text: "Herzbett: Beine hoch, Oberkörper tief",
          isCorrect: false,
          explanation: "Falsch — das ist die Schocklage.",
          explanationB1: "Das ist die Schocklage, nicht Herzbett.",
        },
        {
          text: "Herzbett: Oberkörper hoch + Beine tief; Schock: Beine hoch + Oberkörper flach",
          isCorrect: true,
          explanation: "Richtig — genau umgekehrt.",
          explanationB1: "Richtig! Die beiden Positionen sind genau umgekehrt.",
        },
        {
          text: "Es gibt keinen Unterschied",
          isCorrect: false,
          explanation: "Doch — sehr große Unterschiede.",
          explanationB1: "Doch, sehr großer Unterschied.",
        },
        {
          text: "Beide werden bei Herzerkrankungen eingesetzt",
          isCorrect: false,
          explanation: "Schocklage ist bei Kreislaufschock, nicht bei Herz.",
          explanationB1: "Schocklage ist bei Schock, nicht Herz.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb8-05",
    phase: "s2",
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F29",
      "F30",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "90 Sekunden: 4 Speziallagen",
      body: "Auf Zeit: 4 Speziallagen, 4 Indikationen.",
    },
    contentB1: {
      title: "90 Sekunden: 4 Speziallagen",
      body: "Auf Zeit: 4 Lagen, 4 Zwecke.",
    },
    question: {
      fragetext: "4 Speziallagen, 4 Indikationen — los!",
      fragetextB1: "4 Lagen, 4 Zwecke — los!",
      timerQuestions: [
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
        {
          question: "",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
      ],
      timeLimitSeconds: 90,
    },
  },
  {
    stepId: "le-06-s2-tb8-06",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F30",
      "[Transfer — Baby Nisa]",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 10,
    contentC1: {
      title: "Nestlage für Baby Nisa",
      body: "Nestlage gibt Frühgeborenen Begrenzung und Sicherheit — ähnlich wie im Mutterleib. Aber: Nicht zu eng, Nisa braucht Raum für Eigenbewegung.",
    },
    contentB1: {
      title: "Nestlage für Baby Nisa",
      body: "Nestlage gibt Frühgeborenen Grenzen und Sicherheit — wie im Bauch. Aber: Nicht zu eng. Nisa braucht Platz, um sich zu bewegen.",
    },
    question: {
      fragetext: "Lies die Erklärung zur Nestlage.",
    },
  },
  {
    stepId: "le-06-s2-tb8-07",
    phase: "s2",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F25",
      "F26",
      "F27",
      "F28",
      "F29",
      "F30",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Standard oder Spezial?",
      body: "Sortiere die Positionen nach Grundtyp.",
    },
    contentB1: {
      title: "Standard oder Spezial?",
      body: "Sortiere die Positionen.",
    },
    question: {
      fragetext: "Ordne die Positionen zu.",
      fragetextB1: "Ordne die Positionen zu.",
      categories: [
        {
          name: "Standardlagerungen",
        },
        {
          name: "Speziallagerungen",
        },
      ],
      categoryItems: [
        {
          text: "Rückenlage",
          correctCategory: 0,
        },
        {
          text: "30°-Seitenlage",
          correctCategory: 0,
        },
        {
          text: "Oberkörperhochlage",
          correctCategory: 0,
        },
        {
          text: "Herzbettlage",
          correctCategory: 1,
        },
        {
          text: "Schocklage",
          correctCategory: 1,
        },
        {
          text: "135°-Lage",
          correctCategory: 1,
        },
        {
          text: "Nestlage",
          correctCategory: 1,
        },
      ],
    },
  },
  {
    stepId: "le-06-s2-tb8-08",
    phase: "s2",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F23",
      "F24",
      "F27",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Nachtdienst-Fehler",
      body: "Finde die Fehler in dieser Übergabe.",
    },
    contentB1: {
      title: "Nachtdienst-Fehler",
      body: "Finde die Fehler.",
    },
    question: {
      fragetext: "Pflegehelferin dreht Frau Siebert in 90°-Seitenlage zur Dekubitusprophylaxe, nutzt 5 Kissen, vergisst Fingertest.",
      fragetextB1: "Eine Helferin dreht Frau Siebert in 90°-Seitenlage gegen Dekubitus. Sie nutzt 5 Kissen. Sie vergisst den Fingertest.",
      errorspot: {
        instruction: "Pflegehelferin dreht Frau Siebert in 90°-Seitenlage zur Dekubitusprophylaxe, nutzt 5 Kissen, vergisst Fingertest.",
        text: "Pflegehelferin dreht Frau Siebert in 90°-Seitenlage zur Dekubitusprophylaxe, nutzt 5 Kissen, vergisst Fingertest.",
        errors: [
          {
            start: 0,
            end: 0,
            correction: "30° statt 90° — 90° ist kontraproduktiv bei Dekubitus.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Zu viele Kissen schränken Eigenbewegung ein.",
            explanation: "",
          },
          {
            start: 0,
            end: 0,
            correction: "Fingertest ist Pflicht vor jeder Umlagerung.",
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s2-tb8-09",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "(DNQP 2017)",
      "F22–F30",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Positionierungsempfehlung für die Übergabe",
      body: "Schreibe eine klare Empfehlung für die nächste Schicht.",
    },
    contentB1: {
      title: "Positionierungs-Empfehlung für die Übergabe",
      body: "Schreibe eine klare Empfehlung für die nächste Schicht.",
    },
    question: {
      fragetext: "Schreibe Positionierungsempfehlung für die Übergabe (3–4 Sätze).",
      fragetextB1: "Schreibe 3–4 Sätze für die Übergabe.",
      bewertungskriterien: [
        "Position und Grund nennen",
        "Intervall individuell (kein „alle 2h“)",
        "Fingertest-Ergebnis dokumentieren",
        "Auf Besonderheiten hinweisen (z.B. Schmerzen)",
      ],
    },
  },
];
