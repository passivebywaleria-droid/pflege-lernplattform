// CE-06 Situation „Herr Ríos — Synkope während der Dialyse"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE1-K3 (neurologische Akutsituationen diagnostizieren + Erste Hilfe einleiten).
// Grounding: specs/ce-06/kernfakten/neurologische-akutsituationen.md + notfallassessment.md (Verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 21 (Synkope), 26.6.5 (Hypoglykämie), 14/15 (Lagerung).
//
// KRITISCHE ABGRENZUNG (bewusst so gebaut):
//  - KEIN „FAST-Schema" als Schlaganfall-Instrument (Korpus-Homonym Trauma-Sonografie; nicht belegt).
//  - KEINE pauschale Trendelenburg/Kopftieflage (bei Hirndruck/Atemnot/Übelkeit kontraindiziert, F-07).
//  - KEINE ml-Dosis für Glukose i.v. behauptet (ärztliche Anordnung; Dosis nicht im Korpus belegt).
//  - Shunt: Pflege punktiert nicht eigenmächtig; i.v.-Glukose ist ärztliche Behandlung (F-05).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_RIOS_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-rios-erkennen",
  phase: "erkennen",
  titel: "Plötzlich reagiert er nicht mehr",
  titelB1: "Er reagiert nicht mehr",
  kontext:
    "Herr Ríos liegt im Dialysestuhl, die Behandlung läuft in der zweiten Stunde. Plötzlich wird er blass, die Augen verdrehen sich kurz, er antwortet nicht mehr auf deine Ansprache. Auf einen Schmerzreiz reagiert er noch mit einem Stöhnen. Er atmet, der Puls am freien Arm ist tastbar. Der Monitor zeigt einen Blutdruckabfall.",
  kontextB1:
    "Herr Ríos liegt im Dialysestuhl. Die zweite Stunde läuft. Plötzlich wird er blass und antwortet nicht mehr. Auf einen Schmerzreiz stöhnt er noch. Er atmet, der Puls ist tastbar. Der Monitor zeigt: Blutdruck fällt.",
  kernSteps: [
    {
      stepId: "ce06-rios-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 (Hypoglykämie — Blutzuckermessung sofort)", "Kap. 21.2.3 (Synkope)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-rios-erst-diagnostik",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-01", "F-04"],
      contentC1: {
        title: "Was ist dein erster diagnostischer Schritt?",
        body: "Ein Diabetiker unter Insulin wird während der Dialyse plötzlich bewusstseinsgetrübt. Mehrere Ursachen sind denkbar. Was klärst du als Erstes ab — schnell und mit einem Handgriff?",
        glossarBegriffe: ["Synkope", "Differentialdiagnose", "Blutzuckermessung"],
      },
      contentB1: {
        title: "Was prüfst du zuerst?",
        body: "Ein Diabetiker mit Insulin wird während der Dialyse plötzlich benommen. Es kann mehrere Ursachen geben. Was prüfst du als Erstes — schnell und einfach?",
        glossarBegriffe: ["Synkope (= kurze Ohnmacht)", "Blutzucker messen"],
      },
      question: {
        fragetext: "Was ist dein erster diagnostischer Schritt?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Sofort den Blutzucker messen — das klärt mit einem Stich, ob eine Unterzuckerung dahintersteckt.",
            isCorrect: true,
            explanation:
              "Richtig. Eine Hypoglykämie kann Bewusstseinstrübung, neurologische Ausfälle und sogar einen Schlaganfall imitieren — und die Diagnose ist durch Blutzuckermessung sofort möglich. Gerade beim Diabetiker unter Insulin, der heute wenig gegessen hat, ist das der schnellste und wichtigste erste Schritt. Parallel: Bewusstsein, Atmung, Puls prüfen.",
            explanationB1:
              "Richtig. Eine Unterzuckerung kann wie ein Schlaganfall aussehen — und du klärst sie mit einem Blutzucker-Stich sofort. Bei einem Diabetiker mit Insulin, der wenig gegessen hat, ist das der wichtigste erste Schritt.",
          },
          {
            text: "Sofort den Schlaganfall-Alarm auslösen — die verdrehten Augen und die Bewusstseinsstörung sprechen eindeutig für einen Apoplex.",
            isCorrect: false,
            explanation:
              "Zu früh festgelegt. Eine Bewusstseinsstörung mit neurologischen Zeichen kann viele Ursachen haben — eine Hypoglykämie imitiert einen Schlaganfall täuschend echt. Wer sofort auf Apoplex festlegt, übersieht womöglich eine sofort behebbare Unterzuckerung. Erst Blutzucker messen (ein Handgriff), dann weiter differenzieren.",
            explanationB1:
              "Zu schnell entschieden. Eine Unterzuckerung sieht oft wie ein Schlaganfall aus. Wer sofort 'Schlaganfall' sagt, übersieht vielleicht die Unterzuckerung, die man schnell beheben kann. Erst Blutzucker messen.",
          },
          {
            text: "Erst mal abwarten und beobachten — bei Dialyse fällt der Blutdruck oft, das gibt sich meist von selbst.",
            isCorrect: false,
            explanation:
              "Gefährlich. Ein Blutdruckabfall unter Dialyse kommt vor — aber eine Bewusstseinsstörung einfach auszusitzen, ohne die Ursache zu klären, kann eine Hypoglykämie oder ein kardiales Ereignis verschleppen. Bei gestörtem Bewusstsein wird sofort gehandelt und gemessen, nicht abgewartet.",
            explanationB1:
              "Gefährlich. Bei Dialyse fällt der Blutdruck manchmal. Aber eine Bewusstseinsstörung einfach abzuwarten ist falsch — es könnte eine Unterzuckerung oder ein Herzproblem sein. Sofort handeln und messen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-rios-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 (Hypoglykämie unter 50 mg/dl; Insulin + zu wenig KH)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-rios-hypoglykaemie-einordnen",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-03", "F-04"],
      contentC1: {
        title: "Der Blutzucker ist 48 mg/dl",
        body: "Dein Messgerät zeigt 48 mg/dl. Herr Ríos hat heute Morgen kaum gefrühstückt, aber sein Insulin normal gespritzt. Wie ordnest du den Wert ein?",
        glossarBegriffe: ["Hypoglykämie", "Insulin"],
      },
      contentB1: {
        title: "Der Blutzucker ist 48 mg/dl",
        body: "Dein Gerät zeigt 48 mg/dl. Herr Ríos hat heute kaum gefrühstückt, aber sein Insulin normal gespritzt. Was bedeutet das?",
        glossarBegriffe: ["Hypoglykämie (= Unterzuckerung)"],
      },
      question: {
        fragetext: "Wie ordnest du den Blutzucker von 48 mg/dl ein?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Das ist eine Hypoglykämie — sie passt zu Insulin plus zu wenig gegessen.",
            isCorrect: true,
            explanation:
              "Richtig. Eine Hypoglykämie liegt bei einem Blutzucker unter 50 mg/dl vor. Die typische Ursache ist genau diese Kombination: gewohnte Insulindosis, aber zu wenig gegessen. Das erklärt die neurologischen Zeichen — sie sind Folge des Glukosemangels im Gehirn und bilden sich bei rechtzeitiger Behandlung zurück. (Hinweis: Manche Leitlinien setzen die Schwelle höher an — bei Symptomen und Insulintherapie ist schon ein niedrig-normaler Wert behandlungsbedürftig; 48 mg/dl ist ohnehin eindeutig zu niedrig.)",
            explanationB1:
              "Richtig. Unter 50 mg/dl ist eine Unterzuckerung. Die Ursache hier: normales Insulin, aber zu wenig gegessen. Das erklärt die Bewusstseinsstörung — mit schneller Behandlung bildet sie sich zurück.",
          },
          {
            text: "48 mg/dl ist zwar niedrig, aber noch im Normbereich — solange er nicht krampft, ist das unkritisch.",
            isCorrect: false,
            explanation:
              "Nein. Ein Blutzucker unter 50 mg/dl ist definitionsgemäß eine Hypoglykämie und bei bestehender Bewusstseinsstörung sogar eine schwere. Sie zu bagatellisieren ist gefährlich: Unbehandelt drohen Krampfanfälle bis hin zu Atem- und Kreislaufstörungen. Hier ist sofortiges Handeln nötig.",
            explanationB1:
              "Nein. Unter 50 mg/dl ist eine Unterzuckerung, mit Bewusstseinsstörung sogar eine schwere. Das ist gefährlich — unbehandelt drohen Krampfanfälle. Jetzt sofort handeln.",
          },
          {
            text: "Der Wert ist bei einem Dialysepatienten unzuverlässig — ich verwerfe ihn und behandle nur die Kreislaufstörung.",
            isCorrect: false,
            explanation:
              "Nicht plausibel. Es gibt keinen Grund, einen klaren Messwert von 48 mg/dl zu verwerfen, der zur Anamnese (Insulin + wenig gegessen) und zur Klinik (Bewusstseinsstörung) passt. Bei Zweifel wird nachgemessen, nicht ignoriert. Die Unterzuckerung IST hier die wahrscheinlichste Ursache.",
            explanationB1:
              "Nicht sinnvoll. Der Wert 48 mg/dl passt zur Vorgeschichte und zu den Symptomen. Bei Zweifel nachmessen — nicht ignorieren. Die Unterzuckerung ist hier die wahrscheinlichste Ursache.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_RIOS_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-rios-alarmieren",
  phase: "alarmieren",
  titel: "Hilfe und ärztliche Anordnung",
  titelB1: "Hilfe holen",
  kontext:
    "Herr Ríos ist weiter bewusstseinsgetrübt (er reagiert nur auf Schmerzreiz), Blutzucker 48 mg/dl. Deine Kollegin ist zwei Plätze weiter, der Dialysearzt im Nebenraum.",
  kontextB1:
    "Herr Ríos ist weiter benommen (reagiert nur auf Schmerzreiz), Blutzucker 48 mg/dl. Deine Kollegin ist in der Nähe, der Arzt im Nebenraum.",
  kernSteps: [
    {
      stepId: "ce06-rios-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 (schwere Hypoglykämie: Fremdhilfe/ärztliche Behandlung)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-rios-alarmieren",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-05"],
      contentC1: {
        title: "Wen holst du — und warum sofort?",
        body: "Schwere Hypoglykämie mit Bewusstseinsstörung. Wie handelst du in den nächsten Sekunden?",
        glossarBegriffe: ["schwere Hypoglykämie", "ärztliche Anordnung"],
      },
      contentB1: {
        title: "Wen holst du?",
        body: "Schwere Unterzuckerung mit Bewusstseinsstörung. Was tust du in den nächsten Sekunden?",
        glossarBegriffe: ["ärztliche Anordnung (= der Arzt ordnet an)"],
      },
      question: {
        fragetext: "Wie handelst du beim Alarmieren?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich rufe die Kollegin gezielt dazu und lasse sofort den Dialysearzt holen — und bleibe selbst bei Herrn Ríos.",
            isCorrect: true,
            explanation:
              "Richtig. Bei schwerer Hypoglykämie mit Bewusstseinsstörung ist Fremdhilfe nötig, und die weitergehende Behandlung (Glukose i.v.) ist ärztliche Aufgabe. Du sicherst parallel Bewusstsein, Atmung und Kreislauf und bleibst am Patienten. Klare, namentliche Delegation an die Kollegin statt ungerichteter Rufe.",
            explanationB1:
              "Richtig. Eine schwere Unterzuckerung mit Bewusstseinsstörung braucht den Arzt. Du sprichst die Kollegin direkt an, lässt den Arzt holen und bleibst bei Herrn Ríos, um ihn zu überwachen.",
          },
          {
            text: "Ich versuche es erst allein — ich flöße ihm schnell etwas Traubenzucker ein, dann muss ich niemanden stören.",
            isCorrect: false,
            explanation:
              "Doppelt falsch. Erstens ist bei Bewusstseinsstörung die orale Gabe gefährlich (Aspiration) — dazu gleich mehr in der nächsten Phase. Zweitens gehört eine schwere Hypoglykämie ärztlich behandelt; sie im Alleingang 'lösen' zu wollen, verzögert die richtige Hilfe. Immer Hilfe holen und Arzt informieren.",
            explanationB1:
              "Falsch. Bei Bewusstseinsstörung ist Essen/Trinken gefährlich (er kann sich verschlucken). Und eine schwere Unterzuckerung gehört zum Arzt. Immer Hilfe holen.",
          },
          {
            text: "Ich beende erst geordnet die Dialyse und alarmiere dann in Ruhe den Arzt.",
            isCorrect: false,
            explanation:
              "Reihenfolge falsch. Ein bewusstseinsgetrübter Patient mit schwerer Hypoglykämie duldet keinen Aufschub — der Arzt wird sofort geholt, nicht erst nach organisatorischen Schritten. Was mit der Dialyse geschieht (z.B. Reduktion des Flüssigkeitsentzugs), entscheidet der Arzt bzw. erfolgt nach Anordnung; die akute Gefahr hat Vorrang.",
            explanationB1:
              "Reihenfolge falsch. Ein benommener Patient mit schwerer Unterzuckerung braucht sofort den Arzt — nicht erst die Dialyse ordentlich beenden. Die akute Gefahr kommt zuerst.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (kritische Anfänger-Falle: orale Gabe)
export const CE06_SIT_RIOS_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-rios-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Erste Hilfe — sicher, nicht schnell-falsch",
  titelB1: "Erste Hilfe — sicher",
  kontext:
    "Der Arzt ist informiert und auf dem Weg. Herr Ríos reagiert weiterhin nur auf Schmerzreiz. Deine Kollegin greift schon nach der Apfelsaftflasche vom Tisch.",
  kontextB1:
    "Der Arzt kommt gleich. Herr Ríos reagiert nur auf Schmerzreiz. Deine Kollegin greift schon zur Apfelsaftflasche.",
  kernSteps: [
    {
      stepId: "ce06-rios-erm-01",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 (Behandlung nach Bewusstsein; orale Gabe/Aspiration)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-rios-keine-orale-gabe",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-05"],
      contentC1: {
        title: "„Gib ihm schnell den Apfelsaft!“",
        body: "Deine Kollegin will Herrn Ríos Apfelsaft einflößen: \"Der Zucker muss hoch, schnell!\" Er reagiert aber nur auf Schmerzreiz — schluckt also nicht sicher. Was tust du?",
        glossarBegriffe: ["Aspiration", "Schluckfähigkeit", "orale Glukose"],
      },
      contentB1: {
        title: "„Gib ihm schnell den Apfelsaft!“",
        body: "Deine Kollegin will Herrn Ríos Apfelsaft einflößen: \"Der Zucker muss hoch!\" Aber er reagiert nur auf Schmerzreiz — er kann nicht sicher schlucken. Was tust du?",
        glossarBegriffe: ["Aspiration (= Verschlucken in die Lunge)", "schlucken können"],
      },
      question: {
        fragetext: "Die Kollegin will Apfelsaft geben — was tust du?",
        branchingOptions: [
          {
            text: "Ich halte sie klar auf: \"Stopp — er ist nicht wach genug zum Schlucken.\" Bei Bewusstseinsstörung wird nichts oral gegeben (Aspirationsgefahr). Ich lagere ihn sicher, überwache Atmung und Bewusstsein und bereite die ärztlich angeordnete Glukose i.v. vor.",
            isCorrect: true,
            feedback:
              "Genau richtig — und das ist die entscheidende Sicherheitsentscheidung dieser Situation. Orale Kohlenhydrate helfen nur beim wachen, schluckfähigen Patienten. Bei Bewusstseinsstörung besteht Aspirationsgefahr: Saft in die Lunge kann eine lebensbedrohliche Aspirationspneumonie auslösen. Für den bewusstseinsgetrübten Patienten ist die Behandlung Glukose 40 % i.v. — und die ist ärztliche Aufgabe; du bereitest vor und assistierst.",
            feedbackB1:
              "Genau richtig — das ist die wichtigste Entscheidung hier. Saft hilft nur, wenn jemand wach ist und schlucken kann. Bei Bewusstseinsstörung kann der Saft in die Lunge laufen — das ist lebensgefährlich. Für Herrn Ríos ist Glukose über die Vene richtig, und die gibt der Arzt.",
          },
          {
            text: "Ich helfe ihr, den Apfelsaft vorsichtig einzuflößen — Hauptsache, der Zucker kommt schnell hoch.",
            isCorrect: false,
            feedback:
              "Der Impuls, schnell Zucker zuzuführen, ist verständlich — aber die Umsetzung ist gefährlich. Herr Ríos reagiert nur auf Schmerzreiz und kann nicht sicher schlucken; Flüssigkeit läuft dann leicht in die Atemwege (Aspiration). Merksatz: orale Gabe NUR beim wachen, schluckfähigen Patienten. Bei Bewusstseinsstörung: nichts oral, Glukose i.v. durch den Arzt.",
            feedbackB1:
              "Der Gedanke, schnell Zucker zu geben, ist verständlich — aber so ist es gefährlich. Herr Ríos kann nicht sicher schlucken, der Saft kann in die Lunge laufen. Regel: Essen/Trinken nur, wenn jemand wach ist. Sonst: Glukose über die Vene durch den Arzt.",
          },
          {
            text: "Ich sage nichts und lasse sie machen — sie ist länger dabei als ich, sie wird schon wissen, was sie tut.",
            isCorrect: false,
            feedback:
              "Nein — auch wenn es Überwindung kostet, eine erfahrenere Kollegin zu stoppen: Patientensicherheit geht vor Hierarchie. Hier droht eine Aspiration, und dein Wissen ist an dieser Stelle das richtige. Ein ruhiges, klares 'Stopp — er kann nicht sicher schlucken' schützt den Patienten. Sich hinter Erfahrung zu verstecken, wäre unterlassene Hilfeleistung am Patienten.",
            feedbackB1:
              "Nein. Auch wenn es schwerfällt, eine erfahrenere Kollegin zu stoppen: Die Sicherheit des Patienten ist wichtiger. Hier droht Verschlucken. Ein ruhiges 'Stopp — er kann nicht sicher schlucken' schützt Herrn Ríos.",
          },
        ],
      },
    },
    {
      stepId: "ce06-rios-erm-02",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 (Glukose 40 % i.v. = ärztliche Behandlung)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-rios-shunt-kompetenzgrenze",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-05"],
      contentC1: {
        title: "Der Shunt — und wer was darf",
        body: "Der Arzt ordnet Glukose 40 % i.v. an. Deine Kollegin schlägt vor, sie schnell selbst über den Dialyse-Shunt am linken Arm zu spritzen. Wie reagierst du?",
        glossarBegriffe: ["arteriovenöser Shunt", "Kompetenzgrenze", "ärztliche Tätigkeit"],
      },
      contentB1: {
        title: "Der Shunt — wer darf was?",
        body: "Der Arzt ordnet Glukose 40 % über die Vene an. Deine Kollegin will sie schnell selbst über den Shunt am Arm spritzen. Wie reagierst du?",
        glossarBegriffe: ["Shunt (= Gefäßzugang für die Dialyse)", "Kompetenzgrenze"],
      },
      question: {
        fragetext: "Wie gehst du mit Shunt und Zuständigkeit um?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Die i.v.-Glukose ist ärztliche Aufgabe — ich punktiere den Shunt nicht selbst, sondern schütze ihn und assistiere dem Arzt.",
            isCorrect: true,
            explanation:
              "Richtig. Die Behandlung der schweren Hypoglykämie mit Glukose 40 % i.v. ist eine ärztliche Tätigkeit. Der Shunt ist die Lebensader des Dialysepatienten und wird geschützt — Pflege punktiert ihn nicht eigenmächtig für Medikamente. Deine Rolle: Material vorbereiten, Zugangssituation melden, assistieren, überwachen.",
            explanationB1:
              "Richtig. Glukose über die Vene ist Aufgabe des Arztes. Der Shunt ist lebenswichtig für die Dialyse — du stichst ihn nicht selbst für Medikamente an. Deine Aufgabe: Material vorbereiten, dem Arzt melden, assistieren, überwachen.",
          },
          {
            text: "Gute Idee — der Shunt ist der schnellste Zugang, ich spritze die Glukose selbst hinein, damit es zügig geht.",
            isCorrect: false,
            explanation:
              "Nein, gleich mehrfach problematisch. Die i.v.-Gabe hochprozentiger Glukose ist ärztlich; eine eigenmächtige Injektion überschreitet die Kompetenz. Und der Shunt darf nicht beliebig für Medikamente punktiert werden — Fehlpunktionen oder Infektionen können ihn zerstören und damit die Dialyse gefährden. Schützen, melden, assistieren — nicht selbst spritzen.",
            explanationB1:
              "Nein. Glukose über die Vene ist Aufgabe des Arztes — selbst spritzen überschreitet deine Kompetenz. Und der Shunt darf nicht einfach für Medikamente benutzt werden, sonst geht er kaputt und die Dialyse ist gefährdet.",
          },
          {
            text: "Ich lehne die i.v.-Glukose ab und schlage vor, stattdessen doch etwas Traubenzucker unter die Zunge zu legen.",
            isCorrect: false,
            explanation:
              "Nein. Die ärztliche Anordnung ist bei bewusstseinsgetrübtem Patienten korrekt — Glukose i.v. ist genau der richtige Weg. Traubenzucker unter die Zunge bei fehlender Schluckfähigkeit birgt weiter Aspirationsgefahr und wirkt unzuverlässig. Du assistierst bei der angeordneten i.v.-Gabe, statt sie durch eine unsichere orale Maßnahme zu ersetzen.",
            explanationB1:
              "Nein. Bei einem benommenen Patienten ist Glukose über die Vene richtig. Traubenzucker unter die Zunge ist gefährlich (Verschlucken) und unsicher. Du hilfst bei der angeordneten Glukose über die Vene.",
          },
        ],
      },
    },
    {
      stepId: "ce06-rios-erm-03",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14/5.5 (Lagerung); Kap. 15 (Kopftieflage kontraindiziert)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-rios-lagerung",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-06", "F-07"],
      contentC1: {
        title: "Wie lagerst du ihn?",
        body: "Herr Ríos ist blass, der Blutdruck niedrig, das Bewusstsein getrübt, die Atmung vorhanden. Wie lagerst du ihn, bis die Glukose wirkt?",
        glossarBegriffe: ["Schocklage", "stabile Seitenlage", "Kopftieflage"],
      },
      contentB1: {
        title: "Wie lagerst du ihn?",
        body: "Herr Ríos ist blass, der Blutdruck niedrig, benommen, aber er atmet. Wie lagerst du ihn, bis die Glukose wirkt?",
        glossarBegriffe: ["stabile Seitenlage"],
      },
      question: {
        fragetext: "Welche Lagerung ist hier richtig?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Da er nur auf Schmerzreiz reagiert, hat die stabile Seitenlage (Atemwegsschutz) Vorrang; Beine hochlegen als Kreislaufhilfe, soweit die Dialyse-Zugänge es zulassen.",
            isCorrect: true,
            explanation:
              "Richtig. Weil Herr Ríos bereits bewusstseinsgetrübt ist (reagiert nur auf Schmerzreiz), steht der Atemwegsschutz an erster Stelle: die stabile Seitenlage verhindert Aspiration. Das Hochlegen der Beine unterstützt bei niedrigem Blutdruck ergänzend den Kreislauf, soweit es die Blutlinien/Zugänge der Dialyse zulassen. Dazu kontinuierliche Überwachung von Atmung und Bewusstsein.",
            explanationB1:
              "Richtig. Flach lagern und Beine hoch hilft dem Kreislauf. Wenn er nicht sicher wach ist, kommt er in die stabile Seitenlage, damit die Atemwege frei bleiben. Dabei ständig überwachen.",
          },
          {
            text: "Sofort eine ausgeprägte Kopftieflage (Trendelenburg) — je tiefer der Kopf, desto mehr Blut kommt ins Gehirn.",
            isCorrect: false,
            explanation:
              "Falsch und potenziell schädlich. Eine Kopftieflage ist bei akuter Atemnot, erhöhtem Hirndruck oder Übelkeit kontraindiziert und verbessert die Hirndurchblutung nicht verlässlich; bei Bewusstseinsstörung erhöht sie zudem die Aspirationsgefahr. Richtig ist flach mit erhöhten Beinen, bei Bewusstlosigkeit stabile Seitenlage — nicht Kopf tief.",
            explanationB1:
              "Falsch und gefährlich. Eine starke Kopftieflage ist bei Atemnot, Hirndruck oder Übelkeit verboten und hilft dem Gehirn nicht sicher. Richtig: flach mit Beinen hoch, bei Bewusstlosigkeit stabile Seitenlage.",
          },
          {
            text: "Aufrecht hinsetzen, damit er besser zu sich kommt und atmen kann.",
            isCorrect: false,
            explanation:
              "Nein. Aufrechtes Sitzen verschlechtert bei niedrigem Blutdruck und Kreislaufschwäche die Hirndurchblutung — der Patient kann erneut kollabieren. Bei Ohnmacht/Hypotonie werden die Beine hochgelegt; bei Bewusstseinsstörung sichert die stabile Seitenlage die Atemwege.",
            explanationB1:
              "Nein. Aufrecht sitzen ist bei niedrigem Blutdruck schlecht — das Gehirn bekommt weniger Blut, er kann wieder umkippen. Besser: Beine hoch, bei Bewusstseinsstörung stabile Seitenlage.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_RIOS_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-rios-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an die Station",
  titelB1: "Übergabe",
  kontext:
    "Nach der ärztlich verabreichten Glukose klart Herr Ríos auf; ein Kontroll-Blutzucker steigt auf 120 mg/dl. Er soll zur Überwachung auf die internistische Station verlegt werden. Die aufnehmende Pflegekraft fragt: 'Was ist passiert?'",
  kontextB1:
    "Nach der Glukose vom Arzt wird Herr Ríos wieder wach; der Kontroll-Blutzucker ist 120 mg/dl. Er soll zur Überwachung auf die Station. Die Pflegekraft dort fragt: 'Was ist passiert?'",
  kernSteps: [
    {
      stepId: "ce06-rios-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-rios-sbar",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "SBAR-Übergabe",
        body: "Fasse den Verlauf strukturiert nach SBAR zusammen. Welche Übergabe ist vollständig und priorisiert?",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "Übergabe mit SBAR",
        body: "Fasse den Verlauf mit SBAR zusammen. Welche Übergabe ist vollständig?",
        glossarBegriffe: ["SBAR (= Situation, Background, Assessment, Recommendation)"],
      },
      question: {
        fragetext: "Welche SBAR-Übergabe ist vollständig und priorisiert?",
        mcVariant: "standard",
        optionen: [
          {
            text: "\"Herr Ríos, 63, während der Dialyse synkopiert und bewusstseinsgetrübt (S). Dialysepflichtiger Diabetiker unter Insulin, heute kaum gegessen (B). Blutzucker 48 mg/dl — schwere Hypoglykämie; nach ärztlicher Glukose i.v. wach, Kontrolle 120 mg/dl, Shunt intakt (A). Bitte Übernahme zur Überwachung, engmaschige Blutzuckerkontrolle, Insulinschema überprüfen (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR: Situation (Ereignis + wann), Background (Dialyse, Diabetes/Insulin, wenig gegessen — die Ursache), Assessment (Messwert, Diagnose, Verlauf nach Therapie, Shunt-Status), Recommendation (Überwachung, Blutzuckerkontrolle, Insulinschema). Der Empfänger kann sofort sicher weiterarbeiten.",
            explanationB1:
              "Richtig. Vollständiges SBAR: Was ist passiert, Vorgeschichte (Dialyse, Diabetes, wenig gegessen), Zustand (Blutzucker, Verlauf, Shunt) und die Bitte (überwachen, Blutzucker kontrollieren, Insulin prüfen).",
          },
          {
            text: "\"Kurze Unterzuckerung, ist wieder wach, alles gut — müsst ihr nicht groß überwachen.\"",
            isCorrect: false,
            explanation:
              "Zu knapp und beschönigend. Nach einer schweren Hypoglykämie ist eine Überwachung nötig (Ursache, mögliche erneute Unterzuckerung, Insulinanpassung). Es fehlen Situation, Background (Dialyse/Insulin) und eine klare Empfehlung. 'Alles gut' ist keine Übergabe.",
            explanationB1:
              "Zu kurz und beschönigt. Nach einer schweren Unterzuckerung muss überwacht werden. Es fehlen die Vorgeschichte und eine klare Bitte. 'Alles gut' ist keine Übergabe.",
          },
          {
            text: "\"Er ist Chilene, war Bauleiter, seine Frau wartet draußen — sehr netter Mann, macht immer Witze.\"",
            isCorrect: false,
            explanation:
              "Am Wesentlichen vorbei. Das ist Biografisches, nicht der medizinisch relevante Verlauf. SBAR fordert die entscheidenden Fakten: Ereignis, Vorgeschichte (Diabetes/Insulin/Dialyse), Befund (Hypoglykämie, Therapie, Verlauf) und die Empfehlung. Persönliches kann ergänzend erwähnt werden, ersetzt aber die klinische Übergabe nicht.",
            explanationB1:
              "Am Wichtigen vorbei. Das ist Persönliches, nicht der medizinische Verlauf. SBAR braucht: Ereignis, Vorgeschichte, Befund und Bitte. Persönliches ist nur eine Ergänzung.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_RIOS_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-rios-reflektieren",
  phase: "reflektieren",
  titel: "Das übersehene Warnzeichen",
  titelB1: "Das Warnzeichen",
  kontext:
    "Später denkst du an Herrn Ríos' Satz vom Anfang: 'Heute fühle ich mich komisch. Aber wahrscheinlich das Wetter.' War das schon ein Frühzeichen?",
  kontextB1:
    "Später denkst du an seinen Satz: 'Heute fühle ich mich komisch.' War das schon ein Warnzeichen?",
  kernSteps: [
    {
      stepId: "ce06-rios-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.2",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 (Hypoglykämie-Frühzeichen; Prävention)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-rios-reflexion-fruehzeichen",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Frühe Hypoglykämie-Zeichen (Unruhe, Schwitzen, 'sich komisch fühlen') werden leicht als Nebensache abgetan — gerade bei Menschen, die ihre Beschwerden herunterspielen. Reflektiere den Fall.",
        glossarBegriffe: ["Frühwarnzeichen", "Hypoglykämiewahrnehmung", "Prävention"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Frühe Zeichen einer Unterzuckerung (Unruhe, Schwitzen, 'sich komisch fühlen') werden leicht übersehen — besonders bei Menschen, die Beschwerden herunterspielen. Denke über den Fall nach.",
        glossarBegriffe: ["Frühwarnzeichen"],
      },
      question: {
        fragetext: "Reflektiere den Verlauf und deine Konsequenzen.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Warum war 'Ich fühle mich komisch' möglicherweise ein Frühzeichen, das man ernst nehmen sollte? 2) Welcher eine diagnostische Schritt war der Schlüssel und wird leicht vergessen? 3) Welche konkrete Präventions-/Systemidee ziehst du für Diabetiker an Dialysetagen (z.B. Blutzucker-Kontrolle, Insulin-/Essensplanung)? 4) Was nimmst du für die nächste unklare neurologische Akutsituation mit?",
          placeholder:
            "'Ich fühle mich komisch' könnte bedeuten … Der Schlüsselschritt war … Zur Prävention würde ich … Für die nächste unklare Situation nehme ich mit …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler, dass frühe, unspezifische Hypoglykämie-Zeichen ernst zu nehmen sind — gerade wenn Patienten Beschwerden herunterspielen? Benennt er die sofortige Blutzuckermessung als entscheidenden, oft vergessenen Schlüsselschritt bei unklaren neurologischen Akutsituationen? Zieht er eine konkrete Präventions-/Systemkonsequenz (z.B. Blutzuckerkontrolle bei Diabetikern an Dialysetagen, Abstimmung Insulin/Essen)? Formuliert er einen übertragbaren Merksatz? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 7,
};
