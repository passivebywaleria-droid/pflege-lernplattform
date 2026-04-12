// Session 1: "Der Weg der Nahrung" — LE 08 Menschen aller Altersstufen bei der Ernährung unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB1: Verdauungstrakt A&P (ce02-le08-ap-verdauung) + TB2: Nährstoffe/Energiebedarf (ce02-le08-naehrstoffe)
// Leitfälle: Elisabeth Kramer (42, MS, Dysphagie), Baby Emre/Ayşe Demir (6 Mo, Gedeihstörung), Walter Bergmann (84, Demenz, PEG)
// Bloom: B1-B3, 22 Steps, ~30 Min

import type { ContentStep, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-08",
  ceId: "ce-02",
  title: "Menschen aller Altersstufen bei der Ernährung unterstützen",
  titleShort: "Ernährung unterstützen",
  zeitrichtwert: 30,
  sessionCount: 12,
  geschaetzteLernzeit: { c1: 25, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-II.1", "KB-III.1", "KB-IV.1", "KB-V.1"],
  bloomStufen: [1, 2, 3],
  voraussetzungen: ["le-01", "le-05", "le-06", "le-07"],
  leitfall: {
    name: "Elisabeth Kramer",
    alter: 42,
    beruf: "Lehrerin",
    diagnose: "Multiple Sklerose, Schub mit Dysphagie, Gewichtsverlust 6 kg in 3 Monaten",
    setting: "Neurologische Station, Krankenhaus",
    kernproblem: "Schluckstörung, Ablehnung von Andickungsmitteln, BMI 17,8",
  },
  glossarCount: 42,
  quellenCount: 8,
  organsysteme: ["gi-trakt"],
};

export const STEPS_S1: ContentStep[] = [
  // =============================================================
  // Step 0: CROWD-POLL — Einstiegs-Umfrage (Mentimeter-Stil)
  // =============================================================
  {
    stepId: "le08-s1-poll-01",
    phase: "s1",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Was denkst du?",
      body: "Bevor wir starten — eine kurze Umfrage an alle Schüler deines Jahrgangs.",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Eine kurze Frage an alle Schüler.",
    },
    question: {
      fragetext: "Was fällt dir ein?",
      crowdPoll: {
        question: "Warum essen ältere Menschen im Krankenhaus oft zu wenig?",
        questionB1: "Warum essen alte Menschen im Krankenhaus oft wenig?",
        inputType: "freetext",
        placeholder: "Schreibe deine Vermutung...",
        placeholderB1: "Schreibe hier...",
        seedResponses: [
          { text: "Einsamkeit — niemand isst gerne allein", count: 23, highlight: true },
          { text: "Kein Appetit durch Medikamente", count: 18 },
          { text: "Zahnprobleme oder schlecht sitzende Prothese", count: 14 },
          { text: "Essen schmeckt nicht wie zuhause", count: 12 },
          { text: "Schluckstörungen (Dysphagie)", count: 8 },
          { text: "Depression und Antriebslosigkeit", count: 6 },
          { text: "Vergessen zu essen (Demenz)", count: 5 },
        ],
        totalVotes: 52,
        fazit: "Spannend — die Ursachen sind vielfältig und oft kombiniert. Genau das lernst du in dieser Session!",
        fazitB1: "Es gibt viele Gründe. Das lernst du jetzt!",
      },
    },
  },
  // =============================================================
  // Step 1: SZENE — Curiosity-Gap-Dialog (Apfel-Reise)
  // =============================================================
  {
    stepId: "le08-s1-tb1-01",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-230"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "SZENE",
    tag: "anatomie",
    contentC1: {
      title: "Was passiert mit dem Apfel?",
      body: "Du sitzt in der Pause auf Station und beißt in einen Apfel. Ein Schüler aus dem ersten Kurs fragt dich: 'Was passiert eigentlich mit dem Essen in unserem Körper?'",
    },
    contentB1: {
      title: "Was passiert mit dem Apfel?",
      body: "Du isst einen Apfel auf der Station. Ein Schüler fragt dich: 'Was passiert mit dem Essen im Körper?'",
    },
    question: {
      fragetext: "Was antwortest du?",
      patientName: "Mitschüler",
      dialogPhases: [
        {
          context: "Du beißt in den Apfel. Dein Mitschüler schaut neugierig: 'Wo geht der Apfel jetzt hin? Und wie wird daraus Energie?'",
          contextB1: "Du isst den Apfel. Dein Mitschüler fragt: 'Wo geht der Apfel hin? Wie wird daraus Energie?'",
          speaker: "Mitschüler",
          options: [
            {
              text: "Er wird zuerst im Mund zerkleinert und dann Station für Station verdaut — vom Mund bis zum Rektum sind es 6 Stationen.",
              textB1: "Der Apfel wird im Mund klein gemacht. Dann geht er durch 6 Stationen im Körper.",
              patientResponse: "6 Stationen? Das klingt spannend! Welche sind das?",
              patientResponseB1: "6 Stationen? Welche sind das?",
              score: 3,
              feedback: "Genau! Der Weg der Nahrung führt über 6 Stationen: Mund, Speiseröhre, Magen, Dünndarm, Dickdarm und Rektum. Jede Station hat eine eigene Aufgabe.",
              feedbackB1: "Richtig! Das Essen geht durch 6 Stationen: Mund, Speiseröhre, Magen, Dünndarm, Dickdarm und Rektum.",
            },
            {
              text: "Er geht in den Magen und wird dort verdaut.",
              textB1: "Er geht in den Magen.",
              patientResponse: "Aber bevor er im Magen ankommt, passiert doch schon etwas im Mund, oder?",
              patientResponseB1: "Aber was passiert vorher im Mund?",
              score: 2,
              feedback: "Teilweise richtig! Der Magen ist eine wichtige Station — aber die Verdauung beginnt schon im Mund mit dem Zerkleinern und dem Speichel.",
              feedbackB1: "Nicht ganz. Der Magen ist wichtig. Aber die Verdauung beginnt schon im Mund.",
            },
            {
              text: "Ich bin mir nicht sicher — irgendwie wird er zu Energie, aber wie genau weiß ich nicht.",
              textB1: "Ich weiß es nicht genau.",
              patientResponse: "Kein Problem! Genau das lernen wir heute. Der Weg der Nahrung ist wie eine Reise mit 6 Haltestellen.",
              patientResponseB1: "Kein Problem! Das lernen wir heute. Das Essen macht eine Reise mit 6 Stationen.",
              score: 1,
              feedback: "Ehrlich! Genau dafür ist diese Session da. Du wirst den kompletten Weg der Nahrung kennenlernen — von der ersten Station im Mund bis zur letzten im Rektum.",
              feedbackB1: "Ehrlich! Das lernen wir jetzt. Du lernst alle 6 Stationen kennen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ERKLÄRUNG — Der Weg der Nahrung (stepbystep)
  // =============================================================
  {
    stepId: "le08-s1-tb1-02",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-230", "I Care Pflege S. 449-451"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    displayFormat: "stepbystep",
    contentC1: {
      title: "Der Weg der Nahrung",
      body: "**Station 1 — Mundhöhle:** Nahrung wird zerkleinert, Speichel enthält Amylase (spaltet Stärke), Schluckreflex wird eingeleitet. **Station 2 — Speiseröhre (Ösophagus):** Peristaltik transportiert die Nahrung zum Magen. **Station 3 — Magen (Gaster):** Durchmischung mit Magensaft (Salzsäure + Pepsin), Proteinverdauung beginnt. **Station 4 — Dünndarm:** Hauptort der Verdauung und Nährstoffaufnahme. **Station 5 — Dickdarm:** Wasserresorption (1-2 Liter pro Tag), Stuhlformung. **Station 6 — Rektum:** Sammlung und Ausscheidung.",
      glossarBegriffe: ["Peristaltik", "Ösophagus"],
    },
    contentB1: {
      title: "Der Weg der Nahrung — 6 Stationen",
      body: "**Station 1 — Mund:** Das Essen wird klein gemacht. Der Speichel (Flüssigkeit im Mund) hilft bei der Verdauung. **Station 2 — Speiseröhre:** Die Muskeln schieben das Essen in den Magen. **Station 3 — Magen:** Magensäure macht das Essen weich und tötet Keime ab. **Station 4 — Dünndarm:** Hier nimmt der Körper die Nährstoffe auf. **Station 5 — Dickdarm:** Hier wird Wasser aufgenommen. **Station 6 — Rektum:** Der Rest wird ausgeschieden.",
      glossarBegriffe: ["Peristaltik"],
    },

  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Matching Organ → Funktion
  // =============================================================
  {
    stepId: "le08-s1-tb1-03",
    phase: "s1",
    stepType: "matching",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-230"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    contentC1: {
      title: "Organ und Funktion",
      body: "Jedes Organ im Verdauungstrakt hat eine Hauptaufgabe. Ordne die Organe ihrer Funktion zu.",
    },
    contentB1: {
      title: "Organ und Aufgabe",
      body: "Jedes Organ hat eine Aufgabe. Ordne richtig zu.",
    },
    question: {
      fragetext: "Ordne jedes Organ seiner Hauptfunktion zu.",
      matchingPairs: [
        { left: "Mund", right: "Zerkleinern + Speichel" },
        { left: "Magen", right: "Eiweiß verdauen" },
        { left: "Dünndarm", right: "Nährstoffe aufnehmen" },
        { left: "Dickdarm", right: "Wasser aufnehmen" },
        { left: "Leber", right: "Galle herstellen" },
        { left: "Pankreas", right: "Enzyme + Insulin" },
      ],
    },
  },

  // =============================================================
  // Step 4: CHECKPOINT — MC Nährstoffaufnahme
  // =============================================================
  {
    stepId: "le08-s1-tb1-04",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 210-215"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "CHECKPOINT",
    tag: "anatomie",
    contentC1: {
      title: "Hauptort der Nährstoffaufnahme",
      body: "Eine der 6 Stationen ist besonders wichtig für die Aufnahme von Nährstoffen ins Blut.",
    },
    contentB1: {
      title: "Wo nimmt der Körper Nährstoffe auf?",
      body: "Eine Station ist besonders wichtig. Dort nimmt der Körper die Nährstoffe auf.",
    },
    question: {
      fragetext: "Wo werden die meisten Nährstoffe aufgenommen?",
      optionen: [
        {
          text: "Dünndarm",
          isCorrect: true,
          explanation: "Richtig! Der Dünndarm ist mit 5-6 Metern Länge und seinen Zotten der Hauptort der Nährstoffaufnahme.",
          explanationB1: "Richtig! Der Dünndarm ist sehr lang (5-6 Meter). Dort nimmt der Körper die meisten Nährstoffe auf.",
        },
        {
          text: "Magen",
          isCorrect: false,
          explanation: "Im Magen beginnt die Proteinverdauung — aber die Aufnahme der Nährstoffe ins Blut findet hauptsächlich im Dünndarm statt.",
          explanationB1: "Im Magen wird Eiweiß verdaut. Aber die Nährstoffe gehen erst im Dünndarm ins Blut.",
        },
        {
          text: "Dickdarm",
          isCorrect: false,
          explanation: "Der Dickdarm nimmt vor allem Wasser auf (1-2 Liter pro Tag). Die Nährstoffaufnahme findet im Dünndarm statt.",
          explanationB1: "Der Dickdarm nimmt vor allem Wasser auf. Nährstoffe nimmt der Dünndarm auf.",
        },
        {
          text: "Mund",
          isCorrect: false,
          explanation: "Im Mund wird die Nahrung zerkleinert und mit Speichel vermischt. Die Nährstoffaufnahme findet im Dünndarm statt.",
          explanationB1: "Im Mund wird das Essen klein gemacht. Nährstoffe nimmt der Dünndarm auf.",
        },
      ],
    },
  },

  // =============================================================
  // Step 5: ANDERS ERKLÄRT — Flipcard Organe + Pflege-Relevanz
  // =============================================================
  {
    stepId: "le08-s1-tb1-05",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-230", "I Care Pflege S. 455-456"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "anatomie",
    contentC1: {
      title: "Organe und ihre Pflege-Relevanz",
      body: "Jedes Organ ist für die Pflege wichtig. Tippe auf die Karten um zu sehen, welche Probleme auftreten können.",
    },
    contentB1: {
      title: "Organe und ihre Bedeutung für die Pflege",
      body: "Jedes Organ ist wichtig für die Pflege. Tippe auf die Karten.",
    },
    question: {
      fragetext: "Decke die Karten auf und lerne die Pflege-Relevanz kennen.",
      flipcard: {
        instruction: "Tippe auf eine Karte um die Pflege-Relevanz zu sehen.",
        cards: [
          {
            front: "Mundhöhle",
            back: "Mundpflege, Zahnprothese prüfen, Soor-Prophylaxe. Bei Schluckstörung: Aspirationsgefahr!",
            backB1: "Mundpflege ist wichtig. Zahnprothese prüfen. Bei Schluckproblemen: Gefahr, dass Essen in die Lunge kommt!",
          },
          {
            front: "Speiseröhre (Ösophagus)",
            back: "Peristaltik transportiert Nahrung. Bei Dysphagie gestört — Nahrung kann stecken bleiben oder in die Luftwege gelangen.",
            backB1: "Die Muskeln schieben das Essen weiter. Bei Schluckstörungen funktioniert das nicht richtig.",
          },
          {
            front: "Magen (Gaster)",
            back: "Nüchternheit vor OP beachten. Magensonde: Lagekontrolle vor jeder Gabe! Übelkeit und Erbrechen beobachten.",
            backB1: "Vor einer OP nichts essen. Magensonde: Immer prüfen ob sie richtig liegt! Auf Übelkeit achten.",
          },
          {
            front: "Dünndarm",
            back: "Hauptort der Nährstoffaufnahme. Bei Kurzdarmsyndrom oder Morbus Crohn: Mangelernährung möglich!",
            backB1: "Hier nimmt der Körper Nährstoffe auf. Bei manchen Krankheiten funktioniert das nicht richtig.",
          },
        ],
        shuffled: true,
      },
    },
  },

  // =============================================================
  // Step 6: STORYTELLING — Analogie Peristaltik (Score C)
  // =============================================================
  {
    stepId: "le08-s1-tb1-06",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 214"],
    track: "vertiefung",
    modus: "story",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "STORYTELLING",
    tag: "anatomie",
    displayFormat: "analogy",
    contentC1: {
      title: "Peristaltik — wie eine Wasserrutsche",
      body: "Stell dir eine Wasserrutsche vor. Die Speiseröhre funktioniert ähnlich — Muskeln schieben die Nahrung wellenförmig nach unten. Das nennt man **Peristaltik**. Deshalb kann man sogar kopfüber trinken! Die Peristaltik arbeitet im gesamten Verdauungstrakt — auch im Dünndarm und Dickdarm.",
      glossarBegriffe: ["Peristaltik"],
    },
    contentB1: {
      title: "Peristaltik — wie eine Rutsche",
      body: "Die Speiseröhre ist wie eine Rutsche. Die Muskeln in der Wand schieben das Essen nach unten. Das heißt **Peristaltik** (Darm-Bewegung). Deshalb kann man auch kopfüber trinken! Diese Bewegung gibt es im ganzen Darm.",
      glossarBegriffe: ["Peristaltik"],
    },

  },

  // =============================================================
  // Step 7: ERKLÄRUNG — Schluckakt 3 Phasen (Flipcard)
  // =============================================================
  {
    stepId: "le08-s1-tb1-07",
    phase: "s1",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-200"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    contentC1: {
      title: "Der Schluckakt — 3 Phasen",
      body: "Der Schluckakt hat 3 Phasen. Decke die Karten auf um jede Phase kennenzulernen.",
      glossarBegriffe: ["Dysphagie", "Aspiration"],
    },
    contentB1: {
      title: "Schlucken — 3 Schritte",
      body: "Schlucken hat 3 Schritte. Tippe auf die Karten.",
      glossarBegriffe: ["Dysphagie"],
    },
    question: {
      fragetext: "Decke die Karten auf und lerne die 3 Phasen des Schluckakts kennen.",
      flipcard: {
        instruction: "Tippe auf eine Karte um die Details zu sehen.",
        cards: [
          {
            front: "Phase 1 — Oral (willkürlich)",
            back: "Die Nahrung wird im Mund geformt, die Zunge drückt den Bissen gegen den Gaumen. Das ist der einzige Teil, den du bewusst steuerst!",
            backB1: "Du formst das Essen im Mund. Die Zunge drückt es nach oben. Diesen Teil kannst du steuern!",
          },
          {
            front: "Phase 2 — Pharyngeal (reflektorisch)",
            back: "Der Schluckreflex wird ausgelöst, der **Kehldeckel (Epiglottis)** schließt sich. Die Nahrung gleitet am Kehlkopf vorbei — in die Speiseröhre, nicht in die Luftröhre!",
            backB1: "Der Körper schluckt automatisch. Der **Kehldeckel** schließt sich. So kommt kein Essen in die Luftröhre.",
          },
          {
            front: "Phase 3 — Ösophageal",
            back: "Die Peristaltik der Speiseröhre transportiert die Nahrung zum Magen. Dieser Transport dauert ca. 8-10 Sekunden.",
            backB1: "Die Muskeln in der Speiseröhre schieben das Essen in den Magen. Das dauert etwa 8 bis 10 Sekunden.",
          },
        ],
        shuffled: false,
      },
    },
  },

  // =============================================================
  // Step 8: ANWENDUNG — Sequencing Schluckakt
  // =============================================================
  {
    stepId: "le08-s1-tb1-08",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-200"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    contentC1: {
      title: "Schluckakt in der richtigen Reihenfolge",
      body: "Der Schluckakt ist ein komplexer Vorgang mit mehreren aufeinander folgenden Schritten.",
    },
    contentB1: {
      title: "Schlucken — richtige Reihenfolge",
      body: "Beim Schlucken passieren viele Dinge nacheinander. Bringe sie in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Bringe die 6 Schritte des Schluckakts in die richtige Reihenfolge.",
      sequencing: {
        instruction: "Ordne die Schritte von oben nach unten.",
        items: [
          { id: "s1", label: "Nahrung im Mund formen" },
          { id: "s2", label: "Zunge drückt gegen den Gaumen" },
          { id: "s3", label: "Schluckreflex wird ausgelöst" },
          { id: "s4", label: "Kehldeckel schließt sich" },
          { id: "s5", label: "Peristaltik in der Speiseröhre" },
          { id: "s6", label: "Nahrung erreicht den Magen" },
        ],
      },
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG — Hotspot Verdauungstrakt
  // =============================================================
  {
    stepId: "le08-s1-tb1-09",
    phase: "s1",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-230"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "ANWENDUNG",
    tag: "anatomie",
    bildhinweis: "Schematische Darstellung des Verdauungstrakts: Mundhöhle bis Rektum, Organe beschriftet, Hauptfunktion je Organ angegeben.",
    bildkategorie: "anatomie",
    imageUrl: "/images/content/le-08/verdauungstrakt.svg",
    imageAlt: "Schematische Darstellung des Verdauungstrakts von Mund bis Rektum",
    contentC1: {
      title: "Der Verdauungstrakt",
      body: "Markiere die 6 Stationen der Nahrung auf dem Bild — vom Mund bis zum Rektum.",
    },
    contentB1: {
      title: "Der Verdauungstrakt",
      body: "Zeige auf dem Bild die 6 Stationen. Vom Mund bis zum Rektum (Darmausgang).",
    },
    question: {
      fragetext: "Markiere die 6 Stationen der Nahrung vom Mund bis zum Rektum.",
      hotspot: {
        imageUrl: "/images/content/le-08/verdauungstrakt.svg",
        imageAlt: "Verdauungstrakt schematisch",
        instruction: "Tippe auf alle 6 Stationen der Nahrung.",
        zones: [
          { id: "mund", x: 50, y: 8, radius: 8, label: "Mundhöhle" },
          { id: "oesophagus", x: 50, y: 22, radius: 6, label: "Speiseröhre" },
          { id: "magen", x: 42, y: 38, radius: 10, label: "Magen" },
          { id: "duenndarm", x: 50, y: 55, radius: 12, label: "Dünndarm" },
          { id: "dickdarm", x: 50, y: 72, radius: 12, label: "Dickdarm" },
          { id: "rektum", x: 50, y: 88, radius: 6, label: "Rektum" },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: REFLEXION — Selfrating TB1
  // =============================================================
  {
    stepId: "le08-s1-tb1-10",
    phase: "s1",
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Anatomie S. 195-230"],
    track: "vertiefung",
    modus: "checkpoint",
    lernziel: "ce02-le08-ap-verdauung",
    themenblockPhase: "REFLEXION",
    tag: "anatomie",
    contentC1: {
      title: "Selbsteinschätzung Verdauungstrakt",
      body: "Wie sicher fühlst du dich bei den Grundlagen des Verdauungstrakts?",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Wie gut kennst du jetzt den Verdauungstrakt?",
    },
    question: {
      fragetext: "Schätze dich ehrlich ein.",
      confidenceCards: [
        {
          statement: "Ich kann die 6 Organe des Verdauungstrakts benennen.",
          statementB1: "Ich kann die 6 Organe nennen.",
          isTrue: true,
          explanation: "Mund, Speiseröhre, Magen, Dünndarm, Dickdarm, Rektum — dazu Leber und Pankreas als Hilfsorgane.",
          explanationB1: "Die 6 Stationen: Mund, Speiseröhre, Magen, Dünndarm, Dickdarm, Rektum.",
        },
        {
          statement: "Ich verstehe die 3 Phasen des Schluckakts.",
          statementB1: "Ich verstehe die 3 Schritte beim Schlucken.",
          isTrue: true,
          explanation: "Oral (willkürlich), pharyngeal (reflektorisch), ösophageal (Peristaltik).",
          explanationB1: "Mund (du steuerst), Rachen (automatisch), Speiseröhre (Muskeln schieben).",
        },
        {
          statement: "Ich weiß, wo Nährstoffe aufgenommen werden.",
          statementB1: "Ich weiß, wo der Körper Nährstoffe aufnimmt.",
          isTrue: true,
          explanation: "Im Dünndarm — er ist 5-6 Meter lang und hat Zotten für maximale Aufnahme.",
          explanationB1: "Im Dünndarm. Er ist sehr lang und nimmt die Nährstoffe auf.",
        },
      ],
    },
  },

  // =============================================================
  // Step 11: SZENE — Dialog Nährstoffe (Alltagsbezug)
  // =============================================================
  {
    stepId: "le08-s1-tb2-11",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 449-451"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Was braucht der Körper?",
      body: "Frühstückspause auf Station. Deine Kollegin isst nur einen Proteinriegel und sagt: 'Reicht doch — Eiweiß ist alles was ich brauche.'",
    },
    contentB1: {
      title: "Was braucht der Körper?",
      body: "Frühstückspause. Deine Kollegin isst nur einen Eiweißriegel. Sie sagt: 'Eiweiß reicht doch.'",
    },
    question: {
      fragetext: "Stimmt das?",
      patientName: "Kollegin",
      dialogPhases: [
        {
          context: "Deine Kollegin beißt in ihren Proteinriegel: 'Ich esse nur noch Eiweiß — das reicht doch für die Schicht, oder?'",
          contextB1: "Deine Kollegin sagt: 'Ich esse nur Eiweiß. Das reicht doch, oder?'",
          speaker: "Kollegin",
          options: [
            {
              text: "Nein, du brauchst auch Kohlenhydrate und Fette — der Körper braucht alle drei Makronährstoffe.",
              textB1: "Nein, du brauchst auch Zucker und Fett. Der Körper braucht alle drei.",
              patientResponse: "Wirklich? Aber Fett macht doch dick!",
              patientResponseB1: "Wirklich? Aber Fett macht dick!",
              score: 3,
              feedback: "Richtig! Der Körper braucht Kohlenhydrate (4 kcal/g) für schnelle Energie, Proteine (4 kcal/g) für Aufbau und Reparatur, und Fette (9 kcal/g) als Energiereserve und Schutz.",
              feedbackB1: "Richtig! Der Körper braucht Kohlenhydrate (Zucker) für Energie, Eiweiß für Aufbau und Fett als Reserve.",
            },
            {
              text: "Ja, Eiweiß reicht — das ist der wichtigste Nährstoff.",
              textB1: "Ja, Eiweiß reicht.",
              patientResponse: "Hmm, aber ich habe trotzdem wenig Energie auf Station. Liegt das am fehlenden Zucker?",
              patientResponseB1: "Aber ich habe wenig Energie. Fehlt mir etwas?",
              score: 1,
              feedback: "Das stimmt so nicht! Eiweiß ist wichtig, aber ohne Kohlenhydrate fehlt dem Körper schnelle Energie. Der Körper braucht alle drei Makronährstoffe.",
              feedbackB1: "Das stimmt nicht. Eiweiß allein reicht nicht. Der Körper braucht auch Kohlenhydrate und Fett.",
            },
            {
              text: "Kommt drauf an — wahrscheinlich brauchst du auch andere Nährstoffe.",
              textB1: "Ich glaube, du brauchst auch andere Nährstoffe.",
              patientResponse: "Welche denn? Kannst du das genauer erklären?",
              patientResponseB1: "Welche brauche ich noch?",
              score: 2,
              feedback: "Guter Ansatz! Der Körper braucht drei Makronährstoffe: Kohlenhydrate, Proteine und Fette. Dazu kommen Mikronährstoffe wie Vitamine und Mineralstoffe.",
              feedbackB1: "Guter Ansatz! Der Körper braucht drei große Nährstoffe: Kohlenhydrate, Eiweiß und Fett. Und auch Vitamine.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 12: ERKLÄRUNG — Nährstoff-Überblick
  // =============================================================
  {
    stepId: "le08-s1-tb2-12",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 449-451"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "glossary",
    contentC1: {
      title: "Makro- und Mikronährstoffe",
      body: "**Makronährstoffe:** Kohlenhydrate (4 kcal/g) liefern schnelle Energie. Proteine (4 kcal/g) dienen dem Aufbau und der Reparatur von Gewebe. Fette (9 kcal/g) sind Energiereserve und Schutz. **Mikronährstoffe:** Vitamine (fettlöslich: A, D, E, K; wasserlöslich: B-Komplex, C) und Mineralstoffe (Natrium, Kalium, Kalzium, Eisen, Magnesium). **Ballaststoffe:** Unverdaulich, aber sie fördern die Peristaltik und beugen Obstipation vor.",
      glossarBegriffe: ["Makronährstoffe", "Mikronährstoffe", "Obstipation"],
    },
    contentB1: {
      title: "Die Nährstoffe im Essen",
      body: "**Große Nährstoffe:** Kohlenhydrate (Zucker, 4 kcal/g) geben Energie. Eiweiß (4 kcal/g) baut den Körper auf. Fett (9 kcal/g) ist Energiereserve. **Kleine Nährstoffe:** Vitamine und Mineralstoffe (Eisen, Kalzium). Der Körper braucht nur wenig, aber sie sind sehr wichtig. **Ballaststoffe:** Sie helfen dem Darm bei der Arbeit.",
      glossarBegriffe: ["Makronährstoffe", "Mikronährstoffe"],
    },

  },

  // =============================================================
  // Step 13: CHECKPOINT — TrueFalse Nährstoffe
  // =============================================================
  {
    stepId: "le08-s1-tb2-13",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 449-451"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Nährstoff-Wissen — stimmt das?",
      body: "Prüfe dein Wissen über Nährstoffe. Entscheide bei jeder Aussage: richtig oder falsch?",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Lies die Aussagen. Entscheide: richtig oder falsch?",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      trueFalseCards: [
        {
          statement: "Proteine liefern 9 kcal pro Gramm.",
          isTrue: false,
          explanation: "Falsch! Proteine liefern 4 kcal/g. 9 kcal/g liefern Fette — sie sind der energiereichste Makronährstoff.",
        },
        {
          statement: "Ballaststoffe fördern die Darmbewegung.",
          isTrue: true,
          explanation: "Richtig! Ballaststoffe sind unverdaulich, regen aber die Peristaltik an und beugen Obstipation vor.",
        },
        {
          statement: "Vitamin D ist wasserlöslich.",
          isTrue: false,
          explanation: "Falsch! Vitamin D ist fettlöslich (A, D, E, K sind fettlöslich). Wasserlöslich sind B-Komplex und Vitamin C.",
        },
        {
          statement: "Kalzium ist ein Mineralstoff.",
          isTrue: true,
          explanation: "Richtig! Kalzium ist ein Mineralstoff, wichtig für Knochen und Zähne.",
        },
      ],
    },
  },

  // =============================================================
  // Step 14: ERKLÄRUNG — Reveal Ernährungspyramide
  // =============================================================
  {
    stepId: "le08-s1-tb2-14",
    phase: "s1",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455", "DGE 10 Regeln"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Die Ernährungspyramide",
      body: "Die Ernährungspyramide zeigt, welche Lebensmittel du in welcher Menge essen solltest. Unten = viel, oben = wenig.",
    },
    contentB1: {
      title: "Die Ernährungspyramide",
      body: "Die Pyramide zeigt: Was unten steht, soll man viel essen. Was oben steht, nur wenig.",
    },
    question: {
      fragetext: "Decke die 6 Ebenen der Ernährungspyramide auf — von unten nach oben.",
      reveal: {
        instruction: "Tippe auf die Karten um die Pyramide aufzubauen.",
        cards: [
          { id: "e1", label: "Ebene 1 (unten)", content: "**Getränke** — reichlich! Wasser und ungesüßte Tees. 1,5-2,5 Liter pro Tag.", contentB1: "**Getränke** — viel trinken! Wasser und Tee. 1,5-2,5 Liter am Tag.", icon: "droplets" },
          { id: "e2", label: "Ebene 2", content: "**Gemüse und Obst** — 5 Portionen am Tag. Gemüse mehr als Obst.", contentB1: "**Gemüse und Obst** — 5 Portionen am Tag.", icon: "apple" },
          { id: "e3", label: "Ebene 3", content: "**Getreide und Kartoffeln** — Vollkorn bevorzugen. Liefern Kohlenhydrate und Ballaststoffe.", contentB1: "**Brot und Kartoffeln** — am besten Vollkorn. Sie geben Energie.", icon: "wheat" },
          { id: "e4", label: "Ebene 4", content: "**Milch, Fleisch, Fisch, Eier** — mäßig. Liefern Eiweiß, Eisen und B-Vitamine.", contentB1: "**Milch, Fleisch, Fisch** — nicht zu viel. Sie geben Eiweiß.", icon: "egg" },
          { id: "e5", label: "Ebene 5", content: "**Fette und Öle** — sparsam. Pflanzliche Öle bevorzugen.", contentB1: "**Fett und Öl** — nur wenig. Am besten Pflanzenöl.", icon: "droplet" },
          { id: "e6", label: "Ebene 6 (oben)", content: "**Extras** — Süßigkeiten, Chips, Alkohol — sehr sparsam!", contentB1: "**Extras** — Süßigkeiten, Chips, Alkohol — ganz wenig!", icon: "candy" },
        ],
        revealMode: "sequential",
      },
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — Categorize Ampel
  // =============================================================
  {
    stepId: "le08-s1-tb2-15",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Ampel-Kategorien der Ernährung",
      body: "Die Ernährungspyramide nutzt ein Ampel-System: Grün = reichlich, Gelb = mäßig, Rot = sparsam.",
    },
    contentB1: {
      title: "Essen sortieren nach Ampel",
      body: "Grün = viel essen. Gelb = nicht so viel. Rot = nur wenig.",
    },
    question: {
      fragetext: "Sortiere die 8 Lebensmittel in die richtige Ampel-Kategorie.",
      categories: [
        { name: "Grün — reichlich" },
        { name: "Gelb — mäßig" },
        { name: "Rot — sparsam" },
      ],
      categoryItems: [
        { text: "Wasser", correctCategory: 0 },
        { text: "Apfel", correctCategory: 0 },
        { text: "Brokkoli", correctCategory: 0 },
        { text: "Vollkornbrot", correctCategory: 1 },
        { text: "Joghurt", correctCategory: 1 },
        { text: "Schokoriegel", correctCategory: 2 },
        { text: "Cola", correctCategory: 2 },
        { text: "Butter", correctCategory: 2 },
      ],
    },
  },

  // =============================================================
  // Step 16: ERKLÄRUNG — Energiebedarf + Formeln
  // =============================================================
  {
    stepId: "le08-s1-tb2-16",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 452", "DGEM-Leitlinie 2007"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "checklist",
    contentC1: {
      title: "Energiebedarf berechnen",
      body: "**Grundumsatz:** 20-25 kcal pro kg Körpergewicht pro Tag. **Gesamtenergiebedarf:** Grundumsatz mal PAL-Wert (Physical Activity Level). PAL 1,2 = bettlägeriger Patient. PAL 1,8 = Pflegekraft auf Station. **Flüssigkeitsbedarf:** 30-35 ml pro kg Körpergewicht pro Tag. **Faustregel:** Mobile Pflegeempfänger brauchen etwa 30 kcal/kg/Tag. **Portionsgröße:** Die Handgröße des Patienten dient als Maß.",
      glossarBegriffe: ["Grundumsatz", "PAL-Wert"],
    },
    contentB1: {
      title: "Wie viel Energie und Flüssigkeit braucht der Körper?",
      body: "**Grundumsatz:** Der Körper braucht in Ruhe 20-25 kcal pro kg am Tag. **Gesamtbedarf:** Grundumsatz mal Aktivitätswert (PAL). PAL 1,2 = liegt nur im Bett. PAL 1,8 = aktive Pflegekraft. **Trinken:** 30-35 ml pro kg am Tag. **Einfache Regel:** Ein aktiver Patient braucht etwa 30 kcal pro kg am Tag. **Portionsgröße:** So groß wie die Hand des Patienten.",
    },

  },

  // =============================================================
  // Step 17: ANWENDUNG — Calculation Energiebedarf
  // =============================================================
  {
    stepId: "le08-s1-tb2-17",
    phase: "s1",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 452"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Energiebedarf berechnen — Frau Müller",
      body: "Frau Müller wiegt 62 kg und ist bettlägerig (PAL 1,2). Berechne ihren Gesamtenergiebedarf und Flüssigkeitsbedarf.",
    },
    contentB1: {
      title: "Rechnen: Wie viel Energie braucht Frau Müller?",
      body: "Frau Müller wiegt 62 kg. Sie liegt nur im Bett (PAL 1,2). Rechne aus: Wie viel Energie und Flüssigkeit braucht sie?",
    },
    question: {
      fragetext: "Berechne den Gesamtenergiebedarf von Frau Müller: Grundumsatz (25 kcal/kg) mal PAL 1,2.",
      calculation: {
        instruction: "Grundumsatz = 25 kcal/kg mal 62 kg = 1550 kcal. Gesamtenergiebedarf = 1550 mal 1,2 = ?",
        formula: "Gesamtenergiebedarf = Grundumsatz (25 kcal/kg × 62 kg) × PAL 1,2",
        correctValue: 1860,
        unit: "kcal",
        tolerance: 20,
        explanation: "Grundumsatz = 25 × 62 = 1550 kcal. Gesamtenergiebedarf = 1550 × 1,2 = 1860 kcal. Flüssigkeitsbedarf = 30 × 62 = 1860 ml pro Tag.",
        explanationB1: "Rechnung: 25 × 62 = 1550. Dann: 1550 × 1,2 = 1860 kcal. Trinken: 30 × 62 = 1860 ml am Tag.",
      },
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — WordOrder Fachsprache
  // =============================================================
  {
    stepId: "le08-s1-tb2-18",
    phase: "s1",
    stepType: "wordorder",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 452-453"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fachsatz zum Flüssigkeitsbedarf",
      body: "Bringe die Satzbausteine in die richtige Reihenfolge, um einen korrekten Fachsatz zu bilden.",
    },
    contentB1: {
      title: "Satz über Flüssigkeitsbedarf",
      body: "Setze die Wörter in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Ordne die Satzbausteine zu einem korrekten Fachsatz.",
      wordorder: {
        instruction: "Ziehe die Bausteine in die richtige Reihenfolge.",
        words: [
          "Der Flüssigkeitsbedarf",
          "eines gesunden Erwachsenen",
          "beträgt",
          "30 bis 35 Milliliter",
          "pro Kilogramm Körpergewicht",
          "pro Tag.",
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
      },
    },
  },

  // =============================================================
  // Step 19: CHECKPOINT — MC Anticipation Einfuhrbeschränkung
  // =============================================================
  {
    stepId: "le08-s1-tb2-19",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Einfuhrbeschränkung — warum?",
      body: "Nicht jeder Patient darf unbegrenzt trinken. Bei manchen Erkrankungen kann zu viel Flüssigkeit lebensgefährlich sein.",
    },
    contentB1: {
      title: "Warum darf man manchmal nicht viel trinken?",
      body: "Manche Patienten dürfen nicht viel trinken. Das kann gefährlich sein.",
    },
    question: {
      fragetext: "Was glaubst du — warum darf ein Patient mit Herzinsuffizienz NICHT unbegrenzt trinken?",
      mcVariant: "anticipation",
      optionen: [
        {
          text: "Weil zu viel Flüssigkeit zu einem Lungenödem führen kann",
          isCorrect: true,
          explanation: "Richtig! Bei Herzinsuffizienz kann das Herz das Blut nicht mehr richtig pumpen. Zu viel Flüssigkeit staut sich — im schlimmsten Fall in der Lunge (Lungenödem). Deshalb gibt es Einfuhrbeschränkungen.",
          explanationB1: "Richtig! Bei Herzschwäche pumpt das Herz schlecht. Zu viel Wasser kann in die Lunge kommen. Das ist gefährlich.",
        },
        {
          text: "Weil der Patient sonst Durchfall bekommt",
          isCorrect: false,
          explanation: "Durchfall hat andere Ursachen. Bei Herzinsuffizienz ist das Problem, dass die Flüssigkeit sich im Körper staut — besonders in der Lunge.",
          explanationB1: "Durchfall hat andere Gründe. Bei Herzschwäche ist das Problem: Das Wasser bleibt im Körper.",
        },
        {
          text: "Weil der Patient allergisch auf Wasser reagiert",
          isCorrect: false,
          explanation: "Eine Wasserallergie gibt es nicht. Bei Herzinsuffizienz ist das Herz zu schwach um die Flüssigkeit zu verarbeiten — es droht ein Lungenödem.",
          explanationB1: "Allergie gegen Wasser gibt es nicht. Bei Herzschwäche kann das Herz die Flüssigkeit nicht verarbeiten.",
        },
        {
          text: "Weil Wasser schlecht für den Geschmack der Medikamente ist",
          isCorrect: false,
          explanation: "Der Geschmack ist hier nicht das Problem. Bei Herzinsuffizienz und Niereninsuffizienz kann überschüssige Flüssigkeit nicht ausgeschieden werden — sie staut sich.",
          explanationB1: "Der Geschmack ist nicht das Problem. Der Körper kann das Wasser nicht loswerden.",
        },
      ],
    },
  },

  // =============================================================
  // Step 20: ERKLÄRUNG — Einfuhrbeschränkung (News-Format)
  // =============================================================
  {
    stepId: "le08-s1-tb2-20",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "news",
    contentC1: {
      title: "Häufiger Schülerfehler: Viel trinken ist nicht immer gut",
      body: "Bei **Herzinsuffizienz** und **Niereninsuffizienz** gilt: Zu viel Flüssigkeit kann lebensgefährlich sein! Es droht ein Lungenödem oder eine Überwässerung. 'Viel trinken hilft immer' ist bei diesen Patienten **falsch**. Bevor du einem Patienten sagst 'Trinken Sie mehr!', prüfe IMMER: Liegt eine Einfuhrbeschränkung vor?",
    },
    contentB1: {
      title: "Achtung: Nicht immer viel trinken!",
      body: "Bei **Herzschwäche** und **Nierenschwäche** darf der Patient nicht viel trinken. Zu viel Wasser ist dann gefährlich. 'Viel trinken hilft immer' stimmt bei diesen Patienten **nicht**. Prüfe immer: Darf der Patient so viel trinken?",
    },

  },

  // =============================================================
  // Step 21: ANWENDUNG — Swipe Wiederholung TB2
  // =============================================================
  {
    stepId: "le08-s1-tb2-21",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 449-455"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Schnelle Wiederholung — Nährstoffe",
      body: "Wische nach rechts wenn die Aussage stimmt, nach links wenn sie falsch ist.",
    },
    contentB1: {
      title: "Schnelle Wiederholung",
      body: "Wische nach rechts wenn es stimmt. Nach links wenn es falsch ist.",
    },
    question: {
      fragetext: "Stimmt die Aussage? Wische rechts (richtig) oder links (falsch).",
      swipe: {
        instruction: "Wische rechts für richtig, links für falsch.",
        cards: [
          {
            statement: "Fette liefern mehr Energie als Proteine.",
            statementB1: "Fett gibt mehr Energie als Eiweiß.",
            isCorrect: true,
            explanation: "Richtig! Fette liefern 9 kcal/g, Proteine nur 4 kcal/g.",
            explanationB1: "Richtig! Fett hat 9 kcal pro Gramm, Eiweiß nur 4.",
          },
          {
            statement: "Ballaststoffe werden im Darm verdaut.",
            statementB1: "Ballaststoffe werden verdaut.",
            isCorrect: false,
            explanation: "Falsch! Ballaststoffe sind unverdaulich — aber sie fördern die Peristaltik und beugen Obstipation vor.",
            explanationB1: "Falsch! Ballaststoffe werden nicht verdaut. Aber sie helfen dem Darm bei der Bewegung.",
          },
          {
            statement: "PAL 1,2 bedeutet: Der Patient ist sehr aktiv.",
            statementB1: "PAL 1,2 heißt: Der Patient bewegt sich viel.",
            isCorrect: false,
            explanation: "Falsch! PAL 1,2 bedeutet bettlägerig. PAL 1,8 wäre eine aktive Pflegekraft auf Station.",
            explanationB1: "Falsch! PAL 1,2 bedeutet: Der Patient liegt im Bett. PAL 1,8 bedeutet aktiv.",
          },
          {
            statement: "Portionsgröße = Handgröße des Patienten.",
            statementB1: "Die Portionsgröße ist so groß wie die Hand.",
            isCorrect: true,
            explanation: "Richtig! Die Handgröße des Pflegeempfängers dient als einfaches Maß für eine Portion.",
            explanationB1: "Richtig! Die Hand des Patienten zeigt, wie groß eine Portion sein soll.",
          },
          {
            statement: "Bei Niereninsuffizienz soll man reichlich trinken.",
            statementB1: "Bei Nierenschwäche soll man viel trinken.",
            isCorrect: false,
            explanation: "Falsch! Bei Niereninsuffizienz besteht eine Einfuhrbeschränkung. Zu viel Flüssigkeit kann gefährlich sein.",
            explanationB1: "Falsch! Bei Nierenschwäche darf man nicht viel trinken. Es gibt eine Grenze.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 1
  // =============================================================
  {
    stepId: "le08-s1-tb2-22",
    phase: "s1",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 449-455", "I Care Anatomie S. 195-230"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-naehrstoffe",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    audioUrl: "/audio/le-08/s1-zusammenfassung.mp3",
    audioLabel: "Zusammenfassung anhören (ca. 3 Min)",
    contentC1: {
      title: "Zusammenfassung — Session 1",
      body: "Du hast den Weg der Nahrung durch den Verdauungstrakt kennengelernt und die Grundlagen der Ernährung verstanden.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Du kennst jetzt den Weg der Nahrung. Und du weißt, was der Körper braucht.",
    },
    question: {
      fragetext: "Zusammenfassung der Session",
      summary: {
        reflexionRueckbezug: "In der nächsten Session lernst du, was passiert wenn der Körper zu wenig Nahrung bekommt — Mangelernährung und ihre Folgen.",
        kernaussagen: [
          "**Verdauungstrakt:** 6 Stationen — Mund, Speiseröhre, Magen, Dünndarm, Dickdarm, Rektum.",
          "**Schluckakt:** 3 Phasen — oral (willkürlich), pharyngeal (Kehldeckel schließt), ösophageal (Peristaltik).",
          "**Makronährstoffe:** Kohlenhydrate (4 kcal/g), Proteine (4 kcal/g), Fette (9 kcal/g).",
          "**Ernährungspyramide:** 6 Ebenen — von Getränke (viel) bis Extras (wenig).",
          "**Flüssigkeitsbedarf:** 30-35 ml pro kg Körpergewicht pro Tag.",
          "**Einfuhrbeschränkung:** Bei Herz- und Niereninsuffizienz nicht unbegrenzt trinken!",
        ],
      },
    },
  },
];
