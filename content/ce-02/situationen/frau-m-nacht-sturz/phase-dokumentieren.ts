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
    "07:08 Uhr. Schwester-Zimmer. Du hast die Tür hinter dir geschlossen, der Lärm vom Stationsflur — Frühstückswagen, ein Klingelruf, Frau Kellers Stimme aus Zimmer 12 — ist nur noch gedämpft. Hier drinnen ist es ruhiger, fast schon leise. Die Schreibtischlampe brennt, der Bildschirm zeigt das offene Pflegedokumentations-System, der Cursor blinkt im leeren Sturzprotokoll-Feld. Auf dem Tisch eine halbvolle Tasse Kaffee, kalt geworden. Es riecht nach altem Drucker, nach den Kekspackungen in der Schublade, nach dem leichten Bohnerwachs des Reinigungsdienstes. Vor dir auf dem Stuhl liegt deine Mappe mit den Notizen der Nacht: Zeiten, Vitalzeichen, NRS-Werte, der SBAR-Anruf, die Hüftprotektor-Entscheidung. Du hast 25 Minuten, bevor du in die Übergabe an die Tagesschicht gehst — und die Tagesschicht wird das hier lesen, vielleicht der Stationsarzt, vielleicht der Sozialdienst, später vielleicht der Anwalt der Familie, falls etwas eskaliert. Was du jetzt schreibst, ist kein 'Bericht über die Nacht'. Es ist Beweis und Lerngrundlage zugleich. Du atmest aus, ziehst die Tastatur näher. Dein Rücken zieht — du sitzt seit gefühlt zwei Tagen, in Wahrheit seit der Übergabe um 06:30. Du erinnerst dich, was Frau Schnell in der Schule gesagt hat: 'Ein gutes Protokoll trennt das Beobachtbare vom Bewertenden. Schreib was war, nicht was du dachtest.' Nicht 'verwirrt' — 'orientiert zu Person, nicht zu Zeit'. Nicht 'sie wollte sich aufdrängen' — 'Patientin äußerte: Ich wollte niemanden stören'. Im Kopf gehst du die neun Pflicht-Elemente durch: Datum und Uhrzeit, Ort, Hergang, Bewusstseinslage, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursachen-Hypothese. Du hörst Frau M. noch leise atmen, irgendwo in deinem Erinnerungsohr, ihre Hand kühl an deiner. Aber jetzt darf das nicht in den Text — jetzt zählen Fakten. Du klickst in das Feld. Der Cursor blinkt weiter. Dein erster Satz ist der wichtigste: Datum, Uhrzeit, Ort, Patient. Nüchtern. Sachlich. Vollständig. Damit deine Kollegin in zwölf Stunden, die nicht dabei war, in 30 Sekunden weiß, was passiert ist — und was als Nächstes zu tun ist.",
  kontextB1:
    "07:08 Uhr. Du bist im Schwesternzimmer. Die Tür ist zu. Der Lärm vom Flur ist leise. Die Schreibtischlampe brennt. Auf dem Bildschirm ist das Sturzprotokoll. Der Cursor blinkt. Auf dem Tisch: kalter Kaffee. Es riecht nach Drucker und Keksen. Vor dir liegt deine Mappe mit Notizen: Zeiten, Vitalzeichen, Schmerzen, Anruf beim Arzt, Hüftprotektor-Gespräch. Du hast 25 Minuten Zeit. Dann ist Übergabe. Die Tagesschicht liest das. Vielleicht der Arzt. Vielleicht der Sozialdienst. Was du jetzt schreibst, ist wichtig. Es ist ein Beweis — und Lerngrundlage. Du atmest aus. Dein Rücken tut weh. Du sitzt seit der Übergabe um 06:30. Du denkst an die Schule. Frau Schnell hat gesagt: 'Schreib, was war. Nicht, was du gedacht hast.' Nicht 'verwirrt' — sondern 'orientiert zu Person, nicht zu Zeit'. Nicht 'sie wollte stören' — sondern 'Patientin sagte: Ich wollte niemanden stören.' Du gehst die 9 Punkte im Kopf durch: 1. Datum + Uhrzeit. 2. Ort. 3. Hergang. 4. Bewusstsein. 5. Vitalzeichen. 6. Verletzungen. 7. Maßnahmen. 8. Wer wurde informiert. 9. Warum ist sie gestürzt. Du hörst Frau M. noch in deinem Kopf atmen. Aber jetzt zählen Fakten. Du klickst ins Feld. Der erste Satz ist wichtig: Datum, Uhrzeit, Ort, Name. Sachlich. Vollständig. Deine Kollegin liest das in 12 Stunden. Sie war nicht dabei. Sie muss in 30 Sekunden verstehen, was war — und was jetzt zu tun ist.",
  kernSteps: [
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
      contentC1: {
        title: "Sturzprotokoll für Frau M.",
        body: "Schreibe das Sturzprotokoll für Frau M. Es soll ca. 120-200 Wörter umfassen. Die KI prüft 9 Pflicht-Elemente (Datum/Uhrzeit, Ort, Hergang, Bewusstseinslage, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursachenhypothese). **Stil**: sachlich, nüchtern, keine Wertungen ('verwirrt' statt 'dement').",
        glossarBegriffe: ["Sturzprotokoll"],
      },
      contentB1: {
        title: "Sturzprotokoll schreiben",
        body: "Schreibe das Sturzprotokoll für Frau M. Ungefähr 120-200 Wörter. Die KI prüft 9 Punkte: Datum+Uhrzeit, Ort, Hergang, Bewusstsein, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursache (Medikament!). **Stil**: sachlich, keine Wertung. Für B1-Schüler: Textbausteine sind einblendbar.",
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
            "Rechtliche Grenzen der Fixierung (§ 1906a BGB) — beidseitige Bettgitter ohne Zustimmung sind verboten und keine Prophylaxe.",
            "Sofortmaßnahmen nach Sturz: Prüfen vor Bewegen. Bei Hüftfraktur-Zeichen (Bein-Verkürzung + Außenrotation): nicht bewegen, Arzt.",
            "Interprofessionelle Kommunikation — SBAR-Anruf strukturiert Übergabe an Arzt. Und: Sturzprophylaxe ist Team-Aufgabe (Cochrane 2023: -24 % Sturzrate).",
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
