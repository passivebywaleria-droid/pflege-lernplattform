// CE-02 Situation Frau Yilmaz Spirale 2 — Phase 3: Planen
// Steps: 5 Kern + 2 Optional + 1 Branching · Bloom: B3-B5 · Zeit: ~20-30 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/phase-planen.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_PLANEN: SituationsPhase = {
  phaseId: "ls-yilmaz-spirale2-planen",
  phase: "planen",
  titel: "Planen — Wundversorgung + Positionierungsplan + S-P-E Donabedian",
  titelB1: "Planen — Was muss jetzt passieren?",
  kontext:
    "Frau Schäfer hat sich kurz den Befund angeschaut und sagt: 'Das ist eine Kategorie II. Wir müssen das sofort versorgen und den Arzt informieren. Ich kümmer mich um die Ärztin — du planst die Pflege weiter. Was schlägst du vor?' Du bist gefordert — nicht nur eine Maßnahme, sondern einen durchdachten Pflegeplan für Wundversorgung, Positionierung und Evaluation. Der bisherige Plan hat offensichtlich nicht ausgereicht.",
  kontextB1:
    "Frau Schäfer hat die Wunde gesehen. Sie sagt: 'Das ist Kategorie 2. Wir müssen sofort handeln. Ich rufe die Ärztin. Du planst weiter — was schlägst du vor?' Du musst jetzt einen guten Plan machen: Wundversorgung, Lagerung, was als nächstes geprüft wird.",
  kernSteps: [
    // Step 3.1 — MC (Single-Choice): Wundauflage auswählen
    {
      stepId: "ce02-yilmaz-s2-plan-01-wundauflage-auswahl",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-s2-plan-wundauflage",
      tag: "krankheitslehre",
      contentC1: {
        title: "Welche Wundauflage für Kategorie II?",
        body: "Bloom 4 — Bewerten: klinisches Abwägen der Wundauflagen-Eigenschaften. Quelle: (NPUAP/EPUAP/PPPIA 2019)",
        glossarBegriffe: [
          "Hydrokolloid-Verband",
          "Alginate",
          "VAC-Therapie",
          "Feuchtes Wundmilieu",
        ],
      },
      contentB1: {
        title: "Welcher Verband passt für diese Wunde?",
        body: "Wähle den richtigen Verband für Frau Yilmaz' Wunde.",
        glossarBegriffe: ["Hydrokolloid-Verband", "Feuchtes Wundmilieu"],
      },
      question: {
        fragetext:
          "Welche Wundauflage ist für Dekubitus Kategorie II (flache Erosion, feuchtes Wundmilieu, kein Nekroseanteil) am besten geeignet?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Trockener Mullverband",
            isCorrect: false,
            explanation:
              "Trockener Verband stört das feuchte Wundmilieu, das Wundheilung bei oberflächlichen Erosionen fördert. Außerdem verklebt er und verletzt beim Wechsel den fragilen Wundgrund.",
            explanationB1:
              "Trockener Verband ist hier falsch. Die Wunde braucht Feuchtigkeit zum Heilen. Ein trockener Verband macht das schlechter.",
          },
          {
            text: "Hydrokolloid-Verband (hält feuchtes Wundmilieu, schützt vor Verunreinigung, leicht abnehmbar)",
            isCorrect: true,
            explanation:
              "Genau. Hydrokolloid erhält das feuchte Wundmilieu (fördert Granulation), schützt vor externen Keimen und lässt sich ohne Traumatisierung des Wundgrunds ablösen. Optimal für flache Erosionen Kategorie II.",
            explanationB1:
              "Richtig. Hydrokolloid-Verband hält die Wunde feucht — das hilft beim Heilen. Er schützt die Wunde und tut nicht weh beim Abmachen.",
          },
          {
            text: "Alginate (für stark nässende Wunden mit viel Sekret)",
            isCorrect: false,
            explanation:
              "Alginate sind für stark exsudierende Wunden geeignet — hier liegt nur minimales Exsudat vor. Alginate würden bei dieser Wunde austrocknen und schaden.",
            explanationB1:
              "Alginate sind für Wunden mit viel Flüssigkeit. Frau Yilmaz hat nur wenig — Alginate sind hier nicht richtig.",
          },
          {
            text: "Vakuumversiegelung (VAC-Therapie)",
            isCorrect: false,
            explanation:
              "VAC-Therapie ist für tiefe, unterminierte Wunden der Kategorie III/IV geeignet. Bei Kategorie II (flache Erosion) ist das übertherapiert und kontraindiziert.",
            explanationB1:
              "VAC-Therapie ist für sehr tiefe Wunden. Bei Frau Yilmaz ist die Wunde flach (Kategorie 2). Das wäre zu viel.",
          },
        ],
      },
    },

    // Step 3.1b — Inline-Wissen: 30-Grad-Lagerung vs. 135-Grad-Lagerung
    // Bevor der Schueler den Positionierungsplan sortiert, braucht er das Wissen:
    // Warum 30 Grad? Warum 135 Grad? Was ist der Unterschied?
    {
      stepId: "ce02-yilmaz-s2-plan-01b-lagerungsprinzipien",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA 2019",
        "Moore Z., Cowman S., Conroy R.M. (2022)",
        "DNQP 2024 — Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-plan-lagerungsprinzipien",
      tag: "pflege",
      themaPrimaer: "positionierung",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Du kennst jetzt beide Winkel. Bringe den Positionierungsplan in die richtige Reihenfolge.",
      contentC1: {
        title: "30-Grad vs. 135-Grad — welche Lagerung wann?",
        body: "",
        glossarBegriffe: ["30-Grad-Seitenlage", "135-Grad-Schraege Seitenlage", "Mikrolagerung"],
      },
      contentB1: {
        title: "30 Grad oder 135 Grad — was ist der Unterschied?",
        body: "",
        glossarBegriffe: ["30-Grad-Lagerung", "135-Grad-Lagerung"],
      },
      inlineWissen: {
        bausteinRef: "positionierung-30-vs-135",
        storyAufhaenger:
          "Frau Schaefer sagt: \"Der Positionierungsplan muss angepasst werden — 135 Grad statt nur Rueckenlage.\" Aber was bedeuten diese Winkel genau, und warum ist die 90-Grad-Seitenlage bei Frau Yilmaz keine Option?",
        storyAufhaengerB1:
          "Frau Schaefer sagt: \"Wir muessen den Lagerungsplan aendern — 135 Grad.\" Was bedeutet das? Und warum nicht einfach auf die Seite legen?",
        kerntext:
          "Es gibt **3 Positionierungs-Optionen** bei Dekubitus-Prophylaxe — und bei Frau Yilmaz fallen zwei davon aus:\n\n**30-Grad-Seitenlage (Schraeglage):**\n• Patient liegt leicht schraeg, ein Kissen unter der Gesaesshaelfte.\n• Entlastet das Sakrum teilweise, Druck verteilt sich auf Gesaessmuskulatur.\n• Standard bei vielen Patienten — aber bei Frau Yilmaz NICHT ausreichend: Sie hat bereits einen offenen Dekubitus Kat. II am Sakrum. Teilentlastung reicht nicht — das Sakrum muss KOMPLETT frei sein.\n\n**90-Grad-Seitenlage:**\n• Patient liegt direkt auf der Seite.\n• Problem: Druck auf Trochanter major (Oberschenkelknochen seitlich) — ebenfalls Praedilektionsstelle.\n• Bei Frau Yilmaz doppelt kontraindiziert: Hueft-TEP rechts! Auf der operierten Seite liegen = OP-Region belasten. Nicht-operierte Seite = Trochanter-Risiko.\n\n**135-Grad-Schraege Seitenlage (die Loesung):**\n• Patient liegt fast auf dem Bauch, aber schraeg abgestuetzt.\n• Druck auf grosse Muskelflaechen (Gesaess, Oberschenkelrueckseite) statt auf Knochenvorspruenge.\n• Sakrum komplett frei. Trochanter nicht belastet.\n• Bei Frau Yilmaz: Auf die LINKE Seite (nicht-operierte Seite), Hueft-TEP rechts bleibt oben in Abduktion.\n\n**Mikrolagerung:** Zusaetzlich alle 15-20 Min kleine Positionsaenderungen (Kissen verschieben) — reduziert Reperfusionsschaden.",
        kerntextB1:
          "Es gibt **3 Moeglichkeiten** fuer die Lagerung:\n\n**30-Grad-Seitenlage:**\n• Leicht schraeg liegen. Ein Kissen unter dem Po.\n• Entlastet das Steissbein teilweise.\n• Bei Frau Yilmaz NICHT genug: Die Wunde ist offen — das Steissbein muss ganz frei sein.\n\n**90-Grad-Seitenlage:**\n• Direkt auf der Seite liegen.\n• Problem: Druck auf den Hueftknochen seitlich.\n• Bei Frau Yilmaz nicht moeglich: Sie hat eine Hueft-OP rechts!\n\n**135-Grad-Seitenlage (die beste Loesung):**\n• Fast auf dem Bauch, aber schraeg mit Kissen.\n• Steissbein komplett frei. Hueftknochen nicht belastet.\n• Frau Yilmaz liegt auf der LINKEN Seite (nicht-operierte Seite).\n\n**Mikrolagerung:** Alle 15-20 Minuten kleine Kissen-Veraenderungen.",
        faustregel:
          "30 Grad = teilweise Entlastung. 135 Grad = komplette Sakrum-Freistellung. Bei offenem Dekubitus am Sakrum: immer 135 Grad.",
        faustregelB1:
          "30 Grad = ein bisschen Entlastung. 135 Grad = Steissbein komplett frei. Bei offener Wunde: immer 135 Grad.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz — akzeptiert Kissen nicht",
            kurzbeschreibung:
              "Bei ihm ist 135-Grad-Lagerung schwierig: Er zieht die Kissen raus, weil er nicht versteht warum sie da liegen. 30-Grad-Schraeglage mit flachen Keilen funktioniert besser — weniger Fremdkoerper-Gefuehl.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Bobath-Lagerung + Dekubitus-Prophylaxe",
            kurzbeschreibung:
              "Bei Schlaganfall: Bobath-Lagerung (Spastik-Reduktion) und Dekubitus-Prophylaxe muessen kombiniert werden. 30-Grad auf die nicht-betroffene Seite ist Standard — reduziert Spastik UND Druck.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Bariatrisch — Schwerlast-Equipment",
            kurzbeschreibung:
              "Bei BMI > 35: Standardkissen reichen nicht fuer 135-Grad-Lagerung. Schwerlast-Lagerungskissen + breiteres Bett noetig. Immer 2-3 Pflegekraefte fuer die Lagerung.",
          },
        ],
        sonstBox:
          "**Sitzposition und Dekubitus:** Sitzen im Rollstuhl > 2 Stunden ohne Druckentlastung ist genauso riskant wie Liegen. Sitzbeinhöcker sind Praedilektionsstellen. Druckentlastung durch Gewichtsverlagerung alle 15-20 Min, spezielle Sitzkissen (Gel, Luft). Relevant fuer Frau Kovac (ambulant, viel sitzend) und Frau Yilmaz nach Mobilisation im Sessel.",
        sonstBoxB1:
          "**Wichtig bei Sitzen:** Auch im Rollstuhl oder Sessel entsteht Dekubitus — an den Sitzbeinhöckern. Alle 15-20 Minuten Gewicht verlagern. Spezielle Sitzkissen helfen.",
        karteikarte: {
          vorderseite:
            "Frau Yilmaz hat Dekubitus Kat. II am Sakrum + Hueft-TEP rechts. Warum ist 135-Grad-Lagerung die richtige Wahl und warum fallen 30 Grad und 90 Grad aus?",
          rueckseite:
            "30 Grad: nur Teilentlastung — bei offener Wunde nicht ausreichend. 90 Grad: Trochanter-Belastung + Hueft-TEP rechts kontraindiziert. 135 Grad: Sakrum komplett frei, kein Trochanter-Druck, Hueft-TEP oben in Abduktion.\n\nSpektrum: Bauer (30 Grad wegen Demenz-Akzeptanz), Petrov (30 Grad + Bobath), Schmidt (135 Grad mit Schwerlast-Equipment).\n\nFaustregel: **Bei offenem Sakrum-Dekubitus: immer 135 Grad. 30 Grad reicht nicht.**",
        },
      },
    },

    // Step 3.2 — Sequencing: Positionierungsplan
    {
      stepId: "ce02-yilmaz-s2-plan-02-positionierungsplan",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019)",
        "DNQP (2. Aktualisierung 2024)",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-s2-plan-positionierung",
      tag: "pflege",
      contentC1: {
        title: "Positionierungsplan — Reihenfolge festlegen",
        body: "Bringe die 6 Schritte in die logische Reihenfolge (erst Assessment, dann Dokumentation, dann Handeln, dann Informieren). Bloom 3 — Anwenden.",
        glossarBegriffe: ["135°-Schräge Seitenlage", "Umlagerungsrhythmus"],
      },
      contentB1: {
        title: "Was machst du zuerst? Sortiere die Schritte.",
        body: "Bringe die Schritte für den Positionierungsplan in die richtige Reihenfolge.",
        glossarBegriffe: ["135°-Seitenlage"],
      },
      question: {
        fragetext:
          "Sortiere die Schritte des angepassten Positionierungsplans in die richtige Reihenfolge.",
        sequencing: {
          instruction: "Richtige Reihenfolge: erst Assessment, dann dokumentieren, dann handeln, dann informieren.",
          items: [
            { id: "p1", label: "Braden-Score dokumentieren und mit Spirale-1-Wert vergleichen" },
            { id: "p2", label: "135°-Schräge Seitenlage einführen: Sakrum komplett entlasten" },
            { id: "p3", label: "2-stündlichen Umlagerungsrhythmus schriftlich festhalten" },
            { id: "p4", label: "Fersen durch Kissen freistellen" },
            { id: "p5", label: "Inkontinenzversorgung optimieren: Pad-Wechsel bei Nässe, kein Dauer-Pad" },
            { id: "p6", label: "Frau Yilmaz über Sinn der Maßnahmen informieren, Kooperation gewinnen" },
          ],
        },
      },
    },

    // Step 3.3 — Text (stepbystep): 135°-Schräge Seitenlage erklärt
    {
      stepId: "ce02-yilmaz-s2-plan-03-135-grad-erklaert",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019)",
        "Moore Z., Cowman S., Conroy R.M. (2022)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-plan-135-grad",
      tag: "anatomie",
      displayFormat: "stepbystep",
      bildkategorie: "prozedur",
      imageAlt:
        "Illustration der 135°-Schrägen Seitenlage mit Kissen-Anordnung, Patient liegt stabil auf Seite mit Kissen unter Brust, zwischen Knien und unter Unterschenkeln",
      bildhinweis:
        "Medical illustration of 135 degree oblique side lying position for pressure injury prevention, patient with pillows under thorax, between knees, under lower legs, hospital bed side view, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Warum 135°-Schräge Seitenlage beim Sakrum-Dekubitus?",
        body: "Die klassische 90°-Seitenlage verlagert den Druck auf den Trochanter major (Oberschenkelknochen seitlich) — ebenfalls ein Prädilektionsort für Dekubitus. Bei Frau Yilmaz mit Hüft-TEP rechts kommt hinzu: Eine 90°-Lage auf der rechten Seite würde direkt auf die OP-Region drücken — also doppelt zu vermeiden. Die 135°-Schräge Seitenlage verteilt das Gewicht auf Gesäßmuskulatur und Oberschenkelrückseite — Flächen mit mehr Weichteilpolster über dem Knochen.\n\n**Wichtig: Seite richtig wählen.** Bei Hüft-TEP rechts → 135°-Schräglage auf die **linke** Seite (kontralateral, also Gegenseite zur OP). Die operierte Hüfte bleibt oben in leichter Abduktion (Kissen zwischen den Knien) — keine Adduktion, keine Innenrotation, keine Hüftbeugung über 90°. Diese Lagerungsregeln gelten typischerweise für die ersten 6-12 Wochen post-OP.\n\nKissen: eines unter die Brust (Stabilisierung des Rumpfes), eines zwischen die Beine (Beinentlastung + TEP-Abduktionsschutz), eines unter den Unterschenkel (Fersenfreistellung), eines an der Rückseite (verhindert Zurückrollen). Konsequenz für Frau Yilmaz: Diese Lagerung kostet 5 Minuten mehr — ist aber entscheidend für die Entlastung des Sakrums UND den Schutz der OP-Hüfte. Quelle: (NPUAP/EPUAP/PPPIA 2019; postoperative TEP-Lagerung)",
        glossarBegriffe: [
          "135°-Schräge Seitenlage",
          "Trochanter major",
          "Prädilektionsstelle",
          "Kontralateral",
          "Abduktion",
        ],
      },
      contentB1: {
        title: "Warum 135°-Seitenlage?",
        body: "Bei 90°-Seitenlage drückt das Gewicht auf den Oberschenkelknochen seitlich. Das ist auch eine gefährliche Stelle für Dekubitus. Bei 135° liegt man schräger: Das Gewicht verteilt sich auf die Gesäßmuskeln. Viel Fleisch und Muskel schützen den Knochen besser.\n\n**Wichtig: Auf welcher Seite?** Frau Yilmaz hat Hüft-OP rechts. Das heißt: Sie liegt auf der **linken** Seite (die nicht-operierte Seite). Die operierte Hüfte ist oben. Niemals auf der operierten Seite liegen — das tut der OP-Stelle weh.\n\nKissen: eins unter die Brust (Stabilisierung), eins zwischen die Beine (wichtig: hält die operierte Hüfte in der richtigen Position!), eins unter den Unterschenkel (Fersen frei), eins am Rücken (damit sie nicht zurückrollt). Das dauert 5 Minuten länger — aber es hilft.",
        glossarBegriffe: ["135°-Seitenlage", "Kontralateral"],
      },
    },

    // Step 3.4 — ConceptMap: Donabedian S-P-E-Modell
    {
      stepId: "ce02-yilmaz-s2-plan-04-donabedian-qualitaet",
      phase: 3,
      stepType: "conceptmap",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-plan-donabedian",
      tag: "pflege",
      contentC1: {
        title: "S-P-E-Modell Donabedian auf Frau Yilmaz anwenden",
        body: "Ordne die 9 Items den drei Säulen zu: Struktur (S), Prozess (P), Ergebnis (E). Bloom 5 — Qualitätssicherung als Systemanalyse statt Schuldzuweisung. Quelle: Donabedian A. (1966)",
        glossarBegriffe: ["Donabedian", "Strukturqualität", "Prozessqualität", "Ergebnisqualität"],
      },
      contentB1: {
        title: "S-P-E-Modell: Was hat was beeinflusst?",
        body: "Ordne die Faktoren in drei Gruppen: S = Struktur (Was war vorhanden?), P = Prozess (Was wurde gemacht?), E = Ergebnis (Was ist passiert?).",
        glossarBegriffe: ["Donabedian"],
      },
      question: {
        fragetext:
          "Ordne die 9 Items in die drei Donabedian-Säulen: Struktur (S), Prozess (P), Ergebnis (E).",
        conceptmap: {
          instruction:
            "Verbinde jeden Item-Knoten mit der richtigen Säule (S, P oder E).",
          nodes: [
            { id: "s", label: "Struktur (S)", fixed: true },
            { id: "p", label: "Prozess (P)", fixed: true },
            { id: "e", label: "Ergebnis (E)", fixed: true },
            { id: "i1", label: "Personalschlüssel auf Station" },
            { id: "i2", label: "Weichlagerungsmatratze vorhanden" },
            { id: "i3", label: "Dokumentationssystem verfügbar" },
            { id: "i4", label: "Umlagerungsrhythmus durchgeführt?" },
            { id: "i5", label: "Braden-Skala ausgefüllt?" },
            { id: "i6", label: "Hautinspektion täglich?" },
            { id: "i7", label: "Patienteninformation über Prophylaxe?" },
            { id: "i8", label: "Dekubitus entstanden (negativ)" },
            { id: "i9", label: "Kategorie II statt III/IV (Schadensbegrenzung)" },
          ],
          correctConnections: [
            { from: "i1", to: "s" },
            { from: "i2", to: "s" },
            { from: "i3", to: "s" },
            { from: "i4", to: "p" },
            { from: "i5", to: "p" },
            { from: "i6", to: "p" },
            { from: "i7", to: "p" },
            { from: "i8", to: "e" },
            { from: "i9", to: "e" },
          ],
        },
      },
    },

    // Step 3.5 — Dialog (2 Phasen): SBAR-Bericht an Ärztin
    {
      stepId: "ce02-yilmaz-s2-plan-05-arzt-information",
      phase: 3,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["§ 3 PflBG", "DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-s2-plan-sbar",
      tag: "pflege",
      contentC1: {
        title: "SBAR-Bericht an Dr. Kirchner",
        body: "Ärztin Dr. Kirchner betritt das Zimmer. Du berichtest als Pflegeschülerin die Situation im SBAR-Format. Sortiere die SBAR-Elemente in die richtige Reihenfolge.",
        glossarBegriffe: ["SBAR", "§ 3 PflBG"],
      },
      contentB1: {
        title: "Bericht an die Ärztin — SBAR-Format",
        body: "Die Ärztin Dr. Kirchner kommt. Du berichtest. SBAR bedeutet: S = Situation, B = Background (Hintergrund), A = Assessment (Einschätzung), R = Recommendation (Empfehlung).",
        glossarBegriffe: ["SBAR"],
      },
      question: {
        fragetext:
          "Wähle die richtigen SBAR-Aussagen für deinen Bericht an Dr. Kirchner.",
        patientName: "Dr. Kirchner",
        dialogPhases: [
          {
            context:
              "Dr. Kirchner betritt das Zimmer. Sie schaut kurz auf Frau Yilmaz, dann auf dich. 'Was haben wir?' Du berichtest:",
            contextB1:
              "Dr. Kirchner kommt herein. Sie fragt: 'Was ist los?' Du berichtest.",
            speaker: "Du",
            options: [
              {
                text: "\"Ich berichte über Frau Yilmaz, Zimmer 7, 79 Jahre, Hüft-TEP Tag 14. Dekubitus Kategorie II am Sakrum, entdeckt heute Früh bei der Ganzkörperpflege. Diabetes Typ 2, Adipositas BMI 34, periphere Neuropathie — kein subjektiver Schmerz. Wundgröße ~2×3 cm, flache Erosion, mazerierender Wundrand, Wundgrund rötlich-feucht. Bitte Wundanordnung und Fotodokumentation anordnen.\"",
                textB1:
                  "\"Frau Yilmaz, Zimmer 7, 79 Jahre, nach Hüft-OP. Heute Früh habe ich eine Wunde am Steißbein entdeckt. Dekubitus Kategorie 2. Sie hat Diabetes, Übergewicht und spürt wenig Schmerz. Die Wunde ist 2×3 cm, offen, Rand aufgeweicht. Bitte Wundbehandlung und Foto anordnen.\"",
                patientResponse:
                  "Dr. Kirchner nickt. 'Gut. Hydrokolloid, täglicher Verbandwechsel, Fotodokumentation. Und Wundbehandlung in die Kurve.' Sie schreibt die Anordnung.",
                patientResponseB1:
                  "Dr. Kirchner nickt. 'Gut gemacht. Wir machen Hydrokolloid-Verband, täglich wechseln. Und ein Foto.' Sie schreibt es auf.",
                score: 3,
                feedback:
                  "Vollständiges SBAR: S = Patient + Problem + Zeitpunkt. B = Vorerkrankungen + Risikoprofil. A = Wundbefund objektiv. R = konkrete Empfehlung. Das ist professionelle pflegerische Übergabe nach § 3 PflBG.",
                feedbackB1:
                  "Sehr gut. Du hast S, B, A, R alle drin. Dr. Kirchner weiß genau was sie tun muss. Das ist gute Pflege.",
              },
              {
                text: "\"Frau Yilmaz hat irgendwie eine Wunde am Rücken — da sollten Sie mal schauen.\"",
                textB1:
                  "\"Frau Yilmaz hat eine Wunde am Rücken — kommen Sie mal schauen.\"",
                patientResponse:
                  "Dr. Kirchner schaut dich kurz an. 'Was für eine Wunde? Wie groß? Seit wann?' — sie wartet auf mehr Informationen.",
                patientResponseB1:
                  "Dr. Kirchner fragt: 'Was für eine Wunde? Wie groß? Seit wann?'",
                score: 0,
                feedback:
                  "Keine Information, kein SBAR, kein Befund. 'Irgendwie' und 'mal schauen' sind keine professionellen Übergabeformulierungen. Der Arzt braucht einen strukturierten Befund — sonst kann er keine Anordnung schreiben.",
                feedbackB1:
                  "Das ist zu wenig Information. Die Ärztin braucht: Was ist die Wunde? Wie groß? Seit wann? Welche Vorerkrankungen?",
              },
            ],
          },
          {
            context:
              "Dr. Kirchner: 'Gut. Noch eine Frage: Warum ist das erst jetzt aufgefallen? War das bei der letzten Visite noch nicht da?' Du antwortest.",
            contextB1:
              "Dr. Kirchner fragt: 'Warum fällt das jetzt erst auf? War das gestern noch nicht da?' Du antwortest.",
            speaker: "Du",
            options: [
              {
                text: "\"Die Kollegin vom Spätdienst hat gestern eine Rötung gesehen, aber nichts dokumentiert. Heute beim Frühdienst habe ich die offene Wunde entdeckt. Ich kann nicht sagen wie lange sie schon besteht.\"",
                textB1:
                  "\"Die Kollegin vom Spätdienst hat gestern eine rote Stelle gesehen — aber nicht aufgeschrieben. Heute früh habe ich die offene Wunde gesehen. Ich weiß nicht wie lange sie schon da ist.\"",
                patientResponse:
                  "Dr. Kirchner: 'Das muss dokumentiert werden. Ich erwarte einen vollständigen Wundbericht in der Kurve.' — sachlich, nicht anklagend.",
                patientResponseB1:
                  "Dr. Kirchner: 'Das muss alles in die Akte. Bitte einen Wundbericht schreiben.'",
                score: 3,
                feedback:
                  "Ehrlich, transparent, ohne Schuldzuweisung. Du berichtest was du weißt — und was du nicht weißt. Das ist die richtige Haltung. Die Ärztin kann jetzt eine informierte Entscheidung treffen.",
                feedbackB1:
                  "Gut. Du bist ehrlich. Du sagst was du weißt und was du nicht weißt. Das ist richtig.",
              },
              {
                text: "\"Das war vorher schon da, aber niemand hat es bemerkt.\"",
                textB1: "\"Die anderen haben es nicht gesehen.\"",
                patientResponse:
                  "Dr. Kirchner: 'Wer war das? Das muss ich wissen.' — sie fragt weiter nach.",
                patientResponseB1:
                  "Dr. Kirchner: 'Wer war das? Das muss ich wissen.'",
                score: 1,
                feedback:
                  "Du weißt das nicht sicher — du kannst nicht sagen 'das war schon da', wenn du keine Dokumentation hast. Halte dich an das, was du weißt. Spekulationen schaden.",
                feedbackB1:
                  "Das weißt du nicht sicher. Sage nur was du wirklich weißt. Keine Vermutungen ohne Beleg.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Opt 3.6 — Matching: Wundauflagen-Glossar (B1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-plan-opt-01-wundauflagen-glossar",
      phase: 3,
      stepType: "matching",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "vertiefung",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-s2-plan-wundauflagen-typen",
      tag: "krankheitslehre",
      contentC1: {
        title: "Wundauflagen-Typen und ihre Haupteigenschaft",
        body: "5 Zuordnungspaare zur Vorbereitung auf die Wundauflage-Auswahl.",
        glossarBegriffe: [
          "Hydrokolloid",
          "Alginate",
          "Silber-Wundauflage",
          "Fettgaze",
          "Schaumverband",
        ],
      },
      contentB1: {
        title: "Welcher Verband wofür?",
        body: "Ordne jeden Verband seiner Hauptaufgabe zu.",
        glossarBegriffe: ["Hydrokolloid", "Alginate"],
      },
      question: {
        fragetext: "Ordne jeden Wundauflage-Typ seiner Haupteigenschaft zu.",
        matchingPairs: [
          {
            left: "Hydrokolloid-Verband",
            right: "Feuchtes Wundmilieu halten — bei flachen, wenig nässenden Wunden",
          },
          {
            left: "Alginate",
            right: "Stark nässende Wunden — absorbiert viel Sekret",
          },
          {
            left: "Silberhaltige Wundauflage",
            right: "Infizierte Wunden — antiseptische Wirkung",
          },
          {
            left: "Fettgaze",
            right: "Granulationsphase — verhindert Verkleben mit Wundgrund",
          },
          {
            left: "Schaumverband",
            right: "Mäßig exsudierende Wunden — polstert und absorbiert",
          },
        ],
      },
    },

    // Opt 3.7 — Dialog (2 Phasen): Frau Yilmaz über Positionierung informieren
    {
      stepId: "ce02-yilmaz-s2-plan-opt-02-patienteninfo-yilmaz",
      phase: 3,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2. Aktualisierung 2024)"],
      track: "vertiefung",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-s2-plan-patienteninfo",
      tag: "pflege",
      contentC1: {
        title: "Frau Yilmaz erklären — warum Positionierung so wichtig ist",
        body: "In Spirale 1 hat Frau Yilmaz die Umlagerung manchmal abgelehnt ('das war unbequem'). Jetzt ist ein Dekubitus entstanden. Du musst ihr erklären — respektvoll und verständlich — warum ihre aktive Mitarbeit entscheidend ist.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Frau Yilmaz überzeugen — warum das Drehen wichtig ist",
        body: "Frau Yilmaz hat früher das Umlagern manchmal abgelehnt. Jetzt ist eine Wunde entstanden. Erkläre ihr warum sie mitmachen muss — freundlich und klar.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie erklärst du Frau Yilmaz, warum sie aktiv bei der Positionierung mitmachen muss?",
        patientName: "Frau Yilmaz",
        dialogPhases: [
          {
            context:
              "Frau Yilmaz sagt: 'Die Schwestern haben mich immer auf die Seite gelegt. Ich hab das manchmal nicht gewollt — das war unbequem. Aber sie haben es trotzdem gemacht.' Sie schaut dich an — zwischen Verständnis und Widerstand.",
            contextB1:
              "Frau Yilmaz sagt: 'Das Drehen auf die Seite war immer unbequem. Ich wollte es manchmal nicht.' Sie schaut dich an.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Yilmaz, die Wunde die wir heute gefunden haben, ist entstanden weil das Gewebe am Steißbein zu lange Druck hatte. Das Umlagern verhindert genau das — es gibt dem Gewebe kurze Pausen. Bei Ihrer Erkrankung spüren Sie den Druck nicht selbst — deshalb ist das Umlagern der einzige Weg. Ich verstehe dass es unbequem ist. Darf ich Ihnen zeigen, wie wir es angenehmer machen können?\"",
                textB1:
                  "\"Frau Yilmaz, die Wunde ist entstanden, weil zu lange Druck auf der Haut war. Das Drehen gibt der Haut eine Pause. Bei Ihrer Erkrankung spüren Sie den Druck nicht selbst — deshalb müssen wir drehen. Ich weiß, es ist nicht schön. Darf ich zeigen, wie wir es besser machen?\"",
                patientResponse:
                  "Frau Yilmaz denkt nach. 'Ja … wenn es die Wunde verhindert. Aber das Kissen drückt manchmal.' — sie ist bereit, aber hat eine Bedingung.",
                patientResponseB1:
                  "Frau Yilmaz denkt kurz. 'Wenn das die Wunde verhindert — ja. Aber das Kissen drückt manchmal.' Sie ist bereit.",
                score: 3,
                feedback:
                  "Erklärung (warum) + Verständnis (unbequem) + Angebot (besser machen). Dreischritt der patientenzentrierten Kommunikation. Du respektierst ihre Autonomie und lädst zur Kooperation ein.",
                feedbackB1:
                  "Sehr gut. Du erklärst warum. Du zeigst Verständnis. Du fragst ob sie mitmacht. Das ist die richtige Reihenfolge.",
              },
              {
                text: "\"Sie müssen das machen — das hat der Arzt angeordnet. Das ist jetzt nicht optional.\"",
                textB1:
                  "\"Das hat der Arzt angeordnet. Sie müssen mitmachen.\"",
                patientResponse:
                  "Frau Yilmaz schließt die Augen. 'Na gut.' — sie kooperiert äußerlich, aber ohne Vertrauen.",
                patientResponseB1:
                  "Frau Yilmaz nickt kurz. 'Na gut.' — aber ihr Gesicht sagt was anderes.",
                score: 0,
                feedback:
                  "Zwang ist nie zulässig — auch nicht als 'Arzt hat's angeordnet'. Patientenautonomie gilt auch für unangenehme Maßnahmen. Wer Pflege als Befehl erlebt, kooperiert nur oberflächlich und bricht die Kooperation beim nächsten Widerstand ab.",
                feedbackB1:
                  "Das ist nicht gut. Pflege ist kein Befehl. Frau Yilmaz hat das Recht Nein zu sagen. Erkläre ihr warum — überzeuge, befehle nicht.",
              },
            ],
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
