// Session 2: "Wie pflegt man systematisch?" — LE 01
// Generiert vom Content-Generator v2
// Themen: Pflegeprozess (Fiechter/Meier), Pflegeprobleme, Ressourcen, Beobachtung, Wahrnehmungsfehler
// Leitfall: Yasemin Demirci — Aufnahmegespraech beobachten (Szene S1 Fortsetzung)
// Bloom: B1-B3, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S2: ContentStep[] = [
  // =============================================================
  // Step 1: Dialog — Yasemin: Aufnahmegespraech-Vorbereitung (STORY)
  // =============================================================
  {
    stepId: "le01-s2-01",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Tag 2: Aufnahmegespraech",
      body: "Yasemin soll heute ein Aufnahmegespraech beobachten. Die Praxisanleiterin bereitet sie vor.",
      fallbezug: "Dienstag morgen. Yasemin fuehlt sich sicherer als gestern.",
    },
    contentB1: {
      title: "Tag 2: Ein neuer Patient kommt",
      body: "Yasemin soll heute zuschauen, wie ein neuer Patient aufgenommen wird.",
      fallbezug: "Es ist Dienstag. Yasemin fuehlt sich besser als gestern.",
    },
    question: {
      fragetext: "Begleite Yasemin bei der Vorbereitung.",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Praxisanleiterin: 'Heute beobachtest du ein Aufnahmegespraech. Was meinst du — worauf sollte man dabei achten?'",
          contextB1: "Praxisanleiterin: 'Heute schaust du bei einem Aufnahmegespraech zu. Was ist wichtig dabei?'",
          speaker: "Yasemin",
          options: [
            {
              text: "Ich denke, man muss den Patienten kennenlernen — seine Probleme UND seine Ressourcen. Gestern habe ich gelernt, dass Pflege nicht nur nach Defiziten fragt.",
              textB1: "Ich glaube, man muss den Patienten kennenlernen. Seine Probleme und seine Staerken. Das habe ich gestern gelernt.",
              patientResponse: "Genau richtig! Und das Ganze hat einen Namen: Pflegeanamnese. Das ist der erste Schritt im Pflegeprozess.",
              patientResponseB1: "Sehr gut! Das nennt man Pflegeanamnese. Das ist der erste Schritt im Pflegeprozess.",
              score: 3,
              feedback: "Recall aus Session 1 — Ressourcenorientierung ist ein Grundprinzip. Die Pflegeanamnese ist der erste Schritt des Pflegeprozesses.",
              feedbackB1: "Richtig! Pflegeanamnese heisst: alle wichtigen Informationen ueber den Patienten sammeln.",
            },
            {
              text: "Soll ich einfach aufschreiben, was der Patient sagt?",
              textB1: "Soll ich aufschreiben, was der Patient sagt?",
              patientResponse: "Das ist ein Anfang — aber Beobachtung geht tiefer. Du schaust auch auf Mimik und Koerpersprache. Und du fragst gezielt nach Ressourcen.",
              patientResponseB1: "Das ist ein Teil davon. Aber du schaust auch auf sein Gesicht und seinen Koerper. Und du fragst nach seinen Staerken.",
              score: 1,
              feedback: "Dokumentation ist wichtig, aber Beobachtung umfasst mehr als nur Worte — auch Mimik, Koerpersprache und Ressourcen.",
              feedbackB1: "Aufschreiben ist gut! Aber du musst auch beobachten: Gesicht, Koerper und Staerken.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: Confidence — Vorwissen-Check (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s2-02",
    phase: "s2",
    stepType: "confidence",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Vorwissen-Check",
      body: "Schaetze dich ein: Was weisst du bereits ueber den Pflegeprozess?",
    },
    contentB1: {
      title: "Was weisst du schon?",
      body: "Schaetze dich ein. Dann lernst du den Pflegeprozess kennen.",
    },
    question: {
      fragetext: "Bewerte jede Aussage: Wie sicher bist du?",
      confidenceCards: [
        {
          statement: "Ich weiss, was eine Pflegeanamnese ist.",
          statementB1: "Ich weiss, was eine Pflegeanamnese ist.",
          isTrue: true,
          explanation: "Die Pflegeanamnese ist eine strukturierte Datenerhebung beim Aufnahmegespraech.",
          explanationB1: "Pflegeanamnese: Ein geplantes Gespraech, bei dem man alles Wichtige ueber den Patienten erfaehrt.",
        },
        {
          statement: "Ich kenne die 6 Schritte des Pflegeprozesses.",
          statementB1: "Ich kenne die 6 Schritte des Pflegeprozesses.",
          isTrue: true,
          explanation: "Informationssammlung, Probleme erkennen, Ziele festlegen, Massnahmen planen, Durchfuehren, Evaluation.",
          explanationB1: "Informationen sammeln, Probleme finden, Ziele setzen, planen, durchfuehren, pruefen.",
        },
        {
          statement: "Ich kann Pflegeprobleme von Ressourcen unterscheiden.",
          statementB1: "Ich kann Probleme und Staerken unterscheiden.",
          isTrue: true,
          explanation: "Pflegeprobleme sind Einschraenkungen, Ressourcen sind Faehigkeiten und Staerken, die bei der Problemloesung helfen.",
          explanationB1: "Probleme sind Einschraenkungen. Ressourcen sind Staerken, die helfen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 3: Swipe — Brilliant-Prinzip: Pflegeprozess-Schritte (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-03",
    phase: "s2",
    stepType: "swipe",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Gehoert das zum Pflegeprozess?",
      body: "Der Pflegeprozess hat 6 Schritte. Manche Taetigkeiten gehoeren dazu, manche nicht.",
    },
    contentB1: {
      title: "Was gehoert zum Pflegeprozess?",
      body: "Der Pflegeprozess hat 6 Schritte. Was gehoert dazu und was nicht?",
    },
    question: {
      fragetext: "Wische nach rechts fuer 'gehoert dazu' und nach links fuer 'gehoert nicht dazu'.",
      swipe: {
        instruction: "Gehoert dieser Schritt zum Pflegeprozess?",
        cards: [
          {
            statement: "Informationen ueber den Patienten sammeln",
            statementB1: "Informationen ueber den Patienten sammeln",
            isCorrect: true,
            explanation: "Informationssammlung ist der erste Schritt des Pflegeprozesses nach Fiechter und Meier.",
            explanationB1: "Ja! Informationen sammeln ist der erste Schritt im Pflegeprozess.",
          },
          {
            statement: "Medizinische Diagnosen stellen",
            statementB1: "Krankheiten diagnostizieren",
            isCorrect: false,
            explanation: "Medizinische Diagnosen stellt der Arzt. Pflegende erheben Pflegeprobleme.",
            explanationB1: "Nein! Diagnosen stellt der Arzt. Pflegende finden Pflegeprobleme.",
          },
          {
            statement: "Pflegeziele gemeinsam mit dem Patienten festlegen",
            statementB1: "Pflegeziele mit dem Patienten zusammen festlegen",
            isCorrect: true,
            explanation: "Pflegeziele werden immer gemeinsam mit dem Pflegeempfaenger formuliert — positiv und messbar.",
            explanationB1: "Ja! Ziele legt man zusammen mit dem Patienten fest.",
          },
          {
            statement: "Die Wirkung der Pflege beurteilen",
            statementB1: "Pruefen, ob die Pflege geholfen hat",
            isCorrect: true,
            explanation: "Evaluation ist der 6. Schritt — sie prueft, ob die Ziele erreicht wurden.",
            explanationB1: "Ja! Pruefen ob es geholfen hat — das ist der letzte Schritt.",
          },
          {
            statement: "Blutentnahme durchfuehren",
            statementB1: "Blut abnehmen",
            isCorrect: false,
            explanation: "Blutentnahme ist eine delegierte aerztliche Taetigkeit, kein Schritt des Pflegeprozesses.",
            explanationB1: "Nein! Blut abnehmen ist keine Aufgabe im Pflegeprozess.",
          },
          {
            statement: "Probleme und Ressourcen des Patienten erkennen",
            statementB1: "Probleme und Staerken des Patienten erkennen",
            isCorrect: true,
            explanation: "Probleme und Ressourcen erkennen ist der 2. Schritt des Pflegeprozesses.",
            explanationB1: "Ja! Das ist der zweite Schritt: Probleme und Staerken erkennen.",
          },
          {
            statement: "Pflegemassnahmen planen und durchfuehren",
            statementB1: "Pflege planen und durchfuehren",
            isCorrect: true,
            explanation: "Planung (Schritt 4) und Durchfuehrung (Schritt 5) sind zentrale Schritte.",
            explanationB1: "Ja! Planen ist Schritt 4 und Durchfuehren ist Schritt 5.",
          },
          {
            statement: "Medikamente verordnen",
            statementB1: "Medikamente verschreiben",
            isCorrect: false,
            explanation: "Medikamente verordnet nur der Arzt. Pflegende verabreichen sie.",
            explanationB1: "Nein! Medikamente verschreibt der Arzt. Pflegende geben sie dem Patienten.",
          },
          {
            statement: "Therapieplaene fuer Physiotherapie erstellen",
            statementB1: "Uebungen fuer den Physiotherapeuten planen",
            isCorrect: false,
            explanation: "Therapieplaene erstellt der Physiotherapeut. Pflegende erstellen Pflegeplaene.",
            explanationB1: "Nein! Pflegende machen Pflegeplaene. Physiotherapeuten machen Therapieplaene.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 4: Text — Der Pflegeprozess (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-04",
    phase: "s2",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Der Pflegeprozess",
      body: "Der Pflegeprozess ist ein systematischer, zielgerichteter Problemloesungsprozess. Gemeinsam mit dem Pflegeempfaenger wird der individuelle Pflegebedarf erhoben. Das Modell nach Fiechter und Meier umfasst 6 Schritte: Informationssammlung, Probleme und Ressourcen erkennen, Ziele festlegen, Massnahmen planen, Massnahmen durchfuehren und Evaluation.",
      glossarBegriffe: ["Pflegeprozess"],
    },
    contentB1: {
      title: "Der Pflegeprozess",
      body: "Der Pflegeprozess ist ein fester Ablauf fuer die Pflege. Er hat 6 Schritte: Informationen sammeln, Probleme finden, Ziele setzen, Massnahmen planen, Massnahmen durchfuehren und pruefen ob es funktioniert hat. Man macht das immer zusammen mit dem Patienten.",
      glossarBegriffe: ["Pflegeprozess"],
    },
  },

  // =============================================================
  // Step 5: Diagram — Cycle: 6 Schritte Pflegeprozess (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-05",
    phase: "s2",
    stepType: "diagram",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    imageUrl: "/images/le01/pflegeprozess-cycle.svg",
    imageAlt: "Kreislauf-Diagramm: 6 Schritte des Pflegeprozesses",
    contentC1: {
      title: "Pflegeprozess als Kreislauf",
      body: "Der Pflegeprozess ist kein gerader Weg. Er ist ein Kreislauf — nach der Evaluation beginnt er von vorn.",
    },
    contentB1: {
      title: "Der Pflegeprozess im Kreis",
      body: "Der Pflegeprozess hoert nie auf. Nach dem letzten Schritt beginnt man wieder von vorn.",
    },
    question: {
      fragetext: "Erkunde die 6 Schritte des Pflegeprozesses.",
      diagram: {
        diagramType: "cycle",
        instruction: "Tippe auf die einzelnen Schritte, um mehr zu erfahren.",
        nodes: [
          { id: "info", label: "1. Informationssammlung", labelB1: "1. Informationen sammeln", highlight: true },
          { id: "probleme", label: "2. Probleme/Ressourcen", labelB1: "2. Probleme + Staerken" },
          { id: "ziele", label: "3. Ziele festlegen", labelB1: "3. Ziele setzen" },
          { id: "planung", label: "4. Massnahmen planen", labelB1: "4. Planen" },
          { id: "durchfuehrung", label: "5. Durchfuehren", labelB1: "5. Machen" },
          { id: "evaluation", label: "6. Evaluation", labelB1: "6. Pruefen" },
        ],
        edges: [
          { from: "info", to: "probleme" },
          { from: "probleme", to: "ziele" },
          { from: "ziele", to: "planung" },
          { from: "planung", to: "durchfuehrung" },
          { from: "durchfuehrung", to: "evaluation" },
          { from: "evaluation", to: "info", label: "Kreislauf" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 6: Sequencing — 6 Schritte ordnen (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s2-06",
    phase: "s2",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Die richtige Reihenfolge",
      body: "Die 6 Schritte des Pflegeprozesses folgen einer logischen Reihenfolge.",
    },
    contentB1: {
      title: "In welcher Reihenfolge?",
      body: "Bringe die 6 Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Ordne die 6 Schritte des Pflegeprozesses in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Ziehe die Schritte in die richtige Position.",
        items: [
          { id: "s1", label: "Informationssammlung" },
          { id: "s2", label: "Probleme und Ressourcen erkennen" },
          { id: "s3", label: "Pflegeziele festlegen" },
          { id: "s4", label: "Pflegemassnahmen planen" },
          { id: "s5", label: "Massnahmen durchfuehren" },
          { id: "s6", label: "Evaluation (Wirkung pruefen)" },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: Reveal — Pflegeprozess mit Fallbeispielen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-07",
    phase: "s2",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-83"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeprozess in der Praxis",
      body: "Jeder Schritt des Pflegeprozesses hat eine konkrete Bedeutung auf Station.",
      fallbezug: "Yasemin beobachtet, wie die Praxisanleiterin bei Frau Mueller den Pflegeprozess anwendet.",
    },
    contentB1: {
      title: "Pflegeprozess auf Station",
      body: "So sieht der Pflegeprozess in echt aus. Yasemin schaut zu.",
      fallbezug: "Yasemin beobachtet die Praxisanleiterin bei einer Patientin.",
    },
    question: {
      fragetext: "Decke die Schritte nacheinander auf und entdecke das Praxisbeispiel.",
      reveal: {
        instruction: "Tippe auf jede Karte, um den Schritt zu sehen.",
        revealMode: "sequential",
        cards: [
          {
            id: "r1",
            label: "Schritt 1",
            content: "Informationssammlung: Pflegeanamnese bei Frau Mueller — Vorerkrankungen, Medikamente, Alltagsfaehigkeiten, soziales Umfeld.",
            contentB1: "Informationen sammeln: Was hat Frau Mueller fuer Krankheiten? Welche Medikamente nimmt sie? Was kann sie noch selbst?",
            icon: "clipboard",
          },
          {
            id: "r2",
            label: "Schritt 2",
            content: "Probleme erkennen: Sturzgefahr durch unsicheres Gangbild. Ressource: Frau Mueller ist motiviert und hat eine unterstuetzende Familie.",
            contentB1: "Probleme: Frau Mueller kann schlecht laufen — Sturzgefahr. Staerke: Sie ist motiviert und ihre Familie hilft.",
            icon: "search",
          },
          {
            id: "r3",
            label: "Schritt 3",
            content: "Ziel festlegen: 'Frau Mueller kann sich innerhalb einer Woche sicher am Rollator auf dem Flur bewegen.'",
            contentB1: "Ziel: Frau Mueller kann in einer Woche sicher mit dem Rollator laufen.",
            icon: "target",
          },
          {
            id: "r4",
            label: "Schritt 4",
            content: "Massnahmen planen: 2x taeglich Gehtraining mit Rollator, rutschfeste Socken, Nachtlicht im Zimmer.",
            contentB1: "Planen: 2 Mal am Tag laufen ueben. Rutschfeste Socken. Licht in der Nacht.",
            icon: "list",
          },
          {
            id: "r5",
            label: "Schritt 5",
            content: "Durchfuehren: Yasemin begleitet Frau Mueller beim Gehtraining — unter Aufsicht der Praxisanleiterin.",
            contentB1: "Machen: Yasemin hilft Frau Mueller beim Laufen. Die Praxisanleiterin schaut zu.",
            icon: "play",
          },
          {
            id: "r6",
            label: "Schritt 6",
            content: "Evaluation: Nach 5 Tagen prueft die Pflegekraft: Kann Frau Mueller sicher gehen? Ist das Ziel erreicht?",
            contentB1: "Pruefen: Nach 5 Tagen schauen: Kann Frau Mueller jetzt sicher laufen?",
            icon: "check-circle",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: Text — Pflegeanamnese und Pflegeprobleme (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-08",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.80-81"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeanamnese und Pflegeprobleme",
      body: "Die Pflegeanamnese ist eine strukturierte Datenerhebung beim Aufnahmegespraech — empathisch und maximal 30 Minuten. Pflegeprobleme werden unterschieden in: aktuelle (bestehen jetzt), potenzielle (drohen), verdeckte (nicht erkannt oder preisgegeben), generelle (typisch fuer das Krankheitsbild) und individuelle (persoenliche Situation).",
      glossarBegriffe: ["Pflegeanamnese"],
    },
    contentB1: {
      title: "Das Aufnahmegespraech und Pflegeprobleme",
      body: "Die Pflegeanamnese ist ein Gespraech am Anfang. Es dauert hoechstens 30 Minuten. Die Pflegekraft fragt freundlich nach wichtigen Dingen. Es gibt 5 Arten von Pflegeproblemen: aktuelle, moegliche, versteckte, allgemeine und persoenliche.",
      glossarBegriffe: ["Pflegeanamnese"],
    },
  },

  // =============================================================
  // Step 9: MC — Verdecktes Pflegeproblem (CHALLENGE, AMBOSS)
  // =============================================================
  {
    stepId: "le01-s2-09",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.81"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeprobleme erkennen",
      body: "Nicht alle Pflegeprobleme sind offensichtlich. Manche werden vom Patienten nicht benannt.",
    },
    contentB1: {
      title: "Versteckte Probleme",
      body: "Manche Probleme sieht man nicht sofort. Der Patient sagt vielleicht nicht alles.",
    },
    question: {
      fragetext: "Herr Schmidt sagt: 'Mir geht es gut.' Aber er isst seit 2 Tagen nicht. Welche Art von Pflegeproblem liegt vor?",
      optionen: [
        {
          text: "Verdecktes Pflegeproblem",
          isCorrect: true,
          explanation: "Der Patient benennt das Problem nicht, obwohl die Beobachtung zeigt, dass etwas nicht stimmt. Verdeckte Probleme erfordern genaue Beobachtung.",
          explanationB1: "Richtig! Der Patient sagt nichts, aber die Pflegekraft sieht: Er isst nicht. Das ist ein verstecktes Problem.",
        },
        {
          text: "Aktuelles Pflegeproblem",
          isCorrect: false,
          explanation: "Ein aktuelles Problem ist erkannt und benannt. Hier ist das Problem dem Patienten moeglicherweise nicht bewusst — daher verdeckt.",
          explanationB1: "Nicht ganz. Ein aktuelles Problem kennt man schon. Hier weiss man es noch nicht sicher.",
        },
        {
          text: "Generelles Pflegeproblem",
          isCorrect: false,
          explanation: "Generelle Probleme sind typisch fuer ein Krankheitsbild. Hier geht es um eine individuelle Diskrepanz zwischen Aussage und Verhalten.",
          explanationB1: "Nicht ganz. Generelle Probleme sind typisch fuer eine Krankheit. Hier geht es um diesen einen Patienten.",
        },
        {
          text: "Potenzielles Pflegeproblem",
          isCorrect: false,
          explanation: "Potenzielle Probleme drohen erst. Hier besteht das Problem bereits (isst seit 2 Tagen nicht), wird nur nicht benannt.",
          explanationB1: "Nicht ganz. Moegliche Probleme koennen noch kommen. Dieses Problem ist schon da — er isst nicht.",
        },
      ],
    },
  },

  // =============================================================
  // Step 10: Matching — Problemtypen und Beispiele (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s2-10",
    phase: "s2",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.81"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeprobleme zuordnen",
      body: "Ordne jeden Problemtyp dem passenden Beispiel zu.",
    },
    contentB1: {
      title: "Welches Problem passt?",
      body: "Verbinde jeden Problemtyp mit dem richtigen Beispiel.",
    },
    question: {
      fragetext: "Ordne den Problemtyp dem Beispiel zu.",
      matchingPairs: [
        { left: "Aktuelles Problem", right: "Patient hat Fieber (39,2 Grad)" },
        { left: "Potenzielles Problem", right: "Sturzgefahr bei eingeschraenkter Mobilitaet" },
        { left: "Verdecktes Problem", right: "Patient sagt 'alles gut', isst aber seit 2 Tagen nichts" },
        { left: "Generelles Problem", right: "Dekubitusgefahr bei langer Bettlaegerigkeit" },
        { left: "Individuelles Problem", right: "Patient hat Angst vor der OP wegen frueherer Erfahrung" },
      ],
    },
  },

  // =============================================================
  // Step 11: Flipcard — Ressourcen-Typen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-11",
    phase: "s2",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.82"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    imageUrl: "/images/le01/ressourcen-typen.svg",
    imageAlt: "6 Karten mit verschiedenen Ressourcen-Typen",
    contentC1: {
      title: "Ressourcen in der Pflege",
      body: "Ressourcen sind Faehigkeiten und Einfluesse, die dem Patienten helfen. Es gibt 6 Arten.",
      glossarBegriffe: ["Ressource"],
    },
    contentB1: {
      title: "Staerken des Patienten",
      body: "Ressourcen sind Staerken. Sie helfen dem Patienten. Es gibt 6 verschiedene Arten.",
      glossarBegriffe: ["Ressource"],
    },
    question: {
      fragetext: "Tippe auf eine Karte, um das Beispiel zu sehen.",
      flipcard: {
        instruction: "Drehe die Karten um und entdecke die verschiedenen Ressourcen.",
        cards: [
          {
            front: "Koerperliche Ressource",
            back: "Der Patient kann sich noch selbst waschen und anziehen.",
            backB1: "Der Patient kann sich selbst waschen und anziehen.",
            category: "Ressource",
          },
          {
            front: "Innerliche Ressource",
            back: "Der Patient hat eine positive Einstellung und will wieder gesund werden.",
            backB1: "Der Patient ist motiviert. Er will wieder gesund werden.",
            category: "Ressource",
          },
          {
            front: "Raeumliche Ressource",
            back: "Die Wohnung ist barrierefrei umgebaut — Haltegriffe, breite Tueren, Duschsitz.",
            backB1: "Die Wohnung hat Griffe und breite Tueren. Der Patient kann sich dort gut bewegen.",
            category: "Ressource",
          },
          {
            front: "Soziale Ressource",
            back: "Die Tochter besucht taeglich und unterstuetzt bei Arztbesuchen und Einkauf.",
            backB1: "Die Tochter kommt jeden Tag und hilft beim Einkaufen und bei Arztbesuchen.",
            category: "Ressource",
          },
          {
            front: "Oekonomische Ressource",
            back: "Der Patient hat eine Pflegeversicherung und kann sich Hilfsmittel leisten.",
            backB1: "Der Patient hat eine Versicherung. Er kann Hilfsmittel bezahlen.",
            category: "Ressource",
          },
          {
            front: "Spirituelle Ressource",
            back: "Der Glaube gibt dem Patienten Kraft und Zuversicht in schweren Zeiten.",
            backB1: "Der Glaube gibt dem Patienten Kraft und Hoffnung.",
            category: "Ressource",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 12: Cloze — Pflegeziele (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s2-12",
    phase: "s2",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.82-83"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeziele formulieren",
      body: "Pflegeziele beschreiben, was der Patient erreichen soll. Sie folgen bestimmten Regeln.",
    },
    contentB1: {
      title: "Ziele in der Pflege",
      body: "Pflegeziele sagen, was der Patient schaffen soll. Es gibt Regeln dafuer.",
    },
    question: {
      fragetext: "Fuelle die Luecken aus.",
      cloze: {
        textWithBlanks: "Pflegeziele beschreiben den {{1}}-Zustand. Sie werden {{2}} formuliert und in Nah-, {{3}}- und Fernziele untergliedert.",
        blanks: [
          {
            id: 1,
            correct: "Soll",
            distractors: ["Ist", "Ideal", "End"],
          },
          {
            id: 2,
            correct: "positiv",
            distractors: ["negativ", "neutral", "knapp"],
          },
          {
            id: 3,
            correct: "Teil",
            distractors: ["Zwischen", "Mittel", "Halb"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 13: Dialog — Yasemin beobachtet Atmung (STORY)
  // =============================================================
  {
    stepId: "le01-s2-13",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-beobachtung",
    contentC1: {
      title: "Yasemin beobachtet genau",
      body: "Auf Station entdeckt Yasemin etwas Wichtiges — bevor es der Monitor anzeigt.",
      fallbezug: "Nachmittag. Yasemin steht am Bett eines Patienten und achtet auf seine Atmung.",
    },
    contentB1: {
      title: "Yasemin bemerkt etwas",
      body: "Yasemin sieht etwas, bevor das Geraet piepst.",
      fallbezug: "Am Nachmittag. Yasemin steht neben einem Patienten.",
    },
    question: {
      fragetext: "Was passiert auf Station?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin bemerkt, dass der Patient flacher atmet als vor einer Stunde. Der Monitor zeigt noch normale Werte.",
          contextB1: "Yasemin sieht: Der Patient atmet flacher als vorher. Das Geraet zeigt noch normale Werte.",
          speaker: "Yasemin",
          options: [
            {
              text: "Die Atmung hat sich veraendert — ich sage der Praxisanleiterin Bescheid, auch wenn der Monitor nichts zeigt.",
              textB1: "Die Atmung hat sich veraendert. Ich sage der Praxisanleiterin Bescheid.",
              patientResponse: "Gut beobachtet, Yasemin! Beobachtung ist unsere wichtigste Kompetenz. Geraete zeigen Zahlen — du siehst den ganzen Menschen.",
              patientResponseB1: "Sehr gut beobachtet! Beobachten ist die wichtigste Faehigkeit in der Pflege. Du siehst mehr als das Geraet.",
              score: 3,
              feedback: "Systematische Beobachtung steht im Zentrum pflegerischen Handelns. Keine andere Berufsgruppe ist so nah am Patienten.",
              feedbackB1: "Genau richtig! Pflegende beobachten den Patienten den ganzen Tag. Das kann kein Geraet ersetzen.",
            },
            {
              text: "Der Monitor zeigt normale Werte. Wahrscheinlich ist alles in Ordnung.",
              textB1: "Das Geraet zeigt normale Werte. Dann ist alles okay.",
              patientResponse: "Vorsicht! Geraete erkennen Veraenderungen oft spaeter als geschulte Pflegende. Verlass dich nie nur auf Technik.",
              patientResponseB1: "Vorsicht! Geraete bemerken Veraenderungen oft spaeter als Pflegende.",
              score: 0,
              feedback: "Geraete ergaenzen die Beobachtung, ersetzen sie aber nicht. Pflegende erkennen Veraenderungen oft frueher.",
              feedbackB1: "Geraete helfen, aber sie ersetzen nicht die Beobachtung. Pflegende sehen oft frueher, wenn etwas nicht stimmt.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 14: Text — Systematische Beobachtung (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-14",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-beobachtung",
    contentC1: {
      title: "Beobachtung als Kernkompetenz",
      body: "Systematische Patientenbeobachtung steht im Zentrum pflegerischen Handelns. Sie ist Grundlage fuer den Pflegeprozess und die aerztliche Therapie. Keine andere Berufsgruppe verbringt so viel Zeit mit dem Pflegeempfaenger.",
    },
    contentB1: {
      title: "Beobachten ist die wichtigste Aufgabe",
      body: "Pflegende beobachten Patienten den ganzen Tag. Das ist die Grundlage fuer gute Pflege und fuer die Behandlung durch den Arzt. Keine andere Berufsgruppe ist so nah am Patienten.",
    },
  },

  // =============================================================
  // Step 15: Hotspot — Patientenzimmer beobachten (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s2-15",
    phase: "s2",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.321-322"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    imageUrl: "/images/le01/patientenzimmer.svg",
    imageAlt: "Illustration eines Patientenzimmers mit Patient im Bett",
    contentC1: {
      title: "Was beobachtest du?",
      body: "Du betrittst ein Patientenzimmer. Trainiere deine Beobachtungsfaehigkeit.",
    },
    contentB1: {
      title: "Was siehst du?",
      body: "Du gehst in ein Patientenzimmer. Was faellt dir auf?",
    },
    question: {
      fragetext: "Tippe auf die Bereiche, die du als Pflegekraft beobachten wuerdest.",
      hotspot: {
        imageUrl: "/images/le01/patientenzimmer.svg",
        imageAlt: "Patientenzimmer-Szene",
        instruction: "Finde die 4 wichtigen Beobachtungsbereiche.",
        zones: [
          { id: "gesicht", x: 35, y: 20, radius: 10, label: "Gesichtsausdruck: angespannt, schmerzverzerrt?" },
          { id: "koerper", x: 40, y: 50, radius: 12, label: "Koerperhaltung: Schonhaltung, Beweglichkeit?" },
          { id: "infusion", x: 70, y: 30, radius: 8, label: "Infusionsflasche: Fuellstand, Tropfgeschwindigkeit?" },
          { id: "bett", x: 50, y: 70, radius: 10, label: "Bettposition: Kopfteil erhoeht, Bettgitter?" },
        ],
      },
    },
  },

  // =============================================================
  // Step 16: Comparison — Wahrnehmungsfehler (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s2-16",
    phase: "s2",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.320-321"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-beobachtung",
    imageUrl: "/images/le01/wahrnehmungsfehler.svg",
    imageAlt: "Vergleichstabelle der haefigsten Wahrnehmungsfehler in der Pflege",
    contentC1: {
      title: "Wahrnehmungsfehler in der Beobachtung",
      body: "Unsere Wahrnehmung ist nicht objektiv. Bestimmte Fehler koennen die Beobachtung verfaelschen.",
    },
    contentB1: {
      title: "Fehler beim Beobachten",
      body: "Manchmal sehen wir Dinge falsch. Diese Fehler passieren oft.",
    },
    question: {
      fragetext: "Vergleiche die Wahrnehmungsfehler und ihre Beispiele.",
      comparison: {
        instruction: "Schau dir die verschiedenen Fehler an.",
        columns: [
          { label: "Fehler", icon: "alert-triangle" },
          { label: "Bedeutung", icon: "info" },
          { label: "Pflege-Beispiel", icon: "stethoscope" },
        ],
        rows: [
          {
            criterion: "Rosenthal-Effekt",
            values: ["Das Urteil anderer beeinflusst die eigene Beobachtung", "'Herr Mueller ist schwierig' — und du erwartest Probleme"],
            valuesB1: ["Man glaubt, was andere sagen", "Kollegin sagt: 'Der Patient ist schwierig.' Du denkst das auch."],
            highlight: 0,
          },
          {
            criterion: "Halo-Effekt",
            values: ["Eine Eigenschaft ueberblendet alle anderen", "Ein freundlicher Patient wird als 'schmerzfrei' eingeschaetzt"],
            valuesB1: ["Ein Merkmal faerbt alles ein", "Der Patient laechelt. Du denkst: Ihm geht es gut."],
          },
          {
            criterion: "Kontrastfehler",
            values: ["Vergleich mit vorherigem Patienten verfaelscht", "Nach einem schwerkranken Patienten wirkt jeder 'gesund'"],
            valuesB1: ["Man vergleicht mit dem letzten Patienten", "Nach einem sehr kranken Patienten denkt man: Dem hier geht es gut."],
          },
          {
            criterion: "Stereotype",
            values: ["Vorurteile ueber Gruppen beeinflussen Beobachtung", "'Aeltere Patienten klagen immer' — Schmerz wird nicht ernst genommen"],
            valuesB1: ["Vorurteile beeinflussen das Sehen", "'Alte Patienten klagen immer.' Man nimmt Schmerz nicht ernst."],
            highlight: 0,
          },
          {
            criterion: "Milde-Effekt",
            values: ["Sympathische Patienten werden positiver eingeschaetzt", "Netter Patient bekommt bessere Beurteilung als unsympathischer"],
            valuesB1: ["Nette Patienten bewertet man besser", "Netter Patient bekommt eine bessere Bewertung."],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 17: Swipe — Wahrnehmungsfehler erkennen (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s2-17",
    phase: "s2",
    stepType: "swipe",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q8 S.320-321"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    contentC1: {
      title: "Wahrnehmungsfehler oder korrekte Beobachtung?",
      body: "In der Pflege passieren Wahrnehmungsfehler schnell. Erkennst du sie?",
    },
    contentB1: {
      title: "Fehler oder richtig beobachtet?",
      body: "Manchmal beobachtet man falsch. Erkennst du die Fehler?",
    },
    question: {
      fragetext: "Wische rechts fuer 'Wahrnehmungsfehler' und links fuer 'korrekte Beobachtung'.",
      swipe: {
        instruction: "Ist das ein Wahrnehmungsfehler? Wische rechts (ja) oder links (nein).",
        cards: [
          {
            statement: "Die Kollegin sagt: 'Herr Mueller ist immer schwierig.' Du gehst mit Vorbehalten ins Zimmer.",
            statementB1: "Die Kollegin sagt: 'Herr Mueller ist schwierig.' Du denkst das auch, bevor du ihn siehst.",
            isCorrect: true,
            explanation: "Rosenthal-Effekt: Das Urteil der Kollegin beeinflusst deine eigene Beobachtung.",
            explanationB1: "Das ist der Rosenthal-Effekt. Du glaubst der Kollegin und beobachtest nicht neutral.",
          },
          {
            statement: "Du misst den Blutdruck und dokumentierst den Wert ohne Kommentar.",
            statementB1: "Du misst den Blutdruck und schreibst den Wert auf.",
            isCorrect: false,
            explanation: "Korrekte Beobachtung: Objektive Messung wird dokumentiert, ohne subjektive Bewertung.",
            explanationB1: "Richtig beobachtet! Du misst und schreibst auf. Das ist neutral.",
          },
          {
            statement: "Ein Patient laechelt immer. Du denkst: 'Dem geht es gut' — ohne Schmerzen zu erfragen.",
            statementB1: "Ein Patient laechelt. Du denkst: Er hat keine Schmerzen.",
            isCorrect: true,
            explanation: "Halo-Effekt: Die positive Eigenschaft (freundlich) ueberblendet moegliche Probleme.",
            explanationB1: "Das ist der Halo-Effekt. Das Laecheln laesst dich denken, alles ist gut.",
          },
          {
            statement: "Du fragst den Patienten nach seinen Schmerzen und beobachtest dabei seine Mimik.",
            statementB1: "Du fragst den Patienten nach Schmerzen und schaust dabei auf sein Gesicht.",
            isCorrect: false,
            explanation: "Korrekte Beobachtung: Verbale Befragung kombiniert mit nonverbaler Beobachtung.",
            explanationB1: "Richtig! Du fragst UND beobachtest. So bekommst du ein gutes Bild.",
          },
          {
            statement: "Nach einem schwerkranken Patienten denkst du: 'Dem naechsten geht es ja richtig gut.'",
            statementB1: "Nach einem sehr kranken Patienten denkst du: Der naechste Patient ist gesund.",
            isCorrect: true,
            explanation: "Kontrastfehler: Der Vergleich mit dem vorherigen Patienten verfaelscht die Einschaetzung.",
            explanationB1: "Das ist ein Kontrastfehler. Du vergleichst mit dem letzten Patienten.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 18: Crossword — Pflegeprozess-Begriffe (PUZZLE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s2-18",
    phase: "s2",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-83", "Q8 S.320-322"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Kreuzwortraetsel: Pflegeprozess",
      body: "Teste dein Wissen spielerisch. Alle Begriffe stammen aus dieser Session.",
    },
    contentB1: {
      title: "Kreuzwortraetsel",
      body: "Loese das Raetsel. Alle Woerter kennst du schon.",
    },
    question: {
      fragetext: "Fuelle das Kreuzwortraetsel aus.",
      crosswordWords: [
        { word: "PFLEGEANAMNESE", clue: "Strukturierte Datenerhebung beim Aufnahmegespraech" },
        { word: "EVALUATION", clue: "Letzter Schritt im Pflegeprozess: Wirkung beurteilen" },
        { word: "RESSOURCE", clue: "Faehigkeit oder Staerke, die bei der Problemloesung hilft" },
        { word: "HALO", clue: "Wahrnehmungsfehler: Eine Eigenschaft ueberblendet alles" },
        { word: "PFLEGEZIEL", clue: "Beschreibt den Soll-Zustand des Patienten" },
        { word: "BEOBACHTUNG", clue: "Kernkompetenz der Pflege: Patienten systematisch wahrnehmen" },
      ],
    },
  },

  // =============================================================
  // Step 19: Timer — Speed-Fragen (CHALLENGE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s2-19",
    phase: "s2",
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-83"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Speed-Runde: Pflegeprozess",
      body: "4 schnelle Fragen. Du hast 15 Sekunden pro Frage.",
    },
    contentB1: {
      title: "Schnelle Fragen",
      body: "4 Fragen. Du hast 15 Sekunden fuer jede Frage.",
    },
    question: {
      fragetext: "Beantworte die Fragen so schnell wie moeglich.",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Wie viele Schritte hat der Pflegeprozess nach Fiechter und Meier?",
          options: ["4", "6", "8"],
          correctIndex: 1,
        },
        {
          question: "Welcher Schritt kommt nach der Informationssammlung?",
          options: ["Massnahmen planen", "Probleme erkennen", "Evaluation"],
          correctIndex: 1,
        },
        {
          question: "Ein Patient sagt 'alles gut', isst aber nichts. Welcher Problemtyp?",
          options: ["Aktuell", "Potenziell", "Verdeckt"],
          correctIndex: 2,
        },
        {
          question: "Pflegeziele werden wie formuliert?",
          options: ["Negativ", "Positiv", "Neutral"],
          correctIndex: 1,
        },
      ],
    },
  },

  // =============================================================
  // Step 20: Freetext — Jonas-Fall (SCHREIBTISCH, vertiefung)
  // =============================================================
  {
    stepId: "le01-s2-20",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-83", "Q8 S.321"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Pflegeprozess anwenden",
      body: "Wende dein Wissen auf einen konkreten Fall an.",
    },
    contentB1: {
      title: "Pflegeprozess ausprobieren",
      body: "Nutze dein Wissen fuer einen Fall.",
    },
    question: {
      fragetext: "Jonas (8 Jahre) sagt nach seiner Blinddarm-OP: 'Mir gehts gut.' Aber sein Gesicht ist blass und er presst die Lippen zusammen. Welche 2 Schritte des Pflegeprozesses wendest du zuerst an?",
      musterantwort: "Schritt 1 (Informationssammlung): Beobachtung der Mimik — blasses Gesicht und gepresste Lippen deuten auf Schmerzen. Altersgerechtes Schmerzassessment durchfuehren. Schritt 2 (Probleme erkennen): Verdecktes Pflegeproblem — Schmerzen, die der Patient nicht benennt.",
      bewertungskriterien: [
        "Beobachtung korrekt gedeutet (Mimik als Schmerzzeichen)",
        "Mindestens 2 Schritte des Pflegeprozesses benannt",
        "Erkennung als verdecktes Problem",
      ],
      satzanfaengeB1: [
        "Zuerst beobachte ich...",
        "Dann erkenne ich das Problem...",
        "Der erste Schritt ist...",
      ],
    },
  },

  // =============================================================
  // Step 21: TrueFalse — Beobachtung und Pflegeprozess (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s2-21",
    phase: "s2",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-83", "Q8 S.321"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Teste dein Wissen ueber Pflegeprozess und Beobachtung.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Welche Aussagen stimmen?",
    },
    question: {
      fragetext: "Welche Aussagen sind richtig?",
      trueFalseCards: [
        {
          statement: "Die Evaluation ist der letzte Schritt im Pflegeprozess.",
          isTrue: true,
          explanation: "Schritt 6 nach Fiechter und Meier: Die Wirkung der Massnahmen beurteilen und pruefen, ob die Ziele erreicht wurden.",
        },
        {
          statement: "Pflegeziele werden nur von der Pflegekraft festgelegt.",
          isTrue: false,
          explanation: "Pflegeziele werden gemeinsam mit dem Pflegeempfaenger festgelegt — nicht allein durch die Pflegekraft.",
        },
        {
          statement: "Der Pflegeprozess ist ein einmaliger Ablauf.",
          isTrue: false,
          explanation: "Der Pflegeprozess ist ein Kreislauf. Nach der Evaluation beginnt er von vorn.",
        },
        {
          statement: "Beobachtung ist Grundlage fuer den Pflegeprozess und die aerztliche Therapie.",
          isTrue: true,
          explanation: "Pflegende beobachten am naechsten am Patienten. Ihre Beobachtungen sind Grundlage fuer alle Entscheidungen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Rueckblick Session 2 (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s2-22",
    phase: "s2",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeprozess",
    contentC1: {
      title: "Das hast du gelernt",
      body: "Session 2 ist geschafft. Hier sind die wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Session 2 ist fertig! Hier ist eine Zusammenfassung.",
    },
    question: {
      fragetext: "Deine Kernerkenntnisse aus Session 2:",
      summary: {
        reflexionRueckbezug: "Erinnerst du dich an den Swipe am Anfang? Du hast geraten, welche Schritte zum Pflegeprozess gehoeren. Jetzt kennst du alle 6.",
        kernaussagen: [
          "Der Pflegeprozess ist ein Kreislauf mit 6 Schritten nach Fiechter und Meier.",
          "Es gibt 5 Arten von Pflegeproblemen — auch verdeckte, die nur durch Beobachtung erkannt werden.",
          "Ressourcen sind genauso wichtig wie Probleme: koerperlich, innerlich, raeumlich, sozial, oekonomisch, spirituell.",
          "Beobachtung ist die Kernkompetenz der Pflege — keine andere Berufsgruppe ist so nah am Patienten.",
          "Wahrnehmungsfehler wie Rosenthal- und Halo-Effekt koennen die Beobachtung verfaelschen.",
        ],
      },
    },
  },
];
