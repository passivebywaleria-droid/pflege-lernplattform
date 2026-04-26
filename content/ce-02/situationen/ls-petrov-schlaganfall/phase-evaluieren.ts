// CE-02 Situation Petrov — Phase 5: Evaluieren
// Steps: 5 · Bloom: B4-B5 · Zeit: ~15-25 Min
// Quelle: phase-evaluieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-petrov-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — Ziele erreicht?",
  titelB1: "Auswerten — Was hat gewirkt?",
  kontext:
    "10:30 Uhr. Die Frühschicht neigt sich dem Ende. Frau Wegner kommt ins Zimmer und nickt dir zu: \"Gut gemacht. Zeig mir deine Evaluation.\" Du gehst systematisch durch — zielgeleitet, nicht nach Gefühl.\n\nHerr Petrov sitzt am Bettrand, die Beine hängen herunter. Er hält mit der linken Hand die Bettkante. Er schaut zum Fenster. Nach 13 Minuten an der Bettkante hat er den linken Daumen hochgezeigt.",
  kontextB1:
    "Es ist 10:30 Uhr. Die Früh-Schicht ist fast vorbei. Frau Wegner kommt ins Zimmer. Sie nickt dir zu: \"Gut gemacht. Zeig mir deine Evaluation.\" Evaluation (= Auswertung): Hast du deine Pflege-Ziele erreicht? Du prüfst das systematisch — nicht nach Gefühl. Herr Petrov sitzt am Bett-Rand. Er hält die Bett-Kante mit der linken Hand. Er schaut zum Fenster. Er hat den Daumen nach oben gezeigt — nach 13 Minuten.",
  kernSteps: [
    // Step 5.1 — Categorize: Ziel-Check
    {
      stepId: "ce02-petrov-eval-01-zielcheck",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter/Meier 1981 — Pflegeprozess",
        "DNQP Mobilität 2020",
        "IDDSI 2019",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-eval-zielcheck",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele: erreicht — teilweise — nicht erreicht?",
        body: "Vier Pflegeziele aus Phase 3 — ordne jeden Ist-Zustand der richtigen Kategorie zu. Evaluation ist Ist-Soll-Vergleich mit Konsequenz — nicht \"gut\" oder \"schlecht\".",
        glossarBegriffe: ["Evaluation", "Pflegeziel", "SMART"],
      },
      contentB1: {
        title: "Hast du deine Pflege-Ziele erreicht?",
        body: "Du prüfst 4 Pflege-Ziele. Was ist passiert? Ordne den Ist-Zustand der richtigen Kategorie zu.",
        glossarBegriffe: ["Evaluation", "Pflegeziel"],
      },
      question: {
        fragetext:
          "Ordne den Ist-Zustand jedes Pflegeziels der richtigen Bewertungskategorie zu.",
        categories: [
          { name: "Erreicht" },
          { name: "Teilweise erreicht" },
          { name: "Nicht erreicht — Konsequenz nötig" },
        ],
        categoryItems: [
          {
            text: "Ziel: Keine Aspiration. → Komplikation K1 aufgetreten: Verschlucken beim Trinken. Gestoppt, stabilisiert, kein Röntgenbefund.",
            correctCategory: 1,
          },
          {
            text: "Ziel: 10 Min an Bettkante. → Herr Petrov saß 13 Minuten.",
            correctCategory: 0,
          },
          {
            text: "Ziel: Atembeobachtung stabil. → Hörbares Atemgeräusch unauffällig, Atemfrequenz 17/Min, kein hörbares Rasseln am Bett.",
            correctCategory: 0,
          },
          {
            text: "Ziel: Katheter-Bilanz dokumentiert. → 1.800 ml/24h, Urin goldgelb, Beutel hängt korrekt.",
            correctCategory: 0,
          },
        ],
      },
    },

    // Step 5.2 — MC: Schluckstatus nach Aspiration
    {
      stepId: "ce02-petrov-eval-02-schluckstatus-neu",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "IDDSI 2019",
        "DGG/DGN 2020 Neurogene Dysphagie",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-eval-schluckstatus-konsequenz",
      tag: "krankheitslehre",
      contentC1: {
        title: "Konsequenz nach dem Aspirationsereignis",
        body: "Beim Frühstück kam es zu einem Aspirationsereignis. Was ist die richtige Konsequenz für die Mittagsmahlzeit?",
        glossarBegriffe: [
          "IDDSI",
          "Schlucktherapeutin",
          "Dysphagie",
          "Konsistenz",
        ],
      },
      contentB1: {
        title: "Was machst du jetzt für das Mittag-Essen?",
        body: "Beim Frühstück hat Herr Petrov sich verschluckt. Was machst du jetzt für das Mittag-Essen?",
        glossarBegriffe: ["IDDSI", "Schlucktherapeutin"],
      },
      question: {
        fragetext:
          "Beim Frühstück kam es zu einem Aspirationsereignis. Was ist jetzt die richtige Konsequenz für die Mittagsmahlzeit?",
        optionen: [
          {
            text: "Essen ganz stoppen bis zur ärztlichen Anordnung",
            isCorrect: false,
            explanation:
              "Zu radikal. Das Aspirationsereignis war ein Einzelereignis mit sofortiger Stabilisierung — keine manifeste Aspiration mit Atemkomplikation. Kompletter Essensstopp ohne ärztliche Rücksprache ist erst bei wiederholter Aspiration oder klinischen Zeichen einer Aspirationspneumonie indiziert.",
            explanationB1:
              "Zu viel. Das Verschlucken war einmal — danach war er stabil. Essen komplett stoppen ist zu früh ohne Arzt.",
          },
          {
            text: "Konsistenz auf IDDSI Level 3 anpassen und Schlucktherapeutin informieren",
            isCorrect: true,
            explanation:
              "Richtig. Stufenkonzept nach IDDSI 2019: Level 2 (leicht verdickt) → Level 3 (mäßig verdickt) als nächste Anpassung. Die Schlucktherapeutin ist die Primäransprechpartnerin bei Dysphagie-Verschlechterung — interdisziplinäre Entscheidung. Pflege passt die Konsistenz an und dokumentiert. (IDDSI 2019; DGG/DGN 2020)",
            explanationB1:
              "Richtig. Mache die Flüssigkeit noch dicker (= Level 3). Informiere die Schluck-Therapeutin. Sie ist die Expertin für Dysphagie. Der Arzt entscheidet gemeinsam mit dem Team.",
          },
          {
            text: "Normales Essen anbieten — er hat ja danach wieder ruhig geatmet",
            isCorrect: false,
            explanation:
              "Falsch. Stille Aspiration (= Flüssigkeit gelangt in die Atemwege ohne Husten) ist möglich. Nach einem Aspirationsereignis ist das Risiko erhöht. Zurück zu Level 2 (oder höher) — auf keinen Fall zu unkontrollierter Konsistenz.",
            explanationB1:
              "Falsch. Er hat sich verschluckt — das Risiko ist jetzt höher. Zurück zu normaler Flüssigkeit ist nicht sicher.",
          },
          {
            text: "Nur noch Sondenkost — oral essen ist zu gefährlich",
            isCorrect: false,
            explanation:
              "Zu früh für Sondenkost. Die Entscheidung für Sondenernährung ist interdisziplinär und braucht mehr als ein Aspirationsereignis als Grundlage. Zuerst: Konsistenz anpassen + Schlucktherapeutin evaluieren lassen.",
            explanationB1:
              "Zu früh. Eine Sonde ist eine große Entscheidung. Zuerst: Konsistenz anpassen und die Schluck-Therapeutin fragen.",
          },
        ],
      },
    },

    // Step 5.3 — Slider: Mobilisations-Prognose (Neuroplastizität)
    {
      stepId: "ce02-petrov-eval-03-mobilisations-fortschritt",
      phase: 5,
      stepType: "slider",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "DGG 2022 S1-Leitlinie Frühmobilisation",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-eval-neuroplastizitaet",
      tag: "anatomie",
      contentC1: {
        title: "Schätzfrage: Motorische Erholung",
        body: "Schätze auf einer Skala von 0-100%: Wie viel Prozent der ursprünglichen Funktion in der rechten unteren Extremität ist bei Herrn Petrov nach 5 Tagen Bobath-Therapie realistisch erreichbar (langfristig, 3-6 Monate)?",
        glossarBegriffe: [
          "Neuroplastizität",
          "Rehabilitation",
          "Frühmobilisation",
        ],
      },
      contentB1: {
        title: "Schätzfrage: Wie viel Kraft kommt zurück?",
        body: "Schätze: Wie viel Prozent der Kraft im rechten Bein kann nach Monaten Reha zurückkommen?",
        glossarBegriffe: ["Neuroplastizität", "Reha"],
      },
      question: {
        fragetext:
          "Wie viel Prozent der ursprünglichen Funktion in der rechten unteren Extremität ist realistisch erreichbar nach 3-6 Monaten intensiver Rehabilitation?",
        slider: {
          instruction: "Schätze den realistischen Prozentwert.",
          unit: "%",
          min: 0,
          max: 100,
          step: 5,
          correctValue: 60,
          tolerance: 20,
          explanation:
            "Individuell sehr variabel (0-100%), aber Studien zeigen: 60-80% der Schlaganfall-Patienten mit Hemiparese erreichen nach 3-6 Monaten intensiver Frührehabilitation eine Gehfähigkeit mit/ohne Hilfsmittel. Frühmobilisation (ab Tag 1) verbessert die Prognose erheblich. Neuroplastizität: Das Gehirn bildet neue neuronale Verbindungen — dieser Prozess ist in den ersten 3 Monaten am stärksten. Was du heute tust (Bobath, Bettkante, Atemübungen) beeinflusst direkt wie viel Funktion morgen möglich ist. (AWMF S3 Schlaganfall; DGG 2022)",
          explanationB1:
            "Es ist sehr unterschiedlich — aber viele Schlaganfall-Patienten können nach Monaten Reha wieder gehen (mit oder ohne Hilfe). In den ersten 3 Monaten kann das Gehirn neue Wege bilden (= Neuro-Plastizität). Was du heute tust, ist wichtig für morgen.",
        },
      },
    },

    // Step 5.4 — Branching: Katheter-Entscheidung (Klein-Branching)
    {
      stepId: "ce02-petrov-eval-04-katheter-entscheidung",
      phase: 5,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: [
        "KRINKO 2015 Prävention katheter-assoziierter Harnwegsinfektionen",
        "CDC/HICPAC 2019 CAUTI-Prävention",
        "§ 4 PflBG",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-petrov-eval-katheter-management",
      tag: "pflege",
      contentC1: {
        title: "Proaktives Katheter-Management",
        body: "Der BVK liegt seit 5 Tagen. Laut Arztanordnung: Re-Evaluation nach 14 Tagen. Du weißt: Jeder Tag mit BVK = erhöhtes CAUTI-Risiko. Was tust du?",
        glossarBegriffe: ["CAUTI", "BVK", "KRINKO", "proaktiv"],
      },
      contentB1: {
        title: "Der Katheter — was tust du?",
        body: "Der Katheter liegt seit 5 Tagen. Der Arzt hat gesagt: Kontrolle nach 14 Tagen. Du weißt: Jeder Tag mit Katheter erhöht das Risiko für eine Harnwegs-Infektion. Was tust du?",
        glossarBegriffe: ["CAUTI", "BVK", "Katheter"],
      },
      question: {
        fragetext:
          "BVK liegt seit 5 Tagen — Arztanordnung: Re-Evaluation in 14 Tagen. Jeder Kathetertag = erhöhtes CAUTI-Risiko. Was tust du?",
        branchingOptions: [
          {
            text: "Ich warte die 14 Tage ab — Arztanordnung ist Arztanordnung.",
            isCorrect: false,
            feedback:
              "Passiv-Abwarten ohne aktive Beobachtung und Kommunikation ist keine Pflegequalität. KRINKO 2015 empfiehlt: BVK so früh wie möglich entfernen — täglich neu beurteilen ob er noch nötig ist. Pflegerische Aufgabe: Beobachten, dokumentieren, proaktiv kommunizieren. Eine Arztanordnung gibt das Datum als Maximum, nicht als Pflicht.",
            feedbackB1:
              "Einfach warten ist nicht Pflege-Qualität. Jeder Tag mit Katheter erhöht das Risiko. Du beobachtest aktiv und sagst dem Arzt Bescheid.",
          },
          {
            text: "Ich melde Frau Wegner (Praxisanleiterin) den Befund + meinen Vorschlag, dass wir den Arzt heute über die mögliche frühere Entfernung informieren — und gehe das Gespräch ggf. mit ihr gemeinsam.",
            isCorrect: true,
            feedback:
              "Proaktive Kommunikation im realen Hierarchie-Workflow — genau richtig. Als Pflegeschülerin im 2./3. AD führst du selten allein die Arzt-Kommunikation; du meldest deiner Praxisanleiterin den Befund (Tag 5, unauffällig, kein klinischer Infektionsverdacht) und deinen Vorschlag, sie spricht oder begleitet das Gespräch mit dem Arzt. Das ist pflegerische Eigenverantwortung nach § 4 PflBG und entspricht KRINKO 2015: Katheter so früh wie möglich entfernen. Du arbeitest nicht gegen die Anordnung — du ergänzt sie mit aktueller Beobachtung.",
            feedbackB1:
              "Richtig. Du sagst Frau Wegner Bescheid: \"Der Katheter liegt seit 5 Tagen. Der Urin ist unauffällig. Können wir den Arzt fragen, ob wir früher entfernen?\" Sie spricht mit dem Arzt — oder ihr macht das gemeinsam. Das ist proaktiv. Jeder Tag weniger mit Katheter = weniger Risiko.",
          },
          {
            text: "Ich entferne den Katheter selbst — 5 Tage ist lang genug.",
            isCorrect: false,
            feedback:
              "Nein. BVK-Entfernung ist ärztliche Anordnungspflicht — du kannst das nicht eigenständig entscheiden. Pflegerische Aufgabe ist das Vorbereiten, Beobachten, Informieren. Die Entfernung selbst ist dann durchführbar — aber nur nach Anordnung.",
            feedbackB1:
              "Nein. Du darfst das nicht alleine entscheiden. Erst den Arzt informieren. Der Arzt gibt die Anordnung — dann kannst du den Katheter entfernen.",
          },
        ],
      },
    },

    // Step 5.5 — Reflection: Natalyas Frage
    {
      stepId: "ce02-petrov-eval-05-reflexion-natalya",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "ICN 2021 Code of Ethics for Nurses",
        "§ 630f BGB — Behandlungsdokumentation",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-petrov-eval-reflexion-angehoerige",
      tag: "pflege",
      contentC1: {
        title: "Reflexion: \"Wird er wieder normal?\"",
        body: "Stell dir vor, Natalya fragt dich beim Weggehen:\n\n\"Wird er wieder normal?\"\n\nDu bist Pflegeschüler. Du kennst die Prognose nicht. Du darfst Hoffnung geben — aber keine Versprechen machen. Wie antwortest du — und was sagst du nicht?",
        glossarBegriffe: ["Prognose", "Autonomie", "Aufklärungspflicht"],
      },
      contentB1: {
        title: "Reflexion: Was sagst du Natalya?",
        body: "Natalya fragt dich beim Weggehen: \"Wird er wieder normal?\" Du bist Pflege-Schüler. Du weißt die Prognose (= Vorhersage) nicht. Was sagst du?",
        glossarBegriffe: ["Prognose"],
      },
      question: {
        reflection: {
          prompt:
            "Wie antwortest du auf Natalyas Frage? Bedenke: Ehrlichkeit ohne Entmutigung. Keine medizinischen Prognose-Aussagen als Pflegeschüler. Verweis auf das richtige Team. Anerkennung ihrer Rolle.",
          placeholder:
            "\"Ich kann Ihnen das nicht sagen — aber...\"",
          systemPrompt:
            "Prüfe die Reflexion auf folgende Kriterien: 1) Ehrlich — keine falschen Versprechen. 2) Nicht entmutigend — Hoffnung bleibt. 3) Verweis auf Arzt/Reha-Team für die Prognose. 4) Anerkennung von Natalyas Rolle und Kraft. 5) Keine medizinischen Prognose-Aussagen (Prozente, Zeitrahmen) vom Pflegeschüler. Feedback: Sandwich-Prinzip (was gut war + was fehlt + Ermutigung).",
        },
        fragetext:
          "Wie antwortest du Natalya auf die Frage: \"Wird er wieder normal?\"",
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 22,
};
