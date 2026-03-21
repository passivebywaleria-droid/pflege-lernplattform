// Lektion 07: Kollagenosen und Vaskulitiden
// CE 05 — Block B: Krankheitsbilder
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-07-kollagenosen",
  ceId: "ce-05",
  title: "Kollagenosen und Vaskulitiden",
  titleShort: "Kollagenosen",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 15, b1: 25 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [1, 4],
  voraussetzungen: ["le-03-pathophysiologie"],
  leitfall: {
    name: "Amara Diallo",
    alter: 26,
    beruf: "Grundschullehrerin",
    diagnose: "V.a. Systemischer Lupus erythematodes (SLE)",
    setting: "Rheumatologische Ambulanz, Ueberweisung vom Hautarzt",
    kernproblem:
      "Chronische Fatigue, Gelenkschmerzen, Schmetterlingserythem, ANA positiv — lange als Stress abgetan",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "kollagenosen-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q9"],
    contentC1: {
      title: "Was weisst du ueber Kollagenosen und Vaskulitiden?",
      body: "In den letzten Lektionen hast du die grossen Rheumagruppen kennengelernt: Rheumatoide Arthritis, Spondyloarthritiden, Gicht. Jetzt geht es um eine besondere Gruppe: die Kollagenosen und Vaskulitiden.\n\nKollagenosen sind systemische Autoimmunerkrankungen, die das Bindegewebe im ganzen Koerper angreifen koennen — nicht nur Gelenke, sondern auch Haut, Nieren, Lunge, Herz und Nervensystem. Vaskulitiden sind Entzuendungen der Blutgefaesse.\n\nIn dieser Lektion lernst du:\n- Was SLE, Sjoergren-Syndrom und Sklerodermie sind\n- Welche Autoantikoeperper diagnostisch wegweisend sind\n- Warum die Riesenzellarteriitis ein ophthalmologischer Notfall ist\n- Was 'unsichtbare Krankheit' fuer Betroffene bedeutet",
      glossarBegriffe: ["Kollagenose", "Vaskulitis"],
    },
    contentB1: {
      title: "Was weisst du ueber Kollagenosen und Vaskulitiden?",
      body: "Du kennst schon einige Rheuma-Krankheiten.\nJetzt lernst du eine neue Gruppe:\nKollagenosen und Vaskulitiden.\n\nKollagenosen greifen das Bindegewebe an.\nSie koennen viele Organe krank machen:\nHaut, Nieren, Lunge, Herz.\n\nVaskulitiden sind Entzuendungen der Blutgefaesse (Adern).\n\nIn dieser Lektion lernst du:\n- Was SLE, Sjoergren und Sklerodermie sind\n- Welche Bluttests wichtig sind\n- Wann ein Notfall vorliegt\n- Warum manche Krankheiten 'unsichtbar' sind",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Kollagenosen und Vaskulitiden?",
    },
  },
  {
    stepId: "kollagenosen-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q10"],
    contentC1: {
      title: "Kollagenosen — haeufiger als gedacht",
      body: "",
    },
    question: {
      fragetext:
        "Welche dieser Aussagen ueber den systemischen Lupus erythematodes (SLE) ist richtig?",
      optionen: [
        {
          text: "SLE betrifft Maenner und Frauen gleich haeufig",
          isCorrect: false,
          explanation:
            "Falsch. SLE betrifft zu etwa 90% Frauen. Das Verhaeltnis weiblich:maennlich liegt bei ca. 9:1. Oestrogene spielen eine Rolle in der Pathogenese.",
        },
        {
          text: "SLE ist eine seltene Autoimmunerkrankung, die ueberwiegend junge Frauen betrifft",
          isCorrect: true,
          explanation:
            "Richtig! SLE betrifft ca. 30-50 pro 100.000 Einwohner in Deutschland, etwa 90% davon Frauen. Die Erstmanifestation liegt typischerweise zwischen 15 und 45 Jahren.",
        },
        {
          text: "SLE betrifft ausschliesslich die Gelenke",
          isCorrect: false,
          explanation:
            "Falsch. SLE ist eine SYSTEMische Erkrankung — das 'S' in SLE steht fuer 'systemisch'. Neben Gelenken koennen Haut, Nieren, ZNS, Herz, Lunge und Blut betroffen sein.",
        },
        {
          text: "SLE ist eine degenerative Erkrankung wie Arthrose",
          isCorrect: false,
          explanation:
            "Falsch. SLE ist eine AUTOIMMUNerkrankung — das Immunsystem greift koerpereigenes Gewebe an. Arthrose ist Verschleiss, SLE ist Entzuendung.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "kollagenosen-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q10"],
    contentC1: {
      title: "'Niemand glaubt mir, dass ich krank bin'",
      body: "Amara Diallo, 26 Jahre, arbeitet als Grundschullehrerin. Seit 8 Monaten ist sie staendig muede — eine Muedigkeit, die auch nach dem Wochenende nicht besser wird. Dazu kommen Gelenkschmerzen in Haenden und Knien.\n\nIhr Hausarzt sagte: 'Sie sind jung und gesund. Das ist Stress. Schlafen Sie mehr.' Ihre Kolleginnen sagten: 'Du siehst doch gut aus — so schlimm kann es nicht sein.'\n\nVor 3 Wochen: Nach einem Sonnenbad erscheint ein schmetterlingsfoermiger Ausschlag auf Nase und Wangen. Der Hautarzt nimmt Blut ab — ANA hochpositiv (Titer 1:1280). Ueberweisung zum Rheumatologen. Verdacht: SLE.\n\nAmara hat im Internet recherchiert. Sie hat gelesen, dass SLE die Nieren zerstoeren kann. Dass Frauen afrikanischer Herkunft haeufiger und schwerer betroffen sind. Dass es keine Heilung gibt. Sie hat Angst.\n\nIhre Mutter erzaehlt: 'Ich hatte als junge Frau auch solche Schmerzen und Ausschlaege. Der Arzt hat gesagt, das ist nichts.'",
      fallbezug:
        "Amara begleitet dich durch diese Lektion. Ihr Fall zeigt: SLE ist die 'Chamaelon-Krankheit' — viele Symptome, lange Diagnoseverzoegerung, oft nicht ernst genommen.",
      glossarBegriffe: ["Schmetterlingserythem", "ANA"],
    },
    contentB1: {
      title: "'Niemand glaubt mir, dass ich krank bin'",
      body: "Amara Diallo ist 26 Jahre alt.\nSie ist Grundschullehrerin.\nSeit 8 Monaten ist sie sehr muede.\nDie Muedigkeit geht auch nach dem Wochenende nicht weg.\nSie hat Schmerzen in den Haenden und Knien.\n\nIhr Arzt sagte: 'Sie sind jung. Das ist nur Stress.'\nIhre Kolleginnen sagten: 'Du siehst doch gut aus!'\n\nVor 3 Wochen war Amara in der Sonne.\nDann bekam sie einen roten Ausschlag im Gesicht.\nDer Ausschlag sieht aus wie ein Schmetterling.\nEr ist auf der Nase und auf den Wangen.\n\nDer Hautarzt hat Blut abgenommen.\nDas Ergebnis: ANA-Test positiv (Antikoerper im Blut).\nAmara muss jetzt zum Rheumatologen (Rheuma-Facharzt).\nDer Verdacht: SLE (Lupus).\n\nAmara hat im Internet gelesen.\nSie hat Angst.\nSLE kann die Nieren krank machen.\nEs gibt keine Heilung.\n\nAmaras Mutter erzaehlt:\n'Ich hatte als junge Frau die gleichen Schmerzen.\nDer Arzt hat gesagt: Das ist nichts.'",
    },
  },
  {
    stepId: "kollagenosen-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q10"],
    contentC1: {
      title: "Amaras Symptome einordnen",
      body: "",
      fallbezug:
        "Amara hat: chronische Fatigue (8 Monate), Gelenkschmerzen (Haende, Knie), Schmetterlingserythem nach Sonnexposition, ANA 1:1280 positiv.",
    },
    question: {
      fragetext:
        "Welches Symptom von Amara ist am spezifischsten fuer einen SLE?",
      optionen: [
        {
          text: "Chronische Muedigkeit (Fatigue)",
          isCorrect: false,
          explanation:
            "Fatigue kommt bei vielen Erkrankungen vor — RA, Fibromyalgie, Depression, Schilddruesenerkrankungen. Unspezifisch, aber bei SLE sehr haeufig (80-90%).",
        },
        {
          text: "Gelenkschmerzen in Haenden und Knien",
          isCorrect: false,
          explanation:
            "Gelenkschmerzen koennen viele Ursachen haben (RA, Arthrose, Gicht, reaktive Arthritis). Nicht spezifisch fuer SLE.",
        },
        {
          text: "Schmetterlingsfoermiger Hautausschlag nach Sonnexposition",
          isCorrect: true,
          explanation:
            "Richtig! Das Schmetterlingserythem (Malar Rash) ist eines der spezifischsten Zeichen fuer SLE. Es tritt bei etwa 50% der SLE-Patienten auf und wird durch UV-Licht ausgeloest (Photosensitivitaet).",
        },
        {
          text: "Positiver ANA-Test",
          isCorrect: false,
          explanation:
            "ANA sind hochsensitiv (>95% bei SLE positiv), aber NICHT spezifisch. ANA koennen auch bei Sjoergren, Sklerodermie, Myositis und sogar bei gesunden Menschen positiv sein (5-15%).",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "kollagenosen-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q10"],
    contentC1: {
      title: "Systemischer Lupus erythematodes (SLE)",
      body: "SLE ist die wichtigste Kollagenose. 'Systemisch' bedeutet: Die Erkrankung kann jedes Organ angreifen. Das macht SLE zur 'Chamaelon-Krankheit' — kein Patient ist wie der andere.\n\nHaeufigkeit: 30-50/100.000 in Deutschland. 90% Frauen, Erstmanifestation 15-45 Jahre.\n\nOrganbeteiligung:\n- Haut (80%): Schmetterlingserythem, Photosensitivitaet, diskoider Lupus, Haarverlust\n- Gelenke (90%): Nicht-erosive Arthritis (anders als RA!), Arthralgien\n- Niere (30-50%): Lupusnephritis — prognostisch entscheidend!\n- Blut: Anaemie, Leukopenie, Thrombopenie\n- ZNS (15-20%): Kopfschmerzen, Krampfanfaelle, Psychose\n- Herz/Lunge: Perikarditis, Pleuritis\n\nDiagnostik:\n- ANA: Screening (sensitiv, nicht spezifisch)\n- Anti-dsDNA: Hochspezifisch fuer SLE, korreliert mit Krankheitsaktivitaet\n- Komplement (C3, C4): Erniedrigt im Schub\n\nTherapie (S3-Leitlinie 2025):\n- Hydroxychloroquin (HCQ) fuer ALLE SLE-Patienten\n- Glukokortikoide: Moeglichst ≤5 mg/Tag, besser absetzen\n- Immunsuppressiva: MTX, Azathioprin, Mycophenolat\n- Biologika: Belimumab, Anifrolumab",
      glossarBegriffe: [
        "Systemischer Lupus erythematodes (SLE)",
        "Anti-dsDNA-Antikoerper",
      ],
    },
    contentB1: {
      title: "Was ist SLE (Lupus)?",
      body: "SLE ist eine Autoimmunkrankheit.\nDas Immunsystem greift den eigenen Koerper an.\nSLE kann viele Organe krank machen.\nDarum heisst SLE 'Chamaelon-Krankheit'.\nJeder Patient ist anders.\n\nWer bekommt SLE?\n- 30-50 von 100.000 Menschen in Deutschland\n- 90% sind Frauen\n- Meistens zwischen 15 und 45 Jahren\n\nWelche Organe koennen krank werden?\n- Haut (80%): Schmetterlings-Ausschlag, Sonnenproblem\n- Gelenke (90%): Schmerzen in den Haenden\n- Niere (30-50%): Lupus-Nierenentzuendung — sehr wichtig!\n- Blut: Zu wenig rote oder weisse Blutzellen\n- Gehirn: Kopfschmerzen, Krampfanfaelle\n\nWelche Bluttests sind wichtig?\n- ANA-Test: Zeigt eine Autoimmunkrankheit (aber nicht welche)\n- Anti-dsDNA-Test: Zeigt SLE (sehr genau)\n- Komplement (C3, C4): Wenn niedrig → Krankheit ist aktiv\n\nWelche Medikamente gibt es?\n- Hydroxychloroquin: Fuer ALLE Patienten mit SLE\n- Kortison: So wenig wie moeglich (hoechstens 5 mg am Tag)\n- Weitere Medikamente gegen das Immunsystem",
    },
  },
  {
    stepId: "kollagenosen-06",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Was sagen die Antikoerper?",
      body: "Amaras Laborergebnisse: ANA 1:1280 (positiv), Anti-dsDNA positiv, C3 erniedrigt, Anti-SSA negativ.",
      fallbezug:
        "Diese Konstellation — ANA positiv + Anti-dsDNA positiv + Komplement erniedrigt — ist die klassische SLE-Konstellation.",
    },
    question: {
      fragetext:
        "Amaras Anti-dsDNA-Antikoerper sind positiv. Was bedeutet das fuer die weitere Betreuung?",
      optionen: [
        {
          text: "Kein Grund zur Sorge — dsDNA-Antikoerper sind bei vielen Gesunden positiv",
          isCorrect: false,
          explanation:
            "Falsch. Anti-dsDNA sind hochspezifisch fuer SLE (Spezifitaet >95%). Sie kommen bei Gesunden praktisch nicht vor.",
        },
        {
          text: "Die Nierenfunktion muss engmaschig ueberwacht werden, da Anti-dsDNA mit Lupusnephritis korreliert",
          isCorrect: true,
          explanation:
            "Richtig! Anti-dsDNA-Antikoerper korrelieren mit der Krankheitsaktivitaet und insbesondere mit der Lupusnephritis. Steigende dsDNA-Titer + fallendes Komplement = Warnsignal fuer Schub/Nierenbeteiligung. Regelmaessige Urinkontrollen (Proteinurie!) sind Pflicht.",
        },
        {
          text: "Die Diagnose SLE kann ausgeschlossen werden",
          isCorrect: false,
          explanation:
            "Im Gegenteil! Anti-dsDNA-Antikoerper sind hochspezifisch fuer SLE und bestaetigen die Diagnose.",
        },
        {
          text: "Amara braucht sofort eine Nierenbiopsie",
          isCorrect: false,
          explanation:
            "Nicht automatisch. Eine Nierenbiopsie wird durchgefuehrt, wenn klinische Zeichen einer Lupusnephritis vorliegen (Proteinurie, Haematurie, Kreatininanstieg). Positive dsDNA allein reicht nicht — aber engmaschiges Monitoring ist noetig.",
        },
      ],
    },
  },
  {
    stepId: "kollagenosen-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q5", "Q6", "Q9"],
    contentC1: {
      title: "Weitere Kollagenosen im Ueberblick",
      body: "Neben SLE gibt es weitere wichtige Kollagenosen:\n\nSjoergren-Syndrom:\n- Autoimmune Zerstoerung der Traenen- und Speicheldruesen\n- Leitsymptom: Sicca-Symptomatik — trockene Augen (Keratoconjunctivitis sicca) + trockener Mund (Xerostomie)\n- Antikoerper: Anti-SSA (Ro) und Anti-SSB (La)\n- CAVE: Erhoehtes Lymphomrisiko (Non-Hodgkin-Lymphom)\n- Pflege: Mundpflege, Traenenersatz, regelmaessige Fluessigkeitszufuhr\n\nSystemische Sklerose (Sklerodermie):\n- Fibrose (Verhaertung) von Haut und inneren Organen\n- Fruehsymptom: Raynaud-Phaenomen (weiss-blau-rot bei Kaelte)\n- Hautfibrose: Haut wird hart und straff (Sklerodaktylie, Mikrostomie)\n- Organbeteiligung: Lunge (Fibrose), Oesophagus (Schluckstoerungen), Niere (renale Krise)\n- Ca. 20.000 Betroffene in Deutschland, 80% Frauen\n\nDermatomyositis/Polymyositis:\n- Entzuendung der Skelettmuskulatur\n- Leitsymptom: Proximale Muskelschwaeche (Treppen steigen, Arme heben)\n- Dermatomyositis: Zusaetzlich Hautveraenderungen (Gottron-Papeln, heliotropes Exanthem)\n- CAVE: Bei Dermatomyositis erhoehtes Tumorrisiko — Tumorscreening!",
      glossarBegriffe: [
        "Sjoergren-Syndrom",
        "Sicca-Symptomatik",
        "Systemische Sklerose",
        "Raynaud-Phaenomen",
        "Dermatomyositis",
      ],
    },
    contentB1: {
      title: "Weitere Kollagenosen",
      body: "Es gibt noch andere Kollagenosen.\nHier sind die drei wichtigsten:\n\nSjoergren-Syndrom:\nDas Immunsystem zerstoert die Traenen-Druesen und die Speichel-Druesen.\nDie Augen sind trocken.\nDer Mund ist trocken.\nDas heisst Sicca-Symptomatik (Trockenheit).\nBluttest: Anti-SSA und Anti-SSB positiv.\nACHTUNG: Erhoehtes Krebs-Risiko (Lymphom).\nPflege: Mundpflege ist sehr wichtig. Viel trinken. Augentropfen.\n\nSklerodermie (Systemische Sklerose):\nDie Haut und innere Organe werden hart (Fibrose).\nErstes Zeichen: Raynaud-Phaenomen.\nDas bedeutet: Die Finger werden bei Kaelte weiss, dann blau, dann rot.\nDie Haut an den Haenden wird straff.\nAuch die Lunge und die Speiseroehre koennen betroffen sein.\n\nDermatomyositis:\nDie Muskeln sind entzuendet und schwach.\nTypisch: Treppen steigen und Arme heben ist schwer.\nDie Haut kann auch betroffen sein (rote Flecken).\nACHTUNG: Erhoehtes Krebs-Risiko. Tumorsuche ist wichtig!",
    },
  },
  {
    stepId: "kollagenosen-08",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5", "Q6", "Q9"],
    contentC1: {
      title: "Leitsymptome den Kollagenosen zuordnen",
      body: "Jede Kollagenose hat ihre typischen Leitsymptome. Ordne richtig zu:",
    },
    question: {
      fragetext: "Ordne jedes Leitsymptom der richtigen Kollagenose zu:",
      matchingPairs: [
        {
          left: "Schmetterlingserythem + Photosensitivitaet",
          right: "SLE (Systemischer Lupus erythematodes)",
        },
        {
          left: "Trockene Augen + trockener Mund (Sicca)",
          right: "Sjoergren-Syndrom",
        },
        {
          left: "Raynaud-Phaenomen + Hautfibrose",
          right: "Systemische Sklerose (Sklerodermie)",
        },
        {
          left: "Proximale Muskelschwaeche + Gottron-Papeln",
          right: "Dermatomyositis",
        },
        {
          left: "Schmerzende, geschwollene Gelenke + Rheumaknoten",
          right: "Rheumatoide Arthritis (Abgrenzung!)",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "kollagenosen-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q8"],
    contentC1: {
      title: "Notfall: Riesenzellarteriitis — Jede Stunde zaehlt",
      body: "Vaskulitiden sind Entzuendungen der Blutgefaesse. Die wichtigste Vaskulitis fuer die Pflege ist die Riesenzellarteriitis (RZA):\n\n- Haeufigste Vaskulitis (>50 Jahre, Frauen haeufiger)\n- Befaellt v.a. Schlaefenarterie (Arteria temporalis) und Augenarterien\n- NOTFALL: Sehstoerungen bei RZA = Erblindungsgefahr (15-20% ohne Therapie!)\n- Sofortmassnahme: Glukokortikoid-Pulstherapie (500-1000 mg Methylprednisolon i.v.)\n- NICHT auf Diagnostik warten — Therapie einleiten!\n\nWeitere Vaskulitiden:\n- Granulomatose mit Polyangiitis (GPA, frueher Wegener): Niere, Lunge, HNO (ANCA-positiv)\n- Takayasu-Arteriitis: Grosse Gefaesse, junge Frauen",
      glossarBegriffe: ["Riesenzellarteriitis (RZA)"],
    },
    contentB1: {
      title: "Notfall: Riesenzellarteriitis",
      body: "Vaskulitiden sind Entzuendungen der Blutgefaesse.\nDie wichtigste ist die Riesenzellarteriitis (RZA).\n\nWas ist RZA?\n- Eine Entzuendung der Schlaefenarterie (am Kopf)\n- Kommt bei Menschen ueber 50 Jahre vor\n- Frauen sind haeufiger betroffen\n\nACHTUNG — NOTFALL:\nWenn die Augen-Arterie entzuendet ist, kann der Patient blind werden!\nOhne Behandlung werden 15-20% der Patienten blind.\nDas ist NICHT rueckgaengig zu machen.\n\nWas muss sofort passieren?\nSofort Kortison in hoher Dosis (als Infusion in die Vene).\nNICHT warten auf weitere Untersuchungen!\n\nWeitere Vaskulitiden:\n- GPA: Niere, Lunge, Nase betroffen\n- Takayasu-Arteriitis: Grosse Blutgefaesse, junge Frauen",
    },
    question: {
      fragetext:
        "Ein 72-jaehriger Patient klagt ueber neue Kopfschmerzen temporal und bemerkt seit heute Morgen Sehstoerungen am rechten Auge. CRP und BSG sind stark erhoeht. Bringe die Massnahmen in die richtige Reihenfolge:",
      sortItems: [
        "Arzt sofort informieren — Notfall: V.a. Riesenzellarteriitis mit Visusbeteiligung",
        "Hochdosis-Glukokortikoid-Therapie einleiten (Methylprednisolon 500-1000 mg i.v.)",
        "Ultraschall der Temporalarterie organisieren (Halo-Zeichen?)",
        "Engmaschige Visuskontrolle: Sehvermoegen regelmaessig pruefen",
        "Biopsie der Temporalarterie planen (innerhalb 2 Wochen, Therapie nicht verzoegern)",
      ],
    },
  },
  {
    stepId: "kollagenosen-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Amara meldet sich bei der Rheuma-Ambulanz",
      body: "3 Monate spaeter. Amara nimmt Hydroxychloroquin und 10 mg Prednisolon. Die Gelenkschmerzen sind besser, das Schmetterlingserythem ist abgeblasst. Sie fuehlt sich gut und moechte das Prednisolon selbst absetzen.\n\nBeim Kontrolltermin faellt auf: Der Urin zeigt eine leichte Proteinurie (0,8 g/Tag). Die Anti-dsDNA-Titer sind gestiegen, C3 ist weiter gefallen.",
      fallbezug:
        "Amara fuehlt sich gut — aber die Laborwerte zeigen: Die Krankheit ist aktiv, die Niere ist moeglicherweise beteiligt.",
    },
    question: {
      fragetext:
        "Wie reagierst du als Pflegende auf diese Situation?",
      branchingOptions: [
        {
          text: "Amara fuehlt sich besser — das Prednisolon kann langsam reduziert werden, die Werte normalisieren sich bestimmt.",
          feedback:
            "Gefaehrlich! Steigende Anti-dsDNA + fallendes C3 + Proteinurie sind WARNSIGNALE fuer eine beginnende Lupusnephritis. Sich gut fuehlen heisst bei SLE nicht, dass die Krankheit inaktiv ist. Hier darf die Therapie nicht reduziert, sondern muss moeglicherweise intensiviert werden. Sofortige Ruecksprache mit dem Rheumatologen!",
          isCorrect: false,
        },
        {
          text: "Die Laborbefunde sind besorgniserregend. Ich informiere den Arzt ueber die Befundkonstellation und erklaere Amara, warum die Therapie NICHT reduziert werden darf.",
          feedback:
            "Genau richtig! Proteinurie + steigende dsDNA + fallendes Komplement = klassische Warnsignalkonstellation fuer Lupusnephritis. Pflegende muessen verstehen: Bei SLE koennen Laborwerte gefaehrlich sein, OBWOHL der Patient sich gut fuehlt. Deine Aufgabe: Arzt informieren, Amara aufklaeren, Therapieadhaerenz staerken.",
          isCorrect: true,
        },
        {
          text: "Die Proteinurie ist minimal — wir kontrollieren in 3 Monaten nochmal.",
          feedback:
            "Zu passiv! 0,8 g/Tag Proteinurie bei SLE mit steigenden dsDNA-Antikoerpern ist ein Alarmzeichen. Eine Lupusnephritis kann schnell fortschreiten und ohne Therapie zur Dialysepflichtigkeit fuehren. Hier ist schnelles Handeln gefragt, nicht Abwarten.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "kollagenosen-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q7", "Q9"],
    contentC1: {
      title: "'Du siehst doch gar nicht krank aus'",
      body: "Amara erzaehlt: 'Das Schlimmste ist nicht der Schmerz. Das Schlimmste ist, dass mir niemand glaubt. Meine Kolleginnen sagen: Du siehst doch gut aus! Mein Chef fragt, ob ich wirklich krank bin, wenn ich mich krankmelde. Mein Freund versteht nicht, warum ich abends zu muede bin fuer alles.'\n\nViele Kollagenose-Patienten erleben das: Die Krankheit ist von aussen nicht sichtbar. Fatigue, Gelenkschmerzen, Organschaeden — nichts davon sieht man. Diagnoseverzoegerung bei SLE betraegt durchschnittlich 4-6 Jahre. Bei jungen Frauen wird haeufig erst an Stress oder psychosomatische Ursachen gedacht.",
      fallbezug:
        "Amaras Mutter hatte aehnliche Symptome — wurde nie diagnostiziert. Eine ganze Generation spaeter kaempft Amara um dieselbe Anerkennung.",
    },
    contentB1: {
      title: "'Du siehst doch gar nicht krank aus'",
      body: "Amara erzaehlt:\n'Niemand glaubt mir, dass ich krank bin.\nMeine Kolleginnen sagen: Du siehst doch gut aus!\nMein Chef fragt, ob ich wirklich krank bin.\nMein Freund versteht nicht, warum ich abends so muede bin.'\n\nViele Patienten mit Kollagenosen erleben das.\nDie Krankheit sieht man von aussen nicht.\nMan sieht nicht die Muedigkeit (Fatigue).\nMan sieht nicht die Gelenkschmerzen.\nMan sieht nicht die kranke Niere.\n\nBis ein Arzt SLE erkennt, dauert es oft 4-6 Jahre.\nBei jungen Frauen denken Aerzte oft zuerst an Stress.\n\nAmaras Mutter hatte die gleichen Beschwerden.\nKein Arzt hat sie je untersucht.",
    },
    question: {
      fragetext:
        "Wie koennen Pflegende Patienten wie Amara unterstuetzen, deren Erkrankung von aussen nicht sichtbar ist? Beruecksichtige dabei: (1) den Umgang im pflegerischen Alltag, (2) die Kommunikation im Team und (3) die Beratung der Patientin.",
      musterantwort:
        "Pflegende koennen Patienten mit unsichtbaren Erkrankungen unterstuetzen, indem sie: (1) Die subjektiven Beschwerden ernst nehmen und dokumentieren — auch wenn objektive Befunde fehlen. Fatigue ist ein reales Symptom, nicht Faulheit. (2) Im interprofessionellen Team Verstaendnis schaffen: Die Krankheitsaktivitaet bei SLE korreliert nicht immer mit dem aeusseren Erscheinungsbild. Laborwerte beachten, nicht nur den Augenschein. (3) Die Patientin in ihrer Selbstwahrnehmung staerken: Krankheit validieren, Selbsthilfegruppen empfehlen (Lupus Erythematodes Selbsthilfegemeinschaft), Coping-Strategien vermitteln.",
      bewertungskriterien: [
        "Subjektive Beschwerden ernst nehmen / Symptome validieren",
        "Teamkommunikation: Unterschied zwischen aeusserem Eindruck und Krankheitsaktivitaet",
        "Patientenberatung: Selbsthilfe, Coping, psychosoziale Unterstuetzung",
        "Fatigue als eigenstaendiges Symptom anerkennen",
        "Keine Bagatellisierung ('Das wird schon')",
      ],
      satzanfaengeB1: [
        "Pflegende koennen helfen, indem sie...",
        "Es ist wichtig, dass Pflegende...",
        "Frau Diallo braucht Unterstuetzung, weil...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "kollagenosen-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q3", "Q9"],
    contentC1: {
      title: "Dein Praxisauftrag",
      body: "Du hast heute die wichtigsten Kollagenosen und Vaskulitiden kennengelernt. Hier ist dein Auftrag fuer die Praxis:\n\nFrage 1: Achte in deinem naechsten Praxiseinsatz darauf: Gibt es Patienten mit Autoimmunerkrankungen? Welche Medikamente nehmen sie? Frage nach: Nehmen sie Hydroxychloroquin, Cortison oder Immunsuppressiva?\n\nFrage 2: Ueberlege: Wie wuerdest du reagieren, wenn ein Patient auf deiner Station ploetzlich ueber Sehstoerungen und starke Kopfschmerzen im Schlaefenbereich klagt? Was waere dein erster Schritt?\n\nZusammenfassung dieser Lektion:\n- Kollagenosen sind systemische Autoimmunerkrankungen mit Organbeteiligung\n- SLE ist die 'Chamaelon-Krankheit' — Haut, Gelenke, Niere, ZNS, Blut\n- Anti-dsDNA-Antikoerper sind hochspezifisch fuer SLE und korrelieren mit Nierenbeteiligung\n- Sjoergren = Sicca (Trockenheit), Sklerodermie = Fibrose + Raynaud, Myositis = Muskelschwaeche\n- Riesenzellarteriitis mit Sehstoerung = NOTFALL → sofort GC-Pulstherapie\n- 'Unsichtbare Krankheit' ernst nehmen — subjektive Beschwerden validieren",
      fallbezug:
        "Amara wird weiter begleitet. Ihre Nierenwerte werden engmaschig kontrolliert. In Lektion 12 (Pflegeprozess) wirst du einen Pflegeplan fuer sie erstellen koennen.",
    },
    contentB1: {
      title: "Dein Auftrag fuer die Praxis",
      body: "Das hast du heute gelernt:\n\n- Kollagenosen greifen viele Organe an (Haut, Niere, Lunge)\n- SLE ist die wichtigste Kollagenose\n- Anti-dsDNA zeigt SLE und Nierenbeteiligung\n- Sjoergren = trockene Augen und Mund\n- Sklerodermie = harte Haut + Raynaud (weisse Finger bei Kaelte)\n- Myositis = schwache Muskeln\n- Riesenzellarteriitis mit Sehproblem = NOTFALL → sofort Arzt rufen\n\nDein Auftrag:\n1. Gibt es in deiner Praxis Patienten mit Autoimmunkrankheiten?\nWelche Medikamente nehmen sie? (Hydroxychloroquin? Kortison?)\n\n2. Was machst du, wenn ein Patient ploetzlich Kopfschmerzen an der Schlaefe hat und schlecht sieht?\nWas ist dein erster Schritt?\n\nAmara wird weiter beobachtet.\nIhre Nierenwerte werden regelmaessig kontrolliert.\nIn Lektion 12 lernst du, wie du einen Pflegeplan fuer sie schreibst.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Kollagenose",
    erklaerung:
      "Sammelbegriff fuer systemische Autoimmunerkrankungen des Bindegewebes (SLE, Sjoergren, Sklerodermie, Myositis)",
  },
  {
    begriff: "Vaskulitis",
    erklaerung:
      "Entzuendung der Blutgefaesse — kann grosse, mittlere oder kleine Gefaesse betreffen",
  },
  {
    begriff: "Systemischer Lupus erythematodes (SLE)",
    erklaerung:
      "Systemische Autoimmunerkrankung mit moeglicher Beteiligung aller Organe, 90% Frauen",
  },
  {
    begriff: "Schmetterlingserythem",
    erklaerung:
      "Schmetterlingsfoermiger Hautausschlag auf Nase und Wangen, typisch fuer SLE, durch UV-Licht ausgeloest",
  },
  {
    begriff: "ANA (antinukleare Antikoerper)",
    erklaerung:
      "Screening-Antikoerper fuer Autoimmunerkrankungen — sensitiv aber nicht spezifisch fuer SLE",
  },
  {
    begriff: "Anti-dsDNA-Antikoerper",
    erklaerung:
      "Antikoerper gegen doppelstraengige DNA — hochspezifisch fuer SLE, korreliert mit Nierenbeteiligung",
  },
  {
    begriff: "Sjoergren-Syndrom",
    erklaerung:
      "Autoimmunerkrankung mit Zerstoerung der Traenen- und Speicheldruesen (Sicca-Symptomatik)",
  },
  {
    begriff: "Sicca-Symptomatik",
    erklaerung:
      "Trockenheit von Augen (Keratoconjunctivitis sicca) und Mund (Xerostomie)",
  },
  {
    begriff: "Systemische Sklerose (Sklerodermie)",
    erklaerung:
      "Autoimmunerkrankung mit Fibrose von Haut und inneren Organen, Raynaud-Phaenomen als Fruehsymptom",
  },
  {
    begriff: "Raynaud-Phaenomen",
    erklaerung:
      "Anfallsartige Durchblutungsstoerung der Finger bei Kaelte: weiss (Ischaemie) → blau (Zyanose) → rot (Reperfusion)",
  },
  {
    begriff: "Dermatomyositis",
    erklaerung:
      "Entzuendliche Muskelerkrankung mit Hautbeteiligung (Gottron-Papeln, heliotropes Exanthem), erhoehtes Tumorrisiko",
  },
  {
    begriff: "Riesenzellarteriitis (RZA)",
    erklaerung:
      "Entzuendung grosser und mittelgrosser Arterien, v.a. Schlaefenarterie — Notfall bei Sehstoerungen (Erblindungsgefahr)",
  },
];
