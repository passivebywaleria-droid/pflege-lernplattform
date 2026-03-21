// Lektion 06: Kristallarthropathien — Gicht und Pseudogicht
// CE 05 — Block B: Krankheitsbilder
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-06-gicht",
  ceId: "ce-05",
  title: "Kristallarthropathien — Gicht und Pseudogicht",
  titleShort: "Gicht",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 15, b1: 25 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-V.1"],
  bloomStufen: [1, 5],
  voraussetzungen: ["le-03-pathophysiologie"],
  leitfall: {
    name: "Ralf Schneider",
    alter: 52,
    beruf: "Taxifahrer (selbststaendig)",
    diagnose: "Akuter Gichtanfall (Podagra) bei medikamentoes induzierter Hyperurikaemie",
    setting: "Notaufnahme, nachts um 3 Uhr",
    kernproblem:
      "Extremer Schmerz im rechten Grosszeh, kann nicht auftreten, Existenzangst (Taxifahrer, rechter Fuss), Scham wegen Gicht-Stigma",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "gicht-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q5"],
    contentC1: {
      title: "Was weisst du ueber Gicht?",
      body: "Willkommen zur Lektion ueber Kristallarthropathien! In dieser Lektion lernst du, wie Harnsaeurekristalle Gelenke angreifen — und was Pflegende tun koennen.\n\nDu erfaehrst:\n- Wie der Harnsaeurestoffwechsel funktioniert und wann er entgleist\n- Was bei einem akuten Gichtanfall passiert und wie du ihn erkennst\n- Den Unterschied zwischen Gicht und Pseudogicht (CPPD)\n- Welche Medikamente helfen und welche pflegerischen Massnahmen wichtig sind\n- Warum Gicht NICHT einfach 'selbst verschuldet' ist",
      glossarBegriffe: ["Kristallarthropathie"],
    },
    contentB1: {
      title: "Was weisst du ueber Gicht?",
      body: "Willkommen! In dieser Lektion lernst du etwas ueber Gicht.\nGicht ist eine Krankheit. Sie macht starke Schmerzen in den Gelenken.\n\nDu lernst:\n- Warum manche Menschen Gicht bekommen\n- Was bei einem Gicht-Anfall passiert\n- Was Pflegekraefte tun koennen\n- Den Unterschied zwischen Gicht und Pseudogicht\n- Warum Gicht NICHT immer selbst verschuldet ist",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Gicht und Kristallarthropathien?",
    },
  },
  {
    stepId: "gicht-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q6", "Q8"],
    contentC1: {
      title: "Schaetzfrage zum Einstieg",
      body: "",
    },
    question: {
      fragetext:
        "Was schaetzt du: Wie viele Erwachsene in Deutschland haben Gicht?",
      optionen: [
        {
          text: "Etwa 100.000",
          isCorrect: false,
          explanation:
            "Viel zu niedrig. 100.000 waere weniger als die Bevoelkerung von Jena. Gicht ist deutlich haeufiger.",
        },
        {
          text: "Etwa 500.000",
          isCorrect: false,
          explanation:
            "Zu niedrig. Allein die Praevalenz von 1-2% bei 60 Millionen Erwachsenen ergibt eine viel hoehere Zahl.",
        },
        {
          text: "Etwa 950.000 bis 1,2 Millionen",
          isCorrect: true,
          explanation:
            "Richtig! Etwa 1-2% der Erwachsenen in Deutschland haben Gicht — das sind knapp 1 Million Menschen. Maenner sind 3-4x haeufiger betroffen als Frauen (DGRh-Kerndokumentation).",
        },
        {
          text: "Etwa 3 Millionen",
          isCorrect: false,
          explanation:
            "Etwas zu hoch. 3 Millionen wuerde einer Praevalenz von ueber 5% entsprechen. Die tatsaechliche Rate liegt bei 1-2%.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "gicht-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Nachts um 3 Uhr in der Notaufnahme",
      body: "Ralf Schneider, 52 Jahre, ist selbststaendiger Taxifahrer. Um 2 Uhr nachts wacht er mit extremen Schmerzen im rechten grossen Zeh auf. Der Zeh ist feuerrot, stark geschwollen und so empfindlich, dass er nicht einmal die Bettdecke ertraegt. An Gehen ist nicht zu denken.\n\nSeine Frau faehrt ihn in die Notaufnahme. Dort sitzt Ralf im Rollstuhl, den rechten Fuss hochgelagert, das Gesicht schmerzverzerrt. Er sagt zur aufnehmenden Pflegekraft: 'Ich bin auf irgendetwas getreten — oder es ist gebrochen. So starke Schmerzen hatte ich noch nie.'\n\nDie Pflegekraft dokumentiert: NRS 9/10, Vitalzeichen unauffaellig bis auf Blutdruck 165/95 mmHg. Der diensthabende Arzt untersucht den Fuss und fragt: 'Nehmen Sie Medikamente?' — 'Ja, HCT gegen den Blutdruck, seit 8 Jahren.'\n\nDer Arzt sagt: 'Herr Schneider, das ist sehr wahrscheinlich ein akuter Gichtanfall.'\n\nRalf ist schockiert: 'Gicht?! Das haben doch nur alte Saeufer! Ich trinke fast gar nichts!'",
      fallbezug:
        "Ralf begleitet dich durch diese Lektion. Seine Frage 'Warum ich?' wird sich erst klaeren, wenn du den Harnsaeurestoffwechsel verstehst.",
      glossarBegriffe: ["Podagra", "NRS"],
    },
    contentB1: {
      title: "Nachts um 3 Uhr in der Notaufnahme",
      body: "Ralf Schneider ist 52 Jahre alt.\nEr arbeitet als Taxifahrer.\nUm 2 Uhr nachts wacht er auf.\nEr hat sehr starke Schmerzen am rechten grossen Zeh.\nDer Zeh ist rot und dick.\nSogar die Bettdecke tut weh.\nEr kann nicht laufen.\n\nSeine Frau faehrt ihn ins Krankenhaus.\nIn der Notaufnahme sagt Ralf:\n'Ich bin auf etwas getreten. Oder der Zeh ist gebrochen.'\n\nDie Pflegekraft misst den Schmerz: NRS 9 von 10.\nDer Arzt untersucht den Fuss.\nEr fragt: 'Nehmen Sie Medikamente?'\nRalf sagt: 'Ja, HCT gegen Bluthochdruck. Seit 8 Jahren.'\n\nDer Arzt sagt: 'Das ist wahrscheinlich ein Gicht-Anfall.'\nRalf ist ueberrascht: 'Gicht? Das haben doch nur alte Saeufer!'\n'Ich trinke fast gar nichts!'",
    },
  },
  {
    stepId: "gicht-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q6", "Q9"],
    contentC1: {
      title: "Ursachenforschung",
      body: "",
      fallbezug:
        "Ralf trinkt selten Alkohol (2 Bier pro Woche), ist leicht uebergewichtig (BMI 29) und nimmt seit 8 Jahren Hydrochlorothiazid (HCT). Sein Vater und sein Onkel hatten beide Gicht.",
    },
    question: {
      fragetext:
        "Welcher Faktor hat bei Ralf wahrscheinlich am meisten zur Gicht beigetragen?",
      optionen: [
        {
          text: "Sein Uebergewicht (BMI 29)",
          isCorrect: false,
          explanation:
            "Uebergewicht ist ein Risikofaktor, aber BMI 29 ist nur leicht uebergewichtig. Bei Ralf gibt es einen staerkeren Faktor.",
        },
        {
          text: "Die 2 Bier pro Woche",
          isCorrect: false,
          explanation:
            "Alkohol erhoeht die Harnsaeure, aber 2 Bier pro Woche sind eine geringe Menge. Das allein erklaert keinen Gichtanfall.",
        },
        {
          text: "Die Einnahme von Hydrochlorothiazid (HCT) seit 8 Jahren",
          isCorrect: true,
          explanation:
            "Richtig! Thiazid-Diuretika wie HCT hemmen die Harnsaeureausscheidung ueber die Niere und sind ein bekannter, haeufiger Gicht-Trigger. Die S3-Leitlinie empfiehlt, medikamentoese Ursachen immer zu pruefen.",
        },
        {
          text: "Die Currywurst, die er gestern Abend gegessen hat",
          isCorrect: false,
          explanation:
            "Eine einzelne purinreiche Mahlzeit kann einen Anfall ausloesen, ist aber nie die alleinige Ursache. Die chronische Hyperurikaemie durch HCT + Genetik ist entscheidend.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "gicht-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q6", "Q9"],
    contentC1: {
      title: "Warum bildet der Koerper zu viel Harnsaeure?",
      body: "Harnsaeure ist das Endprodukt des Purinstoffwechsels. Purine stecken in jeder Koerperzelle (DNA/RNA) und in vielen Lebensmitteln (Fleisch, Innereien, Meeresfruechte, Bier). Normalerweise werden etwa zwei Drittel der Harnsaeure ueber die Nieren ausgeschieden, ein Drittel ueber den Darm.\n\nHyperurikaemie entsteht, wenn das Gleichgewicht kippt:\n- Verminderte Ausscheidung (90% der Faelle): Niere scheidet zu wenig Harnsaeure aus — haeufigste Ursache! Medikamente wie Diuretika (HCT!) oder Ciclosporin, chronische Niereninsuffizienz, Genetik (URAT1-Transporter-Varianten)\n- Vermehrte Bildung (10%): Zellzerfall (Tumorlyse, Haemolyse), purinreiche Ernaehrung, genetische Enzymdefekte\n\nGrenzwert: Serumharnsaeure > 6,8 mg/dl = Hyperurikaemie. Ab dieser Konzentration koennen Natriumurat-Kristalle ausfallen — wie Salz, das sich in uebersaettigter Loesung absetzt.\n\nWICHTIG: Nicht jeder mit Hyperurikaemie bekommt Gicht! Nur etwa 20-30% entwickeln je einen Anfall. Aber ohne Hyperurikaemie gibt es keine Gicht.",
      glossarBegriffe: [
        "Harnsaeure",
        "Hyperurikaemie",
        "Purine",
        "Natriumurat-Kristalle",
      ],
    },
    contentB1: {
      title: "Warum bildet der Koerper zu viel Harnsaeure?",
      body: "Harnsaeure (ein Abfallstoff) entsteht im Koerper.\nSie kommt von Purinen.\nPurine sind in jeder Koerperzelle.\nSie sind auch in Fleisch, Innereien und Bier.\n\nNormalerweise scheidet die Niere die Harnsaeure aus.\nDas funktioniert gut.\n\nManchmal funktioniert es nicht mehr gut.\nDann steigt die Harnsaeure im Blut an.\nDas nennt man Hyperurikaemie (zu viel Harnsaeure im Blut).\n\nWarum passiert das?\n- Meistens (90%): Die Niere scheidet zu wenig aus.\n  Gruende: Medikamente (z.B. HCT), Nierenprobleme, Vererbung\n- Manchmal (10%): Der Koerper bildet zu viel Harnsaeure.\n  Gruende: Viel Fleisch, Zellzerfall bei Krebs\n\nAb 6,8 mg/dl Harnsaeure im Blut koennen sich Kristalle bilden.\nDie Kristalle sehen aus wie kleine Nadeln.\nSie lagern sich in den Gelenken ab.\n\nWICHTIG: Nicht jeder mit hoher Harnsaeure bekommt Gicht!\nNur 20-30% bekommen einen Anfall.",
    },
  },
  {
    stepId: "gicht-06",
    phase: 3,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q6"],
    contentC1: {
      title: "Kristallbildung verstehen",
      body: "",
    },
    question: {
      fragetext:
        "Harnsaeure loest sich im Blut — aber ab einer bestimmten Konzentration faellt sie als Kristall aus. Was bestimmt, ob Kristalle entstehen?",
      optionen: [
        {
          text: "Die Menge an Alkohol im Blut",
          isCorrect: false,
          explanation:
            "Alkohol erhoeht zwar die Harnsaeure (Bier enthaelt Purine, Alkohol hemmt die Ausscheidung), ist aber nicht der direkte Mechanismus der Kristallbildung.",
        },
        {
          text: "Die Serumharnsaeure-Konzentration — ab > 6,8 mg/dl koennen Natriumurat-Kristalle ausfallen",
          isCorrect: true,
          explanation:
            "Richtig! 6,8 mg/dl ist die Loeslichkeitsgrenze von Natriumurat bei 37 Grad Celsius. Dareuber wird die Loesung 'uebersaettigt' und Kristalle koennen sich bilden — besonders in kuehlen, schlecht durchbluteten Geweben wie dem Grosszehengrundgelenk.",
        },
        {
          text: "Die Koerpertemperatur — bei Fieber bilden sich mehr Kristalle",
          isCorrect: false,
          explanation:
            "Umgekehrt! Natriumurat loest sich bei hoeheren Temperaturen BESSER. Deshalb lagern sich Kristalle bevorzugt in kuehlen Koerperregionen ab (Zehen, Ohren, Ellbogen).",
        },
        {
          text: "Die Menge an Wasser, die man trinkt",
          isCorrect: false,
          explanation:
            "Ausreichend Fluessigkeit hilft zwar bei der Ausscheidung, aber der entscheidende Faktor ist die Serumkonzentration, nicht das Trinkvolumen allein.",
        },
      ],
    },
  },
  {
    stepId: "gicht-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q6", "Q10"],
    contentC1: {
      title: "Drei Gesichter der Kristallkrankheit",
      body: "1. Akuter Gichtanfall\nNatriumurat-Kristalle aktivieren das Immunsystem (NLRP3-Inflammasom, IL-1-beta). Innerhalb von Stunden: Extremer Schmerz, Roetung, Schwellung, Uebererwaermung. Typisch: Grosszehengrundgelenk (Podagra, 60% der Erstanfaelle). Schmerz-Maximum ohne Vorwarnung innerhalb von 24 Stunden. Unbehandelt klingt der Anfall nach 1-2 Wochen spontan ab.\n\n2. Chronische Gicht (Gichtarthropathie)\nOhne Behandlung: Wiederkehrende Anfaelle, dauerhafter Kristallbelag, Gelenkzerstoerung. Tophi (Gichtknoten): Sichtbare Harnsaeure-Ablagerungen unter der Haut (Ohr, Ellbogen, Finger). Komplikationen: Nierensteine (Uratnephrolithiasis), Niereninsuffizienz.\n\n3. Pseudogicht (CPPD-Kristallkrankheit)\nAndere Kristalle: Kalziumpyrophosphat (CPP) statt Natriumurat. Andere Gelenke: Vor allem Knie (nicht Grosszehe). Andere Patienten: Haeufiger bei Aelteren (ueber 60 Jahre). Gleiche Symptome: Akute Gelenkentzuendung, Roetung, Schwellung. Aber: Keine kausale Therapie — man kann CPP-Kristalle nicht aufloesen (anders als bei Gicht!). Diagnose: Polarisationsmikroskopie der Gelenkpunktion + Roentgen (Chondrokalzinose).",
      glossarBegriffe: [
        "Tophus",
        "Uratnephrolithiasis",
        "Pseudogicht",
        "CPPD",
        "Chondrokalzinose",
      ],
    },
    contentB1: {
      title: "Drei Formen der Kristall-Krankheit",
      body: "1. Akuter Gicht-Anfall\nKristalle in einem Gelenk loesen eine Entzuendung aus.\nDas passiert ganz ploetzlich.\nZeichen: Sehr starke Schmerzen, Roetung, Schwellung, Hitze.\nMeistens am grossen Zeh (das heisst Podagra).\nOhne Behandlung dauert der Anfall 1-2 Wochen.\n\n2. Chronische Gicht\nWenn man nichts tut, kommen die Anfaelle immer wieder.\nDie Kristalle zerstoeren die Gelenke.\nUnter der Haut bilden sich Knoten (Tophi).\nAuch Nierensteine koennen entstehen.\n\n3. Pseudogicht (CPPD)\nAndere Kristalle: Kalziumpyrophosphat (nicht Harnsaeure).\nAndere Gelenke: Meistens das Knie (nicht der Zeh).\nAndere Patienten: Meistens aeltere Menschen (ueber 60).\nGleiche Symptome: Schmerzen, Roetung, Schwellung.\nABER: Man kann die Kristalle nicht aufloesen.\nEs gibt keine Heilung. Nur Schmerzmittel helfen.",
    },
  },
  {
    stepId: "gicht-08",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q5"],
    contentC1: {
      title: "Zwei Kristallkrankheiten — richtig unterscheiden",
      body: "Gicht und Pseudogicht sind beides Kristallarthropathien — Gelenkentzuendungen durch Kristallablagerungen. Aber die Kristalle, die betroffenen Gelenke und die Therapie unterscheiden sich grundlegend.",
    },
    question: {
      fragetext: "Ordne jedes Merkmal der richtigen Erkrankung zu:",
      matchingPairs: [
        {
          left: "Natriumurat-Kristalle",
          right: "Gicht",
        },
        {
          left: "Kalziumpyrophosphat-Kristalle (CPP)",
          right: "Pseudogicht (CPPD)",
        },
        {
          left: "Typisch: Grosszehengrundgelenk (Podagra)",
          right: "Gicht",
        },
        {
          left: "Typisch: Kniegelenk",
          right: "Pseudogicht (CPPD)",
        },
        {
          left: "Harnsaeuresenkende Therapie moeglich (Allopurinol)",
          right: "Gicht",
        },
        {
          left: "Keine kausale Therapie — nur symptomatisch",
          right: "Pseudogicht (CPPD)",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "gicht-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Ralf hat Schmerzen — Was tust du zuerst?",
      body: "Ralf sitzt in der Notaufnahme mit NRS 9/10 am rechten Grosszeh. Der Arzt hat 'akuter Gichtanfall' diagnostiziert und Colchicin angeordnet. Du bist die zustaendige Pflegekraft.",
      fallbezug:
        "Welche pflegerischen Massnahmen fuehrst du durch — und in welcher Reihenfolge?",
    },
    question: {
      fragetext:
        "Bringe die pflegerischen Massnahmen beim akuten Gichtanfall in die richtige Reihenfolge (Prioritaet):",
      sortItems: [
        "Schmerzerfassung (NRS) und Vitalzeichen dokumentieren",
        "Betroffenes Gelenk ruhigstellen und hochlagern",
        "Kuehlung anlegen (kuehle Umschlaege, KEIN Eis direkt auf Haut)",
        "Deckenheber anbringen (Bettdecke vom Fuss fernhalten)",
        "Angeordnete Medikamente verabreichen (Colchicin nach Arztanordnung)",
        "Fluessigkeitszufuhr foerdern (mind. 2 Liter/Tag, kein Alkohol)",
      ],
    },
  },
  {
    stepId: "gicht-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q2", "Q9"],
    contentC1: {
      title: "Telefonische Beratung nach Entlassung",
      body: "Drei Wochen nach dem Gichtanfall ruft Ralf in der rheumatologischen Ambulanz an. Er hat seit einer Woche Allopurinol 100 mg begonnen (plus Colchicin-Prophylaxe). Heute Morgen hat er leichte Schmerzen im rechten Grosszeh — nicht so stark wie beim Anfall, aber er macht sich Sorgen.\n\nEr fragt: 'Soll ich das Allopurinol absetzen? Vielleicht macht das die Schmerzen?'",
      fallbezug:
        "Ralf ist verunsichert. Er hat Angst vor einem neuen Anfall und ueberlegt, das Medikament abzusetzen.",
    },
    question: {
      fragetext: "Wie beraetest du Ralf am Telefon?",
      branchingOptions: [
        {
          text: "Ja, setzen Sie das Allopurinol ab und kommen Sie morgen vorbei.",
          feedback:
            "Nicht optimal! Leichte Anfaelle zu Beginn der harnsaeuresenkenden Therapie sind NORMAL und erwartet. Die S3-Leitlinie empfiehlt, Allopurinol NICHT abzusetzen — das wuerde den Therapieerfolg gefaehrden. Genau dafuer nimmt Ralf die Colchicin-Prophylaxe. Besser: Beruhigen und erklaeren.",
          isCorrect: false,
        },
        {
          text: "Leichte Beschwerden am Anfang der Therapie sind normal. Deshalb nehmen Sie ja das Colchicin als Schutz. Bitte nehmen Sie das Allopurinol WEITER. Wenn die Schmerzen staerker werden oder Fieber dazukommt, kommen Sie sofort vorbei.",
          feedback:
            "Genau richtig! Zu Beginn der harnsaeuresenkenden Therapie koennen Anfaelle auftreten, weil sich Kristalle aufloesen und das Immunsystem reagiert. Die Anfallsprophylaxe mit Colchicin (6 Monate!) schuetzt davor. Allopurinol absetzen wuerde den Behandlungserfolg gefaehrden.",
          isCorrect: true,
        },
        {
          text: "Das klingt nach einem Notfall. Rufen Sie den Rettungsdienst.",
          feedback:
            "Ueberreaktion. Leichte Schmerzen ohne starke Schwellung, Roetung oder Fieber sind kein Notfall. Ein Notfall waere: Fieber > 38,5 Grad Celsius + stark geschwollenes Gelenk (V.a. septische Arthritis).",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "gicht-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q6", "Q8", "Q9"],
    contentC1: {
      title: "Das Vorurteil aufbrechen",
      body: "Beim Kontrolltermin fragt Ralf: 'Ich verstehe das nicht. Ich trinke kaum Alkohol, ich bin nicht dick. Mein Kumpel wiegt 120 Kilo, trinkt jeden Tag Bier — und hat keine Gicht. Warum gerade ich?'\n\nEr wirkt frustriert und schaemt sich fuer die Diagnose. Er hat seinen Kollegen erzaehlt, er habe sich den Fuss 'verstaucht'.",
      fallbezug:
        "Ralf braucht eine Erklaerung, die sein Selbstbild nicht beschaedigt und die multifaktoriellen Ursachen verstaendlich macht.",
    },
    contentB1: {
      title: "Das Vorurteil aufbrechen",
      body: "Ralf fragt beim naechsten Arztbesuch:\n'Ich verstehe das nicht.'\n'Ich trinke kaum Alkohol.'\n'Ich bin nicht dick.'\n'Mein Kumpel wiegt 120 Kilo und trinkt jeden Tag Bier.'\n'Er hat keine Gicht.'\n'Warum gerade ich?'\n\nRalf schaemt sich.\nEr hat seinen Kollegen gesagt, er hat sich den Fuss verstaucht.\nEr will nicht sagen, dass er Gicht hat.",
    },
    question: {
      fragetext:
        "Erklaere Ralf in 3-5 Saetzen, warum ER Gicht bekommen hat — obwohl er 'doch gar nicht so lebt'. Beruecksichtige: Genetik, Medikamente, Geschlecht.",
      musterantwort:
        "Herr Schneider, Gicht hat mehrere Ursachen — und Lebensstil ist nur eine davon. Bei Ihnen spielen vor allem zwei Faktoren eine Rolle: Erstens die Vererbung — Ihr Vater und Ihr Onkel hatten auch Gicht, das bedeutet, Ihre Nieren scheiden von Natur aus weniger Harnsaeure aus. Zweitens das Blutdruckmedikament HCT — Thiazid-Diuretika bremsen die Harnsaeureausscheidung zusaetzlich. Ausserdem sind Maenner generell 3-4 Mal haeufiger betroffen als Frauen. Gicht ist keine Strafe fuer falsches Essen — es ist eine Stoffwechselerkrankung mit vielen Ursachen.",
      bewertungskriterien: [
        "Genetische Praedisposition erwaehnt (Familie)",
        "Medikamentoese Ursache benannt (HCT/Diuretika)",
        "Maennliches Geschlecht als Risikofaktor erwaehnt",
        "Vorurteil 'selbst schuld' entkraeftet",
        "Empathischer, nicht belehrender Ton",
      ],
      satzanfaengeB1: [
        "Herr Schneider, Gicht hat mehrere Gruende...",
        "Bei Ihnen ist ein wichtiger Grund...",
        "Gicht ist keine Strafe, sondern...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "gicht-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q7", "Q9"],
    contentC1: {
      title: "Was nimmst du mit?",
      body: "Ralf Schneider zeigt: Gicht ist keine 'Wohlstandskrankheit alter Saeufer'. Sie ist eine Stoffwechselerkrankung mit genetischen, medikamentoesen und ernaehrungsbedingten Ursachen. Viele Patienten schamen sich — und verschweigen ihre Diagnose.\n\nDein Praxisauftrag:\n1. Achte in der naechsten Praxisphase auf Patienten mit Gicht oder Hyperurikaemie: Welche Medikamente nehmen sie? Gibt es Diuretika?\n2. Frage dich bei jedem Gicht-Patienten: Wuerdest du davon ausgehen, dass er 'selbst schuld' ist? Welche Vorurteile traegst du selbst?\n\nZusammenfassung:\n- Harnsaeure > 6,8 mg/dl = Hyperurikaemie — Kristalle koennen ausfallen\n- 90% der Faelle: Verminderte Ausscheidung (Niere, Medikamente, Genetik)\n- Akuter Anfall: Podagra (Grosszehe), NRS 9-10, Roetung, Schwellung\n- Pflege: Ruhigstellung, Kuehlung, Deckenheber, Schmerzmessung, Fluessigkeit\n- Medikamente: Akut = Colchicin/NSAR/Kortison, Langzeit = Allopurinol (Treat-to-Target < 6 mg/dl)\n- Pseudogicht (CPPD): Andere Kristalle, grosse Gelenke, keine kausale Therapie\n- Gicht ist NICHT gleich Selbstverschulden — multifaktorielle Ursachen respektieren",
      fallbezug:
        "Ralf nimmt inzwischen Allopurinol statt HCT (Blutdruck wird mit Losartan behandelt — Losartan senkt sogar die Harnsaeure!). Nach 6 Monaten Therapie ist sein Harnsaeurewert bei 5,2 mg/dl. Keinen Anfall mehr gehabt. Er faehrt wieder Taxi.",
    },
    contentB1: {
      title: "Was nimmst du mit?",
      body: "Ralf zeigt uns: Gicht ist nicht immer selbst verschuldet.\nGicht hat viele Ursachen:\n- Vererbung (Familie)\n- Medikamente (Diuretika wie HCT)\n- Geschlecht (Maenner bekommen oefter Gicht)\n- Ernaehrung (nur ein Teil der Ursachen!)\n\nViele Patienten schamen sich fuer die Diagnose.\n\nDein Auftrag fuer die Praxis:\n1. Achte auf Patienten mit Gicht. Welche Medikamente nehmen sie?\n2. Frage dich: Habe ich Vorurteile gegen Gicht-Patienten?\n\nWas du gelernt hast:\n- Harnsaeure ueber 6,8 mg/dl = Kristalle koennen sich bilden\n- Meistens ist die Niere das Problem (nicht das Essen!)\n- Akuter Anfall: Grosser Zeh, sehr starke Schmerzen, rot und dick\n- Pflege: Ruhe, Kuehlung, Hochlagern, Schmerz messen, viel trinken\n- Medikamente: Colchicin beim Anfall, Allopurinol auf Dauer\n- Pseudogicht: Andere Kristalle, Knie, keine Heilung\n- Gicht ist NICHT immer selbst verschuldet!\n\nRalf nimmt jetzt Allopurinol.\nSein Blutdruckmedikament wurde gewechselt (Losartan statt HCT).\nEr hat keinen Anfall mehr gehabt.\nEr faehrt wieder Taxi.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Kristallarthropathie",
    erklaerung:
      "Gelenkerkrankung durch Kristallablagerungen (Harnsaeure oder Kalziumpyrophosphat)",
  },
  {
    begriff: "Harnsaeure",
    erklaerung:
      "Endprodukt des Purinstoffwechsels — wird ueber Niere und Darm ausgeschieden",
  },
  {
    begriff: "Hyperurikaemie",
    erklaerung:
      "Erhoehte Harnsaeure im Blut (> 6,8 mg/dl) — Vorstufe der Gicht",
  },
  {
    begriff: "Purine",
    erklaerung:
      "Bausteine der DNA/RNA — beim Abbau entsteht Harnsaeure. Viel in Fleisch, Innereien, Bier",
  },
  {
    begriff: "Podagra",
    erklaerung:
      "Akuter Gichtanfall am Grosszehengrundgelenk — haeufigste Erstmanifestation (60%)",
  },
  {
    begriff: "Tophus",
    erklaerung:
      "Gichtknoten — sichtbare Harnsaeure-Ablagerung unter der Haut (Ohr, Ellbogen, Finger)",
  },
  {
    begriff: "Natriumurat-Kristalle",
    erklaerung:
      "Nadelfoermige Kristalle aus Harnsaeure — loesen den Gichtanfall aus",
  },
  {
    begriff: "Pseudogicht (CPPD)",
    erklaerung:
      "Kristallarthropathie durch Kalziumpyrophosphat-Kristalle — v.a. Knie, keine kausale Therapie",
  },
  {
    begriff: "Chondrokalzinose",
    erklaerung:
      "Verkalkung des Gelenkknorpels durch CPP-Kristalle — sichtbar im Roentgen",
  },
  {
    begriff: "Colchicin",
    erklaerung:
      "Medikament gegen akuten Gichtanfall — hemmt Entzuendung, max. 6 mg pro Anfall",
  },
  {
    begriff: "Allopurinol",
    erklaerung:
      "Harnsaeuresenkender Wirkstoff (Xanthinoxidase-Hemmer) — Basistherapie bei Gicht",
  },
  {
    begriff: "Diuretika",
    erklaerung:
      "Entwaesserungsmedikamente (z.B. HCT) — koennen Harnsaeure erhoehen und Gicht ausloesen",
  },
];
