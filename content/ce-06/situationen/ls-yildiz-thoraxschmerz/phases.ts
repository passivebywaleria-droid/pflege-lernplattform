// CE-06 Situation „Frau Yıldız — akuter Thoraxschmerz (Verdacht Herzinfarkt)“
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE2-W3 (Klinik/Therapie Herzinfarkt), K1 (Vitalzeichen/Monitor), K3 (atemunterstützende Lagerung),
//        W2 (kardiogener Schock, angeschnitten).
// Grounding: specs/ce-06/kernfakten/herz-kreislauf-akut.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 21.1/21.2/21.5.
//
// KRITISCH GEBAUT:
//  - Diagnostische Leitplanke: ACS bessert sich NICHT auf Ruhe/Nitrat (vs. Angina pectoris) — Warnzeichen (F-01);
//    jeder akute Thoraxschmerz bis zum Beweis des Gegenteils bedrohlich (F-02). „Nur ihre Angina“ ist die Falle.
//  - Lagerung: Oberkörper HOCH (nicht flach/Schocklage) — bei RR < 90 & Puls > 100 abbrechen (F-07, verbatim).
//  - O2/Nitro/Analgetika NUR auf Arztanordnung (F-06), keine erfundenen Dosen.
//  - MC-Optionen vergleichbar kurz (Begründung in explanation).
//
// WISSENS-TABS (curriculum-first, Gold-Standard-Aufbau): 3 inlineWissen-Tabs, jeder vor/bei seiner Anwendung,
// literatur-belegt + paraphrasiert (Abstandstest 0), kein Antwort-Step:
//  - Tab A „‚Das kenne ich schon' — die gefährlichste Falle“ (Ph.1) — F-01/F-02 (ACS vs. Angina, Warnzeichen).
//  - Tab C „Zeit ist Herzmuskel — dein Part im Team, deine Grenze, ihre Angst“ (Ph.2) — F-03/F-06/F-08 (interprofessionell + Kompetenzgrenze + Coping).
//  - Tab B „Lagern und entlasten — Oberkörper hoch, nicht flach; und die Grenze“ (Ph.3) — F-04/F-05/F-07.
// KB-Marker aus dem LE2-Schwerpunkt-Set (Rahmenplan: LE2-Primär = III.2): III.2 (interprofessionell) · I.4 (Akut-Handeln) ·
//   II.1 (SBAR) · V.2 (Reflexion). III.2 an Alarmierung/Kompetenzgrenze/Team-Tab; I.4 an Erkennen/Lagern/Überwachen.

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
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 21.2.1/21.5 (ACS vs. Angina pectoris; Thoraxschmerz ernst nehmen)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-acs-erkennen",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      // F-01/F-02 (Warnzeichen) · F-10 (Diabetiker: atypisch/stumm — Distraktor B).
      kernfaktId: ["F-01", "F-02", "F-10"],
      contentC1: {
        title: "Wirklich nur die Angina?",
        body: "Frau Yıldız deutet die Schmerzen als ihre bekannte Angina pectoris. Was ist an dieser Situation das entscheidende Warnzeichen?",
        glossarBegriffe: ["Angina pectoris", "akutes Koronarsyndrom", "Nitrat"],
      },
      contentB1: {
        title: "Wirklich nur die Angina?",
        body: "Frau Yıldız denkt, es ist ihre bekannte Angina pectoris (Fachbegriff für ihren bekannten Brustschmerz). Was ist hier das wichtige Warnzeichen?",
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
              "Richtig. Eine stabile Angina pectoris bessert sich auf Ruhe und Nitrat (der Wirkstoff im Nitrospray). Wenn das diesmal NICHT hilft und die Schmerzen stark sind, muss man an ein akutes Koronarsyndrom denken. Das ist der Fachname für den Herzinfarkt. Jeder akute Brustschmerz ist ernst — 'das kenne ich schon' darf dich nicht beruhigen.",
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
      // Wissens-Tab A (curriculum-first): nach dem Hook (erk-01). Literatur-belegt (F-01/F-02,
      // Pflege heute Kap. 21.2.1/21.5) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-yildiz-erk-01b-acs-falle",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 21.2.1/21.5"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-yildiz-acs-wissen",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      // F-01/F-02 (ACS vs. Angina, Warnzeichen) · F-10 (atypisch/stumm bei Diabetikern und Frauen).
      kernfaktId: ["F-01", "F-02", "F-10"],
      transition: "Jetzt zählt, was du bis zum Arzt engmaschig beobachtest.",
      contentC1: {
        title: "„Das kenne ich schon“ — die gefährlichste Falle",
        body: "",
        glossarBegriffe: ["Angina pectoris", "akutes Koronarsyndrom", "Nitrat"],
      },
      inlineWissen: {
        bausteinRef: "herz-kreislauf-akut-acs-falle",
        themaPrimaer: "herz-kreislauf-akut",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Frau Yıldız ist sich sicher: „Das ist meine Angina, gleich geht es weg.“ Sie hat sich hingelegt, ihr Nitrospray genommen — und trotzdem wird der Schmerz stärker. Genau dieser Satz, „das kenne ich schon“, ist die gefährlichste Falle. Warum?",
        storyAufhaengerB1:
          "Frau Yıldız ist sich sicher. Sie sagt: „Das ist meine Angina, gleich geht es weg.“ Sie hat sich hingelegt und ihr Nitrospray genommen. Aber der Schmerz wird trotzdem stärker. Genau dieser Satz, „das kenne ich schon“, ist die gefährlichste Falle. Warum?",
        kerntext:
          "Eine stabile Angina pectoris und ein Herzinfarkt (akutes Koronarsyndrom) fühlen sich am Anfang ähnlich an — und ein Zeichen trennt sie: Die Angina bessert sich auf Ruhe und auf das Nitrospray. Bleibt genau diese Besserung aus, obwohl die Patientin ruht und das Nitro schon genommen hat, ist das ein Warnzeichen für einen Infarkt.\n\nDazu kommen beim Infarkt oft heftigste Schmerzen hinter dem Brustbein — sie strahlen häufig aus, etwa in Arm, Hals oder Oberbauch —, begleitet von Übelkeit, kaltem Schweiß und Todesangst. Aber Vorsicht: Das Bild ist nicht immer typisch. Bei Diabetikern kann ein Herzinfarkt sogar stumm, also schmerzarm, verlaufen, und Frauen zeigen oft weniger typische Beschwerden (etwa nur Übelkeit, Schwindel oder Atemnot). Gerade bei ihnen ist die Lage gefährlicher, nicht harmloser — hier ist erhöhte Wachsamkeit nötig.\n\nDeshalb gilt eine einfache, strenge Grundregel: Jeder akute Thoraxschmerz gilt als bedrohlich, solange keine harmlose Ursache gesichert ist. Ohne EKG und Labor lässt sich die Ursache gar nicht sicher klären — also nimmst du ihn immer ernst und sorgst für Abklärung. Die vertraute Selbsteinschätzung „ist nur meine Angina“ darf dich niemals in Sicherheit wiegen.",
        kerntextB1:
          "Eine stabile Angina pectoris und ein Herzinfarkt fühlen sich am Anfang ähnlich an. Angina pectoris heißt: ein Brustschmerz, den Frau Yıldız schon lange kennt. Für den Herzinfarkt gibt es noch einen Fachnamen: akutes Koronarsyndrom. Ein Zeichen trennt die beiden: Die Angina bessert sich auf Ruhe und auf Nitrat. Nitrat ist der Wirkstoff im Nitrospray. Aber diesmal bleibt die Besserung aus. Frau Yıldız ruht und hat das Nitrospray schon genommen. Trotzdem hilft es nicht. Das ist ein Warnzeichen für einen Infarkt.\n\nBei einem Infarkt tut oft die Brust sehr stark weh, mitten hinter dem Brustbein. Diese Schmerzen strahlen häufig aus, zum Beispiel in den Arm, den Hals oder den Oberbauch. Dazu kommen oft Übelkeit, kalter Schweiß und Todesangst. Aber Achtung: Das Bild ist nicht immer typisch. Bei Diabetikern kann ein Infarkt sogar stumm verlaufen, also fast ohne Schmerz. Und Frauen haben oft weniger typische Beschwerden — zum Beispiel nur Übelkeit, Schwindel oder Atemnot. Gerade bei ihnen ist die Lage gefährlicher, nicht harmloser. Hier musst du besonders wachsam sein.\n\nDeshalb gilt eine einfache, strenge Regel. Jeder akute Thoraxschmerz — jeder plötzliche Brustschmerz — ist bedrohlich, solange keine harmlose Ursache sicher ist. Ohne EKG und Labor kann man die Ursache gar nicht sicher klären. Also nimmst du den Schmerz immer ernst und sorgst für eine Abklärung. Der vertraute Satz „ist nur meine Angina“ darf dich niemals beruhigen.",
        faustregel:
          "Bessert sich der Brustschmerz auf Ruhe und Nitrat? Wenn NEIN — an Herzinfarkt denken. Jeder akute Thoraxschmerz ist bedrohlich, solange keine harmlose Ursache gesichert ist; „das kenne ich schon“ darf dich nicht beruhigen.",
        faustregelB1:
          "Bessert sich der Brustschmerz auf Ruhe und Nitrat? Wenn NEIN: an Herzinfarkt denken. Jeder akute Thoraxschmerz ist bedrohlich, solange keine harmlose Ursache sicher ist. „Das kenne ich schon“ darf dich nicht beruhigen.",
        spektrum: [
          {
            patientName: "Stabile Angina pectoris",
            hauptfaktor: "bessert sich",
            kurzbeschreibung:
              "Der Schmerz lässt auf Ruhe und Nitrat nach — bekannt, meist kurz. Das ist das gutartige Muster.",
            kurzbeschreibungB1:
              "Der Schmerz lässt auf Ruhe und Nitrospray nach. Er ist bekannt und meist kurz. Das ist das gutartige Muster.",
          },
          {
            patientName: "Frau Yıldız",
            situationsId: "ls-yildiz-thoraxschmerz",
            hauptfaktor: "keine Besserung",
            kurzbeschreibung:
              "Ruhe und Nitro helfen diesmal NICHT, der Schmerz wird stärker und strahlt aus → Infarktverdacht, sofort handeln.",
            kurzbeschreibungB1:
              "Ruhe und Nitro helfen diesmal NICHT. Der Schmerz wird stärker und strahlt aus. Das ist ein Infarktverdacht — sofort handeln.",
          },
          {
            patientName: "Erstmals Thoraxschmerz",
            hauptfaktor: "unklar",
            kurzbeschreibung:
              "Ohne EKG/Labor nicht sicher einzuordnen — deshalb immer ernst nehmen und ärztlich abklären lassen.",
            kurzbeschreibungB1:
              "Ohne EKG und Labor kann man das nicht sicher einordnen. Deshalb nimmst du es immer ernst und lässt es ärztlich abklären.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Woran erkennst du, dass aus „nur meiner Angina“ ein Herzinfarkt geworden sein könnte?",
          rueckseite:
            "Das entscheidende Warnzeichen: KEINE Besserung auf Ruhe und Nitrat (obwohl genommen), oft mit heftigem Schmerz/Ausstrahlung, kaltem Schweiß, Todesangst. Grundregel: jeder akute Thoraxschmerz ist bedrohlich, solange keine harmlose Ursache gesichert ist — „das kenne ich schon“ ist die Falle.",
          vorderseiteB1:
            "Woran erkennst du, dass aus „nur meiner Angina“ ein Herzinfarkt geworden sein könnte?",
          rueckseiteB1:
            "Das wichtige Warnzeichen: KEINE Besserung auf Ruhe und Nitrat, obwohl sie es genommen hat. Oft dazu: starker Schmerz mit Ausstrahlung, kalter Schweiß, Todesangst. Grundregel: Jeder akute Thoraxschmerz ist bedrohlich, solange keine harmlose Ursache sicher ist. „Das kenne ich schon“ ist die Falle.",
        },
      },
    },
    {
      stepId: "ce06-yildiz-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.4",
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
      // Wissens-Tab C (curriculum-first, LE2-Primär III.2): das interprofessionelle Zusammenspiel +
      // Kompetenzgrenze + Angst/Coping. VOR ala-01. Literatur-belegt (F-03/F-06/F-08, Pflege heute
      // Kap. 21.1.1/21.1.2/21.2.1) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-yildiz-ala-00b-team-zeit",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE2-Primär-Schwerpunkt (Rahmenplan): intra-/interprofessionelles Handeln.
      kompetenzbereich: "III.2",
      quellen: ["Pflege heute 2019, Kap. 21.1.1/21.1.2/21.2.1"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-yildiz-team-zeit-wissen",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      // F-03 (sofort Arzt+2. Pflegekraft) · F-06 (Kompetenzgrenze) · F-08 (Angst/Coping) · F-09 (Reperfusion „Zeit ist Herzmuskel").
      kernfaktId: ["F-03", "F-06", "F-08", "F-09"],
      transition: "Setz das jetzt in den ersten Sekunden um.",
      contentC1: {
        title: "Zeit ist Herzmuskel — dein Part im Team, deine Grenze, ihre Angst",
        body: "",
        glossarBegriffe: ["Zeit ist Herzmuskel", "Arztanordnung", "Herzkatheter"],
      },
      inlineWissen: {
        bausteinRef: "herz-kreislauf-akut-team-zeit",
        themaPrimaer: "herz-kreislauf-akut",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Der Verdacht steht: Herzinfarkt. Frau Yıldız hat Todesangst, der Schmerz hält an. Was du jetzt in den ersten Sekunden tust, entscheidet mit — und vieles davon tust du nicht allein, sondern im Zusammenspiel mit dem Arzt.",
        storyAufhaengerB1:
          "Der Verdacht steht: Herzinfarkt. Frau Yıldız hat Todesangst, der Schmerz hält an. Was du jetzt in den ersten Sekunden tust, ist wichtig. Und vieles davon tust du nicht allein, sondern zusammen mit dem Arzt.",
        kerntext:
          "Beim Infarktverdacht zählt jede Minute — dafür steht der Merksatz „Zeit ist Herzmuskel“: Je schneller die ärztliche Versorgung (und im Krankenhaus die Eröffnung des verschlossenen Gefäßes im Herzkatheter) beginnt, desto mehr Herzmuskel bleibt erhalten. Deshalb ist deine erste Handlung: sofort den Arzt benachrichtigen und eine weitere Pflegefachperson dazuholen. Ihr teilt euch auf — eine bleibt bei der Patientin, überwacht und lagert, die andere organisiert.\n\nDabei kennst du deine Grenze genau: Sauerstoff, Nitrospray und Schmerzmittel werden nur auf ärztliche Anordnung gegeben — nie eigenmächtig. Gerade hier ist das wichtig: Dass Frau Yıldız' eigenes Nitro diesmal nicht half, ist das Warnzeichen; und bei niedrigem Blutdruck kann weiteres Nitro den Kreislauf gefährlich absacken lassen. Deine Aufgabe ist erkennen, alarmieren, lagern, überwachen, dokumentieren und die ärztlichen Anordnungen umsetzen.\n\nUnd mitten darin: ihre Angst. Viele Herzpatienten plagt Todesangst. Du hilfst nicht mit falscher Beruhigung („wird schon wieder“), sondern mit Anteilnahme, ruhigem Auftreten und verständlicher Information. Du bleibst bei ihr, während das Team arbeitet — dieses Dableiben gibt Sicherheit.",
        kerntextB1:
          "Bei Verdacht auf Herzinfarkt zählt jede Minute. Dafür gibt es den Merksatz „Zeit ist Herzmuskel“. Er bedeutet: Je schneller die Hilfe beginnt, desto mehr Herzmuskel bleibt gesund. Im Krankenhaus öffnet der Arzt das verschlossene Herzgefäß im Herzkatheter. Ein Herzkatheter ist ein dünner Schlauch, den der Arzt bis zum Herzen schiebt. Deshalb ist deine erste Handlung: sofort den Arzt rufen und eine zweite Pflegekraft dazuholen. Dann teilt ihr euch auf. Eine bleibt bei der Patientin, überwacht und lagert. Die andere organisiert die Hilfe.\n\nDabei kennst du deine Kompetenzgrenze genau. Sie zeigt dir, was du als Pflegekraft allein entscheiden darfst — und was nicht. Sauerstoff, Nitrospray und Schmerzmittel gibt die Pflege nur auf Arztanordnung. Arztanordnung heißt: Nur wenn der Arzt es anordnet, darfst du es geben. Nie allein und von dir aus. Das ist hier besonders wichtig. Denn dass ihr Nitro diesmal nicht half, ist genau das Warnzeichen. Und bei niedrigem Blutdruck kann noch mehr Nitro den Kreislauf gefährlich absacken lassen. Deine Aufgabe ist: erkennen, alarmieren, lagern, überwachen, dokumentieren und die Arztanordnungen umsetzen.\n\nUnd mitten in allem: ihre Angst. Viele Herzpatienten haben Todesangst. Du hilfst ihr nicht mit falscher Beruhigung wie „wird schon wieder“. Du hilfst ihr mit Anteilnahme, mit Ruhe und mit klarer Information. Du bleibst bei ihr, während das Team arbeitet. Dieses Dableiben gibt ihr Sicherheit.",
        faustregel:
          "Zeit ist Herzmuskel: sofort Arzt + zweite Pflegekraft, dann lagern/überwachen. O2/Nitro/Schmerzmittel NUR auf Arztanordnung. Und: bei ihr bleiben, die Angst ernst nehmen — Sicherheit durch Ruhe, nicht durch falsches Beschwichtigen.",
        faustregelB1:
          "Zeit ist Herzmuskel: sofort den Arzt und eine zweite Pflegekraft rufen, dann lagern und überwachen. Sauerstoff, Nitro und Schmerzmittel NUR auf Arztanordnung. Und: bei ihr bleiben und die Angst ernst nehmen. Sicherheit gibst du durch Ruhe, nicht durch falsche Beruhigung.",
        spektrum: [
          {
            patientName: "Die ersten Sekunden",
            hauptfaktor: "Arzt + zweite Kraft",
            kurzbeschreibung:
              "Sofort den Arzt benachrichtigen und eine weitere Pflegefachperson holen — ihr arbeitet parallel, einer bleibt bei der Patientin.",
            kurzbeschreibungB1:
              "Sofort den Arzt rufen und eine zweite Pflegekraft holen. Ihr arbeitet gleichzeitig. Einer bleibt bei der Patientin.",
          },
          {
            patientName: "Sauerstoff, Nitro, Schmerzmittel",
            hauptfaktor: "Kompetenzgrenze",
            kurzbeschreibung:
              "Nur auf ärztliche Anordnung. Die Pflege erkennt, überwacht, lagert, dokumentiert — sie gibt diese Mittel nicht eigenmächtig.",
            kurzbeschreibungB1:
              "Nur auf Arztanordnung. Die Pflege erkennt, überwacht, lagert und dokumentiert. Diese Mittel gibt sie nicht von sich aus.",
          },
          {
            patientName: "Todesangst",
            hauptfaktor: "Sicherheit geben",
            kurzbeschreibung:
              "Ruhige Präsenz, Anteilnahme, ehrliche Information — nicht falsch beruhigen. Dableiben, während das Team versorgt.",
            kurzbeschreibungB1:
              "Ruhig da sein, Anteilnahme zeigen, ehrlich informieren — nicht falsch beruhigen. Bleib bei ihr, während das Team versorgt.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Verdacht auf Herzinfarkt — was ist deine erste Handlung, wo liegt deine Kompetenzgrenze, und wie gehst du mit der Angst um?",
          rueckseite:
            "Erst: sofort Arzt + zweite Pflegefachperson (Zeit ist Herzmuskel). Grenze: O2/Nitro/Schmerzmittel nur auf Arztanordnung — Pflege erkennt/lagert/überwacht/dokumentiert. Angst: ruhige Präsenz, Anteilnahme, ehrliche Information, dableiben — nicht falsch beschwichtigen.",
          vorderseiteB1:
            "Verdacht auf Herzinfarkt: Was ist deine erste Handlung? Wo ist deine Grenze? Und wie gehst du mit der Angst um?",
          rueckseiteB1:
            "Erst: sofort den Arzt und eine zweite Pflegekraft rufen (Zeit ist Herzmuskel). Grenze: Sauerstoff, Nitro und Schmerzmittel nur auf Arztanordnung. Die Pflege erkennt, lagert, überwacht und dokumentiert. Angst: ruhig da sein, Anteilnahme, ehrliche Information, dableiben — nicht falsch beruhigen.",
        },
      },
    },
    {
      stepId: "ce06-yildiz-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "III.2",
      quellen: ["Pflege heute 2019, Kap. 21.2.1 (Erstmaßnahmen: Arzt + weitere Pflegefachperson)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-yildiz-alarmieren",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      // F-03 (sofort Arzt + weitere Pflegefachperson) · F-09 (Zeitkritik/Reperfusion — „Zeit ist Herzmuskel").
      kernfaktId: ["F-03", "F-09"],
      contentC1: {
        title: "Wen alarmierst du?",
        body: "Verdacht auf akutes Koronarsyndrom. Wie handelst du beim Alarmieren?",
        glossarBegriffe: ["Notfallteam", "Herzkatheter"],
      },
      contentB1: {
        title: "Wen alarmierst du?",
        body: "Verdacht auf ein akutes Koronarsyndrom (Fachname für den Herzinfarkt). Wie holst du Hilfe?",
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
              "Richtig. Bei Verdacht auf ein akutes Koronarsyndrom informierst du sofort den Arzt und holst eine weitere Pflegekraft. Es ist zeitkritisch. Der Merksatz heißt „Zeit ist Herzmuskel“: Je schneller es zum Herzkatheter geht, desto mehr Herzmuskel bleibt gesund. Du bleibst bei Frau Yıldız, überwachst und beruhigst sie.",
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
      // Wissens-Tab B (curriculum-first): VOR erm-01. Literatur-belegt (F-04/F-05/F-07, Pflege heute
      // Kap. 21.1.2/21.2.1) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-yildiz-erm-00b-lagern",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 21.1.2/21.2.1"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-yildiz-lagern-wissen",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      kernfaktId: ["F-04", "F-05", "F-07"],
      transition: "Setz die Lagerung jetzt bei Frau Yıldız um.",
      contentC1: {
        title: "Lagern und entlasten — Oberkörper hoch, nicht flach; und die Grenze",
        body: "",
        glossarBegriffe: ["Oberkörperhochlagerung", "absolute Bettruhe", "kardiogener Schock"],
      },
      inlineWissen: {
        bausteinRef: "herz-kreislauf-akut-lagern",
        themaPrimaer: "herz-kreislauf-akut",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Frau Yıldız soll es leichter haben, bis der Arzt da ist. Dein Instinkt bei „Kreislauf schlecht“ sagt vielleicht: flach hinlegen, Beine hoch. Beim Herzen ist genau das falsch. Wie lagerst du richtig — und wo ist die Grenze?",
        storyAufhaengerB1:
          "Frau Yıldız soll es leichter haben, bis der Arzt da ist. Bei „Kreislauf schlecht“ denkst du vielleicht: flach hinlegen, Beine hoch. Beim Herzen ist genau das falsch. Wie lagerst du richtig — und wo ist die Grenze?",
        kerntext:
          "Bei Herzbeschwerden wird der Oberkörper HOCH gelagert — das erleichtert die Atmung und entlastet das Herz. Die Schocklage (flach, Beine hoch) ist hier falsch: Sie schwemmt zusätzlich Blut zum ohnehin geschwächten Herzen zurück und kann eine Lungenstauung verstärken.\n\nDazu gilt absolute Bettruhe: Jede körperliche Anstrengung erhöht den Sauerstoffbedarf des Herzens und kann die Lage verschlechtern — also kein Aufstehen, kein Gehen, kein Zur-Toilette-Laufen. Parallel überwachst du engmaschig und dokumentierst: Puls (Frequenz, Rhythmus, Qualität), Blutdruck, Hautfarbe, Bewusstsein und die Sauerstoffsättigung per Pulsoximetrie. So bemerkst du eine Verschlechterung sofort.\n\nUnd jetzt die wichtige Grenze, die man leicht übersieht: Die Oberkörperhochlagerung hat einen Haken — bei ihr kann der Blutdruck gefährlich abfallen. Sinkt der Blutdruck unter 90 und steigt der Puls über 100, wird die Hochlagerung abgebrochen und flacher gelagert. Sonst drohen ein kardiogener Schock und eine Minderdurchblutung des Gehirns.",
        kerntextB1:
          "Bei Herzbeschwerden lagerst du den Oberkörper HOCH. Diese Lagerung heißt Oberkörperhochlagerung. Sie erleichtert die Atmung und entlastet das Herz. Die Schocklage ist flach mit hohen Beinen. Beim Herzen ist sie falsch. Denn sie schickt zusätzlich Blut zurück zum Herzen. Und das Herz ist schon geschwächt. Dann kann sich auch in der Lunge Blut stauen — das heißt Lungenstauung.\n\nDazu gilt absolute Bettruhe. Jede Anstrengung erhöht den Sauerstoff-Bedarf vom Herzen und kann die Lage verschlechtern. Also: kein Aufstehen, kein Gehen, nicht zur Toilette laufen. Gleichzeitig überwachst du engmaschig und schreibst alles auf. Du misst: Puls (wie schnell, wie regelmäßig, wie kräftig), Blutdruck, Hautfarbe, Bewusstsein und die Sauerstoffsättigung — den Sauerstoff-Wert im Blut. Das misst du mit der Pulsoximetrie, einem kleinen Clip am Finger. So bemerkst du eine Verschlechterung sofort.\n\nUnd jetzt die wichtige Grenze. Die Hochlagerung hat einen Haken: Bei ihr kann der Blutdruck gefährlich abfallen. Fällt der Blutdruck unter 90 und steigt der Puls über 100, dann brichst du die Hochlagerung ab und lagerst flacher. Sonst droht ein kardiogener Schock. Das bedeutet: Das Herz pumpt zu schwach. Und das Gehirn bekommt zu wenig Blut.",
        faustregel:
          "Oberkörper HOCH (nicht Schocklage), absolute Bettruhe, engmaschig überwachen. Aber: bei Blutdruck unter 90 UND Puls über 100 die Hochlagerung abflachen — sonst droht der kardiogene Schock.",
        faustregelB1:
          "Oberkörper HOCH (nicht Schocklage), absolute Bettruhe, engmaschig überwachen. Aber: bei Blutdruck unter 90 UND Puls über 100 die Hochlagerung flacher machen. Sonst droht der kardiogene Schock.",
        spektrum: [
          {
            patientName: "Blutdruck (noch) stabil",
            hauptfaktor: "Oberkörper hoch",
            kurzbeschreibung:
              "Hochlagern entlastet das Herz und erleichtert die Atmung; dazu absolute Bettruhe und engmaschige Überwachung.",
            kurzbeschreibungB1:
              "Hochlagern entlastet das Herz und erleichtert das Atmen. Dazu: absolute Bettruhe und engmaschige Überwachung.",
          },
          {
            patientName: "RR unter 90, Puls über 100",
            hauptfaktor: "Grenze erreicht",
            kurzbeschreibung:
              "Hochlagerung abbrechen/abflachen und den Arzt informieren — sonst droht der kardiogene Schock.",
            kurzbeschreibungB1:
              "Hochlagerung abbrechen und flacher lagern. Und den Arzt informieren. Sonst droht der kardiogene Schock.",
          },
          {
            patientName: "Schocklage-Reflex",
            hauptfaktor: "beim Herz falsch",
            kurzbeschreibung:
              "Flach mit Beinen hoch belastet das geschädigte Herz zusätzlich — beim kardialen Geschehen NICHT anwenden.",
            kurzbeschreibungB1:
              "Flach mit hohen Beinen belastet das kranke Herz zusätzlich. Beim Herzen NICHT anwenden.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Wie lagerst du einen Menschen mit Verdacht auf Herzinfarkt — und wann brichst du die Lagerung ab?",
          rueckseite:
            "Oberkörper HOCH (nicht Schocklage — die belastet das Herz), absolute Bettruhe, engmaschig überwachen (Puls/RR/Hautfarbe/Bewusstsein/SpO2). Grenze: bei RR unter 90 UND Puls über 100 die Hochlagerung abflachen (kardiogener Schock droht).",
          vorderseiteB1:
            "Wie lagerst du einen Menschen mit Verdacht auf Herzinfarkt? Und wann brichst du die Lagerung ab?",
          rueckseiteB1:
            "Oberkörper HOCH (nicht Schocklage — die belastet das Herz), absolute Bettruhe, engmaschig überwachen (Puls, Blutdruck, Hautfarbe, Bewusstsein, Sauerstoff). Grenze: bei Blutdruck unter 90 UND Puls über 100 die Hochlagerung flacher machen. Sonst droht ein kardiogener Schock.",
        },
      },
    },
    {
      stepId: "ce06-yildiz-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.4",
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
        body: "Verdacht auf Herzinfarkt, sie ist bei Bewusstsein (wach und ansprechbar), der Blutdruck noch stabil. Wie lagerst du sie bis der Arzt kommt?",
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
              "Richtig. Die Oberkörperhochlagerung entlastet das Herz und erleichtert die Atmung. Enge Kleidung öffnen, frische Luft. Absolute Bettruhe ist wichtig, weil Anstrengung den Sauerstoff-Bedarf des Herzens erhöht und es zusätzlich belastet.",
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
      // Kompetenzgrenze / Zusammenarbeit mit dem Arzt → III.2 (LE2-Primär).
      kompetenzbereich: "III.2",
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
            explanationB1:
              "Falsch. Sauerstoff und Nitro gibt die Pflege nur auf Anordnung vom Arzt — nicht von sich aus. Dass ihr Nitrospray diesmal nicht richtig geholfen hat, ist genau das Warnzeichen für einen Infarkt (nicht nur ihre Angina). Und bei ihrem niedrigen Blutdruck kann noch mehr Nitro den Blutdruck weiter gefährlich absenken. Deine Aufgabe: erkennen, lagern, überwachen, aufschreiben, den Arzt informieren — und seine Anordnungen umsetzen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-yildiz-erm-03",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.4",
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
      // SBAR = strukturierte Kommunikation → II.1 (konsistent zu Wagner/Ríos/Novak/Capstone).
      kompetenzbereich: "II.1",
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
              "Richtig. Vollständiges SBAR mit dem wichtigen Punkt (Nitro half diesmal NICHT → Infarktverdacht) und dem kritischen Zustand jetzt (niedriger Blutdruck, schneller Puls). Der Arzt kann sofort handeln — zum Beispiel EKG schreiben oder für den Herzkatheter anmelden.",
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
      // Reflexion eigener Haltung/Erfahrung (Wachsamkeit, Umgang mit Angst) → V.2 (LE2-Neben-Schwerpunkt).
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 21.1.1 (Ängste der Herzpatienten; Beschwerden ernst nehmen)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-yildiz-reflexion",
      tag: "pflege",
      themaPrimaer: "herz-kreislauf-akut",
      // F-01 (Warnzeichen ausbleibende Besserung) · F-10 (Wachsamkeit Frauen/Diabetiker — bewertungsrelevant).
      kernfaktId: ["F-01", "F-10"],
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
