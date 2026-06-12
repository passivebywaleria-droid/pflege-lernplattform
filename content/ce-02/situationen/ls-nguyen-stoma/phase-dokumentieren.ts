// CE-02 Situation Herr Nguyen — Phase 6: Dokumentieren
// Steps: 4 Kern + 2 Optional · Bloom: B5–B6 · Zeit: ~20–30 Min
// Haupt-Freitext: Stomadokumentation (6.1) + Übergabe SBAR (6.4)
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-dokumentieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren — So, dass die Nächste weiterarbeiten kann",
  titelB1: "Dokumentieren — Aufschreiben was wichtig ist",
  kontext:
    "Es ist 13:15 Uhr. Du übergibst in 45 Minuten. Du setzt dich an den Stationsdokumentations-Computer. Was muss in Herrn Nguyens Akte stehen? Nicht als Fließtext-Chronik — als nützliche Dokumentation, die die Nächste weiterarbeiten kann. Drei Dokumentationsbereiche warten: Stoma-Dokumentation, Ernährungsprotokoll + Bilanz, Pflegebericht (mit Beratungsanteil und emotionalem Status).",
  kontextB1:
    "Es ist 13:15 Uhr. Übergabe in 45 Minuten. Du sitzt am Computer. Was schreibst du auf? Es gibt drei Bereiche: Stoma-Dokumentation, Ernährungs-Protokoll, Pflegebericht.",
  kernSteps: [
    // Step 6.1 — Freetext (LANG): Stoma-Dokumentation
    {
      stepId: "ce02-nguyen-dok-01-stoma-doku-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-dok-stomadokumentation",
      tag: "pflege",
      contentC1: {
        title: "Haupt-Freitext: Stoma-Dokumentation heute Morgen",
        body: "**DNQP** = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — entwickelt die Expertenstandards (z.B. Sturzprophylaxe, Dekubitusprophylaxe, Schmerzmanagement, chronische Wunden), die für die Pflege in Deutschland verbindlich sind.\n\n**Stomadokumentation** = standardisierte Pflegedokumentation, die alle Beobachtungen und Maßnahmen rund um das Stoma erfasst (Befund, Output, Leckage, Beutelwechsel, Anleitung). Auch geschrieben als **Stoma-Dokumentation**.\n\n**Wunddokumentation** = standardisierte Pflegedokumentation für Wunden (z.B. die postoperative Bauchdeckenwunde) nach DNQP-Standard mit Wund-Assessment-Bogen (Lokalisation, Größe, Tiefe, Wundgrund, Wundrand, Exsudat).\n\nSchreibe die Stoma-Dokumentation für den heutigen Morgen. Dein Text soll ca. 120–180 Wörter umfassen. Die KI prüft ob 9 Pflicht-Elemente enthalten sind.\n\n**Pflicht-Elemente:**\n1) Datum + Uhrzeit des Beutelwechsels\n2) Stoma-Befund (Farbe, Prominenz, Schleimhaut)\n3) Hautumgebungs-Befund (gereizt? Mazerierung? Rötung?)\n4) Output (Konsistenz, Farbe, Menge geschätzt)\n5) Leckage und Maßnahme\n6a) Querverweis Bauchdeckenwunde (Status — Detail in der Wunddokumentation)\n7) Wer beim Wechsel dabei war\n8) Angehörigen-Anleitung (was, mit wem, durch wen)\n9) Stomatherapeut-Visite (wann, was, Ergebnis)\n\n**Wichtig:** Die postoperative Bauchdeckenwunde wird ausführlich in einer eigenen Wunddokumentation (DNQP Wunde, standardisierter Wund-Assessment-Bogen) erfasst — in der Stomadokumentation reicht ein kurzer Querverweis zum Status.\n\n**Stil:** sachlich, keine Wertungen, keine Diagnosen — nur Beobachtungen und Maßnahmen.",
        glossarBegriffe: ["Stomadokumentation", "Wunddokumentation", "Pflicht-Elemente", "Behandlungskontinuität", "Stoma-Dokumentation", "DNQP"],
      },
      contentB1: {
        title: "Stoma-Dokumentation schreiben",
        body: "**Stoma-Dokumentation** (auch **Stomadokumentation**) = das, was du über das Stoma in die Akte schreibst (Farbe, Output, Leckage, Beutelwechsel).\n\n**Wunddokumentation** = das, was du über eine Wunde aufschreibst (z.B. die Bauch-OP-Wunde) — separat vom Stoma.\n\nSchreibe die Stoma-Dokumentation für heute Morgen. Ca. 120–180 Wörter. Die KI prüft 9 Elemente.\n\n**Was muss drin sein:**\n1) Datum + Uhrzeit des Beutelwechsels\n2) Wie das Stoma aussieht (Farbe, Größe)\n3) Wie die Haut rund ums Stoma aussieht\n4) Was aus dem Stoma kommt (Farbe, Konsistenz, Menge)\n5) Leckage — was war, was du getan hast\n6a) Kurzer Hinweis auf die Bauch-Wunde — die ausführliche Beschreibung steht in der Wunddokumentation\n7) Wer dabei war\n8) Was du der Ehefrau gezeigt hast (Anleitung)\n9) Was Herr Baum (Stomatherapeut) gesagt hat\n\nFür B1-Schüler: Textbausteine einblendbar.",
        glossarBegriffe: ["Stoma-Dokumentation", "Wunddokumentation", "Stomadokumentation"],
      },
      question: {
        fragetext:
          "Schreibe die Stoma-Dokumentation für den heutigen Morgen. Dein Text muss alle 9 Pflicht-Elemente enthalten.",
        musterantwort:
          "Stoma-Dokumentation, 09:10 Uhr, Zimmer 6. Beutelwechsel heute um 08:15 Uhr (regulärer Wechsel, Beutel ca. 1/2 voll seit gestern Abend). Stoma-Befund: kräftig rosa, feucht, ca. 1,5 cm prominierend, Öffnung zentral — Normalzeichen. Hautumgebung: Rötung ca. 2 cm Radius um Stomaring, keine Mazerierung, keine Einrisse. Haut nach Reinigung gründlich getrocknet. Output: dünnflüssig, gelblich-braun, ca. 150 ml (normale Transitphase, 4. Tag post-OP). Leckage um 09:00 Uhr: Stomainhalt an Plattenrand, Haut sofort gereinigt und getrocknet, neue Stomaplatte (60 mm) angelegt — Ursache: Hautfaltenwurf rechts, Platte nachgepasst. Bauchdeckenwunde: Status unverändert (Details siehe Wunddokumentation Tag 4 post-OP). Anwesend beim Wechsel: Pflegekraft (Frühdienst), Tochter Linh (Übersetzerin), Ehefrau Mai. Angehörigen-Anleitung: Ehefrau Mai hat korrekten Sitz des neuen Beutels gezeigt bekommen, Stomatherapeut Herr Baum hat um 10:00 Uhr strukturierte Anleitung für Ehefrau Mai begonnen (gesehen: richtiger Sitz, Kontrolle Platte-Haut-Übergang). Stomatherapeut-Visite: Herr Baum 10:00–12:00 Uhr, Plattengröße auf 62 mm angepasst, nächster Wechsel-Termin: morgen Früh.",
        bewertungskriterien: [
          "1. Datum + Uhrzeit Beutelwechsel",
          "2. Stoma-Befund (Farbe, Prominenz, Schleimhautzustand)",
          "3. Hautumgebung-Befund (Rötung? Mazerierung? Einrisse?)",
          "4. Output (Konsistenz, Farbe, geschätzte Menge)",
          "5. Leckage dokumentiert + Maßnahme beschrieben",
          "6a. Querverweis auf Wunddokumentation (Bauchdeckenwunde NICHT ausführlich hier)",
          "7. Anwesende beim Wechsel",
          "8. Angehörigen-Anleitung (was, mit wem, durch wen)",
          "9. Stomatherapeut-Visite (wann, Ergebnis, nächster Schritt)",
        ],
        satzanfaengeB1: [
          "Beutelwechsel am [Datum] um [Uhrzeit].",
          "Stoma-Befund: [Farbe], [Feuchtigkeit], [Prominenz].",
          "Hautumgebung: [gerötet / nicht gerötet], keine Mazerierung.",
          "Output: [Konsistenz], [Farbe], ca. [Menge] ml.",
          "Leckage um [Uhrzeit]: [was passiert]. Maßnahme: [was getan].",
          "Bauchdeckenwunde: Status [unverändert / verschlechtert] — Details in Wunddokumentation.",
          "Anwesend: [Namen].",
          "Ehefrau Mai hat [was] gezeigt bekommen.",
          "Stomatherapeut Herr Baum um [Uhrzeit]: [was gemacht, was entschieden].",
        ],
      },
    },

    // Step 6.2 — TableFillIn: Ernährungsprotokoll
    {
      stepId: "ce02-nguyen-dok-02-ernährungsprotokoll",
      phase: 6,
      stepType: "tablefillin",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020, AWMF-Register 073-003)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-dok-ernährungsprotokoll",
      tag: "krankheitslehre",
      contentC1: {
        title: "Ernährungsprotokoll 24h — Tabelle ausfüllen",
        body: "Fülle das Ernährungsprotokoll für die letzten 24 Stunden aus. Nutze die Informationen aus Phase 5 (Ernährungsbilanz). Trage auch die Maßnahmen ein, die du ergriffen hast.",
        glossarBegriffe: ["Ernährungsprotokoll", "Trinknahrung", "NRS-2002"],
      },
      contentB1: {
        title: "Ernährungs-Protokoll ausfüllen",
        body: "Fülle die Tabelle aus. Nutze die Informationen aus Phase 5.",
        glossarBegriffe: ["Ernährungsprotokoll", "Kalorien"],
      },
      question: {
        fragetext:
          "Fülle das Ernährungsprotokoll der letzten 24 Stunden für Herrn Nguyen aus.",
        tablefillin: {
          instruction:
            "Fülle alle leeren Felder mit den korrekten Informationen aus.",
          headers: ["Uhrzeit", "Mahlzeit / Getränk", "Menge", "kcal (geschätzt)", "Besonderheiten"],
          rows: [
            [
              { value: "Gestern 18:00", isBlank: false },
              { value: "Brühe", isBlank: false },
              { value: "100 ml", isBlank: false },
              { value: "~20 kcal", isBlank: true, options: ["~20 kcal", "~100 kcal", "0 kcal"] },
              { value: "Fast nicht angerührt laut Nachtschicht", isBlank: false },
            ],
            [
              { value: "Gestern 19:30", isBlank: false },
              { value: "Haferschleim", isBlank: false },
              { value: "3 Löffel (~30 ml)", isBlank: false },
              { value: "~60 kcal", isBlank: false },
              { value: "Rest unangetastet", isBlank: true, options: ["Rest unangetastet", "Komplett gegessen", "Erbrochen"] },
            ],
            [
              { value: "Heute 07:30", isBlank: false },
              { value: "Tee", isBlank: false },
              { value: "", isBlank: true, options: ["150 ml", "500 ml", "50 ml"] },
              { value: "0 kcal", isBlank: false },
              { value: "—", isBlank: false },
            ],
            [
              { value: "Heute 08:30", isBlank: false },
              { value: "Zwieback", isBlank: false },
              { value: "50 g", isBlank: false },
              { value: "", isBlank: true, options: ["~60 kcal", "~200 kcal", "~10 kcal"] },
              { value: "Auf Wunsch von Herrn Nguyen", isBlank: false },
            ],
            [
              { value: "Heute 10:00", isBlank: false },
              { value: "Trinknahrung (Fresubin 2 kcal/ml)", isBlank: false },
              { value: "150 ml", isBlank: false },
              { value: "~300 kcal", isBlank: false },
              { value: "", isBlank: true, options: ["Vom Stomatherapeuten empfohlen, von Pflege angeboten", "Vom Arzt verordnet", "Selbst genommen"] },
            ],
            [
              { value: "GESAMT 24h", isBlank: false },
              { value: "—", isBlank: false },
              { value: "—", isBlank: false },
              { value: "", isBlank: true, options: ["~440 kcal", "~800 kcal", "~200 kcal"] },
              { value: "Richtwert: 1500–2000 kcal/d. Defizit: ~1100–1600 kcal. Ernährungsberaterin angefordert [Uhrzeit], Termin noch ausstehend.", isBlank: false },
            ],
          ],
        },
      },
    },

    // Step 6.3 — Matching: Was gehört wohin in der Dokumentation?
    {
      stepId: "ce02-nguyen-dok-03-pflegebericht-matching",
      phase: 6,
      stepType: "matching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "DNQP — Expertenstandard Pflege von Menschen mit chronischen Wunden (2. Aktualisierung 2015)",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-dok-dokumentationsbereiche",
      tag: "pflege",
      contentC1: {
        title: "Was gehört wohin? — Dokumentationsbereiche",
        body: "**Stomadokumentation** = Befunde rund ums Stoma (Farbe, Output, Beutelwechsel, Leckage). **Wunddokumentation** = separate Doku für Wunden (z.B. Bauchdeckenwunde) nach DNQP-Standard.\n\nInformationen aus dem heutigen Morgen. Welche gehört in welchen Dokumentationsbereich? Wichtige Trennfälle: Herr Nguyens Zitat 'Ich bin kein richtiger Mann mehr' — Pflegebericht oder nicht dokumentieren? Bauchdeckenwunde — Stomadokumentation oder Wunddokumentation?",
        glossarBegriffe: ["Pflegebericht", "Stomadokumentation", "Wunddokumentation", "Behandlungskontinuität"],
      },
      contentB1: {
        title: "Was kommt wohin in die Dokumentation?",
        body: "**Stomadokumentation** = was du über das Stoma schreibst. **Wunddokumentation** = was du über die Bauch-Wunde schreibst. Beides getrennt!\n\nInformationen aus dem Morgen. Wohin schreibst du sie? Wichtig: Stoma-Befunde und Wund-Befunde werden getrennt dokumentiert.",
        glossarBegriffe: ["Pflegebericht", "Stoma-Dokumentation", "Wunddokumentation", "Stomadokumentation"],
      },
      question: {
        fragetext:
          "Ordne jede Information dem richtigen Dokumentationsbereich zu.",
        matchingPairs: [
          {
            left: "Stoma-Farbe: kräftig rosa, feucht, 1,5 cm prominent",
            right: "Stomadokumentation",
          },
          {
            left: "Leckage um 09:00 Uhr, Haut gereinigt, Platte neu angepasst",
            right: "Stomadokumentation",
          },
          {
            left: "Tochter Linh hat beim Beutelwechsel übersetzt",
            right: "Pflegebericht",
          },
          {
            left: "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr'",
            right: "Pflegebericht",
          },
          {
            left: "Ernährungsberaterin angefordert um 08:30 Uhr, Termin noch ausstehend",
            right: "Ernährungsprotokoll + Pflegebericht",
          },
          {
            left: "Bauchdeckenwunde: leicht gerötet, seröse Absonderung, unverändert",
            right: "Wunddokumentation",
          },
          {
            left: "Stomatherapeut Herr Baum: Platte auf 62 mm angepasst, Ehefrau Mai angeleitet",
            right: "Stomadokumentation",
          },
          {
            left: "Persönliche Meinung der Pflegekraft: 'Herr Nguyen ist motivationslos'",
            right: "Nicht dokumentieren (persönliche Wertung gehört nicht in die Akte)",
          },
          {
            left: "Erste Mobilisation: Bettkante 5 Minuten, kein Schwindel, Schmerzangabe NRS 3/10",
            right: "Pflegebericht",
          },
          {
            left: "Heparin s.c. heute Morgen 08:00 Uhr, Injektionsstelle laterale Oberschenkelaußenseite (Wunde + Stoma vermieden)",
            right: "Medikamentendokumentation (Ärztliche Information bei Besonderheiten)",
          },
        ],
      },
    },

    // Step 6.4 — Freetext (kurz): Übergabe formulieren
    {
      stepId: "ce02-nguyen-dok-04-uebergabe-formulieren",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: [
        "Joint Commission (2017): SBAR Communication Tool — Situation, Background, Assessment, Recommendation",
        "I Care Pflege (Thieme): Kommunikation und Übergabe",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-dok-uebergabe",
      tag: "pflege",
      contentC1: {
        title: "Mündliche Übergabe im SBAR-Format",
        body: "**Mündliche Übergabe** = die strukturierte Weitergabe patientenbezogener Informationen von Schicht zu Schicht. SBAR ist das Standard-Format dafür.\n\n**Beinübungen** = aktive oder unterstützte Bewegungen der Beine im Bett (Fußkreisen, Fußheben, Hacke-Spitze) zur Aktivierung der Bein-Muskelpumpe und damit zur Thromboseprophylaxe.\n\nSchreibe die mündliche Übergabe für die Kollegin im Spätdienst. SBAR-Format. 3–4 Sätze. Die KI prüft: Ist SBAR vollständig? Stoma-Status klar? Emotionaler Status erwähnt? Ernährung als offener Punkt?",
        glossarBegriffe: ["SBAR", "Übergabe", "Behandlungskontinuität", "Mündliche Übergabe", "Beinübungen"],
      },
      contentB1: {
        title: "Übergabe schreiben",
        body: "**Mündliche Übergabe** = wenn du der nächsten Schicht mündlich erzählst, was wichtig ist. SBAR ist das Standard-Format.\n\n**Beinübungen** = Bewegungen der Beine im Bett (z.B. Fußkreisen). Schützen vor Thrombose.\n\nSchreibe die Übergabe für die Nachmittags-Kollegin. SBAR-Format. 3–4 Sätze. Was ist wichtig?",
        glossarBegriffe: ["SBAR", "Übergabe", "Mündliche Übergabe", "Beinübungen"],
      },
      question: {
        fragetext:
          "Schreibe die mündliche Übergabe für die Kollegin im Spätdienst. SBAR-Format, 3–4 Sätze.",
        musterantwort:
          "S: Herr Nguyen, Zimmer 6, 72 Jahre, 4. Tag post-OP Sigmaresektion mit endständigem Kolostoma. B: Beutelwechsel heute Morgen, eine Leckage um 09:00 Uhr behoben, Stomaplatte auf 62 mm angepasst. Stoma rosig, Haut leicht gerötet — keine Mazerierung. Ernährung kritisch (440 kcal / 24h), Ernährungsberaterin angefordert, Termin noch offen. Stomatherapeut Herr Baum war da — Ehefrau Mai angeleitet. A: Stoma morgen früh wieder wechseln, Haut beobachten, Ernährungsberaterin-Termin heute nachmittag bestätigen oder nachfordern. Beinübungen wurden noch nicht gemacht — bitte nachholen. B: Herr Nguyen ist emotional angespannt, hat sein Körperbild thematisiert. Heute ein kleiner Fortschritt: hat beim 2. Wechsel kurz hingeschaut. Mit Würde und Geduld begegnen — nicht drängen.",
        bewertungskriterien: [
          "S: Patient, Diagnose, Situation — vollständig?",
          "B: Stoma-Status (Farbe, Befund, Leckage + Maßnahme) — erwähnt?",
          "A: Offene Punkte (Ernährungsberaterin, Beinübungen, nächster Beutelwechsel) — enthalten?",
          "R: Empfehlung für Spätdienst — konkret und handlungsleitend?",
          "Emotionaler Status von Herrn Nguyen — erwähnt?",
        ],
        satzanfaengeB1: [
          "S: Herr Nguyen, Zimmer 6, [Alter], [Diagnose].",
          "B: Beutelwechsel heute Morgen, [Stoma-Befund]. Ernährung: [Status].",
          "A: Morgen früh [Maßnahme]. Bitte [offener Punkt] nachholen.",
          "R: Herr Nguyen ist [emotionaler Status]. [Empfehlung für Spätdienst].",
        ],
      },
    },

    // Session-Zusammenfassung — aus Optional in den Kern-Fluss gezogen (2026-06-12)
    {
      stepId: "ce02-nguyen-dok-opt2-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "I Care Pflege (Thieme): Pflegeprozess und Pflegeplanung",
        "§ 630f BGB — Dokumentationspflicht der Behandelnden",
      ],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-nguyen-dok-summary",
      tag: "pflege",
      contentC1: {
        title: "Was du heute gelernt hast",
        body: "**Interkulturelle Kommunikation** = Kommunikation zwischen Menschen unterschiedlicher kultureller Hintergründe. In der Pflege bedeutet das: kultursensible Sprache, Beachtung von Werten (z.B. Schamgrenzen, Geschlechterrollen, Familienstrukturen), Einsatz professioneller Dolmetscher.\n\nDu hast heute eine komplexe Lernsituation abgeschlossen: Herr Nguyen, 72 Jahre, 4. Tag post-OP, Kolostoma, Mangelernährung, Würde-Thema, interkulturelle Kommunikation. Hier ist eine Zusammenfassung der Lernziele — und die Karteikarten, die für dich vorbereitet wurden.",
        glossarBegriffe: ["Interkulturelle Kommunikation"],
      },
      contentB1: {
        title: "Das hast du heute gelernt",
        body: "**Interkulturelle Kommunikation** = Kommunikation zwischen Menschen aus verschiedenen Kulturen. In der Pflege: respektvolle Sprache, Werte beachten, Dolmetscher nutzen.\n\nDu hast heute viel gelernt. Hier ist eine Zusammenfassung.",
        glossarBegriffe: ["Interkulturelle Kommunikation"],
      },
      question: {
        fragetext: "Zusammenfassung der Lernsituation ls-nguyen-stoma.",
        summary: {
          reflexionRueckbezug:
            "Herr Nguyen hat am Ende gesagt: 'Danke. Das... war nicht so schlimm. Wie ich dachte.' Das ist der erste Schritt. Und du hast ihn begleitet.",
          kernaussagen: [
            "Stoma-Inspektion: Normalzeichen (rosig, feucht, 1–2 cm prominent) vs. Alarmzeichen (blass, livide, Nekrose)",
            "Beutelwechsel-Ablauf in 8 Schritten — Hygiene + Schutzpaste + Plattenanpassung",
            "Würdeschutz bei Körperbild-Veränderung: Spiegeln statt falscher Trost, Raum lassen, nicht aufdrängen",
            "Angehörigen-Einbezug als Entlassungsmanagement — Ehefrau Mai als Hauptpflegeperson zuhause",
            "Interkulturelle Kommunikation: Tochter als Übersetzerin (Rollenkonflikt bewusst halten), Augenkontakt beim Patienten",
            "5 Pflegeprobleme priorisieren: Stoma → Dekubitus/Mobilisation → Ernährung → Thrombose → Psychosozial (parallel)",
            "Ernährungs-Assessment post-OP: 440 kcal bei Bedarf 1500–2000 kcal/d = dringendes Defizit",
            "Leckage-Management: Haut zuerst reinigen und trocknen, dann Ursache beurteilen, dann Platte neu anlegen",
            "Stomadokumentation: 9 Pflicht-Elemente für Behandlungskontinuität",
            "SBAR-Übergabe: Stoma-Status + Ernährung + emotionaler Status + offene Punkte",
          ],
        },
      },
    },
  ],
  optionaleSteps: [
    // 6.opt-1 — MC: Was gehört NICHT in den Pflegebericht?
    {
      stepId: "ce02-nguyen-dok-opt1-was-nicht-dokumentieren",
      phase: 6,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "§ 630f BGB — Dokumentationspflicht der Behandelnden",
        "DSGVO Art. 5 — Grundsätze für die Verarbeitung personenbezogener Daten (Datenminimierung, Zweckbindung)",
      ],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-nguyen-dok-dokumentationsfehler",
      tag: "pflege",
      contentC1: {
        title: "Was gehört NICHT in den Pflegebericht?",
        body: "Pflegedokumentation muss sachlich, beobachtungsbasiert und wertfrei sein. Eine der folgenden Optionen gehört NICHT in den Pflegebericht — welche?",
        glossarBegriffe: ["Pflegebericht", "Objektivität"],
      },
      contentB1: {
        title: "Was darf NICHT im Pflegebericht stehen?",
        body: "Eine der Optionen gehört nicht in den Pflegebericht. Welche?",
        glossarBegriffe: ["Pflegebericht"],
      },
      question: {
        fragetext:
          "Was von folgendem gehört NICHT in den Pflegebericht?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Stoma-Farbe und Hautumgebungs-Befund",
            isCorrect: false,
            explanation:
              "Gehört in die Stomadokumentation — und als Zusammenfassung in den Pflegebericht. Klinische Beobachtungen sind Pflicht.",
            explanationB1:
              "Das gehört in die Dokumentation — Beobachtungen zum Stoma müssen aufgeschrieben werden.",
          },
          {
            text: "Dass Linh beim Beutelwechsel als Übersetzerin gedolmetscht hat",
            isCorrect: false,
            explanation:
              "Gehört in den Pflegebericht — als Kontextinformation (Sprachbarriere, Tochter als Dolmetscherin). Relevant für die Folgeschicht, die wissen muss, wie die Kommunikation läuft.",
            explanationB1:
              "Das gehört in den Pflegebericht — die nächste Schicht muss wissen, dass Linh übersetzt.",
          },
          {
            text: "Die persönliche Meinung der Pflegekraft: 'Herr Nguyen ist unmotiviert und will nicht kooperieren'",
            isCorrect: true,
            explanation:
              "Richtig — das ist eine wertende, subjektive Einschätzung ohne Faktenbasis. Pflegedokumentation darf keine persönlichen Meinungen, Wertungen oder Diagnosen enthalten. Korrekt wäre: 'Herr Nguyen hat beim Beutelwechsel weggeschaut und wenig verbale Äußerungen gemacht.' Das ist eine Beobachtung, keine Wertung.",
            explanationB1:
              "Richtig — 'unmotiviert' ist eine Meinung, keine Beobachtung. In den Pflegebericht kommen nur Beobachtungen: Was hat Herr Nguyen getan? Was hat er gesagt?",
          },
          {
            text: "Wann die Ernährungsberaterin angefordert wurde",
            isCorrect: false,
            explanation:
              "Gehört unbedingt in die Dokumentation — mit Datum und Uhrzeit. Nur so ist nachvollziehbar, wann was getan wurde und wer verantwortlich ist.",
            explanationB1:
              "Das gehört in die Dokumentation — mit Datum und Uhrzeit. Die nächste Schicht muss wissen: wurde die Ernährungsberaterin angefordert?",
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
