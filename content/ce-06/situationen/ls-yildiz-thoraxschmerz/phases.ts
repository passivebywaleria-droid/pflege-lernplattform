// CE-06 Situation „Frau Yıldız — akuter Thoraxschmerz (Verdacht Herzinfarkt)"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE2-W3 (Klinik/Therapie Herzinfarkt), K1 (Vitalzeichen/Monitor), K3 (atemunterstützende Lagerung),
//        W2 (kardiogener Schock, angeschnitten).
// Grounding: specs/ce-06/kernfakten/herz-kreislauf-akut.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 21.1/21.2/21.5.
//
// KRITISCH GEBAUT:
//  - Diagnostische Leitplanke: ACS bessert sich NICHT auf Ruhe/Nitrat (vs. Angina pectoris) — Warnzeichen (F-01);
//    jeder akute Thoraxschmerz bis zum Beweis des Gegenteils bedrohlich (F-02). „Nur ihre Angina" ist die Falle.
//  - Lagerung: Oberkörper HOCH (nicht flach/Schocklage) — bei RR < 90 & Puls > 100 abbrechen (F-07, verbatim).
//  - O2/Nitro/Analgetika NUR auf Arztanordnung (F-06), keine erfundenen Dosen.
//  - MC-Optionen vergleichbar kurz (Begründung in explanation).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_YILDIZ_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-yildiz-erkennen",
  phase: "erkennen",
  titel: "„Das ist nur meine Angina“",
  titelB1: "„Das ist nur meine Angina“",
  kontext:
    "19:40 Uhr. Frau Yıldız klingelt. Sie sitzt vornübergebeugt im Bett, die Hand auf der Brust, blass und schweißig. \"Das kenne ich schon, das ist meine Angina. Gleich geht es weg.\" Sie hat sich hingelegt und ihr Nitrospray genommen — aber der Schmerz wird stärker und zieht in den linken Arm.",
  kontextB1:
    "19:40 Uhr. Frau Yıldız klingelt. Sie sitzt vornüber im Bett, die Hand auf der Brust, blass und schweißig. \"Das kenne ich schon, das ist meine Angina.\" Sie hat sich hingelegt und ihr Nitrospray genommen — aber der Schmerz wird stärker und zieht in den linken Arm.",
  kernSteps: [
    {
      stepId: "ce06-yildiz-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 21.2.1/21.5 (ACS vs. Angina pectoris; Thoraxschmerz ernst nehmen)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-acs-erkennen",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-01", "F-02"],
      contentC1: {
        title: "Wirklich nur die Angina?",
        body: "Frau Yıldız deutet die Schmerzen als ihre bekannte Angina pectoris. Was ist an dieser Situation das entscheidende Warnzeichen?",
        glossarBegriffe: ["Angina pectoris", "akutes Koronarsyndrom", "Nitrat"],
      },
      contentB1: {
        title: "Wirklich nur die Angina?",
        body: "Frau Yıldız denkt, es ist ihre bekannte Angina. Was ist hier das wichtige Warnzeichen?",
        glossarBegriffe: ["Angina pectoris", "Nitrospray"],
      },
      question: {
        fragetext: "Was ist das entscheidende Warnzeichen?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Dass der Schmerz sich trotz Ruhe und Nitrospray NICHT bessert.",
            isCorrect: true,
            explanation:
              "Richtig. Eine stabile Angina pectoris bessert sich typischerweise auf Ruhe und Nitratgabe. Bleibt die Besserung aus und sind die Schmerzen heftig, mit kaltem Schweiß und Unruhe, muss ein akutes Koronarsyndrom (Herzinfarkt) angenommen werden. Jeder akute Thoraxschmerz gilt bis zum Beweis des Gegenteils als bedrohlich — 'das kenne ich schon' darf dich nicht in Sicherheit wiegen.",
            explanationB1:
              "Richtig. Eine normale Angina bessert sich auf Ruhe und Nitrospray. Wenn das diesmal NICHT hilft und die Schmerzen stark sind, muss man an einen Herzinfarkt denken. Jeder akute Brustschmerz ist ernst — 'das kenne ich schon' darf dich nicht beruhigen.",
          },
          {
            text: "Dass sie Diabetikerin ist — Diabetiker bekommen keine echten Herzinfarkte.",
            isCorrect: false,
            explanation:
              "Falsch. Diabetiker haben sogar ein erhöhtes Infarktrisiko und oft ATYPISCHE oder abgeschwächte Beschwerden — das macht die Lage gefährlicher, nicht harmloser. Der Diabetes ist ein Grund für mehr Wachsamkeit, kein Entwarnungssignal.",
            explanationB1:
              "Falsch. Diabetiker haben ein höheres Infarktrisiko und oft weniger typische Beschwerden — das ist gefährlicher, nicht harmloser. Der Diabetes ist ein Grund, genauer hinzuschauen.",
          },
          {
            text: "Eigentlich nichts Besonderes — sie kennt ihre Angina am besten, ich warte ab, bis das Nitro wirkt.",
            isCorrect: false,
            explanation:
              "Gefährlich. Abzuwarten, obwohl das Nitro schon genommen wurde und nicht wirkt, verschenkt beim Infarkt wertvolle Zeit ('Zeit ist Herzmuskel'). Die Selbsteinschätzung der Patientin ersetzt nicht die fachliche Beurteilung — hier ist sofortiges Handeln nötig.",
            explanationB1:
              "Gefährlich. Abzuwarten, obwohl das Nitro schon genommen wurde und nicht hilft, kostet beim Infarkt wertvolle Zeit. Ihre eigene Einschätzung ersetzt nicht deine fachliche Beurteilung. Jetzt handeln.",
          },
        ],
      },
    },
    {
      stepId: "ce06-yildiz-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 21.1.2 (Monitoring: Puls/RR/Hautfarbe/Bewusstsein, Pulsoximetrie)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-monitoring",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-04"],
      contentC1: {
        title: "Was beobachtest du sofort?",
        body: "Bis der Arzt kommt: Welche Parameter erhebst und dokumentierst du engmaschig?",
        glossarBegriffe: ["Pulsoximetrie", "Vitalzeichen", "Monitoring"],
      },
      contentB1: {
        title: "Was beobachtest du sofort?",
        body: "Bis der Arzt kommt: Welche Werte misst und dokumentierst du?",
        glossarBegriffe: ["Pulsoximetrie (= Sauerstoff messen)"],
      },
      question: {
        fragetext: "Was erhebst du engmaschig?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Puls (Frequenz, Rhythmus, Qualität), Blutdruck, Hautfarbe, Bewusstsein und die Sauerstoffsättigung per Pulsoximetrie — laufend und dokumentiert.",
            isCorrect: true,
            explanation:
              "Richtig. Bei akuten Herzerkrankungen sind engmaschige Kontrollen von Puls, Blutdruck, Hautfarbe und Bewusstsein plus die Pulsoximetrie Standard — so werden Herzrhythmusstörungen oder ein Blutdruckabfall früh erkannt. Sofern verfügbar, wird sie an den Monitor/die Telemetrie angeschlossen.",
            explanationB1:
              "Richtig. Bei akuten Herzproblemen misst du laufend Puls, Blutdruck, Hautfarbe, Bewusstsein und den Sauerstoff (Pulsoximetrie). So erkennst du früh Herzrhythmusstörungen oder einen Blutdruckabfall. Wenn möglich: an den Monitor anschließen.",
          },
          {
            text: "Nur die Temperatur — Fieber wäre das Wichtigste.",
            isCorrect: false,
            explanation:
              "Nein. Fieber steht beim akuten Koronarsyndrom nicht im Vordergrund. Entscheidend sind die Kreislauf- und Bewusstseinsparameter (Puls, Blutdruck, Hautfarbe, Bewusstsein) und die Sauerstoffsättigung, um eine Verschlechterung sofort zu bemerken.",
            explanationB1:
              "Nein. Fieber ist beim Herzinfarkt nicht das Wichtigste. Entscheidend sind Puls, Blutdruck, Hautfarbe, Bewusstsein und der Sauerstoffwert.",
          },
          {
            text: "Ich messe einmal den Blutdruck und schreibe es später auf, wenn Zeit ist.",
            isCorrect: false,
            explanation:
              "Zu wenig. Eine einmalige Messung zeigt keine Entwicklung; beim Verdacht auf Infarkt braucht es engmaschige, sofort dokumentierte Kontrollen, um einen drohenden Blutdruckabfall oder Rhythmusstörungen rechtzeitig zu erkennen.",
            explanationB1:
              "Zu wenig. Einmal messen zeigt keine Veränderung. Bei Infarktverdacht misst du engmaschig und schreibst es sofort auf.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_YILDIZ_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-yildiz-alarmieren",
  phase: "alarmieren",
  titel: "Zeit ist Herzmuskel",
  titelB1: "Zeit ist Herzmuskel",
  kontext:
    "Der Schmerz hält an, Frau Yıldız hat Todesangst. Du musst Hilfe organisieren — schnell.",
  kontextB1:
    "Der Schmerz bleibt, Frau Yıldız hat große Angst. Du musst schnell Hilfe holen.",
  kernSteps: [
    {
      stepId: "ce06-yildiz-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 21.2.1 (Erstmaßnahmen: Arzt + weitere Pflegefachperson)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-alarmieren",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-03"],
      contentC1: {
        title: "Wen alarmierst du?",
        body: "Verdacht auf akutes Koronarsyndrom. Wie handelst du beim Alarmieren?",
        glossarBegriffe: ["Notfallteam", "Herzkatheter"],
      },
      contentB1: {
        title: "Wen alarmierst du?",
        body: "Verdacht auf Herzinfarkt. Wie holst du Hilfe?",
        glossarBegriffe: ["Herzkatheter"],
      },
      question: {
        fragetext: "Wie handelst du beim Alarmieren?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Sofort den Arzt benachrichtigen und eine weitere Pflegefachperson dazuholen — und bei Frau Yıldız bleiben.",
            isCorrect: true,
            explanation:
              "Richtig. Beim Verdacht auf ein akutes Koronarsyndrom wird sofort der Arzt informiert und eine weitere Pflegekraft hinzugezogen — es ist zeitkritisch ('Zeit ist Herzmuskel', rasche Reperfusion im Herzkatheter). Du bleibst bei der Patientin, überwachst und beruhigst.",
            explanationB1:
              "Richtig. Bei Verdacht auf Herzinfarkt informierst du sofort den Arzt und holst eine weitere Pflegekraft. Es ist zeitkritisch. Du bleibst bei Frau Yıldız, überwachst und beruhigst sie.",
          },
          {
            text: "Erst in Ruhe alle Werte fertig dokumentieren, dann den Arzt rufen.",
            isCorrect: false,
            explanation:
              "Falsch priorisiert. Die Dokumentation ist wichtig, darf aber die Alarmierung nicht verzögern — beim Infarkt zählt jede Minute. Arzt sofort informieren, Überwachung und Dokumentation laufen parallel.",
            explanationB1:
              "Falsch. Dokumentieren ist wichtig, aber es darf den Notruf nicht verzögern. Beim Infarkt zählt jede Minute. Erst Arzt, dann läuft die Doku parallel.",
          },
          {
            text: "Ich gebe ihr erst noch etwas zur Beruhigung, damit sie ruhiger wird, bevor ich jemanden störe.",
            isCorrect: false,
            explanation:
              "Nein. Medikamente gibt die Pflege nicht eigenmächtig, und Abwarten kostet beim Infarkt lebenswichtige Zeit. Zuerst wird der Arzt alarmiert; Beruhigung erreichst du durch ruhige Präsenz und Ansprache, nicht durch eigenmächtige Medikation.",
            explanationB1:
              "Nein. Medikamente gibt die Pflege nicht selbst, und Abwarten kostet beim Infarkt wichtige Zeit. Zuerst den Arzt rufen. Beruhigen kannst du durch ruhiges Dasein und Sprechen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Lagerung/O2/Nitro + Branching kardiogener Schock)
export const CE06_SIT_YILDIZ_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-yildiz-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Lagern, entlasten — nichts eigenmächtig",
  titelB1: "Lagern und entlasten",
  kontext:
    "Der Arzt ist alarmiert und auf dem Weg. Frau Yıldız ringt mit dem anhaltenden Schmerz. Jetzt zählt die richtige Erstversorgung.",
  kontextB1:
    "Der Arzt kommt gleich. Frau Yıldız hat weiter starke Schmerzen. Jetzt zählt die richtige Erstversorgung.",
  kernSteps: [
    {
      stepId: "ce06-yildiz-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 21.2.1 (Erstmaßnahmen: Oberkörper hoch, Bettruhe)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-lagerung",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-03", "F-05"],
      contentC1: {
        title: "Wie lagerst du sie?",
        body: "Verdacht auf Herzinfarkt, Frau Yıldız ist bei Bewusstsein, der Blutdruck (noch) stabil. Wie lagerst und versorgst du sie bis zum Arzt?",
        glossarBegriffe: ["Oberkörperhochlagerung", "absolute Bettruhe", "Schocklage"],
      },
      contentB1: {
        title: "Wie lagerst du sie?",
        body: "Verdacht auf Herzinfarkt, sie ist wach, der Blutdruck noch stabil. Wie lagerst du sie bis der Arzt kommt?",
        glossarBegriffe: ["Oberkörperhochlagerung", "Bettruhe"],
      },
      question: {
        fragetext: "Welche Lagerung/Erstversorgung ist richtig?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Oberkörper hoch lagern, beengende Kleidung öffnen, für frische Luft sorgen und ihr absolute Bettruhe/keine Anstrengung ansagen.",
            isCorrect: true,
            explanation:
              "Richtig. Bei Herzbeschwerden entlastet die Oberkörperhochlagerung das Herz und erleichtert die Atmung; beengende Kleidung wird geöffnet, für frische Luft gesorgt. Absolute Bettruhe ist wichtig, weil körperliche Anstrengung den Sauerstoffbedarf des Herzens erhöht und die Situation verschlechtern kann.",
            explanationB1:
              "Richtig. Oberkörper hoch entlastet das Herz und erleichtert das Atmen. Enge Kleidung öffnen, frische Luft. Absolute Bettruhe ist wichtig, weil Anstrengung das Herz zusätzlich belastet.",
          },
          {
            text: "Flach hinlegen und die Beine hochlagern (Schocklage), damit das Herz besser durchblutet wird.",
            isCorrect: false,
            explanation:
              "Falsch — und für das Herz gefährlich. Die Schocklage (flach, Beine hoch) schwemmt vermehrt Blut zum Herzen zurück und belastet ein ohnehin geschädigtes Herz zusätzlich; sie kann eine Atemnot/Lungenstauung verstärken. Beim kardialen Geschehen wird der Oberkörper HOCH gelagert, nicht der Kopf tief.",
            explanationB1:
              "Falsch — und gefährlich für das Herz. Die Schocklage (flach, Beine hoch) schickt mehr Blut zum Herzen und belastet es zusätzlich. Beim Herz wird der Oberkörper HOCH gelagert, nicht flach mit Beinen hoch.",
          },
          {
            text: "Sie zum Aufstehen und ein paar Schritten bewegen, das lockert die Verkrampfung.",
            isCorrect: false,
            explanation:
              "Nein. In der Akutphase muss jede körperliche Anstrengung vermieden werden — Aufstehen und Gehen erhöhen den Sauerstoffbedarf des Herzens und können den Infarkt verschlimmern. Angesagt ist absolute Bettruhe mit Oberkörperhochlagerung.",
            explanationB1:
              "Nein. In der Akutphase muss Frau Yıldız jede Anstrengung vermeiden. Aufstehen und Gehen belasten das Herz mehr. Richtig ist absolute Bettruhe mit Oberkörper hoch.",
          },
        ],
      },
    },
    {
      stepId: "ce06-yildiz-erm-02",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 21.1.2/21.2.1 (Sauerstoff/Nitro nur auf Arztanordnung)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-yildiz-medikamente-arztanordnung",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-06", "F-01"],
      contentC1: {
        title: "Schnell noch Nitro und Sauerstoff?",
        body: "Eine Kollegin ruft: 'Gib ihr schnell nochmal zwei Hübe Nitro und häng Sauerstoff dran!' Stimmt das so?",
        glossarBegriffe: ["Nitroglyzerin", "Arztanordnung"],
      },
      contentB1: {
        title: "Schnell Nitro und Sauerstoff?",
        body: "Eine Kollegin ruft: 'Gib ihr schnell nochmal Nitro und Sauerstoff!' Stimmt das?",
        glossarBegriffe: ["Arztanordnung (= der Arzt ordnet an)"],
      },
      question: {
        fragetext: "Bewerte: eigenmächtig Nitro nachgeben und O2 anhängen.",
        trueFalseCards: [
          {
            statement: "Ich gebe ihr eigenmächtig noch zwei Hübe Nitrospray und lege selbst Sauerstoff an, das beschleunigt die Hilfe.",
            isTrue: false,
            explanation:
              "Falsch. Sauerstoffgabe und Nitroglyzerin werden nur auf ärztliche Anordnung verabreicht — nicht eigenmächtig. Dass ihr Nitrospray diesmal keine wesentliche Schmerzlinderung gebracht hat, ist gerade das Warnzeichen für einen Infarkt (nicht 'nur die Angina'). Und bei ihrem niedrigen Blutdruck kann eine erneute Nitrogabe den Kreislauf gefährlich weiter absenken. Deine Aufgabe: erkennen, lagern, überwachen, dokumentieren, Arzt informieren — und ärztliche Anordnungen umsetzen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-yildiz-erm-03",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 21.1.2 (Lagerung abbrechen bei RR < 90 & Puls > 100; kardiogener Schock)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-yildiz-kardiogener-schock",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "Der Blutdruck fällt",
        body: "Sie liegt mit erhöhtem Oberkörper. Beim nächsten Messen: Blutdruck 85/50 mmHg, Puls 112/min, sie wird zunehmend blass und benommen. Was tust du?",
        glossarBegriffe: ["kardiogener Schock", "Hypotonie"],
      },
      contentB1: {
        title: "Der Blutdruck fällt",
        body: "Sie liegt mit erhöhtem Oberkörper. Beim nächsten Messen: Blutdruck 85/50, Puls 112, sie wird blass und benommen. Was tust du?",
        glossarBegriffe: ["kardiogener Schock (= Herz pumpt zu schwach)"],
      },
      question: {
        fragetext: "RR 85/50, Puls 112, zunehmend benommen — was tust du?",
        branchingOptions: [
          {
            text: "Die Oberkörperhochlagerung abflachen, den Arzt sofort über die Verschlechterung informieren und engmaschig weiter überwachen — hier droht ein kardiogener Schock.",
            isCorrect: true,
            feedback:
              "Frau Yıldız stabilisiert sich in der flacheren Lage etwas, bleibt aber kritisch — der Arzt kommt sofort. Genau richtig: Bei einem Blutdruck unter 90 mmHg und einem Puls über 100/min muss die Oberkörperhochlagerung abgebrochen (abgeflacht) werden, weil sonst der Blutdruck weiter abfällt und ein kardiogener Schock bzw. eine Minderdurchblutung des Gehirns drohen. Sofort den Arzt informieren und engmaschig überwachen.",
            feedbackB1:
              "In der flacheren Lage geht es ihr etwas besser, aber sie bleibt kritisch — der Arzt kommt sofort. Genau richtig: Bei Blutdruck unter 90 und Puls über 100 muss die Oberkörperhochlagerung abgeflacht werden, sonst fällt der Blutdruck weiter und es droht ein kardiogener Schock. Sofort Arzt informieren, engmaschig überwachen.",
          },
          {
            text: "Den Oberkörper noch weiter hochstellen, dann bekommt sie besser Luft.",
            isCorrect: false,
            feedback:
              "Frau Yıldız wird noch blasser und kaum noch ansprechbar — der Blutdruck sackt weiter ab. Der Gedanke an die Atmung ist verständlich, aber bei diesem niedrigen Blutdruck (unter 90) und hohen Puls (über 100) verschärft eine noch stärkere Hochlagerung den Blutdruckabfall und die Hirn-Minderdurchblutung. Richtig ist, die Lagerung abzuflachen und den Arzt sofort zu informieren.",
            feedbackB1:
              "Frau Yıldız wird noch blasser und kaum ansprechbar — der Blutdruck fällt weiter. Der Gedanke an die Atmung ist verständlich, aber bei so niedrigem Blutdruck macht noch höher Lagern es schlimmer. Richtig: flacher lagern und sofort den Arzt informieren.",
          },
          {
            text: "Weiter beobachten und beim nächsten regulären Rundgang erneut messen.",
            isCorrect: false,
            feedback:
              "Beim nächsten Rundgang findest du sie im Kollaps — wertvolle Zeit ist verloren. Ein Blutdruck von 85/50 mit Puls 112 und zunehmender Benommenheit ist eine akute Verschlechterung (drohender kardiogener Schock), kein Fall fürs Abwarten. Sofort handeln: Lagerung abflachen, Arzt informieren, engmaschig überwachen.",
            feedbackB1:
              "Beim nächsten Rundgang ist sie kollabiert — Zeit ist verloren. Blutdruck 85/50, Puls 112 und zunehmende Benommenheit sind eine akute Verschlechterung, kein Fall zum Abwarten. Sofort: flacher lagern, Arzt informieren, überwachen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 13,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_YILDIZ_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-yildiz-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an den Arzt",
  titelB1: "Übergabe an den Arzt",
  kontext:
    "Der Arzt trifft ein, das EKG-Gerät wird angeschlossen. Er fragt: \"Was ist passiert?\"",
  kontextB1:
    "Der Arzt kommt, das EKG wird angeschlossen. Er fragt: \"Was ist passiert?\"",
  kernSteps: [
    {
      stepId: "ce06-yildiz-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-sbar",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "SBAR-Übergabe",
        body: "Welche Übergabe folgt SBAR und bringt das Entscheidende zuerst?",
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
            text: "\"Frau Yıldız, 62, seit ca. 19:40 anhaltender Thoraxschmerz mit Ausstrahlung in den linken Arm, kalter Schweiß (S). Bekannte KHK/Angina, Diabetes, Hypertonie — Nitrospray brachte diesmal keine Besserung (B). RR jetzt 85/50, Puls 112, zunehmend benommen, Oberkörper abgeflacht (A). V.a. akutes Koronarsyndrom, bitte EKG und Herzkatheter-Anmeldung (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR mit dem entscheidenden Background (Nitro half diesmal NICHT → Infarktverdacht) und dem aktuellen kritischen Assessment (Hypotonie/Tachykardie). Der Arzt kann sofort priorisieren (EKG, Herzkatheter). Zeit ist beim Infarkt Herzmuskel.",
            explanationB1:
              "Richtig. Vollständiges SBAR mit dem wichtigen Punkt (Nitro half diesmal NICHT → Infarktverdacht) und dem kritischen Zustand jetzt (niedriger Blutdruck, schneller Puls). Der Arzt kann sofort handeln.",
          },
          {
            text: "\"Sie hat wieder ihre Angina, ich habe sie hochgelagert, wird schon wieder.\"",
            isCorrect: false,
            explanation:
              "Gefährlich verkürzt. Genau die entscheidende Information fehlt — dass das Nitro diesmal NICHT half und der Blutdruck abfällt. 'Wird schon wieder' verkennt den Infarktverdacht und die akute Verschlechterung. SBAR verlangt die harten Fakten und eine klare Empfehlung.",
            explanationB1:
              "Gefährlich verkürzt. Es fehlt das Wichtigste — dass das Nitro diesmal NICHT half und der Blutdruck fällt. 'Wird schon wieder' übersieht den Infarktverdacht.",
          },
          {
            text: "\"Sie war früher Näherin, kam aus der Türkei, hat Diabetes und Bluthochdruck seit Jahren.\"",
            isCorrect: false,
            explanation:
              "Am Notfall vorbei. Das ist überwiegend Hintergrund zur Person. Es fehlen das akute Ereignis (anhaltender Thoraxschmerz, Nitro wirkungslos), das kritische Assessment (RR/Puls) und die Empfehlung. SBAR priorisiert das medizinisch Entscheidende.",
            explanationB1:
              "Am Notfall vorbei. Das ist Hintergrund zur Person. Es fehlen das akute Ereignis, der kritische Zustand und die Bitte.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_YILDIZ_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-yildiz-reflektieren",
  phase: "reflektieren",
  titel: "„Das kenne ich schon“ — die gefährlichste Falle",
  titelB1: "„Das kenne ich schon“",
  kontext:
    "Frau Yıldız ist im Herzkatheterlabor. Du denkst an ihren Satz vom Anfang: 'Das kenne ich schon, das ist meine Angina.'",
  kontextB1:
    "Frau Yıldız ist im Herzkatheter. Du denkst an ihren Satz: 'Das kenne ich schon.'",
  kernSteps: [
    {
      stepId: "ce06-yildiz-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.2",
      quellen: ["Pflege heute 2019, Kap. 21.1.1 (Ängste der Herzpatienten; Beschwerden ernst nehmen)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-yildiz-reflexion",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Zwischen der vertrauten Selbsteinschätzung der Patientin, der Zeitkritik und ihren Ängsten — reflektiere die Situation.",
        glossarBegriffe: ["Zeit ist Herzmuskel", "atypische Symptome", "Angst/Coping"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Die vertraute Selbsteinschätzung der Patientin, die Zeitkritik und ihre Angst — denke über die Situation nach.",
        glossarBegriffe: ["Zeit ist Herzmuskel"],
      },
      question: {
        fragetext: "Reflektiere die Situation und deine Konsequenzen.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Warum ist 'das kenne ich schon, das ist nur meine Angina' hier so gefährlich, und welches Zeichen entlarvt den Unterschied zum Infarkt? 2) Warum musst du gerade bei Frauen und Diabetikern besonders wachsam sein? 3) Wie gehst du mit der Angst/Todesangst der Patientin um, ohne falsch zu beruhigen? 4) Was nimmst du für den nächsten 'bekannten' Thoraxschmerz mit?",
          placeholder:
            "'Das kenne ich schon' ist gefährlich, weil … Der Unterschied zum Infarkt zeigt sich an … Bei Frauen/Diabetikern besonders wachsam, weil … Mit ihrer Angst gehe ich so um … Mitnehmen würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler, dass die ausbleibende Besserung auf Ruhe/Nitrat das entscheidende Warnzeichen (ACS statt stabiler Angina) ist und dass jeder akute Thoraxschmerz bis zum Beweis des Gegenteils bedrohlich ist? Benennt er die erhöhte Wachsamkeit bei Frauen/Diabetikern (atypische/abgeschwächte Symptome)? Adressiert er den Umgang mit der Todesangst (ruhige Präsenz, Sicherheit vermitteln, nicht verharmlosen) und die Zeitkritik ('Zeit ist Herzmuskel')? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};
