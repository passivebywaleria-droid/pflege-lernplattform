// Pfad 5: Der Pflegeprozess — dein Werkzeug (Kapitel 7)
// LE-01: Personen- und situationsorientiert professionell pflegen
// Themen: 6 Schritte nach Fiechter/Meier, Pflegeanamnese, Pflegeprobleme/Ressourcen, SMART-Ziele
// Leitfälle: Fatma K. (71), Markus T. (34)
// Bloom: B1–B3, 14 Steps

import type { ContentStep } from "../_types";

export const STEPS_S5: ContentStep[] = [
  // =============================================================
  // Step 1: crowdPoll — Wie viele Schritte hat der Pflegeprozess?
  // =============================================================
  {
    stepId: "le01-s5-cp-01",
    phase: "s5",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.78"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Rate mal!",
      body: "Der Pflegeprozess ist das zentrale Werkzeug in der Pflege. Er strukturiert alles, was du tust. Aber wie viele Schritte hat er?",
    },
    contentB1: {
      title: "Rate mal!",
      body: "Der Pflegeprozess ist das wichtigste Werkzeug in der Pflege. Er gibt deiner Arbeit eine Struktur. Aber wie viele Schritte hat er?",
    },
    question: {
      fragetext: "Wie viele Schritte hat der Pflegeprozess nach Fiechter und Meier?",
      crowdPoll: {
        question: "Wie viele Schritte hat der Pflegeprozess nach Fiechter und Meier?",
        questionB1: "Wie viele Schritte hat der Pflegeprozess?",
        inputType: "choice",
        options: [
          { id: "a", text: "4 Schritte" },
          { id: "b", text: "5 Schritte" },
          { id: "c", text: "6 Schritte" },
          { id: "d", text: "8 Schritte" },
        ],
        seedResponses: [
          { text: "6 Schritte", count: 26, highlight: true },
          { text: "5 Schritte", count: 20 },
          { text: "4 Schritte", count: 14 },
          { text: "8 Schritte", count: 8 },
        ],
        totalVotes: 68,
        fazit: "Es sind 6 Schritte! Das Modell nach Fiechter und Meier ist im deutschsprachigen Raum das verbreitetste. Und es ist ein Regelkreis — das bedeutet, es hört nie auf. Genau das schauen wir uns jetzt an.",
        fazitB1: "Es sind 6 Schritte! Das Modell von Fiechter und Meier ist sehr bekannt. Es ist ein Kreis — es hört nie auf. Das schauen wir uns jetzt an.",
      },
    },
  },

  // =============================================================
  // Step 2: text (stepbystep) — Die 6 Schritte nach Fiechter und Meier
  // =============================================================
  {
    stepId: "le01-s5-tx-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.78", "Transfer"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 5,
    displayFormat: "stepbystep",
    bildhinweis: "Grafik: Kreislauf mit 6 Schritten (Regelkreis). Jeder Schritt ist ein Pfeil, der zum nächsten führt. Schritt 6 zeigt wieder zurück zu Schritt 1.",
    bildkategorie: "szene",
    contentC1: {
      title: "6 Schritte — ein Regelkreis",
      body: "1. **Informationssammlung** — Alle pflegerelevanten Daten über den Pflegeempfänger sammeln\n2. **Erkennen von Pflegeproblemen und Ressourcen** — Was schränkt den Pflegeempfänger ein? Was kann er noch selbst?\n3. **Festlegung der Pflegeziele** — Was wollen wir erreichen? (SMART formulieren)\n4. **Planung der Pflegemaßnahmen** — Wie erreichen wir die Ziele?\n5. **Durchführung** — Maßnahmen umsetzen\n6. **Evaluation** — Hat es funktioniert? → Zurück zu Schritt 1\n\nMarkus T. (34) sagt: 'Das ist ja wie ein Regelkreis — Ist-Zustand ermitteln, Ziel definieren, Maßnahme planen, prüfen ob es klappt. Das kenne ich aus der Technik!'",
    },
    contentB1: {
      title: "6 Schritte — ein Regelkreis",
      body: "1. **Informationen sammeln** — Alle wichtigen Daten über den Patienten sammeln.\n2. **Pflege-Probleme und Stärken erkennen** — Was schränkt den Patienten ein? Was kann er noch selbst?\n3. **Pflege-Ziele festlegen** — Was wollen wir erreichen?\n4. **Pflege-Maßnahmen planen** — Wie erreichen wir die Ziele?\n5. **Maßnahmen umsetzen** — Die geplanten Maßnahmen machen.\n6. **Ergebnis prüfen** — Hat es funktioniert? Dann geht es zurück zu Schritt 1.\n\nMarkus T. (34) sagt: 'Das ist ja wie ein Kreis! Man prüft den Zustand, plant, macht und prüft wieder. Das kenne ich aus der Technik!'",
    },
  },

  // =============================================================
  // Step 3: sequencing — 6 Schritte in die richtige Reihenfolge
  // =============================================================
  {
    stepId: "le01-s5-sq-03",
    phase: "s5",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.78"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Bringe die Schritte in die richtige Reihenfolge!",
      body: "Du hast die 6 Schritte kennengelernt. Jetzt ist dein Gedächtnis gefragt — ordne sie richtig!",
    },
    contentB1: {
      title: "Bringe die Schritte in die richtige Reihenfolge!",
      body: "Du kennst jetzt die 6 Schritte. Kannst du dich erinnern? Ordne sie richtig!",
    },
    question: {
      fragetext: "Ziehe die Schritte in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Ziehe die Schritte in die richtige Reihenfolge.",
        items: [
          { id: "s1", label: "Informationssammlung" },
          { id: "s2", label: "Erkennen von Pflegeproblemen und Ressourcen" },
          { id: "s3", label: "Festlegung der Pflegeziele" },
          { id: "s4", label: "Planung der Pflegemaßnahmen" },
          { id: "s5", label: "Durchführung" },
          { id: "s6", label: "Evaluation" },
        ],
      },
    },
  },

  // =============================================================
  // Step 4: diagram — Der Regelkreis des Pflegeprozesses
  // =============================================================
  {
    stepId: "le01-s5-dg-04",
    phase: "s5",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.78–84"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 22,
    bildhinweis: "Kreislauf-Diagramm mit 6 Knoten. Jeder Knoten hat eine Beschriftung und eine kurze Erklärung. Pfeil von Knoten 6 zurück zu Knoten 1.",
    bildkategorie: "szene",
    contentC1: {
      title: "Der Regelkreis — visuell",
      body: "Der Pflegeprozess ist kein linearer Ablauf, sondern ein Kreislauf. Nach der Evaluation beginnt die Informationssammlung erneut — angepasst an die aktuelle Situation.",
    },
    contentB1: {
      title: "Der Regelkreis — visuell",
      body: "Der Pflegeprozess ist ein Kreislauf. Er ist keine gerade Linie. Nach Schritt 6 geht es zurück zu Schritt 1. Die Situation des Patienten hat sich vielleicht verändert.",
    },
    question: {
      fragetext: "Erkunde den Regelkreis. Tippe auf die Knoten für Details.",
      diagram: {
        diagramType: "cycle",
        instruction: "Erkunde den Regelkreis. Tippe auf die Knoten für Details.",
        nodes: [
          {
            id: "n1",
            label: "Informationssammlung",
            labelB1: "Informationen sammeln",
          },
          {
            id: "n2",
            label: "Pflegeprobleme + Ressourcen",
            labelB1: "Probleme + Stärken erkennen",
          },
          {
            id: "n3",
            label: "Pflegeziele",
            labelB1: "Pflege-Ziele festlegen",
          },
          {
            id: "n4",
            label: "Pflegemaßnahmen",
            labelB1: "Maßnahmen planen",
          },
          {
            id: "n5",
            label: "Durchführung",
            labelB1: "Maßnahmen umsetzen",
          },
          {
            id: "n6",
            label: "Evaluation",
            labelB1: "Ergebnis prüfen",
            highlight: true,
          },
        ],
        edges: [
          { from: "n1", to: "n2", label: "→" },
          { from: "n2", to: "n3", label: "→" },
          { from: "n3", to: "n4", label: "→" },
          { from: "n4", to: "n5", label: "→" },
          { from: "n5", to: "n6", label: "→" },
          { from: "n6", to: "n1", label: "→ zurück" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 5: cloze — Definitionen einsetzen
  // =============================================================
  {
    stepId: "le01-s5-cl-05",
    phase: "s5",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.80–82"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Lückentext — Fachbegriffe einsetzen",
      body: "Setze die richtigen Fachbegriffe in die Lücken ein. Achte auf den Kontext!",
    },
    contentB1: {
      title: "Lückentext — Fachbegriffe einsetzen",
      body: "Setze die richtigen Fachbegriffe in die Lücken ein. Achte auf den Text davor und danach!",
    },
    question: {
      fragetext: "Wähle den richtigen Begriff für jede Lücke.",
      cloze: {
        textWithBlanks:
          "Die [1] ist eine Methode der strukturierten Datenerhebung zu Beginn des Pflegeprozesses. Ein [2] ist eine Beeinträchtigung, die den Pflegeempfänger in der Selbstpflege einschränkt. [3] sind Fähigkeiten und Einflüsse, die bei der Bearbeitung von Problemen helfen.",
        blanks: [
          {
            id: 1,
            correct: "Pflegeanamnese",
            distractors: ["Pflegeplanung", "Evaluation", "Pflegediagnose"],
          },
          {
            id: 2,
            correct: "Pflegeproblem",
            distractors: ["Pflegeziel", "Pflegebedarf", "Pflegestandard"],
          },
          {
            id: 3,
            correct: "Ressourcen",
            distractors: ["Kompetenzen", "Maßnahmen", "Standards"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: categorize — Informationsarten unterscheiden
  // =============================================================
  {
    stepId: "le01-s5-ca-06",
    phase: "s5",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.80"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 17,
    contentC1: {
      title: "Welche Art von Information ist das?",
      body: "Bei der Informationssammlung unterscheidet man: direkte vs. indirekte Informationen und objektive vs. subjektive Informationen. Ordne die Beispiele richtig ein.",
    },
    contentB1: {
      title: "Welche Art von Information ist das?",
      body: "Beim Sammeln von Informationen gibt es 4 Arten. Direkt = du siehst oder fragst selbst. Indirekt = du liest es oder hörst es von anderen. Objektiv = man kann es messen. Subjektiv = der Patient fühlt es. Ordne die Beispiele richtig ein.",
    },
    question: {
      fragetext: "Ordne jedes Beispiel der richtigen Kategorie zu.",
      categories: [
        { name: "Direkt + Objektiv" },
        { name: "Direkt + Subjektiv" },
        { name: "Indirekt + Objektiv" },
        { name: "Indirekt + Subjektiv" },
      ],
      categoryItems: [
        { text: "Du misst den Blutdruck: 150/90 mmHg", correctCategory: 0 },
        { text: "Der Patient sagt: 'Ich habe Schmerzen'", correctCategory: 1 },
        { text: "Im Arztbrief steht: Diabetes Typ 2", correctCategory: 2 },
        { text: "Die Tochter erzählt: 'Papa isst seit Tagen kaum'", correctCategory: 3 },
      ],
    },
  },

  // =============================================================
  // Step 7: mc — Pflegeprobleme erkennen (am Leitfall)
  // =============================================================
  {
    stepId: "le01-s5-mc-07",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.81", "Transfer"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Fatmas Pflegeprobleme",
      body: "Fatma K. (71) wurde mit Pneumonie aufgenommen. Sie spricht gut Alltagsdeutsch, aber keine Fachsprache. Sie nimmt mehrere Medikamente, kann aber nicht alle benennen. Ihr Sohn hat bisher die Medikamente bestellt.",
    },
    contentB1: {
      title: "Fatmas Pflegeprobleme",
      body: "Fatma K. (71) ist im Krankenhaus. Sie hat eine Pneumonie (= Lungen-Entzündung). Sie spricht gut Alltags-Deutsch. Aber sie versteht keine Fachsprache. Sie nimmt mehrere Medikamente. Aber sie kann nicht alle Namen sagen. Ihr Sohn hat bisher die Medikamente bestellt.",
    },
    question: {
      fragetext: "Welches ist ein **potenzielles** Pflegeproblem bei Fatma?",
      optionen: [
        {
          text: "Fatma hat aktuell Fieber und Husten",
          isCorrect: false,
          explanation: "Das ist ein aktuelles Pflegeproblem — Fieber und Husten bestehen jetzt. Ein potenzielles Problem ist eines, das noch nicht eingetreten ist.",
          explanationB1: "Das ist ein aktuelles Problem. Fatma hat jetzt Fieber und Husten. Ein potenzielles Problem ist noch nicht da.",
        },
        {
          text: "Fatma könnte nach der Entlassung Medikamente verwechseln, weil sie den Plan nicht versteht",
          isCorrect: true,
          explanation: "Genau! Ein potenzielles Pflegeproblem ist ein Problem, das noch nicht eingetreten ist, aber wahrscheinlich eintreten wird. Fatma verwechselt manchmal Tabletten, weil ihr Sohn nicht mehr da ist — nach der Entlassung wird das zum echten Risiko.",
          explanationB1: "Genau! Ein potenzielles Pflege-Problem ist noch nicht da. Aber es wird wahrscheinlich kommen. Fatma könnte zu Hause Tabletten verwechseln. Ihr Sohn ist nicht mehr da. Das ist ein echtes Risiko.",
        },
        {
          text: "Fatma betet fünfmal am Tag",
          isCorrect: false,
          explanation: "Das ist kein Pflegeproblem, sondern ein religiöses Bedürfnis. Es ist bei der Pflegeplanung zu berücksichtigen, aber nicht als Problem zu werten.",
          explanationB1: "Das ist kein Pflege-Problem. Das ist ein religiöses Bedürfnis. Es gehört zur Pflege-Planung — aber nicht als Problem.",
        },
        {
          text: "Fatma spricht Türkisch",
          isCorrect: false,
          explanation: "Das ist ein Merkmal, kein Pflegeproblem. Die Sprachbarriere bei medizinischer Kommunikation wäre ein Pflegeproblem — aber nicht die Sprache selbst.",
          explanationB1: "Das ist ein Merkmal, kein Pflege-Problem. Eine Sprachbarriere bei Fachsprache wäre ein Problem — aber nicht die Sprache selbst.",
        },
      ],
    },
  },

  // =============================================================
  // Step 8: matching — Ressourcen-Kategorien zuordnen
  // =============================================================
  {
    stepId: "le01-s5-ma-08",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.82", "Transfer"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Ressourcen erkennen",
      body: "Ressourcen sind Stärken und Hilfsmittel, die den Pflegeempfänger unterstützen. Es gibt verschiedene Kategorien. Ordne die Beispiele zu.",
    },
    contentB1: {
      title: "Ressourcen erkennen",
      body: "Ressourcen (= Stärken und Hilfen) helfen dem Patienten. Es gibt verschiedene Arten. Ordne die Beispiele richtig zu.",
    },
    question: {
      fragetext: "Verbinde jedes Beispiel mit der richtigen Ressourcen-Kategorie.",
      matchingPairs: [
        { left: "Fatma kann sich selbstständig waschen", right: "Körperliche Ressource" },
        { left: "Fatma ist motiviert, gesund zu werden", right: "Innere Ressource" },
        { left: "Fatmas Sohn ruft täglich an", right: "Soziale Ressource" },
        { left: "Fatma hat eine Krankenversicherung", right: "Ökonomische Ressource" },
        { left: "Fatmas Glaube gibt ihr Kraft", right: "Spirituelle Ressource" },
      ],
    },
  },

  // =============================================================
  // Step 9: text (scenario) — Markus füllt den Anamnesebogen aus
  // =============================================================
  {
    stepId: "le01-s5-tx-09",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.80", "Transfer"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 6,
    displayFormat: "scenario",
    contentC1: {
      title: "Markus und der Anamnesebogen",
      body: "Markus T. (34) führt sein erstes Aufnahmegespräch. Sein Patient, Herr S. (78), kam nach einer Knie-TEP auf die chirurgische Station. Markus nimmt den Anamnesebogen und beginnt: 'Herr S., ich möchte ein paar Fragen stellen, damit wir Sie gut pflegen können.' Herr S. nickt. Markus fragt systematisch: Allgemeinzustand, Mobilität, Ernährung, Schmerzen, psychosoziale Situation. Am Ende sagt seine Praxisanleiterin: 'Gut gemacht! Aber du hast die Ressourcen vergessen — was kann Herr S. noch selbst?'",
    },
    contentB1: {
      title: "Markus und der Anamnesebogen",
      body: "Markus T. (34) macht sein erstes Aufnahme-Gespräch. Sein Patient ist Herr S. (78). Er hat ein neues Knie bekommen (Knie-TEP). Markus nimmt den Anamnese-Bogen (= Fragebogen bei der Aufnahme). Er sagt: 'Herr S., ich möchte Ihnen einige Fragen stellen. So können wir Sie gut pflegen.' Markus fragt nach: Allgemein-Zustand, Bewegung, Essen, Schmerzen und Familie. Am Ende sagt seine Praxis-Anleiterin: 'Gut gemacht! Aber du hast die Ressourcen vergessen. Was kann Herr S. noch selbst?'",
    },
  },

  // =============================================================
  // Step 10: fillin — Pflegeziele SMART formulieren
  // =============================================================
  {
    stepId: "le01-s5-fi-10",
    phase: "s5",
    stepType: "fillin",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.82–83", "Transfer"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 12,
    contentC1: {
      title: "SMART formulieren",
      body: "Pflegeziele müssen SMART formuliert sein: spezifisch, messbar, akzeptiert, realisierbar, terminierbar. Ergänze das fehlende Element.",
    },
    contentB1: {
      title: "SMART formulieren",
      body: "Pflege-Ziele müssen SMART sein. Das bedeutet: spezifisch (= genau), messbar, akzeptiert (= der Patient ist einverstanden), realisierbar (= machbar) und terminierbar (= mit Zeitplan). Setze das fehlende Wort ein.",
    },
    question: {
      fragetext: "Setze das richtige Wort ein.",
      fillin: {
        sentence:
          "Herr S. kann sich innerhalb von _____ Tagen mit Gehstützen selbstständig vom Bett zum Badezimmer bewegen.",
        options: ["5", "morgen", "irgendwann", "bald"],
        correctIndex: 0,
      },
    },
  },

  // =============================================================
  // Step 11: highlight — Fehler in der Pflegeplanung
  // =============================================================
  {
    stepId: "le01-s5-hl-11",
    phase: "s5",
    stepType: "highlight",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.81–83", "Transfer"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 24,
    contentC1: {
      title: "Fehler finden!",
      body: "Markus hat eine Pflegeplanung für Herrn S. geschrieben. Aber es haben sich Fehler eingeschlichen. Finde sie!",
    },
    contentB1: {
      title: "Fehler finden!",
      body: "Markus hat eine Pflege-Planung für Herrn S. geschrieben. Aber es sind Fehler drin. Finde die Fehler!",
    },
    question: {
      fragetext: "Markiere die fehlerhaften Stellen im Text.",
      highlightSegments: [
        {
          text: "Pflegeproblem: ",
          isError: false,
        },
        {
          text: "Herr S. kann nicht laufen.",
          isError: true,
          reason: "Zu ungenau. Besser: 'Herr S. ist nach Knie-TEP rechts in der Mobilität eingeschränkt und kann sich nicht selbstständig vom Bett zum Badezimmer bewegen.' (Spezifisch formulieren!)",
          reasonB1: "Zu ungenau! Besser: Herr S. kann sich nach der Knie-Operation nicht selbst vom Bett zum Bad bewegen.",
        },
        {
          text: " Ressource: ",
          isError: false,
        },
        {
          text: "Hat zwei Beine.",
          isError: true,
          reason: "Keine sinnvolle Ressource. Besser: 'Herr S. ist motiviert, wieder selbstständig zu werden, und hat Vorerfahrung mit Gehstützen.'",
          reasonB1: "Keine sinnvolle Ressource! Besser: Herr S. ist motiviert und kennt Gehstützen schon.",
        },
        {
          text: " Pflegeziel: ",
          isError: false,
        },
        {
          text: "Herr S. soll bald wieder laufen können.",
          isError: true,
          reason: "Nicht SMART. Besser: 'Herr S. kann sich innerhalb von 5 Tagen mit Gehstützen selbstständig vom Bett zum Badezimmer bewegen.'",
          reasonB1: "Nicht SMART! 'Bald' ist nicht messbar. Besser: Herr S. kann sich in 5 Tagen mit Gehstützen selbst bewegen.",
        },
        {
          text: " Maßnahme: ",
          isError: false,
        },
        {
          text: "Physiotherapie.",
          isError: true,
          reason: "Zu vage. Besser: '2× täglich Mobilisation mit Gehstützen unter Anleitung, Schmerzmittel 30 Min. vor Mobilisation.'",
          reasonB1: "Zu vage! Besser: 2× täglich Mobilisation mit Gehstützen. Schmerzmittel 30 Minuten vorher.",
        },
      ],
    },
  },

  // =============================================================
  // Step 12: careplan — Einfache Pflegeplanung am Leitfall
  // =============================================================
  {
    stepId: "le01-s5-cp2-12",
    phase: "s5",
    stepType: "careplan",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.78–84", "Transfer"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Pflegeplanung für Fatma",
      body: "Fatma K. (71) ist wegen Pneumonie stationär. Du hast die Informationssammlung durchgeführt. Jetzt erstellst du eine einfache Pflegeplanung — Schritt für Schritt.",
    },
    contentB1: {
      title: "Pflegeplanung für Fatma",
      body: "Fatma K. (71) ist im Krankenhaus. Sie hat eine Pneumonie (= Lungen-Entzündung). Du hast Informationen gesammelt. Jetzt machst du eine Pflege-Planung. Schritt für Schritt.",
    },
    question: {
      fragetext: "Erstelle eine Pflegeplanung für Fatma.",
      careplan: {
        patientName: "Fatma K.",
        situation:
          "71 J., Pneumonie, spricht kein medizinisches Deutsch, Medikamentenmanagement unsicher (Sohn nicht vor Ort), betet 5× täglich, isst nur halal. Motiviert, nach Hause zu kommen.",
        situationB1:
          "Fatma K., 71 Jahre. Sie hat eine Pneumonie. Sie versteht keine medizinischen Begriffe auf Deutsch. Ihr Sohn ist nicht mehr bei ihr. Er hat die Medikamente bestellt. Fatma betet 5 Mal pro Tag. Sie isst nur halal. Sie möchte nach Hause.",
        steps: [
          {
            phase: "problem",
            prompt: "Was sind Fatmas aktuelle Pflegeprobleme?",
            promptB1: "Was sind Fatmas aktuelle Pflege-Probleme?",
            options: [
              {
                text: "Sprachbarriere bei medizinischer Kommunikation",
                isCorrect: true,
                explanation: "Richtig! Fatma versteht keine Fachsprache — das erschwert die Aufklärung und Edukation.",
                explanationB1: "Richtig! Fatma versteht keine Fachsprache. Das macht Aufklärung schwierig.",
              },
              {
                text: "Fatma betet zu oft",
                isCorrect: false,
                explanation: "Das ist kein Pflegeproblem, sondern ein religiöses Bedürfnis, das in der Pflege respektiert werden muss.",
                explanationB1: "Das ist kein Pflege-Problem. Beten ist ein religiöses Bedürfnis. Es muss respektiert werden.",
              },
              {
                text: "Unsicheres Medikamentenmanagement ohne Sohn",
                isCorrect: true,
                explanation: "Richtig! Das ist ein potenzielles Pflegeproblem — nach der Entlassung besteht das Risiko der Medikamentenverwechslung.",
                explanationB1: "Richtig! Ohne ihren Sohn könnte Fatma Medikamente verwechseln. Das ist ein wichtiges Problem.",
              },
              {
                text: "Fatma ist zu alt für die Station",
                isCorrect: false,
                explanation: "Das ist kein Pflegeproblem. Das Alter allein ist keine Einschränkung.",
                explanationB1: "Das ist kein Pflege-Problem. Das Alter allein ist keine Einschränkung.",
              },
            ],
          },
          {
            phase: "ziel",
            prompt: "Formuliere ein Pflegeziel für das Medikamentenmanagement.",
            promptB1: "Formuliere ein Pflege-Ziel für das Medikamenten-Management.",
            musterantwort:
              "Fatma kann innerhalb von 3 Tagen ihre Medikamente benennen und den Einnahmezeitplan selbstständig erklären — unterstützt durch einen mehrsprachigen Medikamentenplan.",
          },
          {
            phase: "massnahme",
            prompt: "Welche Maßnahmen planst du?",
            promptB1: "Welche Maßnahmen planst du?",
            musterantwort:
              "(1) Mehrsprachigen Medikamentenplan erstellen (Deutsch/Türkisch), (2) Tägliche Medikamentenedukation mit einfacher Sprache, (3) Kollegin Ayşe als Übersetzerin einbinden, (4) Sohn telefonisch über Medikationsplan informieren.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 13: swipe — Pflegeprozess: Richtig angewendet?
  // =============================================================
  {
    stepId: "le01-s5-sw-13",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.23", "I Care Pflege S.78–84"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 11,
    contentC1: {
      title: "Pflegeprozess-Check",
      body: "Ist die Handlung im Sinne des Pflegeprozesses korrekt — oder nicht?",
    },
    contentB1: {
      title: "Pflegeprozess-Check",
      body: "Ist die Handlung richtig nach dem Pflegeprozess? Oder nicht?",
    },
    question: {
      fragetext: "Wische richtig!",
      swipe: {
        instruction: "Wische nach rechts für richtig, nach links für falsch.",
        cards: [
          {
            statement:
              "Die Pflegekraft beginnt sofort mit Maßnahmen, ohne vorher Informationen zu sammeln.",
            statementB1:
              "Die Pflege-Kraft macht Maßnahmen, ohne vorher Informationen zu sammeln.",
            isCorrect: false,
            explanation:
              "Falsch! Ohne Informationssammlung (Schritt 1) fehlt die Grundlage für alle weiteren Schritte.",
            explanationB1:
              "Falsch! Ohne Informationssammlung (Schritt 1) fehlt die Grundlage. Man weiß nicht, was der Patient braucht.",
          },
          {
            statement:
              "Die Pflegekraft formuliert das Ziel: 'Herr M. fühlt sich innerhalb von 3 Tagen wohler.'",
            statementB1:
              "Die Pflege-Kraft schreibt: 'Herr M. fühlt sich in 3 Tagen wohler.'",
            isCorrect: false,
            explanation:
              "Falsch! 'Fühlt sich wohler' ist nicht messbar — das Ziel ist nicht SMART formuliert.",
            explanationB1:
              "Falsch! 'Wohler fühlen' ist nicht messbar. Das Ziel ist nicht SMART.",
          },
          {
            statement:
              "Nach der Durchführung evaluiert die Pflegekraft, ob das Pflegeziel erreicht wurde.",
            statementB1:
              "Nach den Maßnahmen prüft die Pflege-Kraft, ob das Pflege-Ziel erreicht wurde.",
            isCorrect: true,
            explanation:
              "Richtig! Evaluation (Schritt 6) ist Pflicht — sie schließt den Regelkreis.",
            explanationB1:
              "Richtig! Evaluation (Schritt 6) ist Pflicht. Sie schließt den Kreis.",
          },
          {
            statement:
              "Der Pflegeprozess gehört zu den vorbehaltenen Tätigkeiten nach § 4 PflBG.",
            statementB1:
              "Der Pflegeprozess gehört zu den vorbehaltenen Tätigkeiten (= nur für Pflege-Fachkräfte).",
            isCorrect: true,
            explanation:
              "Richtig! Organisation, Gestaltung und Steuerung des Pflegeprozesses ist vorbehaltene Tätigkeit nach § 4 PflBG.",
            explanationB1:
              "Richtig! Den Pflegeprozess zu planen und zu steuern dürfen nur Pflege-Fachkräfte.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: reflection — Was war das Schwierigste?
  // =============================================================
  {
    stepId: "le01-s5-rf-14",
    phase: "s5",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.78–84", "Transfer"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Dein Rückblick",
      body: "Du hast den Pflegeprozess in allen 6 Schritten kennengelernt — von der Informationssammlung bis zur Evaluation. Und du hast ihn an Fatmas Fall angewendet.",
    },
    contentB1: {
      title: "Dein Rückblick",
      body: "Du kennst jetzt alle 6 Schritte des Pflegeprozesses. Du hast den Prozess bei Fatma angewendet.",
    },
    question: {
      fragetext:
        "Was war für dich das Schwierigste am Pflegeprozess? Was hat dich überrascht?",
      reflection: {
        prompt:
          "Was war für dich das Schwierigste am Pflegeprozess? Was hat dich überrascht?",
        placeholder: "Schreibe mindestens 3 Sätze...",
        systemPrompt:
          "Gib dem Schüler konstruktives Feedback nach dem Sandwich-Prinzip: Lobe zuerst, dann korrigiere falls nötig, dann ermutige. Achte auf: Bezug auf den Pflegeprozess (6 Schritte), SMART-Ziele, Regelkreis-Charakter. Sprache: freundlich, ermutigend, klar.",
      },
    },
  },
];
