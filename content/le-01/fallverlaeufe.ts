// LE-01 Fall-Tab: Patientenverlauf-Daten — 3 Fälle
// Quelle: fall-plan.md | Dozentin Phase 2 | 2026-04-12
// CE01+CE03, KB V.1, Persönlichkeitsprinzip, Drittel 1, Bloom B1–B3

import type { Fallverlauf, ContentStep } from "../_types";

// === FALL 1: Lina M. — 16 Jahre (Kind/Jugendliche) ===

const LINA_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le01-fall01-st01-01",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-reflexion",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Linas erster Tag",
      body: `Lina M. (16) erzählt: "Mein erster Tag war so überwältigend. Die Gerüche, die Geräusche — und dann dieser verwirrte Mann, der geschrien hat. Ich bin einfach rausgegangen." Erinnere dich an deinen eigenen Ausbildungsstart (oder stelle dir ihn vor). Was hat dich überrascht oder verunsichert?`,
    },
    contentB1: {
      title: "Linas erster Tag",
      body: "Lina ist 16 Jahre alt. Ihr erster Tag auf der Station war schwer. Es gab viele Geräusche und Gerüche. Ein Mann hat laut geschrien. Lina hatte Angst und ist weggegangen. Wie war dein erster Tag? Was hat dich überrascht?",
    },
    question: {
      fragetext: "Erinnere dich an deinen eigenen Ausbildungsstart. Was hat dich überrascht oder verunsichert?",
      reflection: {
        prompt: "Beschreibe deine Gedanken und Gefühle zum Ausbildungsstart. Was hat dich überrascht?",
        placeholder: "Schreibe über deine ersten Eindrücke...",
        systemPrompt:
          "Bestätige die Gefühle des Schülers empathisch (Sandwich: Lob → Impuls → Ermutigung). Zeige Parallelen zu Linas Erfahrung. Weise darauf hin, dass Unsicherheit am Anfang normal und ein Zeichen von Verantwortungsbewusstsein ist.",
      },
    },
  },
  {
    stepId: "le01-fall01-st01-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 37"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-praxisanleitung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Praxisanleitung: Mindestqualifikation",
      body: "Linas Praxisanleiterin Frau Weber hat eine berufspädagogische Zusatzqualifikation. Was ist die Mindestdauer dieser Zusatzqualifikation laut PflBG?",
    },
    contentB1: {
      title: "Wie lange lernt eine Praxisanleiterin?",
      body: "Frau Weber leitet Lina an. Sie hat extra eine Fortbildung gemacht. Wie lange muss diese Fortbildung mindestens dauern?",
    },
    question: {
      fragetext: "Was ist die Mindestdauer der berufspädagogischen Zusatzqualifikation für Praxisanleiter*innen laut PflBG?",
      optionen: [
        {
          text: "100 Stunden",
          isCorrect: false,
          explanation:
            "Das wäre zu wenig. Die Praxisanleitung ist eine anspruchsvolle Aufgabe, die fundierte pädagogische Kenntnisse erfordert. Gut, dass du nachdenkst — die richtige Antwort ist 300 Stunden.",
          explanationB1:
            "100 Stunden reichen nicht. Praxisanleiterin ist eine wichtige Aufgabe. Man braucht mindestens 300 Stunden Fortbildung.",
        },
        {
          text: "300 Stunden",
          isCorrect: true,
          explanation:
            "Genau! Praxisanleiter*innen müssen mindestens 300 Stunden berufspädagogische Zusatzqualifikation nachweisen. Das zeigt, wie wichtig gute Anleitung in der Pflegeausbildung ist.",
          explanationB1:
            "Richtig! 300 Stunden — das ist die richtige Antwort. Gute Anleitung ist sehr wichtig.",
        },
        {
          text: "500 Stunden",
          isCorrect: false,
          explanation:
            "Das ist mehr als gefordert. 300 Stunden ist die Mindestanforderung. Dein Gedanke zeigt aber, dass du die Bedeutung der Praxisanleitung erkannt hast.",
          explanationB1:
            "500 Stunden ist zu viel. Die richtige Antwort ist 300 Stunden. Aber gut gedacht!",
        },
        {
          text: "Es gibt keine Mindestdauer",
          isCorrect: false,
          explanation:
            "Doch! Das PflBG regelt die Mindestqualifikation sehr genau. Praxisanleitung ist zu wichtig, um sie dem Zufall zu überlassen. Die Antwort ist 300 Stunden.",
          explanationB1:
            "Doch, es gibt eine Mindestdauer. Das PflBG sagt: mindestens 300 Stunden. Das ist das Gesetz.",
        },
      ],
    },
  },
  {
    stepId: "le01-fall01-st01-03",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80–84"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Linas Notizheft: Fachbegriffe zuordnen",
      body: "Lina hat sich neue Fachbegriffe notiert, versteht aber noch nicht alle. Ordne die Begriffe den richtigen Beschreibungen zu.",
    },
    contentB1: {
      title: "Fachbegriffe verstehen",
      body: "Lina schreibt sich neue Wörter auf. Weißt du, was diese Wörter bedeuten? Ordne sie zu.",
    },
    question: {
      fragetext: "Ordne die Fachbegriffe den richtigen Beschreibungen zu.",
      matchingPairs: [
        { left: "Pflegeanamnese", right: "Strukturierte Datenerhebung bei Aufnahme eines Pflegeempfängers" },
        { left: "Pflegeproblem", right: "Beeinträchtigung, die den Pflegeempfänger in der Selbstpflege einschränkt" },
        { left: "Ressource", right: "Fähigkeit oder Einflussfaktor, der bei der Problembewältigung hilft" },
        { left: "Evaluation", right: "Beurteilung der Wirkung von Pflegemaßnahmen" },
        { left: "Pflegeziel", right: "Soll-Zustand, den der Pflegeempfänger erreichen soll" },
      ],
    },
  },
  {
    stepId: "le01-fall01-st01-04",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 47–48"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-kompetenzen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Kompetenz-Dimensionen auf Station",
      body: "Lina beobachtet auf Station verschiedene Situationen. Ordne die Beispiele der richtigen Kompetenz-Dimension zu.",
    },
    contentB1: {
      title: "Welche Art von Kompetenz ist das?",
      body: "Lina sieht viel auf der Station. Es gibt verschiedene Arten von Kompetenz. Ordne die Situationen zu.",
    },
    question: {
      fragetext: "Ordne die Situationen der richtigen Kompetenz-Dimension zu.",
      categories: [
        { name: "Fachkompetenz" },
        { name: "Sozialkompetenz" },
        { name: "Personale Kompetenz" },
      ],
      categoryItems: [
        { text: "Lina kann die 6 Schritte des Pflegeprozesses benennen", correctCategory: 0 },
        { text: "Lina arbeitet gut mit ihrer Mentorin zusammen", correctCategory: 1 },
        { text: "Lina reflektiert abends ihren Tag im Tagebuch", correctCategory: 2 },
        { text: "Lina wendet Fachsprache korrekt an", correctCategory: 0 },
        { text: "Lina zeigt Einfühlungsvermögen gegenüber ängstlichen Patienten", correctCategory: 1 },
        { text: "Lina erkennt eigene Grenzen und bittet um Hilfe", correctCategory: 2 },
      ],
    },
  },
  {
    stepId: "le01-fall01-st01-05",
    phase: "s1",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-selbstreflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 6,
    contentC1: {
      title: "Wie sicher bist du?",
      body: `Lina sagt: "Manchmal denke ich, alle anderen verstehen das sofort und nur ich nicht." — Schätze dich selbst ein: Wie sicher fühlst du dich in den folgenden Bereichen?`,
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Lina denkt: Alle anderen verstehen mehr als ich. Aber stimmt das? Schätze dich selbst ein — von 1 (sehr unsicher) bis 5 (sehr sicher).",
    },
    question: {
      fragetext: "Schätze dich selbst ein (1 = sehr unsicher, 5 = sehr sicher):",
      sortItems: [
        "Fachsprache verstehen und verwenden",
        "Auf Patienten zugehen",
        "Eigene Unsicherheiten ansprechen",
        "Im Team um Hilfe bitten",
        "Den eigenen Lernfortschritt erkennen",
      ],
    },
  },
  {
    stepId: "le01-fall01-st01-06",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-reflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    displayFormat: "diary",
    contentC1: {
      title: "Tagebucheintrag: Linas erster Praxistag",
      body: "Stell dir vor, du bist Lina. Es ist Abend nach deinem ersten Praxistag. Schreibe einen kurzen Tagebucheintrag (~5 Sätze): Was hast du erlebt? Was hat dich überrascht? Was nimmst du dir für morgen vor?",
    },
    contentB1: {
      title: "Tagebucheintrag schreiben",
      body: "Du bist Lina. Es ist Abend. Schreibe 5 Sätze in dein Tagebuch. Was hast du heute erlebt? Was war überraschend? Was machst du morgen anders?",
    },
    question: {
      fragetext: "Schreibe Linas Tagebucheintrag nach dem ersten Praxistag (~5 Sätze).",
      musterantwort:
        "Der Eintrag sollte (1) mindestens eine konkrete Beobachtung vom Tag enthalten, (2) eine eigene Emotion benennen, (3) einen Vorsatz für den nächsten Tag formulieren.",
      bewertungskriterien: ["Reflexionstiefe", "Selbstwahrnehmung", "konkreter Vorsatz"],
    },
  },
];

// === FALL 2: Markus T. — 34 Jahre (Erwachsener) ===

const MARKUS_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le01-fall02-st01-01",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 78"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "BRÜCKE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Der Pflegeprozess als Regelkreis",
      body: "Markus T. (34, Umschüler) vergleicht den Pflegeprozess mit einem Regelkreis aus der Technik. Wie viele Schritte hat das Pflegeprozessmodell nach Fiechter und Meier?",
    },
    contentB1: {
      title: "Wie viele Schritte hat der Pflegeprozess?",
      body: "Markus kennt Regelkreise aus der Technik. Der Pflegeprozess ist ähnlich. Aber wie viele Schritte hat das Modell nach Fiechter und Meier?",
    },
    question: {
      fragetext: "Wie viele Schritte hat das Pflegeprozessmodell nach Fiechter und Meier?",
      optionen: [
        {
          text: "4 Schritte",
          isCorrect: false,
          explanation:
            "Das wäre das WHO-Modell (Assessment, Planung, Durchführung, Evaluation). Im deutschsprachigen Raum hat sich das 6-Schritte-Modell nach Fiechter und Meier durchgesetzt. Guter Ansatz — lies nochmal nach!",
          explanationB1: "4 Schritte ist das WHO-Modell. In Deutschland nutzen wir das 6-Schritte-Modell nach Fiechter und Meier.",
        },
        {
          text: "5 Schritte",
          isCorrect: false,
          explanation:
            "Knapp daneben! Es gibt tatsächlich 6 Schritte. Der sechste Schritt — die Evaluation — wird oft vergessen, ist aber entscheidend: Ohne Evaluation kein Regelkreis.",
          explanationB1: "Fast! Aber es sind 6 Schritte, nicht 5. Der letzte Schritt heißt Evaluation.",
        },
        {
          text: "6 Schritte",
          isCorrect: true,
          explanation:
            "Genau! Die 6 Schritte nach Fiechter und Meier: (1) Informationssammlung, (2) Erkennen von Pflegeproblemen und Ressourcen, (3) Pflegeziele, (4) Planung der Maßnahmen, (5) Durchführung, (6) Evaluation. Markus hat recht — es ist wie ein Regelkreis!",
          explanationB1:
            "Richtig! 6 Schritte: (1) Informationen sammeln, (2) Probleme erkennen, (3) Ziele festlegen, (4) Maßnahmen planen, (5) Durchführen, (6) Evaluieren.",
        },
        {
          text: "8 Schritte",
          isCorrect: false,
          explanation:
            "So viele sind es nicht. Das 6-Schritte-Modell nach Fiechter und Meier ist das verbreitetste im deutschsprachigen Raum. Aber gut, dass du lieber zu viel als zu wenig vermutest!",
          explanationB1: "8 Schritte ist zu viel. Es sind 6 Schritte nach Fiechter und Meier.",
        },
      ],
    },
  },
  {
    stepId: "le01-fall02-st01-02",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 78"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Schritte des Pflegeprozesses sortieren",
      body: "Markus soll die 6 Schritte des Pflegeprozesses in die richtige Reihenfolge bringen. Hilf ihm dabei!",
    },
    contentB1: {
      title: "Reihenfolge des Pflegeprozesses",
      body: "Bringe die 6 Schritte in die richtige Reihenfolge. Was kommt zuerst?",
    },
    question: {
      fragetext: "Bringe die 6 Schritte des Pflegeprozesses nach Fiechter und Meier in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Ziehe die Schritte in die richtige Reihenfolge.",
        items: [
          { id: "s1", label: "Informationssammlung" },
          { id: "s2", label: "Erkennen von Pflegeproblemen und Ressourcen" },
          { id: "s3", label: "Festlegung der Pflegeziele" },
          { id: "s4", label: "Planung der Pflegemaßnahmen" },
          { id: "s5", label: "Durchführung der Pflege" },
          { id: "s6", label: "Evaluation" },
        ],
      },
    },
  },
  {
    stepId: "le01-fall02-st01-03",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer", "I Care Pflege S. 23–24"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Ethik-Dilemma: Autonomie vs. Fürsorge",
      body: `Markus erlebt im Ethik-Unterricht folgendes Szenario: Herr Bauer (68, Dialysepatient) sagt zum Team: "Ich will keine Dialyse mehr. Ich habe genug." — Die Praxisanleiterin fragt: "Was denkst du, Markus?"`,
    },
    contentB1: {
      title: "Was sagt Markus?",
      body: "Herr Bauer (68) will keine Dialyse mehr. Er ist müde. Was antwortet Markus? Wähle eine Antwort.",
    },
    question: {
      fragetext: "Was sagst du als Pflegeschüler zu Herrn Bauer?",
      patientName: "Herr Bauer",
      dialogPhases: [
        {
          context:
            `Herr Bauer, 68 Jahre, seit 5 Jahren dialysepflichtig. Er sitzt aufrecht im Bett, wirkt erschöpft aber klar. Er sagt: "Drei Mal die Woche, 4 Stunden. Ich kann nicht mehr. Ich will aufhören."`,
          speaker: "Herr Bauer",
          contextB1: "Herr Bauer (68) sitzt im Bett. Er sieht müde aus. Er sagt: 'Ich will keine Dialyse mehr.'",
          options: [
            {
              text: `"Herr Bauer, das verstehe ich. Können Sie mir erzählen, was Sie besonders belastet?"`,
              patientResponse:
                `"Endlich fragt mal jemand. Ich bin müde. Nach jeder Dialyse bin ich so kaputt, dass ich den ganzen nächsten Tag im Bett liege."`,
              score: 3,
              feedback:
                "Sehr gut! Du nimmst Herrn Bauers Perspektive ernst und stellst eine offene Frage. Das entspricht dem Prinzip der Autonomie.",
              textB1: `"Herr Bauer, ich verstehe Sie. Was belastet Sie am meisten?"`,
              patientResponseB1: `"Endlich fragt jemand. Ich bin so müde nach jeder Dialyse."`,
              feedbackB1: "Sehr gut! Du hörst zu und fragst offen. Das ist richtig.",
            },
            {
              text: `"Aber ohne Dialyse werden Sie sterben! Das können Sie doch nicht wollen."`,
              patientResponse: `"Das weiß ich selbst. Aber leben Sie mal so wie ich."`,
              score: 1,
              feedback:
                "Deine Sorge zeigt Fürsorge, aber diese Aussage kann bevormundend wirken. Herr Bauer hat ein Recht auf Selbstbestimmung (Autonomie). Versuche, erst zuzuhören.",
              textB1: `"Aber ohne Dialyse sterben Sie! Das wollen Sie doch nicht!"`,
              patientResponseB1: `"Das weiß ich. Aber Sie kennen mein Leben nicht."`,
              feedbackB1: "Du machst dir Sorgen — das ist gut. Aber Herr Bauer entscheidet selbst. Erst zuhören, dann sprechen.",
            },
            {
              text: `"Da müssen wir mit dem Arzt sprechen. Ich bin nur Schüler."`,
              patientResponse: `"Dann holt jemanden, der mir zuhört."`,
              score: 1,
              feedback:
                "Es stimmt, dass solche Entscheidungen ärztlich begleitet werden — aber als Pflegefachkraft bist du die erste Ansprechperson. Zuhören ist immer richtig.",
              textB1: `"Das muss der Arzt entscheiden. Ich bin Schüler."`,
              patientResponseB1: `"Ich will jemanden, der zuhört."`,
              feedbackB1: "Der Arzt ist wichtig. Aber du kannst trotzdem zuhören. Zuhören ist immer richtig.",
            },
            {
              text: `"Ich kann Ihre Entscheidung respektieren. Darf ich fragen, ob Sie mit jemandem darüber gesprochen haben?"`,
              patientResponse:
                `"Meine Tochter weiß es. Sie weint jedes Mal, wenn ich davon anfange."`,
              score: 3,
              feedback:
                "Gut! Du respektierst die Autonomie und fragst gleichzeitig nach dem sozialen Umfeld. Das zeigt ethische Kompetenz.",
              textB1: `"Ich respektiere das. Haben Sie mit jemandem gesprochen?"`,
              patientResponseB1: `"Meine Tochter weiß es. Sie weint immer, wenn ich das sage."`,
              feedbackB1: "Sehr gut! Du respektierst seine Entscheidung und fragst nach Familie. Das ist ethisch richtig.",
            },
          ],
        },
        {
          context:
            `Die Praxisanleiterin sagt: "Im Team gibt es verschiedene Meinungen. Manche sagen: Herr Bauer ist klar orientiert, er darf entscheiden. Andere sagen: Wir müssen ihn überreden weiterzumachen." — Was denkst du?`,
          speaker: "Praxisanleiterin",
          contextB1:
            "Die Praxisanleiterin sagt: 'Im Team denken manche: Herr Bauer darf entscheiden. Andere sagen: Wir müssen ihn überzeugen.' Was denkst du?",
          options: [
            {
              text: `"Herr Bauer ist orientiert und entscheidungsfähig. Sein Wunsch muss ernst genommen werden — auch wenn es schwer ist."`,
              patientResponse: `"Genau. Und was bedeutet das konkret für unser Handeln?"`,
              score: 3,
              feedback:
                "Richtig! Autonomie bedeutet: Wer klar orientiert ist, darf selbst entscheiden — auch gegen den Rat des Teams. Das ist ein Grundprinzip der Pflegeethik.",
              textB1: `"Herr Bauer kann klar denken. Sein Wunsch ist wichtig — auch wenn es schwer ist."`,
              patientResponseB1: `"Genau. Und was bedeutet das für uns?"`,
              feedbackB1: "Richtig! Herr Bauer kann klar denken. Dann darf er auch selbst entscheiden.",
            },
            {
              text: `"Wir sollten ihn erst mal vom Psychologen untersuchen lassen, ob er überhaupt entscheidungsfähig ist."`,
              patientResponse: `"Das kann sinnvoll sein. Aber worauf müssen wir achten?"`,
              score: 2,
              feedback:
                "Ein psychologisches Konsil kann hilfreich sein — aber Vorsicht: Es darf nicht dazu dienen, einen unerwünschten Patientenwunsch zu umgehen. Herr Bauer wirkt klar orientiert.",
              textB1: `"Vielleicht soll ein Psychologe prüfen, ob er entscheiden kann."`,
              patientResponseB1: `"Das ist eine Idee. Aber worauf müssen wir achten?"`,
              feedbackB1: "Ein Psychologe kann helfen. Aber Herr Bauer ist klar im Kopf. Sein Wunsch muss ernst genommen werden.",
            },
            {
              text: `"Wir müssen ihn überreden. Er hat doch Depressionen — deshalb will er aufhören."`,
              patientResponse: `"Woher weißt du das? Hat jemand das diagnostiziert?"`,
              score: 1,
              feedback:
                "Vorsicht! Du stellst eine Diagnose ohne Grundlage. Erschöpfung ist nicht gleich Depression. Solche Annahmen können dazu führen, dass Patientenwünsche nicht ernst genommen werden.",
              textB1: `"Wir müssen ihn überreden. Er ist bestimmt depressiv."`,
              patientResponseB1: `"Bist du dir sicher? Hat das jemand festgestellt?"`,
              feedbackB1: "Vorsicht! Du sagst: Er ist depressiv. Aber das hat niemand festgestellt. Erschöpfung ist nicht Depression.",
            },
          ],
        },
        {
          context:
            `Die Praxisanleiterin sagt: "Stell dir vor, Herr Bauer bleibt bei seinem Wunsch. Er sagt klar: Keine Dialyse mehr. Was tun wir als Pflegeteam?"`,
          speaker: "Praxisanleiterin",
          contextB1:
            "Die Praxisanleiterin fragt: 'Herr Bauer sagt: Keine Dialyse mehr. Was machen wir als Pflege-Team?'",
          options: [
            {
              text: `"Wir dokumentieren seinen Wunsch, informieren den Arzt und besprechen palliative Maßnahmen — zum Beispiel Schmerztherapie und Mundpflege."`,
              patientResponse: `"Gut gedacht. Du denkst schon an die nächsten Schritte."`,
              score: 3,
              feedback:
                "Sehr gut! Wenn ein Patient eine Therapie ablehnt, beginnt die palliative Begleitung. Dokumentation, ärztliche Information und Symptomkontrolle sind die nächsten Schritte.",
              textB1: `"Wir schreiben seinen Wunsch auf, sagen dem Arzt Bescheid und überlegen: Was braucht er jetzt? Zum Beispiel Mundpflege."`,
              patientResponseB1: `"Gut gedacht. Du denkst an die nächsten Schritte."`,
              feedbackB1: "Sehr gut! Wenn ein Patient Nein sagt: aufschreiben, Arzt informieren, palliativ begleiten.",
            },
            {
              text: `"Dann können wir nichts machen. Er hat entschieden."`,
              patientResponse: `"Wirklich gar nichts? Ist das nicht zu einfach gedacht?"`,
              score: 1,
              feedback:
                "Autonomie respektieren heißt nicht, sich zurückzuziehen. Pflege hört nicht auf, wenn eine Therapie abgelehnt wird — sie verändert sich. Begleitung, Symptomkontrolle und Dokumentation bleiben Aufgaben.",
              textB1: `"Dann können wir nichts machen."`,
              patientResponseB1: `"Wirklich nichts? Ist das nicht zu einfach?"`,
              feedbackB1: "Autonomie respektieren heißt nicht: nichts tun. Pflege verändert sich. Begleitung und Dokumentation bleiben.",
            },
            {
              text: `"Wir sollten seine Tochter einbeziehen und gemeinsam nach einem Kompromiss suchen."`,
              patientResponse: `"Die Tochter einbeziehen — ja. Aber was, wenn er keinen Kompromiss will?"`,
              score: 2,
              feedback:
                "Die Familie einzubeziehen ist sinnvoll — aber nur mit Zustimmung von Herrn Bauer. Und ein Kompromiss ist nur möglich, wenn der Patient das will. Am Ende zählt sein Wille.",
              textB1: `"Wir fragen seine Tochter und suchen zusammen einen Kompromiss."`,
              patientResponseB1: `"Die Tochter fragen — ja. Aber was, wenn er keinen Kompromiss will?"`,
              feedbackB1: "Die Familie fragen ist gut — aber nur wenn Herr Bauer das erlaubt. Am Ende zählt sein Wille.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le01-fall02-st01-04",
    phase: "s1",
    stepType: "matrix",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 73"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-selbstpflege",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Markus' Eisenhower-Matrix",
      body: "Markus fühlt sich gestresst: Ausbildung, Schichtdienst, Tochter Emma, Prüfungsvorbereitung, Haushalt. Sortiere seine Aufgaben in die Eisenhower-Matrix.",
    },
    contentB1: {
      title: "Was ist wichtig? Was ist dringend?",
      body: "Markus hat viele Aufgaben. Hilf ihm zu sortieren: Was ist wichtig? Was ist dringend?",
    },
    question: {
      fragetext: "Sortiere Markus' Aufgaben in die Eisenhower-Matrix.",
      matrix: {
        instruction: "Ordne die Aufgaben den richtigen Quadranten zu.",
        axisX: { label: "Dringlichkeit", low: "nicht dringend", high: "dringend" },
        axisY: { label: "Wichtigkeit", low: "nicht wichtig", high: "wichtig" },
        items: [
          { id: "m1", text: "Prüfung in 2 Wochen vorbereiten", correctQuadrant: 2 },
          { id: "m2", text: "Emma morgen von der Schule abholen", correctQuadrant: 1 },
          { id: "m3", text: "Kollegin bittet um Schichttausch nächste Woche", correctQuadrant: 3 },
          { id: "m4", text: "Sport machen für Rückengesundheit", correctQuadrant: 2 },
          { id: "m5", text: "Social Media scrollen am Abend", correctQuadrant: 4 },
          { id: "m6", text: "Anamnesebogen bis Schichtende dokumentieren", correctQuadrant: 1 },
        ],
      },
    },
  },
  {
    stepId: "le01-fall02-st01-05",
    phase: "s1",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 78–84", "Transfer"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegeprozess üben: Herr S.",
      body: `Markus übt den Pflegeprozess. Sein Patient Herr S. (78 J.) wurde nach einer Knie-TEP auf die chirurgische Station verlegt. Herr S. hat starke Schmerzen (NRS 7/10), kann sich kaum bewegen und sagt: "Ich will so schnell wie möglich wieder laufen." Er war vorher selbstständig und hat täglich 30 Minuten spazieren gegangen.`,
    },
    contentB1: {
      title: "Pflegeplanung für Herrn S.",
      body: "Herr S. (78 Jahre) hatte eine Knie-Operation. Er hat starke Schmerzen (7 von 10). Er kann nicht alleine aufstehen. Er will wieder laufen. Hilf Markus bei der Pflegeplanung.",
    },
    question: {
      fragetext: "Erstelle eine Pflegeplanung für Herrn S.",
      careplan: {
        patientName: "Herr S.",
        situation:
          "78 Jahre, nach Knie-TEP, NRS 7/10, eingeschränkte Mobilität, motiviert, vorher selbstständig und aktiv.",
        situationB1:
          "Herr S. ist 78 Jahre alt. Er hatte eine Knie-Operation vor 2 Tagen. Er hat starke Schmerzen. Er kann nicht alleine aufstehen.",
        steps: [
          {
            phase: "problem",
            prompt:
              "Formuliere das aktuelle Pflegeproblem von Herrn S. nach dem PÄSR-Schema (Problem, Ätiologie, Symptome, Ressourcen).",
            promptB1: "Was ist das Pflegeproblem von Herrn S.? Beschreibe Problem, Ursache, Zeichen und Ressource.",
            options: [
              {
                text: "Eingeschränkte Mobilität aufgrund der Knie-TEP, erkennbar an Schmerzen (NRS 7/10) und Bewegungseinschränkung. Ressource: hohe Motivation und vorherige Selbstständigkeit.",
                isCorrect: true,
                explanation:
                  "Sehr gut! Du hast alle 4 Bestandteile des PÄSR-Schemas korrekt benannt: Problem, Ätiologie, Symptome und Ressourcen.",
              },
              {
                text: "Herr S. hat Schmerzen.",
                isCorrect: false,
                explanation:
                  "Das ist ein Symptom, kein vollständiges Pflegeproblem. Ein Pflegeproblem beschreibt die Beeinträchtigung und ihre Ursache.",
              },
              {
                text: "Herr S. braucht Hilfe.",
                isCorrect: false,
                explanation:
                  "Das stimmt, ist aber zu unspezifisch. Pflegeprobleme müssen konkret und nachprüfbar formuliert sein.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt: "Formuliere ein Pflegeziel für Herrn S.",
            promptB1: "Was soll Herr S. in 5 Tagen können? Schreibe ein konkretes Ziel.",
            options: [
              {
                text: "Herr S. kann innerhalb von 5 Tagen mit Gehhilfe 50 Meter auf dem Stationsflur gehen.",
                isCorrect: true,
                explanation:
                  "Perfekt! Das Ziel ist SMART: spezifisch (50 m auf dem Flur), messbar (Meter), realisierbar, terminiert (5 Tage).",
              },
              {
                text: "Herr S. soll sich besser fühlen.",
                isCorrect: false,
                explanation:
                  "Das ist nicht messbar. Pflegeziele müssen SMART sein: spezifisch, messbar, akzeptiert, realisierbar, terminiert.",
              },
              {
                text: "Herr S. läuft morgen wieder normal.",
                isCorrect: false,
                explanation:
                  "Das ist nicht realisierbar — nach einer Knie-TEP braucht Mobilisation Zeit. Gute Ziele sind anspruchsvoll, aber erreichbar.",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt: "Welche Pflegemaßnahmen planst du?",
            promptB1: "Was tust du, damit Herr S. wieder laufen kann?",
            options: [
              {
                text: "Schmerzmanagement nach Arztanordnung (Analgetika vor Mobilisation), 2× tägl. Mobilisation mit Physiotherapie, Kältetherapie nach Belastung, Gehstützen-Training.",
                isCorrect: true,
                explanation:
                  "Ausgezeichnet! Du planst Schmerzmanagement vor der Mobilisation — das ist entscheidend. Die Kombination mit Physiotherapie und Kältetherapie ist optimal.",
              },
              {
                text: "Abwarten, bis die Schmerzen von allein besser werden.",
                isCorrect: false,
                explanation:
                  "Aktive Pflege bedeutet, Maßnahmen zu planen und durchzuführen — nicht abwarten. Schmerzmanagement ist hier essenziell für die Mobilisation.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le01-fall02-st01-06",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 27", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeverstaendnis",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegebild im Wandel",
      body: `Markus sagt: "Ich dachte, Pflege ist Waschen und Essen bringen. Mann, lag ich daneben." — Wie hat sich dein eigenes Bild von Pflege seit Ausbildungsbeginn verändert? Beschreibe in 3–5 Sätzen, was du vorher dachtest und was du jetzt weißt.`,
    },
    contentB1: {
      title: "Was dachtest du früher über Pflege?",
      body: "Markus dachte: Pflege = Waschen und Essen. Aber Pflege ist viel mehr! Was hast du gelernt? Schreibe 3–5 Sätze.",
    },
    question: {
      fragetext: "Wie hat sich dein Bild von Pflege seit Ausbildungsbeginn verändert? (3–5 Sätze)",
      musterantwort:
        "Der Text sollte (1) ein Vorher-Bild beschreiben (z. B. Pflege = Grundpflege), (2) ein Nachher-Bild (Pflegeprozess, Fachkompetenz, Ethik), (3) einen persönlichen Aha-Moment benennen.",
      bewertungskriterien: [
        "Reflexion des eigenen Pflegeverständnisses",
        "Bezug zu gelernten Inhalten (Profession, Pflegeprozess)",
        "Ehrlichkeit",
      ],
    },
  },
];

// === FALL 3: Fatma K. — 71 Jahre (Alter Mensch) ===

const FATMA_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le01-fall03-st01-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer", "I Care Pflege S. 80"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Aufnahmegespräch mit Fatma K.",
      body: "Du führst das Aufnahmegespräch mit Fatma K. (71 Jahre, Pneumonie). Sie sitzt ängstlich auf der Bettkante und schaut dich unsicher an. Wie beginnst du das Gespräch?",
    },
    contentB1: {
      title: "Gespräch mit Fatma K.",
      body: "Fatma K. (71 Jahre) kommt neu auf die Station. Sie ist ängstlich. Du sollst mit ihr reden. Wie fängst du an?",
    },
    question: {
      fragetext: "Wie beginnst du das Aufnahmegespräch mit Fatma K.?",
      patientName: "Fatma K.",
      dialogPhases: [
        {
          context:
            "Fatma K. wurde gerade auf die Station gebracht. Sie hat eine Plastiktüte mit persönlichen Sachen auf dem Schoß und schaut sich nervös um. Der Arzt hat dir gesagt: Pneumonie, Antibiotika-Therapie geplant. Fatma versteht medizinische Fachsprache nicht gut.",
          speaker: "Pflegeschüler*in",
          contextB1:
            "Fatma K. ist gerade angekommen. Sie ist nervös. Sie hat eine Tasche auf dem Schoß. Sie versteht schwierige Wörter nicht gut.",
          options: [
            {
              text: `"Guten Tag, Frau Kaya. Ich bin [Name], Pflegeschülerin. Darf ich mich zu Ihnen setzen? Wie geht es Ihnen gerade?"`,
              patientResponse:
                `"Ja, setzen Sie sich. Mir geht es nicht gut... Ich huste so viel und mir ist kalt."`,
              score: 3,
              feedback:
                "Sehr gut! Du schaffst eine angenehme Atmosphäre, stellst dich vor und stellst eine offene Frage. So beginnt ein gutes Aufnahmegespräch.",
              textB1: `"Guten Tag, Frau Kaya. Ich bin [Name]. Darf ich mich setzen? Wie geht es Ihnen?"`,
              patientResponseB1: `"Ja, bitte. Mir geht es nicht gut. Ich huste viel und friere."`,
              feedbackB1: "Sehr gut! Du sitzt auf Augenhöhe, stellst dich vor und fragst offen. Das ist richtig.",
            },
            {
              text: `"Frau Kaya, ich muss jetzt Ihre Pflegeanamnese machen. Haben Sie Vorerkrankungen?"`,
              patientResponse: `"Anam... was? Ich verstehe das nicht."`,
              score: 1,
              feedback:
                "Fachsprache kann Patienten verunsichern — besonders bei Sprachbarrieren. Beginne mit einfachen Worten und schaffe erst Vertrauen.",
              textB1: `"Frau Kaya, ich mache jetzt die Pflegeanamnese. Haben Sie Vorerkrankungen?"`,
              patientResponseB1: `"Was? Ich verstehe das nicht."`,
              feedbackB1: "Das Wort 'Pflegeanamnese' ist schwierig. Benutze einfache Sprache. Schaffe erst Vertrauen.",
            },
            {
              text: `"Hallo! Sprechen Sie Deutsch? Soll ich einen Dolmetscher holen?"`,
              patientResponse:
                `"Natürlich spreche ich Deutsch! Ich lebe seit 50 Jahren hier."`,
              score: 1,
              feedback:
                "Vorsicht — diese Frage kann verletzend wirken. Fatma spricht gut Alltagsdeutsch. Die Sprachbarriere liegt bei der Fachsprache, nicht beim Deutsch generell.",
              textB1: `"Hallo! Sprechen Sie Deutsch? Brauchen Sie einen Übersetzer?"`,
              patientResponseB1: `"Natürlich! Ich bin seit 50 Jahren in Deutschland!"`,
              feedbackB1: "Diese Frage war nicht gut. Fatma spricht gut Deutsch. Nur Fachwörter sind schwierig für sie.",
            },
            {
              text: `"Guten Tag, Frau Kaya. Mein Name ist [Name]. Der Arzt hat mir schon erzählt, dass Sie Husten haben. Erzählen Sie mir doch mal — wie fühlen Sie sich?"`,
              patientResponse:
                `"Ach, der Husten... Tag und Nacht. Und hier ist alles so fremd. Zu Hause ist es besser."`,
              score: 3,
              feedback:
                "Gut gemacht! Du verwendest einfache Sprache, nimmst Bezug auf das, was Fatma schon weiß, und lädst sie ein, selbst zu erzählen.",
              textB1: `"Guten Tag, Frau Kaya. Ich heiße [Name]. Ich weiß, Sie haben Husten. Wie fühlen Sie sich?"`,
              patientResponseB1: `"Der Husten... immer. Und hier ist alles fremd. Zuhause ist besser."`,
              feedbackB1: "Gut! Du sprichst einfach und lässt Fatma erzählen. Das ist richtig.",
            },
          ],
        },
        {
          context:
            `Fatma erzählt: "Ich huste schon seit einer Woche. Mein Sohn hat gesagt, ich soll ins Krankenhaus. Aber was machen Sie hier mit mir?" Du musst jetzt Informationen sammeln — aber ohne Fachsprache.`,
          speaker: "Fatma K.",
          contextB1:
            "Fatma sagt: 'Ich huste seit einer Woche. Mein Sohn hat gesagt: Geh ins Krankenhaus.' Sie fragt: 'Was machen Sie mit mir?'",
          options: [
            {
              text: `"Frau Kaya, wir möchten erst mal verstehen, wie es Ihnen geht. Darf ich Ihnen ein paar Fragen stellen? Zum Beispiel: Haben Sie Fieber? Können Sie gut atmen?"`,
              patientResponse:
                `"Ja, fragen Sie. Ich habe Fieber, glaube ich. Und das Atmen fällt mir schwer, wenn ich liege."`,
              score: 3,
              feedback:
                "Sehr gut! Du fragst um Erlaubnis, verwendest einfache Sprache und stellst konkrete, verständliche Fragen. So gelingt Informationssammlung bei Sprachbarrieren.",
              textB1: `"Frau Kaya, ich möchte wissen: Wie geht es Ihnen? Darf ich fragen: Haben Sie Fieber? Können Sie gut atmen?"`,
              patientResponseB1: `"Ja, fragen Sie. Ich habe Fieber. Und das Atmen ist schwer, wenn ich liege."`,
              feedbackB1: "Sehr gut! Du fragst einfach und klar. Fatma kann gut antworten.",
            },
            {
              text: `"Ich muss jetzt Ihre Vitalzeichen erheben und die Anamnese dokumentieren."`,
              patientResponse: `"Vital... was? Ich verstehe das nicht. Was wollen Sie von mir?"`,
              score: 1,
              feedback:
                "Fachsprache wie 'Vitalzeichen' und 'Anamnese' versteht Fatma nicht. Übersetze medizinische Begriffe in Alltagssprache — das ist Teil der professionellen Kommunikation.",
              textB1: `"Ich muss jetzt Ihre Vital-Zeichen messen und die Anamnese machen."`,
              patientResponseB1: `"Was? Ich verstehe das nicht. Was wollen Sie?"`,
              feedbackB1: "Fatma versteht 'Vitalzeichen' und 'Anamnese' nicht. Benutze einfache Wörter.",
            },
            {
              text: `"Keine Sorge, Frau Kaya. Ihr Sohn hatte recht — im Krankenhaus können wir Ihnen helfen. Ich erkläre Ihnen alles Schritt für Schritt."`,
              patientResponse:
                `"Das beruhigt mich. Aber... was genau passiert hier?"`,
              score: 2,
              feedback:
                "Beruhigung ist gut — aber du hast noch keine konkreten Informationen gesammelt. Kombiniere Beruhigung mit gezielten Fragen.",
              textB1: `"Keine Sorge, Frau Kaya. Wir helfen Ihnen hier. Ich erkläre alles Schritt für Schritt."`,
              patientResponseB1: `"Das beruhigt mich. Aber was passiert hier?"`,
              feedbackB1: "Beruhigung ist gut. Aber frage auch: Wie geht es Ihnen? Was tut weh?",
            },
          ],
        },
        {
          context:
            `Fatma sagt leise: "Wissen Sie... zu Hause kocht mein Sohn für mich. Hier kenne ich das Essen nicht. Und beten — wo kann ich beten?" Sie schaut auf ihre Tasche.`,
          speaker: "Fatma K.",
          contextB1:
            "Fatma sagt leise: 'Zu Hause kocht mein Sohn. Hier kenne ich das Essen nicht. Und wo kann ich beten?'",
          options: [
            {
              text: `"Das sind wichtige Fragen, Frau Kaya. Ich notiere mir: Essensgewohnheiten und Gebetszeiten. Wir finden eine Lösung — vielleicht kann Ihr Sohn Ihnen auch etwas mitbringen."`,
              patientResponse:
                `"Oh, das wäre schön! Mein Sohn kocht sehr gut. Und wenn ich beten kann, fühle ich mich besser."`,
              score: 3,
              feedback:
                "Sehr gut! Du nimmst kulturelle und religiöse Bedürfnisse ernst und dokumentierst sie. Das gehört zur ganzheitlichen Pflege — körperliche UND psychosoziale Bedürfnisse erfassen.",
              textB1: `"Das ist wichtig. Ich schreibe auf: Essen und Gebet. Vielleicht kann Ihr Sohn Essen bringen."`,
              patientResponseB1: `"Oh, das wäre schön! Mein Sohn kocht gut. Und wenn ich beten kann, geht es mir besser."`,
              feedbackB1: "Sehr gut! Du nimmst ernst: Essen und Gebet sind wichtig für Fatma. Das gehört zur Pflege.",
            },
            {
              text: `"Das Essen hier ist gut, keine Sorge. Und zum Beten — da müssen Sie den Sozialdienst fragen."`,
              patientResponse:
                `"Sozial... dienst? Wer ist das? Können Sie nicht helfen?"`,
              score: 1,
              feedback:
                "Du weist Fatmas Bedürfnisse ab und verweist an einen Dienst, den sie nicht kennt. Kulturelle Bedürfnisse zu erfassen ist DEINE Aufgabe als Pflegekraft — nicht die des Sozialdienstes.",
              textB1: `"Das Essen hier ist gut. Zum Beten: Fragen Sie den Sozial-Dienst."`,
              patientResponseB1: `"Wer ist das? Können Sie mir nicht helfen?"`,
              feedbackB1: "Du schickst Fatma weg. Aber kulturelle Bedürfnisse erfassen — das ist DEINE Aufgabe.",
            },
            {
              text: `"Ich spreche mit der Küche wegen Ihrem Essen. Und ich frage nach, ob es einen Gebetsraum gibt."`,
              patientResponse:
                `"Danke! Das ist sehr nett von Ihnen."`,
              score: 3,
              feedback:
                "Gut! Du handelst direkt und zeigst Initiative. Kulturelle und religiöse Bedürfnisse in die Pflegeplanung aufzunehmen ist ein Zeichen professioneller Pflege.",
              textB1: `"Ich frage in der Küche nach. Und ich frage, ob es einen Gebetsraum gibt."`,
              patientResponseB1: `"Danke! Das ist sehr nett."`,
              feedbackB1: "Gut! Du hilfst sofort. Essen und Gebet in die Pflege aufnehmen — das ist professionell.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le01-fall03-st01-02",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-informationssammlung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Informationen aus dem Aufnahmegespräch einordnen",
      body: "Im Aufnahmegespräch mit Fatma K. sammelst du verschiedene Informationen. Ordne die Beispiele der richtigen Kategorie zu.",
    },
    contentB1: {
      title: "Welche Art von Information ist das?",
      body: "Du sprichst mit Fatma. Du sammelst viele Informationen. Ordne jede Information in die richtige Gruppe.",
    },
    question: {
      fragetext: "Ordne die Informationen den richtigen Kategorien zu.",
      categories: [
        { name: "Direkte Information" },
        { name: "Indirekte Information" },
        { name: "Objektive Information" },
        { name: "Subjektive Information" },
      ],
      categoryItems: [
        { text: "Fatma sagt: 'Mir ist immer kalt'", correctCategory: 3 },
        { text: "Körpertemperatur: 38,4 °C", correctCategory: 2 },
        { text: "Fatma erzählt von ihrem Husten", correctCategory: 0 },
        { text: "Arztbrief: Pneumonie, Antibiotika-Therapie", correctCategory: 1 },
        { text: "Fatma sagt: 'Ich esse nur halal'", correctCategory: 0 },
        { text: "Sohn berichtet telefonisch über Medikamenteneinnahme", correctCategory: 1 },
      ],
    },
  },
  {
    stepId: "le01-fall03-st01-03",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 82"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-ressourcen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Ressourcen bei Fatma K. erkennen",
      body: "Bei Fatma K. fallen dir verschiedene kulturelle und persönliche Bedürfnisse auf. Ordne jedes Bedürfnis der passenden Ressourcen-Kategorie zu.",
    },
    contentB1: {
      title: "Welche Ressource ist das?",
      body: "Fatma hat viele Ressourcen. Ordne jede Ressource der richtigen Kategorie zu.",
    },
    question: {
      fragetext: "Ordne die Bedürfnisse und Ressourcen den richtigen Kategorien zu.",
      matchingPairs: [
        { left: "Fatma betet fünfmal täglich", right: "Spirituelle Ressource" },
        { left: "Sohn kann telefonisch Medikamenteninformationen geben", right: "Soziale Ressource" },
        { left: "Fatma kann sich trotz Schwäche selbst waschen", right: "Körperliche Ressource" },
        { left: "Kollegin Ayşe spricht Türkisch", right: "Soziale Ressource" },
        { left: "Fatma ist humorvoll und erzählt gerne Geschichten", right: "Innere Ressource" },
        { left: "Fatma hat eine Wohnung in der Nähe", right: "Räumliche Ressource" },
      ],
    },
  },
  {
    stepId: "le01-fall03-st01-04",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 81"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprobleme",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Pflegeprobleme unterscheiden",
      body: "Im Pflegeprozess musst du Pflegeprobleme unterscheiden. Ordne die folgenden Pflegeprobleme bei Fatma K. der richtigen Art zu.",
    },
    contentB1: {
      title: "Welche Art von Pflegeproblem ist das?",
      body: "Es gibt verschiedene Arten von Pflegeproblemen. Ordne die Situationen bei Fatma K. zu.",
    },
    question: {
      fragetext: "Ordne die Pflegeprobleme der richtigen Kategorie zu.",
      categories: [
        { name: "Aktuelles Pflegeproblem" },
        { name: "Potenzielles Pflegeproblem" },
        { name: "Verdecktes Pflegeproblem" },
      ],
      categoryItems: [
        { text: "Fatma hustet stark und hat Fieber (Pneumonie)", correctCategory: 0 },
        { text: "Fatma könnte Medikamente verwechseln, weil sie keinen Medikamentenplan hat", correctCategory: 1 },
        { text: "Fatma nickt bei ärztlichen Erklärungen, versteht aber die Fachsprache nicht", correctCategory: 2 },
        { text: "Fatma isst wenig, weil kein halal-Essen angeboten wird", correctCategory: 0 },
        { text: "Fatma könnte vereinsamen, weil ihre Kinder weit weg wohnen", correctCategory: 1 },
        { text: "Fatma schämt sich bei Körperpflege durch männliche Pfleger, sagt es aber nicht", correctCategory: 2 },
      ],
    },
  },
  {
    stepId: "le01-fall03-st01-05",
    phase: "s1",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S. 80–84", "Transfer"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeplanung",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Pflegeplanung: Sprachbarriere bei medizinischen Gesprächen",
      body: "Erstelle eine einfache Pflegeplanung für Fatma K. Fokus: Sprachbarriere bei medizinischen Gesprächen.",
    },
    contentB1: {
      title: "Pflegeplanung für Fatma K.",
      body: "Fatma versteht die Wörter des Arztes nicht. Das ist ein Problem. Erstelle eine Pflegeplanung.",
    },
    question: {
      fragetext: "Erstelle eine Pflegeplanung für das Problem der Sprachbarriere bei Fatma K.",
      careplan: {
        patientName: "Fatma K.",
        situation:
          "71 Jahre, Pneumonie, spricht gut Alltagsdeutsch, versteht keine medizinische Fachsprache. Nickt bei Arztgesprächen, obwohl sie nichts versteht. Kollegin Ayşe spricht Türkisch.",
        situationB1:
          "Fatma K. ist 71 Jahre alt. Sie hat eine Lungenentzündung. Sie spricht gut Deutsch im Alltag. Aber Fachwörter vom Arzt versteht sie nicht. Sie nickt nur — auch wenn sie nichts versteht.",
        steps: [
          {
            phase: "problem",
            prompt: "Formuliere das Pflegeproblem bezüglich der Kommunikation.",
            promptB1: "Was ist das Kommunikationsproblem von Fatma? Beschreibe es genau.",
            options: [
              {
                text: "Eingeschränktes Verständnis medizinischer Informationen aufgrund der Sprachbarriere bei Fachsprache, erkennbar daran, dass Fatma bei Arztgesprächen nickt, ohne den Inhalt zu verstehen.",
                isCorrect: true,
                explanation:
                  "Sehr gut! Du hast das Problem genau beschrieben: die Art der Einschränkung und ein konkretes Zeichen (Nicken ohne Verstehen).",
              },
              {
                text: "Fatma spricht kein Deutsch.",
                isCorrect: false,
                explanation:
                  "Das stimmt nicht — Fatma spricht gut Alltagsdeutsch! Das Problem liegt spezifisch bei der medizinischen Fachsprache. Genauigkeit ist hier wichtig.",
              },
              {
                text: "Kommunikationsproblem.",
                isCorrect: false,
                explanation:
                  "Das ist zu ungenau. Welches Kommunikationsproblem genau? Beschreibe die Art der Einschränkung und woran du sie erkennst.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt: "Formuliere ein Pflegeziel.",
            promptB1: "Was soll Fatma in 3 Tagen können? Schreibe ein konkretes Ziel.",
            options: [
              {
                text: "Fatma versteht innerhalb von 3 Tagen ihre Diagnose, die geplante Therapie und die Medikamenteneinnahme und kann diese in eigenen Worten wiedergeben.",
                isCorrect: true,
                explanation:
                  "Perfekt! Das Ziel ist konkret (Diagnose + Therapie + Medikamente), messbar (eigene Worte) und terminiert (3 Tage).",
              },
              {
                text: "Fatma soll Deutsch lernen.",
                isCorrect: false,
                explanation:
                  "Das ist unrealistisch und nicht das Problem. Fatma spricht Deutsch — sie braucht verständliche Erklärungen in einfacher Sprache.",
              },
            ],
          },
          {
            phase: "massnahme",
            prompt: "Welche Maßnahmen planst du?",
            promptB1: "Was tust du, damit Fatma alles versteht?",
            options: [
              {
                text: "(1) Ärztliche Erklärungen in einfacher Sprache nachbesprechen, (2) Kollegin Ayşe bei wichtigen Gesprächen als Sprachmittlerin einbeziehen, (3) Medikamentenplan mit Bildern/Symbolen erstellen, (4) Verstehen durch Rückfragen prüfen ('Was haben Sie verstanden?')",
                isCorrect: true,
                explanation:
                  "Ausgezeichnet! Du kombinierst einfache Sprache, muttersprachliche Unterstützung, visuelle Hilfsmittel und Verständnisprüfung — das ist umfassendes, kultursensibles Pflegehandeln.",
              },
              {
                text: "Einfach lauter sprechen.",
                isCorrect: false,
                explanation:
                  "Lautstärke hilft nicht bei einer Sprachbarriere. Es geht um die Komplexität der Sprache, nicht um die Hörfähigkeit. Einfache Sprache, Bilder und muttersprachliche Unterstützung sind die richtigen Ansätze.",
              },
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le01-fall03-st01-06",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce01-le01-kultursensibilitaet",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Vertrauen ohne Worte",
      body: `Fatma sagt: "Ich verstehe die Wörter nicht, aber ich verstehe, ob jemand es gut meint." — Denke über diese Aussage nach. Was bedeutet sie für deine eigene Pflege? Wie kannst du sicherstellen, dass Patienten mit Sprachbarrieren sich verstanden fühlen — auch wenn die Worte fehlen?`,
    },
    contentB1: {
      title: "Was bedeutet Vertrauen?",
      body: "Fatma sagt: 'Ich verstehe die Wörter nicht, aber ich verstehe, ob jemand es gut meint.' Was bedeutet das? Wie schaffst du Vertrauen ohne viele Worte?",
    },
    question: {
      fragetext:
        "Was bedeutet Fatmas Aussage für deine Pflege? Wie baust du Vertrauen auf, wenn die gemeinsame Sprache begrenzt ist?",
      reflection: {
        prompt:
          "Reflektiere, wie du Vertrauen aufbauen kannst, wenn die gemeinsame Sprache begrenzt ist. Welche nonverbalen Signale und Gesten helfen?",
        placeholder: "Schreibe deine Gedanken...",
        systemPrompt:
          "Bestätige empathische Antworten (Sandwich). Hebe hervor, wenn der Schüler nonverbale Kommunikation, Geduld, einfache Sprache oder kulturelle Sensibilität anspricht. Weise sanft darauf hin, dass Kopfnicken nicht immer Verstehen bedeutet — Rückfragen sind wichtig.",
      },
    },
  },
];

// === EXPORT ===

export const LE01_FALLVERLAEUFE: Fallverlauf[] = [
  {
    fallId: "le01-fall-lina",
    patient: {
      patientId: "pat-lina-01",
      name: "Lina M.",
      alter: 16,
      geschlecht: "w",
      diagnosen: ["Pflegeschülerin im 1. Praxiseinsatz"],
      sourceLEs: ["le-01"],
      steckbrief:
        "16-jährige Pflegeschülerin, introvertiert und empathisch, erster Praxistag auf internistischer Station. Motivation durch Großmutter im Pflegeheim. Kämpft mit Unsicherheit und Fachsprache.",
    },
    titel: "Lina M. — Erster Praxistag",
    titelB1: "Linas erster Tag auf der Station",
    fokus: "pflege",
    stationen: [
      {
        stationId: "le01-fall01-st01",
        zeitpunkt: "Erster Praxistag",
        titel: "Überwältigender Einstieg",
        titelB1: "Linas erster Tag",
        situationC1:
          `Lina M. (16) beginnt ihren ersten Praxiseinsatz auf einer internistischen Station. Die Eindrücke überfordern sie: Gerüche, Geräusche, ein verwirrter Patient. Sie zieht sich in den Pausenraum zurück. Ihre Praxisanleiterin Frau Weber sagt: "Das ist normal. Auch ich hatte am Anfang Angst." Abends reflektiert Lina ihren Tag und notiert neue Fachbegriffe in ihr Heft.`,
        situationB1:
          "Lina hat ihren ersten Tag auf der Station. Es ist viel. Sie hat Angst. Ihre Anleiterin sagt: Das ist normal. Lina schreibt abends neue Wörter auf.",
        relevanteKapitel: [],
        steps: LINA_ST1_STEPS,
        bloomRange: [1, 3],
        freigeschaltet: true,
      },
    ],
  },
  {
    fallId: "le01-fall-markus",
    patient: {
      patientId: "pat-markus-01",
      name: "Markus T.",
      alter: 34,
      geschlecht: "m",
      diagnosen: ["Umschüler, Ex-Elektrotechniker, 1. Ausbildungsjahr"],
      sourceLEs: ["le-01"],
      steckbrief:
        "34-jähriger Quereinsteiger aus der Elektrotechnik, pragmatisch und systemorientiert. Vater einer 7-jährigen Tochter (Emma). Kämpft mit Schichtdienst und Prüfungsdruck. Erkennt Parallelen zwischen Pflegeprozess und technischem Regelkreis.",
    },
    titel: "Markus T. — Quereinsteiger entdeckt den Pflegeprozess",
    titelB1: "Markus und der Pflegeprozess",
    fokus: "pflege",
    stationen: [
      {
        stationId: "le01-fall02-st01",
        zeitpunkt: "Orientierungseinsatz, chirurgische Station",
        titel: "Der Regelkreis der Pflege",
        titelB1: "Pflegeprozess wie ein Regelkreis",
        situationC1:
          "Markus T. (34, gelernter Elektrotechniker) ist auf der chirurgischen Station im Orientierungseinsatz. Er erkennt im Pflegeprozess einen technischen Regelkreis. Sein Patient Herr S. (78 J., Knie-TEP) braucht Schmerzmanagement und Mobilisationsplanung. Im Ethik-Unterricht erlebt Markus ein Autonomie-Dilemma: Herr Bauer möchte die Dialyse abbrechen.",
        situationB1:
          "Markus arbeitet auf der chirurgischen Station. Er hilft Herrn S. (78 J.) nach einer Knie-Operation. Markus übt den Pflegeprozess. Im Unterricht diskutiert er: Darf ein Patient die Behandlung ablehnen?",
        relevanteKapitel: [],
        steps: MARKUS_ST1_STEPS,
        bloomRange: [1, 3],
        freigeschaltet: true,
      },
    ],
  },
  {
    fallId: "le01-fall-fatma",
    patient: {
      patientId: "pat-fatma-01",
      name: "Fatma K.",
      alter: 71,
      geschlecht: "w",
      diagnosen: ["Pneumonie"],
      sourceLEs: ["le-01"],
      steckbrief:
        "71-jährige türkischstämmige Patientin, seit 1972 in Deutschland. Witwe, alleinlebend, Kinder in anderen Städten. Herzlich und humorvoll, aber zurückhaltend gegenüber Fremden. Versteht medizinische Fachsprache nicht. Schämt sich bei Körperpflege durch männliche Pfleger. Wichtige Bezugsperson: Kollegin Ayşe (türkischsprachig).",
    },
    titel: "Fatma K. — Kultursensible Pflege",
    titelB1: "Fatma und ihre besonderen Bedürfnisse",
    fokus: "pflege",
    stationen: [
      {
        stationId: "le01-fall03-st01",
        zeitpunkt: "Stationäre Aufnahme, innere Station",
        titel: "Aufnahme und Pflegeplanung",
        titelB1: "Fatma kommt auf die Station",
        situationC1:
          "Fatma K. (71) wird mit Pneumonie auf der inneren Station aufgenommen. Sie spricht gut Alltagsdeutsch, versteht aber keine medizinische Fachsprache. Beim Aufnahmegespräch zeigt sich: keine vollständige Medikamentenliste, kein halal-Essen, Wunsch nach Gebetsplatz. Kollegin Ayşe ist eine wichtige Sprachmittlerin. Fatma schämt sich bei männlicher Körperpflege — ein verdecktes Pflegeproblem.",
        situationB1:
          "Fatma K. (71 Jahre) hat eine Lungenentzündung. Sie kommt ins Krankenhaus. Sie spricht Deutsch, aber Fachwörter versteht sie nicht. Sie braucht halal-Essen und einen Platz zum Beten.",
        relevanteKapitel: [],
        steps: FATMA_ST1_STEPS,
        bloomRange: [1, 3],
        freigeschaltet: true,
      },
    ],
  },
];
