// Session 1: "Was ist Pflege?" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2
// Themen: Pflegeverstaendnis, Profession, vorbehaltene Taetigkeiten, Geschichte
// Leitfall: Yasemin Demirci — Erster Tag auf Station (Szene S1)
// Bloom: B1-B3, 22 Steps, ~30 Min

import type { ContentStep, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-01",
  ceId: "ce-01",
  title: "Personen- und situationsorientiert professionell pflegen",
  titleShort: "Was ist Pflege?",
  zeitrichtwert: 40,
  sessionCount: 8,
  geschaetzteLernzeit: { c1: 30, b1: 35 },
  kompetenzbereiche: ["KB-I.1", "KB-II.1", "KB-IV.1", "KB-V.1"],
  bloomStufen: [1, 2, 3],
  voraussetzungen: [],
  leitfall: {
    name: "Yasemin Demirci",
    alter: 22,
    beruf: "Auszubildende zur Pflegefachfrau",
    diagnose: "Rollenfindung als Pflegende",
    setting: "Krankenhaus, internistische Station",
    kernproblem: "Balance zwischen Empathie und professioneller Distanz",
  },
  glossarCount: 22,
  quellenCount: 12,
};

export const STEPS_S1: ContentStep[] = [
  // =============================================================
  // Step 1: Selfrating — Vorwissen aktivieren (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s1-01",
    phase: "s1",
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Dein Wissensstand",
      body: "Schaetze dich ein: Wie gut kennst du dich mit Pflege als Beruf aus?",
    },
    contentB1: {
      title: "Was weisst du schon?",
      body: "Wie gut kennst du dich mit Pflege aus? Schaetze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich bei diesen Aussagen?",
    },
  },

  // =============================================================
  // Step 2: Swipe — Anticipation Guide (ENTDECKER, Brilliant-Prinzip)
  // =============================================================
  {
    stepId: "le01-s1-02",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Stimmt das wirklich?",
      body: "Viele Menschen haben bestimmte Vorstellungen von Pflege. Manche stimmen, manche nicht.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Viele Menschen denken bestimmte Dinge ueber Pflege. Stimmt das alles?",
    },
    question: {
      fragetext: "Wische nach rechts fuer 'stimmt' und nach links fuer 'stimmt nicht'.",
      swipe: {
        instruction: "Stimmt diese Aussage? Wische nach rechts (ja) oder links (nein).",
        cards: [
          {
            statement: "Pflege bedeutet vor allem Waschen und Fuettern.",
            statementB1: "Pflege heisst vor allem: waschen und essen geben.",
            isCorrect: false,
            explanation: "Pflege umfasst weit mehr: Beobachtung, Beratung, Planung, Forschung und Gesundheitsfoerderung.",
            explanationB1: "Pflege ist viel mehr: beobachten, beraten, planen und Gesundheit foerdern.",
          },
          {
            statement: "Pflegekraefte fuehren nur aus, was der Arzt anordnet.",
            statementB1: "Pflegende machen nur das, was der Arzt sagt.",
            isCorrect: false,
            explanation: "Pflege hat eigenverantwortliche Aufgaben. Das PflBG definiert vorbehaltene Taetigkeiten, die nur Pflegefachkraefte ausfuehren duerfen.",
            explanationB1: "Pflege hat eigene Aufgaben. Bestimmte Dinge duerfen nur Pflegefachkraefte machen.",
          },
          {
            statement: "Jeder kann pflegen — dafuer braucht man keine Ausbildung.",
            statementB1: "Jeder kann pflegen. Man braucht keine Ausbildung.",
            isCorrect: false,
            explanation: "Professionelle Pflege basiert auf wissenschaftlichem Wissen, einem Ethikkodex und einer mindestens 3-jaehrigen Ausbildung.",
            explanationB1: "Professionelle Pflege braucht Wissen, Regeln und eine 3-jaehrige Ausbildung.",
          },
          {
            statement: "Pflege foerdert auch die Gesundheit gesunder Menschen.",
            statementB1: "Pflege hilft auch gesunden Menschen, gesund zu bleiben.",
            isCorrect: true,
            explanation: "Laut ICN-Definition gehoert Gesundheitsfoerderung zu den Schluessselaufgaben der Pflege — nicht nur die Versorgung Kranker.",
            explanationB1: "Richtig! Pflege kuemmert sich auch um Gesundheit. Nicht nur um Krankheit.",
          },
          {
            statement: "In Deutschland ist Pflege ein akademischer Beruf mit Studium.",
            statementB1: "In Deutschland kann man Pflege studieren.",
            isCorrect: true,
            explanation: "Seit dem PflBG 2017 gibt es primaerqualifizierende Pflegestudiengaenge. Die Akademisierung schreitet voran.",
            explanationB1: "Ja! Seit 2017 kann man Pflege auch an einer Hochschule studieren.",
          },
          {
            statement: "Pflege findet nur im Krankenhaus statt.",
            statementB1: "Pflege gibt es nur im Krankenhaus.",
            isCorrect: false,
            explanation: "Pflege findet in vielen Settings statt: ambulant, stationaer, in Pflegeheimen, in Reha-Einrichtungen und in Hospizen.",
            explanationB1: "Pflege gibt es ueberall: zu Hause, im Pflegeheim, im Krankenhaus und an vielen anderen Orten.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 3: Dialog — Yasemin: Erster Tag auf Station (STORY)
  // =============================================================
  {
    stepId: "le01-s1-03",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Erster Tag auf Station",
      body: "Yasemin Demirci, 22, beginnt heute ihren ersten Praxiseinsatz auf einer internistischen Station.",
      fallbezug: "Montag, 7:00 Uhr. Yasemin steht vor der Stationstuer und atmet tief durch.",
    },
    contentB1: {
      title: "Der erste Tag",
      body: "Yasemin ist 22 Jahre alt. Heute ist ihr erster Tag auf der Station im Krankenhaus.",
      fallbezug: "Es ist Montag, 7 Uhr morgens. Yasemin steht vor der Tuer und ist nervoes.",
    },
    question: {
      fragetext: "Begleite Yasemin bei ihrem ersten Tag.",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin betritt das Stationszimmer. Die Praxisanleiterin schaut von ihren Unterlagen auf.",
          contextB1: "Yasemin kommt ins Stationszimmer. Die Praxisanleiterin schaut hoch.",
          speaker: "Yasemin",
          options: [
            {
              text: "Guten Morgen! Ich bin Yasemin Demirci, Auszubildende im ersten Drittel. Im Unterricht klingt alles logisch — aber jetzt stehe ich hier und mein Kopf ist leer.",
              textB1: "Guten Morgen! Ich bin Yasemin. Ich bin in der Ausbildung. Ich bin sehr nervoes.",
              patientResponse: "Willkommen, Yasemin! Das ist voellig normal am ersten Tag. Heute beobachtest du erst mal und hilfst bei der Morgenpflege.",
              patientResponseB1: "Willkommen, Yasemin! Am ersten Tag ist jeder nervoes. Heute schaust du erst mal zu.",
              score: 3,
              feedback: "Ehrlichkeit ueber die eigene Unsicherheit ist professionell. Es zeigt Reflexionsfaehigkeit.",
              feedbackB1: "Gut! Es ist okay, nervoes zu sein. Das zeigt, dass du es ernst nimmst.",
            },
            {
              text: "Hallo! Wo soll ich anfangen? Ich kann schon Blutdruck messen!",
              textB1: "Hallo! Was soll ich machen? Ich kann schon Blutdruck messen!",
              patientResponse: "Schoen, dass du motiviert bist! Aber lass uns erst die Patienten kennenlernen. Beobachten kommt vor dem Handeln.",
              patientResponseB1: "Du bist motiviert — sehr gut! Aber zuerst lernst du die Patienten kennen.",
              score: 1,
              feedback: "Motivation ist gut, aber am ersten Tag ist Beobachten wichtiger als Handeln.",
              feedbackB1: "Motivation ist toll! Aber am ersten Tag ist Zuschauen und Verstehen am wichtigsten.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin zeigt Yasemin die Patiententafel. 'Hier siehst du alle Patienten. Achte auf die Mimik der Patienten, nicht nur auf ihre Worte.'",
          contextB1: "Die Praxisanleiterin zeigt Yasemin die Tafel mit den Patienten. 'Schau dir die Gesichter der Patienten an. Nicht nur das, was sie sagen.'",
          speaker: "Yasemin (denkt)",
          options: [
            {
              text: "Mimik beobachten — das ist also wichtiger als ich dachte. Nicht nur zuhoeren, sondern auch hinschauen.",
              textB1: "Auf die Gesichter achten. Das ist wichtig. Nicht nur zuhoeren.",
              patientResponse: "Genau! Beobachtung ist eine der wichtigsten Kompetenzen in der Pflege. Du wirst lernen, auf kleinste Zeichen zu achten.",
              patientResponseB1: "Richtig! Beobachten ist sehr wichtig in der Pflege. Du lernst, auf kleine Zeichen zu achten.",
              score: 3,
              feedback: "Beobachtung ist eine Kernkompetenz der Pflege. Mimik, Koerperhaltung und Verhalten sagen oft mehr als Worte.",
              feedbackB1: "Genau! Pflegende beobachten immer: Gesicht, Koerper und Verhalten. Das sagt oft mehr als Worte.",
            },
            {
              text: "Muss ich mir das alles merken? Das sind so viele Patienten...",
              textB1: "So viele Patienten! Kann ich mir das alles merken?",
              patientResponse: "Keine Sorge, das kommt mit der Zeit. Heute konzentrierst du dich auf 2-3 Patienten. Schritt fuer Schritt.",
              patientResponseB1: "Keine Sorge! Heute schaust du dir nur 2 oder 3 Patienten an. Schritt fuer Schritt.",
              score: 1,
              feedback: "Verstaendliche Sorge. Wichtig ist: Beobachtung laesst sich trainieren, man muss nicht alles auf einmal koennen.",
              feedbackB1: "Verstaendlich! Man muss nicht alles auf einmal koennen. Beobachten kann man lernen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 4: Text — ICN + WHO Definition (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-04",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Was ist Pflege?",
      body: "Die ICN definiert Pflege als eigenverantwortliche Versorgung aller Altersgruppen. Das gilt fuer kranke und gesunde Menschen, in allen Settings. Schluessselaufgaben laut ICN: Gesundheitsfoerderung, Krankheitsverhuetung, Versorgung, Forschung und Bildung. Die WHO ergaenzt: Pflege hilft dem Menschen, sein physisches, psychisches und soziales Potenzial zu verwirklichen.",
      glossarBegriffe: ["Pflege"],
    },
    contentB1: {
      title: "Was ist Pflege?",
      body: "Pflege bedeutet: sich um Menschen kuemmern. Egal ob krank oder gesund. Die fuenf Aufgaben laut ICN: Gesundheit foerdern, Krankheit verhindern, Menschen versorgen, forschen und ausbilden.",
      glossarBegriffe: ["Pflege"],
    },
  },

  // =============================================================
  // Step 5: Reveal — ICN-Schluessselaufgaben (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-05",
    phase: "s1",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Die fuenf Aufgaben der Pflege",
      body: "Der ICN benennt fuenf zentrale Aufgabenbereiche professioneller Pflege.",
    },
    contentB1: {
      title: "Fuenf Hauptaufgaben der Pflege",
      body: "Die ICN sagt: Pflege hat fuenf wichtige Aufgaben. Decke sie auf.",
    },
    question: {
      fragetext: "Decke die fuenf Aufgaben der Pflege auf.",
      reveal: {
        instruction: "Tippe auf jede Karte, um die Aufgabe zu entdecken.",
        revealMode: "free",
        cards: [
          {
            id: "r1",
            label: "Aufgabe 1",
            content: "Gesundheitsfoerderung: Menschen dabei unterstuetzen, gesund zu bleiben und gesundheitsbewusst zu leben.",
            contentB1: "Gesundheit foerdern: Menschen helfen, gesund zu bleiben.",
            icon: "heart",
          },
          {
            id: "r2",
            label: "Aufgabe 2",
            content: "Krankheitsverhuetung: Risiken erkennen und Massnahmen ergreifen, bevor Krankheiten entstehen.",
            contentB1: "Krankheit verhindern: Probleme frueh erkennen und vorbeugen.",
            icon: "shield",
          },
          {
            id: "r3",
            label: "Aufgabe 3",
            content: "Versorgung: Kranke und pflegebeduerftige Menschen pflegen und in ihrer Genesung unterstuetzen.",
            contentB1: "Kranke versorgen: Kranke Menschen pflegen und bei der Genesung helfen.",
            icon: "stethoscope",
          },
          {
            id: "r4",
            label: "Aufgabe 4",
            content: "Forschung: Die Pflegewissenschaft entwickelt und prueft Wissen fuer eine bessere Pflegepraxis.",
            contentB1: "Forschen: Pflege entwickelt neues Wissen. Das macht Pflege besser.",
            icon: "microscope",
          },
          {
            id: "r5",
            label: "Aufgabe 5",
            content: "Bildung: Aus- und Weiterbildung als Kernaufgabe der Pflege — Wissen weitergeben und sichern.",
            contentB1: "Ausbilden: Neue Pflegekraefte ausbilden und Wissen weitergeben.",
            icon: "graduation-cap",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: MC — ICN-Aufgaben (CHALLENGE, AMBOSS-Prinzip)
  // =============================================================
  {
    stepId: "le01-s1-06",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Pflege vs. aerztliche Aufgaben",
      body: "Yasemin beobachtet am ersten Tag: Wer macht was auf der Station?",
    },
    contentB1: {
      title: "Was macht die Pflege?",
      body: "Yasemin fragt sich: Was darf ich als Pflegekraft tun — und was nicht?",
    },
    question: {
      fragetext: "Yasemin soll ihrem Patienten erklaeren, was Pflegende tun. Welche Aufgabe gehoert NICHT dazu?",
      optionen: [
        {
          text: "Dem Patienten eine medizinische Diagnose nennen",
          isCorrect: true,
          explanation: "Medizinische Diagnosen stellen Aerzte. Pflegende erheben den Pflegebedarf und formulieren Pflegediagnosen — das ist eine andere Kompetenz.",
          explanationB1: "Das macht der Arzt. Pflegende beobachten und pflegen — aber sie stellen keine medizinischen Diagnosen.",
        },
        {
          text: "Den Patienten ueber Hygienemaßnahmen informieren",
          isCorrect: false,
          explanation: "Beratung und Gesundheitsfoerderung gehoeren zu den ICN-Schluessselaufgaben der Pflege.",
          explanationB1: "Informieren und beraten ist Aufgabe der Pflege. Das gehoert dazu.",
        },
        {
          text: "Den Pflegebedarf des Patienten einschaetzen",
          isCorrect: false,
          explanation: "Den Pflegebedarf erheben ist eine vorbehaltene Taetigkeit — eine Kernkompetenz der Pflegefachkraefte (PflBG §4).",
          explanationB1: "Den Pflegebedarf feststellen — das ist eine wichtige Aufgabe von Pflegefachkraeften.",
        },
        {
          text: "Den Patienten beim Aufstehen unterstuetzen",
          isCorrect: false,
          explanation: "Versorgung und Unterstuetzung sind Kernaufgaben der Pflege laut ICN.",
          explanationB1: "Patienten helfen und versorgen — das ist Pflege.",
        },
      ],
    },
  },

  // =============================================================
  // Step 7: Memory — Fachbegriffe (PUZZLE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s1-07",
    phase: "s1",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q7 S.282"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Memory: Fachbegriffe",
      body: "Finde die zusammengehoerenden Paare: Fachbegriff und Erklaerung.",
    },
    contentB1: {
      title: "Memory-Spiel",
      body: "Finde die Paare: Welches Wort passt zu welcher Erklaerung?",
    },
    question: {
      fragetext: "Decke zwei Karten auf und finde das passende Paar.",
      memoryPairs: [
        { a: "Pflege (ICN)", b: "Eigenverantwortliche Versorgung aller Altersgruppen" },
        { a: "Profession", b: "Beruf mit eigenem Wissen und Ethikkodex" },
        { a: "Pflegeempfaenger", b: "Person, die professionelle Pflege erhaelt" },
        { a: "Ethik", b: "Nachdenken ueber richtiges Handeln" },
        { a: "Wuerde", b: "Unantastbarer Wert jedes Menschen" },
        { a: "Menschenbild", b: "Vorstellungen darueber, was den Menschen ausmacht" },
      ],
    },
  },

  // =============================================================
  // Step 8: Text — Profession und Professionalisierung (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-08",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24", "Q1 S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Pflege als Profession",
      body: "Eine Profession zeichnet sich aus durch: wissenschaftlich fundiertes Wissen, eigene Ausbildungsgaenge, einen Ethikkodex und Autonomie. Pflege befindet sich auf dem Weg zur Profession. Das PflBG 2017 definiert erstmals vorbehaltene Taetigkeiten. Nur Pflegefachkraefte duerfen Pflegebedarf erheben, Pflegeprozess steuern und Pflegequalitaet sichern.",
      glossarBegriffe: ["Profession"],
    },
    contentB1: {
      title: "Pflege — ein besonderer Beruf",
      body: "Was macht einen Beruf besonders? Eigenes Wissen, eine eigene Ausbildung, eigene Regeln und Selbststaendigkeit. Pflege wird immer professioneller. Seit 2017 gibt es ein neues Gesetz: das PflBG. Es sagt: Nur Pflegefachkraefte duerfen den Pflegebedarf feststellen und die Pflege planen.",
      glossarBegriffe: ["Profession"],
    },
  },

  // =============================================================
  // Step 9: Flipcard — Merkmale einer Profession (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-09",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    imageUrl: "/images/le01/profession-merkmale.svg",
    imageAlt: "5 Karten mit Merkmalen einer Profession",
    contentC1: {
      title: "Merkmale einer Profession",
      body: "Fuenf zentrale Merkmale kennzeichnen eine Profession. Pflege erfuellt immer mehr davon.",
    },
    contentB1: {
      title: "Was macht einen Beruf zur Profession?",
      body: "Ein besonderer Beruf hat fuenf wichtige Merkmale. Drehe die Karten um.",
    },
    question: {
      fragetext: "Tippe auf eine Karte, um das Pflege-Beispiel zu sehen.",
      flipcard: {
        instruction: "Drehe die Karten um und entdecke die Merkmale einer Profession.",
        cards: [
          {
            front: "Wissenschaftliches Wissen",
            back: "Pflege forscht und nutzt Evidence-based Nursing (EBN) statt Tradition.",
            backB1: "Pflege nutzt Wissen aus der Forschung. Nicht nur: 'Das machen wir schon immer so.'",
            category: "Merkmal",
          },
          {
            front: "Eigene Ausbildung",
            back: "3-jaehrige generalistische Pflegeausbildung oder primaerqualifizierendes Studium seit PflBG 2017.",
            backB1: "3 Jahre Ausbildung oder Studium. Seit 2017 gibt es eine neue Ausbildung fuer alle.",
            category: "Merkmal",
          },
          {
            front: "Ethikkodex",
            back: "Der ICN-Ethikkodex formuliert Verhaltensnormen in 4 Bereichen: gegenueber Mitmenschen, in der Berufsausuebung, gegenueber der Profession und gegenueber Kollegen.",
            backB1: "Der ICN-Ethikkodex sagt, wie Pflegende sich verhalten sollen: gegenueber Patienten, im Beruf und mit Kollegen.",
            category: "Merkmal",
          },
          {
            front: "Autonomie",
            back: "Vorbehaltene Taetigkeiten nach PflBG §4: Pflegebedarf erheben, Pflegeprozess steuern, Qualitaet sichern.",
            backB1: "Pflegefachkraefte entscheiden selbst ueber bestimmte Aufgaben. Das steht im Gesetz.",
            category: "Merkmal",
          },
          {
            front: "Akademisierung",
            back: "Primaerqualifizierende Studiengaenge ermoeglichen einen Hochschulabschluss in der Pflege.",
            backB1: "Man kann Pflege jetzt auch an einer Hochschule studieren.",
            category: "Merkmal",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: TrueFalse — Vorbehaltene Taetigkeiten (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s1-10",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q11"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Vorbehaltene Taetigkeiten",
      body: "Seit dem PflBG gibt es Aufgaben, die nur Pflegefachkraefte ausfuehren duerfen.",
    },
    contentB1: {
      title: "Wer darf was?",
      body: "Bestimmte Aufgaben duerfen nur Pflegefachkraefte machen. Welche Aussagen stimmen?",
    },
    question: {
      fragetext: "Welche Aussagen sind richtig?",
      trueFalseCards: [
        {
          statement: "Pflegehelfer duerfen eigenstaendig den Pflegebedarf erheben.",
          isTrue: false,
          explanation: "Die Erhebung des Pflegebedarfs ist eine vorbehaltene Taetigkeit nach PflBG §4 — nur fuer Pflegefachkraefte.",
        },
        {
          statement: "Das PflBG definiert vorbehaltene Taetigkeiten fuer Pflegefachkraefte.",
          isTrue: true,
          explanation: "Korrekt — PflBG §4 regelt diese vorbehaltenen Taetigkeiten.",
        },
        {
          statement: "Pflege ist bereits eine vollstaendig anerkannte Profession wie Medizin.",
          isTrue: false,
          explanation: "Pflege befindet sich noch im Professionalisierungsprozess. Akademisierung und Forschung nehmen zu, aber der Weg ist nicht abgeschlossen.",
        },
        {
          statement: "Ein Ethikkodex ist ein Merkmal einer Profession.",
          isTrue: true,
          explanation: "Der ICN-Ethikkodex formuliert seit 1953 verbindliche Verhaltensnormen fuer Pflegende weltweit.",
        },
      ],
    },
  },

  // =============================================================
  // Step 11: Dialog — Yasemin beobachtet Aufnahmegespraech (STORY)
  // =============================================================
  {
    stepId: "le01-s1-11",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q2 S.80"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Das Aufnahmegespraech",
      body: "Yasemin beobachtet, wie ihre Praxisanleiterin ein Aufnahmegespraech fuehrt.",
      fallbezug: "Die Praxisanleiterin sagt: 'Achte auf die Mimik des Patienten, nicht nur auf seine Worte.'",
    },
    contentB1: {
      title: "Ein Patient kommt",
      body: "Yasemin schaut zu, wie die Praxisanleiterin mit einem neuen Patienten spricht.",
      fallbezug: "'Schau dir sein Gesicht an. Nicht nur, was er sagt.'",
    },
    question: {
      fragetext: "Begleite Yasemin beim Aufnahmegespraech.",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Die Praxisanleiterin fragt Herrn Mueller: 'Was koennen Sie noch selbst?' statt 'Was koennen Sie nicht?'",
          contextB1: "Die Praxisanleiterin fragt: 'Was koennen Sie noch selbst machen?'",
          speaker: "Yasemin (denkt)",
          options: [
            {
              text: "Interessant — sie fragt nicht nach Problemen, sondern nach Ressourcen. Sie will wissen, was er KANN.",
              textB1: "Sie fragt, was er kann. Nicht was er nicht kann. Das ist gut.",
              patientResponse: "Genau! Ressourcenorientierung ist ein Grundprinzip der Pflege. Wir schauen auf Staerken, nicht nur auf Defizite.",
              patientResponseB1: "Richtig! Wir schauen auf die Staerken. Nicht nur auf die Probleme.",
              score: 3,
              feedback: "Ressourcenorientierung ist zentral im Pflegeprozess. Erst die Faehigkeiten erkennen, dann die Probleme.",
              feedbackB1: "Genau! Zuerst schauen, was der Patient noch kann. Dann die Probleme anschauen.",
            },
            {
              text: "Warum fragt sie nicht direkt, was ihm fehlt? Das waere doch schneller.",
              textB1: "Warum fragt sie nicht einfach, was er nicht kann?",
              patientResponse: "Wenn wir nur nach Defiziten fragen, sehen wir den ganzen Menschen nicht. Ressourcen sind genauso wichtig.",
              patientResponseB1: "Wenn wir nur nach Problemen fragen, vergessen wir die Staerken.",
              score: 1,
              feedback: "Pflege fragt immer beides: Was ist das Problem UND was sind die Ressourcen?",
              feedbackB1: "Gute Frage! Pflege fragt immer beides: Probleme und Staerken.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 12: Diagram — Mindmap "Pflege als Beruf" (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-12",
    phase: "s1",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24", "Q3 S.103"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    imageUrl: "/images/le01/mindmap-pflege-beruf.svg",
    imageAlt: "Mindmap: Pflege als Beruf mit 5 Unterthemen",
    contentC1: {
      title: "Pflege als Beruf",
      body: "Diese Mindmap zeigt dir die wichtigsten Bereiche der Pflege als Profession.",
    },
    contentB1: {
      title: "Pflege als Beruf",
      body: "Diese Uebersicht zeigt: Was gehoert alles zur Pflege als Beruf?",
    },
    question: {
      fragetext: "Erkunde die Bereiche der Pflege als Profession.",
      diagram: {
        diagramType: "mindmap",
        instruction: "Tippe auf die einzelnen Bereiche, um mehr zu erfahren.",
        nodes: [
          { id: "pflege", label: "Pflege als Beruf", labelB1: "Pflege als Beruf", highlight: true },
          { id: "wissenschaft", label: "Pflegewissenschaft", labelB1: "Pflege-Forschung" },
          { id: "ausbildung", label: "Eigene Ausbildung", labelB1: "Eigene Ausbildung" },
          { id: "ethik", label: "Ethikkodex", labelB1: "Regeln fuer gutes Handeln" },
          { id: "praxis", label: "Eigenverantwortliche Praxis", labelB1: "Eigene Aufgaben" },
          { id: "geschichte", label: "Geschichte", labelB1: "Geschichte der Pflege" },
        ],
        edges: [
          { from: "pflege", to: "wissenschaft" },
          { from: "pflege", to: "ausbildung" },
          { from: "pflege", to: "ethik" },
          { from: "pflege", to: "praxis" },
          { from: "pflege", to: "geschichte" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 13: Timeline — Geschichte der Pflege (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-13",
    phase: "s1",
    stepType: "timeline",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.21", "Q1 S.22", "Q1 S.23", "Q9"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    imageUrl: "/images/le01/timeline-pflege.svg",
    imageAlt: "Zeitstrahl der Pflegegeschichte",
    contentC1: {
      title: "Meilensteine der Pflege",
      body: "Von Nightingale bis zum PflBG: Die Pflege hat eine lange Geschichte der Professionalisierung.",
    },
    contentB1: {
      title: "Wichtige Daten der Pflege",
      body: "Die Pflege hat eine lange Geschichte. Hier siehst du die wichtigsten Zeitpunkte.",
    },
    question: {
      fragetext: "Erkunde die wichtigsten Meilensteine der Pflegegeschichte.",
      timeline: {
        instruction: "Scrolle durch den Zeitstrahl.",
        events: [
          {
            id: "t1",
            time: "1859",
            title: "Notes on Nursing",
            description: "Florence Nightingale veroeffentlicht das erste Pflegelehrbuch und gilt als Begruenderin der modernen Krankenpflege.",
            descriptionB1: "Nightingale schreibt das erste Buch ueber Pflege. Sie hat die moderne Pflege gegruendet.",
            icon: "book",
          },
          {
            id: "t2",
            time: "1903",
            title: "Agnes Karll",
            description: "Gruendung der ersten deutschen Berufsorganisation fuer Pflegende (Vorlaeufer des DBfK). 1907 wird sie ICN-Praesidentin.",
            descriptionB1: "Agnes Karll gruendet den ersten Pflege-Verein in Deutschland.",
            icon: "users",
          },
          {
            id: "t3",
            time: "12. Mai",
            title: "Tag der Pflege",
            description: "Der Internationale Tag der Pflege ehrt Florence Nightingales Geburtstag am 12. Mai.",
            descriptionB1: "Am 12. Mai ist der Tag der Pflege — Nightingales Geburtstag.",
            icon: "calendar",
            highlight: true,
          },
          {
            id: "t4",
            time: "2017",
            title: "PflBG",
            description: "Das Pflegeberufegesetz vereint alle Pflegeausbildungen zur generalistischen Ausbildung und definiert vorbehaltene Taetigkeiten.",
            descriptionB1: "Neues Gesetz: Jetzt gibt es nur noch eine Pflege-Ausbildung fuer alle.",
            icon: "file-text",
            highlight: true,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: Slider — PflBG Jahr (CHALLENGE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s1-14",
    phase: "s1",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "PflBG — wann kam es?",
      body: "Das Pflegeberufegesetz war ein Meilenstein fuer die Professionalisierung der Pflege.",
    },
    contentB1: {
      title: "Wann kam das neue Gesetz?",
      body: "Das Pflegeberufegesetz (PflBG) war sehr wichtig fuer die Pflege.",
    },
    question: {
      fragetext: "In welchem Jahr wurde das Pflegeberufegesetz (PflBG) verabschiedet?",
      slider: {
        instruction: "Bewege den Regler auf das richtige Jahr.",
        unit: "",
        min: 1990,
        max: 2025,
        step: 1,
        correctValue: 2017,
        tolerance: 2,
        explanation: "Das PflBG wurde 2017 verabschiedet. Es vereinte die drei bisherigen Pflegeausbildungen zur generalistischen Ausbildung.",
        explanationB1: "Das PflBG kam 2017. Seitdem gibt es nur noch eine Pflege-Ausbildung fuer alle.",
      },
    },
  },

  // =============================================================
  // Step 15: Comparison — Professionelle vs. Laienpflege (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s1-15",
    phase: "s1",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24", "Q3 S.101-102"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverstaendnis",
    imageUrl: "/images/le01/vergleich-pflege.svg",
    imageAlt: "Vergleichstabelle: Professionelle Pflege vs. Laienpflege",
    contentC1: {
      title: "Professionelle Pflege vs. Laienpflege",
      body: "Der Unterschied zwischen professioneller Pflege und Pflege durch Angehoerige ist zentral fuer das Pflegeverstaendnis.",
    },
    contentB1: {
      title: "Professionelle Pflege oder Familie?",
      body: "Es gibt wichtige Unterschiede zwischen professioneller Pflege und Pflege durch die Familie.",
    },
    question: {
      fragetext: "Vergleiche die beiden Formen der Pflege.",
      comparison: {
        instruction: "Schau dir die Unterschiede an.",
        columns: [
          { label: "Professionelle Pflege", icon: "briefcase" },
          { label: "Laienpflege", icon: "home" },
        ],
        rows: [
          {
            criterion: "Wissensgrundlage",
            values: ["Wissenschaftliches Wissen (EBN)", "Erfahrung und Intuition"],
            valuesB1: ["Wissen aus der Forschung", "Eigene Erfahrung"],
            highlight: 0,
          },
          {
            criterion: "Ausbildung",
            values: ["Mindestens 3-jaehrige Ausbildung", "Keine formale Ausbildung noetig"],
            valuesB1: ["3 Jahre Ausbildung", "Keine Ausbildung noetig"],
          },
          {
            criterion: "Ethikkodex",
            values: ["ICN-Ethikkodex, Pflege-Charta", "Eigene Werte und Moral"],
            valuesB1: ["Internationale Regeln fuer gutes Handeln", "Eigene Werte"],
          },
          {
            criterion: "Methode",
            values: ["Systematischer Pflegeprozess", "Situatives Handeln"],
            valuesB1: ["Fester Ablauf in 6 Schritten", "Handeln nach Gefuehl"],
          },
          {
            criterion: "Nachpruefbarkeit",
            values: ["Dokumentiert, qualitaetsgesichert", "Nicht standardisiert"],
            valuesB1: ["Wird aufgeschrieben und geprueft", "Wird nicht geprueft"],
            highlight: 0,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 16: Dialog — Yasemin fragt nach Verantwortung (STORY)
  // =============================================================
  {
    stepId: "le01-s1-16",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q11"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Was darf ich als Azubi?",
      body: "Yasemin fragt ihre Praxisanleiterin nach den Verantwortungsbereichen.",
      fallbezug: "Yasemin hat das Aufnahmegespraech beobachtet und will jetzt mehr ueber ihre Rolle wissen.",
    },
    contentB1: {
      title: "Was darf ich machen?",
      body: "Yasemin fragt: Was darf sie als Auszubildende machen?",
      fallbezug: "Yasemin hat zugeschaut und will jetzt wissen, was sie selbst machen darf.",
    },
    question: {
      fragetext: "Was erklaert die Praxisanleiterin ueber vorbehaltene Taetigkeiten?",
      patientName: "Yasemin",
      dialogPhases: [
        {
          context: "Yasemin fragt: 'Was darf ich als Azubi eigentlich alles machen? Und was darf nur die Fachkraft?'",
          contextB1: "Yasemin fragt: 'Was darf ich machen? Was darf nur die Pflegefachkraft?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Gute Frage! Es gibt vorbehaltene Taetigkeiten: Nur Pflegefachkraefte duerfen den Pflegebedarf erheben, den Pflegeprozess steuern und die Qualitaet sichern. Du lernst das alles — aber unter Anleitung.",
              textB1: "Gute Frage! Bestimmte Aufgaben duerfen nur Pflegefachkraefte machen: den Pflegebedarf feststellen und die Pflege planen. Du lernst das — aber mit meiner Hilfe.",
              patientResponse: "Also mache ich das alles spaeter allein? Das ist eine grosse Verantwortung.",
              patientResponseB1: "Also mache ich das spaeter allein? Das ist viel Verantwortung.",
              score: 3,
              feedback: "Yasemin versteht: Pflegefachkraefte tragen eigenverantwortliche Aufgaben. Die Ausbildung bereitet darauf vor.",
              feedbackB1: "Richtig! Pflegefachkraefte haben eigene, wichtige Aufgaben. Die Ausbildung bereitet dich darauf vor.",
            },
            {
              text: "Du machst einfach alles, was ich dir sage. Mehr musst du nicht wissen.",
              textB1: "Mach einfach, was ich sage.",
              patientResponse: "Hmm, aber ich moechte verstehen, warum ich etwas tue — nicht nur Anweisungen befolgen.",
              patientResponseB1: "Aber ich will verstehen, warum ich etwas mache.",
              score: 0,
              feedback: "Blinder Gehorsam ist kein professionelles Handeln. Pflegende muessen verstehen, warum sie etwas tun.",
              feedbackB1: "Pflegende muessen verstehen, warum sie etwas tun. Nicht nur Anweisungen befolgen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 17: Matching — Pflege-Begriffe (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s1-17",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q2 S.78-80"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Begriffe zuordnen",
      body: "Ordne die Fachbegriffe den richtigen Definitionen zu.",
    },
    contentB1: {
      title: "Pflege-Woerter",
      body: "Welches Wort passt zu welcher Erklaerung?",
    },
    question: {
      fragetext: "Verbinde jeden Begriff mit der passenden Definition.",
      matchingPairs: [
        { left: "Pflegeprozess", right: "Systematischer Ablauf zur Pflegeplanung in 6 Schritten" },
        { left: "Pflegeempfaenger", right: "Person, die professionelle Pflege erhaelt" },
        { left: "Vorbehaltene Taetigkeiten", right: "Aufgaben, die nur Pflegefachkraefte ausfuehren duerfen" },
        { left: "Pflegeanamnese", right: "Strukturierte Datenerhebung beim Aufnahmegespraech" },
        { left: "Ressource", right: "Faehigkeit oder Staerke, die bei Problemen hilft" },
      ],
    },
  },

  // =============================================================
  // Step 18: Categorize — Fachkraft vs. Helfer (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s1-18",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q11"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Wer darf was?",
      body: "Das PflBG unterscheidet klar: Bestimmte Aufgaben sind Pflegefachkraeften vorbehalten.",
    },
    contentB1: {
      title: "Fachkraft oder Helfer?",
      body: "Sortiere: Was darf nur die Pflegefachkraft? Was darf auch der Pflegehelfer?",
    },
    question: {
      fragetext: "Ordne die Taetigkeiten der richtigen Kategorie zu.",
      categories: [
        { name: "Nur Pflegefachkraft" },
        { name: "Auch Pflegehelfer" },
      ],
      categoryItems: [
        { text: "Pflegebedarf erheben", correctCategory: 0 },
        { text: "Koerperpflege durchfuehren", correctCategory: 1 },
        { text: "Pflegeprozess organisieren", correctCategory: 0 },
        { text: "Essen anreichen", correctCategory: 1 },
        { text: "Pflegequalitaet sichern", correctCategory: 0 },
        { text: "Vitalzeichen messen", correctCategory: 1 },
        { text: "Pflegeziele festlegen", correctCategory: 0 },
        { text: "Lagerung durchfuehren", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Step 19: Crossword — Pflege-Begriffe (PUZZLE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s1-19",
    phase: "s1",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.21-24", "Q7 S.282"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Kreuzwortraetsel: Pflege-Begriffe",
      body: "Teste dein Wissen spielerisch. Alle Begriffe stammen aus dieser Session.",
    },
    contentB1: {
      title: "Kreuzwortraetsel",
      body: "Loese das Raetsel. Alle Woerter kennst du schon aus dieser Lektion.",
    },
    question: {
      fragetext: "Fulle das Kreuzwortraetsel aus.",
      crosswordWords: [
        { word: "NIGHTINGALE", clue: "Begruenderin der modernen Krankenpflege (1859)" },
        { word: "PROFESSION", clue: "Beruf mit eigenem Wissen, Ausbildung und Ethikkodex" },
        { word: "ETHIK", clue: "Nachdenken ueber richtiges Handeln" },
        { word: "ICN", clue: "Internationale Organisation fuer Pflege (Abkuerzung)" },
        { word: "PFLEGEEMPFAENGER", clue: "Person, die professionelle Pflege erhaelt" },
        { word: "WUERDE", clue: "Unantastbarer Wert jedes Menschen (Art. 1 GG)" },
      ],
    },
  },

  // =============================================================
  // Step 20: Reflection — Professionelle vs. Laienpflege (SCHREIBTISCH, vertiefung)
  // =============================================================
  {
    stepId: "le01-s1-20",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24", "Q3 S.101-102"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Professionell vs. Laie",
      body: "Nutze dein Wissen aus dieser Session fuer eine kurze Reflexion.",
    },
    contentB1: {
      title: "Professionelle Pflege",
      body: "Denke nach und schreibe deine Antwort.",
    },
    question: {
      fragetext: "Was unterscheidet professionelle Pflege von der Pflege durch Angehoerige? Nenne 2 Merkmale.",
      musterantwort: "Professionelle Pflege basiert auf wissenschaftlichem Wissen (EBN), folgt einem systematischen Pflegeprozess und richtet sich nach einem Ethikkodex. Laienpflege basiert auf Intuition, Erfahrung und emotionaler Bindung.",
      bewertungskriterien: [
        "Mindestens 2 Merkmale korrekt benannt",
        "Begruendung nachvollziehbar",
        "Fachsprache angemessen verwendet",
      ],
      satzanfaengeB1: [
        "Professionelle Pflege unterscheidet sich, weil...",
        "Ein wichtiges Merkmal ist...",
        "Pflege durch die Familie ist anders, weil...",
      ],
      reflection: {
        prompt: "Was unterscheidet professionelle Pflege von der Pflege durch Angehoerige? Nenne 2 Merkmale.",
        placeholder: "Professionelle Pflege unterscheidet sich, weil...",
        systemPrompt: "Bewerte ob der Schueler mindestens 2 Merkmale professioneller Pflege nennt (z.B. Wissen, Ethikkodex, Pflegeprozess, Ausbildung, EBN). Gib konstruktives Feedback nach dem Sandwich-Prinzip.",
      },
    },
  },

  // =============================================================
  // Step 21: Confidence — Wissenscheck (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s1-21",
    phase: "s1",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Drei Kernthemen im Check",
      body: "Schaetze ehrlich ein: Was kannst du jetzt erklaeren?",
    },
    contentB1: {
      title: "Was habe ich gelernt?",
      body: "Schaetze ein: Was kannst du nach dieser Session erklaeren?",
    },
    question: {
      fragetext: "Bewerte jede Aussage: Wie sicher bist du?",
      confidenceCards: [
        {
          statement: "Ich kann erklaeren, was Pflege laut ICN ist.",
          statementB1: "Ich kann erklaeren, was Pflege ist.",
          isTrue: true,
          explanation: "Pflege ist die eigenverantwortliche Versorgung von Menschen aller Altersgruppen — mit Gesundheitsfoerderung, Verhuetung, Versorgung und Begleitung.",
          explanationB1: "Pflege ist: sich um Menschen kuemmern. Gesundheit foerdern, Krankheit verhindern, Kranke versorgen.",
        },
        {
          statement: "Ich kenne mindestens 3 Merkmale einer Profession.",
          statementB1: "Ich kenne 3 Merkmale einer Profession.",
          isTrue: true,
          explanation: "Wissenschaftliches Wissen, eigene Ausbildung, Ethikkodex, Autonomie und Akademisierung.",
          explanationB1: "Eigenes Wissen, eigene Ausbildung, eigene Regeln (Ethikkodex).",
        },
        {
          statement: "Ich weiss, was vorbehaltene Taetigkeiten nach PflBG sind.",
          statementB1: "Ich weiss, was nur Pflegefachkraefte machen duerfen.",
          isTrue: true,
          explanation: "Pflegebedarf erheben, Pflegeprozess steuern und Pflegequalitaet sichern — nur durch Pflegefachkraefte.",
          explanationB1: "Nur Pflegefachkraefte duerfen: Pflegebedarf feststellen, Pflege planen und Qualitaet pruefen.",
        },
        {
          statement: "Ich kann Nightingale und Agnes Karll zeitlich einordnen.",
          statementB1: "Ich kenne Nightingale und Agnes Karll.",
          isTrue: true,
          explanation: "Nightingale 1859 (Notes on Nursing), Agnes Karll 1903 (erste Berufsorganisation), PflBG 2017.",
          explanationB1: "Nightingale: 1859. Agnes Karll: 1903. PflBG: 2017.",
        },
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Rueckblick Session 1 (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s1-22",
    phase: "s1",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverstaendnis",
    contentC1: {
      title: "Das hast du gelernt",
      body: "Session 1 ist geschafft. Du kennst jetzt die Grundlagen professioneller Pflege.",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Session 1 ist fertig! Hier ist eine Zusammenfassung.",
    },
    question: {
      fragetext: "Deine Kernerkenntnisse aus Session 1:",
      summary: {
        reflexionRueckbezug: "Erinnerst du dich an den Swipe am Anfang? Vergleiche deine Einschaetzung mit dem, was du jetzt weisst. 'Pflege ist nur Waschen' — stimmt das noch?",
        kernaussagen: [
          "Pflege ist die eigenverantwortliche Versorgung aller Altersgruppen — weit mehr als Waschen und Fuettern.",
          "Eine Profession hat eigenes Wissen, Ausbildung, Ethikkodex und Autonomie — Pflege ist auf diesem Weg.",
          "Das PflBG 2017 definiert vorbehaltene Taetigkeiten: Pflegebedarf erheben, Prozess steuern, Qualitaet sichern.",
          "Nightingale (1859) und Agnes Karll (1903) legten den Grundstein fuer die Professionalisierung.",
          "Yasemin hat gelernt: Professionelle Pflege schaut auf Probleme UND Ressourcen.",
        ],
      },
    },
  },
];
