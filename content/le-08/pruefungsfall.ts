// LE-08 Pruefung-Tab: ExamCase Elisabeth Kramer — Schriftliche Pruefung (60 Min)
// Quelle: content/le-08/unterrichtsentwurf.md + I Care Pflege Kap. 18

import type { ExamCase, ExamPatient, ExamCasePhase, ContentStep } from "../_types";

const PATIENT_KRAMER: ExamPatient = {
  patientId: "pat-kramer-01",
  name: "Elisabeth Kramer",
  alter: 82,
  geschlecht: "w",
  diagnosen: ["Demenz (mittelgradig)", "Dysphagie Grad II", "Mangelernaehrung (BMI 17,8)"],
  sourceLEs: ["le-08"],
  steckbrief: "82-jaehrige Patientin mit mittelgradiger Demenz und Dysphagie Grad II. Aufnahme ins Pflegeheim nach Krankenhausaufenthalt. BMI 17,8, Gewichtsverlust 4 kg in 3 Monaten. Trinkmenge defizitaer.",
};

// === Phase 1: Aufnahme & Assessment (15 Min) ===
const PHASE_1_STEPS: ContentStep[] = [
  {
    stepId: "exam-08-p1-01",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 456-458"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "BMI-Berechnung und Bewertung",
      body: "Frau Kramer wiegt 48 kg bei 164 cm Koerpergroesse.",
    },
    contentB1: {
      title: "BMI berechnen",
      body: "Frau Kramer wiegt 48 kg. Sie ist 164 cm gross.",
    },
    question: {
      fragetext: "Wie hoch ist der BMI und wie ist er zu bewerten?",
      optionen: [
        {
          text: "BMI 17,8 — Untergewicht (Normalbereich: 18,5-24,9)",
          isCorrect: true,
          explanation: "Korrekt! BMI = 48 / (1,64 x 1,64) = 48 / 2,69 = 17,8. Werte unter 18,5 gelten als Untergewicht. Bei aelteren Menschen (ueber 65 J.) sind Werte unter 24 bereits ein Risikofaktor fuer Mangelernaehrung.",
          explanationB1: "Richtig! BMI = 48 geteilt durch (1,64 mal 1,64) = 17,8. Das ist Untergewicht (normal: 18,5-24,9).",
        },
        {
          text: "BMI 19,2 — unterer Normalbereich",
          isCorrect: false,
          explanation: "Falsch berechnet! BMI = Gewicht / (Groesse in m)². 48 / (1,64)² = 48 / 2,69 = 17,8.",
        },
        {
          text: "BMI 17,8 — Normalbereich fuer aeltere Menschen",
          isCorrect: false,
          explanation: "Der BMI ist korrekt berechnet, aber die Bewertung ist falsch. Ein BMI von 17,8 ist auch fuer aeltere Menschen Untergewicht. Erst ab 20-22 wird bei Senioren von einem akzeptablen Bereich gesprochen.",
        },
        {
          text: "BMI 29,3 — Adipositas Grad I",
          isCorrect: false,
          explanation: "Grob falsch berechnet! Sie haben wahrscheinlich Gewicht und Groesse verwechselt.",
        },
      ],
    },
  },
  {
    stepId: "exam-08-p1-02",
    phase: "s1",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 451-452"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Fluessigkeitsbedarf berechnen",
      body: "Berechnen Sie den taeglichen Fluessigkeitsbedarf von Frau Kramer (48 kg) nach der Faustformel 30-35 ml/kg Koerpergewicht.",
    },
    contentB1: {
      title: "Wie viel soll Frau Kramer trinken?",
      body: "Frau Kramer wiegt 48 kg. Rechnen Sie: 30-35 ml pro kg Koerpergewicht.",
    },
    question: {
      fragetext: "Wie hoch ist der minimale Fluessigkeitsbedarf (30 ml/kg)?",
      calculation: {
        instruction: "Berechnen Sie den minimalen Fluessigkeitsbedarf: 30 ml/kg Koerpergewicht.",
        formula: "Bedarf = 30 ml x Koerpergewicht in kg",
        correctValue: 1440,
        unit: "ml",
        tolerance: 50,
        explanation: "30 ml x 48 kg = 1.440 ml/Tag. Mit 35 ml/kg waeren es 1.680 ml/Tag. Frau Kramers aktuelle Trinkmenge von 800 ml/Tag liegt WEIT unter dem Minimum — Exsikkose-Gefahr!",
        explanationB1: "30 mal 48 = 1.440 ml pro Tag. Frau Kramer trinkt nur 800 ml — das ist viel zu wenig!",
      },
    },
  },
  {
    stepId: "exam-08-p1-03",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 459-461"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Screening-Instrument waehlen",
      body: "Sie moechten den Ernaehrungszustand von Frau Kramer systematisch erfassen.",
    },
    contentB1: {
      title: "Welchen Test benutzen Sie?",
      body: "Sie wollen den Ernaehrungs-Zustand von Frau Kramer testen.",
    },
    question: {
      fragetext: "Welches Screening-Instrument ist fuer Frau Kramer (82 J., geriatrisch) am besten geeignet?",
      optionen: [
        {
          text: "MNA (Mini Nutritional Assessment) — validiert fuer geriatrische Patienten ab 65 Jahre",
          isCorrect: true,
          explanation: "Korrekt! Das MNA ist das Standardinstrument fuer geriatrische Patienten. Es umfasst 18 Fragen in 2 Teilen: Screening (max. 14 Punkte) und Assessment (max. 16 Punkte). Unter 17 Punkten: Mangelernaehrung. Frau Kramers Score von 14/30 bestaetigt die Mangelernaehrung.",
          explanationB1: "Richtig! Der MNA-Test ist der beste Test fuer aeltere Menschen (ab 65 Jahre). Frau Kramers Ergebnis: 14 von 30 Punkten = Mangel-Ernaehrung.",
        },
        {
          text: "NRS 2002 (Nutritional Risk Screening) — Standard im Krankenhaus",
          isCorrect: false,
          explanation: "NRS 2002 ist fuer Krankenhaus-Patienten validiert, nicht primaer fuer geriatrische Langzeitpflege. Im Pflegeheim ist der MNA das Instrument der Wahl.",
        },
        {
          text: "STRONGkids — paediatrisches Screening",
          isCorrect: false,
          explanation: "STRONGkids ist fuer Kinder (1-18 Jahre) entwickelt. Fuer eine 82-Jaehrige voellig ungeeignet.",
        },
        {
          text: "SGA (Subjective Global Assessment) — allgemeines Ernaehrungsassessment",
          isCorrect: false,
          explanation: "SGA ist valide, aber weniger spezifisch fuer geriatrische Patienten als der MNA. Der MNA beruecksichtigt geriatriespezifische Faktoren (Mobilitaet, Demenz, Depression).",
        },
      ],
    },
  },
  {
    stepId: "exam-08-p1-04",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 456"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Gewichtsverlust bewerten",
      body: "Frau Kramer hat 4 kg in 3 Monaten verloren. Ihr Ausgangsgewicht betrug 52 kg.",
    },
    contentB1: {
      title: "Gewichtsverlust — ist das schlimm?",
      body: "Frau Kramer hat in 3 Monaten 4 kg abgenommen. Vorher wog sie 52 kg.",
    },
    question: {
      fragetext: "Wie bewerten Sie den Gewichtsverlust nach den Kriterien des DNQP Expertenstandards?",
      optionen: [
        {
          text: "Signifikanter Gewichtsverlust: 7,7% in 3 Monaten ueberschreitet den Grenzwert von 5% deutlich",
          isCorrect: true,
          explanation: "Korrekt! 4 kg / 52 kg = 7,7%. Der DNQP Expertenstandard Ernaehrungsmanagement definiert: >5% in 3 Monaten oder >10% in 6 Monaten = signifikanter Gewichtsverlust = Handlungsbedarf!",
          explanationB1: "Richtig! 4 geteilt durch 52 = 7,7%. Das ist mehr als 5% in 3 Monaten. Das ist ein Warnsignal!",
        },
        {
          text: "Normaler altersbedingter Gewichtsverlust, keine Intervention noetig",
          isCorrect: false,
          explanation: "Falsch! 7,7% in 3 Monaten ist kein normaler Alterungsprozess. Physiologischer Gewichtsverlust im Alter betraegt max. 1-2% pro Jahr.",
        },
        {
          text: "Leichter Gewichtsverlust von 4%, noch unter dem Grenzwert",
          isCorrect: false,
          explanation: "Rechenferror! 4 kg / 52 kg = 7,7%, nicht 4%. Der Gewichtsverlust wird als Prozent des Ausgangsgewichts berechnet.",
        },
      ],
    },
  },
];

// === Phase 2: Diagnostik & Planung (15 Min) ===
const PHASE_2_STEPS: ContentStep[] = [
  {
    stepId: "exam-08-p2-01",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 470-471"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Kostform bei Dysphagie",
      body: "Der Arzt verordnet eine Dysphagie-Kost. Sie muessen die geeignete Konsistenz bestimmen.",
    },
    contentB1: {
      title: "Welches Essen bei Schluck-Problemen?",
      body: "Der Arzt sagt: Frau Kramer braucht spezielles Essen wegen der Schluck-Probleme.",
    },
    question: {
      fragetext: "Welche IDDSI-Stufe ist fuer Dysphagie Grad II am ehesten geeignet?",
      optionen: [
        {
          text: "IDDSI Stufe 4 (pueriert/passiert) — glatte, klumpenfreie Konsistenz",
          isCorrect: true,
          explanation: "Korrekt! Bei Dysphagie Grad II (orale Phase gestoert, verzoegerter Schluckreflex) ist IDDSI Stufe 4 (Pureed/Pueriert) Standard: glatt, klumpenfrei, kein Kauen noetig. Fluessigkeiten werden auf IDDSI Stufe 2-3 angedickt.",
          explanationB1: "Richtig! Bei mittleren Schluck-Problemen (Grad II) bekommt der Patient pueriertes Essen: glatt, ohne Stuecke, muss nicht kauen.",
        },
        {
          text: "IDDSI Stufe 7 (normale Kost) mit viel Fluessigkeit zum Nachspuelen",
          isCorrect: false,
          explanation: "GEFAEHRLICH! Normale Kost bei Dysphagie Grad II fuehrt zu Aspiration. Das Nachspuelen mit Fluessigkeit verschlimmert das Problem, da duenne Fluessigkeiten bei Dysphagie besonders gefaehrlich sind.",
        },
        {
          text: "IDDSI Stufe 0 (duenne Fluessigkeit) — nur Trinknahrung",
          isCorrect: false,
          explanation: "Paradox: Duenne Fluessigkeiten (IDDSI 0) sind bei Dysphagie BESONDERS gefaehrlich, weil sie zu schnell fliessen und unkontrolliert in die Atemwege gelangen. Fluessigkeiten muessen angedickt werden!",
        },
      ],
    },
  },
  {
    stepId: "exam-08-p2-02",
    phase: "s2",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 442-448"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Naehrstoff-Zuordnung",
      body: "Ordnen Sie die folgenden Naehrstoffe der richtigen Kategorie zu.",
    },
    contentB1: {
      title: "Naehrstoffe sortieren",
      body: "Welcher Naehrstoff gehoert wohin?",
    },
    question: {
      fragetext: "Ordnen Sie die Naehrstoffe zu: Makronaehrstoffe oder Mikronaehrstoffe?",
      categories: [
        { name: "Makronaehrstoffe" },
        { name: "Mikronaehrstoffe" },
      ],
      categoryItems: [
        { text: "Kohlenhydrate (4 kcal/g)", correctCategory: 0 },
        { text: "Vitamin D", correctCategory: 1 },
        { text: "Fette (9 kcal/g)", correctCategory: 0 },
        { text: "Eisen (Fe)", correctCategory: 1 },
        { text: "Proteine (4 kcal/g)", correctCategory: 0 },
        { text: "Folsaeure", correctCategory: 1 },
        { text: "Kalzium (Ca)", correctCategory: 1 },
      ],
    },
  },
  {
    stepId: "exam-08-p2-03",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 456", "DNQP Expertenstandard Ernaehrungsmanagement"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Refeeding-Syndrom erkennen",
      body: "Frau Kramer war 2 Wochen in einem katabolen Zustand mit minimaler Nahrungsaufnahme. Der Arzt ordnet eine hochkalorische Ernaehrung an.",
    },
    contentB1: {
      title: "Gefahr bei schnellem Auffuettern",
      body: "Frau Kramer hat 2 Wochen fast nichts gegessen. Der Arzt sagt: Sie soll jetzt viel essen.",
    },
    question: {
      fragetext: "Worauf muessen Sie bei der Wiederauffuetterung besonders achten?",
      optionen: [
        {
          text: "Refeeding-Syndrom: Langsamer Kostaufbau (max. 50% des Bedarfs in den ersten Tagen), Elektrolyt-Kontrolle (K, Mg, PO4), Thiamin-Gabe",
          isCorrect: true,
          explanation: "Korrekt! Das Refeeding-Syndrom entsteht bei zu schneller Wiederauffuetterung nach laengerer Fastenphase: Insulin-Ausschuettung fuehrt zu massivem Kalium-, Magnesium- und Phosphat-Shift in die Zellen. Folge: Herzrhythmusstoerungen, Ateminsuffizienz, Tod. Prophylaxe: Langsam aufbauen, Elektrolyte kontrollieren!",
          explanationB1: "Richtig! Nach langem Hungern darf man nicht ploetzlich viel essen. Das ist gefaehrlich (Refeeding-Syndrom). Langsam anfangen, Blutwerte kontrollieren!",
        },
        {
          text: "Moeglichst schnell hochkalorische Trinknahrung geben, um das Gewicht schnell zu stabilisieren",
          isCorrect: false,
          explanation: "GEFAEHRLICH! Genau das fuehrt zum Refeeding-Syndrom. Nach laengerer Hungerphase muss die Zufuhr LANGSAM gesteigert werden (max. 10-20 kcal/kg in den ersten 1-3 Tagen).",
        },
        {
          text: "Standardkost sofort in voller Menge anbieten, der Koerper reguliert die Aufnahme selbst",
          isCorrect: false,
          explanation: "Falsch! Der Koerper kann nach Katabolismus die Naehrstoffe nicht normal verarbeiten. Die Insulin-Antwort auf ploetzliche Glukosezufuhr kann lebensbedrohliche Elektrolytverschiebungen ausloesen.",
        },
      ],
    },
  },
];

// === Phase 3: Therapie & Massnahmen (15 Min) ===
const PHASE_3_STEPS: ContentStep[] = [
  {
    stepId: "exam-08-p3-01",
    phase: "s3",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 463-465"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Stufenschema der Ernaehrungstherapie",
      body: "Ordnen Sie die Stufen der Ernaehrungstherapie nach Valentini (2013) in die korrekte Reihenfolge.",
    },
    contentB1: {
      title: "Reihenfolge: Ernaehrung verbessern",
      body: "Welche Massnahme kommt zuerst? Sortieren Sie.",
    },
    question: {
      fragetext: "Ordnen Sie das Stufenschema der Ernaehrungstherapie.",
      sequencing: {
        instruction: "Ordnen Sie die Stufen von der einfachsten zur invasivsten Massnahme.",
        items: [
          { id: "a", label: "Orale Massnahmen (Wunschkost, Essatmosphaere, Hilfestellung)" },
          { id: "b", label: "Orale Nahrungssupplementation (ONS/Trinknahrung)" },
          { id: "c", label: "Enterale Ernaehrung (Magensonde/PEG)" },
          { id: "d", label: "Parenterale Ernaehrung (ZVK)" },
        ],
      },
    },
  },
  {
    stepId: "exam-08-p3-02",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-467"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "PEG vs. Nasogastrale Sonde",
      body: "Bei Frau Kramer wird ueberlegt, ob eine Sondenanlage notwendig ist.",
    },
    contentB1: {
      title: "Welche Sonde fuer Frau Kramer?",
      body: "Frau Kramer braucht vielleicht eine Sonde. Welche?",
    },
    question: {
      fragetext: "Wann ist eine PEG gegenueber einer nasogastralen Sonde indiziert?",
      optionen: [
        {
          text: "PEG: Bei voraussichtlich laengerer Sondenernaehrung (ueber 2-4 Wochen). Nasogastrale Sonde: Kurzfristig (max. 2-4 Wochen)",
          isCorrect: true,
          explanation: "Korrekt! Die Zeitgrenze von 2-4 Wochen ist entscheidend: Nasogastrale Sonden fuehren bei laengerem Einsatz zu Druckulzera in Nase und Oesophagus. Bei Demenz kommt hinzu: NG-Sonden werden haeufig gezogen (Verwirrtheit). Eine PEG ist bei langfristigem Bedarf die bessere Option.",
          explanationB1: "Richtig! Sonde durch die Nase: nur kurz (2-4 Wochen). PEG durch den Bauch: wenn es laenger dauert. Bei Demenz zieht der Patient oft die Nasen-Sonde heraus.",
        },
        {
          text: "PEG immer, da sie besser vertragen wird und weniger Komplikationen hat",
          isCorrect: false,
          explanation: "Falsch! PEG hat eigene Komplikationen (Peritonitis, Buried Bumper, lokale Infektion) und erfordert einen invasiven Eingriff. Bei kurzfristigem Bedarf ist eine NG-Sonde weniger invasiv.",
        },
        {
          text: "Nasogastrale Sonde immer, da sie einfacher zu legen und zu entfernen ist",
          isCorrect: false,
          explanation: "Bei kurzfristigem Bedarf ja — aber bei laengerer Dauer fuehrt sie zu Komplikationen (Druckstellen, Oesophagitis) und wird von dementen Patienten haeufig gezogen.",
        },
      ],
    },
  },
  {
    stepId: "exam-08-p3-03",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 474-475"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Verbotene Trinkhilfe",
      body: "Sie suchen eine geeignete Trinkhilfe fuer Frau Kramer.",
    },
    contentB1: {
      title: "Welche Trinkhilfe?",
      body: "Sie suchen eine Trinkhilfe fuer Frau Kramer.",
    },
    question: {
      fragetext: "Welche Trinkhilfe ist bei Dysphagie VERBOTEN?",
      optionen: [
        {
          text: "Schnabelbecher — verleitet zu unkontrolliertem, schnellem Trinken und erhoeht die Aspirationsgefahr",
          isCorrect: true,
          explanation: "Korrekt! Schnabelbecher sind bei Dysphagie VERBOTEN (I Care Pflege S. 475, Merke-Box). Die schmale Oeffnung verleitet dazu, den Kopf zu ueberstrecken und unkontrolliert zu trinken. Besser: Nasenausschnittbecher oder Strohhalm — der Strohhalm gilt als beste Trinkhilfe bei Schluckstoerungen.",
          explanationB1: "Richtig! Schnabelbecher sind VERBOTEN bei Schluck-Problemen! Der Patient trinkt zu schnell und verschluckt sich. Besser: ein spezieller Becher oder Strohhalm.",
        },
        {
          text: "Strohhalm — zu starkes Saugen fuehrt zu Aspiration",
          isCorrect: false,
          explanation: "Falsch! Der Strohhalm ist laut I Care Pflege S. 475 die BESTE Trinkhilfe bei Schluckstoerungen. Er ermoeglicht kontrollierte, kleine Schlucke bei leicht nach vorne geneigtem Kopf (Chin-Tuck).",
        },
        {
          text: "Nasenausschnittbecher — die Ausschnittform ist gefaehrlich",
          isCorrect: false,
          explanation: "Falsch! Nasenausschnittbecher sind bei Dysphagie EMPFOHLEN. Durch den Nasenausschnitt kann der Patient trinken, OHNE den Kopf zu ueberstrecken.",
        },
      ],
    },
  },
];

// === Phase 4: Ethik & Stellungnahme (15 Min) ===
const PHASE_4_STEPS: ContentStep[] = [
  {
    stepId: "exam-08-p4-01",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 467-469", "BGB § 1901a"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "PEG-Einwilligung bei Demenz",
      body: "Nach 4 Wochen verschlechtert sich Frau Kramers Zustand. Der Arzt schlaegt eine PEG-Anlage vor. Frau Kramer kann aufgrund ihrer Demenz nicht mehr einwilligen.",
    },
    contentB1: {
      title: "Wer entscheidet ueber die Sonde?",
      body: "Frau Kramer wird schlechter. Der Arzt will eine Sonde (PEG) legen. Frau Kramer kann nicht selbst entscheiden (Demenz).",
    },
    question: {
      fragetext: "Wer muss in die PEG-Anlage einwilligen, wenn Frau Kramer nicht einwilligungsfaehig ist?",
      optionen: [
        {
          text: "Der gesetzliche Betreuer bzw. Bevollmaechtigte entscheidet auf Grundlage des mutmasslichen Patientenwillens bzw. der Patientenverfuegung (§ 1901a BGB)",
          isCorrect: true,
          explanation: "Korrekt! Bei Einwilligungsunfaehigkeit entscheidet der rechtliche Betreuer bzw. Vorsorgebevollmaechtigte. Grundlage: 1) Patientenverfuegung (wenn vorhanden), 2) mutmasslicher Wille (fruehere Aeusserungen, Werte, Lebenseinstellung). Liegt keine Patientenverfuegung vor und ist der mutmassliche Wille unklar, kann das Betreuungsgericht eingeschaltet werden.",
          explanationB1: "Richtig! Wenn der Patient nicht selbst entscheiden kann, entscheidet der gesetzliche Betreuer. Er fragt: Was haette Frau Kramer gewollt? Gibt es eine Patientenverfuegung?",
        },
        {
          text: "Der behandelnde Arzt entscheidet allein auf Basis der medizinischen Indikation",
          isCorrect: false,
          explanation: "Falsch! Der Arzt stellt die medizinische Indikation, aber die Einwilligung muss vom Patienten oder seinem Vertreter kommen. Arzt + Betreuer entscheiden gemeinsam.",
        },
        {
          text: "Die Pflegefachkraft entscheidet, da sie den engsten Kontakt zum Patienten hat",
          isCorrect: false,
          explanation: "Falsch! Pflegefachkraefte haben wichtiges Beobachtungswissen und sollten gehoert werden, aber die Einwilligungsbefugnis liegt beim Betreuer/Bevollmaechtigten.",
        },
        {
          text: "Die naechsten Angehoerigen koennen automatisch entscheiden",
          isCorrect: false,
          explanation: "Falsch! Angehoerige haben KEIN automatisches Entscheidungsrecht. Sie koennen nur entscheiden, wenn sie als Betreuer bestellt sind oder eine Vorsorgevollmacht vorliegt.",
        },
      ],
    },
  },
  {
    stepId: "exam-08-p4-02",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 467-469"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Evidenz: PEG bei fortgeschrittener Demenz",
      body: "Im Team wird diskutiert, ob eine PEG bei fortgeschrittener Demenz sinnvoll ist.",
    },
    contentB1: {
      title: "Hilft eine Sonde bei schwerer Demenz?",
      body: "Das Team fragt: Ist eine Sonde bei schwerer Demenz gut?",
    },
    question: {
      fragetext: "Was zeigt die aktuelle Evidenz zur PEG bei fortgeschrittener Demenz?",
      optionen: [
        {
          text: "Keine Evidenz fuer Lebensverlaengerung. Hoehere Komplikationsrate (Aspiration trotz PEG, Fixierungsbedarf). Orale Comfort-Feeding-Strategie ist ethisch und medizinisch gleichwertig.",
          isCorrect: true,
          explanation: "Korrekt! Mehrere Cochrane-Reviews zeigen: PEG bei fortgeschrittener Demenz verlaengert weder das Leben noch verbessert sie die Lebensqualitaet. Die Aspirationsrate sinkt NICHT (Reflux!). Comfort Feeding (orale Lustfuetterung mit passierten Lieblingsspeisen) ist die empfohlene Alternative.",
          explanationB1: "Richtig! Studien zeigen: Eine Sonde bei schwerer Demenz macht das Leben nicht laenger. Der Patient kann sich trotzdem verschlucken. Besser: Kleine Mengen Lieblings-Essen geben.",
        },
        {
          text: "PEG verlaengert das Leben um durchschnittlich 6-12 Monate und ist daher immer indiziert",
          isCorrect: false,
          explanation: "Falsch! Die Studien zeigen KEINE signifikante Lebensverlaengerung durch PEG bei fortgeschrittener Demenz. Im Gegenteil: die Komplikationsrate ist erhoerht.",
        },
        {
          text: "Es gibt keine Studien zu diesem Thema, daher Entscheidung nach klinischem Ermessen",
          isCorrect: false,
          explanation: "Falsch! Es gibt zahlreiche Studien und Cochrane-Reviews zu diesem Thema. Die Evidenz ist eindeutig: kein Benefit bei fortgeschrittener Demenz.",
        },
      ],
    },
  },
  {
    stepId: "exam-08-p4-03",
    phase: "s4",
    stepType: "reflection",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 467-469", "BGB § 1901a"],
    track: "basis",
    tag: "pflege",
    contentC1: {
      title: "Ethische Stellungnahme: PEG bei Frau Kramer",
      body: "Verfassen Sie eine kurze Stellungnahme fuer die ethische Fallbesprechung. Beruecksichtigen Sie: Medizinische Indikation, mutmasslicher Wille, Lebensqualitaet, Alternativen.",
    },
    contentB1: {
      title: "Ihre Meinung: Sonde fuer Frau Kramer?",
      body: "Schreiben Sie Ihre Meinung: Soll Frau Kramer eine Sonde bekommen? Begruenden Sie.",
    },
    question: {
      fragetext: "Schreiben Sie Ihre Stellungnahme fuer die ethische Fallbesprechung.",
      reflection: {
        prompt: "Stellungnahme: Soll bei Elisabeth Kramer eine PEG angelegt werden? Begruenden Sie Ihre Position.",
        placeholder: "In der ethischen Fallbesprechung vertrete ich die Position, dass...\nBegruendung 1: ...\nBegruendung 2: ...\nAlternative: ...",
        systemPrompt: "Bewerte die ethische Stellungnahme. Erwarte: Abwaegung Pro/Contra PEG, Bezug auf Evidenz (keine Lebensverlaengerung bei fortgeschrittener Demenz), Einbezug mutmasslicher Wille/Patientenverfuegung, Nennung von Alternativen (Comfort Feeding, Geschmackstupfer, basale Stimulation). Bonus: Differenzierung zwischen Kramers aktuellem Zustand (mittelgradige Demenz, noch Rehabilitationspotenzial) und genereller Evidenzlage.",
      },
    },
  },
];

export const LE08_PRUEFUNGSFALL: ExamCase = {
  caseId: "exam-le08-kramer",
  patient: PATIENT_KRAMER,
  titel: "Ernaehrungsmanagement bei Elisabeth Kramer",
  schwierigkeit: "mittel",
  sourceLEs: ["le-08"],
  bloomRange: [3, 5],
  zeitLimitMinuten: 60,
  phasen: [
    {
      phaseId: "phase-1",
      zeitpunkt: "Tag 1: Aufnahme",
      kontext: "Elisabeth Kramer wird ins Pflegeheim aufgenommen. Sie ist 82 Jahre alt, hat eine mittelgradige Demenz und eine Dysphagie Grad II. BMI 17,8, Gewichtsverlust 4 kg in 3 Monaten.",
      kontextB1: "Frau Kramer kommt ins Pflegeheim. Sie ist 82 Jahre alt, hat Demenz und Schluck-Probleme. Sie ist zu duenn und hat viel Gewicht verloren.",
      sourceLE: "le-08",
      steps: PHASE_1_STEPS,
    },
    {
      phaseId: "phase-2",
      zeitpunkt: "Woche 1: Diagnostik",
      kontext: "Die Assessments sind abgeschlossen. MNA 14/30 bestaetigt Mangelernaehrung. Die Kostform muss festgelegt und ein Ernaehrungsplan erstellt werden.",
      kontextB1: "Die Tests sind fertig. Frau Kramer hat Mangel-Ernaehrung. Sie braucht einen Ernaehrungsplan.",
      sourceLE: "le-08",
      steps: PHASE_2_STEPS,
    },
    {
      phaseId: "phase-3",
      zeitpunkt: "Woche 2-4: Therapie",
      kontext: "Trotz oraler Massnahmen nimmt Frau Kramer weiter ab. Das Team diskutiert die naechsten Schritte: Trinknahrung, Sondenanlage?",
      kontextB1: "Frau Kramer nimmt trotz Hilfe weiter ab. Was tun? Trinknahrung? Sonde?",
      sourceLE: "le-08",
      steps: PHASE_3_STEPS,
    },
    {
      phaseId: "phase-4",
      zeitpunkt: "Monat 2: Ethische Entscheidung",
      kontext: "Die Demenz schreitet fort. Eine PEG-Anlage wird diskutiert. Die ethische Fallbesprechung steht an.",
      kontextB1: "Die Demenz wird schlimmer. Das Team ueberlegt: Soll Frau Kramer eine Sonde bekommen?",
      sourceLE: "le-08",
      steps: PHASE_4_STEPS,
    },
  ],
};
