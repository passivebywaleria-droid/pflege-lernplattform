// Lektion 11: Pflegerische Assessments bei Rheuma
// CE 05 — Block D: Pflegerisches Handeln
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-11-assessments",
  ceId: "ce-05",
  title: "Pflegerische Assessments bei Rheuma",
  titleShort: "Assessments",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [2, 4],
  voraussetzungen: ["le-08-diagnostik"],
  leitfall: {
    name: "Ingrid Braun",
    alter: 67,
    beruf: "Pensionierte Gymnasiallehrerin",
    diagnose: "RA seit 8 Jahren, MTX 15 mg/Woche, mittlere Krankheitsaktivitaet",
    setting: "Rheumatologische Ambulanz, halbjaehrliche Kontrolle",
    kernproblem:
      "Diskrepanz zwischen Selbsteinschaetzung und Assessmentergebnissen — Fatigue als unerkanntes Symptom",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "assess-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q9"],
    contentC1: {
      title: "Was weisst du ueber pflegerische Assessments?",
      body: "Willkommen zur ersten Lektion in Block D — Pflegerisches Handeln! Ab jetzt geht es nicht mehr nur darum, Krankheiten zu verstehen, sondern darum, was DU als Pflegende konkret tust.\n\nIn dieser Lektion lernst du:\n- Welche Assessmentinstrumente es bei Rheuma gibt\n- Wie du Schmerz, Funktion und Fatigue systematisch erfasst\n- Wie ein Gelenkstatus erhoben und dokumentiert wird\n- Warum standardisierte Assessments mehr zeigen als Gespraeche allein\n\nAssessments sind dein wichtigstes Werkzeug — sie machen sichtbar, was Patienten oft selbst nicht wahrnehmen.",
      glossarBegriffe: ["Assessment"],
    },
    contentB1: {
      title: "Was weisst du ueber pflegerische Assessments?",
      body: "Willkommen! Das ist die erste Lektion in Block D.\nBlock D heisst: Pflegerisches Handeln.\nAb jetzt lernst du, was du als Pflegekraft konkret tust.\n\nIn dieser Lektion lernst du:\n- Welche Tests es bei Rheuma gibt\n- Wie du Schmerz misst (mit einer Skala von 0 bis 10)\n- Wie du Gelenke untersuchst und aufschreibst\n- Warum Tests mehr zeigen als nur Fragen\n\nEin Assessment ist ein Test mit festen Regeln.\nDu stellst immer die gleichen Fragen.\nSo kannst du Ergebnisse vergleichen.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema pflegerische Assessments bei Rheuma?",
    },
  },
  {
    stepId: "assess-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q9"],
    contentC1: {
      title: "Assessment — mehr als nur Fragen stellen",
      body: "",
    },
    question: {
      fragetext:
        "Was unterscheidet ein pflegerisches Assessment von einem normalen Gespraech mit dem Patienten?",
      optionen: [
        {
          text: "Ein Assessment verwendet standardisierte, validierte Instrumente und macht Ergebnisse vergleichbar",
          isCorrect: true,
          explanation:
            "Richtig! Assessments nutzen wissenschaftlich geprufte Instrumente (z.B. NRS, HAQ). Dadurch sind Ergebnisse objektiv, vergleichbar und im Verlauf auswertbar — das kann ein freies Gespraech nicht leisten.",
        },
        {
          text: "Ein Assessment dauert laenger als ein Gespraech",
          isCorrect: false,
          explanation:
            'Nicht unbedingt. Viele Assessments (z.B. NRS: "Wie stark ist Ihr Schmerz auf einer Skala von 0-10?") dauern nur Sekunden. Der Unterschied liegt in der Standardisierung, nicht in der Dauer.',
        },
        {
          text: "Ein Assessment wird nur von Aerzten durchgefuehrt",
          isCorrect: false,
          explanation:
            "Falsch. Viele Assessments gehoeren zur pflegerischen Kernkompetenz — z.B. Schmerzassessment (DNQP), Funktionserhebung, Gelenkstatus. Pflegende fuehren Assessments eigenstaendig durch.",
        },
        {
          text: "Ein Assessment ersetzt das Gespraech mit dem Patienten",
          isCorrect: false,
          explanation:
            "Nein! Ein Assessment ERGAENZT das Gespraech. Es liefert messbare Daten, die das subjektive Erleben des Patienten objektivieren. Beides zusammen ergibt das vollstaendige Bild.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "assess-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q6"],
    contentC1: {
      title: "Frau Braun kommt zur Kontrolle",
      body: 'Ingrid Braun, 67 Jahre, pensionierte Gymnasiallehrerin fuer Biologie und Chemie. Seit 8 Jahren hat sie Rheumatoide Arthritis und nimmt Methotrexat 15 mg pro Woche.\n\nHeute kommt sie zur halbjaehrlichen Kontrolle in die rheumatologische Ambulanz. Die Pflegefachkraft fragt: "Wie geht es Ihnen, Frau Braun?"\n\n"Gut, alles wie immer", antwortet Ingrid laechelnd. "Ich habe mich arrangiert. Ein bisschen steif morgens, aber das ist doch normal in meinem Alter. Mein Mann sagt zwar, ich wuerde weniger machen als frueher — aber ich bin ja auch 67, nicht mehr 40."\n\nDie Pflegefachkraft beginnt die systematische Assessment-Erhebung...\n\nIngrid hat frueher leidenschaftlich gegaertnert und war aktiv im Gartenverein. Seit zwei Jahren geht sie nicht mehr hin. "Das ist mir zu anstrengend geworden", sagt sie beilaeufig. Ihr Mann Helmut (70) ist besorgt, aber Ingrid wehrt ab: "Mach dir keine Sorgen, das ist das Alter."',
      fallbezug:
        'Ingrid begleitet dich durch diese Lektion. Ihre Aussage "Mir geht es gut" wird sich als truegerisch erweisen — die Assessments werden ein anderes Bild zeigen.',
      glossarBegriffe: ["Fatigue"],
    },
    contentB1: {
      title: "Frau Braun kommt zur Kontrolle",
      body: 'Ingrid Braun ist 67 Jahre alt.\nSie war Lehrerin fuer Biologie und Chemie.\nJetzt ist sie in Rente.\nSeit 8 Jahren hat sie Rheuma (Rheumatoide Arthritis).\nSie nimmt jede Woche Methotrexat (ein Medikament gegen Rheuma).\n\nHeute kommt sie zur Kontrolle.\nDie Pflegekraft fragt: "Wie geht es Ihnen?"\nIngrid sagt: "Gut. Alles wie immer."\nSie sagt auch: "Am Morgen bin ich etwas steif. Aber das ist normal in meinem Alter."\n\nFrueher hat Ingrid gern im Garten gearbeitet.\nSie war im Gartenverein.\nSeit 2 Jahren geht sie nicht mehr hin.\nSie sagt: "Das ist mir zu anstrengend."\nIhr Mann Helmut macht sich Sorgen.\nAber Ingrid sagt: "Das ist das Alter."',
    },
  },
  {
    stepId: "assess-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q6"],
    contentC1: {
      title: "Zwischen den Zeilen lesen",
      body: "",
      fallbezug:
        "Denke an das, was Ingrid gesagt hat — und was sie NICHT gesagt hat.",
    },
    question: {
      fragetext:
        'Ingrid sagt "Mir geht es gut." Welches Detail in ihrer Erzaehlung gibt den staerksten Hinweis darauf, dass ein systematisches Assessment noetig ist?',
      optionen: [
        {
          text: "Sie hat seit 2 Jahren ihr Hobby (Garten) aufgegeben und sich sozial zurueckgezogen",
          isCorrect: true,
          explanation:
            "Richtig! Sozialer Rueckzug und Aufgabe von Aktivitaeten sind starke Hinweise auf Funktionsverlust und/oder Fatigue. Ingrid erklaert es mit \"Alter\" — aber ein Assessment koennte zeigen, dass die RA aktiver ist als gedacht. Genau hier liegt der Wert standardisierter Instrumente.",
        },
        {
          text: "Sie nimmt seit 8 Jahren MTX",
          isCorrect: false,
          explanation:
            "Langzeit-MTX allein ist kein Warnsignal — viele Patienten nehmen es jahrelang stabil. Aber: Es sollte regelmaessig geprueft werden, ob die Therapie noch ausreicht (Treat-to-Target). Hier ist die Verhaltensaenderung der staerkere Hinweis.",
        },
        {
          text: "Ihr Mann macht sich Sorgen",
          isCorrect: false,
          explanation:
            "Die Sorge des Ehemanns ist ein wichtiges Signal — Angehoerige beobachten oft Veraenderungen, die Patienten selbst nicht wahrnehmen. Aber der Aktivitaetsverlust (Garten, Verein) ist der objektivere Hinweis auf Funktionseinschraenkung.",
        },
        {
          text: "Sie ist 67 Jahre alt",
          isCorrect: false,
          explanation:
            "Alter allein ist KEIN Grund fuer Funktionsverlust. Viele 67-Jaehrige gaertnern aktiv. Genau das ist Ingrids Denkfehler: Sie schreibt ihre Einschraenkungen dem Alter zu statt der RA. Ein Assessment kann diese Fehleinschaetzung korrigieren.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "assess-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q4", "Q8"],
    contentC1: {
      title: "Schmerz und Fatigue messen",
      body: "Schmerzassessment — Der DNQP-Expertenstandard fordert bei jedem Patienten ein systematisches Schmerzscreening:\n\nNRS (Numerische Rating-Skala): \"Wie stark ist Ihr Schmerz auf einer Skala von 0 bis 10?\" 0 = kein Schmerz, 10 = staerkster vorstellbarer Schmerz. Schnell, einfach, im Verlauf vergleichbar.\n\nVAS (Visuelle Analogskala): 10 cm Linie, Patient markiert seine Schmerzstaerke. Etwas genauer als NRS, aber umstaendlicher in der Dokumentation.\n\nWICHTIG bei Rheuma: Nicht nur \"Haben Sie Schmerzen?\" fragen — sondern GEZIELT: \"Wie stark waren Ihre Gelenkschmerzen in der letzten Woche?\" Viele Rheuma-Patienten gewoehnen sich an Schmerz und berichten ihn nicht aktiv.\n\nFatigue-Assessment — Fatigue betrifft 40-80% aller RA-Patienten und ist oft belastender als der Schmerz selbst:\n\nBRAF-NRS (Bristol Rheumatoid Arthritis Fatigue): 3 Skalen von 0-10 fuer Schwere, Auswirkung und Bewaeltigung. Speziell fuer RA entwickelt und validiert.\n\nFatigue ist KEIN \"normales Muede-Sein\". Es ist ein eigenstaendiges Symptom der Autoimmunerkrankung — ausgeloest durch Entzuendungsmediatoren (TNF-alpha, IL-6), Schmerz, Schlafprobleme und psychische Belastung.",
      glossarBegriffe: [
        "NRS (Numerische Rating-Skala)",
        "VAS (Visuelle Analogskala)",
        "BRAF (Bristol Rheumatoid Arthritis Fatigue)",
      ],
    },
    contentB1: {
      title: "Schmerz und Muedigkeit messen",
      body: "Schmerz messen:\nDu fragst den Patienten: \"Wie stark ist Ihr Schmerz?\"\nDu benutzt eine Skala von 0 bis 10.\n0 bedeutet: kein Schmerz.\n10 bedeutet: der schlimmste Schmerz.\nDas heisst NRS (Numerische Rating-Skala).\n\nWICHTIG bei Rheuma:\nFrage genau: \"Wie stark waren Ihre Gelenkschmerzen letzte Woche?\"\nViele Patienten sagen nicht von allein, dass sie Schmerzen haben.\nSie haben sich daran gewoehnt.\n\nMuedigkeit messen (Fatigue):\nViele Rheuma-Patienten sind sehr muede.\nDas heisst Fatigue (sprich: Fa-TIEG).\nFatigue ist nicht normale Muedigkeit.\nFatigue kommt von der Entzuendung im Koerper.\nSchlafen hilft nicht gegen Fatigue.\n\nEs gibt einen Test nur fuer Rheuma-Muedigkeit.\nEr heisst BRAF (Bristol Rheumatoid Arthritis Fatigue).\nDu fragst: \"Wie muede waren Sie letzte Woche? 0 bis 10.\"",
    },
  },
  {
    stepId: "assess-06",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Die richtige Frage stellen",
      body: "",
    },
    question: {
      fragetext:
        'Du fragst Ingrid nach ihren Schmerzen. Sie sagt: "Ach, das geht schon." Wie fragst du weiter, um einen verwertbaren NRS-Wert zu erhalten?',
      optionen: [
        {
          text: '"Wenn Sie an die letzte Woche denken — wie stark waren Ihre Gelenkschmerzen auf einer Skala von 0 bis 10, wobei 0 kein Schmerz und 10 der staerkste vorstellbare Schmerz ist?"',
          isCorrect: true,
          explanation:
            "Richtig! Diese Frage enthaelt alle Elemente eines korrekten NRS-Assessments: konkreter Zeitraum (letzte Woche), spezifische Lokalisation (Gelenkschmerzen), vollstaendige Skalenerklaerung (0-10 mit Ankern). So erhaeltst du einen vergleichbaren Zahlenwert.",
        },
        {
          text: '"Haben Sie oft Schmerzen?"',
          isCorrect: false,
          explanation:
            'Zu unspezifisch. "Oft" ist subjektiv und liefert keinen messbaren Wert. Ohne Zeitraum, ohne Skala, ohne Ankerpunkte — das Ergebnis ist nicht dokumentierbar und nicht vergleichbar.',
        },
        {
          text: '"Ihr Schmerz ist bestimmt nicht so schlimm, oder?"',
          isCorrect: false,
          explanation:
            "Suggestivfrage! Diese Formulierung beeinflusst die Antwort — der Patient wird eher verneinen. Ein Assessment muss NEUTRAL formuliert sein, ohne die Antwort vorwegzunehmen.",
        },
        {
          text: '"Moechten Sie ein Schmerzmittel?"',
          isCorrect: false,
          explanation:
            "Das ist eine Interventionsfrage, kein Assessment. Zuerst muss der Schmerz systematisch erfasst werden (NRS) — dann kann ueber Massnahmen entschieden werden. Assessment vor Intervention!",
        },
      ],
    },
  },
  {
    stepId: "assess-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3", "Q5", "Q7"],
    contentC1: {
      title: "Funktion und Krankheitsaktivitaet messen",
      body: "Funktionsassessment — Kann der Patient seinen Alltag bewaeltigen?\n\nHAQ (Health Assessment Questionnaire): 20 Fragen in 8 Kategorien — Anziehen, Aufstehen, Essen, Gehen, Hygiene, Greifen, Taetigkeiten, Aktivitaeten. Score 0-3: 0 = ohne Schwierigkeit, 1 = mit Schwierigkeit, 2 = mit Hilfe, 3 = unmoeglich. Ein HAQ von 1.2 bedeutet: deutliche Einschraenkungen bei alltaeglichen Taetigkeiten.\n\nFFbH (Funktionsfragebogen Hannover): Deutsches Pendant zum HAQ, 18 Fragen, Score 0-100%. Unter 70% = relevante Funktionseinschraenkung.\n\nKrankheitsaktivitaet — Wie aktiv ist die Entzuendung?\n\nDAS28 (Disease Activity Score 28): Kombiniert 4 Variablen: Anzahl geschwollener Gelenke (von 28), Anzahl druckschmerzhafter Gelenke (von 28), Entzuendungswert (BSG oder CRP), Patienten-Gesamteinschaetzung (VAS). Ergebnis: <2.6 = Remission, 2.6-3.2 = niedrig, 3.2-5.1 = mittel, >5.1 = hoch.\n\nCDAI (Clinical Disease Activity Index): Wie DAS28, aber OHNE Laborwert — kann direkt am Bett erhoben werden. Remission ≤2.8, niedrig ≤10, mittel ≤22, hoch >22.\n\nDie 28 Gelenke im DAS28: Schulter, Ellbogen, Handgelenk, MCP 1-5, PIP 1-5 und Knie — jeweils beidseits.",
      glossarBegriffe: [
        "HAQ (Health Assessment Questionnaire)",
        "FFbH (Funktionsfragebogen Hannover)",
        "DAS28 (Disease Activity Score 28)",
        "CDAI (Clinical Disease Activity Index)",
      ],
    },
    contentB1: {
      title: "Funktion und Krankheitsaktivitaet messen",
      body: "Kann der Patient seinen Alltag schaffen?\n\nHAQ (Health Assessment Questionnaire):\n20 Fragen ueber den Alltag.\nZum Beispiel: Koennen Sie sich allein anziehen?\nKoennen Sie eine Tasse halten?\nKoennen Sie Treppen steigen?\nErgebnis: 0 bis 3.\n0 = kein Problem. 3 = unmoeglich.\n\nFFbH (Funktionsfragebogen Hannover):\nAehnlich wie der HAQ, aber auf Deutsch gemacht.\n18 Fragen. Ergebnis: 0 bis 100 Prozent.\nUnter 70% = deutliche Probleme im Alltag.\n\nWie aktiv ist die Entzuendung?\n\nDAS28 (Disease Activity Score):\nMisst die Krankheitsaktivitaet.\nMan untersucht 28 Gelenke: Sind sie geschwollen? Tun sie weh?\nDazu kommt ein Blutwert (CRP) und die Einschaetzung des Patienten.\nErgebnis:\n- Unter 2,6 = Remission (Ruhe, kein Schub)\n- 2,6 bis 3,2 = niedrige Aktivitaet\n- 3,2 bis 5,1 = mittlere Aktivitaet\n- Ueber 5,1 = hohe Aktivitaet\n\nCDAI:\nWie DAS28, aber OHNE Blutwert.\nMan kann ihn direkt am Bett machen.",
    },
  },
  {
    stepId: "assess-08",
    phase: 3,
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q3", "Q4", "Q5"],
    contentC1: {
      title: "Welches Instrument misst was?",
      body: "Jedes Assessment-Instrument hat einen spezifischen Fokus. Ordne richtig zu — das hilft dir zu entscheiden, welches Instrument du in welcher Situation einsetzt.",
    },
    question: {
      fragetext: "Ordne jedes Instrument dem zu, was es primaer misst:",
      matchingPairs: [
        {
          left: "NRS (0-10)",
          right: "Schmerzintensitaet",
        },
        {
          left: "HAQ (0-3)",
          right: "Funktionseinschraenkung im Alltag",
        },
        {
          left: "DAS28",
          right: "Krankheitsaktivitaet (Gelenke + Labor + Patient)",
        },
        {
          left: "BRAF-NRS",
          right: "Fatigue bei Rheuma (Schwere, Auswirkung, Coping)",
        },
        {
          left: "FFbH (0-100%)",
          right: "Funktionskapazitaet (deutsches Instrument)",
        },
        {
          left: "CDAI",
          right: "Krankheitsaktivitaet ohne Laborwert",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "assess-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q10"],
    contentC1: {
      title: "Systematischer Gelenkstatus",
      body: "Ein Gelenkstatus wird bei jeder rheumatologischen Visite erhoben. Pflegende koennen diesen vorbereiten oder eigenstaendig durchfuehren. Dabei gilt: systematisch, bilateral vergleichend, dokumentiert.",
      glossarBegriffe: ["Gelenkstatus"],
    },
    question: {
      fragetext:
        "Bringe die Schritte einer systematischen Gelenkstatus-Erhebung in die richtige Reihenfolge:",
      sortItems: [
        "Inspektion: Gelenke beidseits vergleichend betrachten (Schwellung, Roetung, Deformitaet)",
        "Palpation: Gelenke vorsichtig tasten (Uebererwaermung, Erguss, Druckschmerz)",
        "Funktionspruefung: Aktives und passives Bewegungsausmass pruefen",
        "Seitenvergleich: Unterschiede zwischen rechts und links dokumentieren",
        "Verlaufsdokumentation: Befunde mit Vorbefund vergleichen und Veraenderungen notieren",
      ],
    },
  },
  {
    stepId: "assess-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5", "Q9"],
    contentC1: {
      title: "Die Assessmentergebnisse liegen vor",
      body: 'Die pflegerische Assessment-Erhebung bei Ingrid Braun ist abgeschlossen. Hier sind die Ergebnisse:\n\n- NRS Schmerz: 5/10 (erst bei gezieltem Nachfragen — "Na ja, wenn Sie so direkt fragen...")\n- HAQ: 1.2 (deutliche Funktionseinschraenkung — Probleme beim Anziehen, Greifen, Treppensteigen)\n- DAS28: 4.1 (mittlere Krankheitsaktivitaet — 6 geschwollene, 8 druckschmerzhafte Gelenke)\n- BRAF-NRS Schwere: 7/10 (starke Fatigue — "Ich dachte, ich bin einfach muede weil ich alt bin")\n\nIngrid ist ueberrascht: "Das kann doch nicht sein — mir geht es doch gut?"',
      fallbezug:
        "Ingrid hat 8 Jahre lang ihre Beschwerden als \"normales Altern\" eingeordnet. Die Assessments zeigen: Ihre RA ist deutlich aktiver als sie dachte.",
      glossarBegriffe: ["Remission", "Krankheitsaktivitaet"],
    },
    question: {
      fragetext:
        "Wie reagierst du als Pflegefachkraft auf Ingrids Ergebnisse?",
      branchingOptions: [
        {
          text: '"Frau Braun, die Ergebnisse zeigen, dass Ihre Rheuma-Erkrankung aktiver ist, als Sie vielleicht wahrgenommen haben. Das ist wichtig — denn es bedeutet, dass wir Ihre Therapie mit dem Arzt besprechen sollten. Darf ich Ihnen erklaeren, was die Zahlen bedeuten?"',
          feedback:
            "Sehr gut! Du kommunizierst wertschaetzend, erklaerst die Bedeutung der Ergebnisse und kuendigst das weitere Vorgehen an. Du gibst Ingrid die Moeglichkeit, Fragen zu stellen. Das entspricht dem Sandwich-Prinzip und respektiert ihre Autonomie. Der Rheumatologe sollte die Therapie reevaluieren — DAS28 4.1 ist kein Therapieziel (Ziel: <3.2 oder Remission <2.6).",
          isCorrect: true,
        },
        {
          text: '"Ihre Werte sind schlecht. Sie muessen dringend Ihre Medikamente aendern."',
          feedback:
            'Zu alarmierend und uebergriffig. "Schlecht" ist wertend und kann Angst ausloesen. Medikamentenaenderungen entscheidet der Arzt, nicht die Pflege. Zudem fehlt die Erklaerung — Ingrid versteht nicht, WAS die Zahlen bedeuten.',
          isCorrect: false,
        },
        {
          text: '"Na ja, fuer Ihr Alter sind die Werte eigentlich ganz normal."',
          feedback:
            "Falsch und gefaehrlich! Ein DAS28 von 4.1 ist NICHT normal — er zeigt mittlere Krankheitsaktivitaet, die eine Therapieanpassung erfordert. \"Fuer Ihr Alter\" verstaerkt Ingrids Fehleinschaetzung. Alter ist kein Grund, eine aktive RA unbehandelt zu lassen.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "assess-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q6", "Q9"],
    contentC1: {
      title: 'Warum reicht "Mir geht es gut" nicht?',
      body: 'Ingrid hat 8 Jahre lang bei jeder Kontrolle gesagt "Mir geht es gut." Die Assessments zeigen heute: mittlere Krankheitsaktivitaet, deutliche Funktionseinschraenkung, starke Fatigue. In dieser Zeit haette ihre Therapie angepasst werden koennen — wenn standardisierte Assessments regelmaessig durchgefuehrt worden waeren.',
      fallbezug:
        "Denke an Ingrid: promovierte Naturwissenschaftlerin, 8 Jahre RA, und trotzdem hat sie ihre Fatigue nie als Krankheitssymptom erkannt. Was sagt das ueber den Wert von Assessments?",
    },
    question: {
      fragetext:
        "Erklaere in 3-4 Saetzen: Warum reicht die Selbsteinschaetzung von Patienten allein nicht aus, und welchen Mehrwert bieten standardisierte Assessments?",
      musterantwort:
        "Patienten gewoehnen sich an chronische Beschwerden und passen ihr Verhalten an (z.B. Hobbys aufgeben), ohne den Funktionsverlust bewusst wahrzunehmen. Standardisierte Assessments machen Veraenderungen objektiv messbar und im Verlauf vergleichbar. Sie decken Symptome auf, die Patienten nicht aktiv berichten — wie Fatigue, die Ingrid fuer normales Altern hielt. Nur mit messbaren Daten kann die Therapie nach dem Treat-to-Target-Prinzip angepasst werden.",
      bewertungskriterien: [
        "Nennt Anpassung/Gewoehnung als Grund fuer unzuverlaessige Selbsteinschaetzung",
        "Erklaert Objektivitaet und Vergleichbarkeit standardisierter Instrumente",
        "Bezieht sich auf ein konkretes Beispiel (z.B. Fatigue, Funktionsverlust)",
        "Nennt Konsequenz fuer die Therapie (z.B. Treat-to-Target)",
      ],
      satzanfaengeB1: [
        "Patienten gewoehnen sich an...",
        "Ein Assessment zeigt...",
        "Bei Frau Braun war...",
        "Ohne einen Test weiss man nicht...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "assess-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q2", "Q9", "Q10"],
    contentC1: {
      title: "Assessment in der Praxis — dein Auftrag",
      body: 'Du hast gelernt, warum Assessments mehr zeigen als Gespraeche. Jetzt geht es darum, dieses Wissen in die Praxis zu uebertragen.\n\nDein Praxisauftrag fuer die naechste Praxisphase:\n\n1. Fuehre bei einem Rheuma-Patienten ein NRS-Schmerzassessment durch. Nutze die korrekte Fragestellung: "Wie stark waren Ihre Gelenkschmerzen in der letzten Woche auf einer Skala von 0 bis 10?"\n\n2. Beobachte und dokumentiere den Gelenkstatus an mindestens 2 Gelenken: Inspektion (Schwellung, Roetung), Palpation (Uebererwaermung, Druckschmerz), Funktion (Bewegungsausmass).\n\nReflexionsfragen:\n- Hat der Patient seine Schmerzen aehnlich eingeschaetzt wie dein NRS-Wert vermuten laesst?\n- Gab es eine Diskrepanz zwischen dem, was der Patient sagt, und dem, was du beobachtest?\n- Was wuerdest du beim naechsten Mal anders machen?\n\nIn der naechsten Lektion (LE 12) lernst du, wie du aus Assessment-Ergebnissen einen Pflegeplan erstellst — mit Pflegediagnosen, Zielen und Massnahmen.',
    },
    contentB1: {
      title: "Praxisauftrag",
      body: "Du hast viel gelernt ueber Assessments.\nJetzt probierst du es in der Praxis aus.\n\nAuftrag 1: Frage einen Rheuma-Patienten nach seinen Schmerzen.\nBenutze die NRS-Skala (0 bis 10).\nFrage so: \"Wie stark waren Ihre Gelenkschmerzen letzte Woche? 0 ist kein Schmerz, 10 ist der schlimmste Schmerz.\"\n\nAuftrag 2: Schau dir 2 Gelenke genau an.\n- Sind die Gelenke geschwollen?\n- Sind sie rot?\n- Sind sie warm?\n- Tun sie weh, wenn du drueckst?\n- Kann der Patient sie gut bewegen?\nSchreibe auf, was du siehst.\n\nDenke nach:\n- Hat der Patient aehnliches gesagt wie du gesehen hast?\n- Gab es Unterschiede?\n\nIn der naechsten Lektion lernst du:\nWie machst du aus den Ergebnissen einen Pflegeplan?",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Assessment",
    erklaerung:
      "Systematische Erfassung und Bewertung des Gesundheitszustands mit standardisierten Instrumenten",
  },
  {
    begriff: "NRS (Numerische Rating-Skala)",
    erklaerung:
      "Schmerzskala von 0 bis 10 — Patient nennt eine Zahl fuer seine Schmerzstaerke",
  },
  {
    begriff: "VAS (Visuelle Analogskala)",
    erklaerung:
      "Schmerzskala als 10-cm-Linie — Patient markiert einen Punkt zwischen 'kein Schmerz' und 'staerkster Schmerz'",
  },
  {
    begriff: "HAQ (Health Assessment Questionnaire)",
    erklaerung:
      "Fragebogen zur Funktionseinschraenkung im Alltag bei Rheuma, Score 0-3 (0 = keine Einschraenkung)",
  },
  {
    begriff: "FFbH (Funktionsfragebogen Hannover)",
    erklaerung:
      "Deutsches Instrument zur Messung der Funktionskapazitaet, 18 Fragen, Score 0-100%",
  },
  {
    begriff: "DAS28 (Disease Activity Score 28)",
    erklaerung:
      "Misst Krankheitsaktivitaet bei RA anhand von 28 Gelenken, Labor und Patienten-Einschaetzung",
  },
  {
    begriff: "CDAI (Clinical Disease Activity Index)",
    erklaerung:
      "Krankheitsaktivitaets-Score ohne Laborwert — kann direkt am Bett erhoben werden",
  },
  {
    begriff: "BRAF (Bristol Rheumatoid Arthritis Fatigue)",
    erklaerung:
      "Fatigue-Assessment speziell fuer RA — misst Schwere, Auswirkung und Bewaeltigung (je 0-10)",
  },
  {
    begriff: "Fatigue",
    erklaerung:
      "Krankhafte Erschoepfung bei Rheuma, die ueber normale Muedigkeit hinausgeht und durch Schlaf nicht besser wird",
  },
  {
    begriff: "Gelenkstatus",
    erklaerung:
      "Systematische Untersuchung der Gelenke: Inspektion, Palpation, Funktionspruefung — bilateral vergleichend",
  },
  {
    begriff: "Remission",
    erklaerung:
      "Zustand minimaler oder fehlender Krankheitsaktivitaet — Therapieziel bei RA (DAS28 <2.6)",
  },
  {
    begriff: "Krankheitsaktivitaet",
    erklaerung:
      "Mass fuer die aktuelle Entzuendungsstaerke bei Rheuma — wird mit DAS28, CDAI oder SDAI gemessen",
  },
];
