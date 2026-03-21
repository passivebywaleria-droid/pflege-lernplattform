// Lektion 10: Medikamentoese Therapie — Biologika, JAK-Inhibitoren, NSAR
// CE 05 — Block C: Diagnostik & Therapie
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-10-biologika",
  ceId: "ce-05",
  title: "Medikamentoese Therapie — Biologika, JAK-Inhibitoren, NSAR",
  titleShort: "Biologika & Co.",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-IV.1"],
  bloomStufen: [1, 5],
  voraussetzungen: ["le-09-dmards"],
  leitfall: {
    name: "Yusuf Al-Khalil",
    alter: 60,
    beruf: "Restaurantbesitzer",
    diagnose:
      "Rheumatoide Arthritis (Anti-CCP+, RF+, DAS28 5,2) — sekundaeres MTX-Versagen",
    setting: "Rheumatologische Schwerpunktpraxis, Therapieeskalation",
    kernproblem:
      "Angst vor Selbstinjektion und Infektionsrisiko im Beruf (Gastronomie), Sohn fragt nach JAK-Inhibitoren",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "biologika-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Willkommen — Was weisst du ueber Biologika?",
      body: "In der letzten Lektion hast du die Basistherapie mit konventionellen DMARDs kennengelernt — vor allem Methotrexat. Aber was passiert, wenn MTX allein nicht ausreicht?\n\nDann kommen Biologika und andere moderne Medikamente ins Spiel. Sie greifen gezielt in die Entzuendungskaskade ein und koennen die Gelenkzerstoerung aufhalten — auch wenn csDMARDs versagt haben.\n\nIn dieser Lektion lernst du:\n- Welche Biologika (bDMARDs) es gibt und wie sie wirken\n- Was JAK-Inhibitoren sind und wann sie eingesetzt werden\n- Die Rolle von NSAR und Glukokortikoiden im Gesamtkonzept\n- Wie du Patienten bei der subkutanen Selbstinjektion anleitest",
      glossarBegriffe: ["bDMARD"],
    },
    contentB1: {
      title: "Willkommen — Was weisst du ueber Biologika?",
      body: "In der letzten Lektion hast du gelernt:\nWas sind Basismedikamente (DMARDs)?\nJetzt kommt die naechste Stufe.\n\nManchmal reicht Methotrexat allein nicht aus.\nDann braucht der Patient ein staerkeres Medikament.\nDiese Medikamente heissen Biologika.\nSie greifen gezielt in die Entzuendung ein.\n\nIn dieser Lektion lernst du:\n- Welche Biologika es gibt\n- Was JAK-Hemmer sind (Tabletten statt Spritze)\n- Warum NSAR und Kortison keine Basismedikamente sind\n- Wie du Patienten das Spritzen beibringst",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Biologika und Immunsuppression?",
    },
  },
  {
    stepId: "biologika-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Schaetzfrage zum Einstieg",
      body: "",
    },
    question: {
      fragetext:
        "Ein Patient mit RA nimmt seit 6 Monaten Methotrexat. Der DAS28 liegt weiterhin bei 5,1 (hohe Krankheitsaktivitaet). Was ist der naechste Schritt laut Leitlinie?",
      optionen: [
        {
          text: "MTX absetzen und durch ein anderes csDMARD ersetzen",
          isCorrect: false,
          explanation:
            "MTX wird in der Regel NICHT abgesetzt, sondern beibehalten. Die Eskalation erfolgt durch Hinzufuegen eines Biologikums oder JAK-Inhibitors — die Kombination ist wirksamer als ein Wechsel.",
        },
        {
          text: "MTX-Dosis erhoehen auf 25 mg/Woche",
          isCorrect: false,
          explanation:
            "Eine Dosiserhoehung waere bei kurzem Therapieverlauf moeglich, aber nach 6 Monaten ohne ausreichendes Ansprechen empfiehlt die Leitlinie die Eskalation auf ein bDMARD oder tsDMARD — nicht nur eine Dosisanpassung.",
        },
        {
          text: "Zusaetzlich zu MTX ein Biologikum oder einen JAK-Inhibitor beginnen",
          isCorrect: true,
          explanation:
            "Richtig! Die S3-Leitlinie und EULAR empfehlen bei unzureichendem Ansprechen auf das erste csDMARD innerhalb von 3-6 Monaten die Eskalation durch Hinzufuegen eines bDMARD oder — unter Risikoabwaegung — eines JAK-Inhibitors. MTX wird dabei weitergefuehrt.",
        },
        {
          text: "Abwarten und in 3 Monaten erneut pruefen",
          isCorrect: false,
          explanation:
            "Abwarten waere falsch — bei hoher Krankheitsaktivitaet nach 6 Monaten ist das Window of Opportunity fuer eine Verhinderung von Gelenkschaeden bereits kritisch. Die Treat-to-Target-Strategie fordert Handeln, nicht Abwarten.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "biologika-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q6"],
    contentC1: {
      title: 'Yusuf Al-Khalil — "Muss ich mein Restaurant aufgeben?"',
      body: "Yusuf Al-Khalil, 60 Jahre, betreibt seit 25 Jahren ein libanesisches Restaurant in Dortmund. Vor 3 Jahren wurde bei ihm eine rheumatoide Arthritis diagnostiziert (Anti-CCP-positiv, RF-positiv). Unter Methotrexat 15 mg/Woche ging es ihm anfangs deutlich besser.\n\nSeit 6 Monaten nehmen die Beschwerden wieder zu: Morgensteifigkeit ueber 90 Minuten, geschwollene Fingergrundgelenke, Fatigue. Der DAS28 ist auf 5,2 gestiegen — hohe Krankheitsaktivitaet trotz MTX.\n\nSeine Rheumatologin empfiehlt die Eskalation mit Adalimumab (einem TNF-alpha-Inhibitor, Biosimilar). Yusuf soll sich das Medikament alle 2 Wochen selbst unter die Haut spritzen. Er ist erschrocken: \"Ich soll mich selbst spritzen? Und was ist mit Infektionen — ich stehe jeden Tag in der Kueche, habe Kontakt mit Dutzenden Gaesten!\"\n\nSein Sohn Tarek, Apotheker, hat im Internet ueber JAK-Inhibitoren gelesen — Tabletten statt Spritzen. Waere das nicht besser?",
      fallbezug:
        "Einfuehrung des Leitfalls — Yusuf repraesentiert die typische Eskalationssituation: sekundaeres MTX-Versagen, Angst vor Selbstinjektion, Sorge um Berufsfaehigkeit.",
      glossarBegriffe: [
        "Sekundaeres Therapieversagen",
        "TNF-alpha-Inhibitor",
      ],
    },
    contentB1: {
      title: 'Yusuf Al-Khalil — "Muss ich mein Restaurant aufgeben?"',
      body: "Yusuf Al-Khalil ist 60 Jahre alt.\nEr hat ein libanesisches Restaurant in Dortmund.\nVor 3 Jahren hat er die Diagnose Rheuma bekommen.\nRheuma ist eine Krankheit, bei der die Gelenke sich entzuenden.\n\nAm Anfang hat Methotrexat gut geholfen.\nAber seit 6 Monaten wird es wieder schlimmer.\nSeine Finger sind morgens steif und geschwollen.\nEr ist oft muede.\nDie Entzuendung ist wieder stark.\n\nSeine Aerztin sagt:\n\"Methotrexat allein reicht nicht mehr.\nSie brauchen ein zusaetzliches Medikament: Adalimumab.\"\n\nAdalimumab ist ein Biologikum (ein spezielles Medikament gegen Entzuendung).\nYusuf muss es sich alle 2 Wochen selbst unter die Haut spritzen.\n\nYusuf hat Angst:\n\"Ich soll mich selbst spritzen?\nUnd was ist mit Infektionen?\nIch arbeite jeden Tag mit vielen Menschen!\"\n\nSein Sohn Tarek ist Apotheker.\nEr hat im Internet ueber JAK-Hemmer gelesen.\nDas sind Tabletten — keine Spritzen.\nEr fragt: \"Waeren Tabletten nicht besser?\"",
      fallbezug:
        "Einfuehrung des Leitfalls — Yusuf repraesentiert die typische Eskalationssituation.",
    },
  },
  {
    stepId: "biologika-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Yusufs Befunde einordnen",
      body: "",
      fallbezug:
        "Yusuf hat: Anti-CCP+, RF+, DAS28 5,2 nach 6 Monaten MTX, Erosionen im MRT der Haende. Sein Rheumatologe empfiehlt Adalimumab. Ist das leitliniengerecht?",
    },
    question: {
      fragetext:
        "Welcher Befund bei Yusuf ist am staerksten fuer die Eskalation auf ein Biologikum entscheidend?",
      optionen: [
        {
          text: "Er ist 60 Jahre alt",
          isCorrect: false,
          explanation:
            "Das Alter allein ist kein Eskalationskriterium. Biologika koennen in jedem Alter eingesetzt werden, solange keine spezifischen Kontraindikationen bestehen.",
        },
        {
          text: "Er hat serologisch positive RA mit hoher Krankheitsaktivitaet trotz 6 Monaten MTX",
          isCorrect: true,
          explanation:
            "Richtig! Die EULAR-Empfehlungen nennen als schlechte prognostische Faktoren fuer die Eskalation: Autoantikoerper (Anti-CCP+, RF+), hohe Krankheitsaktivitaet (DAS28 >5,1) und unzureichendes Ansprechen auf csDMARD. Yusuf erfuellt alle drei Kriterien.",
        },
        {
          text: "Er hat Angst vor der Selbstinjektion",
          isCorrect: false,
          explanation:
            "Angst vor der Injektion ist eine wichtige pflegerische Aufgabe (Patientenschulung!), aber kein medizinisches Kriterium fuer die Therapieeskalation. Die Entscheidung basiert auf Krankheitsaktivitaet und prognostischen Faktoren.",
        },
        {
          text: "Sein Sohn ist Apotheker und empfiehlt es",
          isCorrect: false,
          explanation:
            "Die Meinung von Angehoerigen ist wertvoll fuer die Therapieadhaerence, aber die Eskalationsentscheidung wird nach objektiven Kriterien (DAS28, Autoantikoerper, Erosionen, Therapieversagen) getroffen.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "biologika-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q6"],
    contentC1: {
      title: "Biologika — Gezielte Waffen gegen die Entzuendung",
      body: "Biologika (bDMARDs) sind biotechnologisch hergestellte Antikoerper oder Fusionsproteine. Sie blockieren gezielt einzelne Schritte der Entzuendungskaskade:\n\n**TNF-alpha-Inhibitoren** (haeufigste Gruppe):\nAdalimumab, Etanercept, Infliximab, Golimumab, Certolizumab. Sie blockieren den Entzuendungsbotenstoff TNF-alpha. Meist subkutan (s.c.) als Fertigspritze oder Pen, Infliximab intravenoees (i.v.).\n\n**IL-6-Inhibitoren:**\nTocilizumab, Sarilumab. Blockieren Interleukin-6. Besonderheit: Tocilizumab ist das einzige Biologikum, das als Monotherapie (ohne MTX) gleichwertig wirksam ist.\n\n**Anti-CD20 (B-Zell-Depletion):**\nRituximab. Zerstoert B-Lymphozyten. Nur i.v., bei schwerer RA oder nach Versagen anderer bDMARDs. Cave: Impfungen mind. 6 Monate vorher!\n\n**T-Zell-Costimulationsblocker:**\nAbatacept. Hemmt die T-Zell-Aktivierung. S.c. oder i.v. Etwas langsamerer Wirkeintritt, aber gutes Sicherheitsprofil.\n\n**Biosimilars:** Fuer viele Biologika gibt es guenstigere Nachahmerpraeparate — therapeutisch gleichwertig, EMA-geprueft.",
      glossarBegriffe: ["Biosimilar", "IL-6-Inhibitor", "Rituximab"],
    },
    contentB1: {
      title: "Biologika — Gezielte Medikamente gegen die Entzuendung",
      body: "Biologika sind besondere Medikamente.\nSie werden im Labor hergestellt.\nSie blockieren ganz bestimmte Stoffe im Koerper.\nDiese Stoffe verursachen die Entzuendung.\n\nEs gibt 4 Gruppen:\n\n**1. TNF-alpha-Blocker** (die haeufigste Gruppe):\nZum Beispiel Adalimumab oder Etanercept.\nSie blockieren den Entzuendungsstoff TNF-alpha.\nDie meisten werden als Spritze unter die Haut gegeben.\n\n**2. IL-6-Blocker:**\nZum Beispiel Tocilizumab.\nBlockiert den Entzuendungsstoff Interleukin-6.\nBesonderheit: Wirkt auch allein (ohne Methotrexat).\n\n**3. Anti-CD20 (gegen B-Zellen):**\nRituximab. Wird als Infusion in die Vene gegeben.\nZerstoert bestimmte Immunzellen (B-Zellen).\nWichtig: Impfungen vorher abschliessen!\n\n**4. T-Zell-Blocker:**\nAbatacept. Als Spritze oder Infusion.\nWirkt langsamer, aber mit wenigen Nebenwirkungen.\n\n**Biosimilars:**\nFuer viele Biologika gibt es guenstigere Kopien.\nSie heissen Biosimilars.\nSie wirken genauso gut und sind genauso sicher.\nAber sie kosten viel weniger.",
    },
  },
  {
    stepId: "biologika-06",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q6"],
    contentC1: {
      title: "Ordne die Wirkstoffe ihrem Angriffspunkt zu",
      body: "",
    },
    question: {
      fragetext:
        "Ordne jeden Wirkstoff dem richtigen Angriffspunkt (Target) zu:",
      matchingPairs: [
        { left: "Adalimumab", right: "TNF-alpha" },
        { left: "Tocilizumab", right: "Interleukin-6 (IL-6)" },
        { left: "Rituximab", right: "CD20 (B-Zellen)" },
        { left: "Abatacept", right: "T-Zell-Costimulation" },
        { left: "Tofacitinib", right: "JAK-Signalweg (intrazellulaer)" },
        {
          left: "Ibuprofen",
          right: "Cyclooxygenase (COX) — kein DMARD!",
        },
      ],
    },
  },
  {
    stepId: "biologika-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3", "Q4", "Q10"],
    contentC1: {
      title: "Tabletten, Schmerzmittel, Kortison — die anderen Mitspieler",
      body: "**JAK-Inhibitoren (tsDMARDs):**\nBaricitinib, Tofacitinib, Upadacitinib, Filgotinib. Kleine Molekuele (keine Antikoerper), die als Tabletten eingenommen werden. Sie blockieren Januskinasen — Enzyme, die Entzuendungssignale ins Zellinnere weiterleiten.\n\nVorteil: Orale Einnahme (keine Spritze). Nachteil: Nach der ORAL-Surveillance-Studie warnt die EMA vor erhoehtem Risiko fuer Herz-Kreislauf-Ereignisse und Malignome — besonders bei Patienten ueber 65, (Ex-)Rauchern und solchen mit kardiovaskulaeren Risikofaktoren. Deshalb: Biologika bevorzugen, JAK-Inhibitoren nur nach individueller Risikoabwaegung.\n\n**NSAR (z.B. Ibuprofen, Diclofenac, Etoricoxib):**\nLindern Schmerz und Entzuendung, veraendern aber NICHT den Krankheitsverlauf. Symptomkontrolle — kein Ersatz fuer DMARDs. Cave: Magen-Darm-Nebenwirkungen, Niere, kardiovaskulaeres Risiko bei Langzeiteinnahme.\n\n**Glukokortikoide (z.B. Prednisolon):**\nStark entzuendungshemmend, schneller Wirkeintritt. Werden als Bridging eingesetzt — ueberbruecken die Zeit, bis DMARDs wirken (Wochen bis Monate). Ziel: So kurz und so niedrig dosiert wie moeglich. Kein DMARD!",
      glossarBegriffe: ["JAK-Inhibitor", "NSAR", "Bridging"],
    },
    contentB1: {
      title:
        "Tabletten, Schmerzmittel, Kortison — die anderen Medikamente",
      body: "**JAK-Hemmer (Tabletten):**\nZum Beispiel Baricitinib oder Tofacitinib.\nDas sind Tabletten — keine Spritzen.\nSie blockieren bestimmte Enzyme in der Zelle.\nSo wird die Entzuendung gestoppt.\n\nAber Vorsicht:\nEine grosse Studie hat gezeigt:\nBei aelteren Patienten mit Risikofaktoren gibt es mehr Nebenwirkungen.\nZum Beispiel Herz-Kreislauf-Probleme.\nDeshalb sagt die Behoerde (EMA):\nBiologika sind meistens die bessere Wahl.\nJAK-Hemmer nur, wenn Biologika nicht passen.\n\n**NSAR (Schmerzmittel):**\nZum Beispiel Ibuprofen oder Diclofenac.\nSie helfen gegen Schmerzen und Entzuendung.\nAber sie schuetzen die Gelenke NICHT.\nSie sind kein Ersatz fuer Basismedikamente.\n\n**Kortison (zum Beispiel Prednisolon):**\nWirkt schnell und stark gegen Entzuendung.\nWird als Bruecke eingesetzt.\nDas bedeutet: Kortison hilft sofort.\nDie Basismedikamente brauchen Wochen bis Monate.\nKortison soll so kurz und so niedrig wie moeglich sein.",
    },
  },
  {
    stepId: "biologika-08",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q3", "Q4", "Q10"],
    contentC1: {
      title: 'Yusufs Sohn fragt: "Waeren JAK-Inhibitoren nicht besser?"',
      body: "",
      fallbezug:
        "Tarek, Yusufs Sohn (Apotheker), hat online ueber Baricitinib gelesen: \"Papa, das sind Tabletten — kein Spritzen! Warum nimmt man nicht die?\" Wie ordnest du diese Frage fachlich ein?",
    },
    question: {
      fragetext:
        "Yusufs Sohn Tarek fragt nach JAK-Inhibitoren statt Biologika. Welche Aussage zur aktuellen Sicherheitsbewertung ist korrekt?",
      optionen: [
        {
          text: "JAK-Inhibitoren sind sicherer als Biologika, weil sie als Tablette eingenommen werden",
          isCorrect: false,
          explanation:
            "Die Einnahmeform (Tablette vs. Spritze) sagt nichts ueber die Sicherheit aus. Die ORAL-Surveillance-Studie hat gezeigt, dass JAK-Inhibitoren bei Risikopatienten ein erhoehtes Risiko fuer Herz-Kreislauf-Ereignisse und Malignome haben koennen.",
        },
        {
          text: "Die EMA empfiehlt, JAK-Inhibitoren bei Patienten ueber 65 oder mit kardiovaskulaeren Risikofaktoren nur nach individueller Abwaegung einzusetzen",
          isCorrect: true,
          explanation:
            "Richtig! Nach der ORAL-Surveillance-Studie hat die EMA 2023 einen Warnhinweis fuer alle JAK-Inhibitoren ausgesprochen. Bei Risikopatienten (>65, (Ex-)Raucher, kardiovaskulaeres Risiko, Malignitaetsrisiko) sollen Biologika bevorzugt werden. Fuer Yusuf (60, keine Risikofaktoren) waere ein JAK-Inhibitor theoretisch moeglich, aber Adalimumab ist die sicherere Erstlinie.",
        },
        {
          text: "JAK-Inhibitoren duerfen in Deutschland nicht mehr verschrieben werden",
          isCorrect: false,
          explanation:
            "JAK-Inhibitoren sind weiterhin zugelassen und werden eingesetzt — nur die Indikation ist eingeschraenkt. Sie sind eine Option, wenn Biologika nicht geeignet sind oder versagt haben, und unter Beruecksichtigung individueller Risikofaktoren.",
        },
        {
          text: "ORAL Surveillance hat gezeigt, dass alle JAK-Inhibitoren bei allen Patienten gefaehrlich sind",
          isCorrect: false,
          explanation:
            "Die Studie untersuchte nur Tofacitinib bei Patienten ab 50 mit kardiovaskulaeren Risikofaktoren. Bei juengeren Patienten ohne Risikofaktoren gab es KEINEN signifikanten Unterschied zu TNF-Blockern. Die EMA hat die Warnung trotzdem auf alle JAK-Inhibitoren ausgeweitet — als Vorsichtsmassnahme.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "biologika-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q6", "Q8"],
    contentC1: {
      title:
        "Yusuf lernt die Selbstinjektion — Bringe die Schritte in die richtige Reihenfolge",
      body: "",
      fallbezug:
        "Yusuf soll lernen, sich Adalimumab (Biosimilar, Fertigpen) alle 2 Wochen selbst zu injizieren. Du als Pflegekraft leitest ihn an.",
      glossarBegriffe: ["Subkutane Selbstinjektion", "Fertigpen"],
    },
    question: {
      fragetext:
        "Bringe die Schritte der Anleitung zur subkutanen Selbstinjektion in die richtige Reihenfolge:",
      sortItems: [
        "Pen 30 Minuten vor Injektion aus dem Kuehlschrank nehmen (Raumtemperatur)",
        "Haende desinfizieren, Injektionsstelle waehlen (Bauch oder Oberschenkel, Stellen rotieren)",
        "Injektionsstelle mit Alkoholtupfer desinfizieren und trocknen lassen",
        "Schutzkappe entfernen, Pen senkrecht auf die Haut druecken",
        "Ausloeseknopf druecken und 10 Sekunden halten bis zum Klick",
        "Pen entfernen, Einstichstelle kurz mit Tupfer abdruecken (nicht reiben)",
      ],
    },
  },
  {
    stepId: "biologika-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5", "Q6"],
    contentC1: {
      title: "Notfallszenario — Infektion unter Biologika",
      body: "",
      fallbezug:
        "Yusuf nimmt seit 4 Wochen Adalimumab. Montags ruft er in der Praxis an: \"Ich habe seit gestern 38,5 Grad Fieber, Husten und Schnupfen. Im Restaurant war letzte Woche ein Mitarbeiter mit Grippe. Soll ich morgen die naechste Spritze trotzdem setzen?\"",
    },
    question: {
      fragetext:
        "Wie reagierst du als Pflegekraft auf Yusufs Anruf?",
      branchingOptions: [
        {
          text: "Setzen Sie die Spritze wie geplant — das Biologikum darf nicht pausiert werden.",
          feedback:
            "Falsch. Bei aktiver Infektion mit Fieber ueber 38 Grad muss die Biologika-Gabe pausiert werden. Unter Immunsuppression kann sich eine Infektion schnell verschlimmern. Die Injektion darf erst nach Abklingen der Infektion fortgesetzt werden.",
          isCorrect: false,
        },
        {
          text: "Kommen Sie heute noch in die Praxis zur Untersuchung. Bis zur Abklaerung pausieren wir die Adalimumab-Injektion.",
          feedback:
            "Richtig! Bei Fieber ueber 38 Grad unter Biologika-Therapie muss eine aerztliche Abklaerung erfolgen. Die Biologika-Gabe wird pausiert, bis die Infektion abgeklungen ist. Unter Immunsuppression koennen banale Infekte schwerer verlaufen — fruehe Vorstellung ist entscheidend.",
          isCorrect: true,
        },
        {
          text: "Nehmen Sie Ibuprofen gegen das Fieber und spritzen Sie morgen wie geplant.",
          feedback:
            "Falsch. Ibuprofen kann zwar Fieber senken, aber das loest nicht das Problem. Unter Immunsuppression muss jede fieberhafte Infektion aerztlich abgeklaert werden — ein maskiertes Fieber kann gefaehrlich sein. Die Biologika-Gabe muss pausiert werden.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "biologika-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q5", "Q9"],
    contentC1: {
      title: "Impfschutz unter Biologika — Was raetst du Yusuf?",
      body: "Biologika supprimieren das Immunsystem gezielt — das macht sie wirksam gegen Autoimmunerkrankungen, erhoecht aber auch das Infektionsrisiko. Deshalb ist ein vollstaendiger Impfschutz besonders wichtig.\n\nDie STIKO und DGRh empfehlen:\n- Impfstatus VOR Therapiebeginn pruefen und vervollstaendigen\n- Totimpfstoffe (Influenza, Pneumokokken PCV20, Hepatitis B, Herpes zoster) sind unter Biologika sicher, aber die Immunantwort kann vermindert sein\n- Lebendimpfstoffe (z.B. Gelbfieber, MMR) sind unter TNF-Blockern KONTRAINDIZIERT",
      fallbezug:
        "Yusuf beginnt in 2 Wochen mit Adalimumab. Bei der Durchsicht seines Impfpasses faellt auf: letzte Grippeimpfung vor 5 Jahren, kein Pneumokokken-Schutz, Hepatitis-B-Status unklar. Yusuf plant ausserdem, naechstes Jahr seine Familie im Libanon zu besuchen.",
      glossarBegriffe: ["Totimpfstoff", "Lebendimpfstoff"],
    },
    contentB1: {
      title: "Impfschutz unter Biologika — Was raetst du Yusuf?",
      body: "Biologika machen das Immunsystem schwaech.\nDas hilft gegen Rheuma.\nAber es macht den Koerper auch anfaelliger fuer Infektionen.\n\nDeshalb ist Impfschutz besonders wichtig.\nDie Empfehlungen sind:\n- Impfungen VOR Therapiebeginn pruefen\n- Totimpfstoffe (zum Beispiel Grippe, Lungenentzuendung) sind erlaubt\n- Lebendimpfstoffe (zum Beispiel Gelbfieber) sind VERBOTEN unter Biologika\n\nYusuf beginnt in 2 Wochen mit Adalimumab.\nIm Impfpass steht:\nLetzte Grippeimpfung vor 5 Jahren.\nKeine Impfung gegen Lungenentzuendung.\nHepatitis B unklar.\nEr will naechstes Jahr in den Libanon reisen.",
      fallbezug:
        "Yusuf beginnt in 2 Wochen mit Adalimumab. Sein Impfschutz ist lueckenhaft.",
    },
    question: {
      fragetext:
        "Schreibe eine kurze Impfberatung fuer Yusuf: Welche Impfungen empfiehlst du VOR Therapiebeginn, welche koennen auch unter Adalimumab erfolgen, und worauf muss Yusuf bei der geplanten Libanon-Reise achten?",
      musterantwort:
        "Vor Therapiebeginn mit Adalimumab sollte Yusuf folgende Impfungen erhalten: Influenza (jaehrlich empfohlen, kann nachgeholt werden), Pneumokokken (PCV20 — bisher kein Schutz), Hepatitis B (Titer kontrollieren, ggf. Grundimmunisierung). Herpes zoster (Shingrix, Totimpfstoff) ist ab 50 Jahren empfohlen und kann auch unter Adalimumab gegeben werden. Unter Adalimumab sind alle Totimpfstoffe weiterhin moeglich, die Immunantwort kann aber vermindert sein — Titer-Kontrolle sinnvoll. Fuer die Libanon-Reise gilt: Gelbfieberimpfung ist als Lebendimpfstoff unter TNF-Blockern kontraindiziert. Yusuf muss dies mit dem Tropenmediziner und Rheumatologen besprechen. Reiseplanung idealerweise 3-6 Monate vorher.",
      bewertungskriterien: [
        "Mindestens 3 empfohlene Impfungen benannt (Influenza, Pneumokokken, Hepatitis B)",
        "Unterscheidung Totimpfstoff vs. Lebendimpfstoff genannt",
        "Zeitpunkt (vor Therapiebeginn vs. unter Therapie) beruecksichtigt",
        "Reisebezug mit Lebendimpfstoff-Kontraindikation erwaehnt",
      ],
      satzanfaengeB1: [
        "Vor dem Start von Adalimumab empfehle ich folgende Impfungen: ...",
        "Unter dem Biologikum darf Yusuf keine ... erhalten, weil ...",
        "Fuer die Reise in den Libanon muss Yusuf beachten, dass ...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "biologika-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q7", "Q8"],
    contentC1: {
      title: "Praxisauftrag — Biosimilars, Kosten und deine Rolle",
      body: "Biologika gehoeren zu den teuersten Medikamenten im Gesundheitssystem. Ein Jahr Adalimumab (Originator) kostet ca. 20.000 EUR — das Biosimilar nur ca. 5.000-8.000 EUR bei gleicher Wirksamkeit und Sicherheit. Seit 2025 koennen Apotheken Biologika durch Biosimilars austauschen (G-BA-Beschluss).\n\nFuer Patienten wie Yusuf bedeutet das: Sein Praeparat kann sich aendern — anderer Name, anderer Pen, vielleicht andere Handhabung. Hier brauchen Patienten Aufklaerung und Sicherheit.\n\n**Dein Praxisauftrag:**\n1. Recherchiere: Welche Adalimumab-Biosimilars sind in Deutschland verfuegbar? (Tipp: Lauer-Taxe oder gelbe-liste.de)\n2. Ueberlege: Was wuerdest du einem Patienten sagen, der besorgt fragt \"Warum bekomme ich ploetzlich ein anderes Medikament?\"\n\nBiologika und Biosimilars sind ein Bereich, in dem Pflege, Pharmazie und Medizin eng zusammenarbeiten. Als Pflegekraft bist du oft die erste Ansprechperson, wenn Patienten Fragen oder Sorgen haben.",
      glossarBegriffe: ["Apotheken-Substitution"],
    },
    contentB1: {
      title: "Praxisauftrag — Biosimilars, Kosten und deine Rolle",
      body: "Biologika sind sehr teuer.\nEin Jahr Adalimumab (Original) kostet ca. 20.000 Euro.\nDas Biosimilar (die guenstige Kopie) kostet nur 5.000-8.000 Euro.\nEs wirkt genauso gut.\n\nSeit 2025 duerfen Apotheken das Original durch ein Biosimilar austauschen.\nDas spart dem Gesundheitssystem viel Geld.\n\nFuer Patienten wie Yusuf bedeutet das:\nSein Medikament kann einen anderen Namen haben.\nDer Pen sieht vielleicht anders aus.\nDas kann Patienten verunsichern.\n\nDein Auftrag:\n1. Suche im Internet: Welche Adalimumab-Biosimilars gibt es in Deutschland?\n2. Ueberlege: Was sagst du einem Patienten, der fragt:\n   \"Warum bekomme ich ploetzlich ein anderes Medikament?\"\n\nAls Pflegekraft bist du oft die erste Person, die Patienten fragen.\nDeshalb ist es wichtig, dass du Bescheid weisst.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "bDMARD (biological DMARD)",
    erklaerung:
      "Biotechnologisch hergestelltes Basismedikament, das gezielt Entzuendungsbotenstoffe oder Immunzellen blockiert (z.B. Adalimumab, Tocilizumab, Rituximab)",
  },
  {
    begriff: "tsDMARD (targeted synthetic DMARD)",
    erklaerung:
      "Zielgerichtetes synthetisches Basismedikament — kleine Molekuele, die als Tablette eingenommen werden (z.B. JAK-Inhibitoren wie Baricitinib)",
  },
  {
    begriff: "TNF-alpha-Inhibitor",
    erklaerung:
      "Biologikum, das den Entzuendungsbotenstoff TNF-alpha blockiert — haeufigste bDMARD-Gruppe (z.B. Adalimumab, Etanercept, Infliximab)",
  },
  {
    begriff: "Biosimilar",
    erklaerung:
      "Nachahmerprodukt eines Biologikums mit nachgewiesener Bioaequivalenz — gleiche Wirksamkeit und Sicherheit, bis zu 80% guenstiger",
  },
  {
    begriff: "JAK-Inhibitor",
    erklaerung:
      "Tablette, die Januskinasen hemmt und so Entzuendungssignale intrazellulaer blockiert (z.B. Baricitinib, Tofacitinib, Upadacitinib)",
  },
  {
    begriff: "NSAR",
    erklaerung:
      "Nichtsteroidale Antirheumatika — Schmerz- und Entzuendungshemmer (z.B. Ibuprofen, Diclofenac), die den Krankheitsverlauf NICHT beeinflussen",
  },
  {
    begriff: "Bridging (Ueberbrueckung)",
    erklaerung:
      "Kurzfristige Glukokortikoid-Therapie, die die Zeit ueberbrueckt bis DMARDs ihre volle Wirkung entfalten (Wochen bis Monate)",
  },
  {
    begriff: "Subkutane Selbstinjektion",
    erklaerung:
      "Patient spritzt sich das Medikament selbst unter die Haut — nach Schulung durch Pflegekraft oder Arzt, meist mit Fertigpen",
  },
  {
    begriff: "Sekundaeres Therapieversagen",
    erklaerung:
      "Ein Medikament wirkt anfangs gut, verliert aber nach Monaten oder Jahren seine Wirksamkeit — haeufig bei csDMARDs und auch bei Biologika moeglich",
  },
  {
    begriff: "Totimpfstoff",
    erklaerung:
      "Impfstoff mit abgetoeteten Erregern oder Erregerbestandteilen — unter Immunsuppression sicher anwendbar (z.B. Influenza, Pneumokokken, Hepatitis B)",
  },
  {
    begriff: "Lebendimpfstoff",
    erklaerung:
      "Impfstoff mit abgeschwaechten, vermehrungsfaehigen Erregern — unter starker Immunsuppression kontraindiziert (z.B. Gelbfieber, MMR)",
  },
  {
    begriff: "Apotheken-Substitution",
    erklaerung:
      "Apotheke tauscht Originator-Biologikum gegen wirkstoffgleiches Biosimilar aus — seit 2025 in Deutschland nach G-BA-Beschluss moeglich",
  },
];
