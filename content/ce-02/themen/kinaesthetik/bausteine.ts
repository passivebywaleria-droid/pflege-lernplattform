// CE-02 Thema Kinästhetik — Wissensbausteine (13 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/kinaesthetik/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_KINAESTHETIK_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: was-ist-kinaesthetik (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-was-ist-kinaesthetik",
    themaId: "kinaesthetik",
    titel: "Definition: Was ist Kinästhetik?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du willst einer älteren Person aus einem tiefen Sessel aufhelfen. Hebst du sie — oder was machst du anders?",
      antwort:
        "Kinästhetik ist kein Hebe-Trick, sondern ein Bewegungskonzept. Du aktivierst die Eigenbewegung des Patienten und begleitest sie — du trägst ihn nicht. Entwickelt von Hatch und Maietta (1970er), heute Teil des Expertenstandards Mobilität (DNQP 2020). Auch schwerkranke Menschen haben Rest-Eigenbewegung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kinästhetik ist kein Hebe-Trick, sondern ein Bewegungskonzept. Du aktivierst die Eigenbewegung des Patienten und begleitest sie — du trägst ihn nicht. Entwickelt wurde Kinästhetik von Hatch und Maietta, heute Teil des Expertenstandards Mobilität (DNQP 2020).",
      textB1:
        "Kinästhetik ist ein Plan, wie du Patienten bewegst. Die wichtigste Regel: Du hebst den Patienten nicht. Du hilfst ihm, sich selbst zu bewegen. Auch kranke Menschen können oft noch etwas selbst tun.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)", "DNQP 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-definition",
        tag: "pflege",
        displayFormat: "beforeafter",
        bildkategorie: "prozedur",
        imageAlt:
          "Zwei-Bild-Vergleich: Links Pflegekraft mit gebeugtem Rücken hebt Patienten, rechts Pflegekraft aufrecht begleitet Patienten beim eigenständigen Aufstehen",
        bildhinweis:
          "Before/after comparison: left side nurse with bent back lifting patient, right side nurse upright guiding patient self-rising, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Was ist Kinästhetik?",
          body: "Kinästhetik ist ein Bewegungskonzept, das in den 1970er Jahren von den amerikanischen Tänzern Frank Hatch und Lenny Maietta entwickelt wurde. Die zentrale Idee: Pflegekräfte bewegen Patienten nicht durch Heben, sondern durch gezieltes Aktivieren und Begleiten ihrer Eigenbewegung. Auch schwerkranke Menschen haben Rest-Eigenbewegung — und die lässt sich nutzen. Für dich als Pflegekraft heißt das: Du arbeitest mit dem Patienten, nicht gegen sein Gewicht. Das schont deinen Rücken und aktiviert den Patienten. Routine-Hebetechniken mit gebeugtem Rücken sind in der modernen Pflege obsolet — der Expertenstandard Mobilität (DNQP 2020) empfiehlt ausdrücklich bewegungsfördernde Konzepte wie Kinästhetik. Ausnahme: vollständig bewusstlose Menschen, hier kommt ein Lifter zum Einsatz.",
          glossarBegriffe: ["Kinästhetik", "Eigenbewegung", "DNQP-Expertenstandard Mobilität"],
        },
        contentB1: {
          title: "Was ist Kinästhetik?",
          body: "Kinästhetik ist ein Plan, wie du Patienten bewegst. Die wichtigste Regel: Du hebst den Patienten nicht. Du hilfst ihm, sich selbst zu bewegen. Auch kranke Menschen können oft noch etwas selbst machen. Dieses bisschen nutzt du. Das ist gut für den Patienten — er bleibt aktiv. Und es ist gut für dich — dein Rücken wird geschont. Heben mit krummem Rücken ist heute nicht mehr erlaubt. Das steht auch im Experten-Standard Mobilität (DNQP 2020). Nur wenn ein Patient gar nicht mehr mitmachen kann, nutzt du einen Lifter.",
          glossarBegriffe: ["Kinästhetik", "Eigenbewegung", "DNQP-Expertenstandard Mobilität"],
        },
      },
    },
    glossarBegriffe: ["Kinästhetik", "Eigenbewegung", "DNQP-Expertenstandard Mobilität"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: sechs-konzepte-uebersicht (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-sechs-konzepte-uebersicht",
    themaId: "kinaesthetik",
    titel: "Die 6 Kinästhetik-Konzepte",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du einen Patienten bewegst — auf was achtest du alles gleichzeitig? Sammle mindestens 3 Dinge.",
      antwort:
        "Kinästhetik kennt 6 Konzepte, die bei jeder Bewegung gleichzeitig wirken: Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion, Umgebung. Keine Reihenfolge — alle parallel. Sie helfen dir, eine Bewegungs-Situation zu analysieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kinästhetik kennt 6 Konzepte, die bei jeder Bewegung gleichzeitig wirken: Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion, Umgebung. Keine Reihenfolge — alle parallel. Sie helfen dir, eine Bewegungs-Situation zu analysieren.",
      textB1:
        "Es gibt 6 Konzepte in der Kinästhetik — wie eine Brille. Du schaust mit ihnen auf jede Bewegung: 1. Interaktion 2. Anatomie 3. Menschliche Bewegung 4. Anstrengung 5. Funktion 6. Umgebung. Alle 6 sind IMMER da — gleichzeitig.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-02",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-sechs-konzepte",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "prozedur",
        imageAlt:
          "Hexagon-Schema mit 6 gleichwertigen Feldern: Interaktion, Funktionale Anatomie, Menschliche Bewegung, Anstrengung, Menschliche Funktion, Umgebung",
        bildhinweis:
          "Hexagon diagram with 6 equal sections representing the 6 Kinaesthetics concepts, simple icons per section, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Die 6 Kinästhetik-Konzepte",
          body: "Die 6 Kinästhetik-Konzepte sind ein Analyse-Raster. Du legst es über jede Bewegungssituation, um zu verstehen, was gerade passiert und was du verbessern kannst. **(1) Interaktion:** Wie läuft der Dialog zwischen dir und dem Patienten? **(2) Funktionale Anatomie:** Welche Knochen tragen, welche Muskeln bewegen? **(3) Menschliche Bewegung:** Wie verlagert der Patient sein Gewicht? **(4) Anstrengung:** Wird gezogen oder gedrückt? **(5) Menschliche Funktion:** Welches Alltags-Bewegungsmuster steckt hinter der Handlung? **(6) Umgebung:** Wie hilft oder hindert die Umgebung? Alle 6 Konzepte wirken IMMER gleichzeitig — sie sind keine Checkliste, die du abhakst.",
          glossarBegriffe: [
            "Interaktion (Kinästhetik)",
            "Funktionale Anatomie",
            "Anstrengung (Kinästhetik)",
          ],
        },
        contentB1: {
          title: "Die 6 Kinästhetik-Konzepte",
          body: "Es gibt 6 Konzepte in der Kinästhetik. Sie sind wie eine Brille — du schaust mit ihnen auf jede Bewegung. **1. Interaktion:** Wie redest du mit dem Patienten? **2. Anatomie:** Welche Knochen sind wichtig? **3. Menschliche Bewegung:** Wie verlagert der Patient sein Gewicht? **4. Anstrengung:** Ziehst du oder drückst du? **5. Funktion:** Was für eine Alltags-Bewegung ist das (essen? aufstehen?)? **6. Umgebung:** Hilft oder stört die Umgebung? Alle 6 Konzepte sind IMMER da — gleichzeitig.",
          glossarBegriffe: [
            "Interaktion (Kinästhetik)",
            "Funktionale Anatomie",
            "Anstrengung (Kinästhetik)",
          ],
        },
      },
    },
    glossarBegriffe: [
      "Interaktion (Kinästhetik)",
      "Funktionale Anatomie",
      "Anstrengung (Kinästhetik)",
    ],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: interaktion (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-interaktion",
    themaId: "kinaesthetik",
    titel: "Interaktion: Dialog bei Bewegung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Kollege fasst einen Patienten von hinten an und dreht ihn auf die Seite, ohne etwas zu sagen. Was kann schief gehen?",
      antwort:
        "Interaktion ist das erste Konzept der Kinästhetik. Ohne Ankündigung erschreckt der Patient, spannt reflexhaft an und kann nicht mitmachen. Interaktion läuft verbal (ankündigen, erklären) und taktil (Tempo, Druck, Griffart) — auch bei bewusstseinseingeschränkten Patienten weiter.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Interaktion meint den Dialog zwischen dir und dem Patienten während der Bewegung. Du kündigst Bewegung an, begleitest sie verbal, kommunizierst über Berührung und Gewichtsverlagerung. Wichtig: Interaktion ist vor allem taktil, nicht nur verbal. Der Patient soll spüren, was kommt.",
      textB1:
        "Bei jeder Bewegung sprichst du mit dem Patienten. Du sagst, was du gleich machst. Du fasst ihn fest an, aber nicht zu fest. Du wartest, wenn er zögert. Das nennt man Interaktion — Sprechen UND Berühren.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-03",
        phase: 1,
        stepType: "dialog",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-interaktion",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Interaktion: Dialog bei Bewegung",
          body: "Interaktion ist das erste Konzept der Kinästhetik — und das, was am häufigsten vergessen wird. Jede Bewegung ist ein Dialog zwischen dir und dem Patienten. Du kündigst an, was kommt ('Ich helfe Ihnen gleich auf die Seite, ich lege Ihren rechten Arm jetzt über die Brust'). Du spürst, was der Patient tut — wenn er anspannt, wartest du. Wenn er mitkommt, führst du weiter. Die Berührung selbst ist Kommunikation: fester Griff sagt 'jetzt', loser Griff sagt 'Pause'. Bei bewusstseinseingeschränkten Menschen läuft Interaktion fast nur noch über Berührung, Tempo und Druck — der Patient reagiert trotzdem. Zu viel Reden kann übrigens stören: manchmal reicht ein kurzer Satz, dann Tun.",
          glossarBegriffe: ["Interaktion (Kinästhetik)"],
        },
        contentB1: {
          title: "Interaktion: Dialog bei Bewegung",
          body: "Bei jeder Bewegung sprichst du mit dem Patienten. Du sagst, was du gleich machst: 'Ich helfe Ihnen jetzt auf die Seite.' Du fasst ihn fest an, aber nicht zu fest. Du wartest, wenn er zögert. Du bewegst langsam, wenn er Angst hat. Das nennt man Interaktion. Auch bei Patienten, die nichts sagen können, redest du mit ihnen. Du merkst ihre Antwort an ihrem Körper: ist er angespannt? Locker? Nicht nur sprechen ist wichtig — auch Berühren und Tempo sind Sprache.",
          glossarBegriffe: ["Interaktion (Kinästhetik)"],
        },
      },
    },
    glossarBegriffe: ["Interaktion (Kinästhetik)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: funktionale-anatomie-griffpunkte (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-funktionale-anatomie",
    themaId: "kinaesthetik",
    titel: "Funktionale Anatomie: Griffpunkte",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du willst einem Patienten beim Aufrichten helfen. Wo fasst du ihn NICHT an — und warum?",
      antwort:
        "Verbotene Griffzonen: Achselhöhle (Schulter-Luxationsgefahr, besonders bei Hemiplegie), Taille (drückt Organe), Handgelenk (Hebel auf Unterarmknochen), Muskelbäuche. Sichere Griffpunkte: Beckenkamm, Schulterblatt, Brustkorb-Seitenrand, Fersenbein. Grundregel: Knochen tragen, Muskeln bewegen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Funktionale Anatomie teilt den Körper in 7 Massen (Kopf, Brustkorb, Becken, 2 Arme, 2 Beine) und 6 Zwischenräume (Hals, Taille, 2 Schultergelenke, 2 Hüftgelenke). Regel: Knochen tragen, Muskeln bewegen. Du fasst an tragenden Strukturen an (Beckenkamm, Schulterblatt, Fersenbein) — nie in Zwischenräumen (Achseln, Taille) oder an Muskelbäuchen.",
      textB1:
        "Der Körper hat 7 große Teile und 6 Zwischen-Räume. Wichtig: Du fasst am Knochen an, nicht am Muskel. Gute Stellen: Becken-Seite, Schulter-Rücken, Brust-Seite. Schlechte Stellen: Achsel, Taille, Hand-Gelenk.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-04",
        phase: 1,
        stepType: "hotspot",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-griffpunkte",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "anatomie",
        imageAlt:
          "Körperumriss mit grünen Griffpunkten (Beckenkamm, Schulterblatt, Brustkorb-Seitenrand, Fersenbein) und roten Verbotszonen (Achselhöhle, Taille, Handgelenk)",
        bildhinweis:
          "Body outline with green zones (pelvis crest, shoulder blade, rib side, heel bone) and red forbidden zones (armpit, waist, wrist), ampel color coding, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Funktionale Anatomie: Griffpunkte",
          body: "In der Kinästhetik ist der Körper in 7 Massen gegliedert — Kopf, Brustkorb, Becken, beide Arme, beide Beine. Dazwischen liegen 6 Zwischenräume: Hals, Taille und die 4 großen Gelenke (2 × Schulter, 2 × Hüfte). Für dich heißt das: Du fasst an den Massen an, nicht an den Zwischenräumen. **Gute Griffpunkte:** Beckenkamm (seitlich oben am Becken), Schulterblätter (von hinten), Brustkorb-Seitenrand, Fersenbein. **Verbotene Zonen:** Achselhöhle (Schulter-Luxationsgefahr, besonders nach Schlaganfall), Taille (drückt Organe), Handgelenk (Hebel auf Unterarmknochen), alle Muskelbäuche am Oberarm und Oberschenkel.",
          glossarBegriffe: [
            "Funktionale Anatomie",
            "7 Massen",
            "6 Zwischenräume",
            "Beckenkamm",
            "Schulterblatt",
          ],
        },
        contentB1: {
          title: "Funktionale Anatomie: Griffpunkte",
          body: "Der Körper hat 7 große Teile: Kopf, Brustkorb, Becken, 2 Arme, 2 Beine. Dazwischen sind 6 Zwischen-Räume: Hals, Taille und die 4 großen Gelenke (Schultern und Hüften). Wichtig: Knochen tragen, Muskeln bewegen. Du fasst am Knochen an, nicht am Muskel. **Gute Stellen:** Becken-Seite (Beckenkamm), Schulter-Rücken (Schulterblatt), Brust-Seite. **Schlechte Stellen:** Achsel (Schulter kann raus-springen), Taille (tut weh), Hand-Gelenk (kann brechen).",
          glossarBegriffe: [
            "Funktionale Anatomie",
            "7 Massen",
            "6 Zwischenräume",
            "Beckenkamm",
            "Schulterblatt",
          ],
        },
      },
    },
    glossarBegriffe: [
      "Funktionale Anatomie",
      "7 Massen",
      "6 Zwischenräume",
      "Beckenkamm",
      "Schulterblatt",
    ],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: eigenbewegung-nutzen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-eigenbewegung-nutzen",
    themaId: "kinaesthetik",
    titel: "Eigenbewegung nutzen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K. kann fast gar nichts mehr selbst. Welche kleinste Eigenbewegung kannst du trotzdem nutzen, um sie im Bett nach oben zu bewegen?",
      antwort:
        "Auch bei stark eingeschränkten Patienten gibt es Rest-Eigenbewegung: Kopfdrehen, Fuß aufstellen, Becken kurz anheben. Die Pflegekraft sucht diese Reste aktiv, fragt den Patienten und ergänzt nur was fehlt. Schon 3 Tage strikte Bettruhe verursachen bei Älteren messbaren Muskelabbau — auch minimale Aktivierung verhindert das.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Eigenbewegung bedeutet: jede Bewegung, die der Patient selbst startet oder mitmacht. Auch minimal. Ein Kopfdrehen, ein Fuß-Aufstellen, ein Anheben des Beckens um 2 Zentimeter. Die Pflegekraft sucht diese Rest-Bewegung, fragt den Patienten aktiv danach und verstärkt sie durch Begleiten.",
      textB1:
        "Eigen-Bewegung heißt: der Patient macht selbst etwas mit. Auch wenn er fast alles nicht mehr kann — meistens kann er noch etwas. Zum Beispiel den Kopf drehen oder das Bein aufstellen. Diese kleinen Reste nutzt du.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-eigenbewegung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Eigenbewegung nutzen",
          body: "Eigenbewegung zu nutzen ist der Kern der Kinästhetik. Die Frage ist nicht: 'Wie bewege ICH den Patienten?', sondern 'Was kann ER selbst beitragen?' Auch wenn die Antwort nur 5 Prozent ist — dann nutzt du diese 5 Prozent und ergänzt 95 Prozent. **Beispiele für nutzbare Eigenbewegung:** Der Patient kann den Kopf drehen — dann startest du das Seitlage-Drehen mit seinem Blick ('Schauen Sie zu mir'). Er kann das Bein aufstellen — dann lässt du ihn das machen, bevor du drehst. Er kann das Becken kurz anheben — dann schiebst du das Rutschtuch darunter. Wenn du diese Eigenbewegung ignorierst, baut der Patient Muskeln ab — innerhalb von 3 Tagen Bettruhe verliert ein älterer Mensch messbar Muskelkraft. Daraus folgt: aktivierende Pflege ist keine Kosmetik, sie verhindert Mobilitätsverlust.",
          glossarBegriffe: ["Eigenbewegung"],
        },
        contentB1: {
          title: "Eigenbewegung nutzen",
          body: "Eigen-Bewegung heißt: der Patient macht selbst etwas mit. Auch wenn er fast alles nicht mehr kann — meistens kann er noch etwas. Zum Beispiel den Kopf drehen. Oder das Bein aufstellen. Oder das Becken kurz anheben. Diese kleinen Reste musst du finden und nutzen. Wenn du sie ignorierst, wird der Patient schwächer. Schon nach **3 Tagen nur Liegen** baut ein älterer Mensch Muskel-Kraft ab. Aktive Pflege ist also nicht 'nett' — sie verhindert, dass der Patient immer schwächer wird.",
          glossarBegriffe: ["Eigenbewegung"],
        },
      },
    },
    glossarBegriffe: ["Eigenbewegung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: anstrengung-ziehen-druecken (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-anstrengung-ziehen-druecken",
    themaId: "kinaesthetik",
    titel: "Anstrengung: Ziehen oder Drücken",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du willst einem Patienten helfen aufzustehen. Ziehst du ihn hoch — oder lässt du ihn drücken? Warum?",
      antwort:
        "Aufstehen läuft über Drücken: Beine drücken in den Boden, Rumpf folgt. Wenn du als Pflegekraft am Oberkörper ziehst, während der Patient instinktiv drückt, entstehen zwei entgegengesetzte Kräfte — beide heben sich auf. Regel: Immer dieselbe Richtung wie der Patient unterstützen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bewegung nutzt entweder Zug oder Druck — nie beides gleichzeitig für dieselbe Bewegung. Aufstehen: Beine drücken in den Boden. Sich-Hochziehen am Bettgalgen: Arme ziehen den Körper. Wenn du als Pflegekraft ziehst, während der Patient instinktiv drückt (oder umgekehrt), entsteht Gegenspannung und beide verlieren Kraft.",
      textB1:
        "Bei jeder Bewegung gibt es eine Richtung: Ziehen oder Drücken. Aufstehen = Drücken mit den Beinen. Beides gleichzeitig geht nicht! Wenn der Patient drückt und du ziehst — ihr arbeitet gegen-einander.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-06",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-anstrengung",
        tag: "pflege",
        displayFormat: "procontra",
        bildkategorie: "prozedur",
        imageAlt:
          "Schema mit Pfeilen: links Aufstehen mit Druckpfeilen nach unten/oben an Beinen, rechts Sich-Hochziehen am Galgen mit Zugpfeilen nach oben",
        bildhinweis:
          "Diagram showing two body positions: left figure standing up with push arrows at legs, right figure pulling up on bed handle with pull arrows, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Anstrengung: Ziehen oder Drücken",
          body: "Jede Bewegung hat eine Hauptrichtung: Zug oder Druck. Beides gleichzeitig funktioniert nicht. **Aufstehen aus dem Sitz:** Der Patient drückt mit den Beinen in den Boden, der Rumpf folgt. Deine Aufgabe: Druck-Richtung unterstützen, nicht am Oberkörper ziehen. **Sich nach oben im Bett bewegen:** Der Patient kann mit dem aufgestellten Bein in die Matratze drücken und sich schieben. **Sich umdrehen im Bett:** hier wirkt Zug, weil die Schulter auf die Seite rollt. **Klassischer Fehler:** Die Pflegekraft zieht am Arm beim Aufstehen. Der Patient drückt instinktiv mit den Beinen — beide arbeiten gegeneinander. Ergebnis: Patient wird 'schwerer'. **Lösung:** Immer zuerst klären, was der Patient TUT, dann die gleiche Richtung verstärken.",
          glossarBegriffe: ["Anstrengung (Kinästhetik)"],
        },
        contentB1: {
          title: "Anstrengung: Ziehen oder Drücken",
          body: "Bei jeder Bewegung gibt es eine Richtung: Ziehen oder Drücken. **Aufstehen:** Beine drücken in den Boden. **Sich am Bett-Galgen hochziehen:** Arme ziehen den Körper nach oben. Beides gleichzeitig geht nicht! Wenn der Patient drückt und du ziehst — ihr arbeitet gegen-einander. Der Patient wird 'schwerer'. Deshalb: Immer erst sehen, was der Patient macht. Dann die gleiche Richtung helfen. **Aufstehen = mit-drücken. Drehen = mit-ziehen.**",
          glossarBegriffe: ["Anstrengung (Kinästhetik)"],
        },
      },
    },
    glossarBegriffe: ["Anstrengung (Kinästhetik)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: knochen-tragen-muskeln-bewegen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-knochen-tragen-muskeln-bewegen",
    themaId: "kinaesthetik",
    titel: "Knochen tragen, Muskeln bewegen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was macht ein Knochen? Was macht ein Muskel? Und was heißt das für deine Hände, wenn du den Patienten bewegst?",
      antwort:
        "Knochen tragen das Gewicht (Skelett = Lastträger), Muskeln verschieben es. Für die Pflegekraft heißt das: Hände an tragenden Strukturen anlegen (Knochen, Knochenvorsprünge wie Beckenkamm, Schulterblatt) — nicht an Muskeln. Griff am Muskel erzeugt reflexhafte Gegenspannung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Grundregel: Knochen tragen, Muskeln bewegen. Das Skelett hält das Gewicht, die Muskeln verlagern es. Für dich heißt das: Du fasst an tragenden Strukturen an (Knochen, Knochenvorsprünge wie Beckenkamm, Schulterblatt, Brustkorb-Seitenrand) — nicht an Muskeln (Bauch, Oberarm-Außenseite, Oberschenkel-Vorderseite).",
      textB1:
        "Regel: Knochen tragen — Muskeln bewegen. Du fasst am Knochen an, nicht am Muskel. Wenn du den Muskel drückst, zieht sich der Muskel zusammen. Der Patient wird steif. Er kann sich nicht mehr bewegen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-07",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-knochen-muskeln",
        tag: "pflege",
        displayFormat: "mnemonic",
        bildkategorie: "anatomie",
        imageAlt:
          "Körperumriss mit Markierungen: Knochen (Beckenkamm, Schulterblatt, Brustkorb-Seitenrand) grün hervorgehoben, Muskelbäuche (Oberarm, Oberschenkel) grau mit X",
        bildhinweis:
          "Body outline marking bone contact points green (pelvis crest, shoulder blade, rib sides) and muscle bellies grey with X marks, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Knochen tragen, Muskeln bewegen",
          body: "Das menschliche Skelett ist dein Anker. Wenn du einen Patienten bewegst, lenkst du seine Masse über tragende Strukturen — das sind die großen Knochen (Becken, Brustkorb) und deren Vorsprünge (Beckenkamm, Schulterblatt). Muskeln sind dafür nicht geeignet: sie sind weich, druckempfindlich und erzeugen reflexhafte Gegenspannung, wenn man sie quetscht. **Beispiel 1:** Wenn du einen Patienten am Oberarm-Muskel packst, spannt er reflexhaft an und wird schwerer. Wenn du am Schulterblatt anlegst, spürt er die Bewegung als Führung und kann mitgehen. **Beispiel 2:** Der Beckenkamm ist knochig-tragend — ein fester Griff dort ist stabil. Die Taille darüber ist weich — Griff dort drückt Leber, Milz oder Darm.",
          glossarBegriffe: ["Funktionale Anatomie", "Beckenkamm", "Schulterblatt"],
        },
        contentB1: {
          title: "Knochen tragen, Muskeln bewegen",
          body: "Regel: **Knochen tragen — Muskeln bewegen.** Das Skelett hält das Gewicht. Die Muskeln verschieben es. Für dich heißt das: Du fasst am Knochen an, nicht am Muskel. **Gute Orte:** Becken-Seite (Beckenkamm), Schulter-Rücken (Schulterblatt), Brust-Seite. **Schlechte Orte:** Ober-Arm-Muskel, Ober-Schenkel-Muskel, Bauch. Warum? Wenn du den Muskel drückst, zieht er sich zusammen. Der Patient wird steif. Er kann sich nicht mehr bewegen. Wenn du den Knochen anfasst, spürt er nur die Richtung. Er kann mitmachen.",
          glossarBegriffe: ["Funktionale Anatomie", "Beckenkamm", "Schulterblatt"],
        },
      },
    },
    glossarBegriffe: ["Funktionale Anatomie", "Beckenkamm", "Schulterblatt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: transfer-bett-stuhl (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-transfer-bett-stuhl",
    themaId: "kinaesthetik",
    titel: "Transfer Bett → Stuhl",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr M. soll vom Bett auf den Rollstuhl. Was machst du ALS ERSTES — bevor du ihn berührst?",
      antwort:
        "Als Erstes die Umgebung vorbereiten: Rollstuhl im 45°-Winkel, Bremsen anziehen, Fußstützen entfernen, Betthöhe einstellen. Erst dann Herrn M. informieren und an die Bettkante bringen. Vorbereitung ist 50 Prozent des Transfers — viele Zwischenfälle passieren durch schlechte Umgebungsvorbereitung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein sicherer kinästhetischer Transfer läuft in klaren Schritten ab: Umgebung vorbereiten → Patient informieren → an die Bettkante bringen → Sitz stabilisieren → Gewicht nach vorn verlagern → gemeinsam aufstehen → auf Füße drehen → absitzen. Der häufigste Fehler: zu schnell, zu ungeduldig. Das Tempo bestimmt der Patient.",
      textB1:
        "Transfer geht in klaren Schritten: Umgebung vorbereiten → sagen was passiert → an die Bett-Kante → Gewicht nach vorne → gemeinsam aufstehen → drehen → hinsetzen. Das Tempo bestimmt der Patient, nicht die Pflege.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-08",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)", "DNQP 2020"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-transfer",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "prozedur",
        imageAlt:
          "Sieben-Bild-Sequenz: Rollstuhl schräg ans Bett, Bremsen an, Patient an Bettkante, Füße auf Boden, Vorneigung, gemeinsames Aufstehen, Drehen und Absitzen",
        bildhinweis:
          "7-step sequence showing wheelchair transfer: wheelchair at 45 degrees, patient sitting at bed edge, leaning forward, standing together, turning, sitting down, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Transfer Bett → Stuhl: 8 Schritte",
          body: "**1. Umgebung vorbereiten:** Rollstuhl im 45°-Winkel zum Bett, Bremsen an, Fußstützen weg. Betthöhe so, dass Füße des Patienten an der Bettkante den Boden erreichen. **2. Informieren:** 'Ich helfe Ihnen auf den Rollstuhl. Wir setzen uns erst an die Bettkante, dann stehen wir gemeinsam auf.' **3. An die Bettkante:** Beine über die Bettkante führen lassen, gleichzeitig Oberkörper seitlich aufrichten mit Unterstützung am Schulterblatt. **4. Sitz stabilisieren:** Kurz sitzen lassen, Kreislauf-Check. **5. Gewicht nach vorn:** 'Beugen Sie sich zu mir.' Schultern über die Knie. **6. Gemeinsames Aufstehen:** Herr M. drückt mit den Beinen, Pflegekraft begleitet — nicht ziehen. **7. Auf Füße drehen:** Kleine Schritte, gemeinsam Richtung Rollstuhl. **8. Absitzen:** Rollstuhl spürbar mit Knierückseite, dann kontrolliertes Hinsetzen.",
          glossarBegriffe: ["Gewichtsverlagerung", "Eigenbewegung"],
        },
        contentB1: {
          title: "Transfer Bett → Stuhl: 8 Schritte",
          body: "**1. Vorbereiten:** Stuhl schräg ans Bett (45 Grad). Bremsen an. Bett-Höhe so, dass Füße auf dem Boden sind. **2. Sagen, was passiert:** 'Herr M., wir wechseln in den Stuhl.' **3. An die Bett-Kante:** Beine über die Kante. Ober-Körper auf-richten. **4. Kurz sitzen:** Füße auf dem Boden. Schwindelig? **5. Nach vorne beugen:** Schultern über die Knie. **6. Auf-stehen:** Herr M. drückt mit den Beinen. Du begleitest. Nicht ziehen! **7. Drehen:** Kleine Schritte Richtung Stuhl. **8. Hinsetzen:** Stuhl spüren, dann langsam setzen.",
          glossarBegriffe: ["Gewichtsverlagerung", "Eigenbewegung"],
        },
      },
    },
    glossarBegriffe: ["Gewichtsverlagerung", "Eigenbewegung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: drehen-in-seitenlage (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-drehen-seitenlage",
    themaId: "kinaesthetik",
    titel: "Drehen in die Seitenlage",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du willst Frau B. aus der Rückenlage auf die linke Seite drehen. Welches Bein stellst du zuerst auf — rechts oder links?",
      antwort:
        "Das rechte (gegenseitige) Bein — man dreht nach links, also stellt man die Gegenseite auf. Das aufgestellte Bein wird zum Drehpunkt, über den der Patient nach links rollt. Pflegekraft begleitet an Schulterblatt und Beckenkamm, zieht nie am Arm.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Regel beim Drehen: Das Bein der GEGENseite wird aufgestellt — du drehst nach links, also stellst du das rechte Bein auf. Der gleichseitige Arm (links) wird frei gehalten, der gegenseitige (rechts) über die Brust gelegt. Dann rollt der Patient über das aufgestellte Bein auf die Seite — Pflegekraft begleitet am Becken.",
      textB1:
        "Du willst nach links drehen — also stellst du das RECHTE Bein auf (die Gegen-Seite). Das rechte Bein ist der Dreh-Punkt. Der Patient rollt über dieses Bein nach links. Du hilfst am Schulterblatt und Becken.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-09",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-drehen",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "prozedur",
        imageAlt:
          "Fünf-Bild-Sequenz: Patientin in Rückenlage, rechtes Bein wird aufgestellt, rechter Arm über Brust gelegt, Pflegekraft begleitet Drehung, Patientin in Seitenlage mit Kissen",
        bildhinweis:
          "5-step sequence showing turning patient to left side: patient supine, right leg raised, right arm across chest, caregiver supporting at shoulder blade and pelvis, patient in side position, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Drehen in die Seitenlage — 7 Schritte",
          body: "**1. Informieren:** 'Frau B., ich helfe Ihnen auf die linke Seite. Ich zähle bis drei, dann rollen wir gemeinsam.' **2. Gegenseitiges Bein aufstellen:** Du willst nach links drehen, also stellst du das RECHTE Bein (Gegenseite) auf — Fuß flach aufs Bett, Knie nach oben. **3. Arme positionieren:** Linker Arm (Drehseite) seitlich neben den Körper. Rechter Arm (Gegenseite) locker über den Brustkorb gelegt. **4. Kopf mit-drehen:** Frau B. bittest du, den Kopf zuerst nach links zu drehen — der Blick führt die Bewegung. **5. Drehung einleiten:** Du stehst auf der Drehseite. Eine Hand leicht am rechten Schulterblatt, andere Hand am rechten Beckenkamm. **6. Begleiten, nicht drehen:** Der Patient rollt über das aufgestellte rechte Bein. Du führst die Richtung und bremsst wenn nötig. **7. Positionieren:** Becken und Schulter in stabilem Winkel, Kissen zur Lagerung.",
          glossarBegriffe: ["Eigenbewegung", "Beckenkamm", "Schulterblatt"],
        },
        contentB1: {
          title: "Drehen in die Seitenlage — 7 Schritte",
          body: "**1. Sagen, was passiert:** 'Frau B., wir drehen uns gemeinsam auf die linke Seite.' **2. Bein aufstellen:** Das rechte Bein auf-stellen (die Gegen-Seite). Fuß flach aufs Bett. **3. Arm legen:** Rechter Arm über die Brust. Linker Arm bleibt frei. **4. Kopf drehen:** Kopf zu-erst nach links drehen. **5. Drehen:** 'Eins, zwei, drei — auf die Seite.' Du hilfst am Schulterblatt und am Becken. **6. Landen:** Frau B. rollt über das rechte Bein auf die linke Seite. **7. Lagerung:** Kissen zur Seite oder in den Rücken.",
          glossarBegriffe: ["Eigenbewegung", "Beckenkamm", "Schulterblatt"],
        },
      },
    },
    glossarBegriffe: ["Eigenbewegung", "Beckenkamm", "Schulterblatt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: menschliche-bewegung-gewichtsverlagerung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-gewichtsverlagerung",
    themaId: "kinaesthetik",
    titel: "Gewichtsverlagerung beim Aufstehen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Versuche mal, aufzustehen, ohne dich nach vorne zu beugen. Was passiert?",
      antwort:
        "Aufstehen ohne Vorneigung ist fast unmöglich — auch für Gesunde. Aufstehen ist keine Kraft-Aufgabe, sondern eine Gewichts-Aufgabe: Der Oberkörper muss über die Knie kommen, damit die Beine das Gesamtgewicht aufnehmen können. Für Patienten gilt dasselbe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Aufstehen ist keine Kraft-Aufgabe, sondern eine Gewichts-Aufgabe. Der Körper verlagert das Gewicht erst nach vorn über die Füße — erst dann können Hüft- und Kniegelenke strecken. Wenn du das bei dir selbst probierst, merkst du: ohne Vorneigung geht nichts. Für Patienten gilt dasselbe.",
      textB1:
        "Probiere es selbst: Setz dich gerade hin. Jetzt stehe auf, OHNE dich nach vorne zu beugen. Geht nicht, oder? Aufstehen geht nur wenn man sich nach vorne beugt — Schultern über die Knie. Erst dann strecken die Beine sich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-gewichtsverlagerung",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Gewichtsverlagerung beim Aufstehen",
          body: "Menschliche Bewegung läuft über Gewichtsverlagerung zwischen den 7 Massen des Körpers. **Beispiel Aufstehen:** Zuerst verlagert sich das Gewicht des Oberkörpers nach vorn — die Schultern kommen über die Knie. Erst DANN können die Beine das Gesamtgewicht aufnehmen und aufrichten. Ohne Vorneigung ist Aufstehen fast unmöglich, auch für einen Gesunden. Für dich als Pflegekraft heißt das: wenn ein Patient Probleme hat aufzustehen, ist die erste Frage NICHT 'wie viel Kraft braucht er?', sondern **'kommt das Gewicht nach vorn?'**. Wenn du an den Schultern ziehst, ziehst du das Gewicht tendenziell zurück — genau das Gegenteil. Stattdessen: Hand am Schulterblatt, leichte Führung nach vorn, 'Kommen Sie zu mir'.",
          glossarBegriffe: ["Gewichtsverlagerung"],
        },
        contentB1: {
          title: "Gewichtsverlagerung beim Aufstehen",
          body: "Aufstehen ist kein Kraft-Problem. Es ist ein Gewichts-Problem. Probiere es selbst: Setz dich gerade hin. Jetzt stehe auf, OHNE dich nach vorne zu beugen. Geht nicht, oder? Aufstehen funktioniert so: Zuerst kommen die Schultern nach vorne über die Knie. Dann strecken sich die Beine. Das gilt auch für ältere Patienten. Wenn ein Patient schwer aufsteht, hilft ihm nicht mehr Kraft. Ihm hilft: Sich nach vorne beugen. Sag ihm: **'Kommen Sie zu mir, Nase über die Knie.'**",
          glossarBegriffe: ["Gewichtsverlagerung"],
        },
      },
    },
    glossarBegriffe: ["Gewichtsverlagerung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: umgebung-arbeitshoehe (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-umgebung-arbeitshoehe",
    themaId: "kinaesthetik",
    titel: "Umgebung und Arbeitshöhe",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du machst morgens 8 Transfers. Das Bett ist immer zu tief. Was passiert nach 2 Jahren?",
      antwort:
        "Dauerhaft zu tiefe Arbeitshöhe führt zu Bandscheibenschäden und Schulterprobleme — oft ein Ausstieg aus dem Pflegeberuf nach 5-10 Jahren. Die BGW nennt Arbeitshöhe als einen der wichtigsten Präventionsfaktoren. 5 Sekunden Höhenanpassung zahlen sich Jahrzehnte aus.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vor jeder Bewegung prüfst du die Umgebung: Ist das Bett auf Arbeitshöhe? Steht der Rollstuhl im 45°-Winkel? Ist der Weg frei? Die Umgebung ist kein Schicksal — du stellst sie aktiv ein. Betthöhe anpassen dauert 5 Sekunden und schützt deinen Rücken über Jahre.",
      textB1:
        "Bevor du einen Patienten bewegst, prüfst du: Ist das Bett hoch genug für MICH? Ist der Stuhl im richtigen Winkel? Kann der Patient den Boden berühren? Diese Checks dauern Sekunden. Wer sie ver-gisst, bekommt Rücken-Schmerzen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-11",
        phase: 1,
        stepType: "hotspot",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["BGW — Berufsgenossenschaft Gesundheitsdienst", "ArbSchG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-umgebung",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "szene",
        imageAlt:
          "Pflegekraft in korrekter Arbeitshaltung vor höhenverstellbarem Bett: breiter Stand, Knie gebeugt, Bett auf Hüfthöhe, aufrechte Körperhaltung",
        bildhinweis:
          "Nurse in correct working posture at adjustable hospital bed: wide stance, knees slightly bent, bed at hip height, upright spine, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Umgebung und Arbeitshöhe",
          body: "Umgebung ist das sechste Kinästhetik-Konzept — und das am häufigsten vernachlässigte. Zentrale Checks: **Betthöhe** (für dich etwa Hüfthöhe bei Transfers; für den Patienten beim Aufstehen so, dass seine Füße den Boden erreichen), **Rollstuhl-Winkel** (45° zum Bett), **Fußstützen** (weg, damit Patient den Boden erreicht), **Licht** (reicht es, um Details zu erkennen?), **Schuhwerk** des Patienten (feste Sohle?). Diese Checks dauern jeweils Sekunden. Wer sie überspringt, spart kurzfristig Zeit und verliert langfristig Rücken und Sicherheit. **Die Berufsgenossenschaft Gesundheitsdienst (BGW)** nennt Arbeitshöhe als einen der wichtigsten Präventionsfaktoren gegen Rückenleiden in der Pflege.",
          glossarBegriffe: ["Arbeitshöhe", "DNQP-Expertenstandard Mobilität"],
        },
        contentB1: {
          title: "Umgebung und Arbeitshöhe",
          body: "Das sechste Konzept ist die **Umgebung**. Bevor du einen Patienten bewegst, prüfst du: Ist das Bett hoch genug für MICH? Ist der Stuhl im richtigen Winkel (45 Grad)? Sind die Fuß-Stützen weg? Kann der Patient den Boden berühren? Ist Licht da? Hat der Patient feste Schuhe? Diese Checks dauern Sekunden. Wer sie ver-gisst, bekommt Rücken-Schmerzen. Die Berufs-Genossenschaft sagt: **Bett-Höhe ist einer der wichtigsten Punkte gegen Rücken-Leiden**. Bett hoch-fahren dauert 5 Sekunden — Rücken-OP dauert Jahre.",
          glossarBegriffe: ["Arbeitshöhe"],
        },
      },
    },
    glossarBegriffe: ["Arbeitshöhe"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: neurologische-patienten-bobath (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-bobath-schnittstelle",
    themaId: "kinaesthetik",
    titel: "Hemiplegie und Bobath-Konzept",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr S. hatte einen Schlaganfall, rechte Seite gelähmt. Du sollst ihn auf die rechte (betroffene) Seite drehen. Darfst du das? Und wenn ja — was ist anders als bei einem nicht-neurologischen Patienten?",
      antwort:
        "Ja, Drehen auf die betroffene Seite ist erlaubt und sogar erwünscht (fördert Wahrnehmung, Bobath-Prinzip). Aber: Niemals am betroffenen Arm ziehen — Subluxationsgefahr der Schulter bei fehlender Muskelspannung. Betroffenen Arm vor dem Drehen auf den Brustkorb legen. Kinästhetik und Bobath ergänzen sich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kinästhetik und Bobath-Konzept sind vereinbar: beide aktivieren Eigenbewegung. Bobath betont zusätzlich die bewusste Einbeziehung der betroffenen Seite — sie soll nicht ignoriert werden. Wichtige Regeln bei Hemiplegie: niemals am betroffenen Arm ziehen (Subluxationsgefahr Schulter), Transfer über die wenig betroffene Seite einleiten, betroffene Seite bewusst mitnehmen.",
      textB1:
        "Bei Schlaganfall (eine Seite gelähmt): Die gelähmte Seite wird mit-einbezogen, nicht ignoriert. ABER: Niemals am gelähmten Arm ziehen. Die Schulter kann sich ver-renken (Sub-Luxation). Den gelähmten Arm vor dem Drehen auf die Brust legen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-12",
        phase: 1,
        stepType: "branching",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Hatch/Maietta (1970er)", "Bobath, B./K. (1948)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kinaesthetik-bobath",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Hemiplegie und Bobath-Konzept",
          body: "Bei Patienten mit Schlaganfall, Parkinson oder MS ist Kinästhetik weiterhin anwendbar — mit Ergänzungen aus dem Bobath-Konzept. **Zentrale Regel bei Hemiplegie:** Die betroffene Seite wird einbezogen, nicht vermieden. **Konkret bei Herrn S. (rechts gelähmt):** Drehen auf die rechte Seite ist erlaubt und sogar erwünscht — es fördert die Wahrnehmung. ABER: **Niemals am betroffenen (rechten) Arm ziehen.** Die Schulter hat bei Hemiplegie kaum Muskelspannung, der Humeruskopf kann sich luxieren. Stattdessen: den rechten Arm vor dem Drehen behutsam auf den Brustkorb legen. Transfer: Starte über die weniger betroffene (linke) Seite — stabiler Halt möglich. **Merke: Kinästhetik + Bobath = ein Team, kein Widerspruch.**",
          glossarBegriffe: [
            "Hemiplegie",
            "Subluxation",
            "Bobath-Konzept",
            "Humeruskopf",
          ],
        },
        contentB1: {
          title: "Hemiplegie und Bobath-Konzept",
          body: "Bei Schlaganfall, Parkinson oder MS gilt Kinästhetik auch — plus Regeln aus dem Bobath-Konzept. **Wichtigste Regel:** Die gelähmte Seite darf NICHT ignoriert werden. Sie wird mit-einbezogen. **ABER: Niemals am gelähmten Arm ziehen.** Die Schulter kann sich ver-renken (Sub-Luxation). Statt-dessen: Den gelähmten Arm vor dem Drehen auf die Brust legen. Beim Transfer: Starte über die gesunde Seite — das ist stabiler. **Kinästhetik und Bobath widersprechen sich NICHT — sie ergänzen sich.**",
          glossarBegriffe: [
            "Hemiplegie",
            "Subluxation",
            "Bobath-Konzept",
            "Humeruskopf",
          ],
        },
      },
    },
    glossarBegriffe: ["Hemiplegie", "Subluxation", "Bobath-Konzept", "Humeruskopf"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: selbstschutz-pflegekraft (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kinaesthetik-selbstschutz-pflegekraft",
    themaId: "kinaesthetik",
    titel: "Selbstschutz der Pflegekraft",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Statistisch steigen 40 Prozent der Pflegekräfte nach 10 Jahren wegen Rückenschäden aus. Was kannst DU heute tun, damit das nicht dein Weg wird?",
      antwort:
        "Drei konkrete Schritte: (1) Bett immer auf Arbeitshöhe einstellen, bevor du beginnst. (2) Bei jedem Transfer prüfen: drücke ich oder ziehe ich? Passt das zur Bewegungsrichtung? (3) Kinästhetik-Fortbildung einfordern — das ist kein Wunsch, sondern ein Recht aus dem Arbeitsschutzgesetz (ArbSchG).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Selbstschutz ist kein Egoismus — er ist Voraussetzung für gute Pflege. Drei Grundregeln: Arbeitshöhe einstellen (Bett hoch), Gewicht am eigenen Körper verlagern statt aus dem Rücken heben, mit dem Patienten arbeiten statt gegen ihn. Breiter Stand, Knie gebeugt, Beckenmitte über Fußmitte.",
      textB1:
        "Drei Regeln schützen dich: 1. Bett hoch einstellen (auf deine Hüft-Höhe). 2. Breiter Stand, Knie gebeugt, dein Ge-wicht bewegt mit. 3. Mit dem Patienten arbeiten — seine Bewegung nutzen. Niemals: über-gebückt aus dem Rücken heben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kinae-wb-13",
        phase: 1,
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: [
          "BGW — Berufsgenossenschaft Gesundheitsdienst",
          "ArbSchG",
        ],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce02-kinaesthetik-selbstschutz",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "szene",
        imageAlt:
          "Pflegekraft in korrekter Arbeitshaltung: breiter Stand, Knie gebeugt, Bett auf Hüfthöhe, Blick zum Patienten, aufrechte Wirbelsäule",
        bildhinweis:
          "Nurse demonstrating correct work posture: wide stance, bent knees, bed raised to hip height, spine neutral, focused expression, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Selbstschutz der Pflegekraft",
          body: "Rückenschäden sind einer der häufigsten Gründe für Berufsausstieg in der Pflege. Die Berufsgenossenschaft Gesundheitsdienst (BGW) beziffert rückenbedingte Ausfälle als führend in der Unfallstatistik. Kinästhetik ist deshalb nicht nur Patientenfürsorge, sondern auch Selbstschutz. **Drei zentrale Regeln:** **(1) Arbeitshöhe:** Bett hoch auf deine Hüfthöhe, bevor du arbeitest. **(2) Gewicht am eigenen Körper:** breiter Stand, Knie gebeugt, dein Gewicht wird mitbewegt — nicht der Patient wird 'über deinen Rücken' gehoben. **(3) Mit dem Patienten:** seine Eigenbewegung nutzen, auch minimal. Kein Dauer-Drehen aus dem gebeugten Rücken, keine Rotations-Hebel. **Der Arbeitgeber ist nach Arbeitsschutzgesetz (ArbSchG) verpflichtet, kinästhetische Fortbildungen zu ermöglichen** — das kannst und sollst du einfordern. Rückenprävention ist keine Privatsache.",
          glossarBegriffe: ["Arbeitshöhe", "Eigenbewegung"],
        },
        contentB1: {
          title: "Selbstschutz der Pflegekraft",
          body: "Rücken-Schmerzen sind ein Haupt-Grund, warum Pflege-Kräfte ihren Beruf auf-geben müssen. Das muss dich nicht treffen. **Drei Regeln schützen dich:** 1. **Bett hoch einstellen** (auf deine Hüft-Höhe). 2. **Breiter Stand, Knie gebeugt**, dein Ge-wicht bewegt mit. 3. **Mit dem Patienten arbeiten** — seine Bewegung nutzen. Niemals: über-gebückt aus dem Rücken heben. Niemals: mit Drehung heben. **Dein Arbeit-Geber MUSS dir Kinästhetik-Fortbildungen an-bieten** — das ist Gesetz (ArbSchG). Frag danach!",
          glossarBegriffe: ["Arbeitshöhe", "Eigenbewegung"],
        },
      },
    },
    glossarBegriffe: ["Arbeitshöhe", "Eigenbewegung"],
    karteikarten: [],
  },
];
