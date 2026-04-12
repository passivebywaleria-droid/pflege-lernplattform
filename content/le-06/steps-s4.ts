// Session 4: "Gefährliche Stille — Thrombose und Kontraktur" — LE 06
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB7: Kontrakturprophylaxe (KB-I, I-13) + TB8: Thromboseprophylaxe (KB-I, I-14, Virchow-Trias)
// Leitfälle: Herr Schmidt (56, Schlaganfall, Hemiplegie rechts) + Frau Becker (79, Hüft-TEP)
// Bloom: B2-B4, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S4: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — Herr Schmidt verweigert Mobilisation (Dilemma)
  // =============================================================
  {
    stepId: "le06-s4-tb7-01",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q1 S.347", "IV-01"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Herr Schmidt dreht sich weg",
      body: "Tag 3 nach dem Schlaganfall. Herr Schmidt liegt im Bett und verweigert jede Mobilisation.",
      fallbezug: "Herr Schmidt, 56 Jahre, Hemiplegie rechts. Kann rechten Arm und Bein kaum bewegen. Zunehmend frustriert.",
    },
    contentB1: {
      title: "Herr Schmidt will nicht",
      body: "Tag 3 nach dem Schlaganfall. Herr Schmidt will sich nicht bewegen.",
      fallbezug: "Herr Schmidt, 56, kann die rechte Seite kaum bewegen. Er ist frustriert.",
    },
    question: {
      fragetext: "Du betrittst das Zimmer. Herr Schmidt liegt mit dem Gesicht zur Wand.",
      patientName: "Herr Schmidt",
      dialogPhases: [
        {
          context: "Herr Schmidt dreht sich weg als du reinkommst: 'Lassen Sie mich in Ruhe. Mein Arm bewegt sich eh nicht mehr. Was soll das alles bringen?'",
          contextB1: "Herr Schmidt dreht sich weg. Er sagt: 'Lassen Sie mich. Mein Arm geht nicht mehr. Das bringt nichts.'",
          speaker: "Herr Schmidt",
          options: [
            {
              text: "Ich verstehe, dass Sie frustriert sind. Darf ich Ihnen erklären, warum die Übungen so wichtig sind — auch wenn es sich gerade nicht so anfühlt?",
              textB1: "Ich verstehe, dass Sie traurig sind. Darf ich erklären, warum die Übungen wichtig sind?",
              patientResponse: "Na gut... aber erwarten Sie nicht zu viel. Mein Arm tut eh was er will.",
              patientResponseB1: "Ok... aber erwarten Sie nicht viel.",
              score: 3,
              feedback: "Sehr gut! Du zeigst Empathie, respektierst seine Gefühle und bittest um Erlaubnis. Sandwich-Prinzip: Erst anerkennen, dann informieren, dann ermutigen.",
              feedbackB1: "Super! Du verstehst seine Gefühle und fragst, ob du erklären darfst. Das ist richtig.",
            },
            {
              text: "Herr Schmidt, wenn Sie die Übungen nicht machen, versteift Ihr Arm dauerhaft. Das wollen Sie doch nicht!",
              textB1: "Wenn Sie nicht üben, wird der Arm steif! Das wollen Sie nicht!",
              patientResponse: "Ach, hören Sie auf mir Angst zu machen! Gehen Sie raus!",
              patientResponseB1: "Hören Sie auf! Gehen Sie raus!",
              score: 1,
              feedback: "Verständlich, aber kontraproduktiv. Drohungen und Angst erzeugen Widerstand. Besser: Empathie zeigen, dann sachlich informieren.",
              feedbackB1: "Angst machen hilft nicht. Besser: Erst verstehen, dann erklären.",
            },
            {
              text: "Ok, dann ruhe ich mich aus. Ich komme morgen wieder.",
              textB1: "Ok, dann morgen. Ruhen Sie sich aus.",
              patientResponse: "Endlich mal jemand der mich in Ruhe lässt...",
              patientResponseB1: "Endlich Ruhe...",
              score: 2,
              feedback: "Du respektierst seine Autonomie, aber ohne jede Aufklärung über die Risiken. Besser: Respektieren UND informieren. 'Ich respektiere das. Aber darf ich kurz erklären, warum die Übungen helfen?'",
              feedbackB1: "Du respektierst ihn, das ist gut. Aber du solltest auch erklären, warum die Übungen wichtig sind.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: SZENE — Empathie-Slider
  // =============================================================
  {
    stepId: "le06-s4-tb7-02",
    phase: "s4",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["IV-01"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Wie frustriert ist Herr Schmidt?",
      body: "Stell dir vor: Du bist 56 Jahre alt. Vor 3 Tagen konntest du noch alles. Jetzt bewegt sich deine rechte Seite nicht mehr.",
    },
    contentB1: {
      title: "Wie fühlt sich Herr Schmidt?",
      body: "Du bist 56 Jahre alt. Vor 3 Tagen war alles normal. Jetzt geht der rechte Arm nicht mehr.",
    },
    question: {
      fragetext: "Wie frustriert ist Herr Schmidt deiner Meinung nach auf einer Skala von 1-10?",
      sliderVariant: "empathy" as const,
      slider: {
        instruction: "Schätze Herrn Schmidts Frustrationslevel ein:",
        unit: "",
        min: 1,
        max: 10,
        step: 1,
        correctValue: 9,
        tolerance: 2,
        explanation: "Die meisten Experten schätzen die Frustration nach einem akuten Schlaganfall auf 8-10. Herr Schmidt war vorher komplett selbstständig. Die plötzliche Hemiplegie ist ein massiver Einschnitt. Frustration, Wut und Trauer sind NORMAL und müssen ernst genommen werden.",
        explanationB1: "Herr Schmidt ist wahrscheinlich sehr frustriert (8-10). Vor 3 Tagen konnte er alles. Jetzt geht der rechte Arm nicht. Das ist normal, traurig und wütend zu sein.",
      },
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Was ist eine Kontraktur?
  // =============================================================
  {
    stepId: "le06-s4-tb7-03",
    phase: "s4",
    stepType: "text",
    displayFormat: "glossary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-408"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Kontraktur — wenn Gelenke versteifen",
      body: "**Kontraktur** = Versteifung eines Gelenks durch Schrumpfung von Muskeln, Sehnen und Bändern bei Immobilität.\n\nWenn ein Gelenk sich über längere Zeit nicht bewegt, verkürzen sich die umliegenden Weichteile. Das Gelenk verliert seinen Bewegungsumfang — zunächst teilweise, dann vollständig.\n\n**Besonders gefährdete Gelenke:**\n- **Sprunggelenk** → Spitzfuß (Fuß steht dauerhaft nach unten)\n- **Handgelenk** → Krallenhand (Finger dauerhaft gebeugt)\n- **Hüftgelenk** → Beugekontraktur (Patient kann nicht mehr gerade stehen)\n- **Kniegelenk** → Streckhemmung (Knie lässt sich nicht mehr durchstrecken)",
      glossarBegriffe: ["Kontraktur", "Spitzfuß"],
    },
    contentB1: {
      title: "Kontraktur — Was ist das?",
      body: "**Kontraktur** = Ein Gelenk wird steif.\n\nWenn sich ein Gelenk lange nicht bewegt, werden Muskeln und Sehnen kürzer. Das Gelenk kann sich dann nicht mehr richtig bewegen.\n\n**Diese Gelenke sind besonders gefährdet:**\n- **Fuß** → Spitzfuß (der Fuß zeigt nach unten und geht nicht mehr hoch)\n- **Hand** → Krallenhand (die Finger sind immer gebeugt)\n- **Hüfte** → Man kann nicht mehr gerade stehen\n- **Knie** → Das Knie geht nicht mehr gerade",
      glossarBegriffe: ["Kontraktur", "Spitzfuß"],
    },
  },

  // =============================================================
  // Step 4: ERKLÄRUNG — Teufelskreis Immobilität
  // =============================================================
  {
    stepId: "le06-s4-tb7-04",
    phase: "s4",
    stepType: "text",
    displayFormat: "analogy",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-408"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Der Teufelskreis: Wie ein Scharnier das einrostet",
      body: "Stell dir ein Scharnier vor, das man nie bewegt. Es rostet ein. Irgendwann geht es gar nicht mehr auf.\n\nGenauso funktioniert eine Kontraktur:\n\n**Immobilität** → Muskeln/Sehnen verkürzen sich → **Gelenk versteift** → Bewegung wird schmerzhaft oder unmöglich → **noch weniger Bewegung** → noch mehr Versteifung → ...\n\nDas ist ein Teufelskreis. Je länger man wartet, desto schwieriger wird es. Deshalb ist **Frühmobilisation** so wichtig: Jeder Tag zählt.\n\nBei Herrn Schmidt bedeutet das: Auch wenn sein rechter Arm sich kaum bewegt — passive Übungen verhindern, dass das Gelenk versteift.",
    },
    contentB1: {
      title: "Ein Scharnier das einrostet",
      body: "Stell dir eine Tür vor. Wenn man sie nie öffnet, rostet das Scharnier ein. Irgendwann geht die Tür nicht mehr auf.\n\nBeim Körper ist es genauso:\n\n**Nicht bewegen** → Muskeln werden kürzer → **Gelenk wird steif** → Bewegen tut weh → **Noch weniger bewegen** → Noch steifer → ...\n\nDas ist ein Teufelskreis. Deshalb ist es wichtig, früh mit Übungen zu beginnen.\n\nBei Herrn Schmidt heißt das: Auch wenn sein Arm sich kaum bewegt — Übungen helfen, dass das Gelenk nicht steif wird.",
    },
  },

  // =============================================================
  // Step 5: CHECKPOINT — MC Kontrakturgefährdung
  // =============================================================
  {
    stepId: "le06-s4-tb7-05",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-408"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "CHECKPOINT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Welches Gelenk ist am meisten gefährdet?",
      body: "Herr Schmidt kann seinen rechten Arm kaum bewegen. Welche Kontraktur droht zuerst?",
    },
    contentB1: {
      title: "Welches Gelenk ist gefährdet?",
      body: "Herr Schmidts rechter Arm bewegt sich kaum. Welches Gelenk wird am ehesten steif?",
    },
    question: {
      fragetext: "Herr Schmidt (Hemiplegie rechts) kann seinen rechten Arm kaum bewegen. Welches Gelenk ist am meisten kontrakturgefährdet?",
      optionen: [
        {
          text: "Handgelenk — Krallenhand",
          isCorrect: true,
          explanation: "Richtig! Bei Hemiplegie ist das Handgelenk besonders gefährdet. Die Fingerbeuger sind oft spastisch, die Strecker gelähmt. Ohne regelmäßiges Öffnen und Strecken entwickelt sich eine Krallenhand.",
          explanationB1: "Richtig! Bei einer Lähmung wird die Hand oft zur Faust. Die Finger bleiben gebeugt. Man muss die Hand regelmäßig öffnen und strecken.",
        },
        {
          text: "Schultergelenk",
          isCorrect: false,
          explanation: "Die Schulter ist auch gefährdet (Subluxation), aber die Krallenhand am Handgelenk entsteht schneller, weil die kleinen Fingergelenke bei Spastik zuerst betroffen sind.",
          explanationB1: "Die Schulter ist auch gefährdet, aber die Hand wird meistens schneller steif.",
        },
        {
          text: "Ellbogengelenk",
          isCorrect: false,
          explanation: "Der Ellbogen kann auch versteifen, ist aber bei Hemiplegie nicht die häufigste Kontrakturstelle. Das Handgelenk mit Krallenhand-Entwicklung kommt typischer.",
          explanationB1: "Der Ellbogen kann auch steif werden, aber die Hand ist öfter betroffen.",
        },
        {
          text: "Kniegelenk",
          isCorrect: false,
          explanation: "Das Knie ist bei Hemiplegie weniger typisch als Kontrakturstelle. Das Bein wird zwar auch weniger bewegt, aber die Spastik betrifft vor allem die obere Extremität — besonders die Hand.",
          explanationB1: "Das Knie wird auch weniger bewegt, aber die Hand ist bei Schlaganfall häufiger betroffen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: ANDERS ERKLÄRT — Comparison gesund vs. Kontraktur
  // =============================================================
  {
    stepId: "le06-s4-tb7-06",
    phase: "s4",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-408"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "krankheitslehre",
    contentC1: {
      title: "Vergleich: Gesundes Gelenk vs. Kontraktur",
      body: "Was unterscheidet ein gesundes Gelenk von einem mit Kontraktur?",
    },
    contentB1: {
      title: "Gesundes Gelenk oder Kontraktur?",
      body: "Was ist anders bei einem steifen Gelenk?",
    },
    question: {
      fragetext: "Vergleiche: Gesundes Gelenk vs. Kontraktur",
      comparison: {
        instruction: "Vergleiche die beiden Zustände:",
        columns: [
          { label: "Gesundes Gelenk", icon: "heart" },
          { label: "Kontraktur", icon: "lock" },
        ],
        rows: [
          {
            criterion: "Bewegungsumfang",
            values: ["Voller Bewegungsumfang in alle Richtungen", "Eingeschränkt bis vollständig aufgehoben"],
            valuesB1: ["Das Gelenk bewegt sich in alle Richtungen", "Das Gelenk bewegt sich kaum oder gar nicht"],
          },
          {
            criterion: "Schmerz",
            values: ["Schmerzfreie Bewegung", "Schmerzen bei Dehnung oder Bewegungsversuch"],
            valuesB1: ["Keine Schmerzen bei Bewegung", "Schmerzen wenn man versucht zu bewegen"],
          },
          {
            criterion: "Ursache",
            values: ["Regelmäßige Bewegung hält Gelenk gesund", "Immobilität: Muskeln/Sehnen verkürzen sich"],
            valuesB1: ["Regelmäßig bewegen hält gesund", "Nicht bewegen macht steif"],
          },
          {
            criterion: "Prophylaxe",
            values: ["Normale Alltagsbewegung reicht", "Aktive + passive Übungen, Mobilisation, Schienen"],
            valuesB1: ["Normale Bewegung im Alltag", "Spezielle Übungen und Hilfsmittel nötig"],
          },
          {
            criterion: "Reversibel?",
            values: ["—", "Früh behandelt: teilweise. Spät: dauerhaft"],
            valuesB1: ["—", "Früh behandeln: Besserung möglich. Zu spät: bleibt so"],
            highlight: 1,
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 7: ERKLÄRUNG — Kontrakturprophylaxe Maßnahmen
  // =============================================================
  {
    stepId: "le06-s4-tb7-07",
    phase: "s4",
    stepType: "text",
    displayFormat: "checklist",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-408"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Kontrakturprophylaxe — So bleiben Gelenke beweglich",
      body: "Maßnahmen zur Kontrakturprophylaxe:\n\n- **Aktive Bewegungsübungen** — Patient bewegt das Gelenk selbst (soweit möglich)\n- **Passive Bewegungsübungen** — Pflegekraft bewegt das Gelenk für den Patienten (bei Lähmung)\n- **Frühmobilisation** — So früh wie möglich aus dem Bett\n- **Physiologische Positionierung** — Gelenke in Funktionsstellung lagern, nicht in Beugestellung\n- **Hilfsmittel** — Schienen (Orthesen), Lagerungskissen, Anti-Spitzfuß-Schiene\n\n**Bei Herrn Schmidt konkret:**\n- Rechte Hand regelmäßig öffnen und Finger strecken\n- Handgelenk passiv bewegen (kreisen, strecken, beugen)\n- Anti-Spitzfuß-Schiene für den rechten Fuß\n- Physiotherapie einbeziehen",
      glossarBegriffe: ["Kontraktur", "Prophylaxe"],
    },
    contentB1: {
      title: "So bleiben Gelenke beweglich",
      body: "Was kann man gegen Kontraktur tun?\n\n- **Aktive Übungen** — Der Patient bewegt das Gelenk selbst\n- **Passive Übungen** — Die Pflegekraft bewegt das Gelenk (wenn der Patient es nicht kann)\n- **Früh aufstehen** — So schnell wie möglich aus dem Bett\n- **Richtig lagern** — Gelenke nicht in Beugestellung lassen\n- **Hilfsmittel** — Schienen für Hand und Fuß\n\n**Bei Herrn Schmidt:**\n- Rechte Hand öffnen und Finger strecken\n- Handgelenk bewegen\n- Schiene für den rechten Fuß\n- Physiotherapie",
      glossarBegriffe: ["Kontraktur", "Prophylaxe"],
    },
  },

  // =============================================================
  // Step 8: ANWENDUNG — Branching Herr Schmidt verweigert Handübungen
  // =============================================================
  {
    stepId: "le06-s4-tb7-08",
    phase: "s4",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q2 S.404-408", "IV-01"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Herr Schmidt verweigert die Handübungen",
      body: "Du willst mit Herrn Schmidt Handübungen machen. Er zieht die Hand weg.",
    },
    contentB1: {
      title: "Herr Schmidt will keine Übungen",
      body: "Du willst Herrn Schmidts Hand bewegen. Er zieht die Hand weg.",
    },
    question: {
      fragetext: "Herr Schmidt zieht seine rechte Hand weg: 'Nicht anfassen! Der Arm gehört mir nicht mehr.' Was tust du?",
      branchingOptions: [
        {
          text: "Ich verstehe Ihre Frustration, Herr Schmidt. Darf ich Ihnen zeigen, warum diese kleinen Übungen so wichtig sind? Nur 2 Minuten.",
          feedback: "Sehr gut! Du zeigst Empathie, bittest um Erlaubnis und machst das Angebot klein (nur 2 Minuten). Sandwich-Prinzip: Anerkennen → Informieren → Ermutigen. Die meisten Patienten lassen sich darauf ein.",
          feedbackB1: "Super! Du verstehst seine Gefühle und fragst, ob du erklären darfst. 'Nur 2 Minuten' macht es leichter für ihn.",
          isCorrect: true,
        },
        {
          text: "Ok, dann morgen. Ich komme morgen wieder.",
          feedback: "Autonomie respektieren ist wichtig, ABER ohne Aufklärung über die Konsequenzen (Kontraktur, Krallenhand) ist das fahrlässig. Du solltest zumindest informieren, bevor du gehst.",
          feedbackB1: "Morgen wiederkommen ist ok. Aber du solltest erklären, warum die Übungen wichtig sind. Sonst weiß Herr Schmidt es nicht.",
          isCorrect: false,
        },
        {
          text: "Ich mache die Übungen jetzt trotzdem — es ist medizinisch notwendig.",
          feedback: "NEIN! Gegen den Willen des Patienten zu handeln verletzt seine Autonomie und ist eine Körperverletzung. Auch medizinische Notwendigkeit rechtfertigt keinen Zwang bei einwilligungsfähigen Patienten.",
          feedbackB1: "NEIN! Du darfst den Patienten nicht zwingen. Er hat das Recht 'Nein' zu sagen. Auch wenn die Übungen wichtig sind.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 9: SNACK — Swipe Kontraktur Richtig/Falsch
  // =============================================================
  {
    stepId: "le06-s4-sn-01",
    phase: "s4",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-408"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Teste dein Wissen über Kontrakturen. Wische richtig oder falsch.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Was ist richtig? Was ist falsch? Wische nach rechts oder links.",
    },
    question: {
      fragetext: "Richtig oder falsch?",
      swipe: {
        instruction: "Wische: Richtig oder falsch?",
        cards: [
          {
            statement: "Eine Kontraktur ist reversibel wenn sie früh behandelt wird.",
            statementB1: "Eine Kontraktur kann besser werden wenn man früh etwas tut.",
            isCorrect: true,
            explanation: "Richtig! Im Frühstadium können Kontrakturen durch konsequente Übungen und Mobilisation teilweise oder ganz rückgängig gemacht werden. Im Spätstadium sind sie oft dauerhaft.",
            explanationB1: "Richtig! Wenn man früh mit Übungen beginnt, kann das Gelenk wieder beweglicher werden. Wenn man zu lange wartet, bleibt es steif.",
          },
          {
            statement: "Nur passive Übungen helfen gegen Kontraktur.",
            statementB1: "Nur wenn die Pflegekraft das Gelenk bewegt, hilft es.",
            isCorrect: false,
            explanation: "Falsch! Aktive Übungen (Patient bewegt selbst) sind sogar besser als passive. Die Kombination aus aktiv + passiv ist optimal. Auch Mobilisation und Positionierung helfen.",
            explanationB1: "Nein! Am besten bewegt der Patient selbst. Wenn er nicht kann, hilft die Pflegekraft. Beides zusammen ist am besten.",
          },
          {
            statement: "Der Spitzfuß ist eine häufige Kontraktur bei bettlägerigen Patienten.",
            statementB1: "Wenn ein Patient lange im Bett liegt, kann der Fuß steif nach unten stehen.",
            isCorrect: true,
            explanation: "Richtig! Der Spitzfuß (Plantarflexionskontraktur) entsteht, wenn der Fuß durch die Bettdecke dauerhaft nach unten gedrückt wird. Prophylaxe: Anti-Spitzfuß-Schiene oder Bettbügel.",
            explanationB1: "Richtig! Die Bettdecke drückt den Fuß nach unten. Eine Schiene oder ein Bügel verhindert das.",
          },
          {
            statement: "Eine Kontraktur entsteht innerhalb von 24 Stunden.",
            statementB1: "In 24 Stunden wird ein Gelenk steif.",
            isCorrect: false,
            explanation: "Falsch! Kontrakturen entwickeln sich über Tage bis Wochen. Aber die Verkürzung beginnt schnell — schon nach 3-5 Tagen Immobilität sind erste Veränderungen messbar. Deshalb: Frühmobilisation!",
            explanationB1: "Nein! Es dauert länger als 24 Stunden. Aber schon nach wenigen Tagen beginnt das Problem. Deshalb: Schnell mit Übungen anfangen!",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: SZENE — Frau Becker: Bein geschwollen (Thrombose-Verdacht)
  // =============================================================
  {
    stepId: "le06-s4-tb8-01",
    phase: "s4",
    stepType: "text",
    displayFormat: "scenario",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "SZENE",
    tag: "krankheitslehre",
    contentC1: {
      title: "Frau Becker: Etwas stimmt nicht",
      body: "Tag 4 nach der Hüft-TEP. Du kommst zur Frühschicht ins Zimmer.\n\nFrau Becker liegt im Bett und sieht beunruhigt aus: 'Schwester, mein rechtes Bein fühlt sich so komisch an. Es zieht so und es ist dicker als gestern.'\n\nDu schaust genauer hin: Das rechte Bein ist sichtbar **geschwollen**, fühlt sich **warm** an und die Haut ist leicht **gerötet**. Frau Becker verzieht das Gesicht wenn du vorsichtig drückst.\n\n**Was könnte das sein?**",
      fallbezug: "Frau Becker, 79, Tag 4 nach Hüft-TEP. Risikofaktoren: Alter, OP, Immobilität.",
    },
    contentB1: {
      title: "Frau Beckers Bein ist dick",
      body: "Tag 4 nach der Hüft-OP. Du kommst morgens ins Zimmer.\n\nFrau Becker sagt: 'Mein rechtes Bein fühlt sich komisch an. Es ist dicker als gestern.'\n\nDu schaust: Das Bein ist **geschwollen**, **warm** und **rot**. Frau Becker hat Schmerzen.\n\n**Was könnte das sein?**",
      fallbezug: "Frau Becker, Tag 4 nach der OP. Risiko: Alter, OP, wenig Bewegung.",
    },
  },

  // =============================================================
  // Step 11: ERKLÄRUNG — Virchow-Trias
  // =============================================================
  {
    stepId: "le06-s4-tb8-02",
    phase: "s4",
    stepType: "text",
    displayFormat: "mnemonic",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Virchow-Trias: 3 Gründe für Thrombose",
      body: "Die **Virchow-Trias** beschreibt 3 Risikofaktoren die gemeinsam eine Thrombose verursachen.\n\n**Merkhilfe: V-I-R**\n- **V** = Verlangsamter Blutfluss (Immobilität, langes Liegen)\n- **I** = Intimaschädigung (Gefäßwandschädigung durch OP oder Trauma)\n- **R** = Risiko-Blut (Veränderte Blutzusammensetzung, z.B. Gerinnungsstörung)\n\n**Bei Frau Becker sind ALLE 3 gleichzeitig vorhanden:**\n1. Verlangsamter Blutfluss — liegt nach OP im Bett, bewegt die Beine kaum\n2. Gefäßwandschädigung — Hüft-OP hat Blutgefäße in der Nähe verletzt\n3. Veränderte Blutzusammensetzung — OP-Stress + Flüssigkeitsverlust\n\nAlle 3 Faktoren gleichzeitig = besonders hohes Thromboserisiko!",
      glossarBegriffe: ["Virchow-Trias", "Thrombose"],
    },
    contentB1: {
      title: "3 Gründe für Thrombose (Blutgerinnsel)",
      body: "**Virchow-Trias** = 3 Gründe für ein Blutgerinnsel:\n\n**Merke: V-I-R**\n- **V** = Blut fließt zu langsam (weil der Patient im Bett liegt)\n- **I** = Blutgefäß ist verletzt (durch die OP)\n- **R** = Blut gerinnt leichter (durch OP-Stress)\n\n**Bei Frau Becker sind ALLE 3 Gründe da:**\n1. Sie liegt im Bett → Blut fließt langsam\n2. Die OP hat Gefäße verletzt → Gefäßwand kaputt\n3. OP-Stress → Blut gerinnt leichter\n\nAlle 3 zusammen = sehr hohes Risiko!",
      glossarBegriffe: ["Virchow-Trias", "Thrombose"],
    },
  },

  // =============================================================
  // Step 12: CHECKPOINT — Anticipation-MC Heparin
  // =============================================================
  {
    stepId: "le06-s4-tb8-03",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Warum Spritzen in den Bauch?",
      body: "Frau Becker bekommt täglich eine Spritze in den Bauch — obwohl sie an der Hüfte operiert wurde. Warum?",
    },
    contentB1: {
      title: "Warum bekommt Frau Becker Spritzen?",
      body: "Frau Becker bekommt jeden Tag eine Spritze in den Bauch. Die OP war an der Hüfte. Warum?",
    },
    question: {
      fragetext: "Was glaubst du — warum bekommt Frau Becker Spritzen in den Bauch obwohl sie an der Hüfte operiert wurde?",
      mcVariant: "anticipation" as const,
      optionen: [
        {
          text: "Heparin verhindert Blutgerinnsel — Thromboseprophylaxe nach OP",
          isCorrect: true,
          explanation: "Richtig! Heparin ist ein Gerinnungshemmer der subkutan (unter die Haut) in den Bauch gespritzt wird. Es verhindert, dass sich in den Beinvenen ein Blutgerinnsel bildet. Standardprophylaxe nach jeder größeren OP.",
          explanationB1: "Richtig! Heparin ist ein Medikament gegen Blutgerinnsel. Es wird in den Bauch gespritzt. So entsteht kein Gerinnsel in den Beinen.",
        },
        {
          text: "Schmerzmittel für die Hüfte — wirkt über den Bauch schneller",
          isCorrect: false,
          explanation: "Falsch. Schmerzmittel werden oral oder intravenös gegeben, nicht subkutan in den Bauch. Die Bauchspritzen sind Heparin zur Thromboseprophylaxe.",
          explanationB1: "Nein. Schmerzmittel gibt man als Tablette oder in die Vene. Die Bauchspritzen sind gegen Blutgerinnsel.",
        },
        {
          text: "Antibiotika gegen Wundinfektion",
          isCorrect: false,
          explanation: "Falsch. Antibiotika werden meist intravenös oder oral gegeben. Die subkutane Injektion in den Bauch ist typisch für Heparin (Thromboseprophylaxe).",
          explanationB1: "Nein. Antibiotika gibt man als Tablette oder in die Vene. Die Bauchspritzen sind etwas anderes.",
        },
        {
          text: "Insulinspritze — Frau Becker hat Diabetes",
          isCorrect: false,
          explanation: "Falsch. Im Fallbeispiel ist kein Diabetes erwähnt. Außerdem wird Insulin zwar auch subkutan gespritzt, aber die postoperative Standardprophylaxe ist Heparin gegen Thrombose.",
          explanationB1: "Nein. Frau Becker hat keinen Diabetes. Die Spritzen sind Heparin gegen Blutgerinnsel.",
        },
      ],
    },
  },

  // =============================================================
  // Step 13: ERKLÄRUNG — Reveal Thromboseprophylaxe-Maßnahmen
  // =============================================================
  {
    stepId: "le06-s4-tb8-04",
    phase: "s4",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "4 Säulen der Thromboseprophylaxe",
      body: "Tippe auf jede Karte um die Maßnahmen zu entdecken.",
      glossarBegriffe: ["Anti-Thrombose-Strümpfe (MTS)", "Heparin"],
    },
    contentB1: {
      title: "4 Maßnahmen gegen Thrombose",
      body: "Tippe auf die Karten. Was tut man gegen Blutgerinnsel?",
      glossarBegriffe: ["Anti-Thrombose-Strümpfe (MTS)", "Heparin"],
    },
    question: {
      fragetext: "Entdecke die 4 Säulen der Thromboseprophylaxe:",
      reveal: {
        instruction: "Tippe auf jede Karte:",
        revealMode: "free" as const,
        cards: [
          {
            id: "tp1",
            label: "Frühmobilisation",
            content: "So früh wie möglich aufstehen und bewegen. Muskelpumpe in den Beinen drückt das Blut zurück zum Herzen. Frau Becker: Ab Tag 1 post-OP mobilisieren!",
            contentB1: "So früh wie möglich aufstehen. Wenn die Beine sich bewegen, fließt das Blut besser. Frau Becker: Ab Tag 1 nach der OP aufstehen!",
            icon: "footprints",
          },
          {
            id: "tp2",
            label: "Beinübungen im Bett",
            content: "Fuß kreisen, Zehen anziehen/strecken, Beine abwechselnd beugen/strecken. Aktiviert die Wadenmuskelpumpe auch im Liegen.",
            contentB1: "Fuß kreisen, Zehen bewegen, Beine anwinkeln und strecken. Das hilft dem Blut, auch im Liegen besser zu fließen.",
            icon: "activity",
          },
          {
            id: "tp3",
            label: "Anti-Thrombose-Strümpfe (MTS)",
            content: "Medizinische Kompressionsstrümpfe die den Blutfluss in den Beinvenen beschleunigen. Morgens VOR dem Aufstehen anziehen (Beine noch nicht geschwollen). Faltenfrei hochziehen!",
            contentB1: "Spezielle enge Strümpfe. Sie drücken die Beine zusammen und das Blut fließt schneller. Morgens anziehen BEVOR der Patient aufsteht.",
            icon: "shirt",
          },
          {
            id: "tp4",
            label: "Heparin s.c.",
            content: "Medikamentöse Prophylaxe: niedermolekulares Heparin (z.B. Clexane) subkutan in die Bauchdecke. Hemmt die Blutgerinnung. Standarddosis: 1x täglich. Achtung: Blutungsrisiko!",
            contentB1: "Ein Medikament gegen Blutgerinnsel. Wird als Spritze in den Bauch gegeben. 1x am Tag. Achtung: Der Patient kann leichter bluten!",
            icon: "syringe",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 14: ANWENDUNG — Matrix Thromboseprophylaxe
  // =============================================================
  {
    stepId: "le06-s4-tb8-05",
    phase: "s4",
    stepType: "matrix",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Maßnahmen einordnen: 2x2-Matrix",
      body: "Ordne die Thromboseprophylaxe-Maßnahmen in die richtige Kategorie ein.",
    },
    contentB1: {
      title: "Maßnahmen sortieren",
      body: "Sortiere die Maßnahmen in die richtige Gruppe.",
    },
    question: {
      fragetext: "Ordne die Maßnahmen in die 2x2-Matrix ein:",
      matrix: {
        instruction: "Ziehe jede Maßnahme in das richtige Feld:",
        axisX: { label: "Art", low: "Nicht-medikamentös", high: "Medikamentös" },
        axisY: { label: "Beteiligung", low: "Passiv (ohne Patient)", high: "Aktiv (mit Patient)" },
        items: [
          { id: "m1", text: "Heparin-Spritze", correctQuadrant: 2 },
          { id: "m2", text: "MTS anziehen", correctQuadrant: 1 },
          { id: "m3", text: "Beinübungen im Bett", correctQuadrant: 3 },
          { id: "m4", text: "Frühmobilisation", correctQuadrant: 3 },
          { id: "m5", text: "Beine hochlagern", correctQuadrant: 1 },
        ],
      },
    },
  },

  // =============================================================
  // Step 15: ANWENDUNG — Freetext Virchow-Trias (OQ2)
  // =============================================================
  {
    stepId: "le06-s4-tb8-06",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Offene Frage: Virchow-Trias am Fallbeispiel",
      body: "Erkläre die Virchow-Trias und begründe, warum Frau Becker besonders thrombosegefährdet ist.",
      fallbezug: "Frau Becker, 79 Jahre, Tag 4 nach Hüft-TEP. Alle 3 Virchow-Faktoren liegen vor.",
    },
    contentB1: {
      title: "Erkläre: Warum hat Frau Becker Thrombose-Risiko?",
      body: "Es gibt 3 Gründe für Thrombose (Virchow-Trias). Erkläre sie und sage, warum Frau Becker alle 3 hat.",
      fallbezug: "Frau Becker, 79 Jahre, Tag 4 nach Hüft-OP.",
    },
    question: {
      fragetext: "Erkläre die Virchow-Trias und begründe, warum Frau Becker nach der Hüft-OP besonders thrombosegefährdet ist.",
      musterantwort: "Die Virchow-Trias beschreibt 3 Risikofaktoren für eine Thrombose: 1) Verlangsamter Blutfluss — Frau Becker liegt nach der OP im Bett und bewegt die Beine kaum. 2) Gefäßwandschädigung — durch die Hüft-OP wurden Blutgefäße in der Nähe verletzt. 3) Veränderte Blutzusammensetzung — OP-Stress und Flüssigkeitsverlust verändern die Gerinnungsfähigkeit. Weil alle 3 Faktoren gleichzeitig vorliegen, ist das Thromboserisiko besonders hoch. Deshalb braucht sie: MTS, Heparin und Frühmobilisation.",
      bewertungskriterien: [
        "Benennt alle 3 Faktoren der Virchow-Trias korrekt",
        "Ordnet jeden Faktor konkret dem Fallbeispiel (Frau Becker) zu",
        "Leitet mindestens 2 Prophylaxe-Maßnahmen ab",
      ],
      satzanfaengeB1: [
        "Es gibt 3 Gründe für eine Thrombose: ...",
        "Bei Frau Becker ist der erste Grund: ...",
        "Der zweite Grund: ...",
        "Der dritte Grund: ...",
        "Deshalb braucht sie: ...",
      ],
    },
  },

  // =============================================================
  // Step 16: ANWENDUNG — ConceptMap Thrombose-Zusammenhänge
  // =============================================================
  {
    stepId: "le06-s4-tb8-07",
    phase: "s4",
    stepType: "conceptmap",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Zusammenhänge erkennen: Thrombose",
      body: "Verbinde die Begriffe mit den richtigen Beziehungen.",
    },
    contentB1: {
      title: "Was gehört zusammen?",
      body: "Verbinde die Begriffe. Was führt wozu? Was verhindert was?",
    },
    question: {
      fragetext: "Verbinde die Begriffe mit der richtigen Beziehung:",
      conceptmap: {
        instruction: "Ziehe Verbindungen zwischen den Begriffen:",
        nodes: [
          { id: "n1", label: "Immobilität", fixed: true },
          { id: "n2", label: "Thrombose", fixed: true },
          { id: "n3", label: "Heparin", fixed: true },
          { id: "n4", label: "MTS", fixed: true },
          { id: "n5", label: "Frühmobilisation", fixed: true },
          { id: "n6", label: "Virchow-Trias", fixed: true },
          { id: "n7", label: "Lungenembolie", fixed: true },
        ],
        correctConnections: [
          { from: "n1", to: "n2", label: "erhöht Risiko für" },
          { from: "n6", to: "n2", label: "erklärt Entstehung von" },
          { from: "n3", to: "n2", label: "verhindert" },
          { from: "n4", to: "n2", label: "verhindert" },
          { from: "n5", to: "n2", label: "verhindert" },
          { from: "n2", to: "n7", label: "kann führen zu" },
        ],
        availableLabels: [
          "erhöht Risiko für",
          "verhindert",
          "erklärt Entstehung von",
          "kann führen zu",
        ],
      },
    },
  },

  // =============================================================
  // Step 17: PRAXIS_DIALOG — Arzt ordnet Thromboseprophylaxe an
  // =============================================================
  {
    stepId: "le06-s4-tb8-08",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-III",
    quellen: ["Q2 S.410-416", "III-01"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "PRAXIS_DIALOG",
    tag: "pflege",
    contentC1: {
      title: "Arztanordnung: Thromboseprophylaxe",
      body: "Der Arzt kommt zur Visite und gibt Anordnungen für Frau Becker.",
    },
    contentB1: {
      title: "Der Arzt gibt Anweisungen",
      body: "Der Arzt kommt und sagt, was Frau Becker braucht.",
    },
    question: {
      fragetext: "Der Arzt ordnet an: 'Frau Becker bekommt Clexane 40mg s.c. 1x täglich. Bitte MTS anziehen und Beinübungen anleiten.'",
      patientName: "Arzt",
      dialogPhases: [
        {
          context: "Arzt: 'Frau Becker bekommt Clexane 40mg subkutan, einmal täglich. Außerdem bitte Anti-Thrombose-Strümpfe anziehen und Beinübungen anleiten. Fragen?'",
          contextB1: "Arzt: 'Frau Becker bekommt eine Spritze gegen Blutgerinnsel. Bitte ziehen Sie ihr die Strümpfe an und zeigen Sie ihr Beinübungen. Fragen?'",
          speaker: "Arzt",
          options: [
            {
              text: "Wann soll ich die MTS anziehen — morgens vor dem Aufstehen oder erst nach dem Aufstehen?",
              textB1: "Wann soll ich die Strümpfe anziehen? Morgens vor dem Aufstehen?",
              patientResponse: "Morgens vor dem Aufstehen, richtig. Die Beine müssen noch ungeschwollen sein.",
              patientResponseB1: "Ja, morgens vor dem Aufstehen. Dann sind die Beine noch dünn.",
              score: 3,
              feedback: "Perfekt! Du stellst eine fachlich relevante Frage. MTS müssen VOR dem Aufstehen angezogen werden, wenn die Beine noch nicht geschwollen sind. Das zeigt interprofessionelle Kompetenz.",
              feedbackB1: "Super Frage! Die Strümpfe muss man anziehen BEVOR der Patient aufsteht. Dann sind die Beine noch nicht geschwollen.",
            },
            {
              text: "Alles klar, mache ich sofort.",
              textB1: "Ok, mache ich.",
              patientResponse: "Gut. Dokumentieren Sie die Maßnahmen bitte.",
              patientResponseB1: "Gut. Schreiben Sie alles auf.",
              score: 2,
              feedback: "In Ordnung, aber du hättest Rückfragen stellen können: Wann MTS? Wie lange tragen? Welche Beinübungen genau? Rückfragen zeigen Kompetenz und verhindern Fehler.",
              feedbackB1: "Ok, aber frage ruhig nach: Wann Strümpfe anziehen? Wie lange? Welche Übungen? Fragen sind wichtig.",
            },
            {
              text: "Wie lange soll sie die MTS täglich tragen?",
              textB1: "Wie lange soll sie die Strümpfe am Tag anziehen?",
              patientResponse: "Tagsüber durchgehend. Zur Nacht ausziehen, Haut inspizieren. Morgens vor dem Aufstehen wieder anziehen.",
              patientResponseB1: "Den ganzen Tag. Nachts ausziehen und die Haut anschauen. Morgens wieder anziehen.",
              score: 3,
              feedback: "Gute Frage! MTS werden tagsüber getragen und nachts ausgezogen. Wichtig: Haut täglich inspizieren (Druckstellen, Rötungen). Morgens vor dem Aufstehen wieder anziehen.",
              feedbackB1: "Gute Frage! Strümpfe: Tagsüber tragen, nachts ausziehen. Haut anschauen ob sie rot ist.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 18: ANWENDUNG — Sequencing MTS anziehen
  // =============================================================
  {
    stepId: "le06-s4-tb8-09",
    phase: "s4",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.410-416"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "MTS anziehen — richtige Reihenfolge",
      body: "In welcher Reihenfolge zieht man Anti-Thrombose-Strümpfe korrekt an?",
      glossarBegriffe: ["Anti-Thrombose-Strümpfe (MTS)"],
    },
    contentB1: {
      title: "Strümpfe anziehen — richtige Reihenfolge",
      body: "In welcher Reihenfolge zieht man die Strümpfe richtig an?",
      glossarBegriffe: ["Anti-Thrombose-Strümpfe (MTS)"],
    },
    question: {
      fragetext: "Bringe die 6 Schritte zum Anziehen der MTS in die richtige Reihenfolge:",
      sequencing: {
        instruction: "Ziehe die Schritte in die richtige Reihenfolge:",
        items: [
          { id: "mts1", label: "Morgens VOR dem Aufstehen anziehen" },
          { id: "mts2", label: "Bein kurz hochlagern (Schwellung reduzieren)" },
          { id: "mts3", label: "Strumpf auf links drehen (Ferse sichtbar)" },
          { id: "mts4", label: "Über Zehen und Ferse ziehen" },
          { id: "mts5", label: "Faltenfrei nach oben hochziehen" },
          { id: "mts6", label: "Sitz kontrollieren (keine Falten, keine Einschnürung)" },
        ],
      },
    },
  },

  // =============================================================
  // Step 19: INTERLEAVING — LE-08 Ernährung bei Immobilität
  // =============================================================
  {
    stepId: "le06-s4-sn-02",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: [],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    wusstestDuDas: "Bei Bettlägerigkeit verliert der Körper bis zu 1-3% Muskelmasse pro Tag. Eiweißreiche Ernährung kann diesen Abbau verlangsamen.",
    contentC1: {
      title: "Interleaving: LE-08 Ernährung",
      body: "Frau Becker ist nach der Hüft-TEP immobil. Neben Thromboseprophylaxe braucht sie auch besondere Ernährung.",
    },
    contentB1: {
      title: "Ernährung bei Bettlägerigkeit (LE-08)",
      body: "Frau Becker liegt viel im Bett. Neben Thromboseprophylaxe ist auch die Ernährung wichtig.",
    },
    question: {
      fragetext: "Frau Becker ist nach der Hüft-TEP immobil. Neben Thromboseprophylaxe — warum ist Eiweißzufuhr bei Immobilität besonders wichtig?",
      optionen: [
        {
          text: "Eiweiß verhindert Muskelabbau und stärkt die Gewebetoleranz gegen Dekubitus",
          isCorrect: true,
          explanation: "Richtig! Bei Bettlägerigkeit baut der Körper Muskelmasse ab (Proteolyse). Eiweißmangel senkt zusätzlich die Gewebetoleranz — das Dekubitusrisiko steigt. Eiweiß ist also Muskelschutz UND Hautschutz.",
          explanationB1: "Richtig! Wenn man im Bett liegt, werden die Muskeln schwächer. Eiweiß hilft gegen Muskelschwund. Und es macht die Haut stärker gegen Druckstellen.",
        },
        {
          text: "Eiweiß beschleunigt die Blutgerinnung und verhindert Thrombose",
          isCorrect: false,
          explanation: "Falsch. Eiweiß hat keinen direkten Einfluss auf die Blutgerinnung. Thromboseprophylaxe läuft über Heparin, MTS und Mobilisation — nicht über Ernährung.",
          explanationB1: "Nein. Eiweiß hat nichts mit Blutgerinnung zu tun. Gegen Thrombose helfen Spritzen, Strümpfe und Bewegung.",
        },
        {
          text: "Eiweiß ist nur wichtig bei Sportlern, nicht bei immobilen Patienten",
          isCorrect: false,
          explanation: "Falsch! Gerade bei immobilen Patienten ist Eiweiß besonders wichtig: Der Körper baut ohne Belastung Muskeln ab. Eiweiß verlangsamt diesen Prozess.",
          explanationB1: "Nein! Gerade wenn man im Bett liegt, braucht man Eiweiß. Sonst werden die Muskeln schnell schwächer.",
        },
        {
          text: "Eiweiß ist nur für die Wundheilung der OP-Narbe relevant",
          isCorrect: false,
          explanation: "Teilweise richtig — Eiweiß hilft auch bei der Wundheilung. Aber der Hauptgrund bei Immobilität ist die Verhinderung von Muskelabbau und die Erhaltung der Gewebetoleranz.",
          explanationB1: "Eiweiß hilft bei der Wundheilung, das stimmt. Aber es hilft auch gegen Muskelschwund und für starke Haut.",
        },
      ],
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG — Dialog Physiotherapeutin + Herr Schmidt
  // =============================================================
  {
    stepId: "le06-s4-tb7-09",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-III",
    quellen: ["Q2 S.404-408", "III-01"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Gemeinsam mit der Physiotherapeutin",
      body: "Die Physiotherapeutin kommt zu Herrn Schmidt. Du bist dabei und planst gemeinsam.",
    },
    contentB1: {
      title: "Die Physiotherapeutin kommt",
      body: "Die Physiotherapeutin besucht Herrn Schmidt. Du planst zusammen mit ihr.",
    },
    question: {
      fragetext: "Die Physiotherapeutin fragt: 'Welche Übungen empfehlen Sie für Herrn Schmidts rechte Hand?'",
      patientName: "Physiotherapeutin",
      dialogPhases: [
        {
          context: "Die Physiotherapeutin ist bei Herrn Schmidt. Sie schaut dich an: 'Du kennst den Patienten besser als ich. Welche Übungen schlägst du für die rechte Hand vor?'",
          contextB1: "Die Physiotherapeutin fragt dich: 'Du kennst Herrn Schmidt. Was sollen wir mit seiner rechten Hand machen?'",
          speaker: "Physiotherapeutin",
          options: [
            {
              text: "Finger spreizen und schließen, Handgelenk kreisen, Ball drücken — mehrmals täglich, kurze Einheiten damit er nicht überfordert wird.",
              textB1: "Finger auf und zu machen, Handgelenk drehen, Ball drücken. Mehrmals am Tag, aber kurz.",
              patientResponse: "Guter Plan! Ich ergänze passive Dehnung des Handgelenks. Wir machen 3x täglich je 5 Minuten.",
              patientResponseB1: "Guter Plan! Ich mache auch noch Dehnübungen dazu. 3 Mal am Tag, 5 Minuten.",
              score: 3,
              feedback: "Perfekt! Du schlägst konkrete, passende Übungen vor und berücksichtigst Herrn Schmidts Frustration (kurze Einheiten). Die Physiotherapeutin ergänzt — das ist interprofessionelle Zusammenarbeit.",
              feedbackB1: "Super! Du schlägst gute Übungen vor. Kurze Einheiten sind wichtig, weil Herr Schmidt frustriert ist. Die Physiotherapeutin ergänzt weitere Übungen.",
            },
            {
              text: "Ich bin mir nicht sicher — was empfehlen Sie?",
              textB1: "Ich weiß nicht genau. Was sagen Sie?",
              patientResponse: "Finger spreizen, Handgelenk kreisen, Ball drücken. 3x täglich 5 Minuten. Zeig ich dir.",
              patientResponseB1: "Finger auf und zu, Handgelenk drehen, Ball drücken. 3 Mal am Tag. Ich zeige es dir.",
              score: 2,
              feedback: "Die Physiotherapeutin zeigt dir die Übungen — das ist ein Lernmoment. Aber als Pflegefachkraft solltest du Kontrakturprophylaxe-Übungen selbst vorschlagen können. Das gehört zu deinen Kompetenzen.",
              feedbackB1: "Die Physiotherapeutin zeigt dir die Übungen. Aber du solltest die Übungen auch selbst kennen. Das gehört zu deinem Beruf.",
            },
            {
              text: "Herr Schmidt verweigert alles. Ich glaube nicht, dass er mitmacht.",
              textB1: "Herr Schmidt will nicht mitmachen. Er verweigert alles.",
              patientResponse: "Das ist wichtig zu wissen. Dann fangen wir klein an — vielleicht nur 1 Minute, mit viel Lob. Frustration nach Schlaganfall ist normal.",
              patientResponseB1: "Danke, das ist wichtig. Wir fangen ganz klein an. Nur 1 Minute. Und wir loben ihn viel.",
              score: 2,
              feedback: "Du teilst wichtige Informationen über den Patienten — das ist interprofessionelle Kommunikation. Aber du hättest trotzdem Übungen vorschlagen können, zusätzlich zur Warnung.",
              feedbackB1: "Du sagst der Physiotherapeutin, dass Herr Schmidt nicht will. Das ist wichtig. Aber du solltest auch Übungen vorschlagen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 21: REFLEXION — Ethisches Dilemma Autonomie vs. Prophylaxe
  // =============================================================
  {
    stepId: "le06-s4-tb7-10",
    phase: "s4",
    stepType: "reflection",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["IV-01"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le06-kontraktur",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Ethisches Dilemma: Wille vs. Wohl",
      body: "Herr Schmidt verweigert die Übungen. Sein Arm wird steifer. Was wiegt schwerer?",
    },
    contentB1: {
      title: "Was ist dir wichtiger?",
      body: "Herr Schmidt will keine Übungen. Aber sein Arm wird steifer. Was ist richtig?",
    },
    question: {
      fragetext: "Herr Schmidt verweigert Übungen für seine rechte Hand. Sein Arm wird steifer. Was ist dir wichtiger: sein Wille oder die Kontrakturprophylaxe? Begründe deine Antwort.",
      reflection: {
        prompt: "Reflektiere: Was wiegt schwerer — die Autonomie des Patienten oder der Schutz vor Kontraktur? Es gibt kein eindeutiges Richtig oder Falsch.",
        placeholder: "Ich denke, dass...",
        systemPrompt: "Der Schüler reflektiert über das ethische Dilemma Autonomie vs. Fürsorge bei Herrn Schmidt (Hemiplegie, Kontrakturgefahr). Gib empathisches Feedback. Beide Seiten haben Berechtigung: Autonomie (Patient darf Nein sagen) UND Fürsorge (Pflicht zur Aufklärung über Konsequenzen). Die Lösung liegt im Mittelweg: Respektieren + Informieren + Motivieren + Dokumentieren. Sandwich-Prinzip beachten.",
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary Session 4
  // =============================================================
  {
    stepId: "le06-s4-tb8-10",
    phase: "s4",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["Q2 S.404-416", "IV-01"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le06-thrombose",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Session 4 — Zusammenfassung",
      body: "Kontraktur, Thrombose und ein ethisches Dilemma — das waren die Themen heute.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Kontraktur, Thrombose und eine schwierige Frage: Was tun wenn der Patient Nein sagt?",
    },
    question: {
      fragetext: "Zusammenfassung Session 4:",
      summary: {
        reflexionRueckbezug: "Du hast heute Herrn Schmidt bei der Kontrakturprophylaxe begleitet und die Virchow-Trias am Beispiel von Frau Becker verstanden.",
        kernaussagen: [
          "Kontraktur = Gelenkversteifung durch Immobilität. Teufelskreis: weniger Bewegung → steifer → noch weniger Bewegung",
          "Besonders gefährdet: Handgelenk (Krallenhand), Sprunggelenk (Spitzfuß), Hüfte, Knie",
          "Kontrakturprophylaxe: aktive + passive Übungen, Frühmobilisation, Positionierung, Schienen",
          "Virchow-Trias: 3 Thrombose-Risikofaktoren (V=Blutfluss, I=Gefäßwand, R=Blutzusammensetzung)",
          "Thromboseprophylaxe: Frühmobilisation + Beinübungen + MTS + Heparin s.c.",
          "Ethisches Dilemma: Autonomie respektieren UND über Konsequenzen aufklären — beides gleichzeitig",
          "Nächste Session: Pneumonieprophylaxe + Dekubitus",
        ],
      },
    },
  },
];
