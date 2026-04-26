// CE-02 Situation Frau Yilmaz — Phase 2: Beobachten
// Steps: 5 Kern + 2 Optional · Bloom: B3–B4 · Zeit: ~30–50 Min
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
      lernziel: "ce02-yilmaz-beob-dekubitus-sofortmassnahme",
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
        glossarBegriffe: ["Redon-Drainage", "serös-blutig", "Wundheilung"],
      },
      contentB1: {
        title: "Redon-Drainage — was ist das?",
        body: "Frau Yilmaz hat einen Schlauch an der Wunde (= Redon-Drainage). Er saugt Wundflüssigkeit ab. Heute: 40 ml. Gestern: 80 ml. Was bedeutet das?",
        glossarBegriffe: ["Drainage", "Wundflüssigkeit"],
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
