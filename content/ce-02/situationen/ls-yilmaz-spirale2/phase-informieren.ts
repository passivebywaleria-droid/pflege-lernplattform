// CE-02 Situation Frau Yilmaz Spirale 2 — Phase 1: Informieren
// Steps: 4 Kern + 2 Optional · Bloom: B2-B3 · Zeit: ~15-20 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/phase-informieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-yilmaz-spirale2-informieren",
  phase: "informieren",
  titel: "Informieren — Wiederaufnahme Frau Yilmaz",
  titelB1: "Akte lesen — Frau Yilmaz",
  kontext:
    "Du stehst im Dienstzimmer. Frühdienst, 06:55 Uhr. Die Nachtschwester übergibt kurz mündlich, dann liest du die digitale Pflegedokumentation zu Frau Yilmaz. Sie ist 14 Tage post-OP, läuft mit Rollator, soll in 3-4 Tagen entlassen werden. Im freien Textfeld der Spätschicht steht eine handschriftliche Notiz: 'Rötung Sakrum — morgen schauen.' Mehr steht nicht da. Frau Schäfer sagt: 'Ich weiß auch nicht mehr als du. Die Kollegin war allein auf dem Flur. Geh schauen.'",
  kontextB1:
    "Du bist im Dienstzimmer. Es ist 06:55 Uhr — Frühdienst. Du liest die Pflegeakte am Computer. Du weißt: Frau Yilmaz ist seit 14 Tagen nach der Operation hier. Sie läuft mit Rollator. In 3-4 Tagen soll sie nach Hause. In der Akte steht eine kurze Notiz: 'Rötung am Steißbein — morgen schauen.' Das ist alles. Kein Befund. Kein Name. Frau Schäfer sagt: 'Ich weiß auch nicht mehr. Geh und schau selbst.'",
  kernSteps: [
    // Step 1.1 — Text (scenario): SBAR-Akte lesen
    {
      stepId: "ce02-yilmaz-s2-info-01-uebergabe-lesen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB", "DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-s2-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      transition: "In der Akte steht eine Notiz: Roetung Sakrum. Aber was genau ist ein Dekubitus eigentlich?",
      bildkategorie: "szene",
      imageAlt:
        "Pflegekraft liest digitale Pflegeakte an einem Stationscomputer im Frühdienst, warmes Licht",
      bildhinweis:
        "Hospital nurses station, morning shift, nurse reading digital patient file on screen, warm early morning light, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Die Akte — was steht drin?",
        body: "Dienstzimmer, 06:55 Uhr — Frühdienst.\n\nDu öffnest die digitale Pflegekurve für Frau Yilmaz, Zimmer 7. Die Übergabe in SBAR-Struktur: **S** = 'Rötung Sakrum gesehen, kein Schmerz, keine Maßnahmen.' **B** = 'Hüft-TEP Tag 13, Diabetes Typ 2, Adipositas BMI 34, Rollator-Mobilisation.' **A** = 'Wunde TEP-seitig reizlos, Rötung Sakrum nicht dokumentiert.' **R** = 'Morgen Früh genau schauen.' Das Entscheidende: Die Kollegin hat etwas gesehen — aber es nicht dokumentiert. Was nicht in der Akte steht, gilt als nicht geschehen. (§ 630f BGB)",
        fallbezug:
          "Frau Yilmaz (79, Hüft-TEP Tag 14) wird heute entlassen? Nicht sicher. Erst wenn du gesehen hast, was am Steißbein ist.",
        glossarBegriffe: ["SBAR", "§ 630f BGB"],
      },
      contentB1: {
        title: "Was steht in der Akte?",
        body: "Dienstzimmer, 06:55 Uhr — Frühdienst.\n\nDu liest die Pflegeakte am Computer. Du siehst eine kurze Notiz von der Spätschicht: **S** = 'Rötung Steißbein gesehen, kein Schmerz, keine Maßnahmen.' **B** = 'Hüft-OP vor 13 Tagen, Zuckerkrankheit, Übergewicht, läuft mit Rollator.' **A** = 'Hüftwunde gut, Rötung Steißbein nicht aufgeschrieben.' **R** = 'Morgen früh genau schauen.' Wichtig: Was nicht aufgeschrieben ist, gilt als nicht passiert. Das steht im Gesetz (§ 630f BGB).",
        fallbezug:
          "Frau Yilmaz ist 79 Jahre alt. Sie hat eine Hüft-OP vor 14 Tagen. Heute bist du für sie zuständig.",
        glossarBegriffe: ["§ 630f BGB"],
      },
    },

    // Step 1.1b — Inline-Wissen: Was ist ein Dekubitus? (Definition + Kategorien-Ueberblick)
    // Frau Yilmaz hat Dekubitus Kat. II — der Schueler braucht die Grunddefinition BEVOR er
    // die Risikofaktoren (Flipcard 1.2) und die Wundinspektion (Phase 2) angeht.
    {
      stepId: "ce02-yilmaz-s2-info-01b-was-ist-dekubitus",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA 2019 — International Guideline",
        "DNQP 2024 — Expertenstandard Dekubitusprophylaxe (2. Aktualisierung)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-info-dekubitus-definition",
      tag: "pflege",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut"],
      transition: "Jetzt weisst du was ein Dekubitus ist. Frau Yilmaz bringt ein ganzes Buendel an Risiken mit.",
      contentC1: {
        title: "Was ist ein Dekubitus?",
        body: "",
        glossarBegriffe: ["Dekubitus", "Druckgeschwür", "NPUAP/EPUAP", "Kategorie I-IV", "Braden-Skala", "Hyperglykämie", "Mikrozirkulationsstörung", "Prädilektionsstelle", ],
      },
      contentB1: {
        title: "Was ist ein Dekubitus?",
        body: "",
        glossarBegriffe: ["Dekubitus", "Druckgeschwür"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-was-ist-dekubitus",
        storyAufhaenger:
          "In der Akte steht: \"Roetung Sakrum.\" Die Kollegin hat es nicht weiter dokumentiert. Aber als du gleich das Zimmer betrittst, wirst du mehr sehen als eine Roetung. Was genau ist ein Dekubitus — und ab wann wird aus Prophylaxe Therapie?",
        storyAufhaengerB1:
          "In der Akte steht: \"Roetung am Steissbein.\" Aber du wirst gleich sehen: Es ist mehr als eine Roetung. Was ist ein Dekubitus genau?",
        kerntext:
          "Ein **Dekubitus** (umgangssprachlich: Druckgeschwür) ist eine **lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes**, verursacht durch **anhaltenden Druck** oder Druck in Kombination mit Scherkräften (NPUAP/EPUAP/PPPIA 2019).\n\n**Die 4 Kategorien:**\n\n• **Kategorie I** — Intakte Haut, nicht-wegdrückbare Roetung. Fingertest positiv: Drückst du drauf, bleibt es rot.\n\n• **Kategorie II** — Teilverlust der Haut: flache offene Wunde (Erosion) oder Blase. Hier steht Frau Yilmaz.\n\n• **Kategorie III** — Vollständiger Hautverlust bis in die Subkutis. Tiefe Wunde, evtl. Taschenbildung.\n\n• **Kategorie IV** — Vollständiger Gewebeverlust mit freiliegendem Knochen, Sehne oder Muskel.\n\n**Der Schwellenüergang Kategorie I zu II ist entscheidend:** Bei Kategorie I ist die Haut noch intakt — hier greift **Prophylaxe**. Ab Kategorie II ist die Haut offen — jetzt brauchst du **Wundversorgung + Therapie**. Genau das ist bei Frau Yilmaz passiert.",
        kerntextB1:
          "Ein **Dekubitus** (Druckgeschwür) ist eine **Wunde durch zu viel Druck** auf die Haut (NPUAP/EPUAP 2019).\n\n**4 Stufen:**\n\n• **Kategorie 1** — Haut ist noch ganz. Rote Stelle, die beim Drücken nicht weg geht.\n\n• **Kategorie 2** — Haut ist offen. Flache Wunde oder Blase. Das hat Frau Yilmaz.\n\n• **Kategorie 3** — Tiefe Wunde bis ins Fettgewebe.\n\n• **Kategorie 4** — Sehr tiefe Wunde, Knochen oder Muskeln sichtbar.\n\n**Wichtig:** Bei Kategorie 1 hilft noch **Vorbeugung** (Prophylaxe). Ab Kategorie 2 brauchst du eine **Wundbehandlung**.",
        faustregel:
          "Kategorie I = Prophylaxe genügt. Ab Kategorie II = die Haut ist offen, jetzt ist es Therapie.",
        faustregelB1:
          "Kategorie 1: Haut noch ganz = Vorbeugung. Ab Kategorie 2: Haut ist offen = Behandlung nötig.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz + Immobilität",
            kurzbeschreibung:
              "Bei ihm entsteht Dekubitus-Risiko durch nächtliche Immobilität und fehlende Eigenbewegung. Er merkt den Druck nicht, weil er kognitiv nicht versteht, dass er sich drehen muss.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese + Neglect",
            kurzbeschreibung:
              "Nach Schlaganfall: Die gesamte rechte Körperhälfte ist betroffen. Er liegt oft auf der betroffenen Seite, ohne es zu merken (Neglect). Fersen und Trochanter sind seine Prädilektionsstellen.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Adipositas BMI 38 + Polyneuropathie",
            kurzbeschreibung:
              "Hoeherer Auflagedruck auf Knochenvorsprünge bei hohem Körpergewicht. Wie bei Frau Yilmaz: Neuropathie verhindert das Schmerzsignal.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Ambulant, sitzende Position",
            kurzbeschreibung:
              "Sie sitzt viel im Rollstuhl zuhause. Dekubitus-Risiko nicht am Sakrum (liegt selten), sondern an Sitzbeinhockern und Fersen. Ambulant wird Dekubitus oft spät entdeckt.",
          },
        ],
        sonstBox:
          "Sonderkategorien der NPUAP/EPUAP: **Nicht klassifizierbar** (Wundgrund von Nekrose bedeckt, Tiefe nicht beurteilbar) und **Vermutete tiefe Gewebeschädigung** (Deep Tissue Injury — intakte Haut, aber darunter bereits geschädigtes Gewebe, erkennbar an violetter Verfärbung). Beides kommt bei Frau Yilmaz nicht vor, gehört aber zum Prüfungswissen.",
        sonstBoxB1:
          "Es gibt noch zwei Sonderkategorien: **Nicht klassifizierbar** (Wunde ist von totem Gewebe bedeckt, man sieht nicht wie tief sie ist) und **Tiefe Gewebeschädigung** (Haut sieht noch ganz aus, ist aber innen schon kaputt — erkennt man an lila Farbe).",
        karteikarte: {
          vorderseite:
            "Frau Yilmaz hat eine flache offene Wunde am Sakrum, 2x3 cm, kein Nekroseanteil. Welche Dekubitus-Kategorie ist das — und warum ist der Übergang von Kategorie I zu II so wichtig?",
          rueckseite:
            "Kategorie II (NPUAP/EPUAP 2019): Teilverlust der Haut — flache Erosion oder Blase. Der Übergang I zu II markiert den Wechsel von Prophylaxe zu Therapie: Haut ist offen, Wundversorgung nötig.\n\nSpektrum: Bauer (Demenz, Immobilität), Petrov (Hemiparese, Neglect), Schmidt (Adipositas, Neuropathie), Kovac (ambulant, Sitzbeinhocker).\n\nFaustregel: **Ab Kategorie II ist die Haut offen — aus Prophylaxe wird Therapie.**",
        },
      },
    },
// Step 1.2 — Flipcard (3 Karten): Risikoprofil aktivieren
    {
      stepId: "ce02-yilmaz-s2-info-02-akte-risikoprofil",
      phase: 1,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2. Aktualisierung 2024)",
        "Braden B.J., Bergstrom N. (1987)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-info-risikoprofil",
      tag: "krankheitslehre",
      transition: "Du kennst die Risiken. Jetzt die Frage: Wie gehst du mental vorbereitet ins Zimmer?",
      contentC1: {
        title: "Vorwissen aktivieren — Risikoprofil Frau Yilmaz",
        body: "Drei Karten zu den Vorerkrankungen. Drehe jede Karte um — teste dein Vorwissen bevor du zum Befund gehst.",
        glossarBegriffe: ["Hyperglykämie", "Mikrozirkulationsstörung", "Prädilektionsstelle"],
      },
      contentB1: {
        title: "Vorwissen — was weißt du schon?",
        body: "Drei Karten zu den Krankheiten von Frau Yilmaz. Drehe jede Karte um.",
        glossarBegriffe: ["Hyperglykämie"],
      },
      question: {
        fragetext:
          "Drehe jede Karte um und prüfe dein Vorwissen.",
        flipcard: {
          instruction: "Drehe jede Karte um.",
          cards: [
            {
              front: "Warum heilt Haut bei Diabetes langsamer?",
              back: "Hyperglykämie → eingeschränkte Leukozytenaktivität + Mikrozirkulationsstörung → verzögerte Geweberegeneration. Bei HbA1c 8,1 % ist die Wundheilung deutlich verlangsamt.",
              backB1:
                "Zu viel Zucker im Blut macht Immunzellen langsamer. Kleine Blutgefäße werden schlechter durchblutet. Die Haut heilt langsam.",
              category: "Diabetes + Wundheilung",
            },
            {
              front: "Wie beeinflusst Adipositas (BMI 34) das Dekubitusrisiko?",
              back: "Höherer Auflagedruck auf Knochenvorsprünge (bes. Sakrum), eingeschränkte Eigenmobilität, Hautfalten als Feuchtigkeitsfallen — alle drei erhöhen das Dekubitusrisiko.",
              backB1:
                "Frau Yilmaz ist schwer. Das bedeutet: Mehr Druck auf das Steißbein. Sie kann sich schwerer selbst umdrehen. Hautfalten halten Feuchtigkeit — das schwächt die Haut.",
              category: "Adipositas + Druck",
            },
            {
              front: "Welche Prophylaxemaßnahmen waren in Spirale 1 geplant?",
              back: "2-stündliche Umlagerung, Weichlagerungsmatratze, tägliche Hautinspektion, Inkontinenzversorgung, Braden-Score regelmäßig erheben (≥ 12 = mäßiges Risiko).",
              backB1:
                "Frau Yilmaz sollte alle 2 Stunden umgelagert werden. Sie hatte eine Weich-Matratze. Jeden Tag sollte jemand ihre Haut anschauen. Und den Braden-Score ausfüllen.",
              category: "Spirale 1 — Prophylaxeplan",
            },
          ],
          shuffled: false,
        },
      },
    },

    // Step 1.3 — MC (Single-Choice): Priorität vor Zimmerbetreten
    {
      stepId: "ce02-yilmaz-s2-info-03-priorität-setzen",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-s2-info-priorität",
      tag: "pflege",
      transition: "Neutral reingehen, selbst urteilen. Aber worauf genau achtest du bei der Haut?",
      contentC1: {
        title: "Mentale Vorbereitung vor dem Zimmer",
        body: "Du hast die Akte gelesen. Bevor du das Zimmer betrittst: Was ist deine wichtigste mentale Vorbereitung?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was denkst du, bevor du ins Zimmer gehst?",
        body: "Du hast die Akte gelesen. Was ist jetzt wichtig, bevor du das Zimmer betrittst?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Du hast die Akte gelesen. Was ist vor dem Zimmerbetreten deine wichtigste mentale Vorbereitung?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ich weiß schon, dass es ein Dekubitus II ist — die Kollegin hat es gesehen.",
            isCorrect: false,
            explanation:
              "Einschätzungen aus zweiter Hand sind ein Startpunkt, kein Urteil. Eine nicht-dokumentierte Beobachtung ist noch kein Befund. Geh neutral rein und bilde dir ein eigenes Bild.",
            explanationB1:
              "Die Kollegin hat etwas gesehen — aber nicht aufgeschrieben. Das ist kein Befund. Du musst selbst hinschauen und selbst entscheiden.",
          },
          {
            text: "Ich gehe neutral rein — ich schaue zuerst selbst, bevor ich bewerte.",
            isCorrect: true,
            explanation:
              "Genau. Klinisches Urteilsvermögen beginnt mit einem unvoreingenommenen Blick. Fremde Beobachtungen sind Hinweise, keine Diagnosen. Erst sehen, dann einordnen.",
            explanationB1:
              "Richtig. Zuerst selbst schauen. Dann entscheiden. Nicht vorher urteilen.",
          },
          {
            text: "Ich frage Frau Yilmaz sofort, warum sie sich nicht gemeldet hat.",
            isCorrect: false,
            explanation:
              "Das wäre keine gute erste Frage. Frau Yilmaz hat keinen Schmerz gespürt — sie hat keine Schuld. Zudem: Neuropathie erklärt das fehlende Schmerzsignal. Vorwürfe helfen nicht, Vertrauen aufbauen schon.",
            explanationB1:
              "Das ist keine gute Frage. Frau Yilmaz hat keinen Schmerz gespürt — das liegt an der Nerven-Schädigung durch Diabetes. Sie hat nichts falsch gemacht.",
          },
          {
            text: "Ich brauche keine Vorbereitung — eine Rötung ist harmlos.",
            isCorrect: false,
            explanation:
              "Eine Rötung am Sakrum bei diesem Risikoprofil (Diabetes, Adipositas, Neuropathie, 14 Tage post-OP) ist ein ernstes Warnsignal. Ohne Hinschauen kannst du nicht einschätzen — und das wäre ein Pflegefehler.",
            explanationB1:
              "Das stimmt nicht. Eine rote Stelle am Steißbein bei einer Person mit Diabetes und Übergewicht ist immer ernst. Du musst hinschauen.",
          },
        ],
      },
    },

    // Step 1.3b — Inline-Wissen: Hautinspektion — worauf du achtest
    // Bevor der Schueler ins Zimmer geht und die Wunde sieht, braucht er Grundwissen
    // zur Hautinspektion: Was genau schaut man an? Welche Zeichen sind relevant?
    {
      stepId: "ce02-yilmaz-s2-info-03b-hautinspektion",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2024 — Expertenstandard Dekubitusprophylaxe",
        "NPUAP/EPUAP/PPPIA 2019",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-info-hautinspektion",
      tag: "pflege",
      themaPrimaer: "haut",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Du weisst jetzt, worauf du achten musst. Zeit, ins Zimmer zu gehen.",
      contentC1: {
        title: "Hautinspektion — worauf du gleich achtest",
        body: "",
        glossarBegriffe: ["Hautinspektion", "Prädilektionsstelle", "Fingertest", "Mazeration"],
      },
      contentB1: {
        title: "Haut anschauen — worauf achtest du?",
        body: "",
        glossarBegriffe: ["Hautinspektion", "Fingertest"],
      },
      inlineWissen: {
        bausteinRef: "haut-inspektion-grundlagen",
        storyAufhaenger:
          "Gleich wirst du Frau Yilmaz bitten, sich auf die Seite zu drehen. Du wirst ihre Haut am Sakrum sehen — und du musst in Sekunden erkennen, was du siehst. Dafür brauchst du einen klaren Blick: Was genau schaust du an?",
        storyAufhaengerB1:
          "Gleich schaust du dir die Haut von Frau Yilmaz am Steissbein an. Du musst schnell erkennen was du siehst. Was genau schaust du an?",
        kerntext:
          "Die **Hautinspektion** ist das wichtigste Früherkennungs-Werkzeug bei Dekubitusrisiko (DNQP 2024). Du brauchst **gutes Licht** (Tageslicht oder helle Lampe — nie im Halbdunkel beurteilen).\n\n**5 Punkte der systematischen Hautinspektion:**\n\n• **Farbe** — Roetung? Bei dunkler Haut: Verfärbung (lila, blau) statt Roetung sichtbar.\n\n• **Temperatur** — Ist die Stelle wärmer als die Umgebung? (Fingerrücken-Test)\n\n• **Konsistenz** — Ist die Haut verhärtet? Aufgeweicht (mazeriert)? Ödematös?\n\n• **Integrität** — Ist die Haut intakt oder offen? Blase? Erosion?\n\n• **Feuchtigkeit** — Trocken? Feucht? Mazeriert durch Inkontinenz-Pad?\n\n**Der Fingertest (nur bei intakter Haut):** 3 Sekunden auf die Roetung drücken. Wird sie weiss = normale Durchblutung. Bleibt sie rot = nicht-wegdrückbare Roetung = Kategorie I.\n\n**Prädilektionsstellen** (häufigste Dekubitus-Orte): Sakrum, Fersen, Trochanter, Sitzbeinhöcker, Hinterkopf. Bei Frau Yilmaz: Sakrum (Rückenlage) + Fersen (Matratze).",
        kerntextB1:
          "Die **Hautinspektion** ist das wichtigste Mittel, um Dekubitus früh zu erkennen (DNQP 2024). Du brauchst **gutes Licht**.\n\n**5 Dinge schaust du an:**\n\n• **Farbe** — Ist die Stelle rot? Bei dunkler Haut: eher lila oder blau.\n\n• **Temperatur** — Ist die Stelle wärmer? (Mit Fingerrücken fühlen)\n\n• **Wie fühlt sich die Haut an?** — Hart? Weich? Aufgeweicht?\n\n• **Ist die Haut offen?** — Blase? Wunde?\n\n• **Feuchtigkeit** — Trocken? Feucht? Nass durch Inkontinenz-Pad?\n\n**Fingertest (nur bei ganzer Haut):** 3 Sekunden drücken. Wird die Roetung weiss = ok. Bleibt rot = Kategorie 1.\n\n**Häufigste Stellen:** Steissbein, Fersen, Hüftknochen seitlich.",
        faustregel:
          "Gutes Licht, 5 Kriterien (Farbe, Temperatur, Konsistenz, Integrität, Feuchtigkeit), Fingertest nur bei intakter Haut.",
        faustregelB1:
          "Immer gutes Licht. 5 Dinge anschauen. Fingertest nur wenn die Haut noch ganz ist.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Demenz — wehrt Inspektion ab",
            kurzbeschreibung:
              "Hautinspektion bei Demenz ist schwieriger: Herr Bauer versteht nicht warum du ihn anschauen willst. Validation und ruhige Ansprache helfen — nie erzwingen.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese — betroffene Seite inspizieren",
            kurzbeschreibung:
              "Die betroffene Körperhälfte hat veränderte Durchblutung. Roetungen können anders aussehen. Neglect bedeutet: Er zeigt dir die Stelle nicht von allein.",
          },
          {
            patientName: "Emilia",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Säugling — Hinterkopf + Windel",
            kurzbeschreibung:
              "Bei Säuglingen sind Hinterkopf und Sakralbereich (unter der Windel) die Prädilektionsstellen. Haut ist dünner, Roetungen entstehen schneller.",
          },
        ],
        sonstBox:
          "Bei **dunkler Hautfarbe** ist Roetung schwer sichtbar — hier auf Farbveränderung (lila, aschgrau), Temperaturunterschied und Ödem achten. Die NPUAP/EPUAP 2019 betont explizit: Fingertest ist bei dunkler Haut weniger zuverlässig. Alternativ: Beleuchtung mit Taschenlampe im flachen Winkel (Schattenwurf zeigt Schwellung).",
        sonstBoxB1:
          "Bei **dunkler Haut** sieht man Roetung schlecht. Dann auf andere Zeichen achten: lila oder graue Farbe, wärmere Stelle, Schwellung. Taschenlampe im flachen Winkel hilft.",
        karteikarte: {
          vorderseite:
            "Du inspizierst die Haut von Frau Yilmaz am Sakrum. Nenne die 5 Kriterien der systematischen Hautinspektion und erkläre, wann der Fingertest anwendbar ist.",
          rueckseite:
            "5 Kriterien: Farbe, Temperatur, Konsistenz, Integrität, Feuchtigkeit. Fingertest: nur bei intakter Haut — 3 Sek drücken, bleibt rot = Kategorie I (DNQP 2024). Bei offener Haut (ab Kat. II) nicht mehr anwendbar.\n\nSpektrum: Bauer (Demenz, wehrt Inspektion ab), Petrov (Hemiparese, Neglect), Emilia (Säugling, Hinterkopf).\n\nFaustregel: **Gutes Licht, 5 Kriterien, Fingertest nur bei intakter Haut.**",
        },
      },
    },

    // Step 1.4 — Dialog (2 Phasen): Zimmer betreten
    {
      stepId: "ce02-yilmaz-s2-info-04-zimmer-betreten-dialog",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-s2-info-dialog",
      tag: "pflege",
      transition: "Frau Yilmaz hat zugestimmt. Mustafa ist informiert. Jetzt: Haut anschauen.",
      contentC1: {
        title: "Zimmer betreten — Frau Yilmaz ansprechen",
        body: "Du betrittst Zimmer 7. Frau Yilmaz sitzt in einem Sessel neben dem Bett — Rollator daneben. Mustafa sitzt ihr gegenüber und hält ihre Hand. Du begrüßt beide.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Zimmer betreten",
        body: "Du gehst in Zimmer 7. Frau Yilmaz sitzt in einem Sessel. Der Rollator steht daneben. Ihr Mann Mustafa sitzt ihr gegenüber. Er hält ihre Hand. Du begrüßt beide.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Frau Yilmaz.",
        patientName: "Frau Yilmaz",
        dialogPhases: [
          {
            context:
              "Du begrüßt beide und sagst Frau Yilmaz: 'Guten Morgen, Frau Yilmaz. Ich würde heute morgen gern kurz Ihren Rücken anschauen, wenn das für Sie okay ist.' Frau Yilmaz antwortet: 'Ja, was denn — ist was?'",
            contextB1:
              "Du begrüßt beide. Du sagst: 'Guten Morgen, Frau Yilmaz. Darf ich heute kurz Ihren Rücken anschauen?' Frau Yilmaz fragt: 'Ja — ist was?'",
            speaker: "Du",
            options: [
              {
                text: "\"Wir schauen einfach mal — ist Routine.\"",
                textB1: "\"Wir schauen nur kurz — das machen wir immer so.\"",
                patientResponse:
                  "Frau Yilmaz nickt. Dann, leise: 'Ist schon wieder was? Ihr sagt mir manchmal nicht alles …'",
                patientResponseB1:
                  "Frau Yilmaz nickt. Dann leise: 'Gibt es ein Problem? Ihr sagt mir nicht immer alles.'",
                score: 1,
                feedback:
                  "Beruhigend gemeint — aber unehrlich. Frau Yilmaz hat ein Recht auf ehrliche Information. Das Vertrauen leidet, wenn sie später merkt, dass es kein Routine-Check war. Aufrichtigkeit ist respektvoller.",
                feedbackB1:
                  "Du willst sie nicht beunruhigen — das ist nett. Aber Frau Yilmaz merkt, dass etwas nicht stimmt. Ehrlichkeit baut mehr Vertrauen.",
              },
              {
                text: "\"Die Kollegin hat gestern eine Rötung gesehen — ich möchte das heute genau beurteilen.\"",
                textB1:
                  "\"Gestern hat eine Kollegin eine rote Stelle am Rücken gesehen. Ich schaue das heute genau an.\"",
                patientResponse:
                  "Frau Yilmaz überlegt. 'Rötung? Wo? Da tut es nicht weh …'",
                patientResponseB1:
                  "Frau Yilmaz überlegt. 'Rötung? Wo? Ich spüre da nichts.'",
                score: 3,
                feedback:
                  "Ehrlich, klar, informiert. Du erklärst warum du schaust — ohne vorher zu bewerten. Das ist das richtige Gleichgewicht: transparent ohne vorzugreifen.",
                feedbackB1:
                  "Sehr gut. Du sagst die Wahrheit, ohne vorher zu urteilen. Frau Yilmaz weiß warum du schaust.",
              },
              {
                text: "\"Es kann sein, dass Sie eine Wunde am Rücken haben.\"",
                textB1: "\"Vielleicht haben Sie eine Wunde am Rücken.\"",
                patientResponse:
                  "Frau Yilmaz erschrickt. 'Eine Wunde?! Das hab ich doch nicht gespürt!' Mustafa schaut besorgt auf.",
                patientResponseB1:
                  "Frau Yilmaz erschrickt. 'Eine Wunde?! Das spüre ich nicht!' Mustafa macht große Augen.",
                score: 1,
                feedback:
                  "Zu früh — du bewertest, bevor du geschaut hast. Eine Bewertung vor dem Befund ist keine ehrliche Information, sondern eine Vermutung als Tatsache. Erst schauen, dann einordnen.",
                feedbackB1:
                  "Das ist zu früh. Du hast noch nicht geschaut. Du weißt es noch nicht sicher. Erst hinschauen, dann sagen was es ist.",
              },
            ],
          },
          {
            context:
              "Frau Yilmaz hat verstanden, dass du schauen wirst. Mustafa schaut fragend. Du erklärst kurz auch ihm — über Sevim, die per Telefon übersetzt. Wie erklärst du, was du gleich tun wirst?",
            contextB1:
              "Mustafa versteht nicht gut Deutsch. Sevim übersetzt per Telefon. Wie erklärst du, was du gleich machst?",
            speaker: "Du",
            options: [
              {
                text: "\"Ich werde kurz den Rücken von Frau Yilmaz anschauen, damit ich weiß, wie die Haut aussieht. Das dauert nur ein paar Minuten.\"",
                textB1:
                  "\"Ich schaue kurz den Rücken von Frau Yilmaz an. Ich schaue, wie die Haut aussieht. Das geht schnell.\"",
                patientResponse:
                  "Mustafa nickt, nachdem Sevim übersetzt. 'Gut. Danke.'",
                patientResponseB1: "Mustafa nickt. 'Danke.'",
                score: 3,
                feedback:
                  "Einfach, klar, respektvoll. Mustafa wird einbezogen — Familieneinbezug ist Teil der Pflegehaltung. Und: Du legst dich noch nicht fest, was du siehst.",
                feedbackB1:
                  "Sehr gut. Du erklärst klar. Mustafa fühlt sich einbezogen. Das ist wichtig.",
              },
              {
                text: "\"Das müssen Sie nicht verstehen — das ist medizinisch. Ich erkläre später.\"",
                textB1:
                  "\"Das müssen Sie nicht wissen — das erklären wir später.\"",
                patientResponse:
                  "Mustafa schaut verwirrt. Frau Yilmaz legt die Hand auf seinen Arm — beruhigend.",
                patientResponseB1:
                  "Mustafa versteht nicht. Er schaut besorgt. Frau Yilmaz beruhigt ihn.",
                score: 0,
                feedback:
                  "Ausgrenzend und respektlos. Angehörige haben das Recht auf angemessene Information. Mustafas Sorge ist berechtigt — er sitzt täglich am Bett seiner Frau. Ausschluss schadet dem Vertrauen.",
                feedbackB1:
                  "Das ist nicht gut. Mustafa ist der Ehemann. Er hat das Recht zu wissen, was passiert. Ausschluss macht ihn ängstlich.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Opt 1.5 — Text (news): Dokumentationslücke (B1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-info-opt-01-dokumentation-lücke",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-info-dokumentation",
      tag: "pflege",
      displayFormat: "news",
      contentC1: {
        title: "Was passiert, wenn etwas nicht dokumentiert wird?",
        body: "Eine Beobachtung ohne Dokumentation ist rechtlich nicht existent. § 630f BGB (Behandlungsvertrag) verpflichtet zur zeitnahen, vollständigen Dokumentation. Bei fehlender Dokumentation gilt im Streitfall: Beweislastumkehr — die Einrichtung muss beweisen, dass die Maßnahme durchgeführt wurde, was ohne Dokumentation unmöglich ist. Aufbewahrungspflicht: 10 Jahre.",
        glossarBegriffe: ["§ 630f BGB", "Beweislastumkehr"],
      },
      contentB1: {
        title: "Was passiert, wenn man etwas nicht aufschreibt?",
        body: "Wenn eine Pflegekraft etwas sieht aber nicht aufschreibt: Das gilt rechtlich als nicht passiert. Das Gesetz (§ 630f BGB) sagt: Alles muss schnell und vollständig aufgeschrieben werden. Wenn etwas fehlt: Die Einrichtung muss beweisen, dass es trotzdem gemacht wurde. Das ist sehr schwer ohne Aufschrieb. Die Akte muss 10 Jahre aufbewahrt werden.",
        glossarBegriffe: ["§ 630f BGB"],
      },
    },

    // Opt 1.6 — Estimation: Braden-Score Schätzung (mittlere Schüler)
    {
      stepId: "ce02-yilmaz-s2-info-opt-02-braden-vorwissen",
      phase: 1,
      stepType: "estimation",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Braden B.J., Bergstrom N. (1987)"],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-yilmaz-s2-info-braden-anker",
      tag: "krankheitslehre",
      contentC1: {
        title: "Braden-Score Spirale 1 — noch im Gedächtnis?",
        body: "In Spirale 1 haben wir den Braden-Score von Frau Yilmaz bei Aufnahme erhoben. Schätze: Wie hoch war er damals?",
        glossarBegriffe: ["Braden-Skala"],
      },
      contentB1: {
        title: "Braden-Score — wie hoch war er am Anfang?",
        body: "In der ersten Situation (Spirale 1) haben wir den Braden-Score von Frau Yilmaz berechnet. Schätze: Wie hoch war er bei der Aufnahme?",
        glossarBegriffe: ["Braden-Skala"],
      },
      question: {
        fragetext:
          "Schätze den Braden-Score von Frau Yilmaz bei Aufnahme in Spirale 1. Skala 6-23 (6 = höchstes Risiko, 23 = kein Risiko).",
        estimation: {
          instruction:
            "Schätze den Braden-Score bei Aufnahme (aus Spirale 1). Skala 6-23.",
          unit: "Punkte",
          correctValue: 13,
          tolerance: 15,
          funFact:
            "Ein Wert von 13-14 bedeutet 'mäßiges Risiko'. Das ist der Bereich, in dem Dekubitus-Prophylaxe besonders wichtig ist — und in dem er trotzdem entstehen kann.",
          explanation:
            "Bei Aufnahme hatte Frau Yilmaz einen Braden-Score von etwa 12-14 (mäßiges Risiko). Heute nach 14 Tagen hat sich der Score kaum verändert — aber ein Dekubitus Kategorie II ist trotzdem entstanden. Das ist der Kern von Spirale 2.",
          explanationB1:
            "Bei Aufnahme war der Braden-Score etwa 12-14 (mittleres Risiko). Heute nach 14 Tagen: immer noch ähnlich. Aber trotzdem ist eine Wunde entstanden. Das ist das große Thema von heute.",
        },
      },
    },
  ],
  geschaetzteDauer: 18,
};
