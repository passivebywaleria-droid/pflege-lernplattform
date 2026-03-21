// Lektion 08: Diagnostik rheumatischer Erkrankungen
// CE 05 — Block C: Diagnostik & Therapie
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-08-diagnostik",
  ceId: "ce-05",
  title: "Diagnostik rheumatischer Erkrankungen",
  titleShort: "Diagnostik",
  zeitrichtwert: 3,
  geschaetzteLernzeit: { c1: 25, b1: 40 },
  kompetenzbereiche: ["KB-I.1", "KB-III.2", "KB-V.1"],
  bloomStufen: [1, 3],
  voraussetzungen: ["le-04-ra"],
  leitfall: {
    name: "Maria Santos",
    alter: 38,
    beruf: "Friseurin",
    diagnose: "Rheumatoide Arthritis (Anti-CCP-positiv, RF-negativ)",
    setting: "Rheumatologische Ambulanz, Erstvorstellung",
    kernproblem:
      "8 Monate diagnostische Verzoegerung, Existenzangst (eigener Salon), Mutter undiagnostiziert im Rollstuhl",
  },
  glossarCount: 15,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "diagnostik-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Was weisst du ueber Rheuma-Diagnostik?",
      body: "In dieser Lektion geht es um einen der wichtigsten Schritte in der Rheumatologie: die Diagnostik. Wie wird eine rheumatische Erkrankung erkannt? Welche Untersuchungen sind noetig? Und warum dauert es oft Monate, bis die richtige Diagnose steht?\n\nDu lernst:\n- Wie eine rheumatologische Anamnese aufgebaut ist\n- Welche klinischen Untersuchungen durchgefuehrt werden\n- Welche Laborwerte wichtig sind — und was sie aussagen\n- Welche Bildgebung wann eingesetzt wird\n- Was die ACR/EULAR-Klassifikationskriterien sind\n- Was Pflegende zur Diagnostik beitragen koennen",
    },
    contentB1: {
      title: "Was weisst du ueber Rheuma-Diagnostik?",
      body: "In dieser Lektion lernst du:\nWie erkennt man Rheuma?\nWelche Untersuchungen macht der Arzt?\nWelche Bluttests sind wichtig?\nWas zeigen Roentgen und Ultraschall?\nUnd: Was koennen Pflegende dabei tun?",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Rheuma-Diagnostik (Labor, Bildgebung, klinische Untersuchung)?",
    },
  },
  {
    stepId: "diagnostik-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q8"],
    contentC1: {
      title: "Schaetzfrage zum Einstieg",
      body: "",
    },
    question: {
      fragetext:
        "Wie lange dauert es in Deutschland im Durchschnitt, bis ein Patient mit Verdacht auf Rheuma einen Rheumatologen sieht?",
      optionen: [
        {
          text: "Etwa 4 Wochen",
          isCorrect: false,
          explanation:
            "Zu optimistisch. 4 Wochen waere das Ideal — die Realitaet sieht leider anders aus.",
        },
        {
          text: "Etwa 3 Monate",
          isCorrect: false,
          explanation:
            "3 Monate waere das Ziel der Leitlinie (12-Wochen-Fenster). Nur 38% der Patienten schaffen das. Der Durchschnitt liegt deutlich hoeher.",
        },
        {
          text: "Etwa 21 Monate",
          isCorrect: true,
          explanation:
            "Richtig. Der Median liegt bei 21 Monaten bis zur rheumatologischen Erstvorstellung (DGRh-Kerndokumentation 2024). Das ist fast 2 Jahre — weit entfernt vom empfohlenen 12-Wochen-Fenster.",
        },
        {
          text: "Etwa 5 Jahre",
          isCorrect: false,
          explanation:
            "Bei manchen Erkrankungen wie Morbus Bechterew kann es tatsaechlich 5-7 Jahre dauern. Fuer RA liegt der Durchschnitt aber bei 21 Monaten.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "diagnostik-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q8"],
    contentC1: {
      title: "Maria Santos — 8 Monate ohne Diagnose",
      body: "Maria Santos, 38 Jahre, hat seit ihrem 20. Lebensjahr einen eigenen Friseursalon. Vor 8 Monaten begannen Schmerzen in beiden Haenden — zuerst nur morgens, dann den ganzen Tag. Die Fingergrundgelenke sind geschwollen, die Morgensteifigkeit dauert ueber eine Stunde.\n\nIhr Weg bis hierher:\n- Monat 1: Hausarzt — \"Ueberlastung, Sie sind Friseurin. Ibuprofen und schonen.\"\n- Monat 4: Orthopaedin — Roentgen unauffaellig. \"Organisch alles in Ordnung. Vielleicht psychosomatisch?\"\n- Monat 8: Maria kann die Schere morgens nicht mehr halten. Sie besteht auf einer Ueberweisung zum Rheumatologen.\n\nHeute sitzt sie in der rheumatologischen Ambulanz. Sie ist wuetend und aengstlich zugleich: \"8 Monate hat man mir gesagt, ich bilde mir das ein. Meine Mutter hatte auch Rheuma — die sitzt heute im Rollstuhl, weil niemand es frueh genug erkannt hat.\"",
      fallbezug:
        "Maria begleitet dich durch diese Lektion. Wir werden ihre Diagnostik Schritt fuer Schritt durchgehen — von der Anamnese bis zur Diagnose.",
      glossarBegriffe: ["Morgensteifigkeit"],
    },
    contentB1: {
      title: "Maria Santos — 8 Monate ohne Diagnose",
      body: "Maria Santos ist 38 Jahre alt.\nSie hat einen Friseursalon.\nSeit 8 Monaten hat sie Schmerzen in beiden Haenden.\nDie Finger sind morgens steif.\nDie Steifigkeit dauert mehr als 1 Stunde.\n\nWas ist passiert?\n- Monat 1: Der Hausarzt sagte: \"Das kommt von der Arbeit.\"\n  Er gab ihr Ibuprofen (ein Schmerzmittel).\n- Monat 4: Die Orthopaedin sagte: \"Im Roentgen ist alles normal.\"\n  Sie sagte: \"Vielleicht ist es psychisch.\"\n- Monat 8: Maria kann morgens die Schere nicht halten.\n  Sie sagt: \"Ich will zum Rheumatologen!\"\n\nMaria ist wuetend und hat Angst.\nIhre Mutter hatte auch Rheuma.\nNiemand hat es erkannt.\nHeute sitzt die Mutter im Rollstuhl.\n\nMaria hat Angst: \"Passiert mir das auch?\"",
    },
  },
  {
    stepId: "diagnostik-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4"],
    contentC1: {
      title: "Marias Symptome einordnen",
      body: "",
      fallbezug:
        "Denke an Marias Beschwerden: symmetrische Schmerzen in den Fingergrundgelenken, Morgensteifigkeit >60 Minuten, Schwellung, seit 8 Monaten.",
    },
    question: {
      fragetext:
        "Welches Muster spricht bei Marias Symptomen am ehesten fuer eine entzuendliche Gelenkerkrankung?",
      optionen: [
        {
          text: "Anlaufschmerz und Belastungsschmerz — typisch fuer Arthrose",
          isCorrect: false,
          explanation:
            "Anlauf- und Belastungsschmerz sind typisch fuer degenerative Erkrankungen (Arthrose). Maria hat aber Morgensteifigkeit >60 Min und Ruheschmerz — das spricht fuer Entzuendung.",
        },
        {
          text: "Morgensteifigkeit >60 Minuten und symmetrische Schwellung der Fingergrundgelenke",
          isCorrect: true,
          explanation:
            "Genau! Morgensteifigkeit ueber 30 Minuten und symmetrischer Befall kleiner Gelenke (MCP, PIP) sind Leitsymptome entzuendlich-rheumatischer Erkrankungen, besonders der RA.",
        },
        {
          text: "Schmerzen nur bei Bewegung, in Ruhe schmerzfrei",
          isCorrect: false,
          explanation:
            "Das waere typisch fuer mechanische/degenerative Ursachen. Entzuendliche Erkrankungen verursachen auch Ruheschmerz und Nachtschmerz.",
        },
        {
          text: "Einseitige Schwellung des Grosszehengrundgelenks",
          isCorrect: false,
          explanation:
            "Das waere typisch fuer einen akuten Gichtanfall (Podagra). Maria hat symmetrische Beschwerden an den Haenden — ein anderes Muster.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-9)
  // ==========================================
  {
    stepId: "diagnostik-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Die rheumatologische Anamnese — Die richtigen Fragen stellen",
      body: "Die Anamnese ist der erste und wichtigste Schritt in der Rheuma-Diagnostik. Ein erfahrener Rheumatologe kann allein durch gezielte Fragen die Diagnose in 80% der Faelle eingrenzen.\n\nDie fuenf Schluessel-Fragen:\n\n1. Schmerzcharakter: \"Wann sind die Schmerzen am schlimmsten?\"\n   Ruheschmerz, Nachtschmerz → Entzuendung\n   Belastungsschmerz → Degeneration\n\n2. Morgensteifigkeit: \"Wie lange dauert es morgens, bis Ihre Gelenke beweglich sind?\"\n   Ueber 30 Minuten → Entzuendung wahrscheinlich\n   Unter 15 Minuten → eher degenerativ\n\n3. Befallmuster: \"Welche Gelenke sind betroffen?\"\n   Symmetrisch, kleine Gelenke → RA\n   Wirbelsaeule, Iliosakralgelenke → SpA\n   Grosszehengrundgelenk → Gicht\n\n4. Zeitverlauf: \"Seit wann? Wie hat es angefangen?\"\n   Schleichend ueber Wochen → RA, SpA\n   Akut ueber Stunden → Gicht, Infektion\n\n5. Familienanamnese: \"Hat jemand in Ihrer Familie Rheuma?\"\n   Genetische Disposition bei vielen rheumatischen Erkrankungen",
      glossarBegriffe: ["Anamnese", "Befallmuster"],
    },
    contentB1: {
      title: "Die rheumatologische Anamnese",
      body: "Die Anamnese (Befragung) ist der erste Schritt.\nDer Arzt stellt gezielte Fragen.\nDamit kann er die Krankheit eingrenzen.\n\nDie 5 wichtigsten Fragen:\n\n1. Schmerz: \"Wann tut es am meisten weh?\"\n   Schmerz in Ruhe und nachts = Entzuendung\n   Schmerz bei Bewegung = Verschleiss\n\n2. Morgensteifigkeit: \"Wie lange sind die Gelenke morgens steif?\"\n   Mehr als 30 Minuten = wahrscheinlich Entzuendung\n   Weniger als 15 Minuten = eher Verschleiss\n\n3. Welche Gelenke? \"Wo tut es weh?\"\n   Beide Haende gleich (symmetrisch) = RA moeglich\n   Ruecken und Becken = Bechterew moeglich\n   Grosser Zeh = Gicht moeglich\n\n4. Seit wann? \"Wie hat es angefangen?\"\n   Langsam ueber Wochen = RA moeglich\n   Ploetzlich ueber Stunden = Gicht moeglich\n\n5. Familie: \"Hat jemand in Ihrer Familie Rheuma?\"\n   Viele Rheuma-Krankheiten sind erblich.",
    },
  },
  {
    stepId: "diagnostik-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Klinische Untersuchung: Haende und Fuesse im Fokus",
      body: "Nach der Anamnese folgt die koerperliche Untersuchung. Bei Verdacht auf RA stehen Haende und Fuesse im Mittelpunkt — denn dort beginnt die Erkrankung am haeufigsten.\n\nInspektion (Ansehen):\n- Schwellung der Gelenke? (weich = Erguss/Synovitis, hart = Osteophyten)\n- Roetung? Uebererwaermung?\n- Fehlstellungen? (Ulnardeviation, Schwanenhalsdeformitaet — bei fortgeschrittener RA)\n\nPalpation (Tasten):\n- Druckschmerz ueber den Gelenkspalten?\n- Fluktuation (Erguss)?\n- Uebererwaermung im Seitenvergleich?\n\nGaenslen-Zeichen (Kompressionstest):\nDer Untersucher drueckt die Hand quer zusammen in Hoehe der Fingergrundgelenke (MCP II-V). Schmerz = positiv → Hinweis auf Synovitis. Ebenso am Vorfuss (MTP-Gelenke).\n\nFunktionspruefung:\n- Faustschluss moeglich? Kraft?\n- Greifkraft messen (Dynamometer)\n- Alltagsbewegungen: Knoepfe schliessen, Flasche oeffnen\n\nBei Maria: Gaenslen-Zeichen beidseits positiv, weiche Schwellung MCP II und III beidseits, Greifkraft reduziert.",
      glossarBegriffe: [
        "Gaenslen-Zeichen",
        "Synovitis",
        "MCP-Gelenke",
        "MTP-Gelenke",
      ],
    },
    contentB1: {
      title: "Klinische Untersuchung: Haende und Fuesse",
      body: "Nach den Fragen untersucht der Arzt die Gelenke.\nBei Rheuma-Verdacht schaut er zuerst die Haende und Fuesse an.\n\nAnsehen:\n- Sind Gelenke geschwollen?\n- Sind Gelenke rot oder warm?\n\nTasten:\n- Tut es weh, wenn der Arzt auf das Gelenk drueckt?\n- Ist das Gelenk waermer als auf der anderen Seite?\n\nGaenslen-Test (Kompressionstest):\nDer Arzt drueckt die Hand von der Seite zusammen.\nDas tut er an den Fingergrundgelenken.\nWenn es weh tut = Entzuendung moeglich.\nDen gleichen Test macht er auch am Vorfuss.\n\nFunktion pruefen:\n- Kann die Patientin eine Faust machen?\n- Wie stark ist die Hand?\n- Kann sie Knoepfe schliessen oder eine Flasche oeffnen?\n\nBei Maria: Der Gaenslen-Test tut auf beiden Seiten weh.\nDie Fingergrundgelenke II und III sind geschwollen.\nSie kann die Schere nicht halten.",
    },
  },
  {
    stepId: "diagnostik-07",
    phase: 3,
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q9"],
    contentC1: {
      title: "Labor in der Rheumatologie — Was zeigt was?",
      body: "In der Rheumatologie gibt es kein einzelnes \"Rheuma-Labor\". Verschiedene Werte zeigen verschiedene Dinge — manche zeigen Entzuendung, manche zeigen Autoantikoerper, manche helfen bei der Differenzierung.",
      glossarBegriffe: [
        "CRP",
        "BSG",
        "Rheumafaktor",
        "Anti-CCP",
        "ANA",
      ],
    },
    question: {
      fragetext:
        "Ordne jeden Laborwert seiner diagnostischen Bedeutung zu:",
      matchingPairs: [
        {
          left: "CRP (C-reaktives Protein)",
          right:
            "Akutphase-Protein: steigt schnell bei Entzuendung (Stunden)",
        },
        {
          left: "BSG (Blutsenkungsgeschwindigkeit)",
          right:
            "Unspezifischer Entzuendungsmarker: steigt langsam (Tage)",
        },
        {
          left: "Rheumafaktor (RF)",
          right:
            "Autoantikoerper: positiv bei 70-80% der RA, aber auch bei anderen Erkrankungen",
        },
        {
          left: "Anti-CCP (ACPA)",
          right:
            "Hochspezifisch fuer RA (95-98%): kann Jahre vor Erkrankungsbeginn positiv sein",
        },
        {
          left: "ANA (Antinukleaere Antikoerper)",
          right:
            "Screening fuer Kollagenosen (SLE, Sjoergren): bei RA meist negativ",
        },
        {
          left: "HLA-B27",
          right:
            "Genetischer Marker: assoziiert mit Spondyloarthritiden (Bechterew, PsA)",
        },
      ],
    },
  },
  {
    stepId: "diagnostik-08",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q5"],
    contentC1: {
      title: "Bildgebung: Roentgen, Sonographie, MRT",
      body: "Bildgebung ergaenzt Anamnese und Labor. Verschiedene Verfahren zeigen verschiedene Stadien der Erkrankung.\n\nRoentgen (konventionell):\n- Zeigt: Knochenerosionen, Gelenkspaltverschmaelerung, Fehlstellungen\n- Nachteil: Zeigt erst SPAETE Veraenderungen — bei frueher RA oft noch unauffaellig\n- Bei Maria: Roentgen war beim Orthopaeden unauffaellig — das schliesst RA NICHT aus!\n\nSonographie (Ultraschall):\n- Zeigt: Synovitis, Erguss, Power-Doppler zeigt aktive Entzuendung\n- Vorteil: Sofort verfuegbar, keine Strahlung, zeigt Fruehveraenderungen\n- Bei Maria: Synovitis an MCP II und III beidseits — Bestaetigung der klinischen Untersuchung\n\nMRT (Magnetresonanztomographie):\n- Zeigt: Knochenoedem (Vorstufe von Erosion), Synovitis, Sehnenveraenderungen\n- Vorteil: Sensitivster Test — zeigt Veraenderungen vor Roentgen UND Sonographie\n- Nachteil: Teuer, nicht ueberall verfuegbar, lange Wartezeit\n\nMERKE: Ein unauffaelliges Roentgen schliesst Rheuma NICHT aus! Sonographie und MRT sind fuer die Fruehdiagnose entscheidend.",
      glossarBegriffe: ["Erosion", "Power-Doppler", "Knochenoedem"],
    },
    contentB1: {
      title: "Bildgebung: Roentgen, Ultraschall, MRT",
      body: "Bilder helfen dem Arzt, die Gelenke von innen zu sehen.\nEs gibt drei Methoden:\n\nRoentgen:\n- Zeigt Knochen-Schaeden und kaputten Knorpel.\n- Problem: Zeigt nur SPAETE Schaeden.\n- Bei fruehem Rheuma ist das Roentgen oft normal!\n- Bei Maria: Das Roentgen beim Orthopaeden war normal.\n  Das heisst NICHT, dass Maria kein Rheuma hat!\n\nUltraschall (Sonographie):\n- Zeigt Entzuendung in der Gelenkinnenhaut.\n- Zeigt auch Fluessigkeit im Gelenk.\n- Vorteil: Schnell, keine Strahlung, erkennt Fruehzeichen.\n- Bei Maria: Entzuendung an den Fingergrundgelenken sichtbar.\n\nMRT (Kernspin):\n- Zeigt am meisten: Entzuendung, Knochen-Schwellung, Sehnen.\n- Vorteil: Findet Veraenderungen am fruehesten.\n- Nachteil: Teuer und man muss lange warten.\n\nWICHTIG: Normales Roentgen heisst NICHT \"kein Rheuma\"!\nUltraschall und MRT erkennen Rheuma viel frueher.",
    },
  },
  {
    stepId: "diagnostik-09",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Der diagnostische Stufenprozess",
      body: "Rheuma-Diagnostik ist kein einzelner Test, sondern ein systematischer Prozess. Die Reihenfolge ist nicht zufaellig — jeder Schritt baut auf dem vorherigen auf.",
    },
    question: {
      fragetext:
        "Bringe die diagnostischen Schritte in die richtige Reihenfolge (vom ersten bis zum letzten Schritt):",
      sortItems: [
        "Anamnese: Schmerzcharakter, Morgensteifigkeit, Familienanamnese erfragen",
        "Klinische Untersuchung: Gelenke inspizieren, palpieren, Gaenslen-Test",
        "Labor: CRP, BSG, RF, Anti-CCP bestimmen",
        "Bildgebung: Sonographie der betroffenen Gelenke",
        "Klassifikation: ACR/EULAR-Kriterien anwenden, DAS28 erheben",
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 10-12)
  // ==========================================
  {
    stepId: "diagnostik-10",
    phase: 4,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "ACR/EULAR-Klassifikationskriterien anwenden",
      body: "Die ACR/EULAR-Kriterien von 2010 sind das Standard-Instrument zur Klassifikation der RA. Ab 6 von 10 Punkten wird eine RA klassifiziert.\n\nMarias Befunde:\n- Gelenkbeteiligung: 4 kleine Gelenke betroffen (MCP II+III beidseits) → 3 Punkte\n- Serologie: Anti-CCP hoch positiv (>200 U/ml), RF negativ → 3 Punkte\n- Akutphase: CRP erhoeht (28 mg/l) → 1 Punkt\n- Dauer: Symptome seit 8 Monaten (>6 Wochen) → 1 Punkt\n\nBeachte: Marias RF ist NEGATIV. Haette der Hausarzt nur RF bestimmt und Anti-CCP nicht, waere die Diagnose weiterhin verpasst worden.",
      fallbezug:
        "Marias Befundkonstellation (RF-negativ, Anti-CCP-positiv) zeigt: Ein einzelner Labortest reicht nicht. Erst die Kombination aller Kriterien ergibt das Bild.",
      glossarBegriffe: ["ACR/EULAR-Kriterien", "DAS28"],
    },
    question: {
      fragetext:
        "Wie viele Punkte erreicht Maria nach den ACR/EULAR-Kriterien — und was bedeutet das?",
      optionen: [
        {
          text: "4 Punkte — Verdacht, aber keine sichere RA",
          isCorrect: false,
          explanation:
            "Falsch gerechnet. Zaehle nochmal: 3 (Gelenke) + 3 (Anti-CCP hoch positiv) + 1 (CRP) + 1 (Dauer) = 8 Punkte.",
        },
        {
          text: "6 Punkte — gerade an der Schwelle, RA wahrscheinlich",
          isCorrect: false,
          explanation:
            "6 waere die Schwelle, aber Maria erreicht 8 Punkte. Anti-CCP hoch positiv allein gibt schon 3 Punkte.",
        },
        {
          text: "8 Punkte — RA ist klassifiziert, Therapie sollte sofort beginnen",
          isCorrect: true,
          explanation:
            "Richtig! 3+3+1+1 = 8 Punkte. Ab 6 gilt RA als klassifiziert. Mit 8 Punkten ist die Diagnose eindeutig. Jetzt zaehlt jede Woche — Therapie im Window of Opportunity (12 Wochen) verbessert die Prognose.",
        },
        {
          text: "10 Punkte — Maximalscore, alle Kriterien erfuellt",
          isCorrect: false,
          explanation:
            "10 waere der Maximalscore. Maria erreicht 8 — bei Gelenkbeteiligung waeren bis zu 5 Punkte moeglich (>10 kleine Gelenke), aber Maria hat 4 kleine Gelenke dokumentiert.",
        },
      ],
    },
  },
  {
    stepId: "diagnostik-11",
    phase: 4,
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q6", "Q10"],
    contentC1: {
      title: "Interprofessionelle Kommunikation: Befunde weitergeben",
      body: "Du arbeitest als Pflegefachkraft in der rheumatologischen Ambulanz. Du hast Maria vor dem Arzttermin gesehen und ihre Angaben dokumentiert. Jetzt kommt der Rheumatologe und fragt dich: \"Was haben Sie bei Frau Santos festgestellt?\"",
      fallbezug:
        "Maria hat dir im Vorgespraech erzaehlt, dass ihre Morgensteifigkeit seit 2 Wochen schlimmer geworden ist — jetzt dauert sie fast 2 Stunden. Ausserdem kann sie seit gestern den rechten Mittelfinger nicht mehr vollstaendig strecken.",
      glossarBegriffe: ["Streckdefizit"],
    },
    question: {
      fragetext:
        "Was ist die professionellste Art, dem Arzt Marias Befunde mitzuteilen?",
      branchingOptions: [
        {
          text: "\"Frau Santos geht es nicht gut, sie hat starke Schmerzen und ist ziemlich verzweifelt.\"",
          feedback:
            "Verstaendlich, aber zu unspezifisch. Der Arzt braucht konkrete Befunde, keine Zusammenfassung des Allgemeinbefindens. Pflegende muessen Beobachtungen fachlich strukturiert weitergeben — Emotionen sind wichtig, aber Fakten zuerst.",
          isCorrect: false,
        },
        {
          text: "\"Frau Santos berichtet ueber eine Zunahme der Morgensteifigkeit auf fast 2 Stunden seit 2 Wochen. Neu: Streckdefizit rechter Mittelfinger. Gaenslen-Test beidseits positiv. Die Patientin aeussert grosse Sorge wegen ihrer beruflichen Situation als Friseurin.\"",
          feedback:
            "Sehr gut! Du gibst die Befunde in fachlicher Sprache, nennst die zeitliche Entwicklung, berichtest neue Symptome und vergisst auch die psychosoziale Dimension nicht. Das ist interprofessionelle Kommunikation auf Augenhoehe.",
          isCorrect: true,
        },
        {
          text: "\"Die Laborwerte von Frau Santos zeigen CRP 28, Anti-CCP ueber 200. ACR/EULAR Score 8 Punkte. Klare RA.\"",
          feedback:
            "Die Laborinterpretation ist Aufgabe des Arztes. Pflegende berichten ihre eigenen Beobachtungen: Was hat die Patientin erzaehlt? Was hast du bei der pflegerischen Untersuchung gesehen? Laborwerte vorlesen ist nicht die pflegerische Kompetenz.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "diagnostik-12",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q10"],
    contentC1: {
      title: "Pflegerische Dokumentation: Gelenkstatus",
      body: "Die pflegerische Dokumentation des Gelenkstatus ist eine Kernaufgabe in der Rheumatologie. Sie muss systematisch, konkret und nachvollziehbar sein.\n\nWas wird dokumentiert?\n- Welche Gelenke betroffen (mit Seitenangabe)\n- Art der Veraenderung (Schwellung, Roetung, Uebererwaermung, Erguss)\n- Schmerz (NRS 0-10, wann am staerksten)\n- Funktionseinschraenkung (was kann die Patientin nicht mehr?)\n- Morgensteifigkeit (Dauer in Minuten)",
      fallbezug:
        "Du dokumentierst Marias Gelenkstatus bei der Erstaufnahme in der rheumatologischen Ambulanz.",
    },
    question: {
      fragetext:
        "Schreibe einen pflegerischen Gelenkstatus fuer Maria Santos. Nenne mindestens 4 konkrete Beobachtungen mit Seitenangabe.",
      musterantwort:
        "Gelenkstatus Maria Santos, 38 J.: Symmetrische weiche Schwellung MCP II und III beidseits. Gaenslen-Zeichen positiv beidseits (Haende). Uebererwaermung MCP II rechts im Seitenvergleich. Streckdefizit Dig. III rechts. Morgensteifigkeit >120 Min. (seit 2 Wochen verschlechtert, zuvor 60 Min.). Schmerz NRS 6/10 in Ruhe, 8/10 bei Belastung. Greifkraft beidseits reduziert — Patientin kann Schere nicht halten. Keine Roetung, keine sichtbaren Fehlstellungen.",
      bewertungskriterien: [
        "Mindestens 4 verschiedene Beobachtungen genannt",
        "Seitenangabe vorhanden (links/rechts/beidseits)",
        "Konkrete Angaben (nicht nur 'Schmerz' sondern NRS-Wert, Lokalisation)",
        "Funktionseinschraenkung beschrieben (Alltagsrelevanz)",
        "Morgensteifigkeit mit Zeitangabe dokumentiert",
      ],
      satzanfaengeB1: [
        "Frau Santos hat Schwellungen an...",
        "Die Morgensteifigkeit dauert...",
        "Sie kann nicht mehr...",
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Steps 13-14)
  // ==========================================
  {
    stepId: "diagnostik-13",
    phase: 5,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q3", "Q8"],
    contentC1: {
      title: "Diagnostische Verzoegerung — ein Systemproblem",
      body: "Maria hat 8 Monate gebraucht, um zum Rheumatologen zu kommen. Der Durchschnitt in Deutschland liegt sogar bei 21 Monaten. Die Leitlinie fordert eine Diagnose innerhalb von 12 Wochen (Window of Opportunity). Die Realitaet verfehlt dieses Ziel bei 69% der Patienten.",
      fallbezug:
        "Marias Mutter hatte \"Rheuma\" — nie diagnostiziert, nie behandelt. Heute sitzt sie im Rollstuhl. Das ist kein Einzelfall, sondern das Ergebnis einer systemischen Versorgungsluecke.",
    },
    question: {
      fragetext:
        "Was ist die HAUPTursache fuer die diagnostische Verzoegerung bei rheumatischen Erkrankungen in Deutschland?",
      optionen: [
        {
          text: "Die Patienten gehen zu spaet zum Arzt",
          isCorrect: false,
          explanation:
            "Maria ging schon im 1. Monat zum Arzt. Das Problem ist nicht der Patient, sondern das System: Hausaerzte erkennen Rheuma oft nicht, und die Wartezeit auf den Rheumatologen betraegt Monate.",
        },
        {
          text: "Zu wenige Rheumatologen und fehlende Frueherkennung in der Primaerversorgung",
          isCorrect: true,
          explanation:
            "Richtig. Deutschland hat nur ca. 700 internistische Rheumatologen fuer 1,5 Mio. Patienten. Dazu kommt: Hausaerzte und Orthopaeden erkennen entzuendliches Rheuma oft nicht frueh genug — Marias Fall ist typisch.",
        },
        {
          text: "Die Diagnostik ist zu kompliziert und dauert einfach lange",
          isCorrect: false,
          explanation:
            "Die Diagnostik selbst dauert nur Tage (Anamnese, Labor, Sono). Das Problem ist der Zugang zum Spezialisten, nicht die Diagnostik an sich.",
        },
        {
          text: "Es gibt keinen zuverlaessigen Labortest fuer Rheuma",
          isCorrect: false,
          explanation:
            "Anti-CCP hat eine Spezifitaet von 95-98% fuer RA. Das Problem ist nicht die Testverfuegbarkeit, sondern dass der richtige Test oft nicht angeordnet wird.",
        },
      ],
    },
  },
  {
    stepId: "diagnostik-14",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q8", "Q10"],
    contentC1: {
      title: "Dein Beitrag als Pflegende/r",
      body: "Pflegende sind oft die ersten, die Patienten ueber laengere Zeit sehen — auf Station, in der ambulanten Pflege, in der Reha. Sie koennen Veraenderungen frueh erkennen, die dem Arzt beim kurzen Termin entgehen.",
      fallbezug:
        "Stell dir vor, du arbeitest in einer Hausarztpraxis. Eine Patientin wie Maria kommt seit 3 Monaten wegen \"Handschmerzen\". Sie nimmt regelmaessig Ibuprofen. Der Arzt hat \"Ueberlastung\" notiert.",
    },
    question: {
      fragetext:
        "Was koenntest du als Pflegefachkraft tun, um bei dieser Patientin eine fruehere Abklaerung zu ermoeglichen? Nenne 2-3 konkrete Massnahmen.",
      musterantwort:
        "1. Gezielt nach Morgensteifigkeit fragen — Dauer >30 Minuten ist ein Alarmsignal fuer entzuendliches Rheuma. 2. Symmetrie der Beschwerden dokumentieren — beidseitige Fingergelenkschmerzen sind kein typisches Ueberlastungsmuster. 3. Den Arzt fachlich auf die Befunde hinweisen und eine Laboranordnung (Anti-CCP, CRP) oder Ueberweisung zum Rheumatologen anregen. Pflegende koennen als Anwaelte des Patienten eine fruehere Diagnostik anstossen.",
      bewertungskriterien: [
        "Mindestens 2 konkrete Massnahmen genannt",
        "Bezug zu rheumatologischen Warnsignalen (Morgensteifigkeit, Symmetrie, Dauer)",
        "Interprofessionelle Kommunikation erwaehnt (Arzt informieren/anregen)",
      ],
      satzanfaengeB1: [
        "Ich wuerde die Patientin fragen, ob...",
        "Dann wuerde ich dem Arzt sagen, dass...",
        "Wichtig ist, dass Pflegende...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 15)
  // ==========================================
  {
    stepId: "diagnostik-15",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q10"],
    contentC1: {
      title: "Praxisauftrag: Rheuma-Diagnostik im Alltag",
      body: "Du hast gelernt, wie Rheuma diagnostiziert wird — von der Anamnese ueber Labor und Bildgebung bis zur Klassifikation. Jetzt geht es um den Transfer in deinen Alltag.\n\nPraxisauftrag fuer deine naechste Praxisphase:\n\n1. Beobachte: Gibt es Patienten auf deiner Station/in deiner Einrichtung mit rheumatischen Erkrankungen? Welche Laborwerte werden bestimmt? Wird ein Gelenkstatus erhoben?\n\n2. Frage nach: Wie wird auf deiner Station die Morgensteifigkeit dokumentiert? Gibt es ein standardisiertes Formular fuer den Gelenkstatus?\n\n3. Reflektiere: Marias Geschichte ist kein Einzelfall. Achte darauf, ob Patienten ueber Gelenkbeschwerden klagen die laenger als 6 Wochen bestehen — und ob eine Entzuendung bereits ausgeschlossen wurde.\n\nMaria hat heute ihre Diagnose bekommen: Rheumatoide Arthritis, seropositiv (Anti-CCP+, RF-), hohe Krankheitsaktivitaet (DAS28 5.4). Die Therapie kann jetzt beginnen — 8 Monate spaeter als die Leitlinie es empfiehlt, aber immerhin. In den naechsten Lektionen lernst du, welche Medikamente Maria bekommt (LE 09-10) und wie du sie pflegerisch begleitest (LE 11-15).",
      fallbezug:
        "Maria sagt am Ende des Termins: \"Endlich weiss ich, was ich habe. 8 Monate hat mir keiner geglaubt. Aber jetzt kann ich kaempfen — ich weiss wenigstens wogegen.\"",
    },
    contentB1: {
      title: "Praxisauftrag: Beobachten und Dokumentieren",
      body: "Das hast du gelernt:\n- Wie Rheuma erkannt wird (Fragen, Untersuchung, Bluttest, Bilder)\n- Welche Bluttests wichtig sind (CRP, Anti-CCP, RF)\n- Was der ACR/EULAR-Score bedeutet\n\nAuftrag fuer die Praxis:\n\n1. Schau hin: Gibt es Patienten mit Rheuma auf deiner Station?\n   Welche Bluttests werden gemacht?\n\n2. Frage nach: Wie wird die Morgensteifigkeit dokumentiert?\n   Gibt es ein Formular fuer den Gelenkstatus?\n\n3. Denke nach: Wenn ein Patient seit mehr als 6 Wochen\n   Gelenkschmerzen hat — wurde schon geprueft ob es\n   eine Entzuendung ist?\n\nMaria hat jetzt ihre Diagnose: Rheumatoide Arthritis.\n8 Monate hat es gedauert.\nJetzt kann die Behandlung starten.\nIn den naechsten Lektionen lernst du:\n- Welche Medikamente Maria bekommt (Lektion 9 und 10)\n- Wie du Maria als Pflegekraft unterstuetzt (Lektion 11 bis 15)\n\nMaria sagt: \"Endlich weiss jemand, was ich habe.\n8 Monate hat mir keiner geglaubt.\nJetzt kann ich kaempfen.\"",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "ACR/EULAR-Kriterien",
    erklaerung:
      "Klassifikationskriterien fuer RA (2010): Score 0-10, ab 6 Punkten gilt RA als klassifiziert",
  },
  {
    begriff: "ANA",
    erklaerung:
      "Antinukleaere Antikoerper — Screening fuer Kollagenosen (SLE, Sjoergren), bei RA meist negativ",
  },
  {
    begriff: "Anamnese",
    erklaerung:
      "Systematische Befragung des Patienten zu Krankheitsgeschichte und Symptomen",
  },
  {
    begriff: "Anti-CCP",
    erklaerung:
      "Antikoerper gegen citrullinierte Peptide — hochspezifisch fuer RA (95-98%), kann Jahre vor Symptomen positiv sein",
  },
  {
    begriff: "BSG",
    erklaerung:
      "Blutsenkungsgeschwindigkeit — unspezifischer Entzuendungsmarker, steigt langsam (Tage)",
  },
  {
    begriff: "CRP",
    erklaerung:
      "C-reaktives Protein — Akutphase-Protein, steigt schnell bei Entzuendung (Stunden)",
  },
  {
    begriff: "DAS28",
    erklaerung:
      "Disease Activity Score: misst Krankheitsaktivitaet anhand von 28 Gelenken, BSG und Patienteneinschaetzung",
  },
  {
    begriff: "Erosion",
    erklaerung:
      "Knochenzerstoerung durch Entzuendung — im Roentgen als Defekt sichtbar, im MRT frueher erkennbar",
  },
  {
    begriff: "Gaenslen-Zeichen",
    erklaerung:
      "Kompressionstest — Querdruck auf Fingergrundgelenke (MCP II-V), Schmerz bei Synovitis",
  },
  {
    begriff: "Knochenoedem",
    erklaerung:
      "Wassereinlagerung im Knochen (im MRT sichtbar) — Vorstufe einer Erosion",
  },
  {
    begriff: "MCP-Gelenke",
    erklaerung:
      "Metakarpophalangealgelenke — Fingergrundgelenke, haeufig bei RA betroffen",
  },
  {
    begriff: "Power-Doppler",
    erklaerung:
      "Ultraschall-Technik die Durchblutung zeigt — verstaerkte Durchblutung = aktive Entzuendung",
  },
  {
    begriff: "Rheumafaktor",
    erklaerung:
      "Autoantikoerper gegen IgG — positiv bei 70-80% der RA, aber auch bei anderen Erkrankungen moeglich",
  },
  {
    begriff: "Streckdefizit",
    erklaerung:
      "Gelenk kann nicht vollstaendig gestreckt werden — Zeichen fuer Erguss, Entzuendung oder Sehnenbeteiligung",
  },
  {
    begriff: "Synovitis",
    erklaerung:
      "Entzuendung der Gelenkinnenhaut (Synovia) — Fruehzeichen bei RA, im Ultraschall sichtbar",
  },
];
