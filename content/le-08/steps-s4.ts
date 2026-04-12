// Session 4: "Wenn der Mund nicht mehr reicht" — LE 08 Menschen aller Altersstufen bei der Ernährung unterstützen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB6: Künstliche Ernährung (Sonden, PEG, Parenteral) + TB7: Ernährung in der Pädiatrie
// Leitfälle: Elisabeth Kramer (42, MS, Dysphagie), Baby Emre / Ayşe Demir (6 Mo, Gedeihstörung)
// Bloom: B2-B4, 22 Steps, ~30 Min

import type { ContentStep } from "../_types";

export const STEPS_S4: ContentStep[] = [
  // =============================================================
  // Step 1: SZENE — Fallarbeit-Einstieg (Frau Kramer: Sondenernährung nötig)
  // =============================================================
  {
    stepId: "le08-s4-tb6-01",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Wenn der Mund nicht mehr reicht",
      body: "Frau Kramer, 1 Woche später: Trotz Andickung und Trinknahrung nimmt sie weiter ab. BMI jetzt 17,2. Der Arzt kommt zur Visite und sagt: 'Wir müssen über eine Magensonde nachdenken.'",
      fallbezug: "Frau Kramer (42, MS, Dysphagie) — trotz aller oralen Maßnahmen reicht die Nahrungsaufnahme nicht aus.",
      glossarBegriffe: ["Nasogastrale Sonde"],
    },
    contentB1: {
      title: "Frau Kramer braucht mehr Hilfe",
      body: "Frau Kramer nimmt weiter ab. Obwohl sie angedickte Getränke und Trinknahrung bekommt. Der Arzt sagt: 'Wir brauchen einen Schlauch durch die Nase in den Magen.'",
      fallbezug: "Frau Kramer kann nicht genug essen. Sie braucht eine andere Lösung.",
    },
    question: {
      fragetext: "Frau Kramer schaut dich erschrocken an: 'Ein Schlauch durch die Nase?!' Wie reagierst du?",
      patientName: "Frau Kramer",
      dialogPhases: [
        {
          context: "Frau Kramer liegt im Bett, BMI 17,2. Der Arzt hat gerade erklärt, dass eine Magensonde nötig sein könnte. Frau Kramer sieht dich an — sie hat Angst.",
          contextB1: "Frau Kramer hat Angst. Der Arzt will einen Schlauch durch ihre Nase legen. Sie schaut dich an.",
          speaker: "Frau Kramer",
          options: [
            {
              text: "Ich verstehe, dass das beunruhigend klingt. Soll ich Ihnen erklären, wie das funktioniert und warum wir das machen?",
              textB1: "Ich verstehe Ihre Angst. Soll ich Ihnen erklären, wie der Schlauch funktioniert?",
              patientResponse: "Ja, bitte. Tut das weh? Und wie lange muss der drin bleiben?",
              patientResponseB1: "Ja bitte. Tut das weh?",
              score: 3,
              feedback: "Sehr gut! Du nimmst die Angst ernst, bietest Information an und lässt die Patientin entscheiden, ob sie mehr wissen möchte. Das ist respektvolle Kommunikation.",
              feedbackB1: "Sehr gut! Du nimmst die Angst ernst und erklärst in Ruhe. Das ist gute Pflege.",
            },
            {
              text: "Das klingt schlimmer als es ist. Der Schlauch ist ganz dünn, das geht schnell.",
              textB1: "Das ist nicht schlimm. Der Schlauch ist ganz dünn.",
              patientResponse: "Naja... wenn Sie meinen. Aber ich mag das nicht.",
              patientResponseB1: "Wenn Sie meinen... Aber ich habe Angst.",
              score: 2,
              feedback: "Die Absicht ist gut, aber 'Das klingt schlimmer als es ist' kann die Angst der Patientin bagatellisieren. Besser: Erst die Angst anerkennen, dann sachlich informieren.",
              feedbackB1: "Du willst beruhigen. Aber sage nicht 'Das ist nicht schlimm'. Besser: Erst die Angst ernst nehmen, dann erklären.",
            },
            {
              text: "Das entscheidet der Arzt. Ich rufe ihn nochmal, damit er Ihnen alles erklärt.",
              textB1: "Das muss der Arzt erklären. Ich hole ihn.",
              patientResponse: "Aber Sie sind doch hier! Können Sie mir nicht wenigstens sagen, was auf mich zukommt?",
              patientResponseB1: "Aber können Sie mir nicht etwas erklären?",
              score: 1,
              feedback: "Den Arzt einzubeziehen ist richtig, aber als Pflegekraft kannst und solltest du selbst aufklärend unterstützen. Patienten vertrauen oft der Pflege mehr als dem Arzt für alltägliche Fragen.",
              feedbackB1: "Den Arzt rufen ist nicht falsch. Aber du kannst auch selbst erklären. Die Patientin vertraut dir.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: ERKLÄRUNG — Enterale vs. Parenterale Ernährung (Merksatz)
  // =============================================================
  {
    stepId: "le08-s4-tb6-02",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-470"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "mnemonic",
    contentC1: {
      title: "Zwei Wege der künstlichen Ernährung",
      body: "**Enterale Ernährung** = über den Magen-Darm-Trakt. Das Wort 'enteral' kommt von 'enteron' (griechisch: Darm). Die Nahrung geht durch den Darm — entweder als Trinknahrung, über eine Magensonde oder über eine PEG.\n\n**Parenterale Ernährung** = am Darm VORBEI. 'Para' bedeutet 'neben/vorbei'. Die Nährstoffe gehen direkt ins Blut über einen zentralvenösen Katheter (ZVK).\n\n**Merksatz:** 'Enteral = Darm. Para-enteral = vorbei am Darm.'\n\nGrundregel: Wenn der Darm funktioniert, wird enteral ernährt! Parenteral nur wenn der Darm nicht nutzbar ist (z.B. Ileus, schwere Pankreatitis).",
      glossarBegriffe: ["Enterale Ernährung", "Parenterale Ernährung"],
    },
    contentB1: {
      title: "Zwei Wege der künstlichen Ernährung",
      body: "**Enteral** = über den Darm. Die Nahrung geht durch den Magen und Darm. Das kann flüssige Trinknahrung sein oder Nahrung über einen Schlauch.\n\n**Parenteral** = am Darm vorbei. Die Nährstoffe gehen direkt ins Blut. Über einen besonderen Zugang (ZVK).\n\n**Merksatz:** Enteral = Darm. Parenteral = vorbei am Darm.\n\nRegel: Wenn der Darm funktioniert, benutzen wir ihn! Nur wenn der Darm nicht arbeiten kann, geben wir die Nahrung ins Blut.",
    },
  },

  // =============================================================
  // Step 3: ERKLÄRUNG — Flipcards: 4 Ernährungsformen
  // =============================================================
  {
    stepId: "le08-s4-tb6-03",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 464-470"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "4 Wege der Ernährungsunterstützung",
      body: "Drehe die Karten um und entdecke: Wann wird welche Ernährungsform eingesetzt?",
      glossarBegriffe: ["Trinknahrung", "Nasogastrale Sonde", "PEG", "Parenterale Ernährung"],
    },
    contentB1: {
      title: "4 Wege der Ernährungsunterstützung",
      body: "Drehe die Karten um. Lerne: Wann benutzt man welche Art der Ernährung?",
    },
    question: {
      fragetext: "Drehe die Karten um!",
      flipcard: {
        instruction: "Tippe auf eine Karte, um die Rückseite zu sehen.",
        cards: [
          {
            front: "Trinknahrung",
            back: "Hochkalorische Flüssignahrung (1-2 kcal/ml). Als Ergänzung wenn der Patient oral essen kann, aber zu wenig schafft. Verschiedene Geschmacksrichtungen. Dauer: so lange wie nötig.",
            backB1: "Nährstoffreiche Getränke. Der Patient kann noch essen, aber zu wenig. Die Trinknahrung gibt extra Energie.",
          },
          {
            front: "Magensonde (nasogastral)",
            back: "Schlauch über die Nase → Speiseröhre → Magen. Kurzzeit-Lösung: max. 2-4 Wochen. VOR JEDER Nahrungsgabe: Lagekontrolle! Aspirat-pH muss < 5,5 sein.",
            backB1: "Ein dünner Schlauch durch die Nase bis in den Magen. Nur für kurze Zeit: 2 bis 4 Wochen. Vor jedem Füttern: Prüfen ob der Schlauch richtig liegt!",
          },
          {
            front: "PEG-Sonde",
            back: "Perkutane Endoskopische Gastrostomie: Schlauch direkt durch die Bauchdecke in den Magen. Langzeit-Lösung: > 4 Wochen. Einstichstelle täglich inspizieren. Halteplatte: 2-3 mm Spiel!",
            backB1: "Ein Schlauch direkt durch den Bauch in den Magen. Für lange Zeit: mehr als 4 Wochen. Die Stelle am Bauch muss jeden Tag angeschaut werden.",
          },
          {
            front: "Parenterale Ernährung (ZVK)",
            back: "Nährstoffe direkt ins Blut über einen zentralvenösen Katheter. Nur wenn der Darm nicht nutzbar ist (Ileus, schwere Pankreatitis, Kurzdarmsyndrom). CAVE: Hohes Infektionsrisiko!",
            backB1: "Nährstoffe gehen direkt ins Blut. Über einen besonderen Schlauch (ZVK). Nur wenn der Darm nicht arbeiten kann. Achtung: Gefahr von Infektionen!",
          },
        ],
        shuffled: false,
      },
    },
  },

  // =============================================================
  // Step 4: CHECKPOINT — MC: Magensonde vs. PEG
  // =============================================================
  {
    stepId: "le08-s4-tb6-04",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-466"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Magensonde oder PEG?",
      body: "Frau Kramer braucht voraussichtlich 2 Wochen Sondenernährung, bis sich die Schluckfähigkeit nach dem MS-Schub gebessert hat.",
    },
    contentB1: {
      title: "Welcher Schlauch?",
      body: "Frau Kramer braucht ungefähr 2 Wochen Hilfe beim Essen. Ihre Schluckstörung wird besser werden.",
    },
    question: {
      fragetext: "Welche Ernährungsform wird bei Frau Kramer angelegt?",
      optionen: [
        {
          text: "Nasogastrale Magensonde",
          isCorrect: true,
          explanation: "Richtig! Eine Magensonde ist die Kurzzeit-Lösung für bis zu 2-4 Wochen. Da bei Frau Kramer eine Besserung in 2 Wochen erwartet wird, ist die Magensonde die passende Wahl.",
          explanationB1: "Richtig! Die Magensonde ist für kurze Zeit (2-4 Wochen). Frau Kramer braucht sie nur 2 Wochen. Deshalb passt die Magensonde.",
        },
        {
          text: "PEG-Sonde",
          isCorrect: false,
          explanation: "Nicht ganz. Eine PEG ist die Langzeit-Lösung für mehr als 4 Wochen. Frau Kramer braucht voraussichtlich nur 2 Wochen Sondenernährung — da ist die Magensonde ausreichend.",
          explanationB1: "Nicht ganz. Die PEG ist für lange Zeit (mehr als 4 Wochen). Frau Kramer braucht nur 2 Wochen Hilfe. Die Magensonde reicht.",
        },
        {
          text: "Parenterale Ernährung über ZVK",
          isCorrect: false,
          explanation: "Nein. Parenterale Ernährung wird nur eingesetzt, wenn der Magen-Darm-Trakt nicht nutzbar ist. Frau Kramers Darm funktioniert — nur das Schlucken ist gestört. Deshalb: enteral!",
          explanationB1: "Nein. Das Essen über das Blut braucht man nur, wenn der Darm nicht funktioniert. Frau Kramers Darm ist in Ordnung. Nur das Schlucken ist das Problem.",
        },
        {
          text: "Trinknahrung reicht aus",
          isCorrect: false,
          explanation: "Leider nein. Trinknahrung wurde bereits versucht, aber Frau Kramer nimmt trotzdem weiter ab. Bei unzureichender oraler Aufnahme trotz Supplementierung ist eine Sonde der nächste Schritt.",
          explanationB1: "Leider nein. Frau Kramer hat schon Trinknahrung bekommen. Aber sie nimmt trotzdem ab. Deshalb braucht sie jetzt eine Sonde.",
        },
      ],
      erklaerung: "Die Wahl der Ernährungsform richtet sich nach der voraussichtlichen Dauer: Bis 4 Wochen → Magensonde. Über 4 Wochen → PEG. Darm nicht nutzbar → Parenteral.",
      erklaerungB1: "Welchen Schlauch man wählt, hängt von der Zeit ab: Bis 4 Wochen → Magensonde. Mehr als 4 Wochen → PEG. Darm geht nicht → Nährstoffe ins Blut.",
    },
  },

  // =============================================================
  // Step 5: ANDERS ERKLÄRT — Vergleichstabelle (nur bei Score B/C)
  // =============================================================
  {
    stepId: "le08-s4-tb6-05",
    phase: "s4",
    stepType: "comparison",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-470"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ANDERS_ERKLÄRT",
    tag: "pflege",
    contentC1: {
      title: "Vergleich: Magensonde vs. PEG vs. ZVK",
      body: "Drei Wege — für drei verschiedene Situationen.",
    },
    contentB1: {
      title: "Vergleich: 3 Arten der künstlichen Ernährung",
      body: "Drei verschiedene Wege — für drei verschiedene Situationen.",
    },
    question: {
      fragetext: "Vergleiche die drei Ernährungszugänge.",
      comparison: {
        instruction: "Vergleiche die drei Zugangswege.",
        columns: [
          { label: "Magensonde", icon: "🔹" },
          { label: "PEG", icon: "🔸" },
          { label: "ZVK (Parenteral)", icon: "🔻" },
        ],
        rows: [
          {
            criterion: "Zugangsweg",
            values: ["Nase → Speiseröhre → Magen", "Direkt durch Bauchdecke → Magen", "Zentralvenöser Katheter → Blut"],
            valuesB1: ["Durch die Nase in den Magen", "Durch den Bauch in den Magen", "Direkt ins Blut"],
          },
          {
            criterion: "Dauer",
            values: ["Kurzzeit: max. 2-4 Wochen", "Langzeit: > 4 Wochen", "Variabel, oft Wochen-Monate"],
            valuesB1: ["Kurz: 2-4 Wochen", "Lang: mehr als 4 Wochen", "Verschieden lang"],
          },
          {
            criterion: "Indikation",
            values: ["Schluckstörung, vorübergehend", "Schluckstörung, dauerhaft", "Darm nicht nutzbar"],
            valuesB1: ["Schluckproblem für kurze Zeit", "Schluckproblem für lange Zeit", "Darm funktioniert nicht"],
          },
          {
            criterion: "Hauptrisiko",
            values: ["Dislokation, Aspiration", "Einstichstellen-Infektion", "Katheter-Infektion, Sepsis"],
            valuesB1: ["Schlauch rutscht, Verschlucken", "Entzündung am Bauch", "Infektion im Blut"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 6: ERKLÄRUNG — Magensonde + Lagekontrolle (stepbystep)
  // =============================================================
  {
    stepId: "le08-s4-tb6-06",
    phase: "s4",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ERKLÄRUNG",
    tag: "anatomie",
    displayFormat: "stepbystep",
    bildhinweis: "Nasogastrale Sonde: Schematische Darstellung des Verlaufs von der Nase über die Speiseröhre in den Magen. Daneben: 3 Icons für Lagekontrolle (Spritze für Aspirat, Stethoskop für Auskultation, Lineal für Markierung).",
    contentC1: {
      title: "Magensonde: Lagekontrolle in 3 Schritten",
      body: "Die nasogastrale Sonde führt über die Nase → Speiseröhre → Magen. Sie ist eine Kurzzeit-Lösung für maximal 2-4 Wochen.\n\n**Lagekontrolle VOR JEDER Nahrungsgabe:**\n\n**Schritt 1: Aspirat prüfen** — Mit einer Spritze Mageninhalt ansaugen. Der pH-Wert muss unter 5,5 liegen (sauer = Magen).\n\n**Schritt 2: Markierung kontrollieren** — Die Sonde hat eine Markierung auf Nasenhöhe. Hat sie sich verschoben? Dann liegt die Sonde möglicherweise falsch!\n\n**Schritt 3: Auskultation** — Luft über die Sonde einblasen und mit dem Stethoskop über dem Magen hören: 'Blubbergeräusch' = Sonde liegt im Magen.\n\n**Vor und nach jeder Gabe:** Sonde mit 30-50 ml Wasser spülen!",
      glossarBegriffe: ["Nasogastrale Sonde"],
    },
    contentB1: {
      title: "Magensonde: 3 Schritte vor dem Füttern",
      body: "Die Magensonde geht durch die Nase in den Magen. Sie bleibt nur 2 bis 4 Wochen.\n\n**Vor jedem Füttern musst du prüfen ob die Sonde richtig liegt!**\n\n**Schritt 1:** Mit einer Spritze etwas aus dem Magen ansaugen. Ist es sauer (pH unter 5,5)? Dann ist die Sonde im Magen.\n\n**Schritt 2:** Die Markierung an der Nase prüfen. Hat sich die Sonde bewegt?\n\n**Schritt 3:** Mit dem Stethoskop auf den Bauch hören, Luft durch die Sonde pusten. Hörst du ein Blubbern? Dann ist die Sonde richtig.\n\n**Wichtig:** Vor und nach dem Füttern die Sonde mit Wasser spülen!",
    },
  },

  // =============================================================
  // Step 7: ANWENDUNG — Sequencing: Sondenlagekontrolle + Nahrungsgabe
  // =============================================================
  {
    stepId: "le08-s4-tb6-07",
    phase: "s4",
    stepType: "sequencing",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-467"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Sondennahrung verabreichen — die richtige Reihenfolge",
      body: "Bringe die 6 Schritte in die korrekte Reihenfolge.",
    },
    contentB1: {
      title: "Nahrung über die Sonde geben — richtige Reihenfolge",
      body: "Bringe die 6 Schritte in die richtige Reihenfolge.",
    },
    question: {
      fragetext: "Sortiere die Schritte der Sondennahrungsgabe!",
      sequencing: {
        instruction: "Bringe die Schritte in die richtige Reihenfolge — von oben nach unten.",
        items: [
          { id: "seq1", label: "Hände desinfizieren" },
          { id: "seq2", label: "Aspirat prüfen (pH < 5,5)" },
          { id: "seq3", label: "Markierung an der Nase kontrollieren" },
          { id: "seq4", label: "Sondennahrung anschließen" },
          { id: "seq5", label: "Laufrate einstellen" },
          { id: "seq6", label: "Sonde mit 30-50 ml Wasser spülen" },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: ERKLÄRUNG — PEG-Pflege (Checkliste)
  // =============================================================
  {
    stepId: "le08-s4-tb6-08",
    phase: "s4",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 466-468"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-peg",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "checklist",
    bildhinweis: "PEG-Sonde am Körper: Schematische Darstellung der Lage (Bauchdecke → Magen), Einstichstelle mit Halteplatte, Fixierung. Daneben: Checkliste der Pflegemaßnahmen mit Häkchen.",
    contentC1: {
      title: "PEG-Pflege: Was du täglich prüfen musst",
      body: "Die PEG (Perkutane Endoskopische Gastrostomie) ist ein direkter Zugang durch die Bauchdecke in den Magen — die Langzeit-Lösung für mehr als 4 Wochen.\n\n✅ **Einstichstelle täglich inspizieren**: Rötung? Schwellung? Sekret? Geruch?\n✅ **Halteplatte**: Muss 2-3 mm Spiel haben! Nicht fest auf die Haut drücken → sonst Drucknekrose!\n✅ **Sonde drehbar halten**: Einmal täglich die Sonde vorsichtig drehen. Wenn sie sich nicht drehen lässt → Arzt informieren!\n✅ **Verbandwechsel**: Nach Hausstandard, meist alle 1-2 Tage\n✅ **Vor und nach jeder Gabe**: Sonde mit 30-50 ml Wasser spülen\n✅ **Sondennahrung**: Bolus-Gabe (portionsweise, z.B. 200 ml alle 3 Std.) oder kontinuierlich per Ernährungspumpe",
      glossarBegriffe: ["PEG", "Bolus-Gabe"],
    },
    contentB1: {
      title: "PEG-Pflege: Was du jeden Tag prüfen musst",
      body: "Die PEG ist ein Schlauch durch den Bauch direkt in den Magen. Sie bleibt länger als 4 Wochen.\n\n✅ **Die Stelle am Bauch jeden Tag anschauen**: Ist sie rot? Geschwollen? Kommt Flüssigkeit raus?\n✅ **Halteplatte**: Darf nicht fest auf der Haut liegen! 2-3 mm Abstand!\n✅ **Sonde drehen**: Jeden Tag vorsichtig drehen. Geht das nicht → Arzt rufen!\n✅ **Verband wechseln**: Alle 1-2 Tage\n✅ **Vor und nach dem Füttern**: Sonde mit Wasser spülen\n✅ **Nahrung geben**: Entweder in Portionen (Bolus) oder ständig langsam mit einer Pumpe",
    },
  },

  // =============================================================
  // Step 9: ANWENDUNG — Errorspot: Pflegebericht PEG
  // =============================================================
  {
    stepId: "le08-s4-tb6-09",
    phase: "s4",
    stepType: "errorspot",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 466-468"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Fehler im Pflegebericht finden!",
      body: "Der folgende Pflegebericht enthält 3 Fehler. Finde sie!",
    },
    contentB1: {
      title: "Fehler finden!",
      body: "In diesem Pflegebericht sind 3 Fehler. Finde alle 3!",
    },
    question: {
      fragetext: "Tippe auf die Fehler im Text!",
      errorspot: {
        instruction: "Finde die 3 Fehler im Pflegebericht.",
        text: "Die Pflegekraft gab 500 ml Sondennahrung als Bolus ohne vorherige Lagekontrolle. Die Halteplatte wurde fest auf die Haut gedrückt. Danach wurde die Sonde nicht gespült.",
        errors: [
          {
            start: 56,
            end: 85,
            correction: "VOR jeder Nahrungsgabe: Lagekontrolle durchführen (Aspirat pH < 5,5, Markierung prüfen)!",
            explanation: "Vor JEDER Nahrungsgabe über eine Sonde muss die Lage kontrolliert werden. Eine dislozierte Sonde kann Nahrung in die Lunge bringen — das ist lebensbedrohlich!",
            explanationB1: "Vor jedem Füttern muss man prüfen ob die Sonde richtig liegt. Sonst kann Nahrung in die Lunge kommen. Das ist sehr gefährlich!",
          },
          {
            start: 87,
            end: 130,
            correction: "Die Halteplatte muss 2-3 mm Spiel haben und darf nicht fest auf der Haut aufliegen!",
            explanation: "Eine fest auf der Haut liegende Halteplatte verursacht Drucknekrose. Im schlimmsten Fall droht ein Buried-Bumper-Syndrom — die innere Halteplatte wächst in die Magenwand ein.",
            explanationB1: "Die Halteplatte darf nicht fest auf der Haut sein! Sonst entsteht eine Wunde durch Druck. Die Platte braucht 2-3 mm Abstand zur Haut.",
          },
          {
            start: 132,
            end: 168,
            correction: "Nach jeder Nahrungsgabe: Sonde mit 30-50 ml Wasser spülen!",
            explanation: "Ohne Spülung kann die Sonde verstopfen. Die Reste der Sondennahrung verklumpen im Schlauch. Dann muss die Sonde gewechselt werden — unnötig und belastend.",
            explanationB1: "Ohne Spülen verstopft die Sonde! Die Nahrung bleibt im Schlauch kleben. Deshalb immer mit Wasser nachspülen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 10: ANWENDUNG — TrueFalse: PEG-Mythen
  // =============================================================
  {
    stepId: "le08-s4-tb6-10",
    phase: "s4",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 466-468"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-peg",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "PEG: Stimmt das?",
      body: "Wische nach rechts für 'Stimmt' und nach links für 'Stimmt nicht'.",
    },
    contentB1: {
      title: "PEG: Richtig oder falsch?",
      body: "Wische nach rechts wenn es stimmt. Wische nach links wenn es falsch ist.",
    },
    question: {
      fragetext: "Stimmt das?",
      trueFalseCards: [
        {
          statement: "Eine PEG bedeutet, der Patient darf nie wieder oral essen.",
          isTrue: false,
          explanation: "Falsch! Eine PEG ist oft eine ERGÄNZUNG. Wenn die Schluckfähigkeit es erlaubt, kann parallel oral ernährt werden. Entscheidend ist die logopädische Einschätzung.",
        },
        {
          statement: "Vor JEDER Sondengabe muss die Lagekontrolle durchgeführt werden.",
          isTrue: true,
          explanation: "Richtig! Jedes Mal vor der Nahrungsgabe: Aspirat-pH prüfen, Markierung kontrollieren. Eine dislozierte Sonde = Aspirationsgefahr = lebensbedrohlich.",
        },
        {
          statement: "Die PEG-Halteplatte soll fest auf der Haut aufliegen.",
          isTrue: false,
          explanation: "Falsch! Die Halteplatte braucht 2-3 mm Spiel. Liegt sie fest auf, droht Drucknekrose und im schlimmsten Fall das Buried-Bumper-Syndrom.",
        },
        {
          statement: "Bolus-Gabe bedeutet: Sondennahrung wird portionsweise gegeben.",
          isTrue: true,
          explanation: "Richtig! Bolus-Gabe = portionsweise, z.B. 200 ml alle 3 Stunden. Die Alternative ist die kontinuierliche Gabe über eine Ernährungspumpe.",
        },
      ],
    },
  },

  // =============================================================
  // Step 11: ERKLÄRUNG — Parenterale Ernährung
  // =============================================================
  {
    stepId: "le08-s4-tb6-11",
    phase: "s4",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 468-470"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce02-le08-parenteral",
    themenblockPhase: "ERKLÄRUNG",
    tag: "krankheitslehre",
    displayFormat: "glossary",
    contentC1: {
      title: "Parenterale Ernährung — wenn der Darm nicht kann",
      body: "**Parenterale Ernährung** umgeht den Magen-Darm-Trakt komplett. Die Nährstoffe werden über einen **zentralvenösen Katheter (ZVK)** direkt ins Blut gegeben.\n\n**Indikationen:**\n- Kurzdarmsyndrom\n- Schwere Pankreatitis\n- Ileus (Darmverschluss)\n- Darm nicht nutzbar nach großen Operationen\n\n**Was wird infundiert?**\nAminosäuren (Eiweiß), Glukose (Zucker), Fettemulsionen, Elektrolyte, Vitamine und Spurenelemente — alles in einem All-in-One-Beutel.\n\n**CAVE:** Hohes Infektionsrisiko am ZVK! Strenge Hygiene und aseptischer Verbandwechsel sind Pflicht.",
      glossarBegriffe: ["Parenterale Ernährung"],
    },
    contentB1: {
      title: "Nährstoffe direkt ins Blut",
      body: "Manchmal funktioniert der Darm nicht. Dann bekommt der Patient die Nahrung direkt ins Blut.\n\n**Wann braucht man das?**\n- Wenn der Darm verschlossen ist\n- Wenn der Darm nach einer großen Operation nicht arbeitet\n- Wenn der Darm zu kurz ist\n\n**Was kommt ins Blut?** Eiweiß, Zucker, Fett, Vitamine — alles was der Körper braucht.\n\n**Achtung!** Es gibt eine große Gefahr: Infektionen am Schlauch (ZVK). Deshalb muss alles sehr sauber sein!",
    },
  },

  // =============================================================
  // Step 12: SNACK — Slider: Sondenlagekontrolle Häufigkeit
  // =============================================================
  {
    stepId: "le08-s4-tb6-12",
    phase: "s4",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Wie oft Lagekontrolle?",
      body: "Bei Bolus-Gabe: Wie oft am Tag wird die Lagekontrolle einer Magensonde durchgeführt?",
    },
    contentB1: {
      title: "Wie oft prüfen?",
      body: "Wenn der Patient 4-6 Mal am Tag Sondennahrung bekommt — wie oft prüfst du die Sondenlage?",
    },
    question: {
      fragetext: "Wie oft am Tag bei Bolus-Gabe?",
      slider: {
        instruction: "Schiebe den Regler auf die richtige Zahl.",
        unit: "Mal pro Tag",
        min: 0,
        max: 10,
        step: 1,
        correctValue: 5,
        tolerance: 1,
        explanation: "VOR JEDER Nahrungsgabe! Bei Bolus-Gabe (z.B. alle 3-4 Std.) sind das 4-6 Mal pro Tag. Die Lagekontrolle ist keine lästige Pflicht — sie verhindert Aspiration.",
        explanationB1: "Vor JEDEM Füttern! Wenn du 4-6 Mal am Tag Nahrung gibst, prüfst du auch 4-6 Mal die Lage. Das schützt den Patienten!",
      },
    },
  },

  // =============================================================
  // Step 13: SZENE — Szenenwechsel: Baby Emre (Pädiatrie-Einstieg)
  // =============================================================
  {
    stepId: "le08-s4-tb7-01",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "SZENE",
    tag: "pflege",
    contentC1: {
      title: "Ein Baby das nicht zunimmt",
      body: "Szenenwechsel: Kinderarztpraxis. Ayşe Demir (28) bringt Baby Emre (6 Monate) zur Vorsorgeuntersuchung. Er wiegt 5,1 kg.",
      fallbezug: "Baby Emre — Gedeihstörung. Mutter spricht B1-Deutsch, fühlt sich schuldig.",
      glossarBegriffe: ["Gedeihstörung", "Perzentilenkurve"],
    },
    contentB1: {
      title: "Baby Emre nimmt nicht zu",
      body: "Jetzt in der Kinderarztpraxis. Ayşe Demir bringt ihr Baby Emre. Er ist 6 Monate alt und wiegt nur 5,1 Kilogramm.",
      fallbezug: "Baby Emre nimmt nicht genug zu. Seine Mutter macht sich große Sorgen.",
    },
    question: {
      fragetext: "Ayşe sagt: 'Ich stille ihn, aber er nimmt nicht zu. Was mache ich falsch?' Wie reagierst du?",
      patientName: "Ayşe Demir",
      dialogPhases: [
        {
          context: "Ayşe Demir sitzt mit Baby Emre im Arm in der Kinderarztpraxis. Sie sieht müde und besorgt aus. Der Kinderarzt hat festgestellt: Emres Gewicht liegt unter der 3. Perzentile.",
          contextB1: "Ayşe hält Baby Emre. Sie ist müde und hat Angst. Emre wiegt zu wenig.",
          speaker: "Ayşe Demir",
          options: [
            {
              text: "Schauen wir uns gemeinsam die Wachstumskurve an. Dann sehen wir genau, wie sich Emre entwickelt.",
              textB1: "Wir schauen zusammen auf die Kurve. Dann sehen wir wie Emre wächst.",
              patientResponse: "Ja, bitte. Ist das normal dass er so leicht ist?",
              patientResponseB1: "Ja bitte. Ist es schlimm?",
              score: 3,
              feedback: "Sehr gut! Du bietest sachliche Information an ohne zu beschönigen oder Panik zu verbreiten. Die Perzentilenkurve zeigt objektiv, wo Emre steht.",
              feedbackB1: "Sehr gut! Du zeigst der Mutter die Fakten. Die Kurve zeigt genau, wie Emre wächst.",
            },
            {
              text: "Er braucht sofort Flaschennahrung! Stillen reicht offensichtlich nicht.",
              textB1: "Er braucht die Flasche! Stillen reicht nicht.",
              patientResponse: "Also ist es meine Schuld? Ich kann mein Kind nicht ernähren?",
              patientResponseB1: "Bin ich schuld?",
              score: 1,
              feedback: "Vorsicht! Du steigerst die Schuldgefühle der Mutter. Stillen IST die beste Ernährung — die meisten Frauen können stillen mit fachgerechter Unterstützung. Erst Assessment, dann Maßnahmen.",
              feedbackB1: "Vorsicht! Du machst der Mutter Angst. Stillen ist gut für das Baby. Erst schauen wir, was genau das Problem ist.",
            },
            {
              text: "Stillen Sie einfach weiter, das wird schon.",
              textB1: "Stillen Sie weiter. Das wird schon.",
              patientResponse: "Aber er nimmt nicht zu! Was soll ich denn tun?",
              patientResponseB1: "Aber er nimmt nicht zu!",
              score: 1,
              feedback: "Zu passiv. Emre liegt unter der 3. Perzentile — das ist eine Gedeihstörung. 'Das wird schon' ist keine professionelle Einschätzung. Hier muss gehandelt werden.",
              feedbackB1: "Das reicht nicht. Emre wiegt zu wenig. Du musst genauer hinschauen und helfen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 14: ERKLÄRUNG — Timeline: Ernährungsphasen 1. Lebensjahr
  // =============================================================
  {
    stepId: "le08-s4-tb7-02",
    phase: "s4",
    stepType: "timeline",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453-454"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    contentC1: {
      title: "Ernährung im 1. Lebensjahr",
      body: "Von der Muttermilch zur Familienkost — ein Zeitstrahl.",
      glossarBegriffe: ["Beikost"],
    },
    contentB1: {
      title: "Was ein Baby im 1. Jahr isst",
      body: "Von der Milch zum normalen Essen — Schritt für Schritt.",
    },
    question: {
      fragetext: "Entdecke die Ernährungsphasen eines Babys!",
      timeline: {
        instruction: "Scrolle durch die Ernährungsphasen im 1. Lebensjahr.",
        events: [
          {
            id: "t1",
            time: "0-6 Monate",
            title: "Stillen nach Bedarf",
            description: "Muttermilch ist die ideale Nahrung. Mind. 6-8× pro Tag stillen. Keine Zusatzflüssigkeit nötig! Alternativ: Pre-Nahrung (der Muttermilch am ähnlichsten).",
            descriptionB1: "Muttermilch ist das Beste für das Baby. 6-8 Mal am Tag stillen. Kein extra Wasser nötig! Wenn Stillen nicht geht: Pre-Milch aus der Flasche.",
            highlight: true,
          },
          {
            id: "t2",
            time: "Ab Geburt",
            title: "Vitamin D + Fluorid",
            description: "500 IE Vitamin D pro Tag zur Rachitisprophylaxe + 0,25 mg Fluorid für die Zähne. Vom Kinderarzt verschrieben, täglich geben!",
            descriptionB1: "Vitamin D Tabletten jeden Tag. Das braucht das Baby für die Knochen. Der Kinderarzt gibt ein Rezept.",
          },
          {
            id: "t3",
            time: "5.-7. Monat",
            title: "Beikost-Einführung",
            description: "Stufenweise: Erst Gemüse-Kartoffel-Fleisch-Brei (Mittag), dann Milch-Getreide-Brei (Abend), dann Obst-Getreide-Brei (Nachmittag). Pro Woche nur 1 neues Lebensmittel einführen!",
            descriptionB1: "Das Baby bekommt den ersten Brei. Zuerst Gemüsebrei. Dann Brei mit Milch und Getreide. Jede Woche nur 1 neues Essen probieren!",
            highlight: true,
          },
          {
            id: "t4",
            time: "10.-12. Monat",
            title: "Übergang zur Familienkost",
            description: "Kind isst zunehmend vom Familientisch mit. Weiche Kost, klein geschnitten. Stillen/Flasche wird langsam reduziert.",
            descriptionB1: "Das Kind isst langsam das gleiche wie die Familie. Alles weich und klein geschnitten. Es braucht weniger Milch.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 15: CHECKPOINT — MC: Perzentilenkurve
  // =============================================================
  {
    stepId: "le08-s4-tb7-03",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 456"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "CHECKPOINT",
    tag: "pflege",
    contentC1: {
      title: "Perzentilenkurve lesen",
      body: "Baby Emre ist 6 Monate alt und wiegt 5,1 kg. Er liegt unter der 3. Perzentile.",
      glossarBegriffe: ["Perzentilenkurve"],
    },
    contentB1: {
      title: "Die Wachstumskurve verstehen",
      body: "Baby Emre ist 6 Monate alt und wiegt 5,1 Kilo. Er liegt unter der 3. Linie auf der Wachstumskurve.",
    },
    question: {
      fragetext: "Was bedeutet es, wenn ein Säugling unter der 3. Perzentile liegt?",
      optionen: [
        {
          text: "Gedeihstörung — das Kind nimmt nicht altersgemäß zu",
          isCorrect: true,
          explanation: "Richtig! Unter der 3. Perzentile bedeutet: 97% aller gleichaltrigen Kinder wiegen mehr. Das ist ein klares Zeichen für eine Gedeihstörung und erfordert sofortiges Handeln.",
          explanationB1: "Richtig! Unter der 3. Linie heißt: 97 von 100 Babys im gleichen Alter wiegen mehr. Das Baby nimmt zu wenig zu. Das muss untersucht werden.",
        },
        {
          text: "Normalgewicht — manche Kinder sind eben leichter",
          isCorrect: false,
          explanation: "Leider nein. Unter der 3. Perzentile ist NICHT normal. Es kann individuelle Unterschiede geben, aber bei diesem Wert muss immer eine Gedeihstörung abgeklärt werden.",
          explanationB1: "Nein. So wenig Gewicht ist nicht normal. Das Baby braucht Hilfe.",
        },
        {
          text: "Übergewicht — das Kind bekommt zu viel Nahrung",
          isCorrect: false,
          explanation: "Nein, unter der 3. Perzentile bedeutet Untergewicht, nicht Übergewicht. Übergewicht wäre über der 97. Perzentile.",
          explanationB1: "Nein. Unter der 3. Linie heißt zu wenig Gewicht, nicht zu viel.",
        },
        {
          text: "Zu wenig Daten — eine Messung reicht nicht aus",
          isCorrect: false,
          explanation: "Grundsätzlich stimmt es, dass Verlaufskontrollen wichtig sind. Aber ein Gewicht unter der 3. Perzentile mit 6 Monaten ist ein Warnsignal, das sofortige Aufmerksamkeit erfordert.",
          explanationB1: "Mehrere Messungen sind wichtig. Aber wenn ein Baby so wenig wiegt, muss man sofort etwas tun.",
        },
      ],
      erklaerung: "Die Perzentilenkurve zeigt, wie ein Kind im Vergleich zu anderen Kindern gleichen Alters wächst. Unter der 3. Perzentile = Gedeihstörung. Über der 97. Perzentile = mögliches Übergewicht.",
      erklaerungB1: "Die Wachstumskurve vergleicht ein Kind mit anderen Kindern im gleichen Alter. Unter Linie 3 = zu wenig Gewicht. Über Linie 97 = zu viel Gewicht.",
    },
  },

  // =============================================================
  // Step 16: ANWENDUNG — Branching: Honig-Gefahr (kultursensibel)
  // =============================================================
  {
    stepId: "le08-s4-tb7-04",
    phase: "s4",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Honig für Babys?",
      body: "Ayşe erzählt: 'Meine Schwiegermutter sagt, ich soll Emre Honig geben. Das stärkt ihn.'",
      fallbezug: "Kultursensible Beratung: Die Empfehlung der Schwiegermutter widerspricht der Evidenz.",
    },
    contentB1: {
      title: "Honig für das Baby?",
      body: "Ayşe sagt: 'Die Schwiegermutter sagt, Honig ist gut für Babys.'",
      fallbezug: "Die Schwiegermutter meint es gut. Aber Honig ist für Babys gefährlich.",
    },
    question: {
      fragetext: "Was sagst du zu Ayşe?",
      branching: {
        situation: "Ayşe Demir erzählt dir, dass ihre Schwiegermutter empfiehlt, Baby Emre Honig zu geben, um ihn zu stärken.",
        situationB1: "Ayşe sagt, ihre Schwiegermutter will dem Baby Honig geben.",
        options: [
          {
            text: "Honig ist gefährlich für Babys unter 2 Jahren! Im Honig können Botulismus-Sporen sein. Bei Erwachsenen ist das harmlos, aber bei Babys fehlt die reife Darmflora. Das kann zu einer lebensbedrohlichen Vergiftung führen.",
            textB1: "Kein Honig für Babys! Im Honig können gefährliche Bakterien sein. Babys können davon sehr krank werden.",
            outcome: "Ayşe erschrickt: 'Das wusste ich nicht! Danke für die Warnung. Wie erkläre ich das meiner Schwiegermutter?' Du bietest an, gemeinsam mit der Schwiegermutter zu sprechen.",
            outcomeB1: "Ayşe sagt: 'Das wusste ich nicht! Danke!' Du bietest an, es auch der Schwiegermutter zu erklären.",
            score: 3,
          },
          {
            text: "Fragen Sie den Kinderarzt, ob Honig gut ist.",
            textB1: "Fragen Sie den Kinderarzt.",
            outcome: "Ayşe fragt den Kinderarzt. Der bestätigt: Kein Honig unter 2 Jahren. Aber du hättest es auch selbst erklären können — Ernährungsberatung gehört zu deinen Aufgaben.",
            outcomeB1: "Der Kinderarzt sagt: Kein Honig. Aber du hättest es auch selbst erklären können.",
            score: 2,
          },
          {
            text: "Honig ist ein gutes Naturheilmittel, das kann man versuchen.",
            textB1: "Honig kann man versuchen.",
            outcome: "STOPP! Honig unter 2 Jahren kann lebensbedrohlichen Botulismus verursachen! Die Sporen des Clostridium botulinum können sich im unreifen Darm des Babys vermehren und ein tödliches Gift produzieren.",
            outcomeB1: "STOPP! Honig ist für Babys gefährlich! Im Honig können Bakterien sein, die das Baby sehr krank machen.",
            score: 0,
          },
        ],
      },
    },
    wusstestDuDas: "Honig ist für Erwachsene unbedenklich, weil ihre Darmflora die Botulismus-Sporen unschädlich macht. Bei Babys unter 2 Jahren fehlt diese Schutzfunktion.",
  },

  // =============================================================
  // Step 17: ANWENDUNG — Dialog: Empathie bei Schuldgefühlen
  // =============================================================
  {
    stepId: "le08-s4-tb7-05",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "basis",
    modus: "story",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ANGEHÖRIGEN_BERATUNG",
    tag: "pflege",
    contentC1: {
      title: "Wenn eine Mutter sich schuldig fühlt",
      body: "Ayşe beginnt zu weinen: 'Ich kann mein Kind nicht ernähren. Ich bin eine schlechte Mutter.'",
      fallbezug: "Stillberatung und Schuldgefühle — eine häufige Situation in der Pädiatrie.",
    },
    contentB1: {
      title: "Ayşe weint",
      body: "Ayşe sagt: 'Ich bin eine schlechte Mutter. Mein Baby nimmt nicht zu.'",
      fallbezug: "Die Mutter fühlt sich schuldig. Du musst sie beruhigen.",
    },
    question: {
      fragetext: "Wie reagierst du auf Ayşes Schuldgefühle?",
      patientName: "Ayşe Demir",
      dialogPhases: [
        {
          context: "Ayşe Demir weint. Sie hält Emre fest an sich gedrückt. Sie fühlt sich als Versagerin.",
          contextB1: "Ayşe weint. Sie drückt ihr Baby fest an sich.",
          speaker: "Ayşe Demir",
          options: [
            {
              text: "Frau Demir, Sie sind keine schlechte Mutter. Sie sind heute hergekommen, weil Sie sich Sorgen machen — genau das macht eine gute Mutter. Stillen braucht manchmal Unterstützung, und die bekommen Sie jetzt von uns.",
              textB1: "Frau Demir, Sie sind eine gute Mutter. Sie sind hier, weil Sie sich Sorgen machen. Das ist gut. Wir helfen Ihnen jetzt beim Stillen.",
              patientResponse: "Wirklich? Können Sie mir helfen? Die meisten Frauen können doch stillen, oder?",
              patientResponseB1: "Können Sie mir helfen?",
              score: 3,
              feedback: "Wunderbar! Du nimmst die Schuldgefühle ernst, bestätigst ihre Stärke (sie ist da!) und bietest Hilfe an. Stillberatung ist eine pflegerische Aufgabe!",
              feedbackB1: "Sehr gut! Du nimmst ihre Angst ernst und bietest Hilfe an. Stillberatung gehört zur Pflege.",
            },
            {
              text: "Machen Sie sich keine Sorgen, Emre ist bestimmt gesund. Manche Babys sind eben dünner.",
              textB1: "Keine Sorge. Manche Babys sind eben dünn.",
              patientResponse: "Aber der Arzt hat doch gesagt, er wiegt zu wenig!",
              patientResponseB1: "Aber der Arzt hat gesagt, er wiegt zu wenig!",
              score: 1,
              feedback: "Gut gemeint, aber zu verharmlosend. Emre liegt unter der 3. Perzentile — das IST ein Problem. Die Mutter verdient ehrliche, aber empathische Information.",
              feedbackB1: "Du willst beruhigen. Aber Emre wiegt wirklich zu wenig. Die Mutter braucht ehrliche Information und Hilfe.",
            },
            {
              text: "Haben Sie denn genug getrunken und gegessen? Vielleicht liegt es an Ihrer Ernährung.",
              textB1: "Essen Sie genug? Vielleicht ist Ihre Milch nicht gut genug.",
              patientResponse: "Also liegt es doch an mir...",
              patientResponseB1: "Also bin ich doch schuld...",
              score: 0,
              feedback: "Diese Aussage verstärkt die Schuldgefühle! Die Qualität der Muttermilch hängt nur in extremen Fällen von der Ernährung der Mutter ab. Das Problem liegt selten bei der Milchqualität.",
              feedbackB1: "Nein! So machst du die Mutter noch trauriger. Die Muttermilch ist fast immer gut genug. Das Problem ist meistens etwas anderes.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 18: ERKLÄRUNG — Stillberatung (Interview-Format)
  // =============================================================
  {
    stepId: "le08-s4-tb7-06",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["I Care Pflege S. 453-454"],
    track: "vertiefung",
    modus: "entdecker",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ERKLÄRUNG",
    tag: "pflege",
    displayFormat: "interview",
    contentC1: {
      title: "Stillberatung — Häufige Fragen",
      body: "**Frage:** Können die meisten Frauen stillen?\n**Antwort:** Ja! Die allermeisten Frauen können stillen, wenn sie fachgerechte Unterstützung bekommen. Stillberatung und -anleitung gehören zu den pflegerischen Aufgaben. Die Haltung 'Manche können es halt nicht' ist NICHT akzeptabel.\n\n**Frage:** Was ist Pre-Nahrung?\n**Antwort:** Pre-Nahrung ist industrielle Milchnahrung, die der Muttermilch am ähnlichsten ist. Sie wird verwendet, wenn Stillen nicht möglich ist oder als Ergänzung.\n\n**Frage:** Wann wird Beikost eingeführt?\n**Antwort:** Zwischen dem 5. und 7. Lebensmonat, stufenweise. Erst Gemüse-Kartoffel-Fleisch-Brei, dann weitere Breie. Pro Woche nur 1 neues Lebensmittel!\n\n**Frage:** Was ist mit Honig?\n**Antwort:** KEIN Honig unter 2 Jahren! Botulismus-Gefahr — die unreife Darmflora des Babys kann die Sporen nicht unschädlich machen.",
    },
    contentB1: {
      title: "Stillen — Wichtige Fragen und Antworten",
      body: "**Können alle Frauen stillen?**\nJa, die meisten Frauen können stillen. Sie brauchen manchmal Hilfe dabei. Diese Hilfe geben wir.\n\n**Was ist Pre-Milch?**\nMilch aus der Flasche. Sie ist der Muttermilch ähnlich. Man gibt sie, wenn Stillen nicht geht.\n\n**Wann bekommt das Baby Brei?**\nAb dem 5. bis 7. Monat. Zuerst Gemüsebrei. Jede Woche nur 1 neues Essen.\n\n**Darf ein Baby Honig essen?**\nNEIN! Kein Honig für Babys unter 2 Jahren! Im Honig können gefährliche Bakterien sein.",
    },
  },

  // =============================================================
  // Step 19: INTERLEAVING — MC: Dehydratation bei Säuglingen (LE-09)
  // =============================================================
  {
    stepId: "le08-s4-tb7-07",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453, 410"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce02-le08-paediatrie",
    themenblockPhase: "ANWENDUNG",
    tag: "krankheitslehre",
    contentC1: {
      title: "Querverbindung: Warum Babys schneller austrocknen",
      body: "Interleaving LE-09 (Ausscheidung): Baby Emre hat Durchfall bekommen.",
    },
    contentB1: {
      title: "Warum Babys schneller austrocknen",
      body: "Baby Emre hat Durchfall. Warum ist das bei Babys gefährlicher als bei Erwachsenen?",
    },
    question: {
      fragetext: "Warum ist Dehydratation bei Säuglingen besonders gefährlich?",
      optionen: [
        {
          text: "Säuglinge verlieren bei Durchfall und Erbrechen relativ schneller Flüssigkeit als Erwachsene",
          isCorrect: true,
          explanation: "Richtig! Säuglinge haben einen höheren Flüssigkeitsanteil am Körpergewicht und einen schnelleren Stoffwechsel. Bei Durchfall oder Erbrechen können sie innerhalb von Stunden lebensbedrohlich dehydrieren.",
          explanationB1: "Richtig! Babys haben mehr Wasser im Körper und verlieren es schneller. Bei Durchfall können sie sehr schnell austrocknen. Das kann gefährlich werden.",
        },
        {
          text: "Säuglinge haben weniger Durst als Erwachsene",
          isCorrect: false,
          explanation: "Das ist nicht der Hauptgrund. Säuglinge haben durchaus Durst — sie können es nur nicht verbal mitteilen. Das Problem ist der schnellere relative Flüssigkeitsverlust.",
          explanationB1: "Babys haben auch Durst. Aber sie können nicht sagen, dass sie Durst haben. Der Hauptgrund ist: Sie verlieren schneller Wasser.",
        },
        {
          text: "Säuglinge haben eine dickere Haut, die weniger Feuchtigkeit speichert",
          isCorrect: false,
          explanation: "Nein, Säuglinge haben eine dünnere Haut. Der Hauptgrund für die schnelle Dehydratation ist der höhere relative Wasseranteil und der schnellere Stoffwechsel.",
          explanationB1: "Nein, Babyhaut ist dünner. Der Grund ist: Babys haben mehr Wasser im Körper und verlieren es schneller.",
        },
        {
          text: "Säuglinge kompensieren Flüssigkeitsverluste besser als Erwachsene",
          isCorrect: false,
          explanation: "Genau das Gegenteil! Säuglinge können Flüssigkeitsverluste SCHLECHTER kompensieren. Ihre Nieren sind noch nicht voll ausgereift, und die Reserven sind geringer.",
          explanationB1: "Das Gegenteil ist richtig! Babys können Wassermangel SCHLECHTER ausgleichen als Erwachsene.",
        },
      ],
    },
  },

  // =============================================================
  // Step 20: ANWENDUNG — Matching: Assessment → Setting
  // =============================================================
  {
    stepId: "le08-s4-tb7-08",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 411"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce02-le08-assessment",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Welches Assessment gehört wohin?",
      body: "Ordne das richtige Ernährungs-Assessment dem passenden Setting zu.",
      glossarBegriffe: ["MNA", "NRS 2002"],
    },
    contentB1: {
      title: "Welcher Test für welchen Ort?",
      body: "Ordne den richtigen Test zum richtigen Ort.",
    },
    question: {
      fragetext: "Verbinde Assessment und Setting!",
      matchingPairs: [
        { left: "MNA", right: "Geriatrie (Patienten ≥ 65 Jahre)" },
        { left: "NRS 2002", right: "Krankenhaus" },
        { left: "STRONGkids", right: "Kinder im Krankenhaus" },
        { left: "Perzentilenkurve", right: "Säuglinge und Kinder" },
        { left: "SGA", right: "Ergänzend im Krankenhaus" },
      ],
    },
  },

  // =============================================================
  // Step 21: ANWENDUNG — Freetext: Sondennahrung-Verabreichung
  // =============================================================
  {
    stepId: "le08-s4-tb6-13",
    phase: "s4",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 465-468"],
    track: "basis",
    modus: "schreibtisch",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "ANWENDUNG",
    tag: "pflege",
    contentC1: {
      title: "Dein Pflegebericht: Sondennahrung geben",
      body: "Du gibst Frau Kramer Sondennahrung über die Magensonde. Beschreibe den Ablauf.",
      fallbezug: "Frau Kramer (42, MS) hat jetzt eine nasogastrale Sonde.",
    },
    contentB1: {
      title: "Beschreibe: Wie gibst du Nahrung über die Sonde?",
      body: "Frau Kramer hat jetzt eine Magensonde. Du gibst ihr Nahrung darüber. Was machst du?",
      fallbezug: "Frau Kramer hat einen Schlauch durch die Nase. Du fütterst sie darüber.",
    },
    question: {
      fragetext: "Beschreibe die Schritte der Sondennahrungsgabe in der richtigen Reihenfolge. Was prüfst du VOR der Gabe? Was tust du NACH der Gabe?",
      freetext: {
        prompt: "Beschreibe in 4-5 Sätzen, wie du Frau Kramer Sondennahrung über die Magensonde verabreichst.",
        promptB1: "Schreibe in 3-4 Sätzen: Was machst du, wenn du Frau Kramer Nahrung über die Sonde gibst?",
        satzanfaenge: [
          "Zuerst prüfe ich...",
          "Vor der Nahrungsgabe kontrolliere ich...",
          "Dann schließe ich...",
          "Nach der Gabe...",
        ],
        systemPrompt: "Bewerte ob der Schüler folgende Punkte nennt: 1) Lagekontrolle VOR der Gabe (Aspirat pH, Markierung), 2) Oberkörper erhöht, 3) Sondennahrung anschließen und Laufrate einstellen, 4) Sonde mit Wasser spülen NACH der Gabe. Bonus: Händedesinfektion, Patientin informieren. Sandwich-Prinzip: Loben → Korrigieren → Ermutigen.",
      },
    },
  },

  // =============================================================
  // Step 22: REFLEXION — Summary
  // =============================================================
  {
    stepId: "le08-s4-bk-01",
    phase: "s4",
    stepType: "summary",
    bloomLevel: 2,
    kompetenzbereich: "KB-I",
    quellen: ["I Care Pflege S. 453-470"],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce02-le08-sonden",
    themenblockPhase: "REFLEXION",
    tag: "pflege",
    contentC1: {
      title: "Session 4 — Zusammenfassung",
      body: "Heute hast du gelernt: Künstliche Ernährung (enteral vs. parenteral), Magensonde mit Lagekontrolle, PEG-Pflege, Säuglingsernährung und die Honig-Gefahr.",
    },
    contentB1: {
      title: "Das hast du heute gelernt",
      body: "Heute hast du gelernt: Ernährung über Sonden und PEG, wie Babys ernährt werden, und warum Honig für Babys gefährlich ist.",
    },
    question: {
      fragetext: "Was nimmst du aus dieser Session mit?",
      summary: {
        reflexionRueckbezug: "Du hast heute künstliche Ernährung (Sonden, PEG, parenteral) und Säuglingsernährung kennengelernt. Nächste Session: Ernährung bei Demenz und das ethische Dilemma 'PEG bei fortgeschrittener Demenz'.",
        kernaussagen: [
          "Enteral = über den Darm. Parenteral = vorbei am Darm (ins Blut).",
          "Magensonde: Kurzzeit (2-4 Wochen). PEG: Langzeit (> 4 Wochen).",
          "Lagekontrolle VOR JEDER Sondengabe! Aspirat pH < 5,5.",
          "PEG-Halteplatte: 2-3 mm Spiel, nie fest auf der Haut!",
          "Säugling: 0-6 Mo. Stillen → 5.-7. Mo. Beikost → 10.-12. Mo. Familienkost.",
          "KEIN Honig unter 2 Jahren — Botulismus-Gefahr!",
          "Perzentilenkurve: Unter 3. Perzentile = Gedeihstörung.",
        ],
      },
    },
  },
];
