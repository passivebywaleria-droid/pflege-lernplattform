// Session 4: "Richtig handeln" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB7: Ethik & Menschenbild (KB-IV, F19-F24) + TB8: Recht & Teamarbeit (KB-III/IV, F17-F18, F25)
// Leitfall: Yasemin Demirci — Reflexionsgespräch mit Praxisanleiterin (Szene S3)
// Bloom: B2-B4, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S4: ContentStep[] = [
  // =============================================================
  // Step 1: Session-Bookend — Vorwissen aktivieren
  // =============================================================
  {
    stepId: "le01-s4-bk-01",
    phase: "s4",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Dein Wissensstand",
      body: "Schätze dich ein: Wie gut kennst du dich mit Ethik in der Pflege aus?",
    },
    contentB1: {
      title: "Was weißt du schon?",
      body: "Wie gut kennst du dich mit Ethik aus? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann den Unterschied zwischen Ethik und Moral erklären.",
        "Ich kenne die 4 ethischen Prinzipien.",
        "Ich weiß, was die Pflege-Charta ist.",
        "Ich kann erklären, was Würde bedeutet.",
        "Ich weiß, welche Aufgaben nur Pflegefachkräfte machen dürfen.",
      ],
    },
  },

  // =============================================================
  // TB7: Ethik & Menschenbild — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s4-tb7-01",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Reflexionsgespräch",
      body: "Freitag, Tag 5. Yasemin sitzt mit ihrer Praxisanleiterin im Pausenraum. Die Woche war intensiv.",
      fallbezug: "Yasemin hat diese Woche viel erlebt: den ersten Tag, Herr Brenners Tränen, das Dilemma zwischen Nähe und Distanz. Jetzt reflektiert sie.",
    },
    contentB1: {
      title: "Am Ende der Woche",
      body: "Freitag. Yasemin spricht mit ihrer Praxisanleiterin über die Woche.",
      fallbezug: "Yasemin denkt über ihre erste Woche nach.",
    },
    question: {
      fragetext: "Yasemin und ihre Praxisanleiterin:",
      dialogLines: [
        { speaker: "Praxisanleiterin", text: "Du hast diese Woche viel gelernt. Was hat dich am meisten beschäftigt?" },
        { speaker: "Yasemin", text: "Ich glaube, ich muss lernen, professionell nah zu sein — nicht privat nah." },
        { speaker: "Praxisanleiterin", text: "Das ist eine wichtige Erkenntnis. Aber es gibt noch etwas anderes: Hast du dich mal gefragt, wann du RICHTIG handelst?" },
        { speaker: "Yasemin", text: "Richtig handeln? Ich mache doch einfach, was in der Pflegeplanung steht..." },
        { speaker: "Praxisanleiterin", text: "Und wenn die Pflegeplanung sagt: Körperpflege — aber der Patient sagt: Nein?" },
      ],
    },
  },

  // =============================================================
  // TB7: ERKLÄRUNG (Phase 2) — Ethik vs. Moral + Würde
  // =============================================================
  {
    stepId: "le01-s4-tb7-02",
    phase: "s4",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.282", "Q7 S.280-281"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/ethik-moral.svg",
    imageAlt: "Grafik: Ethik vs. Moral — Unterschied",
    contentC1: {
      title: "Ethik, Moral und Würde",
      body: "**Ethik** ist das reflektierte Nachdenken über moralisches Handeln, um zu begründeten Entscheidungen zu gelangen.\n\n**Moral** ist die Gesamtheit von Normen, Grundsätzen und Werten, die das Verhalten einer Gesellschaft regulieren.\n\n**Würde** ist ein achtunggebietender Wert, der jedem Menschen innewohnt — allein weil er existiert. Art. 1 Grundgesetz: 'Die Würde des Menschen ist unantastbar.'\n\n**Verletzlichkeit** nach Haker: Jeder Mensch ist verletzlich (anthropologisch). Pflegebedürftige sind besonders verletzlich, weil sie von anderen abhängig sind (moralisch).",
      fallbezug: "Yasemin versteht: Wenn sie pflegt, berührt sie nicht nur den Körper — sondern auch die Würde eines Menschen.",
    },
    contentB1: {
      title: "Ethik und Würde",
      body: "**Ethik** = Nachdenken über richtiges Handeln.\n**Moral** = Die Regeln, nach denen wir leben.\n\n**Würde** = Jeder Mensch ist wertvoll — einfach weil er da ist. Das steht im Grundgesetz.\n\nMenschen, die Pflege brauchen, sind besonders verletzlich. Sie brauchen besonderen Schutz.",
      fallbezug: "Yasemin lernt: Pflege bedeutet auch, die Würde des Patienten zu schützen.",
    },
  },

  // =============================================================
  // TB7: ERKLÄRUNG (Phase 2) — 4 ethische Prinzipien
  // =============================================================
  {
    stepId: "le01-s4-tb7-03",
    phase: "s4",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/ethische-prinzipien.svg",
    imageAlt: "Grafik: 4 ethische Prinzipien nach Beauchamp und Childress",
    contentC1: {
      title: "Die 4 ethischen Prinzipien",
      body: "Tippe auf jede Karte, um die Prinzipien nach Beauchamp und Childress zu entdecken.",
    },
    contentB1: {
      title: "4 Regeln für richtiges Handeln",
      body: "Tippe auf jede Karte. Was bedeuten die 4 Prinzipien?",
    },
    question: {
      fragetext: "Entdecke die 4 ethischen Prinzipien:",
      revealItems: [
        { icon: "user-check", label: "Autonomie", detail: "Selbstbestimmung: Jeder Patient hat das Recht, selbst zu entscheiden — auch wenn wir anderer Meinung sind." },
        { icon: "heart-handshake", label: "Benefizienz", detail: "Wohltun: Pflegende handeln zum Wohl des Patienten — sie fördern Gesundheit und Wohlbefinden." },
        { icon: "shield-check", label: "Nonmalefizienz", detail: "Nichtschaden: Pflegende vermeiden Handlungen, die dem Patienten schaden könnten." },
        { icon: "scale", label: "Gerechtigkeit", detail: "Faire Verteilung: Alle Patienten haben Anspruch auf gleich gute Pflege — unabhängig von Herkunft, Religion oder Status." },
      ],
    },
  },

  // =============================================================
  // TB7: CHECKPOINT (Phase 3) — MC Autonomie
  // =============================================================
  {
    stepId: "le01-s4-tb7-04",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Herr Al-Rashid lehnt die Körperpflege durch eine weibliche Pflegekraft ab. Welches ethische Prinzip ist hier zentral?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Ein Patient will nicht von einer Frau gewaschen werden. Welches Prinzip ist wichtig?",
    },
    question: {
      fragetext: "Welches ethische Prinzip steht bei Herrn Al-Rashids Wunsch im Vordergrund?",
      options: [
        { text: "Autonomie — Selbstbestimmung des Patienten", isCorrect: true, explanation: "Richtig! Autonomie bedeutet: Der Patient entscheidet selbst über seinen Körper. Kulturelle und religiöse Überzeugungen gehören dazu." },
        { text: "Benefizienz — Wohltun der Pflegekraft", isCorrect: false, explanation: "Benefizienz bedeutet, zum Wohl des Patienten zu handeln. Aber das Wohl schließt auch die Achtung seiner Wünsche ein — nicht nur die körperliche Versorgung." },
        { text: "Gerechtigkeit — alle gleich behandeln", isCorrect: false, explanation: "Gerechtigkeit bedeutet nicht, alle gleich zu behandeln, sondern allen gleich gute Pflege zu geben. Individuelle Bedürfnisse zu berücksichtigen ist gerecht." },
        { text: "Nonmalefizienz — keinen Schaden anrichten", isCorrect: false, explanation: "Nonmalefizienz spielt eine Rolle, wenn Pflege gegen den Willen des Patienten durchgeführt wird — aber das zentrale Prinzip hier ist die Autonomie." },
      ],
    },
  },

  // =============================================================
  // TB7: ANDERS_ERKLÄRT (Phase 4) — Comparison Prinzipien
  // =============================================================
  {
    stepId: "le01-s4-tb7-05",
    phase: "s4",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANDERS_ERKLÄRT",
    imageUrl: "/images/content/le-01/prinzipien-vergleich.svg",
    imageAlt: "Vergleichstabelle: Autonomie vs. Benefizienz in der Praxis",
    contentC1: {
      title: "Prinzipien in der Praxis",
      body: "Dieselben Prinzipien — aber je nach Situation überwiegt ein anderes.",
    },
    contentB1: {
      title: "Zwei Beispiele — zwei Prinzipien",
      body: "Welches Prinzip ist in welcher Situation am wichtigsten?",
    },
    question: {
      fragetext: "Vergleiche die beiden Situationen:",
      comparisonItems: [
        { aspect: "Situation", optionA: "Patient lehnt Körperpflege ab", optionB: "Patient hat Schmerzen, sagt aber nichts" },
        { aspect: "Zentrales Prinzip", optionA: "Autonomie — Selbstbestimmung achten", optionB: "Benefizienz — aktiv Wohl fördern" },
        { aspect: "Pflegerische Handlung", optionA: "Alternative organisieren, Wunsch respektieren", optionB: "Beobachten, Schmerzassessment durchführen" },
        { aspect: "Risiko bei Missachtung", optionA: "Vertrauensverlust, Patient verschließt sich", optionB: "Schmerzen bleiben unbehandelt, Komplikationen" },
      ],
      labelA: "Autonomie-Fall",
      labelB: "Benefizienz-Fall",
      iconA: "user-check",
      iconB: "heart-handshake",
    },
  },

  // =============================================================
  // TB7: STORYTELLING (Phase 5) — CF05 Prinzipienkonflikt
  // =============================================================
  {
    stepId: "le01-s4-tb7-06",
    phase: "s4",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "STORYTELLING",
    contentC1: {
      title: "Wenn Prinzipien kollidieren",
      body: "Frau Meier, 79, hat eine Oberschenkelhalsfraktur. Sie will unbedingt aufstehen und zur Toilette gehen — allein. Aber sie hat eine hohe Sturzgefahr.\n\n**Autonomie** sagt: Sie darf selbst entscheiden.\n**Nonmalefizienz** sagt: Wir müssen Schaden vermeiden — ein Sturz könnte tödlich sein.\n\nWelches Prinzip überwiegt? Es gibt **keine Hierarchie** der Prinzipien nach Beauchamp und Childress. Jeder Fall erfordert eine individuelle Abwägung.\n\nMögliche Lösung: Frau Meier aufstehen lassen — aber mit Begleitung und Sicherung. So werden beide Prinzipien respektiert.",
      fallbezug: "Yasemin erkennt: Ethik gibt keine einfachen Antworten — aber sie hilft, die richtigen Fragen zu stellen.",
    },
    contentB1: {
      title: "Was tun, wenn zwei Regeln sich widersprechen?",
      body: "Frau Meier will allein aufstehen. Aber sie kann stürzen.\n\n**Autonomie**: Sie darf entscheiden.\n**Nichtschaden**: Wir müssen sie schützen.\n\nWas tun? **Beides beachten!** Sie darf aufstehen — aber mit Hilfe. So ist sie sicher und selbstbestimmt.",
      fallbezug: "Yasemin lernt: Manchmal muss man zwei Regeln gleichzeitig beachten.",
    },
  },

  // =============================================================
  // TB7: PATIENTEN_PERSPEKTIVE (Phase 7)
  // =============================================================
  {
    stepId: "le01-s4-tb7-07",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    contentC1: {
      title: "Al-Rashids Perspektive",
      body: "Herr Al-Rashid, 78, liegt auf der chirurgischen Station. Postoperativ, Tag 3.\n\nEr denkt: 'Ich war Ingenieur. 40 Jahre lang habe ich Brücken gebaut. Und jetzt soll mir eine junge Frau den Körper waschen? Das ist nicht — das geht nicht. In meiner Kultur ist das undenkbar. Warum verstehen sie das nicht?'\n\nSein Blick ist abgewandt. Die Lippen zusammengekniffen. Er schämt sich. Nicht weil er schwach ist — sondern weil seine Würde auf dem Spiel steht.",
      fallbezug: "Yasemin versteht: Herr Al-Rashid verweigert nicht die Pflege — er schützt seine Würde.",
    },
    contentB1: {
      title: "Wie fühlt sich der Patient?",
      body: "Herr Al-Rashid liegt im Krankenhaus. Er war Ingenieur. Jetzt soll eine Frau ihn waschen.\n\nEr denkt: 'Das geht nicht. In meiner Kultur ist das nicht möglich.'\n\nEr schämt sich. Er schützt seine Würde.",
      fallbezug: "Yasemin versteht: Der Patient hat Angst um seine Würde.",
    },
  },

  // =============================================================
  // TB7: ANWENDUNG (Phase 9) — BS2 Branching
  // =============================================================
  {
    stepId: "le01-s4-tb7-08",
    phase: "s4",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285", "Q7 S.283-284"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Verweigerte Körperpflege",
      body: "Herr Al-Rashid verweigert die Körperpflege durch dich (weibliche Pflegekraft). Aber der Wundverband am Oberschenkel muss gewechselt werden. Was tust du?",
      fallbezug: "BS2: Kulturelle Präferenz vs. medizinische Notwendigkeit.",
    },
    contentB1: {
      title: "Was tust du?",
      body: "Herr Al-Rashid will nicht von einer Frau gewaschen werden. Aber sein Verband muss gewechselt werden.",
      fallbezug: "Was ist die beste Lösung?",
    },
    question: {
      fragetext: "Wie reagierst du?",
      branchingOptions: [
        {
          text: "In Deutschland machen das alle Pflegekräfte, egal ob Mann oder Frau.",
          feedback: "Herr Al-Rashid fühlt sich nicht respektiert. Er verweigert auch den Verbandwechsel. Die Wunde wird nicht versorgt — Infektionsrisiko steigt. Welches ethische Prinzip wurde hier verletzt? Autonomie — das Recht auf Selbstbestimmung.",
          feedbackB1: "Der Patient fühlt sich nicht respektiert. Er will jetzt gar nichts mehr. Die Wunde kann sich entzünden.",
          isCorrect: false,
        },
        {
          text: "Einen männlichen Kollegen für die Körperpflege organisieren; den Verbandwechsel erklären und sein Einverständnis einholen.",
          feedback: "Die kulturelle Präferenz wird respektiert (Autonomie). Der medizinisch notwendige Verbandwechsel wird klar kommuniziert und mit Einverständnis durchgeführt. Patient fühlt sich verstanden — Vertrauen wächst. Kulturkongruente Pflege nach Leininger.",
          feedbackB1: "Gut! Du respektierst den Patienten und sorgst trotzdem für die Wunde. Der Patient fühlt sich verstanden.",
          isCorrect: true,
        },
        {
          text: "Körperpflege komplett weglassen — wenn er nicht will, ist das sein Problem.",
          feedback: "Hygienemangel, Hautprobleme, Würde verletzt durch Vernachlässigung. Pflege-Charta Art. 4 (qualifizierte Pflege) wird missachtet. Respekt vor kulturellen Werten darf nie zur Vernachlässigung führen.",
          feedbackB1: "Nein! Pflege weglassen ist keine Lösung. Der Patient braucht Hilfe — nur eben anders organisiert.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // TB7: REFLEXION (Phase 10) — Freetext
  // =============================================================
  {
    stepId: "le01-s4-tb7-09",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285", "Q7 S.283-284"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Ethische Reflexion",
      body: "Die Kollegin sagt: 'In Deutschland muss er das akzeptieren.' Was denkst du darüber?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Eine Kollegin sagt: 'Er muss das akzeptieren.' Bist du einverstanden?",
    },
    question: {
      fragetext: "Wie beurteilst du die Aussage der Kollegin? Beziehe dich auf mindestens ein ethisches Prinzip.",
      musterantwort: "Die Aussage ignoriert das Prinzip der Autonomie (Beauchamp/Childress) und die Pflege-Charta Art. 1 (Selbstbestimmung). Kulturelle Präferenzen bei der Körperpflege berühren die Würde. Lösung: männliche Pflegekraft organisieren, wenn möglich.",
      bewertungskriterien: [
        "Mindestens ein ethisches Prinzip korrekt benannt",
        "Kulturelle Perspektive berücksichtigt",
        "Praktische Lösung vorgeschlagen",
      ],
      satzanfaengeB1: [
        "Ich bin nicht einverstanden, weil...",
        "Der Patient hat das Recht...",
        "Eine bessere Lösung wäre...",
      ],
    },
  },

  // =============================================================
  // Snack-Step: Slider zwischen TB7 und TB8
  // =============================================================
  {
    stepId: "le01-s4-sn-01",
    phase: "s4",
    stepType: "slider",
    bloomLevel: 1,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Kurze Schätzfrage",
      body: "Wie oft triffst du als Pflegefachkraft ethische Entscheidungen an einem typischen Arbeitstag?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Wie oft muss eine Pflegekraft pro Tag ethisch entscheiden?",
    },
    question: {
      fragetext: "Schätze: Wie viele ethische Entscheidungen trifft eine Pflegefachkraft pro Schicht?",
      slider: {
        instruction: "Schiebe den Regler auf deine Schätzung.",
        unit: "Entscheidungen",
        min: 0,
        max: 50,
        step: 5,
        correctValue: 20,
        tolerance: 10,
        explanation: "Studien zeigen: Pflegefachkräfte treffen durchschnittlich 15-25 ethische Entscheidungen pro Schicht — von der Frage 'Darf ich den Patienten wecken?' bis 'Muss ich den Arzt informieren?'. Die meisten sind kleine, alltägliche Abwägungen.",
        explanationB1: "Pflegekräfte entscheiden sehr oft: etwa 15-25 Mal pro Schicht. Viele kleine Entscheidungen — zum Beispiel: Soll ich den Patienten wecken? Muss ich den Arzt rufen?",
      },
    },
  },

  // =============================================================
  // TB8: Recht & Teamarbeit — SZENE (Phase 1)
  // =============================================================
  {
    stepId: "le01-s4-tb8-01",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-III",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Was nur du darfst",
      body: "Im Reflexionsgespräch kommt Yasemin auf eine wichtige Frage.",
    },
    contentB1: {
      title: "Besondere Aufgaben",
      body: "Yasemin fragt: Was dürfen nur Pflegefachkräfte?",
    },
    question: {
      fragetext: "Yasemin und ihre Praxisanleiterin:",
      dialogLines: [
        { speaker: "Yasemin", text: "Ich habe gesehen, dass die Pflegehelferin Frau Meier die Tabletten gegeben hat. Darf die das?" },
        { speaker: "Praxisanleiterin", text: "Medikamente verteilen — ja, wenn es delegiert wird. Aber es gibt Dinge, die darfst nur DU als Pflegefachkraft tun." },
        { speaker: "Yasemin", text: "Was zum Beispiel?" },
        { speaker: "Praxisanleiterin", text: "Den Pflegebedarf erheben, den Pflegeprozess steuern, die Qualität sichern. Das steht im PflBG, Paragraf 4." },
      ],
    },
  },

  // =============================================================
  // TB8: ERKLÄRUNG (Phase 2) — PflBG §4 + ICN-Ethikkodex
  // =============================================================
  {
    stepId: "le01-s4-tb8-02",
    phase: "s4",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-IV",
    quellen: ["Q1 S.23", "Q7 S.283"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/pflbg-vorbehaltene.svg",
    imageAlt: "Grafik: Vorbehaltene Tätigkeiten nach PflBG §4",
    contentC1: {
      title: "PflBG §4 und ICN-Ethikkodex",
      body: "**Vorbehaltene Tätigkeiten (PflBG §4):**\nNur Pflegefachkräfte dürfen:\n1. Den Pflegebedarf erheben\n2. Den Pflegeprozess organisieren und steuern\n3. Die Pflegequalität sichern\n\nDiese Aufgaben dürfen **nicht** an Pflegehelfer delegiert werden.\n\n**ICN-Ethikkodex (seit 1953):**\nVerhaltensnormen in 4 Bereichen:\n- Gegenüber Mitmenschen\n- In der Berufsausübung\n- Gegenüber der Profession\n- Gegenüber Kollegen",
      fallbezug: "Yasemin versteht: Als Pflegefachfrau trägt sie eine besondere Verantwortung — rechtlich und ethisch.",
    },
    contentB1: {
      title: "Deine besonderen Aufgaben",
      body: "Das Gesetz sagt: Nur Pflegefachkräfte dürfen:\n1. Den Pflegebedarf feststellen\n2. Die Pflege planen und steuern\n3. Die Qualität der Pflege prüfen\n\nDas darf kein Pflegehelfer machen.\n\nDer **ICN-Ethikkodex** sagt, wie sich Pflegende verhalten sollen: gegenüber Patienten, im Beruf und mit Kollegen.",
      fallbezug: "Yasemin lernt: Sie hat besondere Aufgaben, die nur sie machen darf.",
    },
  },

  // =============================================================
  // TB8: ERKLÄRUNG (Phase 2) — Pflege-Charta Flipcard
  // =============================================================
  {
    stepId: "le01-s4-tb8-03",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-284"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ERKLÄRUNG",
    imageUrl: "/images/content/le-01/pflege-charta.svg",
    imageAlt: "Grafik: 8 Artikel der Pflege-Charta",
    contentC1: {
      title: "Die Pflege-Charta: 8 Rechte",
      body: "Tippe auf jede Karte, um die 8 Artikel der Pflege-Charta (2005) zu entdecken.",
    },
    contentB1: {
      title: "8 Rechte für Patienten",
      body: "Jeder Patient hat Rechte. Tippe auf die Karten!",
    },
    question: {
      fragetext: "Die 8 Artikel der Pflege-Charta:",
      cards: [
        { front: "Artikel 1", back: "Selbstbestimmung und Hilfe zur Selbsthilfe — Der Patient entscheidet selbst über sein Leben.", backB1: "Der Patient darf selbst entscheiden." },
        { front: "Artikel 2", back: "Körperliche und seelische Unversehrtheit — Schutz vor Gewalt, Vernachlässigung und entwürdigender Behandlung.", backB1: "Niemand darf dem Patienten wehtun oder ihn vernachlässigen." },
        { front: "Artikel 3", back: "Privatheit — Das Recht auf einen persönlichen Bereich und Intimsphäre.", backB1: "Der Patient hat ein Recht auf Privatsphäre." },
        { front: "Artikel 4", back: "Pflege, Betreuung und Behandlung — Anspruch auf qualifizierte, individuelle Pflege.", backB1: "Jeder hat das Recht auf gute Pflege." },
        { front: "Artikel 5", back: "Information, Beratung und Aufklärung — Das Recht, über alles informiert zu werden.", backB1: "Der Patient muss alles erklärt bekommen." },
        { front: "Artikel 6", back: "Kommunikation, Wertschätzung und Teilhabe — Das Recht auf Gespräch und Mitbestimmung.", backB1: "Der Patient darf mitreden und mitentscheiden." },
        { front: "Artikel 7", back: "Religion, Kultur und Weltanschauung — Achtung der kulturellen und religiösen Überzeugungen.", backB1: "Religion und Kultur des Patienten müssen respektiert werden." },
        { front: "Artikel 8", back: "Palliative Begleitung, Sterben und Tod — Das Recht auf ein würdevolles Sterben.", backB1: "Jeder Mensch hat das Recht, in Würde zu sterben." },
      ],
    },
  },

  // =============================================================
  // TB8: CHECKPOINT (Phase 3) — MC Delegation
  // =============================================================
  {
    stepId: "le01-s4-tb8-04",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q1 S.23"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Weißt du, welche Aufgaben nicht delegiert werden dürfen?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Was darf nur die Pflegefachkraft machen?",
    },
    question: {
      fragetext: "Welche Tätigkeit darf NICHT an einen Pflegehelfer delegiert werden?",
      options: [
        { text: "Pflegebedarf erheben und den Pflegeprozess steuern", isCorrect: true, explanation: "Richtig! PflBG §4: Pflegebedarf erheben, Pflegeprozess steuern und Qualität sichern sind vorbehaltene Tätigkeiten — nur für Pflegefachkräfte." },
        { text: "Blutdruck messen", isCorrect: false, explanation: "Blutdruck messen kann an geschulte Pflegehelfer delegiert werden. Es ist keine vorbehaltene Tätigkeit." },
        { text: "Patienten beim Essen unterstützen", isCorrect: false, explanation: "Die Unterstützung beim Essen kann delegiert werden — es ist eine grundpflegerische Tätigkeit." },
        { text: "Medikamente verteilen (nach Delegation)", isCorrect: false, explanation: "Die Medikamentenverteilung kann unter bestimmten Bedingungen delegiert werden. Die Verantwortung bleibt aber bei der Pflegefachkraft." },
      ],
    },
  },

  // =============================================================
  // TB8: PRAXIS_DIALOG (Phase 6) — Tuckman Dialog
  // =============================================================
  {
    stepId: "le01-s4-tb8-05",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-III",
    quellen: ["Q6 S.270"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "PRAXIS_DIALOG",
    contentC1: {
      title: "Teamarbeit auf Station",
      body: "Die Praxisanleiterin erklärt Yasemin, warum es manchmal Konflikte im Team gibt.",
    },
    contentB1: {
      title: "Warum gibt es Streit im Team?",
      body: "Die Praxisanleiterin erklärt, wie Teams funktionieren.",
    },
    question: {
      fragetext: "Im Pausenraum:",
      dialogLines: [
        { speaker: "Yasemin", text: "Heute haben sich zwei Kolleginnen gestritten — wegen der Zimmerverteilung. Ist das normal?" },
        { speaker: "Praxisanleiterin", text: "Ja! Das ist die Storming-Phase. Jedes Team durchläuft 5 Phasen nach Tuckman." },
        { speaker: "Yasemin", text: "5 Phasen?" },
        { speaker: "Praxisanleiterin", text: "Forming — man lernt sich kennen. Storming — es gibt Konflikte. Norming — man einigt sich auf Regeln. Performing — das Team arbeitet richtig gut. Adjourning — das Team löst sich auf." },
        { speaker: "Yasemin", text: "Und wo sind wir gerade?" },
        { speaker: "Praxisanleiterin", text: "Ich würde sagen: zwischen Storming und Norming. Das ist ein gutes Zeichen — es zeigt, dass wir uns weiterentwickeln." },
      ],
    },
  },

  // =============================================================
  // TB8: ANDERS_ERKLÄRT (Phase 4) — Tuckman Timeline
  // =============================================================
  {
    stepId: "le01-s4-tb8-06",
    phase: "s4",
    stepType: "timeline",
    bloomLevel: 2,
    kompetenzbereich: "KB-III",
    quellen: ["Q6 S.270"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANDERS_ERKLÄRT",
    imageUrl: "/images/content/le-01/tuckman-phasen.svg",
    imageAlt: "Grafik: 5 Teamphasen nach Tuckman",
    contentC1: {
      title: "Die 5 Teamphasen nach Tuckman",
      body: "Jedes Team durchläuft diese Phasen — auch Pflegeteams auf Station.",
    },
    contentB1: {
      title: "5 Phasen im Team",
      body: "So entwickeln sich Teams. Schau dir die 5 Schritte an.",
    },
    question: {
      fragetext: "Die 5 Teamphasen:",
      timeline: {
        instruction: "Die 5 Phasen der Teamentwicklung nach Tuckman:",
        events: [
          { id: "forming", time: "Phase 1", title: "Forming", description: "Orientierung: Das Team lernt sich kennen. Alle sind höflich und vorsichtig. Rollen sind noch unklar.", descriptionB1: "Alle lernen sich kennen. Jeder ist noch unsicher.", icon: "users" },
          { id: "storming", time: "Phase 2", title: "Storming", description: "Konfrontation: Es gibt Konflikte um Rollen, Aufgaben und Regeln. Meinungsverschiedenheiten sind normal und wichtig.", descriptionB1: "Es gibt Streit. Das ist normal und sogar wichtig.", icon: "zap" },
          { id: "norming", time: "Phase 3", title: "Norming", description: "Regelbildung: Das Team einigt sich auf gemeinsame Regeln und Standards. Vertrauen wächst.", descriptionB1: "Das Team macht gemeinsame Regeln. Man vertraut sich mehr.", icon: "handshake" },
          { id: "performing", time: "Phase 4", title: "Performing", description: "Leistung: Das Team arbeitet effektiv zusammen. Starkes Wir-Gefühl, offene Kommunikation, gegenseitige Anerkennung.", descriptionB1: "Das Team arbeitet richtig gut zusammen.", icon: "trophy" },
          { id: "adjourning", time: "Phase 5", title: "Adjourning", description: "Auflösung: Das Team löst sich auf (z. B. Ende des Praxiseinsatzes). Abschied und Reflexion.", descriptionB1: "Das Team löst sich auf. Man verabschiedet sich.", icon: "door-open" },
        ],
      },
    },
  },

  // =============================================================
  // TB8: ANWENDUNG (Phase 9) — Categorize Rollenkonflikte
  // =============================================================
  {
    stepId: "le01-s4-tb8-07",
    phase: "s4",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-III",
    quellen: ["Q6 S.267-269"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Inter- oder Intrarollenkonflikt?",
      body: "Ordne die Situationen zu: Entsteht der Konflikt zwischen verschiedenen Rollen (inter) oder innerhalb einer Rolle (intra)?",
    },
    contentB1: {
      title: "Welcher Konflikt?",
      body: "Sortiere: Ist es ein Konflikt zwischen zwei Rollen oder innerhalb einer Rolle?",
    },
    question: {
      fragetext: "Ordne zu: Interrollenkonflikt oder Intrarollenkonflikt?",
      categories: [
        { name: "Interrollenkonflikt (verschiedene Rollen)" },
        { name: "Intrarollenkonflikt (innerhalb einer Rolle)" },
      ],
      categoryItems: [
        { text: "Yasemin ist Azubi UND Tochter — die Mutter will, dass sie am Feiertag nach Hause kommt, aber sie hat Dienst.", correctCategory: 0 },
        { text: "Die Stationsleitung erwartet, dass Yasemin schnell arbeitet — die Patienten erwarten, dass sie sich Zeit nimmt.", correctCategory: 1 },
        { text: "Yasemin ist Kollegin UND Freundin einer Mitschülerin — die Mitschülerin macht einen Fehler.", correctCategory: 0 },
        { text: "Der Arzt erwartet, dass die Pflegekraft seine Anordnungen sofort umsetzt — das Pflegeteam hat andere Prioritäten.", correctCategory: 1 },
        { text: "Yasemin ist Pflegende UND gläubige Muslima — ein Patient macht einen abfälligen Kommentar über ihren Glauben.", correctCategory: 0 },
        { text: "Die Patientin will selbstbestimmt entscheiden — die Pflegekraft soll aber Schaden vermeiden.", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // TB8: REFLEXION (Phase 10) — Reflection Teamphase
  // =============================================================
  {
    stepId: "le01-s4-tb8-08",
    phase: "s4",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q6 S.270"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Dein Team",
      body: "Denke an ein Team, in dem du gerade arbeitest oder lernst. In welcher Tuckman-Phase befindet es sich?",
    },
    contentB1: {
      title: "Wie ist dein Team?",
      body: "Denke an dein Team. In welcher Phase seid ihr?",
    },
    question: {
      fragetext: "In welcher Tuckman-Phase befindet sich dein Team gerade? Begründe mit einem Beispiel.",
      satzanfaenge: [
        "Mein Team ist gerade in der Phase...",
        "Das merke ich daran, dass...",
        "Um in die nächste Phase zu kommen, müssten wir...",
      ],
      minWords: 20,
    },
  },

  // =============================================================
  // Session-Abschluss: Memory Ethik-Begriffe
  // =============================================================
  {
    stepId: "le01-s4-bk-02",
    phase: "s4",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Ethik-Memory",
      body: "Finde die passenden Paare: Ethik-Begriff und Erklärung.",
    },
    contentB1: {
      title: "Memory-Spiel",
      body: "Finde die Paare! Welcher Begriff passt zu welcher Erklärung?",
    },
    question: {
      fragetext: "Finde die 6 Paare:",
      memoryPairs: [
        { a: "Autonomie", b: "Selbstbestimmung des Patienten" },
        { a: "Benefizienz", b: "Zum Wohl des Patienten handeln" },
        { a: "Nonmalefizienz", b: "Keinen Schaden anrichten" },
        { a: "Würde", b: "Wert der jedem Menschen innewohnt" },
        { a: "Pflege-Charta", b: "8 Rechte für Pflegebedürftige" },
        { a: "Vorbehaltene Tätigkeiten", b: "Nur Pflegefachkräfte dürfen das" },
      ],
    },
  },

  // =============================================================
  // Session-Abschluss: Interleaving TrueFalse (10%)
  // 3x Ethik + 1x Kommunikation + 1x Pflegeprozess
  // =============================================================
  {
    stepId: "le01-s4-bk-03",
    phase: "s4",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285", "Q5 S.249", "Q2 S.78"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Gemischte Wiederholung",
      body: "5 Aussagen — nicht nur Ethik! Auch Kommunikation und Pflegeprozess sind dabei.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "5 Aussagen aus verschiedenen Themen. Lies genau!",
    },
    question: {
      fragetext: "Wische: Stimmt oder stimmt nicht?",
      trueFalseCards: [
        { statement: "Die 4 ethischen Prinzipien haben eine feste Rangordnung — Autonomie steht immer an erster Stelle.", isTrue: false, explanation: "Falsch! Nach Beauchamp und Childress gibt es keine Hierarchie der Prinzipien. Jeder Fall erfordert eine individuelle Abwägung." },
        { statement: "Die Pflege-Charta enthält 8 Artikel zu den Rechten pflegebedürftiger Menschen.", isTrue: true, explanation: "Richtig! Von Selbstbestimmung (Art. 1) bis würdevolles Sterben (Art. 8) — 8 Rechte seit 2005." },
        { statement: "Würde hat man nur, wenn man etwas Besonderes geleistet hat.", isTrue: false, explanation: "Falsch! Würde ist jedem Menschen zu eigen — allein weil er existiert. Art. 1 GG: 'Die Würde des Menschen ist unantastbar.'" },
        { statement: "Kongruente Kommunikation bedeutet, dass verbale und nonverbale Botschaften übereinstimmen.", isTrue: true, explanation: "Richtig! Inkongruenz (Widerspruch zwischen Gesagtem und Körpersprache) irritiert und stört die Kommunikation. (Interleaving: S3 Kommunikation)" },
        { statement: "Der Pflegeprozess beginnt mit der Festlegung von Pflegezielen.", isTrue: false, explanation: "Falsch! Der erste Schritt ist die Informationssammlung (Pflegeanamnese). Ziele werden erst im 3. Schritt festgelegt. (Interleaving: S2 Pflegeprozess)" },
      ],
    },
  },

  // =============================================================
  // Session-Bookend: Summary
  // =============================================================
  {
    stepId: "le01-s4-bk-04",
    phase: "s4",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-menschenbild",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 4 ist geschafft! Hier sind deine 4 wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Gut gemacht!",
    },
    question: {
      fragetext: "Deine 4 Kernaussagen aus Session 4:",
      summaryPoints: [
        "**Ethik vs. Moral:** Ethik ist das Nachdenken über richtiges Handeln. Die 4 Prinzipien (Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit) helfen bei Entscheidungen — aber keines hat automatisch Vorrang.",
        "**Würde ist unantastbar:** Jeder Mensch hat Würde — allein weil er existiert. Pflegebedürftige sind besonders verletzlich und brauchen besonderen Schutz.",
        "**Recht:** PflBG §4 definiert vorbehaltene Tätigkeiten. Die Pflege-Charta schützt 8 Rechte pflegebedürftiger Menschen. Der ICN-Ethikkodex regelt das Verhalten von Pflegenden.",
        "**Teamarbeit:** Teams durchlaufen 5 Phasen nach Tuckman. Konflikte (Storming) sind normal und notwendig für die Entwicklung.",
      ],
    },
  },
];
