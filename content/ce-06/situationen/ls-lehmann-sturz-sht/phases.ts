// CE-06 Situation „Frau Lehmann — Sturz mit Kopfverletzung im Pflegeheim"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE1-K1 (Erste-Hilfe bei Wunden, Blutungen, Sturz durchführen).
// Grounding: specs/ce-06/kernfakten/traumatologische-erstversorgung.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 14 (Erste Hilfe), 37.13 (SHT); BGB § 1831 (Fassung ab 2023).
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
      kompetenzbereich: "II.1",
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
              "Richtig. Bewusstsein prüfen heißt: ansprechen UND anfassen. Sie hört vielleicht schlecht — keine Antwort heißt nicht sofort Bewusstlosigkeit. Nach einem Sturz kann die Wirbelsäule verletzt sein, darum lässt du sie erst in ihrer Lage.",
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
      stepId: "ce06-lehmann-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
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
              "Richtig. Blutverdünner erhöhen die Blutungsgefahr. Bei einem Kopftrauma kann es im Schädel bluten — auch erst Stunden später. Darum muss sie in die Klinik (CT), egal wie klein die Wunde aussieht.",
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
              "Richtig. Ein Kopftrauma unter Blutverdünner muss sofort in die Klinik — auch wenn sie wach ist. Die Blutung kann später kommen. Daneben den Arzt und die Tochter informieren.",
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
      stepId: "ce06-lehmann-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
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
              "Richtig. Zur sicheren Verletzungs-Inspektion braucht es volles Licht (nicht das gedämpfte Nachtlicht). Die blutende Platzwunde wird mit steriler Kompresse und leichtem Druck versorgt (Druckverband bei starker Blutung) — bei tastbarer Knochenstufe / Verdacht auf Schädelbruch aber KEIN punktueller, kräftiger Druck. Wärmeerhalt durch Zudecken. Die Lage bleibt unverändert (Wirbelsäulenverdacht).",
            explanationB1:
              "Richtig. Für die Inspektion brauchst du volles Licht — nicht das schwache Nachtlicht. Die Wunde: sterile Kompresse mit leichtem Druck. Sie zudecken gegen die Kälte. Nicht umlagern.",
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
      kompetenzbereich: "I.1",
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
              "Frau Lehmann hält inne, schaut dich an und wird ruhiger; sie bleibt liegen, bis der Rettungsdienst kommt. — Genau richtig. Bei Menschen mit Demenz wirkt Deeskalation über ruhige, wertschätzende Ansprache auf Augenhöhe besser als Kraft. Du verhinderst den erneuten Sturz durch Präsenz und behutsames Sichern — nicht durch Fixieren. Kraftvolles Festhalten würde die Panik steigern und bei Osteoporose Verletzungen riskieren. So schützt du sie und die (mögliche) Wirbelsäulenverletzung, ohne ihre Rechte zu verletzen.",
            feedbackB1:
              "Frau Lehmann wird ruhiger und bleibt liegen. — Genau richtig. Bei Demenz hilft ruhiges, freundliches Reden auf Augenhöhe mehr als Kraft. Du hinderst sie sanft am Aufstehen — ohne sie festzuhalten. Festhalten würde die Panik verstärken und bei Osteoporose verletzen.",
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
      stepId: "ce06-lehmann-erm-03",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.2",
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
        body: "Deine Kollegin sagt: 'Zieh beide Bettgitter hoch, das dürfen wir doch.' Stimmt das?",
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
      kompetenzbereich: "I.1",
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
              "Richtig. Vollständiges SBAR mit dem wichtigen Punkt (Apixaban!) und klarer Bitte (Klinik/CT). Der Sanitäter sieht sofort das Risiko.",
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
      kompetenzbereich: "I.2",
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
