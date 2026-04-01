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
      patientName: "Herr Brenner",
      dialogPhases: [
        {
          context: "Herr Brenner sitzt auf der Bettkante und weint leise. Er schaut auf, als Yasemin eintritt, und sagt mit brüchiger Stimme: 'Du bist die Einzige, die mir zuhört, Kind.'",
          contextB1: "Herr Brenner weint. Er sieht Yasemin und sagt: 'Du bist die Einzige, die mir zuhört.'",
          speaker: "Herr Brenner",
          options: [
            {
              text: "Ich bin hier, Herr Brenner. Ich habe einen Moment Zeit. Was ist passiert?",
              textB1: "Ich bin hier. Was ist passiert?",
              patientResponse: "Meine Tochter war gerade da. Sie hat mir gesagt, ich soll stark sein. Aber ich kann nicht mehr stark sein. Ich vermisse meine Frau so sehr.",
              patientResponseB1: "Meine Tochter sagt, ich soll stark sein. Aber ich kann nicht. Ich vermisse meine Frau.",
              score: 3,
              feedback: "Sehr gut! Du signalisierst Präsenz und stellst eine offene Frage. Herr Brenner fühlt sich eingeladen, seine Gefühle zu teilen — ohne Druck.",
              feedbackB1: "Sehr gut! Du zeigst: Ich bin da. Die offene Frage hilft ihm, zu erzählen.",
            },
            {
              text: "Herr Brenner, soll ich die Tür schließen? Dann haben wir etwas Ruhe.",
              textB1: "Soll ich die Tür schließen?",
              patientResponse: "Ja, bitte... Ich will nicht, dass die anderen mich so sehen.",
              patientResponseB1: "Ja, bitte. Ich will nicht, dass andere mich sehen.",
              score: 2,
              feedback: "Ein guter Ansatz! Du schaffst einen geschützten Raum. Allerdings fehlt eine offene Frage, die Herrn Brenner einlädt, über seine Gefühle zu sprechen.",
              feedbackB1: "Gut! Du machst den Raum ruhiger. Aber frag ihn auch, was los ist.",
            },
            {
              text: "Herr Brenner, möchten Sie, dass ich Ihnen ein Beruhigungsmittel bringe?",
              textB1: "Möchten Sie eine Tablette zur Beruhigung?",
              patientResponse: "Ich brauche keine Tabletten... ich brauche jemanden, der mir zuhört.",
              patientResponseB1: "Ich brauche keine Tablette. Ich brauche jemanden zum Reden.",
              score: 1,
              feedback: "Hier springst du direkt zu einer medizinischen Lösung, ohne erst zuzuhören. Herr Brenner braucht Zuwendung, nicht Medikamente. Erst wahrnehmen und ansprechen — dann handeln.",
              feedbackB1: "Herr Brenner braucht keine Tablette. Er braucht jemanden, der zuhört. Erst zuhören, dann handeln.",
            },
          ],
        },
        {
          context: "Herr Brenner erzählt von seiner verstorbenen Frau. Seine Augen füllen sich mit Tränen: 'Wir waren 54 Jahre zusammen. Jeden Morgen hat sie mir Kaffee gemacht. Jetzt ist der Stuhl gegenüber leer.'",
          contextB1: "Herr Brenner spricht über seine Frau. Er sagt: 'Wir waren 54 Jahre zusammen. Jetzt ist sie weg.'",
          speaker: "Herr Brenner",
          options: [
            {
              text: "54 Jahre — das ist eine lange gemeinsame Zeit. Erzählen Sie mir von ihr.",
              textB1: "54 Jahre — das ist sehr lang. Erzählen Sie mir von Ihrer Frau.",
              patientResponse: "Sie hieß Margret. Sie hat immer gesagt: Wer weint, hat noch Gefühle. Vielleicht hat sie recht.",
              patientResponseB1: "Sie hieß Margret. Sie hat gesagt: Wer weint, hat noch Gefühle.",
              score: 3,
              feedback: "Perfekt! Du validierst seine Gefühle und lädst zum Erzählen ein. Das ist aktives Zuhören auf höchstem Niveau — du gibst dem Patienten Raum.",
              feedbackB1: "Super! Du lässt ihn erzählen. Das ist aktives Zuhören. Er fühlt sich verstanden.",
            },
            {
              text: "Sie müssen nicht stark sein, Herr Brenner. Es ist in Ordnung zu weinen.",
              textB1: "Sie müssen nicht stark sein. Weinen ist in Ordnung.",
              patientResponse: "Danke... Meine Tochter sagt immer, ich soll mich zusammenreißen.",
              patientResponseB1: "Danke. Meine Tochter sagt immer, ich soll stark sein.",
              score: 2,
              feedback: "Eine einfühlsame Antwort! Du gibst ihm Erlaubnis zu trauern. Noch besser wäre eine offene Frage gewesen, die ihn einlädt, mehr zu erzählen.",
              feedbackB1: "Gut! Du zeigst: Weinen ist okay. Noch besser: Frag ihn, ob er erzählen möchte.",
            },
            {
              text: "Das wird schon wieder. Die Zeit heilt alle Wunden.",
              textB1: "Es wird besser mit der Zeit.",
              patientResponse: "Sie verstehen das nicht. In meinem Alter wird nichts mehr besser.",
              patientResponseB1: "Sie verstehen das nicht. Für mich wird nichts mehr besser.",
              score: 1,
              feedback: "Floskeln wie 'Die Zeit heilt alle Wunden' bagatellisieren den Schmerz. Herr Brenner fühlt sich nicht ernst genommen. Trauer braucht Raum, keine schnellen Trostworte.",
              feedbackB1: "Sätze wie 'Es wird besser' helfen hier nicht. Herr Brenner fühlt sich nicht verstanden. Trauer braucht Zuhören.",
            },
          ],
        },
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
      fragetext: "Herr Brenners Tochter spricht Yasemin auf dem Flur an:",
      patientName: "Tochter von Herrn Brenner",
      dialogPhases: [
        {
          context: "Herr Brenners Tochter kommt auf den Flur. Sie wirkt angespannt und sagt: 'Mein Vater sagt, er braucht nichts. Aber ich sehe, dass er leidet. Er isst kaum noch.'",
          contextB1: "Die Tochter sagt: 'Mein Vater sagt, alles ist gut. Aber er isst kaum noch. Ich mache mir Sorgen.'",
          speaker: "Tochter",
          options: [
            {
              text: "Das tut mir leid zu hören. Ich habe gestern auch bemerkt, dass er wenig gegessen hat. Was genau fällt Ihnen noch auf?",
              textB1: "Das tut mir leid. Ich habe auch gesehen, dass er wenig isst. Was fällt Ihnen noch auf?",
              patientResponse: "Er schläft schlecht und spricht kaum noch. Früher hat er immer Geschichten erzählt. Jetzt sitzt er nur da und starrt.",
              patientResponseB1: "Er schläft schlecht. Früher hat er viel erzählt. Jetzt sitzt er nur still da.",
              score: 3,
              feedback: "Ausgezeichnet! Du teilst deine eigene Beobachtung und stellst eine offene Folgefrage. Angehörige sind wichtige Informationsquellen — sie kennen Veränderungen, die Pflegenden entgehen.",
              feedbackB1: "Sehr gut! Du erzählst, was du gesehen hast, und fragst weiter. Die Tochter kennt ihren Vater gut. Ihre Beobachtungen helfen dem Pflegeteam.",
            },
            {
              text: "Ich bin noch in der Ausbildung, aber ich gebe das gerne an meine Praxisanleiterin weiter. Wir beobachten ihn auf jeden Fall.",
              textB1: "Ich bin noch Schülerin, aber ich sage es meiner Praxisanleiterin. Wir passen auf ihn auf.",
              patientResponse: "Aber Sie sehen ihn doch jeden Tag. Merken Sie nicht, wie er sich verändert? Ich brauche jemanden, der zuhört...",
              patientResponseB1: "Aber Sie sind jeden Tag bei ihm. Sehen Sie nicht, wie er sich verändert?",
              score: 2,
              feedback: "Ehrlichkeit über deine Rolle ist gut. Aber die Tochter braucht gerade jemanden, der ihr zuhört — nicht nur eine Weiterleitung. Erst wahrnehmen und nachfragen, dann an Kolleginnen weitergeben.",
              feedbackB1: "Ehrlich sein ist gut. Aber die Tochter will, dass jemand zuhört. Erst zuhören, dann weitergeben.",
            },
            {
              text: "Hmm, er ist ja auch schon 82. Vielleicht ist es einfach das Alter, dass er weniger isst?",
              textB1: "Er ist ja auch schon 82. Vielleicht isst er deshalb weniger?",
              patientResponse: "Normal? Er hat bis vor 3 Monaten jeden Tag gekocht! Das ist nicht normal für ihn!",
              patientResponseB1: "Das ist nicht normal! Bis vor 3 Monaten hat er jeden Tag gekocht!",
              score: 1,
              feedback: "Generalisierungen wie 'Das ist im Alter normal' ignorieren die individuelle Situation. Die Tochter kennt die Baseline ihres Vaters. Ein Rückgang beim Essen kann ein Warnsignal für Depression oder Trauer sein.",
              feedbackB1: "Nicht alles ist 'normal im Alter'. Die Tochter weiß, was für ihren Vater normal ist. Weniger Essen kann ein Zeichen für Trauer sein.",
            },
          ],
        },
        {
          context: "Die Tochter senkt den Blick und fragt leise: 'Kann ich irgendetwas tun? Er redet nicht mehr mit mir.'",
          contextB1: "Die Tochter fragt: 'Was kann ich tun? Er redet nicht mehr mit mir.'",
          speaker: "Tochter",
          options: [
            {
              text: "Ich bin mir nicht sicher, was ich Ihnen raten soll. Aber ich habe gemerkt, dass Ihr Vater ruhiger wird, wenn einfach jemand bei ihm sitzt. Vielleicht hilft es, einfach da zu sein?",
              textB1: "Ich weiß nicht genau. Aber ich habe gemerkt: Wenn jemand einfach bei ihm sitzt, wird er ruhiger. Vielleicht hilft das?",
              patientResponse: "Einfach da sein... Vielleicht setze ich mich morgen einfach zu ihm, ohne etwas zu erwarten.",
              patientResponseB1: "Vielleicht setze ich mich morgen einfach zu ihm. Ohne etwas zu sagen.",
              score: 3,
              feedback: "Wunderbar! Du bist ehrlich, dass du keine fertige Antwort hast, aber teilst deine eigene Beobachtung. 'Da sein' ist eine der mächtigsten Formen der Kommunikation — Watzlawick: Man kann nicht nicht kommunizieren.",
              feedbackB1: "Sehr gut! Du sagst ehrlich, was du weißt. Deine Beobachtung hilft der Tochter: Da sein reicht manchmal.",
            },
            {
              text: "Vielleicht könnten Sie ihm sein Lieblingsessen mitbringen? Essen verbindet ja manchmal, auch wenn man nicht reden kann.",
              textB1: "Vielleicht bringen Sie ihm sein Lieblingsessen mit? Das kann helfen.",
              patientResponse: "Das ist eine Idee. Er hat immer gern Apfelkuchen gegessen... den hat meine Mutter gebacken.",
              patientResponseB1: "Das ist eine Idee. Er mag Apfelkuchen. Den hat meine Mutter gebacken.",
              score: 2,
              feedback: "Ein netter Vorschlag, der Vertrautheit schafft. Allerdings geht es der Tochter um die fehlende Kommunikation mit ihrem Vater — nicht nur ums Essen. Die emotionale Ebene wurde nicht angesprochen.",
              feedbackB1: "Eine gute Idee, aber die Tochter macht sich Sorgen, weil er nicht redet. Darauf solltest du auch eingehen.",
            },
            {
              text: "Ich glaube, Ihr Vater braucht vielleicht einen Psychologen. Soll ich meine Praxisanleiterin fragen, ob wir da etwas organisieren können?",
              textB1: "Vielleicht braucht er einen Psychologen? Soll ich meine Praxisanleiterin fragen?",
              patientResponse: "Einen Psychologen? Mein Vater? Der geht doch nie zu so jemandem. Er ist von der alten Schule.",
              patientResponseB1: "Einen Psychologen? Mein Vater macht so etwas nicht.",
              score: 1,
              feedback: "Es ist gut, dass du an professionelle Hilfe denkst und an deine Praxisanleiterin verweisen willst. Aber der Vorschlag kommt zu früh. Erst muss die Tochter sich gehört fühlen. Außerdem liegt die Empfehlung für eine Therapie beim Arzt, nicht bei der Pflegekraft.",
              feedbackB1: "Gut, dass du an deine Praxisanleiterin denkst. Aber das ist zu früh. Die Tochter will erst, dass jemand zuhört.",
            },
          ],
        },
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
      fragetext: "Im Stationszimmer nach der Situation mit Herrn Brenner:",
      patientName: "Praxisanleiterin",
      dialogPhases: [
        {
          context: "Die Praxisanleiterin hat Yasemin ins Stationszimmer gerufen. Sie sagt ruhig: 'Yasemin, du warst 40 Minuten bei Herrn Brenner. Frau Klein und Herr Vogel haben ihre Vitalzeichenkontrolle nicht bekommen. Was ist passiert?'",
          contextB1: "Die Praxisanleiterin sagt: 'Yasemin, du warst 40 Minuten bei Herrn Brenner. Zwei andere Patienten haben keine Vitalzeichen-Kontrolle bekommen.'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Sie haben recht. Ich wollte Herrn Brenner nicht allein lassen — aber ich hätte die anderen Patienten nicht vergessen dürfen. Wie kann ich beides schaffen?",
              textB1: "Sie haben recht. Ich wollte ihm helfen, aber die anderen Patienten brauchten mich auch. Was kann ich besser machen?",
              patientResponse: "Genau die richtige Frage! Empathie ist deine Stärke, Yasemin. Aber professionelle Pflege heißt: Verantwortung für alle Patienten. Lass uns über Nähe und Distanz sprechen.",
              patientResponseB1: "Gute Frage! Empathie ist gut. Aber du musst auch an die anderen Patienten denken. Lass uns darüber reden.",
              score: 3,
              feedback: "Ausgezeichnet! Du zeigst Selbstreflexion und übernimmst Verantwortung, ohne deine Empathie abzuwerten. Die offene Frage zeigt Lernbereitschaft.",
              feedbackB1: "Super! Du sagst ehrlich, was passiert ist. Und du fragst, wie es besser geht. Das ist professionell.",
            },
            {
              text: "Ich konnte ihn doch nicht einfach allein lassen! Er hat so geweint. Was hätte ich denn tun sollen?",
              textB1: "Ich konnte ihn nicht allein lassen! Er hat so geweint!",
              patientResponse: "Ich verstehe dich. Deine Empathie ist eine Stärke. Aber du hast darüber die Vitalzeichen bei zwei Patienten vergessen. Was, wenn Frau Kleins Blutdruck weiter gestiegen wäre?",
              patientResponseB1: "Ich verstehe dich. Aber die anderen Patienten brauchten dich auch. Was, wenn Frau Klein ein Problem hatte?",
              score: 2,
              feedback: "Deine Reaktion ist menschlich und zeigt echte Empathie. Aber die Formulierung klingt etwas defensiv. Versuche, sowohl dein Mitgefühl als auch die Verantwortung für alle Patienten zu benennen.",
              feedbackB1: "Dein Mitgefühl ist gut. Aber versuche auch zu sagen, was du nächstes Mal anders machen willst.",
            },
            {
              text: "Ich finde, Menschlichkeit ist wichtiger als Vitalzeichen. Die hätte auch jemand anders messen können.",
              textB1: "Menschlichkeit ist wichtiger. Jemand anders hätte die Vitalzeichen messen können.",
              patientResponse: "Yasemin, Menschlichkeit und Vitalzeichen sind kein Widerspruch. Wenn Frau Kleins Blutdruck auf 200 gestiegen wäre, hätte das lebensbedrohlich werden können. Professionelle Pflege heißt: beides schaffen.",
              patientResponseB1: "Beides ist wichtig. Wenn Frau Klein einen zu hohen Blutdruck hatte, wäre das gefährlich. Du musst beides schaffen.",
              score: 1,
              feedback: "Empathie und medizinische Verantwortung gegeneinander auszuspielen ist problematisch. Professionelle Pflege bedeutet: beides gleichzeitig — Nähe UND Sicherheit. Das Delegieren an Kollegen wäre eine Lösung gewesen, aber du musst es aktiv organisieren.",
              feedbackB1: "Beides ist wichtig: Mitgefühl UND Sicherheit. Du kannst auch eine Kollegin bitten, die Vitalzeichen zu messen.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin fragt: 'Stell dir vor, du bist morgen wieder in der Situation. Herr Brenner weint, und du hast in 10 Minuten die Vitalzeichen bei Frau Klein. Was machst du?'",
          contextB1: "Die Praxisanleiterin fragt: 'Was machst du morgen, wenn es wieder passiert? Herr Brenner weint, und Frau Klein braucht ihre Kontrolle.'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich bleibe kurz bei Herrn Brenner, sage ihm: Ich komme in 20 Minuten wieder. Dann messe ich die Vitalzeichen bei Frau Klein. Danach gehe ich zurück.",
              textB1: "Ich bleibe kurz, sage: Ich komme gleich wieder. Dann gehe ich zu Frau Klein. Danach komme ich zurück.",
              patientResponse: "Genau! Wahrnehmen, kurz begleiten, begrenzen. Herr Brenner weiß, dass er nicht vergessen wird. Und Frau Klein wird versorgt. Das ist professionelle Nähe.",
              patientResponseB1: "Genau richtig! Du bist kurz da, sagst du kommst wieder, und dann kümmerst du dich um Frau Klein. So geht es!",
              score: 3,
              feedback: "Perfekt! Du wendest die 4 Stufen an: Wahrnehmen, Ansprechen, Begleiten, Begrenzen. Und du versprichst wiederzukommen — das ist entscheidend für das Vertrauen.",
              feedbackB1: "Super! Du bleibst kurz, versprichst wiederzukommen, und kümmerst dich um beide Patienten.",
            },
            {
              text: "Ich informiere eine Kollegin, dass Herr Brenner Zuwendung braucht, und gehe direkt zu Frau Klein.",
              textB1: "Ich sage einer Kollegin Bescheid und gehe zu Frau Klein.",
              patientResponse: "Delegation ist ein guter Ansatz! Aber: Du bist die Person, der Herr Brenner vertraut. Ein kurzer Moment mit dir wiegt mehr als 30 Minuten mit einer fremden Person.",
              patientResponseB1: "Gut, dass du an eine Kollegin denkst. Aber Herr Brenner vertraut dir. Kurz bleiben wäre besser.",
              score: 2,
              feedback: "Delegation an Kolleginnen ist grundsätzlich richtig. Aber das persönliche Moment mit dem Patienten, der dir vertraut, sollte nicht ganz an andere abgegeben werden. Idealerweise: kurz bleiben, dann delegieren.",
              feedbackB1: "Delegation ist gut, aber kurz bei Herrn Brenner bleiben wäre noch besser. Er vertraut dir.",
            },
            {
              text: "Ich messe zuerst die Vitalzeichen und gehe danach zu Herrn Brenner.",
              textB1: "Ich messe zuerst die Vitalzeichen. Danach gehe ich zu Herrn Brenner.",
              patientResponse: "Die Vitalzeichen sind wichtig. Aber was passiert mit Herrn Brenner, wenn du einfach vorbeigehst? Er fühlt sich ein weiteres Mal allein gelassen.",
              patientResponseB1: "Vitalzeichen sind wichtig. Aber Herr Brenner fühlt sich allein, wenn du einfach vorbeigehst.",
              score: 1,
              feedback: "Vitalzeichen haben Priorität, ja — aber ein kurzer Satz an Herrn Brenner kostet nur 10 Sekunden: 'Ich sehe Sie, Herr Brenner. Ich komme gleich.' Das macht den ganzen Unterschied.",
              feedbackB1: "Ein kurzer Satz wie 'Ich komme gleich' kostet nur 10 Sekunden. Aber er zeigt Herrn Brenner: Du bist nicht allein.",
            },
          ],
        },
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
