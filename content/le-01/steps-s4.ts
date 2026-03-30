// Session 4: "Was macht den Menschen aus?" — LE 01
// Generiert vom Content-Generator v2
// Themen: Menschenbild, Ethik vs. Moral, Wuerde, ICN-Ethikkodex, Pflege-Charta, 4 ethische Prinzipien
// Leitfall: Yasemin — Reflexionsgespraech mit Praxisanleiterin (Szene S3)
// Bloom: B2-B4, 22 Steps, ~30 Min
// Interleaving: 2 Fragen aus S1-S3 (Step 15 Timer: Pflegeprozess + Kommunikation)

import type { ContentStep } from "../_types";

export const STEPS_S4: ContentStep[] = [
  // =============================================================
  // Step 1: Dialog — Yasemin: Reflexionsgespraech (STORY)
  // =============================================================
  {
    stepId: "le01-s4-01",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.282"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Freitag: Reflexionsgespraech",
      body: "Yasemin reflektiert ihre erste Woche mit der Praxisanleiterin.",
      fallbezug: "Freitag, Tag 5. Yasemin und die Praxisanleiterin sitzen im Pausenraum.",
    },
    contentB1: {
      title: "Freitag: Was hast du gelernt?",
      body: "Yasemin spricht mit der Praxisanleiterin ueber ihre Woche.",
      fallbezug: "Es ist Freitag. Yasemin und die Praxisanleiterin sitzen zusammen.",
    },
    question: {
      fragetext: "Begleite Yasemin bei ihrem Reflexionsgespraech.",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Praxisanleiterin: 'Was hast du diese Woche ueber Pflege gelernt?' Yasemin denkt an den Pflegeprozess, die Beobachtung und die Situation mit Herr Brenner.",
          contextB1: "Praxisanleiterin: 'Was hast du diese Woche gelernt?' Yasemin denkt an alles, was passiert ist.",
          speaker: "Yasemin",
          options: [
            {
              text: "Ich habe gelernt, dass Beobachtung die wichtigste Kompetenz ist — und dass Empathie ohne Struktur gefaehrlich sein kann. Ich muss professionell nah sein, nicht privat nah.",
              textB1: "Ich habe gelernt: Beobachten ist sehr wichtig. Und Mitgefuehl braucht Grenzen. Ich muss professionell sein.",
              patientResponse: "Das ist eine reife Erkenntnis fuer die erste Woche. Heute sprechen wir ueber etwas, das alles zusammenhaelt: Ethik und Menschenwuerde.",
              patientResponseB1: "Das ist sehr gut fuer die erste Woche. Heute sprechen wir ueber Ethik und Menschenwuerde.",
              score: 3,
              feedback: "Yasemin verbindet die Erfahrungen aus Session 1-3 zu einem Gesamtbild. Die Praxisanleiterin leitet zum naechsten Thema ueber.",
              feedbackB1: "Yasemin zeigt, was sie gelernt hat. Jetzt kommt ein neues Thema: Ethik und Wuerde.",
            },
            {
              text: "Es war eine anstrengende Woche. Ich bin nicht sicher, ob ich das schaffe.",
              textB1: "Es war schwierig. Ich weiss nicht, ob ich das kann.",
              patientResponse: "Zweifel sind normal — sie zeigen, dass du die Verantwortung ernst nimmst. Lass uns ueber etwas sprechen, das dir Orientierung gibt: Ethik.",
              patientResponseB1: "Zweifel sind normal. Das zeigt, dass du es ernst nimmst. Heute lernst du etwas, das dir hilft: Ethik.",
              score: 1,
              feedback: "Selbstzweifel sind normal in der Ausbildung. Die Praxisanleiterin reagiert unterstuetzend — kein Sandwich-Prinzip noetig, sondern echte Ermutigung.",
              feedbackB1: "Es ist okay, unsicher zu sein. Die Ausbildung hilft dir, sicherer zu werden.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 2: Swipe — Brilliant-Prinzip: Ethik/Wuerde (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s4-02",
    phase: "s4",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Stimmt das?",
      body: "Aussagen zu Ethik und Wuerde — bevor du die Theorie kennst.",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Was denkst du ueber Ethik und Wuerde? Entscheide dich.",
    },
    question: {
      fragetext: "Wische rechts fuer 'stimmt' und links fuer 'stimmt nicht'.",
      swipe: {
        instruction: "Stimmt diese Aussage?",
        cards: [
          {
            statement: "Wuerde hat man nur, wenn man etwas leistet.",
            statementB1: "Wuerde hat man nur, wenn man etwas tut.",
            isCorrect: false,
            explanation: "Wuerde ist jedem Menschen zu eigen — allein weil er existiert. Art. 1 GG: 'Die Wuerde des Menschen ist unantastbar.'",
            explanationB1: "Jeder Mensch hat Wuerde. Einfach weil er da ist. Das steht im Grundgesetz.",
          },
          {
            statement: "Jeder Patient hat das Recht auf Privatheit.",
            statementB1: "Jeder Patient hat das Recht, in Ruhe gelassen zu werden.",
            isCorrect: true,
            explanation: "Die Pflege-Charta Artikel 3 garantiert das Recht auf Privatheit fuer hilfe- und pflegebeduerftige Menschen.",
            explanationB1: "Richtig! Die Pflege-Charta sagt: Patienten haben das Recht auf Privatheit.",
          },
          {
            statement: "Ethik und Moral sind dasselbe.",
            statementB1: "Ethik und Moral sind das Gleiche.",
            isCorrect: false,
            explanation: "Moral sind die Normen und Werte einer Gesellschaft. Ethik ist das reflektierte Nachdenken ueber moralisches Handeln.",
            explanationB1: "Moral sind die Regeln einer Gesellschaft. Ethik ist das Nachdenken ueber diese Regeln.",
          },
          {
            statement: "Pflegende duerfen die Wuerde eines Patienten niemals verletzen.",
            statementB1: "Pflegende duerfen die Wuerde eines Patienten nie verletzen.",
            isCorrect: true,
            explanation: "Die Wuerde ist unantastbar (Art. 1 GG). Pflegende muessen sie in jeder Situation schuetzen — auch unter Zeitdruck.",
            explanationB1: "Richtig! Die Wuerde ist unantastbar. Pflegende muessen sie immer schuetzen.",
          },
          {
            statement: "Es gibt ein internationales Regelwerk fuer ethisches Handeln in der Pflege.",
            statementB1: "Es gibt internationale Regeln fuer gutes Handeln in der Pflege.",
            isCorrect: true,
            explanation: "Der ICN-Ethikkodex (1953) formuliert Verhaltensnormen fuer Pflegende weltweit in 4 Bereichen.",
            explanationB1: "Richtig! Der ICN-Ethikkodex sagt Pflegenden weltweit, wie sie sich verhalten sollen.",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 3: Text — Ethik vs. Moral, Wuerde (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s4-03",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-282"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethik, Moral und Wuerde",
      body: "Ethik ist reflektiertes Nachdenken ueber moralisches Handeln. Moral ist die Gesamtheit von Normen und Werten, die das Verhalten einer Gesellschaft regulieren. Wuerde ist jedem Menschen zu eigen — allein weil er existiert. Art. 1 GG: 'Die Wuerde des Menschen ist unantastbar.' Haker unterscheidet anthropologische Verletzlichkeit (jeder Mensch) und moralische Verletzlichkeit (Pflegebeduerftige sind besonders verletzlich, weil sie abhaengig sind).",
      glossarBegriffe: ["Ethik", "Wuerde", "Menschenbild"],
    },
    contentB1: {
      title: "Ethik, Moral und Wuerde",
      body: "Ethik heisst: Nachdenken ueber richtiges Handeln. Moral sind die Regeln einer Gesellschaft. Wuerde hat jeder Mensch — einfach weil er da ist. Das steht im Grundgesetz. Pflegebeduerftige Menschen sind besonders verletzlich, weil sie auf andere angewiesen sind.",
      glossarBegriffe: ["Ethik", "Wuerde", "Menschenbild"],
    },
  },

  // =============================================================
  // Step 4: Reveal — Wuerde in der Pflege (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s4-04",
    phase: "s4",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-284"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Wuerde in der Pflege",
      body: "Vier Perspektiven auf Wuerde — von der Verfassung bis zur Pflegepraxis.",
    },
    contentB1: {
      title: "Was bedeutet Wuerde in der Pflege?",
      body: "Vier Blickwinkel auf Wuerde. Decke sie auf.",
    },
    question: {
      fragetext: "Decke die vier Perspektiven auf.",
      reveal: {
        instruction: "Tippe auf jede Karte.",
        revealMode: "free",
        cards: [
          {
            id: "r1",
            label: "Grundgesetz",
            content: "Art. 1 GG: 'Die Wuerde des Menschen ist unantastbar.' Sie zu achten und zu schuetzen ist Verpflichtung aller staatlichen Gewalt.",
            contentB1: "Das Grundgesetz sagt: Die Wuerde jedes Menschen ist unantastbar. Der Staat muss sie schuetzen.",
            icon: "book",
          },
          {
            id: "r2",
            label: "Menschenrechte",
            content: "Allgemeine Erklaerung der Menschenrechte Art. 1: 'Alle Menschen sind frei und gleich an Wuerde und Rechten geboren.'",
            contentB1: "Die Menschenrechte sagen: Alle Menschen haben die gleiche Wuerde. Von Geburt an.",
            icon: "globe",
          },
          {
            id: "r3",
            label: "Verletzlichkeit",
            content: "Anthropologische Verletzlichkeit: Jeder Mensch ist verletzlich. Moralische Verletzlichkeit: Pflegebeduerftige sind besonders verletzlich, weil sie abhaengig sind.",
            contentB1: "Jeder Mensch ist verletzlich. Pflegebeduerftige Menschen sind besonders verletzlich, weil sie Hilfe brauchen.",
            icon: "shield",
          },
          {
            id: "r4",
            label: "Pflege-Charta",
            content: "Pflege-Charta Art. 1: Hilfe- und pflegebeduerftige Menschen haben das Recht auf Selbstbestimmung und auf Schutz ihrer Wuerde.",
            contentB1: "Die Pflege-Charta sagt: Menschen, die Pflege brauchen, duerfen selbst entscheiden und ihre Wuerde muss geschuetzt werden.",
            icon: "file-text",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: MC — Pflege-Charta Transfer (CHALLENGE, AMBOSS)
  // =============================================================
  {
    stepId: "le01-s4-05",
    phase: "s4",
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-284"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Pflege-Charta anwenden",
      body: "Herr Brenner steht im Krankenhemd auf dem Flur — sichtbar fuer alle.",
    },
    contentB1: {
      title: "Rechte des Patienten",
      body: "Herr Brenner steht im Krankenhemd auf dem Flur. Alle koennen ihn sehen.",
    },
    question: {
      fragetext: "Welches Recht der Pflege-Charta ist hier betroffen?",
      optionen: [
        {
          text: "Recht auf Privatheit (Artikel 3)",
          isCorrect: true,
          explanation: "Im Krankenhemd auf dem Flur zu stehen verletzt die Privatsphaere. Die Pflege-Charta schuetzt das Recht auf Privatheit.",
          explanationB1: "Richtig! Im Krankenhemd auf dem Flur — das verletzt die Privatsphaere. Das Recht auf Privatheit ist wichtig.",
        },
        {
          text: "Recht auf Selbstbestimmung (Artikel 1)",
          isCorrect: false,
          explanation: "Selbstbestimmung waere betroffen, wenn Herr Brenner nicht auf den Flur wollte. Hier geht es um seine Privatheit — sein Koerper ist fuer alle sichtbar.",
          explanationB1: "Selbstbestimmung heisst: selbst entscheiden. Hier geht es aber darum, dass alle ihn sehen koennen.",
        },
        {
          text: "Recht auf qualifizierte Pflege (Artikel 4)",
          isCorrect: false,
          explanation: "Qualifizierte Pflege bezieht sich auf die fachliche Versorgung. Hier geht es um die Wuerde und Privatheit des Patienten.",
          explanationB1: "Qualifizierte Pflege heisst: gute Pflege bekommen. Hier geht es aber um die Privatsphaere.",
        },
        {
          text: "Recht auf wuerdevolles Sterben (Artikel 8)",
          isCorrect: false,
          explanation: "Artikel 8 betrifft die Begleitung am Lebensende. Herr Brenner ist nicht sterbend — es geht um seine Privatsphaere im Alltag.",
          explanationB1: "Artikel 8 ist fuer das Sterben. Herr Brenner stirbt nicht. Es geht um seine Privatsphaere.",
        },
      ],
    },
  },

  // =============================================================
  // Step 6: Text — ICN-Ethikkodex, Pflege-Charta, 4 Prinzipien (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s4-06",
    phase: "s4",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-285", "Q9"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethische Leitlinien der Pflege",
      body: "Der ICN-Ethikkodex (1953, mehrfach aktualisiert) formuliert Verhaltensnormen in 4 Bereichen: gegenueber Mitmenschen, in der Berufsausuebung, gegenueber der Profession und gegenueber Kollegen. Die Pflege-Charta (2005) enthaelt 8 Artikel zu den Rechten hilfe- und pflegebeduertiger Menschen. Die 4 ethischen Prinzipien nach Beauchamp und Childress: Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit.",
      glossarBegriffe: ["ICN-Ethikkodex", "Pflege-Charta"],
    },
    contentB1: {
      title: "Regeln fuer ethisches Handeln",
      body: "Der ICN-Ethikkodex sagt, wie Pflegende sich verhalten sollen: gegenueber Patienten, im Beruf und mit Kollegen. Die Pflege-Charta hat 8 Artikel mit Rechten fuer Patienten. Es gibt 4 ethische Grundsaetze: Selbstbestimmung, Wohltun, Nichtschaden und Gerechtigkeit.",
      glossarBegriffe: ["ICN-Ethikkodex", "Pflege-Charta"],
    },
  },

  // =============================================================
  // Step 7: Flipcard — 4 ethische Prinzipien (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s4-07",
    phase: "s4",
    stepType: "flipcard",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    imageUrl: "/images/le01/ethische-prinzipien.svg",
    imageAlt: "4 Karten mit ethischen Prinzipien nach Beauchamp und Childress",
    contentC1: {
      title: "Vier ethische Prinzipien",
      body: "Beauchamp und Childress formulierten 4 Prinzipien, die in der Pflegeethik zentral sind.",
    },
    contentB1: {
      title: "Vier ethische Grundsaetze",
      body: "Es gibt 4 wichtige Grundsaetze fuer ethisches Handeln in der Pflege.",
    },
    question: {
      fragetext: "Tippe auf ein Prinzip, um das Pflege-Beispiel zu sehen.",
      flipcard: {
        instruction: "Drehe die Karten um.",
        cards: [
          {
            front: "Autonomie (Selbstbestimmung)",
            back: "Der Patient darf eine Behandlung ablehnen — auch wenn die Pflegekraft anderer Meinung ist. Sein Wille zaehlt.",
            backB1: "Der Patient darf 'Nein' sagen. Auch wenn die Pflegekraft denkt, die Behandlung ist wichtig.",
            category: "Ethik",
          },
          {
            front: "Benefizienz (Wohltun)",
            back: "Pflegemassnahmen sollen dem Patienten nutzen: Schmerzlinderung, Mobilitaetsfoerderung, Beratung.",
            backB1: "Pflege soll dem Patienten helfen: Schmerzen lindern, Bewegung foerdern, beraten.",
            category: "Ethik",
          },
          {
            front: "Nonmalefizienz (Nichtschaden)",
            back: "Pflege darf dem Patienten nicht schaden. Dekubitusprophylaxe, Sturzpraevention und Hygienestandards schuetzen vor vermeidbarem Schaden.",
            backB1: "Pflege darf dem Patienten nicht schaden. Zum Beispiel: Druck vermeiden, Stuerze verhindern, Hygiene beachten.",
            category: "Ethik",
          },
          {
            front: "Gerechtigkeit (faire Verteilung)",
            back: "Alle Patienten haben Anspruch auf die gleiche Qualitaet der Pflege — unabhaengig von Herkunft, Alter oder sozialem Status.",
            backB1: "Alle Patienten bekommen die gleiche gute Pflege. Egal woher sie kommen oder wie alt sie sind.",
            category: "Ethik",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 8: Matching — Pflege-Charta (PUZZLE)
  // =============================================================
  {
    stepId: "le01-s4-08",
    phase: "s4",
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-284"],
    track: "basis",
    modus: "puzzle",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Pflege-Charta zuordnen",
      body: "Ordne die Artikel der Pflege-Charta den richtigen Beschreibungen zu.",
    },
    contentB1: {
      title: "Rechte der Patienten",
      body: "Verbinde jedes Recht mit der richtigen Beschreibung.",
    },
    question: {
      fragetext: "Ordne die Pflege-Charta-Artikel zu.",
      matchingPairs: [
        { left: "Selbstbestimmung (Art. 1)", right: "Jeder darf ueber seine Pflege selbst entscheiden" },
        { left: "Unversehrtheit (Art. 2)", right: "Schutz vor koerperlichem und seelischem Schaden" },
        { left: "Privatheit (Art. 3)", right: "Recht auf Intimsphaere und persoenlichen Raum" },
        { left: "Qualifizierte Pflege (Art. 4)", right: "Anspruch auf fachlich gute Pflege" },
      ],
    },
  },

  // =============================================================
  // Step 9: Categorize — Ethische Prinzipien zuordnen (SORTIERSTATION)
  // =============================================================
  {
    stepId: "le01-s4-09",
    phase: "s4",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "sortierstation",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethische Prinzipien anwenden",
      body: "Ordne die Pflege-Situationen dem passenden ethischen Prinzip zu.",
    },
    contentB1: {
      title: "Welches Prinzip passt?",
      body: "Ordne die Pflege-Situation dem richtigen Grundsatz zu.",
    },
    question: {
      fragetext: "Ordne jede Situation dem passenden ethischen Prinzip zu.",
      categories: [
        { name: "Autonomie" },
        { name: "Benefizienz" },
        { name: "Nonmalefizienz" },
        { name: "Gerechtigkeit" },
      ],
      categoryItems: [
        { text: "Patient darf Behandlung ablehnen", correctCategory: 0 },
        { text: "Schmerztherapie nach Bedarf anbieten", correctCategory: 1 },
        { text: "Dekubitusprophylaxe bei bettlaegerigem Patienten", correctCategory: 2 },
        { text: "Alle Patienten gleich gut pflegen", correctCategory: 3 },
        { text: "Patient entscheidet selbst ueber Besuchszeiten", correctCategory: 0 },
        { text: "Sturzpraevention: Haltegriffe und Nachtlicht", correctCategory: 2 },
        { text: "Mobilisation zur Gesundheitsfoerderung", correctCategory: 1 },
        { text: "Keinen Patienten wegen Herkunft benachteiligen", correctCategory: 3 },
      ],
    },
  },

  // =============================================================
  // Step 10: Slider — Pflege-Charta Artikel (CHALLENGE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s4-10",
    phase: "s4",
    stepType: "slider",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-284"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Pflege-Charta",
      body: "Die Pflege-Charta definiert die Rechte hilfe- und pflegebeduerfiger Menschen.",
    },
    contentB1: {
      title: "Pflege-Charta",
      body: "Die Pflege-Charta hat wichtige Rechte fuer Patienten.",
    },
    question: {
      fragetext: "Wie viele Artikel hat die Pflege-Charta?",
      slider: {
        instruction: "Bewege den Regler auf die richtige Zahl.",
        unit: "Artikel",
        min: 1,
        max: 12,
        step: 1,
        correctValue: 8,
        tolerance: 0,
        explanation: "Die Pflege-Charta (2005) enthaelt 8 Artikel: Selbstbestimmung, Unversehrtheit, Privatheit, qualifizierte Pflege, Information, Kommunikation, Religion und wuerdevolles Sterben.",
        explanationB1: "Die Pflege-Charta hat 8 Artikel mit wichtigen Rechten fuer Patienten.",
      },
    },
  },

  // =============================================================
  // Step 11: Timeline — Ethik-Meilensteine (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s4-11",
    phase: "s4",
    stepType: "timeline",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285", "Q9", "Q10"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    imageUrl: "/images/le01/timeline-ethik.svg",
    imageAlt: "Zeitstrahl ethischer Meilensteine in der Pflege",
    contentC1: {
      title: "Ethik-Meilensteine",
      body: "Von den Menschenrechten bis zum Pflegeberufegesetz: Ethik hat eine Geschichte.",
    },
    contentB1: {
      title: "Wichtige Daten der Ethik",
      body: "Wann wurden wichtige ethische Regeln beschlossen?",
    },
    question: {
      fragetext: "Erkunde die Meilensteine.",
      timeline: {
        instruction: "Scrolle durch den Zeitstrahl.",
        events: [
          {
            id: "t1",
            time: "1948",
            title: "Allgemeine Erklaerung der Menschenrechte",
            description: "Die Vereinten Nationen verabschieden die Menschenrechtserklarung. Art. 1: Alle Menschen sind frei und gleich an Wuerde geboren.",
            descriptionB1: "Die Vereinten Nationen beschliessen: Alle Menschen haben die gleiche Wuerde.",
            icon: "globe",
          },
          {
            id: "t2",
            time: "1953",
            title: "ICN-Ethikkodex",
            description: "Der International Council of Nurses verabschiedet den ersten Ethikkodex fuer Pflegende. 4 Bereiche ethischen Handelns.",
            descriptionB1: "Der ICN macht die ersten ethischen Regeln fuer Pflegende.",
            icon: "file-text",
            highlight: true,
          },
          {
            id: "t3",
            time: "2005",
            title: "Pflege-Charta",
            description: "Die Pflege-Charta definiert 8 Artikel zu den Rechten hilfe- und pflegebeduerfiger Menschen in Deutschland.",
            descriptionB1: "Die Pflege-Charta beschreibt 8 Rechte fuer Menschen, die Pflege brauchen.",
            icon: "scroll",
            highlight: true,
          },
          {
            id: "t4",
            time: "2017",
            title: "Pflegeberufegesetz (PflBG)",
            description: "Das PflBG vereint Pflegeausbildungen und definiert vorbehaltene Taetigkeiten — ein Meilenstein fuer die Professionalisierung.",
            descriptionB1: "Neues Gesetz fuer die Pflege: Eine Ausbildung fuer alle, eigene Aufgaben fuer Pflegefachkraefte.",
            icon: "landmark",
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 12: Dialog — Yasemin: Ethische Reflexion Herr Brenner (STORY)
  // =============================================================
  {
    stepId: "le01-s4-12",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Wuerde im Alltag",
      body: "Yasemin denkt an Herr Brenner und verbindet Ethik mit ihrer Erfahrung.",
      fallbezug: "Yasemin erinnert sich an die Situation mit dem weinenden Patienten.",
    },
    contentB1: {
      title: "Wuerde im Alltag",
      body: "Yasemin denkt an Herr Brenner. Was hat Wuerde damit zu tun?",
      fallbezug: "Yasemin erinnert sich an den weinenden Patienten.",
    },
    question: {
      fragetext: "Was denkt Yasemin?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Yasemin erinnert sich: 'Was waere passiert, wenn ich zu Herr Brenner gesagt haette: Hoeren Sie auf zu weinen?'",
          contextB1: "Yasemin denkt: 'Was waere passiert, wenn ich gesagt haette: Hoeren Sie auf zu weinen?'",
          speaker: "Yasemin (denkt)",
          options: [
            {
              text: "Das haette seine Wuerde verletzt. Er hat ein Recht darauf, seine Gefuehle zu zeigen. Empathie schuetzt die Wuerde.",
              textB1: "Das haette seine Wuerde verletzt. Er darf seine Gefuehle zeigen. Mitgefuehl schuetzt seine Wuerde.",
              patientResponse: "Genau. Wuerde zu schuetzen bedeutet auch, Gefuehle zuzulassen — und gleichzeitig professionell zu handeln.",
              patientResponseB1: "Genau! Wuerde schuetzen heisst auch: Gefuehle erlauben. Und trotzdem professionell sein.",
              score: 3,
              feedback: "Wuerde ist nicht nur ein Gesetzesartikel — sie wird im taeglichen Umgang geschuetzt. Empathie ist ein Werkzeug dafuer.",
              feedbackB1: "Wuerde schuetzt man jeden Tag. Mitgefuehl hilft dabei.",
            },
            {
              text: "Weinen ist im Krankenhaus normal. Das hat nichts mit Wuerde zu tun.",
              textB1: "Weinen im Krankenhaus ist normal. Das hat nichts mit Wuerde zu tun.",
              patientResponse: "Weinen IST normal — aber wie wir darauf reagieren, zeigt, ob wir die Wuerde achten. 'Hoeren Sie auf' wuerde bedeuten: Deine Gefuehle sind nicht wichtig.",
              patientResponseB1: "Weinen ist normal. Aber wie wir reagieren, ist wichtig. 'Hoeren Sie auf' wuerde heissen: Deine Gefuehle sind egal.",
              score: 1,
              feedback: "Weinen ist menschlich. Aber die Reaktion der Pflegekraft entscheidet, ob die Wuerde gewahrt bleibt.",
              feedbackB1: "Weinen ist menschlich. Aber die Reaktion ist wichtig. Sie kann Wuerde schuetzen oder verletzen.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 13: TrueFalse — Ethik-Wissen (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s4-13",
    phase: "s4",
    stepType: "truefalse",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-285", "Q9"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Richtig oder falsch?",
      body: "Teste dein Wissen ueber Ethik in der Pflege.",
    },
    contentB1: {
      title: "Richtig oder falsch?",
      body: "Welche Aussagen stimmen?",
    },
    question: {
      fragetext: "Welche Aussagen sind richtig?",
      trueFalseCards: [
        {
          statement: "Der ICN-Ethikkodex formuliert Normen in 4 Bereichen.",
          isTrue: true,
          explanation: "4 Bereiche: gegenueber Mitmenschen, in der Berufsausuebung, gegenueber der Profession und gegenueber Kollegen.",
        },
        {
          statement: "Gerechtigkeit bedeutet, alle Patienten exakt gleich zu behandeln.",
          isTrue: false,
          explanation: "Gerechtigkeit meint faire Verteilung. Das kann bedeuten, dass ein Patient mit groesserem Bedarf mehr Unterstuetzung erhaelt — das ist fair, nicht gleich.",
        },
        {
          statement: "Die Pflege-Charta wurde 2005 veroeffentlicht.",
          isTrue: true,
          explanation: "Die Pflege-Charta erschien 2005 und enthaelt 8 Artikel zu den Rechten hilfe- und pflegebeduerfiger Menschen.",
        },
        {
          statement: "Ethik und Moral bedeuten dasselbe.",
          isTrue: false,
          explanation: "Moral sind die Normen einer Gesellschaft. Ethik ist das reflektierte Nachdenken ueber diese Normen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 14: Memory — Ethik-Begriffe (PUZZLE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s4-14",
    phase: "s4",
    stepType: "memory",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Memory: Ethik-Begriffe",
      body: "Finde die zusammengehoerenden Paare.",
    },
    contentB1: {
      title: "Memory-Spiel: Ethik",
      body: "Finde die Paare: Welches Wort passt zu welcher Erklaerung?",
    },
    question: {
      fragetext: "Decke zwei Karten auf und finde das passende Paar.",
      memoryPairs: [
        { a: "Autonomie", b: "Selbstbestimmung" },
        { a: "Benefizienz", b: "Wohltun" },
        { a: "Nonmalefizienz", b: "Nichtschaden" },
        { a: "Gerechtigkeit", b: "Faire Verteilung" },
        { a: "Ethik", b: "Reflektiertes Nachdenken ueber moralisches Handeln" },
        { a: "Wuerde", b: "Unantastbarer Wert jedes Menschen" },
      ],
    },
  },

  // =============================================================
  // Step 15: Timer — Speed-Fragen mit Interleaving (CHALLENGE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s4-15",
    phase: "s4",
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-285"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Speed-Runde: Ethik",
      body: "4 schnelle Fragen. Zwei davon sind Rueckblicke auf andere Themen.",
    },
    contentB1: {
      title: "Schnelle Fragen",
      body: "4 Fragen. Du hast 15 Sekunden. Zwei Fragen sind aus anderen Themen.",
    },
    question: {
      fragetext: "Beantworte die Fragen so schnell wie moeglich.",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Wie viele Bereiche hat der ICN-Ethikkodex?",
          options: ["2", "4", "6"],
          correctIndex: 1,
        },
        {
          question: "Welches Prinzip schuetzt den Patienten vor Schaden?",
          options: ["Benefizienz", "Nonmalefizienz", "Autonomie"],
          correctIndex: 1,
        },
        {
          question: "Wie viele Schritte hat der Pflegeprozess? (Interleaving)",
          options: ["4", "6", "8"],
          correctIndex: 1,
        },
        {
          question: "Was bedeutet 'kongruent' in der Kommunikation? (Interleaving)",
          options: ["Schweigen", "Worte und Koerpersprache stimmen ueberein", "Laut sprechen"],
          correctIndex: 1,
        },
      ],
    },
    wusstestDuDas: "Interleaving: Zwei Fragen aus Session 2 und 3. Wiederholung aus verschiedenen Themen staerkt das Langzeitgedaechtnis.",
  },

  // =============================================================
  // Step 16: Comparison — ICN-Ethikkodex vs. Pflege-Charta (ENTDECKER)
  // =============================================================
  {
    stepId: "le01-s4-16",
    phase: "s4",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.283-284", "Q9", "Q10"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-menschenbild",
    imageUrl: "/images/le01/ethik-vergleich.svg",
    imageAlt: "Vergleichstabelle: ICN-Ethikkodex vs. Pflege-Charta",
    contentC1: {
      title: "ICN-Ethikkodex vs. Pflege-Charta",
      body: "Zwei wichtige Dokumente — aber mit unterschiedlichem Fokus.",
    },
    contentB1: {
      title: "Zwei wichtige Dokumente",
      body: "Beide Dokumente sind wichtig fuer die Pflege. Aber sie sind unterschiedlich.",
    },
    question: {
      fragetext: "Vergleiche die beiden Dokumente.",
      comparison: {
        instruction: "Schau dir die Unterschiede an.",
        columns: [
          { label: "ICN-Ethikkodex", icon: "globe" },
          { label: "Pflege-Charta", icon: "scroll" },
        ],
        rows: [
          {
            criterion: "Herausgeber",
            values: ["International Council of Nurses (ICN)", "BMFSFJ (Deutschland)"],
            valuesB1: ["Internationale Pflege-Organisation", "Deutsches Ministerium"],
          },
          {
            criterion: "Zielgruppe",
            values: ["Pflegende weltweit", "Hilfe- und pflegebeduerfige Menschen in DE"],
            valuesB1: ["Pflegende auf der ganzen Welt", "Patienten in Deutschland"],
            highlight: 0,
          },
          {
            criterion: "Fokus",
            values: ["Verhaltensnormen fuer Pflegende (Pflichten)", "Rechte der Pflegeempfaenger"],
            valuesB1: ["Was Pflegende tun sollen (Pflichten)", "Was Patienten duerfen (Rechte)"],
            highlight: 1,
          },
          {
            criterion: "Umfang",
            values: ["4 Bereiche", "8 Artikel"],
            valuesB1: ["4 Bereiche", "8 Artikel"],
          },
          {
            criterion: "Jahr",
            values: ["1953 (mehrfach aktualisiert)", "2005"],
            valuesB1: ["1953", "2005"],
          },
        ],
      },
    },
  },

  // =============================================================
  // Step 17: Branching — Autonomie vs. Nonmalefizienz (PRAXIS-SIM)
  // =============================================================
  {
    stepId: "le01-s4-17",
    phase: "s4",
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethischer Konflikt: Aufstehen trotz Sturzgefahr",
      body: "Ein Patient will aufstehen, obwohl er sturzgefaehrdet ist. Zwei ethische Prinzipien stehen im Konflikt.",
    },
    contentB1: {
      title: "Was tust du?",
      body: "Ein Patient will aufstehen. Aber er koennte stuerzen. Was ist richtig?",
    },
    question: {
      fragetext: "Herr Weber (75) will allein zur Toilette gehen. Er hat aber ein hohes Sturzrisiko. Wie reagierst du?",
      branchingOptions: [
        {
          text: "Ich sage: 'Das ist zu gefaehrlich. Sie bleiben im Bett.' Ich bringe ihm eine Urinflasche.",
          feedback: "Du schuetzt ihn vor Schaden (Nonmalefizienz), aber du verletzt seine Selbstbestimmung (Autonomie). Er fuehlt sich bevormundet. Es gibt eine bessere Loesung.",
          feedbackB1: "Du schuetzt ihn vor einem Sturz. Aber er darf nicht selbst entscheiden. Er fuehlt sich bevormundet.",
          isCorrect: false,
        },
        {
          text: "Ich begleite ihn zur Toilette. So respektiere ich seinen Wunsch und sichere ihn gleichzeitig ab.",
          feedback: "Beide Prinzipien werden beruecksichtigt: Autonomie (er darf gehen) und Nonmalefizienz (du sicherst ihn ab). Das ist die ethisch beste Loesung.",
          feedbackB1: "Sehr gut! Er darf aufstehen (Selbstbestimmung). Und du hilfst ihm, damit er nicht stuerzt (Schutz).",
          isCorrect: true,
        },
        {
          text: "Ich sage: 'Natuerlich, gehen Sie ruhig allein.' Sein Wille zaehlt.",
          feedback: "Autonomie ist wichtig, aber Nonmalefizienz auch. Ihn allein gehen zu lassen bei hohem Sturzrisiko kann zu Schaden fuehren. Beide Prinzipien muessen abgewogen werden.",
          feedbackB1: "Sein Wille ist wichtig. Aber er koennte stuerzen und sich verletzen. Du musst beides beachten: seinen Wunsch und seine Sicherheit.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 18: Crossword — Ethik-Begriffe (PUZZLE, vertiefung)
  // =============================================================
  {
    stepId: "le01-s4-18",
    phase: "s4",
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.280-285"],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Kreuzwortraetsel: Ethik",
      body: "Teste dein Wissen spielerisch.",
    },
    contentB1: {
      title: "Kreuzwortraetsel",
      body: "Loese das Raetsel. Alle Woerter kennst du schon.",
    },
    question: {
      fragetext: "Fuelle das Kreuzwortraetsel aus.",
      crosswordWords: [
        { word: "WUERDE", clue: "Unantastbarer Wert jedes Menschen (Art. 1 GG)" },
        { word: "AUTONOMIE", clue: "Ethisches Prinzip: Selbstbestimmung" },
        { word: "ETHIKKODEX", clue: "Internationaler Leitfaden fuer Pflegende (ICN)" },
        { word: "VERLETZLICHKEIT", clue: "Pflegebeduerftige sind besonders davon betroffen (Haker)" },
        { word: "BENEFIZIENZ", clue: "Ethisches Prinzip: Wohltun" },
        { word: "CHARTA", clue: "8 Artikel zu den Rechten Pflegebeduerfiger" },
      ],
    },
  },

  // =============================================================
  // Step 19: Reflection — Prinzipienkonflikt (SCHREIBTISCH, vertiefung)
  // =============================================================
  {
    stepId: "le01-s4-19",
    phase: "s4",
    stepType: "reflection",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV",
    quellen: ["Q7 S.285"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Ethische Reflexion",
      body: "Zwei Prinzipien kollidieren. Wie wuerdest du entscheiden?",
    },
    contentB1: {
      title: "Nachdenken: Was ist richtig?",
      body: "Zwei Grundsaetze stehen im Widerspruch. Was tust du?",
    },
    question: {
      fragetext: "Ein Patient lehnt eine Behandlung ab, die ihm helfen wuerde. Welche 2 ethischen Prinzipien stehen im Konflikt? Was wuerdest du tun?",
      musterantwort: "Es stehen Autonomie (der Patient darf selbst entscheiden) und Benefizienz (die Behandlung wuerde ihm helfen) im Konflikt. Ich wuerde den Patienten ausfuehrlich beraten und seine Gruende fuer die Ablehnung erfragen. Wenn er nach Aufklaerung weiterhin ablehnt, respektiere ich seine Entscheidung — Autonomie hat Vorrang, solange der Patient einwilligungsfaehig ist.",
      bewertungskriterien: [
        "Beide Prinzipien korrekt benannt (Autonomie + Benefizienz)",
        "Handlungsvorschlag vorhanden",
        "Begruendung nachvollziehbar",
      ],
      satzanfaengeB1: [
        "Die zwei Prinzipien sind...",
        "Ich wuerde den Patienten...",
        "Ich finde es wichtig, dass...",
      ],
      reflection: {
        prompt: "Ein Patient lehnt eine Behandlung ab, die ihm helfen wuerde. Welche 2 ethischen Prinzipien stehen im Konflikt? Was wuerdest du tun?",
        placeholder: "Die zwei Prinzipien sind...",
        systemPrompt: "Bewerte ob der Schueler Autonomie und Benefizienz als konfligierende Prinzipien benennt. Positiv: Konkreter Handlungsvorschlag mit Begruendung. Feedback nach Sandwich-Prinzip.",
      },
    },
  },

  // =============================================================
  // Step 20: Confidence — Ethik-Wissen (CHALLENGE)
  // =============================================================
  {
    stepId: "le01-s4-20",
    phase: "s4",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Wie sicher bist du?",
      body: "Schaetze ehrlich ein: Was kannst du jetzt erklaeren?",
    },
    contentB1: {
      title: "Was weisst du jetzt?",
      body: "Schaetze ein: Was kannst du nach dieser Session erklaeren?",
    },
    question: {
      fragetext: "Bewerte jede Aussage: Wie sicher bist du?",
      confidenceCards: [
        {
          statement: "Ich kenne die 4 ethischen Prinzipien nach Beauchamp und Childress.",
          statementB1: "Ich kenne die 4 ethischen Grundsaetze.",
          isTrue: true,
          explanation: "Autonomie (Selbstbestimmung), Benefizienz (Wohltun), Nonmalefizienz (Nichtschaden), Gerechtigkeit (faire Verteilung).",
          explanationB1: "Selbstbestimmung, Wohltun, Nichtschaden und Gerechtigkeit.",
        },
        {
          statement: "Ich kann den ICN-Ethikkodex von der Pflege-Charta unterscheiden.",
          statementB1: "Ich kann den ICN-Ethikkodex und die Pflege-Charta unterscheiden.",
          isTrue: true,
          explanation: "ICN-Ethikkodex: Pflichten der Pflegenden (4 Bereiche, international). Pflege-Charta: Rechte der Pflegeempfaenger (8 Artikel, Deutschland).",
          explanationB1: "ICN-Ethikkodex: Was Pflegende tun sollen. Pflege-Charta: Was Patienten duerfen.",
        },
        {
          statement: "Ich kann erklaeren, was Wuerde in der Pflege bedeutet.",
          statementB1: "Ich kann erklaeren, was Wuerde heisst.",
          isTrue: true,
          explanation: "Wuerde ist jedem Menschen zu eigen — allein weil er existiert. Art. 1 GG: unantastbar. Pflegebeduerftige sind besonders verletzlich.",
          explanationB1: "Jeder Mensch hat Wuerde. Sie ist unantastbar. Patienten sind besonders verletzlich.",
        },
        {
          statement: "Ich weiss, was passiert, wenn ethische Prinzipien kollidieren.",
          statementB1: "Ich weiss, was passiert, wenn ethische Grundsaetze sich widersprechen.",
          isTrue: true,
          explanation: "Es gibt keine Hierarchie der Prinzipien. Jeder Fall erfordert eine Abwaegung — z.B. Autonomie vs. Nonmalefizienz bei Sturzgefahr.",
          explanationB1: "Kein Grundsatz ist wichtiger als der andere. Man muss in jeder Situation abwaegen.",
        },
      ],
    },
  },

  // =============================================================
  // Step 21: Dialog — Yasemin: Ethik und Empathie verbinden (STORY)
  // =============================================================
  {
    stepId: "le01-s4-21",
    phase: "s4",
    stepType: "dialog",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    contentC1: {
      title: "Yasemins Erkenntnis",
      body: "Yasemin zieht ein Fazit aus ihrer ersten Woche.",
      fallbezug: "Ende des Reflexionsgespraeches. Yasemin laechelt.",
    },
    contentB1: {
      title: "Was Yasemin gelernt hat",
      body: "Yasemin fasst zusammen, was sie diese Woche gelernt hat.",
      fallbezug: "Am Ende des Gespraeches. Yasemin laechelt.",
    },
    question: {
      fragetext: "Was sagt Yasemin?",
      patientName: "Yasemin Demirci",
      dialogPhases: [
        {
          context: "Praxisanleiterin: 'Was nimmst du aus dieser Woche mit?' Yasemin denkt einen Moment nach.",
          contextB1: "Praxisanleiterin: 'Was hast du gelernt?' Yasemin denkt nach.",
          speaker: "Yasemin",
          options: [
            {
              text: "Ich habe gelernt, dass Empathie und Ethik zusammengehoeren. Wenn ich dem Patienten wirklich helfen will, muss ich ueber das Richtige nachdenken — nicht nur fuehlen.",
              textB1: "Mitgefuehl und Ethik gehoeren zusammen. Wenn ich helfen will, muss ich nachdenken — nicht nur fuehlen.",
              patientResponse: "Das ist eine wunderbare Zusammenfassung. Empathie gibt die Richtung, Ethik gibt den Rahmen. Beides zusammen macht professionelle Pflege aus.",
              patientResponseB1: "Das ist eine tolle Zusammenfassung! Mitgefuehl zeigt die Richtung. Ethik gibt die Regeln. Zusammen ist das professionelle Pflege.",
              score: 3,
              feedback: "Yasemin verbindet Empathie (Session 3) mit Ethik (Session 4). Das ist der Kern professioneller Pflege.",
              feedbackB1: "Yasemin hat verstanden: Mitgefuehl und Ethik zusammen machen gute Pflege.",
            },
            {
              text: "Ethik ist kompliziert. Ich bin froh, dass es Regeln gibt — ICN-Kodex und Pflege-Charta helfen mir bei Entscheidungen.",
              textB1: "Ethik ist schwierig. Aber der ICN-Kodex und die Pflege-Charta helfen mir.",
              patientResponse: "Genau dafuer gibt es diese Dokumente. Sie geben Orientierung, wenn es schwierig wird.",
              patientResponseB1: "Genau! Regeln helfen, wenn es schwierig wird. Du musst nicht alles allein entscheiden.",
              score: 2,
              feedback: "Pragmatischer Ansatz. Die Dokumente bieten Orientierung — aber Reflexion bleibt wichtig.",
              feedbackB1: "Die Regeln helfen. Aber man muss auch selbst nachdenken. Das lernst du in der Ausbildung.",
            },
          ],
        },
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Rueckblick Session 4 (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s4-22",
    phase: "s4",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-menschenbild",
    contentC1: {
      title: "Das hast du gelernt",
      body: "Session 4 ist geschafft. Hier sind die wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Das hast du gelernt",
      body: "Session 4 ist fertig! Hier ist eine Zusammenfassung.",
    },
    question: {
      fragetext: "Deine Kernerkenntnisse aus Session 4:",
      summary: {
        reflexionRueckbezug: "Erinnerst du dich an den Swipe am Anfang? Du hast Aussagen zu Ethik und Wuerde bewertet. Jetzt weisst du: Wuerde ist unantastbar und ethische Prinzipien koennen kollidieren.",
        kernaussagen: [
          "Wuerde ist jedem Menschen zu eigen — allein weil er existiert. Art. 1 GG: unantastbar.",
          "4 ethische Prinzipien nach Beauchamp und Childress: Autonomie, Benefizienz, Nonmalefizienz, Gerechtigkeit.",
          "ICN-Ethikkodex (Pflichten der Pflegenden, 4 Bereiche) und Pflege-Charta (Rechte der Patienten, 8 Artikel) geben ethische Orientierung.",
          "Ethische Prinzipien koennen kollidieren — jeder Fall erfordert eine individuelle Abwaegung.",
        ],
      },
    },
  },
];
