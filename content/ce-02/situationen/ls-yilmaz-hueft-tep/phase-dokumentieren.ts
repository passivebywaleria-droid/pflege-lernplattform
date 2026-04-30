// CE-02 Situation Frau Yilmaz — Phase 6: Dokumentieren
// Steps: 3 Kern + 1 Optional · Bloom: B5–B6 · Zeit: ~20–30 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-hueft-tep/phase-dokumentieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_HUEFT_TEP_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-yilmaz-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren — Abschluss",
  titelB1: "Alles aufschreiben",
  kontext:
    "Es ist 16:15 Uhr. Übergabe beginnt in 45 Minuten. Du setzt dich an den Computer auf dem Stationszimmer. Was heute mit Frau Yilmaz passiert ist, muss in drei Bereichen dokumentiert werden: 1. Pflegebericht — was hast du beobachtet und gemacht? 2. Pflegeplan — welche Pflegeziele sind aktiv, welche Maßnahmen laufen? 3. Übergabe — was muss das Spätdienst-Team wissen? Das ist kein Formalismus. Was du hier schreibst, entscheidet, ob das Team morgen die Druckstelle weiter beobachtet — oder vergisst.",
  kontextB1:
    "Es ist 16:15 Uhr. Übergabe in 45 Minuten. Du sitzt am Computer. Jetzt schreibst du auf, was heute mit Frau Yilmaz passiert ist. Pflegebericht. Pflegeplan. Übergabe. Was du nicht aufschreibst, weiß das nächste Team nicht.",
  kernSteps: [
    // Step 6.1 — Freetext: Pflegebericht schreiben (Haupt-Step)
    {
      stepId: "ce02-yilmaz-dok-01-pflegebericht-frei",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: [
        "§ 630f BGB (Behandlungsdokumentation)",
        "§ 3 Abs. 2 PflBG (Vorbehaltsaufgaben)",
        "Fiechter V./Meier M. (1981): Pflegeprozess — 6-Schritte-Modell",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-dok-pflegebericht",
      tag: "pflege",
      contentC1: {
        title: "Pflegebericht: Frau Yilmaz, 3. post-OP-Tag, Frühdienst",
        body: "Schreibe den Pflegebericht für Frau Yilmaz, 3. post-OP-Tag, Frühdienst.\n\nDein Text soll folgende Informationen enthalten:\n- Schmerz-Befund (NRS, Ort)\n- Hautinspektion (Befund Steißbein, Kategorisierung)\n- Mobilisation (Verlauf, Komplikation, Ergebnis)\n- Lagerungsplan (Intervall, Lagerungsform)\n- Beobachtung Wadenschmerz (und was eingeleitet wurde)\n- Kommunikation (Angehöriger Mustafa, Frau Yilmaz' Aussage)\n- Was für den nächsten Dienst wichtig ist\n\nDer Bericht soll sachlich sein — kein 'Die Patientin war mutig', sondern: 'Aufstehversuch erfolgreich, NRS 4 im Stehen, 3 Schritte mit Unterarmgehstützen.'",
        fallbezug:
          "Was du jetzt schreibst, liest das Nachtdienst-Team. Sie kennen Frau Yilmaz nicht. Sie kennen nur was du aufschreibst.",
        glossarBegriffe: ["Pflegebericht", "§ 630f BGB", "SBAR", "NRS"],
      },
      contentB1: {
        title: "Pflegebericht schreiben",
        body: "Schreibe den Pflegebericht für Frau Yilmaz. Was ist heute passiert?\n\nNutze diese Vorlage (Textbausteine):\n\n\"Frau Yilmaz äußerte Schmerzen NRS ___ beim [Ort]. Hautinspektion ergab: [Befund] am Steißbein (Dekubitus Kategorie ___). Erstes Aufstehen: [Verlauf beschreiben]. Ehemann Mustafa wurde [wie] einbezogen. Für morgen wichtig: [drei Punkte].\"\n\nFülle die Lücken mit dem aus, was heute passiert ist.",
        fallbezug:
          "Schreib es so, dass das nächste Team sofort weiß, was wichtig ist — auch ohne dich zu fragen.",
        glossarBegriffe: ["Pflegebericht", "NRS", "Dekubitus Kategorie"],
      },
      question: {
        fragetext:
          "Schreibe den vollständigen Pflegebericht für Frau Yilmaz (Frühdienst, 3. post-OP-Tag nach Hüft-TEP).",
        musterantwort:
          "23.04.2026, Frühdienst. Frau Yilmaz, 79 J., 3. post-OP-Tag Hüft-TEP rechts. Schmerz-Assessment: NRS 6 in Ruhe (Steißbein + operiertes Bein). Metamizol 500 mg um 08:15 gegeben. Hautinspektion: Steißbein — Rötung ca. 4 cm, nicht wegdrückbar = Dekubitus Kategorie I. Trochanter links: leichte Rötung. Maßnahme: 30°-Mikrolagerung links gestartet, 2-stündlicher Umlagerungsrhythmus angeordnet. Mobilisation: Aufstehversuch 1 um 09:00 — Schellong-Test: RR liegend 128/78 mmHg, RR sitzend nach 2 Min 98/62 mmHg, Differenz syst. 30 mmHg, diast. 16 mmHg = orthostatische Hypotonie. Frau Yilmaz sicher hingelegt. 2. Versuch um 09:30 erfolgreich: RR sitzend 118/74 mmHg, Stand 3 Min., 3 Schritte mit Unterarmgehstützen (Teilbelastung rechts max. 20 kg), NRS 4. Frau Yilmaz äußerte: 'Es geht doch.' Ehemann Mustafa anwesend, wurde durch Frau Yilmaz über geplante Mobilisation informiert. Thrombose-Beobachtung: Wadenschmerz links beim Erfragen (keine Druckprovokation), Inspektion ohne Schwellung/Verfärbung — Arzt informiert, Doppler beauftragt, Ergebnis ausstehend. Nächster Dienst: Analgesie vor Mobilisation prüfen (30 Min vorher), RR liegend vor Aufstehen messen (Schellong), Steißbein erneut inspizieren, Doppler-Ergebnis abfragen.",
        bewertungskriterien: [
          "Schmerz mit NRS-Wert dokumentiert?",
          "Hautbefund mit Dekubitus-Kategorisierung?",
          "Mobilisationsverlauf inklusive Orthostase-Episode?",
          "RR-Werte liegend UND sitzend dokumentiert (Schellong nachvollziehbar)?",
          "Lagerungsintervall dokumentiert?",
          "Wadenschmerz und eingeleitete Maßnahme erwähnt?",
          "Angehöriger Mustafa erwähnt?",
          "Für nächsten Dienst relevante Punkte?",
          "Sachlich formuliert, kein wertender Schreibstil?",
        ],
      },
    },

    // Step 6.2 — Matching: Pflegeplan ergänzen
    {
      stepId: "ce02-yilmaz-dok-02-pflegeplan-update",
      phase: 6,
      stepType: "matching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe",
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität",
        "§ 630f BGB (Behandlungsdokumentation)",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-dok-pflegeplan",
      tag: "pflege",
      contentC1: {
        title: "Pflegeplan ergänzen: Ziele und Maßnahmen zuordnen",
        body: "Pflegeziele ohne Maßnahmen sind Wünsche. Maßnahmen ohne Ziele sind blinde Aktionen. Das PESR-Prinzip verbindet beides — und sorgt dafür, dass das Team nicht nur weiß WAS zu tun ist, sondern WARUM. Ordne die neuen Pflegeziele den passenden Maßnahmen zu.",
        glossarBegriffe: ["Pflegeziel", "Pflegeplan", "PESR"],
      },
      contentB1: {
        title: "Pflegeziele und Maßnahmen — was gehört zusammen?",
        body: "Ein Pflegeziel sagt was du erreichen willst. Eine Maßnahme sagt wie. Ordne sie zu.",
        glossarBegriffe: ["Pflegeziel", "massnahme"],
      },
      question: {
        fragetext: "Ordne die Pflegeziele den passenden Maßnahmen zu.",
        matchingPairs: [
          {
            left: "Keine Verschlechterung des Dekubitus Kategorie I bis zur Entlassung",
            right: "30°-Mikrolagerung alle 2 Stunden, täglich Hautinspektion Steißbein + Trochanter",
          },
          {
            left: "Täglich mindestens einen Aufstehversuch, NRS ≤ 5",
            right: "Analgesie 30 Min vor Mobilisation prüfen, 2-Personen-Unterstützung erste Tage, Teilbelastung rechts max. 20 kg (Mobilisationsstufe 3) beachten, operiertes Bein zuerst über Bettkante, Erfolge dokumentieren",
          },
          {
            left: "Orthostatische Hypotonie erkennen und verhindern",
            right: "Schellong-Test: RR liegend → ≥ 1 Min sitzen → RR sitzend; Aufstehen erst wenn Differenz < 20 mmHg syst. und < 10 mmHg diast.; Arzt bei wiederholter Orthostase informieren",
          },
          {
            left: "Mustafa ist in die Pflege einbezogen und versteht was gemacht wird",
            right: "Frau Yilmaz als Vermittlerin einsetzen, nonverbale Kommunikation, bei Eskalation Telefondolmetsch",
          },
        ],
      },
    },

    // Step 6.3 — Summary: Session-Zusammenfassung
    {
      stepId: "ce02-yilmaz-dok-03-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe",
        "DNQP (2020): Expertenstandard Erhaltung und Förderung der Mobilität",
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "Virchow R. (1856): Gesammelte Abhandlungen",
        "Fiechter V./Meier M. (1981): Pflegeprozess",
        "§ 630f BGB",
        "§ 3 Abs. 2 PflBG",
      ],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-yilmaz-dok-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Das hast du heute gelernt",
        body: "Du hast heute einen vollständigen Pflegeprozess durchlaufen — nicht als Schema, sondern als lebendigen Prozess mit einem echten Menschen.\n\n**Pflegeprozess:**\n- Informationssammlung nach SBAR-Schema strukturieren\n- Pflegeziele nach PESR formulieren — präzise, messbar, nachvollziehbar\n- Evaluation = Rückblick + Vorausplanung\n\n**Mobilisation nach Hüft-TEP:**\n- Reihenfolge: Analgesie → Warten → RR liegend → Vorbereiten → operiertes Bein zuerst über Bettkante → Schellong (≥ 1 Min sitzen, RR sitzend) → Aufstehen mit Pflege auf OP-Seite\n- Orthostatische Hypotonie erkennen: RR liegend vs. sitzend, ≥ 20 mmHg syst. oder ≥ 10 mmHg diast. = klinisch relevant\n- Lagerungsvorschrift: Hüftbeugung < 90°, kein Beinkreuzen, keine Adduktion/Innenrotation\n- Teilbelastung rechts max. 20 kg (Mobilisationsstufe 3)\n\n**Dekubitus-Prophylaxe:**\n- Kategorie I = nicht wegdrückbare Rötung — Sofortmaßnahme: Druckentlastung\n- 30°-Mikrolagerung alle 2 Stunden (NPUAP/EPUAP 2019; DNQP 2024)\n- Braden-Skala für Risiko-Erfassung\n\n**Thrombose-Prophylaxe:**\n- Virchow-Trias: Gefäßwandschaden + Stase + Hyperkoagulabilität (Diabetes wirkt v.a. über Hyperkoagulabilität)\n- Antikoagulation allein reicht nicht — Mobilisation ist essentiell\n- Klinische Zeichen: Inspektion im Seitenvergleich (Schwellung, Umfang, Hauttemperatur, Verfärbung), Schmerz erfragen — KEINE aktive Druckprovokation (Embolie-Risiko); Verdacht → Doppler\n\n**Kommunikation / Interkulturell:**\n- Frau Yilmaz' Angst nicht übergehen — validieren, erklären, Schritt für Schritt\n- Angehörige (hier: Mustafa) als Ressource einbeziehen\n- Nonverbale Kommunikation überwindet Sprachbarrieren\n\n**Dokumentation:**\n- Was nicht dokumentiert ist, gilt als nicht durchgeführt (§ 630f BGB)\n- Pflegebericht = sachlich, konkret, nachvollziehbar",
        fallbezug:
          "Frau Yilmaz schläft. Mustafa ist nach Hause gegangen — er hat beim Rausgehen genickt. Du hast heute einen vollständigen Pflegeprozess durchlaufen. Das ist Pflege.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Das hast du heute gelernt",
        body: "Heute hast du viel gemacht:\n\n**Aufstehen (Mobilisation):**\n- Erst das Schmerzmittel — dann aufstehen (30 Min warten)\n- Schellong-Test: Blutdruck liegend messen → mindestens 1 Minute sitzen → Blutdruck sitzend messen. Erst dann aufstehen.\n- Operiertes Bein zuerst über die Bettkante (in Streckung)\n- Schwindel beim Aufstehen = orthostatische Hypotonie — hinlegen, warten\n- 30°-Lagerung für das Steißbein + Hüftgelenk schützen\n\n**Druckwunde (Dekubitus):**\n- Kategorie 1 = rote Stelle, geht nicht weg → sofort Druck wegnehmen\n- Alle 2 Stunden umlagern (DNQP Standard)\n\n**Thrombose:**\n- Virchow-Trias: drei Risikofaktoren → hohes Risiko\n- Schmerz in der Wade → sofort melden, nicht abwarten\n\n**Kommunikation:**\n- Frau Yilmaz sagt nicht 'Nein' direkt — du hörst heraus, was sie braucht\n- Mustafa mit Gesten einbeziehen — kein Deutsch nötig\n\n**Aufschreiben (Dokumentation):**\n- Was nicht steht, gilt als nicht gemacht (§ 630f BGB)\n- Sachlich schreiben — Zahlen und Fakten, keine Meinungen",
        fallbezug:
          "Frau Yilmaz schläft. Mustafa ist weg. Du hast heute alles richtig gemacht. Das ist Pflege.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Zusammenfassung der Lernsituation",
        summary: {
          reflexionRueckbezug:
            "Frau Yilmaz ist aufgestanden. Zum ersten Mal seit der OP. Drei Schritte. Mustafa hat es gesehen. Die Situation war nicht einfach — orthostatische Hypotonie, ein ängstlicher Angehöriger, eine Patientin die 'Nein' sagen wollte. Du hast sie alle gemeistert.",
          kernaussagen: [
            "Analgesie VOR Mobilisation ist der entscheidende Schritt — ohne Schmerzkontrolle kein erfolgreicher Aufstehversuch",
            "Schellong-Test ersetzt das pseudo-empirische '3 Min warten': RR liegend → ≥ 1 Min sitzen → RR sitzend → erst dann Aufstehen",
            "Mobilisation nach Hüft-TEP: operiertes Bein ZUERST in Streckung über die Bettkante — niemals beide Beine gleichzeitig (Adduktions-/Innenrotations- und damit Luxationsrisiko)",
            "Pflege sichert auf der OP-Seite seitlich am Becken/Rumpf — niemals unter den Achseln greifen",
            "Dekubitus Kategorie I: sofortige Druckentlastung, 30°-Mikrolagerung alle 2 Stunden",
            "Orthostatische Hypotonie erkennen: RR-Abfall ≥ 20 mmHg syst. oder ≥ 10 mmHg diast. = hinlegen, stabilisieren, zweiter Versuch",
            "Interkulturelle Pflege: Mustafa als Ressource einbeziehen — aber Sicherheit zuerst (Frau Yilmaz erst sicher hinsetzen, dann vermitteln lassen)",
            "Thrombose-Diagnostik: nur Inspektion + Schmerz erfragen — KEINE aktive Druckprovokation (Embolie-Risiko)",
            "Was nicht dokumentiert ist, gilt als nicht durchgeführt — Pflegebericht ist Teamkommunikation",
            "Virchow-Trias bei Frau Yilmaz: alle drei Säulen aktiv (Diabetes wirkt v.a. über Hyperkoagulabilität) → Thrombose-Risiko sehr hoch trotz Antikoagulation",
          ],
        },
      },
      wusstestDuDas:
        "Die Anschluss-Frage für die nächste Session: Frau Yilmaz wird morgen entlassen. Wie bereitest du sie — und Mustafa — auf das Leben zuhause vor? Was muss sie wissen, damit sie nicht erneut stürzt?",
    },
  ],
  optionaleSteps: [
    // Step 6.4 (Optional) — Freetext: Mündliche Übergabe formulieren
    {
      stepId: "ce02-yilmaz-dok-04-uebergabe-optional",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["Leonard M., Graham S., Bonacum D. (2004): SBAR — BMJ Qual Saf"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-dok-uebergabe-mündlich",
      tag: "pflege",
      contentC1: {
        title: "Mündliche Übergabe formulieren",
        body: "Du hast 2 Minuten für die mündliche Übergabe zu Frau Yilmaz. Formuliere die wichtigsten 3–5 Punkte, die dein Spätdienst-Kollege wissen muss.\n\nErinnerung: Mündliche Übergabe ERSETZT den schriftlichen Pflegebericht nicht — aber sie gibt dem Team sofort das Wichtigste.",
        fallbezug:
          "Dein Kollege übernimmt jetzt. Er hat noch nie mit Frau Yilmaz gearbeitet. Was muss er als erstes wissen?",
        glossarBegriffe: ["Mündliche Übergabe", "SBAR"],
      },
      contentB1: {
        title: "2-Minuten-Übergabe: Was sagst du?",
        body: "Du hast 2 Minuten für die Übergabe. Was sind die 3 wichtigsten Dinge, die dein Kollege über Frau Yilmaz wissen muss?",
        glossarBegriffe: ["Übergabe"],
      },
      question: {
        fragetext:
          "Formuliere die 2-Minuten-Übergabe zu Frau Yilmaz für das Spätdienst-Team.",
        musterantwort:
          "Frau Yilmaz, Zimmer 12, 79 J., 3. post-OP-Tag Hüft-TEP rechts. Heute Morgen: Aufstehversuch erfolgreich — 3 Schritte, NRS 4 im Stehen. Vorher: orthostatische Hypotonie, zweiter Versuch. Wichtig: Analgesie morgen früh VOR Mobilisation (Metamizol 30 Min vorher). Dekubitus Kategorie I Steißbein — 30°-Mikrolagerung alle 2 Stunden läuft. Wadenschmerz links — Arzt informiert, Doppler-Ergebnis noch ausstehend, bitte abfragen. Mustafa ist eingeweiht — ruhig, sitzt manchmal noch da.",
        bewertungskriterien: [
          "Erstes Aufstehen und Ergebnis erwähnt?",
          "Analgesie VOR Mobilisation als zeitkritischen Punkt genannt?",
          "Dekubitus-Situation und Lagerungsplan?",
          "Doppler-Ergebnis als offen markiert?",
        ],
        satzanfaengeB1: [
          "Frau Yilmaz hat heute ...",
          "Wichtig für morgen: ...",
          "Die Druckwunde am Steißbein ...",
          "Der Wadenschmerz ...",
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
