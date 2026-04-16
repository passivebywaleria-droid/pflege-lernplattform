// LE-06: Menschen aller Altersstufen in ihrer Mobilität unterstuetzen
// Steps S4: Pfade 13-16 (Dekubitus-, Sturz-, Kontrakturen-, Thromboseprophylaxe)
// Bloom: B1-B3, 1. Ausbildungsdrittel
// HINWEIS: Alle Pfade im Plan als Kurzformat — Details auf Basis der Step-Titel und Quellenreferenzen ergaenzt

import type { ContentStep } from "../_types";

export const LE06_STEPS_S4: ContentStep[] = [
  {
    stepId: "le-06-s4-tb13-01",
    phase: "s4",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F43",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Vorwissen zu Dekubitus aktivieren",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Was ist ein Dekubitus?",
      body: "Was weißt du schon? Stimme ab.",
    },
    contentB1: {
      title: "Was ist ein Dekubitus?",
      body: "Was weißt du? Wähle.",
    },
    question: {
      fragetext: "Was ist deiner Meinung nach ein Dekubitus?",
    },
  },
  {
    stepId: "le-06-s4-tb13-02",
    phase: "s4",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F43",
      "EPUAP/NPUAP 2014",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Definition Dekubitus nach EPUAP/NPUAP kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    displayFormat: "glossary",
    contentC1: {
      title: "Definition und Entstehung",
      body: "Ein Dekubitus ist eine lokal begrenzte Schädigung der Haut und/oder des darunter liegenden Gewebes, meist über Knochenvorsprüngen. Ursache: Druck oder Druck in Kombination mit Scherkräften (EPUAP/NPUAP 2014).",
    },
    contentB1: {
      title: "Was ist ein Dekubitus?",
      body: "Ein Dekubitus ist eine Wunde. Sie entsteht durch Druck auf die Haut. Oft an Stellen, wo Knochen nah unter der Haut liegen.",
    },
  },
  {
    stepId: "le-06-s4-tb13-03",
    phase: "s4",
    stepType: "timeline",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F44",
      "EPUAP/NPUAP 2014",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "4 Kategorien nach EPUAP unterscheiden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "4 Kategorien nach EPUAP/NPUAP",
      body: "Dekubitus wird in 4 Schweregrade eingeteilt: Grad I (Rötung), Grad II (Teilverlust Haut), Grad III (voller Hautverlust, Subkutangewebe sichtbar, KEIN Knochen), Grad IV (Muskel UND Knochen sichtbar).",
    },
    contentB1: {
      title: "4 Stufen",
      body: "Ein Dekubitus hat 4 Stufen: Grad I leicht, Grad II mittel, Grad III schwer, Grad IV sehr schwer.",
    },
    question: {
      fragetext: "Ordne die 4 Kategorien.",
      timeline: {
        instruction: "Lies die Zeitleiste.",
        events: [
          {
            id: "k1",
            time: "Kat I",
            title: "Grad I — Nicht wegdrückbare Rötung",
            description: "Haut intakt, bleibt gerötet nach Druckentlastung",
          },
          {
            id: "k2",
            time: "Kat II",
            title: "Grad II — Teilverlust der Haut",
            description: "Blase oder oberflächliche Wunde",
          },
          {
            id: "k3",
            time: "Kat III",
            title: "Grad III — Vollständiger Hautverlust",
            description: "Fettgewebe sichtbar, KEIN Knochen/Sehne/Muskel",
          },
          {
            id: "k4",
            time: "Kat IV",
            title: "Grad IV — Vollständiger Gewebeverlust",
            description: "Muskel, Sehne UND Knochen sichtbar",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-04",
    phase: "s4",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F45",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Prädilektionsstellen in Rückenlage erkennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Prädilektionsstellen Rückenlage",
      body: "Wo entsteht ein Dekubitus besonders häufig in Rückenlage?",
    },
    contentB1: {
      title: "Gefährdete Stellen",
      body: "Wo ist das Risiko am größten?",
    },
    question: {
      fragetext: "Markiere die gefährdeten Stellen in Rückenlage.",
      hotspot: {
        imageUrl: "/images/content/le-06/hotspot-koerper-rueckenlage.svg",
        imageAlt: "Körperumriss in Rückenlage mit Prädilektionsstellen",
        instruction: "Markiere die gefährdeten Stellen in Rückenlage.",
        zones: [
          {
            id: "h1",
            x: 50,
            y: 20,
            radius: 8,
            label: "Hinterkopf",
          },
          {
            id: "h2",
            x: 45,
            y: 40,
            radius: 8,
            label: "Schulterblätter",
          },
          {
            id: "h3",
            x: 50,
            y: 55,
            radius: 8,
            label: "Steißbein/Sakrum",
          },
          {
            id: "h4",
            x: 50,
            y: 90,
            radius: 8,
            label: "Fersen",
          },
          {
            id: "h5",
            x: 30,
            y: 60,
            radius: 8,
            label: "Ellbogen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-05",
    phase: "s4",
    stepType: "hotspot",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F45",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Prädilektionsstellen in Seitenlage erkennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Prädilektionsstellen Seitenlage",
      body: "Wo entsteht ein Dekubitus in Seitenlage besonders häufig?",
    },
    contentB1: {
      title: "Seitenlage: gefährdete Stellen",
      body: "Wo ist das Risiko am größten?",
    },
    question: {
      fragetext: "Markiere die gefährdeten Stellen in Seitenlage.",
      hotspot: {
        imageUrl: "/images/content/le-06/hotspot-koerper-seitenlage.svg",
        imageAlt: "Körperumriss in Seitenlage mit Prädilektionsstellen",
        instruction: "Markiere die gefährdeten Stellen in Seitenlage.",
        zones: [
          {
            id: "h1",
            x: 30,
            y: 30,
            radius: 8,
            label: "Ohr",
          },
          {
            id: "h2",
            x: 35,
            y: 45,
            radius: 8,
            label: "Schulter (acromion)",
          },
          {
            id: "h3",
            x: 40,
            y: 60,
            radius: 8,
            label: "Trochanter major",
          },
          {
            id: "h4",
            x: 50,
            y: 80,
            radius: 8,
            label: "Knöchel (malleolus)",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-06",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F46",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Fingertest korrekt interpretieren",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Fingertest",
      body: "Du drückst mit dem Finger auf eine gerotete Hautstelle. Was bedeutet das Ergebnis?",
    },
    contentB1: {
      title: "Fingertest",
      body: "Du drückst auf eine rote Stelle. Was bedeutet das?",
    },
    question: {
      fragetext: "Die Rötung bleibt nach dem Wegdrücken bestehen. Was bedeutet das?",
      optionen: [
        {
          text: "Normale Durchblutung, kein Risiko",
          isCorrect: false,
          explanation: "Nachvollziehbar gedacht — aber genau das ist der Fingertest-Befund: Wenn die Rötung auf Druck bleibt (nicht wegdrückbar), ist es KEINE normale Durchblutung mehr, sondern bereits Dekubitus Grad I. Merke: Weg­drückbar = ok, bleibend = Alarm.",
          explanationB1: "Gut überlegt — aber der Test zeigt etwas anderes. Bei normaler Durchblutung wäre die Haut kurz weiß. Wenn die Rötung bleibt, ist es Grad I. Du kannst das beim nächsten Mal gut erkennen!",
        },
        {
          text: "Dekubitus Kategorie I liegt vor",
          isCorrect: true,
          explanation: "Richtig. Nicht wegdrückbare Rötung ist definitionsgemäß Kat I.",
          explanationB1: "Richtig. Das ist Dekubitus Stufe I.",
        },
        {
          text: "Eine Allergie der Haut",
          isCorrect: false,
          explanation: "Nein, eine Allergie zeigt andere Symptome (Juckreiz, Quaddeln).",
          explanationB1: "Nein, eine Allergie sieht anders aus.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb13-07",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F47",
      "Braden/Bergstrom 1987",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "6 Subskalen der Braden-Skala kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Braden-Skala",
      body: "Die Braden-Skala hat 6 Subskalen zur Risikoeinschätzung.",
    },
    contentB1: {
      title: "Braden-Skala",
      body: "Die Braden-Skala hat 6 Bereiche.",
    },
    question: {
      fragetext: "Drehe die Karten, um die 6 Subskalen zu sehen.",
      flipcard: {
        instruction: "Drehe die Karten, um die 6 Subskalen zu sehen.",
        cards: [
          {
            front: "Sensorik",
            back: "Fähigkeit, auf Druckbeschwerden zu reagieren",
          },
          {
            front: "Feuchtigkeit",
            back: "Ausmaß, in dem die Haut Feuchtigkeit ausgesetzt ist",
          },
          {
            front: "Aktivität",
            back: "Ausmaß der körperlichen Aktivität",
          },
          {
            front: "Mobilität",
            back: "Fähigkeit, die Körperposition zu ändern",
          },
          {
            front: "Ernährung",
            back: "Ernährungsgewohnheiten",
          },
          {
            front: "Reibung/Scherkräfte",
            back: "Reibung und Scherkräfte im Liegen/Sitzen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-08",
    phase: "s4",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F47",
      "Braden/Bergstrom 1987",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Braden-Score interpretieren",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Braden-Score",
      body: "Ab welchem Wert besteht ein hohes Dekubitusrisiko?",
    },
    contentB1: {
      title: "Braden-Score",
      body: "Ab welchem Wert ist das Risiko hoch?",
    },
    question: {
      fragetext: "Stelle den Schwellenwert für hohes Risiko ein.",
      slider: {
        instruction: "Wähle den Wert.",
        unit: "Punkte",
        min: 6,
        max: 23,
        step: 1,
        correctValue: 12,
        tolerance: 1,
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-09",
    phase: "s4",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F48",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Risikofaktoren korrekt einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 20,
    contentC1: {
      title: "Risikofaktoren",
      body: "Ordne die Risikofaktoren zu.",
    },
    contentB1: {
      title: "Risikofaktoren",
      body: "Sortiere die Risikofaktoren.",
    },
    question: {
      fragetext: "Ordne die Risikofaktoren den Kategorien zu.",
      categories: [
        {
          name: "Person",
        },
        {
          name: "Umgebung",
        },
        {
          name: "Therapie",
        },
      ],
      categoryItems: [
        {
          text: "Hohes Alter",
          correctCategory: 0,
        },
        {
          text: "Mangelernährung",
          correctCategory: 0,
        },
        {
          text: "Inkontinenz",
          correctCategory: 0,
        },
        {
          text: "Falten im Bettlaken",
          correctCategory: 0,
        },
        {
          text: "Harte Matratze",
          correctCategory: 0,
        },
        {
          text: "Sedierende Medikamente",
          correctCategory: 0,
        },
        {
          text: "Katheter/Sonde unter dem Körper",
          correctCategory: 0,
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb13-10",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F49",
      "DNQP 2017",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Maßnahme und Ziel verknüpfen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Maßnahme und Ziel",
      body: "Welche Maßnahme verfolgt welches Ziel?",
    },
    contentB1: {
      title: "Maßnahme und Ziel",
      body: "Was passt zusammen?",
    },
    question: {
      fragetext: "Ordne Maßnahme und Ziel einander zu.",
      matchingPairs: [
        {
          left: "Bewegungsförderung",
          right: "Erste Wahl der Prophylaxe",
        },
        {
          left: "Spezialmatratze",
          right: "Wenn Eigenbewegung nicht reicht",
        },
        {
          left: "Hautpflege",
          right: "Feuchtigkeit reduzieren",
        },
        {
          left: "Umlagerung nach Risiko",
          right: "Druck periodisch entlasten",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb13-11",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F49",
      "DNQP 2017",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Mythen von Evidenz unterscheiden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Evidenzbasiert oder Mythos?",
      body: "Prüfe die Aussage.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Prüfe die Aussage.",
    },
    question: {
      fragetext: "Einreiben mit durchblutungsfördernden Mitteln hilft bei der Dekubitusprophylaxe.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: false,
          explanation: "Guter Gedanke — Einreiben klingt pflegend und war früher üblich. Aber DNQP 2017 zeigt klar: Massage und Einreiben über Knochenvorsprüngen sind obsolet und schaden mehr als sie nützen (Gewebetrauma + zusätzliche Scherkräfte). Merke: Positionieren und Druck entlasten statt einreiben.",
        },
        {
          text: "Falsch",
          isCorrect: true,
          explanation: "Genau richtig! Du hast die aktuelle Leitlinie verstanden: Massage schadet mehr als sie nützt. Die wirksame Prophylaxe läuft über Positionierung, Mikro-Lagerung und Hautpflege ohne Reiben.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb13-12",
    phase: "s4",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F49",
      "DNQP 2017",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Evidenzbasierte Maßnahmen erkennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Evidenzbasiert?",
      body: "Swipe die Maßnahmen in die richtige Kategorie.",
    },
    contentB1: {
      title: "Hilft es wirklich?",
      body: "Swipe: ja oder nein.",
    },
    question: {
      fragetext: "Ist die Maßnahme evidenzbasiert?",
      swipe: {
        instruction: "Ist die Maßnahme evidenzbasiert?",
        cards: [
          {
            statement: "Eigenbewegung fördern",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Wechseldruckmatratze bei hohem Risiko",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Massage über Sakrum",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Föhnen der Haut",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Hautinspektion mindestens 1x täglich",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-13",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F49",
      "DNQP 2017",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Prinzip Bewegung vor Positionierung verstehen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    displayFormat: "procontra",
    contentC1: {
      title: "Bewegung VOR Positionierung",
      body: "Kernsatz: Eigenbewegung fördern ist wichtiger als passives Lagern. Jede Eigenbewegung verteilt Druck natürlich. Passive Positionierung ist nur Mittel zweiter Wahl, wenn Eigenbewegung nicht reicht (DNQP 2017).",
    },
    contentB1: {
      title: "Bewegung zuerst",
      body: "Selbst bewegen ist besser als von anderen gelagert werden. Erst wenn das nicht geht, hilft Positionierung.",
    },
  },
  {
    stepId: "le-06-s4-tb13-14",
    phase: "s4",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F49",
      "DNQP 2017",
    ],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "Fehler in der Dekubitusprophylaxe identifizieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Fehler erkennen",
      body: "Finde die Fehler in der Dekubitusprophylaxe.",
    },
    contentB1: {
      title: "Was ist falsch?",
      body: "Finde die Fehler.",
    },
    question: {
      fragetext: "Welche Aussagen sind fehlerhaft?",
      errorspot: {
        instruction: "Welche Aussagen sind fehlerhaft?",
        text: "Eine Schülerin beschreibt ihre Dekubitusprophylaxe bei Frau Siebert.",
        errors: [
          {
            start: 0,
            end: 51,
            correction: "",
            explanation: "Massage über Knochenvorsprüngen ist obsolet (DNQP 2017).",
          },
          {
            start: 1,
            end: 47,
            correction: "",
            explanation: "Fixe 2-h-Intervalle sind obsolet. DNQP: individuell nach Risiko.",
          },
          {
            start: 2,
            end: 45,
            correction: "",
            explanation: "Mindestens 1x täglich Hautinspektion ist Pflicht.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-15",
    phase: "s4",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F49",
      "DNQP 2017",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Maßnahmen bei Dekubitus Kat I sortieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Dekubitus Kat I - Ablauf",
      body: "Bringe die Maßnahmen in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Was zuerst?",
      body: "Ordne die Schritte.",
    },
    question: {
      fragetext: "Sortiere die Maßnahmen bei neu entdecktem Dekubitus Kat I.",
      sequencing: {
        instruction: "Sortiere die Maßnahmen bei neu entdecktem Dekubitus Kat I.",
        items: [
          {
            id: "1",
            label: "Sofortige komplette Druckentlastung",
          },
          {
            id: "2",
            label: "Hautinspektion und Dokumentation (Fingertest, Lokalisation)",
          },
          {
            id: "3",
            label: "Ursachen analysieren (Position, Hilfsmittel, Ernährung)",
          },
          {
            id: "4",
            label: "Prophylaxeplan anpassen und Team informieren",
          },
          {
            id: "5",
            label: "Verlauf engmaschig kontrollieren",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-16",
    phase: "s4",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F43",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Dekubitus-Fachbegriffe erinnern",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Dekubitus-Fachbegriffe",
      body: "Finde die passenden Paare.",
    },
    contentB1: {
      title: "Memory",
      body: "Finde die Paare.",
    },
    question: {
      fragetext: "Verbinde Fachbegriff und Bedeutung.",
      memoryPairs: [
        {
          a: "Dekubitus",
          b: "Druckgeschwür",
        },
        {
          a: "Prädilektionsstelle",
          b: "Typische Risikostelle",
        },
        {
          a: "Scherkraft",
          b: "Kraft durch Verschieben der Hautschichten",
        },
        {
          a: "Fingertest",
          b: "Prüfung auf wegdrückbare Rötung",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb13-17",
    phase: "s4",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F43",
      "F49",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Dekubitusprophylaxe zusammenfassen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Zusammenfassung",
      body: "Fülle die Lücken.",
    },
    contentB1: {
      title: "Lückentext",
      body: "Fülle die Lücken.",
    },
    question: {
      fragetext: "Fülle die Lücken.",
      cloze: {
        textWithBlanks: "Ein Dekubitus entsteht durch ___ und ___. Die wichtigste Prophylaxe-Maßnahme ist die ___. Eine fixe 2-Stunden-Regel ist ___.",
        blanks: [
          {
            id: 1,
            correct: "Druck",
            distractors: [],
          },
          {
            id: 2,
            correct: "Scherkräfte",
            distractors: [
              "Scherkraft",
            ],
          },
          {
            id: 3,
            correct: "Bewegungsförderung",
            distractors: [
              "Eigenbewegung",
            ],
          },
          {
            id: 4,
            correct: "obsolet",
            distractors: [
              "veraltet",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb13-18",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F43",
      "F49",
      "DNQP 2017",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Pflegeplan für Frau Siebert formulieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Dekubitus-Pflegeplan",
      body: "Frau Siebert (81, Hüft-OP, Braden-Score 14): Erstelle einen Dekubitusprophylaxe-Plan.",
    },
    contentB1: {
      title: "Pflegeplan schreiben",
      body: "Frau Siebert hat ein Risiko. Was machst du?",
    },
    question: {
      fragetext: "Formuliere 4 konkrete Maßnahmen mit Begründung für Frau Siebert.",
      musterantwort: "Bewegungsförderung priorisieren; Hautinspektion 1x täglich; Mikroumlagerung; Matratzen-Check; keine Massage.",
    },
  },
  {
    stepId: "le-06-s4-tb14-01",
    phase: "s4",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F51",
    ],
    track: "basis",
    modus: "story",
    lernziel: "Sturz-Szenario emotional einbetten",
    themenblockPhase: "SZENE",
    tag: "pflege",
    xpValue: 10,
    displayFormat: "scenario",
    contentC1: {
      title: "Frau Siebert stürzt",
      body: "Tag 4 nach Hüft-OP: Frau Siebert will nachts zur Toilette. Sie klingelt nicht, sie will niemanden stören. Beim Aufstehen wird ihr schwindelig. Sie fällt. Was nun?",
    },
    contentB1: {
      title: "Frau Siebert stürzt",
      body: "Frau Siebert geht nachts zur Toilette. Sie wird schwindelig. Sie fällt hin.",
    },
  },
  {
    stepId: "le-06-s4-tb14-02",
    phase: "s4",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F52",
      "DNQP 2013",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "3 Kategorien von Sturzrisikofaktoren benennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Sturzrisikofaktoren",
      body: "Decke die 3 Kategorien auf.",
    },
    contentB1: {
      title: "Warum stürzen Menschen?",
      body: "Es gibt 3 Gruppen.",
    },
    question: {
      fragetext: "Decke die 3 Kategorien auf.",
      reveal: {
        instruction: "Tippe die Karten an.",
        cards: [
          {
            id: "1",
            label: "Person",
            content: "Alter, Muskelkraft, Sehstörungen, Demenz, Sturzangst — und besonders wichtig: positive Sturzanamnese (= früherer Sturz in den letzten 12 Monaten). Mehr als 50 % stürzen nach einem ersten Sturz erneut.",
          },
          {
            id: "2",
            label: "Medikamente",
            content: "Psychopharmaka, Diuretika, Antihypertensiva",
          },
          {
            id: "3",
            label: "Umgebung",
            content: "Schwelle, Teppich, Beleuchtung, Schuhwerk, Bettseitenteile",
          },
        ],
        revealMode: "free",
      },
    },
  },
  {
    stepId: "le-06-s4-tb14-03",
    phase: "s4",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F52",
      "DNQP 2013",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Risikofaktoren korrekt zuordnen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Risikofaktoren sortieren",
      body: "Ordne zu.",
    },
    contentB1: {
      title: "Sortiere die Faktoren",
      body: "Wohin gehört was?",
    },
    question: {
      fragetext: "Ordne die Risikofaktoren zu.",
      categories: [
        {
          name: "Person",
        },
        {
          name: "Medikamente",
        },
        {
          name: "Umgebung",
        },
      ],
      categoryItems: [
        {
          text: "Schlaftabletten",
          correctCategory: 0,
        },
        {
          text: "Nasser Boden",
          correctCategory: 0,
        },
        {
          text: "Muskelschwäche",
          correctCategory: 0,
        },
        {
          text: "Blutdrucksenker",
          correctCategory: 0,
        },
        {
          text: "Dunkler Flur",
          correctCategory: 0,
        },
        {
          text: "Sehstörung",
          correctCategory: 0,
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb14-04",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F53",
      "Podsiadlo/Richardson 1991",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "TUG-Test-Ergebnisse interpretieren",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "TUG-Test",
      body: "Timed Up and Go: Aufstehen, 3 m gehen, umdrehen, zurücksetzen.",
    },
    contentB1: {
      title: "TUG-Test",
      body: "Der Patient steht auf, geht und setzt sich wieder.",
    },
    question: {
      fragetext: "Frau Siebert braucht 22 Sekunden für den TUG. Wie interpretierst du das?",
      optionen: [
        {
          text: "Keine Sturzgefahr, Wert unter 10 Sekunden",
          isCorrect: false,
          explanation: "Du denkst in die richtige Richtung (Zeitgrenzen). Aber schau auf ihren Wert: 22 Sekunden. Das ist weit über 10. Beim nächsten Mal kannst du die Kategorien gut zuordnen.",
          explanationB1: "Gut, dass du die Zeit anschaust. Aber ihr Wert ist 22, nicht unter 10. Du bist auf dem richtigen Weg!",
        },
        {
          text: "Leicht erhöhtes Risiko, Wert 10-19 Sekunden",
          isCorrect: false,
          explanation: "Fast richtig gedacht — du bist in der mittleren Kategorie. Aber 22 Sekunden liegt schon ≥20, also höchste Risikokategorie. Merke die Grenze: <10 ok, 10–19 erhöht, ≥20 hoch.",
          explanationB1: "Fast — du hast die mittleren Werte im Kopf. Aber 22 ist über 20. Das ist die höchste Stufe.",
        },
        {
          text: "Hohes Sturzrisiko, Wert 20 Sekunden oder mehr",
          isCorrect: true,
          explanation: "Richtig. Ab 20 Sekunden hohes Risiko (Podsiadlo/Richardson 1991).",
          explanationB1: "Richtig. Ab 20 Sekunden: hohes Risiko.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb14-05",
    phase: "s4",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F53",
      "Podsiadlo/Richardson 1991",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "TUG-Schwellenwert schätzen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "TUG-Schwellenwert",
      body: "Ab welchem Wert gilt ein erhöhtes Sturzrisiko?",
    },
    contentB1: {
      title: "Ab wann Risiko?",
      body: "Ab wie vielen Sekunden ist es riskant?",
    },
    question: {
      fragetext: "Schätze den Schwellenwert.",
      estimation: {
        instruction: "Schätze den Schwellenwert.",
        unit: "Sekunden",
        correctValue: 20,
        tolerance: 2,
        funFact: "",
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s4-tb14-06",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F54",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Sturzangst-Spirale verstehen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Sturzangst-Spirale",
      body: "Ein Teufelskreis: Sturz führt zu mehr Sturzrisiko.",
    },
    contentB1: {
      title: "Kreis der Angst",
      body: "Angst macht weitere Stürze wahrscheinlicher.",
    },
    question: {
      fragetext: "Drehe die Karten, um die Spirale zu verstehen.",
      flipcard: {
        instruction: "Drehe die Karten, um die Spirale zu verstehen.",
        cards: [
          {
            front: "Sturz",
            back: "Erstes Ereignis, körperliche/seelische Folgen",
          },
          {
            front: "Angst",
            back: "Vor erneutem Sturz, Selbstvertrauen sinkt",
          },
          {
            front: "Weniger Bewegung",
            back: "Vermeidungsverhalten, Schonhaltung",
          },
          {
            front: "Muskelabbau",
            back: "Sarkopenie, weitere Kraftverluste",
          },
          {
            front: "Erneuter Sturz",
            back: "Risiko steigt durch Dekonditionierung",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb14-07",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F55",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Maßnahme und Risikofaktor verknüpfen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Maßnahme und Ursache",
      body: "Welche Maßnahme passt zu welchem Risikofaktor?",
    },
    contentB1: {
      title: "Was passt?",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Verbinde Maßnahme und Risikofaktor.",
      matchingPairs: [
        {
          left: "Medikamentenreview",
          right: "Psychopharmaka",
        },
        {
          left: "Krafttraining",
          right: "Muskelschwäche",
        },
        {
          left: "Nachtlicht installieren",
          right: "Dunkle Umgebung",
        },
        {
          left: "Antirutschsocken",
          right: "Nasser Boden",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb14-08",
    phase: "s4",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F55",
      "DNQP 2013",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Richtige von falschen Sturzprophylaxe-Maßnahmen unterscheiden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Richtig/Falsch",
      body: "Swipe.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Ist die Maßnahme sinnvoll?",
      swipe: {
        instruction: "Ist die Maßnahme sinnvoll?",
        cards: [
          {
            statement: "Bettseitenteile hochziehen als Standard",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Individuelle Gefahrenanalyse",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Festes Schuhwerk statt Rutschsocken",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Medikamente auf Sturzneigung prüfen",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Bewegung einschränken zum Schutz",
            isCorrect: false,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb14-09",
    phase: "s4",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F56",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Sofortmaßnahmen nach Sturz in Reihenfolge bringen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Nach dem Sturz",
      body: "Bringe die Sofortmaßnahmen in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Was zuerst?",
      body: "Ordne die Schritte.",
    },
    question: {
      fragetext: "Sortiere die Sofortmaßnahmen nach einem Sturz.",
      sequencing: {
        instruction: "Sortiere die Sofortmaßnahmen nach einem Sturz.",
        items: [
          {
            id: "item-1",
            label: "Eigenschutz und Patientensicherheit prüfen",
          },
          {
            id: "item-2",
            label: "Bewusstsein und Vitalzeichen prüfen",
          },
          {
            id: "item-3",
            label: "Verletzungen inspizieren (Körpercheck)",
          },
          {
            id: "item-4",
            label: "Arzt informieren und dokumentieren",
          },
          {
            id: "item-5",
            label: "Sturzprotokoll ausfüllen und Ursachen analysieren",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb14-10",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.3",
    quellen: [
      "F56",
    ],
    track: "vertiefung",
    modus: "praxis-sim",
    lernziel: "Patientin nach Sturz beruhigen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Gespräch nach dem Sturz",
      body: "Frau Siebert liegt am Boden, weint. Du triffst sie an. Führe das Gespräch.",
    },
    contentB1: {
      title: "Mit Frau Siebert sprechen",
      body: "Sie ist gestürzt und weint. Was sagst du?",
    },
    question: {
      fragetext: "Wähle in jeder Phase die beste Reaktion.",
      dialogPhases: [
        {
          context: "Frau Siebert liegt am Boden, weint leise.",
          options: [
            {
              text: "Warum haben Sie nicht geklingelt?",
              patientResponse: "",
              score: 1,
              feedback: "Vorwurf. Sie fühlt sich schuldig.",
            },
            {
              text: "Frau Siebert, ich bin bei Ihnen. Wo tut es weh?",
              patientResponse: "",
              score: 3,
              feedback: "Präsenz und konkrete Frage - genau richtig.",
            },
            {
              text: "Bleiben Sie liegen, ich hole Hilfe.",
              patientResponse: "",
              score: 2,
              feedback: "Ok, aber du lässt sie allein.",
            },
          ],
        },
        {
          context: "Sie sagt: Ich bin so dumm. Ich wollte niemanden stören.",
          options: [
            {
              text: "Das ist doch Quatsch.",
              patientResponse: "",
              score: 1,
              feedback: "Abwertend.",
            },
            {
              text: "Das ist nicht dumm. Klingeln ist wichtig, dafür bin ich da.",
              patientResponse: "",
              score: 3,
              feedback: "Validierung und Aufklärung.",
            },
            {
              text: "Klingeln Sie nächstes Mal.",
              patientResponse: "",
              score: 2,
              feedback: "Richtig, aber kalt.",
            },
          ],
        },
        {
          context: "Sie möchte aufstehen.",
          options: [
            {
              text: "Kommen Sie, ich helfe Ihnen hoch.",
              patientResponse: "",
              score: 1,
              feedback: "Zu schnell. Erst muss abgeklärt werden, ob sie verletzt ist.",
            },
            {
              text: "Warten Sie kurz, ich prüfe erst, ob alles in Ordnung ist.",
              patientResponse: "",
              score: 3,
              feedback: "Richtig. Erst Verletzungscheck, dann bewegen.",
            },
            {
              text: "Bleiben Sie liegen bis morgen.",
              patientResponse: "",
              score: 1,
              feedback: "Zu starr.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb14-11",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F56",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Bedeutung von Beinahestürzen verstehen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Beinahestürze dokumentieren?",
      body: "Prüfe die Aussage.",
    },
    contentB1: {
      title: "Beinahe gestürzt - wichtig?",
      body: "Prüfe.",
    },
    question: {
      fragetext: "Beinahestürze (near-miss) sollten dokumentiert werden.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: true,
          explanation: "Richtig. Beinahestürze sind Alarmzeichen und wichtige Informationen für die Risikoanalyse (DNQP 2013).",
        },
        {
          text: "Falsch",
          isCorrect: false,
          explanation: "",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb14-12",
    phase: "s4",
    stepType: "crossword",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F51",
      "F53",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Sturzprophylaxe-Begriffe festigen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Kreuzworträtsel",
      body: "Löse das Kreuzworträtsel.",
    },
    contentB1: {
      title: "Rätsel",
      body: "Löse das Rätsel.",
    },
    question: {
      fragetext: "Löse die Begriffe.",
      crosswordWords: [
        {
          word: "TUG",
          clue: "Test für Mobilität (Abkürzung)",
        },
        {
          word: "STURZ",
          clue: "Gefahr beim Aufstehen",
        },
        {
          word: "ANGST",
          clue: "Führt zu Muskelabbau",
        },
        {
          word: "KRAFT",
          clue: "Sinkt im Alter oft",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb14-13",
    phase: "s4",
    stepType: "timer",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F52",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "Sturzrisikofaktoren unter Zeitdruck abrufen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "90 Sekunden",
      body: "Nenne so viele Sturzrisikofaktoren wie möglich.",
    },
    contentB1: {
      title: "Schnell!",
      body: "Nenne Risikofaktoren.",
    },
    question: {
      fragetext: "Welche Risikofaktoren gehören zur Sturzprophylaxe?",
      timerQuestions: [
        {
          question: "Muskelschwäche",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Psychopharmaka",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Sehstörungen",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Schwelle/Teppich",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Sturzangst",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Hohes Cholesterin",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
      ],
      timeLimitSeconds: 90,
    },
  },
  {
    stepId: "le-06-s4-tb14-14",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F56",
      "DNQP 2013",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Sturzprotokoll formulieren",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Sturzprotokoll",
      body: "Frau Siebert ist gestürzt. Schreibe das Sturzprotokoll (Zeitpunkt, Ort, Verletzungen, Ursache, Maßnahmen).",
    },
    contentB1: {
      title: "Protokoll schreiben",
      body: "Schreibe auf, was passiert ist.",
    },
    question: {
      fragetext: "Formuliere ein vollständiges Sturzprotokoll.",
      musterantwort: "Datum/Uhrzeit, Ort, Verletzungen, mögliche Ursachen, Sofortmaßnahmen, geplante Prophylaxeanpassungen.",
    },
  },
  {
    stepId: "le-06-s4-tb15-01",
    phase: "s4",
    stepType: "crowdPoll",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F57",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Vorwissen zu Gelenken und Bettruhe aktivieren",
    themenblockPhase: "SZENE",
    tag: "anatomie",
    xpValue: 10,
    contentC1: {
      title: "Gelenke bei Bettruhe",
      body: "Was passiert mit Gelenken, wenn man lange liegt?",
    },
    contentB1: {
      title: "Liegen und Gelenke",
      body: "Was passiert?",
    },
    question: {
      fragetext: "Was passiert mit Gelenken bei langer Bettruhe?",
    },
  },
  {
    stepId: "le-06-s4-tb15-02",
    phase: "s4",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F57",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Definition Kontraktur kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    displayFormat: "glossary",
    contentC1: {
      title: "Definition Kontraktur",
      body: "Kontraktur = dauerhafte Bewegungseinschränkung eines Gelenks durch Verkürzung von Weichteilen. Entstehung nach 4-14 Tagen Ruhigstellung, kann irreversibel werden.",
    },
    contentB1: {
      title: "Was ist eine Kontraktur?",
      body: "Ein Gelenk wird steif. Es kann nicht mehr voll bewegt werden. Das kann schon nach 1-2 Wochen passieren.",
    },
  },
  {
    stepId: "le-06-s4-tb15-03",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F58",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Gefährdete Gelenke kennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Gefährdete Gelenke",
      body: "Welche Gelenke sind besonders gefährdet?",
    },
    contentB1: {
      title: "Welche Gelenke?",
      body: "Wo entstehen Kontrakturen am häufigsten?",
    },
    question: {
      fragetext: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten.",
        cards: [
          {
            front: "Sprunggelenk",
            back: "Spitzfuß (Plantarflexion)",
          },
          {
            front: "Handgelenk",
            back: "Krallenhand",
          },
          {
            front: "Hüfte",
            back: "Beugekontraktur",
          },
          {
            front: "Knie",
            back: "Streckkontraktur oder Beugekontraktur",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb15-04",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F58",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Spitzfuß-Entstehung verstehen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Spitzfuß",
      body: "Wie entsteht ein Spitzfuß?",
    },
    contentB1: {
      title: "Wie entsteht das?",
      body: "Spitzfuß - warum?",
    },
    question: {
      fragetext: "Wie entsteht ein Spitzfuß bei bettlägerigen Patienten?",
      optionen: [
        {
          text: "Durch Kälte an den Füßen",
          isCorrect: false,
          explanation: "Gut, dass du an die Umgebung denkst — aber Kälte ist hier nicht die Ursache. Das Problem ist mechanischer Natur: anhaltende Plantarflexion durch Druck. Schau nochmal auf die Position der Füße.",
          explanationB1: "Gute Idee mit der Umgebung — aber Kälte ist nicht der Grund. Schau auf die Position der Füße.",
        },
        {
          text: "Durch Druck der Bettdecke, der die Füße in Plantarflexion hält",
          isCorrect: true,
          explanation: "Richtig. Die Bettdecke drückt die Füße nach unten in Plantarflexion.",
          explanationB1: "Richtig. Die Decke drückt die Füße nach unten.",
        },
        {
          text: "Durch zu hohe Temperatur im Zimmer",
          isCorrect: false,
          explanation: "Nachvollziehbar — Temperatur beeinflusst das Wohlbefinden. Aber bei Spitzfuß spielt die Zimmertemperatur keine Rolle, es ist eine mechanische Ursache (Plantarflexion durch Deckendruck).",
          explanationB1: "Gut überlegt — aber die Temperatur ist hier nicht wichtig. Es ist ein mechanisches Problem mit den Füßen.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb15-05",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F58",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Gelenk und Kontrakturform zuordnen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    xpValue: 15,
    contentC1: {
      title: "Gelenk und Form",
      body: "Welche Form tritt an welchem Gelenk auf?",
    },
    contentB1: {
      title: "Was passt?",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Ordne Gelenk und Kontrakturform zu.",
      matchingPairs: [
        {
          left: "Sprunggelenk",
          right: "Spitzfuß",
        },
        {
          left: "Handgelenk",
          right: "Krallenhand",
        },
        {
          left: "Hüfte",
          right: "Beugekontraktur",
        },
        {
          left: "Knie (bei Kissen drunter)",
          right: "Beugekontraktur",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb15-06",
    phase: "s4",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F59",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Aktive und passive Bewegungsübungen unterscheiden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Aktiv vs. passiv",
      body: "Unterschiede der Bewegungsübungen.",
    },
    contentB1: {
      title: "Aktiv oder passiv?",
      body: "Was ist der Unterschied?",
    },
    question: {
      fragetext: "Vergleiche aktive und passive Bewegungsübungen.",
      comparison: {
        instruction: "Vergleiche die Optionen.",
        columns: [
          {
            label: "Aktiv",
          },
          {
            label: "Passiv",
          },
        ],
        rows: [
          {
            criterion: "Ausführung",
            values: [
              "Patient führt selbst aus",
              "Pflegekraft führt Bewegung aus",
            ],
          },
          {
            criterion: "Voraussetzung",
            values: [
              "Eigenkraft vorhanden",
              "Keine Eigenkraft nötig",
            ],
          },
          {
            criterion: "Wirkung",
            values: [
              "Kraftaufbau + Gelenkigkeit",
              "Nur Gelenkigkeit",
            ],
          },
          {
            criterion: "Indikation",
            values: [
              "Wenn möglich - immer zuerst",
              "Nur wenn aktiv nicht geht",
            ],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb15-07",
    phase: "s4",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F59",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Fakten zur Kontrakturprophylaxe einordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Richtig/Falsch",
      body: "Swipe.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Sind die Aussagen korrekt?",
      swipe: {
        instruction: "Sind die Aussagen korrekt?",
        cards: [
          {
            statement: "Passive Bewegungen 2x täglich reichen",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Funktionelle Lagerung hält Gelenke in Neutralstellung",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Bettbogen verhindert Spitzfuß durch Bettdecke",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Kissen in der Kniekehle schützt vor Kontraktur",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Jede Bewegung besser als gar keine",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb15-08",
    phase: "s4",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F59",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Ablauf passive Bewegungsübung beherrschen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Passive Übung",
      body: "Sortiere den Ablauf.",
    },
    contentB1: {
      title: "Was zuerst?",
      body: "Ordne.",
    },
    question: {
      fragetext: "Sortiere den Ablauf der passiven Bewegungsübung.",
      sequencing: {
        instruction: "Sortiere den Ablauf der passiven Bewegungsübung.",
        items: [
          {
            id: "item-1",
            label: "Patient informieren und Zustimmung einholen",
          },
          {
            id: "item-2",
            label: "Gelenk ober- und unterhalb stabilisieren",
          },
          {
            id: "item-3",
            label: "Bewegung langsam im schmerzfreien Bereich führen",
          },
          {
            id: "item-4",
            label: "Endstellung kurz halten (1-2 Sekunden)",
          },
          {
            id: "item-5",
            label: "Zurück in Ausgangsposition",
          },
          {
            id: "item-6",
            label: "Dokumentation: Bewegungsumfang, Schmerzen",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb15-09",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F60",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Hilfsmittel kennen und zuordnen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Hilfsmittel",
      body: "Welches Hilfsmittel wofür?",
    },
    contentB1: {
      title: "Hilfsmittel",
      body: "Was passt zusammen?",
    },
    question: {
      fragetext: "Verbinde Hilfsmittel und Zweck.",
      matchingPairs: [
        {
          left: "Schiene",
          right: "Gelenk in Funktionsstellung halten",
        },
        {
          left: "Bettbogen",
          right: "Bettdecke vom Fuß fernhalten",
        },
        {
          left: "Lagerungskeil",
          right: "Extremitäten positionieren",
        },
        {
          left: "Antispitzfuß-Schuh",
          right: "Sprunggelenk in 90-Stellung halten",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb15-10",
    phase: "s4",
    stepType: "estimation",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F57",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Zeitfenster für Kontrakturentstehung schätzen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Zeitfenster Kontraktur",
      body: "Nach wie vielen Tagen droht eine Kontraktur?",
    },
    contentB1: {
      title: "Ab wann droht die Kontraktur?",
      body: "Nach wie vielen Tagen?",
    },
    question: {
      fragetext: "Schätze den Mittelwert (4-14 Tage).",
      estimation: {
        instruction: "Schätze den Mittelwert (4-14 Tage).",
        unit: "Tage",
        correctValue: 7,
        tolerance: 3,
        funFact: "",
        explanation: "",
      },
    },
  },
  {
    stepId: "le-06-s4-tb15-11",
    phase: "s4",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F61",
    ],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "Fehler in Kontrakturprophylaxe erkennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "Fehler finden",
      body: "Welche Aussagen sind falsch?",
    },
    contentB1: {
      title: "Was ist falsch?",
      body: "Finde die Fehler.",
    },
    question: {
      fragetext: "Finde die Fehler.",
      errorspot: {
        instruction: "Finde die Fehler.",
        text: "Eine Kollegin beschreibt ihre Kontrakturprophylaxe.",
        errors: [
          {
            start: 0,
            end: 52,
            correction: "",
            explanation: "Das fördert Beugekontraktur. Neutralstellung ist Standard.",
          },
          {
            start: 1,
            end: 49,
            correction: "",
            explanation: "Zu selten. Mehrmals täglich ist erforderlich.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb15-12",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F57",
      "F59",
      "F60",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Kontrakturprophylaxe-Plan für Herrn Demir erstellen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Pflegeplan Herr Demir",
      body: "Herr Demir (64, Schlaganfall, Hemiparese rechts mit Spastik). Erstelle einen Kontrakturprophylaxe-Plan.",
    },
    contentB1: {
      title: "Plan für Herrn Demir",
      body: "Sein Arm und sein Bein rechts sind gelähmt. Was machst du?",
    },
    question: {
      fragetext: "Formuliere 4 konkrete Maßnahmen mit Begründung.",
      musterantwort: "Passive Bewegung 3-4x täglich; funktionelle Lagerung rechte Seite; Schulter unterlagern; Antispastisches Handling nach Bobath; tgl. Bewegungsumfang dokumentieren.",
    },
  },
  {
    stepId: "le-06-s4-tb16-01",
    phase: "s4",
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F62",
    ],
    track: "basis",
    modus: "story",
    lernziel: "Thrombose als stille Gefahr verstehen",
    themenblockPhase: "SZENE",
    tag: "krankheitslehre",
    xpValue: 10,
    displayFormat: "scenario",
    contentC1: {
      title: "Die stille Gefahr",
      body: "Thrombosen sind oft symptomarm. Viele Patienten spüren nichts - bis zur Lungenembolie. Deshalb ist Prophylaxe lebenswichtig, besonders bei Immobilität.",
    },
    contentB1: {
      title: "Eine stille Gefahr",
      body: "Eine Thrombose tut oft nicht weh. Man merkt sie nicht. Aber sie kann sehr gefährlich werden.",
    },
  },
  {
    stepId: "le-06-s4-tb16-02",
    phase: "s4",
    stepType: "reveal",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F63",
      "Virchow 1856",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "Virchow-Trias benennen",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Virchow-Trias",
      body: "3 Faktoren führen zur Thrombose.",
    },
    contentB1: {
      title: "3 Faktoren",
      body: "Diese 3 Dinge verursachen Thrombose.",
    },
    question: {
      fragetext: "Decke die 3 Faktoren auf.",
      reveal: {
        instruction: "Tippe die Karten an.",
        cards: [
          {
            id: "1",
            label: "Blutfluss verlangsamt",
            content: "Immobilität, Bettruhe, enge Kleidung, Beinvenen-Stase",
          },
          {
            id: "2",
            label: "Gefäßwand geschädigt",
            content: "OP, Punktion, Venenkatheter, Trauma, Entzündung",
          },
          {
            id: "3",
            label: "Gerinnung erhöht",
            content: "Dehydratation, Rauchen, Pille, Tumorerkrankung",
          },
        ],
        revealMode: "free",
      },
    },
  },
  {
    stepId: "le-06-s4-tb16-03",
    phase: "s4",
    stepType: "cloze",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F63",
      "Virchow 1856",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "Virchow-Trias anwenden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Virchow-Lückentext",
      body: "Fülle die Lücken.",
    },
    contentB1: {
      title: "Fülle die Lücken",
      body: "Ergänze.",
    },
    question: {
      fragetext: "Fülle die Lücken.",
      cloze: {
        textWithBlanks: "Die Virchow-Trias beschreibt drei Ursachen der Thrombose: verlangsamter ___, geschädigte ___ und erhöhte ___.",
        blanks: [
          {
            id: 1,
            correct: "Blutfluss",
            distractors: [],
          },
          {
            id: 2,
            correct: "Gefäßwand",
            distractors: [],
          },
          {
            id: 3,
            correct: "Gerinnung",
            distractors: [],
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb16-04",
    phase: "s4",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F64",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "Expositionelle und dispositionelle Risikofaktoren unterscheiden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "Expositionell vs. dispositionell",
      body: "Expositionell = aktuelle Situation, dispositionell = patientenbezogen.",
    },
    contentB1: {
      title: "Situation oder Person?",
      body: "Sortiere.",
    },
    question: {
      fragetext: "Ordne die Risikofaktoren zu.",
      categories: [
        {
          name: "Expositionell (Situation)",
        },
        {
          name: "Dispositionell (Person)",
        },
      ],
      categoryItems: [
        {
          text: "OP der letzten 7 Tage",
          correctCategory: 0,
        },
        {
          text: "Bettlägerigkeit",
          correctCategory: 0,
        },
        {
          text: "Alter über 60",
          correctCategory: 0,
        },
        {
          text: "Adipositas",
          correctCategory: 0,
        },
        {
          text: "Längerer Flug",
          correctCategory: 0,
        },
        {
          text: "Frühere Thrombose",
          correctCategory: 0,
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb16-05",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F64",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Thromboserisiko konkret einschätzen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "Frau Siebert: Risiko?",
      body: "Wie hoch ist ihr Thromboserisiko?",
    },
    contentB1: {
      title: "Risiko einschätzen",
      body: "Wie hoch?",
    },
    question: {
      fragetext: "Frau Siebert (81, Hüft-TEP vor 3 Tagen, Adipositas, liegt seit OP). Wie ist ihr Risiko?",
      optionen: [
        {
          text: "Niedrig, keine weiteren Maßnahmen nötig",
          isCorrect: false,
          explanation: "Du willst sie nicht überbehandeln — guter Gedanke. Aber Frau Siebert hat 3 klassische Virchow-Trias-Risikofaktoren (Immobilität nach OP, Alter, Adipositas) plus Hüft-TEP. Das ist hohes Risiko. Merke: OP + Immobilität = immer Prophylaxe prüfen.",
          explanationB1: "Schau nochmal genau: Sie ist 81, hat eine OP, kann nicht laufen, hat Übergewicht. Das sind 3 Risiken. Beim nächsten Fall wirst du das gut erkennen.",
        },
        {
          text: "Mittel, Basisprophylaxe reicht",
          isCorrect: false,
          explanation: "Fast richtig — du hast erkannt, dass Risiko vorliegt. Bei Hüft-TEP + Immobilität + Alter + Adipositas reicht Basisprophylaxe jedoch nicht: volle medikamentöse Antikoagulation nach AWMF 2015 für 28–35 Tage.",
          explanationB1: "Gut — du siehst das Risiko. Aber hier reicht die einfache Stufe nicht. Sie braucht Medikamente (Heparin) für 4 Wochen.",
        },
        {
          text: "Hoch, volle Prophylaxe inklusive medikamentöser Antikoagulation",
          isCorrect: true,
          explanation: "Richtig. Hüft-TEP + Immobilität + Alter + Adipositas = hohes Risiko. Heparin 28-35 Tage nach Hüft-TEP (AWMF 2015).",
          explanationB1: "Richtig. Hohes Risiko. Heparin muss gegeben werden.",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb16-06",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F65",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "3 Säulen der Thromboseprophylaxe kennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "3 Säulen der Prophylaxe",
      body: "Bewegung, Kompression, Medikamente.",
    },
    contentB1: {
      title: "3 Säulen",
      body: "Was hilft gegen Thrombose?",
    },
    question: {
      fragetext: "Drehe die Karten.",
      flipcard: {
        instruction: "Drehe die Karten.",
        cards: [
          {
            front: "Bewegung",
            back: "Frühmobilisation, Bettfahrrad, Fußgymnastik - aktiviert Muskelpumpe",
          },
          {
            front: "Kompression",
            back: "Medizinische Thromboseprophylaxestrümpfe (MTS) - komprimieren von distal nach proximal",
          },
          {
            front: "Medikamente",
            back: "NMH (z.B. Enoxaparin) subkutan, nach Hüft-TEP 28-35 Tage",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb16-07",
    phase: "s4",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F66",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "MTS anziehen in 6 Schritten",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "MTS anziehen",
      body: "Sortiere die 6 Schritte.",
    },
    contentB1: {
      title: "Strümpfe anziehen",
      body: "Welcher Schritt zuerst?",
    },
    question: {
      fragetext: "Sortiere die 6 Schritte beim MTS-Anziehen.",
      sequencing: {
        instruction: "Sortiere die 6 Schritte beim MTS-Anziehen.",
        items: [
          {
            id: "1",
            label: "Beine inspizieren (Haut, Durchblutung)",
          },
          {
            id: "2",
            label: "Größe kontrollieren",
          },
          {
            id: "3",
            label: "Strumpf wenden (auf links drehen)",
          },
          {
            id: "4",
            label: "Über Fuß ziehen, Zehen frei halten",
          },
          {
            id: "5",
            label: "Faltenfrei hochziehen",
          },
          {
            id: "6",
            label: "Sitz kontrollieren (keine Einschnürung)",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb16-08",
    phase: "s4",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F66",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "MTS-Fakten unterscheiden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 15,
    contentC1: {
      title: "MTS: Richtig oder falsch?",
      body: "Swipe.",
    },
    contentB1: {
      title: "MTS: Stimmt das?",
      body: "Swipe.",
    },
    question: {
      fragetext: "Ist die Aussage korrekt?",
      swipe: {
        instruction: "Ist die Aussage korrekt?",
        cards: [
          {
            statement: "Morgens vor dem Aufstehen anziehen",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Zehenbereich einwickeln für besseren Halt",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Falten sind normal und stören nicht",
            isCorrect: false,
            explanation: "",
          },
          {
            statement: "Größe individuell messen",
            isCorrect: true,
            explanation: "",
          },
          {
            statement: "Tägliche Hautinspektion beim Ausziehen",
            isCorrect: true,
            explanation: "",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb16-09",
    phase: "s4",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F66",
    ],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "Fehler beim MTS-Anziehen erkennen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 25,
    contentC1: {
      title: "MTS-Fehler",
      body: "Finde die Fehler.",
    },
    contentB1: {
      title: "Was ist falsch?",
      body: "Fehler suchen.",
    },
    question: {
      fragetext: "Finde die Fehler beim MTS-Anlegen.",
      errorspot: {
        instruction: "Finde die Fehler beim MTS-Anlegen.",
        text: "Eine Auszubildende zieht Frau Siebert MTS an.",
        errors: [
          {
            start: 0,
            end: 52,
            correction: "",
            explanation: "Zu spät. Morgens vor dem Aufstehen ist richtig.",
          },
          {
            start: 1,
            end: 33,
            correction: "",
            explanation: "Einschnürung und Druckstellen möglich.",
          },
          {
            start: 2,
            end: 52,
            correction: "",
            explanation: "Hautinspektion Pflicht.",
          },
        ],
      },
    },
  },
  {
    stepId: "le-06-s4-tb16-10",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F65",
      "F66",
    ],
    track: "vertiefung",
    modus: "sortierstation",
    lernziel: "Maßnahme und Virchow-Faktor verknüpfen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 20,
    contentC1: {
      title: "Maßnahme und Virchow",
      body: "Welche Maßnahme wirkt auf welchen Faktor?",
    },
    contentB1: {
      title: "Was wirkt wie?",
      body: "Verbinde.",
    },
    question: {
      fragetext: "Ordne Maßnahme und Virchow-Faktor zu.",
      matchingPairs: [
        {
          left: "Frühmobilisation",
          right: "Blutfluss",
        },
        {
          left: "MTS",
          right: "Blutfluss",
        },
        {
          left: "Heparin/NMH",
          right: "Gerinnung",
        },
        {
          left: "Ausreichend Flüssigkeit",
          right: "Gerinnung",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb16-11",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F64",
    ],
    track: "basis",
    modus: "checkpoint",
    lernziel: "Zusammenhang Dehydratation und Thrombose verstehen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Dehydratation?",
      body: "Prüfe die Aussage.",
    },
    contentB1: {
      title: "Zu wenig trinken?",
      body: "Prüfe.",
    },
    question: {
      fragetext: "Dehydratation erhöht das Thromboserisiko.",
      optionen: [
        {
          text: "Richtig",
          isCorrect: true,
          explanation: "Richtig. Wassermangel führt zu eingedicktem Blut und erhöhter Gerinnungsneigung (Virchow-Faktor 3).",
        },
        {
          text: "Falsch",
          isCorrect: false,
          explanation: "",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb16-12",
    phase: "s4",
    stepType: "timer",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F63",
      "F65",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "Virchow und Maßnahmen unter Zeitdruck abrufen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 15,
    contentC1: {
      title: "90 Sekunden",
      body: "Nenne Virchow-Trias und je 1 Gegenmaßnahme.",
    },
    contentB1: {
      title: "Schnell!",
      body: "Nenne die 3 Faktoren und je 1 Maßnahme.",
    },
    question: {
      fragetext: "Virchow-Faktoren und Maßnahmen?",
      timerQuestions: [
        {
          question: "Blutfluss - Bewegung",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Gefäßwand - OP vermeiden",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Gerinnung - Heparin",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Blutfluss - MTS",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Gerinnung - Flüssigkeit",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 0,
        },
        {
          question: "Körpergröße - Hüftoperation",
          options: [
            "Richtig",
            "Falsch",
          ],
          correctIndex: 1,
        },
      ],
      timeLimitSeconds: 90,
    },
  },
  {
    stepId: "le-06-s4-tb16-13",
    phase: "s4",
    stepType: "memory",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "F62",
      "F63",
    ],
    track: "basis",
    modus: "puzzle",
    lernziel: "Thrombose-Fachbegriffe festigen",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Memory",
      body: "Finde die Paare.",
    },
    contentB1: {
      title: "Finde die Paare",
      body: "Memory.",
    },
    question: {
      fragetext: "Verbinde Fachbegriff und Bedeutung.",
      memoryPairs: [
        {
          a: "Thrombose",
          b: "Blutgerinnsel in einer Vene",
        },
        {
          a: "Lungenembolie",
          b: "Verschluss einer Lungenarterie durch verschlepptes Gerinnsel",
        },
        {
          a: "NMH",
          b: "Niedermolekulares Heparin",
        },
        {
          a: "MTS",
          b: "Medizinische Thromboseprophylaxestrümpfe",
        },
        {
          a: "Virchow-Trias",
          b: "3 Ursachen der Thromboseentstehung",
        },
      ],
    },
  },
  {
    stepId: "le-06-s4-tb16-14",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: [
      "F62",
      "F65",
      "AWMF 2015",
    ],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "Thromboseprophylaxe-Plan für Frau Siebert",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 30,
    contentC1: {
      title: "Thromboseprophylaxe-Plan",
      body: "Frau Siebert (81, Hüft-TEP, 3. postop. Tag, Adipositas). Erstelle einen Thromboseprophylaxe-Plan.",
    },
    contentB1: {
      title: "Plan für Frau Siebert",
      body: "Frau Siebert hat hohes Thromboserisiko. Was machst du?",
    },
    question: {
      fragetext: "Formuliere 4 konkrete Maßnahmen mit Begründung.",
      musterantwort: "Frühmobilisation ab Tag 1; MTS beidseits morgens anziehen; NMH 1x tgl. s.c. für 28-35 Tage nach AWMF 2015; Flüssigkeit 1,5-2 L tgl.; Fußgymnastik und Bettfahrrad.",
    },
  },
];
