// CE-02 Situation Kovač — Phase 2: Beobachten — Atembeobachtung, Gelenke, Schlaf, Flüssigkeit
// Steps: 6 · Bloom: B3-B4 · Zeit: ~25-35 Min
// Quelle: phase-beobachten.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Einschätzen",
  titelB1: "Was zeigt Frau Kovačs Körper heute?",
  kontext:
    "Frau Kovač sitzt im Sessel. Du hast das Gespräch eröffnet, das Trinkprotokoll liegt auf dem Tisch. Jetzt geht es darum, systematisch zu beobachten — mit deinen Augen, deinen Ohren, deinen Fragen. Bei COPD III ist das kein Routinecheck; was du hier übersiehst, wird beim nächsten Besuch schlimmer. Und du hast 45 Minuten.",
  kontextB1:
    "Frau Kovač sitzt im Sessel. Du hast mit ihr gesprochen. Jetzt beobachtest du sie genau. Du schaust auf die Atmung. Du schaust auf die Knie. Du fragst nach dem Schlaf. Du schaust auf das Trinkprotokoll. Nimm dir Zeit — was du übersiehst, wird schlimmer.",
  kernSteps: [
    // Step 2.1 — BRILLIANT-FRAGE Atembeobachtung
    {
      stepId: "ce02-kovac-beob-01-atembeobachtung-brilliant",
      phase: 2,
      stepType: "freetext",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-kovac-ambulant-beob-atmung",
      tag: "pflege",
      contentC1: {
        title: "Was siehst du — bevor du nachliest?",
        body: "Du schaust Frau Kovač an. Sie sitzt aufrecht im Sessel, atmet ruhig, aber du bemerkst etwas. Bevor du nachliest, was bei COPD III 'normal' ist:\n\nBeschreibe in 2–3 Sätzen, was du bei der Atmung von Frau Kovač beobachten würdest. Was fällt auf? Was würdest du prüfen?\n\nEs gibt keine richtige oder falsche Antwort — du bereitest dich vor.",
        glossarBegriffe: [
          "Atemfrequenz",
          "Lippenbremse",
          "Atemhilfsmuskulatur",
          "Sputum",
        ],
      },
      contentB1: {
        title: "Was siehst du bei der Atmung?",
        body: "Du schaust Frau Kovač an. Sie sitzt im Sessel und atmet.\n\nBeschreibe in 1–2 Sätzen: Was siehst du bei ihrer Atmung? Was hörst du? Was fällt dir auf?\n\nEs gibt kein richtig oder falsch — du beschreibst, was du siehst.",
        glossarBegriffe: ["Atemfrequenz", "Lippenbremse"],
      },
      question: {
        fragetext:
          "Beschreibe in 2–3 Sätzen, was du bei Frau Kovačs Atmung beobachtest — bevor du die Erklärung liest.",
        musterantwort:
          "Erwartete Beobachtungspunkte: Atemfrequenz (12–20/Min normal), Einsatz der Atemhilfsmuskulatur (Schulterheben?), Lippenbremse spontan aktiv?, Atemgeräusche (Giemen, Brummen, Pfeifen?), Sputum-Farbe wenn Husten, Körperhaltung (Kutschersitz?). Frau Kovač sagt: \"Heute Nacht hab ich gehusten. Viel. Der Schleim will nicht raus.\" — gelber Schleim wäre Infektionszeichen.",
        bewertungskriterien: [
          "Mindestens 2 Beobachtungspunkte genannt",
          "Kein reines Wiederholen von Diagnosen",
          "Bezug auf aktuelle Situation (Nacht, Husten)",
        ],
        satzanfaengeB1: [
          "Ich sehe, dass ...",
          "Ich höre ...",
          "Ich bemerke ...",
          "Die Atmung ist ...",
        ],
      },
    },

    // Step 2.2 — COPD Atemzeichen Checkliste
    {
      stepId: "ce02-kovac-beob-02-copd-atemzeichen",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-beob-copd-checkliste",
      tag: "krankheitslehre",
      displayFormat: "checklist",
      bildkategorie: "szene",
      bildhinweis:
        "Ambulante Pflegekraft beobachtet ältere Frau beim Atmen im Sessel, Hände locker auf Oberschenkeln, morgendliches Licht, medizinisch-illustrativer Stil, kein Text",
      imageAlt:
        "Pflegekraft beobachtet die Atmung einer älteren Patientin im Sessel",
      contentC1: {
        title: "Was du bei COPD beobachten musst",
        body: "Bei Frau Kovač (COPD III) ist die Atembeobachtung keine Routine — sie gibt dir täglich Hinweise auf Verschlechterung oder Komplikation. Diese 7 Punkte musst du systematisch prüfen:\n\n✓ **Atemfrequenz** — Normal: 12–20 Atemzüge/Min. Tachypnoe (>20/Min) ist ein Warnsignal bei COPD.\n\n✓ **Atemhilfsmuskulatur** — Schulterheben beim Einatmen zeigt erhöhte Atemarbeit. Bei Frau Kovač mit Herzinsuffizienz zusätzlich beachten.\n\n✓ **Lippenbremse** — Ist sie spontan aktiv? (Pfeifen beim Ausatmen) Die Lippenbremse erhöht den intrabronchialen Druck und verhindert Atemwegskollaps (PEEP-Effekt).\n\n✓ **Atemgeräusche** — Giemen (hoch), Brummen (tief), Pfeifen (exspiratorisch) = Obstruktion. Knistern (inspiratorisch) = mögliches Lungenödem bei Herzinsuffizienz.\n\n✓ **Sputum-Farbe** — Weiß-klar = normal. Gelb-grün = Infektion (Arzt informieren!). Rostig-schaumig = Lungenödem.\n\n✓ **Körperhaltung** — Kutschersitz (vorgeneigt, Unterarme abgestützt) reduziert die Atemarbeit durch Fixierung der Atemhilfsmuskulatur — spontane Einnahme zeigt erhöhte Dyspnoe.\n\n✓ **SpO2** — Falls Pulsoximeter vorhanden: Zielwert bei COPD III 88–92 % (nicht 95–99 % wie bei Lungengesunden — Hypoxie-Atemanreiz!). Quelle: (GOLD-Report COPD 2023)",
        fallbezug:
          "Frau Kovač hat heute Nacht viel gehustet — sie sagt: \"Der Schleim will nicht raus.\" Das kann auf verdickte Sekrete durch Dehydration hinweisen (Trinkmenge 820 ml) oder auf eine beginnende Infektion (gelber Schleim?).",
        glossarBegriffe: [
          "Tachypnoe",
          "Lippenbremse",
          "Atemhilfsmuskulatur",
          "Sputum",
          "Kutschersitz",
          "SpO2",
          "PEEP-Effekt",
        ],
      },
      contentB1: {
        title: "7 Dinge bei der Atmung beobachten",
        body: "Bei COPD musst du die Atmung genau beobachten. Hier sind die 7 wichtigsten Punkte:\n\n✓ **Atemfrequenz** — Wie oft atmet sie pro Minute? Normal: 12–20 Mal. Schneller = Warnsignal.\n\n✓ **Schulterheben** — Hebt sie die Schultern beim Einatmen hoch? Das zeigt: Die Atmung ist anstrengend.\n\n✓ **Lippenbremse** — Atmet sie durch leicht geschlossene Lippen aus? (Wie durch einen Strohhalm.) Das hilft der Lunge.\n\n✓ **Atemgeräusche** — Hörst du Pfeifen oder Brummen? Das zeigt: Die Luftwege sind eng.\n\n✓ **Schleim-Farbe** — Welche Farbe hat der Schleim wenn sie hustet? Weiß = ok. Gelb-grün = möglicherweise Infektion → Arzt informieren.\n\n✓ **Körperhaltung** — Sitzt sie vorgebeugt mit Armen auf den Knien? Das ist der Kutschersitz — er erleichtert die Atmung.\n\n✓ **SpO2 (Sauerstoff im Blut)** — Falls ein Gerät vorhanden ist: Bei COPD ist 88–92 % normal (nicht 95–99 % wie bei anderen Menschen). Quelle: (GOLD-Report COPD 2023)",
        fallbezug:
          "Frau Kovač hat heute Nacht viel gehustet. Sie sagt: \"Der Schleim will nicht raus.\" Das könnte an zu wenig Trinken liegen — oder an einer Infektion.",
        glossarBegriffe: [
          "Atemfrequenz",
          "Lippenbremse",
          "Kutschersitz",
          "SpO2",
        ],
      },
    },

    // Step 2.3 — Gelenke categorize
    {
      stepId: "ce02-kovac-beob-03-gelenke-assessment",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "MDS/Medizinischer Dienst 2018 — Kontrakturrisiko ambulant",
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-kovac-ambulant-beob-kontraktur",
      tag: "krankheitslehre",
      contentC1: {
        title: "Gelenk-Assessment: Was siehst du?",
        body: "Du schaust dir Frau Kovačs Kniegelenke an. Ordne die Befunde in die richtigen Kategorien ein — Normalbefund, Kontraktur-Zeichen oder akutes Warnsignal. Die Unterscheidung ist klinisch entscheidend: Was auf Kontraktur hinweist, bleibt vorerst bei der Physiotherapie. Was auf akute Entzündung hinweist, braucht Arzt-Rücksprache. Quelle: (MDS/Medizinischer Dienst 2018)",
        glossarBegriffe: [
          "Kontraktur",
          "Extensionsdefizit",
          "Flexionskontraktur",
        ],
      },
      contentB1: {
        title: "Was ist normal — was ist ein Warnsignal?",
        body: "Du schaust auf Frau Kovačs Knie. Ordne die Befunde ein: Was ist normal (kein Problem), was ist ein Kontraktur-Zeichen (bekanntes Problem) und was ist ein akutes Warnsignal (jetzt Arzt informieren)?",
        glossarBegriffe: ["Kontraktur", "Extensionsdefizit"],
      },
      question: {
        fragetext:
          "Ordne die Kniebefunde in die richtige Kategorie ein.",
        categories: [
          { name: "Normalbefund" },
          { name: "Kontraktur-Zeichen" },
          { name: "Akutes Warnsignal" },
        ],
        categoryItems: [
          {
            text: "Extensionsdefizit ca. 15° — Knie streckt sich nicht vollständig",
            correctCategory: 1,
          },
          {
            text: "Rötung und Wärme über dem Knie",
            correctCategory: 2,
          },
          {
            text: "Schmerz bei Bewegung VAS 3/10",
            correctCategory: 0,
          },
          {
            text: "Haut über dem Knie gespannt, glänzend",
            correctCategory: 2,
          },
          {
            text: "Umfangsdifferenz linkes/rechtes Bein 2 cm",
            correctCategory: 2,
          },
          {
            text: "Morgensteifigkeit die sich nach 10–15 Min bessert",
            correctCategory: 1,
          },
        ],
      },
    },

    // Step 2.4 — Schlafanamnese Dialog
    {
      stepId: "ce02-kovac-beob-04-schlafanamnese",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-kovac-ambulant-beob-schlaf",
      tag: "pflege",
      contentC1: {
        title: "Schlaf-Anamnese im Gespräch",
        body: "Frau Kovač schläft schlecht — das weiß du aus der Übergabe. Aber wie genau? Wann schläft sie ein? Wann wacht sie auf? Warum macht sie den Fernseher an? Gute Anamnese heißt: offene Fragen stellen, präzise nachfragen, nicht werten.",
        glossarBegriffe: ["Insomnie", "Einschlaflatenz", "Schlafhygiene"],
      },
      contentB1: {
        title: "Gespräch über den Schlaf",
        body: "Du fragst Frau Kovač nach dem Schlaf. Sie schläft schlecht. Du möchtest genau wissen: Wann schläft sie ein? Wann wacht sie auf? Warum macht sie den Fernseher an?",
        glossarBegriffe: ["Insomnie", "Einschlaflatenz"],
      },
      question: {
        fragetext: "Wähle die beste Frage in jeder Dialogphase.",
        patientName: "Frau Kovač",
        dialogPhases: [
          {
            context:
              "Du fragst Frau Kovač nach dem Schlafen. Sie hat in der Übergabe 'schläft schlecht' stehen.",
            contextB1:
              "Du fragst nach dem Schlaf. In der Übergabe steht: schläft schlecht.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Kovač, wann gehen Sie abends ins Bett?\"",
                textB1: "\"Frau Kovač, wann gehen Sie abends schlafen?\"",
                patientResponse:
                  "\"Nach dem Film. So gegen elf, halb zwölf.\"",
                patientResponseB1: "\"Nach dem Film. So um elf, halb zwölf.\"",
                score: 3,
                feedback:
                  "Offene Frage, konkret und unangreifbar. Du erfährst die Schlafzeit ohne Wertung. Weiter zur nächsten Phase.",
                feedbackB1:
                  "Gut. Offene Frage. Du erfährst wann sie schlafen geht.",
              },
              {
                text: "\"Warum sehen Sie so spät noch fern?\"",
                textB1: "\"Warum schauen Sie abends so lange fern?\"",
                patientResponse:
                  "Frau Kovač sieht dich kurz an. \"Weil ich es will.\"",
                patientResponseB1:
                  "Frau Kovač schaut kurz. \"Weil ich es will.\"",
                score: 0,
                feedback:
                  "Wertend. Die Frage 'Warum' mit implizitem Vorwurf schließt das Gespräch. Frau Kovač wird sich verteidigen statt antworten. Anamnese ist keine Verhandlung.",
                feedbackB1:
                  "Nicht gut. Die Frage klingt wie Kritik. Frau Kovač sagt dann nichts mehr.",
              },
            ],
          },
          {
            context:
              "Frau Kovač sagt: \"Nach dem Film. So gegen elf, halb zwölf.\" Du fragst weiter.",
            contextB1:
              "Frau Kovač sagt: \"Um elf oder halb zwölf.\" Du fragst weiter.",
            speaker: "Du",
            options: [
              {
                text: "\"Und wann schlafen Sie ein?\"",
                textB1: "\"Und wann schlafen Sie dann ein?\"",
                patientResponse:
                  "\"Lange. Ich lieg dann und denk. Dann schlaf ich irgendwann. Dann bin ich wieder wach. Um zwei hab ich aufgehört zu versuchen und den Fernseher angemacht.\"",
                patientResponseB1:
                  "\"Lang. Ich denke dann viel. Irgendwann schlafe ich ein. Dann bin ich um zwei wach. Dann habe ich den Fernseher angemacht.\"",
                score: 3,
                feedback:
                  "Präzise Nachfrage — du erhebst die Einschlaflatenz (klinisch wichtig für Insomnie-Assessment). Frau Kovač gibt dir damit fast die vollständige Schlafanamnese.",
                feedbackB1:
                  "Gut. Du fragst genau nach. Frau Kovač erzählt mehr.",
              },
              {
                text: "\"Das müssen Sie mit dem Arzt besprechen.\"",
                textB1: "\"Das müssen Sie dem Arzt sagen.\"",
                patientResponse:
                  "\"Dem hab ich schon alles gesagt. Er sagt, das ist Alter.\"",
                patientResponseB1:
                  "\"Dem hab ich schon gesagt. Er sagt: das ist Alter.\"",
                score: 0,
                feedback:
                  "Gesprächsabbruch und Verantwortungsweitergabe. Du bist jetzt bei ihr — der Arzt ist nicht dabei. Die Anamnese gehört zu deiner Aufgabe, nicht nur zum Arzt.",
                feedbackB1:
                  "Nicht gut. Du brichst das Gespräch ab. Die Anamnese ist auch deine Aufgabe.",
              },
            ],
          },
          {
            context:
              "Frau Kovač hat erzählt: Einschlaflatenz lang, nächtliches Erwachen, TV als Kompensation. Du wählst die nächste Frage.",
            contextB1:
              "Frau Kovač hat erzählt: sie schläft spät ein, wacht nachts auf, macht den Fernseher an. Du fragst weiter.",
            speaker: "Du",
            options: [
              {
                text: "\"Haben Sie tagsüber manchmal Schlafepisoden — also dass Sie plötzlich einschlafen oder sehr müde werden?\"",
                textB1:
                  "\"Schlafen Sie tagsüber manchmal — zum Beispiel am Nachmittag?\"",
                patientResponse:
                  "\"Ja, manchmal. Nach dem Mittagessen mach ich die Augen zu. Kurz.\"",
                patientResponseB1:
                  "\"Ja, manchmal. Nach dem Mittag mache ich kurz die Augen zu.\"",
                score: 3,
                feedback:
                  "Klinisch wichtig. Tagesschläfrigkeit hilft, zwischen primärer Insomnie und zirkadianer Störung zu unterscheiden. Bei Frau Kovač: möglicherweise Schlaf-Kompensation tagsüber, was den Nachtschlaf weiter verschlechtert.",
                feedbackB1:
                  "Gut. Das ist eine wichtige Frage. Tagesschlaf beeinflusst den Nachtschlaf.",
              },
              {
                text: "\"Nehmen Sie Schlaftabletten?\"",
                textB1: "\"Nehmen Sie Medikamente zum Schlafen?\"",
                patientResponse:
                  "\"Nein. Der Arzt wollte mir welche geben. Ich hab abgelehnt. Die machen süchtig.\"",
                patientResponseB1:
                  "\"Nein. Ich will keine. Die machen süchtig.\"",
                score: 2,
                feedback:
                  "Relevante Frage (Medikamenten-Anamnese ist immer wichtig), aber nicht die prioritäre nächste Frage. Tagesschläfrigkeit wäre informativer für die Diagnosestellung. Trotzdem: Informiert.",
                feedbackB1:
                  "Nicht falsch, aber nicht die wichtigste Frage jetzt. Erst besser: Schläft sie tagsüber?",
              },
            ],
          },
        ],
      },
    },

    // Step 2.5 — Trinkprotokoll calculation
    {
      stepId: "ce02-kovac-beob-05-trinkprotokoll-auswerten",
      phase: 2,
      stepType: "calculation",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Kontinenzförderung in der Pflege 2014",
        "GOLD-Report COPD 2023",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-kovac-ambulant-beob-fluessigkeit",
      tag: "anatomie",
      contentC1: {
        title: "Trinkprotokoll auswerten",
        body: "Du nimmst das Trinkprotokoll vom Küchentisch. Frau Kovač hat gestern eingetragen:\n\n07:30 — Kaffee: 150 ml\n09:00 — Wasser: 100 ml\n12:00 — Suppe: 200 ml\n15:30 — Tee: 100 ml\n18:30 — Abend-Kaffee: 100 ml\n21:00 — Wasser: 150 ml\n\nBerechne: Wie viel ml hat Frau Kovač insgesamt getrunken? Und wie viel fehlt bis zur Mindest-Tagesmenge von 1.500 ml? (DNQP Kontinenzförderung 2014)",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Exsikkose"],
      },
      contentB1: {
        title: "Wie viel hat Frau Kovač getrunken?",
        body: "Das Trinkprotokoll zeigt:\n- 07:30 Kaffee: 150 ml\n- 09:00 Wasser: 100 ml\n- 12:00 Suppe: 200 ml\n- 15:30 Tee: 100 ml\n- 18:30 Kaffee: 100 ml\n- 21:00 Wasser: 150 ml\n\nAddiere alle Mengen zusammen. Wie viel ml hat Frau Kovač getrunken? Wie viel fehlt bis zu 1.500 ml?",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
      question: {
        fragetext:
          "Berechne die Gesamttrinkmenge von Frau Kovač gestern. Wie viel fehlt bis zur Mindest-Tagesmenge von 1.500 ml?",
        calculation: {
          instruction:
            "Addiere die Trinkmengen des gestrigen Tages. Zielwert nach DNQP: 1.500 ml Mindest-Tagesmenge.",
          formula:
            "Gesamt = 150 + 100 + 200 + 100 + 100 + 150 = ? ml. Differenz = 1.500 – Gesamt = ? ml",
          correctValue: 800,
          unit: "ml (Gesamttrinkmenge)",
          tolerance: 0,
          explanation:
            "800 ml — das ist deutlich unter dem Mindestbedarf. Die Differenz zu 1.500 ml beträgt 700 ml. Wichtig: Bei Furosemid-Einnahme (Entwässerungsmittel) und COPD fördert ausreichende Flüssigkeit die Sekretverflüssigung in den Atemwegen. Aber Vorsicht: Bei Herzinsuffizienz nicht unbegrenzt trinken — individuelle Absprache mit Arzt nötig. Frau Kovačs Ziel: realistisch schrittweise auf 1.200 ml steigern.",
          explanationB1:
            "800 ml — das ist viel zu wenig. Sie braucht mindestens 1.500 ml pro Tag. Es fehlen also 700 ml. Wenn sie zu wenig trinkt, wird der Schleim in der Lunge dick und sie kann ihn schlechter abhusten.",
        },
      },
    },

    // Step 2.6 — Thrombose TrueFalse
    {
      stepId: "ce02-kovac-beob-06-oedeme-thrombose-blick",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Kontinenzförderung in der Pflege 2014",
        "GOLD-Report COPD 2023",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-kovac-ambulant-beob-thrombose",
      tag: "krankheitslehre",
      contentC1: {
        title: "Thromboserisiko einschätzen",
        body: "Frau Kovač trägt keine Kompressionsstrümpfe, sitzt viel, hat Herzinsuffizienz mit Unterschenkelödemen. Prüfe dein Wissen: Was stimmt, was stimmt nicht?",
        glossarBegriffe: [
          "Thrombose",
          "Virchow-Trias",
          "Stase",
          "Kompressionstherapie",
        ],
      },
      contentB1: {
        title: "Was ist richtig — was ist falsch?",
        body: "Frau Kovač trägt keine Kompressionsstrümpfe. Sie sitzt viel. Ihre Beine sind geschwollen. Prüfe: Was ist richtig, was ist falsch?",
        glossarBegriffe: ["Thrombose", "Kompressionsstrümpfe"],
      },
      question: {
        fragetext:
          "Richtig oder falsch? Prüfe die folgenden Aussagen zum Thromboserisiko von Frau Kovač.",
        trueFalseCards: [
          {
            statement:
              "Frau Kovač trägt keine Kompressionsstrümpfe und sitzt viel — das erhöht die venöse Stase in den Beinvenen.",
            isTrue: true,
            explanation:
              "Richtig. Venöse Stase (verlangsamter Blutfluss in den Venen) ist einer der drei Faktoren der Virchow-Trias. Bei Immobilität ohne Kompression akkumuliert Blut in den Venen der Beine — Thrombosegefahr steigt.",
          },
          {
            statement:
              "ASS 100 mg täglich ersetzt die Kompressionstherapie vollständig — Frau Kovač ist durch die Tabletten ausreichend geschützt.",
            isTrue: false,
            explanation:
              "Falsch. ASS (Acetylsalicylsäure) hemmt die Thrombozytenaggregation — wirkt auf die arterielle Thrombose (Herzinfarkt, Schlaganfall-Prophylaxe). Tiefe Venenthrombosen entstehen durch Stase + Gerinnungsaktivierung — hier wirkt ASS kaum. Kompressionsstrümpfe wirken mechanisch auf Stase. Beides ergänzt sich.",
          },
          {
            statement:
              "Bei Herzinsuffizienz mit Unterschenkelödemen ist die Thrombosegefahr erhöht.",
            isTrue: true,
            explanation:
              "Richtig. Ödeme entstehen durch erhöhten hydrostatischen Druck und verminderte Albumin-Konzentration. Sie verschlechtern die Mikrozirkulation und erhöhen das lokale Thromboserisiko (Virchow-Trias: Stase + Gewebsdruck auf Gefäße).",
          },
          {
            statement:
              "Wenn Frau Kovač keine Beschwerden in den Beinen hat, ist kein Thromboserisiko vorhanden.",
            isTrue: false,
            explanation:
              "Falsch. Tiefe Beinvenenthrombosen (TVT) verlaufen in über 50 % der Fälle asymptomatisch oder zeigen nur unspezifische Symptome. Das Fehlen von Beschwerden schließt eine TVT nicht aus — das Risikoprofil (Alter, Immobilität, Herzinsuffizienz, keine Kompression) ist entscheidend.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Opt-2.A — COPD-Stadien Flipcard
    {
      stepId: "ce02-kovac-beob-opt-a-copd-stadien",
      phase: 2,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "vertiefung",
      modus: "puzzle",
      tag: "krankheitslehre",
      contentC1: {
        title: "COPD-Stadien I–IV im Überblick",
        body: "Frau Kovač hat COPD III — aber was bedeuten die Stadien? Drehe die Karte um.",
        glossarBegriffe: ["FEV1", "GOLD-Klassifikation"],
      },
      contentB1: {
        title: "Die 4 COPD-Stufen",
        body: "COPD hat 4 Stufen. Frau Kovač ist auf Stufe 3. Was bedeutet das? Drehe die Karte um.",
        glossarBegriffe: ["FEV1"],
      },
      question: {
        fragetext: "Drehe die Karten um — lerne die COPD-Stadien.",
        flipcard: {
          instruction:
            "Drehe jede Karte um und lerne die COPD-Stadien nach GOLD.",
          cards: [
            {
              front: "COPD Stadium I (leicht)",
              back: "FEV1 ≥ 80 % des Sollwertes. Kaum Symptome. Husten möglich. Oft noch unerkannt.",
              backB1:
                "Stufe 1 — leichte COPD. Die Lunge ist wenig geschädigt. Oft kein Problem im Alltag.",
            },
            {
              front: "COPD Stadium II (mittelgradig)",
              back: "FEV1 50–79 %. Belastungsdyspnoe. Chronischer Husten. Erste Alltagseinschränkungen.",
              backB1:
                "Stufe 2 — mittlere COPD. Bei Anstrengung kommt Atemnot. Husten öfter.",
            },
            {
              front: "COPD Stadium III (schwer) — Frau Kovač",
              back: "FEV1 30–49 %. Deutliche Dyspnoe auch bei leichter Belastung. Häufige Exazerbationen möglich. Lebensqualität eingeschränkt.",
              backB1:
                "Stufe 3 — schwere COPD. Das ist Frau Kovač. Schon bei kleiner Bewegung kommt Atemnot. Das ist sehr anstrengend.",
            },
            {
              front: "COPD Stadium IV (sehr schwer)",
              back: "FEV1 < 30 %. Ruhedyspnoe möglich. Chronische Hypoxämie. Oft Heimsauerstoff nötig.",
              backB1:
                "Stufe 4 — sehr schwere COPD. Schon in Ruhe kommt Atemnot. Manchmal braucht man Sauerstoff zu Hause.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 30,
};
