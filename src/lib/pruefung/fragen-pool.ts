// Prüfungsfragen-Pool für simulierte Prüfungen
// Format orientiert sich an echten Pflegeprüfungen (PflAPrV)

export interface PruefungsOption {
  text: string;
  istRichtig: boolean;
}

export interface PruefungsFrage {
  id: string;
  ceId: string;
  thema: string;
  fragetext: string;
  optionen: PruefungsOption[];
  erklaerung: string;
  schwierigkeit: "leicht" | "mittel" | "schwer";
}

// 20 Fragen für CE 01: Ausbildungsstart — Pflegeprozess, Kommunikation, Berufsbild
export const FRAGEN_CE01: PruefungsFrage[] = [
  // --- Leicht (6 Fragen) ---
  {
    id: "ce01-p01",
    ceId: "ce-01",
    thema: "Pflegeprozess",
    fragetext: "Aus wie vielen Schritten besteht der Pflegeprozess nach Fiechter und Meier?",
    optionen: [
      { text: "4 Schritte", istRichtig: false },
      { text: "6 Schritte", istRichtig: true },
      { text: "8 Schritte", istRichtig: false },
      { text: "5 Schritte", istRichtig: false },
    ],
    erklaerung: "Der Pflegeprozess nach Fiechter und Meier umfasst 6 Schritte: 1) Informationssammlung, 2) Erkennen von Problemen und Ressourcen, 3) Festlegung der Pflegeziele, 4) Planung der Pflegemaßnahmen, 5) Durchführung, 6) Evaluation.",
    schwierigkeit: "leicht",
  },
  {
    id: "ce01-p02",
    ceId: "ce-01",
    thema: "Kommunikation",
    fragetext: "Was beschreibt das Sender-Empfänger-Modell?",
    optionen: [
      { text: "Eine Person sendet eine Nachricht, die andere empfängt und interpretiert sie", istRichtig: true },
      { text: "Nur der Sender bestimmt die Bedeutung der Nachricht", istRichtig: false },
      { text: "Kommunikation findet nur verbal statt", istRichtig: false },
      { text: "Der Empfänger darf nicht antworten", istRichtig: false },
    ],
    erklaerung: "Im Sender-Empfänger-Modell (Shannon/Weaver) sendet eine Person eine codierte Nachricht über einen Kanal. Der Empfänger decodiert diese und interpretiert sie. Dabei können Störungen auftreten.",
    schwierigkeit: "leicht",
  },
  {
    id: "ce01-p03",
    ceId: "ce-01",
    thema: "Berufsbild",
    fragetext: "Seit wann gibt es die generalistische Pflegeausbildung in Deutschland?",
    optionen: [
      { text: "2015", istRichtig: false },
      { text: "2018", istRichtig: false },
      { text: "2020", istRichtig: true },
      { text: "2022", istRichtig: false },
    ],
    erklaerung: "Die generalistische Pflegeausbildung wurde mit dem Pflegeberufegesetz (PflBG) zum 1. Januar 2020 eingeführt. Sie fasst die bisherigen drei Ausbildungen (Altenpflege, Gesundheits- und Krankenpflege, Gesundheits- und Kinderkrankenpflege) zusammen.",
    schwierigkeit: "leicht",
  },
  {
    id: "ce01-p04",
    ceId: "ce-01",
    thema: "Pflegedokumentation",
    fragetext: "Warum ist die Pflegedokumentation wichtig?",
    optionen: [
      { text: "Sie dient nur der Abrechnung mit den Krankenkassen", istRichtig: false },
      { text: "Sie sichert die Qualität, Nachvollziehbarkeit und Rechtssicherheit der Pflege", istRichtig: true },
      { text: "Sie ist nur für den Arzt relevant", istRichtig: false },
      { text: "Sie wird nur einmal pro Woche geschrieben", istRichtig: false },
    ],
    erklaerung: "Die Pflegedokumentation dient der Qualitätssicherung, der Nachvollziehbarkeit pflegerischer Maßnahmen, der Kommunikation im Team und der Rechtssicherheit. Sie ist eine Pflicht nach dem PflBG.",
    schwierigkeit: "leicht",
  },
  {
    id: "ce01-p05",
    ceId: "ce-01",
    thema: "Kommunikation",
    fragetext: "Was bedeutet 'aktives Zuhören' in der Pflege?",
    optionen: [
      { text: "Dem Patienten gleichzeitig zuhören und am Computer dokumentieren", istRichtig: false },
      { text: "Aufmerksam zuhören, nachfragen, Gesagtes zusammenfassen und Empathie zeigen", istRichtig: true },
      { text: "Den Patienten ausreden lassen und dann das Thema wechseln", istRichtig: false },
      { text: "Nur bei wichtigen Themen richtig zuhören", istRichtig: false },
    ],
    erklaerung: "Aktives Zuhören nach Carl Rogers umfasst: volle Aufmerksamkeit, Blickkontakt, Nachfragen, Paraphrasieren (Gesagtes in eigenen Worten wiederholen) und empathische Reaktionen. Es ist eine Kernkompetenz in der Pflege.",
    schwierigkeit: "leicht",
  },
  {
    id: "ce01-p06",
    ceId: "ce-01",
    thema: "Berufsbild",
    fragetext: "Welche Aufgabe gehört NICHT zu den Vorbehaltsaufgaben der Pflegefachperson?",
    optionen: [
      { text: "Erhebung des Pflegebedarfs", istRichtig: false },
      { text: "Planung der Pflege", istRichtig: false },
      { text: "Verordnung von Medikamenten", istRichtig: true },
      { text: "Evaluation der Pflege", istRichtig: false },
    ],
    erklaerung: "Vorbehaltsaufgaben nach PflBG §4 sind: Erhebung des Pflegebedarfs, Organisation/Gestaltung/Steuerung des Pflegeprozesses und Evaluation. Die Verordnung von Medikamenten ist eine ärztliche Aufgabe.",
    schwierigkeit: "leicht",
  },

  // --- Mittel (8 Fragen) ---
  {
    id: "ce01-p07",
    ceId: "ce-01",
    thema: "Pflegeprozess",
    fragetext: "Was gehört zur Informationssammlung im Pflegeprozess?",
    optionen: [
      { text: "Nur die Messung der Vitalzeichen", istRichtig: false },
      { text: "Anamnese, Beobachtung, Befragung und Nutzung vorhandener Dokumentation", istRichtig: true },
      { text: "Ausschließlich das Arztgespräch", istRichtig: false },
      { text: "Nur die Aussagen der Angehörigen", istRichtig: false },
    ],
    erklaerung: "Die Informationssammlung umfasst verschiedene Quellen: Eigenanamnese (Befragung des Patienten), Fremdanamnese (Angehörige), Beobachtung, körperliche Untersuchungsergebnisse und vorhandene Dokumentation.",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p08",
    ceId: "ce-01",
    thema: "Kommunikation",
    fragetext: "Welches Kommunikationsmodell beschreibt die 'vier Seiten einer Nachricht'?",
    optionen: [
      { text: "Das Modell nach Watzlawick", istRichtig: false },
      { text: "Das Vier-Ohren-Modell nach Schulz von Thun", istRichtig: true },
      { text: "Das Modell nach Rogers", istRichtig: false },
      { text: "Das Eisberg-Modell nach Freud", istRichtig: false },
    ],
    erklaerung: "Friedemann Schulz von Thun beschrieb das Vier-Ohren-Modell (auch Kommunikationsquadrat): Jede Nachricht hat vier Seiten — Sachinhalt, Selbstoffenbarung, Beziehung und Appell.",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p09",
    ceId: "ce-01",
    thema: "Pflegeprozess",
    fragetext: "Was ist der Unterschied zwischen Pflegeproblemen und Ressourcen?",
    optionen: [
      { text: "Es gibt keinen Unterschied", istRichtig: false },
      { text: "Pflegeprobleme sind aktuelle oder potenzielle Einschränkungen, Ressourcen sind vorhandene Fähigkeiten und Stärken", istRichtig: true },
      { text: "Ressourcen sind nur finanzielle Mittel", istRichtig: false },
      { text: "Pflegeprobleme werden nur vom Arzt festgestellt", istRichtig: false },
    ],
    erklaerung: "Pflegeprobleme beschreiben aktuelle oder potenzielle gesundheitliche Einschränkungen. Ressourcen sind Fähigkeiten, Kenntnisse und Stärken des Patienten, die zur Problemlösung beitragen können (z.B. Motivation, Mobilität, soziales Netz).",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p10",
    ceId: "ce-01",
    thema: "Pflegedokumentation",
    fragetext: "Was versteht man unter SMART-Zielen in der Pflegeplanung?",
    optionen: [
      { text: "Schnell, messbar, aktuell, richtig, transparent", istRichtig: false },
      { text: "Spezifisch, messbar, attraktiv/akzeptiert, realistisch, terminiert", istRichtig: true },
      { text: "Sicher, machbar, angemessen, relevant, tagesaktuell", istRichtig: false },
      { text: "Sachlich, mündlich, arztbezogen, regelmäßig, technisch", istRichtig: false },
    ],
    erklaerung: "SMART-Ziele sind: Spezifisch (konkret formuliert), Messbar (Ergebnis überprüfbar), Attraktiv/Akzeptiert (vom Patienten mitgetragen), Realistisch (erreichbar) und Terminiert (mit Zeitangabe).",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p11",
    ceId: "ce-01",
    thema: "Berufsbild",
    fragetext: "Wie lange dauert die generalistische Pflegeausbildung?",
    optionen: [
      { text: "2 Jahre", istRichtig: false },
      { text: "2,5 Jahre", istRichtig: false },
      { text: "3 Jahre", istRichtig: true },
      { text: "4 Jahre", istRichtig: false },
    ],
    erklaerung: "Die generalistische Pflegeausbildung dauert 3 Jahre (mindestens 4.600 Stunden: 2.100 Stunden Theorie und 2.500 Stunden Praxis). Sie endet mit einer staatlichen Prüfung.",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p12",
    ceId: "ce-01",
    thema: "Kommunikation",
    fragetext: "Was bedeutet der Grundsatz 'Man kann nicht nicht kommunizieren' nach Watzlawick?",
    optionen: [
      { text: "Man muss immer reden", istRichtig: false },
      { text: "Auch Schweigen und Körpersprache senden Botschaften — jedes Verhalten ist Kommunikation", istRichtig: true },
      { text: "Kommunikation ist nur dann vorhanden wenn beide Seiten sprechen", istRichtig: false },
      { text: "Dieser Grundsatz gilt nur für schriftliche Kommunikation", istRichtig: false },
    ],
    erklaerung: "Paul Watzlawicks erstes Axiom besagt: Jedes Verhalten hat Mitteilungscharakter. Auch Schweigen, Wegschauen oder Körperhaltung kommunizieren. In der Pflege ist das besonders relevant bei Patienten die nicht verbal kommunizieren können.",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p13",
    ceId: "ce-01",
    thema: "Pflegeprozess",
    fragetext: "In welchem Schritt des Pflegeprozesses wird überprüft, ob die Pflegeziele erreicht wurden?",
    optionen: [
      { text: "Informationssammlung", istRichtig: false },
      { text: "Durchführung", istRichtig: false },
      { text: "Planung", istRichtig: false },
      { text: "Evaluation", istRichtig: true },
    ],
    erklaerung: "Die Evaluation ist der 6. und letzte Schritt des Pflegeprozesses. Hier wird überprüft, ob die festgelegten Pflegeziele erreicht wurden. Bei Bedarf wird der Pflegeprozess angepasst und beginnt erneut (zyklischer Prozess).",
    schwierigkeit: "mittel",
  },
  {
    id: "ce01-p14",
    ceId: "ce-01",
    thema: "Berufsbild",
    fragetext: "Was regelt das Pflegeberufegesetz (PflBG)?",
    optionen: [
      { text: "Nur die Vergütung von Pflegekräften", istRichtig: false },
      { text: "Die Ausbildung zur Pflegefachperson — Zugangsvoraussetzungen, Inhalte, Prüfung und Berufsbezeichnung", istRichtig: true },
      { text: "Ausschließlich die Arbeitsbedingungen in Krankenhäusern", istRichtig: false },
      { text: "Die Finanzierung der Pflegeversicherung", istRichtig: false },
    ],
    erklaerung: "Das PflBG (2017, in Kraft 2020) regelt die generalistische Pflegeausbildung: Zugangsvoraussetzungen, Ausbildungsziele, theoretische und praktische Inhalte, die staatliche Prüfung und die geschützte Berufsbezeichnung 'Pflegefachfrau/Pflegefachmann'.",
    schwierigkeit: "mittel",
  },

  // --- Schwer (6 Fragen) ---
  {
    id: "ce01-p15",
    ceId: "ce-01",
    thema: "Pflegeprozess",
    fragetext: "Frau Schmidt, 82 Jahre, wurde nach einem Oberschenkelhalsbruch operiert. Sie äußert Schmerzen beim Aufstehen (NRS 6/10) und weigert sich, zur Mobilisation aufzustehen. Welches ist das primäre Pflegeproblem?",
    optionen: [
      { text: "Frau Schmidt ist unkooperativ", istRichtig: false },
      { text: "Akuter Schmerz bei Mobilisation mit daraus resultierender Bewegungseinschränkung", istRichtig: true },
      { text: "Frau Schmidt braucht mehr Schlaf", istRichtig: false },
      { text: "Die Pflegekraft hat zu wenig Zeit", istRichtig: false },
    ],
    erklaerung: "Das primäre Pflegeproblem ist der Schmerz (NRS 6/10), der die Mobilisation verhindert. Die Weigerung aufzustehen ist die Folge des Schmerzes, nicht das Problem selbst. Erst durch adäquate Schmerztherapie kann die Mobilisation gelingen.",
    schwierigkeit: "schwer",
  },
  {
    id: "ce01-p16",
    ceId: "ce-01",
    thema: "Kommunikation",
    fragetext: "Ein Patient sagt: 'Mir geht es gut' — aber er schaut dabei weg, verschränkt die Arme und seine Stimme zittert. Was liegt hier vor?",
    optionen: [
      { text: "Kongruente Kommunikation", istRichtig: false },
      { text: "Inkongruente Kommunikation — verbale und nonverbale Botschaft widersprechen sich", istRichtig: true },
      { text: "Der Patient lügt bewusst", istRichtig: false },
      { text: "Ein normales Gesprächsverhalten", istRichtig: false },
    ],
    erklaerung: "Bei inkongruenter Kommunikation stimmen verbale Aussage ('mir geht es gut') und nonverbale Signale (Wegschauen, verschränkte Arme, zitternde Stimme) nicht überein. In der Pflege ist es wichtig, solche Diskrepanzen wahrzunehmen und einfühlsam nachzufragen.",
    schwierigkeit: "schwer",
  },
  {
    id: "ce01-p17",
    ceId: "ce-01",
    thema: "Pflegeprozess",
    fragetext: "Formulieren Sie das richtige SMART-Pflegeziel: Herr Yilmaz, 68, diabetischer Fuß, soll seine Füße selbst kontrollieren.",
    optionen: [
      { text: "Herr Yilmaz soll besser auf seine Füße achten", istRichtig: false },
      { text: "Herr Yilmaz kontrolliert innerhalb von 7 Tagen selbstständig täglich seine Füße auf Druckstellen und Hautveränderungen", istRichtig: true },
      { text: "Die Füße von Herr Yilmaz werden regelmäßig kontrolliert", istRichtig: false },
      { text: "Herr Yilmaz wird irgendwann seine Füße selbst anschauen", istRichtig: false },
    ],
    erklaerung: "Das SMART-Ziel ist: Spezifisch (Füße auf Druckstellen/Hautveränderungen kontrollieren), Messbar (täglich), Akzeptiert (selbstständig), Realistisch (bei diabetischem Fuß erreichbar), Terminiert (innerhalb von 7 Tagen).",
    schwierigkeit: "schwer",
  },
  {
    id: "ce01-p18",
    ceId: "ce-01",
    thema: "Pflegedokumentation",
    fragetext: "Was passiert rechtlich, wenn eine durchgeführte Pflegemaßnahme nicht dokumentiert wird?",
    optionen: [
      { text: "Es hat keine Konsequenzen", istRichtig: false },
      { text: "Im juristischen Sinne gilt: 'Nicht dokumentiert = nicht durchgeführt' — es droht Beweislastumkehr", istRichtig: true },
      { text: "Die Krankenkasse zahlt automatisch weniger", istRichtig: false },
      { text: "Nur der Arzt muss dafür haften", istRichtig: false },
    ],
    erklaerung: "Im Haftungsfall gilt der Grundsatz 'Nicht dokumentiert = nicht durchgeführt'. Die Beweislast kehrt sich um: Nicht die Klageseite muss beweisen, dass etwas unterlassen wurde, sondern die Pflegekraft muss beweisen, dass sie korrekt gehandelt hat.",
    schwierigkeit: "schwer",
  },
  {
    id: "ce01-p19",
    ceId: "ce-01",
    thema: "Kommunikation",
    fragetext: "Ein türkischsprachiger Patient versteht Ihre Erklärung zur Medikamenteneinnahme nicht vollständig. Was ist das professionelle Vorgehen?",
    optionen: [
      { text: "Lauter und langsamer sprechen", istRichtig: false },
      { text: "Einen Dolmetscherdienst hinzuziehen und mit einfacher Sprache, Bildern und Gesten unterstützen", istRichtig: true },
      { text: "Die Information nur an die Angehörigen weitergeben", istRichtig: false },
      { text: "Den Patienten bitten, selbst einen Übersetzer mitzubringen", istRichtig: false },
    ],
    erklaerung: "Bei Sprachbarrieren soll ein professioneller Dolmetscherdienst genutzt werden (nicht Angehörige, da diese medizinische Begriffe falsch übersetzen könnten). Ergänzend: einfache Sprache, visuelle Hilfsmittel, Rückfragen und schriftliche Informationen in der Muttersprache.",
    schwierigkeit: "schwer",
  },
  {
    id: "ce01-p20",
    ceId: "ce-01",
    thema: "Berufsbild",
    fragetext: "Welche der folgenden Kompetenzbereiche sind in der PflAPrV für die Pflegeausbildung definiert?",
    optionen: [
      { text: "Nur medizinische Diagnostik und Therapie", istRichtig: false },
      { text: "Pflegeprozesse und -diagnostik, Kommunikation, intra-/interprofessionelles Handeln, Rechtsrahmen, berufliche Entwicklung", istRichtig: true },
      { text: "Ausschließlich praktische Pflegetätigkeiten", istRichtig: false },
      { text: "Nur Hygiene und Infektionsschutz", istRichtig: false },
    ],
    erklaerung: "Die PflAPrV definiert 5 Kompetenzbereiche (KB I-V): I) Pflegeprozesse und -diagnostik, II) Kommunikation und Beratung, III) Intra-/interprofessionelles Handeln, IV) Gesellschaftliche/rechtliche Rahmenbedingungen, V) Berufliche Entwicklung und Wissenschaft.",
    schwierigkeit: "schwer",
  },
];

// Alle Fragen-Pools nach CE-ID
export const ALLE_FRAGEN: Record<string, PruefungsFrage[]> = {
  "ce-01": FRAGEN_CE01,
};

// Fisher-Yates Shuffle — gleichmäßig verteilte Zufallsreihenfolge
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Hilfsfunktion: Zufällige Auswahl von n Fragen aus einem Pool
export function waehleFragen(pool: PruefungsFrage[], anzahl: number): PruefungsFrage[] {
  const gemischt = shuffleArray(pool);
  return gemischt.slice(0, Math.min(anzahl, gemischt.length));
}

// Hilfsfunktion: Schwächen-Themen aus Ergebnis extrahieren
export function extrahiereSchwaechen(
  fragen: PruefungsFrage[],
  antworten: boolean[],
): string[] {
  const themenMap = new Map<string, { richtig: number; total: number }>();

  fragen.forEach((f, i) => {
    const current = themenMap.get(f.thema) ?? { richtig: 0, total: 0 };
    current.total++;
    if (antworten[i]) current.richtig++;
    themenMap.set(f.thema, current);
  });

  const schwaechen: string[] = [];
  for (const [thema, stats] of themenMap) {
    const quote = stats.richtig / stats.total;
    if (quote < 0.6) {
      schwaechen.push(thema);
    }
  }
  return schwaechen;
}

// Verfügbare CEs mit Prüfungen
export function getVerfuegbarePruefungen(): { ceId: string; label: string; fragenAnzahl: number }[] {
  return Object.entries(ALLE_FRAGEN).map(([ceId, fragen]) => ({
    ceId,
    label: ceId === "ce-01" ? "CE 01 — Ausbildungsstart" : ceId.toUpperCase(),
    fragenAnzahl: fragen.length,
  }));
}
