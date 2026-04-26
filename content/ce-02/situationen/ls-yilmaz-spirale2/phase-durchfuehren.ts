// CE-02 Situation Frau Yilmaz Spirale 2 — Phase 4: Durchführen
// Steps: 5 Kern + 2 Optional · Bloom: B3-B5 · Zeit: ~20-25 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/phase-durchfuehren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-yilmaz-spirale2-durchfuehren",
  phase: "durchfuehren",
  titel: "Durchführen — Wundauflage + Fotodokumentation + 135°-Positionierung",
  titelB1: "Durchführen — Wunde versorgen und Frau Yilmaz lagern",
  kontext:
    "Dr. Kirchner hat die Wundversorgung angeordnet: Hydrokolloid-Verband, täglicher Verbandwechsel, Fotodokumentation. Du holst das Wundversorgungsmaterial — Frau Schäfer beobachtet von der Tür aus. Mustafa hat den Raum kurz verlassen. Frau Yilmaz liegt auf der linken Seite, der Rücken ist zugänglich. Sie sagt: 'So liegt man also. Kissen da, Kissen da. Ist das nicht umständlich?' Du erklärst während du arbeitest. Das gehört zur Pflegehaltung: handeln und kommunizieren gleichzeitig.",
  kontextB1:
    "Dr. Kirchner hat angeordnet: Hydrokolloid-Verband, täglich wechseln, Foto machen. Du holst das Material. Frau Schäfer schaut von der Tür zu. Frau Yilmaz liegt auf der Seite. Sie sagt: 'Kissen da, Kissen da. Ist das nicht umständlich?' Du arbeitest und erklärst gleichzeitig.",
  kernSteps: [
    // Step 4.1 — Sorting: Vorbereitung aseptischer Verbandwechsel
    {
      stepId: "ce02-yilmaz-s2-durch-01-vorbereitung-hygiene",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2. Aktualisierung 2024)", "RKI-Empfehlungen"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-s2-durch-hygiene",
      tag: "pflege",
      contentC1: {
        title: "Vorbereitung des aseptischen Verbandwechsels — Reihenfolge",
        body: "Sortiere die 7 Schritte in die bindende Reihenfolge. Bloom 3 — Anwenden: Hygiene-Reihenfolge ist nicht beliebig.",
        glossarBegriffe: ["Aseptisch", "Händedesinfektion", "Sterile Unterlage"],
      },
      contentB1: {
        title: "In welcher Reihenfolge bereitest du den Verbandwechsel vor?",
        body: "Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Händedesinfektion", "Aseptisch"],
      },
      question: {
        fragetext:
          "Sortiere die Vorbereitungsschritte für den aseptischen Verbandwechsel in die richtige Reihenfolge.",
        sortItems: [
          "Patientin informieren was jetzt passiert (Aufklärung vor Manipulation, § 630e BGB)",
          "Händedesinfektion (30 Sekunden, alle Areale)",
          "Material am Bett bereitstellen (sterile Unterlage, Hydrokolloid passender Größe, sterile Handschuhe, NaCl 0,9%)",
          "Alten Verband mit sauberem Handschuh entfernen und Befund prüfen",
          "Sauberen Handschuh ausziehen, erneute Händedesinfektion, sterile Handschuhe anziehen",
          "Wunde inspizieren — ggf. Befund dokumentieren",
          "Wunde spülen mit NaCl 0,9% (Spülen, nicht Wischen)",
          "Neuen Verband auflegen und Dokumentation",
        ],
      },
    },

    // Step 4.2 — Cloze: Wundzustand beschreiben
    {
      stepId: "ce02-yilmaz-s2-durch-02-wundzustand-beschreiben",
      phase: 4,
      stepType: "cloze",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-durch-wundbeschreibung",
      tag: "krankheitslehre",
      contentC1: {
        title: "Wundzustand beschreiben — wie in echter Dokumentation",
        body: "Erst-Verbandwechsel Tag 14 — direkt nach Entdeckung des Befundes. Nach der Verband-Abnahme beurteilst du die Wunde erneut. Fülle den Lückentext aus — mit den Originalkriterien der Wunddokumentation. Bloom 4.",
        glossarBegriffe: [
          "Wundgrund",
          "Wundrand",
          "Exsudat",
          "Nekrose",
          "NPUAP/EPUAP",
        ],
      },
      contentB1: {
        title: "Wundbeschreibung ausfüllen",
        body: "Heute ist Tag 14 — der erste Verbandwechsel direkt nach der Entdeckung. Fülle die Lücken aus. Die Antworten kennst du aus dem Befund von Frau Yilmaz.",
        glossarBegriffe: ["Wundgrund", "Wundrand"],
      },
      question: {
        fragetext: "Fülle den Wundbericht-Lückentext aus.",
        cloze: {
          textWithBlanks:
            "Die Wunde ist [BLANK_0] cm × [BLANK_1] cm groß. Der Wundgrund ist [BLANK_2] (Farbe). Nekrosen sind [BLANK_3]. Der Wundrand ist [BLANK_4]. Die Wunde ist nach Kategorie [BLANK_5] der NPUAP/EPUAP klassifiziert.",
          blanks: [
            { id: 0, correct: "2", distractors: ["1", "3", "4"] },
            { id: 1, correct: "3", distractors: ["2", "4", "5"] },
            { id: 2, correct: "rötlich", distractors: ["gelblich", "grau", "schwarz"] },
            { id: 3, correct: "nicht vorhanden", distractors: ["vorhanden", "teilweise vorhanden"] },
            { id: 4, correct: "mazeriert", distractors: ["scharf begrenzt", "gerötet", "trocken"] },
            { id: 5, correct: "II", distractors: ["I", "III", "IV"] },
          ],
        },
      },
    },

    // Step 4.3 — TrueFalse (5 Aussagen): Fotodokumentation
    {
      stepId: "ce02-yilmaz-s2-durch-03-foto-dokumentation",
      phase: 4,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DSGVO Art. 9", "§ 630f BGB"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-s2-durch-datenschutz-foto",
      tag: "pflege",
      contentC1: {
        title: "Fotodokumentation — was stimmt?",
        body: "5 Aussagen zur Fotodokumentation bei Wunden. Datenschutz DSGVO Art. 9 ist ein K.O.-Kriterium. Quelle: (DSGVO Art. 9; § 630f BGB)",
        glossarBegriffe: ["DSGVO Art. 9", "Einwilligung", "Fotodokumentation"],
      },
      contentB1: {
        title: "Fotodokumentation — richtig oder falsch?",
        body: "5 Aussagen zum Thema Foto von Wunden. Was stimmt?",
        glossarBegriffe: ["DSGVO", "Einwilligung"],
      },
      question: {
        fragetext:
          "Wahr oder falsch? Beantworte alle 5 Aussagen zur Fotodokumentation.",
        trueFalseCards: [
          {
            statement:
              "Ich fotografiere mit meinem Privathandy — das ist schneller und bequemer.",
            isTrue: false,
            explanation:
              "FALSCH — Datenschutz! Fotos von Wunden sind Gesundheitsdaten nach DSGVO Art. 9 (besondere Kategorie). Privatgeräte sind nicht DSGVO-konform (keine Kontrolle über Speicherort, kein Löschrecht der Einrichtung). Nur zugelassene Klinikgeräte verwenden.",
          },
          {
            statement:
              "Das Foto wird mit Maßband aufgenommen, damit die Größe sichtbar und messbar ist.",
            isTrue: true,
            explanation:
              "WAHR — Standard der Wundfotodokumentation. Das Maßband ermöglicht objektive Verlaufsmessung (Größe im Vergleich zwischen den Aufnahmen). Ohne Maßband ist ein Foto für die Dokumentation kaum verwertbar.",
          },
          {
            statement:
              "Frau Yilmaz muss für das Foto keine Einwilligung geben — es ist Teil der Behandlung.",
            isTrue: false,
            explanation:
              "FALSCH — Auch im Rahmen der Behandlung gilt Einwilligungspflicht für Fotografien (DSGVO Art. 9). Frau Yilmaz muss informiert zustimmen. Dokumentationsfotos sind Teil der Behandlung, aber nicht ohne informierte Einwilligung zulässig.",
          },
          {
            statement:
              "Das Foto wird in der Pflegeakte hinterlegt und nicht einzeln ausgedruckt.",
            isTrue: true,
            explanation:
              "WAHR — Digitale Dokumentation in der Patientenakte (DSGVO-konform, Zugriffskontrolle vorhanden). Einzelausdrucke ohne Kennzeichnung und gesicherte Aufbewahrung sind datenschutzrechtlich problematisch.",
          },
          {
            statement:
              "Das Foto ersetzt die schriftliche Wundbeschreibung — ich brauche keinen Text mehr.",
            isTrue: false,
            explanation:
              "FALSCH — Das Foto ergänzt die schriftliche Dokumentation, ersetzt sie nicht. Ein Foto zeigt den visuellen Zustand, aber nicht: subjektive Aussagen der Patientin, Geruch, Konsistenz, Schmerz — all das braucht Text.",
          },
        ],
      },
    },

    // Step 4.4 — LabelImage: 135°-Seitenlage beschriften
    {
      stepId: "ce02-yilmaz-s2-durch-04-positionierung-135",
      phase: 4,
      stepType: "labelImage",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA (2019)",
        "Postoperative TEP-Lagerung",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-s2-durch-135-lagerung",
      tag: "anatomie",
      bildkategorie: "prozedur",
      imageAlt:
        "Frau Yilmaz in 135°-Schräger Seitenlage auf der linken (nicht-operierten) Seite, Hüft-TEP rechts oben, mit 4 Kissen, beschriftbare Kissen-Positionen",
      bildhinweis:
        "Patient lying on left side (non-operated side, hip-TEP right side up) in 135 degree oblique side lying position with 4 numbered pillow positions to label: under thorax, between knees (abduction wedge for hip-TEP), under lower legs (heel offloading), behind back (anti-roll), clinical illustration, copic marker sketch, absolutely no text no labels no words",
      contentC1: {
        title: "135°-Seitenlage korrekt beschriften",
        body: "Beschrifte die 4 Kissen-Positionen korrekt. Beachte die Besonderheit bei Frau Yilmaz (Hüft-TEP rechts!). Quelle: (NPUAP/EPUAP/PPPIA 2019 + postoperative TEP-Lagerung)",
        glossarBegriffe: [
          "135°-Schräge Seitenlage",
          "Fersenfreistellung",
          "Hüft-TEP Schutzlagerung",
        ],
      },
      contentB1: {
        title: "Wo kommen die Kissen hin?",
        body: "Beschrifte die 4 Kissen auf dem Bild. Du hast die Erklärung aus dem letzten Schritt.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Beschrifte die 4 Kissen-Positionen in der 135°-Schrägen Seitenlage.",
        labelImage: {
          imageUrl: "/illustrations/lagerung-135-grad-yilmaz.svg",
          imageAlt: "Frau Yilmaz in 135°-Seitenlage mit 4 Kissen",
          instruction:
            "Wähle für jedes Kissen die richtige Bezeichnung aus dem Dropdown.",
          mode: "select",
          labels: [
            {
              id: "kissen1",
              correct: "Unter Brust / Thorax (Stabilisierung des Rumpfes)",
              position: { x: 35, y: 40 },
              distractors: [
                "Unter den Knien",
                "An der Rückseite",
                "Unter dem Kopf",
              ],
            },
            {
              id: "kissen2",
              correct: "Zwischen den Knien (Beinentlastung + Hüft-TEP-Schutz — keine Adduktion!)",
              position: { x: 55, y: 65 },
              distractors: [
                "Unter Brust / Thorax",
                "An der Rückseite",
                "Unter dem Kopf",
              ],
            },
            {
              id: "kissen3",
              correct: "Unter dem Unterschenkel (Fersenfreistellung)",
              position: { x: 70, y: 78 },
              distractors: [
                "Unter Brust / Thorax",
                "Zwischen den Knien",
                "An der Rückseite",
              ],
            },
            {
              id: "kissen4",
              correct: "An der Rückseite (verhindert Zurückrollen in Rückenlage)",
              position: { x: 25, y: 55 },
              distractors: [
                "Unter Brust / Thorax",
                "Zwischen den Knien",
                "Unter dem Unterschenkel",
              ],
            },
          ],
        },
      },
    },

    // Step 4.5 — Dialog (2 Phasen): Kommunikation während Pflege (Zitat Z6)
    {
      stepId: "ce02-yilmaz-s2-durch-05-kommunikation-waehrend",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-s2-durch-interkulturell",
      tag: "pflege",
      contentC1: {
        title: "Frau Yilmaz erzählt — Honig und Wundbehandlung",
        body: "Frau Yilmaz erzählt etwas Persönliches während du arbeitest. Interkulturelle Kompetenz + evidenzbasiertes Handeln schließen sich nicht aus.",
        glossarBegriffe: ["Interkulturelle Kompetenz", "Manuka-Honig"],
      },
      contentB1: {
        title: "Frau Yilmaz erzählt etwas — wie reagierst du?",
        body: "Frau Yilmaz sagt etwas Persönliches. Was antwortest du?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Frau Yilmaz erzählt — wie reagierst du?",
        patientName: "Frau Yilmaz",
        dialogPhases: [
          {
            context:
              "Während du den Verband anlegst, sagt Frau Yilmaz ruhig: 'Als ich jung war, haben wir Wunden mit Honig behandelt. Das klingt vielleicht verrückt. Aber es hat funktioniert.'",
            contextB1:
              "Frau Yilmaz sagt: 'Als ich jung war, haben wir Wunden mit Honig behandelt. Das klingt verrückt — aber es hat geholfen.'",
            speaker: "Du",
            options: [
              {
                text: "\"Honig ist Unsinn — das machen wir heute nicht mehr.\"",
                textB1: "\"Honig hilft nicht — das ist veraltet.\"",
                patientResponse:
                  "Frau Yilmaz schweigt. Sie schaut zur Seite. Mustafa, der gerade wieder ins Zimmer kommt, sieht es.",
                patientResponseB1:
                  "Frau Yilmaz schweigt. Sie schaut zur Seite.",
                score: 0,
                feedback:
                  "Abwertend und kulturell respektlos. Honig war historisch ein Antiseptikum — und Manuka-Honig (medizinisch standardisiert) wird heute noch in der Wundversorgung eingesetzt (evidenzbasiert). Die Reaktion zerstört Vertrauen ohne jede Notwendigkeit.",
                feedbackB1:
                  "Das ist nicht gut. Honig ist nicht Unsinn. Manuka-Honig wird in der Medizin heute noch genutzt. Und: Frau Yilmaz erzählt dir etwas Persönliches — sie verdient Respekt.",
              },
              {
                text: "\"Das ist tatsächlich interessant — Honig war historisch ein Antiseptikum. Medizinischer Manuka-Honig wird heute noch eingesetzt. Für Ihre Wunde ist im Moment der Hydrokolloid-Verband besser geeignet, aber Sie haben Recht, dass Feuchthalten wichtig ist.\"",
                textB1:
                  "\"Das stimmt wirklich. Honig hat früher als Wundmittel geholfen. Heute gibt es sogar noch medizinischen Honig. Für Ihre Wunde nehmen wir jetzt einen anderen modernen Verband. Aber das Prinzip ist ähnlich — Wunde feucht halten. Sie haben Recht.\"",
                patientResponse:
                  "Frau Yilmaz lächelt kurz. 'Ich dachte, ihr lacht mich aus. Aber das freut mich.' — sie entspannt sich.",
                patientResponseB1:
                  "Frau Yilmaz lächelt kurz. 'Ich dachte, ihr lacht mich aus.' — sie entspannt sich.",
                score: 3,
                feedback:
                  "Respektvoll, fachlich korrekt, verbindend. Du validierst ihr Wissen, korrigierst ohne zu entwerten, und erklärst warum du einen anderen Weg wählst. Das stärkt das Vertrauen und die Kooperation.",
                feedbackB1:
                  "Sehr gut. Du respektierst ihr Wissen. Du erklärst warum du einen modernen Verband nimmst. Frau Yilmaz fühlt sich ernst genommen.",
              },
              {
                text: "\"Ja, das machen wir gleich mit Honig — wenn Sie möchten.\"",
                textB1: "\"Gut, dann nehmen wir Honig.\"",
                patientResponse:
                  "Frau Yilmaz: 'Wirklich? Das wäre schön.' — Frau Schäfer schaut von der Tür kritisch rein.",
                patientResponseB1:
                  "Frau Yilmaz: 'Ja bitte!' — Frau Schäfer schaut fragend.",
                score: 0,
                feedback:
                  "Nicht korrekt — Honig ist kein aktuell angeordnetes Wundtherapeutikum für diesen Fall. Dr. Kirchner hat Hydrokolloid angeordnet. Eigenmächtige Änderungen der Wundtherapie sind nicht zulässig. Patientenrecht auf Therapieentscheidung bedeutet nicht, dass du unreflektiert wünsche erfüllst.",
                feedbackB1:
                  "Nein. Der Arzt hat einen anderen Verband angeordnet. Du kannst nicht einfach etwas anderes nehmen — auch wenn Frau Yilmaz es möchte.",
              },
            ],
          },
          {
            context:
              "Frau Yilmaz: 'Sie schreiben alles auf. Ist das für mich oder für die Akte?' — Du hast gerade begonnen zu dokumentieren.",
            contextB1:
              "Frau Yilmaz fragt: 'Sie schreiben alles auf. Ist das für mich oder für die Akte?'",
            speaker: "Du",
            options: [
              {
                text: "\"Für beides — wenn ich alles aufschreibe, kann die nächste Schicht genau weitermachen. Und wenn Sie die Akte irgendwann haben möchten, gehört sie Ihnen.\"",
                textB1:
                  "\"Für beides. Wenn ich schreibe, weiß die nächste Schicht was passiert ist. Und die Akte gehört Ihnen — Sie dürfen sie jederzeit lesen.\"",
                patientResponse:
                  "Frau Yilmaz nickt. 'Das wusste ich nicht. Gut zu wissen.' — sie schaut ruhiger.",
                patientResponseB1:
                  "Frau Yilmaz nickt. 'Ah — die Akte gehört mir auch? Das wusste ich nicht.'",
                score: 3,
                feedback:
                  "Korrekt, transparent, empowernd. Du erklärst den Sinn der Dokumentation und informierst Frau Yilmaz über ihr Einsichtsrecht in die Akte (§ 630g BGB). Das stärkt Vertrauen und Autonomie.",
                feedbackB1:
                  "Sehr gut. Du erklärst warum du schreibst. Und du sagst ihr: Die Akte gehört ihr auch. Das ist ihr Recht (§ 630g BGB).",
              },
              {
                text: "\"Das ist interne Dokumentation — das ist nicht für Sie bestimmt.\"",
                textB1: "\"Das ist für die Akte — nicht für Sie.\"",
                patientResponse:
                  "Frau Yilmaz schaut überrascht. 'Ah. Und ich darf das nicht lesen?'",
                patientResponseB1:
                  "Frau Yilmaz fragt: 'Und ich darf das nicht lesen?'",
                score: 0,
                feedback:
                  "Falsch und paternalistisch. Patientinnen haben nach § 630g BGB das Recht auf Einsicht in ihre Krankenakte. 'Ist nicht für Sie' ist rechtlich und ethisch nicht korrekt.",
                feedbackB1:
                  "Das ist falsch. Frau Yilmaz darf ihre Akte lesen — das steht im Gesetz (§ 630g BGB). Du hast sie falsch informiert.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Opt 4.6 — ErrorSpot: Hygienefehler erkennen (mittlere/starke Schüler)
    {
      stepId: "ce02-yilmaz-s2-durch-opt-01-hygienefehler-erkennen",
      phase: 4,
      stepType: "errorspot",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["RKI-Empfehlungen Händehygiene"],
      track: "vertiefung",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-s2-durch-hygienefehler",
      tag: "pflege",
      contentC1: {
        title: "Hygienefehler im Ablauf finden",
        body: "Der folgende Text beschreibt einen Verbandwechsel. Zwei Hygienefehler sind eingebaut. Finde und markiere sie.",
        glossarBegriffe: ["Kontamination", "Aseptisch"],
      },
      contentB1: {
        title: "Wo sind die Fehler? Markiere sie.",
        body: "Lies den Text. Zwei Fehler sind drin. Markiere sie.",
        glossarBegriffe: ["Kontamination"],
      },
      question: {
        fragetext: "Markiere die zwei Hygienefehler im Text.",
        errorspot: {
          instruction: "Klicke auf die Textstellen mit Hygienefehlern.",
          text:
            "Die Pflegekraft desinfiziert die Hände. Dann zieht sie sterile Handschuhe an. Mit den behandschuhten Händen öffnet sie die Verpackung des Hydrokolloid-Verbands und entnimmt ihn. Die Wunde wird mit NaCl 0,9% gespült — direkt aus der Flasche auf die Wunde gegossen. Dann wird der neue Verband aufgelegt.",
          errors: [
            {
              start: 65,
              end: 132,
              correction:
                "Verpackungen erst öffnen, dann Handschuhe anziehen. Nicht mit behandschuhten Händen an Außenverpackungen greifen — Kontaminationsgefahr.",
              explanation:
                "Fehler 1: Mit behandschuhten sterilen Handschuhen an der Außenverpackung — die Handschuhe sind dann nicht mehr steril. Erst Material bereitstellen, dann Handschuhe anziehen.",
              explanationB1:
                "Fehler 1: Sterile Handschuhe anziehen und dann die Verpackung anfassen — das macht die Handschuhe kontaminiert. Erst Verpackung öffnen, dann Handschuhe an.",
            },
            {
              start: 177,
              end: 233,
              correction:
                "NaCl 0,9% nicht direkt aus der Flasche auf die Wunde gießen — die Flasche ist dann kontaminiert. Lösung in Schale umfüllen.",
              explanation:
                "Fehler 2: Flaschenhals kommt in Kontakt mit Wundbereich — die Flasche ist danach kontaminiert und darf nicht für andere Patienten verwendet werden. Lösung immer umfüllen.",
              explanationB1:
                "Fehler 2: Die Flasche direkt auf die Wunde — die Flasche ist danach kontaminiert. Immer erst in eine Schale umfüllen.",
            },
          ],
        },
      },
    },

    // Opt 4.7 — Text (beforeafter): Fersenfreistellung (B1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-durch-opt-02-ferse-freilegen",
      phase: 4,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP (2019)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-durch-fersenfreistellung",
      tag: "anatomie",
      displayFormat: "beforeafter",
      bildkategorie: "prozedur",
      imageAlt:
        "Vorher: Ferse liegt auf Matratze auf. Nachher: Ferse ist durch Kissen freigestellt und hat keinen Auflagedruck.",
      bildhinweis:
        "Before and after illustration, left side heel resting on mattress with pressure point marked, right side heel elevated by pillow completely offloaded, clinical medical illustration, copic marker sketch, absolutely no text no labels no words",
      contentC1: {
        title: "Warum müssen Fersen freigestellt werden?",
        body: "Weichlagerungsmatratzen entlasten das Sakrum gut — aber die Fersen bleiben ein Prädilektionsort für Dekubitus. Die Matratze gibt dort weniger nach (Ferse = kleine Fläche, hoher lokaler Druck). Fersenfreistellung durch Kissen unter dem Unterschenkel ist deshalb unabhängig von der Sakrum-Entlastung notwendig. Fersen-Dekubitus ist der zweithäufigste Ort nach dem Sakrum. Quelle: (NPUAP/EPUAP 2019)",
        glossarBegriffe: ["Fersenfreistellung", "Prädilektionsstelle"],
      },
      contentB1: {
        title: "Warum Fersen freistellen?",
        body: "Die Weich-Matratze hilft am Steißbein. Aber an den Fersen hilft sie nicht genug. Die Ferse ist klein — viel Druck auf wenig Fläche. Deshalb: Kissen unter den Unterschenkel. Dann haben die Fersen keinen Druck. Fersen-Dekubitus ist nach dem Steißbein am häufigsten.",
        glossarBegriffe: [],
      },
    },
  ],
  geschaetzteDauer: 22,
};
