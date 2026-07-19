// CE-06 Situation „Frau Sander — Verbrühung im ambulanten Pflegebesuch“
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt: CE06-LE1-K1 (Rest) — Erste Hilfe bei Verbrennung/Verbrühung, Verätzung, Hitze- und Kältenotfällen.
// Grounding: specs/ce-06/kernfakten/thermisch-chemische-notfaelle.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 14.6.4/14.6.5 (Erste Hilfe), Kap. 5.3/5.4/5.5 (Hypo-/Hyperthermie).
//
// WISSENS-TABS (curriculum-first, Gold-Standard-Aufbau): 3 inlineWissen-Tabs, jeder vor/bei seiner Anwendung,
// literatur-belegt + paraphrasiert (Abstandstest 0), kein Antwort-Step:
//  - Tab A „Wie schwer ist die Verbrühung?“ (Ph.1) — F-01/F-02/F-03 (Grade, Fläche/Handfläche, Schmerz kein Maßstab).
//  - Tab B „Kühlen richtig — und die Hausmittel-Falle“ (Ph.3) — F-04/F-05, Wiederbegegnung→Lehmann.
//  - Tab C „Vier verwandte Notfälle“ (Ph.5, Krone) — F-08..F-13 (Verätzung Haut/Mund, Hitze, Kälte), interleavt K1-Rest.
// KB-Marker aus dem LE1-Schwerpunkt-Set: I.4 (primär, Akut-Handeln) · II.1 (SBAR) · V.2 (Reflexion=E1).
//
// KRITISCH GEBAUT (Anti-Patterns bewusst NUR als FALSCHE Optionen, korrektiv):
//  - Hausmittel (Mehl/Butter/Öl) auf Brandwunde → Distraktor; korrekt: nichts draufschmieren (F-05).
//  - Brandblasen aufstechen → Distraktor (F-05). Festklebende Kleidung abreißen → Distraktor (F-05).
//  - Eiskaltes Wasser/Eis großflächig → Distraktor (Auskühlung, F-04).
//  - Erbrechen auslösen bei Mund-Verätzung → Distraktor (F-09). Heiße Wärmflasche bei Unterkühltem → Distraktor (F-13).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_SANDER_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-sander-erkennen",
  phase: "erkennen",
  titel: "Kochendes Wasser über den Arm",
  titelB1: "Kochendes Wasser über den Arm",
  kontext:
    "Du kommst zum Morgenbesuch. Frau Sander sitzt am Küchentisch, hält den rechten Unterarm von sich weg und stöhnt vor Schmerz. Auf der geröteten Haut bilden sich Blasen, ein nasser Streifen zieht sich über den Oberschenkel. Die Teekanne liegt am Boden. Die Nachbarin steht schon mit einer Mehltüte daneben.",
  kontextB1:
    "Du kommst zum Morgenbesuch. Frau Sander hält den rechten Unterarm und hat starke Schmerzen. Auf der Haut bilden sich Blasen, auch der Oberschenkel ist betroffen. Die Nachbarin steht mit einer Mehltüte daneben.",
  kernSteps: [
    {
      stepId: "ce06-sander-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5 (Verbrennungsgrade; Schmerz kein Maßstab)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-sander-schwere-erkennen",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-02"],
      contentC1: {
        title: "Wie schätzt du die Verletzung ein?",
        body: "Frau Sander hat Brandblasen am Unterarm und starke Schmerzen. Wie ordnest du die Verbrühung erst einmal ein?",
        glossarBegriffe: ["Verbrühung", "Brandblase", "Verbrennungsgrad"],
      },
      contentB1: {
        title: "Wie schätzt du die Verletzung ein?",
        body: "Frau Sander hat Brandblasen (Blasen durch die Verbrennung) am Unterarm und starke Schmerzen. Wie ordnest du die Verbrühung ein?",
        glossarBegriffe: ["Verbrühung (= Schaden durch heiße Flüssigkeit)"],
      },
      question: {
        fragetext: "Wie schätzt du die Verbrühung ein?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Die Blasen sprechen für eine tiefere, mindestens zweitgradige Verbrühung — das nehme ich ernst und schaue mir Ausdehnung und Lage genau an.",
            isCorrect: true,
            explanation:
              "Richtig. Brandblasen sind das Kennzeichen einer Verbrennung/Verbrühung 2. Grades (die Lederhaut ist mitbetroffen) und gehen mit starken Schmerzen einher. Eine zweitgradige Verbrühung bei einer alten Frau ist kein Bagatellschaden — du beurteilst Ausdehnung und Lokalisation und sorgst für ärztliche Abklärung.",
            explanationB1:
              "Richtig. Blasen bedeuten mindestens 2. Grad — das ist ernst. Du schaust dir an, wie groß und wo die Verletzung ist, und sorgst für den Arzt.",
          },
          {
            text: "Dass sie so starke Schmerzen hat, ist das sicherste Zeichen, dass es lebensgefährlich ist — je mehr Schmerz, desto schwerer die Verbrennung.",
            isCorrect: false,
            explanation:
              "Ein verbreiteter Trugschluss. Der Schmerz ist gerade KEIN verlässlicher Maßstab für die Schwere. Bei sehr tiefen (drittgradigen) Verbrennungen sind die Schmerzrezeptoren der Haut zerstört — dann tut es sogar weniger weh, obwohl die Schädigung schwerer ist. Starke Schmerzen bei Frau Sander passen zu einer zweitgradigen Verbrühung, sagen aber nichts über eine Lebensgefahr.",
            explanationB1:
              "Falsch. Der Schmerz sagt nicht, wie schlimm es ist. Bei ganz tiefen Verbrennungen tut es sogar weniger weh, weil die Nerven kaputt sind. Starke Schmerzen heißen hier: 2. Grad — nicht automatisch Lebensgefahr.",
          },
          {
            text: "Blasen sind harmlos — die kann man gleich aufstechen, dann heilt es schneller.",
            isCorrect: false,
            explanation:
              "Nein, gleich doppelt falsch. Blasen zeigen eine zweitgradige, also nicht harmlose Verletzung an. Und Brandblasen werden ausdrücklich NICHT geöffnet: Die intakte Blase schützt die Wunde vor Keimen; ein Aufstechen erhöht die Infektionsgefahr. Blasen bleiben zu.",
            explanationB1:
              "Nein, doppelt falsch. Blasen heißen 2. Grad, das ist nicht harmlos. Und Blasen darfst du nicht aufstechen — sie schützen die Wunde. Blasen bleiben zu.",
          },
        ],
      },
    },
    {
      // Wissens-Tab A (curriculum-first): nach dem Hook (erk-01), konsolidiert Grade + Fläche
      // + „Schmerz kein Maßstab“. Literatur-belegt (F-01/F-02/F-03, Pflege heute Kap. 14.6.5)
      // + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-sander-erk-01b-schwere",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-sander-schwere-wissen",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-01", "F-02", "F-03"],
      transition: "Schätz jetzt ab, wie ausgedehnt es wirklich ist.",
      contentC1: {
        title: "Wie schwer ist die Verbrühung? Fläche, Tiefe — und die Schmerz-Falle",
        body: "",
        glossarBegriffe: ["Verbrennungsgrad", "Neuner-Regel", "Brandblase"],
      },
      inlineWissen: {
        bausteinRef: "thermisch-chemische-notfaelle-schwere",
        themaPrimaer: "thermisch-chemische-notfaelle",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Frau Sander hält den verbrühten Arm von sich weg, Blasen bilden sich, sie hat Schmerzen. Bevor du irgendetwas tust, brauchst du ein Bild: Wie tief geht das — und wie groß ist es? Zwei Fragen entscheiden über die Schwere.",
        storyAufhaengerB1:
          "Frau Sander hält den verbrühten Arm von sich weg. Es bilden sich Blasen und sie hat starke Schmerzen. Bevor du etwas tust, brauchst du ein klares Bild. Wie tief geht die Verletzung? Und wie groß ist sie? Diese zwei Fragen zeigen dir, wie schwer es ist.",
        kerntext:
          "Eine Verbrühung ist ein Hitzeschaden der Haut durch heiße Flüssigkeit — hier das kochende Teewasser. Wie schwer sie ist, misst sich an zwei Dingen: Tiefe und Fläche.\n\nDie Tiefe wird in drei Graden beschrieben. Ersten Grades bedeutet nur Rötung und Schwellung; die Haut heilt ohne Narbe. Zweiten Grades kommen Brandblasen und starke Schmerzen dazu — so wie bei Frau Sander. Dritten Grades ist die Haut komplett zerstört, verkohlt, und heilt nicht mehr von selbst.\n\nDie Fläche schätzt du mit einer einfachen Faustregel: Die Handfläche des Betroffenen entspricht etwa einem Prozent seiner Körperoberfläche (für den groben Überblick dient die Neuner-Regel). Das ist wichtig, denn ab einer größeren betroffenen Fläche gehen dem Körper über die Wunde große Mengen Flüssigkeit verloren — dann droht ein Schock.\n\nUnd die Falle, auf die viele hereinfallen: Der Schmerz ist kein Maßstab für die Schwere. Gerade bei den tiefsten Verbrennungen sind die Schmerzfühler zerstört — je weniger es wehtut, desto schwerer kann die Schädigung sein. Verlass dich also auf Tiefe und Fläche, nicht auf das Schmerzempfinden.",
        kerntextB1:
          "Eine Verbrühung ist ein Hitzeschaden der Haut durch heiße Flüssigkeit. Hier war es das kochende Teewasser. Wie schwer die Verbrühung ist, hängt von zwei Dingen ab: von der Tiefe und von der Fläche.\n\nDie Tiefe teilt man in drei Grade ein. Erster Grad heißt: nur Rötung und Schwellung. Die Haut heilt ohne Narbe. Zweiter Grad heißt: dazu kommen Brandblasen — Blasen durch die Verbrennung — und starke Schmerzen. So ist es bei Frau Sander. Dritter Grad heißt: die Haut ist ganz zerstört und verkohlt. Sie heilt nicht mehr von selbst.\n\nDie Fläche schätzt du mit einer einfachen Faustregel. Die Handfläche des Betroffenen ist etwa ein Prozent der Körperoberfläche. Für den groben Überblick gibt es auch die Neuner-Regel. Das ist wichtig. Denn bei einer großen Fläche verliert der Körper über die Wunde viel Flüssigkeit. Dann droht ein Schock.\n\nUnd jetzt die Falle, auf die viele hereinfallen: Der Schmerz sagt nicht, wie schwer es ist. Gerade bei den tiefsten Verbrennungen sind die Schmerzfühler zerstört. Dann tut es sogar weniger weh, obwohl der Schaden größer ist. Verlass dich also auf Tiefe und Fläche. Verlass dich nicht auf den Schmerz.",
        faustregel:
          "Blasen = mindestens 2. Grad. Fläche mit der Handfläche schätzen (≈ 1 %). Und: wenig Schmerz heißt nicht harmlos — die tiefsten Verbrennungen tun oft am wenigsten weh.",
        faustregelB1:
          "Blasen heißen mindestens 2. Grad. Die Fläche schätzt du mit der Handfläche (≈ 1 %). Wenig Schmerz heißt nicht harmlos: Die tiefsten Verbrennungen tun oft am wenigsten weh.",
        spektrum: [
          {
            patientName: "Nur Rötung, keine Blasen",
            hauptfaktor: "1. Grad",
            kurzbeschreibung:
              "Oberflächlich, nur die Oberhaut betroffen — schmerzhaft, aber heilt ohne Narbe.",
            kurzbeschreibungB1:
              "Nur die oberste Hautschicht ist betroffen. Es tut weh, aber es heilt ohne Narbe.",
          },
          {
            patientName: "Frau Sander",
            situationsId: "ls-sander-verbruehung",
            hauptfaktor: "2. Grad (Blasen)",
            kurzbeschreibung:
              "Brandblasen und starke Schmerzen — die Lederhaut ist mitbetroffen. Ernst nehmen, ärztlich abklären.",
            kurzbeschreibungB1:
              "Brandblasen und starke Schmerzen. Auch die tiefere Hautschicht ist betroffen. Das ist ernst — der Arzt muss es sich ansehen.",
          },
          {
            patientName: "Weißlich/lederartig, wenig Schmerz",
            hauptfaktor: "3. Grad",
            kurzbeschreibung:
              "Die schwerste Form — obwohl es weniger wehtut, weil die Schmerzfühler zerstört sind. Immer Klinik.",
            kurzbeschreibungB1:
              "Die schwerste Form. Es tut sogar weniger weh, weil die Schmerzfühler zerstört sind. Immer in die Klinik.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Woran misst du, wie schwer eine Verbrennung/Verbrühung ist — und warum ist starker Schmerz kein gutes Zeichen für „schwer“?",
          rueckseite:
            "An Tiefe (1.–3. Grad; Blasen = mind. 2. Grad) und Fläche (Handfläche ≈ 1 % der Körperoberfläche; ab großer Fläche Schockgefahr). Schmerz ist KEIN Maßstab: bei tiefen Verbrennungen sind die Schmerzfühler zerstört → weniger Schmerz trotz schwererer Schädigung.",
          vorderseiteB1:
            "Woran erkennst du, wie schwer eine Verbrennung oder Verbrühung ist? Und warum ist starker Schmerz kein gutes Zeichen dafür?",
          rueckseiteB1:
            "An der Tiefe und an der Fläche. Tiefe: 1. bis 3. Grad, Blasen heißen mindestens 2. Grad. Fläche: Handfläche ≈ 1 %, bei großer Fläche droht ein Schock. Schmerz ist KEIN Maßstab: Bei tiefen Verbrennungen sind die Schmerzfühler zerstört. Dann tut es weniger weh, obwohl der Schaden größer ist.",
        },
      },
    },
    {
      stepId: "ce06-sander-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5 (Neuner-Regel/Handfläche 1 %; Flächen-/Schockschwelle)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-sander-flaeche-einordnen",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-03"],
      contentC1: {
        title: "Wie groß ist die Fläche?",
        body: "Die verbrühte Stelle am Unterarm ist etwa handflächengroß, dazu ein schmaler Streifen am Oberschenkel. Wie ordnest du Ausdehnung und Handlungsbedarf ein?",
        glossarBegriffe: ["Neuner-Regel", "Körperoberfläche", "Volumenmangelschock"],
      },
      contentB1: {
        title: "Wie groß ist die Fläche?",
        body: "Die verbrühte Stelle am Unterarm ist etwa so groß wie eine Handfläche, dazu ein Streifen am Oberschenkel. Wie ordnest du das ein?",
        glossarBegriffe: ["Neuner-Regel (= Fläche abschätzen)"],
      },
      question: {
        fragetext: "Wie ordnest du Fläche und Handlungsbedarf ein?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Grob wenige Prozent (Handfläche ≈ 1 %) — für einen großen Flüssigkeitsverlust noch zu klein, aber wegen zweitgradiger Verbrühung, Alter und Schmerzen gehört sie ärztlich versorgt.",
            isCorrect: true,
            explanation:
              "Richtig. Mit der Handflächen-Regel schätzt du die betroffene Fläche auf wenige Prozent — ein Volumenmangelschock droht erst bei deutlich größerer Ausdehnung (mehr als 10–15 %). Trotzdem ist das keine Bagatelle: Eine zweitgradige Verbrühung bei einer 74-Jährigen wird ärztlich versorgt (Schmerz, Wundschutz, Infektionsgefahr). Die Einschätzung entscheidet über die Dringlichkeit, nicht über ein „egal“.",
            explanationB1:
              "Richtig. Die Fläche ist klein (Handfläche ≈ 1 %). Ein Volumenmangelschock (ein Schock durch Flüssigkeitsverlust über die Wunde) droht erst bei einer viel größeren Fläche. Aber eine 2.-gradige Verbrühung bei einer alten Frau muss trotzdem zum Arzt.",
          },
          {
            text: "Unter 10 % ist immer harmlos — da braucht es keinen Arzt, das heilt von allein.",
            isCorrect: false,
            explanation:
              "Falsch. Die 10–15-%-Schwelle betrifft die Gefahr eines Volumenmangelschocks — sie sagt nichts darüber, ob eine Wunde ärztlich versorgt werden muss. Eine zweitgradige Verbrühung mit Blasen, dazu bei einer alten Frau und an mehreren Stellen, gehört ärztlich beurteilt und versorgt, auch wenn die Fläche klein ist.",
            explanationB1:
              "Falsch. Die 10-%-Grenze betrifft nur die Schockgefahr. Eine Verbrühung mit Blasen bei einer alten Frau muss trotzdem zum Arzt, auch wenn sie klein ist.",
          },
          {
            text: "Die Fläche kann man sowieso nicht schätzen — bei jeder Verbrennung sofort den Notarzt für eine Schockbehandlung rufen.",
            isCorrect: false,
            explanation:
              "Nicht sachgerecht. Die Fläche lässt sich sehr wohl grob schätzen (Handfläche ≈ 1 %, Neuner-Regel). Eine pauschale Schock-Alarmierung bei jeder kleinen Verbrennung ist unbegründet. Angemessen ist hier: Fläche und Tiefe einschätzen, die Wunde versorgen und ärztliche Hilfe organisieren — nicht in Aktionismus verfallen.",
            explanationB1:
              "Nein. Die Fläche kann man grob schätzen (Handfläche ≈ 1 %). Nicht bei jeder kleinen Verbrennung Panik machen. Richtig: einschätzen, versorgen, Arzt holen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_SANDER_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-sander-alarmieren",
  phase: "alarmieren",
  titel: "Wer muss kommen?",
  titelB1: "Wer muss kommen?",
  kontext:
    "Frau Sander ist wach und ansprechbar, aber mit Schmerzen. Zweitgradige Verbrühung an Unterarm und Oberschenkel, du bist als ambulante Pflegekraft allein bei ihr. Die Nachbarin fragt: „Sollen wir überhaupt jemanden rufen?“",
  kontextB1:
    "Frau Sander ist wach, aber sie hat Schmerzen. Zweitgradige Verbrühung, du bist allein bei ihr. Die Nachbarin fragt: „Müssen wir jemanden rufen?“",
  kernSteps: [
    {
      stepId: "ce06-sander-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5 (Klinik-Indikation Verbrennung; Gesicht/Hände/Alter)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-sander-alarmieren",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-06"],
      contentC1: {
        title: "Abwarten oder Hilfe rufen?",
        body: "Wie entscheidest du beim Alarmieren — reicht der Hausarzt später, oder organisierst du jetzt ärztliche Versorgung?",
        glossarBegriffe: ["Rettungsdienst", "Klinikeinweisung"],
      },
      contentB1: {
        title: "Abwarten oder Hilfe rufen?",
        body: "Wie entscheidest du: reicht der Hausarzt später, oder holst du jetzt ärztliche Hilfe?",
        glossarBegriffe: ["Rettungsdienst"],
      },
      question: {
        fragetext: "Wie entscheidest du beim Alarmieren?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Jetzt ärztliche Versorgung organisieren (Rettungsdienst / Notaufnahme) — eine zweitgradige Verbrühung mit Blasen bei einer alten Frau gehört zeitnah ärztlich versorgt.",
            isCorrect: true,
            explanation:
              "Richtig. Die formalen Schwellen für eine Klinik- oder Zentrumsbehandlung sind eine Fläche über 10 % der Körperoberfläche bzw. Verbrennungen im Gesicht, an Händen, Füßen oder im Genitalbereich — die erfüllt Frau Sander mit ihrer kleinflächigen Verbrühung nicht. Trotzdem ist eine offene, blasenbildende (zweitgradige) Wunde bei einer allein lebenden 74-Jährigen ein Fall für ärztliche Beurteilung: wegen der Schmerzen, der fachgerechten Wundversorgung und der Infektionsgefahr. Zur Wegewahl: Weil sie allein lebt und starke Schmerzen hat, ist der Rettungsdienst hier gerechtfertigt — bei einem sonst stabilen, begleiteten Menschen käme auch die ärztliche Vorstellung noch am selben Tag (Hausarzt/Bereitschaftsdienst) infrage. Du organisierst deshalb zeitnah ärztliche Hilfe, versorgst parallel die Wunde und informierst — im ambulanten Dienst — Angehörige und den Pflegedienst.",
            explanationB1:
              "Richtig. Eine 2.-gradige Verbrühung mit Blasen bei einer alten Frau muss zeitnah ärztlich versorgt werden. Frau Sander lebt allein und hat starke Schmerzen — darum ist der Rettungsdienst hier richtig. Ist jemand stabil und hat Begleitung, kann auch der Hausarzt oder der Bereitschaftsdienst am selben Tag helfen. Du holst Hilfe und versorgst gleichzeitig die Wunde.",
          },
          {
            text: "Erst mal eincremen und beobachten; wenn es morgen nicht besser ist, rufe ich den Hausarzt an.",
            isCorrect: false,
            explanation:
              "Gefährlich verzögernd. Eine zweitgradige Verbrühung ist eine offene Wunde mit Infektionsgefahr und starken Schmerzen — sie „bis morgen zu beobachten“ verschleppt die nötige Versorgung. Und Eincremen ist gerade falsch (keine Salben auf die frische Wunde). Hier wird zeitnah ärztliche Hilfe organisiert.",
            explanationB1:
              "Gefährlich. Eine 2.-gradige Verbrühung darf man nicht bis morgen abwarten. Und Eincremen ist falsch. Du holst zeitnah ärztliche Hilfe.",
          },
          {
            text: "Ich setze sie schnell ins Auto und fahre selbst los — Erstversorgung kostet nur Zeit.",
            isCorrect: false,
            explanation:
              "Nein. Die Erstversorgung (kühlen, steril abdecken, Wärmeerhalt, Schmerz-/Kreislaufkontrolle) ist kein Zeitverlust, sondern schützt die Wunde und lindert Schmerzen — sie wird nicht übersprungen. Ob Rettungsdienst oder eigener Transport sinnvoll ist, hängt vom Zustand ab; eine schmerzgeplagte alte Frau mit Verbrühung fährst du nicht unversorgt und ungesichert allein durch die Gegend.",
            explanationB1:
              "Nein. Die Erstversorgung (kühlen, abdecken, warm halten) ist wichtig und kein Zeitverlust. Du versorgst sie erst und holst dann geordnet Hilfe — nicht unversorgt ins Auto.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Hausmittel-Falle + Branching)
export const CE06_SIT_SANDER_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-sander-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Kühlen, abdecken — und kein Mehl",
  titelB1: "Kühlen und abdecken",
  kontext:
    "Die ärztliche Hilfe ist organisiert und unterwegs. Frau Sander hat Schmerzen, die Nachbarin drängt mit der Mehltüte: „Los, streuen Sie drauf!“ Jetzt zählt die richtige Erstversorgung — und kein Fehler aus gut gemeinter Routine.",
  kontextB1:
    "Die ärztliche Hilfe ist unterwegs. Frau Sander hat Schmerzen, die Nachbarin drängt mit dem Mehl. Jetzt zählt die richtige Erstversorgung.",
  kernSteps: [
    {
      // Wissens-Tab B (curriculum-first): VOR der Erstversorgung (erm-01). Literatur-belegt
      // (F-04/F-05, Pflege heute Kap. 14.6.5) + paraphrasiert (Abstandstest 0). Wiederbegegnung→Lehmann
      // (sterile Kompresse, nichts Unsteriles/Hausmittel). Kein Antwort-Step.
      stepId: "ce06-sander-erm-00b-kuehlen",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-sander-kuehlen-wissen",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-04", "F-05"],
      transition: "Die Nachbarin hält dir schon die Mehltüte hin.",
      contentC1: {
        title: "Kühlen — richtig; und die Hausmittel-Falle",
        body: "",
        glossarBegriffe: ["Wärmeerhalt", "Brandblase", "sterile Wundauflage"],
      },
      inlineWissen: {
        bausteinRef: "thermisch-chemische-notfaelle-kuehlen",
        themaPrimaer: "thermisch-chemische-notfaelle",
        themenSekundaer: ["traumatologische-erstversorgung"],
        storyAufhaenger:
          "Die Nachbarin greift schon zur Mehltüte, Frau Sander bittet dich, „schnell etwas draufzutun“. Dein Impuls sagt: irgendetwas auf die Wunde. Aber was hilft der verbrühten Haut wirklich — und was macht es schlimmer?",
        storyAufhaengerB1:
          "Die Nachbarin greift schon zur Mehltüte. Frau Sander bittet dich: „Tun Sie schnell etwas drauf!“ Dein Impuls sagt: irgendetwas auf die Wunde. Aber was hilft der Haut wirklich? Und was macht es schlimmer?",
        kerntext:
          "Kühlen hilft — aber maßvoll. Zur Schmerzlinderung reicht lauwarmes Wasser (etwa 20 Grad) für rund zehn Minuten über die Stelle. Kein Eis, kein eiskaltes Wasser und keine langen, großflächigen Güsse: Der Körper kühlt sonst gefährlich aus, und ein Absinken der Körperkerntemperatur verschlechtert die Prognose. Gerade bei großen Flächen und bei Kindern kühlt man deshalb zurückhaltend.\n\nUnd jetzt das Wichtigste gegen den guten Rat der Nachbarin: Auf eine Brandwunde kommt nichts drauf, was nicht hingehört. Keine Salben, kein Puder, keine Sprays — und erst recht keine Hausmittel wie Mehl, Butter oder Öl. Sie halten die Hitze im Gewebe, verkleben die Wunde und erhöhen die Infektionsgefahr; später muss die Ärztin das mühsam wieder entfernen.\n\nBrandblasen bleiben zu — nicht aufstechen, sie schützen die Wunde. Kleidung, die an der Haut klebt, und eingebrannte Reste reißt du nicht ab; nur was sich leicht löst, wird entfernt. Danach die Wunde locker steril (oder wenigstens sauber) abdecken.\n\nUnd zuletzt an die Wärme denken: Nach dem kurzen Kühlen deckst du Frau Sander zu, damit sie nicht auskühlt.",
        kerntextB1:
          "Kühlen hilft — aber nur maßvoll. Nimm lauwarmes Wasser, etwa 20 Grad, für rund zehn Minuten. Kein Eis, kein eiskaltes Wasser, keine langen Güsse über den ganzen Körper. Sonst kühlt der Körper zu stark aus. Und wenn die Körpertemperatur zu tief sinkt, wird es gefährlich. Bei großen Flächen und bei Kindern kühlst du deshalb vorsichtig.\n\nJetzt das Wichtigste gegen den Rat der Nachbarin: Auf eine Brandwunde kommt nichts drauf, was nicht hingehört. Keine Salben, kein Puder, keine Sprays. Und schon gar keine Hausmittel wie Mehl, Butter oder Öl. Sie halten die Hitze im Gewebe und verkleben die Wunde. So kann sich die Wunde leichter entzünden. Später muss die Ärztin alles mühsam wieder entfernen.\n\nBrandblasen bleiben zu. Stich sie nicht auf, denn sie schützen die Wunde. Kleidung, die an der Haut klebt, reißt du nicht ab. Auch eingebrannte Reste lässt du liegen. Nur was sich leicht löst, nimmst du weg. Danach deckst du die Wunde locker und steril ab. Steril bedeutet: mit sauberem, keimfreiem Material.\n\nUnd zuletzt an die Wärme denken: Nach dem kurzen Kühlen deckst du Frau Sander zu. So kühlt sie nicht aus.",
        faustregel:
          "Kurz mit lauwarmem Wasser kühlen (kein Eis), dann steril abdecken und warm halten. Niemals Salben/Mehl/Butter drauf, Blasen nicht öffnen, festklebende Kleidung nicht abreißen.",
        faustregelB1:
          "Kurz mit lauwarmem Wasser kühlen (kein Eis). Dann steril abdecken und warm halten. Niemals Salben, Mehl oder Butter drauf. Blasen nicht öffnen. Festklebende Kleidung nicht abreißen.",
        spektrum: [
          {
            patientName: "Frau Sander (Unterarm)",
            situationsId: "ls-sander-verbruehung",
            hauptfaktor: "kleine Fläche",
            kurzbeschreibung:
              "Wenige Minuten lauwarm kühlen (Wasser um 20 °C), locker steril abdecken, danach zudecken — die Blasen bleiben zu.",
            kurzbeschreibungB1:
              "Wenige Minuten lauwarm kühlen, das Wasser um 20 °C. Dann locker steril abdecken und zudecken. Die Blasen bleiben zu.",
          },
          {
            patientName: "Großflächige Verbrennung",
            hauptfaktor: "Auskühlungsgefahr",
            kurzbeschreibung:
              "Nur kurz und zurückhaltend kühlen — bei großer Fläche steht der Schutz vor dem Auskühlen (Wärmeerhalt) im Vordergrund.",
            kurzbeschreibungB1:
              "Nur kurz und vorsichtig kühlen. Bei großer Fläche ist der Wärmeerhalt — der Schutz vor dem Auskühlen — am wichtigsten. Man hält den Menschen warm.",
          },
          {
            patientName: "Hausmittel-Reflex (Mehl/Butter)",
            hauptfaktor: "nichts draufschmieren",
            kurzbeschreibung:
              "Mehl, Butter, Öl, Zahnpasta halten die Hitze und verkleben die Wunde. Auf die Brandwunde kommt nichts davon.",
            kurzbeschreibungB1:
              "Mehl, Butter, Öl und Zahnpasta halten die Hitze und verkleben die Wunde. Auf die Brandwunde kommt nichts davon.",
          },
        ],
        wiederbegegnung: {
          basisBausteinId: "traumatologische-erstversorgung-blutstillung",
          basisPatient: "Frau Lehmann",
          vertiefung:
            "Bei Frau Lehmann galt für die blutende Wunde: sterile Kompresse, kein unsteriles Taschentuch. Dieselbe Grundhaltung trägt hier — auf die Brandwunde kommt nur eine sterile/saubere Auflage, keine Salben und keine Hausmittel. Wunden schützt man mit sauberem Material, man schmiert nichts darauf.",
        },
        karteikarte: {
          vorderseite:
            "Frau Sander ist verbrüht, die Nachbarin will Mehl draufstreuen — wie versorgst du die Wunde richtig?",
          rueckseite:
            "Kurz mit lauwarmem Wasser kühlen (kein Eis, bei großer Fläche/alten Menschen zurückhaltend — Auskühlung!). Dann locker steril abdecken und zudecken (Wärmeerhalt). NIEMALS Salben/Puder/Sprays/Hausmittel (Mehl, Butter), Blasen nicht öffnen, festklebende Kleidung nicht abreißen.",
          vorderseiteB1:
            "Frau Sander ist verbrüht und die Nachbarin will Mehl draufstreuen. Wie versorgst du die Wunde richtig?",
          rueckseiteB1:
            "Kurz mit lauwarmem Wasser kühlen, kein Eis. Bei großer Fläche und bei alten Menschen vorsichtig kühlen, sonst kühlen sie aus. Dann locker steril abdecken und zudecken (Wärmeerhalt), damit sie warm bleiben. NIEMALS Salben, Puder, Sprays oder Hausmittel wie Mehl und Butter. Blasen nicht öffnen. Festklebende Kleidung nicht abreißen.",
        },
      },
    },
    {
      stepId: "ce06-sander-erm-01",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5 (Erstmaßnahmen Verbrennung: kühlen, abdecken, Wärmeerhalt)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-sander-erstversorgung",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-04", "F-05"],
      contentC1: {
        title: "„Los, streuen Sie das Mehl drauf!“",
        body: "Die Nachbarin drückt dir die Mehltüte in die Hand, Frau Sander nickt hoffnungsvoll. Wie versorgst du die Verbrühung bis zum Eintreffen der ärztlichen Hilfe?",
        glossarBegriffe: ["Wärmeerhalt", "sterile Wundauflage"],
      },
      contentB1: {
        title: "„Los, streuen Sie das Mehl drauf!“",
        body: "Die Nachbarin drückt dir die Mehltüte in die Hand. Wie versorgst du die Verbrühung, bis die ärztliche Hilfe kommt?",
        glossarBegriffe: ["Wärmeerhalt (= warm halten)"],
      },
      question: {
        fragetext: "Wie versorgst du die Verbrühung?",
        branchingOptions: [
          {
            text: "Ich halte die Nachbarin freundlich, aber klar auf („kein Mehl!“), kühle die Stelle einige Minuten mit lauwarmem Wasser, decke sie dann locker steril ab und decke Frau Sander zu — und behalte Schmerz und Kreislauf im Blick.",
            isCorrect: true,
            feedback:
              "Frau Sander atmet auf, die Schmerzen lassen durch das Kühlen etwas nach, und ihr wartet gemeinsam auf die ärztliche Hilfe. — Genau richtig. Kurzes Kühlen mit lauwarmem Wasser lindert den Schmerz, ohne den Körper auskühlen zu lassen; die sterile Abdeckung schützt vor Keimen; das Zudecken hält sie warm. Und du hast die eigentliche Falle vermieden: kein Hausmittel auf die Wunde.",
            feedbackB1:
              "Frau Sander atmet auf, die Schmerzen werden durch das Kühlen etwas besser. — Genau richtig. Kurz mit lauwarmem Wasser kühlen, steril abdecken, warm halten — und kein Mehl auf die Wunde.",
          },
          {
            text: "Ich streue das Mehl auf — es kühlt und saugt die Nässe auf, das hat früher doch auch geholfen.",
            isCorrect: false,
            feedback:
              "Frau Sander verzieht das Gesicht, das Mehl verklumpt auf der nässenden Wunde zu einer verkrusteten Schicht. — Der Wunsch zu helfen ist verständlich, aber Mehl (wie Butter, Öl, Puder oder Salben) gehört NIEMALS auf eine Brandwunde: Es hält die Hitze im Gewebe, verklebt die Wunde und erhöht die Infektionsgefahr — die Ärztin muss es später schmerzhaft entfernen. Richtig ist: mit lauwarmem Wasser kühlen und steril abdecken.",
            feedbackB1:
              "Das Mehl verklumpt auf der Wunde. — Der Gedanke ist verständlich, aber falsch: Mehl, Butter, Öl gehören NIE auf eine Brandwunde. Sie halten die Hitze und verkleben alles. Richtig: mit lauwarmem Wasser kühlen und steril abdecken.",
          },
          {
            text: "Ich halte den Arm möglichst lange unter eiskaltes Wasser und lege Eiswürfel auf — je kälter, desto besser.",
            isCorrect: false,
            feedback:
              "Frau Sander beginnt zu zittern und wird blass — ihr wird kalt. — Der Gedanke „viel hilft viel“ stimmt hier nicht. Eiskaltes Wasser und Eis über längere Zeit lassen den Körper auskühlen; ein Absinken der Körperkerntemperatur verschlechtert die Prognose. Richtig ist kurzes Kühlen mit lauwarmem Wasser (etwa 20 Grad) und anschließend Wärmeerhalt durch Zudecken.",
            feedbackB1:
              "Frau Sander fängt an zu zittern — ihr wird kalt. — „Viel hilft viel“ stimmt hier nicht. Eis und eiskaltes Wasser kühlen den ganzen Körper aus. Richtig: kurz mit lauwarmem Wasser kühlen, dann zudecken.",
          },
          {
            text: "Ich steche die Blasen auf, damit die Flüssigkeit rausläuft, und schmiere eine Brandsalbe darüber.",
            isCorrect: false,
            feedback:
              "Aus den geöffneten Blasen nässt es, die offene Fläche ist jetzt ungeschützt. — Gleich doppelt falsch. Brandblasen bleiben zu — die intakte Blase schützt die Wunde vor Keimen; ein Aufstechen erhöht die Infektionsgefahr. Und auf die frische Brandwunde kommt keine Salbe. Richtig: kühlen, Blasen belassen, locker steril abdecken.",
            feedbackB1:
              "Die offenen Blasen nässen jetzt und sind ungeschützt. — Doppelt falsch. Blasen bleiben zu (sie schützen die Wunde), und keine Salbe auf die frische Wunde. Richtig: kühlen, Blasen zu lassen, steril abdecken.",
          },
        ],
      },
    },
    {
      stepId: "ce06-sander-erm-02",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6.5 (keine Salben/Puder/Sprays; Brandblasen nicht öffnen)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-sander-hausmittel-mythos",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-05"],
      contentC1: {
        title: "Zwei alte Ratschläge auf dem Prüfstand",
        body: "Zwei Sätze, die man oft hört. Stimmen sie?",
        glossarBegriffe: ["Brandblase"],
      },
      contentB1: {
        title: "Zwei alte Ratschläge",
        body: "Zwei Sätze, die man oft hört. Stimmen sie?",
        glossarBegriffe: ["Brandblase"],
      },
      question: {
        fragetext: "Bewerte die beiden Aussagen zur Brandwunde.",
        trueFalseCards: [
          {
            statement: "Auf eine frische Brandwunde gehört ein Hausmittel wie Mehl oder Butter — das kühlt und schützt.",
            isTrue: false,
            explanation:
              "Falsch. Auf eine Brandwunde kommen keinesfalls Salben, Puder, Sprays oder Hausmittel wie Mehl und Butter. Sie kühlen nicht, sondern halten die Hitze im Gewebe, verkleben die Wunde und erhöhen die Infektionsgefahr — später müssen sie schmerzhaft entfernt werden. Richtig ist: kurz mit (lauwarmem) Wasser kühlen und steril abdecken.",
            explanationB1:
              "Falsch. Auf eine Brandwunde kommt nie ein Hausmittel wie Mehl oder Butter. Das kühlt nicht — es hält die Hitze in der Haut, verklebt die Wunde und macht eine Entzündung wahrscheinlicher. Richtig ist: kurz mit lauwarmem Wasser kühlen und steril abdecken.",
          },
          {
            statement: "Brandblasen lässt man geschlossen und deckt die Wunde nur locker steril ab.",
            isTrue: true,
            explanation:
              "Richtig. Brandblasen werden nicht geöffnet: Die intakte Blase ist ein natürlicher Schutz gegen Keime; ein Aufstechen öffnet die Wunde und erhöht die Infektionsgefahr. Die Blase bleibt zu, die Wunde wird nur locker steril abgedeckt.",
            explanationB1:
              "Richtig. Brandblasen (Blasen durch die Verbrennung) sticht man nicht auf. Die geschlossene Blase schützt die Wunde vor Keimen. Die Blase bleibt zu, die Wunde wird nur locker steril abgedeckt.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 13,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_SANDER_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-sander-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an den Rettungsdienst",
  titelB1: "Übergabe",
  kontext:
    "Der Rettungsdienst trifft ein. Die Notfallsanitäterin fragt dich, während sie zu Frau Sander geht: „Was haben wir?“",
  kontextB1:
    "Der Rettungsdienst kommt. Die Notfallsanitäterin fragt: „Was haben wir?“",
  kernSteps: [
    {
      stepId: "ce06-sander-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      // SBAR = strukturierte Kommunikation → II.1. Löst über themaPrimaer "notfallassessment"
      // auf notfallassessment/F-07 (SBAR, Leonard 2004) auf — konsistent zu Wagner/Ríos/Lehmann.
      kompetenzbereich: "II.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-sander-sbar",
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
            text: "\"Frau Sander, 74, vor etwa 15 Minuten Verbrühung mit kochendem Wasser an rechtem Unterarm und Oberschenkel (S). Lebt allein, Hypertonie, sonst orientiert und ansprechbar (B). Zweitgradig mit Brandblasen, wenige Prozent Fläche, mit lauwarmem Wasser gekühlt, steril abgedeckt, Schmerzen stark, Kreislauf stabil (A). Bitte Analgesie und Transport in die Klinik zur Wundversorgung (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR: Situation (wer/was/wann), Background (Lebensumstände, Vorerkrankung, Bewusstsein), Assessment (Grad, Fläche, bereits Getanes, Schmerz, Kreislauf), Recommendation (Schmerztherapie, Transport zur Wundversorgung). Die Sanitäterin hat sofort ein vollständiges, priorisiertes Bild.",
            explanationB1:
              "Richtig. Vollständiges SBAR: was/wann, Vorgeschichte und Bewusstsein, Zustand (Grad, Fläche, was schon getan wurde, Schmerz), und die Bitte (Schmerzmittel, Transport). Alles Wichtige in Sekunden.",
          },
          {
            text: "\"Die arme Frau hat sich verbrüht, ich hab schon gekühlt, ist alles unter Kontrolle — schauen Sie selbst.\"",
            isCorrect: false,
            explanation:
              "Zu vage und unvollständig. Es fehlen die harten Fakten: Grad und Fläche, Lokalisation, Zeitpunkt, Vorerkrankungen, Schmerz- und Kreislaufstatus sowie eine klare Empfehlung. „Alles unter Kontrolle“ ist keine Übergabe — die Sanitäterin muss sich alles selbst zusammensuchen und verliert Zeit.",
            explanationB1:
              "Zu ungenau. Es fehlen Grad, Fläche, Zeit, Vorgeschichte, Schmerz und eine klare Bitte. „Alles unter Kontrolle“ ist keine Übergabe.",
          },
          {
            text: "\"Passen Sie auf, die Nachbarin wollte Mehl draufstreuen, ich hab's gerade noch verhindert, unglaublich, oder?\"",
            isCorrect: false,
            explanation:
              "Am Notfall vorbei. Die Anekdote über die Nachbarin ist für die Übergabe nebensächlich — es fehlt das medizinisch Entscheidende (Grad, Fläche, Lokalisation, Erstversorgung, Schmerz/Kreislauf, Empfehlung). SBAR priorisiert die harten Fakten; Erzählenswertes kann höchstens ganz am Rand erwähnt werden.",
            explanationB1:
              "Am Wichtigen vorbei. Die Geschichte über die Nachbarin ist Nebensache. Es fehlen Grad, Fläche, Erstversorgung, Schmerz und eine Bitte. SBAR braucht die harten Fakten.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN  (Spektrum-Krone: Verätzung/Hitze/Kälte)
export const CE06_SIT_SANDER_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-sander-reflektieren",
  phase: "reflektieren",
  titel: "Vier verwandte Notfälle",
  titelB1: "Vier verwandte Notfälle",
  kontext:
    "Frau Sander ist auf dem Weg in die Klinik. Beim Aufräumen denkst du: Es war Hitze auf der Haut. Aber es gibt nahe Verwandte — Verätzungen, Hitze- und Kältenotfälle —, bei denen die erste Reaktion jeweils eine andere ist.",
  kontextB1:
    "Frau Sander ist auf dem Weg in die Klinik. Du denkst nach: Es war Hitze auf der Haut. Aber es gibt ähnliche Notfälle mit je anderer erster Reaktion.",
  kernSteps: [
    {
      // Wissens-Tab C (Krone von K1-Rest): interleavt Verbrennung/Verätzung(Haut+Mund)/Hitze/Kälte.
      // Literatur-belegt (F-08..F-13) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-sander-ref-00b-spektrum",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["I care Pflege 2025 (Verätzung Verdauungstrakt: „Leitungswasser oder Tee“, keine Milch)", "Pflege heute 2019, Kap. 14.6.4/14.6.5 (Verätzung), Kap. 5.4/5.5 (Hypo-/Hyperthermie)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-sander-thermisch-chemisch-spektrum",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-08", "F-09", "F-10", "F-11", "F-12", "F-13"],
      transition: "Nimm das gleich mit in zwei andere Fälle.",
      contentC1: {
        title: "Vier verwandte Notfälle — und die je andere erste Reaktion",
        body: "",
        glossarBegriffe: ["Verätzung", "Hitzschlag", "Hypothermie", "stabile Seitenlage"],
      },
      inlineWissen: {
        bausteinRef: "thermisch-chemische-notfaelle-spektrum",
        themaPrimaer: "thermisch-chemische-notfaelle",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Bei Frau Sander war es kochendes Wasser — Hitze auf der Haut. Aber dieselbe Familie von Notfällen hat vier Gesichter, und jedes braucht eine andere erste Reaktion. Erkennst du sie auseinander?",
        storyAufhaengerB1:
          "Bei Frau Sander war es kochendes Wasser — Hitze auf der Haut. Aber diese Familie von Notfällen hat vier Gesichter. Und jedes braucht eine andere erste Reaktion. Erkennst du sie auseinander?",
        kerntext:
          "Vier verwandte Bilder, vier verschiedene erste Handgriffe:\n\nHitze auf der Haut (Verbrennung/Verbrühung): kurz mit Wasser kühlen, steril abdecken, nichts draufschmieren.\n\nÄtzendes auf der Haut (Verätzung durch Säure oder Lauge): zuerst alle benetzten Kleider entfernen, dann den Bereich lange und gründlich mit fließendem Wasser abspülen. Schütze dabei deine eigenen Finger vor dem Ätzstoff.\n\nÄtzendes geschluckt (Verätzung von Mund und Speiseröhre): gib kleine Schlucke Wasser oder Tee zu trinken (keine Milch) — etwa 200 Milliliter, nicht mehr, sonst droht Erbrechen. Und der wichtigste Satz überhaupt: niemals Erbrechen auslösen, denn das würde die Speiseröhre ein zweites Mal verätzen.\n\nÜberhitzt (Hitzschlag, Sonnenstich, Hitzekollaps): den Menschen raus aus der Hitze an einen kühlen Ort bringen, Kleidung öffnen, feuchte Tücher auflegen, kühle Getränke anbieten, passend lagern (bei Bewusstlosigkeit stabile Seitenlage) und die Vitalzeichen überwachen.\n\nUnterkühlt (Hypothermie, unter 35 Grad, ab unter 30 Grad lebensbedrohlich): langsam und passiv wärmen — Decken, warme Getränke, warmer Raum. Und ausgerechnet hier der häufigste Fehler: keine heiße Wärmflasche und keinen Wärmestrahler direkt auf die Haut. Das weitet die oberflächlichen Gefäße und lässt den Blutdruck abfallen.",
        kerntextB1:
          "Vier ähnliche Bilder, vier verschiedene erste Handgriffe.\n\nHitze auf der Haut ist eine Verbrennung oder Verbrühung. Kurz mit Wasser kühlen, steril abdecken, nichts draufschmieren.\n\nÄtzendes auf der Haut nennt man Verätzung. Das ist ein Schaden durch Säure oder Lauge. Entferne zuerst alle nassen Kleider. Dann spülst du die Stelle lange und gründlich mit fließendem Wasser. Schütze dabei deine eigenen Finger vor dem Ätzstoff.\n\nÄtzendes geschluckt heißt: Mund und Speiseröhre sind verätzt. Gib kleine Schlucke Wasser oder Tee zu trinken, keine Milch. Etwa 200 Milliliter, nicht mehr, sonst muss die Person erbrechen. Und der wichtigste Satz: Löse niemals Erbrechen aus. Denn dann verätzt das Gift die Speiseröhre ein zweites Mal.\n\nÜberhitzt ist jemand beim Hitzschlag, beim Sonnenstich oder beim Hitzekollaps. Bring die Person raus aus der Hitze an einen kühlen Ort. Öffne die Kleidung, lege feuchte Tücher auf, biete kühle Getränke an. Lagere sie passend. Ist sie bewusstlos, nutzt du die stabile Seitenlage. Und überwache die Vitalzeichen, also Puls, Atmung und Bewusstsein.\n\nUnterkühlt (Hypothermie) heißt: Der Körper ist zu kalt, unter 35 Grad. Ab unter 30 Grad ist es lebensbedrohlich. Wärme die Person langsam und passiv: mit Decken, warmen Getränken und einem warmen Raum. Und hier der häufigste Fehler: keine heiße Wärmflasche und keinen Wärmestrahler direkt auf die Haut. Das weitet die Gefäße nah an der Haut, und der Blutdruck fällt ab.",
        faustregel:
          "Hitze auf der Haut → kühlen; Ätzendes auf der Haut → Kleider weg + fließend spülen; Ätzendes geschluckt → kleine Schlucke, NIE Erbrechen; überhitzt → aus der Hitze + kühlen; unterkühlt → langsam passiv wärmen, keine Wärmflasche.",
        faustregelB1:
          "Hitze auf der Haut → kühlen. Ätzendes auf der Haut → Kleider weg und mit Wasser spülen. Ätzendes geschluckt → kleine Schlucke, NIE Erbrechen. Überhitzt → raus aus der Hitze und kühlen. Unterkühlt → langsam und passiv wärmen, keine Wärmflasche.",
        spektrum: [
          {
            patientName: "Säure/Lauge auf der Haut",
            hauptfaktor: "Verätzung Haut",
            kurzbeschreibung:
              "Benetzte Kleider entfernen, dann ausgiebig mit fließendem Wasser spülen — die eigenen Finger vor dem Ätzstoff schützen.",
            kurzbeschreibungB1:
              "Zuerst die nassen Kleider entfernen. Dann lange mit fließendem Wasser spülen. Schütze deine eigenen Finger vor dem Ätzstoff.",
          },
          {
            patientName: "Ätzendes geschluckt",
            hauptfaktor: "Verätzung Mund/Speiseröhre",
            kurzbeschreibung:
              "Kleine Schlucke Wasser oder Tee (ca. 200 ml, nicht mehr; keine Milch). NIEMALS Erbrechen auslösen — das verätzt die Speiseröhre erneut.",
            kurzbeschreibungB1:
              "Kleine Schlucke Wasser oder Tee, etwa 200 ml, nicht mehr, keine Milch. NIEMALS Erbrechen auslösen. Sonst verätzt es die Speiseröhre noch einmal.",
          },
          {
            patientName: "Hitzschlag / Sonnenstich",
            hauptfaktor: "überhitzt",
            kurzbeschreibung:
              "Aus der Hitze in eine kühle Umgebung, Kleidung öffnen, feuchte Tücher, kühle Getränke, lagern, Vitalzeichen überwachen.",
            kurzbeschreibungB1:
              "Raus aus der Hitze an einen kühlen Ort. Kleidung öffnen, feuchte Tücher, kühle Getränke. Passend lagern und die Vitalzeichen überwachen.",
          },
          {
            patientName: "Unterkühlung",
            hauptfaktor: "Hypothermie",
            kurzbeschreibung:
              "Langsam passiv wärmen (Decken, warme Getränke). KEINE heiße Wärmflasche/Wärmestrahler — sie senken den Blutdruck.",
            kurzbeschreibungB1:
              "Langsam und passiv wärmen, mit Decken und warmen Getränken. KEINE heiße Wärmflasche und keinen Wärmestrahler. Sie senken den Blutdruck.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Verätzung der Haut, etwas Ätzendes geschluckt, Hitzschlag, Unterkühlung — was ist jeweils die erste Reaktion?",
          rueckseite:
            "Verätzung Haut: Kleider weg + fließend Wasser spülen. Verätzung Mund: kleine Schlucke (ca. 200 ml), NIE Erbrechen auslösen. Hitzschlag: aus der Hitze, kühlen, lagern, Vitalzeichen. Unterkühlung: langsam passiv wärmen — KEINE heiße Wärmflasche/Wärmestrahler (Blutdruckabfall).",
          vorderseiteB1:
            "Ätzendes auf der Haut, Ätzendes geschluckt, Hitzschlag, Unterkühlung — was ist jeweils die erste Reaktion?",
          rueckseiteB1:
            "Ätzendes auf der Haut: Kleider weg und mit fließendem Wasser spülen. Ätzendes geschluckt: kleine Schlucke (etwa 200 ml), NIE Erbrechen auslösen. Hitzschlag: raus aus der Hitze, kühlen, lagern, Vitalzeichen überwachen. Unterkühlung: langsam und passiv wärmen. KEINE heiße Wärmflasche oder Wärmestrahler, denn der Blutdruck fällt ab.",
        },
      },
    },
    {
      // Anwendung 1 (Variante D): Verätzung-Mund-Transfer. Gegroundet F-09.
      stepId: "ce06-sander-ref-00c-veraetzung",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["I care Pflege 2025 (Verätzung: schluckweise Wasser/Tee, keine Milch)", "Pflege heute 2019, Kap. 14.6.5 (Verätzung Mund/Speiseröhre: nie Erbrechen)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-sander-veraetzung-transfer",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-09"],
      contentC1: {
        title: "Anderer Fall — verschluckter Rohrreiniger",
        body: "In einer anderen Wohnung hat ein verwirrter Bewohner einen Schluck flüssigen Rohrreiniger getrunken (eine starke Lauge). Er hustet, hält sich den Mund. Was tust du?",
        glossarBegriffe: ["Verätzung", "Lauge"],
      },
      contentB1: {
        title: "Anderer Fall — Rohrreiniger geschluckt",
        body: "Ein verwirrter Bewohner hat einen Schluck Rohrreiniger (eine starke Lauge) getrunken. Was tust du?",
      },
      question: {
        fragetext: "Wie handelst du bei der Mund-/Speiseröhren-Verätzung?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ich gebe ihm kleine Schlucke Wasser oder Tee (etwa 200 ml, nicht mehr) zu trinken, löse auf KEINEN Fall Erbrechen aus und alarmiere sofort Arzt/Giftnotruf.",
            isCorrect: true,
            explanation:
              "Richtig. Bei Verätzung von Mund und Speiseröhre gibt man in kleinen Schlucken etwas zu trinken (Leitungswasser oder Tee, keine Milch), etwa 200 ml — nicht mehr, sonst droht Erbrechen. Erbrechen wird NIEMALS ausgelöst: Die ätzende Flüssigkeit würde die Schleimhäute, vor allem die Speiseröhre, ein zweites Mal schädigen. Parallel sofort ärztliche Hilfe/Giftnotruf.",
            explanationB1:
              "Richtig. Kleine Schlucke Wasser oder Tee (ca. 200 ml, nicht mehr; keine Milch). Niemals Erbrechen auslösen — das verätzt die Speiseröhre noch einmal. Sofort Arzt/Giftnotruf.",
          },
          {
            text: "Ich stecke ihm den Finger in den Hals, damit er das Gift schnell wieder auswürgt.",
            isCorrect: false,
            explanation:
              "Gefährlich falsch. Bei einer Verätzung darf niemals Erbrechen ausgelöst werden — die ätzende Substanz läuft dann ein zweites Mal durch die Speiseröhre und verschlimmert die Schädigung massiv. Richtig ist: kleine Schlucke Wasser oder Tee, kein Erbrechen, sofort Arzt/Giftnotruf.",
            explanationB1:
              "Gefährlich falsch. Bei Verätzung niemals Erbrechen auslösen — das Gift verätzt die Speiseröhre dann noch einmal. Richtig: kleine Schlucke, kein Erbrechen, sofort Arzt.",
          },
          {
            text: "Ich lasse ihn schnell einen ganzen Liter Wasser hinuntertrinken, damit das Gift verdünnt wird.",
            isCorrect: false,
            explanation:
              "Nein. Große Trinkmengen auf einmal lösen leicht Erbrechen aus — und genau das muss vermieden werden. Man gibt nur kleine Schlucke (etwa 200 ml), um zu verdünnen, ohne Erbrechen zu provozieren. Dann sofort ärztliche Hilfe/Giftnotruf.",
            explanationB1:
              "Nein. Viel Wasser auf einmal löst leicht Erbrechen aus — das muss verhindert werden. Nur kleine Schlucke (ca. 200 ml), dann sofort Arzt/Giftnotruf.",
          },
        ],
      },
    },
    {
      // Anwendung 2 (Variante D): Hypothermie-Transfer. Gegroundet F-13.
      stepId: "ce06-sander-ref-00d-hitze-kaelte",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 5.4 (Hypothermie: passiv wärmen; Wärmflasche/Wärmestrahler kontraindiziert)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-sander-hypothermie-transfer",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      kernfaktId: ["F-12", "F-13"],
      contentC1: {
        title: "Und noch ein Fall — der unterkühlte Patient",
        body: "Ein älterer Mann wird deutlich unterkühlt (Körpertemperatur 32 °C) hereingebracht. Deine Kollegin will ihm sofort eine heiße Wärmflasche unter die Achseln legen. Wie reagierst du?",
        glossarBegriffe: ["Hypothermie", "Wärmflasche"],
      },
      contentB1: {
        title: "Und noch ein Fall — unterkühlt",
        body: "Ein älterer Mann ist deutlich unterkühlt (32 °C). Deine Kollegin will ihm sofort eine heiße Wärmflasche unter die Achseln legen. Wie reagierst du?",
      },
      question: {
        fragetext: "Wie wärmst du den unterkühlten Patienten?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ich halte sie auf: keine heiße Wärmflasche. Er wird langsam und passiv gewärmt — Decken, warme Getränke, warmer Raum — und engmaschig überwacht.",
            isCorrect: true,
            explanation:
              "Richtig. Bei Unterkühlung (unter 35 °C, ab unter 30 °C lebensbedrohlich) wird passiv und langsam wiedererwärmt (Decken, warme Getränke, Raumtemperatur erhöhen), maximal etwa 1 °C pro Stunde. Aktives Erwärmen mit heißer Wärmflasche oder Wärmestrahler ist kontraindiziert: Es weitet die oberflächlichen Gefäße und lässt den Blutdruck abfallen — der Kreislauf kann kollabieren.",
            explanationB1:
              "Richtig. Bei Unterkühlung langsam und passiv wärmen (Decken, warme Getränke, warmer Raum). Keine heiße Wärmflasche/Wärmestrahler — die weiten die Gefäße und der Blutdruck fällt ab.",
          },
          {
            text: "Gute Idee — je schneller und heißer, desto besser: heiße Wärmflasche und dazu ein heißes Vollbad.",
            isCorrect: false,
            explanation:
              "Falsch und gefährlich. Schnelles, aktives Erwärmen von außen (heiße Wärmflasche, heißes Bad) weitet die oberflächlichen Gefäße schlagartig; der Blutdruck fällt ab, der Kreislauf kann zusammenbrechen. Bei Hypothermie wird langsam und passiv gewärmt, nicht schnell und heiß.",
            explanationB1:
              "Falsch und gefährlich. Schnelles heißes Wärmen (Wärmflasche, heißes Bad) lässt den Blutdruck abfallen — der Kreislauf kann zusammenbrechen. Bei Unterkühlung langsam und passiv wärmen.",
          },
          {
            text: "Ich lasse ihn einfach in Ruhe liegen — Unterkühlung reguliert der Körper mit der Zeit von selbst.",
            isCorrect: false,
            explanation:
              "Nein. Eine ausgeprägte Unterkühlung (hier 32 °C) reguliert sich nicht von allein und ist gefährlich (ab unter 30 °C akute Lebensgefahr). Der Patient muss aktiv, aber schonend wiedererwärmt (passiv, langsam) und überwacht werden; stark unterkühlte Patienten mit Bewusstseins-/Kreislaufstörungen gehören intensivmedizinisch versorgt.",
            explanationB1:
              "Nein. Eine starke Unterkühlung (32 °C) reguliert sich nicht von selbst und ist gefährlich. Er muss langsam gewärmt und überwacht werden.",
          },
        ],
      },
    },
    {
      stepId: "ce06-sander-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 14.6.5 (Hausmittel-Mythen); Wärmeanwendungen/Temperaturempfinden (Prophylaxe)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-sander-reflexion",
      tag: "pflege",
      themaPrimaer: "thermisch-chemische-notfaelle",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Zwischen richtiger Erstversorgung, hartnäckigen Hausmittel-Mythen, Prävention und der eigenen Rolle im ambulanten Alleingang — reflektiere die Situation.",
        glossarBegriffe: ["Hausmittel-Mythos", "Prävention", "Wärmeanwendung"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Richtige Erstversorgung, Hausmittel-Mythen, Vorbeugung und deine Rolle allein im ambulanten Dienst — denke über die Situation nach.",
        glossarBegriffe: ["Prävention"],
      },
      question: {
        fragetext: "Reflektiere die Situation und deine Konsequenzen.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Welche zwei bis drei Erstmaßnahmen bei einer Verbrühung waren richtig, und welchen verbreiteten Hausmittel-Fehler hast du verhindert (und warum ist er schädlich)? 2) Warum ist der Schmerz kein guter Maßstab für die Schwere einer Verbrennung? 3) Welche Prävention ziehst du für alte, allein lebende Menschen mit Wärmequellen/heißem Wasser (z.B. Wasserkocher, Wärmflaschen bei vermindertem Temperaturempfinden)? 4) Wie gehst du damit um, solche Situationen im ambulanten Dienst allein bewältigen zu müssen?",
          placeholder:
            "Richtig waren … Den Hausmittel-Fehler … habe ich verhindert, weil … Der Schmerz ist kein Maßstab, weil … Zur Prävention würde ich … Mit dem Alleinsein im ambulanten Dienst gehe ich so um …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Nennt der Schüler richtige Erstmaßnahmen (kurz mit lauwarmem Wasser kühlen, steril abdecken, Wärmeerhalt) und erkennt den Hausmittel-Fehler (Mehl/Butter/Salben gehören NICHT auf die Brandwunde: halten Hitze, verkleben, Infektionsgefahr) sowie „Blasen nicht öffnen“? Versteht er, dass Schmerz kein Schwere-Maßstab ist (tiefe Verbrennungen zerstören die Schmerzfühler)? Zieht er eine konkrete Präventionsidee für allein lebende alte Menschen (sichere Wasserkocher/Herd, Vorsicht mit Wärmflaschen bei vermindertem Temperaturempfinden)? Reflektiert er die eigene Rolle/Belastung im ambulanten Alleingang? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 9,
};
