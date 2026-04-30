// CE-02 Situation Frau Yilmaz — Phase 3: Planen
// Steps: 4 Kern + 1 Optional · Bloom: B3–B5 · Zeit: ~20–40 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-hueft-tep/phase-planen.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_HUEFT_TEP_PLANEN: SituationsPhase = {
  phaseId: "ls-yilmaz-planen",
  phase: "planen",
  titel: "Planen & Priorisieren",
  titelB1: "Was kommt zürst?",
  kontext:
    "Du bist zurück im Stationszimmer. Du hast deine Beobachtungen notiert: Dekubitus Kategorie I am Steißbein, Thrombose-Risiko hoch (Wadenschmerz links auf Druck), Schmerz NRS 5–6 in Ruhe, erster Aufstehversuch heute notwendig (3. post-OP-Tag), Ehemann Mustafa anwesend ohne Deutschkenntnisse. Du besprichst kurz mit Frau Wendt: 'Gut gemacht. Jetzt musst du die Pflege für heute planen. Was ist die Reihenfolge? Was kommt zürst?'",
  kontextB1:
    "Du bist kurz im Stationszimmer. Du weißt jetzt: Druckwunde Kategorie 1 am Steißbein. Thrombose-Risiko hoch. Schmerzen NRS 5–6. Heute soll sie aufstehen. Frau Wendt fragt dich: 'Was machst du zürst?'",
  kernSteps: [
    // Step 3.1 — MC: Schmerzmittel VOR Mobilisation
    {
      stepId: "ce02-yilmaz-plan-01-schmerz-zürst",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-plan-analgesie-mobilisation",
      tag: "pflege",
      contentC1: {
        title: "Schlüsseleinsicht: Schmerzmittel VOR Mobilisation",
        body: "Du möchtest Frau Yilmaz heute aufstehen lassen. Gestern ist der erste Versuch bei NRS 7 gescheitert. Analgesie: Metamizol 500 mg 4× täglich, Wirkungseintritt ca. 30 Minuten. Was tust du ZUERST?",
        glossarBegriffe: ["Analgesie", "Metamizol", "NRS", "Mobilisation", "Physiotherapie"],
      },
      contentB1: {
        title: "Was machst du zürst — bevor sie aufsteht?",
        body: "Gestern hat der Aufstehversuch nicht geklappt — die Schmerzen waren zu stark (NRS 7). Heute willst du es besser machen. Was tust du zürst?",
        glossarBegriffe: ["Schmerzmittel", "Mobilisation", "Physiotherapie"],
      },
      question: {
        fragetext: "Du möchtest Frau Yilmaz heute aufstehen lassen. Was tust du ZUERST?",
        optionen: [
          {
            text: "Aufstehversuch direkt starten — Bewegung ist die beste Schmerztherapie",
            isCorrect: false,
            explanation:
              "Bewegung kann Schmerz langfristig lindern — das stimmt. Aber ein NRS 7 beim ersten Aufstehversuch gestern zeigt: der Schmerz ist jetzt ein Hindernis. Ohne Analgesie wird Frau Yilmaz das Aufstehen erneut abbrechen — und das kostet sie Vertraün und dich Zeit.",
            explanationB1:
              "Bewegung hilft langfristig — stimmt. Aber gestern war der Schmerz zu stark. Ohne Schmerzmittel wird sie wieder abbrechen. Erst das Schmerzmittel — dann das Aufstehen.",
          },
          {
            text: "Erst prüfen ob das Analgetikum (Metamizol) heute Morgen gegeben wurde — wenn nicht: sofort nachholen, 30 Minuten Wirkzeit abwarten, dann Mobilisation",
            isCorrect: true,
            explanation:
              "Das ist die Schlüsseleinsicht: Schmerzmittel vor Mobilisation. Ein Schmerzmittel mit 30-Minuten-Wirkzeit muss rechtzeitig gegeben werden. Ohne ausreichende Analgesie scheitert die Mobilisation erneut — wie gestern. Das ist kein weicher Hinweis, das ist Standard in der orthopädischen Pflege. Schmerzkontrolle ist die Voraussetzung für erfolgreiche Mobilisation, nicht umgekehrt.",
            explanationB1:
              "Genau richtig. Das Schmerzmittel (Metamizol) braucht 30 Minuten bis es wirkt. Du prüfst zürst: Wurde es heute Morgen gegeben? Wenn nicht: jetzt geben. Dann 30 Minuten warten. Dann aufstehen.",
          },
          {
            text: "Erst die Drainage entfernen, damit der Schlauch nicht zieht",
            isCorrect: false,
            explanation:
              "Die Drainage entfernt der Arzt — nach Anordnung, nicht vor dem Aufstehversuch. Außerdem schränkt eine Drainage das Aufstehen nicht grundsätzlich ein. Das ist nicht das erste Problem heute.",
            explanationB1:
              "Die Drainage entfernt der Arzt — nicht du, und nicht jetzt. Die Drainage hindert sie nicht am Aufstehen. Das ist nicht das erste Problem.",
          },
          {
            text: "Physiotherapeutin rufen — die soll das übernehmen",
            isCorrect: false,
            explanation:
              "Physiotherapie und Pflege arbeiten zusammen — aber die erste Mobilisation planen und vorbereiten ist Pflegeaufgabe. Frau Yilmaz' Schmerz, ihre Angst, die Kommunikation mit Mustafa — das alles liegt bei dir, nicht nur bei der Physio.",
            explanationB1:
              "Physiotherapie und Pflege arbeiten zusammen — aber die Planung liegt bei dir. Frau Yilmaz' Angst, ihre Schmerzen, Mustafa — das bist du, die das anspricht.",
          },
        ],
      },
    },

    // Step 3.2 — Cloze: Pflegeziel nach PESR formulieren
    {
      stepId: "ce02-yilmaz-plan-02-pesr-formulieren",
      phase: 3,
      stepType: "cloze",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter V./Meier M. (1981): Pflegeprozess — 6-Schritte-Modell"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-plan-pflegeziel-pesr",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziel nach PESR formulieren",
        body: "Pflegeziele werden in der deutschen Pflege häufig nach dem PESR-Schema formuliert: **P**roblem — **E**tiologie (Ursache) — **S**ymptome — **R**essourcen.\n\nDas macht den Unterschied zwischen einer allgemeinen Aussage ('Patient ist mobilitätseingeschränkt') und einem konkreten, nachvollziehbaren Pflegeziel. Fülle die Lücken aus.",
        glossarBegriffe: ["PESR", "Pflegeziel", "Etiologie"],
      },
      contentB1: {
        title: "Pflegeziel ausfüllen",
        body: "Ein Pflegeziel beschreibt: Was ist das Problem? Woher kommt es? Woran erkennt man es? Was hat der Mensch trotzdem?\n\nFülle die Lücken aus — für Frau Yilmaz und ihre Druckwunde.",
        glossarBegriffe: ["Pflegeziel", "Problem"],
      },
      question: {
        fragetext: "Fülle die Lücken im PESR-Pflegeziel für Frau Yilmaz aus.",
        cloze: {
          textWithBlanks:
            "Problem: Frau Yilmaz hat ein erhöhtes Dekubitus-Risiko. Etiologie: Sie ist seit [BLANK] Tagen bettlägerig nach Hüft-TEP, hat Schmerzen die die Eigenbewegung hemmen, und hat [BLANK] (Adipositas, BMI 34), was den Druck auf Knochenvorsprünge erhöht. Symptome: Rötung am [BLANK], Kategorie I, nicht wegdrückbar. Ressourcen: Frau Yilmaz ist kooperativ, gibt Schmerzen an, ist [BLANK] orientiert. Pflegeziel: Frau Yilmaz hat bis zur Entlassung keine Verschlechterung des Dekubitus Kategorie I. Sie wird mindestens [BLANK] Mal täglich druckentlastet.",
          blanks: [
            {
              id: 1,
              correct: "2–3",
              distractors: ["1", "5–7", "0"],
            },
            {
              id: 2,
              correct: "ein erhöhtes Körpergewicht",
              distractors: ["Schmerzen", "Diabetes", "Angst"],
            },
            {
              id: 3,
              correct: "Steißbein",
              distractors: ["Ferse", "Knie", "Schulterblatt"],
            },
            {
              id: 4,
              correct: "vollständig",
              distractors: ["zeitlich eingeschränkt aber sonst", "kaum", "nicht"],
            },
            {
              id: 5,
              correct: "4–6",
              distractors: ["1–2", "8–10", "12"],
            },
          ],
        },
      },
    },

    // Step 3.3 — Sorting: Maßnahmen priorisieren
    {
      stepId: "ce02-yilmaz-plan-03-maßnahmen-sortieren",
      phase: 3,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege",
        "Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-plan-maßnahmenreihenfolge",
      tag: "pflege",
      contentC1: {
        title: "Maßnahmen für heute Vormittag — richtige Reihenfolge",
        body: "Du hast alle Informationen gesammelt. Jetzt planst du den Vormittag mit Frau Yilmaz. Bringe die folgenden Pflegemaßnahmen in die richtige Reihenfolge. Die Reihenfolge ist nicht beliebig — sie folgt einer Logik.\n\n**Hinweis zur Toleranz:** Items 4 und 5 (Frau Yilmaz informieren / Mustafa via Frau Yilmaz informieren) können auch in umgekehrter Reihenfolge stehen — die Logik bleibt: Patientin verstanden → Angehöriger eingeweiht → praktisch vorbereiten.",
        glossarBegriffe: ["Analgesie", "Wirkzeit", "Mobilisation", "Schmerzreassessment"],
      },
      contentB1: {
        title: "Was machst du in welcher Reihenfolge?",
        body: "Du planst den Vormittag. Bringe die Maßnahmen in die richtige Reihenfolge.\n\n(Tipp: Frau Yilmaz informieren und Mustafa erklären — diese beiden Schritte können auch andersrum stehen.)",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Bringe die folgenden Pflegemaßnahmen in die richtige Reihenfolge für heute Vormittag.",
        sortItems: [
          "Prüfen ob Metamizol als Morgenmedikament gegeben wurde (ggf. nachholen)",
          "30 Minuten warten (Wirkzeit der Analgesie)",
          "Wadenschmerz links: Arzt informieren — Doppler-Sonografie beauftragen (vor Mobilisation, falls Thrombose nicht ausgeschlossen)",
          "Zimmer vorbereiten: Unterarmgehstützen bereitstellen, Betthöhe anpassen",
          "Frau Yilmaz über den Plan informieren, Angst ernst nehmen",
          "Ehemann Mustafa durch Frau Yilmaz kurz erklären lassen was geplant ist",
          "Aufstehversuch: RR liegend messen → Beine über Bettkante (operiertes Bein zürst) → Schellong (≥1 Min sitzen, RR sitzend) → dann aufstehen",
          "Nach Aufstehen: Schmerz-Reassessment, Lagerung danach prüfen",
        ],
      },
    },

    // Step 3.4 — Text: Ehemann einbeziehen — Kommunikationsplan
    {
      stepId: "ce02-yilmaz-plan-04-mustafa-kommunikation",
      phase: 3,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität in der Pflege"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-plan-interkulturell",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Mustafa einbeziehen: Kommunikationsplan ohne gemeinsame Sprache",
        body: "Frau Yilmaz sagt: \"Die Frau von der Physiotherapie hat auch gesagt, ich soll. Aber ich habe Angst. Was wenn es kaputt geht?\"\n\nFrau Yilmaz macht sich Sorgen. Und Mustafa macht sich Sorgen. Er hat seine Frau seit Jahrzehnten beschützt — er versteht nicht, warum Fremde sie jetzt bewegen sollen, wenn sie Schmerzen hat.\n\nDu kannst ihn nicht ausschließen. Aber du kannst ihn einbeziehen — auch ohne gemeinsame Sprache.\n\n**Drei Möglichkeiten der Kommunikation mit Mustafa:**\n\n**1. Über Frau Yilmaz:** Bitte sie, ihm kurz zu erklären was heute geplant ist. Gib ihr ein einfaches Satz-Angebot: \"Bitte sagen Sie Ihrem Mann: Die Pflegerin hilft mir heute aufzustehen. Das ist wichtig für meine Beine.\"\n\n**2. Nonverbal:** Aufstehen zeigen — langsam vordemonstrieren, was du mit Frau Yilmaz vorhast. Lächeln, Augenkontakt, ruhige Gesten. Mustafa versteht Körpersprache.\n\n**3. Dolmetscher-Service:** Wenn die Situation kritisch wird oder Mustafa aktiv interveniert — dann Dolmetscher-Service aktivieren (Klinik-Standard, Telefondolmetsch).\n\n**Didaktische Botschaft:** Interkulturelle Kommunikation ist nicht nur eine Frage der Sprache. Sie ist eine Frage von Respekt, Tempo und Körpersprache. Mustafa ist kein Problem — er ist eine Ressource, wenn du ihn richtig einbindest.",
        fallbezug:
          "Mustafa sitzt täglich am Bett. Er spricht kein Deutsch. Er ist kein Hindernis — er ist ein Teil der Pflege. Wie du ihn einbeziehst, entscheidet mit, ob der Aufstehversuch heute gelingt.",
        glossarBegriffe: ["Interkulturelle Kommunikation", "Dolmetscher-Service", "Angehörige"],
      },
      contentB1: {
        title: "Mustafa einbeziehen — auch ohne Deutsch",
        body: "Frau Yilmaz sagt: \"Ich habe Angst. Was wenn es kaputt geht?\"\n\nMustafa macht sich Sorgen um seine Frau. Er spricht kein Deutsch. Er versteht nicht, warum du sie bewegen willst.\n\n**Drei Möglichkeiten:**\n\n**1. Über Frau Yilmaz:** Bitte sie, Mustafa zu erklären was passiert. Sie kann ihm sagen: \"Die Pflegerin hilft mir aufzustehen. Das ist wichtig für meine Beine.\"\n\n**2. Mit Gesten:** Zeig ihm langsam, was du vorhast. Lächeln, Augenkontakt, ruhige Bewegungen. Er versteht das.\n\n**3. Dolmetscher:** Wenn Mustafa wirklich eingreift — Dolmetscher-Service anrufen.\n\nMustafa ist kein Problem. Er ist ein Unterstützer — wenn du ihn einbeziehst.",
        fallbezug:
          "Mustafa liebt seine Frau. Er macht sich Sorgen. Das ist keine Schwierigkeit — das ist eine Ressource.",
        glossarBegriffe: ["Dolmetscher", "Gesten", "Angehörige"],
      },
    },
  ],
  optionaleSteps: [
    // Step 3.5 (Optional) — Comparison: formell vs. informell
    {
      stepId: "ce02-yilmaz-plan-05-formal-informal-optional",
      phase: 3,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB (Behandlungsdokumentation)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-plan-pflegeplan-vs-mündlich",
      tag: "pflege",
      contentC1: {
        title: "Mündliche Absprache vs. schriftlicher Pflegeplan",
        body: "Was ist der Unterschied zwischen der mündlichen Absprache mit Frau Wendt und dem schriftlichen Pflegeplan? Und warum ist das rechtlich relevant?",
        glossarBegriffe: ["Pflegeplan", "§ 630f BGB"],
      },
      contentB1: {
        title: "Mündlich gesagt oder aufgeschrieben — was ist der Unterschied?",
        body: "Frau Wendt sagt dir, was du tun sollst. Das ist gut. Aber reicht das? Oder muss es auch aufgeschrieben werden?",
        glossarBegriffe: ["Pflegeplan", "Dokumentation"],
      },
      question: {
        fragetext:
          "Vergleiche: mündliche Absprache vs. schriftlicher Pflegeplan.",
        comparison: {
          instruction:
            "Was unterscheidet die mündliche Absprache vom schriftlichen Pflegeplan?",
          columns: [
            { label: "Mündliche Absprache (mit Frau Wendt)" },
            { label: "Schriftlicher Pflegeplan" },
          ],
          rows: [
            {
              criterion: "Zweck",
              values: [
                "Koordination im Moment",
                "Verbindliches Handlungsdokument für alle Schichten",
              ],
              highlight: 1,
            },
            {
              criterion: "Rechtswirkung",
              values: ["keine", "rechtlich relevant (§ 630f BGB)"],
              highlight: 1,
            },
            {
              criterion: "Wer sieht es?",
              values: [
                "Nur Anwesende",
                "Ganzes Pflegeteam, Arzt, Qualitätsmanagement",
              ],
            },
            {
              criterion: "Wann nötig?",
              values: [
                "Immer",
                "Immer — auch wenn mündlich abgesprochen wurde",
              ],
              highlight: 1,
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 30,
};
