// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 6: Dokumentieren
// Steps: 6 (4 Kern + 1 Inline-Wissen + 1 Optional) · Bloom: B2-B6
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-dokumentieren.md
// Pipeline v9 — 2026-04-23
// Inline-Wissen: 1 Baustein (ganzkörperpflege Dokumentation bei Demenz)

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
    // Inline-Wissen: Sturzprotokoll \u2014 was muss drinstehen?
    {
      stepId: "ce02-bauer-dok-00b-sturzprotokoll-begriffe",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022 \u2014 Sturzprophylaxe", "Paragraph 4 PflBG"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-dok-00b-sturzprotokoll-begriffe",
      tag: "pflege",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["sturz-prophylaxe"],
      transition: "Begriffe klar? Dann schreib das Sturzprotokoll.",
      contentC1: {
        title: "Sturzprotokoll \u2014 was muss drinstehen?",
        body: "",
        glossarBegriffe: ["Ursachenhypothese", "Verletzungscheck", "Dokumentationspflicht", "Ursache"],
      },
      contentB1: {
        title: "Sturzprotokoll \u2014 was schreibst du rein?",
        body: "",
        glossarBegriffe: ["Ursachenhypothese", "Verletzungscheck", "Dokumentationspflicht"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-sturzprotokoll",
        storyAufhaenger: "Vier Begriffe für ein vollständiges Sturzprotokoll.",
        storyAufhaengerB1: "Vier wichtige Begriffe für das Sturzprotokoll.",
        kerntext: "**Verletzungscheck** = Systematische Inspektion: Blutungen, Deformitäten, Haematome, Schwellungen. Kopf bis Fuss, Seitenvergleich. Bei Demenz: BESD beobachten.\n\n**Ursachenhypothese** = Begründete Vermutung ueber Sturzursache: \"Desorientierung + Harndrang + Mirtazapin.\" Keine Diagnose, aber lenkt Prophylaxe.\n\n**Ursache** = Auslösender Faktor: intrinsisch (Demenz, Medikamente) vs. extrinsisch (Umgebung).\n\n**Dokumentationspflicht** (Paragraph 4 PflBG): Pflegefachkraft MUSS den Pflegeprozess dokumentieren.",
        kerntextB1: "**Verletzungscheck** = Körper anschauen: Blutungen? Beulen? Kopf bis Fuss.\n\n**Ursachenhypothese** = Warum ist er gestürzt? Deine begründete Vermutung.\n\n**Ursache** = Was hat den Sturz ausgelöst?\n\n**Dokumentationspflicht** = Du MUSST alles aufschreiben (Gesetz).",
        faustregel: "Sturzprotokoll: Verletzungscheck, Ursachenhypothese (WARUM gestürzt), Dokumentationspflicht.",
        faustregelB1: "Sturzprotokoll: Körper anschauen, Vermutung aufschreiben warum, alles dokumentieren.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Was ist eine Ursachenhypothese im Sturzprotokoll?",
          rueckseite: "Begründete Vermutung ueber Sturzursache. Lenkt Prophylaxe. Beispiel: Desorientierung + Mirtazapin + Harndrang. Dokumentationspflicht: Paragraph 4 PflBG.",
        },
      },
    },

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
          "Sturzdatum/-uhrzeit: 23.04.2026, ca. 02:30 Uhr. Sturzort: Flur vor Zimmer 8, Station 4b. Erster Sturz in der Einrichtung. Hergang: Herr Bauer verließ das Zimmer eigenständig, wurde sitzend am Boden vorgefunden. Bewusstsein: ansprechbar, grob orientiert zur Person (erkennt Tochter), desorientiert zu Ort und Zeit. Verletzungscheck: keine Blutung, keine sichtbare Deformität, kein Hämatom. Schmerz: rechtes Knie bei Bewegung (BESD 2/10, passt zum Streckdefizit 20° rechts), sonst kein Schmerz geäußert. Vitalzeichen (07:30 Uhr): RR 128/78, HF 74/min, SpO₂ 96%. Maßnahmen Frühschicht: Assessment vollständig, Kniebeweglichkeit geprüft, Körperpflege mit Basaler Stimulation, passive Kniebewegung 2×, Mundpflege, Trinkprotokoll begonnen. Niedrigbett und Nachtlicht für Nachtdienst angeordnet. Informierte Personen: Arzt informiert (Mirtazapin-Dosis zu prüfen), Tochter Ingrid Bauer telefonisch informiert (15:30 Uhr), Gespräch geführt. Ursachenhypothese: Desorientierung (FAST 6a) + nächtlicher Harndrang + sedierende Wirkung von Mirtazapin.",
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

    // Step 6.1b — Inline-Wissen: Dokumentation bei Demenz — was anders ist
    // Nach dem Sturzprotokoll: Der Schueler schreibt jetzt den Pflegebericht.
    // Bei Demenz gibt es Besonderheiten in der Dokumentation die er kennen muss
    // bevor er Fehler im ErrorSpot-Step finden soll.
    {
      stepId: "ce02-bauer-dok-01b-dokumentation-demenz",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2018 — Beziehungsgestaltung bei Demenz",
        "§ 4 PflBG",
        "DNQP 2022 — Sturzprophylaxe, Kriterium E6 (Dokumentation)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-dok-dokumentation-demenz",
      tag: "pflege",
      themaPrimaer: "ganzkörperpflege",
      themenSekundaer: ["sturz-prophylaxe", "basale-stimulation"],
      transition: "Dokumentation bei Demenz im Kopf? Gut. Jetzt: Finde die Fehler im Pflegebericht.",
      contentC1: {
        title: "Dokumentation bei Demenz — 4 Besonderheiten",
        body: "",
        glossarBegriffe: ["Pflegebericht", "Abwehrverhalten", "BESD-Dokumentation", "Dokumentation", "Fehler", "Objektivität", ],
      },
      contentB1: {
        title: "Was ist beim Aufschreiben bei Demenz anders?",
        body: "",
        glossarBegriffe: ["Pflegebericht", "Abwehrverhalten"],
      },
      inlineWissen: {
        bausteinRef: "ganzkörperpflege-dokumentation-demenz",
        storyAufhaenger:
          "Du hast gerade das Sturzprotokoll geschrieben. Jetzt kommt der Pflegebericht für die Übergabe. Bei Herrn Bauer hat sich heute viel ereignet: Abwehr bei der Pflege, Deeskalation, Kniebewegung, Trinkmenge. Wie schreibst du das auf — ohne Wertung, aber mit den richtigen Details?",
        storyAufhaengerB1:
          "Du hast das Sturzprotokoll geschrieben. Jetzt kommt der Pflegebericht. Herr Bauer hat sich heute gewehrt, du hast ihn beruhigt, seine Knie bewegt, er hat getrunken. Wie schreibst du das alles auf?",
        kerntext:
          "Bei Menschen mit Demenz hat die Dokumentation **4 Besonderheiten** (DNQP 2018, § 4 PflBG):\n\n**1. Verhalten beschreiben, nicht bewerten**\n\nFalsch: \"Patient war heute wieder schwierig.\"\nRichtig: \"Patient zeigte Abwehrverhalten bei Gesichtspflege (2x Schlagen nach Pflegekraft), nach 2-minütiger Pause und Handkontakt Kooperation möglich.\"\n\nWarum? \"Schwierig\" ist eine Wertung — sie hilft dem Nachtdienst nicht. **Konkretes Verhalten + Strategie + Ergebnis** hilft.\n\n**2. BESD-Werte dokumentieren**\n\nBei jedem Pflegekontakt: BESD in Ruhe + BESD bei Bewegung. Das ist die Schmerzakte bei Demenz.\n\n**3. Ressourcen dokumentieren**\n\nWas hat funktioniert? \"Beruhigung durch Freddy Quinn möglich\" — das hilft dem Folge-Team.\n\n**4. Maßnahmen-Umsetzung konkret**\n\nNicht: \"Knie beobachten.\" Sondern: \"Passive Kniebewegung 2x durchgeführt (rechts bis 20 Grad Streckdefizit, links bis 10 Grad), BESD während Bewegung 3/10.\"",
        kerntextB1:
          "Bei Demenz sind beim Aufschreiben **4 Dinge** besonders wichtig:\n\n**1. Nicht bewerten — beschreiben**\n\nFalsch: \"Er war schwierig.\"\nRichtig: \"Er hat 2x nach der Pflegekraft geschlagen. Nach Pause und Handkontakt hat er mitgemacht.\"\n\n**2. Schmerz-Punkte aufschreiben**\n\nBESD in Ruhe und bei Bewegung — immer beides.\n\n**3. Was funktioniert hat aufschreiben**\n\n\"Musik (Freddy Quinn) hat beruhigt\" — das hilft den anderen Pflegekräften.\n\n**4. Genau sein**\n\nNicht: \"Knie beobachten.\"\nSondern: \"Knie 2x passiv bewegt, rechts bis 20 Grad, BESD 3.\"",
        faustregel:
          "Bei Demenz: Verhalten beschreiben statt bewerten. Was gewirkt hat dokumentieren. Der Nachtdienst braucht Strategien, nicht Klagen.",
        faustregelB1:
          "Nicht schreiben was er \"ist\" (schwierig). Schreiben was er \"tut\" (schlägt 2x) und was geholfen hat (Musik, Pause).",
        spektrum: [
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Orientiert — NRS direkt dokumentierbar",
            kurzbeschreibung:
              "Bei Frau M. ist die Dokumentation einfacher: Sie kann selbst berichten (\"Meine Hüfte tut weh, eine Acht\"). NRS-Wert, Wortwahl der Patientin, Zeitpunkt — direkt in den Bericht.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Aphasie — Kommunikation eingeschränkt",
            kurzbeschreibung:
              "Bei Aphasie: Dokumentation muss Kommunikationsweg beschreiben (\"Patient zeigt mit Finger auf linke Hand, Mimik schmerzverzerrt, nickt bei Frage nach Schmerz\"). Beobachtung ist hier Pflicht.",
          },
          {
            patientName: "Herr Nguyen",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Sprachbarriere + Dolmetscher",
            kurzbeschreibung:
              "Bei Sprachbarriere: Dokumentation muss festhalten wer gedolmetscht hat, was verstanden wurde, was unklar blieb. \"Stoma-Versorgung erklärt via Sohn (Dolmetscher), Rueckfrage auf Tuerkisch verstanden\" — Nachvollziehbarkeit.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Herr Bauer (Demenz) hat bei der Morgenpflege 2x nach dir geschlagen. Du hast ihn beruhigt und die Pflege durchgeführt. Wie dokumentierst du das?",
          rueckseite:
            "**Verhalten beschreiben, nicht bewerten**: \"Abwehrverhalten bei Gesichtspflege (2x Schlagen), nach 2 Min Pause + Handkontakt + Musik (Freddy Quinn) Kooperation möglich.\" PLUS: BESD-Wert in Ruhe + bei Bewegung. PLUS: Ressource (Musik, Handkontakt). PLUS: Maßnahmen-Ergebnis (passive Kniebewegung 2x, rechts 20 Grad). **NICHT**: \"Patient war schwierig\" — das ist Wertung, nicht Beobachtung. (DNQP 2018, § 4 PflBG) Faustregel: **Verhalten + Strategie + Ergebnis. Keine Wertungen.**",
        },
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
      lernziel: "ce02-bauer-dok-pflegebericht-qualität",
      tag: "pflege",
      contentC1: {
        title: "Fehler im Pflegebericht finden",
        body: "Ein vorgefertigter Pflegebericht enthält 4 typische Fehler: Wertung statt Beobachtung, fehlende Zeitangabe, fehlende Konsequnz, unklare passive Formulierung. Finde und markiere alle 4 Fehler.",
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
                "Fehlende Konsequnz. 'Knie beobachten' ist keine Maßnahme — es fehlt die konkrete Handlungsanweisung für das Folge-Team.",
              explanationB1:
                "'Knie beobachten' ist zu wenig. Schreibe was genau gemacht wurde und was das Folge-Team tun soll.",
            },
            {
              start: 157,
              end: 196,
              correction:
                "Inkontinenzversorgung 09:15 Uhr gewechselt. Haut im Intimbereich gerötet (Grad 1), Hautschutzpaste aufgetragen.",
              explanation:
                "Unklare passive Formulierung ohne Zeit, Beobachtung und Konsequnz. 'Wurde gewechselt' — von wem, wann? Und wie ist die Haut?",
              explanationB1:
                "'Wurde gewechselt' — wann? Von wem? Wie sah die Haut aus? Was wurde dagegen getan? Das alles gehört in die Dokumentation.",
            },
          ],
        },
      },
    },

    // Inline-Wissen: Miktion und Inkontinenz \u2014 Grundbegriffe
    {
      stepId: "ce02-bauer-dok-02b-miktionsprotokoll-begriffe",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2014 \u2014 Förderung Harnkontinenz"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-dok-02b-miktionsprotokoll-begriffe",
      tag: "krankheitslehre",
      themaPrimaer: "harnausscheidung",
      themenSekundaer: ["ganzkörperpflege"],
      transition: "Begriffe klar? Fuell das Protokoll aus.",
      contentC1: {
        title: "Miktion und Inkontinenz \u2014 Grundbegriffe",
        body: "",
        glossarBegriffe: ["Miktion", "Inkontinenz"],
      },
      contentB1: {
        title: "Was ist Miktion? Was ist Inkontinenz?",
        body: "",
        glossarBegriffe: ["Miktion", "Inkontinenz"],
      },
      inlineWissen: {
        bausteinRef: "harnausscheidung-miktion",
        storyAufhaenger: "Zwei Grundbegriffe für das Miktionsprotokoll.",
        storyAufhaengerB1: "Zwei Woerter für das Protokoll.",
        kerntext: "**Miktion** = Wasserlassen. Dokumentiert im Miktionsprotokoll: Zeitpunkt, Menge, Art.\n\n**Inkontinenz** = unwillkürlicher Urinverlust. Bei Herrn Bauer: funktionelle Inkontinenz \u2014 Blase ok, aber er findet die Toilette nicht (Demenz). Maßnahme: Toilettenangebot regelmässig (DNQP 2014).",
        kerntextB1: "**Miktion** = Wasserlassen.\n**Inkontinenz** = Urin verlieren ohne zu wollen. Bei Herrn Bauer: Er findet die Toilette nicht (Demenz). Toilette regelmässig anbieten.",
        faustregel: "Miktion = Wasserlassen. Inkontinenz bei Demenz: oft funktionell (Toilette nicht gefunden).",
        faustregelB1: "Miktion = Wasserlassen. Inkontinenz bei Demenz: Er findet die Toilette nicht.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Was ist funktionelle Inkontinenz bei Herrn Bauer?",
          rueckseite: "Blase funktioniert, aber Patient findet Toilette nicht (Demenz). Maßnahme: Toilettenangebot regelmässig.",
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
              { value: "Tee zunächst abgelehnt, dann mit alkoholfreiem Malzbier getauscht", isBlank: false },
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
              { value: "400 ml Malzbier (alkoholfrei)", isBlank: false },
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
