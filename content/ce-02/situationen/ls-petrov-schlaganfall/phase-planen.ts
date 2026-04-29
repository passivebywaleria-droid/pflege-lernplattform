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
        body: "Das PESR-Schema strukturiert Pflegeprobleme so, dass sie direkt handlungsleitend sind. PESR = Problem / Etiologie / Symptom / Ressource.\n\nBeispiel aus dem Fall:\n**Problem:** Aspirationsgefahr bei Herrn Petrov.\n**Etiologie:** Dysphagie Grad 2 nach ischämischem Apoplex links (Schädigung der Schluckmuskulatur durch linkshemisphärische Läsion).\n**Symptom:** Husten nach Schluckversuch mit dünnflüssiger Flüssigkeit, feuchte Stimme nach dem Schlucken (GUSS-Befund aus Akte).\n**Ressource:** Schlucken breiiger Konsistenz sicher möglich. Herr Petrov ist kooperativ und versteht Anweisungen trotz Aphasie.\n\nSo wird aus einer Diagnose eine pflegerisch handlungsleitende Formulierung — konkret, messbar, lösungsorientiert. (Fiechter/Meier 1981)",
        fallbezug:
          "Herrn Petrovs Aspirationsgefahr als Vorlage für das PESR-Schema.",
        glossarBegriffe: ["PESR", "Etiologie", "Ressource", "Aspiration"],
      },
      contentB1: {
        title: "PESR — Was ist das?",
        body: "Das PESR-Schema hilft dir, ein Pflege-Problem zu beschreiben. PESR = Problem / Ursache (= Etiologie) / Zeichen (= Symptom) / Ressource.\nBeispiel bei Herrn Petrov:\nProblem: Er kann sich verschlucken (= Aspirations-Gefahr).\nUrsache: Die Schluck-Muskeln funktionieren nicht gut (= Dysphagie Grad 2 nach Schlaganfall).\nZeichen: Er hustet beim Trinken. Seine Stimme klingt feucht.\nRessource: Er schluckt breiiges Essen sicher. Er arbeitet gut mit.",
        fallbezug:
          "PESR-Beispiel: Aspirationsgefahr bei Herrn Petrov.",
        glossarBegriffe: ["PESR", "Aspiration", "Dysphagie"],
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
        body: "Ordne die Pflegeprobleme den richtigen SMART-Pflegezielen zu. SMART: Spezifisch, Messbar, Akzeptiert (erreichbar), Relevant, Terminiert.",
        glossarBegriffe: ["SMART", "Pflegeziel"],
      },
      contentB1: {
        title: "Welches Ziel passt zu welchem Problem?",
        body: "Ordne das Pflege-Problem dem richtigen Pflege-Ziel zu. Pflege-Ziele müssen SMART sein: konkret, messbar, erreichbar, sinnvoll, mit Zeit.",
        glossarBegriffe: ["Pflegeziel", "SMART"],
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
      contentC1: {
        title: "Maßnahmen priorisieren",
        body: "Du hast 3 Stunden. Fünf Maßnahmen warten. Bringe sie in die richtige Prioritätsreihenfolge nach ABCDE-Logik (Atmung vor allem anderen außer Atemwegs-Notfall) und Aspirations-Risiko.",
        glossarBegriffe: ["Priorität", "Pflegemaßnahmen", "ABCDE"],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Was machst du zuerst? Bringe die 5 Maßnahmen in die richtige Reihenfolge. Wichtig: Die Atmung kommt immer zuerst (= ABCDE).",
        glossarBegriffe: ["Pflegemaßnahmen"],
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
      stepId: "ce02-petrov-plan-04b-enterale-ernaehrung",
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
      lernziel: "ce02-petrov-plan-enterale-ernaehrung-grundlagen",
      tag: "krankheitslehre",
      themaPrimaer: "enterale-ernaehrung",
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
        bausteinRef: "enterale-ernaehrung-oral-zu-sonde",
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
            situationsId: "ls-emilia-saeugling",
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
      stepId: "ce02-petrov-plan-05-enterale-ernaehrung-frage",
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
      lernziel: "ce02-petrov-plan-enterale-ernaehrung",
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
