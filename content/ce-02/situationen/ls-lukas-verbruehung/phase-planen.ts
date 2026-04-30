// CE-02 Situation Lukas — Phase 3: Planen
// Steps: 5 · Bloom: B3–B5 · Zeit: ~15–25 Min
// Ethisches Kernthema: Kinderschutz-Prozess transparent kommunizieren
// Quelle: phase-planen.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_PLANEN: SituationsPhase = {
  phaseId: "ls-lukas-planen",
  phase: "planen",
  titel: "Planen — Maßnahmen und Kinderschutz-Kommunikation",
  titelB1: "Was planen wir für Lukas?",
  kontext:
    "Kathrin und du habt euch kurz auf den Flur zurückgezogen. Lukas schläft kurz ein — das Schmerzmittel wirkt, Sandra hat sich neben ihn gelegt. Kevin steht draußen vor der Tür, trinkt Kaffee, sagt nichts.\n\nIhr plant jetzt konkret: Was braucht Lukas in den nächsten Stunden, was in den nächsten Tagen? Die Wundversorgung, die Flüssigkeit, die Schmerzbehandlung — das sind die medizinischen Säulen. Aber es gibt eine vierte Säule, die genauso wichtig ist: Die Kinderschutz-Abklärung.\n\nKathrin sagt: \"Die Sozialarbeiterin kommt heute Nachmittag. Das ist Standard bei Kindern unter 6 mit Verbrühung über 10 % — nicht mehr, nicht weniger. Kevin weiß es noch nicht.\"\n\nDas ist das ethische Kernthema dieser Phase: Wie kommunizierst du einen Prozess der als Verdacht wahrgenommen werden könnte — obwohl er keiner ist?",
  kontextB1:
    "Kathrin und du geht kurz auf den Flur. Lukas schläft. Sandra liegt neben ihm. Kevin steht draußen.\n\nJetzt plant ihr: Was braucht Lukas? Wundversorgung, Flüssigkeit, Schmerzmittel. Und: Die Sozialarbeiterin kommt heute Nachmittag — das ist Standard bei jedem Kind unter 6 mit Verbrühung über 10 %. Kevin weiß es noch nicht.\n\nWie sagst du das Kevin — ohne dass er das Gefühl hat, ihr beschuldigt ihn?",
  kernSteps: [
    // Step 3.1 — Matrix: Maßnahmen einordnen
    {
      stepId: "ce02-lukas-plan-01-maßnahmen-matrix",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGV 2023", "DNQP 2022", "§ 4 KKG 2012"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-plan-maßnahmen",
      tag: "pflege",
      transition: "Maßnahmen sortiert. Aber warum eigentlich feuchte Wundbehandlung?",
      contentC1: {
        title: "Maßnahmen einordnen — Zeitachse und Bereich",
        body: "Sortiere die Maßnahmen in die richtige Zelle: nach Zeitachse (sofort / heute / bis Entlassung) und Bereich (Wunde / Flüssigkeit / Kommunikation).",
        glossarBegriffe: ["Wundauflage", "Flüssigkeitsbilanz"],
      },
      contentB1: {
        title: "Maßnahmen sortieren",
        body: "Sortiere die Maßnahmen: Wann passiert was? Und in welchem Bereich?",
        glossarBegriffe: ["Wundauflage", "Flüssigkeitsbilanz"],
      },
      question: {
        fragetext:
          "Sortiere jede Maßnahme: Zeitachse (sofort / heute / bis Entlassung) × Bereich (Wunde / Flüssigkeit / Kommunikation).",
        axisX: { label: "Zeitachse", low: "Sofort", high: "Bis Entlassung" },
        axisY: { label: "Bereich", low: "Wunde", high: "Kommunikation" },
        items: [
          {
            id: "m1",
            text: "Feuchte Wundauflage anlegen",
            correctQuadrant: 1,
          },
          {
            id: "m2",
            text: "Flüssigkeitsprotokoll starten",
            correctQuadrant: 1,
          },
          {
            id: "m3",
            text: "Schmerzmittel nach Schema — nächste Gabe planen",
            correctQuadrant: 2,
          },
          {
            id: "m4",
            text: "Verbandwechsel nach 48–72 Stunden planen",
            correctQuadrant: 2,
          },
          {
            id: "m5",
            text: "Sandra zum nächsten Anlegen anleiten",
            correctQuadrant: 3,
          },
          {
            id: "m6",
            text: "Entlassungsgespräch: Wundversorgungsplan für Kinderarzt",
            correctQuadrant: 4,
          },
        ],
      },
    },

    // Step 3.1b — Inline-Wissen: Feuchte Wundbehandlung — Prinzip
    // Schüler hat die Maßnahmen-Matrix sortiert (Step 3.1). Bevor der Text-Step zur
    // feuchten Wundbehandlung kommt, braucht er das Grundprinzip: WARUM feucht?
    {
      stepId: "ce02-lukas-plan-01b-feuchte-wundbehandlung",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Winter 1962 — Moist Wound Healing",
        "DGV 2023 — Leitlinie Thermische Verletzungen",
        "DNQP 2024 — Expertenstandard Pflege von Menschen mit chronischen Wunden",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-plan-feuchte-prinzip",
      tag: "krankheitslehre",
      themaPrimaer: "haut",
      themenSekundaer: ["säuglingspflege"],
      transition: "Das Prinzip steht. Jetzt die konkreten Materialien für Lukas.",
      contentC1: {
        title: "Warum feucht heilen? — Das Winter-Prinzip",
        body: "",
        glossarBegriffe: ["Feuchte Wundbehandlung", "Epithelisierung", "Mazeration", "Okklusion"],
      },
      contentB1: {
        title: "Warum heilt feucht besser als trocken?",
        body: "",
        glossarBegriffe: ["Feuchte Wundbehandlung", "Epithelisierung (= neue Haut wächst)"],
      },
      inlineWissen: {
        bausteinRef: "haut-feuchte-wundbehandlung-prinzip",
        storyAufhaenger:
          "Kathrin sagt: \"Feuchte Wundbehandlung.\" Das klingt logisch — aber warum? Jahrzehntelang hat man Wunden trocken gehalten (\"An der Luft heilt es am besten\"). Was hat sich geändert?",
        storyAufhaengerB1:
          "Kathrin sagt: \"Wir machen feuchte Wundbehandlung.\" Aber warum feucht? Früher hat man Wunden trocken gelassen. Was ist besser?",
        kerntext:
          "**Das Winter-Prinzip (1962):**\n\nGeorge Winter bewies in den 1960ern: Wunden heilen unter feuchten Bedingungen **bis zu 50 % schneller** als unter trockenen.\n\n**Warum?**\n\n• **Epithelzellen wandern schneller** über eine feuchte Oberfläche — wie auf einer Wasserrutsche statt auf Sandpapier.\n\n• **Weniger Schorf-Bildung** — unter Schorf stockt die Zellwanderung.\n\n• **Wachstumsfaktoren bleiben in der Wunde** — sie werden nicht ausgetrocknet.\n\n• **Weniger Schmerz** — feuchte Auflagen reizen die Nervenenden weniger.\n\n**Aber Achtung — feucht ≠ nass:**\n\n• Zu viel Feuchtigkeit → **Mazeration** (Haut weicht auf, wird weiß, anfällig für Infektion).\n\n• Die Kunst ist das **feuchte Gleichgewicht**: Wundauflage nimmt überschüssiges Exsudat auf, hält aber die Wundfläche feucht.\n\n**Bei Lukas:** Grad-2a-Verbrühung nässt (Exsudat). Ein silikonbeschichteter Polyurethanschaum (z.B. Mepilex) saugt das Exsudat auf, hält die Wunde feucht, klebt nicht an der Wundfläche — schmerzarmer Verbandwechsel.",
        kerntextB1:
          "**Das Winter-Prinzip (1962):**\n\nWunden heilen unter feuchten Bedingungen **bis zu 50 % schneller** als unter trockenen.\n\n**Warum?**\n\n• Neue Hautzellen wandern schneller über eine feuchte Fläche.\n\n• Weniger Schorf — Schorf bremst die Heilung.\n\n• Weniger Schmerzen — feuchte Auflagen reizen weniger.\n\n**Aber:** Zu viel Feuchtigkeit ist auch schlecht. Die Haut weicht auf (= Mazeration). Die richtige Auflage nimmt überschüssiges Wundwasser auf, hält aber die Wunde feucht.\n\n**Bei Lukas:** Grad 2a nässt. Die Wundauflage (Mepilex) saugt das Wasser auf. Die Wunde bleibt feucht, aber nicht nass. Beim nächsten Wechsel klebt sie nicht fest.",
        faustregel:
          "Feucht = schnellere Heilung + weniger Schmerz. Aber feucht ≠ nass — Mazeration vermeiden.",
        faustregelB1:
          "Feucht heilt schneller und tut weniger weh. Aber zu nass ist auch schlecht — Mazeration.",
        spektrum: [
          {
            patientName: "Frau Yilmaz (Dekubitus Kat. II)",
            situationsId: "ls-yilmaz-spirale2",
            hauptfaktor: "Dekubitus — feuchte Wundbehandlung als Standard",
            kurzbeschreibung:
              "Auch bei Frau Yilmaz' Dekubitus Kat. II gilt das Winter-Prinzip. Hydrokolloide oder Schaumverbände halten die Wundfläche feucht. Der Unterschied zu Lukas: Dekubitusheilung daürt länger (Wochen bis Monate) und braucht Druckentlastung als Hauptmaßnahme.",
          },
          {
            patientName: "Herr Petrov (Schlaganfall)",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Immobilität — präventive Hautpflege",
            kurzbeschreibung:
              "Bei Herr Petrov geht es um Dekubitus-Prophylaxe: Hautpflege mit W/O-Lotionen, Mikrolagerung, Druckentlastung. Keine offene Wunde — aber das Wissen um Feuchtigkeitsbalance der Haut ist dasselbe Prinzip.",
          },
          {
            patientName: "Herr Nguyen (Stoma)",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Peristomale Haut — Feuchtigkeit als Feind",
            kurzbeschreibung:
              "Bei Herr Nguyens Stoma ist Feuchtigkeit das Problem, nicht die Lösung: Stuhlkontakt mazeriert die peristomale Haut. Hier schützt man mit Hautschutzplatten VOR Feuchtigkeit — Gegenbeispiel zum Winter-Prinzip.",
          },
        ],
        sonstBox:
          "Weitere Wundauflagen-Typen: **Hydrogel** (spendet Feuchtigkeit bei trockenen Wunden), **Alginat** (bei stark nässenden Wunden, aus Braunalgen), **Silber-beschichtete Auflagen** (bei Infektionsgefahr, bakterizid), **Vakuumtherapie (NPWT)** — bei tiefen, schlecht heilenden Wunden (ab Grad 2b/3). All das lernst du in CE-02 Thema Haut vertieft.",
        sonstBoxB1:
          "Andere Wundauflagen: **Hydrogel** (gibt Feuchtigkeit ab), **Alginat** (bei viel Wundwasser), **Silber-Auflagen** (gegen Infektion), **Vakuum-Therapie** (bei tiefen Wunden). Das kommt in CE-02 Thema Haut genaür.",
        karteikarte: {
          vorderseite:
            "Kathrin sagt: \"Feuchte Wundbehandlung.\" Warum heilt eine Wunde feucht schneller als trocken — und wann wird Feuchtigkeit zum Problem?",
          rueckseite:
            "Winter-Prinzip (1962): Feuchtes Milieu beschleunigt Epithelzell-Wanderung um bis zu 50 %, reduziert Schorf-Bildung und Schmerz. Problem: Zu viel Feuchtigkeit → Mazeration (Hautaufweichung, Infektionsrisiko).\n\nSpektrum: Yilmaz/Dekubitus (feucht = Standard), Petrov (Hautpflege = Prävention), Nguyen/Stoma (Feuchtigkeit = Feind).\n\nFaustregel: **Feucht = schneller + weniger Schmerz. Aber feucht ≠ nass.**",
        },
      },
    },

    // Step 3.2 — Text (scenario): Wundversorgung feuchte Behandlung
    {
      stepId: "ce02-lukas-plan-02-wundversorgung-feuchte",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DGV-Leitlinie Verbrennungsbehandlung 2023", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-plan-feuchte-wundbehandlung",
      tag: "krankheitslehre",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Feuchte Wundbehandlung bei Grad 2a — warum und wie",
        body: "**Warum feuchte Wundbehandlung?** Das feuchte Wundmilieu beschleunigt die Epithelisierung, schützt die Wundfläche vor Austrocknung und reduziert den Schmerz beim nächsten Verbandwechsel — weil die Auflage nicht an der Wunde festklebt.\n\n**Materialien für Lukas:**\n1. Hydroaktive Wundauflage — bei nässender Grad-2a-Verbrühung im Akutstadium ist ein **silikonbeschichteter Polyurethanschaum** (z. B. Mepilex Border / Mepilex Ag) erste Wahl: nimmt Exsudat auf, haftet nicht an der Wunde, schmerzarmer Wechsel. Hydrokolloid-Verbände sind in der späteren Phase (saubere, granulierende Wunde, geringes Exsudat) eine Option, aber bei stark nässenden Akutwunden suboptimal — Mazerationsgefahr durch Exsudatstau (DGV 2023; Hoehl/Kullick 2019).\n2. Kein festes Einwickeln — Lukas muss seinen Arm bewegen können\n3. Keine alkoholhaltigen Desinfektionsmittel — Schleimhaut und Kinderhaut reagieren empfindlich\n4. Keine Chlorhexidin-Mundspülungen bei Kindern unter 6 Jahren (Schluckgefahr, Schleimhautreizung — DGKJ 2022); kindgerechte Alternative für die Mundpflege ist Octenidin oder eine schluckbare Kamillen-/Salbei-Lösung\n\n**Intervall:** 48–72 Stunden bei intakten Blasen, bei Zeichen von Infektion früher.\n\n**Hinweis Blasen-Management:** Kleine intakte Blasen werden belassen — sie sind natürlicher Wundschutz. Großflächige oder spannungsreiche Blasen können vom Arzt steril punktiert werden (Stichkanal, Blasendach belassen) — das ist ärztliche Entscheidung, keine Pflegemaßnahme (DGV 2023).\n\nQuelle: _(DGV-Leitlinie Thermische Verletzungen, 2023; Hoehl/Kullick 2019; DGKJ 2022 Mundpflege Kleinkind)_",
        glossarBegriffe: ["Epithelisierung", "Polyurethanschaum (silikonbeschichtet)", "Mazeration", "Octenidin"],
      },
      contentB1: {
        title: "Feuchte Wundversorgung — Schritt für Schritt",
        body: "**Warum feucht?** Feucht heilt besser als trocken. Die Auflage klebt nicht an der Wunde — das macht den nächsten Verbandwechsel weniger schmerzhaft.\n\n**Was wir brauchen:**\n1. Wundauflage die nicht klebt — bei Lukas (nässende Wunde, Akutphase) ist ein **silikonbeschichteter Polyurethanschaum** (z. B. Mepilex) erste Wahl. Er saugt das Wundwasser auf und klebt nicht. Hydrokolloid passt erst später — wenn die Wunde nicht mehr stark nässt.\n2. Kein fest Einwickeln — Lukas muss seinen Arm bewegen\n3. Kein Alkohol auf die Wunde — zu reizend für Kinderhaut\n4. Kein Chlorhexidin für die Mundpflege bei Kindern unter 6 Jahren (Schluckgefahr, reizt die Schleimhaut). Stattdessen: Octenidin oder Kamille — die kann Lukas schlucken ohne Gefahr.\n\n**Blasen:** Kleine ganze Blasen lassen wir zu — sie schützen die Wunde. Große oder pralle Blasen kann der Arzt aufstechen (steril). Das macht aber der Arzt, nicht die Pflege.\n\n**Wann Wechsel?** Alle 48–72 Stunden — bei intakten Blasen. Früher bei Zeichen einer Entzündung.",
        glossarBegriffe: ["Wundauflage", "Polyurethanschaum", "Octenidin"],
      },
    },

    // Step 3.3 — Calculation: Flüssigkeitsbedarf
    {
      stepId: "ce02-lukas-plan-03-flüssigkeitsbedarf",
      phase: 3,
      stepType: "calculation",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Holliday/Segar 1957", "GNPI 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-plan-flüssigkeit",
      tag: "anatomie",
      contentC1: {
        title: "Flüssigkeitsbedarf berechnen — Holliday-Segar",
        body: "Lukas wiegt 13,2 kg. Berechne seinen Grundflüssigkeitsbedarf nach der Holliday-Segar-Regel für Kinder:\n\n**Formel:** 100 ml/kg/Tag für die ersten 10 kg + 50 ml/kg/Tag für jedes weitere kg (10–20 kg)\n\nBerechne: Wie viel ml Grundflüssigkeitsbedarf hat Lukas pro Tag?",
        glossarBegriffe: ["Holliday-Segar-Regel", "Grundflüssigkeitsbedarf"],
      },
      contentB1: {
        title: "Wie viel soll Lukas trinken?",
        body: "Lukas wiegt 13,2 kg. Wir berechnen seinen Flüssigkeitsbedarf.\n\nFormel:\n- Für die ersten 10 kg: 100 ml pro kg pro Tag\n- Für das nächste kg (bis 20 kg): 50 ml pro kg pro Tag\n\nBerechne: Wie viel ml pro Tag braucht Lukas mindestens?",
        glossarBegriffe: ["Flüssigkeitsbedarf", "Holliday-Segar-Regel"],
      },
      question: {
        fragetext:
          "Berechne Lukas' Grundflüssigkeitsbedarf (Holliday-Segar). Lukas wiegt 13,2 kg.",
        calculation: {
          instruction:
            "Holliday-Segar: 100 ml/kg × 10 kg + 50 ml/kg × 3,2 kg = ?",
          formula: "100 × 10 + 50 × (Gewicht – 10)",
          correctValue: 1160,
          unit: "ml/Tag",
          tolerance: 10,
          explanation:
            "Richtig: 100 ml × 10 kg = 1000 ml + 50 ml × 3,2 kg = 160 ml → Grundbedarf 1160 ml/Tag. Zusatzhinweis: Bei Verbrühung kommt ein Verbrühungs-Zusatzbedarf hinzu, den der Arzt nach standardisierten Schema-Formeln berechnet (Parkland-Formel: 4 ml × kg × % KOF in 24h, davon 50 % in den ersten 8h; bei Kindern oft modifizierte Galveston-Formel). Für Lukas wäre Parkland orientierend: 4 × 13,2 × 15 ≈ 790 ml zusätzlich in 24 h. Die genaue Menge legt der Arzt fest und ergänzt mit i.v.-Flüssigkeit, wenn das Trinkziel nicht erreicht wird.",
          explanationB1:
            "Richtig: 10 kg × 100 ml = 1000 ml. Noch 3,2 kg × 50 ml = 160 ml. Zusammen: 1160 ml pro Tag. Das ist der Grundbedarf. Bei Verbrühung braucht Lukas noch mehr Flüssigkeit. Der Arzt rechnet das nach einer Standard-Formel (Parkland) aus: ungefähr 790 ml extra für die ersten 24 Stunden. Diese genaue Menge entscheidet der Arzt.",
        },
      },
    },

    // Step 3.4 — Branching: Ethisches Dilemma Kinderschutz
    {
      stepId: "ce02-lukas-plan-04-ethisches-dilemma-kinderschutz",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 4 KKG 2012", "§ 8a SGB VIII"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-lukas-plan-kinderschutz-kommunikation",
      tag: "pflege",
      contentC1: {
        title: "Ethisches Dilemma — Kevin und die Sozialarbeiterin",
        body: "Kevin kommt ins Zimmer. Er hat draußen offenbar etwas gehört — oder er hat es sich zusammengereimt. Er sagt laut:",
        glossarBegriffe: ["§ 4 KKG", "Deeskalation"],
      },
      contentB1: {
        title: "Kevin ist laut — was sagst du?",
        body: "Kevin kommt ins Zimmer. Er sagt laut:",
        glossarBegriffe: ["Deeskalation"],
      },
      question: {
        fragetext:
          "Kevin sagt: \"Wir haben gehört es kommt noch jemand von der Sozialstation — das haben wir uns nicht verdient!\" Du antwortest:",
        branchingOptions: [
          {
            text: "\"Das Gespräch ist Pflicht, ich kann nichts daran ändern.\"",
            isCorrect: false,
            feedback:
              "Stimmt rechtlich — aber es eskaliert die Situation weiter. 'Pflicht' und 'ich kann nichts daran ändern' kommunizieren: Bürokratie, keine Fürsorge. Kevin fühlt sich nicht gehört und nicht ernst genommen. Er wird lauter. Lukas wacht auf.",
            feedbackB1:
              "Nicht gut. 'Pflicht' klingt kalt. Kevin fühlt sich nicht ernst genommen. Er wird lauter. Lukas wacht auf.",
          },
          {
            text: "\"Das stimmt gar nicht — keine Sorge.\"",
            isCorrect: false,
            feedback:
              "Falsch — das ist eine Lüge. Frau Fink kommt. Wenn Kevin das herausfindet, ist das Vertraün zerstört. Lügen schützen im Moment — aber zerstören die Beziehung. Nie lügen in der Pflege um eine Situation zu entschärfen.",
            feedbackB1:
              "Falsch — das stimmt nicht. Frau Fink kommt wirklich. Wenn Kevin das merkt, ist alles Vertraün weg. Lügen geht nicht.",
          },
          {
            text: "\"Ich verstehe, dass sich das anfühlt wie ein Vorwurf — das ist es nicht. Bei jeder Verbrühung über 10 Prozent bei Kindern führen wir dieses Gespräch, weil wir uns um das Kind sorgen. Nicht um Schuld. Lukas steht dabei im Mittelpunkt, nicht ihr als Eltern.\"",
            isCorrect: true,
            feedback:
              "Richtig. Drei Elemente: (1) Empathie zürst ('ich verstehe, dass sich das anfühlt wie...') — du musst Kevins Wahrnehmung nicht teilen, aber du anerkennst sie. (2) Standard klar machen ('bei jeder Verbrühung') — keine Ausnahme, keine Schuld. (3) Fokus auf Lukas setzen — das schützt die Eltern und erklärt das Ziel. Kevin muss nicht zustimmen — aber er hört es als Aussage der Fürsorge, nicht als Anklage.",
            feedbackB1:
              "Richtig. Du sagst drei Dinge: Ich verstehe deinen Eindruck. Das ist Standard für alle Kinder. Es geht um Lukas. Das ist die richtige Reihenfolge.",
          },
        ],
      },
    },

    // Step 3.5 — Matching: Interprofessionelle Rollen
    {
      stepId: "ce02-lukas-plan-05-interprofessionell",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "II.2",
      quellen: ["§ 4 KKG 2012", "DGV 2023"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-lukas-plan-interprofessionell",
      tag: "pflege",
      contentC1: {
        title: "Wer macht was für Lukas?",
        body: "Verschiedene Berufsgruppen sind an Lukas' Versorgung beteiligt. Ordne jede Aufgabe der richtigen Berufsgruppe zu.",
        glossarBegriffe: ["Interprofessionelle Zusammenarbeit"],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Verschiedene Menschen helfen Lukas. Ordne die Aufgaben zu.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Ordne jede Aufgabe der richtigen Berufsgruppe zu.",
        matchingPairs: [
          {
            left: "Verordnung Schmerzmittelschema + Wundtherapieverordnung + Grad-Bestätigung",
            right: "Ärztin / Arzt",
          },
          {
            left: "Verbandwechsel, Schmerzassessment KUSS, Flüssigkeitsbilanz, Elternanleitung",
            right: "Pflegefachkraft",
          },
          {
            left: "Kinderschutz-Screening nach § 4 KKG, Ressourcenprüfung Eltern, Entlastungsgespräch",
            right: "Sozialarbeiterin",
          },
          {
            left: "Ggf. Kontrakturprophylaxe wenn Narbenbildung nach Heilung (bei Grad 2b oder Grad 3)",
            right: "Physiotherapie",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};
