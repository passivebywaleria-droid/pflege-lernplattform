// Pfad 6: Selbstpflege — auch du zählst (Kapitel 9)
// LE-01: Personen- und situationsorientiert professionell pflegen
// Themen: Belastungsfaktoren, Stressbewältigung (kurz-/langfristig), 4-6-8-Atmung, PMR, Eisenhower-Matrix
// Leitfälle: Lina M. (16), Markus T. (34)
// Bloom: B1–B3, 10 Steps

import type { ContentStep } from "../_types";

export const STEPS_S6: ContentStep[] = [
  // =============================================================
  // Step 1: crowdPoll — Wie gestresst bist du?
  // =============================================================
  {
    stepId: "le01-s6-cp-01",
    phase: "s6",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.56", "Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Stress-Check",
      body: "Bevor wir über Selbstpflege sprechen — eine ehrliche Frage an dich. Stress gehört zum Pflegeberuf, aber auch zum Alltag von Auszubildenden. Wo stehst du gerade?",
    },
    contentB1: {
      title: "Stress-Check",
      body: "Bevor wir über Selbstpflege sprechen: Eine ehrliche Frage an dich. Stress gehört zum Pflege-Beruf. Auch in der Ausbildung gibt es Stress. Wo stehst du gerade?",
    },
    question: {
      fragetext: "Wie gestresst fühlst du dich gerade auf einer Skala von 1–10?",
      crowdPoll: {
        question: "Wie gestresst fühlst du dich gerade auf einer Skala von 1–10?",
        questionB1: "Wie gestresst fühlst du dich gerade? (1–10)",
        inputType: "choice",
        options: [
          { id: "a", text: "1–3: Entspannt, alles gut" },
          { id: "b", text: "4–6: Mittel, geht so" },
          { id: "c", text: "7–8: Ziemlich gestresst" },
          { id: "d", text: "9–10: Am Limit" },
        ],
        seedResponses: [
          { text: "4–6: Mittel, geht so", count: 28, highlight: true },
          { text: "7–8: Ziemlich gestresst", count: 20 },
          { text: "1–3: Entspannt, alles gut", count: 14 },
          { text: "9–10: Am Limit", count: 6 },
        ],
        totalVotes: 68,
        fazit:
          "Die meisten landen bei 4–6 — das ist normal, aber nicht optimal. Selbstpflege ist kein Luxus, sondern professionelle Pflicht. Denn wer sich selbst nicht pflegt, kann andere nicht gut pflegen. Genau darum geht es in diesem Pfad.",
        fazitB1:
          "Die meisten landen bei 4–6. Das ist normal. Aber nicht optimal. Selbstpflege ist keine Schwäche — sie ist professionelle Pflicht. Wer sich selbst nicht pflegt, kann andere nicht gut pflegen.",
      },
    },
  },

  // =============================================================
  // Step 2: text (checklist) — Belastungsfaktoren im Pflegeberuf
  // =============================================================
  {
    stepId: "le01-s6-tx-02",
    phase: "s6",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.56–63"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 5,
    displayFormat: "checklist",
    contentC1: {
      title: "Was belastet Pflegekräfte?",
      body: "Pflegefachkräfte arbeiten unter hoher körperlicher und psychischer Belastung. Erkennst du dich wieder?\n\n✅ Rückenschmerzen durch Heben und Tragen\n✅ Schichtarbeit mit sozialem Jetlag\n✅ Emotionale Belastung durch Leid und Tod\n✅ Zeitdruck und Personalmangel\n✅ Konflikte im Team oder mit Angehörigen\n✅ Burnout-Gefährdung — in Pflegeberufen überdurchschnittlich hoch",
    },
    contentB1: {
      title: "Was belastet Pflegekräfte?",
      body: "Pflege-Fachkräfte haben viel Stress. Körperlich und seelisch. Erkennst du dich wieder?\n\n✅ Rücken-Schmerzen durch Heben und Tragen\n✅ Schicht-Arbeit stört den Schlaf-Rhythmus\n✅ Traurige Erlebnisse mit kranken und sterbenden Menschen\n✅ Zeitdruck und zu wenig Personal\n✅ Konflikte im Team oder mit Angehörigen\n✅ Burnout (= totale Erschöpfung) — bei Pflege-Kräften besonders häufig",
    },
  },

  // =============================================================
  // Step 3: swipe — Stressbewältigung: Hilfreich oder nicht?
  // =============================================================
  {
    stepId: "le01-s6-sw-03",
    phase: "s6",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.75", "I Care Pflege S.77", "Transfer"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Hilfreich oder nicht? Wische richtig!",
      body: "Es gibt viele Strategien gegen Stress — aber nicht alle sind hilfreich. Wische nach rechts für 'hilfreich' und nach links für 'nicht hilfreich'.",
    },
    contentB1: {
      title: "Hilfreich oder nicht? Wische richtig!",
      body: "Es gibt viele Methoden gegen Stress. Aber nicht alle helfen wirklich. Wische nach rechts für 'hilfreich'. Wische nach links für 'nicht hilfreich'.",
    },
    question: {
      fragetext: "Ist diese Strategie langfristig hilfreich?",
      swipe: {
        instruction: "Wische nach rechts für hilfreich, nach links für nicht hilfreich.",
        cards: [
          {
            statement: "Regelmäßig Sport treiben (Joggen, Schwimmen)",
            statementB1: "Regelmäßig Sport machen (Joggen, Schwimmen)",
            isCorrect: true,
            explanation:
              "Hilfreich! Körperliche Bewegung ist eine der effektivsten langfristigen Methoden gegen Stress.",
            explanationB1:
              "Hilfreich! Körperliche Bewegung ist eine der besten Methoden gegen Stress auf Dauer.",
          },
          {
            statement: "Probleme mit Alkohol 'runterspülen'",
            statementB1: "Stress mit Alkohol vergessen",
            isCorrect: false,
            explanation:
              "Nicht hilfreich! Alkohol verschleiert Probleme kurzfristig, verstärkt sie aber langfristig.",
            explanationB1:
              "Nicht hilfreich! Alkohol hilft kurz. Aber er macht die Probleme langfristig schlimmer.",
          },
          {
            statement: "Die 4-6-8-Atemtechnik anwenden",
            statementB1: "Die 4-6-8-Atemtechnik machen",
            isCorrect: true,
            explanation:
              "Hilfreich! 4 Sekunden einatmen, 6 Sekunden halten, 8 Sekunden ausatmen — senkt sofort den Stresslevel.",
            explanationB1:
              "Hilfreich! 4 Sekunden einatmen. 6 Sekunden halten. 8 Sekunden ausatmen. Das senkt den Stress sofort.",
          },
          {
            statement: "Progressive Muskelentspannung nach Jacobson",
            statementB1: "Progressive Muskelentspannung (PMR) nach Jacobson",
            isCorrect: true,
            explanation:
              "Hilfreich! Abwechselndes Anspannen und Entspannen einzelner Muskelgruppen — leicht erlernbar, steigert Wohlbefinden.",
            explanationB1:
              "Hilfreich! Du spannst einzelne Muskeln an — dann entspannst du sie. Das ist leicht zu lernen. Es hilft langfristig.",
          },
          {
            statement: "Stress ignorieren und einfach weitermachen",
            statementB1: "Stress ignorieren und weitermachen",
            isCorrect: false,
            explanation:
              "Nicht hilfreich! Unterdrückter Stress führt langfristig zu Burnout.",
            explanationB1:
              "Nicht hilfreich! Unterdrückter Stress führt langfristig zu Burnout (= totale Erschöpfung).",
          },
          {
            statement: "Positives Selbstgespräch und Wahrnehmungslenkung",
            statementB1: "Positiv mit sich selbst reden und Gedanken lenken",
            isCorrect: true,
            explanation:
              "Hilfreich! Kurzfristige Stressbewältigung durch bewusste Gedankensteuerung.",
            explanationB1:
              "Hilfreich! Du lenkst deine Gedanken bewusst in eine positive Richtung. Das hilft sofort.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 4: timer — 4-6-8-Atemübung live
  // =============================================================
  {
    stepId: "le01-s6-tm-04",
    phase: "s6",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.75"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 18,
    contentC1: {
      title: "Jetzt du — Atemübung!",
      body: "Die 4-6-8-Atemtechnik ist eine der schnellsten Methoden, um Stress abzubauen. Probiere es jetzt aus — 3 Durchgänge.",
    },
    contentB1: {
      title: "Jetzt du — Atemübung!",
      body: "Die 4-6-8-Atemtechnik hilft schnell gegen Stress. Probiere es jetzt aus! Du machst 3 Durchgänge.",
    },
    question: {
      fragetext:
        "Folge dem Timer: 4 Sekunden einatmen → 6 Sekunden halten → 8 Sekunden ausatmen. 3 Durchgänge.",
      timeLimitSeconds: 54,
      timerQuestions: [
        {
          question: "Wie viele Sekunden atmet man bei der 4-6-8-Technik ein?",
          options: ["4 Sekunden", "6 Sekunden", "8 Sekunden", "3 Sekunden"],
          correctIndex: 0,
        },
        {
          question: "Wie viele Sekunden hält man die Luft bei der 4-6-8-Technik an?",
          options: ["6 Sekunden", "4 Sekunden", "8 Sekunden", "5 Sekunden"],
          correctIndex: 0,
        },
        {
          question: "Wie viele Sekunden atmet man bei der 4-6-8-Technik aus?",
          options: ["8 Sekunden", "4 Sekunden", "6 Sekunden", "10 Sekunden"],
          correctIndex: 0,
        },
      ],
    },
  },

  // =============================================================
  // Step 5: matrix — Eisenhower-Matrix: Aufgaben sortieren
  // =============================================================
  {
    stepId: "le01-s6-mx-05",
    phase: "s6",
    stepType: "matrix",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.73", "Transfer"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 24,
    contentC1: {
      title: "Eisenhower-Matrix — Was zuerst?",
      body: "Markus T. (34) hat viel um die Ohren: Prüfungsvorbereitung, Spätdienste, Emma abholen, Sport. Die Eisenhower-Methode hilft, Prioritäten zu setzen: 4 Quadranten nach Dringlichkeit und Wichtigkeit.",
    },
    contentB1: {
      title: "Eisenhower-Matrix — Was zuerst?",
      body: "Markus T. (34) hat viel zu tun: Prüfung vorbereiten, Spätdienste, Emma abholen, Sport. Die Eisenhower-Methode hilft. Man sortiert Aufgaben in 4 Gruppen: nach Dringlichkeit (= wie eilig?) und Wichtigkeit (= wie wichtig?).",
    },
    question: {
      fragetext: "Ordne die Aufgaben in die richtige Kategorie der Eisenhower-Matrix.",
      matrix: {
        instruction: "Ordne die Aufgaben in die richtige Kategorie der Eisenhower-Matrix.",
        axisX: { label: "Dringlichkeit", low: "nicht dringend", high: "dringend" },
        axisY: { label: "Wichtigkeit", low: "nicht wichtig", high: "wichtig" },
        items: [
          {
            id: "m1",
            text: "Prüfung morgen — noch nicht gelernt",
            correctQuadrant: 1,
          },
          {
            id: "m2",
            text: "Regelmäßig Sport für Rückengesundheit",
            correctQuadrant: 2,
          },
          {
            id: "m3",
            text: "Kollegin fragt, ob du ihre Schicht übernimmst",
            correctQuadrant: 3,
          },
          {
            id: "m4",
            text: "Social-Media-Feed durchscrollen",
            correctQuadrant: 4,
          },
          {
            id: "m5",
            text: "Emma vom Kindergarten abholen",
            correctQuadrant: 1,
          },
          {
            id: "m6",
            text: "Wochenendausflug planen",
            correctQuadrant: 2,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: flipcard — Langfristige Methoden
  // =============================================================
  {
    stepId: "le01-s6-fc-06",
    phase: "s6",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.77"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 5,
    contentC1: {
      title: "Langfristige Entspannung — dreh die Karten um!",
      body: "Kurzfristige Methoden helfen im Moment. Aber für dauerhafte Stressbewältigung brauchst du langfristige Strategien. Lerne sie kennen!",
    },
    contentB1: {
      title: "Langfristige Entspannung — dreh die Karten um!",
      body: "Kurzfristige Methoden helfen sofort. Aber du brauchst auch langfristige Methoden. Sie helfen auf Dauer. Lerne sie kennen!",
    },
    question: {
      fragetext: "Tippe auf eine Karte.",
      flipcard: {
        instruction: "Tippe auf eine Karte, um sie umzudrehen.",
        shuffled: true,
        cards: [
          {
            front: "Progressive Muskelentspannung (PMR)",
            back: "Technik nach Jacobson: Abwechselndes Anspannen (5–7 Sek.) und Entspannen einzelner Muskelgruppen. Leicht erlernbar, wissenschaftlich belegt, steigert Wohlbefinden.",
            backB1:
              "Technik von Jacobson: Du spannst Muskeln an (5–7 Sekunden). Dann entspannst du sie. Das ist leicht zu lernen. Es hilft wirklich.",
          },
          {
            front: "Yoga",
            back: "Kombination aus Körperübungen, Atemtechniken und Meditation. Verbessert Flexibilität, reduziert Stresshormone.",
            backB1:
              "Yoga kombiniert Körper-Übungen, Atem-Techniken und Meditation. Es macht dich flexibler. Es reduziert Stress-Hormone.",
          },
          {
            front: "Qigong / Tai-Chi",
            back: "Langsame, fließende Bewegungen mit Atemkontrolle. Aus der traditionellen chinesischen Medizin. Fördert Balance und innere Ruhe.",
            backB1:
              "Langsame, fließende Bewegungen mit Atem-Kontrolle. Kommt aus der chinesischen Medizin. Fördert Balance und innere Ruhe.",
          },
          {
            front: "Regelmäßige Bewegung",
            back: "Joggen, Walken, Schwimmen — mindestens 3× pro Woche 30 Minuten. Eine der effektivsten Methoden gegen chronischen Stress.",
            backB1:
              "Joggen, Walken, Schwimmen — mindestens 3 Mal pro Woche, 30 Minuten. Eine der besten Methoden gegen dauerhaften Stress.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: sorting — Kurzfristig vs. Langfristig
  // =============================================================
  {
    stepId: "le01-s6-so-07",
    phase: "s6",
    stepType: "sorting",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.75", "I Care Pflege S.77"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 22,
    contentC1: {
      title: "Kurzfristig oder langfristig?",
      body: "Stressbewältigung hat zwei Zeitebenen: Sofort wirksam (kurzfristig) und nachhaltig (langfristig). Sortiere richtig!",
    },
    contentB1: {
      title: "Kurzfristig oder langfristig?",
      body: "Es gibt zwei Arten von Stress-Methoden. Kurzfristig = hilft sofort. Langfristig = hilft auf Dauer. Sortiere richtig!",
    },
    question: {
      fragetext: "Ordne jede Methode der richtigen Kategorie zu.",
      sortItems: [
        "4-6-8-Atemtechnik",
        "Positives Selbstgespräch",
        "Gedankenstopp",
        "Wahrnehmungslenkung",
        "Joggen",
        "Progressive Muskelentspannung (PMR)",
        "Yoga",
        "Qigong/Tai-Chi",
      ],
    },
  },

  // =============================================================
  // Step 8: slider — Selbsteinschätzung Work-Life-Balance
  // =============================================================
  {
    stepId: "le01-s6-sl-08",
    phase: "s6",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Deine Work-Life-Balance",
      body: "Markus T. (34) schläft schlecht, isst unregelmäßig und hat 5 Kilo zugenommen. Seine Mutter sagt: 'Du musst auch lernen, auf dich selbst aufzupassen.' Wie steht es um deine Balance?",
    },
    contentB1: {
      title: "Deine Work-Life-Balance",
      body: "Markus T. (34) schläft schlecht. Er isst nicht regelmäßig. Er hat 5 Kilo zugenommen. Seine Mutter sagt: 'Du musst lernen, auf dich aufzupassen.' Wie steht es bei dir?",
    },
    question: {
      fragetext:
        "Wie zufrieden bist du mit deiner aktuellen Work-Life-Balance? (1 = sehr unzufrieden, 10 = sehr zufrieden)",
      sliderVariant: "empathy",
      slider: {
        instruction:
          "Wie zufrieden bist du mit deiner aktuellen Work-Life-Balance?",
        unit: "Punkte",
        min: 1,
        max: 10,
        step: 1,
        correctValue: 7,
        tolerance: 10,
        explanation:
          "Egal wo du gelandet bist — das Bewusstsein dafür ist der erste Schritt. Selbstpflege ist kein Egoismus, sondern professionelle Pflicht. Plane dir bewusst Q2-Zeit ein (nicht dringend, aber wichtig) — für Sport, Freunde, Erholung.",
        explanationB1:
          "Egal wo du gelandet bist — das Bewusstsein dafür ist der erste Schritt. Selbstpflege ist wichtig. Plane dir Q2-Zeit ein — für Sport, Freunde und Erholung.",
      },
    },
  },

  // =============================================================
  // Step 9: text (diary) — Linas Tagebuch
  // =============================================================
  {
    stepId: "le01-s6-tx-09",
    phase: "s6",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 6,
    displayFormat: "diary",
    contentC1: {
      title: "Linas Tagebuch — Tag 5",
      body: "*Liebes Tagebuch,*\n\n*Heute war ein harter Tag. Ein Patient hat geschrien und ich hab mich im Pausenraum versteckt. Frau Weber hat gesagt: 'Das ist normal.' Aber normal fühlt sich nicht gut an.*\n\n*Mama hat gesagt, ich muss auf mich aufpassen. Sie hat mir die 4-6-8-Atmung gezeigt. Ich hab es ausprobiert — 4 Sekunden ein, 6 halten, 8 aus. Beim dritten Mal wurde es tatsächlich besser.*\n\n*Ich glaube, ich schaffe das. Aber ich muss auch lernen, mir Hilfe zu holen. Morgen frage ich Frau Weber, ob wir über den Patienten reden können.*\n\n*— Lina*",
    },
    contentB1: {
      title: "Linas Tagebuch — Tag 5",
      body: "*Liebes Tagebuch,*\n\n*Heute war ein schwerer Tag. Ein Patient hat geschrien. Ich habe mich im Pausenraum versteckt. Frau Weber hat gesagt: 'Das ist normal.' Aber es fühlt sich nicht gut an.*\n\n*Mama hat gesagt: Du musst auf dich aufpassen. Sie hat mir die 4-6-8-Atmung gezeigt. Ich habe es gemacht. 4 Sekunden einatmen. 6 Sekunden halten. 8 Sekunden ausatmen. Beim dritten Mal wurde es besser.*\n\n*Ich glaube, ich schaffe das. Aber ich muss lernen, mir Hilfe zu holen. Morgen frage ich Frau Weber. Wir können über den Patienten reden.*\n\n*— Lina*",
    },
  },

  // =============================================================
  // Step 10: freetext — Deine Selbstpflege-Strategie
  // =============================================================
  {
    stepId: "le01-s6-ft-10",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.73", "I Care Pflege S.75", "I Care Pflege S.77", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Dein persönlicher Plan",
      body: "Du hast kurzfristige und langfristige Strategien kennengelernt. Du hast die Eisenhower-Matrix ausprobiert und die 4-6-8-Atmung getestet. Jetzt bist du dran.",
    },
    contentB1: {
      title: "Dein persönlicher Plan",
      body: "Du kennst jetzt kurzfristige und langfristige Methoden gegen Stress. Du hast die Eisenhower-Methode ausprobiert. Du hast die 4-6-8-Atmung getestet. Jetzt bist du dran.",
    },
    question: {
      fragetext:
        "Erstelle deinen persönlichen Selbstpflege-Plan: (1) Was stresst dich am meisten? (2) Welche kurzfristige Methode willst du ausprobieren? (3) Welche langfristige Methode passt zu dir? (4) Wann planst du dir Q2-Zeit ein?",
      musterantwort:
        "1. Mein größter Stressfaktor: Schichtdienst und Prüfungsvorbereitung gleichzeitig. 2. Kurzfristig: 4-6-8-Atemtechnik vor jeder Prüfung und in stressigen Situationen auf Station. 3. Langfristig: 2× pro Woche Schwimmen (Dienstag und Samstag). 4. Q2-Zeit: Sonntag ist mein Erholungstag — kein Lernen, keine Arbeit.",
      bewertungskriterien: [
        "Alle 4 Fragen beantwortet",
        "Mindestens 1 konkrete kurzfristige Methode genannt",
        "Mindestens 1 langfristige Methode genannt",
        "Q2-Zeit eingeplant",
      ],
      satzanfaengeB1: [
        "1. Mein größter Stressfaktor ist ...",
        "2. Kurzfristig möchte ich ... ausprobieren.",
        "3. Langfristig plane ich ...",
        "4. Ich plane mir Zeit für mich ein am ...",
      ],
    },
  },
];
