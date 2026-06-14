// CE-04 Situation „Der wütende Sohn" — 6 Phasen (beratung-Modell, hier als Konflikt-/Deeskalationsbogen)
// Wendet an: konflikt-deeskalation, gespraechsfuehrung, kommunikationsmodelle
// Quellen: Kommunikation im Gesundheitswesen Kap. 1/2/4

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) WAHRNEHMEN
export const CE04_SIT_WAGNER_WAHRNEHMEN: SituationsPhase = {
  phaseId: "ce04-wagner-wahrnehmen",
  phase: "wahrnehmen",
  titel: "Lautstärke auf dem Flur",
  titelB1: "Es wird laut auf dem Flur",
  kontext:
    "Du gehst über den Flur, als Thomas Wagner aus dem Zimmer seiner Mutter stürmt und dich laut anfährt: 'Hier kümmert sich ja keiner! Meine Mutter liegt im nassen Bett! Das ist eine Frechheit!' Andere Besucher schauen herüber.",
  kontextB1:
    "Du gehst über den Flur. Thomas Wagner kommt aus dem Zimmer seiner Mutter und ruft laut: 'Hier kümmert sich ja keiner! Meine Mutter liegt im nassen Bett! Eine Frechheit!' Andere Besucher schauen her.",
  kernSteps: [
    {
      stepId: "ce04-wagner-wahr-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (Inhalts- und Beziehungsaspekt; Watzlawick)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-wagner-wahrnehmen",
      tag: "pflege",
      contentC1: {
        title: "Was steckt hinter dem Ausbruch?",
        body: "Thomas Wagner schreit über die Sachlage (nasses Bett), aber sein Ton trägt viel mehr. Wie nimmst du diese Botschaft fachlich wahr?",
        glossarBegriffe: ["Inhalts- und Beziehungsaspekt", "Verbalisieren von Emotionen"],
      },
      contentB1: {
        title: "Was steckt hinter dem Ausbruch?",
        body: "Thomas Wagner schreit über das nasse Bett. Aber sein Ton sagt viel mehr. Wie nimmst du diese Botschaft wahr?",
        glossarBegriffe: ["Inhalts- und Beziehungsaspekt"],
      },
      question: {
        fragetext: "Wie ordnest du die Botschaft ein?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Auf der Sachebene geht es ums nasse Bett — aber der Beziehungs- und Gefühlsanteil ist viel größer: Sorge, Erschöpfung, Schuldgefühle, das Gefühl, nicht gehört zu werden.",
            isCorrect: true,
            explanation:
              "Richtig. Jede Nachricht hat einen Inhalts- UND einen Beziehungsaspekt (Watzlawick). Der laute Ton zeigt: Hier spricht vor allem ein erschöpfter, besorgter Mensch. Wer nur die Sachebene hört, verfehlt das Eigentliche.",
            explanationB1:
              "Richtig. Jede Nachricht hat einen Inhalt UND einen Beziehungs-/Gefühlsteil (Watzlawick). Der laute Ton zeigt: Hier spricht ein erschöpfter, besorgter Mensch.",
          },
          {
            text: "Er ist einfach ein aggressiver, respektloser Mensch — so etwas muss man sich nicht bieten lassen.",
            isCorrect: false,
            explanation:
              "Eine vorschnelle Abwertung. Aggression ist hier Ausdruck von Überforderung und Sorge, nicht von Charakter. Wer das Gegenüber abstempelt, verbaut sich die Deeskalation.",
            explanationB1:
              "Vorschnell. Seine Wut kommt von Überforderung und Sorge, nicht von Bosheit. Wer ihn abstempelt, kann nicht deeskalieren.",
          },
          {
            text: "Es geht nur ums nasse Bett — ich erkläre ihm sachlich den Ablauf, dann ist die Sache erledigt.",
            isCorrect: false,
            explanation:
              "Zu kurz gegriffen. Solange die starke Emotion keinen Raum bekommt, prallt jede Sacherklärung ab — der Mensch ist erst wieder aufnahmefähig, wenn er sich verstanden fühlt.",
            explanationB1:
              "Zu kurz. Solange das Gefühl keinen Raum bekommt, hört er keine Sach-Erklärung. Erst wenn er sich verstanden fühlt, kann er zuhören.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 2) EINSCHÄTZEN
export const CE04_SIT_WAGNER_EINSCHAETZEN: SituationsPhase = {
  phaseId: "ce04-wagner-einschaetzen",
  phase: "einschaetzen",
  titel: "Erst der eigene Impuls",
  titelB1: "Erst dein eigener Impuls",
  kontext:
    "In dir steigt es auf: Du möchtest dich rechtfertigen ('Wir haben 30 Patienten!') oder zurückschnauzen. Dein nächster Schritt entscheidet, ob die Lage kippt oder sich beruhigt.",
  kontextB1:
    "In dir steigt es hoch: Du willst dich rechtfertigen ('Wir haben 30 Patienten!') oder zurückreden. Dein nächster Schritt entscheidet, ob es schlimmer wird oder sich beruhigt.",
  kernSteps: [
    {
      stepId: "ce04-wagner-eins-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Umgang mit starken Emotionen — durchatmen, nicht sofort reagieren)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-wagner-einschaetzen-impuls",
      tag: "pflege",
      contentC1: {
        title: "Dein erster Schritt",
        body: "Was ist die fachlich richtige erste Reaktion auf den lautstarken Vorwurf?",
        glossarBegriffe: ["Deeskalation"],
      },
      contentB1: {
        title: "Dein erster Schritt",
        body: "Was ist die richtige erste Reaktion auf den lauten Vorwurf?",
        glossarBegriffe: ["Deeskalation"],
      },
      question: {
        fragetext: "Wie reagierst du im ersten Moment?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Kurz durchatmen, ruhig bleiben und ihm signalisieren, dass ich zuhöre — eine sofortige Gegenreaktion erwartet niemand.",
            isCorrect: true,
            explanation:
              "Richtig. Bei starker Emotion gilt: erst durchatmen. Lachen, aggressive Antworten oder wortlose Flucht sind erfolglos und untergraben deine Kompetenz. Ruhe und Zuwendung öffnen die Tür zur Deeskalation.",
            explanationB1:
              "Richtig. Erst durchatmen. Lachen, zurückschreien oder weglaufen hilft nicht. Ruhig bleiben und zeigen, dass du zuhörst — das deeskaliert.",
          },
          {
            text: "Mich sofort rechtfertigen: 'Wir haben 30 Patienten, da kann das mal passieren!'",
            isCorrect: false,
            explanation:
              "Rechtfertigung im Affekt wirkt wie Abwehr und heizt den Konflikt an. Solange seine Emotion keinen Raum hat, prallt jedes Argument ab.",
            explanationB1:
              "Sich sofort rechtfertigen wirkt wie Abwehr und macht den Streit größer. Erst muss sein Gefühl Raum bekommen.",
          },
          {
            text: "Bestimmt zurechtweisen: 'In diesem Ton rede ich nicht mit Ihnen.'",
            isCorrect: false,
            explanation:
              "Eine harte Zurechtweisung eskaliert. Grenzen darfst du setzen — aber angemessen und erst, nachdem die Emotion Raum bekommen hat. Mit einem Machtwort zu starten, verschärft die Lage.",
            explanationB1:
              "Hart zurechtweisen eskaliert. Grenzen setzen ist erlaubt — aber später und freundlich, nicht als erstes Machtwort.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) INFORMIEREN
export const CE04_SIT_WAGNER_INFORMIEREN: SituationsPhase = {
  phaseId: "ce04-wagner-informieren",
  phase: "informieren",
  titel: "Raum schaffen",
  titelB1: "Raum schaffen",
  kontext:
    "Du holst Thomas Wagner aus dem vollen Flur in einen ruhigeren Bereich. Die anderen Besucher müssen nicht mithören — und ein geschützter Rahmen nimmt schon Druck heraus.",
  kontextB1:
    "Du nimmst Thomas Wagner vom vollen Flur in einen ruhigeren Bereich. Die anderen müssen nicht mithören — ein geschützter Ort nimmt schon Druck weg.",
  kernSteps: [
    {
      stepId: "ce04-wagner-info-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Rahmenbedingungen; Distanzregelung)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce04-wagner-rahmen",
      tag: "pflege",
      contentC1: {
        title: "Warum der Ortswechsel?",
        body: "Warum ist es klug, das Gespräch vom Flur wegzuverlagern?",
        glossarBegriffe: ["Rahmenbedingungen"],
      },
      contentB1: {
        title: "Warum woanders reden?",
        body: "Warum ist es gut, das Gespräch vom Flur wegzunehmen?",
        glossarBegriffe: ["Rahmenbedingungen"],
      },
      question: {
        fragetext: "Was spricht für den geschützten Rahmen?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ein ruhiger, ungestörter Ort schützt die Würde aller (kein Publikum), reduziert die Eskalation und ermöglicht ein echtes Gespräch — gute Rahmenbedingungen sind die halbe Miete.",
            isCorrect: true,
            explanation:
              "Richtig. Vor Publikum verhärten sich Positionen. Ein geschützter Rahmen (Raum, Ruhe, Datenschutz) nimmt Druck heraus und ist die Voraussetzung für ein klärendes Gespräch.",
            explanationB1:
              "Richtig. Vor Publikum wird man härter. Ein ruhiger, geschützter Ort nimmt Druck weg und macht ein echtes Gespräch möglich.",
          },
          {
            text: "Damit die Kollegen den Vorfall nicht mitbekommen und es keinen Ärger gibt.",
            isCorrect: false,
            explanation:
              "Der Grund ist nicht, etwas zu vertuschen, sondern Würde und Deeskalation. Ein klärendes Gespräch dokumentierst du ohnehin sachlich.",
            explanationB1:
              "Es geht nicht ums Verstecken, sondern um Würde und Deeskalation. Das Gespräch dokumentierst du trotzdem.",
          },
          {
            text: "Eigentlich egal — Hauptsache, ich erkläre ihm zügig den Ablauf, dann ist Ruhe.",
            isCorrect: false,
            explanation:
              "Der Rahmen ist nicht egal. Auf dem Flur, vor Publikum und im Affekt, gelingt kein klärendes Gespräch — die Eskalation bliebe.",
            explanationB1:
              "Der Ort ist wichtig. Auf dem vollen Flur klappt kein ruhiges Gespräch.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 4) BERATEN (das Deeskalationsgespräch)
export const CE04_SIT_WAGNER_BERATEN: SituationsPhase = {
  phaseId: "ce04-wagner-beraten",
  phase: "beraten",
  titel: "Das Deeskalationsgespräch",
  titelB1: "Das Deeskalationsgespräch",
  kontext:
    "Ihr steht etwas abseits. Thomas Wagner ist noch aufgebracht, aber nicht mehr schreiend: 'Sie haben ja keine Ahnung, wie das ist. Ich kann nicht mehr.'",
  kontextB1:
    "Ihr steht etwas abseits. Thomas Wagner ist noch aufgebracht, aber leiser: 'Sie wissen ja nicht, wie das ist. Ich kann nicht mehr.'",
  kernSteps: [
    {
      stepId: "ce04-wagner-ber-01",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Emotion Raum geben; Verbalisieren von Emotionen; Ich-Botschaften)"],
      track: "basis",
      modus: "story",
      lernziel: "ce04-wagner-deeskalation-gespraech",
      tag: "pflege",
      contentC1: {
        title: "„Ich kann nicht mehr.“",
        body: "Der Ton wird leiser — dahinter kommt das Eigentliche zum Vorschein: Erschöpfung. Jetzt entscheidet sich, ob das Gespräch sich öffnet.\n\n> \"Sie haben ja keine Ahnung, wie das ist. Ich kann nicht mehr.\"",
        glossarBegriffe: ["Verbalisieren von Emotionen", "Ich-Botschaft", "aktives Zuhören"],
      },
      contentB1: {
        title: "„Ich kann nicht mehr.“",
        body: "Der Ton wird leiser. Dahinter kommt das Eigentliche: Erschöpfung. Jetzt entscheidet sich, ob das Gespräch sich öffnet.\n\n> \"Sie wissen ja nicht, wie das ist. Ich kann nicht mehr.\"",
        glossarBegriffe: ["Verbalisieren von Emotionen", "aktives Zuhören"],
      },
      question: {
        fragetext: "Wie antwortest du?",
        patientName: "Thomas Wagner",
        dialogPhases: [
          {
            context: "Thomas Wagner, jetzt leiser, erschöpft.\n\n\"Sie haben ja keine Ahnung, wie das ist. Ich kann nicht mehr.\"",
            contextB1: "Thomas Wagner, jetzt leiser, erschöpft.\n\n\"Sie wissen ja nicht, wie das ist. Ich kann nicht mehr.\"",
            speaker: "Du",
            options: [
              {
                text: "\"Ich höre, dass Sie völlig erschöpft sind und sich große Sorgen um Ihre Mutter machen. Das mit dem Bett tut mir leid — das hätte nicht passieren dürfen. Erzählen Sie mir, wie es gerade für Sie ist.\"",
                textB1: "\"Ich höre, dass Sie erschöpft sind und sich große Sorgen machen. Das mit dem Bett tut mir leid — das hätte nicht passieren dürfen. Erzählen Sie mir, wie es Ihnen geht.\"",
                patientResponse: "Thomas Wagner sackt etwas in sich zusammen, seine Stimme bricht. \"Ich arbeite voll, mache ihren Haushalt, schlafe kaum… und dann sehe ich sie hier so liegen.\"",
                patientResponseB1: "Thomas Wagner wird ruhiger, seine Stimme zittert. \"Ich arbeite voll, mache ihren Haushalt, schlafe kaum… und dann sehe ich sie so liegen.\"",
                score: 3,
                feedback: "Ideal. Du verbalisierst sein Gefühl (Erschöpfung, Sorge), gibst der Emotion Raum und übernimmst ehrlich Verantwortung für die Sache — ohne dich zu rechtfertigen. Erst jetzt ist er wieder aufnahmefähig und öffnet sich. Das ist gelungene Deeskalation.",
                feedbackB1: "Perfekt. Du sprichst sein Gefühl an (Erschöpfung, Sorge), gibst ihm Raum und übernimmst ehrlich Verantwortung — ohne dich zu rechtfertigen. Jetzt kann er wieder zuhören und öffnet sich. So deeskaliert man.",
              },
              {
                text: "\"Da haben Sie recht, ich weiß nicht, wie das ist. Aber wir tun hier wirklich unser Bestes bei 30 Patienten.\"",
                textB1: "\"Da haben Sie recht. Aber wir tun unser Bestes bei 30 Patienten.\"",
                patientResponse: "Thomas Wagner verschränkt die Arme. \"Schöne Ausrede. Es geht hier um meine Mutter, nicht um Ihre Statistik.\"",
                patientResponseB1: "Thomas Wagner verschränkt die Arme. \"Schöne Ausrede. Es geht um meine Mutter, nicht um Zahlen.\"",
                score: 1,
                feedback: "Das 'Aber' macht alles davor zunichte und schiebt eine Rechtfertigung nach. Er hört nur die Ausrede. Erst die Emotion aufnehmen, dann (viel später) ggf. die Rahmenbedingungen — nicht mit dem 'Aber' kontern.",
                feedbackB1: "Das 'Aber' macht das Gute davor kaputt — er hört nur eine Ausrede. Erst das Gefühl aufnehmen, die Erklärung kommt viel später.",
              },
              {
                text: "\"Beruhigen Sie sich erst mal, sonst können wir nicht reden.\"",
                textB1: "\"Beruhigen Sie sich erst mal, sonst reden wir nicht.\"",
                patientResponse: "Thomas Wagner wird wieder lauter. \"Beruhigen?! Sagen Sie mir nicht, wie ich mich zu fühlen habe!\"",
                patientResponseB1: "Thomas Wagner wird wieder laut. \"Beruhigen?! Sagen Sie mir nicht, wie ich mich fühlen soll!\"",
                score: 0,
                feedback: "'Beruhigen Sie sich' wirkt bevormundend und verbietet das Gefühl — das eskaliert fast immer. Die Emotion braucht Anerkennung, keine Aufforderung, sie abzustellen.",
                feedbackB1: "'Beruhigen Sie sich' wirkt von oben herab und verbietet das Gefühl — das macht es schlimmer. Das Gefühl braucht Anerkennung, kein Verbot.",
              },
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 5) EVALUIEREN
export const CE04_SIT_WAGNER_EVALUIEREN: SituationsPhase = {
  phaseId: "ce04-wagner-evaluieren",
  phase: "evaluieren",
  titel: "Hat die Deeskalation gewirkt?",
  titelB1: "Hat es gewirkt?",
  kontext:
    "Thomas Wagner ist ruhiger geworden und hat von seiner Überlastung erzählt. Gemeinsam habt ihr die Klingel in Reichweite gelegt und über Entlastung gesprochen. Wie bewertest du den Verlauf?",
  kontextB1:
    "Thomas Wagner ist ruhiger und hat von seiner Überlastung erzählt. Ihr habt die Klingel in Reichweite gelegt und über Entlastung gesprochen. Wie bewertest du das?",
  kernSteps: [
    {
      stepId: "ce04-wagner-eval-01",
      phase: 5,
      stepType: "mc",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2/4 (Deeskalation; konstruktive Konfliktlösung)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce04-wagner-evaluieren",
      tag: "pflege",
      contentC1: {
        title: "Woran erkennst du gelungene Deeskalation?",
        body: "Welches Zeichen zeigt am besten, dass die Deeskalation wirklich gelungen ist?",
        glossarBegriffe: ["Deeskalation", "Konfliktgespräch"],
      },
      contentB1: {
        title: "Woran erkennst du, dass es gut lief?",
        body: "Welches Zeichen zeigt am besten, dass die Deeskalation gelungen ist?",
        glossarBegriffe: ["Deeskalation"],
      },
      question: {
        fragetext: "Was ist das beste Zeichen für gelungene Deeskalation?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Vom lauten Vorwurf zum echten Gespräch: Thomas Wagner konnte sein eigentliches Anliegen (Überlastung, Sorge) benennen, und ihr habt gemeinsam eine konkrete Lösung gefunden.",
            isCorrect: true,
            explanation:
              "Richtig. Deeskalation ist gelungen, wenn die Emotion Raum bekam, das eigentliche Anliegen sichtbar wurde und daraus eine konstruktive, gemeinsame Lösung entstand — nicht, wenn jemand 'verstummt' ist.",
            explanationB1:
              "Richtig. Es ist gelungen, wenn das Gefühl Raum bekam, das eigentliche Problem sichtbar wurde und ihr zusammen eine Lösung gefunden habt.",
          },
          {
            text: "Er hat aufgehört zu schreien und ist gegangen — Ruhe ist eingekehrt.",
            isCorrect: false,
            explanation:
              "Stille ist nicht gleich Deeskalation. Wer verstummt und unzufrieden geht, ist nicht beruhigt, sondern abgewürgt — der Konflikt schwelt weiter.",
            explanationB1:
              "Stille ist keine Lösung. Wer wütend geht, ist nicht beruhigt — der Streit geht weiter.",
          },
          {
            text: "Ich habe ihm klar gemacht, dass er sich im Ton vergriffen hat.",
            isCorrect: false,
            explanation:
              "Recht behalten ist kein Deeskalationsziel. Es geht darum, das Anliegen zu klären und eine Lösung zu finden — nicht darum, den anderen zu belehren.",
            explanationB1:
              "Recht behalten ist nicht das Ziel. Es geht darum, das Problem zu klären und eine Lösung zu finden.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 6) DOKUMENTIEREN
export const CE04_SIT_WAGNER_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ce04-wagner-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren und reflektieren",
  titelB1: "Dokumentieren und nachdenken",
  kontext:
    "Du dokumentierst den Vorfall und das Gespräch sachlich und denkst über deinen eigenen Umgang mit dem Konflikt nach.",
  kontextB1:
    "Du dokumentierst den Vorfall und das Gespräch sachlich und denkst über deinen Umgang mit dem Konflikt nach.",
  kernSteps: [
    {
      stepId: "ce04-wagner-doku-01",
      phase: 6,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kommunikation im Gesundheitswesen, Kap. 2/4 (Konfliktanalyse und Deeskalation)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce04-wagner-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Was nimmst du mit?",
        body: "Der Vorwurf auf dem Flur war laut — aber das eigentliche Thema lag darunter. Reflektiere, was diesen Konflikt entschärft hat und wie du mit deinem eigenen Impuls (sich rechtfertigen / zurückschnauzen) umgegangen bist.",
        glossarBegriffe: ["Deeskalation", "Inhalts- und Beziehungsaspekt"],
      },
      contentB1: {
        title: "Was nimmst du mit?",
        body: "Der Vorwurf war laut — aber das eigentliche Thema lag darunter. Was hat den Konflikt entschärft? Wie bist du mit deinem eigenen Impuls (rechtfertigen / zurückreden) umgegangen?",
        glossarBegriffe: ["Deeskalation"],
      },
      question: {
        fragetext: "Reflektiere den Konflikt mit Thomas Wagner.",
        reflection: {
          prompt:
            "Schreibe 4-6 Sätze: 1) Auf welcher Ebene lag der Konflikt WIRKLICH (Sache vs. Beziehung/ungehörte Emotion)? 2) Was hat ihn entschärft (konkrete Schritte)? 3) Wie bist du mit deinem eigenen ersten Impuls umgegangen (rechtfertigen/kontern)? 4) Was nimmst du für den nächsten lautstarken Konflikt mit?",
          placeholder:
            "Eigentlich lag der Konflikt bei … Entschärft hat … Meinen eigenen Impuls (…) habe ich … Mitnehmen würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip. Erkennt der Schüler, dass der Konflikt nicht auf der Sachebene (nasses Bett), sondern auf der Beziehungs-/Gefühlsebene lag (Erschöpfung, Sorge, sich nicht gehört fühlen)? Benennt er die deeskalierenden Schritte (durchatmen, Emotion Raum geben/verbalisieren, geschützter Rahmen, keine Rechtfertigung mit 'Aber', gemeinsame Lösung)? Reflektiert er den Umgang mit dem EIGENEN Impuls (Selbststeuerung)? Lob für eine differenzierte Bloom-5-Reflexion. Niemals abwertend.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};
