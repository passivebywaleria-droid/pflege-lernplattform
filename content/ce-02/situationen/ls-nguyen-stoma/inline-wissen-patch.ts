// CE-02 Situation Herr Nguyen — Inline-Wissens-Bausteine PATCH (Begriffs-Lücken)
// 10 Bausteine: Deckt 46 fehlende Begriffe ab → Coverage 30% → ~78%
// Positionierung: VOR dem Anwendungs-Step der den Begriff braucht
// KEINE zwei Inline-Wissen hintereinander
// Pipeline v9 — 2026-04-30

import type { ContentStep } from "../../../_types";

// =============================================================================
// PHASE 1 — INFORMIEREN
// =============================================================================

/**
 * IW-P01: Pflegeprobleme erkennen + Priorisierung
 * Position: VOR Step 1.3 (Categorize: 5 Probleme sehen)
 * Grund: Schüler muss Pflegeproblem + Priorisierung kennen bevor er zuordnet
 * Deckt: Pflegeproblem, Priorisierung, Dekubitus, Thrombose, Ernährung (als Problemfelder)
 */
export const CE02_NGUYEN_IWP_01_PFLEGEPROBLEME: ContentStep = {
  stepId: "ce02-nguyen-info-02b-pflegeprobleme",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter V. / Meier M. (1981): Pflegeprozess — 6 Schritte",
    "DNQP (2022): Expertenstandard Sturzprophylaxe in der Pflege",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-info-pflegeprobleme",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "Du weißt jetzt, wie man Pflegeprobleme erkennt und priorisiert. Ordne Herrn Nguyens Probleme ein.",
  contentC1: {
    title: "Pflegeprobleme erkennen und priorisieren",
    body: "",
    glossarBegriffe: ["Pflegeproblem", "Priorisierung"],
  },
  contentB1: {
    title: "Pflege-Probleme erkennen und ordnen",
    body: "",
    glossarBegriffe: ["Pflegeproblem", "Priorisierung"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-pflegeprobleme",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "Du hast die Übergabe gelesen und Herrn Nguyens Stoma-Art eingeordnet. Jetzt siehst du die ganze Situation: Kolostoma, 4. POD, Schmerzen, eingeschränkte Mobilität, Sprachbarriere. Fünf Pflegeprobleme auf einmal — aber wo fängst du an?",
    storyAufhaengerB1:
      "Du weißt jetzt: Herr Nguyen hat ein Kolostoma. Aber er hat noch mehr Probleme: Schmerzen, kann sich kaum bewegen, spricht wenig Deutsch. Wo fängst du an?",
    kerntext:
      "**Was ist ein Pflegeproblem?** Ein Zustand, der pflegerisches Handeln erfordert — entweder akut (besteht jetzt) oder als Risiko (kann entstehen). Aus der Pflegeanamnese und dem Assessment abgeleitet (Fiechter/Meier 1981).\n\n**Typische Pflegeprobleme bei Herrn Nguyen:**\n\n• **Stoma-Versorgung**: Beutelwechsel, Hautschutz, Selbstversorgung anleiten\n• **Ernährung**: Post-OP Kostaufbau, Risiko Mangelernährung (NRS-2002)\n• **Dekubitus-Risiko**: Immobilität post-OP + reduzierte Ernährung\n• **Thrombose-Risiko**: Post-OP + Immobilität + Tumorerkrankung\n• **Sprachbarriere**: Kommunikation erschwert, Anleitung schwieriger\n\n**Priorisierung — Reihenfolge nach Gefährdung:**\n\n1. **Vitale Bedrohung zuerst**: Thrombose, Blutung, Atemwege\n2. **Akute Probleme**: Stoma-Versorgung, Schmerz\n3. **Risiken**: Dekubitus, Mangelernährung\n4. **Psychosoziale Aspekte**: Scham, Körperbild, Sprachbarriere\n\nPriorisierung heißt NICHT, dass psychosoziale Probleme unwichtig sind — nur, dass vitale Bedrohungen zuerst kommen.",
    kerntextB1:
      "**Was ist ein Pflege-Problem?** Etwas, das pflegerisches Handeln braucht.\n\n**Herrn Nguyens Probleme:**\n• Stoma-Versorgung (Beutelwechsel lernen)\n• Ernährung (nach OP wenig gegessen)\n• Dekubitus-Risiko (liegt viel, isst wenig)\n• Thrombose-Risiko (nach OP, liegt viel, Krebs)\n• Sprach-Barriere (versteht wenig Deutsch)\n\n**Reihenfolge:**\n1. Lebens-Gefahr zuerst (Thrombose, Blutung)\n2. Akute Probleme (Stoma, Schmerz)\n3. Risiken (Dekubitus, Ernährung)\n4. Psycho-soziales (Scham, Sprache)",
    faustregel:
      "**Vitale Bedrohung → Akut �� Risiko → Psychosozial.** Immer in dieser Reihenfolge priorisieren.",
    faustregelB1:
      "Erst Lebens-Gefahr, dann akute Probleme, dann Risiken, dann Psycho-soziales.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Akute Aspirationsgefahr",
        kurzbeschreibung:
          "Bei Herrn Petrov steht Aspirationsgefahr (Dysphagie) ganz oben — vitale Bedrohung vor Kontraktur oder Aphasie.",
      },
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturz als akutes Ereignis",
        kurzbeschreibung:
          "Bei Frau M. war der Sturz das akute Ereignis — erst Verletzungscheck, dann Ursachenforschung, dann Prophylaxe.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "BZ-Entgleisung + Proteinmangel",
        kurzbeschreibung:
          "Bei Frau Schmidt: BZ 398 mg/dl = akut. Proteinmangel = Risiko. Intertrigo = Risiko. Priorisierung: BZ stabilisieren zuerst.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen hat 5 Pflegeprobleme. Nenne die Priorisierungs-Reihenfolge und begründe, warum Thrombose vor Dekubitus kommt.",
      rueckseite:
        "1. Vitale Bedrohung (Thrombose — akut lebensbedrohlich bei Lungenembolie), 2. Akut (Stoma-Versorgung, Schmerz), 3. Risiko (Dekubitus, Mangelernährung), 4. Psychosozial (Scham, Sprache). Thrombose vor Dekubitus, weil Lungenembolie unmittelbar lebensbedrohlich ist — Dekubitus entsteht über Tage.\n\nFaustregel: **Vital → Akut → Risiko → Psychosozial.**",
    },
  },
};

/**
 * IW-P02: Thromboseprophylaxe + Heparin + subkutane Injektion
 * Position: VOR Step opt3 (MC: Heparin-Injektionsort)
 * Grund: niedermolekulares Heparin, subkutan, alternierende Quadranten werden gebraucht
 * Deckt: niedermolekulares Heparin, subkutan, Thromboseprophylaxe, Heparin, alternierende Quadranten, Thrombose
 */
export const CE02_NGUYEN_IWP_02_THROMBOSE_HEPARIN: ContentStep = {
  stepId: "ce02-nguyen-info-04b-thrombose-heparin",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie (2015): Prophylaxe der venösen Thrombömbolie (VTE)",
    "DDG/DGIM (2021): Perioperative Thromboseprophylaxe",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-info-thrombose-heparin",
  tag: "pflege",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "Thrombose und Heparin verstanden. Jetzt: Wo wird die Spritze gesetzt?",
  contentC1: {
    title: "Thromboseprophylaxe mit Heparin — warum und wie?",
    body: "",
    glossarBegriffe: ["Thrombose", "niedermolekulares Heparin", "subkutan", "Thromboseprophylaxe", "alternierende Quadranten"],
  },
  contentB1: {
    title: "Thrombose-Schutz mit Heparin-Spritze",
    body: "",
    glossarBegriffe: ["Thrombose", "Heparin", "subkutan", "Thromboseprophylaxe"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-heparin",
    themaPrimaer: "thrombose-prophylaxe",
    storyAufhaenger:
      "Im Verordnungsblatt steht: \"Enoxaparin 40 mg s.c. 1× tgl.\" Herr Nguyen hat eine Tumorerkrankung, liegt viel und wurde vor 4 Tagen operiert — drei der klassischen Risikofaktoren für eine Thrombose. Warum bekommt er Heparin — und wo genau spritzt du?",
    storyAufhaengerB1:
      "Im Verordnungs-Blatt steht: Herr Nguyen bekommt jeden Tag eine Spritze unter die Haut (Heparin). Warum? Er hat 3 Risiken für ein Blutgerinnsel: Krebs, OP, wenig Bewegung.",
    kerntext:
      "**Was ist Thrombose?** Ein Blutgerinnsel in einer Vene — meist in den Beinen. Gefährlich, weil das Gerinnsel in die Lunge wandern kann (Lungenembolie = lebensbedrohlich).\n\n**3 Risikofaktoren bei Herrn Nguyen (Virchow-Trias):**\n\n• **Stase** (verlangsamter Blutfluss): Immobilität post-OP — Herr Nguyen liegt viel\n• **Gefäßwandschaden**: OP = Gewebeverletzung\n• **Hyperkoagulabilität**: Tumorerkrankung erhöht die Gerinnungsneigung\n\n**Thromboseprophylaxe mit Heparin (AWMF S3-LL 2015):**\n\n• **Niedermolekulares Heparin (NMH)** — z. B. Enoxaparin (Clexane), Dalteparin, Tinzaparin\n• Wirkt: hemmt Faktor Xa der Gerinnungskaskade\n• Gabe: 1× täglich **subkutan** (= unter die Haut), nicht in den Muskel\n\n**Injektionstechnik:**\n\n• Ort: Bauch, links oder rechts vom Nabel, mind. 5 cm Abstand\n• **Alternierende Quadranten**: Jeden Tag eine andere Stelle (oben-links → oben-rechts → unten-links → unten-rechts), um Hämatome und Verhärtungen zu vermeiden\n• Hautfalte anheben, 90° einstechen, Aspiration NICHT nötig bei NMH (AWMF)\n• Nach Injektion NICHT massieren (erhöht Hämatomrisiko)",
    kerntextB1:
      "**Was ist Thrombose?** Ein Blut-Gerinnsel in einer Vene (meistens im Bein). Gefährlich: Das Gerinnsel kann in die Lunge wandern (= Lungen-Embolie, lebens-gefährlich).\n\n**Warum hat Herr Nguyen ein hohes Risiko?**\n• Er liegt viel (Blut fließt langsam)\n�� Er wurde operiert (Gefäße verletzt)\n• Er hat Krebs (Blut gerinnt leichter)\n\n**Heparin-Spritze:**\n• Heparin verhindert, dass das Blut zu schnell gerinnt\n• Gespritzt unter die Haut (= subkutan) am Bauch\n• Jeden Tag eine andere Stelle (= **alternierende Quadranten**): oben-links, oben-rechts, unten-links, unten-rechts\n• NICHT massieren nach der Spritze",
    faustregel:
      "**Heparin s.c., 1× täglich, alternierende Quadranten.** Nicht massieren — Hämatom-Risiko.",
    faustregelB1:
      "Heparin-Spritze: jeden Tag unter die Haut, andere Stelle, nicht reiben.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Post-OP Hüft-TEP + Immobilität",
        kurzbeschreibung:
          "Frau Yilmaz bekommt ebenfalls NMH post-OP. Bei ihr kommt zusätzlich Kompressionstherapie dazu (Hüft-TEP = hohes VTE-Risiko).",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "ASS statt Heparin",
        kurzbeschreibung:
          "Frau Kovac nimmt ASS (Thrombozytenaggregationshemmer) — das wirkt anders als Heparin. ASS hemmt Thrombozyten (arteriell), Heparin hemmt Gerinnungskaskade (venös).",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Immobilität + Hemiparese",
        kurzbeschreibung:
          "Auch Herr Petrov bekommt NMH: einseitige Immobilität = hohes Thromboserisiko in der gelähmten Extremität.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Warum bekommt Herr Nguyen (4. POD, Tumorerkrankung) Heparin — und wo genau spritzt du?",
      rueckseite:
        "3 Risikofaktoren (Virchow-Trias): Stase (Immobilität), Gefäßwandschaden (OP), Hyperkoagulabilität (Tumor). NMH (z. B. Enoxaparin) hemmt Faktor Xa. Injektion: subkutan am Bauch, alternierende Quadranten (oben-links → oben-rechts → unten-links → unten-rechts). Nicht massieren.\n\nSpektrum: Yilmaz (Hüft-TEP + Kompression), Kovac (ASS statt Heparin), Petrov (Hemiparese).\n\nFaustregel: **Heparin s.c., alternierend, nicht massieren.**",
    },
  },
};

// =============================================================================
// PHASE 2 — BEOBACHTEN
// =============================================================================

/**
 * IW-P03: Klinische Hautzeichen — livide + serös
 * Position: VOR Step 2.3 (Highlight: Haut-Assessment)
 * Grund: livide und serös werden im Highlight-Step als Begriffe genutzt
 * Deckt: livide, serös
 */
export const CE02_NGUYEN_IWP_03_HAUTZEICHEN: ContentStep = {
  stepId: "ce02-nguyen-beob-02c-hautzeichen",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 1,
  kompetenzbereich: "I.1",
  quellen: [
    "I Care Pflege, 2. Aufl. (2020): Kap. Haut — Befunderhebung",
    "DNQP (2015): Expertenstandard Pflege von Menschen mit chronischen Wunden",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-beob-hautzeichen",
  tag: "pflege",
  themaPrimaer: "haut",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "Du kennst jetzt livide und serös. Gleich markierst du die relevanten Befunde bei Herrn Nguyens Haut.",
  contentC1: {
    title: "Klinische Hautzeichen — Fachbegriffe für den Befund",
    body: "",
    glossarBegriffe: ["livide", "serös", "Erythem", "Ödem"],
  },
  contentB1: {
    title: "Haut-Zeichen — wichtige Fach-Wörter",
    body: "",
    glossarBegriffe: ["livide", "serös"],
  },
  inlineWissen: {
    bausteinRef: "haut-klinische-zeichen",
    themaPrimaer: "haut",
    storyAufhaenger:
      "Du schaust gleich auf die Haut rund um Herrn Nguyens Stoma. Im Pflegebericht der Vorgängerin steht: \"peristomale Haut leicht gerötet, keine livide Verfärbung, kein seröses Exsudat.\" Verstehst du, was das heißt?",
    storyAufhaengerB1:
      "Du liest im Pflege-Bericht: \"Haut gerötet, keine livide Verfärbung, kein seröses Exsudat.\" Was bedeuten diese Wörter?",
    kerntext:
      "**Livide** = bläulich-violett verfärbt. Zeichen für eine Durchblutungsstörung oder venöse Stauung. Beim Stoma: Ein livides Stoma kann auf Minderdurchblutung hindeuten — Arzt sofort informieren.\n\n**Serös** = klar, wässrig, gelblich. Seröses Exsudat = klare Flüssigkeit, die aus einer Wunde oder Reizstelle austritt. Im Unterschied zu:\n\n• **Purulent** = eitrig (gelblich-grün, dickflüssig) — Zeichen einer Infektion\n�� **Blutig** = hämorrhagisch — Zeichen einer Blutung\n• **Fibrinös** = gelblich-belagbildend — Zeichen einer entzündlichen Reaktion\n\n**Reihenfolge der Befunderhebung bei der Hautinspektion:**\n\n1. Farbe: rosig (normal), gerötet (Entzündung), livide (Durchblutungsstörung), blass (Anämie/Schock)\n2. Feuchtigkeit: trocken, feucht, nässend, Exsudat-Art (serös, purulent, blutig)\n3. Integrität: intakt, mazeriert, Erosion, Ulkus\n4. Temperatur: warm (normal), überwärmt (Entzündung), kalt (Minderdurchblutung)",
    kerntextB1:
      "**Livide** = bläulich-violett. Die Haut hat zu wenig Durchblutung. Beim Stoma: Wenn das Stoma livide aussieht → sofort Arzt informieren.\n\n**Serös** = klar und wässrig (leicht gelblich). Flüssigkeit, die aus einer gereizten Stelle kommt.\n\nAndere Wund-Flüssigkeiten:\n• **Eitrig** = gelblich-grün, dick → Infektion\n• **Blutig** = rot → Blutung\n\n**Haut anschauen — Reihenfolge:**\n1. Farbe (rosig, rot, bläulich, blass)\n2. Feuchtigkeit (trocken, nass, welche Flüssigkeit)\n3. Ist die Haut heil oder verletzt?\n4. Warm oder kalt?",
    faustregel:
      "**Livide = bläulich = Durchblutungsstörung. Serös = klar = Reizung ohne Infektion.**",
    faustregelB1:
      "Livide = bläulich (Durchblutung schlecht). Serös = klar und wässrig (keine Infektion).",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II — Wundexsudat",
        kurzbeschreibung:
          "Bei Frau Yilmaz: Dekubitus-Wunde mit serösem Exsudat = Heilungszeichen. Eitriges Exsudat wäre ein Infektionszeichen.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Livide Unterschenkel bei Ödem",
        kurzbeschreibung:
          "Bei Frau Kovac: livide Verfärbung an den Unterschenkeln = chronisch-venöse Insuffizienz. Hier ist livide kein Notfall, sondern ein Dauerbefund.",
      },
      {
        patientName: "Lukas",
        situationsId: "ls-lukas-verbrühung",
        hauptfaktor: "Blasenbildung mit serösem Inhalt",
        kurzbeschreibung:
          "Bei Lukas: Verbrühung Grad 2a = Blasen mit serösem Inhalt. Klar und wässrig = gutes Zeichen. Trüb/eitrig wäre Infektionsverdacht.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Im Pflegebericht steht: \"Stoma rosig, kein livides Areal, peristomale Haut gerötet, seröses Exsudat.\" Was bedeuten livide und serös?",
      rueckseite:
        "Livide = bläulich-violett, Zeichen für Durchblutungsstörung. Beim Stoma: livide = Notfall, Arzt sofort. Serös = klar, wässrig — Reizung, keine Infektion. Purulent (eitrig) wäre Infektionszeichen.\n\nFaustregel: **Livide = bläulich = Durchblutung prüfen. Serös = klar = keine Infektion.**",
    },
  },
};

/**
 * IW-P04: Mangelernährung + NRS-2002 + Hypoalbuminämie
 * Position: VOR Step 2.4 (Dialog: Ernährung sehen)
 * Grund: Mangelernährung und NRS-2002 werden im Dialog gebraucht
 * Deckt: Mangelernährung, NRS-2002, Hypoalbuminämie
 */
export const CE02_NGUYEN_IWP_04_MANGELERNAEHRUNG: ContentStep = {
  stepId: "ce02-nguyen-beob-03c-mangelernährung",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Kondrup J. et al. (2003): NRS 2002 — ESPEN Guidelines for Nutrition Screening",
    "DNQP (2017): Expertenstandard Ernährungsmanagement",
    "Cederholm T. et al. (2019): GLIM-Kriterien",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-beob-mangelernährung",
  tag: "pflege",
  themaPrimaer: "ernährungsassessment",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "NRS-2002 und Mangelernährungs-Zeichen kennst du jetzt. Gleich fragst du Herrn Nguyen nach seinem Essen.",
  contentC1: {
    title: "Mangelernährung erkennen — NRS-2002 bei chirurgischen Patienten",
    body: "",
    glossarBegriffe: ["Mangelernährung", "NRS-2002", "Hypoalbuminämie"],
  },
  contentB1: {
    title: "Mangel-Ernährung erkennen — das NRS-2002-Screening",
    body: "",
    glossarBegriffe: ["Mangelernährung", "NRS-2002"],
  },
  inlineWissen: {
    bausteinRef: "ernährungsassessment-nrs2002-post-op",
    themaPrimaer: "ernährungsassessment",
    storyAufhaenger:
      "Herr Nguyen hat am 4. POD wenig gegessen. Die Übergabe sagt: \"isst wenig, Appetit mäßig.\" Reicht das als Einschätzung? Nein. Das NRS-2002 macht aus \"isst wenig\" eine messbare Aussage — und bei Herrn Nguyen ist das Ergebnis möglicherweise alarmierender als erwartet.",
    storyAufhaengerB1:
      "Herr Nguyen isst wenig seit der OP. Ist das gefährlich? Das NRS-2002 hilft dir, das einzuschätzen — mit Zahlen statt Bauchgefühl.",
    kerntext:
      "**Was ist Mangelernährung?** Ein Zustand, bei dem die Nährstoffzufuhr den Bedarf nicht deckt — mit negativen Folgen für Körperstruktur und -funktion (DNQP 2017). Betrifft NICHT nur dünne Menschen.\n\n**NRS-2002 (Nutritional Risk Screening):**\n\nStandardisiertes Screening in 2 Stufen (ESPEN, Kondrup 2003):\n\n**Stufe 1 (Vorfragen):** BMI < 20,5? Gewichtsverlust in 3 Monaten? Reduzierte Nahrungsaufnahme letzte Woche? Schwere Erkrankung? → Wenn 1× ja → Stufe 2.\n\n**Stufe 2 (Scoring):**\n• Ernährungsstatus: 0–3 Punkte (Gewichtsverlust, Nahrungsaufnahme)\n• Krankheitsschwere: 0–3 Punkte (Herr Nguyen: große Bauch-OP = 2 Punkte)\n• Alter > 70: +1 Punkt\n• **Score ≥ 3 = Mangelernährungs-Risiko → Ernährungsberatung einleiten**\n\n**Hypoalbuminämie** = Albumin < 35 g/l. Bei Herrn Nguyen post-OP zu erwarten — aber Vorsicht: Albumin sinkt auch durch Inflammation (Akut-Phase-Negativ-Protein), nicht nur durch Mangelernährung. Albumin ist ein Hinweis, kein Beweis.\n\n**Bei Herrn Nguyen:** Große OP (2P) + reduzierte Nahrungsaufnahme (1–2P) = NRS ≥ 3. Ernährungsberaterin einschalten.",
    kerntextB1:
      "**Was ist Mangel-Ernährung?** Der Körper bekommt zu wenig Nährstoffe. Betrifft nicht nur dünne Menschen — auch nach einer OP.\n\n**NRS-2002 (Screening-Werkzeug):**\n• Fragen: Hat er abgenommen? Isst er weniger? Ist er schwer krank?\n• Punkte zählen. Bei Herrn Nguyen: Große OP (2 Punkte) + wenig essen (1–2 Punkte) = Risiko!\n• Ab 3 Punkte: Ernährungs-Beraterin einschalten.\n\n**Hypoalbuminämie** = Albumin (Blut-Eiweiß) ist zu niedrig. Nach einer OP ist das häufig.",
    faustregel:
      "**NRS ≥ 3 = Ernährungsberatung.** Post-OP-Patienten starten oft schon bei 2 Punkten (Krankheitsschwere).",
    faustregelB1:
      "NRS-Punkte ab 3 = Risiko für Mangel-Ernährung. Ernährungs-Beraterin hinzuziehen.",
    spektrum: [
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Mangelernährung bei Adipositas",
        kurzbeschreibung:
          "Bei Frau Schmidt: Adipositas + Proteinmangel. NRS-2002 erkennt das schlecht (kein Untergewicht). GLIM-Kriterien als zweite Stufe nötig.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Dysphagie + reduzierte Nahrungsaufnahme",
        kurzbeschreibung:
          "Herr Petrov kann wegen Schluckstörung nur Breikost/Flüssigkeit. NRS-Score hoch durch Krankheitsschwere + deutlich reduzierte Aufnahme.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Trinkschwäche bei Bronchiolitis",
        kurzbeschreibung:
          "Bei Säugling Emilia wird statt NRS-2002 das Gewicht + Trinkprotokoll genutzt. Prinzip gleich: Zufuhr < Bedarf = Risiko.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen isst am 4. POD wenig. Welches Screening nutzt du — und ab welchem Score handelt du?",
      rueckseite:
        "NRS-2002: Große Bauch-OP = 2P (Krankheitsschwere) + reduzierte Nahrungsaufnahme = 1–2P = Score ≥ 3 = Ernährungsberatung. Hypoalbuminämie (Albumin < 35 g/l) als Hinweis, nicht als Beweis (Akut-Phase-Negativ-Protein post-OP).\n\nSpektrum: Schmidt (Adipositas-Paradox), Petrov (Dysphagie), Emilia (Trinkprotokoll).\n\nFaustregel: **NRS ≥ 3 = Ernährungsberatung einschalten.**",
    },
  },
};

/**
 * IW-P05: Thrombose-Zeichen + Wells-Score
 * Position: VOR Step 2.6 (TrueFalse: Thrombose-Zeichen)
 * Grund: Wells-Score, Venenthrombose und Tumorerkrankung als Risikofaktor werden im Step gebraucht
 * Deckt: Thrombose (Beobachtung), Wells-Score, Venenthrombose, Tumorerkrankung (als Risikofaktor)
 */
export const CE02_NGUYEN_IWP_05_THROMBOSE_ZEICHEN: ContentStep = {
  stepId: "ce02-nguyen-beob-05b-thrombose-zeichen",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Wells P.S. et al. (2003): Wells-Score — Klinische Vorhersageregel für TVT",
    "AWMF S3-Leitlinie (2015): Diagnostik und Therapie der Venenthrombose",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-beob-thrombose-zeichen",
  tag: "pflege",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "Du weißt jetzt, worauf du achten musst. Prüfe: Hat Herr Nguyen Thrombose-Zeichen?",
  contentC1: {
    title: "Tiefe Venenthrombose erkennen — Klinik + Wells-Score",
    body: "",
    glossarBegriffe: ["Venenthrombose", "Wells-Score", "Tumorerkrankung"],
  },
  contentB1: {
    title: "Thrombose erkennen — worauf achtest du?",
    body: "",
    glossarBegriffe: ["Venenthrombose", "Wells-Score"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-klinische-zeichen",
    themaPrimaer: "thrombose-prophylaxe",
    storyAufhaenger:
      "Herr Nguyen bekommt Heparin — trotzdem: eine Thrombose kann auch unter Prophylaxe entstehen. Du schaust jetzt seine Beine an. Was sind die Warnzeichen — und warum ist der Wells-Score bei ihm schon vor dem Hinschauen hoch?",
    storyAufhaengerB1:
      "Herr Nguyen bekommt Heparin-Spritzen. Trotzdem kann eine Thrombose entstehen. Du schaust seine Beine an. Worauf achtest du?",
    kerntext:
      "**Klinische Zeichen einer tiefen Venenthrombose (TVT):**\n\n• Einseitige Beinschwellung (Umfangsdifferenz > 3 cm)\n• Überwärmung des betroffenen Beins\n• Rötung oder livide Verfärbung\n• Druckschmerz in der Wade (Payr-Zeichen: Fußsohle, Meyer-Zeichen: Wadendruckpunkt)\n• Spannungsgefühl\n\n**Wells-Score — Klinische Vorhersageregel:**\n\nPunktsystem zur Einschätzung der TVT-Wahrscheinlichkeit:\n\n• Aktive Tumorerkrankung (Behandlung ≤ 6 Mo): **+1 Punkt** — trifft auf Herrn Nguyen zu\n• OP/Bettlägerigkeit > 3 Tage: **+1 Punkt** — trifft zu (4. POD)\n• Einseitige Beinschwellung: +1 Punkt\n• Wadenumfang > 3 cm Differenz: +1 Punkt\n• Eindrückbares Ödem: +1 Punkt\n\n**Herr Nguyen startet mit 2 Punkten** (Tumor + OP) — noch BEVOR du die Beine anschaust. Bei ≥ 2 Punkten: TVT wahrscheinlich → Arzt + Ultraschall-Diagnostik.\n\n**Pflege-Aufgabe:** Beine täglich inspizieren (Schwellung, Rötung, Temperatur), Umfangsmessung dokumentieren, bei Verdacht sofort Arzt informieren — auch unter laufender Heparin-Gabe.",
    kerntextB1:
      "**Woran erkennst du eine Thrombose?**\n\n• Ein Bein ist dicker als das andere\n• Das Bein ist warm und rot (oder bläulich)\n• Druck auf die Wade tut weh\n• Spannung im Bein\n\n**Wells-Score (Punkte-System):**\n\nHerr Nguyen hat schon 2 Punkte, BEVOR du schaust:\n• Krebs (+1 Punkt)\n• OP vor 4 Tagen (+1 Punkt)\n\nAb 2 Punkten: Thrombose wahrscheinlich → Arzt informieren.\n\n**Deine Aufgabe:** Beine jeden Tag anschauen. Schwellung? Rötung? Wärme? Bei Verdacht: sofort Arzt rufen.",
    faustregel:
      "**Tumor + OP = 2 Wells-Punkte.** Schon ohne Symptome ist eine TVT wahrscheinlich — täglich Beine prüfen.",
    faustregelB1:
      "Krebs + OP = schon 2 Punkte. Jeden Tag die Beine anschauen. Bei Verdacht sofort Arzt rufen.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Hüft-TEP + post-OP TVT-Risiko",
        kurzbeschreibung:
          "Frau Yilmaz: Hüft-TEP = hohes TVT-Risiko. Bei ihr zusätzlich Kompressionsstrümpfe + NMH. Wells-Score durch OP allein schon 1 Punkt.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Chronische Ödeme + Virchow-Trias",
        kurzbeschreibung:
          "Bei Frau Kovac: Chronische Beinödeme erschweren die Beurteilung. Umfangsmessung regelmäßig = Baseline-Vergleich wichtig.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Immobilität + vergisst Beinübungen",
        kurzbeschreibung:
          "Herr Bauer liegt zunehmend — TVT-Risiko steigt. Er vergisst Beinübungen. Pflege muss sie aktiv anleiten (nicht nur verordnen).",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen hat eine Tumorerkrankung und ist am 4. POD. Was ist sein Wells-Score VOR der klinischen Untersuchung — und was bedeutet das?",
      rueckseite:
        "Wells-Score = 2 (Tumor +1, OP/Bettlägerigkeit >3 Tage +1). Ab 2 Punkten: TVT wahrscheinlich. Klinische Zeichen: einseitige Schwellung, Überwärmung, Rötung, Wadenschmerz. Pflege: täglich inspizieren, Umfang messen, bei Verdacht sofort Arzt.\n\nFaustregel: **Tumor + OP = 2 Punkte = TVT wahrscheinlich.**",
    },
  },
};

// =============================================================================
// PHASE 3 — PLANEN
// =============================================================================

/**
 * IW-P06: Dekubitus-Lagerung (30°-Schräglage + Weichlagerung + Druckentlastung)
 * Position: VOR Step opt2 (Comparison: Lagerungsplan)
 * Grund: 30°-Schräglage, Weichlagerung, Druckentlastung werden im Comparison gebraucht
 * Deckt: 30°-Schräglage, Weichlagerung, Druckentlastung, Lagerung, Dekubitus (Planen)
 */
export const CE02_NGUYEN_IWP_06_DEKUBITUS_LAGERUNG: ContentStep = {
  stepId: "ce02-nguyen-plan-04b-dekubitus-lagerung",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2017): Expertenstandard Dekubitusprophylaxe in der Pflege",
    "EPUAP/NPIAP/PPPIA (2019): International Guideline Prevention of Pressure Ulcers",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-plan-dekubitus-lagerung",
  tag: "pflege",
  themaPrimaer: "dekubitus-prophylaxe",
  themenSekundaer: ["positionierung"],
  transition:
    "Lagerungsprinzipien verstanden. Vergleiche jetzt die beiden Matratzen-Systeme für Herrn Nguyen.",
  contentC1: {
    title: "Dekubitus-Lagerung — Schräglage vs. Weichlagerung",
    body: "",
    glossarBegriffe: ["30°-Schräglage", "Weichlagerung", "Druckentlastung", "Dekubitus"],
  },
  contentB1: {
    title: "Lagerung gegen Dekubitus — wie und warum?",
    body: "",
    glossarBegriffe: ["30°-Schräglage", "Weichlagerung", "Dekubitus"],
  },
  inlineWissen: {
    bausteinRef: "dekubitus-prophylaxe-lagerung-grundlagen",
    themaPrimaer: "dekubitus-prophylaxe",
    storyAufhaenger:
      "Herr Nguyen liegt viel — 4. POD, Mobilisation beginnt erst langsam. Sein Dekubitus-Risiko ist erhöht (Immobilität + Mangelernährung). Im Pflegeplan steht: \"Lagerung alle 2 Stunden.\" Aber welche Lagerung? Und warum nicht einfach flach liegen lassen?",
    storyAufhaengerB1:
      "Herr Nguyen liegt viel im Bett. Er hat Dekubitus-Risiko. Im Pflege-Plan steht: \"Lagerung alle 2 Stunden.\" Aber wie genau?",
    kerntext:
      "**Druckentlastung** = das Grundprinzip der Dekubitusprophylaxe. Druck auf Knochen-Prominenzen (Sakrum, Fersen, Trochanter) verursacht Gewebeschaden. Zwei Hauptstrategien:\n\n**1. 30°-Schräglage** (Goldstandard nach DNQP 2017):\n\n• Patient wird in 30° Seitenlage gebracht — NICHT 90°\n• Warum 30° und nicht 90°? Bei 90° liegt der Trochanter major (Hüftknochen) direkt auf → neuer Druckpunkt. Bei 30° verteilt sich der Druck großflächig über die Gesäßmuskulatur.\n• Wechsel: alle 2h (30° links → Rücken → 30° rechts → Rücken)\n• Kissen/Lagerungskeil zwischen Knien und unter Rücken\n\n**2. Weichlagerung:**\n\n• Spezialmatratzen: viskölastisch, Wechseldruck, Mikrostimulation\n• Verteilen den Druck über eine größere Fläche\n• Ersetzen NICHT die Lagerungswechsel — ergänzen sie\n• Indikation: erhöhtes Dekubitus-Risiko (Braden-Score ≤ 18)\n\n**Bei Herrn Nguyen:** Stoma auf der linken Bauchseite → 30°-Rechtslage bevorzugen (kein Druck aufs Stoma). Auf keinen Fall flache Bauchlage.",
    kerntextB1:
      "**Druckentlastung** = das Wichtigste gegen Dekubitus. Druck auf Knochen macht die Haut kaputt.\n\n**1. 30°-Schräglage:**\n• Patient leicht auf die Seite drehen (30°, nicht 90°)\n• Warum nicht 90°? Dann drückt der Hüft-Knochen direkt auf → neuer Druck-Punkt\n• Wechsel alle 2 Stunden: links → Rücken → rechts → Rücken\n\n**2. Weichlagerung:**\n• Spezial-Matratzen verteilen den Druck besser\n• Ersetzen NICHT das Umlagern — nur Ergänzung\n\n**Bei Herrn Nguyen:** Stoma ist links → lieber auf die rechte Seite lagern (kein Druck aufs Stoma).",
    faustregel:
      "**30° statt 90° — alle 2 Stunden.** Stoma-Seite freihalten. Weichlagerung ergänzt, ersetzt nicht.",
    faustregelB1:
      "30° auf die Seite, alle 2 Stunden wechseln. Stoma-Seite freihalten.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II — Lagerung zur Heilung",
        kurzbeschreibung:
          "Bei Frau Yilmaz hat sich bereits ein Dekubitus Kat. II am Sakrum gebildet. 30°-Schräglage ist hier nicht nur Prophylaxe sondern Therapie — Druckfreistellung der betroffenen Stelle.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese — asymmetrische Lagerung",
        kurzbeschreibung:
          "Herr Petrov: Die gelähmte Seite hat reduzierte Sensibilität. Mikrolagerung (5–10°) reicht nicht — 30°-Schräglage + Bobath-Lagerung nötig.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz — toleriert Lagerungswechsel nicht",
        kurzbeschreibung:
          "Herr Bauer wehrt sich gegen Umlagern. Basale Stimulation (beruhigende Berührung, langsame Bewegung) vor dem Lagern hilft — sonst Abwehr und Verletzungsgefahr.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Warum wird Herr Nguyen in 30°-Schräglage gelagert — und nicht in 90° Seitenlage?",
      rueckseite:
        "90° = Trochanter major liegt direkt auf → neuer Druckpunkt. 30° = Druck verteilt sich über Gesäßmuskulatur. Wechsel alle 2h (DNQP 2017). Weichlagerung (Spezialmatratze) ergänzt, ersetzt nicht. Bei Nguyen: Stoma links → Rechtslage bevorzugen.\n\nFaustregel: **30° statt 90° — alle 2 Stunden. Stoma-Seite freihalten.**",
    },
  },
};

// =============================================================================
// PHASE 4 — DURCHFÜHREN
// =============================================================================

/**
 * IW-P07: Intimsphäre + Würdeschutz + Empowerment bei Stoma
 * Position: VOR Step 4.1 (Sorting: Beutel-Vorbereitung)
 * Grund: Intimsphäre, Würdeschutz und Empowerment/Selbstversorgung werden in Phase 4 durchgängig gebraucht
 * Deckt: Intimsphäre, Würdeschutz, Empowerment, Selbstversorgung, Entlassungsmanagement
 */
export const CE02_NGUYEN_IWP_07_WUERDE_EMPOWERMENT: ContentStep = {
  stepId: "ce02-nguyen-dur-00b-würde-empowerment",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "V.1",
  quellen: [
    "§ 2 PflBG — Pflege achtet die Würde und Autonomie der zu pflegenden Personen",
    "ICN (2021): Ethikkodex für Pflegende — 4 Grundelemente",
    "DNQP (2019): Expertenstandard Entlassungsmanagement in der Pflege",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dur-würde-empowerment",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["stuhlausscheidung"],
  transition:
    "Würde, Empowerment und Entlassung im Kopf. Jetzt: Bereite den Beutelwechsel mit Herrn Nguyen vor.",
  contentC1: {
    title: "Würde wahren + Selbstversorgung stärken bei Stoma",
    body: "",
    glossarBegriffe: ["Intimsphäre", "Würdeschutz", "Empowerment", "Selbstversorgung", "Entlassungsmanagement"],
  },
  contentB1: {
    title: "Würde schützen + Selbst-Versorgung lernen",
    body: "",
    glossarBegriffe: ["Intimsphäre", "Würdeschutz", "Empowerment", "Selbstversorgung"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-würde-empowerment-stoma",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "Du betrittst Herrn Nguyens Zimmer zum Beutelwechsel. Er teilt sich das Zimmer mit einem anderen Patienten. Das Bett ist sichtbar vom Flur. Herr Nguyen schaut angespannt zur Tür. Er hat sein Stoma noch nie selbst gesehen — geschweige denn versorgt. Wie schaffst du einen sicheren Rahmen?",
    storyAufhaengerB1:
      "Du gehst zu Herrn Nguyen für den Beutelwechsel. Er teilt sich das Zimmer mit einem anderen Patienten. Die Tür ist offen. Herr Nguyen schaut angespannt. Wie schaffst du einen geschützten Raum?",
    kerntext:
      "**Intimsphäre bei Stoma-Versorgung:**\n\n• Tür schließen, Vorhang zuziehen — BEVOR du anfängst\n�� Sichtschutz auch im Mehrbettzimmer: Paravents, Bettnachbar bitten kurz rauszugehen\n• Stoma liegt am Bauch = Intimbereich-nah. Für Herrn Nguyen ist das Entblößen vor einer fremden Person eine enorme Überwindung.\n\n**Würdeschutz** (ICN 2021, § 2 PflBG):\n\n• Handeln erklären BEVOR du anfasst (\"Ich ziehe jetzt das Hemd hoch\")\n• Nur den nötigen Bereich freilegen — Rest abdecken\n• Kein Kommentieren des Geruchs oder Aussehens (\"Das ist ganz normal\" statt Gesichter ziehen)\n• Tempo: Herr Nguyen bestimmt. Nicht hetzen.\n\n**Empowerment = Befähigung zur Selbstversorgung:**\n\nZiel: Herr Nguyen kann den Beutelwechsel bei Entlassung selbst. Empowerment-Stufen:\n\n1. **Heute**: Du machst, Herr Nguyen schaut zu und fragt\n2. **Morgen**: Herr Nguyen macht mit, du leitest an\n3. **Übermorgen**: Herr Nguyen macht, du sicherst\n4. **Entlassung**: Herr Nguyen macht allein\n\n**Entlassungsmanagement** (DNQP 2019): Selbstversorgung sicherstellen VOR Entlassung. Material bestellen, ambulante Stomatherapeut-Anbindung, Angehörige einweisen.",
    kerntextB1:
      "**Intimsphäre schützen:**\n• Tür schließen, Vorhang zuziehen — BEVOR du anfängst\n• Das Stoma ist am Bauch = nahe am Intimbereich. Herr Nguyen braucht Schutz vor Blicken.\n\n**Würde schützen:**\n• Immer erklären was du tust — BEVOR du anfasst\n• Nur den nötigen Bereich zeigen, Rest abdecken\n• Kein Kommentar zum Geruch. \"Das ist ganz normal.\"\n• Herr Nguyen bestimmt das Tempo.\n\n**Empowerment (= Befähigung):**\n• Ziel: Herr Nguyen kann den Beutel allein wechseln\n• Stufe 1: Du machst, er schaut zu\n• Stufe 2: Er macht mit, du hilfst\n• Stufe 3: Er macht, du schaust zu\n• Stufe 4: Er macht allein\n\n**Entlassungs-Management:** Vor der Entlassung sicherstellen: Material bestellt? Ambulanter Stomatherapeut? Angehörige eingewiesen?",
    faustregel:
      "**Tür zu, Tempo sein, Ziel = Selbstversorgung.** Empowerment ist kein Extra — es ist das Ziel.",
    faustregelB1:
      "Tür zu, alles erklären, sein Tempo. Ziel: Er kann es allein.",
    spektrum: [
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Inkontinenz-Versorgung und Scham",
        kurzbeschreibung:
          "Auch Frau Schmidt: Inkontinenzversorgung ist schambesetzt. Würdeschutz = diskret ansprechen, Selbstpflege fördern, nicht überrumpeln.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Inkontinenz",
        kurzbeschreibung:
          "Bei Herrn Bauer ist Empowerment eingeschränkt (kognitive Barriere). Würde wahren heißt hier: trotzdem erklären, nicht wortlos handeln. Tempo anpassen, beruhigende Stimme.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Katheter + Aphasie",
        kurzbeschreibung:
          "Herr Petrov kann sich sprachlich nicht äußern. Würdeschutz: trotzdem ankündigen, Mimik lesen, nonverbale Zustimmung abwarten. Empowerment: Selbstversorgung so weit wie motorisch möglich.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Wie schützt du Herrn Nguyens Würde beim Beutelwechsel — und was ist das Entlassungsziel?",
      rueckseite:
        "Intimsphäre: Tür zu, Vorhang, Sichtschutz. Würde: Handeln ankündigen, nur nötigen Bereich freilegen, Tempo des Patienten. Empowerment-Stufen: Zuschauen → Mitmachen → Selbst machen → Allein. Entlassungsmanagement: Material bestellt, Stomatherapeut ambulant, Angehörige eingewiesen.\n\nFaustregel: **Tür zu, Tempo sein, Ziel = Selbstversorgung.**",
    },
  },
};

/**
 * IW-P08: Mobilisation + Orthostase + Hygiene bei Ganzkörperpflege
 * Position: VOR Step 4.6 (Sorting: Ganzkörperpflege)
 * Grund: Mobilisation, Orthostase, Bettkante + Hygiene/Kreuzkontamination werden in 4.6/4.7 gebraucht
 * Deckt: Mobilisation, Orthostase, Bettkante, Schwindel, Hygiene, Kreuzkontamination, von sauber zu unrein
 */
export const CE02_NGUYEN_IWP_08_MOBI_HYGIENE: ContentStep = {
  stepId: "ce02-nguyen-dur-05b-mobi-hygiene",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2020): Expertenstandard Förderung der Mobilität in der Pflege",
    "RKI/KRINKO (2016): Empfehlung zur Händehygiene in Einrichtungen des Gesundheitswesens",
    "Hatch F. / Maietta L. (1991): Kinästhetik — Konzept und Grundlagen",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dur-mobi-hygiene",
  tag: "pflege",
  themaPrimaer: "mobilisation",
  themenSekundaer: ["ganzkörperpflege"],
  transition:
    "Mobilisation und Hygiene-Prinzipien sitzen. Jetzt: Körperpflege bei Herrn Nguyen — von sauber zu unrein.",
  contentC1: {
    title: "Erstmobilisation + Hygiene-Prinzipien bei der Ganzkörperpflege",
    body: "",
    glossarBegriffe: ["Mobilisation", "Orthostase", "Bettkante", "Kreuzkontamination", "von sauber zu unrein"],
  },
  contentB1: {
    title: "Erstes Aufstehen + Hygiene bei der Körperpflege",
    body: "",
    glossarBegriffe: ["Mobilisation", "Orthostase", "Kreuzkontamination"],
  },
  inlineWissen: {
    bausteinRef: "mobilisation-erstmobilisation-hygiene",
    themaPrimaer: "mobilisation",
    storyAufhaenger:
      "Herr Nguyen hat bisher nur im Bett gelegen. Heute soll er zum ersten Mal an die Bettkante. Gleichzeitig steht die Ganzkörperpflege an. Zwei Dinge musst du wissen: Wie geht Erstmobilisation sicher — und wie wäschst du einen Patienten mit Stoma, ohne Keime zu verschleppen?",
    storyAufhaengerB1:
      "Herr Nguyen soll heute zum ersten Mal sitzen. Und du wäschst ihn. Zwei Dinge sind wichtig: Sicher aufsetzen und richtig waschen (ohne Keime zu verschleppen).",
    kerntext:
      "**Erstmobilisation post-OP (DNQP 2020):**\n\n**Orthostase-Gefahr:** Nach Tagen im Bett hat sich der Kreislauf an die liegende Position angepasst. Beim Aufrichten sackt das Blut in die Beine → Blutdruck sinkt → **Schwindel, Übelkeit, Kollaps-Gefahr.**\n\n**Stufenprotokoll:**\n1. Kopfteil langsam hochstellen (30° → 45° → 60°)\n2. Beine aus dem Bett schwingen → **Bettkante** (= Sitzen am Bettrand, Füße am Boden)\n3. 1–3 Minuten Bettkante — Kreislauf prüfen: Schwindel? Blässe? Übelkeit?\n4. Erst wenn stabil: Mit Hilfe aufstehen (Kinästhetik: Patient bewegt sich selbst, du sicherst seitlich am Becken)\n\n**Hygiene bei der Ganzkörperpflege (RKI/KRINKO 2016):**\n\n**Grundregel: Von sauber zu unrein** (= von keimarm zu keimreich):\n\n1. Gesicht (sauberste Zone)\n2. Oberkörper, Arme\n3. Bauch (Stoma-Bereich: extra Handschuhe, separates Tuch)\n4. Rücken\n5. Beine, Füße\n6. Intimbereich (unreinste Zone — ZULETZT)\n\n**Warum?** Kreuzkontamination vermeiden = Keime nicht von einer Zone in eine andere verschleppen. Handschuhe wechseln zwischen Stoma-Bereich und Intimbereich.",
    kerntextB1:
      "**Erstes Aufstehen nach der OP:**\n\nNach Tagen im Bett ist der Kreislauf schwach. Wenn man zu schnell aufsteht: Schwindel, Übelkeit, Ohnmacht.\n\n**Schritt für Schritt:**\n1. Kopfteil langsam hochstellen\n2. Beine aus dem Bett → **Bettkante** (= am Bettrand sitzen)\n3. 1–3 Minuten warten. Schwindel? Blass? Übel?\n4. Erst wenn alles gut: langsam aufstehen\n\n**Hygiene beim Waschen:**\n\n**Von sauber zu unrein** waschen:\n1. Gesicht (sauber)\n2. Oberkörper\n3. Bauch (Stoma-Bereich: extra Handschuhe)\n4. Rücken\n5. Beine, Füße\n6. Intim-Bereich (zuletzt)\n\nWarum? Keime nicht von einer Stelle zur anderen tragen (= **Kreuzkontamination**).",
    faustregel:
      "**Mobilisation: Bettkante → warten → aufstehen.** Hygiene: Gesicht zuerst, Intim zuletzt, Handschuhe wechseln.",
    faustregelB1:
      "Erst sitzen, dann warten, dann aufstehen. Waschen: Gesicht zuerst, Intim zuletzt.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Erstmobilisation Hüft-TEP",
        kurzbeschreibung:
          "Bei Frau Yilmaz: Erstmobilisation am 1. POD (Fast-Track). Orthostase-Gefahr plus Hüft-Bewegungslimit (keine Flexion > 90°). Kinästhetik: über die nicht-operierte Seite aufstehen.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Mobilisation bei Demenz",
        kurzbeschreibung:
          "Herr Bauer versteht die Anweisungen nicht. Mobilisation über Handführung, beruhigende Stimme, vertraute Abläufe. Sturzrisiko hier besonders hoch.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Hygienereihenfolge beim Wickeln",
        kurzbeschreibung:
          "Auch beim Säugling: von sauber zu unrein. Erst Gesicht, dann Körper, zuletzt Windelbereich. Handschuhe wechseln.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyen soll zum ersten Mal an die Bettkante. Nenne die Stufen — und warum wäscht du \"von sauber zu unrein\"?",
      rueckseite:
        "Mobilisation: Kopfteil hoch → Bettkante → 1–3 Min warten (Orthostase prüfen) → erst dann aufstehen. Von sauber zu unrein: Gesicht → Oberkörper → Bauch/Stoma → Rücken → Beine → Intim. Kreuzkontamination vermeiden: Keime nicht verschleppen, Handschuhe wechseln.\n\nFaustregel: **Bettkante → warten → aufstehen. Gesicht zuerst, Intim zuletzt.**",
    },
  },
};

// =============================================================================
// PHASE 5 — EVALUIEREN
// =============================================================================

/**
 * IW-P09: Evaluation + Energiebedarf + Stressstoffwechsel + Trinknahrung
 * Position: VOR Step 5.1 (Categorize: Stoma-Assessment Evaluation)
 * Grund: Evaluation + Energiebedarf-Begriffe werden in eval-01 und eval-02 gebraucht
 * Deckt: Evaluation, Verlauf, Energiebedarf, Stressstoffwechsel, Trinknahrung, Kalorien
 */
export const CE02_NGUYEN_IWP_09_EVALUATION_ENERGIE: ContentStep = {
  stepId: "ce02-nguyen-eval-00b-evaluation-energie",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter V. / Meier M. (1981): Pflegeprozess — Evaluation als 6. Schritt",
    "DGEM (2020): S3-Leitlinie Klinische Ernährung in der Chirurgie",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-eval-grundlagen",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["ernährungsassessment"],
  transition:
    "Evaluation und Energiebedarf verstanden. Jetzt: Wie hat sich Herrn Nguyens Zustand entwickelt?",
  contentC1: {
    title: "Evaluation + Energiebedarf bei chirurgischen Patienten",
    body: "",
    glossarBegriffe: ["Evaluation", "Stressstoffwechsel", "Trinknahrung", "Energiebedarf"],
  },
  contentB1: {
    title: "Auswertung + Energie-Bedarf nach OP",
    body: "",
    glossarBegriffe: ["Evaluation", "Trinknahrung", "Energiebedarf"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-evaluation-energie",
    themaPrimaer: "pflegeprozess",
    storyAufhaenger:
      "Es ist der Abend von Herrn Nguyens 4. Tag. Du sitzt an der Dokumentation und fragst dich: Hat sich etwas verbessert? Stoma-Versorgung, Ernährung, Mobilisation — wo steht er? Und warum braucht sein Körper nach der OP so viel mehr Energie als normal?",
    storyAufhaengerB1:
      "Es ist Abend, Tag 4. Hat sich etwas verbessert? Und warum braucht Herr Nguyens Körper nach der OP so viel mehr Energie?",
    kerntext:
      "**Evaluation = Soll-Ist-Vergleich** (Fiechter/Meier 1981):\n\n• Vergleiche die Pflegeziele aus Phase 3 mit dem aktuellen Zustand\n• 3 Ergebnisse: Ziel erreicht / teilweise erreicht / nicht erreicht\n• Bei \"nicht erreicht\": Ursache suchen → Maßnahme anpassen\n• **Verlauf** dokumentieren: Was hat sich verändert, wann, warum?\n\n**Energiebedarf nach großer OP:**\n\n**Stressstoffwechsel:** Nach einer OP schaltet der Körper in einen Katabolismus-Modus — er baut mehr ab als auf. Der Energiebedarf steigt um 20–40% (DGEM 2020).\n\n• Grundumsatz bei Herrn Nguyen (ca. 65 kg, 65 Jahre): ~1500 kcal/Tag\n• Stressfaktor post-OP (1,2–1,4): ca. 1800–2100 kcal/Tag nötig\n• Proteinbedarf erhöht: 1,2–1,5 g/kg/Tag (statt 0,8 g/kg)\n\n**Trinknahrung** = orale Nahrungsergänzung (z. B. Fresubin, Fortimel):\n• 200 ml = ca. 200–300 kcal + 10–20 g Protein\n• Indikation: Wenn orale Aufnahme aus normaler Kost den Bedarf nicht deckt\n��� Bei Herrn Nguyen: Kostaufbau läuft langsam, Trinknahrung als Brücke bis zur Vollkost\n\n**Kalorien zählen ist Pflege-Aufgabe:** Ernährungsprotokoll führen, Bilanz berechnen, Ernährungsberaterin informieren wenn Defizit > 500 kcal/Tag.",
    kerntextB1:
      "**Was ist Evaluation?** Du vergleichst: Was war das Ziel? Was ist jetzt?\n• Ziel erreicht → gut, weiter beobachten\n• Teilweise erreicht → weiter so\n• Nicht erreicht → warum nicht? Ändern.\n\n**Warum braucht Herr Nguyen mehr Energie?**\n\nNach einer OP baut der Körper mehr ab als auf (= **Stressstoffwechsel**). Er braucht 20–40% mehr Kalorien.\n\n• Normal: ca. 1500 Kalorien pro Tag\n• Nach OP: ca. 1800–2100 Kalorien pro Tag\n\n**Trinknahrung** (z. B. Fresubin):\n• Kleine Flasche (200 ml) = 200–300 Kalorien + Eiweiß\n• Hilft, wenn er noch nicht genug essen kann",
    faustregel:
      "**Evaluation = Soll vs. Ist.** Post-OP Stressstoffwechsel = 20–40% mehr Energie nötig. Trinknahrung schließt die Lücke.",
    faustregelB1:
      "Evaluation = Ziel mit jetzt vergleichen. Nach OP braucht der K��rper mehr Energie. Trinknahrung hilft.",
    spektrum: [
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Evaluation BZ-Verlauf",
        kurzbeschreibung:
          "Bei Frau Schmidt: Evaluation über 5 Tage BZ-Tagesprofil. Proteinzufuhr als Pflegeziel — Albumin als Langzeitmarker (HWZ 20 Tage, nicht kurzfristig auswertbar).",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Evaluation Schluck-Stufen",
        kurzbeschreibung:
          "Bei Herr Petrov: Evaluation der IDDSI-Stufe — kann er von Stufe 3 (moderat dickflüssig) auf Stufe 4 (breiig) aufsteigen? Logopädin entscheidet, Pflege dokumentiert.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Trinkprotokoll-Evaluation",
        kurzbeschreibung:
          "Bei Emilia: Evaluation über Trinkprotokoll — trinkt sie genug? Gewichtsentwicklung als Verlaufsparameter.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Nguyens Ernährungsprotokoll zeigt 1200 kcal am Tag 4. Sein Bedarf nach OP liegt bei ~2000 kcal. Was tust du?",
      rueckseite:
        "Evaluation: Ziel nicht erreicht (1200 < 2000 kcal). Stressstoffwechsel post-OP = +20–40% Energiebedarf. Ma��nahme: Trinknahrung (z. B. 2× 200 ml Fresubin = 400–600 kcal). Ernährungsberaterin informieren. Ernährungsprotokoll weiterführen.\n\nFaustregel: **Stressstoffwechsel = 20–40% mehr. Trinknahrung schließt die Lücke.**",
    },
  },
};

// =============================================================================
// PHASE 6 — DOKUMENTIEREN
// =============================================================================

/**
 * IW-P10: Ernährungsprotokoll + Übergabe
 * Position: VOR Step 6.2 (Tablefillin: Ernährungsprotokoll)
 * Grund: Ernährungsprotokoll und Übergabe werden in 6.2 und 6.4 gebraucht
 * Deckt: Ernährungsprotokoll, Übergabe, Pflicht-Elemente, Kalorien (Doku-Kontext)
 */
export const CE02_NGUYEN_IWP_10_ERNAEHRUNGSPROTOKOLL: ContentStep = {
  stepId: "ce02-nguyen-dok-01b-ernährungsprotokoll",
  phase: 6,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2017): Expertenstandard Ernährungsmanagement",
    "DGEM (2020): S3-Leitlinie Klinische Ernährung in der Chirurgie",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-nguyen-dok-ernährungsprotokoll",
  tag: "pflege",
  themaPrimaer: "ernährungsassessment",
  themenSekundaer: ["pflegedokumentation"],
  transition:
    "Du weißt was ins Protokoll gehört. Jetzt: Fülle das Ernährungsprotokoll für Herrn Nguyen aus.",
  contentC1: {
    title: "Ernährungsprotokoll + Übergabe — was muss rein?",
    body: "",
    glossarBegriffe: ["Ernährungsprotokoll", "Übergabe", "Pflicht-Elemente"],
  },
  contentB1: {
    title: "Ernährungs-Protokoll + Übergabe schreiben",
    body: "",
    glossarBegriffe: ["Ernährungsprotokoll", "Übergabe"],
  },
  inlineWissen: {
    bausteinRef: "ernährungsassessment-dokumentation-stoma",
    themaPrimaer: "ernährungsassessment",
    storyAufhaenger:
      "Du dokumentierst Herrn Nguyens Tag. Neben dem Stoma-Befund ist das Ernährungsprotokoll Pflicht — er ist post-OP mit NRS-Score ≥ 3. Aber was genau muss rein — und was vergessen Anfänger am häufigsten?",
    storyAufhaengerB1:
      "Du dokumentierst Herrn Nguyens Tag. Neben dem Stoma-Befund musst du auch aufschreiben was er gegessen und getrunken hat. Was muss ins Protokoll?",
    kerntext:
      "**Ernährungsprotokoll — Pflicht-Elemente** (DNQP 2017, DGEM 2020):\n\n**Pro Mahlzeit dokumentieren:**\n• Uhrzeit\n• Art der Mahlzeit (Frühstück, Mittag, Abend, Zwischenmahlzeit)\n• Was gegessen/getrunken (konkret, nicht \"wenig gegessen\")\n• Menge (in ml oder Portionsanteilen: 1/2, 3/4, ganze Portion)\n• **Kalorien** gesch��tzt (bei Trinknahrung exakt: z. B. Fresubin 200 ml = 300 kcal)\n• NRS-Status-Änderung (falls relevant)\n\n**Häufigste Anfänger-Fehler:**\n• \"Hat gut gegessen\" — nicht messbar, nicht auswertbar\n• Trinknahrung nicht separat aufgeführt\n• Stoma-Output nicht zur Ernährungsbilanz gezählt (hoher Output = Flüssigkeitsverlust!)\n\n**Übergabe (= Schichtübergabe):**\n\nStrukturierte Information an die nächste Schicht. Pflicht-Inhalte bei Herrn Nguyen:\n• Stoma-Status (Farbe, Output, Hautzustand)\n• Ernährungsbilanz des Tages (Einfuhr vs. Bedarf)\n• Mobilisations-Fortschritt\n• Schmerz-Status\n• Offene Aufgaben (z. B. Stomatherapeut-Termin morgen)\n\nZiel: Die nächste Schicht kann sofort weiterarbeiten — ohne nachfragen zu müssen.",
    kerntextB1:
      "**Ernährungs-Protokoll — was muss rein?**\n\nFür jede Mahlzeit schreibst du:\n• Wann (Uhrzeit)\n• Was (Frühstück, Mittag...)\n• Was gegessen/getrunken (genau aufschreiben)\n• Wie viel (ganze Portion? Halbe?)\n• Kalorien (bei Trinknahrung genau: z. B. 200 ml Fresubin = 300 kcal)\n\n**Häufige Fehler:**\n• \"Hat gut gegessen\" — das sagt nichts\n• Trinknahrung vergessen aufzuschreiben\n\n**Übergabe:**\n• Was muss die nächste Schicht wissen?\n• Stoma, Essen, Mobilisation, Schmerz, offene Aufgaben\n• Ziel: Die nächste Kollegin muss nicht nachfragen.",
    faustregel:
      "**\"Hat gut gegessen\" ist keine Dokumentation.** Menge, Art, Kalorien — messbar statt vage. Übergabe = alles was die nächste Schicht braucht.",
    faustregelB1:
      "Immer aufschreiben WAS und WIE VIEL. \"Hat gut gegessen\" reicht nicht. Übergabe = alles was die nächste Kollegin wissen muss.",
    spektrum: [
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Ernährungsprotokoll bei Adipositas",
        kurzbeschreibung:
          "Bei Frau Schmidt: Ernährungsprotokoll mit Protein-Fokus. Nicht nur Kalorien, sondern Eiweiß-Gramm pro Mahlzeit dokumentieren.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "IDDSI-Stufe + Schluck-Protokoll",
        kurzbeschreibung:
          "Bei Herr Petrov: zusätzlich IDDSI-Stufe dokumentieren (welche Konsistenz toleriert?) und ob Verschlucken aufgetreten ist.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-säugling",
        hauptfaktor: "Trinkprotokoll Säugling",
        kurzbeschreibung:
          "Bei Emilia: Trinkmenge in ml pro Mahlzeit + Stillzeit in Minuten. Gewichtsverlauf täglich. Ausscheidung (Windeln) als Gegenrechnung.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was sind die Pflicht-Elemente im Ernährungsprotokoll — und warum reicht \"hat gut gegessen\" nicht?",
      rueckseite:
        "Pflicht: Uhrzeit, Art, Was, Menge, Kalorien, ggf. Trinknahrung separat. \"Hat gut gegessen\" = nicht messbar, nicht auswertbar (DNQP 2017). Bei Stoma: Output zur Bilanz zählen (hoher Output = Flüssigkeitsverlust). Übergabe: Stoma-Status + Ernährungsbilanz + Mobilisation + Schmerz + offene Aufgaben.\n\nFaustregel: **Messbar statt vage. Menge statt Meinung.**",
    },
  },
};
