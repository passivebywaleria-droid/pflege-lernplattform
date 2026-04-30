// CE-02 Situation Petrov — Inline-Wissens-Bausteine
// Themen: harnausscheidung, blasenkatheter, enterale-ernaehrung, essen-anreichen,
//   kontraktur-prophylaxe, mobilisation, pflegeprozess, pflegedokumentation
// Bausteine: 15 · Verteilt ueber 6 Phasen · Lehr-Patient: Herr Petrov
// Generiert: 2026-04-26

import type { ContentStep } from "../../../_types";

// ============================================================
// PHASE 1 — INFORMIEREN (3 Bausteine)
// ============================================================

/**
 * 1A — Aphasie + nonverbale Kommunikation
 * Position: VOR ce02-petrov-info-04-zimmer-betreten
 * Begriffe: Aphasie, Broca-Aphasie, nonverbale Kommunikation, Kommunikation
 */
export const CE02_PETROV_INLINE_01A_APHASIE: ContentStep = {
  stepId: "ce02-petrov-info-03c-aphasie-grundlagen",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "II.1",
  quellen: [
    "DGN S2k-Leitlinie Rehabilitation aphasischer Stoerungen 2022",
    "Tesak 2006 — Einfuehrung in die Aphasiologie",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-info-aphasie",
  tag: "krankheitslehre",
  themaPrimaer: "kontraktur-prophylaxe",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du weisst jetzt, wie Herr Petrovs Sprachstoerung funktioniert. Gleich betrittst du sein Zimmer — und wirst erleben, wie sich Broca-Aphasie im echten Gespraech anfuehlt.",
  contentC1: {
    title: "Aphasie bei Schlaganfall — warum Herr Petrov alles versteht, aber kaum sprechen kann",
    body: "",
    glossarBegriffe: ["Aphasie", "Broca-Aphasie", "nonverbale Kommunikation", "Kommunikation"],
  },
  contentB1: {
    title: "Warum kann Herr Petrov kaum sprechen?",
    body: "",
    glossarBegriffe: ["Aphasie", "Broca-Aphasie"],
  },
  inlineWissen: {
    bausteinRef: "kontraktur-prophylaxe-aphasie",
    storyAufhaenger:
      "In der Akte steht: \"Leichte Broca-Aphasie, versteht alles, spricht in 2-3 Woertern.\" Herr Petrov sitzt in seinem Bett und schaut dich an. Er hoert jedes Wort, das du sagst. Er weiss genau, was er antworten will. Aber zwischen seinem Gehirn und seinem Mund liegt eine Blockade — wie ein Stau auf einer Einbahnstrasse.",
    storyAufhaengerB1:
      "Herr Petrov versteht alles. Aber er kann nur 2-3 Woerter sagen. Das ist frustrierend fuer ihn. In der Akte steht: Broca-Aphasie. Was bedeutet das genau?",
    kerntext:
      "**Aphasie — wenn Sprache im Gehirn blockiert ist:**\n\n• **Aphasie** = erworbene Sprachstoerung nach Hirnschaedigung. Nicht: Denkproblem. Nicht: Intelligenzminderung. Die Gedanken sind da — der Weg nach draussen ist gestoert.\n\n• **Broca-Aphasie** (motorische Aphasie): Das Broca-Areal (links frontal) steuert die Sprachproduktion. Bei Schaedigung: Sprechen ist muehsam, Saetze verkuerzt (\"Morgen... besser?\"), Sprachverstaendnis aber erhalten.\n\n• **Nonverbale Kommunikation** wird zum Hauptkanal: Nicken, Kopfschuetteln, Zeigen, Mimik, Gestik. Herr Petrov zeigt auf sein Bein wenn es zieht. Er schuettelt den Kopf wenn ihm etwas nicht gefaellt.\n\n• **Pflegerisch entscheidend:** Geschlossene Fragen (Ja/Nein) nutzen. Zeit lassen — nicht vorschnell fuer ihn sprechen. Bildkarten oder Kommunikationstafel anbieten. Augenkontakt halten.\n\nQuelle: (DGN S2k 2022; Tesak 2006)",
    kerntextB1:
      "**Was ist Aphasie?**\n\n• Aphasie heisst: Sprachstoerung nach Hirnschaedigung. Herr Petrov ist nicht verwirrt. Er denkt klar. Aber die Woerter kommen nicht raus.\n\n• **Broca-Aphasie**: Das Sprech-Zentrum im Gehirn ist beschaedigt. Verstehen funktioniert — Sprechen nicht.\n\n• **So kommunizierst du:** Ja/Nein-Fragen stellen. Abwarten. Nicht fuer ihn sprechen. Auf Gesten achten: Nicken = Ja. Kopfschuetteln = Nein. Zeigen = dort tut es weh.",
    faustregel:
      "**Broca-Aphasie = versteht alles, spricht wenig.** Geschlossene Fragen, Zeit lassen, Gesten lesen.",
    faustregelB1:
      "Herr Petrov versteht alles. Stelle Ja/Nein-Fragen und warte. Achte auf seine Gesten.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz: Sprache UND Verstehen gestoert",
        kurzbeschreibung:
          "Bei Herr Bauer ist nicht nur die Sprachproduktion, sondern auch das Verstehen eingeschraenkt. Andere Ursache, andere Kommunikationsstrategie (Validation statt geschlossene Fragen).",
      },
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Bagatellisierung: versteht + spricht, verharmlost",
        kurzbeschreibung:
          "Frau M. hat kein Sprachdefizit — aber kommuniziert trotzdem nicht offen. Andere Kommunikationsbarriere: Angst vor Konsequenzen.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Sprachbarriere Deutsch als Zweitsprache",
        kurzbeschreibung:
          "Bei Herrn Nguyen ist die Sprache selbst intakt — die Barriere ist die Fremdsprache. Loesung: Dolmetscher. Bei Petrov: Kommunikationstafel.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrov (Broca-Aphasie) sagt: \"Morgen... besser?\" Welche Aphasie-Form liegt vor — und wie kommunizierst du mit ihm?",
      rueckseite:
        "Broca-Aphasie = motorische Aphasie. Sprachproduktion gestoert (Broca-Areal links frontal), Verstaendnis erhalten. Kommunikation: Geschlossene Ja/Nein-Fragen, Zeit lassen, nonverbale Signale lesen (Nicken, Zeigen, Mimik), Bildkarten/Kommunikationstafel. Nie: Saetze vervollstaendigen, infantil sprechen, Augenkontakt meiden. Spektrum: Bauer (Demenz: Verstehen+Sprechen), Nguyen (Fremdsprache). Faustregel: Broca = versteht alles, spricht wenig.",
    },
  },
};

/**
 * 1B — MCA + GUSS (Schlaganfall-Basics + Schluckscreening)
 * Position: VOR ce02-petrov-info-03-schlaganfall-akutwissen
 * Begriffe: MCA, GUSS, Pflegeprozess
 */
export const CE02_PETROV_INLINE_01B_MCA_GUSS: ContentStep = {
  stepId: "ce02-petrov-info-02b-mca-guss",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGN S2e-Leitlinie Akuttherapie Schlaganfall 2022",
    "Trapl et al. 2007 — Gugging Swallowing Screen",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-info-mca-guss",
  tag: "krankheitslehre",
  themaPrimaer: "enterale-ernaehrung",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du weisst jetzt, warum Herr Petrovs rechte Koerperhaelfte betroffen ist und was sein GUSS-Ergebnis bedeutet. Gleich vertiefst du das Akutwissen zum Schlaganfall.",
  contentC1: {
    title: "MCA-Infarkt + GUSS — was Herr Petrovs Diagnosen fuer die Pflege bedeuten",
    body: "",
    glossarBegriffe: ["MCA", "GUSS", "Pflegeprozess"],
  },
  contentB1: {
    title: "Was bedeuten Herr Petrovs Diagnosen?",
    body: "",
    glossarBegriffe: ["GUSS", "Pflegeprozess"],
  },
  inlineWissen: {
    bausteinRef: "enterale-ernaehrung-mca-guss",
    storyAufhaenger:
      "In der Akte steht: \"Ischaemischer Apoplex, A. cerebri media links (MCA).\" Und: \"Dysphagie Grad 2 nach GUSS-Protokoll.\" Zwei Abkuerzungen, die alles bestimmen, was du heute tust — von der Koerperpflege ueber die Lagerung bis zur Frage, ob er seinen Kaffee trinken darf.",
    storyAufhaengerB1:
      "In der Akte stehen zwei wichtige Abkuerzungen: MCA und GUSS. Die eine sagt dir, warum die rechte Seite nicht funktioniert. Die andere, ob Herr Petrov trinken darf.",
    kerntext:
      "**MCA — Arteria cerebri media:**\n\n• Die MCA versorgt den groessten Teil der seitlichen Grosshirnrinde — darunter das **Broca-Areal** (Sprache) und den **motorischen Kortex** (Bewegung).\n• Infarkt links → rechte Koerperhaelfte betroffen (kontralateral). Deshalb: Hemiparese rechts + Broca-Aphasie.\n• Tag 5: Akutphase vorbei, Fruehreha beginnt. Das Zeitfenster fuer Neuroplastizitaet ist jetzt am groessten — jede Uebung zaehlt.\n\n**GUSS — Gugging Swallowing Screen (Trapl 2007):**\n\n• Standardisiertes Schluck-Screening in 2 Stufen: 1) Indirekter Schluckversuch (Speichel, Husten, Stimmveraenderung), 2) Direkter Schluckversuch (breiig → fluessig → fest).\n• Herr Petrov: **Grad 2** = breiige Kost ja, duenne Fluessigkeiten nein (Aspirationsgefahr). Getraenke muessen angedickt werden.\n• **GUSS entscheidet den Pflegeprozess:** Mundpflege, Essen anreichen, Medikamentengabe — alles haengt davon ab.\n\nQuelle: (DGN S2e 2022; Trapl 2007)",
    kerntextB1:
      "**MCA = die grosse Hirnarterie:**\n\n• Die MCA versorgt einen grossen Teil des Gehirns. Links verstopft → rechte Koerperseite funktioniert nicht gut.\n• Deshalb: rechter Arm bewegt sich nicht, rechtes Bein nur wenig, Sprache ist schwer.\n\n**GUSS = Schluck-Test:**\n\n• Der GUSS prueft: Kann der Patient schlucken ohne sich zu verschlucken?\n• Herr Petrov: Grad 2 = Brei ja, duenne Getraenke nein. Fluessigkeiten muessen angedickt werden.\n• Das ist wichtig fuer alles: Essen, Trinken, Mundpflege, Medikamente.",
    faustregel:
      "**MCA links = rechte Seite betroffen + Sprache. GUSS Grad 2 = Brei ja, duenn nein.** Diese zwei Infos steuern deinen ganzen Tag.",
    faustregelB1:
      "MCA links heisst: rechte Seite betroffen + Sprache schwer. GUSS Grad 2 heisst: Brei ja, duenne Getraenke nein.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP, kein Schluckdefizit",
        kurzbeschreibung:
          "Frau Yilmaz hat volle Schluckfunktion — ihr Problem ist die Mobilitaet. Bei Petrov ist es umgekehrt: Schlucken ist das Hauptrisiko.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, Schluckreflex erhalten, aber Vergessen",
        kurzbeschreibung:
          "Herr Bauer vergisst das Kauen oder schiebt Essen im Mund herum — andere Ursache als bei Petrov (neurologisch vs. kognitiv).",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Saeugling, Trinkschwaeche bei Bronchiolitis",
        kurzbeschreibung:
          "Bei Emilia ist es Erschoepfung, nicht Laesion. Aber das Prinzip ist gleich: Schluckfunktion entscheidet ueber Ernaehrungsform.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrov hat einen MCA-Infarkt links und GUSS Grad 2. Was bedeutet das fuer die Pflege?",
      rueckseite:
        "MCA links → kontralaterale Symptome: Hemiparese rechts + Broca-Aphasie. Tag 5: Fruehreha-Phase, Neuroplastizitaet am hoechsten. GUSS Grad 2 (Trapl 2007): Breiige Kost moeglich, duenne Fluessigkeiten aspirationsgefaehrlich → andicken. Konsequenzen fuer alle Pflegemassnahmen: Mundpflege (Aspirationsschutz), Essen (nur Brei), Medikamentengabe (Tabletten zerkleinern, mit Brei). Faustregel: MCA links = rechts + Sprache. GUSS 2 = Brei ja, duenn nein.",
    },
  },
};

/**
 * 1C — Pflegeprozess bei Schlaganfall (Wiederbegegnung)
 * Position: VOR ce02-petrov-info-02-pflegeprozess-check
 * Begriffe: Pflegeprozess (Wiederbegegnung von Frau M.)
 */
export const CE02_PETROV_INLINE_01C_PFLEGEPROZESS: ContentStep = {
  stepId: "ce02-petrov-info-01c-pflegeprozess-neuro",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "DNQP Sturzprophylaxe 2022",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-info-pflegeprozess",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["kontraktur-prophylaxe"],
  transition:
    "Du kennst den Pflegeprozess von Frau M. Bei Herr Petrov kommen andere Risiken dazu — aber die 6 Schritte bleiben gleich.",
  contentC1: {
    title: "Pflegeprozess bei Schlaganfall — gleiche Struktur, andere Risiken",
    body: "",
    glossarBegriffe: ["Pflegeprozess"],
  },
  contentB1: {
    title: "Der Pflegeprozess bei Herr Petrov",
    body: "",
    glossarBegriffe: ["Pflegeprozess"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-informationssammlung",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-informationssammlung",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du den Pflegeprozess als 6-Schritte-Regelkreis gelernt. Bei Herr Petrov ist die Struktur identisch — aber die Inhalte voellig anders: Statt Sturzrisiko stehen hier Aspirationsgefahr, Kontrakturrisiko und Kommunikationsbarriere im Vordergrund. Ein Patient, der nicht sprechen kann, erfordert kreative Wege der Informationssammlung.",
      vertiefungB1:
        "Bei Frau M. hast du die 6 Schritte gelernt: Information → Beobachtung → Planung → Durchfuehrung → Evaluation → Dokumentation. Bei Herr Petrov ist alles anders: Er kann kaum sprechen. Also musst du Informationen anders sammeln — durch Beobachtung, Gesten, Akte.",
    },
    storyAufhaenger:
      "Du oeffnest Herr Petrovs Akte. 6 Diagnosen, 5 Risiken, 3 Therapien. Bei Frau M. konntest du fragen: \"Was ist passiert?\" Bei Herr Petrov geht das nicht — er antwortet mit 2 Woertern und einem Nicken.",
    storyAufhaengerB1:
      "Du hast Herr Petrovs Akte gelesen. Viele Diagnosen, viele Risiken. Aber du kannst ihn kaum fragen — er kann nur wenige Woerter sagen.",
    kerntext:
      "**Pflegeprozess bei Aphasie — Informationssammlung ohne Sprache:**\n\n• **Akte als Hauptquelle:** Diagnosen, GUSS-Ergebnis, Vitalwerte, Verlaeufe der Stroke Unit — alles steht dort. Lies gruendlich, bevor du das Zimmer betrittst.\n\n• **Beobachtung statt Befragung:** Mimik, Koerperhaltung, Bewegungsmuster, Reaktionen auf Beruehrung. Herr Petrov zeigt dir mehr als er sagen kann.\n\n• **Angehoerige als Bruecke:** Natalya kennt seine Gewohnheiten, Vorlieben, Aengste. Sie ist eine wichtige Informationsquelle.\n\n• **Geschlossene Fragen + Bildkarten:** Ja/Nein-Fragen strukturieren. Bei komplexeren Themen: Bildkarten, Zeigen auf Koerperteile.\n\nQuelle: (Fiechter/Meier 1981; DGN S2k 2022)",
    kerntextB1:
      "**Wie sammelst du Informationen, wenn der Patient kaum sprechen kann?**\n\n• **Akte lesen** — alles steht dort. Lies gruendlich bevor du ins Zimmer gehst.\n• **Beobachten** — Mimik, Koerperhaltung, Reaktionen.\n• **Angehoerige fragen** — seine Frau Natalya kennt ihn.\n• **Ja/Nein-Fragen** stellen. Bildkarten nutzen.",
    faustregel:
      "**Aphasie aendert den Weg, nicht das Ziel.** Du sammelst dieselben Informationen — nur ueber andere Kanaele.",
    faustregelB1:
      "Wenn der Patient nicht sprechen kann: Akte lesen, beobachten, Angehoerige fragen, Ja/Nein-Fragen stellen.",
    karteikarte: {
      vorderseite:
        "Herr Petrov hat Broca-Aphasie. Wie fuehrst du die Informationssammlung im Pflegeprozess durch?",
      rueckseite:
        "Quellen: 1) Akte (Diagnosen, GUSS, Vitalwerte, Stroke-Unit-Verlauf), 2) Beobachtung (Mimik, Haltung, Bewegung, Reaktionen), 3) Angehoerige (Natalya kennt Gewohnheiten), 4) Geschlossene Fragen + Bildkarten. Pflegeprozess bleibt 6 Schritte — nur der Weg der Informationssammlung aendert sich. Faustregel: Aphasie aendert den Weg, nicht das Ziel.",
    },
  },
};

// ============================================================
// PHASE 2 — BEOBACHTEN (3 Bausteine)
// ============================================================

/**
 * 2A — Motorik + Muskeltonus + Dorsalflexion
 * Position: VOR ce02-petrov-beob-01-motorik-brilliantfrage
 * Begriffe: Motorik, Muskeltonus, Dorsalflexion
 */
export const CE02_PETROV_INLINE_02A_MOTORIK: ContentStep = {
  stepId: "ce02-petrov-beob-00b-motorik-grundlagen",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGN S2e-Leitlinie Rehabilitative Therapie Schlaganfall 2021",
    "MRC Scale (Medical Research Council 1943/2010)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-beob-motorik",
  tag: "anatomie",
  themaPrimaer: "kontraktur-prophylaxe",
  themenSekundaer: ["mobilisation"],
  transition:
    "Du weisst jetzt, was Muskeltonus und Dorsalflexion bedeuten. Gleich beobachtest du Herr Petrovs rechte Koerperseite — beschreibe, was du siehst.",
  contentC1: {
    title: "Motorik nach Schlaganfall — Muskeltonus, Spastik und Dorsalflexion",
    body: "",
    glossarBegriffe: ["Motorik", "Muskeltonus", "Dorsalflexion"],
  },
  contentB1: {
    title: "Was passiert mit den Muskeln nach einem Schlaganfall?",
    body: "",
    glossarBegriffe: ["Motorik", "Muskeltonus"],
  },
  inlineWissen: {
    bausteinRef: "kontraktur-prophylaxe-motorik-tonus",
    storyAufhaenger:
      "Du stehst an Herr Petrovs Bett. Sein rechter Arm liegt schlaff neben dem Koerper. Das rechte Bein reagiert auf Ansprache — aber anders als das linke. Die Bewegungen sind langsam, unkoordiniert, manchmal zittrig. Was genau beobachtest du, und warum ist das wichtig?",
    storyAufhaengerB1:
      "Herr Petrovs rechter Arm bewegt sich gar nicht. Das rechte Bein bewegt sich etwas — aber langsam und unsicher. Was passiert in seinen Muskeln?",
    kerntext:
      "**Motorik nach Schlaganfall — 3 Schluesselbegriffe:**\n\n• **Muskeltonus** = Grundspannung eines Muskels in Ruhe. Bei Hemiparese anfangs oft **hypoton** (schlaff, wie bei Herr Petrovs Arm). Spaeter kann sich **Spastik** entwickeln (erhoehter Tonus, Widerstand bei passiver Bewegung).\n\n• **Dorsalflexion** = Fusspitze Richtung Schienbein anheben. Testet die Funktion des N. peroneus und ist ein Schluesselindikator fuer das Gangbild. Herr Petrovs rechter Fuss: Dorsalflexion eingeschraenkt → Sturzrisiko bei Mobilisation, Spitzfussgefahr bei fehlender Prophylaxe.\n\n• **MRC-Skala** (0-5): Standardisierte Kraftmessung. 0 = keine Kontraktion, 3 = Bewegung gegen Schwerkraft, 5 = normale Kraft. Bei Petrov: Arm ~1 (Muskelzucken), Bein ~3 (hebt gegen Schwerkraft).\n\n• **Pflege-Konsequenz:** Hypotoner Arm = Subluxationsgefahr im Schultergelenk. Nie am hemiparetischen Arm ziehen. Arm immer unterstuetzt lagern.\n\nQuelle: (DGN S2e 2021; MRC 1943/2010)",
    kerntextB1:
      "**Was passiert nach einem Schlaganfall mit den Muskeln?**\n\n• **Muskeltonus** = wie fest oder schlaff ein Muskel ist. Herr Petrovs rechter Arm ist schlaff (= hypoton). Das Bein hat etwas mehr Spannung.\n\n• **Dorsalflexion** = die Fusspitze nach oben ziehen. Wenn das nicht geht, kann er beim Gehen stolpern. Und der Fuss kann steif werden (Spitzfuss).\n\n• **Kraft messen** mit der MRC-Skala (0-5): 0 = nichts, 5 = normal. Herr Petrovs Arm: 1 (nur Zucken). Bein: 3 (hebt gegen Schwerkraft).\n\n• **Wichtig:** Den schlaffen Arm nie ziehen. Immer unterstuetzen. Sonst kann die Schulter beschaedigt werden.",
    faustregel:
      "**Hypotoner Arm = Subluxationsgefahr. Nie am hemiparetischen Arm ziehen — immer unterstuetzt lagern.**",
    faustregelB1:
      "Den schlaffen Arm nie ziehen! Immer unterstuetzen. Sonst kann das Schultergelenk geschaedigt werden.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP: Muskeln intakt, Bewegung limitiert durch OP",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist der Muskeltonus normal — die Bewegungseinschraenkung kommt von der OP, nicht vom Gehirn.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Kontraktur durch Immobilitaet bei Demenz",
        kurzbeschreibung:
          "Herr Bauers Knie-Kontraktur ist Folge von Bewegungsmangel. Bei Petrov droht dasselbe — aber die Ursache ist eine andere (Hemiparese).",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrovs rechter Arm ist schlaff, das rechte Bein hebt gegen Schwerkraft. Welche Gefahren bestehen und warum?",
      rueckseite:
        "Schlaffer Arm (MRC ~1) = Subluxationsgefahr Schultergelenk → nie am Arm ziehen, immer stuetzen. Bein MRC ~3 = Dorsalflexion eingeschraenkt → Sturzrisiko + Spitzfussgefahr. Spaeter kann Spastik einsetzen (erhoehter Tonus). MRC-Skala: 0=keine Kontraktion, 5=normal. Faustregel: Hypotoner Arm = Subluxationsgefahr, nie am hemiparetischen Arm ziehen.",
    },
  },
};

/**
 * 2B — Dekubitus + EPUAP + Praedilektionsstellen
 * Position: VOR ce02-petrov-beob-06-hautinspektion
 * Begriffe: Dekubitus, EPUAP, Praedilektionsstellen, Haut, Lagerung
 */
export const CE02_PETROV_INLINE_02B_DEKUBITUS: ContentStep = {
  stepId: "ce02-petrov-beob-05b-dekubitus-grundlagen",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Expertenstandard Dekubitusprophylaxe 2017",
    "EPUAP/NPIAP/PPPIA 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-beob-dekubitus",
  tag: "pflege",
  themaPrimaer: "dekubitus-prophylaxe",
  themenSekundaer: ["positionierung"],
  transition:
    "Du weisst jetzt, wo Druckstellen entstehen und warum Herr Petrov besonders gefaehrdet ist. Gleich inspizierst du seine Haut — achte auf die Praedilektionsstellen.",
  contentC1: {
    title: "Dekubitus bei Hemiparese — warum Herr Petrov besonders gefaehrdet ist",
    body: "",
    glossarBegriffe: ["Dekubitus", "EPUAP", "Praedilektionsstellen", "Haut", "Lagerung"],
  },
  contentB1: {
    title: "Dekubitus — Druckstellen erkennen",
    body: "",
    glossarBegriffe: ["Dekubitus", "Haut"],
  },
  inlineWissen: {
    bausteinRef: "dekubitus-prophylaxe-praedilektionsstellen",
    storyAufhaenger:
      "Herr Petrov liegt seit 5 Tagen. Sein rechter Arm und sein rechtes Bein bewegen sich kaum. Wenn er auf dem Ruecken liegt, druckt das Gewicht auf immer dieselben Stellen — Kreuzbein, Fersen, rechter Trochanter. Er spuert Druck rechts weniger als links. Genau das macht ihn zur Risikogruppe.",
    storyAufhaengerB1:
      "Herr Petrov liegt viel. Seine rechte Seite bewegt sich kaum und spuert weniger. Das Koerpergewicht drueckt immer auf dieselben Stellen. Dort kann die Haut kaputtgehen.",
    kerntext:
      "**Dekubitus — Druck, Zeit und Risikofaktoren:**\n\n• **Dekubitus** = Druckschaedigung der Haut und des darunterliegenden Gewebes. Entsteht durch anhaltendem Druck + Scherkraefte, besonders ueber Knochenvorspruengen.\n\n• **EPUAP-Kategorien** (International Advisory Panel 2019): Kat. I = nicht wegdrueckbare Roetung. Kat. II = Teilverlust der Haut (Blase/Erosion). Kat. III = Vollverlust der Haut. Kat. IV = Vollverlust mit freiliegenden Strukturen.\n\n• **Praedilektionsstellen** (haeufigste Druckstellen): Kreuzbein/Steissbein (43 %), Fersen (12 %), Trochanter major (12 %), Schulterblatt, Hinterkopf. Bei Herr Petrov zusaetzlich: rechte Koerperseite staerker gefaehrdet (weniger Eigenbewegung, reduzierte Sensorik).\n\n• **Lagerung als Prophylaxe:** 30°-Schraeg-Lagerung entlastet Kreuzbein. 135°-Lagerung (Schiefe Ebene) entlastet Trochanter. Maximal 2 Stunden in einer Position — dann umlagern.\n\nQuelle: (DNQP 2017; EPUAP/NPIAP/PPPIA 2019)",
    kerntextB1:
      "**Was ist ein Dekubitus?**\n\n• Dekubitus = die Haut geht kaputt, weil zu lange Druck darauf war. Besonders ueber Knochen.\n\n• **4 Stufen**: Stufe 1 = rote Stelle, die nicht weiss wird beim Druecken. Stufe 2 = Blase oder offene Stelle. Stufe 3 = tiefes Loch. Stufe 4 = Knochen/Muskeln sichtbar.\n\n• **Wo passiert es am haeufigsten?** Steissbein, Fersen, Hueftknochen, Schulterblatt.\n\n• **Bei Herr Petrov:** Die rechte Seite ist besonders gefaehrdet — er bewegt sie kaum und spuert dort weniger.\n\n• **Was hilft?** Regelmässig umlagern (alle 2 Stunden). 30°-Schraeg-Lagerung.",
    faustregel:
      "**Druck + Zeit + fehlende Eigenbewegung = Dekubitus.** Hemiparetische Seite = doppeltes Risiko (weniger Bewegung + weniger Sensorik).",
    faustregelB1:
      "Druck + Zeit + wenig Bewegung = Dekubitus-Gefahr. Rechte Seite ist bei Herr Petrov besonders gefaehrdet.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II am Steissbein",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist der Dekubitus schon da (Kat. II). Bei Herr Petrov willst du verhindern, dass es so weit kommt.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Immobilitaet bei Demenz",
        kurzbeschreibung:
          "Herr Bauer bewegt sich wenig und vergisst Positionswechsel. Anderes Risikoprofil, gleiches Ergebnis: Dekubitusgefahr.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Post-OP Immobilitaet + Mangelernnaehrung",
        kurzbeschreibung:
          "Bei Herrn Nguyen kommt Mangelernaehrung dazu — duenne Haut, weniger Polster ueber Knochenvorspruengen.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrov liegt seit 5 Tagen mit Hemiparese rechts. Wo sind die Praedilektionsstellen fuer Dekubitus — und warum ist die rechte Seite besonders gefaehrdet?",
      rueckseite:
        "Praedilektionsstellen: Kreuzbein (43 %), Fersen (12 %), Trochanter major (12 %), Schulterblatt, Hinterkopf. EPUAP-Kategorien I-IV. Rechte Seite doppelt gefaehrdet: reduzierte Eigenbewegung (Hemiparese) + reduzierte Sensorik → spuert Druck weniger → aendert Position nicht selbst. Prophylaxe: 30°-Schraeg-Lagerung, max. 2h in einer Position, Hautinspektion bei jedem Lagerungswechsel. Faustregel: Druck + Zeit + fehlende Eigenbewegung = Dekubitus.",
    },
  },
};

/**
 * 2C — Bilanzierung
 * Position: VOR ce02-petrov-beob-05-katheter-check
 * Begriffe: Bilanzierung
 */
export const CE02_PETROV_INLINE_02C_BILANZIERUNG: ContentStep = {
  stepId: "ce02-petrov-beob-04c-bilanzierung",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie Intravasale Volumentherapie 2020",
    "DNQP Kontinenzfoerderung 2014",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-beob-bilanzierung",
  tag: "pflege",
  themaPrimaer: "harnausscheidung",
  themenSekundaer: ["blasenkatheter"],
  transition:
    "Du weisst jetzt, was Bilanzierung bedeutet. Gleich kontrollierst du den Katheter — achte auf Urinmenge und -farbe.",
  contentC1: {
    title: "Bilanzierung — Einfuhr und Ausfuhr im Gleichgewicht",
    body: "",
    glossarBegriffe: ["Bilanzierung"],
  },
  contentB1: {
    title: "Was heisst Bilanzierung?",
    body: "",
    glossarBegriffe: ["Bilanzierung"],
  },
  inlineWissen: {
    bausteinRef: "harnausscheidung-bilanzierung",
    storyAufhaenger:
      "Auf dem Abendbericht steht: \"Einfuhr: 1.800 ml, Ausfuhr: 1.450 ml.\" Herr Petrov hat einen Blasenkatheter — die Ausfuhr laesst sich also exakt ablesen. Aber was sagt dir die Differenz? Und wann musst du den Arzt informieren?",
    storyAufhaengerB1:
      "Der Abend-Bericht zeigt: Herr Petrov hat 1.800 ml Fluessigkeit bekommen und 1.450 ml Urin ausgeschieden. Was bedeutet das?",
    kerntext:
      "**Bilanzierung = Einfuhr minus Ausfuhr:**\n\n• **Einfuhr**: Orale Trinkmenge + IV-Infusionen + Sondenkost + Medikamente in Loesung.\n• **Ausfuhr**: Urin (Katheter = exakt messbar) + Stuhl + Erbrechen + Drainage + Perspiratio insensibilis (~500-800 ml/Tag, unsichtbar ueber Haut und Atmung).\n\n• **Ziel**: Ausgeglichene Bilanz (±200 ml). Positive Bilanz (Einfuhr > Ausfuhr) = Fluessigkeitsretention → Oedemrisiko. Negative Bilanz = Exsikkose-Gefahr.\n\n• **Bei Herr Petrov**: Katheter macht Urinmessung praezise. Aber: Dysphagie limitiert orale Einfuhr. Angedickte Getraenke werden oft weniger getrunken → Exsikkose-Risiko trotz IV-Zugang.\n\n• **Arzt informieren bei**: Urin <0,5 ml/kg/h (bei Petrov: <29 ml/h), pluetzlich dunkelgelb/konzentriert, positiver Bilanz >1.000 ml.\n\nQuelle: (AWMF S3 2020; DNQP 2014)",
    kerntextB1:
      "**Bilanzierung heisst: Was kommt rein, was kommt raus?**\n\n• **Rein**: Trinken + Infusion + Sondenkost.\n• **Raus**: Urin (am Katheter ablesbar) + Stuhl + Schweiss (unsichtbar: ca. 500-800 ml/Tag).\n\n• **Soll**: Rein und raus sollen ungefaehr gleich sein.\n• **Problem bei Herr Petrov**: Er kann nur angedickte Getraenke trinken. Davon trinkt er weniger. Deshalb: Einfuhr kann zu niedrig werden.\n\n• **Arzt informieren**: Wenn sehr wenig Urin kommt (dunkelgelb, wenig Menge).",
    faustregel:
      "**Bilanzierung = Einfuhr − Ausfuhr.** Katheter macht die Ausfuhr exakt — aber die Einfuhr bei Dysphagie ist oft zu niedrig.",
    faustregelB1:
      "Bilanzierung heisst: Was rein kommt minus was raus kommt. Katheter zeigt die Ausfuhr genau. Aber Herr Petrov trinkt wegen Dysphagie wenig.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Trinkverweigerung bei Demenz",
        kurzbeschreibung:
          "Herr Bauer vergisst das Trinken oder lehnt es ab. Die Bilanzierung ist schwieriger — kein Katheter, Urin muss geschaetzt werden.",
      },
      {
        patientName: "Lukas",
        situationsId: "ls-lukas-verbruehung",
        hauptfaktor: "Erhoehter Bedarf durch Verbruehung",
        kurzbeschreibung:
          "Bei Lukas ist der Fluessigkeitsbedarf erhoehrt (Wunde, Fieber, Schmerz). Die Bilanzierung muss den Mehrbedarf beruecksichtigen.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrov: Einfuhr 1.800 ml, Ausfuhr 1.450 ml. Wie bewertest du die Bilanz — und warum ist Dysphagie ein Risikofaktor?",
      rueckseite:
        "Bilanz = Einfuhr − Ausfuhr = +350 ml. Plus Perspiratio insensibilis (~500-800 ml) → reale Bilanz eher leicht negativ. Katheter = praezise Ausfuhr. Dysphagie = limitierte orale Einfuhr (angedickte Getraenke werden weniger getrunken). Arzt bei: <0,5 ml/kg/h Urin, dunkelgelb, Bilanz >+1.000 ml. Faustregel: Katheter zeigt Ausfuhr exakt, aber Einfuhr bei Dysphagie oft zu niedrig.",
    },
  },
};

// ============================================================
// PHASE 3 — PLANEN (2 Bausteine)
// ============================================================

/**
 * 3A — SMART-Ziele + Pflegeziel + Prioritaet
 * Position: VOR ce02-petrov-plan-03-pflegeziele-matching
 * Begriffe: SMART, Pflegeziel, Prioritaet, Pflegemassnahmen, ABCDE
 */
export const CE02_PETROV_INLINE_03A_SMART: ContentStep = {
  stepId: "ce02-petrov-plan-02b-smart-ziele",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "DNQP Sturzprophylaxe 2022",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-plan-smart",
  tag: "pflege",
  themaPrimaer: "pflegeplanung",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du kannst jetzt SMART-Ziele formulieren. Gleich ordnest du Pflegeziele den richtigen Massnahmen zu — bei einem Patienten mit 5 gleichzeitigen Risiken.",
  contentC1: {
    title: "SMART-Pflegeziele formulieren — bei 5 Risiken gleichzeitig",
    body: "",
    glossarBegriffe: ["SMART", "Pflegeziel", "Prioritaet", "Pflegemassnahmen", "ABCDE"],
  },
  contentB1: {
    title: "Gute Pflegeziele schreiben",
    body: "",
    glossarBegriffe: ["SMART", "Pflegeziel"],
  },
  inlineWissen: {
    bausteinRef: "pflegeplanung-smart-ziele",
    storyAufhaenger:
      "Herr Petrov hat 5 gleichzeitige Risiken: Aspiration, Pneumonie, Dekubitus, Kontraktur, Sturz. Du kannst nicht alles gleichzeitig machen. Aber du musst fuer jedes Risiko ein Ziel formulieren — und das so, dass es messbar und realistisch ist.",
    storyAufhaengerB1:
      "Herr Petrov hat viele Risiken: Verschlucken, Lungenentzuendung, Druckstellen, steife Gelenke, Sturz. Fuer jedes brauchst du ein Ziel. Wie schreibst du gute Ziele?",
    kerntext:
      "**SMART-Pflegeziele:**\n\n• **S**pezifisch: Was genau soll erreicht werden? \"Herr Petrov verschluckt sich nicht\" statt \"Patient ist sicher.\"\n• **M**essbar: Woran erkennst du den Erfolg? \"Keine Aspiration bei 3 Mahlzeiten\" statt \"Schlucken verbessert.\"\n• **A**ttraktiv/Akzeptiert: Der Patient traegt es mit. Bei Aphasie: nonverbale Zustimmung einholen (Nicken).\n• **R**ealistisch: Was ist in 24-48h moeglich? \"Herr Petrov sitzt 10 Min an der Bettkante\" — nicht \"geht auf den Flur.\"\n• **T**erminiert: Bis wann? \"Innerhalb der naechsten 3 Tage\" — nicht \"irgendwann.\"\n\n**Priorisierung nach ABCDE-Logik:**\n• A (Atemweg) → Aspirationsgefahr = hoechste Prioritaet\n• B (Breathing) → Pneumonieprophylaxe\n• C (Circulation) → Thromboseprophylaxe\n• Dann: Dekubitus, Kontraktur, Mobilisation\n\nQuelle: (Fiechter/Meier 1981; DNQP 2022)",
    kerntextB1:
      "**Was sind SMART-Ziele?**\n\n• **S** = Genau sagen was du willst. Nicht \"Patient ist sicher\" sondern \"Herr Petrov verschluckt sich nicht.\"\n• **M** = Messbar. Woran erkennst du den Erfolg?\n• **A** = Der Patient stimmt zu (Nicken reicht).\n• **R** = Was ist wirklich moeglich? 10 Minuten Bettkante — ja. Auf den Flur gehen — nein.\n• **T** = Bis wann? Innerhalb von 3 Tagen.\n\n**Was zuerst?** Verschlucken und Atemnot = am gefaehrlichsten = zuerst. Dann Druckstellen, dann Gelenke.",
    faustregel:
      "**SMART = messbar + realistisch + terminiert.** Priorisierung: Aspirationsgefahr vor Dekubitus vor Kontraktur.",
    faustregelB1:
      "Gute Ziele sind genau, messbar und haben ein Datum. Verschluckungs-Gefahr ist am wichtigsten.",
    karteikarte: {
      vorderseite:
        "Herr Petrov hat 5 Risiken gleichzeitig. Formuliere ein SMART-Pflegeziel fuer die Aspirationsgefahr und erklaere die Priorisierung.",
      rueckseite:
        "Beispiel: \"Herr Petrov aspiriert nicht bei den naechsten 3 Mahlzeiten (Tag 5-6) bei Gabe von breiiger Kost und angedickten Getraenken laut GUSS-Protokoll.\" Priorisierung ABCDE: A=Aspiration (hoechste), B=Pneumonie, C=Thrombose, dann Dekubitus, Kontraktur. SMART: Spezifisch, Messbar, Akzeptiert, Realistisch, Terminiert. Faustregel: Aspirationsgefahr vor Dekubitus vor Kontraktur.",
    },
  },
};

/**
 * 3B — Dekubitus + Koerperpflege (Planen)
 * Position: VOR ce02-petrov-plan-04-priorisierung
 * Begriffe: Dekubitus (Wiederbegegnung), Koerperpflege
 */
export const CE02_PETROV_INLINE_03B_KOERPERPFLEGE: ContentStep = {
  stepId: "ce02-petrov-plan-03c-koerperpflege-neuro",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.2",
  quellen: [
    "Bobath-Konzept (IBITA 2017)",
    "DGN S2e-Leitlinie Rehabilitative Therapie 2021",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-plan-koerperpflege",
  tag: "pflege",
  themaPrimaer: "ganzkörperpflege",
  themenSekundaer: ["dekubitus-prophylaxe", "kontraktur-prophylaxe"],
  transition:
    "Du verstehst jetzt, warum Koerperpflege bei Hemiparese therapeutisch ist. Gleich priorisierst du alle Pflegemassnahmen fuer Herr Petrov.",
  contentC1: {
    title: "Koerperpflege bei Hemiparese — Waschen als Therapie",
    body: "",
    glossarBegriffe: ["Koerperpflege", "Dekubitus"],
  },
  contentB1: {
    title: "Waschen bei Herr Petrov — mehr als nur sauber machen",
    body: "",
    glossarBegriffe: ["Koerperpflege"],
  },
  inlineWissen: {
    bausteinRef: "ganzkörperpflege-neuro",
    wiederbegegnung: {
      basisBausteinId: "dekubitus-prophylaxe-praedilektionsstellen",
      basisPatient: "Frau Yilmaz",
      vertiefung:
        "Dekubitus kennst du bereits von Phase 2 (Hautinspektion). Bei der Koerperpflege kommt ein neuer Aspekt dazu: Jede Lagerungsaenderung waehrend des Waschens ist gleichzeitig Druckentlastung und Hautinspektion — du verbindest 3 Massnahmen in einem Arbeitsschritt.",
      vertiefungB1:
        "Dekubitus hast du in Phase 2 gelernt. Beim Waschen checkst du gleichzeitig die Haut und entlastest den Druck — 3 Sachen auf einmal.",
    },
    storyAufhaenger:
      "Herr Petrov braucht Hilfe beim Waschen. Aber Koerperpflege bei Hemiparese ist nicht einfach nur \"Koerper reinigen\". Jeder Griff, jede Richtung, jede Entscheidung ist therapeutisch — oder kontraproduktiv.",
    storyAufhaengerB1:
      "Herr Petrov kann sich nicht selbst waschen. Aber das Waschen ist nicht nur Hygiene — es ist auch Therapie.",
    kerntext:
      "**Koerperpflege nach Bobath-Prinzip:**\n\n• **Gesunde Seite foerdert die betroffene:** Du waeSchst von der gesunden (linken) Seite her — und baust die betroffene (rechte) Seite aktiv ein. Herr Petrov kann mit links den rechten Arm halten.\n\n• **Hautinspektion integriert:** Bei jedem Drehen pruefst du: Roetung? Druckstelle? Feuchtstellen? Praedilektionsstellen systematisch abarbeiten.\n\n• **Reihenfolge berücksichtigen:** Von kranial nach kaudal, Intimbereich zuletzt (Hygienerichtung).\n\n• **Schulter schützen:** Beim Drehen auf die betroffene Seite: Arm zuerst auf ein Kissen lagern, dann drehen. Nie am hemiparetischen Arm ziehen.\n\n• **Foerderung der Wahrnehmung:** Waschbewegungen auf der betroffenen Seite bewusst langsam — der Patient soll die Koerperseite wieder \"spueren\" (sensorische Stimulation).\n\nQuelle: (IBITA/Bobath 2017; DGN S2e 2021)",
    kerntextB1:
      "**Waschen bei Hemiparese — worauf achtest du?**\n\n• **Gesunde Seite zuerst**, dann betroffene Seite. Herr Petrov kann mit der linken Hand helfen.\n• **Haut pruefen** beim Drehen: Rote Stellen? Druckstellen?\n• **Schulter schuetzen:** Nie am rechten Arm ziehen! Erst Arm auf Kissen legen, dann drehen.\n• **Langsam waschen** auf der rechten Seite — damit er die Koerperseite wieder spuert.",
    faustregel:
      "**Koerperpflege bei Hemiparese = Therapie, Inspektion und Hygiene in einem.** Schulter schuetzen, betroffene Seite einbeziehen.",
    faustregelB1:
      "Waschen bei Hemiparese ist Therapie + Hautcheck + Hygiene gleichzeitig. Den rechten Arm nie ziehen!",
    karteikarte: {
      vorderseite:
        "Wie planst du die Koerperpflege bei Herr Petrov (Hemiparese rechts) — und warum ist sie therapeutisch?",
      rueckseite:
        "Bobath-Prinzip: Gesunde Seite einbeziehen, betroffene Seite foerdern. Reihenfolge: kranial→kaudal, Intim zuletzt. Schulter schuetzen (nie am hemiparetischen Arm ziehen). Hautinspektion integrieren (Praedilektionsstellen). Sensorische Stimulation: langsames Waschen rechts. Koerperpflege = 3-in-1 (Hygiene + Dekubitus-Check + Wahrnehmungsfoerderung). Faustregel: Koerperpflege bei Hemiparese = Therapie, Inspektion, Hygiene in einem.",
    },
  },
};

// ============================================================
// PHASE 4 — DURCHFUEHREN (4 Bausteine)
// ============================================================

/**
 * 4A — Fruehmobilisation + Mobilisation + RR-Kontrolle
 * Position: VOR ce02-petrov-dur-08b-mobilisation-bettkante
 * Begriffe: Fruehmobilisation, Mobilisation, RR-Kontrolle
 */
export const CE02_PETROV_INLINE_04A_FRUEHMOBILISATION: ContentStep = {
  stepId: "ce02-petrov-dur-08c-fruehmobilisation",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.2",
  quellen: [
    "DGN S2e-Leitlinie Rehabilitative Therapie 2021",
    "AVERT Trial (Bernhardt et al. 2015, Lancet)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-dur-mobilisation",
  tag: "pflege",
  themaPrimaer: "mobilisation",
  themenSekundaer: ["kontraktur-prophylaxe"],
  transition:
    "Du weisst jetzt, was Fruehmobilisation bedeutet und worauf du achten musst. Gleich setzt du Herr Petrov an die Bettkante.",
  contentC1: {
    title: "Fruehmobilisation nach Schlaganfall — Timing, Technik, Grenzen",
    body: "",
    glossarBegriffe: ["Fruehmobilisation", "Mobilisation", "RR-Kontrolle"],
  },
  contentB1: {
    title: "Wann darf Herr Petrov aufstehen?",
    body: "",
    glossarBegriffe: ["Mobilisation", "RR-Kontrolle"],
  },
  inlineWissen: {
    bausteinRef: "mobilisation-fruehmobilisation",
    storyAufhaenger:
      "Tag 5 nach dem Schlaganfall. Die Stroke Unit hat Herr Petrov gestern verlegt mit dem Vermerk: \"Fruehmobilisation beginnen, Belastung steigern.\" Was genau heisst das? Wie frueh ist zu frueh, wie viel ist zu viel?",
    storyAufhaengerB1:
      "Herr Petrov ist seit 5 Tagen im Krankenhaus. Die Aerzte sagen: Er soll sich jetzt bewegen. Aber wie viel darf er?",
    kerntext:
      "**Fruehmobilisation nach Schlaganfall:**\n\n• **Definition:** Erste aktive Lagewechsel und Sitzversuche innerhalb der ersten Tage nach dem Schlaganfall — frueher galt 24h, nach AVERT-Studie (2015): **nicht zu frueh und nicht zu intensiv**. Standard: ab 24-48h, schrittweise.\n\n• **Stufenschema:** 1) Kopfteil erhoehen → 2) Bettkante sitzen → 3) Stehen am Bett → 4) Transfer in Stuhl → 5) Gehen mit Unterstuetzung. Herr Petrov: aktuell Stufe 2 (Bettkante).\n\n• **RR-Kontrolle:** Vor dem Aufsetzen RR messen (liegend). Nach 1-3 Min Sitzen: erneut. Abbruch bei: systolisch >180 oder <100 mmHg, Schwindel, Uebelkeit, Bewusstseinstruebung.\n\n• **Hemiparese beachten:** Patient sitzt auf der betroffenen Seite gewoehnt sich an das Gewicht. Fuss der betroffenen Seite steht fest auf dem Boden. Oberer Arm auf Kissen oder Tisch gestuetzt (Subluxationsschutz).\n\n• **Zeitlimit:** Bei Erstmobilisation: 5-10 Min Bettkante. Bei Herr Petrov (Tag 5): 8-12 Min realistisch.\n\nQuelle: (DGN S2e 2021; AVERT/Bernhardt 2015)",
    kerntextB1:
      "**Wann und wie mobilisieren?**\n\n• **Ab Tag 1-2** nach Schlaganfall — aber langsam und vorsichtig.\n• **Schritt fuer Schritt:** Erst Kopf hoch → dann Bettkante sitzen → dann Stuhl → dann Gehen. Herr Petrov: Bettkante ist das Ziel fuer heute.\n• **Blutdruck pruefen:** Vor dem Aufsetzen und danach. Wenn Schwindel oder Uebelkeit → Abbruch.\n• **Rechten Arm schuetzen:** Auf Kissen stuetzen. Nicht haengen lassen.\n• **Dauer:** 5-10 Minuten. Wenn er es schafft: toll. Wenn nicht: trotzdem ein Erfolg.",
    faustregel:
      "**Fruehmobilisation = ab 24-48h, stufenweise, RR-kontrolliert.** Bettkante vor Stehen, Stehen vor Gehen.",
    faustregelB1:
      "Fruehmobilisation heisst: langsam anfangen, Blutdruck kontrollieren, Schritt fuer Schritt.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP Erstmobilisation Hueft-TEP",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist es die OP-Seite, die die Mobilisation begrenzt. Bei Petrov die Hemiparese. Beide brauchen stufenweise Steigerung.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Post-OP Mobilisation mit Stoma",
        kurzbeschreibung:
          "Bei Herrn Nguyen kommt die Sorge um den Stomabeutel dazu. Bei Petrov die Angst vor dem Fallen auf die gelahmte Seite.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrov (Tag 5 post-Apoplex) soll an die Bettkante. Wie mobilisierst du — und wann brichst du ab?",
      rueckseite:
        "Fruehmobilisation ab 24-48h, stufenweise (AVERT 2015). Stufenschema: Kopfteil→Bettkante→Stehen→Stuhl→Gehen. RR vorher + nachher. Abbruch bei: RR >180/<100, Schwindel, Uebelkeit. Hemiparetischer Arm stuetzen (Subluxationsschutz). Dauer: 8-12 Min Tag 5. Faustregel: Bettkante vor Stehen, Stehen vor Gehen.",
    },
  },
};

/**
 * 4B — Stille Aspiration + Oberkörperhochlagerung + Husten
 * Position: VOR ce02-petrov-dur-04b-mundpflege-aspiration
 * Begriffe: stille Aspiration, Oberkörperhochlagerung, Husten
 */
export const CE02_PETROV_INLINE_04B_ASPIRATION: ContentStep = {
  stepId: "ce02-petrov-dur-04c-aspiration-silent",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S1-Leitlinie Neurogene Dysphagie 2020",
    "Trapl et al. 2007 — GUSS",
    "Daniels et al. 2019 — Silent Aspiration",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-dur-aspiration",
  tag: "pflege",
  themaPrimaer: "essen-anreichen",
  themenSekundaer: ["mundpflege", "pneumonie-prophylaxe"],
  transition:
    "Du weisst jetzt, warum stille Aspiration so gefaehrlich ist. Gleich fuehrst du die Mundpflege durch — mit Aspirationsschutz.",
  contentC1: {
    title: "Stille Aspiration — wenn Verschlucken unsichtbar bleibt",
    body: "",
    glossarBegriffe: ["stille Aspiration", "Oberkörperhochlagerung", "Husten"],
  },
  contentB1: {
    title: "Was ist stille Aspiration?",
    body: "",
    glossarBegriffe: ["stille Aspiration", "Oberkörperhochlagerung"],
  },
  inlineWissen: {
    bausteinRef: "essen-anreichen-stille-aspiration",
    storyAufhaenger:
      "Herr Petrov hustet manchmal beim Trinken. Aber das wirklich Gefaehrliche ist nicht das, was du hoerst — es ist das, was du NICHT hoerst. Bei etwa 40 % der Schlaganfall-Patienten mit Dysphagie passiert Aspiration lautlos: Kein Husten, kein Wuergen. Das Material gelangt in die Lunge, ohne dass der Koerper reagiert.",
    storyAufhaengerB1:
      "Herr Petrov hustet manchmal beim Trinken. Das ist ein Warnsignal. Aber es gibt eine noch groessere Gefahr: Manchmal kommt Fluessigkeit in die Lunge OHNE dass er hustet. Das nennt man stille Aspiration.",
    kerntext:
      "**Stille Aspiration — die unsichtbare Gefahr:**\n\n• **Stille Aspiration** = Material gelangt unter die Stimmritze, ohne Hustenreflex auszuloesen. Bei Schlaganfall-Patienten in ~40 % der Dysphagie-Faelle (Daniels 2019).\n\n• **Warum kein Husten?** Der Hustenreflex wird teilweise vom selben Hirnbereich gesteuert wie das Schlucken. Wenn das Schluckzentrum geschaedigt ist, kann auch der Schutzreflex ausfallen.\n\n• **Erkennungszeichen:** Feuchte, gurgelnde Stimme nach dem Schlucken (\"wet voice\"). Leichtes Fieber ohne klare Ursache. Sputumveraenderung. Sauerstoffsaettigung sinkt nach Mahlzeiten.\n\n• **Oberkörperhochlagerung** (mind. 30°, besser 45-90°): Schwerkraft haelt Material aus den Atemwegen. Gilt fuer Essen, Trinken, Mundpflege und 30 Min NACH der Mahlzeit.\n\n• **Husten foerdern:** Wenn Herr Petrov hustet = Schutzreflex funktioniert = gut. Nicht unterdruecken, sondern abwarten und unterstuetzen.\n\nQuelle: (AWMF S1 2020; Daniels 2019; Trapl 2007)",
    kerntextB1:
      "**Was ist stille Aspiration?**\n\n• Fluessigkeit oder Essen kommt in die Lunge — aber der Patient hustet nicht. Das passiert bei etwa 40 % der Schlaganfall-Patienten mit Schluckstoerung.\n\n• **Wie erkennst du es?** Gurgelnde Stimme nach dem Schlucken. Leichtes Fieber. Sauerstoff sinkt.\n\n• **Was hilft?** Oberkörper hoch (mindestens 30 Grad, besser 45-90 Grad). Beim Essen, Trinken, Mundpflege — und 30 Minuten danach.\n\n• **Wenn er hustet:** Das ist gut! Der Koerper schuetzt sich. Nicht unterdruecken.",
    faustregel:
      "**Stille Aspiration = kein Husten heisst nicht kein Verschlucken.** Oberkörper hoch halten — auch 30 Min NACH dem Essen.",
    faustregelB1:
      "Kein Husten heisst nicht: kein Verschlucken. Oberkörper immer hochlagern — auch 30 Minuten nach dem Essen.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz: Vergisst zu kauen, schiebt Essen im Mund herum",
        kurzbeschreibung:
          "Bei Herr Bauer ist die Ursache kognitiv (vergisst zu schlucken), bei Petrov neurologisch (Schluckreflex gestoert). Beide haben Aspirationsrisiko.",
      },
      {
        patientName: "Emilia",
        situationsId: "ls-emilia-saeugling",
        hauptfaktor: "Trinkschwaeche bei Bronchiolitis",
        kurzbeschreibung:
          "Bei Emilia ist die Koordination Saugen-Schlucken-Atmen durch Erschoepfung gestoert. Anderer Mechanismus, gleiches Prinzip: Aspirationsgefahr beobachten.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Herr Petrov hat GUSS Grad 2. Was ist stille Aspiration — und wie schuetzt du ihn?",
      rueckseite:
        "Stille Aspiration = Material gelangt in Lunge ohne Hustenreflex (~40 % bei Schlaganfall-Dysphagie, Daniels 2019). Erkennungszeichen: \"wet voice\", leichtes Fieber, SpO2-Abfall nach Mahlzeit, Sputumveraenderung. Schutz: Oberkörperhochlagerung ≥30° (besser 45-90°), auch 30 Min nach Mahlzeit. Husten = gut (Schutzreflex intakt). GUSS Grad 2: nur Brei, Fluessigkeiten andicken. Faustregel: Kein Husten ≠ kein Verschlucken.",
    },
  },
};

/**
 * 4C — Sauerstoffsaettigung + Pulsoximeter + Lippenbremse
 * Position: VOR ce02-petrov-dur-04-atemuebungen
 * Begriffe: Sauerstoffsaettigung, Pulsoximeter, Obstruktion, Lippenbremse
 */
export const CE02_PETROV_INLINE_04C_SPO2: ContentStep = {
  stepId: "ce02-petrov-dur-03b-spo2-grundlagen",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie Sauerstofftherapie 2020",
    "GOLD-Report COPD 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-dur-spo2",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  themenSekundaer: ["mobilisation"],
  transition:
    "Du weisst jetzt, was die Sauerstoffsaettigung bedeutet und wann du eingreifst. Gleich machst du Atemuebungen mit Herr Petrov.",
  contentC1: {
    title: "Sauerstoffsaettigung, Pulsoximetrie und Atemwegsobstruktion",
    body: "",
    glossarBegriffe: ["Sauerstoffsaettigung", "Pulsoximeter", "Obstruktion", "Lippenbremse"],
  },
  contentB1: {
    title: "Was zeigt das Pulsoximeter?",
    body: "",
    glossarBegriffe: ["Sauerstoffsaettigung", "Pulsoximeter"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-spo2",
    storyAufhaenger:
      "Am Finger von Herr Petrov leuchtet ein kleines Geraet: 94 %. Gestern Abend waren es 97 %. Ist der Abfall relevant? Und was tust du, wenn es weiter sinkt?",
    storyAufhaengerB1:
      "Am Finger von Herr Petrov steckt ein kleines Geraet. Es zeigt: 94 %. Gestern war es 97 %. Ist das schlimm?",
    kerntext:
      "**SpO₂ — Sauerstoffsaettigung verstehen:**\n\n• **Pulsoximeter** misst den Anteil sauerstoffbeladener Haemoglobin-Molekuele im Blut. Messung am Finger (oder Ohrlaeppchen bei schlechter Peripherie).\n\n• **Normwerte**: 96-99 %. Bei COPD-Patienten kann 88-92 % akzeptabel sein (Vorsicht: Zu viel O₂ kann Atemdrive hemmen). Bei Herr Petrov (kein COPD): <94 % = Aufmerksamkeit, <90 % = sofortiges Handeln.\n\n• **Obstruktion** = Atemwegsverlegung. Kann bei Schlaganfall durch Sekretansammlung (reduzierter Hustenstoss) oder Aspiration entstehen. Zeichen: fallende SpO₂, Stridor, Einziehungen, Unruhe.\n\n• **Lippenbremse bei Petrov**: Obwohl er kein COPD hat, kann die Lippenbremse die Ausatmung verlaengern und Sekretmobilisation unterstuetzen. Technik: Durch die Nase einatmen, gegen leicht geschlossene Lippen ausatmen.\n\n• **Pflege-Konsequenz**: SpO₂ nach jeder Mobilisation und nach Mahlzeiten kontrollieren (stille Aspiration!).\n\nQuelle: (AWMF S3 2020; GOLD 2023)",
    kerntextB1:
      "**Was zeigt das Pulsoximeter?**\n\n• Es misst, wie viel Sauerstoff im Blut ist. Normalwert: 96-99 %.\n• Bei Herr Petrov: Unter 94 % aufpassen. Unter 90 % sofort handeln (Arzt rufen).\n• **Warum kann es sinken?** Schleim in den Atemwegen, Verschlucken, flache Atmung.\n• **Lippenbremse** hilft: Durch die Nase einatmen, gegen geschlossene Lippen ausatmen. Das haelt die Atemwege offen.\n• **Immer kontrollieren** nach dem Essen und nach dem Aufsetzen.",
    faustregel:
      "**SpO₂ <94 % = aufmerksam werden. <90 % = sofort handeln.** Nach Mahlzeiten und Mobilisation kontrollieren.",
    faustregelB1:
      "SpO₂ unter 94 % = genau beobachten. Unter 90 % = Arzt rufen. Nach dem Essen und Aufsetzen immer messen.",
    karteikarte: {
      vorderseite:
        "Herr Petrovs Pulsoximeter zeigt 94 % (gestern 97 %). Wie bewertest du das — und was tust du?",
      rueckseite:
        "SpO₂ 94 % bei Patient ohne Lungenerkrankung = Aufmerksamkeit. Moegliche Ursachen: Sekretansammlung, beginnende Aspiration, flache Atmung. Massnahmen: Oberkörper erhoehen, Atemübung (Lippenbremse), Sputum-Check, erneute Messung nach 15 Min. Bei <90 %: Arzt sofort. Pulsoximeter nach jeder Mahlzeit + Mobilisation kontrollieren. Faustregel: <94 % aufmerksam, <90 % sofort handeln.",
    },
  },
};

/**
 * 4D — Seitenlage + Schulterblatt/Schulterguertel/Beckenkamm
 * Position: VOR ce02-petrov-dur-03-drehen-seitenlage
 * Begriffe: Seitenlage, Schulterblatt, Schulterguertel, Beckenkamm
 */
export const CE02_PETROV_INLINE_04D_SEITENLAGE: ContentStep = {
  stepId: "ce02-petrov-dur-02b-seitenlage-anatomie",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.2",
  quellen: [
    "Bobath-Konzept (IBITA 2017)",
    "Kinaesthetik (Hatch/Maietta 2011)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-dur-seitenlage",
  tag: "anatomie",
  themaPrimaer: "positionierung",
  themenSekundaer: ["mobilisation", "kinaesthetik"],
  transition:
    "Du kennst jetzt die anatomischen Landmarken. Gleich drehst du Herr Petrov auf die Seite — nutze Becken und Schulterblatt als Drehpunkte.",
  contentC1: {
    title: "Drehen in Seitenlage — Anatomische Griffe und Sicherheit",
    body: "",
    glossarBegriffe: ["Seitenlage", "Schulterblatt", "Schulterguertel", "Beckenkamm"],
  },
  contentB1: {
    title: "Wie drehst du Herr Petrov sicher auf die Seite?",
    body: "",
    glossarBegriffe: ["Seitenlage", "Schulterblatt", "Beckenkamm"],
  },
  inlineWissen: {
    bausteinRef: "positionierung-seitenlage-anatomie",
    storyAufhaenger:
      "Du musst Herr Petrov auf die Seite drehen — fuer Koerperpflege, Hautinspektion, Dekubitus-Entlastung. Aber wo fasst du an? Unter den Achseln greifen ist kineasthetisch falsch und gefaehrdet die Schulter. Der Griff am Becken und Schulterblatt ist die sichere Alternative.",
    storyAufhaengerB1:
      "Du musst Herr Petrov drehen. Aber: Nie unter den Achseln greifen! Das ist falsch und gefaehrlich. Es gibt bessere Stellen.",
    kerntext:
      "**Anatomische Landmarken fuer sicheres Drehen:**\n\n• **Beckenkamm** (Crista iliaca): Der obere Rand des Hueftknochens. Du legst deine Hand dort an und nutzt ihn als Hebel fuer die Drehbewegung. Der Patient \"rollt\" ueber das Becken — nicht ueber die Schulter.\n\n• **Schulterblatt** (Scapula): Deine zweite Hand liegt flach am Schulterblatt der abgewandten Seite und begleitet die Drehung. Nicht schieben — fuehren.\n\n• **Schulterguertel**: Schulterblatt + Schlüsselbein + Schultergelenk bilden eine Einheit. Bei Hemiparese: Den hemiparetischen Arm VOR dem Drehen sichern (auf den Bauch oder auf ein Kissen legen). Sonst: Subluxationsgefahr.\n\n• **Kinaesthetik-Prinzip:** Du initiierst die Bewegung am Becken — der Oberkörper folgt. Der Patient bewegt sich selbst, soweit es geht. Du begleitest und sicherst.\n\n• **Nie:** Unter den Achseln greifen, am Arm ziehen, rueckenbelastend heben.\n\nQuelle: (IBITA/Bobath 2017; Kinaesthetik Hatch/Maietta 2011)",
    kerntextB1:
      "**Wo fasst du an beim Drehen?**\n\n• **Beckenkamm** = der obere Rand des Hueftknochens. Hand dort hinlegen und den Patienten sanft rollen.\n• **Schulterblatt** = flach hinter der Schulter. Hand dort hinlegen und die Drehung begleiten.\n• **Rechten Arm vorher sichern!** Auf den Bauch oder ein Kissen legen. Sonst kann die Schulter beschaedigt werden.\n• **Nie** unter den Achseln greifen. Nie am Arm ziehen.",
    faustregel:
      "**Becken dreht, Schulterblatt begleitet.** Hemiparetischen Arm VOR dem Drehen sichern.",
    faustregelB1:
      "Drehen: Hand an Beckenkamm + Hand am Schulterblatt. Rechten Arm vorher sichern!",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Transfer Boden → Bett (Kinaesthetik)",
        kurzbeschreibung:
          "Bei Frau M. ging es um den Transfer vom Boden — dort war Beckenkamm-Griff ebenfalls Grundlage fuer die Bewegung.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP: OP-Seite schonen",
        kurzbeschreibung:
          "Bei Frau Yilmaz: Nicht auf die operierte Seite drehen. Bei Petrov: Hemiparetischen Arm vorher sichern. Verschiedene Vorsichtsmassnahmen, gleiche Technik.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Wie drehst du Herr Petrov (Hemiparese rechts) sicher in die Seitenlage — und welche anatomischen Landmarken nutzt du?",
      rueckseite:
        "Landmarken: Beckenkamm (Hebel fuer Drehung) + Schulterblatt (Begleitung). Kinaesthetik: Becken initiiert, Oberkörper folgt. Hemiparetischen Arm VOR Drehen sichern (auf Bauch/Kissen → Subluxationsschutz). Nie: Unter Achseln greifen, am Arm ziehen. Faustregel: Becken dreht, Schulterblatt begleitet, betroffener Arm gesichert.",
    },
  },
};

// ============================================================
// PHASE 5 — EVALUIEREN (2 Bausteine)
// ============================================================

/**
 * 5A — Evaluation + MRC-Skala + Pflegeziel
 * Position: VOR ce02-petrov-eval-01-zielcheck
 * Begriffe: Evaluation, MRC-Skala, Pflegeziel, SMART, proaktiv
 */
export const CE02_PETROV_INLINE_05A_EVALUATION: ContentStep = {
  stepId: "ce02-petrov-eval-00b-evaluation-neuro",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "MRC Scale (Medical Research Council 1943/2010)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-eval-evaluation",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["pflegeplanung", "mobilisation"],
  transition:
    "Du weisst jetzt, wie du Herr Petrovs Fortschritte messen kannst. Gleich vergleichst du Soll und Ist.",
  contentC1: {
    title: "Evaluation bei Schlaganfall — Fortschritt messen mit Skalen",
    body: "",
    glossarBegriffe: ["Evaluation", "MRC-Skala", "Pflegeziel", "SMART", "proaktiv"],
  },
  contentB1: {
    title: "Hat Herr Petrov Fortschritte gemacht?",
    body: "",
    glossarBegriffe: ["Evaluation", "MRC-Skala"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-evaluation",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-evaluation-regelkreis",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du Evaluation als Soll-Ist-Vergleich gelernt. Bei Herr Petrov kommt die MRC-Skala als objektives Messinstrument dazu — damit ist Evaluation nicht nur \"besser/schlechter\", sondern in Zahlen fassbar: MRC 1 gestern → MRC 2 heute = messbarer Fortschritt.",
      vertiefungB1:
        "Bei Frau M. hast du gelernt: Evaluation heisst Ziel mit Ergebnis vergleichen. Bei Herr Petrov nutzt du die MRC-Skala (0-5) — damit kannst du Kraft in Zahlen messen.",
    },
    storyAufhaenger:
      "Heute Morgen hat Herr Petrov 8 Minuten an der Bettkante gesessen. Gestern waren es 5 Minuten. Sein Fuss hat einmal die Dorsalflexion geschafft — gestern nicht. Sind das Fortschritte oder Zufall? Du brauchst ein System, das dir objektiv sagt: besser, gleich oder schlechter.",
    storyAufhaengerB1:
      "Gestern sass Herr Petrov 5 Minuten an der Bettkante. Heute 8 Minuten. Ist das ein Fortschritt? Wie misst du das?",
    kerntext:
      "**Evaluation bei Schlaganfall:**\n\n• **Evaluation** = Soll-Ist-Vergleich im Pflegeprozess (Fiechter/Meier 1981). Das Ziel (SMART formuliert) wird mit dem tatsaechlichen Ergebnis verglichen.\n\n• **MRC-Skala** (0-5) fuer Kraftmessung:\n  0 = keine Kontraktion\n  1 = Muskelzucken, keine Bewegung\n  2 = Bewegung ohne Schwerkraft (auf der Unterlage gleiten)\n  3 = Bewegung gegen Schwerkraft (Bein heben)\n  4 = Bewegung gegen Widerstand\n  5 = normale Kraft\n\n• **Proaktiv evaluieren** = nicht warten bis jemand fragt. Du dokumentierst jeden messbaren Fortschritt: Bettkanten-Zeit, Dorsalflexion (ja/nein/teilweise), Armfunktion, Schluckversuch-Ergebnis.\n\n• **Konsequenz:** Ziel erreicht → beibehalten oder steigern. Teilweise erreicht → Massnahme anpassen. Nicht erreicht → Ursache analysieren, neues Vorgehen.\n\nQuelle: (Fiechter/Meier 1981; MRC 1943/2010)",
    kerntextB1:
      "**Wie misst du Fortschritte?**\n\n• **Evaluation** = Ziel mit Ergebnis vergleichen. War das Ziel 10 Minuten Bettkante? Hat er es geschafft?\n• **MRC-Skala**: Kraft messen von 0 (nichts) bis 5 (normal). Gestern Bein MRC 2, heute MRC 3 = Fortschritt!\n• **Proaktiv** = von dir selbst beobachten und aufschreiben, nicht warten bis jemand fragt.\n• **Was dann?** Ziel geschafft → naechsten Schritt planen. Nicht geschafft → anders machen.",
    faustregel:
      "**Evaluation mit Skalen = objektiv statt \"gefuehlt besser\".** MRC-Skala fuer Kraft, Minuten fuer Ausdauer, GUSS fuer Schlucken.",
    faustregelB1:
      "Fortschritt mit Zahlen messen: MRC-Skala fuer Kraft, Minuten fuer Bettkante, GUSS fuer Schlucken.",
    karteikarte: {
      vorderseite:
        "Herr Petrov sass gestern 5 Min, heute 8 Min an der Bettkante. MRC Bein gestern 2, heute 3. Wie evaluierst du?",
      rueckseite:
        "Evaluation = Soll-Ist-Vergleich (Fiechter/Meier 1981). Bettkante: 8 > 5 Min = Fortschritt. MRC 3 > 2 = Bewegung gegen Schwerkraft neu moeglich = messbarer Fortschritt. Konsequenz: Ziel anpassen (morgen 10 Min), Stufe erhoehen (Stehen am Bett vorbereiten). Proaktiv: Dokumentiere Werte bei jeder Evaluation, nicht nur bei Visite. Faustregel: Evaluation mit Skalen statt Bauchgefuehl.",
    },
  },
};

/**
 * 5B — Autonomie + Aufklaerungspflicht + Reha + Schlucktherapeutin
 * Position: VOR ce02-petrov-eval-04-katheter-entscheidung
 * Begriffe: Autonomie, Aufklaerungspflicht, Rehabilitation, Reha, Prognose, Schlucktherapeutin
 */
export const CE02_PETROV_INLINE_05B_AUTONOMIE_REHA: ContentStep = {
  stepId: "ce02-petrov-eval-03c-autonomie-reha",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "II.2",
  quellen: [
    "BGB § 630d (Einwilligung)",
    "DGN S2e-Leitlinie Rehabilitative Therapie 2021",
    "Patientenrechtegesetz 2013",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-eval-autonomie",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["kontraktur-prophylaxe", "mobilisation"],
  transition:
    "Du verstehst jetzt, warum Herr Petrovs Autonomie trotz Aphasie geschuetzt werden muss. Gleich geht es um eine wichtige Entscheidung: Soll der Katheter bleiben oder entfernt werden?",
  contentC1: {
    title: "Patientenautonomie bei Aphasie — Aufklaerung, Reha und Prognose",
    body: "",
    glossarBegriffe: ["Autonomie", "Aufklaerungspflicht", "Rehabilitation", "Prognose", "Schlucktherapeutin"],
  },
  contentB1: {
    title: "Herr Petrov darf mitentscheiden",
    body: "",
    glossarBegriffe: ["Autonomie", "Rehabilitation"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-autonomie-aphasie",
    storyAufhaenger:
      "Herr Petrov nickt, wenn du etwas erklaerst. Aber versteht er wirklich, was du meinst? Die Schlucktherapeutin schlaegt vor, den Kostaufbau zu verlangsamen. Der Arzt will den Katheter noch 2 Tage belassen. Natalya fragt: \"Wird er wieder normal?\" Drei Fragen, eine Kernfrage: Wer entscheidet — und auf welcher Grundlage?",
    storyAufhaengerB1:
      "Herr Petrov nickt auf deine Fragen. Aber kann er wirklich zustimmen? Die Schlucktherapeutin hat einen Plan. Der Arzt will den Katheter behalten. Und seine Frau fragt: Wird er wieder gesund?",
    kerntext:
      "**Autonomie bei Aphasie:**\n\n• **Aphasie ≠ fehlende Einwilligungsfaehigkeit.** Herr Petrov versteht alles (Broca-Aphasie). Er kann Entscheidungen treffen — die Aufklaerung muss nur an seine Kommunikationsfaehigkeiten angepasst werden (§ 630d BGB).\n\n• **Aufklaerungspflicht** gilt auch bei Aphasie: Einfache Saetze, geschlossene Fragen, Bildmaterial, genuegend Bedenkzeit. Zugestimmt wird durch Nicken, Zeigen oder Aufschreiben mit links.\n\n• **Schlucktherapeutin** = Logopaedin mit Spezialisierung auf Dysphagie. Fuehrt FEES/GUSS durch, erstellt Kostaufbau-Plan, trainiert Schlucktechniken. Pflege setzt den Plan um.\n\n• **Rehabilitation** beginnt ab Tag 1 (Fruehmobilisation, Logopaedie, Ergo, Physio). **Prognose:** 80 % der Schlaganfall-Ueberlebenden erreichen nach 6 Monaten Reha funktionelle Verbesserung. Keine Garantie — aber die ersten 3 Monate sind das \"goldene Zeitfenster\" fuer Neuroplastizitaet.\n\n• **Ehrliche Kommunikation:** Prognose offen und realistisch kommunizieren — weder zu optimistisch noch hoffnungslos.\n\nQuelle: (BGB § 630d; DGN S2e 2021; Patientenrechtegesetz 2013)",
    kerntextB1:
      "**Herr Petrov darf mitentscheiden:**\n\n• Aphasie heisst nicht: Er kann nicht entscheiden. Er versteht alles. Du musst nur **einfach erklaeren**: kurze Saetze, Bilder, Ja/Nein-Fragen.\n• **Schlucktherapeutin** (Logopaedin) trainiert das Schlucken und sagt, was er essen darf.\n• **Rehabilitation** beginnt sofort: Bewegen, Ueben, Schlucktraining. Die ersten 3 Monate sind am wichtigsten.\n• **Ehrlich sein:** Vieles kann besser werden. Aber es dauert. Niemand kann versprechen, dass alles wieder wie vorher wird.",
    faustregel:
      "**Aphasie ≠ keine Einwilligungsfaehigkeit.** Aufklaerung anpassen, nicht weglassen.",
    faustregelB1:
      "Herr Petrov versteht alles. Er darf mitentscheiden. Erklaere einfach und warte auf sein Nicken.",
    karteikarte: {
      vorderseite:
        "Herr Petrov hat Broca-Aphasie. Darf er selbst in Massnahmen einwilligen — und wie funktioniert Aufklaerung bei Aphasie?",
      rueckseite:
        "Ja. Broca-Aphasie = Sprachproduktion gestoert, Verstaendnis erhalten → einwilligungsfaehig (§ 630d BGB). Aufklaerung anpassen: kurze Saetze, Bilder, Ja/Nein-Fragen, Bedenkzeit. Zustimmung: Nicken, Zeigen, Schreiben mit links. Schlucktherapeutin erstellt Kostplan (FEES/GUSS). Reha ab Tag 1, \"goldenes Zeitfenster\" = 3 Monate. Prognose ehrlich kommunizieren. Faustregel: Aphasie ≠ fehlende Einwilligungsfaehigkeit.",
    },
  },
};

// ============================================================
// PHASE 6 — DOKUMENTIEREN (1 Baustein)
// ============================================================

/**
 * 6A — Pflegedokumentation + § 630f BGB + Pflegebericht + Uebergabe
 * Position: VOR ce02-petrov-dok-01-pflegebericht-frei
 * Begriffe: Pflegedokumentation, § 630f BGB, Pflegebericht, Uebergabe, Dokumentation, Bilanzierung, Ausscheidung
 */
export const CE02_PETROV_INLINE_06A_DOKUMENTATION: ContentStep = {
  stepId: "ce02-petrov-dok-00b-dokumentation-grundlagen",
  phase: 6,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "BGB § 630f (Dokumentationspflicht)",
    "DNQP Expertenstandard Sturzprophylaxe 2022",
    "Fiechter/Meier 1981",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-petrov-schlaganfall-dok-dokumentation",
  tag: "pflege",
  themaPrimaer: "pflegedokumentation",
  themenSekundaer: ["pflegeprozess", "harnausscheidung"],
  transition:
    "Du kennst jetzt die rechtlichen Grundlagen. Gleich schreibst du den Pflegebericht fuer Herr Petrovs heutigen Tag.",
  contentC1: {
    title: "Pflegedokumentation — Rechtliche Pflicht und praktische Struktur",
    body: "",
    glossarBegriffe: ["Pflegedokumentation", "§ 630f BGB", "Pflegebericht", "Uebergabe", "Dokumentation", "Bilanzierung", "Ausscheidung"],
  },
  contentB1: {
    title: "Warum und wie dokumentierst du?",
    body: "",
    glossarBegriffe: ["Pflegedokumentation", "Pflegebericht"],
  },
  inlineWissen: {
    bausteinRef: "pflegedokumentation-grundlagen",
    wiederbegegnung: {
      basisBausteinId: "pflegedokumentation-grundlagen",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du das Sturzprotokoll geschrieben — ein spezifisches Formular. Bei Herr Petrov ist die Dokumentation breiter: Pflegebericht (Freitext), Bilanzierung (Einfuhr/Ausfuhr), Ausscheidungsprotokoll (Katheter), Kostplan (GUSS-basiert), Mobilisationsprotokoll. Mehrere Dokumente, ein Patient, ein Tag.",
      vertiefungB1:
        "Bei Frau M. hast du ein Sturzprotokoll geschrieben. Bei Herr Petrov schreibst du mehrere Dokumente: Pflegebericht, Fluessigkeitsbilanz, Katheter-Protokoll und mehr.",
    },
    storyAufhaenger:
      "Der Tag mit Herr Petrov war intensiv: Koerperpflege, Atemuebungen, Essen anreichen, Mobilisation, Aspirationszwischenfall, Gespraech mit Natalya. All das muss dokumentiert werden — nicht weil es jemand verlangt, sondern weil es rechtlich Pflicht ist und die naechste Schicht davon abhaengt.",
    storyAufhaengerB1:
      "Du hast heute viel mit Herr Petrov gemacht. Jetzt musst du alles aufschreiben — fuer die naechste Schicht und fuer die Sicherheit.",
    kerntext:
      "**Pflegedokumentation — Grundlagen:**\n\n• **§ 630f BGB**: Jede behandlungsrelevante Massnahme muss zeitnah, vollstaendig und nachvollziehbar dokumentiert werden. Was nicht dokumentiert ist, gilt rechtlich als nicht durchgefuehrt.\n\n• **Pflegebericht** = Freitext-Verlauf des Tages. Keine Bewertungen, nur Beobachtungen und Massnahmen. Objektiv formulieren: \"Patient zeigte Hustenreflex beim Trinken\" statt \"Patient verschluckte sich mal wieder.\"\n\n• **Bilanzierung**: Einfuhr (Infusion + angedickte Getraenke + Sondenkost) und Ausfuhr (Katheter-Urin, Stuhl) tabellarisch dokumentieren.\n\n• **Uebergabe**: SBAR-Struktur fuer die muendliche Uebergabe an den Spaetdienst. Schriftlich: Pflegebericht + Bilanzierung + Besonderheiten.\n\n• **Ausscheidung**: Bei Katheter: Urinmenge, -farbe, -geruch. Stuhlgang: Bristol-Skala, Frequenz.\n\nQuelle: (§ 630f BGB; Fiechter/Meier 1981; DNQP 2022)",
    kerntextB1:
      "**Warum dokumentieren?**\n\n• **Gesetz** (§ 630f BGB): Was du nicht aufschreibst, gilt als nicht gemacht.\n• **Pflegebericht**: Schreibe sachlich was du gesehen und getan hast. Keine Meinungen.\n• **Bilanzierung**: Wie viel Fluessigkeit rein (Trinken, Infusion) und raus (Urin, Stuhl).\n• **Uebergabe**: Was muss die naechste Schicht wissen? SBAR-Struktur nutzen.\n• **Urin am Katheter**: Menge, Farbe und Geruch aufschreiben.",
    faustregel:
      "**Was nicht dokumentiert ist, ist nicht passiert (§ 630f BGB).** Sachlich, zeitnah, vollstaendig.",
    faustregelB1:
      "Was du nicht aufschreibst, gilt als nicht gemacht. Schreibe sachlich und sofort auf.",
    karteikarte: {
      vorderseite:
        "Herr Petrov hatte heute: Koerperpflege, Mobilisation, Aspirationszwischenfall, Gespraech mit Natalya. Was dokumentierst du wo?",
      rueckseite:
        "Pflegebericht: Freitext ueber Tagesverlauf (sachlich, objektiv). Bilanzierung: Einfuhr/Ausfuhr tabellarisch. Ausscheidungsprotokoll: Urin (Menge/Farbe/Geruch am Katheter), Stuhl (Bristol). Mobilisationsprotokoll: Bettkanten-Zeit, MRC-Werte. Aspirationszwischenfall: Detailliert im Bericht + Arzt-Info dokumentieren. Uebergabe (SBAR): Besonderheiten fuer Spaetdienst. Rechtlich: § 630f BGB — zeitnah, vollstaendig, nachvollziehbar.",
    },
  },
};

// ============================================================
// EXPORT — alle 15 Inline-Wissens-Bausteine
// ============================================================

export const CE02_PETROV_SCHLAGANFALL_INLINE_WISSEN: ContentStep[] = [
  // Phase 1 — Informieren
  CE02_PETROV_INLINE_01A_APHASIE,
  CE02_PETROV_INLINE_01B_MCA_GUSS,
  CE02_PETROV_INLINE_01C_PFLEGEPROZESS,
  // Phase 2 — Beobachten
  CE02_PETROV_INLINE_02A_MOTORIK,
  CE02_PETROV_INLINE_02B_DEKUBITUS,
  CE02_PETROV_INLINE_02C_BILANZIERUNG,
  // Phase 3 — Planen
  CE02_PETROV_INLINE_03A_SMART,
  CE02_PETROV_INLINE_03B_KOERPERPFLEGE,
  // Phase 4 — Durchfuehren
  CE02_PETROV_INLINE_04A_FRUEHMOBILISATION,
  CE02_PETROV_INLINE_04B_ASPIRATION,
  CE02_PETROV_INLINE_04C_SPO2,
  CE02_PETROV_INLINE_04D_SEITENLAGE,
  // Phase 5 — Evaluieren
  CE02_PETROV_INLINE_05A_EVALUATION,
  CE02_PETROV_INLINE_05B_AUTONOMIE_REHA,
  // Phase 6 — Dokumentieren
  CE02_PETROV_INLINE_06A_DOKUMENTATION,
];
