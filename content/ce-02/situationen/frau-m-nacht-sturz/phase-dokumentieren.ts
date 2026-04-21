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
    "Die Situation ist akut abgeschlossen, Frau M. stabil. Jetzt: Wie schreibst du so, dass deine Kolleginnen morgen die richtigen Schlüsse ziehen? Das Sturzprotokoll ist rechtlich Pflicht — und klinisch wertvoll. Ein gutes Protokoll enthält 9 Pflicht-Elemente.",
  kontextB1:
    "Frau M. ist stabil. Jetzt schreibst du alles auf. Das Sturzprotokoll ist Pflicht. Es hat 9 wichtige Punkte. Deine Kolleginnen lesen das morgen.",
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
