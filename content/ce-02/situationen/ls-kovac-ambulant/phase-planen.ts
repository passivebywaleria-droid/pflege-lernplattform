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
              id: "kompressions-gespräch",
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
      quellen: ["§ 1827 BGB", "§ 630d BGB", "§ 630f BGB"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-plan-autonomie",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Das ethische Dilemma — bevor du handelst",
        body: "Frau Kovač lehnt die Kompressionsstrümpfe ab. Das ist ihr gutes Recht.\n\nPatientenautonomie ist ein rechtlich verankerter Grundsatz: § 630d BGB regelt, dass jede Behandlung nur mit wirksamer Einwilligung des Patienten erfolgen darf. § 1827 BGB stärkt das Selbstbestimmungsrecht. Zwang ist nicht erlaubt — auch nicht wenn du weißt, dass die Maßnahme dem Patienten nützen würde.\n\nAber: Als Pflegekraft hast du eine Aufklärungspflicht. Du musst ihr erklären, warum die Strümpfe wichtig sind — vollständig, verständlich, auf Augenhöhe. Dann entscheidet sie.\n\n**Drei Regeln:**\n1. Aufklärung ist Pflicht — du erklärst, du drängst nicht.\n2. Erzwingen ist verboten — auch bei gut gemeinter Fürsorge.\n3. Dokumentieren ist notwendig — die Entscheidung der Patientin muss im Pflegebericht stehen.\n\nQuelle: (§ 630f BGB; § 1827 BGB)",
        fallbezug:
          "Frau Kovač hat die Kompressionsstrümpfe seit 3 Wochen abgelehnt. Heute ist das Gespräch Pflicht — nicht um sie zu überreden, sondern um zu dokumentieren: Sie wurde aufgeklärt. Sie hat entschieden. Das ist ihr Recht.",
        glossarBegriffe: ["Patientenautonomie", "Aufklärungspflicht", "Verweigerung", "Pflegebericht", "Würde", "Kompressionsstrümpfe", "Einwilligung", "§ 630f BGB", "Maßnahme", "Aufklärung"],
      },
      contentB1: {
        title: "Darf Frau Kovač Nein sagen?",
        body: "Frau Kovač lehnt die Kompressionsstrümpfe ab. Das ist ihr Recht.\n\nWas du tun musst:\n\n**1. Aufklärung ist Pflicht.** Du erklärst ihr warum die Strümpfe wichtig sind. Klar und verständlich.\n\n**2. Erzwingen ist verboten.** Du darfst sie nicht zwingen — auch wenn du weißt, dass es ihr helfen würde.\n\n**3. Dokumentieren ist Pflicht.** Du schreibst auf: Du hast erklärt. Sie hat Nein gesagt. Das ist ihr Recht.\n\nGesetze dazu: § 630d BGB (Einwilligung), § 1827 BGB (Selbstbestimmungsrecht), § 630f BGB (Dokumentationspflicht).",
        fallbezug:
          "Frau Kovač sagt schon seit 3 Wochen Nein zu den Strümpfen. Heute erklärst du ihr nochmal warum sie wichtig sind. Und dann schreibst du auf was sie gesagt hat.",
        glossarBegriffe: ["Selbstbestimmungsrecht", "Dokumentationspflicht", "Pflegebericht", "Würde", "Kompressionsstrümpfe", "Einwilligung", "§ 630f BGB", "Maßnahme", "Aufklärung"],
      },
    },

    // Inline-Wissen: ASS — VOR Step 3.3 (Branching erklärt ASS vs. Kompression)
    {
      stepId: "ce02-kovac-plan-iw-ass",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Mutschler Arzneimittelwirkungen 11. Aufl. 2020",
        "AWMF S3-Leitlinie Thromboseprophylaxe 003-001 2015",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-plan-ass",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist ASS — und was kann es nicht?",
        body: "",
        glossarBegriffe: ["ASS"],
      },
      contentB1: {
        title: "Was ist ASS (Aspirin)?",
        body: "",
        glossarBegriffe: ["ASS"],
      },
      inlineWissen: {
        bausteinRef: "ass-thrombozytenaggregation",
        storyAufhaenger:
          "Frau Kovač sagt gleich: \"Ich brauch keine Strümpfe — ich hab doch die Tabletten.\" Sie meint ASS 100 mg. Bevor du das Gespräch führst, musst du verstehen: Was macht ASS tatsächlich — und wo liegt die Verwechslung?",
        storyAufhaengerB1:
          "Frau Kovač denkt: Die Tablette schützt mich schon. Sie meint ASS (Aspirin). Aber stimmt das? Was macht ASS wirklich — und wogegen schützt es nicht?",
        kerntext:
          "**ASS** (Acetylsalicylsäure, bekannt als Aspirin) in der Dosis 100 mg/Tag hemmt die **Thrombozytenaggregation** — das Verklumpen der Blutplättchen. Das schützt vor **arteriellen** Thrombosen: Herzinfarkt, Schlaganfall.\n\nAber: **Tiefe Venenthrombosen (TVT)** entstehen durch einen anderen Mechanismus — venöse Stase (Blutstau) + Aktivierung der plasmatischen Gerinnung (Virchow-Trias). Auf diesen Weg hat ASS **kaum Einfluss**. Deshalb schützt ASS nicht ausreichend vor TVT.\n\n**Kompressionsstrümpfe** wirken mechanisch: Sie drücken die Venen zusammen, beschleunigen den Blutrückfluss und reduzieren die Stase — direkt auf den Entstehungsmechanismus der TVT.\n\nASS und Kompression sind keine Alternativen — sie wirken auf **verschiedene Systeme** und ergänzen sich.\n\nQuelle: (Mutschler 2020; AWMF S3 Thromboseprophylaxe 2015)",
        kerntextB1:
          "**ASS** (Aspirin) ist ein Medikament. In der kleinen Dosis (100 mg/Tag) verhindert es, dass Blutplättchen verklumpen. Das schützt vor **Herzinfarkt und Schlaganfall** (das passiert in den Arterien).\n\nAber: **Thrombosen in den Beinvenen** entstehen anders — durch langsamen Blutfluss in den Venen. Dagegen hilft ASS **kaum**.\n\n**Kompressionsstrümpfe** drücken die Beinvenen zusammen und helfen dem Blut, schneller nach oben zu fließen. Das schützt gegen Venenthrombose.\n\nASS und Strümpfe sind **kein Ersatz** füreinander. Sie schützen vor verschiedenen Dingen.",
        faustregel:
          "ASS = Arterienschutz (Herzinfarkt/Schlaganfall). Kompression = Venenschutz (TVT). Beides zusammen, nicht entweder-oder.",
        faustregelB1:
          "ASS schützt die Arterien (Herz, Hirn). Kompressionsstrümpfe schützen die Venen (Beine). Beides ist wichtig — nicht nur eines.",
        karteikarte: {
          vorderseite: "Frau Kovač sagt: \"Ich brauch keine Strümpfe, ich hab doch ASS.\" Was antwortest du — fachlich begründet?",
          rueckseite: "ASS hemmt Thrombozytenaggregation → schützt vor arterieller Thrombose (Herzinfarkt, Schlaganfall). TVT entsteht durch venöse Stase + plasmatische Gerinnung (Virchow-Trias) → ASS kaum wirksam. Kompression reduziert Stase mechanisch → wirkt direkt auf TVT-Risiko. Beide Maßnahmen ergänzen sich, ersetzen sich nicht. Quelle: Mutschler 2020, AWMF S3 Thromboseprophylaxe 2015.",
          vorderseiteB1: "Frau Kovač glaubt, ASS ersetzt die Kompressionsstrümpfe. Was ist falsch an dieser Annahme?",
          rueckseiteB1: "ASS schützt vor Herzinfarkt und Schlaganfall (Arterien). Kompressionsstrümpfe schützen vor Thrombose in den Beinvenen. ASS hilft nicht gegen Venenthrombose. Beides zusammen ist am besten.",
        },
      },
    },

    // Step 3.3 — Ethisches Dilemma Branching
    {
      stepId: "ce02-kovac-plan-03-kompressions-branching",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 1827 BGB", "§ 630d BGB", "§ 630f BGB"],
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
              "Richtig. Vollständige Aufklärung heißt: erklären (Wirkung), nachfragen (konkretes Hindernis), Alternativen anbieten (oft ist das Problem lösbar), Entscheidung respektieren.\n\n**Konkrete Alternativen die du anbieten kannst:**\n- **Klasse 1** (leichterer Druck) statt Klasse 2 — bei NYHA II + Beinödemen oft ausreichend, Tragekomfort deutlich besser. Erfordert ärztliche Verordnung.\n- **Anziehhilfe** (Gleitstrumpf, Schlaufengriff) — viele Patient:innen lehnen ab, weil sie das Anziehen nicht schaffen.\n- **Hauttest** — wenn 'die drücken' = Hautirritation, kann eine andere Materialqualität helfen.\n- **Tragezeit anpassen** — z.B. nur tagsüber, nicht beim Schlafen.\n\n**Frau Kovačs Reaktion:** Sie hört zu, mit verschränkten Armen. Nach deiner Erklärung sagt sie: \"Hmm. ASS ist also nicht dasselbe. Das hat mir keiner so erklärt. Klasse 1 — das hab ich noch nie probiert. Trotzdem, heute will ich keine. Aber dass Sie mir das so sagen, das ist anders. Schreiben Sie's halt auf.\" — Vertrauen bleibt, Autonomie respektiert, Aufklärung dokumentiert. Ein Spalt für eine spätere Lösung ist offen.\n\nJetzt musst du die Verweigerung im Pflegebericht dokumentieren — vollständig: was du erklärt hast, welche Alternativen du angeboten hast, wie sie reagiert hat, dass es ihre freiwillige Entscheidung ist. Quelle: (§ 630f BGB; § 1827 BGB; AWMF S3-Leitlinie Thromboseprophylaxe 003-001)",
            feedbackB1:
              "Richtig. Aufklärung ist mehr als nur erklären — du **fragst nach** warum sie ablehnt (Druck? Anziehen? Hitze?) und **bietest Alternativen** an:\n- Klasse 1 (leichter) statt Klasse 2\n- Anziehhilfe (Gleitstrumpf)\n- Andere Materialqualität (wenn die Haut juckt)\n- Nur tagsüber tragen, nicht nachts\n\n**Frau Kovač sagt:** \"Hmm. ASS und Strümpfe sind nicht dasselbe. Klasse 1 — das wusste ich nicht. Heute will ich trotzdem keine. Aber Sie reden mit mir, das ist anders. Schreiben Sie es auf.\"\n\nDann schreibst du alles auf — auch welche Alternativen du angeboten hast.",
          },
          {
            text: "Ich lasse das Thema fallen — sie wird ihre Meinung ohnehin nicht ändern.",
            isCorrect: false,
            feedback:
              "Nicht korrekt. Unterlassene Aufklärung ist ein Dokumentations- und Haftungsproblem.\n\n**Frau Kovačs Reaktion:** Sie merkt, dass du das Thema umgehst. \"Sind Sie fertig? Dann können Sie ja gehen.\" — Misstraün wächst (du hast offensichtlich etwas, was du ihr nicht sagst), und du hast keine Aufklärung dokumentiert. Wenn Frau Kovač später eine Thrombose entwickelt und die Pflegedokumentation zeigt: Strümpfe verweigert, keine Aufklärung dokumentiert — kann das rechtliche Konsequnzen haben (§ 630f BGB Verletzung).\n\nAufklärung ist Pflicht, auch wenn die Entscheidung festzustehen scheint. Geh zurück und wähle Pfad A.",
            feedbackB1:
              "Du erkennst, dass Frau Kovač ihre Meinung wahrscheinlich nicht ändert — gute Beobachtung. **Stattdessen** musst du **trotzdem** aufklären, **weil** § 630f BGB die Aufklärung zur Pflicht macht — auch bei zu erwartendem Nein.\n\n**Frau Kovač merkt das:** \"Sind Sie fertig? Dann gehen Sie.\" — Sie verliert Vertrauen. Und juristisch hast du nichts dokumentiert.\n\n**Stattdessen** richtig: Pfad A — vollständig aufklären, dann Verweigerung dokumentieren.",
          },
          {
            text: "Ich überzeuge sie mit Nachdruck — das Thromboserisiko ist zu groß, um es zu ignorieren.",
            isCorrect: false,
            feedback:
              "Nicht erlaubt. Überreden ist erlaubt — aber Druck ausüben verletzt die Patientenautonomie (§ 1827 BGB) und beschädigt das Vertrauensverhältnis.\n\n**Frau Kovačs Reaktion:** Sie wird sehr still. Dann, scharf: \"Dann gehen Sie. Ich will Sie nicht in meiner Wohnung. Ich rufe beim Pflegedienst an.\" — Du hast den Auftrag verloren, der Pflegedienst hat eine formale Beschwerde, und Frau Kovač wird auch andere Pflegekräfte mit Misstraün begegnen.\n\nDer Unterschied: Aufklärung = 'Ich erkläre, warum es wichtig ist.' Druck = 'Du musst das tun.' Nur ersteres ist erlaubt. In ihrer Wohnung gilt ihre Regel — du bist Gast mit Auftrag, kein Befehlshaber. Geh zurück und wähle Pfad A.",
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
      quellen: ["DGSM S3-Leitlinie Insomnie 2017"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-kovac-ambulant-plan-schlaf",
      tag: "pflege",
      contentC1: {
        title: "Schlafhygiene-Gespräch planen",
        body: "Heute Abend willst du mit Frau Kovač über den Schlaf sprechen. Du hast es ihr angekündigt. Jetzt planst du den Gesprächs-Aufbau.\n\n**Schlafhygiene** = die Verhaltensweisen und Umgebungsfaktoren, die guten Schlaf fördern (z.B. feste Schlafenszeiten, dunkles Zimmer, kein Bildschirm vor dem Schlafen).\n\n**Insomnie** = eine Schlafstörung mit verlängerter Einschlafdauer (>30 Min), nächtlichem Erwachen oder zu frühem Aufwachen, die mindestens 3 Nächte/Woche über mindestens 3 Monate auftritt (Kriterien nach ICSD-3 / DGSM S3-Leitlinie 2017).\n\nBringe die fünf Bausteine des Beratungsgesprächs in eine pflegerisch sinnvolle Reihenfolge.",
        glossarBegriffe: ["Schlafhygiene", "Zirkadiane Rhythmik", "Insomnie"],
      },
      contentB1: {
        title: "Wie planst du das Schlaf-Gespräch?",
        body: "Heute Abend redest du mit Frau Kovač über den Schlaf.\n\n**Schlafhygiene** = alles, was guten Schlaf möglich macht. Zum Beispiel: feste Schlafzeiten, dunkles Zimmer, kein Fernseher kurz vor dem Schlaf.\n\n**Insomnie** = eine Schlafstörung. Du brauchst lange zum Einschlafen (mehr als 30 Minuten) oder wachst nachts oft auf — mindestens 3 Nächte pro Woche, mindestens 3 Monate lang.\n\nBringe die fünf Bausteine des Gesprächs in eine sinnvolle Reihenfolge.",
        glossarBegriffe: ["Schlafhygiene", "Insomnie"],
      },
      question: {
        fragetext:
          "Bringe die 5 Bausteine des Schlafhygiene-Gesprächs in eine pflegerisch sinnvolle Reihenfolge.",
        sequencing: {
          instruction:
            "Ziehe die Karten in eine sinnvolle Reihenfolge — die 5 Bausteine eines guten Beratungsgesprächs.",
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
                "Frau Kovačs Reaktion aufnehmen — auf Bedenken eingehen, Bedürfnisse hören ('TV als Einschlaf-Hilfe')",
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
      quellen: ["§ 630f BGB", "Fiechter/Meier 1981"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-kovac-ambulant-plan-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele SMART formulieren",
        body: "**SMART** = Akronym für die fünf Qualitätskriterien guter Pflegeziele: **S**pezifisch (Was genau?), **M**essbar (Wie erkenne ich es?), **A**kzeptiert (Hat Frau Kovač zugestimmt?), **R**ealistisch (Erreichbar?), **T**erminiert (Bis wann?).\n\n**DNQP** = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege (gibt nationale Pflege-Standards heraus).\n\n**Kontraktur** = dauerhafte Bewegungseinschränkung eines Gelenks durch Verkürzung von Muskeln, Sehnen oder Kapseln.\n\nVervollständige die Pflegeziele.\n\n**Trinkmengen-Ziel:** 1.200 ml ist der **ärztlich vereinbarte Tageszielwert** für Frau Kovač (Hausarzt-Festlegung wegen NYHA II + Furosemid laut ESC Heart Failure 2023) — gilt als Obergrenze, an die man sich schrittweise herantastet. NICHT 1.500 ml (das ist die allgemeine DNQP-Empfehlung für Gesunde).\n\n**Bewegungsziel:** Der DNQP-Standard Mobilität (2017/2024) empfiehlt bei Kontrakturgefahr **mehrfach tägliche** Bewegung — mindestens 2-3× täglich. Ein 1×-tägliches Ziel wäre Sub-Standard.",
        glossarBegriffe: ["SMART", "SMART-Ziel", "Pflegeplanung", "DNQP", "Kontraktur"],
      },
      contentB1: {
        title: "Pflegeziele formulieren",
        body: "**SMART** = ein Wort aus 5 Buchstaben für gute Pflege-Ziele:\n- **S**pezifisch — was genau?\n- **M**essbar — wie erkenne ich es?\n- **A**kzeptiert — sagt Frau Kovač Ja?\n- **R**ealistisch — schaffbar?\n- **T**erminiert — bis wann?\n\n**DNQP** = ein deutsches Netzwerk für Pflege-Standards.\n\n**Kontraktur** = ein Gelenk wird steif, weil Muskeln oder Sehnen kurz geworden sind.\n\nWichtig:\n- **Trinken:** 1.200 ml pro Tag (vom Hausarzt für Frau Kovač festgelegt — wegen Herz-Schwäche und Furosemid).\n- **Bewegung:** Bei Kontraktur **mehrmals am Tag** üben — nicht nur einmal. Sonst bleibt das Knie steif (Standard DNQP Mobilität 2017/2024).",
        glossarBegriffe: ["Pflegeziel", "SMART", "DNQP", "Kontraktur"],
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
      quellen: ["§ 630d BGB", "§ 1827 BGB"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "§ 630d BGB — was steht da?",
        body: "§ 630d BGB regelt die Einwilligung nach Aufklärung:\n\n_\"Vor Durchführung einer medizinischen Maßnahme ist eine Einwilligung des Patienten erforderlich. Soweit nicht ein anderer Aufklärungspflichtige ist, hat der Behandelnde den Patienten in verständlicher Weise aufzuklären.\"_\n\nWas das für die Pflege bedeutet: Keine Maßnahme ohne Einwilligung — auch Kompressionsstrümpfe anlegen ohne Einwilligung wäre ein Eingriff in die körperliche Unversehrtheit.",
        glossarBegriffe: ["Einwilligung", "Aufklärungspflicht", "Pflege", "Kompressionsstrümpfe", "Maßnahme", "Aufklärung"],
      },
      contentB1: {
        title: "Was sagt das Gesetz?",
        body: "§ 630d BGB sagt:\n\n_\"Für jede Behandlung braucht man die Einwilligung (= das Ja) des Patienten. Vorher muss man ihn verständlich aufklären (= erklären).\"_\n\nWas das bedeutet: Du darfst Frau Kovač keine Kompressionsstrümpfe anziehen, wenn sie Nein sagt. Zuerst erklären. Dann entscheidet sie.",
        glossarBegriffe: ["Einwilligung", "Pflege", "Kompressionsstrümpfe", "Maßnahme", "Aufklärung"],
      },
    },
    // Opt-3.B — Vergleich ASS vs. Kompression
    {
      stepId: "ce02-kovac-plan-opt-b-ass-vs-kompression",
      phase: 3,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023", "AWMF S3-Leitlinie VTE-Prophylaxe 2015"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "krankheitslehre",
      contentC1: {
        title: "ASS und Kompressionsstrümpfe — was wirkt wie?",
        body: "Frau Kovač sagt: 'Ich hab doch die Tabletten.' Sie meint ASS 100 mg. Verstehe den Unterschied.\n\n**Kompressionstherapie** = Behandlung mit medizinischen Strümpfen (oder Wickeln), die die oberflächlichen Beinvenen zusammendrücken. Dadurch fließt das Blut schneller zum Herzen zurück und der Blutstau in den Beinen wird reduziert.",
        glossarBegriffe: [
          "ASS",
          "Thrombozytenaggregationshemmung",
          "Venöse Stase",
          "Kompressionstherapie",
        ],
      },
      contentB1: {
        title: "Tabletten und Strümpfe — was macht was?",
        body: "Frau Kovač denkt: Die Tablette reicht. Stimmt das? Vergleiche.\n\n**Kompressionstherapie** = Behandlung mit medizinischen Strümpfen, die die Beine zusammendrücken. So fließt das Blut besser nach oben.",
        glossarBegriffe: ["ASS", "Thrombose", "Kompressionsstrümpfe", "Kompressionstherapie"],
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
      stepId: "ce02-kovac-plan-opt-c-angehörige-ressource",
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
          "Sturzprophylaxe",
          "Risiko",
          "Pflege",
          "Ressource",
          "Angehörige",
          "Lernen",
          "SGB XI",
          "Lippenbremse",
          "Einwilligung",
          "DSGVO",
          "Datenschutz",
          "Patient",
          "Lagerung",
          "Problem",
        ],
      },
      contentB1: {
        title: "Sohn Darko: Hindernis oder Hilfe?",
        body: "Darko ruft an — und am Telefon darfst du nichts sagen (Datenschutz). Aber: **Darko ist nicht das Problem. Darko kann eine große Hilfe sein.**\n\nWas Darko machen könnte (wenn Frau Kovač **schriftlich erlaubt**):\n\n1. **Regelmäßige Informationen:** Der Pflegedienst kann ihn 1× pro Woche anrufen. Mit Erlaubnis von Frau Kovač.\n\n2. **Er kennt seine Mutter:** Wenn er telefoniert, hört er Veränderungen die du beim Besuch nicht siehst.\n\n3. **Geld vom Staat (§ 45a SGB XI):** 125 € pro Monat für Hilfe (z.B. eine Nachbarin). Darko kann das aus Kroatien organisieren.\n\n4. **Pflegekurs (§ 45 SGB XI):** Wenn Darko aus Kroatien kommt — er kann **kostenlos** lernen wie er pflegt (Lippenbremse, Lagerung). Das macht ihn stärker.\n\n5. **Verhinderungspflege (§ 39 SGB XI):** Wenn Darko 2 Wochen kommt und pflegt — der Staat zahlt bis 1.612 € pro Jahr.\n\n**Deine Aufgabe nächste Woche:**\nFrau Kovač fragen: Möchtest du, dass Darko regelmäßig vom Pflegedienst informiert wird? Es gibt ein Formular. Sie entscheidet. Du machst das Angebot.\n\n**Wichtig:** Darko ist 1.500 km weg. Aber er ist Frau Kovačs wichtigster Mensch. Ihn klug einzubinden ist Pflege.",
        glossarBegriffe: [
          "Schweigepflichtsentbindung",
          "Pflegekurs",
          "Angehörigenarbeit",
          "Sturzprophylaxe",
          "Risiko",
          "Pflege",
          "Ressource",
          "Angehörige",
          "Lernen",
          "SGB XI",
          "Lippenbremse",
          "Einwilligung",
          "DSGVO",
          "Datenschutz",
          "Patient",
          "Lagerung",
          "Problem",
        ],
      },
      wusstestDuDas:
        "Pflegekurse für Angehörige sind nach § 45 SGB XI kostenlos. Verhinderungspflege § 39 zahlt bis 1.612 €/Jahr für Vertretung. Für Migrant:innen-Familien wie Kovač oft entscheidend — der Sohn aus dem Ausland kann dann legal und finanziert pflegen.",
    },
  ],
  geschaetzteDauer: 25,
};
