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
              text: "Trinkprotokoll-Ziel für heute vereinbaren (Beratung)",
              correctQuadrant: 1,
            },
            {
              id: "kompressions-gespraech",
              text: "Gespräch über Kompressionsstrümpfe führen + dokumentieren (Aufklärung)",
              correctQuadrant: 1,
            },
            {
              id: "hausarzt",
              text: "Hausarzt im Wochenverlauf informieren: Trinkmenge gering + Obstipation Tag 4 (nicht-akut bei beschwerdefreier Frau Kovač — bei Bauchschmerz/Erbrechen sofort eskalieren)",
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
            text: "Ich erkläre den Unterschied zwischen ASS und Kompressionsstrümpfen, frage konkret nach dem Grund der Ablehnung (Druck? Anziehen? Hitze?), biete Alternativen an (Klasse 1 statt Klasse 2, Anziehhilfe, Hauttest) — und akzeptiere dann ihre Entscheidung.",
            isCorrect: true,
            feedback:
              "Richtig. Vollständige Aufklärung heißt: erklären (Wirkung), nachfragen (konkretes Hindernis), Alternativen anbieten (oft ist das Problem lösbar), Entscheidung respektieren.\n\n**Konkrete Alternativen die du anbieten kannst:**\n- **Klasse 1** (leichterer Druck) statt Klasse 2 — bei NYHA II + Beinödemen oft ausreichend, Tragekomfort deutlich besser. Erfordert ärztliche Verordnung.\n- **Anziehhilfe** (Gleitstrumpf, Schlaufengriff) — viele Patient:innen lehnen ab, weil sie das Anziehen nicht schaffen.\n- **Hauttest** — wenn 'die drücken' = Hautirritation, kann eine andere Materialqualität helfen.\n- **Tragezeit anpassen** — z.B. nur tagsüber, nicht beim Schlafen.\n\n**Frau Kovačs Reaktion:** Sie hört zu, mit verschränkten Armen. Nach deiner Erklärung sagt sie: \"Hmm. ASS ist also nicht dasselbe. Das hat mir keiner so erklärt. Klasse 1 — das hab ich noch nie probiert. Trotzdem, heute will ich keine. Aber dass Sie mir das so sagen, das ist anders. Schreiben Sie's halt auf.\" — Vertrauen bleibt, Autonomie respektiert, Aufklärung dokumentiert. Ein Spalt für eine spätere Lösung ist offen.\n\nJetzt musst du die Verweigerung im Pflegebericht dokumentieren — vollständig: was du erklärt hast, welche Alternativen du angeboten hast, wie sie reagiert hat, dass es ihre freiwillige Entscheidung ist. Quelle: (§ 630f BGB; § 1901a BGB; AWMF S3-Leitlinie Thromboseprophylaxe 003-001)",
            feedbackB1:
              "Richtig. Aufklärung ist mehr als nur erklären — du **fragst nach** warum sie ablehnt (Druck? Anziehen? Hitze?) und **bietest Alternativen** an:\n- Klasse 1 (leichter) statt Klasse 2\n- Anziehhilfe (Gleitstrumpf)\n- Andere Materialqualität (wenn die Haut juckt)\n- Nur tagsüber tragen, nicht nachts\n\n**Frau Kovač sagt:** \"Hmm. ASS und Strümpfe sind nicht dasselbe. Klasse 1 — das wusste ich nicht. Heute will ich trotzdem keine. Aber Sie reden mit mir, das ist anders. Schreiben Sie es auf.\"\n\nDann schreibst du alles auf — auch welche Alternativen du angeboten hast.",
          },
          {
            text: "Ich lasse das Thema fallen — sie wird ihre Meinung ohnehin nicht ändern.",
            isCorrect: false,
            feedback:
              "Nicht korrekt. Unterlassene Aufklärung ist ein Dokumentations- und Haftungsproblem.\n\n**Frau Kovačs Reaktion:** Sie merkt, dass du das Thema umgehst. \"Sind Sie fertig? Dann können Sie ja gehen.\" — Misstrauen wächst (du hast offensichtlich etwas, was du ihr nicht sagst), und du hast keine Aufklärung dokumentiert. Wenn Frau Kovač später eine Thrombose entwickelt und die Pflegedokumentation zeigt: Strümpfe verweigert, keine Aufklärung dokumentiert — kann das rechtliche Konsequenzen haben (§ 630f BGB Verletzung).\n\nAufklärung ist Pflicht, auch wenn die Entscheidung festzustehen scheint. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Nicht richtig. Du musst es ihr erklären — auch wenn sie wahrscheinlich Nein sagt.\n\n**Frau Kovač merkt das:** \"Sind Sie fertig? Dann gehen Sie.\" — Sie verliert Vertrauen. Und juristisch hast du nichts dokumentiert. Das ist ein Problem.\n\nGeh zurück zu Pfad A.",
          },
          {
            text: "Ich überzeuge sie mit Nachdruck — das Thromboserisiko ist zu groß, um es zu ignorieren.",
            isCorrect: false,
            feedback:
              "Nicht erlaubt. Überreden ist erlaubt — aber Druck ausüben verletzt die Patientenautonomie (§ 1901a BGB) und beschädigt das Vertrauensverhältnis.\n\n**Frau Kovačs Reaktion:** Sie wird sehr still. Dann, scharf: \"Dann gehen Sie. Ich will Sie nicht in meiner Wohnung. Ich rufe beim Pflegedienst an.\" — Du hast den Auftrag verloren, der Pflegedienst hat eine formale Beschwerde, und Frau Kovač wird auch andere Pflegekräfte mit Misstrauen begegnen.\n\nDer Unterschied: Aufklärung = 'Ich erkläre, warum es wichtig ist.' Druck = 'Du musst das tun.' Nur ersteres ist erlaubt. In ihrer Wohnung gilt ihre Regel — du bist Gast mit Auftrag, kein Befehlshaber. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Nicht erlaubt. Du darfst ihr erklären. Du darfst sie nicht zwingen.\n\n**Frau Kovač wird wütend:** \"Dann gehen Sie. Ich will Sie nicht in meiner Wohnung. Ich rufe den Pflegedienst an.\" — Du hast das Vertrauen verloren. Und der Pflegedienst hat eine Beschwerde.\n\nIn ihrer Wohnung gilt ihre Regel. Geh zurück zu Pfad A.",
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
        body: "Gute Pflegeziele sind SMART: **S**pezifisch (Was genau?), **M**essbar (Wie erkenne ich es?), **A**kzeptiert (Hat Frau Kovač zugestimmt?), **R**ealistisch (Erreichbar?), **T**erminiert (Bis wann?). Vervollständige die Pflegeziele.\n\n**Trinkmengen-Ziel:** 1.200 ml ist der **ärztlich vereinbarte Tageszielwert** für Frau Kovač (Hausarzt-Festlegung wegen NYHA II + Furosemid laut ESC Heart Failure 2023) — gilt als Obergrenze, an die man sich schrittweise herantastet. NICHT 1.500 ml (das ist die DNQP-Empfehlung für Gesunde).\n\n**Bewegungsziel:** DNQP Mobilität (2017/2024) empfiehlt bei Kontrakturgefahr **mehrfach tägliche** Bewegung — mindestens 2-3× täglich. Ein 1×-tägliches Ziel wäre Sub-Standard.",
        glossarBegriffe: ["SMART-Ziel", "Pflegeplanung"],
      },
      contentB1: {
        title: "Pflegeziele formulieren",
        body: "Ein Pflegeziel muss genau, messbar und realistisch sein. Es muss auch einen Termin haben.\n\nWichtig:\n- **Trinken:** 1.200 ml pro Tag (vom Hausarzt für Frau Kovač festgelegt — wegen Herz-Schwäche und Furosemid).\n- **Bewegung:** Bei Kontraktur **mehrmals am Tag** üben — nicht nur einmal. Sonst bleibt das Knie steif (DNQP Mobilität 2017/2024).",
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
            "2× (zweimal)",
            "10 Wiederholungen",
            "sofort",
            "1.800 ml",
            "1×",
            "5 Wiederholungen",
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

    // Opt-3.C — Angehörigen-Einbindung als RESSOURCE (NEU — nicht nur als Datenschutz-Abwehr)
    {
      stepId: "ce02-kovac-plan-opt-c-angehoerige-ressource",
      phase: 3,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [
        "SGB XI § 45a (Entlastungsbetrag)",
        "SGB XI § 45 (Pflegekurse für Angehörige)",
        "DSGVO Art. 9 + § 203 StGB (Schweigepflicht)",
      ],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Sohn Darko — Risiko ODER Ressource?",
        body: "In Phase 4 wird Darkos Anruf zum **Datenschutz-Risiko**. Aber das ist nur eine Seite. Bei vielen Patient:innen sind Angehörige die wichtigste Ressource — und Pflege heißt: Angehörige aktiv einbinden, nicht nur abwehren.\n\n**Was Darko (mit Frau Kovačs Einwilligung) leisten könnte:**\n\n1. **Informations-Knoten:** Mit schriftlicher Schweigepflichtsentbindung (im Pflegedienst hinterlegt) kann Darko regelmäßig informiert werden — z.B. wöchentlicher Anruf vom Pflegedienst. Das entlastet Frau Kovač davon, alles selbst weitergeben zu müssen.\n\n2. **Beobachter aus der Ferne:** Darko kennt seine Mutter. Bei seinen 2 Telefonaten/Woche merkt er Veränderungen, die du beim 30-Min-Besuch nicht siehst (\"Sie klang heute anders\"). Wenn er das melden kann (mit Einwilligung) — wertvoller Frühindikator.\n\n3. **Entlastungsbetrag § 45a SGB XI:** 125 €/Monat können auch für eine Nachbarin oder einen Besuchsdienst eingesetzt werden — Darko könnte das aus Split organisieren (z.B. eine kroatische Bekannte aus der Gemeinde). Pflege-Beratung gehört zu deiner Aufgabe.\n\n4. **Pflegekurse § 45 SGB XI:** Wenn Darko für 2 Wochen kommt, hat er Anspruch auf einen kostenlosen Pflegekurs — er lernt Lippenbremse, Lagerung, Sturzprophylaxe. Das stärkt ihn als Angehörigen, statt ihn nur als Anrufer auf Distanz zu sehen.\n\n5. **Verhinderungspflege § 39 SGB XI:** 1.612 €/Jahr — wenn Darko aus Split kommt und 2 Wochen pflegt, kann er das beanspruchen. Auch das ist Beratungsthema.\n\n**Frau Kovačs Lebensgeschichte:**\nIhr Mann Josip ist tot. Darko ist 1.500 km weg. Sie ist eine Frau die Eigensinn als Schutz erlebt — aber sie ist nicht 'einsam aus Wahl', sondern aus Strukturen. Eine kluge Pflegeberatung sieht Darko nicht als 'Datenschutz-Problem', sondern als **wichtigste lebende Bezugsperson**, die du einbinden kannst — sobald die Einwilligung schriftlich dokumentiert ist.\n\n**Konkrete Aufgabe für die nächste Woche:**\nFrau Kovač fragen, ob sie eine Schweigepflichtsentbindung für Darko unterschreiben möchte (Formular aus dem Pflegedienst). Sie entscheidet — du **machst das Angebot**. Quelle: (SGB XI §§ 39, 45, 45a; DSGVO Art. 9)",
        fallbezug:
          "Darko wird in Phase 4 durch DSGVO als Hindernis erlebt. Hier denkst du um: Wenn Frau Kovač zustimmt, ist er die wichtigste außenstehende Beobachter:in für sie. Der Anruf 2×/Woche ist Ressource, nicht Lärm.",
        glossarBegriffe: [
          "Schweigepflichtsentbindung",
          "Pflegekurse",
          "Verhinderungspflege",
          "Entlastungsbetrag",
          "Angehörigenarbeit",
        ],
      },
      contentB1: {
        title: "Sohn Darko: Hindernis oder Hilfe?",
        body: "Darko ruft an — und am Telefon darfst du nichts sagen (Datenschutz). Aber: **Darko ist nicht das Problem. Darko kann eine große Hilfe sein.**\n\nWas Darko machen könnte (wenn Frau Kovač **schriftlich erlaubt**):\n\n1. **Regelmäßige Informationen:** Der Pflegedienst kann ihn 1× pro Woche anrufen. Mit Erlaubnis von Frau Kovač.\n\n2. **Er kennt seine Mutter:** Wenn er telefoniert, hört er Veränderungen die du beim Besuch nicht siehst.\n\n3. **Geld vom Staat (§ 45a SGB XI):** 125 € pro Monat für Hilfe (z.B. eine Nachbarin). Darko kann das aus Kroatien organisieren.\n\n4. **Pflegekurs (§ 45 SGB XI):** Wenn Darko aus Kroatien kommt — er kann **kostenlos** lernen wie er pflegt (Lippenbremse, Lagerung). Das macht ihn stärker.\n\n5. **Verhinderungspflege (§ 39 SGB XI):** Wenn Darko 2 Wochen kommt und pflegt — der Staat zahlt bis 1.612 € pro Jahr.\n\n**Deine Aufgabe nächste Woche:**\nFrau Kovač fragen: Möchtest du, dass Darko regelmäßig vom Pflegedienst informiert wird? Es gibt ein Formular. Sie entscheidet. Du machst das Angebot.\n\n**Wichtig:** Darko ist 1.500 km weg. Aber er ist Frau Kovačs wichtigster Mensch. Ihn klug einzubinden ist Pflege.",
        glossarBegriffe: [
          "Schweigepflichtsentbindung",
          "Pflegekurs",
          "Angehörigenarbeit",
        ],
      },
      wusstestDuDas:
        "Pflegekurse für Angehörige sind nach § 45 SGB XI kostenlos. Verhinderungspflege § 39 zahlt bis 1.612 €/Jahr für Vertretung. Für Migrant:innen-Familien wie Kovač oft entscheidend — der Sohn aus dem Ausland kann dann legal und finanziert pflegen.",
    },
  ],
  geschaetzteDauer: 25,
};
