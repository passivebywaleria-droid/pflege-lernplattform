// Session 2: "Systematisch pflegen" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB3: Pflegeprozess (KB-I, F01-F06) + TB4: Beobachtung & Wahrnehmung (KB-I, F07-F08)
// Leitfall: Yasemin Demirci — beobachtet Aufnahmegespräch (Szene S1)
// Bloom: B1-B3, 22 Steps, ~30 Min, Interleaving: 10%

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // =============================================================
  // Step 1: Session-Bookend — Vorwissen aktivieren
  // =============================================================
  {
    stepId: "le01-s2-bk-01",
    phase: "s2",
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Dein Wissensstand",
      body: "Schätze dich ein: Wie gut kennst du dich mit dem Pflegeprozess aus?",
    },
    contentB1: {
      title: "Was weißt du schon?",
      body: "Wie gut kennst du den Pflegeprozess? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich weiß, was der Pflegeprozess ist.",
        "Ich kann die 6 Schritte des Pflegeprozesses benennen.",
        "Ich weiß, was eine Pflegeanamnese ist.",
        "Ich kann erklären, was systematische Beobachtung bedeutet.",
        "Ich kenne mindestens 3 Wahrnehmungsfehler.",
      ],
    },
  },

  // =============================================================
  // TB3: Pflegeprozess — BRÜCKE (Phase 0)
  // =============================================================
  {
    stepId: "le01-s2-tb3-01",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "BRÜCKE",
    contentC1: {
      title: "Rückblick und Ausblick",
      body: "In Session 1 hast du gelernt, **was Pflege ist** — ein eigenverantwortlicher Beruf mit 5 Schlüsselaufgaben (ICN) und einer langen Geschichte.\n\nHeute geht es um die nächste Frage: **Wie wird Pflege systematisch geplant?**\n\nPflege passiert nicht zufällig. Es gibt einen klaren Ablauf — den **Pflegeprozess**. Yasemin wird heute ein Aufnahmegespräch beobachten und dabei lernen, wie dieser Prozess in der Praxis funktioniert.",
      fallbezug: "Yasemin weiß jetzt, dass Pflege mehr ist als waschen und Medikamente geben. Heute lernt sie das Werkzeug, mit dem sie professionell pflegen kann.",
    },
    contentB1: {
      title: "Was kommt heute?",
      body: "Gestern hast du gelernt: Pflege ist ein eigenverantwortlicher Beruf.\n\nHeute lernst du: **Wie plant man Pflege?** Es gibt einen festen Ablauf — den **Pflegeprozess**. Yasemin schaut heute bei einem Aufnahmegespräch zu.",
      fallbezug: "Yasemin lernt heute, wie man Pflege plant.",
    },
  },

  // =============================================================
  // TB3: Pflegeprozess — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s2-tb3-02",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Das Aufnahmegespräch",
      body: "Yasemin beobachtet, wie ihre Praxisanleiterin ein Aufnahmegespräch mit einem neuen Patienten führt.",
      fallbezug: "Yasemin sitzt leise daneben und beobachtet. Sie merkt: Das Gespräch folgt einem roten Faden — nichts ist zufällig.",
    },
    contentB1: {
      title: "Ein neuer Patient kommt",
      body: "Yasemin schaut zu: Die Praxisanleiterin spricht mit einem neuen Patienten.",
      fallbezug: "Yasemin beobachtet und merkt: Das Gespräch hat einen Plan.",
    },
    question: {
      fragetext: "Im Aufnahmegespräch:",
      patientName: "Herr Müller",
      dialogPhases: [
        {
          context: "Herr Müller sitzt auf dem Bett. Er ist gerade auf die Station gekommen. Die Praxisanleiterin sagt: 'Herr Müller, willkommen auf unserer Station. Ich stelle Ihnen ein paar Fragen, damit wir Ihre Pflege gut planen können.' Herr Müller seufzt: 'Muss das jetzt sein? Ich bin müde von der Fahrt.' Die Praxisanleiterin wendet sich an dich: 'Yasemin, was würdest du jetzt sagen?'",
          contextB1: "Herr Müller ist neu auf der Station. Er ist müde. Die Praxisanleiterin will ein Aufnahmegespräch führen. Er fragt: 'Muss das jetzt sein?' Die Praxisanleiterin fragt dich: 'Was würdest du sagen?'",
          speaker: "Herr Müller",
          options: [
            {
              text: "Ich würde ihm sagen, dass ich verstehe, dass er müde ist — und fragen, ob wir eine kurze Pause einlegen können, wenn es zu viel wird. Stimmt das so?",
              textB1: "Ich würde sagen: Ich verstehe, dass Sie müde sind. Wir können eine Pause machen. Ist das richtig so?",
              patientResponse: "Die Praxisanleiterin nickt: 'Genau richtig! Du zeigst Verständnis und gibst ihm Kontrolle.' Herr Müller entspannt sich: 'Na gut, wenn es nicht so lange dauert.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Genau! Du zeigst Verständnis.' Herr Müller sagt: 'Okay, dann fangen wir an.'",
              score: 3,
              feedback: "Perfekt! Du zeigst Verständnis für seine Situation und gibst ihm Kontrolle (Pause anbieten). Das ist empathische Kommunikation — der Patient fühlt sich respektiert und kooperiert.",
              feedbackB1: "Super! Du verstehst den Patienten und gibst ihm die Möglichkeit für eine Pause. So fühlt er sich respektiert.",
            },
            {
              text: "Ich glaube, ich würde ihm erklären, dass das Gespräch Pflicht ist und wir es hinter uns bringen sollten. Oder ist das zu direkt?",
              textB1: "Ich würde sagen: Das Gespräch ist wichtig, wir sollten es jetzt machen. Ist das okay so?",
              patientResponse: "Die Praxisanleiterin überlegt: 'Der Inhalt stimmt — das Gespräch ist Pflicht. Aber versuch, erst Verständnis zu zeigen. Dann ist der Patient viel offener.' Herr Müller brummt: 'Na toll...'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Richtig, aber zeige erst Verständnis. Dann ist er offener.' Herr Müller sagt: 'Na gut...'",
              score: 2,
              feedback: "Inhaltlich richtig — das Gespräch ist wichtig. Aber der Ton ist etwas kühl. Besser: Erst Verständnis zeigen, dann den Rahmen erklären. So fühlt sich der Patient nicht überrumpelt.",
              feedbackB1: "Richtig, das Gespräch ist wichtig. Aber zeige zuerst Verständnis. Dann ist der Patient offener.",
            },
            {
              text: "Hmm, er ist so müde... Vielleicht sollten wir das Gespräch lieber auf morgen verschieben?",
              textB1: "Er ist sehr müde. Können wir das nicht morgen machen?",
              patientResponse: "Die Praxisanleiterin schüttelt den Kopf: 'Ich verstehe deinen Gedanken — aber die Pflegeanamnese ist die Grundlage für alles. Ohne sie können wir heute Nacht keine gute Pflege planen.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Nett gedacht, aber ohne das Gespräch können wir die Pflege nicht planen.'",
              score: 1,
              feedback: "Verständnisvoll — aber problematisch: Die Pflegeanamnese ist die Grundlage für die Pflegeplanung. Ohne sie können wichtige Maßnahmen verzögert werden. Besser: Empathie zeigen UND das Gespräch trotzdem führen.",
              feedbackB1: "Nett gemeint, aber gefährlich: Ohne das Gespräch kann die Pflege nicht richtig geplant werden. Besser: Verständnis zeigen und trotzdem anfangen.",
            },
          ],
        },
        {
          context: "Das Gespräch läuft. Die Praxisanleiterin fragt nach seinen Gewohnheiten. Herr Müller sagt: 'Ich wasche mich immer selbst. Das lasse ich mir nicht nehmen.' Dann wird er leiser: 'Aber... mein rechter Arm macht nicht mehr so mit seit der OP.' Die Praxisanleiterin schaut dich an: 'Yasemin, was fällt dir an dieser Aussage auf?'",
          contextB1: "Herr Müller sagt: 'Ich wasche mich immer selbst.' Dann sagt er leise: 'Aber mein rechter Arm geht nicht mehr so gut.' Die Praxisanleiterin fragt dich: 'Was fällt dir auf?'",
          speaker: "Herr Müller",
          options: [
            {
              text: "Mir fällt auf, dass er sich selbst waschen will — das ist eine Stärke, oder? Aber der Arm macht Probleme. Vielleicht könnte man ihn fragen, wie weit der Arm noch geht?",
              textB1: "Er will sich selbst waschen — das ist gut, oder? Aber der Arm macht Probleme. Soll man fragen, wie weit der Arm geht?",
              patientResponse: "Die Praxisanleiterin strahlt: 'Genau! Du hast beides erkannt — die Ressource und das Problem. Frag ihn ruhig.' Herr Müller zeigt seinen Arm: 'So weit geht er. Beim Rücken brauche ich vielleicht doch Hilfe.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Genau richtig! Du siehst die Stärke und das Problem.' Herr Müller zeigt seinen Arm: 'Beim Rücken brauche ich vielleicht Hilfe.'",
              score: 3,
              feedback: "Vorbildlich! Du erkennst die Ressource (Selbstständigkeit) UND das Problem (Armeinschränkung). Genau das ist Schritt 2 im Pflegeprozess: Probleme und Ressourcen erkennen.",
              feedbackB1: "Super! Du siehst die Stärke (will selbst waschen) und das Problem (Arm). Das ist Schritt 2 im Pflegeprozess.",
            },
            {
              text: "Ich denke, wir sollten ihm beim Waschen helfen, damit nichts passiert. Sicherheit geht doch vor, oder?",
              textB1: "Wir sollten ihm beim Waschen helfen, oder? Damit nichts passiert.",
              patientResponse: "Herr Müller runzelt die Stirn: 'Aber ich will das selbst...' Die Praxisanleiterin erklärt dir leise: 'Vorsicht — er KANN vieles noch selbst. Ihm alles abzunehmen ist nicht gut für ihn.'",
              patientResponseB1: "Herr Müller sagt: 'Aber ich will das selbst machen...' Die Praxisanleiterin sagt: 'Er kann vieles noch. Nicht alles abnehmen.'",
              score: 1,
              feedback: "Gut gemeint — aber du übergehst seine Ressource! Herr Müller KANN sich teilweise selbst waschen und das ist ihm wichtig. Ihm alles abzunehmen fördert Unselbstständigkeit und verletzt seine Würde.",
              feedbackB1: "Nett gemeint, aber falsch: Der Patient kann vieles selbst! Ihm alles abzunehmen ist nicht gut für ihn.",
            },
            {
              text: "Er hat ein Problem mit dem Arm — das muss man aufschreiben, oder? Ich würde fragen, was er sonst noch alleine kann.",
              textB1: "Der Arm ist ein Problem. Das muss man aufschreiben, oder? Und fragen, was er noch alleine kann?",
              patientResponse: "Die Praxisanleiterin nickt: 'Richtig, dokumentieren ist wichtig. Aber hast du gehört, was er zuerst gesagt hat? Er WILL sich selbst waschen — das ist eine Ressource!' Herr Müller ergänzt: 'Rücken und rechte Seite sind schwierig, aber sonst geht alles.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Richtig, aufschreiben. Aber vergiss nicht: Er will selbst waschen — das ist eine Stärke!'",
              score: 2,
              feedback: "Du dokumentierst richtig und fragst nach weiteren Ressourcen — gut! Aber du hast seine Aussage nicht wertgeschätzt. Erst anerkennen, was er kann, dann nach Einschränkungen fragen.",
              feedbackB1: "Du schreibst es auf und fragst weiter — gut. Aber sage zuerst: 'Toll, dass Sie so viel selbst können!'",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // TB3: ERKLÄRUNG (Phase 2) — Pflegeprozess nach Fiechter/Meier
  // =============================================================
  {
    stepId: "le01-s2-tb3-03",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/pflegeprozess-kreislauf.svg",
    imageAlt: "Grafik: Die 6 Schritte des Pflegeprozesses nach Fiechter/Meier als Kreislauf",
    contentC1: {
      title: "Der Pflegeprozess — 6 Schritte",
      body: "Der Pflegeprozess ist ein **systematischer, zielgerichteter Problemlösungsprozess**, in dem gemeinsam mit dem Pflegeempfänger der individuelle Pflegebedarf erhoben wird.\n\nDas Modell nach **Fiechter und Meier** umfasst 6 Schritte:\n\n1. **Informationssammlung** — Daten erheben (Pflegeanamnese)\n2. **Probleme und Ressourcen erkennen** — Was braucht der Patient? Was kann er selbst?\n3. **Ziele festlegen** — Wohin soll es gehen?\n4. **Maßnahmen planen** — Wie erreichen wir das Ziel?\n5. **Maßnahmen durchführen** — Handeln!\n6. **Wirkung beurteilen (Evaluation)** — Hat es funktioniert?\n\nWichtig: Der Pflegeprozess ist ein **Kreislauf** — nach der Evaluation beginnt er wieder bei Schritt 1.",
      fallbezug: "Was Yasemin gerade beobachtet, ist Schritt 1: Die Praxisanleiterin sammelt Informationen.",
    },
    contentB1: {
      title: "6 Schritte der Pflege",
      body: "Der Pflegeprozess ist ein **Plan in 6 Schritten**:\n\n1. **Informationen sammeln** — Was ist los?\n2. **Probleme und Stärken finden** — Was braucht der Patient?\n3. **Ziele setzen** — Was wollen wir erreichen?\n4. **Maßnahmen planen** — Was tun wir?\n5. **Maßnahmen durchführen** — Jetzt handeln!\n6. **Prüfen** — Hat es geklappt?\n\nDanach geht es wieder von vorne los.",
      fallbezug: "Yasemin sieht gerade Schritt 1: Informationen sammeln.",
    },
  },

  // =============================================================
  // TB3: ERKLÄRUNG (Phase 2) — Kreislauf-Diagramm
  // =============================================================
  {
    stepId: "le01-s2-tb3-04",
    phase: "s2",
    stepType: "diagram",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Der Pflegeprozess als Kreislauf",
      body: "Schau dir den Kreislauf an: Nach der Evaluation startet der Prozess erneut — Pflege hört nie auf.",
    },
    contentB1: {
      title: "Ein Kreislauf",
      body: "Der Pflegeprozess dreht sich im Kreis. Nach dem Prüfen fängt man wieder an.",
    },
    question: {
      fragetext: "Die 6 Schritte nach Fiechter und Meier:",
      diagram: {
        diagramType: "cycle",
        instruction: "Der Pflegeprozess als Kreislauf",
        nodes: [
          { id: "s1", label: "1. Informationssammlung" },
          { id: "s2", label: "2. Probleme & Ressourcen" },
          { id: "s3", label: "3. Ziele festlegen" },
          { id: "s4", label: "4. Maßnahmen planen" },
          { id: "s5", label: "5. Durchführen" },
          { id: "s6", label: "6. Evaluation" },
        ],
        edges: [
          { from: "s1", to: "s2" },
          { from: "s2", to: "s3" },
          { from: "s3", to: "s4" },
          { from: "s4", to: "s5" },
          { from: "s5", to: "s6" },
          { from: "s6", to: "s1", label: "Kreislauf" },
        ],
      },
    },
  },

  // =============================================================
  // TB3: CHECKPOINT (Phase 3) — MC
  // =============================================================
  {
    stepId: "le01-s2-tb3-05",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Hast du die 6 Schritte verstanden? Diese Frage misst auch deine Antwortzeit.",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Kennst du die 6 Schritte? Antworte so schnell du kannst.",
    },
    question: {
      fragetext: "Welcher Schritt kommt NACH der Informationssammlung im Pflegeprozess?",
      optionen: [
        { text: "Probleme und Ressourcen erkennen", isCorrect: true, explanation: "Richtig! Nach dem Sammeln der Informationen werden Probleme und Ressourcen des Pflegeempfängers identifiziert — erst dann können Ziele festgelegt werden." },
        { text: "Maßnahmen durchführen", isCorrect: false, explanation: "Nein — bevor man handelt, muss man erst Probleme erkennen, Ziele setzen und Maßnahmen planen." },
        { text: "Ziele festlegen", isCorrect: false, explanation: "Fast! Ziele kommen erst in Schritt 3 — vorher müssen in Schritt 2 die Probleme und Ressourcen erkannt werden." },
        { text: "Evaluation", isCorrect: false, explanation: "Die Evaluation ist der letzte Schritt (Schritt 6). Erst am Ende prüft man, ob die Maßnahmen gewirkt haben." },
      ],
    },
  },

  // =============================================================
  // TB3: ANDERS_ERKLÄRT (Phase 4) — Pflegeprozess vs. Arztbesuch
  // =============================================================
  {
    stepId: "le01-s2-tb3-06",
    phase: "s2",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Pflegeprozess vs. Arztbesuch",
      body: "Der Pflegeprozess ähnelt dem Ablauf beim Arzt — aber mit einem wichtigen Unterschied: Die Pflege sieht den ganzen Menschen, nicht nur die Krankheit.",
    },
    contentB1: {
      title: "Wie beim Arzt — aber anders",
      body: "Der Pflegeprozess funktioniert ähnlich wie ein Arztbesuch. Aber die Pflege schaut auf den ganzen Menschen.",
    },
    question: {
      fragetext: "Vergleiche die beiden Abläufe:",
      comparison: {
        instruction: "Pflegeprozess vs. Arztbesuch",
        columns: [
          { label: "Pflegeprozess", icon: "heart-pulse" },
          { label: "Arztbesuch", icon: "stethoscope" },
        ],
        rows: [
          { criterion: "Schritt 1", values: ["Pflegeanamnese: Gespräch, Beobachtung, Biografie", "Anamnese: Beschwerden erfragen"] },
          { criterion: "Schritt 2", values: ["Pflegeprobleme UND Ressourcen erkennen", "Diagnose stellen"] },
          { criterion: "Schritt 3", values: ["Pflegeziele gemeinsam festlegen", "Therapieziel festlegen"] },
          { criterion: "Schritt 4", values: ["Pflegemaßnahmen planen", "Therapie verordnen"] },
          { criterion: "Schritt 5", values: ["Maßnahmen durchführen", "Behandlung durchführen"] },
          { criterion: "Schritt 6", values: ["Evaluation: Kreislauf beginnt neu", "Kontrolle: ggf. Therapie anpassen"] },
          { criterion: "Fokus", values: ["Ganzer Mensch: körperlich, seelisch, sozial", "Krankheit und Symptome"] },
        ],
      },
    },
  },

  // =============================================================
  // TB3: PRAXIS_DIALOG (Phase 6) — Pflegeanamnese
  // =============================================================
  {
    stepId: "le01-s2-tb3-07",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.80"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "PRAXIS_DIALOG",
    contentC1: {
      title: "Das wichtigste Werkzeug",
      body: "Nach dem Aufnahmegespräch erklärt die Praxisanleiterin Yasemin, warum die Pflegeanamnese so wichtig ist.",
      fallbezug: "Yasemin versteht: Ohne gute Informationssammlung kann man keine Pflege planen.",
    },
    contentB1: {
      title: "Warum das Gespräch wichtig ist",
      body: "Die Praxisanleiterin erklärt Yasemin, warum das Aufnahmegespräch so wichtig ist.",
      fallbezug: "Yasemin lernt: Gute Pflege beginnt mit gutem Zuhören.",
    },
    question: {
      fragetext: "Nach dem Aufnahmegespräch:",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Nach dem Aufnahmegespräch fragt Yasemin ihre Praxisanleiterin: 'Das war ja ein richtiges Interview! Woher wussten Sie, was Sie fragen müssen?' Die Praxisanleiterin erklärt: 'Das ist die Pflegeanamnese — eine strukturierte Datenerhebung. Ich erfasse systematisch alles, was für die Pflege wichtig ist.'",
          contextB1: "Das Gespräch ist vorbei. Yasemin fragt: 'Woher wussten Sie, was Sie fragen müssen?' Die Praxisanleiterin sagt: 'Das ist die Pflegeanamnese. Ich frage alles, was für die Pflege wichtig ist.'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Warum ist die Pflegeanamnese so wichtig? Was passiert, wenn man sie nicht richtig macht?",
              textB1: "Warum ist das Gespräch so wichtig? Was passiert ohne die Pflegeanamnese?",
              patientResponse: "Ohne Pflegeanamnese pflegen wir blind. Wir wüssten nicht, was Herr Müller kann und was nicht. Dann planen wir an seinen Bedürfnissen vorbei — und das kann gefährlich werden.",
              patientResponseB1: "Ohne dieses Gespräch wissen wir nicht, was der Patient braucht. Dann planen wir falsch.",
              score: 3,
              feedback: "Ausgezeichnet! Du fragst nach dem Warum — das zeigt Verständnis auf Bloom-Stufe 2. Die Pflegeanamnese ist die Grundlage des gesamten Pflegeprozesses. Ohne sie kann man keine Probleme erkennen und keine Ziele setzen.",
              feedbackB1: "Super Frage! Die Pflegeanamnese ist die Grundlage. Ohne sie kann man keine Pflege planen.",
            },
            {
              text: "Kann man nicht einfach die Akte vom Arzt nehmen? Da steht doch schon alles drin.",
              textB1: "Kann man nicht einfach die Akte vom Arzt lesen?",
              patientResponse: "Die ärztliche Anamnese ist wichtig — aber die Pflege schaut auf andere Dinge. Der Arzt fragt nach der Diagnose. Wir fragen: Was kann der Patient noch selbst? Was ist ihm wichtig? Wie lebt er zu Hause?",
              patientResponseB1: "Der Arzt fragt nach der Krankheit. Wir fragen: Was kann der Patient noch? Was ist ihm wichtig?",
              score: 2,
              feedback: "Guter Gedanke — aber die pflegerische Perspektive ist eine andere als die ärztliche. Die Pflegeanamnese erfasst den ganzen Menschen: Ressourcen, Gewohnheiten, Wünsche. Das steht nicht in der Arzt-Akte.",
              feedbackB1: "Gute Frage! Aber die Pflege schaut auf andere Dinge als der Arzt. Deshalb braucht sie ein eigenes Gespräch.",
            },
            {
              text: "30 Minuten ist ganz schön lang. Geht das nicht schneller?",
              textB1: "30 Minuten ist lang. Kann man das kürzer machen?",
              patientResponse: "Ich verstehe — 30 Minuten klingt viel. Aber bedenke: In diesen 30 Minuten lernst du den Menschen kennen, der dir anvertraut ist. Das spart später Zeit, weil du genau weißt, was er braucht.",
              patientResponseB1: "30 Minuten klingen viel. Aber danach weißt du genau, was der Patient braucht. Das spart später Zeit.",
              score: 1,
              feedback: "Verständlicher Einwand — aber die Pflegeanamnese braucht Zeit, weil sie den ganzen Menschen erfasst. Empathie, Vertrauen aufbauen und genau zuhören geht nicht in 5 Minuten. Die investierte Zeit zahlt sich aus.",
              feedbackB1: "30 Minuten sind nötig, um den Patienten richtig kennenzulernen. Das ist eine Investition, die sich lohnt.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin fährt fort: 'Übrigens — bei der Pflegeanamnese geht es nicht nur um Probleme. Erinnerst du dich, was Herr Müller über das Waschen gesagt hat?'",
          contextB1: "Die Praxisanleiterin fragt: 'Bei der Pflegeanamnese geht es nicht nur um Probleme. Was hat Herr Müller über das Waschen gesagt?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Er hat gesagt, er will sich selbst waschen — das wäre dann eine Ressource, oder? Also sollten wir das eher unterstützen, statt es ihm abzunehmen?",
              textB1: "Er will sich selbst waschen — ist das eine Stärke? Dann sollten wir ihm das nicht wegnehmen, oder?",
              patientResponse: "Genau! Ressourcen erkennen ist genauso wichtig wie Probleme erkennen. Das ist Schritt 2 im Pflegeprozess. Wer nur Defizite sieht, macht den Patienten zum Pflegefall — und das wollen wir nicht.",
              patientResponseB1: "Genau! Stärken erkennen ist genauso wichtig wie Probleme. Wir wollen den Patienten nicht zum Pflegefall machen.",
              score: 3,
              feedback: "Perfekt! Du verbindest Theorie und Praxis: Ressourcen erkennen ist Teil von Schritt 2 (Probleme UND Ressourcen). Das zeigt, dass du den Pflegeprozess verstanden hast.",
              feedbackB1: "Super! Du hast verstanden: Man muss auch die Stärken sehen, nicht nur die Probleme.",
            },
            {
              text: "Ich glaube, er hat was mit dem Arm gesagt? Das müsste man dann in der Pflegeplanung berücksichtigen, oder?",
              textB1: "Sein Arm macht Probleme, oder? Das muss man aufschreiben.",
              patientResponse: "Stimmt — die Armeinschränkung ist ein Pflegeproblem. Aber du hast die andere Hälfte vergessen: Er WILL sich selbst waschen. Das ist seine Ressource! Beides gehört zusammen.",
              patientResponseB1: "Richtig, der Arm ist ein Problem. Aber er will sich selbst waschen — das ist eine Stärke! Beides ist wichtig.",
              score: 2,
              feedback: "Du erkennst das Problem — gut! Aber Schritt 2 im Pflegeprozess heißt: Probleme UND Ressourcen erkennen. Herr Müllers Wunsch nach Selbstständigkeit ist eine wichtige Ressource.",
              feedbackB1: "Du siehst das Problem — gut! Aber vergiss nicht die Stärke: Er will selbst waschen. Beides gehört zusammen.",
            },
            {
              text: "Oh, ich habe nicht so genau aufgepasst... Können Sie mir nochmal sagen, was er gesagt hat?",
              textB1: "Ich weiß es nicht mehr genau. Können Sie es nochmal sagen?",
              patientResponse: "Kein Problem! Herr Müller hat gesagt: 'Ich wasche mich immer selbst.' Das ist eine Ressource — eine Stärke des Patienten. In der Pflegeanamnese achten wir immer auf Probleme UND Ressourcen.",
              patientResponseB1: "Kein Problem! Herr Müller will sich selbst waschen. Das ist eine Stärke. Bei der Pflegeanamnese achten wir auf Probleme und Stärken.",
              score: 1,
              feedback: "Kein Problem — jetzt weißt du es! In der Pflegeanamnese ist es wichtig, genau zuzuhören. Jede Aussage des Patienten kann ein Hinweis auf Probleme ODER Ressourcen sein.",
              feedbackB1: "Kein Problem! Merke dir: Bei der Pflegeanamnese genau zuhören. Der Patient sagt dir, was er kann und was nicht.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // TB3: PATIENTEN_PERSPEKTIVE (Phase 7)
  // =============================================================
  {
    stepId: "le01-s2-tb3-08",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.80-82"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    contentC1: {
      title: "Wie Patienten das Aufnahmegespräch erleben",
      body: "Herr Brenner, 82, erinnert sich an sein eigenes Aufnahmegespräch:\n\n*\"Ich war nervös, als ich hier ankam. Aber die Schwester hat sich hingesetzt, mich angeschaut und gesagt: 'Erzählen Sie mal.' Nicht sofort Blutdruck messen oder Formulare ausfüllen — sie hat zugehört.\n\nSie hat gefragt, was ich noch alleine kann. Was mir wichtig ist. Ob ich Hilfe beim Waschen brauche. Das war mir peinlich — aber sie hat es so gefragt, dass es okay war.\n\nIch hatte das Gefühl: Die wissen jetzt, wer ich bin. Nicht nur meine Diagnose.\"*\n\nDas ist der Sinn der Pflegeanamnese: Den Menschen kennenlernen — seine **Probleme UND seine Ressourcen**.",
      fallbezug: "Yasemin versteht: Gute Pflege sieht nicht nur die Krankheit — sie sieht den ganzen Menschen.",
    },
    contentB1: {
      title: "So erlebt ein Patient das Gespräch",
      body: "Herr Brenner, 82, erzählt:\n\n*\"Die Pflegerin hat sich hingesetzt und zugehört. Sie hat gefragt: Was können Sie noch alleine? Was ist Ihnen wichtig? Ich hatte das Gefühl: Sie kennt mich jetzt — nicht nur meine Krankheit.\"*\n\nDas ist das Ziel: Den ganzen Menschen sehen — seine Probleme **und** seine Stärken.",
      fallbezug: "Yasemin versteht: Gute Pflege beginnt mit Zuhören.",
    },
  },

  // =============================================================
  // TB3: ANWENDUNG (Phase 9) — Sorting 6 Schritte
  // =============================================================
  {
    stepId: "le01-s2-tb3-09",
    phase: "s2",
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Die richtige Reihenfolge",
      body: "Bringe die 6 Schritte des Pflegeprozesses in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Sortiere die Schritte!",
      body: "Welcher Schritt kommt zuerst? Sortiere alle 6 Schritte.",
    },
    question: {
      fragetext: "Sortiere die 6 Schritte des Pflegeprozesses nach Fiechter und Meier:",
      sortItems: [
        "Informationssammlung",
        "Probleme und Ressourcen erkennen",
        "Ziele festlegen",
        "Maßnahmen planen",
        "Maßnahmen durchführen",
        "Evaluation (Wirkung beurteilen)",
      ],
    },
  },

  // =============================================================
  // TB3: REFLEXION (Phase 10) — Confidence
  // =============================================================
  {
    stepId: "le01-s2-tb3-10",
    phase: "s2",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Wie sicher bist du jetzt?",
      body: "Du hast den Pflegeprozess kennengelernt. Schätze dich ein.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Verstehst du den Pflegeprozess? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann die 6 Schritte des Pflegeprozesses benennen.",
        "Ich weiß, was eine Pflegeanamnese ist.",
        "Ich verstehe, warum der Pflegeprozess ein Kreislauf ist.",
      ],
    },
  },

  // =============================================================
  // Snack-Step: Slider zwischen TB3 und TB4
  // =============================================================
  {
    stepId: "le01-s2-sn-01",
    phase: "s2",
    stepType: "slider",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Was schätzt du?",
      body: "Wie viel Prozent der Arbeitszeit verbringen Pflegefachkräfte mit Dokumentation?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Wie viel Arbeitszeit geht für das Aufschreiben drauf?",
    },
    question: {
      fragetext: "Wie viel Prozent der Arbeitszeit verbringen Pflegefachkräfte mit Dokumentation?",
      slider: {
        instruction: "Schätze den Anteil der Dokumentation an der täglichen Arbeitszeit:",
        unit: "%",
        min: 0,
        max: 100,
        step: 5,
        correctValue: 30,
        tolerance: 10,
        explanation: "Studien zeigen: Pflegefachkräfte verbringen ca. 25-35% ihrer Arbeitszeit mit Dokumentation. Das ist viel — aber nötig, weil nur gute Dokumentation den Pflegeprozess nachvollziehbar macht.",
        explanationB1: "Pflegekräfte schreiben etwa 30% der Zeit auf, was sie tun. Das klingt viel — aber ohne Aufschreiben weiß niemand, was der Patient braucht.",
      },
    },
  },

  // =============================================================
  // TB4: Beobachtung & Wahrnehmung — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s2-tb4-01",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Gute Augen",
      body: "Yasemin fällt etwas auf, das die Praxisanleiterin beeindruckt.",
      fallbezug: "Yasemin hat eine gute Beobachtungsgabe — eine ihrer wichtigsten Ressourcen.",
    },
    contentB1: {
      title: "Yasemin beobachtet genau",
      body: "Yasemin fällt etwas Wichtiges auf.",
      fallbezug: "Yasemin kann gut beobachten. Das ist eine große Stärke.",
    },
    question: {
      fragetext: "Am Nachmittag auf Station:",
      patientName: "Frau Klein",
      dialogPhases: [
        {
          context: "Am Nachmittag auf Station. Yasemin bemerkt, dass Frau Klein anders atmet als heute Morgen — schneller und flacher. Die Praxisanleiterin ist gerade am Stationszimmer. Was tut Yasemin?",
          contextB1: "Nachmittag auf der Station. Yasemin sieht: Frau Klein atmet schneller als heute Morgen. Die Praxisanleiterin ist in der Nähe. Was macht Yasemin?",
          speaker: "Frau Klein",
          options: [
            {
              text: "Ich gehe sofort zur Praxisanleiterin und sage: 'Frau Klein atmet anders als heute Morgen — schneller und flacher. Können wir gemeinsam nachschauen?'",
              textB1: "Ich sage der Praxisanleiterin: 'Frau Klein atmet schneller als heute Morgen. Können wir nachschauen?'",
              patientResponse: "Die Praxisanleiterin lächelt: 'Das hast du gut beobachtet! Schnellere, flachere Atmung kann ein wichtiges Zeichen sein. Lass uns zusammen zu ihr gehen.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Gut beobachtet! Das kann wichtig sein. Lass uns zusammen hinschauen.'",
              score: 3,
              feedback: "Vorbildlich! Du beschreibst genau, was du beobachtest (schneller, flacher) und vergleichst mit dem Zustand von heute Morgen. Du handelst sofort und holst dir Unterstützung. Das ist systematische Beobachtung in der Praxis.",
              feedbackB1: "Super! Du sagst genau, was du siehst, und holst dir Hilfe. So macht man das richtig.",
            },
            {
              text: "Ich schaue erstmal eine Weile zu und warte ab, ob es schlimmer wird. Vielleicht hat Frau Klein nur schlecht geträumt.",
              textB1: "Ich warte erstmal ab. Vielleicht ist es nicht schlimm.",
              patientResponse: "Nach 20 Minuten wird die Atmung noch flacher. Die Praxisanleiterin kommt zufällig vorbei und reagiert sofort: 'Warum hast du nicht Bescheid gesagt? Veränderungen in der Atmung müssen sofort gemeldet werden!'",
              patientResponseB1: "Nach 20 Minuten wird es schlimmer. Die Praxisanleiterin kommt und sagt: 'Das hättest du sofort melden müssen!'",
              score: 1,
              feedback: "Abwarten kann gefährlich sein! Atemveränderungen können auf ernste Probleme hinweisen (Lungenentzündung, Herzinsuffizienz). Als Pflegekraft meldest du Veränderungen sofort — besser einmal zu viel als einmal zu wenig.",
              feedbackB1: "Vorsicht! Atemveränderungen können gefährlich sein. Immer sofort melden — lieber einmal zu viel als zu wenig.",
            },
            {
              text: "Ich sage zur Praxisanleiterin: 'Irgendwas stimmt nicht mit Frau Klein. Können Sie mal schauen?'",
              textB1: "Ich sage: 'Mit Frau Klein stimmt etwas nicht. Können Sie schauen?'",
              patientResponse: "Die Praxisanleiterin fragt: 'Was genau ist dir aufgefallen?' Du merkst: Du hättest genauer beschreiben sollen, was du beobachtet hast — nicht nur 'irgendwas'.",
              patientResponseB1: "Die Praxisanleiterin fragt: 'Was genau hast du gesehen?' Du merkst: Du hättest genauer sagen müssen, was anders ist.",
              score: 2,
              feedback: "Gut, dass du reagierst! Aber 'irgendwas stimmt nicht' ist zu ungenau. Systematische Beobachtung heißt: konkret beschreiben. Besser: 'Die Atmung ist schneller und flacher als heute Morgen.' Das hilft der Praxisanleiterin, die Situation einzuschätzen.",
              feedbackB1: "Gut, dass du etwas sagst! Aber sage genau, was du siehst: 'Die Atmung ist schneller.' Das ist besser als 'irgendwas stimmt nicht'.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin und Yasemin sind bei Frau Klein. Die Praxisanleiterin sagt: 'Gute Beobachtung. Aber woran hast du gemerkt, dass etwas anders ist? Woher weißt du, worauf du achten musst?'",
          contextB1: "Die Praxisanleiterin fragt Yasemin: 'Woher wusstest du, dass etwas nicht stimmt?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich glaube, weil ich Frau Klein heute Morgen schon gesehen habe? Da hat sie ruhiger geatmet. Und jetzt war es anders — schneller irgendwie. Ist das der Vergleich, den man machen soll?",
              textB1: "Heute Morgen hat sie anders geatmet. Ruhiger. Jetzt war es schneller. Ich habe verglichen — ist das richtig so?",
              patientResponse: "Genau! Du hast verglichen — das ist der Kern der systematischen Beobachtung. Du vergleichst den aktuellen Zustand mit einem früheren. So erkennst du Veränderungen.",
              patientResponseB1: "Genau! Du hast verglichen: vorher und jetzt. So erkennt man Veränderungen.",
              score: 3,
              feedback: "Perfekt! Systematische Beobachtung heißt: Ausgangswert kennen, regelmäßig beobachten, Veränderungen erkennen. Du hast genau das getan — intuitiv. Jetzt lernst du, es bewusst und strukturiert zu tun.",
              feedbackB1: "Super! Du hast verglichen: vorher und nachher. Das ist das Wichtigste bei der Beobachtung.",
            },
            {
              text: "Ehrlich gesagt hatte ich einfach so ein Bauchgefühl. Es sah irgendwie anders aus als sonst. Reicht das?",
              textB1: "Ich hatte ein Bauchgefühl. Es sah anders aus. Reicht das?",
              patientResponse: "Bauchgefühl ist ein guter Anfang — aber es reicht nicht. In der Pflege müssen wir systematisch beobachten: mit allen Sinnen, geplant und dokumentiert. So wird aus dem Bauchgefühl eine fachliche Einschätzung.",
              patientResponseB1: "Bauchgefühl ist gut. Aber wir müssen auch systematisch beobachten: sehen, hören, aufschreiben.",
              score: 2,
              feedback: "Ehrlich und nachvollziehbar! Intuition ist wertvoll — aber allein reicht sie nicht. Systematische Beobachtung macht aus 'irgendwie anders' ein 'Atemfrequenz erhöht von 16 auf 24 pro Minute'. Das ist der Unterschied.",
              feedbackB1: "Ehrlich! Bauchgefühl ist ein Anfang. Aber du musst auch genau beschreiben können, was anders ist.",
            },
            {
              text: "Keine Ahnung, ehrlich gesagt. Ich habe zufällig hingeschaut und es ist mir aufgefallen. Hätte ich irgendwie gezielter schauen sollen?",
              textB1: "Ich weiß nicht. Ich habe zufällig hingeschaut. Hätte ich anders schauen sollen?",
              patientResponse: "Zufall ist besser als nichts — aber in der Pflege dürfen wir uns nicht auf Zufall verlassen. Deshalb lernt man systematische Beobachtung: geplant, strukturiert, mit allen Sinnen. Damit dir nichts entgeht.",
              patientResponseB1: "Zufall ist besser als nichts. Aber wir lernen jetzt, geplant zu beobachten — nicht nur zufällig.",
              score: 1,
              feedback: "Keine Sorge — du lernst das noch! Systematische Beobachtung bedeutet: gezielt hinschauen, nicht zufällig. Pflegekräfte planen, wann und was sie beobachten. So wird nichts übersehen.",
              feedbackB1: "Kein Problem! Du lernst jetzt, wie man gezielt beobachtet — nicht nur zufällig.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // TB4: ERKLÄRUNG (Phase 2) — Systematische Beobachtung
  // =============================================================
  {
    stepId: "le01-s2-tb4-02",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/beobachtung-systematisch.svg",
    imageAlt: "Grafik: Systematische Patientenbeobachtung — Sinne, Instrumente, Dokumentation",
    contentC1: {
      title: "Systematische Beobachtung",
      body: "Die systematische Patientenbeobachtung steht im **Zentrum jeden pflegerischen Handelns**. Sie ist die Grundlage für den Pflegeprozess UND die ärztliche Therapie.\n\n**Warum ist das so wichtig?** Keine andere Berufsgruppe verbringt so viel Zeit mit dem Pflegeempfänger wie die Pflege. Deshalb erkennen Pflegefachkräfte Veränderungen oft zuerst.\n\n**Systematisch** bedeutet:\n- **Geplant** — nicht zufällig, sondern gezielt\n- **Strukturiert** — mit allen Sinnen (Sehen, Hören, Riechen, Tasten)\n- **Dokumentiert** — jede Beobachtung wird festgehalten\n- **Verglichen** — Veränderungen über die Zeit erkennen\n\nEine gute Beobachtung kann Leben retten — wenn sie systematisch erfolgt.",
      fallbezug: "Yasemin hat intuitiv beobachtet, dass Frau Klein anders atmet. Jetzt lernt sie, wie man das systematisch macht.",
    },
    contentB1: {
      title: "Genau hinschauen — aber richtig",
      body: "Pflegekräfte beobachten Patienten den ganzen Tag. Darum bemerken sie Veränderungen oft als Erste.\n\n**Systematisch beobachten** heißt:\n- **Geplant** — nicht zufällig\n- **Mit allen Sinnen** — sehen, hören, riechen, tasten\n- **Aufschreiben** — damit nichts vergessen wird\n- **Vergleichen** — hat sich etwas verändert?\n\nGutes Beobachten kann Leben retten.",
      fallbezug: "Yasemin hat gut hingeschaut. Jetzt lernt sie, wie man das richtig macht.",
    },
  },

  // =============================================================
  // TB4: ERKLÄRUNG (Phase 2) — Flipcard 6 Wahrnehmungsfehler
  // =============================================================
  {
    stepId: "le01-s2-tb4-03",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.320-321"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "6 Wahrnehmungsfehler",
      body: "Unsere Wahrnehmung trügt uns manchmal. Diese 6 Fehler solltest du kennen — um sie zu vermeiden.",
    },
    contentB1: {
      title: "6 Fehler beim Beobachten",
      body: "Manchmal sehen wir nicht richtig. Kenne diese 6 Fehler — dann passieren sie dir nicht.",
    },
    question: {
      fragetext: "Tippe auf jede Karte — welche Fehler gibt es?",
      flipcard: {
        instruction: "Entdecke die 6 Wahrnehmungsfehler:",
        cards: [
          { front: "Rosenthal-Effekt", back: "Das Urteil anderer beeinflusst deine Beobachtung. Wenn die Kollegin sagt 'Der Patient ist schwierig', siehst du ihn auch so.", backB1: "Wenn jemand sagt 'Der Patient ist schwierig', denkst du das auch — obwohl du es selbst noch nicht erlebt hast." },
          { front: "Halo-Effekt", back: "Eine auffällige Eigenschaft überblendet alle anderen. Ein unfreundlicher Patient wird als 'insgesamt schwierig' wahrgenommen.", backB1: "Eine Sache fällt auf und überschattet alles andere. Ein unfreundlicher Patient wird als 'komplett schwierig' gesehen." },
          { front: "Kontrastfehler", back: "Patienten werden miteinander verglichen: Nach einem sehr kranken Patienten wirkt der nächste 'gesund' — obwohl er auch Hilfe braucht.", backB1: "Man vergleicht Patienten. Nach einem sehr kranken Patienten wirkt der nächste fast gesund." },
          { front: "Stereotype", back: "Vorurteile über Gruppen beeinflussen die Beobachtung: 'Alte Menschen klagen immer' — dabei hat der Patient echte Schmerzen.", backB1: "Vorurteile beeinflussen, was man sieht: 'Alte klagen immer' — aber vielleicht hat er echte Schmerzen." },
          { front: "Milde-Effekt", back: "Sympathische Patienten werden milder beurteilt. Man übersieht Probleme, weil man den Patienten mag.", backB1: "Wenn man einen Patienten mag, übersieht man manchmal Probleme." },
          { front: "Zentrale Tendenz", back: "Man vermeidet extreme Bewertungen und wählt die Mitte — 'mittel' ist bequem, aber oft ungenau.", backB1: "Man wählt immer die Mitte, nie extrem. Das ist bequem, aber oft falsch." },
        ],
      },
    },
  },

  // =============================================================
  // TB4: CHECKPOINT (Phase 3) — MC Fallbeispiel Rosenthal
  // =============================================================
  {
    stepId: "le01-s2-tb4-04",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.320-321"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Erkennst du den Fehler?",
      body: "Ein Fallbeispiel: Welcher Wahrnehmungsfehler liegt hier vor?",
    },
    contentB1: {
      title: "Welcher Fehler?",
      body: "Lies die Situation. Welcher Beobachtungsfehler passiert hier?",
    },
    question: {
      fragetext: "Eine Kollegin sagt in der Übergabe: 'Herr Brenner ist schwierig — er klingelt ständig.' Yasemin geht zu Herrn Brenner und denkt sofort: 'Der ist sicher wieder schwierig.' Welcher Wahrnehmungsfehler liegt vor?",
      optionen: [
        { text: "Rosenthal-Effekt", isCorrect: true, explanation: "Richtig! Der Rosenthal-Effekt bedeutet, dass das Urteil anderer unsere Wahrnehmung beeinflusst. Die Kollegin hat Yasemin unbewusst beeinflusst — noch bevor sie sich selbst ein Bild machen konnte." },
        { text: "Halo-Effekt", isCorrect: false, explanation: "Beim Halo-Effekt überblendet EINE eigene Beobachtung alle anderen. Hier hat Yasemin aber noch gar keine eigene Beobachtung gemacht — sie wurde von der Kollegin beeinflusst." },
        { text: "Kontrastfehler", isCorrect: false, explanation: "Beim Kontrastfehler vergleicht man Patienten miteinander. Hier geht es aber um die Übernahme eines Urteils von der Kollegin." },
        { text: "Milde-Effekt", isCorrect: false, explanation: "Beim Milde-Effekt beurteilt man sympathische Patienten zu positiv. Hier passiert das Gegenteil: Ein negatives Urteil wird übernommen." },
      ],
    },
  },

  // =============================================================
  // TB4: ANDERS_ERKLÄRT (Phase 4) — Reveal Alltags-Beispiele
  // =============================================================
  {
    stepId: "le01-s2-tb4-05",
    phase: "s2",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.320-321"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Wahrnehmungsfehler im Alltag",
      body: "Die gleichen Fehler passieren auch außerhalb der Pflege — du kennst sie bestimmt! Tippe, um Beispiele zu sehen.",
    },
    contentB1: {
      title: "Kennst du das?",
      body: "Diese Fehler passieren auch im Alltag. Tippe auf jede Karte.",
    },
    question: {
      fragetext: "Erkennst du die Fehler aus deinem Alltag?",
      reveal: {
        instruction: "Tippe auf jede Karte für ein Alltags-Beispiel:",
        cards: [
          { id: "r1", label: "Rosenthal-Effekt", content: "Deine Freundin sagt: 'Der Film ist schlecht.' Du schaust ihn an und findest ihn auch schlecht — weil du schon voreingenommen warst.", contentB1: "Jemand sagt: 'Der Film ist schlecht.' Dann findest du ihn auch schlecht.", icon: "ear" },
          { id: "r2", label: "Halo-Effekt", content: "Eine Bewerberin lächelt freundlich im Vorstellungsgespräch — und du denkst automatisch, sie ist auch kompetent.", contentB1: "Jemand lächelt nett und du denkst: Die Person ist bestimmt auch klug.", icon: "sparkles" },
          { id: "r3", label: "Kontrastfehler", content: "Nach einem chaotischen Mitbewohner wirkt der nächste wie ein Ordnungsfanatiker — obwohl er ganz normal ist.", contentB1: "Nach einem unordentlichen Mitbewohner wirkt der nächste super ordentlich.", icon: "scale" },
          { id: "r4", label: "Stereotype", content: "'Teenager sind faul.' — Dann übersiehst du den Teenager, der jeden Tag 2 Stunden lernt.", contentB1: "'Teenager sind faul' — aber viele lernen sehr viel.", icon: "users" },
          { id: "r5", label: "Milde-Effekt", content: "Dein bester Freund baut Mist — aber du sagst: 'War sicher nicht so gemeint.'", contentB1: "Wenn dein Freund etwas Falsches macht, sagst du: 'War nicht so gemeint.'", icon: "heart" },
          { id: "r6", label: "Zentrale Tendenz", content: "Bei der Bewertung im Restaurant gibst du immer 3 von 5 Sternen — nie 1 und nie 5.", contentB1: "Du gibst immer 3 Sterne — nie ganz schlecht und nie ganz gut.", icon: "bar-chart" },
        ],
        revealMode: "free",
      },
    },
  },

  // =============================================================
  // TB4: PATIENTEN_PERSPEKTIVE (Phase 7) — Herr Brenner
  // =============================================================
  {
    stepId: "le01-s2-tb4-06",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    contentC1: {
      title: "Wenn jemand genau hinschaut",
      body: "Herr Brenner, 82, erzählt von einer Situation, in der eine Pflegekraft etwas Wichtiges bemerkt hat:\n\n*\"Ich hatte Brustschmerzen, aber ich wollte nicht klingeln. Ich dachte: Die haben genug zu tun. Aber dann kam die Nachtschwester rein — nur zur Kontrolle — und sie hat sofort gesehen, dass etwas nicht stimmt.\n\n'Herr Brenner, Sie schwitzen und Sie halten sich die Brust. Seit wann ist das so?' hat sie gefragt.\n\nSie hat sofort den Arzt gerufen. Der Arzt hat gesagt: Gut, dass sie aufgepasst hat.\n\nSie hat mir nicht geglaubt, als ich sagte 'Alles gut'. Sie hat hingeschaut. Das hat mich gerettet.\"*",
      fallbezug: "Yasemin versteht: Systematische Beobachtung bedeutet, dem Patienten nicht nur zu glauben — sondern genau hinzuschauen.",
    },
    contentB1: {
      title: "Eine Pflegerin sieht genau hin",
      body: "Herr Brenner erzählt:\n\n*\"Ich hatte Brustschmerzen. Aber ich sagte nichts. Dann kam die Pflegerin. Sie sah: Ich schwitze und halte mir die Brust.\n\nSie hat sofort den Arzt gerufen. Der Arzt sagte: Gut, dass sie aufgepasst hat.\n\nSie hat genau hingeschaut — nicht nur gefragt.\"*",
      fallbezug: "Yasemin lernt: Genau hinschauen ist manchmal wichtiger als Fragen.",
    },
  },

  // =============================================================
  // TB4: ANWENDUNG (Phase 9) — Branching Scenario
  // =============================================================
  {
    stepId: "le01-s2-tb4-07",
    phase: "s2",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Was tust du?",
      body: "Ein Patient sagt: 'Mir geht's gut.' Aber seine Mimik sagt etwas anderes — blasses Gesicht, zusammengekniffene Lippen, unruhige Hände.",
      fallbezug: "Yasemin steht vor der Entscheidung: Dem Patienten glauben oder der eigenen Beobachtung vertrauen?",
    },
    contentB1: {
      title: "Was machst du?",
      body: "Der Patient sagt: 'Mir geht's gut.' Aber sein Gesicht ist blass und er presst die Lippen zusammen.",
      fallbezug: "Yasemin muss entscheiden: Was zählt mehr — was der Patient sagt oder was sie sieht?",
    },
    question: {
      fragetext: "Der Patient sagt 'Mir geht's gut', aber seine Mimik zeigt Schmerzen. Wie reagierst du?",
      branchingOptions: [
        { text: "Ich frage gezielt nach: 'Ich sehe, dass Sie die Lippen zusammenpressen. Haben Sie Schmerzen?'", feedback: "Sehr gut! Du verbindest Beobachtung mit gezieltem Nachfragen. Du nimmst den Patienten ernst, ohne seine Aussage zu ignorieren — und gibst ihm die Chance, ehrlich zu antworten.", feedbackB1: "Super! Du sagst dem Patienten, was du siehst, und fragst direkt nach. So kann er ehrlich antworten.", isCorrect: true },
        { text: "Ich akzeptiere seine Aussage — er wird schon Bescheid sagen, wenn etwas ist.", feedback: "Vorsicht! Viele Patienten wollen nicht zur Last fallen oder wollen 'tapfer' sein. Sich nur auf die verbale Aussage zu verlassen, kann gefährlich sein — die systematische Beobachtung gibt oft ehrlichere Hinweise.", feedbackB1: "Vorsicht! Viele Patienten sagen nicht, wenn sie Schmerzen haben. Besser: genau hinschauen und nachfragen.", isCorrect: false },
        { text: "Ich messe sofort den Blutdruck und die Temperatur, ohne weiter zu fragen.", feedback: "Vitalzeichen zu messen ist wichtig — aber ohne den Patienten einzubeziehen, fehlt der Kontext. Besser: Erst beobachten, dann gezielt fragen, dann messen. So bekommst du ein vollständiges Bild.", feedbackB1: "Messen ist gut, aber frage auch den Patienten! Erst beobachten, dann fragen, dann messen.", isCorrect: false },
      ],
    },
  },

  // =============================================================
  // TB4: REFLEXION (Phase 10) — Eigener Wahrnehmungsfehler
  // =============================================================
  {
    stepId: "le01-s2-tb4-08",
    phase: "s2",
    stepType: "reflection",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Welchen Fehler machst du selbst?",
      body: "Du hast 6 Wahrnehmungsfehler kennengelernt. Jetzt bist du dran — welchen Fehler könntest du selbst machen?",
    },
    contentB1: {
      title: "Was ist dein Fehler?",
      body: "Du kennst jetzt 6 Beobachtungsfehler. Welchen könntest du selbst machen?",
    },
    question: {
      fragetext: "Welchen der 6 Wahrnehmungsfehler könntest du dir am ehesten vorstellen, selbst zu machen? Warum?",
      satzanfaenge: [
        "Ich könnte mir vorstellen, dass ich...",
        "Das liegt daran, dass...",
        "Um das zu vermeiden, könnte ich...",
      ],
      minWords: 20,
    },
  },

  // =============================================================
  // Session-Abschluss: Crossword
  // =============================================================
  {
    stepId: "le01-s2-bk-02",
    phase: "s2",
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Kreuzworträtsel",
      body: "Teste dein Wissen spielerisch — finde die 7 Begriffe!",
    },
    contentB1: {
      title: "Kreuzworträtsel",
      body: "Finde 7 Wörter! Lies die Hinweise und schreibe das Wort.",
    },
    question: {
      fragetext: "Finde die 7 Begriffe:",
      crosswordWords: [
        { word: "PFLEGEANAMNESE", clue: "Strukturierte Datenerhebung beim Aufnahmegespräch" },
        { word: "EVALUATION", clue: "Letzter Schritt im Pflegeprozess: Wirkung beurteilen" },
        { word: "RESSOURCE", clue: "Fähigkeiten und Stärken des Pflegeempfängers" },
        { word: "ROSENTHAL", clue: "Wahrnehmungsfehler: Urteil anderer beeinflusst eigene Beobachtung" },
        { word: "HALO", clue: "Wahrnehmungsfehler: Eine Eigenschaft überblendet alle anderen" },
        { word: "KREISLAUF", clue: "Der Pflegeprozess ist ein ___ — nach Schritt 6 beginnt er neu" },
        { word: "BEOBACHTUNG", clue: "Steht im Zentrum jeden pflegerischen Handelns" },
      ],
    },
  },

  // =============================================================
  // Session-Bookend: Summary
  // =============================================================
  {
    stepId: "le01-s2-bk-03",
    phase: "s2",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 2 ist geschafft! Hier sind deine 4 wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Gut gemacht!",
    },
    question: {
      fragetext: "Deine 4 Kernaussagen aus Session 2:",
      summary: {
        reflexionRueckbezug: "Yasemin hat heute gelernt, wie Pflege systematisch geplant wird — und dass gutes Beobachten eine Schlüsselkompetenz ist.",
        kernaussagen: [
          "**Der Pflegeprozess** nach Fiechter/Meier hat 6 Schritte: Informationssammlung, Probleme/Ressourcen erkennen, Ziele festlegen, Maßnahmen planen, durchführen und evaluieren.",
          "**Die Pflegeanamnese** ist eine strukturierte Datenerhebung — empathisch, max. 30 Minuten, und die Grundlage für alles, was danach kommt.",
          "**Systematische Beobachtung** nutzt alle Sinne, ist geplant und dokumentiert. Keine andere Berufsgruppe ist so nah am Patienten.",
          "**6 Wahrnehmungsfehler** können die Beobachtung verfälschen: Rosenthal, Halo, Kontrast, Stereotype, Milde und zentrale Tendenz. Wer sie kennt, kann sie vermeiden.",
        ],
      },
    },
  },
];
