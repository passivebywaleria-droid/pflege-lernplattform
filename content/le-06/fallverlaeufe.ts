// LE-06 Fall-Tab: Patientenverlauf-Daten — 3 Fälle
// Quelle: fall-plan.md | Dozentin Phase 2 | 2026-04-15
// CE02, KB II.1, Mobilität, Drittel 1, Bloom B1–B3

import type { Fallverlauf, ContentStep } from "../_types";

// === FALL 1: Frau Helga Siebert — 81 Jahre (Alter Mensch) ===

const SIEBERT_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le06-fall01-st01-01",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 346", "(Barthel/Mahoney, 1965)"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-assessment",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Barthel-Index: Frau Siebert",
      body: "Frau Siebert hat einen Barthel-Index von 40 Punkten. Was bedeutet dieser Wert für deine Pflegeplanung?",
    },
    contentB1: {
      title: "Barthel-Index: Was bedeutet 40 Punkte?",
      body: "Frau Siebert hat 40 von 100 Punkten im Barthel-Index. Was heißt das?",
    },
    question: {
      fragetext:
        "Frau Siebert hat einen Barthel-Index von 40 Punkten. Was bedeutet dieser Wert für deine Pflegeplanung?",
      optionen: [
        {
          text: "Sie ist nahezu selbstständig und braucht kaum Unterstützung.",
          isCorrect: false,
          explanation:
            "40 Punkte sind weit von Selbstständigkeit entfernt. Ein Barthel-Index von 80–100 würde auf weitgehende Selbstständigkeit hindeuten. Frau Siebert braucht aktuell bei den meisten ATL Unterstützung.",
          explanationB1:
            "40 Punkte sind nicht gut. Frau Siebert braucht viel Hilfe. Selbstständig wäre 80 bis 100 Punkte.",
        },
        {
          text: "Sie hat eine erhebliche Einschränkung der Selbstständigkeit und braucht bei den meisten Alltagsaktivitäten Hilfe.",
          isCorrect: true,
          explanation:
            "Genau. 40 von 100 Punkten zeigen eine deutliche Einschränkung. Die meisten Aktivitäten des täglichen Lebens — wie Anziehen, Waschen, Toilettengang — erfordern aktuell pflegerische Unterstützung. Das ist typisch für die ersten Tage nach einer Hüft-TEP.",
          explanationB1:
            "Richtig! 40 Punkte = viel Hilfe nötig. Waschen, Anziehen, Toilette — bei allem braucht Frau Siebert Unterstützung.",
        },
        {
          text: "Sie ist komplett pflegebedürftig und kann nichts allein.",
          isCorrect: false,
          explanation:
            "Komplett pflegebedürftig wäre ein Score von 0–15. Frau Siebert kann einiges noch teilweise allein — zum Beispiel essen. Aber sie braucht bei den meisten Aktivitäten Hilfe.",
          explanationB1:
            "Nein, 40 Punkte heißt nicht komplett pflegebedürftig. 0 bis 15 Punkte wäre komplett pflegebedürftig. Frau Siebert kann manches noch allein.",
        },
        {
          text: "Der Barthel-Index sagt nichts über den Pflegebedarf aus.",
          isCorrect: false,
          explanation:
            "Der Barthel-Index ist eines der meistgenutzten Assessments in der Pflege und sehr wohl aussagekräftig für die Pflegeplanung. Er erfasst die Selbstständigkeit bei 10 alltäglichen Aktivitäten.",
          explanationB1:
            "Doch! Der Barthel-Index ist sehr wichtig. Er zeigt, wie selbstständig eine Person ist. 10 Alltagsaktivitäten werden geprüft.",
        },
      ],
    },
  },
  {
    stepId: "le06-fall01-st01-02",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 392ff, 410ff, 420ff",
      "(DNQP-Expertenstandards)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Prophylaxen zuordnen",
      body: "Frau Siebert ist nach der Hüft-TEP immobil. Ordne die folgenden Risikofaktoren der richtigen Prophylaxe zu.",
    },
    contentB1: {
      title: "Welche Prophylaxe passt?",
      body: "Frau Siebert kann sich nach der Hüft-OP nicht gut bewegen. Ordne die Risikofaktoren der richtigen Prophylaxe zu.",
    },
    question: {
      fragetext:
        "Ordne die folgenden Risikofaktoren der richtigen Prophylaxe zu.",
      categories: [
        { name: "Dekubitusprophylaxe" },
        { name: "Thromboseprophylaxe" },
        { name: "Pneumonieprophylaxe" },
        { name: "Kontrakturenprophylaxe" },
      ],
      categoryItems: [
        {
          text: "Geringes Körpergewicht (BMI 19,8)",
          correctCategory: 0,
        },
        {
          text: "Flache Schonatmung",
          correctCategory: 2,
        },
        {
          text: "Zustand nach OP an der unteren Extremität",
          correctCategory: 1,
        },
        {
          text: "Langer Aufenthalt in Rückenlage",
          correctCategory: 3,
        },
        {
          text: "Geringe Trinkmenge",
          correctCategory: 1,
        },
        {
          text: "Eingeschränkte Mobilität nach OP",
          correctCategory: 0,
        },
      ],
    },
  },
  {
    stepId: "le06-fall01-st01-03",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 355ff"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Erstmobilisation an die Bettkante",
      body: "Frau Siebert soll am 2. Tag nach der Hüft-TEP zum ersten Mal an die Bettkante mobilisiert werden. Bringe die Schritte in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Erstmobilisation: Was kommt zuerst?",
      body: "Frau Siebert soll zum ersten Mal an die Bettkante sitzen. Bringe die Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext:
        "Bringe die Schritte der Erstmobilisation an die Bettkante in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte der Erstmobilisation in die richtige Reihenfolge.",
        items: [
          {
            id: "seq-1",
            label:
              "Frau Siebert informieren und ihr Einverständnis einholen",
          },
          {
            id: "seq-2",
            label: "Vitalzeichen kontrollieren (Blutdruck, Puls)",
          },
          {
            id: "seq-3",
            label:
              "Schmerzmedikation prüfen — wirkt die Schmerzmittelgabe von vorher?",
          },
          {
            id: "seq-4",
            label: "Bett auf niedrigste Position bringen",
          },
          {
            id: "seq-5",
            label:
              "Frau Siebert langsam aufrichten (Oberkörper hoch, Beine zur Bettkante)",
          },
          {
            id: "seq-6",
            label:
              "Kreislauf beobachten — Schwindel? Übelkeit? Blässe?",
          },
          {
            id: "seq-7",
            label:
              "Füße auf den Boden stellen lassen, Teilbelastung beachten",
          },
          {
            id: "seq-8",
            label:
              "5 Minuten an der Bettkante sitzen lassen, Befinden beobachten",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-fall01-st01-04",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "[Transfer] (Gesprächsführung)",
      "Vgl. I Care Pflege S. 439 (Sturzangst)",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Sturzangst: Frau Siebert motivieren",
      body: `Frau Siebert sagt: „Ich will nicht aufstehen. Wenn ich wieder falle, komme ich nie wieder hoch." Wie reagierst du?`,
    },
    contentB1: {
      title: "Frau Siebert hat Angst",
      body: `Frau Siebert sagt: „Ich will nicht aufstehen. Wenn ich falle, komme ich nicht mehr hoch." Was sagst du?`,
    },
    question: {
      fragetext: `Frau Siebert sagt: „Ich will nicht aufstehen. Wenn ich wieder falle, komme ich nie wieder hoch." Wie reagierst du?`,
      patientName: "Frau Siebert",
      dialogPhases: [
        {
          context:
            "Frau Siebert klammert sich an die Bettkante. Ihre Augen sind weit, sie zittert leicht.",
          contextB1:
            "Frau Siebert hält sich am Bett fest. Sie hat Angst.",
          options: [
            {
              text: `„Frau Siebert, ich verstehe Ihre Angst. Erzählen Sie mir, was genau Ihnen Sorgen macht."`,
              patientResponse:
                `„Ich habe einfach Angst. Mir wird schwindelig und dann falle ich wieder."`,
              score: 3,
              feedback:
                "Du hast genau richtig reagiert: Erst die Angst ernst nehmen. Patienten mit Sturzangst brauchen das Gefühl, gehört zu werden.",
              textB1:
                `„Frau Siebert, ich verstehe. Was macht Ihnen Angst?"`,
              patientResponseB1:
                `„Mir wird schwindelig und ich falle."`,
              feedbackB1:
                "Richtig! Zuerst zuhören. Die Angst ernst nehmen.",
            },
            {
              text: `„Sie müssen aufstehen, sonst bekommen Sie einen Dekubitus."`,
              patientResponse:
                "Frau Siebert wendet den Kopf ab und schweigt.",
              score: 1,
              feedback:
                "Drohungen erzeugen Gegenwehr, nicht Motivation. Frau Siebert braucht Empathie und ein konkretes, sicheres Angebot.",
              textB1:
                `„Sie müssen aufstehen. Sonst bekommen Sie eine Druckstelle."`,
              patientResponseB1:
                "Frau Siebert dreht sich weg und sagt nichts.",
              feedbackB1:
                "Nicht gut. Drohungen helfen nicht. Zeige Verständnis.",
            },
            {
              text: `„Die meisten Patienten haben nach einer Hüft-OP Angst. Das ist ganz normal."`,
              patientResponse:
                `„Ja, aber was hilft mir das? Normal hin oder her — ich habe trotzdem Angst."`,
              score: 2,
              feedback:
                "Normalisieren ist nicht falsch, aber zu schnell. Erst zuhören, DANN normalisieren. Frau Siebert fühlt sich sonst nicht ernst genommen.",
              textB1:
                `„Viele Patienten haben Angst nach einer OP. Das ist normal."`,
              patientResponseB1:
                `„Aber ich habe trotzdem Angst!"`,
              feedbackB1:
                "Okay, aber erst zuhören. Dann sagen, dass es normal ist.",
            },
          ],
        },
        {
          context:
            "Frau Siebert hat dir erzählt, was ihr Angst macht. Jetzt braucht sie ein konkretes Angebot.",
          contextB1:
            "Frau Siebert hat ihre Angst erzählt. Jetzt braucht sie ein Angebot.",
          options: [
            {
              text: `„Wir machen das zusammen. Ich bleibe die ganze Zeit bei Ihnen. Wir fangen ganz langsam an — erst nur Sitzen an der Bettkante. Und wenn Ihnen schwindelig wird, legen wir Sie sofort wieder hin."`,
              patientResponse:
                `„Nur Sitzen? Nicht gleich aufstehen? Na gut... aber Sie bleiben wirklich da?"`,
              score: 3,
              feedback:
                "Perfekt! Kleine Schritte, klare Absprachen, Kontrolle beim Patienten lassen. Mobilisation gegen den Willen ist keine Option.",
              textB1:
                `„Wir machen das zusammen. Erst nur sitzen. Wenn es nicht geht, legen wir uns wieder hin."`,
              patientResponseB1:
                `„Nur sitzen? Okay... aber bleiben Sie da?"`,
              feedbackB1:
                "Sehr gut! Kleine Schritte. Frau Siebert fühlt sich sicher.",
            },
            {
              text: `„Der Arzt hat gesagt, Sie müssen mobilisiert werden."`,
              patientResponse:
                `„Dann soll der Arzt das selbst machen!"`,
              score: 1,
              feedback:
                "Autoritäts-Argumente helfen nicht bei Angst. Frau Siebert braucht Sicherheit, nicht Anordnungen.",
              textB1:
                `„Der Arzt hat gesagt, Sie müssen aufstehen."`,
              patientResponseB1: `„Dann soll der Arzt kommen!"`,
              feedbackB1:
                "Nicht hilfreich. Frau Siebert braucht Sicherheit, nicht Befehle.",
            },
            {
              text: `„Ich hole noch eine Kollegin, zu zweit ist es sicherer."`,
              patientResponse:
                `„Braucht man dafür wirklich zwei Leute? Bin ich so ein schwerer Fall?"`,
              score: 2,
              feedback:
                "Kollegin dazuholen kann sinnvoll sein, aber formuliere es als Sicherheit, nicht als Problem. Und biete erst das kleine Ziel an.",
              textB1:
                `„Ich hole eine Kollegin. Zu zweit ist es sicherer."`,
              patientResponseB1:
                `„Bin ich so ein schwerer Fall?"`,
              feedbackB1:
                "Okay, aber erkläre es besser. Biete erst ein kleines Ziel an.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le06-fall01-st01-05",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 392ff, 410ff, 420ff, 404ff, 437ff",
      "(DNQP-Expertenstandards)",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Prophylaxe-Bündel für 24 Stunden",
      body: "Erstelle ein Prophylaxe-Bündel für Frau Siebert für die nächsten 24 Stunden. Berücksichtige alle relevanten Prophylaxen und ordne jeder mindestens zwei konkrete Maßnahmen zu.",
    },
    contentB1: {
      title: "Alle Prophylaxen für Frau Siebert",
      body: "Schreibe einen Plan für 24 Stunden. Welche Prophylaxen braucht Frau Siebert? Nenne zu jeder mindestens 2 Maßnahmen.",
    },
    question: {
      fragetext:
        "Erstelle ein Prophylaxe-Bündel für Frau Siebert für die nächsten 24 Stunden. Berücksichtige alle relevanten Prophylaxen und ordne jeder mindestens zwei konkrete Maßnahmen zu.",
      musterantwort:
        "Dekubitus: 2-stündlicher Positionswechsel, Hautinspektion an Prädilektionsstellen. Thrombose: MTS anziehen, Fußbewegungsübungen (Muskelvenenpumpe aktivieren). Pneumonie: Atemübungen anleiten (z.B. Kontaktatmung), Oberkörperhochlagerung. Kontraktur: Füße in Funktionsstellung lagern (Spitzfuß-Prophylaxe), passive Bewegungsübungen. Sturz: Klingel in Reichweite, Begleitung bei erster Mobilisation, Nachtlicht.",
      bewertungskriterien: [
        "Mindestens 4 der 5 Prophylaxen benannt (Dekubitus, Thrombose, Pneumonie, Kontraktur, Sturz)",
        "Pro Prophylaxe je 2 konkrete Maßnahmen",
        "Maßnahmen sind auf Frau Sieberts Situation bezogen",
        "Fachsprachlich korrekt",
      ],
    },
  },
  {
    stepId: "le06-fall01-st01-06",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["[Transfer] (Patientenedukation)", "Vgl. I Care Pflege S. 356"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Teilbelastung erklären",
      body: "Frau Siebert soll nach der Hüft-TEP mit Unterarmgehstützen mobilisiert werden. Die angeordnete Teilbelastung beträgt 20 kg. Wie erklärst du ihr, was 20 kg Belastung bedeuten?",
    },
    contentB1: {
      title: "Was bedeutet 20 kg Belastung?",
      body: "Frau Siebert darf das operierte Bein nur mit 20 kg belasten. Wie erklärst du ihr das?",
    },
    question: {
      fragetext:
        "Wie erklärst du Frau Siebert, was 20 kg Teilbelastung bedeuten?",
      optionen: [
        {
          text: `„Stellen Sie sich auf eine Waage und belasten das operierte Bein so stark, bis 20 kg angezeigt werden."`,
          isCorrect: true,
          explanation:
            "Genau! Die Waage ist die konkreteste Methode, Teilbelastung zu vermitteln. In der Physiotherapie üben Patienten auf einer Personenwaage, das Gewicht dosiert auf das operierte Bein zu verlagern. So bekommt Frau Siebert ein körperliches Gefühl dafür, was 20 kg bedeuten.",
          explanationB1:
            "Richtig! Die Waage zeigt genau 20 kg. So versteht Frau Siebert, wie viel Druck sie auf das Bein geben darf.",
        },
        {
          text: `„20 kg ist so viel wie zwei Milchtüten — stellen Sie sich vor, Sie halten die in einer Hand."`,
          isCorrect: false,
          explanation:
            "Kreative Idee, aber der Vergleich mit Milchtüten vermittelt kein Belastungsgefühl für das Bein. Die Waagen-Methode ist in der Physiotherapie der Standard.",
          explanationB1:
            "Netter Vergleich, aber Milchtüten in der Hand sind nicht dasselbe wie Bein belasten. Die Waage ist besser.",
        },
        {
          text: `„Belasten Sie das Bein nur ein bisschen, so wie es sich richtig anfühlt."`,
          isCorrect: false,
          explanation:
            `„Ein bisschen" ist viel zu ungenau. 20 kg ist eine klare ärztliche Anordnung — der Patient braucht eine messbare Orientierung.`,
          explanationB1:
            `Zu ungenau. „Ein bisschen" kann alles heißen. Frau Siebert braucht eine genaue Zahl.`,
        },
        {
          text: `„Sie dürfen das Bein gar nicht belasten."`,
          isCorrect: false,
          explanation:
            "Nein, Teilbelastung heißt: das Bein DARF belastet werden — aber nur bis zur angeordneten Grenze. Gar nicht belasten wäre eine Entlastung.",
          explanationB1:
            "Gut, dass du vorsichtig bist — aber schau genau: Teilbelastung heißt, das Bein DARF belastet werden, nur bis 20 kg. Gar nicht wäre Entlastung. Du kommst dem richtigen Verständnis näher!",
        },
      ],
    },
  },
  {
    stepId: "le06-fall01-st01-07",
    phase: "s1",
    stepType: "timeline",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "[Transfer] (Entlassungsplanung)",
      "(§ 4 PflBG — Vorbehaltene Tätigkeiten)",
    ],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-mobilisation",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Entlassungsplanung",
      body: "Plane die Entlassung von Frau Siebert. Ordne die folgenden Schritte auf einer Zeitleiste von der OP bis zur Entlassung ein.",
    },
    contentB1: {
      title: "Entlassung planen",
      body: "Wann passiert was? Ordne die Schritte in die richtige Reihenfolge auf der Zeitleiste.",
    },
    question: {
      fragetext:
        "Ordne die Schritte der Entlassungsplanung auf der Zeitleiste ein.",
      timeline: {
        instruction:
          "Ordne die Schritte auf der Zeitleiste von der OP bis zur Entlassung ein.",
        events: [
          {
            id: "tl-1",
            time: "Tag 1–2 post-OP",
            title: "Erstmobilisation an die Bettkante",
            description:
              "Erste Mobilisation nach der Hüft-TEP: Sitzen an der Bettkante mit Unterstützung.",
            descriptionB1:
              "Zum ersten Mal an der Bettkante sitzen. Mit Hilfe.",
          },
          {
            id: "tl-2",
            time: "Tag 2–3",
            title: "Sozialdienst einschalten",
            description:
              "Sozialdienst wegen Wohnsituation kontaktieren: 2. OG ohne Aufzug ist problematisch.",
            descriptionB1:
              "Sozialdienst informieren. Frau Siebert wohnt im 2. Stock ohne Aufzug.",
          },
          {
            id: "tl-3",
            time: "Tag 3–5",
            title: "Mobilisation mit Gehstützen",
            description:
              "Mobilisation mit Unterarmgehstützen auf dem Stationsflur (Physiotherapie).",
            descriptionB1:
              "Mit Krücken auf dem Flur gehen. Die Physiotherapie hilft.",
          },
          {
            id: "tl-4",
            time: "Tag 3–5",
            title: "Hilfsmittelversorgung beantragen",
            description:
              "Toilettensitzerhöhung, ggf. Rollator beantragen.",
            descriptionB1:
              "Hilfsmittel bestellen: höherer Toilettensitz, Rollator.",
          },
          {
            id: "tl-5",
            time: "Tag 5–7",
            title: "Entlassungsgespräch mit Tochter",
            description:
              "Gespräch mit der Tochter: Übergangs-Pflege oder Reha? Direkte Entlassung nach Hause unrealistisch.",
            descriptionB1:
              "Gespräch mit der Tochter. Wohin geht Frau Siebert? Reha oder Kurzzeitpflege?",
          },
          {
            id: "tl-6",
            time: "Ab Tag 7–10",
            title: "Entlassung in Reha oder Kurzzeitpflege",
            description:
              "Entlassung in Anschluss-Rehabilitation oder Kurzzeitpflege. Direkte Entlassung in die Wohnung (2. OG) erst nach gesicherter Mobilität.",
            descriptionB1:
              "Entlassung in Reha oder Kurzzeitpflege. Nach Hause geht erst, wenn Frau Siebert sicher gehen kann.",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-fall01-st01-08",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 437ff",
      "(DNQP Expertenstandard Sturzprophylaxe, 2013)",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-sturz",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Sturzprophylaxe bei Frau Siebert",
      body: "Entscheide, ob die folgenden Aussagen zur Sturzprophylaxe bei Frau Siebert richtig oder falsch sind.",
    },
    contentB1: {
      title: "Sturzprophylaxe: richtig oder falsch?",
      body: "Sind diese Aussagen richtig oder falsch? Entscheide.",
    },
    question: {
      fragetext:
        "Entscheide, ob die folgenden Aussagen zur Sturzprophylaxe richtig oder falsch sind.",
      trueFalseCards: [
        {
          statement:
            "Frau Siebert hat kein erhöhtes Sturzrisiko, weil sie eine TEP bekommen hat.",
          isTrue: false,
          explanation:
            "Falsch! Frau Siebert hat ein HOHES Sturzrisiko: Alter über 80, frische OP, Immobilität, Sturzangst, alleinlebend.",
        },
        {
          statement:
            "Die Sturzangst selbst ist ein Risikofaktor, weil sie zu Bewegungsvermeidung führt.",
          isTrue: true,
          explanation:
            "Richtig! Sturzangst führt zu weniger Bewegung — und damit zu Muskelabbau und Gleichgewichtsverlust. Ein Teufelskreis.",
        },
        {
          statement:
            "Nachts sollte ein Nachtlicht eingeschaltet werden, damit der Weg zur Toilette sicherer ist.",
          isTrue: true,
          explanation:
            "Richtig! Nachtlicht ist eine einfache und wirksame Maßnahme der Sturzprophylaxe.",
        },
        {
          statement:
            "Die Klingel muss nicht in Reichweite sein, weil Frau Siebert noch klingeln kann.",
          isTrue: false,
          explanation:
            `Falsch! Klingel in Reichweite ist Standard bei allen sturzgefährdeten Patienten — unabhängig davon, ob sie klingeln „können".`,
        },
      ],
    },
  },
];

// === FALL 2: Herr Tarik Demir — 64 Jahre (Erwachsener) ===

const DEMIR_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le06-fall02-st01-01",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Kreuzung der Nervenbahnen",
      body: "Herr Demir hat eine linkshemisphärische Schädigung. Welche Körperseite ist betroffen?",
    },
    contentB1: {
      title: "Welche Seite ist betroffen?",
      body: "Herr Demir hat eine Schädigung in der linken Gehirnhälfte. Welche Körperseite ist gelähmt?",
    },
    question: {
      fragetext:
        "Herr Demir hat eine linkshemisphärische Schädigung. Welche Körperseite ist betroffen?",
      optionen: [
        {
          text: "Die linke Seite (gleiche Seite wie die Schädigung)",
          isCorrect: false,
          explanation:
            "Die motorischen Nervenbahnen kreuzen sich im Hirnstamm — das heißt, die linke Gehirnhälfte steuert die rechte Körperseite und umgekehrt. Bei Herrn Demir sind rechter Arm und rechtes Bein gelähmt.",
          explanationB1:
            "Nein, die Nervenbahnen kreuzen sich. Linke Gehirnhälfte = rechte Körperseite ist betroffen.",
        },
        {
          text: "Die rechte Seite (gegenüberliegende Seite der Schädigung)",
          isCorrect: true,
          explanation:
            "Richtig! Die motorischen Nervenbahnen kreuzen sich im Hirnstamm. Eine Schädigung in der linken Gehirnhälfte führt deshalb zu Ausfällen auf der rechten Körperseite. Das ist ein grundlegendes Prinzip der Neurologie.",
          explanationB1:
            "Richtig! Linke Gehirnhälfte beschädigt = rechte Seite gelähmt. Die Nervenbahnen kreuzen sich.",
        },
        {
          text: "Beide Seiten gleichmäßig",
          isCorrect: false,
          explanation:
            "Eine einseitige Schädigung führt typischerweise zu einer einseitigen Lähmung (Hemiparese). Beide Seiten wären bei einer beidseitigen Schädigung betroffen.",
          explanationB1:
            "Nein. Eine Schädigung in der linken Hälfte betrifft die rechte Seite. Nicht beide.",
        },
        {
          text: "Nur das Gesicht, nicht die Extremitäten",
          isCorrect: false,
          explanation:
            "Bei einer Hemiparese sind typischerweise Arm UND Bein betroffen, oft auch das Gesicht (hängender Mundwinkel). Bei Herrn Demir sind rechter Arm und rechtes Bein teilgelähmt.",
          explanationB1:
            "Nein. Arm und Bein sind auch betroffen, nicht nur das Gesicht.",
        },
      ],
    },
  },
  {
    stepId: "le06-fall02-st01-02",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347", "(Bobath-Konzept)"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Bobath-Konzept: Richtig oder Falsch?",
      body: "Entscheide, ob die folgenden Aussagen zum Bobath-Konzept richtig oder falsch sind.",
    },
    contentB1: {
      title: "Bobath: Richtig oder falsch?",
      body: "Was stimmt beim Bobath-Konzept? Entscheide.",
    },
    question: {
      fragetext:
        "Entscheide, ob die folgenden Aussagen zum Bobath-Konzept richtig oder falsch sind.",
      trueFalseCards: [
        {
          statement:
            "Beim Bobath-Konzept wird die betroffene Seite geschont, um sie nicht zu überlasten.",
          isTrue: false,
          explanation:
            `Falsch! Beim Bobath-Konzept wird die betroffene Seite gezielt stimuliert und einbezogen — nicht geschont. Schonen würde bedeuten: Die betroffene Seite „vergessen" lassen.`,
        },
        {
          statement:
            "Der Nachttisch wird auf die betroffene Seite gestellt, damit der Patient seinen Kopf dorthin dreht.",
          isTrue: true,
          explanation:
            "Richtig! Alles wird auf die betroffene Seite positioniert — Nachttisch, Besucher, Essen. So wird die betroffene Seite ständig stimuliert.",
        },
        {
          statement:
            "Beim Transfer soll der Rollstuhl auf die betroffene (rechte) Seite gestellt werden.",
          isTrue: true,
          explanation:
            "Richtig! Der Transfer geht immer über die betroffene Seite — das stimuliert die betroffene Gehirnhälfte.",
        },
        {
          statement:
            "Angehörige sollten den Patienten immer von der gesunden Seite ansprechen, weil er dort besser reagiert.",
          isTrue: false,
          explanation:
            "Falsch! Besucher und Angehörige sollen von der betroffenen Seite kommen. Das Gehirn lernt durch wiederholte Reize von der betroffenen Seite.",
        },
      ],
    },
  },
  {
    stepId: "le06-fall02-st01-03",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "[Transfer] (Patientenkommunikation)",
      "Vgl. I Care Pflege S. 347",
    ],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 22,
    contentC1: {
      title: "Bobath erklären: Herr Demir",
      body: `Du musst Herrn Demir erklären, warum du den Rollstuhl auf seine rechte (betroffene) Seite stellst. Er sagt: „Warum muss die Schwester mich von der kranken Seite anfassen? Das ist doch Unsinn."`,
    },
    contentB1: {
      title: "Herrn Demir erklären: Warum rechts?",
      body: `Herr Demir fragt: „Warum von der kranken Seite?" Was sagst du?`,
    },
    question: {
      fragetext: `Herr Demir sagt: „Warum muss die Schwester mich von der kranken Seite anfassen? Das ist doch Unsinn." Wie reagierst du?`,
      patientName: "Herr Demir",
      dialogPhases: [
        {
          context:
            "Herr Demir sitzt im Bett, der Rollstuhl steht auf der rechten Seite. Er schaut skeptisch.",
          contextB1:
            "Herr Demir sitzt im Bett. Der Rollstuhl steht rechts. Er versteht nicht warum.",
          options: [
            {
              text: `„Herr Demir, ich verstehe, dass es sich komisch anfühlt. Die Idee ist: Wenn wir Ihre rechte Seite immer wieder ansprechen und einbeziehen, hilft das Ihrem Gehirn, neue Wege zu finden. Wie ein Muskel, der trainiert wird — nur eben das Gehirn."`,
              patientResponse:
                `„Also wie Training? Das Gehirn soll lernen, die rechte Seite wieder zu benutzen?"`,
              score: 3,
              feedback:
                "Perfekte Reaktion! Du hast den Fachbegriff vermieden und eine Analogie benutzt. Bei Patienten mit Sprachbarriere ist das besonders wichtig: Einfache Bilder statt Fachsprache.",
              textB1:
                `„Herr Demir, das hilft Ihrem Gehirn. Wir trainieren die rechte Seite. Wie einen Muskel — aber das Gehirn."`,
              patientResponseB1:
                `„Also Training für das Gehirn?"`,
              feedbackB1:
                "Sehr gut! Einfache Sprache, gute Erklärung.",
            },
            {
              text: `„Das ist das Bobath-Konzept. So machen wir das bei Schlaganfall-Patienten."`,
              patientResponse:
                `„Bobath? Was soll das sein? Reden Sie bitte Deutsch mit mir."`,
              score: 1,
              feedback:
                "Fachbegriff ohne Erklärung — und keine Empathie für seine Irritation. Herr Demir versteht medizinische Fachbegriffe nicht, besonders unter Stress.",
              textB1:
                `„Das ist das Bobath-Konzept."`,
              patientResponseB1:
                `„Was? Sprechen Sie Deutsch!"`,
              feedbackB1:
                "Nicht gut. Keine Fachbegriffe ohne Erklärung. Herr Demir versteht das nicht.",
            },
            {
              text: `„Das hat der Arzt so angeordnet."`,
              patientResponse:
                `„Der Arzt! Der war einmal da und hat 2 Minuten mit mir geredet!"`,
              score: 1,
              feedback:
                "Autoritäts-Argument erklärt nichts. Herr Demir braucht eine Erklärung, die er versteht — nicht einen Verweis auf den Arzt.",
              textB1: `„Der Arzt hat das so gesagt."`,
              patientResponseB1:
                `„Der Arzt war nur 2 Minuten da!"`,
              feedbackB1:
                "Nicht hilfreich. Herr Demir braucht eine Erklärung.",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le06-fall02-st01-04",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347, 357", "(Bobath-Konzept)"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Bobath-Transfer: Bett → Rollstuhl",
      body: "Herr Demir soll vom Bett in den Rollstuhl transferiert werden (Bobath-Konzept). Bringe die Schritte in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Transfer nach Bobath: Reihenfolge",
      body: "Herr Demir soll in den Rollstuhl. Was kommt zuerst?",
    },
    question: {
      fragetext:
        "Bringe die Schritte des Bobath-Transfers in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte des Bobath-Transfers vom Bett in den Rollstuhl.",
        items: [
          {
            id: "seq-1",
            label:
              "Rollstuhl auf die betroffene (rechte) Seite stellen",
          },
          {
            id: "seq-2",
            label: "Bremsen feststellen, Fußstützen hochklappen",
          },
          {
            id: "seq-3",
            label: "Herrn Demir an die Bettkante setzen lassen",
          },
          {
            id: "seq-4",
            label:
              "Betroffenen rechten Arm sicher positionieren (nicht herunterhängen lassen)",
          },
          {
            id: "seq-5",
            label:
              "Herrn Demir aufstehen lassen — Gewicht über die betroffene Seite verlagern",
          },
          {
            id: "seq-6",
            label:
              "Langsam zum Rollstuhl drehen und setzen lassen",
          },
          {
            id: "seq-7",
            label:
              "Sicheren Sitz prüfen, Fußstützen zurückklappen, Bremsen lösen",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-fall02-st01-05",
    phase: "s1",
    stepType: "categorize",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 421"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 17,
    contentC1: {
      title: "Dysphagie: Aspirationszeichen erkennen",
      body: `Herr Demir hat eine Schluckstörung (Dysphagie). Ordne die folgenden Beobachtungen zu: „Aspirationszeichen" oder „Kein Aspirationszeichen".`,
    },
    contentB1: {
      title: "Verschlucken: Warnsignale erkennen",
      body: "Herr Demir hat Schluckprobleme. Welche Zeichen sind Warnsignale?",
    },
    question: {
      fragetext:
        `Ordne die Beobachtungen zu: „Aspirationszeichen" oder „Kein Aspirationszeichen".`,
      categories: [
        { name: "Aspirationszeichen" },
        { name: "Kein Aspirationszeichen" },
      ],
      categoryItems: [
        {
          text: "Husten beim oder nach dem Trinken",
          correctCategory: 0,
        },
        {
          text: "Feuchte, gurgelnde Stimme nach dem Essen",
          correctCategory: 0,
        },
        {
          text: "Nahrungsreste im Mund nach dem Schlucken",
          correctCategory: 0,
        },
        {
          text: "Patient trinkt langsam aber ohne Husten",
          correctCategory: 1,
        },
        {
          text: "Temperaturanstieg ohne erkennbare Ursache",
          correctCategory: 0,
        },
        {
          text: "Patient isst normal, spricht danach klar",
          correctCategory: 1,
        },
      ],
    },
  },
  {
    stepId: "le06-fall02-st01-06",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "[Transfer] (Angehörigenberatung)",
      "Vgl. I Care Pflege S. 347",
    ],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-bobath",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Anleitung für Elif",
      body: "Herr Demirs Ehefrau Elif möchte wissen, wie sie ihrem Mann beim Transfer helfen kann. Formuliere eine kurze Anleitung für Elif — in einfacher, verständlicher Sprache (keine Fachbegriffe).",
    },
    contentB1: {
      title: "Elif helfen: Transfer erklären",
      body: "Elif will ihrem Mann helfen. Schreibe eine Anleitung in einfacher Sprache. Keine Fachbegriffe.",
    },
    question: {
      fragetext:
        "Formuliere eine kurze Anleitung für Elif — in einfacher Sprache, keine Fachbegriffe.",
      musterantwort:
        "Anleitung enthält: Rollstuhl auf die rechte Seite stellen, Bremsen feststellen, den rechten Arm sichern, nicht von links helfen, Geduld haben, bei Unsicherheit Pflegekraft rufen. Einfache Sätze, keine Fachbegriffe.",
      bewertungskriterien: [
        "Rollstuhl auf der betroffenen (rechten) Seite erwähnt",
        "Bremsen und Fußstützen erwähnt",
        "Betroffenen Arm sichern erwähnt",
        "Einfache Sprache (keine Fachbegriffe)",
        "Hinweis bei Unsicherheit Pflegekraft rufen",
      ],
    },
  },
  {
    stepId: "le06-fall02-st01-07",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 347, 404ff"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-prophylaxen",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Spastik und Kontraktur",
      body: "Herr Demir hat eine erhöhte Muskelspannung (Spastik) im rechten Arm und Bein. Welche Prophylaxe ist hier besonders wichtig?",
    },
    contentB1: {
      title: "Spastik: Welche Prophylaxe?",
      body: "Herr Demir hat zu viel Muskelspannung rechts (Spastik). Welche Vorbeugung ist am wichtigsten?",
    },
    question: {
      fragetext:
        "Welche Prophylaxe ist bei Spastik besonders wichtig?",
      optionen: [
        {
          text: "Sturzprophylaxe",
          isCorrect: false,
          explanation:
            "Sturzprophylaxe ist bei Herrn Demir relevant, aber die Spastik ist ein DIREKTER Risikofaktor für Kontrakturen, nicht primär für Stürze.",
          explanationB1:
            "Sturzprophylaxe ist wichtig, aber die Spastik betrifft vor allem die Gelenke. Kontrakturenprophylaxe ist hier die Antwort.",
        },
        {
          text: "Dekubitusprophylaxe",
          isCorrect: false,
          explanation:
            "Dekubitusprophylaxe ist bei Immobilität wichtig, aber Spastik ist primär ein Risikofaktor für Kontrakturen.",
          explanationB1:
            "Dekubitusprophylaxe ist wichtig, aber die Frage ist nach der Spastik. Spastik macht Kontrakturen.",
        },
        {
          text: "Kontrakturenprophylaxe",
          isCorrect: true,
          explanation:
            "Genau. Spastik bedeutet erhöhter Muskeltonus — die Muskulatur ist dauerhaft angespannt. Ohne gezielte Gegenmaßnahmen (Bewegungsübungen, Lagerung in Funktionsstellung) können sich Gelenke dauerhaft versteifen (Kontraktur). Typisch bei Hemiparese: der Spitzfuß.",
          explanationB1:
            "Richtig! Spastik = Muskeln sind zu angespannt. Ohne Übungen versteifen die Gelenke. Das nennt man Kontraktur.",
        },
        {
          text: "Thromboseprophylaxe",
          isCorrect: false,
          explanation:
            "Thromboseprophylaxe ist bei Immobilität nach Schlaganfall wichtig, aber Spastik führt primär zu Kontrakturen — der dauerhaft erhöhte Muskeltonus zieht die Gelenke in eine Fehlstellung.",
          explanationB1:
            "Thromboseprophylaxe ist auch wichtig, aber die Spastik führt zu Kontrakturen — nicht zu Thrombose.",
        },
      ],
    },
  },
];

// === FALL 3: Baby Nisa — 4 Monate (Kind) ===

const NISA_ST1_STEPS: ContentStep[] = [
  {
    stepId: "le06-fall03-st01-01",
    phase: "s1",
    stepType: "sequencing",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "Vgl. I Care Pflege S. 348",
      "(Kinästhetik Infant Handling, Hatch/Maietta)",
    ],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    xpValue: 10,
    contentC1: {
      title: "Baby Nisa aufnehmen",
      body: "Du möchtest Baby Nisa aus dem Bettchen nehmen. Bringe die Schritte des kinästhetischen Aufnehmens in die richtige Reihenfolge.",
    },
    contentB1: {
      title: "Baby Nisa hochnehmen",
      body: "Du willst Baby Nisa aus dem Bett nehmen. Was kommt zuerst?",
    },
    question: {
      fragetext:
        "Bringe die Schritte des kinästhetischen Aufnehmens in die richtige Reihenfolge.",
      sequencing: {
        instruction:
          "Sortiere die Schritte des kinästhetischen Aufnehmens von Baby Nisa.",
        items: [
          {
            id: "seq-1",
            label: "Nisa ansprechen und Blickkontakt aufnehmen",
          },
          {
            id: "seq-2",
            label:
              "Beide Hände sanft an Nisas Körper legen (Kontakt herstellen)",
          },
          {
            id: "seq-3",
            label:
              "Nisa vorsichtig auf die Seite drehen (spiralige Bewegung)",
          },
          {
            id: "seq-4",
            label:
              "Eine Hand unter den Kopf, eine unter den Rumpf schieben",
          },
          {
            id: "seq-5",
            label:
              "Nisa über die Seitenlage hochnehmen (NICHT parallel aus der Rückenlage ziehen)",
          },
          {
            id: "seq-6",
            label: "Nisa nah am eigenen Körper halten",
          },
        ],
      },
    },
  },
  {
    stepId: "le06-fall03-st01-02",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 348"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    xpValue: 10,
    contentC1: {
      title: "Hypotoner Muskeltonus",
      body: "Nisa hat einen hypotonen Muskeltonus. Was bedeutet das?",
    },
    contentB1: {
      title: "Was bedeutet hypoton?",
      body: "Die Ärzte sagen: Nisa hat einen hypotonen Muskeltonus. Was heißt das?",
    },
    question: {
      fragetext: "Nisa hat einen hypotonen Muskeltonus. Was bedeutet das?",
      optionen: [
        {
          text: "Nisas Muskelspannung ist zu hoch — sie ist steif und angespannt.",
          isCorrect: false,
          explanation:
            "Das wäre Hyper-tonus (zu viel Spannung). Hypo-ton = zu wenig Spannung. Nisa fühlt sich beim Halten schlaff an.",
          explanationB1:
            "Nein, das wäre Hyperton (zu viel Spannung). Hypoton = zu wenig Spannung. Nisa ist schlaff.",
        },
        {
          text: "Nisas Muskelspannung ist zu niedrig — sie fühlt sich beim Halten schlaff an.",
          isCorrect: true,
          explanation:
            `Genau. Hypo-ton = zu niedrige Spannung. Nisa fühlt sich beim Hochnehmen „schlaff" an, ihr Kopf fällt zur Seite. Das Gegenteil wäre Hyper-tonus (zu hohe Spannung, wie bei Spastik).`,
          explanationB1:
            "Richtig! Hypo = zu wenig. Ton = Spannung. Nisa hat zu wenig Muskelspannung. Sie ist schlaff beim Halten.",
        },
        {
          text: "Nisas Muskelspannung ist normal für ein Frühgeborenes.",
          isCorrect: false,
          explanation:
            "Hypotoner Muskeltonus ist zwar bei Frühgeborenen häufiger, aber es ist NICHT der Normalzustand. Nisa braucht gezielte Förderung, um den Tonus aufzubauen.",
          explanationB1:
            "Nein. Hypoton ist nicht normal. Nisa braucht Hilfe, um ihre Muskeln stärker zu machen.",
        },
        {
          text: "Nisas Muskeln sind dauerhaft verkrampft (Spastik).",
          isCorrect: false,
          explanation:
            "Spastik ist das Gegenteil von Hypotonie. Spastik = zu VIEL Spannung, Hypotonie = zu WENIG Spannung. Bei Nisa sind die Muskeln zu schlaff.",
          explanationB1:
            "Nein. Spastik = zu viel Spannung. Nisa hat das Gegenteil: zu wenig Spannung.",
        },
      ],
    },
  },
  {
    stepId: "le06-fall03-st01-03",
    phase: "s1",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 348"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Infant Handling: Richtig oder Falsch?",
      body: "Entscheide, ob die folgenden Aussagen zum Infant Handling richtig oder falsch sind.",
    },
    contentB1: {
      title: "Infant Handling: Stimmt das?",
      body: "Sind diese Aussagen richtig oder falsch?",
    },
    question: {
      fragetext:
        "Entscheide, ob die folgenden Aussagen zum Infant Handling richtig oder falsch sind.",
      trueFalseCards: [
        {
          statement:
            "Beim Ablegen berühren die Füße zuerst die Unterlage.",
          isTrue: true,
          explanation:
            "Richtig! Füße zuerst gibt dem Baby Orientierung und Sicherheit.",
        },
        {
          statement:
            "Ein Frühgeborenes darf man aus der Rückenlage parallel hochheben, weil es so leicht ist.",
          isTrue: false,
          explanation:
            "Falsch! Auch leichte Babys werden immer über die Seitenlage aufgenommen. Paralleles Hochheben ist bei Hypotonie kontraproduktiv.",
        },
        {
          statement:
            "Nestlagerung (begrenzte Unterlage) gibt Frühgeborenen Sicherheit und Halt.",
          isTrue: true,
          explanation:
            "Richtig! Die Nestlagerung simuliert die Begrenzung des Mutterleibs und gibt dem Frühgeborenen Sicherheit.",
        },
        {
          statement:
            "Bauchlage sollte bei hypotonen Babys vermieden werden, weil sie den Kopf nicht halten können.",
          isTrue: false,
          explanation:
            "Falsch! Bauchlage FÖRDERT den Muskeltonus — genau das, was Nisa braucht. Natürlich nur unter Aufsicht und zeitlich begrenzt.",
        },
      ],
    },
  },
  {
    stepId: "le06-fall03-st01-04",
    phase: "s1",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["[Transfer] (Elternanleitung)"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Vater Kemal anleiten",
      body: `Vater Kemal steht am Bettchen und sagt: „Sie ist so klein, ich habe Angst ihr wehzutun." Wie leitest du ihn an?`,
    },
    contentB1: {
      title: "Kemal hat Angst",
      body: `Kemal sagt: „Sie ist so klein. Ich habe Angst ihr wehzutun." Was sagst du?`,
    },
    question: {
      fragetext: `Kemal sagt: „Sie ist so klein, ich habe Angst ihr wehzutun." Wie leitest du ihn an?`,
      patientName: "Kemal (Vater)",
      dialogPhases: [
        {
          context:
            "Kemal steht neben dem Bettchen. Er hält die Hände hinter dem Rücken und traut sich nicht, Nisa zu berühren.",
          contextB1:
            "Kemal steht neben dem Bett. Er traut sich nicht, Nisa anzufassen.",
          options: [
            {
              text: `„Herr Demir, kommen Sie, ich zeige es Ihnen. Legen Sie Ihre Hände erst mal nur auf Nisas Bauch — so fühlen Sie, wie sie atmet. Dann machen wir den nächsten Schritt zusammen."`,
              patientResponse:
                `Kemal legt vorsichtig die Hände auf Nisas Bauch. Nisa greift nach seinem Finger. „Sie hält sich ja an mir fest!"`,
              score: 3,
              feedback:
                "Perfekt! Du hast Kemals Angst ernst genommen und ihn schrittweise herangeführt — erst nur Berühren, dann Halten. Das Erfolgserlebnis ist die beste Motivation.",
              textB1:
                `„Legen Sie die Hände auf Nisas Bauch. So fühlen Sie, wie sie atmet."`,
              patientResponseB1:
                `Kemal legt die Hände hin. Nisa greift seinen Finger. „Sie hält mich fest!"`,
              feedbackB1:
                "Sehr gut! Schritt für Schritt. Kemal traut sich jetzt mehr.",
            },
            {
              text: `„Sie können nichts falsch machen, Babys sind robuster als man denkt!"`,
              patientResponse:
                `„Sagen Sie das nicht — sie war doch Frühchen! Sie wiegt fast nichts!"`,
              score: 1,
              feedback:
                "Das verharmlost Kemals berechtigte Angst. Nisa IST zart und braucht vorsichtiges Handling. Nimm seine Sorge ernst und leite ihn konkret an.",
              textB1:
                `„Babys sind stärker als man denkt!"`,
              patientResponseB1:
                `„Aber sie war ein Frühchen! Sie ist so zart!"`,
              feedbackB1:
                "Nicht gut. Kemals Angst ist berechtigt. Zeige ihm, wie es geht.",
            },
            {
              text: `„Ihre Frau kann Ihnen zeigen, wie es geht."`,
              patientResponse:
                "Kemal tritt einen Schritt zurück. Yasemin verdreht die Augen.",
              score: 1,
              feedback:
                "Das schließt den Vater aus. Väter werden im Pflegealltag oft übersehen — aktiv einbeziehen macht einen riesigen Unterschied.",
              textB1:
                `„Ihre Frau kann es Ihnen zeigen."`,
              patientResponseB1:
                "Kemal geht einen Schritt zurück.",
              feedbackB1:
                "Nicht gut. Du schließt den Vater aus. Beziehe ihn ein!",
            },
          ],
        },
      ],
    },
  },
  {
    stepId: "le06-fall03-st01-05",
    phase: "s1",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.1",
    quellen: [
      "[Transfer] (transkulturelle Pflege)",
      "Vgl. I Care Pflege S. 348",
    ],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    xpValue: 11,
    contentC1: {
      title: "Großmutter und Swaddling",
      body: `Die Großmutter sagt: „In der Türkei wickeln wir die Babys fest ein, dann werden sie ruhiger." Was ist deine fachliche Einschätzung in Bezug auf Nisa?`,
    },
    contentB1: {
      title: "Fest einwickeln: ja oder nein?",
      body: `Die Oma sagt: „Fest einwickeln beruhigt Babys." Stimmt das bei Nisa?`,
    },
    question: {
      fragetext:
        "Die Großmutter empfiehlt festes Einwickeln. Was ist deine fachliche Einschätzung bei Nisa?",
      optionen: [
        {
          text: "Festes Einwickeln ist bei allen Babys empfehlenswert.",
          isCorrect: false,
          explanation:
            "Nicht bei allen Babys. Swaddling kann bei reifen, normotonen Babys beruhigend wirken — aber nicht bei einem hypotonen Frühgeborenen, das Bewegungsförderung braucht.",
          explanationB1:
            "Nein, nicht bei allen Babys. Nisa braucht Bewegung, nicht Einwickeln.",
        },
        {
          text: "Swaddling kann bei manchen Neugeborenen beruhigend wirken, ist aber bei Nisa mit hypotonem Muskeltonus nicht sinnvoll, weil sie aktive Bewegungsförderung braucht.",
          isCorrect: true,
          explanation:
            "Genau! Swaddling kann bei reifen, normotonen Babys beruhigend wirken. Aber Nisa braucht Bewegungsfreiheit und gezielte Stimulation, um ihren Muskeltonus aufzubauen. Festes Einwickeln würde genau das verhindern.",
          explanationB1:
            "Richtig! Manche Babys werden ruhiger beim Einwickeln. Aber Nisa braucht Bewegung für ihre Muskeln. Einwickeln ist hier falsch.",
        },
        {
          text: "Festes Einwickeln ist in Deutschland generell verboten.",
          isCorrect: false,
          explanation:
            "Nein, Swaddling ist nicht verboten. Es ist eine Technik, die in bestimmten Situationen angewendet werden kann — aber eben nicht bei Nisa mit Hypotonie.",
          explanationB1:
            "Nein, Einwickeln ist nicht verboten. Aber bei Nisa ist es nicht gut.",
        },
        {
          text: "Die Großmutter hat Recht — Einwickeln stärkt den Muskeltonus.",
          isCorrect: false,
          explanation:
            "Einwickeln stärkt NICHT den Muskeltonus. Im Gegenteil: Festes Einwickeln verhindert Bewegung — und Bewegung ist genau das, was Nisa braucht, um ihren Tonus aufzubauen.",
          explanationB1:
            "Nein. Einwickeln macht die Muskeln nicht stärker. Nisa braucht Bewegung für stärkere Muskeln.",
        },
      ],
    },
  },
  {
    stepId: "le06-fall03-st01-06",
    phase: "s1",
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.1",
    quellen: ["Vgl. I Care Pflege S. 348"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kinaesthetik",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    xpValue: 28,
    contentC1: {
      title: "Lagerungsplan für Nisa",
      body: "Formuliere einen kurzen Lagerungsplan für Baby Nisa. Berücksichtige: Entwicklungsförderung (Muskeltonus), Sicherheit (Aspirationsgefahr beim Trinken) und Komfort (Nestlagerung).",
    },
    contentB1: {
      title: "Lagerungsplan für Nisa",
      body: "Schreibe einen Lagerungsplan für Baby Nisa. Denke an: Muskeltraining, sicheres Trinken und Nestlagerung.",
    },
    question: {
      fragetext:
        "Erstelle einen Lagerungsplan für Baby Nisa. Berücksichtige: Entwicklungsförderung, Sicherheit und Komfort.",
      musterantwort:
        "Nestlagerung als Basis (begrenzende Lagerungshilfen). Bauchlage unter Aufsicht 2–3× täglich für kurze Einheiten (Tonusförderung). Beim Trinken: Oberkörper erhöht halten (Aspirationsprophylaxe). Wechsel der Kopfposition (Kopfverformung vorbeugen). Seitenlage mit Stützung möglich.",
      bewertungskriterien: [
        "Nestlagerung als Basisposition erwähnt",
        "Bauchlage unter Aufsicht für Tonusförderung",
        "Oberkörperhochlagerung beim Trinken (Aspirationsprophylaxe)",
        "Wechsel der Kopfposition erwähnt",
        "Sicherheitshinweise (nur unter Aufsicht)",
      ],
    },
  },
];

// === EXPORT ===

export const LE06_FALLVERLAEUFE: Fallverlauf[] = [
  {
    fallId: "le06-fall-siebert",
    patient: {
      patientId: "pat-siebert-01",
      name: "Helga Siebert",
      alter: 81,
      geschlecht: "w",
      diagnosen: [
        "Oberschenkelhalsfraktur rechts",
        "Z.n. Hüft-TEP",
        "Teilbelastung 20 kg",
      ],
      sourceLEs: ["le-06"],
      steckbrief:
        "81-jährige Witwe, bis zum Sturz völlig selbstständig. Lebt allein in Altbauwohnung im 2. OG ohne Aufzug. Hüft-TEP vor 2 Tagen. Barthel-Index 40. Ausgeprägte Sturzangst, weigert sich aufzustehen. BMI 19,8 (grenzwertig). Tochter lebt 200 km entfernt. Kein Pflegegrad bisher.",
    },
    titel: "Frau Siebert — Mobilisation nach Hüft-TEP trotz Sturzangst",
    titelB1: "Frau Siebert — Aufstehen nach Hüft-Operation mit Angst",
    stationen: [
      {
        stationId: "le06-fall01-st01",
        zeitpunkt: "Tag 2 post-OP",
        titel: "Erstmobilisation und Prophylaxe-Bündel",
        titelB1: "Zum ersten Mal aufstehen + alle Prophylaxen",
        situationC1:
          `Frau Siebert (81) liegt seit der Hüft-TEP überwiegend im Bett. Barthel-Index 40, BMI 19,8. Sie klammert sich an die Bettkante und sagt: „Wenn ich wieder falle, komme ich nie wieder hoch." Die Erstmobilisation steht an, gleichzeitig musst du ein Prophylaxe-Bündel planen: Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz.`,
        situationB1:
          "Frau Siebert liegt im Bett. Sie hat Angst aufzustehen. Du musst sie mobilisieren und gleichzeitig alle Prophylaxen planen.",
        relevanteKapitel: ["le06-kap-01", "le06-kap-02", "le06-kap-03"],
        steps: SIEBERT_ST1_STEPS,
        bloomRange: [1, 3],
      },
    ],
    fokus: "pflege",
  },
  {
    fallId: "le06-fall-demir",
    patient: {
      patientId: "pat-demir-01",
      name: "Tarik Demir",
      alter: 64,
      geschlecht: "m",
      diagnosen: [
        "Ischämischer Schlaganfall (links-hemisphärisch)",
        "Rechtsseitige Hemiparese",
        "Dysphagie",
      ],
      sourceLEs: ["le-06"],
      steckbrief:
        "64-jähriger Taxifahrer, seit 20 Jahren in Deutschland. Vor 6 Tagen Schlaganfall. Rechtsseitige Hemiparese mit Spastik. Barthel-Index 25. Leichte Dysphagie. Ehefrau Elif übersetzt oft. Deutsch B2 im Alltag, aber Fachbegriffe und Stress verschlechtern sein Deutsch. Frustriert und schämt sich.",
    },
    titel: "Herr Demir — Bobath-Konzept und kultursensible Kommunikation",
    titelB1: "Herr Demir — Mobilisation nach Schlaganfall",
    stationen: [
      {
        stationId: "le06-fall02-st01",
        zeitpunkt: "Tag 6 nach Schlaganfall",
        titel: "Bobath-Handling und Angehörigenberatung",
        titelB1: "Bobath-Konzept und Elif anleiten",
        situationC1:
          "Herr Demir (64) hat eine rechtsseitige Hemiparese nach Schlaganfall. Bobath-Konzept eingeleitet: alles über die betroffene Seite. Er versteht nicht, warum der Rollstuhl rechts steht. Dazu eine Dysphagie — beim Trinken verschluckt er sich gelegentlich. Seine Frau Elif will helfen, versteht aber das Konzept noch nicht.",
        situationB1:
          "Herr Demir hat eine Halbseitenlähmung rechts. Das Bobath-Konzept sagt: Alles über die rechte (kranke) Seite. Er versteht das nicht. Seine Frau Elif will helfen.",
        relevanteKapitel: ["le06-kap-04", "le06-kap-05"],
        steps: DEMIR_ST1_STEPS,
        bloomRange: [1, 3],
      },
    ],
    fokus: "pflege",
  },
  {
    fallId: "le06-fall-nisa",
    patient: {
      patientId: "pat-nisa-01",
      name: "Nisa (Baby)",
      alter: 0,
      geschlecht: "w",
      diagnosen: [
        "Frühgeborenes (31. SSW)",
        "Hypotoner Muskeltonus",
        "Trinkprobleme",
        "Motorische Entwicklungsverzögerung",
      ],
      sourceLEs: ["le-06"],
      steckbrief:
        "4 Monate altes Frühgeborenes (31. SSW, Geburtsgewicht 1.480 g). Hypotoner Muskeltonus, instabiler Kopf, Trinkprobleme. Mutter Yasemin (28, Erzieherin) stellt viele Fragen. Vater Kemal (31, Elektriker) traut sich kaum, Nisa hochzunehmen. Großmutter empfiehlt traditionelles Einwickeln.",
    },
    titel: "Baby Nisa — Kinästhetik Infant Handling und Elternberatung",
    titelB1: "Baby Nisa — Richtig aufnehmen und Eltern anleiten",
    stationen: [
      {
        stationId: "le06-fall03-st01",
        zeitpunkt: "Korrigiert 4 Monate",
        titel: "Handling, Lagerung und Elternanleitung",
        titelB1: "Baby aufnehmen, lagern und Eltern zeigen",
        situationC1:
          "Baby Nisa (4 Monate korrigiert, Frühgeborenes der 31. SSW) hat einen hypotonen Muskeltonus. Ihr Kopf ist noch instabil, beim Trinken verschluckt sie sich gelegentlich. Vater Kemal traut sich nicht, sie hochzunehmen. Großmutter empfiehlt festes Einwickeln — was bei Nisa kontraproduktiv wäre. Du musst kinästhetisches Handling anwenden, Eltern anleiten und die Großmutter fachlich beraten.",
        situationB1:
          "Baby Nisa ist ein Frühchen. Sie ist schlaff und ihr Kopf fällt zur Seite. Papa Kemal hat Angst. Die Oma will einwickeln. Du musst zeigen, wie man Nisa richtig aufnimmt und hinlegt.",
        relevanteKapitel: ["le06-kap-06"],
        steps: NISA_ST1_STEPS,
        bloomRange: [1, 3],
      },
    ],
    fokus: "pflege",
  },
];
