// CE-06 Situation „Herr Gruber — hypovolämischer Schock bei oberer GI-Blutung"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt LE2: W1 (Anteile/Funktion Herz-Kreislaufsystem), W2 (Schockursachen/Schocksysteme),
//        W3 (Notfallmedikamente/Schock, Reizleitung, Elektrolyte, Infusion/Perfusor, O2-Gabe),
//        K1 (Vitalzeichen mit intensivmed. Geräten/Monitor), K2 (Material PVK/ZVK),
//        K4 (familiäres Coping), E1 (apparate-/gerätedominierter intensivmed. Kontext).
// Grounding: specs/ce-06/kernfakten/schock-und-kreislauf.md + notfallassessment.md (verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 14.5/3.5/33.10.3; I care Anatomie Kap. 6/7.
//
// KRITISCH GEBAUT:
//  - Autotransfusionslage (Beine hoch) bei hypovolämem Schock — ABER Ausnahme obere GI-Blutung (F-06).
//    Das ist die zentrale Falle: der „richtig klingende" Volumenmangel-Reflex ist hier falsch.
//  - Katecholamine/Perfusor + Infusionsgeschwindigkeit NUR auf Arztanordnung (F-06/F-07), als Wirkstoff.
//    „Adrenalin/Noradrenalin" nur als körpereigene Stresshormone (Zentralisation), keine Med-Dosen.
//  - i.v.-Kalium langsam, hohe Konzentration nur über ZVK (F-10) — Bolus-Distraktor ist gefährlich (falsch).
//  - Patient bleibt nüchtern (obere GI-Blutung) — orale Gaben als Distraktoren.
//  - MC-Optionen vergleichbar lang (Begründung in explanation, nicht im Optionstext).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_GRUBER_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-gruber-erkennen",
  phase: "erkennen",
  titel: "„Ist bestimmt nur der Magen“",
  titelB1: "„Ist bestimmt nur der Magen“",
  kontext:
    "18:20 Uhr, das Abendessen läuft. Aus Zimmer 12 hörst du ein Würgen. Herr Gruber hat sich über die Bettkante erbrochen — kaffeesatzartiges, teils frisches Blut auf dem Tablett. Er ist blass, die Stirn feuchtkalt, er wirkt unruhig. Seine Frau Renate sitzt daneben und ist wie erstarrt. \"Ist bestimmt nur der Magen\", murmelt er, \"machen Sie sich keine Umstände.\"",
  kontextB1:
    "18:20 Uhr. Aus Zimmer 12 hörst du ein Würgen. Herr Gruber hat Blut erbrochen — dunkles und frisches Blut auf dem Tablett. Er ist blass, die Stirn ist feuchtkalt, er ist unruhig. Seine Frau Renate sitzt daneben und ist starr vor Schreck. \"Ist bestimmt nur der Magen\", sagt er leise.",
  kernSteps: [
    {
      stepId: "ce06-gruber-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "I care Anatomie, Kap. 6/7 (Herz als Blutpumpe, Herzzeitvolumen)",
        "Pflege heute 2019, Kap. 14.5.2 (Kreislaufzentralisation)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-kreislauf-verstehen",
      tag: "anatomie",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-08", "F-05"],
      contentC1: {
        title: "Warum wird er blass?",
        body: "Herr Gruber verliert Blut. Um zu verstehen, warum er blass und feuchtkalt wird, hilft ein Blick auf das Herz-Kreislaufsystem. Was passiert gerade in seinem Kreislauf?",
        glossarBegriffe: ["Herzzeitvolumen", "Körperkreislauf", "Zentralisation"],
      },
      contentB1: {
        title: "Warum wird er blass?",
        body: "Herr Gruber verliert Blut. Warum wird er blass und die Haut feuchtkalt? Ein Blick auf das Herz und den Kreislauf hilft. Was passiert gerade?",
        glossarBegriffe: ["Herzzeitvolumen (= Blutmenge pro Minute)", "Zentralisation"],
      },
      question: {
        fragetext: "Was geschieht bei starkem Blutverlust im Kreislauf?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Weniger Blut kehrt zum Herzen zurück, das Herzzeitvolumen sinkt und der Blutdruck fällt — der Körper zentralisiert das Blut zu Herz und Gehirn.",
            isCorrect: true,
            explanation:
              "Richtig. Das Herz ist die zentrale Pumpe: Es fördert das Blut über den Lungen- in den Körperkreislauf (Herzzeitvolumen in Ruhe ca. 5 l/min). Fehlt Volumen, kommt weniger Blut zurück, das Herzzeitvolumen und der Blutdruck sinken. Als Gegenmaßnahme schüttet der Körper Adrenalin und Noradrenalin aus, die die Gefäße in Haut und Muskulatur eng stellen (Vasokonstriktion) — das Blut wird zu Herz und Gehirn zentralisiert. Daher die blasse, feuchtkalte Haut.",
            explanationB1:
              "Richtig. Das Herz ist die Pumpe für den ganzen Körper. Fehlt Blut, kommt weniger zum Herzen zurück, die Pumpmenge und der Blutdruck fallen. Der Körper stellt die Gefäße in Haut und Muskeln eng, um Herz und Gehirn zu schützen. Darum ist die Haut blass und feuchtkalt.",
          },
          {
            text: "Solange das Herz kräftig weiterschlägt, ist der Blutverlust für den Blutdruck unwichtig — der Kreislauf gleicht die fehlende Menge von selbst wieder aus.",
            isCorrect: false,
            explanation:
              "Falsch. Das Herz kann nur pumpen, was zurückfließt. Sinkt das Blutvolumen, sinkt der venöse Rückstrom, damit das Herzzeitvolumen und der Blutdruck — genau das ist der Mechanismus des hypovolämischen Schocks. Die Blutmenge im Kreislauf ist für den Blutdruck entscheidend.",
            explanationB1:
              "Falsch. Das Herz kann nur pumpen, was zurückkommt. Fehlt Blut, fällt der Blutdruck. Die Menge im Kreislauf ist wichtig.",
          },
          {
            text: "Der Körper stellt alle Gefäße weit, damit das restliche Blut sich gleichmäßig auf Haut und Muskeln verteilt.",
            isCorrect: false,
            explanation:
              "Falsch — genau umgekehrt. Bei Blutverlust verengt der Körper die Gefäße in nicht lebenswichtigen Bereichen (Haut, Muskeln), um das Blut zu Herz und Gehirn umzuverteilen (Zentralisation). Eine Weitstellung aller Gefäße würde den Blutdruck weiter senken.",
            explanationB1:
              "Falsch. Der Körper stellt die Gefäße in Haut und Muskeln eng, nicht weit. So schützt er Herz und Gehirn.",
          },
        ],
      },
    },
    {
      stepId: "ce06-gruber-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.5 (Schockformen, Leitsymptome, Schockindex)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-schockform",
      tag: "krankheitslehre",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-02", "F-03"],
      contentC1: {
        title: "Welche Schockform droht?",
        body: "Puls 108/min und schwach tastbar, Blutdruck 100/70 (sonst hyperton), Haut kalt-blass mit feinem Schweiß, Herr Gruber wird unruhig. Ordne die Situation ein.",
        glossarBegriffe: ["hypovolämischer Schock", "Schockindex", "Leitsymptome"],
      },
      contentB1: {
        title: "Welche Schockform droht?",
        body: "Puls 108 und schwach, Blutdruck 100/70 (sonst hoch), Haut kalt-blass mit Schweiß, er wird unruhig. Was ist das?",
        glossarBegriffe: ["hypovolämischer Schock (= Schock durch Blut-/Flüssigkeitsmangel)"],
      },
      question: {
        fragetext: "Wie schätzt du die Situation ein?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ein beginnender hypovolämischer Schock durch den Blutverlust — schwacher schneller Puls, fallender Blutdruck, kalt-blasse Haut und Unruhe sind die Leitsymptome.",
            isCorrect: true,
            explanation:
              "Richtig. Bei starker Blutung entsteht ein hypovolämischer Schock (Volumenmangelschock). Die Leitsymptome sind genau das, was du siehst: ein schneller (über 100/min), schwächer werdender Puls, ein sinkender systolischer Blutdruck, kalte blasse Haut mit feinperligem Schweiß, Unruhe. Sein 'normaler' Blutdruck ist hyperton — 100/70 ist für ihn schon ein Abfall. Der Schockindex (Puls geteilt durch systolischen Blutdruck) steigt über den Normwert von etwa 0,5 in Richtung 1.",
            explanationB1:
              "Richtig. Durch den Blutverlust entsteht ein Schock durch Volumenmangel. Die Zeichen: schneller, schwacher Puls, fallender Blutdruck, kalte blasse Haut mit Schweiß, Unruhe. Sein Blutdruck ist normal sehr hoch — 100/70 ist für ihn schon zu niedrig.",
          },
          {
            text: "Ein kardiogener Schock — das Herz selbst pumpt zu schwach, deshalb der schnelle Puls und die blasse Haut.",
            isCorrect: false,
            explanation:
              "Falsch. Der kardiogene Schock entsteht durch ein Pumpversagen des Herzens (z. B. Herzinfarkt). Hier ist die Ursache klar der Blutverlust — also ein hypovolämischer Schock. Die Unterscheidung ist wichtig, weil sich Lagerung und Therapie unterscheiden.",
            explanationB1:
              "Falsch. Der kardiogene Schock kommt vom schwachen Herzen. Hier ist die Ursache der Blutverlust. Das ist ein Schock durch Volumenmangel.",
          },
          {
            text: "Noch kein Schock — die Werte sind grenzwertig, ich beobachte erst einmal weiter und kontrolliere beim nächsten Rundgang in Ruhe erneut.",
            isCorrect: false,
            explanation:
              "Gefährlich. Ein schwacher schneller Puls plus fallender Blutdruck plus kalt-blasse Haut bei sichtbarem Blutverlust ist ein beginnender Schock — kein Fall für stündliches Abwarten. Der hypovolämische Schock kann sich rasch verselbstständigen (Teufelskreis). Jetzt handeln und engmaschig überwachen.",
            explanationB1:
              "Gefährlich. Schwacher schneller Puls, fallender Blutdruck und blasse Haut bei Blutverlust sind ein Schock. Nicht eine Stunde warten. Jetzt handeln und engmaschig messen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 9,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_GRUBER_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-gruber-alarmieren",
  phase: "alarmieren",
  titel: "Blut im Erbrochenen — jetzt zählt Tempo",
  titelB1: "Jetzt zählt Tempo",
  kontext:
    "Herr Gruber blutet, der Kreislauf kippt. Renate schaut dich mit großen Augen an. Du musst schnell Hilfe organisieren — und trotzdem bei den beiden bleiben.",
  kontextB1:
    "Herr Gruber blutet, der Kreislauf wird schlechter. Renate schaut dich an. Du musst schnell Hilfe holen — und bei den beiden bleiben.",
  kernSteps: [
    {
      stepId: "ce06-gruber-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.5.1 (Erstmaßnahmen: Arzt, Zugänge, Monitoring, Intensivverlegung)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-alarmieren",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-04"],
      contentC1: {
        title: "Wie handelst du jetzt?",
        body: "Verdacht auf obere gastrointestinale Blutung mit beginnendem Schock. Was ist die richtige Reaktion?",
        glossarBegriffe: ["obere GI-Blutung", "Notfallteam", "Intensivstation"],
      },
      contentB1: {
        title: "Wie handelst du jetzt?",
        body: "Verdacht auf eine Blutung im Magen mit beginnendem Schock. Was tust du zuerst?",
        glossarBegriffe: ["Intensivstation"],
      },
      question: {
        fragetext: "Was ist jetzt richtig?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Sofort den Arzt informieren, eine weitere Pflegekraft dazuholen, bei Herrn Gruber bleiben und die Verlegung auf die Intensiv-/IMC-Station vorbereiten.",
            isCorrect: true,
            explanation:
              "Richtig. Beim schockverdächtigen Notfall wird sofort der Arzt informiert und eine weitere Pflegekraft hinzugezogen — allein bekommst du Überwachung, Zugänge und Betreuung nicht gleichzeitig hin. Du bleibst bei Herrn Gruber, überwachst engmaschig und bereitest die möglichst rasche Verlegung auf die Intensivstation vor. Renate wird dabei nicht vergessen: eine kurze, klare Ansage gibt ihr Halt.",
            explanationB1:
              "Richtig. Bei diesem Notfall informierst du sofort den Arzt und holst eine weitere Pflegekraft. Du bleibst bei Herrn Gruber, überwachst engmaschig und bereitest die Verlegung auf die Intensivstation vor. Sag auch Renate kurz und klar, was passiert.",
          },
          {
            text: "Erst das Erbrochene wegräumen und ihm ein frisches Hemd anziehen, damit es für Renate nicht so schlimm aussieht, danach den Arzt rufen.",
            isCorrect: false,
            explanation:
              "Falsch priorisiert. Aufräumen und Umziehen dürfen die Alarmierung nicht verzögern — beim Schock zählt jede Minute. Zuerst wird der Arzt informiert und die Überwachung gesichert; die Umgebung wird nebenbei bzw. durch eine zweite Person versorgt.",
            explanationB1:
              "Falsch. Aufräumen und Umziehen dürfen den Notruf nicht verzögern. Beim Schock zählt jede Minute. Erst den Arzt rufen und überwachen.",
          },
          {
            text: "Zuerst allein in Ruhe alle Vitalwerte vollständig aufschreiben und dann entscheiden, ob der Arzt gerufen werden muss.",
            isCorrect: false,
            explanation:
              "Zu langsam. Eine schockverdächtige Blutung ist bereits jetzt ein Grund, den Arzt zu alarmieren — die Dokumentation läuft parallel, sie ersetzt nicht das sofortige Handeln. Wer erst 'fertig dokumentiert', verliert wertvolle Zeit.",
            explanationB1:
              "Zu langsam. Die Blutung ist schon jetzt ein Grund, den Arzt zu rufen. Dokumentieren läuft nebenbei. Nicht erst alles aufschreiben.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN
export const CE06_SIT_GRUBER_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-gruber-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Lagern, Zugänge, Sauerstoff — und die Falle",
  titelB1: "Lagern, Zugänge, Sauerstoff",
  kontext:
    "Der Arzt ist alarmiert und auf dem Weg, eine Kollegin kommt dazu. Jetzt zählt die richtige Erstversorgung — und die erste Frage ist die Lagerung.",
  kontextB1:
    "Der Arzt kommt gleich, eine Kollegin hilft. Jetzt zählt die richtige Erstversorgung. Die erste Frage: Wie lagerst du ihn?",
  kernSteps: [
    {
      stepId: "ce06-gruber-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.5.1/14.5.2 (Autotransfusionslage, Ausnahme obere GI-Blutung)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-lagerung-falle",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-06", "F-04"],
      contentC1: {
        title: "Wie lagerst du ihn?",
        body: "Hypovolämischer Schock, Herr Gruber ist noch bei Bewusstsein. Aus dem Unterricht klingt die Autotransfusionslage (flach, Beine hoch) naheliegend. Ist das hier richtig?",
        glossarBegriffe: ["Autotransfusionslage", "obere GI-Blutung", "Aspiration"],
      },
      contentB1: {
        title: "Wie lagerst du ihn?",
        body: "Schock durch Blutverlust, er ist noch wach. Die Autotransfusionslage (flach, Beine hoch) klingt naheliegend. Ist das hier richtig?",
        glossarBegriffe: ["Autotransfusionslage (= flach, Beine hoch)", "Aspiration (= Verschlucken)"],
      },
      question: {
        fragetext: "Welche Lagerung ist bei Herrn Gruber richtig?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Keine Beine-hoch-Lagerung — bei einer oberen GI-Blutung flach bzw. nach seinem Wunsch lagern und den Kopf bei Erbrechen zur Seite.",
            isCorrect: true,
            explanation:
              "Richtig — und das ist die Falle. Die Autotransfusionslage (Beine hoch) hilft beim hypovolämischen Schock, das Blut aus den Beinvenen in den Kreislauf zu bringen. Aber sie ist ausdrücklich ausgenommen bei Blutungen an Kopf, Lunge und oberem Magen-Darm-Trakt. Herr Gruber blutet aus dem oberen GI-Trakt und erbricht — Beine hoch würde nicht helfen, und die Kopftieflage erhöht die Aspirationsgefahr. Deshalb: flach bzw. nach Wunsch, bei Erbrechen den Kopf zur Seite, Sauerstoff und venöse Zugänge parallel vorbereiten.",
            explanationB1:
              "Richtig — und das ist die Falle. Die Beine-hoch-Lagerung hilft bei Schock durch Volumenmangel. Aber NICHT bei Blutungen an Kopf, Lunge oder Magen-Darm-Trakt. Herr Gruber blutet aus dem Magen und erbricht. Beine hoch hilft nicht, und der tiefe Kopf erhöht die Gefahr des Verschluckens. Also: flach oder nach Wunsch, Kopf beim Erbrechen zur Seite.",
          },
          {
            text: "Autotransfusionslage: flach hinlegen und beide Beine hochlagern, damit das in den Beinvenen gespeicherte Blut zurück in den Kreislauf fließt und den Blutdruck stützt.",
            isCorrect: false,
            explanation:
              "Falsch — hier die klassische Falle. Die Regel 'Beine hoch bei Volumenmangel' stimmt grundsätzlich, ist aber ausdrücklich ausgenommen bei Blutungen an Kopf, Lunge und oberem Magen-Darm-Trakt. Bei Herrn Grubers oberer GI-Blutung mit Erbrechen erhöht die Kopftieflage die Aspirationsgefahr und bringt keinen Vorteil. Fachwissen heißt hier: die Ausnahme kennen.",
            explanationB1:
              "Falsch — die Falle. 'Beine hoch bei Volumenmangel' stimmt oft. Aber NICHT bei Blutung im Magen-Darm-Trakt. Herr Gruber erbricht Blut — der tiefe Kopf erhöht die Gefahr des Verschluckens.",
          },
          {
            text: "Den Oberkörper stark aufrichten und ihn zum Aufstehen bewegen, damit ihm nicht mehr übel wird.",
            isCorrect: false,
            explanation:
              "Falsch. Im Schock darf jede Anstrengung vermieden werden, Aufstehen kann den Kreislauf vollends zum Kollaps bringen. Bei der oberen GI-Blutung wird flach bzw. nach Wunsch gelagert, der Kopf bei Erbrechen zur Seite — nicht aufgesetzt und schon gar nicht mobilisiert.",
            explanationB1:
              "Falsch. Im Schock darf er sich nicht anstrengen. Aufstehen kann den Kreislauf zum Zusammenbruch bringen. Er bleibt liegen, der Kopf beim Erbrechen zur Seite.",
          },
        ],
      },
    },
    {
      stepId: "ce06-gruber-erm-02",
      phase: 3,
      stepType: "pflegewagen",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.1/14.5.2 (Material venöser Zugang, Notfallausstattung, Volumenersatz)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-gruber-material-zugang",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-12", "F-06"],
      contentC1: {
        title: "Material für die venösen Zugänge richten",
        body: "Der Arzt will großlumige Zugänge legen und Volumen geben. Richte das Material — und denke daran: Herr Gruber muss nüchtern bleiben (GI-Blutung, mögliche Endoskopie/OP).",
        glossarBegriffe: ["Venenverweilkanüle", "ZVK", "Ringer-Lösung", "Kreuzblut"],
      },
      contentB1: {
        title: "Material für die Zugänge richten",
        body: "Der Arzt will große Zugänge legen und Flüssigkeit geben. Richte das Material. Wichtig: Herr Gruber darf nichts essen oder trinken (Magen-Blutung, evtl. Untersuchung/OP).",
        glossarBegriffe: ["Venenverweilkanüle (= Zugang in die Vene)", "ZVK (= zentraler Zugang)"],
      },
      question: {
        fragetext: "Welches Material gehört zur Vorbereitung? Tippe ein Material an, dann den passenden Bereich.",
        pflegewagen: {
          fragetext: "Welches Material gehört zur Vorbereitung? Tippe ein Material an, dann den passenden Bereich.",
          fragetextB1: "Was brauchst du? Tippe ein Material an. Dann tippe auf den richtigen Bereich.",
          zonen: [
            {
              id: "richten",
              label: "Für Zugänge & Volumen richten",
              labelB1: "Auf den Wagen",
              beschreibung: "Was der Arzt jetzt braucht",
              beschreibungB1: "Was jetzt gebraucht wird",
              variant: "primary",
            },
            {
              id: "weglegen",
              label: "Jetzt nicht / kontraindiziert",
              labelB1: "Brauche ich nicht",
              beschreibung: "Gehört jetzt nicht dazu",
              beschreibungB1: "Nicht für jetzt",
              variant: "discard",
            },
          ],
          items: [
            {
              id: "stauschlauch",
              label: "Stauschlauch, Spritzen und Kanülen",
              labelB1: "Stauschlauch, Spritzen, Kanülen",
              icon: "Syringe",
              korrekteZoneId: "richten",
              erklaerung:
                "Grundausstattung zum Legen eines venösen Zugangs — Stauschlauch, Spritzen und Kanülen gehören auf den Wagen.",
              erklaerungB1: "Das braucht man, um einen Zugang in die Vene zu legen.",
            },
            {
              id: "kanuelen-gross",
              label: "Mehrere großlumige Venenverweilkanülen",
              labelB1: "Große Venen-Kanülen",
              icon: "Droplets",
              korrekteZoneId: "richten",
              erklaerung:
                "Beim Volumenmangelschock werden baldmöglichst mehrere große venöse Zugänge gelegt — über großlumige Kanülen läuft Volumen schnell.",
              erklaerungB1: "Große Kanülen braucht man, damit die Flüssigkeit schnell laufen kann.",
            },
            {
              id: "ringer",
              label: "Ringer-/isotone Kochsalzlösung + Infusionsbesteck",
              labelB1: "Infusionslösung + Besteck",
              icon: "FlaskConical",
              korrekteZoneId: "richten",
              erklaerung:
                "Zum Volumenausgleich werden großzügig Infusionen gegeben, z. B. isotone Kochsalz- oder Ringer-Lösung — passendes Infusionsbesteck dazu.",
              erklaerungB1: "Die Flüssigkeit gleicht den Blutverlust aus. Das Besteck gehört dazu.",
            },
            {
              id: "kreuzblut",
              label: "Blutentnahmeröhrchen inkl. Kreuzblut/Blutgruppe",
              labelB1: "Blutröhrchen (auch für Blutgruppe)",
              icon: "TestTube",
              korrekteZoneId: "richten",
              erklaerung:
                "Bei Blutverlust können Erythrozytenkonzentrate nötig werden — dafür braucht es Blutgruppe und Kreuzblut. Röhrchen gleich mitrichten.",
              erklaerungB1: "Bei Blutverlust braucht man vielleicht Blutkonserven. Dafür bestimmt man die Blutgruppe.",
            },
            {
              id: "zvk-set",
              label: "ZVK-Set (für den Arzt bereitlegen)",
              labelB1: "ZVK-Set bereitlegen",
              icon: "Cable",
              korrekteZoneId: "richten",
              erklaerung:
                "Bei hohem Volumenbedarf legt der Arzt evtl. einen ZVK. Das Set wird bereitgelegt — gelegt wird er ärztlich, die Pflege assistiert.",
              erklaerungB1: "Bei viel Flüssigkeitsbedarf legt der Arzt vielleicht einen zentralen Zugang. Du legst das Set bereit.",
            },
            {
              id: "beinschiene",
              label: "Schaumstoffkeil zum Beine-Hochlagern",
              labelB1: "Keil, um die Beine hochzulegen",
              icon: "TrendingUp",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Falsch — und die Verbindung zur Lagerung: Bei einer oberen GI-Blutung ist die Beine-hoch-Lagerung (Autotransfusionslage) ausgenommen. Ein Keil zum Hochlagern der Beine ist hier also nicht angezeigt.",
              erklaerungB1:
                "Nein. Bei einer Blutung im Magen legt man die Beine NICHT hoch. Der Keil dafür wird jetzt nicht gebraucht.",
            },
            {
              id: "kalium-brause",
              label: "Kalium-Brausetablette zum Trinken",
              labelB1: "Kalium zum Trinken",
              icon: "Pill",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Falsch. Herr Gruber muss nüchtern bleiben (GI-Blutung, mögliche Endoskopie/OP) und erbricht — nichts oral geben. Kalium wird, wenn nötig, ärztlich intravenös und langsam ersetzt, nicht als Brausetablette.",
              erklaerungB1: "Nein. Herr Gruber darf nichts trinken (Magen-Blutung). Er erbricht. Kalium gibt der Arzt bei Bedarf über die Vene, nicht zum Trinken.",
            },
            {
              id: "abendessen",
              label: "Abendessen-Tablett ans Bett",
              labelB1: "Essen ans Bett",
              icon: "Utensils",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Falsch. Bei oberer GI-Blutung bleibt der Patient nüchtern — Essen und Trinken sind tabu, auch wegen einer möglichen Notfall-Endoskopie oder Operation.",
              erklaerungB1: "Nein. Bei einer Magen-Blutung darf er nichts essen. Vielleicht ist eine Untersuchung oder OP nötig.",
            },
          ],
          begruendung:
            "Beim hypovolämischen Schock zählt schneller Volumenzugang: Stauschlauch/Spritzen/Kanülen, mehrere großlumige Venenverweilkanülen, Ringer-/NaCl-Infusion mit Besteck, Blutröhrchen inkl. Kreuzblut und ein bereitgelegtes ZVK-Set. Nichts oral — Herr Gruber bleibt nüchtern.",
          begruendungB1:
            "Beim Schock durch Blutverlust zählt schneller Zugang zur Vene: Stauschlauch, Spritzen, Kanülen, große Venen-Kanülen, Infusionslösung mit Besteck, Blutröhrchen und ein ZVK-Set bereit. Nichts zum Essen oder Trinken — er bleibt nüchtern.",
        },
      },
    },
    {
      stepId: "ce06-gruber-erm-03",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 3.5/14.5.2 (Sauerstoffsysteme, O2 im Schock)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-sauerstoff",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-11", "F-06"],
      contentC1: {
        title: "Sauerstoff — welches System, welcher Fluss?",
        body: "Der Arzt ordnet Sauerstoff an. Herr Gruber hat einen hohen Sauerstoffbedarf im Schock. Welches System und welcher Fluss sind sinnvoll?",
        glossarBegriffe: ["Sauerstoffmaske", "Sauerstoffbrille", "Flussrate"],
      },
      contentB1: {
        title: "Sauerstoff — welches System?",
        body: "Der Arzt ordnet Sauerstoff an. Herr Gruber braucht im Schock viel Sauerstoff. Welches System und welcher Fluss passen?",
        glossarBegriffe: ["Sauerstoffmaske", "Flussrate (= wie viel Liter pro Minute)"],
      },
      question: {
        fragetext: "Welche Sauerstoffgabe passt?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Eine Sauerstoffmaske mit einem Fluss von 6–8 l/min nach Arztanordnung — der Fluss darf bei der Maske nicht unter 5 l/min sinken.",
            isCorrect: true,
            explanation:
              "Richtig. Im Schock ist der Sauerstoffbedarf hoch; die einfache Sauerstoffmaske ermöglicht eine höhere Dosierung von 5–10 l/min, im Schock werden häufig 6–8 l/min gegeben. Wichtig: Bei der Maske darf der Fluss nicht unter 5 l/min absinken, sonst droht ein CO2-Stau in der Maske. Die Gabe erfolgt auf ärztliche Anordnung.",
            explanationB1:
              "Richtig. Im Schock braucht er viel Sauerstoff. Die Maske gibt 5–10 l/min. Im Schock oft 6–8 l/min. Bei der Maske darf der Fluss nicht unter 5 l/min sinken, sonst staut sich CO2. Der Arzt ordnet es an.",
          },
          {
            text: "Eine Sauerstoffbrille mit 1 l/min genügt — das ist für den Anfang immer ausreichend.",
            isCorrect: false,
            explanation:
              "Zu wenig. Die Sauerstoffbrille liefert nur niedrige Konzentrationen und eignet sich für geringen Bedarf (z. B. Langzeittherapie). Im akuten Schock mit hohem Sauerstoffbedarf ist eine Maske mit höherem Fluss angezeigt — nach ärztlicher Anordnung.",
            explanationB1:
              "Zu wenig. Die Sauerstoffbrille gibt nur wenig Sauerstoff. Im Schock braucht er mehr — also eine Maske mit mehr Fluss.",
          },
          {
            text: "Eine Maske mit nur 3 l/min, damit sich der Sauerstoff nicht zu stark anstaut.",
            isCorrect: false,
            explanation:
              "Falsch — und genau verkehrt herum. Bei der Maske darf der Fluss gerade NICHT unter 5 l/min absinken, sonst staut sich die ausgeatmete Luft (CO2-Stau in der Maske). 3 l/min sind für eine Maske zu wenig.",
            explanationB1:
              "Falsch. Bei der Maske darf der Fluss NICHT unter 5 l/min sein, sonst staut sich CO2. 3 l/min sind zu wenig für eine Maske.",
          },
        ],
      },
    },
    {
      stepId: "ce06-gruber-erm-04",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.5.2/14.5.3 (Katecholamine/Perfusor auf Arztanordnung, Volumenersatz)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-gruber-notfallmed-arztanordnung",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-06", "F-12"],
      contentC1: {
        title: "Perfusor und Infusion — wer entscheidet?",
        body: "Der Kreislauf ist instabil. Bewerte zwei Aussagen zur Kreislaufunterstützung mit Perfusor und Infusion.",
        glossarBegriffe: ["Katecholamine", "Perfusor", "Arztanordnung"],
      },
      contentB1: {
        title: "Perfusor und Infusion — wer entscheidet?",
        body: "Der Kreislauf ist instabil. Bewerte zwei Aussagen zur Kreislaufunterstützung.",
        glossarBegriffe: ["Perfusor (= Spritzenpumpe)", "Arztanordnung (= der Arzt ordnet an)"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Ich stelle bei fallendem Blutdruck selbst schnell einen Katecholamin-Perfusor ein und drehe die Infusion voll auf — das beschleunigt die Hilfe.",
            isTrue: false,
            explanation:
              "Falsch. Kreislaufunterstützende Katecholamine (z. B. über Dopamin-/Dobutaminperfusor) und die Infusionsgeschwindigkeit werden nur auf ärztliche Anordnung eingestellt — nicht eigenmächtig. Eine falsch dosierte Katecholamingabe oder unkontrollierte Volumenzufuhr kann gefährlich sein. Deine Aufgabe: Material richten, assistieren, Perfusor/Infusion nach Anordnung bedienen, überwachen und dokumentieren.",
          },
          {
            statement:
              "Ich richte Perfusor, Infusomat und Ringer-/Kochsalzlösung her und stelle die verordnete Laufrate nach ärztlicher Anordnung ein.",
            isTrue: true,
            explanation:
              "Richtig. Die Pflege bereitet die Notfallausstattung vor — Perfusoren und Infusomaten mit passendem Infusionsmaterial, Trägerlösungen wie Ringer-Lösung — und setzt die ärztlich angeordnete Laufrate um. Vorbereiten, assistieren, exakt nach Anordnung dosieren und überwachen: genau das ist die pflegerische Rolle.",
          },
        ],
      },
    },
    {
      stepId: "ce06-gruber-erm-05",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.5.1 (Monitoring, Verschlechterung erkennen); Kap. 41 (Intensiv-Monitor)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-gruber-monitor-verschlechterung",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-03", "F-01"],
      contentC1: {
        title: "Der Monitor schlägt Alarm",
        body: "Herr Gruber ist jetzt am Überwachungsmonitor. Die Kurve zeigt: Puls steigt auf 132/min, der Blutdruck fällt auf 80/50 mmHg, die Sättigung sinkt, er wird zunehmend benommen. Was tust du?",
        glossarBegriffe: ["Überwachungsmonitor", "Dekompensation", "Vitalzeichen"],
      },
      contentB1: {
        title: "Der Monitor schlägt Alarm",
        body: "Herr Gruber ist am Monitor. Puls steigt auf 132, Blutdruck fällt auf 80/50, die Sättigung sinkt, er wird immer benommener. Was tust du?",
        glossarBegriffe: ["Überwachungsmonitor (= Gerät zeigt Puls, Blutdruck, Sättigung)"],
      },
      question: {
        fragetext: "Puls 132, RR 80/50, Sättigung fällt, zunehmend benommen — was tust du?",
        branchingOptions: [
          {
            text: "Das als akute Verschlechterung erkennen, sofort den Arzt rufen, Volumen/Transfusion nach Anordnung laufen lassen und engmaschig weiter überwachen.",
            isCorrect: true,
            feedback:
              "Genau richtig. Ein steigender Puls (132/min), fallender Blutdruck (80/50) und sinkende Sättigung mit zunehmender Benommenheit sind Zeichen der Dekompensation — der Schock schreitet fort. Der Monitor macht die Verschlechterung sichtbar, ersetzt aber nicht dein Handeln: sofort den Arzt informieren, die angeordnete Volumen-/Transfusionstherapie umsetzen, Bewusstsein/Atmung/Puls/Blutdruck engmaschig überwachen. Herr Gruber wird zügig weiterversorgt.",
            feedbackB1:
              "Genau richtig. Puls 132, Blutdruck 80/50, Sättigung fällt, er wird benommener — der Schock wird schlimmer. Der Monitor zeigt es, aber du musst handeln: sofort den Arzt rufen, die angeordnete Flüssigkeit/Blutkonserve laufen lassen, engmaschig überwachen.",
          },
          {
            text: "Den Monitor-Alarm stummschalten, damit Renate nicht erschrickt, und beim nächsten Rundgang wieder nach ihm sehen.",
            isCorrect: false,
            feedback:
              "Gefährlich. Der Alarm meldet eine echte, lebensbedrohliche Verschlechterung — ihn nur stummzuschalten und abzuwarten kostet Herrn Gruber wertvolle Zeit. Ein Monitor entbindet nie von der Reaktion. Richtig ist: Verschlechterung erkennen, Arzt sofort informieren, Therapie nach Anordnung, engmaschig überwachen. Renate beruhigst du mit einer klaren, ruhigen Ansage.",
            feedbackB1:
              "Gefährlich. Der Alarm zeigt eine echte, lebensbedrohliche Verschlechterung. Nur stumm schalten und warten kostet Zeit. Richtig: Arzt sofort rufen, Therapie nach Anordnung, engmaschig überwachen. Renate beruhigst du mit klaren Worten.",
          },
          {
            text: "Den Oberkörper stark hochstellen, weil der Puls so schnell ist — dann beruhigt sich das Herz von selbst.",
            isCorrect: false,
            feedback:
              "Falsch. Eine starke Oberkörperhochlagerung bei diesem niedrigen Blutdruck (80/50) verschärft die Minderdurchblutung des Gehirns — er würde noch benommener. Die Tachykardie ist hier die Gegenregulation auf den Blutverlust, kein eigenständiges Herzproblem. Entscheidend sind Arzt alarmieren, Volumen nach Anordnung und engmaschige Überwachung.",
            feedbackB1:
              "Falsch. Den Oberkörper stark hoch zu stellen ist bei so niedrigem Blutdruck (80/50) gefährlich — er wird noch benommener. Der schnelle Puls ist die Antwort auf den Blutverlust. Wichtig: Arzt rufen, Flüssigkeit nach Anordnung, überwachen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-gruber-erm-06",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "I care Anatomie, Kap. 6.6 (Reizleitungssystem, Sinusknoten)",
        "Pflege heute 2019, Kap. 33.10.3 (Kalium, Herzrhythmus, i.v.-Gabe)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-elektrolyte-rhythmus",
      tag: "krankheitslehre",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-09", "F-10"],
      contentC1: {
        title: "Kalium, Rhythmus und der Taktgeber",
        body: "Im Notfalllabor zeigt sich ein niedriger Kaliumwert. Der Arzt ordnet einen Kaliumausgleich an. Warum ist das fürs Herz wichtig — und wie wird i.v.-Kalium sicher gegeben?",
        glossarBegriffe: ["Sinusknoten", "Reizleitungssystem", "Hypokaliämie", "ZVK"],
      },
      contentB1: {
        title: "Kalium und der Herzrhythmus",
        body: "Das Labor zeigt einen niedrigen Kaliumwert. Der Arzt will Kalium ausgleichen. Warum ist das fürs Herz wichtig — und wie gibt man Kalium sicher in die Vene?",
        glossarBegriffe: ["Sinusknoten (= Taktgeber des Herzens)", "ZVK (= zentraler Zugang)"],
      },
      question: {
        fragetext: "Was stimmt zu Kalium und Herzrhythmus?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Kalium ist entscheidend für den Herzrhythmus — Über- wie Unterversorgung lösen Rhythmusstörungen aus; i.v.-Kalium wird langsam gegeben, hohe Konzentrationen nur über einen ZVK.",
            isCorrect: true,
            explanation:
              "Richtig. Der Herzrhythmus entsteht im Sinusknoten (dem Taktgeber) und läuft über AV-Knoten, His-Bündel, Tawara-Schenkel und Purkinje-Fasern zum Kammermyokard. Kaliumstörungen greifen direkt in dieses System ein: sowohl die Hyperkaliämie als auch die Hypokaliämie können Herzrhythmusstörungen bis zum Herzstillstand auslösen. Deshalb wird i.v.-Kalium wegen der Gefahr lebensbedrohlicher Rhythmusstörungen langsam gegeben; Konzentrationen über 40 mmol/l dürfen nur über einen ZVK laufen (Kalium reizt die Venenwand).",
            explanationB1:
              "Richtig. Der Herzschlag beginnt im Sinusknoten, dem Taktgeber. Zu viel oder zu wenig Kalium stört den Rhythmus — bis zum Herzstillstand. Darum gibt man Kalium über die Vene nur langsam. Hohe Konzentrationen laufen nur über einen ZVK, weil Kalium die Venenwand reizt.",
          },
          {
            text: "Kalium hat mit dem Herzrhythmus wenig zu tun — man kann es zur Not schnell als Bolus über die periphere Kanüle spritzen.",
            isCorrect: false,
            explanation:
              "Gefährlich falsch. Kalium ist zentral für den Herzrhythmus, und eine zu schnelle i.v.-Gabe kann tödliche Herzrhythmusstörungen auslösen. Deshalb wird es nur langsam über eine Infusionspumpe/einen Perfusor gegeben, hohe Konzentrationen ausschließlich über einen ZVK — niemals als schneller Bolus über eine periphere Kanüle.",
            explanationB1:
              "Gefährlich falsch. Kalium ist wichtig fürs Herz. Zu schnell in die Vene kann tödliche Rhythmusstörungen machen. Man gibt es nur langsam, hohe Mengen nur über einen ZVK — nie schnell als Spritze über eine normale Kanüle.",
          },
          {
            text: "Der Rhythmus kommt allein aus den Herzkranzgefäßen — Elektrolyte wie Kalium spielen für den Takt keine Rolle.",
            isCorrect: false,
            explanation:
              "Falsch. Den Takt gibt das Erregungsbildungs- und Reizleitungssystem vor (Sinusknoten als Schrittmacher), nicht die Herzkranzgefäße. Elektrolyte, besonders Kalium, beeinflussen die elektrische Erregbarkeit direkt — Störungen führen zu Herzrhythmusstörungen.",
            explanationB1:
              "Falsch. Den Takt macht der Sinusknoten (Taktgeber), nicht die Herzkranzgefäße. Kalium beeinflusst den Herzrhythmus direkt.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_GRUBER_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-gruber-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an die Intensivstation",
  titelB1: "Übergabe an die Intensivstation",
  kontext:
    "Herr Gruber wird auf die Intensivstation verlegt. Die Intensiv-Pflegekraft nimmt ihn entgegen und fragt: \"Was ist passiert?\"",
  kontextB1:
    "Herr Gruber kommt auf die Intensivstation. Die Pflegekraft dort fragt: \"Was ist passiert?\"",
  kernSteps: [
    {
      stepId: "ce06-gruber-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-gruber-sbar",
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
            text: "\"Herr Gruber, 69, seit 18:20 Hämatemesis bei V. a. obere GI-Blutung (S). Ulcus-Anamnese, Dauer-Ibuprofen wegen Arthrose, seit Tagen Meläna (B). Puls 132, RR 80/50, Sättigung fallend, zunehmend benommen, 2 großlumige Zugänge, Volumen läuft, nüchtern (A). Bitte Intensivaufnahme, Kreuzblut ist unterwegs, Endoskopie-Bereitschaft (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR: die aktuelle Situation (Bluterbrechen), der entscheidende Background (NSAR-Ulkus, verschwiegene Meläna), das kritische Assessment (Tachykardie, Hypotonie, Zugänge/Volumen, nüchtern) und eine klare Empfehlung (Intensivaufnahme, Kreuzblut, Endoskopie-Bereitschaft). Das Gegenüber kann sofort priorisieren.",
            explanationB1:
              "Richtig. Vollständiges SBAR: was jetzt ist (Bluterbrechen), der wichtige Hintergrund (Ibuprofen-Magengeschwür, verschwiegener schwarzer Stuhl), der kritische Zustand (schneller Puls, niedriger Blutdruck, Zugänge, nüchtern) und eine klare Bitte (Intensiv, Blutgruppe, Magenspiegelung bereit).",
          },
          {
            text: "\"Der Herr aus Zimmer 12 hat beim Abendessen Blut gebrochen, ich habe ihn schon gelagert und ihm Sauerstoff gegeben, er kommt jetzt gleich zu euch hoch — macht euch mal bereit für ihn.\"",
            isCorrect: false,
            explanation:
              "Gefährlich verkürzt. Es fehlen die entscheidenden Fakten: Vitalzeichen, Zugänge/Volumen, der NSAR-Ulkus-Hintergrund und eine klare Empfehlung. So kann die Intensivstation nicht vorbereiten. SBAR verlangt die harten Fakten und eine konkrete Bitte.",
            explanationB1:
              "Zu kurz. Es fehlen die Werte, die Zugänge, der Hintergrund und eine klare Bitte. So kann die Intensivstation nichts vorbereiten.",
          },
          {
            text: "\"Herr Gruber war früher Schreiner, ein sehr stolzer und zurückhaltender Mann, und seine Frau Renate sitzt gerade völlig aufgelöst am Bett — das solltet ihr auf jeden Fall wissen, wenn er zu euch kommt.\"",
            isCorrect: false,
            explanation:
              "Am Notfall vorbei. Das ist überwiegend Hintergrund zur Person. Es fehlen das akute Ereignis, das kritische Assessment (Vitalzeichen, Zugänge) und die medizinische Empfehlung. Der psychosoziale Kontext ist wichtig, aber in der SBAR-Übergabe eines Notfalls kommt das medizinisch Entscheidende zuerst.",
            explanationB1:
              "Am Notfall vorbei. Das ist Hintergrund zur Person. Es fehlen das akute Ereignis, die Werte und die Bitte. Zuerst kommt das medizinisch Wichtige.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_GRUBER_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-gruber-reflektieren",
  phase: "reflektieren",
  titel: "Der Mensch hinter den Geräten",
  titelB1: "Der Mensch hinter den Geräten",
  kontext:
    "Herr Gruber liegt auf der Intensivstation — umgeben von Infusionspumpen, Perfusoren und dem Überwachungsmonitor. Renate steht unsicher im Türrahmen. Du denkst über die Situation nach.",
  kontextB1:
    "Herr Gruber liegt auf der Intensivstation — mit vielen Geräten um sich herum. Renate steht unsicher an der Tür. Du denkst über die Situation nach.",
  kernSteps: [
    {
      stepId: "ce06-gruber-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.2",
      quellen: ["Pflege heute 2019, Kap. 41 (intensivmedizinischer Kontext)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-gruber-intensiv-kontext",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-13"],
      contentC1: {
        title: "Zwischen Monitor und Mensch",
        body: "Auf der Intensivstation ist die Umgebung apparate- und gerätedominiert. Reflektiere deine Rolle zwischen Technik und Zuwendung.",
        glossarBegriffe: ["Intensivstation", "apparativ", "Zuwendung"],
      },
      contentB1: {
        title: "Zwischen Monitor und Mensch",
        body: "Auf der Intensivstation gibt es viele Geräte. Denke über deine Rolle zwischen Technik und Zuwendung nach.",
        glossarBegriffe: ["Intensivstation", "Zuwendung (= sich dem Menschen zuwenden)"],
      },
      question: {
        fragetext: "Reflektiere deine Rolle im apparativen Umfeld.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Was macht die intensivmedizinische Umgebung besonders (Infusionspumpen, Perfusoren, Überwachungsmonitor, Beatmung)? 2) Welche Gefahr besteht, wenn die Aufmerksamkeit nur den Geräten gilt? 3) Wie behältst du den Menschen Herrn Gruber und seine Würde im Blick, während du die Technik bedienst? 4) Was nimmst du für deine Haltung auf einer Intensivstation mit?",
          placeholder:
            "Die Intensivstation ist besonders, weil … Die Gefahr bei zu viel Technik-Fokus ist … Den Menschen behalte ich im Blick, indem ich … Mitnehmen würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler den apparate- und gerätedominierten Kontext (Infusionspumpen/Perfusoren, Überwachungsmonitor, Beatmung) UND die besondere Aufgabe, den Menschen hinter den Geräten samt Würde/Zuwendung nicht aus dem Blick zu verlieren (Ansprache, Erklärungen, Orientierung geben)? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
    {
      stepId: "ce06-gruber-ref-02",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: [
        "Pflege heute 2019, Kap. 15 (Coping/Bewältigung)",
        "Kommunikation im Gesundheitswesen (Angehörige in Extremsituationen)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-gruber-familiaeres-coping",
      tag: "pflege",
      themaPrimaer: "schock-und-kreislauf",
      kernfaktId: ["F-14"],
      contentC1: {
        title: "Renate auffangen — Vorschläge entwickeln",
        body: "Renate hat den Notfall miterlebt und ist überfordert: Angst, Schuldgefühle ('warum hat er mir nichts gesagt?'), Hilflosigkeit. Entwickle konkrete Vorschläge, wie du das familiäre Coping unterstützt.",
        glossarBegriffe: ["Coping", "Angehörigenbegleitung", "Familienbesprechung"],
      },
      contentB1: {
        title: "Renate helfen — Vorschläge entwickeln",
        body: "Renate hat den Notfall miterlebt. Sie hat Angst, Schuldgefühle und fühlt sich hilflos. Entwickle konkrete Ideen, wie du der Familie beim Bewältigen (Coping) hilfst.",
        glossarBegriffe: ["Coping (= Bewältigung)", "Angehörigenbegleitung"],
      },
      question: {
        fragetext: "Entwickle 3–4 konkrete Vorschläge zur Unterstützung von Renates und der Familie Bewältigung (Coping).",
        musterantwort:
          "Coping bezeichnet die Bewältigung herausfordernder Ereignisse — problemorientiert (auf die Lösung) und emotionsorientiert (auf die Gefühle). Angehörige wie Renate sind in einer emotionalen Extremsituation; Angst, Trauer und Schuldgefühle beeinträchtigen ihr Denken und Entscheiden. Konkrete Vorschläge: (1) Klare, verständliche Informationen in kurzen Sätzen geben (was ist passiert, was passiert jetzt) — schriftlich nachreichen, weil sie sich in der Aufregung wenig merkt. (2) Emotionsorientiert entlasten: Schuldgefühle ansprechen und relativieren ('Sie konnten das nicht wissen — er hat es bewusst verschwiegen'), Ängste ernst nehmen, Dasein anbieten. (3) Problemorientiert einbeziehen: ihr eine kleine, sinnvolle Aufgabe geben (Hand halten, mit ihm sprechen), damit sie nicht nur hilflos zusieht. (4) Ein strukturiertes Gesprächsangebot machen (Familienbesprechung mit Arzt, Seelsorge/Sozialdienst) und auf den Rhythmus der Intensivstation vorbereiten. So wird die familiäre Bewältigung gestützt.",
        bewertungskriterien: [
          "Benennt beide Coping-Richtungen (problemorientiert UND emotionsorientiert)",
          "Erkennt Renate als in emotionaler Extremsituation (Angst/Schuld beeinträchtigen Denken/Entscheiden)",
          "Entwickelt konkrete, umsetzbare Vorschläge (klare Information, emotionale Entlastung/Schuld relativieren, aktive Einbeziehung, Gesprächsangebot/Familienbesprechung)",
          "Sandwich-Ton, wertschätzend, nicht bevormundend",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};
