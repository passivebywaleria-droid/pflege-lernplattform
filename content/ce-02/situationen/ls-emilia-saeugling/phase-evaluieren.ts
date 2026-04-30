// CE-02 Situation Baby Emilia — Phase 5: Evaluieren & Anpassen
// Steps: 4 Kern + 1 Optional · Bloom: B4-B5 · Zeit: ~10-15 Min
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/phase-evaluieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-emilia-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — Hat es gewirkt?",
  titelB1: "Evaluieren — Was hat geholfen?",
  kontext:
    "Szenen-Sprung: Es ist 14:00 Uhr, Nachmittag desselben Tages. Du kommst nach deiner Pause zurück zu Zimmer 8. Emilia hat in den letzten 4 Stunden zweimal getrunken — je etwa 50-60 ml, besser als am Morgen. Windeln in den letzten 12 Stunden: bisher 4 (Ziel: 5 pro Tag). Fieber jetzt 37,6 °C (leicht gesunken). Laura schläft kurz in der Besucherliege. Andrea bittet dich, die Evaluation für die Nachmittagsdokumentation vorzubereiten.",
  kontextB1:
    "Es ist 14:00 Uhr. Du kommst zurück zu Zimmer 8. Emilia hat zweimal getrunken — je ~50-60 ml. Besser als heute Morgen. Bisher 4 nasse Windeln in 12 Stunden (Ziel: 5). Fieber: 37,6 °C (etwas weniger als heute Morgen). Laura schläft in der Besucherliege. Andrea sagt: \"Mach die Evaluation für die Doku.\"",
  kernSteps: [
    // Step 5.1 — Categorize: Maßnahmen nach Wirksamkeit
    {
      stepId: "ce02-emilia-eval-01-ziel-wirksamkeit",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-emilia-eval-wirksamkeit",
      tag: "pflege",
      contentC1: {
        title: "Maßnahmen nach Wirksamkeit bewerten",
        body: "Du schaust auf die umgesetzten Maßnahmen. Ordne sie den drei Kategorien zu: Ziel erreicht / Ziel teilweise erreicht / Noch offen.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was hat gewirkt?",
        body: "Sortiere die Maßnahmen: Ziel erreicht? Teilweise? Noch offen?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne jede Maßnahme der richtigen Kategorie zu.",
        categories: [
          { name: "Wirkt — Ziel erreicht" },
          { name: "Teils wirksam — Ziel nicht vollständig erreicht" },
          { name: "Noch offen — Maßnahme läuft" },
        ],
        categoryItems: [
          {
            text: "Nasenpflege vor dem Trinken",
            correctCategory: 0,
          },
          {
            text: "Rückenlage beim Schlafen heute durchgehend umgesetzt",
            correctCategory: 0,
          },
          {
            text: "Laura zum Schlafen ermutigt",
            correctCategory: 0,
          },
          {
            text: "Zimmertemperatur auf 20-22 °C gehalten",
            correctCategory: 0,
          },
          {
            text: "Häufigere kürzere Stillmahlzeiten",
            correctCategory: 1,
          },
          {
            text: "Flüssigkeitsbilanz führen — Ziel 5 Windeln noch nicht ganz erreicht",
            correctCategory: 2,
          },
          {
            text: "Mutter Laura aktiv beim Wickeln anleiten — bisher nur beim Baden begleitet",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 5.2 — Text (quote): Lauras Zitat Z6
    {
      stepId: "ce02-emilia-eval-02-laura-zitat-abschluss",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-eval-zitat",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Lauras Satz — und was er bedeutet",
        body: "Als du ins Zimmer kommst, wacht Laura kurz auf und sagt:\n\n> *\"Danke. Ich glaube ich hatte nicht gewusst, dass die Nase der Grund ist. Das klingt jetzt komisch, aber das beruhigt mich irgendwie.\"*\n\nLauras Satz zeigt, was Pflegeberatung leisten kann: Wenn Menschen den Grund verstehen, fühlen sie sich weniger ausgeliefert. Das ist mehr als Information — es ist Handlungskompetenz zurückgeben. Das gilt für alle Pflegesituationen: Erklären warum ist oft wichtiger als erklären was. Laura hat heute nicht nur eine kranke Tochter erlebt — sie hat verstanden, was passiert. Das ist der Unterschied.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Lauras Satz",
        body: "Als du reinkommst, sagt Laura:\n\n> *\"Danke. Ich glaube ich hatte nicht gewusst, dass die Nase der Grund ist. Das klingt jetzt komisch, aber das beruhigt mich irgendwie.\"*\n\nWas bedeutet das? Laura hat heute nicht nur eine kranke Tochter erlebt. Sie hat verstanden warum es so ist. Und das macht den Unterschied. Wenn Mütter den Grund kennen, fühlen sie sich weniger hilflos. Das ist deine Aufgabe als Pflege: nicht nur machen — sondern auch erklären.",
        glossarBegriffe: [],
      },
    },

    // Step 5.3 — MC (Multiple Choice): Anpassungsbedarf für die Nacht
    {
      stepId: "ce02-emilia-eval-03-anpassungsbedarf",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019", "AWMF S2k-Leitlinie Bronchiolitis 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-emilia-eval-anpassung",
      tag: "pflege",
      contentC1: {
        title: "Was muss für die Nacht noch angepasst werden?",
        body: "Welche Maßnahmen sollten für die Nacht noch angepasst oder hinzugefügt werden?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was noch tun für die Nacht?",
        body: "Welche Maßnahmen sind für die Nacht noch nötig?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Welche Maßnahmen sind für die Nacht noch sinnvoll? (Mehrfachauswahl möglich)",
        multiSelect: true,
        optionen: [
          {
            text: "Nachtschicht-Team informieren: Ziel 5 nasse Windeln noch nicht erreicht — weiter engmaschig bilanzieren",
            isCorrect: true,
            explanation:
              "Richtig. Die Übergabe muss das offene Ziel enthalten — sonst fehlt der Nachschicht die Information. Kontinuierliche Bilanzierung ist die wichtigste Maßnahme.",
            explanationB1:
              "Richtig. Das Nachtschicht-Team muss wissen: Windel-Ziel noch nicht erreicht. Weiter beobachten.",
          },
          {
            text: "Nächste Arztvisite vorbereiten: Flüssigkeitsbilanz vorlegen, Fieberverlauf dokumentieren",
            isCorrect: true,
            explanation:
              "Richtig. Der Arzt braucht die Bilanz um zu entscheiden ob weiterhin orales Angebot ausreicht oder ob Maßnahmen eskaliert werden müssen.",
            explanationB1:
              "Richtig. Der Arzt muss die Bilanz sehen. Zeige ihm was Emilia getrunken hat und wie das Fieber verlaufen ist.",
          },
          {
            text: "Laura erneut auf die Nasenpflege vor Stillversuchen in der Nacht hinweisen",
            isCorrect: true,
            explanation:
              "Richtig. In der Nacht ist Laura müde und macht möglicherweise die Nasenpflege vor dem Stillen nicht mehr. Ein kurzer Hinweis jetzt verankert die Maßnahme.",
            explanationB1:
              "Richtig. In der Nacht vergisst man leicht die Nasenpflege. Laura nochmal erinnern.",
          },
          {
            text: "Emilia i.v.-Infusion planen, da Trinkmenge noch unter Tagesziel",
            isCorrect: false,
            explanation:
              "Voreilig. Emilias Trinkmenge verbessert sich. Bis zur i.v.-Infusion wird erst beim Versagen der oralen Maßnahmen eskaliert — das entscheidet der Arzt. Die aktülle Situation rechtfertigt keine sofortige Infusion.",
            explanationB1:
              "Nein — zu früh. Emilia trinkt besser. Der Arzt entscheidet ob ein Tropf nötig ist — noch nicht jetzt.",
          },
          {
            text: "Mutter Laura jetzt aufwecken und weitere Stillanleitung geben",
            isCorrect: false,
            explanation:
              "Kontraproduktiv. Laura schläft — das war ein Pflegeziel des Tages. Sie jetzt aufzuwecken für Anleitung ignoriert ihr Erschöpfungsproblem. Die Anleitung kann warten bis sie von selbst aufwacht.",
            explanationB1:
              "Nein. Laura schläft — das war wichtig. Sie jetzt aufwecken wäre falsch. Anleitung kann warten.",
          },
        ],
      },
    },

    // Step 5.4 — Reflection: Offene Reflexionsfrage
    {
      stepId: "ce02-emilia-eval-04-reflexion-frage",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["Fiechter/Meier 1981"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Reflexion — dein heutiger Arbeitstag",
        body: "Du hast heute Baby Emilia und Mutter Laura begleitet — von der ersten Übergabe bis zur Nachmittagsevaluation. Jetzt die offene Frage.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Reflexion",
        body: "Du hast heute Emilia und Laura begleitet. Jetzt eine offene Frage.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was hat dich in dieser Situation am meisten überrascht — und warum?",
        reflection: {
          prompt:
            "Was hat dich in dieser Situation am meisten überrascht — und warum?",
          placeholder:
            "Denke z.B. an: die emotionale Komponente (Mutter weint), den Zusammenhang Nase und Trinken, die Wichtigkeit des Erklärens, deine eigene Unsicherheit beim Säuglingsbad...",
          systemPrompt:
            "Bewerte die Reflexion nach dem Sandwich-Prinzip: Anerkennen was gut beobachtet wurde, dann ergänzen was fehlt, dann ermutigen. Themen die in der Reflexion auftauchen können: emotionale Begleitung der Mutter, physiologischer Mechanismus Nasenatmer, Bedeutung der Erklärung für das Eltern-Empowerment, eigene Unsicherheit beim Säuglingsbad. Keine Musterantwort erwarten — individülle Antworten sind das Ziel.",
        },
      },
    },
  ],
  optionaleSteps: [
    // Step 5.5 — Flipcard: Evaluation im Pflegeprozess
    {
      stepId: "ce02-emilia-eval-opt-pflegeprozess-evaluation-regel",
      phase: 5,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-eval-pflegeprozess",
      tag: "pflege",
      contentC1: {
        title: "Was macht Evaluation im Pflegeprozess?",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Evaluation", "Pflegeprozess"],
      },
      contentB1: {
        title: "Was ist Evaluation?",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Evaluation"],
      },
      question: {
        fragetext: "Was macht Evaluation im Pflegeprozess?",
        flipcard: {
          instruction: "Klappe die Karte um.",
          cards: [
            {
              front: "Was macht Evaluation im Pflegeprozess?",
              back: "Evaluation = systematisches Prüfen ob die Pflegeziele erreicht wurden. Wenn ja: Maßnahme beibehalten oder abschließen. Wenn nein: Plan anpassen, neue Maßnahmen suchen. Das ist kein Fehler — das ist Pflege. *(Fiechter/Meier, 1981)*",
              backB1:
                "Evaluation = prüfen ob das Ziel erreicht wurde. Wenn ja: gut, weiter so. Wenn nein: Plan ändern. Das ist kein Fehler. Das ist normaler Pflegeprozess.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 13,
};
