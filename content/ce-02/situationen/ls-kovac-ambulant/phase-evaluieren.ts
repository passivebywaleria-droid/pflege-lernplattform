// CE-02 Situation Kovač — Phase 5: Evaluieren — Abendbesuch, Schlaf-Rückblick, Maßnahmen-Wirkung
// Steps: 4 · Bloom: B4-B5 · Zeit: ~15-20 Min
// Quelle: phase-evaluieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren & Anpassen",
  titelB1: "Was hat heute geholfen?",
  kontext:
    "Es ist 18:30 Uhr. Du klingelst zum Abendbesuch. Du weißt: du warst heute Morgen bei Frau Kovač, die Trinkbecher standen auf dem Küchentisch, du hast das Schlafgespräch angekündigt. Jetzt schaust du, was davon angekommen ist. Frau Kovač öffnet die Tür — sie sieht weniger erschöpft aus als morgens. Oder bildest du dir das ein?",
  kontextB1:
    "Es ist 18:30 Uhr — Abendbesuch. Heute Morgen warst du bei Frau Kovač. Du hast Übungen gemacht, Trinkbecher hingestellt, das Schlafgespräch angekündigt. Jetzt schaust du: Was hat funktioniert? Was hat nicht funktioniert?",
  kernSteps: [
    // Step 5.1 — Trinkprotokoll Kategorisierung
    {
      stepId: "ce02-kovac-eval-01-trinkprotokoll-abend",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Kontinenzförderung in der Pflege 2014",
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-kovac-ambulant-eval-maßnahmen",
      tag: "pflege",
      contentC1: {
        title: "Evaluation — was hat funktioniert?",
        body: "Du schaust auf das Trinkprotokoll und fragst Frau Kovač nach den Übungen. Frau Kovač sagt: **\"Die Übungen heut Morgen — ich hab's nochmal probiert, allein. Zweimal.\"**\n\nKategorisiere die Maßnahmen nach ihrer Wirksamkeit heute: Hat funktioniert / Teilweise / Noch offen.",
        glossarBegriffe: ["Evaluation", "Pflegeprozess"],
      },
      contentB1: {
        title: "Was hat heute funktioniert?",
        body: "Du schaust auf das Trinkprotokoll. Frau Kovač sagt: **\"Die Übungen heut Morgen — ich hab's nochmal probiert, allein. Zweimal.\"**\n\nOrdne ein: Was hat heute funktioniert? Was teilweise? Was noch nicht?",
        glossarBegriffe: ["Evaluation"],
      },
      question: {
        fragetext:
          "Ordne die Maßnahmen des heutigen Morgenbesuchs nach ihrer Wirksamkeit ein.",
        categories: [
          { name: "Hat funktioniert" },
          { name: "Teilweise" },
          { name: "Noch offen" },
        ],
        categoryItems: [
          {
            text: "3 Trinkbecher aufgestellt — 2 von 3 geleert (680 ml bis 18:30 Uhr)",
            correctCategory: 1,
          },
          {
            text: "Frau Kovač hat Bewegungsübungen nachmittags allein wiederholt — 2×",
            correctCategory: 0,
          },
          {
            text: "Kompressionsstrümpfe: Verweigerung nach vollständiger Aufklärung dokumentiert — Patientenautonomie respektiert (§ 1901a BGB)",
            correctCategory: 0,
          },
          {
            text: "Schlafgespräch und TV-Nutzung verändern — Abend heute angekündigt",
            correctCategory: 2,
          },
          {
            text: "Atemübungen mit Lippenbremse morgens durchgeführt (mit Unterbrechung bei Kurzatmigkeit)",
            correctCategory: 1,
          },
        ],
      },
      wusstestDuDas:
        "Evaluation ist keine Erfolgskontrolle, sondern Datenerhebung für den nächsten Plan. 'Teilweise' ist kein Versagen — es ist Ausgangspunkt für die Anpassung.",
    },

    // Step 5.2 — Schlafberatung Dialog (4 Phasen)
    {
      stepId: "ce02-kovac-eval-02-schlafberatung-abend",
      phase: 5,
      stepType: "dialog",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-kovac-ambulant-eval-schlafberatung",
      tag: "pflege",
      contentC1: {
        title: "Das Schlafgespräch — jetzt",
        body: "Du hast das Gespräch heute Morgen angekündigt. Frau Kovač erwartet es. Vier Dialogphasen — führe das Gespräch auf Augenhöhe.",
        glossarBegriffe: [
          "Motivierende Gesprächsführung",
          "Schlafhygiene",
          "Zirkadiane Rhythmik",
          "Melatonin",
        ],
      },
      contentB1: {
        title: "Das Schlaf-Gespräch",
        body: "Du hast heute Morgen versprochen: heute Abend besprechen wir den Schlaf. Jetzt ist es so weit. Führe das Gespräch in vier Schritten.",
        glossarBegriffe: ["Schlafhygiene", "Melatonin"],
      },
      question: {
        fragetext: "Führe das Schlafgespräch mit Frau Kovač.",
        patientName: "Frau Kovač",
        dialogPhases: [
          {
            context:
              "Du greifst das Morgen-Gespräch wieder auf. Du eröffnest das angekündigte Schlafgespräch.",
            contextB1:
              "Du erinnerst Frau Kovač an das angekündigte Gespräch über den Schlaf.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Kovač, ich wollte heute Abend mit Ihnen über den Schlaf sprechen — erinnern Sie sich, ich hatte das heute Morgen angekündigt?\"",
                textB1:
                  "\"Frau Kovač, ich wollte über den Schlaf sprechen. Ich hatte das heute Morgen gesagt — erinnern Sie sich?\"",
                patientResponse:
                  "\"Ja, ja. Sie haben gesagt, Sie erklären mir was mit dem Fernsehen ist.\"",
                patientResponseB1:
                  "\"Ja. Sie haben gesagt, Sie erklären mir warum das Fernsehen schlecht ist.\"",
                score: 3,
                feedback:
                  "Gut — du knüpfst an die Morgen-Ankündigung an. Frau Kovač erinnert sich und zeigt Bereitschaft. Weiter.",
                feedbackB1:
                  "Gut. Frau Kovač erinnert sich. Sie ist bereit zuzuhören.",
              },
            ],
          },
          {
            context:
              "Frau Kovač erinnert sich. Du erklärst ihr den Zusammenhang zwischen Fernsehen und Schlafqualität.",
            contextB1:
              "Frau Kovač hört zu. Du erklärst warum Fernsehen den Schlaf stört.",
            speaker: "Du",
            options: [
              {
                text: "\"Das Fernsehen bis Mitternacht — das Licht des Bildschirms gibt Ihrem Körper das Signal: Tag. Deshalb schüttet Ihr Körper kein Melatonin aus — das ist das Hormon, das Sie müde macht und einschlafen lässt.\"",
                textB1:
                  "\"Der Fernseher sendet blaues Licht. Das sagt Ihrem Körper: Es ist Tag. Deshalb macht Ihr Körper kein Melatonin (= das Schlaf-Hormon). Ohne Melatonin kommen Sie nicht ins Schlafen.\"",
                patientResponse:
                  "\"Melatonin — das kenn ich. Aus der Apotheke.\" — Sie überlegt kurz.",
                patientResponseB1:
                  "\"Melatonin — das gibt es in der Apotheke, oder?\" — Sie denkt nach.",
                score: 3,
                feedback:
                  "Sehr gut — die Erklärung ist sachlich, verständlich und ohne Vorwurf. Frau Kovač kennt Melatonin — das ist ein Anknüpfungspunkt. Weiter.",
                feedbackB1:
                  "Gut. Einfach erklärt. Frau Kovač kennt Melatonin — das hilft.",
              },
            ],
          },
          {
            context:
              "Frau Kovač sagt: \"Aber dann kann ich nicht einschlafen. Ohne Fernsehen ist es so still.\" Das ist ihr echtes Bedürfnis.",
            contextB1:
              "Frau Kovač sagt: \"Aber ohne Fernsehen ist es so still. Dann kann ich nicht einschlafen.\" Das ist ihr echtes Problem.",
            speaker: "Frau Kovač",
            options: [
              {
                text: "\"Das verstehe ich, Frau Kovač. Was wäre denn eine Alternative für diese Stille — was würde Ihnen helfen, nicht allein zu sein beim Einschlafen?\"",
                textB1:
                  "\"Das verstehe ich. Was wäre denn statt Fernsehen möglich? Was könnte Ihnen helfen, wenn es so still ist?\"",
                patientResponse:
                  "Frau Kovač überlegt. \"Radio vielleicht. Ich mag Volksmusik. Aber leise.\"",
                patientResponseB1:
                  "Frau Kovač denkt. \"Radio vielleicht. Leise. Das mag ich.\"",
                score: 3,
                feedback:
                  "Perfekt. Du erkennst ihr Bedürfnis (Stille ist das Problem, nicht das Fernsehen an sich) und öffnest eine Lösung von ihr — nicht von dir. Radio hat kein Blaulicht. Das ist eine realistische Alternative die von ihr kommt.",
                feedbackB1:
                  "Sehr gut. Du verstehst: die Stille ist das Problem. Du fragst sie nach einer Lösung. Die Idee kommt von ihr — das ist wichtig.",
              },
              {
                text: "\"Dann hören Sie lieber Radio — das hat kein Blaulicht und stört den Schlaf weniger.\"",
                textB1:
                  "\"Dann hören Sie Radio. Das ist besser für den Schlaf.\"",
                patientResponse:
                  "Frau Kovač zuckt mit den Schultern. \"Wenn Sie meinen.\"",
                patientResponseB1:
                  "Frau Kovač nickt. Aber sie klingt nicht überzeugt.",
                score: 1,
                feedback:
                  "Gut gemeint, aber Bevormundung. Du gibst die Lösung vor ohne zu fragen was ihr hilft. Frau Kovač wird Radio hören 'weil die Schwester es gesagt hat' — nicht weil sie es will. Nachhaltig ist das nicht.",
                feedbackB1:
                  "Nicht ideal. Du gibst die Antwort. Aber die Idee sollte von ihr kommen — sonst macht sie es nicht wirklich.",
              },
              {
                text: "\"Versuchen Sie es mal eine Nacht ohne Fernsehen. Was haben Sie zu verlieren?\"",
                textB1:
                  "\"Probieren Sie es mal ohne Fernsehen. Nur eine Nacht.\"",
                patientResponse:
                  "Frau Kovač sieht dich kurz an. \"Ich hab Josip zu verlieren. Wissen Sie, wann er gestorben ist? Um halb zwölf nachts. Seitdem kann ich nicht allein einschlafen.\"",
                patientResponseB1:
                  "Frau Kovač sieht dich an. \"Sie wissen nicht warum ich das Fernsehen brauche.\"",
                score: 0,
                feedback:
                  "Herausforderung ohne Empathie — und du bekommst die Antwort die dich trifft. Frau Kovačs TV-Ritual beginnt mit Josips Tod um halb zwölf. Es ist kein schlechtes Habit, es ist Trauer. Ohne dieses Verständnis scheitert das Gespräch hier. Geh zurück und wähle Pfad A.",
                feedbackB1:
                  "Nicht gut. Du weißt nicht warum Frau Kovač das Fernsehen braucht. Das Gespräch geht schlecht aus. Geh zurück zu Pfad A.",
              },
            ],
          },
          {
            context:
              "Frau Kovač hat Radio als Idee eingebracht. Du schließt das Gespräch mit einer konkreten Vereinbarung ab.",
            contextB1:
              "Frau Kovač möchte vielleicht Radio hören. Du schließt das Gespräch ab.",
            speaker: "Du",
            options: [
              {
                text: "\"Das klingt gut. Sollen wir vereinbaren: heute Abend probieren Sie Radio statt Fernsehen, bis Sie eingeschlafen sind? Ich frage morgen früh nach wie es war.\"",
                textB1:
                  "\"Wollen wir das ausprobieren? Heute Abend Radio statt Fernseher. Morgen früh frage ich wie es war.\"",
                patientResponse:
                  "\"Na, einmal. Schaun wir.\" — Sie ist nicht begeistert, aber sie stimmt zu.",
                patientResponseB1:
                  "\"Na gut, einmal.\" — Frau Kovač stimmt zu.",
                score: 3,
                feedback:
                  "Richtig abgeschlossen. Vereinbarung kommt von ihr, ist konkret, ist terminiert (heute Abend), hat einen Feedback-Loop (morgen früh fragen). Das ist professionelle Schlafberatung.",
                feedbackB1:
                  "Gut. Die Vereinbarung ist konkret und von ihr. Du fragst morgen nach. Das ist Pflege-Beratung.",
              },
            ],
          },
        ],
      },
    },

    // Step 5.3 — Pflegeplan anpassen Matching
    {
      stepId: "ce02-kovac-eval-03-pflegeplanung-anpassen",
      phase: 5,
      stepType: "matching",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "§ 630f BGB",
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-kovac-ambulant-eval-pflegeplan",
      tag: "pflege",
      contentC1: {
        title: "Pflegeplan anpassen — Befund trifft Maßnahme",
        body: "Jetzt aktualisierst du den Pflegeplan. Paare den aktuellen Befund mit der passenden Maßnahmen-Anpassung.",
        glossarBegriffe: ["Pflegeplanung", "SMART-Ziel"],
      },
      contentB1: {
        title: "Was muss sich morgen ändern?",
        body: "Der heutige Tag hat etwas gezeigt. Was muss im Plan für morgen anders sein? Verbinde Befund mit Anpassung.",
        glossarBegriffe: ["Pflegeplanung"],
      },
      question: {
        fragetext:
          "Paare den Befund von heute mit der passenden Maßnahmen-Anpassung für morgen.",
        matchingPairs: [
          {
            left: "Frau Kovač hat die Übungen 2× allein wiederholt",
            right: "Ziel erhöhen: 2× täglich selbstständig; Frau Kovač explizit loben",
          },
          {
            left: "Trinkmenge bis 18:30 Uhr: 680 ml (2 von 3 Bechern geleert)",
            right: "Heute Abend noch 2 Becher anbieten, Tagesziel ~1.100 ml",
          },
          {
            left: "Schlaf: keine Änderung noch — Radio-Vereinbarung für heute Abend",
            right: "Morgen früh nachfragen wie die Nacht war und Effekt dokumentieren",
          },
          {
            left: "Kompressionsstrümpfe weiter verweigert trotz Aufklärung",
            right: "Erneute Aufklärung heute Abend oder Arzt einbeziehen — Entscheidung dokumentieren",
          },
        ],
      },
    },

    // Step 5.4 — Reflexion ambulant vs. stationär
    {
      stepId: "ce02-kovac-eval-04-reflexion-ambulant",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Erhaltung und Förderung der Mobilität 2017/2024"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-kovac-ambulant-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Reflexion — ambulante Evaluation",
        body: "Nach dem Abendbesuch: Kurze Reflexionsfrage (2–3 Sätze).",
        glossarBegriffe: ["Evaluation", "Pflegeprozess"],
      },
      contentB1: {
        title: "Was ist schwierig an der ambulanten Pflege?",
        body: "Schreibe 1–2 Sätze: Was ist das Schwierigste an der Evaluation in der ambulanten Pflege?",
        glossarBegriffe: ["Evaluation"],
      },
      question: {
        fragetext:
          "Was ist das Schwierigste an der Evaluation in der ambulanten Pflege — verglichen mit der stationären? Was fehlt dir, was du im Krankenhaus hättest?",
        musterantwort:
          "Erwartete Themen: Keine Kontinuität im Team (jede Kollegin sieht nur einen Besuch), keine 24h-Beobachtung (Lücken zwischen den Besuchen), Rückschlüsse aus lückenhaften Protokollen und Eigenaussagen der Patientin, fehlende Möglichkeit zur sofortigen Rücksprache mit Arzt.",
        bewertungskriterien: [
          "Mindestens 1 konkreter Unterschied ambulant/stationär genannt",
          "Bezug auf heutigen Fall (nicht nur abstrakt)",
          "Keine reine Wiederholung von Theorie aus Phase 1",
        ],
        satzanfaengeB1: [
          "Das Schwierigste ist ...",
          "Im Krankenhaus hätte ich ...",
          "Bei Frau Kovač fehlt mir ...",
          "Ich kann nicht wissen, was zwischen den Besuchen ...",
        ],
      },
    },
  ],
  optionaleSteps: [
    // Opt-5.A — Querverweise Evaluation
    {
      stepId: "ce02-kovac-eval-opt-a-querverweise",
      phase: 5,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "crossref",
      contentC1: {
        title: "Was bedeutet Evaluation im Pflegeprozess?",
        body: "Evaluation ist Phase 5 des sechsstufigen Pflegeprozesses (Assess, Diagnose, Plan, Implement, Evaluate, Document). Sie prüft: Hat die Maßnahme das Ziel erreicht? Wenn nicht — warum nicht? Welche Anpassung ist nötig?\n\nFür Frau Kovač: Das Pflegeziel war 'Trinkmenge ≥1.200 ml in 3 Tagen'. Das Ergebnis heute: 680 ml bis 18:30 Uhr. Zum Tagesziel fehlt noch etwas — das ist Ausgangspunkt für den Abendbesuch und den Plan für morgen.",
        glossarBegriffe: ["Evaluation", "Pflegeprozess", "SMART-Ziel"],
      },
      contentB1: {
        title: "Was ist Evaluation?",
        body: "Evaluation = Nachschauen ob das Pflegeziel erreicht ist.\n\nBeispiel: Das Ziel war: Frau Kovač trinkt mehr. Hat sie mehr getrunken? Wie viel? Was muss morgen anders sein?\n\nEvaluation ist keine Kontrolle. Es ist: Informationen sammeln um den Plan zu verbessern.",
        glossarBegriffe: ["Evaluation", "Pflegeziel"],
      },
    },
    // Opt-5.B — Timeline des Tages
    {
      stepId: "ce02-kovac-eval-opt-b-timeline",
      phase: 5,
      stepType: "timeline",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      contentC1: {
        title: "Zeitstrahl — ein Tag bei Frau Kovač",
        body: "Visualisiere den Pflegetag von Frau Kovač.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was ist heute alles passiert?",
        body: "Schau dir den Zeitstrahl des heutigen Tages an.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Verfolge den Tag von Frau Kovač — Morgen bis Abend.",
        timeline: {
          instruction:
            "Überblick über den heutigen Pflegetag von Frau Kovač — Maßnahmen und Reaktionen.",
          events: [
            {
              id: "t-01",
              time: "07:30 Uhr",
              title: "Morgenbesuch beginnt",
              description:
                "Übergabe gelesen: 820 ml gestern, 4 Tage kein Stuhlgang, Kompressionsstrümpfe verweigert, Erschöpfung.",
              descriptionB1:
                "Du kommst an. Übergabe: zu wenig Trinken, Verstopfung, Strümpfe abgelehnt.",
              highlight: true,
            },
            {
              id: "t-02",
              time: "07:35 Uhr",
              title: "Wohnungscheck",
              description:
                "Teppich (Stolpergefahr), Trinkprotokoll-Lücke, Kompressionsstrümpfe unbenutzt in Packung.",
              descriptionB1:
                "Du siehst Risikofaktoren: Teppich, zu wenig Trinken, Strümpfe unbenutzt.",
            },
            {
              id: "t-03",
              time: "07:40 Uhr",
              title: "Gespräch über Schlaf + Befunde",
              description:
                "Schlafanamnese: Einschlaflatenz ca. 45 Min, Erwachen 02:00, TV als Kompensation.",
              descriptionB1:
                "Du fragst nach dem Schlaf. Frau Kovač erzählt.",
            },
            {
              id: "t-04",
              time: "07:55 Uhr",
              title: "Aufklärung Kompressionsstrümpfe",
              description:
                "Unterschied ASS vs. Kompressionstherapie erklärt. Frau Kovač: 'Ich brauch keine Strümpfe.' — Ablehnung dokumentiert.",
              descriptionB1:
                "Du erklärst warum Strümpfe wichtig sind. Frau Kovač sagt Nein. Du schreibst es auf.",
              highlight: true,
            },
            {
              id: "t-05",
              time: "08:00 Uhr",
              title: "Atemübungen — Komplikation",
              description:
                "Lippenbremse mit Kontaktatmung — nach 4 Wiederholungen Kurzatmigkeit + Lippenzyanose. Übung gestoppt, Frischluft, Beobachtung.",
              descriptionB1:
                "Atemübungen — dann Atemnot. Übung gestoppt. Fenster auf. Frau Kovač erholt sich.",
              highlight: true,
            },
            {
              id: "t-06",
              time: "08:10 Uhr",
              title: "Bewegungsübungen + Sohn ruft an",
              description:
                "Knie/Sprunggelenk-Mobilisation im Sitzen. Komplikation: Darko ruft an — kein Gesundheitsdaten-Weitergabe ohne Einwilligung.",
              descriptionB1:
                "Bewegungsübungen. Dann ruft Sohn Darko an. Du gibst keine Informationen — Datenschutz.",
            },
            {
              id: "t-07",
              time: "08:15 Uhr",
              title: "Trinkgespräch + Becher bereitstellen",
              description:
                "3 Becher à 200 ml auf Küchentisch. Ziel vereinbart: schrittweise auf 1.200 ml.",
              descriptionB1:
                "3 Becher hingestellt. Ziel: mehr trinken, schrittweise.",
            },
            {
              id: "t-08",
              time: "18:30 Uhr",
              title: "Abendbesuch — Evaluation",
              description:
                "2 von 3 Bechern geleert (680 ml). Frau Kovač hat Übungen 2× allein gemacht. Schlafgespräch geführt — Radio-Vereinbarung.",
              descriptionB1:
                "2 Becher getrunken. Übungen 2× selbst gemacht. Schlaf-Gespräch: sie probiert Radio.",
              highlight: true,
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 18,
};
