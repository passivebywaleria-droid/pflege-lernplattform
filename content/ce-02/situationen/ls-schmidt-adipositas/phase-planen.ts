// CE-02 Situation Frau Schmidt — Phase 3: Pflege planen
// Steps: 6 + 1 Inline-Wissen · Bloom: B2–B5 · Zeit: ~30–40 Min
// Quelle: phase-planen.md + inline-wissen-generator

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_PLANEN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Du hast das Assessment abgeschlossen. Du sitzt kurz auf dem Stuhl neben Frau Schmidts Bett und schreibst deine Notizen. Frau Schmidt schaut aus dem Fenster. Frau Bayraktar taucht kurz auf: 'Wie war das Assessment?' Du fasst zusammen. Sie nickt: 'Gut. Dann mach jetzt den Pflegeplan. Heute Nachmittag kommt die Ernährungsberaterin, das haben wir schon angefordert. Deine Aufgabe ist das Gespräch am Vormittag und die Hautpflege.'",
  kontextB1:
    "Du hast das Assessment gemacht. Jetzt weißt du: Was hat Frau Schmidt? Was braucht sie? Du schreibst Notizen. Frau Schmidt wartet ruhig. Deine Praxisanleiterin sagt: \"Gut! Mach jetzt den Pflegeplan.\" Heute Nachmittag kommt die Ernährungs-Beraterin. Deine Aufgabe heute Morgen: Gespräch mit Frau Schmidt + Haut-Pflege.",
  kernSteps: [
    // Step 3.1 — Matching: Pflegediagnosen nach PESR
    {
      stepId: "ce02-schmidt-plan-01-pflegediagnosen",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "ICS — International Continence Society: Klassifikation Belastungsinkontinenz",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-plan-pflegediagnosen",
      tag: "pflege",
      contentC1: {
        title: "Pflegediagnosen nach PESR-Schema zuordnen",
        body: "Ordne die erhobenen Probleme den passenden Pflegediagnosen zu. Drei Paare. PESR = Problem, Einflussfaktor, Symptom, Ressource.",
        glossarBegriffe: ["PESR-Schema", "Pflegediagnose"],
      },
      contentB1: {
        title: "Pflege-Diagnosen zuordnen",
        body: "Pflege-Diagnosen nach PESR (= Pflege-Problem, Einflussfaktor, Symptom, Ressource) zuordnen. Ordne zu: Welches Problem → welche Pflege-Diagnose?",
        glossarBegriffe: ["PESR-Schema", "Pflegediagnose"],
      },
      question: {
        fragetext:
          "Ordne jedes Problem der passenden Pflegediagnose zu.",
        matchingPairs: [
          {
            left: "Albumin 31 g/l, einseitige Fertigkost-Ernährung, NRS-Score 1 + positive GLIM-Diagnose (Mangelernährung trotz Adipositas)",
            right: "Mangelernährung bezogen auf Proteinzufuhr",
          },
          {
            left: "Hautfalten submammär und inguinal, feucht, adipös, keine Rötung bisher",
            right: "Risiko für Intertrigo",
          },
          {
            left: "Unwillkürlicher Urinverlust bei körperlicher Belastung seit 2 Jahren",
            right: "Belastungsinkontinenz",
          },
        ],
      },
    },

    // Step 3.2 — Freetext: SMART-Ziel formulieren
    {
      stepId: "ce02-schmidt-plan-02-ziele-smart",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-plan-smart-ziel",
      tag: "pflege",
      contentC1: {
        title: "SMART-Pflegeziel formulieren",
        body: "Formuliere ein SMART-Ziel für das Ernährungsproblem von Frau Schmidt. SMART: Spezifisch (Protein), Messbar (Zielwert oder Mahlzeiten), Erreichbar (stationär machbar), Relevant (für Heilung und BZ-Kontrolle), Terminiert (bis wann?).",
        glossarBegriffe: ["SMART-Ziel"],
      },
      contentB1: {
        title: "SMART-Ziel schreiben",
        body: "SMART-Ziel formulieren für Frau Schmidts Ernährungs-Problem. SMART bedeutet: **S** = Spezifisch, **M** = Messbar, **A** = Erreichbar, **R** = Relevant, **T** = Terminiert (bis wann). Beispiel: \"Frau Schmidt isst bis zur Entlassung (in 5 Tagen) täglich 3 eiweiß-reiche Mahlzeiten.\"",
        glossarBegriffe: ["SMART-Ziel"],
      },
      question: {
        fragetext:
          "Formuliere ein SMART-Ziel für das Ernährungsproblem von Frau Schmidt (1–2 Sätze).",
        musterantwort:
          "Frau Schmidt nimmt bis zur Entlassung (in 5 Tagen) täglich mindestens 3 eiweißreiche Mahlzeiten zu sich (z. B. Joghurt, Ei, Hähnchen), sodass ihre Proteinzufuhr auf mindestens 67 g/Tag gesteigert wird (1,2 g × 56 kg Idealgewicht nach BMI 22 — bei 1,60 m Körpergröße; ESPEN 2017 bei Mangelernährung).",
        bewertungskriterien: [
          "Spezifisch: Protein/Eiweiß als Fokus benannt",
          "Messbar: Mahlzeiten-Anzahl, Grammangabe (Bezug zu Idealgewicht ca. 56 kg) oder Albumin-Ziel",
          "Erreichbar: stationär umsetzbar",
          "Relevant: Bezug zu Wundheilung, Immunabwehr oder BZ-Kontrolle",
          "Terminiert: bis Entlassung / in X Tagen",
        ],
        satzanfaengeB1: [
          "Frau Schmidt isst bis zur Entlassung (in ___ Tagen) täglich ___",
          "Das Ziel ist messbar, weil ___",
          "Das ist erreichbar, weil ___",
        ],
      },
    },

    // Step 3.3 — Matrix: interprofessionelles Team
    {
      stepId: "ce02-schmidt-plan-03-interprof-team",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
        "AWMF S3-Leitlinie NVL Typ-2-Diabetes (2023)",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-plan-interprofessionell",
      tag: "pflege",
      contentC1: {
        title: "Wer macht was? — Kompetenzgrenzen kennen",
        body: "Ordne die Aufgaben in eine 2×2-Matrix:\n\n**X-Achse:** Sofort (heute Vormittag) — Geplant (im Tagesverlauf / mehrtägig)\n**Y-Achse:** Pflege (eigenständig durch Pflegefachkraft) — Spezialist (Arzt/Podologe/Ernährungsberater)\n\nQuadranten-Konvention:\n- **Q1 (unten-links)** = Sofort + Pflege\n- **Q2 (unten-rechts)** = Geplant + Pflege\n- **Q3 (oben-links)** = Sofort + Spezialist\n- **Q4 (oben-rechts)** = Geplant + Spezialist\n\nKompetenzgrenzen kennen ist keine Schwäche — es ist Qualitätssicherung.",
        glossarBegriffe: ["Interprofessionell", "Podologe"],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Ordne zu: Welche Aufgabe gehört zu welcher Berufsgruppe?\n\nMatrix mit 4 Quadranten:\n- **Q1 (unten-links):** Sofort + Pflege\n- **Q2 (unten-rechts):** Geplant + Pflege\n- **Q3 (oben-links):** Sofort + Spezialist (Arzt/Podologe)\n- **Q4 (oben-rechts):** Geplant + Spezialist",
        glossarBegriffe: ["Interprofessionell", "Podologe"],
      },
      question: {
        fragetext:
          "Ordne jede Aufgabe einem Quadranten zu. Q1=Sofort+Pflege, Q2=Geplant+Pflege, Q3=Sofort+Spezialist, Q4=Geplant+Spezialist.",
        matrix: {
          instruction:
            "Ordne jede Aufgabe einem Quadranten zu (Q1 unten-links, Q2 unten-rechts, Q3 oben-links, Q4 oben-rechts).",
          axisX: { label: "Zeitachse", low: "Sofort", high: "Geplant" },
          axisY: { label: "Zuständigkeit", low: "Pflege", high: "Spezialist" },
          items: [
            { id: "a1", text: "Hautfalten heute morgen inspizieren (submammär, inguinal, abdominal)", correctQuadrant: 1 },
            { id: "a2", text: "Hautpflege Hautfalten heute morgen durchführen (Trockentupfen + Hautschutz)", correctQuadrant: 1 },
            { id: "a3", text: "Inkontinenz-Versorgung heute mit Frau Schmidt besprechen und Material auswählen", correctQuadrant: 1 },
            { id: "a4", text: "Ernährungsprotokoll über die Woche führen + Mobilisationsplan tagesweise dokumentieren", correctQuadrant: 2 },
            { id: "a5", text: "Diabetisches Fußsyndrom: Nagelpflege durch Podologin (Termin heute oder morgen)", correctQuadrant: 3 },
            { id: "a6", text: "Ernährungsberatung durch Diätassistentin/Ernährungsberaterin am Nachmittag", correctQuadrant: 3 },
            { id: "a7", text: "Metformin-Daürdosierung nach BZ-Tagesprofil — ärztliche Anpassung im Verlauf", correctQuadrant: 4 },
            { id: "a8", text: "Gynäkologie-Überweisung Belastungsinkontinenz nach Entlassung (ambulant)", correctQuadrant: 4 },
          ],
        },
      },
    },

    // Step 3.3b — Inline-Wissen: Dekubitus-Prophylaxe bei Adipositas (Wiederbegegnung Yilmaz)
    // Schüler hat Intertrigo in Phase 2 gelernt. Jetzt: Dekubitus-Prophylaxe als
    // Wiederbegegnung (zentral bei Yilmaz gelehrt). Hier: Was ist bei Adipositas anders?
    // Relevant für Step 3.4 (Hautpflege planen) und Step 4.1 (Hautfalten-Pflege durchführen).
    {
      stepId: "ce02-schmidt-plan-03b-dekubitus-wiederbegegnung",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe in der Pflege",
        "EPUAP/NPIAP/PPPIA (2019): International Guideline — Prevention and Treatment of Pressure Ulcers/Injuries",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-plan-dekubitus",
      tag: "pflege",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut"],
      transition: "Dekubitus-Risiko erkannt. Jetzt planst du die konkrete Hautpflege für heute Morgen.",
      contentC1: {
        title: "Dekubitus bei Adipositas — Wiederbegegnung",
        body: "",
        glossarBegriffe: ["Dekubitus", "Braden-Skala", "Scherkraft"],
      },
      contentB1: {
        title: "Dekubitus bei Übergewicht — was ist anders?",
        body: "",
        glossarBegriffe: ["Dekubitus", "Braden-Skala"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-haut-ernährung",
        wiederbegegnung: {
          basisBausteinId: "dekubitus-prophylaxe-definition",
          basisPatient: "Frau Yilmaz",
          vertiefung:
            "Dekubitus kennst du von Frau Yilmaz (Hüft-TEP, Sakralregion). Bei Frau Schmidt kommt eine Besonderheit dazu: Adipositas verändert die Druckverteilung. Das Eigengewicht erzeugt höheren Auflagedruck auf Sakrum und Fersen. Gleichzeitig sind Hautfalten ein eigenes Risiko (Feuchtigkeit + Scherkraft). Und: Proteinmangel (Albumin 31 g/l) verzögert die Wundheilung zusätzlich — Dekubitus-Prävention und Ernährung hängen hier direkt zusammen.",
          vertiefungB1:
            "Dekubitus kennst du von Frau Yilmaz. Bei Frau Schmidt ist eine Sache anders: Sie ist schwerer. Das Gewicht drückt stärker auf Steißbein und Fersen. Außerdem fehlt ihr Eiweiß (Albumin niedrig) — deshalb heilen Wunden langsamer. Dekubitus-Schutz und Ernährung hängen zusammen.",
        },
        storyAufhaenger:
          "Du planst jetzt die Hautpflege für Frau Schmidt. Intertrigo in den Falten hast du gerade gelernt. Aber was ist mit Dekubitus? Du kennst das Thema von Frau Yilmaz — bei Frau Schmidt gibt es eine wichtige Besonderheit.",
        storyAufhaengerB1:
          "Du planst jetzt die Haut-Pflege. Dekubitus kennst du schon von Frau Yilmaz. Aber bei Frau Schmidt ist etwas anders. Was?",
        kerntext:
          "**Dekubitus bei Adipositas — 3 Besonderheiten** (DNQP 2017, EPUAP 2019):\n\n**1. Erhöhter Auflagedruck:**\n\nBei BMI 38 liegt deutlich mehr Gewicht auf Sakrum und Fersen. Standard-Matratzen reichen oft nicht — Schwerlast-Wechseldruckmatratze ab ca. 120 kg prüfen.\n\n**2. Scherkraft in Hautfalten:**\n\nWenn Frau Schmidt sich im Bett dreht, gleiten Hautschichten in der Abdomen-Hängefalte gegeneinander. Scherkraft + Feuchtigkeit = doppeltes Risiko (Intertrigo + Druckschaden gleichzeitig).\n\n**3. Ernährung als Risikofaktor:**\n\nAlbumin 31 g/l = reduzierte Wundheilung. Proteinmangel bei Adipositas ist ein unterschätzter Dekubitus-Risikofaktor. EPUAP 2019 empfiehlt bei Dekubitus-Risiko: Proteinzufuhr auf 1,25-1,5 g/kg Idealgewicht/Tag.\n\n**Braden-Skala bei Adipositas:**\n\nKategorie \"Ernährung\" oft falsch hoch bewertet (\"isst ja genug\"). Bei Proteinmangel trotz Adipositas: Ernährungs-Score nach unten korrigieren.",
        kerntextB1:
          "**Dekubitus bei Übergewicht — 3 Besonderheiten:**\n\n**1. Mehr Gewicht = mehr Druck:**\n\nFrau Schmidt ist schwer. Das Steißbein und die Fersen werden stärker gedrückt. Eine spezielle Matratze kann helfen.\n\n**2. Haut-Falten verschieben sich:**\n\nWenn sie sich dreht, gleiten die Hautschichten in der Bauch-Falte übereinander. Das schädigt die Haut zusätzlich.\n\n**3. Ernährung und Wundheilung:**\n\nAlbumin niedrig = Wunden heilen langsamer. Mehr Eiweiß essen hilft auch gegen Dekubitus.\n\n**Braden-Skala:** Bei Frau Schmidt nicht vergessen: Sie isst zwar viel — aber zu wenig Eiweiß. Der Ernährungs-Punkt in der Braden-Skala muss niedrig bewertet werden.",
        faustregel:
          "Adipositas + Proteinmangel = doppeltes Dekubitus-Risiko. Ernährung ist Dekubitus-Prophylaxe.",
        faustregelB1:
          "Übergewicht + Eiweiß-Mangel = doppeltes Dekubitus-Risiko. Gute Ernährung schützt vor Dekubitus.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-spirale2",
            hauptfaktor: "Dekubitus Kat. II Sakrum",
            kurzbeschreibung:
              "Basis-Patientin für Dekubitus: Post-OP, Immobilität. Bei ihr ist Druck durch Lagerung der Hauptfaktor — nicht Ernährung.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese + Spastik",
            kurzbeschreibung:
              "Einseitige Immobilität + Spastik erzeugt asymmetrischen Druck. Dekubitus-Risiko auf der gelähmten Seite deutlich höher. Bei ihm: Bobath-Lagerung + Mikrolagerung.",
          },
          {
            patientName: "Herr Baür",
            situationsId: "ls-baür-demenz-sturz",
            hauptfaktor: "Demenz + Immobilität",
            kurzbeschreibung:
              "Liegt zunehmend, weil er den Sinn des Aufstehens nicht versteht. Dekubitus-Gefahr durch kognitive Barriere: Er spürt den Druck, versteht aber nicht, dass er sich umdrehen muss.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Warum hat Frau Schmidt (BMI 38, Albumin 31 g/l) ein erhöhtes Dekubitus-Risiko — obwohl sie mobil ist?",
          rueckseite:
            "3 Faktoren: 1) Erhöhter Auflagedruck durch Eigengewicht (Sakrum, Fersen). 2) Scherkraft in Hautfalten (Intertrigo + Druck gleichzeitig). 3) Proteinmangel trotz Adipositas (Albumin 31 g/l) = verzögerte Wundheilung.\n\nBraden: Ernährungs-Score nicht falsch hoch bewerten. EPUAP 2019: 1,25-1,5 g Protein/kg Idealgewicht/Tag.\n\nFaustregel: **Ernährung ist Dekubitus-Prophylaxe.**",
        },
      },
    },

    // Step 3.4 — Sequencing: Hautpflege Hautfalten planen
    {
      stepId: "ce02-schmidt-plan-04-hautpflege-planen",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie Intertrigo DDG (2022)",
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-plan-hautpflege",
      tag: "pflege",
      contentC1: {
        title: "Hautpflege der Hautfalten — Reihenfolge sichern",
        body: "Bringe die Schritte der Hautpflege für Hautfalten bei Adipositas in die richtige Reihenfolge.",
        glossarBegriffe: ["Intertrigo", "Mazerierung"],
      },
      contentB1: {
        title: "Haut-Pflege der Haut-Falten — richtige Reihenfolge",
        body: "Haut-Pflege der Haut-Falten planen — bringe in die richtige Reihenfolge.",
        glossarBegriffe: ["Intertrigo"],
      },
      question: {
        fragetext:
          "Bringe die Schritte der Hautpflege für Hautfalten in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Richtige Reihenfolge für die Pflege der Hautfalten bei Adipositas.",
          items: [
            {
              id: "h1",
              label: "Hautfalten täglich inspizieren (morgens bei der Morgenpflege)",
            },
            {
              id: "h2",
              label: "Nach dem Waschen: Falten auseinander halten und trocken TUPFEN — nie reiben",
            },
            {
              id: "h3",
              label: "Atmungsaktives textiles Faltenvlies in die Falte einlegen (AWMF S2k Intertrigo 2022 — Goldstandard, hält die Falte trocken und reibungsarm; KEINE okklusiven Pasten/Cremes IN die Falte: das verstärkt die Mazeration). Hautschutz-Creme nur auf intakter, trockener Haut AUSSERHALB der Falte.",
            },
            {
              id: "h4",
              label: "Auf Rötung, Mazerierung und Geruch achten",
            },
            {
              id: "h5",
              label: "Befund täglich dokumentieren",
            },
          ],
        },
      },
    },

    // Step 3.5 — Text/scenario: Mobilisationsplan + Sturzrisiko + bariatrische Hilfsmittel + Kinästhetik
    {
      stepId: "ce02-schmidt-plan-05-mobilisation-planen",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Förderung der Mobilität",
        "DNQP (2022): Expertenstandard Sturzprophylaxe in der Pflege",
        "Hatch F. / Maietta L. (1991): Kinästhetik — Konzept und Grundlagen",
        "DGUV Information 207-018 (2022): Patiententransfer / bariatrische Pflege",
        "DBfK (2021): Positionspapier Pflege bei Adipositas",
        "Deutsche Gesellschaft für Geriatrie DGG (2022)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-plan-mobilisation",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Mobilisationsplan — kleine Schritte, große Wirkung",
        body: "09:30 Uhr — du überlegst mit Frau Schmidt gemeinsam.\n\nFrau Schmidt sagt: \"Ich hab's versucht, wirklich. Aber dann bin ich so außer Atem. Das ist mir unangenehm, wenn alle zuschaün.\"\n\nDer Schlüssel: Nicht \"Sport\" — sondern erreichbare Alltagsbewegungen. Dreimal täglich kurz aufstehen und zum Waschbecken gehen. Warum ist das wichtig? Mobilisation verbessert die Insulinsensitivität (BZ sinkt), entlastet Druckpunkte (Dekubitusprophylaxe) und aktiviert den Beckenboden (hilft bei Inkontinenz). (DNQP 2020; DGG 2022)\n\n**Sturzrisiko-Assessment (DNQP Sturzprophylaxe 2022):** Frau Schmidt hat mehrere Risikofaktoren — Adipositas Grad II (Schwerpunktverlagerung beim Aufstehen), Belastungsinkontinenz (Eile zur Toilette), entgleister Diabetes (mögliche Hypoglykämie unter Metformin neu), Atemnot bei Anstrengung. Das ist ein erhöhtes Sturzrisiko — dokumentationspflichtig und Teil des Pflegeplans.\n\n**Bariatrische Hilfsmittel — Tragkraft-Schwellen (DGUV 207-018, DBfK 2021):**\n- **Standardbett**: meist bis 135–185 kg belastbar — bei BMI 38 / 98 kg ausreichend, **Tragkraft trotzdem prüfen** und im Pflegeplan vermerken\n- **Schwerlast-/Bariatriebett (Modelle ab ca. 200-450 kg Tragkraft verfügbar) und Lifter**: zwingend bei Patientengewicht > 150 kg (Lifter-Pflicht zum Schutz von Patient UND Pflege-Rücken). Frau Schmidt liegt darunter, aber **Equipment-Awareness gehört in den Plan**\n- **Bett**: Bettleiter/Bettaufrichter zum eigenständigen Aufrichten\n- **Aufstehen**: Aufstehhilfe am Bettrand, ggf. Rollator (XXL-Belastbarkeit prüfen) für sichere Gehstrecke zum Waschbecken\n- **Sitzen**: Bariatrie-Stuhl mit Armlehnen + erhöhter Sitzfläche, Tragkraft prüfen (Standard-Stühle teils nur bis 110 kg)\n- **Toilettenstuhl/Toilettensitzerhöhung**: Belastbarkeit prüfen, breitere Sitzfläche\n- **Anti-Rutsch-Socken** + festes Schuhwerk (NICHT barfuß auf Diabetikerfuß!)\n\n**Kinästhetik nach Hatch/Maietta:** Bei der Mobilisation gilt: Frau Schmidt bewegt SICH SELBST — du begleitest und sicherst. Niemals \"unter den Achseln greifen\" oder \"hochziehen\" (Schultergelenk-Risiko + Rückenbelastung Pflege). Stattdessen: seitlich am Becken/Rumpf sichern, sie bestimmt das Tempo. Aufstehbewegung über die Seite (Bett-Kante → 90°-Drehung über Hüfte → Aufstehen mit Bettleiter).\n\nDein Ziel: Frau Schmidt verstehen warum Bewegung ihr direkt nutzt — nicht als \"Abnahme-Programm\" verkaufen, das bei ihr Widerstand weckt.",
        fallbezug:
          "Frau Schmidt hat Angst vor dem Außer-Atem-Sein. Der Ansatz: kleine erreichbare Schritte, sofort spürbare Vorteile, sichere Hilfsmittel, kinästhetisch korrekte Begleitung.",
        glossarBegriffe: ["Insulinsensitivität", "Dekubitusprophylaxe", "Kinästhetik", "Bariatrische Pflege"],
      },
      contentB1: {
        title: "Mobilisations-Plan bei Adipositas",
        body: "Du planst mit Frau Schmidt zusammen kleine Bewegungs-Schritte.\n\nFrau Schmidt sagt: \"Ich hab's versucht. Aber dann bin ich so außer Atem. Das ist mir unangenehm.\"\n\nWas hilft? Nicht \"Sport machen\" — das ist zu viel. Besser: Kleine Schritte — zum Beispiel dreimal täglich kurz aufstehen und zum Waschbecken gehen.\n\nWarum ist das wichtig?\n- Bewegung senkt den Blutzucker (= der Körper braucht weniger Insulin)\n- Bewegung schützt vor Dekubitus (= Druck-Stelle) — der Druck ändert sich\n- Bewegung stärkt den Beckenboden (= hilft bei Inkontinenz)\n\n**Sturz-Risiko prüfen (DNQP 2022):** Frau Schmidt hat mehrere Risiken: BMI 38, Inkontinenz (sie geht schnell zur Toilette), Diabetes (Unterzucker möglich), Atemnot. Das ist ein erhöhtes Sturz-Risiko — du dokumentierst das.\n\n**Hilfsmittel bei Adipositas (= bariatrische Hilfsmittel):**\n- Bett: Tragkraft prüfen! Standard-Betten sind oft nur bis 135-185 kg belastbar. Frau Schmidt wiegt 98 kg — Standard reicht. **Wichtig:** Über 150 kg ist ein Schwerlast-/Bariatriebett (Modelle ab ca. 200-450 kg Tragkraft verfügbar) und ein Lifter Pflicht nach individüller Risikobewertung (DGUV 207-018).\n- Bett: Bettleiter zum Aufrichten\n- Aufstehen: Rollator (Tragkraft prüfen!), Aufstehhilfe am Bettrand\n- Sitzen: Bariatrie-Stuhl (extra breit, mit Armlehnen) — auch hier Tragkraft prüfen\n- Anti-Rutsch-Socken (NICHT barfuß — Diabetikerfuß!)\n\n**Kinästhetik (= Bewegungs-Lehre nach Hatch/Maietta):** Frau Schmidt bewegt SICH SELBST — du begleitest. Niemals \"unter den Achseln greifen\" oder \"hochziehen\". Stattdessen: seitlich am Becken/Rumpf sichern. Sie bestimmt das Tempo.",
        glossarBegriffe: ["Dekubitusprophylaxe", "Kinästhetik", "Bariatrische Pflege"],
      },
    },

    // Step 3.6 — Branching: Inkontinenz-Versorgung würdevoll
    {
      stepId: "ce02-schmidt-plan-06-inkontinenz-würde",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "DNQP (2014): Expertenstandard Förderung der Harnkontinenz in der Pflege",
        "§ 2 PflBG — Ressourcenorientierte Pflege",
        "AWMF S2k-Leitlinie (2023): Diagnostik und Therapie Harninkontinenz",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-plan-inkontinenz-würde",
      tag: "pflege",
      contentC1: {
        title: "Inkontinenz-Versorgung — Würde wahren",
        body: "Frau Schmidt braucht eine Inkontinenzversorgung für den stationären Aufenthalt. Das Thema ist ihr unangenehm — sie hat es oben kaum angesprochen. Wie gehst du das an?",
        glossarBegriffe: ["Belastungsinkontinenz", "Ressourcenorientierung"],
      },
      contentB1: {
        title: "Inkontinenz-Versorgung — wie gehst du vor?",
        body: "Frau Schmidt braucht eine Inkontinenz-Versorgung. Das Thema ist ihr unangenehm. Wie gehst du vor?",
        glossarBegriffe: ["Belastungsinkontinenz"],
      },
      question: {
        fragetext:
          "Frau Schmidt braucht eine Inkontinenzversorgung für den stationären Aufenthalt. Wie gehst du das an?",
        branchingOptions: [
          {
            text: "Ich lege eine Vorlage aufs Bett und sage nichts — das ist weniger unangenehm für Frau Schmidt.",
            feedback:
              "Kein Informieren, keine Selbstbestimmung — Würde verletzt durch Schweigen. Frau Schmidt kann keine Entscheidung treffen, weil sie nicht gefragt wird. Auch gut gemeinte Fürsorge ohne Einbeziehung verletzt das Autonomieprinzip (§ 2 PflBG). Frau Schmidt bemerkt die Vorlage und fühlt sich übergangen.",
            feedbackB1:
              "Nein! Frau Schmidt hat keine Wahl. Das ist nicht respektvoll. Frau Schmidt hat das Recht zu entscheiden. Ohne Fragen ist das eine Verletzung ihrer Würde.",
            isCorrect: false,
          },
          {
            text: "\"Frau Schmidt, ich würde Ihnen eine diskrete Versorgung empfehlen, damit Sie sich sicher fühlen. Darf ich erklären, was wir haben?\"",
            feedback:
              "Richtig. Diskret, informiert, selbstbestimmt. Du erklärst ohne zu urteilen, bietest Optionen an, lässt Frau Schmidt entscheiden. Das ist ressourcenorientierte Pflege nach § 2 PflBG — stärken was da ist, nicht übernehmen was noch geht.",
            feedbackB1:
              "Richtig! Diskret (= niemand sieht es) und informiert — so bleibt Frau Schmidt in ihrer Würde. Sie kann selbst entscheiden.",
            isCorrect: true,
          },
          {
            text: "Ich trage es einfach im Pflegebericht ein, der Arzt entscheidet dann.",
            feedback:
              "Pflege darf nicht schweigen. Inkontinenz-Beratung und Versorgung ist Pflegeaufgabe — nicht Arztaufgabe. Wer delegiert, was er selbst können muss, verletzt den Beratungsauftrag der Pflege (DNQP 2017). Frau Schmidt erhält keine Beratung und keine Entscheidungsgrundlage.",
            feedbackB1:
              "Nein! Beratung und Versorgung bei Inkontinenz ist Pflege-Aufgabe. Du musst Frau Schmidt informieren und mit ihr entscheiden — nicht auf den Arzt warten.",
            isCorrect: false,
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 30,
};
