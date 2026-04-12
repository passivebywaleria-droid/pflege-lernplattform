// Session 1 (Pfad 1): "Pflege gestern und heute" — LE-01 Personen- und situationsorientiert professionell pflegen
// Kapitel 1: Geschichte der Pflege
// Bloom: B1–B3, 9 Steps
// Leitfall: Lina M. (16)

import type { ContentStep, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-01",
  ceId: "ce-01",
  title: "Personen- und situationsorientiert professionell pflegen",
  titleShort: "Professionell pflegen",
  zeitrichtwert: 40,
  sessionCount: 6,
  geschaetzteLernzeit: { c1: 30, b1: 40 },
  kompetenzbereiche: ["KB-V.1"],
  bloomStufen: [1, 2, 3],
  voraussetzungen: [],
  leitfall: {
    name: "Lina M.",
    alter: 16,
    beruf: "Pflegeschülerin",
    diagnose: "Ausbildungsbeginn, erster Praxistag",
    setting: "Pflegeschule und Krankenhaus",
    kernproblem: "Orientierung im neuen Beruf, Rollenverständnis",
  },
  glossarCount: 25,
  quellenCount: 3,
};

export const STEPS_S1: ContentStep[] = [
  // ================================================================
  // Step 1: crowdPoll — Einstieg: Seit wann gibt es Pflege?
  // ================================================================
  {
    stepId: "le01-s1-cp-01",
    phase: "s1",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.20–22"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Was denkst du?",
      body: "Pflege gab es schon immer — aber seit wann ist sie ein anerkannter Beruf? Was glaubst du?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Pflege gab es schon immer. Aber seit wann ist Pflege ein richtiger Beruf? Was glaubst du?",
    },
    question: {
      fragetext: "Was denkst du — seit wann gibt es Pflege als Beruf?",
      crowdPoll: {
        question: "Was denkst du — seit wann gibt es Pflege als Beruf?",
        questionB1: "Was denkst du: Seit wann gibt es Pflege als Beruf?",
        inputType: "freetext",
        placeholder: "Schreibe deine Vermutung...",
        seedResponses: [
          { text: "Seit dem Mittelalter", count: 18 },
          { text: "Seit Florence Nightingale, ca. 1860", count: 24, highlight: true },
          { text: "Schon in der Antike", count: 12 },
          { text: "Seit es Krankenhäuser gibt", count: 8 },
          { text: "Seit dem 20. Jahrhundert", count: 6 },
        ],
        totalVotes: 68,
        fazit: "Spannend — Pflege als Tätigkeit gibt es seit der Antike, als anerkannter Beruf aber erst seit gut 100 Jahren. Genau diese Geschichte schauen wir uns jetzt an!",
      },
    },
  },

  // ================================================================
  // Step 2: timeline — Meilensteine der Pflegegeschichte
  // ================================================================
  {
    stepId: "le01-s1-tl-02",
    phase: "s1",
    stepType: "timeline",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.20–22", "I Care Pflege S.38"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Die Geschichte der Pflege — eine Zeitreise",
      body: "Von den ersten Erwähnungen in der Antike bis zum PflBG 2020 — die Pflege hat einen langen Weg hinter sich. Erkunde die wichtigsten Meilensteine.",
    },
    contentB1: {
      title: "Die Geschichte der Pflege — eine Zeitreise",
      body: "Die Pflege hat eine lange Geschichte. Sie beginnt in der Antike. Sie geht bis heute. Schau dir die wichtigsten Ereignisse an.",
    },
    question: {
      fragetext: "Scrolle durch die Zeitleiste und lies die Meilensteine.",
      timeline: {
        instruction: "Scrolle durch die Zeitleiste und lies die Meilensteine.",
        events: [
          {
            id: "ev-01",
            time: "~500 v. Chr.",
            title: "Indien: Erste Pflegefachkräfte",
            description: "Erste Erwähnung von Pflegefachkräften als Berufsgruppe neben Ärzten in Indien.",
            descriptionB1: "In Indien werden Pflege-Fachkräfte zum ersten Mal als eigene Berufsgruppe erwähnt — neben Ärzten.",
          },
          {
            id: "ev-02",
            time: "Ab 1845",
            title: "Florence Nightingale",
            description: "Florence Nightingale hospitiert in der Kaiserswerther Diakonie, pflegt im Krimkrieg, veröffentlicht 1859 \"Notes on Nursing\".",
            descriptionB1: "Florence Nightingale arbeitet in einem Krankenhaus in Kaiserswerth. Sie pflegt im Krimkrieg. 1859 schreibt sie das erste Pflege-Fachbuch: \"Notes on Nursing\".",
          },
          {
            id: "ev-03",
            time: "1860",
            title: "Erste Schwesternschule Englands",
            description: "Nightingale gründet die erste Schwesternschule Englands.",
            descriptionB1: "Nightingale gründet in England die erste Schule für Pflegerinnen.",
          },
          {
            id: "ev-04",
            time: "1903",
            title: "Agnes Karll",
            description: "Agnes Karll fordert dreijährige Ausbildung, gründet erste Berufsorganisation Deutschlands.",
            descriptionB1: "Agnes Karll fordert eine 3-jährige Ausbildung für Pflegekräfte. Sie gründet den ersten Pflege-Berufsverband in Deutschland.",
          },
          {
            id: "ev-05",
            time: "1906",
            title: "Staatliche Prüfung in Preußen",
            description: "Preußen führt staatliche Prüfung ein — Pflege wird gesetzlich anerkannter Beruf.",
            descriptionB1: "In Preußen gibt es jetzt eine staatliche Prüfung für Pflegepersonen. Pflege wird ein anerkannter Beruf.",
            highlight: true,
          },
          {
            id: "ev-06",
            time: "1933–1945",
            title: "NS-Zeit",
            description: "Berufsverbände werden gleichgeschaltet, Pflegekräfte im \"Euthanasie\"-Programm beteiligt.",
            descriptionB1: "In der NS-Zeit kommen Berufsverbände unter NS-Kontrolle. Pflege-Kräfte helfen beim \"Euthanasie\"-Programm — Ermordung kranker Menschen.",
          },
          {
            id: "ev-07",
            time: "2020",
            title: "PflBG tritt in Kraft",
            description: "PflBG tritt in Kraft: Generalistische Pflegeausbildung.",
            descriptionB1: "Das PflBG (= Pflege-Berufe-Gesetz) tritt in Kraft. Es gibt jetzt eine einheitliche Ausbildung für alle Pflege-Bereiche.",
            highlight: true,
          },
        ],
      },
    },
  },

  // ================================================================
  // Step 3: matching — Personen und ihre Leistungen
  // ================================================================
  {
    stepId: "le01-s1-ma-03",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.21", "I Care Pflege S.23"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Wer hat was geleistet?",
      body: "Die Pflegegeschichte wurde von mutigen Persönlichkeiten geprägt. Ordne die Personen ihren wichtigsten Leistungen zu.",
    },
    contentB1: {
      title: "Wer hat was geleistet?",
      body: "Mutige Menschen haben die Pflege verändert. Ordne die Personen ihren Leistungen zu.",
    },
    question: {
      fragetext: "Verbinde die Person mit ihrer Leistung.",
      matchingPairs: [
        {
          left: "Florence Nightingale",
          right: "\"Notes on Nursing\" (1859) und erste Schwesternschule Englands (1860)",
        },
        {
          left: "Agnes Karll",
          right: "Erste Berufsorganisation Deutschlands und Forderung einer 3-jährigen Ausbildung",
        },
        {
          left: "ICN",
          right: "Internationaler Zusammenschluss von Pflegeberufsverbänden weltweit",
        },
      ],
    },
  },

  // ================================================================
  // Step 4: text (scenario) — Lina erlebt Geschichte im Unterricht
  // ================================================================
  {
    stepId: "le01-s1-tx-04",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.22"],
    track: "basis",
    modus: "story",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "scenario",
    xpValue: 6,
    contentC1: {
      title: "Linas Geschichtsstunde",
      body: "Lina M. (16) sitzt im Pflegetheorie-Unterricht. Heute geht es um die NS-Zeit und die Rolle der Pflege. Lina ist geschockt: \"Pflegekräfte haben dabei mitgemacht? Die sollten doch helfen!\" Ihre Dozentin antwortet: \"Genau deshalb gibt es heute einen Ethikkodex — damit so etwas nie wieder passiert.\"",
    },
    contentB1: {
      title: "Linas Geschichtsstunde",
      body: "Lina M. (16) ist im Unterricht. Das Thema ist die NS-Zeit und die Pflege. Lina ist geschockt. Sie fragt: \"Pflege-Kräfte haben dabei mitgemacht? Sie sollten doch helfen!\" Die Dozentin sagt: \"Deshalb gibt es heute einen Ethikkodex (= Regeln für richtiges Handeln). So etwas darf nie wieder passieren.\"",
    },
    question: {
      fragetext: "Lies die Szene aufmerksam.",
    },
  },

  // ================================================================
  // Step 5: mc — Die dunkle Seite der Geschichte
  // ================================================================
  {
    stepId: "le01-s1-mc-05",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.22"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 11,
    contentC1: {
      title: "Die Pflege in der NS-Zeit",
      body: "Die NS-Zeit ist ein dunkles Kapitel der Pflegegeschichte. Es ist wichtig, diese Geschichte zu kennen — damit wir daraus lernen.",
    },
    contentB1: {
      title: "Die Pflege in der NS-Zeit",
      body: "Die NS-Zeit ist ein dunkles Kapitel der Pflege-Geschichte. Wir müssen diese Geschichte kennen. So können wir daraus lernen.",
    },
    question: {
      fragetext: "Was geschah mit Pflegeberufsverbänden im Nationalsozialismus?",
      optionen: [
        {
          text: "Sie wurden verboten und vollständig aufgelöst",
          isCorrect: false,
          explanation: "Nicht ganz richtig! Die Verbände wurden nicht aufgelöst, sondern unter NS-Führung gestellt — man nennt das \"Gleichschaltung\". Pflegekräfte bereiteten Patienten für den Transport in \"Heil- und Pflegeanstalten\" vor, wo sie ermordet wurden. Deshalb ist Berufsethik heute so wichtig.",
          explanationB1: "Nicht ganz! Die Verbände wurden nicht aufgelöst. Sie kamen unter NS-Kontrolle. Das nennt man \"Gleichschaltung\". Deshalb ist Berufsethik heute sehr wichtig.",
        },
        {
          text: "Sie wurden unter NS-Führung gestellt (Gleichschaltung)",
          isCorrect: true,
          explanation: "Genau. Die Berufsverbände wurden gleichgeschaltet, also unter NS-Kontrolle gestellt. Pflegekräfte wurden im \"Euthanasie\"-Programm eingesetzt — ein wichtiger Grund, warum Berufsethik heute so zentral ist.",
          explanationB1: "Genau! Die Verbände kamen unter NS-Kontrolle. Man nennt das \"Gleichschaltung\". Pflege-Kräfte halfen beim \"Euthanasie\"-Programm (= Ermordung kranker Menschen). Deshalb ist Berufsethik heute so wichtig.",
        },
        {
          text: "Sie blieben vollständig unabhängig und autonom",
          isCorrect: false,
          explanation: "Nicht richtig! Die Verbände blieben nicht unabhängig. Sie wurden unter NS-Führung gestellt — sogenannte \"Gleichschaltung\". Pflegekräfte wurden im \"Euthanasie\"-Programm eingesetzt. Deshalb ist Berufsethik heute so wichtig.",
          explanationB1: "Nicht richtig! Die Verbände blieben nicht unabhängig. Sie kamen unter NS-Kontrolle (Gleichschaltung). Deshalb ist Berufsethik heute sehr wichtig.",
        },
        {
          text: "Sie wurden durch neue Ärztekammern vollständig ersetzt",
          isCorrect: false,
          explanation: "Nicht richtig! Die Verbände wurden nicht durch Ärztekammern ersetzt, sondern unter NS-Führung gestellt. Man nennt das \"Gleichschaltung\". Pflegekräfte wurden im \"Euthanasie\"-Programm eingesetzt.",
          explanationB1: "Nicht richtig! Die Verbände wurden nicht durch Ärztekammern ersetzt. Sie kamen unter NS-Kontrolle (Gleichschaltung). Deshalb ist Berufsethik heute sehr wichtig.",
        },
      ],
    },
  },

  // ================================================================
  // Step 6: swipe — Fakten und Mythen zur Pflegegeschichte
  // ================================================================
  {
    stepId: "le01-s1-sw-06",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.20–22"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Stimmt das? Wische richtig!",
      body: "Teste dein Wissen über die Pflegegeschichte. Wische nach rechts für \"stimmt\" und nach links für \"stimmt nicht\".",
    },
    contentB1: {
      title: "Stimmt das? Wische richtig!",
      body: "Teste dein Wissen über die Pflege-Geschichte. Wische nach rechts für \"stimmt\". Wische nach links für \"stimmt nicht\".",
    },
    question: {
      fragetext: "Stimmt die Aussage — oder nicht?",
      swipe: {
        instruction: "Wische nach rechts für \"stimmt\", nach links für \"stimmt nicht\".",
        cards: [
          {
            statement: "Florence Nightingale gründete die erste Schwesternschule in Deutschland.",
            statementB1: "Florence Nightingale gründete die erste Schwestern-Schule in Deutschland.",
            isCorrect: false,
            explanation: "Falsch! Sie gründete die erste Schwesternschule in England (1860). In Deutschland hospitierte sie in Kaiserswerth.",
            explanationB1: "Falsch! Sie gründete die Schule in England (1860). In Deutschland war sie in Kaiserswerth.",
          },
          {
            statement: "Agnes Karll wurde 1907 Präsidentin des ICN.",
            statementB1: "Agnes Karll wurde 1907 Präsidentin des ICN.",
            isCorrect: true,
            explanation: "Richtig! Agnes Karll vertrat die deutsche Pflege international und wurde ICN-Präsidentin.",
            explanationB1: "Richtig! Agnes Karll vertrat die deutsche Pflege international.",
          },
          {
            statement: "1906 wurde Pflege in Preußen ein gesetzlich geregelter Beruf.",
            statementB1: "1906 wurde Pflege in Preußen ein gesetzlich geregelter Beruf.",
            isCorrect: true,
            explanation: "Richtig! Preußen führte Vorschriften über die staatliche Prüfung von Pflegepersonen ein.",
            explanationB1: "Richtig! In Preußen gab es jetzt eine staatliche Prüfung für Pflege-Kräfte.",
          },
          {
            statement: "Ca. 500 v. Chr. werden in Griechenland erstmals Pflegefachkräfte erwähnt.",
            statementB1: "Ca. 500 v. Chr. werden in Griechenland erstmals Pflege-Fachkräfte erwähnt.",
            isCorrect: false,
            explanation: "Falsch! Die erste Erwähnung stammt aus Indien, nicht Griechenland.",
            explanationB1: "Falsch! Die erste Erwähnung stammt aus Indien — nicht aus Griechenland.",
          },
          {
            statement: "Im NS-Regime waren Pflegekräfte am Euthanasie-Programm beteiligt.",
            statementB1: "Im NS-Regime waren Pflege-Kräfte am Euthanasie-Programm beteiligt.",
            isCorrect: true,
            explanation: "Richtig! Pflegekräfte bereiteten Patienten für den Transport vor.",
            explanationB1: "Richtig! Pflege-Kräfte halfen, Patienten in Anstalten zu bringen, wo diese ermordet wurden.",
          },
        ],
      },
    },
  },

  // ================================================================
  // Step 7: flipcard — Schlüsselbegriffe der Pflegegeschichte (vertiefung)
  // ================================================================
  {
    stepId: "le01-s1-fc-07",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.21–22"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 5,
    contentC1: {
      title: "Wichtige Begriffe — dreh die Karten um!",
      body: "Hinter jeder Karte steckt ein Schlüsselbegriff der Pflegegeschichte. Tippe auf die Karte, um mehr zu erfahren.",
    },
    contentB1: {
      title: "Wichtige Begriffe — dreh die Karten um!",
      body: "Hinter jeder Karte ist ein wichtiger Begriff. Tippe auf die Karte. Dann siehst du die Erklärung.",
    },
    question: {
      fragetext: "Tippe auf eine Karte, um sie umzudrehen.",
      flipcard: {
        instruction: "Tippe auf eine Karte, um sie umzudrehen.",
        cards: [
          {
            front: "Kaiserswerther Diakonie",
            back: "Einrichtung in Düsseldorf, in der Florence Nightingale 1845 hospitierte. Damals eines der wenigen Krankenhäuser mit pflegerischer Ausbildung.",
            backB1: "Ein Krankenhaus in Düsseldorf. Hier arbeitete Florence Nightingale 1845. Es war eines der ersten Häuser mit Pflege-Ausbildung.",
          },
          {
            front: "Notes on Nursing",
            back: "1859 von Florence Nightingale veröffentlichtes Grundlagenwerk. Gilt als erstes Pflegefachbuch — Nightingale wird daher als erste Pflegetheoretikerin bezeichnet.",
            backB1: "Ein Buch von Florence Nightingale aus dem Jahr 1859. Es ist das erste Pflege-Fachbuch. Deshalb nennt man Nightingale die erste Pflege-Theoretikerin.",
          },
          {
            front: "DBfK",
            back: "Deutscher Berufsverband für Pflegeberufe — hervorgegangen aus der Berufsorganisation, die Agnes Karll 1903 gründete.",
            backB1: "Der Deutsche Berufsverband für Pflegeberufe. Er entstand aus dem Verband, den Agnes Karll 1903 gründete.",
          },
          {
            front: "Gleichschaltung",
            back: "Im NS-Regime wurden Berufsverbände unter NS-Führung gestellt. Pflegerische Eigenständigkeit wurde zerstört.",
            backB1: "In der NS-Zeit kamen alle Berufsverbände unter NS-Kontrolle. Die Pflege konnte nicht mehr selbständig handeln.",
          },
        ],
      },
    },
  },

  // ================================================================
  // Step 8: confidence — Was weißt du über die Pflegegeschichte?
  // ================================================================
  {
    stepId: "le01-s1-cf-08",
    phase: "s1",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.21"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-geschichte",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Bist du dir sicher?",
      body: "Bei diesen Aussagen geht es nicht nur um richtig oder falsch — sondern auch darum, wie sicher du dir bist. Schätze dich ehrlich ein!",
    },
    contentB1: {
      title: "Bist du dir sicher?",
      body: "Es geht nicht nur um richtig oder falsch. Es geht auch darum: Wie sicher bist du? Schätze dich ehrlich ein!",
    },
    question: {
      fragetext: "Ist die Aussage richtig? Wie sicher bist du?",
      confidenceCards: [
        {
          statement: "Die staatliche Prüfung für Pflegepersonen wurde 1906 in Preußen eingeführt.",
          statementB1: "Die staatliche Prüfung für Pflege-Personen wurde 1906 in Preußen eingeführt.",
          isTrue: true,
          explanation: "Richtig! 1906 führte Preußen die staatliche Prüfung für Pflegepersonen ein.",
          explanationB1: "Richtig! 1906 gab es die erste staatliche Prüfung für Pflege-Personen in Preußen.",
        },
        {
          statement: "Florence Nightingale war die Gründerin des ICN.",
          statementB1: "Florence Nightingale war die Gründerin des ICN.",
          isTrue: false,
          explanation: "Falsch! Agnes Karll wurde ICN-Präsidentin. Der ICN wurde 1899 gegründet, Nightingale war nicht Gründerin.",
          explanationB1: "Falsch! Agnes Karll wurde ICN-Präsidentin. Der ICN wurde 1899 gegründet — Nightingale war nicht dabei.",
        },
        {
          statement: "Agnes Karll forderte eine dreijährige Ausbildung für Pflegerinnen.",
          statementB1: "Agnes Karll forderte eine 3-jährige Ausbildung für Pflegerinnen.",
          isTrue: true,
          explanation: "Richtig! Agnes Karll kämpfte für eine dreijährige Ausbildung und professionelle Anerkennung der Pflege.",
          explanationB1: "Richtig! Agnes Karll wollte eine 3-jährige Ausbildung für alle Pflegenden.",
        },
      ],
    },
  },

  // ================================================================
  // Step 9: reflection — Was können wir aus der Geschichte lernen?
  // ================================================================
  {
    stepId: "le01-s1-rf-09",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.20–22"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Dein Blick zurück — und nach vorn",
      body: "Du hast die Geschichte der Pflege kennengelernt — von der Antike bis heute. Nightingale und Karll haben für die Professionalisierung gekämpft. Die NS-Zeit zeigt, was passiert, wenn ethische Grenzen fehlen.",
    },
    contentB1: {
      title: "Dein Blick zurück — und nach vorn",
      body: "Du kennst jetzt die Geschichte der Pflege. Nightingale und Karll haben für den Beruf gekämpft. Die NS-Zeit zeigt: Ohne ethische Regeln passieren schlimme Dinge.",
    },
    question: {
      fragetext: "Was können wir heute aus der Geschichte der Pflege lernen? Denke an Nightingale, Karll und die NS-Zeit.",
      reflection: {
        prompt: "Was können wir heute aus der Geschichte der Pflege lernen? Denke an Nightingale, Karll und die NS-Zeit.",
        placeholder: "Schreibe mindestens 3 Sätze...",
        systemPrompt: "Bewerte die Reflexion: Bezug auf min. 2 historische Ereignisse, Nennung einer Lehre für heute, eigene Reflexion erkennbar. Musterantwort: Die Geschichte zeigt, dass Pflege als eigenständiger Beruf erkämpft werden musste. Nightingale und Karll haben bewiesen, dass Ausbildung und wissenschaftliche Grundlagen nötig sind. Die NS-Zeit lehrt uns, dass ohne Berufsethik und kritisches Denken Pflegekräfte missbraucht werden können. Deshalb ist der ICN-Ethikkodex heute so wichtig.",
      },
      bewertungskriterien: [
        "Bezug auf min. 2 historische Ereignisse",
        "Nennung einer Lehre für heute",
        "Eigene Reflexion erkennbar",
      ],
    },
  },
];
