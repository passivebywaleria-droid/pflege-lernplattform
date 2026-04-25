// CE-02 Situation Kovač — Phase 3: Planen — Pflegeplanung, Priorisierung, Ethisches Dilemma
// Steps: 5 · Bloom: B3-B5 · Zeit: ~20-30 Min
// Quelle: phase-planen.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_PLANEN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-planen",
  phase: "planen",
  titel: "Planen & Entscheiden",
  titelB1: "Was machen wir heute?",
  kontext:
    "Du hast alle relevanten Befunde erfasst. Jetzt musst du entscheiden: Was ist in diesem Morgenbesuch möglich? Was vertagst du auf den Abend? Was muss der Arzt wissen? Und: Die Kompressionsstrümpfe liegen noch in der Packung. Frau Kovač hat sie drei Wochen lang abgelehnt. Heute wirst du das Gespräch führen — nicht weil du es erzwingen kannst, sondern weil du dokumentieren musst was sie entschieden hat und warum.",
  kontextB1:
    "Du weißt jetzt, wie es Frau Kovač geht. Jetzt planst du: Was machst du heute Morgen in 45 Minuten? Was kommt heute Abend? Was muss der Arzt wissen? Und: Die Kompressionsstrümpfe liegen noch in der Packung. Frau Kovač lehnt sie ab. Du musst heute mit ihr reden — und aufschreiben was sie entschieden hat.",
  kernSteps: [
    // Step 3.1 — Zeitbudget-Matrix
    {
      stepId: "ce02-kovac-plan-01-zeitbudget-matrix",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB", "DNQP Erhaltung und Förderung der Mobilität 2017/2024"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-kovac-ambulant-plan-zeitplanung",
      tag: "pflege",
      contentC1: {
        title: "45 Minuten — was schaffst du?",
        body: "Du hast 45 Minuten für den Morgenbesuch. Nicht alle Maßnahmen passen gleichzeitig rein — du musst priorisieren. Ordne die Maßnahmen in die Matrix ein: Wann (Morgen / Abend / Arzt informieren) und wie dringend (Akut / Prophylaxe / Beratung).",
        glossarBegriffe: ["Prophylaxe", "Obstipation"],
      },
      contentB1: {
        title: "Was machst du wann?",
        body: "Du hast 45 Minuten bei Frau Kovač. Nicht alles passt heute Morgen rein. Ordne die Aufgaben ein: Was ist heute dringend? Was kommt heute Abend? Was muss der Arzt wissen?\n\nAkut = sofort nötig. Prophylaxe = Vorbeugung. Beratung/Aufklärung = Gespräch nötig.",
        glossarBegriffe: ["Prophylaxe"],
      },
      question: {
        fragetext:
          "Ordne die Maßnahmen in die richtige Zeitplanung und Dringlichkeit ein.",
        matrix: {
          instruction:
            "Ordne jede Maßnahme in die Matrix: Zeile = Wann, Spalte = Dringlichkeit.",
          axisX: {
            label: "Dringlichkeit",
            low: "Prophylaxe / Beratung",
            high: "Akut",
          },
          axisY: {
            label: "Zeitpunkt",
            low: "Arzt informieren (diese Woche)",
            high: "Heute Morgen",
          },
          items: [
            {
              id: "atemübungen",
              text: "Atemübungen mit Lippenbremse",
              correctQuadrant: 2,
            },
            {
              id: "obstipation",
              text: "Obstipation — Macrogol-Wirkung prüfen, ggf. Zäpfchen",
              correctQuadrant: 1,
            },
            {
              id: "trinkziel",
              text: "Trinkprotokoll-Ziel für heute vereinbaren",
              correctQuadrant: 2,
            },
            {
              id: "kompressions-gespraech",
              text: "Gespräch über Kompressionsstrümpfe führen + dokumentieren",
              correctQuadrant: 2,
            },
            {
              id: "hausarzt",
              text: "Hausarzt informieren: Trinkmenge + Obstipation seit 4 Tagen",
              correctQuadrant: 3,
            },
            {
              id: "bewegungsübungen",
              text: "Bewegungsübungen Knie + Sprunggelenk im Sitzen",
              correctQuadrant: 2,
            },
          ],
        },
      },
    },

    // Step 3.2 — Ethisches Dilemma Aufbau (text)
    {
      stepId: "ce02-kovac-plan-02-kompressions-dilemma-aufbau",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["§ 1901a BGB", "§ 630d BGB", "§ 630f BGB"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-plan-autonomie",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Das ethische Dilemma — bevor du handelst",
        body: "Frau Kovač lehnt die Kompressionsstrümpfe ab. Das ist ihr gutes Recht.\n\nPatientenautonomie ist ein rechtlich verankerter Grundsatz: § 630d BGB regelt, dass jede Behandlung nur mit wirksamer Einwilligung des Patienten erfolgen darf. § 1901a BGB stärkt das Selbstbestimmungsrecht. Zwang ist nicht erlaubt — auch nicht wenn du weißt, dass die Maßnahme dem Patienten nützen würde.\n\nAber: Als Pflegekraft hast du eine Aufklärungspflicht. Du musst ihr erklären, warum die Strümpfe wichtig sind — vollständig, verständlich, auf Augenhöhe. Dann entscheidet sie.\n\n**Drei Regeln:**\n1. Aufklärung ist Pflicht — du erklärst, du drängst nicht.\n2. Erzwingen ist verboten — auch bei gut gemeinter Fürsorge.\n3. Dokumentieren ist notwendig — die Entscheidung der Patientin muss im Pflegebericht stehen.\n\nQuelle: (§ 630f BGB; § 1901a BGB)",
        fallbezug:
          "Frau Kovač hat die Kompressionsstrümpfe seit 3 Wochen abgelehnt. Heute ist das Gespräch Pflicht — nicht um sie zu überreden, sondern um zu dokumentieren: Sie wurde aufgeklärt. Sie hat entschieden. Das ist ihr Recht.",
        glossarBegriffe: ["Patientenautonomie", "Aufklärungspflicht", "Verweigerung"],
      },
      contentB1: {
        title: "Darf Frau Kovač Nein sagen?",
        body: "Frau Kovač lehnt die Kompressionsstrümpfe ab. Das ist ihr Recht.\n\nWas du tun musst:\n\n**1. Aufklärung ist Pflicht.** Du erklärst ihr warum die Strümpfe wichtig sind. Klar und verständlich.\n\n**2. Erzwingen ist verboten.** Du darfst sie nicht zwingen — auch wenn du weißt, dass es ihr helfen würde.\n\n**3. Dokumentieren ist Pflicht.** Du schreibst auf: Du hast erklärt. Sie hat Nein gesagt. Das ist ihr Recht.\n\nGesetze dazu: § 630d BGB (Einwilligung), § 1901a BGB (Selbstbestimmungsrecht), § 630f BGB (Dokumentationspflicht).",
        fallbezug:
          "Frau Kovač sagt schon seit 3 Wochen Nein zu den Strümpfen. Heute erklärst du ihr nochmal warum sie wichtig sind. Und dann schreibst du auf was sie gesagt hat.",
        glossarBegriffe: ["Selbstbestimmungsrecht", "Dokumentationspflicht"],
      },
    },

    // Step 3.3 — Ethisches Dilemma Branching
    {
      stepId: "ce02-kovac-plan-03-kompressions-branching",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 1901a BGB", "§ 630d BGB", "§ 630f BGB"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-kovac-ambulant-plan-verweigerung",
      tag: "pflege",
      contentC1: {
        title: "Das Gespräch über die Kompressionsstrümpfe",
        body: "Du gehst zu Frau Kovač und sagst: \"Frau Kovač, ich möchte kurz über die Kompressionsstrümpfe sprechen. Darf ich?\" Sie antwortet:\n\n**\"Ich brauch keine Strümpfe! Die drücken nur. Ich hab doch die Tabletten.\"**\n\nDu wählst jetzt deine Reaktion. Was tust du?",
        glossarBegriffe: ["Patientenautonomie", "Aufklärungspflicht"],
      },
      contentB1: {
        title: "Frau Kovač sagt Nein",
        body: "Du sprichst Frau Kovač auf die Kompressionsstrümpfe an. Sie sagt:\n\n**\"Ich brauch keine Strümpfe! Die drücken nur. Ich hab doch die Tabletten.\"**\n\nWas machst du jetzt?",
        glossarBegriffe: ["Aufklärungspflicht"],
      },
      question: {
        fragetext: "Wähle deine Reaktion auf Frau Kovačs Ablehnung.",
        branchingOptions: [
          {
            text: "Ich erkläre ihr den Unterschied zwischen ASS und Kompressionsstrümpfen, warum beide wichtig sind — und akzeptiere dann ihre Entscheidung.",
            isCorrect: true,
            feedback:
              "Richtig. Du hast aufgeklärt (vollständig, verständlich) und respektierst dann ihre Entscheidung. Das ist der einzig korrekte Weg: Aufklärung ist Pflicht, Erzwingen ist verboten. Jetzt musst du die Verweigerung im Pflegebericht dokumentieren — vollständig: was du erklärt hast, wie sie reagiert hat, dass es ihre freiwillige Entscheidung ist.",
            feedbackB1:
              "Richtig. Du erklärst ihr warum die Strümpfe wichtig sind. Dann lässt du sie entscheiden. Das ist Aufklärung + Respekt. Danach schreibst du alles auf.",
          },
          {
            text: "Ich lasse das Thema fallen — sie wird ihre Meinung ohnehin nicht ändern.",
            isCorrect: false,
            feedback:
              "Nicht korrekt. Unterlassene Aufklärung ist ein Dokumentations- und Haftungsproblem. Wenn Frau Kovač später eine Thrombose entwickelt und die Pflegedokumentation zeigt: Strümpfe verweigert, keine Aufklärung dokumentiert — kann das rechtliche Konsequenzen haben. Aufklärung ist Pflicht, auch wenn die Entscheidung festzustehen scheint. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Nicht richtig. Du musst es ihr erklären — auch wenn sie wahrscheinlich Nein sagt. Das ist deine Pflicht. Wenn du nichts sagst, ist das ein Problem.",
          },
          {
            text: "Ich überzeuge sie mit Nachdruck — das Thromboserisiko ist zu groß, um es zu ignorieren.",
            isCorrect: false,
            feedback:
              "Nicht erlaubt. Überreden ist erlaubt — aber Druck ausüben verletzt die Patientenautonomie (§ 1901a BGB) und beschädigt das Vertrauensverhältnis. Bei Frau Kovač, die auf Respekt und Erklärungen angewiesen ist, ist Druck besonders kontraproduktiv. Der Unterschied: Aufklärung = 'Ich erkläre, warum es wichtig ist.' Druck = 'Du musst das tun.' Nur ersteres ist erlaubt. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Nicht erlaubt. Du darfst ihr erklären. Du darfst sie nicht zwingen. Wenn du Druck machst, verletzt das ihr Recht. Frau Kovač wird dann gar nicht mehr mitmachen.",
          },
        ],
      },
    },

    // Step 3.4 — Schlafberatung Sequencing
    {
      stepId: "ce02-kovac-plan-04-schlafberatung-planen",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-kovac-ambulant-plan-schlaf",
      tag: "pflege",
      contentC1: {
        title: "Schlafhygiene-Gespräch planen",
        body: "Heute Abend willst du mit Frau Kovač über den Schlaf sprechen. Du hast es ihr angekündigt. Jetzt planst du: In welcher Reihenfolge baust du das Gespräch auf? Die Reihenfolge ist entscheidend — erst zuhören, dann erklären, dann einigen.",
        glossarBegriffe: ["Schlafhygiene", "Zirkadiane Rhythmik"],
      },
      contentB1: {
        title: "Wie planst du das Schlaf-Gespräch?",
        body: "Heute Abend redest du mit Frau Kovač über den Schlaf. In welcher Reihenfolge machst du das? Ordne die Schritte.",
        glossarBegriffe: ["Schlafhygiene"],
      },
      question: {
        fragetext:
          "Bringe die 5 Schritte des Schlafhygiene-Gesprächs in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Ziehe die Karten in die richtige Reihenfolge — von Schritt 1 bis Schritt 5.",
          items: [
            {
              id: "seq-1",
              label:
                "Aktuelle Schlafgewohnheiten zusammenfassen — ohne Wertung ('Sie haben mir erzählt, dass ...')",
            },
            {
              id: "seq-2",
              label:
                "Erklären was Schlafhygiene bedeutet und warum es Frau Kovač helfen könnte (Melatonin, Blaulicht, zirkadianer Rhythmus)",
            },
            {
              id: "seq-3",
              label:
                "Konkrete Empfehlung formulieren — nicht befehlen: 'Wäre es möglich, dass ...'",
            },
            {
              id: "seq-4",
              label:
                "Frau Kovačs Reaktion abwarten — auf Bedenken eingehen, Bedürfnisse hören ('TV als Einschlaf-Hilfe')",
            },
            {
              id: "seq-5",
              label:
                "Vereinbarung treffen (oder Ablehnung akzeptieren) und im Pflegeplan notieren",
            },
          ],
        },
      },
    },

    // Step 3.5 — SMART-Ziele Fillin
    {
      stepId: "ce02-kovac-plan-05-ziele-smart",
      phase: 3,
      stepType: "fillin",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB", "DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-kovac-ambulant-plan-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele SMART formulieren",
        body: "Gute Pflegeziele sind SMART: **S**pezifisch (Was genau?), **M**essbar (Wie erkenne ich es?), **A**kzeptiert (Hat Frau Kovač zugestimmt?), **R**ealistisch (Erreichbar?), **T**erminiert (Bis wann?). Vervollständige die Pflegeziele.",
        glossarBegriffe: ["SMART-Ziel", "Pflegeplanung"],
      },
      contentB1: {
        title: "Pflegeziele formulieren",
        body: "Ein Pflegeziel muss genau, messbar und realistisch sein. Es muss auch einen Termin haben. Vervollständige die Sätze.",
        glossarBegriffe: ["Pflegeziel"],
      },
      question: {
        fragetext: "Vervollständige die beiden Pflegeziele für Frau Kovač.",
        fillin: {
          sentence:
            "Pflegeziel 1: Frau Kovač trinkt bis [BLANK_1] täglich mindestens [BLANK_2] ml Flüssigkeit, nachgewiesen durch das Trinkprotokoll. // Pflegeziel 2: Frau Kovač führt die Knie-Bewegungsübungen [BLANK_3] täglich selbstständig durch, mindestens [BLANK_4] Wiederholungen pro Seite.",
          options: [
            "in 3 Tagen",
            "1.200 ml",
            "1× (einmal)",
            "5 Wiederholungen",
            "sofort",
            "1.800 ml",
            "3×",
            "10 Wiederholungen",
          ],
          correctIndex: 0,
        },
      },
      wusstestDuDas:
        "Das 'A' in SMART steht für 'Akzeptiert' — Frau Kovač muss dem Ziel zustimmen. Ein Ziel das du für sie festlegst ohne ihre Zustimmung ist kein SMART-Ziel, sondern eine Vorgabe.",
    },
  ],
  optionaleSteps: [
    // Opt-3.A — Rechtliche Grundlage einfach (B1)
    {
      stepId: "ce02-kovac-plan-opt-a-rechtlich-b1",
      phase: 3,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "V.1",
      quellen: ["§ 630d BGB", "§ 1901a BGB"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "§ 630d BGB — was steht da?",
        body: "§ 630d BGB regelt die Einwilligung nach Aufklärung:\n\n_\"Vor Durchführung einer medizinischen Maßnahme ist eine Einwilligung des Patienten erforderlich. Soweit nicht ein anderer Aufklärungspflichtige ist, hat der Behandelnde den Patienten in verständlicher Weise aufzuklären.\"_\n\nWas das für die Pflege bedeutet: Keine Maßnahme ohne Einwilligung — auch Kompressionsstrümpfe anlegen ohne Einwilligung wäre ein Eingriff in die körperliche Unversehrtheit.",
        glossarBegriffe: ["Einwilligung", "Aufklärungspflicht"],
      },
      contentB1: {
        title: "Was sagt das Gesetz?",
        body: "§ 630d BGB sagt:\n\n_\"Für jede Behandlung braucht man die Einwilligung (= das Ja) des Patienten. Vorher muss man ihn verständlich aufklären (= erklären).\"_\n\nWas das bedeutet: Du darfst Frau Kovač keine Kompressionsstrümpfe anziehen, wenn sie Nein sagt. Zuerst erklären. Dann entscheidet sie.",
        glossarBegriffe: ["Einwilligung"],
      },
    },
    // Opt-3.B — Vergleich ASS vs. Kompression
    {
      stepId: "ce02-kovac-plan-opt-b-ass-vs-kompression",
      phase: 3,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023", "DNQP Kontinenzförderung 2014"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "krankheitslehre",
      contentC1: {
        title: "ASS und Kompressionsstrümpfe — was wirkt wie?",
        body: "Frau Kovač sagt: 'Ich hab doch die Tabletten.' Sie meint ASS 100 mg. Verstehe den Unterschied.",
        glossarBegriffe: [
          "ASS",
          "Thrombozytenaggregationshemmung",
          "Venöse Stase",
          "Kompressionstherapie",
        ],
      },
      contentB1: {
        title: "Tabletten und Strümpfe — was macht was?",
        body: "Frau Kovač denkt: Die Tablette reicht. Stimmt das? Vergleiche.",
        glossarBegriffe: ["ASS", "Thrombose", "Kompressionsstrümpfe"],
      },
      question: {
        fragetext: "Vergleiche die Wirkungsweise von ASS und Kompressionstherapie.",
        comparison: {
          instruction:
            "Vergleiche die beiden Maßnahmen — und erkläre Frau Kovač am Ende warum beide sinnvoll sind.",
          columns: [
            { label: "ASS 100 mg täglich" },
            { label: "Kompressionsstrümpfe" },
          ],
          rows: [
            {
              criterion: "Wirkt auf",
              values: [
                "Thrombozyten (Blutplättchen) — hemmt Blutverklumpung in Arterien",
                "Venöse Stase — drückt Blut in den Beinen zurück Richtung Herz (mechanisch)",
              ],
              valuesB1: [
                "Blutplättchen in Arterien (zum Beispiel beim Herzinfarkt wichtig)",
                "Blut in den Beinvenen — drückt es nach oben",
              ],
            },
            {
              criterion: "Tiefe Venenthrombose (TVT)",
              values: [
                "Kaum wirksam — TVT entsteht durch Stase + Gerinnung in Venen, nicht durch Thrombozyten",
                "Wirksam — reduziert Stase direkt",
              ],
              valuesB1: [
                "Schützt NICHT gut gegen Thrombose in den Beinvenen",
                "Schützt GUT gegen Thrombose — durch mechanischen Druck",
              ],
              highlight: 1,
            },
            {
              criterion: "Ergänzen sich?",
              values: [
                "Ja — ASS schützt arteriell (Herzinfarkt-Prophylaxe), Kompression schützt venös (TVT-Prophylaxe)",
                "Ja — sie wirken auf verschiedene Mechanismen",
              ],
              valuesB1: [
                "Ja — die Tablette und die Strümpfe schützen vor verschiedenen Dingen",
                "Ja — beide zusammen schützen am besten",
              ],
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 25,
};
