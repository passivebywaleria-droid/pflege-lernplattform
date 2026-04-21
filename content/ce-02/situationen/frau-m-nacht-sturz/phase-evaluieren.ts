// CE-02 Situation Frau M. — Phase 5: Evaluieren
// Steps: 4 · Bloom: B4-B5 (B6 in Reflexion)
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-frau-m-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren",
  titelB1: "Bewerten",
  kontext:
    "Szenen-Sprung: 24 Stunden später, wieder Frühdienst. Frau Keller ist da, du übernimmst Frau M. mit. Zolpidem wurde abgesetzt, Nachtlicht hat gebrannt, Toilettenstuhl wurde in der Nacht einmal genutzt. Du willst evaluieren, was die nächtlichen Maßnahmen gebracht haben.",
  kontextB1:
    "24 Stunden später. Frühdienst. Frau Keller ist da. Du übernimmst Frau M. Zolpidem ist abgesetzt. Nachtlicht hat gebrannt. Toilettenstuhl wurde einmal benutzt. Du schaust: Was hat funktioniert?",
  kernSteps: [
    // Step 5.1 — Categorize: Reassessment
    {
      stepId: "ce02-frau-m-eval-01-reassessment",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-eval-reassessment",
      tag: "pflege",
      contentC1: {
        title: "Maßnahmen-Reassessment",
        body: "Du schaust dir die umgesetzten Maßnahmen an und ordnest sie drei Kategorien zu: (1) **Hat gewirkt** — ist eingetreten und hat Frau M. geholfen. (2) **War überflüssig** — hätte man weglassen können. (3) **Fehlt noch** — muss als Nächstes gemacht werden.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was hat funktioniert?",
        body: "Du schaust: Was hat funktioniert? Was war unnötig? Was fehlt noch? Sortiere die Maßnahmen in 3 Gruppen.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Ordne jede Maßnahme einer der 3 Kategorien zu.",
        categories: [
          { name: "Hat gewirkt" },
          { name: "War überflüssig" },
          { name: "Fehlt noch" },
        ],
        categoryItems: [
          { text: "Zolpidem vom Arzt abgesetzt", correctCategory: 0 },
          {
            text: "Nachtlicht die ganze Nacht eingeschaltet",
            correctCategory: 0,
          },
          { text: "Toilettenstuhl neben dem Bett", correctCategory: 0 },
          { text: "Rutschfeste Socken angezogen", correctCategory: 0 },
          {
            text: "Physiotherapie-Termin für heute organisiert",
            correctCategory: 2,
          },
          {
            text: "HCT-Review (morgens noch nötig durch Tag-Schicht)",
            correctCategory: 2,
          },
          {
            text: "Hüftprotektor-Gespräch mit Tochter vorbereiten",
            correctCategory: 2,
          },
          {
            text: "Stündliche Vitalzeichen-Kontrolle die ganze Nacht",
            correctCategory: 1,
          },
        ],
      },
    },

    // Step 5.2 — Quote: Patientensicht
    {
      stepId: "ce02-frau-m-eval-02-patientensicht",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-eval-patientensicht",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Was Frau M. am Morgen sagt",
        body: "Frau M. sitzt am Frühstückstisch, ihre Tochter Birgit sitzt neben ihr (sie kam extra früh vorbei). Als du eintrittst, sagt Frau M. zu dir:\n\n> _\"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte, ich werde einfach nur alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.\"_\n\nDieser Satz ist didaktisch zentral. Frau M. hat durch die **Ursachenaufklärung** das Post-Fall-Syndrom durchbrechen können. Kontroll-Erleben statt Schicksalserleben. 'Ich werde alt' = unveränderbar, passiv → Sturzangst bleibt. 'Es waren die Tabletten' = veränderbar, aktiv → Hoffnung + Handlungsfähigkeit. Das ist die Wirkung, die durch gute Beratung (Baustein 1 der Angst-Adressierung aus Phase 4) entsteht. Merke: Aufklärung ist nicht nur Information — sie ist eine Intervention gegen das Post-Fall-Syndrom.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Frau M. am Morgen",
        body: "Frau M. sitzt beim Frühstück. Ihre Tochter Birgit ist da. Frau M. sagt zu dir:\n\n> _\"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte: Ich werde einfach alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.\"_\n\nDieser Satz ist wichtig. Durch die Erklärung hat Frau M. den Teufelskreis der Angst durchbrochen. 'Ich werde alt' = ich kann nichts ändern → Angst bleibt. 'Es waren die Tabletten' = ich kann etwas ändern → Hoffnung kommt. Merke: Erklären ist nicht nur Information — es ist Therapie gegen Angst.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // Step 5.3 — Confidence nachher
    {
      stepId: "ce02-frau-m-eval-03-konfidenz-nachher",
      phase: 5,
      stepType: "confidence",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-frau-m-eval-confidence-nachher",
      tag: "pflege",
      contentC1: {
        title: "Wie sicher fühlst du dich jetzt?",
        body: "Erinnerst du dich? Ganz am Anfang (vor dem Zimmer von Frau M.) haben wir dich gefragt, wie sicher du dich fühlst. Jetzt — nach Assessment, Transfer, SBAR-Anruf, Bettgitter-Entscheidung, Haupt-Branching — fragen wir dich nochmal. Das ist kein Test — es ist eine Spiegelung deines Lernens.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie sicher fühlst du dich jetzt?",
        body: "Am Anfang haben wir dich gefragt, wie sicher du dich fühlst. Jetzt — nach allem, was du gemacht hast — fragen wir dich nochmal. Das ist kein Test. Das ist, damit du siehst, was du gelernt hast.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich jetzt, als Pflegekraft bei einer ähnlichen Situation?",
        confidenceCards: [
          {
            statement:
              "Immer noch unsicher — das war sehr komplex, ich brauche mehr Übung",
            isTrue: false,
            explanation:
              "Das ist absolut ok. Du hast eine komplexe Situation durchgearbeitet. Übung folgt in weiteren Situationen (LS Kovac, LS Bauer).",
          },
          {
            statement:
              "Sicherer als vorher — ich weiß jetzt, welche Schritte wichtig sind",
            isTrue: false,
            explanation:
              "Genau das ist der Lernfortschritt. Mit jeder ähnlichen Situation wird das Muster fester.",
          },
          {
            statement:
              "Klar sicher — ich könnte das jetzt im Dienst selbstständig",
            isTrue: true,
            explanation:
              "Super. Dein Profil zeigt: Du kannst in ähnlichen Situationen im Nachtdienst eigenständig handeln. Nächstes Level: Prüfungsfall am Ende CE-02.",
          },
        ],
      },
    },

    // Step 5.4 — Freetext: Reflexion
    {
      stepId: "ce02-frau-m-eval-04-reflexion-frage",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-frau-m-eval-reflexion",
      tag: "krankheitslehre",
      contentC1: {
        title: "Reflexion: Was hättest du anders gemacht?",
        body: "Die KI gibt dir ein Sandwich-Feedback zu deiner Antwort (Lob + konkrete Rückmeldung + Ermutigung). Keine Musterantwort — deine Überlegungen sind der Kern.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Reflexion: Was wäre anders?",
        body: "Die KI gibt dir ein Feedback (Lob + Verbesserung + Ermutigung). Keine perfekte Antwort — deine Gedanken sind wichtig.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was hättest du anders gemacht, wenn du von Anfang an gewusst hättest, dass Zolpidem das Problem ist?",
        bewertungskriterien: [
          "Früher proaktiv zu Medikamenten nachfragen (Anamnese-Schärfung)",
          "Medikamentenreview proaktiv vorschlagen (statt zu warten bis Arzt-Visite)",
          "Schlafhygienische Alternativen anbieten (Warmmilch, Ruhe, Sitzen mit Lavendeltee)",
          "Ursache-Dialog mit Patientin aktiv führen (Anti-Schicksalserleben früher einleiten)",
        ],
        satzanfaengeB1: [
          "Wenn ich gewusst hätte, dass Zolpidem das Problem ist, hätte ich als erstes …",
          "Ich hätte gefragt: …",
          "Statt Zolpidem hätte man vielleicht versuchen können …",
          "Mit Frau M. hätte ich früher über … gesprochen.",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};
