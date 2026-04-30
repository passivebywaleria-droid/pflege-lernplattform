// CE-02 Situation Frau M. — Phase 6: Dokumentieren
// Steps: 3 · Bloom: B5-B6 · Haupt-Freitext: Sturzprotokoll
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-frau-m-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren",
  titelB1: "Aufschreiben",
  kontext:
    "07:08 Uhr. Schwester-Zimmer. Du hast die Tür hinter dir geschlossen, der Lärm vom Stationsflur — Frühstückswagen, ein Klingelruf, Frau Kellers Stimme aus Zimmer 12 — ist nur noch gedämpft, eine entfernte Geräusch-Tapete. Hier drinnen ist es ruhiger, fast schon leise. Die Schreibtischlampe brennt, der Bildschirm zeigt das offene Pflegedokumentations-System, der Cursor blinkt im leeren Sturzprotokoll-Feld in einem regelmäßigen, fast vorwurfsvollen Takt. Auf dem Tisch eine halbvolle Tasse Kaffee, kalt geworden, ein Hauch Milchhaut auf der Oberfläche. Es riecht nach altem Drucker, nach den Kekspackungen in der Schublade, nach dem leichten Bohnerwachs des Reinigungsdienstes. Auf der Pinnwand hängen Dienstpläne, ein vergilbter Hinweiszettel über Händedesinfektion, ein Foto der Stationsweihnachtsfeier. Vor dir auf dem Stuhl liegt deine Mappe mit den Notizen der Nacht: Zeiten, Vitalzeichen, NRS-Werte, der SBAR-Anruf an Dr. Möller um 03:15, die Hüftprotektor-Entscheidung. Du hast 25 Minuten, bevor du in die Übergabe an die Tagesschicht gehst — und die Tagesschicht wird das hier lesen, vielleicht der Stationsarzt im Vormittagsvisite-Block, vielleicht der Sozialdienst, später vielleicht der Anwalt der Familie, falls etwas eskaliert. Was du jetzt schreibst, ist kein 'Bericht über die Nacht'. Es ist Beweis und Lerngrundlage zugleich, ein juristisches Dokument und eine fachliche Botschaft an die nächste Schicht. Du atmest aus, ziehst die Tastatur näher. Dein Rücken zieht — du sitzt seit gefühlt zwei Tagen, in Wahrheit seit der Übergabe um 06:30. Du erinnerst dich, was Frau Schnell in der Schule gesagt hat: 'Ein gutes Protokoll trennt das Beobachtbare vom Bewertenden. Schreib was war, nicht was du dachtest.' Nicht 'verwirrt' — 'orientiert zu Person, nicht zu Zeit'. Nicht 'sie wollte sich aufdrängen' — 'Patientin äußerte: Ich wollte niemanden stören'. Nicht 'der Sturz war absehbar' — sondern Risikofaktoren benennen, sachlich, ohne Vorwurf. Im Kopf gehst du die neun Pflicht-Elemente durch: Datum und Uhrzeit, Ort, Hergang, Bewusstseinslage, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursachen-Hypothese. Du hörst Frau M. noch leise atmen, irgendwo in deinem Erinnerungsohr, ihre Hand kühl an deiner, ihr Satz 'Sind Sie böse?'. Aber jetzt darf das nicht in den Text — jetzt zählen Fakten. Subjektives gehört in die Reflexion, nicht ins Protokoll. Du klickst in das Feld. Der Cursor blinkt weiter. Dein erster Satz ist der wichtigste: Datum, Uhrzeit, Ort, Patient. Nüchtern. Sachlich. Vollständig. Damit deine Kollegin in zwölf Stunden, die nicht dabei war, in 30 Sekunden weiß, was passiert ist — und was als Nächstes zu tun ist.",
  kontextB1:
    "07:08 Uhr. Du bist im Schwesternzimmer. Die Tür ist zu. Der Lärm vom Flur ist leise. Die Schreibtischlampe brennt. Auf dem Bildschirm ist das Sturzprotokoll. Der Cursor blinkt. Auf dem Tisch: kalter Kaffee. Es riecht nach Drucker und Keksen. Vor dir liegt deine Mappe mit Notizen: Zeiten, Vitalzeichen, Schmerzen, Anruf beim Arzt, Hüftprotektor-Gespräch. Du hast 25 Minuten Zeit. Dann ist Übergabe. Die Tagesschicht liest das. Vielleicht der Arzt. Vielleicht der Sozialdienst. Was du jetzt schreibst, ist wichtig. Es ist ein Beweis — und Lerngrundlage. Du atmest aus. Dein Rücken tut weh. Du sitzt seit der Übergabe um 06:30. Du denkst an die Schule. Frau Schnell hat gesagt: 'Schreib, was war. Nicht, was du gedacht hast.' Nicht 'verwirrt' — sondern 'orientiert zu Person, nicht zu Zeit'. Nicht 'sie wollte stören' — sondern 'Patientin sagte: Ich wollte niemanden stören.' Du gehst die 9 Punkte im Kopf durch: 1. Datum + Uhrzeit. 2. Ort. 3. Hergang. 4. Bewusstsein. 5. Vitalzeichen. 6. Verletzungen. 7. Maßnahmen. 8. Wer wurde informiert. 9. Warum ist sie gestürzt. Du hörst Frau M. noch in deinem Kopf atmen. Aber jetzt zählen Fakten. Du klickst ins Feld. Der erste Satz ist wichtig: Datum, Uhrzeit, Ort, Name. Sachlich. Vollständig. Deine Kollegin liest das in 12 Stunden. Sie war nicht dabei. Sie muss in 30 Sekunden verstehen, was war — und was jetzt zu tun ist.",
  kernSteps: [
    // Step 6.0b — Inline-Wissen "Sturzprotokoll vs. Pflegebericht"
    // PILOT (Inline-Wissen v1, Phase 6): Vor dem Sturzprotokoll-Freetext klärt sich
    // die Differenz zwischen formalem Sturzprotokoll (QM-Doku) und chronologischem
    // Pflegebericht.
    {
      stepId: "ce02-frau-m-dok-00b-protokoll-vs-bericht",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022 — Kriterium 5 (Dokumentation bei Sturz)",
        "§ 630f BGB (Pflegedokumentationspflicht)",
        "MDK Qualitätsprüfungsrichtlinien 2024",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-dok-protokoll-grundwissen",
      tag: "pflege",
      transition: "Du weisst wo was hingehört. Jetzt schreiben.",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["sturz-prophylaxe"],
      contentC1: {
        title: "Sturzprotokoll vs. Pflegebericht — was kommt wo rein?",
        body: "",
        glossarBegriffe: ["Sturzprotokoll", "Pflegebericht", "QM"],
      },
      contentB1: {
        title: "Wo schreibst du was?",
        body: "",
        glossarBegriffe: ["Sturzprotokoll", "Pflegebericht"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-sturzprotokoll",
        storyAufhaenger:
          "Du hast 25 Minuten. Auf dem Bildschirm ist das **Sturzprotokoll**. Aber der Pflegebericht steht auch noch aus. Ist das doppelte Arbeit? Nein — beide haben unterschiedliche Aufgaben.",
        storyAufhaengerB1:
          "Du hast 25 Minuten. Du musst das **Sturzprotokoll** schreiben. Und den **Pflegebericht**. Ist das doppelt? Nein — beide sind anders.",
        kerntext:
          "**Sturzprotokoll** und **Pflegebericht** sind getrennte Dokumente mit getrennten Aufgaben.\n\n**Sturzprotokoll** (formaler Erfassungsbogen):\n\n• **Zweck:** Qualitätssicherung, MDK-Prüfung, Sturz-Statistik der Einrichtung\n\n• **Format:** Strukturiertes Formular, Pflicht-Felder ankreuzbar\n\n• **9 Pflicht-Inhalte** (DNQP 2022 + MDK):\n  - Datum + Uhrzeit\n  - Ort (Zimmer-Nr., genauer Sturz-Ort)\n  - Hergang (kurz, sachlich)\n  - Bewusstsein bei Auffinden (wach, somnolent, bewusstlos)\n  - Vitalzeichen direkt nach Sturz\n  - Verletzungen (sichtbar, nicht-sichtbar = ärztl. abgeklärt)\n  - Sofort-Maßnahmen\n  - Information an wen (Arzt, Angehörige, Schichtleitung)\n  - Vermutete Ursache(n)\n\n**Pflegebericht** (chronologisch):\n\n• **Zweck:** Schichtübergabe, Verlaufsbeschreibung, juristisches Beweismittel (§ 630f BGB)\n\n• **Format:** Fließtext, chronologisch, mit Zeitstempel pro Eintrag\n\n• **Kerninhalt:** Was hast du beobachtet, getan, gesagt, gehört. Plus: Patient-Reaktion + Ergebnis.\n\n• **Stil:** SACHLICH, FAKTISCH — nicht: \\\"verwirrt\\\", sondern: \\\"orientiert zu Person, nicht zu Zeit\\\". Nicht: \\\"wollte stören\\\", sondern: \\\"Patientin sagte: Ich wollte niemanden stören.\\\"\n\n**Bei Frau M. heute Nacht:**\n\n• **Sturzprotokoll** = Pflicht (DNQP K5, MDK relevant)\n\n• **Pflegebericht** = chronologische Schicht-Übersicht (alles was du gemacht hast 02:48 - 06:30)\n\n• **SBAR-Übergabe** an die Frühschicht zusätzlich (mündlich + ggf. schriftlich)\n\n**Wichtige Faustregel:** Was nicht dokumentiert ist, ist juristisch nicht passiert (§ 630f BGB). Sturzprotokoll vergessen = MDK-Defizit + ggf. Haftungsfall.",
        kerntextB1:
          "**Sturzprotokoll** und **Pflegebericht** sind zwei verschiedene Dokumente.\n\n**Sturzprotokoll** (festes Formular):\n\n• **Wozu:** Qualitätssicherung, MDK-Prüfung, Statistik\n\n• **Format:** Formular zum Ankreuzen + ausfüllen\n\n• **9 Pflicht-Punkte:**\n  - Datum + Uhrzeit\n  - Ort (Zimmer + genaue Stelle)\n  - Was passiert ist (kurz)\n  - Bewusstsein (wach? schläfrig? bewusstlos?)\n  - Vitalzeichen direkt nach dem Sturz\n  - Verletzungen\n  - Was du sofort gemacht hast\n  - Wen du informiert hast (Arzt, Angehörige)\n  - Vermutete Gründe\n\n**Pflegebericht** (Geschichte der Schicht):\n\n• **Wozu:** Schichtübergabe + Beweis vor Gericht (§ 630f BGB)\n\n• **Format:** Lange Geschichte mit Uhrzeiten\n\n• **Inhalt:** Was du gesehen, getan, gesagt hast. Plus: Wie hat Patient reagiert.\n\n• **Wichtig — Stil:** Schreibe nur **Fakten**, keine Wertungen.\n  - **Falsch:** \\\"verwirrt\\\"\n  - **Richtig:** \\\"orientiert zu Person, nicht zu Zeit\\\"\n  - **Falsch:** \\\"wollte stören\\\"\n  - **Richtig:** \\\"Patientin sagte: Ich wollte niemanden stören\\\"\n\n**Bei Frau M.:**\n\n• **Sturzprotokoll** = Pflicht (Standard sagt das)\n\n• **Pflegebericht** = die ganze Nachtschicht (02:48 - 06:30)\n\n• **SBAR-Übergabe** an die Frühschicht zusätzlich\n\n**Wichtig:** Was nicht aufgeschrieben ist, ist vor Gericht NICHT passiert (§ 630f BGB).",
        faustregel:
          "Sturzprotokoll = QM/MDK-Formular mit 9 Pflichtfeldern. Pflegebericht = chronologisch mit Zeitstempel + sachliche Fakten ohne Wertung. Was nicht dokumentiert ist, ist juristisch nicht passiert.",
        faustregelB1:
          "Sturzprotokoll = Formular, 9 Pflichtfelder. Pflegebericht = Geschichte mit Uhrzeit, nur Fakten. Was nicht aufgeschrieben ist, ist vor Gericht nicht passiert.",
        spektrum: [
          {
            patientName: "Herr Bauer (Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Sturzprotokoll bei nicht-kommunikationsfähigem Patient",
            kurzbeschreibung:
              "Bei fortgeschrittener Demenz: Hergang oft nicht durch Patient erzählbar — Befund-orientierte Dokumentation, Aussage der Tochter Ingrid (gesetzliche Betreuerin) als Zusatz.",
          },
          {
            patientName: "Lukas (Verbrühung)",
            situationsId: "ls-lukas-verbrühung",
            hauptfaktor: "Sturzprotokoll im Pädiatrie-Setting",
            kurzbeschreibung:
              "Im Pädiatrie-Setting: zusätzlich Eltern-Beobachtung dokumentieren, ggf. Verdachts-Meldung bei Auffälligkeiten (§ 4 KKG, § 8a SGB VIII).",
          },
          {
            patientName: "Frau Kovac (ambulant)",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Sturz im häuslichen Setting",
            kurzbeschreibung:
              "Im ambulanten Setting: Sturzprotokoll der Pflegekasse + Hausarzt-Information per Fax/Sprachnachricht. Wohnungs-Begehung dokumentieren.",
          },
        ],
        sonstBox:
          "Andere relevante Dokumente bei Sturz: **Wundprotokoll** (wenn Verletzung), **Medikamentenanordnung-Ausdruck** (mit AVO-Nachweis), **Foto-Dokumentation** (mit Einwilligung, DSGVO Art. 9). Mehr in DNQP-Standard 2022 + MDK QPR 2024.",
        sonstBoxB1:
          "Andere wichtige Dokumente bei Sturz: **Wundprotokoll** (bei Verletzung), **Medikamenten-Ausdruck** (mit Arzt-Anordnung), **Foto** (mit Einverständnis). Mehr im DNQP-Standard 2022.",
        karteikarte: {
          vorderseite:
            "Frau M. (Sturz heute Nacht, kein Bruch, NRS 4-5 → 2) — du dokumentierst. Wo steht was, und worauf achtest du beim Stil?",
          rueckseite:
            "**Sturzprotokoll** (QM-Formular, MDK-pflichtig):\n9 Pflichtfelder: Datum/Uhrzeit, Ort, Hergang, Bewusstsein, Vitalzeichen, Verletzungen, Sofortmaßnahmen, Info an wen, Vermutete Ursache.\n\n**Pflegebericht** (chronologisch):\nFließtext mit Zeitstempel, sachlich. Nur Fakten, keine Wertungen.\n• Falsch: \\\"verwirrt\\\"\n• Richtig: \\\"orientiert zu Person, nicht zu Zeit\\\"\n\nFaustregel: Was nicht dokumentiert ist, ist juristisch nicht passiert (§ 630f BGB). Beides ist Pflicht — nicht doppelt, sondern getrennte Aufgaben.",
        },
      },
    },

    // Step 6.1 — Freetext LANG: Sturzprotokoll
    {
      stepId: "ce02-frau-m-dok-01-sturzprotokoll-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-frau-m-dok-protokoll",
      tag: "pflege",
      transition: "Protokoll geschrieben. Jetzt den Pflegeplan anpassen.",
      contentC1: {
        title: "Sturzprotokoll für Frau M.",
        body: "Schreibe das Sturzprotokoll für Frau M. Es soll ca. 120-200 Wörter umfassen.\n\nDie KI prüft 9 Pflicht-Elemente (Datum/Uhrzeit, Ort, Hergang, Bewusstseinslage, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursachenhypothese). **Stil**: sachlich, nüchtern, keine Wertungen ('verwirrt' statt 'dement').",
        glossarBegriffe: ["Sturzprotokoll"],
      },
      contentB1: {
        title: "Sturzprotokoll schreiben",
        body: "Schreibe das Sturzprotokoll für Frau M. Ungefähr 120-200 Wörter.\n\nDie KI prüft 9 Punkte: Datum+Uhrzeit, Ort, Hergang, Bewusstsein, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursache (Medikament!). **Stil**: sachlich, keine Wertung. Für B1-Schüler: Textbausteine sind einblendbar.",
        glossarBegriffe: ["Sturzprotokoll"],
      },
      question: {
        fragetext:
          "Schreibe das Sturzprotokoll für Frau M. Dein Text soll alle 9 Pflicht-Elemente enthalten.",
        musterantwort:
          "Sturzereignis am 22.04.2026, 02:40 Uhr, Zimmer 14, Bett links. Patientin Frau Marianne M., 82 Jahre (Pneumonie Tag 3, Parkinson II, Osteoporose). Hergang: Patientin wollte alleine zur Zimmer-Toilette, stürzte vor dem Bett auf die linke Hüftseite. Selbstbericht und Pflegebeobachtung stimmen überein. Bewusstseinslage: ansprechbar, orientiert zu Person/Ort/Zeit/Situation. Vitalzeichen: RR 135/82, HF 78, SpO2 95 %, Temp 36,8 °C. Verletzungen: keine sichtbare Deformität; Schmerz linke Hüfte NRS 4/10, keine Verkürzung oder Außenrotation. Sofortmaßnahmen: Patientin auf dem Boden zugedeckt, Assessment vor Transfer, 2-Personen-Transfer mit Frau Keller ins Bett, Schmerz-Reassessment. Informierte Personen: Dr. X (diensthabender Arzt) um 03:15 per SBAR, Frau Keller parallel. Ursachenhypothese: Wahrscheinlich Nachwirkung Zolpidem (seit 2 Tagen, PRISCUS 2.0) + HCT-bedingte Nykturie + fremde Umgebung + Parkinson-Bradykinese. Empfehlung: Medikamentenreview Zolpidem, Physio-Anbindung, Umgebungs-Maßnahmen (Nachtlicht, Toilettenstuhl).",
        bewertungskriterien: [
          "1. Datum + Uhrzeit (z.B. 22.04.2026, 02:40 Uhr)",
          "2. Ort des Sturzes (Zimmer 14, links neben Bett)",
          "3. Hergang (wie und was beobachtet)",
          "4. Bewusstseinslage (ansprechbar, orientiert zu Person/Ort/Zeit)",
          "5. Vitalzeichen (RR, HF, SpO2, Temp)",
          "6. Verletzungen (oder deren Ausschluss — Deformität, Schmerz)",
          "7. Durchgeführte Maßnahmen (Transfer, Assessment, Wärme)",
          "8. Informierte Personen (Arzt per SBAR, Frau Keller)",
          "9. Ursachen-Hypothese (Zolpidem + HCT + Umgebung + Parkinson)",
        ],
        satzanfaengeB1: [
          "Sturzereignis am [Datum], [Uhrzeit], Zimmer [Nr.] …",
          "Patientin Frau M., 82 Jahre, mit Diagnosen …",
          "Hergang: Frau M. wollte … und stürzte …",
          "Patientin war: ansprechbar, orientiert, Vitalzeichen: …",
          "Verletzungen: keine sichtbare Deformität, Schmerz …",
          "Sofortmaßnahmen: Assessment, Transfer zu zweit, …",
          "Informiert: Dr. X um 03:15 per SBAR, Frau Keller parallel.",
          "Ursache wahrscheinlich: Zolpidem (seit 2 Tagen) + HCT + …",
        ],
      },
    },

    // Step 6.2 — Matching: Pflegeplan-Update
    {
      stepId: "ce02-frau-m-dok-02-pflegeplan-update",
      phase: 6,
      stepType: "matching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "Fiechter/Meier Pflegeprozess"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-dok-pflegeplan",
      tag: "pflege",
      transition: "Fast fertig. Eine letzte Zusammenfassung.",
      contentC1: {
        title: "Pflegeplan anpassen",
        body: "Nach dem Sturzereignis muss der Pflegeplan aktualisiert werden. Zu jedem **Pflegeziel** gehört eine **Pflegemaßnahme**. Ordne die 4 Pflegeziel-Maßnahmen-Paare richtig zu.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Pflegeplan aktualisieren",
        body: "Nach dem Sturz muss der Pflegeplan neu werden. Zu jedem **Ziel** gehört eine **Maßnahme**. Ordne die 4 Paare zu.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne jedes Pflegeziel der passenden Pflegemaßnahme zu.",
        matchingPairs: [
          {
            left:
              "Ziel: Frau M. stürzt in den verbleibenden Liegetagen nicht erneut",
            right:
              "Maßnahme: Nachtlicht dauerhaft an, Toilettenstuhl nachts am Bett, 2-Personen-Mobilisation ersten 48 h",
          },
          {
            left: "Ziel: Sedierende Medikation wird abgesetzt/überprüft",
            right:
              "Maßnahme: Zolpidem abgesetzt; HCT-Review durch Tag-Schicht in Visite heute",
          },
          {
            left: "Ziel: Frau M. gewinnt Bewegungs-Sicherheit zurück",
            right:
              "Maßnahme: Physiotherapie ab heute, 3 Einheiten vor Entlassung, schrittweiser Aufbau",
          },
          {
            left:
              "Ziel: Frau M. und Tochter werden auf sichere Entlassung vorbereitet",
            right:
              "Maßnahme: Gespräch mit Tochter Birgit + Ergotherapie-Anfrage für Wohnraum-Beratung",
          },
        ],
      },
    },

    // Step 6.3 — Summary
    {
      stepId: "ce02-frau-m-dok-03-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-frau-m-dok-summary",
      tag: "pflege",
      contentC1: {
        title: "Session-Zusammenfassung",
        body: "Das hast du heute gelernt.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Zusammenfassung",
        body: "Das hast du heute gelernt.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Deine Kernbotschaften aus der Situation Frau M.",
        summary: {
          reflexionRueckbezug:
            "Frau M. hat dich in eine komplexe Akut-Situation geführt: nächtlicher Sturz, Zolpidem als Hauptursache, Post-Fall-Angst, rechtliche Frage zu Bettgittern, würdevolle Mobilisation, Sturzprotokoll. Du hast 6 Pflegeprozess-Phasen durchlaufen — und deine Konfidenz hat sich verändert.",
          kernaussagen: [
            "Risikofaktoren erkennen — besonders Medikamente: Zolpidem steht auf PRISCUS-2.0 und erhöht das Sturzrisiko 2- bis 3-fach bei Älteren.",
            "Beobachten und aktiv fragen — Patienten berichten Nebenwirkungen oft nicht von selbst ('ich dachte, das gehört dazu').",
            "Würdevolle Kommunikation bei Sturz-Angst — Angst validieren, Ursache benennen ('Tabletten, nicht Alter'), konkreten Plan geben.",
            "Rechtliche Grenzen der Fixierung (§ 1831 BGB) — beidseitige Bettgitter ohne Zustimmung sind verboten und keine Prophylaxe.",
            "Sofortmaßnahmen nach Sturz: Prüfen vor Bewegen. Bei Hüftfraktur-Zeichen (Bein-Verkürzung + Außenrotation): nicht bewegen, Arzt.",
            "Interprofessionelle Kommunikation — SBAR-Anruf strukturiert Übergabe an Arzt. Und: Sturzprophylaxe ist Team-Aufgabe (Cochrane Gillespie et al. 2012; aktualisiert durch Hopewell et al. 2018, Montero-Odasso et al. 2022: multifaktorielle Interventionen senken Sturzrate um ca. 21-31 %).",
            "Sturzprotokoll — 9 Pflicht-Elemente, sachlich, zeitnah. Auch verletzungsfreie Stürze + Near-Miss dokumentieren.",
            "Offene Anschluss-Frage für die nächste Session: Wie würdest du Frau M. auf die Entlassung vorbereiten? Was braucht Tochter Birgit?",
          ],
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 25,
};
