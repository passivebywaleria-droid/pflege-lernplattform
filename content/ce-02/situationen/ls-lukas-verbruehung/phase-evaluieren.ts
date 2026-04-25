// CE-02 Situation Lukas — Phase 5: Evaluieren
// Steps: 4 · Bloom: B4–B5 · Zeit: ~10–20 Min
// Szenen-Sprung: nächster Morgen, Frühdienst
// Quelle: phase-evaluieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-lukas-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — War die Versorgung erfolgreich?",
  titelB1: "Was hat sich verändert?",
  kontext:
    "Szenen-Sprung: Es ist der nächste Morgen. Lukas hat die Nacht auf der Kinderstation verbracht, Sandra hat neben ihm geschlafen. Kevin ist nach Hause gefahren und ist jetzt wieder da — ruhiger als gestern. Das Gespräch mit Frau Fink hat geholfen: Sie hat erklärt was passiert ist, was die Einschätzung ergeben hat (keine konkreten Anhaltspunkte für Kindeswohlgefährdung), und was der nächste Schritt ist (Abschlussdokumentation, Entlassung mit Anschreiben an Kinderarzt).\n\nDu übernimmst Lukas im Frühdienst. Kathrin begleitet dich.\n\nJetzt ist Evaluation: War die gestrige Versorgung erfolgreich? Was hat sich verändert? Was fehlt noch?",
  kontextB1:
    "Es ist der nächste Morgen. Lukas hat die Nacht in der Klinik geschlafen. Sandra war dabei. Kevin ist jetzt wieder da — ruhiger. Das Gespräch mit Frau Fink hat geholfen: Kein Verdacht, alles dokumentiert.\n\nDu übernimmst Lukas im Frühdienst. Kathrin ist dabei. Jetzt schaust du: Was hat die gestrige Versorgung gebracht? Was muss noch gemacht werden?",
  kernSteps: [
    // Step 5.1 — Categorize: Ziele erreicht / nicht erreicht
    {
      stepId: "ce02-lukas-eval-01-wundstatus",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGV 2023", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-eval-wundstatus",
      tag: "krankheitslehre",
      contentC1: {
        title: "Pflegeziele evaluieren — was ist erreicht?",
        body: "Lukas' Befund heute Morgen wird beschrieben. Ordne jedes Ziel einer Kategorie zu: Erreicht, Teilweise erreicht, oder Noch offen.",
        glossarBegriffe: ["Epithelisierung", "Exsikkose", "Rötungswall"],
      },
      contentB1: {
        title: "Was ist besser? Was fehlt noch?",
        body: "Lukas' Zustand heute Morgen. Sortiere: Ist das Ziel erreicht, teilweise erreicht, oder noch offen?",
        glossarBegriffe: ["Rötungswall (= Entzündungszeichen um die Wunde)"],
      },
      question: {
        fragetext:
          "Ordne jeden Befund / jedes Ziel der richtigen Evaluationskategorie zu.",
        categories: [
          { name: "Ziel erreicht" },
          { name: "Teilweise erreicht" },
          { name: "Ziel noch offen" },
        ],
        categoryItems: [
          {
            text: "Wundstatus: Blasen am linken Unterarm noch intakt, kein Rötungswall, kein Eiter, kein übler Geruch",
            correctCategory: 0,
          },
          {
            text: "Schmerzreduktion: KUSS-Skala jetzt 3/10 (gestern Aufnahme: 9/10, nach Analgesie: 6/10)",
            correctCategory: 0,
          },
          {
            text: "Trinkmenge: Nacht 380 ml getrunken — besser als gestern, aber noch unter Tagesziel (1160 ml)",
            correctCategory: 1,
          },
          {
            text: "Elterndynamik: Sandra erholt, Kevin kooperativer, beide haben geschlafen",
            correctCategory: 0,
          },
          {
            text: "Entlassung vorbereiten: Wundversorgungsplan für Kinderarzt, Elternanleitung Verbandwechsel zuhause",
            correctCategory: 2,
          },
          {
            text: "Kinderschutz-Dokumentation: Frau Fink hat Screening abgeschlossen, kein Anhaltspunkt — Dokumentation liegt vor",
            correctCategory: 0,
          },
        ],
      },
    },

    // Step 5.2 — Timeline: KUSS-Verlauf
    {
      stepId: "ce02-lukas-eval-02-kuss-verlauf",
      phase: 5,
      stepType: "timeline",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Büttner/Finke 2000"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-eval-kuss-verlauf",
      tag: "pflege",
      contentC1: {
        title: "KUSS-Verlauf über 24 Stunden",
        body: "Schaue dir den KUSS-Verlauf von Lukas über die letzten 24 Stunden an. Ordne die Maßnahmen den Momenten zu, in denen der Schmerzscore deutlich gefallen ist.",
        glossarBegriffe: ["KUSS-Skala", "Bedarfsanalgesie"],
      },
      contentB1: {
        title: "Wie hat sich der Schmerz verändert?",
        body: "Lukas' Schmerzscore (KUSS) über 24 Stunden. Was hat den Schmerz gesenkt?",
        glossarBegriffe: ["KUSS-Skala (= Schmerzmessung für Kinder)"],
      },
      question: {
        fragetext:
          "Schaue dir den KUSS-Verlauf an. Was hat den Schmerz wann gesenkt?",
        timeline: {
          instruction:
            "KUSS-Datenpunkte über 24 Stunden — welche Maßnahmen haben welche Wirkung gezeigt?",
          events: [
            {
              id: "t1",
              time: "09:20 Uhr (Unfall)",
              title: "KUSS 9/10",
              description:
                "Direkt nach dem Unfall. Maximaler Schmerz. Lukas weint laut, greift nach Sandra.",
              descriptionB1:
                "Direkt nach dem Unfall. Schmerz maximal. Lukas weint.",
              highlight: true,
            },
            {
              id: "t2",
              time: "10:00 Uhr (Notaufnahme, i.v.-Analgesie)",
              title: "KUSS 6/10",
              description:
                "Nach i.v.-Schmerzmittelgabe in der Notaufnahme. Signifikante Reduktion — Analgesie wirkt. Lukas wimmert noch, ist aber nicht mehr im Maximalschmerz.",
              descriptionB1:
                "Nach Schmerzmittel in die Vene. Lukas wimmert noch — aber besser.",
            },
            {
              id: "t3",
              time: "13:30 Uhr (Verbandwechsel + Bedarfsanalgesie)",
              title: "KUSS 4/10",
              description:
                "Nach Pause + Bedarfsanalgesie + Ablenkung mit Seifenblasen + Sandra aktiv eingebunden. Lukas hat kurz geweint beim Lösen — danach aber ruhiger.",
              descriptionB1:
                "Nach Pause, neuem Schmerzmittel und Seifenblasen. Lukas ist ruhiger.",
            },
            {
              id: "t4",
              time: "18:00 Uhr (Schmerzmittel, reguläres Schema)",
              title: "KUSS 3/10",
              description:
                "Regelmäßige Analgesie nach Schema. Lukas hat 80 ml getrunken, Sandra ist entspannter. Wundruhe nach dem Verbandwechsel wirkt.",
              descriptionB1:
                "Schmerzmittel nach Plan. Lukas trinkt etwas. Sandra ist ruhiger.",
            },
            {
              id: "t5",
              time: "Nacht (06:00 Uhr Frühdienst)",
              title: "KUSS 3/10",
              description:
                "Schmerz stabil auf niedrigem Niveau. Kein Anstieg in der Nacht. 380 ml Trinkmenge über die Nacht — besser als gestern, Ziel noch nicht erreicht.",
              descriptionB1:
                "Schmerz stabil. Nacht war gut. Lukas hat mehr getrunken.",
              highlight: false,
            },
          ],
        },
      },
    },

    // Step 5.3 — Text (quote): Elterndynamik
    {
      stepId: "ce02-lukas-eval-03-elterndynamik",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-eval-elterndynamik",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Elterndynamik im Verlauf",
        body: "Heute Morgen fragt Kevin als erstes: \"Wie viel muss Lukas heute noch trinken? Ich könnte ihm das anbieten wenn Sandra schläft.\"\n\nDas ist ein Zeichen. Kevin, der gestern laut wurde und Frau Fink anfuhr — fragt heute nach dem Trinkangebot für Lukas. Er sucht aktiv nach einer Rolle.\n\nWie verändert sich die Elterndynamik im Verlauf einer Kinderstation-Aufnahme? Schock → Schuld → Suche nach Kontrolle → Kooperation. Nicht jede Familie schafft alle Stufen in einem Kurzaufenthalt. Aber Kevins Frage zeigt: Er ist in der Phase 'Suche nach Kontrolle' — und das ist der Übergang zur Kooperation.\n\nDie Pflegeperson kann diesen Verlauf aktiv unterstützen: durch Einbeziehung statt Ausschluss, durch Erklärung statt Bürokratiesprache, durch konkretes Lob für richtiges Verhalten ('Sie haben gestern Abend gut auf die Seifenblasen reagiert — das hat sehr geholfen').\n\nQuelle: _(Hoehl/Kullick 2019, Kap. Familienzentrierte Pflege)_",
        glossarBegriffe: ["Familienzentrierte Pflege", "Elterndynamik"],
      },
      contentB1: {
        title: "Kevin fragt heute Morgen",
        body: "Kevin fragt heute Morgen: \"Wie viel muss Lukas trinken? Ich könnte anbieten wenn Sandra schläft.\"\n\nDas ist ein gutes Zeichen. Gestern war Kevin laut und defensiv. Heute sucht er eine Aufgabe für Lukas.\n\nEltern in der Klinik durchlaufen oft: Schock → Schuld → Suche nach Kontrolle → Kooperation. Kevin ist jetzt in 'Suche nach Kontrolle'. Das ist gut — du kannst ihm eine Aufgabe geben.\n\nWie? Erklären, einbeziehen, loben wenn etwas klappt. 'Die Seifenblasen gestern haben Lukas wirklich geholfen — danke.'",
        glossarBegriffe: [],
      },
    },

    // Step 5.4 — Freetext: Offene Reflexionsfrage
    {
      stepId: "ce02-lukas-eval-04-reflexion-freetext",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-lukas-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Deine Reflexion",
        body: "Was hat dich in dieser Situation am meisten überrascht — und was würdest du beim nächsten Mal anders machen? Schreibe 2–3 Sätze. Es gibt keine Musterlösung — deine ehrliche Antwort ist die richtige.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Was hat dich überrascht? Was würdest du beim nächsten Mal anders machen? Schreibe 2–3 Sätze — auf Deutsch, so wie du kannst.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Was hat dich in dieser Situation am meisten überrascht — und was würdest du beim nächsten Mal anders machen?",
        musterantwort:
          "Überraschend war für mich, wie wichtig die Kommunikation mit Kevin war — ich hatte erwartet, dass die Wundversorgung das Schwierigste sein würde. Beim nächsten Mal würde ich früher und klarer das Kinderschutz-Screening erklären, bevor Kevin davon überrascht wird. Außerdem würde ich die Pause beim Verbandwechsel früher einplanen statt erst reagieren wenn Lukas schreit.",
        bewertungskriterien: [
          "Bezug auf konkrete Situation (Lukas, Kevin, Verbandwechsel, Kinderschutz)",
          "Ehrliche Reflexion — kein allgemeines 'ich mache alles gut'",
          "Mindestens eine konkrete Handlungsänderung für das nächste Mal",
        ],
        satzanfaengeB1: [
          "Überraschend war für mich ...",
          "Ich hätte beim nächsten Mal ... anders gemacht.",
          "Was ich gelernt habe: ...",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 15,
};
