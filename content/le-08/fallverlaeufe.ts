// LE-08 Fall-Tab: Patientenverlauf-Daten — 3 Fälle komplett
// Quelle: Unterrichtsentwurf LE-08, I Care Pflege Kap. 18

import type { Fallverlauf, ContentStep } from "../_types";
import { getPatient } from "../_patients";

// === FALL 1: Elisabeth Kramer — 5 Stationen ===

const KRAMER_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall01-st01-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Aufnahme: Elisabeth Kramer",
      body: "Elisabeth Kramer, 42 Jahre, wird auf die neurologische Station aufgenommen. Diagnose: Multiple Sklerose (schubförmig-remittierend), aktueller Schub mit zunehmenden Schluckbeschwerden seit 3 Wochen.\n\nBei der Aufnahme fällt dir auf: BMI 17,8 (Untergewicht), Gewichtsverlust von 6 kg in den letzten 3 Monaten. Frau Kramer wirkt erschöpft und gibt an, sie traue sich kaum noch zu essen, weil sie sich ständig verschlucke.",
    },
    contentB1: {
      title: "Aufnahme: Elisabeth Kramer",
      body: "Elisabeth Kramer kommt auf die Station. Sie ist 42 Jahre alt.\nSie hat Multiple Sklerose (MS).\nSeit 3 Wochen hat sie Probleme beim Schlucken.\n\nDu siehst: Sie ist sehr dünn (BMI 17,8).\nSie hat 6 kg in 3 Monaten abgenommen.\nSie sagt: 'Ich habe Angst vor dem Essen, weil ich mich immer verschlucke.'",
    },
  },
  {
    stepId: "le08-fall01-st01-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 459-461", "DNQP 2017a"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-assessments",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Welches Assessment zuerst?",
      body: "Du musst den Ernährungszustand von Frau Kramer systematisch erfassen. Welches Assessment-Instrument setzt du als Erstes ein?",
    },
    contentB1: {
      title: "Welches Assessment zuerst?",
      body: "Du willst wissen, wie schlecht Frau Kramer ernährt ist. Welches Instrument benutzt du zuerst?",
    },
    question: {
      fragetext: "Welches Screening-Instrument ist im Krankenhaus-Setting als Erstes indiziert?",
      optionen: [
        {
          text: "NRS 2002 (Nutritional Risk Screening)",
          isCorrect: true,
          explanation: "Der NRS 2002 ist das Standardscreening im Krankenhaus (DNQP-Empfehlung). Er erfasst Ernährungszustand UND Krankheitsschwere und ist in wenigen Minuten durchführbar.",
          explanationB1: "Der NRS 2002 ist das richtige Instrument im Krankenhaus. Er ist schnell und prüft beides: Ernährung und Krankheit.",
        },
        {
          text: "MNA (Mini Nutritional Assessment)",
          isCorrect: false,
          explanation: "Der MNA ist primär für geriatrische Patienten (>65 Jahre) konzipiert. Frau Kramer ist 42 — hier ist der NRS 2002 das Screening der Wahl.",
          explanationB1: "Der MNA ist für ältere Menschen (über 65). Frau Kramer ist 42 Jahre alt. Deshalb ist der NRS 2002 besser.",
        },
        {
          text: "MUST (Malnutrition Universal Screening Tool)",
          isCorrect: false,
          explanation: "MUST wird v. a. im ambulanten Setting eingesetzt. Im Krankenhaus ist NRS 2002 der Standard nach DNQP-Expertenstandard.",
          explanationB1: "MUST benutzt man mehr in der ambulanten Pflege. Im Krankenhaus ist der NRS 2002 der Standard.",
        },
        {
          text: "Nur BMI berechnen",
          isCorrect: false,
          explanation: "Der BMI allein reicht nicht! Er erfasst nicht den Gewichtsverlauf und ist bei Ödemen, Amputationen oder Dehydratation verfälscht. Ein validiertes Screening-Instrument ist Pflicht.",
          explanationB1: "Der BMI allein ist nicht genug. Er zeigt nicht, ob jemand in letzter Zeit abgenommen hat. Man braucht ein richtiges Instrument.",
        },
      ],
    },
  },
  {
    stepId: "le08-fall01-st01-03",
    phase: "s1",
    stepType: "calculation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 459"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-assessments",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "BMI berechnen",
      body: "Frau Kramer ist 1,68 m groß und wiegt 50,3 kg. Berechne ihren BMI.",
      fallbezug: "Elisabeth Kramer wurde gerade aufgenommen. Du brauchst den BMI als Basis-Parameter.",
    },
    contentB1: {
      title: "BMI berechnen",
      body: "Frau Kramer ist 1,68 m groß und wiegt 50,3 kg.\nBerechne den BMI.",
      fallbezug: "Du brauchst den BMI von Frau Kramer.",
    },
    question: {
      fragetext: "Berechne den BMI von Frau Kramer.",
      instruction: "Berechne den BMI. Formel: Gewicht (kg) / Größe (m) zum Quadrat. Runde auf eine Dezimalstelle.",
      formula: "BMI = 50,3 / (1,68 x 1,68)",
      correctValue: 17.8,
      unit: "kg/m\u00B2",
      tolerance: 0.2,
      explanation: "BMI = 50,3 / (1,68)² = 50,3 / 2,8224 = 17,8 kg/m². Das liegt unter 18,5 und bedeutet Untergewicht. In Kombination mit dem Gewichtsverlust von 6 kg in 3 Monaten ein deutliches Zeichen für Mangelernährung.",
      explanationB1: "BMI = 50,3 geteilt durch (1,68 mal 1,68) = 17,8. Das ist unter 18,5 = Untergewicht. Zusammen mit 6 kg Gewichtsverlust ist das Mangelernährung.",
    },
  },
  {
    stepId: "le08-fall01-st01-04",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 408-411"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-mangelernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Mangelernährung erkennen",
      body: "Beurteile die folgenden Aussagen zu Frau Kramers Situation.",
    },
    contentB1: {
      title: "Mangelernährung erkennen",
      body: "Sind diese Aussagen richtig oder falsch?",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      statement: "Frau Kramer kann nicht mangelernährt sein, solange sie noch selbstständig essen kann.",
      isCorrect: false,
      explanation: "Falsch! Mangelernährung kann auch bei selbstständig essenden Menschen vorliegen. Frau Kramer isst zwar selbstständig, aber durch die Dysphagie nimmt sie deutlich weniger zu sich als sie braucht. BMI 17,8 + 6 kg Verlust = klare Mangelernährung nach DNQP-Definition.",
      explanationB1: "Das ist falsch! Auch wenn jemand alleine essen kann, kann er mangelernährt sein. Frau Kramer isst zu wenig, weil sie Angst vor dem Verschlucken hat.",
    },
  },
];

const KRAMER_ST2_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall01-st02-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 455-456"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "SZENE",
    tag: "krankheitslehre",
    contentC1: {
      title: "Schluckdiagnostik: FEES-Befund",
      body: "Zwei Tage später liegt der FEES-Befund (Fiberoptische Endoskopische Evaluation des Schluckens) vor: Dysphagie Grad 2 — pharyngeale Phase gestört, Penetration bei dünnflüssigen Getränken, kein Aspirat nachweisbar.\n\nDie Logopädin empfiehlt: Kostanpassung auf weiche Kost, alle Getränke andicken (Stufe 1: 'leicht dickflüssig').\n\nFrage an dich: Welche Konsistenz ist jetzt die richtige?",
    },
    contentB1: {
      title: "Ergebnis der Schluck-Untersuchung",
      body: "Die Ärzte haben Frau Kramers Schlucken untersucht.\nErgebnis: Schluckstörung Stufe 2.\nBeim Trinken kommt Flüssigkeit in den falschen Kanal.\n\nDie Logopädin sagt:\n- Nur weiches Essen\n- Alle Getränke andicken (leicht dickflüssig)\n\nWas bedeutet das für die Pflege?",
    },
  },
  {
    stepId: "le08-fall01-st02-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 475"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-dysphagie",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Trinkhilfe für Frau Kramer",
      body: "Frau Kramer braucht eine geeignete Trinkhilfe. Was empfiehlst du?",
    },
    contentB1: {
      title: "Die richtige Trinkhilfe",
      body: "Frau Kramer braucht Hilfe beim Trinken. Was ist am besten?",
    },
    question: {
      fragetext: "Welche Trinkhilfe ist für Frau Kramer am besten geeignet?",
      optionen: [
        {
          text: "Strohhalm mit angedicktem Getränk",
          isCorrect: true,
          explanation: "Der Strohhalm ist die beste Trinkhilfe — auch bei Dysphagie. Er erlaubt eine kontrollierte Flüssigkeitsaufnahme und erfordert keine Kopfüberstreckung. Zusammen mit dem angedickten Getränk die sicherste Lösung.",
          explanationB1: "Der Strohhalm ist am besten. Man muss den Kopf nicht nach hinten legen. Mit angedicktem Getränk ist es am sichersten.",
        },
        {
          text: "Schnabelbecher",
          isCorrect: false,
          explanation: "Der Schnabelbecher erzwingt eine Kopfüberstreckung und erhöht damit die Aspirationsgefahr erheblich! Er sollte bei Dysphagie NICHT verwendet werden.",
          explanationB1: "Der Schnabelbecher ist schlecht! Man muss den Kopf nach hinten legen. Dann kann man sich leichter verschlucken.",
        },
        {
          text: "Normales Glas ohne Hilfsmittel",
          isCorrect: false,
          explanation: "Ohne Hilfsmittel besteht die Gefahr, dass Frau Kramer zu schnell und zu viel Flüssigkeit aufnimmt. Bei Dysphagie Grad 2 braucht sie kontrollierte, kleine Schlucke.",
          explanationB1: "Ein normales Glas ist zu schwer zu kontrollieren. Frau Kramer trinkt dann zu schnell und verschluckt sich.",
        },
      ],
    },
  },
];

const KRAMER_ST3_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall01-st03-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 470-475"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-kostformen",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Frau Kramer lehnt ab",
      body: "Woche 2: Die Andickungsmittel verändern Geschmack und Konsistenz der Getränke. Frau Kramer trinkt immer weniger. 'Das schmeckt scheußlich, wie Tapetenkleister. Ich trinke lieber gar nichts.'\n\nDie Flüssigkeitsbilanz zeigt: Einfuhr gestern nur 800 ml (Bedarf: ca. 1.750 ml). Die Zunge ist trocken, der Urin konzentriert.\n\nDu musst Alternativen finden.",
    },
    contentB1: {
      title: "Frau Kramer will nicht mehr trinken",
      body: "2 Wochen später: Die angedickten Getränke schmecken nicht.\nFrau Kramer sagt: 'Das schmeckt wie Kleister. Ich trinke lieber nichts.'\n\nSie trinkt nur noch 800 ml am Tag.\nSie braucht aber ungefähr 1.750 ml.\nIhre Zunge ist trocken. Der Urin ist dunkel.\n\nDu musst eine Lösung finden.",
    },
  },
];

// Station 4: PEG-Entscheidung
const KRAMER_ST4_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall01-st04-01",
    phase: "s2",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Das Gewicht sinkt weiter",
      body: "Monat 1: Trotz Trinknahrung und angepasster Kost wiegt Frau Kramer nur noch 47 kg (BMI 16,7). Sie hatte zwei Aspirationspneumonien in den letzten 2 Wochen. Der behandelnde Neurologe und die Logopädin empfehlen eine PEG-Anlage.\n\nFrau Kramer ist unsicher: 'Eine Sonde? Bin ich dann an eine Maschine angeschlossen?' Ihre Schwester ist dagegen: 'Das ist doch kein Leben mehr!'",
    },
    contentB1: {
      title: "Frau Kramer nimmt weiter ab",
      body: "Nach 1 Monat: Frau Kramer wiegt nur noch 47 kg.\nSie hatte zweimal eine Lungenentzündung durch Verschlucken.\n\nDer Arzt sagt: Wir sollten eine PEG-Sonde legen.\nDas ist ein Schlauch durch die Bauchdecke in den Magen.\n\nFrau Kramer hat Angst.\nIhre Schwester sagt: 'Das will ich nicht für sie!'",
    },
  },
  {
    stepId: "le08-fall01-st04-02",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "PEG oder Magensonde?",
      body: "Wann ist eine PEG indiziert und wann eine nasogastrale Sonde?",
    },
    contentB1: {
      title: "PEG oder Magensonde?",
      body: "Wann braucht man welche Sonde?",
    },
    question: {
      fragetext: "Warum wird bei Frau Kramer eine PEG empfohlen und nicht eine nasogastrale Sonde?",
      optionen: [
        {
          text: "Die Ernährung wird voraussichtlich länger als 4 Wochen nötig sein",
          isCorrect: true,
          explanation: "Eine nasogastrale Sonde ist eine Kurzzeit-Lösung (max. 2–4 Wochen). Da Frau Kramers Dysphagie durch die MS chronisch ist, braucht sie eine Langzeitlösung — die PEG.",
          explanationB1: "Die Magensonde durch die Nase ist nur für kurze Zeit (2–4 Wochen). Frau Kramer braucht die Sonde wahrscheinlich viel länger. Deshalb PEG.",
        },
        {
          text: "Frau Kramer hat eine Allergie gegen Nasensonden",
          isCorrect: false,
          explanation: "Das wäre zwar eine Kontraindikation, ist aber hier nicht der Fall. Der Hauptgrund für die PEG ist die voraussichtliche Langzeitdauer.",
        },
        {
          text: "Eine PEG ist weniger invasiv als eine Magensonde",
          isCorrect: false,
          explanation: "Das Gegenteil ist richtig: Die PEG-Anlage ist ein invasiver Eingriff unter Endoskopie. Eine Magensonde ist weniger invasiv. Der Vorteil der PEG liegt in der Langzeittauglichkeit.",
        },
      ],
    },
  },
  {
    stepId: "le08-fall01-st04-03",
    phase: "s2",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179", "DNQP 2017a"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Ethische Fallbesprechung",
      body: "Du bereitest die ethische Fallbesprechung vor. Frau Kramer ist einwilligungsfähig. Ihre Schwester ist dagegen. Wie gehst du vor?",
    },
    contentB1: {
      title: "Wer entscheidet?",
      body: "Frau Kramer kann selbst entscheiden. Ihre Schwester ist dagegen. Was machst du?",
    },
    question: {
      fragetext: "Wie gehst du mit der Situation um?",
      branchingOptions: [
        {
          text: "Frau Kramer selbst entscheiden lassen — sie ist einwilligungsfähig, ihre Schwester hat kein Vetorecht",
          feedback: "Genau richtig! Frau Kramer ist einwilligungsfähig. Sie allein entscheidet über medizinische Eingriffe an ihrem Körper. Die Schwester hat kein Mitspracherecht, kann aber in die Aufklärung einbezogen werden — wenn Frau Kramer das wünscht.",
          feedbackB1: "Richtig! Frau Kramer entscheidet selbst. Sie ist klar im Kopf. Ihre Schwester darf nicht für sie entscheiden.",
          isCorrect: true,
        },
        {
          text: "Die Schwester überstimmen und die PEG trotzdem legen lassen",
          feedback: "Der Grundgedanke ist richtig (Patientenautonomie), aber die Formulierung 'trotzdem legen lassen' klingt bevormundend. Die PEG kann nur gelegt werden, wenn Frau Kramer selbst zustimmt. Die Schwester wird nicht 'überstimmt', sie hat einfach kein Entscheidungsrecht.",
          feedbackB1: "Nicht ganz richtig. Niemand wird überstimmt. Nur Frau Kramer entscheidet. Die Schwester hat kein Recht mitzubestimmen.",
          isCorrect: false,
        },
        {
          text: "Abwarten, bis sich Schwester und Patientin einig sind",
          feedback: "Das wäre aus medizinischer Sicht gefährlich — Frau Kramer verliert weiter Gewicht und hatte bereits Aspirationspneumonien. Harmonie in der Familie ist wünschenswert, aber nicht auf Kosten der Gesundheit. Die Entscheidung liegt bei Frau Kramer allein.",
          feedbackB1: "Das ist zu gefährlich. Frau Kramer nimmt weiter ab. Man kann nicht warten. Sie muss selbst entscheiden.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "le08-fall01-st04-04",
    phase: "s2",
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Stellungnahme formulieren",
      body: "Formuliere eine kurze Stellungnahme für die ethische Fallbesprechung: Warum empfiehlst du die PEG-Anlage bei Frau Kramer? Berücksichtige: medizinische Indikation, Patientenwille, Lebensqualität.",
    },
    contentB1: {
      title: "Deine Meinung aufschreiben",
      body: "Schreibe auf: Warum soll Frau Kramer eine PEG bekommen?\nDenke an: Gesundheit, was Frau Kramer selbst will, Lebensqualität.",
    },
    question: {
      fragetext: "Formuliere deine Stellungnahme für die ethische Fallbesprechung.",
      musterantwort: "Frau Kramer hat eine fortschreitende Dysphagie mit rezidivierenden Aspirationspneumonien und einem BMI von 16,7. Die orale Ernährung reicht trotz Anpassung nicht aus. Die PEG-Anlage ist medizinisch indiziert, um die Mangelernährung zu behandeln und weitere Aspirationspneumonien zu verhindern. Frau Kramer ist einwilligungsfähig und muss nach umfassender Aufklärung selbst entscheiden. Eine PEG schließt orale Kostproben nicht aus — parallel kann unter logopädischer Anleitung oral ernährt werden.",
      bewertungskriterien: [
        "Medizinische Indikation genannt (Mangelernährung, Aspirationspneumonie)",
        "Patientenautonomie betont",
        "PEG als Ergänzung, nicht als Ersatz für orale Ernährung",
      ],
    },
  },
];

// Station 5: Entlassung
const KRAMER_ST5_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall01-st05-01",
    phase: "s3",
    stepType: "text",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "PEG-Stabilisierung",
      body: "Monat 3: Die PEG liegt seit 6 Wochen. Frau Kramer hat 2 kg zugenommen (BMI 17,4). Die Einstichstelle ist reizlos. Sie erhält 1.500 ml Sondennahrung pro Tag (1,5 kcal/ml) plus kleine orale Kostproben (angedickte Getränke, pürierte Kost) unter logopädischer Anleitung.\n\nJetzt steht die Entlassung an. Frau Kramers Schwester wird sie zu Hause unterstützen.",
    },
    contentB1: {
      title: "Frau Kramer hat zugenommen",
      body: "3 Monate später: Die Sonde ist seit 6 Wochen da.\nFrau Kramer hat 2 kg zugenommen.\nDie Stelle am Bauch sieht gut aus.\nSie bekommt Nahrung über die Sonde UND darf etwas essen (püriert).\n\nJetzt soll sie nach Hause.",
    },
  },
  {
    stepId: "le08-fall01-st05-02",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "PEG-Pflege zu Hause",
      body: "Was muss Frau Kramers Schwester über die PEG-Pflege wissen?",
    },
    contentB1: {
      title: "PEG-Pflege zu Hause",
      body: "Was muss die Schwester über die Sonde wissen?",
    },
    question: {
      fragetext: "Welche Anleitung ist für die Schwester am wichtigsten?",
      optionen: [
        {
          text: "Sonde vor und nach jeder Gabe mit 30–50 ml Wasser spülen, Einstichstelle täglich inspizieren",
          isCorrect: true,
          explanation: "Das Spülen verhindert Verstopfung der Sonde, die tägliche Inspektion der Einstichstelle erkennt frühzeitig Infektionszeichen (Rötung, Schwellung, Sekret). Beides ist die Basis der PEG-Pflege zu Hause.",
          explanationB1: "Richtig! Immer spülen (sonst verstopft die Sonde). Und jeden Tag die Stelle am Bauch anschauen — ist sie rot oder geschwollen?",
        },
        {
          text: "Die Sonde muss alle 2 Tage gewechselt werden",
          isCorrect: false,
          explanation: "Eine PEG wird nicht alle 2 Tage gewechselt! Der erste Wechsel erfolgt frühestens nach 4–6 Wochen, danach je nach Produkt alle 3–6 Monate durch den Arzt.",
          explanationB1: "Falsch! Die PEG bleibt mehrere Monate drin. Nur der Arzt wechselt sie.",
        },
        {
          text: "Frau Kramer darf gar nichts mehr oral zu sich nehmen",
          isCorrect: false,
          explanation: "Falsch! Frau Kramer darf unter logopädischer Anleitung orale Kostproben zu sich nehmen. Eine PEG bedeutet nicht automatisch ein Verbot der oralen Nahrungsaufnahme.",
          explanationB1: "Falsch! Frau Kramer darf trotz PEG etwas essen — wenn die Logopädin es erlaubt.",
        },
      ],
    },
  },
  {
    stepId: "le08-fall01-st05-03",
    phase: "s3",
    stepType: "careplan",
    bloomLevel: 5,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468", "DNQP 2017a"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "PFLEGEPLANUNG",
    tag: "pflege",
    contentC1: {
      title: "Entlass-Pflegeplan",
      body: "Erstelle einen Entlass-Pflegeplan für Frau Kramer. Die Schwester wird angeleitet, der ambulante Pflegedienst übernimmt die PEG-Pflege.",
    },
    contentB1: {
      title: "Pflegeplan für zu Hause",
      body: "Schreibe einen Pflegeplan für Frau Kramer.\nWas muss zu Hause gemacht werden?",
    },
    question: {
      fragetext: "Erstelle den Pflegeplan.",
      careplan: {
        patientName: "Elisabeth Kramer",
        situation: "42 J., MS mit Dysphagie Grad 2, PEG seit 6 Wochen, BMI 17,4, Entlassung nach Hause mit Schwester als Bezugsperson",
        situationB1: "42 Jahre, MS, Schluckstörung, Sonde seit 6 Wochen, wird nach Hause entlassen",
        steps: [
          {
            phase: "problem",
            prompt: "Welches Pflegeproblem steht im Vordergrund?",
            promptB1: "Was ist das Hauptproblem?",
            options: [
              { text: "Mangelernährung bei Dysphagie, PEG-Versorgung im häuslichen Umfeld", isCorrect: true, explanation: "Die Kombination aus Mangelernährung und PEG-Pflege ist das zentrale Problem bei der Entlassung." },
              { text: "Sturzgefahr", isCorrect: false, explanation: "Sturzgefahr ist bei MS möglich, aber nicht das Hauptproblem im Kontext der Ernährungs-LE." },
            ],
          },
          {
            phase: "ziel",
            prompt: "Formuliere das Pflegeziel.",
            promptB1: "Was soll erreicht werden?",
            musterantwort: "Frau Kramer erhält eine bedarfsdeckende Ernährung über die PEG-Sonde bei komplikationsloser Einstichstelle. Gewicht stabilisiert sich bei ≥48 kg. Orale Kostproben werden unter logopädischer Anleitung fortgesetzt.",
          },
          {
            phase: "massnahme",
            prompt: "Welche Maßnahmen planst du?",
            promptB1: "Was muss gemacht werden?",
            musterantwort: "1. Ambulanter Pflegedienst: PEG-Pflege 1×/Tag, Sondenkost 3×/Tag je 500 ml\n2. Schwester: Anleitung zur Sondenkost-Gabe (Spülen, Bolus-Technik, Lagerung)\n3. Logopädie: 2×/Woche ambulant, orale Kostproben anleiten\n4. Ernährungsberatung: Kontrolltermin in 4 Wochen\n5. Gewichtskontrolle: 1×/Woche durch Pflegedienst",
          },
        ],
      },
    },
  },
];

// === FALL 2: Baby Emre — 3 Stationen ===

const EMRE_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall02-st01-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453-454", "I Care Pflege S. 456"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Aufnahme: Baby Emre",
      body: "Emre Demir, 6 Monate, wird mit seiner Mutter Ayşe (26) in der Kinderklinik aufgenommen. Die Kinderärztin hat überwiesen: Gewicht 5.800 g — das liegt unter der 3. Perzentile. Emre trinkt schwach an der Brust, Mutter ist verunsichert.\n\nAyşe spricht Deutsch auf B1-Niveau. Sie sagt: 'Er trinkt und trinkt, aber er wird nicht dicker. Meine Schwiegermutter sagt, ich soll ihm Honig geben.'",
    },
    contentB1: {
      title: "Aufnahme: Baby Emre",
      body: "Baby Emre ist 6 Monate alt und wiegt nur 5.800 Gramm.\nDas ist zu wenig für sein Alter.\nSeine Mutter Ayşe stillt ihn, aber er wird nicht schwerer.\n\nAyşe sagt: 'Meine Schwiegermutter sagt, ich soll ihm Honig geben.'\nDas ist ein Problem — warum?",
    },
  },
  {
    stepId: "le08-fall02-st01-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Pädiatrisches Assessment",
      body: "Welches Assessment-Instrument verwendest du bei Baby Emre?",
    },
    contentB1: {
      title: "Welches Instrument für Babys?",
      body: "Wie prüfst du, ob Emre zu wenig Nahrung bekommt?",
    },
    question: {
      fragetext: "Welches Screening-Instrument ist bei einem 6 Monate alten Säugling im Krankenhaus geeignet?",
      optionen: [
        {
          text: "STRONGkids (Screening Tool for Risk on Nutritional Status and Growth)",
          isCorrect: true,
          explanation: "STRONGkids ist das Standardscreening für Kinder (1–18 J.) im Krankenhaus. Es ist schnell durchführbar (4 Fragen) und nutzt Perzentilenkurven zur Beurteilung.",
          explanationB1: "STRONGkids ist der richtige Test für Kinder im Krankenhaus. Er hat 4 einfache Fragen.",
        },
        {
          text: "NRS 2002",
          isCorrect: false,
          explanation: "NRS 2002 ist für Erwachsene im Krankenhaus konzipiert, nicht für Säuglinge. Für Kinder braucht man spezielle pädiatrische Instrumente.",
          explanationB1: "NRS 2002 ist für Erwachsene. Für Babys braucht man ein anderes Instrument.",
        },
        {
          text: "MNA",
          isCorrect: false,
          explanation: "MNA ist für geriatrische Patienten (>65 Jahre). Für Säuglinge völlig ungeeignet.",
          explanationB1: "MNA ist für alte Menschen. Für Babys gibt es andere Tests.",
        },
      ],
    },
  },
  {
    stepId: "le08-fall02-st01-03",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 456"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Perzentile ablesen",
      body: "Emre wiegt 5.800 g mit 6 Monaten. Die 3. Perzentile für Jungen liegt bei ca. 6.200 g, die 50. Perzentile bei ca. 7.900 g. Was bedeutet das?",
    },
    contentB1: {
      title: "Was sagt die Wachstumskurve?",
      body: "Emre wiegt 5.800 g. Normal für 6 Monate: ca. 7.900 g.\nDie unterste Linie (3. Perzentile): 6.200 g.\nEmre ist darunter. Was bedeutet das?",
    },
    question: {
      fragetext: "Emres Gewicht liegt unter der 3. Perzentile. Was ist die korrekte Beurteilung?",
      optionen: [
        {
          text: "Verdacht auf Gedeihstörung — weitere Diagnostik und Ernährungsberatung nötig",
          isCorrect: true,
          explanation: "Unter der 3. Perzentile bedeutet: Nur 3 von 100 gleichaltrigen Jungen wiegen weniger. In Kombination mit der Trinkschwäche → dringender Verdacht auf Gedeihstörung. Stationäre Abklärung (organische Ursachen?) und Ernährungsberatung sind indiziert.",
          explanationB1: "Richtig! Unter der 3. Linie heißt: Emre wächst zu wenig. Man muss herausfinden warum und die Ernährung verbessern.",
        },
        {
          text: "Normal — manche Babys sind einfach leichter",
          isCorrect: false,
          explanation: "Bei einem einzelnen Wert unter der 3. Perzentile könnte das theoretisch stimmen. Aber in Kombination mit Trinkschwäche und fehlender Gewichtszunahme ist es ein klares Warnsignal.",
          explanationB1: "Nicht richtig. Zusammen mit den Trinkproblemen ist das ein Warnsignal.",
        },
      ],
    },
  },
];

const EMRE_ST2_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall02-st02-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Stillberatung und Beikost",
      body: "Woche 1: Die Kinderärztin hat organische Ursachen ausgeschlossen. Emres Trinkschwäche scheint funktionell — er wird schnell müde beim Trinken.\n\nDu führst ein Beratungsgespräch mit Ayşe. Themen: Stillpositionen optimieren, Zufütterung mit Pre-Nahrung, und: Der 5.–7. Monat ist der ideale Zeitpunkt für die Beikost-Einführung. Emre ist genau in diesem Alter.",
    },
    contentB1: {
      title: "Beratung: Stillen und erster Brei",
      body: "Nach 1 Woche: Der Arzt sagt: Emre ist nicht krank. Er wird beim Trinken nur schnell müde.\n\nDu sprichst mit Ayşe über:\n- Wie sie besser stillen kann\n- Zusätzliche Milch (Pre-Nahrung)\n- Den ersten Brei (Beikost) — jetzt ist der richtige Zeitpunkt!",
    },
  },
  {
    stepId: "le08-fall02-st02-02",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    tag: "pflege",
    contentC1: {
      title: "Kultursensibles Beratungsgespräch",
      body: "Ayşe erzählt, dass ihre Schwiegermutter empfiehlt, Emre Honig zu geben. 'In der Türkei machen das alle so. Das gibt Kraft.' Du musst kultursensibel aufklären.",
    },
    contentB1: {
      title: "Gespräch mit Ayşe über Honig",
      body: "Ayşe sagt: In der Türkei geben alle Babys Honig.\nDu musst erklären, warum das gefährlich ist — aber freundlich!",
    },
    question: {
      fragetext: "Wie reagierst du auf Ayşes Wunsch, Emre Honig zu geben?",
      dialogPhases: [
        {
          context: "Ayşe sagt: 'Meine Schwiegermutter sagt, Honig gibt Kraft. In der Türkei machen das alle Mütter.'",
          contextB1: "Ayşe sagt: 'In der Türkei geben alle Babys Honig.'",
          options: [
            {
              text: "Ich verstehe, dass Honig in Ihrer Familie eine Tradition ist. Es ist schön, dass Ihre Schwiegermutter helfen möchte. Aber für Babys unter 1 Jahr ist Honig leider gefährlich — er kann schwere Vergiftungen auslösen.",
              patientResponse: "Oh, das wusste ich nicht! Ist das wirklich so schlimm?",
              score: 3,
              feedback: "Sehr gut! Du anerkennst die kulturelle Tradition, zeigst Respekt für die Schwiegermutter und erklärst sachlich die Gefahr.",
              textB1: "Ich verstehe, Honig ist Tradition in Ihrer Familie. Aber für Babys unter 1 Jahr ist Honig gefährlich — er kann eine schwere Krankheit auslösen.",
              patientResponseB1: "Oh, das wusste ich nicht! Ist das schlimm?",
              feedbackB1: "Super! Du bist freundlich und erklärst die Gefahr klar.",
            },
            {
              text: "Geben Sie auf keinen Fall Honig! Das ist verboten bei Babys!",
              patientResponse: "...(Ayşe senkt den Blick, schweigt)",
              score: 1,
              feedback: "Inhaltlich korrekt, aber die Kommunikation ist zu harsch. Du gehst nicht auf die kulturelle Perspektive ein und sprichst ein Verbot aus, statt aufzuklären.",
              textB1: "Geben Sie keinen Honig! Das ist verboten!",
              patientResponseB1: "...(Ayşe schweigt und schaut weg)",
              feedbackB1: "Das ist zu streng. Du erklärst nicht warum. Ayşe fühlt sich schlecht.",
            },
            {
              text: "In Deutschland macht man das nicht. Hier gibt man Babys Pre-Nahrung.",
              patientResponse: "Aber meine Schwiegermutter hat 4 Kinder großgezogen, die weiß das doch besser...",
              score: 1,
              feedback: "Du stellst 'Deutschland' gegen 'Türkei' und wertest damit die kulturelle Praxis ab. Das erzeugt Widerstand. Erkläre stattdessen die medizinische Gefahr neutral.",
              textB1: "In Deutschland macht man das nicht.",
              patientResponseB1: "Aber meine Schwiegermutter weiß das doch besser...",
              feedbackB1: "Das klingt so, als wäre die türkische Tradition schlecht. Erkläre lieber die medizinische Gefahr.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le08-fall02-st02-03",
    phase: "s1",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Mythen vs. Fakten: Säuglingsernährung",
      body: "Wische richtige Aussagen nach rechts und falsche nach links.",
    },
    contentB1: {
      title: "Stimmt das? Ja oder Nein?",
      body: "Wische richtig nach rechts, falsch nach links.",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      swipe: {
        instruction: "Wische richtige Aussagen nach rechts, falsche nach links.",
        cards: [
          {
            statement: "Muttermilch ist die beste Nahrung für Säuglinge in den ersten 6 Monaten.",
            isCorrect: true,
            explanation: "Richtig! WHO und DGE empfehlen ausschließliches Stillen in den ersten 6 Monaten.",
            explanationB1: "Stimmt! Muttermilch ist das Beste für Babys bis 6 Monate.",
          },
          {
            statement: "Babys unter 1 Jahr dürfen Honig essen.",
            isCorrect: false,
            explanation: "Falsch! Honig kann Clostridium-botulinum-Sporen enthalten → Säuglingsbotulismus. Erst ab dem 1. Geburtstag.",
            explanationB1: "Falsch! Honig ist gefährlich für Babys unter 1 Jahr. Er kann eine schwere Krankheit auslösen.",
          },
          {
            statement: "Beikost sollte zwischen dem 5. und 7. Monat eingeführt werden.",
            isCorrect: true,
            explanation: "Richtig! Der 5.–7. Monat ist der empfohlene Zeitraum für die Beikost-Einführung (Beikostreife: Kind kann Kopf halten, zeigt Interesse am Essen).",
            explanationB1: "Stimmt! Ab dem 5.–7. Monat ist der richtige Zeitpunkt für den ersten Brei.",
          },
          {
            statement: "Kuhmilch ist ein guter Ersatz für Muttermilch bei Neugeborenen.",
            isCorrect: false,
            explanation: "Falsch! Kuhmilch hat zu viel Eiweiß und Mineralstoffe für Säuglinge und belastet die unreifen Nieren. Erst ab dem 1. Lebensjahr in kleinen Mengen.",
            explanationB1: "Falsch! Kuhmilch ist für Babys zu schwer. Erst ab 1 Jahr in kleinen Mengen.",
          },
          {
            statement: "Alle Säuglinge brauchen Vitamin-D-Supplementierung (500 IE/Tag).",
            isCorrect: true,
            explanation: "Richtig! Unabhängig ob gestillt oder Flasche: Vitamin D 500 IE/Tag zur Rachitisprophylaxe + Fluorid 0,25 mg/Tag.",
            explanationB1: "Stimmt! Alle Babys brauchen Vitamin D, egal ob Muttermilch oder Flasche.",
          },
        ],
      },
    },
  },
];

const EMRE_ST3_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall02-st03-01",
    phase: "s2",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Kontrolle nach 4 Wochen",
      body: "4 Wochen nach Entlassung: Emre wiegt 6.400 g — er hat die 3. Perzentile fast erreicht! Die Mutter füttert erfolgreich Pre-Nahrung zu und hat mit der Beikost begonnen (Karotten-Kartoffel-Brei). Ayşe strahlt: 'Er greift sogar nach dem Löffel!'",
    },
    contentB1: {
      title: "Emre nimmt zu!",
      body: "4 Wochen später: Emre wiegt 6.400 g — viel besser!\nAyşe gibt ihm jetzt Zusatzmilch UND Brei.\nEmre greift sogar nach dem Löffel!",
    },
  },
  {
    stepId: "le08-fall02-st03-02",
    phase: "s2",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 454"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Familienkost — ab wann?",
      body: "Ayşe fragt: 'Ab wann kann Emre normal mitessen?' Was antwortest du?",
    },
    contentB1: {
      title: "Wann normales Essen?",
      body: "Ayşe fragt: Wann kann Emre das gleiche essen wie die Familie?",
    },
    question: {
      fragetext: "Ab wann kann ein Säugling zur Familienkost übergehen?",
      optionen: [
        {
          text: "Ab dem 10.–12. Monat, schrittweiser Übergang",
          isCorrect: true,
          explanation: "Ab dem 10.–12. Monat kann schrittweise auf Familienkost umgestellt werden. Voraussetzung: Kind kann kauen und schlucken, Allergien sind ausgetestet.",
          explanationB1: "Richtig! Ab 10–12 Monaten kann ein Baby langsam normales Essen bekommen.",
        },
        {
          text: "Ab dem 6. Monat, sofort komplett",
          isCorrect: false,
          explanation: "Mit 6 Monaten beginnt erst die Beikost (Brei). Ein direkter Umstieg auf Familienkost wäre zu früh — das Baby kann noch nicht kauen.",
          explanationB1: "Zu früh! Mit 6 Monaten fängt erst der Brei an.",
        },
        {
          text: "Erst ab dem 2. Lebensjahr",
          isCorrect: false,
          explanation: "Das wäre zu spät. Ab dem 10.–12. Monat ist der schrittweise Übergang empfohlen. Zu langes Warten kann die Akzeptanz fester Nahrung erschweren.",
          explanationB1: "Zu spät! Schon ab 10–12 Monaten kann ein Kind normales Essen ausprobieren.",
        },
      ],
    },
  },
];

// === FALL 3: Walter Bergmann — 3 Stationen ===

const BERGMANN_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall03-st01-01",
    phase: "s1",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Walter Bergmann im Pflegeheim",
      body: "Walter Bergmann, 84, lebt seit 2 Jahren im Pflegeheim. Diagnose: Fortgeschrittene vaskuläre Demenz, Herzinsuffizienz NYHA II. Seit 4 Wochen hat er eine PEG-Sonde, weil die orale Nahrungsaufnahme nicht mehr ausreicht — er vergisst zu kauen und zu schlucken.\n\nSeine Frau Helga (79) kommt jeden Tag. Sie sagt: 'Ich wollte das eigentlich nicht. Aber der Arzt meinte, er verhungert sonst.'",
    },
    contentB1: {
      title: "Herr Bergmann im Pflegeheim",
      body: "Herr Bergmann ist 84 Jahre alt und hat Demenz.\nSeit 4 Wochen hat er eine Magensonde (PEG).\nEr vergisst zu kauen und zu schlucken.\n\nSeine Frau Helga kommt jeden Tag.\nSie sagt: 'Ich wollte die Sonde eigentlich nicht.'",
    },
  },
  {
    stepId: "le08-fall03-st01-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "PEG-Pflege Grundsätze",
      body: "Du übernimmst die PEG-Pflege bei Herrn Bergmann. Was ist am wichtigsten?",
    },
    contentB1: {
      title: "Was ist bei der PEG wichtig?",
      body: "Du pflegst die Sonde von Herrn Bergmann. Was musst du beachten?",
    },
    question: {
      fragetext: "Welche Maßnahme hat bei der PEG-Pflege die höchste Priorität?",
      optionen: [
        {
          text: "Tägliche Inspektion der Einstichstelle auf Rötung, Schwellung, Sekret und Sonde mit Wasser spülen",
          isCorrect: true,
          explanation: "Die Infektionsprävention an der Einstichstelle und das Spülen der Sonde sind die wichtigsten täglichen Maßnahmen. Eine Infektion der Einstichstelle kann zu Peritonitis führen!",
          explanationB1: "Richtig! Jeden Tag die Stelle am Bauch anschauen. Und die Sonde immer mit Wasser spülen. Sonst kann sich die Stelle entzünden.",
        },
        {
          text: "Die PEG-Sonde alle 3 Tage wechseln",
          isCorrect: false,
          explanation: "Die PEG wird nicht alle 3 Tage gewechselt! Ein Wechsel erfolgt erst nach mehreren Monaten durch den Arzt.",
        },
        {
          text: "Sondenkost möglichst schnell verabreichen",
          isCorrect: false,
          explanation: "Zu schnelle Verabreichung kann Übelkeit, Erbrechen und Dumping-Syndrom auslösen. Die Sondenkost wird entweder als Bolus (langsam über 15–20 Min.) oder kontinuierlich per Pumpe gegeben.",
        },
      ],
    },
  },
  {
    stepId: "le08-fall03-st01-03",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-kuenstliche-ernaehrung",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Reihenfolge Sondenkost-Gabe",
      body: "Bringe die Schritte der Sondenkost-Gabe in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Richtige Reihenfolge",
      body: "Was machst du zuerst, was danach? Sortiere die Schritte.",
    },
    question: {
      fragetext: "Bringe die Schritte in die korrekte Reihenfolge.",
      sequencing: {
        instruction: "Ordne die Schritte der Bolus-Sondenkost-Gabe.",
        items: [
          { id: "seq1", label: "Hände desinfizieren" },
          { id: "seq2", label: "Oberkörper ≥30° hochlagern" },
          { id: "seq3", label: "Sonde mit 30 ml Wasser vorspülen" },
          { id: "seq4", label: "Sondenkost auf Raumtemperatur bringen" },
          { id: "seq5", label: "Sondenkost langsam über 15–20 Min. verabreichen" },
          { id: "seq6", label: "Sonde mit 30–50 ml Wasser nachspülen" },
          { id: "seq7", label: "Oberkörper 30 Min. hochgelagert lassen" },
        ],
      },
    },
  },
];

const BERGMANN_ST2_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall03-st02-01",
    phase: "s2",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 475"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Das Kuchenproblem",
      body: "Woche 2: Helga Bergmann kommt mit frischem Apfelkuchen. 'Walter hat immer so gern Apfelkuchen gegessen. Bitte, nur ein kleines Stück!'\n\nDas Problem: Die Logopädin hat festgestellt, dass Herr Bergmann eine stille Aspiration hat — er verschluckt sich, ohne zu husten. Orale Nahrung birgt ein erhebliches Aspirationsrisiko.",
    },
    contentB1: {
      title: "Die Ehefrau bringt Kuchen",
      body: "Frau Bergmann bringt Apfelkuchen mit.\nSie sagt: 'Bitte, nur ein kleines Stück! Er hat das doch immer so geliebt.'\n\nAber: Herr Bergmann verschluckt sich, ohne zu husten (stille Aspiration).\nEssen kann gefährlich für ihn sein.",
    },
  },
  {
    stepId: "le08-fall03-st02-02",
    phase: "s2",
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 475", "I Care Pflege S. 179"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    tag: "pflege",
    contentC1: {
      title: "Gespräch mit Frau Bergmann",
      body: "Du musst Frau Bergmann empathisch aufklären, warum der Kuchen eine Gefahr ist — ohne ihr das Gefühl zu geben, dass sie etwas Falsches tut.",
    },
    contentB1: {
      title: "Wie sagst du es Frau Bergmann?",
      body: "Du musst Frau Bergmann erklären, warum der Kuchen gefährlich ist.\nAber freundlich — sie meint es gut!",
    },
    question: {
      fragetext: "Wie reagierst du auf den Kuchen-Wunsch?",
      dialogPhases: [
        {
          context: "Frau Bergmann steht mit dem Kuchen vor dir und sagt mit Tränen in den Augen: 'Er isst so gern Kuchen. Bitte lassen Sie ihn wenigstens das.'",
          contextB1: "Frau Bergmann weint fast. Sie sagt: 'Bitte lassen Sie ihn Kuchen essen.'",
          options: [
            {
              text: "Frau Bergmann, ich sehe, wie wichtig Ihnen das ist. Ihr Mann hatte immer Freude am Essen. Die Logopädin hat aber festgestellt, dass er sich unbemerkt verschluckt. Kuchen könnte in seine Lunge gelangen. Darf ich Ihnen eine Alternative zeigen? Wir können mit der Logopädin besprechen, ob geschmackliche Reize auf der Zunge möglich sind.",
              patientResponse: "(nickt langsam) Ja, bitte... Ich will ihm doch nicht schaden.",
              score: 3,
              feedback: "Excellent! Du validierst ihre Gefühle, erklärst sachlich die Gefahr und bietest eine Alternative an. Das ist empathische, professionelle Kommunikation.",
              textB1: "Frau Bergmann, ich verstehe Sie. Aber Herr Bergmann verschluckt sich, ohne dass man es merkt. Kuchen kann in die Lunge kommen. Aber: Vielleicht kann er ein bisschen den Geschmack auf der Zunge haben. Ich frage die Logopädin.",
              patientResponseB1: "Ja, bitte... Ich will ihm nicht schaden.",
              feedbackB1: "Sehr gut! Du bist freundlich, erklärst die Gefahr und zeigst eine andere Möglichkeit.",
            },
            {
              text: "Das geht leider nicht, Frau Bergmann. Ihr Mann darf nichts mehr essen. Ärztliche Anordnung.",
              patientResponse: "(wendet sich ab, presst den Kuchen an sich) Dann nehme ich ihn wieder mit...",
              score: 1,
              feedback: "Du berufst dich auf die ärztliche Anordnung, aber zeigst keine Empathie. Frau Bergmann fühlt sich abgewiesen. Keine Alternative angeboten.",
              textB1: "Das geht nicht. Er darf nichts essen.",
              patientResponseB1: "...(geht traurig weg)",
              feedbackB1: "Zu kalt! Du erklärst nicht warum. Frau Bergmann ist traurig und versteht nichts.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le08-fall03-st02-03",
    phase: "s2",
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179"],
    track: "vertiefung",
    modus: "story",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Deine Entscheidung",
      body: "Frau Bergmann bittet dich inständig: 'Nur ein winziges Stück — er hat doch sonst nichts mehr im Leben.' Wie entscheidest du?",
    },
    contentB1: {
      title: "Was würdest du tun?",
      body: "Frau Bergmann bettelt: 'Bitte, nur ein kleines Stück.'\nWas machst du?",
    },
    question: {
      fragetext: "Wie gehst du mit dem Dilemma um?",
      branchingOptions: [
        {
          text: "Kein Kuchen — Aspirationsrisiko ist zu hoch. Aber gemeinsam mit der Logopädin nach geschmacklichen Alternativen suchen.",
          feedback: "Richtig! Sicherheit geht vor. Aber du suchst aktiv nach Alternativen (z. B. Apfelgeschmack auf einem feuchten Tupfer). Das zeigt: Du nimmst die Lebensqualität ernst, ohne die Sicherheit zu gefährden.",
          feedbackB1: "Richtig! Kein Kuchen wegen der Gefahr. Aber: Vielleicht kann er den Geschmack auf der Zunge haben. Das ist die beste Lösung.",
          isCorrect: true,
        },
        {
          text: "Ein kleines Stück erlauben — Lebensqualität ist wichtiger",
          feedback: "Verständlich, aber gefährlich. Bei stiller Aspiration bemerkt man das Verschlucken nicht. Eine Aspirationspneumonie kann bei einem 84-Jährigen mit Herzinsuffizienz tödlich enden. Lebensqualität ist wichtig — aber nicht mit dem Risiko eines vermeidbaren Todes.",
          feedbackB1: "Das ist gefährlich. Herr Bergmann kann sich verschlucken ohne dass man es merkt. Das kann zu einer Lungenentzündung führen.",
          isCorrect: false,
        },
        {
          text: "Die Entscheidung dem Arzt überlassen",
          feedback: "Nicht falsch, den Arzt einzubeziehen — aber als Pflegefachkraft trägst du die unmittelbare Verantwortung. Du kannst und sollst die Situation einschätzen und professionell handeln. Das interprofessionelle Team berät, aber du musst vor Ort die richtige Entscheidung treffen.",
          feedbackB1: "Es ist gut, den Arzt zu fragen. Aber du musst jetzt entscheiden — der Arzt ist nicht immer da.",
          isCorrect: false,
        },
      ],
    },
  },
];

const BERGMANN_ST3_STEPS: ContentStep[] = [
  {
    stepId: "le08-fall03-st03-01",
    phase: "s3",
    stepType: "text",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179", "DNQP 2017a"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Ethische Fallbesprechung im Team",
      body: "Monat 1: Das Pflegeteam ist sich uneinig über die PEG bei Herrn Bergmann. Pflegerin Maria sagt: 'Er würde die Sonde nie gewollt haben.' Pfleger Thomas meint: 'Wir können ihn doch nicht verhungern lassen.' Die Ärztin möchte eine formale ethische Fallbesprechung einberufen.\n\nFrage: Verlängert eine PEG bei fortgeschrittener Demenz die Lebenszeit?",
    },
    contentB1: {
      title: "Das Team ist sich nicht einig",
      body: "Das Pflegeteam streitet über die Sonde.\nMaria sagt: 'Er hätte die Sonde nie gewollt.'\nThomas sagt: 'Er darf doch nicht verhungern!'\n\nFrage: Hilft eine PEG bei schwerer Demenz wirklich?",
    },
  },
  {
    stepId: "le08-fall03-st03-02",
    phase: "s3",
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179", "Cochrane Review"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Evidenz: PEG bei Demenz",
      body: "Was sagt die aktuelle Evidenz zur PEG bei fortgeschrittener Demenz?",
    },
    contentB1: {
      title: "Hilft die PEG bei Demenz?",
      body: "Was sagen Studien über die PEG bei schwerer Demenz?",
    },
    question: {
      fragetext: "Was zeigt die Evidenzlage zur PEG bei fortgeschrittener Demenz?",
      optionen: [
        {
          text: "PEG verlängert bei fortgeschrittener Demenz weder die Lebenszeit noch verbessert sie die Lebensqualität",
          isCorrect: true,
          explanation: "Cochrane Reviews zeigen: PEG bei fortgeschrittener Demenz verlängert nicht das Leben, verhindert nicht Aspirationspneumonien und verbessert nicht den Ernährungszustand. Stattdessen steigt das Risiko für Komplikationen (Infektionen, Unruhe, Fixierung).",
          explanationB1: "Studien zeigen: Bei schwerer Demenz hilft die PEG meistens nicht. Sie verlängert das Leben nicht und verhindert keine Lungenentzündung.",
        },
        {
          text: "PEG verlängert das Leben bei Demenz um durchschnittlich 2 Jahre",
          isCorrect: false,
          explanation: "Das ist nicht belegt. Die aktuelle Studienlage zeigt keinen Überlebensvorteil durch PEG bei fortgeschrittener Demenz.",
        },
        {
          text: "Es gibt keine Studien zu diesem Thema",
          isCorrect: false,
          explanation: "Es gibt mehrere hochwertige Studien und systematische Reviews (Cochrane), die diese Frage untersucht haben.",
        },
      ],
    },
  },
  {
    stepId: "le08-fall03-st03-03",
    phase: "s3",
    stepType: "reflection",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV",
    quellen: ["I Care Pflege S. 179"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce02-le08-ethik-recht",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Deine Position",
      body: "Formuliere deine persönliche Position zum Thema 'PEG bei fortgeschrittener Demenz'. Es gibt hier kein eindeutiges Richtig oder Falsch — aber deine Argumentation muss ethisch und fachlich fundiert sein.",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Was meinst du: Soll ein Mensch mit schwerer Demenz eine PEG bekommen?\nSchreibe deine Meinung auf. Es gibt kein Richtig oder Falsch.\nAber: Erkläre warum du so denkst.",
    },
    question: {
      fragetext: "Formuliere deine Position zum Thema PEG bei fortgeschrittener Demenz.",
      reflection: {
        prompt: "Wie stehst du zum Thema PEG bei fortgeschrittener Demenz? Berücksichtige: Patientenautonomie, Lebensqualität, Evidenz, Angehörigenperspektive.",
        placeholder: "Ich denke, dass...",
        systemPrompt: "Bewerte die Reflexion auf: 1. Ethische Argumentation (nicht nur Meinung, sondern Begründung), 2. Berücksichtigung verschiedener Perspektiven (Patient, Angehörige, Team), 3. Bezug zur Evidenz, 4. Respektvoller Ton. Gib Feedback im Sandwich-Prinzip.",
      },
    },
  },
];

// === FALLVERLÄUFE ===

export const LE08_FALLVERLAEUFE: Fallverlauf[] = [
  {
    fallId: "le08-fall-kramer",
    patient: getPatient("pat-elisabeth-01")!,
    titel: "Elisabeth Kramer: Von der Aufnahme bis zur Nachsorge",
    titelB1: "Elisabeth Kramer: Ihr Weg im Krankenhaus",
    fokus: "pflege",
    stationen: [
      {
        stationId: "le08-fall01-st01",
        zeitpunkt: "Tag 1",
        titel: "Aufnahme und Erstassessment",
        titelB1: "Aufnahme: Was ist los mit Frau Kramer?",
        situationC1:
          "Elisabeth Kramer wird auf die neurologische Station aufgenommen. Aktueller MS-Schub mit zunehmender Dysphagie. BMI 17,8, Gewichtsverlust 6 kg in 3 Monaten. Du führst die pflegerische Aufnahme durch und erfasst den Ernährungszustand.",
        situationB1:
          "Frau Kramer kommt auf die Station. Sie hat MS und kann schlecht schlucken. Sie ist sehr dünn und hat viel abgenommen. Du musst herausfinden, wie schlecht ihre Ernährung ist.",
        relevanteKapitel: ["le08-kap-04", "le08-kap-05"],
        steps: KRAMER_ST1_STEPS,
        bloomRange: [1, 3],
        freigeschaltet: true,
      },
      {
        stationId: "le08-fall01-st02",
        zeitpunkt: "Tag 3",
        titel: "Schluckdiagnostik und Kostanpassung",
        titelB1: "Tag 3: Die Schluck-Untersuchung",
        situationC1:
          "Der FEES-Befund bestätigt eine Dysphagie Grad 2. Die Logopädin empfiehlt Kostanpassung. Du setzt die ärztliche Anordnung um und passt Kost und Getränke an.",
        situationB1:
          "Die Ärzte haben Frau Kramers Schlucken untersucht. Ergebnis: Schluckstörung Stufe 2. Du musst jetzt das Essen und Trinken anpassen.",
        relevanteKapitel: ["le08-kap-07", "le08-kap-06"],
        steps: KRAMER_ST2_STEPS,
        bloomRange: [2, 3],
        freigeschaltet: false,
      },
      {
        stationId: "le08-fall01-st03",
        zeitpunkt: "Woche 2",
        titel: "Therapie-Compliance und Alternativen",
        titelB1: "Woche 2: Frau Kramer will nicht mehr",
        situationC1:
          "Frau Kramer lehnt die angedickten Getränke ab. Die Flüssigkeitsbilanz ist negativ. Du musst Alternativen finden und die Trinknahrung anpassen, bevor eine Dehydratation eintritt.",
        situationB1:
          "Die angedickten Getränke schmecken nicht. Frau Kramer trinkt zu wenig. Du musst eine Lösung finden, bevor sie austrocknet.",
        relevanteKapitel: ["le08-kap-08"],
        steps: KRAMER_ST3_STEPS,
        bloomRange: [3, 4],
        freigeschaltet: false,
      },
      {
        stationId: "le08-fall01-st04",
        zeitpunkt: "Monat 1",
        titel: "Die PEG-Entscheidung",
        titelB1: "Monat 1: Soll Frau Kramer eine Sonde bekommen?",
        situationC1:
          "Trotz aller Maßnahmen sinkt das Gewicht weiter (BMI 16,7). Zwei Aspirationspneumonien. Der Arzt schlägt eine PEG-Anlage vor. Frau Kramer ist unsicher, ihre Schwester dagegen. Du bereitest eine ethische Fallbesprechung vor.",
        situationB1:
          "Frau Kramer nimmt weiter ab. Der Arzt möchte eine Magensonde (PEG) legen. Aber: Frau Kramer und ihre Schwester sind sich nicht einig. Was tun?",
        relevanteKapitel: ["le08-kap-09", "le08-kap-10"],
        steps: KRAMER_ST4_STEPS,
        bloomRange: [3, 5],
        freigeschaltet: false,
      },
      {
        stationId: "le08-fall01-st05",
        zeitpunkt: "Monat 3",
        titel: "Entlassung und Nachsorge",
        titelB1: "Monat 3: Frau Kramer geht nach Hause",
        situationC1:
          "Die PEG ist seit 6 Wochen in situ. Frau Kramer hat sich stabilisiert (Gewichtszunahme 2 kg). Du planst die Entlassung: Pflegeüberleitung, ambulante Ernährungsberatung, Angehörigenschulung für die PEG-Pflege.",
        situationB1:
          "Die Sonde ist seit 6 Wochen da. Frau Kramer hat 2 kg zugenommen. Jetzt geht sie nach Hause. Du musst alles für die Entlassung planen.",
        relevanteKapitel: ["le08-kap-09"],
        steps: KRAMER_ST5_STEPS,
        bloomRange: [3, 6],
        freigeschaltet: false,
      },
    ],
  },
  {
    fallId: "le08-fall-emre",
    patient: getPatient("pat-emre-01")!,
    titel: "Baby Emre: Gedeihstörung im Säuglingsalter",
    titelB1: "Baby Emre: Warum nimmt das Baby nicht zu?",
    fokus: "pflege",
    stationen: [
      {
        stationId: "le08-fall02-st01",
        zeitpunkt: "Tag 1",
        titel: "Aufnahme und Perzentilen-Bestimmung",
        titelB1: "Aufnahme: Was ist los mit Baby Emre?",
        situationC1:
          "Emre Demir, 6 Monate, wird wegen Gedeihstörung stationär aufgenommen. Gewicht 5.800 g — unter der 3. Perzentile. Trinkschwäche seit Geburt. Eltern türkischstämmig, Mutter stillt, Vater spricht wenig Deutsch.",
        situationB1:
          "Baby Emre ist 6 Monate alt. Er wiegt nur 5.800 g — das ist zu wenig. Die Eltern kommen aus der Türkei. Die Mutter stillt.",
        relevanteKapitel: ["le08-kap-03", "le08-kap-05"],
        steps: EMRE_ST1_STEPS,
        bloomRange: [1, 3],
        freigeschaltet: true,
      },
      {
        stationId: "le08-fall02-st02",
        zeitpunkt: "Woche 1",
        titel: "Ernährungsplan und Kulturberatung",
        titelB1: "Woche 1: Stillen und erster Brei",
        situationC1:
          "Organische Ursachen ausgeschlossen. Die Trinkschwäche ist funktionell. Du berätst Ayşe zu Stilloptimierung, Zufütterung mit Pre-Nahrung und Beikost-Einführung. Kultursensibles Thema: Honig für Babys.",
        situationB1:
          "Emre ist nicht krank. Er wird beim Trinken nur müde. Du berätst die Mutter: Besser stillen, Zusatzmilch und erster Brei.",
        relevanteKapitel: ["le08-kap-03"],
        steps: EMRE_ST2_STEPS,
        bloomRange: [2, 4],
        freigeschaltet: false,
      },
      {
        stationId: "le08-fall02-st03",
        zeitpunkt: "Monat 1",
        titel: "Kontrolltermin — Emre nimmt zu",
        titelB1: "4 Wochen später: Emre wächst!",
        situationC1:
          "4 Wochen nach Entlassung: Emre wiegt 6.400 g und nähert sich der 3. Perzentile. Pre-Nahrung und Beikost funktionieren. Ayşe fragt nach dem Übergang zur Familienkost.",
        situationB1:
          "4 Wochen später: Emre wiegt 6.400 g — viel besser! Ayşe fragt: Wann normales Essen?",
        relevanteKapitel: ["le08-kap-03"],
        steps: EMRE_ST3_STEPS,
        bloomRange: [2, 3],
        freigeschaltet: false,
      },
    ],
  },
  {
    fallId: "le08-fall-bergmann",
    patient: getPatient("pat-walter-01")!,
    titel: "Walter Bergmann: PEG-Pflege bei Demenz",
    titelB1: "Walter Bergmann: Ein alter Mann mit Sonde",
    fokus: "pflege",
    stationen: [
      {
        stationId: "le08-fall03-st01",
        zeitpunkt: "Aufnahme",
        titel: "PEG-Pflege und Sondenkost-Gabe",
        titelB1: "Die Pflege der Sonde",
        situationC1:
          "Walter Bergmann, 84, lebt im Pflegeheim. Fortgeschrittene vaskuläre Demenz, PEG-Sonde seit 4 Wochen. Seine Ehefrau (79) kommt täglich und hadert mit der Entscheidung. Du übernimmst die PEG-Pflege.",
        situationB1:
          "Herr Bergmann ist 84 und lebt im Pflegeheim. Er hat Demenz und eine Magensonde seit 4 Wochen. Du pflegst die Sonde.",
        relevanteKapitel: ["le08-kap-09"],
        steps: BERGMANN_ST1_STEPS,
        bloomRange: [2, 3],
        freigeschaltet: true,
      },
      {
        stationId: "le08-fall03-st02",
        zeitpunkt: "Woche 2",
        titel: "Das Kuchenproblem — Lebensqualität vs. Sicherheit",
        titelB1: "Woche 2: Die Ehefrau bringt Kuchen",
        situationC1:
          "Helga Bergmann bringt Apfelkuchen mit. Stille Aspiration nachgewiesen. Ethisches Dilemma: Genuss vs. Aspirationsrisiko. Du musst empathisch aufklären und eine Lösung finden.",
        situationB1:
          "Frau Bergmann bringt Kuchen mit. Aber Herr Bergmann verschluckt sich ohne zu husten. Was machst du?",
        relevanteKapitel: ["le08-kap-07", "le08-kap-10"],
        steps: BERGMANN_ST2_STEPS,
        bloomRange: [3, 5],
        freigeschaltet: false,
      },
      {
        stationId: "le08-fall03-st03",
        zeitpunkt: "Monat 1",
        titel: "Ethische Fallbesprechung — PEG bei Demenz",
        titelB1: "Monat 1: Soll die Sonde bleiben?",
        situationC1:
          "Das Pflegeteam diskutiert: Soll die PEG bei fortgeschrittener Demenz weitergeführt werden? Evidenz zeigt: kein Überlebensvorteil. Formale ethische Fallbesprechung wird einberufen.",
        situationB1:
          "Das Team fragt sich: Soll die Sonde bleiben? Studien sagen: Sie hilft bei schwerer Demenz nicht wirklich.",
        relevanteKapitel: ["le08-kap-10"],
        steps: BERGMANN_ST3_STEPS,
        bloomRange: [4, 6],
        freigeschaltet: false,
      },
    ],
  },
];
