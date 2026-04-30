// CE-02 Situation Lukas — Phase 6: Dokumentieren
// Steps: 3 (inkl. Freitext-Hauptaufgabe) · Bloom: B5–B6 · Zeit: ~10–20 Min
// Quelle: phase-dokumentieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-lukas-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren — Wunddoku, Kinderschutz, Entlassung",
  titelB1: "Was schreibst du auf?",
  kontext:
    "Die Wundversorgung ist abgeschlossen. Lukas wird wahrscheinlich morgen entlassen — Voraussetzung ist, dass der Wundstatus stabil bleibt und die Eltern die Verbandpflege zuhause können. Frau Fink hat ihr Screening abgeschlossen und dokumentiert.\n\nJetzt liegt die Dokumentationsaufgabe bei dir:\n1. Wunddokumentation (standardisiert, mit Foto-Hinweis)\n2. Kinderschutz-Dokumentation (sachlich, nicht wertend, vollständig)\n3. Trinkprotokoll + Schmerzprotokoll (Verlaufsdaten)\n\nDokumentation ist in diesem Fall besonders wichtig: Sie schützt das Kind, sie schützt die Eltern, und sie schützt dich als Pflegeperson.",
  kontextB1:
    "Die Versorgung ist fertig. Lukas wird morgen wahrscheinlich entlassen. Jetzt schreibst du auf:\n1. Wie ist die Wunde?\n2. Kinderschutz-Gespräch — was wurde dokumentiert?\n3. Wie viel hat Lukas getrunken? Wie war der Schmerz?\n\nDokumentation schützt: das Kind, die Eltern, und dich.",
  kernSteps: [
    // Step 6.0b — Inline-Wissen: Wunddokumentation — 8 Pflicht-Kriterien
    // Phase 6 beginnt. Bevor der Schüler die Wunddokumentation selbst schreibt (Step 6.1),
    // braucht er das Gerüst: Was MUSS in einer Wunddokumentation stehen?
    {
      stepId: "ce02-lukas-dok-00b-wunddoku-kriterien",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "II.1",
      quellen: [
        "BGW 2022 — Wunddokumentation Standard",
        "DGV 2023 — Leitlinie Thermische Verletzungen",
        "§ 630f BGB — Dokumentationspflicht",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-dok-wunddoku-grundlagen",
      tag: "pflege",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["haut"],
      transition: "Du kennst die 8 Kriterien. Jetzt: Schreibe den Eintrag für Lukas.",
      contentC1: {
        title: "Wunddokumentation — 8 Kriterien die rein müssen",
        body: "",
        glossarBegriffe: ["Wunddokumentation", "Fotodokumentation", "§ 630f BGB"],
      },
      contentB1: {
        title: "Wunddokumentation — was muss rein?",
        body: "",
        glossarBegriffe: ["Wunddokumentation", "Fotodokumentation"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-wunddoku-kriterien",
        storyAufhaenger:
          "Du sollst gleich die Wunddokumentation für Lukas schreiben. Das ist nicht nur Papierkram — es ist eine rechtliche Pflicht (§ 630f BGB). Was nicht dokumentiert ist, gilt als nicht gemacht. Was muss alles rein?",
        storyAufhaengerB1:
          "Du schreibst gleich die Wunddokumentation für Lukas. Was nicht aufgeschrieben ist, gilt als nicht gemacht. Was muss alles in den Eintrag?",
        kerntext:
          "**8 Pflicht-Kriterien der Wunddokumentation (BGW 2022):**\n\n• **1. Datum + Uhrzeit** — wann wurde die Wunde beurteilt / versorgt?\n\n• **2. Wundlokalisation** — genau beschreiben (\"linker Unterarm, linke Schulter, linker Thorax lateral\"). Nicht nur \"Arm\".\n\n• **3. Wundgröße + Grad** — Grad 2a, Fläche in % KOF oder cm.\n\n• **4. Wundzustand** — Blasen intakt/geplatzt, Exsudat (Farbe, Menge), Wundumgebung (Rötung, Wärme), Infektionszeichen (ja/nein).\n\n• **5. Durchgeführte Maßnahmen** — Material (Wundauflage-Typ), Vorgehen (Spülung ja/nein, Wicklung locker/fest), Analgesie.\n\n• **6. Schmerz vor + nach** — Skala mit Werten (KUSS X/10 vor Wechsel, KUSS Y/10 nach Wechsel).\n\n• **7. Besonderheiten** — Ablenkung, Pause, Bedarfsanalgesie, Elternbeteiligung, Komplikationen.\n\n• **8. Nächster geplanter Wechsel** — Intervall (48-72h), Datum.\n\n**Fotodokumentation:** Bei Verbrühungen empfohlen (DGV 2023). Hinweis an Arzt erstellen — Foto mit Einverständnis der Eltern (DSGVO). Foto zeigt Wundstatus zum Zeitpunkt der Aufnahme.\n\n**Grundprinzip:** Sachlich, nicht wertend. \"Blasen intakt, kein Rötungswall\" — nicht \"sieht gut aus\".",
        kerntextB1:
          "**8 Dinge die in die Wunddokumentation müssen:**\n\n• **1. Datum + Uhrzeit**\n\n• **2. Wo ist die Wunde?** — Genau beschreiben: linker Arm, Schulter, Thorax.\n\n• **3. Wie groß? Welcher Grad?** — Grad 2a, Fläche in %.\n\n• **4. Wie sieht die Wunde aus?** — Blasen ganz/kaputt, Wundwasser (Farbe), Rötung, Infektion ja/nein.\n\n• **5. Was hast du gemacht?** — Welche Auflage, gespült ja/nein, wie gewickelt.\n\n• **6. Schmerz vorher und nachher** — KUSS vor dem Wechsel und danach.\n\n• **7. Besonderheiten** — Pause, Schmerzmittel, Seifenblasen, Sandra hat geholfen.\n\n• **8. Nächster Wechsel wann?** — Datum, Intervall.\n\n**Foto:** Bei Verbrühungen empfohlen. Mit Einverständnis der Eltern.\n\n**Wichtig:** Sachlich schreiben. \"Blasen intakt\" — nicht \"sieht gut aus\".",
        faustregel:
          "8 Kriterien: Wann, wo, wie groß, wie sieht es aus, was gemacht, Schmerz vorher/nachher, Besonderheiten, nächster Termin.",
        faustregelB1:
          "8 Kriterien: Wann, wo, wie groß, wie sieht die Wunde aus, was gemacht, Schmerz, Besonderheiten, nächster Termin.",
        spektrum: [
          {
            patientName: "Frau M. (82, Sturz)",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Sturzprotokoll — andere Dokumentationsstruktur",
            kurzbeschreibung:
              "Bei Frau M. schreibst du ein Sturzprotokoll (Sturzzeitpunkt, Umstände, Verletzungen, Maßnahmen, Sturzrisiko-Score). Andere Struktur als Wunddokumentation — aber dasselbe Prinzip: sachlich, vollständig, zeitnah.",
          },
          {
            patientName: "Frau Yilmaz (Dekubitus Kat. II)",
            situationsId: "ls-yilmaz-spirale2",
            hauptfaktor: "Chronische Wunde — Verlaufsdokumentation über Wochen",
            kurzbeschreibung:
              "Bei Frau Yilmaz' Dekubitus wird die Wunde nicht einmal dokumentiert, sondern bei jedem Verbandwechsel über Wochen. Der DNQP fordert hier: Wundgröße mit Lineal messen, Fotovergleich, Verlaufskurve. Bei Lukas: kurze Dokumentation über Tage.",
          },
          {
            patientName: "Herr Nguyen (Stoma)",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Stoma-Dokumentation — peristomale Haut",
            kurzbeschreibung:
              "Herr Nguyens Stoma-Dokumentation enthält ähnliche Elemente: Hautzustand, Ausgabe-Farbe, Menge, Hautschutzplatten-Wechsel. Dasselbe Grundprinzip der systematischen Beobachtungsdokumentation.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Du hast Lukas' Verband gewechselt. Welche 8 Kriterien müssen in die Wunddokumentation?",
          rueckseite:
            "1. Datum + Uhrzeit. 2. Wundlokalisation (genau). 3. Grad + Größe. 4. Wundzustand (Blasen, Exsudat, Rötung, Infektion). 5. Maßnahmen (Material, Vorgehen). 6. Schmerz vor + nach (KUSS). 7. Besonderheiten (Pause, Analgesie, Eltern). 8. Nächster Wechsel.\n\nSpektrum: Frau M. (Sturzprotokoll), Yilmaz/Dekubitus (Verlauf über Wochen), Nguyen (Stoma-Doku).\n\nFaustregel: **8 Kriterien: Wann, wo, wie groß, Zustand, Maßnahmen, Schmerz, Besonderheiten, nächster Termin.**",
        },
      },
    },

    // Step 6.1 — Freetext (LANG): Wunddokumentation schreiben
    {
      stepId: "ce02-lukas-dok-01-wunddoku-freetext",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "II.1",
      quellen: ["BGW 2022 Wunddokumentation", "DGV 2023"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-lukas-dok-wunddokumentation",
      tag: "pflege",
      contentC1: {
        title: "Wunddokumentations-Eintrag für Lukas schreiben",
        body: "Schreibe den Wunddokumentations-Eintrag für Lukas. Nutze die Informationen aus den vorherigen Phasen. Dein Text soll alle 8 Kriterien abdecken.",
        glossarBegriffe: ["Wunddokumentation", "Fotodokumentation"],
      },
      contentB1: {
        title: "Wunddokumentation schreiben",
        body: "Schreibe den Wunddokumentations-Eintrag für Lukas. Nutze die Textbausteine unten als Hilfe. Du kannst sie ergänzen oder verändern.",
        glossarBegriffe: ["Wunddokumentation"],
      },
      question: {
        fragetext:
          "Schreibe den Wunddokumentations-Eintrag für Lukas. Dein Text soll enthalten: Datum/Uhrzeit, Wundlokalisation (klar beschrieben), Grad und Fläche, Wundzustand (Blasen, Exsudat, Wundumgebung, Infektionszeichen), Durchgeführte Maßnahmen (Material, Vorgehen), Schmerz KUSS vor und nach, Besonderheiten (Ablenkung, Pause, Elternbeteiligung).",
        musterantwort:
          "23.04.2026, 13:45 Uhr. Wunddokumentation Lukas K. (2,5 J.): Verbrühung Grad 2a, linker Unterarm (2–3 Blasen, Durchmesser 2–3 cm, intakt), linke Schulter + Thorax lateral (Rötung, nässende Wundfläche, Exsudat klar-gelblich). Keine Nekrose, kein Rötungswall, keine Überwärmung. Fläche gesamt: ~15 % KOF nach Lund-Browder-Modifikation Kleinkind. Verbandwechsel 13:45–14:15 Uhr: NaCl-0,9%-Reinigung, hydroaktive Wundauflage (Mepilex-ähnlich) angelegt, locker gewickelt. Blasen belassen (intakt). KUSS vor Wechsel: 8/10 (Abwehrreaktion beim ersten Versuch). Pause mit Bedarfsanalgesie (Arztanordnung 14:00 Uhr), danach KUSS 5/10. Wechsel zweiter Anlauf mit Ablenkung (Seifenblasen, Sandra aktiv als Ablenkungsunterstützung). KUSS nach Wechsel: 4/10. Nächster Wechsel geplant: 25.04.2026 (48h). Fotodokumentation: Hinweis für Arzt erstellt. Elternanleitung Sandra: Ablenkungstechnik und Signale von Lukas erklärt.",
        bewertungskriterien: [
          "Datum und Uhrzeit vorhanden",
          "Wundlokalisation klar und vollständig (linker Unterarm + Schulter + Thorax)",
          "Grad 2a und Flächenangabe (~15 % KOF) genannt",
          "Wundzustand beschrieben (Blasen intakt, Exsudat, keine Infektionszeichen)",
          "Maßnahmen vollständig (NaCl, Wundauflage, Wickeln, Blasen belassen)",
          "KUSS vor und nach Wechsel angegeben",
          "Besonderheiten dokumentiert (Pause, Bedarfsanalgesie, Ablenkung, Sandra)",
          "Sachlich — keine wertenden Formulierungen über Eltern",
        ],
        satzanfaengeB1: [
          "[Datum], [Uhrzeit] Uhr. Wunddokumentation Lukas K. (2,5 J.):",
          "Wunde: [Lokalisation], Grad [?], Fläche [?] %.",
          "Wundzustand: Blasen [intakt/geplatzt], Exsudat [Farbe/Menge], keine Zeichen von [?].",
          "Maßnahmen: [Reinigung], [Auflage], [Wickeln].",
          "KUSS vor Wechsel: [?]/10. KUSS nach Wechsel: [?]/10.",
          "Besonderheiten: [Pause, Ablenkung, Eltern].",
        ],
      },
    },

    // Step 6.2 — Matching: Was gehört in die Kinderschutz-Dokumentation?
    {
      stepId: "ce02-lukas-dok-02-kinderschutz-doku",
      phase: 6,
      stepType: "matching",
      bloomLevel: 5,
      kompetenzbereich: "II.2",
      quellen: ["§ 4 KKG 2012", "Bundesarbeitsgemeinschaft Kinderschutz 2020"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-lukas-dok-kinderschutz",
      tag: "pflege",
      contentC1: {
        title: "Kinderschutz-Dokumentation — was gehört rein und was nicht?",
        body: "Ordne jeden Inhalt der richtigen Kategorie zu: 'Gehört in die Dokumentation' oder 'Gehört NICHT in die Dokumentation'.\n\nWichtiger Grundsatz: Nie wertende Formulierungen über Eltern in die Pflegedokumentation schreiben. Nie Empfehlungen aussprechen die über deine pflegerische Kompetenz hinausgehen (z.B. Jugendamt-Meldung ohne konkreten Anhaltspunkt). Dokumentation ist sachlich, beobachtungsbasiert und rechtlich prüfbar.",
        glossarBegriffe: ["Sachliche Dokumentation", "§ 4 KKG"],
      },
      contentB1: {
        title: "Was schreibst du auf — und was nicht?",
        body: "Ordne jeden Inhalt zu: Dokumentieren oder nicht dokumentieren?\n\nWichtig: Nie wertende Aussagen über Eltern aufschreiben (z.B. 'überfordert'). Nie eigene Empfehlungen wie 'Jugendamt einschalten' ohne konkreten Grund. Nur aufschreiben was du beobachtet hast — sachlich und neutral.",
        glossarBegriffe: ["Sachliche Dokumentation"],
      },
      question: {
        fragetext:
          "Ordne jeden Inhalt der richtigen Kategorie zu.",
        matchingPairs: [
          {
            left: "Unfallhergang wie von Eltern geschildert (Teetasse, 09:20 Uhr, Erstversorgung: Kleidung entfernt, Kurzkühlung lauwarmes Wasser ~8 Min lokal, Wärmeerhalt, Notruf)",
            right: "Gehört in die Dokumentation ✅",
          },
          {
            left: "Keine weiteren Hämatome oder alten Verletzungen bei der Körperuntersuchung festgestellt",
            right: "Gehört in die Dokumentation ✅",
          },
          {
            left: "Elternverhalten beobachtet: kooperativ, emotional aufgewühlt, fürsorglich",
            right: "Gehört in die Dokumentation ✅",
          },
          {
            left: "Kinderschutz-Screening durchgeführt nach § 4 KKG — Ergebnis: keine konkreten Anhaltspunkte für Kindeswohlgefährdung",
            right: "Gehört in die Dokumentation ✅",
          },
          {
            left: "Sozialarbeiterin informiert und eingebunden, Screening abgeschlossen",
            right: "Gehört in die Dokumentation ✅",
          },
          {
            left: "Vater Kevin ist sehr emotional und schwer ansprechbar gewesen, möglicherweise überfordert mit der Situation",
            right: "Gehört NICHT in die Dokumentation ❌",
          },
          {
            left: "Empfehlung: Jugendamt einschalten (ohne konkrete Anhaltspunkte für Kindeswohlgefährdung)",
            right: "Gehört NICHT in die Dokumentation ❌",
          },
        ],
      },
    },

    // Step 6.3 — Summary: Session-Zusammenfassung
    {
      stepId: "ce02-lukas-dok-03-session-summary",
      phase: 6,
      stepType: "summary",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce02-lukas-dok-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Was du heute gelernt hast",
        body: "Lukas sagt heute Morgen wieder \"Bah-bah!\" zu den Seifenblasen. Kathrin sagt: \"Ich glaube, ihr habt gestern beide einen guten Job gemacht — du und Lukas.\"",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was du mitgenommen hast",
        body: "Lukas sagt heute \"Bah-bah!\" zu den Seifenblasen. Kathrin sagt: \"Ihr habt das gut gemacht — du und Lukas.\"",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Was hast du in dieser Lernsituation gelernt?",
        summary: {
          reflexionRueckbezug:
            "Lukas K., 2,5 J., Verbrühung Grad 2a. Ein Tag auf der Kinderstation — Wundversorgung, Kinderschutz-Abklärung, zwei Komplikationen, Elternanleitung.",
          kernaussagen: [
            "KUSS-Skala: 5 Kategorien (Weinen, Gesichtsausdruck, Rumpfhaltung, Beinstellung, Motorische Unruhe) — validiert für Kinder 0–4 Jahre. Schmerzassessment bei Kleinkindern ist fachliche Beobachtung, keine Selbstauskunft.",
            "Verbrühungsgrade: Grad 2a = feuchte Blasen, schmerzhaft, oberflächliche Dermis. Intakte Blasen belassen — sie bieten natürlichen Wundschutz.",
            "Kinderschutz-Screening (§ 4 KKG): Standard bei jeder Verbrühung eines Kleinkindes über 10 % KOF — keine Beschuldigung, sondern Abklärung. Ergebnis hier: keine konkreten Anhaltspunkte für Kindeswohlgefährdung.",
            "Deeskalation bei aufgewühlten Angehörigen: Empathie zuerst, Raumwechsel, Kindorientierung als Argument. 'Beruhigen Sie sich' eskaliert — nicht verwenden.",
            "Feuchte Wundbehandlung: Hydroaktive Wundauflage, kein Alkohol, kein Chlorhexidin bei Kleinkindern, Blasen belassen wenn intakt.",
            "Elternanleitung: Aktive Einbeziehung der Eltern ist therapeutisch für das Kind und stärkend für die Eltern. Sandra als Co-Pflegerin bei Ablenkung und Trinkangebot.",
            "Kinderschutz-Dokumentation: Sachlich, keine Interpretationen, keine Wertungen über Eltern. Was beobachtet wurde — nicht was du vermutest.",
          ],
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 15,
};
