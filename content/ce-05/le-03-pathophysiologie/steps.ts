// Lektion 03: Pathophysiologie rheumatischer Erkrankungen
// CE 05 — Block A: Grundlagen
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-03-pathophysiologie",
  ceId: "ce-05",
  title: "Pathophysiologie rheumatischer Erkrankungen",
  titleShort: "Pathophysiologie",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 35 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [2, 4],
  voraussetzungen: ["le-02-anatomie"],
  leitfall: {
    name: "Dimitri Nowak",
    alter: 28,
    beruf: "Sportlehrer",
    diagnose: "Rheumatoide Arthritis (RA), RF+ und Anti-CCP+",
    setting: "Rheumatologische Ambulanz, Nachbesprechung nach Diagnose",
    kernproblem:
      "Versteht nicht warum sein Immunsystem seine Gelenke angreift und zoegert mit MTX-Therapie",
  },
  glossarCount: 11,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "patho-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q5"],
    contentC1: {
      title: "Koenntest du es erklaeren?",
      body: "In der letzten Lektion hast du gelernt, welche Strukturen der Bewegungsapparat hat — Knochen, Knorpel, Gelenke, Synovialfluessigkeit. Jetzt geht es um die Frage: Was passiert, wenn diese Strukturen angegriffen werden?\n\nBei entzuendlich-rheumatischen Erkrankungen wie der Rheumatoiden Arthritis greift das Immunsystem koerpereigenes Gewebe an. Aber warum? Und wie genau laeuft diese Zerstoerung ab?\n\nIn dieser Lektion lernst du:\n- Wie eine Autoimmunreaktion ablaeuft\n- Welche Botenstoffe die Entzuendung antreiben\n- Was ein Pannus ist und wie er Gelenke zerstoert\n- Warum Gicht und Fibromyalgie ganz andere Mechanismen haben\n- Warum fruehe Therapie so entscheidend ist",
      glossarBegriffe: ["Immunsystem"],
    },
    contentB1: {
      title: "Koenntest du es erklaeren?",
      body: "In der letzten Lektion hast du den Bewegungsapparat kennengelernt.\nDu hast ueber Knochen, Knorpel und Gelenke gelernt.\n\nJetzt kommt eine wichtige Frage:\nWas passiert, wenn das Immunsystem (die Abwehr des Koerpers) die Gelenke angreift?\n\nIn dieser Lektion lernst du:\n- Was eine Autoimmunreaktion (Angriff auf den eigenen Koerper) ist\n- Welche Botenstoffe die Entzuendung antreiben\n- Was ein Pannus (Entzuendungsgewebe im Gelenk) ist\n- Warum Gicht und Fibromyalgie ganz anders funktionieren\n- Warum eine fruehe Behandlung so wichtig ist",
    },
    question: {
      fragetext:
        "Koenntest du einem Patienten erklaeren, warum sein Immunsystem seine eigenen Gelenke angreift?",
    },
  },
  {
    stepId: "patho-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5"],
    contentC1: {
      title: "Was passiert bei einer Autoimmunerkrankung?",
      body: "",
    },
    question: {
      fragetext: "Was passiert bei einer Autoimmunerkrankung?",
      optionen: [
        {
          text: "Ein Virus befaellt die Gelenke und verursacht eine Infektion",
          isCorrect: false,
          explanation:
            "Falsch. Bei einer Infektion waere ein Erreger von aussen die Ursache. Bei Autoimmunitaet kommt der 'Angriff' von innen — vom eigenen Immunsystem.",
        },
        {
          text: "Das Immunsystem erkennt koerpereigenes Gewebe faelschlicherweise als 'fremd' und greift es an",
          isCorrect: true,
          explanation:
            "Richtig! Bei Autoimmunerkrankungen wie RA verliert das Immunsystem die Faehigkeit, zwischen 'eigen' und 'fremd' zu unterscheiden. Es greift koerpereigenes Gewebe an — bei RA die Synovialmembran der Gelenke.",
        },
        {
          text: "Die Knochen werden durch jahrelange Belastung abgenutzt — wie bei einer Maschine",
          isCorrect: false,
          explanation:
            "Das waere Arthrose (degenerativ). Bei Autoimmunitaet ist nicht Verschleiss das Problem, sondern eine Fehlsteuerung des Immunsystems. Ganz anderer Mechanismus!",
        },
        {
          text: "Bakterien siedeln sich dauerhaft in der Gelenkfluessigkeit an",
          isCorrect: false,
          explanation:
            "Das waere eine septische Arthritis (bakterielle Gelenkinfektion) — ein Notfall, aber keine Autoimmunerkrankung. Bei RA sind KEINE Erreger im Gelenk.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "patho-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q6"],
    contentC1: {
      title: '"Warum greift mein Koerper sich selbst an?"',
      body: "Dimitri Nowak, 28 Jahre, arbeitet als Sportlehrer an einem Gymnasium. Leichtathletik ist seine Leidenschaft — er trainiert drei Mal pro Woche und faehrt mit dem Rad zur Schule.\n\nVor vier Monaten begannen beide Haende zu schmerzen. Symmetrisch, vor allem die Fingergrundgelenke. Morgens waren die Finger ueber eine Stunde steif. Sein Hausarzt ueberwies ihn zum Rheumatologen. Die Diagnose: Rheumatoide Arthritis. Rheumafaktor und Anti-CCP-Antikoerper positiv.\n\nJetzt sitzt er in der rheumatologischen Ambulanz zur Nachbesprechung. Der Rheumatologe hat Methotrexat verschrieben. Dimitri ist verunsichert:\n\n'Ich bin 28, ich bin Sportler, ich ernaehre mich gesund. Warum greift mein Immunsystem meine Gelenke an? Und warum soll ich ein Medikament nehmen, das mein Immunsystem unterdrueckt — ist das nicht gefaehrlich?'\n\nUebrigens: Dimitris Mutter (55) hat Fibromyalgie. Sein Grossvater hatte Gicht. Drei Familienmitglieder, drei verschiedene 'Rheuma'-Erkrankungen — mit voellig unterschiedlichen Ursachen.",
      fallbezug:
        "Dimitri begleitet dich durch die ganze Lektion. Seine Fragen sind der rote Faden — am Ende wirst du sie beantworten koennen.",
      glossarBegriffe: [
        "Anti-CCP-Antikoerper",
        "Rheumafaktor",
        "Methotrexat",
      ],
    },
    contentB1: {
      title: '"Warum greift mein Koerper sich selbst an?"',
      body: "Dimitri Nowak ist 28 Jahre alt.\nEr arbeitet als Sportlehrer an einer Schule.\nSport ist sein Leben.\nEr trainiert drei Mal pro Woche.\n\nVor vier Monaten begannen seine Haende zu schmerzen.\nBeide Haende, die gleichen Gelenke.\nMorgens waren seine Finger ueber eine Stunde steif.\n\nSein Arzt schickte ihn zum Rheumatologen (Facharzt fuer Rheuma).\nDer Rheumatologe stellte die Diagnose: Rheumatoide Arthritis (RA).\nDas ist eine Autoimmunerkrankung.\nDas bedeutet: Sein Immunsystem greift seine Gelenke an.\n\nDer Arzt verschrieb ihm Methotrexat (ein Medikament gegen die Entzuendung).\nDimitri versteht nicht, warum er es nehmen soll.\nEr fragt: 'Ich bin 28 und sportlich. Warum greift mein Koerper sich selbst an?'\n\nDimitris Mutter hat Fibromyalgie (Schmerzen am ganzen Koerper).\nSein Grossvater hatte Gicht (Kristalle im Gelenk).\nDrei Familienmitglieder, drei verschiedene Krankheiten.",
    },
  },
  {
    stepId: "patho-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q5"],
    contentC1: {
      title: "Kann Sport Autoimmunitaet heilen?",
      body: "",
      fallbezug:
        "Dimitri denkt als Sportlehrer koerperlich — 'Wenn ich fitter werde, wird mein Immunsystem doch auch besser?'",
    },
    question: {
      fragetext:
        "Dimitri fragt: 'Warum kann ich die Entzuendung nicht einfach mit Sport und gesunder Ernaehrung bekaempfen?' Was ist die fachlich korrekte Antwort?",
      optionen: [
        {
          text: "Wenn du mehr trainierst, wird dein Immunsystem staerker und die Entzuendung geht weg",
          isCorrect: false,
          explanation:
            "Falsch gedacht! Bei Autoimmunitaet ist das Immunsystem nicht 'zu schwach' — es ist FEHLGESTEUERT. Ein 'staerkeres' Immunsystem wuerde den Angriff sogar verstaerken.",
        },
        {
          text: "Die Entzuendung kommt von innen — dein Immunsystem verursacht sie, nicht aeussere Faktoren. Sport ist gut fuer dich, kann aber die Autoimmunreaktion nicht stoppen.",
          isCorrect: true,
          explanation:
            "Genau! Die Ursache ist eine Fehlsteuerung des Immunsystems, keine aeussere Belastung. Sport verbessert die Funktion und Lebensqualitaet, kann aber den Autoimmunprozess nicht aufhalten. Dafuer braucht es immunmodulierende Medikamente wie MTX.",
        },
        {
          text: "Ernaehrung ist der Schluessel — mit einer speziellen Diaet wird Rheuma geheilt",
          isCorrect: false,
          explanation:
            "Ernaehrung kann Entzuendung guenstig beeinflussen (z.B. mediterrane Kost), aber RA HEILEN kann sie nicht. Die Autoimmunreaktion erfordert medikamentoese Therapie.",
        },
        {
          text: "Die Entzuendung bei Rheuma ist harmlos und geht von allein wieder weg",
          isCorrect: false,
          explanation:
            "Gefaehrlich falsch! Unbehandelte RA fuehrt zu irreversibler Gelenkzerstoerung durch Pannus. Die Entzuendung hoert NICHT von allein auf — sie schreitet fort.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "patho-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5", "Q10"],
    contentC1: {
      title: "Die Autoimmunreaktion bei RA",
      body: "Normalerweise schuetzt das Immunsystem den Koerper vor Bakterien, Viren und Tumorzellen. Bei RA geht diese Schutzfunktion schief:\n\nT-Lymphozyten (T-Zellen) sind normalerweise dafuer da, infizierte Zellen zu erkennen und zu zerstoeren. Bei RA erkennen fehlgesteuerte T-Zellen koerpereigenes Gewebe — vor allem die Synovialmembran (Gelenkinnenhaut) — faelschlicherweise als 'fremd'.\n\nB-Lymphozyten (B-Zellen) werden von den T-Zellen aktiviert und produzieren Antikoerper. Bei RA entstehen Autoantikörper wie der Rheumafaktor (RF) und Anti-CCP-Antikoerper. Diese Antikoerper binden an Strukturen in der Gelenkinnenhaut und verstaerken die Entzuendung.\n\nDie Folge: Die Synovialmembran entzuendet sich (Synovitis). Die Entzuendung lockt weitere Immunzellen an — ein Teufelskreis beginnt, der sich ohne Therapie immer weiter verstaerkt.\n\nWarum die Immuntoleranz verloren geht, ist bis heute nicht vollstaendig geklaert. Bekannt ist: Genetische Veranlagung (HLA-DR4) + Umweltfaktoren (Rauchen, Infektionen) erhoehen das Risiko.",
      glossarBegriffe: [
        "Autoimmunreaktion",
        "T-Lymphozyten",
        "B-Lymphozyten",
        "Synovialmembran",
      ],
    },
    contentB1: {
      title: "Die Autoimmunreaktion bei RA",
      body: "Das Immunsystem schuetzt normalerweise den Koerper.\nEs kaempft gegen Bakterien und Viren.\nBei RA macht das Immunsystem einen Fehler.\n\nEs gibt zwei wichtige Zelltypen:\n\nT-Zellen erkennen normalerweise kranke Zellen.\nBei RA erkennen sie die Gelenkinnenhaut als 'fremd'.\nAber die Gelenkinnenhaut ist nicht fremd — sie gehoert zum Koerper.\n\nB-Zellen stellen Antikoerper (Abwehrstoffe) her.\nBei RA stellen sie falsche Antikoerper her.\nDiese heissen Rheumafaktor und Anti-CCP.\nDie falschen Antikoerper greifen die Gelenke an.\n\nWas passiert dann?\nDie Gelenkinnenhaut entzuendet sich.\nMehr Immunzellen kommen zum Gelenk.\nDie Entzuendung wird immer staerker.\nEin Teufelskreis beginnt.\n\nWarum passiert das?\nDas ist nicht ganz geklaert.\nWir wissen: Gene spielen eine Rolle.\nAuch Rauchen erhoeht das Risiko.",
    },
  },
  {
    stepId: "patho-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q4", "Q10"],
    contentC1: {
      title: "Wie die Entzuendung das Gelenk zerstoert",
      body: "Wenn T-Zellen und B-Zellen aktiviert sind, setzen sie Botenstoffe frei — sogenannte Zytokine. Die drei wichtigsten bei RA:\n\nTNF-alpha (Tumornekrosefaktor alpha): Der 'Brandstifter'. Aktiviert weitere Immunzellen, verstaerkt die Entzuendung und foerdert die Zerstoerung von Knorpel und Knochen. Deshalb gibt es TNF-alpha-Blocker als Medikamente.\n\nIL-6 (Interleukin-6): Verstaerkt die systemische Entzuendung — deshalb sind CRP und BSG im Blut erhoeht. Foerdert ausserdem die Antikoerperproduktion.\n\nIL-1 (Interleukin-1): Foerdert den Knorpelabbau und die Knochenresorption direkt.\n\nWas passiert im Gelenk? Die entzuendete Synovialmembran beginnt zu wuchern. Es entsteht ein aggressives Gewebe — der Pannus. Der Pannus waechst wie ein Tumor in das Gelenk hinein:\n- Er ueberzieht den Knorpel und zerstoert ihn durch Enzyme (Metalloproteinasen)\n- Er greift den darunterliegenden Knochen an (Erosionen)\n- Die Gelenkzerstoerung ist IRREVERSIBEL — zerstoerter Knorpel waechst nicht nach\n\nDeshalb ist FRUEHE Therapie so wichtig: Ist der Pannus einmal da und hat Knorpel zerstoert, kann man das nicht mehr rueckgaengig machen.",
      glossarBegriffe: ["TNF-alpha", "Interleukin-6", "Pannus"],
    },
    contentB1: {
      title: "Wie die Entzuendung das Gelenk zerstoert",
      body: "Die T-Zellen und B-Zellen setzen Botenstoffe frei.\nDiese Botenstoffe heissen Zytokine.\nDrei Zytokine sind besonders wichtig:\n\nTNF-alpha ist wie ein Feueralarm.\nEr ruft immer mehr Immunzellen zum Gelenk.\nDie Entzuendung wird staerker und staerker.\n\nIL-6 (Interleukin-6) verstaerkt die Entzuendung im ganzen Koerper.\nDeshalb ist der CRP-Wert im Blut erhoeht.\n\nIL-1 (Interleukin-1) zerstoert den Knorpel direkt.\n\nWas passiert im Gelenk?\nDie entzuendete Gelenkinnenhaut waechst und waechst.\nEs entsteht ein neues Gewebe.\nDieses Gewebe heisst Pannus.\n\nDer Pannus ist gefaehrlich:\n- Er waechst ueber den Knorpel\n- Er frisst den Knorpel auf\n- Er greift auch den Knochen an\n- Der Schaden ist fuer immer — Knorpel waechst nicht nach\n\nDeshalb ist eine fruehe Behandlung so wichtig.\nWenn der Pannus den Knorpel zerstoert hat, kann man das nicht mehr aendern.",
    },
  },
  {
    stepId: "patho-07",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q5"],
    contentC1: {
      title: "Vom Immunfehler zur Gelenkzerstoerung",
      body: "Die RA-Entzuendung laeuft in einer bestimmten Reihenfolge ab — vom ersten Immunfehler bis zur irreversiblen Zerstoerung. Kannst du die Schritte richtig ordnen?",
    },
    question: {
      fragetext:
        "Bringe die Schritte der RA-Entzuendungskaskade in die richtige Reihenfolge:",
      sortItems: [
        "Autoreaktive T-Zellen erkennen Gelenkgewebe als 'fremd'",
        "B-Zellen werden aktiviert und produzieren Autoantikoerper (RF, Anti-CCP)",
        "Zytokine (TNF-alpha, IL-6, IL-1) werden massenhaft freigesetzt",
        "Synovialmembran entzuendet sich und beginnt zu wuchern",
        "Pannus dringt in Knorpel und Knochen ein",
        "Irreversible Gelenkzerstoerung (Erosionen)",
      ],
    },
  },
  {
    stepId: "patho-08",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q7", "Q8", "Q9"],
    contentC1: {
      title: "Autoimmun, Kristalle oder Sensitivierung?",
      body: "Nicht jede 'Rheuma'-Erkrankung hat denselben Mechanismus. Dimitris Familie zeigt das perfekt: Er hat RA (Autoimmun), sein Grossvater hatte Gicht (Kristalle), seine Mutter hat Fibromyalgie (zentrale Sensitivierung). Drei voellig verschiedene Pathomechanismen.\n\nBei Gicht lagern sich Harnsaeurekristalle (Mononatriumurat) in Gelenken ab. Die Kristalle aktivieren das NLRP3-Inflammasom — einen Alarmkomplex in Immunzellen — und loesen eine heftige akute Entzuendung aus. Ursache: Hyperurikaemie (Harnsaeure > 6,8 mg/dl).\n\nBei Fibromyalgie gibt es KEINE Gelenkentzuendung. Die Schmerzverarbeitung im Gehirn ist veraendert — 'zentrale Sensitivierung'. Schmerzsignale werden verstaerkt, obwohl keine Schaedigung vorliegt.\n\nBei Arthrose nutzt sich der Knorpel mechanisch ab — kein Immunsystem beteiligt, sondern Verschleiss.",
      fallbezug:
        "Dimitri versteht jetzt: Obwohl seine ganze Familie 'Rheuma' hat, sind die Ursachen komplett verschieden — und damit auch die Therapien.",
      glossarBegriffe: [
        "NLRP3-Inflammasom",
        "Hyperurikaemie",
        "Zentrale Sensitivierung",
      ],
    },
    question: {
      fragetext:
        "Ordne den Pathomechanismus der richtigen Erkrankung zu:",
      matchingPairs: [
        {
          left: "Autoimmunreaktion → Synovitis → Pannusbildung",
          right: "Rheumatoide Arthritis (RA)",
        },
        {
          left: "Harnsaeurekristalle → NLRP3-Inflammasom → akute Entzuendung",
          right: "Gicht",
        },
        {
          left: "Zentrale Sensitivierung → verstaerkte Schmerzverarbeitung",
          right: "Fibromyalgie",
        },
        {
          left: "Knorpelverschleiss → Gelenkspaltversschmaelerung → Osteophyten",
          right: "Arthrose",
        },
        {
          left: "HLA-B27-assoziiert → Entzuendung an Wirbelsaeule und Sehnenansaetzen",
          right: "Spondyloarthritis",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "patho-09",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q6"],
    contentC1: {
      title: "Dimitri zoegert mit der Therapie",
      body: "Vier Wochen nach der Diagnose. Dimitri hat das MTX-Rezept, aber noch nicht eingeloest. Er sagt: 'Ich fuehle mich eigentlich ganz okay. Die Schmerzen sind nicht so schlimm. Kann ich nicht erstmal abwarten und schauen, ob es von allein besser wird?'",
      fallbezug:
        "Diese Situation begegnet Pflegenden regelmaessig — Patienten die sich 'noch fit genug' fuehlen und die Notwendigkeit der Therapie nicht sehen. Dein Wissen ueber die Pathophysiologie hilft dir, ihnen zu erklaeren WARUM fruehe Therapie entscheidend ist.",
      glossarBegriffe: ["Window of Opportunity"],
    },
    question: {
      fragetext:
        "Wie reagierst du auf Dimitris Wunsch abzuwarten?",
      branchingOptions: [
        {
          text: "Ja, das koennen wir machen. Wir kontrollieren in 6 Monaten.",
          feedback:
            "Gefaehrlich! Die S3-Leitlinie empfiehlt Therapiebeginn innerhalb von 12 Wochen nach Symptombeginn. In diesem Zeitfenster — dem 'Window of Opportunity' — ist die Chance auf Remission am groessten. Danach beginnt der Pannus mit irreversibler Gelenkzerstoerung. 6 Monate Abwarten kann bedeuten: bleibende Schaeden an Knorpel und Knochen.",
          isCorrect: false,
        },
        {
          text: "Ich verstehe deine Bedenken. Aber es gibt ein Zeitfenster von etwa 12 Wochen, in dem die Therapie am besten wirkt. Der Pannus in deinen Gelenken arbeitet im Hintergrund — auch wenn du es nicht spuerst.",
          feedback:
            "Perfekt! Du nutzt dein Wissen ueber die Pathophysiologie, um Dimitri sachlich und empathisch zu informieren. Die S3-Leitlinie bestaetigt: Fruehe DMARD-Therapie innerhalb des Window of Opportunity verbessert das Langzeit-Outcome signifikant. Patienten die frueher beginnen, haben bessere Funktionswerte und weniger Erosionen.",
          isCorrect: true,
        },
        {
          text: "Sport reicht als Therapie — du bist ja Sportlehrer, beweg dich einfach mehr.",
          feedback:
            "Falsch und gefaehrlich! Bewegung ist ein wichtiger Teil der Therapie (verbessert Funktion, reduziert Schmerz), aber sie kann die Autoimmunreaktion NICHT stoppen. Ohne immunmodulierende Therapie schreitet der Pannus fort und zerstoert die Gelenke.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "patho-10",
    phase: 4,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q5", "Q7", "Q9"],
    contentC1: {
      title: "Drei Familienmitglieder, drei Mechanismen",
      body: "",
      fallbezug:
        "Dimitri (RA), sein Grossvater (Gicht), seine Mutter (Fibromyalgie) — drei 'Rheuma'-Erkrankungen in einer Familie. Aber die Pathomechanismen koennten unterschiedlicher nicht sein.",
    },
    question: {
      fragetext:
        "Dimitris Grossvater hatte Gicht, seine Mutter hat Fibromyalgie, er selbst hat RA. Welche Aussage ist korrekt?",
      optionen: [
        {
          text: "Alle drei Erkrankungen sind Autoimmunerkrankungen mit demselben Grundmechanismus",
          isCorrect: false,
          explanation:
            "Falsch! Nur RA ist eine Autoimmunerkrankung. Gicht wird durch Harnsaeurekristalle verursacht, Fibromyalgie durch veraenderte Schmerzverarbeitung im Gehirn. Drei voellig verschiedene Mechanismen.",
        },
        {
          text: "RA und Gicht sind entzuendlich, Fibromyalgie ist NICHT entzuendlich — aber alle drei haben denselben Ausloser",
          isCorrect: false,
          explanation:
            "Richtig erkannt, dass RA und Gicht entzuendlich sind und Fibromyalgie nicht. Aber: Die Ausloser sind VERSCHIEDEN — RA = Autoimmun, Gicht = Kristalle, Fibromyalgie = zentrale Sensitivierung.",
        },
        {
          text: "RA = Autoimmunreaktion, Gicht = Harnsaeurekristalle, Fibromyalgie = zentrale Sensitivierung — drei voellig verschiedene Pathomechanismen",
          isCorrect: true,
          explanation:
            "Exakt! Obwohl umgangssprachlich alles 'Rheuma' heisst, sind die Mechanismen grundlegend verschieden. RA: Immunsystem greift Gelenke an. Gicht: Kristalle loesen akute Entzuendung aus. Fibromyalgie: Schmerzverarbeitung im Gehirn ist veraendert — KEINE Gelenkentzuendung. Deshalb braucht jede Erkrankung eine andere Therapie.",
        },
        {
          text: "Fibromyalgie ist eine Vorstufe von RA — wenn sie nicht behandelt wird, entwickelt sich daraus RA",
          isCorrect: false,
          explanation:
            "Falsch! Fibromyalgie und RA sind zwei unabhaengige Erkrankungen mit verschiedenen Mechanismen. Fibromyalgie 'entwickelt sich' nicht zu RA. Allerdings koennen beide gleichzeitig auftreten (Komorbiditaet).",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "patho-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q2", "Q4"],
    contentC1: {
      title: "Patientenerklaerung formulieren",
      body: "Jetzt bist du dran. Dimitri fragt dich direkt — und du musst die Pathophysiologie so erklaeren, dass er es versteht und sein Verhalten aendert.",
      fallbezug:
        "Dies ist eine typische Pflegesituation: Ein Patient versteht nicht, warum er ein Medikament nehmen soll, das sein Immunsystem 'unterdrueckt'. Dein Verstaendnis der Pathophysiologie ist der Schluessel zur ueberzeugenden Patientenedukation.",
    },
    contentB1: {
      title: "Erklaere es dem Patienten",
      body: "Dimitri fragt dich direkt.\nEr versteht nicht, warum er Medikamente nehmen soll.\nDu musst es ihm in einfachen Worten erklaeren.\n\nDas ist eine wichtige Aufgabe in der Pflege:\nPatienten verstehen oft nicht, warum sie Medikamente brauchen.\nWenn du die Ursache der Krankheit erklaeren kannst, hilft das dem Patienten.",
    },
    question: {
      fragetext:
        "Dimitri sagt: 'Erklaer mir bitte in einfachen Worten, warum ich diese Medikamente nehmen muss, wenn ich mich doch eigentlich fit fuehle.' — Formuliere eine Antwort, die die Pathophysiologie nutzt, um ihn zu ueberzeugen.",
      musterantwort:
        "Bei deiner Erkrankung hat dein Immunsystem einen Fehler: Es erkennt deine Gelenkinnenhaut als Feind und greift sie an. Dabei werden Botenstoffe freigesetzt — wie TNF-alpha — die eine Kettenreaktion ausloesen. In deinen Gelenken waechst dadurch ein aggressives Gewebe, der Pannus. Dieser Pannus frisst sich langsam in den Knorpel und den Knochen. Das passiert im Hintergrund — auch wenn du dich fit fuehlst. Und was einmal zerstoert ist, waechst nicht nach. Die Medikamente bremsen diesen Prozess. Je frueher du startest, desto besser — denn in den ersten Wochen nach Beginn der Erkrankung reagiert die Therapie am besten. Dieses Zeitfenster nennen wir Window of Opportunity.",
      bewertungskriterien: [
        "Autoimmun-Mechanismus erklaert (Immunsystem greift eigenes Gewebe an)",
        "Entzuendungskaskade oder Pannus erwaehnt (WARUM Medikamente noetig)",
        "Irreversibilitaet der Gelenkzerstoerung angesprochen (Knorpel waechst nicht nach)",
        "Window of Opportunity oder Fruehtherapie begruendet",
      ],
      satzanfaengeB1: [
        "Dein Immunsystem macht einen Fehler: Es...",
        "In deinen Gelenken waechst ein Gewebe, das...",
        "Die Medikamente sind wichtig, weil...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "patho-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q2", "Q5"],
    contentC1: {
      title: "Warum Pflegende Pathophysiologie verstehen muessen",
      body: "Du hast in dieser Lektion gelernt, wie Autoimmunitaet, Kristallablagerung und zentrale Sensitivierung — drei grundlegend verschiedene Mechanismen — zu 'Rheuma' fuehren. Aber warum ist das fuer Pflegende relevant?\n\n1. Beobachtung: Wer die Entzuendungskaskade kennt, versteht warum geschwollene, uebererwaermte Gelenke Zeichen von Krankheitsaktivitaet sind — und nicht nur 'normale' Beschwerden. Du dokumentierst praeziser und erkennst Verschlechterungen frueher.\n\n2. Patientenedukation: Viele Patienten verstehen nicht, warum sie 'ihr Immunsystem unterdruecken' sollen. Wenn du erklaeren kannst, was ein Pannus ist und warum er irreversibel zerstoert, ueberzeugst du besser als mit 'Nehmen Sie einfach die Tabletten.'\n\n3. Therapieverstaendnis: In den naechsten Lektionen lernst du DMARDs, Biologika und TNF-alpha-Blocker kennen. Erst jetzt, wo du weisst WO diese Medikamente in der Entzuendungskaskade angreifen, verstehst du WARUM sie wirken.\n\nAusblick: In Lektion 4 lernst du Dimitris Erkrankung — die Rheumatoide Arthritis — im Detail. In Lektion 6 geht es um Gicht (der Grossvater). Lektion 7 behandelt Kollagenosen. Ueberall wirst du auf die Pathomechanismen aus dieser Lektion zurueckgreifen.",
      fallbezug:
        "Dimitri versteht jetzt, warum er MTX nimmt. Das ist Patientenedukation auf Basis von Pathophysiologie — genau das, was kompetente Pflege ausmacht.",
    },
    contentB1: {
      title: "Warum ist das wichtig fuer die Pflege?",
      body: "Du hast heute drei verschiedene Krankheitsmechanismen gelernt:\n1. Autoimmun (RA) — das Immunsystem greift die Gelenke an\n2. Kristalle (Gicht) — Harnsaeurekristalle machen Entzuendung\n3. Sensitivierung (Fibromyalgie) — das Gehirn verstaerkt Schmerzen\n\nWarum ist das wichtig fuer dich als Pflegekraft?\n\nBeobachtung: Du erkennst Entzuendungszeichen besser.\nGeschwollene, warme Gelenke zeigen: Die Krankheit ist aktiv.\nDu kannst das genau beschreiben und dokumentieren.\n\nErklaerung: Viele Patienten verstehen nicht, warum sie Medikamente nehmen sollen.\nWenn du erklaeren kannst, was ein Pannus ist, ueberzeugst du besser.\n\nWissen: In den naechsten Lektionen lernst du Medikamente kennen.\nJetzt verstehst du, WARUM diese Medikamente wirken.\n\nIn Lektion 4 lernst du alles ueber Dimitris Krankheit — die RA.\nIn Lektion 6 geht es um Gicht.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Autoimmunreaktion",
    erklaerung:
      "Das Immunsystem greift koerpereigenes Gewebe an — Verlust der Selbsttoleranz",
  },
  {
    begriff: "T-Lymphozyten",
    erklaerung:
      "Immunzellen, die infizierte oder veraenderte Koerperzellen erkennen — bei RA fehlgesteuert gegen Gelenkgewebe",
  },
  {
    begriff: "B-Lymphozyten",
    erklaerung:
      "Immunzellen, die Antikoerper produzieren — bei RA entstehen Autoantikörper wie RF und Anti-CCP",
  },
  {
    begriff: "Synovialmembran",
    erklaerung:
      "Gelenkinnenhaut — produziert Gelenkfluessigkeit, wird bei RA zum Ziel des Immunsystems",
  },
  {
    begriff: "TNF-alpha",
    erklaerung:
      "Tumornekrosefaktor alpha — Schluesselbotenstoff der Entzuendung, Angriffspunkt fuer Biologika",
  },
  {
    begriff: "Interleukin-6 (IL-6)",
    erklaerung:
      "Entzuendungsbotenstoff — erhoeht CRP im Blut, Angriffspunkt fuer Tocilizumab",
  },
  {
    begriff: "Pannus",
    erklaerung:
      "Wucherndes Entzuendungsgewebe in der Gelenkinnenhaut — zerstoert irreversibel Knorpel und Knochen",
  },
  {
    begriff: "NLRP3-Inflammasom",
    erklaerung:
      "Alarmkomplex in Immunzellen — wird durch Harnsaeurekristalle aktiviert und loest akute Entzuendung aus (Gicht)",
  },
  {
    begriff: "Hyperurikaemie",
    erklaerung:
      "Erhoehte Harnsaeurekonzentration im Blut (> 6,8 mg/dl) — Voraussetzung fuer Gichtanfall",
  },
  {
    begriff: "Zentrale Sensitivierung",
    erklaerung:
      "Veraenderte Schmerzverarbeitung im Gehirn — Schmerzen ohne nachweisbare Gewebeschaedigung (Fibromyalgie)",
  },
  {
    begriff: "Window of Opportunity",
    erklaerung:
      "Therapiefenster in den ersten 12 Wochen nach Symptombeginn — beste Chance auf Remission bei RA",
  },
];
