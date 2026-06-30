// CE-02 Thema Sturz-Prophylaxe — Wissensbausteine (13 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/sturz-prophylaxe/bausteine-plan.md
// Pipeline v9 — 2026-04-22
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_STURZ_PROPHYLAXE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: sturz-definition (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-sturz-definition",
    themaId: "sturz-prophylaxe",
    titel: "Definition: Was ist ein Sturz?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was, glaubst du, zählt alles als Sturz? Zählt es auch, wenn der Patient sich gerade noch abfängt?",
      antwort:
        "Ein Sturz ist laut WHO ein unbeabsichtigtes Landen auf dem Boden oder einer tieferen Ebene. Auch abgefangene Stürze (Near-Miss) zählen als Sturzereignis und müssen dokumentiert werden — sie sind Warnsignale für erhöhtes Sturzrisiko.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Sturz ist laut WHO ein unbeabsichtigtes Landen auf dem Boden oder einer tieferen Ebene. Wichtig: Auch abgefangene Stürze (Near-Miss) zählen als Sturzereignis und werden dokumentiert — sie sind Warnsignale für ein erhöhtes Risiko.",
      textB1:
        "Ein Sturz ist, wenn jemand unabsichtlich auf den Boden fällt. Auch wenn man sich am Tisch festhält und fast fällt, zählt das als Sturz. Wir nennen das 'Near-Miss'. Auch diese Fast-Stürze werden aufgeschrieben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["WHO 2007", "DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-definition",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Definition: Was ist ein Sturz?",
          body: "Die WHO definiert einen Sturz als 'Ereignis, bei dem die betroffene Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene landet'. Drei Aspekte sind entscheidend: **unbeabsichtigt** (wer sich bewusst hinsetzt, stürzt nicht), **tiefere Ebene** (auch vom Stuhl zu rutschen ist ein Sturz) und **Ereignis** (kein Prozess, sondern ein Moment). Auch **Near-Miss** — wenn jemand sich noch abfängt oder von einer Pflegekraft aufgefangen wird — gehört dazu und muss dokumentiert werden. Warum? Weil der nächste Sturz vielleicht nicht abgefangen wird. Merke: Jeder Sturz ist ein Warnsignal — das Ereignis, nicht das Ergebnis, zählt.",
          glossarBegriffe: ["Sturz", "Near-Miss"],
        },
        contentB1: {
          title: "Was ist ein Sturz?",
          body: "Die WHO sagt: Ein Sturz ist, wenn jemand unabsichtlich auf den Boden fällt. Drei Dinge sind wichtig: Es passiert **unabsichtlich** (wer sich setzen will, stürzt nicht). Man fällt auf eine **tiefere Ebene** (Boden, Stuhl — zählt auch). Es ist ein **schneller Moment**. Auch **Near-Miss** (= fast gefallen, aber abgefangen) ist ein Sturz. Warum? Weil es beim nächsten Mal schlimmer sein kann. Merke: Jeden Sturz und jeden Near-Miss aufschreiben.",
          glossarBegriffe: ["Sturz", "Near-Miss"],
        },
      },
    },
    glossarBegriffe: ["Sturz", "Near-Miss"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: risikofaktoren-intrinsisch (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-risiken-intrinsisch",
    themaId: "sturz-prophylaxe",
    titel: "Intrinsische Risikofaktoren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche Eigenschaften eines Patienten erhöhen sein Sturzrisiko? Sammle mindestens 3.",
      antwort:
        "Intrinsische Risikofaktoren sind personenbezogen: Sturz-Vorgeschichte (stärkster Einzelprädiktor — verdoppelt das Risiko), Alter (ab 65/80), Muskelschwäche (Sarkopenie), Gangunsicherheit, Sehminderung, kognitive Einschränkungen, Polypharmazie (> 4 Dauermedikamente), Inkontinenz, orthostatische Dysregulation, chronische Erkrankungen (Parkinson, Schlaganfall). Die Kombination mehrerer Faktoren entscheidet.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Intrinsische Risikofaktoren kommen aus dem Patienten selbst: höheres Alter, Muskelschwäche, Sehminderung, kognitive Einschränkungen, Polypharmazie, Gangunsicherheit. Der stärkste Einzelprädiktor ist ein Sturz in den letzten 12 Monaten.",
      textB1:
        "Intrinsische Risiken hat der Patient in sich: hohes Alter, schwache Muskeln, schlechte Augen, viele Medikamente, Unsicherheit beim Gehen. Das wichtigste Zeichen: Ist er im letzten Jahr schon mal gestürzt?",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022", "Cochrane Review 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-intrinsisch",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Intrinsische Risikofaktoren",
          body: "Intrinsische Risikofaktoren sind personenbezogen. Die wichtigsten: **Sturz-Vorgeschichte** (1 Sturz im letzten Jahr verdoppelt das Risiko), **Alter** (ab 65 steigt das Risiko, ab 80 stark), **Muskelkraftverlust** (Sarkopenie), **Gangunsicherheit und Balanceprobleme**, **Sehminderung** (Katarakt, Makuladegeneration), **kognitive Einschränkungen** (Demenz, Delir), **Polypharmazie** (> 4 Dauermedikamente, insbesondere Psychopharmaka, Diuretika, Antihypertensiva), **Inkontinenz** (Eile zur Toilette bei Drang), **orthostatische Dysregulation** (Schwindel beim Aufstehen), **chronische Erkrankungen** (Parkinson, Schlaganfall-Folgen, Hüftendoprothese). Pflege beobachtet und meldet — die Kombination mehrerer Faktoren ist entscheidend, nicht ein einzelner.",
          glossarBegriffe: [
            "Polypharmazie",
            "Sarkopenie",
            "Orthostatische Dysregulation",
          ],
        },
        contentB1: {
          title: "Intrinsische Risikofaktoren",
          body: "Intrinsische Risiken bedeutet: Der Patient hat sie in sich. Wichtig sind: **Sturz im letzten Jahr** (das ist das wichtigste Zeichen). **Hohes Alter** (über 65, besonders über 80). **Schwache Muskeln**. **Unsicheres Gehen und Balance-Probleme**. **Schlechte Augen**. **Demenz oder Delir**. **Viele Medikamente** (mehr als 4 pro Tag — besonders Schlafmittel, Blutdruckmittel). **Inkontinenz** (muss schnell zur Toilette). **Schwindel beim Aufstehen**. **Parkinson, Schlaganfall**. Die Pflege schaut und meldet. Wichtig: Mehrere Faktoren zusammen = hohes Risiko.",
          glossarBegriffe: [
            "Polypharmazie",
            "Sarkopenie",
            "Orthostatische Dysregulation",
          ],
        },
      },
    },
    glossarBegriffe: [
      "Intrinsische Risikofaktoren",
      "Polypharmazie",
      "Sarkopenie",
      "Orthostatische Dysregulation",
    ],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: risikofaktoren-extrinsisch (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-risiken-extrinsisch",
    themaId: "sturz-prophylaxe",
    titel: "Extrinsische Risikofaktoren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Geh gedanklich durch ein Patientenzimmer. Welche Sturzgefahren könntest du dort entdecken?",
      antwort:
        "Extrinsische Risikofaktoren sind umgebungsbezogen: Stolperfallen (Kabel, Teppiche), ungeeignetes Schuhwerk, schlechte Beleuchtung (besonders nachts), nasse Böden, fehlende Haltegriffe, falsch eingestellte Bett-Höhe. Bettgitter sind KEINE Prophylaxe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Extrinsische Risikofaktoren liegen in der Umgebung: Stolperfallen (Kabel, lose Teppiche), ungeeignetes Schuhwerk, schlechte Beleuchtung, nasse Böden, fehlende Haltegriffe, falsch eingestellte Bett-Höhe.",
      textB1:
        "Extrinsische Risiken kommen von außen: Kabel auf dem Boden, Teppiche, lose Schuhe, wenig Licht, nasser Boden, keine Griffe zum Festhalten, Bett zu hoch oder zu niedrig für den Patienten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-extrinsisch",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "szene",
        imageAlt:
          "Patientenzimmer nachts mit Stolperfallen: Infusionsständer, hohes Bett, wenig Licht, Hausschuhe auf dem Boden",
        bildhinweis:
          "Patient room at night with potential tripping hazards: IV pole, high bed, dim light, slippers on floor, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Extrinsische Risikofaktoren",
          body: "Extrinsische Risiken sind umgebungsbezogen — und oft von Pflege direkt veränderbar. Die häufigsten: **Stolperfallen** (Kabel, Teppichkanten, herumliegende Gegenstände). **Ungeeignetes Schuhwerk** (lose Pantoffeln, glatte Sohlen — rutschfeste Hausschuhe oder geschlossene Schuhe mit Absatz < 2,5 cm sind ideal). **Schlechte Beleuchtung** — besonders nachts. **Nasse oder rutschige Böden** (nach Reinigung, Inkontinenz). **Fehlende Haltegriffe** in Bad und Toilette. **Bett-Höhe** nicht angepasst (bei Transfer hoch, bei Demenzpatienten die klettern: bodennah). **Bettgitter** — können Sturzhöhe erhöhen, sind keine Prophylaxe! Pflege beobachtet, verändert und dokumentiert Umgebungsanpassungen.",
          glossarBegriffe: ["Extrinsische Risikofaktoren"],
        },
        contentB1: {
          title: "Extrinsische Risikofaktoren",
          body: "Extrinsische Risiken kommen von außen — und Pflege kann viel ändern. Die wichtigsten: **Kabel, Teppiche** (Stolpergefahr). **Lose Schuhe** (rutschfeste Hausschuhe sind besser). **Wenig Licht** (besonders nachts). **Nasser Boden** (nach Putzen). **Keine Griffe** in Bad und Toilette. **Bett zu hoch oder zu niedrig** (nicht passend zum Patienten). **Bettgitter** — die machen den Sturz schlimmer, keine Prophylaxe! Pflege schaut, ändert, schreibt auf.",
          glossarBegriffe: ["Extrinsische Risikofaktoren"],
        },
      },
    },
    glossarBegriffe: ["Extrinsische Risikofaktoren"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: sturzrisiko-assessment (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-assessment",
    themaId: "sturz-prophylaxe",
    titel: "Sturzrisiko-Assessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein neuer Patient wird aufgenommen. Du musst sein Sturzrisiko einschätzen. Wie gehst du vor? Was fragst du? Was beobachtest du?",
      antwort:
        "DNQP 2022: Keine einzelne Skala ist Pflicht. Multifaktorielle klinische Einschätzung mit: (1) Sturzanamnese der letzten 12 Monate, (2) Medikamenten-Review, (3) Gang-/Balance-Beobachtung (z.B. Timed-Up-and-Go: > 14 s = Risiko), (4) Sehkraft, (5) Kognition. Re-Assessment bei jeder Zustandsveränderung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der DNQP-Standard empfiehlt KEIN einzelnes Instrument als Pflicht. Führend ist die klinische Einschätzung unter Berücksichtigung multipler Risikofaktoren. Instrumente wie Tinetti, Timed-Up-and-Go oder Morse können unterstützen.",
      textB1:
        "Der DNQP-Standard sagt: Es gibt kein einzelnes Instrument, das man nehmen muss. Wichtig ist die Einschätzung durch die Pflegekraft. Sie schaut auf viele Risiken gleichzeitig. Werkzeuge wie Tinetti oder TUG können helfen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-assessment",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Sturzrisiko-Assessment",
          body: "Sturzrisiko-Assessment ist nicht das Ausfüllen eines Formulars — es ist klinisches Denken. Der DNQP-Expertenstandard 2022 stellt klar: **Kein einzelnes Tool ist Pflicht** (anders als frühere Versionen). Stattdessen: Multifaktorielle klinische Einschätzung. Pflichtaspekte: (1) Anamnese-Frage nach Sturz in den letzten 12 Monaten, (2) Medikamenten-Review, (3) Gang-/Balance-Beobachtung (z.B. Timed-Up-and-Go: > 14 Sekunden = Risiko), (4) Sehkraft, (5) Kognition. Instrumente wie **Tinetti** (gut für Reha), **Morse Fall Scale** (Akutkrankenhaus) können unterstützen, nicht ersetzen. Re-Assessment ist Pflicht bei jeder **Zustandsveränderung**: neue Medikamente, nach OP, bei akuter Erkrankung, nach einem Sturzereignis.",
          glossarBegriffe: ["Timed-Up-and-Go", "Tinetti-Test"],
        },
        contentB1: {
          title: "Sturzrisiko-Assessment",
          body: "Das Assessment ist kein Formular ausfüllen — es ist klinisches Denken. Der DNQP-Standard 2022 sagt: **Kein einzelnes Werkzeug ist Pflicht**. Die Pflegekraft muss mehrere Risiken zusammen einschätzen. Das fragt und beobachtet die Pflege immer: (1) Ist der Patient in den letzten 12 Monaten gestürzt? (2) Welche Medikamente nimmt er? (3) Wie sicher ist sein Gang? (Timed-Up-and-Go: wenn länger als 14 Sekunden = Risiko) (4) Wie sind seine Augen? (5) Ist er geistig klar? Das Assessment wird wiederholt: Nach neuen Medikamenten, nach OP, nach einem Sturz.",
          glossarBegriffe: ["Timed-Up-and-Go", "Tinetti-Test"],
        },
      },
    },
    glossarBegriffe: ["Timed-Up-and-Go", "Tinetti-Test"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: kraft-balance-training (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-training",
    themaId: "sturz-prophylaxe",
    titel: "Kraft- und Balance-Training",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was ist wissenschaftlich die wirksamste Einzelmaßnahme gegen Stürze? Rate mal — und warum glaubst du das?",
      antwort:
        "Progressives Kraft- und Balance-Training ist die wirksamste Einzelmaßnahme (Cochrane Review 2023). 2-3× pro Woche, mindestens 12 Wochen. Auch Hochbetagte profitieren — selbst 90-Jährige im Pflegeheim bauen Muskulatur auf.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Progressives Kraft- und Balance-Training ist die am besten belegte Sturzprävention (Cochrane Review 2023). Wirksam ab 2-3 Einheiten/Woche, mindestens 12 Wochen Dauer. Selbst 90-Jährige profitieren nachweislich.",
      textB1:
        "Am besten wirkt Kraft- und Balance-Training. Das haben viele Studien gezeigt (Cochrane Review 2023). 2-3 Mal pro Woche, mindestens 12 Wochen lang. Auch sehr alte Menschen (über 90) werden dadurch stärker.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Cochrane Review 2023 (Sherrington et al.)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-training",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Kraft- und Balance-Training",
          body: "Die Evidenz ist eindeutig: **Progressives Kraft- und Balance-Training ist die wirksamste Einzelmaßnahme gegen Stürze** (Cochrane Review 2023, Sherrington et al.). Progressiv heißt: Die Belastung wird schrittweise gesteigert. Training über mindestens 12 Wochen, 2-3 Mal wöchentlich. Die Einheiten bestehen aus: (1) Mobilisation (Gelenke beweglich machen), (2) Krafttraining (Kniebeugen, Fersenheben, Bein-Press), (3) Balance-Übungen (Einbein-Stand, Tandemstand, Stehen auf weicher Unterlage), (4) Koordination und Alltagstransfer. Wichtig: **Auch Hochbetagte profitieren** — selbst in der Pflegeheim-Population zeigen 90-Jährige signifikante Kraftzuwächse. Die Pflege begleitet und motiviert; Physiotherapie plant und führt durch.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Kraft- und Balance-Training",
          body: "Die Wissenschaft ist klar: **Kraft- und Balance-Training wirkt am besten gegen Stürze** (Cochrane 2023). Progressiv heißt: Schritt für Schritt schwieriger. 2-3 Mal pro Woche, mindestens 12 Wochen. Das Training hat 4 Teile: (1) Gelenke beweglich machen, (2) Kraft aufbauen (Kniebeugen, Auf die Zehenspitzen), (3) Balance üben (Einbein-Stand, Tandemstand), (4) Alltagsbewegungen. Wichtig: **Auch sehr alte Menschen werden stärker**. Sogar 90-Jährige im Pflegeheim. Die Pflege begleitet und macht Mut. Physiotherapie plant.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: medikamentenreview (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-medikamente",
    themaId: "sturz-prophylaxe",
    titel: "Medikamenten-Review",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Schmitt (78) bekommt seit gestern ein neues Schlafmittel. Heute morgen geht sie unsicher und wirkt benommen. Was fällt dir ein?",
      antwort:
        "Medikamenten-Nebenwirkung: Benzodiazepine/Z-Substanzen erhöhen das Sturzrisiko um 50-100 %. Typische Zeichen: Sedierung, Benommenheit, Gangunsicherheit. Pflege muss bei neuen Medikamenten gezielt beobachten, dokumentieren und den Arzt informieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "20-40 % der Stürze bei Senioren haben medikamentöse Mitursachen. Besonders riskant: Benzodiazepine, Z-Substanzen, Antihypertensiva, Diuretika, Antidepressiva, Antipsychotika. Polypharmazie (> 4 Dauermedikamente) ist eigenständiger Risikofaktor.",
      textB1:
        "20-40 % der Stürze bei alten Menschen kommen auch von Medikamenten. Besonders riskant: Schlafmittel, Beruhigungsmittel, Blutdruckmittel, Wassertabletten, Antidepressiva. Ab 4 verschiedenen Medikamenten steigt das Risiko stark.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Beers-Liste 2023", "DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-medikamente",
        tag: "krankheitslehre",
        displayFormat: "checklist",
        contentC1: {
          title: "Medikamenten-Review",
          body: "Medikamente gehören zu den **beeinflussbarsten Sturzrisikofaktoren** — deshalb ist der Medikamenten-Review Teil jedes Sturz-Assessments. Besonders riskant (Beers-Liste 2023): (1) **Benzodiazepine + Z-Substanzen** (Diazepam, Lorazepam, Zolpidem) — Sedierung, Muskelrelaxation; Sturzrisiko + 50-100 %. (2) **Antihypertensiva** — Blutdruckabfall, Orthostase; besonders in Aufdosierungsphasen kritisch. (3) **Diuretika** — Nykturie, Volumenmangel, Hypotonie. (4) **Antidepressiva** (trizyklisch, SSRI) — Orthostase, QT-Verlängerung. (5) **Antipsychotika** — extrapyramidale Symptome, Sedierung. Pflege-Aufgabe: Neue Medikamente registrieren, Patient beobachten (Benommenheit, Schwindel, Gangveränderung), Auffälligkeiten dokumentieren und dem Arzt melden. Merke: Jedes neue Medikament kann das Sturzrisiko verändern.",
          glossarBegriffe: ["Polypharmazie"],
        },
        contentB1: {
          title: "Medikamenten-Review",
          body: "Medikamente sind ein Sturz-Risiko, das man gut ändern kann. Deshalb ist der Medikamenten-Check immer Teil des Sturz-Assessments. Besonders gefährlich (Beers-Liste 2023): (1) **Schlafmittel + Beruhigungsmittel** (wie Diazepam, Zolpidem) — machen müde und schwach. (2) **Blutdruckmittel** — niedriger Blutdruck, Schwindel. (3) **Wassertabletten** — nachts zur Toilette, wenig Flüssigkeit. (4) **Antidepressiva** — Schwindel beim Aufstehen. (5) **Medikamente gegen Psychosen** — extrapyramidal, müde. Pflege-Aufgabe: Neue Medikamente merken, Patient beobachten (müde? schwindelig? unsicher?), aufschreiben, dem Arzt sagen.",
          glossarBegriffe: ["Polypharmazie"],
        },
      },
    },
    glossarBegriffe: ["Polypharmazie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: fixierung-rechtlich (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-fixierung",
    themaId: "sturz-prophylaxe",
    titel: "Fixierung — rechtliche und ethische Grundlagen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau M. (85, Demenz) ist nachts schon zweimal gestürzt. Deine Kollegin sagt: 'Lass uns heute Nacht beide Bettgitter hochziehen.' Was tust du?",
      antwort:
        "Du widersprichst und suchst Alternativen. Beidseitige Bettgitter ohne Zustimmung sind Fixierung (§ 1831 BGB) und KEINE Sturzprophylaxe — sie erhöhen die Sturzhöhe. Alternativen: Niederflur-Bett, Sturzmatte, Bewegungsmelder, Einzelbetreuung. Als Pflegefachkraft hast du Aufklärungs- und Widerspruchspflicht.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Fixierung (inkl. beidseitiger Bettgitter) ist eine freiheitsentziehende Maßnahme. Sie braucht richterliche Genehmigung (§ 1831 BGB) oder informierte Zustimmung des Patienten. Sie ist keine Sturzprophylaxe — sie kann Verletzungen verschlimmern.",
      textB1:
        "Fixierung (auch beidseitige Bettgitter) ist eine freiheitsentziehende Maßnahme. Dafür braucht man Erlaubnis vom Gericht (§ 1831 BGB) oder vom Patienten selbst. Fixierung schützt NICHT vor Stürzen. Sie kann Verletzungen schlimmer machen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["§ 1831 BGB", "DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-fixierung",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Fixierung — rechtliche und ethische Grundlagen",
          body: "Die rechtliche und ethische Lage ist klar: **Fixierung ist keine Sturzprophylaxe**. Der Bundesgerichtshof und § 1831 BGB stellen fest: Freiheitsentziehende Maßnahmen — dazu gehören beidseitige Bettgitter (ohne Zustimmung), Gurte, Bett-am-Boden-Schranken, sedierende 'Bedarfs-Medikation' — sind nur zulässig mit **(a) richterlicher Genehmigung** oder **(b) informierter Einwilligung des Patienten**. In akuter Eigengefährdung darf Pflege notfallmäßig fixieren, muss aber **innerhalb von 24 Stunden** richterliche Genehmigung beantragen. Warum nicht als Prophylaxe? Weil sie das Gegenteil bewirken kann: **Dokumentierte Todesfälle durch Strangulation in Gurten und Bettgittern**; Verletzungen durch Überklettern (Sturzhöhe erhöht); Muskelabbau durch Immobilität; Delir durch Überforderung. Alternativen: Niederflur-Bett, Sturzmatte, Bewegungsmelder, bauliche Anpassung, Einzelbetreuung. Merke: Fixierung ist **ultima ratio**, nicht Erstmaßnahme.",
          glossarBegriffe: ["Fixierung", "§ 1831 BGB"],
        },
        contentB1: {
          title: "Fixierung — rechtlich und ethisch",
          body: "Die Regel ist klar: **Fixierung ist keine Sturzprophylaxe**. Der § 1831 BGB sagt: Jemanden festhalten (beide Bettgitter, Gurte, Bett am Boden, Schlafmittel zum Ruhigstellen) ist nur erlaubt mit **Erlaubnis vom Gericht** oder wenn der Patient selbst zustimmt. In einem Notfall (akute Gefahr) darf Pflege fixieren — aber in **24 Stunden muss man die Erlaubnis beim Gericht beantragen**. Warum ist Fixierung keine Prophylaxe? Sie macht es oft schlimmer: Patienten sind in Bettgittern gestorben (Strangulation); Patienten klettern über Bettgitter und fallen tiefer; Muskeln werden schwächer; Delir durch Überforderung. Bessere Alternativen: Bett niedrig stellen, Sturzmatte, Bewegungsmelder. Merke: Fixierung ist die **allerletzte Möglichkeit**, nie die erste.",
          glossarBegriffe: ["Fixierung", "§ 1831 BGB"],
        },
      },
    },
    glossarBegriffe: ["Fixierung", "§ 1831 BGB"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: umgebungsanpassung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-umgebung",
    themaId: "sturz-prophylaxe",
    titel: "Umgebungsanpassung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du übernimmst einen Patienten im neuen Zimmer. Was prüfst du als erstes hinsichtlich Sturzrisiko in der Umgebung?",
      antwort:
        "Schlüsselbereiche: (1) Bett-Höhe anpassen (tief bei Demenz, hoch für Transfer), (2) Haltegriffe in Bad/Toilette, (3) Beleuchtung auch nachts, (4) rutschfeste Schuhe, (5) Stolperfallen entfernen (Kabel, Teppiche), (6) Boden trocken, (7) Orientierungshilfen bei kognitiven Einschränkungen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Umgebungsanpassung ist direkte Pflegeaufgabe: Haltegriffe, rutschfeste Unterlagen, angepasste Bett-Höhe (tief bei Demenz, hoch für Transfer), freie Wege, Beleuchtung (auch nachts), rutschfeste Schuhe statt Hausschuhe.",
      textB1:
        "Die Umgebung sicher machen ist direkte Pflegeaufgabe: Griffe zum Festhalten, rutschfeste Matten, Bett richtig einstellen (niedrig bei Demenz, hoch für Transfer), freie Wege, Licht (auch nachts), feste Schuhe.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-umgebung",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "szene",
        imageAlt:
          "Patientenzimmer aus Sicht einer älteren Patientin mit Blick auf Bett, Boden und Badezimmertür mit Haltegriffen",
        bildhinweis:
          "Hospital patient room, elderly patient's perspective, showing bed, floor, bathroom door, safe environment with handrails, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Umgebungsanpassung",
          body: "Die Umgebungsanpassung ist die am häufigsten **unterschätzte** Sturzprävention — dabei ist sie die, die Pflege am direktesten umsetzen kann. Schlüsselbereiche: (1) **Bett-Höhe anpassen** — tief bei Demenz-Patienten, die klettern könnten (Sturzmatte davor); hoch genug für rückenschonenden Transfer. (2) **Haltegriffe** in Bad, Toilette, Flur. (3) **Beleuchtung** — auch nachts: Bewegungsmelder, Nachtlichter. (4) **Schuhwerk** — rutschfeste Hausschuhe oder geschlossene Schuhe mit Absatz < 2,5 cm. Keine offenen Pantoffeln. (5) **Stolperfallen entfernen** — lose Teppiche, Kabel, herumliegende Gegenstände. (6) **Boden trocken** halten (Inkontinenz, Reinigung). (7) **Orientierungshilfen** bei kognitiven Einschränkungen. Pflege dokumentiert Anpassungen im Pflegeplan.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Umgebungsanpassung",
          body: "Umgebung sicher machen ist oft unterschätzt — dabei kann Pflege hier viel direkt tun. Das Wichtigste: (1) **Bett richtig einstellen** — niedrig bei Demenz (dazu eine Matte am Boden); hoch genug, dass man rückenschonend arbeiten kann. (2) **Griffe zum Festhalten** in Bad, Toilette, Flur. (3) **Licht** — auch nachts (Nachtlicht, Bewegungsmelder). (4) **Schuhe** — rutschfeste Hausschuhe oder richtige Schuhe mit Absatz unter 2,5 cm. Keine losen Pantoffeln. (5) **Wege frei machen** — keine Teppiche, Kabel, Sachen. (6) **Boden trocken** halten. Pflege schreibt alle Anpassungen im Pflegeplan auf.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: post-fall-syndrom (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-post-fall",
    themaId: "sturz-prophylaxe",
    titel: "Post-Fall-Syndrom",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr K. ist vor 3 Wochen gestürzt. Heute traut er sich nicht mehr aus dem Bett. Er sagt: 'Ich passe lieber auf.' Was passiert mit seinem Körper, wenn er weiter liegt? Was passiert mit seiner Angst?",
      antwort:
        "Teufelskreis: Sturz → Angst → Bewegungsvermeidung → Muskelabbau (1-2 % Kraftverlust pro Tag bei Immobilität!) → Gleichgewichts-Verlust → erhöhtes Sturzrisiko. Pflege: Angst validieren, graduelle Mobilisation mit kleinen Erfolgen, positive Verstärkung, Physio einbinden.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Post-Fall-Syndrom: Nach einem Sturz entsteht oft Sturzangst → Bewegungsvermeidung → Muskelabbau → Gleichgewichts-Verlust → erhöhtes Sturzrisiko. Ein Teufelskreis. Pflege-Aufgabe: sanfte graduelle Re-Mobilisation.",
      textB1:
        "Nach einem Sturz haben viele Patienten Sturzangst. Dann bewegen sie sich weniger. Dadurch werden die Muskeln schwächer und das Gleichgewicht schlechter. Das Sturzrisiko wird größer. Ein Teufelskreis.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-post-fall",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "szene",
        imageAlt:
          "Älterer Mann sitzt ängstlich im Bett, Gehhilfe unbenutzt daneben — Ausdruck von Post-Fall-Angst",
        bildhinweis:
          "Elderly man sitting in bed, anxious expression, untouched walking aid nearby, subtle emotional atmosphere, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Post-Fall-Syndrom",
          body: "Das **Post-Fall-Syndrom** (auch 'Post-Fall Anxiety') ist eine der häufigsten, aber am wenigsten erkannten Komplikationen nach einem Sturz. Der Mechanismus: (1) Sturz → akute Angst. (2) Vermeidungsverhalten: 'Ich bleibe lieber sitzen.' (3) Inaktivität → Muskelabbau (ca. 1-2 % Kraftverlust pro Tag bei Immobilität bei Älteren!). (4) Balance + Reaktionsfähigkeit nehmen ab. (5) Nächster Versuch: größere Unsicherheit, noch mehr Angst, **erhöhte Sturzgefahr**. Der Teufelskreis. Pflege-Intervention ist aktiv, nicht passiv: (a) **Angst validieren** — nicht abtun. (b) **Graduelle Exposition** — kleine, sichere Erfolge schaffen. (c) **Positive Verstärkung** — jeden Schritt würdigen. (d) **Ressourcen stärken** — was kann der Patient noch? (e) Physiotherapie einbinden. Merke: Aktivität IST Therapie.",
          glossarBegriffe: ["Post-Fall-Syndrom"],
        },
        contentB1: {
          title: "Post-Fall-Syndrom",
          body: "**Post-Fall-Syndrom** heißt: Nach einem Sturz kommt oft **Angst**. Das passiert: (1) Sturz → Angst. (2) Der Patient bewegt sich weniger: 'Besser ich bleibe sitzen.' (3) Muskeln werden schwächer (bei Älteren 1-2 % weniger Kraft pro Tag beim Liegen!). (4) Gleichgewicht wird schlechter. (5) Beim nächsten Versuch: noch unsicherer, noch mehr Angst, **höheres Sturzrisiko**. Ein Teufelskreis. Die Pflege muss aktiv sein: (a) **Angst ernst nehmen** — nicht 'ach, ist nicht schlimm'. (b) **Langsam wieder bewegen** — kleine, sichere Schritte. (c) **Erfolge zeigen** — 'Gut gemacht!' (d) **Was kann er noch?** — Stärken nutzen. (e) Physiotherapie dazuholen. Merke: **Sich bewegen ist Therapie**.",
          glossarBegriffe: ["Post-Fall-Syndrom"],
        },
      },
    },
    glossarBegriffe: ["Post-Fall-Syndrom"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: sturz-sofortmassnahmen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-sofortmassnahmen",
    themaId: "sturz-prophylaxe",
    titel: "Sofortmaßnahmen nach einem Sturz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau M. liegt auf dem Boden neben ihrem Bett. Sie wirkt verwirrt. Was tust du in den ersten 60 Sekunden?",
      antwort:
        "1. Ansprechen und Ansprechbarkeit prüfen. 2. Verletzungen beurteilen BEVOR bewegt wird (Bein-Verkürzung + Außenrotation = Hüftfraktur → nicht bewegen, Notarzt). 3. Wärme + Beruhigung. 4. Hilfe holen. 5. Aufhelfen nur nach Verletzungs-Ausschluss, zu zweit. 6. Reassessment + Dokumentation.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Erste Schritte bei einem Sturz: (1) Ruhe bewahren, (2) Ansprechbarkeit prüfen, (3) Nicht sofort aufheben — erst auf Verletzungen prüfen (Schmerzen, Deformitäten, Kopfverletzung), (4) Hilfe holen wenn nötig, (5) ABCDE wenn nicht ansprechbar.",
      textB1:
        "Erste Schritte bei einem Sturz: (1) Ruhe bewahren. (2) Prüfen: Ist der Patient wach? Antwortet er? (3) Nicht sofort aufheben — erst auf Verletzungen schauen (Schmerzen? Kopf?). (4) Hilfe holen. (5) ABCDE bei Bewusstlosigkeit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-sofortmassnahmen",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Sofortmaßnahmen nach einem Sturz",
          body: "Die ersten Minuten nach einem Sturz entscheiden über Sekundärverletzungen. Der strukturierte Ablauf: **Schritt 1 — Ansprechen und Ansprechbarkeit prüfen.** 'Frau M., hören Sie mich? Wissen Sie, wo Sie sind?' Bei Nicht-Reagieren: sofort ABCDE + Hilfe. **Schritt 2 — Verletzungen beurteilen BEVOR bewegt wird.** Sichtbar: Blutung? Kopfverletzung? Deformierte Extremität? Schmerzen (Frau M. fragen wenn ansprechbar)? **Hüftverletzung besonders bei Verkürzung + Außenrotation des Beins = NICHT bewegen, Notarzt.** **Schritt 3 — Wärme + Beruhigung.** Decke. Beruhigend sprechen. Patient auf dem Boden liegen lassen bis Sicherheit hergestellt ist. **Schritt 4 — Hilfe holen.** Pflegeteam, ggf. Arzt. **Schritt 5 — Aufhelfen nur wenn Verletzung ausgeschlossen** und idealerweise zu zweit. **Schritt 6 — Reassessment + Dokumentation** danach. Merke: **Nicht aufheben vor Prüfung.**",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Sofortmaßnahmen nach einem Sturz",
          body: "Die ersten Minuten sind wichtig. So geht es: **Schritt 1 — Ansprechen und schauen: Ist der Patient wach?** 'Frau M., hören Sie mich?' Wenn keine Antwort: ABCDE + Hilfe rufen. **Schritt 2 — Verletzungen suchen, BEVOR wir bewegen.** Blut? Kopfverletzung? Ist ein Bein verdreht oder kürzer? (Kann Hüftbruch sein — **nicht bewegen**, Notarzt). **Schritt 3 — Decke drüber, beruhigend reden.** Patient liegt erstmal. **Schritt 4 — Hilfe holen.** Kollegen, Arzt. **Schritt 5 — Aufhelfen nur wenn nichts gebrochen ist**, am besten zu zweit. **Schritt 6 — Nochmal prüfen und aufschreiben.** Merke: **Nicht sofort aufheben.**",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: sturzprotokoll-dokumentation (Bloom 6)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-dokumentation",
    themaId: "sturz-prophylaxe",
    titel: "Sturzprotokoll-Dokumentation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Schreibe das Sturzprotokoll für Frau M. (Sturz aus Baustein 10). Nutze mindestens 80 Wörter. Erwähne alle wichtigen Dimensionen.",
      antwort:
        "Pflicht-Elemente: (1) Zeit+Ort exakt, (2) Hergang (Patientenbericht + Pflegebeobachtung), (3) Umstände (Schuhe, Brille, Medikamente, letzte Mahlzeit, Inkontinenz-Notsituation), (4) Patientenzustand (Ansprechbarkeit, Orientierung, Vitalzeichen, Schmerzen), (5) Verletzungen, (6) Sofortmaßnahmen, (7) Nachsorge-Plan. Stil: nüchtern, sachlich, keine Wertungen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Sturzprotokoll enthält: Hergang (was genau passiert ist), Uhrzeit + Ort, Umstände (Schuhwerk, Medikamente, letzte Mahlzeit), Verletzungen, Sofortmaßnahmen, Reassessment-Plan. Strukturiert, nüchtern, vollständig.",
      textB1:
        "Ein Sturzprotokoll schreibt: Hergang (was passiert ist), Uhrzeit + Ort, Umstände (Schuhe? Medikamente? Wann war das letzte Essen?), Verletzungen, was wir getan haben, was wir als nächstes prüfen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-dokumentation",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Sturzprotokoll-Dokumentation",
          body: "Das **Sturzprotokoll** ist rechtlich Pflicht und klinisch wertvoll. Ein gutes Protokoll enthält: **(1) Zeit und Ort** — exakt (z.B. 02:15 Uhr, Zimmer 3, zwischen Bett und Toilette). **(2) Hergang** — Was ist passiert? (Selbstbericht Patient + Beobachtung Pflege + ggf. Zeugen). **(3) Vor-Umstände** — Schuhwerk, Brille an?, Medikamente der letzten 4 h, letzte Mahlzeit/Trinken, Inkontinenz-Notsituation? **(4) Patientenzustand** — Ansprechbarkeit, Orientierung, Vitalzeichen, Schmerzen. **(5) Verletzungen** — beobachtete + vom Patienten angegebene. **(6) Sofortmaßnahmen** — Was hat Pflege getan? Arzt informiert? Wann? **(7) Nachsorge-Plan** — Reassessment-Intervalle, besondere Beobachtung (insb. Kopfverletzung), Sturzpräventions-Plan angepasst? **Stil**: nüchtern, sachlich, keine Wertungen ('verwirrt' statt 'dement'). **Zweck**: medizinische Nachsorge + rechtliche Absicherung + Trend-Analyse. Merke: Auch verletzungsfreie Stürze + Near-Miss dokumentieren.",
          glossarBegriffe: ["Sturzprotokoll"],
        },
        contentB1: {
          title: "Sturzprotokoll-Dokumentation",
          body: "Das **Sturzprotokoll** ist Pflicht. Das muss drin sein: **(1) Zeit und Ort** — genau (z.B. 02:15 Uhr, Zimmer 3, zwischen Bett und Toilette). **(2) Was ist passiert?** — Frau M. erzählt + Pflege sieht + ggf. Zeugen. **(3) Die Umstände** — Schuhe an? Brille an? Welche Medikamente zuletzt? Wann gegessen/getrunken? Musste sie dringend zur Toilette? **(4) Patient** — Ist sie wach? Orientiert? Vitalzeichen? Schmerzen? **(5) Verletzungen** — was sehen wir, was sagt sie? **(6) Was hat Pflege gemacht?** Arzt angerufen? Wann? **(7) Nächste Schritte** — Wann nochmal prüfen? Plan anpassen? **Stil**: sachlich, keine Bewertung ('verwirrt' statt 'dement'). **Zweck**: medizinisch + rechtlich + Trends erkennen. Merke: Auch Stürze ohne Verletzung aufschreiben. Und Near-Miss auch.",
          glossarBegriffe: ["Sturzprotokoll"],
        },
      },
    },
    glossarBegriffe: ["Sturzprotokoll"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: hueftprotektoren (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-hueftprotektoren",
    themaId: "sturz-prophylaxe",
    titel: "Hüftprotektoren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was, denkst du, machen 'Hüftprotektoren' — und was können sie NICHT?",
      antwort:
        "Hüftprotektoren sind spezielle Unterhosen mit Polstern an den seitlichen Hüften. Sie verhindern Hüftfrakturen bei seitlichen Stürzen (Sekundärprophylaxe), aber NICHT den Sturz selbst. Indikation nur bei Hochrisiko (Sturzrisiko + Osteoporose + oft Demenz). Compliance ist in der Praxis oft schlecht.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hüftprotektoren sind weiche oder harte Polster in spezieller Unterwäsche, die bei Stürzen auf die Hüfte den Aufprall abfedern. Sie verhindern Hüftfrakturen, aber keine Stürze. Compliance ist oft schlecht.",
      textB1:
        "Hüftprotektoren sind Polster in spezieller Unterwäsche an der Seite der Hüfte. Wenn jemand auf die Hüfte fällt, federn sie ab. Sie verhindern Knochenbrüche an der Hüfte, aber nicht den Sturz selbst. Viele tragen sie ungern.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-hueftprotektoren",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Hüftprotektoren",
          body: "**Hüftprotektoren** sind spezielle Unterhosen mit eingearbeiteten Polstern an den seitlichen Hüften. Bei einem seitlichen Sturz wird die Aufprallenergie absorbiert — das senkt das Risiko einer Hüftfraktur deutlich. **Indikation**: Hochrisiko-Patienten mit gleichzeitig (1) hoher Sturzgefahr, (2) Osteoporose und (3) Immobilitätsrisiko (z.B. Demenz-Patienten im Pflegeheim). **Nicht empfohlen** für alle — Überversorgung bringt keinen Nutzen. **Problem in der Praxis**: Compliance. Viele tragen sie nicht konstant (Inkontinenz-Versorgung schwierig, Komfort-Empfindung). Die Wirksamkeit hängt davon ab, dass sie im Sturzmoment getragen werden. **Wichtig**: Hüftprotektoren **verhindern Frakturen, nicht Stürze** — sie sind **Sekundärprophylaxe**. Die primäre Sturzprävention muss separat erfolgen.",
          glossarBegriffe: ["Hüftprotektor"],
        },
        contentB1: {
          title: "Hüftprotektoren",
          body: "**Hüftprotektoren** sind spezielle Unterhosen mit **Polstern an der Seite**. Fällt jemand auf die Hüfte, federn die Polster ab — das verhindert oft einen Knochenbruch. **Für wen?** Hochrisiko-Patienten mit: (1) großem Sturzrisiko, (2) Osteoporose und (3) z.B. Demenz. **Nicht für alle** — wenn das Risiko klein ist, bringt es nichts. **Problem**: Viele tragen sie nicht durchgehend (Inkontinenz, Komfort). Sie helfen nur, wenn sie **beim Sturz** getragen werden. **Wichtig**: Sie **verhindern Knochenbrüche, nicht Stürze**. Sturz-Prophylaxe muss extra passieren.",
          glossarBegriffe: ["Hüftprotektor"],
        },
      },
    },
    glossarBegriffe: ["Hüftprotektor"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: interprofessionelle-zusammenarbeit (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "sturz-prophylaxe-team",
    themaId: "sturz-prophylaxe",
    titel: "Interprofessionelle Zusammenarbeit",
    stufe1: {
      typ: "denkfrage",
      frage: "Pflege soll Sturzprophylaxe umsetzen. Wen brauchst du noch — und wofür?",
      antwort:
        "Teamarbeit: Pflege (Assessment, Umgebung, Mobilisation, Koordination), Arzt (Medikamenten-Review, Grunderkrankungen), Physiotherapie (Kraft-/Balance-Training — früh dazu!), Augenarzt (Sehkorrektur), Apotheker (Interaktionen), Ergotherapie (Wohnraum). Multifaktorielle Programme senken Sturzrate um 24 % (Cochrane 2023).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sturzprophylaxe ist Teamaufgabe: Pflege (Assessment, Umgebung, Mobilisation), Arzt (Medikamentenreview, Grunderkrankungen), Physiotherapie (Training), Augenarzt (Sehkorrektur), Apotheker (Medikamenten-Interaktionen).",
      textB1:
        "Sturzprophylaxe ist Teamarbeit: Pflege (schauen, Umgebung ändern, begleiten), Arzt (Medikamente prüfen, Krankheiten behandeln), Physiotherapie (Training), Augenarzt (Brille), Apotheker (Medikamenten-Check).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-sturz-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "V.1",
        quellen: ["DNQP 2022", "Cochrane Review 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-sturz-team",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Interprofessionelle Zusammenarbeit",
          body: "Sturzprophylaxe kann Pflege **allein nicht leisten** — das zeigt die Evidenz. Der **interprofessionelle Ansatz** ist Standard: **Pflege** (zentrale Rolle): Assessment, Umgebungsanpassung, Mobilisations-Begleitung, Dokumentation, Koordination des Teams. **Arzt**: Medikamenten-Review (kritisch), Behandlung von Grunderkrankungen (Herzinsuffizienz, Diabetes, Parkinson, Delir), Verordnungen für Physiotherapie und Hilfsmittel. **Physiotherapie**: Individuelles Kraft-/Balance-Training, Gangschule, Hilfsmittel-Anpassung. **Augenarzt**: Sehkraft-Kontrolle (kritisch — Gleitsichtbrillen sind Sturz-Risiko!). **Apotheker/Pharmazeut**: Medikamenten-Interaktions-Check, Vorschlag von Alternativen. **Sozialdienst/Ergotherapie**: Wohnraum-Anpassung zuhause. Pflege **koordiniert** das Team und ist **Informations-Drehscheibe**. Ohne diese Vernetzung bleibt Sturzprophylaxe Stückwerk.",
          glossarBegriffe: ["Interprofessionell"],
        },
        contentB1: {
          title: "Interprofessionelle Zusammenarbeit",
          body: "Sturzprophylaxe braucht **ein Team** — Pflege alleine reicht nicht. **Pflege** (wichtigste Rolle): Schauen, Umgebung ändern, bei Bewegung helfen, aufschreiben, Team zusammenhalten. **Arzt**: Medikamente prüfen, Krankheiten behandeln (Herz, Diabetes, Parkinson), Rezepte für Physiotherapie. **Physiotherapie**: Extra-Training (Kraft, Balance), Gehen üben, Hilfsmittel anpassen. **Augenarzt**: Brille und Sehkraft (Gleitsichtbrillen sind riskant!). **Apotheker**: Medikamente auf gefährliche Mischungen prüfen. **Ergotherapie**: Wohnung zuhause anpassen. Pflege **verbindet** das Team.",
          glossarBegriffe: ["Interprofessionell"],
        },
      },
    },
    glossarBegriffe: ["Interprofessionell"],
    karteikarten: [],
  },
];
