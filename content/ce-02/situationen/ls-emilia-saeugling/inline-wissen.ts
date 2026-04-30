// CE-02 Situation Baby Emilia — Inline-Wissens-Bausteine
// 10 Bausteine: 5× saeuglingspflege, 2× ernaehrungsgrundlagen, 1× schmerz (KUSS Wiederbegegnung),
//               1× saeuglingspflege (SIDS), 1× saeuglingspflege (Windeldermatitis-Prävention)
// Verteilung: Phase 1 (3), Phase 2 (2), Phase 3 (2), Phase 4 (2), Phase 5 (1)
// Alle Strings: escaped ASCII quotes only, echte Umlaute, \\n\\n für Absätze
// Pipeline v9 — 2026-04-26

import type { ContentStep } from "../../../_types";

// ═══════════════════════════════════════════════════
// PHASE 1: INFORMIEREN — 3 Inline-Bausteine
// ═══════════════════════════════════════════════════

/**
 * IW-1: Obligate Nasenatmung beim Säugling
 * POSITION: VOR Step 1.5 (stillen-zitat) — Laura fragt nach dem Stillen,
 * dafür muss der Schüler das Konzept der obligaten Nasenatmung verstehen.
 */
export const CE02_EMILIA_IW_01_OBLIGATE_NASENATMUNG: ContentStep = {
  stepId: "ce02-emilia-info-01b-obligate-nasenatmung",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Hoehl/Kullick 2019 — Gesundheits- und Kinderkrankenpflege, 5. Aufl.",
    "AWMF S2k-Leitlinie Bronchiolitis 2022",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-info-obligate-nasenatmung",
  tag: "krankheitslehre",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["ernaehrungsgrundlagen"],
  transition: "Jetzt weißt du warum Emilia so wenig trinkt. Gleich wird Laura genau danach fragen.",
  contentC1: {
    title: "Warum trinkt Emilia so wenig?",
    body: "",
    glossarBegriffe: ["Obligate Nasenatmer", "Bronchiolitis"],
  },
  contentB1: {
    title: "Warum trinkt Emilia wenig?",
    body: "",
    glossarBegriffe: ["Obligate Nasenatmer", "Bronchiolitis"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-obligate-nasenatmung",
    storyAufhaenger:
      "Emilia liegt auf Lauras Arm. Sie versucht zu saugen, macht 3-4 Schlucke, lässt dann los, atmet hektisch — und versucht es wieder. Laura schaut dich fragend an. Warum kann Emilia nicht einfach weitertrinken?",
    storyAufhaengerB1:
      "Emilia versucht zu trinken. Sie macht 3-4 Schlucke und lässt dann los. Sie atmet schnell. Laura fragt dich: Warum trinkt sie so wenig?",
    kerntext:
      "Säuglinge bis zum Alter von etwa 3-6 Monaten sind **obligate Nasenatmer**. Das bedeutet: Sie können ausschließlich durch die Nase atmen — der Reflex, bei verstopfter Nase durch den Mund zu atmen, ist noch nicht entwickelt.\n\n**Die Konsequenz bei Bronchiolitis:**\n\n• RSV-Viren entzünden die kleinen Atemwege und verursachen Schleimbildung in der Nase.\n\n• Die verstopfte Nase blockiert die einzige Atemöffnung.\n\n• Beim Saugen muss der Säugling den Mund schließen — aber er kann nicht gleichzeitig durch die Nase atmen.\n\n• Ergebnis: **Saugen-Atmen-Konflikt** — Emilia muss nach wenigen Schlucken loslassen, um zu atmen.\n\nDie Trinkschwäche ist also keine Schwäche des Kindes und kein Problem der Milch — sondern ein mechanisches Problem der verstopften Nase. *(Hoehl/Kullick, 2019; AWMF S2k 2022)*",
    kerntextB1:
      "Babys bis etwa 3-6 Monate können **nur durch die Nase atmen**. Sie sind obligate Nasenatmer. Durch den Mund atmen können sie noch nicht.\n\n**Was passiert bei Emilia?**\n\n• Das RS-Virus macht Schleim in der Nase.\n\n• Die Nase ist verstopft.\n\n• Beim Saugen muss Emilia den Mund schließen.\n\n• Aber sie kann nicht durch die Nase atmen.\n\n• Deshalb lässt sie nach 3-4 Schlucken los — sie muss atmen.\n\nEmilia trinkt nicht wenig, weil die Milch falsch ist. Sie trinkt wenig, weil ihre Nase zu ist.",
    faustregel:
      "**Nase zu = Trinken unmöglich** — beim Säugling geht Atmen immer vor Saugen.",
    faustregelB1:
      "Nase zu = trinken geht nicht. Atmen ist immer wichtiger als saugen.",
    spektrum: [
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Dysphagie nach Apoplex",
        kurzbeschreibung:
          "Bei Erwachsenen ist der Saugen-Atmen-Konflikt selten — aber bei Herrn Petrov nach Schlaganfall verursacht die Dysphagie ein ähnliches Problem: Schlucken und Atmen sind entkoppelt. Aspirationsrisiko statt Trinkschwäche.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas, Reflux, Schlafapnoe",
        kurzbeschreibung:
          "Bei Frau Schmidt liegt die Atembehinderung nicht an der Nase, sondern an Körpergewicht und Reflux. Atemweg-Probleme beim Essen nehmen bei Erwachsenen andere Formen an.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "COPD, Dyspnoe bei Belastung",
        kurzbeschreibung:
          "Frau Kovac hat COPD — Atemnot bei Anstrengung. Essen ist für sie anstrengend wegen der Atemarbeit. Prinzip ähnlich: Atmen konkurriert mit Essen.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Emilia trinkt nur 3-4 Schlucke und lässt dann los. Die Nase ist voll Schleim. Warum kann sie nicht weitertrinken?",
      rueckseite:
        "Säuglinge sind obligate Nasenatmer — sie atmen nur durch die Nase. Verstopfte Nase = Saugen-Atmen-Konflikt: Beim Saugen (Mund geschlossen) kann der Säugling nicht durch die blockierte Nase atmen. Lösung: Nasenpflege vor jeder Mahlzeit. Spektrum: Petrov (Dysphagie), Schmidt (Adipositas-Reflux), Kovac (COPD-Dyspnoe). Faustregel: **Nase zu = Trinken unmöglich.**",
    },
  },
};

/**
 * IW-2: Säuglingsernährung — Muttermilch bei Infektion
 * POSITION: VOR Step 1.5 (stillen-zitat) — direkter Vorlauf zu Lauras Frage
 * ob ihre Milch das Problem ist.
 */
export const CE02_EMILIA_IW_02_MUTTERMILCH_INFEKTION: ContentStep = {
  stepId: "ce02-emilia-info-02b-muttermilch-infektion",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "WHO 2023 — Breastfeeding Recommendations",
    "Hoehl/Kullick 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-info-muttermilch-wert",
  tag: "pflege",
  themaPrimaer: "ernaehrungsgrundlagen",
  themenSekundaer: ["saeuglingspflege"],
  transition: "Jetzt kommt der Moment: Laura fragt dich direkt danach.",
  contentC1: {
    title: "Muttermilch bei Infektion — schaden oder helfen?",
    body: "",
    glossarBegriffe: ["Antikörper", "IgA", "Muttermilch"],
  },
  contentB1: {
    title: "Ist die Muttermilch das Problem?",
    body: "",
    glossarBegriffe: ["Antikörper", "Muttermilch"],
  },
  inlineWissen: {
    bausteinRef: "ernaehrungsgrundlagen-muttermilch-infektion",
    storyAufhaenger:
      "Laura stillt Emilia seit 4 Monaten vollständig. Jetzt trinkt Emilia kaum noch. Lauras größte Angst: \"Ist meine Milch das Problem?\" Bevor du Laura antwortest — was sagt die Evidenz?",
    storyAufhaengerB1:
      "Laura stillt Emilia seit 4 Monaten. Jetzt trinkt Emilia wenig. Laura denkt: Vielleicht ist meine Milch schuld. Stimmt das?",
    kerntext:
      "Muttermilch ist bei Atemwegsinfekten nicht das Problem — sie ist Teil der Lösung.\n\n**Drei Gründe:**\n\n• **Sekretorisches IgA (sIgA):** Muttermilch enthält Antikörper, die die Schleimhäute des Säuglings direkt schützen — auch gegen RSV. Diese Antikörper kann der Säugling nicht selbst bilden.\n\n• **Leichtere Verdaulichkeit:** Muttermilch wird schneller verdaut als Formulamilch. Bei einem erschöpften Säugling bedeutet das: weniger Energieaufwand für die Verdauung.\n\n• **WHO-Empfehlung (2023):** Stillen bei Atemwegsinfekten ausdrücklich weiter empfohlen — häufiger, kürzer, in aufrechter Position.\n\n**Für die Praxis:** Das Problem ist die verstopfte Nase, nicht die Milch. Maßnahme: Nase reinigen vor jeder Mahlzeit. Häufigere, kürzere Stillmahlzeiten anbieten.",
    kerntextB1:
      "Muttermilch ist nicht das Problem. Sie hilft sogar.\n\n• Muttermilch enthält **Antikörper** (= Abwehrstoffe, z.B. IgA). Die schützen Emilias Schleimhäute gegen das RS-Virus.\n\n• Muttermilch ist leichter zu verdauen als Flaschenmilch.\n\n• Die **WHO** sagt (2023): Weiterstillen bei Atemwegsinfektion. Öfter, kürzer, aufrecht.\n\nDas Problem ist die verstopfte Nase. Maßnahme: Nase reinigen vor dem Stillen.",
    faustregel:
      "**Muttermilch heilt mit** — sie ist bei Infektion Medikament und Nahrung zugleich.",
    faustregelB1:
      "Muttermilch ist bei Infektion nicht das Problem — sie ist die Hilfe.",
    spektrum: [
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas, Mangelernährung bei Übergewicht",
        kurzbeschreibung:
          "Bei Frau Schmidt ist Ernährung das Hauptthema — aber als Erwachsene. Die Frage \"ist mein Essen das Problem?\" stellt sich bei ihr anders: Überernährung statt Unterernährung.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Dysphagie, enterale Ernährung",
        kurzbeschreibung:
          "Bei Herrn Petrov ist die Frage: Welche Nahrung kann er schlucken (IDDSI-Stufen)? Bei Emilia ist die Nahrung richtig — nur der Weg ist blockiert.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Stoma, post-OP Ernährungsaufbau",
        kurzbeschreibung:
          "Bei Herrn Nguyen ist die Nahrungsaufnahme durch ein Stoma verändert. Die Grundfrage \"passt die Nahrung zum Zustand?\" ist bei jedem Patienten anders.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Laura fragt: \"Ist meine Milch das Problem?\" Emilia hat RSV-Bronchiolitis und trinkt kaum. Was sagst du?",
      rueckseite:
        "Nein. Muttermilch enthält sekretorisches IgA (Antikörper gegen RSV), ist leichter verdaulich und wird von der WHO 2023 bei Atemwegsinfekten ausdrücklich empfohlen. Problem ist die verstopfte Nase (obligate Nasenatmung), nicht die Milch. Maßnahme: Nasenpflege vor Stillen, häufiger, kürzer, aufrecht. Faustregel: **Muttermilch heilt mit.**",
    },
  },
};

/**
 * IW-3: SBAR-Übergabestruktur
 * POSITION: VOR Step 1.1 (vorbereitung-akte) — SBAR kommt sofort in der Akte vor.
 * Wenn der Schüler SBAR nicht kennt, versteht er die Übergabe-Dokumentation nicht.
 */
export const CE02_EMILIA_IW_03_SBAR: ContentStep = {
  stepId: "ce02-emilia-info-00b-sbar-uebergabe",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 1,
  kompetenzbereich: "I.1",
  quellen: [
    "Hoehl/Kullick 2019",
    "NHS Institute for Innovation 2010 — SBAR Communication Tool",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-info-sbar-grundlagen",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["pflegedokumentation"],
  transition: "Jetzt liest du die Aufnahmedokumentation — sie folgt genau diesem Schema.",
  contentC1: {
    title: "SBAR — die Sprache der Übergabe",
    body: "",
    glossarBegriffe: ["SBAR"],
  },
  contentB1: {
    title: "SBAR — das Übergabe-Schema",
    body: "",
    glossarBegriffe: ["SBAR"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-sbar-uebergabe",
    storyAufhaenger:
      "Schwester Andrea gibt dir die Übergabe zu Emilia. Sie spricht schnell und strukturiert — in vier Blöcken. Dieses Schema heißt SBAR. Es sorgt dafür, dass keine Information verloren geht — auch nachts um 3:15 Uhr.",
    storyAufhaengerB1:
      "Schwester Andrea erklärt dir alles zu Emilia. Sie nutzt dafür ein Schema mit 4 Teilen. Das Schema heißt SBAR. Es hilft, nichts Wichtiges zu vergessen.",
    kerntext:
      "**SBAR** ist ein standardisiertes Übergabe-Schema aus der Luftfahrt, das in der Pflege weltweit eingesetzt wird.\n\n**S — Situation:** Was ist gerade los? (Emilia: Trinkschwäche, Fieber 38,2 °C)\n\n**B — Background:** Was ist der Hintergrund? (bisher gesundes Kind, Erstgebärende, allein erziehend)\n\n**A — Assessment:** Wie schätze ich die Situation ein? (leicht erhöhte Atemfrequenz 50/min, kein Sauerstoffbedarf, Turgor noch erhalten)\n\n**R — Recommendation:** Was empfehle ich als nächsten Schritt? (Flüssigkeitsstatus engmaschig überwachen, Mutter begleiten)\n\n**Warum funktioniert es?** Schätzungen zeigen: Unstrukturierte Übergaben verlieren durchschnittlich bis zu 30% der relevanten Informationen. SBAR reduziert Informationsverluste erheblich — auf unter 5% in strukturierten Settings. *(NHS Institute 2010; Hoehl/Kullick 2019)*",
    kerntextB1:
      "**SBAR** ist ein Schema für Übergaben. Es hat 4 Teile:\n\n**S** = Situation: Was ist das Problem? (Emilia trinkt wenig, hat Fieber)\n\n**B** = Background (= Hintergrund): Was ist wichtig? (bisher gesundes Kind, junge Mutter)\n\n**A** = Assessment (= Einschätzung): Wie ist der Zustand? (atmet schnell, kein Sauerstoff nötig)\n\n**R** = Recommendation (= Empfehlung): Was soll gemacht werden? (Flüssigkeit beobachten)\n\nOhne Schema verliert man bei einer Übergabe bis zu 30% der Informationen. Mit SBAR deutlich weniger.",
    faustregel:
      "**SBAR = 4 Sätze, null vergessen** — Situation, Background, Assessment, Recommendation.",
    faustregelB1:
      "SBAR = 4 Teile. So vergisst du nichts bei der Übergabe.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Nachtsturz, Notfall-Übergabe",
        kurzbeschreibung:
          "Bei Frau M. wirst du SBAR in der Notfallsituation nutzen — um dem Nachtarzt in 60 Sekunden alles Wichtige zu sagen.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Apoplex, komplexe Übergabe",
        kurzbeschreibung:
          "Bei Herrn Petrov ist die Übergabe besonders komplex: Hemiparese, Dysphagie, Katheter, Stimmung. SBAR hält die Struktur.",
      },
      {
        patientName: "Frau Kovac",
        situationsId: "ls-kovac-ambulant",
        hauptfaktor: "Ambulant, Hausarzt-Kommunikation",
        kurzbeschreibung:
          "Bei Frau Kovac nutzt du SBAR im ambulanten Kontext — zum Beispiel beim Telefonat mit dem Hausarzt über eine Verschlechterung.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was bedeutet SBAR — und warum ist es bei der Übergabe wichtig?",
      rueckseite:
        "S = Situation (Was ist los?), B = Background (Hintergrund), A = Assessment (Einschätzung), R = Recommendation (Empfehlung). Unstrukturierte Übergaben verlieren bis zu 30% der Info — SBAR reduziert Verluste erheblich. Spektrum: Frau M. (Notfall), Petrov (komplex), Kovac (ambulant). Faustregel: **4 Sätze, null vergessen.**",
    },
  },
};

// ═══════════════════════════════════════════════════
// PHASE 2: BEOBACHTEN — 2 Inline-Bausteine
// ═══════════════════════════════════════════════════

/**
 * IW-4: Exsikkose-Zeichen beim Säugling
 * POSITION: VOR Step 2.1 (hautturgor-brilliant) — bevor der Schüler den Turgor
 * visuell beurteilen soll, muss er wissen was Exsikkose ist.
 */
export const CE02_EMILIA_IW_04_EXSIKKOSE: ContentStep = {
  stepId: "ce02-emilia-beob-00b-exsikkose-zeichen",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Hoehl/Kullick 2019",
    "AWMF S2k-Leitlinie Bronchiolitis 2022",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-beob-exsikkose-grundlagen",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["ernaehrungsgrundlagen"],
  transition: "Jetzt schaust du dir Emilias Haut genau an — und erkennst die Zeichen selbst.",
  contentC1: {
    title: "Exsikkose beim Säugling — die Gefahr hinter der Trinkschwäche",
    body: "",
    glossarBegriffe: ["Exsikkose", "Hautturgor", "Fontanelle"],
  },
  contentB1: {
    title: "Austrocknung beim Baby erkennen",
    body: "",
    glossarBegriffe: ["Exsikkose", "Hautturgor", "Fontanelle"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-exsikkose-zeichen",
    storyAufhaenger:
      "Emilia trinkt seit 48 Stunden deutlich weniger. Nur 3 nasse Windeln in 12 Stunden statt der üblichen 5-6. Was passiert im Körper, wenn ein 4 Monate alter Säugling zu wenig Flüssigkeit aufnimmt?",
    storyAufhaengerB1:
      "Emilia trinkt seit 2 Tagen weniger. Nur 3 nasse Windeln in 12 Stunden statt 5-6. Was bedeutet das für ihren Körper?",
    kerntext:
      "**Exsikkose** (= Austrocknung) ist die wichtigste Komplikation bei Trinkschwäche im Säuglingsalter. Säuglinge sind besonders gefährdet, weil ihr **Wasseranteil am Körpergewicht** höher ist als bei Erwachsenen (ca. 75% vs. 60%) und der Flüssigkeitsumsatz pro kg schneller abläuft.\n\n**Zeichen der Exsikkose beim Säugling:**\n\n• **Hautturgor reduziert:** Haut bleibt als Falte stehen (Bauch oder Unterarm prüfen)\n\n• **Fontanelle eingefallen:** Die weiche Stelle am Kopf sinkt ein\n\n• **Mundschleimhaut trocken:** Lippen und Mundraum nicht feucht\n\n• **Weniger nasse Windeln:** <4 pro 24 h beim gestillten Säugling = auffällig\n\n• **Kein Tränenfluss** beim Weinen\n\n**Bei Emilia:** Turgor noch erhalten, Fontanelle flach — das sind gute Zeichen. Aber 3 Windeln in 12 h ist die Grenze. *(Hoehl/Kullick, 2019)*",
    kerntextB1:
      "**Exsikkose** bedeutet Austrocknung. Babys sind besonders gefährdet, weil ihr Körper zu 75% aus Wasser besteht.\n\n**Zeichen von Austrocknung:**\n\n• Haut bleibt als Falte stehen (= Hautturgor reduziert)\n\n• Fontanelle (= weiche Stelle am Kopf) sinkt ein\n\n• Mund und Lippen trocken\n\n• Weniger als 4 nasse Windeln in 24 Stunden\n\n• Kein Tränenfluss beim Weinen\n\nBei Emilia ist die Haut noch normal. Die Fontanelle ist noch flach. Aber 3 Windeln in 12 Stunden ist an der Grenze.",
    faustregel:
      "**<4 nasse Windeln in 24 h = Alarm** — beim Säugling ist die Windel dein Flüssigkeitsmesser.",
    faustregelB1:
      "Weniger als 4 nasse Windeln in 24 Stunden = Alarm. Die Windel zeigt dir, ob das Baby genug trinkt.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, vergisst zu trinken",
        kurzbeschreibung:
          "Bei Herrn Bauer entsteht Exsikkose, weil er durch die Demenz das Trinken vergisst. Die Zeichen sind ähnlich: trockene Schleimhaut, stehende Hautfalte — aber am Handrücken geprüft, nicht am Bauch.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP, Nüchternheit vor OP",
        kurzbeschreibung:
          "Frau Yilmaz war vor der Hüft-OP nüchtern. Nach OP: Bilanzierung, i.v.-Flüssigkeit, langsamer oraler Aufbau. Das Prinzip ist gleich: Einfuhr kontrollieren.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas, paradoxe Unterversorgung",
        kurzbeschreibung:
          "Bei Frau Schmidt besteht trotz Übergewicht ein Risiko für Dehydratation — besonders bei diuretischer Therapie. Exsikkose ist nicht nur ein Thema bei Untergewicht.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Emilia hat 3 nasse Windeln in 12 Stunden. Normalerweise 5-6 pro Tag. Welche Gefahr droht — und welche 5 Zeichen beobachtest du?",
      rueckseite:
        "Exsikkose (Austrocknung). 5 Zeichen: Hautturgor reduziert, Fontanelle eingefallen, Mundschleimhaut trocken, <4 nasse Windeln/24h, kein Tränenfluss. Säuglinge: 75% Wasseranteil, schneller Umsatz. Spektrum: Bauer (vergisst Trinken), Yilmaz (post-OP nüchtern), Schmidt (Diuretika). Faustregel: **<4 Windeln/24h = Alarm.**",
    },
  },
};

/**
 * IW-5: KUSS-Schmerzskala — Wiederbegegnung
 * POSITION: VOR Step 2.5 (temperatur-messen) — beim rektalen Fiebermessen zeigt
 * Emilia Unbehagen. Der Schüler soll Schmerzzeichen beim Säugling erkennen.
 * KUSS wurde in CE-10/schmerz-kind zentral gelehrt — hier Wiederbegegnung.
 */
export const CE02_EMILIA_IW_05_KUSS_WIEDERBEGEGNUNG: ContentStep = {
  stepId: "ce02-emilia-beob-04b-kuss-wiederbegegnung",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP 2020 — Expertenstandard Schmerzmanagement in der Pflege",
    "Hoehl/Kullick 2019",
    "Büttner W./Finke W. (2000) — KUSS-Validierungsstudie",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-beob-kuss-schmerzskala",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["schmerz"],
  transition: "Jetzt misst du Emilias Temperatur — und beobachtest dabei genau diese 5 Zeichen.",
  contentC1: {
    title: "Schmerz beim Säugling — die KUSS-Skala",
    body: "",
    glossarBegriffe: ["KUSS", "Schmerzassessment"],
  },
  contentB1: {
    title: "Schmerz beim Baby messen — die KUSS-Skala",
    body: "",
    glossarBegriffe: ["KUSS"],
  },
  inlineWissen: {
    bausteinRef: "schmerz-kind-kuss-skala",
    storyAufhaenger:
      "Beim rektalen Fiebermessen zieht Emilia die Beine an und beginnt zu weinen. Laura fragt besorgt: \"Tut ihr das weh?\" Emilia kann dir nicht sagen ob sie Schmerzen hat — wie misst du Schmerz bei einem Säugling?",
    storyAufhaengerB1:
      "Beim Fiebermessen zieht Emilia die Beine an und weint. Laura fragt: \"Tut ihr das weh?\" Emilia kann nicht sprechen. Wie erkennst du Schmerz bei einem Baby?",
    kerntext:
      "Die **KUSS-Skala** (Kindliche Unbehagens- und Schmerz-Skala) ist das Standardinstrument für Schmerzmessung bei Säuglingen und Kleinkindern von 0-4 Jahren.\n\n**5 Beobachtungskategorien** (je 0-2 Punkte):\n\n• **Weinen:** kein / Stöhnen / Schreien\n\n• **Gesichtsausdruck:** entspannt / verzerrt / grimassierend\n\n• **Rumpfhaltung:** neutral / angespannt / aufbäumend\n\n• **Beinhaltung:** locker / strampelnd / angezogen\n\n• **Motorische Unruhe:** keine / mäßig / ruhelos\n\n**Schwellenwert:** KUSS **≥4 Punkte = Schmerz** — Intervention notwendig!\n\n**Warum nicht NRS?** NRS (0-10) braucht Verbalisierung — ein Säugling kann keine Zahl nennen. Die KUSS beobachtet stattdessen Verhalten. Ab ca. 4 Jahren wird die FPS-R (Gesichterskala) eingesetzt, ab ca. 8 Jahren die NRS. *(Büttner/Finke 2000; DNQP 2020)*",
    kerntextB1:
      "Die **KUSS-Skala** misst Schmerz bei Babys und kleinen Kindern (0-4 Jahre).\n\nDu beobachtest **5 Dinge** (je 0, 1 oder 2 Punkte):\n\n• Weint das Kind?\n• Wie sieht das Gesicht aus?\n• Wie liegt der Körper?\n• Was machen die Beine?\n• Ist das Kind unruhig?\n\n**KUSS 4 oder mehr = Schmerz!** Du musst etwas tun.\n\nBabys können nicht sagen: \"Ich habe Schmerzen.\" Deshalb beobachtest du stattdessen. Die NRS-Skala (0-10 Punkte) funktioniert erst ab ca. 8 Jahren.",
    faustregel:
      "**KUSS ≥4 = handeln** — bei Säuglingen beobachtest du Schmerz, du fragst ihn nicht.",
    faustregelB1:
      "KUSS 4 oder mehr = Schmerz. Bei Babys beobachtest du statt zu fragen.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "NRS bei wacher Erwachsener",
        kurzbeschreibung:
          "Bei Frau M. nutzt du die NRS (0-10). Sie kann dir sagen: \"Die Hüfte tut weh — ich sage 7.\" Das ist die einfachste Form der Schmerzmessung.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, BESD-Skala",
        kurzbeschreibung:
          "Bei Herrn Bauer (Demenz) funktioniert die NRS nicht mehr zuverlässig. Hier nutzt du die BESD — eine verhaltensbasierte Skala, ähnlich wie KUSS, aber für demente Erwachsene.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP Schmerz, NRS in Ruhe/Bewegung",
        kurzbeschreibung:
          "Bei Frau Yilmaz misst du NRS getrennt: in Ruhe und bei Bewegung. Post-OP-Schmerz kann in Ruhe 3/10 und bei Mobilisation 7/10 sein — beides dokumentieren.",
      },
    ],
    wiederbegegnung: {
      basisBausteinId: "schmerz-kind-kuss-skala",
      basisPatient: "Lukas K. (CE-02, Verbrühung)",
      vertiefung:
        "Die KUSS kennst du bereits vom Schmerzmanagement bei Kindern. Bei Emilia ist die Besonderheit: Du nutzt KUSS nicht wegen eines Eingriffs, sondern zur Beurteilung ob alltägliche Pflegemaßnahmen (Fiebermessen, Nasenpflege) Schmerz verursachen. KUSS ≥4 auch bei Routinemaßnahmen = Schmerzlinderung vor Wiederholung.",
      vertiefungB1:
        "KUSS kennst du schon. Bei Emilia nutzt du sie bei normalen Pflegemaßnahmen: Fiebermessen, Nase reinigen. Wenn KUSS 4 oder mehr: erst Schmerz lindern, dann nochmal versuchen.",
    },
    karteikarte: {
      vorderseite:
        "Emilia weint beim Fiebermessen, zieht die Beine an, verzieht das Gesicht. Welche Schmerzskala nutzt du — und ab wann handelst du?",
      rueckseite:
        "KUSS (Kindliche Unbehagens- und Schmerz-Skala), 0-4 Jahre: 5 Kategorien (Weinen, Mimik, Rumpf, Beine, Unruhe), je 0-2 Punkte. Schwellenwert: ≥4 = Intervention. NRS erst ab ~8 J. (Verbalisierung nötig). Spektrum: Frau M. (NRS), Bauer (BESD bei Demenz), Yilmaz (NRS Ruhe/Bewegung). Faustregel: **KUSS ≥4 = handeln.**",
    },
  },
};

// ═══════════════════════════════════════════════════
// PHASE 3: PLANEN — 2 Inline-Bausteine
// ═══════════════════════════════════════════════════

/**
 * IW-6: Flüssigkeitsbedarf beim Säugling
 * POSITION: VOR Step 3.2 (fluessigkeitsbilanz-konzept) — der Schüler muss den
 * Tagesbedarf kennen, bevor er die Bilanz berechnet.
 */
export const CE02_EMILIA_IW_06_FLUESSIGKEITSBEDARF: ContentStep = {
  stepId: "ce02-emilia-plan-01b-fluessigkeitsbedarf",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Hoehl/Kullick 2019",
    "EFSA 2010 — Scientific Opinion on Dietary Reference Values for water",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-plan-fluessigkeitsbedarf",
  tag: "pflege",
  themaPrimaer: "ernaehrungsgrundlagen",
  themenSekundaer: ["saeuglingspflege"],
  transition: "Jetzt weißt du wie viel Emilia braucht. Als nächstes lernst du die Bilanz zu führen.",
  contentC1: {
    title: "Flüssigkeitsbedarf beim Säugling — die Zahlen",
    body: "",
    glossarBegriffe: ["Flüssigkeitsbedarf", "ml/kg/Tag"],
  },
  contentB1: {
    title: "Wie viel muss Emilia trinken?",
    body: "",
    glossarBegriffe: ["Flüssigkeitsbedarf"],
  },
  inlineWissen: {
    bausteinRef: "ernaehrungsgrundlagen-fluessigkeitsbedarf-saeugling",
    storyAufhaenger:
      "Du planst die Flüssigkeitsbilanz für Emilia. Aber um zu wissen ob sie genug trinkt, musst du erst wissen: Wie viel Flüssigkeit braucht ein 4 Monate alter, 5,6 kg schwerer Säugling pro Tag?",
    storyAufhaengerB1:
      "Du planst die Flüssigkeitsbilanz. Aber zuerst: Wie viel muss Emilia pro Tag trinken? Sie wiegt 5,6 kg und ist 4 Monate alt.",
    kerntext:
      "**Flüssigkeitsbedarf im Säuglingsalter:**\n\n• **Faustformel:** ca. **150 ml pro kg Körpergewicht pro Tag** im 1. Lebenshalbjahr\n\n• **Emilia (5,6 kg):** 5,6 × 150 = ca. **840 ml pro Tag**\n\n• Gestillte Säuglinge erhalten ihre gesamte Flüssigkeit über die Muttermilch — zusätzliches Wasser ist vor dem 6. Monat nicht empfohlen (WHO 2023)\n\n**Warum ist der Bedarf so hoch?**\n\n• Säuglinge haben einen **höheren Wasseranteil** (ca. 75% des Körpergewichts vs. 60% bei Erwachsenen)\n\n• Der **Flüssigkeitsumsatz** pro kg ist 2-3x schneller als beim Erwachsenen\n\n• Die Nieren können Urin noch nicht stark konzentrieren — mehr Flüssigkeit wird ausgeschieden\n\n**Bei Emilia:** 840 ml Ziel — sie hat gestern geschätzt nur 280 ml erreicht. Das ist ein Drittel des Bedarfs. *(Hoehl/Kullick 2019; EFSA 2010)*",
    kerntextB1:
      "**Wie viel Flüssigkeit braucht ein Baby?**\n\n• Faustregel: **150 ml pro kg pro Tag**\n\n• Emilia wiegt 5,6 kg: 5,6 × 150 = ca. **840 ml pro Tag**\n\n• Gestillte Babys bekommen alles über die Muttermilch. Kein extra Wasser vor dem 6. Monat.\n\n**Warum so viel?**\n\n• Der Körper eines Babys besteht zu 75% aus Wasser\n• Babys verbrauchen Wasser schneller als Erwachsene\n• Die Nieren sind noch unreif\n\nEmilia hat gestern nur etwa 280 ml getrunken. Das ist ein Drittel von dem was sie braucht.",
    faustregel:
      "**150 ml/kg/Tag** — beim Säugling im 1. Halbjahr. Emilia braucht ~840 ml.",
    faustregelB1:
      "150 ml pro Kilo pro Tag. Emilia braucht etwa 840 ml am Tag.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, Trinkprotokoll",
        kurzbeschreibung:
          "Bei Herrn Bauer liegt der Bedarf bei ca. 30 ml/kg/Tag (Erwachsene). Auch hier: Trinkprotokoll, weil er vergisst zu trinken.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Dysphagie, parenterale Flüssigkeit",
        kurzbeschreibung:
          "Bei Herrn Petrov wird Flüssigkeit teils i.v. gegeben, weil er nicht genug schlucken kann. Bilanzierung ist hier genauso wichtig.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas, Diuretika",
        kurzbeschreibung:
          "Bei Frau Schmidt ist der Flüssigkeitsbedarf durch Medikamente (Diuretika) erhöht. Auch Erwachsene müssen manchmal bilanziert werden.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Emilia wiegt 5,6 kg. Wie viel Flüssigkeit braucht sie pro Tag — und wie berechnest du das?",
      rueckseite:
        "Faustformel: 150 ml/kg/Tag im 1. Lebenshalbjahr. Emilia: 5,6 kg × 150 = ca. 840 ml/Tag. Ausschließlich über Muttermilch (kein Zusatzwasser vor 6. Monat, WHO 2023). Säuglinge: 75% Wasseranteil, schneller Umsatz, unreife Nieren. Spektrum: Bauer (30 ml/kg, vergisst Trinken), Petrov (i.v.), Schmidt (Diuretika). Faustregel: **150 ml/kg/Tag.**",
    },
  },
};

/**
 * IW-7: SIDS-Prävention — Schlafumgebung beim Säugling
 * POSITION: VOR Step 3.4 (schlafposition-sids) — der MC fragt die Schlafposition ab,
 * der Schüler muss vorher die Grundlagen kennen.
 */
export const CE02_EMILIA_IW_07_SIDS: ContentStep = {
  stepId: "ce02-emilia-plan-03b-sids-praevention",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AAP — American Academy of Pediatrics 2022 — Updated Safe Sleep Recommendations",
    "Hoehl/Kullick 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-plan-sids-grundlagen",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: [],
  transition: "Gleich wird Laura genau danach fragen. Du weißt jetzt die Antwort.",
  contentC1: {
    title: "SIDS-Prävention — was du wissen musst",
    body: "",
    glossarBegriffe: ["SIDS", "SIDS-Prävention", "Plötzlicher Kindstod"],
  },
  contentB1: {
    title: "SIDS-Prävention — die sichere Schlafumgebung",
    body: "",
    glossarBegriffe: ["SIDS", "Plötzlicher Kindstod"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-sids-praevention",
    storyAufhaenger:
      "Nach dem Planen fragst du dich: Wie soll Emilia schlafen? Sie hat Schnupfen — Laura wird gleich fragen ob Seitenlage bei verstopfter Nase nicht besser wäre. Was sagst du?",
    storyAufhaengerB1:
      "Emilia soll schlafen. Aber wie? Laura wird fragen: Darf Emilia auf der Seite schlafen — weil die Nase verstopft ist?",
    kerntext:
      "**SIDS** (Sudden Infant Death Syndrome = Plötzlicher Kindstod) ist die häufigste Todesursache bei Säuglingen zwischen 1 und 12 Monaten.\n\n**Die 5 AAP-Regeln (2022):**\n\n• **Rückenlage** — immer, ausnahmslos, auch bei Schnupfen oder Bronchiolitis\n\n• **Feste Matratze** — keine Wasserbetten, keine Sofas\n\n• **Kein loses Material** im Schlafbereich — kein Kissen, kein Kuscheltier, keine lockere Decke (Schlafsack statt Decke)\n\n• **Raumtemperatur 18-20 °C** — Überwärmung ist ein eigenständiger Risikofaktor\n\n• **Rauchfreie Umgebung** — Tabakexposition erhöht SIDS-Risiko signifikant\n\n**Häufiger Irrtum bei Bronchiolitis:** \"Bei verstopfter Nase ist Seitenlage besser.\" Das stimmt nicht — es gibt keine Ausnahme von der Rückenlage ohne ärztliche Anordnung. Seitenlage erhöht das Risiko, weil Säuglinge sich auf den Bauch drehen können. *(AAP, 2022; Hoehl/Kullick, 2019)*",
    kerntextB1:
      "**SIDS** = Plötzlicher Kindstod. Die häufigste Todesursache bei Babys von 1-12 Monaten.\n\n**5 Regeln (AAP 2022):**\n\n• **Immer Rückenlage** — auch bei Schnupfen\n• **Feste Matratze** — kein Sofa, kein Wasserbett\n• **Nichts im Bett** — kein Kissen, kein Kuscheltier, keine Decke (Schlafsack nehmen)\n• **Zimmer 18-20 Grad** — nicht zu warm\n• **Kein Rauch** — Rauchen erhöht das Risiko\n\nAuch wenn die Nase verstopft ist: keine Seitenlage. Nur der Arzt darf das ändern.",
    faustregel:
      "**Rücken, fest, leer, kühl, rauchfrei** — 5 Regeln gegen SIDS, keine Ausnahme.",
    faustregelB1:
      "Rücken, fest, nichts im Bett, kühl, kein Rauch — 5 Regeln. Immer.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturzprävention, Bettgitter",
        kurzbeschreibung:
          "Bei Frau M. (82 J.) ist das Thema Schlafumgebung auch relevant — aber anders: Bettgitter, Betthöhe, Nachtlicht. Bei Säuglingen geht es um SIDS, bei Älteren um Sturz.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, nächtliches Aufstehen",
        kurzbeschreibung:
          "Bei Herrn Bauer ist die sichere Schlafumgebung auch ein Thema: Niedrigbett, Sensormatten, kein beidseitiges Bettgitter (Fixierung). Prinzip gleich: Umgebung anpassen statt fixieren.",
      },
    ],
    sonstBox:
      "In unseren CE-02-Situationen nicht vertreten: **Co-Sleeping-Debatte** (Elternbett mit Säugling — risikoreich laut AAP), **Schnuller als Schutzfaktor** (schwache Evidenz, AAP empfiehlt ihn dennoch), **Babyfon-Monitoring** (kein bewiesener Schutz). Mehr dazu in CE-10 (Kinderkrankenpflege vertieft).",
    sonstBoxB1:
      "Weitere SIDS-Themen, die hier nicht vertieft werden: Schlafen im Elternbett (risikoreich), Schnuller (vielleicht schützend), Babyfon (kein bewiesener Schutz). Mehr dazu in CE-10.",
    karteikarte: {
      vorderseite:
        "Emilia hat Bronchiolitis mit verstopfter Nase. Laura fragt: Darf sie auf der Seite schlafen? Was antwortest du — und warum?",
      rueckseite:
        "Nein. Rückenlage gilt immer — auch bei Bronchiolitis. AAP 2022: 5 Regeln — Rücken, feste Matratze, nichts Loses im Bett, 18-20 °C, rauchfrei. Seitenlage = Risiko (Umdrehen auf Bauch). Keine Ausnahme ohne Arztanordnung. Spektrum: Frau M. (Sturzprävention), Bauer (Demenz, Niedrigbett). Faustregel: **Rücken, fest, leer, kühl, rauchfrei.**",
    },
  },
};

// ═══════════════════════════════════════════════════
// PHASE 4: DURCHFÜHREN — 2 Inline-Bausteine
// ═══════════════════════════════════════════════════

/**
 * IW-8: Säuglingshaut — Besonderheiten
 * POSITION: VOR Step 4.1 (bad-vorbereitung-sortierung) — bevor der Schüler das Bad
 * plant, muss er wissen warum Säuglingshaut anders ist.
 */
export const CE02_EMILIA_IW_08_SAEULINGSHAUT: ContentStep = {
  stepId: "ce02-emilia-dur-00b-saeulingshaut",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Hoehl/Kullick 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-dur-saeulingshaut",
  tag: "anatomie",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["haut"],
  transition: "Jetzt planst du das Bad — mit diesem Wissen über Emilias Haut im Hinterkopf.",
  contentC1: {
    title: "Säuglingshaut — warum sie anders ist",
    body: "",
    glossarBegriffe: ["Säureschutzmantel", "Barrierefunktion"],
  },
  contentB1: {
    title: "Babyhaut — warum sie besonders ist",
    body: "",
    glossarBegriffe: ["Säureschutzmantel"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-haut-besonderheiten",
    storyAufhaenger:
      "Du bereitest das Säuglingsbad vor. Laura fragt: \"Kann ich normales Duschgel nehmen? Das riecht so gut.\" Bevor du antwortest — warum ist Säuglingshaut eigentlich so empfindlich?",
    storyAufhaengerB1:
      "Du bereitest das Bad vor. Laura fragt: \"Kann ich normales Duschgel nehmen?\" Warum nicht? Warum ist Babyhaut anders?",
    kerntext:
      "Säuglingshaut unterscheidet sich grundlegend von Erwachsenenhaut:\n\n• **60% dünner** als Erwachsenenhaut — Wirkstoffe und Reizstoffe dringen schneller ein\n\n• **Säureschutzmantel unreif:** Bei Geburt ist der pH der Haut noch neutral (~6,5-7). Der schützende saure Film (pH 5,5) bildet sich erst über **ca. 4 Wochen**. Bis dahin: höheres Infektionsrisiko\n\n• **Große Körperoberfläche im Verhältnis zum Gewicht:** Säuglinge verlieren schneller Wärme und Feuchtigkeit als Erwachsene. Beim Baden oder Wickeln kann Auskühlung in Minuten eintreten\n\n**Konsequenz für die Pflege:**\n\n• Kein parfümiertes Duschgel, keine alkoholhaltigen Produkte\n• Wassertemperatur exakt 36-37 °C\n• Badedauer maximal 5-10 Minuten\n• Tupfen statt Rubbeln beim Abtrocknen\n\n*(Hoehl/Kullick, 2019)*",
    kerntextB1:
      "Babyhaut ist anders als deine Haut:\n\n• Sie ist **60% dünner**\n• Der **Säureschutzmantel** ist noch nicht fertig (erst nach 4 Wochen)\n• Babys haben viel Haut im Verhältnis zum Gewicht — sie frieren schnell\n\n**Was bedeutet das beim Baden?**\n\n• Kein Duschgel mit Parfüm\n• Wasser genau 36-37 Grad\n• Nur 5-10 Minuten baden\n• Danach: sanft tupfen, nicht reiben",
    faustregel:
      "**Dünner, schutzloser, kälteempfindlicher** — Säuglingshaut braucht wenig, mild und warm.",
    faustregelB1:
      "Babyhaut: dünner, kein Schutz, friert schnell. Wenig waschen, mild, warm.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus Kat. II, gestörte Hautintegrität",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist die Haut durch den Dekubitus geschädigt. Auch hier: milde Pflege, keine aggressiven Substanzen. Aber die Ursache ist Druck, nicht Unreife.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Altershaut, Pergamenthaut",
        kurzbeschreibung:
          "Bei Herrn Bauer (82 J.) ist die Haut dünn und verletzlich — aber aus Altersgründen, nicht wie bei Emilia aus Unreife. Gleiche Konsequenz: vorsichtig waschen, tupfen statt reiben.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Peristomale Haut, Reizstoffe",
        kurzbeschreibung:
          "Bei Herrn Nguyen wird die Haut um das Stoma durch Ausscheidungen gereizt. Hautschutz ist auch hier das zentrale Thema — mit anderem Auslöser.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Laura will normales Duschgel beim Säuglingsbad verwenden. Warum ist das problematisch — nenne 3 Besonderheiten der Säuglingshaut.",
      rueckseite:
        "Säuglingshaut: (1) 60% dünner — Reizstoffe dringen schnell ein. (2) Säureschutzmantel unreif (pH neutral bis ~4 Wochen). (3) Große Oberfläche/Gewicht — schnelle Auskühlung. Konsequenz: klares Wasser, 36-37 °C, max. 5-10 Min, tupfen. Spektrum: Yilmaz (Dekubitus), Bauer (Altershaut), Nguyen (peristomale Haut). Faustregel: **Dünner, schutzloser, kälteempfindlicher.**",
    },
  },
};

/**
 * IW-9: Windeldermatitis-Prävention
 * POSITION: VOR Step 4.4 (wickeln-kinaesthetik) — der Schüler wickelt Emilia
 * und soll verstehen warum korrektes Wickeln Hautschäden verhindert.
 */
export const CE02_EMILIA_IW_09_WINDELDERMATITIS: ContentStep = {
  stepId: "ce02-emilia-dur-03b-windeldermatitis-praevention",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGKJ S2k-Leitlinie Windeldermatitis 2021",
    "Hoehl/Kullick 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-dur-windeldermatitis",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["haut"],
  transition: "Jetzt wickelst du Emilia — und setzt dieses Wissen direkt um.",
  contentC1: {
    title: "Windeldermatitis — warum Wickeln mehr als Saubermachen ist",
    body: "",
    glossarBegriffe: ["Windeldermatitis", "Zinkoxid"],
  },
  contentB1: {
    title: "Windeldermatitis verhindern",
    body: "",
    glossarBegriffe: ["Windeldermatitis"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-windeldermatitis",
    storyAufhaenger:
      "Nach dem Bad wickelst du Emilia. Du öffnest die Windel und schaust: Der Windelbereich ist leicht gerötet. Laura fragt: \"Ist das normal?\" Was passiert, wenn die Haut länger feucht bleibt — und wie verhinderst du es?",
    storyAufhaengerB1:
      "Du wickelst Emilia. Die Haut im Windelbereich ist leicht rot. Laura fragt: \"Ist das normal?\" Was passiert, wenn die Haut zu lange feucht ist?",
    kerntext:
      "**Windeldermatitis** ist eine Entzündung der Haut im Windelbereich — verursacht durch den Kontakt mit Urin und Stuhl in der feuchten, warmen Umgebung.\n\n**Entstehungsmechanismus:**\n\n• Urin zersetzt sich zu Ammoniak → pH der Haut steigt → Barrierefunktion bricht zusammen\n\n• Stuhlenzyme (Lipasen, Proteasen) greifen die Haut direkt an\n\n• Feucht-warmes Milieu begünstigt Pilzbefall (Candida)\n\n**Prävention — 4 Maßnahmen:**\n\n• **Häufig wechseln:** alle 2-3 Stunden, sofort nach Stuhlgang\n\n• **Gründlich trocknen:** Haut sanft tupfen, nicht reiben, Hautfalten beachten\n\n• **Schutzbarriere:** bei Rötung Zinkoxid-Paste (bildet eine wasserabweisende Schutzschicht)\n\n• **Luft:** wenn möglich kurz ohne Windel liegen lassen (\"Windelfrei-Zeit\")\n\n*(DGKJ S2k-Leitlinie 2021; Hoehl/Kullick 2019)*",
    kerntextB1:
      "**Windeldermatitis** = rote, gereizte Haut im Windelbereich.\n\n**Warum passiert das?**\n\n• Urin + Stuhl reizen die Haut\n• Feuchtigkeit und Wärme machen es schlimmer\n• Pilze können dazukommen\n\n**4 Maßnahmen dagegen:**\n\n• Windel wechseln alle 2-3 Stunden (sofort nach Stuhl)\n• Haut gut trocknen (tupfen, nicht reiben)\n• Bei Rötung: Schutzcreme mit Zinkoxid\n• Manchmal kurz ohne Windel liegen lassen",
    faustregel:
      "**Trocken, sauber, geschützt** — die drei Wörter gegen Windeldermatitis.",
    faustregelB1:
      "Trocken, sauber, geschützt — so bleibt die Haut gesund.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-spirale2",
        hauptfaktor: "Dekubitus, Inkontinenz-assoziierte Dermatitis",
        kurzbeschreibung:
          "Bei Frau Yilmaz kann Inkontinenz ähnliche Hautschäden verursachen. IAD (Inkontinenz-assoziierte Dermatitis) beim Erwachsenen folgt dem gleichen Mechanismus: Feuchtigkeit + pH-Verschiebung + Enzyme.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Inkontinenzmaterial, Hautpflege bei Demenz",
        kurzbeschreibung:
          "Bei Herrn Bauer ist das Inkontinenzmaterial die Quelle der Feuchtigkeit. Gleiche Prävention: regelmäßig wechseln, trocknen, Hautschutz.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Emilias Haut im Windelbereich ist leicht gerötet. Was ist Windeldermatitis — und wie verhinderst du sie?",
      rueckseite:
        "Windeldermatitis = Hautentzündung durch Urin/Stuhl-Kontakt in feuchter Umgebung. Mechanismus: Ammoniak + Enzyme + Candida. Prävention: (1) Häufig wechseln (2-3h), (2) tupfen statt reiben, (3) Zinkoxid bei Rötung, (4) Windelfrei-Zeit. Spektrum: Yilmaz (IAD), Bauer (Inkontinenzmaterial). Faustregel: **Trocken, sauber, geschützt.**",
    },
  },
};

// ═══════════════════════════════════════════════════
// PHASE 5: EVALUIEREN — 1 Inline-Baustein
// ═══════════════════════════════════════════════════

/**
 * IW-10: Evaluation im Pflegeprozess — Zielüberprüfung
 * POSITION: VOR Step 5.1 (ziel-wirksamkeit) — der Schüler soll Maßnahmen nach
 * Wirksamkeit bewerten. Dafür muss er das Prinzip der Evaluation kennen.
 */
export const CE02_EMILIA_IW_10_EVALUATION: ContentStep = {
  stepId: "ce02-emilia-eval-00b-evaluation-prinzip",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981 — Der Pflegeprozess",
    "Hoehl/Kullick 2019",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-emilia-eval-prinzip",
  tag: "pflege",
  themaPrimaer: "saeuglingspflege",
  themenSekundaer: ["pflegeprozess"],
  transition: "Jetzt bewertest du selbst: Welche Maßnahmen haben bei Emilia gewirkt — und welche nicht?",
  contentC1: {
    title: "Evaluation im Pflegeprozess — warum und wie?",
    body: "",
    glossarBegriffe: ["Evaluation", "Pflegeprozess", "Pflegeziel"],
  },
  contentB1: {
    title: "Evaluation — hat es gewirkt?",
    body: "",
    glossarBegriffe: ["Evaluation", "Pflegeprozess"],
  },
  inlineWissen: {
    bausteinRef: "saeuglingspflege-evaluation-prinzip",
    storyAufhaenger:
      "Es ist 14:00 Uhr. Du kommst nach deiner Pause zurück. Andrea sagt: \"Mach die Evaluation.\" Aber was genau heißt das — und warum ist dieser Schritt so wichtig?",
    storyAufhaengerB1:
      "Es ist 14:00 Uhr. Andrea sagt: \"Mach die Evaluation.\" Was bedeutet das genau?",
    kerntext:
      "**Evaluation** ist der 5. Schritt im 6-stufigen Pflegeprozess nach Fiechter/Meier (1981). Sie beantwortet die zentrale Frage: **Wurde das Pflegeziel erreicht?**\n\n**3 mögliche Ergebnisse:**\n\n• **Ziel erreicht:** Maßnahme beibehalten oder abschließen\n\n• **Ziel teilweise erreicht:** Maßnahme anpassen, Zeitrahmen verlängern, Intensität erhöhen\n\n• **Ziel nicht erreicht:** Ursache analysieren (Ziel unrealistisch? Maßnahme falsch? Neue Probleme?), Plan komplett überarbeiten\n\n**Evaluation ist kein Beweis für Fehler** — sie ist der Motor der Pflege. Wenn ein Ziel nicht erreicht wird, heißt das nicht dass du schlecht gearbeitet hast. Es heißt: Die Situation hat sich verändert, und der Plan muss sich mitverändern.\n\n**Bei Emilia:** Ziel war 5 nasse Windeln in 24 h. Bisher 4 in 12 h — Trend positiv, aber Ziel noch nicht sicher erreicht. *(Fiechter/Meier, 1981)*",
    kerntextB1:
      "**Evaluation** = prüfen ob das Ziel erreicht wurde. Das ist Schritt 5 im Pflegeprozess.\n\n**3 mögliche Ergebnisse:**\n\n• Ziel erreicht → weiter so oder abschließen\n• Ziel teilweise erreicht → Plan anpassen\n• Ziel nicht erreicht → Ursache suchen, Plan ändern\n\nWenn ein Ziel nicht erreicht wird, heißt das nicht: Du hast schlecht gearbeitet. Es heißt: Die Situation hat sich verändert.\n\nBei Emilia: Ziel war 5 nasse Windeln in 24 Stunden. Bisher 4 in 12 Stunden. Noch nicht sicher erreicht.",
    faustregel:
      "**Evaluation = Motor, nicht Urteil** — der Plan lebt, und du passt ihn an.",
    faustregelB1:
      "Evaluation = prüfen und anpassen. Das ist kein Fehler. Das ist Pflege.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Sturz, Schmerzziel NRS <4",
        kurzbeschreibung:
          "Bei Frau M. evaluierst du ob der Hüftschmerz nach Maßnahmen unter NRS 4 gefallen ist. Wenn nicht: Eskalation an den Arzt.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP, Mobilisationsziel",
        kurzbeschreibung:
          "Bei Frau Yilmaz: Kann sie am 1. POT mit Gehwagen 5 Schritte gehen? Wenn nicht: Ursache (Schmerz? Angst? Kreislauf?) klären und Plan anpassen.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlucken, IDDSI-Stufe",
        kurzbeschreibung:
          "Bei Herrn Petrov: Kann er IDDSI-Stufe 4 schlucken ohne Aspiration? Evaluation nach jedem Schluckversuch — der Plan wird täglich angepasst.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Emilias Pflegeziel: 5 nasse Windeln in 24 h. Es sind 14:00 Uhr, bisher 4 in 12 h. Ist das Ziel erreicht — und was tust du?",
      rueckseite:
        "Teilweise erreicht. Evaluation (Fiechter/Meier 1981) kennt 3 Ergebnisse: erreicht → beibehalten, teilweise → anpassen, nicht erreicht → Plan überarbeiten. Bei Emilia: Trend positiv, aber Ziel nicht sicher. Maßnahmen fortsetzen, Nachtschicht informieren. Spektrum: Frau M. (NRS-Ziel), Yilmaz (Mobilisation), Petrov (Schlucken). Faustregel: **Evaluation = Motor, nicht Urteil.**",
    },
  },
};

// ═══════════════════════════════════════════════════
// EXPORT: Alle 10 Inline-Wissens-Bausteine
// ═══════════════════════════════════════════════════

export const CE02_EMILIA_INLINE_WISSEN: ContentStep[] = [
  // Phase 1: Informieren (3)
  CE02_EMILIA_IW_03_SBAR,                    // VOR Step 1.1
  CE02_EMILIA_IW_01_OBLIGATE_NASENATMUNG,    // VOR Step 1.5
  CE02_EMILIA_IW_02_MUTTERMILCH_INFEKTION,   // VOR Step 1.5 (nach IW-01)
  // Phase 2: Beobachten (2)
  CE02_EMILIA_IW_04_EXSIKKOSE,               // VOR Step 2.1
  CE02_EMILIA_IW_05_KUSS_WIEDERBEGEGNUNG,    // VOR Step 2.5
  // Phase 3: Planen (2)
  CE02_EMILIA_IW_06_FLUESSIGKEITSBEDARF,     // VOR Step 3.2
  CE02_EMILIA_IW_07_SIDS,                    // VOR Step 3.4
  // Phase 4: Durchführen (2)
  CE02_EMILIA_IW_08_SAEULINGSHAUT,           // VOR Step 4.1
  CE02_EMILIA_IW_09_WINDELDERMATITIS,        // VOR Step 4.4
  // Phase 5: Evaluieren (1)
  CE02_EMILIA_IW_10_EVALUATION,              // VOR Step 5.1
];
