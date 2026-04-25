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
    "Szenen-Sprung. 24 Stunden später, 06:42 Uhr. Frühdienst. Du stehst wieder auf demselben Flur, aber alles ist anders. Das Stationslicht ist hell, die Neonleuchten brummen leise und gleichmäßig, draußen vor den Fenstern dämmert es bläulich, eine Amsel hat irgendwo zu singen begonnen. Es riecht nach frischem Kaffee aus der Stationsküche, nach Toast und nach dem dezent süßen Duft des Pflegelotion-Spenders, den jemand neu aufgefüllt hat. Aus Zimmer 12 kommt das gedämpfte Klappern von Frühstücksgeschirr, Frau Schmidts Lachen, das Geräusch eines Verbandwagens, der über die Türschwelle rollt. Du hast zu Hause nicht gut geschlafen. Bilder sind dir geblieben — Frau M. am Boden, ihre Hand in deiner, der Satz 'Sind Sie böse?'. Frau Keller steht jetzt neben dir am Stationstresen, hat schon eine Tasse Kaffee in der Hand, ihre Augen sind ruhig. 'Komm', sagt sie, 'wir gucken zusammen.' Auf dem Bildschirm liest du die Übergabe der Spätschicht: Zolpidem wurde gegen 09:00 vom Stationsarzt abgesetzt, neuer Eintrag steht. Nachtlicht hat über Nacht gebrannt. Toilettenstuhl wurde einmal um 02:50 genutzt — Frau M. hat geklingelt. Vitalzeichen stabil. Schmerz NRS 2 morgens. Keine neuen Auffälligkeiten. Du gehst mit Frau Keller in Zimmer 14. Frau M. sitzt aufrecht im Bett, die Brille wieder auf der Nase, eine Tasse Tee in der Hand, sie lächelt vorsichtig, als sie dich sieht. 'Sie sind die von der Nacht', sagt sie. 'Sie haben geklingelt', sagst du. Sie nickt: 'Ja. Es ging.' Drei Worte, und du spürst, wie etwas Großes in dir aufatmet. Aber Routine ist das nicht. Jetzt brauchst du den klaren Blick zurück: Was von dem, was ihr in der Nacht geplant und durchgeführt habt, hat tatsächlich gewirkt? Was war eher Aktivismus, gut gemeint, aber überflüssig? Und was fehlt noch — Physiotherapie, HCT-Review, Hüftprotektor-Gespräch mit der Tochter? Reflexion ist kein Luxus, sie ist Teil deines Berufs. Frau Keller wartet darauf, dass du das jetzt strukturiert benennst. Und du selbst willst es auch — für die nächste Schicht, für die nächste Frau M., für dich.",
  kontextB1:
    "24 Stunden später. 06:42 Uhr. Frühdienst. Du stehst wieder auf dem Flur. Alles ist anders. Das Licht ist hell. Draußen wird es langsam blau. Eine Amsel singt. Es riecht nach Kaffee und Toast. Du hast zuhause schlecht geschlafen. Du denkst noch an Frau M. — wie sie am Boden lag, wie sie deine Hand hielt. Frau Keller steht neben dir. Sie hat eine Tasse Kaffee. Sie sagt: 'Komm, wir gucken zusammen.' Du liest die Übergabe von der Spätschicht. Zolpidem wurde abgesetzt. Nachtlicht hat gebrannt. Toilettenstuhl wurde benutzt — Frau M. hat geklingelt um 02:50. Vitalzeichen sind stabil. Schmerzen: 2 von 10. Du gehst mit Frau Keller zu Frau M. Sie sitzt im Bett. Sie hat ihre Brille auf. Sie trinkt Tee. Sie lächelt vorsichtig. Sie sagt: 'Sie sind die von der Nacht.' Du sagst: 'Sie haben geklingelt.' Sie nickt: 'Ja. Es ging.' Etwas in dir wird ruhig. Aber jetzt ist die Frage: Was hat wirklich geholfen? Was war zu viel? Was fehlt noch — zum Beispiel Physiotherapie, Hüftprotektor, HCT-Review? Du musst es klar sagen. Frau Keller wartet. Du selbst willst es auch wissen — für die nächste Schicht und für dich.",
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
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt am Frühstückstisch, ihre Tochter Birgit sitzt neben ihr (sie kam extra früh vorbei). Als du eintrittst, sagt Frau M. zu dir:\n\n> \"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte, ich werde einfach nur alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.\"\n\nDieser Satz ist didaktisch zentral. Frau M. hat durch die **Ursachenaufklärung** das Post-Fall-Syndrom durchbrechen können. Kontroll-Erleben statt Schicksalserleben. 'Ich werde alt' = unveränderbar, passiv → Sturzangst bleibt. 'Es waren die Tabletten' = veränderbar, aktiv → Hoffnung + Handlungsfähigkeit. Das ist die Wirkung, die durch gute Beratung (Baustein 1 der Angst-Adressierung aus Phase 4) entsteht. Merke: Aufklärung ist nicht nur Information — sie ist eine Intervention gegen das Post-Fall-Syndrom.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Frau M. am Morgen",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt beim Frühstück. Ihre Tochter Birgit ist da. Frau M. sagt zu dir:\n\n> \"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte: Ich werde einfach alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.\"\n\nDieser Satz ist wichtig. Durch die Erklärung hat Frau M. den Teufelskreis der Angst durchbrochen. 'Ich werde alt' = ich kann nichts ändern → Angst bleibt. 'Es waren die Tabletten' = ich kann etwas ändern → Hoffnung kommt. Merke: Erklären ist nicht nur Information — es ist Therapie gegen Angst.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // Step 5.3 — Selbsteinschätzung nachher
    // FIX (walkthrough B-04): stepType confidence → selfrating, confidenceCards entfernt.
    // Gleicher Grund wie B-01: Eine subjektive Selbsteinschätzung am Ende der Situation
    // darf nicht mit "Falsch!"-Header bewertet werden. selfrating nutzt Skala statt
    // isTrue/isFalse-Logik.
    {
      stepId: "ce02-frau-m-eval-03-konfidenz-nachher",
      phase: 5,
      stepType: "selfrating",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-frau-m-eval-confidence-nachher",
      tag: "pflege",
      contentC1: {
        // FIX (walkthrough B-13): Titel differenziert vom Phase-1-Step (info-02 "Wie sicher fühlst du dich?"),
        // damit Schüler spürt: Ende, nicht Anfang.
        title: "Dein Ende-Check — wie sicher fühlst du dich jetzt?",
        body: "Erinnerst du dich? Ganz am Anfang (vor dem Zimmer von Frau M.) haben wir dich gefragt, wie sicher du dich fühlst. Jetzt — nach Assessment, Transfer, SBAR-Anruf, Bettgitter-Entscheidung, Haupt-Branching — fragen wir dich nochmal. Das ist kein Test — es ist eine Spiegelung deines Lernens.",
        glossarBegriffe: [],
      },
      contentB1: {
        // FIX (walkthrough B-13): Titel differenziert vom Phase-1-Step.
        title: "Dein Ende-Check — wie sicher fühlst du dich jetzt?",
        body: "Am Anfang haben wir dich gefragt, wie sicher du dich fühlst. Jetzt — nach allem, was du gemacht hast — fragen wir dich nochmal. Das ist kein Test. Das ist, damit du siehst, was du gelernt hast.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Wie sicher fühlst du dich jetzt, als Pflegekraft bei einer ähnlichen Situation?",
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
