// CE-02 Situation Petrov — Phase 6: Dokumentieren
// Steps: 4 · Bloom: B5-B6 · Zeit: ~15-25 Min
// Quelle: phase-dokumentieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-petrov-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren — Schichtwechsel vorbereiten",
  titelB1: "Den Pflege-Bericht schreiben",
  kontext:
    "10:45 Uhr. Schichtwechsel vorbereiten. Frau Wegner sagt: \"Trag alles ein bevor wir übergeben. Was du nicht dokumentiert hast, gilt als nicht gemacht.\"\n\nDas ist kein bürokratischer Hinweis. Es ist Rechtslage (§ 630f BGB) und Patientensicherheit zugleich. Die Spätdienst-Kollegin muss genau wissen was passiert ist — und was sie tun muss.",
  kontextB1:
    "Es ist 10:45 Uhr. Der Schicht-Wechsel kommt. Frau Wegner sagt: \"Trag alles ein bevor wir übergeben. Was du nicht dokumentiert hast, gilt als nicht gemacht.\" Das ist Gesetz (§ 630f BGB) und Patienten-Sicherheit. Die nächste Kollegin muss wissen, was passiert ist. Und was sie tun muss.",
  kernSteps: [
    // Step 6.1 — Freetext LANG: Pflegebericht
    {
      stepId: "ce02-petrov-dok-01-pflegebericht-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "III.2",
      quellen: [
        "§ 630f BGB Behandlungsdokumentation",
        "§ 4 PflBG Pflegeprozessverantwortung",
        "Leonard M./Graham S./Bonacum D. 2004 SBAR, BMJ Qual Saf",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-petrov-dok-pflegebericht",
      tag: "pflege",
      contentC1: {
        title: "Pflegebericht Frühschicht — frei formulieren",
        body: "Schreibe den Pflegebericht für Herrn Petrov, Frühschicht. Dein Text soll enthalten:\n\n1) Beginn der Schicht: Zustand beim Ankommen\n2) Maßnahmen: Körperpflege (Bobath), Mobilisation (Bettkante), Frühstück anreichen, Katheterkontrolle\n3) Besonderes Ereignis: Aspiration beim Frühstück — was passierte genau, welche Maßnahmen du ergriffen hast\n4) Befund nach der Schicht: Wie ist der Zustand jetzt?\n5) Offene Punkte: Was muss die Spätdienst-Kollegin wissen?\n\nSchreibe professionell, knapp, vollständig. Keine Wertungen (\"war unkooperativ\"), keine Abkürzungen ohne Erläuterung.",
        fallbezug:
          "Frühschicht mit Herrn Petrov — Schlaganfall Tag 5, Hemiparese rechts, Dysphagie Grad 2, Aphasie.",
        glossarBegriffe: [
          "Pflegebericht",
          "Dokumentation",
          "§ 630f BGB",
          "SBAR",
        ],
      },
      contentB1: {
        title: "Den Pflege-Bericht schreiben",
        body: "Du schreibst den Pflege-Bericht für Herrn Petrov, Früh-Schicht. Dein Text muss enthalten:\nBeginn der Schicht: Wie war Herr Petrov am Morgen?\nMaßnahmen: Körper-Pflege, Mobilisation, Frühstück, Katheter-Kontrolle.\nBesonderes Ereignis: Aspiration beim Frühstück. Was ist passiert? Was hast du getan?\nBefund danach: Wie war die Situation am Ende?\nOffene Punkte: Was muss die nächste Kollegin wissen?",
        fallbezug:
          "Frühschicht mit Herrn Petrov — Schlaganfall, Hemiparese, Dysphagie, Aphasie.",
        glossarBegriffe: ["Pflegebericht", "Dokumentation"],
      },
      question: {
        fragetext:
          "Schreibe den Pflegebericht für Herrn Petrov, Frühschicht (~120-180 Wörter).",
        musterantwort:
          "07:15 Uhr: Herr Petrov (58 J., ischämischer Apoplex Tag 5) in Rückenlage, wach und orientiert (nickt gezielt). Hemiparese rechts unverändert (Arm: kein gezielter Griff; Bein: Anheben möglich). Aphasie: kommuniziert nonverbal (Nicken/Kopfschütteln) und mit Einzelwörtern. 07:55 Uhr: Ganzkörperpflege nach Bobath durchgeführt. Herr Petrov beteiligte die linke Hand aktiv. Haut an Steißbein, Fersen, Schulterblatt: kein Befund. Katheterbeutel hing korrekt, 1.800 ml/24h, Urin goldgelb. 09:05 Uhr: Frühstück angereichert (IDDSI Level 2 + Kostform B, Oberkörper 90°). Beim Trinken: Aspirationsereignis — Herr Petrov hustete heftig. Sofortige Maßnahmen: Anreichen gestoppt, auf 90° aufgerichtet, Husten angeregt. Nach 3 Min: Atemgeräusch ohne Stethoskop hörbar unauffällig, Atemfreqünz 17/Min, kein SpO2-Abfall, Herr Petrov wieder ruhig. 09:30 Uhr: Mobilisation — RR liegend 138/82, RR sitzend 132/80, Puls 84 regelmäßig, kein Schwindel; Herr Petrov saß 13 Minuten an der Bettkante, linker Daumen hoch nach 8 Min. Natalya (Ehefrau) über Dysphagie informiert, angedickte Flüssigkeit erklärt, Anleitung zum Anreichen gegeben. 10:30 Uhr: Atembeobachtung post-Mobilisation: hörbares Atemgeräusch unauffällig, Atemfreqünz 17/Min, kein hörbares Rasseln, Lippen rosig. Offen: Schlucktherapeutin und Arzt über Aspirationsereignis informieren, gemeinsam Konsistenz für Mittagessen festlegen (Level 3 prüfen), Pneumonie-Verlaufskontrolle (Atemfreqünz, Temperatur) über 24-48 h. Katheter Tag 5 — Frau Wegner informiert, gemeinsam Arzt-Rücksprache re: vorzeitige Re-Evaluation geplant.",
        bewertungskriterien: [
          "Datum/Uhrzeit bei Maßnahmen vorhanden",
          "Ganzkörperpflege nach Bobath erwähnt",
          "Aspirationsereignis klar benannt",
          "Maßnahmen bei Komplikation dokumentiert (stoppen, aufrichten, beobachten)",
          "Befund nach dem Ereignis (Atmung stabil)",
          "Mobilisation + Ergebnis (13 Min) dokumentiert",
          "Natalya-Gespräch erwähnt",
          "Offene Punkte: Schlucktherapeutin + Konsistenz + Katheter",
          "Keine Wertungen wie 'war unkooperativ'",
        ],
        satzanfaengeB1: [
          "07:15 Uhr: Herr Petrov lag in Rücken-Lage. Er war wach und orientiert.",
          "07:55 Uhr: Körper-Pflege nach Bobath durchgeführt. ...",
          "09:05 Uhr: Frühstück angereichert. Herr Petrov hat sich beim Trinken verschluckt.",
          "Maßnahme: Sofort gestoppt. Auf 90° aufgesetzt. Husten angeregt. Danach stabil.",
          "09:30 Uhr: Mobilisation — Herr Petrov saß 13 Minuten an der Bett-Kante.",
          "Offen: Schluck-Therapeutin informieren. Flüssigkeit Level 3 prüfen. Katheter Tag 5 — Arzt fragen.",
        ],
      },
    },

    // Step 6.2 — TableFillIn: Katheter-Bilanz
    {
      stepId: "ce02-petrov-dok-02-katheter-bilanz",
      phase: 6,
      stepType: "tablefillin",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: [
        "§ 4 PflBG Pflegeprozessverantwortung",
        "KRINKO 2015 Dokumentationspflicht BVK",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-petrov-dok-katheter-bilanz",
      tag: "pflege",
      contentC1: {
        title: "Katheter-Bilanz berechnen",
        body: "Fülle die Katheter-Bilanz für die Frühschicht (8 h) aus. Einnahme minus Ausscheidung = Bilanz. Die hochgerechnete Tagesmenge (24 h) basiert auf der pro-Stunde-Ausscheidung × 24.",
        glossarBegriffe: ["Bilanzierung", "BVK", "Ausscheidung"],
      },
      contentB1: {
        title: "Katheter-Bilanz ausfüllen",
        body: "Fülle die Tabelle aus. Einnahme minus Ausscheidung = Bilanz. Tages-Menge (24 h) = Ausscheidung pro Stunde × 24.",
        glossarBegriffe: ["Bilanzierung", "BVK"],
      },
      question: {
        fragetext: "Fülle die Katheter-Bilanz für die Frühschicht (8h) aus.",
        tablefillin: {
          instruction: "Ergänze die fehlenden Felder in der Bilanz-Tabelle.",
          headers: [
            "Parameter",
            "Beginn Schicht",
            "Frühschicht (8 h)",
            "Bewertung",
          ],
          rows: [
            [
              { value: "Urinfarbe", isBlank: false },
              { value: "goldgelb", isBlank: false },
              { value: "goldgelb", isBlank: false },
              { value: "Normal", isBlank: false },
            ],
            [
              { value: "Beutelinhalt", isBlank: false },
              { value: "200 ml", isBlank: false },
              { value: "Beutel geleert", isBlank: false },
              {
                value: "—",
                isBlank: false,
              },
            ],
            [
              { value: "Einnahme (Flüssigkeit)", isBlank: false },
              { value: "—", isBlank: false },
              {
                value: "800 ml",
                isBlank: true,
                options: ["400 ml", "800 ml", "1.200 ml"],
              },
              { value: "laut Bilanzblatt", isBlank: false },
            ],
            [
              { value: "Ausscheidung", isBlank: false },
              { value: "—", isBlank: false },
              {
                value: "600 ml",
                isBlank: true,
                options: ["400 ml", "600 ml", "900 ml"],
              },
              { value: "laut Beutel gemessen (~75 ml/h)", isBlank: false },
            ],
            [
              { value: "Bilanz (8 h)", isBlank: false },
              { value: "—", isBlank: false },
              {
                value: "+ 200 ml",
                isBlank: true,
                options: ["+ 200 ml", "- 200 ml", "0 ml"],
              },
              { value: "Einnahme − Ausscheidung", isBlank: false },
            ],
            [
              { value: "Tagesmenge Hochrechnung (24 h)", isBlank: false },
              { value: "—", isBlank: false },
              { value: "ca. 1.800 ml", isBlank: false },
              {
                value: "Normal (1.500–2.000 ml)",
                isBlank: true,
                options: [
                  "Normal (1.500–2.000 ml)",
                  "Zu wenig (< 800 ml)",
                  "Zu viel (> 3.000 ml)",
                ],
              },
            ],
          ],
        },
      },
    },

    // Step 6.3 — Freetext kurz: SBAR-Übergabe mündlich
    {
      stepId: "ce02-petrov-dok-03-sbar-uebergabe",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "III.2",
      quellen: [
        "Leonard M./Graham S./Bonacum D. 2004 SBAR, BMJ Qual Saf",
        "§ 4 PflBG",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-petrov-dok-sbar-uebergabe",
      tag: "pflege",
      contentC1: {
        title: "Mündliche SBAR-Übergabe formulieren",
        body: "Formuliere die mündliche SBAR-Übergabe an die Spätdienst-Kollegin für Herrn Petrov in 3-4 Sätzen. Die Kollegin kennt Herrn Petrov noch nicht.",
        glossarBegriffe: ["SBAR", "Übergabe", "Pflegedokumentation"],
      },
      contentB1: {
        title: "Die mündliche Übergabe",
        body: "Du übergibst mündlich an die Spät-Dienst-Kollegin. Das geht nach SBAR:",
        glossarBegriffe: ["SBAR", "Übergabe"],
      },
      question: {
        fragetext:
          "Formuliere die mündliche SBAR-Übergabe an die Spätdienst-Kollegin für Herrn Petrov in 3-4 Sätzen.",
        musterantwort:
          "S: Herr Petrov, Zimmer 112, 58 Jahre, Schlaganfall Tag 5, Hemiparese rechts, Dysphagie Grad 2, leichte Broca-Aphasie, BVK seit Tag 1. B: Frühschicht: Körperpflege nach Bobath, Mobilisation 13 Min Bettkante (RR liegend 138/82, sitzend 132/80, kein Schwindel), Frühstück angereichert — Aspirationsereignis beim Trinken, stabilisiert. Natalya über Dysphagie informiert und einbezogen. A: Pflegerische Atembeobachtung stabil (Atemfreqünz 17/Min, kein Rasseln hörbar), Katheter unauffällig (1.800 ml/24h, goldgelb), kein Dekubituszeichen. R: Schlucktherapeutin und Arzt über Aspirationsereignis informieren, gemeinsam Konsistenz für Mittagessen festlegen — Pneumonie-Verlaufskontrolle 24-48 h. Katheter Tag 5 — Frau Wegner und Arzt ansprechen re: frühere Entfernung.",
        bewertungskriterien: [
          "S: Patient, Diagnose, Probleme",
          "B: Durchgeführte Maßnahmen + Aspiration erwähnt",
          "A: Befund Ende Schicht",
          "R: Mindestens 3 Empfehlungen für Spätdienst",
        ],
        satzanfaengeB1: [
          "S = Situation: Herr Petrov, 58 Jahre, Schlaganfall Tag 5, Hemi-Parese rechts, Dysphagie.",
          "B = Hintergrund: Körper-Pflege nach Bobath. Mobilisation: 13 Minuten an der Bett-Kante. Beim Frühstück hat er sich verschluckt. Ich habe gestoppt und ihn aufgesetzt. Danach stabil.",
          "A = Auswertung: Lunge klingt normal. Katheter unauffällig. Natalya ist informiert.",
          "R = Empfehlung: Schluck-Therapeutin informieren. Flüssigkeit Level 3 beachten. Katheter: Heute ist Tag 5 — Arzt fragen.",
        ],
      },
    },

    // Step 6.4 — Summary: Situations-Abschluss
    {
      stepId: "ce02-petrov-dok-04-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-petrov-dok-summary",
      tag: "pflege",
      contentC1: {
        title: "Was du heute gelernt hast",
        body: "Situation ls-petrov-schlaganfall abgeschlossen. 9 Themen, 2 Komplikationen, ein Patient der alles verstand und wenig sagen konnte. Du hast ihn ernst genommen — das ist Pflege.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was du heute gelernt hast",
        body: "Du hast die Situation abgeschlossen. 9 Themen, 2 schwierige Situationen. Du hast Herrn Petrov ernst genommen. Das ist gute Pflege.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Zusammenfassung: Was nimmst du aus dieser Situation mit?",
        summary: {
          reflexionRueckbezug:
            "Du hast einen 58-jährigen Ingenieur durch eine Frühschicht begleitet — 9 Pflegethemen verwoben, 2 Komplikationen bewältigt, eine Ehefrau beraten. Herr Petrov saß 13 Minuten an der Bettkante. Er hat den Daumen hochgezeigt.",
          kernaussagen: [
            "Bobath-Prinzip: Bewegungsangebot machen — nicht übernehmen. Betroffene Seite ist gleichwertig.",
            "Dysphagie Grad 2 (GUSS): breiige Konsistenz sicher, Dünnflüssiges aspirationsgefährdet. IDDSI Level 2 ist nicht optional.",
            "Pneumonieprophylaxe beginnt bei der Lagerung und endet bei der Bettkante — Frühmobilisation verbessert Atemvolumen um bis zu 30%.",
            "BVK: Täglich beurteilen ob noch nötig. Proaktiv kommunizieren. KRINKO 2015: so früh wie möglich entfernen.",
            "PESR macht Pflegeprobleme handlungsleitend. SMART-Ziele sind messbar — Evaluation ist Ist-Soll-Vergleich.",
            "Was du nicht dokumentiert hast, gilt als nicht gemacht. § 630f BGB. SBAR macht Übergaben vollständig.",
          ],
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 22,
};
