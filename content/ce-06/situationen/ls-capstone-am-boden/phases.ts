// CE-06 Differenzierungs-Capstone „Jemand liegt am Boden — was ist es?“
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt (INTERLEAVING/RETRIEVAL über LE1): K2 (lebenserhaltende Sofortmaßnahmen/HKS), K3 (Synkope/Hypoglykämie/
//   Apoplex/Krampfanfall), K4 (organische Erregung), E1 (Reflexion). KEIN neuer Kernfakt.
// Grounding: notfallassessment.md (F-01 ABCDE, F-03 SSL, F-07 SBAR) + reanimation-bls.md (HKS) +
//   neurologische-akutsituationen.md (BZ-first, Apoplex, Krampfanfall). Wiederbegegnung → Wagner + Ríos.
//
// 2 SYNTHESE-TABS (curriculum-first, kein Antwort-Step, Abstandstest 0):
//  - Tab 1 „Der erste Blick: Kreislauf da oder nicht?“ (Ph.1) — notfallassessment F-01/F-03, Wiederbegegnung→Wagner.
//  - Tab 2 „Kreislauf da — erst Blutzucker, dann unterscheiden“ (Ph.1) — neuro F-01/F-08/F-10/F-13, Wiederbegegnung→Ríos.
// Retrieval-Kern in Ph.3: drei interleavte „liegt am Boden“-Fälle (HKS · Apoplex · Krampfanfall), je andere Reaktion.
// KB-Marker: I.4 (primär, Akut-Handeln) · II.1 (SBAR) · V.2 (Reflexion=E1).
// Bewusst application-heavy (Capstone) → niedriger Tab-Korridor ist by-design (wie Ríos; „Verteilung > Verhältnis“).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_PETROVA_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-petrova-erkennen",
  phase: "erkennen",
  titel: "Sie sackt zu Boden",
  titelB1: "Sie sackt zu Boden",
  kontext:
    "Frau Petrova steht im Aufenthaltsraum auf, wird blass und gleitet langsam zu Boden. Du bist in Sekunden bei ihr. Sie liegt auf dem Rücken, die Augen halb geschlossen, und reagiert auf deine erste Ansprache nur schwach. Andere Bewohner schauen erschrocken zu.",
  kontextB1:
    "Frau Petrova wird blass und sackt im Aufenthaltsraum zu Boden. Du bist sofort bei ihr. Sie liegt auf dem Rücken und reagiert nur schwach auf deine Ansprache.",
  kernSteps: [
    {
      stepId: "ce06-petrova-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.4.1 (strukturierte Ersteinschätzung/ABCDE); Kap. 14.3.1 (Reaktion/Atmung prüfen)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-petrova-erster-check",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-01"],
      contentC1: {
        title: "Dein allererster Schritt",
        body: "Jemand liegt plötzlich am Boden und reagiert kaum. Bevor du überlegst, WAS es ist — was prüfst du als Allererstes?",
        glossarBegriffe: ["Ersteinschätzung", "ABCDE"],
      },
      contentB1: {
        title: "Dein allererster Schritt",
        body: "Jemand liegt am Boden und reagiert kaum. Bevor du überlegst, was es ist — was prüfst du zuerst?",
        glossarBegriffe: ["Ersteinschätzung"],
      },
      question: {
        fragetext: "Was prüfst du als Allererstes?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich prüfe zuerst das Wichtigste nach fester Reihenfolge: Reagiert sie auf Ansprache und Rütteln? Und atmet sie normal? — davon hängt alles Weitere ab.",
            isCorrect: true,
            explanation:
              "Richtig. Jede Ersteinschätzung folgt einer festen Prioritätenliste (Bewusstsein/Atemweg, Atmung, Kreislauf — ABCDE). Erst wenn du weißt, ob sie reagiert und ob sie normal atmet, entscheidet sich der ganze weitere Weg: reanimieren, stabile Seitenlage oder weiter differenzieren. Diagnosen wie 'Schlaganfall' oder 'Kreislauf' kommen später — nie vor dem ersten strukturierten Check.",
            explanationB1:
              "Richtig. Zuerst das Wichtigste in fester Reihenfolge prüfen: Reagiert sie? Atmet sie normal? Davon hängt alles ab — reanimieren, stabile Seitenlage oder weiter unterscheiden. Die Diagnose kommt später.",
          },
          {
            text: "Ich lege sie sofort auf die Seite und hole ein Glas Zuckerwasser — das hilft bei Schwäche eigentlich immer.",
            isCorrect: false,
            explanation:
              "Zu schnell gehandelt, ohne zu prüfen. Ob eine stabile Seitenlage richtig ist, weißt du erst, wenn du Bewusstsein und Atmung geprüft hast. Und einem Menschen, der nur schwach reagiert, gibst du nichts zu trinken (Aspirationsgefahr) — erst recht nicht 'auf Verdacht'. Zuerst strukturiert prüfen, dann handeln.",
            explanationB1:
              "Zu schnell. Ob die stabile Seitenlage passt, weißt du erst nach dem Prüfen von Bewusstsein und Atmung. Und einem, der kaum reagiert, gibst du nichts zu trinken (er kann sich verschlucken). Erst prüfen, dann handeln.",
          },
          {
            text: "Ich schaue zuerst auf ihr Gesicht: Hängt ein Mundwinkel? Dann ist es ein Schlaganfall, und ich rufe sofort den Schlaganfall-Alarm.",
            isCorrect: false,
            explanation:
              "Zu früh auf eine Diagnose festgelegt. Ein hängender Mundwinkel kann auf einen Schlaganfall hindeuten — aber bevor du differenzierst, musst du wissen, ob überhaupt Reaktion und normale Atmung vorhanden sind. Bei fehlender normaler Atmung zählt jede Sekunde für die Reanimation, nicht für einen Schlaganfall-Alarm. Erst der strukturierte Grundcheck, dann die Ursachensuche.",
            explanationB1:
              "Zu früh auf eine Diagnose festgelegt. Erst musst du wissen, ob sie reagiert und normal atmet. Ohne normale Atmung zählt jede Sekunde für die Reanimation. Zuerst der Grundcheck, dann die Ursache.",
          },
        ],
      },
    },
    {
      // Synthese-Tab 1 (curriculum-first): der universelle erste Blick + die Gabelung.
      // notfallassessment F-01 (ABCDE-Prioritäten) + F-03 (bewusstlos+atmet → SSL). Der HKS-Ast
      // läuft über die Wiederbegegnung zu Wagner (dort autoritativ gegroundet). Kein Antwort-Step.
      stepId: "ce06-petrova-erk-01b-erster-blick",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.1/14.4.1"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-petrova-erster-blick",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-01", "F-03"],
      transition: "Prüf es jetzt bei Frau Petrova durch.",
      contentC1: {
        title: "Der erste Blick: Kreislauf da oder nicht?",
        body: "",
        glossarBegriffe: ["ABCDE", "stabile Seitenlage", "Schnappatmung"],
      },
      inlineWissen: {
        bausteinRef: "notfallassessment-erster-blick",
        themaPrimaer: "notfallassessment",
        themenSekundaer: ["reanimation-bls"],
        storyAufhaenger:
          "Jemand liegt am Boden — das kann fast alles bedeuten. Und doch beginnt jede richtige Reaktion mit demselben, immer gleichen ersten Blick. Er sortiert in Sekunden, welchen von drei Wegen du gehst.",
        kerntext:
          "Jede Ersteinschätzung folgt einer festen Reihenfolge nach Prioritäten (dem ABCDE-Gedanken): zuerst das, was am schnellsten tötet. Für den allerersten Blick heißt das zwei Fragen, beide in Sekunden beantwortet: Reagiert der Mensch auf Ansprache und Rütteln? Und hebt sich der Brustkorb ruhig und regelmäßig?\n\nAus den Antworten ergeben sich drei Wege. Reagiert er nicht UND atmet er nicht normal, behandelst du ihn als Herz-Kreislauf-Stillstand: Rettungskette, sofort Herzdruckmassage — genau der Weg, den du bei Herrn Wagner gegangen bist. (Erfahrenes Fachpersonal darf zeitgleich zur Atemkontrolle höchstens 10 Sekunden den Karotispuls tasten — aber ohne Zeit zu verlieren; im Zweifel sofort drücken.) Ist er bewusstlos, atmet aber normal, bringst du ihn in die stabile Seitenlage, damit die Atemwege frei bleiben, und überwachst ihn. Reagiert er dagegen — und sei es nur schwach —, dann läuft sein Kreislauf; jetzt geht es nicht ums Wiederbeleben, sondern ums Unterscheiden, was dahintersteckt.\n\nEin Stolperstein bleibt wichtig: Schnappatmung — einzelne, ruckartige Atemzüge mit langen Pausen — zählt NICHT als normale Atmung. Wer sie dafür hält, verpasst den Stillstand.",
        faustregel:
          "Zwei Fragen zuerst: Reagiert er? Atmet er normal? Beides nein = reanimieren. Bewusstlos, aber atmet = stabile Seitenlage. Reagiert = Kreislauf da → jetzt unterscheiden. Schnappen ist kein Atmen.",
        spektrum: [
          {
            patientName: "Keine Reaktion, keine normale Atmung",
            hauptfaktor: "Herz-Kreislauf-Stillstand",
            kurzbeschreibung:
              "Rettungskette, sofort Herzdruckmassage. Schnappatmung zählt nicht als Atmung.",
          },
          {
            patientName: "Bewusstlos, atmet aber normal",
            hauptfaktor: "Atemwege sichern",
            kurzbeschreibung:
              "Stabile Seitenlage, damit nichts in die Atemwege läuft, und engmaschig überwachen.",
          },
          {
            patientName: "Reagiert (auch schwach)",
            hauptfaktor: "Kreislauf da",
            kurzbeschreibung:
              "Nicht reanimieren — jetzt differenzieren: erst Blutzucker, dann die Zeichen deuten.",
          },
        ],
        wiederbegegnung: {
          basisBausteinId: "reanimation-bls-hks-erkennen",
          basisPatient: "Herr Wagner",
          vertiefung:
            "Bei Herrn Wagner war die Antwort auf beide Fragen Nein — er reagierte nicht und atmete nicht normal. Das war der Stillstand, da wird sofort reanimiert. Hier bei Frau Petrova (und in den meisten dieser Fälle) ist der Kreislauf DA. Derselbe erste Blick, aber ein ganz anderer Weg: nicht reanimieren, sondern unterscheiden.",
        },
        karteikarte: {
          vorderseite:
            "Jemand liegt plötzlich am Boden — welche zwei Fragen entscheiden über deinen ersten Weg, und welche drei Wege gibt es?",
          rueckseite:
            "Fragen: Reagiert er? Atmet er normal? → (1) beides nein = Herz-Kreislauf-Stillstand, reanimieren; (2) bewusstlos, atmet = stabile Seitenlage; (3) reagiert = Kreislauf da, differenzieren (erst Blutzucker). Schnappatmung ist keine normale Atmung.",
        },
      },
    },
    {
      stepId: "ce06-petrova-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (keine Reanimation bei erhaltener Atmung/Reaktion); Kap. 26.6.5 (Blutzucker zuerst)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-petrova-fork-anwenden",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      // „erst Blutzucker messen" = F-04 (Hypoglykämie imitiert Schlaganfall, BZ sofort), NICHT F-01 (Synkope-Def).
      kernfaktId: ["F-04"],
      contentC1: {
        title: "Zurück zu Frau Petrova",
        body: "Du sprichst sie an und rüttelst: Sie stöhnt und bewegt den Kopf, atmet ruhig und regelmäßig. Welchen Weg gehst du?",
        glossarBegriffe: ["Blutzuckermessung", "stabile Seitenlage"],
      },
      contentB1: {
        title: "Zurück zu Frau Petrova",
        body: "Du sprichst sie an und rüttelst: Sie stöhnt, bewegt den Kopf und atmet ruhig. Welchen Weg gehst du?",
        glossarBegriffe: ["Blutzucker messen"],
      },
      question: {
        fragetext: "Frau Petrova reagiert schwach und atmet normal — was tust du?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Sie reagiert und atmet — kein Herz-Kreislauf-Stillstand, also keine Reanimation. Ich sichere sie, messe als Erstes den Blutzucker und beobachte, wie sich ihr Bewusstsein entwickelt.",
            isCorrect: true,
            explanation:
              "Richtig. Reaktion und normale Atmung bedeuten: Der Kreislauf läuft — reanimiert wird nicht. Jetzt beginnt das Unterscheiden, und der erste, oft vergessene Handgriff ist die Blutzuckermessung, weil eine Unterzuckerung fast alles imitieren kann. Parallel Lagerung sichern und Bewusstsein/Atmung engmaschig beobachten.",
            explanationB1:
              "Richtig. Sie reagiert und atmet — also kein Stillstand, keine Reanimation. Jetzt unterscheiden: zuerst den Blutzucker messen (Unterzuckerung sieht aus wie vieles) und sie weiter beobachten.",
          },
          {
            text: "Zur Sicherheit beginne ich trotzdem mit der Herzdruckmassage — schaden kann das ja nicht.",
            isCorrect: false,
            explanation:
              "Doch, das schadet. Eine Herzdruckmassage bei einem Menschen mit tastbarem Kreislauf und normaler Atmung kann Verletzungen verursachen und ist nicht indiziert. Reanimiert wird nur bei fehlender Reaktion UND fehlender normaler Atmung. Frau Petrova reagiert und atmet — hier wird nicht gedrückt, sondern differenziert.",
            explanationB1:
              "Doch, das schadet. Herzdruckmassage bei jemandem, der atmet und reagiert, kann verletzen und ist falsch. Reanimiert wird nur ohne Reaktion UND ohne normale Atmung. Hier: nicht drücken, sondern unterscheiden.",
          },
          {
            text: "Ich warte einfach ab — sie wird schon wieder, das war bestimmt nur der Kreislauf.",
            isCorrect: false,
            explanation:
              "Zu passiv. Vielleicht war es 'nur' eine Synkope — aber das weißt du noch nicht. Bloßes Abwarten überspringt die Blutzuckermessung und die Beobachtung, mit denen du eine Unterzuckerung oder ein ernsteres Ereignis erkennst. Aktiv sichern, messen und beobachten, bis klar ist, was es war.",
            explanationB1:
              "Zu passiv. Vielleicht war es nur eine Ohnmacht — aber das weißt du noch nicht. Du misst den Blutzucker und beobachtest sie, statt nur abzuwarten.",
          },
        ],
      },
    },
    {
      // Synthese-Tab 2 (curriculum-first): Kreislauf da → erst Blutzucker → die vier Bilder unterscheiden.
      // neuro F-01 (BZ zuerst) + F-08 (Apoplex) + F-10 (Grand mal) + F-13 (Differenzial). Wiederbegegnung→Ríos.
      stepId: "ce06-petrova-erk-02b-differenzieren",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 26.6.5 / 37.6 / 37.8 (Hypoglykämie/Apoplex/Krampfanfall)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-petrova-differenzieren",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      // F-01 Synkope · F-04 „erst Blutzucker" (imitiert alles) · F-08 Apoplex · F-10 Krampfanfall · F-13 Differenzial.
      kernfaktId: ["F-01", "F-04", "F-08", "F-10", "F-13"],
      transition: "Bei Frau Petrova ist der Blutzucker gleich da.",
      contentC1: {
        title: "Kreislauf da — erst Blutzucker, dann unterscheiden",
        body: "",
        glossarBegriffe: ["Hypoglykämie", "Apoplex (Schlaganfall)", "Krampfanfall", "Synkope"],
      },
      inlineWissen: {
        bausteinRef: "neurologische-akutsituationen-capstone-differenzieren",
        themaPrimaer: "neurologische-akutsituationen",
        themenSekundaer: ["notfallassessment", "psychische-akutsituationen"],
        storyAufhaenger:
          "Der Kreislauf läuft, du reanimierst nicht — jetzt kommt der schwierigere Teil: Was IST es? Vier Bilder sehen sich zum Verwechseln ähnlich, und jedes braucht eine andere erste Reaktion.",
        kerntext:
          "Über allem steht ein Handgriff: Sobald der Kreislauf da ist, misst du zuerst den Blutzucker. Eine Unterzuckerung imitiert fast alles — Verwirrtheit, Ausfälle, sogar einen Schlaganfall — und ist die eine Ursache, die du sofort beheben kannst. Erst danach deutest du die Zeichen.\n\nWar der Mensch nur kurz weg und kommt von allein zurück, ohne bleibende Ausfälle, war es meist eine Synkope, eine kurze Ohnmacht. Du legst ihn hin, lagerst die Beine hoch und klärst die Ursache — denn eine Ohnmacht aus dem Herzen kann gefährlich sein.\n\nZeigt sich ein plötzlicher, einseitiger und bleibender Ausfall — ein hängender Mundwinkel, ein kraftloser Arm, verwaschene Sprache —, dann behandelst du es als Schlaganfall: sofort Arzt, jede Minute zählt.\n\nStürzt jemand und zuckt am ganzen Körper, ist es ein Krampfanfall: Du schützt ihn vor Verletzungen, steckst NICHTS in den Mund und merkst dir die Uhrzeit.\n\nUnd wenn jemand erregt und verwirrt ist, womöglich mit Fieber, denkst du an eine körperliche Ursache (etwa ein Delir) und achtest zuerst auf deine eigene Sicherheit.",
        faustregel:
          "Kreislauf da? Erst Blutzucker. Dann deuten: kurz weg + zurück = Synkope; einseitig + bleibend = Schlaganfall; Zuckungen am ganzen Körper = Krampfanfall; erregt + Fieber = an eine körperliche Ursache denken.",
        spektrum: [
          {
            patientName: "Kurz weg, kommt zurück",
            hauptfaktor: "Synkope",
            kurzbeschreibung:
              "Keine bleibenden Ausfälle. Hinlegen, Beine hoch, Ursache klären (eine kardiale Ohnmacht ist gefährlich).",
          },
          {
            patientName: "Einseitig, bleibend",
            hauptfaktor: "Schlaganfall",
            kurzbeschreibung:
              "Mundwinkel/Arm/Sprache, Ausfälle bleiben. Sofort Arzt/Notruf — time is brain.",
          },
          {
            patientName: "Zuckt am ganzen Körper",
            hauptfaktor: "Krampfanfall",
            kurzbeschreibung:
              "Vor Verletzungen schützen, nichts in den Mund, Zeit stoppen, unverzüglich den Arzt rufen (dauert es länger als 5 Minuten: Status epilepticus).",
          },
          {
            patientName: "Erregt/verwirrt, evtl. Fieber",
            hauptfaktor: "an Delir denken",
            kurzbeschreibung:
              "Nicht vorschnell 'psychisch' — körperliche Ursache prüfen (Fieber, Sauerstoff, Zucker); erst der Eigenschutz. Das kennst du von Herrn Novak.",
          },
        ],
        wiederbegegnung: {
          basisBausteinId: "neuro-differenzial",
          basisPatient: "Herr Ríos",
          vertiefung:
            "Genau dieses Auseinanderhalten hast du bei Herrn Ríos gelernt — dort war es die Unterzuckerung, die einen Schlaganfall vortäuschte. Der Capstone macht daraus Routine: Bei JEDEM, der am Boden liegt und dessen Kreislauf läuft, gehst du denselben Weg — erst Blutzucker, dann die Zeichen deuten.",
        },
        karteikarte: {
          vorderseite:
            "Der Kreislauf läuft — was misst du zuerst, und wie unterscheidest du Synkope, Schlaganfall und Krampfanfall?",
          rueckseite:
            "Zuerst IMMER Blutzucker (Unterzuckerung imitiert alles). Synkope = kurz weg, kommt zurück, keine Ausfälle. Schlaganfall = plötzlich, einseitig, bleibend → sofort Arzt (time is brain). Krampfanfall = Zuckungen am ganzen Körper → schützen, nichts in den Mund, Zeit stoppen.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 10,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_PETROVA_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-petrova-alarmieren",
  phase: "alarmieren",
  titel: "Was war es — und wen rufst du?",
  titelB1: "Was war es — und wen rufst du?",
  kontext:
    "Der Blutzucker bei Frau Petrova ist normal (108 mg/dl). Während du misst, kommt sie wieder zu sich, ist blass, aber ansprechbar und orientiert: 'Mir wurde so schwarz vor Augen.' Keine einseitigen Ausfälle, keine Zuckungen.",
  kontextB1:
    "Der Blutzucker ist normal (108 mg/dl). Frau Petrova kommt wieder zu sich, ist blass, aber ansprechbar: 'Mir wurde schwarz vor Augen.' Keine einseitigen Ausfälle, keine Zuckungen.",
  kernSteps: [
    {
      stepId: "ce06-petrova-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 21.2.3 (Synkope: Ursache klären, kardiale Synkope gefährlich)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-petrova-synkope-einordnen",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      // F-01 Synkope-Def · F-02 Synkope-Formen (kardial gefährlich) · F-06 Lagerung (Beine hoch) — passgenau.
      kernfaktId: ["F-01", "F-02", "F-06"],
      contentC1: {
        title: "Wie ordnest du Frau Petrovas Kollaps ein?",
        body: "Kurz bewusstlos, von allein zurück, Blutzucker normal, keine einseitigen Ausfälle. Wie handelst du?",
        glossarBegriffe: ["Synkope", "kardiale Synkope"],
      },
      contentB1: {
        title: "Wie ordnest du den Kollaps ein?",
        body: "Kurz bewusstlos, von allein zurück, Blutzucker normal, keine einseitigen Ausfälle. Wie handelst du?",
        glossarBegriffe: ["Synkope (= kurze Ohnmacht)"],
      },
      question: {
        fragetext: "Wie ordnest du den Kollaps ein und wie handelst du?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Das Bild passt zu einer Synkope. Ich lasse sie liegen, lagere die Beine hoch, informiere den Arzt und sorge für eine Ursachenabklärung — eine Ohnmacht kann auch vom Herzen kommen.",
            isCorrect: true,
            explanation:
              "Richtig. Kurze Bewusstlosigkeit mit spontaner Erholung, ohne bleibende Ausfälle und bei normalem Blutzucker, passt zu einer Synkope. Sie wird nicht bagatellisiert: Der Arzt wird informiert und die Ursache abgeklärt, denn eine kardiale (vom Herzen ausgehende) Synkope kann gefährlich sein. Beine hoch unterstützt den Kreislauf, weiter beobachten.",
            explanationB1:
              "Richtig. Kurz bewusstlos, von allein zurück, Blutzucker normal, keine Ausfälle — das passt zu einer Ohnmacht (Synkope). Nicht bagatellisieren: Arzt informieren und Ursache klären, denn eine Ohnmacht kann auch vom Herzen kommen. Beine hoch, weiter beobachten.",
          },
          {
            text: "Ich löse den Schlaganfall-Alarm aus — sicher ist sicher.",
            isCorrect: false,
            explanation:
              "Nicht sachgerecht. Ein Schlaganfall zeigt plötzliche, einseitige, BLEIBENDE Ausfälle — die hat Frau Petrova nicht, und sie ist wieder klar orientiert. Einen Schlaganfall-Alarm 'auf Verdacht' auszulösen, obwohl das Bild dagegen spricht, ist nicht angemessen. Richtig ist die Einordnung als Synkope mit ärztlicher Abklärung.",
            explanationB1:
              "Nicht richtig. Ein Schlaganfall macht bleibende, einseitige Ausfälle — die hat sie nicht, sie ist wieder klar. Kein Schlaganfall-Alarm auf Verdacht. Richtig: Ohnmacht einordnen, Arzt zur Abklärung.",
          },
          {
            text: "Alles gut, sie ist ja wieder wach — ich helfe ihr auf und setze sie zurück in den Sessel, dann ist die Sache erledigt.",
            isCorrect: false,
            explanation:
              "Zu schnell abgehakt. Sie direkt aufzurichten kann bei einer Kreislaufursache eine erneute Ohnmacht auslösen — erst liegen lassen, Beine hoch, langsam aufsetzen. Und eine Synkope gehört ärztlich abgeklärt (Ursache, mögliche Herzbeteiligung), nicht als 'erledigt' behandelt.",
            explanationB1:
              "Zu schnell erledigt. Gleich aufrichten kann eine erneute Ohnmacht auslösen — erst liegen lassen, Beine hoch, langsam aufsetzen. Und die Ohnmacht muss der Arzt abklären.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Retrieval-Kern: drei interleavte Fälle)
export const CE06_SIT_PETROVA_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-petrova-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Drei Mal „liegt am Boden“ — je anders",
  titelB1: "Drei Mal „liegt am Boden“ — je anders",
  kontext:
    "Frau Petrova ist versorgt und wartet auf die ärztliche Abklärung. Jetzt trainierst du das Unterscheiden: Stell dir denselben ersten Anblick vor — jemand liegt am Boden —, aber mit jeweils anderen Zeichen. Jeder Fall braucht eine andere erste Reaktion.",
  kontextB1:
    "Frau Petrova ist versorgt. Jetzt übst du das Unterscheiden: derselbe erste Anblick — jemand liegt am Boden —, aber mit anderen Zeichen. Jeder Fall braucht eine andere Reaktion.",
  kernSteps: [
    {
      stepId: "ce06-petrova-erm-01",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (HKS erkennen, Schnappatmung, Rettungskette)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-petrova-fall-hks",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-01", "F-02", "F-04"],
      contentC1: {
        title: "Fall 1: keine Reaktion, nur ein Schnappen",
        body: "Ein anderer Bewohner liegt im Flur. Du sprichst ihn an, rüttelst — nichts. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug. Sonst hebt sich der Brustkorb nicht. Was tust du?",
        glossarBegriffe: ["Schnappatmung", "Herz-Kreislauf-Stillstand", "Rettungskette"],
      },
      contentB1: {
        title: "Fall 1: keine Reaktion, nur ein Schnappen",
        body: "Ein anderer Bewohner liegt im Flur. Du sprichst ihn an und rüttelst — nichts. Alle paar Sekunden ein einzelnes Schnappen, sonst keine Atmung. Was tust du?",
        glossarBegriffe: ["Schnappatmung (= einzelne schnappende Atemzüge)"],
      },
      question: {
        fragetext: "Keine Reaktion, nur Schnappatmung — was tust du?",
        branchingOptions: [
          {
            text: "Keine Reaktion und keine normale Atmung — ich behandle es als Herz-Kreislauf-Stillstand: Notfallteam alarmieren (lassen) und sofort mit der Herzdruckmassage beginnen.",
            isCorrect: true,
            feedback:
              "Genau richtig — und schnell erkannt. Schnappatmung ist keine normale Atmung; keine Reaktion plus keine normale Atmung bedeutet Herz-Kreislauf-Stillstand. Jetzt zählt die Rettungskette: Team rufen (lassen) und ohne Verzögerung drücken. Genau der Weg von Herrn Wagner — hier war die Antwort auf beide Fragen Nein.",
            feedbackB1:
              "Genau richtig. Schnappatmung ist keine normale Atmung. Keine Reaktion + keine normale Atmung = Herz-Kreislauf-Stillstand. Team rufen (lassen) und sofort drücken — wie bei Herrn Wagner.",
          },
          {
            text: "Er atmet ja noch — ich bringe ihn in die stabile Seitenlage und beobachte ihn erst mal.",
            isCorrect: false,
            feedback:
              "Der Bewohner bleibt regungslos, das Schnappen wird seltener — wertvolle Zeit verstreicht. Das ist die klassische, gefährliche Fehldeutung: Schnappatmung ist KEINE normale Atmung, sondern ein Zeichen des schon eingetretenen Stillstands. Wer sie für Atmung hält und nur zur Seite legt, verliert die entscheidenden Minuten. Richtig: reanimieren.",
            feedbackB1:
              "Er bleibt regungslos, das Schnappen wird seltener — Zeit verstreicht. Schnappatmung ist keine normale Atmung, sondern ein Zeichen des Stillstands. Nicht nur zur Seite legen — reanimieren.",
          },
          {
            text: "Ich messe erst mal seinen Blutzucker — man soll ja immer zuerst den Blutzucker messen.",
            isCorrect: false,
            feedback:
              "Während du das Messgerät suchst, bleibt der Kreislauf stehen. Die Blutzucker-Regel gilt, wenn der Kreislauf LÄUFT (Reaktion/normale Atmung vorhanden). Hier fehlt beides — das ist ein Stillstand, und da hat die Reanimation absoluten Vorrang vor jeder Messung. Erst der erste Blick (Reaktion? Atmung?), dann der richtige Weg.",
            feedbackB1:
              "Während du das Gerät suchst, steht der Kreislauf still. Die Blutzucker-Regel gilt nur, wenn der Kreislauf läuft. Hier ist es ein Stillstand — Reanimation hat Vorrang. Erst der erste Blick, dann der Weg.",
          },
        ],
      },
    },
    {
      stepId: "ce06-petrova-erm-02",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 37.6 (Schlaganfall, time is brain)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-petrova-fall-apoplex",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-08", "F-09"],
      contentC1: {
        title: "Fall 2: einseitig und bleibend",
        body: "Eine Bewohnerin ist am Boden, aber wach. Ihr rechter Mundwinkel hängt, der rechte Arm sinkt kraftlos ab, ihre Sprache ist verwaschen. Der Blutzucker ist normal. Was tust du?",
        glossarBegriffe: ["Apoplex (Schlaganfall)"],
      },
      contentB1: {
        title: "Fall 2: einseitig und bleibend",
        body: "Eine Bewohnerin ist wach, aber ihr rechter Mundwinkel hängt, der rechte Arm ist kraftlos, die Sprache verwaschen. Blutzucker normal. Was tust du?",
      },
      question: {
        fragetext: "Einseitige, bleibende Ausfälle bei normalem Blutzucker — was tust du?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich behandle es als Schlaganfall: sofort Arzt/Notruf, Vitalzeichen und Atmung überwachen, den Zeitpunkt des Symptombeginns notieren, bei ihr bleiben. Jede Minute zählt.",
            isCorrect: true,
            explanation:
              "Richtig. Plötzliche, einseitige, bleibende Ausfälle (hängender Mundwinkel, kraftloser Arm, verwaschene Sprache) bei normalem Blutzucker sind ein Schlaganfall bis zum Beweis des Gegenteils. Er ist ein Notfall — je früher die Therapie beginnt, desto mehr Hirngewebe lässt sich retten (time is brain). Deshalb sofort Arzt/Notruf, überwachen und den Symptombeginn dokumentieren (wichtig fürs Zeitfenster).",
            explanationB1:
              "Richtig. Plötzliche, einseitige, bleibende Ausfälle bei normalem Blutzucker = Schlaganfall bis zum Beweis des Gegenteils. Notfall: sofort Arzt/Notruf, überwachen, Zeitpunkt notieren. Jede Minute zählt.",
          },
          {
            text: "Ich lege sie hin und beobachte erst mal eine Stunde — Halbseitenzeichen bei normalem Zucker sind meist harmlos.",
            isCorrect: false,
            explanation:
              "Gefährlich. Genau das Abwarten kostet beim Schlaganfall das Therapiefenster: Je länger die Durchblutung fehlt, desto mehr Nervenzellen sterben unwiderruflich ab (time is brain). Einseitige, bleibende Ausfälle gehören sofort ärztlich abgeklärt, nicht eine Stunde beobachtet.",
            explanationB1:
              "Gefährlich. Abwarten kostet beim Schlaganfall wertvolle Zeit — je länger, desto mehr Hirnzellen sterben. Einseitige Ausfälle sofort zum Arzt, nicht eine Stunde warten.",
          },
          {
            text: "Ich gebe ihr Traubenzucker — das hilft bei solchen Ausfällen erfahrungsgemäß.",
            isCorrect: false,
            explanation:
              "Nein. Der Blutzucker ist normal — eine Unterzuckerung ist ausgeschlossen, Traubenzucker behandelt hier die falsche Ursache. Zudem ist orale Gabe bei möglicher Schluckstörung riskant (Aspiration). Richtig ist, den Schlaganfall als Notfall zu behandeln: sofort Arzt.",
            explanationB1:
              "Nein. Der Blutzucker ist normal — keine Unterzuckerung, Traubenzucker hilft nicht und ist bei Schluckstörung gefährlich. Richtig: Schlaganfall als Notfall behandeln, sofort Arzt.",
          },
        ],
      },
    },
    {
      stepId: "ce06-petrova-erm-03",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 37.8.2 (Anfall: Erste Hilfe, nichts in den Mund, Zeit stoppen)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-petrova-fall-krampfanfall",
      tag: "pflege",
      themaPrimaer: "neurologische-akutsituationen",
      kernfaktId: ["F-10", "F-11"],
      contentC1: {
        title: "Fall 3: Sturz und Zuckungen am ganzen Körper",
        body: "Ein Bewohner stürzt vor dir zu Boden, schreit kurz auf, wird bewusstlos und beginnt am ganzen Körper zu zucken. Was tust — und was lässt du?",
        glossarBegriffe: ["Krampfanfall", "Status epilepticus"],
      },
      contentB1: {
        title: "Fall 3: Sturz und Zuckungen",
        body: "Ein Bewohner stürzt, schreit kurz, wird bewusstlos und zuckt am ganzen Körper. Was tust du — und was nicht?",
      },
      question: {
        fragetext: "Zuckungen am ganzen Körper — was tust du?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ich schütze ihn vor Verletzungen (Gefährliches wegräumen, Kopf polstern), halte ihn NICHT fest, stecke NICHTS in den Mund, merke mir die Uhrzeit — und rufe unverzüglich den Arzt; dauert der Anfall länger als 5 Minuten, ist es ein Status epilepticus.",
            isCorrect: true,
            explanation:
              "Richtig. Den Anfall selbst kannst du nicht stoppen — du sorgst dafür, dass er sich nicht verletzt, und lässt ihn gewähren. NICHT festhalten und NICHTS zwischen die Zähne (der Beißkeil ist obsolet und verletzt eher). Die Uhrzeit ist wichtig: Dauert der Anfall zu lange oder folgt Anfall auf Anfall ohne Erholung, ist es ein lebensbedrohlicher Status epilepticus — dann sofort ärztliche Hilfe.",
            explanationB1:
              "Richtig. Den Anfall kannst du nicht stoppen — du schützt ihn vor Verletzungen und lässt ihn gewähren. Nicht festhalten, nichts in den Mund. Uhrzeit merken: Dauert es zu lange, ist es ein gefährlicher Status epilepticus — sofort Arzt.",
          },
          {
            text: "Ich halte seine Arme und Beine fest und schiebe ihm etwas zwischen die Zähne, damit er sich nicht die Zunge abbeißt.",
            isCorrect: false,
            explanation:
              "Nein — beides ist überholt und gefährlich. Festhalten kann zu Verletzungen und Knochenbrüchen führen; ein Gegenstand zwischen den Zähnen verursacht eher Zahn- und Weichteilverletzungen und wird ausdrücklich nicht mehr empfohlen. Richtig ist: Umgebung sichern, Kopf schützen, gewähren lassen — nicht festhalten, nichts in den Mund.",
            explanationB1:
              "Nein. Festhalten kann verletzen, und etwas zwischen die Zähne zu schieben schadet mehr — das macht man nicht mehr. Richtig: Umgebung sichern, Kopf schützen, gewähren lassen.",
          },
          {
            text: "Ich flöße ihm sofort etwas Zuckerwasser ein, damit er schneller zu sich kommt.",
            isCorrect: false,
            explanation:
              "Nein. Ein bewusstloser, krampfender Mensch kann nicht schlucken — Flüssigkeit läuft in die Atemwege (Aspiration). Im Anfall wird nichts oral gegeben. Zuckerwasser hilft ohnehin nur bei einer nachgewiesenen Unterzuckerung beim wachen Patienten. Richtig: schützen, Zeit stoppen, unverzüglich den Arzt rufen (dauert es länger als 5 Minuten: Status epilepticus).",
            explanationB1:
              "Nein. Ein krampfender, bewusstloser Mensch kann nicht schlucken — die Flüssigkeit läuft in die Lunge. Im Anfall nichts in den Mund. Richtig: schützen, Zeit stoppen, unverzüglich den Arzt rufen (dauert es länger als 5 Minuten: Status epilepticus).",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 13,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_PETROVA_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-petrova-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an den Arzt",
  titelB1: "Übergabe an den Arzt",
  kontext:
    "Der Stationsarzt kommt zu Frau Petrova. Er fragt: „Schildern Sie mir kurz, was war.“",
  kontextB1:
    "Der Stationsarzt kommt zu Frau Petrova. Er fragt: „Was war los?“",
  kernSteps: [
    {
      stepId: "ce06-petrova-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-petrova-sbar",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "SBAR-Übergabe",
        body: "Welche Übergabe zu Frau Petrova folgt dem SBAR-Schema und bringt das Entscheidende — auch den systematischen Ausschluss — zuerst?",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "Übergabe mit SBAR",
        body: "Welche Übergabe zu Frau Petrova folgt SBAR und bringt das Wichtige zuerst?",
        glossarBegriffe: ["SBAR (= Situation, Background, Assessment, Recommendation)"],
      },
      question: {
        fragetext: "Welche SBAR-Übergabe ist vollständig und priorisiert?",
        mcVariant: "standard",
        optionen: [
          {
            text: "\"Frau Petrova, 68, ist gegen 10:15 im Aufenthaltsraum kurz bewusstlos geworden (S). Hypertonie, zuletzt öfter Schwindel beim Aufstehen (B). Reaktion und Atmung von Anfang an vorhanden, kein Stillstand; Blutzucker 108, keine einseitigen Ausfälle, keine Zuckungen; nach knapp einer Minute spontan wieder orientiert (A). Bitte Abklärung der Synkope, auch kardial (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR — und wichtig für diesen Capstone: Das Assessment nennt ausdrücklich, was ausgeschlossen wurde (kein Stillstand, Blutzucker normal, keine Halbseitenzeichen, keine Zuckungen). So sieht der Arzt sofort, dass strukturiert differenziert wurde, und kann gezielt die Synkope (auch kardial) abklären lassen.",
            explanationB1:
              "Richtig. Vollständiges SBAR — und es sagt klar, was ausgeschlossen wurde (kein Stillstand, Zucker normal, keine Ausfälle, keine Zuckungen). Der Arzt sieht sofort, dass sauber differenziert wurde, und klärt die Ohnmacht ab.",
          },
          {
            text: "\"Die Frau Petrova ist umgekippt, aber es geht ihr schon wieder gut — war bestimmt nur der Kreislauf.\"",
            isCorrect: false,
            explanation:
              "Zu vage und vorschnell. Es fehlen die harten Fakten (Zeitpunkt, Vorgeschichte, der systematische Ausschluss von Stillstand/Hypoglykämie/Schlaganfall/Krampfanfall, der Verlauf) und eine klare Empfehlung. „War nur der Kreislauf“ ist eine Vermutung, keine Übergabe — gerade eine Synkope gehört abgeklärt.",
            explanationB1:
              "Zu vage. Es fehlen die Fakten (Zeit, Vorgeschichte, was ausgeschlossen wurde, Verlauf) und eine Bitte. „Nur der Kreislauf“ ist eine Vermutung, keine Übergabe.",
          },
          {
            text: "\"Sie war kurz weg, ich hab gleich an einen Schlaganfall gedacht und wollte schon den Notruf wählen.\"",
            isCorrect: false,
            explanation:
              "Am Wesentlichen vorbei. Die Übergabe schildert deine ersten Vermutungen statt der Befunde. Es fehlen Vorgeschichte, die tatsächlichen Ergebnisse (Blutzucker, keine Ausfälle) und eine begründete Empfehlung. SBAR verlangt die Fakten und den strukturierten Verlauf, nicht den Gedankengang mit Fehlspuren.",
            explanationB1:
              "Am Wichtigen vorbei. Das sind deine Vermutungen, nicht die Befunde. Es fehlen Vorgeschichte, Ergebnisse (Blutzucker, keine Ausfälle) und eine Bitte. SBAR braucht die Fakten.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_PETROVA_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-petrova-reflektieren",
  phase: "reflektieren",
  titel: "Nicht raten — prüfen",
  titelB1: "Nicht raten — prüfen",
  kontext:
    "Frau Petrova wird zur Abklärung ihrer Synkope weiter untersucht. Du denkst über den Vormittag nach: vier Mal derselbe erste Anblick — jemand am Boden —, jedes Mal ein anderer Weg. Was hat dich sicher durch die Fälle geführt?",
  kontextB1:
    "Frau Petrova wird weiter untersucht. Du denkst nach: derselbe erste Anblick, jedes Mal ein anderer Weg. Was hat dich sicher durch die Fälle geführt?",
  kernSteps: [
    {
      stepId: "ce06-petrova-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 14 (strukturierte Ersteinschätzung); Reflexion diagnostische Vorsicht"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-petrova-reflexion",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Zwischen dem Reflex, sofort das Schlimmste (oder Harmloseste) anzunehmen, und dem strukturierten Vorgehen — reflektiere den Vormittag.",
        glossarBegriffe: ["Ersteinschätzung", "diagnostische Vorsicht"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Zwischen dem Reflex, sofort etwas anzunehmen, und dem strukturierten Vorgehen — denke über den Vormittag nach.",
        glossarBegriffe: ["Ersteinschätzung"],
      },
      question: {
        fragetext: "Reflektiere den Vormittag und deine Konsequenzen.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Welche zwei Fragen stehen bei JEDEM, der plötzlich am Boden liegt, ganz am Anfang — und welche drei Wege ergeben sich daraus? 2) Welcher eine Handgriff kommt zuerst, sobald der Kreislauf läuft, und warum? 3) Wie unterscheidest du Synkope, Schlaganfall und Krampfanfall an ihren Leitzeichen? 4) Warum ist es gefährlich, sofort das Schlimmste ODER sofort das Harmloseste anzunehmen — was schützt dich vor beiden Fehlern?",
          placeholder:
            "Am Anfang stehen die Fragen … Daraus ergeben sich die Wege … Sobald der Kreislauf läuft, messe ich zuerst … Synkope/Schlaganfall/Krampfanfall unterscheide ich an … Vor voreiligen Schlüssen schützt mich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Nennt der Schüler den universellen ersten Blick (Reaktion? normale Atmung?) mit den drei Wegen (Stillstand→reanimieren; bewusstlos+atmet→stabile Seitenlage; reagiert→differenzieren)? Benennt er die Blutzuckermessung als ersten Handgriff bei erhaltenem Kreislauf und begründet sie (Hypoglykämie imitiert alles)? Unterscheidet er Synkope (kurz weg, kommt zurück), Schlaganfall (plötzlich, einseitig, bleibend → time is brain) und Krampfanfall (Zuckungen am ganzen Körper → schützen, nichts in den Mund)? Reflektiert er die Gefahr voreiliger Festlegung (weder vorschnell 'nur Kreislauf' noch reflexhaft 'Schlaganfall-Alarm') und den Schutz durch strukturiertes Vorgehen? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};
