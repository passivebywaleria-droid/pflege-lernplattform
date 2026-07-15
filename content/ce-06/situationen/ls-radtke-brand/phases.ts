// CE-06 Situation „Nächtlicher Brand im Pflegeheim — Katastrophe, Triage & Krisenintervention"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt LE4: W1 (Spezifik Notfall-/Katastrophensituationen, Katastrophenschutzplan der Einrichtung,
//        Triage-Instrumente), K1 (Anlässe→Maßnahmen: Brand/Massenanfall), K2 (Handeln bei Brand nach
//        Brandschutzordnung/Notfallplan), K3 (Krisenintervention darstellen), E1 (eigenes Funktionieren/
//        Eigenschutz reflektieren), E2 (Supervision zum Erhalt der eigenen Fassung).
// Grounding: specs/ce-06/kernfakten/katastrophe-triage-krise.md (F-01..F-12, verbatim aus Pflege heute Kap. 14.4/14.6/14.7/16.4).
//
// KRITISCH GEBAUT:
//  - Leitprinzip Katastrophe/MANV: „für möglichst viele das Beste“ — Sichtung VOR individueller Einzelhilfe (F-08).
//  - Eigenschutz zuerst, niemals vergessen (F-09). Handeln nach dem Notfallplan der EIGENEN Einrichtung (F-04).
//  - Sichtungskategorien exakt: SK I rot (vital→sofort) / SK II gelb (schwer→dringlich) / SK III grün (leicht→
//    nichtdringlich) / SK IV blau (ohne Überlebenschance→palliativ) / schwarz = Tote (F-07).
//  - Krisenintervention: Pflege leistet psychische Erste Hilfe + informiert KIT/Notfallseelsorge; keine Auskunft
//    an Dritte, nur die Einsatzleitung (F-10/F-11). KIT ist spezialisiert (Psychotraumatologie).
//  - Kleiderbrand: aufhalten (Panik-Weglaufen), Wasser/Tücher/Wolldecke ersticken, Feuerlöscher nicht ins Gesicht (F-05).
//  - MC-Optionen vergleichbar lang (Begründung in explanation), Sandwich im Falsch-Feedback, „du“-Anrede.

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_RADTKE_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-radtke-erkennen",
  phase: "erkennen",
  titel: "02:10 Uhr — der Brandalarm schrillt",
  titelB1: "Nachts — der Brandalarm schrillt",
  kontext:
    "Es ist 02:10 Uhr, du hast Nachtdienst im Pflegeheim. Plötzlich schrillt der Brandalarm: Im Nachbarflügel brennt es in einem Bewohnerzimmer, Rauch zieht auf den Flur. Frau Radtke, 84, steht verängstigt und orientierungslos an ihrer Zimmertür. \"Was ist denn hier los? Ich verstehe das alles nicht\", ruft sie. Du musst jetzt richtig handeln.",
  kontextB1:
    "Es ist 02:10 Uhr, du hast Nachtdienst. Der Brandalarm schrillt: Im Nachbarflügel brennt es, Rauch zieht auf den Flur. Frau Radtke, 84, steht ängstlich an ihrer Tür. \"Was ist hier los? Ich verstehe das nicht\", ruft sie. Du musst jetzt richtig handeln.",
  kernSteps: [
    {
      stepId: "ce06-radtke-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      // Handeln nach Notfallplan + Eigenschutz = Notfall-Handeln → I.4 (LE4-Primär).
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.7 (Notfallpläne/Notfall-Evakuierung der Einrichtung; Mitwirkung im Katastrophenfall; Eigenschutz)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-radtke-notfallplan",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-04", "F-03", "F-09"],
      contentC1: {
        title: "Was ist jetzt richtig?",
        body: "Brandalarm im Heim, Rauch auf dem Flur. Worauf stützt du dein Handeln in den ersten Sekunden?",
        glossarBegriffe: ["Notfallplan", "Brandschutzordnung", "Eigenschutz", "Evakuierung"],
      },
      contentB1: {
        title: "Was ist jetzt richtig?",
        body: "Brandalarm, Rauch auf dem Flur. Worauf stützt du dein Handeln in den ersten Sekunden?",
        glossarBegriffe: ["Notfallplan (= Plan der Einrichtung für Notfälle)", "Eigenschutz (= dich selbst schützen)"],
      },
      question: {
        fragetext: "Worauf stützt du dein Handeln in den ersten Sekunden?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich handle nach dem Notfall- und Brandschutzplan meiner Einrichtung: alarmieren, Bewohner in Sicherheit bringen und nach der Brandschutzordnung vorgehen — den Eigenschutz nie vergessen.",
            isCorrect: true,
            explanation:
              "Richtig. Krankenhäuser und Pflegeeinrichtungen besitzen Notfallpläne und Vorgaben zur Notfall-Evakuierung; Pflegende müssen die Vorgehensweisen ihrer Einrichtung kennen und wissen, wo die Informationen zu finden sind. Pflegende sollen im Krisen- und Katastrophenfall mitwirken (Feuerschutz, Evakuierung). Und immer gilt: niemals den Eigenschutz vergessen — nur wer selbst handlungsfähig bleibt, kann anderen helfen.",
            explanationB1:
              "Richtig. Jedes Heim hat einen Notfallplan für den Brandfall — auch für den Katastrophenfall, wenn viele Menschen in Gefahr sind. Du musst ihn kennen: alarmieren, Bewohner retten, dich selbst schützen. Nur wer selbst sicher ist, kann helfen.",
          },
          {
            text: "Ich renne zuerst allein zum brennenden Zimmer und versuche, das Feuer selbst zu löschen, bevor ich irgendwen alarmiere oder Bewohner wecke.",
            isCorrect: false,
            explanation:
              "Falsch und gefährlich. Ohne Alarmierung und ohne Eigenschutz allein zum Brandherd zu laufen, gefährdet dich selbst und lässt die Bewohner ungeschützt. Zuerst wird nach dem Notfallplan alarmiert und evakuiert; die Brandbekämpfung ist Sache der Feuerwehr. Eigenschutz zuerst.",
            explanationB1:
              "Falsch und gefährlich. Allein zum Feuer zu rennen, gefährdet dich und lässt die Bewohner allein. Erst nach Plan alarmieren und retten. Das Löschen macht die Feuerwehr. Eigenschutz zuerst.",
          },
          {
            text: "Ich warte erst einmal ab, ob der Alarm von selbst wieder aufhört, um keinen unnötigen Fehlalarm bei der Feuerwehr auszulösen und den Nachtdienst nicht grundlos in Aufregung zu versetzen.",
            isCorrect: false,
            explanation:
              "Falsch. Bei sichtbarem Feuer und Rauch wird nicht abgewartet — jede Minute zählt. Der Notfallplan sieht sofortiges Alarmieren und Evakuieren vor; die Sorge vor „Fehlalarm“ darf lebensrettende Maßnahmen nie verzögern.",
            explanationB1:
              "Falsch. Bei Feuer und Rauch wartet man nicht. Der Notfallplan heißt: sofort alarmieren und retten. Angst vor Fehlalarm darf nicht bremsen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-radtke-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      // Kleiderbrand löschen = Erste-Hilfe-Akuthandlung → I.4 (LE4-Primär).
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.6 (Erstmaßnahmen bei Verbrennungen/Kleiderbrand)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-radtke-kleiderbrand",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-05"],
      contentC1: {
        title: "Ein Bewohner brennt",
        body: "Ein Bewohner läuft panisch mit brennendem Ärmel am Nachthemd über den Flur. Wie reagierst du?",
        glossarBegriffe: ["Kleiderbrand", "ersticken", "Feuerlöscher"],
      },
      contentB1: {
        title: "Ein Bewohner brennt",
        body: "Ein Bewohner läuft panisch mit brennendem Ärmel über den Flur. Wie reagierst du?",
        glossarBegriffe: ["Kleiderbrand (= die Kleidung brennt)", "ersticken (= Flammen die Luft nehmen)"],
      },
      question: {
        fragetext: "Wie löschst du den Kleiderbrand?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich halte die Person auf, lösche mit Wasser oder ersticke die Flammen mit Tüchern bzw. einer Wolldecke; ein Feuerlöscher geht auch — aber nicht ins Gesicht sprühen.",
            isCorrect: true,
            explanation:
              "Richtig. Kleiderbrände werden sofort gelöscht — die brennende Person, die aus Panik meist davonläuft, muss unbedingt aufgehalten werden. Wenn Wasser verfügbar ist, wird übergossen; sonst erstickt man die Flammen mit Tüchern, hüllt die Person in Wolldecken ein oder wälzt sie am Boden („stop, drop and roll“). Auch ein Feuerlöscher kann eingesetzt werden — aber nicht ins Gesicht spritzen.",
            explanationB1:
              "Richtig. Erst die Person aufhalten (sie läuft aus Panik weg). Dann mit Wasser löschen oder die Flammen mit Tüchern/Wolldecke ersticken, notfalls am Boden wälzen. Ein Feuerlöscher geht auch — aber nicht ins Gesicht.",
          },
          {
            text: "Ich lasse die Person erst einmal weiterlaufen und hole in Ruhe einen Eimer Wasser aus dem Waschraum, damit ich dann mit genug Wasser auf einmal löschen kann.",
            isCorrect: false,
            explanation:
              "Falsch. Wer die brennende Person weiterlaufen lässt, facht die Flammen durch den Fahrtwind weiter an und verliert wertvolle Sekunden. Zuerst wird die Person aufgehalten, dann sofort mit dem gelöscht, was greifbar ist (Wasser, Tücher, Wolldecke, Feuerlöscher).",
            explanationB1:
              "Falsch. Wenn die Person weiterläuft, brennt es stärker. Erst aufhalten, dann sofort mit dem löschen, was da ist (Wasser, Tücher, Decke).",
          },
          {
            text: "In der Panik sprühe ich den Feuerlöscher von oben übers Gesicht, um die Flammen am Kopf möglichst schnell zu ersticken.",
            isCorrect: false,
            explanation:
              "Falsch. Ein Feuerlöscher darf gerade nicht ins Gesicht gesprüht werden (Verletzungs- und Erstickungsgefahr durch das Löschmittel). Man löscht am Körper und erstickt die Flammen; Wasser oder Decken sind bei einer Person oft schonender.",
            explanationB1:
              "Falsch. Den Feuerlöscher NICHT ins Gesicht sprühen. Man löscht am Körper. Wasser oder eine Decke sind bei einem Menschen oft besser.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 9,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_RADTKE_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-radtke-alarmieren",
  phase: "alarmieren",
  titel: "Aus einem Brand wird ein Großschadensereignis",
  titelB1: "Ein Großschadensereignis",
  kontext:
    "Die Feuerwehr ist alarmiert. Immer mehr Bewohner werden auf den Sammelplatz gebracht — mit Rauchgasreizung, Sturzverletzungen, Verbrennungen. Es sind mehr Betroffene, als ihr im Nachtdienst allein versorgen könnt.",
  kontextB1:
    "Die Feuerwehr ist alarmiert. Immer mehr Bewohner kommen auf den Sammelplatz — mit Rauch in der Lunge, Stürzen, Verbrennungen. Es sind mehr Menschen, als ihr im Nachtdienst allein versorgen könnt.",
  kernSteps: [
    {
      // Wissens-Tab A (curriculum-first, LE4-Primär I.4): MANV/Katastrophe + das andere Leitprinzip.
      // VOR der Anwendung ala-01. Literatur-belegt (F-01/F-02/F-08/F-04/F-09, Pflege heute Kap. 14.7)
      // + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-radtke-ala-00b-manv",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE4-Primär: in Notfall-/Katastrophensituationen handeln.
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.7"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-radtke-manv-wissen",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      // F-01 (MANV) · F-02 (Katastrophe) · F-08 (Sichtung vor Einzelhilfe/Leitprinzip) · F-04 (eigener Notfallplan) · F-09 (Eigenschutz).
      kernfaktId: ["F-01", "F-02", "F-08", "F-04", "F-09"],
      transition: "Ordne die Lage jetzt selbst fachlich ein.",
      contentC1: {
        title: "Wenn viele gleichzeitig — MANV und das andere Prinzip",
        body: "",
        glossarBegriffe: ["Massenanfall (MANV)", "Katastrophe", "Eigenschutz"],
      },
      inlineWissen: {
        bausteinRef: "katastrophe-triage-krise-manv",
        themaPrimaer: "katastrophe-triage-krise",
        storyAufhaenger:
          "Vor wenigen Minuten war es ein Brand in einem Zimmer. Jetzt stehen mehr Verletzte am Sammelplatz, als ihr im Nachtdienst versorgen könnt. Ab diesem Moment gilt eine andere Logik als sonst — welche?",
        storyAufhaengerB1:
          "Vor wenigen Minuten war es nur ein Brand in einem Zimmer. Jetzt stehen mehr Verletzte am Sammelplatz, als ihr im Nachtdienst versorgen könnt. Ab jetzt gilt eine andere Logik als sonst. Welche?",
        kerntext:
          "Solange du einen einzelnen Menschen versorgst, gibst du ihm alles, was er braucht. Sobald es aber mehr Betroffene gibt, als die vorhandenen Kräfte einzeln versorgen können, kippt die Lage in einen Massenanfall von Verletzten (kurz MANV; als grobe Schwelle gilt: ab etwa 5 Betroffenen). Wird das Ereignis so groß, dass die örtlichen Kräfte es allein nicht mehr bewältigen und viele Menschen an Leben und Gesundheit bedroht sind, heißt das Katastrophe oder Großschadensereignis.\n\nJetzt gilt ein anderes Leitprinzip: nicht mehr für den Einzelnen das Maximum, sondern für möglichst viele das Beste. Das klingt hart, rettet aber unterm Strich die meisten Leben — würdest du dich sofort ganz in die erste schwere Verletzung vertiefen, bliebe die Hilfe für alle anderen liegen. Deshalb wird zuerst gesichtet (nach Dringlichkeit eingeteilt) und erst dann geholfen.\n\nZwei Dinge trägst du durch die ganze Nacht: Handle nach dem Notfall- und Brandschutzplan deiner eigenen Einrichtung — du musst wissen, wo er zu finden ist und was er vorgibt. Und vergiss nie den Eigenschutz: Wer selbst in Rauch, Feuer oder einen einsturzgefährdeten Bereich läuft, wird schnell selbst zum Opfer und fällt als Helfer aus.",
        kerntextB1:
          "Solange du nur einen Menschen versorgst, gibst du ihm alles, was er braucht. Aber jetzt gibt es mehr Betroffene, als ihr Kräfte habt. Dann kippt die Lage in einen Massenanfall von Verletzten. Kurz sagt man MANV. Als grobe Grenze gilt: ab etwa 5 Betroffenen. Wird das Ereignis noch größer, schaffen es die Kräfte vor Ort allein nicht mehr. Dann sind viele Menschen in Lebensgefahr. Das nennt man Katastrophe oder Großschadensereignis.\n\nJetzt gilt ein anderes Leitprinzip. Nicht mehr für den Einzelnen das Maximum, sondern für möglichst viele das Beste. Das klingt hart. Aber so rettet man am Ende die meisten Leben. Denn wenn du dich sofort ganz auf die erste schwere Verletzung stürzt, bleibt die Hilfe für alle anderen liegen. Deshalb wird zuerst gesichtet. Sichten heißt: die Betroffenen nach Dringlichkeit einteilen. Erst danach hilfst du.\n\nZwei Dinge trägst du durch die ganze Nacht. Erstens: Handle nach dem Notfallplan und dem Brandschutzplan deiner eigenen Einrichtung. Du musst wissen, wo er steht und was er vorgibt. Zweitens: Vergiss nie den Eigenschutz. Wer selbst in Rauch, Feuer oder einen Bereich läuft, der einstürzen kann, wird schnell selbst zum Opfer. Dann kann er niemandem mehr helfen.",
        faustregel:
          "Mehr Betroffene als Kräfte = MANV. Jetzt gilt: für möglichst viele das Beste — erst sichten, dann helfen. Immer nach dem Plan der eigenen Einrichtung, und Eigenschutz zuerst.",
        faustregelB1:
          "Mehr Betroffene als Kräfte = MANV. Jetzt gilt: für möglichst viele das Beste. Erst sichten, dann helfen. Immer nach dem Plan der eigenen Einrichtung. Und Eigenschutz zuerst.",
        spektrum: [
          {
            patientName: "Einzelnotfall",
            hauptfaktor: "volle Versorgung",
            kurzbeschreibung:
              "Ein Betroffener, genug Kräfte — du gibst ihm die ganze Aufmerksamkeit und Versorgung.",
            kurzbeschreibungB1:
              "Ein Betroffener, genug Kräfte. Du gibst ihm die ganze Aufmerksamkeit und Versorgung.",
          },
          {
            patientName: "Massenanfall (MANV)",
            situationsId: "ls-radtke-brand",
            hauptfaktor: "sichten & priorisieren",
            kurzbeschreibung:
              "Mehr Verletzte als Kräfte → erst nach Dringlichkeit einteilen, dann helfen: für möglichst viele das Beste.",
            kurzbeschreibungB1:
              "Mehr Verletzte als Kräfte. Erst nach Dringlichkeit einteilen, dann helfen: für möglichst viele das Beste.",
          },
          {
            patientName: "Katastrophe / Großschadensereignis",
            hauptfaktor: "überörtliche Hilfe",
            kurzbeschreibung:
              "So groß, dass die örtlichen Kräfte es allein nicht schaffen — viele Menschen bedroht, Hilfe von außen nötig.",
            kurzbeschreibungB1:
              "So groß, dass die Kräfte vor Ort es allein nicht schaffen. Viele Menschen sind bedroht. Man braucht Hilfe von außen.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Am Sammelplatz sind mehr Verletzte als Helfer — welche Logik gilt jetzt?",
          rueckseite:
            "Massenanfall von Verletzten (MANV): mehr Betroffene als Kräfte. Das Leitprinzip wechselt von „für den Einzelnen das Maximum\" zu „für möglichst viele das Beste\" → erst sichten, dann helfen. Immer nach dem Notfallplan der eigenen Einrichtung, Eigenschutz zuerst. Katastrophe = örtliche Kräfte reichen allein nicht.",
          vorderseiteB1:
            "Am Sammelplatz sind mehr Verletzte als Helfer. Welche Logik gilt jetzt?",
          rueckseiteB1:
            "Massenanfall von Verletzten (MANV): mehr Betroffene als Kräfte. Das Leitprinzip wechselt. Vorher: für den Einzelnen das Maximum. Jetzt: für möglichst viele das Beste. Also erst sichten, dann helfen. Immer nach dem Notfallplan der eigenen Einrichtung. Eigenschutz zuerst. Katastrophe = die Kräfte vor Ort reichen allein nicht.",
        },
      },
    },
    {
      stepId: "ce06-radtke-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      // Lage als MANV einordnen und danach handeln → I.4 (LE4-Primär).
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.7 (MANV/Katastrophe: Definition, Leitprinzip)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-radtke-manv-begriff",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-01", "F-02"],
      contentC1: {
        title: "Was heißt das jetzt fachlich?",
        body: "Mehr Verletzte, als mit den vorhandenen Kräften einzeln versorgt werden können. Wie ordnest du die Lage ein — und was folgt daraus?",
        glossarBegriffe: ["Massenanfall (MANV)", "Großschadensereignis", "Katastrophe"],
      },
      contentB1: {
        title: "Was heißt das fachlich?",
        body: "Mehr Verletzte, als ihr einzeln versorgen könnt. Wie ordnest du die Lage ein — und was folgt daraus?",
        glossarBegriffe: ["Massenanfall (= viele Verletzte auf einmal)", "Katastrophe"],
      },
      question: {
        fragetext: "Wie ordnest du die Lage ein?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ein Massenanfall von Verletzten (MANV): mehr Betroffene (grob ab etwa 5), als mit den vorhandenen Kräften individuell versorgt werden können. Das Leitprinzip lautet, für möglichst viele das Beste zu tun.",
            isCorrect: true,
            explanation:
              "Richtig. Ein MANV ist ein Notfall mit einer größeren Anzahl von Verletzten oder Erkrankten, der mit der vorhandenen Vorhaltung nicht bewältigt werden kann; eine Katastrophe ist ein Großschadensereignis mit Gefahr für Leben/Gesundheit vieler Menschen, das örtliche Kräfte nicht allein bewältigen. Die Strategie unterscheidet sich von der Individualmedizin: Ziel ist, für möglichst viele Patienten das Beste zu tun.",
            explanationB1:
              "Richtig. Ein MANV heißt: mehr Verletzte, als man einzeln versorgen kann. Eine Katastrophe (ein Großschadensereignis) bedroht viele Menschen. Anders als sonst gilt jetzt: für möglichst viele das Beste tun.",
          },
          {
            text: "Ein normaler Einzelnotfall — ich versorge einfach der Reihe nach jeden Bewohner vollständig, so wie ich es sonst auch mache, bis alle dran waren.",
            isCorrect: false,
            explanation:
              "Falsch. Bei vielen Betroffenen mit knappen Kräften ist die Individualversorgung „der Reihe nach“ gerade nicht angezeigt: Sie würde die Hilfe für viele verzögern. Ein MANV verlangt eine andere Strategie — Sichtung und Prioritäten, um für möglichst viele das Beste zu erreichen.",
            explanationB1:
              "Falsch. Bei vielen Verletzten kann man nicht einfach der Reihe nach jeden komplett versorgen — das kostet zu viel Zeit. Ein MANV braucht eine andere Strategie: sichten und Prioritäten setzen.",
          },
          {
            text: "Eine Übungssituation — ich gehe von einem Probealarm aus und versorge nur die, die am lautesten nach Hilfe rufen.",
            isCorrect: false,
            explanation:
              "Falsch. Bei realem Feuer, Rauch und mehreren Verletzten ist von einem echten Ereignis auszugehen. Und wer nur die Lautesten versorgt, übersieht die stillen, oft schwerer Betroffenen. Es braucht eine strukturierte Sichtung nach Dringlichkeit, nicht nach Lautstärke.",
            explanationB1:
              "Falsch. Bei echtem Feuer und Rauch ist es keine Übung. Und die Lautesten sind nicht die Schwersten — die stillen Verletzten sind oft schlimmer dran. Man sichtet nach Dringlichkeit.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN
export const CE06_SIT_RADTKE_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-radtke-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Sichten und Prioritäten setzen",
  titelB1: "Sichten und Prioritäten setzen",
  kontext:
    "Am Sammelplatz warten mehrere Betroffene. Bis der Rettungsdienst die Sichtung übernimmt, verschaffst du dir schnell einen Überblick — wer braucht zuerst Hilfe?",
  kontextB1:
    "Am Sammelplatz warten mehrere Betroffene. Bis der Rettungsdienst da ist, verschaffst du dir schnell einen Überblick: Wer braucht zuerst Hilfe?",
  kernSteps: [
    {
      // Wissens-Tab B (curriculum-first, LE4-Primär I.4): Ersteinschätzung (ABCDE) + Sichtungskategorien.
      // VOR den Anwendungen erm-01 (ABCDE) / erm-02 (Triage) / erm-03 (Prinzip). Literatur-belegt
      // (F-06/F-07/F-08, Pflege heute Kap. 14.4.1/14.7.1) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-radtke-erm-00b-sichtung",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE4-Primär: schnell und strukturiert einschätzen + sichten = Notfall-Handeln.
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.4.1/14.7.1"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-radtke-sichtung-wissen",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      // F-06 (ABCDE-Ersteinschätzung) · F-07 (Sichtungskategorien SK I–IV + schwarz) · F-08 (sichten vor helfen).
      kernfaktId: ["F-06", "F-07", "F-08"],
      transition: "Wende Ersteinschätzung und Sichtung jetzt an.",
      contentC1: {
        title: "Erst der Blick, dann die Rangfolge: ABCDE & Sichtungsfarben",
        body: "",
        glossarBegriffe: ["Triage", "Sichtungskategorie", "ABCDE-Schema"],
      },
      inlineWissen: {
        bausteinRef: "katastrophe-triage-krise-sichtung",
        themaPrimaer: "katastrophe-triage-krise",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Am Sammelplatz warten mehrere Betroffene, der Rettungsdienst ist noch nicht da. Du kannst nicht allen zugleich helfen — also brauchst du erst einen schnellen, geordneten Blick und dann eine klare Rangfolge. Wie?",
        storyAufhaengerB1:
          "Am Sammelplatz warten mehrere Betroffene. Der Rettungsdienst ist noch nicht da. Du kannst nicht allen zugleich helfen. Also brauchst du erst einen schnellen, geordneten Blick. Und dann eine klare Rangfolge. Wie?",
        kerntext:
          "Zuerst der schnelle Blick auf den Einzelnen: Das ABCDE-Schema prüft in fester Reihenfolge das Lebensbedrohlichste zuerst — Atemweg (A), Atmung (B), Kreislauf (C), Bewusstsein (D) und zuletzt Entkleiden/Umgebung (E). Diese Reihenfolge kennst du schon aus der Ersteinschätzung; sie sorgt dafür, dass dir kein sofort tödliches Problem (etwa ein verlegter Atemweg) durchrutscht.\n\nAuf dieser Grundlage sichtest (triagierst) du: Du teilst die Betroffenen nach Dringlichkeit in Farbkategorien ein. Rot (SK I) heißt vitale Bedrohung — sofort behandeln (z. B. bedrohte Atmung, starke Blutung). Gelb (SK II) heißt schwer verletzt, aber kreislaufstabil — dringlich, aber nach den Roten. Grün (SK III) heißt leicht verletzt und gehfähig — kann warten. Blau (SK IV) kennzeichnet Betroffene ohne realistische Überlebenschance — sie werden betreuend und schmerzlindernd begleitet; diese Kategorie vergibt nur ein Arzt. Schwarz steht für Verstorbene.\n\nEntscheidend: Du sichtest nach Dringlichkeit, nicht nach Lautstärke. Wer laut ruft und umhergeht, ist meist grün; die stillen, kaum atmenden Betroffenen sind oft die roten. Und Grün heißt nicht „fertig\": Gerade nach dem Einatmen von Rauch kann sich ein Zustand verzögert verschlechtern — also weiter beobachten.",
        kerntextB1:
          "Zuerst der schnelle Blick auf den Einzelnen. Dafür gibt es das ABCDE-Schema. Es prüft immer in fester Reihenfolge — das Gefährlichste zuerst. A ist der Atemweg. B ist die Atmung. C ist der Kreislauf. D ist das Bewusstsein. E ist das Entkleiden und der Blick auf die Umgebung. Diese Reihenfolge kennst du schon aus der Ersteinschätzung. So rutscht dir kein sofort tödliches Problem durch, zum Beispiel ein blockierter Atemweg.\n\nDanach sichtest du. Sichten (oder triagieren) heißt: Du teilst die Betroffenen nach Dringlichkeit in Farben ein. Rot (SK I) heißt Lebensgefahr — sofort behandeln, zum Beispiel bei schwerer Atemnot oder starker Blutung. Gelb (SK II) heißt schwer verletzt, aber der Kreislauf ist stabil — dringlich, aber erst nach den Roten. Grün (SK III) heißt leicht verletzt und kann selbst gehen — kann warten. Blau (SK IV) heißt: keine echte Überlebenschance mehr. Diese Menschen begleitet man und lindert ihre Schmerzen. Diese Farbe vergibt nur ein Arzt. Schwarz steht für Verstorbene.\n\nWichtig: Du sichtest nach Dringlichkeit, nicht nach Lautstärke. Wer laut ruft und umhergeht, ist meistens grün. Die stillen Betroffenen, die kaum atmen, sind oft die roten. Und Grün heißt nicht „fertig\". Gerade nach dem Einatmen von Rauch kann es später schlechter werden. Deshalb: weiter beobachten.",
        faustregel:
          "Erst ABCDE (Lebensbedrohlichstes zuerst), dann sichten nach Dringlichkeit: rot = sofort, gelb = dringlich, grün = kann warten, blau = ohne Überlebenschance (palliativ), schwarz = tot. Nach Dringlichkeit, nicht nach Lautstärke.",
        faustregelB1:
          "Erst ABCDE (das Gefährlichste zuerst). Dann sichten nach Dringlichkeit. Rot = sofort, gelb = dringlich, grün = kann warten. Blau = keine Überlebenschance (palliativ — nur noch Begleitung, keine Heilung). Schwarz = tot. Nach Dringlichkeit, nicht nach Lautstärke.",
        spektrum: [
          {
            patientName: "SK I — rot",
            hauptfaktor: "vitale Bedrohung",
            kurzbeschreibung:
              "Bedrohte Atmung, starke Blutung, Bewusstlosigkeit → sofort behandeln.",
            kurzbeschreibungB1:
              "Schwere Atemnot, starke Blutung oder Bewusstlosigkeit → sofort behandeln.",
          },
          {
            patientName: "SK II — gelb",
            hauptfaktor: "schwer, aber stabil",
            kurzbeschreibung:
              "Schwer verletzt, Kreislauf (noch) stabil → dringlich, kommt nach den Roten.",
            kurzbeschreibungB1:
              "Schwer verletzt, aber der Kreislauf ist noch stabil. Dringlich, kommt nach den Roten.",
          },
          {
            patientName: "SK III — grün",
            hauptfaktor: "leicht / gehfähig",
            kurzbeschreibung:
              "Leicht verletzt, läuft selbst umher → kann warten; trotzdem weiter beobachten (Rauchgas!).",
            kurzbeschreibungB1:
              "Leicht verletzt, läuft selbst umher → kann warten. Trotzdem weiter beobachten, denn der Rauch kann noch wirken.",
          },
          {
            patientName: "SK IV blau (lebend) · schwarz (tot)",
            hauptfaktor: "zwei verschiedene Zustände",
            kurzbeschreibung:
              "Blau = noch lebend, aber ohne realistische Überlebenschance → palliative Begleitung. Schwarz dagegen = bereits Verstorbene. Nicht verwechseln.",
            kurzbeschreibungB1:
              "Blau = lebt noch, aber ohne echte Überlebenschance. Man pflegt jetzt palliativ: begleiten und die Schmerzen lindern, nicht mehr heilen. Schwarz = schon verstorben. Nicht verwechseln.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Wie verschaffst du dir Überblick und setzt Prioritäten am Sammelplatz?",
          rueckseite:
            "Erst ABCDE (A Atemweg, B Atmung, C Kreislauf, D Bewusstsein, E Entkleiden/Umgebung) — Lebensbedrohlichstes zuerst. Dann Sichtung in Farben: SK I rot = sofort (vital), SK II gelb = dringlich (schwer, stabil), SK III grün = kann warten (leicht/gehfähig), SK IV blau = ohne Überlebenschance (palliativ), schwarz = tot. Nach Dringlichkeit, nicht Lautstärke; grün weiter beobachten.",
          vorderseiteB1:
            "Wie bekommst du am Sammelplatz einen Überblick und setzt Prioritäten?",
          rueckseiteB1:
            "Erst ABCDE: A Atemweg, B Atmung, C Kreislauf, D Bewusstsein, E Entkleiden und Umgebung. Das Gefährlichste zuerst. Dann sichten in Farben. Rot (SK I) = sofort. Gelb (SK II) = dringlich (schwer, aber stabil). Grün (SK III) = kann warten (leicht, geht selbst). Blau (SK IV) = keine Überlebenschance, palliativ (nur noch Begleitung, keine Heilung). Schwarz = tot. Nach Dringlichkeit, nicht Lautstärke. Grün weiter beobachten.",
        },
      },
    },
    {
      stepId: "ce06-radtke-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      // Strukturierte Ersteinschätzung (ABCDE) anwenden → I.4 (LE4-Primär).
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.4.1 (Ersteinschätzung nach ABCDE-Notfallschema)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-radtke-abcde",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-06"],
      contentC1: {
        title: "Womit verschaffst du dir den Überblick?",
        body: "Du willst jeden Betroffenen schnell und strukturiert einschätzen. Welches Schema hilft dir dabei?",
        glossarBegriffe: ["ABCDE-Schema", "Ersteinschätzung", "Prioritätenliste"],
      },
      contentB1: {
        title: "Womit verschaffst du dir den Überblick?",
        body: "Du willst jeden Betroffenen schnell und geordnet einschätzen. Welches Schema hilft dir?",
        glossarBegriffe: ["ABCDE-Schema (= geordnete Reihenfolge der Prüfung)"],
      },
      question: {
        fragetext: "Welches Schema strukturiert deine Ersteinschätzung?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Das ABCDE-Notfallschema — Atemweg, Atmung, Kreislauf, Bewusstsein, Entkleiden/Umgebung — als Prioritätenliste vom Lebensbedrohlichsten zum weniger Dringlichen.",
            isCorrect: true,
            explanation:
              "Richtig. Zur Ersteinschätzung kritisch kranker oder verletzter Patienten anhand einer Prioritätenliste dient das ABCDE-Notfallschema (Airway, Breathing, Circulation, Disability, Exposure). Es ist für internistische und traumatologische Patienten geeignet und kann außerklinisch wie im Krankenhaus angewendet werden. Es arbeitet die lebensbedrohlichsten Probleme zuerst ab.",
            explanationB1:
              "Richtig. Das ABCDE-Schema ist deine Ersteinschätzung. Es prüft in fester Reihenfolge: Atemweg, Atmung, Kreislauf, Bewusstsein, Entkleiden/Umgebung. Zuerst kommt das Lebensbedrohlichste. Es passt überall — draußen und in der Klinik.",
          },
          {
            text: "Ich schätze rein nach dem Bauchgefühl ein und beginne bei der Person, die mir zufällig am nächsten steht oder am lautesten ruft, ganz ohne feste Reihenfolge.",
            isCorrect: false,
            explanation:
              "Falsch. In der Ausnahmesituation braucht es eine strukturierte, priorisierte Einschätzung — sonst werden lebensbedrohliche Probleme (z. B. verlegter Atemweg) übersehen. Das ABCDE-Schema gibt genau diese verlässliche Reihenfolge vor.",
            explanationB1:
              "Falsch. Nur nach Bauchgefühl übersieht man leicht das Lebensbedrohliche (z. B. einen blockierten Atemweg). Das ABCDE-Schema gibt eine sichere Reihenfolge.",
          },
          {
            text: "Ich messe bei jedem zuerst in Ruhe Blutdruck, Puls und Temperatur und dokumentiere alles vollständig, bevor ich zum Nächsten gehe.",
            isCorrect: false,
            explanation:
              "Falsch für diese Lage. Eine vollständige Einzelmessung samt Dokumentation bei jedem kostet in der MANV-Situation zu viel Zeit und verzögert die Hilfe für viele. Gefragt ist eine schnelle, priorisierte Ersteinschätzung (ABCDE) und Sichtung, nicht die komplette Einzelvitalzeichen-Erhebung.",
            explanationB1:
              "Falsch für diese Lage. Bei jedem alles zu messen und aufzuschreiben dauert zu lange und verzögert die Hilfe für viele. Jetzt zählt eine schnelle Einschätzung (ABCDE) und Sichtung.",
          },
        ],
      },
    },
    {
      stepId: "ce06-radtke-erm-02",
      phase: 3,
      stepType: "pflegewagen",
      bloomLevel: 4,
      // Sichten/Triage = Notfall-Handeln unter Prioritäten → I.4 (LE4-Primär).
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.7.1 (Triage/Sichtung, Sichtungskategorien SK I–IV)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-radtke-triage-sichtung",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-07", "F-08"],
      contentC1: {
        title: "Triage: Sichtungskategorien zuordnen",
        body: "Ordne jeden Betroffenen der richtigen Sichtungskategorie zu. SK I (rot) = vitale Bedrohung, sofort; SK II (gelb) = schwer, dringlich; SK III (grün) = leicht, nichtdringlich.",
        glossarBegriffe: ["Triage", "Sichtungskategorie", "SK I / II / III"],
      },
      contentB1: {
        title: "Triage: Sichtungskategorie zuordnen",
        body: "Ordne jeden Betroffenen der richtigen Sichtungskategorie (Kategorie nach Dringlichkeit) zu. Rot (SK I) = Lebensgefahr, sofort; Gelb (SK II) = schwer, dringlich; Grün (SK III) = leicht, kann warten.",
        glossarBegriffe: ["Triage (= Sichtung/Einteilung nach Dringlichkeit)"],
      },
      question: {
        fragetext: "Tippe einen Betroffenen an, dann die passende Sichtungskategorie.",
        pflegewagen: {
          fragetext: "Tippe einen Betroffenen an, dann die passende Sichtungskategorie.",
          fragetextB1: "Tippe einen Betroffenen an. Dann tippe auf die richtige Kategorie.",
          zonen: [
            {
              id: "sk1",
              label: "SK I — rot: Sofortbehandlung",
              labelB1: "Rot: sofort",
              beschreibung: "Vitale Bedrohung",
              beschreibungB1: "Lebensgefahr",
              variant: "primary",
            },
            {
              id: "sk2",
              label: "SK II — gelb: dringliche Behandlung",
              labelB1: "Gelb: dringlich",
              beschreibung: "Schwer verletzt/erkrankt",
              beschreibungB1: "Schwer, aber stabil",
              variant: "secondary",
            },
            {
              id: "sk3",
              label: "SK III — grün: nichtdringlich",
              labelB1: "Grün: kann warten",
              beschreibung: "Leicht verletzt/erkrankt",
              beschreibungB1: "Leicht verletzt",
              variant: "secondary",
            },
          ],
          items: [
            {
              id: "bewusstlos",
              label: "Bewohner reagiert nicht, ringt nach Luft, Lippen bläulich",
              labelB1: "Reagiert nicht, ringt nach Luft, blaue Lippen",
              icon: "HeartPulse",
              korrekteZoneId: "sk1",
              erklaerung:
                "SK I (rot): Bewusstlosigkeit mit bedrohter Atmung ist eine vitale Bedrohung — Sofortbehandlung. Der Atemweg/die Atmung (A/B im ABCDE) hat höchste Priorität.",
              erklaerungB1: "Rot (SK I): keine Reaktion und schwere Atemnot ist Lebensgefahr — sofort behandeln. Atemweg und Atmung (A und B im ABCDE) haben höchste Priorität.",
            },
            {
              id: "spritzende-blutung",
              label: "Starke, spritzende Blutung am Bein, wird zunehmend blass und schwach",
              labelB1: "Starke Blutung am Bein, wird blass und schwach",
              icon: "Droplet",
              korrekteZoneId: "sk1",
              erklaerung:
                "SK I (rot): Eine starke, spritzende (arterielle) Blutung mit beginnenden Schockzeichen ist vital bedrohlich — Sofortbehandlung, Blutung sofort stillen.",
              erklaerungB1: "Rot (SK I): starke Blutung mit Blässe/Schwäche ist Lebensgefahr — sofort die Blutung stillen.",
            },
            {
              id: "verbrennung-arm",
              label: "Großflächige Verbrennung am Arm, ansprechbar, starke Schmerzen, Kreislauf stabil",
              labelB1: "Große Verbrennung am Arm, wach, starke Schmerzen, Kreislauf stabil",
              icon: "Flame",
              korrekteZoneId: "sk2",
              erklaerung:
                "SK II (gelb): schwer verletzt, aber (noch) kreislaufstabil und ansprechbar — dringliche, aber nicht sofortige Behandlung. Rasche, gute Versorgung nötig, jedoch nach den vital Bedrohten.",
              erklaerungB1: "Gelb (SK II): schwer verletzt, aber wach und Kreislauf stabil — dringlich, kommt nach den Lebensgefährlichen.",
            },
            {
              id: "beinbruch",
              label: "Sichtbare Fehlstellung des Unterschenkels nach Sturz, wach, kreislaufstabil",
              labelB1: "Bein steht schief nach Sturz, wach, Kreislauf stabil",
              icon: "Bone",
              korrekteZoneId: "sk2",
              erklaerung:
                "SK II (gelb): eine schwere Verletzung (Fraktur) ohne vitale Bedrohung — dringliche Behandlung, aber der Betroffene ist stabil und kann kurz warten, bis die vital Bedrohten versorgt sind.",
              erklaerungB1: "Gelb (SK II): ein schwerer Bruch (Fraktur), aber Kreislauf stabil — dringlich, kann aber kurz nach den Lebensgefährlichen warten.",
            },
            {
              id: "schuerfwunde",
              label: "Läuft umher, voll orientiert, kleine Schürfwunde am Ellenbogen, hustet leicht",
              labelB1: "Läuft umher, wach, kleine Schürfwunde, hustet leicht",
              icon: "Footprints",
              korrekteZoneId: "sk3",
              erklaerung:
                "SK III (grün): gehfähig, voll orientiert, nur leichte Verletzung — nichtdringliche Behandlung. Wer selbst umhergeht („walking wounded“), ist in der Regel grün. Achtung: der leichte Husten kann ein frühes Rauchgaszeichen sein — grün heißt hier weiter beobachten, nicht abgeschlossen.",
              erklaerungB1: "Grün (SK III): läuft selbst umher, wach, nur kleine Wunde — kann warten. Aber der leichte Husten kann von Rauch kommen: weiter beobachten.",
            },
            {
              id: "rauchreizung-leicht",
              label: "Leichte Rauchgasreizung, spricht klar, kann selbstständig gehen, keine Atemnot",
              labelB1: "Etwas Rauch eingeatmet, spricht klar, geht allein, keine Atemnot",
              icon: "Wind",
              korrekteZoneId: "sk3",
              erklaerung:
                "SK III (grün): leichte Reizung ohne Atemnot, klar und gehfähig — nichtdringlich. Wichtig bleibt die Beobachtung (Rauchgas kann sich verzögert verschlechtern), aber die Priorität ist niedrig.",
              erklaerungB1: "Grün (SK III): nur leichte Reizung, spricht klar, geht allein — kann warten. Trotzdem weiter beobachten.",
            },
          ],
          begruendung:
            "Die Sichtung ordnet nach Dringlichkeit, nicht nach Lautstärke: vital Bedrohte (Atemweg/Atmung/starke Blutung) sind SK I (rot, sofort); schwer Verletzte mit stabilem Kreislauf SK II (gelb, dringlich); leicht Verletzte/Gehfähige SK III (grün, nichtdringlich). Zusätzlich gibt es SK IV (blau) für Betroffene ohne Überlebenschance (palliative Betreuung) und die Kennzeichnung schwarz für Tote — im Übungsbild sind hier alle sechs überlebend. So wird für möglichst viele das Beste erreicht.",
          begruendungB1:
            "Man sortiert nach Dringlichkeit, nicht nach Lautstärke: Lebensgefahr (Atmung/starke Blutung) = rot (sofort); schwer, aber stabil = gelb (dringlich); leicht/geht selbst = grün (kann warten). So hilft man möglichst vielen.",
        },
      },
    },
    {
      stepId: "ce06-radtke-erm-03",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 4,
      // Prinzip „sichten vor Einzelhilfe" + Eigenschutz anwenden → I.4 (LE4-Primär).
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.7.1/14.7.2 (Sichtung vor Einzelhilfe; Eigenschutz)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-radtke-sichtung-prinzip",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-08", "F-09"],
      contentC1: {
        title: "Das Prinzip dahinter",
        body: "Zwei Aussagen zur Logik der Sichtung. Bewerte sie.",
        glossarBegriffe: ["Sichtung", "Eigenschutz"],
      },
      contentB1: {
        title: "Das Prinzip dahinter",
        body: "Zwei Aussagen zur Logik der Sichtung. Bewerte sie.",
        glossarBegriffe: ["Sichtung (= Einteilung nach Dringlichkeit)"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Ich versorge sofort und vollständig den ersten Schwerverletzten, den ich sehe — auch wenn dadurch die Sichtung der anderen Betroffenen liegen bleibt.",
            isTrue: false,
            explanation:
              "Falsch. Erst werden alle Geschädigten gesichtet (= nach Dringlichkeit eingeteilt), dann wird geholfen. So wird sichergestellt, dass möglichst vielen geholfen wird und die Behandlung Einzelner die Hilfe für viele nicht verzögert. Der Grundsatz lautet: für möglichst viele das Beste.",
            explanationB1:
              "Falsch. Erst sichtet man alle Betroffenen — das heißt: nach Dringlichkeit einteilen. Dann erst hilfst du. So bekommen möglichst viele Menschen Hilfe. Der Grundsatz heißt: für möglichst viele das Beste.",
          },
          {
            statement:
              "Bevor ich mich einem Betroffenen nähere, achte ich auf meinen eigenen Schutz (Rauch, Einsturz-/Brandgefahr) — nur wer selbst handlungsfähig bleibt, kann anderen helfen.",
            isTrue: true,
            explanation:
              "Richtig. Eigenschutz geht vor — niemals den Eigenschutz vergessen. Wer sich selbst in Rauch, Feuer oder einsturzgefährdete (= vom Einsturz bedrohte) Bereiche begibt, wird schnell selbst zum Opfer und fällt als Helfer aus. Erst die eigene Sicherheit prüfen, dann helfen.",
            explanationB1:
              "Richtig. Der Eigenschutz (du schützt dich selbst) geht immer vor — vergiss das nie. Wer in Rauch, Feuer oder einsturzgefährdete Bereiche (Bereiche, die einstürzen können) geht, wird selbst zum Opfer. Dann kann er niemandem mehr helfen. Erst deine eigene Sicherheit prüfen, dann helfen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 16,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_RADTKE_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-radtke-uebergeben",
  phase: "uebergeben",
  titel: "Frau Radtke in Panik",
  titelB1: "Frau Radtke in Panik",
  kontext:
    "Frau Radtke steht zitternd am Sammelplatz, ruft nach ihrer Schwester und will zurück ins brennende Haus. Ein Reporter mit Kamera drängt sich heran und fragt dich nach Namen und Zustand der Bewohner. Du kümmerst dich um Frau Radtke.",
  kontextB1:
    "Frau Radtke steht zitternd draußen, ruft nach ihrer Schwester und will zurück ins Haus. Ein Reporter mit Kamera fragt dich nach Namen und Zustand der Bewohner. Du kümmerst dich um Frau Radtke.",
  kernSteps: [
    {
      // Wissens-Tab C (curriculum-first, KB III.2): psychische Erste Hilfe + dein Part im System (Einsatzleitung/KIT,
      // keine Auskunft an Dritte). VOR der Anwendung ueb-01. Literatur-belegt (F-10/F-11, Pflege heute Kap. 14.7.3)
      // + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-radtke-ueb-00b-psych-erste-hilfe",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // Zusammenarbeit im Einsatzsystem (Einsatzleitung, KIT/Seelsorge) + Rechtsrahmen Auskunft → III.2 (LE4-Set).
      kompetenzbereich: "III.2",
      quellen: ["Pflege heute 2019, Kap. 14.7.3"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-radtke-psych-erste-hilfe-wissen",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      // F-10 (psychische Erste Hilfe: abschirmen, Augenhöhe, Namen) · F-11 (keine Auskunft an Dritte, KIT/Notfallseelsorge).
      kernfaktId: ["F-10", "F-11"],
      transition: "Setz das jetzt bei Frau Radtke um.",
      contentC1: {
        title: "Psychische Erste Hilfe — und dein Part im System",
        body: "",
        glossarBegriffe: ["psychische Erste Hilfe", "Krisenintervention", "KIT"],
      },
      inlineWissen: {
        bausteinRef: "katastrophe-triage-krise-psych-erste-hilfe",
        themaPrimaer: "katastrophe-triage-krise",
        storyAufhaenger:
          "Frau Radtke steht zitternd am Sammelplatz, will zurück ins brennende Haus — und ein Reporter drängt sich mit der Kamera heran und fragt dich nach Namen. Zwei Dinge zugleich: der verängstigte Mensch und dein Platz im großen Ablauf.",
        storyAufhaengerB1:
          "Frau Radtke steht zitternd am Sammelplatz. Sie will zurück ins brennende Haus. Und ein Reporter drängt sich mit der Kamera heran. Er fragt dich nach Namen. Zwei Dinge auf einmal: der verängstigte Mensch und dein Platz im großen Ablauf.",
        kerntext:
          "Für Menschen wie Frau Radtke leistest du psychische Erste Hilfe. Das heißt: Betroffene abschirmen und vor Schaulustigen und Presse schützen, auf Augenhöhe gehen, Blickkontakt herstellen, sich mit Namen und der eigenen Funktion vorstellen und den Menschen ruhig mit Namen ansprechen. Bei einer schwerhörigen, verwirrten Frau ist besonders wichtig, deutlich von vorne zu sprechen, damit sie von den Lippen lesen kann, jede Berührung vorher anzukündigen und einfache Orientierung zu geben. Ziel ist, sie aus der hilflosen Opferrolle herauszuholen und ihr wieder ein Stück Handlungsfähigkeit zurückzugeben.\n\nGleichzeitig kennst du deinen Platz im System. Auskünfte über Betroffene gibst du nicht an Dritte — schon gar nicht an die Presse; dazu ist allein die Einsatzleitung berechtigt (Persönlichkeitsrecht, Datenschutz, Fürsorge). Und für die tiefergehende psychische Betreuung bist nicht du zuständig, sondern speziell ausgebildete Kräfte: das Kriseninterventionsteam (KIT) und die Notfallseelsorge, die auf solche Belastungen geschult sind. Dein Part ist die erste Zuwendung und das Weiterleiten an die Richtigen.",
        kerntextB1:
          "Für Menschen wie Frau Radtke leistest du psychische Erste Hilfe. Das heißt: Du schirmst die Betroffenen ab und schützt sie vor Schaulustigen und Presse. Du gehst auf Augenhöhe und suchst Blickkontakt. Du stellst dich mit Namen und deiner Aufgabe vor. Und du sprichst den Menschen ruhig mit Namen an. Frau Radtke hört schlecht und ist verwirrt. Deshalb ist wichtig: Sprich deutlich von vorne, damit sie von den Lippen lesen kann. Kündige jede Berührung vorher an. Und gib ihr einfache Orientierung. Das Ziel ist: Sie soll aus der hilflosen Opferrolle herauskommen und wieder ein Stück selbst handeln können.\n\nGleichzeitig kennst du deinen Platz im System. Auskünfte über Betroffene gibst du nicht an Dritte. An die Presse schon gar nicht. Das darf nur die Einsatzleitung. Der Grund sind das Persönlichkeitsrecht, der Datenschutz und die Fürsorge. Für die tiefere psychische Betreuung bist nicht du zuständig. Dafür gibt es speziell ausgebildete Kräfte: das Kriseninterventionsteam (kurz KIT) und die Notfallseelsorge. Sie sind für solche Belastungen geschult. Dein Part ist die erste Zuwendung. Und du leitest die Menschen an die Richtigen weiter.",
        faustregel:
          "Psychische Erste Hilfe: abschirmen, auf Augenhöhe, mit Namen ruhig ansprechen, einfache Orientierung. Keine Auskunft an Dritte/Presse — nur die Einsatzleitung. Für die tiefe Betreuung: KIT/Notfallseelsorge informieren.",
        faustregelB1:
          "Psychische Erste Hilfe: abschirmen, auf Augenhöhe gehen, ruhig mit Namen ansprechen, einfache Orientierung geben. Keine Auskunft an Dritte oder Presse — nur die Einsatzleitung. Für die tiefe Betreuung: KIT und Notfallseelsorge informieren.",
        spektrum: [
          {
            patientName: "Der verängstigte Mensch",
            situationsId: "ls-radtke-brand",
            hauptfaktor: "psychische Erste Hilfe",
            kurzbeschreibung:
              "Abschirmen, auf Augenhöhe gehen, mit Namen ansprechen, Orientierung geben — raus aus der Opferrolle.",
            kurzbeschreibungB1:
              "Abschirmen, auf Augenhöhe gehen, mit Namen ansprechen, Orientierung geben. Raus aus der Opferrolle.",
          },
          {
            patientName: "Der Reporter",
            hauptfaktor: "keine Auskunft",
            kurzbeschreibung:
              "Über Betroffene gibt nur die Einsatzleitung Auskunft — die Pflege nicht, erst recht nicht der Presse.",
            kurzbeschreibungB1:
              "Über Betroffene gibt nur die Einsatzleitung Auskunft. Die Pflege nicht, und der Presse schon gar nicht.",
          },
          {
            patientName: "Die tiefe Aufarbeitung",
            hauptfaktor: "KIT / Seelsorge",
            kurzbeschreibung:
              "Spezialisierte Kräfte (Kriseninterventionsteam, Notfallseelsorge) übernehmen die weitere psychische Betreuung.",
            kurzbeschreibungB1:
              "Speziell geschulte Kräfte (Kriseninterventionsteam, Notfallseelsorge) übernehmen die weitere psychische Betreuung.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Frau Radtke in Panik, ein Reporter fragt nach Namen — was tust du, was nicht?",
          rueckseite:
            "Psychische Erste Hilfe: abschirmen (auch vor Presse), auf Augenhöhe, mit Namen ruhig ansprechen, bei Schwerhörigkeit von vorne sprechen (Lippenlesen), einfache Orientierung. KEINE Auskunft an Dritte/Presse — nur die Einsatzleitung. Weitere Betreuung: KIT/Notfallseelsorge informieren.",
          vorderseiteB1:
            "Frau Radtke in Panik, ein Reporter fragt nach Namen. Was tust du, was nicht?",
          rueckseiteB1:
            "Psychische Erste Hilfe: abschirmen (auch vor der Presse), auf Augenhöhe gehen, ruhig mit Namen ansprechen. Bei Schwerhörigkeit von vorne sprechen (Lippenlesen). Einfache Orientierung geben. KEINE Auskunft an Dritte oder Presse — nur die Einsatzleitung. Weitere Betreuung: KIT und Notfallseelsorge informieren.",
        },
      },
    },
    {
      stepId: "ce06-radtke-ueb-01",
      phase: 4,
      stepType: "branching",
      bloomLevel: 4,
      // Kommunikation/psychische Erste Hilfe am Menschen in der Krise → II.1 (LE4-Set).
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.7.3 (Psychische Erste Hilfe, Krisenintervention, KIT, keine Auskunft an Dritte)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-radtke-krisenintervention",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-10", "F-11"],
      contentC1: {
        title: "Psychische Erste Hilfe",
        body: "Frau Radtke ist panisch und orientierungslos, der Reporter drängt. Wie handelst du?",
        glossarBegriffe: ["psychische Erste Hilfe", "Krisenintervention", "KIT", "Notfallseelsorge"],
      },
      contentB1: {
        title: "Psychische Erste Hilfe",
        body: "Frau Radtke ist panisch und orientierungslos, der Reporter drängt. Wie handelst du?",
        glossarBegriffe: ["Krisenintervention (= kurze Hilfe nach einem schlimmen Ereignis)", "KIT (= Kriseninterventionsteam)"],
      },
      question: {
        fragetext: "Frau Radtke in Panik, ein Reporter drängt — wie handelst du?",
        branchingOptions: [
          {
            text: "Ich schirme Frau Radtke ab, gehe auf Augenhöhe (Blickkontakt, damit sie von den Lippen lesen kann), spreche sie deutlich und ruhig mit Namen an und gebe einfache Orientierung; dem Reporter gebe ich keine Auskunft und informiere das Kriseninterventionsteam/die Seelsorge.",
            isCorrect: true,
            feedback:
              "Genau richtig. Psychische Erste Hilfe heißt: Betroffene abschirmen und vor Gaffern (auch der Presse) schützen, Blickkontakt herstellen und auf Augenhöhe gehen, sich mit Namen vorstellen und den Menschen mit Namen ansprechen. Bei der schwerhörigen Frau Radtke besonders wichtig: sie deutlich und ruhig von vorne ansprechen (Lippenlesen), Berührung ankündigen. Auskunft an Dritte gibst du nicht — dazu ist nur die Einsatzleitung berechtigt. Für die weitere Betreuung informierst du das KIT/die Notfallseelsorge. Frau Radtke wird ruhiger, sucht deinen Blick und lässt sich an die Hand nehmen und wegführen. Ziel: sie kommt aus der passiven Opferrolle heraus und gewinnt wieder Handlungsfähigkeit.",
            feedbackB1:
              "Genau richtig. Psychische Erste Hilfe: Frau Radtke abschirmen (auch vor der Presse), auf Augenhöhe gehen, ruhig mit Namen ansprechen, einfache Orientierung geben. Dem Reporter sagst du nichts — das darf nur die Einsatzleitung. Für die weitere Hilfe informierst du das KIT/die Seelsorge.",
          },
          {
            text: "Ich sage dem Reporter kurz, wer sie ist und was passiert ist, damit er zufrieden ist, und lasse Frau Radtke so lange allein warten.",
            isCorrect: false,
            feedback:
              "Falsch. Auskunft an Dritte — erst recht an die Presse — ist tabu; dazu ist nur die Einsatzleitung berechtigt (Persönlichkeitsrecht, Datenschutz, Fürsorge). Und die panische, demenzkranke Frau Radtke allein zu lassen, verschärft ihre Krise: Sie bleibt zurück, ihre Panik eskaliert, sie will zurück ins brennende Haus. Richtig ist: sie abschirmen und zuwenden, dem Reporter keine Auskunft geben.",
            feedbackB1:
              "Falsch. Der Presse gibst du keine Auskunft — das darf nur die Einsatzleitung. Und Frau Radtke allein zu lassen, macht ihre Panik schlimmer. Richtig: sie schützen und ihr zuwenden.",
          },
          {
            text: "Ich erkläre Frau Radtke sachlich und ausführlich die Brandursache und die Einsatztaktik, damit sie die Lage vollständig versteht und sich beruhigt.",
            isCorrect: false,
            feedback:
              "Gut gemeint, aber unpassend. Ein panischer, demenzkranker Mensch kann komplexe Sacherklärungen nicht aufnehmen — das überfordert zusätzlich: Frau Radtke wirkt noch verwirrter und wendet sich ab. Psychische Erste Hilfe setzt auf Schutz, Ruhe, Ansprache auf Augenhöhe und einfache Orientierung, nicht auf ausführliche Erklärungen. Für die tiefere Aufarbeitung ist das KIT zuständig.",
            feedbackB1:
              "Gut gemeint, aber falsch. Eine ausführliche Erklärung überfordert die panische, demenzkranke Frau Radtke. Sie braucht Schutz, Ruhe und einfache Worte — nicht viele Details. Für mehr ist das KIT da.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_RADTKE_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-radtke-reflektieren",
  phase: "reflektieren",
  titel: "Nach der Nacht",
  titelB1: "Nach der Nacht",
  kontext:
    "Der Brand ist gelöscht, alle Bewohner sind versorgt oder verlegt. Du bist erschöpft, dein Herz rast noch, die Bilder gehen dir nicht aus dem Kopf. Du denkst über die Nacht nach.",
  kontextB1:
    "Der Brand ist gelöscht, alle Bewohner sind versorgt. Du bist erschöpft, dein Herz rast noch, die Bilder bleiben im Kopf. Du denkst über die Nacht nach.",
  kernSteps: [
    {
      stepId: "ce06-radtke-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      // Reflexion des eigenen Funktionierens/der eigenen Belastung → V.2 (LE4-Set; I.2 war nicht im Set).
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 14.7.2/14.7.3 (Eigenschutz/eigenes Funktionieren; psychische Folgeschäden)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-radtke-eigenes-funktionieren",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-09", "F-12"],
      contentC1: {
        title: "Dein eigenes Funktionieren",
        body: "Reflektiere deine Rolle in der Krise: dein Funktionieren, deine Grenzen, deine eigene Belastung.",
        glossarBegriffe: ["Eigenschutz", "Belastung", "posttraumatische Belastungsstörung"],
      },
      contentB1: {
        title: "Dein eigenes Funktionieren",
        body: "Denke über deine Rolle in der Krise nach: dein Funktionieren, deine Grenzen, deine eigene Belastung.",
        glossarBegriffe: ["Eigenschutz (= dich selbst schützen)", "Belastung"],
      },
      question: {
        fragetext: "Reflektiere dein eigenes Funktionieren und deine Belastung in der Krisensituation.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Warum ist das „Funktionieren“ und der Eigenschutz von Pflegefachkräften in Krisen- und Katastrophensituationen so wichtig? 2) Wo lagen in dieser Nacht deine eigenen Grenzen (körperlich, emotional)? 3) Welche Belastungsreaktionen bemerkst du jetzt bei dir (z. B. Herzrasen, aufdrängende Bilder) — und warum sind psychische Folgeschäden ein reales Risiko auch für Einsatzkräfte? 4) Was leitest du daraus für dich ab?",
          placeholder:
            "Das Funktionieren und der Eigenschutz sind wichtig, weil … Meine Grenzen lagen … Bei mir bemerke ich … Daraus leite ich ab …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler die Bedeutung des eigenen Funktionierens/Eigenschutzes (nur wer selbst handlungsfähig bleibt, kann helfen), reflektiert eigene Grenzen und Belastungsreaktionen und begreift, dass psychische Folgeschäden bis zur PTBS auch Einsatzkräfte treffen und deshalb Aufarbeitung/Unterstützung nötig ist? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend, gerade bei geschilderter eigener Belastung achtsam.",
        },
      },
    },
    {
      stepId: "ce06-radtke-ref-02",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      // Supervision zur eigenen Fassung diskutieren = Reflexion des eigenen Handelns → V.2 (LE4-Set).
      kompetenzbereich: "V.2",
      quellen: [
        "Pflege heute 2019, Kap. 14.7.3 (professionelle Aufarbeitung nach Großschadensereignis)",
        "Pflege heute 2019, Kap. 16.4.4 (Supervision)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-radtke-supervision",
      tag: "pflege",
      themaPrimaer: "katastrophe-triage-krise",
      kernfaktId: ["F-12"],
      contentC1: {
        title: "Supervision — Erhalt der eigenen Fassung",
        body: "Diskutiere, wie Supervision nach einem solchen Einsatz helfen kann, die eigene Fassung zu bewahren. Nenne Pro-Argumente und mögliche Grenzen.",
        glossarBegriffe: ["Supervision", "Debriefing", "Aufarbeitung"],
      },
      contentB1: {
        title: "Supervision — die eigene Fassung bewahren",
        body: "Diskutiere, wie Supervision nach so einem Einsatz helfen kann, die eigene Fassung zu bewahren. Nenne Vorteile und mögliche Grenzen.",
        glossarBegriffe: ["Supervision (= begleitetes Gespräch über die Arbeit)"],
      },
      question: {
        fragetext: "Diskutiere Supervision als Mittel zum Erhalt der eigenen Fassung — Pro-Argumente und Grenzen.",
        musterantwort:
          "Nach einem Großschadensereignis drohen psychische Folgeschäden bis zur posttraumatischen Belastungsstörung — nicht nur bei Betroffenen, sondern auch bei Einsatzkräften. Deshalb wird allen Beteiligten eine professionelle Aufarbeitung angeboten. Supervision bietet dafür einen geschützten zeitlichen Rahmen und die Hilfe eines speziell ausgebildeten Gesprächsleiters, um über die eigene berufliche Rolle und Belastung nachzudenken. Pro-Argumente: Belastendes wird aussprechbar und einordbar, Schuld- und Ohnmachtsgefühle werden relativiert, das Team stärkt sich gegenseitig, und Frühwarnzeichen (z. B. anhaltende Bilder, Schlafstörungen) können erkannt und weitergeleitet werden — das schützt die eigene Fassung und die Berufsfähigkeit. Grenzen/Bedenken: Supervision ersetzt keine Behandlung einer manifesten PTBS (dann braucht es therapeutische Hilfe); sie wirkt nur, wenn sie freiwillig, vertraulich und in einem sicheren Rahmen stattfindet, und wird im Alltag oft zu selten angeboten. Fazit: Supervision ist ein sinnvolles, aber ergänzendes Mittel — bei schweren Reaktionen zusätzlich gezielte fachliche Unterstützung.",
        bewertungskriterien: [
          "Begründet den Bedarf: psychische Folgeschäden/PTBS drohen auch Einsatzkräften → Aufarbeitung nötig",
          "Erklärt Supervision korrekt (geschützter Rahmen, ausgebildete Gesprächsleitung, Reflexion der eigenen Rolle/Belastung)",
          "Nennt Pro-Argumente UND Grenzen (ersetzt keine Therapie bei manifester PTBS; Freiwilligkeit/Vertraulichkeit)",
          "Sandwich-Ton, wertschätzend, nicht bevormundend",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};
