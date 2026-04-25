// CE-02 Situation Frau Schmidt — Phase 3: Pflege planen
// Steps: 6 · Bloom: B3–B5 · Zeit: ~25–35 Min
// Quelle: phase-planen.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_PLANEN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Du hast das Assessment abgeschlossen. Du sitzt kurz auf dem Stuhl neben Frau Schmidts Bett und schreibst deine Notizen. Frau Schmidt schaut aus dem Fenster. Frau Bayraktar taucht kurz auf: 'Wie war das Assessment?' Du fasst zusammen. Sie nickt: 'Gut. Dann mach jetzt den Pflegeplan. Heute Nachmittag kommt die Ernährungsberaterin, das haben wir schon angefordert. Deine Aufgabe ist das Gespräch am Vormittag und die Hautpflege.'",
  kontextB1:
    "Du hast das Assessment gemacht. Jetzt weißt du: Was hat Frau Schmidt? Was braucht sie? Du schreibst Notizen. Frau Schmidt wartet ruhig. Deine Praxisanleiterin sagt: \"Gut! Mach jetzt den Pflegeplan.\" Heute Nachmittag kommt die Ernährungs-Beraterin. Deine Aufgabe heute Morgen: Gespräch mit Frau Schmidt + Haut-Pflege.",
  kernSteps: [
    // Step 3.1 — Matching: Pflegediagnosen nach PESR
    {
      stepId: "ce02-schmidt-plan-01-pflegediagnosen",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "ICS — International Continence Society: Klassifikation Belastungsinkontinenz",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-plan-pflegediagnosen",
      tag: "pflege",
      contentC1: {
        title: "Pflegediagnosen nach PESR-Schema zuordnen",
        body: "Ordne die erhobenen Probleme den passenden Pflegediagnosen zu. Drei Paare. PESR = Problem, Einflussfaktor, Symptom, Ressource.",
        glossarBegriffe: ["PESR-Schema", "Pflegediagnose"],
      },
      contentB1: {
        title: "Pflege-Diagnosen zuordnen",
        body: "Pflege-Diagnosen nach PESR (= Pflege-Problem, Einflussfaktor, Symptom, Ressource) zuordnen. Ordne zu: Welches Problem → welche Pflege-Diagnose?",
        glossarBegriffe: ["PESR-Schema", "Pflegediagnose"],
      },
      question: {
        fragetext:
          "Ordne jedes Problem der passenden Pflegediagnose zu.",
        matchingPairs: [
          {
            left: "Albumin 31 g/l, einseitige Fertigkost-Ernährung, NRS-Score 3",
            right: "Mangelernährung bezogen auf Proteinzufuhr",
          },
          {
            left: "Hautfalten submammär und inguinal, feucht, adipös, keine Rötung bisher",
            right: "Risiko für Intertrigo",
          },
          {
            left: "Unwillkürlicher Urinverlust bei körperlicher Belastung seit 2 Jahren",
            right: "Belastungsinkontinenz",
          },
        ],
      },
    },

    // Step 3.2 — Freetext: SMART-Ziel formulieren
    {
      stepId: "ce02-schmidt-plan-02-ziele-smart",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-plan-smart-ziel",
      tag: "pflege",
      contentC1: {
        title: "SMART-Pflegeziel formulieren",
        body: "Formuliere ein SMART-Ziel für das Ernährungsproblem von Frau Schmidt. SMART: Spezifisch (Protein), Messbar (Zielwert oder Mahlzeiten), Erreichbar (stationär machbar), Relevant (für Heilung und BZ-Kontrolle), Terminiert (bis wann?).",
        glossarBegriffe: ["SMART-Ziel"],
      },
      contentB1: {
        title: "SMART-Ziel schreiben",
        body: "SMART-Ziel formulieren für Frau Schmidts Ernährungs-Problem. SMART bedeutet: **S** = Spezifisch, **M** = Messbar, **A** = Erreichbar, **R** = Relevant, **T** = Terminiert (bis wann). Beispiel: \"Frau Schmidt isst bis zur Entlassung (in 5 Tagen) täglich 3 eiweiß-reiche Mahlzeiten.\"",
        glossarBegriffe: ["SMART-Ziel"],
      },
      question: {
        fragetext:
          "Formuliere ein SMART-Ziel für das Ernährungsproblem von Frau Schmidt (1–2 Sätze).",
        musterantwort:
          "Frau Schmidt nimmt bis zur Entlassung (in 5 Tagen) täglich mindestens 3 eiweißreiche Mahlzeiten zu sich (z. B. Joghurt, Ei, Hähnchen), sodass ihre Proteinzufuhr auf mindestens 60 g/Tag gesteigert wird.",
        bewertungskriterien: [
          "Spezifisch: Protein/Eiweiß als Fokus benannt",
          "Messbar: Mahlzeiten-Anzahl, Grammangabe oder Albumin-Ziel",
          "Erreichbar: stationär umsetzbar",
          "Relevant: Bezug zu Wundheilung, Immunabwehr oder BZ-Kontrolle",
          "Terminiert: bis Entlassung / in X Tagen",
        ],
        satzanfaengeB1: [
          "Frau Schmidt isst bis zur Entlassung (in ___ Tagen) täglich ___",
          "Das Ziel ist messbar, weil ___",
          "Das ist erreichbar, weil ___",
        ],
      },
    },

    // Step 3.3 — Matrix: interprofessionelles Team
    {
      stepId: "ce02-schmidt-plan-03-interprof-team",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
        "AWMF S3-Leitlinie NVL Typ-2-Diabetes (2023)",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-plan-interprofessionell",
      tag: "pflege",
      contentC1: {
        title: "Wer macht was? — Kompetenzgrenzen kennen",
        body: "Ordne die Aufgaben den Berufsgruppen zu. Zwei Achsen: Berufsgruppe (Pflege, Ernährungsberatung, Podologie, Arzt) × Aufgaben. Kompetenzgrenzen kennen ist keine Schwäche — es ist Qualitätssicherung.",
        glossarBegriffe: ["Interprofessionell", "Podologe"],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Ordne zu: Welche Aufgabe gehört zu welcher Berufsgruppe?",
        glossarBegriffe: ["Interprofessionell", "Podologe"],
      },
      question: {
        fragetext:
          "Ordne jede Aufgabe der richtigen Berufsgruppe zu. X-Achse: Sofort/Später. Y-Achse: Pflege/Spezialist.",
        matrix: {
          instruction:
            "Ordne jede Aufgabe einem Quadranten zu.",
          axisX: { label: "Zeitachse", low: "Sofort", high: "Geplant" },
          axisY: { label: "Zuständigkeit", low: "Pflege", high: "Spezialist" },
          items: [
            { id: "a1", text: "Nagelpflege Diabetikerfuß", correctQuadrant: 3 },
            { id: "a2", text: "Ernährungsplan bei Proteinmangel erstellen", correctQuadrant: 3 },
            { id: "a3", text: "Metformin-Anpassung je nach BZ-Verlauf", correctQuadrant: 4 },
            { id: "a4", text: "Hautfalten täglich inspizieren", correctQuadrant: 1 },
            { id: "a5", text: "Hautpflege Hautfalten durchführen", correctQuadrant: 1 },
            { id: "a6", text: "Inkontinenz-Versorgung besprechen und einleiten", correctQuadrant: 1 },
          ],
        },
      },
    },

    // Step 3.4 — Sequencing: Hautpflege Hautfalten planen
    {
      stepId: "ce02-schmidt-plan-04-hautpflege-planen",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie Intertrigo DDG (2022)",
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-plan-hautpflege",
      tag: "pflege",
      contentC1: {
        title: "Hautpflege der Hautfalten — Reihenfolge sichern",
        body: "Bringe die Schritte der Hautpflege für Hautfalten bei Adipositas in die richtige Reihenfolge.",
        glossarBegriffe: ["Intertrigo", "Mazerierung"],
      },
      contentB1: {
        title: "Haut-Pflege der Haut-Falten — richtige Reihenfolge",
        body: "Haut-Pflege der Haut-Falten planen — bringe in die richtige Reihenfolge.",
        glossarBegriffe: ["Intertrigo"],
      },
      question: {
        fragetext:
          "Bringe die Schritte der Hautpflege für Hautfalten in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Richtige Reihenfolge für die Pflege der Hautfalten bei Adipositas.",
          items: [
            {
              id: "h1",
              label: "Hautfalten täglich inspizieren (morgens bei der Morgenpflege)",
            },
            {
              id: "h2",
              label: "Nach dem Waschen: Falten auseinander halten und trocken TUPFEN — nie reiben",
            },
            {
              id: "h3",
              label: "Hautschutz-Lotion oder Zinkpaste dünn auftragen (nur bei trockener, intakter Haut)",
            },
            {
              id: "h4",
              label: "Auf Rötung, Mazerierung und Geruch achten",
            },
            {
              id: "h5",
              label: "Befund täglich dokumentieren",
            },
          ],
        },
      },
    },

    // Step 3.5 — Text/scenario: Mobilisationsplan
    {
      stepId: "ce02-schmidt-plan-05-mobilisation-planen",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Förderung der Mobilität",
        "Deutsche Gesellschaft für Geriatrie DGG (2022)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-plan-mobilisation",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Mobilisationsplan — kleine Schritte, große Wirkung",
        body: "09:30 Uhr — du überlegst mit Frau Schmidt gemeinsam.\n\nFrau Schmidt sagt: \"Ich hab's versucht, wirklich. Aber dann bin ich so außer Atem. Das ist mir unangenehm, wenn alle zuschauen.\"\n\nDer Schlüssel: Nicht \"Sport\" — sondern erreichbare Alltagsbewegungen. Dreimal täglich kurz aufstehen und zum Waschbecken gehen. Warum ist das wichtig? Mobilisation verbessert die Insulinsensitivität (BZ sinkt), entlastet Druckpunkte (Dekubitusprophylaxe) und aktiviert den Beckenboden (hilft bei Inkontinenz). (DNQP 2020; DGG 2022)\n\nDein Ziel: Frau Schmidt verstehen warum Bewegung ihr direkt nutzt — nicht als \"Abnahme-Programm\" verkaufen, das bei ihr Widerstand weckt.",
        fallbezug:
          "Frau Schmidt hat Angst vor dem Außer-Atem-Sein. Der Ansatz: kleine erreichbare Schritte, sofort spürbare Vorteile.",
        glossarBegriffe: ["Insulinsensitivität", "Dekubitusprophylaxe"],
      },
      contentB1: {
        title: "Mobilisations-Plan bei Übergewicht",
        body: "Du planst mit Frau Schmidt zusammen kleine Bewegungsschritte.\n\nFrau Schmidt sagt: \"Ich hab's versucht. Aber dann bin ich so außer Atem. Das ist mir unangenehm.\"\n\nWas hilft? Nicht \"Sport machen\" — das ist zu viel. Besser: Kleine Schritte — zum Beispiel dreimal täglich kurz aufstehen und zum Waschbecken gehen.\n\nWarum ist das wichtig?\n- Bewegung senkt den Blutzucker (= der Körper braucht weniger Insulin)\n- Bewegung schützt vor Dekubitus (= Druck-Stelle) — der Druck ändert sich\n- Bewegung stärkt den Beckenboden (= hilft bei Inkontinenz)",
        glossarBegriffe: ["Dekubitusprophylaxe"],
      },
    },

    // Step 3.6 — Branching: Inkontinenz-Versorgung würdevoll
    {
      stepId: "ce02-schmidt-plan-06-inkontinenz-wuerde",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "§ 2 PflBG — Ressourcenorientierte Pflege",
        "AWMF S2k-Leitlinie (2023): Diagnostik und Therapie Harninkontinenz",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-plan-inkontinenz-wuerde",
      tag: "pflege",
      contentC1: {
        title: "Inkontinenz-Versorgung — Würde wahren",
        body: "Frau Schmidt braucht eine Inkontinenzversorgung für den stationären Aufenthalt. Das Thema ist ihr unangenehm — sie hat es oben kaum angesprochen. Wie gehst du das an?",
        glossarBegriffe: ["Belastungsinkontinenz", "Ressourcenorientierung"],
      },
      contentB1: {
        title: "Inkontinenz-Versorgung — wie gehst du vor?",
        body: "Frau Schmidt braucht eine Inkontinenz-Versorgung. Das Thema ist ihr unangenehm. Wie gehst du vor?",
        glossarBegriffe: ["Belastungsinkontinenz"],
      },
      question: {
        fragetext:
          "Frau Schmidt braucht eine Inkontinenzversorgung für den stationären Aufenthalt. Wie gehst du das an?",
        branchingOptions: [
          {
            text: "Ich lege eine Vorlage aufs Bett und sage nichts — das ist weniger unangenehm für Frau Schmidt.",
            feedback:
              "Kein Informieren, keine Selbstbestimmung — Würde verletzt durch Schweigen. Frau Schmidt kann keine Entscheidung treffen, weil sie nicht gefragt wird. Auch gut gemeinte Fürsorge ohne Einbeziehung verletzt das Autonomieprinzip (§ 2 PflBG). Frau Schmidt bemerkt die Vorlage und fühlt sich übergangen.",
            feedbackB1:
              "Nein! Frau Schmidt hat keine Wahl. Das ist nicht respektvoll. Frau Schmidt hat das Recht zu entscheiden. Ohne Fragen ist das eine Verletzung ihrer Würde.",
            isCorrect: false,
          },
          {
            text: "\"Frau Schmidt, ich würde Ihnen eine diskrete Versorgung empfehlen, damit Sie sich sicher fühlen. Darf ich erklären, was wir haben?\"",
            feedback:
              "Richtig. Diskret, informiert, selbstbestimmt. Du erklärst ohne zu urteilen, bietest Optionen an, lässt Frau Schmidt entscheiden. Das ist ressourcenorientierte Pflege nach § 2 PflBG — stärken was da ist, nicht übernehmen was noch geht.",
            feedbackB1:
              "Richtig! Diskret (= niemand sieht es) und informiert — so bleibt Frau Schmidt in ihrer Würde. Sie kann selbst entscheiden.",
            isCorrect: true,
          },
          {
            text: "Ich trage es einfach im Pflegebericht ein, der Arzt entscheidet dann.",
            feedback:
              "Pflege darf nicht schweigen. Inkontinenz-Beratung und Versorgung ist Pflegeaufgabe — nicht Arztaufgabe. Wer delegiert, was er selbst können muss, verletzt den Beratungsauftrag der Pflege (DNQP 2017). Frau Schmidt erhält keine Beratung und keine Entscheidungsgrundlage.",
            feedbackB1:
              "Nein! Beratung und Versorgung bei Inkontinenz ist Pflege-Aufgabe. Du musst Frau Schmidt informieren und mit ihr entscheiden — nicht auf den Arzt warten.",
            isCorrect: false,
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 30,
};
