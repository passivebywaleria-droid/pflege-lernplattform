// CE-06 Situation „Organspende & Hirntod — ein junger Mensch auf der Intensivstation"
// SituationsTyp: akutsituation — Phasen erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// (Titel tragen die eigentliche Bedeutung; LE5 ist Wissen/Recht/Ethik, kein Rettungsfall).
// Deckt LE5: W1 (Ursachen/Konsequenzen Organmangel), W2 (häufige Organtransplantationen), W3 (Ablauf postmortale
//        Organspende), W4 (Pflege/Herausforderungen beim hirntoten Menschen), K1 (rechtliche+ethische Grundlagen),
//        E1 (kulturelle Bedeutung Herz/Hirn), E2 (psych. Begleitung Lebend- vs. postmortale Spende, Pro/Contra).
// Grounding: specs/ce-06/kernfakten/organspende-hirntod.md (F-01..F-09, verbatim aus I care Pflege Kap. 7.6.5 +
//        Pflege heute Kap. 43.14/Kap. 6).
//
// KRITISCH GEBAUT:
//  - Rechtsstand: ENTSCHEIDUNGSLÖSUNG (seit 2012), NICHT Widerspruchslösung. Keine erfundenen Register-Details.
//  - TPG definiert NICHT den Tod, sondern das Mindestkriterium (Gesamthirntod) für die Organentnahme (F-02).
//  - Hirntod-Feststellung ist ÄRZTLICH: zwei unabhängige Ärzte, unabhängig vom Transplantationsteam (F-04).
//  - Pflege stellt keinen Hirntod fest und drängt NICHT auf Spende; das Aufklärungs-/Entscheidungsgespräch führt
//    der Arzt/die Transplantationsbeauftragte. Pflege begleitet, informiert im Rahmen, ermöglicht Abschied (F-03/F-09).
//  - E1/E2 als Diskussion/Reflexion (Bloom 5) — respektvoll, keine Wertung von Weltanschauungen.
//  - Angehörige/Patient werden gesiezt; „du“-Anrede nur an Lernende. MC-Optionen vergleichbar lang.

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_ERLEMANN_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-erlemann-erkennen",
  phase: "erkennen",
  titel: "Hirntot — und doch beatmet",
  titelB1: "Hirntot — und doch beatmet",
  kontext:
    "Auf der Intensivstation liegt Tobias Erlemann, 24, nach einem Motorradunfall mit schwerer Hirnblutung. Zwei unabhängige Ärzte haben den Gesamthirntod festgestellt. Sein Körper wird beatmet, das Herz schlägt mit Unterstützung. Seine Mutter sitzt am Bett: \"Er ist doch noch warm, sein Herz schlägt doch — wie kann er da tot sein?\"",
  kontextB1:
    "Auf der Intensivstation liegt Tobias Erlemann, 24, nach einem Motorradunfall mit schwerer Hirnblutung. Zwei unabhängige Ärzte haben den Gesamthirntod festgestellt. Sein Körper wird beatmet, das Herz schlägt mit Unterstützung. Seine Mutter sagt: \"Er ist doch noch warm — wie kann er tot sein?\"",
  kernSteps: [
    {
      // Wissens-Tab A (curriculum-first): VOR der Anwendung erk-01. Literatur-belegt (F-01/F-02,
      // I care Pflege Kap. 7.6.5) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-erlemann-erk-00b-hirntod-verstehen",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // Wissenschaftlich-ethisch fundiertes Einordnen des Hirntodkonzepts → II.3 (LE5-Set).
      kompetenzbereich: "II.3",
      quellen: ["I care Pflege 2020, Kap. 7.6.5"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-erlemann-hirntod-wissen",
      tag: "krankheitslehre",
      themaPrimaer: "organspende-hirntod",
      // F-01 (Gesamthirntod = irreversibler Ausfall aller Hirnfunktionen) · F-02 (TPG definiert nicht den Tod).
      kernfaktId: ["F-01", "F-02"],
      transition: "Ordne den Zusammenhang von Hirntod und Gesetz jetzt selbst ein.",
      contentC1: {
        title: "Hirntod verstehen: tot — obwohl das Herz noch schlägt",
        body: "",
        glossarBegriffe: ["Gesamthirntod", "Transplantationsgesetz", "irreversibler Hirnfunktionsausfall"],
      },
      inlineWissen: {
        bausteinRef: "organspende-hirntod-hirntod-verstehen",
        themaPrimaer: "organspende-hirntod",
        storyAufhaenger:
          "Tobias' Mutter sitzt am Bett: „Er ist doch noch warm, sein Herz schlägt doch — wie kann er da tot sein?“ Ihr Satz trifft den Kern des Schwersten an dieser Situation. Um ihn zu verstehen, musst du zwei Dinge auseinanderhalten.",
        kerntext:
          "Der Gesamthirntod — fachsprachlich heute irreversibler Hirnfunktionsausfall (IHA) — bedeutet: Alle Funktionen des Gehirns sind unumkehrbar (irreversibel) ausgefallen — Großhirn, Kleinhirn und Hirnstamm. Das Gehirn steuert nichts mehr, und es wird sich nie wieder erholen. Genau das ist bei Tobias festgestellt.\n\nDer Widerspruch, an dem seine Mutter verzweifelt: Herz und Kreislauf können durch die Intensivmedizin noch eine Weile weiterlaufen — der Körper ist warm, die Brust hebt sich, das Herz schlägt mit Unterstützung. Trotzdem ist der Mensch tot, weil sein Gehirn endgültig erloschen ist. Der warme Körper täuscht ein Leben vor, das nicht mehr da ist.\n\nUnd noch eine wichtige Unterscheidung: Das Transplantationsgesetz legt nicht fest, wann ein Mensch tot ist. Es bestimmt nur, dass vor einer Organentnahme der Gesamthirntod festgestellt sein muss — als Mindestbedingung. Den Tod selbst stellen Ärzte nach genauen Kriterien fest; er wird nicht per Gesetz definiert.",
        faustregel:
          "Gesamthirntod = alle Hirnfunktionen unumkehrbar erloschen — auch wenn das Herz mit Geräten schlägt und der Körper warm ist. Das Transplantationsgesetz definiert NICHT den Tod; es verlangt den festgestellten Hirntod nur als Mindestbedingung für eine Entnahme.",
        spektrum: [
          {
            patientName: "Der warme, beatmete Körper",
            situationsId: "ls-erlemann-organspende",
            hauptfaktor: "täuscht Leben vor",
            kurzbeschreibung:
              "Herz und Kreislauf laufen mit Geräten weiter — für Angehörige der schwerste Widerspruch.",
          },
          {
            patientName: "Das Gehirn",
            hauptfaktor: "unumkehrbar erloschen",
            kurzbeschreibung:
              "Groß-, Kleinhirn und Hirnstamm sind endgültig ausgefallen — das ist der Tod des Menschen.",
          },
          {
            patientName: "Das Transplantationsgesetz",
            hauptfaktor: "definiert nicht den Tod",
            kurzbeschreibung:
              "Es verlangt nur den festgestellten Gesamthirntod als Mindestbedingung für eine Organentnahme.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Warum ist Tobias tot, obwohl sein Herz schlägt und er warm ist?",
          rueckseite:
            "Gesamthirntod = alle Hirnfunktionen (Groß-/Kleinhirn, Hirnstamm) sind unumkehrbar erloschen — der Tod des Menschen. Herz/Kreislauf können mit Intensivmedizin noch laufen (der warme Körper täuscht). Das Transplantationsgesetz definiert nicht den Tod, sondern verlangt den festgestellten Hirntod als Mindestbedingung für eine Entnahme.",
        },
      },
    },
    {
      stepId: "ce06-erlemann-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      // Hirntod/TPG wissenschaftlich-rechtlich einordnen → II.3 (LE5-Set).
      kompetenzbereich: "II.3",
      quellen: ["I care Pflege 2020, Kap. 7.6.5 (Transplantationsgesetz, Gesamthirntod als Mindestkriterium)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-erlemann-hirntod-tpg",
      tag: "krankheitslehre",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-02", "F-01"],
      contentC1: {
        title: "Was besagt das Transplantationsgesetz zum Hirntod?",
        body: "Die Mutter versteht nicht, wie Tobias tot sein kann. Wie ordnest du den Zusammenhang von Hirntod und Transplantationsgesetz fachlich ein?",
        glossarBegriffe: ["Gesamthirntod", "Transplantationsgesetz", "irreversibler Hirnfunktionsausfall"],
      },
      contentB1: {
        title: "Hirntod und Transplantationsgesetz",
        body: "Die Mutter versteht nicht, wie Tobias tot sein kann. Wie hängen Hirntod und Transplantationsgesetz zusammen?",
        glossarBegriffe: ["Gesamthirntod (= alle Hirnfunktionen unumkehrbar ausgefallen)"],
      },
      question: {
        fragetext: "Was stimmt zum Hirntod und zum Transplantationsgesetz?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Vor einer Organentnahme muss stets der Gesamthirntod festgestellt sein; das Gesetz definiert damit nicht den Tod, sondern ein Mindestkriterium für die Entnahme.",
            isCorrect: true,
            explanation:
              "Richtig. Vor einer Organentnahme muss stets der Gesamthirntod festgestellt werden. Wichtig: Mit dem Transplantationsgesetz definiert der Gesetzgeber nicht den Tod, sondern legt ein Mindestkriterium für die Organentnahme fest. Der Gesamthirntod bedeutet den irreversiblen Ausfall aller Hirnfunktionen — auch wenn Herz und Kreislauf mit intensivmedizinischer Unterstützung noch arbeiten.",
            explanationB1:
              "Richtig. Vor einer Organentnahme muss der Gesamthirntod festgestellt sein. Das Gesetz legt damit ein Mindestkriterium für die Entnahme fest — es bestimmt nicht den Tod. Hirntod heißt: alle Hirnfunktionen sind unumkehrbar ausgefallen, auch wenn das Herz mit Geräten noch schlägt.",
          },
          {
            text: "Solange das Herz noch schlägt und der Körper warm ist, kann kein Hirntod vorliegen — der Tod tritt erst mit dem Herzstillstand ein.",
            isCorrect: false,
            explanation:
              "Falsch. Der Gesamthirntod ist der irreversible Ausfall aller Hirnfunktionen und kann festgestellt werden, während Herz und Kreislauf durch die Intensivmedizin noch aufrechterhalten werden. Genau dieser Widerspruch (warmer, beatmeter Körper trotz Hirntod) macht die Situation für Angehörige so schwer — er ändert aber nichts am festgestellten Hirntod.",
            explanationB1:
              "Falsch. Der Gesamthirntod kann festgestellt sein, auch wenn Herz und Kreislauf noch mit Geräten laufen. Der warme Körper täuscht — der Hirntod bleibt bestehen.",
          },
          {
            text: "Das Transplantationsgesetz legt gesetzlich fest, wann ein Mensch tot ist, und ersetzt damit die ärztliche Feststellung des Todes durch eine reine Formsache.",
            isCorrect: false,
            explanation:
              "Falsch. Das Transplantationsgesetz definiert gerade nicht den Tod. Es legt nur ein Mindestkriterium für die Organentnahme fest (den festgestellten Gesamthirntod) und regelt Zulässigkeit und Vergabe von Organen — die Feststellung des Hirntods erfolgt ärztlich nach genauen Kriterien.",
            explanationB1:
              "Falsch. Das Gesetz sagt nicht, wann ein Mensch tot ist. Es legt nur ein Mindestkriterium für die Organentnahme fest. Den Hirntod stellen Ärzte fest.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_ERLEMANN_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-erlemann-alarmieren",
  phase: "alarmieren",
  titel: "Wie wird der Hirntod festgestellt?",
  titelB1: "Wie wird der Hirntod festgestellt?",
  kontext:
    "Der Vater fragt dich misstrauisch: \"Woher wollen die Ärzte denn so sicher wissen, dass da nichts mehr kommt? Nicht dass die sich irren, weil sie an die Organe wollen.\"",
  kontextB1:
    "Der Vater fragt: \"Woher wissen die Ärzte so sicher, dass nichts mehr kommt? Nicht dass die sich irren, weil sie an die Organe wollen.\"",
  kernSteps: [
    {
      // Wissens-Tab B (curriculum-first, KB III.2): wie der Hirntod festgestellt wird + was erlaubt ist
      // (Entscheidungslösung, Rollen). VOR den Anwendungen ala-01/erm-01. Literatur-belegt (F-04/F-03/F-05,
      // Pflege heute 43.14 + I care Pflege 7.6.5) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-erlemann-ala-00b-feststellung-recht",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // Interprofessionelles Zusammenspiel (ärztliche Feststellung, Unabhängigkeit, Rollen) + Kompetenzgrenze → III.2 (LE5-Set).
      kompetenzbereich: "III.2",
      quellen: [
        "I care Pflege 2020, Kap. 12.6.3 (zwei qualifizierte Ärzte)",
        "BÄK-Richtlinie IHA (§ 16 TPG — beide erfahren, mind. einer Neuro)",
        "BfArM Organspende-Register (seit 18.03.2024)",
        "Pflege heute 2019, Kap. 43.14",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-erlemann-feststellung-recht-wissen",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      // F-04 (zwei qualifizierte Ärzte) · F-03 (Rollen: Pflege gibt nicht frei) · F-05 (Entscheidungslösung) · F-10 (Organspende-Register 2024).
      kernfaktId: ["F-04", "F-03", "F-05", "F-10"],
      transition: "Wende das jetzt auf die Fragen der Eltern an.",
      contentC1: {
        title: "Doppelt geprüft — und nur mit Einwilligung",
        body: "",
        glossarBegriffe: ["Entscheidungslösung", "mutmaßlicher Wille", "Transplantationsbeauftragte"],
      },
      inlineWissen: {
        bausteinRef: "organspende-hirntod-feststellung-recht",
        themaPrimaer: "organspende-hirntod",
        storyAufhaenger:
          "Tobias' Vater ist misstrauisch: „Woher wollen die so sicher wissen, dass nichts mehr kommt — nicht dass die sich irren, weil sie an die Organe wollen.“ Eine berechtigte Frage. Wie wird der Hirntod festgestellt, und wer darf über eine Spende überhaupt entscheiden?",
        kerntext:
          "Die Feststellung des Hirntods ist streng geregelt und ärztlich. Zwei qualifizierte Ärzte untersuchen den Patienten unabhängig voneinander nach festen Kriterien; nach der Richtlinie der Bundesärztekammer sind beide seit mehreren Jahren in der Intensivbehandlung schwer hirngeschädigter Menschen erfahren, und mindestens einer ist Facharzt für Neurologie oder Neurochirurgie. Entscheidend: Beide haben nichts mit einer möglichen Transplantation zu tun. Genau das schließt den Interessenkonflikt aus, den der Vater befürchtet. Dazu gehören vorgeschriebene Wartezeiten und technische Untersuchungen. Sorgfalt geht vor Tempo.\n\nDavon getrennt steht die Frage, ob überhaupt Organe entnommen werden dürfen. In Deutschland gilt die Entscheidungslösung: Jeder Mensch entscheidet zu Lebzeiten selbst — er kann zustimmen, einschränken, widersprechen oder eine Vertrauensperson benennen. Niemand ist automatisch Spender. Eine Entnahme ist nur zulässig, wenn eingewilligt wurde und der Hirntod festgestellt ist; bei einem Widerspruch ist sie unzulässig.\n\nFehlt eine eigene Entscheidung — Tobias hat weder einen Ausweis noch einen Eintrag im seit 2024 bestehenden zentralen Organspende-Register —, werden die nächsten Angehörigen einbezogen, und zwar nach dem mutmaßlichen Willen des Verstorbenen, nicht nach ihrem eigenen Wunsch. Und eine Grenze für dich: Die Pflege gibt keine Organentnahme frei; das Aufklärungs- und Entscheidungsgespräch führen der Arzt und die Transplantationsbeauftragte.",
        faustregel:
          "Hirntod: zwei qualifizierte, unabhängige Ärzte (beide intensiverfahren, mind. einer Neuro, kein Bezug zur Transplantation), feste Kriterien + Wartezeit. Spende: Entscheidungslösung — niemand ist automatisch Spender; nur mit Einwilligung + festgestelltem Hirntod (im Ausweis oder seit 2024 im Organspende-Register). Ohne eigene Entscheidung: Angehörige nach dem mutmaßlichen Willen. Die Pflege gibt nichts frei.",
        spektrum: [
          {
            patientName: "Die Feststellung",
            hauptfaktor: "zwei qualifizierte Ärzte",
            kurzbeschreibung:
              "Beide qualifiziert und intensiverfahren (mind. einer Neuro), unabhängig vom Transplantationsteam, feste Kriterien + Wartezeit — schließt den Interessenkonflikt aus.",
          },
          {
            patientName: "Die Entscheidungslösung",
            hauptfaktor: "niemand automatisch Spender",
            kurzbeschreibung:
              "Jeder entscheidet zu Lebzeiten selbst; Entnahme nur mit Einwilligung und festgestelltem Hirntod.",
          },
          {
            patientName: "Kein Ausweis",
            hauptfaktor: "mutmaßlicher Wille",
            kurzbeschreibung:
              "Die Angehörigen werden gefragt, was der Verstorbene gewollt hätte — nicht nach ihrem eigenen Wunsch.",
          },
          {
            patientName: "Die Rolle der Pflege",
            hauptfaktor: "gibt nichts frei",
            kurzbeschreibung:
              "Das Aufklärungs- und Entscheidungsgespräch führen Arzt und Transplantationsbeauftragte.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Wie wird der Hirntod festgestellt — und wer entscheidet über eine Spende?",
          rueckseite:
            "Feststellung: zwei qualifizierte, vom Transplantationsteam unabhängige Ärzte (beide intensiverfahren, mind. einer Neurologe/Neurochirurg), unabhängig voneinander, feste Kriterien + Wartezeit/Technik. Spende: Entscheidungslösung — nur mit Einwilligung + festgestelltem Hirntod (Ausweis oder seit 2024 Organspende-Register), niemand automatisch Spender; ohne eigene Entscheidung Angehörige nach dem mutmaßlichen Willen. Die Pflege gibt keine Entnahme frei (Arzt/Transplantationsbeauftragte).",
        },
      },
    },
    {
      stepId: "ce06-erlemann-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      // Ärztliche Hirntod-Feststellung/Unabhängigkeit interprofessionell einordnen → III.2 (LE5-Set).
      kompetenzbereich: "III.2",
      quellen: [
        "I care Pflege 2020, Kap. 12.6.3 (zwei qualifizierte Ärzte)",
        "BÄK-Richtlinie IHA (§ 16 TPG — beide erfahren, mind. einer Neuro)",
        "Pflege heute 2019, Kap. 43.14",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-erlemann-feststellung",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-04"],
      contentC1: {
        title: "Wie sicher ist die Feststellung?",
        body: "Der Vater befürchtet einen Interessenkonflikt. Wie erklärst du das Verfahren der Hirntod-Feststellung?",
        glossarBegriffe: ["Hirntod-Feststellung", "Unabhängigkeit", "Intensivmedizin"],
      },
      contentB1: {
        title: "Wie sicher ist die Feststellung?",
        body: "Der Vater hat Angst vor einem Interessenkonflikt. Wie erklärst du die Feststellung des Hirntods?",
        glossarBegriffe: ["Hirntod-Feststellung (= zwei Ärzte prüfen unabhängig)"],
      },
      question: {
        fragetext: "Wie wird der Hirntod festgestellt?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Zwei qualifizierte Ärzte, die nichts mit der Transplantation zu tun haben und beide intensivmedizinisch erfahren sind (mindestens einer aus Neurologie/Neurochirurgie), stellen den Hirntod unabhängig voneinander fest.",
            isCorrect: true,
            explanation:
              "Richtig. Zur Feststellung des Hirntods sind genaue Kriterien festgelegt: Zwei qualifizierte Ärzte, die nichts mit der Transplantation zu tun haben und die nach der Richtlinie der Bundesärztekammer beide über mehrjährige Erfahrung in der Intensivbehandlung schwer hirngeschädigter Patienten verfügen (mindestens einer Facharzt für Neurologie oder Neurochirurgie), müssen unabhängig voneinander den Hirntod feststellen und dokumentieren. Zusätzlich sind Wartezeiten und/oder technische Untersuchungen erforderlich. Die Unabhängigkeit vom Transplantationsteam schließt genau den vom Vater befürchteten Interessenkonflikt aus.",
            explanationB1:
              "Richtig. Zwei qualifizierte Ärzte prüfen den Hirntod unabhängig voneinander. Sie haben nichts mit der Transplantation zu tun und sind beide erfahren in der Intensivbehandlung (einer aus der Neurologie oder Neurochirurgie). Dazu kommen Wartezeiten und technische Untersuchungen. So ist ein Interessenkonflikt ausgeschlossen.",
          },
          {
            text: "Der behandelnde Intensivarzt entscheidet allein und möglichst rasch, damit die Organe nicht durch langes Warten geschädigt werden und rechtzeitig zur Verfügung stehen.",
            isCorrect: false,
            explanation:
              "Falsch — und es nährt genau die Sorge des Vaters. Der Hirntod wird nicht von einer einzelnen Person im Alleingang festgestellt, sondern von zwei unabhängigen Ärzten, die nichts mit der Transplantation zu tun haben. Sorgfalt und Unabhängigkeit gehen vor Tempo; Wartezeiten sind sogar vorgeschrieben.",
            explanationB1:
              "Falsch. Kein Arzt entscheidet das allein. Zwei unabhängige Ärzte prüfen getrennt. Sorgfalt geht vor Schnelligkeit — Wartezeiten sind vorgeschrieben.",
          },
          {
            text: "Die Angehörigen bestätigen den Hirntod, sobald sie das intensivmedizinische Gerät am Bett nicht mehr sehen möchten.",
            isCorrect: false,
            explanation:
              "Falsch. Die Feststellung des Hirntods ist eine ärztliche, an strenge Kriterien gebundene Aufgabe — sie hängt nicht von Wünschen oder dem Empfinden der Angehörigen ab. Angehörige werden einfühlsam informiert und begleitet, stellen aber selbst keinen Hirntod fest.",
            explanationB1:
              "Falsch. Den Hirntod stellen Ärzte nach strengen Kriterien fest, nicht die Angehörigen. Die Familie wird informiert und begleitet.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN
export const CE06_SIT_ERLEMANN_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-erlemann-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Voraussetzungen, Ablauf und der Mensch dahinter",
  titelB1: "Voraussetzungen, Ablauf und der Mensch dahinter",
  kontext:
    "Ein Organspendeausweis von Tobias wurde nicht gefunden. Der behandelnde Arzt und die Transplantationsbeauftragte bereiten das Gespräch mit den Eltern vor. Du versorgst Tobias weiter und begleitest die Familie.",
  kontextB1:
    "Ein Organspendeausweis von Tobias wurde nicht gefunden. Der Arzt und die Transplantationsbeauftragte bereiten das Gespräch mit den Eltern vor. Du versorgst Tobias weiter und begleitest die Familie.",
  kernSteps: [
    {
      stepId: "ce06-erlemann-erm-01",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      // Rechtliche Voraussetzungen der Entnahme (Entscheidungslösung) wissensbasiert einordnen → II.3 (LE5-Set).
      kompetenzbereich: "II.3",
      quellen: [
        "I care Pflege 2020, Kap. 7.6.5 (Voraussetzungen der Organentnahme, Angehörige)",
        "Pflege heute 2019, Kap. 43.14 (Entscheidungslösung)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-erlemann-voraussetzungen",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-03", "F-05"],
      contentC1: {
        title: "Wann ist eine Organentnahme zulässig?",
        body: "Kein Organspendeausweis, keine dokumentierte Entscheidung. Was gilt jetzt rechtlich für eine mögliche Organentnahme?",
        glossarBegriffe: ["Entscheidungslösung", "Einwilligung", "mutmaßlicher Wille", "Organspendeausweis"],
      },
      contentB1: {
        title: "Wann ist eine Organentnahme zulässig?",
        body: "Kein Organspendeausweis, keine dokumentierte Entscheidung. Was gilt jetzt für eine mögliche Organentnahme?",
        glossarBegriffe: ["Entscheidungslösung (= jede/r entscheidet selbst; sonst die Angehörigen)"],
      },
      question: {
        fragetext: "Was ist rechtlich richtig?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Eine Entnahme ist nur mit Einwilligung und festgestelltem Hirntod zulässig; fehlt eine eigene Entscheidung, werden die Angehörigen nach dem mutmaßlichen Willen von Tobias einbezogen.",
            isCorrect: true,
            explanation:
              "Richtig. Die Entnahme von Organen ist nur zulässig, wenn eingewilligt wurde und der Hirntod festgestellt ist; sie ist unzulässig, wenn widersprochen wurde. In Deutschland gilt die Entscheidungslösung: Jeder kann zu Lebzeiten zustimmen, einschränken, widersprechen oder eine Vertrauensperson beauftragen. Fehlt eine eigene Entscheidung (kein Ausweis), werden die nächsten Angehörigen einbezogen und nach dem mutmaßlichen Willen des Verstorbenen gefragt.",
            explanationB1:
              "Richtig. Eine Entnahme ist nur mit Einwilligung und festgestelltem Hirntod erlaubt. In Deutschland gilt die Entscheidungslösung: Man entscheidet selbst. Gibt es keine Entscheidung, werden die Angehörigen nach dem mutmaßlichen Willen gefragt.",
          },
          {
            text: "Ohne Organspendeausweis darf ohne Weiteres entnommen werden, weil in Deutschland ohnehin jeder automatisch Spender ist, solange er dem nicht ausdrücklich widersprochen hat.",
            isCorrect: false,
            explanation:
              "Falsch. In Deutschland gilt die Entscheidungslösung, nicht die Widerspruchslösung — niemand ist automatisch Spender. Ohne dokumentierte Entscheidung entscheidet nicht der Zufall, sondern es werden die Angehörigen nach dem mutmaßlichen Willen einbezogen. Ohne Einwilligung ist eine Entnahme unzulässig.",
            explanationB1:
              "Falsch. In Deutschland ist niemand automatisch Spender (Entscheidungslösung). Ohne Entscheidung werden die Angehörigen gefragt. Ohne Einwilligung darf man nicht entnehmen.",
          },
          {
            text: "Die Pflegekraft darf die Entnahme freigeben, sobald der Hirntod dokumentiert ist und die Eltern nicht ausdrücklich widersprechen.",
            isCorrect: false,
            explanation:
              "Falsch. Die Pflege gibt keine Organentnahme frei — das ist nicht ihre Aufgabe. Nötig sind die (mutmaßliche) Einwilligung, der ärztlich festgestellte Hirntod und die ärztliche Durchführung; das Aufklärungs- und Entscheidungsgespräch führen Arzt und Transplantationsbeauftragte. Bloßes „Nicht-Widersprechen“ der Eltern ersetzt keine Entscheidung nach dem Willen des Verstorbenen.",
            explanationB1:
              "Falsch. Die Pflege gibt keine Entnahme frei. Nötig sind Einwilligung, ärztlich festgestellter Hirntod und ärztliche Durchführung. Das Gespräch führen Arzt und Transplantationsbeauftragte.",
          },
        ],
      },
    },
    {
      // Wissens-Tab C (curriculum-first, LE5-Primär I.4): Begleitung in der Grenzsituation — Würde/Abschied,
      // Pflege drängt nicht. VOR den Anwendungen erm-02/ueb-01. Literatur-belegt (F-03/F-09, I care Pflege 7.6.5 +
      // Pflege heute 43.14) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-erlemann-erm-00b-begleiten",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE5-Primär: Menschen in kritischer Lebenssituation/letzter Lebensphase begleiten (Würde, Abschied).
      kompetenzbereich: "I.4",
      quellen: ["I care Pflege 2020, Kap. 7.6.5", "Pflege heute 2019, Kap. 43.14"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-erlemann-begleiten-wissen",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      // F-03 (Pflege begleitet, drängt nicht; Arzt/Transplantationsbeauftragte führen das Gespräch) · F-09 (Würde, Abschied).
      kernfaktId: ["F-03", "F-09"],
      transition: "Setz diese Haltung jetzt bei Tobias und seinen Eltern um.",
      contentC1: {
        title: "Begleiten, nicht drängen — Würde und Abschied",
        body: "",
        glossarBegriffe: ["Würde", "Abschied", "ethische Grenzsituation"],
      },
      inlineWissen: {
        bausteinRef: "organspende-hirntod-begleiten",
        themaPrimaer: "organspende-hirntod",
        storyAufhaenger:
          "Tobias liegt beatmet vor dir, seine Eltern sind fassungslos zwischen Hoffen und Abschied. Was ist jetzt deine Aufgabe an diesem jungen Menschen und seiner Familie — und was ausdrücklich nicht?",
        kerntext:
          "Auch ein hirntoter Mensch wird mit Würde behandelt. Tobias' Körper wird intensivmedizinisch weiterversorgt — beatmet, der Kreislauf gestützt. Für die Eltern ist der Anblick zutiefst widersprüchlich: Ihr Sohn wirkt schlafend und warm und ist doch tot. Deine Aufgabe ist die einfühlsame Begleitung: Zeit und Raum zum Abschiednehmen geben, behutsam und ehrlich erklären, nichts überstürzen, den Menschen achten.\n\nDabei kennst du deine Rolle genau. Du drängst nicht in eine Richtung und nimmst den Eltern die Entscheidung nicht ab. Das eigentliche Aufklärungs- und Entscheidungsgespräch zur Organspende führen der Arzt, die Transplantationsbeauftragte oder ein Koordinator der DSO (der bundesweiten Organspende-Stiftung), der den Prozess begleitet — du informierst nur im Rahmen deiner Aufgabe und begleitest.\n\nDas ist eine ethische Grenzsituation: Sie verlangt Fachwissen und Haltung zugleich — Ruhe, Ehrlichkeit, Respekt vor dem, was die Familie glaubt und braucht, und die Fähigkeit, den Widerspruch von warmem Körper und Tod mit auszuhalten, ohne ihn wegzureden.",
        faustregel:
          "Auch beim hirntoten Menschen: Würde, Zeit und Raum für den Abschied, behutsame ehrliche Information. Die Pflege begleitet und drängt NICHT — das Aufklärungs- und Entscheidungsgespräch führen Arzt und Transplantationsbeauftragte.",
        spektrum: [
          {
            patientName: "Tobias' Körper",
            situationsId: "ls-erlemann-organspende",
            hauptfaktor: "Würde wahren",
            kurzbeschreibung:
              "Wird beatmet und kreislaufgestützt weiterversorgt — mit demselben Respekt wie bei jedem Menschen.",
          },
          {
            patientName: "Die Eltern",
            hauptfaktor: "Abschied ermöglichen",
            kurzbeschreibung:
              "Zeit und Raum geben, ehrlich und behutsam erklären, nichts überstürzen — den Widerspruch mit aushalten helfen.",
          },
          {
            patientName: "Das Entscheidungsgespräch",
            hauptfaktor: "nicht deine Aufgabe",
            kurzbeschreibung:
              "Arzt und Transplantationsbeauftragte klären auf; die Pflege drängt nicht und übernimmt diese Rolle nicht.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Was ist deine Aufgabe bei Tobias und seinen Eltern — und was nicht?",
          rueckseite:
            "Auch beim hirntoten Menschen die Würde wahren; die Eltern begleiten: Zeit/Raum für Abschied, behutsame ehrliche Information, nichts überstürzen. Die Pflege drängt NICHT zur Spende — das Aufklärungs- und Entscheidungsgespräch führen Arzt und Transplantationsbeauftragte. Ethische Grenzsituation: den Widerspruch warmer Körper/Tod mit aushalten helfen.",
        },
      },
    },
    {
      stepId: "ce06-erlemann-erm-02",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 4,
      // Pflege/Würde/Abschied beim hirntoten Menschen = Begleitung in Grenzsituation → I.4 (LE5-Primär).
      kompetenzbereich: "I.4",
      quellen: ["I care Pflege 2020, Kap. 7.6.5; Pflege heute 2019, Kap. 43.14 (Pflege des hirntoten Menschen)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-erlemann-pflege-hirntot",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-09", "F-02"],
      contentC1: {
        title: "Pflege des hirntoten Menschen",
        body: "Zwei Aussagen zur Pflege und Haltung gegenüber Tobias und seinen Eltern. Bewerte sie.",
        glossarBegriffe: ["Würde", "Abschied", "ethische Grenzsituation"],
      },
      contentB1: {
        title: "Pflege des hirntoten Menschen",
        body: "Zwei Aussagen zur Pflege von Tobias und zum Umgang mit den Eltern. Bewerte sie.",
        glossarBegriffe: ["Würde (= den Menschen achten)", "Abschied"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Weil Tobias hirntot ist, kann ich die Pflege auf das rein Technische beschränken und muss weder mit ihm sprechen noch auf Würde und Abschied der Eltern achten.",
            isTrue: false,
            explanation:
              "Falsch. Auch beim hirntoten Menschen gelten Würde und ein achtsamer Umgang. Der Körper wird intensivmedizinisch weiterbehandelt (beatmet, Kreislauf erhalten) — für die Eltern ein zutiefst widersprüchlicher Anblick. Die Pflege begleitet die Familie, ermöglicht Abschiednehmen, erklärt behutsam und wahrt die Würde des Menschen. Genau das ist die Herausforderung dieser ethischen Grenzsituation.",
          },
          {
            statement:
              "Ich gebe den Eltern Zeit und Raum zum Abschiednehmen, erkläre behutsam und überlasse das Aufklärungs- und Entscheidungsgespräch dem Arzt und der Transplantationsbeauftragten.",
            isTrue: true,
            explanation:
              "Richtig. Die pflegerische Aufgabe ist die einfühlsame Begleitung: Zeit und Raum geben, ehrlich und behutsam informieren, Abschied ermöglichen, nichts überstürzen. Das eigentliche Aufklärungs- und Entscheidungsgespräch zur Organspende führen der Arzt und die/der Transplantationsbeauftragte — die Pflege drängt nicht und übernimmt diese Rolle nicht.",
          },
        ],
      },
    },
    {
      stepId: "ce06-erlemann-erm-03",
      phase: 3,
      stepType: "mc",
      bloomLevel: 3,
      // Organmangel/häufige Transplantationen wissensbasiert einordnen → II.3 (LE5-Set).
      kompetenzbereich: "II.3",
      quellen: ["Pflege heute 2019, Kap. 43.14 (Organmangel, Lebendspende); Transplantationszahlen"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-erlemann-organmangel",
      tag: "krankheitslehre",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-06", "F-07"],
      contentC1: {
        title: "Organmangel und häufige Transplantationen",
        body: "Der Vater fragt, warum Organspenden überhaupt so wichtig sind. Was ist fachlich zutreffend?",
        glossarBegriffe: ["Organmangel", "Warteliste", "Lebendspende", "Nierentransplantation"],
      },
      contentB1: {
        title: "Organmangel und häufige Transplantationen",
        body: "Der Vater fragt, warum Organspenden so wichtig sind. Was ist richtig?",
        glossarBegriffe: ["Organmangel (= es gibt zu wenige Spenderorgane)"],
      },
      question: {
        fragetext: "Was trifft auf Organmangel und häufige Transplantationen zu?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Es besteht ein Organmangel; deshalb haben u. a. Lebendspenden von Niere und Leberteilen zugenommen. Niere und Leber gehören zu den häufig transplantierten Organen.",
            isCorrect: true,
            explanation:
              "Richtig. Es besteht ein Organmangel — es stehen weniger Spenderorgane zur Verfügung, als benötigt werden. Aufgrund des Organmangels und der guten Ergebnisse haben Lebendspenden von Niere und Leberteilen deutlich zugenommen. Niere und Leber zählen zu den häufig transplantierten Organen (2024 wurden in Deutschland 3.701 Organe transplantiert, davon 3.013 nach postmortaler Spende und 688 aus Lebendspenden).",
            explanationB1:
              "Richtig. Es gibt zu wenige Spenderorgane (Organmangel). Deshalb haben Lebendspenden von Niere und Leberteilen zugenommen. Niere und Leber werden häufig transplantiert.",
          },
          {
            text: "Es gibt in Deutschland deutlich mehr Spenderorgane als Empfänger, deshalb ist Organspende eher ein Randthema und die Wartelisten sind praktisch leer.",
            isCorrect: false,
            explanation:
              "Falsch. Das Gegenteil ist der Fall: Es besteht ein Organmangel. Gerade weil zu wenige Organe zur Verfügung stehen, warten viele Menschen und die Lebendspende (Niere, Leberteile) hat zugenommen. Organspende ist deshalb kein Randthema.",
            explanationB1:
              "Falsch. Es gibt zu wenige Organe, nicht zu viele (Organmangel). Viele Menschen warten. Deshalb ist Organspende wichtig.",
          },
          {
            text: "Transplantiert werden fast nur Hornhäute und Haut; innere Organe wie Niere oder Leber spielen praktisch keine Rolle.",
            isCorrect: false,
            explanation:
              "Falsch. Innere Organe wie Niere und Leber gehören zu den häufig transplantierten Organen (2024 rund 3.700 Organtransplantationen in Deutschland). Gewebespenden (z. B. Hornhaut) gibt es zusätzlich, sie ersetzen aber nicht die Bedeutung der Organtransplantationen.",
            explanationB1:
              "Falsch. Gerade Niere und Leber werden häufig transplantiert. Gewebe wie Hornhaut gibt es zusätzlich.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 15,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_ERLEMANN_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-erlemann-uebergeben",
  phase: "uebergeben",
  titel: "Das Gespräch mit den Eltern",
  titelB1: "Das Gespräch mit den Eltern",
  kontext:
    "Der Arzt hat mit den Eltern über den Hirntod und die Möglichkeit einer Organspende gesprochen. Die Eltern sind überfordert: \"Wir wissen gar nicht, was Tobias gewollt hätte.\" Sie schauen dich an und fragen, was sie tun sollen.",
  kontextB1:
    "Der Arzt hat mit den Eltern über den Hirntod und die mögliche Organspende gesprochen. Die Eltern sind überfordert: \"Wir wissen nicht, was Tobias gewollt hätte.\" Sie fragen dich, was sie tun sollen.",
  kernSteps: [
    {
      stepId: "ce06-erlemann-ueb-01",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      // Kommunikative Angehörigenbegleitung in der Grenzsituation (ergebnisoffen, nicht drängen) → II.1 (LE5-Set).
      kompetenzbereich: "II.1",
      quellen: ["I care Pflege 2020, Kap. 7.6.5 (Angehörige, Entscheidung nach mutmaßlichem Willen); Kommunikation in Grenzsituationen"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-erlemann-angehoerige",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-03", "F-09"],
      contentC1: {
        title: "Wie begleitest du die Eltern?",
        body: "Die Eltern sind ratlos und stehen unter enormem Druck. Wie begleitest du sie in dieser Entscheidung?",
        glossarBegriffe: ["mutmaßlicher Wille", "Angehörigenbegleitung", "Ergebnisoffenheit"],
      },
      contentB1: {
        title: "Wie begleitest du die Eltern?",
        body: "Die Eltern sind ratlos und unter großem Druck. Wie begleitest du sie bei der Entscheidung?",
        glossarBegriffe: ["mutmaßlicher Wille (= was Tobias wohl gewollt hätte)"],
      },
      question: {
        fragetext: "Die Eltern fragen dich, was sie tun sollen — wie reagierst du?",
        branchingOptions: [
          {
            text: "Ich nehme mir Zeit, höre zu und helfe ihnen ergebnisoffen, sich zu erinnern, was Tobias wichtig war — ohne zu drängen; für die fachlichen Fragen hole ich Arzt/Transplantationsbeauftragte dazu.",
            isCorrect: true,
            feedback:
              "Genau richtig. Fehlt eine eigene Entscheidung, wird nach dem mutmaßlichen Willen des Verstorbenen gefragt — dabei begleitest du die Eltern ergebnisoffen: zuhören, Zeit geben, behutsam helfen, sich an Tobias' Haltung und Werte zu erinnern, ohne in eine Richtung zu drängen. Fachliche und rechtliche Fragen beantworten Arzt und Transplantationsbeauftragte. So bleibt die Entscheidung wirklich die der Familie — das entlastet und trägt. Die Eltern wirken erleichtert, dass sie nicht gedrängt werden, und fassen langsam Vertrauen.",
            feedbackB1:
              "Genau richtig. Ohne eigene Entscheidung wird nach dem mutmaßlichen Willen gefragt. Du hörst zu, gibst Zeit und hilfst den Eltern, sich an Tobias zu erinnern — ohne zu drängen. Fachfragen beantworten Arzt und Transplantationsbeauftragte.",
          },
          {
            text: "Ich rate ihnen zur Zustimmung und erkläre, dass Tobias mit seinen Organen ja mehreren Menschen das Leben retten könnte — das wäre doch in seinem Sinne.",
            isCorrect: false,
            feedback:
              "Falsch. So gut gemeint das ist — die Pflege drängt nicht in eine Richtung und nimmt den Eltern die Entscheidung nicht ab. Gefragt ist der mutmaßliche Wille von Tobias, nicht deine Überzeugung. Die Mutter nickt zwar, wirkt aber bedrängt und zieht sich innerlich zurück. Ein Drängen kann die Eltern später mit schweren Schuldgefühlen zurücklassen. Richtig ist eine ergebnisoffene Begleitung; das Entscheidungsgespräch führt das ärztliche/beauftragte Team.",
            feedbackB1:
              "Falsch. Die Pflege drängt nicht zur Zustimmung. Es zählt der mutmaßliche Wille von Tobias, nicht deine Meinung. Drängen kann später Schuldgefühle machen. Richtig ist: ergebnisoffen begleiten.",
          },
          {
            text: "Ich sage ihnen, sie müssten sich sofort entscheiden, weil sonst die Organe verloren gehen, und lasse sie dann allein damit.",
            isCorrect: false,
            feedback:
              "Falsch und verletzend. Zeitdruck aufzubauen und die Eltern dann allein zu lassen, verschärft eine ohnehin extreme Situation und untergräbt eine freie Entscheidung: Die Eltern erstarren und fühlen sich überrollt. Angehörige brauchen Zeit, ehrliche Information und Begleitung. Tempo darf hier nie über die Würde des Abschieds und die Sorgfalt der Entscheidung gestellt werden.",
            feedbackB1:
              "Falsch und verletzend. Zeitdruck und Alleinlassen machen alles schlimmer — die Eltern fühlen sich überrollt. Besser: den Eltern Zeit und ehrliche Information geben und dableiben.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_ERLEMANN_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-erlemann-reflektieren",
  phase: "reflektieren",
  titel: "Herz und Hirn — was den Tod ausmacht",
  titelB1: "Herz und Hirn — was den Tod ausmacht",
  kontext:
    "Später denkst du über die Situation nach — über den Satz der Mutter „Er ist doch noch warm“ und darüber, warum Menschen so unterschiedlich über Hirntod und Organspende denken.",
  kontextB1:
    "Später denkst du über die Situation nach — über den Satz der Mutter „Er ist doch noch warm“ und darüber, warum Menschen so unterschiedlich über Hirntod und Organspende denken.",
  kernSteps: [
    {
      stepId: "ce06-erlemann-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      // Reflexion der eigenen Haltung gegenüber unterschiedlichen Überzeugungen (Herz/Hirn) → V.2 (LE5-Set; I.2 nicht im Set).
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 6 (kulturell-religiöse Sicht auf Hirntod/Organspende)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-erlemann-herz-hirn",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-08", "F-02"],
      contentC1: {
        title: "Warum Herz und Hirn so unterschiedlich gedeutet werden",
        body: "Diskutiere, welche kulturelle und persönliche Bedeutung Herz und Hirn für das Verständnis von Tod und Organspende haben.",
        glossarBegriffe: ["Hirntodkonzept", "kulturelle Deutung", "Würde"],
      },
      contentB1: {
        title: "Warum Herz und Hirn so unterschiedlich gedeutet werden",
        body: "Denke darüber nach, welche kulturelle und persönliche Bedeutung Herz und Hirn für das Verständnis von Tod und Organspende haben.",
        glossarBegriffe: ["Hirntodkonzept (= Hirntod gilt als Tod des Menschen)"],
      },
      question: {
        fragetext: "Diskutiere die kulturelle Bedeutung von Herz und Hirn für Tod und Organspende.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Warum ist für viele Menschen (wie Tobias' Mutter) das schlagende Herz und der warme Körper das eigentliche Zeichen von Leben — und warum fällt es so schwer, den Hirntod als Tod zu akzeptieren? 2) Wie unterschiedlich bewerten Kulturen und Religionen den Hirntod (von „anerkannt als Tod / Spende als Nächstenliebe“ bis „Hirntod ist nicht der Tod, Entnahme nicht zulässig“)? 3) Was bedeutet das für deine Haltung als Pflegekraft gegenüber Angehörigen mit ganz unterschiedlichen Überzeugungen? 4) Was nimmst du mit?",
          placeholder:
            "Für viele ist das schlagende Herz das Zeichen von Leben, weil … Kulturen und Religionen bewerten den Hirntod unterschiedlich: … Für meine Haltung bedeutet das … Mitnehmen würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler die kulturelle/persönliche Bedeutung von Herz und Hirn (schlagendes Herz/warmer Körper als intuitives Lebenszeichen; das Hirntodkonzept als kognitiv schwer fassbar), das reale Spektrum religiös-kultureller Bewertungen (Hirntod anerkannt / Spende als Nächstenliebe bzw. gottfällig vs. Hirntod nicht dem Tod gleichgesetzt → Entnahme nicht zulässig) UND die Konsequenz für eine respektvolle, wertneutrale Begleitung von Angehörigen? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend, keine Weltanschauung bewerten.",
        },
      },
    },
    {
      stepId: "ce06-erlemann-ref-02",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 5,
      // Ethische Pro/Contra-Diskussion Lebend- vs. postmortale Spende, wissenschaftlich-ethisch fundiert → II.3 (LE5-Set).
      kompetenzbereich: "II.3",
      quellen: [
        "Pflege heute 2019, Kap. 43.14 (Lebendspende vs. postmortale Spende)",
        "I care Pflege 2020, Kap. 7.6.5 (ethische Bezüge)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-erlemann-ethik-begleitung",
      tag: "pflege",
      themaPrimaer: "organspende-hirntod",
      kernfaktId: ["F-06", "F-09"],
      contentC1: {
        title: "Lebendspende vs. postmortale Spende — Begleitung und Ethik",
        body: "Diskutiere, worin sich die psychische Begleitung bei einer Lebendspende und bei einer Spende durch einen hirntoten Menschen unterscheidet, und nenne je ein Pro- und ein Contra-Argument zur Organspende.",
        glossarBegriffe: ["Lebendspende", "postmortale Spende", "mutmaßlicher Wille"],
      },
      contentB1: {
        title: "Lebendspende vs. Spende durch einen hirntoten Menschen",
        body: "Diskutiere, wie sich die psychische Begleitung bei einer Lebendspende und bei einer Spende durch einen hirntoten Menschen unterscheidet. Nenne je ein Pro- und ein Contra-Argument.",
        glossarBegriffe: ["Lebendspende (= ein lebender Mensch spendet, z. B. eine Niere)"],
      },
      question: {
        fragetext: "Vergleiche die psychische Begleitung bei Lebend- vs. postmortaler Spende und nenne je ein Pro-/Contra-Argument.",
        musterantwort:
          "Bei der Lebendspende (z. B. Niere oder Leberteil, die aufgrund des Organmangels zugenommen haben) ist der Spender wach und entscheidet selbst: Die Begleitung dreht sich um informierte, freiwillige Einwilligung, Aufklärung über Risiken, Schutz vor Druck aus dem Umfeld und die Beziehung zwischen Spender und Empfänger. Bei der postmortalen Spende ist der Spender hirntot; nicht er, sondern die Angehörigen tragen die Entscheidung (bei fehlender eigener Verfügung nach dem mutmaßlichen Willen) — die Begleitung ist Trauerbegleitung: Abschied ermöglichen, den Widerspruch von warmem Körper und Hirntod aushalten helfen, ergebnisoffen und ohne Drängen, das Fachgespräch dem ärztlichen Team überlassen. Pro-Argument: Eine Organspende kann mehreren schwer kranken Menschen das Leben retten oder die Lebensqualität entscheidend verbessern (Nächstenliebe, Solidarität). Contra-/Bedenken-Argument: Der Hirntod ist für viele intuitiv oder aus religiös-kultureller Überzeugung nicht der Tod des Menschen; eine Entnahme kann als Verletzung der Würde oder gegen den (mutmaßlichen) Willen empfunden werden — deshalb sind Freiwilligkeit, Sorgfalt und Ergebnisoffenheit unverzichtbar.",
        bewertungskriterien: [
          "Benennt den Kern-Unterschied: Lebendspende = wacher Spender entscheidet selbst (Freiwilligkeit/Aufklärung); postmortal = Angehörige entscheiden, Trauer-/Abschiedsbegleitung",
          "Bezieht den mutmaßlichen Willen / die ergebnisoffene, nicht drängende Haltung ein",
          "Nennt je ein tragfähiges Pro- UND Contra-/Bedenken-Argument (z. B. Leben retten vs. Hirntod≠Tod / Würde / Willen)",
          "Sandwich-Ton, respektvoll, wertneutral gegenüber Überzeugungen",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 14,
};
