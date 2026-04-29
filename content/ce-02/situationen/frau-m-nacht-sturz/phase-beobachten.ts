// CE-02 Situation Frau M. — Phase 2: Beobachten & Risiken erkennen
// Steps: 6 · Bloom: B3-B4 · Brilliant-Prinzip: Step 2.1
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-frau-m-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Risiken erkennen",
  titelB1: "Schauen und Risiken finden",
  kontext:
    "Du bist im Zimmer. Die Tür ist hinter dir leise zugefallen, der schmale Spalt Flurlicht ist verschwunden, jetzt brennt nur die Bett-Leselampe. Sie wirft einen warmen Kreis auf den Linoleumboden — und mitten in diesem Kreis liegt Frau M., auf der linken Seite, das Nachthemd hochgerutscht bis zum Knie, eine Hand an der Hüfte, die andere stützt sich am Bettrahmen. Sie atmet flach. Ihre dünnen weißen Haare sind verstrubbelt, eine Strähne klebt an der Wange, die Brille liegt einen Meter weiter unter dem Stuhl, ein Bügel verbogen. Es riecht nach Eukalyptus-Nasenspray, nach Schweiß und einer kalten Spur Urin auf dem Boden — sie hat es nicht mehr geschafft. Frau M. schaut dich an. Ihr Blick ist klar, aber feucht, der Mund leicht geöffnet. Sie sagt mit leiser, brüchiger Stimme: 'Ich wollte nur kurz...', und es klingt entschuldigend, fast wie bei einem Kind, das etwas Verbotenes getan hat. Du hockst dich neben sie, knietief, das Linoleum kühl unter den Knien, dein Puls noch immer höher als normal. Du hast die ersten Sekunden hinter dir, das erste Assessment im Kopf abgehakt: Bewusstsein klar, Atmung vorhanden, kein Blut, keine offensichtliche Deformität, kein verkürztes Bein, keine Außenrotation. NRS 4 von 10 in der linken Hüfte, sagt sie, wenn sie sich bewegt. Stimme ruhig. Orientiert zu Person, Ort, Zeit, Situation. Aber: Warum liegt sie hier? Du blickst dich um. Das Bett steht hoch. Die Bettgitter sind unten. Das Nachtschränkchen ist weiter weg, als ein 82-jähriger Arm reichen kann, der Klingelknopf hängt am Bettkopf — vier Hebelbewegungen entfernt. Auf der Decke liegt eine angefangene Kreuzworträtsel-Zeitschrift, der Bleistift dazwischen. Auf dem Tisch: ein Glas Wasser, halb leer. Die Toilettentür ist nur angelehnt, das Licht darin aus, der Boden bis dorthin acht oder neun Schritte. Im Hinterkopf läuft jetzt deine zweite Spur: Anamnese, Risikofaktoren, Medikation, Krankheitslehre. Pneumonie, Parkinson, 82, fremdes Krankenhaus, fünf Wirkstoffe auf der Liste. Was hat sie nachts auf den Boden gebracht? Eine Sache wird es nicht sein. Stürze haben fast nie eine Ursache, sondern immer ein Bündel. Du musst das Sichtbare und das Unsichtbare zusammenbringen. Auf dem Bettzettel klebt ein gelber Aufkleber: 'Sturzrisiko'. Jemand hat ihn geschrieben — und trotzdem ist es passiert. Das ist nicht Schuld, das ist Realität: Risiko ist kein Sturz, Risiko ist Wahrscheinlichkeit. Jetzt: ruhiges, methodisches Hinschauen. Die Antwort liegt in den Faktoren, die dir die Augen, die Akte und die Medikamentenliste zeigen.",
  kontextB1:
    "Du bist im Zimmer. Die Tür ist zu. Nur die kleine Lampe am Bett brennt. Frau M. liegt auf dem Boden, auf der linken Seite. Ihre Brille liegt unter dem Stuhl. Sie atmet flach. Es riecht nach Spray, Schweiß und ein wenig Urin. Frau M. schaut dich an. Sie sagt leise: 'Ich wollte nur kurz...' Du hockst dich neben sie. Du machst das erste Assessment. Sie ist wach. Sie atmet. Kein Blut. Kein verdrehtes Bein. Schmerzen: 4 von 10 in der linken Hüfte. Sie weiß, wer sie ist und wo sie ist. Gut. Aber: Warum liegt sie hier? Du schaust dich um. Das Bett steht hoch. Die Gitter sind unten. Der Klingel-Knopf ist weit weg. Auf dem Tisch: ein halbes Glas Wasser. Die Toilette ist offen, das Licht ist aus. Auf dem Bett-Zettel klebt ein gelber Aufkleber: 'Sturzrisiko'. Jemand wusste es. Trotzdem ist es passiert. Jetzt denkst du nach. Frau M. ist 82. Sie hat eine Lungenentzündung. Sie hat Parkinson. Sie ist nicht zuhause. Sie nimmt Medikamente. Was hat sie gestürzt? Du musst alles zusammenbringen — was du siehst, was in der Akte steht und was sie nimmt. Die Antwort liegt in den Risiken.",
  kernSteps: [
    // Step 2.1 zuerst — Brilliant-Frage: Schüler markiert ERST, dann kommt PIM-Erklärung.
    // FIX (2026-04-29): PIM-Baustein nach Highlight verschoben — zwei Inline-Wissen
    // hintereinander (NRS Ende Phase 1 + PIM Anfang Phase 2) war didaktisch schlecht.
    // Jetzt: erst raten (Brilliant), dann erklären (Inline-Wissen).

    // PIM-Inline-Wissen wurde nach Step 2.1 (Highlight) verschoben — siehe unten.

    // ───── Step 2.1 — Highlight: Medikamente sichten (BRILLIANT-Frage) ─────
    // (war vorher Step 2 nach PIM, jetzt Step 1 der Phase — erst raten!)
    {
      stepId: "ce02-frau-m-beob-01-medis-sichten",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "PRISCUS-Liste 2.0 (Holt et al. 2023)",
        "Beers-Liste 2023 (American Geriatrics Society)",
        "DGG (Deutsche Gesellschaft für Geriatrie) — Polypharmazie-Empfehlungen 2024",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-beob-pim-grundwissen",
      tag: "krankheitslehre",
      transition: "Du hast markiert. Jetzt erklaeren wir, warum genau diese Wirkstoffe gefaehrlich sind.",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["assessments-expertenstandards"],
      contentC1: {
        title: "Was ist eine PIM — und warum interessiert dich das?",
        body: "",
        glossarBegriffe: ["PIM", "PRISCUS-Liste", "Polypharmazie"],
      },
      contentB1: {
        title: "Was ist eine PIM?",
        body: "",
        glossarBegriffe: ["PIM", "PRISCUS-Liste"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-pim-priscus",
        storyAufhaenger:
          "Du öffnest gleich Frau M.s Medikamentenliste. 5 Wirkstoffe. Aber nicht alle wirken bei einer 82-Jährigen so wie bei einer 30-Jährigen. Manche werden bei Älteren regelrecht zum Sturz-Risikofaktor — die nennt man **PIM**.",
        storyAufhaengerB1:
          "Du schaust gleich Frau M.s Medikamenten-Liste an. 5 Medikamente. Bei alten Menschen wirken manche Medikamente anders — und können zum Sturz führen. Diese nennt man **PIM**.",
        kerntext:
          "**PIM = Potenziell Inadäquate Medikation.**\n\nMedikamente, die bei Menschen über 65 ein **erhöhtes Risiko-Nutzen-Verhältnis** haben — Stürze, Verwirrtheit, Niereninsuffizienz, Blutungen.\n\n**Zwei zentrale Listen:**\n\n• **PRISCUS-Liste 2.0 (2023)** — deutsche Standardliste, ca. 130 Wirkstoffe als problematisch markiert.\n\n• **Beers-Liste (2023)** — US-amerikanisches Pendant, international referenziert.\n\n**Häufige Sturz-relevante PIM-Klassen:**\n\n• **Z-Substanzen** (Zolpidem, Zopiclon) — Schlafmittel mit langer Wirkdauer bei Älteren\n\n• **Benzodiazepine** (Diazepam, Lorazepam) — Sedierung + Muskelschwäche\n\n• **Trizyklische Antidepressiva** (Amitriptylin) — anticholinerge Effekte\n\n• **Diuretika in der Nacht** (HCT, Furosemid) — Nykturie + Volumenmangel\n\n• **Antihypertensiva ohne RR-Monitoring** — Orthostase\n\n**Pflege-Aufgabe:**\n\nDu verschreibst nichts — aber du **erkennst** PIM, **dokumentierst** Sturz-Risiko-Konstellationen und **sprichst** sie in der Visite an. Pflege ist die Brücke zwischen Verordnung und Wirkung am Menschen.\n\n**Bei Frau M. heute Nacht:** 5 Wirkstoffe, mindestens einer davon ist ein klassischer PIM. Den findest du im nächsten Step.",
        kerntextB1:
          "**PIM heißt: Potenziell Inadäquate Medikation.**\n\nManche Medikamente sind für alte Menschen gefährlich — sie können Stürze, Verwirrung oder andere Probleme machen.\n\n**Zwei wichtige Listen:**\n\n• **PRISCUS-Liste 2.0** (2023) — deutsche Liste mit ca. 130 problematischen Wirkstoffen\n\n• **Beers-Liste** (2023) — die US-amerikanische Liste\n\n**Häufige Sturz-Auslöser bei Älteren:**\n\n• **Z-Schlafmittel** (z.B. Zolpidem, Zopiclon) — wirken bei Alten zu lang\n\n• **Benzodiazepine** (z.B. Diazepam) — machen müde und schwach\n\n• **Wassertabletten** in der Nacht (HCT, Furosemid) — sie müssen oft pinkeln\n\n• **Blutdruck-Senker** ohne Kontrolle — Schwindel beim Aufstehen\n\n**Was du als Pflege machst:**\n\n• Du **verschreibst** nichts — das macht der Arzt.\n\n• Aber du **erkennst** gefährliche Medikamente.\n\n• Du **schreibst auf**, wenn ein Medikament Sturz-Risiko erhöht.\n\n• Du **sagst** es in der Visite.\n\n**Bei Frau M.:** Sie nimmt 5 Medikamente. Mindestens eins ist ein typisches PIM. Im nächsten Schritt findest du heraus welches.",
        faustregel:
          "Schlafmittel bei > 75? Wassertabletten in der Nacht? Blutdrucksenker ohne RR-Kontrolle? Drei Anlässe für sofortigen PRISCUS-Check.",
        faustregelB1:
          "Schlafmittel bei alten Menschen? Wassertablette in der Nacht? Blutdruck-Mittel? — immer die PRISCUS-Liste prüfen.",
        spektrum: [
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Furosemid + COPD",
            kurzbeschreibung:
              "Bei ihr ist es ein Diuretikum (Furosemid) das nachts Nykturie auslöst plus Polypharmazie. Pflege im ambulanten Setting muss PIMs aktiv ansprechen, weil der Hausarzt sie nicht täglich sieht.",
          },
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Mirtazapin (PRISCUS) bei Demenz",
            kurzbeschreibung:
              "Mirtazapin steht auf der PRISCUS-Liste — sedierend, kann Orthostase verstärken. Bei Demenz-Patienten oft eingesetzt für Schlaf, aber ein Sturz-Booster.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Metformin + Polyneuropathie",
            kurzbeschreibung:
              "Metformin selbst ist kein PIM — aber bei B12-Mangel-bedingter Polyneuropathie (Diabetes-Folge) wird Sensorik der Füße schlechter. Indirekter Sturz-Faktor.",
          },
        ],
        sonstBox:
          "Weitere PIM-Klassen, die in unseren CE-02-Patienten nicht vorkommen, aber wichtig sind: **Anticholinergika** (Oxybutynin gegen Inkontinenz, Amitriptylin) — Verwirrtheit + Sturz-Risiko. **Antipsychotika** (Haloperidol, Risperidon) — Akathisie, Parkinson-ähnliche Symptome. Mehr dazu in der **PRISCUS-2.0-Liste 2023** im Anhang oder in CE-09 (Psychiatrie).",
        sonstBoxB1:
          "Andere PIM-Gruppen die wir hier nicht im Detail behandeln: **Mittel gegen Inkontinenz** (Oxybutynin), **starke Beruhigungsmittel** (Haloperidol). Mehr dazu lernst du in CE-09 (Psychiatrie) oder in der PRISCUS-Liste.",
        karteikarte: {
          vorderseite:
            "Frau M. (82) nimmt 5 Medikamente. Was ist eine PIM und welche Klassen sind sturz-relevant?",
          rueckseite:
            "PIM = Potenziell Inadäquate Medikation für > 65-Jährige (PRISCUS 2.0 / Beers 2023).\n\nSturz-relevante PIM-Klassen:\n• Z-Substanzen (Zolpidem, Zopiclon)\n• Benzodiazepine\n• Diuretika in der Nacht (Nykturie)\n• Antihypertensiva ohne RR-Monitoring\n• Anticholinergika (Verwirrtheit)\n\nFaustregel: Schlafmittel + Wassertabletten + Blutdrucksenker bei > 75 → immer PRISCUS-Check. Pflege erkennt + dokumentiert + spricht in Visite an.",
        },
      },
    },

    // ───── Step 2.1b — Inline-Wissen PIM (NACH Brilliant-Frage) ─────
    // FIX (2026-04-29): verschoben von Position 1 auf Position 2 in Phase 2.
    // Didaktisch besser: erst raten (Brilliant), dann erklären (Inline-Wissen).
    {
      stepId: "ce02-frau-m-beob-00b-pim-pflegestand",
      phase: 2,
      stepType: "highlight",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["PRISCUS 2.0 (Holt et al. 2023)", "Beers-Liste 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-beob-medis",
      tag: "krankheitslehre",
      transition: "Zolpidem. Da ist es. Schauen wir genauer hin.",
      contentC1: {
        title: "Medikamentenliste sichten",
        body: "Du öffnest die Patientenakte und findest die aktuelle Medikamentenliste von Frau M. Fünf Wirkstoffe. **Markiere alle Wirkstoffe, die dir im Zusammenhang mit dem nächtlichen Sturz verdächtig vorkommen.** Das ist eine Brilliant-Frage — bevor wir erklären, was ein PIM (potenziell inadäquate Medikation) ist, schau dir die Liste an und nutze dein Vorwissen.",
        // FIX (walkthrough B-11): Nykturie ergänzt — B1-Schüler kennt Begriff nicht.
        glossarBegriffe: ["Polypharmazie", "Nykturie"],
      },
      contentB1: {
        title: "Medikamente anschauen",
        body: "Du schaust in die Patientenakte. Frau M. nimmt 5 Medikamente. **Markiere die, die mit dem Sturz zu tun haben könnten.** Das ist eine offene Frage — erst markieren, dann erklären wir es.",
        // FIX (walkthrough B-11): Nykturie ergänzt.
        glossarBegriffe: ["Polypharmazie", "Nykturie"],
      },
      question: {
        fragetext:
          "Markiere alle Wirkstoffe, die dir im Zusammenhang mit dem nächtlichen Sturz verdächtig vorkommen.",
        highlightSegments: [
          {
            text: "Levodopa/Benserazid (Madopar)",
            isError: true,
            reason:
              "Kann orthostatische Dysregulation verursachen — Schwindel beim Aufstehen. Bei Parkinson-Medikation besonders in der Nacht/morgens kritisch.",
            reasonB1:
              "Kann Schwindel beim Aufstehen machen. Parkinson-Medikament — nachts oder morgens kritisch.",
          },
          {
            text: " — 3× 125 mg täglich, gegen Parkinson",
            isError: false,
          },
          {
            text: "Ramipril",
            isError: true,
            reason:
              "Blutdrucksenker — kann Orthostase verursachen, besonders bei Kombination mit anderen Antihypertensiva.",
            reasonB1:
              "Blutdruckmittel. Kann Schwindel beim Aufstehen machen.",
          },
          {
            text: " — 5 mg morgens, gegen Bluthochdruck",
            isError: false,
          },
          {
            text: "Hydrochlorothiazid (HCT)",
            isError: true,
            reason:
              "Diuretikum — verursacht Nykturie (nächtlicher Harndrang!) und Volumenmangel. Auslöser-Faktor für Frau M. Auch als PIM bei > 80-Jährigen diskutiert.",
            reasonB1:
              "Wassertablette. Frau M. muss nachts zur Toilette — deshalb ist sie aufgestanden.",
          },
          {
            text: " — 12,5 mg morgens, gegen Bluthochdruck",
            isError: false,
          },
          {
            text: "Zolpidem (Stilnox)",
            isError: true,
            reason:
              "HAUPT-AUSLÖSER. Steht auf PRISCUS-2.0-Liste — potenziell inadäquate Medikation (PIM) bei Älteren. Verlängerte Halbwertszeit bei > 75, Sedierung bis in die Nacht, Sturzrisiko 2- bis 3-fach erhöht. Erst seit 2 Tagen neu verordnet.",
            reasonB1:
              "HAUPT-PROBLEM. Schlafmittel. Bei alten Menschen bleibt es länger im Körper. Macht müde und unsicher. Erhöht Sturzrisiko stark. Frau M. bekommt es erst seit 2 Tagen.",
          },
          {
            text: " — 10 mg zur Nacht, seit 2 Tagen, Schlafstörung",
            isError: false,
          },
          {
            text: "Ampicillin/Sulbactam i.v.",
            isError: false,
            reason:
              "Antibiotikum gegen Pneumonie — hat für das Sturzrisiko keine direkte Relevanz.",
            reasonB1:
              "Antibiotikum gegen Lungenentzündung. Kein Sturzrisiko.",
          },
          {
            text: " — 3× 3 g täglich, gegen Pneumonie",
            isError: false,
          },
        ],
      },
    },

    // Step 2.2 — Zolpidem erklärt
    {
      stepId: "ce02-frau-m-beob-02-zolpidem-erklaert",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["PRISCUS 2.0 (Holt et al. 2023)", "DNQP 2022"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-frau-m-beob-zolpidem",
      tag: "krankheitslehre",
      transition: "Du weisst jetzt, was Frau M. nachts auf den Boden gebracht hat. Aber sie selbst weiss es nicht. Frag sie.",
      displayFormat: "scenario",
      contentC1: {
        title: "Warum Zolpidem das Hauptproblem ist",
        // FIX (walkthrough B-02): Setting-Zeile mit \n\n vom Body getrennt, sonst
        // Duplikat durch scenario-Fallback (step-text.tsx:404).
        body: "Hintergrund zur Medikation von Frau M.\n\nZolpidem gehört zu den Z-Substanzen — Schlafmittel aus der Gruppe der sogenannten **Nicht-Benzodiazepin-Hypnotika**. In der Jugend/im mittleren Alter wird es relativ schnell abgebaut (Halbwertszeit 2-3 h). Bei älteren Menschen ist das anders: Leber- und Nierenfunktion nehmen ab, die **Halbwertszeit verlängert sich auf bis zu 6-8 h**. Das heißt: Um 22 Uhr eingenommen, wirkt Zolpidem bei Frau M. noch nachts um 3 Uhr und morgens um 7 Uhr — sedierend, muskelrelaxierend, kognitiv dämpfend. Die PRISCUS-2.0-Liste (Holt/Schmiedl/Thürmann 2023) listet Zolpidem als **potenziell inadäquate Medikation (PIM)** im Alter. Das Sturzrisiko ist 2- bis 3-fach erhöht. Bei Frau M. kam dazu: Zolpidem (sediert) + HCT (Nykturie treibt nachts zur Toilette) + Parkinson (Bradykinese) = ein klassisches **Sturz-Trio**.",
        // FIX (walkthrough B-12): PRISCUS, Z-Substanzen, PIM ergänzt (hochspezifische Fachbegriffe).
        // FIX (walkthrough B-11): Nykturie ergänzt.
        glossarBegriffe: [
          "Polypharmazie",
          "PRISCUS-Liste",
          "Z-Substanzen",
          "PIM (potenziell inadäquate Medikation)",
          "Nykturie",
        ],
      },
      contentB1: {
        title: "Warum Zolpidem das Problem ist",
        // FIX (walkthrough B-02): Setting-Zeile mit \n\n vom Body getrennt.
        body: "Hintergrund zu den Medikamenten von Frau M.\n\nZolpidem ist ein Schlafmittel. Bei jungen Menschen wirkt es nur 2-3 Stunden. Bei alten Menschen wirkt es viel länger — bis zu 6-8 Stunden. Der Körper baut es langsamer ab. Frau M. hat es um 22 Uhr genommen. Um 3 Uhr nachts wirkt es noch: Sie ist **müde, unsicher, hat schwache Muskeln**. Die PRISCUS-Liste sagt: Zolpidem ist im Alter gefährlich. Das Sturzrisiko ist 2-3 Mal höher. Bei Frau M. kamen mehrere Dinge zusammen: Zolpidem (müde) + HCT (nachts zur Toilette) + Parkinson (langsame Bewegung) = typisches **Sturz-Trio**.",
        // FIX (walkthrough B-12 + B-11): PRISCUS, Z-Substanzen, Nykturie.
        glossarBegriffe: [
          "Polypharmazie",
          "PRISCUS-Liste",
          "Z-Substanzen",
          "Nykturie",
        ],
      },
    },

    // Step 2.3 — Dialog (2 Phasen): Patientenfrage
    {
      stepId: "ce02-frau-m-beob-03-patientenfrage",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-beob-fragen",
      tag: "krankheitslehre",
      transition: "Du hoerst ihr zu. Jetzt: die Risiken systematisch sortieren.",
      contentC1: {
        title: "Patientin aktiv fragen",
        body: "Du hast Zolpidem als verdächtig identifiziert. Aber du weißt noch nicht, wie Frau M. es erlebt hat. Viele Patientinnen berichten Nebenwirkungen nicht — weil sie denken, es gehöre dazu. Deshalb: **Aktiv fragen.**",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Frau M. direkt fragen",
        body: "Du weißt: Zolpidem ist wahrscheinlich das Problem. Aber wie war es für Frau M.? Viele Patienten erzählen nicht von Nebenwirkungen — sie denken, es sei normal. Also: **Aktiv nachfragen.**",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wie stellst du die Frage zur Schlaftablette?",
        patientName: "Frau M.",
        dialogPhases: [
          {
            context:
              "Du setzt dich zu Frau M., die immer noch auf dem Boden liegt (mit Decke). Du fragst:",
            contextB1:
              "Du sitzt neben Frau M. am Boden. Sie hat eine Decke. Du fragst:",
            speaker: "Du",
            options: [
              {
                text: "\"Haben Sie die Schlaftablette heute Abend auch genommen?\"",
                textB1:
                  "\"Haben Sie die Schlaftablette heute Abend genommen?\"",
                patientResponse:
                  "Frau M. überlegt einen Moment. Dann: \"Ja, die Tablette — die neue, gegen das Schlafen. Ich habe sie gestern und vorgestern genommen. Ich muss sagen, ich fühle mich morgens ein bisschen … wie in Watte. Aber ich dachte, das gehört dazu.\"",
                patientResponseB1:
                  "Frau M. denkt kurz nach. Dann: \"Ja, die neue Tablette zum Schlafen. Gestern und vorgestern. Morgens bin ich immer wie benebelt. Ich dachte, das ist normal.\"",
                score: 3,
                feedback:
                  "Sehr gut. Offen, konkret, bewertungsfrei. Das Ergebnis ist wertvoll: Frau M. hat Nebenwirkungen gespürt, aber nicht berichtet — weil sie sie für normal hielt. Genau das passiert oft. Erkenntnis für deine Praxis: Aktiv fragen ist besser als auf Beschwerden warten.",
                feedbackB1:
                  "Sehr gut. Deine Frage ist klar und offen. Die Antwort ist wichtig: Frau M. war benebelt, hat aber nichts gesagt. Sie dachte, es sei normal. Lerne daraus: Pflege muss selbst fragen.",
              },
              {
                text: "\"Sie haben doch hoffentlich nicht die Schlaftablette genommen, oder?\"",
                textB1:
                  "\"Sie haben nicht die Schlaftablette genommen, oder?\"",
                patientResponse:
                  "Frau M. zögert. \"Doch — habe ich etwas falsch gemacht?\"",
                patientResponseB1:
                  "Frau M. zögert. \"Doch — war das falsch?\"",
                score: 1,
                feedback:
                  "Suggestive Frage mit Wertung. Frau M. hat die Tablette legitim auf Anordnung bekommen und eingenommen. Deine Formulierung impliziert, sie habe etwas falsch gemacht — Scham und Verunsicherung sind die Folge. Neutral fragen.",
                feedbackB1:
                  "Die Frage hat eine Wertung. Frau M. hat die Tablette vom Arzt bekommen. Sie hat nichts falsch gemacht. Deine Frage macht sie unsicher und sie schämt sich.",
              },
              {
                text: "\"Nehmen Sie die Schlaftablette regelmäßig?\"",
                textB1:
                  "\"Nehmen Sie die Schlaftablette jede Nacht?\"",
                patientResponse:
                  "\"Ja, seit ich hier bin. Die Nacht vorher habe ich so schlecht geschlafen, da hat man mir das angeboten.\"",
                patientResponseB1:
                  "\"Ja, seit ich hier bin. Ich habe schlecht geschlafen. Die Schwester hat es mir angeboten.\"",
                score: 2,
                feedback:
                  "Gut. Neutral, offen, liefert Info. Noch besser wäre: auch nach Nebenwirkungen fragen (morgens benommen? schwindelig?). Frau M. berichtet nämlich nicht von selbst — du musst den Boden schaffen.",
                feedbackB1:
                  "Gut. Ruhige Frage, bringt Info. Noch besser: auch fragen, wie sie sich morgens fühlt. Frau M. erzählt nichts von selbst.",
              },
            ],
          },
          {
            context:
              "Frau M. hat dir gesagt: 'wie in Watte morgens'. Wie reagierst du?",
            contextB1:
              "Frau M. hat gesagt: 'wie in Watte morgens'. Was machst du?",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist eine wichtige Information, Frau M. Das 'wie in Watte' kommt wahrscheinlich von der Tablette. Das besprechen wir morgen mit dem Arzt.\"",
                textB1:
                  "\"Das ist wichtig, Frau M. Das 'wie in Watte' kommt wahrscheinlich von der Tablette. Morgen reden wir mit dem Arzt.\"",
                patientResponse:
                  "Frau M.: \"Wirklich? Ich dachte, das gehört zum Alter.\"",
                patientResponseB1:
                  "Frau M.: \"Wirklich? Ich dachte, das ist das Alter.\"",
                score: 3,
                feedback:
                  "Klar und handlungsorientiert. Du validierst die Information, erklärst ohne zu diagnostizieren (\"wahrscheinlich\"), und zeigst Frau M. den Weg nach vorn (Arzt-Gespräch). Der Zusatz-Satz 'ich dachte, das gehört zum Alter' ist wertvoll — er zeigt, warum Frau M. nichts gesagt hat.",
                feedbackB1:
                  "Sehr gut. Du sagst klar: Information ist wichtig. Du erklärst nicht zu viel. Du gibst einen Plan: Morgen mit dem Arzt reden. Frau M. versteht jetzt: Es ist nicht das Alter — es ist die Tablette.",
              },
              {
                text: "\"Das kann ganz verschiedene Ursachen haben — machen Sie sich keine Sorgen.\"",
                textB1:
                  "\"Das kann vieles sein — keine Sorge.\"",
                patientResponse:
                  "Frau M. schweigt. Dann nickt sie leicht.",
                patientResponseB1:
                  "Frau M. ist still. Sie nickt nur.",
                score: 0,
                feedback:
                  "Ausweichend. Du hast gerade wichtige Information bekommen — und wischst sie weg. Frau M. lernt daraus: Nicht berichten, es ist egal. Das ist genau das Gegenteil dessen, was du erreichen willst.",
                feedbackB1:
                  // FIX (walkthrough B-08): Sandwich-Prinzip — Ermutigen statt \"Schlecht".
                  "Du willst Frau M. beruhigen — die Absicht ist gut. Aber: Sie hat dir gerade etwas Wichtiges gesagt, und du wischst es weg. Jetzt denkt sie: 'Es interessiert niemanden.' Beim nächsten Mal: Information aufnehmen, Bedeutung benennen, Plan zeigen.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.4 — Categorize: Risikofaktoren intrinsisch/extrinsisch
    {
      stepId: "ce02-frau-m-beob-04-risikofaktoren-katz",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-beob-risiken",
      tag: "pflege",
      transition: "Bevor du Frau M. bewegst, brauchst du noch etwas: den Schellong-Test.",
      contentC1: {
        title: "Risikofaktoren von Frau M. kategorisieren",
        body: "Du hast viele Informationen über Frau M. Teile die Risikofaktoren in zwei Kategorien: **intrinsisch** (vom Patienten selbst) vs. **extrinsisch** (von der Umgebung).",
        // FIX (walkthrough B-11): Nykturie ergänzt — wird in categoryItems erwähnt.
        glossarBegriffe: [
          "Intrinsische Risikofaktoren",
          "Extrinsische Risikofaktoren",
          "Nykturie",
        ],
      },
      contentB1: {
        title: "Risiken von Frau M. sortieren",
        body: "Du kennst viele Risiken von Frau M. Sortiere sie: **intrinsisch** (vom Patienten) oder **extrinsisch** (von der Umgebung)?",
        // FIX (walkthrough B-11): Nykturie ergänzt.
        glossarBegriffe: [
          "Intrinsische Risikofaktoren",
          "Extrinsische Risikofaktoren",
          "Nykturie",
        ],
      },
      question: {
        fragetext:
          "Ordne jeden Risikofaktor der richtigen Kategorie zu: intrinsisch oder extrinsisch.",
        categories: [
          { name: "Intrinsisch (vom Patienten)" },
          { name: "Extrinsisch (von der Umgebung)" },
        ],
        categoryItems: [
          { text: "Alter 82 Jahre", correctCategory: 0 },
          { text: "Parkinson (Bradykinese, kleinschrittiger Gang)", correctCategory: 0 },
          { text: "Osteoporose", correctCategory: 0 },
          { text: "Katarakt (leichte Sehminderung)", correctCategory: 0 },
          {
            text: "Sedierung durch Zolpidem (Medikament)",
            correctCategory: 0,
          },
          {
            text: "Nykturie durch HCT (nächtlicher Harndrang)",
            correctCategory: 0,
          },
          { text: "Fremde Krankenhaus-Umgebung (nicht zuhause)", correctCategory: 1 },
          { text: "Bett-Höhe im Krankenhaus ungewohnt", correctCategory: 1 },
          { text: "Weg zum Zimmer-WC 4 Meter", correctCategory: 1 },
          { text: "Nachts wenig Licht im Zimmer", correctCategory: 1 },
        ],
      },
    },

    // Step 2.4b — Inline-Wissen \"Schellong-Test"
    // PILOT (Inline-Wissen v1, Phase 2): Vor dem Orthostase-TrueFalse wird der Schellong-
    // Test mit korrekten Schwellenwerten erklärt. So kann Schüler die 4 Aussagen
    // bewerten anstatt zu raten.
    {
      stepId: "ce02-frau-m-beob-04b-schellong-test",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "AAS-Konsensus 2011 (American Autonomic Society)",
        "DGN — S1-Leitlinie Synkope 2020",
        "DNQP Sturzprophylaxe 2022",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-beob-schellong",
      tag: "pflege",
      transition: "Theorie sitzt. Jetzt: was stimmt und was nicht?",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["mobilisation"],
      contentC1: {
        title: "Schellong-Test — die Methode bevor du sie nutzt",
        body: "",
        glossarBegriffe: ["Schellong-Test", "Orthostase", "orthostatische Dysregulation"],
      },
      contentB1: {
        title: "Wie geht der Schellong-Test?",
        body: "",
        glossarBegriffe: ["Schellong-Test", "Orthostase"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-schellong",
        storyAufhaenger:
          "Frau M. nimmt Ramipril + HCT + Zolpidem. Drei davon können beim Aufstehen den Blutdruck einbrechen lassen. Bevor du gleich beurteilst, was beim Schellong korrekt ist und was nicht — hier die Methode auf einen Blick.",
        storyAufhaengerB1:
          "Frau M. nimmt 3 Medikamente, die den Blutdruck beim Aufstehen senken können. Bevor du gleich beurteilst, was beim Schellong-Test korrekt ist — so geht er.",
        kerntext:
          "Der **Schellong-Test** misst die **orthostatische Reaktion** — wie reagiert dein Kreislauf, wenn du dich aufrichtest?\n\n**Ablauf nach AAS-Konsensus 2011:**\n\n• **Schritt 1:** Patient liegt **5–10 Min** flach. RR + Puls messen → **Liegewert**.\n\n• **Schritt 2:** Patient setzt sich an die Bettkante. **Mind. 1 Min warten.** RR + Puls messen → **Sitzwert**.\n\n• **Schritt 3:** Patient steht (mit Sicherung) auf. **3 Min warten.** RR + Puls messen → **Stehwert** (optional bei pflegerischer Mobilisation).\n\n**Diagnose-Schwellen (positiv = orthostatische Hypotonie):**\n\n• **RR systolisch ↓ ≥ 20 mmHg** zwischen Liegen und Sitzen/Stehen, **ODER**\n\n• **RR diastolisch ↓ ≥ 10 mmHg**, **ODER**\n\n• Puls steigt mehr als 30/Min an (Hinweis auf Hypovolämie)\n\n**Anti-Pattern (falsch!):**\n\n• ❌ \"3 Min sitzen lassen, dann ist alles ok\" — ohne Messung wertlos.\n\n• ❌ Nur RR im Liegen messen, dann mobilisieren.\n\n• ❌ Direkt aufstehen lassen ohne Sitz-Zwischenstufe.\n\n**Bei Frau M. heute:** Vor erster Mobilisation Pflicht — sie hat 3 RR-relevante Medikamente, ist seit Stunden flach gelegen, hat möglicherweise Volumenmangel durch HCT.",
        kerntextB1:
          "Der **Schellong-Test** schaut, ob der Blutdruck beim Aufstehen abfällt.\n\n**So geht er (AAS 2011):**\n\n• **Schritt 1:** Patient liegt **5–10 Minuten** flach. Du misst Blutdruck + Puls.\n\n• **Schritt 2:** Patient setzt sich. Du wartest **mindestens 1 Minute**. Du misst Blutdruck + Puls.\n\n• **Schritt 3:** Patient steht auf (mit Hilfe). Du wartest **3 Minuten**. Du misst.\n\n**Wann ist der Test positiv (= Problem)?**\n\n• Blutdruck **oben** fällt um **20 mmHg oder mehr** (z.B. von 130 auf 110)\n\n• ODER Blutdruck **unten** fällt um **10 mmHg oder mehr**\n\n• ODER Puls schlägt 30 Schläge mehr als vorher\n\n**Falsch! (häufige Fehler):**\n\n• ❌ Nur \"3 Minuten sitzen lassen\" ohne Messung\n\n• ❌ Nur einmal im Liegen messen\n\n• ❌ Direkt aufstehen lassen — ohne erst zu sitzen\n\n**Bei Frau M.:** Sie nimmt 3 Medikamente, die den Blutdruck senken können. Sie liegt seit Stunden. Vor dem ersten Aufstehen → **Schellong ist Pflicht.**",
        faustregel:
          "Schellong = liegen → sitzen → stehen, jeweils mit Messung. Anti-Pattern \"3 Min warten\" ohne RR ist wertlos.",
        faustregelB1:
          "Schellong: erst liegen, dann sitzen, dann stehen — und JEDES Mal Blutdruck messen. Nur warten reicht nicht!",
        spektrum: [
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Schellong vor 1. Mobilisation post-OP",
            kurzbeschreibung:
              "Bei post-OP-Mobilisation (Tag 1) ist Schellong Pflicht — Patient hat lange gelegen, evtl. Volumenmangel durch OP, Schmerzmittel sedieren. Plus: Lagerungsregeln beachten (max. 90° Hüftflexion).",
          },
          {
            patientName: "Herr Petrov (Schlaganfall)",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Schellong + Halbseiten-Lähmung",
            kurzbeschreibung:
              "Bei ihm ist Schellong komplexer: Hemiparese rechts, betroffene Seite muss begleitet werden. Zusätzlich Aspirations-Risiko bei Aufrichtung.",
          },
          {
            patientName: "Herr Bauer (Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Schellong bei Mirtazapin",
            kurzbeschreibung:
              "Mirtazapin (PRISCUS) verursacht ausgeprägte Orthostase. Bei Demenz wartet er nicht 3 Min — Schellong braucht hier ggf. ruhige Validation-Begleitung.",
          },
        ],
        sonstBox:
          "Andere Tests die du kennen solltest: **Active Stand Test** (kontinuierliche RR-Messung beim Aufstehen, klinische Variante), **Tilt-Table-Test** (Kipp-Tisch, kardiologisch). Pflegerelevant ist der Schellong — der Rest macht der Arzt.",
        sonstBoxB1:
          "Andere Tests die der Arzt macht: **Kipp-Tisch-Test** und **kontinuierliche RR-Messung**. Du als Pflege machst den Schellong.",
        karteikarte: {
          vorderseite:
            "Frau M. (82, 3 RR-Senker, lange gelegen) — du sollst die erste Mobilisation vorbereiten. Welche Schellong-Werte machst du, was sind die positiv-Kriterien?",
          rueckseite:
            "Schellong nach AAS 2011:\n• Liegen 5-10 Min → RR + Puls\n• Sitzen ≥ 1 Min → RR + Puls\n• Stehen 3 Min → RR + Puls\n\nPositiv (= Orthostase):\n• syst. ↓ ≥ 20 mmHg, oder\n• diast. ↓ ≥ 10 mmHg, oder\n• Puls ↑ > 30/Min\n\nFaustregel: Liegen-Sitzen-Stehen mit JE einer Messung. \"3 Min warten\" ohne RR ist wertlos.",
        },
      },
    },

    // Step 2.5 — TrueFalse (4 Aussagen): Orthostase-Test
    {
      stepId: "ce02-frau-m-beob-05-orthostase-test",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leitlinien Herz-Kreislauf-Diagnostik"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-frau-m-beob-orthostase",
      tag: "anatomie",
      transition: "Frau M. will dir noch etwas sagen. Hoer hin.",
      contentC1: {
        title: "Orthostase-Test — pflegerisch korrekt",
        body: "Orthostase (Blutdruckabfall beim Aufstehen) ist bei Parkinson + Madopar + Blutdrucksenkern häufig. Als Pflege kannst du einen einfachen Schellong-ähnlichen Test mitgestalten. Welche Aussagen stimmen?",
        glossarBegriffe: ["Orthostatische Dysregulation"],
      },
      contentB1: {
        title: "Orthostase prüfen — was stimmt?",
        body: "Orthostase = Blutdruck fällt beim Aufstehen. Bei Parkinson und Blutdruckmitteln kommt das oft vor. Welche Aussagen sind richtig?",
        glossarBegriffe: ["Orthostatische Dysregulation"],
      },
      question: {
        fragetext: "Welche Aussagen zum pflegerischen Orthostase-Check stimmen?",
        trueFalseCards: [
          {
            statement:
              "Ich messe den Blutdruck liegend, dann direkt im Sitzen, dann nach 1 Minute im Stand.",
            isTrue: true,
            explanation:
              "Richtig — das ist der pflegerische Schellong-ähnliche Ablauf (liegend → sitzend → stehend mit Pausen). Er zeigt orthostatische Reaktion.",
          },
          {
            statement:
              "Ein Blutdruckabfall von 10/5 mmHg beim Aufstehen ist normal und kein Hinweis auf Orthostase.",
            isTrue: false,
            explanation:
              "Falsch — die Definition ist klar: ≥ 20 mmHg systolischer oder ≥ 10 mmHg diastolischer Abfall gilt als orthostatisch relevant. 10/5 liegt unter der Schwelle, aber in Kombination mit Symptomen kann es auch bei kleinem Abfall relevant sein.",
          },
          {
            statement:
              "Bei Parkinson ist orthostatische Dysregulation sehr häufig — auch durch Levodopa/Madopar.",
            isTrue: true,
            explanation:
              "Richtig — Parkinson selbst beeinflusst das autonome Nervensystem. Levodopa verstärkt das. Bei Frau M. ein wichtiger Faktor.",
          },
          {
            statement:
              "Ich lasse Frau M. jetzt sofort aufstehen, um den Orthostase-Test zu machen.",
            isTrue: false,
            explanation:
              "Falsch — nach frischem Sturz mit Hüftschmerz steht Verletzungs-Assessment vor Mobilisation. Orthostase-Test kommt später (wenn Frau M. sicher aufstehen kann und schmerzfrei ist). Bis dahin: liegend messen.",
          },
        ],
      },
    },

    // Step 2.6 — Quote: Patientenzitat im Kontext
    {
      stepId: "ce02-frau-m-beob-06-patient-zitat-kontext",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-beob-zitat-kontext",
      tag: "pflege",
      // FIX (Pilot 2026-04-28): displayFormat \"quote" verursachte Stil-Bruch zum Rest
      // der Steps. Auf \"scenario" umgestellt + Markdown-Blockquote (>) entfernt,
      // Patient-Zitat per typografische Anführungszeichen.
      displayFormat: "scenario",
      contentC1: {
        title: "Frau M. über ihre Situation",
        body: "Während du die Vitalzeichen misst, sagt Frau M. leise:\n\n\"Zu Hause komme ich zurecht. Ich weiß, wo alles steht. Hier ist alles fremd, und das Bett ist so hoch. Ich bin sonst wirklich selbstständig, das müssen Sie mir glauben.\"\n\n**Was Frau M. sagt, ist didaktisch zentral.**\n\nEin Mensch verliert Orientierung in neuer Umgebung — auch ohne Demenz.\n\nSelbstständigkeit bei Aufnahme ≠ Selbstständigkeit in fremder Umgebung unter Pneumonie-Behandlung + neuer Sedierung.\n\n**Deine Aufgabe als Pflege:**\n\n• Das anerkennen, nicht relativieren (\"Jetzt sind Sie halt im Krankenhaus\").\n\n• Zuhören.\n\n• Dokumentieren, dass die Umgebung ein relevanter Risikofaktor ist.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Frau M. erzählt",
        body: "Während du Blutdruck misst, sagt Frau M. leise:\n\n\"Zu Hause komme ich klar. Ich weiß, wo alles steht. Hier ist alles fremd, und das Bett ist so hoch. Ich bin sonst selbstständig — bitte glauben Sie mir.\"\n\n**Das ist wichtig.**\n\nJemand kann zuhause alles gut machen — und trotzdem in der Klinik verloren sein. Auch ohne Demenz!\n\nDie neue Umgebung, die Pneumonie, das neue Schlafmittel — das sind zusammen viele Änderungen.\n\n**Deine Aufgabe:**\n\n• Ihr zuhören.\n\n• Nicht sagen: \"Sie sind halt jetzt hier.\"\n\n• Die Umgebung mit-dokumentieren als Sturz-Risiko.",
        glossarBegriffe: [],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 30,
};
