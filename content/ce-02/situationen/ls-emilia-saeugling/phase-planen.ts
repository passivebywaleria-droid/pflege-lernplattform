// CE-02 Situation Baby Emilia — Phase 3: Planen & Pflegeziele formulieren
// Steps: 5 Kern + 2 Optional · Bloom: B3-B4 · Zeit: ~15-25 Min
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/phase-planen.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_PLANEN: SituationsPhase = {
  phaseId: "ls-emilia-planen",
  phase: "planen",
  titel: "Pflegeplanung — Ziele und Maßnahmen",
  titelB1: "Plan machen für Emilia",
  kontext:
    "Du hast Emilia beobachtet. Das Bild ist klar: Trinkschwäche durch Atemwegsbehinderung, leichter Flüssigkeitsdefizit, Mutter Laura verunsichert. Der Arzt hat die stationäre Behandlung angeordnet: Beobachtung, engmaschige Flüssigkeitsbilanz, keine i.v.-Infusion zunächst — orales Angebot optimieren. Jetzt planst du gemeinsam mit Laura und dem Team die konkreten Pflegeziele und Maßnahmen für die nächsten 24 Stunden.",
  kontextB1:
    "Du hast Emilia beobachtet. Du weißt jetzt: Trinkschwäche wegen verstopfter Nase. Etwas zu wenig Flüssigkeit. Laura ist unsicher. Der Arzt hat gesagt: Beobachten, Flüssigkeit genau messen, erstmal kein Tropf. Jetzt planst du: Was sind die Ziele für die nächsten 24 Stunden? Was muss getan werden?",
  kernSteps: [
    // ───── Inline-Wissen: SMART-Ziel ─────
    // Der Begriff wird im nachfolgenden Freetext-Step verwendet, in dem der Schüler
    // messbare Pflegeziele formulieren soll. Vorher muss er SMART kennen.
    {
      stepId: "ce02-emilia-plan-iw-smart-ziel",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter/Meier 1981 — Der Pflegeprozess",
        "Doran G. T. 1981 — There's a S.M.A.R.T. way to write management's goals and objectives",
        "Hoehl/Kullick 2019",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-emilia-plan-smart-ziel",
      tag: "pflege",
      themaPrimaer: "säuglingspflege",
      themenSekundaer: ["pflegeprozess"],
      transition: "Jetzt formulierst du selbst ein SMART-Ziel für Emilia. Du weißt was drin sein muss.",
      contentC1: {
        title: "SMART-Ziele — warum \"besser trinken\" kein Pflegeziel ist",
        body: "",
        glossarBegriffe: ["SMART-Ziel", "Pflegeziel"],
      },
      contentB1: {
        title: "SMART-Ziel — was muss ein gutes Ziel haben?",
        body: "",
        glossarBegriffe: ["SMART-Ziel", "Pflegeziel"],
      },
      inlineWissen: {
        bausteinRef: "smart-ziel",
        storyAufhaenger:
          "Du planst die Pflege für Emilia. Andrea sagt: \"Schreib mir ein Ziel auf.\" Du schreibst: \"Emilia soll besser trinken.\" Andrea streicht es durch und sagt: \"Das ist kein Ziel. Das ist ein Wunsch. Ein Ziel muss **SMART** sein.\"",
        storyAufhaengerB1:
          "Du planst die Pflege für Emilia. Du schreibst: \"Emilia soll besser trinken.\" Andrea sagt: \"Das ist kein Ziel. Das ist ein Wunsch. Ein Ziel muss **SMART** sein.\"",
        kerntext:
          "**SMART** ist ein Akronym für 5 Kriterien, die ein gutes Pflegeziel erfüllen muss (Doran 1981, adaptiert für Pflege nach Fiechter/Meier):\n\n• **S = Spezifisch:** Was genau soll erreicht werden? Nicht \"besser trinken\" sondern \"Emilia trinkt mindestens 5× pro Tag\"\n\n• **M = Messbar:** Wie erkenne ich ob das Ziel erreicht ist? Zahlen, beobachtbare Handlungen. \"5 nasse Windeln\" ist messbar, \"genug trinken\" nicht\n\n• **A = Akzeptabel (Attainable):** Ist das Ziel für die Patientin/Mutter realistisch erreichbar? Nicht: \"Emilia trinkt morgen 900 ml\" wenn sie heute nur 280 ml schafft\n\n• **R = Relevant:** Hat das Ziel mit dem Pflegeproblem zu tun? Emilias Problem = Trinkschwäche durch verstopfte Nase. Das Ziel muss die Trinkmenge adressieren\n\n• **T = Terminiert:** Bis wann? \"In den nächsten 24 Stunden\" — nicht \"irgendwann\"\n\n**Beispiel Emilia — SMART:**\n\n❌ \"Emilia soll besser trinken\" → Wunsch (nicht spezifisch, nicht messbar, nicht terminiert)\n\n✅ \"Emilia trinkt in den nächsten 24 h mindestens 5× und produziert mindestens 5 nasse Windeln\" → SMART (spezifisch, messbar, erreichbar, relevant, 24 h terminiert)\n\n**Warum ist das wichtig?** Nur ein SMART-Ziel lässt sich **evaluieren** — am Ende der Schicht kannst du sagen: erreicht, teilweise erreicht, nicht erreicht. Ohne messbares Ziel ist Evaluation unmöglich.",
        kerntextB1:
          "**SMART** bedeutet: Ein gutes Ziel muss 5 Dinge haben:\n\n• **S = Spezifisch:** Was genau? Nicht \"besser trinken\" — sondern \"mindestens 5× trinken\"\n\n• **M = Messbar:** Wie erkenne ich es? Zahlen! \"5 nasse Windeln\" kann ich zählen\n\n• **A = Akzeptabel:** Ist es schaffbar? Nicht von 280 ml auf 900 ml an einem Tag\n\n• **R = Relevant:** Hat es mit dem Problem zu tun? Emilia trinkt zu wenig → Ziel über Trinkmenge\n\n• **T = Terminiert:** Bis wann? \"In 24 Stunden\"\n\n**Beispiel:**\n\n❌ \"Emilia soll besser trinken\" → das ist ein Wunsch\n\n✅ \"Emilia trinkt in 24 Stunden mindestens 5× und hat 5 nasse Windeln\" → das ist ein SMART-Ziel\n\n**Warum wichtig?** Nur mit einem SMART-Ziel kannst du am Ende prüfen: Hat es geklappt — ja oder nein?",
        faustregel:
          "Kein Ziel ohne Zahl und Zeitrahmen. \"Besser\" ist kein Pflegeziel — \"5× in 24 h\" schon.",
        faustregelB1:
          "Kein Ziel ohne Zahl und Zeit. \"Besser\" ist ein Wunsch. \"5× in 24 Stunden\" ist ein Ziel.",
        karteikarte: {
          vorderseite:
            "Andrea streicht \"Emilia soll besser trinken\" durch und sagt: \"Das ist kein Ziel.\" Was muss ein Pflegeziel nach SMART enthalten?",
          rueckseite:
            "SMART (Doran 1981): S = Spezifisch (was genau?), M = Messbar (Zahlen!), A = Akzeptabel (schaffbar?), R = Relevant (zum Problem passend?), T = Terminiert (bis wann?). Beispiel: \"Emilia trinkt in 24 h mindestens 5× und hat 5 nasse Windeln.\" Nur SMART-Ziele lassen sich evaluieren. Faustregel: Kein Ziel ohne Zahl und Zeitrahmen.",
        },
      },
    },

    // Step 3.1 — Freetext (kurz): Pflegeziele formulieren
    {
      stepId: "ce02-emilia-plan-01-pflegeziele-formulieren",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-plan-zielformulierung",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele für Emilia formulieren",
        body: "Formuliere 2 Pflegeziele für Emilia für die nächsten 24 Stunden. Gute Pflegeziele sind messbar, zeitgebunden und realistisch. Nicht: 'Emilia soll besser trinken.' Sondern: 'Emilia trinkt in den nächsten 24 h mindestens 5× und produziert mindestens 5 nasse Windeln.'",
        glossarBegriffe: ["Pflegeziel", "SMART-Ziel"],
      },
      contentB1: {
        title: "Pflegeziele formulieren",
        body: "Formuliere 2 Ziele für Emilia in den nächsten 24 Stunden. Ziele müssen messbar sein. Nicht: 'Emilia soll besser trinken.' Sondern: 'Emilia trinkt mindestens 5× und hat mindestens 5 nasse Windeln in 24 Stunden.'",
        glossarBegriffe: ["Pflegeziel", "SMART-Ziel"],
      },
      question: {
        fragetext:
          "Formuliere 2 messbare Pflegeziele für Emilia für die nächsten 24 Stunden.",
        musterantwort:
          "Ziel 1: Emilia trinkt in den nächsten 24 Stunden mindestens 5-mal und produziert mindestens 5 nasse Windeln (Flüssigkeitsstatus stabilisiert).\nZiel 2: Mutter Laura ist in der Lage, die Nasenpflege vor dem Stillen selbstständig durchzuführen und erklärt das Vorgehen zurück.",
        bewertungskriterien: [
          "Ziele sind messbar (Zahlen, beobachtbare Handlungen)",
          "Ziele sind zeitgebunden (24 Stunden)",
          "Ziele sind realistisch (kein Sprung von 3 auf 8 Windeln sofort)",
          "Mindestens ein Ziel bezieht Mutter Laura ein",
        ],
        satzanfaengeB1: [
          "Emilia trinkt in den nächsten 24 Stunden mindestens...",
          "Mutter Laura kann nach unserer Anleitung...",
        ],
      },
    },

    // Step 3.2 — Text (stepbystep): Flüssigkeitsbilanz Konzept
    {
      stepId: "ce02-emilia-plan-02-flüssigkeitsbilanz-konzept",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-emilia-plan-bilanz",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Flüssigkeitsbilanz beim Säugling führen",
        body: "Die Flüssigkeitsbilanz ist der Kern der Überwachung. Vier Schritte:\n\n**Schritt 1 — Einfuhr dokumentieren:** Beim Stillen geschätzt (eine Stillmahlzeit = ca. 60-80 ml bei 4 Monaten). Beim Abpumpen messbar. Beim Zufüttern messbar.\n\n**Schritt 2 — Ausfuhr dokumentieren:** Windeln wiegen — Windel vor dem Wechseln wiegen, danach Differenz berechnen. 1 g Gewichtsdifferenz ≈ 1 ml Urin.\n\n**Schritt 3 — Bilanz berechnen:** Einfuhr minus Ausfuhr. Positive Bilanz = gut (mehr rein als raus).\n\n**Schritt 4 — Bilanz mit Arzt besprechen:** Bei negativer Bilanz oder Verschlechterung sofort melden. Normwert: Säugling 4 Monate braucht ca. 800-900 ml Flüssigkeit pro Tag. *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Einfuhr", "Ausfuhr"],
      },
      contentB1: {
        title: "Flüssigkeitsbilanz führen",
        body: "Die Flüssigkeitsbilanz zeigt: Bekommt Emilia genug Flüssigkeit? Vier Schritte:\n\n**Schritt 1 — Einfuhr:** Wie viel trinkt Emilia? Stillen = geschätzt (~60-80 ml). Flasche = gemessen.\n\n**Schritt 2 — Ausfuhr:** Windeln wiegen. Vorher und nachher wiegen. Differenz = Urin. 1 Gramm = 1 Milliliter.\n\n**Schritt 3 — Bilanz:** Einfuhr minus Ausfuhr. Plus = gut (mehr rein als raus).\n\n**Schritt 4 — Arzt informieren:** Bei negativer Bilanz — sofort melden. Emilia braucht ca. 800-900 ml pro Tag. *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
    },

    // Step 3.3 — Matrix: Maßnahmen nach Ziel und Verantwortung
    {
      stepId: "ce02-emilia-plan-03-maßnahmen-matrix",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019", "AAP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-emilia-plan-maßnahmen",
      tag: "pflege",
      contentC1: {
        title: "Maßnahmen-Matrix: Ziel × Verantwortung",
        body: "Ordne die Maßnahmen in die Matrix ein. Welches Ziel adressieren sie — und wer ist verantwortlich?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Maßnahmen sortieren",
        body: "Ordne die Maßnahmen: Wer macht was — und für welches Ziel?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne die Maßnahmen in die Matrix ein. X-Achse = Pflegeziel (Flüssigkeit/Trinken vs. Atemweg/Mutter-Empowerment), Y-Achse = Wer setzt um (Pflegekraft selbst vs. Mutter/Arzt mit unserer Anleitung).",
        matrix: {
          instruction:
            "Ordne jede Maßnahme einem Quadranten zu — entlang Pflegeziel (X) und ausführender Person (Y).",
          axisX: {
            label: "Ziel",
            low: "Flüssigkeit + Trinken",
            high: "Atemweg + Mutter-Empowerment",
          },
          axisY: {
            label: "Ausführung",
            low: "Mutter Laura / Arzt (mit unserer Anleitung)",
            high: "Pflegekraft selbst",
          },
          items: [
            {
              id: "m1",
              text: "Windeln wiegen und Trinkmenge dokumentieren",
              correctQuadrant: 1,
            },
            {
              id: "m2",
              text: "Häufigere aber kürzere Stillmahlzeiten anbieten (Mutter führt aus, mit Anleitung)",
              correctQuadrant: 3,
            },
            {
              id: "m3",
              text: "Nasentropfen NaCl 0,9% bereitstellen und vor jeder Mahlzeit anwenden",
              correctQuadrant: 2,
            },
            {
              id: "m4",
              text: "Nasensekret vor dem Trinken sanft absaugen",
              correctQuadrant: 2,
            },
            {
              id: "m5",
              text: "Mutter Laura beim Säuglingsbad anleiten",
              correctQuadrant: 4,
            },
            {
              id: "m6",
              text: "Arzt bei Verschlechterung der Trinkmenge / Bilanz informieren",
              correctQuadrant: 3,
            },
            {
              id: "m7",
              text: "Emilia nach dem Stillen 15 Minuten aufrecht halten (Laura, mit Anleitung)",
              correctQuadrant: 4,
            },
            {
              id: "m8",
              text: "Zimmertemperatur bei 20-22 °C halten",
              correctQuadrant: 2,
            },
          ],
        },
      },
    },

    // Step 3.4 — MC: Schlafposition SIDS-Prävention
    {
      stepId: "ce02-emilia-plan-04-schlafposition-sids",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["AAP — American Academy of Pediatrics 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-emilia-plan-schlafposition",
      tag: "pflege",
      contentC1: {
        title: "Schlafposition bei Schnupfen — Lauras Frage",
        body: "Laura fragt dich: \"Wenn Emilia Schnupfen hat, schläft sie besser auf der Seite — darf ich das?\"",
        glossarBegriffe: ["SIDS", "SIDS-Prävention"],
      },
      contentB1: {
        title: "Schlafposition — Lauras Frage",
        body: "Laura fragt: \"Darf Emilia auf der Seite schlafen? Sie atmet dann besser.\"",
        glossarBegriffe: ["SIDS", "SIDS-Prävention"],
      },
      question: {
        fragetext:
          "Was antwortest du Laura zur Schlafposition?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ja, bei Schnupfen ist Seitenlage empfohlen — das hilft der Atmung",
            isCorrect: false,
            explanation:
              "Falsch. Die AAP-Empfehlung (2022) ist eindeutig: Rückenlage für alle gesunden Säuglinge — auch bei leichten Atemwegsinfekten, keine Ausnahme ohne explizite Arztanweisung. Seitenlage erhöht das SIDS-Risiko weil Säuglinge sich umrollen können.",
            explanationB1:
              "Falsch. Die Regel gilt immer: Rückenlage. Auch bei Schnupfen. Der Arzt muss es erlauben wenn etwas anderes nötig ist.",
          },
          {
            text: "Nein — Emilia muss immer auf dem Rücken schlafen, auch mit Schnupfen",
            isCorrect: true,
            explanation:
              "Richtig. Rückenlage ist SIDS-Prävention — sie gilt ausnahmslos, auch bei Erkältung oder Bronchiolitis. Die AAP (2022) ist klar: keine Ausnahmen für leichte Atemwegsinfekte. Wenn Emilia schwere Atemprobleme hat, entscheidet der Arzt — nicht die Pflegekraft allein.",
            explanationB1:
              "Richtig. Die Regel ist klar: Rücken immer. Auch bei Schnupfen. SIDS-Prävention gilt immer.",
          },
          {
            text: "Das entscheidet der Arzt — ich sage dazu nichts",
            isCorrect: false,
            explanation:
              "Nicht ausreichend. Pflege hat eine Beratungsaufgabe. Du kannst und sollst die Grundregel der SIDS-Prävention erklären. Wenn der Arzt etwas anderes anordnet, gilt das — aber bis dahin gilt Rückenlage.",
            explanationB1:
              "Nicht gut genug. Du weißt die Antwort: Rückenlage immer. Erkläre das. Der Arzt hat das Letzte Wort — aber du musst beraten.",
          },
          {
            text: "Halbsitzende Lagerung 30° erhöhter Oberkörper wäre besser bei Bronchiolitis",
            isCorrect: false,
            explanation:
              "Falsch. 30° Oberkörperhochlagerung ist für Erwachsene bei Atemwegsproblemen etabliert — nicht für Säuglinge. Das SIDS-Risiko durch Kopfabknicken ist bei Säuglingen in dieser Position erhöht. Rückenlage gilt.",
            explanationB1:
              "Falsch. Das gilt für Erwachsene, nicht für Säuglinge. Für Emilia gilt: Rücken, flach, ohne Kissen.",
          },
        ],
      },
    },

    // Step 3.5 — Sequencing: Maßnahmen priorisieren
    {
      stepId: "ce02-emilia-plan-05-prioritäten-seqüncing",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-emilia-plan-prioritäten",
      tag: "pflege",
      contentC1: {
        title: "Maßnahmen in der richtigen Reihenfolge — nächste Stunde",
        body: "Bringe die geplanten Maßnahmen für die nächste Stunde in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was kommt zürst?",
        body: "Bringe die Maßnahmen für die nächste Stunde in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Maßnahmen in die sinnvolle Reihenfolge für die nächste Stunde.",
        sequencing: {
          instruction:
            "In welcher Reihenfolge führst du die Maßnahmen durch?",
          items: [
            {
              id: "p1",
              label:
                "Nasensekret sanft absaugen (oder NaCl-Tropfen) vor dem Trinkversuch",
            },
            {
              id: "p2",
              label:
                "Trinkversuch: Mutter stillt, du beobachtest und dokumentierst",
            },
            {
              id: "p3",
              label: "Windel wechseln und Windel wiegen (Ausfuhr-Dokumentation)",
            },
            {
              id: "p4",
              label: "Emilia 15 Minuten in aufrechter Position halten",
            },
            {
              id: "p5",
              label:
                "Dokumentation: Trinkversuch, Windelgewicht, Hautzustand prüfen",
            },
          ],
        },
      },
    },
  ],
  optionaleSteps: [
    // Step 3.6 — Calculation: Bilanz berechnen
    {
      stepId: "ce02-emilia-plan-opt-bilanz-berechnung",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-plan-bilanz-berechnung",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Flüssigkeitsbilanz berechnen — Beispiel Emilia",
        body: "Emilia hat heute getrunken (geschätzt): 4× je 60 ml + 1× 40 ml = **280 ml Einfuhr**.\n\nWindeln: 3 Windeln mit Nassgewicht-Überschuss 30 g, 40 g, 25 g = **95 ml Ausfuhr** (1 Stuhl nicht bilanziert).\n\nBilanz: 280 ml − 95 ml = **+185 ml** (positive Bilanz).\n\nWas bedeutet das? Positive Bilanz: mehr rein als raus — grundsätzlich gut. Aber: 280 ml ist deutlich unter dem Tagesbedarf von ~800-900 ml für einen 4-monatigen Säugling. Die Bilanz ist positiv, aber die absolute Trinkmenge bleibt zu niedrig. Maßnahmen bleiben notwendig.",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
      contentB1: {
        title: "Bilanz berechnen — Beispiel",
        body: "Emilia hat heute getrunken: 280 ml gesamt.\n\nWindeln: 3 Windeln = 95 ml Urin.\n\nBilanz: 280 − 95 = +185 ml.\n\nDas ist positiv (mehr rein als raus) — gut. Aber: 280 ml ist viel zu wenig. Emilia braucht ~800-900 ml pro Tag. Die Maßnahmen müssen weitergehen.",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
    },

    // Step 3.7 — Flipcard: Pflegeprozess-Verbindung
    {
      stepId: "ce02-emilia-plan-opt-pflegeprozess-verbindung",
      phase: 3,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-plan-pflegeprozess",
      tag: "pflege",
      contentC1: {
        title: "Was kommt nach der Planung?",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Pflegeprozess"],
      },
      contentB1: {
        title: "Was kommt nach dem Planen?",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Pflegeprozess"],
      },
      question: {
        fragetext: "Was kommt NACH der Planung im Pflegeprozess?",
        flipcard: {
          instruction: "Klappe die Karte um.",
          cards: [
            {
              front: "Was kommt NACH der Planung im Pflegeprozess?",
              back: "Durchführung der Maßnahmen — du setzt jetzt das um was du geplant hast. Danach kommt die Evaluation: Hat es gewirkt? Das ist der 6-Schritte-Kreislauf nach Fiechter/Meier (1981).",
              backB1:
                "Jetzt kommt die Durchführung — du machst was du geplant hast. Danach prüfst du: Hat es geholfen? (= Evaluation). So ist der Pflegeprozess — immer ein Kreislauf.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 20,
};
