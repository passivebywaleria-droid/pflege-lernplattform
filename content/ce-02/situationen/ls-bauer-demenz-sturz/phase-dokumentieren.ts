// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 6: Dokumentieren
// Steps: 5 (4 Kern + 1 Optional) · Bloom: B5-B6
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-dokumentieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-bauer-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren",
  titelB1: "Aufschreiben",
  kontext:
    "Das Sturzprotokoll von der Nacht liegt noch unvollständig in der Akte. Die Nachtpflegerin hat nur Stichworte notiert. Jetzt bist du dran: Du ergänzt das Protokoll mit dem, was du heute beobachtet und getan hast, und schreibst den Pflegebericht für die Übergabe an den Nachtdienst. Dokumentation ist keine Bürokratie. Sie ist das Gedächtnis des Teams. Wer morgen früh kommt, weiß nur, was du heute Abend aufgeschrieben hast.",
  kontextB1:
    "Das Sturzprotokoll ist nicht fertig. Die Nachtschwester hat nur kurze Stichpunkte aufgeschrieben. Jetzt bist du dran. Du schreibst das Protokoll fertig und du schreibst den Pflegebericht für den Nachtdienst. Dokumentation ist das Gedächtnis des Teams. Was du nicht aufschreibst, weiß morgen niemand.",
  kernSteps: [
    // Step 6.1 — Freetext: Sturzprotokoll ausfüllen (HAUPT-FREITEXT)
    {
      stepId: "ce02-bauer-dok-01-sturzprotokoll-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "§ 4 PflBG",
        "SGB XI § 115",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-dok-sturzprotokoll",
      tag: "pflege",
      contentC1: {
        title: "Sturzprotokoll vervollständigen",
        body: "Das Sturzprotokoll für Herrn Friedrich Bauer ist unvollständig. Du ergänzt es jetzt. Dein Text soll enthalten: Datum und Uhrzeit des Sturzes, Sturzort, Hergang soweit bekannt, Bewusstseinslage beim Auffinden, Verletzungscheck (Ergebnis), Vitalzeichen, eingeleitete Maßnahmen heute Morgen, informierte Personen (Arzt? Tochter Ingrid?), Ursachenhypothese. Außerdem: Was hat das Frühschicht-Team heute ergänzt?",
        glossarBegriffe: [
          "Sturzprotokoll",
          "Ursachenhypothese",
          "Verletzungscheck",
          "Dokumentationspflicht",
        ],
      },
      contentB1: {
        title: "Sturzprotokoll schreiben",
        body: "Schreibe das Sturzprotokoll für Herrn Bauer. Dein Text soll enthalten: Wann ist er gestürzt? Wo? Was ist passiert? War er wach? Hat er Verletzungen? Was haben wir heute gemacht? Wen haben wir informiert? Warum ist er gestürzt (Vermutung)?",
        glossarBegriffe: [
          "Sturzprotokoll",
          "Verletzungscheck",
          "Ursache",
        ],
      },
      question: {
        fragetext:
          "Schreibe das vollständige Sturzprotokoll für Herrn Friedrich Bauer (ca. 120–200 Wörter). Nutze alle Informationen aus dem heutigen Tag.",
        musterantwort:
          "Sturzdatum/-uhrzeit: 23.04.2026, ca. 02:30 Uhr. Sturzort: Flur vor Zimmer 8, Station 4b. Erster Sturz in der Einrichtung. Hergang: Herr Bauer verließ das Zimmer eigenständig, wurde sitzend am Boden vorgefunden. Bewusstsein: ansprechbar, grob orientiert zur Person (erkennt Tochter), desorientiert zu Ort und Zeit. Verletzungscheck: keine Blutung, keine sichtbare Deformität, kein Hämatom. Schmerz: Knie links bei Bewegung (BESD 2/10), sonst kein Schmerz geäußert. Vitalzeichen (07:30 Uhr): RR 128/78, HF 74/min, SpO₂ 96%. Maßnahmen Frühschicht: Assessment vollständig, Kniebeweglichkeit geprüft, Körperpflege mit Basaler Stimulation, passive Kniebewegung 2×, Mundpflege, Trinkprotokoll begonnen. Niedrigbett und Nachtlicht für Nachtdienst angeordnet. Informierte Personen: Arzt informiert (Mirtazapin-Dosis zu prüfen), Tochter Ingrid Bauer telefonisch informiert (15:30 Uhr), Gespräch geführt. Ursachenhypothese: Desorientierung (FAST 6a) + nächtlicher Harndrang + sedierende Wirkung von Mirtazapin.",
        bewertungskriterien: [
          "Datum und Uhrzeit des Sturzes genannt",
          "Sturzort beschrieben",
          "Bewusstseinslage beim Auffinden dokumentiert",
          "Verletzungscheck dokumentiert",
          "Vitalzeichen genannt",
          "Maßnahmen des Frühdiensts beschrieben",
          "Informierte Personen genannt",
          "Ursachenhypothese formuliert",
          "Objektive Sprache (keine Wertungen wie 'schwierig')",
        ],
        satzanfaengeB1: [
          "Datum: ... Uhrzeit: ... Ort: ...",
          "Bewusstsein beim Auffinden: ...",
          "Verletzungen: ...",
          "Wir haben heute gemacht: ...",
          "Informiert wurden: ...",
          "Warum ist er gestürzt (Vermutung): ...",
        ],
      },
    },

    // Step 6.2 — ErrorSpot: Fehler im Pflegebericht finden
    {
      stepId: "ce02-bauer-dok-02-pflegebericht-formulierung",
      phase: 6,
      stepType: "errorspot",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022", "§ 4 PflBG"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-bauer-dok-pflegebericht-qualitaet",
      tag: "pflege",
      contentC1: {
        title: "Fehler im Pflegebericht finden",
        body: "Ein vorgefertigter Pflegebericht enthält 4 typische Fehler: Wertung statt Beobachtung, fehlende Zeitangabe, fehlende Konsequenz, unklare passive Formulierung. Finde und markiere alle 4 Fehler.",
        glossarBegriffe: ["Objektivität", "Dokumentation", "Pflegebericht"],
      },
      contentB1: {
        title: "4 Fehler im Pflegebericht finden",
        body: "Dieser Pflegebericht hat 4 Fehler. Finde und markiere sie alle.",
        glossarBegriffe: ["Pflegebericht", "Fehler", "Dokumentation"],
      },
      question: {
        fragetext:
          "Markiere alle 4 Fehler in diesem Pflegebericht.",
        errorspot: {
          instruction:
            "Klicke auf alle Textstellen die fehlerhaft sind. Es gibt genau 4 Fehler.",
          text:
            "Frühschicht 23.04.2026 — Herr Bauer war heute wieder schwierig bei der Körperpflege. Morgenroutine durchgeführt. Trinkmenge heute gut. Knie beobachten. Inkontinenzversorgung wurde gewechselt.",
          errors: [
            {
              start: 37,
              end: 68,
              correction:
                "Herr Bauer zeigte Abwehrverhalten bei der Körperpflege (2× Schlagen nach Pflegekraft), nach Deeskalation Kooperation möglich.",
              explanation:
                "Wertung statt Beobachtung. 'Wieder schwierig' ist subjektiv und abwertend. Sachlich beschreiben: Was genau war das Verhalten? Wie hat das Team reagiert?",
              explanationB1:
                "'schwierig' ist eine Wertung — das ist nicht erlaubt in der Dokumentation. Schreibe was passiert ist: 'Er hat 2× nach der Pflegekraft geschlagen.'",
            },
            {
              start: 120,
              end: 140,
              correction:
                "Trinkmenge 07:00–16:00 Uhr: ca. 1000 ml (200 ml Frühstück, 400 ml Mittag, 400 ml Nachmittag).",
              explanation:
                "Fehlende Zeitangabe und fehlende konkrete Menge. 'Gut' ist kein messbarer Begriff. Dokumentation braucht Zahlen und Zeiträume.",
              explanationB1:
                "'Heute gut' bedeutet nichts. Schreibe: 'Trinkmenge: 1000 ml von 07:00 bis 16:00 Uhr.'",
            },
            {
              start: 141,
              end: 156,
              correction:
                "Schmerz-Assessment Knie mit BESD vor jeder Bewegungsübung, passive Kniebewegung 2× durchgeführt.",
              explanation:
                "Fehlende Konsequenz. 'Knie beobachten' ist keine Maßnahme — es fehlt die konkrete Handlungsanweisung für das Folge-Team.",
              explanationB1:
                "'Knie beobachten' ist zu wenig. Schreibe was genau gemacht wurde und was das Folge-Team tun soll.",
            },
            {
              start: 157,
              end: 196,
              correction:
                "Inkontinenzversorgung 09:15 Uhr gewechselt. Haut im Intimbereich gerötet (Grad 1), Hautschutzpaste aufgetragen.",
              explanation:
                "Unklare passive Formulierung ohne Zeit, Beobachtung und Konsequenz. 'Wurde gewechselt' — von wem, wann? Und wie ist die Haut?",
              explanationB1:
                "'Wurde gewechselt' — wann? Von wem? Wie sah die Haut aus? Was wurde dagegen getan? Das alles gehört in die Dokumentation.",
            },
          ],
        },
      },
    },

    // Step 6.3 — TableFillIn: Miktionsprotokoll
    {
      stepId: "ce02-bauer-dok-03-miktionsprotokoll",
      phase: 6,
      stepType: "tablefillin",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Förderung Harnkontinenz 2014"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-dok-miktionsprotokoll",
      tag: "krankheitslehre",
      contentC1: {
        title: "Miktionsprotokoll ergänzen",
        body: "Fülle das Miktionsprotokoll für Herrn Bauer aus. Die Frühschicht hat einige Einträge bereits gemacht — ergänze die fehlenden Felder basierend auf dem heutigen Fallwissen.",
        glossarBegriffe: ["Miktionsprotokoll", "Miktion", "Inkontinenz", "Flüssigkeitsbilanz"],
      },
      contentB1: {
        title: "Miktionsprotokoll ausfüllen",
        body: "Fülle die leeren Felder im Miktionsprotokoll aus.",
        glossarBegriffe: ["Miktionsprotokoll", "Miktion", "Inkontinenz"],
      },
      question: {
        fragetext:
          "Ergänze die fehlenden Felder im Miktionsprotokoll. Nutze dein Wissen aus dem heutigen Fall.",
        tablefillin: {
          instruction:
            "Fülle die markierten Felder (?) aus. Wähle aus den Optionen oder trage ein.",
          headers: [
            "Zeit",
            "Trinkmenge (ml)",
            "Miktion: ja/nein",
            "Inkontinenz: ja/nein",
            "Besonderheiten",
          ],
          rows: [
            [
              { value: "07:00", isBlank: false },
              { value: "—", isBlank: false },
              { value: "ja", isBlank: false },
              { value: "nein", isBlank: false },
              { value: "Toilettengang vor Morgenpflege, kooperativ", isBlank: false },
            ],
            [
              { value: "08:30", isBlank: false },
              { value: "200 ml Tee", isBlank: false },
              { value: "?", isBlank: true, options: ["ja", "nein", "unklar"] },
              { value: "?", isBlank: true, options: ["ja", "nein"] },
              { value: "Tee zunächst abgelehnt, dann mit Malzbier getauscht", isBlank: false },
            ],
            [
              { value: "10:30", isBlank: false },
              { value: "?", isBlank: true, options: ["0 ml", "200 ml", "400 ml", "600 ml"] },
              { value: "ja", isBlank: false },
              { value: "nein", isBlank: false },
              { value: "?", isBlank: true, options: ["unauffällig", "Rötung Intimbereich, Hautschutzpaste", "Schmerzen beim Wasserlassen", "Inkontinenzversorgung nass"] },
            ],
            [
              { value: "14:00", isBlank: false },
              { value: "400 ml Malzbier", isBlank: false },
              { value: "?", isBlank: true, options: ["ja", "nein", "unklar"] },
              { value: "ja", isBlank: false },
              { value: "?", isBlank: true, options: ["Inkontinenzversorgung gewechselt, Haut gerötet (Grad 1)", "unauffällig", "verweigert Versorgungswechsel"] },
            ],
          ],
        },
      },
    },

    // Step 6.4 — Summary: Session-Zusammenfassung
    {
      stepId: "ce02-bauer-dok-04-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "Feil N. / de Klerk-Rubin V. (2012)",
        "Bienstein C./Fröhlich A. (2021)",
        "DNQP Sturzprophylaxe 2022",
        "Kitwood T. (1997)",
      ],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-bauer-dok-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Das hast du heute mit Herrn Bauer gelernt",
        body: "Zusammenfassung der Lernsituation: Herr Friedrich Bauer, 82, Alzheimer-Demenz, gerontopsychiatrische Station, Sturzereignis 02:30 Uhr.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was du heute gelernt hast",
        body: "Zusammenfassung: Herr Bauer, Demenz, Sturz in der Nacht — was du heute gemacht und gelernt hast.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Dein Lerngewinn aus dem heutigen Tag.",
        summary: {
          reflexionRueckbezug:
            "Du bist heute Morgen allein zu Herrn Bauer gegangen — mit einem unvollständigen Sturzprotokoll und einem aufgewühlten Patienten. Am Ende des Tages hast du das Assessment vervollständigt, Körperpflege mit Würde durchgeführt, ein Angehörigengespräch geführt und die Dokumentation gesichert. Das ist Pflege.",
          kernaussagen: [
            "Sturzprotokoll: 9 Pflichtfelder — Uhrzeit, Ort, Hergang, Bewusstsein, Verletzungscheck, Vitalzeichen, Maßnahmen, informierte Personen, Ursachenhypothese. Near-Miss dokumentieren gilt auch dann wenn kein Schaden entstand.",
            "Demenz und Validation: Korrigieren verstärkt Angst. Validieren — 'Du hast heute viel zu tun' — herstellt Kontakt. Das ist der Unterschied zwischen Eskalation und Kooperation.",
            "Basale Stimulation: Beruhigende Waschung in Haarwuchsrichtung, von peripher nach zentral, mit Ankündigung und Pausen — Körperpflege als würdevoller Kontakt, nicht als Prozedur.",
            "Kontraktur und Bewegung: Passive Kniebewegung täglich — auch wenn Abwehr kommt, auch wenn es schwierig ist. Kontraktur entsteht schleichend und ist schwer zu korrigieren.",
            "Angehörige in der Demenzpflege: Schuldgefühle sind normal. Angehörige sind Experten. Das Gespräch mit Ingrid ist pflegerische Aufgabe — nicht Zusatzleistung.",
          ],
        },
      },
    },
  ],

  optionaleSteps: [
    // Step 6.5 — Text: Rechtliche Dokumentationspflicht
    {
      stepId: "ce02-bauer-dok-05-rechtliche-dokumentationspflicht",
      phase: 6,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 4 PflBG", "SGB XI § 115"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-dok-recht",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "Warum muss das Sturzprotokoll vollständig sein?",
        body: "Rechtlicher Rahmen der Dokumentationspflicht:\n\n§ 4 PflBG: Durchführung des Pflegeprozesses und seine Dokumentation gehören zu den vorbehaltenen Tätigkeiten der Pflegefachkraft — das bedeutet: Diese Aufgabe darf nicht delegiert werden, und sie muss vollständig erfüllt werden.\n\nSGB XI § 115: Qualitätssicherung in stationären Einrichtungen verlangt nachvollziehbare Pflegedokumentation als Grundlage für Prüfungen.\n\nHaftungsfragen: Ein unvollständiges Sturzprotokoll kann im Schadensfall (z. B. Folgesturz mit Verletzung) als Organisations- oder Überwachungsverschulden gewertet werden.\n\nFazit: Das Sturzprotokoll ist nicht Bürokratie. Es ist Schutz — für Herrn Bauer, für das Team, für die Einrichtung.",
        glossarBegriffe: [
          "§ 4 PflBG",
          "SGB XI § 115",
          "Haftung",
          "Dokumentationspflicht",
        ],
      },
      contentB1: {
        title: "Warum muss man alles aufschreiben?",
        body: "Das Gesetz sagt:\n\n§ 4 PflBG: Die Dokumentation gehört zur Arbeit der Pflegefachkraft. Das darf nicht jemand anderes machen. Und es muss vollständig sein.\n\nWenn etwas nicht dokumentiert ist — dann gilt es vor Gericht als nicht passiert.\n\nBeispiel: Herr Bauer stürzt wieder. Der Anwalt fragt: 'Was haben Sie nach dem ersten Sturz getan?' Wenn das Protokoll leer ist, gibt es keine Antwort.\n\nDokumentation schützt Herrn Bauer, das Team und die Einrichtung.",
        glossarBegriffe: ["§ 4 PflBG", "Haftung", "Dokumentation"],
      },
    },
  ],
  geschaetzteDauer: 20,
};
