// CE-02 Situation Petrov — Phase 3: Planen
// Steps: 5 · Bloom: B3-B4 · Zeit: ~20-35 Min
// Quelle: phase-planen.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_PLANEN: SituationsPhase = {
  phaseId: "ls-petrov-planen",
  phase: "planen",
  titel: "Planen & Priorisieren",
  titelB1: "Den Plan machen",
  kontext:
    "07:40 Uhr. Du stehst kurz vor dem Zimmer mit deinen Notizen. Du weißt jetzt was Herrn Petrov bedroht. Jetzt musst du strukturiert planen: Welche Pflegeziele? Welche Maßnahmen? In welcher Reihenfolge? Du hast 3 Stunden bis zum Schichtwechsel.",
  kontextB1:
    "Es ist 07:40 Uhr. Du stehst vor dem Zimmer. Du weißt jetzt was Herrn Petrov bedroht. Jetzt planst du: Was machst du zuerst? Was ist das Ziel? Du hast 3 Stunden bis zum Ende der Schicht.",
  kernSteps: [
    // Step 3.1 — Text: PESR-Schema erklären (scenario)
    {
      stepId: "ce02-petrov-plan-01-pesr-aspiration",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981 — Pflegeprozess (adaptiert)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-plan-pesr",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "PESR — Pflegeprobleme formulieren",
        body: "**Pflegeproblem** = eine konkrete pflegerische Herausforderung, die Maßnahmen erfordert. Das PESR-Schema strukturiert solche Pflegeprobleme so, dass sie direkt handlungsleitend sind. PESR = Problem / Etiologie / Symptom / Ressource.\n\n**Aspirationsgefahr** = das Risiko, dass Speichel, Flüssigkeit oder Nahrung unter die Stimmritze in die unteren Atemwege gelangen. Bei Dysphagie eine der größten Pflegerisiken.\n\nBeispiel aus dem Fall:\n**Problem:** Aspirationsgefahr bei Herrn Petrov.\n**Etiologie:** Dysphagie Grad 2 nach ischämischem Apoplex links (Schädigung der Schluckmuskulatur durch linkshemisphärische Läsion).\n**Symptom:** Husten nach Schluckversuch mit dünnflüssiger Flüssigkeit, feuchte Stimme nach dem Schlucken (GUSS-Befund aus Akte).\n**Ressource:** Schlucken breiiger Konsistenz sicher möglich. Herr Petrov ist kooperativ und versteht Anweisungen trotz Aphasie.\n\n**Dekubitusrisiko** (= Dekubitus-Risiko) = die Wahrscheinlichkeit, einen Dekubitus zu entwickeln; bei Immobilität, fehlender Sensibilität und Mangelernährung erhöht.\n\nSo wird aus einer Diagnose eine pflegerisch handlungsleitende Formulierung — konkret, messbar, lösungsorientiert. (Fiechter/Meier 1981; DNQP 2017)",
        fallbezug:
          "Herrn Petrovs Aspirationsgefahr als Vorlage für das PESR-Schema.",
        glossarBegriffe: ["PESR", "PESR-Schema", "Etiologie", "Ressource", "Aspiration", "Aspirationsgefahr", "Pflegeproblem", "Dekubitusrisiko", "Dekubitus-Risiko", "Pflege", "Immobilität", "Risiko", "messbar", "Flüssigkeit", "Trinken", "Ursache", "Husten", "Problem", "Mangelernährung", "Dekubitus", "Konsistenz", "Apoplex", "Aphasie"],
      },
      contentB1: {
        title: "PESR — Was ist das?",
        body: "**Pflegeproblem** = eine Schwierigkeit, bei der die Pflege helfen muss. Das PESR-Schema hilft dir, ein Pflege-Problem zu beschreiben. PESR = Problem / Ursache (= Etiologie) / Zeichen (= Symptom) / Ressource.\n\n**Aspirationsgefahr** = die Gefahr, dass Flüssigkeit oder Essen in die Lunge kommt.\n\nBeispiel bei Herrn Petrov:\nProblem: Er kann sich verschlucken (= Aspirationsgefahr).\nUrsache: Die Schluck-Muskeln funktionieren nicht gut (= Dysphagie Grad 2 nach Schlaganfall).\nZeichen: Er hustet beim Trinken. Seine Stimme klingt feucht.\nRessource: Er schluckt breiiges Essen sicher. Er arbeitet gut mit.\n\n**Dekubitusrisiko** = die Gefahr, dass ein Dekubitus entsteht.",
        fallbezug:
          "PESR-Beispiel: Aspirationsgefahr bei Herrn Petrov.",
        glossarBegriffe: ["PESR", "PESR-Schema", "Aspiration", "Aspirationsgefahr", "Dysphagie", "Pflegeproblem", "Dekubitusrisiko", "Pflege", "Immobilität", "Risiko", "messbar", "Flüssigkeit", "Trinken", "Ursache", "Husten", "Problem", "Mangelernährung", "Dekubitus", "Konsistenz", "Apoplex", "Aphasie"],
      },
    },

    // Step 3.2 — Freetext: PESR selbst formulieren
    {
      stepId: "ce02-petrov-plan-02-pesr-selbst-formulieren",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier 1981 — Pflegeprozess (adaptiert)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-petrov-plan-pesr-anwenden",
      tag: "pflege",
      contentC1: {
        title: "PESR selbst formulieren",
        body: "Formuliere jetzt selbst ein PESR für ein zweites Pflegeproblem bei Herrn Petrov. Wähle eines: Pneumoniegefahr, Dekubitusrisiko oder eingeschränkte Körperpflege. Achte auf alle vier Elemente: Problem — Etiologie (Ursache) — Symptom (beobachtbar) — Ressource (was kann er noch?).",
        glossarBegriffe: [
          "PESR",
          "Pneumonie",
          "Dekubitus",
          "Körperpflege",
        ],
      },
      contentB1: {
        title: "PESR selbst schreiben",
        body: "Jetzt schreibst du selbst ein PESR. Wähle ein Problem: Pneumonie-Gefahr, Dekubitus-Risiko oder eingeschränkte Körper-Pflege.",
        fallbezug:
          "Nutze die Informationen über Herrn Petrov aus der Akte.",
        glossarBegriffe: ["PESR", "Pneumonie", "Dekubitus"],
      },
      question: {
        fragetext:
          "Formuliere ein PESR für ein zweites Pflegeproblem bei Herrn Petrov. Wähle: Pneumoniegefahr, Dekubitusrisiko oder eingeschränkte Körperpflege.",
        musterantwort:
          "Beispiel Pneumoniegefahr: Problem: Pneumoniegefahr durch Immobilität und Dysphagie. Etiologie: Flache Atemexkursion durch Hemiparese + Aspirationsgefahr durch Dysphagie Grad 2. Symptom: Leicht vermindertes Atemgeräusch rechts basal, kein Auswurf. Ressource: Herr Petrov kann Anweisungen zu Atemübungen verstehen und folgen (Aphasie = Sprachproblem, nicht Verständnisproblem).",
        bewertungskriterien: [
          "Problem klar und spezifisch benannt",
          "Etiologie ursächlich und auf Herrn Petrov bezogen",
          "Symptom beobachtbar (nicht nur 'er hat Probleme')",
          "Ressource konkret vorhanden",
        ],
        satzanfaengeB1: [
          "Problem: Herr Petrov hat das Risiko für __________.",
          "Ursache: Das kommt daher, weil __________.",
          "Zeichen: Man sieht / hört / beobachtet __________.",
          "Ressource: Er kann noch __________ selbst tun.",
        ],
      },
    },

    // Step 3.3 — Matching: Pflegeziele
    {
      stepId: "ce02-petrov-plan-03-pflegeziele-matching",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter/Meier 1981 — SMART-Ziele",
        "DNQP Mobilität 2020",
        "KRINKO 2015",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-petrov-plan-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeprobleme → Pflegeziele",
        body: "**SMART** = ein Akronym für gute Zielformulierung: **S**pezifisch, **M**essbar, **A**kzeptiert (erreichbar), **R**elevant, **T**erminiert. **Pflegeproblem** = die konkrete pflegerische Herausforderung. Ordne die Pflegeprobleme den richtigen SMART-Pflegezielen zu.",
        glossarBegriffe: ["SMART", "Pflegeziel", "Pflegeproblem"],
      },
      contentB1: {
        title: "Welches Ziel passt zu welchem Problem?",
        body: "**SMART** = eine Regel für gute Ziele: konkret (S), messbar (M), erreichbar (A), wichtig (R), mit Zeit (T). **Pflegeproblem** = das pflegerische Problem. Ordne das Pflege-Problem dem richtigen Pflege-Ziel zu.",
        glossarBegriffe: ["Pflegeziel", "SMART", "Pflegeproblem"],
      },
      question: {
        fragetext:
          "Ordne jedes Pflegeproblem dem richtigen SMART-Pflegeziel zu.",
        matchingPairs: [
          {
            left: "Aspirationsgefahr",
            right:
              "Herr Petrov aspiriert bei oraler Nahrungsaufnahme in dieser Schicht nicht.",
          },
          {
            left: "Pneumoniegefahr",
            right:
              "Herr Petrov führt 3× täglich Atemübungen durch, pflegerische Atembeobachtung stabil (Frequenz, Atemtiefe, hörbare Geräusche).",
          },
          {
            left: "Dekubitusrisiko",
            right:
              "Keine Rötung Grad I an Prädilektionsstellen nach 2-stündlicher Umlagerung.",
          },
          {
            left: "Immobilität / Kontrakturrisiko",
            right:
              "Herr Petrov sitzt bis Ende der Frühschicht mindestens 10 Min an der Bettkante.",
          },
        ],
      },
    },

    // Step 3.3b — Inline-Wissen: Essen anreichen bei Dysphagie — Grundprinzipien
    // Bevor der Schüler die Maßnahmen priorisiert (inkl. "Frühstück anreichen"), soll er die
    // Grundprinzipien kennen.
    {
      stepId: "ce02-petrov-plan-03b-essen-anreichen",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "II.1",
      quellen: [
        "IDDSI 2019 — International Dysphagia Diet Standardisation Initiative",
        "DGG/DGN 2020 — Neurogene Dysphagie",
        "DNQP 2024 — Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-plan-essen-anreichen",
      tag: "pflege",
      themaPrimaer: "essen-anreichen",
      themenSekundaer: ["enterale-ernährung", "mundpflege"],
      transition: "Du weißt jetzt wie Anreichen bei Dysphagie funktioniert. Jetzt: Alles in die richtige Reihenfolge bringen.",
      contentC1: {
        title: "Essen anreichen bei Dysphagie — 5 Prinzipien",
        body: "",
        glossarBegriffe: ["Anreichen", "Dysphagie", "IDDSI", "Schluckreiz"],
      },
      contentB1: {
        title: "Essen geben bei Schluck-Störung — 5 Regeln",
        body: "",
        glossarBegriffe: ["Anreichen", "Dysphagie", "IDDSI"],
      },
      inlineWissen: {
        bausteinRef: "essen-anreichen-bei-dysphagie",
        storyAufhaenger:
          "Du planst die Frühschicht. Auf der Liste steht: \"Frühstück anreichen\". Klingt einfach — Teller hinstellen, Löffel in die Hand. Aber bei Herrn Petrov ist Essen Anreichen eine pflegerische Hochrisikomaßnahme. Jeder Löffel birgt Aspirationsgefahr.",
        storyAufhaengerB1:
          "Auf deiner Liste steht: Frühstück anreichen. Das klingt einfach. Aber bei Herrn Petrov ist es nicht einfach. Jeder Löffel ist ein Risiko.",
        kerntext:
          "**5 Prinzipien beim Anreichen bei Dysphagie:**\n\n• **Aufrechte Position** — Oberkörper auf 90° (Aspirationsschutz). Nie im Liegen essen lassen. Mindestens 20 Min nach dem Essen aufrecht bleiben (Reflux-Prävention).\n\n• **Richtige Konsistenz** — Nur das anbieten was verordnet ist. Bei Herrn Petrov: IDDSI Level 2 (mäßig verdickt) + Kostform B (weich). Normales Wasser ist verboten.\n\n• **Von der gesunden Seite** — Löffel von links anbieten (gesunde Seite). Der Schluckreiz wird über die gesunde Seite stimuliert. Bei Hemiparese rechts ist die rechte Wange weniger sensibel.\n\n• **Kleine Portionen** — Max. 5 ml (1 kleiner Teelöffel) pro Schluck. Zwischen den Schlucken warten bis der Mund leer ist. Nicht hetzen.\n\n• **Ruhe und Beobachtung** — Kein Radio, kein Gespräch während des Schluckens. Beobachten: Husten? Feuchte Stimme? Verzögertes Schlucken? Jedes Zeichen = sofort stoppen.\n\n**30 Min nach dem Essen:** Nochmals rechte Wangentasche kontrollieren (Speisereste bei Hemiparese). Dann: Mundpflege.",
        kerntextB1:
          "**5 Regeln beim Essen geben:**\n\n• **Aufrecht sitzen** — 90 Grad. Nie liegend essen. Mindestens 20 Minuten nach dem Essen aufrecht bleiben.\n\n• **Richtige Konsistenz** — Nur das geben, was der Arzt gesagt hat. Kein normales Wasser.\n\n• **Von links anbieten** — Links ist die gesunde Seite. Der Löffel kommt von links.\n\n• **Kleine Portionen** — Nur 1 kleiner Teelöffel (5 ml). Warten bis er geschluckt hat.\n\n• **Ruhe** — Kein Radio. Nicht reden beim Schlucken. Beobachten: Hustet er? Klingt die Stimme feucht?\n\n**30 Minuten nach dem Essen:** Rechte Wangen-Tasche prüfen. Dann: Mund-Pflege.",
        faustregel: "5 ml, 90 Grad, gesunde Seite, richtige Konsistenz, Ruhe. Jeder Löffel ist eine Pflegeentscheidung.",
        faustregelB1: "5 ml, 90 Grad, von links, angedickt, Ruhe. Bei jedem Löffel aufpassen.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz, vergisst zu kaün",
            kurzbeschreibung:
              "Bauer hat keine Dysphagie im klassischen Sinn — aber er vergisst das Kaün und Schlucken (Apraxie bei Demenz). Anreichen bei ihm: visuelles Vormachen, Hand zum Mund führen, nicht drängeln.",
          },
          {
            patientName: "Emilia",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling, Trinkschwäche",
            kurzbeschreibung:
              "Bei Emilia geht es um Füttern eines Säuglings mit Bronchiolitis: Aufrechte Position, kleine Portionen, häufige Pausen zum Atmen. Anderes Alter, ähnliches Prinzip.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Adipositas, Ernährungsberatung",
            kurzbeschreibung:
              "Schmidt hat keine Dysphagie — aber Ernährungsberatung ist bei ihr genauso pflegerisch anspruchsvoll: Kalorienreduktion bei gleichzeitigem Proteinmangel, Stigma-sensitive Kommunikation.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Du reichst Herrn Petrov das Frühstück an. Warum bietest du den Löffel von links an — nicht von rechts?",
          rueckseite:
            "Links ist die gesunde Seite. Der Schluckreiz wird über die gesunde Seite stimuliert. Die rechte Wange hat bei Hemiparese weniger Sensibilität — Speisereste sammeln sich dort unbemerkt. 5 Prinzipien: 90° aufrecht, IDDSI Level 2, von links, max. 5 ml/Löffel, Ruhe. Spektrum: Bauer (Apraxie bei Demenz, vergisst zu kaün), Emilia (Trinkschwäche Säugling), Schmidt (Ernährungsberatung bei Adipositas). Faustregel: **Jeder Löffel ist eine Pflegeentscheidung.**",
        },
      },
    },

    // Step 3.4 — Sorting: Maßnahmen priorisieren
    {
      stepId: "ce02-petrov-plan-04-priorisierung",
      phase: 3,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
        "KRINKO 2015",
        "DNQP Mobilität 2020",
        "IDDSI 2019",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-petrov-plan-priorisierung",
      tag: "pflege",
      transition: "Plan steht, Reihenfolge klar. Aber was wenn die orale Ernährung nicht reicht?",
      contentC1: {
        title: "Maßnahmen priorisieren",
        body: "Du hast 3 Stunden. Fünf Maßnahmen warten. **ABCDE** = ein Notfall- und Priorisierungs-Schema aus der Notfallmedizin: **A**irway (Atemweg), **B**reathing (Atmung), **C**irculation (Kreislauf), **D**isability (Bewusstsein), **E**xposure (Inspektion). Bringe die Maßnahmen in eine pflegerisch sinnvolle Reihenfolge.",
        glossarBegriffe: ["Priorität", "Pflegemaßnahmen", "ABCDE"],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Bringe die 5 Maßnahmen in eine sinnvolle Reihenfolge. **ABCDE** = Notfall-Schema: A = Atemweg, B = Atmung, C = Kreislauf, D = Bewusstsein, E = Inspektion. Wichtig: Die Atmung kommt am Anfang.",
        glossarBegriffe: ["Pflegemaßnahmen", "ABCDE"],
      },
      question: {
        fragetext:
          "Bringe die 5 Pflegemaßnahmen in die richtige Prioritätsreihenfolge für die Frühschicht.",
        sortItems: [
          "Oberkörperhochlagerung 30° + Atembeobachtung/-übungen (B in ABCDE — Aspirations-/Pneumonieprophylaxe sofort sichern)",
          "Kathetercheck + Bilanz (schnell, non-invasiv, Sicherheit + KRINKO-Standard)",
          "Ganzkörperpflege nach Bobath (längste Maßnahme, einschließlich Hautinspektion und Lagerung)",
          "Frühstück anreichen mit angedickter Flüssigkeit (nach Körperpflege, aufrechte Position bereits hergestellt)",
          "Mobilisation: Bettkante (nach dem Frühstück, wenn Vitalzeichen stabil und Energie da ist)",
        ],
      },
    },

    // Step 3.4b — Inline-Wissen: Enterale Ernährung — Wann reicht oral nicht mehr?
    // Bevor der Schüler die MC über enterale Ernährung beantwortet, braucht er Grundwissen.
    {
      stepId: "ce02-petrov-plan-04b-enterale-ernährung",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "II.1",
      quellen: [
        "DGEM/ESPEN 2020 — Klinische Ernährung in der Neurologie",
        "DNQP 2024 — Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-petrov-plan-enterale-ernährung-grundlagen",
      tag: "krankheitslehre",
      themaPrimaer: "enterale-ernährung",
      themenSekundaer: ["essen-anreichen"],
      transition: "Du kennst die Stufen. Jetzt eine konkrete Entscheidung: Braucht Herr Petrov eine Sonde?",
      contentC1: {
        title: "Enterale Ernährung — der Weg von oral zur Sonde",
        body: "",
        glossarBegriffe: ["enterale Ernährung", "NGS", "PEG", "ESPEN", "Kalorienbedarf"],
      },
      contentB1: {
        title: "Was ist enterale Ernährung?",
        body: "",
        glossarBegriffe: ["enterale Ernährung", "Sonde", "Kalorien"],
      },
      inlineWissen: {
        bausteinRef: "enterale-ernährung-oral-zu-sonde",
        storyAufhaenger:
          "Herr Petrov isst gerade noch oral — breiige Konsistenz, angedickte Flüssigkeit. Aber was, wenn er morgen weniger schafft? Und übermorgen noch weniger? Ab welchem Punkt reicht oral nicht mehr und braucht er eine Sonde?",
        storyAufhaengerB1:
          "Herr Petrov isst noch mit dem Mund — breiiges Essen, angedickte Flüssigkeit. Aber was passiert, wenn er immer weniger isst? Wann braucht er eine Sonde?",
        kerntext:
          "**Enterale Ernährung** = Ernährung über den Magen-Darm-Trakt, aber nicht oral. Der Zugang ist eine Sonde.\n\n**Stufen-Konzept (ESPEN/DGEM 2020):**\n\n• **Stufe 1:** Orale Ernährung mit angepasster Konsistenz (IDDSI). Das ist Herr Petrovs aktueller Status.\n\n• **Stufe 2:** Orale Ernährung + Trinknahrung (Supplement, z.B. 200 ml Energy-Drink mit 300 kcal). Wenn oral < 75 % des Bedarfs.\n\n• **Stufe 3:** Nasogastrale Sonde (NGS). Wenn oral + Supplement < 60 % des Kalorienbedarfs nach 3-5 Tagen. NGS ist temporär, nicht-operativ, kann am Bett gelegt werden.\n\n• **Stufe 4:** PEG (perkutane endoskopische Gastrostomie). Wenn Sondenernährung > 4 Wochen absehbar ist. Operativer Eingriff.\n\n**Pflege-Aufgabe:** Tägliches Ernährungsmonitoring — Wie viel hat er gegessen? Wie viel getrunken? Gewichtsverlauf. Proaktiv den Arzt informieren wenn die orale Aufnahme unter 60 % fällt.\n\n**Zeitfenster:** 3-5 Tage für orale Optimierung. Danach wird es kritisch — Mangelernährung verschlechtert Wundheilung, Immunabwehr und Rehabilitation.",
        kerntextB1:
          "**Enterale Ernährung** = Ernährung mit einer Sonde (= einem Schlauch in den Magen).\n\n**3 Stufen:**\n\n• **Stufe 1:** Essen mit dem Mund — mit angepasster Konsistenz. Das macht Herr Petrov jetzt.\n\n• **Stufe 2:** Essen mit dem Mund + Trinknahrung (= extra Kalorien im Becher). Wenn er zu wenig isst.\n\n• **Stufe 3:** Sonde durch die Nase in den Magen (= NGS). Wenn er weniger als 60 % seines Bedarfs isst — nach 3-5 Tagen.\n\n**Deine Aufgabe:** Jeden Tag aufschreiben: Wie viel hat er gegessen? Wie viel getrunken? Wenn es zu wenig wird: Arzt informieren.",
        faustregel: "3-5 Tage unter 60 % oral = Sonde vorbereiten. Pflege erkennt es zuerst.",
        faustregelB1: "Wenn Herr Petrov in 3-5 Tagen zu wenig isst: Arzt informieren, Sonde vorbereiten.",
        spektrum: [
          {
            patientName: "Herr Nguyen",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Stoma, vorübergehend keine orale Ernährung",
            kurzbeschreibung:
              "Nguyen darf nach Darm-OP vorübergehend gar nicht oral essen. Er bekommt parenteral (= über die Vene) Nährstoffe. Anderer Zugangsweg als eine NGS, aber dasselbe Ziel: ausreichend Kalorien.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Adipositas + versteckter Proteinmangel",
            kurzbeschreibung:
              "Schmidt sieht nicht mangelernährt aus (BMI 38). Aber: Proteinmangel bei Adipositas ist häufig. Ernährungsscreening (NRS-2002) auch bei adipösen Patienten Pflicht.",
          },
          {
            patientName: "Emilia",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling, Trinkschwäche bei Bronchiolitis",
            kurzbeschreibung:
              "Emilia trinkt zu wenig wegen Atemnot. Bei Säuglingen geht es schneller: NGS schon nach 24 h unzureichender Trinkmenge. Die Zeitfenster sind bei Kindern viel kürzer als bei Erwachsenen.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Herr Petrov isst seit 2 Tagen nur 40 % seines Kalorienbedarfs oral. Tag 5 nach Apoplex. Was empfiehlst du?",
          rueckseite:
            "ESPEN/DGEM 2020: 3-5 Tage Zeitfenster für orale Optimierung. Bei < 60 % nach diesem Zeitfenster: NGS (nasogastrale Sonde) als nächste Stufe. Pflege-Aufgabe: proaktiv Arzt informieren, tägliches Ernährungsmonitoring. Spektrum: Nguyen (parenteral post-OP), Schmidt (versteckter Proteinmangel bei Adipositas), Emilia (NGS schon nach 24 h bei Säugling). Faustregel: **3-5 Tage unter 60 % oral = Sonde vorbereiten.**",
        },
      },
    },

    // Step 3.5 — MC: Enterale Ernährung Indikation
    {
      stepId: "ce02-petrov-plan-05-enterale-ernährung-frage",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "DGEM/ESPEN 2020 Klinische Ernährung",
        "DNQP Ernährungsmanagement 2024",
        "AWMF S3-Leitlinie Schlaganfall (021-023)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-petrov-plan-enterale-ernährung",
      tag: "krankheitslehre",
      contentC1: {
        title: "Enterale Ernährung — wann?",
        body: "Herr Petrov wird aktuell oral ernährt (IDDSI Level 2 + Kostform B). Wann würde eine enterale Sondenernährung notwendig werden?",
        glossarBegriffe: [
          "enterale Ernährung",
          "PEG",
          "ESPEN",
          "IDDSI",
          "Kalorienbedarf",
        ],
      },
      contentB1: {
        title: "Wann braucht Herr Petrov eine Sonden-Ernährung?",
        body: "Herr Petrov isst noch selbst (mit angedicktер Flüssigkeit). Wann braucht er eine Sonden-Ernährung (= enterale Ernährung)?",
        glossarBegriffe: ["enterale Ernährung", "Sonde", "Kalorien"],
      },
      question: {
        fragetext:
          "Wann würde eine enterale Sondenernährung bei Herrn Petrov notwendig werden?",
        optionen: [
          {
            text: "Sofort — bei Dysphagie ist Sondenernährung immer notwendig",
            isCorrect: false,
            explanation:
              "Falsch. Dysphagie allein ist kein Indikator für sofortige Sondenernährung. Entscheidend ist ob der Patient ausreichend oral essen kann. Bei Herrn Petrov: IDDSI Level 2 + Kostform B ermöglichen ausreichende orale Aufnahme.",
            explanationB1:
              "Nicht richtig. Dysphagie allein bedeutet nicht sofort Sonde. Wenn er noch ausreichend essen kann — ist orale Ernährung besser.",
          },
          {
            text: "Wenn er in 3-5 Tagen nicht ausreichend oral essen kann (< 60 % des Kalorienbedarfs)",
            isCorrect: true,
            explanation:
              "Richtig. ESPEN-Leitlinie und DGEM 2020: Bei Schlaganfall-Patienten gilt 3-5 Tage als Zeitfenster für orale Optimierung. Wenn danach < 60% des Kalorienbedarfs oral erreicht werden, sollte enterale Ernährung gestartet werden — in der Regel als nasogastrale Sonde (NGS) vor einer PEG-Anlage. Die Pflege beobachtet die Aufnahme täglich und informiert proaktiv. (DGEM/ESPEN 2020)",
            explanationB1:
              "Richtig. Wenn er in 3-5 Tagen zu wenig isst (= weniger als 60% vom Bedarf), muss eine Sonde kommen. Jetzt schluckt er noch ausreichend. Aber die Pflege beobachtet täglich. Wenn es zu wenig wird — Arzt informieren.",
          },
          {
            text: "Nur wenn der Arzt es anordnet — als Pflegekraft beobachte ich nur",
            isCorrect: false,
            explanation:
              "Teilrichtig: Ärztliche Anordnung ist nötig — aber Pflege erkennt die Indikation und informiert proaktiv. Passives \"Ich beobachte nur\" ist keine Pflegequalität. Pflegerische Aufgabe: Ernährungsmonitoring, Dokumentation der oralen Aufnahme, frühzeitige Meldung an den Arzt.",
            explanationB1:
              "Nicht ganz richtig. Ärzte entscheiden — aber die Pflege beobachtet, dokumentiert und sagt dem Arzt Bescheid. Das ist deine aktive Aufgabe.",
          },
          {
            text: "Erst wenn er gar nicht mehr schlucken kann",
            isCorrect: false,
            explanation:
              "Zu spät. Wenn der Patient gar nicht mehr schlucken kann, ist bereits ein Ernährungsdefizit entstanden — Mangelernährung ist schwer zu kompensieren. Frühzeitige Intervention (3-5 Tage Zeitfenster) verhindert Komplikationen (Immunschwäche, verzögerte Wundheilung, Muskelschwund). (DGEM/ESPEN 2020)",
            explanationB1:
              "Zu spät. Wenn er gar nicht mehr schlucken kann, hat er schon zu lange zu wenig gegessen. Deshalb: Täglich beobachten und früh melden.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 28,
};
