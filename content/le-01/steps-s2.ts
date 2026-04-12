// Session 2 (Pfad 2): "Was macht Pflege zur Profession?" — LE-01 Personen- und situationsorientiert professionell pflegen
// Kapitel 2 (Definitionen, Profession) + Kapitel 3 (Pflegeverständnis)
// Bloom: B1–B3, 11 Steps
// Leitfall: Fatma K. (71)

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // ================================================================
  // Step 1: crowdPoll — Beruf oder Berufung?
  // ================================================================
  {
    stepId: "le01-s2-cp-01",
    phase: "s2",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Beruf oder Berufung?",
      body: "Manche sagen: \"Pflege ist kein Beruf, sondern Berufung.\" Andere sagen: \"Pflege ist eine Profession mit wissenschaftlicher Grundlage.\" Was denkst du?",
    },
    contentB1: {
      title: "Beruf oder Berufung?",
      body: "Manche sagen: \"Pflege ist Berufung. Man muss es im Herzen fühlen.\" Andere sagen: \"Pflege ist eine Profession (= anerkannter Beruf) mit Wissenschaft.\" Was denkst du?",
    },
    question: {
      fragetext: "Ist Pflege ein Beruf oder eine Berufung?",
      crowdPoll: {
        question: "Ist Pflege ein Beruf oder eine Berufung?",
        questionB1: "Ist Pflege ein Beruf oder eine Berufung?",
        inputType: "choice",
        options: [
          { id: "a", text: "Eher Berufung — man muss es im Herzen spüren", textB1: "Eher Berufung — man muss es im Herzen spüren" },
          { id: "b", text: "Eher Beruf — wie jeder andere auch", textB1: "Eher Beruf — wie jeder andere Beruf" },
          { id: "c", text: "Beides — Herzblut UND professionelles Wissen", textB1: "Beides — Herzblut UND professionelles Wissen" },
          { id: "d", text: "Weder noch — es ist einfach Arbeit", textB1: "Weder noch — es ist einfach Arbeit" },
        ],
        seedResponses: [
          { text: "Beides — Herzblut UND professionelles Wissen", count: 31, highlight: true },
          { text: "Eher Berufung — man muss es im Herzen spüren", count: 19 },
          { text: "Eher Beruf — wie jeder andere auch", count: 14 },
          { text: "Weder noch — es ist einfach Arbeit", count: 4 },
        ],
        totalVotes: 68,
        fazit: "Die Mehrheit sagt \"Beides\" — und liegt damit nah an der Wahrheit. Pflege IST eine Profession mit klaren Merkmalen. Und gleichzeitig braucht sie Empathie und Haltung. Was genau eine Profession ausmacht, schauen wir uns jetzt an.",
        fazitB1: "Die meisten sagen \"Beides\" — und das stimmt. Pflege ist eine Profession mit klaren Merkmalen. Und sie braucht Empathie. Das lernen wir jetzt.",
      },
    },
  },

  // ================================================================
  // Step 2: text (scenario) — Fatma und die \"richtige Schwester\"
  // ================================================================
  {
    stepId: "le01-s2-tx-02",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce03-le01-kommunikation",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 5,
    contentC1: {
      title: "\"Ich verstehe, ob jemand es gut meint\"",
      body: "Fatma K. (71) liegt auf der inneren Station. Als der Arzt von \"antibiotischer Therapie und Sputumkontrolle\" spricht, nickt sie — versteht aber nichts. Erst als Pflegefachkraft Ayşe ihr auf Türkisch erklärt, was passiert, entspannt sich Fatma: \"Mein Mann hat immer gesagt: Wenn du krank bist, brauchst du jemanden, der dein Herz versteht, nicht nur deinen Körper.\"",
    },
    contentB1: {
      title: "\"Ich verstehe, ob jemand es gut meint\"",
      body: "Fatma K. (71) liegt im Krankenhaus. Der Arzt spricht von \"antibiotischer Therapie\" und \"Sputum-Kontrolle\". Fatma nickt. Aber sie versteht nichts. Dann erklärt Pflegefachkraft Ayşe ihr alles auf Türkisch. Fatma entspannt sich. Sie sagt: \"Mein Mann hat immer gesagt: Wenn du krank bist, brauchst du jemanden, der dein Herz versteht.\"",
    },
    question: {
      fragetext: "Lies die Szene aufmerksam.",
    },
  },

  // ================================================================
  // Step 3: comparison — ICN- vs. WHO-Definition
  // ================================================================
  {
    stepId: "le01-s2-cp-03",
    phase: "s2",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Zwei Definitionen — ein Beruf",
      body: "Was ist Pflege eigentlich? Zwei der wichtigsten Definitionen kommen vom ICN (International Council of Nurses) und von der WHO. Beide betonen unterschiedliche Aspekte.",
    },
    contentB1: {
      title: "Zwei Definitionen — ein Beruf",
      body: "Was ist Pflege? Es gibt zwei wichtige Definitionen. Eine kommt vom ICN (= Internationaler Rat der Pflege). Die andere kommt von der WHO (= Welt-Gesundheits-Organisation). Beide beschreiben Pflege etwas anders.",
    },
    question: {
      fragetext: "Vergleiche die beiden Definitionen. Was fällt dir auf?",
      comparison: {
        instruction: "Vergleiche die beiden Definitionen. Was fällt dir auf?",
        columns: [
          { label: "ICN-Definition" },
          { label: "WHO-Definition" },
        ],
        rows: [
          {
            criterion: "Fokus",
            values: [
              "Eigenverantwortliche Versorgung und Betreuung",
              "Physisches, psychisches und soziales Potenzial bestimmen und verwirklichen",
            ],
            valuesB1: [
              "Eigenverantwortliche Versorgung (= selbständige Pflege)",
              "Körperliches, seelisches und soziales Potenzial bestimmen und verwirklichen",
            ],
          },
          {
            criterion: "Zielgruppe",
            values: [
              "Menschen aller Altersgruppen, Familien, Gruppen, Gemeinschaften",
              "Einzelne Menschen, Familien, ganze Gruppen",
            ],
            valuesB1: [
              "Menschen jeden Alters, Familien, Gruppen",
              "Einzelne Menschen, Familien, ganze Gruppen",
            ],
          },
          {
            criterion: "Gesundheitszustand",
            values: [
              "Ob krank oder gesund, in allen Lebenssituationen",
              "Keine Einschränkung",
            ],
            valuesB1: [
              "Ob krank oder gesund — egal",
              "Keine Einschränkung",
            ],
          },
          {
            criterion: "Betonung",
            values: [
              "Eigenverantwortlichkeit der Pflege",
              "Gesellschaftlicher Auftrag",
            ],
            valuesB1: [
              "Pflege ist selbständig und eigenverantwortlich",
              "Pflege hat einen gesellschaftlichen Auftrag",
            ],
            highlight: 0,
          },
        ],
      },
    },
  },

  // ================================================================
  // Step 4: categorize — Merkmale einer Profession
  // ================================================================
  {
    stepId: "le01-s2-ca-04",
    phase: "s2",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23–24"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Profession oder kein Merkmal?",
      body: "Eine Profession ist mehr als ein Beruf. Sie muss bestimmte Merkmale erfüllen. Sortiere: Welche Aussagen sind Merkmale einer Profession — und welche nicht?",
    },
    contentB1: {
      title: "Profession oder kein Merkmal?",
      body: "Eine Profession (= anerkannter Beruf) ist mehr als ein normaler Beruf. Sie hat bestimmte Merkmale. Sortiere: Was ist ein Merkmal? Was ist kein Merkmal?",
    },
    question: {
      fragetext: "Ordne jede Aussage der richtigen Kategorie zu.",
      categories: [
        { name: "Merkmal einer Profession" },
        { name: "Kein Merkmal einer Profession" },
      ],
      categoryItems: [
        { text: "Wissen auf wissenschaftlicher Grundlage", correctCategory: 0 },
        { text: "Kontrollierter Berufszugang durch Abschlussprüfung", correctCategory: 0 },
        { text: "Man muss es im Herzen spüren", correctCategory: 1 },
        { text: "Verbindliche Berufsrichtlinien wie der ICN-Ethikkodex", correctCategory: 0 },
        { text: "Mindestens 10 Jahre Berufserfahrung", correctCategory: 1 },
        { text: "Autonomie des Berufsstands", correctCategory: 0 },
        { text: "Gesellschaftliche Relevanz", correctCategory: 0 },
      ],
    },
  },

  // ================================================================
  // Step 5: fillin — ICN-Definition ergänzen
  // ================================================================
  {
    stepId: "le01-s2-fi-05",
    phase: "s2",
    stepType: "fillin",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Die ICN-Definition — Lückentext",
      body: "Die ICN-Definition von Pflege ist international die bekannteste. Kannst du die Lücken füllen?",
    },
    contentB1: {
      title: "Die ICN-Definition — Lückentext",
      body: "Die ICN-Definition ist die bekannteste Definition von Pflege. Kannst du die Lücken füllen?",
    },
    question: {
      fragetext: "Setze die richtigen Wörter ein.",
      fillin: {
        sentence: "Pflege umfasst die _____ Versorgung und Betreuung — allein oder in _____ mit anderen Berufsangehörigen — von Menschen aller _____, von Familien oder Lebensgemeinschaften sowie von Gruppen und sozialen Gemeinschaften, ob krank oder _____.",
        options: ["eigenverantwortliche", "Kooperation", "Altersgruppen", "gesund"],
        correctIndex: 0,
      },
    },
  },

  // ================================================================
  // Step 6: text (analogy) — Pflege vs. Laienpflege
  // ================================================================
  {
    stepId: "le01-s2-tx-06",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.26"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "analogy",
    xpValue: 6,
    contentC1: {
      title: "Profi vs. Laie — wie beim Autofahren",
      body: "Stell dir vor, du hast einen Motorschaden. Dein Nachbar kennt sich \"ein bisschen mit Autos aus\" und will helfen. Oder du gehst zum KFZ-Meister mit Ausbildung, Werkzeug und Erfahrung. Ähnlich ist es bei der Pflege: Angehörige pflegen aus Liebe und Erfahrung. Professionelle Pflege basiert auf Ausbildung, wissenschaftlichen Grundlagen und einem Berufskodex. Beides ist wertvoll — aber nicht dasselbe. 4 Merkmale trennen berufliche Pflege von Laienpflege: (1) Abschluss einer pflegerischen Ausbildung, (2) tarifliches Gehalt, (3) wissenschaftliche Grundlagen, (4) Berufsbild und Berufskodex.",
    },
    contentB1: {
      title: "Profi vs. Laie — wie beim Autofahren",
      body: "Stell dir vor: Dein Auto ist kaputt. Dein Nachbar kennt sich \"ein bisschen aus\". Oder du gehst zum KFZ-Meister mit Ausbildung und Werkzeug. Bei der Pflege ist es ähnlich. Angehörige pflegen aus Liebe. Aber professionelle Pflege hat eine Ausbildung, Wissenschaft und einen Berufs-Kodex (= Regeln für den Beruf). Beides ist wertvoll. Aber es ist nicht dasselbe. 4 Merkmale: (1) Pflege-Ausbildung, (2) Gehalt nach Tarif, (3) Wissenschaft, (4) Berufsbild und Kodex.",
    },
    question: {
      fragetext: "Lies die Analogie aufmerksam.",
    },
  },

  // ================================================================
  // Step 7: text (quote) — Pflegeverständnis im Wandel
  // ================================================================
  {
    stepId: "le01-s2-tx-07",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.27"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "quote",
    xpValue: 6,
    contentC1: {
      title: "Vom Bauchgefühl zur Wissenschaft",
      body: "\"In meiner Kultur fragt man nicht ‚Was haben Sie?' — man fragt ‚Wie geht es Ihrem Herzen?'\" — Fatma K. (71). Fatmas Zitat zeigt: Pflegeverständnis ist individuell geprägt — durch Kultur, Erfahrung und Generation. Bis in die 1950er wurde Pflege eher intuitiv ausgeübt (Motivation: Nächstenliebe). In den 60er-/70er-Jahren vereinheitlichten sich Methoden. Nach 1980 setzte Professionalisierung ein — Pflegewissenschaft als eigene Disziplin.",
    },
    contentB1: {
      title: "Vom Bauchgefühl zur Wissenschaft",
      body: "\"In meiner Kultur fragt man nicht ‚Was haben Sie?' Man fragt ‚Wie geht es Ihrem Herzen?'\" — Fatma K. (71). Fatmas Zitat zeigt: Jeder Mensch versteht Pflege anders. Das hängt von der Kultur, der Erfahrung und dem Alter ab. Bis in die 1950er pflegten Menschen nach Gefühl. Ab den 1960er-Jahren kamen feste Methoden. Nach 1980 wurde Pflege eine eigene Wissenschaft.",
    },
    question: {
      fragetext: "Lies das Zitat und den Kontext aufmerksam.",
    },
  },

  // ================================================================
  // Step 8: swipe — Aussagen zu professioneller Pflege
  // ================================================================
  {
    stepId: "le01-s2-sw-08",
    phase: "s2",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23", "I Care Pflege S.26–27"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Stimmt das? Wische richtig!",
      body: "Professionelle Pflege hat klare Merkmale. Aber es gibt auch Mythen. Wische nach rechts für \"stimmt\" und nach links für \"stimmt nicht\".",
    },
    contentB1: {
      title: "Stimmt das? Wische richtig!",
      body: "Professionelle Pflege hat klare Merkmale. Aber es gibt auch falsche Ideen. Wische nach rechts für \"stimmt\". Wische nach links für \"stimmt nicht\".",
    },
    question: {
      fragetext: "Stimmt die Aussage — oder nicht?",
      swipe: {
        instruction: "Wische nach rechts für \"stimmt\", nach links für \"stimmt nicht\".",
        cards: [
          {
            statement: "Berufliche Pflege unterscheidet sich von Laienpflege u. a. durch eine abgeschlossene Ausbildung.",
            statementB1: "Berufliche Pflege ist anders als Laienpflege — z. B. durch eine Ausbildung.",
            isCorrect: true,
            explanation: "Richtig! Eine abgeschlossene Ausbildung ist eines der 4 Merkmale, die berufliche von Laienpflege unterscheiden.",
            explanationB1: "Richtig! Eine Ausbildung ist ein wichtiges Merkmal der beruflichen Pflege.",
          },
          {
            statement: "Pflege ist nur dann professionell, wenn sie im Krankenhaus stattfindet.",
            statementB1: "Pflege ist nur professionell, wenn sie im Krankenhaus stattfindet.",
            isCorrect: false,
            explanation: "Falsch! Professionelle Pflege findet in allen Settings statt — ambulant, stationär, Langzeitpflege.",
            explanationB1: "Falsch! Professionelle Pflege gibt es überall — zu Hause, im Krankenhaus, im Pflegeheim.",
          },
          {
            statement: "Ende 2017 waren in Deutschland 3,4 Millionen Menschen pflegebedürftig.",
            statementB1: "Ende 2017 brauchten in Deutschland 3,4 Millionen Menschen Pflege.",
            isCorrect: true,
            explanation: "Richtig! Ende 2017 waren 3,4 Millionen Menschen in Deutschland pflegebedürftig.",
            explanationB1: "Richtig! Ende 2017 brauchten 3,4 Millionen Menschen in Deutschland Pflege.",
          },
          {
            statement: "Vorbehaltene Tätigkeiten dürfen auch an Pflegehelfer delegiert werden.",
            statementB1: "Vorbehaltene Tätigkeiten darf man auch an Pflege-Helfer abgeben.",
            isCorrect: false,
            explanation: "Falsch! Vorbehaltene Tätigkeiten nach § 4 PflBG dürfen NUR von Pflegefachkräften durchgeführt werden.",
            explanationB1: "Falsch! Vorbehaltene Tätigkeiten darf laut § 4 PflBG NUR die Pflege-Fachkraft machen.",
          },
          {
            statement: "Pflegeverständnis wird auch durch den kulturellen Hintergrund beeinflusst.",
            statementB1: "Pflegeverständnis wird auch durch die Kultur beeinflusst.",
            isCorrect: true,
            explanation: "Richtig! Wie Menschen Pflege verstehen, ist durch Kultur, Erfahrung und Generation geprägt — das zeigt Fatmas Geschichte.",
            explanationB1: "Richtig! Wie man Pflege versteht, hängt auch von der Kultur ab — wie Fatmas Geschichte zeigt.",
          },
        ],
      },
    },
  },

  // ================================================================
  // Step 9: memory — Fachbegriffe rund um Profession (vertiefung)
  // ================================================================
  {
    stepId: "le01-s2-me-09",
    phase: "s2",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23", "I Care Pflege S.27"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Memory — Finde die Paare!",
      body: "Finde die passenden Paare: Fachbegriff und Definition. Merke dir die Positionen!",
    },
    contentB1: {
      title: "Memory — Finde die Paare!",
      body: "Finde die Paare: Ein Fachbegriff und seine Erklärung. Merke dir, wo die Karten liegen!",
    },
    question: {
      fragetext: "Decke zwei Karten auf, die zusammengehören.",
      memoryPairs: [
        { a: "Profession", b: "Beruf mit wissenschaftlicher Grundlage und Ethikkodex" },
        { a: "Professionalisierung", b: "Weiterentwicklung eines Berufs zur Profession" },
        { a: "Pflegeverständnis", b: "Wie eine Person oder Institution Pflege auffasst" },
        { a: "Berufsverständnis", b: "Haltung und Normen einer ganzen Berufsgruppe" },
        { a: "Pflegeleitbild", b: "Verbindlicher Organisationsrahmen einer Einrichtung" },
        { a: "Vorbehaltene Tätigkeiten", b: "Nur von Pflegefachkräften durchführbar" },
      ],
    },
  },

  // ================================================================
  // Step 10: estimation — Zahlen zur Pflege in Deutschland
  // ================================================================
  {
    stepId: "le01-s2-et-10",
    phase: "s2",
    stepType: "estimation",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.26"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-profession",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 17,
    contentC1: {
      title: "Schätze mal!",
      body: "Pflege betrifft Millionen Menschen in Deutschland. Aber wie viele genau? Schätze!",
    },
    contentB1: {
      title: "Schätze mal!",
      body: "Pflege betrifft viele Millionen Menschen in Deutschland. Wie viele genau? Rate mal!",
    },
    question: {
      fragetext: "Wie viele Menschen waren Ende 2017 in Deutschland pflegebedürftig?",
      estimation: {
        instruction: "Wie viele Menschen waren Ende 2017 in Deutschland pflegebedürftig?",
        unit: "Menschen",
        correctValue: 3400000,
        tolerance: 20,
        funFact: "Das entspricht etwa der Einwohnerzahl von Berlin!",
        explanation: "Ende 2017 waren 3,4 Millionen Menschen in Deutschland pflegebedürftig. Davon wurden 1,76 Millionen allein von Angehörigen zu Hause gepflegt. In 2 von 3 Fällen sind es Frauen, die pflegen.",
        explanationB1: "Ende 2017 brauchten 3,4 Millionen Menschen in Deutschland Pflege. 1,76 Millionen davon wurden nur von Angehörigen zu Hause gepflegt. Meistens sind es Frauen, die pflegen.",
      },
    },
  },

  // ================================================================
  // Step 11: freetext — Was unterscheidet dich von pflegenden Angehörigen?
  // ================================================================
  {
    stepId: "le01-s2-ft-11",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23", "I Care Pflege S.26"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Dein Unterschied",
      body: "1,76 Millionen Pflegebedürftige werden in Deutschland allein von Angehörigen gepflegt — ohne Ausbildung, oft ohne Unterstützung. Du wirst bald Pflegefachperson sein.",
    },
    contentB1: {
      title: "Dein Unterschied",
      body: "1,76 Millionen Menschen in Deutschland werden nur von Angehörigen gepflegt. Die Angehörigen haben keine Ausbildung. Sie bekommen oft keine Hilfe. Du wirst bald Pflegefachperson sein.",
    },
    question: {
      fragetext: "Was unterscheidet deine zukünftige Arbeit als Pflegefachperson von der eines pflegenden Angehörigen? Nenne mindestens 3 Unterschiede.",
      musterantwort: "Professionelle Pflege basiert auf einer abgeschlossenen Ausbildung mit wissenschaftlicher Grundlage. Pflegefachkräfte arbeiten nach einem Berufskodex (ICN-Ethikkodex) und erhalten tarifliches Gehalt. Sie können vorbehaltene Tätigkeiten durchführen (Pflegebedarfserhebung, Prozesssteuerung, Qualitätssicherung). Angehörige pflegen aus Liebe und Verantwortung, aber ohne formale Qualifikation.",
      bewertungskriterien: [
        "Min. 3 Unterschiede",
        "Bezug auf Ausbildung/Wissenschaft/Ethik",
        "Respektvoller Ton gegenüber Laienpflege",
      ],
      satzanfaengeB1: [
        "Als Pflegefachperson habe ich ...",
        "Ein Angehöriger pflegt aus ...",
        "Der Unterschied ist ...",
      ],
    },
  },
];
