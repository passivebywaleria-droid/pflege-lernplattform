// CE-06 Situation „Herr Novak — akute psychotische Erregung"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE1-K4 (akute psychotische Erregungszustände diagnostizieren + Erste Hilfe einleiten).
// Grounding: specs/ce-06/kernfakten/psychische-akutsituationen.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 16 (Deeskalation/Wesuls), 12.3 (Delir), 38.8 (Haloperidol), 48.2.5 (Recht); PsychKG der Länder.
//
// KRITISCH GEBAUT:
//  - Leitplanke: akute Erregung NICHT automatisch „psychiatrisch" — organische Ursachen (Fieber/Delir/
//    Hypoxie/Hypoglykämie) zuerst prüfen (F-01). Das Fieber (Pneumonie) macht das hier zwingend.
//  - Deeskalation vor Zwang: eine Person, wenig Reize (F-03); Fixierung erst LETZTE Stufe (F-04);
//    Zwang nur legitimiert/Mindestmaß (F-05); FeM nur Zustimmung/Gefahr im Verzug/richterlich, PsychKG (F-06);
//    Sedierung (Haloperidol) = ärztlich (F-07).
//  - Wahn weder hart widerlegen noch bestätigen — Gefühl (Angst) ernst nehmen.
//  - MC-Optionen vergleichbar kurz (Begründung in explanation).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_NOVAK_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-novak-erkennen",
  phase: "erkennen",
  titel: "„Sie wollen mich vergiften!“",
  titelB1: "„Sie wollen mich vergiften!“",
  kontext:
    "23:30 Uhr. Du gehst zur Infusionskontrolle ins Zimmer. Herr Novak steht angespannt am Bett, den Blick auf dich gerichtet. Als du näher kommst, weicht er zurück, wird lauter: \"Bleiben Sie weg! Sie wollen mich vergiften!\" Seine Wangen sind gerötet, er wirkt fiebrig.",
  kontextB1:
    "23:30 Uhr. Du gehst zur Infusionskontrolle ins Zimmer. Herr Novak steht angespannt am Bett. Als du näher kommst, weicht er zurück und wird laut: \"Bleiben Sie weg! Sie wollen mich vergiften!\" Er wirkt fiebrig.",
  kernSteps: [
    {
      stepId: "ce06-novak-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Pflege heute 2019, Kap. 16.6 (Deeskalation: ruhig, wenig Reize, nicht mit mehreren)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-novak-sicherheit",
      tag: "pflege",
      themaPrimaer: "psychische-akutsituationen",
      kernfaktId: ["F-08", "F-03", "F-04"],
      contentC1: {
        title: "Deine erste Priorität",
        body: "Herr Novak ist akut erregt, misstrauisch und weicht zurück. Was hat in diesem Moment Vorrang?",
        glossarBegriffe: ["Eigenschutz", "Deeskalation", "paranoides Erleben"],
      },
      contentB1: {
        title: "Deine erste Priorität",
        body: "Herr Novak ist sehr erregt und misstrauisch. Was ist jetzt am wichtigsten?",
        glossarBegriffe: ["Eigenschutz", "Deeskalation (= beruhigen)"],
      },
      question: {
        fragetext: "Was hat jetzt Vorrang?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ruhe und Sicherheit: Abstand halten, Fluchtweg freihalten, ihn nicht in die Enge treiben und ruhig sprechen.",
            isCorrect: true,
            explanation:
              "Richtig. Bei akuter Erregung stehen Eigen- und Fremdschutz und eine ruhige, reizarme Annäherung an erster Stelle. Abstand und ein freier Rückweg schützen beide; Bedrängen oder lautes Auftreten steigert die Anspannung. Erst wenn Sicherheit gewährleistet ist, kann Deeskalation gelingen.",
            explanationB1:
              "Richtig. Zuerst Sicherheit: Abstand halten, Rückweg frei lassen, ruhig sprechen. Ihn zu bedrängen macht alles schlimmer. Erst mit Sicherheit klappt das Beruhigen.",
          },
          {
            text: "Ihn sofort festhalten, damit er sich und niemanden verletzt.",
            isCorrect: false,
            explanation:
              "Nein. Körperliches Eingreifen ist erst die letzte Deeskalationsstufe, nicht der erste Schritt — und ein Zugriff durch eine einzelne Person ist gefährlich für beide. Er erlebt Berührung gerade als Bedrohung, das eskaliert. Zuerst Sicherheit herstellen und deeskalieren.",
            explanationB1:
              "Nein. Festhalten ist erst der allerletzte Schritt, nicht der erste — und allein gefährlich. Er erlebt Berührung als Bedrohung. Zuerst Sicherheit und Beruhigen.",
          },
          {
            text: "Ihm ruhig, aber bestimmt erklären, dass niemand ihn vergiftet und er sich das nur einbildet.",
            isCorrect: false,
            explanation:
              "Kontraproduktiv. Den Wahn frontal zu widerlegen ('das bilden Sie sich ein') wird als Bedrohung/Abwertung erlebt und steigert die Anspannung. Man bestätigt den Wahninhalt nicht, widerlegt ihn aber auch nicht hart — man nimmt das GEFÜHL (Angst) ernst. Zuerst zählt ohnehin die Sicherheit.",
            explanationB1:
              "Falsch. Zu sagen 'das bilden Sie sich ein' wirkt bedrohend und macht mehr Angst. Man bestätigt den Wahn nicht, widerlegt ihn aber auch nicht hart — man nimmt die Angst ernst. Zuerst Sicherheit.",
          },
        ],
      },
    },
    {
      stepId: "ce06-novak-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 12.3 (Delir), Fieber (Erregung/Sinnestäuschungen bei Fieber)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-novak-organisch-ausschliessen",
      tag: "pflege",
      themaPrimaer: "psychische-akutsituationen",
      kernfaktId: ["F-01"],
      contentC1: {
        title: "Nur die Schizophrenie?",
        body: "Naheliegend wäre: 'Das ist sein psychotischer Schub.' Am Abend hatte er aber 39,2 °C Fieber bei Pneumonie. Wie gehst du damit um?",
        glossarBegriffe: ["Delir", "organische Ursache", "Differentialdiagnose"],
      },
      contentB1: {
        title: "Nur die Schizophrenie?",
        body: "Man könnte denken: 'Das ist sein psychotischer Schub.' Aber er hat 39,2 °C Fieber. Wie gehst du damit um?",
        glossarBegriffe: ["Delir (= akute Verwirrtheit)"],
      },
      question: {
        fragetext: "Wie ordnest du die Erregung bei Fieber ein?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Nicht vorschnell 'nur Psychose' annehmen — Vitalzeichen, Temperatur, SpO2 und Blutzucker kontrollieren, weil Fieber/Sauerstoffmangel eine Erregung mit auslösen können.",
            isCorrect: true,
            explanation:
              "Richtig. Eine akute Erregung kann organisch bedingt sein: Bei hohem Fieber treten motorische Unruhe, ängstliche Erregung und Sinnestäuschungen auf (Delir). Eine Pneumonie kann außerdem zu Sauerstoffmangel führen. Deshalb wird der Zustand nicht automatisch der Schizophrenie zugeschrieben, sondern es werden organische Ursachen geprüft — das kann lebenswichtig sein. Praktisch: SpO2-Clip und Blutzucker-Stich brauchen Nähe/Berührung — die Messung gelingt oft erst, wenn er dich heranlässt. Deeskalation und Assessment gehen daher Hand in Hand, notfalls unter ärztlicher Begleitung.",
            explanationB1:
              "Richtig. Eine akute Erregung kann körperliche Ursachen haben: Fieber kann Unruhe und Sinnestäuschungen auslösen (Delir), eine Lungenentzündung auch Sauerstoffmangel. Darum prüfst du Vitalzeichen, Temperatur, Sauerstoff und Blutzucker — nicht einfach 'nur Psychose'.",
          },
          {
            text: "Das ist eindeutig ein Schizophrenie-Schub — das Fieber hat damit nichts zu tun.",
            isCorrect: false,
            explanation:
              "Ein gefährlicher Kurzschluss. Bei einem psychiatrisch vorerkrankten Menschen wird Erregung schnell der Grunderkrankung zugeschrieben ('diagnostic overshadowing') — dabei können Fieber, Sauerstoffmangel oder eine Unterzuckerung genau dieselben Zeichen machen. Organische Ursachen müssen ausgeschlossen werden, sonst übersieht man einen behandelbaren Notfall.",
            explanationB1:
              "Gefährlich. Bei psychisch kranken Menschen schiebt man Erregung schnell auf die Krankheit. Aber Fieber, Sauerstoffmangel oder Unterzucker machen dieselben Zeichen. Organische Ursachen musst du ausschließen.",
          },
          {
            text: "Das Fieber ist jetzt zweitrangig — erst muss er ruhig werden, den Rest klären wir morgen.",
            isCorrect: false,
            explanation:
              "Nein. Das Fieber (und eine mögliche Hypoxie bei Pneumonie) sind nicht zweitrangig, sondern potenzielle Ursache der Erregung und ein akutes medizinisches Problem. Beruhigung und organische Abklärung gehören zusammen — Vitalzeichen prüfen und den Arzt informieren, nicht auf morgen verschieben.",
            explanationB1:
              "Nein. Das Fieber ist nicht zweitrangig — es kann die Ursache sein und ist ein akutes Problem. Beruhigen UND körperlich abklären gehören zusammen. Vitalzeichen prüfen, Arzt informieren.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_NOVAK_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-novak-alarmieren",
  phase: "alarmieren",
  titel: "Hilfe holen — ohne zu bedrängen",
  titelB1: "Hilfe holen",
  kontext:
    "Herr Novak bleibt angespannt, lässt dich aber (noch) im Zimmer. Du brauchst Unterstützung und ärztliche Einschätzung — für die Erregung UND für Fieber/Pneumonie.",
  kontextB1:
    "Herr Novak bleibt angespannt, lässt dich aber noch im Zimmer. Du brauchst Hilfe und den Arzt — für die Erregung UND für das Fieber.",
  kernSteps: [
    {
      stepId: "ce06-novak-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Pflege heute 2019, Kap. 16.6 (nicht mit mehreren zugehen); Kap. 38.8 (Sedierung ärztlich)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-novak-alarmieren",
      tag: "pflege",
      themaPrimaer: "psychische-akutsituationen",
      kernfaktId: ["F-03", "F-07"],
      contentC1: {
        title: "Wie holst du Hilfe?",
        body: "Wie organisierst du Unterstützung, ohne die Situation zu verschärfen?",
        glossarBegriffe: ["Backup", "ärztliche Einschätzung"],
      },
      contentB1: {
        title: "Wie holst du Hilfe?",
        body: "Wie holst du Unterstützung, ohne die Lage schlimmer zu machen?",
        glossarBegriffe: ["Backup (= Unterstützung)"],
      },
      question: {
        fragetext: "Wie alarmierst du sinnvoll?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Kollegin diskret dazuholen (sie bleibt im Hintergrund) und den Arzt informieren — für Erregung und Fieber.",
            isCorrect: true,
            explanation:
              "Richtig. Unterstützung ja — aber nicht mehrere gleichzeitig auf ihn zugehen: Zu viele Menschen und Reize steigern die Anspannung. Eine Kollegin sichert im Hintergrund, du bleibst in ruhigem Kontakt. Der Arzt wird informiert (organische Abklärung; eine medikamentöse Beruhigung wäre ohnehin ärztliche Anordnung).",
            explanationB1:
              "Richtig. Hilfe ja — aber nicht alle gleichzeitig zu ihm. Zu viele Menschen machen mehr Angst. Die Kollegin bleibt im Hintergrund, du bleibst ruhig im Kontakt. Der Arzt wird informiert (Fieber + evtl. Beruhigungsmittel, das ordnet der Arzt an).",
          },
          {
            text: "Alle verfügbaren Kollegen sofort ins Zimmer rufen, damit er sieht, dass er keine Chance hat.",
            isCorrect: false,
            explanation:
              "Nein. Mehrere Personen, die gleichzeitig auf ihn zugehen und ihn anschauen, ängstigen ihn und steigern die Anspannung — das provoziert die Eskalation, die man vermeiden will. Deeskalation gelingt besser mit einer Person; Kollegen halten sich im Hintergrund.",
            explanationB1:
              "Nein. Viele Menschen gleichzeitig machen mehr Angst und Eskalation. Beruhigen klappt besser mit einer Person; die anderen bleiben im Hintergrund.",
          },
          {
            text: "Selbst schnell ein Beruhigungsmittel aus dem Schrank geben, dann brauchst du niemanden zu stören.",
            isCorrect: false,
            explanation:
              "Falsch. Eine medikamentöse Sedierung (z.B. Haloperidol) ist eine ärztliche Anordnung — sie eigenmächtig zu geben überschreitet die Kompetenz und ist gerade bei Fieber/Pneumonie riskant. Du deeskalierst, sicherst und informierst den Arzt.",
            explanationB1:
              "Falsch. Ein Beruhigungsmittel ordnet der Arzt an — du darfst es nicht selbst geben. Du beruhigst, sicherst und informierst den Arzt.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Deeskalation-Branching + Zwang/Recht)
export const CE06_SIT_NOVAK_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-novak-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Deeskalieren — und die Grenzen des Zwangs",
  titelB1: "Beruhigen — und die Grenzen",
  kontext:
    "Deine Kollegin ist im Hintergrund, der Arzt informiert. Herr Novak steht weiter angespannt da, die Infusion hat er sich vom Arm gezogen. Jetzt zählt, wie du mit ihm sprichst.",
  kontextB1:
    "Deine Kollegin ist im Hintergrund, der Arzt informiert. Herr Novak steht weiter angespannt da und hat die Infusion herausgezogen. Jetzt zählt, wie du mit ihm sprichst.",
  kernSteps: [
    {
      stepId: "ce06-novak-erm-01",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["Pflege heute 2019, Kap. 16.6 (deeskalierende Gesprächsführung: allein, wenig Reize)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-novak-deeskalation",
      tag: "pflege",
      themaPrimaer: "psychische-akutsituationen",
      kernfaktId: ["F-02", "F-03"],
      contentC1: {
        title: "Wie sprichst du mit ihm?",
        body: "Herr Novak, angstvoll: \"Sie sind einer von denen! Sie wollen mich vergiften!\" Er hält Abstand, ist aber ansprechbar. Was sagst/tust du?",
        glossarBegriffe: ["Deeskalation", "Validation des Gefühls", "Wahn"],
      },
      contentB1: {
        title: "Wie sprichst du mit ihm?",
        body: "Herr Novak, voller Angst: \"Sie wollen mich vergiften!\" Er hält Abstand, ist aber ansprechbar. Was sagst/tust du?",
        glossarBegriffe: ["Deeskalation (= beruhigen)"],
      },
      question: {
        fragetext: "Wie reagierst du auf Herrn Novak?",
        branchingOptions: [
          {
            text: "Ruhig, auf Abstand, mit leiser Stimme: \"Ich sehe, dass Sie große Angst haben. Ich bin hier, um Ihnen zu helfen. Ich tue nichts ohne Ihr Einverständnis.\" — sein Gefühl ernst nehmen, ohne den Wahn zu bestätigen oder zu bestreiten.",
            isCorrect: true,
            feedback:
              "Herr Novak wird etwas ruhiger, seine Stimme sinkt — er bleibt misstrauisch, aber der Kontakt hält. Genau richtig. Du nimmst das GEFÜHL (Angst) ernst, ohne den Wahninhalt zu bestätigen oder frontal zu widerlegen. Ruhige, leise Stimme, Abstand und die Zusage, nichts gegen seinen Willen zu tun, senken die Anspannung. So gelingt Deeskalation — als eine Person, reizarm, im Kontakt.",
            feedbackB1:
              "Herr Novak wird etwas ruhiger, der Kontakt hält. Genau richtig. Du nimmst seine Angst ernst, ohne den Wahn zu bestätigen oder hart zu widerlegen. Ruhige, leise Stimme und Abstand beruhigen. So klappt Deeskalation.",
          },
          {
            text: "Bestimmt und laut: \"Herr Novak, niemand vergiftet Sie! Reißen Sie sich zusammen, das ist doch Unsinn.\"",
            isCorrect: false,
            feedback:
              "Herr Novak schreit auf, weicht zurück und wird noch angespannter — der Kontakt bricht ab. Der Versuch, ihn zur Vernunft zu bringen, ist nachvollziehbar, aber falsch: Den Wahn laut abzuwerten ('Unsinn') erlebt er als Bedrohung und Angriff, das steigert Angst und Aggression. Besser: leise, das Gefühl anerkennen, den Inhalt weder bestätigen noch bekämpfen.",
            feedbackB1:
              "Herr Novak schreit auf und wird noch angespannter. Ihn zur Vernunft bringen zu wollen ist verständlich, aber falsch: 'Unsinn' wirkt wie ein Angriff und macht mehr Angst. Besser: leise, die Angst anerkennen.",
          },
          {
            text: "Mitspielen, um ihn zu beruhigen: \"Keine Sorge, ich beschütze Sie vor dem Gift, ich hole das Gegenmittel.\"",
            isCorrect: false,
            feedback:
              "Kurz wirkt er erleichtert, doch dann fragt er misstrauisch nach dem 'Gegenmittel' — die Geschichte trägt nicht und dein Vertrauen ist beschädigt. Den Wahninhalt zu bestätigen ('das Gift', 'Gegenmittel') verstärkt das Wahnsystem und untergräbt die Vertrauensbasis, sobald die Zusage nicht eingelöst wird. Richtig ist, das Gefühl (Angst) ernst zu nehmen, ohne den Inhalt mitzuspielen.",
            feedbackB1:
              "Kurz ist er erleichtert, dann fragt er nach dem 'Gegenmittel' — die Geschichte trägt nicht. Den Wahn zu bestätigen ('Gift', 'Gegenmittel') macht ihn stärker und zerstört Vertrauen. Richtig: die Angst ernst nehmen, den Inhalt nicht mitspielen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-novak-erm-02",
      phase: 3,
      stepType: "mc",
      bloomLevel: 5,
      kompetenzbereich: "I.2",
      quellen: [
        "Pflege heute 2019, Kap. 16.6 (Fixierung letzte Stufe), Kap. 48.2.5 (Zwang/FeM: Zustimmung/Gefahr im Verzug/richterlich, PsychKG), Kap. 38.8 (Sedierung ärztlich)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-novak-zwang-recht",
      tag: "pflege",
      themaPrimaer: "psychische-akutsituationen",
      kernfaktId: ["F-04", "F-05", "F-06", "F-07"],
      contentC1: {
        title: "Wenn Deeskalation nicht reicht",
        body: "Deine Kollegin flüstert: \"Wir fixieren ihn und geben ihm was zur Beruhigung, dann ist Ruhe.\" Wie ist das rechtlich und fachlich zu bewerten?",
        glossarBegriffe: ["Fixierung", "freiheitsentziehende Maßnahme", "PsychKG", "ärztliche Anordnung"],
      },
      contentB1: {
        title: "Wenn Beruhigen nicht reicht",
        body: "Deine Kollegin flüstert: \"Wir fixieren ihn und geben ihm was zur Beruhigung.\" Wie ist das rechtlich und fachlich?",
        glossarBegriffe: ["Fixierung", "freiheitsentziehende Maßnahme"],
      },
      question: {
        fragetext: "Wie bewertest du Fixierung + Sedierung in diesem Moment?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Beides ist kein erster, freier Schritt: Fixierung ist die letzte Stufe, nur bei echter Gefahr, legitimiert und auf das Mindestmaß. Bei Gefahr im Verzug ist die akute Sofortmaßnahme zulässig, alles Weitere braucht richterliche Genehmigung nach Betreuungsrecht (§ 1831 BGB). Die Sedierung ordnet der Arzt an.",
            isCorrect: true,
            explanation:
              "Richtig. Körperliche Fixierung ist erst die letzte Deeskalationsstufe — nicht der bequeme erste Griff. Zwang darf nur bei tatsächlicher Selbst-/Fremdgefährdung, nicht aggressiv, legitimiert und auf das Mindestmaß beschränkt eingesetzt werden. Rechtsgrundlage hier (internistische Station): bei Gefahr im Verzug die akute Sofortmaßnahme, darüber hinaus die richterliche Genehmigung freiheitsentziehender Maßnahmen nach Betreuungsrecht (§ 1831 BGB, unverzüglich nachzuholen). Das PsychKG/Unterbringungsgesetz greift erst bei einer psychiatrischen Unterbringung, nicht automatisch auf der somatischen Station. Eine medikamentöse Sedierung (z.B. Haloperidol) ist ärztliche Anordnung.",
            explanationB1:
              "Richtig. Fixierung ist erst der allerletzte Schritt — nur bei echter Gefahr, nicht aggressiv, so wenig wie möglich. Bei Gefahr im Verzug darfst du sofort das Nötigste tun; alles Weitere braucht die Genehmigung des Betreuungsgerichts (§ 1831 BGB). Ein Beruhigungsmittel ordnet der Arzt an.",
          },
          {
            text: "Ja, sofort fixieren und ein Beruhigungsmittel geben — im Krankenhaus dürfen wir das aus Sicherheitsgründen selbst entscheiden, dafür brauchen wir keine ärztliche Anordnung oder Genehmigung.",
            isCorrect: false,
            explanation:
              "Falsch und rechtlich riskant. Fixierung ist kein Mittel der Bequemlichkeit und nicht der erste Schritt; ohne echte Gefahr, Legitimation und Rechtsgrundlage (Gefahr im Verzug bzw. richterliche Genehmigung nach § 1831 BGB) ist sie unzulässig. Und Sedativa gibt die Pflege nicht eigenmächtig — das ist ärztliche Anordnung. Zuerst wird deeskaliert.",
            explanationB1:
              "Falsch. Fixierung ist nicht 'einfach zur Sicherheit' erlaubt — sie braucht echte Gefahr und eine Rechtsgrundlage. Und Beruhigungsmittel darf die Pflege nicht selbst geben. Zuerst deeskalieren.",
          },
          {
            text: "Nein — bei einem psychisch kranken Menschen darf man niemals fixieren, das verbietet die Menschenwürde in jedem Fall, egal wie gefährlich die Situation gerade ist.",
            isCorrect: false,
            explanation:
              "Auch nicht richtig. Bei tatsächlicher Selbst- oder Fremdgefährdung kann eine patientenschonende Fixierung als letzte Stufe nötig und zulässig sein — mit Rechtsgrundlage (Gefahr im Verzug/richterlicher Beschluss, PsychKG), im Team, auf das Mindestmaß beschränkt, während eine Person im Kontakt bleibt. 'Niemals' verkennt die Gefahrenabwehr; 'einfach so' verkennt das Recht. Der Maßstab liegt dazwischen.",
            explanationB1:
              "Auch falsch. Bei echter Gefahr kann eine schonende Fixierung als letzter Schritt nötig und erlaubt sein — mit Rechtsgrundlage, im Team, so wenig wie möglich. 'Nie' ist genauso falsch wie 'einfach so'.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 13,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_NOVAK_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-novak-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an den Arzt",
  titelB1: "Übergabe an den Arzt",
  kontext:
    "Der diensthabende Arzt kommt ins Zimmer (ruhig, im Hintergrund). Er fragt dich leise: \"Schildern Sie mir kurz die Lage.\"",
  kontextB1:
    "Der Arzt kommt ruhig ins Zimmer. Er fragt dich leise: \"Was ist die Lage?\"",
  kernSteps: [
    {
      stepId: "ce06-novak-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-novak-sbar",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "SBAR-Übergabe",
        body: "Welche Übergabe folgt SBAR und bringt das Wichtige — inklusive der organischen Spur — zuerst?",
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
            text: "\"Herr Novak, 34, seit 23:30 akut erregt, paranoid, hat die Infusion entfernt (S). Pneumonie, Fieber 39,2 °C, bekannte paranoide Schizophrenie (B). Deeskalation greift teilweise, aber Fieber/Hypoxie als Ursache noch nicht ausgeschlossen — Vitalzeichen ausstehend (A). Bitte ärztliche Einschätzung, Vitalzeichen/SpO2/BZ, Vorgehen bei Erregung festlegen (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR — und wichtig: die organische Spur (Fieber/Hypoxie) ist als offene, zu klärende Ursache benannt, nicht vorschnell als 'nur Psychose' abgetan. Der Arzt kann sofort priorisieren (Vitalzeichen, Ursachensuche, Vorgehen bei Erregung).",
            explanationB1:
              "Richtig. Vollständiges SBAR — und die körperliche Spur (Fieber) ist als offene Ursache genannt, nicht als 'nur Psychose' abgetan. Der Arzt kann sofort handeln.",
          },
          {
            text: "\"Der Psychiatrie-Patient dreht durch und ist aggressiv — geben Sie ihm bitte was zur Beruhigung.\"",
            isCorrect: false,
            explanation:
              "Unprofessionell und fachlich verkürzt. Die abwertende Etikettierung ('dreht durch') und die vorschnelle Forderung nach Sedierung übergehen die organische Abklärung (Fieber!) und die eigentliche Einschätzung. SBAR verlangt sachliche Fakten, den Verlauf und eine begründete Empfehlung — nicht ein Etikett plus Medikamentenwunsch.",
            explanationB1:
              "Unprofessionell und zu kurz. 'Dreht durch' wertet ab, und sofort nach einem Medikament zu fragen übergeht das Fieber. SBAR braucht sachliche Fakten und den Verlauf.",
          },
          {
            text: "\"Er hat Angst, dass wir ihn vergiften, ich habe ihn beruhigt, ist alles wieder gut.\"",
            isCorrect: false,
            explanation:
              "Zu beschönigend und unvollständig. Es fehlen die harten Fakten (Fieber, entfernte Infusion, offene organische Ursache) und eine Empfehlung. 'Alles wieder gut' verkennt, dass die Ursache (Fieber/Hypoxie?) noch nicht geklärt ist und der Zustand erneut eskalieren kann.",
            explanationB1:
              "Zu beschönigt und unvollständig. Es fehlen Fieber, die entfernte Infusion und eine Bitte. 'Alles gut' übersieht, dass die Ursache noch offen ist.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_NOVAK_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-novak-reflektieren",
  phase: "reflektieren",
  titel: "Was hätte man übersehen können?",
  titelB1: "Was hätte man übersehen können?",
  kontext:
    "Später zeigt sich: Herr Novak hatte zusätzlich zum psychotischen Erleben eine fieberbedingte Komponente; nach Fiebersenkung und ärztlicher Begleitung beruhigt er sich deutlich. Du denkst über die Nacht nach.",
  kontextB1:
    "Später zeigt sich: Bei Herrn Novak spielte auch das Fieber eine Rolle. Nach Fiebersenkung und ärztlicher Begleitung beruhigt er sich. Du denkst über die Nacht nach.",
  kernSteps: [
    {
      stepId: "ce06-novak-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.2",
      quellen: ["Pflege heute 2019, Kap. 12.3/16.6 (Delir/Deeskalation); Reflexion diagnostic overshadowing"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-novak-reflexion",
      tag: "pflege",
      themaPrimaer: "psychische-akutsituationen",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Zwischen dem Reflex 'ist ja psychisch krank', der eigenen Sicherheit und der Ethik von Zwang — reflektiere die Situation.",
        glossarBegriffe: ["diagnostic overshadowing", "Deeskalation", "Nachbesprechung"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Der Reflex 'ist ja psychisch krank', die eigene Sicherheit und die Ethik von Zwang — denke über die Situation nach.",
        glossarBegriffe: ["Deeskalation", "Nachbesprechung"],
      },
      question: {
        fragetext: "Reflektiere die Situation und deine Konsequenzen.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Warum ist es gefährlich, eine akute Erregung vorschnell 'der Psychose' zuzuschreiben, und welche organischen Ursachen musst du ausschließen? 2) Was hat in der Deeskalation geholfen (eine Person, wenig Reize, Gefühl statt Wahninhalt)? 3) Wo verläuft die Grenze zwischen zulässigem Schutz und unzulässigem Zwang? 4) Wie sorgst du für deine eigene Sicherheit und Verarbeitung (Nachbesprechung)?",
          placeholder:
            "Vorschnell 'nur Psychose' ist gefährlich, weil … Ausschließen muss ich … In der Deeskalation half … Die Grenze zum Zwang liegt bei … Für meine Sicherheit/Verarbeitung …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler die Gefahr des 'diagnostic overshadowing' (Erregung nicht automatisch der psychiatrischen Grunderkrankung zuschreiben) und nennt organische Ursachen zum Ausschluss (Fieber/Delir, Hypoxie, Hypoglykämie, Intoxikation/Entzug, Schmerz, (Neben-)Wirkung von Medikamenten)? Benennt er wirksame Deeskalationsprinzipien (eine Person, reizarm, Gefühl ernst nehmen ohne Wahn zu bestätigen/hart zu widerlegen)? Zieht er die rechtlich-ethische Grenze (Zwang nur bei echter Gefahr, Mindestmaß, Rechtsgrundlage Zustimmung/Gefahr im Verzug/richterlich, PsychKG; Sedierung ärztlich)? Adressiert er Eigenschutz und Nachbesprechung? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};
