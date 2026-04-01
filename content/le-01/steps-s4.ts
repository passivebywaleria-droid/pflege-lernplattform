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
      fragetext: "Reflexionsgespräch mit der Praxisanleiterin:",
      dialogPhases: [
        {
          context: "Die Praxisanleiterin lehnt sich zurück und fragt: 'Du hast diese Woche viel gelernt. Was hat dich am meisten beschäftigt?'",
          contextB1: "Die Praxisanleiterin fragt: 'Was war diese Woche am wichtigsten für dich?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Die Sache mit Herrn Brenner. Ich musste lernen, professionell nah zu sein — nicht privat nah.",
              textB1: "Herr Brenner. Ich habe gelernt: nah sein, aber professionell.",
              patientResponse: "Das ist eine wichtige Erkenntnis! Professionelle Nähe ist eine Kompetenz, die du dein ganzes Berufsleben lang weiterentwickelst.",
              patientResponseB1: "Sehr gut! Das ist eine wichtige Erkenntnis für die Pflege.",
              score: 3,
              feedback: "Ausgezeichnet! Du verknüpfst deine Erfahrung mit Herrn Brenner direkt mit dem Konzept der professionellen Nähe und Distanz. Das zeigt echte Reflexionsfähigkeit.",
              feedbackB1: "Super! Du denkst über deine Erfahrung nach und lernst daraus. Das ist sehr gut.",
            },
            {
              text: "Alles war neu. Ich bin einfach froh, dass die Woche vorbei ist.",
              textB1: "Alles war neu. Ich bin froh, dass die Woche vorbei ist.",
              patientResponse: "Das kann ich verstehen — die erste Woche ist immer intensiv. Aber gab es einen Moment, der dich besonders zum Nachdenken gebracht hat?",
              patientResponseB1: "Das verstehe ich. Aber gab es einen besonderen Moment für dich?",
              score: 2,
              feedback: "Verständliche Reaktion, aber noch keine echte Reflexion. Die Praxisanleiterin hilft dir, tiefer nachzudenken. In der Pflege ist Reflexion ein wichtiges Werkzeug.",
              feedbackB1: "Okay, aber denke genauer nach. Was hast du wirklich gelernt? Reflexion hilft beim Lernen.",
            },
            {
              text: "Ich weiß nicht. Es war halt Arbeit.",
              textB1: "Ich weiß nicht. Es war Arbeit.",
              patientResponse: "Hmm. Lass mich anders fragen: Gab es eine Situation, in der du unsicher warst — wo du nicht wusstest, was richtig ist?",
              patientResponseB1: "Okay. Gab es einen Moment, wo du unsicher warst?",
              score: 1,
              feedback: "Reflexion fällt am Anfang schwer, aber sie ist in der Pflege unverzichtbar. Die Praxisanleiterin gibt dir eine zweite Chance — nutze sie, um über konkrete Situationen nachzudenken.",
              feedbackB1: "Nachdenken über die Arbeit ist wichtig in der Pflege. Versuche, über bestimmte Situationen nachzudenken.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin nickt nachdenklich. 'Das bringt mich zu einer wichtigen Frage: Hast du dich mal gefragt, wann du wirklich RICHTIG handelst? Nicht nur das tust, was im Plan steht — sondern ethisch richtig handelst?'",
          contextB1: "Die Praxisanleiterin fragt: 'Wann handelst du RICHTIG? Nicht nur nach Plan — sondern wirklich richtig?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Das ist eine schwierige Frage. Was ist, wenn die Pflegeplanung sagt Körperpflege — aber der Patient sagt Nein?",
              textB1: "Das ist schwer. Was mache ich, wenn der Patient Nein sagt?",
              patientResponse: "Genau! Dann stehst du vor einem ethischen Dilemma. Und dafür gibt es Werkzeuge — ethische Prinzipien, die dir helfen, die richtige Entscheidung zu finden.",
              patientResponseB1: "Genau! Das ist eine ethische Frage. Dafür gibt es Regeln, die dir helfen.",
              score: 3,
              feedback: "Hervorragend! Du erkennst das ethische Dilemma zwischen Pflegeauftrag und Patientenwille. Das ist genau der Kern der Pflegeethik — und der Einstieg in das heutige Thema.",
              feedbackB1: "Sehr gut! Du hast das Problem erkannt: Was tun, wenn Plan und Wunsch des Patienten nicht zusammenpassen?",
            },
            {
              text: "Richtig handeln? Ich mache einfach, was in der Pflegeplanung steht.",
              textB1: "Ich mache, was im Plan steht. Das ist richtig.",
              patientResponse: "Das ist ein guter Anfang. Aber was, wenn die Pflegeplanung sagt Körperpflege — und der Patient sagt Nein? Dann reicht der Plan allein nicht mehr.",
              patientResponseB1: "Okay, aber was machst du, wenn der Patient Nein sagt? Der Plan hilft dann nicht weiter.",
              score: 2,
              feedback: "Die Pflegeplanung ist wichtig, aber sie ersetzt nicht die ethische Reflexion. Manchmal musst du zwischen dem Plan und dem Wunsch des Patienten abwägen.",
              feedbackB1: "Der Plan ist wichtig. Aber manchmal musst du auch selbst entscheiden, was richtig ist.",
            },
            {
              text: "Darüber habe ich noch nie nachgedacht. Ich tue einfach, was man mir sagt.",
              textB1: "Ich mache, was man mir sagt.",
              patientResponse: "Anweisungen befolgen ist wichtig — aber als Pflegefachkraft musst du auch selbst ethische Entscheidungen treffen können. Stell dir vor: Die Pflegeplanung sagt Körperpflege, aber der Patient sagt Nein. Was dann?",
              patientResponseB1: "Anweisungen sind wichtig. Aber du musst auch selbst entscheiden können. Was machst du, wenn der Patient Nein sagt?",
              score: 1,
              feedback: "Als Pflegefachkraft trägst du eigene Verantwortung. Blindes Befolgen reicht nicht — du musst lernen, ethisch zu reflektieren. Genau das üben wir heute.",
              feedbackB1: "In der Pflege musst du auch selbst nachdenken und entscheiden. Das lernst du heute.",
            },
          ],
        },
      ],
      patientName: "Praxisanleiterin",
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
      fragetext: "Im Reflexionsgespräch — Delegation und Verantwortung:",
      dialogPhases: [
        {
          context: "Yasemin erzählt: 'Ich habe gesehen, dass die Pflegehelferin Frau Meier die Tabletten gegeben hat.' Die Praxisanleiterin schaut dich an: 'Und — was denkst du? Darf die Pflegehelferin das?'",
          contextB1: "Yasemin hat gesehen: Die Pflegehelferin gibt Tabletten. Die Praxisanleiterin fragt: 'Darf sie das?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Moment, ist das erlaubt? Ich dachte, nur Pflegefachkräfte dürfen Medikamente geben. Oder gibt es Aufgaben, die man weitergeben darf, und andere, die man nicht weitergeben darf?",
              textB1: "Darf die Helferin das? Ich dachte, Tabletten dürfen nur Pflegefachkräfte geben.",
              patientResponse: "Gute Frage! Medikamente verteilen kann tatsächlich delegiert werden. Aber den Pflegebedarf erheben, den Pflegeprozess steuern und die Qualität sichern — das darfst nur DU als Pflegefachkraft. Das steht im PflBG, Paragraf 4.",
              patientResponseB1: "Gute Frage! Tabletten geben darf delegiert werden. Aber Pflege planen und Qualität prüfen — das darfst nur du.",
              score: 3,
              feedback: "Sehr gut differenziert! Du stellst die richtige Frage und erkennst, dass es einen Unterschied zwischen delegierbaren und vorbehaltenen Tätigkeiten geben muss.",
              feedbackB1: "Super! Du fragst genau richtig: Es gibt Aufgaben, die nur Pflegefachkräfte machen dürfen.",
            },
            {
              text: "Das sieht falsch aus. Ich glaube, das darf die Pflegehelferin nicht. Medikamente geben ist doch nur Sache der Pflegefachkraft, oder?",
              textB1: "Das darf sie nicht, oder? Nur Pflegefachkräfte dürfen Medikamente geben.",
              patientResponse: "Nicht ganz. Medikamente verteilen KANN unter bestimmten Bedingungen delegiert werden. Aber es gibt andere Aufgaben, die wirklich nur Pflegefachkräfte machen dürfen — die sogenannten vorbehaltenen Tätigkeiten nach PflBG §4.",
              patientResponseB1: "Nicht ganz. Tabletten geben kann erlaubt sein. Aber andere Aufgaben darf wirklich nur die Pflegefachkraft machen.",
              score: 2,
              feedback: "Guter Instinkt, aber etwas zu streng. Die Medikamentenverteilung kann delegiert werden. Die wirklich vorbehaltenen Tätigkeiten sind: Pflegebedarf erheben, Pflegeprozess steuern, Qualität sichern.",
              feedbackB1: "Fast richtig. Tabletten geben darf delegiert werden. Aber Pflege planen und prüfen — das nur die Pflegefachkraft.",
            },
            {
              text: "Ich habe das auch schon auf anderen Stationen gesehen. Tabletten verteilen macht doch jeder, oder? Ist das ein Problem?",
              textB1: "Ich habe das auch schon gesehen. Tabletten geben macht doch jeder, oder?",
              patientResponse: "Vorsicht! Medikamente verteilen ist nicht trivial — es kann delegiert werden, aber nur unter bestimmten Bedingungen und unter Verantwortung der Pflegefachkraft. Und es gibt Aufgaben, die überhaupt nicht delegiert werden dürfen.",
              patientResponseB1: "Nicht so einfach! Die Pflegefachkraft muss das erlauben. Und manche Aufgaben darf wirklich nur sie machen.",
              score: 1,
              feedback: "Medikamentengabe ist eine verantwortungsvolle Aufgabe, die nur unter klaren Bedingungen delegiert werden darf. Als Pflegefachkraft trägst du die Gesamtverantwortung — unterschätze das nicht.",
              feedbackB1: "Tabletten geben ist nicht einfach. Die Pflegefachkraft ist verantwortlich. Und manche Aufgaben darf nur sie machen.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin erklärt: 'PflBG Paragraf 4 nennt drei vorbehaltene Tätigkeiten. Stell dir vor: Ein neuer Pflegehelfer fragt dich, ob er die Pflegeplanung für Herrn Al-Rashid schreiben darf. Was sagst du?'",
          contextB1: "Die Praxisanleiterin fragt: 'Ein Pflegehelfer will die Pflegeplanung schreiben. Erlaubst du das?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Hmm, ich glaube, das darf er nicht, oder? Die Pflegeplanung ist doch Teil des Pflegeprozesses — und das ist vorbehaltene Tätigkeit. Aber könnte er mir beim Blutdruckmessen helfen?",
              textB1: "Ich glaube nicht. Pflegeplanung darf nur die Pflegefachkraft, oder? Aber er kann mir beim Blutdruckmessen helfen.",
              patientResponse: "Perfekt! Du trennst sauber zwischen vorbehaltener Tätigkeit und delegierbarer Unterstützung. Der Pflegehelfer kann wertvolle Zuarbeit leisten — aber die Steuerung bleibt bei dir.",
              patientResponseB1: "Genau richtig! Die Planung machst du. Aber er kann dir helfen.",
              score: 3,
              feedback: "Hervorragend! Du erkennst die Grenze zwischen vorbehaltenen Tätigkeiten und Delegation — und denkst gleichzeitig daran, wie ihr als Team zusammenarbeiten könnt.",
              feedbackB1: "Sehr gut! Du weißt, was nur du darfst, und du arbeitest trotzdem gut im Team.",
            },
            {
              text: "Ich bin mir nicht sicher. Eigentlich will ich ihm helfen, aber darf ich die Pflegeplanung einfach so abgeben?",
              textB1: "Ich weiß nicht. Darf ich die Pflegeplanung abgeben?",
              patientResponse: "Gute Überlegung! Die Pflegeplanung ist eine vorbehaltene Tätigkeit — du darfst sie nicht delegieren. Aber könntest du ihm erklären, warum? Und ihm stattdessen eine andere Aufgabe geben?",
              patientResponseB1: "Gute Frage! Die Planung darfst du nicht abgeben. Aber erkläre ihm, warum — und gib ihm eine andere Aufgabe.",
              score: 2,
              feedback: "Du spürst richtig, dass etwas nicht stimmt. Die Pflegeplanung ist eine vorbehaltene Tätigkeit nach PflBG §4. Wichtig ist auch, dem Pflegehelfer zu erklären, warum — und ihm eine passende Alternative zu geben.",
              feedbackB1: "Stimmt, du spürst richtig! Sage ihm auch, warum. Und gib ihm eine andere Aufgabe.",
            },
            {
              text: "Klar, warum nicht? Er will etwas lernen, und im Team sollte man sich gegenseitig unterstützen.",
              textB1: "Ja, er soll das lernen. Im Team hilft man sich.",
              patientResponse: "Das ist nett gemeint, aber rechtlich nicht möglich. Die Pflegeplanung ist eine vorbehaltene Tätigkeit nach PflBG §4 — sie darf nicht an Pflegehelfer delegiert werden, auch nicht als Lernaufgabe.",
              patientResponseB1: "Das geht leider nicht. Die Pflegeplanung darf nur die Pflegefachkraft machen. Das ist Gesetz.",
              score: 1,
              feedback: "Teamgeist ist toll, aber hier geht es um gesetzliche Grenzen. Vorbehaltene Tätigkeiten nach PflBG §4 dürfen nicht delegiert werden — egal wie kompetent der Pflegehelfer ist.",
              feedbackB1: "Gute Absicht, aber das Gesetz sagt: Pflegeplanung darf nur die Pflegefachkraft machen.",
            },
          ],
        },
      ],
      patientName: "Praxisanleiterin",
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
      fragetext: "Im Pausenraum — Teamkonflikte verstehen:",
      dialogPhases: [
        {
          context: "Yasemin erzählt aufgeregt: 'Heute haben sich zwei Kolleginnen gestritten — wegen der Zimmerverteilung. Eine hat gesagt, die andere drückt sich immer vor den schweren Patienten.' Die Praxisanleiterin lächelt: 'Und was denkst du — ist das normal?'",
          contextB1: "Yasemin erzählt: Zwei Kolleginnen haben gestritten. Die Praxisanleiterin fragt: 'Ist das normal?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich glaube schon. In meiner Schulklasse gab es am Anfang auch Konflikte — und danach haben wir besser zusammengearbeitet. Ist das im Pflegeteam ähnlich?",
              textB1: "Ich glaube ja. In meiner Klasse gab es auch erst Streit, dann wurde es besser. Ist das hier auch so?",
              patientResponse: "Sehr gut beobachtet! Das nennt man die Storming-Phase. Jedes Team durchläuft 5 Phasen nach dem Psychologen Tuckman. Konflikte sind nicht nur normal — sie sind sogar notwendig, damit ein Team zusammenwächst.",
              patientResponseB1: "Genau! Das heißt Storming. Jedes Team streitet am Anfang. Danach wird es besser.",
              score: 3,
              feedback: "Ausgezeichnet! Du erkennst aus eigener Erfahrung, dass Konflikte ein natürlicher Teil der Teamentwicklung sind. Diese Reflexionsfähigkeit ist wichtig für deine Arbeit im Pflegeteam.",
              feedbackB1: "Sehr gut! Du erkennst: Streit im Team ist normal und kann sogar helfen.",
            },
            {
              text: "Ich bin verunsichert. Streit im Team — ist das nicht schlecht? Sollte man das nicht vermeiden?",
              textB1: "Ich bin unsicher. Ist Streit nicht schlecht? Soll man das nicht vermeiden?",
              patientResponse: "Das denken viele! Aber der Psychologe Tuckman hat gezeigt: Konflikte gehören dazu. Jedes Team durchläuft 5 Phasen — und die Storming-Phase mit ihren Konflikten ist ein wichtiger Schritt zur guten Zusammenarbeit.",
              patientResponseB1: "Das denken viele. Aber Streit gehört dazu! Das hat der Forscher Tuckman herausgefunden.",
              score: 2,
              feedback: "Eine verständliche Annahme. Aber in der Teamforschung wissen wir: Konflikte sind oft ein Zeichen dafür, dass ein Team sich weiterentwickelt. Die Storming-Phase ist normal und wichtig.",
              feedbackB1: "Verständlich. Aber Streit im Team ist nicht immer schlecht. Er zeigt, dass das Team sich entwickelt.",
            },
            {
              text: "Ehrlich gesagt finde ich das total unprofessionell. Die sollten einfach ihre Arbeit machen, statt zu streiten.",
              textB1: "Ich finde das nicht gut. Man sollte nicht streiten bei der Arbeit.",
              patientResponse: "Ich verstehe, warum du das denkst. Aber Konflikte zu vermeiden ist auch nicht die Lösung. Der Psychologe Tuckman hat herausgefunden, dass jedes Team durch eine Konfliktphase muss, um wirklich gut zusammenzuarbeiten.",
              patientResponseB1: "Ich verstehe. Aber kein Streit ist auch nicht gut. Teams müssen erst streiten, um dann besser zu arbeiten.",
              score: 1,
              feedback: "Konfliktvermeidung klingt professionell, führt aber oft zu unausgesprochenen Problemen. In der Pflegeteamarbeit ist es wichtig, Konflikte als Chance zur Weiterentwicklung zu sehen — nicht als Störung.",
              feedbackB1: "Streit vermeiden ist nicht immer besser. Manchmal muss ein Team erst streiten, um danach besser zu arbeiten.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin erklärt die 5 Phasen: Forming, Storming, Norming, Performing, Adjourning. Dann fragt sie: 'In welcher Phase ist unser Stationsteam gerade, was meinst du?'",
          contextB1: "Die Praxisanleiterin hat 5 Phasen erklärt. Sie fragt: 'In welcher Phase ist unser Team?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Mir ist aufgefallen, dass es noch Konflikte gibt, aber ich sehe auch, dass sich Absprachen entwickeln. Könnte das zwischen Storming und Norming sein?",
              textB1: "Ich sehe noch Streit, aber auch schon Regeln. Ist das zwischen Storming und Norming?",
              patientResponse: "Genau meine Einschätzung! Wir haben noch Konflikte, aber das Team einigt sich zunehmend auf gemeinsame Standards. Das ist ein gutes Zeichen — es zeigt, dass wir uns weiterentwickeln.",
              patientResponseB1: "Genau! Es gibt noch Streit, aber es wird besser. Das zeigt: Das Team entwickelt sich.",
              score: 3,
              feedback: "Hervorragende Einschätzung! Du kannst die Tuckman-Phasen auf eine reale Situation anwenden und erkennst die Übergänge zwischen den Phasen. Das ist Analyse auf Bloom-Stufe 4.",
              feedbackB1: "Sehr gut! Du kannst die Theorie auf dein echtes Team anwenden. Das zeigt Verständnis.",
            },
            {
              text: "Ich habe das Gefühl, die meisten arbeiten gut zusammen. Ist das schon Performing?",
              textB1: "Die meisten arbeiten gut zusammen. Ist das Performing?",
              patientResponse: "Hmm, fast. Performing bedeutet, dass es kaum noch Konflikte gibt und alle richtig gut zusammenarbeiten. Aber wir hatten heute noch Streit — das spricht eher für Storming oder den Übergang zu Norming.",
              patientResponseB1: "Fast. Aber heute gab es Streit. Das heißt: Wir sind noch nicht bei Performing.",
              score: 2,
              feedback: "Guter Optimismus! Aber wenn es noch aktive Konflikte gibt, ist das Team wahrscheinlich noch in der Storming- oder Norming-Phase. Performing zeichnet sich durch wenig Konflikte und starkes Wir-Gefühl aus.",
              feedbackB1: "Fast richtig. Aber bei Performing gibt es fast keinen Streit mehr. Wir haben noch Streit — also noch nicht Performing.",
            },
            {
              text: "Ich bin erst eine Woche hier und traue mich nicht, das einzuschätzen. Können Sie mir einen Hinweis geben?",
              textB1: "Ich bin erst eine Woche hier. Ich traue mich nicht zu sagen. Können Sie mir helfen?",
              patientResponse: "Das stimmt, du bist noch neu. Aber genau deshalb ist es spannend: Du hast einen frischen Blick! Was hast du diese Woche beobachtet — eher Konflikte oder eher gute Zusammenarbeit?",
              patientResponseB1: "Stimmt, du bist neu. Aber was hast du gesehen? Mehr Streit oder mehr gute Arbeit?",
              score: 1,
              feedback: "Verständlich, aber trau dich ruhig, eine Einschätzung abzugeben. In der Pflege ist Beobachtung ein Kernwerkzeug — und du beobachtest das Team ja schon seit einer Woche.",
              feedbackB1: "Du darfst ruhig etwas sagen. Du hast eine Woche beobachtet — das reicht für eine erste Meinung.",
            },
          ],
        },
      ],
      patientName: "Praxisanleiterin",
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
