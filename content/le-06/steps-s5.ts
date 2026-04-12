// Session 5: "Atem holen -- Pneumonie und Dekubitus" -- LE 06 Menschen in ihrer Mobilitaet unterstuetzen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB9: Pneumonieprophylaxe (I-15) + TB10: Dekubitus-Klassifikation (I-20)
// Leitfaelle: Frau Becker (79, Hueft-TEP), Herr Schmidt (56, Hemiplegie)
// Bloom: B2-B5, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S5: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE -- In-Medias-Res: Frau Becker hustet
  // =============================================================
  {
    stepId: "le06-s5-tb9-01",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "SZENE",
    tag: "krankheitslehre",
    contentC1: {
      title: "Verdacht auf Pneumonie",
      body: "Tag 5 nach der Hueft-TEP. Frau Becker hustet seit gestern, Temperatur 38,4 Grad Celsius. Der Arzt kommt zur Visite und sagt: 'Verdacht auf nosokomiale Pneumonie. Was koennte die Ursache sein?'",
      fallbezug: "Frau Becker (79 Jahre, Tag 5 nach Hueft-TEP) hat trotz Schmerzmedikation nur flach geatmet.",
      glossarBegriffe: ["Pneumonie", "Aspiration"],
    },
    contentB1: {
      title: "Frau Becker hustet",
      body: "Tag 5 nach der OP. Frau Becker hustet und hat Fieber (38,4 Grad). Der Arzt sagt: 'Vielleicht eine Lungenentzuendung.' Was koennte der Grund sein?",
      fallbezug: "Frau Becker (79 Jahre) hat nach der OP nur flach geatmet.",
    },
    question: {
      fragetext: "Was koennte die Ursache fuer Frau Beckers Pneumonie sein?",
      patientName: "Arzt",
      dialogPhases: [
        {
          context: "Der Arzt schaut dich an: 'Sie betreuen Frau Becker. Was koennten die Ursachen fuer eine nosokomiale Pneumonie bei dieser Patientin sein?'",
          contextB1: "Der Arzt fragt dich: 'Warum hat Frau Becker vielleicht eine Lungenentzuendung bekommen?'",
          speaker: "Arzt",
          options: [
            {
              text: "Frau Becker lag nach der OP viel im Bett. Durch die Schmerzen hat sie nur flach geatmet -- das Sekret konnte nicht abgehustet werden und Keime haben sich vermehrt.",
              textB1: "Frau Becker lag viel im Bett. Sie hatte Schmerzen und hat nur flach geatmet. Das Sekret blieb in der Lunge.",
              patientResponse: "Genau richtig. Immobilitaet und Schonatmung sind die Hauptursachen bei postoperativen Patienten. Wir haetten frueher intensiver Pneumonieprophylaxe betreiben muessen.",
              patientResponseB1: "Richtig! Wenig Bewegung und flache Atmung sind die Hauptgruende. Wir haetten mehr Atemuebungen machen muessen.",
              score: 3,
              feedback: "Exzellent! Du erkennst die Kausalkette: Immobilitaet und OP-Schmerz fuehren zu Schonatmung, Sekretstau und Keimvermehrung -- die klassische Entstehung einer nosokomialen Pneumonie.",
              feedbackB1: "Sehr gut! Du verstehst: Wenig Bewegung und Schmerzen fuehren zu flacher Atmung. Dann staut sich Sekret und Keime wachsen.",
            },
            {
              text: "Sie hat sich vermutlich bei einem anderen Patienten angesteckt -- eine Erkaeltung die sich verschlimmert hat.",
              textB1: "Vielleicht hat sie sich bei einem anderen Patienten angesteckt.",
              patientResponse: "Das waere eine ambulant erworbene Pneumonie. Aber bei einer Patientin die seit 5 Tagen postoperativ liegt, denken wir zuerst an Immobilitaet und Schonatmung als Ursache.",
              patientResponseB1: "Eine Ansteckung ist moeglich, aber bei Frau Becker ist die Ursache eher: Sie lag viel im Bett und hat flach geatmet.",
              score: 1,
              feedback: "Ansteckung ist eine moegliche Ursache, aber bei postoperativen Patienten liegt die Hauptursache in Immobilitaet und Schonatmung. Denke an die Risikofaktoren: Bettlaegerigkeit, Schmerzen, flache Atmung.",
              feedbackB1: "Ansteckung ist moeglich. Aber bei Frau Becker ist der Hauptgrund: Sie lag im Bett und hat wegen Schmerzen nur flach geatmet.",
            },
            {
              text: "Vielleicht eine allergische Reaktion auf die Narkose oder Medikamente?",
              textB1: "Vielleicht eine Allergie gegen die Medikamente?",
              patientResponse: "Allergische Reaktionen zeigen sich anders -- eher als Hautausschlag oder Atemnot. Husten und Fieber bei einer postoperativen Patientin sprechen fuer eine Infektion durch Sekretstau.",
              patientResponseB1: "Allergie zeigt sich anders -- eher Hautausschlag. Husten und Fieber kommen hier eher von Sekret in der Lunge.",
              score: 1,
              feedback: "Eine allergische Reaktion ist unwahrscheinlich bei Husten und Fieber am 5. Tag. Denke an die klassischen Pneumonie-Risikofaktoren: Bettlaegerigkeit, Schonatmung und Sekretstau.",
              feedbackB1: "Allergie passt nicht zu Husten und Fieber am Tag 5. Der Grund ist eher: zu wenig Bewegung und flache Atmung.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ERKLAERUNG -- Pneumonie-Risikofaktoren
  // =============================================================
  {
    stepId: "le06-s5-tb9-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "analogy",
    contentC1: {
      title: "Warum entsteht eine Pneumonie bei Immobilitaet?",
      body: "Stell dir die Lunge vor wie einen See: Wenn das Wasser steht, wird es trueb und Algen wachsen. Genauso ist es mit der Lunge -- ohne Bewegung staut sich Sekret und Keime vermehren sich.\n\nPneumonie-Risikofaktoren:\n- Bettlaegerigkeit und Immobilitaet\n- Schmerzen (fuehren zu Schonatmung -- der Patient atmet nur flach)\n- Bewusstseinstoerung (Husten-Reflex abgeschwaecht)\n- Schluckstoerung (Aspiration -- Nahrung gelangt in die Lunge)\n\nBei Frau Becker: OP-Schmerz an der Huefte fuehrt zu flacher Atmung. Das Sekret kann nicht abgehustet werden. Keime vermehren sich im stehenden Sekret. Nach 5 Tagen: Pneumonie.",
      glossarBegriffe: ["Pneumonie", "Aspiration"],
    },
    contentB1: {
      title: "Warum bekommt man eine Lungenentzuendung im Bett?",
      body: "Die Lunge ist wie ein See: Ohne Bewegung wird sie 'trueb'. Sekret staut sich. Keime wachsen.\n\nRisiken fuer eine Lungenentzuendung:\n- Lange im Bett liegen\n- Schmerzen (man atmet nur flach)\n- Bewusstlosigkeit (man kann nicht husten)\n- Schluckprobleme (Essen kommt in die Lunge)\n\nBei Frau Becker: Sie hatte Schmerzen nach der OP. Sie hat nur flach geatmet. Das Sekret blieb in der Lunge. Nach 5 Tagen: Lungenentzuendung.",
    },
  },

  // =============================================================
  // Step 3: ERKLAERUNG -- Pneumonieprophylaxe-Massnahmen (Reveal)
  // =============================================================
  {
    stepId: "le06-s5-tb9-03",
    phase: "s5",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "5 Massnahmen der Pneumonieprophylaxe",
      body: "Decke die 5 wichtigsten Massnahmen auf, um eine Pneumonie zu verhindern.",
    },
    contentB1: {
      title: "5 Massnahmen gegen Lungenentzuendung",
      body: "Decke die 5 Massnahmen auf. So verhinderst du eine Lungenentzuendung.",
    },
    question: {
      fragetext: "Decke die 5 Pneumonieprophylaxe-Massnahmen auf.",
      reveal: {
        instruction: "Tippe auf die Karten um die Massnahmen aufzudecken.",
        revealMode: "free",
        cards: [
          {
            id: "r1",
            label: "Massnahme 1",
            content: "Oberkoerperhochlage: Oberkörper 30-45 Grad hochlagern. Das Zwerchfell kann sich besser bewegen und die Lunge wird besser belueftet.",
            contentB1: "Oberkoerper hoch lagern (30-45 Grad). So kann der Patient besser atmen.",
          },
          {
            id: "r2",
            label: "Massnahme 2",
            content: "Atemuebungen: Kontaktatmung (Hand auf Bauch/Rippen, bewusst dorthin atmen) und Lippenbremse (durch fast geschlossene Lippen ausatmen -- haelt Bronchien offen).",
            contentB1: "Atemuebungen: Hand auf den Bauch legen und tief einatmen. Durch fast geschlossene Lippen ausatmen.",
          },
          {
            id: "r3",
            label: "Massnahme 3",
            content: "Inhalation: Feuchtigkeit loest zaehes Sekret in den Atemwegen. Kann mit Kochsalzloesung oder Medikamenten durchgefuehrt werden.",
            contentB1: "Inhalieren: Feuchtigkeit loest das Sekret in der Lunge. Mit Kochsalz oder Medikamenten.",
          },
          {
            id: "r4",
            label: "Massnahme 4",
            content: "Fruehmobilisation: Aufstehen und Bewegung vertieft die Atmung automatisch. Beste Prophylaxe ueberhaupt -- wirkt gleichzeitig gegen Thrombose, Kontraktur und Dekubitus!",
            contentB1: "Frueh aufstehen und bewegen! Das ist die beste Vorbeugung. Hilft auch gegen Thrombose und Dekubitus.",
          },
          {
            id: "r5",
            label: "Massnahme 5",
            content: "Mundpflege: Keime im Mund koennen in die Lunge gelangen (Aspiration). Regelmaessige Mundpflege reduziert die Keimbelastung.",
            contentB1: "Mundpflege: Keime im Mund koennen in die Lunge kommen. Deshalb: regelmaessig Mund pflegen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 4: CHECKPOINT -- MC Pneumonieprophylaxe
  // =============================================================
  {
    stepId: "le06-s5-tb9-04",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Wichtigste Pneumonieprophylaxe",
      body: "Frau Becker liegt seit 5 Tagen nach der Hueft-TEP im Bett und hat jetzt eine Pneumonie entwickelt.",
    },
    contentB1: {
      title: "Beste Vorbeugung",
      body: "Frau Becker liegt seit 5 Tagen im Bett und hat jetzt eine Lungenentzuendung.",
    },
    question: {
      fragetext: "Welche Massnahme ist bei Frau Becker die wichtigste Pneumonieprophylaxe?",
      optionen: [
        {
          text: "Fruehmobilisation",
          isCorrect: true,
          explanation: "Richtig! Fruehmobilisation ist die wirksamste Pneumonieprophylaxe. Sie vertieft die Atmung automatisch und wirkt gleichzeitig gegen Thrombose, Kontraktur und Dekubitus. Frau Becker haette frueher mobilisiert werden muessen.",
          explanationB1: "Richtig! Frueh aufstehen ist am wichtigsten. Es hilft der Lunge und schuetzt auch vor Thrombose und Dekubitus.",
        },
        {
          text: "Antibiotika",
          isCorrect: false,
          explanation: "Antibiotika behandeln eine bestehende Pneumonie, aber sie verhindern sie nicht. Prophylaxe bedeutet Vorbeugung -- also Massnahmen BEVOR die Krankheit entsteht.",
          explanationB1: "Antibiotika helfen erst wenn man schon krank ist. Vorbeugung heisst: etwas tun BEVOR die Krankheit kommt.",
        },
        {
          text: "Bettruhe",
          isCorrect: false,
          explanation: "Bettruhe ist genau das Gegenteil der richtigen Antwort! Immobilitaet ist der Hauptrisikofaktor fuer Pneumonie. Bewegung und Mobilisation sind die beste Prophylaxe.",
          explanationB1: "Nein! Im Bett liegen ist der Hauptgrund fuer eine Lungenentzuendung. Bewegung ist die beste Vorbeugung.",
        },
        {
          text: "Hustensaft",
          isCorrect: false,
          explanation: "Hustensaft kann Symptome lindern, aber er ist keine kausale Prophylaxe. Die Ursache -- Immobilitaet und Schonatmung -- muss bekaempft werden.",
          explanationB1: "Hustensaft hilft nur gegen Husten-Beschwerden. Die Ursache (wenig Bewegung) wird dadurch nicht behoben.",
        },
      ],
    },
  },

  // =============================================================
  // Step 5: ANDERS ERKLAERT -- Flowchart Pneumonie-Entstehung
  // =============================================================
  {
    stepId: "le06-s5-tb9-05",
    phase: "s5",
    stepType: "diagram",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Kausalkette: Von Immobilitaet zur Pneumonie",
      body: "Dieser Flowchart zeigt wie eine Pneumonie Schritt fuer Schritt entsteht -- und wo unsere Prophylaxe-Massnahmen eingreifen.",
    },
    contentB1: {
      title: "Wie entsteht eine Lungenentzuendung?",
      body: "Schau dir den Ablauf an. An jeder Stelle koennen wir etwas dagegen tun.",
    },
    question: {
      fragetext: "Verfolge die Kausalkette und erkenne die Interventionspunkte.",
      diagram: {
        diagramType: "flowchart",
        instruction: "Verfolge den Weg von Immobilitaet bis Pneumonie. Die gruenen Knoten zeigen wo Prophylaxe eingreift.",
        nodes: [
          { id: "n1", label: "Immobilitaet / OP-Schmerz" },
          { id: "n2", label: "Schonatmung (flache Atmung)" },
          { id: "n3", label: "Sekretstau in den Bronchien" },
          { id: "n4", label: "Keimvermehrung" },
          { id: "n5", label: "Pneumonie" },
          { id: "p1", label: "Fruehmobilisation", highlight: true },
          { id: "p2", label: "Atemuebungen / Lippenbremse", highlight: true },
          { id: "p3", label: "Inhalation", highlight: true },
          { id: "p4", label: "Mundpflege", highlight: true },
        ],
        edges: [
          { from: "n1", to: "n2", label: "fuehrt zu" },
          { from: "n2", to: "n3", label: "fuehrt zu" },
          { from: "n3", to: "n4", label: "fuehrt zu" },
          { from: "n4", to: "n5", label: "fuehrt zu" },
          { from: "p1", to: "n1", label: "unterbricht" },
          { from: "p2", to: "n2", label: "unterbricht" },
          { from: "p3", to: "n3", label: "loest" },
          { from: "p4", to: "n4", label: "reduziert" },
        ],
        interactive: false,
      },
    },
  },

  // =============================================================
  // Step 6: ANWENDUNG -- Errorspot Pneumonieprophylaxe
  // =============================================================
  {
    stepId: "le06-s5-tb9-06",
    phase: "s5",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fehler in der Pflegeplanung finden",
      body: "In diesem Pflegebericht sind 3 Fehler versteckt. Finde sie!",
    },
    contentB1: {
      title: "Finde 3 Fehler",
      body: "In diesem Text sind 3 Fehler. Tippe auf die falschen Stellen.",
    },
    question: {
      fragetext: "Finde die 3 Fehler in der Pflegeplanung.",
      errorspot: {
        instruction: "Markiere die 3 fehlerhaften Textstellen.",
        text: "Bei Frau Becker lagern wir den Oberkoerper flach, verzichten auf Atemuebungen wegen Schmerzen und warten auf Antibiotika bevor wir weitere Massnahmen ergreifen.",
        errors: [
          {
            start: 38,
            end: 43,
            correction: "hoch (30-45 Grad)",
            explanation: "Oberkoerperhochlage (30-45 Grad) ist eine zentrale Pneumonieprophylaxe-Massnahme. Flachlage verschlechtert die Belueftung der Lunge.",
            explanationB1: "Den Oberkoerper hoch lagern! Nicht flach. So kann der Patient besser atmen.",
          },
          {
            start: 45,
            end: 89,
            correction: "fuehren Atemuebungen trotz Schmerzen durch (Schmerzmedikation vorher)",
            explanation: "Atemuebungen sind gerade BEI Schonatmung besonders wichtig. Vorher Schmerzmedikation geben, dann Kontaktatmung und Lippenbremse anleiten.",
            explanationB1: "Atemuebungen sind wichtig! Erst Schmerzmittel geben, dann die Uebungen machen.",
          },
          {
            start: 94,
            end: 161,
            correction: "beginnen sofort mit Pneumonieprophylaxe (Mobilisation, Atemuebungen, Mundpflege)",
            explanation: "Auf Antibiotika warten ist falsch. Prophylaxe muss sofort beginnen -- Mobilisation, Atemuebungen und Mundpflege wirken praeventiv.",
            explanationB1: "Nicht warten! Sofort anfangen: Bewegen, Atemuebungen, Mundpflege. Antibiotika kommen zusaetzlich wenn noetig.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: PRAXIS_DIALOG -- Kontaktatmung anleiten
  // =============================================================
  {
    stepId: "le06-s5-tb9-07",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "Kontaktatmung demonstrieren",
      body: "Die Praxisanleiterin will sehen ob du die Kontaktatmung bei Frau Becker anleiten kannst.",
    },
    contentB1: {
      title: "Atemuebung zeigen",
      body: "Die Praxisanleiterin will sehen: Kannst du Frau Becker bei der Atemuebung helfen?",
    },
    question: {
      fragetext: "Wie leitest du die Kontaktatmung an?",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Die Praxisanleiterin sagt: 'Zeig mir eine Kontaktatmung bei Frau Becker. Was machst du?'",
          contextB1: "Die Praxisanleiterin fragt: 'Wie machst du die Atemuebung mit Frau Becker?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich lege meine Hand auf Frau Beckers Bauch oder seitliche Rippen. Dann sage ich: 'Atmen Sie tief ein und spueren Sie wie sich meine Hand hebt. Beim Ausatmen atmen Sie durch fast geschlossene Lippen aus -- das ist die Lippenbremse.'",
              textB1: "Ich lege die Hand auf den Bauch. Ich sage: 'Atmen Sie tief ein. Spueren Sie die Hand. Beim Ausatmen: Lippen fast schliessen und langsam ausatmen.'",
              patientResponse: "Perfekt! Hand auflegen, bewusst dorthin atmen lassen und die Lippenbremse kombinieren. Das oeffnet die Bronchien und loest Sekret.",
              patientResponseB1: "Super! Hand auflegen, tief einatmen, langsam durch die Lippen ausatmen. Das hilft der Lunge.",
              score: 3,
              feedback: "Exzellent! Du kombinierst Kontaktatmung (Hand auf Bauch/Rippen als taktiler Reiz) mit der Lippenbremse (haelt Bronchien offen). Das ist die korrekte Technik.",
              feedbackB1: "Sehr gut! Du machst alles richtig: Hand auflegen, tief einatmen lassen, durch die Lippen ausatmen.",
            },
            {
              text: "Ich sage Frau Becker dass sie tief einatmen soll. So tief wie moeglich. Dann schnell ausatmen.",
              textB1: "Ich sage: 'Atmen Sie ganz tief ein. Dann schnell ausatmen.'",
              patientResponse: "Tief einatmen ist richtig, aber die Kontaktatmung braucht eine Hand auf dem Koerper als Orientierung. Und das Ausatmen soll langsam sein -- durch die Lippenbremse.",
              patientResponseB1: "Tief einatmen ist gut. Aber du brauchst die Hand auf dem Bauch. Und langsam ausatmen, nicht schnell!",
              score: 2,
              feedback: "Guter Ansatz! Aber die Kontaktatmung braucht den taktilen Reiz -- deine Hand auf dem Bauch oder den Rippen. Und das Ausatmen erfolgt langsam durch die Lippenbremse, nicht schnell.",
              feedbackB1: "Fast richtig! Vergiss nicht: Hand auf den Bauch legen. Und langsam ausatmen durch die Lippen.",
            },
            {
              text: "Ich hole erstmal das Inhalationsgeraet -- das ist doch das Wichtigste bei Pneumonieprophylaxe.",
              textB1: "Ich hole das Inhalationsgeraet. Das ist am wichtigsten.",
              patientResponse: "Inhalation ist eine Massnahme, aber ich habe nach Kontaktatmung gefragt. Das ist eine andere Technik die du ohne Geraet durchfuehren kannst -- Hand auflegen und bewusst atmen.",
              patientResponseB1: "Inhalieren ist gut, aber die Frage war: Kontaktatmung. Das geht ohne Geraet. Hand auf den Bauch und tief atmen.",
              score: 1,
              feedback: "Inhalation ist eine wichtige Massnahme, aber nicht identisch mit Kontaktatmung. Bei der Kontaktatmung legst du deine Hand auf Bauch oder Rippen und der Patient atmet bewusst gegen deine Hand.",
              feedbackB1: "Inhalieren ist etwas anderes. Kontaktatmung: Hand auf den Bauch legen, der Patient atmet tief ein.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 8: SNACK -- Estimation nosokomiale Pneumonie
  // =============================================================
  {
    stepId: "le06-s5-sn-01",
    phase: "s5",
    stepType: "estimation",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Wie toedlich ist die nosokomiale Pneumonie?",
      body: "Die nosokomiale Pneumonie (im Krankenhaus erworbene Lungenentzuendung) ist eine der gefaehrlichsten Krankenhausinfektionen. Schaetze die jaehrliche Todesrate in Deutschland.",
    },
    contentB1: {
      title: "Wie gefaehrlich ist eine Lungenentzuendung im Krankenhaus?",
      body: "Viele Menschen sterben an einer Lungenentzuendung die sie im Krankenhaus bekommen. Wie viele pro Jahr in Deutschland?",
    },
    question: {
      fragetext: "Wie viele Menschen sterben jaehrlich in Deutschland an nosokomialer Pneumonie?",
      estimation: {
        instruction: "Schaetze die Anzahl der jaehrlichen Todesfaelle durch nosokomiale Pneumonie in Deutschland.",
        unit: "Todesfaelle pro Jahr",
        correctValue: 12000,
        tolerance: 30,
        funFact: "Die nosokomiale Pneumonie ist die haeufigste toedliche Krankenhausinfektion in Deutschland -- noch vor Sepsis durch Katheterinfektionen.",
        explanation: "Jaehrlich sterben in Deutschland ca. 10.000-15.000 Menschen an einer nosokomialen Pneumonie. Das zeigt wie wichtig konsequente Pneumonieprophylaxe ist.",
        explanationB1: "Etwa 10.000 bis 15.000 Menschen sterben jedes Jahr in Deutschland an einer Lungenentzuendung die sie im Krankenhaus bekommen. Deshalb ist Vorbeugung so wichtig!",
      },
    },
  },

  // =============================================================
  // Step 9: SZENE -- Szenenwechsel: Anti-Dekubitus-Matratze
  // =============================================================
  {
    stepId: "le06-s5-tb10-01",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "SZENE",
    tag: "pflege",
    displayFormat: "scenario",
    contentC1: {
      title: "Nachtdienst -- Die Matratzen-Frage",
      body: "Nachtdienst, 3 Uhr morgens. Du gehst bei Frau Becker vorbei. Deine Kollegin sagt: 'Die hab ich nicht umgelagert -- die hat doch eine Anti-Dekubitus-Matratze. Das reicht.' Du bist unsicher: Stimmt das?",
      fallbezug: "Frau Becker liegt seit Stunden in derselben Position. Sie hat eine Wechseldruckmatratze.",
    },
    contentB1: {
      title: "Nachtdienst -- Reicht die Matratze?",
      body: "Es ist 3 Uhr nachts. Deine Kollegin sagt: 'Frau Becker hat eine spezielle Matratze. Ich muss sie nicht umlagern.' Stimmt das wirklich?",
      fallbezug: "Frau Becker liegt seit Stunden in der gleichen Position.",
    },
  },

  // =============================================================
  // Step 10: ERKLAERUNG -- Dekubitus-Klassifikation
  // =============================================================
  {
    stepId: "le06-s5-tb10-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "stepbystep",
    contentC1: {
      title: "Dekubitus-Klassifikation nach EPUAP/NPUAP",
      body: "Ein Dekubitus entsteht wenn Gewebe zu lange unter Druck steht. Die Blutversorgung wird unterbrochen und das Gewebe stirbt ab. Es gibt 4 Schweregrade:\n\n1. Grad I -- Nicht wegdrueckbare Roetung bei intakter Haut. Fingertest: Drueckst du auf die Roetung, bleibt sie bestehen (verschwindet NICHT).\n\n2. Grad II -- Teilzerstoerung der Haut. Blasenbildung oder ein flaches Geschwuer. Die Dermis (zweite Hautschicht) ist betroffen.\n\n3. Grad III -- Verlust aller Hautschichten. Subkutanes Fettgewebe ist sichtbar. Aber: Kein Knochen, keine Sehne, kein Muskel sichtbar.\n\n4. Grad IV -- Vollstaendiger Gewebeverlust. Knochen, Sehne oder Muskel liegen frei. Die schwerste Form.",
      glossarBegriffe: ["Dekubitus", "Scherkraft"],
    },
    contentB1: {
      title: "Dekubitus -- 4 Stufen",
      body: "Ein Dekubitus (Druckgeschwuer) entsteht wenn die Haut zu lange gedrueckt wird. Es gibt 4 Stufen:\n\n1. Stufe 1: Die Haut ist rot. Wenn du drueckst, bleibt die Roetung (wird nicht weiss).\n\n2. Stufe 2: Eine Blase entsteht oder die Haut ist offen (aber nur oben).\n\n3. Stufe 3: Die Haut ist ganz kaputt. Man sieht Fettgewebe darunter. Aber KEIN Knochen.\n\n4. Stufe 4: Alles ist kaputt. Man sieht Knochen oder Sehnen. Das ist sehr schlimm.",
    },
  },

  // =============================================================
  // Step 11: CHECKPOINT -- Anticipation-MC Anti-Dekubitus-Matratze
  // =============================================================
  {
    stepId: "le06-s5-tb10-03",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430", "Q1 S.346"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Warum reicht die Matratze nicht?",
      body: "Bevor du die Erklaerung siehst -- rate: Warum hilft eine Anti-Dekubitus-Matratze allein NICHT gegen Dekubitus?",
    },
    contentB1: {
      title: "Warum reicht die Matratze nicht?",
      body: "Rate mal: Warum hilft die spezielle Matratze allein NICHT?",
    },
    question: {
      fragetext: "Was glaubst du -- warum hilft eine Anti-Dekubitus-Matratze allein NICHT gegen Dekubitus?",
      mcVariant: "anticipation",
      optionen: [
        {
          text: "Weiche Matratzen erschweren die Eigenbewegung -- der Patient sinkt ein und kann sich schlechter drehen",
          isCorrect: true,
          explanation: "Richtig! Anti-Dekubitus-Matratzen reduzieren Druck, aber der Patient sinkt ein und kann sich schwerer bewegen. Der DNQP fordert weiterhin Positionswechsel. Ausserdem ist Mobilisation gleichzeitig Thrombose-, Kontraktur- und Pneumonieprophylaxe!",
          explanationB1: "Richtig! Die Matratze ist weich, aber der Patient kann sich schwerer bewegen. Er sinkt ein. Man muss ihn trotzdem umlagern!",
        },
        {
          text: "Anti-Dekubitus-Matratzen sind veraltet und funktionieren nicht",
          isCorrect: false,
          explanation: "Das stimmt nicht. Anti-Dekubitus-Matratzen funktionieren -- sie reduzieren den Druck. Aber sie ERSETZEN nicht die regelmaessige Positionsaenderung.",
          explanationB1: "Nein, die Matratzen helfen schon. Aber sie reichen allein nicht aus. Umlagern ist trotzdem noetig.",
        },
        {
          text: "Anti-Dekubitus-Matratzen sind nur fuer Grad IV geeignet",
          isCorrect: false,
          explanation: "Anti-Dekubitus-Matratzen werden praeventiv eingesetzt, nicht nur bei Grad IV. Das Problem ist ein anderes: Sie ersetzen nicht die Mobilisation und Positionierung.",
          explanationB1: "Nein, die Matratzen sind fuer alle Stufen. Aber sie reichen allein nicht.",
        },
        {
          text: "Die Matratze muss taeglich ausgetauscht werden",
          isCorrect: false,
          explanation: "Matratzen muessen nicht taeglich getauscht werden. Das Problem ist, dass sie die Eigenbewegung erschweren und regelmaessige Positionswechsel nicht ersetzen koennen.",
          explanationB1: "Nein, die Matratze muss nicht jeden Tag gewechselt werden. Aber: Umlagern ist trotzdem Pflicht.",
        },
      ],
    },
  },

  // =============================================================
  // Step 12: ERKLAERUNG -- Anti-Dekubitus-Matratze Pro/Contra
  // =============================================================
  {
    stepId: "le06-s5-tb10-04",
    phase: "s5",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430", "Q1 S.346"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "procontra",
    contentC1: {
      title: "Anti-Dekubitus-Matratze: Was sie kann und was nicht",
      body: "Pro:\n+ Reduziert den Auflagedruck auf gefaehrdete Koerperstellen\n+ Wechseldruckmatratzen veraendern den Druck automatisch\n+ Sinnvolle Ergaenzung zur Prophylaxe\n\nContra:\n- Weiche Matratzen erschweren die Eigenbewegung (Patient sinkt ein)\n- DNQP-Expertenstandard fordert weiterhin Positionswechsel\n- Kein Ersatz fuer Mobilisation\n- Mobilisation ist gleichzeitig 4 Prophylaxen: Dekubitus + Thrombose + Kontraktur + Pneumonie\n\nFazit: Die Matratze hilft, aber sie ERSETZT niemals die regelmaessige Positionierung und Mobilisation.",
      glossarBegriffe: ["Dekubitus", "Prophylaxe"],
    },
    contentB1: {
      title: "Spezialmatratze: Was sie kann und was nicht",
      body: "Vorteile:\n+ Weniger Druck auf der Haut\n+ Druck wechselt automatisch\n+ Gut als Hilfe\n\nNachteile:\n- Patient sinkt ein und kann sich schwer bewegen\n- Man muss trotzdem umlagern (so sagt die Regel)\n- Bewegung hilft auch gegen Thrombose, Kontraktur und Lungenentzuendung\n\nFazit: Die Matratze hilft, aber sie reicht NICHT allein. Umlagern und Bewegen bleibt Pflicht.",
    },
  },

  // =============================================================
  // Step 13: ANWENDUNG -- Hotspot Praedilektionsstellen Rueckenlage
  // =============================================================
  {
    stepId: "le06-s5-tb10-05",
    phase: "s5",
    stepType: "hotspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    contentC1: {
      title: "Dekubitus-Praedilektionsstellen -- Rueckenlage",
      body: "Markiere die 5 gefaehrdeten Stellen bei einer Person die auf dem Ruecken liegt.",
    },
    contentB1: {
      title: "Wo entsteht Dekubitus? -- Rueckenlage",
      body: "Markiere die 5 Stellen wo ein Dekubitus entstehen kann wenn der Patient auf dem Ruecken liegt.",
    },
    question: {
      fragetext: "Markiere die 5 Dekubitus-Praedilektionsstellen in Rueckenlage.",
      hotspot: {
        imageUrl: "/images/learn/le06-rueckenlage.svg",
        imageAlt: "Menschliche Figur in Rueckenlage mit markierbaren Koerperstellen",
        instruction: "Tippe auf die 5 Stellen wo ein Dekubitus bei Rueckenlage am haeufigsten entsteht.",
        zones: [
          { id: "z1", x: 50, y: 5, radius: 8, label: "Hinterhaupt" },
          { id: "z2", x: 50, y: 25, radius: 10, label: "Schulterblätter" },
          { id: "z3", x: 30, y: 45, radius: 7, label: "Ellbogen" },
          { id: "z4", x: 50, y: 60, radius: 10, label: "Kreuzbein / Steissbein" },
          { id: "z5", x: 50, y: 95, radius: 8, label: "Fersen" },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: ERKLAERUNG -- Flipcards Dekubitus-Grade
  // =============================================================
  {
    stepId: "le06-s5-tb10-06",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Dekubitus-Grade im Detail",
      body: "Drehe die Karten um: Vorne der Grad, hinten das klinische Bild und die Pflegemassnahme.",
    },
    contentB1: {
      title: "Dekubitus-Stufen lernen",
      body: "Drehe die Karten um. Vorne: die Stufe. Hinten: Was man sieht und was man tut.",
    },
    question: {
      fragetext: "Lerne die 4 Dekubitus-Grade mit ihren klinischen Zeichen.",
      flipcard: {
        instruction: "Tippe auf eine Karte um sie umzudrehen.",
        cards: [
          {
            front: "Grad I",
            back: "Nicht wegdrueckbare Roetung bei intakter Haut. Fingertest: Roetung bleibt bei Druck bestehen. Massnahme: Sofort entlasten, Positionswechsel, Hautpflege.",
            backB1: "Die Haut ist rot. Wenn du drueckst, bleibt es rot. Was tun: Sofort die Stelle entlasten, Position wechseln.",
          },
          {
            front: "Grad II",
            back: "Teilzerstoerung der Haut: Blasenbildung oder flaches Geschwuer. Die Dermis ist betroffen. Massnahme: Sterile Wundversorgung, Druckentlastung, Arzt informieren.",
            backB1: "Blase auf der Haut oder flache Wunde. Was tun: Wunde steril versorgen, Druck wegnehmen, Arzt Bescheid sagen.",
          },
          {
            front: "Grad III",
            back: "Verlust aller Hautschichten. Subkutanes Fettgewebe sichtbar. Aber: Kein Knochen/Sehne/Muskel freiliegend. Massnahme: Wundmanagement, ggf. chirurgisch.",
            backB1: "Alle Hautschichten sind kaputt. Man sieht Fett. Aber kein Knochen. Was tun: Wundpflege vom Experten, evtl. Operation.",
          },
          {
            front: "Grad IV",
            back: "Vollstaendiger Gewebeverlust. Knochen, Sehne oder Muskel liegen frei. Schwerste Form. Massnahme: Interdisziplinaere Versorgung, plastische Chirurgie moeglich.",
            backB1: "Alles kaputt. Man sieht Knochen oder Sehnen. Sehr schlimm. Was tun: Mehrere Aerzte und Pflegekraefte kuemmern sich gemeinsam.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG -- Matching Dekubitus-Grade
  // =============================================================
  {
    stepId: "le06-s5-tb10-07",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Dekubitus-Grade zuordnen",
      body: "Ordne jedem Dekubitus-Grad das passende klinische Zeichen zu.",
    },
    contentB1: {
      title: "Dekubitus-Stufen zuordnen",
      body: "Ordne jede Stufe dem richtigen Zeichen zu.",
    },
    question: {
      fragetext: "Ordne die klinischen Zeichen den richtigen Dekubitus-Graden zu.",
      matchingPairs: [
        { left: "Grad I", right: "Nicht wegdrueckbare Roetung" },
        { left: "Grad II", right: "Blasenbildung oder flaches Geschwuer" },
        { left: "Grad III", right: "Fettgewebe sichtbar, kein Knochen" },
        { left: "Grad IV", right: "Knochen oder Sehne freiliegend" },
        { left: "Fingertest", right: "Diagnostik bei Grad I" },
      ],
    },
  },

  // =============================================================
  // Step 16: ANWENDUNG -- ChatSim Kollegengespraech Matratze
  // =============================================================
  {
    stepId: "le06-s5-tb10-08",
    phase: "s5",
    stepType: "chatSim",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4", "Q2 S.424-430", "Q1 S.346"],
    track: "vertiefung",
    modus: "praxis-sim",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Kollegin ueberzeugen: Matratze reicht nicht",
      body: "Deine Kollegin sagt: 'Anti-Dekubitus-Matratze reicht, ich muss nicht umlagern.' Erklaere ihr fachlich und respektvoll warum das falsch ist.",
    },
    contentB1: {
      title: "Der Kollegin erklaeren: Umlagern ist Pflicht",
      body: "Deine Kollegin sagt: 'Die Matratze reicht.' Erklaere ihr warum man trotzdem umlagern muss.",
    },
    question: {
      fragetext: "Erklaere deiner Kollegin fachlich warum die Anti-Dekubitus-Matratze allein nicht reicht.",
      chatSim: {
        patientName: "Kollegin Petra",
        situation: "Nachtdienst, 3 Uhr. Kollegin Petra hat Frau Becker nicht umgelagert weil sie eine Anti-Dekubitus-Matratze hat. Du erklaerst ihr warum das nicht ausreicht.",
        situationB1: "Nachtdienst. Deine Kollegin hat Frau Becker nicht umgelagert. Sie sagt: Die Matratze reicht. Erklaere ihr warum nicht.",
        systemPrompt: "Du bist Petra, eine erfahrene Pflegekraft im Nachtdienst. Du bist muede und genervt. Du glaubst dass Anti-Dekubitus-Matratzen ausreichen und man nicht umlagern muss. Lass dich mit guten fachlichen Argumenten ueberzeugen. Reagiere zunachst abweisend ('Ich mach das seit 15 Jahren so'), dann nachdenklich wenn gute Argumente kommen. Akzeptiere insbesondere das Argument dass Mobilisation gleichzeitig 4 Prophylaxen ist.",
        maxTurns: 5,
        evaluationCriteria: [
          "Nennt dass weiche Matratzen die Eigenbewegung erschweren",
          "Verweist auf DNQP-Expertenstandard",
          "Erklaert dass Mobilisation gleichzeitig Dekubitus-, Thrombose-, Kontraktur- und Pneumonieprophylaxe ist",
          "Bleibt respektvoll und kollegial",
          "Bietet Hilfe an statt zu belehren",
        ],
      },
    },
  },

  // =============================================================
  // Step 17: ANWENDUNG -- LabelImage Praedilektionsstellen Seitenlage
  // =============================================================
  {
    stepId: "le06-s5-tb10-09",
    phase: "s5",
    stepType: "labelImage",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    contentC1: {
      title: "Praedilektionsstellen in Seitenlage beschriften",
      body: "Beschrifte die gefaehrdeten Stellen bei einer Person die auf der Seite liegt.",
    },
    contentB1: {
      title: "Wo entsteht Dekubitus in Seitenlage?",
      body: "Beschrifte die 5 Stellen die gefaehrdet sind wenn der Patient auf der Seite liegt.",
    },
    question: {
      fragetext: "Beschrifte die 5 Dekubitus-Praedilektionsstellen in Seitenlage.",
      labelImage: {
        imageUrl: "/images/learn/le06-seitenlage.svg",
        imageAlt: "Menschliche Figur in Seitenlage mit Beschriftungspunkten",
        instruction: "Ziehe die Beschriftungen an die richtigen Stellen.",
        mode: "drag",
        labels: [
          { id: "l1", correct: "Ohr", position: { x: 50, y: 5 } },
          { id: "l2", correct: "Schulter", position: { x: 45, y: 20 } },
          { id: "l3", correct: "Trochanter major", position: { x: 50, y: 50 } },
          { id: "l4", correct: "Knie (Innenseite)", position: { x: 55, y: 70 } },
          { id: "l5", correct: "Aussenknoechel", position: { x: 50, y: 90 } },
        ],
      },
    },
  },

  // =============================================================
  // Step 18: PATIENTEN_PERSPEKTIVE -- Frau Becker ueber 30-Grad-Lage
  // =============================================================
  {
    stepId: "le06-s5-tb10-10",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q1 S.349-351", "Q4"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    tag: "pflege",
    displayFormat: "quote",
    contentC1: {
      title: "Frau Beckers Frage",
      body: "'Ich liege so unbequem auf der Seite. Muss das wirklich sein? Koennen Sie mich nicht einfach auf den Ruecken legen?'\n\nFrau Becker versteht nicht warum sie in der 30-Grad-Seitenlage liegt. Du erklaerst: 'Die 30-Grad-Seitenlage entlastet gezielt das Kreuzbein UND den Trochanter -- das sind die Stellen die bei Rueckenlage am meisten Druck bekommen. So verhindern wir ein Druckgeschwuer. Ich weiss es ist unbequem, aber es schuetzt Ihre Haut.'",
      fallbezug: "Frau Becker liegt in der 30-Grad-Seitenlage zur Dekubitusprophylaxe.",
    },
    contentB1: {
      title: "Frau Becker fragt: Warum auf der Seite?",
      body: "'Warum muss ich auf der Seite liegen? Das ist unbequem!'\n\nDu erklaerst: 'Wenn Sie auf dem Ruecken liegen, ist viel Druck auf dem Steissbein. In der Seitenlage (30 Grad) wird der Druck verteilt. So bekommt Ihre Haut keinen Schaden. Ich weiss es ist unangenehm. Aber es schuetzt Sie.'",
      fallbezug: "Frau Becker liegt seitlich um die Haut zu schuetzen.",
    },
  },

  // =============================================================
  // Step 19: ANWENDUNG -- Freetext OQ3 Anti-Dekubitus-Matratze
  // =============================================================
  {
    stepId: "le06-s5-tb10-11",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["Q4", "Q2 S.424-430", "Q1 S.346"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Bewerte die Aussage",
      body: "Ein Kollege sagt: 'Anti-Dekubitus-Matratzen sind so gut, dass man nicht mehr umlagern muss.' Stimmt das? Bewerte die Aussage fachlich und begruende deine Antwort.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Ein Kollege sagt: 'Die spezielle Matratze ist so gut -- man muss nicht mehr umlagern.' Stimmt das? Schreibe deine Meinung und begruende.",
    },
    question: {
      fragetext: "Ein Kollege sagt: 'Anti-Dekubitus-Matratzen sind so gut, dass man nicht mehr umlagern muss.' Stimmt das? Bewerte die Aussage.",
      musterantwort: "Die Aussage ist falsch und gefaehrlich. Anti-Dekubitus-Matratzen reduzieren den Druck auf gefaehrdete Koerperstellen, aber sie ERSETZEN nicht die Positionierung. Weiche Matratzen erschweren sogar die Eigenbewegung des Patienten weil er einsinkt. Der DNQP-Expertenstandard fordert weiterhin regelmaessige Druckentlastung. Ausserdem ist Mobilisation nicht nur Dekubitusprophylaxe, sondern gleichzeitig Thrombose-, Kontraktur- und Pneumonieprophylaxe.",
      bewertungskriterien: [
        "Erkennt die Aussage als falsch und begruendet es",
        "Nennt dass weiche Matratzen die Eigenbewegung erschweren",
        "Verweist auf DNQP-Expertenstandard",
        "Argumentiert ueber Dekubitus hinaus (Thrombose, Kontraktur, Pneumonie)",
      ],
      satzanfaengeB1: [
        "Das stimmt nicht, weil ...",
        "Die Matratze hilft, aber ...",
        "Man muss trotzdem umlagern, weil ...",
        "Bewegung schuetzt auch vor ...",
      ],
    },
  },

  // =============================================================
  // Step 20: INTERLEAVING -- MC aus LE-09
  // =============================================================
  {
    stepId: "le06-s5-sn-02",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Interleaving LE-09"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Interleaving: Immobilitaet und Ausscheidung",
      body: "Herr Schmidt liegt viel im Bett. Neben den bekannten Risiken (Thrombose, Kontraktur, Dekubitus, Pneumonie) gibt es noch ein weiteres Problem.",
    },
    contentB1: {
      title: "Noch ein Problem durch Bettlaegerigkeit",
      body: "Herr Schmidt liegt viel im Bett. Welches Ausscheidungsproblem kann dadurch entstehen?",
    },
    question: {
      fragetext: "Welches Ausscheidungsproblem kann durch Immobilitaet entstehen?",
      optionen: [
        {
          text: "Obstipation (Verstopfung)",
          isCorrect: true,
          explanation: "Richtig! Immobilitaet fuehrt zu verminderter Darmmotilitaet und damit zu Obstipation. Mobilisation ist also auch Obstipationsprophylaxe! Immobilitaet ist ein Risikofaktor fuer mindestens 5 Komplikationen.",
          explanationB1: "Richtig! Wenig Bewegung verlangsamt den Darm. Dann bekommt man Verstopfung. Bewegung hilft auch dem Darm!",
        },
        {
          text: "Inkontinenz",
          isCorrect: false,
          explanation: "Inkontinenz hat andere Ursachen (Beckenboden, neurologisch). Immobilitaet fuehrt eher zu Obstipation durch verminderte Darmmotilitaet.",
          explanationB1: "Nein. Inkontinenz hat andere Gruende. Durch Bettlaegerigkeit bekommt man eher Verstopfung.",
        },
        {
          text: "Polyurie (viel Urin)",
          isCorrect: false,
          explanation: "Polyurie hat andere Ursachen (Diabetes, Medikamente). Immobilitaet fuehrt eher zu Obstipation durch die verlangsamte Darmtaetigkeit.",
          explanationB1: "Nein. Viel Urin hat andere Gruende. Durch wenig Bewegung wird eher der Darm langsamer.",
        },
        {
          text: "Anurie (kein Urin)",
          isCorrect: false,
          explanation: "Anurie ist ein Zeichen fuer Nierenversagen und nicht direkt durch Immobilitaet verursacht. Die typische Folge von Immobilitaet im Darm-Bereich ist Obstipation.",
          explanationB1: "Nein. Kein Urin ist ein Nierenproblem. Das kommt nicht vom Bettliegen. Eher Verstopfung.",
        },
      ],
    },
  },

  // =============================================================
  // Step 21: REFLEXION -- Selfrating S5
  // =============================================================
  {
    stepId: "le06-s5-bk-01",
    phase: "s5",
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-dekubitus",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Selbsteinschaetzung: Pneumonie und Dekubitus",
      body: "Wie sicher fuehlst du dich bei den heutigen Themen? Bewerte ehrlich.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Bewerte dich selbst. Sei ehrlich!",
    },
    question: {
      fragetext: "Bewerte deine Sicherheit bei den folgenden Aussagen.",
      selfratingVariant: "standard",
    },
  },

  // =============================================================
  // Step 22: REFLEXION -- Summary S5
  // =============================================================
  {
    stepId: "le06-s5-bk-02",
    phase: "s5",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.418-422", "Q4", "Q2 S.424-430"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-pneumonie",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "/audio/le06-s5-zusammenfassung.mp3",
    audioLabel: "Zusammenfassung anhoeren",
    contentC1: {
      title: "Zusammenfassung Session 5",
      body: "Heute hast du gelernt wie Pneumonie bei immobilen Patienten entsteht und welche 5 Massnahmen sie verhindern. Ausserdem kennst du jetzt die 4 Dekubitus-Grade und die Praedilektionsstellen in Ruecken- und Seitenlage.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Heute ging es um Lungenentzuendung und Dekubitus. Du weisst jetzt wie man beides verhindern kann.",
    },
    question: {
      fragetext: "Was nimmst du aus dieser Session mit?",
      summary: {
        reflexionRueckbezug: "In der naechsten Session lernst du das Bobath-Konzept fuer Schlaganfall-Patienten und Transfer-Techniken mit Hilfsmitteln.",
        kernaussagen: [
          "Pneumonie-Risiko: Immobilitaet fuehrt zu Schonatmung, Sekretstau und Keimvermehrung",
          "5 Prophylaxen: Oberkoerperhochlage, Atemuebungen, Inhalation, Fruehmobilisation, Mundpflege",
          "Dekubitus hat 4 Grade: von Roetung (I) bis freiliegendem Knochen (IV)",
          "Praedilektionsstellen: Hinterhaupt, Schulterblatt, Ellbogen, Kreuzbein, Fersen (Rueckenlage) und Ohr, Schulter, Trochanter, Knie, Knoechel (Seitenlage)",
          "Anti-Dekubitus-Matratze ERSETZT NICHT die Positionierung und Mobilisation",
          "Mobilisation ist gleichzeitig Prophylaxe gegen 4 Komplikationen: Dekubitus, Thrombose, Kontraktur, Pneumonie",
        ],
      },
    },
  },
];
