// Session 6: "Wieder auf die Beine -- Bobath und Transfer" -- LE 06 Menschen in ihrer Mobilitaet unterstuetzen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB11: Bobath-Konzept (I-16) + TB12: Transfer-Techniken + Hilfsmittel (I-18, I-19)
// Leitfaelle: Herr Schmidt (56, Hemiplegie rechts), Frau Becker (79, Hueft-TEP)
// Bloom: B3-B4, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S6: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE -- POL-Einstieg: Herr Schmidt will in den Rollstuhl
  // =============================================================
  {
    stepId: "le06-s6-tb11-01",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Herr Schmidt will in den Rollstuhl",
      body: "Tag 7 nach dem Schlaganfall. Herr Schmidt sitzt an der Bettkante und sagt entschlossen: 'Ich will endlich in den Rollstuhl! Aber ich kann nur die linke Seite benutzen.' Die Physiotherapeutin kommt dazu.",
      fallbezug: "Herr Schmidt (56 Jahre, Hemiplegie rechts, Tag 7 nach Schlaganfall) ist zunehmend motiviert sich zu bewegen.",
      glossarBegriffe: ["Bobath-Konzept"],
    },
    contentB1: {
      title: "Herr Schmidt will aufstehen",
      body: "Tag 7 nach dem Schlaganfall. Herr Schmidt sagt: 'Ich will in den Rollstuhl! Aber meine rechte Seite geht nicht.' Die Physiotherapeutin kommt.",
      fallbezug: "Herr Schmidt (56 Jahre) kann die rechte Seite kaum bewegen.",
    },
    question: {
      fragetext: "Herr Schmidt will in den Rollstuhl. Was sagst du?",
      patientName: "Physiotherapeutin",
      dialogPhases: [
        {
          context: "Die Physiotherapeutin sagt: 'Genau dafuer gibt es das Bobath-Konzept. Wissen Sie was das ist?' Sie schaut dich erwartungsvoll an.",
          contextB1: "Die Physiotherapeutin fragt: 'Weisst du was das Bobath-Konzept ist?'",
          speaker: "Physiotherapeutin",
          options: [
            {
              text: "Beim Bobath-Konzept beziehen wir die betroffene rechte Seite gezielt ein, statt sie zu kompensieren. So stimulieren wir das Gehirn und nutzen die Neuroplastizitaet.",
              textB1: "Bobath heisst: Wir benutzen die kranke Seite mit. Wir lassen sie nicht einfach liegen. So lernt das Gehirn neu.",
              patientResponse: "Sehr gut! Genau das ist der Kern. Bei Herrn Schmidt bedeutet das: Alles passiert von rechts. Nachttisch rechts, Ansprache von rechts, Reize auf die betroffene Seite.",
              patientResponseB1: "Super! Richtig. Bei Herrn Schmidt heisst das: Alles von rechts. Nachttisch rechts, Ansprache von rechts.",
              score: 3,
              feedback: "Exzellent! Du kennst das Grundprinzip des Bobath-Konzepts: Betroffene Seite einbeziehen statt kompensieren. Das stimuliert die Neuroplastizitaet -- die Faehigkeit des Gehirns sich neu zu vernetzen.",
              feedbackB1: "Sehr gut! Du verstehst Bobath: Die kranke Seite einbeziehen. Nicht nur die gesunde Seite benutzen.",
            },
            {
              text: "Bobath bedeutet dass wir die gesunde linke Seite trainieren, damit sie die Arbeit der rechten Seite uebernimmt.",
              textB1: "Bobath heisst: Wir trainieren die gesunde Seite, damit sie fuer beide Seiten arbeitet.",
              patientResponse: "Das ist leider genau das Gegenteil! Bobath bezieht die BETROFFENE Seite ein. Wenn wir nur die gesunde Seite trainieren, verlernt das Gehirn die betroffene Seite noch mehr.",
              patientResponseB1: "Nein, das ist falsch! Bobath bezieht die KRANKE Seite ein. Nicht nur die gesunde trainieren.",
              score: 1,
              feedback: "Vorsicht -- das ist ein haeufiger Irrtum! Das Bobath-Konzept bezieht gezielt die betroffene Seite ein. Die Kompensation durch die gesunde Seite fuehrt dazu dass das Gehirn die betroffene Seite 'vergisst'.",
              feedbackB1: "Aufpassen! Bobath ist das Gegenteil: Wir benutzen die kranke Seite mit. Wenn wir nur die gesunde Seite benutzen, wird es schlimmer.",
            },
            {
              text: "Ich bin mir nicht sicher, aber hat es etwas mit Schlaganfall-Patienten zu tun?",
              textB1: "Ich weiss nicht genau. Hat es mit Schlaganfall zu tun?",
              patientResponse: "Richtig erkannt -- es ist fuer neurologische Patienten. Das Kernprinzip: Wir beziehen die betroffene Seite gezielt ein, statt nur die gesunde zu nutzen. Neuroplastizitaet nutzen!",
              patientResponseB1: "Ja, richtig! Bobath ist fuer Schlaganfall-Patienten. Die kranke Seite wird einbezogen. So lernt das Gehirn neu.",
              score: 2,
              feedback: "Guter Ansatz! Bobath ist ein Therapiekonzept fuer neurologische Patienten (Schlaganfall, MS, Parkinson). Das Grundprinzip: Die betroffene Seite wird einbezogen, nicht kompensiert.",
              feedbackB1: "Guter Start! Bobath ist fuer Patienten mit Schlaganfall. Die kranke Seite wird einbezogen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ERKLAERUNG -- Bobath-Konzept
  // =============================================================
  {
    stepId: "le06-s6-tb11-02",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "glossary",
    contentC1: {
      title: "Das Bobath-Konzept",
      body: "Bobath-Konzept: Ganzheitliches Therapiekonzept fuer neurologische Patienten (Schlaganfall, MS, Parkinson).\n\nZiel: Normalisierung des Muskeltonus und Anbahnung physiologischer Bewegungsmuster.\n\nGrundprinzip: Die betroffene Seite wird einbezogen, NICHT kompensiert. Warum? Das Gehirn ist plastisch (Neuroplastizitaet). Wenn die betroffene Seite staendig Reize bekommt, kann das Gehirn neue Nervenverbindungen aufbauen.\n\nEntwickelt von: Berta und Karel Bobath (1940er Jahre, London).\n\nEinsatz bei: Schlaganfall, Multiple Sklerose, Parkinson, Schaedel-Hirn-Trauma, Cerebralparese.",
      glossarBegriffe: ["Bobath-Konzept"],
    },
    contentB1: {
      title: "Was ist das Bobath-Konzept?",
      body: "Bobath ist eine Methode fuer Patienten mit Gehirn-Erkrankungen (Schlaganfall, MS, Parkinson).\n\nDas Ziel: Die Muskeln sollen wieder normal arbeiten.\n\nDie wichtigste Regel: Die kranke Seite wird einbezogen! Nicht nur die gesunde Seite benutzen. Warum? Das Gehirn kann neue Verbindungen aufbauen wenn die kranke Seite Reize bekommt.",
    },
  },

  // =============================================================
  // Step 3: ERKLAERUNG -- Bobath-Handling
  // =============================================================
  {
    stepId: "le06-s6-tb11-03",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "beforeafter",
    contentC1: {
      title: "Bobath-Handling im Alltag",
      body: "Ohne Bobath:\n- Nachttisch steht links (gesunde Seite) → Patient schaut nur nach links\n- Besuch sitzt links → keine Reize fuer die rechte Seite\n- Patient greift nur mit links → rechte Seite wird 'vergessen'\n\nMit Bobath:\n- Nachttisch steht RECHTS (betroffene Seite) → Patient dreht Kopf nach rechts\n- Besuch sitzt rechts → Reize fuer die betroffene Seite\n- Patient wird ermutigt auch rechts zu greifen → Gehirn wird stimuliert\n- Pflegekraft spricht von rechts an → Aufmerksamkeit auf betroffene Seite\n\nWarum? Jeder Reiz auf der betroffenen Seite ist ein Signal an das Gehirn: 'Diese Seite gibt es noch!' Das foerdert die Neuroplastizitaet -- die Faehigkeit des Gehirns neue Verbindungen aufzubauen.",
    },
    contentB1: {
      title: "Bobath: Vorher und Nachher",
      body: "Ohne Bobath:\n- Nachttisch links (gesunde Seite)\n- Besuch kommt von links\n- Patient benutzt nur die linke Hand\n\nMit Bobath:\n- Nachttisch RECHTS (kranke Seite)\n- Besuch kommt von rechts\n- Patient versucht auch die rechte Hand zu benutzen\n- Du sprichst den Patienten von rechts an\n\nWarum? Jeder Reiz auf der kranken Seite sagt dem Gehirn: 'Diese Seite gibt es noch!' So kann das Gehirn neue Verbindungen aufbauen.",
    },
  },

  // =============================================================
  // Step 4: CHECKPOINT -- MC Bobath Nachttisch
  // =============================================================
  {
    stepId: "le06-s6-tb11-04",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Bobath in der Praxis",
      body: "Herr Schmidt hat eine Hemiplegie rechts. Sein Nachttisch muss positioniert werden.",
    },
    contentB1: {
      title: "Wo steht der Nachttisch?",
      body: "Herr Schmidt kann die rechte Seite nicht bewegen. Wo stellst du den Nachttisch hin?",
    },
    question: {
      fragetext: "Herr Schmidt hat Hemiplegie rechts. Wo stellst du seinen Nachttisch hin?",
      optionen: [
        {
          text: "Rechts (betroffene Seite)",
          isCorrect: true,
          explanation: "Richtig! Nach dem Bobath-Konzept steht der Nachttisch auf der betroffenen Seite. So muss Herr Schmidt den Kopf nach rechts drehen um Gegenstaende zu erreichen. Das stimuliert die betroffene Seite und foerdert die Neuroplastizitaet.",
          explanationB1: "Richtig! Der Nachttisch steht auf der kranken Seite (rechts). So muss Herr Schmidt nach rechts schauen. Das hilft dem Gehirn.",
        },
        {
          text: "Links (gesunde Seite)",
          isCorrect: false,
          explanation: "Das waere bequemer fuer Herrn Schmidt, aber es widerspricht dem Bobath-Konzept. Wenn alles auf der gesunden Seite steht, bekommt die betroffene Seite keine Reize und das Gehirn 'vergisst' sie.",
          explanationB1: "Nein! Wenn der Nachttisch links steht, schaut Herr Schmidt nie nach rechts. Die kranke Seite bekommt keine Reize.",
        },
        {
          text: "Mittig (am Fussende)",
          isCorrect: false,
          explanation: "Mittig platziert gibt es keinen gezielten Reiz fuer die betroffene Seite. Das Bobath-Konzept fordert: Nachttisch auf die betroffene Seite um die Neuroplastizitaet zu foerdern.",
          explanationB1: "Nein! In der Mitte hilft es nicht. Der Nachttisch muss auf die kranke Seite (rechts).",
        },
        {
          text: "Egal -- der Patient soll selbst entscheiden",
          isCorrect: false,
          explanation: "Patientenautonomie ist wichtig, aber bei Bobath hat die therapeutische Positionierung Prioritaet. Man erklaert dem Patienten WARUM der Nachttisch rechts steht -- die meisten verstehen und akzeptieren es.",
          explanationB1: "Der Patient darf mitentscheiden, aber bei Bobath ist es wichtig: Nachttisch auf die kranke Seite. Erklaere dem Patienten warum.",
        },
      ],
    },
  },

  // =============================================================
  // Step 5: ANDERS ERKLAERT -- Flipcards Bobath-Situationen
  // =============================================================
  {
    stepId: "le06-s6-tb11-05",
    phase: "s6",
    stepType: "flipcard",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "Bobath im Alltag -- 4 Situationen",
      body: "Drehe die Karten um: Vorne die Situation, hinten die richtige Bobath-Handlung.",
    },
    contentB1: {
      title: "Bobath -- Was machst du wann?",
      body: "Drehe die Karten um. Vorne: die Situation. Hinten: Was du tust.",
    },
    question: {
      fragetext: "Lerne die Bobath-Handlungen in verschiedenen Alltagssituationen.",
      flipcard: {
        instruction: "Tippe auf eine Karte um die richtige Handlung zu sehen.",
        cards: [
          {
            front: "Herrn Schmidt ansprechen",
            back: "Von der betroffenen RECHTEN Seite ansprechen. So dreht er den Kopf nach rechts und die betroffene Gehirnhaelfte bekommt Reize.",
            backB1: "Von RECHTS ansprechen. So dreht er den Kopf nach rechts. Gut fuers Gehirn.",
            category: "Kommunikation",
          },
          {
            front: "Essen reichen",
            back: "Von der betroffenen RECHTEN Seite reichen. Herr Schmidt muss nach rechts greifen. Das foerdert die Bewegungsanbahnung der betroffenen Seite.",
            backB1: "Essen von RECHTS geben. So muss er die rechte Seite benutzen.",
            category: "Versorgung",
          },
          {
            front: "Transfer in den Rollstuhl",
            back: "Rollstuhl steht auf der GESUNDEN linken Seite. Der Patient dreht sich zur gesunden Seite hin und stuetzt sich dort ab. Trotzdem: Betroffene Seite aktiv einbeziehen!",
            backB1: "Rollstuhl steht auf der GESUNDEN Seite (links). Der Patient dreht sich nach links. Aber: Rechte Seite trotzdem einbeziehen!",
            category: "Transfer",
          },
          {
            front: "Zimmer einrichten",
            back: "Nachttisch, Klingel, Fernbedienung, Getraenk -- alles auf die betroffene RECHTE Seite. So muss Herr Schmidt staendig Reize auf der betroffenen Seite verarbeiten.",
            backB1: "Nachttisch, Klingel, alles auf die RECHTE Seite stellen. So bekommt die kranke Seite Reize.",
            category: "Umgebung",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: ANWENDUNG -- TrueFalse Bobath (chain)
  // =============================================================
  {
    stepId: "le06-s6-tb11-06",
    phase: "s6",
    stepType: "truefalse",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Bobath -- Richtig oder Falsch?",
      body: "Pruefe dein Wissen: Welche Aussagen ueber das Bobath-Konzept stimmen?",
    },
    contentB1: {
      title: "Bobath -- Stimmt das?",
      body: "Welche Aussagen sind richtig? Welche sind falsch?",
    },
    question: {
      fragetext: "Entscheide: Richtig oder Falsch?",
      trueFalseVariant: "chain",
      trueFalseCards: [
        {
          statement: "Bei Bobath wird die gesunde Seite trainiert",
          isTrue: false,
          explanation: "Falsch! Bobath bezieht die BETROFFENE Seite ein. Die gesunde Seite soll die betroffene nicht kompensieren.",
        },
        {
          statement: "Der Nachttisch steht auf der betroffenen Seite",
          isTrue: true,
          explanation: "Richtig! Alle Reize (Nachttisch, Besuch, Ansprache) kommen von der betroffenen Seite um die Neuroplastizitaet zu foerdern.",
        },
        {
          statement: "Besuch soll von links kommen bei rechter Hemiplegie",
          isTrue: false,
          explanation: "Falsch! Besuch soll von der betroffenen RECHTEN Seite kommen. So muss der Patient nach rechts schauen -- Reiz fuer die betroffene Gehirnhaelfte.",
        },
        {
          statement: "Bobath nutzt die Neuroplastizitaet des Gehirns",
          isTrue: true,
          explanation: "Richtig! Neuroplastizitaet bedeutet: Das Gehirn kann neue Nervenverbindungen aufbauen. Durch Reize auf der betroffenen Seite wird das Gehirn stimuliert.",
        },
      ],
    },
  },

  // =============================================================
  // Step 7: ERKLAERUNG -- Transfer Bett zu Rollstuhl (5 Schritte)
  // =============================================================
  {
    stepId: "le06-s6-tb12-01",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "stepbystep",
    contentC1: {
      title: "Transfer Bett zu Rollstuhl -- 5-Schritt-Verfahren",
      body: "1. Rollstuhl schraeg zum Bett stellen, Bremsen feststellen, Fussstuetzen wegklappen.\n\n2. Patient an die Bettkante setzen. Fuesse flach auf dem Boden.\n\n3. Patient stuetzt sich auf der Bettkante ab oder greift zur starken Seite. Bei Bobath: Betroffene Seite trotzdem einbeziehen!\n\n4. Pflegekraft stabilisiert am BECKEN (NICHT Achselhoehle!). Patient dreht sich zum Rollstuhl.\n\n5. Kontrolliertes Hinsetzen. Fussstuetzen zurueckklappen. Sitz pruefen.\n\nBei hoher Abhaengigkeit: Rutschbrett oder Drehscheibe einsetzen.",
      glossarBegriffe: ["Transfer"],
    },
    contentB1: {
      title: "Vom Bett in den Rollstuhl -- 5 Schritte",
      body: "1. Rollstuhl schraeg ans Bett stellen. Bremsen fest. Fussstuetzen weg.\n\n2. Patient an die Bettkante setzen. Fuesse auf den Boden.\n\n3. Patient stuetzt sich ab. Bei Schlaganfall: Auch die kranke Seite einbeziehen!\n\n4. Du haeltst am BECKEN fest (NICHT unter den Achseln!). Patient dreht sich zum Rollstuhl.\n\n5. Vorsichtig hinsetzen. Fussstuetzen wieder dran. Pruefen ob alles gut sitzt.",
    },
  },

  // =============================================================
  // Step 8: CHECKPOINT -- Anticipation-MC Transfer-Stabilisierung
  // =============================================================
  {
    stepId: "le06-s6-tb12-02",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Wo stabilisierst du beim Transfer?",
      body: "Rate bevor du die Erklaerung siehst: Wo haeltst du den Patienten beim Transfer fest?",
    },
    contentB1: {
      title: "Wo haeltst du fest?",
      body: "Rate: Wo haeltst du den Patienten beim Transfer vom Bett in den Rollstuhl?",
    },
    question: {
      fragetext: "Wo stabilisierst du Herrn Schmidt beim Transfer? Rate bevor du die Erklaerung siehst.",
      mcVariant: "anticipation",
      optionen: [
        {
          text: "Am Becken",
          isCorrect: true,
          explanation: "Richtig! Das Becken ist eine MASSE (Kinaesthetik-Prinzip). Du stabilisierst immer an den Massen, nie in den Zwischenraeumen. Das Becken ist der schwerste Koerperteil und bietet die beste Kontrolle beim Transfer.",
          explanationB1: "Richtig! Am Becken festhalten. Das Becken ist der schwerste Teil. So hast du die beste Kontrolle. Nie in die Achselhoehle greifen!",
        },
        {
          text: "Unter den Achselhoehlen",
          isCorrect: false,
          explanation: "NEIN! Die Achselhoehlen sind ZWISCHENRAEUME. Greifen in Zwischenraeume blockiert die Eigenbewegung des Patienten und kann das Schultergelenk schaedigen. Kinaesthetik-Regel: Massen fassen, Zwischenraeume spielen lassen!",
          explanationB1: "Nein! NICHT in die Achselhoehlen greifen! Das blockiert die Bewegung und kann die Schulter verletzen. Immer am Becken halten.",
        },
        {
          text: "An der Schulter",
          isCorrect: false,
          explanation: "Die Schulter ist zwar eine Masse, aber beim Transfer brauchst du Kontrolle ueber den Schwerpunkt. Das Becken ist der Schwerpunkt des Koerpers und bietet die sicherste Stabilisierung.",
          explanationB1: "Die Schulter ist nicht ideal. Das Becken ist besser: Es ist der Schwerpunkt des Koerpers. Dort hast du die beste Kontrolle.",
        },
        {
          text: "Am Arm",
          isCorrect: false,
          explanation: "Am Arm zu ziehen gibt keine Kontrolle und kann bei Hemiplegie sogar die betroffene Schulter schaedigen (Subluxationsgefahr). Stabilisierung immer am Becken!",
          explanationB1: "Nein! Am Arm ziehen ist gefaehrlich, besonders bei Schlaganfall. Immer am Becken festhalten.",
        },
      ],
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG -- Sequencing Transfer-Schritte
  // =============================================================
  {
    stepId: "le06-s6-tb12-03",
    phase: "s6",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Transfer-Schritte ordnen",
      body: "Bringe die 5 Transfer-Schritte in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Richtige Reihenfolge",
      body: "Ordne die 5 Schritte fuer den Transfer vom Bett in den Rollstuhl.",
    },
    question: {
      fragetext: "Bringe die Transfer-Schritte in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Ziehe die Schritte in die richtige Reihenfolge (von oben nach unten).",
        items: [
          { id: "t1", label: "Rollstuhl positionieren, Bremsen, Fussstuetzen weg" },
          { id: "t2", label: "Patient an die Bettkante setzen, Fuesse auf Boden" },
          { id: "t3", label: "Patient stuetzt sich ab, betroffene Seite einbeziehen" },
          { id: "t4", label: "Stabilisierung am Becken, Patient dreht sich" },
          { id: "t5", label: "Kontrolliert hinsetzen, Fussstuetzen zurueck, Sitz pruefen" },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: PRAXIS_DIALOG -- Transfer-Uebung mit Herrn Schmidt
  // =============================================================
  {
    stepId: "le06-s6-tb12-04",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "Transfer uebt sich -- mit Widerstand",
      body: "Du uebst den Transfer mit Herrn Schmidt. Er will nur die linke Seite benutzen. 'Die rechte Seite geht doch nicht! Warum soll ich es versuchen?'",
      fallbezug: "Herr Schmidt (56, Hemiplegie rechts) ist frustriert und will die betroffene Seite nicht einbeziehen.",
    },
    contentB1: {
      title: "Herr Schmidt will nicht mitmachen",
      body: "Du uebst den Transfer. Herr Schmidt sagt: 'Meine rechte Seite geht nicht. Warum soll ich es versuchen?'",
      fallbezug: "Herr Schmidt ist frustriert. Er will die kranke Seite nicht benutzen.",
    },
    question: {
      fragetext: "Herr Schmidt will die rechte Seite nicht einbeziehen. Was sagst du?",
      patientName: "Herr Schmidt",
      dialogPhases: [
        {
          context: "Herr Schmidt sitzt an der Bettkante. Der Rollstuhl steht bereit. Er greift nur mit der linken Hand und sagt: 'Das geht nur mit links. Vergessen Sie die rechte Seite.'",
          contextB1: "Herr Schmidt sitzt am Bett. Er benutzt nur die linke Hand. Er sagt: 'Rechts geht nicht. Vergessen Sie das.'",
          speaker: "Herr Schmidt",
          options: [
            {
              text: "Ich verstehe Ihre Frustration. Aber wenn wir die rechte Seite nicht einbeziehen, verlernt Ihr Gehirn sie noch mehr. Versuchen wir es zusammen -- ich helfe Ihnen dabei. Jeder kleine Versuch zaehlt!",
              textB1: "Ich verstehe dass Sie frustriert sind. Aber wir muessen die rechte Seite mitbenutzen. Sonst vergisst das Gehirn sie. Ich helfe Ihnen. Jeder Versuch zaehlt!",
              patientResponse: "Na gut... aber wenn es nicht geht, hoeren wir auf, ja?",
              patientResponseB1: "Okay... aber wenn es nicht klappt, hoeren wir auf.",
              score: 3,
              feedback: "Perfekt! Du zeigst Empathie (Sandwich-Prinzip: Loben, Korrigieren, Ermutigen), erklaerst den fachlichen Hintergrund und motivierst zum Versuch. Genau so funktioniert Bobath-Motivation.",
              feedbackB1: "Super! Du bist verstaendnisvoll, erklaerst warum es wichtig ist und ermutigst zum Versuch. Genau richtig!",
            },
            {
              text: "Okay, dann machen wir es nur mit links. Das geht auch.",
              textB1: "Okay, dann nur mit links. Das geht auch.",
              patientResponse: "Danke. So ist es viel einfacher.",
              patientResponseB1: "Danke. So ist es leichter.",
              score: 1,
              feedback: "Das ist zwar respektvoll gegenueber seinem Wunsch, aber widerspricht dem Bobath-Konzept. Wenn die betroffene Seite nicht einbezogen wird, verschlechtert sich die Situation. Erklaere dem Patienten WARUM es wichtig ist.",
              feedbackB1: "Du respektierst seinen Wunsch, aber das ist nicht gut fuer ihn. Bobath sagt: Die kranke Seite muss einbezogen werden. Erklaere warum.",
            },
            {
              text: "Das Bobath-Konzept verlangt dass Sie die rechte Seite einbeziehen. Ohne Diskussion.",
              textB1: "Sie muessen die rechte Seite benutzen. Das ist die Regel.",
              patientResponse: "Ich will aber nicht! Lassen Sie mich in Ruhe!",
              patientResponseB1: "Nein! Lassen Sie mich!",
              score: 1,
              feedback: "Fachlich hast du recht, aber die Kommunikation ist falsch. Zwang fuehrt zu Verweigerung. Motivation funktioniert durch Empathie, Erklaerung und gemeinsames Ausprobieren -- nicht durch Anordnung.",
              feedbackB1: "Du hast recht, aber so geht es nicht. Der Patient braucht Verstaendnis und Motivation, keine Befehle.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 11: ERKLAERUNG -- Hilfsmittel-Uebersicht
  // =============================================================
  {
    stepId: "le06-s6-tb12-05",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346", "Q5"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "glossary",
    contentC1: {
      title: "7 Hilfsmittel fuer Mobilisation und Transfer",
      body: "Gehstock: Bei leichter Gangunsicherheit. Wird KONTRALATERAL eingesetzt (gegenueber der schwachen Seite).\n\nUnterarmgehstuetze: Nach OP bei Teilbelastung. Entlastet das operierte Bein.\n\nRollator: Bei mittlerer Gangunsicherheit. Beide Haende frei, mit Bremsen und Sitzflaeche.\n\nRollstuhl: Bei fehlender Gehfaehigkeit. Selbstantrieb oder Schieberollstuhl.\n\nRutschbrett: Fuer sitzenden Transfer bei Parese (z.B. Querschnitt). Patient rutscht vom Bett in den Rollstuhl.\n\nDrehscheibe: Fuer stehenden Transfer bei eingeschraenkter Drehfaehigkeit. Patient steht auf der Scheibe, wird gedreht.\n\nPatientenlifter: Bei komplettem Bewegungsverlust. Erfordert 2 Pflegekraefte.",
      glossarBegriffe: ["Rollator", "Transfer"],
    },
    contentB1: {
      title: "7 Hilfsmittel zum Bewegen",
      body: "Gehstock: Wenn man etwas unsicher geht. Auf der gesunden Seite halten.\n\nUnterarmgehstuetze: Nach einer OP. Entlastet das operierte Bein.\n\nRollator: Wenn man unsicher geht. Hat Bremsen und einen Sitz.\n\nRollstuhl: Wenn man nicht gehen kann.\n\nRutschbrett: Zum Rutschen vom Bett in den Rollstuhl (im Sitzen).\n\nDrehscheibe: Man steht darauf und wird gedreht. Fuer Patienten die sich schlecht drehen koennen.\n\nPatientenlifter: Fuer Patienten die sich gar nicht bewegen koennen. 2 Pflegekraefte noetig.",
    },
  },

  // =============================================================
  // Step 12: ANWENDUNG -- Categorize Hilfsmittel
  // =============================================================
  {
    stepId: "le06-s6-tb12-06",
    phase: "s6",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346", "Q5"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Hilfsmittel sortieren",
      body: "Sortiere die 7 Hilfsmittel in die richtigen Kategorien.",
    },
    contentB1: {
      title: "Hilfsmittel sortieren",
      body: "Ordne die 7 Hilfsmittel in die richtigen Gruppen.",
    },
    question: {
      fragetext: "Sortiere die Hilfsmittel in 3 Kategorien.",
      categories: [
        { name: "Gehen" },
        { name: "Transfer" },
        { name: "Fortbewegung" },
      ],
      categoryItems: [
        { text: "Gehstock", correctCategory: 0 },
        { text: "Unterarmgehstuetze", correctCategory: 0 },
        { text: "Rollator", correctCategory: 0 },
        { text: "Rutschbrett", correctCategory: 1 },
        { text: "Drehscheibe", correctCategory: 1 },
        { text: "Patientenlifter", correctCategory: 1 },
        { text: "Rollstuhl", correctCategory: 2 },
      ],
    },
  },

  // =============================================================
  // Step 13: ANWENDUNG -- Branching Hilfsmittel-Auswahl
  // =============================================================
  {
    stepId: "le06-s6-tb12-07",
    phase: "s6",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346", "Q5", "Q1 S.346"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Welches Hilfsmittel fuer Frau Becker?",
      body: "Frau Becker wird am Tag 5 entlassen. Ihr Barthel-Index liegt bei 65 (pflegebeduerftig, aber teilweise selbststaendig). Welches Hilfsmittel empfiehlst du fuer zu Hause?",
      fallbezug: "Frau Becker (79 Jahre, Hueft-TEP, Barthel 65) geht unsicher aber kann stehen und kurze Strecken gehen.",
    },
    contentB1: {
      title: "Welches Hilfsmittel fuer Frau Becker?",
      body: "Frau Becker geht nach Hause. Sie kann gehen aber ist unsicher (Barthel-Index 65). Was empfiehlst du?",
      fallbezug: "Frau Becker kann gehen, ist aber unsicher. Sie braucht Hilfe.",
    },
    question: {
      fragetext: "Welches Hilfsmittel empfiehlst du Frau Becker fuer zu Hause?",
      branchingOptions: [
        {
          text: "Rollator -- mittlere Gangunsicherheit, beide Haende frei, Sitzmoeglichkeit fuer Pausen",
          feedback: "Richtig! Bei einem Barthel-Index von 65 und mittlerer Gangunsicherheit nach Hueft-TEP ist der Rollator ideal: Er bietet Stabilitaet, beide Haende sind frei und die Sitzflaeche ermoeglicht Pausen. Frau Becker kann damit selbststaendig im Haus und ausser Haus mobil sein.",
          feedbackB1: "Richtig! Der Rollator ist perfekt: Frau Becker kann sich festhalten, hat beide Haende frei und kann sich auch hinsetzen wenn sie muede ist.",
          isCorrect: true,
        },
        {
          text: "Rollstuhl -- sicherheitshalber, dann kann sie nicht stuerzen",
          feedback: "Ein Rollstuhl waere fuer Frau Becker zu viel. Bei Barthel 65 kann sie gehen -- ein Rollstuhl wuerde ihre Mobilitaet einschraenken statt foerdern. Ziel ist Selbststaendigkeit, nicht Abhaengigkeit. Rollstuhl erst wenn Gehen nicht moeglich ist.",
          feedbackB1: "Nein! Frau Becker kann gehen. Ein Rollstuhl ist zu viel. Sie soll so viel wie moeglich selbst machen. Der Rollator ist besser.",
          isCorrect: false,
        },
        {
          text: "Gehstock -- leicht und handlich fuer zu Hause",
          feedback: "Ein Gehstock reicht nach einer Hueft-TEP oft nicht aus. Frau Becker ist 79 Jahre alt und hat ein erhoehtes Sturzrisiko (TUG 25 Sekunden). Der Rollator bietet mehr Stabilitaet und hat eine Sitzflaeche fuer Pausen.",
          feedbackB1: "Ein Gehstock gibt nicht genug Halt. Frau Becker ist 79 und hat Sturzrisiko. Der Rollator ist sicherer.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 14: ANWENDUNG -- Matching Patient-Profil zu Hilfsmittel
  // =============================================================
  {
    stepId: "le06-s6-tb12-08",
    phase: "s6",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346", "Q5"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Passendes Hilfsmittel zuordnen",
      body: "Ordne jedem Patientenprofil das passende Hilfsmittel zu.",
    },
    contentB1: {
      title: "Welches Hilfsmittel passt?",
      body: "Ordne jedem Patienten das richtige Hilfsmittel zu.",
    },
    question: {
      fragetext: "Ordne den Patientenprofilen das passende Hilfsmittel zu.",
      matchingPairs: [
        { left: "Frau Becker (Barthel 65, Hueft-TEP)", right: "Rollator" },
        { left: "Herr Schmidt (Hemiplegie)", right: "Rollstuhl + Rutschbrett" },
        { left: "Leichte Gangunsicherheit", right: "Gehstock" },
        { left: "Komplett immobil", right: "Patientenlifter" },
        { left: "Teilbelastung nach OP", right: "Unterarmgehstuetze" },
      ],
    },
  },

  // =============================================================
  // Step 15: PFLEGEPLANUNG -- Careplan Herr Schmidt
  // =============================================================
  {
    stepId: "le06-s6-tb12-09",
    phase: "s6",
    stepType: "careplan",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5", "Q1 S.347"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    contentC1: {
      title: "Pflegeplan fuer Herrn Schmidt",
      body: "Erstelle einen Pflegeplan fuer Herrn Schmidts Mobilisation. Gehe den Pflegeprozess Schritt fuer Schritt durch.",
      fallbezug: "Herr Schmidt, 56 Jahre, Hemiplegie rechts, Tag 7 nach Schlaganfall. Barthel-Index 35. Kontrakturgefahr rechte Hand. Sturzrisiko erhoeht.",
    },
    contentB1: {
      title: "Pflegeplan fuer Herrn Schmidt",
      body: "Mache einen Pflegeplan fuer Herrn Schmidt. Schritt fuer Schritt.",
      fallbezug: "Herr Schmidt, 56 Jahre, rechte Seite gelaehmt nach Schlaganfall. Tag 7.",
    },
    question: {
      fragetext: "Erstelle einen Pflegeplan fuer Herrn Schmidts Mobilisation.",
      careplan: {
        patientName: "Herr Schmidt",
        situation: "56 Jahre, Hemiplegie rechts seit 7 Tagen. Barthel-Index 35. Frustration, verweigert teilweise die Mobilisation. Kontrakturgefahr rechte Hand/rechtes Sprunggelenk. Sturzrisiko erhoeht (TUG nicht durchfuehrbar).",
        situationB1: "56 Jahre, rechte Seite gelaehmt seit 7 Tagen. Kann wenig alleine (Barthel 35). Ist frustriert. Sturzgefahr.",
        steps: [
          {
            phase: "problem",
            prompt: "Welches Pflegeproblem hat Herr Schmidt im Bereich Mobilitaet?",
            promptB1: "Was ist das Hauptproblem bei Herrn Schmidt?",
            options: [
              {
                text: "Eingeschraenkte Mobilitaet durch Hemiplegie rechts mit Kontraktur- und Sturzgefahr",
                isCorrect: true,
                explanation: "Richtig! Das Hauptproblem umfasst die Hemiplegie, die Kontrakturgefahr und das Sturzrisiko.",
                explanationB1: "Richtig! Die rechte Seite ist gelaehmt, die Gelenke koennen steif werden und er kann stuerzen.",
              },
              {
                text: "Herr Schmidt ist zu alt fuer Mobilisation",
                isCorrect: false,
                explanation: "Herr Schmidt ist 56 Jahre alt -- Alter ist kein Hinderungsgrund. Das Problem ist die Hemiplegie, nicht das Alter.",
                explanationB1: "Nein! Herr Schmidt ist 56. Das ist nicht alt. Das Problem ist die Laehmung.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt: "Formuliere ein SMART-Pflegeziel fuer Herrn Schmidts Mobilisation.",
            promptB1: "Was ist das Ziel fuer Herrn Schmidt?",
            options: [
              {
                text: "Herr Schmidt fuehrt den Transfer Bett-Rollstuhl mit Hilfe einer Pflegekraft und Drehscheibe innerhalb von 14 Tagen durch",
                isCorrect: true,
                explanation: "SMART: Spezifisch (Transfer), Messbar (mit Hilfe + Drehscheibe), Attraktiv (mehr Selbststaendigkeit), Realistisch (mit Hilfe), Terminiert (14 Tage).",
                explanationB1: "Gut! In 14 Tagen soll Herr Schmidt mit Hilfe vom Bett in den Rollstuhl koennen. Das ist ein gutes Ziel.",
              },
              {
                text: "Herr Schmidt soll wieder gehen koennen",
                isCorrect: false,
                explanation: "Das Ziel ist nicht SMART: nicht spezifisch, nicht messbar, nicht terminiert. In 14 Tagen ist 'wieder gehen' bei Hemiplegie unrealistisch. Ein Transfer mit Hilfe ist realistischer.",
                explanationB1: "Das ist zu allgemein. Besser: In 14 Tagen soll er mit Hilfe in den Rollstuhl koennen.",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt: "Welche Massnahmen planst du?",
            promptB1: "Was machst du damit das Ziel erreicht wird?",
            options: [
              {
                text: "Bobath-Handling (Reize von rechts), taeglich Transferuebung mit Drehscheibe, Kontrakturprophylaxe rechte Hand (3x taeglich), Sturzprophylaxe (Niedrigbett, Sensormatte)",
                isCorrect: true,
                explanation: "Umfassend! Bobath + Transfer + Kontrakturprophylaxe + Sturzprophylaxe. Alle Aspekte sind beruecksichtigt.",
                explanationB1: "Sehr gut! Du denkst an alles: Bobath, Transfer ueben, Hand-Uebungen, Sturzschutz.",
              },
              {
                text: "Taeglich einmal in den Rollstuhl setzen",
                isCorrect: false,
                explanation: "Das ist zu wenig. Neben dem Transfer braucht Herr Schmidt Bobath-Handling, Kontrakturprophylaxe und Sturzprophylaxe. Nur Rollstuhl-Transfer reicht nicht.",
                explanationB1: "Das reicht nicht! Er braucht auch Bobath, Hand-Uebungen und Sturzschutz.",
              },
            ],
          },
          {
            phase: "evaluation",
            prompt: "Wie evaluierst du den Erfolg?",
            promptB1: "Wie pruefst du ob es funktioniert?",
            options: [
              {
                text: "Barthel-Index re-evaluieren nach 14 Tagen, Transferfaehigkeit dokumentieren, Kontrakturstatus (Bewegungsumfang) pruefen",
                isCorrect: true,
                explanation: "Richtig! Barthel-Index als Gesamtmass, Transfer-Dokumentation und Bewegungsumfang-Messung ergeben ein vollstaendiges Bild.",
                explanationB1: "Gut! Nach 14 Tagen pruefst du: Kann er den Transfer? Wie ist der Barthel-Index? Wie bewegt sich die Hand?",
              },
              {
                text: "Herr Schmidt fragen ob er zufrieden ist",
                isCorrect: false,
                explanation: "Patientenzufriedenheit ist wichtig, aber nicht ausreichend. Du brauchst objektive Messwerte: Barthel-Index, Transfer-Faehigkeit, Bewegungsumfang.",
                explanationB1: "Fragen ist gut, aber du brauchst auch Zahlen: Barthel-Index, wie gut klappt der Transfer, wie ist die Hand.",
              },
            ],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 16: INTERLEAVING -- MC LE-05 SMART-Ziel
  // =============================================================
  {
    stepId: "le06-s6-sn-01",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Interleaving LE-05"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Interleaving: SMART-Pflegeziel",
      body: "Du hast in LE 05 die SMART-Formel gelernt. Welches dieser Pflegeziele fuer Herrn Schmidt ist korrekt formuliert?",
    },
    contentB1: {
      title: "Welches Ziel ist richtig formuliert?",
      body: "Ein Pflegeziel muss SMART sein: Genau, messbar, machbar, realistisch und mit Zeitangabe. Welches stimmt?",
    },
    question: {
      fragetext: "Welches SMART-Pflegeziel fuer Herrn Schmidts Mobilisation ist korrekt formuliert?",
      optionen: [
        {
          text: "Herr Schmidt fuehrt den Transfer Bett-Rollstuhl mit Hilfe einer PK und Drehscheibe bis zum 21.04.2026 selbststaendig durch.",
          isCorrect: true,
          explanation: "SMART: Spezifisch (Transfer Bett-Rollstuhl), Messbar (mit Hilfe einer PK + Drehscheibe), Attraktiv (mehr Selbststaendigkeit), Realistisch (mit Hilfe), Terminiert (konkretes Datum).",
          explanationB1: "Richtig! Das Ziel ist genau, messbar, machbar, realistisch und hat ein Datum.",
        },
        {
          text: "Herr Schmidt soll bald besser werden.",
          isCorrect: false,
          explanation: "Nicht SMART: 'bald' ist nicht terminiert, 'besser' ist nicht messbar, es fehlt eine konkrete Massnahme.",
          explanationB1: "'Bald' und 'besser' sind zu ungenau. Man braucht ein Datum und was genau er koennen soll.",
        },
        {
          text: "Herr Schmidt laeuft in 3 Tagen ohne Hilfe.",
          isCorrect: false,
          explanation: "Nicht realistisch! Bei Hemiplegie nach 7 Tagen ist selbststaendiges Gehen in 3 Tagen nicht erreichbar. Ein Transfer mit Hilfe in 14 Tagen waere realistischer.",
          explanationB1: "Unrealistisch! Herr Schmidt kann nach 7 Tagen noch nicht allein gehen. Das Ziel muss erreichbar sein.",
        },
        {
          text: "Mobilitaet foerdern.",
          isCorrect: false,
          explanation: "Das ist kein Ziel, sondern eine allgemeine Absicht. Es fehlt alles: Was genau? Wie gemessen? Bis wann? Womit?",
          explanationB1: "Das ist zu allgemein. Was genau soll er koennen? Wann? Wie misst man es?",
        },
      ],
    },
  },

  // =============================================================
  // Step 17: PATIENTEN_PERSPEKTIVE -- Herr Schmidts Gedanken
  // =============================================================
  {
    stepId: "le06-s6-tb11-07",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    tag: "pflege",
    displayFormat: "diary",
    contentC1: {
      title: "Herr Schmidts Tagebuch",
      body: "'Vor einer Woche war ich noch Lehrer. Ich bin vor die Klasse getreten, habe an die Tafel geschrieben, bin in der Pause zum Kiosk gelaufen. Und jetzt? Jetzt kann ich nicht mal allein auf die Toilette. Mein rechter Arm haengt wie ein Fremdkoerper neben mir. Werde ich jemals wieder vor meiner Klasse stehen? Werde ich jemals wieder Fahrrad fahren? Die Physiotherapeutin sagt: Das Gehirn kann lernen. Aber ich spuere nichts. Gar nichts rechts. Wie soll ich das glauben?'",
      fallbezug: "Herr Schmidt verarbeitet den Schlaganfall emotional. Die Frustration beeinflusst seine Motivation zur Mobilisation.",
    },
    contentB1: {
      title: "Was Herr Schmidt denkt",
      body: "'Vor einer Woche war ich noch Lehrer. Jetzt kann ich nicht allein auf die Toilette. Mein rechter Arm bewegt sich nicht. Werde ich wieder normal leben? Die Physiotherapeutin sagt: Das Gehirn kann lernen. Aber ich spuere nichts auf der rechten Seite. Wie soll ich das glauben?'",
      fallbezug: "Herr Schmidt ist traurig und frustriert nach dem Schlaganfall.",
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG -- Swipe Hilfsmittel/Transfer
  // =============================================================
  {
    stepId: "le06-s6-sn-02",
    phase: "s6",
    stepType: "swipe",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Hilfsmittel und Transfer -- Richtig oder Falsch?",
      body: "Teste dein Wissen ueber Hilfsmittel und Transfer-Techniken.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Richtig oder falsch? Wische!",
    },
    question: {
      fragetext: "Wische: Richtig oder Falsch?",
      swipe: {
        instruction: "Wische nach rechts fuer Richtig, nach links fuer Falsch.",
        cards: [
          {
            statement: "Der Rollstuhl wird IMMER von der betroffenen Seite gestellt",
            statementB1: "Rollstuhl immer auf die kranke Seite stellen",
            isCorrect: false,
            explanation: "Falsch! Der Rollstuhl steht auf der GESUNDEN Seite. Der Patient dreht sich zur gesunden Seite und stuetzt sich dort ab. Aber: Betroffene Seite trotzdem einbeziehen (Bobath).",
            explanationB1: "Falsch! Der Rollstuhl steht auf der gesunden Seite. Der Patient dreht sich dorthin.",
          },
          {
            statement: "Ein Rutschbrett eignet sich fuer sitzenden Transfer bei Parese",
            statementB1: "Ein Rutschbrett ist gut wenn der Patient nicht stehen kann",
            isCorrect: true,
            explanation: "Richtig! Das Rutschbrett ermoeglicht einen sitzenden Transfer -- ideal bei Querschnitt oder schwerer Parese wenn Stehen nicht moeglich ist.",
            explanationB1: "Richtig! Mit dem Rutschbrett kann man im Sitzen vom Bett in den Rollstuhl rutschen.",
          },
          {
            statement: "Der Gehstock wird auf der kranken Seite gehalten",
            statementB1: "Den Gehstock auf die kranke Seite nehmen",
            isCorrect: false,
            explanation: "Falsch! Der Gehstock wird KONTRALATERAL eingesetzt -- auf der GESUNDEN Seite. So entlastet er die schwache Seite beim Gehen.",
            explanationB1: "Falsch! Den Gehstock auf die GESUNDE Seite nehmen. So wird die schwache Seite entlastet.",
          },
          {
            statement: "Ein Patientenlifter braucht 2 Pflegekraefte",
            statementB1: "Fuer den Patientenlifter braucht man 2 Pflegekraefte",
            isCorrect: true,
            explanation: "Richtig! Der Patientenlifter erfordert 2 Pflegekraefte fuer die sichere Bedienung -- einer bedient den Lifter, einer sichert den Patienten.",
            explanationB1: "Richtig! 2 Pflegekraefte: Einer bedient den Lifter, einer passt auf den Patienten auf.",
          },
          {
            statement: "Die Drehscheibe ist fuer liegenden Transfer geeignet",
            statementB1: "Die Drehscheibe benutzt man im Liegen",
            isCorrect: false,
            explanation: "Falsch! Die Drehscheibe ist fuer den STEHENDEN Transfer. Der Patient steht auf der Scheibe und wird zum Rollstuhl gedreht. Im Liegen nutzt man ein Rutschbrett oder Gleittuch.",
            explanationB1: "Falsch! Die Drehscheibe ist fuer das Stehen. Der Patient steht drauf und wird gedreht. Im Liegen braucht man andere Hilfsmittel.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 19: ANWENDUNG -- Wordorder Bobath-Fachsatz
  // =============================================================
  {
    stepId: "le06-s6-sn-03",
    phase: "s6",
    stepType: "wordorder",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Bobath-Konzept -- Fachsatz bilden",
      body: "Bringe die Satzbausteine in die richtige Reihenfolge um einen korrekten Fachsatz ueber das Bobath-Konzept zu bilden.",
    },
    contentB1: {
      title: "Satz ordnen",
      body: "Ordne die Woerter zu einem richtigen Satz.",
    },
    question: {
      fragetext: "Ordne die Satzbausteine zu einem korrekten Fachsatz.",
      wordorder: {
        instruction: "Ziehe die Bausteine in die richtige Reihenfolge.",
        words: [
          "Das Bobath-Konzept",
          "bezieht die betroffene Seite",
          "gezielt ein,",
          "um durch Stimulation",
          "die Neuroplastizitaet",
          "des Gehirns zu foerdern.",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        hint: "Beginne mit dem Subjekt und ende mit dem Ziel.",
      },
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG -- Freetext Transfer-Beschreibung
  // =============================================================
  {
    stepId: "le06-s6-tb12-10",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.346-347", "Q5", "Q1 S.347"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Transfer beschreiben",
      body: "Beschreibe den Transfer von Herrn Schmidt vom Bett in den Rollstuhl. Beachte dabei sowohl die Bobath-Prinzipien als auch die korrekte Transfer-Technik.",
    },
    contentB1: {
      title: "Transfer beschreiben",
      body: "Beschreibe: Wie hilfst du Herrn Schmidt vom Bett in den Rollstuhl? Denke an Bobath und die 5 Schritte.",
    },
    question: {
      fragetext: "Beschreibe den Transfer von Herrn Schmidt vom Bett in den Rollstuhl. Beachte: Bobath-Prinzipien UND Transfer-Technik.",
      musterantwort: "Zuerst stelle ich den Rollstuhl schraeg auf die GESUNDE linke Seite von Herrn Schmidt, stelle die Bremsen fest und klappe die Fussstuetzen weg. Dann erklaere ich Herrn Schmidt was wir vorhaben (Kommunikation vor Aktivitaet). Ich helfe ihm an die Bettkante. Obwohl der Rollstuhl links steht, beziehe ich die betroffene rechte Seite ein (Bobath): Herr Schmidt soll versuchen sich auch rechts abzustuetzen. Ich stabilisiere am Becken (NICHT Achselhoehle). Er dreht sich zum Rollstuhl und setzt sich kontrolliert hin. Ich klappe die Fussstuetzen zurueck und pruefe den Sitz. Waehrend des gesamten Transfers spreche ich Schritt fuer Schritt an und ermutige ihn.",
      bewertungskriterien: [
        "Rollstuhl auf der gesunden Seite positioniert",
        "Kommunikation vor und waehrend des Transfers",
        "Stabilisierung am Becken (nicht Achselhoehle)",
        "Bobath: Betroffene Seite wird einbezogen",
        "5 Transfer-Schritte in richtiger Reihenfolge",
      ],
      satzanfaengeB1: [
        "Zuerst stelle ich den Rollstuhl ...",
        "Dann erklaere ich Herrn Schmidt ...",
        "Ich halte ihn am ... fest (nicht an der ...!)",
        "Nach Bobath beziehe ich die ... Seite ein.",
        "Am Ende pruefe ich ...",
      ],
    },
  },

  // =============================================================
  // Step 21: REFLEXION -- Angst beim Transfer
  // =============================================================
  {
    stepId: "le06-s6-bk-01",
    phase: "s6",
    stepType: "reflection",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q1 S.347"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Angst begegnen",
      body: "Herr Schmidt hat Angst vor dem Transfer. Er sagt: 'Ich falle bestimmt.' Wie gehst du mit seiner Angst um?",
    },
    contentB1: {
      title: "Wenn der Patient Angst hat",
      body: "Herr Schmidt hat Angst. Er sagt: 'Ich falle bestimmt.' Was sagst du ihm?",
    },
    question: {
      fragetext: "Herr Schmidt hat Angst vor dem Transfer. Er sagt: 'Ich falle bestimmt.' Wie gehst du mit seiner Angst um? Was sagst du ihm?",
      reflection: {
        prompt: "Herr Schmidt hat Angst vor dem Transfer. Er sagt: 'Ich falle bestimmt.' Wie gehst du mit seiner Angst um? Was sagst du ihm?",
        placeholder: "Ich wuerde Herrn Schmidt sagen ...",
        systemPrompt: "Bewerte die Reflexion nach folgenden Kriterien: 1) Nimmt die Angst ernst (validiert Gefuehle), 2) Erklaert die Sicherheitsmassnahmen, 3) Motiviert ohne zu bagatellisieren, 4) Bietet Kontrolle an (z.B. 'Wir hoeren auf wenn Sie es sagen'), 5) Sandwich-Prinzip: Loben, Korrigieren, Ermutigen. Gib konstruktives Feedback auf Deutsch.",
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION -- Summary S6
  // =============================================================
  {
    stepId: "le06-s6-bk-02",
    phase: "s6",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.347", "Q5", "Q1 S.346-347"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-transfer",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "/audio/le06-s6-zusammenfassung.mp3",
    audioLabel: "Zusammenfassung anhoeren",
    contentC1: {
      title: "Zusammenfassung Session 6",
      body: "Heute hast du das Bobath-Konzept kennengelernt: Betroffene Seite einbeziehen statt kompensieren. Du kannst den 5-Schritt-Transfer durchfuehren und weisst welches Hilfsmittel wann zum Einsatz kommt.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Heute ging es um Bobath (kranke Seite einbeziehen) und den Transfer vom Bett in den Rollstuhl. Du kennst jetzt auch 7 Hilfsmittel.",
    },
    question: {
      fragetext: "Was nimmst du aus dieser Session mit?",
      summary: {
        reflexionRueckbezug: "In der naechsten Session lernst du die weichen Faktoren: Kommunikation bei Mobilisation, Schlaf als Ressource und Dokumentation (Mobilitaetsplan, Sturzprotokoll, Positionierungsprotokoll).",
        kernaussagen: [
          "Bobath-Konzept: Betroffene Seite einbeziehen, nicht kompensieren (Neuroplastizitaet nutzen)",
          "Bobath-Handling: Nachttisch, Besuch, Ansprache -- alles von der betroffenen Seite",
          "Transfer 5-Schritt: Rollstuhl positionieren, Bettkante, Abstuetzen, Becken stabilisieren, Hinsetzen",
          "NICHT in die Achselhoehle greifen! Immer am Becken stabilisieren",
          "7 Hilfsmittel: Gehstock, Unterarmgehstuetze, Rollator, Rollstuhl, Rutschbrett, Drehscheibe, Lifter",
          "Hilfsmittel-Auswahl abhaengig von: Barthel-Index, Belastungsvorgabe, Gleichgewicht, kognitivem Status",
          "Pflegeplanung: Problem, Ziel (SMART), Massnahme, Evaluation",
        ],
      },
    },
  },
];
