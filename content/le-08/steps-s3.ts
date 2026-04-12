// Session 3: "Sicher essen, sicher trinken" — LE 08 Menschen aller Altersstufen bei der Ernährung unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB4: Essen/Trinken anreichen (ce02-le08-anreichen, ce02-le08-trinkhilfen)
// TB5: Dysphagie, Aspirationsprophylaxe (ce02-le08-dysphagie, ce02-le08-aspiration)
// Leitfall: Elisabeth Kramer (42, MS, Dysphagie)
// Bloom: B1-B4, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — Brilliant-Einstieg Schnabelbecher
  // =============================================================
  {
    stepId: "le08-s3-tb4-01",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 475"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "SZENE",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Der Schnabelbecher",
      body: "Du bist auf der neurologischen Station. Elisabeth Kramer (42, MS, Dysphagie) liegt in Zimmer 7. Sie hat sich gerade beim Wassertrinken verschluckt und hustet heftig. Deine Kollegin greift zum Schnabelbecher.",
    },
    contentB1: {
      title: "Der Schnabelbecher",
      body: "Du bist auf Station. Frau Kramer (42, Schluckstörung) hat sich beim Trinken verschluckt. Sie hustet stark. Die Kollegin holt einen Schnabelbecher.",
    },
    question: {
      fragetext: "Deine Kollegin reicht Frau Kramer den Schnabelbecher. Ist das richtig?",
      patientName: "du",
      dialogPhases: [
        {
          context: "Frau Kramer hustet noch. Deine Kollegin hält den Schnabelbecher bereit: 'Hier, damit verschüttest du wenigstens nichts.' Du überlegst — stimmt das?",
          contextB1: "Frau Kramer hustet. Die Kollegin hat den Schnabelbecher: 'Damit kann sie besser trinken.' Stimmt das?",
          speaker: "Kollegin",
          options: [
            {
              text: "Nein, warte! Der Schnabelbecher ist gefährlich — er erzwingt eine Kopfüberstreckung und erhöht das Aspirationsrisiko!",
              textB1: "Nein, der Schnabelbecher ist gefährlich! Der Kopf muss nach hinten — dann kann Wasser in die Lunge kommen!",
              patientResponse: "Wirklich? Aber er ist doch auslaufsicher. Was soll ich stattdessen nehmen?",
              patientResponseB1: "Echt? Aber er ist doch praktisch. Was nehme ich sonst?",
              score: 3,
              feedback: "Genau richtig! Der Schnabelbecher erzwingt eine Kopfüberstreckung beim Trinken. In dieser Position öffnet sich der Kehldeckel — Aspirationsgefahr! Bessere Alternativen: Strohhalm, Glas mit Nasenausschnitt, Andickungsmittel.",
              feedbackB1: "Richtig! Beim Schnabelbecher muss der Kopf nach hinten. Dann öffnet sich der Kehldeckel. Besser: Strohhalm oder Becher mit Nasenausschnitt.",
            },
            {
              text: "Ja klar, der Schnabelbecher ist doch genau für solche Patienten gedacht.",
              textB1: "Ja, der Schnabelbecher ist gut für sie.",
              patientResponse: "Hmm, bist du dir sicher? Denk mal nach — was passiert mit dem Kopf beim Trinken aus dem Schnabelbecher?",
              patientResponseB1: "Bist du sicher? Was passiert mit dem Kopf beim Trinken?",
              score: 1,
              feedback: "Das ist ein häufiger Schülerfehler! Der Schnabelbecher erzwingt eine Kopfüberstreckung. In dieser Position öffnet sich der Kehldeckel und Flüssigkeit kann in die Luftröhre gelangen. Das ist besonders bei Dysphagie lebensgefährlich!",
              feedbackB1: "Fehler! Der Schnabelbecher zwingt den Kopf nach hinten. Dann kann Wasser in die Lunge kommen. Das ist gefährlich!",
            },
            {
              text: "Ich bin mir unsicher — ist der Schnabelbecher sicher bei Schluckstörungen?",
              textB1: "Ich bin unsicher. Ist der Schnabelbecher sicher?",
              patientResponse: "Gute Frage! Bei einer Patientin mit Dysphagie solltest du immer an die Aspirationsgefahr denken. Was passiert mit dem Kopf beim Schnabelbecher?",
              patientResponseB1: "Gute Frage! Bei Schluckstörungen musst du an die Aspirationsgefahr denken.",
              score: 2,
              feedback: "Gut, dass du nachdenkst! Der Schnabelbecher erzwingt eine Kopfüberstreckung — der Kehldeckel öffnet sich und es besteht Aspirationsgefahr. Strohhalm oder Nasenausschnittglas sind sicherer.",
              feedbackB1: "Gut, dass du fragst! Der Schnabelbecher ist bei Schluckstörungen gefährlich. Nimm lieber einen Strohhalm.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ERKLÄRUNG — Positionierung beim Essen (stepbystep)
  // =============================================================
  {
    stepId: "le08-s3-tb4-02",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 472-474"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "stepbystep",
    bildhinweis: "4 Positionen beim Essen: Am Tisch (90° Kniewinkel), an der Bettkante, im Bett sitzend (Kopfteil ≥70°), im Liegen (linke Seitenlage). Jeweils mit Strichfigur.",
    bildkategorie: "szene",
    contentC1: {
      title: "4 Positionen beim Essen",
      body: "**Am Tisch:** 90° Kniewinkel, Rücken an Lehne, Gesäß tief im Stuhl. **An der Bettkante:** Nur bei stabiler Rumpfmuskulatur! Sitzwürfel verwenden. **Im Bett sitzend:** Kopfteil mindestens 70° erhöht, Rutschbremse (zusammengerolltes Handtuch). **Im Liegen:** Linke Seitenlage bevorzugt — NIE in Rückenlage (Aspirationsgefahr!). **Nach dem Essen:** Oberkörper noch 20 Minuten erhöht lassen.",
    },
    contentB1: {
      title: "4 Positionen beim Essen",
      body: "**Am Tisch:** Knie im 90°-Winkel. Rücken an die Lehne. **An der Bettkante:** Nur wenn der Patient gut sitzen kann! **Im Bett:** Kopfteil hoch — mindestens 70°! Ein Handtuch verhindert das Rutschen. **Im Liegen:** Auf die linke Seite drehen. NIEMALS auf dem Rücken essen! **Nach dem Essen:** 20 Minuten hochbleiben.",
    },

  },

  // =============================================================
  // Step 3: ERKLÄRUNG — 6 Stufen Hilfebedarf (Flipcard)
  // =============================================================
  {
    stepId: "le08-s3-tb4-03",
    phase: "s3",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 472"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "6 Stufen des Hilfebedarfs bei der Nahrungsaufnahme",
      body: "Nicht jeder Patient braucht gleich viel Hilfe beim Essen. Decke die 6 Stufen auf!",
    },
    contentB1: {
      title: "Wie viel Hilfe braucht der Patient beim Essen?",
      body: "Es gibt 6 Stufen. Tippe auf die Karten!",
    },
    question: {
      fragetext: "Decke die 6 Stufen des Hilfebedarfs auf.",
      flipcard: {
        instruction: "Tippe auf eine Karte um die Stufe kennenzulernen.",
        cards: [
          {
            front: "Stufe 1 — Selbstständig",
            back: "Vollständig selbstständig. Der Patient isst und trinkt ohne jede Hilfe.",
            backB1: "Kann allein essen. Braucht keine Hilfe.",
          },
          {
            front: "Stufe 2 — Ermutigung",
            back: "Selbstständig, braucht nur Ermutigung und Motivation zum Essen.",
            backB1: "Braucht nur Mut-Machen. 'Essen Sie ruhig, es schmeckt gut!'",
          },
          {
            front: "Stufe 3 — Hilfe beim Vorbereiten",
            back: "Eingeschränkt selbstständig — braucht Hilfe beim Schneiden, Öffnen von Verpackungen oder Mundgerecht-Machen.",
            backB1: "Braucht Hilfe beim Schneiden. Oder beim Öffnen von Verpackungen.",
          },
          {
            front: "Stufe 4 — Hilfsmittel",
            back: "Selbstständig mit Hilfsmitteln — z.B. Griffverdickung, Tellerranderhöhung, rutschfeste Unterlage.",
            backB1: "Braucht Hilfsmittel. Zum Beispiel: dicken Griff, hohen Tellerrand.",
          },
          {
            front: "Stufe 5 — Anreichen",
            back: "Hoher Hilfebedarf — Essen muss angereicht werden. Tempo des Patienten beachten! Nicht hetzen.",
            backB1: "Das Essen muss angereicht werden. Langsam! Nicht hetzen.",
          },
          {
            front: "Stufe 6 — Sondenernährung",
            back: "Sehr hoher Hilfebedarf — Sondenernährung oder parenterale Ernährung nötig. Täglich neu bewerten! Ressourcenorientiert unterstützen.",
            backB1: "Braucht Sondenernährung. Jeden Tag neu schauen: Was kann der Patient noch allein?",
          },
        ],
        shuffled: false,
      },
    },
  },

  // =============================================================
  // Step 4: CHECKPOINT — MC Positionierung
  // =============================================================
  {
    stepId: "le08-s3-tb4-04",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 472-474"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Positionierung korrigieren",
      body: "Frau Kramer sitzt im Bett. Das Kopfteil steht auf 45°. Du kommst mit dem Mittagessen.",
    },
    contentB1: {
      title: "Was machst du zuerst?",
      body: "Frau Kramer sitzt im Bett. Aber das Kopfteil ist nur auf 45° eingestellt. Du bringst das Essen.",
    },
    question: {
      fragetext: "Was machst du zuerst?",
      optionen: [
        {
          text: "Kopfteil auf mindestens 70° stellen",
          isCorrect: true,
          explanation: "Richtig! Beim Essen im Bett muss das Kopfteil auf mindestens 70° stehen. 45° ist zu flach — erhöhte Aspirationsgefahr!",
          explanationB1: "Richtig! Zum Essen muss das Kopfteil auf mindestens 70° hoch. 45° ist zu flach!",
        },
        {
          text: "Essen anreichen — 45° reicht",
          isCorrect: false,
          explanation: "45° ist zu flach! Mindestens 70° sind nötig, damit die Nahrung nicht in die Atemwege gelangt. Bei Dysphagie ist das besonders kritisch.",
          explanationB1: "45° reicht nicht! Mindestens 70°. Sonst kann Essen in die Lunge kommen.",
        },
        {
          text: "Schnabelbecher geben",
          isCorrect: false,
          explanation: "Doppelt falsch: Der Schnabelbecher ist bei Dysphagie kontraindiziert UND die Positionierung stimmt noch nicht!",
          explanationB1: "Falsch! Der Schnabelbecher ist bei Schluckstörungen gefährlich. Und die Position muss auch stimmen.",
        },
        {
          text: "Besteck auf den Tisch legen und warten",
          isCorrect: false,
          explanation: "Besteck hinlegen reicht nicht — du musst zuerst die Positionierung korrigieren. Ohne korrekte Position besteht Aspirationsgefahr.",
          explanationB1: "Besteck hinlegen reicht nicht. Erst muss die Position stimmen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 5: ANDERS ERKLÄRT — Comparison richtig vs. falsch
  // =============================================================
  {
    stepId: "le08-s3-tb4-05",
    phase: "s3",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 472-474"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "Richtige vs. falsche Sitzposition",
      body: "Der Unterschied zwischen einer sicheren und einer gefährlichen Sitzposition kann über eine Aspiration entscheiden.",
    },
    contentB1: {
      title: "Richtig oder falsch sitzen?",
      body: "Die richtige Sitzposition schützt vor Verschlucken. Vergleiche die Unterschiede.",
    },
    question: {
      fragetext: "Vergleiche die beiden Positionen.",
      comparison: {
        instruction: "Vergleiche: Was ist der Unterschied?",
        columns: [
          { label: "Richtige Position", icon: "check" },
          { label: "Falsche Position", icon: "cross" },
        ],
        rows: [
          {
            criterion: "Kopfhaltung",
            values: [
              "Kopf leicht nach vorne geneigt, Kinn Richtung Brust",
              "Kopf nach hinten überstreckt (z.B. durch Schnabelbecher)",
            ],
            valuesB1: [
              "Kopf leicht nach vorne, Kinn nach unten",
              "Kopf nach hinten (z.B. durch Schnabelbecher)",
            ],
          },
          {
            criterion: "Rumpf",
            values: [
              "Aufrecht, Rücken gestützt, Oberkörper mindestens 70°",
              "Halb liegend, unter 45°, rutschend",
            ],
            valuesB1: [
              "Gerade, Rücken hat Stütze, mindestens 70° hoch",
              "Halb liegend, unter 45°, rutscht nach unten",
            ],
          },
          {
            criterion: "Aspirationsrisiko",
            values: [
              "Gering — Kehldeckel kann sich richtig schließen",
              "Hoch — Kehldeckel öffnet sich bei Überstreckung",
            ],
            valuesB1: [
              "Klein — der Kehldeckel schließt gut",
              "Groß — der Kehldeckel öffnet sich",
            ],
            highlight: 1,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: ERKLÄRUNG — Trinkhilfen (beforeafter)
  // =============================================================
  {
    stepId: "le08-s3-tb4-06",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 475"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-trinkhilfen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "beforeafter",
    contentC1: {
      title: "Trinkhilfen — was ist sicher, was nicht?",
      body: "**NEIN — Schnabelbecher:** Erzwingt Kopfüberstreckung, Kehldeckel öffnet sich, Aspirationsgefahr! Nur wenn Patient darauf besteht. **JA — Strohhalm:** Sicherste Trinkhilfe, auch bei kognitiver Beeinträchtigung nutzbar. **JA — Glas mit Nasenausschnitt:** Erlaubt Trinken ohne Kopfüberstreckung. **JA — Andickungsmittel** (z.B. Nutilis Powder): Macht Flüssigkeiten dicker und damit sicherer bei Dysphagie.",
      glossarBegriffe: ["Andickungsmittel"],
    },
    contentB1: {
      title: "Trinkhilfen — was ist gut, was nicht?",
      body: "**NEIN — Schnabelbecher:** Der Kopf muss nach hinten. Das ist gefährlich! **JA — Strohhalm:** Am sichersten. Auch für verwirrt Menschen. **JA — Glas mit Nasenausschnitt:** Man kann trinken ohne den Kopf nach hinten zu nehmen. **JA — Andickungsmittel** (Pulver zum Andicken): Macht Getränke dicker. So verschluckt man sich weniger.",
      glossarBegriffe: ["Andickungsmittel"],
    },

  },

  // =============================================================
  // Step 7: ANWENDUNG — Categorize Trinkhilfen
  // =============================================================
  {
    stepId: "le08-s3-tb4-07",
    phase: "s3",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 475"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-trinkhilfen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Trinkhilfen sortieren",
      body: "Welche Trinkhilfen sind geeignet bei Dysphagie — und welche nicht?",
    },
    contentB1: {
      title: "Trinkhilfen sortieren",
      body: "Welche Trinkhilfen sind gut bei Schluckstörungen? Welche nicht?",
    },
    question: {
      fragetext: "Sortiere die 6 Trinkhilfen: geeignet oder nicht geeignet?",
      categories: [
        { name: "Geeignet" },
        { name: "Nicht geeignet" },
      ],
      categoryItems: [
        { text: "Strohhalm", correctCategory: 0 },
        { text: "Glas mit Nasenausschnitt", correctCategory: 0 },
        { text: "Andickungsmittel (Nutilis)", correctCategory: 0 },
        { text: "Schnabelbecher", correctCategory: 1 },
        { text: "Flasche mit Schnuller für Erwachsene", correctCategory: 1 },
        { text: "Normale Tasse bei starkem Tremor", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Step 8: ERKLÄRUNG — Grundsätze Essenanreichen (Checklist)
  // =============================================================
  {
    stepId: "le08-s3-tb4-08",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 474-475"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "checklist",
    contentC1: {
      title: "6 Grundsätze beim Essen anreichen",
      body: "**1.** So viel Hilfe wie nötig, so wenig wie möglich (aktivierende Pflege). **2.** Der Patient bestimmt das Tempo. **3.** Besteck von vorne, unten an den Mund führen. **4.** Verschiedene Konsistenzen NICHT mischen (Aspirationsgefahr!). **5.** Mund vollständig entleert, bevor nachgereicht wird. **6.** Mund mit Serviette abwischen — nie mit dem Löffel oder der Hand. Bei Sehbeeinträchtigung: Ziffernblatt-Methode für die Telleranordnung.",
    },
    contentB1: {
      title: "6 Regeln beim Essen anreichen",
      body: "**1.** Nur so viel Hilfe wie nötig. **2.** Der Patient bestimmt wie schnell. **3.** Löffel von vorne und unten zum Mund führen. **4.** Suppe und festes Essen NICHT mischen! **5.** Erst alles schlucken, dann den nächsten Löffel geben. **6.** Mund mit einer Serviette sauber machen.",
    },

  },

  // =============================================================
  // Step 9: ANWENDUNG — Branching Frau Kramer Mittagessen
  // =============================================================
  {
    stepId: "le08-s3-tb4-09",
    phase: "s3",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 474-475"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Essen anreichen bei Frau Kramer",
      body: "Du reichst Frau Kramer das Mittagessen an. Sie sagt: 'Geben Sie mir alles auf einmal — ich hab Hunger!'",
      fallbezug: "Elisabeth Kramer hat eine Dysphagie. Das Risiko von Aspiration ist erhöht.",
    },
    contentB1: {
      title: "Essen anreichen bei Frau Kramer",
      body: "Du gibst Frau Kramer das Mittagessen. Sie sagt: 'Geben Sie mir alles auf einmal!'",
      fallbezug: "Frau Kramer hat eine Schluckstörung. Sie kann sich leicht verschlucken.",
    },
    question: {
      fragetext: "Wie reagierst du?",
      branchingOptions: [
        {
          text: "Ich gebe Ihnen kleine Portionen, damit Sie sich nicht verschlucken. Was möchten Sie zuerst?",
          feedback: "Perfekt! Du respektierst den Wunsch der Patientin, schützt sie aber vor Aspiration. Du gibst ihr Wahlmöglichkeiten — das fördert die Autonomie.",
          feedbackB1: "Sehr gut! Du gibst kleine Portionen und lässt sie wählen. Das ist sicher und respektvoll.",
          isCorrect: true,
        },
        {
          text: "Klar, hier ist der Teller. Sie können allein essen.",
          feedback: "Zu riskant! Frau Kramer hat eine Dysphagie — bei zu großen Portionen steigt das Aspirationsrisiko. Kleine Portionen und Begleitung sind wichtig.",
          feedbackB1: "Zu gefährlich! Frau Kramer hat Schluckprobleme. Sie braucht kleine Portionen und Hilfe.",
          isCorrect: false,
        },
        {
          text: "Sie müssen langsam essen. So sind die Regeln.",
          feedback: "Inhaltlich richtig, aber der Ton ist bevormundend. Besser: Erklären warum, und der Patientin Wahlmöglichkeiten geben. 'Sie müssen' wirkt paternalistisch.",
          feedbackB1: "Inhalt stimmt, aber der Ton ist nicht gut. Besser: erklären warum und Wahlmöglichkeiten geben.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 10: ANWENDUNG — Errorspot Pflegebericht
  // =============================================================
  {
    stepId: "le08-s3-tb4-10",
    phase: "s3",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 474-475"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fehler im Pflegebericht finden",
      body: "Lies den Pflegebericht und finde die 3 Fehler. Markiere die falschen Textstellen.",
    },
    contentB1: {
      title: "Finde 3 Fehler im Bericht",
      body: "In diesem Bericht sind 3 Fehler. Finde sie und markiere sie.",
    },
    question: {
      fragetext: "Markiere die 3 Fehler im Pflegebericht.",
      errorspot: {
        instruction: "Tippe auf die Fehler im Text.",
        text: "Die Pflegekraft reichte Frau Kramer das Essen an. Sie mischte Suppe und Kartoffeln zusammen, reichte das Besteck von oben und wischte den Mund mit dem Löffel ab. Frau Kramer aß langsam.",
        errors: [
          {
            start: 62,
            end: 103,
            correction: "Verschiedene Konsistenzen dürfen NICHT gemischt werden — Aspirationsgefahr!",
            explanation: "Suppe (flüssig) und Kartoffeln (fest) mischen erhöht die Aspirationsgefahr massiv. Immer getrennt anreichen!",
            explanationB1: "Suppe und Kartoffeln darf man nicht mischen. Das ist gefährlich!",
          },
          {
            start: 105,
            end: 133,
            correction: "Besteck wird von VORNE und UNTEN an den Mund geführt.",
            explanation: "Von oben führt zu einer Kopfüberstreckung — ähnlich wie beim Schnabelbecher steigt die Aspirationsgefahr.",
            explanationB1: "Von oben ist falsch. Der Löffel kommt von vorne und unten zum Mund.",
          },
          {
            start: 138,
            end: 176,
            correction: "Den Mund mit einer SERVIETTE abwischen — nie mit dem Löffel!",
            explanation: "Der Löffel ist kein Wischwerkzeug. Mund mit einer sauberen Serviette abwischen — das ist hygienisch und respektvoll.",
            explanationB1: "Den Mund mit einer Serviette sauber machen. Nicht mit dem Löffel!",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 11: ERKLÄRUNG — Medikamente bei Nahrungsaufnahme (News)
  // =============================================================
  {
    stepId: "le08-s3-tb4-11",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 175, 187, 476"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "news",
    contentC1: {
      title: "Rechtslage: Medikamente im Essen verstecken = Straftat",
      body: "Medikamente NIEMALS heimlich im Essen verstecken — das ist nach § 223 StGB **Körperverletzung**! Auch bei Demenz, auch 'im besten Interesse' des Patienten. Kinn Richtung Brust beim Tablettenschlucken erleichtert das Schlucken. Große Tabletten nur teilen wenn eine Bruchkerbe vorhanden ist. Manche Antibiotika nicht mit Milchprodukten (z.B. Tetracycline)!",
    },
    contentB1: {
      title: "Wichtig: Medikamente nie im Essen verstecken!",
      body: "Medikamente im Essen verstecken ist **verboten**! Das ist eine Straftat. Auch bei Demenz. Kinn nach unten beim Tablettenschlucken hilft. Große Tabletten nur teilen wenn eine Kerbe da ist. Manche Antibiotika nicht mit Milch nehmen!",
    },

  },

  // =============================================================
  // Step 12: REFLEXION — Selfrating TB4
  // =============================================================
  {
    stepId: "le08-s3-tb4-12",
    phase: "s3",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 472-476"],
    track: "vertiefung",
    modus: "checkpoint",
    lernziel: "ce02-le08-anreichen",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Selbsteinschätzung — Essen anreichen",
      body: "Wie sicher fühlst du dich beim Thema Essen anreichen und Trinkhilfen?",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Wie gut kennst du dich jetzt aus mit Essen anreichen?",
    },
    question: {
      fragetext: "Schätze dich ehrlich ein.",
      confidenceCards: [
        {
          statement: "Ich kann die korrekte Sitzposition beim Essen beschreiben.",
          statementB1: "Ich kann sagen, wie der Patient beim Essen richtig sitzt.",
          isTrue: true,
          explanation: "Am Tisch 90° Knie, im Bett mindestens 70° Oberkörper, nach dem Essen 20 Minuten hochbleiben.",
          explanationB1: "Am Tisch: Knie 90°. Im Bett: Oberkörper mindestens 70° hoch. Danach 20 Min hoch lassen.",
        },
        {
          statement: "Ich weiß, warum der Schnabelbecher gefährlich ist.",
          statementB1: "Ich weiß warum der Schnabelbecher gefährlich ist.",
          isTrue: true,
          explanation: "Erzwingt Kopfüberstreckung → Kehldeckel öffnet sich → Aspirationsgefahr!",
          explanationB1: "Kopf muss nach hinten → Kehldeckel öffnet sich → Essen kann in die Lunge kommen!",
        },
        {
          statement: "Ich kenne die 6 Grundsätze beim Essenanreichen.",
          statementB1: "Ich kenne die 6 Regeln beim Essen anreichen.",
          isTrue: true,
          explanation: "Aktivierende Pflege, Tempo des Patienten, Besteck von unten, nicht mischen, Mund leeren, Serviette nutzen.",
          explanationB1: "Nur so viel Hilfe wie nötig, Patient bestimmt Tempo, Löffel von unten, nicht mischen, Mund leeren, Serviette.",
        },
      ],
    },
  },

  // =============================================================
  // Step 13: SZENE — Dialog Dysphagie (Logopädin kommt)
  // =============================================================
  {
    stepId: "le08-s3-tb5-13",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-III",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "SZENE",
    tag: "krankheitslehre",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Die Schluckdiagnostik",
      body: "Die Logopädin kommt zu Frau Kramer zur Schluckdiagnostik. 'Schlucken Sie bitte dieses angedickte Wasser.' Frau Kramer schluckt — und hustet. 'Jetzt den Pudding.' Kein Husten.",
    },
    contentB1: {
      title: "Die Schluck-Untersuchung",
      body: "Die Schlucktherapeutin kommt zu Frau Kramer. Sie gibt ihr dickes Wasser. Frau Kramer schluckt — und hustet. Dann gibt sie Pudding. Kein Husten.",
    },
    question: {
      fragetext: "Was bedeutet das Ergebnis?",
      patientName: "Logopädin",
      dialogPhases: [
        {
          context: "Die Logopädin schreibt: 'Dünnflüssig: Aspiration. Breiig: sicher.' Sie wendet sich zu dir: 'Was bedeutet das für die Ernährung?'",
          contextB1: "Die Logopädin schreibt auf: 'Dünne Flüssigkeit: Verschlucken. Brei: sicher.' Sie fragt dich: 'Was heißt das für das Essen?'",
          speaker: "Logopädin",
          options: [
            {
              text: "Frau Kramer braucht angedickte Flüssigkeiten und passierte Kost — dünnflüssig ist zu gefährlich.",
              textB1: "Frau Kramer braucht dicke Getränke und püriertes Essen. Dünne Flüssigkeiten sind gefährlich.",
              patientResponse: "Genau! Wir passen die Konsistenzstufe an. Alle Getränke werden angedickt, feste Nahrung kommt als passierte Kost.",
              patientResponseB1: "Genau! Wir machen die Getränke dicker. Das Essen wird püriert.",
              score: 3,
              feedback: "Richtig! Dünnflüssiges ist bei Dysphagie am gefährlichsten, weil es zu schnell fließt und der Schluckreflex nicht rechtzeitig reagiert. Breiige Konsistenz ist sicherer.",
              feedbackB1: "Richtig! Dünne Flüssigkeiten sind am gefährlichsten bei Schluckstörungen. Sie fließen zu schnell.",
            },
            {
              text: "Frau Kramer darf gar nichts mehr essen.",
              textB1: "Frau Kramer darf nichts mehr essen.",
              patientResponse: "Nein, so extrem ist es nicht! Sie kann breiige Konsistenzen sicher schlucken. Wir müssen nur die Konsistenz anpassen.",
              patientResponseB1: "Nein, so schlimm ist es nicht! Sie kann Brei sicher schlucken.",
              score: 1,
              feedback: "Zu extrem! Die Schluckdiagnostik zeigt: Breiige Konsistenz ist sicher. Also darf Frau Kramer essen — nur in angepasster Konsistenz.",
              feedbackB1: "Zu viel! Frau Kramer kann Brei sicher essen. Nur dünne Flüssigkeiten sind gefährlich.",
            },
            {
              text: "Wir sollten die Logopädin fragen was genau zu tun ist.",
              textB1: "Ich frage die Logopädin was wir tun sollen.",
              patientResponse: "Das ist ein guter Ansatz — interprofessionelle Zusammenarbeit! Aber du solltest auch selbst die Grundlagen kennen.",
              patientResponseB1: "Gut, dass du fragst! Aber als Pflegekraft musst du die Grundlagen auch selbst kennen.",
              score: 2,
              feedback: "Zusammenarbeit mit der Logopädin ist wichtig! Aber als Pflegekraft musst du selbst wissen: Dünnflüssig ist bei Dysphagie gefährlich, breiig ist sicherer.",
              feedbackB1: "Zusammenarbeit ist gut! Aber du musst selbst wissen: Dünne Flüssigkeiten sind gefährlich bei Schluckstörungen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 14: ERKLÄRUNG — Reveal Dysphagie-Zeichen
  // =============================================================
  {
    stepId: "le08-s3-tb5-14",
    phase: "s3",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456, 475"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "5 Warnsignale einer Dysphagie",
      body: "Nicht jede Schluckstörung ist offensichtlich. Decke die 5 Warnsignale auf — plus eine besonders tückische Variante.",
      glossarBegriffe: ["Dysphagie"],
    },
    contentB1: {
      title: "5 Warnsignale bei Schluckstörungen",
      body: "Manche Schluckstörungen sieht man nicht sofort. Lerne die 5 Zeichen.",
      glossarBegriffe: ["Dysphagie"],
    },
    question: {
      fragetext: "Decke die 5 Dysphagie-Zeichen auf.",
      reveal: {
        instruction: "Tippe auf die Karten um die Warnsignale zu sehen.",
        cards: [
          { id: "d1", label: "Zeichen 1", content: "**Husten und Würgen beim Essen** — das offensichtlichste Zeichen. Der Körper versucht Material aus den Atemwegen zu entfernen.", contentB1: "**Husten beim Essen** — der Körper will das Essen aus den Atemwegen raushusten.", icon: "alert-triangle" },
          { id: "d2", label: "Zeichen 2", content: "**Feuchte, gurgelnde Stimme** — nach dem Schlucken klingt die Stimme 'nass'. Das deutet auf Nahrungsreste im Rachenbereich hin.", contentB1: "**Nasse Stimme** — nach dem Schlucken klingt die Stimme feucht und gurgelnd.", icon: "mic" },
          { id: "d3", label: "Zeichen 3", content: "**Häufiges Räuspern** — der Patient räuspert sich ständig während oder nach dem Essen.", contentB1: "**Häufiges Räuspern** — der Patient räuspert sich beim oder nach dem Essen.", icon: "refresh" },
          { id: "d4", label: "Zeichen 4", content: "**Nahrungsreste im Mund** — Essen bleibt in den Wangentaschen oder unter der Zunge liegen.", contentB1: "**Essen bleibt im Mund** — in den Wangen oder unter der Zunge liegt noch Essen.", icon: "search" },
          { id: "d5", label: "Zeichen 5", content: "**Gewichtsverlust** — schleichend, weil der Patient immer weniger isst um das Verschlucken zu vermeiden.", contentB1: "**Abnehmen** — der Patient isst immer weniger, weil er Angst vor dem Verschlucken hat.", icon: "trending-down" },
          { id: "d6", label: "CAVE!", content: "**Stille Aspiration** — KEINE sichtbaren Zeichen! Material gelangt in die Lunge ohne Husten oder Würgen. Besonders gefährlich und nur durch professionelle Schluckdiagnostik erkennbar.", contentB1: "**Stille Aspiration** — KEINE sichtbaren Zeichen! Essen kommt in die Lunge, aber der Patient hustet nicht. Sehr gefährlich!", icon: "alert-triangle" },
        ],
        revealMode: "free",
      },
    },
  },

  // =============================================================
  // Step 15: ERKLÄRUNG — Aspirationsmechanismus (Scenario)
  // =============================================================
  {
    stepId: "le08-s3-tb5-15",
    phase: "s3",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456, 475"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-aspiration",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    displayFormat: "scenario",
    bildhinweis: "Querschnitt Kopf/Hals mit Schluckakt: Links normal (Kehldeckel schließt), rechts gestört (Nahrung in Trachea). Aspirationsmechanismus sichtbar.",
    bildkategorie: "anatomie",
    contentC1: {
      title: "Was passiert wenn der Kehldeckel versagt",
      body: "Normalerweise schließt der **Kehldeckel (Epiglottis)** beim Schlucken. Die Nahrung gleitet am Kehlkopf vorbei in die Speiseröhre. Bei Dysphagie schließt der Kehldeckel nicht richtig: Nahrung oder Flüssigkeit gelangt in die **Luftröhre** (Trachea). Folge: **Aspirationspneumonie** — eine Lungenentzündung durch eingeatmetes Material. Das kann lebensbedrohlich sein!",
      glossarBegriffe: ["Aspiration", "Aspirationspneumonie"],
    },
    contentB1: {
      title: "Was passiert bei einer Aspiration?",
      body: "Beim Schlucken schließt sich der **Kehldeckel**. So kommt kein Essen in die Lunge. Bei Schluckstörungen schließt er nicht richtig. Essen oder Trinken kommt in die **Luftröhre** und dann in die **Lunge**. Das macht eine Lungenentzündung. Das heißt **Aspirationspneumonie**. Das ist sehr gefährlich!",
      glossarBegriffe: ["Aspiration", "Aspirationspneumonie"],
    },

  },

  // =============================================================
  // Step 16: CHECKPOINT — MC Stille Aspiration
  // =============================================================
  {
    stepId: "le08-s3-tb5-16",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-aspiration",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Stille Aspiration",
      body: "Die stille Aspiration ist eine besonders gefährliche Form der Schluckstörung.",
    },
    contentB1: {
      title: "Stille Aspiration — warum so gefährlich?",
      body: "Die stille Aspiration ist besonders gefährlich. Warum?",
    },
    question: {
      fragetext: "Warum ist die stille Aspiration besonders gefährlich?",
      optionen: [
        {
          text: "Weil es keine Warnsignale gibt — der Patient hustet nicht, aber Material gelangt trotzdem in die Lunge.",
          isCorrect: true,
          explanation: "Richtig! Bei der stillen Aspiration fehlt der Hustenreflex. Material gelangt unbemerkt in die Lunge. Deshalb wird sie oft zu spät erkannt — erst wenn bereits eine Aspirationspneumonie entsteht.",
          explanationB1: "Richtig! Bei der stillen Aspiration hustet der Patient nicht. Das Essen kommt leise in die Lunge. Man merkt es erst wenn eine Lungenentzündung kommt.",
        },
        {
          text: "Weil der Patient weniger Nahrung aufnimmt",
          isCorrect: false,
          explanation: "Weniger Nahrungsaufnahme ist ein Problem bei Dysphagie, aber das Gefährliche an der stillen Aspiration ist das Fehlen von Warnsignalen — kein Husten, kein Würgen.",
          explanationB1: "Weniger Essen ist ein Problem. Aber das Gefährliche ist: Kein Husten, kein Würgen. Man sieht nichts!",
        },
        {
          text: "Weil der Patient dabei schläft",
          isCorrect: false,
          explanation: "Stille Aspiration hat nichts mit Schlaf zu tun. 'Still' bedeutet hier: ohne sichtbare Zeichen wie Husten oder Würgen.",
          explanationB1: "Stille Aspiration hat nichts mit Schlaf zu tun. 'Still' heißt: ohne Husten oder Würgen.",
        },
        {
          text: "Weil die Medikamente nicht wirken",
          isCorrect: false,
          explanation: "Das Gefährliche ist nicht die Medikamentenwirkung, sondern dass Material unbemerkt in die Lunge gelangt — ohne Warnsignale.",
          explanationB1: "Medikamente haben damit nichts zu tun. Gefährlich ist: Das Essen kommt leise in die Lunge.",
        },
      ],
    },
  },

  // =============================================================
  // Step 17: ANWENDUNG — Sequencing Konsistenzstufen
  // =============================================================
  {
    stepId: "le08-s3-tb5-17",
    phase: "s3",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456, 475"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Konsistenzstufen bei Dysphagie",
      body: "Je dicker die Konsistenz, desto sicherer bei Dysphagie. Bringe die Stufen in die richtige Reihenfolge — von am gefährlichsten zu am sichersten.",
    },
    contentB1: {
      title: "Konsistenzstufen bei Schluckstörungen",
      body: "Je dicker das Getränk oder Essen, desto sicherer bei Schluckstörungen. Sortiere von gefährlich zu sicher.",
    },
    question: {
      fragetext: "Ordne die Konsistenzstufen: von am gefährlichsten (oben) bis am sichersten (unten).",
      sequencing: {
        instruction: "Von oben (gefährlich) nach unten (sicher) ordnen.",
        items: [
          { id: "k1", label: "Dünnflüssig (Wasser, Tee)" },
          { id: "k2", label: "Leicht angedickt (Nektar-Konsistenz)" },
          { id: "k3", label: "Angedickt (Honig-Konsistenz)" },
          { id: "k4", label: "Breiig (Pudding-Konsistenz)" },
          { id: "k5", label: "Fest (normale Kost)" },
        ],
      },
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Branching Frau Kramer lehnt Andickung ab
  // =============================================================
  {
    stepId: "le08-s3-tb5-18",
    phase: "s3",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 475"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Frau Kramer lehnt die Andickung ab",
      body: "Frau Kramer sagt: 'Das angedickte Wasser ist ekelhaft! Ich trinke lieber gar nichts als diesen Schleim.'",
      fallbezug: "Die Logopädin hat festgestellt: Alle Flüssigkeiten müssen angedickt werden. Ohne Andickung besteht Aspirationsgefahr.",
    },
    contentB1: {
      title: "Frau Kramer will nicht trinken",
      body: "Frau Kramer sagt: 'Das dicke Wasser schmeckt ekelhaft! Ich trinke lieber gar nichts!'",
      fallbezug: "Die Schlucktherapeutin sagt: Alle Getränke müssen angedickt werden. Ohne Andicken ist es gefährlich.",
    },
    question: {
      fragetext: "Wie reagierst du auf Frau Kramers Ablehnung?",
      branchingOptions: [
        {
          text: "Ich verstehe, dass das nicht schmeckt. Möchten wir verschiedene Geschmacksrichtungen ausprobieren? Gekühlte Getränke schmecken oft besser angedickt.",
          feedback: "Perfekt! Du zeigst Verständnis, akzeptierst ihr Gefühl und bietest konkrete Alternativen an. Empathie + Lösung — genau so sollte pflegerische Kommunikation funktionieren.",
          feedbackB1: "Sehr gut! Du verstehst Frau Kramer und bietest Alternativen an. Kalte Getränke andicken schmeckt besser.",
          isCorrect: true,
        },
        {
          text: "Sie müssen das trinken! Sonst bekommen Sie eine Lungenentzündung!",
          feedback: "Inhaltlich stimmt die Warnung — aber der Ton ist paternalistisch und macht Angst. Besser: Empathisch auf die Ablehnung eingehen, Alternativen anbieten, das Risiko erklären OHNE Angst zu machen.",
          feedbackB1: "Die Warnung stimmt, aber der Ton ist nicht gut. Besser: Verständnis zeigen und Alternativen anbieten.",
          isCorrect: false,
        },
        {
          text: "Dann trinken Sie halt nichts.",
          feedback: "Gefährlich! Ohne ausreichend Flüssigkeit droht Dehydratation. Und ohne Andickung droht Aspiration. Du musst empathisch Alternativen anbieten — nicht aufgeben.",
          feedbackB1: "Gefährlich! Ohne Trinken trocknet der Körper aus. Du musst Alternativen anbieten.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 19: ANWENDUNG — Memory Dysphagie-Begriffe
  // =============================================================
  {
    stepId: "le08-s3-tb5-19",
    phase: "s3",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456, 475"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Fachbegriffe-Memory",
      body: "Finde die zusammengehörenden Paare: Fachbegriff und Erklärung.",
    },
    contentB1: {
      title: "Fachbegriffe-Memory",
      body: "Finde die Paare: Fachbegriff und Erklärung.",
    },
    question: {
      fragetext: "Finde die 6 zusammengehörenden Paare.",
      memoryPairs: [
        { a: "Dysphagie", b: "Schluckstörung" },
        { a: "Aspiration", b: "Nahrung in die Luftwege" },
        { a: "Epiglottis", b: "Kehldeckel" },
        { a: "Andickungsmittel", b: "Macht Flüssigkeiten dicker" },
        { a: "F.O.T.T.", b: "Schlucktherapie" },
        { a: "Stille Aspiration", b: "Ohne Hustenreflex" },
      ],
    },
  },

  // =============================================================
  // Step 20: INTERLEAVING — MC Mundpflege bei Dysphagie
  // =============================================================
  {
    stepId: "le08-s3-tb5-20",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 431, 455-456"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Querverbindung: Mundpflege bei Dysphagie",
      body: "Du hast in LE-07 gelernt, dass die Mundpflege eine wichtige pflegerische Aufgabe ist. Bei Dysphagie-Patienten hat sie eine besondere Bedeutung.",
    },
    contentB1: {
      title: "Mundpflege bei Schluckstörungen",
      body: "In LE-07 hast du Mundpflege gelernt. Bei Schluckstörungen ist sie besonders wichtig.",
    },
    question: {
      fragetext: "Warum ist die Mundpflege bei Dysphagie-Patienten besonders wichtig?",
      optionen: [
        {
          text: "Soor-Prophylaxe — bei eingeschränkter oraler Nahrungsaufnahme steigt das Pilzrisiko im Mund.",
          isCorrect: true,
          explanation: "Richtig! Wenn Patienten weniger essen, fehlt die mechanische Reinigung durch Kauen. Die Mundflora verändert sich — Soor (Pilzinfektion) und Stomatitis (Mundschleimhautentzündung) können entstehen.",
          explanationB1: "Richtig! Wer wenig isst, hat weniger Reinigung im Mund. Dann kann ein Pilz im Mund wachsen (Soor).",
        },
        {
          text: "Um den Schluckreflex anzuregen",
          isCorrect: false,
          explanation: "Den Schluckreflex kann man nicht durch Mundpflege allein anregen. Das ist Aufgabe der Logopädie (z.B. F.O.T.T.). Mundpflege dient der Infektionsprophylaxe.",
          explanationB1: "Mundpflege regt nicht den Schluckreflex an. Das macht die Schlucktherapeutin.",
        },
        {
          text: "Um den Appetit zu steigern",
          isCorrect: false,
          explanation: "Ein sauberer Mund kann zwar den Geschmack verbessern, aber der Hauptgrund bei Dysphagie-Patienten ist die Soor- und Infektionsprophylaxe.",
          explanationB1: "Ein sauberer Mund kann besser schmecken. Aber der wichtigste Grund ist: Pilze im Mund verhindern.",
        },
        {
          text: "Um den Mundgeruch zu verhindern",
          isCorrect: false,
          explanation: "Mundgeruch verhindern ist nett, aber nicht der klinisch relevante Grund. Wichtig ist die Prophylaxe von Soor und Stomatitis bei reduzierter oraler Nahrungsaufnahme.",
          explanationB1: "Mundgeruch verhindern ist gut, aber nicht der wichtigste Grund.",
        },
      ],
    },
  },

  // =============================================================
  // Step 21: ANWENDUNG — Freetext Ehemann beraten
  // =============================================================
  {
    stepId: "le08-s3-tb5-21",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 455-456, 474-475"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    patientId: "pat-elisabeth-kramer",
    contentC1: {
      title: "Ehemann von Frau Kramer beraten",
      body: "Frau Kramers Ehemann bringt Cola und Salzstangen mit. Er meint es gut — aber beides ist bei Dysphagie gefährlich. Formuliere dein Gespräch mit ihm.",
    },
    contentB1: {
      title: "Ehemann beraten",
      body: "Frau Kramers Mann bringt Cola und Salzstangen mit. Beides ist bei Schluckstörungen gefährlich. Was sagst du ihm?",
    },
    question: {
      fragetext: "Formuliere in 3-4 Sätzen, was du dem Ehemann sagst. Erkläre das Aspirationsrisiko und biete Alternativen an.",
      freetext: {
        prompt: "Was sagst du dem Ehemann? Erkläre das Risiko empathisch und biete Alternativen an.",
        promptB1: "Was sagst du dem Ehemann? Erkläre die Gefahr freundlich und sage, was er stattdessen mitbringen kann.",
        satzanfaenge: [
          "Ich verstehe, dass Sie...",
          "Das Problem mit Cola ist...",
          "Stattdessen könnten Sie...",
        ],
        systemPrompt: "Bewerte ob der Schüler: 1) empathisch auf das Engagement des Ehemanns eingeht, 2) das Aspirationsrisiko bei dünnflüssiger Cola und krümeligen Salzstangen erklärt, 3) konkrete Alternativen vorschlägt (z.B. Pudding, angedickte Säfte, passierte Kost). Sandwich-Prinzip: erst loben, dann korrigieren.",
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 3
  // =============================================================
  {
    stepId: "le08-s3-tb5-22",
    phase: "s3",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456, 472-476"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "/audio/le-08/s3-zusammenfassung.mp3",
    audioLabel: "Zusammenfassung anhören (ca. 3 Min)",
    contentC1: {
      title: "Zusammenfassung — Session 3",
      body: "Du hast gelernt, wie du Patienten sicher beim Essen unterstützt und was bei Schluckstörungen zu beachten ist.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Du weißt jetzt, wie du beim Essen hilfst und was bei Schluckstörungen wichtig ist.",
    },
    question: {
      fragetext: "Zusammenfassung der Session",
      summary: {
        reflexionRueckbezug: "Nächste Session: Was passiert wenn der Mund nicht mehr reicht? Sondenernährung, PEG und Ernährung bei Kindern.",
        kernaussagen: [
          "**Positionierung:** Im Bett mindestens 70° Oberkörper, nach dem Essen 20 Min hochbleiben.",
          "**6 Stufen Hilfebedarf:** Täglich neu bewerten — so viel Hilfe wie nötig, so wenig wie möglich.",
          "**Schnabelbecher = NEIN!** Erzwingt Kopfüberstreckung → Aspirationsgefahr. Strohhalm = JA!",
          "**5 Dysphagie-Zeichen:** Husten, feuchte Stimme, Räuspern, Nahrungsreste im Mund, Gewichtsverlust.",
          "**Stille Aspiration:** Keine sichtbaren Zeichen — besonders gefährlich!",
          "**Konsistenzstufen:** Je dicker, desto sicherer bei Dysphagie.",
          "**Kommunikation:** Empathisch auf Ablehnung eingehen, Alternativen anbieten, nicht bevormunden.",
        ],
      },
    },
  },
];
