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
      dialogPhases: [
        {
          context: "Die Pflegefachkraft sagt: 'Yasemin, kannst du bitte Herrn Al-Rashid bei der Körperpflege unterstützen? Er ist 78, postoperativ Tag 3 nach Oberschenkelhalsfraktur.' Du gehst zu ihm. Ahmed Al-Rashid sagt mit unsicherer Stimme: 'Bitte... Mann. Ich möchte Mann.'",
          contextB1: "Die Pflegekraft sagt: 'Hilf bitte Herrn Al-Rashid beim Waschen.' Du gehst zu ihm. Er sagt: 'Bitte... Mann. Ich möchte Mann.'",
          speaker: "Ahmed Al-Rashid",
          options: [
            {
              text: "Ich verstehe, Herr Al-Rashid. Sie möchten von einem männlichen Pfleger versorgt werden? Ich kläre das gerne für Sie.",
              textB1: "Sie möchten einen Mann? Ich verstehe. Ich frage nach.",
              patientResponse: "Ja. Bitte. Ist nicht... gegen dich. Danke, dass du verstehst.",
              patientResponseB1: "Ja. Danke. Ist nicht gegen dich.",
              score: 3,
              feedback: "Sehr gut! Du zeigst Respekt für seine Autonomie und signalisierst, dass sein Wunsch berechtigt ist. So baust du Vertrauen auf.",
              feedbackB1: "Super! Du respektierst seinen Wunsch. Das ist richtig.",
            },
            {
              text: "Ach, das ist doch kein Problem. In Deutschland machen das Frauen genauso gut. Ich bin sehr erfahren.",
              textB1: "In Deutschland ist das normal. Frauen können das auch.",
              patientResponse: "...(Ahmed wendet den Blick ab und schweigt. Er wirkt beschämt.)",
              patientResponseB1: "...(Ahmed schaut weg. Er sagt nichts mehr.)",
              score: 1,
              feedback: "Das verletzt Ahmeds Autonomie. Seine kulturellen Werte sind kein Missverständnis, das korrigiert werden muss. Selbstbestimmung heißt: Der Patient entscheidet, wer ihn pflegt.",
              feedbackB1: "Das ist nicht gut. Ahmed darf selbst bestimmen. Seine Kultur ist wichtig.",
            },
            {
              text: "Okay. Ich frage mal, ob ein Kollege Zeit hat. Aber es kann dauern.",
              textB1: "Okay. Ich frage einen Kollegen. Aber vielleicht dauert es.",
              patientResponse: "Ja... danke. Ich warte.",
              patientResponseB1: "Danke. Ich warte.",
              score: 2,
              feedback: "Du akzeptierst seinen Wunsch, aber die Formulierung klingt widerwillig. Zeige ihm, dass sein Wunsch berechtigt ist — nicht, dass er Umstände macht.",
              feedbackB1: "Du hilfst ihm, aber es klingt so, als wäre es ein Problem. Zeige ihm: Sein Wunsch ist okay.",
            },
          ],
        },
        {
          context: "Ahmed wurde von einem männlichen Kollegen versorgt. Später kommst du zurück ins Zimmer, um die Vitalzeichen zu messen. Ahmed sagt: 'Du... bist nette Schwester. Tut mir leid wegen vorher.'",
          contextB1: "Ein Mann hat Ahmed gewaschen. Du kommst später zurück. Ahmed sagt: 'Du bist nett. Tut mir leid wegen vorher.'",
          speaker: "Ahmed Al-Rashid",
          options: [
            {
              text: "Sie müssen sich nicht entschuldigen, Herr Al-Rashid. Das ist Ihr Recht. Ich bin froh, dass wir eine gute Lösung gefunden haben.",
              textB1: "Sie müssen sich nicht entschuldigen. Das ist Ihr Recht. Alles gut.",
              patientResponse: "Ahmed lächelt erleichtert. 'Danke. Du verstehen.'",
              patientResponseB1: "Ahmed lächelt. 'Danke. Du verstehen.'",
              score: 3,
              feedback: "Perfekt! Du normalisierst seinen Wunsch und bestätigst sein Recht. So entsteht eine professionelle Beziehung auf Augenhöhe.",
              feedbackB1: "Sehr gut! Du sagst ihm: Sein Wunsch war richtig. Das ist gute Pflege.",
            },
            {
              text: "Kein Ding. Beim nächsten Mal können wir das ja direkt klären, dann gibt es kein Durcheinander.",
              textB1: "Kein Problem. Nächstes Mal sagen Sie es sofort.",
              patientResponse: "Ahmed nickt, wirkt aber etwas unsicher.",
              patientResponseB1: "Ahmed nickt, aber er ist unsicher.",
              score: 2,
              feedback: "Gut gemeint, aber du gibst ihm das Gefühl, er hätte Probleme verursacht. Besser: Bestätige sein Recht, statt auf Effizienz zu fokussieren.",
              feedbackB1: "Okay, aber Ahmed fühlt sich schuldig. Sage ihm lieber: Das war sein Recht.",
            },
            {
              text: "Schon gut. Manche Patienten sind da halt etwas anders. Ist egal.",
              textB1: "Schon gut. Manche sind halt so. Ist egal.",
              patientResponse: "Ahmed verstummt. Er fühlt sich als 'anders' abgestempelt.",
              patientResponseB1: "Ahmed sagt nichts mehr. Er fühlt sich komisch.",
              score: 1,
              feedback: "Das klingt herablassend. Ahmed ist nicht 'anders' — er hat ein Recht. Kulturelle Bedürfnisse sind keine Sonderwünsche, sondern Teil der Pflege-Charta Artikel 2.",
              feedbackB1: "Das ist nicht gut. Ahmed hat ein Recht. Es ist nicht 'komisch' oder 'anders'.",
            },
          ],
        },
      ],
      patientName: "Ahmed Al-Rashid",
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
      dialogPhases: [
        {
          context: "Die Praxisanleiterin kommt zu dir: 'Gut gemacht, Yasemin, dass du Herrn Al-Rashids Wunsch respektiert hast. Aber: Hast du das auch dokumentiert?'",
          contextB1: "Die Praxisanleiterin fragt: 'Gut gemacht! Aber hast du es auch aufgeschrieben?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich schreibe in die Pflegeplanung: Pflegeproblem — kulturelle Präferenz bei Körperpflege, Ziel — Würde wahren, Maßnahme — männlicher Pfleger übernimmt.",
              textB1: "Ich schreibe: Problem — er möchte einen Mann. Ziel — seine Würde. Maßnahme — ein Mann wäscht ihn.",
              patientResponse: "Perfekt! Du denkst schon im Pflegeprozess. Genau so dokumentiert man das.",
              patientResponseB1: "Super! Genau so schreibt man das auf.",
              score: 3,
              feedback: "Ausgezeichnet! Du nutzt die Struktur des Pflegeprozesses: Problem → Ziel → Maßnahme. So ist der Wunsch für alle Kolleginnen nachvollziehbar.",
              feedbackB1: "Sehr gut! Problem, Ziel, Maßnahme — das ist die richtige Reihenfolge.",
            },
            {
              text: "Ich habe dem Kollegen Bescheid gesagt. Er weiß jetzt, dass er Herrn Al-Rashid übernimmt.",
              textB1: "Ich habe dem Kollegen gesagt, er soll das machen.",
              patientResponse: "Das ist ein guter erster Schritt. Aber mündliche Absprachen reichen nicht. Was passiert, wenn morgen ein anderer Kollege Dienst hat?",
              patientResponseB1: "Gut, aber nur mündlich reicht nicht. Was ist morgen, wenn ein anderer Kollege da ist?",
              score: 2,
              feedback: "Mündliche Weitergabe ist wichtig, aber nicht ausreichend. Dokumentation im Pflegeprozess stellt sicher, dass ALLE im Team den Wunsch kennen — auch bei Schichtwechsel.",
              feedbackB1: "Gut, aber du musst es auch aufschreiben. Sonst weiß es morgen niemand.",
            },
            {
              text: "Muss ich das dokumentieren? Er hat ja nur gesagt, dass er einen Mann möchte. Das merkt man sich doch.",
              textB1: "Muss ich das aufschreiben? Das kann man sich doch merken.",
              patientResponse: "Doch, das muss dokumentiert werden. Stell dir vor, morgen kommt eine Kollegin und schickt wieder eine Frau rein. Das wäre für Herrn Al-Rashid schlimm.",
              patientResponseB1: "Ja, du musst es aufschreiben. Sonst passiert es morgen wieder.",
              score: 1,
              feedback: "Dokumentation ist Pflicht! Jede patientenrelevante Information gehört in die Pflegeplanung. Besonders kulturelle Bedürfnisse betreffen alle Schichten und alle Kolleginnen.",
              feedbackB1: "Ja, du musst es aufschreiben. Alles Wichtige muss in die Akte.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin fragt weiter: 'Und wo genau trägst du das ein? In welchem Teil der Pflegedokumentation?'",
          contextB1: "Die Praxisanleiterin fragt: 'Wo schreibst du das hin? In welchen Teil?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "In die Pflegeplanung unter Ressourcen und Probleme — und als Maßnahme in den Durchführungsnachweis, damit es bei jeder Schicht sichtbar ist.",
              textB1: "In die Pflegeplanung — bei Probleme und Maßnahmen. Und in den Plan für jede Schicht.",
              patientResponse: "Genau richtig! Pflegeplanung UND Durchführungsnachweis. So ist es für alle sichtbar.",
              patientResponseB1: "Genau! So wissen alle Bescheid.",
              score: 3,
              feedback: "Perfekt! Die Pflegeplanung enthält das Problem und die Maßnahme. Der Durchführungsnachweis stellt sicher, dass es bei jeder Schicht beachtet wird.",
              feedbackB1: "Super! Pflegeplanung und Schichtplan — so ist es richtig.",
            },
            {
              text: "Ich schreibe es in den Pflegebericht.",
              textB1: "Ich schreibe es in den Bericht.",
              patientResponse: "Der Pflegebericht ist für den Verlauf gut. Aber die Maßnahme muss in die Pflegeplanung — der Bericht wird nicht jeden Tag von allen gelesen.",
              patientResponseB1: "Der Bericht ist okay, aber nicht genug. Es muss in die Pflegeplanung.",
              score: 2,
              feedback: "Der Pflegebericht dokumentiert Ereignisse. Aber wiederkehrende Maßnahmen gehören in die Pflegeplanung, damit sie verbindlich und sichtbar sind.",
              feedbackB1: "Der Bericht ist für einmalige Sachen. Wiederkehrende Sachen gehören in die Planung.",
            },
            {
              text: "Ich sage es einfach bei der Übergabe.",
              textB1: "Ich sage es bei der Übergabe.",
              patientResponse: "Die Übergabe ist mündlich — und mündlich geht schnell verloren. Was ist bei Urlaub, Krankheit, Schichtwechsel?",
              patientResponseB1: "Mündlich reicht nicht. Was ist, wenn du morgen nicht da bist?",
              score: 1,
              feedback: "Mündliche Übergabe ergänzt die Dokumentation, ersetzt sie aber nie. Jede wichtige Information muss schriftlich festgehalten werden — das ist auch rechtlich relevant.",
              feedbackB1: "Nur mündlich ist nicht genug. Es muss immer auch aufgeschrieben werden.",
            },
          ],
        },
      ],
      patientName: "Praxisanleiterin",
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
      fragetext: "Du kommst zu Jonas ans Bett:",
      dialogPhases: [
        {
          context: "Jonas liegt im Bett. Tag 1 nach der Blinddarm-OP. Du fragst: 'Jonas, wie geht es dir?' Er antwortet leise: 'Mir geht es gut.' Aber sein Gesicht ist blass, seine Lippen zusammengepresst. Er liegt ganz still und atmet flach.",
          contextB1: "Jonas liegt im Bett. Tag 1 nach der OP. Du fragst: 'Wie geht es dir?' Er sagt: 'Gut.' Aber er sieht blass aus und bewegt sich nicht.",
          speaker: "Jonas Berger",
          options: [
            {
              text: "Jonas, ich sehe, dass du ganz still liegst und blass bist. Ich möchte dir eine Smiley-Skala zeigen — zeig mir mal, wie sich dein Bauch anfühlt.",
              textB1: "Jonas, du siehst blass aus. Zeig mir mal auf der Smiley-Skala: Wie fühlt sich dein Bauch an?",
              patientResponse: "Jonas schaut auf die Smileys. Er zeigt zögerlich auf den traurigen Smiley. '...ein bisschen weh', flüstert er.",
              patientResponseB1: "Jonas zeigt auf den traurigen Smiley. 'Ein bisschen weh', sagt er leise.",
              score: 3,
              feedback: "Ausgezeichnet! Du nutzt ein altersgerechtes Schmerzassessment und vertraust deiner Beobachtung mehr als seinen Worten. Bei Kindern ist das besonders wichtig.",
              feedbackB1: "Super! Du nutzt die Smiley-Skala. Das ist richtig bei Kindern.",
            },
            {
              text: "Okay, schön dass es dir gut geht! Ich komme später nochmal vorbei.",
              textB1: "Gut, dass es dir gut geht! Ich komme später wieder.",
              patientResponse: "Jonas nickt stumm. Er dreht sich zur Wand. Zwei Stunden später liegt er immer noch reglos da.",
              patientResponseB1: "Jonas sagt nichts. Er dreht sich zur Wand. Zwei Stunden später liegt er immer noch still da.",
              score: 1,
              feedback: "Du verlässt dich nur auf seine Worte und ignorierst die nonverbalen Zeichen. Kinder sagen oft, es geht ihnen gut, weil sie tapfer sein wollen. Deine Beobachtung (Blässe, Schonhaltung, flache Atmung) zeigt etwas anderes.",
              feedbackB1: "Das ist nicht gut. Jonas sagt 'gut', aber er sieht nicht gut aus. Du musst genauer hinschauen.",
            },
            {
              text: "Sicher, Jonas? Du siehst ein bisschen blass aus. Hast du vielleicht doch Schmerzen?",
              textB1: "Sicher? Du siehst blass aus. Hast du Schmerzen?",
              patientResponse: "Jonas schüttelt den Kopf. 'Mama hat gesagt, ich soll tapfer sein.'",
              patientResponseB1: "Jonas schüttelt den Kopf. 'Mama hat gesagt, ich soll tapfer sein.'",
              score: 2,
              feedback: "Du beobachtest richtig und fragst nach — gut! Aber eine erneute Ja/Nein-Frage reicht bei Kindern nicht. Nutze ein altersgerechtes Assessment-Tool wie die Smiley-Skala, um seine Schmerzen objektiv zu erfassen.",
              feedbackB1: "Gut, dass du nochmal fragst. Aber besser: Nutze die Smiley-Skala. Kinder sagen oft nicht die Wahrheit bei Schmerzen.",
            },
          ],
        },
        {
          context: "Jonas hat auf der Smiley-Skala eine 6/10 gezeigt. Du hast die verordnete Schmerzmedikation gegeben. 30 Minuten später kommst du zurück. Jonas sitzt aufrechter im Bett und trinkt Saft. Er fragt: 'Darf ich nachher fernsehen?'",
          contextB1: "Jonas hat Schmerzmittel bekommen. 30 Minuten später geht es ihm besser. Er trinkt Saft und fragt: 'Darf ich fernsehen?'",
          speaker: "Jonas Berger",
          options: [
            {
              text: "Klar darfst du fernsehen! Ich komme in einer Stunde nochmal und schaue, wie es dir geht. Dann zeigst du mir wieder die Smileys, okay?",
              textB1: "Ja, klar! Ich komme in einer Stunde wieder. Dann zeigst du mir wieder die Smileys.",
              patientResponse: "Jonas grinst. 'Okay! Und danke... dass du das mit den Smileys gemacht hast.'",
              patientResponseB1: "Jonas lächelt. 'Okay! Danke für die Smileys.'",
              score: 3,
              feedback: "Perfekt! Du planst eine regelmäßige Schmerzkontrolle und nutzt das gleiche Assessment-Tool. So entsteht Vertrauen und du erkennst Veränderungen früh.",
              feedbackB1: "Super! Du kontrollierst regelmäßig die Schmerzen. Das ist wichtig nach einer OP.",
            },
            {
              text: "Klar. Schön, dass es dir besser geht! Wenn was ist, drück einfach den Klingelknopf.",
              textB1: "Klar. Wenn etwas ist, drück den Knopf.",
              patientResponse: "Jonas nickt. Aber am Abend hat er wieder Schmerzen und traut sich nicht zu klingeln.",
              patientResponseB1: "Jonas nickt. Aber abends hat er Schmerzen und traut sich nicht zu klingeln.",
              score: 2,
              feedback: "Freundlich, aber passiv. Kinder klingeln oft nicht, weil sie niemandem zur Last fallen wollen. Plane lieber aktiv regelmäßige Kontrollen ein.",
              feedbackB1: "Kinder klingeln oft nicht. Besser: Komm regelmäßig vorbei und frage nach.",
            },
            {
              text: "Ja, aber übertreib es nicht. Du musst dich ausruhen.",
              textB1: "Ja, aber ruh dich aus.",
              patientResponse: "Jonas setzt sich unsicher zurück. Er fragt nicht mehr.",
              patientResponseB1: "Jonas legt sich wieder hin und sagt nichts mehr.",
              score: 1,
              feedback: "Bewegung und Aktivität sind nach einer Appendektomie wichtig! Jonas zeigt gerade positive Zeichen. Ermuntere ihn statt ihn einzuschränken.",
              feedbackB1: "Jonas zeigt, dass es ihm besser geht. Das ist gut! Lass ihn ruhig aktiv sein.",
            },
          ],
        },
      ],
      patientName: "Jonas Berger",
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
        { aspect: "Hauptproblem", optionA: "Nähe-Distanz-Balance als Pflegende", optionB: "Kulturelle Barriere bei Körperpflege", optionC: "Chronische Schmerzen + Isolation" },
        { aspect: "Kommunikation", optionA: "Kann sich ausdrücken, braucht Reflexion", optionB: "Sprachbarriere + kulturelle Scham", optionC: "Verbal stark, emotional verschlossen" },
        { aspect: "Pflegeprozess", optionA: "Emotionale Überlastung dokumentieren", optionB: "Kulturelle Präferenz in Pflegeplanung", optionC: "Schmerzmanagement + Aktivierung" },
      ],
      labelA: "Yasemin (Azubi-Perspektive)",
      labelB: "Ahmed (78, kulturelle Barriere)",
      labelC: "Jonas (35, chronische Schmerzen)",
      iconA: "user",
      iconB: "globe",
      iconC: "heart",
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
      dialogPhases: [
        {
          context: "Yasemin sitzt mit ihrer Praxisanleiterin in der Pause. Die Praxisanleiterin fragt: 'Du hast diese Woche drei sehr unterschiedliche Patienten erlebt. Was nimmst du mit?'",
          contextB1: "Yasemin sitzt mit der Praxisanleiterin in der Pause. Sie fragt: 'Was hast du diese Woche gelernt?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Jeder Patient braucht etwas anderes. Herr Al-Rashid brauchte Respekt für seine Kultur, Jonas brauchte jemanden der hinschaut statt nur hinhört, und Herr Brenner brauchte jemanden zum Zuhören. Aber eines ist immer gleich: Beobachten, Zuhören, Handeln — und den Menschen respektieren, so wie er ist.",
              textB1: "Jeder Patient ist anders. Herr Al-Rashid brauchte Respekt. Jonas brauchte jemanden der aufpasst. Herr Brenner brauchte jemanden zum Zuhören. Aber immer gilt: Hinschauen, Zuhören, Handeln.",
              patientResponse: "Die Praxisanleiterin lächelt: 'Genau. Und das ist personenzentrierte Pflege. Du hast das verstanden.'",
              patientResponseB1: "Die Praxisanleiterin lächelt: 'Genau richtig! Das ist gute Pflege.'",
              score: 3,
              feedback: "Hervorragend! Du verbindest alle drei Fälle und erkennst das gemeinsame Prinzip: Individuelle Bedürfnisse erkennen und professionell darauf reagieren.",
              feedbackB1: "Super! Du hast das wichtigste Prinzip verstanden: Jeder Patient ist anders, aber Respekt ist immer gleich.",
            },
            {
              text: "Ich habe gelernt, dass Pflege nicht nur Waschen und Medikamente ist. Es geht auch um Gefühle und Kultur.",
              textB1: "Pflege ist nicht nur Waschen. Es geht auch um Gefühle.",
              patientResponse: "'Das stimmt. Aber kannst du es konkreter sagen? Was genau hast du bei den einzelnen Patienten gelernt?'",
              patientResponseB1: "'Stimmt. Aber was hast du bei jedem Patienten genau gelernt?'",
              score: 2,
              feedback: "Richtige Richtung! Aber bleibe konkret: Welche Situation hat dir was gezeigt? Reflexion wird stärker, wenn du Beispiele nennst.",
              feedbackB1: "Gut, aber nenne Beispiele. Was hast du bei Herrn Al-Rashid gelernt? Bei Jonas?",
            },
            {
              text: "Es war eine anstrengende Woche. Ich hoffe, es wird einfacher.",
              textB1: "Es war schwer. Ich hoffe, es wird leichter.",
              patientResponse: "'Anstrengend war es sicher. Aber was nimmst du fachlich mit? Denk an die drei Patienten.'",
              patientResponseB1: "'Ja, es war viel. Aber was hast du gelernt? Denk an die Patienten.'",
              score: 1,
              feedback: "Verständlich, aber Reflexion heißt: aus der Erfahrung lernen. Nicht nur das Gefühl benennen, sondern fragen: Was habe ich daraus gelernt? Was mache ich beim nächsten Mal anders?",
              feedbackB1: "Es ist okay, dass es schwer war. Aber denke nach: Was hast du gelernt? Das ist wichtig.",
            },
          ],
        },
      ],
      patientName: "Yasemin Demirci",
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
    themenblockPhase: "REFLEXION",
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
