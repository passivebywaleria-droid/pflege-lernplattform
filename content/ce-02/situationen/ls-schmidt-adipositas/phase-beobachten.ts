// CE-02 Situation Frau Schmidt — Phase 2: Beobachten & Assessment
// Steps: 9 + 2 Inline-Wissen · Bloom: B1–B4 · Zeit: ~40–55 Min
// Quelle: phase-beobachten.md + inline-wissen-generator

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_SCHMIDT_ADIPOSITAS_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-schmidt-adipositas-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Assessment",
  titelB1: "Schauen und Einschätzen",
  kontext:
    "Frau Schmidt hat nach der Begrüßung kurz erzählt, sie sei müde, habe aber gut geschlafen. Du beginnst jetzt das strukturierte Assessment — Blutzucker, NRS 2002, Haut, Fuß, Inkontinenz. Frau Schmidt schaut dich skeptisch an, als du sagst, du würdest heute \"ganz viele Fragen stellen und auch schauen wollen, wie die Haut aussieht\". Sie nickt aber.",
  kontextB1:
    "Frau Schmidt sagt: Sie ist müde, aber hat gut geschlafen. Jetzt machst du das Assessment (= Einschätzung des Zustands). Du prüfst: Blutzucker, Ernährungs-Risiko, Haut, Füße, Harnverlust. Du sagst: \"Ich möchte heute viel schauen und fragen.\" Frau Schmidt nickt. Sie schaut dich skeptisch an.",
  kernSteps: [
    // Step 2.1 — TrueFalse: Brilliant-Prinzip — Adipositas ≠ gut ernährt
    {
      stepId: "ce02-schmidt-beob-01-brilliantfrage",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Cederholm T. et al. (2019): GLIM-Kriterien — Global Leadership Initiative on Malnutrition",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-beob-adipositas-paradox",
      tag: "krankheitslehre",
      contentC1: {
        title: "Wahr oder falsch — bevor das Assessment beginnt",
        body: "Brilliant-Prinzip: Bevor du das Assessment beginnst, eine Frage die viele falsch beantworten. Aktiviere dein Vorwissen.",
        glossarBegriffe: ["Albumin", "Proteinmangelernährung"],
      },
      contentB1: {
        title: "Wahr oder falsch?",
        body: "Bevor das Assessment beginnt: eine Frage, die viele falsch beantworten. Denk kurz nach.",
        glossarBegriffe: ["Albumin", "Proteinmangelernährung"],
      },
      question: {
        fragetext:
          "Wahr oder falsch: Wer adipös ist, kann nicht gleichzeitig mangelernährt sein. Ein hoher BMI bedeutet ausreichende Nährstoffversorgung.",
        trueFalseCards: [
          {
            statement:
              "Wer adipös ist (BMI ≥ 30), kann nicht gleichzeitig an Proteinmangelernährung leiden. Ein hoher BMI zeigt ausreichende Nährstoffversorgung an.",
            isTrue: false,
            explanation:
              "Falsch. Das ist das zentrale Paradox dieser Situation. Adipositas bedeutet: zu viel Energie (Kalorien) gespeichert. Aber der Körper braucht nicht nur Energie — er braucht Protein für Wundheilung, Immunabwehr und Ödemprophylaxe. Fertigprodukte enthalten viel Kohlenhydrate und Fett, aber oft wenig Protein. Frau Schmidt hat BMI 38 — und Albumin 31 g/l (Norm: 35–52 g/l). Wichtig: Albumin ist ein HINWEIS, kein Beweis — bei Akuterkrankung/Inflammation sinkt Albumin auch ohne reine Proteinmangel-Ursache (Akut-Phase-Negativ-Protein). Deshalb gehört zur Diagnose immer das NRS-2002-Screening und im zweiten Schritt die GLIM-Kriterien. (Cederholm et al., GLIM-Kriterien, 2019)",
          },
        ],
      },
    },

    // Step 2.2 — Sequencing: Blutzucker messen
    {
      stepId: "ce02-schmidt-beob-02-bz-messen",
      phase: 2,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DDG (2023): Praxisempfehlungen Diabetes Typ 2",
        "RKI-KRINKO (2016): Händehygiene in Einrichtungen des Gesundheitswesens",
        "§ 630e BGB — Aufklärungspflicht vor medizinischer Maßnahme",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-beob-bz-messen",
      tag: "pflege",
      contentC1: {
        title: "Blutzucker messen — richtige Reihenfolge",
        body: "Du misst jetzt den Nüchtern-BZ bei Frau Schmidt. Bringe die Schritte in die korrekte Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Blutzucker messen — Schritt für Schritt",
        body: "Blutzucker messen bei Frau Schmidt. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Bringe die Schritte zum Blutzucker-Messen in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "Richtige Reihenfolge für die BZ-Messung bei Frau Schmidt. Wichtig: Aufklärung kommt zuerst (§ 630e BGB), erst danach Hygiene-Vorbereitung (RKI 2016).",
          items: [
            { id: "bz1", label: "Frau Schmidt informieren: \"Ich messe jetzt Ihren Blutzucker\" und Einverständnis abwarten" },
            { id: "bz2", label: "Hände waschen und Handschuhe anziehen" },
            { id: "bz3", label: "Fingerkuppe seitlich stechen — nicht die Mitte (weniger schmerzhaft)" },
            { id: "bz4", label: "Bluttropfen auf den Teststreifen auftragen" },
            { id: "bz5", label: "Ergebnis ablesen und dokumentieren (187 mg/dl nüchtern)" },
            { id: "bz6", label: "Lanzette in die Stichschutzbox entsorgen" },
          ],
        },
      },
    },

    // Step 2.3 — Categorize: NRS 2002 Assessment (KORRIGIERT — F-02/F-03)
    // Albumin gehört NICHT zu NRS 2002 (das ist GLIM), sondern wird in 2.4 (GLIM) thematisiert.
    // NRS 2002 prüft: 1) Ernährungsstatus (BMI, Gewichtsverlust, Nahrungsaufnahme),
    // 2) Erkrankungsschwere, 3) Alter ≥ 70.
    {
      stepId: "ce02-schmidt-beob-03-nrs-2002",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Kondrup J. et al. (2003): NRS 2002 — ESPEN Guidelines",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-beob-nrs",
      tag: "pflege",
      contentC1: {
        title: "NRS 2002 — Ernährungsrisiko-Screening",
        body: "Das NRS 2002 (Nutritional Risk Screening) ist das Screening-Werkzeug der ESPEN. Es prüft DREI Achsen: 1) Ernährungsstatus (BMI, Gewichtsverlust, Nahrungsaufnahme — KEIN Albumin!), 2) Schweregrad der Erkrankung, 3) Alter ≥ 70 Jahre = +1 Punkt. Albumin und Laborparameter gehören NICHT in das NRS-Screening — sie sind Bestandteil der nachgelagerten GLIM-Diagnostik. Ordne Frau Schmidts Daten den drei NRS-Achsen zu.",
        glossarBegriffe: ["NRS 2002"],
      },
      contentB1: {
        title: "NRS 2002 — Ernährungs-Risiko prüfen",
        body: "NRS 2002 ist ein Werkzeug. Es schaut auf 3 Punkte:\n1. Ernährungs-Zustand (BMI, Gewichts-Verlust, wie viel isst sie aktuell?)\n2. Wie krank ist sie?\n3. Ist sie 70 Jahre oder älter?\n\nWichtig: Albumin (= Eiweiß im Blut) gehört NICHT zu NRS 2002. Albumin ist Teil eines anderen Tests (GLIM).\n\nOrdne Frau Schmidts Daten zu.",
        glossarBegriffe: ["NRS 2002"],
      },
      question: {
        fragetext:
          "Ordne Frau Schmidts Daten den drei NRS-2002-Achsen zu (Albumin gehört NICHT dazu — das ist GLIM!).",
        categories: [
          { name: "1. Ernährungsstatus (BMI, Gewichtsverlust, Nahrungsaufnahme)" },
          { name: "2. Schweregrad der Erkrankung" },
          { name: "3. Alter ≥ 70 Jahre" },
        ],
        categoryItems: [
          {
            text: "BMI 38 — kein Untergewicht, kein dokumentierter Gewichtsverlust → Ernährungsstatus-Score 0",
            correctCategory: 0,
          },
          {
            text: "Nahrungsaufnahme letzte Woche unverändert (laut Frau Schmidt) → Ernährungsstatus-Score bleibt 0",
            correctCategory: 0,
          },
          {
            text: "Diabetes mellitus entgleist (BZ 398 bei Aufnahme), stationäre Behandlung nötig → Schweregrad-Score 1",
            correctCategory: 1,
          },
          {
            text: "Alter 68 Jahre — Schwelle ist ≥ 70 → Altersscore 0 (kein Alterspunkt)",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 2.3b — Calculation: NRS-2002-Gesamtscore berechnen
    {
      stepId: "ce02-schmidt-beob-03b-nrs-summe",
      phase: 2,
      stepType: "calculation",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Kondrup J. et al. (2003): NRS 2002 — ESPEN Guidelines"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-schmidt-beob-nrs-summe",
      tag: "pflege",
      contentC1: {
        title: "NRS 2002 — Gesamtscore berechnen",
        body: "Du hast die drei NRS-Achsen zugeordnet. Jetzt: NRS-Gesamtscore = Ernährungsstatus + Schweregrad + Alter. Bei Frau Schmidt: 0 (Ernährungsstatus) + 1 (Erkrankungsschwere) + 0 (Alter < 70) = ? Liegt der Score ≥ 3, ist eine Ernährungsintervention indiziert.",
        glossarBegriffe: ["NRS 2002"],
      },
      contentB1: {
        title: "NRS 2002 — Punkte zusammenzählen",
        body: "Jetzt rechnest du: Wie viele Punkte hat Frau Schmidt insgesamt?\n- Ernährungs-Zustand: 0 Punkte\n- Krankheits-Schwere: 1 Punkt\n- Alter (Frau Schmidt ist 68): 0 Punkte\n\nWenn die Summe 3 oder mehr ist → Ernährungs-Hilfe ist nötig.",
        glossarBegriffe: ["NRS 2002"],
      },
      question: {
        fragetext:
          "NRS-2002-Gesamtscore: 0 (Ernährungsstatus) + 1 (Erkrankungsschwere) + 0 (Alter) = ? Punkte.",
        calculation: {
          instruction: "Berechne den NRS-Gesamtscore.",
          formula: "Ernährungsstatus + Schweregrad + Alter",
          correctValue: 1,
          unit: "Punkte",
          tolerance: 0,
          explanation:
            "0 + 1 + 0 = 1 Punkt. Wichtige Erkenntnis: Der reine NRS-Score allein ergibt bei Frau Schmidt KEINE Ernährungsintervention (Schwelle: ≥ 3 Punkte). Trotzdem zeigt der niedrige Albumin-Wert (31 g/l), dass eine GLIM-Diagnostik im zweiten Schritt nötig ist. NRS 2002 ist das Screening — GLIM die nachgelagerte Diagnostik (Phänotypische Kriterien: Gewichtsverlust, BMI, reduzierte Muskelmasse + Ätiologische Kriterien: reduzierte Nahrungsaufnahme, Inflammation). So entsteht das Bild: NRS niedrig, GLIM positiv für Mangelernährung-Risiko trotz Adipositas. (Kondrup 2003; Cederholm GLIM 2019)",
          explanationB1:
            "0 + 1 + 0 = 1 Punkt. NRS 2002 allein zeigt kein hohes Risiko (Schwelle: 3 Punkte). Aber Frau Schmidts Albumin ist niedrig — deshalb braucht sie zusätzlich den GLIM-Test (anderer Test, prüft Eiweiß-Mangel auch bei Übergewicht).",
        },
      },
    },

    // Step 2.4 — Text/beforeafter: Das Albumin-Paradox
    {
      stepId: "ce02-schmidt-beob-04-albumin-paradox",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Cederholm T. et al. (2019): GLIM-Kriterien — Global Leadership Initiative on Malnutrition",
        "DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-schmidt-beob-albumin",
      tag: "krankheitslehre",
      displayFormat: "beforeafter",
      contentC1: {
        title: "Das Albumin-Paradox — Vorher und Nachher",
        body: "**Vorher (vor dem Blutbefund):** \"Frau Schmidt ist adipös — BMI 38. Sie isst genug. Sie ist sicher gut ernährt.\"\n\n**Nachher (mit dem Befund):** Albumin 31 g/l (Norm 35–52). NRS-2002-Score = 1 (allein NICHT interventionspflichtig). ABER: GLIM-Diagnostik ist positiv — phänotypisch (reduzierte Muskelmasse) + ätiologisch (reduzierte Proteinzufuhr + Inflammation durch entgleisten Diabetes) → GLIM-Diagnose Mangelernährung Stadium 1, trotz Adipositas. **Ernährungsintervention ist indiziert** — nicht über NRS allein, sondern über die GLIM-Diagnostik.\n\nDas Paradox: Frau Schmidt isst energiereiche, aber proteinarme Kost (Fertigprodukte, Kohlenhydrate, Fette). Der Körper braucht Protein — nicht nur für Muskeln, sondern für Wundheilung, Immunabwehr und Ödemprophylaxe. Albumin ist ein Hinweis auf den Eiweißstatus — aber Albumin sinkt auch bei Akut-Inflammation (Akut-Phase-Negativ-Protein). Deshalb ist die GLIM-Kombi-Diagnostik aussagekräftiger als Albumin allein. (Cederholm et al., GLIM-Kriterien, 2019)\n\nFrau Schmidt sagt: \"Ich esse doch genug — schauen Sie mich an! Wie kann ich da Eiweiß-Mangel haben? Das versteh ich nicht.\"",
        fallbezug:
          "Frau Schmidt hat NRS-Score 1 + positive GLIM-Diagnose → Ernährungsintervention indiziert. Die Ernährungsberaterin kommt nachmittags.",
        glossarBegriffe: [
          "Albumin", "Proteinmangelernährung", "NRS 2002",
          "NRS", "NRS-2002", "NRS (= Numeric Rating Scale)",
          "Risiko", "Wundheilung", "Mangelernährung", "BMI",
          "Ernährungsberaterin", "Adipositas", "Protein",
        ],
      },
      contentB1: {
        title: "Das Albumin-Paradox",
        body: "**Vorher:** \"Frau Schmidt hat Adipositas — sie ist sicher gut ernährt.\"\n\n**Nachher (nach dem Blutbefund):** Albumin 31 g/l — das ist zu niedrig.\n\nWas bedeutet das? Frau Schmidt isst viel Kohlenhydrate (= Zucker und Stärke) und Fett. Aber sie isst wenig Protein (= Eiweiß). Zum Beispiel: Fertig-Pizza. Der Körper braucht Protein für: Wunden heilen, das Immunsystem stärken, Ödeme (= Wassereinlagerungen) verhindern.\n\nWichtig: Albumin allein zeigt nicht alles. NRS 2002 (= Test-Werkzeug) ergibt 1 Punkt — kein hohes Risiko. Aber GLIM (= anderes Werkzeug, prüft Eiweiß-Mangel auch bei Übergewicht) ist positiv. Deshalb braucht Frau Schmidt eine Ernährungs-Hilfe.\n\nFrau Schmidt sagt: \"Ich esse doch genug — schauen Sie mich an! Wie kann ich da Eiweiß-Mangel haben? Das versteh ich nicht.\"",
        glossarBegriffe: [
          "Albumin", "Proteinmangelernährung", "GLIM",
          "NRS", "NRS-2002", "NRS (= Numeric Rating Scale)",
          "Risiko", "Wundheilung", "Mangelernährung", "BMI",
          "Ernährungsberaterin", "Adipositas", "Protein",
        ],
      },
    },

    // Step 2.4b — Inline-Wissen: GLIM-Kriterien — Mangelernährung diagnostizieren
    // Schüler hat in Step 2.4 das Albumin-Paradox gelesen. Bevor er zur Haut-Inspektion
    // geht (Step 2.5), braucht er ein Verständnis der GLIM-Kriterien, die in der Übergabe
    // als positive Diagnose erwähnt wurden. Dieses Wissen wird in Phase 3 (Pflegeplanung)
    // und Phase 4 (Ernährungsgespräch) direkt gebraucht.
    {
      stepId: "ce02-schmidt-beob-04b-glim-kriterien",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Cederholm T. et al. (2019): GLIM criteria for the diagnosis of malnutrition — A consensus report",
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "Jensen G.L. et al. (2019): GLIM criteria — Clinical application",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-beob-glim",
      tag: "pflege",
      themaPrimaer: "ernährungsassessment",
      themenSekundaer: ["ernährungsgrundlagen"],
      transition: "GLIM hat die versteckte Mangelernährung aufgedeckt. Jetzt zur nächsten Baustelle: die Haut.",
      contentC1: {
        title: "GLIM-Kriterien — warum NRS allein nicht reicht",
        body: "",
        glossarBegriffe: ["GLIM", "Phänotyp", "Ätiologie", "Mangelernährung", "Haut"],
      },
      contentB1: {
        title: "GLIM — der Test der mehr findet",
        body: "",
        glossarBegriffe: ["GLIM", "Mangelernährung", "Haut"],
      },
      inlineWissen: {
        bausteinRef: "ernährungsassessment-formen-mangel",
        storyAufhaenger:
          "Frau Schmidts NRS-Score war nur 1 — keine Ernährungsintervention nach Screening allein. Aber die Übergabe sagt trotzdem: \"GLIM-Diagnose Mangelernährung Stadium 1.\" Wie passt das zusammen? Und was genau sind diese GLIM-Kriterien?",
        storyAufhaengerB1:
          "Frau Schmidts NRS-Score war nur 1. Aber die Übergabe sagt: Mangelernährung! Wie geht das zusammen? Die Antwort heißt GLIM.",
        kerntext:
          "**GLIM (Global Leadership Initiative on Malnutrition, Cederholm 2019)** ist der internationale Diagnose-Standard für Mangelernährung — er kommt NACH dem Screening (NRS 2002).\n\n**Zwei-Schritt-Modell:**\n\n1. **Screening** (NRS 2002, MNA) — filtert Risiko-Patienten.\n2. **Diagnostik** (GLIM) — bestätigt oder widerlegt die Diagnose.\n\n**GLIM prüft 5 Kriterien in 2 Gruppen:**\n\n**Phänotypisch (was du siehst/misst):**\n\n• Ungewollter Gewichtsverlust (>5 % in 6 Mon. oder >10 % darüber)\n\n• Niedriger BMI (<20 bei <70 J., <22 bei ≥70 J.)\n\n• Reduzierte Muskelmasse (Handkraft, Wadenumfang, BIA)\n\n**Ätiologisch (warum es passiert):**\n\n• Reduzierte Nahrungsaufnahme oder -resorption\n\n• Entzündung/Erkrankung (akut oder chronisch)\n\n**Diagnose: min 1 phänotypisch + min 1 ätiologisch = Mangelernährung.**\n\n**Bei Frau Schmidt:** Phänotypisch: reduzierte Muskelmasse (Albumin 31 g/l als Hinweis, plus klinisch erkennbare Sarkopenie bei Adipositas). Ätiologisch: einseitige Proteinzufuhr + Inflammation durch entgleisten Diabetes. → GLIM positiv, obwohl NRS nur 1.",
        kerntextB1:
          "**GLIM** ist ein Diagnose-Werkzeug. Es kommt NACH dem Screening (NRS 2002).\n\n**Zwei Schritte:**\n\n1. **Screening** (NRS 2002) — sucht nach Risiko.\n2. **Diagnostik** (GLIM) — stellt die Diagnose.\n\n**GLIM prüft 5 Punkte:**\n\n**Was du siehst:**\n\n• Hat die Person abgenommen? (mehr als 5 % in 6 Monaten)\n\n• Ist der BMI niedrig?\n\n• Sind die Muskeln schwächer?\n\n**Warum es passiert:**\n\n• Isst die Person zu wenig oder zu einseitig?\n\n• Hat sie eine Entzündung oder schwere Krankheit?\n\n**Für die Diagnose brauchst du:** 1 Punkt aus \"was du siehst\" + 1 Punkt aus \"warum\".\n\n**Frau Schmidt:** Muskeln schwächer (Albumin niedrig) + einseitiges Essen + Entzündung durch Diabetes → GLIM sagt: Mangelernährung. Obwohl sie übergewichtig ist.",
        faustregel:
          "GLIM findet was NRS übersieht: Mangelernährung trotz Übergewicht. 1 phänotypisches + 1 ätiologisches Kriterium = Diagnose.",
        faustregelB1:
          "GLIM findet Mangelernährung auch bei Übergewicht. NRS allein reicht nicht.",
        spektrum: [
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Dysphagie-bedingte Mangelernährung",
            kurzbeschreibung:
              "Bei ihm sind beide GLIM-Gruppen eindeutig: Phänotypisch = Gewichtsverlust + niedriger BMI. Ätiologisch = Schluckstörung. NRS und GLIM stimmen überein.",
          },
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Vergisst zu essen",
            kurzbeschreibung:
              "Fortgeschrittene Demenz: Er vergisst Mahlzeiten, erkennt Besteck nicht. Ätiologisch: kognitive Barriere. Phänotypisch: Gewichtsverlust. GLIM positiv.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "COPD-Katabolie",
            kurzbeschreibung:
              "COPD erhöht den Energiebedarf (Atemarbeit!), gleichzeitig Appetitlosigkeit durch Luftnot. Ätiologisch: chronische Erkrankung. Phänotypisch: Muskelmasse sinkt. GLIM positiv trotz normalem BMI.",
          },
        ],
        sonstBox:
          "GLIM wurde 2019 als globaler Konsens veröffentlicht und ersetzt nationale Klassifikationen. Die **Stadien**: Stadium 1 = moderate Mangelernährung (1 phänotypisch mild + 1 ätiologisch), Stadium 2 = schwere Mangelernährung (phänotypisch ausgeprägt). Bei Frau Schmidt: **Stadium 1** — Proteindefizit nachweisbar, aber noch nicht schwer.",
        sonstBoxB1:
          "GLIM hat 2 Stufen: **Stadium 1** = leichte Mangelernährung. **Stadium 2** = schwere Mangelernährung. Frau Schmidt hat Stadium 1 — das Eiweiß fehlt, aber es ist noch nicht schlimm.",
        karteikarte: {
          vorderseite:
            "Frau Schmidt hat NRS-Score 1, aber GLIM-Diagnose Mangelernährung Stadium 1. Wie ist das möglich?",
          rueckseite:
            "NRS 2002 erkennt Mangelernährung bei Adipositas schlecht (kein Untergewicht, kein Gewichtsverlust). GLIM prüft tiefer: min 1 phänotypisches Kriterium (reduzierte Muskelmasse) + min 1 ätiologisches (einseitige Kost + Inflammation) = Diagnose.\n\nSpektrum: Petrov (Dysphagie, GLIM eindeutig), Bauer (Demenz, vergisst essen), Kovac (COPD, Katabolie).\n\nFaustregel: **GLIM findet was NRS übersieht.**",
        },
      },
    },

    // Step 2.5 — Hotspot: Haut-Inspektion Adipositas
    {
      stepId: "ce02-schmidt-beob-05-haut-inspektion",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie Intertrigo DDG (2022)",
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-schmidt-beob-haut",
      tag: "anatomie",
      bildkategorie: "anatomie",
      imageAlt:
        "Medizinische Illustration einer adipösen Patientin von hinten, Markierungspunkte für Intertrigo- und Dekubitusrisikostellen",
      bildhinweis:
        "Medical illustration of an overweight female patient from behind and side view, showing anatomical risk zones for intertrigo and pressure sores: submammary folds, inguinal folds, abdominal hanging fold, sacrum area, clean educational style, no text no labels",
      contentC1: {
        title: "Haut-Inspektion — gefährdete Stellen markieren",
        body: "Bevor du markierst, kurze Begriffsklärung: **Intertrigo** = entzündliche Hautreaktion in Körperfalten durch Feuchtigkeit, Wärme und Reibung. **Dekubitus** = Hautschaden durch anhaltenden Druck auf eine Knochenprominenz (Sakrum, Fersen, Trochanter). Bei Adipositas können beide gleichzeitig auftreten.\n\nMarkiere auf dem Bild: Wo sind die gefährdeten Stellen für Intertrigo und Dekubitus bei Adipositas? Du hast vier Hauptstellen zu finden.",
        glossarBegriffe: ["Intertrigo", "Dekubitus", "Mazerierung"],
      },
      contentB1: {
        title: "Haut anschauen — wo ist sie gefährdet?",
        body: "Kurz erklärt: **Intertrigo** = Hautentzündung in Falten (durch Feuchtigkeit und Reibung). **Dekubitus** = Hautschaden durch anhaltenden Druck auf einen Knochen (zum Beispiel Steißbein, Fersen).\n\nBild: Rücken und Seite einer Patientin mit Übergewicht. Wo ist die Haut gefährdet? Markiere die Stellen.",
        glossarBegriffe: ["Intertrigo", "Dekubitus"],
      },
      question: {
        fragetext:
          "Markiere alle gefährdeten Hautstellen für Intertrigo und Dekubitus bei Adipositas.",
        hotspot: {
          imageUrl: "/images/ce-02/haut-adipositas-risikostellen.svg",
          imageAlt:
            "Adipöse Patientin — Risikostellen für Intertrigo und Dekubitus",
          instruction:
            "Tippe auf alle Stellen, die bei Adipositas besonders gefährdet sind.",
          zones: [
            {
              id: "submammär",
              x: 50,
              y: 25,
              radius: 7,
              label:
                "Submammäre Falte — feucht, warm, Reibung → Intertrigo-Risiko",
            },
            {
              id: "abdomen-hängefalte",
              x: 50,
              y: 48,
              radius: 7,
              label:
                "Abdomen-Hängefalte (Pannus) — bei starkem Übergewicht, oft chronisch feucht",
            },
            {
              id: "leistenbeuge",
              x: 38,
              y: 65,
              radius: 7,
              label:
                "Leistenbeuge — Falte zwischen Bauch und Oberschenkel, häufig feucht (räumlich klar getrennt von Abdomen-Hängefalte)",
            },
            {
              id: "steissbein",
              x: 62,
              y: 78,
              radius: 7,
              label:
                "Steißbein (Sakralregion) — Druckpunkt beim Sitzen und Liegen → Dekubitusrisiko",
            },
          ],
        },
      },
    },

    // Step 2.5b — Inline-Wissen: Intertrigo bei Adipositas
    // Schüler hat gerade die Hotspot-Aufgabe (Step 2.5) bearbeitet und Risikostellen markiert.
    // Jetzt erklärt der Baustein: Was genau ist Intertrigo, warum entsteht es in Hautfalten,
    // und wie grenzt man es von Dekubitus ab? Wissen wird in Phase 4 (Hautpflege) gebraucht.
    {
      stepId: "ce02-schmidt-beob-05b-intertrigo",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie (2022): Diagnostik und Therapie der Intertrigo (DDG)",
        "DNQP (2017): Expertenstandard Dekubitusprophylaxe in der Pflege",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-schmidt-beob-intertrigo",
      tag: "pflege",
      themaPrimaer: "haut",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Intertrigo in den Falten. Jetzt schaust du weiter nach unten — die Füße.",
      contentC1: {
        title: "Intertrigo — warum Hautfalten bei Adipositas gefährdet sind",
        body: "",
        glossarBegriffe: ["Intertrigo", "Mazerierung", "Intertriginöse Dermatitis"],
      },
      contentB1: {
        title: "Intertrigo — warum Haut-Falten ein Problem sind",
        body: "",
        glossarBegriffe: ["Intertrigo", "Mazerierung"],
      },
      inlineWissen: {
        bausteinRef: "haut-entzündungszeichen-5",
        storyAufhaenger:
          "Du hast gerade die gefährdeten Stellen bei Frau Schmidt markiert — submammäre Falte, Abdomen-Hängefalte, Leistenbeuge, Sakralregion. Aber was genau passiert in diesen Falten, wenn sie nicht gepflegt werden?",
        storyAufhaengerB1:
          "Du hast die Risiko-Stellen bei Frau Schmidt auf dem Bild markiert. Aber was passiert in den Haut-Falten, wenn man sie nicht pflegt?",
        kerntext:
          "**Intertrigo** (intertriginöse Dermatitis) ist eine Entzündung der Haut in Körperfalten (AWMF S2k-LL 2022).\n\n**Entstehungs-Mechanismus:**\n\n• Hautfalte = Haut-auf-Haut-Kontakt → **Reibung** bei Bewegung.\n\n• Warme, feuchte Kammer → **Schweiß verdampft nicht**, Feuchtigkeit staut.\n\n• Feuchtigkeit + Wärme = ideales Milieu für **Pilze** (v.a. Candida albicans) und **Bakterien**.\n\n• Hornschicht quillt auf (**Mazerierung**) → Haut verliert Barriere → Rötung, Jucken, Brennen.\n\n**5 Entzündungszeichen bei Intertrigo:**\n\nRubor (Rötung) · Dolor (Schmerz) · Calor (Wärme) · Tumor (Schwellung) · Functio läsa (gestörte Funktion)\n\n**Risiko-Stellen bei Adipositas:**\n\n• Submammär (unter der Brust)\n\n• Abdomen-Hängefalte (Pannus)\n\n• Leistenbeuge (Inguinal)\n\n• Intergluteal (zwischen Gesäßhälften)\n\n**Abgrenzung zu Dekubitus:** Intertrigo = Feuchtigkeit + Reibung in Falten. Dekubitus = Druck + Scherkraft auf Knochen-Prominenz. Beide können bei Frau Schmidt gleichzeitig auftreten!",
        kerntextB1:
          "**Intertrigo** ist eine Entzündung der Haut in Körper-Falten.\n\n**Was passiert:**\n\n• In der Falte liegt Haut auf Haut → Reibung bei Bewegung.\n\n• In der Falte ist es warm und feucht → Schweiß kann nicht verdampfen.\n\n• Feuchtigkeit + Wärme = Pilze und Bakterien wachsen.\n\n• Die Haut quillt auf (= Mazerierung) → Rötung, Jucken, Brennen.\n\n**Gefährdete Stellen bei Übergewicht:**\n\n• Unter der Brust\n\n• In der Bauch-Falte\n\n• In der Leiste\n\n**Wichtig:** Intertrigo (= Feuchtigkeit + Reibung in Falten) ist etwas anderes als Dekubitus (= Druck auf Knochen). Beides kann bei Frau Schmidt gleichzeitig da sein!",
        faustregel:
          "Intertrigo = Feuchtigkeit + Reibung in Falten. Dekubitus = Druck auf Knochen. Beides kann gleichzeitig auftreten.",
        faustregelB1:
          "Intertrigo = Feuchtigkeit in Haut-Falten. Dekubitus = Druck auf Knochen. Beides kann gleichzeitig da sein.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-spirale2",
            hauptfaktor: "Intertrigo unter Verband",
            kurzbeschreibung:
              "Post-OP mit Drainagen und Verbänden: feuchte Kammer unter Pflaster. Intertrigo-Risiko nicht nur in Falten, sondern auch unter Wundverbänden.",
          },
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Inkontinenz-assoziierte Dermatitis",
            kurzbeschreibung:
              "Bei ihm ist es nicht die Falte, sondern die Inkontinenz: Feuchtigkeit + Reizstoffe (Urin/Stuhl) im Perianalbereich. Verwandte Pathologie, aber andere Ursache — IAD, keine klassische Intertrigo.",
          },
          {
            patientName: "Emilia (Säugling)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Windeldermatitis",
            kurzbeschreibung:
              "Bei Säuglingen: feuchte Windel → Hautmazeration → Candida-Superinfektion. Prinzip identisch zu Intertrigo, andere Lokalisierung (Windelbereich).",
          },
        ],
        sonstBox:
          "Intertrigo-Sonderformen: **Candida-Intertrigo** (Pilz-Superinfektion, typisch Satellitenläsionen am Rand), **Erythrasma** (Corynebacterium-Infektion, korallenrote Fluoreszenz unter Wood-Licht), **Psoriasis inversa** (in Falten statt an Streckseiten — Verwechslungsgefahr mit Intertrigo).",
        sonstBoxB1:
          "Sonder-Formen: **Candida-Intertrigo** = Pilz dazu, man sieht kleine rote Punkte am Rand der Falte. **Erythrasma** = Bakterien-Infektion, leuchtet unter UV-Licht rot. **Psoriasis inversa** = Schuppenflechte in Falten statt an Ellbogen.",
        karteikarte: {
          vorderseite:
            "Bei Frau Schmidt (BMI 38) findest du in der submammären Falte Rötung und feuchte Haut. Ist das Intertrigo oder Dekubitus?",
          rueckseite:
            "**Intertrigo.** Entsteht durch Feuchtigkeit + Reibung in Hautfalten. Submammär = typische Intertrigo-Stelle bei Adipositas. Dekubitus entsteht durch Druck auf Knochen-Prominenzen (Sakrum, Trochanter, Fersen).\n\n5 Entzündungszeichen: Rubor, Dolor, Calor, Tumor, Functio läsa.\n\nSpektrum: Yilmaz (unter Verband), Bauer (IAD bei Inkontinenz), Emilia (Windeldermatitis).\n\nFaustregel: **Intertrigo = Feuchtigkeit + Reibung in Falten.**",
        },
      },
    },

    // Step 2.6 — MC: Fußinspektion + K.O.-Wissen Podologe
    {
      stepId: "ce02-schmidt-beob-06-fussinspektion",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Deutsche Diabetes Gesellschaft / DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
        "AWMF S3-Leitlinie NVL Typ-2-Diabetes (2023): Fußversorgung und Podologie",
        "Wagner F.W. (1979) / Armstrong D.G. (1996): Wagner-Armstrong-Klassifikation",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-schmidt-beob-fuss-podologe",
      tag: "pflege",
      contentC1: {
        title: "Fußinspektion — was tust du als nächstes?",
        body: "Du inspizierst Frau Schmidts Füße. Du siehst: trockene Haut plantar, erste Rissbildung am großen Zeh, verdickte und gelblich-trübe Nägel (Verdacht auf Onychomykose — Nagelpilz, häufig bei Diabetes; Diagnose nur durch Arzt/Mykologie), keine offene Wunde — Wagner Grad 1 (Wagner-Armstrong 1A: oberflächliche Läsion ohne Infektion und ohne Ischämie). Frau Schmidt sagt: \"Die Füße pflege ich selbst. Schon immer. Die Nägel schneide ich mir zweimal im Jahr, das reicht doch.\" Was ist deine nächste Handlung?",
        glossarBegriffe: ["Diabetisches Fußsyndrom", "Podologe", "Wagner-Armstrong-Klassifikation", "Onychomykose"],
      },
      contentB1: {
        title: "Fußinspektion — was machst du?",
        body: "Du schaust dir Frau Schmidts Füße an. Du siehst: Die Haut ist trocken und rissig an der Fußsohle. Die Nägel sind verdickt und gelblich (Verdacht: Nagel-Pilz — bei Diabetes häufig). Keine offene Wunde. Frau Schmidt sagt: \"Die Füße pflege ich selbst. Die Nägel schneide ich zweimal im Jahr, das reicht doch.\" Was tust du jetzt?",
        glossarBegriffe: ["Diabetisches Fußsyndrom", "Podologe", "Onychomykose"],
      },
      question: {
        fragetext:
          "Du siehst Wagner-1-Befund am Fuß. Frau Schmidt möchte ihre Nägel selbst schneiden. Was ist deine nächste Handlung?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Nägel jetzt kürzen — die sind zu lang und das ist Pflege-Aufgabe.",
            isCorrect: false,
            explanation:
              "K.O.-Fehler. Jede Verletzung (auch kleinste!) am Diabetikerfuß kann sich zu einer schwer heilenden Wunde entwickeln. Wundinfektionen beim Diabetiker heilen 3–5× langsamer (DDG 2023). Nagelpflege beim diabetischen Fußsyndrom ist ausschließlich Aufgabe von Podologinnen — nicht der Pflege.",
            explanationB1:
              "Das ist falsch und gefährlich! Jede kleine Verletzung am Fuß eines Diabetikers kann sehr gefährlich werden. Wunden heilen beim Diabetiker viel langsamer (bis zu 5× langsamer). Nur ein Podologe (= Fußpflege-Spezialist) darf die Nägel schneiden.",
          },
          {
            text: "Frau Schmidt erklären, dass bei diabetischem Fußsyndrom Nagelpflege ausschließlich durch eine Podologin erfolgen darf, und einen Überweisungsantrag anregen.",
            isCorrect: true,
            explanation:
              "Richtig. Das ist K.O.-Wissen: Diabetisches Fußsyndrom + Nagelpflege durch Pflege = kontraindiziert. Die Pflege inspiziert, berichtet, berät — aber greift nicht mit Nagelschere oder Feile ein. Du erklärst Frau Schmidt warum, und leitest die Podologen-Überweisung ein. (DDG 2023, AWMF NVL Typ-2-Diabetes 2023)",
            explanationB1:
              "Richtig! Bei Diabetes darf die Pflege die Nägel NICHT schneiden. Das macht nur ein Podologe (= Fußpflege-Spezialist). Du erklärst Frau Schmidt warum und beantragst eine Überweisung.",
          },
          {
            text: "Die Nägel erst nächste Woche anschauen — heute zu viel anderes.",
            isCorrect: false,
            explanation:
              "Zu passiv. Wagner-1-Befund (erste Rissbildung) ist dokumentationspflichtig und erfordert sofortige Einleitung einer Podologen-Überweisung. Aufschieben erhöht das Infektionsrisiko.",
            explanationB1:
              "Das reicht nicht. Der Befund muss jetzt dokumentiert werden und ein Podologen-Termin muss jetzt angefragt werden. Warten ist falsch.",
          },
          {
            text: "Mit der Feile leicht bearbeiten — das ist kein richtiges Schneiden.",
            isCorrect: false,
            explanation:
              "K.O.-Fehler. Auch Feilen ist eine Intervention am Diabetikerfuß die Verletzungsrisiko birgt. Die Kompetenzgrenze gilt für alle invasiven Nagelpflege-Handlungen — Schneiden, Feilen, Einreißen. Im Krankenhaus/im stationären Setting OHNE Zusatzqualifikation gilt: keine Pflege-Intervention an Diabetikernägeln. Auch wenn ambulant in seltenen Fällen Pflegefachkräfte mit zertifizierter Diabetes-Fußschwester-Qualifikation eingebunden werden — bei Wagner-1-Befund auf Station gilt: Podologen-Überweisung. (DDG 2023)",
            explanationB1:
              "Auch das ist falsch. Feilen ist auch eine Handlung am Fuß. Im Krankenhaus gilt: Keine Nagelpflege durch die Pflege — auch nicht mit der Feile. Nur ein Podologe darf das.",
          },
        ],
      },
    },

    // Step 2.7 — Dialog: Inkontinenz-Assessment (2 Phasen)
    {
      stepId: "ce02-schmidt-beob-07-inkontinenz-assessment",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [
        "ICS — International Continence Society: Klassifikation Belastungsinkontinenz",
        "AWMF S2k-Leitlinie (2023): Diagnostik und Therapie Harninkontinenz bei Frauen",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-schmidt-beob-inkontinenz",
      tag: "pflege",
      contentC1: {
        title: "Inkontinenz ansprechen — behutsam",
        body: "Du sprichst das Thema Inkontinenz an. Frau Schmidt ist leicht angespannt — das Thema ist ihr unangenehm. Du wählst deinen Einstieg.",
        glossarBegriffe: ["Belastungsinkontinenz"],
      },
      contentB1: {
        title: "Inkontinenz ansprechen",
        body: "Du fragst Frau Schmidt über das Thema Harnverlust. Das ist für sie unangenehm. Du wählst wie du anfängst.",
        glossarBegriffe: ["Belastungsinkontinenz"],
      },
      question: {
        fragetext:
          "Wie sprichst du das Thema Inkontinenz bei Frau Schmidt an?",
        patientName: "Frau Schmidt",
        dialogPhases: [
          {
            context:
              "Du bist bei Frau Schmidt, das Assessment läuft. Du weißt aus der Übergabe: Belastungsinkontinenz seit 2 Jahren. Jetzt möchtest du das Thema behutsam ansprechen.",
            contextB1:
              "Du weißt: Frau Schmidt verliert manchmal Urin. Das ist ihr unangenehm. Jetzt möchtest du vorsichtig danach fragen.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Schmidt, ich möchte Sie noch etwas fragen, das manchmal unangenehm ist — passiert es Ihnen manchmal, dass Sie ungewollt Urin verlieren — zum Beispiel beim Husten, Niesen oder bei körperlicher Anstrengung?\"",
                textB1:
                  "\"Frau Schmidt, darf ich etwas fragen, das manchmal schwierig ist — verlieren Sie manchmal Urin, zum Beispiel beim Husten oder Heben?\"",
                patientResponse:
                  "Frau Schmidt schweigt kurz. Sie schaut weg. Dann leise: \"Ja. Schon seit zwei Jahren. Aber ich rede nicht gerne drüber.\"",
                patientResponseB1:
                  "Frau Schmidt schweigt kurz. Sie schaut weg. Dann: \"Ja. Schon seit 2 Jahren. Aber ich rede nicht gerne drüber.\"",
                score: 3,
                feedback:
                  "Gut eröffnet. Die Ankündigung \"das manchmal unangenehm ist\" signalisiert Verständnis vorab — das senkt die Schambarriere. Dein Einstieg ist respektvoll und klar.",
                feedbackB1:
                  "Gut. Du kündigst an dass es unangenehm sein kann — das hilft Frau Schmidt. Die Frage ist klar und respektvoll.",
              },
              {
                text: "\"Haben Sie eine Inkontinenz? Das steht in der Übergabe.\"",
                textB1:
                  "\"Sie haben Inkontinenz, das steht in der Übergabe. Stimmt das?\"",
                patientResponse:
                  "Frau Schmidt schaut kurz irritiert. \"Ich weiß ja selbst was ich hab.\"",
                patientResponseB1:
                  "Frau Schmidt schaut irritiert. \"Ich weiß ja selbst was ich hab.\"",
                score: 0,
                feedback:
                  "Zu konfrontativ und entwürdigend. \"Das steht in der Übergabe\" macht das Problem zu einem Akteneintrag, nicht zu einem menschlichen Thema. Frau Schmidt fühlt sich nicht gefragt, sondern überführt. Besser: Einfühlsam einleiten.",
                feedbackB1:
                  "Das ist nicht gut. \"Steht in der Übergabe\" klingt kalt. Frau Schmidt fühlt sich nicht gehört — sie fühlt sich überführt. Besser: Sanft fragen, nicht konfrontieren.",
              },
              {
                text: "\"Das muss ich auch noch fragen — haben Sie Inkontinenz?\"",
                textB1:
                  "\"Ich muss das noch fragen: haben Sie Inkontinenz?\"",
                patientResponse:
                  "Frau Schmidt zuckt leicht zusammen. \"Ja … schon.\"",
                patientResponseB1:
                  "Frau Schmidt antwortet kurz: \"Ja … schon.\"",
                score: 1,
                feedback:
                  "\"Muss ich auch noch\" klingt wie eine Abarbeitung — als ob das Thema lästig wäre. Frau Schmidt spürt das. Das Thema verdient einen eigenen, ruhigen Einstieg.",
                feedbackB1:
                  "\"Muss ich auch noch\" klingt wie Abarbeitung. Das Thema ist für Frau Schmidt wichtig und schwierig. Es verdient einen eigenen ruhigen Moment.",
              },
            ],
          },
          {
            context:
              "Frau Schmidt schweigt. Sie schaut weg. Die Stille hält an. Du möchtest sie nicht drängen, aber das Thema ist wichtig.",
            contextB1:
              "Frau Schmidt schweigt kurz. Sie schaut weg. Du möchtest sie nicht drängen — aber das Thema ist wichtig.",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist sehr häufig bei Frauen — und wichtig: Belastungsinkontinenz ist behandelbar (Beckenbodentraining, urotherapeutische Maßnahmen, ggf. fachärztliche Abklärung). Sie müssen das nicht alleine tragen.\"",
                textB1:
                  "\"Das haben viele Frauen. Wichtig: Man kann das behandeln (Beckenboden-Training, Therapie, Frauenarzt). Sie müssen das nicht alleine tragen.\"",
                patientResponse:
                  "Frau Schmidt atmet leicht aus. \"Wissen Sie — ich geh schon seit 2 Jahren nicht mehr in den Sportverein. Wegen dem. Das ist das Schlimmste.\"",
                patientResponseB1:
                  "Frau Schmidt atmet aus. \"Ich geh schon 2 Jahre nicht mehr in den Sportverein. Wegen dem. Das ist das Schlimmste.\"",
                score: 3,
                feedback:
                  "Normalisierung + Behandlungsperspektive. Du machst das Thema nicht kleiner — du machst Frau Schmidt größer: Sie ist nicht allein damit UND es ist behandelbar. Wichtig: \"Normalisieren\" heißt nicht \"damit muss man leben\". Belastungsinkontinenz lässt sich oft deutlich verbessern: Beckenbodentraining (Goldstandard), Pessar, Biofeedback, ggf. operative Optionen. (AWMF S2k-Leitlinie Harninkontinenz Frauen 2023; ICS-Klassifikation)",
                feedbackB1:
                  "Sehr gut. \"Das haben viele Frauen\" hilft — UND du sagst: Man kann es behandeln. Das ist wichtig! Inkontinenz ist nicht \"das Alter\" — Beckenboden-Training und Therapien helfen oft.",
              },
              {
                text: "Schweigen — Stille zulassen, nichts sagen.",
                textB1:
                  "Du wartest still. Du sagst nichts.",
                patientResponse:
                  "Frau Schmidt schaut weiter weg. Die Stille wächst. Sie sagt gar nichts mehr.",
                patientResponseB1:
                  "Frau Schmidt schweigt weiter. Das Gespräch stockt.",
                score: 1,
                feedback:
                  "Kurze Stille zulassen kann hilfreich sein — aber hier braucht Frau Schmidt ein Signal dass du das Thema ernst nimmst und kein Urteil fällst. Stille allein reicht nicht.",
                feedbackB1:
                  "Stille kann manchmal helfen — aber Frau Schmidt braucht jetzt ein Signal: Ich urteile nicht. Das Signal ist ein Satz, keine Stille.",
              },
              {
                text: "\"Das ist wichtig für unsere Dokumentation, bitte antworten Sie.\"",
                textB1:
                  "\"Das ist wichtig für die Dokumentation. Bitte antworten Sie.\"",
                patientResponse:
                  "Frau Schmidt schaut kalt zurück. \"Dann schreiben Sie, was Sie wollen.\"",
                patientResponseB1:
                  "Frau Schmidt schaut weg. \"Dann schreiben Sie was Sie wollen.\"",
                score: 0,
                feedback:
                  "Schamverstärkend und respektlos. Das Thema wird zur Verwaltungsaufgabe degradiert. Frau Schmidt schließt sich komplett. Dokumentation ist eine Aufgabe der Pflege — keine Druckmittel gegen Patienten.",
                feedbackB1:
                  "Das ist sehr schlecht. Frau Schmidt wird unter Druck gesetzt. Das verletzt ihre Würde. Dokumentation ist deine Aufgabe — kein Argument gegen die Patientin.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.8 — Categorize: Assessment-Zusammenfassung
    {
      stepId: "ce02-schmidt-beob-08-assessment-zusammenfassung",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2017): Expertenstandard Ernährungsmanagement",
        "DDG (2023): Praxisempfehlungen Diabetisches Fußsyndrom",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-schmidt-beob-zusammenfassung",
      tag: "pflege",
      contentC1: {
        title: "Assessment-Zusammenfassung — was hat welche Priorität?",
        body: "Du hast das Assessment abgeschlossen. Ordne die erhobenen Befunde in drei Kategorien: Was braucht sofortige Maßnahmen? Was beobachtest du täglich? Was planst du für die Entlassung?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Befunde sortieren — was ist wann wichtig?",
        body: "Sortiere alle Befunde in 3 Gruppen: Was muss sofort passieren? Was schaust du täglich? Was planst du für die Entlassung?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne jeden Befund der richtigen Kategorie zu.",
        categories: [
          { name: "Sofortmaßnahme nötig" },
          { name: "Täglich beobachten" },
          { name: "Entlassungsplanung" },
        ],
        categoryItems: [
          {
            text: "Diabetisches Fußsyndrom Wagner 1 → Podologen-Überweisung einleiten",
            correctCategory: 0,
          },
          {
            text: "Albumin 31 g/l, NRS-2002-Score 1 + positive GLIM-Diagnose Mangelernährung Stadium 1 → Ernährungsintervention starten",
            correctCategory: 0,
          },
          {
            text: "BZ-Tagesprofil (nüchtern, postprandial)",
            correctCategory: 1,
          },
          {
            text: "Hautfalten täglich inspizieren (submammär, Leisten, Abdomen)",
            correctCategory: 1,
          },
          {
            text: "Inkontinenz-Häufigkeit und Bewältigungsstrategie beobachten",
            correctCategory: 1,
          },
          {
            text: "Ernährungsberatung ambulant nach Entlassung koordinieren",
            correctCategory: 2,
          },
          {
            text: "Ambulante Podologie für nach dem Krankenhausaufenthalt",
            correctCategory: 2,
          },
          {
            text: "Gynäkologie-Überweisung für Inkontinenz-Behandlung",
            correctCategory: 2,
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 40,
};
