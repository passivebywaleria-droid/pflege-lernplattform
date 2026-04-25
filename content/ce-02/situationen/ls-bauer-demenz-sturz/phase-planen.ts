// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 3: Pflege planen
// Steps: 6 (4 Kern + 2 Optional) · Bloom: B3-B4
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-planen.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_PLANEN: SituationsPhase = {
  phaseId: "ls-bauer-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Du hast Herrn Bauer beobachtet. Du hast Informationen gesammelt. Jetzt musst du entscheiden, was zu tun ist — nicht nach Bauchgefühl, sondern nach System. Der Pflegeprozess verlangt, dass du Ziele formulierst, bevor du handelst. Was soll nach einer Woche anders sein als heute? Drei Problemfelder warten auf deinen Plan: 1) Sturzgefahr — Herr Bauer ist letzte Nacht gestürzt. 2) Körperpflege und Kontraktur — er lehnt Pflege ab. 3) Trinken und Mundschleimhaut — 900 ml sind zu wenig.",
  kontextB1:
    "Du weißt jetzt: Herr Bauer hat drei große Probleme. Erstens: Er kann wieder stürzen. Zweitens: Seine Knie werden steifer, weil er Körperpflege ablehnt. Drittens: Er trinkt zu wenig. Für jedes Problem brauchst du: ein Ziel und eine Maßnahme.",
  kernSteps: [
    // Step 3.1 — Freetext: Pflegeziele formulieren
    {
      stepId: "ce02-bauer-plan-01-ziele-formulieren",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier (1981): Pflegeprozess-Modell"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-plan-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele formulieren",
        body: "Formuliere für ZWEI der drei Problemfelder je ein messbares Pflegeziel. Hinweis: Ein Pflegeziel nennt, was der Patient in X Tagen zeigen/können/erleben soll — konkret und überprüfbar.",
        glossarBegriffe: ["Pflegeziel", "Pflegeprozess", "messbar"],
      },
      contentB1: {
        title: "Pflegeziele schreiben",
        body: "Schreibe für ZWEI Probleme je ein Pflegeziel. Ein Pflegeziel sagt: Was soll Herr Bauer in X Tagen zeigen oder schaffen? Es muss messbar sein (= man kann prüfen ob es erreicht wurde).",
        glossarBegriffe: ["Pflegeziel", "messbar"],
      },
      question: {
        fragetext:
          "Formuliere für zwei der drei Problemfelder (Sturzgefahr / Kontraktur / Trinken) je ein messbares Pflegeziel.",
        musterantwort:
          "Sturzgefahr: Herr Bauer stürzt in den nächsten 7 Tagen nicht erneut, nachdem Nachtlicht, Niedrigbett und Toilettenangebot vor dem Schlafengehen eingeführt wurden. — Trinken: Herr Bauer nimmt täglich mindestens 1300 ml Flüssigkeit zu sich, ermöglicht durch Malzbier-Angebot und Trinkprotokoll.",
        bewertungskriterien: [
          "Pflegeziel ist messbar (konkrete Zahl oder beobachtbares Verhalten)",
          "Zeitrahmen genannt (z. B. in 7 Tagen)",
          "Patientenorientiert formuliert (nicht: 'die Pflege soll...')",
        ],
        satzanfaengeB1: [
          "Herr Bauer stürzt in den nächsten ... Tagen nicht, weil ...",
          "Herr Bauer trinkt täglich mindestens ... ml, indem ...",
          "Herrn Bauers Knie können sich ... bewegen nach ...",
        ],
      },
    },

    // Step 3.2 — Matching: Sturzprophylaxe-Maßnahmen
    {
      stepId: "ce02-bauer-plan-02-sturzprophylaxe-massnahmen",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-bauer-plan-sturzschutz",
      tag: "pflege",
      contentC1: {
        title: "Sturzschutz-Maßnahmen zuordnen",
        body: "Welche Sturzschutz-Maßnahme gehört zu welchem Sturzrisiko? Ordne die 5 Paare zu.",
        glossarBegriffe: ["Sturzprophylaxe", "Niedrigbett", "Sensormatte"],
      },
      contentB1: {
        title: "Welche Maßnahme passt wozu?",
        body: "Verbinde jede Maßnahme mit ihrem passenden Sturzrisiko.",
        glossarBegriffe: ["Sturzprophylaxe", "Nachtlicht", "Niedrigbett"],
      },
      question: {
        fragetext:
          "Ordne jede Sturzschutz-Maßnahme dem passenden Risikofaktor zu.",
        matchingPairs: [
          {
            left: "Nachtlicht + Sensormatte am Bett",
            right: "Desorientierung in der Nacht",
          },
          {
            left: "Niedrigbett-Position zur Nacht",
            right: "Sturzfolgen reduzieren (Höhe verringern)",
          },
          {
            left: "Tagesstruktur mit Beschäftigungsangeboten",
            right: "Unruhe und Weglauftendenz",
          },
          {
            left: "Toilettengang vor dem Schlafengehen anbieten",
            right: "Nächtlicher Harndrang als Aufsteh-Auslöser",
          },
          {
            left: "Rutschfeste Socken",
            right: "Bodenkontakt beim unerwarteten Aufstehen",
          },
        ],
      },
    },

    // Step 3.3 — Sequencing: Bewegungsablauf Morgenpflege planen
    {
      stepId: "ce02-bauer-plan-03-bewegungsplan",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bienstein C./Fröhlich A. (2021)",
        "DNQP Kontrakturprophylaxe 2014",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-plan-bewegungsablauf",
      tag: "pflege",
      contentC1: {
        title: "Bewegungsablauf Morgenpflege planen",
        body: "Plane den Bewegungsablauf für die Morgenpflege bei Herrn Bauer. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Basale Stimulation", "Spitzfußprophylaxe", "Kontrakturprophylaxe"],
      },
      contentB1: {
        title: "Reihenfolge der Morgenpflege",
        body: "Bringe die Schritte der Morgenpflege in die richtige Reihenfolge.",
        glossarBegriffe: ["Basale Stimulation", "Spitzfuß", "Bewegung"],
      },
      question: {
        fragetext:
          "Sortiere die Schritte des Bewegungsablaufs bei der Morgenpflege in die richtige Reihenfolge (1 = zuerst).",
        sequencing: {
          instruction: "Ziehe die Karten in die richtige Reihenfolge.",
          items: [
            {
              id: "b1",
              label:
                "Raum vorbereiten — Pflegemittel bereitstellen, Zimmer angenehm warm",
            },
            {
              id: "b2",
              label:
                "Kontakt herstellen — Namen nennen, ankündigen was du tust",
            },
            {
              id: "b3",
              label:
                "Körperpflege mit Basaler Stimulation (beruhigend, in Haarwuchsrichtung)",
            },
            {
              id: "b4",
              label:
                "Passive Kniebewegung während/nach Pflege — maximal bis schmerzfreie Grenze",
            },
            {
              id: "b5",
              label:
                "Spitzfuß-Prophylaxe: Fußsohle gegen Brett oder weiches Kissen stellen",
            },
            {
              id: "b6",
              label:
                "Lagerungskontrolle — Knie nicht dauerhaft flektiert lassen, auspolstern",
            },
          ],
        },
      },
    },

    // Step 3.4 — Matrix: Interprofessionelle Zuständigkeiten
    {
      stepId: "ce02-bauer-plan-04-interprofessionell",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "Interdisziplinäre Pflegestandards",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-plan-interprofessionalitaet",
      tag: "pflege",
      contentC1: {
        title: "Interprofessionelle Matrix: Wer macht was wann?",
        body: "Ordne jede Maßnahme in die Matrix ein: Zeilen = Berufsgruppe (Pflege / Physiotherapie / Arzt), Spalten = Zeitrahmen (Heute / Diese Woche).",
        glossarBegriffe: [
          "Interdisziplinär",
          "Physiotherapie",
          "Mirtazapin",
        ],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Ordne die Maßnahmen zu: Wer macht es (Pflege, Physiotherapie, Arzt)? Und wann (Heute oder Diese Woche)?",
        glossarBegriffe: ["Physiotherapie", "Arzt", "Pflege"],
      },
      question: {
        fragetext:
          "Ordne jede Maßnahme einem Quadranten zu: Pflege/Heute (Q1), Arzt/Heute (Q2), Pflege/Diese Woche (Q3), Physiotherapie/Diese Woche (Q4).",
        matrix: {
          instruction:
            "Ordne jede Maßnahme einem Quadranten zu. Achse X: Heute ↔ Diese Woche. Achse Y: Pflege ↔ Arzt/Physio.",
          axisX: {
            label: "Zeitrahmen",
            low: "Heute (sofort)",
            high: "Diese Woche",
          },
          axisY: {
            label: "Berufsgruppe",
            low: "Pflege",
            high: "Arzt / Physiotherapie",
          },
          items: [
            {
              id: "p1",
              text: "Nachtlicht und Niedrigbett einrichten",
              correctQuadrant: 1,
            },
            {
              id: "p2",
              text: "Sturzprotokoll vervollständigen",
              correctQuadrant: 1,
            },
            {
              id: "p3",
              text: "Trinkprotokoll einführen",
              correctQuadrant: 1,
            },
            {
              id: "p4",
              text: "Mirtazapin-Dosis prüfen lassen (sediert, erhöht Sturzrisiko)",
              correctQuadrant: 2,
            },
            {
              id: "p5",
              text: "Tochter Ingrid über Sturzgeschehen informieren",
              correctQuadrant: 1,
            },
            {
              id: "p6",
              text: "Passives Durchbewegen Knie täglich durch Physio",
              correctQuadrant: 4,
            },
          ],
        },
      },
    },
  ],

  optionaleSteps: [
    // Step 3.5 — Checklist: Trinken bei Demenz
    {
      stepId: "ce02-bauer-plan-05-trinken-strategie",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Förderung Harnkontinenz 2014"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-trinken",
      tag: "krankheitslehre",
      displayFormat: "checklist",
      contentC1: {
        title: "Trinkmenge erhöhen bei Demenz — 5 Strategien",
        body: "Herr Bauer trinkt auf Aufforderung nicht. Wie erhöhst du die Trinkmenge trotzdem? 5 Strategien die funktionieren:\n\n✓ Tasse in die Hand geben — nicht bitten: Er trinkt bereitwilliger wenn er eine Tasse in der Hand hält.\n✓ Lieblingsgetränk: Malzbier (aus Biographie bekannt) bereitstellen — erhöht Trinkmotivation.\n✓ Trinken im sozialen Kontext: Frühstück, Mittagessen — kein isoliertes Trinken.\n✓ Flüssigkeitsreiche Lebensmittel: Suppe, Joghurt, Wassermelone — zählen zur Flüssigkeitsbilanz.\n✓ Miktionsprotokoll führen — um die Tendenz zu erkennen und den Plan zu justieren.\n\nQuelle: DNQP Förderung der Harnkontinenz (2014).",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Miktionsprotokoll", "Exsikkose"],
      },
      contentB1: {
        title: "Wie trinkt Herr Bauer mehr?",
        body: "Herr Bauer trinkt nicht, wenn man ihn bittet. Wie geht das trotzdem? 5 Strategien:\n\n✓ Tasse in die Hand geben — er trinkt dann besser.\n✓ Malzbier anbieten — das mag er (aus seiner Lebensgeschichte bekannt).\n✓ Beim Essen trinken — nicht alleine.\n✓ Suppe und Joghurt geben — das zählt auch als Trinken.\n✓ Aufschreiben wie viel er trinkt — dann weißt du wie es sich verändert.",
        glossarBegriffe: ["Flüssigkeit", "Exsikkose"],
      },
    },

    // Step 3.6 — TrueFalse: Freiheitsentziehung rechtlich
    {
      stepId: "ce02-bauer-plan-06-freiheitsentziehung",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 1831 BGB", "DNQP Sturzprophylaxe 2022"],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-bauer-plan-rechtliches",
      tag: "pflege",
      contentC1: {
        title: "Freiheitsentziehende Maßnahmen — richtig/falsch?",
        body: "Rechtliche Fragen rund um Sturzschutz bei Demenz. Welche Aussagen stimmen?",
        glossarBegriffe: [
          "Freiheitsentziehende Maßnahme",
          "§ 1831 BGB",
          "Richterliche Genehmigung",
        ],
      },
      contentB1: {
        title: "Darf ich das? — Rechtliche Fragen",
        body: "Was darf die Pflege bei Herrn Bauer tun? Welche Aussagen stimmen?",
        glossarBegriffe: ["Freiheitsentziehung", "Genehmigung", "Bettgitter"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Ein Bettgitter darf bei Herrn Bauer ohne Genehmigung hochgestellt werden, wenn er in der Nacht weglaufen will.",
            isTrue: false,
            explanation:
              "Falsch — Bettgitter ist eine freiheitsentziehende Maßnahme. § 1831 BGB verlangt richterliche Genehmigung oder Einwilligung des rechtlichen Betreuers. Nur im Notfall (akute Sturz-Gefahr) kurzzeitig erlaubt.",
          },
          {
            statement:
              "Ein Niedrigbett (Pflegebett in unterster Position) ist keine freiheitsentziehende Maßnahme.",
            isTrue: true,
            explanation:
              "Richtig — ein Niedrigbett schränkt die Bewegungsfreiheit nicht ein. Es ist eine Sicherheitsmaßnahme ohne Fixierung. Keine Genehmigung erforderlich, aber Einwilligung des Betreuers ist empfehlenswert.",
          },
          {
            statement:
              "Sensormatten am Boden neben dem Bett (Alarm bei Bodenberührung) gelten als freiheitsentziehende Maßnahme.",
            isTrue: false,
            explanation:
              "Falsch — Sensormatten schränken die Bewegungsfreiheit nicht ein. Sie lösen nur Alarm aus. Sie gelten rechtlich nicht als Fixierung. Einwilligung des Betreuers wird dennoch empfohlen.",
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
