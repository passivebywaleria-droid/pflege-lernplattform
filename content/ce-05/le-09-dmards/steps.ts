// Lektion 09: Medikamentoese Therapie — Basistherapie (DMARDs)
// CE 05 — Block C: Diagnostik & Therapie
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-09-dmards",
  ceId: "ce-05",
  title: "Medikamentoese Therapie — Basistherapie (DMARDs)",
  titleShort: "DMARDs",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-IV.1"],
  bloomStufen: [1, 4],
  voraussetzungen: ["le-08-diagnostik"],
  leitfall: {
    name: "Elena Petrov",
    alter: 48,
    beruf: "Altenpflegerin",
    diagnose: "Rheumatoide Arthritis (Anti-CCP+, RF+, DAS28 4,8)",
    setting: "Rheumatologische Praxis, Erstverordnung MTX",
    kernproblem:
      "Ablehnung von MTX aus Angst vor Chemotherapie, Bedrohung der Berufsfaehigkeit",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "dmards-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Willkommen — Was weisst du ueber Rheuma-Medikamente?",
      body: "In der letzten Lektion hast du gelernt, wie rheumatische Erkrankungen diagnostiziert werden. Jetzt geht es um den naechsten Schritt: die Therapie.\n\nWenn die Diagnose steht, beginnt die medikamentoese Behandlung — und hier spielt die Pflege eine zentrale Rolle. Du beobachtest Nebenwirkungen, unterstuetzt die Patienten bei der Einnahme und foerderst die Therapietreue.\n\nIn dieser Lektion lernst du:\n- Was 'Treat-to-Target' bedeutet\n- Welche Basismedikamente (DMARDs) es gibt\n- Warum Methotrexat das wichtigste DMARD ist\n- Was Pflegende beim Monitoring beachten muessen",
      glossarBegriffe: ["DMARD"],
    },
    contentB1: {
      title: "Willkommen — Was weisst du ueber Rheuma-Medikamente?",
      body: "In der letzten Lektion hast du gelernt:\nWie findet man heraus, ob jemand Rheuma hat?\nJetzt kommt der naechste Schritt: die Behandlung.\n\nEs gibt Medikamente gegen Rheuma.\nDie Pflege hat dabei eine wichtige Aufgabe.\nDu beobachtest, ob die Medikamente wirken.\nDu beobachtest auch Nebenwirkungen.\nDu hilfst dem Patienten, die Medikamente richtig zu nehmen.\n\nIn dieser Lektion lernst du:\n- Was 'Treat-to-Target' bedeutet\n- Welche Basismedikamente es gibt\n- Warum Methotrexat das wichtigste Medikament ist\n- Was du als Pflegekraft beachten musst",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Rheuma-Medikamente?",
    },
  },
  {
    stepId: "dmards-02",
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
        "Was ist das primaere Ziel der medikamentoesen Basistherapie bei rheumatoider Arthritis?",
      optionen: [
        {
          text: "Schmerzen sofort lindern",
          isCorrect: false,
          explanation:
            "Schmerzlinderung ist ein Teilziel, aber das koennen auch NSAR oder Kortison. Basismedikamente haben ein anderes, wichtigeres Ziel.",
        },
        {
          text: "Das Fortschreiten der Gelenkzerstoerung aufhalten",
          isCorrect: true,
          explanation:
            "Richtig! DMARDs sind 'Disease-Modifying' — sie veraendern den Krankheitsverlauf. Ohne Basistherapie zerstoert die Entzuendung die Gelenke unwiderruflich. Das ist der entscheidende Unterschied zu reinen Schmerzmitteln.",
        },
        {
          text: "Das Immunsystem komplett ausschalten",
          isCorrect: false,
          explanation:
            "Nein! DMARDs modulieren das Immunsystem — sie daempfen die uebermaessige Reaktion, schalten es aber nicht aus. Eine komplette Immunsuppression waere lebensbedrohlich.",
        },
        {
          text: "Entzuendungswerte im Blut normalisieren",
          isCorrect: false,
          explanation:
            "Normalisierung der Entzuendungswerte (CRP, BSG) ist ein messbares Teilziel, aber nicht das primaere Ziel. Es geht vor allem darum, die Gelenkzerstoerung aufzuhalten.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "dmards-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5", "Q7"],
    contentC1: {
      title: "Elena Petrov — 'Ich nehme kein Krebsmedikament!'",
      body: "Elena Petrov, 48 Jahre, arbeitet seit 20 Jahren als Altenpflegerin in einer Seniorenresidenz. Vor drei Monaten wurde bei ihr rheumatoide Arthritis diagnostiziert: Anti-CCP positiv, Rheumafaktor positiv, DAS28 = 4,8.\n\nNSAR und kurzfristig Prednisolon haben die Schmerzen gebessert, aber die Gelenkschwellungen an beiden Haenden bleiben. Die Rheumatologin erklaert: 'Frau Petrov, wir muessen mit einer Basistherapie beginnen. Ich verschreibe Ihnen Methotrexat, 15 mg einmal pro Woche.'\n\nElena wird blass: 'Methotrexat? Das kenne ich! Das bekommen die Krebspatienten auf meiner Station. Das ist Chemotherapie — davon fallen die Haare aus und man erbricht sich staendig. Das nehme ich auf keinen Fall!'\n\nDie Rheumatologin versucht zu erklaeren, aber Elena blockt ab. Zuhause erzaehlt sie einer Kollegin davon. Die sagt: 'Das ist Gift. Meine Schwiegermutter hat davon Leberschaeden bekommen.' Elena googelt 'Methotrexat Nebenwirkungen' — und findet Berichte, die ihre Angst bestaetigen.\n\nAm naechsten Tag ruft sie in der Praxis an: 'Gibt es nicht etwas Pflanzliches?'",
      fallbezug:
        "Elena begleitet dich durch diese gesamte Lektion. Ihre Angst vor MTX ist der haeufigste Grund, warum Patienten die Basistherapie ablehnen — und genau hier kann Pflege den Unterschied machen.",
      glossarBegriffe: ["Methotrexat"],
    },
    contentB1: {
      title: "Elena geht zur Aerztin",
      body: "Elena Petrov ist 48 Jahre alt.\nSie arbeitet als Altenpflegerin.\nSie arbeitet seit 20 Jahren in einem Pflegeheim.\n\nVor 3 Monaten hat der Arzt gesagt: Elena hat Rheuma.\nSie hat Rheumatoide Arthritis.\nDie Gelenke in ihren Haenden sind dick und tun weh.\n\nSchmerzmittel helfen ein bisschen.\nAber die Schwellung bleibt.\nDie Aerztin sagt: 'Wir brauchen ein staerkeres Medikament.'\n'Ich verschreibe Ihnen Methotrexat.'\n'Sie nehmen es einmal pro Woche.'\n\nElena hat Angst.\nSie kennt Methotrexat von der Arbeit.\nKrebspatienten bekommen dieses Medikament.\nElena denkt: Das ist Chemotherapie!\nSie sagt: 'Das nehme ich nicht!'\n\nZuhause fragt sie eine Kollegin.\nDie Kollegin sagt: 'Das ist Gift.'\nElena sucht im Internet nach 'Methotrexat'.\nSie findet viele schlimme Berichte.\n\nAm naechsten Tag ruft sie die Aerztin an.\nSie fragt: 'Gibt es nicht etwas Pflanzliches?'",
    },
  },
  {
    stepId: "dmards-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q7", "Q8"],
    contentC1: {
      title: "Kommunikation bei Therapieangst",
      body: "",
      fallbezug:
        "Elena weigert sich, MTX einzunehmen. Als Pflegekraft in der rheumatologischen Praxis sprichst du mit ihr.",
    },
    question: {
      fragetext:
        "Elena sagt: 'Methotrexat ist Chemotherapie — das nehme ich nicht!' Welche Reaktion ist fachlich korrekt und kommunikativ angemessen?",
      optionen: [
        {
          text: "'Ihre Sorge ist berechtigt — MTX ist ein Zytostatikum und hat erhebliche Nebenwirkungen.'",
          isCorrect: false,
          explanation:
            "Diese Antwort bestaetigt Elenas Angst und ist fachlich unpraezise. MTX ist in der Rheuma-Dosis kein Zytostatikum — die Dosis ist 50- bis 100-mal niedriger als in der Onkologie. Die Wirkung ist immunmodulierend, nicht zelltoetend.",
        },
        {
          text: "'Ich verstehe Ihre Sorge. MTX wird bei Rheuma in viel niedrigerer Dosis eingesetzt als bei Krebs — es wirkt hier als Immunmodulator, nicht als Chemotherapie. Darf ich Ihnen den Unterschied erklaeren?'",
          isCorrect: true,
          explanation:
            "Richtig! Diese Antwort nimmt Elenas Angst ernst, korrigiert das Missverstaendnis sachlich und bietet weitere Aufklaerung an. Genau so funktioniert gute Patientenedukation: Empathie + Fakten + Einladung zum Gespraech.",
        },
        {
          text: "'Machen Sie sich keine Sorgen, das Medikament ist ganz harmlos.'",
          isCorrect: false,
          explanation:
            "Diese Antwort verharmlost. MTX hat reale Nebenwirkungen, die ueberwacht werden muessen. Patienten merken, wenn man sie nicht ernst nimmt — das zerstoert Vertrauen und gefaehrdet die Adherence.",
        },
        {
          text: "'Das entscheidet die Aerztin. Sie sollten das Rezept einfach einloesen.'",
          isCorrect: false,
          explanation:
            "Diese Antwort ignoriert Elenas Autonomie. Shared Decision Making bedeutet: Patienten muessen verstehen und zustimmen. Eine Therapie ohne Ueberzeugung fuehrt zu heimlichem Absetzen.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-7)
  // ==========================================
  {
    stepId: "dmards-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3"],
    contentC1: {
      title: "Das Therapieprinzip: Treat-to-Target",
      body: "Die moderne RA-Therapie folgt dem 'Treat-to-Target'-Prinzip (T2T): Es wird ein konkretes Therapieziel definiert — und die Behandlung wird so lange angepasst, bis dieses Ziel erreicht ist.\n\nDas Ziel: Remission (keine Krankheitsaktivitaet) oder zumindest niedrige Krankheitsaktivitaet (DAS28 < 3,2). Kontrolle alle 1-3 Monate. Keine Besserung nach 3 Monaten → Therapie anpassen. Ziel nicht erreicht nach 6 Monaten → eskalieren.\n\nDie Medikamente — csDMARDs (konventionelle synthetische DMARDs):\n\n1. Methotrexat (MTX) — First-Line bei RA. Gold-Standard. 7,5-25 mg 1x/Woche.\n2. Leflunomid — Wichtigste Alternative bei MTX-Unvertraeglichkeit. 20 mg/Tag.\n3. Sulfasalazin — Bei leichteren Verlaeufen. 2-3 g/Tag. Auch in Schwangerschaft moeglich.\n4. Hydroxychloroquin (HCQ) — Malariamittel. Kombinationspartner. Kardioprotektiv. 200-400 mg/Tag.\n\nWenn csDMARDs nicht reichen: Eskalation auf Biologika (bDMARDs) oder JAK-Inhibitoren (tsDMARDs) — das lernst du in Lektion 10.\n\nBridging: Glukokortikoide (Prednisolon) ueberbruecken die Zeit bis das DMARD wirkt (4-12 Wochen). Maximal 3-6 Monate, dann ausschleichen.",
      glossarBegriffe: ["Treat-to-Target", "csDMARD", "Bridging"],
    },
    contentB1: {
      title: "Das Behandlungsziel: Treat-to-Target",
      body: "Die Behandlung von Rheuma hat ein klares Ziel.\nDas Ziel heisst: Remission.\nRemission bedeutet: Die Krankheit ist ruhig.\nDie Gelenke sind nicht mehr entzuendet.\n\nDas Prinzip heisst 'Treat-to-Target':\n- Der Arzt setzt ein Ziel.\n- Er prueft alle 1-3 Monate: Ist das Ziel erreicht?\n- Wenn nicht: Das Medikament wird geaendert.\n\nEs gibt 4 Basismedikamente (csDMARDs):\n\n1. Methotrexat (MTX) — Das wichtigste Medikament. 1x pro Woche.\n2. Leflunomid — Alternative, wenn MTX nicht geht. Jeden Tag.\n3. Sulfasalazin — Bei leichterem Rheuma. Auch in der Schwangerschaft moeglich.\n4. Hydroxychloroquin — Wird oft zusammen mit anderen gegeben.\n\nDiese Medikamente brauchen 4-12 Wochen, bis sie wirken.\nIn dieser Zeit bekommt der Patient Kortison.\nKortison hilft schnell gegen Schmerzen.\nAber Kortison ist nur fuer kurze Zeit (3-6 Monate).",
    },
  },
  {
    stepId: "dmards-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q4", "Q5", "Q10"],
    contentC1: {
      title: "Methotrexat — das wichtigste Rheuma-Medikament",
      body: "Wirkung: MTX hemmt als Folsaeure-Antagonist bestimmte Enzyme des Immunsystems. In der niedrigen Rheuma-Dosis wirkt es immunmodulierend — es daempft die uebermaessige Immunreaktion, ohne das Immunsystem auszuschalten.\n\nDosis-Unterschied (ZENTRAL fuer die Patientenedukation):\n- Rheuma: 7,5-25 mg pro WOCHE (typisch: 15 mg)\n- Onkologie: 1.000-20.000 mg pro Gabe\n- Faktor: 50- bis 100-mal hoeher in der Krebstherapie!\n\nEinnahme: STRIKT einmal pro Woche — immer am selben Wochentag. CAVE: Taegliche Einnahme = lebensbedrohliche Ueberdosis! (Haeufigster Medikationsfehler bei MTX)\n\nFolsaeure: 5-10 mg, 24 Stunden NACH dem MTX-Tag. Reduziert Nebenwirkungen (Uebelkeit, Leberwerte, Stomatitis) ohne die Wirkung von MTX zu beeintraechtigen. NICHT am selben Tag wie MTX!\n\nWirkungseintritt: 4-8 Wochen — Geduld noetig. Deshalb Bridging mit Prednisolon.\n\nNebenwirkungen:\n- Haeufig: Uebelkeit (besonders am MTX-Tag), Appetitlosigkeit, Muedigkeit\n- Gelegentlich: Stomatitis (Mundschleimhautentzuendung), Leberwerteerhoehung, Haarverduennung\n- Selten aber ernst: Pneumonitis (Husten + Atemnot → SOFORT absetzen + Arzt!), Panzytopenie\n\nKontraindikationen: Schwangerschaft (teratogen!), Kinderwunsch (3 Monate vorher absetzen), schwere Leber-/Nierenschaeden, Alkoholabusus, aktive Infektionen.",
      glossarBegriffe: ["Folsaeure", "Pneumonitis"],
    },
    contentB1: {
      title: "Methotrexat — das wichtigste Rheuma-Medikament",
      body: "Was macht MTX?\nMTX beruhigt das Immunsystem.\nBei Rheuma ist das Immunsystem zu aktiv.\nEs greift die eigenen Gelenke an.\nMTX daempft diese Reaktion.\n\nGANZ WICHTIG — die Dosis:\n- Bei Rheuma: 15 mg pro WOCHE (das ist wenig)\n- Bei Krebs: ueber 1.000 mg (das ist 100x mehr!)\n- Rheuma-Dosis und Krebs-Dosis sind NICHT das Gleiche!\n\nWie nimmt man MTX?\n- Einmal pro Woche — IMMER am selben Tag\n- NIEMALS jeden Tag nehmen! Das ist gefaehrlich!\n\nFolsaeure (Vitamin B9):\n- Am Tag NACH dem MTX-Tag nehmen\n- MTX am Mittwoch → Folsaeure am Donnerstag\n- Folsaeure schuetzt vor Nebenwirkungen\n\nWann wirkt MTX? Erst nach 4-8 Wochen.\n\nMoegliche Nebenwirkungen:\n- Uebelkeit am MTX-Tag (haeufig)\n- Muedigkeit (haeufig)\n- Wunde Stellen im Mund (manchmal)\n- Husten und Atemnot (selten, aber sofort zum Arzt!)\n\nWer darf MTX NICHT nehmen?\n- Schwangere Frauen\n- Menschen mit Leberproblemen\n- Menschen die viel Alkohol trinken",
    },
  },
  {
    stepId: "dmards-07",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q4", "Q5"],
    contentC1: {
      title: "Wissen anwenden — MTX in der Praxis",
      body: "",
      fallbezug:
        "Elena hat sich ueberzeugen lassen und nimmt MTX 15 mg oral, jeden Mittwoch. Folsaeure 5 mg am Donnerstag.",
    },
    question: {
      fragetext:
        "Elena hat vor 3 Wochen mit MTX begonnen. Welche Aussage ist korrekt?",
      optionen: [
        {
          text: "Wenn Elena nach 3 Wochen keine Besserung spuert, sollte MTX abgesetzt werden.",
          isCorrect: false,
          explanation:
            "Zu frueh! MTX braucht 4-8 Wochen bis zur vollen Wirkung. Vorher abzusetzen wuerde das Window of Opportunity gefaehrden. Genau deswegen wird mit Prednisolon ueberbrueckt.",
        },
        {
          text: "Elena darf ihre Folsaeure auch am Mittwoch (MTX-Tag) nehmen, Hauptsache sie nimmt sie.",
          isCorrect: false,
          explanation:
            "Falsch! Folsaeure am selben Tag wie MTX kann die MTX-Wirkung abschwaechen. Die DGRh empfiehlt: Folsaeure fruehestens 24 Stunden nach MTX — also bei Elena am Donnerstag.",
        },
        {
          text: "Die volle Wirkung zeigt sich nach 4-8 Wochen — vorher braucht Elena Geduld und die Ueberbrueckung mit Prednisolon.",
          isCorrect: true,
          explanation:
            "Richtig! Der verzoegerte Wirkungseintritt von MTX ist einer der haeufigsten Gruende fuer vorzeitiges Absetzen. Patienten brauchen diese Information VOR Therapiebeginn — sonst werden sie ungeduldig und brechen ab.",
        },
        {
          text: "Wenn Elena einen Tag vergessen hat, sollte sie am naechsten Tag die doppelte Dosis nehmen.",
          isCorrect: false,
          explanation:
            "Auf keinen Fall! Bei vergessener Dosis: nachholen wenn nur 1-2 Tage spaeter, sonst auslassen und naechste Woche normal weitermachen. Nie die doppelte Dosis — das erhoeht die Toxizitaet erheblich.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 8-10)
  // ==========================================
  {
    stepId: "dmards-08",
    phase: 4,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q6", "Q9"],
    contentC1: {
      title: "Die vier csDMARDs im Vergleich",
      body: "Neben MTX gibt es drei weitere csDMARDs, die bei RA eingesetzt werden. Jedes hat ein eigenes Profil — fuer die Pflege ist es wichtig zu wissen, wann welches Medikament zum Einsatz kommt.",
      glossarBegriffe: [
        "Leflunomid",
        "Sulfasalazin",
        "Hydroxychloroquin",
      ],
    },
    question: {
      fragetext: "Ordne jeden Wirkstoff seinem wichtigsten Merkmal zu:",
      matchingPairs: [
        {
          left: "Methotrexat (MTX)",
          right: "First-Line bei RA, Folsaeure-Supplementation noetig",
        },
        {
          left: "Leflunomid",
          right: "Wichtigste Alternative bei MTX-Unvertraeglichkeit",
        },
        {
          left: "Sulfasalazin",
          right:
            "Einsatz bei leichteren Verlaeufen, auch in Schwangerschaft moeglich",
        },
        {
          left: "Hydroxychloroquin",
          right: "Malariamittel als Kombinationspartner, kardioprotektiv",
        },
        {
          left: "Prednisolon",
          right:
            "Kein DMARD! Nur Bridging bis das DMARD wirkt (max. 3-6 Monate)",
        },
      ],
    },
  },
  {
    stepId: "dmards-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q5"],
    contentC1: {
      title: "Labor-Monitoring bei MTX-Therapie",
      body: "Regelmaessiges Monitoring ist bei MTX Pflicht — Leber, Niere und Blutbild muessen ueberwacht werden. Die DGRh hat klare Empfehlungen, wann welche Kontrollen stattfinden.",
      fallbezug:
        "Elena startet MTX. Welche Monitoring-Schritte muessen in welcher Reihenfolge durchgefuehrt werden?",
    },
    question: {
      fragetext:
        "Bringe die Monitoring-Schritte bei MTX-Therapie in die richtige zeitliche Reihenfolge:",
      sortItems: [
        "Ausgangslabor vor Therapiebeginn (Blutbild, Transaminasen, Kreatinin, Hepatitis-Serologie)",
        "Erste Laborkontrolle nach 2 Wochen",
        "Kontrolle alle 4 Wochen in den ersten 3 Monaten",
        "Danach alle 8-12 Wochen bei stabilem Verlauf",
        "Bei Auffaelligkeiten: sofortige Ruecksprache mit Rheumatologe",
      ],
    },
  },
  {
    stepId: "dmards-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q5", "Q7"],
    contentC1: {
      title: "Nebenwirkungsmanagement — Anruf von Elena",
      body: "Es ist Donnerstagmorgen. Elena ruft in der rheumatologischen Praxis an. Du nimmst den Anruf entgegen.\n\n'Ich vertrage das Methotrexat nicht. Jeden Mittwochabend wird mir uebel, und am Donnerstag fuehle ich mich total schlapp. Soll ich das Medikament einfach weglassen? Meine Kollegin sagt, es gibt auch pflanzliche Alternativen.'",
      fallbezug:
        "Elena hat seit 4 Wochen MTX 15 mg (oral, mittwochs). Die Uebelkeit ist mild bis maessig. Erbrechen liegt nicht vor. Die Leberwerte waren bei der letzten Kontrolle im Normbereich.",
    },
    question: {
      fragetext: "Wie reagierst du?",
      branchingOptions: [
        {
          text: "Setzen Sie das MTX sofort ab — wenn Ihnen uebel wird, vertragen Sie es nicht.",
          feedback:
            "Falsch. Milde Uebelkeit am MTX-Tag ist die haeufigste Nebenwirkung und meist managebar. Eigenmaechtiges Absetzen ohne aerztliche Ruecksprache gefaehrdet das Therapieziel. Die Gelenkzerstoerung schreitet ohne Basistherapie weiter voran.",
          isCorrect: false,
        },
        {
          text: "Uebelkeit am MTX-Tag ist haeufig und laesst sich oft verbessern. Versuchen Sie, die Tabletten abends vor dem Schlafen einzunehmen. Ich bespreche mit der Aerztin, ob eine Umstellung auf subkutane Injektion sinnvoll ist.",
          feedback:
            "Richtig! Du nimmst die Beschwerde ernst, gibst einen praktischen Tipp (abendliche Einnahme), und leitest die Entscheidung ueber weitere Massnahmen an die Aerztin weiter. Subkutane MTX-Gabe hat weniger GI-Nebenwirkungen als oral. Pflanzliche Alternativen mit vergleichbarer Evidenz gibt es bei RA nicht.",
          isCorrect: true,
        },
        {
          text: "Das ist normal, da muessen Sie durch. MTX hat nun mal Nebenwirkungen.",
          feedback:
            "Falsch. Diese Antwort bagatellisiert Elenas Beschwerden. Auch wenn Uebelkeit haeufig ist — Patienten brauchen Loesungen, nicht Durchhalteparolen. Wer sich nicht ernst genommen fuehlt, setzt das Medikament heimlich ab.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "dmards-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q7", "Q8"],
    contentC1: {
      title: "In eigenen Worten erklaeren",
      body: "",
      fallbezug:
        "Elena fragt dich als Pflegekraft: 'Warum soll ich ein Krebsmedikament nehmen, wenn ich kein Krebs habe? Das macht doch keinen Sinn!'",
      glossarBegriffe: ["Adherence"],
    },
    question: {
      fragetext:
        "Erklaere Elena in eigenen Worten, warum MTX bei Rheuma eingesetzt wird und warum es NICHT dasselbe ist wie eine Chemotherapie. Formuliere so, dass Elena es als medizinische Laiin versteht — auch wenn sie als Altenpflegerin arbeitet.",
      musterantwort:
        "Frau Petrov, ich verstehe Ihre Sorge. Es stimmt, dass Methotrexat auch in der Krebstherapie eingesetzt wird. Aber der entscheidende Unterschied ist die Dosis: Bei Krebs werden ueber 1.000 mg gegeben — bei Rheuma nur 15 mg. Das ist etwa 100-mal weniger. In dieser niedrigen Dosis toetet MTX keine Zellen, sondern daempft Ihr ueberaktives Immunsystem — wie ein Dimmer bei einer Lampe. Ohne diese Behandlung greift Ihr Immunsystem weiter Ihre Gelenke an, und der Schaden ist nicht mehr rueckgaengig zu machen. Die Nebenwirkungen werden durch Folsaeure und regelmaessige Blutkontrollen ueberwacht. Die meisten Patienten vertragen MTX gut — und koennen damit jahrelang beschwerdefrei arbeiten.",
      bewertungskriterien: [
        "Dosis-Unterschied zwischen Rheuma und Onkologie genannt (Faktor 50-100)",
        "Unterschiedliche Wirkweise erklaert (immunmodulierend vs. zelltoetend)",
        "Konsequenz ohne Therapie erklaert (Gelenkzerstoerung)",
        "Schutzfaktoren erwaehnt (Folsaeure, Monitoring)",
        "Patientengerechte Sprache (keine Fachbegriffe ohne Erklaerung)",
      ],
      satzanfaengeB1: [
        "Die Dosis bei Rheuma ist viel kleiner als bei Krebs, weil...",
        "Ohne MTX passiert Folgendes mit Ihren Gelenken: ...",
        "Folsaeure schuetzt Sie, weil...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "dmards-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q2", "Q8"],
    contentC1: {
      title: "Von der Leitlinie in die Praxis",
      body: "Die S3-Leitlinie der AWMF und die EULAR-Empfehlungen sind eindeutig: MTX ist First-Line bei RA. Trotzdem erhalten nur etwa 60% der RA-Patienten in Deutschland eine leitliniengerechte MTX-Therapie vor einer Eskalation auf Biologika. Die haeufigsten Gruende: Patientenablehnung, Fehlinformation und mangelnde Aufklaerung.\n\nPflege kann hier den Unterschied machen — durch kompetente Patientenedukation, Nebenwirkungsmanagement und Foerderung der Therapietreue.\n\nZusammenfassung — Was du aus dieser Lektion mitnimmst:\n- DMARDs veraendern den Krankheitsverlauf (nicht nur Symptomlinderung)\n- MTX ist First-Line: 7,5-25 mg/Woche + Folsaeure 24h spaeter\n- Treat-to-Target: Kontrolle alle 1-3 Monate, Ziel = Remission\n- Monitoring: Blutbild, Leber, Niere — Frequenz abnehmend bei stabilem Verlauf\n- Patientenedukation ist pflegerische Kernaufgabe bei der DMARD-Therapie\n\nPraxisauftrag:\n1. Wenn du in der naechsten Praxisphase einen Patienten mit MTX siehst: Frage, ob er seine Folsaeure nimmt und wann. Dokumentiere die Antwort.\n2. Ueberlege: Welche Informationen braucht ein Patient MINIMAL, um MTX sicher einzunehmen? Schreibe dir drei Kernbotschaften auf.",
      fallbezug:
        "Elena nimmt inzwischen MTX subkutan — die Uebelkeit ist fast weg. Nach 8 Wochen zeigt das Labor: CRP normalisiert, DAS28 gesunken auf 2,8 (niedrige Aktivitaet). Sie arbeitet weiterhin als Altenpflegerin. In Lektion 10 lernst du, was passiert, wenn auch csDMARDs nicht ausreichen — dann kommen Biologika ins Spiel.",
    },
    contentB1: {
      title: "Was du jetzt weisst — und was du in der Praxis tust",
      body: "Die Regeln fuer die Behandlung stehen in der Leitlinie.\nLeitlinien sind Empfehlungen von Experten.\nDie wichtigste Leitlinie kommt von der AWMF und der EULAR.\n\nBeide sagen: MTX ist das erste Medikament bei Rheuma.\nAber nur 60% der Patienten bekommen es wirklich.\nViele Patienten haben Angst (wie Elena).\n\nDu als Pflegekraft kannst helfen:\n- Du erklaerst den Unterschied zwischen Rheuma-Dosis und Krebs-Dosis.\n- Du beobachtest Nebenwirkungen.\n- Du fragst: 'Nehmen Sie Ihre Folsaeure?'\n\nDas nimmst du mit:\n- DMARDs stoppen die Gelenkzerstoerung\n- MTX ist das erste Medikament: 15 mg pro Woche\n- Folsaeure am Tag nach MTX\n- Blutkontrollen sind Pflicht\n- Patienten aufklaeren ist deine Aufgabe\n\nFuer die Praxis:\n1. Frage einen MTX-Patienten nach seiner Folsaeure.\n2. Schreibe 3 wichtige Informationen fuer MTX-Patienten auf.\n\nElena nimmt jetzt MTX als Spritze.\nDie Uebelkeit ist fast weg.\nNach 8 Wochen geht es ihr viel besser.\nSie arbeitet weiter als Altenpflegerin.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "DMARD",
    erklaerung:
      "Disease-Modifying Antirheumatic Drug — Medikament das den Krankheitsverlauf bei Rheuma veraendert (nicht nur Symptome lindert)",
  },
  {
    begriff: "csDMARD",
    erklaerung:
      "Conventional Synthetic DMARD — chemisch hergestelltes Basismedikament (MTX, Leflunomid, Sulfasalazin, Hydroxychloroquin)",
  },
  {
    begriff: "Methotrexat (MTX)",
    erklaerung:
      "Wichtigstes Basismedikament bei RA — Folsaeure-Antagonist, in niedriger Dosis immunmodulierend (7,5-25 mg/Woche)",
  },
  {
    begriff: "Folsaeure",
    erklaerung:
      "Vitamin B9 — wird 24h nach MTX eingenommen um Nebenwirkungen wie Uebelkeit und Leberwerteerhoehung zu reduzieren",
  },
  {
    begriff: "Treat-to-Target",
    erklaerung:
      "Therapieprinzip — ein konkretes Ziel definieren (Remission) und die Therapie anpassen bis es erreicht ist",
  },
  {
    begriff: "Leflunomid",
    erklaerung:
      "csDMARD, hemmt die Pyrimidinsynthese — wichtigste Alternative zu MTX bei Unvertraeglichkeit (20 mg/Tag)",
  },
  {
    begriff: "Sulfasalazin",
    erklaerung:
      "csDMARD, entzuendungshemmend — bei leichteren RA-Verlaeufen und in der Schwangerschaft einsetzbar",
  },
  {
    begriff: "Hydroxychloroquin",
    erklaerung:
      "Urspruenglich Malariamittel, heute als csDMARD-Kombinationspartner bei RA eingesetzt, kardioprotektive Wirkung",
  },
  {
    begriff: "Basistherapie",
    erklaerung:
      "Langfristige Medikamententherapie mit DMARDs, die den Krankheitsverlauf veraendert (im Gegensatz zu symptomatischer Therapie mit NSAR)",
  },
  {
    begriff: "Adherence (Therapietreue)",
    erklaerung:
      "Wie zuverlaessig ein Patient seine Medikamente einnimmt — bei MTX besonders wichtig fuer den Therapieerfolg",
  },
  {
    begriff: "Bridging",
    erklaerung:
      "Ueberbrueckungstherapie mit Glukokortikoiden (Prednisolon) bis das DMARD seine volle Wirkung entfaltet (4-12 Wochen)",
  },
  {
    begriff: "Pneumonitis",
    erklaerung:
      "Entzuendung des Lungengewebes — seltene aber ernste MTX-Nebenwirkung, bei Husten und Atemnot MTX sofort absetzen und Arzt kontaktieren",
  },
];
