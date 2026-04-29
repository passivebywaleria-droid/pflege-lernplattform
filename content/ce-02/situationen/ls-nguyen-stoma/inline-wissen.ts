// CE-02 Situation Herr Nguyen — Inline-Wissens-Bausteine
// 10 Bausteine: 6 stuhlausscheidung, 2 pflegedokumentation (Wiederbegegnung), 2 haut (Wiederbegegnung)
// Positionierung: VOR dem Anwendungs-Step der den Begriff braucht
// Stoma-spezifisch: Lochgroesse + 2 mm, Schablone, Abschwellung 6-8 Wo
// Pipeline v9 — 2026-04-26

import type { ContentStep } from "../../../_types";

// =============================================================================
// PHASE 1 — INFORMIEREN
// =============================================================================

/**
 * IW-01: Stoma-Arten (stuhlausscheidung)
 * Position: VOR Step 1.2 (MC: Diagnose einordnen — endstaendiges Kolostoma)
 * Grund: Schueler braucht Grundverstaendnis Stoma-Typen bevor er differenzieren soll
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
    glossarBegriffe: ["Kolostoma", "Ileostoma", "endstaendig", "doppellaeufig"],
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
      "In der Übergabe steht: \"Herr Nguyen, endstaendiges Kolostoma nach Sigmaresektion.\" Aber was heisst das genau — und was unterscheidet sein Stoma von dem, das z.B. Frau Yilmaz nach einer Hemikolektomie voruebergehend tragen wuerde?",
    storyAufhaengerB1:
      "In der Übergabe steht: Herr Nguyen hat ein \"endstaendiges Kolostoma\". Was bedeutet das? Und wie unterscheidet es sich von anderen Stoma-Formen?",
    kerntext:
      "**Was ist ein Stoma?** Eine operativ angelegte Öffnung, durch die der Darm ueber die Bauchdecke nach aussen geleitet wird. Der Stuhl wird in einem Beutel aufgefangen.\n\n**Zwei Haupt-Typen nach Darmabschnitt:**\n\n• **Kolostoma** — aus dem Dickdarm (Kolon). Output: breiig bis geformt, wenig aggressiv fuer die Haut.\n\n• **Ileostoma** — aus dem Duenndarm (Ileum). Output: duennfluessig, enzymatisch aggressiv — hoehere Hautgefaehrdung.\n\n**Zwei Haupt-Typen nach Dauer:**\n\n• **Endstaendig** = dauerhaft. Das Darmende wird durch die Bauchdecke gefuehrt und vernaehrt. Keine Rueckverlagerung geplant. Herr Nguyen hat diesen Typ.\n\n• **Doppellaeufig** = voruebergehend. Beide Darmschenkel (zufuehrend + abfuehrend) werden ausgeleitet. Rueckverlagerung nach Heilung moeglich.\n\n**Warum ist das wichtig fuer die Pflege?** Endstaendiges Kolostoma = dauerhafte Koerperbildveraenderung. Die Anleitung zur Selbstversorgung hat hoechste Prioritaet — Herr Nguyen wird dieses Stoma sein Leben lang haben.",
    kerntextB1:
      "**Was ist ein Stoma?** Eine Öffnung am Bauch. Der Darm kommt durch die Bauchwand nach draussen. Der Stuhl geht in einen Beutel.\n\n**Zwei Stoma-Typen:**\n\n• **Kolostoma** = aus dem Dickdarm. Stuhl ist breiig bis fest.\n\n• **Ileostoma** = aus dem Duenndarm. Stuhl ist duennfluessig und aggressiver fuer die Haut.\n\n**Dauerhaft oder voruebergehend:**\n\n• **Endstaendig** = bleibt fuer immer. Herr Nguyen hat diesen Typ.\n\n• **Doppellaeufig** = kann zurueckverlegt werden.\n\nHerr Nguyen muss lernen, sein Stoma selbst zu versorgen. Es bleibt dauerhaft.",
    faustregel:
      "**Endstaendig = dauerhaft.** Herr Nguyen lernt Selbstversorgung — nicht als Option, sondern als Ziel.",
    faustregelB1:
      "Endstaendig heisst: Das Stoma bleibt fuer immer. Herr Nguyen muss lernen, es selbst zu versorgen.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Kein Stoma, aber post-OP Darm-Atonie moeglich",
        kurzbeschreibung:
          "Bei ihr geht es um post-OP-Motilitaetsstoerungen nach Hueft-TEP — kein Stoma, aber der Darm reagiert auf Narkose und Immobilisation.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Stuhlinkontinenz bei Hemiparese",
        kurzbeschreibung:
          "Bei ihm ist die Stuhlkontrolle durch den Schlaganfall eingeschraenkt — kein Stoma, aber ein anderer Weg, die Kontrolle ueber die Ausscheidung zu verlieren.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Neugeborenenausscheidung (Mekonium)",
        kurzbeschreibung:
          "Bei Saeugling Emilia geht es um normalen Mekonium-Abgang und Stuhlbeobachtung — ein ganz anderer Kontext, aber dasselbe Grundprinzip: Output beobachten + dokumentieren.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen hat ein endstaendiges Kolostoma nach Sigmaresektion. Was bedeutet 'endstaendig' — und warum ist das fuer die Pflegeplanung entscheidend?",
      rueckseite:
        "Endstaendig = Darmende durch Bauchdecke nach aussen, dauerhaft, keine Rueckverlagerung. Kolostoma = Dickdarm, breiig-geformter Output. Unterschied: Ileostoma = Duenndarm, duennfluessig, hautgefaehrdend. Pflegerisch: Selbstversorgung ist Primaerziel — Anleitung hat hoechste Prioritaet. Spektrum: Petrov (Stuhlinkontinenz bei Hemiparese), Emilia (Mekonium-Beobachtung). Faustregel: **Endstaendig = dauerhaft. Selbstversorgung ist das Ziel.**",
    },
  },
};

// =============================================================================
// PHASE 2 — BEOBACHTEN
// =============================================================================

/**
 * IW-02: Haut und Mazerierung bei Stoma (haut, Wiederbegegnung)
 * Position: VOR Step 2.3 (Highlight: Haut-Assessment)
 * Grund: Mazerierung ist das Kern-Haut-Thema bei Stoma — Schueler braucht Vorwissen
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
    glossarBegriffe: ["Mazerierung", "Stomaplatte", "Saeureschutzmantel"],
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
        "Bei Frau Yilmaz ging es um Hautinspektion bei Dekubitus (Druckstellen). Bei Herrn Nguyen kommt eine andere Gefaehrdung dazu: Mazerierung durch Stomainhalt. Der Saeureschutzmantel (pH 5,5) wird durch den leicht alkalischen Kolostoma-Output zerstoert — die Haut verliert ihre Schutzbarriere.",
      vertiefungB1:
        "Bei Frau Yilmaz hast du die Haut bei Dekubitus angeschaut. Bei Herrn Nguyen ist etwas anderes gefaehrlich: Stuhl aus dem Stoma greift die Haut an (Mazerierung). Der Hautschutz (pH 5,5) geht dadurch kaputt.",
    },
    storyAufhaenger:
      "Du schaust gleich auf die Haut rund um Herrn Nguyens Stoma. Bei Frau Yilmaz war die Hautinspektion auf Dekubitus fokussiert — Druck war das Problem. Hier ist die Gefahr eine andere: enzymatische Hautzerstoerung durch Stomainhalt.",
    storyAufhaengerB1:
      "Du schaust gleich auf die Haut rund um das Stoma. Von Frau Yilmaz kennst du die Hautbeobachtung schon. Bei Herrn Nguyen kommt etwas Neues dazu: Stuhl auf der Haut ist schaedlich.",
    kerntext:
      "**Was ist Mazerierung?** Aufweichung und Zerstoerung der Haut durch laengeren Kontakt mit Feuchtigkeit — hier: Stomainhalt.\n\n**Warum passiert das beim Stoma?**\n\n• Kolostoma-Output ist leicht alkalisch — er zerstoert den **Saeureschutzmantel** (pH 5,5) der Haut.\n\n• Ileostoma-Output ist noch aggressiver — er enthaelt Verdauungsenzyme (Proteasen, Lipasen).\n\n• Bei Leckage (Stomaplatte sitzt nicht dicht) trifft Stomainhalt direkt auf die peristomale Haut.\n\n**Wie erkennst du Mazerierung?** Haut aufgeweicht, weisslich, verletzlich — schon minimale Reibung reisst sie ein. Fruehzeichen: Roetung im Ring um die Stomaplatte.\n\n**Was schuetzt?**\n• Passende Plattengroesse (Stoma + 2 mm Sicherheitsabstand)\n• Schutzpaste (fuellt Unebenheiten, schliesst Luecken)\n• Regelmaessiger Beutelwechsel (nicht ueberfuellen lassen)",
    kerntextB1:
      "**Was ist Mazerierung?** Die Haut wird durch Feuchtigkeit beschaedigt.\n\nBei Herrn Nguyen: Stuhl aus dem Stoma trifft auf die Haut. Der Stuhl greift die Haut an.\n\n**Wie erkennst du das?** Die Haut wird weiss, weich und reisst leicht ein. Zuerst: Roetung rund um die Stomaplatte.\n\n**Was schuetzt die Haut?**\n• Die Stomaplatte muss genau passen (Stoma + 2 mm)\n• Schutzpaste schuetzt die Haut\n• Beutel regelmaessig wechseln",
    faustregel:
      "**Stomaplatte + 2 mm = Hautschutz.** Jeder Millimeter zu viel ist offene Haut fuer Stomainhalt.",
    faustregelB1:
      "Stomaplatte = Stoma-Groesse + 2 mm. Zu gross = Haut wird angegriffen.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II",
        kurzbeschreibung:
          "Bei ihr ist Feuchtigkeitsschaedigung durch Inkontinenz das Thema — Mazeration durch Urin. Gleicher Mechanismus, andere Quelle.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas + Hautfalten-Intertrigo",
        kurzbeschreibung:
          "Hautfalten bei BMI 38 schaffen feuchte Kammern — Intertrigo ist Mazeration durch Schweiss und Reibung, nicht durch Stomainhalt.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Windel-Dermatitis",
        kurzbeschreibung:
          "Auch bei Saeugling Emilia: Stuhl auf der Haut verursacht Mazeration. Windel-Dermatitis = Saeuglingsversion desselben Problems.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Die Haut rund um Herrn Nguyens Stoma ist leicht geroetet. Was ist die haeufigste Ursache fuer peristomale Hautschaedigung?",
      rueckseite:
        "Mazerierung durch Stomainhalt-Kontakt. Kolostoma-Output ist leicht alkalisch und zerstoert den Saeureschutzmantel (pH 5,5). Schutz: Passende Plattengroesse (Stoma + 2 mm), Schutzpaste, regelmaessiger Beutelwechsel. Spektrum: Yilmaz (Urin-Mazeration), Schmidt (Intertrigo-Hautfalten), Emilia (Windel-Dermatitis). **Jeder Millimeter zu viel ist offene Haut.**",
    },
  },
};

/**
 * IW-03: Stoma-Output und Transitphase (stuhlausscheidung)
 * Position: VOR Step 2.4 (Dialog: Ernaehrung beobachten)
 * Grund: Schueler muss wissen, was normaler post-OP-Output ist, bevor er Ernaehrung bewertet
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
  themenSekundaer: ["ernaehrungsassessment"],
  transition:
    "Du weisst jetzt, was normaler Stoma-Output am 4. Tag ist. Jetzt: Was isst Herr Nguyen eigentlich?",
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
      "Im Stoma-Beutel von Herrn Nguyen: duennfluessig, gelblich-braun, ca. 1/3 gefuellt. Ist das normal fuer den 4. Tag post-OP? Oder ein Zeichen, dass etwas nicht stimmt?",
    storyAufhaengerB1:
      "Im Beutel von Herrn Nguyen ist duennfluessiger, gelblich-brauner Stuhl. Der Beutel ist 1/3 voll. Ist das normal am 4. Tag nach der OP?",
    kerntext:
      "**Die Transitphase (Tag 3–7 post-OP):**\n\nNach einer Darm-OP startet die Peristaltik (Darmbewegung) langsam wieder. Der Output veraendert sich schrittweise:\n\n• **Tag 1–3:** Kein oder sehr wenig Output, evtl. Schleim. Der Darm erholt sich.\n\n• **Tag 3–7 (Transitphase):** Duennfluessig bis waessrig, gelblich-braun. Das ist **normal** — der Darm arbeitet wieder, aber der Kostaufbau hat gerade erst begonnen. Herrn Nguyens Befund passt genau hierher.\n\n• **Ab Woche 2:** Zunehmend breiig bis geformt, je nach Kostaufbau und Darmabschnitt.\n\n**Kolostoma vs. Ileostoma — Output-Unterschied:**\n• Kolostoma (Herr Nguyen): geformter Output nach Eingewoehnungsphase\n• Ileostoma: dauerhaft duennfluessig (Dickdarm fehlt als \"Wasserentzieher\")\n\n**Alarmsignal:** Kein Output ueber 48h trotz Kostaufbau → Ileus-Verdacht → Arzt sofort informieren.",
    kerntextB1:
      "**Was ist die Transitphase?** In den ersten Tagen nach der OP erholt sich der Darm.\n\n• **Tag 1–3:** Fast kein Stuhl, manchmal Schleim.\n• **Tag 3–7:** Duennfluessig, gelblich — das ist **normal**. Herrn Nguyens Beutel-Inhalt ist genau so.\n• **Ab Woche 2:** Stuhl wird fester.\n\n**Alarmsignal:** Gar kein Stuhl seit 48 Stunden, obwohl Herr Nguyen isst → sofort Arzt informieren.",
    faustregel:
      "**Duennfluessig am Tag 4 = Transitphase = normal.** Kein Output ueber 48h = Alarm.",
    faustregelB1:
      "Duennfluessig am Tag 4 ist normal. Gar kein Stuhl seit 48 Stunden ist ein Alarm.",
    spektrum: [
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Chronische Obstipation bei COPD",
        kurzbeschreibung:
          "Bei ihr ist das Gegenteil das Problem: chronische Obstipation durch Bewegungsmangel, Medikamente und schlechte Ernaehrung — kein post-OP-Kontext.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Dysphagie + reduzierte Darmmotilitaet",
        kurzbeschreibung:
          "Reduzierter Intake wegen Schluckstoerung fuehrt auch bei ihm zu veraendertem Stuhl — aber aus neurologischer Ursache, nicht post-OP.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Muttermilchstuhl vs. Formulastuhl",
        kurzbeschreibung:
          "Auch bei Saeugling Emilia ist Stuhlkonsistenz ein wichtiges Beobachtungskriterium — Muttermilchstuhl ist senf-gelb und weich, Formulastuhl fester.",
      },
    ],
    sonstBox:
      "Nicht bei Herrn Nguyen relevant, aber wichtig zu kennen: **Paradoxe Diarrhoe** (duennfluessiger Stuhl bei Obstipation — Stuhl umfliesst harte Kotmasse). Kommt vor bei aelteren Patienten ohne Stoma. Quelle: I Care Pflege Kap. Stuhlausscheidung.",
    sonstBoxB1:
      "Andere Stuhl-Probleme, die bei Herrn Nguyen nicht vorkommen: **Paradoxe Diarrhoe** (duenner Stuhl obwohl eigentlich Verstopfung vorliegt). Mehr dazu in einem anderen Thema.",
    karteikarte: {
      vorderseite:
        "Herrn Nguyens Stoma-Beutel zeigt am 4. POD duennfluessig-gelblichen Output. Normal oder auffaellig?",
      rueckseite:
        "Normal — Tag 3–7 ist die Transitphase: Darm arbeitet wieder, Kostaufbau beginnt, Output noch duennfluessig. Ab Woche 2 zunehmend geformt bei Kolostoma. Alarmsignal: Kein Output > 48h trotz Kostaufbau = Ileus-Verdacht. Spektrum: Kovac (chron. Obstipation), Petrov (Dysphagie), Emilia (Saeugling-Stuhlbeobachtung). **Duennfluessig am Tag 4 = Transitphase = normal.**",
    },
  },
};

// =============================================================================
// PHASE 3 — PLANEN
// =============================================================================

/**
 * IW-04: Beutelwechsel-Grundlagen (stuhlausscheidung)
 * Position: VOR Step 3.2 (Sequencing: Beutelwechsel-Ablauf)
 * Grund: Schueler muss die Prinzipien kennen bevor er die Reihenfolge sortiert
 * Kern-Aspekt: Lochgroesse = Stoma + 2 mm, Schablone bei JEDEM Wechsel, Abschwellung 6-8 Wochen
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
      "Gleich wechselst du den Beutel bei Herrn Nguyen. Aber eine Frage vorher: Im Patientenblatt steht \"Stoma 60 mm\". Uebernimmst du diesen Wert einfach — oder misst du selbst? Die Antwort entscheidet ueber Hautschutz oder Hautschaedigung.",
    storyAufhaengerB1:
      "Gleich wechselst du den Beutel. Aber erst: Im Patientenblatt steht \"Stoma 60 mm\". Uebernimmst du den Wert? Oder misst du selbst? Die richtige Antwort schuetzt die Haut von Herrn Nguyen.",
    kerntext:
      "**Drei Grundprinzipien beim Beutelwechsel:**\n\n**1. Schablone — bei JEDEM Wechsel neu messen.**\nDas Stoma schwillt in den ersten **6–8 Wochen post-OP ab**. Ein OP-Tag-Wert ist nach wenigen Tagen veraltet. Falsche Groesse = Hautschaedigung.\n\n**2. Lochgroesse = Stoma-Durchmesser + 2 mm.**\n• Zu gross (+5 mm): Haut zwischen Platte und Stoma liegt frei → Stomainhalt greift die Haut an → Mazerierung.\n• Zu klein (exakt auf Stoma): Platte klemmt die Stomaschleimhaut ab → Durchblutungsstoerung → Nekrose-Risiko.\n• Richtig (+2 mm): Haut geschuetzt, Stoma nicht eingeklemmt.\n\n**3. Schwerkraft-Prinzip beim Abziehen.**\nAlten Beutel von **oben nach unten** abziehen. Die Schwerkraft haelt den Stuhl im Beutel, statt ihn ueber das Stoma zu druecken. Eine Hand zieht, die andere Hand haelt die Haut sanft gegen (Hauteinriss vermeiden).",
    kerntextB1:
      "**Drei wichtige Regeln:**\n\n**1. Jedes Mal neu messen.**\nDas Stoma wird in den ersten 6–8 Wochen kleiner. Du misst jedes Mal mit der Schablone.\n\n**2. Lochgroesse = Stoma + 2 mm.**\nZu gross: Stuhl kommt auf die Haut. Zu klein: Platte klemmt das Stoma ab. 2 mm = genau richtig.\n\n**3. Von oben nach unten abziehen.**\nDen alten Beutel von oben nach unten abziehen. So fliesst der Stuhl nach unten — nicht ueber das Stoma.",
    faustregel:
      "**Schablone + 2 mm + Schwerkraft.** Drei Worte, die Herrn Nguyens Haut schuetzen.",
    faustregelB1:
      "Schablone + 2 mm + von oben nach unten. Drei Regeln fuer den Beutelwechsel.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus-Wundversorgung",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist es Wundversorgung statt Stomaversorgung — aber das Prinzip \"aseptisch, von innen nach aussen, nicht kontaminieren\" ist das gleiche Grundmuster.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Manipulation an Verbund",
        kurzbeschreibung:
          "Bei Herrn Bauer reisst er sich manchmal Verbundmaterial ab. Bei Herrn Nguyen ist Manipulation des Stoma-Beutels ein potentielles Risiko, wenn er verwirrt oder unruhig ist — in der Nacht z.B.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Hautfalten erschweren Versorgung",
        kurzbeschreibung:
          "Hautfalten bei Adipositas wuerden ein Stoma besonders problematisch machen: die Platte sitzt nicht dicht, Faltenwurf fuehrt zu Leckage. Gleicher Mechanismus wie bei Herrn Nguyens Leckage-Komplikation.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Wie bestimmst du die Lochgroesse der Hautschutzplatte bei Herrn Nguyen (4. Tag post-OP, Stoma 60 mm)?",
      rueckseite:
        "Stoma bei JEDEM Wechsel mit Schablone neu messen (Abschwellung 6–8 Wochen post-OP). Lochgroesse = Stoma-Durchmesser + 2 mm. Heute: 60 mm + 2 mm = 62 mm. Nie Wert aus dem Patientenblatt uebernehmen — veraltet nach wenigen Tagen. Zu gross = Mazerierung. Zu klein = Nekrose-Risiko. **Schablone + 2 mm + Schwerkraft.**",
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
        "SBAR kennst du von Frau M.s Sturzprotokoll. Bei Herrn Nguyen nutzt du SBAR fuer etwas anderes: interprofessionelle Kommunikation mit dem Stomatherapeuten Herrn Baum und der Ernaehrungsberaterin. Die Struktur bleibt gleich — der Inhalt ist stoma-spezifisch: Stoma-Befund, Output, Hautumgebung, Ernaehrungsdefizit.",
      vertiefungB1:
        "SBAR kennst du von Frau M. (Sturz). Bei Herrn Nguyen nutzt du SBAR fuer die Uebergabe an den Stomatherapeuten und die Ernaehrungsberaterin. Die vier Buchstaben bleiben gleich — aber der Inhalt ist Stoma-spezifisch.",
    },
    storyAufhaenger:
      "Gleich ordnest du die Teamrollen zu: Pflegekraft vs. Stomatherapeut vs. Ernaehrungsberaterin. Aber wie uebergibst du strukturiert an Herrn Baum, wenn er um 10 Uhr kommt? SBAR kennst du von Frau M. — hier die Stoma-Variante.",
    storyAufhaengerB1:
      "Der Stomatherapeut Herr Baum kommt um 10 Uhr. Wie sagst du ihm, was los ist? SBAR kennst du schon von Frau M. Hier die Stoma-Variante.",
    kerntext:
      "**SBAR fuer die Stoma-Uebergabe an Herrn Baum:**\n\n• **S** (Situation): Herr Nguyen, 72 J., 4. POD Sigmaresektion, endstaendiges Kolostoma.\n\n• **B** (Background): Mangelernährung (BMI 19, Albumin 28), Braden 14, Heparin laeuft. Kolostoma aktiv seit Tag 3.\n\n• **A** (Assessment): Stoma rosig, 1,5 cm, Haut leicht geroetet aber keine Mazerierung. Output duennfluessig-gelblich (Transitphase). Leckage heute Morgen an Plattenrand — Ursache: Hautfaltenwurf rechts. Neu angepasst. Patient vermeidet Blickkontakt mit Stoma.\n\n• **R** (Recommendation): Bitte Plattengrösse pruefen, Anleitung Selbstversorgung beginnen, Ehefrau Mai als Backup anleiten.\n\n**Warum SBAR auch fuer Stomatherapeuten?** Herr Baum ist Fachkraft, aber er war nicht da. Er braucht deinen Blick auf den Patienten — strukturiert, ohne Wertung.",
    kerntextB1:
      "**SBAR fuer die Uebergabe an den Stomatherapeuten:**\n\n• **S**: Herr Nguyen, 72 Jahre, 4. Tag nach OP, endstaendiges Kolostoma.\n• **B**: Mangelernährung (BMI 19), Haut leicht geroetet, Heparin laeuft.\n• **A**: Stoma rosig und feucht. Leckage heute Morgen — wurde behoben. Patient schaut nicht auf sein Stoma.\n• **R**: Bitte Plattengroesse pruefen. Anleitung Selbstversorgung beginnen. Ehefrau Mai moechte dabei sein.\n\nSBAR funktioniert ueberall — egal ob Sturz oder Stoma.",
    faustregel:
      "**SBAR funktioniert ueberall.** Gleiches Schema, ob Sturz bei Frau M. oder Stoma bei Herrn Nguyen.",
    faustregelB1:
      "SBAR funktioniert immer gleich — bei jedem Patienten und bei jeder Uebergabe.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturz-Uebergabe",
        kurzbeschreibung:
          "Bei Frau M. war SBAR fuer das Sturzprotokoll und die Uebergabe an den Nachtdienst — der Erstfall, in dem du SBAR gelernt hast.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Neurologische Uebergabe",
        kurzbeschreibung:
          "Bei Herrn Petrov ist SBAR wichtig fuer die Uebergabe neurologischer Befunde (NIHSS-Score, Aphasie-Grad) an das Stroke-Team.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulante Uebergabe",
        kurzbeschreibung:
          "Bei Frau Kovac laeuft SBAR telefonisch — ambulante Uebergabe an den Hausarzt. Noch knapper, weil am Telefon.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Stomatherapeut Herr Baum kommt um 10 Uhr. Wie uebergibst du Herrn Nguyens Stoma-Status — und in welchem Format?",
      rueckseite:
        "SBAR: S = Patient, Diagnose, OP-Tag. B = Vorerkrankungen, Medikation, Ernaehrung. A = Stoma-Befund, Output, Haut, Leckage, psychosozialer Status. R = Was du vom Stomatherapeuten brauchst. Gleiches Schema wie bei Frau M. (Sturz), Petrov (Schlaganfall), Kovac (ambulant). **SBAR funktioniert ueberall.**",
    },
  },
};

// =============================================================================
// PHASE 4 — DURCHFUEHREN
// =============================================================================

/**
 * IW-06: Lochgroesse messen — das Anti-Pattern (stuhlausscheidung)
 * Position: VOR Step 4.1b (MC: Lochgroesse der Hautschutzplatte messen)
 * Grund: Der haeufigste Anfaenger-Fehler ist, den Wert aus dem Patientenblatt zu uebernehmen
 */
export const CE02_NGUYEN_IW_06_LOCHGROESSE: ContentStep = {
  stepId: "ce02-nguyen-dur-01a-lochgroesse-wissen",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dur-lochgroesse-wissen",
  tag: "pflege",
  themaPrimaer: "stuhlausscheidung",
  transition:
    "Jetzt weisst du, warum du nie den alten Wert uebernimmst. Teste dein Wissen.",
  contentC1: {
    title: "Stoma-Abschwellung: Warum der alte Wert gefaehrlich ist",
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
      "Du stehst mit der neuen Hautschutzplatte bereit. Im Patientenblatt steht: \"Stoma 60 mm, gemessen am OP-Tag.\" Das war vor 4 Tagen. Übernimmst du den Wert? Eine erfahrene Pflegekraft wuerde sagen: niemals.",
    storyAufhaengerB1:
      "Du hast die neue Platte bereit. Im Patientenblatt steht: \"Stoma 60 mm\" — gemessen vor 4 Tagen. Nimmst du diesen Wert? Nein.",
    kerntext:
      "**Das Stoma schwillt ab.**\n\nIn den ersten **6–8 Wochen** nach der Stoma-Anlage veraendert sich die Groesse sichtbar:\n\n• **Unmittelbar post-OP:** Stoma oedematoes geschwollen (Gewebe-Reaktion auf OP-Trauma)\n• **Woche 1–2:** Abschwellung beginnt — das Stoma kann **mehrere Millimeter kleiner** werden\n• **Woche 4–8:** Endgueltige Groesse erreicht. Ab dann kann die Plattengroesse standardisiert werden.\n\n**Was passiert, wenn du den alten Wert nimmst?**\n\nAngenommen, das Stoma ist inzwischen von 60 mm auf 55 mm geschrumpft (realistisch fuer Tag 4–14):\n• Du schneidest das Loch auf 62 mm (alter Wert + 2 mm) → 5 mm nackter Hautring\n• Stomainhalt trifft direkt auf diese Haut → Mazerierung beginnt\n\n**Deshalb: Schablone bei JEDEM Wechsel.** Messen, anzeichnen, zuschneiden — bis die Endgroesse erreicht ist.",
    kerntextB1:
      "**Das Stoma wird kleiner.**\n\nIn den ersten 6–8 Wochen nach der OP schwillt das Stoma ab.\n\n• Kurz nach der OP: Das Stoma ist geschwollen.\n• Woche 1–2: Es wird kleiner.\n• Ab Woche 4–8: Es hat die endgueltige Groesse.\n\n**Wenn du den alten Wert nimmst:** Das Loch ist zu gross. Stuhl kommt auf die Haut. Die Haut wird beschaedigt.\n\n**Deshalb:** Jedes Mal mit der Schablone messen. Bis das Stoma die Endgroesse hat.",
    faustregel:
      "**6–8 Wochen lang: bei jedem Wechsel neu messen.** Der OP-Tag-Wert ist am 4. Tag bereits veraltet.",
    faustregelB1:
      "6 bis 8 Wochen lang misst du jedes Mal neu. Der alte Wert stimmt nicht mehr.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Wundgroesse veraendert sich — regelmaessig nachmessen",
        kurzbeschreibung:
          "Auch bei Frau Yilmaz' Dekubitus-Wunde veraendert sich die Groesse — regelmaeßiges Nachmessen ist dort genauso Pflicht (Wunddokumentation cm x cm).",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Katheter-Fixierung — Hautveraenderung kontrollieren",
        kurzbeschreibung:
          "Bei Herrn Petrov ist nicht das Stoma, sondern der Blasenkatheter-Ausgang die Stelle, die regelmaessig inspiziert wird. Gleiches Prinzip: Haut veraendert sich, und die Versorgung muss angepasst werden.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Warum darfst du den Stoma-Durchmesser aus dem Patientenblatt (OP-Tag) am 4. POD NICHT fuer die Plattengroesse uebernehmen?",
      rueckseite:
        "Das Stoma schwillt in den ersten 6–8 Wochen post-OP ab. Ein Wert vom OP-Tag ist nach wenigen Tagen veraltet. Wenn das Loch zu gross ist: Stomainhalt auf nackter Haut → Mazerierung. Loesung: Bei JEDEM Wechsel mit Schablone neu messen, Loch = Stoma + 2 mm. Erst nach Woche 4–8 ist die Endgroesse erreicht. **6–8 Wochen: jedes Mal neu messen.**",
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
    title: "Was tun wenn der Beutel auslaeuft?",
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
      "**Leckage ist die haeufigste Stoma-Komplikation.** Rund 70 % der Stomatraeger erleben sie mindestens einmal.\n\n**Die goldene Regel: Haut vor Beutel.**\n\n• **Schritt 1:** Stomainhalt sofort von der Haut entfernen. Lauwarmes Wasser, keine Desinfektionsmittel. Haut gruendlich trocknen.\n\n• **Schritt 2:** Ursache beurteilen. Wo war die Leckage? Platte-Haut-Übergang (Schutzpaste unzureichend, Faltenwurf)? Beutel-Platten-Verbindung (Ring beschaedigt)? Plattengroesse falsch (Stoma abgeschwollen)?\n\n• **Schritt 3:** Platte neu anpassen. Stoma nochmals ausmessen, Lochgroesse korrigieren.\n\n**Warum Haut vor Beutel?** Kolostoma-Output ist leicht alkalisch — jede Minute auf der Haut beschleunigt die Mazerierung. Der neue Beutel nuetzt nichts, wenn die Haut darunter bereits geschaedigt ist.\n\n**Wann Arzt informieren?** Nur bei sichtbarer Hautschaedigung, Stomaprolaps oder wiederholter Leckage trotz korrekter Versorgung.",
    kerntextB1:
      "**Leckage** heisst: der Beutel ist undicht. Das passiert oft.\n\n**Regel: Erst die Haut reinigen, DANN neuen Beutel anlegen.**\n\n1. Stuhl sofort von der Haut waschen (lauwarmes Wasser). Haut trocknen.\n2. Schauen: Warum war der Beutel undicht? Platte zu gross? Paste fehlt? Hautfalte?\n3. Platte neu anpassen. Stoma nochmals messen.\n\n**Warum Haut zuerst?** Der Stuhl schaedigt die Haut. Jede Minute zaehlt.\n\nArzt informieren: nur wenn die Haut sichtbar geschaedigt ist oder das Stoma sich veraendert hat.",
    faustregel:
      "**Haut vor Beutel.** Erst reinigen und trocknen, dann Ursache klaeren, dann neu anlegen.",
    faustregelB1:
      "Erst Haut reinigen, dann Beutel neu anlegen. Haut vor Beutel.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Wundversorgung bei Leckage-Komplikation",
        kurzbeschreibung:
          "Bei Frau Yilmaz waere eine Leckage im Dekubitus-Bereich katastrophal (Urin + Stuhl auf offene Wunde). Gleiche Prioritaet: Haut schuetzen vor technischer Versorgung.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Hautfalten erhoehen Leckage-Risiko",
        kurzbeschreibung:
          "Hautfalten bei Adipositas verhindern dichtes Sitzen der Stomaplatte. Bei Frau Schmidt waere Leckage ein Dauerproblem — spezielle konvexe Platten oder Guertelsysteme noetig.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Windel-Leckage",
        kurzbeschreibung:
          "Auch bei Saeugling Emilia: Windel-Leckage = Stuhl auf der Haut = sofortige Reinigung. Gleiches Prinzip, anderer Kontext.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herrn Nguyens Stoma-Beutel ist 20 Minuten nach dem Wechsel undicht. Stomainhalt auf der Bauchhaut. Was ist die erste Massnahme?",
      rueckseite:
        "Haut sofort reinigen und gruendlich trocknen (Kolostoma-Output ist alkalisch → Mazerierung). DANN Ursache beurteilen (Platte-Haut-Übergang? Plattengroesse? Verbindung?). DANN Platte neu anpassen + Stoma nachmessen. Arzt nur bei sichtbarer Hautschaedigung oder Stomaveraenderung. Spektrum: Yilmaz (Wundschutz), Schmidt (Hautfalten-Leckage), Emilia (Windel-Leckage). **Haut vor Beutel.**",
    },
  },
};

// =============================================================================
// PHASE 5 — EVALUIEREN
// =============================================================================

/**
 * IW-08: Stoma-Dokumentation (stuhlausscheidung + pflegedokumentation)
 * Position: VOR Step 5.1 (Categorize: Stoma-Situation evaluieren)
 * Grund: Schueler muss wissen was dokumentiert wird, um den Verlauf zu bewerten
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
    "Du weisst jetzt, was in die Stomadokumentation gehoert. Jetzt: Evaluiere den Morgen.",
  contentC1: {
    title: "Stomadokumentation: Die 9 Pflicht-Elemente",
    body: "",
    glossarBegriffe: [
      "Stomadokumentation",
      "Behandlungskontinuitaet",
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
      "Du evaluierst gleich Herrn Nguyens Morgen. Aber woran misst du den Erfolg? Die Stomadokumentation hat 9 Pflicht-Elemente — wenn alle 9 sauber dokumentiert sind, kann die naechste Schicht nahtlos weiterarbeiten.",
    storyAufhaengerB1:
      "Du bewertest gleich den Morgen bei Herrn Nguyen. Aber was muss alles in der Stoma-Dokumentation stehen? Es gibt 9 wichtige Punkte.",
    kerntext:
      "**Die 9 Pflicht-Elemente der Stomadokumentation:**\n\n1. **Datum + Uhrzeit** des Beutelwechsels\n2. **Stoma-Befund:** Farbe, Prominenz, Schleimhautzustand\n3. **Hautumgebung:** Roetung, Mazerierung, Einrisse?\n4. **Output:** Konsistenz, Farbe, geschaetzte Menge\n5. **Leckage:** Ja/nein, Ursache, Massnahme\n6. **Bauchdeckenwunde:** Kurzer Querverweis (Detail in Wunddokumentation)\n7. **Anwesende:** Wer war beim Wechsel dabei?\n8. **Angehoerigen-Anleitung:** Was wurde gezeigt, von wem?\n9. **Stomatherapeut-Visite:** Wann, was, Ergebnis\n\n**Warum 9 Elemente?** Behandlungskontinuitaet. Die naechste Schicht muss wissen: Was wurde gemacht? Was ist offen? Wie sieht das Stoma aus? Ohne diese 9 Punkte fehlen Informationen und die Versorgung hat Luecken.",
    kerntextB1:
      "**9 Punkte fuer die Stoma-Dokumentation:**\n\n1. Datum und Uhrzeit des Beutelwechsels\n2. Wie sieht das Stoma aus? (Farbe, Groesse)\n3. Wie sieht die Haut rund um das Stoma aus?\n4. Was kommt aus dem Stoma? (Farbe, Menge, duenn/fest)\n5. Gab es eine Leckage? Was hast du getan?\n6. Kurzer Hinweis auf die Bauch-Wunde\n7. Wer war dabei?\n8. Was hast du der Ehefrau gezeigt?\n9. Was hat der Stomatherapeut gesagt?\n\n**Warum?** Die naechste Schicht muss wissen, was passiert ist.",
    faustregel:
      "**9 Elemente = lueckenlose Uebergabe.** Fehlt eines, fehlt der naechsten Schicht Information.",
    faustregelB1:
      "9 Punkte in die Stoma-Dokumentation. Fehlt einer, fehlt der naechsten Schicht etwas Wichtiges.",
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
        "1) Datum+Uhrzeit, 2) Stoma-Befund (Farbe/Prominenz/Schleimhaut), 3) Hautumgebung, 4) Output (Konsistenz/Farbe/Menge), 5) Leckage+Massnahme, 6) Querverweis Bauchdeckenwunde, 7) Anwesende, 8) Angehoerigen-Anleitung, 9) Stomatherapeut-Visite. Spektrum: Frau M. (Sturzprotokoll 12 Elemente), Petrov (Katheter-Doku). **9 Elemente = lueckenlose Uebergabe.**",
    },
  },
};

// =============================================================================
// PHASE 6 — DOKUMENTIEREN
// =============================================================================

/**
 * IW-09: Dokumentation: Beobachtung vs. Wertung (pflegedokumentation, Wiederbegegnung)
 * Position: VOR Step 6.3 (Matching: Was gehoert wohin?)
 * Grund: Schueler muss unterscheiden koennen: Beobachtung (gehoert rein) vs. Meinung (nicht)
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
      "Objektivitaet",
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
        "Bei Frau M. hast du gelernt: nur Beobachtungen, keine Meinungen. Bei Herrn Nguyen wird das besonders knifflig: Er hat gesagt 'Ich bin kein richtiger Mann mehr.' Das Zitat ist eine Beobachtung (er hat es gesagt) und gehoert in den Pflegebericht. Aber 'Herr Nguyen ist unmotiviert' ist eine Wertung und gehoert NICHT hinein.",
      vertiefungB1:
        "Bei Frau M. hast du gelernt: nur Beobachtungen aufschreiben, keine Meinungen. Bei Herrn Nguyen ist es manchmal schwer zu unterscheiden. 'Er hat gesagt: Ich bin kein richtiger Mann mehr' — das ist eine Beobachtung. 'Er ist unmotiviert' — das ist eine Meinung. Nur Beobachtungen kommen in die Akte.",
    },
    storyAufhaenger:
      "Gleich ordnest du Informationen verschiedenen Dokumentationsbereichen zu. Dabei taucht eine heikle Frage auf: Gehoert Herrn Nguyens Aussage 'Ich bin kein richtiger Mann mehr' in die Pflegeakte? Und gehoert 'Herr Nguyen ist unmotiviert' hinein?",
    storyAufhaengerB1:
      "Gleich sortierst du Informationen in die richtige Stelle der Dokumentation. Eine schwierige Frage: Darf 'Herr Nguyen ist unmotiviert' in die Akte? Und was ist mit seinem Zitat?",
    kerntext:
      "**Die Grundregel:** In die Pflegedokumentation gehoeren **Beobachtungen und Massnahmen** — nie persoenliche Meinungen oder Wertungen.\n\n**Drei Beispiele bei Herrn Nguyen:**\n\n✔ **Beobachtung (gehoert rein):** \"Herr Nguyen hat beim Beutelwechsel zur Seite geschaut und keine verbalen Aeusserungen gemacht.\"\n\n✔ **Patientenzitat (gehoert rein):** \"Herr Nguyen sagte: 'Ich bin kein richtiger Mann mehr.'\" — Direktes Zitat in Anfuehrungszeichen. Das ist eine dokumentierte Aeusserung, keine Interpretation.\n\n✘ **Wertung (gehoert NICHT rein):** \"Herr Nguyen ist unmotiviert und will nicht kooperieren.\" — Das ist eine Interpretation seines Verhaltens, kein Fakt. 'Unmotiviert' ist eine Diagnose, die Pflegekraefte nicht stellen duerfen.\n\n**Faustregel:** Schreibe was du **siehst, hoerst und misst** — nicht was du **denkst oder meinst**.\n\n**Rechtsgrundlage:** SGB V § 630f: Die Dokumentation muss sachlich, zeitnah und nachvollziehbar sein.",
    kerntextB1:
      "**Regel:** In die Pflegeakte kommen nur **Beobachtungen** — nie deine **Meinung**.\n\n✔ Richtig: \"Herr Nguyen hat zur Seite geschaut und nichts gesagt.\"\n✔ Richtig: \"Herr Nguyen sagte: 'Ich bin kein richtiger Mann mehr.'\"\n✘ Falsch: \"Herr Nguyen ist unmotiviert.\"\n\n**Warum?** 'Unmotiviert' ist deine Meinung. Du weisst es nicht. Vielleicht hat er Schmerzen. Vielleicht hat er Angst. Du schreibst nur auf, was du **siehst und hoerst**.",
    faustregel:
      "**Siehst du es? Hoerst du es? Misst du es? Dann rein.** Denkst du es nur? Dann nicht.",
    faustregelB1:
      "Siehst du es? Hoerst du es? Dann schreib es auf. Denkst du es nur? Dann nicht.",
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
        hauptfaktor: "Aphasie — Zitate dokumentieren trotz Spracheinschraenkung",
        kurzbeschreibung:
          "Bei Herrn Petrov ist Dokumentation von Kommunikation besonders anspruchsvoll: Er hat Aphasie. Einzelne Worte oder Gesten werden dokumentiert — nicht interpretiert.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Gehoert das in den Pflegebericht? Und gehoert 'Herr Nguyen ist unmotiviert' hinein?",
      rueckseite:
        "Zitat JA — in Anfuehrungszeichen, als dokumentierte Patientenaeusserung. 'Unmotiviert' NEIN — persoenliche Wertung, keine Beobachtung. Grundregel: Siehst/hoerst/misst du es = rein. Denkst du es = nicht rein. Rechtsgrundlage: SGB V § 630f (sachlich, zeitnah, nachvollziehbar). Spektrum: Bauer ('aggressiv' = Wertung), Petrov (Aphasie-Zitate). **Beobachtung rein, Meinung raus.**",
    },
  },
};

/**
 * IW-10: Wunddokumentation als eigener Bereich (haut, Wiederbegegnung)
 * Position: VOR Step 6.3 (Matching: Was gehoert wohin?) -- direkt nach IW-09
 * ACHTUNG: Keine zwei Inline-Wissen hintereinander!
 * Loesung: IW-09 kommt VOR Step 6.2 (TableFillIn), IW-10 kommt VOR Step 6.3
 * Grund: Schueler muss wissen dass Bauchdeckenwunde NICHT in Stomadoku gehoert
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
        "Bei Frau Yilmaz hast du gelernt, wie Wunddokumentation nach DNQP funktioniert (Wundgroesse, Wundrand, Exsudat). Bei Herrn Nguyen kommt eine Besonderheit: Er hat ZWEI Dokumentationsbereiche fuer die Haut — die peristomale Haut (gehoert in die Stomadokumentation) und die Bauchdeckenwunde (gehoert in die eigene Wunddokumentation). Verwechslung fuehrt zu Informationsluecken.",
      vertiefungB1:
        "Von Frau Yilmaz kennst du die Wunddokumentation. Bei Herrn Nguyen gibt es zwei getrennte Dokumentationen: Stoma-Haut in der Stomadoku, Bauch-Wunde in der Wunddoku. Die beiden darf man nicht mischen.",
    },
    storyAufhaenger:
      "Herr Nguyen hat eine leicht geroetete Bauchdeckenwunde (post-OP) UND eine leichte Roetung rund um das Stoma. Das sind zwei verschiedene Hautbefunde — und sie gehoeren in zwei verschiedene Dokumentationsbereiche. Verwechselst du sie, fehlen der naechsten Schicht Informationen.",
    storyAufhaengerB1:
      "Herr Nguyen hat zwei Hautprobleme: 1) Haut rund um das Stoma leicht rot, 2) Bauch-Wunde leicht rot. Das sind zwei verschiedene Dokumentationen.",
    kerntext:
      "**Zwei Haut-Befunde, zwei Dokumentationen:**\n\n**1. Peristomale Haut (rund um das Stoma):**\n→ Gehoert in die **Stomadokumentation** (als Teil der 9 Pflicht-Elemente)\n→ Befund: Roetung ja/nein, Mazerierung ja/nein, Einrisse ja/nein\n→ Ursache meist: Stomainhalt-Kontakt, Plattendruck, allergische Reaktion auf Klebstoff\n\n**2. Bauchdeckenwunde (OP-Naht):**\n→ Gehoert in die **eigene Wunddokumentation** (DNQP-Standard, Wund-Assessment-Bogen)\n→ Befund: 5 Entzuendungszeichen pruefen (Rubor, Calor, Dolor, Tumor, Functio laesa)\n→ In der Stomadoku nur ein kurzer Querverweis: \"Bauchdeckenwunde: Status unveraendert, Details siehe Wunddoku.\"\n\n**Warum trennen?** Stomadoku wird taeglich aktualisiert (bei jedem Beutelwechsel). Wunddoku folgt einem eigenen Rhythmus (z.B. Verbandwechsel alle 2 Tage). Beide haben unterschiedliche Verantwortliche und unterschiedliche Eskalationspfade.",
    kerntextB1:
      "**Zwei Stellen in der Dokumentation:**\n\n**1. Haut rund um das Stoma:**\n→ In die Stoma-Dokumentation\n→ Ist die Haut rot? Beschaedigt? Offen?\n\n**2. Bauch-Wunde (OP-Naht):**\n→ In die eigene Wund-Dokumentation\n→ 5 Entzuendungszeichen pruefen (Roetung, Waerme, Schmerz, Schwellung, Funktion)\n→ In der Stoma-Doku nur kurz erwaehnen: \"Wunde: siehe Wunddoku.\"\n\n**Warum?** Die zwei Dokumentationen haben unterschiedliche Zeitpunkte und Verantwortliche.",
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
          "Bei Frau Yilmaz gehoert der Dekubitus in eine eigene Wunddokumentation nach DNQP — gleiche Logik wie Herrn Nguyens Bauchdeckenwunde.",
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
        "Herrn Nguyens Haut rund um das Stoma ist leicht geroetet UND die Bauchdeckenwunde ist leicht geroetet. In welche Dokumentation gehoert was?",
      rueckseite:
        "Peristomale Haut (Stoma-Umgebung) = Stomadokumentation (9 Pflicht-Elemente). Bauchdeckenwunde = eigene Wunddokumentation (DNQP, 5 Entzuendungszeichen). In der Stomadoku nur Querverweis ('Details siehe Wunddoku'). Spektrum: Yilmaz (Dekubitus-Wunddoku), Petrov (Katheter-Doku getrennt). **Nicht mischen — getrennte Bereiche, getrennte Verantwortliche.**",
    },
  },
};
