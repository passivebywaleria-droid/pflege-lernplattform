// Session 6: "Pflege braucht Beweise" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2
// Themen: Evidence-based Nursing (EBN), Pflegetheorien II (Peplau, Leininger, Benner, Corbin/Strauss), Umsetzungsstufen
// Leitfall: Yasemin Demirci — Praxis vs. Theorie (Szene S2)
// Bloom: B2-B4, 22 Steps, ~30 Min
// Interleaving: 10% (2 Fragen aus S1-S5 Stoff)

import type { ContentStep } from "../_types";

export const stepsS6: ContentStep[] = [
  // =============================================================
  // Step 1: Dialog — Yasemin: "Wir machen das immer so" (STORY)
  // =============================================================
  {
    stepId: "le01-s6-01",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.102"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Tradition oder Evidenz?",
      body: "Yasemin beobachtet auf Station eine Diskussion zwischen einer Kollegin und der Praxisanleiterin.",
      fallbezug: "Tag 4 auf Station. Yasemin steht am Verbandswagen und hoert zu.",
    },
    contentB1: {
      title: "Tradition oder Beweis?",
      body: "Yasemin hoert ein Gespraech auf der Station. Es geht um alte Gewohnheiten.",
      fallbezug: "Tag 4. Yasemin steht am Verbandswagen und hoert zu.",
    },
    question: {
      fragetext: "Wie wuerdest du auf die Aussage der Kollegin reagieren?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Kollegin Sabine behandelt eine Wunde mit Rivanol. Praxisanleiterin Frau Mueller kommt dazu.",
          contextB1: "Kollegin Sabine behandelt eine Wunde mit Rivanol. Die Praxisanleiterin kommt dazu.",
          speaker: "Sabine",
          options: [
            {
              text: "Das machen wir hier seit 20 Jahren so. Das hat immer funktioniert.",
              textB1: "Das machen wir seit 20 Jahren so. Das funktioniert.",
              patientResponse: "Frau Mueller: 'Tradition allein reicht nicht. Was sagt die Forschung dazu?'",
              patientResponseB1: "Frau Mueller: 'Nur weil es immer so war, ist es nicht richtig. Was sagt die Forschung?'",
              score: 0,
              feedback: "Sabine stuetzt sich auf Tradition — eine unstrukturierte Wissensquelle, die kritisch hinterfragt werden muss.",
              feedbackB1: "Sabine macht es aus Gewohnheit. Aber Gewohnheit ist kein Beweis.",
            },
          ],
        },
        {
          context: "Frau Mueller wendet sich an Yasemin: 'Was meinst du — reicht Erfahrung als Begruendung fuer eine Pflegemassnahme?'",
          contextB1: "Frau Mueller fragt Yasemin: 'Reicht Erfahrung als Grund fuer eine Pflegemassnahme?'",
          speaker: "Frau Mueller",
          options: [
            {
              text: "Nein, Erfahrung allein reicht nicht. Wir brauchen auch wissenschaftliche Belege.",
              textB1: "Nein, Erfahrung allein reicht nicht. Wir brauchen auch Beweise aus der Forschung.",
              patientResponse: "Frau Mueller nickt: 'Genau. Das nennt man Evidence-based Nursing.'",
              patientResponseB1: "Frau Mueller nickt: 'Genau. Das heisst Evidence-based Nursing — Pflege mit Beweisen.'",
              score: 3,
              feedback: "Richtig. EBN verbindet Forschungsergebnisse mit Erfahrung und den Wuenschen des Patienten.",
              feedbackB1: "Richtig. EBN verbindet Forschung, Erfahrung und die Wuensche des Patienten.",
            },
            {
              text: "Wenn es seit 20 Jahren funktioniert, ist das doch Beweis genug.",
              textB1: "Wenn es seit 20 Jahren klappt, ist das doch gut genug.",
              patientResponse: "Frau Mueller: 'Rivanol wurde frueher oft verwendet. Heute zeigt die Forschung, dass es die Wundheilung eher stoert.'",
              patientResponseB1: "Frau Mueller: 'Rivanol war frueher beliebt. Aber die Forschung zeigt: Es stoert die Heilung.'",
              score: 1,
              feedback: "Tradition ist eine unstrukturierte Wissensquelle. Sie muss durch wissenschaftliche Evidenz ergaenzt werden.",
              feedbackB1: "Tradition allein reicht nicht. Man braucht auch Beweise aus der Forschung.",
            },
            {
              text: "Ich weiss nicht — ich bin ja erst Auszubildende.",
              textB1: "Ich weiss es nicht. Ich lerne ja noch.",
              patientResponse: "Frau Mueller: 'Gerade als Auszubildende darfst du Fragen stellen. Das ist der erste Schritt zu evidenzbasierter Pflege.'",
              patientResponseB1: "Frau Mueller: 'Gerade als Auszubildende darfst du Fragen stellen. Das ist wichtig.'",
              score: 1,
              feedback: "Fragen stellen ist gut. Aber auch Auszubildende koennen Wissensquellen kritisch hinterfragen.",
              feedbackB1: "Fragen stellen ist gut. Aber auch du kannst pruefen, ob etwas stimmt.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: Swipe — Brilliant-Prinzip: Gute Pflege oder Gewohnheit? (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s6-02",
    phase: "s6",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102", "Q3 S.113"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Gute Pflege oder Gewohnheit?",
      body: "Manche Pflegemassnahmen basieren auf Forschung, andere auf Tradition. Nicht alles, was seit Jahren gemacht wird, ist automatisch richtig.",
    },
    contentB1: {
      title: "Gute Pflege oder Gewohnheit?",
      body: "Manche Dinge in der Pflege kommen aus der Forschung. Andere macht man nur aus Gewohnheit.",
    },
    question: {
      fragetext: "Basiert diese Massnahme auf Evidenz oder auf Tradition?",
      swipe: {
        instruction: "Wische nach rechts fuer 'Evidenz' und nach links fuer 'Tradition/Gewohnheit'.",
        cards: [
          {
            statement: "Wunden mit Rivanol behandeln, weil es seit 20 Jahren so gemacht wird.",
            statementB1: "Wunden mit Rivanol behandeln — weil man es seit 20 Jahren so macht.",
            isCorrect: false,
            explanation: "Rivanol wurde frueher haeufig eingesetzt. Aktuelle Forschung zeigt, dass es die Wundheilung eher stoert.",
            explanationB1: "Rivanol war frueher beliebt. Aber die Forschung zeigt: Es stoert die Heilung.",
          },
          {
            statement: "Bettlaegerige Patienten regelmaessig umlagern, um Dekubitus zu verhindern.",
            statementB1: "Patienten im Bett regelmaessig umlagern — gegen Druckgeschwuere.",
            isCorrect: true,
            explanation: "Lagerungswechsel zur Dekubitusprophylaxe ist durch Studien belegt und in Leitlinien empfohlen.",
            explanationB1: "Regelmaessiges Umlagern hilft gegen Druckgeschwuere. Das ist durch Forschung bewiesen.",
          },
          {
            statement: "Patienten nuechtern lassen ab 22 Uhr vor einer OP — egal welcher Eingriff.",
            statementB1: "Patienten duerfen ab 22 Uhr nichts mehr essen vor einer OP — immer.",
            isCorrect: false,
            explanation: "Aktuelle Leitlinien erlauben klare Fluessigkeiten bis 2 Stunden vor der OP. Starres Nuechternhalten ab 22 Uhr ist veraltet.",
            explanationB1: "Neue Regeln erlauben Trinken bis 2 Stunden vor der OP. Die alte Regel ab 22 Uhr ist veraltet.",
          },
          {
            statement: "Oberkörperhochlagerung und Atemübungen zur Pneumonieprophylaxe.",
            statementB1: "Den Oberkoerper hochlagern und Atemuebungen machen — gegen Lungenentzuendung.",
            isCorrect: true,
            explanation: "Atemübungen und Oberkörperhochlagerung sind evidenzbasierte Massnahmen zur Pneumonieprophylaxe.",
            explanationB1: "Atemuebungen und Hochlagern helfen gegen Lungenentzuendung. Das ist bewiesen.",
          },
          {
            statement: "Bettruhe bei Rueckenschmerzen verordnen, weil Schonung gut tut.",
            statementB1: "Bei Rueckenschmerzen im Bett bleiben — weil Ruhe gut tut.",
            isCorrect: false,
            explanation: "Forschung zeigt: Bewegung ist bei Rueckenschmerzen besser als Bettruhe. Schonung verlaengert oft die Beschwerden.",
            explanationB1: "Die Forschung sagt: Bewegung ist besser als Bettruhe bei Rueckenschmerzen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 3: Text — EBN + Pflegeforschung (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-03",
    phase: "s6",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.113", "Q3 S.104-105"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Evidence-based Nursing (EBN)",
      body: "Evidence-based Nursing bedeutet: pflegerisches Handeln auf wissenschaftliche Erkenntnisse stuetzen statt auf Tradition. EBN integriert drei Saeulen: externe Evidenz (Forschungsergebnisse), klinische Expertise (Berufserfahrung) und Patientenpraeferenzen (Wuensche des Pflegeempfaengers). Pflegeforschung arbeitet auf drei Ebenen: Mikro (Pflegepraxis, z.B. Dekubitusprophylaxe), Meso (Organisation, z.B. Primary Nursing) und Makro (Gesundheitssystem, z.B. Auswirkung der Pflegeversicherung).",
    },
    contentB1: {
      title: "Pflege mit Beweisen (EBN)",
      body: "EBN heisst: Pflege soll auf Forschung basieren, nicht auf Gewohnheit. EBN hat drei Teile: Forschungsergebnisse, Berufserfahrung und die Wuensche des Patienten. Pflegeforschung gibt es auf drei Ebenen: klein (am Bett), mittel (auf der Station) und gross (im ganzen Land).",
    },
    wusstestDuDas: "Der Begriff 'Evidence-based Nursing' kommt aus der Medizin. Dort heisst es 'Evidence-based Medicine'. Die Pflege hat das Konzept uebernommen und angepasst.",
  },

  // =============================================================
  // Step 4: Diagram — EBN-Dreiklang (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-04",
    phase: "s6",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.113"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    imageUrl: "/images/le-01/ebn-dreiklang.svg",
    imageAlt: "Flowchart: Drei Saeulen des EBN fuehren zu einer evidenzbasierten Pflegeentscheidung",
    contentC1: {
      title: "Der EBN-Dreiklang",
      body: "Evidenzbasierte Pflege entsteht erst, wenn alle drei Saeulen zusammenwirken. Keine Saule allein reicht aus.",
    },
    contentB1: {
      title: "Die drei Teile von EBN",
      body: "Gute Pflege braucht alle drei Teile zusammen. Ein Teil allein reicht nicht.",
    },
    question: {
      fragetext: "Erkunde die drei Saeulen des EBN und wie sie zusammenwirken.",
      diagram: {
        diagramType: "flowchart",
        instruction: "Die drei Saeulen des Evidence-based Nursing fuehren gemeinsam zur Pflegeentscheidung.",
        nodes: [
          { id: "evidenz", label: "Externe Evidenz", labelB1: "Forschungsergebnisse", highlight: true },
          { id: "expertise", label: "Klinische Expertise", labelB1: "Berufserfahrung" },
          { id: "praeferenz", label: "Patientenpraeferenzen", labelB1: "Wuensche des Patienten" },
          { id: "entscheidung", label: "Evidenzbasierte Pflegeentscheidung", labelB1: "Gute Pflege-Entscheidung", highlight: true },
        ],
        edges: [
          { from: "evidenz", to: "entscheidung", label: "Was sagt die Forschung?" },
          { from: "expertise", to: "entscheidung", label: "Was sagt die Erfahrung?" },
          { from: "praeferenz", to: "entscheidung", label: "Was will der Patient?" },
        ],
        interactive: true,
      },
    },
  },

  // =============================================================
  // Step 5: MC — EBN-Komponente fehlt (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s6-05",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.113", "Q3 S.102"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Fehlende EBN-Saeulen erkennen",
      body: "Eine Pflegefachkraft sagt: 'Rivanol hilft bei Wunden — das mache ich seit 20 Jahren so. Die Patienten beschweren sich nie.'",
      fallbezug: "Yasemin erinnert sich an die Diskussion auf Station.",
    },
    contentB1: {
      title: "Was fehlt bei EBN?",
      body: "Eine Pflegekraft sagt: 'Rivanol hilft bei Wunden. Das mache ich seit 20 Jahren. Kein Patient hat sich beschwert.'",
      fallbezug: "Yasemin denkt an das Gespraech auf Station.",
    },
    question: {
      fragetext: "Welche EBN-Saeuele fehlt in dieser Aussage?",
      optionen: [
        {
          text: "Externe Evidenz — es fehlen Forschungsergebnisse zur Wirksamkeit von Rivanol.",
          isCorrect: true,
          explanation: "Richtig. Die Pflegekraft stuetzt sich nur auf Erfahrung (Expertise) und fehlende Beschwerden (indirekte Praeferenz). Forschungsergebnisse zur Wirksamkeit fehlen.",
          explanationB1: "Richtig. Die Pflegekraft hat nur Erfahrung und keine Beschwerden. Aber die Forschung fehlt.",
        },
        {
          text: "Klinische Expertise — der Pflegekraft fehlt Berufserfahrung.",
          isCorrect: false,
          explanation: "20 Jahre Erfahrung ist viel Expertise. Aber Erfahrung allein ersetzt keine wissenschaftliche Evidenz.",
          explanationB1: "20 Jahre Erfahrung ist viel. Aber Erfahrung allein reicht nicht.",
        },
        {
          text: "Patientenpraeferenzen — sie hat die Patienten nicht gefragt.",
          isCorrect: false,
          explanation: "'Patienten beschweren sich nie' ist keine echte Praeferenzerhebung. Aber die Hauptluecke ist die fehlende Forschung.",
          explanationB1: "'Kein Patient hat sich beschwert' heisst nicht, dass sie gefragt wurden. Aber es fehlt vor allem die Forschung.",
        },
        {
          text: "Alle drei Saeulen fehlen komplett.",
          isCorrect: false,
          explanation: "Klinische Expertise (20 Jahre) ist vorhanden. Auch indirekte Patientenhinweise gibt es. Aber Forschung fehlt.",
          explanationB1: "Nicht alle drei fehlen. Erfahrung ist da. Aber die Forschung fehlt.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: Matching — Forschungsebenen (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s6-06",
    phase: "s6",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.104-105"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Drei Ebenen der Pflegeforschung",
      body: "Pflegeforschung findet auf drei Ebenen statt: Mikro, Meso und Makro. Jede Ebene hat einen anderen Fokus.",
    },
    contentB1: {
      title: "Pflegeforschung auf drei Ebenen",
      body: "Es gibt drei Ebenen in der Pflegeforschung. Jede Ebene schaut auf etwas anderes.",
    },
    question: {
      fragetext: "Ordne jede Forschungsebene dem passenden Beispiel zu.",
      matchingPairs: [
        { left: "Mikro-Ebene", right: "Welche Lagerung verhindert Dekubitus am besten?" },
        { left: "Meso-Ebene", right: "Wie wirkt sich Primary Nursing auf die Patientenzufriedenheit aus?" },
        { left: "Makro-Ebene", right: "Welche Auswirkungen hat die Pflegeversicherung auf die Versorgung?" },
      ],
    },
  },

  // =============================================================
  // Step 7: Text — Peplau, Corbin/Strauss, Leininger (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-07",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-131", "Q4 S.133-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Interaktions- und Ergebnistheorien",
      body: "Peplau beschreibt die Pflegebeziehung als therapeutischen Prozess in 4 Phasen: Orientierung, Identifikation, Nutzung und Abloesung. Die Beziehung selbst hat therapeutische Wirkung. Corbin und Strauss entwickelten das Trajekt-Modell fuer chronische Erkrankungen mit Phasen von der Vorphase bis zum Sterben. Leininger fordert kulturkongruente Pflege: Kultur beeinflusst Gesundheitsverstaendnis, Schmerzerleben und Pflegepraeferenzen.",
    },
    contentB1: {
      title: "Weitere Pflegetheorien",
      body: "Peplau sagt: Die Beziehung zwischen Pflegekraft und Patient heilt. Sie hat 4 Phasen: Kennenlernen, Vertrauen, Hilfe nutzen, Abschied. Corbin und Strauss beschreiben den Verlauf bei chronischen Krankheiten. Leininger sagt: Pflege muss die Kultur des Patienten beachten.",
    },
  },

  // =============================================================
  // Step 8: Flipcard — 4 Theoretiker(innen) (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-08",
    phase: "s6",
    stepType: "flipcard",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-135", "Q12 Lit.verz. Benner 2012"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    imageUrl: "/images/le-01/pflegetheoretiker.svg",
    imageAlt: "Vier Karten mit den Pflegetheoretikern Peplau, Corbin/Strauss, Leininger und Benner",
    contentC1: {
      title: "Vier Pflegetheoretiker(innen)",
      body: "Jede Karte zeigt eine Theoretikerin mit ihrer Kernidee. Decke die Karten auf und praege dir die Schluesselbegriffe ein.",
    },
    contentB1: {
      title: "Vier Pflegetheoretiker",
      body: "Jede Karte zeigt eine Theoretikerin. Drehe die Karten um und merke dir die wichtigsten Woerter.",
    },
    question: {
      fragetext: "Decke jede Karte auf und merke dir das Schluessselwort.",
      flipcard: {
        instruction: "Tippe auf eine Karte, um die Kernidee zu sehen.",
        cards: [
          {
            front: "Hildegard Peplau (1952)",
            back: "Interpersonale Beziehung: Die Pflegebeziehung selbst hat therapeutische Wirkung. 4 Phasen: Orientierung, Identifikation, Nutzung, Abloesung.",
            backB1: "Die Beziehung heilt. 4 Phasen: Kennenlernen, Vertrauen, Hilfe nutzen, Abschied nehmen.",
            category: "Interaktionstheorie",
          },
          {
            front: "Corbin & Strauss",
            back: "Trajekt-Modell: Chronische Erkrankungen verlaufen in Phasen (Vorphase, Diagnose, stabil, instabil, Krise, Erholung, Verfall). Pflege begleitet alle Phasen.",
            backB1: "Chronische Krankheiten haben Phasen: stabil, instabil, Krise, Erholung. Pflege begleitet alle Phasen.",
            category: "Ergebnistheorie",
          },
          {
            front: "Madeleine Leininger",
            back: "Kulturkongruente Pflege (Sunrise-Modell): Kultur beeinflusst Gesundheitsverstaendnis, Schmerzerleben und Pflegepraeferenzen.",
            backB1: "Pflege muss die Kultur des Patienten beachten. Kultur beeinflusst, wie Menschen Schmerz und Krankheit erleben.",
            category: "Ergebnistheorie",
          },
          {
            front: "Patricia Benner (1984)",
            back: "Vom Neuling zur Expertin: 5 Stufen der Pflegekompetenz. Der Weg braucht Jahre praktischer Erfahrung.",
            backB1: "5 Stufen: Neuling, Anfaengerin, Kompetente, Erfahrene, Expertin. Man braucht viele Jahre Praxis.",
            category: "Kompetenzentwicklung",
          },
        ],
        shuffled: true,
      },
    },
  },

  // =============================================================
  // Step 9: Timeline — Pflegetheorien historisch (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-09",
    phase: "s6",
    stepType: "timeline",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.21", "Q4 S.119-135", "Q12 Kap.3.1", "Q12 Lit.verz. Benner 2012"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    imageUrl: "/images/le-01/timeline-theorien.svg",
    imageAlt: "Zeitleiste der wichtigsten Pflegetheorien von 1859 bis heute",
    contentC1: {
      title: "Pflegetheorien im Ueberblick",
      body: "Die Pflegetheorie hat sich ueber mehr als 100 Jahre entwickelt. Von Nightingale bis Benner — jede Generation hat neue Perspektiven eingebracht.",
    },
    contentB1: {
      title: "Pflegetheorien auf einem Zeitstrahl",
      body: "Die Pflegetheorie hat sich ueber 100 Jahre entwickelt. Jede Theoretikerin hat etwas Neues beigetragen.",
    },
    question: {
      fragetext: "Erkunde die Entwicklung der Pflegetheorien.",
      timeline: {
        instruction: "Scrolle durch die Zeitleiste und entdecke, wie sich die Pflegetheorie entwickelt hat.",
        events: [
          {
            id: "nightingale",
            time: "1859",
            title: "Florence Nightingale",
            description: "Notes on Nursing — Begruenderin der modernen Krankenpflege.",
            descriptionB1: "Erstes Pflegebuch. Nightingale gruendete die moderne Pflege.",
          },
          {
            id: "henderson",
            time: "1950er",
            title: "Virginia Henderson",
            description: "14 Grundbeduerfnisse des Menschen als Basis der Pflege.",
            descriptionB1: "14 Grundbeduerfnisse: Was braucht ein Mensch?",
          },
          {
            id: "peplau",
            time: "1952",
            title: "Hildegard Peplau",
            description: "Interpersonale Beziehungstheorie — die Pflegebeziehung heilt.",
            descriptionB1: "Die Beziehung zwischen Pflegekraft und Patient heilt.",
            highlight: true,
          },
          {
            id: "orem",
            time: "1971",
            title: "Dorothea Orem",
            description: "Selbstpflege-Defizit-Theorie mit 3 Teiltheorien.",
            descriptionB1: "Pflege hilft, wenn Menschen sich nicht selbst versorgen koennen.",
          },
          {
            id: "krohwinkel",
            time: "1980er",
            title: "Monika Krohwinkel",
            description: "ABEDL-Modell — 13 Lebensbereiche. Basis vieler Pflegeplanungen in Deutschland.",
            descriptionB1: "13 Lebensbereiche (ABEDL). Wird in Deutschland am meisten benutzt.",
          },
          {
            id: "benner",
            time: "1984",
            title: "Patricia Benner",
            description: "From Novice to Expert — 5 Stufen der Pflegekompetenz.",
            descriptionB1: "5 Stufen: vom Neuling zur Expertin.",
            highlight: true,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: TrueFalse — Pflegetheorien pruefen (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s6-10",
    phase: "s6",
    stepType: "truefalse",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-135"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Pflegetheorien — Stimmt das?",
      body: "Pruefe dein Verstaendnis der Interaktions- und Ergebnistheorien.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Pruefe, was du ueber die Pflegetheorien gelernt hast.",
    },
    question: {
      fragetext: "Entscheide: Stimmt die Aussage oder nicht?",
      trueFalseCards: [
        {
          statement: "Peplau sagt, die Pflegebeziehung selbst hat therapeutische Wirkung.",
          isTrue: true,
          explanation: "Richtig. Bei Peplau ist die Beziehung zwischen Pflegekraft und Patient der zentrale Heilfaktor.",
        },
        {
          statement: "Leininger fordert, alle kulturellen Praktiken des Patienten unkritisch zu uebernehmen.",
          isTrue: false,
          explanation: "Falsch. Kulturkongruente Pflege bedeutet, kulturelle Besonderheiten zu beruecksichtigen — nicht, schaedliche Praktiken kritiklos zu akzeptieren.",
        },
        {
          statement: "Das Trajekt-Modell von Corbin und Strauss beschreibt den Verlauf chronischer Erkrankungen in Phasen.",
          isTrue: true,
          explanation: "Richtig. Das Modell beschreibt Phasen wie Vorphase, Diagnose, stabil, instabil, Krise, Erholung und Verfall.",
        },
        {
          statement: "Benner sagt, eine Expertin in der Pflege braucht keine Regeln mehr — sie handelt intuitiv richtig.",
          isTrue: true,
          explanation: "Richtig. Auf Stufe 5 (Expertin) handelt die Pflegekraft intuitiv-richtig, basierend auf jahrelanger Erfahrung.",
        },
      ],
    },
  },

  // =============================================================
  // Step 11: Sequencing — Peplaus 4 Phasen (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s6-11",
    phase: "s6",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-129"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Peplaus 4 Beziehungsphasen",
      body: "Peplau beschreibt die therapeutische Pflegebeziehung als Prozess mit einer klaren Reihenfolge.",
    },
    contentB1: {
      title: "Die 4 Phasen nach Peplau",
      body: "Die Pflegebeziehung nach Peplau hat 4 Schritte. Die Reihenfolge ist wichtig.",
    },
    question: {
      fragetext: "Bringe Peplaus 4 Phasen in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Sortiere die Phasen von Anfang bis Ende der Pflegebeziehung.",
        items: [
          { id: "orientierung", label: "Orientierung — Patient und Pflegekraft lernen sich kennen" },
          { id: "identifikation", label: "Identifikation — Vertrauen wird aufgebaut" },
          { id: "nutzung", label: "Nutzung — Patient nutzt die angebotene Hilfe" },
          { id: "abloesung", label: "Abloesung — Beziehung wird professionell beendet" },
        ],
      },
    },
  },

  // =============================================================
  // Step 12: Dialog — Yasemin und Herr Brenner (STORY)
  // =============================================================
  {
    stepId: "le01-s6-12",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-129"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Peplaus Phasen im Alltag",
      body: "Yasemin erzaehlt ihrer Dozentin von ihrer Erfahrung mit Herr Brenner.",
      fallbezug: "Freitag, Reflexionsgespraech. Yasemin denkt an ihre Woche zurueck.",
    },
    contentB1: {
      title: "Peplaus Phasen bei Yasemin",
      body: "Yasemin erzaehlt ihrer Dozentin von Herr Brenner.",
      fallbezug: "Freitag, Reflexionsgespraech. Yasemin denkt an ihre Woche.",
    },
    question: {
      fragetext: "In welcher Phase nach Peplau befindet sich Yasemins Beziehung zu Herr Brenner?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin: 'Am Anfang hat Herr Brenner kaum geredet. Jetzt erzaehlt er mir von seiner Frau.'",
          contextB1: "Yasemin: 'Am Anfang hat Herr Brenner nicht gesprochen. Jetzt erzaehlt er mir viel.'",
          speaker: "Yasemin",
          options: [
            {
              text: "Das klingt nach dem Uebergang von Orientierung zu Identifikation — er baut Vertrauen auf.",
              textB1: "Er baut Vertrauen auf. Das ist Phase 2: Identifikation.",
              patientResponse: "Dozentin: 'Genau. Die Orientierungsphase ist vorbei. Jetzt beginnt er, dir zu vertrauen.'",
              patientResponseB1: "Dozentin: 'Richtig! Er lernt dir zu vertrauen. Das ist Phase 2.'",
              score: 3,
              feedback: "Richtig. Der Uebergang von Orientierung (Kennenlernen) zu Identifikation (Vertrauensaufbau) zeigt sich darin, dass der Patient sich oeffnet.",
              feedbackB1: "Richtig! Erst lernt man sich kennen (Phase 1). Dann baut man Vertrauen auf (Phase 2).",
            },
            {
              text: "Er ist in der Nutzungsphase — er nutzt Yasemin als Zuhoererin.",
              textB1: "Er nutzt Yasemin zum Zuhoeren. Das ist Phase 3.",
              patientResponse: "Dozentin: 'Fast. Er erzaehlt zwar, aber er nutzt noch keine konkreten Hilfsangebote.'",
              patientResponseB1: "Dozentin: 'Fast. Aber er nutzt noch keine richtige Hilfe — er erzaehlt nur.'",
              score: 1,
              feedback: "Die Nutzungsphase beginnt erst, wenn der Patient aktiv Hilfsangebote in Anspruch nimmt — nicht nur erzaehlt.",
              feedbackB1: "Phase 3 beginnt erst, wenn der Patient aktiv Hilfe annimmt.",
            },
          ],
        },
        {
          context: "Dozentin: 'Und was muss passieren, bevor Herr Brenner entlassen wird?'",
          contextB1: "Dozentin: 'Was muss passieren, bevor Herr Brenner nach Hause geht?'",
          speaker: "Dozentin",
          options: [
            {
              text: "Die Abloesungsphase: Wir muessen die Beziehung professionell beenden und ihn auf die Entlassung vorbereiten.",
              textB1: "Wir muessen die Beziehung beenden. Herr Brenner muss sich verabschieden koennen.",
              patientResponse: "Dozentin: 'Genau. Abloesung ist wichtig. Sonst fuehlt sich der Patient verlassen.'",
              patientResponseB1: "Dozentin: 'Richtig. Ohne Abschied fuehlt sich der Patient allein gelassen.'",
              score: 3,
              feedback: "Richtig. Die Abloesungsphase ist essenziell fuer einen guten Uebergang. Ohne sie entsteht das Gefuehl des Verlassenwerdens.",
              feedbackB1: "Richtig. Man muss sich gut verabschieden. Sonst fuehlt der Patient sich allein.",
            },
            {
              text: "Wir muessen einfach sagen: 'Sie koennen jetzt gehen.'",
              textB1: "Wir sagen: 'Sie koennen jetzt gehen.'",
              patientResponse: "Dozentin: 'Das waere zu abrupt. Nach Peplau braucht die Abloesung Zeit und Vorbereitung.'",
              patientResponseB1: "Dozentin: 'Das ist zu schnell. Der Abschied braucht Zeit.'",
              score: 0,
              feedback: "Eine abrupte Beendigung kann beim Patienten Gefuehle der Zurueckweisung ausloesen. Abloesung muss vorbereitet werden.",
              feedbackB1: "Zu schnell. Der Patient braucht Zeit fuer den Abschied.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 13: Reveal — 4 Umsetzungsstufen (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-13",
    phase: "s6",
    stepType: "reveal",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.117-119"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Von der Theorie zur Praxis",
      body: "Pflegetheorien werden ueber 4 Stufen in die Praxis umgesetzt. Jede Stufe wird konkreter.",
    },
    contentB1: {
      title: "Theorie wird Praxis",
      body: "Pflegetheorien kommen in 4 Schritten in die Praxis. Jeder Schritt wird konkreter.",
    },
    question: {
      fragetext: "Decke die 4 Umsetzungsstufen der Reihe nach auf.",
      reveal: {
        instruction: "Entdecke die 4 Stufen von der abstrakten Theorie bis zum konkreten Handeln.",
        revealMode: "sequential",
        cards: [
          {
            id: "grand",
            label: "Stufe 1: Pflegetheorie (Grand Theory)",
            content: "Abstrakte, uebergreifende Aussagen ueber Pflege. Z.B. Orems Gesamttheorie der Selbstpflege.",
            contentB1: "Grosse, allgemeine Aussagen ueber Pflege. Z.B. Orems Theorie.",
            icon: "BookOpen",
          },
          {
            id: "modell",
            label: "Stufe 2: Pflegemodell",
            content: "Vereinfachte, praxisnaehere Darstellung. Z.B. Selbstpflege-Defizit-Modell mit 3 Pflegesystemen.",
            contentB1: "Ein Modell, das zeigt, wie man pflegen soll. Naeer an der Praxis.",
            icon: "Layout",
          },
          {
            id: "leitbild",
            label: "Stufe 3: Pflegeleitbild",
            content: "Einrichtungsspezifisch: Wie setzt unsere Station die Theorie um? Was ist unser Pflegeverstaendnis?",
            contentB1: "Jede Station hat ein eigenes Leitbild: 'So pflegen wir hier.'",
            icon: "Building",
          },
          {
            id: "konzept",
            label: "Stufe 4: Pflegekonzept",
            content: "Verbindlich, handlungsleitend, ueberpruefbar. Konkretes Konzept fuer die taegliche Praxis.",
            contentB1: "Konkrete Regeln fuer den Alltag: Was genau machen wir wann?",
            icon: "ClipboardCheck",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: Cloze — Umsetzungsstufen (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s6-14",
    phase: "s6",
    stepType: "cloze",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.117-118"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Umsetzungsstufen ergaenzen",
      body: "Pflegetheorien werden ueber 4 Stufen umgesetzt, die immer konkreter werden.",
    },
    contentB1: {
      title: "Fuell die Luecken",
      body: "Die 4 Stufen werden immer konkreter. Fuelle die Luecken.",
    },
    question: {
      fragetext: "Ergaenze die fehlenden Stufen in der richtigen Reihenfolge.",
      cloze: {
        textWithBlanks: "Pflegetheorien werden ueber 4 Stufen umgesetzt: {{1}} → Pflegemodell → {{2}} → Pflegekonzept.",
        blanks: [
          {
            id: 1,
            correct: "Pflegetheorie (Grand Theory)",
            distractors: ["Pflegeleitbild", "Pflegediagnose"],
          },
          {
            id: 2,
            correct: "Pflegeleitbild",
            distractors: ["Pflegeprozess", "Pflegestandard"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 15: Comparison — Orem vs. Peplau (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-15",
    phase: "s6",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122", "Q4 S.128-129"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    imageUrl: "/images/le-01/orem-vs-peplau.svg",
    imageAlt: "Vergleichstabelle: Orem und Peplau nebeneinander",
    contentC1: {
      title: "Orem und Peplau im Vergleich",
      body: "Beide Theorien betrachten Pflege aus unterschiedlichen Perspektiven. Der Vergleich zeigt die Kernunterschiede.",
    },
    contentB1: {
      title: "Orem und Peplau vergleichen",
      body: "Beide Theorien sehen Pflege anders. Vergleiche die wichtigsten Unterschiede.",
    },
    question: {
      fragetext: "Vergleiche die zentralen Aspekte beider Theorien.",
      comparison: {
        instruction: "Schau dir die Unterschiede zwischen Orem und Peplau an.",
        columns: [
          { label: "Kriterium", icon: "HelpCircle" },
          { label: "Orem", icon: "User" },
          { label: "Peplau", icon: "Heart" },
        ],
        rows: [
          {
            criterion: "Theorietyp",
            values: ["Beduerfnistheorie", "Interaktionstheorie"],
            valuesB1: ["Was braucht der Patient?", "Wie hilft die Beziehung?"],
          },
          {
            criterion: "Mittelpunkt",
            values: ["Selbstpflege des Patienten", "Therapeutische Beziehung"],
            valuesB1: ["Der Patient sorgt fuer sich selbst", "Die Beziehung heilt"],
            highlight: 0,
          },
          {
            criterion: "Kernfrage",
            values: ["Was kann der Patient selbst?", "Wie wirkt die Beziehung?"],
            valuesB1: ["Was kann der Patient allein?", "Wie hilft die Beziehung?"],
          },
          {
            criterion: "Geeignet fuer",
            values: ["Chronisch Kranke, Reha, Pflegeheim", "Psychiatrie, Krisensituationen"],
            valuesB1: ["Langzeitpflege, Reha", "Psychiatrie, Krisen"],
          },
          {
            criterion: "Pflegerolle",
            values: ["Kompensiert Defizite, leitet an", "Baut Beziehung auf, begleitet"],
            valuesB1: ["Hilft bei dem, was fehlt", "Baut eine heilende Beziehung auf"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 16: Crossword — Fachbegriffe (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s6-16",
    phase: "s6",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.113", "Q4 S.128-135", "Q12 Lit.verz. Benner 2012"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Kreuzwortraetsel: Session 6",
      body: "Teste dein Wissen zu EBN und Pflegetheorien.",
    },
    contentB1: {
      title: "Kreuzwortraetsel",
      body: "Teste dein Wissen zu EBN und Pflegetheorien.",
    },
    question: {
      fragetext: "Finde die 6 Begriffe aus dieser Session.",
      crosswordWords: [
        { word: "EVIDENZ", clue: "Wissenschaftlicher Beweis als Grundlage fuer Pflegeentscheidungen" },
        { word: "PEPLAU", clue: "Pflegetheoretikerin: Die Beziehung heilt (4 Phasen)" },
        { word: "TRAJEKT", clue: "Verlaufsmodell chronischer Erkrankungen nach Corbin und Strauss" },
        { word: "LEININGER", clue: "Sunrise-Modell: Pflege muss die Kultur beachten" },
        { word: "MIKRO", clue: "Forschungsebene am Patientenbett (z.B. Dekubitusprophylaxe)" },
        { word: "EXPERTIN", clue: "Hoechste Stufe nach Benner: handelt intuitiv-richtig" },
      ],
    },
  },

  // =============================================================
  // Step 17: Timer — Speed-Fragen mit Interleaving (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s6-17",
    phase: "s6",
    stepType: "timer",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-129", "Q4 S.120-122", "Q2 S.78-79", "Q7 S.285"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Speed-Runde",
      body: "4 schnelle Fragen. 2 zu Pflegetheorien, 1 zum Pflegeprozess und 1 zur Ethik.",
    },
    contentB1: {
      title: "Schnelle Fragen",
      body: "4 schnelle Fragen. Manche kommen aus frueheren Sessions.",
    },
    question: {
      fragetext: "Beantworte jede Frage in 15 Sekunden.",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Was ist Peplaus Kernaussage?",
          options: [
            "Der Patient soll sich selbst pflegen",
            "Die Pflegebeziehung hat therapeutische Wirkung",
            "Pflege muss kulturell angepasst sein",
          ],
          correctIndex: 1,
        },
        {
          question: "Wie viele Pflegesysteme unterscheidet Orem?",
          options: ["2", "3", "4"],
          correctIndex: 1,
        },
        {
          question: "INTERLEAVING: Wie viele Schritte hat der Pflegeprozess nach Fiechter und Meier?",
          options: ["4", "5", "6"],
          correctIndex: 2,
        },
        {
          question: "INTERLEAVING: Welches ethische Prinzip schuetzt das Recht auf Selbstbestimmung?",
          options: ["Benefizienz", "Autonomie", "Gerechtigkeit"],
          correctIndex: 1,
        },
      ],
    },
  },

  // =============================================================
  // Step 18: Text — Benner: Novize zur Expertin (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s6-18",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q12 Lit.verz. Benner 2012", "Q3 S.106-108"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    contentC1: {
      title: "Vom Neuling zur Expertin",
      body: "Patricia Benner beschrieb 5 Stufen der Pflegekompetenz: Neuling (regelgeleitet), fortgeschrittene Anfaengerin (erkennt Situationsmuster), kompetente Pflegende (setzt Prioritaeten), erfahrene Pflegende (erfasst Situationen ganzheitlich) und Expertin (handelt intuitiv-richtig). Yasemin steht am Anfang — sie ist noch Neuling. Pflegeforschung unterscheidet quantitative (Zahlen, Statistik) und qualitative Ansaetze (Verstehen, Bedeutung). Beide haben ihren Platz.",
      fallbezug: "Yasemin fragt sich: 'Wann werde ich Expertin sein?'",
    },
    contentB1: {
      title: "5 Stufen in der Pflege",
      body: "Benner beschreibt 5 Stufen: Neuling, Anfaengerin, Kompetente, Erfahrene, Expertin. Yasemin ist noch Neuling — das ist normal am Anfang. In der Forschung gibt es zwei Arten: mit Zahlen (quantitativ) und durch Verstehen (qualitativ). Beide sind wichtig.",
      fallbezug: "Yasemin fragt: 'Wann werde ich Expertin?'",
    },
    wusstestDuDas: "Laut Benner braucht man mindestens 5-7 Jahre praktische Erfahrung, um von der kompetenten Pflegenden zur Expertin zu werden.",
  },

  // =============================================================
  // Step 19: Branching — Welche Theorie fuer die Station? (PRAXIS-SIM)
  // =============================================================
  {
    stepId: "le01-s6-19",
    phase: "s6",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.118", "Q4 S.120-122", "Q4 S.128-129"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Theorie-Entscheidung im Team",
      body: "Das Pflegeteam diskutiert, welche Pflegetheorie auf der Station gelten soll. Eine Kollegin plaediert fuer Orem, eine andere fuer Peplau.",
      fallbezug: "Yasemin hoert bei der Teamsitzung zu und wird nach ihrer Meinung gefragt.",
    },
    contentB1: {
      title: "Welche Theorie passt?",
      body: "Das Team diskutiert: Welche Theorie fuer die Station? Eine Kollegin will Orem, eine andere Peplau.",
      fallbezug: "Yasemin wird gefragt: Was meinst du?",
    },
    question: {
      fragetext: "Das Team fragt dich: Welche Theorie passt besser fuer eine internistische Station mit vielen aelteren, chronisch kranken Patienten?",
      branchingOptions: [
        {
          text: "Orem — weil die meisten Patienten Unterstuetzung bei der Selbstpflege brauchen und wir mit vollstaendig/teilkompensatorisch/edukativ planen koennen.",
          feedback: "Gute Argumentation. Orem passt gut fuer chronisch Kranke, weil die Selbstpflege-Defizite klar erfasst und kompensiert werden koennen. Die 3 Pflegesysteme helfen bei der Planung.",
          feedbackB1: "Gute Antwort. Orem passt gut fuer chronisch Kranke. Die 3 Pflegesysteme helfen bei der Planung.",
          isCorrect: true,
        },
        {
          text: "Peplau — weil die therapeutische Beziehung bei allen Patienten wichtig ist.",
          feedback: "Peplau ist wertvoll, aber primaer fuer Settings mit Beziehungsarbeit im Fokus (Psychiatrie, Krisenintervention). Auf einer internistischen Station mit vielen Patienten und kurzer Verweildauer ist Orem oft praktikabler.",
          feedbackB1: "Peplau ist gut fuer die Beziehung. Aber auf einer Station mit vielen Patienten ist Orem oft praktischer.",
          isCorrect: false,
        },
        {
          text: "Keine Theorie — Theorien sind nur fuer die Schule, nicht fuer die Praxis.",
          feedback: "Pflegetheorien sind keine reine Schultheorie. Sie geben der Praxis Struktur und Begruendung. Ohne Theorie fehlt die wissenschaftliche Basis fuer pflegerische Entscheidungen.",
          feedbackB1: "Pflegetheorien sind nicht nur fuer die Schule. Sie helfen auch in der Praxis — sie geben Struktur.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 20: Reflection — OQ5: Orem vs. Peplau (SCHREIBTISCH)
  // =============================================================
  {
    stepId: "le01-s6-20",
    phase: "s6",
    stepType: "reflection",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.120-122", "Q4 S.128-129"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Theorien vergleichen und zuordnen",
      body: "Orem stellt die Selbstpflege in den Mittelpunkt. Peplau sieht die therapeutische Beziehung als Kern. Beide Perspektiven haben ihre Berechtigung — aber nicht fuer jeden Patienten passt dieselbe Theorie.",
    },
    contentB1: {
      title: "Theorien vergleichen",
      body: "Orem: Der Patient soll sich selbst pflegen. Peplau: Die Beziehung heilt. Beide Ideen sind wichtig. Aber nicht jede Theorie passt zu jedem Patienten.",
    },
    question: {
      fragetext: "Vergleiche Orem und Peplau: Was steht jeweils im Mittelpunkt? Fuer welchen Patienten waere welche Theorie besser geeignet?",
      musterantwort: "Orem (Beduerfnistheorie): Im Mittelpunkt steht die Selbstpflege. Pflege kompensiert Defizite, wenn der Patient nicht selbst fuer sich sorgen kann. Geeignet z.B. fuer chronisch Kranke, die Anleitung zur Selbstpflege brauchen. Peplau (Interaktionstheorie): Im Mittelpunkt steht die Beziehung. Die Pflegebeziehung selbst hat therapeutische Wirkung. Geeignet z.B. fuer psychiatrische Patienten oder Menschen in Krisensituationen.",
      bewertungskriterien: [
        "Schwerpunkte korrekt unterschieden (Selbstpflege vs. Beziehung)",
        "Jeweilige Zielgruppe oder Patientenbeispiel benannt",
        "Begruendung logisch und nachvollziehbar",
      ],
      satzanfaengeB1: [
        "Bei Orem geht es vor allem um...",
        "Peplau sagt dagegen, dass...",
        "Orem passt gut fuer Patienten, die...",
        "Peplau passt besser, wenn...",
      ],
      reflection: {
        prompt: "Vergleiche Orem und Peplau: Was steht jeweils im Mittelpunkt? Fuer welchen Patienten waere welche Theorie besser geeignet?",
        placeholder: "Bei Orem geht es vor allem um...",
        systemPrompt: "Bewerte die Antwort anhand folgender Kriterien: 1) Schwerpunkte korrekt unterschieden (Orem=Selbstpflege, Peplau=therapeutische Beziehung), 2) Patientenbeispiel oder Zielgruppe benannt, 3) Begruendung logisch. Sandwich-Prinzip: Lobe, korrigiere, ermutige. Max 4 Saetze.",
      },
    },
  },

  // =============================================================
  // Step 21: Confidence — Selbsteinschaetzung (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s6-21",
    phase: "s6",
    stepType: "confidence",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Wie sicher bist du jetzt?",
      body: "Schaetze dein Wissen zu EBN und Pflegetheorien ein.",
    },
    contentB1: {
      title: "Was kannst du jetzt?",
      body: "Schaetze dein Wissen ein. Sei ehrlich mit dir.",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich bei diesen Aussagen?",
      confidenceCards: [
        {
          statement: "Ich kann erklaeren, was Evidence-based Nursing (EBN) bedeutet.",
          statementB1: "Ich kann erklaeren, was EBN (Pflege mit Beweisen) ist.",
          isTrue: true,
          explanation: "EBN = externe Evidenz + klinische Expertise + Patientenpraeferenzen.",
          explanationB1: "EBN = Forschung + Erfahrung + Wuensche des Patienten.",
        },
        {
          statement: "Ich kenne die 4 Phasen nach Peplau.",
          statementB1: "Ich kenne die 4 Phasen von Peplau.",
          isTrue: true,
          explanation: "Orientierung → Identifikation → Nutzung → Abloesung.",
          explanationB1: "Kennenlernen → Vertrauen → Hilfe nutzen → Abschied.",
        },
        {
          statement: "Ich kann Orem und Peplau unterscheiden.",
          statementB1: "Ich kann Orem und Peplau auseinanderhalten.",
          isTrue: true,
          explanation: "Orem = Selbstpflege (Was kann der Patient?). Peplau = Beziehung (Wie hilft die Beziehung?).",
          explanationB1: "Orem: Was kann der Patient selbst? Peplau: Wie hilft die Beziehung?",
        },
        {
          statement: "Ich weiss, was Benner mit 'Novize bis Expertin' meint.",
          statementB1: "Ich verstehe Benners 5 Stufen.",
          isTrue: true,
          explanation: "5 Stufen: Neuling, fortgeschrittene Anfaengerin, kompetent, erfahren, Expertin.",
          explanationB1: "5 Stufen: Neuling, Anfaengerin, Kompetente, Erfahrene, Expertin.",
        },
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Session-Abschluss (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s6-22",
    phase: "s6",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.113", "Q4 S.128-135", "Q12 Lit.verz. Benner 2012"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegetheorien",
    contentC1: {
      title: "Session 6: Das Wichtigste",
      body: "Pflege braucht Beweise — nicht nur Tradition. EBN, Peplau, Leininger und Benner geben der Praxis eine wissenschaftliche Grundlage.",
      fallbezug: "Yasemin versteht jetzt: Gute Pflege basiert auf Forschung, nicht auf 'Das machen wir immer so.'",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Gute Pflege braucht Beweise aus der Forschung. Nicht nur Gewohnheit.",
      fallbezug: "Yasemin weiss jetzt: Gute Pflege braucht Forschung, nicht nur Gewohnheit.",
    },
    question: {
      fragetext: "Hier sind die 4 wichtigsten Punkte dieser Session.",
      summary: {
        reflexionRueckbezug: "In Step 2 hast du Pflege-Handlungen als 'Evidenz' oder 'Gewohnheit' eingeschaetzt. Jetzt weisst du, warum der Unterschied so wichtig ist.",
        kernaussagen: [
          "EBN statt Tradition: Pflegerisches Handeln muss auf Forschung, Erfahrung und Patientenwuenschen basieren — nicht auf Gewohnheit.",
          "Peplau: Die Pflegebeziehung hat 4 Phasen und therapeutische Wirkung. Die Beziehung selbst heilt.",
          "Leininger: Pflege muss die Kultur des Patienten beruecksichtigen — aber kulturelle Praktiken kritisch reflektieren.",
          "Benner: Vom Neuling zur Expertin in 5 Stufen. Der Weg braucht Jahre — und das ist normal.",
        ],
      },
    },
  },
];
