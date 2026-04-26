// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 1: Informieren & Ankommen
// Steps: 5 (4 Kern + 1 Optional) · Bloom: B2-B3 · Zeit: ~20-30 Min
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-informieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-bauer-informieren",
  phase: "informieren",
  titel: "Informieren & Ankommen",
  titelB1: "Ankommen bei Herrn Bauer",
  kontext:
    "Du stehst vor Zimmer 8 der gerontopsychiatrischen Station. Es ist 7:20 Uhr, Frühschicht. Durch die angelehnte Tür hörst du Herrn Bauer bereits: Er redet laut, seine Stimme klingt aufgewühlt. Du weißt aus der Übergabe: gestürzt in der Nacht, keine sichtbaren Verletzungen, aber unruhig seit dem Ereignis. Eine Tür zu einem Menschen mit Demenz zu öffnen ist kein neutraler Moment. Herr Bauer lebt in einer anderen Zeitebene als du — für ihn ist es vielleicht 1978 und er muss in die Werkstatt. Oder er weiß gar nicht, wo er ist. Er weiß nicht, dass er letzte Nacht gestürzt ist. Er weiß nur, dass er Angst hat. Was du jetzt tust, entscheidet über die nächsten Stunden.",
  kontextB1:
    "Du stehst vor Zimmer 8. Es ist 7:20 Uhr morgens. Du hörst Herrn Bauer. Er redet laut. Seine Stimme klingt aufgeregt. Du weißt: Er ist heute Nacht gestürzt. Er hat keine sichtbaren Verletzungen. Aber er ist unruhig. Herr Bauer hat Demenz (= Gedächtnis-Erkrankung). Er weiß nicht, wo er ist. Er weiß nicht, welcher Tag es ist. Er weiß nicht, dass er gestürzt ist. Er hat Angst. Was du jetzt tust, ist sehr wichtig.",
  kernSteps: [
    // Step 1.1 — Übergabe lesen
    {
      stepId: "ce02-bauer-info-01-uebergabe-lesen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-bauer-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Frühschicht-Übergabe auf gerontopsychiatrischer Station, Pflegekraft hält handgeschriebenes Blatt, warmes Morgenlicht",
      bildhinweis:
        "Early morning nursing handover at geriatric psychiatry ward, nurse holding handwritten note, warm morning light, calm atmosphere, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Übergabe von der Nacht",
        body: "Stationszimmer, 7:15 Uhr.\n\nNachtpflegerin Aylin gibt dir beim Verlassen kurz ein Blatt: \"Hier — das hab ich von Herrn Bauer notiert. Sturzprotokoll angefangen, aber ich hatte keine Zeit mehr.\" Du liest die handschriftlichen Stichworte: Sturz ca. 02:30 Uhr, Flur vor Zimmer 8. Sitzend vorgefunden, ansprechbar. Keine Blutung, keine Deformität. Sehr unruhig, wollte 'zur Arbeit'. Zurück ins Bett gebracht. Schläft jetzt. Einschätzung noch offen. Was weißt du — und was weißt du NICHT?",
        fallbezug:
          "Herr Bauer (82, Alzheimer FAST 6a, Pflegegrad 4) ist heute Nacht gestürzt. Du übernimmst ihn in der Frühschicht. Das Assessment der Nacht ist unvollständig.",
        glossarBegriffe: ["Sturzprotokoll", "Assessment"],
      },
      contentB1: {
        title: "Übergabe von der Nacht",
        body: "Stationszimmer, 7:15 Uhr.\n\nDie Nachtschwester gibt dir ein Blatt mit Stichpunkten. Darauf steht: Herr Bauer ist um 02:30 Uhr gestürzt. Er saß auf dem Boden im Flur. Er war ansprechbar (= er hat reagiert). Er hatte keine Wunden. Er war sehr unruhig. Er sagte: \"Ich muss zur Arbeit.\" Die Nachtschwester hat ihn ins Bett gebracht. Das Sturzprotokoll ist nicht vollständig. Was weißt du jetzt? Was fehlt noch?",
        fallbezug:
          "Herr Bauer (82, Gedächtnis-Erkrankung, viel Hilfe nötig) ist heute Nacht hingefallen. Du arbeitest am Morgen. Das Formular ist noch nicht fertig.",
        glossarBegriffe: ["Sturzprotokoll", "ansprechbar"],
      },
    },

    // Step 1.2 — Kategorisieren: Was weiß ich, was fehlt?
    {
      stepId: "ce02-bauer-info-02-was-fehlt",
      phase: 1,
      stepType: "categorize",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-info-informationsstand",
      tag: "pflege",
      contentC1: {
        title: "Informationsstand prüfen",
        body: "Welche Informationen hast du bereits aus der Übergabe — welche fehlen noch? Sortiere die Karten in drei Kategorien.",
        glossarBegriffe: ["Assessment", "Sturzprotokoll"],
      },
      contentB1: {
        title: "Was weiß ich? Was fehlt?",
        body: "Sortiere die Karten: Was weißt du schon? Was musst du noch herausfinden? Was brauchst du jetzt nicht?",
        glossarBegriffe: ["Assessment"],
      },
      question: {
        fragetext:
          "Ordne jede Information einer Kategorie zu: 'Ich weiß es bereits' / 'Muss ich noch herausfinden' / 'Brauche ich gerade nicht'.",
        categories: [
          { name: "Ich weiß es bereits" },
          { name: "Muss ich noch herausfinden" },
          { name: "Brauche ich gerade nicht" },
        ],
        categoryItems: [
          { text: "Sturzzeit: ca. 02:30 Uhr", correctCategory: 0 },
          { text: "Sturzort: Flur vor Zimmer 8", correctCategory: 0 },
          { text: "Keine sichtbaren Blutungen / Deformitäten", correctCategory: 0 },
          { text: "Medikamentenliste von Herrn Bauer", correctCategory: 0 },
          { text: "Schmerzerhebung — fehlt noch", correctCategory: 1 },
          { text: "Gelenkbeweglichkeit — fehlt noch", correctCategory: 1 },
          { text: "Trinkmenge gestern — fehlt noch", correctCategory: 1 },
          { text: "Aktuelle Stimmung / Zustand jetzt — unbekannt", correctCategory: 1 },
          { text: "Geburtsdatum von Herrn Bauer", correctCategory: 2 },
          { text: "Diagnose der Alzheimer-Demenz", correctCategory: 0 },
        ],
      },
    },

    // Step 1.3 — Erklär-Step: Validation nach Naomi Feil
    {
      stepId: "ce02-bauer-info-03-validation-grundlage",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "II.1",
      quellen: ["Feil N. / de Klerk-Rubin V. (2012)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-info-validation",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Validation: Wie öffne ich die Tür?",
        body: "Du stehst vor Herrn Bauers Zimmer. Bevor du eintrittst: Was ist der richtige Zugang bei einem Menschen mit Demenz nach einem nächtlichen Sturz? Validation nach Feil arbeitet mit 14 Techniken (Zentrieren, Reformulieren, Spiegeln, Berührung u. a.). Für die Praxis lassen sich daraus folgende Grundprinzipien ableiten (vereinfacht nach Feil 2012):\n\n1. Gefühle ernst nehmen — nicht korrigieren. Sag nicht: \"Sie sind nicht in der Werkstatt.\" Das erhöht Angst.\n2. In der emotionalen Realität des Menschen ankommen — wenn er denkt, er muss arbeiten, höre zu.\n3. Ruhige Stimme und Augenhöhe — nicht von oben sprechen.\n4. Namen benutzen: \"Herr Bauer\" — persönlich, nicht abstrakt.\n5. Kurze, einfache Sätze — nicht erklären, nicht argumentieren.\n\nQuelle: Feil N. / de Klerk-Rubin V. (2012): Validation. Reinhardt-Verlag.",
        glossarBegriffe: ["Validation", "Demenz", "Desorientierung"],
      },
      contentB1: {
        title: "Wie gehe ich zu Herrn Bauer?",
        body: "Du gehst gleich zu Herrn Bauer. Wie machst du das richtig? Das nennt man Validation (= den Menschen so nehmen, wie er ist). Vereinfacht nach Naomi Feil — 5 Grundregeln:\n\n1. Nimm seine Gefühle ernst. Sage nicht: \"Du bist nicht in der Werkstatt.\" Das macht Angst.\n2. Gehe in seine Welt. Er glaubt, er muss arbeiten? Höre zu.\n3. Sprich ruhig. Gehe auf Augenhöhe.\n4. Sage seinen Namen: \"Herr Bauer\".\n5. Sprich kurze, einfache Sätze.\n\nBeispiel richtig: \"Herr Bauer, ich sehe, du hast heute viel zu tun. Ich bin [dein Name]. Ich helfe dir heute früh.\"",
        glossarBegriffe: ["Validation", "Demenz"],
      },
    },

    // Step 1.4 — Dialog: Zimmer betreten
    {
      stepId: "ce02-bauer-info-04-zimmer-betreten",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Feil N. / de Klerk-Rubin V. (2012)", "DNQP Beziehungsgestaltung Demenz 2018"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-bauer-info-dialog-einstieg",
      tag: "pflege",
      contentC1: {
        title: "Das Zimmer betreten",
        body: "Du öffnest die Tür. Herr Bauer sitzt aufrecht im Bett, Decke zur Seite geworfen, schaut dich misstrauisch an. Er ist aufgewühlt. Jetzt kommt sein erster Satz.",
        glossarBegriffe: ["Validation", "Deeskalation"],
      },
      contentB1: {
        title: "Ins Zimmer gehen",
        body: "Du öffnest die Tür. Herr Bauer sitzt im Bett. Er hat die Decke weggeworfen. Er schaut dich misstrauisch an. Er ist aufgeregt. Jetzt spricht er.",
        glossarBegriffe: ["Validation"],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Herrn Bauer.",
        patientName: "Herr Bauer",
        dialogPhases: [
          {
            context:
              "Herr Bauer schaut dich an, seine Stimme ist laut und aufgewühlt. Er sagt:",
            contextB1:
              "Herr Bauer schaut dich an. Er spricht laut. Er sagt:",
            speaker: "Herr Bauer",
            options: [
              {
                text: "\"Herr Bauer, beruhigen Sie sich bitte — Sie sind im Krankenhaus, nicht in der Werkstatt.\"",
                textB1:
                  "\"Herr Bauer, beruhig dich — du bist im Krankenhaus, nicht in der Werkstatt.\"",
                patientResponse:
                  "Herr Bauer wird lauter: \"Nein! Lassen Sie mich! Ich muss zur Arbeit!\" Er versucht aufzustehen.",
                patientResponseB1:
                  "Herr Bauer schreit lauter: \"Nein! Ich muss raus!\" Er will aufstehen.",
                score: 0,
                feedback:
                  "Realitätsorientierung bei schwerer Demenz verstärkt Angst und Agitation. Du korrigierst seine Realität — das fühlt sich für ihn wie ein Angriff an. Validation-Prinzip: Gefühle ernst nehmen statt korrigieren.",
                feedbackB1:
                  "Das ist falsch bei Demenz. Wenn du seine Realität korrigierst, macht er mehr Angst. Er versteht die Korrektur nicht — er fühlt nur Bedrohung.",
              },
              {
                text: "\"Herr Bauer, ich sehe — heute haben Sie viel zu tun. Ich bin [Name]. Ich helfe Ihnen heute früh und bleibe ein bisschen bei Ihnen.\"",
                textB1:
                  "\"Herr Bauer, ich sehe, du hast heute viel zu tun. Ich bin [Name]. Ich helfe dir heute früh und bleibe ein bisschen bei dir.\"",
                patientResponse:
                  "Herr Bauer schaut dich an. Seine Stimme wird etwas leiser. Er sagt: \"Ja... die Bestellung...\" und schaut zur Seite.",
                patientResponseB1:
                  "Herr Bauer schaut dich an. Er wird etwas ruhiger. Er sagt: \"Ja... die Bestellung...\"",
                score: 3,
                feedback:
                  "Validierend, nicht korrigierend. Du bestätigst seine Realität (\"du hast viel zu tun\"), stellst dich vor und kündigst wahrhaftig an, was passiert (\"helfe dir heute früh, bleibe ein bisschen\"). Bei Demenz ist Verlässlichkeit zentral (DNQP Beziehungsgestaltung Demenz 2018) — Floskeln wie \"ich schaue kurz\" werden später als Vertrauensbruch erlebt, wenn die volle Morgenpflege folgt.",
                feedbackB1:
                  "Sehr gut. Du nimmst ihn ernst. Du sagst: 'Du hast viel zu tun' — das ist seine Welt. Du sagst ehrlich, was du tust (helfen, bleiben). Bei Demenz ist Wahrhaftigkeit wichtig — sage nie 'ich schaue kurz', wenn du in Wahrheit eine ganze Pflege machst.",
              },
              {
                text: "\"Guten Morgen, Herr Bauer. Wie geht es Ihnen heute?\"",
                textB1:
                  "\"Guten Morgen, Herr Bauer. Wie geht es dir heute?\"",
                patientResponse:
                  "Herr Bauer antwortet nicht auf die Frage. Er sagt weiter: \"Die Bestellung! Die kommt noch heute!\"",
                patientResponseB1:
                  "Herr Bauer hört nicht zu. Er sagt: \"Die Bestellung! Heute noch!\"",
                score: 1,
                feedback:
                  "Freundlich, aber nicht angepasst. \"Wie geht es Ihnen?\" ist eine offene Frage die er gerade nicht beantworten kann — seine Gedanken sind woanders. Validation: zuerst seinen emotionalen Zustand aufgreifen, dann Kontakt herstellen.",
                feedbackB1:
                  "Freundlich — gut. Aber die Frage passt gerade nicht. Er ist in Gedanken woanders. Besser: Zuerst seine Aufregung aufgreifen.",
              },
            ],
          },
        ],
      },
    },
  ],

  optionaleSteps: [
    // Step 1.5 — Flipcard: FAST-Skala Stufen
    {
      stepId: "ce02-bauer-info-05-demenzstadien",
      phase: 1,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Reisberg B. et al. (1982): FAST-Skala"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-info-demenzstadien",
      tag: "krankheitslehre",
      contentC1: {
        title: "Demenzstadien — FAST-Skala",
        body: "Herr Bauer ist in FAST-Stufe 6a. Verstehe, was das bedeutet — und warum er sich so verhält.",
        glossarBegriffe: ["FAST-Skala", "Alzheimer-Demenz"],
      },
      contentB1: {
        title: "Wie schwer ist Herrn Bauers Demenz?",
        body: "Herr Bauer ist in Stufe 6a der FAST-Skala. Was bedeutet das? Schau dir die Karten an.",
        glossarBegriffe: ["FAST-Skala", "Demenz"],
      },
      question: {
        fragetext:
          "Drehe jede Karte um: Vorderseite = Stufe + kurze Beschreibung, Rückseite = Pflegerische Konsequenz.",
        flipcard: {
          instruction:
            "Drehe jede Karte um und lies die pflegerische Konsequenz.",
          cards: [
            {
              front: "FAST-Stufe 4: Mittelschwere Demenz — braucht Hilfe bei ADL (Kleidung, Bad, Finanzen). Wohnt oft noch zuhause.",
              back: "Pflege: Struktur, Routinen, Erinnerungshilfen. Angehörige aktiv einbeziehen.",
              backB1: "Pflege: Feste Abläufe, gleiche Uhrzeiten. Angehörige helfen.",
            },
            {
              front: "FAST-Stufe 5: Schwere Demenz — braucht Hilfe beim Ankleiden. Erinnert sich nicht mehr an wichtige Details (z. B. aktuelle Adresse).",
              back: "Pflege: Übernahme der Körperpflege, einfache Kommunikation, Würde wahren.",
              backB1: "Pflege: Du hilfst beim Waschen und Anziehen. Kurze, ruhige Sätze.",
            },
            {
              front: "FAST-Stufe 6a (= Herr Bauer): Schwere Demenz — Schwierigkeiten beim korrekten Anziehen (z. B. falsche Reihenfolge, falsche Seite, anziehen ist möglich, aber inkorrekt). Desorientierung zu Ort, Zeit, Situation. Nachtaktivität, Weglauftendenz.",
              back: "Pflege: Validation, Basale Stimulation, Nachtlichtsensor, Niedrigbett. Aggression = Angst, keine Böswilligkeit.",
              backB1: "Pflege: Validation nutzen. Ruhige Berührungen. Nachtlicht. Er schlägt aus Angst — nicht aus Böswilligkeit.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 25,
};
