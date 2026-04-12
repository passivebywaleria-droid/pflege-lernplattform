// Session 3 (Pfad 3): "Dein Beruf, dein Recht" — LE-01 Personen- und situationsorientiert professionell pflegen
// Kapitel 4 (Berufspolitik) + Kapitel 5 (PflBG und generalistische Ausbildung)
// Bloom: B1–B3, 11 Steps
// Leitfall: Markus T. (34)

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // ================================================================
  // Step 1: crowdPoll — Weißt du, was eine Pflegekammer ist?
  // ================================================================
  {
    stepId: "le01-s3-cp-01",
    phase: "s3",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.30–32"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Pflegekammer — schon gehört?",
      body: "Pflegekammern sorgen regelmäßig für Diskussionen in der Branche. Pflichtmitgliedschaft, Berufsordnung, Disziplinarverfahren — klingt trocken, betrifft aber jeden Pflegenden direkt.",
    },
    contentB1: {
      title: "Pflegekammer — schon gehört?",
      body: "Pflegekammern sind ein großes Thema in der Pflege. Alle Pflege-Fachkräfte müssen dort Mitglied sein. Es gibt Regeln für den Beruf. Das klingt langweilig. Aber es betrifft dich direkt.",
    },
    question: {
      fragetext: "Weißt du, was eine Pflegekammer ist?",
      crowdPoll: {
        question: "Weißt du, was eine Pflegekammer ist?",
        questionB1: "Weißt du, was eine Pflegekammer ist?",
        inputType: "choice",
        options: [
          { id: "a", text: "Ja, ich weiß es genau", textB1: "Ja, ich weiß es genau" },
          { id: "b", text: "Habe davon gehört, weiß aber nicht genau was es ist", textB1: "Ich habe davon gehört. Aber ich weiß nicht genau, was es ist." },
          { id: "c", text: "Noch nie gehört", textB1: "Ich habe das noch nie gehört." },
          { id: "d", text: "Ich kenne Ärztekammern — ist es sowas Ähnliches?", textB1: "Ich kenne Ärztekammern — ist es sowas Ähnliches?" },
        ],
        seedResponses: [
          { text: "Ich kenne Ärztekammern — ist es sowas Ähnliches?", count: 22, highlight: true },
          { text: "Habe davon gehört, weiß aber nicht genau was es ist", count: 20 },
          { text: "Noch nie gehört", count: 18 },
          { text: "Ja, ich weiß es genau", count: 8 },
        ],
        totalVotes: 68,
        fazit: "Die meisten kennen es vom Hören — und ja, es ist ähnlich wie eine Ärztekammer. Aber es gibt wichtige Unterschiede zu Gewerkschaften und Berufsverbänden. Das klären wir jetzt!",
        fazitB1: "Die meisten kennen es vom Hören. Ja, es ist ähnlich wie eine Ärztekammer. Aber es gibt wichtige Unterschiede. Das lernen wir jetzt!",
      },
    },
  },

  // ================================================================
  // Step 2: flipcard — Verbände vs. Gewerkschaften vs. Kammern
  // ================================================================
  {
    stepId: "le01-s3-fc-02",
    phase: "s3",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.30–32"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 5,
    contentC1: {
      title: "Wer macht was? Dreh die Karten um!",
      body: "Berufsverbände, Gewerkschaften und Pflegekammern — alle vertreten Pflegende, aber auf unterschiedliche Art. Lerne die Unterschiede kennen.",
    },
    contentB1: {
      title: "Wer macht was? Dreh die Karten um!",
      body: "Es gibt drei Organisationen für Pflegende: Berufsverbände, Gewerkschaften und Pflegekammern. Sie haben verschiedene Aufgaben. Lerne die Unterschiede kennen.",
    },
    question: {
      fragetext: "Tippe auf eine Karte, um sie umzudrehen.",
      flipcard: {
        instruction: "Tippe auf eine Karte, um sie umzudrehen.",
        cards: [
          {
            front: "Berufsverbände (z. B. DBfK)",
            back: "Repräsentieren die Berufsgruppe in der Öffentlichkeit, setzen sich bei Ministerien und Behörden für Belange ein, beraten Mitglieder in Rechtsfragen, organisieren Fort- und Weiterbildungen. Der Deutsche Pflegerat (DPR) ist der Dachverband.",
            backB1: "Vertreten die Pflege in der Öffentlichkeit. Sie sprechen mit Ministerien. Sie beraten Mitglieder bei Rechts-Fragen. Sie organisieren Fort-Bildungen. Der DPR (= Deutscher Pflegerat) ist der Dachverband.",
          },
          {
            front: "Gewerkschaften (z. B. ver.di)",
            back: "Demokratische Vereinigungen von Arbeitnehmern. Im Gegensatz zu Verbänden schließen Gewerkschaften Tarifverträge ab — sie verhandeln also direkt über Gehalt und Arbeitsbedingungen.",
            backB1: "Zusammenschlüsse von Arbeitnehmerinnen und Arbeitnehmern. Gewerkschaften machen Tarif-Verträge (= Verträge über Gehalt und Arbeitsbedingungen). Das können Verbände nicht.",
          },
          {
            front: "Pflegekammern",
            back: "Körperschaften des öffentlichen Rechts mit Pflichtmitgliedschaft. Aufgaben: eigene Berufsordnung, Qualitätsempfehlungen, Berufsregister, Fort-/Weiterbildungsregeln, Disziplinarmaßnahmen bei Regelverstößen.",
            backB1: "Pflegekammern sind offizielle Institutionen. Alle Pflege-Fachkräfte müssen Mitglied sein (Pflichtmitgliedschaft). Sie machen Berufsregeln, führen ein Register und können bei Regelverstößen bestrafen.",
          },
        ],
      },
    },
  },

  // ================================================================
  // Step 3: sorting — Ausbildungsstruktur des PflBG
  // ================================================================
  {
    stepId: "le01-s3-so-03",
    phase: "s3",
    stepType: "sorting",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.38", "I Care Pflege S.42"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Die Ausbildung in der richtigen Reihenfolge",
      body: "Das PflBG regelt die generalistische Pflegeausbildung. Bringe die Stationen in die richtige Reihenfolge — vom Ausbildungsbeginn bis zum Abschluss.",
    },
    contentB1: {
      title: "Die Ausbildung in der richtigen Reihenfolge",
      body: "Das PflBG (= Pflege-Berufe-Gesetz) regelt die Pflege-Ausbildung. Bringe die Stationen in die richtige Reihenfolge. Beginne mit dem Anfang der Ausbildung.",
    },
    question: {
      fragetext: "Ordne die Stationen chronologisch.",
      sortItems: [
        "Zugangsvoraussetzungen prüfen (Mittlerer Bildungsabschluss oder gleichwertig)",
        "Orientierungseinsatz (400 Std.)",
        "Pflichteinsätze: Akutpflege, Langzeitpflege, ambulante Pflege (je 400 Std.)",
        "Pädiatrische Versorgung (120 Std.)",
        "Zwischenprüfung am Ende des 2. Ausbildungsdrittels",
        "Wahlentscheidung: Generalistisch oder Spezialisierung (18.–20. Monat)",
        "Abschlussprüfung → Pflegefachfrau/-mann",
      ],
    },
  },

  // ================================================================
  // Step 4: mc — Zugangsvoraussetzungen PflBG
  // ================================================================
  {
    stepId: "le01-s3-mc-04",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.38"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Wer darf die Ausbildung beginnen?",
      body: "Das PflBG regelt genau, wer die Pflegeausbildung beginnen darf. Es gibt mehrere Wege — aber welche genau?",
    },
    contentB1: {
      title: "Wer darf die Ausbildung beginnen?",
      body: "Das PflBG regelt: Wer darf die Pflege-Ausbildung beginnen? Es gibt verschiedene Wege.",
    },
    question: {
      fragetext: "Welche Zugangsvoraussetzung ist laut PflBG NICHT ausreichend für den Beginn der Pflegeausbildung?",
      optionen: [
        {
          text: "Mittlerer Bildungsabschluss ohne Zusatzqualifikation",
          isCorrect: false,
          explanation: "Kein Problem! Ein mittlerer Bildungsabschluss allein reicht laut PflBG. Das ist ein erlaubter Zugangsweg zur Pflegeausbildung.",
          explanationB1: "Kein Problem! Ein mittlerer Abschluss reicht allein. Das ist ein erlaubter Weg in die Pflege-Ausbildung.",
        },
        {
          text: "Hauptschulabschluss + 2-jährige Berufsausbildung",
          isCorrect: false,
          explanation: "Kein Problem! Hauptschulabschluss plus eine 2-jährige Berufsausbildung ist ein erlaubter Weg in die Pflegeausbildung.",
          explanationB1: "Kein Problem! Hauptschul-Abschluss + 2-jährige Berufs-Ausbildung reichen zusammen.",
        },
        {
          text: "Hauptschulabschluss ohne weitere Qualifikation",
          isCorrect: true,
          explanation: "Genau! Ein Hauptschulabschluss allein reicht nicht. Man braucht zusätzlich eine 2-jährige Berufsausbildung oder eine 1-jährige Assistenz-/Helferausbildung. Das sichert eine Mindestqualifikation.",
          explanationB1: "Genau! Ein Hauptschul-Abschluss allein reicht nicht. Man braucht noch eine 2-jährige Berufs-Ausbildung. Oder eine 1-jährige Helfer-Ausbildung.",
        },
        {
          text: "Hauptschulabschluss + 1-jährige Assistenz-/Helferausbildung",
          isCorrect: false,
          explanation: "Kein Problem! Hauptschulabschluss plus eine 1-jährige Assistenz- oder Helferausbildung ist laut PflBG ein erlaubter Zugangsweg.",
          explanationB1: "Kein Problem! Hauptschul-Abschluss + 1-jährige Helfer-Ausbildung reichen zusammen.",
        },
      ],
    },
  },

  // ================================================================
  // Step 5: matching — 5 Kompetenzbereiche zuordnen
  // ================================================================
  {
    stepId: "le01-s3-ma-05",
    phase: "s3",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.39"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "5 Kompetenzbereiche — ordne richtig zu!",
      body: "Die theoretische Ausbildung gliedert sich in 5 Kompetenzbereiche mit insgesamt 2100 Stunden. Ordne die Bereiche den Stundenzahlen zu.",
    },
    contentB1: {
      title: "5 Kompetenzbereiche — ordne richtig zu!",
      body: "Die Theorie hat 5 Kompetenz-Bereiche (= Wissens-Gebiete). Insgesamt sind es 2100 Stunden. Ordne die Bereiche den Stunden zu.",
    },
    question: {
      fragetext: "Verbinde jeden Kompetenzbereich mit der richtigen Stundenzahl.",
      matchingPairs: [
        { left: "KB I: Pflegeprozesse", right: "1000 Std." },
        { left: "KB II: Kommunikation", right: "280 Std." },
        { left: "KB III: Interprofessionelles Handeln", right: "300 Std." },
        { left: "KB IV: Gesetze/Ethik", right: "160 Std." },
        { left: "KB V: Wissenschaft/Berufsethik", right: "160 Std." },
      ],
    },
  },

  // ================================================================
  // Step 6: text (procontra) — Pflegekammer: Pro und Kontra
  // ================================================================
  {
    stepId: "le01-s3-tx-06",
    phase: "s3",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.31–32"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "procontra",
    xpValue: 6,
    contentC1: {
      title: "Pflegekammer — Pro oder Kontra?",
      body: "Die Pflegekammer ist umstritten. Es gibt gute Argumente dafür — und dagegen. Lies beide Seiten.\n\nPRO:\n- Selbstverwaltung schärft das Profil der Pflege\n- Stärkt die Stellung in Politik und Gesellschaft\n- Ermöglicht eigene Berufsordnung und Aufsicht\n\nKONTRA:\n- Pflichtmitgliedschaft wird als undemokratisch empfunden\n- Bürokratie und zusätzliche Kosten\n- Bestehende Organisationen könnten die Aufgaben übernehmen",
    },
    contentB1: {
      title: "Pflegekammer — Pro oder Kontra?",
      body: "Die Pflegekammer ist umstritten. Es gibt Argumente dafür. Es gibt Argumente dagegen. Lies beide Seiten.\n\nPRO:\n- Pflege kann sich selbst verwalten\n- Stärker in Politik und Gesellschaft\n- Eigene Berufsregeln möglich\n\nKONTRA:\n- Pflichtmitgliedschaft fühlt sich undemokratisch an\n- Mehr Bürokratie und Kosten\n- Andere Organisationen könnten die Aufgaben übernehmen",
    },
    question: {
      fragetext: "Lies beide Seiten aufmerksam.",
    },
  },

  // ================================================================
  // Step 7: dialog — Fortbildungspflicht: Was sagt das Gesetz?
  // ================================================================
  {
    stepId: "le01-s3-dg-07",
    phase: "s3",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.24", "I Care Pflege S.31–32"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 24,
    contentC1: {
      title: "\"Muss ich wirklich zur Fortbildung?\"",
      body: "Markus T. (34) ist im Pausenraum. Seine Kollegin Sarah fragt ihn: \"Die Stationsleitung hat gesagt, ich muss nächste Woche zur Fortbildung ‚Kinästhetik'. Aber ich hab Spätdienst und muss Emma abholen. Muss ich da wirklich hin?\"",
    },
    contentB1: {
      title: "\"Muss ich wirklich zur Fortbildung?\"",
      body: "Markus T. (34) ist im Pausenraum. Seine Kollegin Sarah fragt: \"Die Stationsleitung sagt, ich muss zur Fortbildung ‚Kinästhetik'. Aber ich habe Spätdienst. Und ich muss Emma abholen. Muss ich wirklich hin?\"",
    },
    question: {
      fragetext: "Was antwortest du Sarah?",
      patientName: "Sarah",
      dialogPhases: [
        {
          context: "Sarah ist frustriert und gestresst. Sie will wissen, ob Fortbildung verpflichtend ist.",
          contextB1: "Sarah ist gestresst. Sie will wissen: Muss ich wirklich zur Fortbildung?",
          speaker: "Sarah",
          options: [
            {
              text: "Sprich mit der Stationsleitung — vielleicht gibt es einen anderen Termin. Fortbildung ist wichtig, aber dein Alltag zählt auch.",
              textB1: "Sprich mit der Stationsleitung. Vielleicht gibt es einen anderen Termin. Fortbildung ist wichtig. Aber dein Alltag zählt auch.",
              patientResponse: "Das ist eine gute Idee! Ich rede mit der Stationsleitung. Aber mal ehrlich — wer kontrolliert das überhaupt?",
              patientResponseB1: "Gute Idee! Ich rede mit der Stationsleitung. Aber: Wer kontrolliert das eigentlich?",
              score: 3,
              feedback: "Sehr gute Antwort! Du erkennst die Pflicht zur Fortbildung an, zeigst aber auch Verständnis für Sarahs Situation. So sieht professionelle Kommunikation aus.",
              feedbackB1: "Sehr gut! Du sagst: Fortbildung ist wichtig. Aber du verstehst auch Sarahs Situation. Das ist professionelle Kommunikation.",
            },
            {
              text: "Fort- und Weiterbildung ist laut Berufsordnung und Pflegekammer deine Pflicht. Du musst hingehen.",
              textB1: "Fort-Bildung ist laut Berufsordnung deine Pflicht. Du musst hingehen.",
              patientResponse: "Okay... das klingt hart. Dann muss ich wohl. Aber wer kontrolliert das eigentlich?",
              patientResponseB1: "Okay. Das klingt streng. Und: Wer kontrolliert das?",
              score: 2,
              feedback: "Richtig in der Sache — Fort- und Weiterbildung ist tatsächlich in der Berufsordnung verankert. Aber der Ton ist etwas harsch. Sarah ist gestresst, nicht unwillig.",
              feedbackB1: "Richtig — Fortbildung ist in der Berufsordnung. Aber der Ton ist etwas hart. Sarah ist gestresst, nicht faul.",
            },
            {
              text: "Ach, lass es einfach ausfallen. Eine Fortbildung mehr oder weniger — das merkt niemand.",
              textB1: "Ach, lass es einfach ausfallen. Das merkt niemand.",
              patientResponse: "Wirklich? Ich dachte, das ist Pflicht...",
              patientResponseB1: "Wirklich? Ich dachte, das ist Pflicht...",
              score: 1,
              feedback: "Das klingt verständnisvoll, ist aber problematisch. Fort- und Weiterbildung gehört zu den Pflichten von Pflegefachkräften und wird von Pflegekammern geregelt. Vielleicht gibt es einen besseren Weg, Sarah zu unterstützen?",
              feedbackB1: "Das ist problematisch. Fortbildung ist Pflicht für Pflege-Fachkräfte. Pflegekammern regeln das. Gibt es vielleicht einen anderen Weg, Sarah zu helfen?",
            },
          ],
        },
        {
          context: "Sarah fragt nach: \"Wer kontrolliert das überhaupt?\"",
          contextB1: "Sarah fragt: \"Wer kontrolliert das?\"",
          speaker: "Sarah",
          options: [
            {
              text: "Niemand kontrolliert das. Du bist selbst verantwortlich.",
              textB1: "Niemand kontrolliert das. Du bist selbst verantwortlich.",
              patientResponse: "Oh, das wusste ich nicht. Dann ist es ja egal?",
              patientResponseB1: "Oh, dann ist es ja egal?",
              score: 1,
              feedback: "Nicht ganz richtig. In Bundesländern mit Pflegekammer gibt es tatsächlich Kontrolle und Disziplinarverfahren. Pflegekammern sind Körperschaften des öffentlichen Rechts mit echten Befugnissen.",
              feedbackB1: "Nicht richtig. Wo es Pflegekammern gibt, gibt es echte Kontrolle. Pflegekammern können Disziplinarverfahren einleiten.",
            },
            {
              text: "Der Berufsverband kann Strafen verhängen.",
              textB1: "Der Berufsverband kann Strafen verhängen.",
              patientResponse: "Ach, der Berufsverband? Das wusste ich nicht.",
              patientResponseB1: "Ach, der Berufsverband? Das wusste ich nicht.",
              score: 1,
              feedback: "Aufgepasst — Berufsverbände können bei Verstößen gegen die Berufsordnung KEINE Konsequenzen veranlassen. Die Berufsordnung ist derzeit hauptsächlich eine Selbstverpflichtung. Pflegekammern hingegen können Disziplinarverfahren einleiten.",
              feedbackB1: "Aufgepasst! Berufsverbände können KEINE Strafen verhängen. Das können nur Pflegekammern. Disziplinarverfahren = Bestrafungsverfahren.",
            },
            {
              text: "Die Pflegekammer führt ein Berufsregister und kann bei Verstößen Disziplinarmaßnahmen einleiten.",
              textB1: "Die Pflegekammer führt ein Register. Bei Verstößen kann sie bestrafen.",
              patientResponse: "Ah, die Pflegekammer hat also echte Befugnisse — das wusste ich nicht!",
              patientResponseB1: "Ah, die Pflegekammer hat echte Macht — das wusste ich nicht!",
              score: 3,
              feedback: "Genau richtig! Anders als Berufsverbände haben Pflegekammern echte Kontrollbefugnisse.",
              feedbackB1: "Genau! Pflegekammern haben echte Macht. Berufsverbände können das nicht.",
            },
          ],
        },
        {
          context: `Sarah überlegt und sagt: "Okay, dann geh ich hin. Aber mal ehrlich — bringt mir die Fortbildung überhaupt was? Ich arbeite seit 8 Jahren in der Pflege."`,
          contextB1: "Sarah sagt: 'Okay, ich gehe hin. Aber bringt mir die Fortbildung überhaupt etwas? Ich arbeite seit 8 Jahren.'",
          speaker: "Sarah",
          options: [
            {
              text: "Gerade weil du Erfahrung hast, kannst du neue Techniken schneller einordnen. Kinästhetik kann dir helfen, deinen Rücken zu schonen.",
              textB1: "Du hast viel Erfahrung. Deshalb kannst du neue Techniken schnell lernen. Kinästhetik hilft deinem Rücken.",
              patientResponse: "Stimmt, mein Rücken macht mir manchmal Probleme. Vielleicht lerne ich ja wirklich was Neues.",
              patientResponseB1: "Stimmt, mein Rücken tut manchmal weh. Vielleicht lerne ich etwas Neues.",
              score: 3,
              feedback: "Gut argumentiert! Du verbindest die Pflicht zur Fortbildung mit einem konkreten Nutzen für Sarahs Alltag. Lebenslanges Lernen ist ein Merkmal professioneller Pflege.",
              feedbackB1: "Gut! Du zeigst Sarah: Fortbildung hilft DIR. Lernen gehört zum Beruf — ein Leben lang.",
            },
            {
              text: "Nach 8 Jahren weißt du doch schon alles. Aber die Stationsleitung will es halt so.",
              textB1: "Nach 8 Jahren weißt du alles. Aber die Stationsleitung will es so.",
              patientResponse: "Ja, genau! Es ist nur eine Pflichtübung...",
              patientResponseB1: "Ja genau! Es ist nur Pflicht...",
              score: 1,
              feedback: "Acht Jahre Erfahrung sind wertvoll — aber Pflege entwickelt sich ständig weiter. Fortbildung ist kein Misstrauensvotum, sondern Qualitätssicherung. § 4 PflBG betont die Eigenverantwortung.",
              feedbackB1: "8 Jahre Erfahrung sind gut. Aber Pflege verändert sich. Fortbildung sichert die Qualität. Das steht im Pflegeberufegesetz.",
            },
            {
              text: "Fortbildung ist keine Frage der Erfahrung, sondern der Qualität. Evidenzbasierte Pflege heißt: Wir passen unser Wissen ständig an.",
              textB1: "Fortbildung hat nichts mit Erfahrung zu tun. Es geht um Qualität. Neues Wissen hilft allen.",
              patientResponse: "Klingt vernünftig. Aber manchmal ist es einfach viel neben dem Alltag.",
              patientResponseB1: "Klingt richtig. Aber es ist viel neben der Arbeit.",
              score: 2,
              feedback: "Inhaltlich korrekt — aber der Ton könnte empathischer sein. Sarah ist gestresst, nicht unwissend. Verbinde die Theorie mit einem konkreten Nutzen für sie.",
              feedbackB1: "Richtig! Aber sei etwas netter zu Sarah. Sie ist gestresst. Zeige ihr den Nutzen.",
            },
          ],
        },
      ],
    },
  },

  // ================================================================
  // Step 8: truefalse — Mythen über das PflBG
  // ================================================================
  {
    stepId: "le01-s3-tf-08",
    phase: "s3",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.38", "I Care Pflege S.42"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 11,
    contentC1: {
      title: "Wahr oder falsch?",
      body: "Rund um das PflBG und die Pflegeausbildung kursieren einige Mythen. Teste dein Wissen!",
    },
    contentB1: {
      title: "Wahr oder falsch?",
      body: "Über das PflBG und die Pflege-Ausbildung gibt es viele falsche Ideen. Teste dein Wissen!",
    },
    question: {
      fragetext: "Ist die Aussage wahr oder falsch?",
      trueFalseCards: [
        {
          statement: "Das PflBG trat am 1. Januar 2020 in Kraft.",
          isTrue: true,
          explanation: "Wahr! Das PflBG trat am 1. Januar 2020 in Kraft.",
        },
        {
          statement: "Die generalistische Ausbildung dauert 2 Jahre in Vollzeit.",
          isTrue: false,
          explanation: "Falsch! Sie dauert 3 Jahre in Vollzeit (bis 5 Jahre in Teilzeit).",
        },
        {
          statement: "Theoretischer Unterricht umfasst 2100 Stunden.",
          isTrue: true,
          explanation: "Wahr! Der theoretische Unterricht umfasst 2100 Stunden.",
        },
        {
          statement: "Praktische Ausbildung umfasst mindestens 2500 Stunden.",
          isTrue: true,
          explanation: "Wahr! Die praktische Ausbildung umfasst mindestens 2500 Stunden.",
        },
        {
          statement: "Wer generalistisch abschließt, erhält eine EU-weit anerkannte Berufsbezeichnung.",
          isTrue: true,
          explanation: "Wahr! Der Abschluss wird EU-weit anerkannt.",
        },
        {
          statement: "Die Zwischenprüfung findet am Ende des 1. Ausbildungsdrittels statt.",
          isTrue: false,
          explanation: "Falsch! Sie findet am Ende des 2. Ausbildungsdrittels statt.",
        },
      ],
    },
  },

  // ================================================================
  // Step 9: slider — Selbsteinschätzung: Wie gut kennst du deine Rechte?
  // ================================================================
  {
    stepId: "le01-s3-sl-09",
    phase: "s3",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce03-le01-selbstwahrnehmung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Selbsteinschätzung",
      body: "Du hast jetzt viel über Berufspolitik und das PflBG gelernt. Wie sicher fühlst du dich?",
    },
    contentB1: {
      title: "Selbsteinschätzung",
      body: "Du hast viel über Berufs-Politik und das PflBG gelernt. Wie sicher fühlst du dich jetzt?",
    },
    question: {
      fragetext: "Wie gut kennst du deine Rechte und Pflichten als Pflegefachperson? (1 = unsicher, 10 = sehr sicher)",
      sliderVariant: "empathy",
      slider: {
        instruction: "Wie gut kennst du deine Rechte und Pflichten als Pflegefachperson?",
        unit: "Punkte",
        min: 1,
        max: 10,
        step: 1,
        correctValue: 7,
        tolerance: 10,
        explanation: "Es ist völlig normal, sich am Anfang unsicher zu fühlen. Wichtig ist, dass du weißt, WO du nachschlagen kannst — PflBG, Berufsordnung, dein Berufsverband. Mit der Zeit wird das zur Routine.",
        explanationB1: "Es ist normal, am Anfang unsicher zu sein. Wichtig ist: Du weißt, wo du nachschauen kannst — PflBG, Berufsordnung, Berufsverband. Das wird mit der Zeit einfacher.",
      },
    },
  },

  // ================================================================
  // Step 10: crossword — Schlüsselbegriffe Berufspolitik + PflBG (vertiefung)
  // ================================================================
  {
    stepId: "le01-s3-cw-10",
    phase: "s3",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.30–32", "I Care Pflege S.38–39"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflbg",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    xpValue: 17,
    contentC1: {
      title: "Kreuzworträtsel — Berufspolitik",
      body: "Teste dein Wissen spielerisch! Löse die Hinweise und finde die Fachbegriffe.",
    },
    contentB1: {
      title: "Kreuzworträtsel — Berufspolitik",
      body: "Teste dein Wissen mit einem Spiel! Lies die Hinweise. Finde die Fachbegriffe.",
    },
    question: {
      fragetext: "Löse das Kreuzworträtsel.",
      crosswordWords: [
        { word: "PFLEGEKAMMER", clue: "Körperschaft des öffentlichen Rechts mit Pflichtmitgliedschaft für Pflegefachkräfte" },
        { word: "GENERALISTISCH", clue: "Einheitliche Ausbildung, die alle Pflegebereiche umfasst" },
        { word: "PFLEGERAT", clue: "Dachverband der bedeutendsten Pflegeverbände in Deutschland (DPR)" },
        { word: "TARIFVERTRAG", clue: "Wird von Gewerkschaften, nicht von Berufsverbänden, abgeschlossen" },
        { word: "KOMPETENZBEREICH", clue: "Die theoretische Ausbildung gliedert sich in 5 davon" },
      ],
    },
  },

  // ================================================================
  // Step 11: reflection — Was bedeutet Berufspolitik für dich?
  // ================================================================
  {
    stepId: "le01-s3-rf-11",
    phase: "s3",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["I Care Pflege S.30–42"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce03-le01-reflexion",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Berufspolitik — betrifft dich das?",
      body: "Markus T. (34) sagt: \"In der Technik gibt es für jedes Problem eine Lösung. In der Pflege gibt es manchmal nur ein ‚Es kommt darauf an'.\" Berufspolitik klingt abstrakt — aber sie bestimmt, wie viel du verdienst, wie deine Ausbildung aussieht und wer dich als Berufsgruppe vertritt.",
    },
    contentB1: {
      title: "Berufspolitik — betrifft dich das?",
      body: "Markus T. (34) sagt: \"In der Technik gibt es für jedes Problem eine Lösung. In der Pflege gibt es manchmal nur ein ‚Es kommt darauf an'.\" Berufs-Politik klingt kompliziert. Aber sie bestimmt: Wie viel verdienst du? Wie sieht deine Ausbildung aus? Wer vertritt deinen Beruf?",
    },
    question: {
      fragetext: "Stell dir vor, du könntest eine Sache an der Pflegeausbildung oder der Berufspolitik verändern. Was wäre es und warum?",
      reflection: {
        prompt: "Stell dir vor, du könntest eine Sache an der Pflegeausbildung oder der Berufspolitik verändern. Was wäre es und warum?",
        placeholder: "Denke an Ausbildung, Bezahlung, Kammern, Arbeitsbedingungen...",
        systemPrompt: "Bewerte die Reflexion: Konkreter Vorschlag, Begründung mit Bezug auf das Gelernte, persönliche Perspektive. Musterantwort: Ich würde die Praxisanleitung verbessern: Mehr Zeit für Anleitung, feste Praxisanleiter auf jeder Station, die nicht gleichzeitig im Schichtdienst arbeiten. Ohne gute Praxisanleitung bleibt die Theorie Theorie. Das PflBG regelt zwar 300 Stunden Zusatzqualifikation für Praxisanleiter, aber in der Praxis fehlt oft die Zeit.",
      },
      bewertungskriterien: [
        "Konkreter Vorschlag",
        "Begründung mit Bezug auf das Gelernte",
        "Persönliche Perspektive erkennbar",
      ],
      satzanfaengeB1: [
        "Ich würde ... verändern, weil ...",
        "Das ist wichtig, weil ...",
        "Ich habe gelernt, dass ...",
      ],
    },
  },
];
