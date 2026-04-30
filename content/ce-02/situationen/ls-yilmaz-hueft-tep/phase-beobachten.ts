// CE-02 Situation Frau Yilmaz — Phase 2: Beobachten
// Steps: 5 Kern + 5 InlineWissen + 2 Optional · Bloom: B2–B4 · Zeit: ~40–60 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-hueft-tep/phase-beobachten.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_HUEFT_TEP_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-yilmaz-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Einschätzen",
  titelB1: "Was siehst du bei Frau Yilmaz?",
  kontext:
    "Du sitzt jetzt neben Frau Yilmaz. Sie liegt im Bett, das Kopfteil auf 30° erhöht. Ehemann Mustafa beobachtet dich. Frau Yilmaz hat gerade gesagt: 'Können wir das nicht morgen machen?' — du hast ihr erklärt, dass ihr zuerst gemeinsam schaut, wie es ihr geht, und dann entscheidet was heute möglich ist. Das hat sie ein bisschen beruhigt. Jetzt beginnt das pflegerische Assessment. Du hast mehrere Dinge gleichzeitig im Blick: Wie stark sind die Schmerzen wirklich? Wie sieht die Haut aus — besonders an den Druckstellen? Gibt es Zeichen, die auf eine Thrombose hindeuten könnten? Wie ist die Wundsituation (Redon-Drainage)? Welche Risikofaktoren sind bei ihr besonders relevant?",
  kontextB1:
    "Du sitzt neben Frau Yilmaz. Sie liegt im Bett. Das Kopfteil ist auf 30° hochgestellt. Mustafa schaut zu. Frau Yilmaz ist ein bisschen ruhiger. Jetzt schaust du genauer hin. Du willst wissen: Wie stark sind die Schmerzen? Wie ist die Haut? Gibt es Anzeichen für eine Thrombose? Wie sieht die Wunde aus?",
  kernSteps: [
    // Step 2.1 — Brilliant-Frage: Hotspot Hautbefund
    {
      stepId: "ce02-yilmaz-beob-01-haut-brilliant",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-hautinspektion",
      tag: "anatomie",
      bildkategorie: "prozedur",
      imageAlt:
        "Rückenansicht einer älteren Frau in 30°-Seitlage, sichtbare Rötung am Steißbein, Knochenvorsprünge erkennbar",
      bildhinweis:
        "Back view of elderly woman in 30-degree side position, visible redness at coccyx area, bony prominences visible, clinical assessment context, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Hautinspektion — was siehst du?",
        body: "BRILLIANT-PRINZIP: Du siehst den Befund, BEVOR du den Begriff kennst.\n\nDu hast Frau Yilmaz gebeten, kurz auf die Seite zu drehen, um die Haut am Rücken und Steißbein zu inspizieren. Das Bild zeigt, was du siehst:\n\n- Rötung am Steißbein (~4 cm Durchmesser), nicht wegdrückbar beim Fingertest\n- Fersen unauffällig\n- Leichte Rötung linker Trochanter (Seite, auf der sie liegt)\n\nFrau Yilmaz sagt: \"Da tut es weh. Schon von gestern. Ich hab' gedacht, das ist normal.\"\n\nMarkiere alle Stellen, die dir auffallen.",
        fallbezug:
          "Frau Yilmaz liegt seit 2-3 Tagen. Diabetes und Adipositas erhöhen ihr Dekubitus-Risiko. Du siehst den Befund — erst danach lernst du, was er bedeutet.",
        glossarBegriffe: ["Dekubitus", "Steißbein", "Trochanter", "Druckstelle"],
      },
      contentB1: {
        title: "Was siehst du auf der Haut?",
        body: "Du schaust auf Frau Yilmaz' Rücken und Steißbein (= unterster Teil des Rückens). Sie dreht sich kurz auf die Seite. Du siehst:\n\n- Rötung am Steißbein — ein roter Fleck, ca. 4 cm groß, drückt man drauf: er geht nicht weg\n- Fersen: ok\n- Leichte Rötung an der linken Hüftseite (= Trochanter)\n\nFrau Yilmaz sagt: \"Da tut es weh. Schon von gestern. Ich hab' gedacht, das ist normal.\"\n\nMarkiere auf dem Bild: Welche Stellen fallen dir auf?",
        fallbezug:
          "Frau Yilmaz liegt schon ein paar Tage. Druckstellen entstehen bei Bettlägerigkeit. Du schaust jetzt nach.",
        glossarBegriffe: ["Druckwunde", "Steißbein", "Rötung"],
      },
      question: {
        fragetext:
          "Markiere alle Stellen auf dem Bild, die dir auffallen. Was beobachtest du?",
        hotspot: {
          imageUrl: "/images/ce02/yilmaz-haut-steissbein.svg",
          imageAlt:
            "Rückenansicht ältere Frau in Seitlage, Rötung am Steißbein und Trochanter markierbar",
          instruction:
            "Tippe auf alle Stellen, die dir an der Haut auffallen.",
          zones: [
            {
              id: "steissbein",
              x: 50,
              y: 72,
              radius: 8,
              label: "Steißbein — Rötung, nicht wegdrückbar",
            },
            {
              id: "trochanter-links",
              x: 38,
              y: 60,
              radius: 7,
              label: "Trochanter links — leichte Rötung",
            },
          ],
        },
      },
    },

    // InlineWissen — Dekubitus-Kategorien (I–IV)
    // Position: VOR Step 2.2 — Schüler hat die Rötung gesehen (Hotspot), braucht
    // jetzt das Klassifikationswissen, bevor er die Kategorie bestimmt und handelt.
    {
      stepId: "ce02-yilmaz-beob-iw-dekubitus-kategorien",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-dekubitus-kategorien",
      tag: "krankheitslehre",
      themaPrimaer: "dekubitus",
      themenSekundaer: ["hautinspektion"],
      transition: "Du kennst jetzt die vier Kategorien. Welche hat Frau Yilmaz — und was tust du sofort?",
      contentC1: {
        title: "Dekubitus-Kategorien I–IV",
        body: "",
        glossarBegriffe: ["Dekubitus", "Dekubitus Kategorie I", "Dekubitus Kategorie II", "Dekubitus Kategorie III", "Dekubitus Kategorie IV"],
      },
      contentB1: {
        title: "Druckwunden: 4 Stufen",
        body: "",
        glossarBegriffe: ["Dekubitus", "Druckwunde"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-kategorien",
        storyAufhaenger:
          "Du hast gerade bei Frau Yilmaz eine Rötung am Steißbein entdeckt — ca. 4 cm, nicht wegdrückbar. Das Bild zeigt: Hier stimmt etwas nicht. Aber wie schlimm ist es? Um das einzuschätzen, brauchst du die Dekubitus-Kategorien.",
        storyAufhaengerB1:
          "Du hast eine rote Stelle am Steißbein von Frau Yilmaz gesehen. Sie geht nicht weg, wenn du drückst. Aber ist das schlimm? Es gibt 4 Stufen von Druckwunden. Die musst du kennen.",
        kerntext:
          "**Vier Dekubitus-Kategorien** (NPUAP/EPUAP 2019):\n\n• **Kategorie I** — Nicht wegdrückbare Rötung bei intakter Haut. Der Fingertest zeigt: Die Rötung bleibt, wenn du drückst. Das Gewebe darunter leidet bereits unter Druckschaden, auch wenn die Oberfläche noch ganz aussieht.\n\n• **Kategorie II** — Teilverlust der Haut. Flache, offene Wunde mit rot-rosafarbenem Wundgrund. Kann auch als intakte oder eröffnete Blase erscheinen.\n\n• **Kategorie III** — Verlust der Haut in voller Dicke. Subkutanes Fett kann sichtbar sein, aber Knochen, Sehnen und Muskeln liegen NICHT frei.\n\n• **Kategorie IV** — Vollständiger Gewebeverlust. Knochen, Sehnen oder Muskeln liegen frei. Hohes Infektions- und Sepsisrisiko.\n\n**Wichtig:** Kategorien beschreiben die TIEFE des Schadens. Sie sind NICHT reversibel im Sinne einer Rückstufung — ein verheilter Kategorie-III-Dekubitus wird als 'verheilter Kategorie III' dokumentiert, nicht als Kategorie I.\n\n**Bei Frau Yilmaz:** Rötung nicht wegdrückbar, Haut intakt = **Kategorie I**. Das ist der früheste erkennbare Punkt — und der einzige, an dem Druckentlastung allein noch ausreicht.",
        kerntextB1:
          "**4 Stufen von Druckwunden:**\n\n• **Stufe 1** — Rote Stelle, geht nicht weg beim Drücken. Haut ist noch ganz. Aber das Gewebe darunter leidet schon.\n\n• **Stufe 2** — Die Haut ist teilweise offen. Eine flache Wunde oder eine Blase.\n\n• **Stufe 3** — Die ganze Haut ist kaputt. Man kann Fettgewebe sehen. Aber Knochen sieht man noch nicht.\n\n• **Stufe 4** — Tiefe Wunde. Knochen oder Sehnen liegen frei. Sehr gefährlich.\n\n**Bei Frau Yilmaz:** Rote Stelle, geht nicht weg, Haut noch ganz = **Stufe 1**. Jetzt muss sofort der Druck weg — sonst wird es schlimmer.",
        faustregel:
          "**Fingertest: Rötung bleibt = Kategorie I = sofort handeln.** Wer Kategorie I erkennt und entlastet, verhindert Kategorie II–IV.",
        faustregelB1:
          "Drück auf die rote Stelle. Geht die Rötung nicht weg? Dann ist es Stufe 1. Sofort den Druck wegnehmen.",
        karteikarte: {
          vorderseite: "Frau Yilmaz hat eine nicht wegdrückbare Rötung am Steißbein bei intakter Haut. Welche Dekubitus-Kategorie ist das — und was unterscheidet sie von Kategorie II?",
          rueckseite: "Kategorie I: Nicht wegdrückbare Rötung, Haut intakt, Gewebe leidet unter Druck. Kategorie II: Teilverlust der Haut — flache Wunde oder Blase sichtbar. Kategorien beschreiben Schadenstiefe, keine Rückstufung möglich (NPUAP/EPUAP 2019). Bei Kategorie I reicht Druckentlastung allein — ab Kategorie II ist Wundversorgung nötig.",
          vorderseiteB1: "Was bedeutet Druckwunde Stufe 1? Und was ist der Unterschied zu Stufe 2?",
          rueckseiteB1: "Stufe 1: Rote Stelle, geht nicht weg beim Drücken, Haut noch ganz. Stufe 2: Haut ist teilweise offen, flache Wunde oder Blase. Bei Stufe 1: Druck wegnehmen reicht. Ab Stufe 2: Wundversorgung nötig.",
        },
      },
    },

    // Step 2.2 — MC: Dekubitus-Kategorie bestimmen und Sofortmaßnahme
    {
      stepId: "ce02-yilmaz-beob-02-dekubitus-kategorie",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019): International Pressure Injury Guideline",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-beob-dekubitus-sofortmaßnahme",
      tag: "krankheitslehre",
      contentC1: {
        title: "Dekubitus Kategorie I — was tust du sofort?",
        body: "Du hast jetzt gelernt: Eine nicht wegdrückbare Rötung über einem Knochenvorsprung = Dekubitus Kategorie I. Frau Yilmaz' Steißbein zeigt genau das. Die Haut ist noch intakt, aber das Gewebe darunter leidet bereits unter dem Druck. Welche Sofortmaßnahme ist jetzt am wichtigsten?",
        glossarBegriffe: ["Dekubitus Kategorie I", "Druckentlastung"],
      },
      contentB1: {
        title: "Druckwunde Kategorie 1 — was machst du jetzt?",
        body: "Du hast gelernt: Wenn eine rote Stelle auf der Haut nicht weggeht, wenn man drückt — das heißt Dekubitus Kategorie 1 (= Druckwunde Stufe 1). Die Haut ist noch ganz. Aber das Gewebe darunter leidet. Was machst du jetzt als erstes?",
        glossarBegriffe: ["Dekubitus", "Druckentlastung"],
      },
      question: {
        fragetext:
          "Welche Sofortmaßnahme ist bei Dekubitus Kategorie I am Steißbein jetzt am wichtigsten?",
        optionen: [
          {
            text: "Wunde mit einer Kompresse abdecken und beobachten",
            isCorrect: false,
            explanation:
              "Abdecken schützt die Rötung nicht. Einen Dekubitus Kategorie I kann man nicht 'verbinden' — die Haut ist noch intakt. Das Problem ist der Druck. Den musst du beseitigen — nicht überdecken.",
            explanationB1:
              "Eine Kompresse hilft hier nicht. Die Haut ist noch ganz — es gibt nichts zu verbinden. Das Problem ist der Druck. Den musst du wegnehmen.",
          },
          {
            text: "Druckentlastung durch sofortige Umlagerung und Lagerungshilfsmittel",
            isCorrect: true,
            explanation:
              "Genau. Dekubitus Kategorie I bedeutet: kein offenes Gewebe, aber das Gewebe leidet. Die einzige wirksame Maßnahme ist sofortige und dauerhafte Druckentlastung. Alles andere — Salben, Auflagen — ist bei Kategorie I nicht indiziert und kann sogar schaden (NPUAP/EPUAP 2019). Dokumentieren und Pflegeplan anpassen — das kommt als nächstes.",
            explanationB1:
              "Genau richtig. Druckentlastung ist das Wichtigste. Umlagern. Lagerungshilfen nutzen. Der Druck muss weg — sofort. Das ist die einzige wirksame Maßnahme bei Kategorie 1.",
          },
          {
            text: "Den Arzt rufen — Kategorie I braucht eine Wundversorgung",
            isCorrect: false,
            explanation:
              "Ein Arzt muss informiert werden — aber das ist nicht die allererste Priorität. Während du den Arzt rufst, liegt Frau Yilmaz weiter auf dem Steißbein. Zuerst: Druckentlastung. Dann: Dokumentation und Information der Pflegefachkraft.",
            explanationB1:
              "Den Arzt informieren ist wichtig — aber nicht als allererstes. Solange du rufst, liegt Frau Yilmaz weiter auf dem Steißbein. Erst: Druck wegnehmen. Dann: Arzt informieren.",
          },
          {
            text: "Feuchte Wundauflagen auftragen",
            isCorrect: false,
            explanation:
              "Feuchte Auflagen sind für offene Wunden — also Kategorie II oder höher. Kategorie I hat noch intakte Haut. Eine Auflage hier würde nichts bringen — und könnte sogar die Inspektion erschweren.",
            explanationB1:
              "Feuchte Auflagen sind für offene Wunden. Frau Yilmaz hat Kategorie 1 — die Haut ist noch ganz. Auflage bringt nichts. Druck wegnehmen ist das Richtige.",
          },
        ],
      },
    },

    // InlineWissen — Schmerzskalen-Varianten (NRS, VRS, Gesichterskala)
    // Position: VOR Step 2.3 — Schüler kennt NRS von der Wiederbegegnung (Baustein 2.0b),
    // braucht jetzt VRS und Gesichterskala als Vergleichswissen für den Comparison-Step.
    {
      stepId: "ce02-yilmaz-beob-iw-schmerzskalen",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2020): Expertenstandard Schmerzmanagement in der Pflege",
        "Basler H.-D. et al. (2006): Deutsches Schmerzfragebogen — Handbuch",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-schmerzskalen-varianten",
      tag: "pflege",
      themaPrimaer: "schmerz",
      themenSekundaer: ["kommunikation"],
      transition: "Du kennst jetzt drei Skalen. Welche passt zu Frau Yilmaz — und warum?",
      contentC1: {
        title: "Schmerzskalen: NRS, VRS und Gesichterskala im Vergleich",
        body: "",
        glossarBegriffe: ["NRS", "VRS", "Gesichterskala", "Schmerzassessment"],
      },
      contentB1: {
        title: "Drei Wege, Schmerz zu messen",
        body: "",
        glossarBegriffe: ["Schmerzskala", "VRS", "Gesichterskala"],
      },
      inlineWissen: {
        bausteinRef: "schmerz-skalen-varianten",
        storyAufhaenger:
          "Frau Yilmaz sagt: \"Hier — das Bein, das zieht so.\" Du willst den Schmerz messen. Die NRS kennst du schon. Aber es gibt noch zwei andere Skalen — und bei Frau Yilmaz mit ihrer begrenzten Deutschkenntnis könnte eine davon wichtig werden.",
        storyAufhaengerB1:
          "Du willst den Schmerz von Frau Yilmaz messen. Die NRS-Skala (0–10) kennst du schon. Aber es gibt noch zwei andere Möglichkeiten. Die sind wichtig, falls jemand keine Zahlen versteht.",
        kerntext:
          "**Drei Schmerzskalen im Überblick:**\n\n• **NRS (Numerische Ratingskala, 0–10)** — Standard in der Pflege. Patient nennt eine Zahl. Voraussetzung: Zahlverständnis und ausreichende Sprachkompetenz. Schnell, differenziert, gut dokumentierbar.\n\n• **VRS (Verbale Ratingskala)** — Abstufung in Worten: kein Schmerz / leicht / mäßig / stark / unerträglich. Keine Zahlen nötig. Besonders geeignet für ältere Patienten und bei leichter Sprachbarriere. Weniger differenziert als NRS, aber leichter verständlich.\n\n• **Gesichterskala (Wong-Baker FACES)** — 6 Gesichter von lächelnd bis weinend. Nonverbal einsetzbar. Entwickelt für Kinder, aber auch bei Demenz, Aphasie oder starker Sprachbarriere sinnvoll. Einschränkung: Kann kulturell unterschiedlich interpretiert werden (Grimassieren hat nicht in jeder Kultur dieselbe Bedeutung).\n\n**Entscheidungsregel (DNQP 2020):** Immer die differenzierteste Skala wählen, die der Patient zuverlässig nutzen kann. NRS ist erste Wahl bei orientierten Patienten. VRS als Backup bei Verständnisproblemen. Gesichterskala bei nonverbalen Patienten.",
        kerntextB1:
          "**Drei Wege, Schmerz zu messen:**\n\n• **NRS (Zahlen, 0–10)** — Patient sagt eine Zahl. 0 = kein Schmerz, 10 = schlimmster Schmerz. Geht schnell. Aber: Man muss Zahlen verstehen.\n\n• **VRS (Wörter)** — kein Schmerz / leicht / mäßig / stark / unerträglich. Keine Zahlen nötig. Gut für ältere Menschen oder bei ein bisschen Sprachbarriere.\n\n• **Gesichterskala (Bilder)** — 6 Gesichter von lächelnd bis weinend. Man zeigt auf ein Gesicht. Gut wenn jemand gar nicht sprechen kann.\n\n**Regel:** Nimm die genaüste Skala, die der Patient versteht. NRS ist die erste Wahl.",
        faustregel:
          "**NRS wenn möglich, VRS wenn Zahlen schwer, Gesichter wenn Worte fehlen** — immer die differenzierteste Skala, die der Patient zuverlässig nutzen kann.",
        faustregelB1:
          "Zahlen gehen? → NRS. Zahlen sind schwer? → VRS (Wörter). Gar keine Sprache? → Gesichterskala.",
        karteikarte: {
          vorderseite: "Nenne die drei Schmerzskalen und erkläre, wann du welche bei Frau Yilmaz einsetzen würdest.",
          rueckseite: "NRS (0–10): Erste Wahl — Frau Yilmaz ist orientiert und kann Zahlen nennen. VRS (Wörter: kein/leicht/mäßig/stark/unerträglich): Backup wenn Zahlverständnis unsicher. Gesichterskala (6 Gesichter): Reserve bei stärkerer Sprachbarriere. Regel: Immer die differenzierteste Skala wählen, die zuverlässig funktioniert (DNQP 2020).",
          vorderseiteB1: "Was sind die drei Schmerzskalen? Welche nimmst du bei Frau Yilmaz?",
          rueckseiteB1: "NRS (Zahlen 0–10): Erste Wahl, weil Frau Yilmaz Zahlen sagen kann. VRS (Wörter): Wenn Zahlen schwer sind. Gesichterskala (Bilder): Wenn jemand gar nicht sprechen kann. Nimm immer die genaüste Skala, die geht.",
        },
      },
    },

    // Step 2.3 — Comparison: Schmerzassessment-Instrument wählen
    {
      stepId: "ce02-yilmaz-beob-03-schmerz-assessment",
      phase: 2,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2020"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-schmerzassessment",
      tag: "pflege",
      contentC1: {
        title: "Schmerzmessung: Welche Skala bei Frau Yilmaz?",
        body: "Frau Yilmaz sagt: \"Hier — das Bein, das Bein zieht so. Und hier unten, am Rücken. Ich liege schon so lang.\"\n\nSie beschreibt zwei Schmerzorte: Bein (operierte Seite) und Rücken/Steißbein (Druckstelle). Welches Instrument nutzt du für die Schmerzmessung — und warum ist die Entscheidung nicht trivial?",
        glossarBegriffe: ["NRS", "VRS", "Gesichterskala", "Schmerzassessment"],
      },
      contentB1: {
        title: "Wie messe ich den Schmerz?",
        body: "Frau Yilmaz sagt: \"Das Bein zieht so. Und hier unten am Rücken tut es weh.\"\n\nSie hat zwei Schmerzstellen. Du willst den Schmerz messen. Welche Skala nimmst du?",
        glossarBegriffe: ["NRS", "Schmerzskala"],
      },
      question: {
        fragetext:
          "Welche Schmerzskala verwendest du bei Frau Yilmaz — und warum?",
        comparison: {
          instruction:
            "Vergleiche die drei Schmerzskalen. Welche ist für Frau Yilmaz die beste Wahl?",
          columns: [
            { label: "NRS (0–10)" },
            { label: "VRS (Worte)" },
            { label: "Gesichterskala" },
          ],
          rows: [
            {
              criterion: "Wann einsetzen?",
              values: [
                "Sprachfähige, kognitiv klare Patienten",
                "Ältere Patienten, Sprachbarrieren",
                "Sprachbarriere, Demenz, Kinder",
              ],
            },
            {
              criterion: "Vorteil",
              values: [
                "Schnell, präzise, in der Pflege Standard",
                "Keine Zahlen nötig, einfach verständlich",
                "Nonverbal möglich",
              ],
              highlight: 0,
            },
            {
              criterion: "Limitation",
              values: [
                "Benötigt Zahlverständnis und Sprachkompetenz",
                "Weniger differenziert als NRS",
                "Kann kulturell verschieden interpretiert werden",
              ],
            },
            {
              criterion: "Bei Frau Yilmaz?",
              values: [
                "Erste Wahl — sie ist orientiert und kann Zahlen nennen",
                "Backup wenn Verständnisproblem",
                "Reserve — eher bei mehr Sprachbarriere",
              ],
              highlight: 0,
            },
          ],
        },
      },
    },

    // Step 2.4 — Categorize: Virchow-Trias anwenden
    {
      stepId: "ce02-yilmaz-beob-04-thrombose-virchow",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "Virchow R. (1856): Gesammelte Abhandlungen zur wissenschaftlichen Medicin",
        "DGG (2022): S2k-Leitlinie tiefe Beinvenenthrombose",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-beob-thrombose-risiko",
      tag: "krankheitslehre",
      contentC1: {
        title: "Thrombose-Risiko: Virchow-Trias auf Frau Yilmaz anwenden",
        body: "Bei Frau Yilmaz läuft seit dem OP-Tag Fondaparinux als Antikoagulation. Trotzdem: Eine Thrombose ist bei Hüft-TEP-Patienten das größte akute Risiko in den ersten Tagen. Du musst verstehen WARUM — und die Anzeichen kennen.\n\nDie Virchow-Trias beschreibt drei Faktoren, die zusammen eine Thrombose begünstigen: Gefäßwandschaden, Stase (verlangsamter Blutfluss), Hyperkoagulabilität (erhöhte Gerinnungsbereitschaft). (Virchow, 1856)\n\nOrdne Frau Yilmaz' spezifische Risikofaktoren den drei Säulen zu.",
        fallbezug:
          "Frau Yilmaz hat alle drei Säulen der Virchow-Trias gleichzeitig aktiv. Das macht das Thrombose-Risiko nach Hüft-TEP so hoch.",
        glossarBegriffe: ["Virchow-Trias", "Thrombose", "Stase", "Hyperkoagulabilität", "Antikoagulation"],
      },
      contentB1: {
        title: "Thrombose-Risiko: Warum ist es bei Frau Yilmaz so hoch?",
        body: "Frau Yilmaz bekommt täglich ein Blut-Verdünnungs-Mittel (= Antikoagulation). Aber trotzdem: Eine Thrombose (= Blutgerinnsel in der Vene) ist nach einer Hüft-OP sehr gefährlich. Warum?\n\nDrei Faktoren begünstigen Thrombosen (= Virchow-Trias): Schaden am Gefäß, verlangsamter Blutfluss (= Stase), erhöhte Gerinnungsbereitschaft.\n\nOrdne die Risikofaktoren von Frau Yilmaz zu.",
        glossarBegriffe: ["Thrombose", "Blutgerinnsel", "Antikoagulation"],
      },
      question: {
        fragetext:
          "Ordne Frau Yilmaz' Risikofaktoren den drei Säulen der Virchow-Trias zu.",
        categories: [
          { name: "Gefäßwandschaden" },
          { name: "Stase (verlangsamter Blutfluss)" },
          { name: "Hyperkoagulabilität (erhöhte Gerinnung)" },
        ],
        categoryItems: [
          {
            text: "Hüft-OP — Gefäßverletzung während des Eingriffs",
            correctCategory: 0,
          },
          {
            text: "2-3 Tage Bettruhe — Beinvenen werden kaum durchblutet",
            correctCategory: 1,
          },
          {
            text: "Adipositas (BMI 34) — venöser Rückstrom erschwert",
            correctCategory: 1,
          },
          {
            text: "Entzündungsreaktion nach OP — Gerinnungsfaktoren erhöht",
            correctCategory: 2,
          },
          {
            text: "Diabetes mellitus — chronische Hyperglykämie aktiviert Thrombozyten und erhöht PAI-1/Fibrinogen",
            correctCategory: 2,
          },
        ],
      },
    },

    // InlineWissen — Doppler-Sonografie
    // Position: VOR Step 2.5 — Der TrueFalse-Step erwähnt Doppler-Sonografie als
    // Goldstandard bei Thrombose-Verdacht. Schüler muss wissen, was das ist.
    {
      stepId: "ce02-yilmaz-beob-iw-doppler-sonografie",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DGG (2022): S2k-Leitlinie tiefe Beinvenenthrombose",
        "AWMF (2024): S3-Leitlinie Prophylaxe der venösen Thromboembolie",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-doppler-sonografie",
      tag: "krankheitslehre",
      themaPrimaer: "thrombose-prophylaxe",
      themenSekundaer: ["diagnostik"],
      transition: "Du weißt jetzt, was nach dem Verdacht passiert. Beurteile nun die Aussagen über klinische Thrombose-Zeichen.",
      contentC1: {
        title: "Doppler-Sonografie: Der Goldstandard bei Thrombose-Verdacht",
        body: "",
        glossarBegriffe: ["Doppler-Sonografie", "Kompressionssonografie", "Thrombose-Diagnostik"],
      },
      contentB1: {
        title: "Doppler-Sonografie: Ultraschall für Blutgerinnsel",
        body: "",
        glossarBegriffe: ["Doppler-Sonografie", "Ultraschall", "Blutgerinnsel"],
      },
      inlineWissen: {
        bausteinRef: "thrombose-doppler-sonografie",
        storyAufhaenger:
          "Du hast bei Frau Yilmaz beide Beine im Seitenvergleich inspiziert. Wenn du einen Verdacht auf Thrombose hast, meldest du das dem Arzt. Was passiert dann? Er ordnet eine Doppler-Sonografie an — aber was genau ist das?",
        storyAufhaengerB1:
          "Wenn du glaubst, dass Frau Yilmaz ein Blutgerinnsel im Bein haben könnte, sagst du dem Arzt Bescheid. Er bestellt dann eine Untersuchung: die Doppler-Sonografie. Was ist das?",
        kerntext:
          "**Doppler-Sonografie** (auch Kompressionssonografie, Duplex-Sonografie) ist die Standarduntersuchung bei Verdacht auf tiefe Beinvenenthrombose (TVT).\n\n• **Prinzip:** Ultraschall zeigt die Venen in Echtzeit. Der Arzt drückt die Ultraschallsonde auf die Vene — eine gesunde Vene lässt sich zusammendrücken, eine thrombosierte nicht (Inkompressibilität = Hauptkriterium).\n\n• **Doppler-Effekt:** Zusätzlich misst das Gerät den Blutfluss. Farblich kodiert: Rot = Fluss zum Herzen, Blau = weg. Kein Fluss oder verlangsamter Fluss = Verdacht auf Gerinnsel.\n\n• **Warum nicht nur klinisch untersuchen?** Klinische Zeichen (Schwellung, Wärme, Rötung) sind unspezifisch — ca. 50 % der TVTs zeigen KEINE äußeren Zeichen (DGG 2022). Die Sonografie hat eine Sensitivität von > 95 % für proximale TVTs.\n\n• **Deine Rolle als Pflegekraft:** Du stellst keine Diagnose und führst keine Sonografie durch. Aber du beobachtest, meldest den Verdacht und dokumentierst deine Befunde (Seitenvergleich, Umfang, Temperatur, Schmerz) — das gibt dem Arzt die Grundlage für die Anordnung.",
        kerntextB1:
          "**Doppler-Sonografie** ist ein Ultraschall für die Blutgefäße.\n\n• Der Arzt drückt eine Sonde auf das Bein. Er kann sehen, ob ein Blutgerinnsel in der Vene steckt.\n• **Haupttest:** Drückt der Arzt auf die Vene und sie lässt sich nicht zusammendrücken → wahrscheinlich ein Gerinnsel.\n• Der Ultraschall zeigt auch, ob das Blut fließt oder nicht. Kein Fluss = Warnsignal.\n\n**Warum reicht Anschauen nicht?** Die Hälfte aller Blutgerinnsel zeigt von außen KEINE Zeichen. Deshalb braucht man den Ultraschall.\n\n**Deine Aufgabe:** Du schaust, meldest und schreibst auf. Der Arzt macht den Ultraschall.",
        faustregel:
          "**Verdacht melden, nicht diagnostizieren.** Doppler-Sonografie ist die Antwort — deine Aufgabe ist die Frage zu stellen.",
        faustregelB1:
          "Du siehst etwas Auffälliges → du sagst es dem Arzt → der Arzt macht den Ultraschall. So funktioniert es.",
        karteikarte: {
          vorderseite: "Was ist eine Doppler-Sonografie und warum reichen klinische Zeichen allein nicht zur Thrombose-Diagnose?",
          rueckseite: "Doppler-Sonografie = Ultraschall der Beinvenen. Hauptkriterium: Inkompressibilität (thrombosierte Vene lässt sich nicht zusammendrücken). Ca. 50 % der TVTs zeigen keine äußeren Zeichen. Sensitivität > 95 % für proximale TVTs (DGG 2022). Pflegerolle: Beobachten, melden, dokumentieren — nicht diagnostizieren.",
          vorderseiteB1: "Was bedeutet Doppler-Sonografie? Warum macht man sie?",
          rueckseiteB1: "Doppler-Sonografie = Ultraschall für Blutgefäße. Man sieht, ob ein Gerinnsel in der Vene steckt. Von außen sieht man nur die Hälfte aller Gerinnsel. Deshalb braucht man den Ultraschall. Du als Pflegekraft: melden und aufschreiben.",
        },
      },
    },

    // Step 2.5 — TrueFalse: Klinische Thrombose-Zeichen
    {
      stepId: "ce02-yilmaz-beob-05-thrombose-klinisch",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DDG (2017): Diagnose und Therapie der tiefen Beinvenenthrombose",
        "DGG (2022): S2k-Leitlinie tiefe Beinvenenthrombose",
        "§ 3 Abs. 2 PflBG (Vorbehaltsaufgaben)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-beob-thrombose-zeichen",
      tag: "krankheitslehre",
      contentC1: {
        title: "Klinische Thrombose-Zeichen — richtig einordnen",
        body: "Du inspizierst beide Beine im Seitenvergleich: Schwellung, Umfang, Hauttemperatur, Verfärbung. Du fragst Frau Yilmaz nach Schmerzen in der Wade — sie sagt: 'Das tut ein bisschen weh.' Aktive Provokationszeichen (z.B. Homans) wendest du nicht an — moderne Leitlinien raten davon ab (Embolie-Risiko). Beurteile folgende Aussagen über klinische Thrombose-Zeichen.",
        glossarBegriffe: ["Homans-Zeichen", "Doppler-Sonografie", "Antikoagulation", "Antiemboliestrümpfe"],
      },
      contentB1: {
        title: "Thrombose-Zeichen — wahr oder falsch?",
        body: "Du schaust beide Beine im Vergleich an: Schwellung? Umfang? Wärme? Verfärbung? Du fragst Frau Yilmaz nach Schmerz in der Wade — sie sagt: 'Das tut ein bisschen weh.' Drücken auf die Wade machst du NICHT (das kann gefährlich sein, wenn ein Gerinnsel da ist). Beurteile die folgenden Aussagen.",
        glossarBegriffe: ["Thrombose", "Wade", "Schwellung"],
      },
      question: {
        fragetext:
          "Beurteile diese Aussagen über klinische Thrombose-Zeichen: Wahr oder Falsch?",
        trueFalseCards: [
          {
            statement:
              "Aktives Provozieren des Homans-Zeichens (Dorsalextension des Fußes) ist heute Standard, um eine Thrombose auszuschließen.",
            isTrue: false,
            explanation:
              "Falsch — moderne Leitlinien (DGG 2022) raten gegen aktive Provokationszeichen. Das Homans-Zeichen hat eine Spezifität von nur ca. 50 % und kann bei vorhandenem Thrombus Embolien auslösen. Pflegerisch: nur Inspektion im Seitenvergleich (Schwellung, Umfang, Hauttemperatur, Verfärbung) und Schmerz erfragen. Bei Verdacht: Doppler-Sonografie, keine Druckprovokation.",
          },
          {
            statement:
              "Einseitige Schwellung eines Beins nach Hüft-OP sollte sofort mittels Doppler-Sonografie abgeklärt werden.",
            isTrue: true,
            explanation:
              "Wahr — klinische Zeichen allein reichen nicht zur Diagnose. Bei Verdacht auf Thrombose: bildgebende Diagnostik, keine abwartende Beobachtung. (DGG 2022)",
          },
          {
            statement:
              "Da Frau Yilmaz Antikoagulation bekommt, ist eine Thrombose ausgeschlossen.",
            isTrue: false,
            explanation:
              "Falsch — Antikoagulation reduziert das Risiko signifikant, schließt es aber nicht aus. Mechanische Prophylaxe (Mobilisation, Kompressionsstrümpfe) bleibt weiterhin notwendig.",
          },
          {
            statement:
              "Das Anlegen von Antiemboliestrümpfen ist ausschließlich Aufgabe der Physiotherapie.",
            isTrue: false,
            explanation:
              "Falsch — das Anlegen von Kompressionsstrümpfen ist eine pflegerische Aufgabe. Anleitung und Kontrolle liegen bei der Pflegekraft (§ 3 Abs. 2 PflBG — Vorbehaltsaufgabe Pflegeprozessverantwortung).",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // InlineWissen — Braden-Skala
    // Position: VOR Step 2.6 — Der Slider fragt nach einem Braden-Subscore.
    // Schüler muss wissen, was die Braden-Skala ist und wie sie aufgebaut ist.
    {
      stepId: "ce02-yilmaz-beob-iw-braden-skala",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Braden B., Bergstrom N. (1987): A conceptual schema for the study of the etiology of pressure sores",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-braden-grundlagen",
      tag: "pflege",
      themaPrimaer: "dekubitus",
      themenSekundaer: ["assessment"],
      transition: "Du kennst die Braden-Skala. Jetzt schätzt du Frau Yilmaz ein.",
      contentC1: {
        title: "Braden-Skala: Dekubitus-Risiko messen",
        body: "",
        glossarBegriffe: ["Braden-Skala", "Dekubitus-Risiko", "Assessment"],
      },
      contentB1: {
        title: "Braden-Skala: Wie hoch ist das Risiko für Druckwunden?",
        body: "",
        glossarBegriffe: ["Braden-Skala", "Druckwunden-Risiko"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-braden-skala",
        storyAufhaenger:
          "Du hast bei Frau Yilmaz bereits einen Dekubitus Kategorie I entdeckt. Aber wie groß ist das Risiko, dass es schlimmer wird? Dafür gibt es ein standardisiertes Instrument: die Braden-Skala. Sie macht das Bauchgefühl messbar.",
        storyAufhaengerB1:
          "Frau Yilmaz hat schon eine Druckwunde Stufe 1. Wird es schlimmer? Um das einzuschätzen, gibt es die Braden-Skala. Sie hilft dir, das Risiko mit Zahlen zu messen.",
        kerntext:
          "**Die Braden-Skala** (Braden & Bergstrom 1987) ist das weltweit am häufigsten eingesetzte Assessment-Instrument für das Dekubitus-Risiko.\n\n**6 Kategorien, je 1–4 Punkte:**\n• **Sensorisches Empfinden** — Kann der Patient Druckschmerz wahrnehmen?\n• **Feuchtigkeit** — Wie oft ist die Haut feucht (Schweiß, Inkontinenz)?\n• **Aktivität** — Geht der Patient, sitzt er, liegt er nur?\n• **Mobilität** — Kann er seine Position selbst verändern?\n• **Ernährung** — Ist die Zufuhr ausreichend?\n• **Reibung und Scherkräfte** — Rutscht der Patient im Bett?\n\n**Auswertung:** Gesamtscore 6–23. Je NIEDRIGER, desto HÖHER das Risiko.\n• ≤ 9 Punkte: Sehr hohes Risiko\n• 10–12 Punkte: Hohes Risiko\n• 13–14 Punkte: Mittleres Risiko\n• 15–18 Punkte: Leichtes Risiko\n• > 18 Punkte: Kein erhöhtes Risiko\n\n**Wann durchführen?** Bei Aufnahme, bei Zustandsveränderung und regelmäßig (DNQP 2024: mind. 1× pro Schicht bei Risikopatienten).\n\n**Bei Frau Yilmaz:** Du erwartest einen Gesamtscore um 14–16 (mittleres bis leichtes Risiko). Aber: Sie hat bereits Kategorie I — das zeigt, dass klinische Zeichen schneller als Scores sein können.",
        kerntextB1:
          "**Braden-Skala** misst das Risiko für Druckwunden.\n\n**6 Bereiche, je 1–4 Punkte:**\n• Kann der Patient Schmerz fühlen?\n• Ist die Haut oft feucht?\n• Wie viel bewegt sich der Patient?\n• Kann er sich selbst drehen?\n• Isst der Patient genug?\n• Rutscht er im Bett?\n\n**Weniger Punkte = höheres Risiko:**\n• 9 oder weniger = sehr hohes Risiko\n• 10–12 = hohes Risiko\n• 13–14 = mittleres Risiko\n• 15–18 = leichtes Risiko\n\n**Wann?** Bei der Aufnahme. Und wenn sich der Zustand ändert.\n\n**Frau Yilmaz:** Sie hat schon eine Druckwunde — das zeigt: Das Risiko war da, bevor du es gemessen hast.",
        faustregel:
          "**Niedriger Score = höheres Risiko.** Die Braden-Skala macht das Bauchgefühl zur Zahl — aber ein Dekubitus Kategorie I am Steißbein ist das lauteste Warnsignal.",
        faustregelB1:
          "Weniger Punkte = mehr Gefahr. Aber: Wenn du schon eine rote Stelle siehst, brauchst du keinen Score — du musst sofort handeln.",
        karteikarte: {
          vorderseite: "Was misst die Braden-Skala? Nenne die 6 Kategorien und erkläre, was ein niedriger Score bedeutet.",
          rueckseite: "Braden-Skala: Dekubitus-Risiko in 6 Kategorien (Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte). Score 6–23; niedriger = höheres Risiko. ≤ 9 = sehr hoch, 10–12 = hoch, 13–14 = mittel, 15–18 = leicht. Durchführung: Aufnahme + Zustandsänderung + mind. 1× pro Schicht bei Risiko (DNQP 2024).",
          vorderseiteB1: "Was ist die Braden-Skala? Was bedeutet ein niedriger Score?",
          rueckseiteB1: "Die Braden-Skala misst das Risiko für Druckwunden. 6 Bereiche, je 1–4 Punkte. Weniger Punkte = mehr Gefahr. Bei 9 oder weniger: sehr hohes Risiko. Bei der Aufnahme und wenn sich etwas ändert.",
        },
      },
    },

    // Step 2.6 (Optional) — Slider: Braden-Skala anwenden
    {
      stepId: "ce02-yilmaz-beob-06-braden-optional",
      phase: 2,
      stepType: "slider",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Braden B., Bergstrom N. (1987): A conceptual schema for the study of the etiology of pressure sores",
        "DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe",
      ],
      track: "vertiefung",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-beob-braden-skala",
      tag: "pflege",
      contentC1: {
        title: "Braden-Skala: Frau Yilmaz einschätzen",
        body: "Die Braden-Skala erfasst das Dekubitus-Risiko in 6 Kategorien. Je niedriger der Gesamtwert, desto höher das Risiko (Grenzwert ≤ 18: Risiko vorhanden; ≤ 9: hohes Risiko). Schätze für Frau Yilmaz die Kategorie 'Aktivität' ein (1 = bettlägerig, 4 = geht regelmäßig).",
        glossarBegriffe: ["Braden-Skala", "Dekubitus-Risiko"],
      },
      contentB1: {
        title: "Braden-Skala: Wie mobil ist Frau Yilmaz?",
        body: "Die Braden-Skala misst das Risiko für Druckwunden. Schätze ein: Wie mobil ist Frau Yilmaz? 1 = liegt immer im Bett, 4 = geht regelmäßig.",
        glossarBegriffe: ["Druckwunden-Risiko"],
      },
      question: {
        fragetext:
          "Schätze den Braden-Subscore 'Aktivität' für Frau Yilmaz ein (1 = bettlägerig bis 4 = geht regelmäßig).",
        slider: {
          instruction:
            "Wie würdest du Frau Yilmaz' Aktivitätsniveau (Tag 3 nach Hüft-TEP) einschätzen?",
          unit: "Punkte",
          min: 1,
          max: 4,
          step: 1,
          correctValue: 2,
          tolerance: 0,
          explanation:
            "Frau Yilmaz ist stuhlgebunden bzw. bettlägerig nach OP — das entspricht Wert 2 (stuhlgebunden). Gesamtscore der Braden-Skala bei ihr: ~15 Punkte = erhöhtes Risiko. Das erklärt, warum du schon am 3. Post-OP-Tag eine Rötung am Steißbein findest. Dieser Score muss dokumentiert werden.",
          explanationB1:
            "Frau Yilmaz liegt fast immer im Bett nach der OP. Das ist Wert 2. Ein niedriger Gesamt-Score bedeutet: hohes Risiko für Druckwunden. Das musst du dokumentieren.",
        },
      },
    },

    // InlineWissen — serös-blutig (Wundsekret-Beschreibung)
    // Position: VOR Step 2.7 — Die Flipcard erwähnt serös-blutige Förderung.
    // Schüler muss die Begriffe der Wundsekret-Klassifikation kennen.
    {
      stepId: "ce02-yilmaz-beob-iw-serös-blutig",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte",
        "Danzer S. (2019): Wundbeurteilung und Wundbehandlung, Springer",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-wundsekret",
      tag: "krankheitslehre",
      themaPrimaer: "wundbeobachtung",
      themenSekundaer: ["dokumentation"],
      transition: "Du kannst Wundsekret jetzt benennen. Schau dir die Redon-Drainage genauer an.",
      contentC1: {
        title: "Wundsekret: serös, blutig, serös-blutig — was bedeutet das?",
        body: "",
        glossarBegriffe: ["serös", "serös-blutig", "blutig", "purulent", "Wundsekret", "Exsudat"],
      },
      contentB1: {
        title: "Wundflüssigkeit: Welche Farben gibt es?",
        body: "",
        glossarBegriffe: ["Wundflüssigkeit", "serös-blutig"],
      },
      inlineWissen: {
        bausteinRef: "wundsekret-klassifikation",
        storyAufhaenger:
          "Frau Yilmaz' Redon-Drainage hat heute 40 ml Flüssigkeit gefördert. Im Übergabebericht steht: 'serös-blutig.' Aber was heißt das genau — und wann wäre die Farbe ein Warnsignal?",
        storyAufhaengerB1:
          "Im Drainage-Beutel von Frau Yilmaz ist Flüssigkeit. Im Bericht steht: 'serös-blutig.' Was bedeutet das? Und wann musst du aufpassen?",
        kerntext:
          "**Wundsekret** (Exsudat) wird nach Farbe und Beschaffenheit klassifiziert:\n\n• **Serös** — klar, gelblich, dünnflüssig. Besteht hauptsächlich aus Blutplasma und Proteinen. Normal in der Frühphase der Wundheilung.\n\n• **Blutig (sanguinolent/hämorrhagisch)** — rot, flüssig. Enthält viele Erythrozyten. In den ersten 24 h nach OP normal. Danach: Wachsamkeit — kann auf Nachblutung hindeuten.\n\n• **Serös-blutig (serosanguinolent)** — Mischung: rosa bis hellrot, leicht blutig gefärbt. Typisch für Tag 1–3 nach OP. Das ist bei Frau Yilmaz (3. post-OP-Tag) der erwartete Befund.\n\n• **Purulent (eitrig)** — gelblich-grünlich, dickflüssig, übelriechend. Zeichen einer Infektion → sofort melden.\n\n**Warnsignale bei Drainagen:**\n- Plötzlich rein blutige Förderung nach Tag 1–2 → mögliche Nachblutung\n- Purulentes Sekret → Infekt\n- Plötzliche Mengenzunahme → mögliche Komplikation\n- Kein Sekret trotz Schwellung → Drainage verstopft?\n\n**Dokumentation:** Farbe, Konsistenz und Menge immer zusammen dokumentieren: '40 ml serös-blutig' ist ein vollständiger Befund.",
        kerntextB1:
          "**Wundflüssigkeit** hat verschiedene Farben:\n\n• **Serös** — klar, gelblich. Das ist Wundwasser. Normal.\n\n• **Blutig** — rot. Viel Blut in der Flüssigkeit. Am ersten Tag nach OP normal. Später: aufpassen.\n\n• **Serös-blutig** — rosa bis hellrot. Wundwasser mit ein bisschen Blut. Normal für Tag 1–3 nach OP. Das hat Frau Yilmaz jetzt.\n\n• **Eitrig** — gelb-grünlich, dickflüssig, riecht schlecht. Das bedeutet Infektion → sofort melden!\n\n**Wann ist es gefährlich?**\n- Plötzlich viel Blut → Nachblutung möglich\n- Eiter → Infektion\n- Plötzlich viel mehr Flüssigkeit → Problem\n\n**Aufschreiben:** Immer Farbe + Menge: '40 ml serös-blutig.'",
        faustregel:
          "**Serös-blutig am Tag 3 = normal. Rein blutig nach Tag 2 oder Eiter = sofort melden.** Farbe + Menge dokumentieren.",
        faustregelB1:
          "Rosa bis hellrot am Tag 3: normal. Rein rot oder Eiter: sofort dem Arzt sagen. Immer aufschreiben: Farbe und Menge.",
        karteikarte: {
          vorderseite: "Frau Yilmaz' Drainage fördert 40 ml serös-blutige Flüssigkeit. Was bedeutet 'serös-blutig' — und wann wäre die Farbe ein Warnsignal?",
          rueckseite: "Serös-blutig = Mischung aus Wundwasser (klar, gelblich) und Blut (rötlich). Normal für Tag 1–3 nach OP. Warnsignale: Rein blutig nach Tag 2 (Nachblutung?), purulent/eitrig (Infektion), plötzliche Mengenzunahme (Komplikation). Dokumentation: Farbe + Konsistenz + Menge (Danzer 2019).",
          vorderseiteB1: "Was bedeutet 'serös-blutig'? Wann musst du aufpassen?",
          rueckseiteB1: "Serös-blutig = Wundwasser gemischt mit ein bisschen Blut. Rosa bis hellrot. Normal für Tag 1–3. Aufpassen bei: rein rotem Blut nach Tag 2, Eiter, plötzlich viel mehr Flüssigkeit.",
        },
      },
    },

    // Step 2.7 (Optional) — Flipcard: Redon-Drainage beobachten
    {
      stepId: "ce02-yilmaz-beob-07-drainage-optional",
      phase: 2,
      stepType: "flipcard",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Deutsche Gesellschaft für Unfallchirurgie (2022): S2k-Leitlinie Endoprothetik Hüfte"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-beob-redon-drainage",
      tag: "krankheitslehre",
      contentC1: {
        title: "Redon-Drainage: Was du wissen musst",
        body: "Frau Yilmaz hat noch eine Redon-Drainage an der rechten Hüfte. Heute Morgen: 40 ml serös-blutige Förderung (gestern: 80 ml). Was bedeutet das — und wer entscheidet was?",
        glossarBegriffe: ["Redon-Drainage", "serös-blutig", "Wundheilung", "Wundbeobachtung"],
      },
      contentB1: {
        title: "Redon-Drainage — was ist das?",
        body: "Frau Yilmaz hat einen Schlauch an der Wunde (= Redon-Drainage). Er saugt Wundflüssigkeit ab. Heute: 40 ml. Gestern: 80 ml. Was bedeutet das?",
        glossarBegriffe: ["Drainage", "Wundflüssigkeit", "Wundbeobachtung"],
      },
      question: {
        fragetext: "Drehe die Karten um — lerne die wichtigsten Fakten zur Redon-Drainage.",
        flipcard: {
          instruction:
            "Drehe die Karten um und lerne die Fakten zur Redon-Drainage bei Frau Yilmaz.",
          cards: [
            {
              front: "Was bedeutet 'serös-blutig' bei einer Redon-Drainage?",
              back: "Serös = klare, gelbliche Flüssigkeit (Wundwasser). Blutig = rötlich gefärbt durch Blut. Serös-blutig = Mischung, typisch für die ersten 1–3 Tage nach OP. Das ist normal. Bei rein blutig-roter Förderung: sofort melden.",
              backB1:
                "Serös = klares, gelbes Wasser. Blutig = rötlich. Serös-blutig = Mischung. Das ist normal in den ersten Tagen nach der OP. Wenn alles rot-blutig ist: sofort melden.",
            },
            {
              front: "Frau Yilmaz' Drainage fördert heute 40 ml (gestern: 80 ml). Wie bewertest du das?",
              back: "Positiv — die Fördermenge nimmt ab. Das ist ein Zeichen der Wundheilung. Ab < 20–30 ml/Tag (nach Arztanordnung) kann die Drainage in der Regel entfernt werden.",
              backB1:
                "Gut — weniger Flüssigkeit bedeutet: die Wunde heilt. Weniger als 20–30 ml pro Tag → Drainage kann entfernt werden. Das entscheidet der Arzt.",
            },
            {
              front: "Wer entscheidet, wann die Drainage entfernt wird?",
              back: "Der Arzt — nach Arztanordnung. Die Pflegekraft kontrolliert und dokumentiert die Fördermenge, informiert bei Auffälligkeiten und zieht die Drainage nach Anordnung.",
              backB1:
                "Der Arzt entscheidet. Du als Pflegekraft: du schaust, wie viel Flüssigkeit kommt, du schreibst es auf, du sagst Bescheid wenn etwas auffällt.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 40,
};
