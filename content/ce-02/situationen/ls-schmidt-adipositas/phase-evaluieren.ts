// CE-02 Situation Frau Schmidt — Phase 5: Evaluieren
// Steps: 5 + 1 Inline-Wissen · Bloom: B2–B6 · Zeit: ~25–35 Min
// Quelle: phase-evaluieren.md + inline-wissen-generator

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren",
  titelB1: "Auswerten — was hat sich verändert?",
  kontext:
    "Szenen-Sprung: 48 Stunden später. Frau Schmidt ist seit 5 Tagen stationär, Entlassung ist für übermorgen geplant. Du übernimmst sie wieder im Frühdienst. Die Ernährungsberaterin war gestern, die Podologin hat heute Morgen den ersten Termin. Der BZ-Verlauf liegt vor. Du willst wissen: Was hat sich verändert? Was nicht? Was war gut an der Pflege — was muss besser werden?",
  kontextB1:
    "48 Stunden sind vergangen. Frau Schmidt ist jetzt seit 5 Tagen hier. Übermorgen kommt sie nach Hause. Heute Morgen übernimmst du sie wieder im Frühdienst. Gestern war die Ernährungs-Beraterin da. Heute Morgen kam die Podologin (= Fußpflege-Spezialistin) zum ersten Mal. Du hast den Blutzucker-Verlauf der letzten 5 Tage vor dir. Du fragst dich: Was hat sich verbessert? Was nicht? Was war gute Pflege?",
  kernSteps: [
    // Step 5.1 — Timeline: BZ-Verlauf über 5 Tage
    {
      stepId: "ce02-schmidt-eval-01-bz-verlauf",
      phase: 5,
      stepType: "timeline",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Deutsche Diabetes Gesellschaft / DDG (2023): Praxisempfehlungen Diabetes Typ 2",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-eval-bz-verlauf",
      tag: "krankheitslehre",
      contentC1: {
        title: "BZ-Tagesprofil — 5 Tage stationär",
        body: "Interpretiere den BZ-Verlauf von Frau Schmidt. Zielbereich: nüchtern < 130 mg/dl, postprandial < 180 mg/dl (DDG 2023). Was fällt dir auf? Ist sie auf dem richtigen Weg?",
        glossarBegriffe: ["Blutzucker-Tagesprofil", "Postprandial"],
      },
      contentB1: {
        title: "Blutzucker über 5 Tage — Zeitstrahl",
        body: "Zeitstrahl: Blutzucker (= BZ) von Frau Schmidt über 5 Tage. Ziel: Nüchtern unter 130, nach dem Essen unter 180. Was fällt dir auf?",
        glossarBegriffe: ["Blutzucker-Tagesprofil"],
      },
      question: {
        fragetext:
          "Betrachte den BZ-Verlauf und beantworte: Ist Frau Schmidt auf dem richtigen Weg?",
        timeline: {
          instruction:
            "Analysiere den BZ-Tagesprofil-Zeitstrahl. Zielbereich: nüchtern < 130 mg/dl, postprandial < 180 mg/dl.",
          events: [
            {
              id: "tag1",
              time: "Tag 1 (Aufnahme)",
              title: "BZ nüchtern: 398 mg/dl",
              description:
                "Einlieferung wegen entgleistem BZ (398 mg/dl). Noch keine Medikation, keine Ernährungsintervention.",
              descriptionB1:
                "Bei der Einlieferung: 398 mg/dl — sehr hoch. Noch kein Medikament, keine Ernährungs-Hilfe.",
              highlight: true,
            },
            {
              id: "tag2",
              time: "Tag 2",
              title: "BZ nüchtern: 287 / postprandial: 354 mg/dl",
              description:
                "Erster Tag mit Metformin. Leichte Besserung nüchtern — postprandial noch deutlich erhöht.",
              descriptionB1:
                "Erster Tag mit Metformin. Etwas besser — aber postprandial noch viel zu hoch.",
            },
            {
              id: "tag3",
              time: "Tag 3 (du warst da)",
              title: "BZ nüchtern: 187 / postprandial: 254 mg/dl",
              description:
                "Dein Einsatztag. Ernährungsgespräch geführt, Hautpflege durchgeführt, Podologen-Überweisung initiiert. BZ besser, aber noch außerhalb Zielbereich.",
              descriptionB1:
                "Dein Einsatztag. Ernährungs-Gespräch geführt. BZ: 187 nüchtern, 254 nach dem Essen — besser, aber noch zu hoch.",
            },
            {
              id: "tag4",
              time: "Tag 4",
              title: "BZ nüchtern: 165 / postprandial: 212 mg/dl",
              description:
                "Deutliche Besserung. Ernährungsberaterin hat gestern eingegriffen. Erster Tag mit eiweißreichen Mahlzeiten nach Plan.",
              descriptionB1:
                "Deutlich besser! Die Ernährungs-Beraterin hat gestern geholfen. Erster Tag mit mehr Protein.",
            },
            {
              id: "tag5",
              time: "Tag 5 (heute)",
              title: "BZ nüchtern: 148 / postprandial: 189 mg/dl",
              description:
                "Fast im Zielbereich. Nüchtern-BZ nähert sich dem Ziel (< 130). Postprandial noch leicht über Ziel (< 180). Positiver Trend eindeutig — Entlassung übermorgen realistisch.",
              descriptionB1:
                "Fast im Ziel-Bereich! Nüchtern: 148 (Ziel: unter 130). Nach dem Essen: 189 (Ziel: unter 180). Der Trend ist positiv. Entlassung übermorgen ist realistisch.",
              highlight: true,
            },
          ],
        },
      },
    },

    // Step 5.2 — Categorize: Pflegeziele auswerten
    {
      stepId: "ce02-schmidt-eval-02-pflegeziele-erreicht",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "AWMF S2k-Leitlinie Intertrigo DDG (2022)",
        "Cederholm T. et al. (2019): GLIM-Kriterien — Halbwertszeit Albumin/Präalbumin/Transferrin",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-eval-ziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele auswerten — Soll-Ist-Vergleich",
        body: "Bewertet die drei Pflegeziele aus Phase 3. Bloom 4: Soll-Ist-Vergleich.",
        glossarBegriffe: ["Evaluation", "Pflegeziel"],
      },
      contentB1: {
        title: "Pflege-Ziele bewerten",
        body: "Bewerte die 3 Pflege-Ziele aus Phase 3.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Bewerte: Welches Pflegeziel ist erreicht / teilweise erreicht / noch offen?",
        categories: [
          { name: "Erreicht" },
          { name: "Teilweise erreicht" },
          { name: "Noch offen / weiterlaufend" },
        ],
        categoryItems: [
          {
            text: "Ziel 1 — Proteinzufuhr steigt (täglich 3 eiweißreiche Mahlzeiten): Beratung erfolgt, BZ besser, aber Albumin braucht 2–4 Wochen um zu steigen (Halbwertszeit Albumin: 15–20 Tage). Vertiefung: Für kurzfristige Verlaufskontrolle wäre Präalbumin (HWZ 2 Tage) oder Transferrin (HWZ 8 Tage) sensitiver",
            correctCategory: 1,
          },
          {
            text: "Ziel 2 — Hautfalten täglich gepflegt, keine Intertrigo: Dokumentation zeigt tägliche Pflege, kein pathologischer Befund",
            correctCategory: 0,
          },
          {
            text: "Ziel 3 — Inkontinenzversorgung mit Würde, Selbstpflege soweit möglich: Frau Schmidt wechselt selbst, Versorgung diskret",
            correctCategory: 0,
          },
          {
            text: "Meilenstein (kein Pflegeziel) — Podologen-Termin heute Morgen: erster Termin erfolgt, ambulante Podologie für nach Entlassung einleiten",
            correctCategory: 1,
          },
        ],
      },
    },

    // Step 5.3 — Text/quote: Patientenzitat Abschluss
    {
      stepId: "ce02-schmidt-eval-03-patientenzitat-schluss",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-eval-zitat",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Frau Schmidts Abschlusszitat",
        body: "> \"Wissen Sie, was mich überrascht hat? Dass mein Essen so viel mit dem Zucker zu tun hat. Ich hab gedacht, das ist einfach mein Schicksal.\"\n\nFrau Schmidts Aussage ist mehr als ein Dank — sie zeigt, dass Informationsvermittlung und Beziehungsaufbau zusammen wirken. \"Ich hab gedacht, das ist mein Schicksal\" signalisiert erlernte Hilflosigkeit — das Gegenteil von dem, was Pflege anstrebt. \"Das kann man ändern\" ist der Wendepunkt: Wenn Menschen verstehen warum, entstehen Motivation und Eigenverantwortung. Das ist Pflegeaufgabe.",
        glossarBegriffe: ["Erlernte Hilflosigkeit", "Gesundheitskompetenz"],
      },
      contentB1: {
        title: "Frau Schmidt sagt:",
        body: "> \"Wissen Sie, was mich überrascht hat? Dass mein Essen so viel mit dem Zucker zu tun hat. Ich hab gedacht, das ist einfach mein Schicksal.\"\n\nWas bedeutet das? Frau Schmidt glaubte: \"Ich kann nichts ändern. Das ist einfach so.\" Jetzt denkt sie: \"Ich kann etwas tun.\" Das ist Pflegearbeit: Verstehen ermöglicht Veränderung. Wenn jemand versteht WARUM, will er auch handeln.",
        glossarBegriffe: [],
      },
    },

    // Step 5.4 — Freetext: Reflexion Beratungsgespräch
    {
      stepId: "ce02-schmidt-eval-04-reflexion-beratungsgesprach",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "Miller & Rollnick (2012): Motivational Interviewing",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Reflexion — Ernährungsgespräch",
        body: "Offene Reflexionsfrage: Was war der Unterschied zwischen Pfad A (Verbotsliste) und Pfad B (Biographie zuerst) in deinem Gespräch mit Frau Schmidt — und was nimmst du daraus für zukünftige Ernährungsgespräche mit?",
        glossarBegriffe: ["Motivierende Gesprächsführung", "Autonomie"],
      },
      contentB1: {
        title: "Reflexion — was nimmst du mit?",
        body: "Was war der Unterschied zwischen den zwei Wegen im Ernährungs-Gespräch?\n**Weg A:** Du hast eine Verbots-Liste gemacht. Frau Schmidt hat abgeschaltet.\n**Weg B:** Du hast zuerst gefragt — zugehört — dann erklärt.\nWas nimmst du mit?\nTipp: Frau Schmidt hat eine lange Geschichte mit Essen. Verbote erinnern sie an alte Misserfolge. Fragen öffnen — Verbote schließen.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was war der Unterschied zwischen Pfad A (Verbotsliste) und Pfad B (Biographie zuerst) — und was nimmst du mit? (2–3 Sätze)",
        musterantwort:
          "Pfad A hat Frau Schmidts Widerstand aktiviert, weil Verbotslisten an vergangene Diät-Misserfolge erinnern und keine Beziehung zum Menschen herstellen. Pfad B hat zuerst Verstehen ermöglicht — durch Zuhören entstand Vertrauen und Frau Schmidt öffnete sich. Für zukünftige Ernährungsgespräche nehme ich mit: Biographie zuerst, Fragen vor Aussagen, keine Verbote sondern konkrete erreichbare Schritte.",
        bewertungskriterien: [
          "Autonomieprinzip: Patient entscheidet selbst",
          "Motivierende Gesprächsführung: Fragen vor Aussagen",
          "Biographie als Grundlage für Ernährungsberatung",
          "Verbotslisten vs. ressourcenorientierter Ansatz",
        ],
        satzanfaengeB1: [
          "Pfad A hat nicht geholfen, weil ___",
          "Pfad B hat besser geklappt, weil ___",
          "Für das nächste Gespräch nehme ich mit: ___",
        ],
      },
    },

    // Step 5.5 — Selfrating: Konfidenz nachher (Spiegel zu Phase 1)
    {
      stepId: "ce02-schmidt-eval-05-konfidenz-nachher",
      phase: 5,
      stepType: "selfrating",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-schmidt-eval-confidence-nachher",
      tag: "pflege",
      contentC1: {
        title: "Wie sicher bist du jetzt?",
        body: "Zweite Konfidenz-Frage — Spiegel zu Phase 1, Step 1.2. Vergleiche mit deiner Ausgangsbewertung: Wie weit hat sich deine Sicherheit im Umgang mit dem Thema verändert? Kein richtig/falsch — ehrliche Selbstwahrnehmung.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie sicher bist du jetzt?",
        body: "Frage: Wie sicher fühlst du dich jetzt, das Thema Übergewicht und Ernährung anzusprechen? Vergleiche mit deiner Antwort in Phase 1. Hat sich dein Gefühl verändert?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich jetzt, das Thema Adipositas und Ernährungsberatung in einem Pflegegespräch anzusprechen?",
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 25,
};
