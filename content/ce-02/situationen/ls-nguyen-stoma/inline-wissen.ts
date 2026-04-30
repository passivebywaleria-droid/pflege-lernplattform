// CE-02 Situation Herr Nguyen — Inline-Wissens-Bausteine
// 10 Bausteine: 6 stuhlausscheidung, 2 pflegedokumentation (Wiederbegegnung), 2 haut (Wiederbegegnung)
// Positionierung: VOR dem Anwendungs-Step der den Begriff braucht
// Stoma-spezifisch: Lochgröße + 2 mm, Schablone, Abschwellung 6-8 Wo
// Pipeline v9 — 2026-04-26

import type { ContentStep } from "../../../_types";

// =============================================================================
// PHASE 1 — INFORMIEREN
// =============================================================================

/**
 * IW-01: Stoma-Arten (stuhlausscheidung)
 * Position: VOR Step 1.2 (MC: Diagnose einordnen — endständiges Kolostoma)
 * Grund: Schüler braucht Grundverständnis Stoma-Typen bevor er differenzieren soll
 */
export const CE02_NGUYEN_IW_01_STOMA_ARTEN: ContentStep = {
  stepId: "ce02-nguyen-info-01b-stoma-arten",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 1,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
    "I Care Pflege, 2. Aufl. — Kap. Stoma (2020)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-info-stoma-arten",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du kennst jetzt die Stoma-Typen. Ordne Herrn Nguyens Stoma ein.",
  contentC1: {
    title: "Welche Stomaformen gibt es?",
    body: "",
    glossarBegriffe: ["Kolostoma", "Ileostoma", "endständig", "doppelläufig"],
  },
  contentB1: {
    title: "Was ist ein Stoma?",
    body: "",
    glossarBegriffe: ["Kolostoma", "Ileostoma", "Stoma"],
  },
  inlineWissen: {
    bausteinRef: "stuhlausscheidung-stoma-arten",
    themaPrimaer: "stuhlausscheidung",
    storyAufhaenger:
      "In der Übergabe steht: \"Herr Nguyen, endständiges Kolostoma nach Sigmaresektion.\" Aber was heißt das genau — und was unterscheidet sein Stoma von dem, das z.B. Frau Yilmaz nach einer Hemikolektomie vorübergehend tragen würde?",
    storyAufhaengerB1:
      "In der Übergabe steht: Herr Nguyen hat ein \"endständiges Kolostoma\". Was bedeutet das? Und wie unterscheidet es sich von anderen Stoma-Formen?",
    kerntext:
      "**Was ist ein Stoma?** Eine operativ angelegte Öffnung, durch die der Darm über die Bauchdecke nach außen geleitet wird. Der Stuhl wird in einem Beutel aufgefangen.\n\n**Zwei Haupt-Typen nach Darmabschnitt:**\n\n• **Kolostoma** — aus dem Dickdarm (Kolon). Output: breiig bis geformt, wenig aggressiv für die Haut.\n\n• **Ileostoma** — aus dem Dünndarm (Ileum). Output: dünnflüssig, enzymatisch aggressiv — höhere Hautgefährdung.\n\n**Zwei Haupt-Typen nach Dauer:**\n\n• **Endständig** = dauerhaft. Das Darmende wird durch die Bauchdecke geführt und vernäht. Keine Rückverlagerung geplant. Herr Nguyen hat diesen Typ.\n\n• **Doppelläufig** = vorübergehend. Beide Darmschenkel (zuführend + abführend) werden ausgeleitet. Rückverlagerung nach Heilung möglich.\n\n**Warum ist das wichtig für die Pflege?** Endständiges Kolostoma = dauerhafte Körperbildveränderung. Die Anleitung zur Selbstversorgung hat höchste Priorität — Herr Nguyen wird dieses Stoma sein Leben lang haben.",
    kerntextB1:
      "**Was ist ein Stoma?** Eine Öffnung am Bauch. Der Darm kommt durch die Bauchwand nach draußen. Der Stuhl geht in einen Beutel.\n\n**Zwei Stoma-Typen:**\n\n• **Kolostoma** = aus dem Dickdarm. Stuhl ist breiig bis fest.\n\n• **Ileostoma** = aus dem Dünndarm. Stuhl ist dünnflüssig und aggressiver für die Haut.\n\n**Dauerhaft oder vorübergehend:**\n\n• **Endständig** = bleibt für immer. Herr Nguyen hat diesen Typ.\n\n• **Doppelläufig** = kann zurückverlegt werden.\n\nHerr Nguyen muss lernen, sein Stoma selbst zu versorgen. Es bleibt dauerhaft.",
    faustregel:
      "**Endständig = dauerhaft.** Herr Nguyen lernt Selbstversorgung — nicht als Option, sondern als Ziel.",
    faustregelB1:
      "Endständig heißt: Das Stoma bleibt für immer. Herr Nguyen muss lernen, es selbst zu versorgen.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Kein Stoma, aber post-OP Darm-Atonie möglich",
        kurzbeschreibung:
          "Bei ihr geht es um post-OP-Motilitätsstörungen nach Hüft-TEP — kein Stoma, aber der Darm reagiert auf Narkose und Immobilisation.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Stuhlinkontinenz bei Hemiparese",
        kurzbeschreibung:
          "Bei ihm ist die Stuhlkontrolle durch den Schlaganfall eingeschränkt — kein Stoma, aber ein anderer Weg, die Kontrolle über die Ausscheidung zu verlieren.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Neugeborenenausscheidung (Mekonium)",
        kurzbeschreibung:
          "Bei Säugling Emilia geht es um normalen Mekonium-Abgang und Stuhlbeobachtung — ein ganz anderer Kontext, aber dasselbe Grundprinzip: Output beobachten + dokumentieren.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen hat ein endständiges Kolostoma nach Sigmaresektion. Was bedeutet 'endständig' — und warum ist das für die Pflegeplanung entscheidend?",
      rueckseite:
        "Endständig = Darmende durch Bauchdecke nach außen, dauerhaft, keine Rückverlagerung. Kolostoma = Dickdarm, breiig-geformter Output. Unterschied: Ileostoma = Dünndarm, dünnflüssig, hautgefährdend. Pflegerisch: Selbstversorgung ist Primärziel — Anleitung hat höchste Priorität. Spektrum: Petrov (Stuhlinkontinenz bei Hemiparese), Emilia (Mekonium-Beobachtung). Faustregel: **Endständig = dauerhaft. Selbstversorgung ist das Ziel.**",
    },
  },
};

// =============================================================================
// PHASE 2 — BEOBACHTEN
// =============================================================================

/**
 * IW-02: Haut und Mazerierung bei Stoma (haut, Wiederbegegnung)
 * Position: VOR Step 2.3 (Highlight: Haut-Assessment)
 * Grund: Mazerierung ist das Kern-Haut-Thema bei Stoma — Schüler braucht Vorwissen
 * Wiederbegegnung: Haut wurde zentral bei Frau Yilmaz gelehrt
 */
export const CE02_NGUYEN_IW_02_HAUT_MAZERIERUNG: ContentStep = {
  stepId: "ce02-nguyen-beob-02b-haut-mazerierung",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
    "DNQP — Expertenstandard Pflege von Menschen mit chronischen Wunden (2015)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-beob-haut-mazerierung",
  tag: "pflege",
  themaPrimaer: "haut",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "Mazerierung im Hinterkopf? Gut. Jetzt: Markiere was du bei Herrn Nguyen dokumentierst.",
  contentC1: {
    title: "Mazerierung bei Stoma-Patienten",
    body: "",
    glossarBegriffe: ["Mazerierung", "Stomaplatte", "Säureschutzmantel"],
  },
  contentB1: {
    title: "Was ist Mazerierung?",
    body: "",
    glossarBegriffe: ["Mazerierung", "Stomaplatte"],
  },
  inlineWissen: {
    bausteinRef: "haut-mazerierung-stoma",
    themaPrimaer: "haut",
    themenSekundaer: ["stuhlausscheidung"],
    wiederbegegnung: {
      basisBausteinId: "haut-inspektion-grundlagen",
      basisPatient: "Frau Yilmaz",
      vertiefung:
        "Bei Frau Yilmaz ging es um Hautinspektion bei Dekubitus (Druckstellen). Bei Herrn Nguyen kommt eine andere Gefährdung dazu: Mazerierung durch Stomainhalt. Der Säureschutzmantel (pH 5,5) wird durch den leicht alkalischen Kolostoma-Output zerstört — die Haut verliert ihre Schutzbarriere.",
      vertiefungB1:
        "Bei Frau Yilmaz hast du die Haut bei Dekubitus angeschaut. Bei Herrn Nguyen ist etwas anderes gefährlich: Stuhl aus dem Stoma greift die Haut an (Mazerierung). Der Hautschutz (pH 5,5) geht dadurch kaputt.",
    },
    storyAufhaenger:
      "Du schaust gleich auf die Haut rund um Herrn Nguyens Stoma. Bei Frau Yilmaz war die Hautinspektion auf Dekubitus fokussiert — Druck war das Problem. Hier ist die Gefahr eine andere: enzymatische Hautzerstörung durch Stomainhalt.",
    storyAufhaengerB1:
      "Du schaust gleich auf die Haut rund um das Stoma. Von Frau Yilmaz kennst du die Hautbeobachtung schon. Bei Herrn Nguyen kommt etwas Neüs dazu: Stuhl auf der Haut ist schädlich.",
    kerntext:
      "**Was ist Mazerierung?** Aufweichung und Zerstörung der Haut durch längeren Kontakt mit Feuchtigkeit — hier: Stomainhalt.\n\n**Warum passiert das beim Stoma?**\n\n• Kolostoma-Output ist leicht alkalisch — er zerstört den **Säureschutzmantel** (pH 5,5) der Haut.\n\n• Ileostoma-Output ist noch aggressiver — er enthält Verdauungsenzyme (Proteasen, Lipasen).\n\n• Bei Leckage (Stomaplatte sitzt nicht dicht) trifft Stomainhalt direkt auf die peristomale Haut.\n\n**Wie erkennst du Mazerierung?** Haut aufgeweicht, weißlich, verletzlich — schon minimale Reibung reißt sie ein. Frühzeichen: Rötung im Ring um die Stomaplatte.\n\n**Was schützt?**\n• Passende Plattengröße (Stoma + 2 mm Sicherheitsabstand)\n• Schutzpaste (füllt Unebenheiten, schließt Lücken)\n• Regelmäßiger Beutelwechsel (nicht überfüllen lassen)",
    kerntextB1:
      "**Was ist Mazerierung?** Die Haut wird durch Feuchtigkeit beschädigt.\n\nBei Herrn Nguyen: Stuhl aus dem Stoma trifft auf die Haut. Der Stuhl greift die Haut an.\n\n**Wie erkennst du das?** Die Haut wird weiß, weich und reißt leicht ein. Zuerst: Rötung rund um die Stomaplatte.\n\n**Was schützt die Haut?**\n• Die Stomaplatte muss genau passen (Stoma + 2 mm)\n• Schutzpaste schützt die Haut\n• Beutel regelmäßig wechseln",
    faustregel:
      "**Stomaplatte + 2 mm = Hautschutz.** Jeder Millimeter zu viel ist offene Haut für Stomainhalt.",
    faustregelB1:
      "Stomaplatte = Stoma-Größe + 2 mm. Zu groß = Haut wird angegriffen.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II",
        kurzbeschreibung:
          "Bei ihr ist Feuchtigkeitsschädigung durch Inkontinenz das Thema — Mazeration durch Urin. Gleicher Mechanismus, andere Quelle.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas + Hautfalten-Intertrigo",
        kurzbeschreibung:
          "Hautfalten bei BMI 38 schaffen feuchte Kammern — Intertrigo ist Mazeration durch Schweiß und Reibung, nicht durch Stomainhalt.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Windel-Dermatitis",
        kurzbeschreibung:
          "Auch bei Säugling Emilia: Stuhl auf der Haut verursacht Mazeration. Windel-Dermatitis = Säuglingsversion desselben Problems.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Die Haut rund um Herrn Nguyens Stoma ist leicht gerötet. Was ist die häufigste Ursache für peristomale Hautschädigung?",
      rueckseite:
        "Mazerierung durch Stomainhalt-Kontakt. Kolostoma-Output ist leicht alkalisch und zerstört den Säureschutzmantel (pH 5,5). Schutz: Passende Plattengröße (Stoma + 2 mm), Schutzpaste, regelmäßiger Beutelwechsel. Spektrum: Yilmaz (Urin-Mazeration), Schmidt (Intertrigo-Hautfalten), Emilia (Windel-Dermatitis). **Jeder Millimeter zu viel ist offene Haut.**",
    },
  },
};

/**
 * IW-03: Stoma-Output und Transitphase (stuhlausscheidung)
 * Position: VOR Step 2.4 (Dialog: Ernährung beobachten)
 * Grund: Schüler muss wissen, was normaler post-OP-Output ist, bevor er Ernährung bewertet
 */
export const CE02_NGUYEN_IW_03_STOMA_OUTPUT: ContentStep = {
  stepId: "ce02-nguyen-beob-03b-stoma-output",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
    "Heaton KW, Lewis SJ (1997) — Stool Form Scale",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-beob-stoma-output-wissen",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  themenSekundaer: ["ernährungsassessment"],
  transition:
    "Du weißt jetzt, was normaler Stoma-Output am 4. Tag ist. Jetzt: Was isst Herr Nguyen eigentlich?",
  contentC1: {
    title: "Stoma-Output in der Transitphase",
    body: "",
    glossarBegriffe: [
      "Transitphase",
      "Stoma-Output",
      "Bristol Stool Scale",
    ],
  },
  contentB1: {
    title: "Was kommt aus dem Stoma — und wann wird es normal?",
    body: "",
    glossarBegriffe: ["Stoma-Output", "Transitphase"],
  },
  inlineWissen: {
    bausteinRef: "stuhlausscheidung-normwerte",
    themaPrimaer: "stuhlausscheidung",
    storyAufhaenger:
      "Im Stoma-Beutel von Herrn Nguyen: dünnflüssig, gelblich-braun, ca. 1/3 gefüllt. Ist das normal für den 4. Tag post-OP? Oder ein Zeichen, dass etwas nicht stimmt?",
    storyAufhaengerB1:
      "Im Beutel von Herrn Nguyen ist dünnflüssiger, gelblich-brauner Stuhl. Der Beutel ist 1/3 voll. Ist das normal am 4. Tag nach der OP?",
    kerntext:
      "**Die Transitphase (Tag 3–7 post-OP):**\n\nNach einer Darm-OP startet die Peristaltik (Darmbewegung) langsam wieder. Der Output verändert sich schrittweise:\n\n• **Tag 1–3:** Kein oder sehr wenig Output, evtl. Schleim. Der Darm erholt sich.\n\n• **Tag 3–7 (Transitphase):** Dünnflüssig bis wässrig, gelblich-braun. Das ist **normal** — der Darm arbeitet wieder, aber der Kostaufbau hat gerade erst begonnen. Herrn Nguyens Befund passt genau hierher.\n\n• **Ab Woche 2:** Zunehmend breiig bis geformt, je nach Kostaufbau und Darmabschnitt.\n\n**Kolostoma vs. Ileostoma — Output-Unterschied:**\n• Kolostoma (Herr Nguyen): geformter Output nach Eingewöhnungsphase\n• Ileostoma: dauerhaft dünnflüssig (Dickdarm fehlt als \"Wasserentzieher\")\n\n**Alarmsignal:** Kein Output über 48h trotz Kostaufbau → Ileus-Verdacht → Arzt sofort informieren.",
    kerntextB1:
      "**Was ist die Transitphase?** In den ersten Tagen nach der OP erholt sich der Darm.\n\n• **Tag 1–3:** Fast kein Stuhl, manchmal Schleim.\n• **Tag 3–7:** Dünnflüssig, gelblich — das ist **normal**. Herrn Nguyens Beutel-Inhalt ist genau so.\n• **Ab Woche 2:** Stuhl wird fester.\n\n**Alarmsignal:** Gar kein Stuhl seit 48 Stunden, obwohl Herr Nguyen isst → sofort Arzt informieren.",
    faustregel:
      "**Dünnflüssig am Tag 4 = Transitphase = normal.** Kein Output über 48h = Alarm.",
    faustregelB1:
      "Dünnflüssig am Tag 4 ist normal. Gar kein Stuhl seit 48 Stunden ist ein Alarm.",
    spektrum: [
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Chronische Obstipation bei COPD",
        kurzbeschreibung:
          "Bei ihr ist das Gegenteil das Problem: chronische Obstipation durch Bewegungsmangel, Medikamente und schlechte Ernährung — kein post-OP-Kontext.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Dysphagie + reduzierte Darmmotilität",
        kurzbeschreibung:
          "Reduzierter Intake wegen Schluckstörung führt auch bei ihm zu verändertem Stuhl — aber aus neurologischer Ursache, nicht post-OP.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Muttermilchstuhl vs. Formulastuhl",
        kurzbeschreibung:
          "Auch bei Säugling Emilia ist Stuhlkonsistenz ein wichtiges Beobachtungskriterium — Muttermilchstuhl ist senf-gelb und weich, Formulastuhl fester.",
      },
    ],
    sonstBox:
      "Nicht bei Herrn Nguyen relevant, aber wichtig zu kennen: **Paradoxe Diarrhoe** (dünnflüssiger Stuhl bei Obstipation — Stuhl umfließt harte Kotmasse). Kommt vor bei älteren Patienten ohne Stoma. Quelle: I Care Pflege Kap. Stuhlausscheidung.",
    sonstBoxB1:
      "Andere Stuhl-Probleme, die bei Herrn Nguyen nicht vorkommen: **Paradoxe Diarrhoe** (dünner Stuhl obwohl eigentlich Verstopfung vorliegt). Mehr dazu in einem anderen Thema.",
    karteikarte: {
      vorderseite:
        "Herrn Nguyens Stoma-Beutel zeigt am 4. POD dünnflüssig-gelblichen Output. Normal oder auffällig?",
      rueckseite:
        "Normal — Tag 3–7 ist die Transitphase: Darm arbeitet wieder, Kostaufbau beginnt, Output noch dünnflüssig. Ab Woche 2 zunehmend geformt bei Kolostoma. Alarmsignal: Kein Output > 48h trotz Kostaufbau = Ileus-Verdacht. Spektrum: Kovac (chron. Obstipation), Petrov (Dysphagie), Emilia (Säugling-Stuhlbeobachtung). **Dünnflüssig am Tag 4 = Transitphase = normal.**",
    },
  },
};

// =============================================================================
// PHASE 3 — PLANEN
// =============================================================================

/**
 * IW-04: Beutelwechsel-Grundlagen (stuhlausscheidung)
 * Position: VOR Step 3.2 (Sequencing: Beutelwechsel-Ablauf)
 * Grund: Schüler muss die Prinzipien kennen bevor er die Reihenfolge sortiert
 * Kern-Aspekt: Lochgröße = Stoma + 2 mm, Schablone bei JEDEM Wechsel, Abschwellung 6-8 Wochen
 */
export const CE02_NGUYEN_IW_04_BEUTELWECHSEL: ContentStep = {
  stepId: "ce02-nguyen-plan-01b-beutelwechsel-prinzip",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-plan-beutelwechsel-wissen",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  transition:
    "Die Prinzipien sitzen. Jetzt: Bringe die 9 Schritte in die richtige Reihenfolge.",
  contentC1: {
    title: "Drei Grundprinzipien beim Stoma-Beutelwechsel",
    body: "",
    glossarBegriffe: [
      "Hautschutzplatte",
      "Messschablone",
      "Schutzpaste",
    ],
  },
  contentB1: {
    title: "Beutelwechsel — drei wichtige Regeln",
    body: "",
    glossarBegriffe: ["Hautschutzplatte", "Schablone", "Schutzpaste"],
  },
  inlineWissen: {
    bausteinRef: "stuhlausscheidung-beutelwechsel",
    themaPrimaer: "stuhlausscheidung",
    storyAufhaenger:
      "Gleich wechselst du den Beutel bei Herrn Nguyen. Aber eine Frage vorher: Im Patientenblatt steht \"Stoma 60 mm\". Übernimmst du diesen Wert einfach — oder misst du selbst? Die Antwort entscheidet über Hautschutz oder Hautschädigung.",
    storyAufhaengerB1:
      "Gleich wechselst du den Beutel. Aber erst: Im Patientenblatt steht \"Stoma 60 mm\". Übernimmst du den Wert? Oder misst du selbst? Die richtige Antwort schützt die Haut von Herrn Nguyen.",
    kerntext:
      "**Drei Grundprinzipien beim Beutelwechsel:**\n\n**1. Schablone — bei JEDEM Wechsel neu messen.**\nDas Stoma schwillt in den ersten **6–8 Wochen post-OP ab**. Ein OP-Tag-Wert ist nach wenigen Tagen veraltet. Falsche Größe = Hautschädigung.\n\n**2. Lochgröße = Stoma-Durchmesser + 2 mm.**\n• Zu groß (+5 mm): Haut zwischen Platte und Stoma liegt frei → Stomainhalt greift die Haut an → Mazerierung.\n• Zu klein (exakt auf Stoma): Platte klemmt die Stomaschleimhaut ab → Durchblutungsstörung → Nekrose-Risiko.\n• Richtig (+2 mm): Haut geschützt, Stoma nicht eingeklemmt.\n\n**3. Schwerkraft-Prinzip beim Abziehen.**\nAlten Beutel von **oben nach unten** abziehen. Die Schwerkraft hält den Stuhl im Beutel, statt ihn über das Stoma zu drücken. Eine Hand zieht, die andere Hand hält die Haut sanft gegen (Hauteinriss vermeiden).",
    kerntextB1:
      "**Drei wichtige Regeln:**\n\n**1. Jedes Mal neu messen.**\nDas Stoma wird in den ersten 6–8 Wochen kleiner. Du misst jedes Mal mit der Schablone.\n\n**2. Lochgröße = Stoma + 2 mm.**\nZu groß: Stuhl kommt auf die Haut. Zu klein: Platte klemmt das Stoma ab. 2 mm = genau richtig.\n\n**3. Von oben nach unten abziehen.**\nDen alten Beutel von oben nach unten abziehen. So fließt der Stuhl nach unten — nicht über das Stoma.",
    faustregel:
      "**Schablone + 2 mm + Schwerkraft.** Drei Worte, die Herrn Nguyens Haut schützen.",
    faustregelB1:
      "Schablone + 2 mm + von oben nach unten. Drei Regeln für den Beutelwechsel.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus-Wundversorgung",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist es Wundversorgung statt Stomaversorgung — aber das Prinzip \"aseptisch, von innen nach außen, nicht kontaminieren\" ist das gleiche Grundmuster.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Manipulation an Verbund",
        kurzbeschreibung:
          "Bei Herrn Bauer reißt er sich manchmal Verbundmaterial ab. Bei Herrn Nguyen ist Manipulation des Stoma-Beutels ein potenzielles Risiko, wenn er verwirrt oder unruhig ist — in der Nacht z.B.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Hautfalten erschweren Versorgung",
        kurzbeschreibung:
          "Hautfalten bei Adipositas würden ein Stoma besonders problematisch machen: die Platte sitzt nicht dicht, Faltenwurf führt zu Leckage. Gleicher Mechanismus wie bei Herrn Nguyens Leckage-Komplikation.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Wie bestimmst du die Lochgröße der Hautschutzplatte bei Herrn Nguyen (4. Tag post-OP, Stoma 60 mm)?",
      rueckseite:
        "Stoma bei JEDEM Wechsel mit Schablone neu messen (Abschwellung 6–8 Wochen post-OP). Lochgröße = Stoma-Durchmesser + 2 mm. Heute: 60 mm + 2 mm = 62 mm. Nie Wert aus dem Patientenblatt übernehmen — veraltet nach wenigen Tagen. Zu groß = Mazerierung. Zu klein = Nekrose-Risiko. **Schablone + 2 mm + Schwerkraft.**",
    },
  },
};

/**
 * IW-05: SBAR bei Stoma (pflegedokumentation, Wiederbegegnung)
 * Position: VOR Step 3.3 (Matching: Stomatherapeut-Rolle)
 * Grund: Interprofessionelle Kommunikation braucht SBAR-Kompetenz
 * Wiederbegegnung: SBAR wurde zentral bei Frau M. gelehrt
 */
export const CE02_NGUYEN_IW_05_SBAR_STOMA: ContentStep = {
  stepId: "ce02-nguyen-plan-02b-sbar-stoma",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "WHO 2007 — Communication During Patient Handovers",
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-plan-sbar-wissen",
  tag: "pflege",
  themaPrimaer: "pflegedokumentation",
  themenSekundaer: ["stuhlausscheidung", "pflegeprozess"],
  transition:
    "SBAR kennst du schon. Jetzt: Wer macht eigentlich was im Team?",
  contentC1: {
    title: "SBAR bei Stoma-Patienten",
    body: "",
    glossarBegriffe: ["SBAR", "interprofessionell", "Stomatherapeut"],
  },
  contentB1: {
    title: "SBAR — kurze Zusammenfassung",
    body: "",
    glossarBegriffe: ["SBAR", "Stomatherapeut"],
  },
  inlineWissen: {
    bausteinRef: "pflegedokumentation-sbar",
    themaPrimaer: "pflegedokumentation",
    themenSekundaer: ["stuhlausscheidung"],
    wiederbegegnung: {
      basisBausteinId: "pflegedokumentation-sbar",
      basisPatient: "Frau M.",
      vertiefung:
        "SBAR kennst du von Frau M.s Sturzprotokoll. Bei Herrn Nguyen nutzt du SBAR für etwas anderes: interprofessionelle Kommunikation mit dem Stomatherapeuten Herrn Baum und der Ernährungsberaterin. Die Struktur bleibt gleich — der Inhalt ist stoma-spezifisch: Stoma-Befund, Output, Hautumgebung, Ernährungsdefizit.",
      vertiefungB1:
        "SBAR kennst du von Frau M. (Sturz). Bei Herrn Nguyen nutzt du SBAR für die Übergabe an den Stomatherapeuten und die Ernährungsberaterin. Die vier Buchstaben bleiben gleich — aber der Inhalt ist Stoma-spezifisch.",
    },
    storyAufhaenger:
      "Gleich ordnest du die Teamrollen zu: Pflegekraft vs. Stomatherapeut vs. Ernährungsberaterin. Aber wie übergibst du strukturiert an Herrn Baum, wenn er um 10 Uhr kommt? SBAR kennst du von Frau M. — hier die Stoma-Variante.",
    storyAufhaengerB1:
      "Der Stomatherapeut Herr Baum kommt um 10 Uhr. Wie sagst du ihm, was los ist? SBAR kennst du schon von Frau M. Hier die Stoma-Variante.",
    kerntext:
      "**SBAR für die Stoma-Übergabe an Herrn Baum:**\n\n• **S** (Situation): Herr Nguyen, 72 J., 4. POD Sigmaresektion, endständiges Kolostoma.\n\n• **B** (Background): Mangelernährung (BMI 19, Albumin 28), Braden 14, Heparin läuft. Kolostoma aktiv seit Tag 3.\n\n• **A** (Assessment): Stoma rosig, 1,5 cm, Haut leicht gerötet aber keine Mazerierung. Output dünnflüssig-gelblich (Transitphase). Leckage heute Morgen an Plattenrand — Ursache: Hautfaltenwurf rechts. Neu angepasst. Patient vermeidet Blickkontakt mit Stoma.\n\n• **R** (Recommendation): Bitte Plattengrösse prüfen, Anleitung Selbstversorgung beginnen, Ehefrau Mai als Backup anleiten.\n\n**Warum SBAR auch für Stomatherapeuten?** Herr Baum ist Fachkraft, aber er war nicht da. Er braucht deinen Blick auf den Patienten — strukturiert, ohne Wertung.",
    kerntextB1:
      "**SBAR für die Übergabe an den Stomatherapeuten:**\n\n• **S**: Herr Nguyen, 72 Jahre, 4. Tag nach OP, endständiges Kolostoma.\n• **B**: Mangelernährung (BMI 19), Haut leicht gerötet, Heparin läuft.\n• **A**: Stoma rosig und feucht. Leckage heute Morgen — wurde behoben. Patient schaut nicht auf sein Stoma.\n• **R**: Bitte Plattengröße prüfen. Anleitung Selbstversorgung beginnen. Ehefrau Mai möchte dabei sein.\n\nSBAR funktioniert überall — egal ob Sturz oder Stoma.",
    faustregel:
      "**SBAR funktioniert überall.** Gleiches Schema, ob Sturz bei Frau M. oder Stoma bei Herrn Nguyen.",
    faustregelB1:
      "SBAR funktioniert immer gleich — bei jedem Patienten und bei jeder Übergabe.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturz-Übergabe",
        kurzbeschreibung:
          "Bei Frau M. war SBAR für das Sturzprotokoll und die Übergabe an den Nachtdienst — der Erstfall, in dem du SBAR gelernt hast.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Neurologische Übergabe",
        kurzbeschreibung:
          "Bei Herrn Petrov ist SBAR wichtig für die Übergabe neurologischer Befunde (NIHSS-Score, Aphasie-Grad) an das Stroke-Team.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulante Übergabe",
        kurzbeschreibung:
          "Bei Frau Kovac läuft SBAR telefonisch — ambulante Übergabe an den Hausarzt. Noch knapper, weil am Telefon.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Stomatherapeut Herr Baum kommt um 10 Uhr. Wie übergibst du Herrn Nguyens Stoma-Status — und in welchem Format?",
      rueckseite:
        "SBAR: S = Patient, Diagnose, OP-Tag. B = Vorerkrankungen, Medikation, Ernährung. A = Stoma-Befund, Output, Haut, Leckage, psychosozialer Status. R = Was du vom Stomatherapeuten brauchst. Gleiches Schema wie bei Frau M. (Sturz), Petrov (Schlaganfall), Kovac (ambulant). **SBAR funktioniert überall.**",
    },
  },
};

// =============================================================================
// PHASE 4 — DURCHFUEHREN
// =============================================================================

/**
 * IW-06: Lochgröße messen — das Anti-Pattern (stuhlausscheidung)
 * Position: VOR Step 4.1b (MC: Lochgröße der Hautschutzplatte messen)
 * Grund: Der häufigste Anfänger-Fehler ist, den Wert aus dem Patientenblatt zu übernehmen
 */
export const CE02_NGUYEN_IW_06_LOCHGROESSE: ContentStep = {
  stepId: "ce02-nguyen-dur-01a-lochgrösse-wissen",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dur-lochgrösse-wissen",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  transition:
    "Jetzt weißt du, warum du nie den alten Wert übernimmst. Teste dein Wissen.",
  contentC1: {
    title: "Stoma-Abschwellung: Warum der alte Wert gefährlich ist",
    body: "",
    glossarBegriffe: [
      "Stoma-Abschwellung",
      "Messschablone",
      "Hautschutzplatte",
    ],
  },
  contentB1: {
    title: "Warum du jedes Mal neu misst",
    body: "",
    glossarBegriffe: ["Schablone", "Hautschutzplatte", "Abschwellung"],
  },
  inlineWissen: {
    bausteinRef: "stuhlausscheidung-stoma-abschwellung",
    themaPrimaer: "stuhlausscheidung",
    storyAufhaenger:
      "Du stehst mit der neuen Hautschutzplatte bereit. Im Patientenblatt steht: \"Stoma 60 mm, gemessen am OP-Tag.\" Das war vor 4 Tagen. Übernimmst du den Wert? Eine erfahrene Pflegekraft würde sagen: niemals.",
    storyAufhaengerB1:
      "Du hast die neue Platte bereit. Im Patientenblatt steht: \"Stoma 60 mm\" — gemessen vor 4 Tagen. Nimmst du diesen Wert? Nein.",
    kerntext:
      "**Das Stoma schwillt ab.**\n\nIn den ersten **6–8 Wochen** nach der Stoma-Anlage verändert sich die Größe sichtbar:\n\n• **Unmittelbar post-OP:** Stoma ödematös geschwollen (Gewebe-Reaktion auf OP-Trauma)\n• **Woche 1–2:** Abschwellung beginnt — das Stoma kann **mehrere Millimeter kleiner** werden\n• **Woche 4–8:** Endgültige Größe erreicht. Ab dann kann die Plattengröße standardisiert werden.\n\n**Was passiert, wenn du den alten Wert nimmst?**\n\nAngenommen, das Stoma ist inzwischen von 60 mm auf 55 mm geschrumpft (realistisch für Tag 4–14):\n• Du schneidest das Loch auf 62 mm (alter Wert + 2 mm) → 5 mm nackter Hautring\n• Stomainhalt trifft direkt auf diese Haut → Mazerierung beginnt\n\n**Deshalb: Schablone bei JEDEM Wechsel.** Messen, anzeichnen, zuschneiden — bis die Endgröße erreicht ist.",
    kerntextB1:
      "**Das Stoma wird kleiner.**\n\nIn den ersten 6–8 Wochen nach der OP schwillt das Stoma ab.\n\n• Kurz nach der OP: Das Stoma ist geschwollen.\n• Woche 1–2: Es wird kleiner.\n• Ab Woche 4–8: Es hat die endgültige Größe.\n\n**Wenn du den alten Wert nimmst:** Das Loch ist zu groß. Stuhl kommt auf die Haut. Die Haut wird beschädigt.\n\n**Deshalb:** Jedes Mal mit der Schablone messen. Bis das Stoma die Endgröße hat.",
    faustregel:
      "**6–8 Wochen lang: bei jedem Wechsel neu messen.** Der OP-Tag-Wert ist am 4. Tag bereits veraltet.",
    faustregelB1:
      "6 bis 8 Wochen lang misst du jedes Mal neu. Der alte Wert stimmt nicht mehr.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Wundgröße verändert sich — regelmäßig nachmessen",
        kurzbeschreibung:
          "Auch bei Frau Yilmaz' Dekubitus-Wunde verändert sich die Größe — regelmäßiges Nachmessen ist dort genauso Pflicht (Wunddokumentation cm x cm).",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Katheter-Fixierung — Hautveränderung kontrollieren",
        kurzbeschreibung:
          "Bei Herrn Petrov ist nicht das Stoma, sondern der Blasenkatheter-Ausgang die Stelle, die regelmäßig inspiziert wird. Gleiches Prinzip: Haut verändert sich, und die Versorgung muss angepasst werden.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Warum darfst du den Stoma-Durchmesser aus dem Patientenblatt (OP-Tag) am 4. POD NICHT für die Plattengröße übernehmen?",
      rueckseite:
        "Das Stoma schwillt in den ersten 6–8 Wochen post-OP ab. Ein Wert vom OP-Tag ist nach wenigen Tagen veraltet. Wenn das Loch zu groß ist: Stomainhalt auf nackter Haut → Mazerierung. Lösung: Bei JEDEM Wechsel mit Schablone neu messen, Loch = Stoma + 2 mm. Erst nach Woche 4–8 ist die Endgröße erreicht. **6–8 Wochen: jedes Mal neu messen.**",
    },
  },
};

/**
 * IW-07: Leckage-Management (stuhlausscheidung)
 * Position: VOR Step 4.5 (Branching K3: Beutel undicht)
 * Grund: Leckage-Priorisierung (Haut vor Beutel) muss verstanden sein
 */
export const CE02_NGUYEN_IW_07_LECKAGE: ContentStep = {
  stepId: "ce02-nguyen-dur-04b-leckage-wissen",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dur-leckage-wissen",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  themenSekundaer: ["haut"],
  transition:
    "Haut vor Beutel. Das ist die Regel. Gleich passiert genau das — Herrn Nguyens Beutel ist undicht.",
  contentC1: {
    title: "Leckage-Management: Haut zuerst",
    body: "",
    glossarBegriffe: ["Leckage", "Mazerierung", "Stomaplatte"],
  },
  contentB1: {
    title: "Was tun wenn der Beutel ausläuft?",
    body: "",
    glossarBegriffe: ["Leckage", "Stomaplatte"],
  },
  inlineWissen: {
    bausteinRef: "stuhlausscheidung-leckage-management",
    themaPrimaer: "stuhlausscheidung",
    themenSekundaer: ["haut"],
    storyAufhaenger:
      "Stell dir vor: 20 Minuten nach deinem Beutelwechsel ruft Herr Nguyen. Der Beutel ist undicht. Stomainhalt auf der Bauchhaut. Was tust du ZUERST — neuen Beutel anlegen oder Haut reinigen?",
    storyAufhaengerB1:
      "Stell dir vor: Der Beutel ist undicht. Stuhl auf der Haut. Was tust du zuerst — neuen Beutel oder Haut reinigen?",
    kerntext:
      "**Leckage ist die häufigste Stoma-Komplikation.** Rund 70 % der Stomaträger erleben sie mindestens einmal.\n\n**Die goldene Regel: Haut vor Beutel.**\n\n• **Schritt 1:** Stomainhalt sofort von der Haut entfernen. Lauwarmes Wasser, keine Desinfektionsmittel. Haut gründlich trocknen.\n\n• **Schritt 2:** Ursache beurteilen. Wo war die Leckage? Platte-Haut-Übergang (Schutzpaste unzureichend, Faltenwurf)? Beutel-Platten-Verbindung (Ring beschädigt)? Plattengröße falsch (Stoma abgeschwollen)?\n\n• **Schritt 3:** Platte neu anpassen. Stoma nochmals ausmessen, Lochgröße korrigieren.\n\n**Warum Haut vor Beutel?** Kolostoma-Output ist leicht alkalisch — jede Minute auf der Haut beschleunigt die Mazerierung. Der neue Beutel nützt nichts, wenn die Haut darunter bereits geschädigt ist.\n\n**Wann Arzt informieren?** Nur bei sichtbarer Hautschädigung, Stomaprolaps oder wiederholter Leckage trotz korrekter Versorgung.",
    kerntextB1:
      "**Leckage** heißt: der Beutel ist undicht. Das passiert oft.\n\n**Regel: Erst die Haut reinigen, DANN neuen Beutel anlegen.**\n\n1. Stuhl sofort von der Haut waschen (lauwarmes Wasser). Haut trocknen.\n2. Schauen: Warum war der Beutel undicht? Platte zu groß? Paste fehlt? Hautfalte?\n3. Platte neu anpassen. Stoma nochmals messen.\n\n**Warum Haut zuerst?** Der Stuhl schädigt die Haut. Jede Minute zählt.\n\nArzt informieren: nur wenn die Haut sichtbar geschädigt ist oder das Stoma sich verändert hat.",
    faustregel:
      "**Haut vor Beutel.** Erst reinigen und trocknen, dann Ursache klären, dann neu anlegen.",
    faustregelB1:
      "Erst Haut reinigen, dann Beutel neu anlegen. Haut vor Beutel.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Wundversorgung bei Leckage-Komplikation",
        kurzbeschreibung:
          "Bei Frau Yilmaz wäre eine Leckage im Dekubitus-Bereich katastrophal (Urin + Stuhl auf offene Wunde). Gleiche Priorität: Haut schützen vor technischer Versorgung.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Hautfalten erhöhen Leckage-Risiko",
        kurzbeschreibung:
          "Hautfalten bei Adipositas verhindern dichtes Sitzen der Stomaplatte. Bei Frau Schmidt wäre Leckage ein Dauerproblem — spezielle konvexe Platten oder Gürtelsysteme nötig.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Windel-Leckage",
        kurzbeschreibung:
          "Auch bei Säugling Emilia: Windel-Leckage = Stuhl auf der Haut = sofortige Reinigung. Gleiches Prinzip, anderer Kontext.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herrn Nguyens Stoma-Beutel ist 20 Minuten nach dem Wechsel undicht. Stomainhalt auf der Bauchhaut. Was ist die erste Maßnahme?",
      rueckseite:
        "Haut sofort reinigen und gründlich trocknen (Kolostoma-Output ist alkalisch → Mazerierung). DANN Ursache beurteilen (Platte-Haut-Übergang? Plattengröße? Verbindung?). DANN Platte neu anpassen + Stoma nachmessen. Arzt nur bei sichtbarer Hautschädigung oder Stomaveränderung. Spektrum: Yilmaz (Wundschutz), Schmidt (Hautfalten-Leckage), Emilia (Windel-Leckage). **Haut vor Beutel.**",
    },
  },
};

// =============================================================================
// PHASE 5 — EVALUIEREN
// =============================================================================

/**
 * IW-08: Stoma-Dokumentation (stuhlausscheidung + pflegedokumentation)
 * Position: VOR Step 5.1 (Categorize: Stoma-Situation evaluieren)
 * Grund: Schüler muss wissen was dokumentiert wird, um den Verlauf zu bewerten
 */
export const CE02_NGUYEN_IW_08_STOMA_DOKU: ContentStep = {
  stepId: "ce02-nguyen-eval-00b-stoma-doku-wissen",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-eval-stoma-doku-wissen",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  themenSekundaer: ["pflegedokumentation"],
  transition:
    "Du weißt jetzt, was in die Stomadokumentation gehört. Jetzt: Evaluiere den Morgen.",
  contentC1: {
    title: "Stomadokumentation: Die 9 Pflicht-Elemente",
    body: "",
    glossarBegriffe: [
      "Stomadokumentation",
      "Behandlungskontinuität",
      "Verlaufsdokumentation",
    ],
  },
  contentB1: {
    title: "Was muss in die Stoma-Dokumentation?",
    body: "",
    glossarBegriffe: ["Stoma-Dokumentation", "Pflegebericht"],
  },
  inlineWissen: {
    bausteinRef: "stuhlausscheidung-stomadokumentation",
    themaPrimaer: "stuhlausscheidung",
    themenSekundaer: ["pflegedokumentation"],
    storyAufhaenger:
      "Du evaluierst gleich Herrn Nguyens Morgen. Aber woran misst du den Erfolg? Die Stomadokumentation hat 9 Pflicht-Elemente — wenn alle 9 sauber dokumentiert sind, kann die nächste Schicht nahtlos weiterarbeiten.",
    storyAufhaengerB1:
      "Du bewertest gleich den Morgen bei Herrn Nguyen. Aber was muss alles in der Stoma-Dokumentation stehen? Es gibt 9 wichtige Punkte.",
    kerntext:
      "**Die 9 Pflicht-Elemente der Stomadokumentation:**\n\n1. **Datum + Uhrzeit** des Beutelwechsels\n2. **Stoma-Befund:** Farbe, Prominenz, Schleimhautzustand\n3. **Hautumgebung:** Rötung, Mazerierung, Einrisse?\n4. **Output:** Konsistenz, Farbe, geschätzte Menge\n5. **Leckage:** Ja/nein, Ursache, Maßnahme\n6. **Bauchdeckenwunde:** Kurzer Querverweis (Detail in Wunddokumentation)\n7. **Anwesende:** Wer war beim Wechsel dabei?\n8. **Angehörigen-Anleitung:** Was wurde gezeigt, von wem?\n9. **Stomatherapeut-Visite:** Wann, was, Ergebnis\n\n**Warum 9 Elemente?** Behandlungskontinuität. Die nächste Schicht muss wissen: Was wurde gemacht? Was ist offen? Wie sieht das Stoma aus? Ohne diese 9 Punkte fehlen Informationen und die Versorgung hat Lücken.",
    kerntextB1:
      "**9 Punkte für die Stoma-Dokumentation:**\n\n1. Datum und Uhrzeit des Beutelwechsels\n2. Wie sieht das Stoma aus? (Farbe, Größe)\n3. Wie sieht die Haut rund um das Stoma aus?\n4. Was kommt aus dem Stoma? (Farbe, Menge, dünn/fest)\n5. Gab es eine Leckage? Was hast du getan?\n6. Kurzer Hinweis auf die Bauch-Wunde\n7. Wer war dabei?\n8. Was hast du der Ehefrau gezeigt?\n9. Was hat der Stomatherapeut gesagt?\n\n**Warum?** Die nächste Schicht muss wissen, was passiert ist.",
    faustregel:
      "**9 Elemente = lückenlose Übergabe.** Fehlt eines, fehlt der nächsten Schicht Information.",
    faustregelB1:
      "9 Punkte in die Stoma-Dokumentation. Fehlt einer, fehlt der nächsten Schicht etwas Wichtiges.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturzprotokoll — 12 Pflicht-Elemente",
        kurzbeschreibung:
          "Bei Frau M. hat das Sturzprotokoll 12 Pflicht-Elemente. Gleiche Logik: je komplexer die Situation, desto strukturierter die Dokumentation.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Katheter-Dokumentation",
        kurzbeschreibung:
          "Bei Herrn Petrov ist die Katheter-Dokumentation das Pendant: Katheter-Befund, Urin-Output, Hautumgebung, Liegedauer — gleiche Dokumentationslogik.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Nenne die 9 Pflicht-Elemente der Stomadokumentation bei Herrn Nguyen.",
      rueckseite:
        "1) Datum+Uhrzeit, 2) Stoma-Befund (Farbe/Prominenz/Schleimhaut), 3) Hautumgebung, 4) Output (Konsistenz/Farbe/Menge), 5) Leckage+Maßnahme, 6) Querverweis Bauchdeckenwunde, 7) Anwesende, 8) Angehörigen-Anleitung, 9) Stomatherapeut-Visite. Spektrum: Frau M. (Sturzprotokoll 12 Elemente), Petrov (Katheter-Doku). **9 Elemente = lückenlose Übergabe.**",
    },
  },
};

// =============================================================================
// PHASE 6 — DOKUMENTIEREN
// =============================================================================

/**
 * IW-09: Dokumentation: Beobachtung vs. Wertung (pflegedokumentation, Wiederbegegnung)
 * Position: VOR Step 6.3 (Matching: Was gehört wohin?)
 * Grund: Schüler muss unterscheiden können: Beobachtung (gehört rein) vs. Meinung (nicht)
 * Wiederbegegnung: Pflegebericht-Regeln wurden bei Frau M. gelehrt
 */
export const CE02_NGUYEN_IW_09_BEOBACHTUNG_VS_WERTUNG: ContentStep = {
  stepId: "ce02-nguyen-dok-02b-beobachtung-wertung",
  phase: 6,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Pflege heute, 7. Aufl. — Kap. Pflegedokumentation",
    "SGB V § 630f — Dokumentationspflicht",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dok-beobachtung-wertung",
  tag: "pflege",
  themaPrimaer: "pflegedokumentation",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Beobachtung rein, Meinung raus. Jetzt: Ordne die Informationen dem richtigen Dokumentationsbereich zu.",
  contentC1: {
    title: "Beobachtung vs. Wertung in der Pflegedokumentation",
    body: "",
    glossarBegriffe: [
      "Pflegebericht",
      "Objektivität",
      "Dokumentationspflicht",
    ],
  },
  contentB1: {
    title: "Was kommt in die Pflegeakte — und was nicht?",
    body: "",
    glossarBegriffe: ["Pflegebericht", "Beobachtung"],
  },
  inlineWissen: {
    bausteinRef: "pflegedokumentation-pflegebericht",
    themaPrimaer: "pflegedokumentation",
    wiederbegegnung: {
      basisBausteinId: "pflegedokumentation-pflegebericht",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du gelernt: nur Beobachtungen, keine Meinungen. Bei Herrn Nguyen wird das besonders knifflig: Er hat gesagt 'Ich bin kein richtiger Mann mehr.' Das Zitat ist eine Beobachtung (er hat es gesagt) und gehört in den Pflegebericht. Aber 'Herr Nguyen ist unmotiviert' ist eine Wertung und gehört NICHT hinein.",
      vertiefungB1:
        "Bei Frau M. hast du gelernt: nur Beobachtungen aufschreiben, keine Meinungen. Bei Herrn Nguyen ist es manchmal schwer zu unterscheiden. 'Er hat gesagt: Ich bin kein richtiger Mann mehr' — das ist eine Beobachtung. 'Er ist unmotiviert' — das ist eine Meinung. Nur Beobachtungen kommen in die Akte.",
    },
    storyAufhaenger:
      "Gleich ordnest du Informationen verschiedenen Dokumentationsbereichen zu. Dabei taucht eine heikle Frage auf: Gehört Herrn Nguyens Aussage 'Ich bin kein richtiger Mann mehr' in die Pflegeakte? Und gehört 'Herr Nguyen ist unmotiviert' hinein?",
    storyAufhaengerB1:
      "Gleich sortierst du Informationen in die richtige Stelle der Dokumentation. Eine schwierige Frage: Darf 'Herr Nguyen ist unmotiviert' in die Akte? Und was ist mit seinem Zitat?",
    kerntext:
      "**Die Grundregel:** In die Pflegedokumentation gehören **Beobachtungen und Maßnahmen** — nie persönliche Meinungen oder Wertungen.\n\n**Drei Beispiele bei Herrn Nguyen:**\n\n✔ **Beobachtung (gehört rein):** \"Herr Nguyen hat beim Beutelwechsel zur Seite geschaut und keine verbalen Äußerungen gemacht.\"\n\n✔ **Patientenzitat (gehört rein):** \"Herr Nguyen sagte: 'Ich bin kein richtiger Mann mehr.'\" — Direktes Zitat in Anführungszeichen. Das ist eine dokumentierte Äußerung, keine Interpretation.\n\n✘ **Wertung (gehört NICHT rein):** \"Herr Nguyen ist unmotiviert und will nicht kooperieren.\" — Das ist eine Interpretation seines Verhaltens, kein Fakt. 'Unmotiviert' ist eine Diagnose, die Pflegekräfte nicht stellen dürfen.\n\n**Faustregel:** Schreibe was du **siehst, hörst und misst** — nicht was du **denkst oder meinst**.\n\n**Rechtsgrundlage:** SGB V § 630f: Die Dokumentation muss sachlich, zeitnah und nachvollziehbar sein.",
    kerntextB1:
      "**Regel:** In die Pflegeakte kommen nur **Beobachtungen** — nie deine **Meinung**.\n\n✔ Richtig: \"Herr Nguyen hat zur Seite geschaut und nichts gesagt.\"\n✔ Richtig: \"Herr Nguyen sagte: 'Ich bin kein richtiger Mann mehr.'\"\n✘ Falsch: \"Herr Nguyen ist unmotiviert.\"\n\n**Warum?** 'Unmotiviert' ist deine Meinung. Du weißt es nicht. Vielleicht hat er Schmerzen. Vielleicht hat er Angst. Du schreibst nur auf, was du **siehst und hörst**.",
    faustregel:
      "**Siehst du es? Hörst du es? Misst du es? Dann rein.** Denkst du es nur? Dann nicht.",
    faustregelB1:
      "Siehst du es? Hörst du es? Dann schreib es auf. Denkst du es nur? Dann nicht.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturzprotokoll + Pflegebericht",
        kurzbeschreibung:
          "Bei Frau M. war die Unterscheidung einfacher: Sturz = Fakt. Aber auch hier gab es Grauzonen — z.B. 'Frau M. war aufgeregt' (Beobachtung) vs. 'Frau M. hat Angst' (Interpretation).",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz — 'aggressiv' vs. Beobachtung",
        kurzbeschreibung:
          "Bei Herrn Bauer: 'Patient ist aggressiv' ist eine Wertung. Korrekt: 'Patient hat die Hand der Pflegekraft weggeschoben und laut gerufen.' Gleiche Logik wie bei Herrn Nguyen.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Aphasie — Zitate dokumentieren trotz Spracheinschränkung",
        kurzbeschreibung:
          "Bei Herrn Petrov ist Dokumentation von Kommunikation besonders anspruchsvoll: Er hat Aphasie. Einzelne Worte oder Gesten werden dokumentiert — nicht interpretiert.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Gehört das in den Pflegebericht? Und gehört 'Herr Nguyen ist unmotiviert' hinein?",
      rueckseite:
        "Zitat JA — in Anführungszeichen, als dokumentierte Patientenäußerung. 'Unmotiviert' NEIN — persönliche Wertung, keine Beobachtung. Grundregel: Siehst/hörst/misst du es = rein. Denkst du es = nicht rein. Rechtsgrundlage: SGB V § 630f (sachlich, zeitnah, nachvollziehbar). Spektrum: Bauer ('aggressiv' = Wertung), Petrov (Aphasie-Zitate). **Beobachtung rein, Meinung raus.**",
    },
  },
};

/**
 * IW-10: Wunddokumentation als eigener Bereich (haut, Wiederbegegnung)
 * Position: VOR Step 6.3 (Matching: Was gehört wohin?) -- direkt nach IW-09
 * ACHTUNG: Keine zwei Inline-Wissen hintereinander!
 * Lösung: IW-09 kommt VOR Step 6.2 (TableFillIn), IW-10 kommt VOR Step 6.3
 * Grund: Schüler muss wissen dass Bauchdeckenwunde NICHT in Stomadoku gehört
 */
export const CE02_NGUYEN_IW_10_WUNDDOKU_TRENNUNG: ContentStep = {
  stepId: "ce02-nguyen-dok-02c-wunddoku-trennung",
  phase: 6,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP — Expertenstandard Pflege von Menschen mit chronischen Wunden (2015)",
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dok-wunddoku-trennung",
  tag: "pflege",
  themaPrimaer: "haut",
  themenSekundaer: ["pflegedokumentation", "stuhlausscheidung"],
  transition:
    "Stomadoku und Wunddoku getrennt. Jetzt: Ordne alles richtig zu.",
  contentC1: {
    title: "Stomadokumentation und Wunddokumentation: getrennte Bereiche",
    body: "",
    glossarBegriffe: [
      "Wunddokumentation",
      "Stomadokumentation",
      "Wund-Assessment-Bogen",
    ],
  },
  contentB1: {
    title: "Stoma-Dokumentation und Wund-Dokumentation — getrennt!",
    body: "",
    glossarBegriffe: ["Wunddokumentation", "Stomadokumentation"],
  },
  inlineWissen: {
    bausteinRef: "haut-wunddoku-stomadoku-trennung",
    themaPrimaer: "haut",
    themenSekundaer: ["pflegedokumentation", "stuhlausscheidung"],
    wiederbegegnung: {
      basisBausteinId: "haut-inspektion-grundlagen",
      basisPatient: "Frau Yilmaz",
      vertiefung:
        "Bei Frau Yilmaz hast du gelernt, wie Wunddokumentation nach DNQP funktioniert (Wundgröße, Wundrand, Exsudat). Bei Herrn Nguyen kommt eine Besonderheit: Er hat ZWEI Dokumentationsbereiche für die Haut — die peristomale Haut (gehört in die Stomadokumentation) und die Bauchdeckenwunde (gehört in die eigene Wunddokumentation). Verwechslung führt zu Informationslücken.",
      vertiefungB1:
        "Von Frau Yilmaz kennst du die Wunddokumentation. Bei Herrn Nguyen gibt es zwei getrennte Dokumentationen: Stoma-Haut in der Stomadoku, Bauch-Wunde in der Wunddoku. Die beiden darf man nicht mischen.",
    },
    storyAufhaenger:
      "Herr Nguyen hat eine leicht gerötete Bauchdeckenwunde (post-OP) UND eine leichte Rötung rund um das Stoma. Das sind zwei verschiedene Hautbefunde — und sie gehören in zwei verschiedene Dokumentationsbereiche. Verwechselst du sie, fehlen der nächsten Schicht Informationen.",
    storyAufhaengerB1:
      "Herr Nguyen hat zwei Hautprobleme: 1) Haut rund um das Stoma leicht rot, 2) Bauch-Wunde leicht rot. Das sind zwei verschiedene Dokumentationen.",
    kerntext:
      "**Zwei Haut-Befunde, zwei Dokumentationen:**\n\n**1. Peristomale Haut (rund um das Stoma):**\n→ Gehört in die **Stomadokumentation** (als Teil der 9 Pflicht-Elemente)\n→ Befund: Rötung ja/nein, Mazerierung ja/nein, Einrisse ja/nein\n→ Ursache meist: Stomainhalt-Kontakt, Plattendruck, allergische Reaktion auf Klebstoff\n\n**2. Bauchdeckenwunde (OP-Naht):**\n→ Gehört in die **eigene Wunddokumentation** (DNQP-Standard, Wund-Assessment-Bogen)\n→ Befund: 5 Entzündungszeichen prüfen (Rubor, Calor, Dolor, Tumor, Functio läsa)\n→ In der Stomadoku nur ein kurzer Querverweis: \"Bauchdeckenwunde: Status unverändert, Details siehe Wunddoku.\"\n\n**Warum trennen?** Stomadoku wird täglich aktualisiert (bei jedem Beutelwechsel). Wunddoku folgt einem eigenen Rhythmus (z.B. Verbandwechsel alle 2 Tage). Beide haben unterschiedliche Verantwortliche und unterschiedliche Eskalationspfade.",
    kerntextB1:
      "**Zwei Stellen in der Dokumentation:**\n\n**1. Haut rund um das Stoma:**\n→ In die Stoma-Dokumentation\n→ Ist die Haut rot? Beschädigt? Offen?\n\n**2. Bauch-Wunde (OP-Naht):**\n→ In die eigene Wund-Dokumentation\n→ 5 Entzündungszeichen prüfen (Rötung, Wärme, Schmerz, Schwellung, Funktion)\n→ In der Stoma-Doku nur kurz erwähnen: \"Wunde: siehe Wunddoku.\"\n\n**Warum?** Die zwei Dokumentationen haben unterschiedliche Zeitpunkte und Verantwortliche.",
    faustregel:
      "**Peristomale Haut = Stomadoku. Bauchdeckenwunde = Wunddoku.** Nicht mischen.",
    faustregelB1:
      "Stoma-Haut in die Stoma-Doku. Bauch-Wunde in die Wund-Doku. Getrennt.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus-Wunddokumentation",
        kurzbeschreibung:
          "Bei Frau Yilmaz gehört der Dekubitus in eine eigene Wunddokumentation nach DNQP — gleiche Logik wie Herrn Nguyens Bauchdeckenwunde.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Katheter-Doku getrennt von Mobilisations-Doku",
        kurzbeschreibung:
          "Auch bei Herrn Petrov: Katheter-Dokumentation und Mobilisationsdokumentation sind getrennte Bereiche. Gleiche Trennungslogik.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herrn Nguyens Haut rund um das Stoma ist leicht gerötet UND die Bauchdeckenwunde ist leicht gerötet. In welche Dokumentation gehört was?",
      rueckseite:
        "Peristomale Haut (Stoma-Umgebung) = Stomadokumentation (9 Pflicht-Elemente). Bauchdeckenwunde = eigene Wunddokumentation (DNQP, 5 Entzündungszeichen). In der Stomadoku nur Querverweis ('Details siehe Wunddoku'). Spektrum: Yilmaz (Dekubitus-Wunddoku), Petrov (Katheter-Doku getrennt). **Nicht mischen — getrennte Bereiche, getrennte Verantwortliche.**",
    },
  },
};
