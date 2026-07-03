// CE-06 Situation „Herr Wagner — Reanimation auf Normalstation"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt Lernergebnisse: CE06-LE1-W1 (BLS/ALS/AED/Kammerflimmern/KPR-Indikation),
//   CE06-LE1-K2 (lebenserhaltende Sofortmaßnahmen), CE06-LE1-E1 (eigene Gefühle reflektieren).
// Grounding: specs/ce-06/kernfakten/reanimation-bls.md + notfallassessment.md (Verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 14; Genzwürker/Hinkelbein, Fallbuch (4. Aufl.); ERC-Leitlinien 2021.

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_WAGNER_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-wagner-erkennen",
  phase: "erkennen",
  titel: "Der Zusammenbruch",
  titelB1: "Herr Wagner fällt um",
  kontext:
    "Du kommst mit dem Frühdienst auf den Flur, als Herr Wagner ein paar Meter vor dir zu Boden geht. Du bist in Sekunden bei ihm. Er liegt auf dem Rücken, reagiert nicht, als du ihn ansprichst. Du beugst dich über sein Gesicht: Der Brustkorb hebt sich kaum, und alle paar Sekunden ringt er nach einem einzelnen, schnappenden Atemzug.",
  kontextB1:
    "Du kommst auf den Flur. Herr Wagner fällt vor dir um. Du bist sofort bei ihm. Er liegt auf dem Rücken und reagiert nicht, als du ihn ansprichst. Sein Brustkorb hebt sich kaum. Alle paar Sekunden macht er einen einzelnen, schnappenden Atemzug.",
  kernSteps: [
    {
      stepId: "ce06-wagner-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (Erkennen des Herz-Kreislauf-Stillstands)", "ERC 2021"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-schnappatmung",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-01", "F-02", "F-09"],
      contentC1: {
        title: "Atmet er noch?",
        body: "Herr Wagner reagiert nicht auf Ansprache und Rütteln an den Schultern. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug. Wie wertest du diese Atmung?",
        glossarBegriffe: ["Schnappatmung (agonale Atmung)", "Herz-Kreislauf-Stillstand"],
      },
      contentB1: {
        title: "Atmet er noch?",
        body: "Herr Wagner reagiert nicht. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug. Was bedeutet diese Atmung?",
        glossarBegriffe: ["Schnappatmung (= einzelne schnappende Atemzüge)"],
      },
      question: {
        fragetext: "Wie wertest du die schnappende Atmung von Herrn Wagner?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Er atmet ja noch — ich lege ihn in die stabile Seitenlage und beobachte ihn.",
            isCorrect: false,
            explanation:
              "Ein gefährlicher Trugschluss. Schnappatmung (agonale Atmung) ist KEINE normale Atmung — sie tritt kurz nach dem Herz-Kreislauf-Stillstand auf. Wer sie als 'atmet noch' deutet und in die Seitenlage legt, verliert die entscheidenden Minuten. Bei fehlender Reaktion UND fehlender normaler Atmung gilt: Herz-Kreislauf-Stillstand.",
            explanationB1:
              "Falsch. Schnappatmung ist keine normale Atmung. Sie kommt kurz nach dem Herzstillstand. Wenn du ihn jetzt nur zur Seite legst, verlierst du wertvolle Zeit.",
          },
          {
            text: "Keine Reaktion und keine normale Atmung — ich gehe von einem Herz-Kreislauf-Stillstand aus und handle sofort.",
            isCorrect: true,
            explanation:
              "Richtig. Reagiert der Patient nicht und ist keine normale Atmung vorhanden, muss ein Herz-Kreislauf-Stillstand angenommen werden — vereinzelte, schnappende Atemzüge zählen ausdrücklich NICHT als normale Atmung. Genau jetzt beginnt die Rettungskette.",
            explanationB1:
              "Richtig. Keine Reaktion und keine normale Atmung heißt: Herz-Kreislauf-Stillstand. Schnappatmung zählt nicht als Atmung. Jetzt sofort handeln.",
          },
          {
            text: "Ich bin unsicher — ich hole erst ein Stethoskop und höre die Lunge ab, um sicherzugehen.",
            isCorrect: false,
            explanation:
              "Nein. Beim Verdacht auf Herz-Kreislauf-Stillstand zählt jede Sekunde. Die Prüfung beschränkt sich bewusst auf Bewusstsein und Atmung und muss rasch ablaufen. Ein Stethoskop zu holen kostet Zeit, die dem Gehirn fehlt — im Zweifel wird reanimiert.",
            explanationB1:
              "Nein. Bei Herz-Kreislauf-Stillstand zählt jede Sekunde. Du prüfst nur kurz Bewusstsein und Atmung. Kein Stethoskop holen. Im Zweifel: reanimieren.",
          },
        ],
      },
    },
    {
      stepId: "ce06-wagner-erk-02",
      phase: 1,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (Pulskontrolle nicht mehr generell empfohlen)", "ERC 2021"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-wagner-keine-pulskontrolle",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-03"],
      contentC1: {
        title: "Erst den Puls tasten?",
        body: "Eine Kollegin ruft dir zu: 'Fühl erst mal, ob er noch einen Puls hat!' Stimmt dieser Rat?",
        glossarBegriffe: ["Karotispuls"],
      },
      contentB1: {
        title: "Erst den Puls tasten?",
        body: "Eine Kollegin ruft: 'Fühl erst, ob er noch einen Puls hat!' Ist das richtig?",
      },
      question: {
        fragetext: "Bewerte die Aussage: Vor Reanimationsbeginn muss man den Puls tasten.",
        trueFalseCards: [
          {
            statement: "Bevor ich mit der Reanimation beginne, muss ich zuerst sicher den Puls tasten.",
            isTrue: false,
            explanation:
              "Falsch. Die Pulskontrolle vor Beginn der Wiederbelebung wird auch für professionelle Helfer nicht mehr generell empfohlen — sie ist fehleranfällig und kostet wertvolle Zeit. Bei fehlender Reaktion und fehlender normaler Atmung wird sofort reanimiert. Nur ein Erfahrener darf gleichzeitig kurz (max. 10 Sek.) den Karotispuls tasten, während er nach anderen Lebenszeichen sucht. (Einfach gesagt: Keine Reaktion + keine normale Atmung = sofort reanimieren.)",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_WAGNER_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-wagner-alarmieren",
  phase: "alarmieren",
  titel: "Hilfe holen — aber richtig",
  titelB1: "Hilfe holen",
  kontext:
    "Du kniest bei Herrn Wagner. Am Ende des Flurs kommt gerade ein Zivi mit einem Wäschewagen um die Ecke, aus Zimmer 5 tritt eine Pflegeschülerin. Der Defibrillator hängt 30 Meter entfernt am Stützpunkt. Sekunden zählen.",
  kontextB1:
    "Du kniest bei Herrn Wagner. Am Flurende steht ein Zivi mit Wäschewagen, aus Zimmer 5 kommt eine Schülerin. Der Defibrillator hängt 30 Meter weg. Jede Sekunde zählt.",
  kernSteps: [
    {
      stepId: "ce06-wagner-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (Notruf/Notfallteam; Einzelhelfer bleibt)", "ERC 2021"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-alarmieren-delegieren",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-04", "F-05"],
      contentC1: {
        title: "Wer macht was — und wer bleibt?",
        body: "Du bist bei Herrn Wagner, zwei Personen sind in Rufweite, der Defi ist 30 m weg. Wie organisierst du die nächsten Sekunden am sinnvollsten?",
        glossarBegriffe: ["Notfallteam / Code Blue", "Phone first"],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Du bist bei Herrn Wagner. Zwei Personen sind in der Nähe. Der Defi ist 30 m weg. Wie organisierst du die nächsten Sekunden?",
        glossarBegriffe: ["Notfallteam (= Reanimationsteam)"],
      },
      question: {
        fragetext: "Wie handelst du in den ersten Sekunden am sinnvollsten?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich spreche beide gezielt an: 'Sie rufen das Notfallteam — Zimmer 7, Reanimation!' und 'Sie holen den Defibrillator vom Stützpunkt!' — und bleibe selbst bei Herrn Wagner.",
            isCorrect: true,
            explanation:
              "Richtig. Nach dem Erkennen wird sofort das Notfallteam alarmiert (Priorität vor allen weiteren Maßnahmen). Weil zwei Helfer da sind, delegierst du klar und namentlich — 'irgendjemand' fühlt sich nicht angesprochen. Du selbst bleibst beim Patienten und beginnst die Herzdruckmassage.",
            explanationB1:
              "Richtig. Du rufst sofort das Notfallteam über andere Personen. Du sprichst beide klar an: 'Sie rufen das Team!', 'Sie holen den Defi!' Du selbst bleibst bei Herrn Wagner und beginnst die Herzdruckmassage.",
          },
          {
            text: "Ich laufe selbst schnell zum Stützpunkt, hole den Defi und das Notfalltelefon — das geht am schnellsten.",
            isCorrect: false,
            explanation:
              "Nein. Ein einzelner Helfer soll den Patienten nach dem Notruf NICHT alleine lassen, um einen AED zu holen, sondern sofort mit der Herzdruckmassage beginnen. Hier sind sogar zwei Helfer da — dann schickst du sie, statt selbst wegzulaufen. Jede Sekunde ohne Kompression ist 'No-Flow'-Zeit fürs Gehirn.",
            explanationB1:
              "Nein. Du darfst Herrn Wagner nicht allein lassen, um den Defi zu holen. Du hast zwei Helfer — schick sie los. Du bleibst und drückst. Jede Sekunde ohne Herzdruckmassage schadet dem Gehirn.",
          },
          {
            text: "Ich rufe laut 'Hilfe!' in den Flur und warte, bis jemand von selbst reagiert und das Team ruft.",
            isCorrect: false,
            explanation:
              "Zu unbestimmt. Ein ungerichtetes 'Hilfe!' führt oft dazu, dass sich niemand zuständig fühlt (Zuschauer-Effekt). Du musst konkrete Personen ansprechen und ihnen konkrete Aufträge geben — und parallel selbst mit der Herzdruckmassage beginnen, nicht abwarten.",
            explanationB1:
              "Zu unklar. Bei einem allgemeinen 'Hilfe!' fühlt sich oft niemand zuständig. Sprich einzelne Personen direkt an und gib klare Aufträge. Und fang selbst sofort mit der Herzdruckmassage an.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Demo-Wow: Branching unter Zeitdruck)
export const CE06_SIT_WAGNER_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-wagner-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Herzdruckmassage und der Schock",
  titelB1: "Herzdruckmassage und der Defi",
  kontext:
    "Das Notfallteam ist alarmiert, der Defibrillator unterwegs. Herr Wagner liegt auf dem harten Flurboden — ideal für die Herzdruckmassage. Jetzt zählt jede Sekunde und jede Handbewegung.",
  kontextB1:
    "Das Notfallteam ist gerufen, der Defi kommt. Herr Wagner liegt auf dem harten Boden — gut für die Herzdruckmassage. Jetzt zählt jede Sekunde.",
  kernSteps: [
    {
      stepId: "ce06-wagner-erm-01",
      phase: 3,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.3.2 (Herzdruckmassage: Druckpunkt, Tiefe, Frequenz, 30:2)", "ERC 2021"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce06-wagner-hdm-technik",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-06", "F-07", "F-08"],
      contentC1: {
        title: "Herzdruckmassage — die richtige Reihenfolge",
        body: "Bring die Schritte für den Start der Herzdruckmassage beim Erwachsenen in die richtige Reihenfolge. Die Technik ist nicht beliebig — sie entscheidet über die Durchblutung des Gehirns.",
        glossarBegriffe: ["Druckpunkt", "Thoraxkompression", "30:2"],
      },
      contentB1: {
        title: "Herzdruckmassage — die Reihenfolge",
        body: "Bring die Schritte für den Start der Herzdruckmassage in die richtige Reihenfolge.",
        glossarBegriffe: ["Druckpunkt (= wo du drückst)", "30:2 (= 30-mal drücken, 2-mal beatmen)"],
      },
      question: {
        fragetext: "Sortiere die Schritte für den Start der Herzdruckmassage beim Erwachsenen.",
        sortItems: [
          "Druckpunkt aufsuchen: Mitte des Brustkorbs (untere Hälfte des Brustbeins)",
          "Einen Handballen auf den Druckpunkt legen, den zweiten Handballen auf den Handrücken der unteren Hand, Finger verschränkt",
          "Mit gestreckten Armen senkrecht 5–6 cm tief eindrücken",
          "Nach jeder Kompression den Brustkorb vollständig entlasten (Hände bleiben aufliegen)",
          "Im Takt von 100–120 Kompressionen pro Minute drücken",
          "Nach 30 Kompressionen 2 Beatmungen geben (Verhältnis 30:2), dann sofort weiter",
        ],
      },
    },
    {
      stepId: "ce06-wagner-erm-02",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: [
        "Pflege heute 2019, Kap. 14.3 (AED, Defibrillation, Sicherheit)",
        "Genzwürker/Hinkelbein 2019 (Kammerflimmern, Defibrillation)",
        "ERC 2021",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-wagner-aed-schock",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-11", "F-05"],
      contentC1: {
        title: "Der AED sagt: „Schock empfohlen.“",
        body: "Die Schülerin bringt den AED. Du klebst die Elektroden auf (rechts unterhalb des Schlüsselbeins, links seitlich unter der Achsel), während eine Kollegin weiter drückt. Der AED analysiert und sagt mit ruhiger Stimme: \"Schock empfohlen. Laden.\" Alle sind angespannt, die Kollegin hat noch die Hände auf dem Brustkorb. Was tust du in diesem Moment?",
        glossarBegriffe: ["AED (automatisierter externer Defibrillator)", "Kammerflimmern", "defibrillierbarer Rhythmus"],
      },
      contentB1: {
        title: "Der AED sagt: „Schock empfohlen.“",
        body: "Die Schülerin bringt den AED. Du klebst die Elektroden auf. Eine Kollegin drückt noch. Der AED sagt: \"Schock empfohlen. Laden.\" Die Kollegin hat noch die Hände auf dem Brustkorb. Was tust du?",
        glossarBegriffe: ["AED (= Defi, der selbst analysiert)", "Kammerflimmern (= gefährliche Herzrhythmusstörung)"],
      },
      question: {
        fragetext: "Der AED empfiehlt den Schock — was tust du?",
        branchingOptions: [
          {
            text: "Ich sage laut und deutlich 'Alle weg vom Patienten!', prüfe mit einem Blick, dass niemand ihn berührt, löse dann den Schock aus — und lasse sofort danach die Herzdruckmassage weiterlaufen.",
            isCorrect: true,
            feedback:
              "Genau richtig — und in der richtigen Reihenfolge. Kammerflimmern ist ein defibrillierbarer Rhythmus, der Schock ist die kausale Therapie. Vor jeder Schockabgabe MUSS sichergestellt sein, dass niemand den Patienten berührt (Eigenschutz und korrekte Energieabgabe) — deshalb die klare Ansage 'Alle weg!' plus Sichtkontrolle. Und weil jede Pause 'No-Flow'-Zeit ist, wird unmittelbar nach dem Schock ohne Puls-Check sofort weiter komprimiert. Vorbildliche Team-Führung.",
            feedbackB1:
              "Genau richtig. Kammerflimmern braucht den Schock. Vor dem Schock musst du sicher sein, dass niemand den Patienten berührt — darum sagst du laut 'Alle weg!' und schaust hin. Direkt nach dem Schock geht die Herzdruckmassage sofort weiter. Sehr gut geführt.",
          },
          {
            text: "Ich drücke sofort den Schock-Knopf, damit keine Zeit verloren geht — die Kollegin zieht ihre Hände schon rechtzeitig weg.",
            isCorrect: false,
            feedback:
              "Der Gedanke, keine Zeit zu verlieren, ist richtig — aber die Ausführung ist gefährlich. Wenn beim Auslösen des Schocks noch jemand den Patienten berührt, kann diese Person selbst einen Stromschlag bekommen, und die Energieabgabe wird gestört. Deshalb gilt ausnahmslos: erst die klare Ansage 'Alle weg vom Patienten!' und ein Blick zur Kontrolle, DANN der Schock. Diese zwei Sekunden sind Pflicht, keine Verzögerung.",
            feedbackB1:
              "Du willst keine Zeit verlieren — das ist gut gedacht. Aber so ist es gefährlich: Wenn beim Schock noch jemand den Patienten berührt, bekommt diese Person einen Stromschlag. Darum immer zuerst laut 'Alle weg!' sagen und hinschauen, dann erst den Schock. Diese zwei Sekunden sind Pflicht.",
          },
          {
            text: "Ich ignoriere die Schock-Empfehlung und lasse einfach weiter Herzdruckmassage machen — drücken ist am wichtigsten.",
            isCorrect: false,
            feedback:
              "Herzdruckmassage IST enorm wichtig — aber sie ersetzt bei Kammerflimmern nicht den Schock. Der AED analysiert den Rhythmus und empfiehlt den Schock nur, wenn er wirklich indiziert ist (defibrillierbarer Rhythmus). Ohne Defibrillation bleibt das Kammerflimmern bestehen. Richtig ist: 'Alle weg!', Schock auslösen, sofort weiter mit der Herzdruckmassage — beides zusammen, nicht das eine statt des anderen.",
            feedbackB1:
              "Herzdruckmassage ist sehr wichtig — aber sie ersetzt den Schock nicht. Bei Kammerflimmern hilft nur der Schock, damit das Herz wieder ordentlich schlägt. Richtig ist: 'Alle weg!', Schock, dann sofort weiter drücken. Beides zusammen.",
          },
          {
            text: "Ich taste erst noch einmal den Puls, um zu prüfen, ob der Schock wirklich nötig ist.",
            isCorrect: false,
            feedback:
              "Nein — das ist doppelt problematisch. Erstens hat der AED den Rhythmus bereits analysiert und den Schock empfohlen; deine Pulskontrolle ändert daran nichts und wird auch nicht empfohlen. Zweitens unterbrichst du dafür die Herzdruckmassage und verzögerst den Schock — beides kostet dem Gehirn wertvolle Zeit. Vertraue der Analyse: 'Alle weg!', Schock, sofort weiter drücken.",
            feedbackB1:
              "Nein. Der AED hat den Rhythmus schon geprüft und den Schock empfohlen. Puls tasten hilft nicht und kostet Zeit. Vertraue dem AED: 'Alle weg!', Schock, sofort weiter drücken.",
          },
        ],
      },
    },
    {
      stepId: "ce06-wagner-erm-03",
      phase: 3,
      stepType: "branching",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Pflege heute 2019, Kap. 14.3.2 (Kompressionsqualität, Helferwechsel)", "ERC 2021 (CRM/Team)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-wagner-helferwechsel",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      // Gegroundet auf die Kompressions-QUALITÄT (Tiefe/Entlastung F-06, Frequenz F-07) —
      // genau die leidet bei Ermüdung. Das ~2-Min-Wechselintervall ist ERC-Organisationsempfehlung
      // (quellen), nicht als Verbatim-Normwert im Korpus belegt → nicht als Kernfakt behauptet.
      kernfaktId: ["F-06", "F-07"],
      contentC1: {
        title: "Deine Kraft lässt nach",
        body: "Du drückst jetzt seit fast zwei Minuten. Deine Kompressionen werden spürbar flacher, dein Takt langsamer. Eine ausgeruhte Kollegin kniet bereit auf der anderen Seite. Wie organisierst du den Wechsel, ohne die Herzdruckmassage lange zu unterbrechen?",
        glossarBegriffe: ["Helferwechsel", "Closed-Loop-Kommunikation"],
      },
      contentB1: {
        title: "Deine Kraft lässt nach",
        body: "Du drückst seit fast zwei Minuten. Deine Herzdruckmassage wird flacher und langsamer. Eine ausgeruhte Kollegin ist bereit. Wie wechselt ihr, ohne lange zu unterbrechen?",
        glossarBegriffe: ["Helferwechsel (= die Person, die drückt, wechseln)"],
      },
      question: {
        fragetext: "Deine Kraft lässt nach — wie wechselst du?",
        branchingOptions: [
          {
            text: "Ich kündige den Wechsel klar an ('Wechsel nach den nächsten 30 — du übernimmst rechts'), wir tauschen zügig in der Beatmungspause, die Kollegin drückt sofort in Tiefe und Takt weiter.",
            isCorrect: true,
            feedback:
              "Richtig. Die Herzdruckmassage ermüdet schnell — mit der Zeit werden Kompressionen zu flach und zu langsam, deshalb wird regelmäßig (etwa alle 2 Minuten) gewechselt. Entscheidend ist, den Wechsel anzukündigen (Closed-Loop) und ihn so zu timen, dass die Unterbrechung minimal bleibt. Dass die neue Person sofort wieder 5–6 cm tief und mit 100–120/min drückt, hält die Qualität hoch.",
            feedbackB1:
              "Richtig. Herzdruckmassage macht schnell müde — dann wird sie zu flach und zu langsam. Darum wechselt ihr etwa alle 2 Minuten. Sag den Wechsel klar an und tausche schnell, damit die Pause kurz bleibt. Die Kollegin drückt sofort wieder tief und im Takt weiter.",
          },
          {
            text: "Ich drücke weiter, bis ich wirklich nicht mehr kann — ein Wechsel unterbricht ja die Herzdruckmassage.",
            isCorrect: false,
            feedback:
              "Gut gedacht, dass du Unterbrechungen vermeiden willst — aber der Denkfehler ist, ZU lange durchzuhalten. Ermüdete Kompressionen werden zu flach und zu langsam und pumpen kaum noch Blut; das schadet mehr als ein kurzer, gut geplanter Wechsel. Deshalb regelmäßig (ca. alle 2 Min) wechseln und die Unterbrechung durch klare Ansage kurz halten.",
            feedbackB1:
              "Du willst Unterbrechungen vermeiden — das ist gut. Aber zu lange durchhalten ist falsch: Müde Kompressionen sind zu flach und pumpen kaum Blut. Besser regelmäßig wechseln (ca. alle 2 Min) und den Wechsel kurz halten.",
          },
          {
            text: "Ich höre kurz ganz auf, wir sortieren in Ruhe, wer jetzt was macht, dann fängt die Kollegin neu an.",
            isCorrect: false,
            feedback:
              "Nein — eine längere Pause ist genau das, was vermieden werden muss. Jede Unterbrechung der Herzdruckmassage ist 'No-Flow'-Zeit, in der das Gehirn kein Blut bekommt. Die Rollen klärt ihr sprechend WÄHREND die Kompressionen weiterlaufen; der eigentliche Handwechsel dauert nur Sekunden und wird angekündigt.",
            feedbackB1:
              "Nein. Eine lange Pause ist gefährlich — dann bekommt das Gehirn kein Blut. Ihr klärt die Rollen, während weiter gedrückt wird. Der Handwechsel selbst dauert nur Sekunden.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_WAGNER_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-wagner-uebergeben",
  phase: "uebergeben",
  titel: "Das Notfallteam übernimmt",
  titelB1: "Das Notfallteam kommt",
  kontext:
    "Das Reanimationsteam trifft ein: eine Ärztin, eine Intensivpflegekraft. Sie übernehmen die Reanimation, brauchen aber in Sekunden einen Überblick. Die Ärztin sieht dich an: 'Was haben wir?'",
  kontextB1:
    "Das Reanimationsteam kommt: eine Ärztin und eine Intensivpflegekraft. Sie übernehmen. Die Ärztin fragt dich: 'Was haben wir?'",
  kernSteps: [
    {
      stepId: "ce06-wagner-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leonard et al. 2004 (SBAR)", "Pflege heute 2019, Kap. 14 (Übergabe im Notfall)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-sbar-uebergabe",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "Übergabe in 20 Sekunden — SBAR",
        body: "Die Ärztin braucht sofort das Wichtigste, strukturiert. Welche Übergabe folgt dem SBAR-Schema (Situation – Background – Assessment – Recommendation) am besten?",
        glossarBegriffe: ["SBAR", "strukturierte Übergabe"],
      },
      contentB1: {
        title: "Übergabe mit SBAR",
        body: "Die Ärztin braucht sofort das Wichtigste. Welche Übergabe folgt dem SBAR-Schema am besten?",
        glossarBegriffe: ["SBAR (= Situation, Background, Assessment, Recommendation)"],
      },
      question: {
        fragetext: "Welche Übergabe ist nach SBAR strukturiert und vollständig?",
        mcVariant: "standard",
        optionen: [
          {
            text: "\"Herr Wagner, 67, kollabiert im Flur um 08:15 (S). Aufnahme wegen instabiler Angina, zwei Infarkte in der Vorgeschichte, Vorhofflimmern unter Apixaban (B). Keine Reaktion, keine normale Atmung, Herzdruckmassage seit 08:16, ein Schock um 08:19 (A). Bitte i.v.-Zugang und Übernahme der Reanimationsleitung (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Das ist SBAR in Reinform: Situation (wer, was, wann), Background (relevante Vorgeschichte, hier besonders die Antikoagulation), Assessment (aktueller Zustand + bereits Getanes mit Zeiten), Recommendation (was jetzt gebraucht wird). So bekommt das Team in Sekunden ein vollständiges, priorisiertes Bild.",
            explanationB1:
              "Richtig. Das ist SBAR: Situation (wer/was/wann), Background (Vorgeschichte), Assessment (Zustand jetzt + was schon getan wurde), Recommendation (was jetzt gebraucht wird). Das Team versteht in Sekunden alles Wichtige.",
          },
          {
            text: "\"Also, das ist Herr Wagner, ein ganz netter Mann, ehemaliger Fernfahrer, der wollte eigentlich nur zur Toilette und dann ist das passiert, ich war total erschrocken…\"",
            isCorrect: false,
            explanation:
              "Im Notfall unbrauchbar. Die Erzählung enthält viel Beiläufiges (Biografie, eigene Gefühle) und nicht das medizinisch Entscheidende. SBAR zwingt zur Priorisierung: erst die Situation, dann die relevante Vorgeschichte, der aktuelle Befund mit Zeiten und die konkrete Bitte. Persönliches gehört später ins Debriefing, nicht in die Sekunden-Übergabe.",
            explanationB1:
              "Im Notfall unbrauchbar. Das sind zu viele Nebensachen (Biografie, eigene Gefühle) und nicht das Wichtige. SBAR bringt Ordnung: Situation, Vorgeschichte, Zustand mit Zeiten, Bitte. Persönliches kommt später beim Debriefing.",
          },
          {
            text: "\"Kammerflimmern, ein Schock, machen Sie weiter.\" — kurz und knapp, mehr braucht das Team nicht.",
            isCorrect: false,
            explanation:
              "Zu knapp. Der aktuelle Rhythmus und der Schock sind Teil des Assessments, aber es fehlen Situation (wer/wann), der entscheidende Background (Apixaban! Infarkt-Anamnese) und eine klare Recommendation. Gerade die Antikoagulation ist für die weiteren Entscheidungen wichtig. SBAR ist knapp, aber vollständig.",
            explanationB1:
              "Zu kurz. Es fehlen: wer und wann, die wichtige Vorgeschichte (Apixaban!) und eine klare Bitte. SBAR ist kurz, aber vollständig.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_WAGNER_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-wagner-reflektieren",
  phase: "reflektieren",
  titel: "Danach",
  titelB1: "Danach",
  kontext:
    "Das Team hat Herrn Wagner mit wiederkehrendem Kreislauf auf die Intensivstation verlegt. Auf dem Flur ist es plötzlich still. Die Pflegeschülerin, die den Defi geholt hat, steht an die Wand gelehnt und beginnt zu weinen — es war ihre erste Reanimation.",
  kontextB1:
    "Das Team hat Herrn Wagner auf die Intensivstation gebracht. Sein Kreislauf ist zurück. Auf dem Flur ist es still. Die Schülerin, die den Defi geholt hat, weint — es war ihre erste Reanimation.",
  kernSteps: [
    {
      stepId: "ce06-wagner-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.2",
      quellen: ["Pflege heute 2019, Kap. 14 (Nachbesprechung/Debriefing)", "CE06-LE1-E1 (eigene Gefühle reflektieren)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-wagner-reflexion-belastung",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      contentC1: {
        title: "Was macht das mit dir — und mit dem Team?",
        body: "Eine Reanimation ist auch für erfahrene Pflegende belastend. Die Schülerin weint, und vielleicht spürst auch du das Zittern, das oft erst kommt, wenn die Anspannung abfällt. Reflektiere die Situation.",
        glossarBegriffe: ["Debriefing", "Psychohygiene", "Sekundärbelastung"],
      },
      contentB1: {
        title: "Was macht das mit dir und dem Team?",
        body: "Eine Reanimation belastet auch erfahrene Pflegende. Die Schülerin weint. Vielleicht zitterst auch du, wenn die Anspannung nachlässt. Denke über die Situation nach.",
        glossarBegriffe: ["Debriefing (= Nachbesprechung im Team)"],
      },
      question: {
        fragetext: "Reflektiere die Situation nach der Reanimation.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Wie geht es dir selbst unmittelbar nach der Reanimation — was nimmst du körperlich und gefühlsmäßig wahr? 2) Was sagst oder tust du für die weinende Schülerin (ohne ihr Gefühl kleinzureden)? 3) Warum ist ein Debriefing im Team sinnvoll, und was gehört hinein? 4) Was nimmst du für die nächste Akutsituation mit?",
          placeholder:
            "Unmittelbar danach spüre ich … Zur Schülerin würde ich sagen … Ein Debriefing ist sinnvoll, weil … Für das nächste Mal nehme ich mit …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler eigene Belastungsreaktionen an (Zittern, Anspannungsabfall) statt sie zu übergehen? Reagiert er auf die Schülerin validierend (Gefühl anerkennen, da sein, nicht bagatellisieren wie 'ist doch gut gegangen')? Nennt er den Sinn eines Debriefings (Verarbeitung belastender Situationen, aus dem Ablauf lernen: was lief gut/weniger gut) und ggf. weitere Unterstützung (Kollegin, Supervision, Seelsorge)? Zieht er eine konkrete Konsequenz für die nächste Akutsituation? Lob für eine differenzierte Bloom-5-Reflexion. Niemals abwertend; das Thema ist emotional sensibel.",
        },
      },
    },
    {
      stepId: "ce06-wagner-ref-02",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.2",
      quellen: ["Pflege heute 2019, Kap. 14 (Nachbesprechung/Debriefing; CIRS)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-debriefing-cirs",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      // Der klinische Kern des Defi-Standort-Themas ist „AED so früh wie möglich" (F-11) —
      // die CIRS/Just-Culture-Ebene ist Systemsicherheit (quellen), kein Verbatim-Normwert.
      kernfaktId: ["F-11"],
      contentC1: {
        title: "Der lange Weg des Defibrillators",
        body: "In der Nachbesprechung fällt auf: Der Defibrillator hing 30 Meter entfernt am Stützpunkt — das hat wertvolle Sekunden gekostet. Wie gehst du damit um?",
        glossarBegriffe: ["CIRS (Critical Incident Reporting System)", "Debriefing"],
      },
      contentB1: {
        title: "Der Defi war weit weg",
        body: "In der Nachbesprechung fällt auf: Der Defi hing 30 Meter weg — das hat Sekunden gekostet. Wie gehst du damit um?",
        glossarBegriffe: ["CIRS (= System, um Beinahe-Fehler zu melden)"],
      },
      question: {
        fragetext: "Wie gehst du mit dem langen Defi-Weg um?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich spreche es im Debriefing an und schreibe eine CIRS-Meldung.",
            isCorrect: true,
            explanation:
              "Richtig. Ein CIRS dient dem Lernen aus kritischen Ereignissen und Beinahe-Fehlern — anonym und ohne Schuldzuweisung. Ein zu weit entfernter Defibrillator ist ein Systemproblem, das man strukturell lösen kann (näherer Standort). Genau das ist konstruktive Nachbesprechungskultur.",
            explanationB1:
              "Richtig. Ein CIRS hilft, aus kritischen Situationen zu lernen — ohne Schuld zu verteilen. Ein zu weit entfernter Defi ist ein Systemproblem, das man lösen kann. Das ist gute Nachbesprechung.",
          },
          {
            text: "Nichts — es ist ja alles gut gegangen, und der Standort ist nun mal so vorgegeben.",
            isCorrect: false,
            explanation:
              "Nein. Dass es diesmal gut ging, heißt nicht, dass das System sicher ist ('Beinahe-Fehler'). Wer solche Punkte nicht meldet, verschenkt die Chance, die Versorgung für den nächsten Notfall zu verbessern. Standorte von Notfallgeräten sind veränderbar.",
            explanationB1:
              "Nein. Dass es gut ging, heißt nicht, dass alles sicher ist. Wenn du es nicht meldest, kann es beim nächsten Mal schlechter ausgehen. Der Standort lässt sich ändern.",
          },
          {
            text: "Ich beschwere mich bei der Schülerin, dass sie zu langsam gelaufen ist.",
            isCorrect: false,
            explanation:
              "Falsch und ungerecht. Die Schülerin ist gelaufen, so schnell sie konnte — das Problem ist der Standort, nicht sie. Schuldzuweisungen zerstören die Vertrauens- und Meldekultur, die für Patientensicherheit nötig ist. Sachlich das System verbessern, nicht Personen beschuldigen.",
            explanationB1:
              "Falsch und ungerecht. Die Schülerin ist so schnell gelaufen, wie sie konnte. Das Problem ist der Standort, nicht sie. Schuldzuweisungen zerstören das Vertrauen im Team.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};
