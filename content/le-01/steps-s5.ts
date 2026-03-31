// Session 5: "Pflege denken" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB9: Pflegetheorien Bedürfnis (KB-V, F38, F48, F40-F42) + TB10: Interaktionstheorien (KB-V, F43, F49, F39, F44-F45)
// Leitfall: Yasemin Demirci — Theorieblock (Szene S5)
// Bloom: B2-B4, 22 Steps, ~30 Min
// Interleaving: 10% (1x Ethik + 1x Kommunikation)

import type { ContentStep } from "../_types";

export const STEPS_S5: ContentStep[] = [
  // =============================================================
  // Session-Bookend: Vorwissen aktivieren
  // =============================================================
  {
    stepId: "le01-s5-bk-01",
    phase: "s5",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Dein Wissensstand",
      body: "Schätze dich ein: Was weißt du über Pflegetheorien?",
    },
    contentB1: {
      title: "Was weißt du schon?",
      body: "Was weißt du über Pflegetheorien? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich weiß, was ein Pflegemodell ist.",
        "Ich kann mindestens eine Pflegetheoretikerin nennen.",
        "Ich kenne den Unterschied zwischen Bedürfnis- und Interaktionstheorien.",
        "Ich weiß, was das Metaparadigma der Pflege ist.",
      ],
    },
  },

  // =============================================================
  // TB9: BRÜCKE — Rückblick
  // =============================================================
  {
    stepId: "le01-s5-tb9-01",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "BRÜCKE",
    contentC1: {
      title: "Von der Praxis zur Theorie",
      body: "Du weißt jetzt WAS Pflege ist (S1), WIE sie systematisch geplant wird (S2), WIE man kommuniziert (S3) und WELCHE ethischen Prinzipien gelten (S4).\n\nHeute: **WARUM** gibt es verschiedene Pflegetheorien? Und welche passt wann?\n\nPflegetheorien sind keine trockene Theorie — sie bestimmen, wie du Patienten siehst und was du als Problem erkennst.",
    },
    contentB1: {
      title: "Warum Pflegetheorien?",
      body: "Du weißt schon: Was ist Pflege? Wie plant man Pflege? Wie spricht man mit Patienten?\n\nHeute: **Warum gibt es verschiedene Pflegetheorien?** Und welche passt wann?\n\nTheorien helfen dir zu entscheiden, was wichtig ist.",
    },
  },

  // =============================================================
  // TB9: SZENE — Yasemin im Theorieblock
  // =============================================================
  {
    stepId: "le01-s5-tb9-02",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Der Theorieblock",
      body: "Yasemin sitzt im Theorieblock. Auf der Tafel stehen Namen: Henderson, Orem, Krohwinkel, Peplau.",
    },
    contentB1: {
      title: "Im Unterricht",
      body: "Yasemin ist im Unterricht. An der Tafel stehen viele Namen.",
    },
    question: {
      fragetext: "Yasemin im Theorieblock:",
      dialogLines: [
        { speaker: "Yasemin", text: "Henderson, Orem, Krohwinkel — welche Theorie ist denn die richtige?" },
        { speaker: "Dozentin", text: "Keine ist die richtige. Jede betont etwas anderes. Das ist der Punkt." },
        { speaker: "Yasemin", text: "Aber auf Station arbeiten wir doch alle gleich?" },
        { speaker: "Dozentin", text: "Nicht ganz. Die Theorie bestimmt, was du als Problem siehst — und was du übersiehst." },
      ],
    },
  },

  // =============================================================
  // TB9: ERKLÄRUNG — Metaparadigma + Henderson
  // =============================================================
  {
    stepId: "le01-s5-tb9-03",
    phase: "s5",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-121", "Q8 S.321-325"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/metaparadigma.svg",
    imageAlt: "Grafik: Metaparadigma der Pflege — Person, Umgebung, Gesundheit, Pflege",
    contentC1: {
      title: "Das Metaparadigma der Pflege",
      body: "Alle Pflegetheorien drehen sich um 4 zentrale Konzepte — das **Metaparadigma**:\n\n1. **Person** — Der Mensch mit seinen Bedürfnissen, Ressourcen und Problemen\n2. **Umgebung** — Alles was den Menschen umgibt (Familie, Kultur, Setting)\n3. **Gesundheit** — Nicht nur Abwesenheit von Krankheit, sondern Wohlbefinden\n4. **Pflege** — Das pflegerische Handeln, Ziele und Methoden\n\nJede Theoretikerin gewichtet diese 4 Konzepte anders.\n\n**Virginia Henderson** (1897-1996) definierte **14 Grundbedürfnisse** — von Atmen über Essen bis Lernen und Sinn finden. Pflege hilft, wenn der Mensch diese nicht selbst erfüllen kann.",
      fallbezug: "Yasemin merkt: Henderson erklärt, warum sie auf Station so viele verschiedene Dinge gleichzeitig beachten muss.",
    },
    contentB1: {
      title: "4 Themen der Pflege",
      body: "Alle Pflegetheorien drehen sich um 4 Themen:\n\n1. **Mensch** — Was braucht der Patient?\n2. **Umgebung** — Was ist um den Patienten herum?\n3. **Gesundheit** — Wie gesund ist der Patient?\n4. **Pflege** — Was machen Pflegende?\n\n**Virginia Henderson** hat 14 Grundbedürfnisse beschrieben: Atmen, Essen, Trinken, Schlafen, Lernen und mehr. Pflege hilft, wenn der Mensch das nicht allein kann.",
      fallbezug: "Yasemin versteht: Deshalb achtet sie auf so viele verschiedene Dinge.",
    },
  },

  // =============================================================
  // TB9: ERKLÄRUNG — Orem vs. Krohwinkel Vergleich
  // =============================================================
  {
    stepId: "le01-s5-tb9-04",
    phase: "s5",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.125-132", "Q8 S.330-338"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Orem vs. Krohwinkel — zwei Ansätze",
      body: "Beide sind Bedürfnistheorien, aber mit unterschiedlichem Fokus.",
    },
    contentB1: {
      title: "Zwei Theorien vergleichen",
      body: "Orem und Krohwinkel — beide schauen auf Bedürfnisse. Aber unterschiedlich.",
    },
    question: {
      fragetext: "Vergleiche die beiden Theorien:",
      comparisonItems: [
        { aspect: "Kernkonzept", optionA: "Selbstpflegedefizit: Pflege nötig wenn Selbstpflege nicht reicht", optionB: "AEDL-Modell: 13 Aktivitäten und existenzielle Erfahrungen des Lebens" },
        { aspect: "Menschenbild", optionA: "Mensch als aktiver Selbstversorger", optionB: "Mensch als ganzheitliches Wesen mit Bedürfnissen und Erfahrungen" },
        { aspect: "Pflege-Ziel", optionA: "Selbstständigkeit fördern → Pflege überflüssig machen", optionB: "Unabhängigkeit und Wohlbefinden in allen 13 AEDL-Bereichen" },
        { aspect: "Einsatz", optionA: "Rehabilitation, ambulante Pflege", optionB: "Stationäre Langzeitpflege, Pflegeplanung" },
      ],
      labelA: "Orem (Selbstpflegedefizit)",
      labelB: "Krohwinkel (AEDL)",
      iconA: "hand-helping",
      iconB: "list-checks",
    },
  },

  // =============================================================
  // TB9: ERKLÄRUNG — Flipcard Roper
  // =============================================================
  {
    stepId: "le01-s5-tb9-05",
    phase: "s5",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.128-130"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Roper, Logan & Tierney",
      body: "Entdecke die 12 Lebensaktivitäten und 5 Einflussfaktoren.",
    },
    contentB1: {
      title: "Roper: 12 Lebensaktivitäten",
      body: "Tippe auf jede Karte. Was gehört alles zum Leben?",
    },
    question: {
      fragetext: "Die 12 Lebensaktivitäten (LA) nach Roper:",
      cards: [
        { front: "Für Sicherheit sorgen", back: "Schutz vor Gefahren — Sturzprophylaxe, Infektionsschutz, Brandschutz.", icon: "shield" },
        { front: "Kommunizieren", back: "Austausch mit anderen — verbal und nonverbal. Hören, Sehen, Sprechen.", icon: "message-circle" },
        { front: "Atmen", back: "Sauerstoffaufnahme und CO₂-Abgabe. Lebenswichtigste LA.", icon: "wind" },
        { front: "Essen und Trinken", back: "Nahrungsaufnahme und Flüssigkeitszufuhr. Grundlage für alle Körperfunktionen.", icon: "utensils" },
        { front: "Sich bewegen", back: "Mobilität, Körperhaltung, Gleichgewicht. Prävention von Kontrakturen und Thrombosen.", icon: "footprints" },
      ],
    },
  },

  // =============================================================
  // TB9: CHECKPOINT — MC Orem
  // =============================================================
  {
    stepId: "le01-s5-tb9-06",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.125-126"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Welche Theorie beschreibt dieses Konzept? Antwortzeit wird gemessen.",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Welche Theorie passt? Antworte so schnell du kannst.",
    },
    question: {
      fragetext: "Das Konzept 'Selbstpflegedefizit' — wenn ein Mensch sich nicht mehr selbst versorgen kann — stammt von welcher Theoretikerin?",
      options: [
        { text: "Dorothea Orem", isCorrect: true, explanation: "Richtig! Orems Theorie besagt: Pflege wird nötig, wenn die Selbstpflegefähigkeit eines Menschen nicht ausreicht, um seine Selbstpflegeerfordernisse zu erfüllen." },
        { text: "Monika Krohwinkel", isCorrect: false, explanation: "Krohwinkel entwickelte das AEDL-Modell mit 13 Aktivitäten und existenziellen Erfahrungen des Lebens — nicht das Selbstpflegedefizit-Konzept." },
        { text: "Virginia Henderson", isCorrect: false, explanation: "Henderson formulierte 14 Grundbedürfnisse. Das Selbstpflegedefizit ist Orems Konzept." },
        { text: "Hildegard Peplau", isCorrect: false, explanation: "Peplau ist eine Interaktionstheoretikerin — sie fokussiert auf die therapeutische Beziehung, nicht auf Selbstpflege." },
      ],
    },
  },

  // =============================================================
  // TB9: ANDERS_ERKLÄRT — Mindmap Theorien
  // =============================================================
  {
    stepId: "le01-s5-tb9-07",
    phase: "s5",
    stepType: "diagram",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Die Bedürfnistheorien im Überblick",
      body: "Wie hängen Henderson, Roper, Orem und Krohwinkel zusammen?",
    },
    contentB1: {
      title: "Alle Theorien auf einen Blick",
      body: "Diese Theorien gehören zusammen. Schau dir das Bild an.",
    },
    question: {
      fragetext: "Mindmap: Bedürfnistheorien",
      diagramType: "mindmap",
      nodes: [
        { id: "center", label: "Bedürfnistheorien", level: 0 },
        { id: "henderson", label: "Henderson (14 Grundbedürfnisse)", level: 1, parent: "center" },
        { id: "roper", label: "Roper (12 Lebensaktivitäten)", level: 1, parent: "center" },
        { id: "orem", label: "Orem (Selbstpflegedefizit)", level: 1, parent: "center" },
        { id: "krohwinkel", label: "Krohwinkel (13 AEDL)", level: 1, parent: "center" },
        { id: "h-fokus", label: "Fokus: Was braucht der Mensch?", level: 2, parent: "henderson" },
        { id: "r-fokus", label: "Fokus: Lebensaktivitäten + Einflussfaktoren", level: 2, parent: "roper" },
        { id: "o-fokus", label: "Fokus: Wann wird Pflege nötig?", level: 2, parent: "orem" },
        { id: "k-fokus", label: "Fokus: Ganzheitlich + existenziell", level: 2, parent: "krohwinkel" },
      ],
    },
  },

  // =============================================================
  // TB9: ANWENDUNG — Categorize
  // =============================================================
  {
    stepId: "le01-s5-tb9-08",
    phase: "s5",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-135"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Wer sagt was?",
      body: "Ordne die Kernkonzepte der richtigen Theoretikerin zu.",
    },
    contentB1: {
      title: "Zuordnen!",
      body: "Welches Konzept gehört zu welcher Theoretikerin?",
    },
    question: {
      fragetext: "Ordne zu: Orem, Roper oder Krohwinkel?",
      categories: [
        { name: "Orem" },
        { name: "Roper" },
        { name: "Krohwinkel" },
      ],
      items: [
        { text: "Selbstpflegedefizit", correctCategory: 0 },
        { text: "12 Lebensaktivitäten", correctCategory: 1 },
        { text: "13 AEDL", correctCategory: 2 },
        { text: "5 Einflussfaktoren", correctCategory: 1 },
        { text: "Existenzielle Erfahrungen des Lebens", correctCategory: 2 },
        { text: "Selbstpflege-Erfordernisse", correctCategory: 0 },
        { text: "Fördernde Prozesspflege", correctCategory: 2 },
        { text: "Kompensatorisches Pflegesystem", correctCategory: 0 },
      ],
    },
  },

  // =============================================================
  // TB9: REFLEXION — Confidence
  // =============================================================
  {
    stepId: "le01-s5-tb9-09",
    phase: "s5",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Wie sicher bist du jetzt?",
      body: "Du hast die Bedürfnistheorien kennengelernt. Schätze dich ein.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Schätze dich ein. Wie gut kennst du die Theorien?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann das Metaparadigma der Pflege erklären.",
        "Ich kenne den Unterschied zwischen Orem und Krohwinkel.",
        "Ich kann die 12 Lebensaktivitäten nach Roper benennen.",
      ],
    },
  },

  // =============================================================
  // Snack: Matching Theoretikerin → Kernkonzept
  // =============================================================
  {
    stepId: "le01-s5-sn-01",
    phase: "s5",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Wer gehört wozu?",
      body: "Ordne jeder Theoretikerin ihr Kernkonzept zu.",
    },
    contentB1: {
      title: "Zuordnen!",
      body: "Welche Theoretikerin hat was entwickelt?",
    },
    question: {
      fragetext: "Ordne zu:",
      pairs: [
        { left: "Henderson", right: "14 Grundbedürfnisse" },
        { left: "Orem", right: "Selbstpflegedefizit" },
        { left: "Krohwinkel", right: "13 AEDL" },
        { left: "Roper", right: "12 Lebensaktivitäten" },
        { left: "Peplau", right: "Therapeutische Beziehung" },
      ],
    },
  },

  // =============================================================
  // TB10: SZENE — Peplau über Herr Brenner
  // =============================================================
  {
    stepId: "le01-s5-tb10-01",
    phase: "s5",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q8 S.339-342"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Warum hat das Gespräch geholfen?",
      body: "Yasemin erinnert sich an Herr Brenner aus Session 3.",
    },
    contentB1: {
      title: "Gespräch als Pflege",
      body: "Yasemin denkt an Herr Brenner. Warum hat das Gespräch ihm geholfen?",
    },
    question: {
      fragetext: "Die Dozentin erklärt:",
      dialogLines: [
        { speaker: "Yasemin", text: "In der Praxis hatte ich einen Patienten — Herr Brenner. Er hat geweint. Ich habe einfach nur zugehört und es hat ihm geholfen." },
        { speaker: "Dozentin", text: "Das was du beschreibst — das ist Peplau. Die therapeutische Beziehung als Pflegeinstrument." },
        { speaker: "Yasemin", text: "Also war mein Zuhören nicht nur nett, sondern professionell?" },
        { speaker: "Dozentin", text: "Genau. Peplau beschreibt 4 Phasen: Orientierung, Identifikation, Nutzung und Ablösung. Du warst in Phase 1 und 2." },
      ],
    },
  },

  // =============================================================
  // TB10: ERKLÄRUNG — Peplau + Meleis
  // =============================================================
  {
    stepId: "le01-s5-tb10-02",
    phase: "s5",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q8 S.339-342", "Q4 S.133-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/peplau-phasen.svg",
    imageAlt: "Grafik: Peplaus 4 Phasen der therapeutischen Beziehung",
    contentC1: {
      title: "Interaktionstheorien: Peplau & Meleis",
      body: "Während Bedürfnistheorien fragen **was** der Patient braucht, fragen Interaktionstheorien **wie** die Beziehung zwischen Pflegenden und Patienten gestaltet wird.\n\n**Hildegard Peplau** (1909-1999) beschreibt 4 Phasen:\n1. **Orientierung** — Patient und Pflegende lernen sich kennen\n2. **Identifikation** — Patient erkennt Pflegende als Hilfe\n3. **Nutzung** — Patient nutzt die Beziehung für seine Genesung\n4. **Ablösung** — Patient wird unabhängig, Beziehung endet\n\n**Afaf Meleis** ordnete alle Pflegetheorien in 3 Schwerpunkte:\n- **Bedürfnistheorien** (Henderson, Orem, Roper, Krohwinkel)\n- **Interaktionstheorien** (Peplau, King)\n- **Ergebnistheorien** (Roy, Rogers)",
      fallbezug: "Yasemin erkennt: Ihr Gespräch mit Herr Brenner war Phase 1 und 2 nach Peplau.",
    },
    contentB1: {
      title: "Pflege durch Beziehung",
      body: "**Peplau** sagt: Die Beziehung zwischen Pflegekraft und Patient ist selbst Pflege.\n\n4 Phasen:\n1. **Kennenlernen** — sich vorstellen, Vertrauen aufbauen\n2. **Erkennen** — der Patient sieht: Diese Person hilft mir\n3. **Nutzen** — der Patient akzeptiert Hilfe\n4. **Loslassen** — der Patient wird selbstständig\n\n**Meleis** hat alle Theorien sortiert:\n- Bedürfnis-Theorien (was braucht der Mensch?)\n- Beziehungs-Theorien (wie helfe ich ihm?)\n- Ergebnis-Theorien (was soll am Ende rauskommen?)",
      fallbezug: "Yasemin versteht: Ihr Gespräch mit Herr Brenner war professionelle Pflege.",
    },
  },

  // =============================================================
  // TB10: ERKLÄRUNG — Timeline Peplau 4 Phasen
  // =============================================================
  {
    stepId: "le01-s5-tb10-03",
    phase: "s5",
    stepType: "timeline",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q8 S.339-340"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Peplaus 4 Phasen im Verlauf",
      body: "Eine therapeutische Beziehung verläuft in 4 Phasen — wie bei Yasemin und Herr Brenner.",
    },
    contentB1: {
      title: "4 Phasen einer Pflege-Beziehung",
      body: "Die Beziehung zwischen Pflegekraft und Patient hat 4 Schritte.",
    },
    question: {
      fragetext: "Die 4 Phasen nach Peplau:",
      timelineEvents: [
        { year: "Phase 1", title: "Orientierung", description: "Patient und Pflegende treffen sich. Das Problem wird definiert. Vertrauen wird aufgebaut.", icon: "compass" },
        { year: "Phase 2", title: "Identifikation", description: "Patient erkennt die Pflegende als Hilfe. Die Beziehung vertieft sich.", icon: "handshake" },
        { year: "Phase 3", title: "Nutzung", description: "Patient nutzt die Beziehung aktiv für seine Genesung. Er stellt Fragen, akzeptiert Hilfe.", icon: "heart-pulse" },
        { year: "Phase 4", title: "Ablösung", description: "Patient wird unabhängig. Die professionelle Beziehung endet. Erfolg wird reflektiert.", icon: "log-out" },
      ],
    },
  },

  // =============================================================
  // TB10: CHECKPOINT — MC Peplau-Phase
  // =============================================================
  {
    stepId: "le01-s5-tb10-04",
    phase: "s5",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q8 S.339-340"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "In welcher Phase nach Peplau befindet sich diese Situation?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Welche Phase ist das?",
    },
    question: {
      fragetext: "Yasemin sitzt bei Herr Brenner. Er erzählt von seiner verstorbenen Frau und weint. Yasemin hört zu. Er sagt: 'Du bist die Einzige, die mir zuhört.' — In welcher Peplau-Phase sind sie?",
      options: [
        { text: "Phase 2: Identifikation", isCorrect: true, explanation: "Richtig! Herr Brenner erkennt Yasemin als Hilfe und vertraut ihr. Er identifiziert sie als die Person, die ihm zuhört — das ist Phase 2." },
        { text: "Phase 1: Orientierung", isCorrect: false, explanation: "Die Orientierungsphase ist das erste Kennenlernen. Herr Brenner kennt Yasemin bereits und vertraut ihr — er ist schon weiter." },
        { text: "Phase 3: Nutzung", isCorrect: false, explanation: "In Phase 3 nutzt der Patient die Beziehung aktiv. Herr Brenner öffnet sich zwar, aber er nutzt die Hilfe noch nicht gezielt für seine Genesung." },
        { text: "Phase 4: Ablösung", isCorrect: false, explanation: "Die Ablösung kommt erst wenn der Patient unabhängig wird. Herr Brenner braucht gerade noch Unterstützung." },
      ],
    },
  },

  // =============================================================
  // TB10: ANDERS_ERKLÄRT — Diagram Meleis 3 Schwerpunkte
  // =============================================================
  {
    stepId: "le01-s5-tb10-05",
    phase: "s5",
    stepType: "diagram",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.133-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Drei Schwerpunkte nach Meleis",
      body: "Meleis sortiert alle Pflegetheorien in 3 Gruppen. So behältst du den Überblick.",
    },
    contentB1: {
      title: "3 Gruppen von Theorien",
      body: "Alle Pflegetheorien passen in 3 Gruppen. Schau dir das Bild an.",
    },
    question: {
      fragetext: "Mindmap: Meleis' 3 Schwerpunkte",
      diagramType: "mindmap",
      nodes: [
        { id: "center", label: "Pflegetheorien (Meleis)", level: 0 },
        { id: "needs", label: "Bedürfnis", level: 1, parent: "center" },
        { id: "interaction", label: "Interaktion", level: 1, parent: "center" },
        { id: "outcome", label: "Ergebnis", level: 1, parent: "center" },
        { id: "n1", label: "Henderson, Orem, Roper, Krohwinkel", level: 2, parent: "needs" },
        { id: "i1", label: "Peplau, King", level: 2, parent: "interaction" },
        { id: "o1", label: "Roy, Rogers", level: 2, parent: "outcome" },
        { id: "nq", label: "Frage: WAS braucht der Mensch?", level: 2, parent: "needs" },
        { id: "iq", label: "Frage: WIE gestalten wir die Beziehung?", level: 2, parent: "interaction" },
        { id: "oq", label: "Frage: WAS soll erreicht werden?", level: 2, parent: "outcome" },
      ],
    },
  },

  // =============================================================
  // TB10: ERKLÄRUNG — Reveal Umsetzung + Reichweiten
  // =============================================================
  {
    stepId: "le01-s5-tb10-06",
    phase: "s5",
    stepType: "reveal",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.136-138"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Von der Theorie zur Praxis",
      body: "Wie werden Pflegetheorien in der Praxis umgesetzt? Entdecke die 4 Stufen.",
    },
    contentB1: {
      title: "Theorie in der Praxis",
      body: "Wie nutzt man Pflegetheorien auf Station? Tippe auf die Karten.",
    },
    question: {
      fragetext: "4 Stufen der Umsetzung:",
      revealItems: [
        { icon: "book-open", label: "Verstehen", detail: "Die Theorie kennen und erklären können — z. B. Orems Selbstpflegedefizit." },
        { icon: "clipboard", label: "Anwenden", detail: "Die Theorie bei einem konkreten Patienten nutzen — z. B. Pflegeplanung nach AEDL." },
        { icon: "puzzle", label: "Integrieren", detail: "Mehrere Theorien kombinieren — z. B. AEDL-Struktur + Peplau-Beziehung." },
        { icon: "lightbulb", label: "Generieren", detail: "Eigene Erkenntnisse ableiten — z. B. neue Pflegeinterventionen entwickeln." },
      ],
    },
  },

  // =============================================================
  // TB10: ANWENDUNG — TrueFalse
  // =============================================================
  {
    stepId: "le01-s5-tb10-07",
    phase: "s5",
    stepType: "truefalse",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q4 S.119-138", "Q8 S.321-342"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Stimmt das?",
      body: "Teste dein Wissen über Pflegetheorien — richtig oder falsch?",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Lies jede Aussage. Stimmt sie?",
    },
    question: {
      fragetext: "Wische: Stimmt oder stimmt nicht?",
      cards: [
        { statement: "Peplau gehört zu den Interaktionstheorien.", isTrue: true, explanation: "Richtig! Peplau fokussiert auf die therapeutische Beziehung zwischen Pflegenden und Patienten." },
        { statement: "Krohwinkels AEDL-Modell hat 14 Aktivitäten.", isTrue: false, explanation: "Falsch! Krohwinkel hat 13 AEDL (Aktivitäten und existenzielle Erfahrungen des Lebens). Henderson hat 14 Grundbedürfnisse." },
        { statement: "Das Metaparadigma umfasst 4 Konzepte: Person, Umgebung, Gesundheit, Pflege.", isTrue: true, explanation: "Richtig! Diese 4 Konzepte bilden den Kern aller Pflegetheorien." },
        { statement: "Orem will den Patienten abhängig von Pflege machen.", isTrue: false, explanation: "Genau das Gegenteil! Orems Ziel ist es, den Patienten zur Selbstpflege zu befähigen — Pflege soll sich überflüssig machen." },
        { statement: "Meleis unterscheidet Bedürfnis-, Interaktions- und Ergebnistheorien.", isTrue: true, explanation: "Richtig! Meleis ordnete alle Pflegetheorien in diese 3 Schwerpunkte." },
      ],
    },
  },

  // =============================================================
  // TB10: REFLEXION
  // =============================================================
  {
    stepId: "le01-s5-tb10-08",
    phase: "s5",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Welche Theorie passt zu dir?",
      body: "Du hast verschiedene Pflegetheorien kennengelernt. Welche spricht dich an — und warum?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Welche Theorie gefällt dir am besten? Warum?",
    },
    question: {
      fragetext: "Welche Pflegetheorie passt am besten zu deinem Bild von Pflege? Begründe deine Wahl.",
      satzanfaenge: [
        "Mir gefällt die Theorie von...",
        "Weil sie...",
        "Auf Station würde ich damit...",
      ],
      minWords: 20,
    },
  },

  // =============================================================
  // Session-Abschluss: Crossword
  // =============================================================
  {
    stepId: "le01-s5-bk-02",
    phase: "s5",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Kreuzworträtsel Pflegetheorien",
      body: "Finde die 7 Begriffe aus der heutigen Session!",
    },
    contentB1: {
      title: "Kreuzworträtsel",
      body: "Finde 7 Wörter! Lies die Hinweise.",
    },
    question: {
      fragetext: "Finde die 7 Begriffe:",
      words: [
        { word: "METAPARADIGMA", clue: "Die 4 Grundkonzepte aller Pflegetheorien" },
        { word: "PEPLAU", clue: "Therapeutische Beziehung in 4 Phasen" },
        { word: "OREM", clue: "Selbstpflegedefizit-Theorie" },
        { word: "AEDL", clue: "13 Aktivitäten und existenzielle Erfahrungen des Lebens" },
        { word: "HENDERSON", clue: "14 Grundbedürfnisse" },
        { word: "ROPER", clue: "12 Lebensaktivitäten" },
        { word: "MELEIS", clue: "Ordnete Theorien in 3 Schwerpunkte" },
      ],
    },
  },

  // =============================================================
  // Interleaving: Swipe (10%)
  // =============================================================
  {
    stepId: "le01-s5-bk-03",
    phase: "s5",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Quick-Recall!",
      body: "Erinnerst du dich? 3x Theorien + 1x Ethik + 1x Kommunikation.",
    },
    contentB1: {
      title: "Schnell-Check!",
      body: "Was weißt du noch? Wische nach rechts (stimmt) oder links (stimmt nicht).",
    },
    question: {
      fragetext: "Stimmt das?",
      cards: [
        { statement: "Orems Ziel: Selbstpflege fördern.", isTrue: true, explanation: "Richtig! Orem will den Patienten befähigen, sich selbst zu pflegen." },
        { statement: "Peplau hat 6 Phasen der Beziehung.", isTrue: false, explanation: "Falsch! Peplau hat 4 Phasen: Orientierung, Identifikation, Nutzung, Ablösung." },
        { statement: "Roper beschreibt 12 Lebensaktivitäten.", isTrue: true, explanation: "Richtig! Roper, Logan und Tierney beschrieben 12 LA." },
        { statement: "Autonomie ist ein ethisches Prinzip nach Beauchamp/Childress.", isTrue: true, explanation: "Richtig! Die 4 Prinzipien sind: Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit (S4-Stoff)." },
        { statement: "Man kann nicht nicht kommunizieren — das sagte Rogers.", isTrue: false, explanation: "Das war Watzlawick, nicht Rogers! Rogers formulierte: Empathie, Kongruenz, Wertschätzung (S3-Stoff)." },
      ],
    },
  },

  // =============================================================
  // Session-Bookend: Summary
  // =============================================================
  {
    stepId: "le01-s5-bk-04",
    phase: "s5",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 5 ist geschafft! Pflegetheorien sind nicht trocken — sie bestimmen, wie du pflegst.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Gut gemacht!",
    },
    question: {
      fragetext: "Deine 4 Kernaussagen aus Session 5:",
      summaryPoints: [
        "**Metaparadigma:** Alle Pflegetheorien drehen sich um Person, Umgebung, Gesundheit und Pflege.",
        "**Bedürfnistheorien** (Henderson, Orem, Roper, Krohwinkel) fragen: Was braucht der Mensch?",
        "**Interaktionstheorien** (Peplau) fragen: Wie gestalten wir die Pflege-Beziehung?",
        "**Meleis** ordnet alle Theorien in 3 Schwerpunkte: Bedürfnis, Interaktion, Ergebnis.",
      ],
    },
  },
];
