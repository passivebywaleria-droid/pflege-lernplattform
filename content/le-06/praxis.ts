// LE-06 Praxis-Tab: Simulationen und Übungen — 7 Übungen
// Quelle: praxis-plan.md | Dozentin Phase 2 | 2026-04-15
// CE02, KB II.1, Mobilität, Drittel 1, Bloom B2–B3

import type { PraxisUebung, ContentStep } from "../_types";

// === ÜBUNG 1: Kinästhetisches Drehen im Bett ===

const PRAX01_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax01-dialog-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["[Transfer] (Kommunikation)", "Vgl. I Care Pflege S. 345"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Patientin informieren und Angst nehmen",
      body: `Frau Siebert sagt: „Drehen Sie mich bitte nicht, das tut weh." Was sagst du?`,
    },
    contentB1: {
      title: "Frau Siebert hat Angst vor dem Drehen",
      body: `Frau Siebert sagt: „Drehen Sie mich nicht. Das tut weh." Was sagst du?`,
    },
    question: {
      fragetext: `Frau Siebert sagt: „Drehen Sie mich bitte nicht, das tut weh." Was sagst du?`,
      patientName: "Frau Siebert",
      dialogPhases: [
        {
          context:
            "Frau Siebert liegt in Rückenlage. Du möchtest sie zur Dekubitusprophylaxe auf die Seite drehen.",
          contextB1:
            "Frau Siebert liegt auf dem Rücken. Du willst sie auf die Seite drehen.",
          options: [
            {
              text: `„Frau Siebert, ich verstehe, dass Sie Angst vor den Schmerzen haben. Wir machen das ganz langsam — ich zeige Ihnen vorher jeden Schritt. Und wenn es zu viel wird, stoppen wir sofort."`,
              patientResponse:
                `„Na gut... aber ganz langsam, ja? Und Sie sagen mir vorher, was kommt."`,
              score: 3,
              feedback:
                "Gute Wahl! Schmerzangst ernst nehmen, konkretes Vorgehen ankündigen und Kontrolle geben (Stopp-Signal) — das sind die drei Säulen bei Mobilisationsangst.",
              textB1:
                `„Frau Siebert, ich verstehe. Wir machen ganz langsam. Wenn es weh tut, stoppen wir."`,
              patientResponseB1:
                `„Okay... aber langsam. Und sagen Sie mir, was kommt."`,
              feedbackB1:
                "Sehr gut! Angst ernst nehmen. Langsam machen. Stopp-Signal geben.",
            },
            {
              text: `„Frau Siebert, ich muss Sie drehen, das gehört zur Pflege."`,
              patientResponse:
                "Frau Siebert verkrampft sich und hält sich an der Bettkante fest.",
              score: 1,
              feedback:
                "Keine Empathie. Frau Siebert fühlt sich nicht gehört. Zeige Verständnis für ihre Angst, bevor du erklärst warum gedreht werden muss.",
              textB1:
                `„Ich muss Sie drehen."`,
              patientResponseB1:
                "Frau Siebert hält sich am Bett fest und sagt nichts.",
              feedbackB1:
                "Nicht gut. Frau Siebert fühlt sich nicht verstanden.",
            },
            {
              text: `„Wir können auch warten, bis die Physiotherapie kommt."`,
              patientResponse:
                `„Ja, warten wir. Die kommen bestimmt bald."`,
              score: 1,
              feedback:
                "Unnötige Verzögerung. Jede Stunde ohne Positionswechsel erhöht das Dekubitusrisiko. Das Drehen ist DEINE Aufgabe als Pflegende.",
              textB1:
                `„Wir warten auf die Physiotherapie."`,
              patientResponseB1:
                `„Ja, warten wir."`,
              feedbackB1:
                "Nicht gut. Warten erhöht das Risiko für Druckstellen. Drehen ist deine Aufgabe.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le06-prax01-seq-02",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 344–345",
      "(Kinästhetik, Hatch/Maietta)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Spiralige Drehung durchführen",
      body: "Bringe die Schritte der kinästhetischen Drehung in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Drehen: Was kommt zuerst?",
      body: "Bringe die Schritte der Drehung in die richtige Reihenfolge.",
    },
    question: {
      fragetext:
        "Bringe die Schritte der kinästhetischen Drehung in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte der kinästhetischen Drehung.",
        items: [
          {
            id: "seq-1",
            label:
              "Oberes Bein aufstellen lassen (oder unterstützen)",
          },
          {
            id: "seq-2",
            label:
              "Arm der Drehrichtung über den Körper legen lassen",
          },
          {
            id: "seq-3",
            label:
              "Mit einer Hand an der Schulter (Masse), mit der anderen am Becken (Masse) unterstützen",
          },
          {
            id: "seq-4",
            label:
              "Über die Schulter-Becken-Verbindung sanft die spiralige Drehung einleiten",
          },
          {
            id: "seq-5",
            label:
              "Patientin rollt auf die Seite — NICHT an den Achselhöhlen (Zwischenräumen!) ziehen",
          },
          {
            id: "seq-6",
            label:
              "Position mit Kissen stabilisieren (Rücken, zwischen den Knien)",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax01-mc-03",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 344", "(Kinästhetik)"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Häufiger Fehler beim Drehen",
      body: "Welcher der folgenden Fehler ist beim kinästhetischen Drehen besonders schädlich?",
    },
    contentB1: {
      title: "Was ist ein schlimmer Fehler beim Drehen?",
      body: "Welcher Fehler ist beim Drehen besonders gefährlich?",
    },
    question: {
      fragetext:
        "Welcher Fehler ist beim kinästhetischen Drehen besonders schädlich?",
      optionen: [
        {
          text: "Man fasst die Patientin an den Achselhöhlen (Zwischenräumen) und zieht sie herum.",
          isCorrect: true,
          explanation:
            "Genau! Die Achselhöhlen sind Zwischenräume — dort greift man NICHT. Zwischenräume sind beweglich und empfindlich. Wer dort zieht, verursacht Schmerzen, blockiert die natürliche Bewegung und riskiert Verletzungen. Stattdessen: An Schulter und Becken (Massen) unterstützen.",
          explanationB1:
            "Richtig! Die Achselhöhlen sind empfindlich. Da darf man nicht ziehen. Stattdessen: An Schulter und Becken anfassen.",
        },
        {
          text: "Man lässt die Patientin das obere Bein aufstellen.",
          isCorrect: false,
          explanation:
            "Das ist kein Fehler, sondern ein korrekter Schritt! Das aufgestellte Bein erleichtert die spiralige Drehung.",
          explanationB1:
            "Das ist kein Fehler. Das Bein aufstellen ist richtig.",
        },
        {
          text: "Man stabilisiert die Seitenlage mit Kissen.",
          isCorrect: false,
          explanation:
            "Kissen zur Stabilisierung sind korrekt und wichtig, damit die Patientin nicht zurückrollt.",
          explanationB1:
            "Kissen sind richtig. Die Patientin braucht Halt in der Seitenlage.",
        },
        {
          text: "Man erklärt der Patientin vorher, was man tun wird.",
          isCorrect: false,
          explanation:
            "Das ist kein Fehler, sondern Pflicht! Information und Einverständnis vor jeder Maßnahme.",
          explanationB1:
            "Das ist kein Fehler. Man muss immer vorher erklären, was kommt.",
        },
      ],
    },
  },
  {
    stepId: "le06-prax01-ft-04",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 400",
      "(§ 4 PflBG; DNQP-Expertenstandards)",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-dokumentation",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Dokumentation: Positionierungsprotokoll",
      body: "Dokumentiere die Seitenlagerung von Frau Siebert. Was schreibst du in das Positionierungsprotokoll?",
    },
    contentB1: {
      title: "Positionierung aufschreiben",
      body: "Du hast Frau Siebert auf die Seite gedreht. Was schreibst du auf?",
    },
    question: {
      fragetext:
        "Dokumentiere die Seitenlagerung im Positionierungsprotokoll.",
      musterantwort:
        "Datum und Uhrzeit, Ausgangsposition (Rückenlage), Zielposition (30°-Seitenlage links), Hautbeobachtung vor dem Drehen (Kreuzbein, Fersen — Fingertest-Ergebnis), Hilfsmittel (Kissen), Reaktion der Patientin (Schmerzen? Angst? Toleriert?), nächster geplanter Positionswechsel (Zeitpunkt).",
      bewertungskriterien: [
        "Datum und Uhrzeit dokumentiert",
        "Ausgangs- und Zielposition benannt",
        "Hautinspektion VOR dem Drehen dokumentiert",
        "Reaktion der Patientin dokumentiert",
        "Nächster Positionswechsel geplant",
      ],
    },
  },
];

// === ÜBUNG 2: Transfer Bett → Rollstuhl nach Bobath ===

const PRAX02_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax02-mc-01",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347, 357", "(Bobath-Konzept)"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Rollstuhl-Position nach Bobath",
      body: "Auf welche Seite des Bettes stellst du den Rollstuhl für Herrn Demirs Transfer?",
    },
    contentB1: {
      title: "Wo steht der Rollstuhl?",
      body: "Auf welche Seite stellst du den Rollstuhl?",
    },
    question: {
      fragetext:
        "Auf welche Seite des Bettes stellst du den Rollstuhl für Herrn Demirs Transfer?",
      optionen: [
        {
          text: "Auf die linke (gesunde) Seite, damit er sich besser abstützen kann.",
          isCorrect: false,
          explanation:
            "Beim Bobath-Konzept geht es darum, die betroffene Seite einzubeziehen — nicht zu umgehen. Rollstuhl auf der gesunden Seite wäre kontraproduktiv.",
          explanationB1:
            "Nein. Beim Bobath geht alles über die kranke Seite. Rollstuhl rechts.",
        },
        {
          text: "Auf die rechte (betroffene) Seite, weil das Bobath-Konzept die betroffene Seite einbezieht.",
          isCorrect: true,
          explanation:
            "Genau! Beim Bobath-Konzept geht der Transfer IMMER über die betroffene Seite. Herr Demir muss sich aktiv über rechts bewegen — das stimuliert die betroffene Gehirnhälfte.",
          explanationB1:
            "Richtig! Beim Bobath steht der Rollstuhl immer auf der kranken Seite. Herr Demir bewegt sich über rechts.",
        },
        {
          text: "Es ist egal, Hauptsache der Rollstuhl steht fest.",
          isCorrect: false,
          explanation:
            "Die Seite ist beim Bobath-Konzept entscheidend! Der Rollstuhl steht immer auf der betroffenen Seite — das ist Teil der Therapie.",
          explanationB1:
            "Nein, die Seite ist sehr wichtig! Beim Bobath muss der Rollstuhl rechts stehen.",
        },
        {
          text: "Auf die Seite, die dem Fenster am nächsten ist, damit er Licht hat.",
          isCorrect: false,
          explanation:
            "Die Position richtet sich nach dem Bobath-Konzept, nicht nach dem Lichteinfall. Betroffene Seite = rechts.",
          explanationB1:
            "Nein. Es geht nicht ums Licht. Es geht ums Bobath-Konzept. Rollstuhl rechts.",
        },
      ],
    },
  },
  {
    stepId: "le06-prax02-seq-02",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347, 357", "(Bobath-Konzept)"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Transfer-Ablauf nach Bobath",
      body: "Bringe die Schritte des Bobath-Transfers in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Transfer: Reihenfolge",
      body: "Bringe die Schritte des Transfers in die richtige Reihenfolge.",
    },
    question: {
      fragetext:
        "Bringe die Schritte des Bobath-Transfers in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte des Bobath-Transfers.",
        items: [
          {
            id: "seq-1",
            label:
              "Rollstuhl auf die betroffene (rechte) Seite stellen, Bremsen feststellen",
          },
          {
            id: "seq-2",
            label: "Fußstützen hochklappen",
          },
          {
            id: "seq-3",
            label:
              "Herrn Demir an die Bettkante setzen (Beine seitlich herunterhängen lassen)",
          },
          {
            id: "seq-4",
            label:
              "Kreislauf kontrollieren (Schwindel? Übelkeit?)",
          },
          {
            id: "seq-5",
            label:
              "Betroffenen rechten Arm sicher positionieren (nicht herunterhängen lassen)",
          },
          {
            id: "seq-6",
            label:
              "Herrn Demir aufstehen lassen — Gewicht über die betroffene Seite verlagern",
          },
          {
            id: "seq-7",
            label:
              "Langsam zum Rollstuhl drehen und setzen lassen",
          },
          {
            id: "seq-8",
            label:
              "Sicheren Sitz prüfen, Fußstützen zurückklappen, Bremsen prüfen",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax02-dialog-03",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "[Transfer] (Angehörigenanleitung)",
      "Vgl. I Care Pflege S. 347",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Elif anleiten: Transfer unterstützen",
      body: `Elif fragt: „Kann ich meinem Mann beim Aufstehen helfen? Ich fasse ihn dann links an, oder?" Wie reagierst du?`,
    },
    contentB1: {
      title: "Elif will helfen",
      body: `Elif fragt: „Ich helfe links, oder?" Was sagst du?`,
    },
    question: {
      fragetext: `Elif fragt: „Kann ich meinem Mann beim Aufstehen helfen? Ich fasse ihn dann links an, oder?" Wie reagierst du?`,
      patientName: "Elif (Ehefrau)",
      dialogPhases: [
        {
          context:
            "Elif steht neben dem Bett. Sie will helfen, geht instinktiv zur linken (gesunden) Seite.",
          contextB1:
            "Elif steht links am Bett. Sie will helfen.",
          options: [
            {
              text: `„Frau Demir, ich zeige Ihnen gerne, wie Sie helfen können. Wichtig ist: Stellen Sie sich auf die rechte Seite — also die betroffene. Nicht links. Ich weiß, das fühlt sich erstmal falsch an, aber es hilft seinem Gehirn, die rechte Seite wieder besser wahrzunehmen."`,
              patientResponse:
                `„Die rechte Seite? Aber die ist doch die schwache! ... Okay, wenn das hilft. Zeigen Sie mir, wie."`,
              score: 3,
              feedback:
                "Perfekt! Du erklärst Elif das Bobath-Prinzip in einfacher Sprache und beziehst sie aktiv ein. Angehörige, die das Konzept verstehen, verdoppeln die Therapiezeit.",
              textB1:
                `„Stellen Sie sich rechts hin. Die rechte Seite ist wichtig. Das hilft seinem Gehirn."`,
              patientResponseB1:
                `„Die rechte Seite? Okay, zeigen Sie mir wie."`,
              feedbackB1:
                "Sehr gut! Elif versteht jetzt, warum rechts. Sie kann auch abends helfen.",
            },
            {
              text: `„Bitte helfen Sie nicht, das machen nur wir Pflegekräfte."`,
              patientResponse:
                `Elif tritt zurück und verschränkt die Arme. „Ich bin hier den ganzen Tag und darf nichts tun?"`,
              score: 1,
              feedback:
                "Das schließt Angehörige aus. Elif ist jeden Tag da und kann eine enorme Unterstützung sein — wenn sie richtig angeleitet wird.",
              textB1:
                `„Das machen nur wir."`,
              patientResponseB1:
                `Elif ist enttäuscht. „Ich darf gar nicht helfen?"`,
              feedbackB1:
                "Nicht gut. Elif will helfen. Beziehe sie ein!",
            },
            {
              text: `„Ja, fassen Sie ihn links an, das ist die starke Seite."`,
              patientResponse:
                "Elif fasst links an. Herr Demir bewegt sich komplett über die gesunde Seite.",
              score: 1,
              feedback:
                "Das widerspricht dem Bobath-Konzept! Von links helfen bedeutet: Die betroffene Seite wird komplett umgangen. Das untergräbt die gesamte Therapie.",
              textB1:
                `„Ja, links ist die starke Seite."`,
              patientResponseB1:
                "Elif hilft links. Herr Demir benutzt die rechte Seite gar nicht.",
              feedbackB1:
                "Falsch! Das Bobath-Konzept sagt: rechts (die kranke Seite). Nicht links.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le06-prax02-cat-04",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347", "(Bobath-Konzept)"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Bobath: Korrekt oder Fehler?",
      body: `Ordne die folgenden Handlungen zu: „Korrekt nach Bobath" oder „Fehler nach Bobath".`,
    },
    contentB1: {
      title: "Bobath: Richtig oder falsch?",
      body: "Was ist richtig nach Bobath? Was ist ein Fehler?",
    },
    question: {
      fragetext:
        `Ordne die Handlungen zu: „Korrekt" oder „Fehler".`,
      categories: [{ name: "Korrekt" }, { name: "Fehler" }],
      categoryItems: [
        {
          text: "Rollstuhl auf die betroffene rechte Seite stellen",
          correctCategory: 0,
        },
        {
          text: "Nachttisch auf die gesunde linke Seite stellen",
          correctCategory: 1,
        },
        {
          text: "Patient von der betroffenen Seite ansprechen",
          correctCategory: 0,
        },
        {
          text: "Essen von der gesunden Seite anreichen",
          correctCategory: 1,
        },
        {
          text: "Betroffenen Arm beim Transfer sicher positionieren",
          correctCategory: 0,
        },
        {
          text: "Beim Anziehen zuerst den gesunden Arm einfädeln",
          correctCategory: 1,
        },
      ],
    },
  },
];

// === ÜBUNG 3: Infant Handling — Aufnehmen und Ablegen ===

const PRAX03_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax03-seq-01",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 348",
      "(Kinästhetik Infant Handling)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Baby Nisa aufnehmen",
      body: "Bringe die Schritte des kinästhetischen Aufnehmens von Baby Nisa in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Nisa hochnehmen: Reihenfolge",
      body: "Bringe die Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext:
        "Bringe die Schritte des kinästhetischen Aufnehmens in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte des Aufnehmens von Baby Nisa.",
        items: [
          {
            id: "seq-1",
            label: "Nisa ansprechen und Blickkontakt aufnehmen",
          },
          {
            id: "seq-2",
            label:
              "Hände sanft auf Nisas Körper legen (Kontakt herstellen)",
          },
          {
            id: "seq-3",
            label:
              "Nisa vorsichtig auf die Seite drehen (spiralige Bewegung einleiten)",
          },
          {
            id: "seq-4",
            label:
              "Eine Hand unter Kopf/Nacken, eine unter den Rumpf schieben",
          },
          {
            id: "seq-5",
            label:
              "Über die Seitenlage hochnehmen — NICHT parallel aus der Rückenlage",
          },
          {
            id: "seq-6",
            label: "Nah am eigenen Körper halten",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax03-seq-02",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 348",
      "(Kinästhetik Infant Handling)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Baby Nisa ablegen",
      body: "Jetzt legst du Nisa zurück ins Bettchen. Bringe die Schritte in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Nisa zurücklegen: Reihenfolge",
      body: "Du legst Nisa zurück. Was kommt zuerst?",
    },
    question: {
      fragetext:
        "Bringe die Schritte des Ablegens in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte des Ablegens von Baby Nisa.",
        items: [
          {
            id: "seq-1",
            label: "Nisa nah am Körper halten, zum Bettchen gehen",
          },
          {
            id: "seq-2",
            label: "Langsam nach unten beugen",
          },
          {
            id: "seq-3",
            label:
              "Nisas Füße berühren ZUERST die Unterlage (Kontakt geben)",
          },
          {
            id: "seq-4",
            label:
              "Über die Seitenlage ablegen (nicht flach auf den Rücken fallen lassen)",
          },
          {
            id: "seq-5",
            label: "Sanft in Rückenlage drehen",
          },
          {
            id: "seq-6",
            label:
              "Hände langsam und ruhig entfernen (nicht ruckartig wegziehen)",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax03-dialog-03",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["[Transfer] (Elternanleitung)"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Vater Kemal anleiten",
      body: `Kemal steht neben dir und sagt: „Das sieht so kompliziert aus. Das kann ich nie." Wie reagierst du?`,
    },
    contentB1: {
      title: "Kemal ermutigen",
      body: `Kemal sagt: „Das kann ich nie." Was sagst du?`,
    },
    question: {
      fragetext: `Kemal sagt: „Das sieht so kompliziert aus. Das kann ich nie." Wie reagierst du?`,
      patientName: "Kemal (Vater)",
      dialogPhases: [
        {
          context:
            "Kemal hat dir zugeschaut. Er will es selbst versuchen, traut sich aber nicht.",
          contextB1:
            "Kemal hat zugeschaut. Er traut sich nicht.",
          options: [
            {
              text: `„Herr Demir, das ist einfacher als es aussieht. Wir machen das Schritt für Schritt. Erst legen Sie nur Ihre Hände auf Nisa. Dann drehen wir sie zusammen. Ich führe Ihre Hände dabei."`,
              patientResponse:
                `Kemal legt vorsichtig die Hände auf Nisa. „Okay... und jetzt?"`,
              score: 3,
              feedback:
                "Du hast Kemal ermutigt, ohne seine Angst zu bagatellisieren. Schrittweises Anleiten nimmt den Druck. Nach 2–3 gemeinsamen Versuchen traut sich der Vater fast immer.",
              textB1:
                `„Schritt für Schritt. Erst die Hände auf Nisa. Dann drehen wir zusammen."`,
              patientResponseB1:
                `Kemal legt die Hände auf Nisa. „Okay... weiter?"`,
              feedbackB1:
                "Sehr gut! Kemal macht mit. Schritt für Schritt geht es.",
            },
            {
              text: `„Das ist wirklich nicht schwer, schauen Sie einfach zu und machen es dann nach."`,
              patientResponse:
                `Kemal verschränkt die Arme. „Ich bin kein Pfleger."`,
              score: 1,
              feedback:
                `Keine Anleitung, zu viel Druck. „Einfach nachmachen" funktioniert nicht bei jemandem, der Angst hat.`,
              textB1:
                `„Das ist nicht schwer. Machen Sie es einfach nach."`,
              patientResponseB1:
                "Kemal verschränkt die Arme.",
              feedbackB1:
                "Nicht gut. Zu viel Druck. Kemal braucht Anleitung.",
            },
            {
              text: `„Dann macht es Ihre Frau, sie hat schon zugeschaut."`,
              patientResponse:
                "Kemal dreht sich weg. Yasemin seufzt.",
              score: 1,
              feedback:
                "Das schließt den Vater aus. Väter werden im Pflegealltag oft übersehen — aktiv einbeziehen macht einen riesigen Unterschied für die Vater-Kind-Bindung.",
              textB1:
                `„Dann macht es Ihre Frau."`,
              patientResponseB1:
                "Kemal dreht sich weg.",
              feedbackB1:
                "Schlecht. Der Vater fühlt sich ausgeschlossen.",
            },
          ],
        },
      ],
    },
  },
];

// === ÜBUNG 4: 30°-Seitenlage mit Hautinspektion ===

const PRAX04_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax04-hotspot-01",
    phase: "s1",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 396", "(NPUAP/EPUAP 2014)"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 17,
    contentC1: {
      title: "Prädilektionsstellen identifizieren",
      body: "Markiere auf dem Körperbild die Stellen, an denen du bei Frau Siebert (Rückenlage) die Haut inspizieren musst.",
    },
    contentB1: {
      title: "Wo sind die Druckstellen?",
      body: "Markiere die Stellen, wo du bei Frau Siebert die Haut prüfen musst.",
    },
    question: {
      fragetext:
        "Markiere die Prädilektionsstellen in Rückenlage.",
      hotspot: {
        imageUrl: "/images/content/le-06/praedilektionsstellen.svg",
        imageAlt:
          "Körperumriss in Rückenlage mit markierbaren Stellen",
        instruction:
          "Tippe auf die Stellen, an denen du die Haut inspizieren musst.",
        zones: [
          { id: "z1", x: 50, y: 5, radius: 8, label: "Hinterkopf" },
          {
            id: "z2",
            x: 35,
            y: 25,
            radius: 8,
            label: "Schulterblatt links",
          },
          {
            id: "z3",
            x: 65,
            y: 25,
            radius: 8,
            label: "Schulterblatt rechts",
          },
          { id: "z4", x: 50, y: 55, radius: 8, label: "Kreuzbein" },
          {
            id: "z5",
            x: 30,
            y: 95,
            radius: 8,
            label: "Ferse links",
          },
          {
            id: "z6",
            x: 70,
            y: 95,
            radius: 8,
            label: "Ferse rechts",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax04-mc-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 399", "(NPUAP/EPUAP 2014)"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Fingertest interpretieren",
      body: "Du inspizierst das Kreuzbein von Frau Siebert und siehst eine gerötete Stelle (ca. 3 cm Durchmesser). Du drückst mit dem Finger darauf und die Rötung verschwindet kurz, kehrt aber sofort zurück. Was bedeutet das?",
    },
    contentB1: {
      title: "Fingertest: Was bedeutet die Rötung?",
      body: "Frau Siebert hat eine rote Stelle am Kreuzbein. Du drückst drauf — die Rötung verschwindet kurz. Was heißt das?",
    },
    question: {
      fragetext:
        "Die Rötung verschwindet bei Fingerdruck kurz und kehrt zurück. Was bedeutet das?",
      optionen: [
        {
          text: "Dekubitus Kategorie I — nicht wegdrückbare Rötung → sofort Maßnahmen einleiten.",
          isCorrect: false,
          explanation:
            "Bei Kategorie I verschwindet die Rötung unter Fingerdruck NICHT. Hier verschwindet sie kurz — das ist NOCH kein Dekubitus, aber ein Warnsignal.",
          explanationB1:
            "Nein. Bei Kategorie I bleibt die Rötung beim Drücken. Hier verschwindet sie kurz — noch kein Dekubitus.",
        },
        {
          text: "Wegdrückbare Rötung — noch kein Dekubitus, aber Warnsignal. Druckentlastung und engmaschige Kontrolle.",
          isCorrect: true,
          explanation:
            "Genau! Wenn die Rötung unter Fingerdruck kurz verschwindet, ist die Durchblutung noch intakt. Das ist NOCH kein Dekubitus — aber ein deutliches Warnsignal. Sofortige Druckentlastung und engmaschigere Kontrolle.",
          explanationB1:
            "Richtig! Die Rötung verschwindet kurz = die Durchblutung ist noch da. Aber Achtung! Druckentlastung sofort und öfter kontrollieren.",
        },
        {
          text: "Normale Hautreaktion, kein Handlungsbedarf.",
          isCorrect: false,
          explanation:
            "Eine anhaltende Rötung ist NICHT normal. Sie zeigt, dass bereits eine Druckbelastung stattgefunden hat. Handlungsbedarf besteht definitiv.",
          explanationB1:
            "Nein! Eine rote Stelle ist nicht normal. Du musst handeln: Druckentlastung und kontrollieren.",
        },
        {
          text: "Dekubitus Kategorie II — eine Blase wird sich bald bilden.",
          isCorrect: false,
          explanation:
            "Kategorie II zeigt sich durch eine Blase oder einen teilweisen Hautverlust. Hier ist die Haut noch intakt — es ist eine wegdrückbare Rötung.",
          explanationB1:
            "Nein. Kategorie II hat eine Blase oder offene Haut. Hier ist die Haut noch ganz.",
        },
      ],
    },
  },
  {
    stepId: "le06-prax04-seq-03",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 399–400",
      "(DNQP Expertenstandard Dekubitusprophylaxe, 2017)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-positionierung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "30°-Seitenlage herstellen",
      body: "Bringe die Schritte für die Herstellung der 30°-Seitenlage in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "30°-Seitenlage: Reihenfolge",
      body: "Bringe die Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext:
        "Bringe die Schritte für die 30°-Seitenlage in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte der 30°-Seitenlage.",
        items: [
          {
            id: "seq-1",
            label:
              "Frau Siebert informieren und Einverständnis einholen",
          },
          {
            id: "seq-2",
            label:
              "Hautinspektion durchführen (Kreuzbein, Fersen) und Fingertest bei Rötung",
          },
          {
            id: "seq-3",
            label:
              "Kissen längs zusammenrollen oder Lagerungskeil bereitstellen",
          },
          {
            id: "seq-4",
            label:
              "Frau Siebert leicht zur Seite drehen (spiralig, kinästhetisch)",
          },
          {
            id: "seq-5",
            label:
              "Kissen/Keil unter den Rücken schieben — Winkel ca. 30° (NICHT 90°!)",
          },
          {
            id: "seq-6",
            label:
              "Kissen zwischen die Knie legen (Druckentlastung Trochanter/Knieinnenseiten)",
          },
          {
            id: "seq-7",
            label:
              "Fersen freilagern (auf kleines Kissen stellen, sodass Fersen frei schweben)",
          },
          {
            id: "seq-8",
            label:
              "Bequemlichkeit erfragen und Position optimieren",
          },
        ],
      },
    },
  },
];

// === ÜBUNG 5: MTS anziehen ===

const PRAX05_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax05-tf-01",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 416",
      "(AWMF S3-Leitlinie VTE-Prophylaxe, 2015)",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "MTS: Vor dem Anziehen prüfen",
      body: "Welche Aussagen zum Anziehen von MTS sind richtig, welche falsch?",
    },
    contentB1: {
      title: "MTS: Was prüfen?",
      body: "Was muss man vor dem Anziehen der Strümpfe prüfen? Richtig oder falsch?",
    },
    question: {
      fragetext:
        "Entscheide: richtig oder falsch?",
      trueFalseCards: [
        {
          statement:
            "MTS werden morgens angezogen, bevor die Patientin aufsteht.",
          isTrue: true,
          explanation:
            "Richtig! Im Stehen staut sich Blut in den Beinen. Deshalb: MTS anziehen VOR dem Aufstehen.",
        },
        {
          statement:
            "Vor dem Anziehen dürfen die Beine eingecremt werden, damit der Strumpf besser rutscht.",
          isTrue: false,
          explanation:
            "Falsch! Creme lässt den Strumpf verrutschen und die Kompression stimmt nicht mehr. Beine müssen trocken sein.",
        },
        {
          statement:
            "Bei offenen Wunden an den Beinen dürfen keine MTS angezogen werden.",
          isTrue: true,
          explanation:
            "Richtig! Offene Wunden sind eine Kontraindikation. Die Kompression könnte die Wundheilung stören.",
        },
        {
          statement:
            "Die Größe der MTS muss individuell gemessen werden (Fessel, Wade, Beinlänge).",
          isTrue: true,
          explanation:
            "Richtig! Zu enge Strümpfe schnüren ein (Druckstellen!), zu weite Strümpfe komprimieren nicht ausreichend.",
        },
      ],
    },
  },
  {
    stepId: "le06-prax05-seq-02",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 416"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "MTS anziehen: Reihenfolge",
      body: "Bringe die Schritte des MTS-Anziehens in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Strümpfe anziehen: Reihenfolge",
      body: "Bringe die Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext:
        "Bringe die Schritte des MTS-Anziehens in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte des MTS-Anziehens.",
        items: [
          {
            id: "seq-1",
            label:
              "Strumpf auf links drehen (wenden) bis zur Ferse",
          },
          {
            id: "seq-2",
            label:
              "Über den Fuß ziehen — Zehenbereich bleibt frei (Zehenöffnung)",
          },
          {
            id: "seq-3",
            label:
              "Ferse genau in die Fersentasche des Strumpfs positionieren",
          },
          {
            id: "seq-4",
            label:
              "Strumpf gleichmäßig nach oben ziehen — Stück für Stück, keine großen Züge",
          },
          {
            id: "seq-5",
            label:
              "Falten glattstreichen (Falten = Einschnürung = Druckstelle!)",
          },
          {
            id: "seq-6",
            label:
              "Sitz kontrollieren: keine Einschnürungen, Oberkante liegt flach an, rollt nicht um",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax05-mc-03",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 412, 416",
      "(AWMF S3-Leitlinie VTE-Prophylaxe)",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 11,
    contentC1: {
      title: "Kontraindikation erkennen",
      body: "Du inspizierst die Beine und siehst, dass das rechte Bein deutlich dicker ist als das linke, gerötet und überwärmt. Was tust du?",
    },
    contentB1: {
      title: "Warnsignal: Dickes Bein",
      body: "Ein Bein ist viel dicker, rot und warm. Was tust du?",
    },
    question: {
      fragetext:
        "Das rechte Bein ist deutlich dicker, gerötet und überwärmt. Was tust du?",
      optionen: [
        {
          text: "MTS anziehen — die Schwellung ist nach der OP normal.",
          isCorrect: false,
          explanation:
            "EINSEITIGE Schwellung mit Rötung und Überwärmung ist NICHT normal. Das ist ein klassischer Hinweis auf eine tiefe Beinvenenthrombose. MTS sind hier kontraindiziert!",
          explanationB1:
            "Nein! Ein Bein dick, rot und warm = Verdacht auf Thrombose. Keine Strümpfe anziehen!",
        },
        {
          text: "MTS NICHT anziehen und sofort den Arzt informieren — Verdacht auf akute tiefe Beinvenenthrombose.",
          isCorrect: true,
          explanation:
            "Genau! Ein einseitig geschwollenes, gerötetes und überwärmtes Bein ist ein klassischer Hinweis auf eine akute tiefe Beinvenenthrombose. MTS sind hier KONTRAINDIZIERT — die Kompression könnte den Thrombus lösen und eine lebensbedrohliche Lungenembolie auslösen.",
          explanationB1:
            "Richtig! Verdacht auf Thrombose. Keine Strümpfe! Sofort den Arzt rufen!",
        },
        {
          text: "Nur am linken Bein MTS anziehen und das rechte Bein hochlagern.",
          isCorrect: false,
          explanation:
            "Bei Verdacht auf Thrombose: SOFORT Arzt informieren. Nicht selbst behandeln. Hochlagerung ist keine ausreichende Maßnahme.",
          explanationB1:
            "Nein. Bei Verdacht auf Thrombose: Arzt rufen. Nicht selbst behandeln.",
        },
        {
          text: "Abwarten und in 2 Stunden nochmal schauen.",
          isCorrect: false,
          explanation:
            "Abwarten bei Thrombose-Verdacht ist gefährlich! Ein losgelöster Thrombus kann eine Lungenembolie verursachen. SOFORT handeln.",
          explanationB1:
            "Nein! Nicht warten! Das ist gefährlich! Sofort den Arzt rufen.",
        },
      ],
    },
  },
];

// === ÜBUNG 6: Sturzprotokoll erstellen ===

const PRAX06_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax06-seq-01",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 440",
      "(DNQP Expertenstandard Sturzprophylaxe, 2013)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-sturz",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Sofortmaßnahmen nach dem Sturz",
      body: "Du kommst zum Zimmer und findest Frau Siebert auf dem Boden sitzend, weinend. Bringe die Sofortmaßnahmen in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Frau Siebert ist gestürzt: Was zuerst?",
      body: "Frau Siebert sitzt auf dem Boden und weint. Was machst du zuerst?",
    },
    question: {
      fragetext:
        "Bringe die Sofortmaßnahmen nach dem Sturz in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Sofortmaßnahmen nach dem Sturz.",
        items: [
          {
            id: "seq-1",
            label:
              `Frau Siebert beruhigen: „Ich bin da. Wir schauen jetzt gemeinsam, ob alles in Ordnung ist."`,
          },
          {
            id: "seq-2",
            label:
              "Verletzungen ausschließen: Schmerzen? Beweglich? Blutung? Prellmarken?",
          },
          {
            id: "seq-3",
            label:
              "Vitalzeichen kontrollieren (Blutdruck, Puls)",
          },
          {
            id: "seq-4",
            label:
              "Frau Siebert sicher vom Boden aufhelfen (oder Hilfe holen wenn Verletzung vermutet)",
          },
          {
            id: "seq-5",
            label: "Arzt informieren",
          },
          {
            id: "seq-6",
            label: "Sturzprotokoll ausfüllen",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax06-cloze-02",
    phase: "s1",
    stepType: "cloze",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 440", "(DNQP Sturzprophylaxe)"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-dokumentation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Sturzprotokoll ausfüllen",
      body: "Fülle das Sturzprotokoll aus. Ergänze die fehlenden Informationen.",
    },
    contentB1: {
      title: "Sturzprotokoll: Lücken füllen",
      body: "Fülle die Lücken im Sturzprotokoll aus.",
    },
    question: {
      fragetext: "Fülle das Sturzprotokoll aus.",
      cloze: {
        textWithBlanks:
          "Sturzprotokoll — Patientin: Frau Siebert, 81 J. Uhrzeit: [1]. Ort: [2]. Umstände: Patientin wollte allein zur Toilette gehen, [3] nicht benutzt. Sturzhergang: Beim Aufstehen aus dem Bett [4] verloren, auf den Boden gesunken. Zeugen: [5]. Verletzungen bei Erstinspektion: [6]. Folgemaßnahmen: Arzt informiert, erneute Sturzrisikoeinschätzung geplant.",
        blanks: [
          {
            id: 1,
            correct: "07:15 Uhr",
            distractors: ["12:00 Uhr", "23:30 Uhr", "06:00 Uhr"],
          },
          {
            id: 2,
            correct: "Patientenzimmer, Weg zur Toilette",
            distractors: ["Stationsflur", "Aufenthaltsraum", "Badezimmer"],
          },
          {
            id: 3,
            correct: "Klingel",
            distractors: ["Rollstuhl", "Gehstütze", "Nachtschwester"],
          },
          {
            id: 4,
            correct: "Gleichgewicht",
            distractors: ["Bewusstsein", "Orientierung", "Sehkraft"],
          },
          {
            id: 5,
            correct: "Keine (Patientin war allein)",
            distractors: [
              "Zimmernachbarin",
              "Nachtschwester",
              "Pflegeschülerin",
            ],
          },
          {
            id: 6,
            correct: "Keine sichtbaren Verletzungen",
            distractors: [
              "Hämatom am Oberschenkel",
              "Platzwunde am Kopf",
              "Fraktur des Handgelenks",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le06-prax06-ft-03",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 437–440",
      "(DNQP Sturzprophylaxe, 2013)",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-sturz",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Folgemaßnahmen planen",
      body: "Welche Maßnahmen leitest du nach dem Sturz von Frau Siebert ein, um einen weiteren Sturz zu verhindern? Nenne mindestens 5 konkrete Maßnahmen.",
    },
    contentB1: {
      title: "Nächsten Sturz verhindern",
      body: "Was tust du, damit Frau Siebert nicht wieder stürzt? Nenne mindestens 5 Maßnahmen.",
    },
    question: {
      fragetext:
        "Nenne mindestens 5 konkrete Maßnahmen, um einen weiteren Sturz zu verhindern.",
      musterantwort:
        "Klingel in Reichweite (direkter Zugriff), Nachtlicht überprüfen, Begleitung bei Toilettengängen anbieten, erneute Sturzrisikoeinschätzung, Schuhwerk prüfen (feste Schuhe statt Socken), Hindernisse im Zimmer entfernen, Mobilisationstraining mit Physiotherapie intensivieren. Kein Bettgitter (freiheitsentziehend, nur mit richterlicher Genehmigung).",
      bewertungskriterien: [
        "Mindestens 5 konkrete Maßnahmen",
        "Klingel in Reichweite erwähnt",
        "Umgebungssicherheit adressiert",
        "Keine Fixierung als Lösung vorgeschlagen",
        "Fachlich korrekt",
      ],
    },
  },
];

// === ÜBUNG 7: Pflegebericht schreiben ===

const PRAX07_STEPS: ContentStep[] = [
  {
    stepId: "le06-prax07-ft-01",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 400", "(§ 4 PflBG)"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-dokumentation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegebericht: Erstmobilisation Herr Demir",
      body: "Schreibe einen Pflegebericht über die Erstmobilisation von Herrn Demir. Dokumentiere: Ausgangssituation, durchgeführte Maßnahmen, Reaktion, Vitalzeichen, Dauer, Befinden, weiterer Plan.",
    },
    contentB1: {
      title: "Pflegebericht schreiben",
      body: "Schreibe auf, was bei der Erstmobilisation passiert ist. Was hast du gemacht? Wie hat Herr Demir reagiert? Was ist der Plan für morgen?",
    },
    question: {
      fragetext:
        "Schreibe einen Pflegebericht über die Erstmobilisation von Herrn Demir.",
      musterantwort:
        "Enthält: Ausgangssituation (6. Tag nach Schlaganfall, rechtsseitige Hemiparese, Barthel-Index 25), Maßnahme (Erstmobilisation an Bettkante nach Bobath, betroffene Seite einbezogen), Reaktion (anfänglich Schwindel, nach 2 Min. stabilisiert), Vitalzeichen (RR, Puls vor/nach), Dauer (5 Minuten), Befinden (stabil, leicht erschöpft, motiviert), Ehefrau informiert und in Handling eingewiesen, weiterer Plan (morgen erneut, ggf. Sitzzeit verlängern).",
      bewertungskriterien: [
        "Ausgangssituation dokumentiert",
        "Maßnahme nach Bobath-Konzept beschrieben",
        "Reaktion vor und nach der Mobilisation",
        "Vitalzeichen dokumentiert",
        "Angehörigeneinbindung erwähnt",
        "Weiterer Plan formuliert",
      ],
    },
  },
  {
    stepId: "le06-prax07-cat-02",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 400", "(§ 4 PflBG)"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-dokumentation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Dokumentationsfehler erkennen",
      body: `Ordne die folgenden Formulierungen zu: „Fachsprachlich korrekt" oder „Fehler in der Dokumentation".`,
    },
    contentB1: {
      title: "Korrekt oder Fehler?",
      body: "Welche Formulierungen sind richtig? Welche sind Fehler?",
    },
    question: {
      fragetext:
        `Ordne die Formulierungen zu: „Korrekt" oder „Fehler".`,
      categories: [{ name: "Korrekt" }, { name: "Fehler" }],
      categoryItems: [
        {
          text: `„Patient an Bettkante mobilisiert nach Bobath-Konzept"`,
          correctCategory: 0,
        },
        {
          text: `„Patient ging es gut"`,
          correctCategory: 1,
        },
        {
          text: `„RR 130/80 mmHg, Puls 88/min nach 5 Minuten an Bettkante"`,
          correctCategory: 0,
        },
        {
          text: `„Patient war komisch drauf"`,
          correctCategory: 1,
        },
        {
          text: `„Ehefrau in Bobath-Handling eingewiesen, demonstrierte Transfer-Unterstützung"`,
          correctCategory: 0,
        },
        {
          text: `„Alles ok, morgen weiter"`,
          correctCategory: 1,
        },
      ],
    },
  },
  {
    stepId: "le06-prax07-mc-03",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["(§ 4 PflBG)"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-dokumentation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Dokumentation als vorbehaltene Tätigkeit",
      body: "Warum ist die Dokumentation von Mobilisationsmaßnahmen laut PflBG eine vorbehaltene Tätigkeit?",
    },
    contentB1: {
      title: "Warum ist Dokumentation so wichtig?",
      body: "Warum dürfen nur Pflegefachkräfte die Dokumentation verantworten?",
    },
    question: {
      fragetext:
        "Warum ist die Dokumentation von Mobilisationsmaßnahmen eine vorbehaltene Tätigkeit?",
      optionen: [
        {
          text: "Weil sie nur von Pflegefachkräften durchgeführt werden darf und der Nachweis fachgerechter Pflege ist.",
          isCorrect: true,
          explanation:
            "Genau! Laut § 4 PflBG gehören Erhebung des Pflegebedarfs, Planung, Organisation, Durchführung und DOKUMENTATION der Pflege zu den vorbehaltenen Tätigkeiten. Die Dokumentation ist nicht nur Pflicht — sie ist dein Nachweis fachgerechter Pflege.",
          explanationB1:
            "Richtig! § 4 PflBG sagt: Dokumentation ist eine Aufgabe für Pflegefachkräfte. Sie beweist, dass du richtig gepflegt hast.",
        },
        {
          text: "Weil der Arzt sie angeordnet hat.",
          isCorrect: false,
          explanation:
            "Die Dokumentation ist eine pflegerische Aufgabe — nicht ärztlich angeordnet. Sie gehört laut § 4 PflBG zu den vorbehaltenen Tätigkeiten.",
          explanationB1:
            "Nein. Dokumentation ist eine Pflegeaufgabe, nicht eine Arztanordnung.",
        },
        {
          text: "Weil die Krankenkasse sie für die Abrechnung braucht.",
          isCorrect: false,
          explanation:
            "Abrechnung ist ein Nebeneffekt, aber nicht der Grund. Der Hauptgrund ist die Sicherstellung fachgerechter Pflege und die rechtliche Absicherung.",
          explanationB1:
            "Nein. Es geht nicht ums Geld. Es geht darum, dass gute Pflege dokumentiert wird.",
        },
        {
          text: "Weil sie Teil der Qualitätskontrolle des Krankenhauses ist.",
          isCorrect: false,
          explanation:
            "Qualitätssicherung ist eine Funktion der Dokumentation, aber der Grund für den Vorbehalt ist § 4 PflBG: Nur Pflegefachkräfte dürfen den Pflegeprozess verantworten.",
          explanationB1:
            "Teilweise richtig, aber der Hauptgrund ist: § 4 PflBG sagt, nur Pflegefachkräfte dürfen das.",
        },
      ],
    },
  },
];

// === EXPORT ===

export const LE06_PRAXIS: PraxisUebung[] = [
  {
    uebungId: "le06-prax01",
    typ: "prozedur",
    titel: "Kinästhetisches Drehen im Bett",
    titelB1: "Patientin auf die Seite drehen",
    beschreibungC1:
      "Führe eine kinästhetische Drehung bei Frau Siebert (81 J., Z.n. Hüft-TEP) durch. Beachte das Massen-Zwischenraum-Prinzip und kommuniziere einfühlsam mit einer ängstlichen Patientin. Dokumentiere die Lagerung im Positionierungsprotokoll.",
    beschreibungB1:
      "Du drehst Frau Siebert auf die Seite. Sie hat Angst vor Schmerzen. Du erklärst ihr, was du machst. Danach schreibst du auf, was du gemacht hast.",
    bloomLevel: 3,
    steps: PRAX01_STEPS,
  },
  {
    uebungId: "le06-prax02",
    typ: "prozedur",
    titel: "Transfer Bett → Rollstuhl nach Bobath",
    titelB1: "Vom Bett in den Rollstuhl (Bobath)",
    beschreibungC1:
      "Plane und führe einen Bobath-gerechten Transfer bei Herrn Demir (64 J., rechtsseitige Hemiparese) durch. Beziehe die betroffene Seite konsequent ein und leite die Ehefrau Elif an.",
    beschreibungB1:
      "Du hilfst Herrn Demir in den Rollstuhl. Alles über die rechte (kranke) Seite. Du zeigst seiner Frau Elif, wie sie helfen kann.",
    bloomLevel: 3,
    steps: PRAX02_STEPS,
  },
  {
    uebungId: "le06-prax03",
    typ: "prozedur",
    titel: "Infant Handling — Aufnehmen und Ablegen",
    titelB1: "Baby Nisa aufnehmen und hinlegen",
    beschreibungC1:
      "Demonstriere das kinästhetische Aufnehmen und Ablegen bei Baby Nisa (4 Monate, Frühgeborenes, hypotoner Muskeltonus). Leite Vater Kemal schrittweise an.",
    beschreibungB1:
      "Du zeigst, wie man Baby Nisa richtig hochnimmt und hinlegt. Dann hilfst du Papa Kemal, es selbst zu versuchen.",
    bloomLevel: 3,
    steps: PRAX03_STEPS,
  },
  {
    uebungId: "le06-prax04",
    typ: "prozedur",
    titel: "30°-Seitenlage mit Hautinspektion",
    titelB1: "30°-Seitenlage und Haut prüfen",
    beschreibungC1:
      "Führe einen Positionswechsel bei Frau Siebert in die 30°-Seitenlage durch. Inspiziere vorher die Haut an den Prädilektionsstellen und interpretiere den Fingertest.",
    beschreibungB1:
      "Du drehst Frau Siebert in die 30°-Seitenlage. Vorher prüfst du die Haut auf rote Stellen.",
    bloomLevel: 3,
    steps: PRAX04_STEPS,
  },
  {
    uebungId: "le06-prax05",
    typ: "prozedur",
    titel: "MTS anziehen (Thromboseprophylaxe-Strümpfe)",
    titelB1: "Thrombosestrümpfe anziehen",
    beschreibungC1:
      "Lege Frau Siebert medizinische Thromboseprophylaxe-Strümpfe (MTS) an. Prüfe vorher Kontraindikationen und die richtige Größe. Erkenne eine potenzielle Thrombose-Situation.",
    beschreibungB1:
      "Du ziehst Frau Siebert spezielle Strümpfe an, die Thrombose verhindern. Vorher prüfst du die Beine. Erkenne Warnsignale.",
    bloomLevel: 3,
    steps: PRAX05_STEPS,
  },
  {
    uebungId: "le06-prax06",
    typ: "prozedur",
    titel: "Sturzprotokoll erstellen",
    titelB1: "Sturz dokumentieren",
    beschreibungC1:
      "Frau Siebert ist gestürzt. Ergreife die Sofortmaßnahmen, fülle das Sturzprotokoll aus und plane Folgemaßnahmen zur Sturzvermeidung.",
    beschreibungB1:
      "Frau Siebert ist gefallen. Du hilfst ihr, schreibst ein Sturzprotokoll und planst, wie der nächste Sturz verhindert wird.",
    bloomLevel: 3,
    steps: PRAX06_STEPS,
  },
  {
    uebungId: "le06-prax07",
    typ: "pflegeplan",
    titel: "Pflegebericht schreiben — Mobilisation dokumentieren",
    titelB1: "Pflegebericht schreiben",
    beschreibungC1:
      "Dokumentiere die Erstmobilisation von Herrn Demir fachsprachlich korrekt im Pflegebericht. Erkenne typische Dokumentationsfehler und verstehe die rechtliche Bedeutung der Dokumentation.",
    beschreibungB1:
      "Du schreibst einen Pflegebericht über die erste Mobilisation von Herrn Demir. Du lernst, was gute Dokumentation ist.",
    bloomLevel: 3,
    steps: PRAX07_STEPS,
  },
];
