// Session 5: "Woher weiss Pflege, was richtig ist?" — LE 01
// Generiert vom Content-Generator v2
// Themen: Pflegetheorien I — Ueberblick + Beduerfnistheorien, Pflegewissenschaft
// Leitfall: Yasemin Demirci — Theorieblock (Tag 5)
// Bloom: B2-B4, 22 Steps, ~30 Min
// Track: 15 basis (68%) / 7 vertiefung (32%)
// Interleaving: 2 Fragen aus S1-S4 (Ethik, Kommunikation) in Step 17

import type { ContentStep } from "../_types";

export const STEPS_S5: ContentStep[] = [
  // =============================================================
  // Step 1: Dialog — Yasemin im Theorieblock (STORY)
  // =============================================================
  {
    stepId: "le01-s5-01",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Pflegetheorien im Theorieblock",
      body: "Yasemin sitzt im Theorieblock. Das heutige Thema: Pflegetheorien. Sie fragt sich, ob sie das auf Station wirklich braucht.",
      fallbezug: "Yasemin Demirci, Theorieblock nach der ersten Praxiswoche",
    },
    contentB1: {
      title: "Pflegetheorien im Unterricht",
      body: "Yasemin ist im Unterricht. Das Thema heute: Pflegetheorien. Sie fragt sich: Brauche ich das auf Station?",
      fallbezug: "Yasemin Demirci im Unterricht",
    },
    question: {
      fragetext: "Wie reagierst du auf Yasemins Frage?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin im Theorieblock. Die Dozentin beginnt das Thema Pflegetheorien.",
          contextB1: "Yasemin ist im Unterricht. Die Lehrerin startet das Thema Pflegetheorien.",
          speaker: "Yasemin",
          options: [
            {
              text: "Pflegetheorien klingt so trocken. Braucht man das wirklich auf Station?",
              textB1: "Pflegetheorien klingen langweilig. Brauche ich das auf Station?",
              patientResponse: "Ohne Theorie pflegst du nach Gefuehl. Und Gefuehl allein kann schaden.",
              patientResponseB1: "Ohne Theorie pflegst du nur nach Gefuehl. Das kann Probleme machen.",
              score: 0,
              feedback: "Die Dozentin erklaert: Theorie ist das Fundament professioneller Pflege.",
              feedbackB1: "Die Lehrerin sagt: Theorie ist die Grundlage fuer gute Pflege.",
            },
          ],
        },
        {
          context: "Die Dozentin fragt die Klasse: Woher wisst ihr eigentlich, was in der Pflege richtig ist?",
          contextB1: "Die Lehrerin fragt: Woher wisst ihr, was in der Pflege richtig ist?",
          speaker: "Dozentin",
          options: [
            {
              text: "Aus Erfahrung — ich habe das bei meiner Oma gesehen.",
              textB1: "Aus Erfahrung. Ich habe das bei meiner Oma gesehen.",
              patientResponse: "Erfahrung ist wertvoll, aber sie ist subjektiv. Wir brauchen auch Forschung.",
              patientResponseB1: "Erfahrung ist gut. Aber sie reicht nicht. Wir brauchen auch Forschung.",
              score: 1,
              feedback: "Erfahrung ist eine Wissensquelle — aber eine unstrukturierte.",
              feedbackB1: "Erfahrung hilft. Aber sie ist nicht immer zuverlaessig.",
            },
            {
              text: "Aus Forschung und Studien — was wissenschaftlich belegt ist.",
              textB1: "Aus der Forschung. Was Studien zeigen.",
              patientResponse: "Genau! Und wie wir Forschung nutzen, lernen wir heute.",
              patientResponseB1: "Richtig! Wie wir Forschung nutzen, lernen wir heute.",
              score: 3,
              feedback: "Forschung ist eine strukturierte Wissensquelle — die zuverlaessigste.",
              feedbackB1: "Forschung ist die beste Wissensquelle.",
            },
            {
              text: "Von erfahrenen Kolleginnen — die wissen wie es geht.",
              textB1: "Von erfahrenen Kolleginnen. Die wissen es.",
              patientResponse: "Tradition und Autoritaet sind Quellen — aber nicht immer zuverlaessig.",
              patientResponseB1: "Erfahrene Kolleginnen wissen viel. Aber sie koennen auch falsch liegen.",
              score: 1,
              feedback: "Autoritaet ist eine unstrukturierte Wissensquelle — kritisch hinterfragen.",
              feedbackB1: "Wissen von Kolleginnen muss man pruefen. Es kann veraltet sein.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: Swipe — Brilliant-Prinzip: "Was ist Wissen?" (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s5-02",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Was ist zuverlaessiges Wissen?",
      body: "Pflege braucht eine solide Wissensbasis. Nicht alles, was als Wissen gilt, ist gleich zuverlaessig.",
    },
    contentB1: {
      title: "Welches Wissen ist gut?",
      body: "Pflege braucht gutes Wissen. Aber nicht alles Wissen ist gleich gut.",
    },
    question: {
      fragetext: "Wische nach rechts wenn die Aussage stimmt, nach links wenn sie falsch ist.",
      swipe: {
        instruction: "Stimmt die Aussage?",
        cards: [
          {
            statement: "Erfahrung ist die zuverlaessigste Wissensquelle in der Pflege.",
            statementB1: "Erfahrung ist das beste Wissen in der Pflege.",
            isCorrect: false,
            explanation: "Erfahrung ist subjektiv und nicht verallgemeinerbar. Wissenschaftliche Forschung ist zuverlaessiger.",
            explanationB1: "Erfahrung ist persoenlich. Forschung ist zuverlaessiger.",
          },
          {
            statement: "Tradition ist immer eine gute Grundlage fuer pflegerisches Handeln.",
            statementB1: "Tradition ist immer gut fuer die Pflege.",
            isCorrect: false,
            explanation: "Tradition kann veraltet sein. 'Das machen wir schon immer so' reicht nicht als Begruendung.",
            explanationB1: "'Das machen wir immer so' reicht nicht. Tradition kann falsch sein.",
          },
          {
            statement: "Forschung kann Traditionen in der Pflege widerlegen.",
            statementB1: "Forschung kann zeigen, dass Traditionen falsch sind.",
            isCorrect: true,
            explanation: "Forschung prueft systematisch. Wenn Evidenz gegen eine Tradition spricht, muss die Praxis geaendert werden.",
            explanationB1: "Forschung prueft genau. Wenn eine Tradition nicht stimmt, muss man sie aendern.",
          },
          {
            statement: "Versuch und Irrtum ist eine sichere Methode in der Pflege.",
            statementB1: "Ausprobieren ist sicher in der Pflege.",
            isCorrect: false,
            explanation: "Versuch und Irrtum kann Patienten schaden. Pflege muss auf Evidenz basieren, nicht auf Ausprobieren.",
            explanationB1: "Ausprobieren kann Patienten schaden. Pflege braucht sicheres Wissen.",
          },
          {
            statement: "Wissenschaftliches Wissen ist nachpruefbar und systematisch gewonnen.",
            statementB1: "Wissenschaftliches Wissen kann man pruefen. Es wird mit einem Plan gewonnen.",
            isCorrect: true,
            explanation: "Nachpruefbarkeit ist der Kern wissenschaftlichen Wissens. Ergebnisse muessen reproduzierbar sein.",
            explanationB1: "Wissenschaftliches Wissen kann man wiederholen und pruefen. Das macht es zuverlaessig.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 3: Text — Pflegewissenschaft: Grundlagen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-03",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-103"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Pflegewissenschaft und Wissensquellen",
      body: "Pflegewissenschaft erforscht die Pflegepraxis fuer die Pflegepraxis. Sie steht auf 3 Saeulen: Forschung, Theorie und Lehre. Wissensquellen unterscheiden sich in strukturierte (logisches Denken, Forschung) und unstrukturierte (Intuition, Erfahrung, Tradition). Induktiv bedeutet: vom Einzelfall zum Allgemeinen. Deduktiv bedeutet: vom Allgemeinen zum Einzelfall.",
      glossarBegriffe: ["Pflegewissenschaft", "Evidence-based Nursing"],
    },
    contentB1: {
      title: "Pflegewissenschaft",
      body: "Die Pflegewissenschaft untersucht Pflege, um sie besser zu machen. Sie hat 3 Teile: Forschung, Theorie und Lehre. Manche Wissensquellen sind gut geplant (Forschung). Andere sind ungeplant (Erfahrung, Bauchgefuehl). Induktiv heisst: von einem Fall auf alle schliessen. Deduktiv heisst: von einer Regel auf einen Fall schliessen.",
      glossarBegriffe: ["Pflegewissenschaft"],
    },
    question: {
      fragetext: "Lies den Text ueber Pflegewissenschaft und Wissensquellen.",
    },
  },

  // =============================================================
  // Step 4: Comparison — Strukturierte vs. Unstrukturierte Wissensquellen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-04",
    phase: "s5",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    imageUrl: "/images/le-01/wissensquellen-vergleich.svg",
    imageAlt: "Vergleichstabelle: Strukturierte und unstrukturierte Wissensquellen",
    contentC1: {
      title: "Strukturierte vs. unstrukturierte Wissensquellen",
      body: "Die Zuverlaessigkeit von Wissen haengt von der Quelle ab. Strukturierte Quellen sind systematisch geprueft, unstrukturierte koennen taeuschen.",
    },
    contentB1: {
      title: "Geplantes und ungeplantes Wissen",
      body: "Manche Wissensquellen sind zuverlaessig. Andere koennen falsch sein. Hier siehst du den Unterschied.",
    },
    question: {
      fragetext: "Vergleiche die beiden Arten von Wissensquellen.",
      comparison: {
        instruction: "Vergleiche strukturierte und unstrukturierte Wissensquellen.",
        columns: [
          { label: "Strukturiert", icon: "microscope" },
          { label: "Unstrukturiert", icon: "lightbulb" },
        ],
        rows: [
          {
            criterion: "Beispiele",
            values: ["Logisches Denken, wissenschaftliches Forschen", "Intuition, Erfahrung, Tradition, Versuch und Irrtum"],
            valuesB1: ["Nachdenken mit Plan, Forschung", "Bauchgefuehl, Erfahrung, Tradition, Ausprobieren"],
          },
          {
            criterion: "Zuverlaessigkeit",
            values: ["Hoch — systematisch geprueft und nachvollziehbar", "Gering — subjektiv und nicht ueberpruefbar"],
            valuesB1: ["Hoch — wird genau geprueft", "Niedrig — kann falsch sein"],
          },
          {
            criterion: "Risiken",
            values: ["Aufwendig, nicht immer sofort verfuegbar", "Kann Patienten schaden, bestaetigt Vorurteile"],
            valuesB1: ["Braucht viel Zeit", "Kann Patienten schaden"],
            highlight: 1,
          },
          {
            criterion: "Rolle in der Pflege",
            values: ["Grundlage fuer Evidence-based Nursing", "Ergaenzend, aber kritisch hinterfragen"],
            valuesB1: ["Basis fuer gute Pflege", "Kann helfen, muss aber geprueft werden"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: TrueFalse — Wissensquellen pruefen (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s5-05",
    phase: "s5",
    stepType: "truefalse",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Wissensquellen in der Pflege",
      body: "Pruefe dein Verstaendnis der verschiedenen Wissensquellen.",
    },
    contentB1: {
      title: "Wissensquellen pruefen",
      body: "Was stimmt? Pruefe dein Wissen ueber Wissensquellen.",
    },
    question: {
      fragetext: "Welche Aussagen sind richtig, welche falsch?",
      trueFalseCards: [
        {
          statement: "Tradition ist eine strukturierte Wissensquelle.",
          isTrue: false,
          explanation: "Tradition ist eine unstrukturierte Wissensquelle. Sie wird nicht systematisch geprueft und kann veraltet sein.",
        },
        {
          statement: "Deduktiv bedeutet: vom Allgemeinen zum Einzelfall schliessen.",
          isTrue: true,
          explanation: "Richtig. Deduktives Denken geht von einer allgemeinen Regel aus und wendet sie auf einen konkreten Fall an.",
        },
        {
          statement: "Intuition reicht als Grundlage fuer pflegerische Entscheidungen.",
          isTrue: false,
          explanation: "Intuition ist subjektiv und nicht nachpruefbar. Sie muss durch wissenschaftliche Evidenz ergaenzt werden.",
        },
        {
          statement: "Nachpruefbarkeit ist der Kern wissenschaftlichen Wissens.",
          isTrue: true,
          explanation: "Richtig. Wissenschaftliche Ergebnisse muessen reproduzierbar und ueberpruefbar sein.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: Text — 4 Schluesselkonzepte / Metaparadigma (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-06",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-120"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Die 4 Schluesselkonzepte der Pflege",
      body: "Jede Pflegetheorie macht Aussagen zu 4 Schluesselkonzepten — dem Metaparadigma der Pflege: Person, Umwelt, Wohlbefinden (Gesundheit/Krankheit) und pflegerisches Handeln. Meleis unterscheidet 3 Schwerpunkte von Pflegetheorien: Beduerfnistheorien ('Was tun Pflegende?'), Interaktionstheorien ('Wie?') und Ergebnistheorien ('Warum?').",
      glossarBegriffe: ["Metaparadigma", "Pflegetheorie"],
    },
    contentB1: {
      title: "Die 4 Grundthemen der Pflege",
      body: "Jede Pflegetheorie spricht ueber 4 Themen: den Menschen, die Umgebung, Gesundheit und Krankheit, und was Pflege tut. Es gibt 3 Arten von Theorien: Beduerfnistheorien (Was tun Pflegende?), Interaktionstheorien (Wie?) und Ergebnistheorien (Warum?).",
      glossarBegriffe: ["Metaparadigma", "Pflegetheorie"],
    },
    question: {
      fragetext: "Lies den Text ueber die 4 Schluesselkonzepte und die 3 Theorie-Typen.",
    },
  },

  // =============================================================
  // Step 7: Diagram — Mindmap Pflegetheorien (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-07",
    phase: "s5",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-120"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Ueberblick: Pflegetheorien",
      body: "Diese Mindmap zeigt die 3 Typen von Pflegetheorien und ihre wichtigsten Vertreterinnen.",
    },
    contentB1: {
      title: "Pflegetheorien auf einen Blick",
      body: "Diese Karte zeigt die 3 Arten von Pflegetheorien und wer sie entwickelt hat.",
    },
    question: {
      fragetext: "Erkunde die Mindmap der Pflegetheorien.",
      diagram: {
        diagramType: "mindmap",
        instruction: "Erkunde die verschiedenen Typen von Pflegetheorien und ihre Vertreterinnen.",
        nodes: [
          { id: "meta", label: "Metaparadigma", labelB1: "4 Grundthemen", highlight: true },
          { id: "bed", label: "Beduerfnistheorien", labelB1: "Was tun Pflegende?" },
          { id: "inter", label: "Interaktionstheorien", labelB1: "Wie pflegen wir?" },
          { id: "erg", label: "Ergebnistheorien", labelB1: "Warum pflegen wir?" },
          { id: "henderson", label: "Henderson (14 Grundbeduerfnisse)", labelB1: "Henderson: 14 Beduerfnisse" },
          { id: "orem", label: "Orem (Selbstpflege)", labelB1: "Orem: Selbstpflege" },
          { id: "roper", label: "Roper-Logan-Tierney (12 LA)", labelB1: "Roper: 12 Lebensaktivitaeten" },
          { id: "krohwinkel", label: "Krohwinkel (13 ABEDLs)", labelB1: "Krohwinkel: 13 ABEDLs" },
          { id: "peplau", label: "Peplau (4 Phasen)", labelB1: "Peplau: 4 Beziehungs-Phasen" },
          { id: "roy", label: "Roy (Adaptionsmodell)", labelB1: "Roy: Anpassungs-Modell" },
        ],
        edges: [
          { from: "meta", to: "bed", label: "Was?" },
          { from: "meta", to: "inter", label: "Wie?" },
          { from: "meta", to: "erg", label: "Warum?" },
          { from: "bed", to: "henderson" },
          { from: "bed", to: "orem" },
          { from: "bed", to: "roper" },
          { from: "bed", to: "krohwinkel" },
          { from: "inter", to: "peplau" },
          { from: "erg", to: "roy" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 8: Matching — 3 Theorie-Typen + Leitfragen (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s5-08",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Theorie-Typen und ihre Leitfragen",
      body: "Jeder Theorie-Typ hat eine zentrale Leitfrage, die den Fokus bestimmt.",
    },
    contentB1: {
      title: "3 Arten von Pflegetheorien",
      body: "Jede Theorie-Art hat eine wichtige Frage. Ordne richtig zu.",
    },
    question: {
      fragetext: "Ordne jeden Theorie-Typ seiner Leitfrage zu.",
      matchingPairs: [
        { left: "Beduerfnistheorien", right: "Was tun Pflegende?" },
        { left: "Interaktionstheorien", right: "Wie gestalten Pflegende die Beziehung?" },
        { left: "Ergebnistheorien", right: "Warum pflegen wir — was ist das Ziel?" },
      ],
    },
  },

  // =============================================================
  // Step 9: Text — Henderson, Juchli, Orem (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-09",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q12 Kap.3.1", "Q4 S.120-122"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Beduerfnistheorien: Henderson, Juchli, Orem",
      body: "Virginia Henderson formulierte 14 Grundbeduerfnisse als Basis der Pflege. Sie gilt als Urmutter der Pflegetheorien. Liliane Juchli entwickelte daraus die 12 ATL (Aktivitaeten des taeglichen Lebens) fuer den deutschsprachigen Raum. Dorothea Orem beschrieb 3 Teiltheorien: Selbstpflege, Selbstpflegedefizit und Pflegesysteme.",
      glossarBegriffe: ["Selbstpflege"],
    },
    contentB1: {
      title: "Henderson, Juchli und Orem",
      body: "Henderson nannte 14 Grundbeduerfnisse des Menschen. Juchli machte daraus 12 Lebens-Aktivitaeten fuer Deutschland. Orem hat 3 Teile: Selbstpflege (Was kann der Mensch selbst?), Defizit (Wo braucht er Hilfe?) und Pflegesysteme (Wie viel Hilfe?).",
      glossarBegriffe: ["Selbstpflege"],
    },
    question: {
      fragetext: "Lies den Text ueber die drei Beduerfnistheoretikerinnen.",
    },
  },

  // =============================================================
  // Step 10: Flipcard — 4 Theoretikerinnen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-10",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q12 Kap.3.1", "Q4 S.119-126"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "4 Theoretikerinnen entdecken",
      body: "Lerne die wichtigsten Pflegetheoretikerinnen und ihre Kernideen kennen.",
    },
    contentB1: {
      title: "4 Pflegetheoretikerinnen",
      body: "Lerne 4 wichtige Frauen und ihre Ideen kennen. Tippe auf die Karten.",
    },
    question: {
      fragetext: "Tippe auf jede Karte, um die Kernidee zu entdecken.",
      flipcard: {
        instruction: "Entdecke die Kernideen der 4 Theoretikerinnen.",
        cards: [
          {
            front: "Virginia Henderson",
            back: "14 Grundbeduerfnisse des Menschen. Pflege wird noetig, wenn ein Mensch seine Beduerfnisse nicht selbst erfuellen kann. Gilt als Urmutter der Pflegetheorien.",
            backB1: "14 Grundbeduerfnisse. Wenn ein Mensch sich nicht selbst versorgen kann, braucht er Pflege. Henderson war die Erste.",
            category: "Beduerfnistheorie",
          },
          {
            front: "Liliane Juchli",
            back: "12 ATL — Aktivitaeten des taeglichen Lebens. Ganzheitliches Ordnungssystem: erfasst Gesundheit UND Pflegebeduerftigkeit. Kerngedanke: 'Ich pflege als die, die ich bin.'",
            backB1: "12 Lebens-Aktivitaeten (ATL). Schaut auf den ganzen Menschen. Ihr Motto: 'Ich pflege als die, die ich bin.'",
            category: "Beduerfnistheorie",
          },
          {
            front: "Dorothea Orem",
            back: "Selbstpflege-Defizit-Theorie. 3 Pflegesysteme: vollstaendig kompensatorisch, teilkompensatorisch, unterstuetzend-edukativ. Pflege gleicht Defizite aus.",
            backB1: "Selbstpflege-Theorie. 3 Stufen: Alles uebernehmen, zusammen machen oder nur anleiten. Pflege hilft, wo der Mensch nicht kann.",
            category: "Beduerfnistheorie",
          },
          {
            front: "Roper-Logan-Tierney",
            back: "12 Lebensaktivitaeten (u.a. Atmen, Essen, Kommunikation, Mobilitaet). 5 Einflussfaktoren: biologisch, psychologisch, soziokulturell, umgebungsbezogen, politisch-oekonomisch.",
            backB1: "12 Lebens-Aktivitaeten (z.B. Atmen, Essen, Bewegen). 5 Einfluss-Faktoren: Koerper, Psyche, Kultur, Umgebung, Politik.",
            category: "Beduerfnistheorie",
          },
        ],
        shuffled: true,
      },
    },
  },

  // =============================================================
  // Step 11: MC — Orem-Pflegesystem fuer Herrn Brenner (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s5-11",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    wusstestDuDas: "Orems 3 Pflegesysteme bestimmen den gesamten Pflegeplan. Die Einordnung kann sich im Verlauf aendern — z.B. von vollstaendig kompensatorisch nach teilkompensatorisch.",
    contentC1: {
      title: "Orems Pflegesysteme anwenden",
      body: "Yasemin betreut Herr Brenner (82). Er kann sich selbststaendig waschen, anziehen und essen. Sein Hauptproblem ist Trauer nach dem Tod seiner Frau — er braucht emotionale Unterstuetzung und Gespraechsangebote.",
      fallbezug: "Herr Brenner, 82, trauert um seine Frau",
    },
    contentB1: {
      title: "Welches Pflege-System passt?",
      body: "Yasemin pflegt Herrn Brenner (82). Er kann sich selbst waschen und anziehen. Aber er ist traurig, weil seine Frau gestorben ist. Er braucht jemanden zum Reden.",
      fallbezug: "Herr Brenner, 82, ist traurig",
    },
    question: {
      fragetext: "Welches Orem-Pflegesystem passt zu Herr Brenner?",
      optionen: [
        {
          text: "Vollstaendig kompensatorisch",
          isCorrect: false,
          explanation: "Dieses System ist fuer Patienten, die nichts selbst tun koennen. Herr Brenner kann sich aber selbststaendig versorgen.",
          explanationB1: "Dieses System ist fuer Menschen, die gar nichts selbst koennen. Herr Brenner kann sich aber selbst waschen.",
        },
        {
          text: "Teilkompensatorisch",
          isCorrect: false,
          explanation: "Teilkompensatorisch bedeutet: Pflege und Patient arbeiten koerperlich zusammen. Herr Brenners Defizit ist aber emotional, nicht koerperlich.",
          explanationB1: "Teilkompensatorisch heisst: Pflege und Patient machen zusammen. Aber Herr Brenner braucht keine koerperliche Hilfe.",
        },
        {
          text: "Unterstuetzend-edukativ",
          isCorrect: true,
          explanation: "Richtig. Herr Brenner kann sich koerperlich selbst versorgen. Er braucht Unterstuetzung und Begleitung im emotionalen Bereich — genau das leistet das unterstuetzend-edukative System.",
          explanationB1: "Richtig! Herr Brenner kann alles selbst machen. Er braucht Hilfe bei seinen Gefuehlen. Das ist unterstuetzend-edukativ.",
        },
        {
          text: "Kein System passt — Orem ist hier falsch",
          isCorrect: false,
          explanation: "Orem kann hier angewendet werden. Das unterstuetzend-edukative System umfasst auch emotionale Unterstuetzung und Beratung.",
          explanationB1: "Orem passt auch hier. Emotionale Hilfe gehoert zum unterstuetzend-edukativen System.",
        },
      ],
    },
  },

  // =============================================================
  // Step 12: Reveal — Orems 3 Pflegesysteme (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-12",
    phase: "s5",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Orems 3 Pflegesysteme",
      body: "Entdecke die 3 Pflegesysteme nach Orem mit je einem Patienten-Beispiel.",
    },
    contentB1: {
      title: "3 Pflege-Stufen nach Orem",
      body: "Entdecke die 3 Stufen. Jede Stufe hat ein Beispiel.",
    },
    question: {
      fragetext: "Decke die 3 Pflegesysteme nacheinander auf.",
      reveal: {
        instruction: "Decke die Karten nacheinander auf — von der meisten zur wenigsten Hilfe.",
        revealMode: "sequential",
        cards: [
          {
            id: "voll",
            label: "Vollstaendig kompensatorisch",
            content: "Die Pflege uebernimmt alles. Der Patient kann nicht fuer sich sorgen. Beispiel: Ein Patient im Koma — Koerperpflege, Ernaehrung und Lagerung werden vollstaendig von Pflegenden uebernommen.",
            contentB1: "Die Pflege macht alles. Der Mensch kann nichts selbst tun. Beispiel: Ein Patient im Koma. Pflege waescht, fuettert und lagert ihn.",
            icon: "bed",
          },
          {
            id: "teil",
            label: "Teilkompensatorisch",
            content: "Pflege und Patient arbeiten zusammen. Beispiel: Eine Patientin nach Hueft-OP — sie kann den Oberkoerper selbst waschen, braucht aber Hilfe bei den Beinen und beim Aufstehen.",
            contentB1: "Pflege und Patient machen zusammen. Beispiel: Eine Patientin nach einer Hueft-OP. Sie waescht sich oben selbst. Bei den Beinen hilft die Pflege.",
            icon: "handshake",
          },
          {
            id: "edukat",
            label: "Unterstuetzend-edukativ",
            content: "Der Patient lernt, sich selbst zu versorgen. Pflege beratet und leitet an. Beispiel: Ein Diabetiker lernt, seinen Blutzucker selbst zu messen und Insulin zu spritzen.",
            contentB1: "Der Patient lernt es selbst. Die Pflege zeigt ihm, wie es geht. Beispiel: Ein Diabetiker lernt, seinen Blutzucker zu messen.",
            icon: "graduation-cap",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 13: Categorize — Patienten in Orem-Systeme (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s5-13",
    phase: "s5",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Patienten den Pflegesystemen zuordnen",
      body: "Wende Orems 3 Pflegesysteme auf verschiedene Patienten-Situationen an.",
    },
    contentB1: {
      title: "Welche Pflege-Stufe passt?",
      body: "Ordne die Patienten der richtigen Pflege-Stufe nach Orem zu.",
    },
    question: {
      fragetext: "Ordne jede Situation dem passenden Orem-Pflegesystem zu.",
      categories: [
        { name: "Vollstaendig kompensatorisch" },
        { name: "Teilkompensatorisch" },
        { name: "Unterstuetzend-edukativ" },
      ],
      categoryItems: [
        { text: "Patient im Wachkoma — braucht kuenstliche Ernaehrung", correctCategory: 0 },
        { text: "Patientin nach Schlaganfall — kann rechten Arm nicht bewegen, links ist fit", correctCategory: 1 },
        { text: "Diabetiker lernt, Insulin selbst zu spritzen", correctCategory: 2 },
        { text: "Kleinkind (2 Jahre) nach Operation — kann sich nicht selbst versorgen", correctCategory: 0 },
        { text: "Herr Brenner (82) — koerperlich fit, braucht emotionale Unterstuetzung", correctCategory: 2 },
        { text: "Patientin mit Gipsarm — kann Oberkoerper selbst waschen, braucht Hilfe beim Anziehen", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Step 14: Text — Roper-Logan-Tierney + Krohwinkel (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-14",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.123-126"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Roper-Logan-Tierney und Krohwinkel",
      body: "Roper-Logan-Tierney beschreiben 12 Lebensaktivitaeten (u.a. Atmen, Essen, Kommunikation, Mobilitaet, Sterben). Krohwinkel entwickelte das ABEDL-Modell: Aktivitaeten, Beziehungen und existenzielle Erfahrungen des Lebens — 13 Bereiche. Das ABEDL-Modell ist die Basis vieler Pflegeplanungen in Deutschland.",
      glossarBegriffe: ["ABEDL"],
    },
    contentB1: {
      title: "Roper und Krohwinkel",
      body: "Roper beschreibt 12 Lebens-Aktivitaeten wie Atmen, Essen und Bewegen. Krohwinkel hat 13 Bereiche: die ABEDLs. ABEDL steht fuer Aktivitaeten, Beziehungen und existenzielle Erfahrungen des Lebens. Viele Pflegeplanungen in Deutschland nutzen ABEDLs.",
      glossarBegriffe: ["ABEDL"],
    },
    question: {
      fragetext: "Lies den Text ueber Roper-Logan-Tierney und Krohwinkel.",
    },
  },

  // =============================================================
  // Step 15: Cloze — ABEDL-Bedeutung (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s5-15",
    phase: "s5",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.125-126"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "ABEDL — Wofuer steht die Abkuerzung?",
      body: "Krohwinkels ABEDL-Modell ist das verbreitetste Pflegemodell in Deutschland.",
    },
    contentB1: {
      title: "Was heisst ABEDL?",
      body: "ABEDL ist das wichtigste Pflegemodell in Deutschland. Fuelle die Luecken.",
    },
    question: {
      fragetext: "Ergaenze die fehlenden Woerter in der ABEDL-Erklaerung.",
      cloze: {
        textWithBlanks: "Krohwinkels ABEDL steht fuer: Aktivitaeten, {{1}} und {{2}} Erfahrungen des Lebens. Das Modell umfasst {{3}} Bereiche.",
        blanks: [
          {
            id: 1,
            correct: "Beziehungen",
            distractors: ["Behandlungen", "Berufe"],
          },
          {
            id: 2,
            correct: "existenzielle",
            distractors: ["emotionale", "koerperliche"],
          },
          {
            id: 3,
            correct: "13",
            distractors: ["12", "14"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 16: Memory — Theoretikerinnen + Konzepte (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s5-16",
    phase: "s5",
    stepType: "memory",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-129"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Memory: Theoretikerinnen und Konzepte",
      body: "Finde die zusammengehoerenden Paare: Theoretikerin und ihr Konzept.",
    },
    contentB1: {
      title: "Memory: Wer hat was entwickelt?",
      body: "Finde die Paare: Jede Theoretikerin hat ein Konzept.",
    },
    question: {
      fragetext: "Finde die 6 zusammengehoerenden Paare.",
      memoryPairs: [
        { a: "Henderson", b: "14 Grundbeduerfnisse" },
        { a: "Orem", b: "Selbstpflege-Defizit" },
        { a: "Krohwinkel", b: "13 ABEDLs" },
        { a: "Roper-Logan-Tierney", b: "12 Lebensaktivitaeten" },
        { a: "Juchli", b: "12 ATL" },
        { a: "Peplau", b: "4 Beziehungsphasen" },
      ],
    },
  },

  // =============================================================
  // Step 17: Timer — Speed-Fragen + Interleaving (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s5-17",
    phase: "s5",
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-126", "Q7 S.285", "Q5 S.251"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Speed-Runde: Pflegetheorien und mehr",
      body: "4 schnelle Fragen — 2 zu Pflegetheorien, 1 zu Ethik, 1 zu Kommunikation.",
    },
    contentB1: {
      title: "Schnelle Fragen",
      body: "4 schnelle Fragen. 2 ueber Pflegetheorien. 1 ueber Ethik. 1 ueber Kommunikation.",
    },
    question: {
      fragetext: "Beantworte jede Frage in 15 Sekunden.",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Wie viele ABEDLs hat das Krohwinkel-Modell?",
          options: ["12", "13", "14"],
          correctIndex: 1,
        },
        {
          question: "Welcher Theorie-Typ fragt 'Was tun Pflegende?'",
          options: ["Interaktionstheorien", "Ergebnistheorien", "Beduerfnistheorien"],
          correctIndex: 2,
        },
        {
          question: "Welches ethische Prinzip schuetzt vor Schaden? (Interleaving)",
          options: ["Autonomie", "Nonmalefizienz", "Gerechtigkeit"],
          correctIndex: 1,
        },
        {
          question: "Wie heissen die 4 Seiten einer Nachricht nach Schulz von Thun? (Interleaving)",
          options: ["Sach-, Beziehungs-, Selbstoffenbarungs-, Appellseite", "Sach-, Gefuehls-, Wunsch-, Befehlsseite", "Inhalt, Form, Beziehung, Kontext"],
          correctIndex: 0,
        },
      ],
    },
  },

  // =============================================================
  // Step 18: Comparison — Henderson vs. Krohwinkel vs. Orem (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s5-18",
    phase: "s5",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q12 Kap.3.1", "Q4 S.119-126"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    imageUrl: "/images/le-01/theorien-vergleich.svg",
    imageAlt: "Vergleichstabelle: Henderson, Krohwinkel und Orem",
    contentC1: {
      title: "3 Beduerfnistheorien im Vergleich",
      body: "Henderson, Krohwinkel und Orem gehoeren alle zu den Beduerfnistheorien — unterscheiden sich aber im Fokus und Umfang.",
    },
    contentB1: {
      title: "Henderson, Krohwinkel und Orem",
      body: "Alle 3 sind Beduerfnistheorien. Aber sie sind verschieden. Schau dir den Vergleich an.",
    },
    question: {
      fragetext: "Vergleiche die 3 Beduerfnistheorien.",
      comparison: {
        instruction: "Vergleiche Henderson, Krohwinkel und Orem.",
        columns: [
          { label: "Henderson", icon: "heart" },
          { label: "Krohwinkel", icon: "layout-grid" },
          { label: "Orem", icon: "user-check" },
        ],
        rows: [
          {
            criterion: "Fokus",
            values: ["14 Grundbeduerfnisse des Menschen", "13 ABEDLs — Aktivitaeten, Beziehungen, existenzielle Erfahrungen", "Selbstpflege-Faehigkeit und Defizite"],
            valuesB1: ["14 Beduerfnisse", "13 Lebensbereiche", "Was kann der Mensch selbst?"],
          },
          {
            criterion: "Anzahl Bereiche",
            values: ["14", "13", "3 Pflegesysteme"],
            valuesB1: ["14", "13", "3 Stufen"],
          },
          {
            criterion: "Herkunft",
            values: ["USA, 1950er Jahre", "Deutschland, 1980er Jahre", "USA, 1970er Jahre"],
            valuesB1: ["USA, 1950er", "Deutschland, 1980er", "USA, 1970er"],
          },
          {
            criterion: "Staerke",
            values: ["Einfach, Grundlage fuer viele Folge-Modelle", "Verbreitetstes Modell in Deutschland, ganzheitlich", "Klar strukturiert: 3 Systeme fuer den Pflegeplan"],
            valuesB1: ["Einfach, Basis fuer andere Modelle", "Am meisten benutzt in Deutschland", "Klare 3 Stufen fuer die Pflegeplanung"],
            highlight: 1,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 19: Dialog — Orem vs. Krohwinkel (STORY)
  // =============================================================
  {
    stepId: "le01-s5-19",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-126"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Welches Modell ist besser?",
      body: "Yasemin vergleicht Orem und Krohwinkel und fragt sich, welches Modell das richtige ist.",
      fallbezug: "Yasemin Demirci reflektiert ueber Pflegemodelle",
    },
    contentB1: {
      title: "Welches Modell soll ich nehmen?",
      body: "Yasemin fragt sich: Orem oder Krohwinkel? Was ist besser?",
      fallbezug: "Yasemin denkt ueber Pflegemodelle nach",
    },
    question: {
      fragetext: "Was antwortest du Yasemin?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin nach dem Theorieblock. Sie hat Orem und Krohwinkel kennengelernt.",
          contextB1: "Yasemin nach dem Unterricht. Sie kennt jetzt Orem und Krohwinkel.",
          speaker: "Yasemin",
          options: [
            {
              text: "Wenn ich Orem benutze, schaue ich ob der Patient sich selbst waschen kann. Bei Krohwinkel schaue ich 13 Bereiche an. Was ist besser?",
              textB1: "Bei Orem schaue ich: Kann der Patient sich waschen? Bei Krohwinkel schaue ich 13 Bereiche. Was ist besser?",
              patientResponse: "Keines ist besser. Es kommt auf die Situation an.",
              patientResponseB1: "Keines ist besser oder schlechter. Es kommt auf den Patienten an.",
              score: 0,
              feedback: "Yasemins Frage zeigt ein haeufiges Missverstaendnis. Pflegetheorien sind Werkzeuge — nicht wahr oder falsch.",
              feedbackB1: "Gute Frage! Pflegetheorien sind Werkzeuge. Man waehlt das passende Werkzeug fuer die Situation.",
            },
          ],
        },
        {
          context: "Die Dozentin erklaert: Pflegetheorien sind wie Brillen — jede zeigt etwas anderes.",
          contextB1: "Die Lehrerin sagt: Theorien sind wie Brillen. Jede zeigt etwas anderes.",
          speaker: "Dozentin",
          options: [
            {
              text: "Orem passt gut, wenn ich wissen will, wie viel Hilfe jemand braucht.",
              textB1: "Orem ist gut, wenn ich wissen will: Wie viel Hilfe braucht der Patient?",
              patientResponse: "Genau. Und Krohwinkel zeigt dir alle Lebensbereiche — auch die, an die du vielleicht nicht sofort denkst.",
              patientResponseB1: "Richtig. Und Krohwinkel zeigt alle 13 Lebensbereiche. Da vergisst du nichts.",
              score: 3,
              feedback: "Orem fuer die Frage nach dem Hilfebedarf, Krohwinkel fuer die ganzheitliche Sicht.",
              feedbackB1: "Orem: Wie viel Hilfe? Krohwinkel: Welche Bereiche?",
            },
            {
              text: "Ich nehme immer Krohwinkel — das ist in Deutschland am verbreitetsten.",
              textB1: "Ich nehme immer Krohwinkel. Das kennt jeder in Deutschland.",
              patientResponse: "Krohwinkel ist weit verbreitet. Aber manchmal passt ein anderes Modell besser.",
              patientResponseB1: "Krohwinkel ist beliebt. Aber manchmal passt ein anderes Modell besser.",
              score: 1,
              feedback: "Verbreitung allein ist kein Qualitaetskriterium. Die Wahl sollte zum Patienten passen.",
              feedbackB1: "Nur weil etwas beliebt ist, ist es nicht immer das Beste. Es kommt auf den Patienten an.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 20: Crossword — Pflegetheorien-Begriffe (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s5-20",
    phase: "s5",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-126"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Kreuzwortraetsel: Pflegetheorien",
      body: "Teste dein Wissen ueber die wichtigsten Begriffe der Pflegetheorien.",
    },
    contentB1: {
      title: "Kreuzwortraetsel: Pflegetheorien",
      body: "Wie gut kennst du die Begriffe? Loesche das Raetsel.",
    },
    question: {
      fragetext: "Loese das Kreuzwortraetsel mit 6 Begriffen aus den Pflegetheorien.",
      crosswordWords: [
        { word: "METAPARADIGMA", clue: "Die 4 Schluesselkonzepte der Pflegewissenschaft" },
        { word: "SELBSTPFLEGE", clue: "Orems Kernbegriff: Was der Mensch eigenstaendig fuer sich tut" },
        { word: "ABEDL", clue: "Krohwinkels 13 Bereiche (Abkuerzung)" },
        { word: "HENDERSON", clue: "Formulierte 14 Grundbeduerfnisse — Urmutter der Pflegetheorien" },
        { word: "BEDUERFNISTHEORIE", clue: "Theorie-Typ, der fragt: Was tun Pflegende?" },
        { word: "LEBENSAKTIVITAETEN", clue: "12 Bereiche nach Roper-Logan-Tierney" },
      ],
    },
  },

  // =============================================================
  // Step 21: Freetext — Theorie-Wechsel bei Herr Brenner (SCHREIBTISCH)
  // =============================================================
  {
    stepId: "le01-s5-21",
    phase: "s5",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-129"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Theorie-Wechsel: Herr Brenner",
      body: "Herr Brenner (82) wird bisher nach dem Orem-Modell betreut. Sein Hauptproblem ist Trauer — er kann sich koerperlich selbst versorgen, braucht aber emotionale Begleitung.",
      fallbezug: "Herr Brenner, 82, trauert — Orem-Modell reicht nicht",
    },
    contentB1: {
      title: "Passt Orem noch zu Herr Brenner?",
      body: "Herr Brenner (82) wird nach Orem gepflegt. Aber sein Problem ist Trauer. Er kann sich selbst waschen und essen. Er braucht jemanden zum Reden.",
      fallbezug: "Herr Brenner braucht mehr als Koerperpflege",
    },
    question: {
      fragetext: "Passt das Orem-Modell noch zu Herr Brenner? Wenn nein, welche Theorie waere besser geeignet und warum?",
      musterantwort: "Orem fokussiert auf physische Selbstpflegedefizite — Herr Brenner kann sich aber selbst waschen und essen. Sein Hauptproblem ist Trauer. Peplaus Interaktionstheorie waere besser geeignet: Die Beziehung steht im Mittelpunkt, das therapeutische Gespraech hat selbst eine heilende Wirkung. Die Pflegeplanung wuerde sich aendern: statt 'Hilfe bei der Koerperpflege' zu 'Regelmaessige Gespraechsangebote und emotionale Unterstuetzung'.",
      bewertungskriterien: [
        "Erkennt, dass Orem auf physische Defizite fokussiert und Herr Brenner keine hat",
        "Nennt Peplaus Interaktionstheorie als Alternative",
        "Begruendet den Wechsel mit dem Fokus auf die therapeutische Beziehung",
        "Beschreibt, wie sich die Pflegeplanung aendern wuerde",
      ],
      satzanfaengeB1: [
        "Orem passt nicht gut, weil...",
        "Besser waere die Theorie von...",
        "Die Pflege wuerde sich aendern: statt... jetzt...",
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Session-Abschluss (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s5-22",
    phase: "s5",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-103", "Q4 S.119-126"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Zusammenfassung: Pflegetheorien I",
      body: "Du hast die Grundlagen der Pflegewissenschaft und die Beduerfnistheorien kennengelernt. In der naechsten Session geht es um Interaktionstheorien, EBN und Pflegeforschung.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Du kennst jetzt die Grundlagen der Pflegewissenschaft und die Beduerfnistheorien. Naechstes Mal lernst du mehr ueber Pflegeforschung.",
    },
    question: {
      fragetext: "Das sind die wichtigsten Erkenntnisse dieser Session.",
      summary: {
        reflexionRueckbezug: "In Step 2 hast du ueberlegt, was zuverlaessiges Wissen ist. Jetzt weisst du: Forschung und Theorie sind die Basis — nicht Tradition oder Bauchgefuehl.",
        kernaussagen: [
          "Die 4 Schluesselkonzepte der Pflege (Metaparadigma): Person, Umwelt, Wohlbefinden und pflegerisches Handeln.",
          "3 Theorie-Typen: Beduerfnistheorien (Was?), Interaktionstheorien (Wie?), Ergebnistheorien (Warum?).",
          "Orem unterscheidet 3 Pflegesysteme: vollstaendig kompensatorisch, teilkompensatorisch, unterstuetzend-edukativ.",
          "Krohwinkels ABEDL-Modell mit 13 Bereichen ist das verbreitetste Pflegemodell in Deutschland.",
        ],
      },
    },
  },
];
