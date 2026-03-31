// Session 3: "Miteinander sprechen" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB5: Kommunikation Grundlagen (KB-II, F09-F13) + TB6: Kommunikation Praxis (KB-II, F14-F16, F12)
// Leitfall: Yasemin Demirci — Nähe-Distanz-Wendepunkt, Herr Brenner weint (Szene S2)
// Bloom: B1-B3, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // =============================================================
  // Step 1: Session-Bookend — Vorwissen aktivieren
  // =============================================================
  {
    stepId: "le01-s3-bk-01",
    phase: "s3",
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Dein Wissensstand",
      body: "Schätze dich ein: Wie gut kennst du dich mit Kommunikation in der Pflege aus?",
    },
    contentB1: {
      title: "Was weißt du schon?",
      body: "Wie gut kennst du dich mit Kommunikation aus? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann den Unterschied zwischen verbaler und nonverbaler Kommunikation erklären.",
        "Ich kenne das 4-Ohren-Modell nach Schulz von Thun.",
        "Ich weiß, was kongruente Kommunikation bedeutet.",
        "Ich kann erklären, was Distanzzonen sind.",
        "Ich weiß, wie man professionell auf einen weinenden Patienten reagiert.",
      ],
    },
  },

  // =============================================================
  // TB5: Kommunikation Grundlagen — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s3-tb5-01",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Herr Brenner weint",
      body: "Tag 3 auf der Station. Nachmittagsschicht. Yasemin hat gerade die Betten gemacht, als sie leises Schluchzen aus Zimmer 7 hört.",
      fallbezug: "Herr Brenner, 82, hat gerade Besuch von seiner Tochter gehabt. Seine Frau ist vor 3 Monaten gestorben.",
    },
    contentB1: {
      title: "Ein Patient weint",
      body: "Tag 3. Yasemin hört jemanden weinen. Es ist Herr Brenner aus Zimmer 7.",
      fallbezug: "Herr Brenner ist 82 Jahre alt. Seine Frau ist vor 3 Monaten gestorben.",
    },
    question: {
      fragetext: "Yasemin geht in das Zimmer:",
      dialogLines: [
        { speaker: "Herr Brenner", text: "Du bist die Einzige, die mir zuhört, Kind." },
        { speaker: "Yasemin", text: "Ich bin hier, Herr Brenner. Was ist passiert?" },
        { speaker: "Herr Brenner", text: "Meine Tochter war gerade da. Sie hat mir gesagt, ich soll stark sein. Aber ich kann nicht mehr stark sein." },
        { speaker: "Yasemin", text: "Sie müssen nicht stark sein. Es ist in Ordnung zu weinen." },
      ],
    },
  },

  // =============================================================
  // TB5: ERKLÄRUNG (Phase 2) — 3 Ebenen der Kommunikation
  // =============================================================
  {
    stepId: "le01-s3-tb5-02",
    phase: "s3",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/kommunikation-ebenen.svg",
    imageAlt: "Grafik: 3 Ebenen der Kommunikation — verbal, paraverbal, nonverbal",
    contentC1: {
      title: "Die 3 Ebenen der Kommunikation",
      body: "Kommunikation ist mehr als nur Worte. Sie findet auf drei Ebenen gleichzeitig statt:\n\n**Verbal:** Das gesprochene oder geschriebene Wort — der Inhalt der Nachricht.\n\n**Paraverbal:** Wie etwas gesagt wird — Tonfall, Sprechtempo, Lautstärke, Pausen. Die paraverbale Ebene verrät oft mehr als die Worte selbst.\n\n**Nonverbal:** Körpersprache, Mimik, Gestik, Blickkontakt, Körperhaltung. Studien zeigen: Über 60% der Kommunikation läuft nonverbal ab.",
      fallbezug: "Herr Brenner sagt wenig — aber sein Weinen, seine Körperhaltung und sein Blick sagen alles. Yasemin hat das erkannt.",
    },
    contentB1: {
      title: "3 Arten zu kommunizieren",
      body: "Kommunikation hat 3 Ebenen:\n\n**Verbal:** Was man sagt — die Worte.\n\n**Paraverbal:** Wie man es sagt — laut oder leise, schnell oder langsam.\n\n**Nonverbal:** Körpersprache — Gesicht, Hände, Blick.\n\nMehr als 60% der Kommunikation läuft ohne Worte ab.",
      fallbezug: "Herr Brenner weint. Er sagt wenig, aber Yasemin versteht ihn trotzdem.",
    },
  },

  // =============================================================
  // TB5: ERKLÄRUNG (Phase 2) — 4-Ohren-Modell Mindmap
  // =============================================================
  {
    stepId: "le01-s3-tb5-03",
    phase: "s3",
    stepType: "diagram",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.252"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Das 4-Ohren-Modell nach Schulz von Thun",
      body: "Jede Nachricht hat 4 Seiten — und der Empfänger hört mit 4 verschiedenen Ohren.",
    },
    contentB1: {
      title: "4 Ohren — 4 Bedeutungen",
      body: "Jeder Satz hat 4 Bedeutungen. Schau dir das Modell an.",
    },
    question: {
      fragetext: "Beispiel: Herr Brenner sagt: 'Du bist die Einzige, die mir zuhört.'",
      diagram: {
        diagramType: "mindmap",
        instruction: "Die 4 Seiten einer Nachricht am Beispiel von Herrn Brenner:",
        nodes: [
          { id: "center", label: "'Du bist die Einzige, die mir zuhört.'" },
          { id: "sach", label: "Sachinhalt" },
          { id: "sach-detail", label: "Die anderen hören mir nicht zu." },
          { id: "selbst", label: "Selbstoffenbarung" },
          { id: "selbst-detail", label: "Ich fühle mich einsam und unverstanden." },
          { id: "bezieh", label: "Beziehung" },
          { id: "bezieh-detail", label: "Du bist mir wichtig. Ich vertraue dir." },
          { id: "appell", label: "Appell" },
          { id: "appell-detail", label: "Bitte bleib bei mir. Geh nicht weg." },
        ],
        edges: [
          { from: "center", to: "sach" },
          { from: "center", to: "selbst" },
          { from: "center", to: "bezieh" },
          { from: "center", to: "appell" },
          { from: "sach", to: "sach-detail" },
          { from: "selbst", to: "selbst-detail" },
          { from: "bezieh", to: "bezieh-detail" },
          { from: "appell", to: "appell-detail" },
        ],
      },
    },
  },

  // =============================================================
  // TB5: CHECKPOINT (Phase 3) — MC Kongruenz
  // =============================================================
  {
    stepId: "le01-s3-tb5-04",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-249"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Ein Patient sagt 'Alles gut' — aber seine Stimme zittert und er vermeidet Blickkontakt. Was liegt hier vor?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Der Patient sagt 'Alles gut'. Aber seine Stimme zittert und er schaut weg. Was bedeutet das?",
    },
    question: {
      fragetext: "Der Patient sagt 'Mir geht es gut' mit zittriger Stimme und ohne Blickkontakt. Was liegt vor?",
      optionen: [
        { text: "Inkongruente Kommunikation — verbale und nonverbale Botschaft widersprechen sich", isCorrect: true, explanation: "Richtig! Die Worte sagen 'gut', aber Stimme (paraverbal) und Blickvermeidung (nonverbal) signalisieren das Gegenteil. Das nennt man inkongruente Kommunikation." },
        { text: "Kongruente Kommunikation — alles passt zusammen", isCorrect: false, explanation: "Nein. Bei kongruenter Kommunikation stimmen Worte, Stimme und Körpersprache überein. Hier widersprechen sie sich." },
        { text: "Verbale Kommunikation ist immer wichtiger als nonverbale", isCorrect: false, explanation: "Im Gegenteil: Wenn verbale und nonverbale Signale sich widersprechen, vertrauen Menschen eher der Körpersprache." },
        { text: "Der Patient lügt bewusst", isCorrect: false, explanation: "Inkongruenz bedeutet nicht Lüge. Oft können Patienten ihre Gefühle nicht in Worte fassen — die Körpersprache zeigt aber, wie es ihnen wirklich geht." },
      ],
    },
  },

  // =============================================================
  // TB5: ANDERS_ERKLÄRT (Phase 4) — Vergleichstabelle
  // =============================================================
  {
    stepId: "le01-s3-tb5-05",
    phase: "s3",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-251"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Verbal — Paraverbal — Nonverbal",
      body: "Die drei Ebenen der Kommunikation im Vergleich. Achte auf die Beispiele aus dem Pflegealltag.",
    },
    contentB1: {
      title: "3 Ebenen im Vergleich",
      body: "Vergleiche die 3 Arten der Kommunikation. Schau dir die Beispiele an.",
    },
    question: {
      fragetext: "Vergleiche die drei Kommunikationsebenen:",
      comparison: {
        instruction: "Die drei Ebenen der Kommunikation im Pflegealltag:",
        columns: [
          { label: "Verbal", icon: "message-square" },
          { label: "Paraverbal", icon: "volume-2" },
          { label: "Nonverbal", icon: "eye" },
        ],
        rows: [
          { criterion: "Was?", values: ["Gesprochenes Wort, Inhalt", "Tonfall, Tempo, Lautstärke", "Mimik, Gestik, Körperhaltung"], valuesB1: ["Die Worte", "Wie man spricht", "Gesicht und Körper"] },
          { criterion: "Beispiel", values: ["'Mir geht es gut.'", "Zittrige, leise Stimme", "Zusammengesunkene Schultern, Tränen"], valuesB1: ["'Mir geht es gut.'", "Leise, zittrige Stimme", "Weinen, zusammengekauert"] },
          { criterion: "Steuerbar?", values: ["Ja — man wählt die Worte bewusst", "Teilweise — Stimme verrät Gefühle", "Kaum — Körper reagiert automatisch"], valuesB1: ["Ja", "Manchmal", "Kaum"] },
          { criterion: "Pflege-Relevanz", values: ["Anamnese, Übergabe, Dokumentation", "Erkennen von Angst, Schmerz, Unsicherheit", "Beobachtung: Mimik zeigt Schmerz, Depression"], valuesB1: ["Gespräche, Berichte", "Angst oder Schmerz hören", "Schmerz im Gesicht sehen"] },
          { criterion: "Anteil", values: ["ca. 10%", "ca. 30%", "ca. 60%"], valuesB1: ["10%", "30%", "60%"] },
        ],
      },
    },
  },

  // =============================================================
  // TB5: STORYTELLING (Phase 5) — Watzlawick
  // =============================================================
  {
    stepId: "le01-s3-tb5-06",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "STORYTELLING",
    contentC1: {
      title: "Man kann nicht nicht kommunizieren",
      body: "Watzlawicks berühmtester Satz: **'Man kann nicht nicht kommunizieren.'**\n\nStell dir vor: Ein Patient liegt im Bett, dreht sich zur Wand und schweigt. Er sagt kein Wort. Kommuniziert er?\n\n**Ja!** Sein Schweigen, sein abgewandter Blick, seine Körperhaltung — all das sendet eine Botschaft: 'Lasst mich in Ruhe.' oder 'Ich bin traurig.' oder 'Ich habe aufgegeben.'\n\nFür Pflegende bedeutet das: Auch wenn ein Patient nicht spricht, müssen wir hinhören — mit den Augen.",
      fallbezug: "Herr Brenner hat 2 Tage lang kaum gesprochen. Die anderen Pflegenden dachten: 'Er braucht nichts.' Yasemin hat seine Körpersprache gelesen.",
    },
    contentB1: {
      title: "Auch Schweigen ist Kommunikation",
      body: "**'Man kann nicht nicht kommunizieren.'** — Paul Watzlawick\n\nEin Patient liegt im Bett und schaut zur Wand. Er sagt nichts. Aber er kommuniziert trotzdem: Sein Körper sagt 'Ich bin traurig' oder 'Lasst mich allein.'\n\nPflegende müssen auch auf das achten, was Patienten NICHT sagen.",
      fallbezug: "Herr Brenner hat 2 Tage lang fast nichts gesagt. Yasemin hat trotzdem erkannt, dass er Hilfe braucht.",
    },
  },

  // =============================================================
  // TB5: PATIENTEN_PERSPEKTIVE (Phase 7)
  // =============================================================
  {
    stepId: "le01-s3-tb5-07",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    contentC1: {
      title: "Herr Brenners Sicht",
      body: "**Aus dem Tagebuch von Herrn Brenner:**\n\n'Die Schwester heute Morgen hat gelächelt, als sie ins Zimmer kam. Aber ihre Augen waren müde. Sie hat gesagt, es gehe mir bestimmt bald besser. Aber sie hat mich dabei nicht angeschaut — sie hat auf die Infusion geschaut.\n\nNur die junge Auszubildende hat mich wirklich angesehen. Sie hat nicht viel gesagt. Aber sie hat zugehört. Das hat mir mehr geholfen als alle Tabletten.'",
      fallbezug: "Herr Brenner erlebt den Unterschied: Kongruente Kommunikation (Yasemin) vs. inkongruente Kommunikation (Pflegekraft mit müden Augen).",
    },
    contentB1: {
      title: "So erlebt es Herr Brenner",
      body: "Herr Brenner denkt:\n\n'Die Schwester heute hat gelächelt. Aber ihre Augen waren müde. Sie hat mich nicht richtig angeschaut.\n\nDie junge Auszubildende war anders. Sie hat zugehört. Das hat mir geholfen.'",
      fallbezug: "Herr Brenner merkt: Zuhören hilft mehr als leere Worte.",
    },
  },

  // =============================================================
  // TB5: ANGEHÖRIGEN_BERATUNG (Phase 8)
  // =============================================================
  {
    stepId: "le01-s3-tb5-08",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    contentC1: {
      title: "Die Tochter kommt",
      body: "Herr Brenners Tochter spricht die Praxisanleiterin an. Sie macht sich Sorgen.",
    },
    contentB1: {
      title: "Die Tochter hat Sorgen",
      body: "Herr Brenners Tochter möchte mit der Pflegekraft sprechen.",
    },
    question: {
      fragetext: "Gespräch mit der Tochter:",
      dialogLines: [
        { speaker: "Tochter", text: "Mein Vater sagt, er braucht nichts. Aber ich sehe, dass er leidet. Er isst kaum noch." },
        { speaker: "Praxisanleiterin", text: "Danke, dass Sie das ansprechen. Ihre Beobachtung ist wichtig für uns." },
        { speaker: "Tochter", text: "Kann ich irgendetwas tun? Er redet nicht mehr mit mir." },
        { speaker: "Praxisanleiterin", text: "Manchmal reicht es, einfach da zu sein. Nicht reden müssen, nur anwesend sein. Das ist auch Kommunikation." },
      ],
    },
  },

  // =============================================================
  // TB5: ANWENDUNG (Phase 9) — Categorize
  // =============================================================
  {
    stepId: "le01-s3-tb5-09",
    phase: "s3",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-251"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Welche Ebene?",
      body: "Ordne die Signale zu: Ist das verbal, paraverbal oder nonverbal?",
    },
    contentB1: {
      title: "Sortiere die Signale",
      body: "Welches Signal gehört zu welcher Ebene? Sortiere richtig.",
    },
    question: {
      fragetext: "Ordne die Signale der richtigen Kommunikationsebene zu:",
      categories: [
        { name: "Verbal" },
        { name: "Paraverbal" },
        { name: "Nonverbal" },
      ],
      categoryItems: [
        { text: "'Mir geht es gut.'", correctCategory: 0 },
        { text: "Zitternde Stimme", correctCategory: 1 },
        { text: "Zusammengesunkene Schultern", correctCategory: 2 },
        { text: "Lautes Stöhnen", correctCategory: 1 },
        { text: "Nicken", correctCategory: 2 },
        { text: "'Ich habe Schmerzen.'", correctCategory: 0 },
        { text: "Langsames, stockendes Sprechen", correctCategory: 1 },
        { text: "Augenrollen", correctCategory: 2 },
      ],
    },
  },

  // =============================================================
  // TB5: REFLEXION (Phase 10) — Confidence
  // =============================================================
  {
    stepId: "le01-s3-tb5-10",
    phase: "s3",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Wie sicher bist du jetzt?",
      body: "Du hast die Grundlagen der Kommunikation kennengelernt. Schätze dich ein.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Wie gut verstehst du die Kommunikations-Grundlagen?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann verbal, paraverbal und nonverbal unterscheiden.",
        "Ich kann das 4-Ohren-Modell an einem Beispiel erklären.",
        "Ich weiß, was kongruente Kommunikation bedeutet.",
      ],
    },
  },

  // =============================================================
  // Snack-Step: Swipe — Kongruenz erkennen
  // =============================================================
  {
    stepId: "le01-s3-sn-01",
    phase: "s3",
    stepType: "swipe",
    bloomLevel: 1,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.249"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Kongruent oder nicht?",
      body: "Wische nach rechts (kongruent) oder links (inkongruent).",
    },
    contentB1: {
      title: "Passt das zusammen?",
      body: "Stimmen Worte und Körpersprache überein? Wische rechts (ja) oder links (nein).",
    },
    question: {
      fragetext: "Kongruente Kommunikation?",
      swipe: {
        instruction: "Kongruent (rechts) oder inkongruent (links)?",
        cards: [
          { statement: "Pflegekraft sagt 'Ich habe Zeit für Sie' und setzt sich hin.", isCorrect: true, explanation: "Kongruent: Worte und Handlung stimmen überein. Die Pflegekraft zeigt mit dem Hinsetzen, dass sie wirklich Zeit hat." },
          { statement: "Pflegekraft sagt 'Alles wird gut' und schaut dabei hektisch auf die Uhr.", isCorrect: false, explanation: "Inkongruent: Die Worte sagen 'alles gut', aber der Blick auf die Uhr signalisiert Zeitdruck und Stress." },
          { statement: "Pflegekraft sagt 'Das tut mir leid' mit ruhiger Stimme und Blickkontakt.", isCorrect: true, explanation: "Kongruent: Tonfall, Blickkontakt und Worte drücken alle Mitgefühl aus." },
          { statement: "Pflegekraft sagt 'Ich höre Ihnen zu' und tippt gleichzeitig am Computer.", isCorrect: false, explanation: "Inkongruent: Die Worte versprechen Aufmerksamkeit, aber die Handlung zeigt Ablenkung." },
        ],
      },
    },
  },

  // =============================================================
  // TB6: Kommunikation Praxis — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s3-tb6-01",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Nähe und Distanz",
      body: "Yasemin erzählt der Praxisanleiterin von der Situation mit Herrn Brenner. Die Praxisanleiterin nimmt sich Zeit.",
    },
    contentB1: {
      title: "Ein wichtiges Gespräch",
      body: "Yasemin spricht mit der Praxisanleiterin über Herrn Brenner.",
    },
    question: {
      fragetext: "Nach der Situation mit Herrn Brenner:",
      dialogLines: [
        { speaker: "Yasemin", text: "Ich konnte ihn doch nicht einfach allein lassen! Er hat so geweint." },
        { speaker: "Praxisanleiterin", text: "Deine Empathie ist eine Stärke. Aber du hast darüber die Vitalzeichen bei zwei anderen Patienten vergessen." },
        { speaker: "Yasemin", text: "Aber was soll ich tun, wenn jemand so leidet?" },
        { speaker: "Praxisanleiterin", text: "Nähe und Distanz — das ist das Schwierigste in unserem Beruf. Lass uns darüber reden." },
      ],
    },
  },

  // =============================================================
  // TB6: ERKLÄRUNG (Phase 2) — Distanzzonen + Gesprächsführung
  // =============================================================
  {
    stepId: "le01-s3-tb6-02",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.251", "Q5 S.254-256"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/distanzzonen.svg",
    imageAlt: "Grafik: Distanzzonen — Intimdistanz und persönliche Distanz",
    contentC1: {
      title: "Distanzzonen und professionelle Gesprächsführung",
      body: "**Distanzzonen nach Hall:**\n- **Intimdistanz** (bis 50 cm): Nur sehr vertraute Personen — oder Pflegende bei Pflegetätigkeiten. Pflegende überschreiten regelmäßig die Intimdistanz — das erfordert besonderes Feingefühl.\n- **Persönliche Distanz** (50-120 cm): Normale Gesprächsdistanz im Pflegealltag.\n\n**Professionelle Gesprächsführung:**\nEmpathie und Mitgefühl als innere Haltung. Offene Fragen ('Wie geht es Ihnen?') statt geschlossener Fragen ('Geht es Ihnen gut?') lassen den Pflegeempfänger sich öffnen, ohne Druck aufzubauen.",
      fallbezug: "Yasemin saß 40 Minuten bei Herrn Brenner — in seiner persönlichen Distanzzone. Das war empathisch, aber sie muss lernen, Grenzen zu setzen.",
    },
    contentB1: {
      title: "Nähe und Gespräche",
      body: "**Distanzzonen:**\n- **Intimdistanz** (bis 50 cm): Nur für enge Freunde — und für Pflegende bei der Pflege.\n- **Persönliche Distanz** (50-120 cm): Normale Gesprächsentfernung.\n\n**Professionelle Gespräche:**\nStelle offene Fragen wie 'Wie geht es Ihnen?' statt 'Geht es Ihnen gut?'. So kann der Patient frei antworten.",
      fallbezug: "Yasemin war bei Herrn Brenner sehr nah. Das war gut, aber sie muss auch an die anderen Patienten denken.",
    },
  },

  // =============================================================
  // TB6: ERKLÄRUNG (Phase 2) — Flipcard: Körperkontakt + Mimik
  // =============================================================
  {
    stepId: "le01-s3-tb6-03",
    phase: "s3",
    stepType: "flipcard",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.250-251"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Körperkontakt und Mimik in der Pflege",
      body: "Tippe auf jede Karte, um mehr zu erfahren.",
    },
    contentB1: {
      title: "Berührung und Gesichtsausdruck",
      body: "Tippe auf jede Karte. Was sagt der Körper?",
    },
    question: {
      fragetext: "Nonverbale Kommunikation in der Pflege:",
      flipcard: {
        instruction: "Tippe auf die Karten, um die Rückseite zu sehen:",
        cards: [
          { front: "Berührung bei der Pflege", back: "Über Berührung bei pflegerischen Tätigkeiten senden Pflegende Informationen: 'Bei mir sind Sie in guten Händen.' Basale Stimulation und Kinästhetik nutzen Körperkontakt therapeutisch.", backB1: "Durch Berührung zeigen Pflegende: 'Ich bin da für Sie.' Das kann dem Patienten helfen, sich sicher zu fühlen." },
          { front: "Reduzierte Mimik", back: "Hinweis auf Depression. Der Patient zeigt wenig Gesichtsausdruck, wirkt teilnahmslos. Wichtig: Nicht verwechseln mit 'dem geht es gut'.", backB1: "Wenn ein Patient kaum noch Gesichtsausdruck zeigt, kann das ein Zeichen für Depression sein." },
          { front: "Maskengesicht", back: "Typisch bei Morbus Parkinson. Die Mimik ist 'eingefroren' — der Patient kann Gefühle zeigen, aber sein Gesicht 'gehorcht' nicht mehr.", backB1: "Bei der Parkinson-Krankheit wird das Gesicht wie eine Maske — der Patient kann es nicht steuern." },
          { front: "Grimassieren", back: "Unwillkürliche Gesichtsbewegungen, typisch bei Chorea Huntington. Nicht mit Schmerz oder Unwillen verwechseln!", backB1: "Manche Krankheiten verursachen unkontrollierte Gesichtsbewegungen. Das sind keine Schmerzen." },
        ],
      },
    },
  },

  // =============================================================
  // TB6: CHECKPOINT (Phase 3) — MC Mimik als Hinweis
  // =============================================================
  {
    stepId: "le01-s3-tb6-04",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.250"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Mimik als diagnostischer Hinweis — was stimmt?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Was sagt das Gesicht des Patienten? Was bedeutet eine starre Mimik?",
    },
    question: {
      fragetext: "Ein Patient zeigt seit Tagen kaum Gesichtsausdruck, spricht wenig und wirkt teilnahmslos. Die reduzierte Mimik kann ein Hinweis sein auf:",
      optionen: [
        { text: "Depression", isCorrect: true, explanation: "Richtig! Reduzierte Mimik ist ein typisches Zeichen einer Depression. Der Patient wirkt teilnahmslos und zeigt wenig emotionalen Ausdruck." },
        { text: "Chorea Huntington", isCorrect: false, explanation: "Bei Chorea Huntington zeigt sich eher Grimassieren — also unwillkürliche, überschießende Mimik. Nicht reduzierte Mimik." },
        { text: "Der Patient ist einfach müde", isCorrect: false, explanation: "Müdigkeit ist möglich, aber reduzierte Mimik über Tage ist ein pflegerisch relevantes Signal, das dokumentiert und weitergegeben werden muss." },
        { text: "Der Patient möchte nicht kommunizieren", isCorrect: false, explanation: "Nicht kommunizieren zu wollen ist möglich, aber als Pflegende müssen wir reduzierte Mimik als mögliches Krankheitszeichen erkennen." },
      ],
    },
  },

  // =============================================================
  // TB6: ANDERS_ERKLÄRT (Phase 4) — Reveal: Professionelle Nähe
  // =============================================================
  {
    stepId: "le01-s3-tb6-05",
    phase: "s3",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "4 Stufen professioneller Nähe",
      body: "Tippe auf jede Stufe, um sie zu entdecken. Von Distanz zu Nähe — und wieder zurück.",
    },
    contentB1: {
      title: "Wie nah darf ich sein?",
      body: "Es gibt 4 Stufen. Tippe auf jede Karte.",
    },
    question: {
      fragetext: "Entdecke die 4 Stufen professioneller Nähe:",
      reveal: {
        instruction: "Tippe auf jede Stufe:",
        cards: [
          { id: "stufe1", label: "Stufe 1: Wahrnehmen", content: "Den Patienten bewusst wahrnehmen: Mimik, Körperhaltung, Stimme. Was sagt mir sein Verhalten, auch ohne Worte?", contentB1: "Genau hinschauen: Wie sieht der Patient aus? Wie bewegt er sich?", icon: "eye" },
          { id: "stufe2", label: "Stufe 2: Ansprechen", content: "Das Wahrgenommene behutsam ansprechen: 'Ich sehe, dass Sie traurig sind. Möchten Sie darüber reden?' Offene Fragen, kein Druck.", contentB1: "Den Patienten fragen: 'Ich sehe, Sie sind traurig. Wollen Sie reden?'", icon: "message-circle" },
          { id: "stufe3", label: "Stufe 3: Begleiten", content: "Präsent sein, zuhören, aushalten. Nicht sofort Lösungen anbieten. Manchmal reicht es, da zu sein.", contentB1: "Da sein und zuhören. Nicht alles lösen müssen. Einfach da sein.", icon: "heart" },
          { id: "stufe4", label: "Stufe 4: Begrenzen", content: "Professionell begrenzen: 'Ich komme in 20 Minuten wieder zu Ihnen.' Verantwortung für andere Patienten wahren, ohne den aktuellen Patienten abzuweisen.", contentB1: "Sagen: 'Ich muss jetzt gehen, aber ich komme wieder.' Auch die anderen Patienten brauchen dich.", icon: "clock" },
        ],
        revealMode: "sequential",
      },
    },
  },

  // =============================================================
  // TB6: ANWENDUNG (Phase 9) — Branching Scenario BS1
  // =============================================================
  {
    stepId: "le01-s3-tb6-06",
    phase: "s3",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.254-256"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Was tust du?",
      body: "Herr Brenner, 82, weint nach dem Besuch seiner Tochter. Er bittet dich zu bleiben. Gleichzeitig musst du in 10 Minuten die Vitalzeichen bei Frau Klein kontrollieren, die heute morgen einen erhöhten Blutdruck hatte.",
      fallbezug: "Das ist die Situation, in der Yasemin steckte. Wie hättest du entschieden?",
    },
    contentB1: {
      title: "Was machst du?",
      body: "Herr Brenner weint und will, dass du bleibst. Aber du musst in 10 Minuten den Blutdruck bei Frau Klein messen — ihr Blutdruck war heute morgen zu hoch.",
      fallbezug: "Das ist Yasemins Situation. Wie entscheidest du dich?",
    },
    question: {
      fragetext: "Herr Brenner weint. Frau Klein braucht ihre Vitalzeichenkontrolle. Was tust du?",
      branchingOptions: [
        { text: "Bei Herr Brenner bleiben und die Vitalzeichen verschieben", feedback: "Herr Brenner fühlt sich gehört. Aber Frau Kleins Blutdruck wird nicht kontrolliert — wenn er weiter steigt, könnte das gefährlich werden. Die Praxisanleiterin kritisiert die fehlende Priorisierung. Empathie ohne Verantwortung ist nicht professionell.", feedbackB1: "Herr Brenner ist froh. Aber Frau Kleins Blutdruck wird nicht gemessen. Das kann gefährlich sein.", isCorrect: false },
        { text: "Kurz bei Herr Brenner bleiben (3 Min), Rückkehr versprechen, dann Vitalzeichen kontrollieren", feedback: "Herr Brenner weiß, dass er nicht vergessen wird. Frau Kleins Werte werden rechtzeitig erhoben. Empathie UND Verantwortung sind gewahrt. So geht professionelle Nähe: Wahrnehmen, Begleiten, Begrenzen.", feedbackB1: "Gut! Du bleibst kurz, versprichst wiederzukommen und kümmerst dich dann um Frau Klein. Beides klappt.", isCorrect: true },
        { text: "Abrupt gehen — 'Ich muss jetzt zu einer anderen Patientin'", feedback: "Herr Brenner fühlt sich zurückgewiesen. Das Vertrauensverhältnis ist beschädigt. Am Abend klingelt er stündlich — weil er sich allein fühlt. Ein kurzer Satz ('Ich komme in 20 Minuten wieder zu Ihnen') hätte alles verändert.", feedbackB1: "Herr Brenner fühlt sich allein gelassen. Er klingelt danach die ganze Nacht. Ein kurzer Satz hätte geholfen.", isCorrect: false },
      ],
    },
  },

  // =============================================================
  // TB6: REFLEXION (Phase 10) — Freetext
  // =============================================================
  {
    stepId: "le01-s3-tb6-07",
    phase: "s3",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Deine Reaktion",
      body: "Stell dir vor, du bist Yasemin. Herr Brenner hat gerade gesagt: 'Du bist die Einzige, die mir zuhört, Kind.' Wie hättest du reagiert — und warum?",
    },
    contentB1: {
      title: "Was hättest du gemacht?",
      body: "Herr Brenner sagt: 'Du bist die Einzige, die mir zuhört.' Was hättest du getan? Schreibe deine Antwort.",
    },
    question: {
      fragetext: "Wie hättest du in Yasemins Situation reagiert? Begründe, warum du so gehandelt hättest.",
      musterantwort: "Ich hätte Herrn Brenner signalisiert, dass ich seine Gefühle wahrnehme und ernst nehme. Ich wäre kurz geblieben (2-3 Minuten), hätte aktiv zugehört und ihm gesagt, dass ich wiederkommen werde. Dann hätte ich die anderen Patienten versorgt. Professionelle Nähe bedeutet: präsent sein, ohne die Verantwortung für andere zu vergessen.",
      bewertungskriterien: [
        "Balance zwischen Empathie und Verantwortung",
        "Konkreter Handlungsvorschlag",
        "Begründung mit Bezug auf professionelle Pflegebeziehung",
      ],
      satzanfaengeB1: [
        "In dieser Situation würde ich...",
        "Ich finde es wichtig, dass...",
        "Professionell bedeutet für mich...",
      ],
    },
  },

  // =============================================================
  // Session-Abschluss: Matching
  // =============================================================
  {
    stepId: "le01-s3-bk-02",
    phase: "s3",
    stepType: "matching",
    bloomLevel: 1,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-256"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Begriffe zuordnen",
      body: "Ordne jedes Konzept der richtigen Erklärung zu.",
    },
    contentB1: {
      title: "Was gehört zusammen?",
      body: "Verbinde den Begriff mit der Erklärung.",
    },
    question: {
      fragetext: "Ordne zu:",
      matchingPairs: [
        { left: "4-Ohren-Modell", right: "Jede Nachricht hat 4 Seiten" },
        { left: "Watzlawick", right: "Man kann nicht nicht kommunizieren" },
        { left: "Kongruenz", right: "Worte und Körpersprache stimmen überein" },
        { left: "Intimdistanz", right: "Bis 50 cm — bei Pflegetätigkeiten" },
        { left: "Paraverbal", right: "Tonfall, Sprechtempo, Lautstärke" },
      ],
    },
  },

  // =============================================================
  // Session-Abschluss: TrueFalse mit Interleaving (10%)
  // 4x Kommunikation + 1x Pflegeprozess (Recall S2)
  // =============================================================
  {
    stepId: "le01-s3-bk-03",
    phase: "s3",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.248-252", "Q2 S.78"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Stimmt das?",
      body: "Prüfe dein Wissen — mit einer Überraschungsfrage aus der letzten Session!",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Lies jede Aussage. Stimmt sie? Eine Frage kommt aus Session 2!",
    },
    question: {
      fragetext: "Wische: Stimmt oder stimmt nicht?",
      trueFalseCards: [
        { statement: "Nonverbale Kommunikation macht über 60% der gesamten Kommunikation aus.", isTrue: true, explanation: "Richtig! Studien zeigen, dass Körpersprache, Mimik und Gestik den größten Anteil der Kommunikation ausmachen." },
        { statement: "Das 4-Ohren-Modell wurde von Watzlawick entwickelt.", isTrue: false, explanation: "Das 4-Ohren-Modell stammt von Schulz von Thun, nicht von Watzlawick. Watzlawicks bekanntester Satz ist: 'Man kann nicht nicht kommunizieren.'" },
        { statement: "Bei kongruenter Kommunikation widersprechen sich verbale und nonverbale Signale.", isTrue: false, explanation: "Genau umgekehrt! Bei kongruenter Kommunikation stimmen Worte und Körpersprache überein. Widerspruch = inkongruent." },
        { statement: "Pflegende überschreiten bei Pflegetätigkeiten regelmäßig die Intimdistanz des Patienten.", isTrue: true, explanation: "Richtig! Bei Körperpflege, Verbandwechsel und vielen anderen Tätigkeiten kommen Pflegende näher als 50 cm. Das erfordert besonderes Feingefühl." },
        { statement: "Der Pflegeprozess nach Fiechter und Meier hat 4 Schritte.", isTrue: false, explanation: "Interleaving aus Session 2! Der Pflegeprozess hat 6 Schritte: Informationssammlung, Probleme/Ressourcen erkennen, Ziele festlegen, Maßnahmen planen, durchführen und evaluieren." },
      ],
    },
  },

  // =============================================================
  // Session-Bookend: Summary
  // =============================================================
  {
    stepId: "le01-s3-bk-04",
    phase: "s3",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 3 ist geschafft! Hier sind deine 4 wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Gut gemacht!",
    },
    question: {
      fragetext: "Deine 4 Kernaussagen aus Session 3:",
      summary: {
        reflexionRueckbezug: "Yasemin hat gelernt: Empathie ist eine Stärke — aber ohne professionelle Grenzen kann sie zur Schwäche werden.",
        kernaussagen: [
          "**3 Ebenen:** Kommunikation ist verbal (Worte), paraverbal (Stimme) und nonverbal (Körpersprache). Über 60% läuft nonverbal.",
          "**4-Ohren-Modell:** Jede Nachricht hat 4 Seiten — Sachinhalt, Beziehung, Selbstoffenbarung und Appell.",
          "**Kongruenz:** Wenn Worte und Körpersprache nicht übereinstimmen, vertrauen Menschen der Körpersprache.",
          "**Professionelle Nähe:** Wahrnehmen, Ansprechen, Begleiten, Begrenzen. Empathie UND Verantwortung.",
        ],
      },
    },
  },
];
