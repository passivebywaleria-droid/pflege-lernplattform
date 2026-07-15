// CE-06 Situation „Frau Lehmann — Sturz mit Kopfverletzung im Pflegeheim"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE1-K1 (Erste-Hilfe bei Wunden, Blutungen, Sturz durchführen).
// Grounding: specs/ce-06/kernfakten/traumatologische-erstversorgung.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 14 (Erste Hilfe), 37.13 (SHT); BGB § 1831 (Fassung ab 2023).
//
// WISSENS-TABS (curriculum-first, Gold-Standard-Aufbau wie Wagner/Ríos): 3 inlineWissen-Tabs,
// jeder VOR/BEI seiner Anwendung, literatur-belegt (F-01..F-08) + paraphrasiert (Abstandstest 0),
// kein Antwort-Step (verschiebt Play-then-Gate nicht):
//  - Tab A „Bewusstlosen prüfen, ohne zu schaden" (Ph.1, vor erk-02) — F-01/02/03/04, Wiederbegegnung Wagner.
//  - Tab B „Blutung stillen und warm halten" (Ph.3, vor erm-01) — F-06/F-07 (+ Licht/Inspektion).
//  - Tab C „‚Zur Sicherheit ans Bett' — die rechtliche Falle" (Ph.3, vor erm-03) — F-08 (FeM §1831).
// KB-Marker aus dem LE1-Schwerpunkt-Set korrigiert: I.4 (primär, Akut-Handeln), II.1, I.2, V.2.
//   (I.4 primär statt II.1-Wand: Erkennen/Erstversorgung ist Akut-Handlungswissen wie bei Wagner/Ríos.)
//
// KRITISCH GEBAUT (Anti-Pattern bewusst nur als FALSCHE Optionen, korrektiv gelehrt):
//  - „gedämpftes Licht" bei Verletzungs-Inspektion → Distraktor; korrekt: Licht voll einschalten.
//  - „Glück gehabt / ist ja nichts passiert" vor Assessment → nicht als Empfehlung.
//  - beidseitiges Bettgitter „zur Sicherheit" ohne Anordnung → Distraktor; korrekt: das ist FeM (§1831).
//  - „unter den Achseln greifen" / Hochziehen → Distraktor.
//  - „Cushing-Trias" NICHT behauptet (Korpus belegt nur Cushing-Syndrom/Nebenniere).
//  - Antikoagulans als Wirkstoff (Apixaban), nicht Markenname.
// MC-Optionen bewusst vergleichbar lang gehalten (Begründung in explanation, nicht im Optionstext).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_LEHMANN_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-lehmann-erkennen",
  phase: "erkennen",
  titel: "Ein dumpfer Schlag in der Nacht",
  titelB1: "Ein Schlag in der Nacht",
  kontext:
    "02:45 Uhr. Du hörst einen dumpfen Schlag und gehst ins Zimmer von Frau Lehmann. Sie liegt auf dem Boden neben dem Bett, an der rechten Stirn blutet eine Platzwunde. Sie bewegt sich, murmelt, hat die Augen halb geöffnet. Auf deine Frage aus dem Türrahmen reagiert sie nicht.",
  kontextB1:
    "02:45 Uhr. Du hörst einen Schlag und gehst ins Zimmer von Frau Lehmann. Sie liegt auf dem Boden neben dem Bett und blutet an der Stirn. Sie bewegt sich und murmelt. Auf deine Frage von der Tür reagiert sie nicht.",
  kernSteps: [
    {
      stepId: "ce06-lehmann-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: [
        "Pflege heute 2019, Kap. 14.6.1 (Bewusstsein prüfen: ansprechen + anfassen)",
        "Kap. 14.6.2 (Lage bei Wirbelsäulenverdacht nicht verändern)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-lehmann-erstcheck",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-01", "F-03"],
      contentC1: {
        title: "Dein erster Schritt am Boden",
        body: "Frau Lehmann liegt am Boden und reagiert nicht auf deine Frage aus der Distanz. Wie gehst du als Erstes vor?",
        glossarBegriffe: ["Bewusstseinsprüfung", "Wirbelsäulenverdacht"],
      },
      contentB1: {
        title: "Dein erster Schritt",
        body: "Frau Lehmann liegt am Boden und reagiert nicht auf deine Frage von der Tür. Was tust du zuerst?",
        glossarBegriffe: ["Bewusstsein prüfen"],
      },
      question: {
        fragetext: "Wie gehst du als Erstes vor?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Hingehen, sie ansprechen UND leicht an der Schulter berühren; dabei belasse ich sie erst einmal in ihrer Lage.",
            isCorrect: true,
            explanation:
              "Richtig. Zur Bewusstseinsprüfung wird angesprochen UND angefasst — gerade bei einer alten, möglicherweise schwerhörigen Frau kann eine fehlende Antwort eine Bewusstseinsstörung nur vortäuschen. Und weil nach einem Sturz eine Wirbelsäulenverletzung nicht ausgeschlossen ist, wird ein reagierender Mensch zunächst in der vorgefundenen Lage belassen — nicht sofort hochgezogen.",
            explanationB1:
              "Richtig. Das nennt man Bewusstseinsprüfung: ansprechen UND anfassen. Sie hört vielleicht schlecht — keine Antwort heißt nicht sofort Bewusstlosigkeit. Nach einem Sturz kann die Wirbelsäule verletzt sein, darum lässt du sie erst in ihrer Lage.",
          },
          {
            text: "Sie schnell hochheben und zurück ins Bett bringen, damit sie nicht auf dem kalten Boden liegt.",
            isCorrect: false,
            explanation:
              "Gut gemeint, aber gefährlich. Nach einem Sturz ist eine Wirbelsäulenverletzung nicht ausgeschlossen — die Lage wird bis zum Eintreffen von Arzt/Rettungsdienst grundsätzlich nicht verändert. Wärme sicherst du durch Zudecken, nicht durch schnelles Hochheben. Zuerst Bewusstsein und Atmung prüfen.",
            explanationB1:
              "Gut gemeint, aber gefährlich. Nach einem Sturz kann die Wirbelsäule verletzt sein — du hebst sie nicht hoch, sondern lässt sie liegen. Gegen die Kälte deckst du sie zu. Zuerst Bewusstsein und Atmung prüfen.",
          },
          {
            text: "Aus der Tür lauter rufen; wenn sie nicht antwortet, ist sie bewusstlos.",
            isCorrect: false,
            explanation:
              "Nicht verlässlich. Eine Schwerhörigkeit kann eine Bewusstseinsstörung vortäuschen — deshalb reicht Rufen aus Distanz nicht. Du musst hingehen, ansprechen UND anfassen, um das Bewusstsein sicher zu prüfen.",
            explanationB1:
              "Nicht sicher. Wenn sie schlecht hört, wirkt sie vielleicht bewusstlos, ist es aber nicht. Du musst hingehen, ansprechen UND anfassen.",
          },
        ],
      },
    },
    {
      // Wissens-Tab A (Gold-Standard, curriculum-first): kommt NACH dem Hook (erk-01) und
      // VOR der Anwendung (erk-02: was die Tablettenliste ändert). Literatur-belegt
      // (F-01/02/03/04, Pflege heute Kap. 14.6/37.13) + paraphrasiert (Abstandstest 0).
      // Kein Antwort-Step → verschiebt das Play-then-Gate nicht.
      stepId: "ce06-lehmann-erk-01b-bewusstlos-check",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE1-Primär-Schwerpunkt (Rahmenlehrplan): Akut-Handlungswissen — nicht geraten.
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.1/14.6.2/37.13.1"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-lehmann-bewusstlos-check",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-01", "F-02", "F-03", "F-04"],
      transition: "Und dann fällt dein Blick auf ihren Medikamentenplan.",
      contentC1: {
        title: "Jemand liegt am Boden — prüfen, ohne zu schaden",
        body: "",
        glossarBegriffe: [
          "Bewusstseinsprüfung",
          "Wirbelsäulenverdacht",
          "Schädel-Hirn-Trauma",
          "en bloc",
        ],
      },
      inlineWissen: {
        bausteinRef: "traumatologische-erstversorgung-bewusstlos-check",
        themaPrimaer: "traumatologische-erstversorgung",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "02:45 Uhr, du kniest neben Frau Lehmann. Sie murmelt, bewegt sich, an der Stirn blutet es. Zwei Reflexe ziehen an dir: sie schnell hochheben und ins Bett, oder noch mal lauter von der Tür rufen. Beide sind falsch. Was stattdessen?",
        storyAufhaengerB1:
          "02:45 Uhr. Du kniest neben Frau Lehmann. Sie murmelt und bewegt sich. An der Stirn blutet es. Zwei Reflexe ziehen an dir: sie schnell hochheben und ins Bett, oder noch mal lauter von der Tür rufen. Beide sind falsch. Was tust du stattdessen?",
        kerntext:
          "Zwei Handgriffe zuerst — beide in Sekunden. Erstens das Bewusstsein prüfen: ansprechen UND anfassen, ein leichtes Rütteln an den Schultern. Das Anfassen ist entscheidend, denn Schwerhörigkeit kann eine Bewusstseinsstörung nur vortäuschen — gerade bei alten oder verwirrten Menschen heißt keine Antwort nicht automatisch bewusstlos. Rufen aus der Tür genügt also nie.\n\nZweitens: Reagiert sie, bleibt sie zunächst dort liegen, wo du sie findest. Nach einem Sturz ist eine Wirbelsäulenverletzung nicht ausgeschlossen, und dann verschlechtert jedes Hochziehen die Lage. Also nicht ins Bett heben — gegen die Kälte deckst du sie zu. Nur wenn eine echte Gefahr am Ort sie zwingt, sich zu bewegen, dann mit vielen Helfern, Kopf und Rumpf als eine Einheit (en bloc), den Kopf nicht beugen und nicht strecken.\n\nUnd der blutende Kopf? Der ist mehr als eine Platzwunde. Ein Schädel-Hirn-Trauma birgt die Gefahr einer Hirnblutung, die sich auch verzögert entwickeln kann — Stunden später. Deshalb ist eine ärztliche Abklärung Pflicht, und eine Verschlechterung des Bewusstseins ist das wichtigste Warnzeichen.",
        kerntextB1:
          "Zwei Handgriffe zuerst — beide in Sekunden. Erstens: das Bewusstsein prüfen. Das heißt: ansprechen UND anfassen, ein leichtes Rütteln an den Schultern. Das Anfassen ist wichtig. Denn wenn jemand schlecht hört, wirkt er vielleicht bewusstlos, ist es aber nicht. Gerade bei alten oder verwirrten Menschen heißt keine Antwort nicht automatisch bewusstlos. Rufen von der Tür reicht also nie.\n\nZweitens: Reagiert sie, dann lass sie erst dort liegen, wo du sie findest. Nach einem Sturz kann die Wirbelsäule verletzt sein. Dann macht jedes Hochziehen die Lage schlimmer. Also hebst du sie nicht ins Bett. Gegen die Kälte deckst du sie zu. Nur bei echter Gefahr am Ort musst du sie bewegen. Dann mit vielen Helfern. Kopf und Rumpf bleiben eine Einheit — das nennt man en bloc. Den Kopf dabei nicht beugen und nicht strecken.\n\nUnd der blutende Kopf? Der ist mehr als eine Platzwunde. Eine schwere Kopfverletzung heißt mit Fachwort Schädel-Hirn-Trauma, kurz SHT. Dabei kann es im Kopf bluten. Diese Blutung kann auch erst Stunden später kommen. Darum muss ein Arzt sie untersuchen. Das wichtigste Warnzeichen ist: Ihr Bewusstsein wird schlechter.",
        faustregel:
          "Ansprechen UND anfassen — keine Antwort heißt nicht bewusstlos. Nach dem Sturz: liegen lassen, zudecken, nicht hochziehen. Kopfverletzung = mögliche (verzögerte) Hirnblutung → ärztlich abklären.",
        faustregelB1:
          "Ansprechen UND anfassen — keine Antwort heißt nicht bewusstlos. Nach dem Sturz: liegen lassen, zudecken, nicht hochziehen. Kopfverletzung = mögliche Blutung im Kopf, auch später → der Arzt muss sie untersuchen.",
        spektrum: [
          {
            patientName: "Schwerhörige Bewohnerin",
            hauptfaktor: "täuscht Bewusstlosigkeit vor",
            kurzbeschreibung:
              "Reagiert nicht auf Rufen aus der Distanz — ist aber wach. Erst hingehen, ansprechen UND anfassen zeigt: sie ist bei Bewusstsein.",
            kurzbeschreibungB1:
              "Sie reagiert nicht, wenn du von weitem rufst — aber sie ist wach. Erst wenn du hingehst, ansprichst UND anfasst, merkst du: Sie ist bei Bewusstsein.",
          },
          {
            patientName: "Frau Lehmann",
            situationsId: "ls-lehmann-sturz-sht",
            hauptfaktor: "SHT unter Blutverdünner",
            kurzbeschreibung:
              "Reagiert, aber Kopf blutet und sie nimmt ein Antikoagulans. In der Lage belassen, zudecken — und trotzdem zwingend in die Klinik.",
            kurzbeschreibungB1:
              "Sie reagiert, aber ihr Kopf blutet und sie nimmt einen Blutverdünner (Fachwort: Antikoagulans). Lass sie liegen, deck sie zu — und trotzdem muss sie in die Klinik.",
          },
          {
            patientName: "Sturz mit Gefahr am Ort",
            hauptfaktor: "Bewegung unvermeidbar",
            kurzbeschreibung:
              "Muss sie doch weg (z.B. akute Gefahr), dann mit vielen Helfern, Kopf und Rumpf en bloc, Kopf nicht beugen/strecken.",
            kurzbeschreibungB1:
              "Muss sie doch weg, zum Beispiel bei akuter Gefahr, dann mit vielen Helfern. Kopf und Rumpf bleiben eine Einheit (en bloc). Den Kopf nicht beugen und nicht strecken.",
          },
        ],
        wiederbegegnung: {
          basisBausteinId: "reanimation-bls-hks-erkennen",
          basisPatient: "Herr Wagner",
          vertiefung:
            "Bei Herrn Wagner fehlten Reaktion UND normale Atmung — das war der Herz-Kreislauf-Stillstand, da wird sofort reanimiert und die Lage bewusst verändert (auf den Rücken, harte Unterlage). Frau Lehmann reagiert und atmet — der Kreislauf läuft. Dann gilt das Gegenteil: möglichst NICHT bewegen, sondern dort lassen, wo du sie vorgefunden hast, weil die Wirbelsäule verletzt sein kann. Der erste Blick ist immer derselbe: Reaktion und Atmung da oder nicht?",
        },
        karteikarte: {
          vorderseite:
            "Frau Lehmann liegt nach einem Sturz am Boden, murmelt, reagiert nicht auf deine Frage von der Tür — was tust du, und darfst du sie hochheben?",
          rueckseite:
            "Hingehen, ansprechen UND anfassen (Schwerhörigkeit täuscht Bewusstlosigkeit vor). Reagiert sie: in der Lage belassen — nach Sturz mögliche Wirbelsäulenverletzung, nicht hochziehen; gegen Kälte zudecken. Kopfverletzung = Gefahr (verzögerter) Hirnblutung → ärztlich abklären.",
          vorderseiteB1:
            "Frau Lehmann liegt nach einem Sturz am Boden. Sie murmelt und reagiert nicht auf deine Frage von der Tür. Was tust du? Darfst du sie hochheben?",
          rueckseiteB1:
            "Hingehen, ansprechen UND anfassen. Wenn jemand schlecht hört, wirkt er bewusstlos, ist es aber nicht. Reagiert sie: liegen lassen — nach dem Sturz kann die Wirbelsäule verletzt sein, also nicht hochziehen. Gegen die Kälte zudecken. Kopfverletzung = mögliche Blutung im Kopf, auch später → der Arzt muss sie untersuchen.",
        },
      },
    },
    {
      stepId: "ce06-lehmann-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 37.13 (SHT — Gefahr Hirnblutung), Kap. 12 (Antikoagulation/Blutungsgefahr)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-lehmann-antikoagulation",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-04", "F-05"],
      contentC1: {
        title: "Was die Tablettenliste ändert",
        body: "Frau Lehmann ist ansprechbar, aber verwirrt. Beim Blick auf ihren Medikamentenplan siehst du: Apixaban (ein Blutgerinnungshemmer). Warum ist das jetzt entscheidend?",
        glossarBegriffe: ["Antikoagulation", "intrakranielle Blutung", "Schädel-Hirn-Trauma"],
      },
      contentB1: {
        title: "Was die Tabletten ändern",
        body: "Frau Lehmann ist ansprechbar, aber verwirrt. Auf ihrem Medikamentenplan steht Apixaban — ein Blutverdünner. Warum ist das jetzt wichtig?",
        glossarBegriffe: ["Blutverdünner (= Antikoagulans)"],
      },
      question: {
        fragetext: "Warum ist der Blutverdünner jetzt entscheidend?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Er erhöht das Blutungsrisiko — ein Kopftrauma kann darunter (auch verzögert) im Schädel bluten, selbst wenn es äußerlich harmlos wirkt.",
            isCorrect: true,
            explanation:
              "Richtig. Blutgerinnungshemmende Arzneimittel erhöhen die Blutungsgefahr. In Kombination mit einem Schädel-Hirn-Trauma droht eine intrakranielle Blutung, die sich auch verzögert (Stunden später) entwickeln kann. Deshalb ist eine ärztliche Abklärung mit Bildgebung (CT) zwingend — unabhängig davon, wie 'klein' die Wunde aussieht.",
            explanationB1:
              "Richtig. Blutverdünner erhöhen die Blutungsgefahr. Gerade bei diesem Kopftrauma — einem Schädel-Hirn-Trauma — droht eine Blutung im Schädel, auch erst Stunden später. Darum muss sie in die Klinik (CT), egal wie klein die Wunde aussieht.",
          },
          {
            text: "Er ist jetzt nicht relevant — solange die Wunde äußerlich klein ist, kann nichts Ernstes passieren.",
            isCorrect: false,
            explanation:
              "Ein gefährlicher Trugschluss. Gerade unter Blutverdünnung sagt eine kleine äußere Wunde nichts über eine mögliche Blutung IM Schädel aus. Die intrakranielle Blutung ist die eigentliche Gefahr und kann verzögert auftreten — die Antikoagulation macht den Sturz zum Notfall.",
            explanationB1:
              "Falsch. Unter Blutverdünnung sagt eine kleine Wunde nichts über eine Blutung im Kopf aus. Die kann verzögert kommen — der Blutverdünner macht den Sturz zum Notfall.",
          },
          {
            text: "Man muss den Blutverdünner sofort selbst absetzen, dann ist die Gefahr gebannt.",
            isCorrect: false,
            explanation:
              "Nein. Das eigenmächtige Absetzen eines Antikoagulans ist keine Erste-Hilfe-Maßnahme und ärztliche Entscheidung (das Medikament schützt vor Schlaganfall bei Vorhofflimmern). Deine Aufgabe ist, das Blutungsrisiko zu erkennen und die Klinikeinweisung zu veranlassen — nicht, die Medikation zu ändern.",
            explanationB1:
              "Nein. Den Blutverdünner selbst abzusetzen ist nicht deine Aufgabe — das entscheidet der Arzt. Du musst die Gefahr erkennen und für die Klinik sorgen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_LEHMANN_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-lehmann-alarmieren",
  phase: "alarmieren",
  titel: "Wer muss kommen?",
  titelB1: "Wer muss kommen?",
  kontext:
    "Frau Lehmann ist wach und atmet, wirkt aber verwirrter als sonst. Blutung an der Stirn, Blutverdünner, Sturz mit möglichem Schädel-Hirn-Trauma. Deine Kollegin ist bei einem anderen Bewohner.",
  kontextB1:
    "Frau Lehmann ist wach und atmet, aber sie ist verwirrter als sonst. Stirn blutet, Blutverdünner, Sturz mit möglichem Kopftrauma. Deine Kollegin ist bei einem anderen Bewohner.",
  kernSteps: [
    {
      stepId: "ce06-lehmann-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 37.13 (SHT + Antikoagulation → Klinik)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-lehmann-alarmieren",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-04", "F-05"],
      contentC1: {
        title: "Abwarten oder Notruf?",
        body: "Sie ist ja wieder ansprechbar — reicht es, sie zu beobachten und morgen den Hausarzt zu rufen? Wie entscheidest du?",
        glossarBegriffe: ["Notruf 112", "Klinikeinweisung"],
      },
      contentB1: {
        title: "Abwarten oder Notruf?",
        body: "Sie ist ja wieder wach — reicht es, sie zu beobachten und morgen den Hausarzt zu rufen? Wie entscheidest du?",
        glossarBegriffe: ["Notruf 112"],
      },
      question: {
        fragetext: "Wie entscheidest du beim Alarmieren?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Jetzt den Rettungsdienst (112) rufen — Sturz mit Kopftrauma unter Blutverdünner gehört umgehend in die Klinik.",
            isCorrect: true,
            explanation:
              "Richtig. Ein Schädel-Hirn-Trauma unter Antikoagulation ist eine Indikation zur sofortigen Klinikeinweisung, auch wenn die Patientin (noch) ansprechbar ist — die gefährliche Blutung kann sich verzögert entwickeln. Parallel Heimarzt/ärztlichen Bereitschaftsdienst und die bevollmächtigte Tochter informieren.",
            explanationB1:
              "Richtig. Ein Schädel-Hirn-Trauma unter Blutverdünner ist eine klare Indikation für die Klinik — ein eindeutiger Grund. Das gilt sofort, auch wenn sie wach ist. Die Blutung kann später kommen. Daneben den Arzt und die Tochter informieren.",
          },
          {
            text: "Sie beobachten und den Hausarzt am Morgen rufen — solange sie wach bleibt, ist es nicht dringend.",
            isCorrect: false,
            explanation:
              "Gefährlich. Unter Blutverdünnung kann eine intrakranielle Blutung mit Stunden Verzögerung lebensbedrohlich werden — bis zum Morgen zu warten kann zu spät sein. 'Wach' schließt eine sich entwickelnde Blutung nicht aus. Hier ist der Notruf zwingend.",
            explanationB1:
              "Gefährlich. Unter Blutverdünner kann die Blutung Stunden später lebensgefährlich werden. Bis zum Morgen warten kann zu spät sein. Hier musst du 112 rufen.",
          },
          {
            text: "Erst die Kollegin fragen, ob das wirklich nötig ist, und solange nichts veranlassen.",
            isCorrect: false,
            explanation:
              "Zu zögerlich. Absprache im Team ist gut, aber sie darf die Alarmierung nicht verzögern: Die Indikation (SHT + Antikoagulation) ist eindeutig. Du kannst die Kollegin einbinden (z.B. Tochter informieren), triffst die Notruf-Entscheidung aber ohne Zeitverlust.",
            explanationB1:
              "Zu zögerlich. Absprache ist gut, aber sie darf den Notruf nicht verzögern. Die Lage ist eindeutig: 112. Die Kollegin kann helfen, z.B. die Tochter informieren.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Anti-Pattern-Fallen + Branching)
export const CE06_SIT_LEHMANN_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-lehmann-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Versorgen, sichern — nichts falsch machen",
  titelB1: "Versorgen und sichern",
  kontext:
    "Der Rettungsdienst ist alarmiert und unterwegs. Frau Lehmann liegt am Boden, die Stirn blutet, sie wird zunehmend unruhig. Jetzt zählt richtige Erstversorgung — und kein Fehler aus Routine.",
  kontextB1:
    "Der Rettungsdienst kommt. Frau Lehmann liegt am Boden, die Stirn blutet, sie wird unruhig. Jetzt zählt die richtige Erstversorgung.",
  kernSteps: [
    {
      // Wissens-Tab B (curriculum-first): kommt VOR erm-01 — der Schüler versteht
      // Blutstillung + Licht-fürs-Sehen + Wärmeerhalt, BEVOR er die Erstversorgung in
      // erm-01 anwendet. Literatur-belegt (F-06/F-07, Pflege heute Kap. 14.4/14.5;
      // Licht/Inspektion aus ABCDE) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-lehmann-erm-00b-blutstillung",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE1-Primär-Schwerpunkt (Rahmenlehrplan): Erstversorgung ist Akut-Handlungswissen.
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.4/14.5"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-lehmann-blutstillung-wissen",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-06", "F-07"],
      transition: "Zurück zu Frau Lehmann: die Stirn blutet noch.",
      contentC1: {
        title: "Blutung stillen und warm halten",
        body: "",
        glossarBegriffe: [
          "sterile Kompresse",
          "Druckverband",
          "Wärmeerhalt",
        ],
      },
      inlineWissen: {
        bausteinRef: "traumatologische-erstversorgung-blutstillung",
        themaPrimaer: "traumatologische-erstversorgung",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Der Rettungsdienst ist unterwegs, die Stirn blutet weiter, im Zimmer brennt nur das gedämpfte Nachtlicht. Dein Impuls: schnell irgendetwas auf die Wunde drücken. Aber womit, wie fest — und reicht dieses Licht überhaupt, um zu sehen, was da ist?",
        storyAufhaengerB1:
          "Der Rettungsdienst ist unterwegs. Die Stirn blutet weiter. Im Zimmer brennt nur das schwache Nachtlicht. Dein Impuls: schnell irgendetwas auf die Wunde drücken. Aber womit? Wie fest? Und reicht dieses Licht, um zu sehen, was da ist?",
        kerntext:
          "Zuerst sehen können. Eine Verletzung lässt sich nur bei ausreichendem Licht beurteilen — das gedämpfte Nachtlicht genügt dafür nicht. Also das Licht voll einschalten, auch wenn es im ersten Moment unsanft wirkt; Rücksicht nimmst du über eine ruhige Stimme, nicht über Halbdunkel.\n\nDann die Blutung. Eine blutende Wunde wird mit einer sterilen Kompresse und leichtem Druck versorgt — kein unsteriles Taschentuch. Bei Frau Lehmanns Kopfplatzwunde genügt genau dieser leichte Druck. Ein fester Druckverband ist für starke Blutungen gedacht, etwa an Armen oder Beinen; er hält den Druck, ohne dass du dauernd mit der Hand zudrücken musst.\n\nUnd das Dritte, das leicht vergessen wird: Wärme. Verletzte kühlen aus, das belastet den Kreislauf zusätzlich. Deshalb zudecken und warm halten. Die Lage änderst du dabei nicht — der Wirbelsäulenverdacht nach dem Sturz bleibt.",
        kerntextB1:
          "Zuerst musst du gut sehen können. Eine Verletzung kannst du nur bei genug Licht beurteilen. Das schwache Nachtlicht reicht dafür nicht. Also schalte das Licht voll ein, auch wenn das im ersten Moment unsanft wirkt. Rücksicht zeigst du mit einer ruhigen Stimme, nicht mit Halbdunkel.\n\nDann die Blutung. Eine blutende Wunde versorgst du mit einer sterilen Kompresse und leichtem Druck. Eine Kompresse ist ein sauberes Wund-Kissen. Steril heißt: keimfrei verpackt. Kein Taschentuch — das ist nicht sauber genug. Bei Frau Lehmanns Wunde am Kopf reicht dieser leichte Druck. Ein fester Druckverband ist für starke Blutungen, zum Beispiel am Arm oder Bein. Er hält den Druck von allein. Du musst nicht dauernd mit der Hand drücken.\n\nUnd das Dritte, das man leicht vergisst: der Wärmeerhalt, also warm halten. Verletzte Menschen kühlen aus. Das belastet den Kreislauf zusätzlich. Deshalb deckst du sie zu und hältst sie warm. Die Lage änderst du dabei nicht. Denn nach dem Sturz besteht ein Wirbelsäulenverdacht — der Verdacht, dass die Wirbelsäule verletzt ist.",
        faustregel:
          "Erst Licht voll an — sehen, was ist. Kopfwunde: sterile Kompresse mit leichtem Druck; starke Blutung: Druckverband. Zudecken gegen die Kälte, nicht umlagern.",
        faustregelB1:
          "Erst Licht voll an — du musst sehen, was ist. Kopfwunde: sterile Kompresse mit leichtem Druck. Starke Blutung: Druckverband. Zudecken gegen die Kälte, nicht umlagern.",
        spektrum: [
          {
            patientName: "Frau Lehmann",
            situationsId: "ls-lehmann-sturz-sht",
            hauptfaktor: "Kopfplatzwunde",
            kurzbeschreibung:
              "Sterile Kompresse mit leichtem Druck — bei einer Platzwunde am Kopf reicht das meist, bis der Rettungsdienst da ist.",
            kurzbeschreibungB1:
              "Sterile Kompresse mit leichtem Druck. Bei einer Wunde am Kopf reicht das meist, bis der Rettungsdienst da ist.",
          },
          {
            patientName: "Stark blutende Wunde am Bein",
            hauptfaktor: "starke Blutung",
            kurzbeschreibung:
              "Blutet es kräftig weiter, wird die Blutung mit einem Druckverband gestillt.",
            kurzbeschreibungB1:
              "Blutet es stark weiter, stillst du die Blutung mit einem Druckverband.",
          },
          {
            patientName: "Unterkühlter Verletzter",
            hauptfaktor: "Auskühlung",
            kurzbeschreibung:
              "Zusätzlich konsequent zudecken und warm halten — Auskühlung belastet den Kreislauf und verschlechtert die Lage.",
            kurzbeschreibungB1:
              "Deck ihn gut zu und halte ihn warm. Auskühlen belastet den Kreislauf und macht die Lage schlechter.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Frau Lehmann blutet nachts an der Stirn, nur das Nachtlicht brennt — wie versorgst du die Wunde richtig?",
          rueckseite:
            "Licht voll einschalten (Inspektion braucht Licht). Kopfwunde: sterile Kompresse + leichter Druck; starke Blutung → Druckverband. Zudecken (Wärmeerhalt), nicht umlagern (Wirbelsäulenverdacht).",
          vorderseiteB1:
            "Frau Lehmann blutet nachts an der Stirn. Nur das Nachtlicht brennt. Wie versorgst du die Wunde richtig?",
          rueckseiteB1:
            "Licht voll einschalten — nur so kannst du die Wunde gut sehen. Kopfwunde: sterile Kompresse und leichter Druck. Starke Blutung → Druckverband. Zudecken, damit sie warm bleibt. Nicht umlagern, denn die Wirbelsäule kann verletzt sein.",
        },
      },
    },
    {
      stepId: "ce06-lehmann-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.4 (Blutstillung Druckverband), Kap. 14.5 (Wärmeerhalt); ABCDE (Inspektion nur bei ausreichendem Licht möglich)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-lehmann-wunde-licht-waerme",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-06", "F-07"],
      contentC1: {
        title: "Wunde, Licht, Wärme",
        body: "Wie versorgst du Frau Lehmann bis zum Eintreffen des Rettungsdienstes — bei der Wunde, der Beleuchtung und der Auskühlung?",
        glossarBegriffe: ["sterile Kompresse", "Druckverband", "Wärmeerhalt"],
      },
      contentB1: {
        title: "Wunde, Licht, Wärme",
        body: "Wie versorgst du Frau Lehmann bis der Rettungsdienst kommt — Wunde, Licht und Wärme?",
        glossarBegriffe: ["sterile Kompresse", "zudecken"],
      },
      question: {
        fragetext: "Welche Erstversorgung ist richtig?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Licht voll einschalten, sterile Kompresse mit leichtem Druck auf die Wunde, zudecken — nicht umlagern.",
            isCorrect: true,
            explanation:
              "Richtig. Zur sicheren Verletzungs-Inspektion braucht es volles Licht (nicht das gedämpfte Nachtlicht). Die blutende Platzwunde wird mit steriler Kompresse und leichtem Druck versorgt; ein kräftiger Druckverband ist für starke Blutungen gedacht (z.B. an Extremitäten). Wärmeerhalt durch Zudecken. Die Lage bleibt unverändert (Wirbelsäulenverdacht).",
            explanationB1:
              "Richtig. Für die Inspektion brauchst du volles Licht — nicht das schwache Nachtlicht. Die Wunde versorgst du mit steriler Kompresse und leichtem Druck. Bei starker Blutung wäre stattdessen ein Druckverband nötig. Du deckst sie zu für den Wärmeerhalt. Nicht umlagern — der Wirbelsäulenverdacht bleibt bestehen.",
          },
          {
            text: "Das gedämpfte Nachtlicht anlassen, damit sie nicht erschrickt, und die Wunde erst mal mit einem Taschentuch abtupfen.",
            isCorrect: false,
            explanation:
              "Falsch. Bei gedämpftem Licht lässt sich eine Verletzung nicht sicher beurteilen — für die Inspektion muss das Licht voll eingeschaltet werden. Und eine blutende Wunde wird mit steriler Kompresse versorgt, nicht mit einem unsterilen Taschentuch. Rücksicht auf das Erschrecken nimmst du über ruhige Ansprache, nicht über Halbdunkel.",
            explanationB1:
              "Falsch. Bei schwachem Licht kannst du die Verletzung nicht gut sehen — Licht voll einschalten. Und die Wunde versorgst du mit steriler Kompresse, nicht mit einem Taschentuch.",
          },
          {
            text: "Sie beruhigen mit 'Ist ja nichts passiert, Sie haben Glück gehabt' und abwarten, ob die Blutung von selbst aufhört.",
            isCorrect: false,
            explanation:
              "Nein. 'Ist ja nichts passiert' ist eine Fehlinformation, bevor die Verletzung überhaupt beurteilt ist — unter Blutverdünner ist der Sturz gerade KEIN harmloses Ereignis. Und eine blutende Wunde wird aktiv versorgt (Kompresse, Druck), nicht passiv beobachtet. Beruhigen ja — aber ehrlich und ohne falsche Entwarnung.",
            explanationB1:
              "Nein. 'Ist ja nichts passiert' ist falsch, bevor du die Verletzung beurteilt hast — unter Blutverdünner ist der Sturz nicht harmlos. Die Wunde versorgst du aktiv. Beruhigen ja, aber ehrlich.",
          },
        ],
      },
    },
    {
      stepId: "ce06-lehmann-erm-02",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      // Deeskalierende, validierende Ansprache bei Demenz = Kommunikation → II.1 (LE1-Set; I.1 nicht im Set).
      kompetenzbereich: "II.1",
      quellen: [
        "Pflege heute 2019, Kap. 14.6.2 (Lage nicht verändern); BGB § 1831 (FeM)",
        "Grundprinzip Deeskalation bei Demenz (ruhige, validierende Ansprache auf Augenhöhe)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-lehmann-deeskalation",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-01", "F-08"],
      contentC1: {
        title: "„Lasst mich los!“",
        body: "Frau Lehmann wird panisch, stemmt sich hoch und schlägt nach dir: \"Lasst mich los! Wo ist Mutti?\" Sie droht erneut zu stürzen. Wie reagierst du?",
        glossarBegriffe: ["Deeskalation", "Validation", "freiheitsentziehende Maßnahme"],
      },
      contentB1: {
        title: "„Lasst mich los!“",
        body: "Frau Lehmann bekommt Panik, will aufstehen und schlägt nach dir: \"Lasst mich los!\" Sie droht wieder zu stürzen. Wie reagierst du?",
        glossarBegriffe: ["Deeskalation (= beruhigen)", "freiheitsentziehende Maßnahme"],
      },
      question: {
        fragetext: "Frau Lehmann wehrt sich und will aufstehen — was tust du?",
        branchingOptions: [
          {
            text: "Ruhig auf Augenhöhe gehen, mich mit Namen vorstellen, langsam sprechen und sie behutsam am Aufstehen hindern, ohne sie festzuhalten oder zu zerren — bis der Rettungsdienst da ist.",
            isCorrect: true,
            feedback:
              "Frau Lehmann hält inne, schaut dich an und wird ruhiger; sie bleibt liegen, bis der Rettungsdienst kommt. — Genau richtig. Bei Menschen mit Demenz wirkt Deeskalation über ruhige, wertschätzende Ansprache auf Augenhöhe besser als Kraft. Zu dieser Ansprache gehört, ihre Gefühlswelt ernst zu nehmen (Validation): Du korrigierst ihre Frage nach der Mutter nicht und stellst sie nicht bloß, sondern nimmst die Angst dahinter an und gibst ihr Sicherheit. Du verhinderst den erneuten Sturz durch Präsenz und behutsames Sichern — nicht durch Fixieren. Kraftvolles Festhalten würde die Panik steigern und bei Osteoporose Verletzungen riskieren. So schützt du sie und die (mögliche) Wirbelsäulenverletzung, ohne ihre Rechte zu verletzen.",
            feedbackB1:
              "Frau Lehmann wird ruhiger und bleibt liegen. — Genau richtig. Das ist Deeskalation: Bei Demenz hilft ruhiges, freundliches Reden auf Augenhöhe mehr als Kraft. Nimm ihre Angst ernst, statt ihre Frage nach der Mutter zu korrigieren (Validation). Du hinderst sie sanft am Aufstehen — ohne sie festzuhalten. Festhalten würde die Panik verstärken und bei Osteoporose verletzen.",
          },
          {
            text: "Sie fest unter den Achseln greifen und zurückhalten, damit sie sich nicht verletzt.",
            isCorrect: false,
            feedback:
              "Frau Lehmann schreit auf, wehrt sich noch heftiger und windet sich aus deinem Griff — die Panik eskaliert. Der Schutzgedanke ist richtig, die Ausführung nicht. Ein Griff unter die Achseln belastet das Schultergelenk und ist bei Osteoporose riskant; kraftvolles Festhalten steigert zudem die Panik und ist rechtlich eine körperliche Fixierung. Besser: auf Augenhöhe deeskalieren und nur behutsam sichern, ohne Kraft — und den Rettungsdienst abwarten.",
            feedbackB1:
              "Frau Lehmann schreit und wehrt sich noch mehr. Der Gedanke, sie zu schützen, ist richtig — aber nicht so. Unter den Achseln greifen ist bei Osteoporose gefährlich und festes Festhalten macht mehr Panik. Besser: ruhig reden und nur sanft sichern.",
          },
          {
            text: "Sie schnell ins Bett heben und beide Bettgitter hochziehen, dann kann sie nicht mehr aufstehen und liegt sicher.",
            isCorrect: false,
            feedback:
              "Beim Hochheben verzieht Frau Lehmann schmerzhaft das Gesicht; kaum liegt sie, versucht sie über das Gitter zu klettern — die Sturzgefahr steigt sogar. Nein — gleich doppelt falsch. Sie hochzuheben verbietet sich wegen des Wirbelsäulenverdachts (Lage nicht verändern). Und beidseitige Bettgitter, um jemanden am Aufstehen zu hindern, sind rechtlich eine freiheitsentziehende Maßnahme: Sie brauchen grundsätzlich eine Genehmigung des Betreuungsgerichts (§ 1831 BGB) und sind kein Mittel der Erstversorgung. Richtig ist Deeskalation und behutsames Sichern.",
            feedbackB1:
              "Beim Hochheben hat Frau Lehmann Schmerzen und versucht dann, über das Gitter zu klettern — die Sturzgefahr wird größer. Nein — doppelt falsch. Hochheben geht nicht (Wirbelsäule). Und beide Bettgitter hoch, um sie am Aufstehen zu hindern, ist rechtlich eine Fixierung — das braucht eine Genehmigung vom Gericht (§ 1831 BGB). Richtig: ruhig reden und sanft sichern.",
          },
        ],
      },
    },
    {
      // Wissens-Tab C (curriculum-first): kommt NACH dem Deeskalations-Hook (erm-02, in dem
      // das beidseitige Bettgitter als falsche Option auftaucht) und VOR erm-03 (truefalse,
      // das die FeM-Rechtslage direkt abfragt). Productive-Failure-Schleife: erst evtl. in die
      // Bettgitter-Falle tappen, dann verstehen, warum. Literatur-belegt (F-08, BGB § 1831
      // Fassung ab 2023) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-lehmann-erm-02b-fem-bettgitter",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // Rechtlich-ethische Dimension (FeM/§ 1831) → II.3 (LE1-Set; I.2 nicht im Set).
      kompetenzbereich: "II.3",
      quellen: ["BGB § 1831 Abs. 2 u. 4 (Fassung ab 2023, FeM/Genehmigung)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-lehmann-fem-wissen",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-08"],
      transition: "Deine Kollegin schlägt genau das gleich noch einmal vor.",
      contentC1: {
        title: "„Zur Sicherheit ans Bett“ — die rechtliche Falle",
        body: "",
        glossarBegriffe: [
          "freiheitsentziehende Maßnahme",
          "Betreuungsgericht",
          "Fixierung",
        ],
      },
      inlineWissen: {
        bausteinRef: "traumatologische-erstversorgung-fem-bettgitter",
        themaPrimaer: "traumatologische-erstversorgung",
        storyAufhaenger:
          "In der Panik kam der schnelle, gut gemeinte Gedanke: ab ins Bett, beide Gitter hoch, dann liegt sie sicher und steht nicht wieder auf. Genau dieser Griff ist rechtlich heikel — warum eigentlich?",
        storyAufhaengerB1:
          "In der Panik kam ein schneller, gut gemeinter Gedanke. Ab ins Bett, beide Gitter hoch — dann liegt sie sicher und steht nicht wieder auf. Genau das ist rechtlich heikel. Aber warum?",
        kerntext:
          "Wird einem Menschen durch mechanische Vorrichtungen — etwa beidseitige Bettgitter — über einen längeren Zeitraum oder regelmäßig die Freiheit entzogen, ist das eine freiheitsentziehende Maßnahme (FeM). Sie ist grundsätzlich nur mit Genehmigung des Betreuungsgerichts zulässig (§ 1831 BGB, Fassung ab 2023). „Das machen wir immer so“ oder „nur zur Sicherheit“ ist keine Rechtsgrundlage — beidseitiges Hochziehen, um jemanden am Aufstehen zu hindern, ist keine Erste-Hilfe-Maßnahme, sondern rechtlich eine Fixierung.\n\nEs gibt eine wichtige Ausnahme: Besteht eine akute Gefahr, ist ein kurzfristiges Handeln zulässig — die Genehmigung ist dann aber unverzüglich nachzuholen. Und immer gilt der Vorrang milderer Wege: erst Präsenz, ruhige Ansprache, behutsames Sichern, dazu Arzt und Bevollmächtigte einbinden (bei Frau Lehmann die Tochter mit Vorsorgevollmacht). Einsperren ist das letzte Mittel, nicht das erste.",
        kerntextB1:
          "Manchmal hält man einen Menschen mit einem Gerät fest, zum Beispiel mit beiden Bettgittern oben. Passiert das über längere Zeit oder immer wieder? Und kann die Person das Bett so nicht mehr allein verlassen? Dann nimmt man ihr die Freiheit. Das nennt man eine freiheitsentziehende Maßnahme, kurz FeM. So etwas ist nur mit einer Erlaubnis erlaubt: Das Betreuungsgericht muss zustimmen (§ 1831 BGB). Das Betreuungsgericht ist ein Gericht, das hilfsbedürftige Menschen schützt. „Das machen wir immer so“ oder „nur zur Sicherheit“ ist keine Erlaubnis. Beide Gitter hoch, damit jemand nicht aufsteht, ist keine Erste Hilfe. Es ist rechtlich eine Fixierung — das heißt, jemand wird festgehalten oder festgebunden.\n\nEs gibt eine wichtige Ausnahme. Wenn gerade eine akute Gefahr besteht, darfst du kurz handeln. Aber die Erlaubnis vom Gericht musst du dann sofort nachholen. Und es gilt immer: zuerst die sanfteren Wege. Also: da sein, ruhig reden, sie behutsam sichern. Dazu holst du den Arzt und die Person dazu, die für Frau Lehmann entscheiden darf. Das ist die Tochter. Sie hat eine Vorsorgevollmacht — das heißt, sie darf für die Mutter entscheiden. Jemanden einsperren ist das letzte Mittel, nicht das erste.",
        faustregel:
          "Beidseitige Bettgitter gegen das Aufstehen sind eine freiheitsentziehende Maßnahme — grundsätzlich nur mit Gerichtsgenehmigung (§ 1831 BGB). „Zur Sicherheit“ ersetzt keine Rechtsgrundlage; erst mildere Wege.",
        faustregelB1:
          "Beide Bettgitter hoch, damit jemand nicht aufsteht — das ist eine freiheitsentziehende Maßnahme. Erlaubt nur mit Genehmigung vom Betreuungsgericht (§ 1831 BGB). „Zur Sicherheit“ ist keine Erlaubnis. Zuerst die sanfteren Wege.",
        spektrum: [
          {
            patientName: "Beide Gitter dauerhaft hoch",
            hauptfaktor: "regelmäßig / länger",
            kurzbeschreibung:
              "Um jemanden am Aufstehen zu hindern → freiheitsentziehende Maßnahme, braucht die Genehmigung des Betreuungsgerichts.",
            kurzbeschreibungB1:
              "Damit jemand nicht aufstehen kann → freiheitsentziehende Maßnahme. Dafür brauchst du die Genehmigung vom Betreuungsgericht.",
          },
          {
            patientName: "Akute Sturzgefahr jetzt",
            hauptfaktor: "kurzfristige Gefahr",
            kurzbeschreibung:
              "Kurzfristiges Handeln zulässig, Genehmigung unverzüglich nachholen — und zuerst Arzt und Bevollmächtigte einbinden.",
            kurzbeschreibungB1:
              "Bei akuter Gefahr darfst du kurz handeln. Die Genehmigung holst du sofort nach. Und zuerst holst du den Arzt und die Person dazu, die entscheiden darf.",
          },
          {
            patientName: "Einseitiges Gitter",
            hauptfaktor: "Patient kann selbst heraus",
            kurzbeschreibung:
              "Wird sie nicht am Verlassen des Bettes gehindert, ist es keine Freiheitsentziehung — also keine genehmigungspflichtige FeM.",
            kurzbeschreibungB1:
              "Kann sie das Bett noch selbst verlassen, nimmst du ihr die Freiheit nicht. Dann ist es keine FeM und du brauchst keine Genehmigung.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Darfst du im Heim beide Bettgitter hochziehen, damit Frau Lehmann nicht aufsteht?",
          rueckseite:
            "Nein, nicht einfach so. Beidseitige Bettgitter zum Am-Aufstehen-Hindern über längere Zeit/regelmäßig sind eine freiheitsentziehende Maßnahme — grundsätzlich nur mit Genehmigung des Betreuungsgerichts (§ 1831 BGB). In akuter Gefahr kurzfristig zulässig, Genehmigung unverzüglich nachholen; vorher mildere Wege + Arzt/Bevollmächtigte.",
          vorderseiteB1:
            "Darfst du im Heim beide Bettgitter hochziehen, damit Frau Lehmann nicht aufsteht?",
          rueckseiteB1:
            "Nein, nicht einfach so. Beide Bettgitter hoch, damit sie über längere Zeit nicht aufsteht — das ist eine freiheitsentziehende Maßnahme. Erlaubt nur mit Genehmigung vom Betreuungsgericht (§ 1831 BGB). Bei akuter Gefahr darfst du kurz handeln und holst die Genehmigung sofort nach. Vorher: sanftere Wege, Arzt und die Person, die entscheiden darf.",
        },
      },
    },
    {
      stepId: "ce06-lehmann-erm-03",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 3,
      // FeM/§ 1831 rechtlich-ethisch bewerten → II.3 (LE1-Set; I.2 nicht im Set).
      kompetenzbereich: "II.3",
      quellen: ["BGB § 1831 Abs. 2 u. 4 (Fassung ab 2023, FeM/Genehmigung)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-lehmann-fem-recht",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      kernfaktId: ["F-08"],
      contentC1: {
        title: "Bettgitter — einfach erlaubt?",
        body: "Deine Kollegin sagt: 'Zieh einfach beide Bettgitter hoch, dann bleibt sie liegen — das dürfen wir im Heim doch.' Stimmt das?",
        glossarBegriffe: ["freiheitsentziehende Maßnahme", "Betreuungsgericht"],
      },
      contentB1: {
        title: "Bettgitter — einfach erlaubt?",
        body: "Deine Kollegin sagt: 'Zieh beide Bettgitter hoch, das dürfen wir doch.' Stimmt das? Merke: Das kann eine freiheitsentziehende Maßnahme sein. Dafür braucht es meist die Genehmigung vom Betreuungsgericht.",
        glossarBegriffe: ["freiheitsentziehende Maßnahme"],
      },
      question: {
        fragetext: "Bewerte die Aussage zur Bettgitter-Nutzung.",
        trueFalseCards: [
          {
            statement: "Beide Bettgitter dauerhaft hochziehen, um Frau Lehmann am Aufstehen zu hindern, dürfen wir im Heim ohne Weiteres selbst entscheiden.",
            isTrue: false,
            explanation:
              "Falsch. Werden einem Menschen durch mechanische Vorrichtungen (beidseitiges Bettgitter) über einen längeren Zeitraum oder regelmäßig die Freiheit entzogen, ist das eine freiheitsentziehende Maßnahme und grundsätzlich nur mit Genehmigung des Betreuungsgerichts zulässig (§ 1831 BGB). In akuter Gefahr ist ein kurzfristiges Handeln möglich, die Genehmigung ist dann aber unverzüglich nachzuholen; zuerst sind mildere Alternativen und die Einbindung von Arzt und Bevollmächtigter (Tochter) zu prüfen. 'Das machen wir immer so' ersetzt keine Rechtsgrundlage.",
            explanationB1:
              "Falsch. Beide Bettgitter dauerhaft hoch, damit sie nicht aufsteht — das ist eine freiheitsentziehende Maßnahme (FeM). Das dürft ihr nicht einfach selbst entscheiden. Ihr braucht die Genehmigung vom Betreuungsgericht (§ 1831 BGB). Nur bei akuter Gefahr darfst du kurz handeln — dann holst du die Genehmigung sofort nach. Zuerst gelten die sanfteren Wege, dazu der Arzt und die Tochter (sie hat die Vollmacht). 'Das machen wir immer so' ist keine Rechtsgrundlage.",
          },
          {
            statement: "Ein einzelnes, niedriges Bettgitter, über das Frau Lehmann selbst hinaussteigen kann, ist keine genehmigungspflichtige freiheitsentziehende Maßnahme.",
            isTrue: true,
            explanation:
              "Richtig. Entscheidend ist, ob dem Menschen die Bewegungsfreiheit tatsächlich genommen wird. Kann Frau Lehmann das Bett selbst verlassen (einseitiges/niedriges Gitter, sie wird nicht am Aufstehen gehindert), liegt keine Freiheitsentziehung vor — also keine genehmigungspflichtige FeM. Zur FeM wird es erst, wenn sie durch die Vorrichtung über längere Zeit oder regelmäßig am Verlassen des Bettes gehindert wird (dann § 1831 BGB, Genehmigung des Betreuungsgerichts). Die mildere, freiheitswahrende Lösung ist immer vorzuziehen.",
            explanationB1:
              "Richtig. Wichtig ist: Wird ihr die Bewegungsfreiheit wirklich genommen? Kann Frau Lehmann das Bett selbst verlassen (ein einseitiges, niedriges Gitter), dann nimmst du ihr die Freiheit nicht. Also ist es keine genehmigungspflichtige freiheitsentziehende Maßnahme (FeM). Zur FeM wird es erst, wenn sie über längere Zeit am Verlassen des Bettes gehindert wird (dann § 1831 BGB, Genehmigung vom Betreuungsgericht). Der sanftere Weg, der die Freiheit wahrt, ist immer besser.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 13,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_LEHMANN_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-lehmann-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an den Rettungsdienst",
  titelB1: "Übergabe",
  kontext:
    "Der Rettungsdienst trifft ein. Der Notfallsanitäter fragt dich, während er zu Frau Lehmann geht: 'Was haben wir?'",
  kontextB1:
    "Der Rettungsdienst kommt. Der Notfallsanitäter fragt: 'Was haben wir?'",
  kernSteps: [
    {
      stepId: "ce06-lehmann-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      // SBAR = strukturierte Kommunikation → II.1 (LE1-Set; konsistent zu allen CE-06-SBAR-Steps).
      kompetenzbereich: "II.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-lehmann-sbar",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "SBAR-Übergabe",
        body: "Welche Übergabe folgt dem SBAR-Schema und bringt das Entscheidende zuerst?",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "Übergabe mit SBAR",
        body: "Welche Übergabe folgt SBAR und bringt das Wichtige zuerst?",
        glossarBegriffe: ["SBAR (= Situation, Background, Assessment, Recommendation)"],
      },
      question: {
        fragetext: "Welche SBAR-Übergabe ist vollständig und priorisiert?",
        mcVariant: "standard",
        optionen: [
          {
            text: "\"Frau Lehmann, 86, Sturz gegen 02:45 mit Kopfplatzwunde rechts (S). Demenz, Osteoporose, Vorhofflimmern unter Apixaban, dritter Sturz in sechs Monaten (B). Ansprechbar, aber verwirrter als sonst, Wunde versorgt, Lage belassen (A). Bitte Transport in die Klinik — Antikoagulation, CT-Indikation (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR mit dem entscheidenden Background (Apixaban!) und einer klaren Recommendation (Klinik/CT wegen Antikoagulation). Der Sanitäter hat sofort das Risiko und den Handlungsbedarf im Blick. Sturzzeit und Bewusstseinsverlauf gehören ins Assessment.",
            explanationB1:
              "Richtig. Vollständiges SBAR mit dem wichtigen Punkt (Apixaban!) und klarer Bitte (Klinik/CT). Der Sanitäter sieht sofort das Risiko. Auch der Verlauf vom Bewusstsein gehört in die Übergabe.",
          },
          {
            text: "\"Sie ist gestürzt und blutet am Kopf, aber sie ist ja wieder wach — wird schon nichts Schlimmes sein.\"",
            isCorrect: false,
            explanation:
              "Zu wenig und beschönigend. Es fehlt der entscheidende Background (Apixaban), und die Bewertung 'wird schon nichts sein' ist bei SHT unter Antikoagulation gefährlich falsch. SBAR verlangt die harten Fakten und eine klare Empfehlung, nicht eine Beruhigung.",
            explanationB1:
              "Zu wenig und beschönigt. Der wichtige Punkt (Apixaban) fehlt, und 'wird schon nichts sein' ist bei diesem Sturz gefährlich falsch.",
          },
          {
            text: "\"Das ist Frau Lehmann, sie hat Demenz, ruft nachts immer nach ihrer Mutter und ist oft unruhig.\"",
            isCorrect: false,
            explanation:
              "Am Notfall vorbei. Das ist Hintergrund zur Person, aber nicht der akute Verlauf. Es fehlen Ereignis (Sturz/SHT), das kritische Background-Detail (Antikoagulation) und die Empfehlung. SBAR priorisiert das medizinisch Entscheidende.",
            explanationB1:
              "Am Notfall vorbei. Das ist Hintergrund, aber nicht der akute Verlauf. Es fehlen Sturz, Apixaban und die Bitte.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_LEHMANN_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-lehmann-reflektieren",
  phase: "reflektieren",
  titel: "Nach der Nacht",
  titelB1: "Nach der Nacht",
  kontext:
    "Frau Lehmann ist in der Klinik. Du sitzt kurz durch — dritter Sturz in sechs Monaten, nachts zu zweit für 48 Bewohner, und morgen früh will die Tochter ein Gespräch.",
  kontextB1:
    "Frau Lehmann ist in der Klinik. Du setzt dich kurz. Dritter Sturz in sechs Monaten, nachts zu zweit für 48 Bewohner, und die Tochter will ein Gespräch.",
  kernSteps: [
    {
      stepId: "ce06-lehmann-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      // E1 (eigene Gefühle/Erfahrungen reflektieren) → V.2 (berufl. Selbstverständnis/Reflexion),
      // parallel zu Ríos ref-01. Deckt den V.2-Schwerpunkt des LE1-Sets nachweisbar.
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 14 (Nachbesprechung); Sturzanalyse + sturzfreundliche Alternativen (Niedrigbett, Sensormatte, Nachtlicht, Hüftprotektoren)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-lehmann-reflexion",
      tag: "pflege",
      themaPrimaer: "traumatologische-erstversorgung",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Zwischen richtiger Erstversorgung, Recht (Bettgitter/FeM), Sturzprophylaxe und den eigenen Gefühlen nach einer solchen Nacht — reflektiere die Situation.",
        glossarBegriffe: ["Sturzanalyse", "freiheitsentziehende Maßnahme", "Belastungsverarbeitung"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Richtige Erstversorgung, Recht (Bettgitter), Sturzprophylaxe und die eigenen Gefühle — denke über die Nacht nach.",
        glossarBegriffe: ["Sturzanalyse"],
      },
      question: {
        fragetext: "Reflektiere die Situation und deine Konsequenzen.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Was war die EINE Information, die den Sturz zum Notfall gemacht hat, und warum? 2) Warum ist beidseitiges Bettgitter keine einfache 'Sicherheitsmaßnahme', und welche Alternativen zur Sturzprophylaxe gibt es (z.B. Niedrigbett, Sensormatte, nächtliches Orientierungslicht — nicht zu verwechseln mit dem gedämpften Licht, das bei der akuten Wund-Inspektion falsch wäre —, Hüftprotektoren)? 3) Wie gehst du mit der eigenen Belastung nach einer solchen Nacht um? 4) Wie bereitest du das Gespräch mit der bevollmächtigten Tochter vor?",
          placeholder:
            "Zum Notfall wurde der Sturz durch … Beidseitiges Bettgitter ist problematisch, weil … Als Alternativen kämen infrage … Mit meiner Belastung / dem Gespräch mit der Tochter gehe ich so um …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler die Antikoagulation als den entscheidenden Faktor (SHT + Blutverdünner = Klinik/CT, verzögerte Blutung)? Versteht er, dass beidseitiges Bettgitter eine freiheitsentziehende Maßnahme ist (§ 1831 BGB, Genehmigung) und nennt mildere Sturzprophylaxe-Alternativen (Niedrigbett, Sensormatte/Bewegungsmelder, Nachtlicht, Hüftprotektoren, Toilettengänge antizipieren)? Adressiert er die eigene Belastung (Nachtdienst, Verantwortung) und eine professionelle, transparente Gesprächsvorbereitung mit der Tochter (Vollmacht)? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};
