// Session 1: "Was ist Pflege?" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB1: Was ist Pflege? (KB-V, F26-F29) + TB2: Geschichte & Profession (KB-V, F30-F31, F51, F28-F29)
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
  // Step 1: Session-Bookend — Vorwissen aktivieren
  // =============================================================
  {
    stepId: "le01-s1-bk-01",
    phase: "s1",
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Dein Wissensstand",
      body: "Schätze dich ein: Wie gut kennst du dich mit Pflege als Beruf aus?",
    },
    contentB1: {
      title: "Was weißt du schon?",
      body: "Wie gut kennst du dich mit Pflege aus? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann erklären was Pflege ist.",
        "Ich kenne den Unterschied zwischen professioneller und privater Pflege.",
        "Ich weiß wer Florence Nightingale war.",
        "Ich kann 3 Aufgaben von Pflegefachkräften nennen.",
        "Ich weiß was das PflBG ist.",
      ],
    },
  },

  // =============================================================
  // TB1: Was ist Pflege? — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s1-tb1-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Erster Tag auf Station",
      body: "Yasemin Demirci, 22 Jahre, steht vor der Tür der internistischen Station. Ihr erster Praxistag nach dem Theorieblock.",
      fallbezug: "Yasemin ist Auszubildende zur Pflegefachfrau im 1. Ausbildungsdrittel. Sie hat türkische Wurzeln, lebt seit 6 Jahren in Deutschland und spricht auf B2-Niveau.",
    },
    contentB1: {
      title: "Der erste Tag",
      body: "Yasemin steht vor der Tür. Ihr erster Tag auf der Station. Sie ist aufgeregt.",
      fallbezug: "Yasemin ist Pflege-Azubi. Sie lernt den Beruf gerade.",
    },
    question: {
      fragetext: "Yasemin sagt:",
      dialogLines: [
        { speaker: "Yasemin", text: "Im Unterricht klingt alles logisch — aber jetzt stehe ich hier und mein Kopf ist leer." },
        { speaker: "Praxisanleiterin", text: "Das geht jedem so am Anfang. Komm, ich zeige dir die Station." },
        { speaker: "Yasemin", text: "Was muss ich heute als Erstes können?" },
        { speaker: "Praxisanleiterin", text: "Erstmal: beobachten, zuhören und Fragen stellen. Der Rest kommt." },
      ],
    },
  },

  // =============================================================
  // TB1: SZENE (Phase 1) — Anticipation Guide
  // =============================================================
  {
    stepId: "le01-s1-tb1-02",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Stimmt das? Stimmt das nicht?",
      body: "Bevor wir starten: Was denkst du — stimmen diese Aussagen über Pflege?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Was ist richtig? Was ist falsch? Wische nach rechts (stimmt) oder links (stimmt nicht).",
    },
    question: {
      fragetext: "Stimmt das?",
      cards: [
        { statement: "Pflege bedeutet hauptsächlich waschen und füttern.", isTrue: false, explanation: "Pflege ist viel mehr: Gesundheitsförderung, Prävention, Beratung, Forschung und Bildung gehören dazu." },
        { statement: "Pflegefachkräfte dürfen bestimmte Aufgaben nicht an Helfer abgeben.", isTrue: true, explanation: "Richtig! Das PflBG §4 definiert vorbehaltene Tätigkeiten, die nur Pflegefachkräfte ausüben dürfen." },
        { statement: "Pflege ist kein wissenschaftlicher Beruf.", isTrue: false, explanation: "Pflege ist auf dem Weg zur Profession — mit eigener Wissenschaft, eigenen Studiengängen und eigenem Ethikkodex." },
        { statement: "Pflegekräfte machen nur, was der Arzt sagt.", isTrue: false, explanation: "Pflege ist ein eigenverantwortlicher Beruf. Pflegefachkräfte planen und steuern den Pflegeprozess selbstständig." },
        { statement: "Die Pflege hat einen eigenen internationalen Ethikkodex.", isTrue: true, explanation: "Der ICN-Ethikkodex wurde 1953 verabschiedet und regelt das Verhalten von Pflegenden weltweit." },
      ],
    },
  },

  // =============================================================
  // TB1: ERKLÄRUNG (Phase 2) — ICN + WHO Definition
  // =============================================================
  {
    stepId: "le01-s1-tb1-03",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/pflege-definition.svg",
    imageAlt: "Grafik: Pflege-Definition nach ICN und WHO",
    contentC1: {
      title: "Was ist Pflege? — Die offiziellen Definitionen",
      body: "Es gibt zwei zentrale Definitionen, die weltweit gelten:\n\n**ICN-Definition (International Council of Nurses):**\nPflege umfasst die eigenverantwortliche Versorgung und Betreuung von Menschen aller Altersgruppen, Familien und Gruppen — ob krank oder gesund, in allen Settings. Schlüsselaufgaben sind: Gesundheitsförderung, Krankheitsverhütung, Versorgung kranker und behinderter Menschen, Forschung und Bildung.\n\n**WHO-Definition:**\nDer gesellschaftliche Auftrag der Pflege ist es, dem einzelnen Menschen zu helfen, sein physisches, psychisches und soziales Potenzial zu bestimmen und zu verwirklichen. Pflege umfasst Planung, Betreuung bei Krankheit und Rehabilitation.",
      fallbezug: "Yasemin lernt: Pflege ist nicht nur 'am Bett stehen' — sondern ein eigenverantwortlicher Beruf mit wissenschaftlichem Anspruch.",
    },
    contentB1: {
      title: "Was ist Pflege?",
      body: "Es gibt zwei wichtige Definitionen:\n\n**ICN** sagt: Pflege ist die Betreuung von Menschen — ob krank oder gesund. Pflegekräfte kümmern sich um Gesundheit, verhindern Krankheiten und helfen kranken Menschen.\n\n**WHO** sagt: Pflege hilft jedem Menschen, gesund zu bleiben oder wieder gesund zu werden — körperlich, seelisch und sozial.",
      fallbezug: "Yasemin lernt: Pflege ist viel mehr als nur waschen und füttern.",
    },
  },

  // =============================================================
  // TB1: ERKLÄRUNG (Phase 2) — 5 Schlüsselaufgaben
  // =============================================================
  {
    stepId: "le01-s1-tb1-04",
    phase: "s1",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Die 5 Schlüsselaufgaben der Pflege",
      body: "Tippe auf jede Karte, um die Aufgabe zu entdecken.",
    },
    contentB1: {
      title: "5 Aufgaben der Pflege",
      body: "Tippe auf jede Karte. Was gehört alles zur Pflege?",
    },
    question: {
      fragetext: "Entdecke die 5 Schlüsselaufgaben nach ICN:",
      revealItems: [
        { icon: "heart-pulse", label: "Gesundheitsförderung", detail: "Menschen dabei unterstützen, gesund zu bleiben — durch Beratung, Anleitung und Prävention." },
        { icon: "shield", label: "Krankheitsverhütung", detail: "Risiken erkennen und Maßnahmen ergreifen, bevor eine Krankheit entsteht — z. B. Dekubitusprophylaxe." },
        { icon: "stethoscope", label: "Versorgung", detail: "Kranke und behinderte Menschen pflegen — im Krankenhaus, zu Hause oder im Pflegeheim." },
        { icon: "microscope", label: "Forschung", detail: "Pflegewissen wissenschaftlich weiterentwickeln — was wirkt? Was schadet? Was können wir besser machen?" },
        { icon: "graduation-cap", label: "Bildung", detail: "Aus- und Weiterbildung als Kernaufgabe der Pflege — Wissen weitergeben und sich selbst weiterentwickeln." },
      ],
    },
  },

  // =============================================================
  // TB1: CHECKPOINT (Phase 3) — MC mit Zeitmessung
  // =============================================================
  {
    stepId: "le01-s1-tb1-05",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Hast du die ICN-Definition verstanden? Diese Frage misst auch deine Antwortzeit.",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Verstehst du die ICN-Definition? Antworte so schnell du kannst.",
    },
    question: {
      fragetext: "Welche Aufgabe gehört NICHT zu den Schlüsselaufgaben der Pflege nach ICN?",
      options: [
        { text: "Arzneimittel verschreiben", isCorrect: true, explanation: "Richtig! Arzneimittel verschreiben ist eine ärztliche Tätigkeit. Die 5 ICN-Aufgaben sind: Gesundheitsförderung, Krankheitsverhütung, Versorgung, Forschung und Bildung." },
        { text: "Gesundheitsförderung", isCorrect: false, explanation: "Das ist eine der 5 Schlüsselaufgaben nach ICN." },
        { text: "Forschung", isCorrect: false, explanation: "Forschung gehört laut ICN zu den Schlüsselaufgaben — Pflege entwickelt ihr Wissen wissenschaftlich weiter." },
        { text: "Krankheitsverhütung", isCorrect: false, explanation: "Prävention ist eine zentrale Aufgabe der Pflege — z. B. Dekubitusprophylaxe oder Sturzprävention." },
      ],
    },
  },

  // =============================================================
  // TB1: ANDERS_ERKLÄRT (Phase 4) — ICN vs. WHO
  // =============================================================
  {
    stepId: "le01-s1-tb1-06",
    phase: "s1",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "ICN vs. WHO — Zwei Blickwinkel",
      body: "Beide Definitionen beschreiben Pflege — aber mit unterschiedlichem Fokus.",
    },
    contentB1: {
      title: "Zwei Definitionen — ein Beruf",
      body: "ICN und WHO beschreiben Pflege verschieden. Vergleiche selbst.",
    },
    question: {
      fragetext: "Vergleiche die beiden Definitionen:",
      comparisonItems: [
        { aspect: "Fokus", optionA: "Eigenverantwortliche Versorgung und Betreuung", optionB: "Physisches, psychisches und soziales Potenzial verwirklichen" },
        { aspect: "Zielgruppe", optionA: "Menschen aller Altersgruppen, Familien, Gruppen", optionB: "Der einzelne Mensch" },
        { aspect: "Aufgaben", optionA: "5 Schlüsselaufgaben (Förderung, Verhütung, Versorgung, Forschung, Bildung)", optionB: "Planung, Betreuung, Rehabilitation" },
        { aspect: "Perspektive", optionA: "Berufsperspektive (was Pflege TUT)", optionB: "Gesellschaftsperspektive (was Pflege SOLL)" },
      ],
      labelA: "ICN-Definition",
      labelB: "WHO-Definition",
      iconA: "globe",
      iconB: "building-2",
    },
  },

  // =============================================================
  // TB1: STORYTELLING (Phase 5) — Konkretes Beispiel
  // =============================================================
  {
    stepId: "le01-s1-tb1-07",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "STORYTELLING",
    contentC1: {
      title: "Stell dir vor...",
      body: "Frau Schneider, 85, lebt allein. Sie kann sich selbst waschen und anziehen. Sie isst regelmäßig und nimmt ihre Medikamente. Aber sie hat Angst vor Stürzen und geht kaum noch raus. Sie fühlt sich einsam.\n\nBraucht Frau Schneider Pflege?\n\nNach der ICN-Definition: **Ja.** Pflege umfasst nicht nur die Versorgung kranker Menschen — sondern auch **Gesundheitsförderung** (Sturzprävention, Mobilität) und Betreuung **gesunder** Menschen in allen Settings.\n\nPflege beginnt nicht erst wenn jemand krank ist.",
      fallbezug: "Yasemin versteht: Auch auf der Station gibt es Patienten die 'eigentlich nichts haben' — aber trotzdem Pflege brauchen.",
    },
    contentB1: {
      title: "Ein Beispiel",
      body: "Frau Schneider ist 85 und lebt allein. Sie kann sich waschen und anziehen. Aber sie hat Angst vor Stürzen und geht nicht mehr raus.\n\nBraucht sie Pflege? **Ja!** Pflege hilft auch gesunden Menschen — zum Beispiel durch Sturzprävention und Beratung.\n\nPflege beginnt nicht erst bei Krankheit.",
      fallbezug: "Yasemin lernt: Pflege ist mehr als nur kranke Menschen waschen.",
    },
  },

  // =============================================================
  // TB1: ANWENDUNG (Phase 9) — Categorize
  // =============================================================
  {
    stepId: "le01-s1-tb1-08",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Was gehört zur Pflege?",
      body: "Ordne die Tätigkeiten zu: Gehört das zur Pflege nach ICN — oder nicht?",
    },
    contentB1: {
      title: "Pflege oder nicht?",
      body: "Sortiere: Was gehört zur Pflege? Was nicht?",
    },
    question: {
      fragetext: "Ordne zu: Pflege nach ICN — Ja oder Nein?",
      categories: [
        { name: "Pflege nach ICN" },
        { name: "Keine Pflege-Aufgabe" },
      ],
      items: [
        { text: "Gesundheitsberatung für Diabetiker", correctCategory: 0 },
        { text: "Arzneimittel verschreiben", correctCategory: 1 },
        { text: "Sturzprophylaxe durchführen", correctCategory: 0 },
        { text: "Operationen planen", correctCategory: 1 },
        { text: "Pflegeforschung betreiben", correctCategory: 0 },
        { text: "Wundversorgung dokumentieren", correctCategory: 0 },
        { text: "Röntgenbilder befunden", correctCategory: 1 },
        { text: "Angehörige beraten", correctCategory: 0 },
      ],
    },
  },

  // =============================================================
  // TB1: REFLEXION (Phase 10) — Confidence
  // =============================================================
  {
    stepId: "le01-s1-tb1-09",
    phase: "s1",
    stepType: "confidence",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Wie sicher bist du jetzt?",
      body: "Du hast die Pflege-Definitionen kennengelernt. Schätze dich ein.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Schätze dich ein. Wie gut verstehst du die Definitionen?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann Pflege nach ICN definieren.",
        "Ich kenne den Unterschied zwischen ICN und WHO.",
        "Ich kann 5 Schlüsselaufgaben der Pflege benennen.",
      ],
    },
  },

  // =============================================================
  // Snack-Step: Memory zwischen TB1 und TB2
  // =============================================================
  {
    stepId: "le01-s1-sn-01",
    phase: "s1",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Begriffe-Memory",
      body: "Finde die passenden Paare: Fachbegriff und Erklärung.",
    },
    contentB1: {
      title: "Memory-Spiel",
      body: "Finde die Paare! Welcher Begriff passt zu welcher Erklärung?",
    },
    question: {
      fragetext: "Finde die 6 Paare:",
      pairs: [
        { a: "Pflege", b: "Eigenverantwortliche Versorgung und Betreuung" },
        { a: "Profession", b: "Beruf mit Wissenschaft, Ausbildung und Ethikkodex" },
        { a: "Pflegeprozess", b: "Systematischer Problemlösungsprozess" },
        { a: "Pflegeempfänger", b: "Person die professionelle Pflege erhält" },
        { a: "Ethik", b: "Nachdenken über richtiges Handeln" },
        { a: "Würde", b: "Wert der jedem Menschen innewohnt" },
      ],
    },
  },

  // =============================================================
  // TB2: Geschichte & Profession — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s1-tb2-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Eine lange Tradition",
      body: "Yasemin entdeckt im Stationszimmer ein altes Foto an der Wand.",
    },
    contentB1: {
      title: "Woher kommt die Pflege?",
      body: "Yasemin sieht ein altes Foto im Stationszimmer.",
    },
    question: {
      fragetext: "Yasemin fragt:",
      dialogLines: [
        { speaker: "Yasemin", text: "Wer ist die Frau auf dem Foto?" },
        { speaker: "Praxisanleiterin", text: "Das ist Florence Nightingale — sie hat die moderne Pflege begründet. 1859 hat sie ihr berühmtes Buch geschrieben." },
        { speaker: "Yasemin", text: "Und in Deutschland? Wer hat hier angefangen?" },
        { speaker: "Praxisanleiterin", text: "Agnes Karll. Sie hat 1903 die erste Berufsorganisation gegründet und für eine 3-jährige Ausbildung gekämpft. Du bist Teil einer langen Tradition." },
      ],
    },
  },

  // =============================================================
  // TB2: ERKLÄRUNG (Phase 2) — Timeline
  // =============================================================
  {
    stepId: "le01-s1-tb2-02",
    phase: "s1",
    stepType: "timeline",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.21-23", "Q12 Kap.1.4.4"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Geschichte der Pflege",
      body: "Die Pflege hat sich über Jahrhunderte entwickelt — von der Nächstenliebe zum wissenschaftlichen Beruf.",
    },
    contentB1: {
      title: "Pflege früher und heute",
      body: "Die Pflege hat sich stark verändert. Schau dir die wichtigsten Ereignisse an.",
    },
    question: {
      fragetext: "Die wichtigsten Meilensteine:",
      timelineEvents: [
        { year: "1859", title: "Notes on Nursing", description: "Florence Nightingale veröffentlicht ihr Buch — die Geburtsstunde der modernen Pflege.", icon: "book-open" },
        { year: "1903", title: "Berufsorganisation", description: "Agnes Karll gründet die erste deutsche Berufsorganisation für Pflegende (Vorläufer des DBfK).", icon: "users" },
        { year: "1907", title: "ICN-Präsidentin", description: "Agnes Karll wird Präsidentin des International Council of Nurses.", icon: "globe" },
        { year: "1953", title: "ICN-Ethikkodex", description: "Der ICN verabschiedet den internationalen Ethikkodex für Pflegende.", icon: "scroll" },
        { year: "2017", title: "PflBG", description: "Das Pflegeberufegesetz vereint Alten-, Kranken- und Kinderkrankenpflege zur generalistischen Ausbildung.", icon: "scale" },
      ],
    },
  },

  // =============================================================
  // TB2: ERKLÄRUNG (Phase 2) — Flipcard Profession
  // =============================================================
  {
    stepId: "le01-s1-tb2-03",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Was macht einen Beruf zur Profession?",
      body: "Tippe auf jede Karte, um die Merkmale einer Profession zu entdecken.",
    },
    contentB1: {
      title: "Wann ist ein Beruf eine Profession?",
      body: "Tippe auf jede Karte. Was macht einen Beruf besonders?",
    },
    question: {
      fragetext: "Die 5 Merkmale einer Profession:",
      cards: [
        { front: "Wissenschaftliches Wissen", back: "Der Beruf basiert auf wissenschaftlicher Forschung — nicht auf Tradition oder Bauchgefühl.", icon: "flask-conical" },
        { front: "Eigene Ausbildung", back: "Es gibt eigene, geregelte Ausbildungsgänge mit staatlicher Anerkennung.", icon: "graduation-cap" },
        { front: "Ethikkodex", back: "Ein selbstverpflichtender Verhaltenskodex regelt, wie sich Berufsangehörige verhalten sollen.", icon: "scroll" },
        { front: "Autonomie", back: "Der Beruf hat Mitbestimmung über Ausbildungsinhalte, Forschung und Berufsausübung.", icon: "key" },
        { front: "Akademisierung", back: "Es gibt Studiengänge (Bachelor, Master) für den Beruf — nicht nur die Ausbildung.", icon: "book-open" },
      ],
    },
  },

  // =============================================================
  // TB2: CHECKPOINT (Phase 3) — MC Agnes Karll
  // =============================================================
  {
    stepId: "le01-s1-tb2-04",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.22"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Hast du die Geschichte verstanden?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Weißt du Bescheid über die Geschichte der Pflege?",
    },
    question: {
      fragetext: "Warum gilt Agnes Karll als Pionierin der deutschen Pflege?",
      options: [
        { text: "Sie gründete 1903 die erste Berufsorganisation und forderte eine 3-jährige Ausbildung", isCorrect: true, explanation: "Richtig! Agnes Karll kämpfte für die Professionalisierung der Pflege in Deutschland und wurde 1907 sogar ICN-Präsidentin." },
        { text: "Sie schrieb 1859 das Buch 'Notes on Nursing'", isCorrect: false, explanation: "Das war Florence Nightingale, nicht Agnes Karll. Nightingale gilt als Begründerin der modernen Krankenpflege weltweit." },
        { text: "Sie führte die generalistische Pflegeausbildung ein", isCorrect: false, explanation: "Die generalistische Ausbildung kam erst 2017 mit dem PflBG — über 100 Jahre nach Agnes Karll." },
        { text: "Sie entwickelte die 14 Grundbedürfnisse", isCorrect: false, explanation: "Die 14 Grundbedürfnisse stammen von Virginia Henderson (1950er Jahre), nicht von Agnes Karll." },
      ],
    },
  },

  // =============================================================
  // TB2: ANDERS_ERKLÄRT (Phase 4) — Mindmap Profession
  // =============================================================
  {
    stepId: "le01-s1-tb2-05",
    phase: "s1",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23-24"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Was macht Pflege zur Profession?",
      body: "Schau dir die Zusammenhänge an: Was hat Pflege schon — und was fehlt noch?",
    },
    contentB1: {
      title: "Pflege als Beruf",
      body: "Was hat die Pflege schon? Was fehlt noch? Schau dir das Bild an.",
    },
    question: {
      fragetext: "Mindmap: Pflege auf dem Weg zur Profession",
      diagramType: "mindmap",
      nodes: [
        { id: "center", label: "Pflege = Profession?", level: 0 },
        { id: "wissen", label: "Wissenschaft ✓", level: 1, parent: "center" },
        { id: "ausbildung", label: "Eigene Ausbildung ✓", level: 1, parent: "center" },
        { id: "ethik", label: "ICN-Ethikkodex ✓", level: 1, parent: "center" },
        { id: "autonomie", label: "Autonomie ◐", level: 1, parent: "center" },
        { id: "akademie", label: "Akademisierung ◐", level: 1, parent: "center" },
        { id: "pflbg", label: "PflBG 2017", level: 2, parent: "autonomie" },
        { id: "studien", label: "Primärqualifizierende Studiengänge", level: 2, parent: "akademie" },
      ],
    },
  },

  // =============================================================
  // TB2: ANWENDUNG (Phase 9) — TrueFalse
  // =============================================================
  {
    stepId: "le01-s1-tb2-06",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.23", "Q12 Kap.1.4.4"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Stimmt das?",
      body: "Prüfe dein Wissen: Welche Aussagen über Professionalisierung sind richtig?",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Lies jede Aussage. Stimmt sie oder stimmt sie nicht?",
    },
    question: {
      fragetext: "Wische: Stimmt oder stimmt nicht?",
      cards: [
        { statement: "Professionalisierung bedeutet, dass ein Beruf sich zu einer Profession weiterentwickelt.", isTrue: true, explanation: "Richtig! Pflege befindet sich auf diesem Weg — das PflBG und Studiengänge sind wichtige Meilensteine." },
        { statement: "Pflege ist bereits eine vollständige Profession wie die Medizin.", isTrue: false, explanation: "Noch nicht ganz. Pflege hat einen Ethikkodex und Wissenschaft, aber bei Autonomie und Akademisierung gibt es noch Entwicklungsbedarf." },
        { statement: "Das PflBG definiert vorbehaltene Tätigkeiten für Pflegefachkräfte.", isTrue: true, explanation: "Richtig! §4 PflBG: Pflegebedarf erheben, Pflegeprozess steuern und Qualität sichern dürfen nur Pflegefachkräfte." },
        { statement: "Florence Nightingale gründete die erste deutsche Berufsorganisation.", isTrue: false, explanation: "Das war Agnes Karll (1903). Nightingale war Britin und schrieb 1859 'Notes on Nursing'." },
        { statement: "Das Ausbildungsziel nach PflBG §5 umfasst auch interkulturelle Kompetenzen.", isTrue: true, explanation: "Richtig! PflBG §5 fordert fachliche, methodische, soziale, interkulturelle und kommunikative Kompetenzen." },
      ],
    },
  },

  // =============================================================
  // TB2: REFLEXION (Phase 10)
  // =============================================================
  {
    stepId: "le01-s1-tb2-07",
    phase: "s1",
    stepType: "reflection",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Ist Pflege eine Profession?",
      body: "Du hast gelernt, welche Merkmale eine Profession ausmachen. Jetzt bist du dran — was denkst du?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Ist Pflege schon eine Profession? Was fehlt noch? Schreibe deine Meinung.",
    },
    question: {
      fragetext: "Ist Pflege heute schon eine vollständige Profession? Begründe deine Meinung mit mindestens einem Merkmal.",
      satzanfaenge: [
        "Ich denke, Pflege ist...",
        "Ein wichtiges Merkmal ist...",
        "Was noch fehlt, ist...",
      ],
      minWords: 20,
    },
  },

  // =============================================================
  // Session-Abschluss: Crossword
  // =============================================================
  {
    stepId: "le01-s1-bk-02",
    phase: "s1",
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Kreuzworträtsel",
      body: "Teste dein Wissen spielerisch — finde die 6 Begriffe!",
    },
    contentB1: {
      title: "Kreuzworträtsel",
      body: "Finde 6 Wörter! Lies die Hinweise und schreibe das Wort.",
    },
    question: {
      fragetext: "Finde die 6 Begriffe:",
      words: [
        { word: "NIGHTINGALE", clue: "Begründerin der modernen Pflege (1859)" },
        { word: "PROFESSION", clue: "Beruf mit Wissenschaft, Ausbildung und Ethikkodex" },
        { word: "ICN", clue: "International Council of Nurses (Abkürzung)" },
        { word: "PFLEGEPROZESS", clue: "Systematischer Problemlösungsprozess in 6 Schritten" },
        { word: "KARLL", clue: "Gründerin der ersten deutschen Berufsorganisation" },
        { word: "WHO", clue: "Weltgesundheitsorganisation (Abkürzung)" },
      ],
    },
  },

  // =============================================================
  // Session-Abschluss: Matching
  // =============================================================
  {
    stepId: "le01-s1-bk-03",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 1,
    kompetenzbereich: "KB-V",
    quellen: ["Q1 S.21-23"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Wer hat was geleistet?",
      body: "Ordne jeder Person ihre wichtigste Leistung zu.",
    },
    contentB1: {
      title: "Personen und Leistungen",
      body: "Verbinde die Person mit ihrer Leistung.",
    },
    question: {
      fragetext: "Ordne zu:",
      pairs: [
        { left: "Florence Nightingale", right: "Notes on Nursing (1859)" },
        { left: "Agnes Karll", right: "Erste Berufsorganisation (1903)" },
        { left: "Virginia Henderson", right: "14 Grundbedürfnisse" },
        { left: "ICN", right: "Internationaler Ethikkodex" },
        { left: "PflBG", right: "Vorbehaltene Tätigkeiten (§4)" },
      ],
    },
  },

  // =============================================================
  // Session-Abschluss: Leitfall-Dialog
  // =============================================================
  {
    stepId: "le01-s1-bk-04",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Ende des ersten Tages",
      body: "Yasemin reflektiert auf dem Heimweg.",
    },
    contentB1: {
      title: "Yasemins Tag ist vorbei",
      body: "Yasemin denkt nach auf dem Heimweg.",
    },
    question: {
      fragetext: "Yasemin am Ende des Tages:",
      dialogLines: [
        { speaker: "Yasemin", text: "Ich glaube, Pflege ist mehr als ich dachte. Es ist nicht nur waschen und Medikamente geben." },
        { speaker: "Yasemin", text: "Pflege ist ein eigenverantwortlicher Beruf — mit eigener Wissenschaft und eigenem Ethikkodex." },
        { speaker: "Yasemin", text: "Nightingale, Karll, Henderson... Ich bin Teil von etwas Großem." },
        { speaker: "Yasemin", text: "Morgen lerne ich den Pflegeprozess kennen. Ich bin gespannt!" },
      ],
    },
  },

  // =============================================================
  // Session-Bookend: Summary
  // =============================================================
  {
    stepId: "le01-s1-bk-05",
    phase: "s1",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeverständnis",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 1 ist geschafft! Hier sind deine 4 wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Gut gemacht!",
    },
    question: {
      fragetext: "Deine 4 Kernaussagen aus Session 1:",
      summaryPoints: [
        "**Pflege nach ICN** umfasst 5 Schlüsselaufgaben: Gesundheitsförderung, Krankheitsverhütung, Versorgung, Forschung und Bildung.",
        "**Profession** bedeutet: wissenschaftliches Wissen, eigene Ausbildung, Ethikkodex, Autonomie und Akademisierung.",
        "**Geschichte:** Nightingale (1859) → Karll (1903) → ICN-Ethikkodex (1953) → PflBG (2017).",
        "**Yasemin** hat gelernt: Pflege ist ein eigenverantwortlicher, wissenschaftlicher Beruf — nicht nur 'am Bett stehen'.",
      ],
    },
  },
];
