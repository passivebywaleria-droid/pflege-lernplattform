// CE-02 Situation Frau Yilmaz — Hüft-TEP — Inline-Wissens-Bausteine
// 10 Bausteine verteilt über 6 Phasen
// Themen: mobilisation (Lehr), thrombose-prophylaxe (Lehr), positionierung (Lehr),
//         kinaesthetik (Wiederbegegnung), schmerz (Wiederbegegnung)
// Pipeline v9 — 2026-04-26

import type { ContentStep } from "../../../_types";

// ============================================================================
// PHASE 1 — INFORMIEREN (3 Bausteine)
// ============================================================================

/**
 * Baustein 1.1b — Mobilisation: Was bedeutet Frühmobilisation nach Hüft-TEP?
 * Position: VOR Step 1.2 (Prioritäten-MC) — Schüler soll wissen, warum Mobilisation
 * am 3. post-OP-Tag so dringend ist, bevor er Prioritäten setzt.
 */
export const IW_YILMAZ_01_FRUEHMOBILISATION: ContentStep = {
  stepId: "ce02-yilmaz-info-01b-fruehmobilisation",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2020): Expertenstandard Erhaltung und Foerderung der Mobilitaet in der Pflege",
    "DGG (2022): S1-Leitlinie Fruehmobilisation",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-info-fruehmobilisation",
  tag: "pflege",
  themaPrimaer: "mobilisation",
  themenSekundaer: ["thrombose-prophylaxe"],
  transition: "Du weisst jetzt, warum Tag 3 entscheidend ist. Aber was ist beim Betreten des Zimmers deine erste Aufgabe?",
  contentC1: {
    title: "Warum muss Frau Yilmaz heute aufstehen?",
    body: "",
    glossarBegriffe: ["Fruehmobilisation", "Wadenmuskelpumpe", "Immobilitaetsfolgen"],
  },
  contentB1: {
    title: "Warum ist Aufstehen so wichtig?",
    body: "",
    glossarBegriffe: ["Fruehmobilisation", "Immobilitaet"],
  },
  inlineWissen: {
    bausteinRef: "mobilisation-begriff-folgen",
    storyAufhaenger:
      "Frau Wendt hat gerade gesagt: \"Heute muss der Aufstehversuch klappen — Tag 3 ist der optimale Zeitpunkt.\" Aber warum genau Tag 3? Und was passiert, wenn Frau Yilmaz noch laenger liegt?",
    storyAufhaengerB1:
      "Frau Wendt sagt: \"Heute muss sie aufstehen.\" Aber warum ist das so wichtig? Was passiert, wenn Frau Yilmaz noch laenger im Bett bleibt?",
    kerntext:
      "**Fruehmobilisation** ist die wirksamste Einzelmassnahme gegen die fuenf grossen Gefahren der Bettlaegerigkeit (DNQP 2020):\n\n• **Thrombose** — die Wadenmuskelpumpe steht still, Blut staut sich (Virchow-Trias: Stase)\n\n• **Dekubitus** — Druck auf Steissbein und Fersen steigt jede Stunde\n\n• **Pneumonie** — flache Atmung im Liegen, Sekretstau\n\n• **Kontraktur** — Muskeln und Sehnen verkuerzen sich ab 48-72 Stunden\n\n• **Muskelabbau** — aeltere Menschen verlieren bis zu 10 % Muskelmasse pro Woche Bettruhe\n\nBei Frau Yilmaz kommen alle fuenf Risiken zusammen: 79 Jahre, Adipositas, Diabetes, 3 Tage Bettruhe. Deshalb ist Tag 3 nach Hueft-TEP der **spaeteste Zeitpunkt** fuer den ersten Aufstehversuch (DGG 2022).",
    kerntextB1:
      "**Fruehmobilisation** bedeutet: so frueh wie moeglich aufstehen nach einer OP.\n\nWenn ein Mensch lange liegt, passieren schlimme Dinge:\n\n• **Blutgerinnsel** in den Beinvenen (Thrombose)\n• **Druckwunden** an Steissbein und Fersen\n• **Lungenentzuendung** durch flaches Atmen\n• **Steife Gelenke** (Kontraktur)\n• **Muskelabbau** — bis zu 10 % pro Woche\n\nFrau Yilmaz liegt schon 3 Tage. Sie ist 79, hat Uebergewicht und Diabetes. All das macht die Gefahren noch groesser. Deshalb: Heute muss sie aufstehen.",
    faustregel:
      "**Jeder Tag im Bett kostet Muskeln, Haut und Kreislauf** — Fruehmobilisation ist keine Option, sondern Pflicht.",
    faustregelB1:
      "Jeder Tag im Bett macht den Koerper schwaecher. Aufstehen ist keine Wahl — es ist noetig.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese nach Schlaganfall",
        kurzbeschreibung:
          "Bei ihm ist Fruehmobilisation nach Bobath-Konzept notwendig — die betroffene Seite wird gezielt einbezogen, nicht geschont.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas Grad III (BMI 42)",
        kurzbeschreibung:
          "Bariatrische Mobilisation braucht spezielle Hilfsmittel (Aufstehhilfe, breiter Rollator) und zwei Pflegekraefte.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "COPD + ambulant",
        kurzbeschreibung:
          "Bei ihr ist Mobilisation auch Atemtherapie — jeder Schritt verbessert die Lungenbelueftung und reduziert das Pneumonie-Risiko.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Yilmaz liegt seit 3 Tagen nach Hueft-TEP. Nenne 3 Gefahren der Immobilitaet, die bei ihr besonders relevant sind.",
      rueckseite:
        "Thrombose (Stase + Adipositas + Diabetes = alle 3 Saeulen der Virchow-Trias aktiv), Dekubitus (Steissbein-Roetung bereits Kategorie I, BMI 34), Muskelabbau (79 Jahre, bis zu 10 % pro Woche). Weitere: Pneumonie, Kontraktur. Faustregel: **Jeder Tag im Bett kostet Muskeln, Haut und Kreislauf.** Spektrum: Petrov (Bobath), Schmidt (bariatrisch), Kovac (COPD-Atemtherapie).",
    },
  },
};

/**
 * Baustein 1.3b — Positionierung: Luxationsprophylaxe nach Hüft-TEP
 * Position: VOR Step 1.4 (Matching Lagerungsregeln) — Schüler braucht Grundwissen
 * über Positionierung und Luxationsgefahr, bevor er die Regeln zuordnet.
 */
export const IW_YILMAZ_02_LUXATIONSPROPHYLAXE: ContentStep = {
  stepId: "ce02-yilmaz-info-03b-luxationsprophylaxe",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Deutsche Gesellschaft fuer Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Huefte",
    "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-info-luxationsprophylaxe",
  tag: "pflege",
  themaPrimaer: "positionierung",
  themenSekundaer: ["mobilisation"],
  transition: "Du kennst jetzt die drei Verbote. Gleich ordnest du sie den Gruenden zu.",
  contentC1: {
    title: "Luxationsprophylaxe: Drei Verbote nach Hueft-TEP",
    body: "",
    glossarBegriffe: ["Luxation", "Luxationsprophylaxe", "Adduktion", "Innenrotation"],
  },
  contentB1: {
    title: "Drei Bewegungen, die verboten sind",
    body: "",
    glossarBegriffe: ["Luxation", "Adduktion", "Innenrotation"],
  },
  inlineWissen: {
    bausteinRef: "positionierung-huefte-luxationsprophylaxe",
    storyAufhaenger:
      "Frau Yilmaz hat ein neues Hueftgelenk — aber es sitzt noch nicht fest. In den ersten 6–12 Wochen kann die Prothese aus der Pfanne springen (= Luxation). Das passiert, wenn das operierte Bein in bestimmte Positionen geraet. Du musst die drei Verbote kennen, bevor du ihr Zimmer betrittst.",
    storyAufhaengerB1:
      "Frau Yilmaz hat ein neues Hueftgelenk. Aber es sitzt noch nicht ganz fest. Es kann aus der Pfanne springen. Das heisst Luxation. Es gibt drei Bewegungen, die das ausloesen koennen. Die musst du kennen.",
    kerntext:
      "**Drei Bewegungsverbote nach Hueft-TEP** (DGU S2k-Leitlinie 2022):\n\n• **Hueftbeugung < 90°** — der Oberschenkel darf nicht ueber den rechten Winkel zum Becken gebeugt werden. Beim Sitzen: Stuhl hoeher als Knie. Beim Schuhe anziehen: langer Schuhloefel.\n\n• **Keine Adduktion ueber die Koerpermittellinie** — das operierte Bein darf nicht ueber die Koerpermitte gefuehrt werden. Kein Beine-Uebereinanderschlagen, kein seitliches Rutschen.\n\n• **Keine Innenrotation** — die Fussspitze des operierten Beins zeigt nach aussen oder geradeaus, niemals nach innen. Im Schlaf: Kissen zwischen die Beine verhindert ungewolltes Drehen.\n\n**Geltungsdauer:** 6–12 Wochen post-OP, je nach Operationstechnik und Chirurgen-Anweisung.\n\n**Konsequenz bei Verstoss:** Luxation = Notfall-OP, extremer Schmerz, verlaengerte Rehabilitationszeit.",
    kerntextB1:
      "**Drei verbotene Bewegungen** nach Hueft-OP:\n\n• **Huefte nicht ueber 90° beugen** — beim Sitzen: Stuhl hoeher als Knie\n\n• **Bein nicht ueber die Mitte kreuzen** (kein Beine uebereinanderschlagen)\n\n• **Fuss nicht nach innen drehen** — Fussspitze zeigt nach aussen oder geradeaus\n\nDiese Regeln gelten 6–12 Wochen lang.\n\nWenn jemand die Regeln bricht, kann das Gelenk aus der Pfanne springen. Das heisst Luxation. Das ist ein Notfall.",
    faustregel:
      "**90°, Mitte, Innenrotation** — drei Grenzen, die du in den naechsten 6–12 Wochen bei jedem Handgriff beachtest.",
    faustregelB1:
      "Drei Verbote: Nicht ueber 90° beugen, nicht ueberkreuzen, nicht nach innen drehen. 6–12 Wochen lang.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese — kann die Lagerungsvorschrift nicht aktiv einhalten",
        kurzbeschreibung:
          "Bei ihm muss die Pflege die Positionierung komplett uebernehmen — er kann das operierte Bein nicht selbst kontrollieren. Kissen-Positionierung wird zur Dauermassnahme.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz — vergisst die Lagerungsregeln",
        kurzbeschreibung:
          "Er versteht die Regeln im Moment, vergisst sie aber sofort. Bettgitter und Kissen-Positionierung sind mechanische Sicherheitsnetze — Erklaerungen allein reichen nicht.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas — erschwert Kissen-Positionierung",
        kurzbeschreibung:
          "Koerperumfang und Gewicht erschweren die Kissen-Platzierung zwischen den Beinen. Groessere Keilkissen oder spezielle Abduktionslagerungshilfen noetig.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Nenne die drei Bewegungsverbote nach Hueft-TEP und erklaere, warum Mustafa (Frau Yilmaz' Ehemann) ein Risiko darstellt.",
      rueckseite:
        "(1) Hueftbeugung < 90°, (2) keine Adduktion ueber Koerpermitte, (3) keine Innenrotation. Mustafa versucht manchmal, Frau Yilmaz selbst aufzuhelfen — ohne zu wissen, dass er dabei Luxationsgefahr riskiert. Alle drei Verbote gelten 6–12 Wochen. Spektrum: Petrov (kann Regeln nicht aktiv einhalten), Bauer (vergisst sie), Schmidt (Kissen-Positionierung erschwert). Faustregel: **90°, Mitte, Innenrotation.**",
    },
  },
};

/**
 * Baustein 1.4b — Thrombose-Prophylaxe: Fondaparinux bei Frau Yilmaz
 * Position: VOR Step 1.5 (Selfrating) — Schüler hat in der SBAR-Übergabe
 * "Fondaparinux 2,5 mg s.c." gelesen, braucht jetzt Kontext warum.
 */
export const IW_YILMAZ_03_FONDAPARINUX: ContentStep = {
  stepId: "ce02-yilmaz-info-04b-fondaparinux",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF (2024): S3-Leitlinie Prophylaxe der venoesen Thromboembolie",
    "DGG (2022): S2k-Leitlinie tiefe Beinvenenthrombose",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-info-antikoagulation",
  tag: "krankheitslehre",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: ["mobilisation"],
  transition: "Schmerzmittel und Blutverdunner laufen. Jetzt: Wie gut kennst du die Gesamtsituation?",
  contentC1: {
    title: "Fondaparinux: Warum bekommt Frau Yilmaz eine Bauchspritze?",
    body: "",
    glossarBegriffe: ["Fondaparinux", "Antikoagulation", "NMH", "Thromboseprophylaxe"],
  },
  contentB1: {
    title: "Warum bekommt Frau Yilmaz eine Blut-Verduennungs-Spritze?",
    body: "",
    glossarBegriffe: ["Fondaparinux", "Blutverdunnung"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-nmh-doaks",
    storyAufhaenger:
      "In der SBAR-Uebergabe stand: \"Fondaparinux 2,5 mg s.c. taeglich seit OP-Tag.\" Eine Bauchspritze taeglich — aber warum genau dieses Medikament? Und reicht es allein aus?",
    storyAufhaengerB1:
      "In der Uebergabe steht: Frau Yilmaz bekommt taeglich eine Spritze in den Bauch (Fondaparinux). Warum? Und reicht das allein aus?",
    kerntext:
      "**Fondaparinux** ist ein synthetisches Antikoagulans (Gerinnungshemmer). Bei Frau Yilmaz wird es statt des ueblichen niedermolekularen Heparins (NMH) eingesetzt.\n\n**Warum nicht NMH?** NMH ist der Standard — aber Fondaparinux hat bei Hueft-TEP einen Vorteil: kein HIT-Risiko (Heparin-induzierte Thrombozytopenie). Bei Frau Yilmaz mit Diabetes und Adipositas ist das Thromboserisiko ohnehin extrem hoch — eine HIT waere lebensbedrohlich.\n\n**Dauer:** 35 Tage, auch nach Entlassung. AWMF-Empfehlung: mindestens 28–35 Tage nach Hueft-TEP.\n\n**Reicht die Spritze allein?** Nein. Medikamentoese Prophylaxe ist nur ein Baustein. Fruehmobilisation (Wadenmuskelpumpe aktivieren) ist die wirksamste Massnahme — die Spritze schuetzt, aber ersetzt das Aufstehen nicht.",
    kerntextB1:
      "**Fondaparinux** ist ein Medikament gegen Blutgerinnsel. Es kommt als Spritze in den Bauch.\n\nNormalerweise bekommt man Heparin. Fondaparinux ist besser bei Hueft-OP, weil es eine bestimmte Komplikation (= HIT) nicht ausloeoen kann.\n\n**Wie lange?** 35 Tage — auch nachdem Frau Yilmaz nach Hause geht.\n\n**Reicht die Spritze allein?** Nein. Aufstehen und Gehen ist genauso wichtig. Die Spritze schuetzt — aber sie ersetzt das Aufstehen nicht.",
    faustregel:
      "**Spritze schuetzt, Aufstehen rettet** — medikamentoese Prophylaxe allein reicht bei Hueft-TEP nicht.",
    faustregelB1:
      "Die Spritze schuetzt das Blut. Aber Aufstehen ist genauso wichtig. Beides zusammen hilft am besten.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlaganfall + Hemiparese",
        kurzbeschreibung:
          "Bei ihm laeuft NMH (Enoxaparin) statt Fondaparinux, da kein chirurgisches Setting. Dazu IPK-Manschetten (intermittierende pneumatische Kompression), weil er kaum mobilisiert werden kann.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulant, COPD",
        kurzbeschreibung:
          "Ambulante Patientin — keine medikamentoese Thromboseprophylaxe noetig (mobil). Aber: Bein-Uebungen und Gehtraining als Basisschutz.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas Grad III",
        kurzbeschreibung:
          "Bei BMI > 40 kann eine gewichtsadaptierte NMH-Dosierung noetig sein — Standarddosis reicht bei schwerem Uebergewicht oft nicht aus.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Yilmaz bekommt Fondaparinux 2,5 mg s.c. taeglich. Warum wurde Fondaparinux statt NMH gewaehlt, und warum reicht es allein nicht?",
      rueckseite:
        "Fondaparinux hat kein HIT-Risiko (wichtig bei hohem Thromboserisiko). Allein reicht es nicht, weil Fruehmobilisation die wirksamste Einzelmassnahme ist (Wadenmuskelpumpe). AWMF empfiehlt 28–35 Tage nach Hueft-TEP. Spektrum: Petrov (NMH + IPK), Kovac (ambulant, keine Med.-Prophylaxe), Schmidt (gewichtsadaptierte Dosis). Faustregel: **Spritze schuetzt, Aufstehen rettet.**",
    },
  },
};

// ============================================================================
// PHASE 2 — BEOBACHTEN (3 Bausteine)
// ============================================================================

/**
 * Baustein 2.0b — Schmerz: Wiederbegegnung NRS-Skala
 * Position: VOR Step 2.3 (Comparison Schmerzassessment) — Schüler braucht
 * Grundwissen NRS, bevor er Instrumente vergleicht.
 * Wiederbegegnung: NRS wird in frau-m-nacht-sturz zentral gelehrt.
 */
export const IW_YILMAZ_04_SCHMERZ_NRS: ContentStep = {
  stepId: "ce02-yilmaz-beob-02b-schmerz-nrs",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2020): Expertenstandard Schmerzmanagement in der Pflege",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-beob-schmerz-wiederbegegnung",
  tag: "pflege",
  themaPrimaer: "schmerz",
  themenSekundaer: ["mobilisation"],
  transition: "Du weisst, was NRS bedeutet. Aber welche Skala ist bei Frau Yilmaz die beste Wahl?",
  contentC1: {
    title: "Schmerzskala NRS — kurze Auffrischung bei Frau Yilmaz",
    body: "",
    glossarBegriffe: ["NRS", "Schmerzassessment"],
  },
  contentB1: {
    title: "Schmerz messen mit der NRS-Skala",
    body: "",
    glossarBegriffe: ["NRS", "Schmerzskala"],
  },
  inlineWissen: {
    bausteinRef: "schmerz-nrs-skala",
    wiederbegegnung: {
      basisBausteinId: "schmerz-nrs-grundlagen",
      basisPatient: "Frau M.",
      vertiefung:
        "Die NRS kennst du von Frau M. — dort ging es um Sturz-Schmerz (NRS als Momentaufnahme). Bei Frau Yilmaz ist eine Besonderheit wichtig: **Ruhe-Schmerz vs. Bewegungs-Schmerz.** Gestern NRS 7 beim Aufstehen (Bewegungsschmerz) — das hat den Versuch abgebrochen. Heute fragst du beides getrennt: Schmerz in Ruhe UND Schmerz bei Bewegung. Das ist Standard in der orthopaedischen Pflege (DNQP 2020).",
      vertiefungB1:
        "Die NRS-Skala kennst du von Frau M. — 0 = kein Schmerz, 10 = schlimmster Schmerz. Bei Frau Yilmaz ist etwas anders: Du fragst ZWEIMAL. Einmal: Wie stark ist der Schmerz im Liegen? (= Ruheschmerz) Dann: Wie stark bei Bewegung? (= Bewegungsschmerz) Gestern war Bewegungsschmerz NRS 7 — deshalb hat der Versuch nicht geklappt.",
    },
    storyAufhaenger:
      "Frau Yilmaz sagt: \"Das Bein zieht so.\" Du willst den Schmerz messen. Aber Schmerz nach Hueft-TEP hat zwei Gesichter: Ruheschmerz und Bewegungsschmerz. Gestern war der Bewegungsschmerz der Grund fuer den Abbruch.",
    storyAufhaengerB1:
      "Frau Yilmaz sagt: \"Das Bein zieht.\" Du willst den Schmerz messen. Aber Achtung: Schmerz im Liegen und Schmerz beim Bewegen koennen sehr unterschiedlich sein.",
    kerntext:
      "**NRS-Auffrischung bei Hueft-TEP:**\n\n• **Immer ZWEI Werte erheben:** NRS in Ruhe + NRS bei Bewegung\n\n• **Schwellenwert NRS ≥ 4:** moderater Schmerz, interventionspflichtig (DNQP 2020). NRS 7 gestern = Abbruchkriterium\n\n• **Zeitpunkt entscheidend:** Analgesie (Metamizol) braucht 30 Minuten Wirkzeit. Schmerzmessung VOR Mobilisation UND 30 Min nach Schmerzmittelgabe\n\n• **Frau Yilmaz' Besonderheit:** Sie minimiert. \"Es zieht ein bisschen\" kann NRS 5–6 bedeuten. Nachfragen, konkret messen, nicht nur Aussage akzeptieren.",
    kerntextB1:
      "**NRS bei Frau Yilmaz:**\n\n• **Zwei Mal fragen:** Schmerz im Liegen? Schmerz bei Bewegung?\n\n• **Ab NRS 4** ist der Schmerz stark genug, um etwas dagegen zu tun\n\n• **Schmerzmittel braucht 30 Minuten** bis es wirkt. Erst messen, dann Schmerzmittel, dann 30 Minuten warten, dann aufstehen\n\n• **Frau Yilmaz sagt weniger als sie fuehlt.** \"Es zieht ein bisschen\" kann NRS 5–6 sein. Deshalb: immer mit Zahl messen, nicht nur hoeren.",
    faustregel:
      "**Ruhe und Bewegung getrennt messen** — bei Hueft-TEP entscheidet der Bewegungsschmerz ueber Erfolg oder Abbruch.",
    faustregelB1:
      "Immer zweimal fragen: Schmerz im Liegen? Schmerz bei Bewegung? Nur so weisst du, ob das Aufstehen klappt.",
    karteikarte: {
      vorderseite:
        "Frau Yilmaz sagt: \"Es zieht ein bisschen.\" Warum reicht diese Aussage nicht — und was machst du stattdessen?",
      rueckseite:
        "Frau Yilmaz minimiert ihre Schmerzen (Persoenlichkeit). \"Es zieht\" kann NRS 5–6 bedeuten. Deshalb: NRS-Skala nutzen, ZWEI Werte erheben (Ruhe + Bewegung), NRS ≥ 4 = interventionspflichtig. Faustregel: **Ruhe und Bewegung getrennt messen.**",
    },
  },
};

/**
 * Baustein 2.3b — Thrombose-Prophylaxe: Virchow-Trias Grundlagen
 * Position: VOR Step 2.4 (Categorize Virchow-Trias) — Schüler soll
 * das Konzept verstehen, bevor er es anwendet.
 */
export const IW_YILMAZ_05_VIRCHOW_TRIAS: ContentStep = {
  stepId: "ce02-yilmaz-beob-03b-virchow-trias",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Virchow R. (1856): Gesammelte Abhandlungen zur wissenschaftlichen Medicin",
    "AWMF (2024): S3-Leitlinie Prophylaxe der venoesen Thromboembolie",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-beob-virchow-grundlagen",
  tag: "krankheitslehre",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: [],
  transition: "Du kennst die drei Saeulen. Jetzt ordnest du Frau Yilmaz' Risikofaktoren zu.",
  contentC1: {
    title: "Virchow-Trias: Warum bildet sich ein Blutgerinnsel?",
    body: "",
    glossarBegriffe: ["Virchow-Trias", "Thrombose", "Stase", "Hyperkoagulabilitaet", "Endothel"],
  },
  contentB1: {
    title: "Drei Ursachen fuer ein Blutgerinnsel",
    body: "",
    glossarBegriffe: ["Virchow-Trias", "Thrombose", "Blutgerinnsel"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-virchow-trias",
    storyAufhaenger:
      "Frau Yilmaz bekommt taeglich eine Spritze gegen Thrombose. Aber warum ist gerade SIE so gefaehrdet? Die Antwort liegt in einem 170 Jahre alten Modell, das heute noch gilt — der Virchow-Trias.",
    storyAufhaengerB1:
      "Frau Yilmaz bekommt eine Spritze gegen Blutgerinnsel. Aber warum ist das Risiko bei ihr so hoch? Die Antwort hat ein Arzt vor 170 Jahren gefunden.",
    kerntext:
      "**Die Virchow-Trias** (1856) beschreibt drei Faktoren, die gemeinsam eine Thrombose ausloesen:\n\n• **Gefaesswandschaden** — die innere Gefaesswand (Endothel) ist normalerweise glatt. Bei OP-Verletzung, Entzuendung oder Katheter wird sie rau — Blutplaettchen bleiben kleben.\n\n• **Stase** (verlangsamter Blutfluss) — wenn du lange liegst, pumpt die Wadenmuskelpumpe nicht. Blut staut sich in den Beinvenen.\n\n• **Hyperkoagulabilitaet** (erhoehte Gerinnungsbereitschaft) — Entzuendungsreaktion nach OP, aber auch Diabetes, Rauchen, Pille erhoehen die Gerinnung.\n\n**Bei Frau Yilmaz sind alle drei aktiv gleichzeitig:** Hueft-OP (Wandschaden) + 3 Tage Bettruhe (Stase) + Diabetes + OP-Entzuendung (Hyperkoagulabilitaet). Das macht Hueft-TEP-Patienten zu einer der hoechsten Risikogruppen ueberhaupt.",
    kerntextB1:
      "**Drei Ursachen fuer ein Blutgerinnsel** (Virchow-Trias):\n\n• **Gefaess-Schaden** — bei der OP wurde das Gefaess verletzt\n\n• **Langsames Blut** (Stase) — wer lange liegt, pumpt kein Blut durch die Beine\n\n• **Blut gerinnt leichter** — nach einer OP und bei Diabetes\n\nBei Frau Yilmaz sind alle drei Ursachen gleichzeitig da. Deshalb ist das Risiko sehr hoch.",
    faustregel:
      "**Wand, Fluss, Gerinnung** — wenn alle drei Saeulen aktiv sind, ist die Thrombose-Gefahr am hoechsten.",
    faustregelB1:
      "Drei Ursachen fuer Blutgerinnsel: Gefaess-Schaden, langsames Blut, Blut gerinnt leichter. Bei Frau Yilmaz sind alle drei da.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlaganfall + Hemiparese",
        kurzbeschreibung:
          "Bei ihm dominiert Stase (gelahmtes Bein, kaum Bewegung). Hyperkoagulabilitaet durch Vorhofflimmern kommt dazu. Andere Gewichtung, gleiche Trias.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "COPD, ambulant, mobil",
        kurzbeschreibung:
          "Bei ihr: kaum Stase (sie bewegt sich), kein OP-Wandschaden. Aber chronische Entzuendung durch COPD erhoehnt leicht die Hyperkoagulabilitaet. Niedriges Risiko — keine medikamentoese Prophylaxe noetig.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas Grad III",
        kurzbeschreibung:
          "Stase verstaerkt durch Gewicht (venoese Kompression), Hyperkoagulabilitaet durch metabolisches Syndrom. Bei ihr: alle drei Saeulen auch ohne OP aktiv.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Nenne die drei Saeulen der Virchow-Trias und ordne sie Frau Yilmaz zu.",
      rueckseite:
        "(1) Gefaesswandschaden — Hueft-OP. (2) Stase — 3 Tage Bettruhe + Adipositas. (3) Hyperkoagulabilitaet — OP-Entzuendung + Diabetes. Alle drei gleichzeitig aktiv = hoechste Risikogruppe. Spektrum: Petrov (Stase + Vorhofflimmern), Kovac (niedrig, nur leicht Hyperkoagulabilitaet), Schmidt (alle drei auch ohne OP). Faustregel: **Wand, Fluss, Gerinnung.**",
    },
  },
};

/**
 * Baustein 2.4b — Thrombose-Prophylaxe: Klinische Zeichen + Homans veraltet
 * Position: VOR Step 2.5 (TrueFalse klinische Thrombose-Zeichen) — Schüler
 * soll wissen was er beobachten darf und was nicht, bevor er beurteilt.
 */
export const IW_YILMAZ_06_TVT_ZEICHEN: ContentStep = {
  stepId: "ce02-yilmaz-beob-04b-tvt-zeichen",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "DGG (2022): S2k-Leitlinie tiefe Beinvenenthrombose",
    "AWMF (2024): S3-Leitlinie Prophylaxe der venoesen Thromboembolie",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-beob-tvt-beobachtung",
  tag: "krankheitslehre",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: [],
  transition: "Du weisst jetzt, was du siehst und was du NICHT provozieren darfst. Beurteile nun die Aussagen.",
  contentC1: {
    title: "Thrombose-Zeichen: Was du beobachtest — und was du laesst",
    body: "",
    glossarBegriffe: ["TVT", "Homans-Zeichen", "Kompressionssonographie", "Wells-Score"],
  },
  contentB1: {
    title: "Thrombose erkennen: Was du siehst und was du nicht machen darfst",
    body: "",
    glossarBegriffe: ["Thrombose", "Homans-Zeichen", "Ultraschall"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-tvt-symptome",
    storyAufhaenger:
      "Du inspizierst Frau Yilmaz' Beine im Seitenvergleich. Vielleicht erinnerst du dich aus dem Unterricht an das Homans-Zeichen — Fuss hochziehen und schauen ob die Wade schmerzt. Aber Vorsicht: Das darfst du NICHT mehr machen.",
    storyAufhaengerB1:
      "Du schaust dir Frau Yilmaz' Beine an. Sind sie gleich dick? Ist eines waermer? Frueher hat man am Fuss gezogen (Homans-Zeichen). Heute ist das verboten.",
    kerntext:
      "**Was du bei Verdacht auf TVT tust:**\n\n• **Inspektion im Seitenvergleich:** Schwellung? Umfang? Hauttemperatur (Handruecken)? Verfaerbung (livide-blaurot)? Verstaerkte Venenzeichnung?\n\n• **Schmerz erfragen:** \"Tut die Wade weh?\" — aktiv fragen, nicht nur warten\n\n• **Umfang messen:** Bei Verdacht beide Waden an gleicher Stelle messen (10 cm unter Knie)\n\n**Was du NICHT tust:**\n\n• **Kein Homans-Zeichen** (Dorsalextension des Fusses) — veraltet, unzuverlaessig (Spezifitaet nur ~50 %), kann Thrombusteile loesen und Lungenembolie ausloesen\n\n• **Kein Payr-Zeichen, kein Meyer-Zeichen** — ebenfalls veraltet\n\n**Bei Verdacht:** Sofort Arzt informieren. Diagnostik: Wells-Score + D-Dimer + Kompressionssonographie (Goldstandard). Deine Rolle: **Beobachten und melden — nicht provozieren.**",
    kerntextB1:
      "**Was du machst:**\n\n• Beide Beine vergleichen: Ist eines dicker? Waermer? Blau-rot?\n• Fragen: \"Tut die Wade weh?\"\n• Bei Verdacht: Wade messen (beide Seiten, 10 cm unter Knie)\n\n**Was du NICHT machst:**\n\n• Nicht am Fuss ziehen (Homans-Zeichen) — das ist verboten! Es kann ein Gerinnsel loesen.\n• Nicht druecken, nicht provozieren.\n\n**Bei Verdacht:** Sofort dem Arzt sagen. Der macht einen Ultraschall.",
    faustregel:
      "**Schauen, fragen, messen — aber niemals provozieren.** Das Homans-Zeichen gehoert ins Geschichtsbuch.",
    faustregelB1:
      "Schauen, fragen, messen — aber nie am Bein druecken oder ziehen. Das kann gefaehrlich sein.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz — kann Schmerzen nicht zuverlaessig angeben",
        kurzbeschreibung:
          "Bei ihm sind Verhaltensaenderungen (Unruhe, Nahrungsverweigerung, Abwehr bei Beruehrung am Bein) die einzigen Thrombose-Hinweise. BESD-Skala statt NRS.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese — gelahmtes Bein kann Schwellung maskieren",
        kurzbeschreibung:
          "Das paretische Bein ist ohnehin oedematoes — eine TVT-Schwellung faellt kaum auf. Taegliche Umfangsmessung beider Beine ist hier Standard.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas — Seitenvergleich erschwert",
        kurzbeschreibung:
          "Umfangsmessung bei BMI > 40 ist unzuverlaessig (Gewebsmasse). Sonographie frueher einsetzen. Hautverfaerbung beachten — livid-blaurot ist auch bei Adipositas ein Warnzeichen.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Du vermutest bei Frau Yilmaz eine TVT. Was genau inspizierst du — und welchen klassischen Test fuehrst du NICHT durch?",
      rueckseite:
        "Inspektion: Schwellung (Seitenvergleich), Umfang messen, Hauttemperatur (Handruecken), Verfaerbung, Venenzeichnung. Schmerz erfragen. NICHT: Homans-Zeichen (veraltet, Embolie-Risiko). Bei Verdacht: Arzt informieren, Wells-Score + D-Dimer + Sonographie. Faustregel: **Schauen, fragen, messen — niemals provozieren.**",
    },
  },
};

// ============================================================================
// PHASE 3 — PLANEN (1 Baustein)
// ============================================================================

/**
 * Baustein 3.0b — Mobilisation: Analgesie VOR Mobilisation
 * Position: VOR Step 3.1 (MC Schmerzmittel zuerst) — Grundwissen,
 * warum zeitgesteuerte Analgesie bei Mobilisation entscheidend ist.
 */
export const IW_YILMAZ_07_ANALGESIE_VOR_MOBILISATION: ContentStep = {
  stepId: "ce02-yilmaz-plan-00b-analgesie-mobilisation",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP (2020): Expertenstandard Erhaltung und Foerderung der Mobilitaet in der Pflege",
    "DNQP (2020): Expertenstandard Schmerzmanagement in der Pflege",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-plan-analgesie-timing",
  tag: "pflege",
  themaPrimaer: "mobilisation",
  themenSekundaer: ["schmerz"],
  transition: "Du weisst: Erst das Schmerzmittel, dann das Aufstehen. Was tust du also ZUERST?",
  contentC1: {
    title: "Schmerzmittel VOR Mobilisation — warum Timing alles entscheidet",
    body: "",
    glossarBegriffe: ["Analgesie", "Metamizol", "Wirkzeit", "Mobilisation"],
  },
  contentB1: {
    title: "Erst Schmerzmittel — dann Aufstehen",
    body: "",
    glossarBegriffe: ["Schmerzmittel", "Wirkzeit"],
  },
  inlineWissen: {
    bausteinRef: "mobilisation-analgesie-timing",
    storyAufhaenger:
      "Gestern ist Frau Yilmaz' Aufstehversuch bei NRS 7 gescheitert. Heute willst du es besser machen. Aber was war gestern der Fehler? Nicht der Aufstehversuch selbst — sondern das Timing. Schmerz und Mobilisation haengen untrennbar zusammen.",
    storyAufhaengerB1:
      "Gestern hat Frau Yilmaz versucht aufzustehen. Es hat nicht geklappt — die Schmerzen waren zu stark. Was lief falsch? Das Schmerzmittel kam zu spaet.",
    kerntext:
      "**Timing-Regel:** Analgesie muss **BEVOR** die Mobilisation beginnt wirken — nicht gleichzeitig, nicht danach.\n\n**Bei Frau Yilmaz:**\n• Metamizol 500 mg oral — Wirkungseintritt ca. 30 Minuten\n• Ibuprofen 400 mg bei Bedarf — Wirkungseintritt ca. 30-60 Minuten\n\n**Die Planung:** Schmerzmittel-Status um 7:30 Uhr pruefen (wurde die Morgenmedikation gegeben?). Falls nicht: sofort nachholen. Dann 30 Minuten warten. Dann NRS messen. Erst bei NRS ≤ 5: Mobilisation starten.\n\n**Warum das so wichtig ist:**\n• Schmerz hemmt Eigenbewegung — ohne Analgesie verkrampft Frau Yilmaz\n• Verkrampfung erhoeht Sturzrisiko und Luxationsgefahr\n• Gescheiterter Versuch zerstoert Vertrauen — der naechste wird noch schwieriger\n\nDer DNQP 2020 nennt das explizit: **Schmerzmanagement ist Voraussetzung fuer erfolgreiche Mobilisation.**",
    kerntextB1:
      "**Regel:** Schmerzmittel BEVOR du aufstehst. Nicht gleichzeitig.\n\n**Bei Frau Yilmaz:**\n• Metamizol — braucht 30 Minuten bis es wirkt\n• Ibuprofen — braucht 30-60 Minuten\n\n**Was du tust:** Morgens pruefen: Hat sie das Schmerzmittel bekommen? Wenn nicht: jetzt geben. Dann 30 Minuten warten. Dann Schmerz messen. Erst wenn NRS 5 oder weniger: aufstehen.\n\n**Warum?** Wenn sie starke Schmerzen hat, verkrampft sie sich. Dann faellt sie leichter. Und das Gelenk kann sich loesen. Und: Ein gescheiterter Versuch macht es beim naechsten Mal noch schwerer.",
    faustregel:
      "**Erst wirken lassen, dann mobilisieren** — 30 Minuten Geduld sparen Stunden Vertrauensverlust.",
    faustregelB1:
      "Erst Schmerzmittel. Dann 30 Minuten warten. Dann aufstehen. Nicht andersrum.",
    karteikarte: {
      vorderseite:
        "Warum ist der gestrige Aufstehversuch bei Frau Yilmaz gescheitert — und was machst du heute anders?",
      rueckseite:
        "Gestern: NRS 7 beim Aufstehen — Analgesie nicht rechtzeitig wirksam. Heute: Metamizol-Status pruefen, ggf. nachholen, 30 Min warten, NRS messen, erst bei ≤ 5 mobilisieren. DNQP 2020: Schmerzmanagement ist Voraussetzung fuer erfolgreiche Mobilisation. Faustregel: **Erst wirken lassen, dann mobilisieren.**",
    },
  },
};

// ============================================================================
// PHASE 4 — DURCHFUEHREN (2 Bausteine)
// ============================================================================

/**
 * Baustein 4.0b — Kinästhetik: Wiederbegegnung Eigenbewegung aktivieren
 * Position: VOR Step 4.1 (Sequencing Mobilisation) — Schüler braucht
 * kinästhetisches Grundprinzip, bevor er die Reihenfolge sortiert.
 * Wiederbegegnung: Kinästhetik wird bei Frau M. (frau-m-nacht-sturz) zentral gelehrt.
 */
export const IW_YILMAZ_08_KINAESTHETIK: ContentStep = {
  stepId: "ce02-yilmaz-dur-00b-kinaesthetik",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "Hatch F./Maietta L. (1982 ff.): Kinaesthetik-Konzept",
    "DNQP (2020): Expertenstandard Erhaltung und Foerderung der Mobilitaet in der Pflege",
    "Deutsche Gesellschaft fuer Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Huefte",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-dur-kinaesthetik-wiederbegegnung",
  tag: "pflege",
  themaPrimaer: "kinaesthetik",
  themenSekundaer: ["mobilisation", "positionierung"],
  transition: "Eigenbewegung aktivieren, nicht heben. Jetzt: die genaue Reihenfolge der Mobilisation.",
  contentC1: {
    title: "Kinaesthetik bei Hueft-TEP: Begleiten statt Heben",
    body: "",
    glossarBegriffe: ["Kinaesthetik", "Eigenbewegung", "Griffpunkte"],
  },
  contentB1: {
    title: "Kinaesthetik: Frau Yilmaz bewegt sich selbst",
    body: "",
    glossarBegriffe: ["Kinaesthetik", "Eigenbewegung"],
  },
  inlineWissen: {
    bausteinRef: "kinaesthetik-was-ist-kinaesthetik",
    wiederbegegnung: {
      basisBausteinId: "kinaesthetik-was-ist-kinaesthetik",
      basisPatient: "Frau M.",
      vertiefung:
        "Kinaesthetik kennst du von Frau M. — dort ging es um den Transfer vom Boden ins Bett. Bei Frau Yilmaz kommt eine **Hueft-TEP-Besonderheit** dazu: Du begleitest die Eigenbewegung, aber du musst gleichzeitig die **drei Bewegungsverbote** einhalten (< 90°, keine Adduktion, keine Innenrotation). Das bedeutet: Du sicherst seitlich am Becken und Rumpf — **niemals unter den Achseln** greifen (Schultergelenk-Risiko + Kineasthethik-Verstoss). Und: Das operierte Bein geht ZUERST in Streckung ueber die Bettkante.",
      vertiefungB1:
        "Kinaesthetik kennst du von Frau M. — du hebst nicht, du begleitest die Bewegung. Bei Frau Yilmaz ist etwas anders: Du musst gleichzeitig aufpassen, dass die Huefte nicht zu weit beugt (< 90°), das Bein nicht ueber die Mitte geht und der Fuss nicht nach innen dreht. Sicherung am Becken und Rumpf — nie unter den Achseln greifen.",
    },
    storyAufhaenger:
      "Du stehst am Bett. 30 Minuten nach Metamizol. Frau Yilmaz schaut dich an: \"Was soll ich machen?\" Du sagst: \"Sie machen die Bewegung — ich begleite und sichere. Sie sagen das Tempo.\" Aber wie genau sicherst du bei Hueft-TEP?",
    storyAufhaengerB1:
      "Frau Yilmaz liegt im Bett und fragt: \"Was soll ich machen?\" Du sagst: \"Sie bewegen sich — ich helfe und passe auf.\" Aber wo fasst du an? Und worauf musst du aufpassen?",
    kerntext:
      "**Kinaesthetik bei Hueft-TEP — Besonderheiten:**\n\n• **Eigenbewegung aktivieren:** Frau Yilmaz richtet sich aktiv auf. Du gibst ihr eine Hand am Becken, eine am Rumpf — zur Sicherung, nicht zum Heben.\n\n• **Griffpunkte-Ampel:** GRUEN = Becken, Schulterblatt, Rumpf seitlich. ROT = unter den Achseln (Schultergelenk-Risiko, Kinaesthetik-Verstoss), an den Handgelenken (fehlende Kontrolle).\n\n• **Operiertes Bein zuerst:** Beim Drehen ueber die Bettkante geht das operierte Bein (rechts) in Streckung ZUERST — das gesunde Bein folgt. NIEMALS beide Beine gleichzeitig, weil das Adduktion/Innenrotation riskiert.\n\n• **Pflegekraft auf OP-Seite:** Du stehst rechts von Frau Yilmaz (auf der operierten Seite), damit du das Bein beobachten und im Notfall sichern kannst.\n\n• **Tempo bestimmt die Patientin:** \"Sie sagen das Tempo.\" Das ist Kinaesthetik-Kernprinzip.",
    kerntextB1:
      "**Kinaesthetik bei Hueft-TEP:**\n\n• Frau Yilmaz bewegt sich selbst. Du sicherst am Becken und Rumpf.\n\n• **Nie unter den Achseln greifen** — das ist falsch und gefaehrlich.\n\n• **Operiertes Bein zuerst** ueber die Bettkante (in Streckung). Das gesunde Bein kommt danach.\n\n• Du stehst auf der operierten Seite (rechts).\n\n• Frau Yilmaz sagt das Tempo. Du wartest auf sie.",
    faustregel:
      "**Begleiten, nicht heben. OP-Seite sichern. Operiertes Bein zuerst.** Drei Regeln fuer jede Hueft-TEP-Mobilisation.",
    faustregelB1:
      "Nicht heben. Am Becken sichern. Das operierte Bein geht zuerst. Frau Yilmaz sagt das Tempo.",
    karteikarte: {
      vorderseite:
        "Wo greifst du bei der Erstmobilisation nach Hueft-TEP an — und wo auf keinen Fall?",
      rueckseite:
        "GRUEN: Becken, Schulterblatt, Rumpf seitlich. ROT: Unter den Achseln (Schultergelenk + Kinaesthetik-Verstoss), Handgelenke. Pflegekraft steht auf OP-Seite. Operiertes Bein zuerst in Streckung ueber Bettkante. Faustregel: **Begleiten, nicht heben. OP-Seite sichern. Operiertes Bein zuerst.**",
    },
  },
};

/**
 * Baustein 4.4b — Positionierung: 30°-Mikrolagerung bei Hüft-TEP
 * Position: VOR Step 4.5 (MC Lagerung nach Mobilisation) — Schüler muss
 * das 30°-Konzept kennen, bevor er die richtige Lagerung wählt.
 */
export const IW_YILMAZ_09_30GRAD_LAGERUNG: ContentStep = {
  stepId: "ce02-yilmaz-dur-04b-30grad-lagerung",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
    "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
    "Deutsche Gesellschaft fuer Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Huefte",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-dur-30grad-positionierung",
  tag: "pflege",
  themaPrimaer: "positionierung",
  themenSekundaer: ["mobilisation"],
  transition: "Du kennst die 30°-Regel. Welche Lagerung waehlst du jetzt fuer Frau Yilmaz?",
  contentC1: {
    title: "30°-Mikrolagerung: Dekubitusschutz UND Hueft-TEP-Sicherheit",
    body: "",
    glossarBegriffe: ["30-Grad-Mikrolagerung", "Dekubitusprophylaxe", "Trochanter"],
  },
  contentB1: {
    title: "30°-Lagerung: Steissbein entlasten + Huefte schuetzen",
    body: "",
    glossarBegriffe: ["30-Grad-Lagerung", "Druckentlastung"],
  },
  inlineWissen: {
    bausteinRef: "positionierung-30-grad-mikrolagerung",
    storyAufhaenger:
      "Frau Yilmaz ist nach dem Aufstehversuch wieder im Bett. Zwei Probleme gleichzeitig: Dekubitus Kategorie I am Steissbein (Druck muss weg) und Hueft-TEP-Lagerungsvorschrift (Hueftwinkel < 90°). Gibt es eine Lagerung, die beides gleichzeitig loest?",
    storyAufhaengerB1:
      "Frau Yilmaz liegt wieder im Bett. Zwei Probleme: Die Druckwunde am Steissbein (Druck muss weg). Und: Die Huefte darf nicht zu stark gebeugt werden. Gibt es eine Lagerung, die beides schafft?",
    kerntext:
      "**Die 30°-Mikrolagerung** ist die Loesung fuer genau dieses Problem (NPUAP/EPUAP 2019):\n\n• **Prinzip:** Der Patient wird leicht zur Seite gekippt — nur 30°, nicht 90°. Das Steissbein liegt frei, der Trochanter wird nicht belastet.\n\n• **Warum nicht 90° Seitenlage?** Bei 90° liegt der Trochanter direkt auf — neue Druckstelle. Ausserdem: Hueftwinkel bei 90°-Seitenlage ist schwer kontrollierbar (Luxationsgefahr).\n\n• **Warum nicht Rueckenlage?** In Rueckenlage liegt das Steissbein direkt auf der Matratze — genau dort, wo Frau Yilmaz bereits Kategorie I hat.\n\n• **Umlagerungsrhythmus:** Alle 2 Stunden (DNQP 2024). Bei Frau Yilmaz: 30° links → 2h → 30° rechts → 2h → kurz Rueckenlage (mit Fersenfrei-Lagerung) → wieder 30°.\n\n• **Kissen zwischen die Beine:** Auch in 30°-Lagerung Keil oder Kissen zwischen die Beine — Adduktionsprophylaxe.",
    kerntextB1:
      "**30°-Lagerung** — die Loesung fuer beides:\n\n• Patient wird leicht zur Seite gekippt (nur 30°)\n• Das Steissbein liegt frei = kein Druck\n• Die Huefte bleibt unter 90° = Gelenk ist sicher\n\n**Warum nicht ganz auf die Seite (90°)?** Dann liegt die Hueftseite auf = neue Druckstelle.\n\n**Warum nicht auf dem Ruecken?** Das Steissbein liegt auf = die Wunde wird schlimmer.\n\n**Wie oft?** Alle 2 Stunden wechseln: 30° links, dann 30° rechts.\n\nKissen zwischen die Beine — damit die Beine nicht ueberkreuzen.",
    faustregel:
      "**30° ist der goldene Winkel** — Steissbein frei, Trochanter geschont, Hueft-TEP sicher.",
    faustregelB1:
      "30 Grad ist die beste Lagerung: Steissbein hat keinen Druck, Huefte ist sicher, alle 2 Stunden wechseln.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz — dreht sich im Schlaf zurueck",
        kurzbeschreibung:
          "Bei ihm nuetzt das Kissen nur bedingt — er schiebt es weg. Sensormatte + engmaschige Kontrolle noetig. Positionierungswechsel alle 2h fest im Tagesplan.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiparese — kann sich nicht selbst repositionieren",
        kurzbeschreibung:
          "Er braucht bei jeder Umlagerung Unterstuetzung durch Pflege. 30°-Positionierung mit Kissen im Ruecken und zwischen den Beinen — er kann sie nicht selbst halten.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas — 30° erreichen erfordert mehr Material",
        kurzbeschreibung:
          "Bei hohem BMI braucht man groessere Keilkissen oder mehrere Kissen. Mikrolagerung reicht manchmal nicht — dann Wechseldruckmatratze noetig.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Warum ist die 30°-Mikrolagerung bei Frau Yilmaz die beste Wahl — und warum nicht 90° Seitenlage oder Rueckenlage?",
      rueckseite:
        "30°: Steissbein entlastet + Trochanter geschont + Hueftwinkel < 90°. 90° Seitenlage: Trochanter belastet (neue Druckstelle) + Hueftwinkel unkontrollierbar. Rueckenlage: Steissbein belastet (Kategorie I verschlechtert sich). Umlagerung alle 2 Stunden. Kissen zwischen die Beine (Adduktionsprophylaxe). Faustregel: **30° ist der goldene Winkel.**",
    },
  },
};

// ============================================================================
// PHASE 5 — EVALUIEREN (1 Baustein)
// ============================================================================

/**
 * Baustein 5.0b — Thrombose-Prophylaxe: Pflegerolle bei Thrombose-Beobachtung
 * Position: VOR Step 5.1 (Categorize Maßnahmen-Evaluation) — Schüler
 * reflektiert seine Rolle im Thrombose-Kontext, bevor er die Maßnahmen bewertet.
 */
export const IW_YILMAZ_10_PFLEGE_THROMBOSE_ROLLE: ContentStep = {
  stepId: "ce02-yilmaz-eval-00b-pflege-thrombose-rolle",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF (2024): S3-Leitlinie Prophylaxe der venoesen Thromboembolie",
    "PflBG (2020): § 4 Vorbehaltene Taetigkeiten",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-yilmaz-eval-pflege-thrombose-verantwortung",
  tag: "pflege",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: ["mobilisation"],
  transition: "Du weisst jetzt, was deine Aufgabe ist. Schau zurueck: Was hat heute gewirkt?",
  contentC1: {
    title: "Deine Rolle: Beobachten, melden, dokumentieren",
    body: "",
    glossarBegriffe: ["Vorbehaltene Taetigkeit", "Pflegeprozess", "Thromboseprophylaxe"],
  },
  contentB1: {
    title: "Was ist deine Aufgabe bei der Thrombose-Vorsorge?",
    body: "",
    glossarBegriffe: ["Pflegeprozess", "Thrombose-Vorsorge"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-pflegerolle",
    storyAufhaenger:
      "Heute hast du bei Frau Yilmaz Wadenschmerz links bemerkt, den Arzt informiert und eine Doppler-Sonographie beauftragen lassen. Das Ergebnis steht noch aus. Aber hast du damit alles getan, was in deiner Verantwortung liegt?",
    storyAufhaengerB1:
      "Du hast heute Wadenschmerz bei Frau Yilmaz bemerkt. Du hast es dem Arzt gesagt. Die Untersuchung kommt noch. Aber: Hast du alles gemacht, was du als Pflegekraft tun musst?",
    kerntext:
      "**Fuenf pflegerische Kernaufgaben bei der Thromboseprophylaxe:**\n\n• **Beobachten** — taeglich beide Beine vergleichen (Umfang, Temperatur, Farbe, Schwellung). Vitalzeichen: Puls und Atemfrequenz bei Verdacht.\n\n• **Assessment** — Risiko-Einschaetzung bei Aufnahme und bei jeder Zustandsaenderung (neue OP, Infekt, mehr Bettruhe).\n\n• **Durchfuehren** — Medikamente geben (NMH/Fondaparinux nach aerztlicher Anordnung), Mobilisation aktiv unterstuetzen, ggf. MTPS anlegen.\n\n• **Melden** — bei Verdacht auf TVT oder Lungenembolie **SOFORT** Arzt informieren. Nicht auf Visite warten.\n\n• **Dokumentieren** — alle Beobachtungen, Massnahmen, Auffaelligkeiten. Was nicht dokumentiert ist, gilt als nicht durchgefuehrt (§ 630f BGB).\n\nDu stellst keine Diagnosen. Du ordnest keine Medikamente an. Aber du bist die **Frontlinie** — du siehst die Zeichen zuerst.",
    kerntextB1:
      "**Was du bei der Thrombose-Vorsorge tust:**\n\n• **Schauen** — jeden Tag beide Beine vergleichen\n• **Einschaetzen** — wie hoch ist das Risiko?\n• **Machen** — Spritze geben, beim Aufstehen helfen, Struempfe anlegen\n• **Melden** — bei Verdacht SOFORT dem Arzt sagen\n• **Aufschreiben** — alles dokumentieren\n\nDu stellst keine Diagnose. Aber du bist die Erste, die etwas bemerkt.",
    faustregel:
      "**Beobachten, Assessment, Durchfuehren, Melden, Dokumentieren** — fuenf Aufgaben, eine Verantwortung: Du bist das Sicherheitsnetz.",
    faustregelB1:
      "Fuenf Aufgaben: Schauen, Einschaetzen, Machen, Melden, Aufschreiben. Du bist die Erste, die etwas bemerkt.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Aphasie — kann Symptome nicht verbalisieren",
        kurzbeschreibung:
          "Bei ihm ist aktive pflegerische Beobachtung besonders wichtig, weil er Wadenschmerz nicht benennen kann. Verhaltensaenderung (Unruhe, Grimassieren bei Beinberuehrung) als Proxy nutzen.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz — Symptom-Meldung unzuverlaessig",
        kurzbeschreibung:
          "Er vergisst Symptome oder deutet sie falsch. Die Pflege muss systematisch beobachten, nicht auf Meldungen warten. BESD-Skala bei Schmerzbeobachtung.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulant — keine taegliche Beobachtung moeglich",
        kurzbeschreibung:
          "Im ambulanten Setting liegt die Beobachtung teilweise beim Patienten selbst oder den Angehoerigen. Aufklaerung ueber Warnzeichen ist hier die Kernaufgabe der Pflege.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Nenne die fuenf pflegerischen Kernaufgaben bei der Thromboseprophylaxe.",
      rueckseite:
        "(1) Beobachten (Beine vergleichen, Vitalzeichen), (2) Assessment (Risiko-Einschaetzung + Dokumentation), (3) Durchfuehren (Medikamente, Mobilisation, MTPS), (4) Melden bei Verdacht (SOFORT, nicht auf Visite warten), (5) Dokumentieren (§ 630f BGB). Faustregel: **Beobachten, Assessment, Durchfuehren, Melden, Dokumentieren — du bist das Sicherheitsnetz.**",
    },
  },
};

// ============================================================================
// EXPORT — alle Inline-Wissens-Steps
// ============================================================================

export const CE02_YILMAZ_HUEFT_TEP_INLINE_WISSEN: ContentStep[] = [
  // Phase 1 — Informieren (3)
  IW_YILMAZ_01_FRUEHMOBILISATION,
  IW_YILMAZ_02_LUXATIONSPROPHYLAXE,
  IW_YILMAZ_03_FONDAPARINUX,
  // Phase 2 — Beobachten (3)
  IW_YILMAZ_04_SCHMERZ_NRS,
  IW_YILMAZ_05_VIRCHOW_TRIAS,
  IW_YILMAZ_06_TVT_ZEICHEN,
  // Phase 3 — Planen (1)
  IW_YILMAZ_07_ANALGESIE_VOR_MOBILISATION,
  // Phase 4 — Durchfuehren (2)
  IW_YILMAZ_08_KINAESTHETIK,
  IW_YILMAZ_09_30GRAD_LAGERUNG,
  // Phase 5 — Evaluieren (1)
  IW_YILMAZ_10_PFLEGE_THROMBOSE_ROLLE,
];
