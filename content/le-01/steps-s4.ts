// Pfad 4: Kompetent und ethisch handeln (Kapitel 6+8)
// LE-01: Personen- und situationsorientiert professionell pflegen
// Themen: Handlungskompetenz (3 Dimensionen), ICN-Ethikkodex, 4 ethische Prinzipien, Berufsordnung
// Leitfälle: Markus T. (34)
// Bloom: B1–B3, 11 Steps

import type { ContentStep } from "../_types";

export const STEPS_S4: ContentStep[] = [
  // =============================================================
  // Step 1: crowdPoll — Einstieg: Ethisch falsch und fachlich richtig?
  // =============================================================
  {
    stepId: "le01-s4-cp-01",
    phase: "s4",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Die große Frage",
      body: "Stell dir vor: Eine Pflegefachkraft führt eine Maßnahme fachlich perfekt durch — aber gegen den ausdrücklichen Willen des Patienten. Ist das richtig?",
    },
    contentB1: {
      title: "Die große Frage",
      body: "Stell dir vor: Eine Pflege-Fachkraft macht alles fachlich richtig. Aber der Patient will das nicht. Ist das richtig?",
    },
    question: {
      fragetext: "Kann man ethisch falsch handeln, obwohl man fachlich richtig handelt?",
      crowdPoll: {
        question: "Kann man ethisch falsch handeln, obwohl man fachlich richtig handelt?",
        questionB1: "Kann man fachlich richtig handeln — aber trotzdem ethisch falsch?",
        inputType: "choice",
        options: [
          { id: "a", text: "Ja, Fachlichkeit allein reicht nicht" },
          { id: "b", text: "Nein, fachlich korrekt = immer richtig" },
          { id: "c", text: "Kommt auf die Situation an" },
          { id: "d", text: "Bin mir nicht sicher" },
        ],
        seedResponses: [
          { text: "Ja, Fachlichkeit allein reicht nicht", count: 28, highlight: true },
          { text: "Kommt auf die Situation an", count: 22 },
          { text: "Bin mir nicht sicher", count: 12 },
          { text: "Nein, fachlich korrekt = immer richtig", count: 6 },
        ],
        totalVotes: 68,
        fazit: "Die Mehrheit sagt 'Ja' — und hat recht! Genau deshalb brauchen wir neben Fachkompetenz auch ethische Kompetenz. Das Zusammenspiel lernst du jetzt.",
        fazitB1: "Die Mehrheit sagt 'Ja'. Und hat recht! Deshalb brauchen wir Fachkompetenz UND ethische Kompetenz. Das lernst du jetzt.",
      },
    },
  },

  // =============================================================
  // Step 2: text (analogy) — Handlungskompetenz als Drei-Bein-Hocker
  // =============================================================
  {
    stepId: "le01-s4-tx-02",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.47–48", "Transfer"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 6,
    displayFormat: "analogy",
    bildhinweis: "Drei-Bein-Hocker mit den drei Beinen beschriftet: Fachkompetenz, Sozialkompetenz, Personale Kompetenz. Wenn ein Bein fehlt, kippt der Hocker.",
    bildkategorie: "szene",
    contentC1: {
      title: "Der Drei-Bein-Hocker",
      body: "Stell dir Handlungskompetenz wie einen Hocker mit drei Beinen vor. Die drei Beine sind: **Fachkompetenz** (Wissen und Können), **Sozialkompetenz** (mit Menschen arbeiten) und **Personale Kompetenz** (sich selbst reflektieren). Fehlt ein Bein, kippt der Hocker. Du kannst fachlich brillant sein — aber ohne Einfühlungsvermögen erreichst du den Patienten nicht. Du kannst empathisch sein — aber ohne Fachwissen gefährdest du ihn.",
    },
    contentB1: {
      title: "Der Drei-Bein-Hocker",
      body: "Stell dir einen Hocker mit drei Beinen vor. Die drei Beine sind: **Fachkompetenz** (= Fachwissen und Können), **Sozialkompetenz** (= gut mit Menschen arbeiten) und **Personale Kompetenz** (= sich selbst kennen und prüfen). Wenn ein Bein fehlt, kippt der Hocker. Du kannst viel wissen. Aber ohne Einfühlung erreichst du den Patienten nicht. Du kannst einfühlsam sein. Aber ohne Fachwissen ist der Patient in Gefahr.",
    },
  },

  // =============================================================
  // Step 3: categorize — Fach- vs. Personal- vs. Sozialkompetenz
  // =============================================================
  {
    stepId: "le01-s4-ca-03",
    phase: "s4",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.47–48", "Transfer"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Welche Kompetenz ist das?",
      body: "Sortiere die Beispiele in die drei Kompetenzdimensionen. Manche Beispiele sind nicht eindeutig — entscheide nach dem Schwerpunkt.",
    },
    contentB1: {
      title: "Welche Kompetenz ist das?",
      body: "Sortiere die Beispiele in die drei Gruppen. Manche Beispiele passen nicht eindeutig. Entscheide nach dem Schwerpunkt.",
    },
    question: {
      fragetext: "Ordne jedes Beispiel der passenden Kompetenz zu.",
      categories: [
        { name: "Fachkompetenz" },
        { name: "Sozialkompetenz" },
        { name: "Personale Kompetenz" },
      ],
      categoryItems: [
        { text: "Pflegefachsprache korrekt verwenden", correctCategory: 0 },
        { text: "Einen Konflikt im Team konstruktiv lösen", correctCategory: 1 },
        { text: "Eigene Grenzen erkennen und Hilfe holen", correctCategory: 2 },
        { text: "Wissen aus Medizin, Psychologie und Recht anwenden", correctCategory: 0 },
        { text: "Einfühlungsvermögen gegenüber Pflegeempfängern", correctCategory: 1 },
        { text: "Die eigene Pflegehandlung kritisch reflektieren", correctCategory: 2 },
        { text: "Kooperation im interdisziplinären Team", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Step 4: reveal — Der ICN-Ethikkodex: 4 Bereiche
  // =============================================================
  {
    stepId: "le01-s4-rv-04",
    phase: "s4",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.24"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 6,
    contentC1: {
      title: "Der ICN-Ethikkodex — Tippe zum Aufdecken",
      body: "Seit 1953 definiert der ICN-Ethikkodex die ethischen Pflichten von Pflegefachkräften weltweit. Er wurde seitdem mehrfach überarbeitet und umfasst 4 Bereiche.",
    },
    contentB1: {
      title: "Der ICN-Ethikkodex — Tippe zum Aufdecken",
      body: "Seit 1953 gibt es den ICN-Ethikkodex (= ethische Regeln für die Pflege). Er gilt für Pflege-Fachkräfte weltweit. Er hat 4 Bereiche.",
    },
    question: {
      fragetext: "Tippe auf jeden Bereich, um mehr zu erfahren.",
      reveal: {
        instruction: "Tippe auf jeden Bereich, um mehr zu erfahren.",
        revealMode: "free",
        cards: [
          {
            id: "r1",
            label: "Pflegende und ihre Mitmenschen",
            content: "Die Pflegefachkraft ist persönlich dafür verantwortlich, Pflege auszuüben und ihr Wissen aktuell zu halten. Sie achtet auf die Menschenwürde und Rechte aller Personen.",
            contentB1: "Die Pflege-Fachkraft ist persönlich verantwortlich. Sie übt Pflege aus und hält ihr Wissen aktuell. Sie achtet auf die Würde aller Menschen.",
          },
          {
            id: "r2",
            label: "Pflegende und die Berufsausübung",
            content: "Die Pflegefachkraft übt ihren Beruf gewissenhaft aus, achtet auf Qualitätsstandards und hält sich an die Berufsordnung.",
            contentB1: "Die Pflege-Fachkraft arbeitet gewissenhaft. Sie achtet auf Qualitäts-Standards. Sie hält sich an die Berufs-Ordnung.",
          },
          {
            id: "r3",
            label: "Pflegende und die Profession",
            content: "Die Pflegefachkraft trägt zur Weiterentwicklung der Pflegewissenschaft und des Berufsstandes bei.",
            contentB1: "Die Pflege-Fachkraft hilft mit, Pflege-Wissenschaft und den Beruf weiterzuentwickeln.",
          },
          {
            id: "r4",
            label: "Pflegende und ihre Kolleg*innen",
            content: "Die Pflegefachkraft pflegt kooperative Beziehungen mit Kolleg*innen und greift ein, wenn die Sicherheit von Pflegeempfängern gefährdet ist.",
            contentB1: "Die Pflege-Fachkraft arbeitet gut mit Kollegen zusammen. Sie greift ein, wenn die Sicherheit von Patienten in Gefahr ist.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: mc — Die 4 ethischen Prinzipien
  // =============================================================
  {
    stepId: "le01-s4-mc-05",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.753–754"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 11,
    contentC1: {
      title: "4 Prinzipien der Ethik",
      body: "Ethisches Handeln in der Pflege basiert auf 4 Prinzipien nach Beauchamp und Childress. Diese Prinzipien helfen dir, schwierige Situationen zu analysieren.",
    },
    contentB1: {
      title: "4 Prinzipien der Ethik",
      body: "Ethisches Handeln in der Pflege hat 4 Prinzipien (= Grundregeln). Sie kommen von Beauchamp und Childress. Sie helfen dir bei schwierigen Situationen.",
    },
    question: {
      fragetext: "Welches der folgenden ist KEIN Prinzip nach Beauchamp und Childress?",
      optionen: [
        {
          text: "Autonomie (Selbstbestimmung)",
          isCorrect: false,
          explanation: "Autonomie ist eines der 4 Prinzipien — es bedeutet, dass der Patient selbst entscheiden darf.",
          explanationB1: "Autonomie ist eines der 4 Prinzipien. Es bedeutet: Der Patient entscheidet selbst.",
        },
        {
          text: "Fürsorge (Wohl des Pflegeempfängers)",
          isCorrect: false,
          explanation: "Fürsorge ist eines der 4 Prinzipien — das Wohl des Patienten steht im Vordergrund.",
          explanationB1: "Fürsorge ist eines der 4 Prinzipien. Das Wohl des Patienten ist wichtig.",
        },
        {
          text: "Effizienz (schnellstmögliche Behandlung)",
          isCorrect: true,
          explanation: "Richtig! Effizienz ist kein ethisches Prinzip nach Beauchamp und Childress. Die 4 Prinzipien sind: Autonomie, Fürsorge, Gerechtigkeit und Nicht-Schaden. Effizienz kann sogar im Konflikt mit ethischen Prinzipien stehen.",
          explanationB1: "Richtig! Effizienz (= Schnelligkeit) ist kein ethisches Prinzip. Die 4 Prinzipien sind: Autonomie, Fürsorge, Gerechtigkeit und Nicht-Schaden.",
        },
        {
          text: "Gerechtigkeit (gleiche Versorgung für alle)",
          isCorrect: false,
          explanation: "Gerechtigkeit ist eines der 4 Prinzipien — alle Patienten haben Anrecht auf gleiche Versorgung.",
          explanationB1: "Gerechtigkeit ist eines der 4 Prinzipien. Alle Patienten sollen gleich gut versorgt werden.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: branching — Ethisches Dilemma: Patient will Behandlung abbrechen
  // =============================================================
  {
    stepId: "le01-s4-br-06",
    phase: "s4",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.753–754", "Transfer"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Herr R. will nicht mehr",
      body: "Markus T. (34) erlebt im Ethik-Unterricht folgendes Fallbeispiel: Ein Dialysepatient, Herr R. (62), möchte die Behandlung abbrechen. Er sagt: 'Ich bin müde. Ich will nicht mehr.' Seine Frau bittet die Pflegenden: 'Bitte überzeugen Sie meinen Mann!' Markus ist überrascht: 'Darf er das? Müssen wir ihn davon abhalten?'",
    },
    contentB1: {
      title: "Herr R. will nicht mehr",
      body: "Markus T. (34) ist im Ethik-Unterricht. Es geht um diesen Fall: Herr R. (62) ist Dialyse-Patient (= sein Blut wird regelmäßig gewaschen). Er will die Behandlung stoppen. Er sagt: 'Ich bin müde. Ich will nicht mehr.' Seine Frau bittet die Pflegenden: 'Bitte überzeugen Sie meinen Mann!' Markus fragt: 'Darf er das? Müssen wir ihn stoppen?'",
    },
    question: {
      fragetext: "Was würdest du in dieser Situation tun?",
      branchingOptions: [
        {
          text: "'Herr R. hat das Recht, die Behandlung abzubrechen. Wir müssen seinen Willen respektieren.'",
          feedback: "Richtig — Autonomie ist ein zentrales ethisches Prinzip. Aber die Situation ist komplex. Es braucht ein ausführliches Gespräch, um sicherzustellen, dass Herr R. informiert entscheidet.",
          feedbackB1: "Richtig! Autonomie ist sehr wichtig. Aber die Situation ist komplex. Man braucht ein ausführliches Gespräch. Herr R. soll eine informierte Entscheidung treffen.",
          isCorrect: true,
        },
        {
          text: "'Wir müssen Herrn R. überzeugen, weiterzumachen. Es geht um sein Leben!'",
          feedback: "Du handelst aus Fürsorge — das ist verständlich. Aber Fürsorge darf nicht über die Autonomie des Patienten gestellt werden. Herr R. hat das Recht auf Selbstbestimmung, auch wenn seine Entscheidung aus medizinischer Sicht riskant ist.",
          feedbackB1: "Du denkst an Herrn R. Das ist gut. Aber Fürsorge darf nicht wichtiger sein als Autonomie (= Selbstbestimmung). Herr R. darf selbst entscheiden. Auch wenn es riskant ist.",
          isCorrect: false,
        },
        {
          text: "'Das ist eine ärztliche Entscheidung. Wir informieren den Arzt.'",
          feedback: "Den Arzt zu informieren ist richtig — aber es ist keine rein ärztliche Entscheidung. Ethische Fragen betreffen das gesamte Team. Und letztlich entscheidet der Patient.",
          feedbackB1: "Den Arzt zu informieren ist richtig. Aber es ist nicht nur eine ärztliche Entscheidung. Ethische Fragen betreffen das ganze Team. Und der Patient entscheidet letztlich selbst.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 7: wordorder — Berufsordnung: Satz richtig ordnen
  // =============================================================
  {
    stepId: "le01-s4-wo-07",
    phase: "s4",
    stepType: "wordorder",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.46"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Die Berufsordnung — Satz zusammensetzen",
      body: "Die Rahmenberufsordnung des Deutschen Pflegerats definiert, wie Pflegende ihren Beruf ausüben sollen. Bringe den Satz in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Die Berufsordnung — Satz zusammensetzen",
      body: "Die Rahmen-Berufsordnung (= Grundregeln für den Beruf) kommt vom Deutschen Pflegerat. Sie sagt, wie Pflegende arbeiten sollen. Bringe den Satz in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Ordne die Wortgruppen zum richtigen Satz.",
      wordorder: {
        instruction: "Ordne die Wortgruppen zum richtigen Satz.",
        words: [
          "Pflegende",
          "sollen ihren Beruf",
          "entsprechend dem allgemein anerkannten Stand",
          "pflegewissenschaftlicher, medizinischer",
          "und weiterer bezugswissenschaftlicher",
          "Erkenntnisse ausüben",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        hint: "Der Satz beschreibt die Pflicht zur evidenzbasierten Arbeit.",
      },
    },
  },

  // =============================================================
  // Step 8: confidence — Ethische Prinzipien anwenden
  // =============================================================
  {
    stepId: "le01-s4-cf-08",
    phase: "s4",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.24", "I Care Pflege S.753"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Wie sicher bist du?",
      body: "Ethische Fragen haben selten einfache Antworten. Wie sicher bist du bei diesen Aussagen?",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Ethische Fragen haben selten einfache Antworten. Wie sicher bist du bei diesen Aussagen?",
    },
    question: {
      fragetext: "Ist die Aussage richtig? Wie sicher bist du?",
      confidenceCards: [
        {
          statement: "Berufsverbände können bei Verstößen gegen die Berufsordnung Konsequenzen veranlassen.",
          statementB1: "Berufsverbände können Strafen verhängen, wenn jemand gegen die Berufsordnung verstößt.",
          isTrue: false,
          explanation: "Falsch. Berufsverbände können das derzeit nicht — die Berufsordnung ist hauptsächlich eine Selbstverpflichtung. Pflegekammern hingegen können Disziplinarverfahren einleiten.",
          explanationB1: "Falsch! Berufsverbände können keine Strafen verhängen. Die Berufsordnung ist eine freiwillige Selbstverpflichtung. Nur Pflegekammern können Disziplinar-Verfahren einleiten.",
        },
        {
          statement: "Die 4 ethischen Prinzipien nach Beauchamp und Childress sind: Autonomie, Fürsorge, Gerechtigkeit und Nicht-Schaden.",
          statementB1: "Die 4 ethischen Prinzipien von Beauchamp und Childress sind: Autonomie, Fürsorge, Gerechtigkeit und Nicht-Schaden.",
          isTrue: true,
          explanation: "Richtig! Diese vier Prinzipien bilden die Grundlage für ethisches Denken und Handeln in der Pflege.",
          explanationB1: "Richtig! Diese vier Prinzipien sind die Grundlage für ethisches Denken in der Pflege.",
        },
        {
          statement: "Der ICN-Ethikkodex wurde erstmals 1953 formuliert.",
          statementB1: "Der ICN-Ethikkodex wurde zum ersten Mal im Jahr 1953 geschrieben.",
          isTrue: true,
          explanation: "Richtig! Seit 1953 definiert der ICN-Ethikkodex die ethischen Pflichten von Pflegefachkräften weltweit.",
          explanationB1: "Richtig! Seit 1953 gibt es den ICN-Ethikkodex. Er gilt für Pflege-Fachkräfte auf der ganzen Welt.",
        },
      ],
    },
  },

  // =============================================================
  // Step 9: text (interview) — Markus über Ethik
  // =============================================================
  {
    stepId: "le01-s4-tx-09",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 6,
    displayFormat: "interview",
    contentC1: {
      title: "Interview mit Markus",
      body: "**Frage:** Was hat dich am Ethik-Unterricht am meisten überrascht?\n\n**Markus T. (34):** 'Ich dachte, Pflege ist Waschen und Essen bringen. Mann, lag ich daneben. Die ethischen Fragen — die hauen mich um. In der Technik gibt es für jedes Problem eine Lösung. In der Pflege gibt es manchmal nur ein ‚Es kommt darauf an'.'\n\n**Frage:** Gibt es eine Situation, die dich besonders beschäftigt hat?\n\n**Markus:** 'Der Dialysepatient. Darf er aufhören? Muss ich ihn retten? Meine Ex-Frau sagt: ‚Natürlich muss man ihn retten!' Aber die Dozentin hat gesagt: Autonomie bedeutet, dass jeder Mensch selbst entscheiden darf — auch wenn wir die Entscheidung nicht verstehen.'",
    },
    contentB1: {
      title: "Interview mit Markus",
      body: "**Frage:** Was hat dich im Ethik-Unterricht am meisten überrascht?\n\n**Markus T. (34):** 'Ich dachte, Pflege ist Waschen und Essen bringen. Da lag ich falsch! Die ethischen Fragen sind schwer. In der Technik gibt es für jedes Problem eine Lösung. In der Pflege manchmal nur: ‚Es kommt darauf an'.'\n\n**Frage:** Gibt es eine Situation, die dich beschäftigt hat?\n\n**Markus:** 'Der Dialyse-Patient. Darf er aufhören? Muss ich ihn retten? Die Dozentin hat gesagt: Autonomie bedeutet: Jeder Mensch darf selbst entscheiden. Auch wenn wir die Entscheidung nicht verstehen.'",
    },
  },

  // =============================================================
  // Step 10: timer — Ethik-Blitz-Quiz
  // =============================================================
  {
    stepId: "le01-s4-tm-10",
    phase: "s4",
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.24", "I Care Pflege S.47–48", "I Care Pflege S.753"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-ethik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Ethik-Blitz!",
      body: "4 Fragen, 60 Sekunden. Beantworte so viele wie möglich — schnell und korrekt!",
    },
    contentB1: {
      title: "Ethik-Blitz!",
      body: "4 Fragen in 60 Sekunden. Beantworte so viele wie möglich. Schnell und richtig!",
    },
    question: {
      fragetext: "Wähle die richtige Antwort!",
      timeLimitSeconds: 60,
      timerQuestions: [
        {
          question: "Welches ethische Prinzip meint 'Selbstbestimmung des Patienten'?",
          options: ["Autonomie", "Fürsorge", "Gerechtigkeit", "Nicht-Schaden"],
          correctIndex: 0,
        },
        {
          question: "Wer hat den ICN-Ethikkodex formuliert?",
          options: ["International Council of Nurses", "WHO", "Deutscher Pflegerat", "Pflegekammer"],
          correctIndex: 0,
        },
        {
          question: "Handlungskompetenz hat wie viele Dimensionen?",
          options: ["3", "2", "4", "5"],
          correctIndex: 0,
        },
        {
          question: "Was gehört NICHT zur Sozialkompetenz?",
          options: ["Fachsprache beherrschen", "Teamfähigkeit", "Einfühlungsvermögen", "Konfliktlösebereitschaft"],
          correctIndex: 0,
        },
      ],
    },
  },

  // =============================================================
  // Step 11: freetext — Ethisch richtig und fachlich richtig
  // =============================================================
  {
    stepId: "le01-s4-ft-11",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.753–754", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Dein ethischer Kompass",
      body: "Du hast die 4 ethischen Prinzipien kennengelernt und ein ethisches Dilemma durchgespielt. Ethik in der Pflege ist nie schwarz-weiß — aber die Prinzipien geben dir Orientierung.",
    },
    contentB1: {
      title: "Dein ethischer Kompass",
      body: "Du kennst jetzt die 4 ethischen Prinzipien. Du hast ein Dilemma (= schwierige Entscheidung) durchgespielt. Ethik in der Pflege ist nie einfach. Aber die Prinzipien helfen dir.",
    },
    question: {
      fragetext: "Beschreibe eine Situation, in der du (im Alltag oder in der Pflege) zwischen zwei 'richtigen' Handlungen wählen musstest. Welches ethische Prinzip hat dir bei der Entscheidung geholfen — oder hätte helfen können?",
      musterantwort: "Im Praktikum wollte eine Bewohnerin nicht aufstehen. Ich wusste, dass Mobilisation wichtig ist (Fürsorge). Aber sie hat klar gesagt: 'Lassen Sie mich in Ruhe.' Ich habe ihre Autonomie respektiert und es später nochmal versucht — mit einem Kompromiss: Sitzen am Bettrand statt Aufstehen. So konnte ich Fürsorge und Autonomie verbinden.",
      bewertungskriterien: [
        "Konkrete Situation beschrieben",
        "Mindestens 1 ethisches Prinzip benannt",
        "Reflexion über die Abwägung",
      ],
      satzanfaengeB1: [
        "In dieser Situation musste ich ...",
        "Das ethische Prinzip, das mir geholfen hat, war ...",
        "Ich habe mich entschieden für ...",
      ],
    },
  },
];
