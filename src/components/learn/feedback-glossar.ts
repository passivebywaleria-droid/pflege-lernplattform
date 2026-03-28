/**
 * Glossar der Kommunikationsmodelle und Pflegekonzepte
 * für klickbare Erklärungen im Dialog-Feedback.
 *
 * Jeder Eintrag hat C1 (Fachsprache) und B1 (einfache Sprache).
 */

export interface FeedbackGlossarEntry {
  begriff: string;
  /** Auch nach diesen Varianten suchen */
  aliase?: string[];
  erklaerungC1: string;
  erklaerungB1: string;
  /** Optionale Buchstaben-Aufschlüsselung (z.B. für Akronyme) */
  akronym?: { buchstabe: string; bedeutung: string }[];
}

export const feedbackGlossar: FeedbackGlossarEntry[] = [
  // ─── Kommunikationsmodelle ───
  {
    begriff: "NURSE",
    aliase: ["NURSE-Modell", "NURSE-Schema", "NURSE-Technik"],
    erklaerungC1:
      "Das NURSE-Modell ist ein Kommunikationsrahmen für empathische Gesprächsführung in der Pflege. Es hilft, Emotionen des Patienten gezielt aufzugreifen und professionell zu begleiten.",
    erklaerungB1:
      "NURSE ist eine Methode für gute Gespräche mit Patienten. Sie hilft dir, die Gefühle des Patienten zu verstehen und richtig darauf zu reagieren.",
    akronym: [
      { buchstabe: "N", bedeutung: "Naming \u2014 Gefühle benennen" },
      { buchstabe: "U", bedeutung: "Understanding \u2014 Verständnis zeigen" },
      { buchstabe: "R", bedeutung: "Respecting \u2014 Respekt ausdrücken" },
      { buchstabe: "S", bedeutung: "Supporting \u2014 Unterstützung anbieten" },
      { buchstabe: "E", bedeutung: "Exploring \u2014 Nachfragen, vertiefen" },
    ],
  },
  {
    begriff: "OARS",
    aliase: ["OARS-Technik", "OARS-Methode"],
    erklaerungC1:
      "OARS ist ein Gesprächsführungsmodell aus der Motivierenden Gesprächsführung (Motivational Interviewing). Es fördert die intrinsische Motivation des Patienten zur Verhaltensänderung.",
    erklaerungB1:
      "OARS ist eine Gesprächs-Methode. Sie hilft dem Patienten, selbst zu entscheiden, was er ändern möchte. Du stellst offene Fragen und hörst gut zu.",
    akronym: [
      { buchstabe: "O", bedeutung: "Open-ended questions \u2014 Offene Fragen stellen" },
      { buchstabe: "A", bedeutung: "Affirmation \u2014 Stärken bestätigen" },
      { buchstabe: "R", bedeutung: "Reflective listening \u2014 Aktiv zuhören und spiegeln" },
      { buchstabe: "S", bedeutung: "Summarizing \u2014 Zusammenfassen" },
    ],
  },
  {
    begriff: "SPIKES",
    aliase: ["SPIKES-Protokoll", "SPIKES-Modell"],
    erklaerungC1:
      "Das SPIKES-Protokoll ist ein strukturiertes Vorgehen zur Übermittlung schlechter Nachrichten. Es wird in der Onkologie und Palliativmedizin eingesetzt und hilft, Informationen empathisch und patientenzentriert zu vermitteln.",
    erklaerungB1:
      "SPIKES ist ein Plan für schwierige Gespräche. Zum Beispiel wenn du einem Patienten eine schlechte Nachricht sagen musst. Es zeigt dir Schritt für Schritt, wie du das machst.",
    akronym: [
      { buchstabe: "S", bedeutung: "Setting \u2014 Gesprächsrahmen vorbereiten" },
      { buchstabe: "P", bedeutung: "Perception \u2014 Wissensstand erfragen" },
      { buchstabe: "I", bedeutung: "Invitation \u2014 Erlaubnis einholen" },
      { buchstabe: "K", bedeutung: "Knowledge \u2014 Information geben" },
      { buchstabe: "E", bedeutung: "Emotions \u2014 Gefühle auffangen" },
      { buchstabe: "S", bedeutung: "Strategy \u2014 Weiteres Vorgehen planen" },
    ],
  },
  {
    begriff: "Kübler-Ross",
    aliase: ["Kübler-Ross-Modell", "Trauerphasen", "5 Phasen der Trauer"],
    erklaerungC1:
      "Das Modell von Elisabeth Kübler-Ross beschreibt fünf Phasen der Krankheitsverarbeitung. Die Phasen verlaufen nicht linear \u2014 Patienten können zwischen ihnen wechseln oder Phasen überspringen.",
    erklaerungB1:
      "Kübler-Ross hat beschrieben, wie Menschen mit einer schlimmen Nachricht umgehen. Es gibt 5 Schritte. Nicht jeder geht alle Schritte durch.",
    akronym: [
      { buchstabe: "1", bedeutung: "Verleugnung \u2014 Das kann nicht sein!" },
      { buchstabe: "2", bedeutung: "Zorn \u2014 Warum ich?" },
      { buchstabe: "3", bedeutung: "Verhandeln \u2014 Wenn ich nur..." },
      { buchstabe: "4", bedeutung: "Depression \u2014 Tiefe Traurigkeit" },
      { buchstabe: "5", bedeutung: "Akzeptanz \u2014 Annehmen der Situation" },
    ],
  },
  {
    begriff: "Carl Rogers",
    aliase: ["Rogers", "Klientenzentrierte Gesprächsführung", "Personenzentrierter Ansatz"],
    erklaerungC1:
      "Carl Rogers entwickelte die klientenzentrierte Gesprächsführung. Die drei Grundhaltungen bilden die Basis jeder therapeutischen und pflegerischen Beziehung.",
    erklaerungB1:
      "Carl Rogers war ein Psychologe. Er hat gesagt: Ein gutes Gespräch braucht 3 Dinge \u2014 ehrlich sein, den anderen akzeptieren und seine Gefühle verstehen.",
    akronym: [
      { buchstabe: "1", bedeutung: "Kongruenz \u2014 Ehrlich und echt sein" },
      { buchstabe: "2", bedeutung: "Bedingungslose Wertschätzung \u2014 Den Menschen so akzeptieren wie er ist" },
      { buchstabe: "3", bedeutung: "Empathie \u2014 Sich in den anderen hineinversetzen" },
    ],
  },
  {
    begriff: "Schulz von Thun",
    aliase: ["4-Ohren-Modell", "Vier-Ohren-Modell", "Kommunikationsquadrat"],
    erklaerungC1:
      "Das 4-Ohren-Modell von Friedemann Schulz von Thun beschreibt, dass jede Nachricht vier Ebenen hat. Missverständnisse entstehen, wenn Sender und Empfänger unterschiedliche Ebenen betonen.",
    erklaerungB1:
      "Jeder Satz hat 4 Bedeutungen. Zum Beispiel: Das Fenster ist offen \u2014 das kann heißen: Es ist kalt (Wunsch), ich informiere dich (Fakt), ich bin genervt (Gefühl), mach es zu (Bitte).",
    akronym: [
      { buchstabe: "1", bedeutung: "Sachebene \u2014 Die reine Information" },
      { buchstabe: "2", bedeutung: "Selbstkundgabe \u2014 Was ich über mich zeige" },
      { buchstabe: "3", bedeutung: "Beziehungsebene \u2014 Wie ich zu dir stehe" },
      { buchstabe: "4", bedeutung: "Appell \u2014 Was ich von dir will" },
    ],
  },

  // ─── Pflege-Konzepte ───
  {
    begriff: "Aktives Zuhören",
    aliase: ["aktiv zuhören", "aktiv zuzuhören"],
    erklaerungC1:
      "Aktives Zuhören ist eine Gesprächstechnik, bei der der Zuhörer verbal und nonverbal signalisiert, dass er die Botschaft des Gegenübers aufnimmt und versteht. Techniken: Paraphrasieren, Spiegeln, Nachfragen, Stille aushalten.",
    erklaerungB1:
      "Aktives Zuhören bedeutet: Du zeigst dem Patienten, dass du wirklich zuhörst. Du wiederholst mit eigenen Worten, was er gesagt hat. Du fragst nach. Du lässt Pausen zu.",
  },
  {
    begriff: "Killerphrasen",
    aliase: ["Killerphrase"],
    erklaerungC1:
      "Killerphrasen sind gut gemeinte Aussagen, die die Gefühle des Patienten entwerten oder bagatellisieren. Sie blockieren das Gespräch und verhindern, dass der Patient sich verstanden fühlt.",
    erklaerungB1:
      "Killerphrasen sind Sätze, die nicht helfen \u2014 auch wenn sie nett gemeint sind. Zum Beispiel: Keine Sorge! oder: Anderen geht es schlechter. Der Patient fühlt sich dann nicht ernst genommen.",
    akronym: [
      { buchstabe: "X", bedeutung: "Keine Sorge \u2014 Bagatellisiert die Angst" },
      { buchstabe: "X", bedeutung: "Das wird schon \u2014 Leeres Versprechen" },
      { buchstabe: "X", bedeutung: "Anderen geht es schlechter \u2014 Wertet Gefühle ab" },
      { buchstabe: "X", bedeutung: "Sie müssen jetzt stark sein \u2014 Verbietet Gefühle" },
    ],
  },
  {
    begriff: "Kultursensible Pflege",
    aliase: ["kultursensibel", "kultursensibler", "kultursensiblen"],
    erklaerungC1:
      "Kultursensible Pflege berücksichtigt kulturelle Hintergründe, Wertvorstellungen und Rollenverständnisse des Patienten. Dazu gehören Ernährerrolle, Familienentscheidungen, Schmerzausdruck und religiöse Bedürfnisse.",
    erklaerungB1:
      "Jeder Mensch hat eine andere Kultur. In manchen Kulturen entscheidet die Familie mit. In manchen Kulturen zeigen Männer keine Schwäche. Gute Pflege berücksichtigt das.",
  },
  {
    begriff: "Shared Decision Making",
    aliase: ["SDM", "Partizipative Entscheidungsfindung", "gemeinsame Entscheidungsfindung"],
    erklaerungC1:
      "Shared Decision Making (SDM) ist ein Prozess, bei dem Pflegekraft/Arzt und Patient gemeinsam Behandlungsentscheidungen treffen. Der Patient wird als Experte für sein eigenes Leben einbezogen.",
    erklaerungB1:
      "Shared Decision Making bedeutet: Der Patient entscheidet mit. Du erklärst die Möglichkeiten. Der Patient sagt, was er möchte. Ihr entscheidet zusammen.",
  },
  {
    begriff: "Empowerment",
    erklaerungC1:
      "Empowerment in der Pflege bedeutet, die Eigenständigkeit und Selbstwirksamkeit des Patienten zu fördern. Statt für den Patienten zu entscheiden, wird er befähigt, informierte Entscheidungen selbst zu treffen.",
    erklaerungB1:
      "Empowerment heißt: Du hilfst dem Patienten, selbst stark zu werden. Du gibst ihm Wissen und Mut. Er soll selbst entscheiden können, was gut für ihn ist.",
  },
  {
    begriff: "Klinisches Reasoning",
    aliase: ["Clinical Reasoning"],
    erklaerungC1:
      "Klinisches Reasoning ist der systematische Denkprozess, mit dem Pflegekräfte klinische Informationen sammeln, interpretieren und Pflegeentscheidungen ableiten. Es verbindet Fachwissen mit kritischem Denken.",
    erklaerungB1:
      "Klinisches Reasoning bedeutet: Du denkst wie ein Profi. Du sammelst Informationen über den Patienten. Dann überlegst du: Was könnte das Problem sein? Was muss ich tun?",
  },
  {
    begriff: "Verleugnung",
    aliase: ["Verleugnungsphase"],
    erklaerungC1:
      "Verleugnung ist die erste Phase nach Kübler-Ross. Der Patient weigert sich, die Diagnose oder Situation anzunehmen. Dies ist ein normaler Schutzmechanismus der Psyche und darf nicht als Uneinsichtigkeit gewertet werden.",
    erklaerungB1:
      "Verleugnung heißt: Der Patient will es nicht wahrhaben. Er sagt: Das stimmt nicht! oder: Das kann nicht sein! Das ist normal. Sein Kopf schützt ihn vor dem Schock.",
  },
  {
    begriff: "Paraphrasieren",
    aliase: ["paraphrasieren", "Paraphrase"],
    erklaerungC1:
      "Paraphrasieren ist eine Technik des Aktiven Zuhörens. Die Pflegekraft gibt den Inhalt der Patientenaussage in eigenen Worten wieder. Dies zeigt Verständnis und gibt dem Patienten die Möglichkeit, Missverständnisse zu korrigieren.",
    erklaerungB1:
      "Paraphrasieren bedeutet: Du sagst mit deinen eigenen Worten, was der Patient gerade gesagt hat. So merkt er, dass du zuhörst. Und er kann sagen, wenn du etwas falsch verstanden hast.",
  },
  {
    begriff: "Patientenrechte",
    aliase: ["Patientenrecht", "Patientenrechtegesetz"],
    erklaerungC1:
      "Das Patientenrechtegesetz (Paragraf 630a-h BGB) sichert das Recht auf Aufklärung, Einwilligung, Einsicht in die Patientenakte und Selbstbestimmung. Patienten dürfen Behandlungen ablehnen \u2014 auch wenn das medizinisch nicht sinnvoll erscheint.",
    erklaerungB1:
      "Jeder Patient hat Rechte. Er darf alles wissen über seine Krankheit. Er darf selbst entscheiden, ob er eine Behandlung möchte. Niemand darf ihn zwingen.",
  },
];
