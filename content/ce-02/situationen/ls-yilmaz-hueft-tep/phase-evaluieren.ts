// CE-02 Situation Frau Yilmaz — Phase 5: Evaluieren
// Steps: 3 Kern + 1 Optional · Bloom: B4–B6 · Zeit: ~15–25 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-hueft-tep/phase-evaluieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_HUEFT_TEP_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-yilmaz-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — Was hat gewirkt?",
  titelB1: "Was hat heute funktioniert?",
  kontext:
    "Szenen-Sprung: Es ist Nachmittag, 15:30 Uhr. Du kommst nochmal zu Frau Yilmaz — kurzer Nachmittags-Check vor der Übergabe. Sie liegt in 30°-Mikrolagerung auf der linken Seite. Mustafa sitzt neben ihr und hält ihre Hand. Als du hereinkommst, schaut sie auf und sagt: \"Heute ist es schon ein bisschen besser. Ich habe weniger Angst. Aber ich will noch nicht alleine gehen.\" Das ist eine wichtige Aussage — sie zeigt, dass Frau Yilmaz Fortschritt wahrnimmt UND realistisch bleibt. Beides ist gut.",
  kontextB1:
    "Es ist 15:30 Uhr nachmittags. Du kommst nochmal zu Frau Yilmaz. Sie liegt in der 30°-Lagerung auf der linken Seite. Mustafa sitzt neben ihr. Als du reinkommst, sagt sie: \"Heute ist es schon ein bisschen besser. Ich habe weniger Angst. Aber ich will noch nicht alleine gehen.\" Das ist gut. Sie macht Fortschritte — und sie weiß, was sie noch braucht.",
  kernSteps: [
    // Step 5.1 — Categorize: Maßnahmen-Evaluation
    {
      stepId: "ce02-yilmaz-eval-01-maßnahmen-check",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege",
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "DGG (2022): S2k-Leitlinie tiefe Beinvenenthrombose",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-eval-maßnahmen-bewerten",
      tag: "pflege",
      contentC1: {
        title: "Evaluation: Was hat heute gewirkt?",
        body: "Evaluation bedeutet nicht 'alles gelöst oder nicht'. Es bedeutet: Was hat heute gewirkt? Was braucht morgen nochmal Aufmerksamkeit? Bewerte die heutigen Maßnahmen — ordne jede einer Kategorie zu.\n\n**Wichtig zu unterscheiden:** Eine pflegerische Maßnahme kann *abgeschlossen* sein, während die Diagnostik noch *läuft*. Beispiel: Wadenschmerz → Arzt informiert → Doppler beauftragt. Pflegerisch ist alles Richtige eingeleitet — das gehört zu \"Ergebnis ausstehend\", nicht zu \"nicht vollständig gelöst\".",
        fallbezug:
          "Frau Yilmaz ist aufgestanden — das ist der Haupterfolg. Die Dekubitus-Prophylaxe muss fortgesetzt werden. Der Wadenschmerz ist noch offen.",
        glossarBegriffe: ["Evaluation", "Pflegeprozess", "Zielerreichung"],
      },
      contentB1: {
        title: "Was hat heute funktioniert?",
        body: "Du schaust zurück auf den heutigen Tag. Welche Maßnahmen haben gewirkt? Ordne sie zu.\n\nTipp: Wenn du Arzt + Doppler beauftragt hast, hast du pflegerisch alles richtig gemacht. Das Ergebnis fehlt noch — das ist „Ergebnis ausstehend\" (nicht „ungelöst\").",
        glossarBegriffe: ["Evaluation"],
      },
      question: {
        fragetext:
          "Bewerte die heutigen Maßnahmen. Ordne jede Maßnahme einer Kategorie zu.",
        categories: [
          { name: "Hat gewirkt ✓" },
          { name: "Begonnen, braucht Fortsetzung" },
          { name: "Nicht vollständig gelöst — braucht mehr Aufmerksamkeit" },
          { name: "Ergebnis ausstehend" },
        ],
        categoryItems: [
          {
            text: "Analgesie vor Mobilisation → zweiter Versuch erfolgreich",
            correctCategory: 0,
          },
          {
            text: "Steißbein-Rötung (Kategorie I) entdeckt und Lagerungsplan gestartet",
            correctCategory: 0,
          },
          {
            text: "30°-Mikrolagerung alle 2 Stunden",
            correctCategory: 1,
          },
          {
            text: "Mustafa einbezogen — Frau Yilmaz als Vermittlerin",
            correctCategory: 0,
          },
          {
            text: "Wadenschmerz links gemeldet — Arzt informiert, Doppler-Untersuchung beauftragt",
            correctCategory: 3,
          },
          {
            text: "Dekubitus-Schmerz am Steißbein noch vorhanden",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 5.2 — Reflection: Folgeplanung für morgen
    {
      stepId: "ce02-yilmaz-eval-02-folgeplan-morgen",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter V./Meier M. (1981): Pflegeprozess — 6-Schritte-Modell",
        "Leonard M., Graham S., Bonacum D. (2004): SBAR — BMJ Qual Saf",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-eval-folgeplanung",
      tag: "pflege",
      contentC1: {
        title: "Was muss morgen früh passieren?",
        body: "Frau Yilmaz ist morgen Tag 4 nach der OP. Frau Wendt fragt dich am Ende deiner Schicht: 'Was soll morgen Früh als erstes passieren, wenn du nicht mehr da bist?'\n\nSchreibe 3 konkrete Punkte für die Übergabe. Sie müssen konkret sein — nicht 'Schmerzen beobachten', sondern 'NRS vor Mobilisation messen und Analgesie 30 Min vorher prüfen'.",
        fallbezug:
          "Was du jetzt aufschreibst, entscheidet darüber, was das Frühdienstteam morgen als erstes tut — oder vergisst.",
        glossarBegriffe: ["Übergabe", "Pflegeplanung", "Kontinuität"],
      },
      contentB1: {
        title: "Was soll morgen früh passieren?",
        body: "Frau Wendt fragt dich am Ende der Schicht: \"Was muss morgen als erstes passieren?\"\n\nSchreib 3 wichtige Punkte auf. Konkret — nicht 'auf Schmerzen achten', sondern genau was gemacht werden soll.",
        fallbezug:
          "Was du aufschreibst, liest das nächste Team. Du entscheidest, was morgen passiert.",
        glossarBegriffe: ["Übergabe", "Planung"],
      },
      question: {
        fragetext:
          "Schreibe 3 konkrete Punkte für die Übergabe: Was soll morgen früh als erstes passieren?",
        reflection: {
          prompt:
            "Was muss morgen früh passieren — konkret, mit wann und was?",
          placeholder:
            "1. Analgesie-Status prüfen: Hat Frau Yilmaz ihr Metamizol bekommen? 30 Min vor geplantem Aufstehen.\n2. Steißbein-Rötung erneut inspizieren: Kategorie I noch vorhanden? Verschlechterung?\n3. Doppler-Ergebnis: Wadenschmerz links — Ergebnis aus Nachmittag abfragen.",
          systemPrompt:
            "Du bist ein erfahrener Pflegedozent. Prüfe die Übergabe des Schülers auf diese 3 Kernpunkte: 1. Steht Analgesie VOR Mobilisation drin? 2. Steht Hautinspektion (Steißbein) drin? 3. Steht Doppler-Ergebnis/Wadenschmerz drin? Gib Sandwich-Feedback: Lobe was gut ist, benenne was fehlt konkret, ermutige.",
        },
      },
    },

    // Step 5.3 — Freetext: Selbstreflexion
    {
      stepId: "ce02-yilmaz-eval-03-selbstreflexion-freetext",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "V.1",
      quellen: [],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-eval-selbstreflexion",
      tag: "pflege",
      contentC1: {
        title: "Selbstreflexion: Was hätte ich anders gemacht?",
        body: "Denk zurück auf die Situation von heute Morgen. Was hätte dir geholfen, die erste Stunde bei Frau Yilmaz besser zu gestalten? Was würdest du beim nächsten Mal anders machen?\n\nEs gibt keine Musterlösung. Das KI-Feedback reagiert auf deinen spezifischen Text.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was würdest du beim nächsten Mal anders machen?",
        body: "Denk an heute. Was hätte du besser machen können? Schreib 2–3 Sätze.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was hätte dir geholfen, die erste Stunde bei Frau Yilmaz besser zu gestalten? Was würdest du beim nächsten Mal anders machen?",
        musterantwort:
          "Mögliche Reflexionspunkte: Mustafa früher als Ressource einbeziehen (Frau Yilmaz bitten, ihn von Anfang an zu informieren). Früher die orthostatische Hypotonie antizipieren (Blutdruck liegend messen VOR dem ersten Aufstehen). Schmerzmedikament-Status in der Übergabe aktiver erfragen (nicht erst beim Plan).",
        bewertungskriterien: [
          "Zeigt der Schüler echte Reflexion (nicht nur Lob)?",
          "Benennt er eine konkrete Verbesserung?",
          "Versteht er den Zusammenhang Beobachtung → Handlung?",
        ],
      },
    },
  ],
  optionaleSteps: [
    // Step 5.4 (Optional) — Confidence: Vorher/Nachher
    {
      stepId: "ce02-yilmaz-eval-04-konfidenz-vergleich-optional",
      phase: 5,
      stepType: "selfrating",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "vertiefung",
      modus: "checkpoint",
      lernziel: "ce02-yilmaz-eval-konfidenz-nachher",
      tag: "pflege",
      contentC1: {
        title: "Selbsteinschätzung: Vorher vs. Nachher",
        body: "Am Anfang von Phase 1 hast du eingeschätzt, wie gut du die Situation von Frau Yilmaz kennst. Jetzt fragen wir nochmal: Wie sicher fühlst du dich, eine ähnliche Situation beim nächsten Mal zu meistern?\n\nDu hast heute mehr gemacht als du dachtest. Erstes Aufstehen nach Hüft-TEP, orthostatische Hypotonie erkannt, Angehörigen einbezogen, Dekubitus-Prophylaxe gestartet, Pflegeziele formuliert. Das ist kein kleiner Tag.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wie sicher bist du jetzt?",
        body: "Am Anfang wusstest du wenig. Jetzt hast du viel gemacht: Aufstehen geplant, Druckwunde entdeckt, Schwindel behandelt, Mustafa einbezogen. Wie sicher fühlst du dich jetzt für das nächste Mal?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich jetzt, eine ähnliche Situation beim nächsten Mal zu meistern?",
        selfratingVariant: "standard",
      },
    },
  ],
  geschaetzteDauer: 20,
};
