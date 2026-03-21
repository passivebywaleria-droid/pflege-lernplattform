// Lektion 19: Evidenzbasierte Pflege bei Rheuma und Leitlinien
// CE 05 — Block F: Vertiefung & Pruefung
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-19-evidenz",
  ceId: "ce-05",
  title: "Evidenzbasierte Pflege bei Rheuma und Leitlinien",
  titleShort: "Evidenz",
  zeitrichtwert: 1,
  geschaetzteLernzeit: { c1: 10, b1: 15 },
  kompetenzbereiche: ["KB-IV.1", "KB-V.1"],
  bloomStufen: [1, 5],
  voraussetzungen: ["le-14-schmerzmanagement"],
  leitfall: {
    name: "Jutta Kramer",
    alter: 62,
    beruf: "Bibliothekarin (pensioniert)",
    diagnose: "RA seit 8 Jahren, Remission unter MTX + Adalimumab",
    setting: "Rheumaambulanz, Routinekontrolle",
    kernproblem:
      "Bringt Internetartikel mit und will MTX absetzen — verwechselt Blogartikel mit wissenschaftlicher Evidenz",
  },
  glossarCount: 10,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Step 1)
  // ==========================================
  {
    stepId: "evidenz-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q2", "Q10"],
    contentC1: {
      title: "Studien lesen, Leitlinien verstehen — wo stehst du?",
      body: "Stell dir vor: Eine Patientin bringt einen Zeitungsartikel mit und sagt: 'Hier steht, dass ein neues Naturheilmittel besser wirkt als mein Medikament.' Was wuerdest du tun? Koenntest du die Quelle einschaetzen?\n\nIn dieser Lektion lernst du:\n- Was evidenzbasierte Pflege (EBN) bedeutet — und warum sie wichtig ist\n- Wie du Studien und Leitlinien einordnen kannst\n- Warum Pflegende eigene Evidenz brauchen (nicht nur aerztliche Leitlinien)\n- Wie du Patientenfragen zu 'neuen Studien' kompetent beantwortest",
    },
    contentB1: {
      title: "Studien und Leitlinien — wo stehst du?",
      body: "Stell dir vor: Eine Patientin bringt einen Artikel aus dem Internet mit.\nSie sagt: 'Hier steht, dass ein Naturheilmittel besser wirkt als mein Medikament.'\nWas wuerdest du tun?\n\nIn dieser Lektion lernst du:\n- Was evidenzbasierte Pflege (EBN) bedeutet\n- Wie du Studien und Leitlinien einordnen kannst\n- Warum Pflegende eigene Leitlinien brauchen\n- Wie du Fragen von Patienten zu 'neuen Studien' beantworten kannst",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich, wenn du eine medizinische Studie bewerten sollst?",
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Step 2)
  // ==========================================
  {
    stepId: "evidenz-02",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q9"],
    contentC1: {
      title: "Eine Patientin, ein Ausdruck, eine Frage",
      body: "Jutta Kramer, 62 Jahre, pensionierte Bibliothekarin. Seit 8 Jahren Rheumatoide Arthritis, stabil unter Methotrexat 15 mg/Woche und Adalimumab. DAS28 = 2,4 — das ist Remission.\n\nHeute kommt sie zur Routinekontrolle in die Rheumaambulanz. Sie legt einen ausgedruckten Artikel auf den Tisch: 'Neue Studie zeigt: Mediterrane Ernaehrung kann Rheuma-Medikamente ersetzen!'\n\nFrau Kramer sagt: 'Ich habe das gruendlich recherchiert. Als Bibliothekarin weiss ich, wie man serioes recherchiert. Hier steht schwarz auf weiss, dass ich das MTX absetzen kann, wenn ich meine Ernaehrung umstelle. Mein Mann und ich wollen weniger Chemie.'\n\nDu schaust dir den Artikel an. Er stammt von einem Gesundheitsblog, zitiert eine echte Studie — aber verkuerzt und verzerrt. Die Originalstudie sagt etwas ganz anderes als die Ueberschrift.",
      fallbezug:
        "Jutta ist die Protagonistin dieser Lektion. Ihre Situation ist der Ausgangspunkt: Wie unterscheidet man gute von schlechter Evidenz? Und wie bespricht man das mit einer Patientin, die sich fuer kompetent haelt?",
      glossarBegriffe: ["Remission", "DAS28"],
    },
    contentB1: {
      title: "Frau Kramer bringt einen Artikel mit",
      body: "Jutta Kramer ist 62 Jahre alt.\nSie war Bibliothekarin (Buecherei).\nJetzt ist sie in Rente.\n\nSie hat seit 8 Jahren Rheuma (RA).\nSie nimmt Methotrexat und Adalimumab.\nIhre Krankheit ist ruhig. Das nennt man Remission.\n\nHeute kommt sie zur Kontrolle.\nSie hat einen Artikel aus dem Internet ausgedruckt.\nDer Artikel sagt: 'Gesunde Ernaehrung kann Rheuma-Medikamente ersetzen!'\n\nFrau Kramer sagt: 'Ich habe das gut recherchiert.'\n'Als Bibliothekarin weiss ich, wie man sucht.'\n'Ich will das Methotrexat absetzen.'\n'Mein Mann sagt auch: Weniger Chemie ist besser.'\n\nDu schaust dir den Artikel an.\nEr kommt von einem Gesundheits-Blog.\nEr zitiert eine echte Studie — aber nicht richtig.\nDie echte Studie sagt etwas anderes als der Blog.",
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 3-5)
  // ==========================================
  {
    stepId: "evidenz-03",
    phase: 3,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q2", "Q10"],
    contentC1: {
      title: "EBN — Nicht nur Studien, sondern ein Denkmodell",
      body: "Evidence-based Nursing (EBN) bedeutet: Pflegeentscheidungen auf der Grundlage der besten verfuegbaren Evidenz treffen — zusammen mit klinischer Expertise und den Wuenschen des Patienten.\n\nDie drei Saeulen nach Sackett (2000):\n\nSaeule 1: Beste Forschungsevidenz\nSystematische Reviews, Leitlinien, hochwertige Studien. Nicht jede 'Studie' ist gleich gut — es gibt eine Hierarchie (Evidenzpyramide).\n\nSaeule 2: Klinische Expertise\nDein Fachwissen, deine Erfahrung, deine Beobachtungen am Patienten. Erfahrungswissen ist NICHT wertlos — aber allein nicht ausreichend.\n\nSaeule 3: Patientenwerte und -praeferenzen\nWas will der Patient? Was ist ihm wichtig? Shared Decision Making — gemeinsam entscheiden.\n\nWICHTIG: Nur wenn alle drei Saeulen zusammenkommen, ist eine Entscheidung evidenzbasiert.\n\nDie Evidenzpyramide (von oben nach unten):\n1. Systematische Reviews / Meta-Analysen (hoechste Evidenz)\n2. Randomisierte kontrollierte Studien (RCTs)\n3. Kohortenstudien\n4. Fall-Kontroll-Studien\n5. Fallberichte / Fallserien\n6. Expertenmeinung (niedrigste Evidenz)",
      glossarBegriffe: [
        "Evidence-based Nursing (EBN)",
        "Randomisierte kontrollierte Studie (RCT)",
        "Systematischer Review",
        "Cochrane Review",
      ],
    },
    contentB1: {
      title: "Was ist evidenzbasierte Pflege?",
      body: "Evidence-based Nursing (EBN) heisst:\nPflege-Entscheidungen auf Wissen aufbauen.\nNicht nur auf Erfahrung. Nicht nur auf Studien. Auf beides — und auf den Patienten.\n\nEs gibt drei Saeulen:\n\nSaeule 1: Die beste Forschung\nGute Studien und Leitlinien.\nNicht jede 'Studie' ist gleich gut.\nEs gibt bessere und schlechtere Studien.\n\nSaeule 2: Dein Fachwissen\nWas du gelernt hast.\nWas du bei Patienten beobachtest.\nDeine Erfahrung ist wichtig — aber allein reicht sie nicht.\n\nSaeule 3: Der Patient\nWas will der Patient?\nWas ist ihm wichtig?\nGemeinsam entscheiden.\n\nWICHTIG: Alle drei Saeulen muessen zusammenkommen.\nEine Studie allein reicht nicht.\nErfahrung allein reicht nicht.\nDer Patientenwunsch allein reicht nicht.\n\nDie Evidenz-Pyramide zeigt: Welche Studie ist am besten?\nGanz oben: Uebersichtsarbeiten (viele Studien zusammen)\nIn der Mitte: Einzelne grosse Studien\nGanz unten: Meinung von Experten",
    },
  },
  {
    stepId: "evidenz-04",
    phase: 3,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "S1, S2, S3 — Was steckt dahinter?",
      body: "Die AWMF (Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften) klassifiziert Leitlinien nach ihrer methodischen Qualitaet:\n\n- S1: Handlungsempfehlung einer Expertengruppe (informeller Konsens)\n- S2k: Formale Konsensfindung (Konsensuskonferenz)\n- S2e: Systematische Evidenzrecherche und -bewertung\n- S3: Hoechste Stufe — systematische Recherche + formaler Konsens + Evidenz- und Empfehlungsgrade\n\nDie S3-Leitlinie zur Rheumatoiden Arthritis (AWMF 060-002) ist der Goldstandard fuer Therapieentscheidungen bei RA.",
      glossarBegriffe: ["AWMF-Leitlinie", "S3-Leitlinie"],
    },
    question: {
      fragetext:
        "Was unterscheidet eine S3-Leitlinie von einer S1-Leitlinie?",
      optionen: [
        {
          text: "S3-Leitlinien gelten nur fuer Aerzte, S1-Leitlinien auch fuer Pflegende",
          isCorrect: false,
          explanation:
            "Falsch. Die Stufenklassifikation bezieht sich auf die methodische Qualitaet, nicht auf die Zielgruppe. Beide gelten fuer alle Gesundheitsberufe.",
        },
        {
          text: "S3-Leitlinien basieren auf systematischer Evidenzrecherche UND formalem Konsens, S1 nur auf Expertenmeinung",
          isCorrect: true,
          explanation:
            "Richtig! S3 ist die hoechste Stufe: systematische Recherche + Evidenzbewertung + formaler Konsens mehrerer Fachgesellschaften. S1 basiert nur auf dem informellen Konsens einer Expertengruppe.",
        },
        {
          text: "S3-Leitlinien sind neuer, S1-Leitlinien sind veraltet",
          isCorrect: false,
          explanation:
            "Falsch. Die Zahl sagt nichts ueber das Alter aus, sondern ueber die methodische Qualitaet. Es gibt aktuelle S1-Leitlinien und aeltere S3-Leitlinien.",
        },
        {
          text: "S3-Leitlinien sind rechtlich verbindlich, S1-Leitlinien sind nur Empfehlungen",
          isCorrect: false,
          explanation:
            "Falsch. Keine Leitlinie ist rechtlich verbindlich — alle sind Empfehlungen. Allerdings: Wer von einer S3-Leitlinie abweicht, muss das begruenden koennen.",
        },
      ],
    },
  },
  {
    stepId: "evidenz-05",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q2", "Q3", "Q10"],
    contentC1: {
      title: "Welche Evidenz steckt dahinter?",
      body: "Nicht jede Informationsquelle hat denselben Wert. Ein Blogbeitrag ist keine Studie. Eine Einzelfallbeobachtung ist kein RCT. Und selbst unter Studien gibt es grosse Qualitaetsunterschiede. Die Evidenzpyramide hilft dir, Quellen einzuordnen.",
    },
    question: {
      fragetext: "Ordne jeden Studientyp der richtigen Evidenzstufe zu:",
      matchingPairs: [
        {
          left: "Cochrane Review (z.B. zu Biologika bei RA)",
          right: "Hoechste Evidenz (Stufe Ia)",
        },
        {
          left: "RCT (z.B. MTX vs. Placebo, 200 Patienten)",
          right: "Hohe Evidenz (Stufe Ib)",
        },
        {
          left: "Kohortenstudie (Verlauf ueber 5 Jahre)",
          right: "Mittlere Evidenz (Stufe IIa)",
        },
        {
          left: "Fallbericht (Patient X reagierte gut auf...)",
          right: "Niedrige Evidenz (Stufe IV)",
        },
        {
          left: "Expertenmeinung eines Professors",
          right: "Niedrigste Evidenz (Stufe V)",
        },
        {
          left: "AWMF S3-Leitlinie (z.B. RA-Leitlinie 2024)",
          right: "Hoechste Synthese (Evidenz + Konsens)",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Step 6)
  // ==========================================
  {
    stepId: "evidenz-06",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q7", "Q9"],
    contentC1: {
      title: "Die Patientin hat recherchiert — und jetzt?",
      body: "Zurueck bei Frau Kramer. Sie haelt dir den Artikel hin: 'Mediterrane Ernaehrung kann Rheuma-Medikamente ersetzen!' Sie hat sich offensichtlich Muehe gegeben. Sie ist ueberzeugt, dass sie richtig recherchiert hat. Was tust du?",
      fallbezug:
        "Jutta Kramer hat als Bibliothekarin jahrzehntelang Quellen bewertet — aber Gesundheitsinformationen sind ein anderes Feld. Der Artikel zitiert eine echte Cochrane-Review zur mediterranen Ernaehrung — aber die Originalarbeit empfiehlt Ernaehrung als ERGAENZUNG, nicht als Ersatz fuer DMARDs.",
    },
    question: {
      fragetext:
        "Frau Kramer zeigt dir den Artikel und will MTX absetzen. Wie reagierst du?",
      branchingOptions: [
        {
          text: "Das klingt interessant! Ernaehrung ist bestimmt besser als Chemie. Sprechen Sie mit dem Arzt ueber das Absetzen.",
          feedback:
            "Problematisch. Du bestaerkst eine falsche Schlussfolgerung, ohne den Artikel zu pruefen. 'Chemie' ist ein wertender Begriff — MTX hat in Studien mit ueber 50 Jahren Erfahrung die hoechste Evidenz bei RA. Unkritische Zustimmung kann zu einem Schub fuehren, der irreversible Gelenkschaeden verursacht.",
          isCorrect: false,
        },
        {
          text: "Frau Kramer, das ist nur ein Blogartikel. Vertrauen Sie lieber Ihrem Arzt als dem Internet.",
          feedback:
            "Verstaendlich, aber kontraproduktiv. Du wertest ihre Recherche ab und stellst eine Autoritaet auf. Das frustriert informierte Patienten und beschaedigt die Vertrauensbeziehung. Frau Kramer wird sich nicht ernst genommen fuehlen.",
          isCorrect: false,
        },
        {
          text: "Toll, dass Sie sich informieren! Lassen Sie uns den Artikel gemeinsam anschauen — ich zeige Ihnen, wie man die Qualitaet einer Quelle einschaetzt.",
          feedback:
            "Genau richtig! Du wertschaetzt ihre Initiative, nimmst ihre Recherche ernst und nutzt die Situation als Edukationsmoment. Gemeinsam stellt ihr fest: Der Blog zitiert eine Studie — aber die sagt 'ergaenzend', nicht 'ersetzend'. So lernt Frau Kramer, Quellen kritisch einzuordnen, ohne sich belehrt zu fuehlen. Das ist EBN in der Praxis.",
          isCorrect: true,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 7)
  // ==========================================
  {
    stepId: "evidenz-07",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q2", "Q7", "Q9"],
    contentC1: {
      title: "Evidenz erklaeren — verstaendlich und wertschaetzend",
      body: "Du hast den Blogartikel mit Frau Kramer angeschaut. Jetzt moechte sie wissen: 'Warum reicht diese Studie nicht, damit ich mein MTX absetzen kann?'",
      fallbezug:
        "Frau Kramer ist kooperativ und lernbereit — aber sie braucht eine verstaendliche Erklaerung. Du sollst ihr zeigen, warum eine einzelne Studie (oder ein Blogartikel darueber) nicht ausreicht, um eine Therapieentscheidung zu treffen.",
    },
    contentB1: {
      title: "Erklaere es Frau Kramer",
      body: "Du hast den Artikel mit Frau Kramer angeschaut.\nJetzt fragt sie: 'Warum reicht diese Studie nicht?'\n'Warum kann ich mein MTX nicht absetzen?'\n\nErklaere es Frau Kramer.\nBenutze einfache Worte.\nDenke an die drei Saeulen.",
    },
    question: {
      fragetext:
        "Erklaere Frau Kramer in 3-5 Saetzen, warum der Blogartikel allein nicht ausreicht, um MTX abzusetzen. Beruecksichtige dabei die drei Saeulen der EBN.",
      musterantwort:
        "Frau Kramer, Ihre Recherche zeigt echtes Interesse an Ihrer Gesundheit — das ist toll. Der Blogartikel verkuerzt allerdings die Originalstudie: Die echte Forschung empfiehlt mediterrane Ernaehrung als Ergaenzung zur Therapie, nicht als Ersatz. Fuer eine Therapieaenderung brauchen wir drei Dinge: die beste Forschungsevidenz (hier sagt die S3-Leitlinie: MTX beibehalten), die Einschaetzung Ihres Rheumatologen (der Ihre Krankheitsgeschichte kennt), und Ihre Wuensche. Alle drei zusammen ergeben eine gute Entscheidung — nicht der Artikel allein. Gerne koennen wir mit dem Arzt gemeinsam besprechen, wie Sie die Ernaehrung ergaenzend einbauen koennen.",
      bewertungskriterien: [
        "Wertschaetzung der Patientin (nicht belehren, nicht abwimmeln)",
        "Unterscheidung Blog vs. Originalstudie (Qualitaet der Quelle)",
        "Drei Saeulen der EBN erwaehnt (Evidenz + Expertise + Patientenwerte)",
        "Ernaehrung als Ergaenzung, nicht als Ersatz dargestellt",
        "Loesung angeboten (gemeinsames Gespraech mit Arzt)",
      ],
      satzanfaengeB1: [
        "Frau Kramer, Ihr Interesse an Ihrer Gesundheit ist...",
        "Der Artikel sagt aber nicht genau das, was die echte Studie...",
        "Fuer eine gute Entscheidung brauchen wir drei Dinge:...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 8)
  // ==========================================
  {
    stepId: "evidenz-08",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q4", "Q5", "Q6", "Q8"],
    contentC1: {
      title:
        "Nurse-led Care — Pflegende als Evidenz-Anwender und Evidenz-Erzeuger",
      body: "Evidenzbasierte Pflege ist nicht nur 'Studien lesen'. Es geht darum, Pflege auf dem besten verfuegbaren Wissen aufzubauen — und dieses Wissen mitzugestalten.\n\nWas Pflegende schon nutzen (oft ohne es zu wissen):\nDie DNQP-Expertenstandards (Schmerzmanagement, Sturzprophylaxe, Mobilitaetsfoerderung) sind evidenzbasierte Pflegeleitlinien. Wer nach Expertenstandard arbeitet, arbeitet bereits evidenzbasiert.\n\nWas die Forschung zeigt:\nEine Meta-Analyse (Li et al. 2024, 14 Studien, 3.369 Patienten) belegt: Nurse-led Care bei RA ist genauso effektiv wie aerztlich geleitete Versorgung — bei hoeherer Patientenzufriedenheit und besserer Selbstwirksamkeit. Die EULAR empfiehlt seit 2012, dass Patienten Zugang zu spezialisierten Pflegefachkraeften haben sollen.\n\nDein Praxisauftrag:\n1. Suche einen DNQP-Expertenstandard, der fuer Rheuma relevant ist (z.B. Schmerzmanagement). Lies die Kurzfassung.\n2. Frage dich: Wird auf deiner Station nach diesem Standard gearbeitet? Was wird umgesetzt, was nicht?\n\nEvidenz ist kein Luxus fuer die Wissenschaft. Evidenz ist das Werkzeug, mit dem du deine taegliche Pflege verbessern kannst — fuer jeden einzelnen Patienten.",
      fallbezug:
        "Frau Kramer hat heute etwas Wichtiges gelernt: Nicht jede Quelle ist gleich gut. Aber auch du hast etwas gelernt — naemlich wie du evidenzbasiert beraten kannst. Das ist eine Kompetenz, die in jedem Setting gebraucht wird.",
      glossarBegriffe: ["DNQP-Expertenstandard", "Nurse-led Care", "EULAR"],
    },
    contentB1: {
      title: "Pflege und Evidenz — die Zukunft",
      body: "Evidenzbasierte Pflege heisst nicht nur: Studien lesen.\nEs heisst: Die beste Pflege geben — mit dem besten Wissen.\n\nWas Pflegende schon nutzen:\nDie DNQP-Expertenstandards.\nDas sind Leitlinien fuer die Pflege.\nZum Beispiel: Wie behandelt man Schmerzen richtig?\nWie verhindert man Stuerze?\nWer nach diesen Standards arbeitet, arbeitet evidenzbasiert.\n\nWas die Forschung zeigt:\nEine grosse Studie (Li et al. 2024) hat gezeigt:\nPflege-geleitete Versorgung (Nurse-led Care) bei RA ist genauso gut wie Arzt-geleitete Versorgung.\nDie Patienten sind sogar zufriedener.\nUnd sie koennen besser fuer sich selbst sorgen.\n\nDein Auftrag fuer die Praxis:\n1. Suche einen Expertenstandard, der zu Rheuma passt (z.B. Schmerz).\n2. Lies die Kurzfassung (2-3 Seiten).\n3. Frage dich: Wird das auf deiner Station gemacht?",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Evidence-based Nursing (EBN)",
    erklaerung:
      "Pflegeentscheidungen auf Basis der besten Forschungsevidenz, klinischer Expertise und Patientenwerten",
  },
  {
    begriff: "Evidenzpyramide",
    erklaerung:
      "Hierarchie der Studienqualitaet — von Expertenmeinung (niedrigste) bis Systematischer Review (hoechste)",
  },
  {
    begriff: "Randomisierte kontrollierte Studie (RCT)",
    erklaerung:
      "Studiendesign mit Zufallszuteilung zu Behandlungs- und Kontrollgruppe — Goldstandard der klinischen Forschung",
  },
  {
    begriff: "Systematischer Review / Cochrane Review",
    erklaerung:
      "Zusammenfassung aller verfuegbaren Studien zu einer Fragestellung nach strengen methodischen Kriterien",
  },
  {
    begriff: "AWMF-Leitlinie",
    erklaerung:
      "Handlungsempfehlung der Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften, klassifiziert nach S1 bis S3",
  },
  {
    begriff: "S3-Leitlinie",
    erklaerung:
      "Hoechste Entwicklungsstufe einer Leitlinie: systematische Evidenzrecherche + formaler Konsens + Empfehlungsgrade",
  },
  {
    begriff: "DNQP-Expertenstandard",
    erklaerung:
      "Evidenzbasierte Handlungsempfehlung fuer die Pflege, entwickelt vom Deutschen Netzwerk fuer Qualitaetsentwicklung in der Pflege",
  },
  {
    begriff: "Nurse-led Care",
    erklaerung:
      "Pflege-geleitete Versorgung — Pflegefachkraefte uebernehmen eigenstaendig Routinekontrollen und Beratung",
  },
  {
    begriff: "EULAR",
    erklaerung:
      "European Alliance of Associations for Rheumatology — europaeische Fachgesellschaft mit Empfehlungen auch fuer Pflegende",
  },
  {
    begriff: "Theorie-Praxis-Transfer",
    erklaerung:
      "Uebertragung von wissenschaftlichem Wissen (Leitlinien, Studien) in die taegliche Pflegepraxis",
  },
];
