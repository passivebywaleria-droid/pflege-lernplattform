// CE-02 Situation Baby Emilia — Phase 6: Dokumentieren & Übergabe
// Steps: 3 Kern + 2 Optional · Bloom: B5-B6 · Zeit: ~10-20 Min
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/phase-dokumentieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-emilia-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren & Übergabe vorbereiten",
  titelB1: "Dokumentieren — alles aufschreiben",
  kontext:
    "Es ist 15:30 Uhr, kurz vor Ende des Frühdienstes. Du sitzt am Stationstresen. Schwester Andrea sagt: \"Schreib jetzt alles rein — Verlauf, Bilanz, Beratung der Mutter, Schlaflage. Die Nachtschicht muss wissen wo ihr steht.\" Du öffnest die Dokumentationsmaske. Drei Dinge müssen rein: Trinkprotokoll, Pflegebericht, Beratungsdokumentation.",
  kontextB1:
    "Es ist 15:30 Uhr. Frühdienst fast vorbei. Andrea sagt: \"Schreib jetzt alles auf — Trinken, Windeln, Beratung, Schlaflage. Die Nachtschicht muss das wissen.\" Du öffnest die Dokumentationsmaske. Drei Sachen müssen rein.",
  kernSteps: [
    // ───── Inline-Wissen: Trinkprotokoll ─────
    // Der Begriff wird im nachfolgenden Freetext-Step verwendet, in dem der Schüler
    // ein vollständiges Trinkprotokoll für Emilia schreiben soll.
    {
      stepId: "ce02-emilia-dok-iw-trinkprotokoll",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Hoehl/Kullick 2019 — Gesundheits- und Kinderkrankenpflege, 5. Aufl.",
        "Fiechter/Meier 1981 — Der Pflegeprozess",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-emilia-dok-trinkprotokoll-grundlagen",
      tag: "pflege",
      themaPrimaer: "säuglingspflege",
      themenSekundaer: ["pflegedokumentation"],
      transition: "Jetzt schreibst du selbst das Trinkprotokoll für Emilia — mit allem was dazugehört.",
      contentC1: {
        title: "Trinkprotokoll beim Säugling — was muss rein, was nicht?",
        body: "",
        glossarBegriffe: ["Trinkprotokoll", "Flüssigkeitsbilanz", "Einfuhr", "Ausfuhr"],
      },
      contentB1: {
        title: "Trinkprotokoll — was muss man aufschreiben?",
        body: "",
        glossarBegriffe: ["Trinkprotokoll", "Flüssigkeitsbilanz"],
      },
      inlineWissen: {
        bausteinRef: "trinkprotokoll",
        storyAufhaenger:
          "Andrea sagt: \"Schreib jetzt alles rein — Verlauf, Bilanz, Beratung. Die Nachtschicht muss wissen wo ihr steht.\" Du öffnest die Dokumentationsmaske. Was genau gehört in ein **Trinkprotokoll** beim Säugling — und was nicht?",
        storyAufhaengerB1:
          "Andrea sagt: \"Schreib alles auf.\" Du öffnest die Dokumentation. Was gehört in ein **Trinkprotokoll** für ein Baby?",
        kerntext:
          "Ein **Trinkprotokoll** dokumentiert die Flüssigkeitsaufnahme eines Patienten über einen definierten Zeitraum. Beim Säugling ist es besonders wichtig, weil Dehydratation schnell lebensbedrohlich werden kann.\n\n**Pflicht-Angaben im Trinkprotokoll:**\n\n• **Datum und Dienst** (Früh-/Spät-/Nachtdienst)\n\n• **Trinkmengen mit Uhrzeiten** — beim Stillen geschätzt (1 Stillmahlzeit ≈ 60-80 ml bei 4 Monaten), bei Flasche/Abpumpen gemessen\n\n• **Trinkverhalten:** Wie gut hat der Säugling getrunken? Pause nach 3 Schlucken? Erbrechen?\n\n• **Ausfuhr:** Windelanzahl, Windelgewicht (Nasswindelgewicht minus Trockengewicht = Urinmenge; 1 g ≈ 1 ml)\n\n• **Stuhl:** Farbe, Konsistenz, Häufigkeit (wird dokumentiert, aber nicht in die Flüssigkeitsbilanz einberechnet)\n\n• **Beobachtungen:** Hautturgor, Fontanelle, Mundschleimhaut, Atemfrequenz\n\n• **Fieberverlauf:** Temperaturen mit Uhrzeiten\n\n• **Gesamtbilanz:** Einfuhr minus Ausfuhr = Bilanz (positiv = mehr rein als raus)\n\n**Was NICHT rein gehört:**\n\n• Werturteile: ❌ \"Guter Tag\" oder \"Laura hat sich Mühe gegeben\"\n\n• Meinungen: ❌ \"Emilia scheint es besser zu gehen\"\n\n• Nur Fakten, Zahlen, Zeiten — objektiv und nachprüfbar\n\n**Warum so genau?** Die Nachtschicht muss nahtlos weiterarbeiten können. Wenn du schreibst \"hat gut getrunken\" weiß niemand: 40 ml oder 200 ml? *(Fiechter/Meier 1981; Hoehl/Kullick 2019)*",
        kerntextB1:
          "Ein **Trinkprotokoll** schreibt auf: Wie viel hat das Baby getrunken?\n\n**Was muss rein?**\n\n• **Datum und Dienst** (Frühdienst, Spätdienst...)\n\n• **Wann getrunken?** Uhrzeiten\n\n• **Wie viel getrunken?** In ml (beim Stillen geschätzt: ~60-80 ml pro Mahlzeit)\n\n• **Wie hat es getrunken?** (Gut? Pausen? Erbrechen?)\n\n• **Windeln:** Wie viele? Wie schwer? (1 Gramm = 1 ml Urin)\n\n• **Stuhl:** Farbe und wie weich\n\n• **Beobachtungen:** Haut, Fontanelle, Mund, Atmung\n\n• **Fieber:** Temperaturen mit Uhrzeit\n\n• **Bilanz:** Getrunken minus Urin = Bilanz\n\n**Was NICHT rein gehört:**\n\n• ❌ \"Guter Tag\" — das ist eine Meinung\n\n• ❌ \"Laura hat sich Mühe gegeben\" — das ist ein Werturteil\n\n• Nur Fakten und Zahlen!\n\n**Warum so genau?** Die Nachtschicht muss wissen: Wie viel ml hat Emilia getrunken? Nicht: \"Es war ok.\"",
        faustregel:
          "Trinkprotokoll = Zahlen, Zeiten, keine Meinungen. Die Nachtschicht muss damit weiterarbeiten können.",
        faustregelB1:
          "Trinkprotokoll = Zahlen und Uhrzeiten. Keine Meinungen. Nur Fakten.",
        karteikarte: {
          vorderseite:
            "Andrea sagt: \"Schreib das Trinkprotokoll.\" Was muss in ein Trinkprotokoll beim Säugling — und was nicht?",
          rueckseite:
            "Pflicht: Datum/Dienst, Trinkmengen + Uhrzeiten (Stillen geschätzt ~60-80 ml), Trinkverhalten, Windelanzahl + -gewicht (1g ≈ 1ml), Stuhl (Farbe/Konsistenz), Beobachtungen (Turgor, Fontanelle, Mund, AF), Fieberverlauf, Gesamtbilanz (Einfuhr − Ausfuhr). Verboten: Werturteile, Meinungen. Faustregel: Zahlen, Zeiten, keine Meinungen. (Fiechter/Meier 1981; Hoehl/Kullick 2019)",
        },
      },
    },

    // Step 6.1 — Freetext (LANG): Trinkprotokoll
    {
      stepId: "ce02-emilia-dok-01-trinkprotokoll-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019", "Fiechter/Meier 1981"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-dok-trinkprotokoll",
      tag: "pflege",
      contentC1: {
        title: "Trinkprotokoll Frühdienst — Emilia K.",
        body: "Schreibe das Trinkprotokoll für Emilia für den Frühdienst. Dein Text soll enthalten:\n\n- Datum + Dienst\n- Trinkmengen und Uhrzeiten\n- Windelanzahl und Gewicht (soweit dokumentiert)\n- Beobachtungen (Turgor, Fontanelle, Atemfrequenz)\n- Fieberverlauf\n- Gesamtbilanz und kurze Einschätzung des Verlaufs\n\nDas Protokoll muss vollständig, objektiv und ohne Wertungen geschrieben sein. Nicht: 'guter Tag' oder 'Laura war fleißig'. Nur: Fakten, Zahlen, Zeiten.",
        glossarBegriffe: ["Trinkprotokoll", "Flüssigkeitsbilanz"],
      },
      contentB1: {
        title: "Trinkprotokoll schreiben",
        body: "Schreibe das Trinkprotokoll für Emilia für heute Morgen bis Nachmittag. Diese Punkte müssen drin sein:\n\n- Datum und Dienst (Frühdienst)\n- Wann hat Emilia getrunken? Wie viel?\n- Wie viele nasse Windeln?\n- Wie ist Emilias Zustand? (Turgor, Fontanelle, Atemfrequenz)\n- Fieber — wie hat es sich verändert?\n- Gesamt-Bilanz: Wie viel getrunken, wie viel Urin?\n\nNur Fakten und Zahlen. Keine Wertungen.",
        glossarBegriffe: ["Trinkprotokoll"],
      },
      question: {
        fragetext:
          "Schreibe das Trinkprotokoll für Emilia K. für den Frühdienst (ca. 100-150 Wörter).",
        musterantwort:
          "23.04.2026, Frühdienst, 07:30-15:30 Uhr.\n\nEmilia K., 4 Monate, Zimmer 8. Diagnose: Bronchiolitis RSV, Tag 1.\n\nTrinkmengen: 07:45 Uhr Ansetzen nach Nasenpflege — ca. 40 ml (2 Versuche). 10:30 Uhr nach Bad — ca. 50 ml. 14:00 Uhr — ca. 55 ml. Gesamt Einfuhr: ~145 ml (geschätzt, gestillt).\n\nWindeln: 5 Wechsel insgesamt (08:00, 09:30, 11:00, 13:30, 15:00 Uhr — die 5. Windel um 15:00 Uhr erreichte das Tagesziel), Nass-Überschuss: 25 g, 30 g, 20 g, 40 g, 28 g = 143 g = ca. 143 ml Urin. Stuhl: 1× gelblich-pastös 09:30 Uhr (nicht bilanziert).\n\nFlüssigkeitsbilanz: +2 ml (145 ml − 143 ml). Tages-Ziel 5 nasse Windeln: erreicht (5. Windel um 15:00 Uhr).\n\nBeobachtungen: Hautturgor erhalten. Fontanelle flach. Atemfrequenz 50/min, keine Einziehungen. Fieber 07:30 Uhr 38,2 °C, 14:00 Uhr 37,6 °C (leicht rückläufig). Verlauf: Trinkmenge verbessert sich. Maßnahmen wirksam.",
        bewertungskriterien: [
          "Datum und Dienst vorhanden",
          "Trinkmengen mit Uhrzeiten dokumentiert",
          "Windelanzahl oder Windelgewicht genannt",
          "Bilanz-Zahl berechnet oder angesprochen",
          "Kein Werturteil ('guter Tag', 'Laura war toll')",
          "Einheit ml und g verwendet",
          "Kurze Verlaufseinschätzung am Ende",
        ],
      },
    },

    // Step 6.2 — Freetext (MITTEL): Beratungsdokumentation
    {
      stepId: "ce02-emilia-dok-02-beratungsdoku-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-dok-beratung",
      tag: "pflege",
      contentC1: {
        title: "Beratungsdokumentation — Mutter Laura K.",
        body: "Dokumentiere das Beratungsgespräch mit Laura K. in 2-3 Sätzen. Was wurde besprochen? Welche Information hat sie erhalten? Wie hat sie reagiert?\n\nWichtig: Kein Werturteil über Laura als Person oder Mutter. Nur Beobachtungen.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Beratung dokumentieren",
        body: "Schreibe 2-3 Sätze über das Beratungsgespräch mit Laura. Was hast du ihr erklärt? Wie hat sie reagiert?\n\nKein Werturteil: Nicht 'Laura ist eine gute Mutter'. Nur: Was wurde gesagt, was hat sie getan.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Dokumentiere das Beratungsgespräch mit Mutter Laura K. in 2-3 Sätzen.",
        musterantwort:
          "Beratungsgespräch am 23.04.2026, 08:15 Uhr. Themen: Trinkschwäche bei Bronchiolitis (Zusammenhang Nasenatmung und Saugen erklärt), Muttermilch bei RSV weiter empfohlen (WHO 2023), Nasenpflege vor Stillmahlzeiten (Technik demonstriert), Schlafposition Rückenlage (SIDS-Prävention AAP 2022), Schlaflage ohne Kissen und Kuscheltier. Mutter hat Inhalte verstanden und Fragen zum Stillen gestellt. Nasenpflege beim nächsten Stillversuch selbstständig angewendet.",
        bewertungskriterien: [
          "Datum und Uhrzeit vorhanden",
          "Besprochene Themen genannt (Stillen, Nase, Schlafposition)",
          "Reaktion der Mutter dokumentiert (Fragen, Verständnis, Umsetzung)",
          "Kein Werturteil über Laura als Mutter",
          "Objektiver Beobachtungsstil",
        ],
        satzanfaengeB1: [
          "Beratungsgespräch am... Themen: ...",
          "Mutter hat erhalten: Information zu...",
          "Mutter hat ... angewendet / bestätigt / gefragt...",
        ],
      },
    },

    // Step 6.3 — Summary: Session-Zusammenfassung
    {
      stepId: "ce02-emilia-dok-03-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter/Meier 1981",
        "Hoehl/Kullick 2019",
        "AAP 2022",
        "WHO 2023",
      ],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-emilia-dok-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Was du heute gelernt hast",
        body: "Session-Abschluss",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Das hast du heute gelernt",
        body: "Session-Abschluss",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Session-Zusammenfassung",
        summary: {
          reflexionRueckbezug:
            "Du hast heute den Pflegeprozess von Phase 1 bis Phase 6 mit Baby Emilia und Mutter Laura durchlebt — mit echten Entscheidungen, einer emotionalen Komplikation und einer vollständigen Dokumentation. Das ist Pflege.",
          kernaussagen: [
            "Bronchiolitis und obligate Nasenatmung: Trinkschwäche entsteht durch Saugen-Atmen-Konflikt — nicht durch die Milch.",
            "Flüssigkeitsbilanz beim Säugling: Einfuhr (geschätzt/gemessen) minus Ausfuhr (Windeln wiegen) = Bilanz.",
            "Infant Handling: Kopf immer halten, Haltearm ruhig, Bewegungen ankündigen, von oben nach unten reinigen.",
            "SIDS-Prävention: Rückenlage immer — auch bei Bronchiolitis, auch bei Schnupfen, keine Ausnahme ohne Arzt.",
            "Beratung erschöpfter Mütter: Zuhören kommt vor Informieren. Handlungskompetenz zurückgeben (empowern) statt Übernahme.",
            "Emotionale Komplikation: Bei Tränen — zuerst Raum halten und validieren. Nicht entwerten. Dann konkrete Angebote.",
            "Dokumentation: Fakten und Zahlen, Uhrzeiten, keine Werturteile, Bilanz-Zahl, Reaktion der Mutter.",
          ],
        },
      },
    },
  ],
  optionaleSteps: [
    // Step 6.4 — Freetext (kurz): SBAR-Übergabe formulieren
    {
      stepId: "ce02-emilia-dok-opt-sbar-uebergabe-formulieren",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-dok-sbar-uebergabe",
      tag: "pflege",
      contentC1: {
        title: "SBAR-Übergabe an die Spätschicht",
        body: "Formuliere die mündliche SBAR-Übergabe an die Spätschicht in 3-4 Sätzen.",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "Übergabe an die Spätschicht",
        body: "Formuliere die Übergabe an die Spätschicht in 3-4 Sätzen nach SBAR.",
        glossarBegriffe: ["SBAR"],
      },
      question: {
        fragetext:
          "Formuliere die mündliche SBAR-Übergabe an die Spätschicht (3-4 Sätze).",
        musterantwort:
          "S: Baby Emilia K., 4 Monate, Bronchiolitis RSV, Tag 1 stationär, Zimmer 8. B: Trinkschwäche durch Nasenatmungs-Behinderung, Mutter Laura stillt, allein erziehend, schläft gerade. A: Trinkmenge hat sich verbessert (145 ml Frühdienst), 5 nasse Windeln erreicht, Fieber rückläufig 38,2 °C → 37,6 °C, Turgor erhalten, keine Einziehungen. R: Weiter engmaschig bilanzieren (Ziel 5 Windeln/Tag), Nasenpflege vor Stillmahlzeiten, Laura bei Aufwachen nicht stören — Schlaf ist priorisiert. Arzt informieren wenn Verschlechterung.",
        bewertungskriterien: [
          "S: Patient, Diagnose, Tag",
          "B: Kontext (Trinkschwäche, Stillen, Mutter)",
          "A: Aktueller Status (Trinkmenge, Windeln, Fieber, Turgor)",
          "R: Nächste Schritte (Bilanz, Nasenpflege, Eskalation)",
        ],
        satzanfaengeB1: [
          "S: Emilia K., 4 Monate, Bronchiolitis RSV, Zimmer 8.",
          "B: Trinkschwäche wegen Nase. Mutter stillt.",
          "A: Trinkmenge besser. Fieber weniger.",
          "R: Weiter bilanzieren. Nasenpflege vor Stillen.",
        ],
      },
    },

    // Step 6.5 — Timeline: Pflegeprozess als Zeitstrahl
    {
      stepId: "ce02-emilia-dok-opt-pflegeprozess-zeitstrahl",
      phase: 6,
      stepType: "timeline",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-dok-zeitstrahl",
      tag: "pflege",
      contentC1: {
        title: "Dein heutiger Tag als Pflegeprozess",
        body: "Der Pflegeprozess als Zeitstrahl — alle 6 Phasen die du heute mit Emilia durchlebt hast.",
        glossarBegriffe: ["Pflegeprozess"],
      },
      contentB1: {
        title: "Der heutige Tag als Pflegeprozess",
        body: "Schau: So lief der Pflegeprozess heute ab.",
        glossarBegriffe: ["Pflegeprozess"],
      },
      question: {
        fragetext:
          "Der Pflegeprozess als Zeitstrahl — alle 6 Phasen mit Emilia heute.",
        timeline: {
          instruction:
            "So hat sich der Pflegeprozess heute über den Frühdienst verteilt.",
          events: [
            {
              id: "t1",
              time: "07:45 Uhr",
              title: "Phase 1 — Informieren",
              description:
                "Übergabe lesen, Aufnahmegespräch mit Laura, Stillen-Frage klären",
              highlight: false,
            },
            {
              id: "t2",
              time: "08:30 Uhr",
              title: "Phase 2 — Beobachten",
              description:
                "Hautturgor, Windeln, Trinkverhalten beobachten, Temperatur messen",
              highlight: false,
            },
            {
              id: "t3",
              time: "09:30 Uhr",
              title: "Phase 3 — Planen",
              description:
                "Pflegeziele formulieren, Flüssigkeitsbilanz-Konzept, Maßnahmen-Matrix, SIDS-Prävention",
              highlight: false,
            },
            {
              id: "t4",
              time: "10:00–11:30 Uhr",
              title: "Phase 4 — Durchführen",
              description:
                "Säuglingsbad mit Anleitung, Wickeln, Laura weint — emotionale Begleitung",
              highlight: true,
            },
            {
              id: "t5",
              time: "14:00 Uhr",
              title: "Phase 5 — Evaluieren",
              description:
                "Maßnahmen-Wirksamkeit prüfen, Lauras Satz, Anpassungsbedarf für die Nacht",
              highlight: false,
            },
            {
              id: "t6",
              time: "15:30 Uhr",
              title: "Phase 6 — Dokumentieren",
              description:
                "Trinkprotokoll, Beratungsdoku, Übergabe — Nachtschicht kann nahtlos weiterarbeiten",
              highlight: false,
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 15,
};
