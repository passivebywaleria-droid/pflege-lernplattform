// Session 7: "Alles zusammen" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB13a: Transfer Ahmed Al-Rashid + TB13b: Transfer Jonas Berger
// Bloom: B3-B5, 22 Steps, ~30 Min
// Interleaving: 15% (3x Recall aus S1-S6)

import type { ContentStep } from "../_types";

export const STEPS_S7: ContentStep[] = [
  // =============================================================
  // Session-Bookend: Transfer-Readiness
  // =============================================================
  {
    stepId: "le01-s7-bk-01",
    phase: "s7",
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Transfer-Check",
      body: "Heute wendest du alles Gelernte auf neue Patienten an. Wie bereit fühlst du dich?",
    },
    contentB1: {
      title: "Bist du bereit?",
      body: "Heute kommen neue Patienten. Kannst du dein Wissen anwenden?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann den Pflegeprozess auf einen neuen Patienten anwenden.",
        "Ich erkenne kulturelle Besonderheiten in der Pflege.",
        "Ich kann ethische Prinzipien bei Entscheidungen nutzen.",
        "Ich bemerke Wahrnehmungsfehler bei mir selbst.",
      ],
    },
  },

  // =============================================================
  // TB13a: SZENE — Ahmed Al-Rashid
  // =============================================================
  {
    stepId: "le01-s7-tb13a-01",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q5 S.251-255"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Neuer Patient: Ahmed Al-Rashid",
      body: "Auf der chirurgischen Station liegt ein neuer Patient. Yasemin wird gebeten, bei der Körperpflege zu helfen.",
    },
    contentB1: {
      title: "Ein neuer Patient",
      body: "Ein neuer Patient ist auf der Station. Yasemin soll bei der Pflege helfen.",
    },
    question: {
      fragetext: "Die Situation:",
      dialogLines: [
        { speaker: "Pflegefachkraft", text: "Yasemin, kannst du bitte Herrn Al-Rashid bei der Körperpflege unterstützen? Er ist 78, postoperativ Tag 3 nach Oberschenkelhalsfraktur." },
        { speaker: "Yasemin", text: "Natürlich. Guten Morgen, Herr Al-Rashid. Ich helfe Ihnen heute beim Waschen." },
        { speaker: "Ahmed", text: "Bitte... Mann. Ich möchte Mann." },
        { speaker: "Yasemin", text: "Sie möchten von einem männlichen Pfleger versorgt werden?" },
        { speaker: "Ahmed", text: "Ja. Bitte. Ist nicht... gegen dich." },
      ],
    },
  },

  // =============================================================
  // TB13a: ERKLÄRUNG — Kulturkongruente Pflege + Pflege-Charta
  // =============================================================
  {
    stepId: "le01-s7-tb13a-02",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q8 S.343-344", "Q10"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/kulturkongruente-pflege.svg",
    imageAlt: "Grafik: Kulturkongruente Pflege nach Leininger",
    contentC1: {
      title: "Kulturkongruente Pflege",
      body: "Herr Al-Rashids Wunsch ist kein Problem — er ist ein **Recht**.\n\n**Leininger** (Transkulturelle Pflege): Pflege muss kulturelle Werte, Überzeugungen und Praktiken berücksichtigen. Was in einer Kultur normal ist, kann in einer anderen unangemessen sein.\n\n**Pflege-Charta Artikel 2**: Jeder Pflegebedürftige hat das Recht auf **Selbstbestimmung** — auch bei der Wahl der Pflegeperson.\n\n**Beauchamp/Childress**: Das Prinzip der **Autonomie** — der Patient entscheidet, wer ihn pflegt.\n\nHerr Al-Rashid lehnt nicht Yasemin ab. Er wahrt seine Würde nach seinen kulturellen Werten.",
      fallbezug: "Yasemin erkennt: Das hat nichts mit ihr persönlich zu tun. Es geht um Respekt für Ahmeds Werte.",
    },
    contentB1: {
      title: "Kultur und Pflege",
      body: "Herr Al-Rashid möchte von einem Mann gepflegt werden. Das ist sein **Recht**.\n\n**Leininger** sagt: Pflege muss die Kultur des Patienten respektieren.\n\n**Pflege-Charta** sagt: Jeder Patient darf selbst bestimmen.\n\n**Autonomie** bedeutet: Der Patient entscheidet.\n\nHerr Al-Rashid lehnt nicht Yasemin ab. Er wahrt seine Würde.",
      fallbezug: "Yasemin versteht: Es geht nicht um sie, sondern um seinen Respekt.",
    },
  },

  // =============================================================
  // TB13a: CHECKPOINT — MC Autonomie
  // =============================================================
  {
    stepId: "le01-s7-tb13a-03",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q6 S.269-272"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Welches Prinzip?",
      body: "Herr Al-Rashid lehnt die Körperpflege durch eine weibliche Pflegekraft ab. Welches ethische Prinzip wird hier relevant?",
    },
    contentB1: {
      title: "Welches Prinzip?",
      body: "Herr Al-Rashid möchte nicht von einer Frau gepflegt werden. Welches Prinzip ist wichtig?",
    },
    question: {
      fragetext: "Welches ethische Prinzip nach Beauchamp und Childress ist hier am wichtigsten?",
      options: [
        { text: "Autonomie — Selbstbestimmung des Patienten", isCorrect: true, explanation: "Richtig! Herr Al-Rashid übt sein Recht auf Selbstbestimmung aus. Seine kulturellen Werte sind zu respektieren, solange die Pflege gewährleistet bleibt." },
        { text: "Benefizienz — Wohl des Patienten", isCorrect: false, explanation: "Benefizienz (Gutes tun) ist auch relevant, aber hier geht es primär um die Selbstbestimmung des Patienten — sein Wunsch muss respektiert werden." },
        { text: "Gerechtigkeit — Gleichbehandlung", isCorrect: false, explanation: "Gerechtigkeit bedeutet nicht Gleichbehandlung, sondern Gleichberechtigung. Kulturelle Bedürfnisse zu berücksichtigen ist gerecht." },
        { text: "Nonmalefizienz — Nicht schaden", isCorrect: false, explanation: "Nicht-Schaden ist ein Grundprinzip, aber hier geht es um die aktive Respektierung von Ahmeds Selbstbestimmung." },
      ],
    },
  },

  // =============================================================
  // TB13a: ANWENDUNG — Branching BS2
  // =============================================================
  {
    stepId: "le01-s7-tb13a-04",
    phase: "s7",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q6 S.269-275"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Was tust du?",
      body: "Du bist Yasemin. Herr Al-Rashid verweigert die Körperpflege durch dich. Was machst du?",
    },
    contentB1: {
      title: "Was tust du?",
      body: "Du bist Yasemin. Herr Al-Rashid will nicht von dir gewaschen werden. Was machst du?",
    },
    question: {
      fragetext: "Herr Al-Rashid verweigert die Körperpflege. Deine Reaktion?",
      options: [
        {
          text: "Ich akzeptiere seinen Wunsch und organisiere einen männlichen Kollegen.",
          isCorrect: true,
          explanation: "Richtig! Du respektierst seine Autonomie und findest eine Lösung. So dokumentierst du seinen Wunsch und informierst das Team.",
          followUp: "Du informierst das Team. Ein männlicher Pfleger übernimmt die Körperpflege. Herr Al-Rashid bedankt sich: 'Danke. Du verstehen.'",
        },
        {
          text: "Ich erkläre ihm, dass in Deutschland Frauen das auch machen.",
          isCorrect: false,
          explanation: "Das verletzt seine Autonomie. Es spielt keine Rolle, was in Deutschland üblich ist — der Patient hat das Recht auf Selbstbestimmung. Kulturelle Werte sind zu respektieren.",
          followUp: "Herr Al-Rashid verschließt sich. Er lässt die Körperpflege ganz ausfallen. Am nächsten Tag ist seine Haut gereizt.",
        },
        {
          text: "Ich führe die Körperpflege trotzdem durch — es muss ja gemacht werden.",
          isCorrect: false,
          explanation: "Das ist ein schwerer Verstoß gegen das Autonomie-Prinzip. Pflege gegen den Willen des Patienten ist nur in absoluten Notfällen erlaubt — Körperpflege ist keiner.",
          followUp: "Herr Al-Rashid wehrt sich. Er ruft nach dem Arzt. Es gibt eine Beschwerde.",
        },
      ],
    },
  },

  // =============================================================
  // TB13a: PRAXIS_DIALOG — Dokumentation
  // =============================================================
  {
    stepId: "le01-s7-tb13a-05",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.95-98"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "PRAXIS_DIALOG",
    contentC1: {
      title: "Dokumentation",
      body: "Die Praxisanleiterin fragt: Wie dokumentierst du Ahmeds Wunsch?",
    },
    contentB1: {
      title: "Aufschreiben",
      body: "Die Praxisanleiterin fragt: Was schreibst du in die Akte?",
    },
    question: {
      fragetext: "Dialog mit der Praxisanleiterin:",
      dialogLines: [
        { speaker: "Praxisanleiterin", text: "Gut gemacht, Yasemin. Aber: Hast du das auch dokumentiert?" },
        { speaker: "Yasemin", text: "Was genau soll ich dokumentieren?" },
        { speaker: "Praxisanleiterin", text: "Den Wunsch des Patienten, die Maßnahme die du ergriffen hast, und wer die Aufgabe übernommen hat. Das gehört in die Pflegeplanung." },
        { speaker: "Yasemin", text: "Also: Pflegeproblem → kulturelle Präferenz, Ziel → Würde wahren, Maßnahme → männlicher Pfleger?" },
        { speaker: "Praxisanleiterin", text: "Perfekt. Du denkst schon im Pflegeprozess." },
      ],
    },
  },

  // =============================================================
  // TB13a: REFLEXION — Freetext
  // =============================================================
  {
    stepId: "le01-s7-tb13a-06",
    phase: "s7",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Was denkst du?",
      body: "Eine Kollegin sagt: 'In Deutschland muss er das akzeptieren. Wir können nicht für jeden einen Mann holen.' Was sagst du dazu?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Eine Kollegin sagt: 'Er muss das akzeptieren.' Was sagst du dazu?",
    },
    question: {
      fragetext: "Beurteile die Aussage der Kollegin. Nutze ethische Prinzipien und die Pflege-Charta.",
      satzanfaenge: [
        "Ich finde die Aussage...",
        "Das Prinzip der Autonomie bedeutet...",
        "Eine Lösung wäre...",
      ],
      minWords: 30,
    },
  },

  // =============================================================
  // Snack: Slider
  // =============================================================
  {
    stepId: "le01-s7-sn-01",
    phase: "s7",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Selbsteinschätzung",
      body: "Wie sicher fühlst du dich im Umgang mit kulturellen Unterschieden?",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Wie gut kannst du mit kulturellen Unterschieden umgehen?",
    },
    question: {
      fragetext: "Wie sicher im Umgang mit kulturellen Unterschieden? (1 = unsicher, 10 = sehr sicher)",
      min: 1,
      max: 10,
      step: 1,
      defaultValue: 5,
      labels: { min: "Unsicher", max: "Sehr sicher" },
    },
  },

  // =============================================================
  // TB13b: SZENE — Jonas Berger
  // =============================================================
  {
    stepId: "le01-s7-tb13b-01",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Neuer Patient: Jonas Berger, 8 Jahre",
      body: "Auf der Kinderchirurgie liegt Jonas. Appendektomie, Tag 1 postoperativ.",
    },
    contentB1: {
      title: "Ein Kind auf Station",
      body: "Jonas ist 8 Jahre alt. Er hatte eine Blinddarm-OP. Es ist Tag 1 nach der OP.",
    },
    question: {
      fragetext: "Die Pflegefachkraft fragt Jonas:",
      dialogLines: [
        { speaker: "Pflegefachkraft", text: "Jonas, wie geht es dir? Hast du Schmerzen?" },
        { speaker: "Jonas", text: "Mir geht's gut." },
        { speaker: "Erzähler", text: "Jonas' Gesicht ist blass. Seine Lippen sind zusammengepresst. Er liegt ganz still und atmet flach." },
        { speaker: "Pflegefachkraft", text: "Sicher? Du siehst ein bisschen blass aus." },
        { speaker: "Jonas", text: "Mama hat gesagt, ich soll tapfer sein." },
      ],
    },
  },

  // =============================================================
  // TB13b: CHECKPOINT — Wahrnehmungsfehler Transfer
  // =============================================================
  {
    stepId: "le01-s7-tb13b-02",
    phase: "s7",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.86-88"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-beobachtung",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Was passiert hier?",
      body: "Jonas sagt 'Mir geht's gut', aber sein Körper spricht eine andere Sprache.",
    },
    contentB1: {
      title: "Was passiert?",
      body: "Jonas sagt, es geht ihm gut. Aber wie sieht er aus?",
    },
    question: {
      fragetext: "Die Pflegekraft glaubt Jonas und dokumentiert: 'Patient schmerzfrei.' Welcher Wahrnehmungsfehler liegt vor?",
      options: [
        { text: "Primacy-Effekt — die erste Information (seine Worte) überwiegt", isCorrect: true, explanation: "Richtig! Die verbale Aussage 'Mir geht's gut' wird stärker gewichtet als die nonverbalen Signale (Blässe, Schonhaltung, flache Atmung). Bei Kindern ist die Beobachtung besonders wichtig!" },
        { text: "Halo-Effekt — Jonas wirkt insgesamt positiv", isCorrect: false, explanation: "Der Halo-Effekt wäre, wenn ein positiver Gesamteindruck die Einzelwahrnehmung beeinflusst. Hier geht es um die erste Information (verbal vs. nonverbal)." },
        { text: "Projektion — die Pflegekraft projiziert eigene Gefühle", isCorrect: false, explanation: "Projektion wäre, wenn die Pflegekraft ihre eigenen Gefühle auf Jonas überträgt. Hier ist es die verbale Aussage, die die Beobachtung überlagert." },
        { text: "Stereotypisierung — Kinder übertreiben oft", isCorrect: false, explanation: "Das wäre ein Stereotyp, der hier nicht zutrifft. Im Gegenteil: Kinder verschweigen oft Schmerzen, weil sie 'tapfer' sein wollen." },
      ],
    },
  },

  // =============================================================
  // TB13b: ERKLÄRUNG — Komplikationskette
  // =============================================================
  {
    stepId: "le01-s7-tb13b-03",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.81-85"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/komplikationskette.svg",
    imageAlt: "Grafik: Komplikationskette bei Jonas — Schmerzen → Schonatmung → Obstipation",
    contentC1: {
      title: "Die Komplikationskette",
      body: "Was passiert, wenn Jonas' Schmerzen nicht erkannt werden?\n\n**Tag 1:** Schmerzen → Jonas bewegt sich nicht, atmet flach (Schonatmung)\n**Tag 2:** Flache Atmung → Atelektasengefahr. Keine Bewegung → Obstipationsgefahr.\n**Tag 3:** Bauch gebläht, kein Stuhlgang seit 2 Tagen. Erst jetzt sagt Jonas: 'Mein Bauch tut weh' — aber gemeint sind die OP-Schmerzen von Tag 1.\n**Tag 5:** Jonas weint nachts allein: 'Ich will zu Mama.'\n\nDie ganze Kette hätte an Tag 1 unterbrochen werden können — durch **systematische Beobachtung** und ein **altersgerechtes Schmerzassessment**.",
      fallbezug: "Yasemin erkennt: Was sie in S2 über Beobachtung gelernt hat, ist lebenswichtig.",
    },
    contentB1: {
      title: "Was passiert wenn man nicht aufpasst?",
      body: "Jonas hat Schmerzen, sagt aber nichts.\n\n**Tag 1:** Schmerzen → Jonas liegt nur still\n**Tag 2:** Er atmet flach, bewegt sich nicht\n**Tag 3:** Sein Bauch ist dick und tut weh\n**Tag 5:** Jonas weint nachts allein\n\nDas alles hätte man verhindern können — wenn man am Tag 1 genau hingeschaut hätte.",
      fallbezug: "Yasemin lernt: Beobachtung ist sehr wichtig!",
    },
  },

  // =============================================================
  // TB13b: ANWENDUNG — Branching Jonas
  // =============================================================
  {
    stepId: "le01-s7-tb13b-04",
    phase: "s7",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.81-88"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Tag 1: Was tust du?",
      body: "Du bist die Pflegekraft. Jonas sagt 'Mir geht's gut', sieht aber blass aus und atmet flach.",
    },
    contentB1: {
      title: "Was tust du?",
      body: "Jonas sagt, es geht ihm gut. Aber er sieht blass aus. Was machst du?",
    },
    question: {
      fragetext: "Jonas, Tag 1 postoperativ. Er sagt 'Mir geht's gut.' Deine Reaktion?",
      options: [
        {
          text: "Ich nutze ein altersgerechtes Schmerzassessment (z. B. Smiley-Skala) und beobachte seine Mimik und Körperhaltung.",
          isCorrect: true,
          explanation: "Perfekt! Kinder können Schmerzen oft nicht verbal ausdrücken. Ein altersgerechtes Assessment + systematische Beobachtung erkennt, was Worte verschweigen.",
          followUp: "Jonas zeigt auf der Smiley-Skala eine 6/10. Du gibst die verordnete Schmerzmedikation. Jonas entspannt sich, beginnt sich zu bewegen und isst zu Mittag. Die Komplikationskette wird unterbrochen.",
        },
        {
          text: "Ich glaube ihm — er sagt ja, es geht ihm gut.",
          isCorrect: false,
          explanation: "Verbal und nonverbal widersprechen sich. Bei Kindern ist besondere Vorsicht geboten — 'Tapfer sein' bedeutet oft 'Ich habe Schmerzen, sage es aber nicht'.",
          followUp: "Tag 2: Jonas liegt flach, atmet kaum. Tag 3: Bauch gebläht. Die Komplikationskette beginnt.",
        },
        {
          text: "Ich frage die Mutter am Telefon, ob Jonas oft übertreibt.",
          isCorrect: false,
          explanation: "Das ist Stereotypisierung ('Kinder übertreiben') und verlagert die Verantwortung. Pflegerische Beobachtung ist deine Aufgabe — nicht die der Mutter.",
          followUp: "Die Mutter ist verunsichert. Jonas' Schmerzen bleiben unbehandelt.",
        },
      ],
    },
  },

  // =============================================================
  // TB13b: PATIENTEN_PERSPEKTIVE — Jonas
  // =============================================================
  {
    stepId: "le01-s7-tb13b-05",
    phase: "s7",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-kommunikation",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    contentC1: {
      title: "Jonas' Perspektive",
      body: "Jonas liegt in seinem Bett. Es ist 22 Uhr. Die Station ist ruhig.\n\n*'Mama hat gesagt, ich soll tapfer sein. Aber mein Bauch tut so weh. Die Schwester hat gefragt und ich hab gesagt es geht mir gut. Weil ich tapfer sein will. Aber jetzt ist es dunkel und ich bin allein und ich will zu Mama. Warum kommt niemand?'*\n\nJonas ist 8. Er kann seine Bedürfnisse nicht formulieren wie ein Erwachsener. Er braucht eine Pflegekraft, die **hinschaut** statt nur **hinhört**.",
      fallbezug: "Yasemin versteht: Bei Kindern ist systematische Beobachtung noch wichtiger als bei Erwachsenen.",
    },
    contentB1: {
      title: "Was Jonas denkt",
      body: "Jonas liegt allein im Bett. Es ist spät.\n\n*'Mama hat gesagt, ich soll tapfer sein. Aber mein Bauch tut weh. Ich will zu Mama. Warum kommt niemand?'*\n\nJonas ist 8 Jahre alt. Er kann nicht gut sagen, was er fühlt. Die Pflegekraft muss genau **hinschauen**.",
      fallbezug: "Yasemin versteht: Bei Kindern muss man besonders aufpassen.",
    },
  },

  // =============================================================
  // TB13b: ANWENDUNG — Freetext Pflegeprozess bei Jonas
  // =============================================================
  {
    stepId: "le01-s7-tb13b-06",
    phase: "s7",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.78-79"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Pflegeprozess anwenden",
      body: "Wende die 6 Schritte des Pflegeprozesses auf Jonas an. Nenne für jeden Schritt ein konkretes Beispiel.",
    },
    contentB1: {
      title: "6 Schritte für Jonas",
      body: "Wende die 6 Schritte des Pflegeprozesses auf Jonas an.",
    },
    question: {
      fragetext: "Beschreibe den Pflegeprozess für Jonas (mindestens 3 der 6 Schritte mit konkretem Beispiel).",
      satzanfaenge: [
        "1. Informationssammlung: Bei Jonas würde ich...",
        "2. Probleme/Ressourcen: Jonas hat das Problem...",
        "3. Ziel: Das Ziel für Jonas ist...",
      ],
      minWords: 40,
    },
  },

  // =============================================================
  // Session-Abschluss: Comparison 3 Perspektiven
  // =============================================================
  {
    stepId: "le01-s7-bk-02",
    phase: "s7",
    stepType: "comparison",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Drei Patienten — drei Welten",
      body: "Vergleiche die drei Patienten, die du heute kennengelernt hast.",
    },
    contentB1: {
      title: "Drei Patienten vergleichen",
      body: "Vergleiche die drei Patienten.",
    },
    question: {
      fragetext: "Vergleiche Yasemin, Ahmed und Jonas:",
      comparisonItems: [
        { aspect: "Hauptproblem", optionA: "Nähe-Distanz-Balance als Pflegende", optionB: "Kulturelle Barriere bei Körperpflege" },
        { aspect: "Kommunikation", optionA: "Kann sich ausdrücken, braucht Reflexion", optionB: "Sprachbarriere + kulturelle Scham" },
        { aspect: "Pflegeprozess", optionA: "Emotionale Überlastung dokumentieren", optionB: "Kulturelle Präferenz in Pflegeplanung" },
      ],
      labelA: "Yasemin (Azubi-Perspektive)",
      labelB: "Ahmed (78, kulturelle Barriere)",
      iconA: "user",
      iconB: "globe",
    },
  },

  // =============================================================
  // Interleaving: Categorize Theorien
  // =============================================================
  {
    stepId: "le01-s7-bk-03",
    phase: "s7",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Theorien-Transfer",
      body: "Welche Theorie passt zu welcher Situation?",
    },
    contentB1: {
      title: "Welche Theorie passt?",
      body: "Ordne die Situation zur Theorie.",
    },
    question: {
      fragetext: "Ordne die Situation zur passenden Theorie:",
      categories: [
        { name: "Orem" },
        { name: "Peplau" },
        { name: "Leininger" },
        { name: "Krohwinkel" },
      ],
      items: [
        { text: "Patient kann sich nicht mehr selbst waschen", correctCategory: 0 },
        { text: "Therapeutisches Gespräch mit trauerndem Patienten", correctCategory: 1 },
        { text: "Kulturelle Wünsche bei der Körperpflege", correctCategory: 2 },
        { text: "Ganzheitliche Pflegeplanung nach 13 AEDL", correctCategory: 3 },
      ],
    },
  },

  // =============================================================
  // Interleaving: TrueFalse S1-S6
  // =============================================================
  {
    stepId: "le01-s7-bk-04",
    phase: "s7",
    stepType: "truefalse",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Recall: S1-S6",
      body: "Erinnerst du dich? 5 Aussagen quer durch alle bisherigen Sessions.",
    },
    contentB1: {
      title: "Was weißt du noch?",
      body: "Lies jede Aussage. Stimmt sie oder nicht?",
    },
    question: {
      fragetext: "Stimmt oder stimmt nicht?",
      cards: [
        { statement: "Die ICN-Definition umfasst 5 Schlüsselaufgaben.", isTrue: true, explanation: "Richtig! Gesundheitsförderung, Krankheitsverhütung, Versorgung, Forschung und Bildung (S1)." },
        { statement: "Der Pflegeprozess nach Fiechter/Meier hat 8 Schritte.", isTrue: false, explanation: "6 Schritte! Informationssammlung → Probleme/Ressourcen → Ziele → Planung → Durchführung → Evaluation (S2)." },
        { statement: "Watzlawick sagt: Man kann nicht nicht kommunizieren.", isTrue: true, explanation: "Richtig! Das 1. Axiom von Watzlawick: Jedes Verhalten hat Mitteilungscharakter (S3)." },
        { statement: "EBN basiert nur auf wissenschaftlichen Studien.", isTrue: false, explanation: "EBN kombiniert 3 Säulen: Evidenz + klinische Expertise + Patientenpräferenzen (S6)." },
        { statement: "Pflege ist laut PflBG ein eigenverantwortlicher Beruf.", isTrue: true, explanation: "Richtig! §4 PflBG definiert vorbehaltene Tätigkeiten — Pflege ist eigenverantwortlich (S1)." },
      ],
    },
  },

  // =============================================================
  // Matching: Theoretikerin → Kernaussage
  // =============================================================
  {
    stepId: "le01-s7-bk-05",
    phase: "s7",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegetheorien",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Wer sagt was?",
      body: "Ordne jeder Theoretikerin ihre Kernaussage zu.",
    },
    contentB1: {
      title: "Zuordnen!",
      body: "Welche Theoretikerin hat was gesagt?",
    },
    question: {
      fragetext: "Ordne zu:",
      pairs: [
        { left: "Peplau", right: "Therapeutische Beziehung in 4 Phasen" },
        { left: "Leininger", right: "Kulturkongruente Pflege" },
        { left: "Orem", right: "Selbstpflegedefizit" },
        { left: "Henderson", right: "14 Grundbedürfnisse" },
        { left: "Nightingale", right: "Notes on Nursing (1859)" },
        { left: "Benner", right: "Novice to Expert (5 Stufen)" },
      ],
    },
  },

  // =============================================================
  // Leitfall-Synthese: Yasemin
  // =============================================================
  {
    stepId: "le01-s7-bk-06",
    phase: "s7",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Yasemins Erkenntnis",
      body: "Am Ende der Woche reflektiert Yasemin.",
    },
    contentB1: {
      title: "Was Yasemin gelernt hat",
      body: "Yasemin denkt nach über diese Woche.",
    },
    question: {
      fragetext: "Yasemin am Ende der Woche:",
      dialogLines: [
        { speaker: "Yasemin", text: "Herr Al-Rashid wollte von einem Mann gepflegt werden. Jonas konnte seine Schmerzen nicht sagen. Herr Brenner brauchte jemanden zum Zuhören." },
        { speaker: "Yasemin", text: "Jeder braucht etwas anderes. Aber eines ist immer gleich:" },
        { speaker: "Yasemin", text: "Zuhören. Beobachten. Handeln. Und den Menschen respektieren — so wie er ist." },
      ],
    },
  },

  // =============================================================
  // Confidence: Transfer
  // =============================================================
  {
    stepId: "le01-s7-bk-07",
    phase: "s7",
    stepType: "confidence",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegeprozess",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Transfer-Check",
      body: "Wie sicher fühlst du dich jetzt bei der Anwendung?",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Kannst du dein Wissen bei neuen Patienten anwenden?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann den Pflegeprozess auf verschiedene Patienten anwenden.",
        "Ich erkenne kulturelle Bedürfnisse und respektiere sie.",
        "Ich beobachte systematisch — auch wenn der Patient 'alles gut' sagt.",
        "Ich kann ethische Prinzipien im Alltag nutzen.",
      ],
    },
  },

  // =============================================================
  // Tiefe Reflexion
  // =============================================================
  {
    stepId: "le01-s7-bk-08",
    phase: "s7",
    stepType: "reflection",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Was hast du über dich gelernt?",
      body: "Denke über dich als zukünftige Pflegekraft nach.",
    },
    contentB1: {
      title: "Was hast du gelernt?",
      body: "Was weißt du jetzt über dich als Pflegekraft?",
    },
    question: {
      fragetext: "Was hast du in den letzten 7 Sessions über dich als Pflegekraft gelernt?",
      satzanfaenge: [
        "Ich habe gelernt, dass ich...",
        "Am meisten überrascht hat mich...",
        "Als Pflegekraft möchte ich...",
      ],
      minWords: 25,
    },
  },

  // =============================================================
  // Session-Bookend: Summary
  // =============================================================
  {
    stepId: "le01-s7-bk-09",
    phase: "s7",
    stepType: "summary",
    bloomLevel: 4,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 7 ist geschafft! Du hast dein Wissen auf neue Patienten übertragen.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Morgen: Prüfungsvorbereitung!",
    },
    question: {
      fragetext: "Deine 4 Kernaussagen aus Session 7:",
      summaryPoints: [
        "**Ahmed Al-Rashid:** Kulturelle Wünsche respektieren = Autonomie wahren. Dokumentation im Pflegeprozess.",
        "**Jonas Berger:** Kinder können Schmerzen nicht ausdrücken. Systematische Beobachtung + altersgerechtes Assessment.",
        "**Komplikationskette:** Ein übersehenes Problem zieht weitere nach sich. Frühe Erkennung unterbricht die Kette.",
        "**Transfer:** Gleiche Prinzipien (Beobachtung, Kommunikation, Ethik) — aber angepasst an jeden Patienten.",
      ],
    },
  },
];
