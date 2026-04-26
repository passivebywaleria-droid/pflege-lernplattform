// CE-02 Situation Kovač — Phase 6: Dokumentieren — Ambulante Pflegedoku, Verweigerung
// Steps: 4 · Bloom: B5-B6 · Zeit: ~15-25 Min
// Quelle: phase-dokumentieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren — rechtssicher und vollständig",
  titelB1: "Aufschreiben was wichtig ist",
  kontext:
    "Du verlässt Frau Kovačs Wohnung nach dem Abendbesuch. Im Pflegedienstwagen öffnest du das Dokumentationssystem auf dem Tablet. Heute gab es viel zu dokumentieren: Atemübungen mit Kurzatmigkeit, Datenschutzgespräch mit Sohn, Trinkprotokoll, Schlafhygiene-Gespräch — und die Verweigerung der Kompressionsstrümpfe. Letzteres ist das Heikelste. Es muss vollständig sein, damit alle Kolleginnen wissen: Sie wurde aufgeklärt. Sie hat abgelehnt. Das ist ihr Recht. Und wenn morgen eine Thrombose auftritt — niemand hat geschwiegen.",
  kontextB1:
    "Du fährst zum Auto. Du öffnest das Tablet. Du musst jetzt aufschreiben was heute passiert ist. Das Wichtigste: die Verweigerung der Kompressionsstrümpfe. Das muss vollständig und richtig aufgeschrieben sein — damit alle Kolleginnen morgen wissen was sie wissen müssen.",
  kernSteps: [
    // Step 6.1 — Vergleich ambulant vs. stationär Doku
    {
      stepId: "ce02-kovac-dok-01-ambulant-vs-stationaer-doku",
      phase: 6,
      stepType: "comparison",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB", "DSGVO 2018"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-dok-ambulante-doku",
      tag: "pflege",
      contentC1: {
        title: "Ambulante vs. stationäre Dokumentation",
        body: "Dokumentation ist in beiden Settings Pflicht — aber sie sieht anders aus. Und nach dem Vergleich: Was muss in JEDER ambulanten Besuchsdokumentation stehen?",
        glossarBegriffe: [
          "Pflegedokumentation",
          "Besuchsbericht",
          "§ 630f BGB",
        ],
      },
      contentB1: {
        title: "Ambulant und stationär dokumentieren — was ist anders?",
        body: "Wie dokumentiert man in der ambulanten Pflege? Was muss immer drinstehen? Vergleiche — und beantworte die Frage am Ende.",
        glossarBegriffe: ["Pflegedokumentation", "Besuchsbericht"],
      },
      question: {
        fragetext:
          "Vergleiche die Dokumentation — und beantworte: Was muss in JEDER ambulanten Besuchsdokumentation stehen?",
        comparison: {
          instruction:
            "Vergleiche ambulante und stationäre Pflegedokumentation.",
          columns: [
            { label: "Stationäre Pflege" },
            { label: "Ambulante Pflege (Frau Kovač)" },
          ],
          rows: [
            {
              criterion: "Umfang",
              values: [
                "Ausführlich — mehrere Berufsgruppen lesen mit, Visitendoku, Pflegeplanung digital",
                "Kürzer und strukturierter — Berichtsblatt pro Besuch, oft handschriftlich ergänzt",
              ],
              valuesB1: [
                "Ausführlich — viele lesen es",
                "Kürzer — ein Zettel pro Besuch",
              ],
            },
            {
              criterion: "Ort der Dokumentation",
              values: [
                "Am Patientenbett oder Schreibtisch, sofort nach Maßnahme",
                "Oft im Auto nach dem Besuch, auf Tablet oder Papier",
              ],
              valuesB1: [
                "Am Bett oder am Schreibtisch",
                "Im Auto nach dem Besuch",
              ],
            },
            {
              criterion: "Zeitdruck",
              values: [
                "Teil des Arbeitsalltags — Zeit eingeplant",
                "Muss in Fahrzeit zwischen Besuchen erledigt werden",
              ],
              valuesB1: [
                "Zeit ist eingeplant",
                "Muss zwischen zwei Besuchen fertig sein",
              ],
              highlight: 1,
            },
            {
              criterion: "Rechtliche Grundlage",
              values: [
                "§ 630f BGB — Dokumentationspflicht für Behandelnde",
                "§ 630f BGB gilt auch für ambulante Pflege — keine Ausnahme",
              ],
              valuesB1: [
                "§ 630f BGB — Dokumentationspflicht",
                "§ 630f BGB gilt auch ambulant",
              ],
            },
          ],
        },
      },
      wusstestDuDas:
        "§ 630f BGB schreibt vor: Jede Behandlungsmaßnahme ist zeitnah zu dokumentieren. 'Zeitnah' bedeutet: am selben Tag, nicht eine Woche später. Im ambulanten Setting ist das Auto oft das Büro.",
    },

    // Step 6.2 — Verweigerungs-Doku erklärt (text)
    {
      stepId: "ce02-kovac-dok-02-verweigerung-doku-erklaert",
      phase: 6,
      stepType: "text",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 630f BGB", "§ 1901a BGB", "§ 630d BGB"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-dok-verweigerung",
      tag: "pflege",
      displayFormat: "checklist",
      contentC1: {
        title: "Verweigerung dokumentieren — drei Pflicht-Elemente",
        body: "Wenn eine Patientin eine Pflegemaßnahme ablehnt, ist die Dokumentation keine Formsache — sie ist rechtliche Absicherung für die Pflegekraft und Respekt vor der Patientenwürde. Drei Elemente müssen zwingend drin sein:\n\n✓ **WAS wurde angeboten und erklärt**\nNicht nur 'Kompressionsstrümpfe abgelehnt'. Sondern: 'Kompressionsstrümpfe wurden empfohlen und Aufklärung über das erhöhte Thromboserisiko bei Herzinsuffizienz, Immobilität und fehlender Mobilisation wurde durchgeführt. Unterschied zwischen ASS-Wirkung und Kompressionstherapie wurde erklärt.'\n\n✓ **WIE wurde aufgeklärt**\n'Mündlich durch Pflegekraft X am [Datum], in verständlicher Sprache, Rückfragen wurden beantwortet.'\n\n✓ **WIE hat die Patientin entschieden**\nWörtliches Zitat wenn möglich: 'Patientin äußerte: Ich brauch keine Strümpfe, ich hab doch die Tabletten. Bewusste, freiwillige Ablehnung der Maßnahme nach vollständiger Aufklärung.'\n\nQuelle: (§ 630f BGB; § 1901a BGB; § 630d BGB)",
        fallbezug:
          "Heute ist die dritte Woche in Folge, in der Frau Kovač die Kompressionsstrümpfe ablehnt. Jede Verweigerung muss neu dokumentiert werden — nicht 'wie immer'. Eine Dokumentation von vor 3 Wochen schützt dich heute nicht.",
        glossarBegriffe: [
          "Verweigerungsdokumentation",
          "Patientenautonomie",
          "§ 630f BGB",
          "Aufklärungspflicht",
        ],
      },
      contentB1: {
        title: "Wie schreibt man eine Verweigerung richtig auf?",
        body: "Frau Kovač sagt Nein zu den Kompressionsstrümpfen. Das ist ihr Recht. Du musst es richtig aufschreiben. Es gibt 3 Teile:\n\n✓ **WAS hast du angeboten und erklärt?**\nNicht nur 'Strümpfe abgelehnt'. Sondern: Was hast du ihr erklärt? Warum sind die Strümpfe wichtig? Das muss drinstehen.\n\n✓ **WIE hast du aufgeklärt?**\nMündlich, heute, von dir. In verständlicher Sprache. Sie konnte Fragen stellen.\n\n✓ **Was hat die Patientin gesagt?**\nWörtlich wenn möglich: 'Ich brauch keine Strümpfe, ich hab doch die Tabletten.' Das zeigt: Sie hat bewusst Nein gesagt. Es war ihre freie Entscheidung.\n\nGesetze: § 630f BGB (Dokumentationspflicht), § 1901a BGB (Selbstbestimmungsrecht).",
        glossarBegriffe: [
          "Verweigerungsdokumentation",
          "Aufklärungspflicht",
          "§ 630f BGB",
        ],
      },
    },

    // Step 6.3 — Haupt-Freitext Besuchsbericht
    {
      stepId: "ce02-kovac-dok-03-doku-freitext",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: [
        "§ 630f BGB",
        "§ 1901a BGB",
        "DSGVO 2018 Art. 4 + Art. 9",
        "DNQP Kontinenzförderung 2014",
        "GOLD-Report COPD 2023",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-kovac-ambulant-dok-besuchsbericht",
      tag: "pflege",
      contentC1: {
        title: "Schreibe den Besuchsbericht",
        body: "Schreibe den Besuchsbericht für den heutigen Morgenbesuch (07:30–08:15 Uhr). Dein Bericht muss enthalten:\n\n1. Datum und Uhrzeit des Besuchs\n2. Durchgeführte Maßnahmen (Atemübungen, Bewegungsübungen, Trinkgespräch)\n3. Beobachtungen: Atmung, Gelenke, Trinkmenge\n4. Komplikation: Kurzatmigkeit nach 4 Atemübungen — was hast du getan?\n5. Datenschutzgespräch mit Sohn Darko Kovač\n6. Verweigerung Kompressionsstrümpfe: vollständig mit allen drei Elementen (Was erklärt? Wie aufgeklärt? Wie entschieden?)",
        glossarBegriffe: ["Besuchsbericht", "Pflegedokumentation"],
      },
      contentB1: {
        title: "Schreibe den Besuchsbericht",
        body: "Schreibe auf, was heute Morgen passiert ist. Nutze die Textbausteine wenn du Hilfe brauchst.\n\nDein Bericht soll enthalten:\n- Datum und Uhrzeit\n- Was hast du gemacht? (Atem-Übungen, Bewegungs-Übungen, Trinken besprochen)\n- Was hast du beobachtet? (Atmung, Knie, Trinkprotokoll)\n- Was war die Komplikation? (Atemnot — was hast du getan?)\n- Das Gespräch mit Sohn Darko am Telefon\n- Die Ablehnung der Kompressionsstrümpfe (vollständig!)",
        glossarBegriffe: ["Besuchsbericht"],
      },
      question: {
        fragetext:
          "Schreibe den Besuchsbericht für den Morgenbesuch bei Frau Kovač (07:30–08:15 Uhr). Umfang: 80–120 Wörter.",
        musterantwort:
          "07:30–08:15 Uhr, Morgenbesuch bei Frau Kovač, Marija, geb. 14.03.1942. Übergabe gelesen (Petra): Trinkmenge 820 ml, 4 Tage kein Stuhlgang, Kompressionsstrümpfe verweigert. Wohnungscheck: Teppich vor Sessel als Stolperfalle angesprochen. Trinkprotokoll besprochen, 3 Becher à 200 ml auf Küchentisch bereitgestellt, Tagesziel 1.200 ml vereinbart. Atemübungen mit Lippenbremse durchgeführt — nach 4 Wiederholungen Kurzatmigkeit (AF ca. 22/Min, Lippenzyanose sichtbar). Übung gestoppt, Fenster geöffnet, Frau Kovač in Ruheposition — Besserung nach 3 Min, kein Notarzt nötig. Während Bewegungsübungen: Anruf Sohn Darko Kovač — keine Gesundheitsdaten weitergegeben, Hinweis auf Pflegedienstkontakt für schriftliche Einwilligung. Kompressionsstrümpfe: Aufklärung über Thromboserisiko bei Herzinsuffizienz und Immobilität durchgeführt, Unterschied ASS/Kompressionstherapie erklärt, mündlich, patientengerecht, Rückfragen ermöglicht. Frau Kovač äußerte: 'Ich brauch keine Strümpfe, ich hab doch die Tabletten.' Bewusste, freiwillige Ablehnung nach vollständiger Aufklärung. Schlafgespräch heute Abend angekündigt.",
        bewertungskriterien: [
          "Datum und Uhrzeit vorhanden",
          "Maßnahmen konkret genannt",
          "Komplikation (Kurzatmigkeit) mit Reaktion dokumentiert",
          "Datenschutzgespräch Sohn erwähnt",
          "Verweigerungs-Doku vollständig: Was erklärt? Wie aufgeklärt? Was hat sie gesagt?",
          "Sprache objektiv-sachlich (kein 'stur', kein 'uneinsichtig')",
          "Keine wertenden Formulierungen über Frau Kovač",
        ],
        satzanfaengeB1: [
          "07:30 Uhr — Morgenbesuch begonnen.",
          "Atemübungen durchgeführt.",
          "Nach [Anzahl] Wiederholungen ...",
          "Kompressionsstrümpfe: Es wurde erklärt, dass ...",
          "Frau Kovač äußerte: ...",
          "Entscheidung von Frau Kovač: ...",
          "Anruf Sohn: keine Daten weitergegeben, weil ...",
        ],
      },
    },

    // Step 6.4 — Summary
    {
      stepId: "ce02-kovac-dok-04-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "GOLD-Report COPD 2023",
        "DNQP Kontinenzförderung 2014",
        "§ 630f BGB",
        "§ 1901a BGB",
        "DSGVO 2018",
      ],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-kovac-ambulant-dok-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Was du heute gelernt hast",
        body: "Ein Tag bei Frau Kovač — ambulante Pflege in der Tiefe.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Das hast du heute gelernt",
        body: "Ein Tag mit Frau Kovač — was hast du mitgenommen?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Zusammenfassung des Lernens",
        summary: {
          reflexionRueckbezug:
            "Du hast heute einen vollständigen ambulanten Pflegetag bei Frau Marija Kovač begleitet — von der Übergabe um 07:30 Uhr bis zum Besuchsbericht nach dem Abendbesuch. Frau Kovač hat die Übungen zweimal allein wiederholt. Das Schlafgespräch ist eröffnet. Die Kompressionsstrümpfe liegen noch. Evaluation heißt nicht: alles gelöst. Es heißt: du weißt was noch fehlt.",
          kernaussagen: [
            "Atembeobachtung bei COPD III: 7 systematische Punkte — Atemfrequenz, Lippenbremse, Atemhilfsmuskulatur, Atemgeräusche, Sputum-Farbe, Körperhaltung, SpO2 (88–92 % Zielkorridor bei COPD)",
            "Patientenautonomie und Aufklärungspflicht: Aufklärung ist Pflicht — Erzwingen ist verboten — Dokumentieren ist notwendig (§ 630d BGB, § 1901a BGB, § 630f BGB)",
            "Verweigerungs-Dokumentation: 3 Pflicht-Elemente — Was erklärt? Wie aufgeklärt? Was hat die Patientin gesagt?",
            "Datenschutz in der ambulanten Pflege: Keine Weitergabe von Gesundheitsdaten ohne schriftliche Schweigepflichtsentbindung — auch nicht an Angehörige (DSGVO Art. 9, § 203 StGB)",
            "Ambulante vs. stationäre Pflege: allein, 45 Min, Patientenwohnung, keine 24h-Beobachtung, lückenhafte Protokolle als Informationsgrundlage",
            "Motivierende Gesprächsführung: Hindernis anerkennen — Lösung anbieten — Vereinbarung von der Patientin kommen lassen",
          ],
        },
      },
      wusstestDuDas:
        "Frau Kovač hat morgen früh wieder Besuch. Kollegin Petra liest deinen Bericht von heute. Wenn dein Bericht vollständig ist, kann sie genau da weitermachen wo du aufgehört hast — ohne Lücken, ohne Missverständnisse. Das ist der Sinn professioneller Dokumentation.",
    },
  ],
  optionaleSteps: [
    // Opt-6.A — § 630f BGB in einfacher Sprache
    {
      stepId: "ce02-kovac-dok-opt-a-paragraph-b1",
      phase: 6,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "quote",
      contentC1: {
        title: "§ 630f BGB — was steht da?",
        body: "_„Der Behandelnde ist verpflichtet, zum Zweck der Dokumentation in unmittelbarem zeitlichem Zusammenhang mit der Behandlung eine Patientenakte in Papierform oder elektronisch zu führen.“_\n\n§ 630f BGB schreibt vor:\n- Dokumentation ist Pflicht (kein 'ich habs im Kopf')\n- Zeitnah — am selben Tag\n- Jede Maßnahme, jede Besonderheit, jede Verweigerung\n- Aufbewahrungspflicht: 10 Jahre",
        glossarBegriffe: ["§ 630f BGB", "Dokumentationspflicht", "Patientenakte"],
      },
      contentB1: {
        title: "Was sagt § 630f BGB?",
        body: "§ 630f BGB sagt:\n\n_'Wer pflegt oder behandelt, muss aufschreiben was er tut — so schnell wie möglich nach dem Besuch.'_\n\nDas bedeutet:\n- Aufschreiben ist Pflicht\n- Am selben Tag — nicht später\n- Jede Maßnahme, jede Besonderheit\n- Auch: wenn jemand Nein sagt\n- Aufbewahren: 10 Jahre",
        glossarBegriffe: ["§ 630f BGB", "Dokumentationspflicht"],
      },
    },
    // Opt-6.B — Fehlerspot schlechter Eintrag
    {
      stepId: "ce02-kovac-dok-opt-b-errorspot",
      phase: 6,
      stepType: "errorspot",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB"],
      track: "vertiefung",
      modus: "puzzle",
      tag: "pflege",
      contentC1: {
        title: "Fehler finden — schlechte Dokumentation",
        body: "Markiere alle Probleme in diesem fehlerhaften Besuchsbericht.",
        glossarBegriffe: ["Dokumentationspflicht", "Verweigerungsdokumentation"],
      },
      contentB1: {
        title: "Was ist in diesem Bericht falsch?",
        body: "Dieser Bericht ist schlecht. Markiere was falsch oder unvollständig ist.",
        glossarBegriffe: ["Dokumentationspflicht"],
      },
      question: {
        fragetext:
          "Markiere alle Probleme in diesem fehlerhaften Besuchsbericht.",
        errorspot: {
          instruction:
            "Markiere alle Stellen die falsch, unvollständig oder wertend sind.",
          text: "Frau K. trinkt zu wenig, ist stur wegen Strümpfe. Atemübung gemacht. War ok.",
          errors: [
            {
              start: 0,
              end: 7,
              correction: "Frau Kovač, Marija — geb. 14.03.1942",
              explanation:
                "Kein vollständiger Name. Dokumentation muss den Patienten eindeutig identifizieren (§ 630f BGB Abs. 2).",
              explanationB1:
                "Kein vollständiger Name. Du musst immer den vollen Namen + Geburtsdatum schreiben.",
            },
            {
              start: 8,
              end: 23,
              correction: "Trinkmenge gestern: 800 ml (Trinkprotokoll) — Ziel 1.200 ml vereinbart",
              explanation:
                "Zu wenig Information. Keine konkrete Trinkmenge, kein Zielwert, keine Maßnahme.",
              explanationB1:
                "Zu wenig. Wie viel hat sie getrunken? Was ist das Ziel? Was hast du gemacht?",
            },
            {
              start: 29,
              end: 33,
              correction: "verweigert — Aufklärung durchgeführt",
              explanation:
                "'Stur' ist eine wertende Formulierung — nicht erlaubt. Pflegedokumentation ist objektiv-sachlich. Außerdem fehlt die vollständige Verweigerungs-Doku (Was erklärt? Wie aufgeklärt? Was hat sie gesagt?).",
              explanationB1:
                "'Stur' ist ein wertendes Wort — das ist nicht erlaubt. Außerdem fehlt alles zur Verweigerung: Was hast du erklärt? Was hat sie gesagt?",
            },
            {
              start: 50,
              end: 67,
              correction:
                "Atemübungen mit Lippenbremse, 4 Wiederholungen. Komplikation: Kurzatmigkeit (AF ca. 22/Min, Lippenzyanose) — Übung abgebrochen, Fenster geöffnet, Besserung nach 3 Min",
              explanation:
                "Viel zu wenig. Keine Beschreibung der Komplikation, keine Reaktion, kein Ergebnis. Bei einer COPD-Komplikation gehört alles in den Bericht.",
              explanationB1:
                "Zu wenig. Was ist mit der Atmung passiert? Was hast du gemacht? Das fehlt alles.",
            },
            {
              start: 69,
              end: 75,
              correction: "Zustand nach Übungsunterbrechung gebessert, kein Notaruf nötig",
              explanation:
                "'War ok' ist keine Pflegedokumentation. Es ist keine Fachsprache und enthält keine klinische Information.",
              explanationB1:
                "'War ok' ist keine gute Dokumentation. Was bedeutet 'ok'? Schreibe es konkret auf.",
            },
          ],
        },
      },
    },
    // Opt-6.C — Reflexion Haftung und Verantwortung
    {
      stepId: "ce02-kovac-dok-opt-c-reflexion",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "V.1",
      quellen: ["§ 630f BGB", "§ 1901a BGB"],
      track: "vertiefung",
      modus: "schreibtisch",
      tag: "pflege",
      contentC1: {
        title: "Wenn du es nicht dokumentierst...",
        body: "Reflexionsfrage für Fortgeschrittene.",
        glossarBegriffe: ["Haftung", "Dokumentationspflicht"],
      },
      contentB1: {
        title: "Was wäre wenn...",
        body: "Stell dir vor: Du hast die Verweigerung nicht aufgeschrieben.",
        glossarBegriffe: ["Dokumentationspflicht"],
      },
      question: {
        fragetext:
          "Was wäre die professionelle Konsequenz, wenn du die Verweigerung der Kompressionsstrümpfe nicht dokumentierst — und drei Tage später entwickelt Frau Kovač eine tiefe Beinvenenthrombose?",
        musterantwort:
          "Ohne Dokumentation fehlt der Nachweis, dass Aufklärung stattgefunden hat. Der Pflegedienst kann haftbar werden wegen Dokumentationspflichtverletzung (§ 630f BGB) und ggf. wegen unterlassener Aufklärung (§ 630d BGB). Frau Kovačs Entscheidungsrecht bleibt zwar bestehen — aber die Pflegekraft kann nicht beweisen, dass sie ihrer Aufklärungspflicht nachgekommen ist. Bei Gericht gilt: Was nicht dokumentiert ist, hat nicht stattgefunden.",
        bewertungskriterien: [
          "Haftungsrisiko für Pflegekraft/Pflegedienst erwähnt",
          "§ 630f BGB als rechtliche Grundlage genannt oder sinngemäß",
          "Prinzip 'Nicht dokumentiert = nicht stattgefunden' erwähnt",
          "Bezug auf Frau Kovačs Fall",
        ],
        satzanfaengeB1: [
          "Wenn ich es nicht aufschreibe ...",
          "Das Problem wäre ...",
          "Für den Pflegedienst bedeutet das ...",
          "Das Gesetz sagt: ...",
        ],
      },
    },
  ],
  geschaetzteDauer: 20,
};
