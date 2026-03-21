// Lektion 16: Patientenedukation und Beratung
// CE 05 — Block E: Beratung & Psychosoziales
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-16-edukation",
  ceId: "ce-05",
  title: "Patientenedukation und Beratung",
  titleShort: "Edukation",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-II.2", "KB-V.1"],
  bloomStufen: [3, 6],
  voraussetzungen: ["le-12-pflegeprozess-1"],
  leitfall: {
    name: "Linh Nguyen",
    alter: 32,
    beruf: "Grafikdesignerin (Freelancerin)",
    diagnose: "Rheumatoide Arthritis, DAS28 5,2 nach MTX-Abbruch",
    setting: "Rheumatologische Ambulanz, Wiedervorstellung",
    kernproblem:
      "MTX eigenmaechtig abgesetzt nach Instagram-Fehlinformation, eingeschraenkte Health Literacy trotz hoher Bildung",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "edukation-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q9"],
    contentC1: {
      title: "Was kannst du schon zum Thema Patientenedukation?",
      body: "In dieser Lektion geht es um eine der wichtigsten pflegerischen Kernkompetenzen: Patienten informieren, schulen und beraten. Nicht als Nebensache — sondern als eigenstaendige, professionelle Pflegehandlung.\n\nDu lernst:\n- Drei Edukationsformen und wann du welche einsetzt\n- Wie du Gesundheitskompetenz (Health Literacy) einschaetzen kannst\n- Motivierende Gespraechsfuehrung — wie du Patienten erreichst, ohne zu belehren\n- Shared Decision Making — wie Patienten an Entscheidungen teilhaben\n- Warum Adherence scheitert und was Pflege dagegen tun kann\n\nDas Ziel: Du fuehrst nach dieser Lektion ein strukturiertes Beratungsgespraech — patientenzentriert, evidenzbasiert und motivierend.",
      glossarBegriffe: ["Patientenedukation"],
    },
    contentB1: {
      title: "Was weisst du ueber Patientenberatung?",
      body: "In dieser Lektion lernst du: Wie beraetest du Patienten richtig?\n\nDas ist eine der wichtigsten Aufgaben in der Pflege.\nDu lernst:\n- Drei Arten von Patientenedukation (Patientenschulung)\n- Wie du erkennst, ob ein Patient Informationen versteht\n- Wie du ein gutes Beratungsgespraech fuehrst\n- Wie Patienten bei Entscheidungen mitmachen koennen\n- Warum Patienten manchmal ihre Medikamente nicht nehmen\n\nNach dieser Lektion kannst du ein Beratungsgespraech fuehren.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Patientenedukation und Beratung?",
    },
  },
  {
    stepId: "edukation-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q9"],
    contentC1: {
      title: "Drei Formen — ein Ziel",
      body: "",
    },
    question: {
      fragetext:
        "Eine Pflegende erklaert einer Patientin ausfuehrlich, wie sie ihre MTX-Spritze selbst verabreichen kann. Sie zeigt es vor, laesst die Patientin ueben, korrigiert sanft und gibt Feedback. Welche Edukationsform liegt hier vor?",
      optionen: [
        {
          text: "Informieren — sie gibt Wissen weiter",
          isCorrect: false,
          explanation:
            "Informieren waere einseitig — zum Beispiel ein Merkblatt ueberreichen. Hier findet aber ein aktiver Lernprozess mit Uebung und Feedback statt.",
        },
        {
          text: "Beraten — sie beraet die Patientin zur Selbstinjektion",
          isCorrect: false,
          explanation:
            "Beraten waere ein ergebnisoffener Dialog ueber Optionen — zum Beispiel 'Moechten Sie MTX oral oder subkutan?' Hier geht es um eine konkrete Fertigkeitsvermittlung.",
        },
        {
          text: "Schulen — sie vermittelt eine Fertigkeit strukturiert mit Uebung",
          isCorrect: true,
          explanation:
            "Richtig! Schulen (Anleiten) bedeutet: Strukturierte Wissensvermittlung mit praktischer Uebung und Feedback. Die Patientin lernt eine konkrete Handlung. Das ist der Kern einer Schulung.",
        },
        {
          text: "Motivieren — sie motiviert die Patientin zur Selbststaendigkeit",
          isCorrect: false,
          explanation:
            "Motivation kann ein Effekt der Schulung sein, aber 'Motivieren' ist keine eigenstaendige Edukationsform. Die drei Formen sind: Informieren, Schulen, Beraten.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "edukation-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q2", "Q7", "Q10"],
    contentC1: {
      title: "Linh Nguyen — Wenn Wissen schadet",
      body: "Linh Nguyen, 32 Jahre, Grafikdesignerin, Freelancerin. In Deutschland geboren, vietnamesische Eltern. Perfektes Deutsch, Uni-Abschluss, technikaffin.\n\nVor vier Monaten wurde bei Linh eine Rheumatoide Arthritis diagnostiziert. Der Rheumatologe verschrieb Methotrexat (MTX) 15 mg pro Woche. Linh nahm es sechs Wochen — dann stoppte sie.\n\nWas passiert war: Eine Influencerin auf Instagram postete ein Video: 'MTX ist Chemotherapie-Gift — dein Koerper heilt sich selbst mit Kurkuma und intermittierendem Fasten.' Linh recherchierte, fand Patientenforen die das bestaetigten, und setzte MTX ab. Ihre Eltern unterstuetzten das: 'Westliche Medizin hat zu viele Nebenwirkungen.'\n\nHeute kommt Linh zur Wiedervorstellung. DAS28: 5,2 (hohe Krankheitsaktivitaet). Beide Handgelenke geschwollen, kann kaum noch am iPad zeichnen. Ihr Partner Jonas ist besorgt und sagt: 'Du musst wieder die Tabletten nehmen!' Linh fuehlt sich bevormundet — vom Arzt, vom Partner, von allen.\n\nDie Rheumatologin bittet dich als Pflegende: 'Koennen Sie mit Frau Nguyen sprechen? Sie vertraut dem aerztlichen Rat nicht mehr.'",
      fallbezug:
        "Linh begleitet dich durch die gesamte Lektion. Ihr Fall zeigt: Bildung schuetzt nicht vor Fehlinformation. Und Belehrung macht es schlimmer.",
      glossarBegriffe: [
        "Health Literacy (Gesundheitskompetenz)",
        "Adherence (Therapietreue)",
      ],
    },
    contentB1: {
      title: "Linh Nguyen — Eine Patientin, die sich selbst informiert hat",
      body: "Linh Nguyen ist 32 Jahre alt.\nSie ist Grafikdesignerin. Sie arbeitet als Freelancerin (selbststaendig).\nLinh ist in Deutschland geboren. Ihre Eltern kommen aus Vietnam.\nSie spricht perfekt Deutsch und hat studiert.\n\nVor vier Monaten hat der Arzt gesagt: Linh hat Rheuma (Rheumatoide Arthritis).\nDer Arzt hat Methotrexat (MTX) verschrieben. Das ist ein Medikament gegen Rheuma.\nLinh hat MTX sechs Wochen genommen. Dann hat sie aufgehoert.\n\nWas ist passiert?\nEine Frau auf Instagram hat gesagt: 'MTX ist Gift! Kurkuma heilt besser.'\nLinh hat im Internet nachgelesen. Andere Patienten haben das Gleiche gesagt.\nIhre Eltern haben gesagt: 'Westliche Medizin hat zu viele Nebenwirkungen.'\n\nHeute kommt Linh zum Arzt. Ihre Haende sind geschwollen.\nSie kann kaum noch zeichnen. Die Krankheit ist schlimmer geworden.\nIhr Partner Jonas sagt: 'Du musst wieder MTX nehmen!'\nLinh fuehlt sich bevormundet (alle sagen ihr, was sie tun soll).\n\nDie Aerztin bittet dich: 'Koennen Sie mit Frau Nguyen sprechen?'",
    },
  },
  {
    stepId: "edukation-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q2", "Q7"],
    contentC1: {
      title: "Das eigentliche Problem erkennen",
      body: "",
      fallbezug:
        "Linh hat MTX eigenmaechtig abgesetzt. Die entscheidende Frage fuer dein Beratungsgespraech: WARUM?",
    },
    question: {
      fragetext:
        "Linh hat einen Uni-Abschluss, spricht perfekt Deutsch und kann sich online informieren. Trotzdem hat sie MTX basierend auf einer Instagram-Influencerin abgesetzt. Was ist die wahrscheinlichste Erklaerung?",
      optionen: [
        {
          text: "Linh ist ungebildet und versteht medizinische Zusammenhaenge nicht",
          isCorrect: false,
          explanation:
            "Falsch — und genau DAS ist das Vorurteil. Linh hat einen Universitaetsabschluss. Bildungsgrad schuetzt aber nicht automatisch vor eingeschraenkter Gesundheitskompetenz.",
        },
        {
          text: "Linh kann Gesundheitsinformationen finden, aber nicht bewerten — eingeschraenkte Health Literacy trotz hoher Bildung",
          isCorrect: true,
          explanation:
            "Richtig! Die TUM-Studie 2024 zeigt: 75,8% der Deutschen haben eingeschraenkte Gesundheitskompetenz. Besonders problematisch ist die Bewertungskompetenz — das Unterscheiden zwischen wissenschaftlicher Evidenz und Meinungen. Linh kann Informationen FINDEN, aber nicht BEWERTEN.",
        },
        {
          text: "Linh hat eine Persoenlichkeitsstoerung und lehnt Autoritaeten ab",
          isCorrect: false,
          explanation:
            "Weder medizinisch noch pflegerisch angemessene Einschaetzung. Es geht nicht um Persoenlichkeitsmerkmale, sondern um ein Informations- und Kompetenzproblem.",
        },
        {
          text: "Der Arzt hat Linh nicht ausfuehrlich genug aufgeklaert — das ist ein reines Arztproblem",
          isCorrect: false,
          explanation:
            "Die aerztliche Aufklaerung war moeglicherweise lueckenhaft, aber Patientenedukation ist ausdruecklich auch Pflegeaufgabe. Aufklaerung allein schuetzt zudem nicht vor spaeterer Fehlinformation.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-7)
  // ==========================================
  {
    stepId: "edukation-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q2", "Q3", "Q9"],
    contentC1: {
      title:
        "Informieren, Schulen, Beraten — und warum Health Literacy alles veraendert",
      body: "Patientenedukation hat drei Formen (Segmueller 2022):\n\nInformieren = Wissen einseitig weitergeben. Beispiel: Merkblatt zu MTX-Nebenwirkungen aushaendigen. Wann: Bei konkretem Informationsbedarf, als Ergaenzung. Grenze: Patient versteht nicht automatisch, was er liest.\n\nSchulen (Anleiten) = Strukturiert Wissen und Fertigkeiten vermitteln. Beispiel: MTX-Selbstinjektion demonstrieren, ueben lassen, Feedback geben. Wann: Bei neuen Fertigkeiten, nach Erstdiagnose, bei Therapieumstellung. Format: StruPI-Programm (DGRh) — 3 Module fuer neu diagnostizierte RA-Patienten.\n\nBeraten = Gemeinsam Loesungen erarbeiten im Dialog. Beispiel: Mit Linh besprechen, welche Informationsquellen sie nutzt und wie sie Evidenz von Meinung unterscheiden kann. Wann: Bei Adherence-Problemen, Aengsten, Lebensstilveraenderungen, Entscheidungskonflikten. Kern: Nicht belehren — sondern verstehen, reflektieren, gemeinsam planen.\n\nHealth Literacy bestimmt, WELCHE Form du waehlst: Die TUM-Studie 2024 zeigt: Gesundheitskompetenz hat vier Dimensionen — Informationen finden, verstehen, bewerten und anwenden. Linh kann Informationen finden (Dimension 1), versteht sie teilweise (Dimension 2), kann sie aber nicht bewerten (Dimension 3). Genau dort muss Edukation ansetzen.",
      glossarBegriffe: [
        "Informieren (Edukationsform)",
        "Schulen (Edukationsform)",
        "Beraten (Edukationsform)",
        "StruPI",
      ],
    },
    contentB1: {
      title:
        "Drei Arten, wie du Patienten hilfst: Informieren, Schulen, Beraten",
      body: "Es gibt drei Arten der Patientenedukation (Patientenschulung):\n\n1. Informieren = Du gibst Wissen weiter.\nBeispiel: Du gibst Linh ein Blatt ueber MTX.\nDas ist einseitig. Der Patient liest — aber versteht er es auch?\n\n2. Schulen = Du zeigst und uebst mit dem Patienten.\nBeispiel: Du zeigst Linh, wie sie MTX selbst spritzen kann.\nDer Patient uebt die Handlung. Du gibst Feedback (Rueckmeldung).\nStruPI ist ein Schulungsprogramm fuer Rheuma-Patienten. Es hat 3 Teile.\n\n3. Beraten = Du sprichst MIT dem Patienten. Ihr sucht zusammen eine Loesung.\nBeispiel: Du fragst Linh: 'Warum haben Sie MTX abgesetzt?'\nBeraten heisst: zuhoeren, verstehen, gemeinsam planen.\n\nGesundheitskompetenz (Health Literacy):\nKann der Patient Informationen finden? Verstehen? Bewerten? Anwenden?\n75 von 100 Menschen in Deutschland haben Probleme damit.\nLinh kann Informationen FINDEN. Aber sie kann nicht bewerten, ob sie stimmen.",
    },
  },
  {
    stepId: "edukation-06",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q3", "Q9"],
    contentC1: {
      title: "Welche Edukationsform passt?",
      body: "Jede Situation erfordert eine andere Edukationsform. Ordne die pflegerische Handlung der passenden Form zu.",
    },
    question: {
      fragetext: "Ordne jede Situation der richtigen Edukationsform zu:",
      matchingPairs: [
        {
          left: "Merkblatt zu MTX-Nebenwirkungen ueberreichen",
          right: "Informieren",
        },
        {
          left: "Selbstinjektion Schritt fuer Schritt demonstrieren und ueben lassen",
          right: "Schulen (Anleiten)",
        },
        {
          left: "Mit Patientin besprechen, warum sie MTX abgesetzt hat",
          right: "Beraten",
        },
        {
          left: "Ernaehrungsbroschuere der Rheuma-Liga aushaendigen",
          right: "Informieren",
        },
        {
          left: "Patientin bei der Entscheidung 'MTX oral oder subkutan?' begleiten",
          right: "Beraten",
        },
        {
          left: "StruPI-Gruppenschulung 'Leben mit RA im Alltag' durchfuehren",
          right: "Schulen (Anleiten)",
        },
      ],
    },
  },
  {
    stepId: "edukation-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q5", "Q6"],
    contentC1: {
      title:
        "Motivierende Gespraechsfuehrung (MI) und Shared Decision Making (SDM)",
      body: "Wenn ein Patient wie Linh MTX abgesetzt hat, nuetzt Belehrung nichts. Zwei Konzepte helfen:\n\nMotivierende Gespraechsfuehrung (MI) nach Miller & Rollnick: Nicht: 'Sie muessen MTX nehmen!' Sondern: 'Was hat Sie dazu gebracht, MTX abzusetzen?'\n\nDie vier Prozesse:\n1. Beziehung aufbauen — Vertrauen schaffen, zuhoeren, nicht urteilen\n2. Fokussieren — Gemeinsam das Thema bestimmen ('Worrueber moechten Sie heute sprechen?')\n3. Evozieren — Die eigene Motivation des Patienten hervorlocken ('Was wuerde sich aendern, wenn Ihre Haende wieder funktionieren?')\n4. Planen — Konkrete Schritte vereinbaren, wenn der Patient bereit ist\n\nOARS-Techniken: Offene Fragen, Anerkennung (Affirmation), Reflektierendes Zuhoeren, Zusammenfassen.\n\nShared Decision Making (SDM / PEF): Patient und Fachperson entscheiden GEMEINSAM — auf Basis geteilter Information. 58% der Patienten wuenschen sich das (Gesundheitsmonitor). Voraussetzung: Der Patient braucht verstaendliche, evidenzbasierte Information — nicht Dr. Google.\n\nFuer Linh bedeutet das: Nicht 'Sie nehmen jetzt wieder MTX' (Paternalismus). Nicht 'Machen Sie was Sie wollen' (Laissez-faire). Sondern: 'Ich erklaere Ihnen die Evidenz zu MTX — und dann entscheiden wir gemeinsam.'",
      glossarBegriffe: [
        "Motivierende Gespraechsfuehrung (MI)",
        "OARS (MI-Technik)",
        "Shared Decision Making (SDM / PEF)",
      ],
    },
    contentB1: {
      title: "Wie du mit Patienten sprichst, die nicht zuhoeren wollen",
      body: "Wenn ein Patient sein Medikament absetzt, hilft Schimpfen nicht.\nEs gibt zwei Methoden, die besser funktionieren:\n\nMotivierende Gespraechsfuehrung (MI):\nNicht sagen: 'Sie MUESSEN MTX nehmen!'\nBesser fragen: 'Was hat Sie dazu gebracht, MTX abzusetzen?'\n\nSo funktioniert es — 4 Schritte:\n1. Vertrauen aufbauen — zuhoeren, nicht urteilen\n2. Thema finden — 'Worrueber moechten Sie sprechen?'\n3. Motivation wecken — 'Was wuerde sich aendern, wenn Ihre Haende besser waeren?'\n4. Plan machen — 'Was ist der naechste Schritt?'\n\nOARS sind 4 Techniken:\n- Offene Fragen stellen (nicht Ja/Nein)\n- Anerkennen, was der Patient gut macht\n- Reflektieren (wiederholen, was der Patient sagt)\n- Zusammenfassen\n\nGemeinsam entscheiden (Shared Decision Making):\nArzt und Patient entscheiden zusammen.\n58 von 100 Patienten wuenschen sich das.\nFuer Linh heisst das: Nicht 'Nehmen Sie MTX!'\nSondern: 'Ich erklaere Ihnen die Fakten. Dann entscheiden wir zusammen.'",
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 8-10)
  // ==========================================
  {
    stepId: "edukation-08",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q5", "Q6"],
    contentC1: {
      title: "Die richtige Reihenfolge im Beratungsgespraech",
      body: "Du fuehrst das Beratungsgespraech mit Linh. Bringe die Schritte in die richtige Reihenfolge — von der Beziehungsebene zur konkreten Planung.",
      fallbezug:
        "Linh sitzt dir gegenueber. Sie ist skeptisch, fuehlt sich bevormundet. Wie strukturierst du das Gespraech?",
    },
    question: {
      fragetext:
        "Bringe die Schritte eines motivierenden Beratungsgespraeches mit Linh in die richtige Reihenfolge:",
      sortItems: [
        "Beziehung aufbauen: 'Schoen, dass Sie da sind. Wie geht es Ihnen heute?' — zuhoeren, nicht urteilen",
        "Linhs Perspektive erkunden: 'Was hat Sie dazu gebracht, MTX abzusetzen?' — offene Frage, kein Vorwurf",
        "Ambivalenz ansprechen: 'Einerseits machen Ihnen die Nebenwirkungen Sorge, andererseits moechten Sie wieder zeichnen koennen'",
        "Evidenz teilen: 'Darf ich Ihnen zeigen, was die aktuelle Forschung zu MTX bei Rheuma sagt?' — Erlaubnis einholen",
        "Gemeinsam Ziele setzen: 'Was waere fuer Sie ein guter naechster Schritt?' — Patientin entscheidet mit",
        "Konkreten Plan vereinbaren: 'Sie probieren MTX 4 Wochen, wir telefonieren nach 2 Wochen' — verbindlich, ueberschaubar",
      ],
    },
  },
  {
    stepId: "edukation-09",
    phase: 4,
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q5", "Q7", "Q10"],
    contentC1: {
      title: "Linh sagt: 'Ich habe mich gut informiert — MTX ist Gift!'",
      body: "Du sitzt Linh gegenueber. Ihr DAS28 ist 5,2, die Handgelenke sind geschwollen. Sie sagt: 'Ich habe wochenlang recherchiert. MTX ist ein Chemotherapie-Medikament. Eine Influencerin, die selbst Rheuma hat, hat damit aufgehoert und heilt sich jetzt mit Kurkuma. Warum soll ich mir Gift spritzen?'",
      fallbezug:
        "Das ist der Moment, in dem deine Beratungskompetenz entscheidet. Linh ist nicht dumm — sie ist falsch informiert und fuehlt sich in ihrer Entscheidung bestaetigt.",
    },
    question: {
      fragetext: "Wie reagierst du auf Linhs Aussage?",
      branchingOptions: [
        {
          text: "'Das stimmt so nicht. MTX bei Rheuma ist KEINE Chemotherapie — die Dosis ist 50-100 Mal niedriger. Sie muessen das wieder nehmen.'",
          feedback:
            "Fachlich korrekt, aber kommunikativ kontraproduktiv. Du korrigierst sofort und sagst 'Sie muessen' — das ist Paternalismus. Linh wird sich noch mehr verschliessen. Wer sich bevormundet fuehlt, hoert nicht zu. Fachliche Korrektheit allein reicht nicht — die Beziehungsebene muss stimmen.",
          isCorrect: false,
        },
        {
          text: "'Ich verstehe, dass Sie sich Sorgen machen — MTX klingt bedrohlich. Darf ich Ihnen zeigen, warum Rheumatologen es trotzdem als Erstmedikament empfehlen?'",
          feedback:
            "Sehr gut! Du wuerdigst Linhs Gefuehle ('Ich verstehe'), holst Erlaubnis ein ('Darf ich...') und positionierst dich als Informationsquelle — nicht als Autoritaet. Das ist MI in Aktion: Beziehung vor Information. Linh fuehlt sich gehoert und ist eher bereit, zuzuhoeren. Der Dosis-Unterschied (Faktor 50-100) kann dann im Gespraech kommen — nachdem die Beziehung steht.",
          isCorrect: true,
        },
        {
          text: "'Vielleicht hat die Influencerin recht — jeder Mensch reagiert anders. Probieren Sie es mit Kurkuma, und wir schauen in 3 Monaten.'",
          feedback:
            "Gefaehrlich! Kurkuma hat KEINE Evidenz als Ersatz fuer DMARDs. Bei DAS28 5,2 und fortschreitender Gelenkzerstoerung ist jede Woche ohne Basistherapie ein Risiko (Window of Opportunity). Akzeptanz ist wichtig, aber nicht auf Kosten der fachlichen Verantwortung.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "edukation-10",
    phase: 4,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q3", "Q4"],
    contentC1: {
      title: "Das passende Programm fuer Linh",
      body: "Nach dem Beratungsgespraech ist Linh bereit, sich nochmals mit MTX auseinanderzusetzen. Sie sagt: 'Ich moechte das verstehen — nicht einfach nur schlucken weil der Arzt es sagt.'",
      fallbezug:
        "Linh braucht strukturiertes Wissen — nicht nur ein Merkblatt. Welches Angebot passt?",
    },
    question: {
      fragetext:
        "Welches Edukationsangebot empfiehlst du Linh als naechsten Schritt?",
      optionen: [
        {
          text: "Einen Flyer ueber MTX-Nebenwirkungen mitgeben",
          isCorrect: false,
          explanation:
            "Informieren allein reicht bei Linh nicht. Sie hat bereits recherchiert — das Problem ist nicht fehlendes Material, sondern fehlende Bewertungskompetenz. Ein Flyer aendert daran nichts.",
        },
        {
          text: "StruPI-Schulung empfehlen — 3 Module: Krankheitsbild, Therapie, Alltag mit RA",
          isCorrect: true,
          explanation:
            "Richtig! StruPI (Strukturierte Patienteninformation) der DGRh ist genau fuer neu diagnostizierte RA-Patienten wie Linh entwickelt. 3 Module zu je 1,5 Stunden, evidenzbasiert, mit Raum fuer Fragen. Die StruPI-RA-Studie (Bitzer et al. 2021) zeigt signifikante Wissenszunahme.",
        },
        {
          text: "Linh bitten, nur noch auf der Website der DGRh zu recherchieren",
          isCorrect: false,
          explanation:
            "Besser als Instagram, aber nicht ausreichend. Linh braucht nicht nur bessere Quellen — sie braucht einen Rahmen, in dem sie Fragen stellen, diskutieren und VERSTEHEN kann. Das ist Schulung, nicht Information.",
        },
        {
          text: "Einen Termin beim Psychologen vereinbaren",
          isCorrect: false,
          explanation:
            "Linh hat kein psychologisches Problem — sie hat ein Informations- und Bewertungsproblem. Psychologische Begleitung kann bei Krankheitsbewaeltigung sinnvoll sein (LE 17), aber das primaere Problem ist hier fehlende Gesundheitskompetenz.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "edukation-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 6,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q3", "Q5", "Q7"],
    contentC1: {
      title: "Dein Beratungsplan fuer Linh",
      body: "Du schreibst einen individuellen Beratungsplan fuer Linh Nguyen. Beruecksichtige alles, was du ueber sie weisst: ihre Staerken (Motivation, Intelligenz, Technikaffinitaet), ihre Schwaechen (eingeschraenkte Health Literacy bei Quellenbewertung), ihr soziales Umfeld (Partner Jonas, Eltern, Influencer) und ihre aktuelle Situation (DAS28 5,2, Schub, Freelancerin).",
      fallbezug:
        "Dies ist DEIN Plan fuer Linh — individuell, evidenzbasiert, patientenzentriert.",
    },
    question: {
      fragetext:
        "Schreibe einen Beratungsplan fuer Linh Nguyen. Der Plan soll enthalten: (1) Beratungsziel, (2) gewaehlte Edukationsform(en), (3) konkrete Massnahmen mit Zeitplan, (4) Einbeziehung des sozialen Umfelds.",
      musterantwort:
        "Beratungsziel: Linh versteht ihre RA-Diagnose und die Rolle von MTX als Basistherapie. Sie kann Gesundheitsinformationen kritisch bewerten und trifft informierte Entscheidungen gemeinsam mit ihrem Behandlungsteam. Edukationsformen: (1) Beraten — Motivierendes Erstgespraech zu MTX und Health Literacy. (2) Schulen — StruPI-Teilnahme (3 Module) innerhalb der naechsten 4 Wochen. (3) Informieren — Evidenzbasierte Materialien (DGRh, Rheuma-Liga) als Ergaenzung. Konkrete Massnahmen: Woche 1: MI-basiertes Beratungsgespraech, Linhs Perspektive erkunden, Evidenz zu MTX-Dosierung teilen. Woche 2-4: StruPI-Module 1-3. Woche 2: Telefonischer Follow-up. Woche 6: Wiedervorstellung — Adherence pruefen, DAS28-Verlauf besprechen. Soziales Umfeld: Partner Jonas einbeziehen — gemeinsames Gespraech ueber MTX-Evidenz. Eltern: Respekt vor kulturellem Krankheitsverstaendnis, aber klare Evidenz kommunizieren. Linh Werkzeuge zur Quellenbewertung an die Hand geben.",
      bewertungskriterien: [
        "Konkretes Beratungsziel formuliert (nicht nur 'Linh soll MTX nehmen')",
        "Mindestens 2 verschiedene Edukationsformen gewaehlt und begruendet",
        "Zeitplan mit konkreten Schritten (nicht nur Absichtserklaerungen)",
        "Soziales Umfeld beruecksichtigt (Partner, Eltern)",
        "Patientenzentrierung erkennbar (Linhs Autonomie respektiert, kein Paternalismus)",
      ],
      satzanfaengeB1: [
        "Mein Ziel fuer Linh ist...",
        "Ich moechte Linh helfen, indem...",
        "In der ersten Woche spreche ich mit Linh ueber...",
        "Linhs Partner Jonas soll...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "edukation-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q2", "Q8"],
    contentC1: {
      title: "Praxisauftrag — Digitale Gesundheitskompetenz foerdern",
      body: "Linhs Fall ist kein Einzelfall. 75,8% der Deutschen haben eingeschraenkte Gesundheitskompetenz (TUM 2024). Digitale Fehlinformation ist ein wachsendes Problem — nicht nur bei Social-Media-affinen Patienten.\n\nWas du mitnimmst:\n- Bildung schuetzt NICHT vor eingeschraenkter Health Literacy\n- Informationen FINDEN ist nicht dasselbe wie Informationen BEWERTEN\n- Pflege hat eine Schluesselrolle bei der Edukation — naeher am Patienten als jede andere Berufsgruppe\n- MI funktioniert besser als Belehrung — immer\n- Schulungsprogramme wie StruPI sind evidenzbasiert und wirksam\n\nPraxisauftrag fuer deine naechste Praxisphase:\n1. Beobachte: Welche Informationsquellen nutzen deine Patienten? Frag aktiv danach.\n2. Reflektiere: Wenn ein Patient eine fragwuerdige Quelle nennt — wie reagierst du? Mit Korrektur oder mit Neugier?\n\nDie BMG-Roadmap Gesundheitskompetenz 2024 benennt Pflegende als Schluesselakteure. Patientenedukation ist keine Zusatzaufgabe — sie ist Kernpflege.",
      glossarBegriffe: ["Digitale Gesundheitskompetenz", "Selbstmanagement"],
    },
    contentB1: {
      title: "Was du mitnimmst — Praxisauftrag",
      body: "Linhs Fall passiert oft. Viele Patienten lesen im Internet ueber ihre Krankheit.\nAber sie koennen nicht erkennen, was stimmt und was nicht.\n\nWas du dir merken sollst:\n- Gebildete Menschen koennen trotzdem falsche Informationen glauben.\n- Informationen FINDEN ist nicht das Gleiche wie Informationen BEWERTEN.\n- Pflege ist naeher am Patienten als jede andere Berufsgruppe.\n- Zuhoeren funktioniert besser als belehren.\n- Es gibt gute Schulungsprogramme (zum Beispiel StruPI fuer Rheuma).\n\nAuftrag fuer die Praxis:\n1. Frage deine Patienten: 'Wo informieren Sie sich ueber Ihre Krankheit?'\n2. Wenn ein Patient eine schlechte Quelle nennt — sei neugierig, nicht streng.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Patientenedukation",
    erklaerung:
      "Sammelbegriff fuer alle paedagogischen Massnahmen zur Foerderung der Gesundheitskompetenz: Informieren, Schulen, Beraten",
  },
  {
    begriff: "Health Literacy (Gesundheitskompetenz)",
    erklaerung:
      "Faehigkeit, Gesundheitsinformationen zu finden, verstehen, bewerten und anwenden. 75,8% der Deutschen haben eingeschraenkte HL (TUM 2024)",
  },
  {
    begriff: "Informieren",
    erklaerung:
      "Einseitige Wissensweitergabe — z.B. Merkblatt ueberreichen. Patient ist Empfaenger, nicht aktiv beteiligt",
  },
  {
    begriff: "Schulen (Anleiten)",
    erklaerung:
      "Strukturierte Vermittlung von Wissen und Fertigkeiten mit Uebung und Feedback — z.B. Selbstinjektion demonstrieren",
  },
  {
    begriff: "Beraten",
    erklaerung:
      "Dialogischer Prozess: Gemeinsam Loesungen erarbeiten. Ressourcenorientiert, patientenzentriert, ergebnisoffen",
  },
  {
    begriff: "Motivierende Gespraechsfuehrung (MI)",
    erklaerung:
      "Beratungsansatz nach Miller & Rollnick: Ambivalenz erkunden statt konfrontieren, Selbstwirksamkeit staerken, Change Talk foerdern",
  },
  {
    begriff: "OARS",
    erklaerung:
      "MI-Kerntechniken: Open questions (Offene Fragen), Affirmations (Anerkennung), Reflections (Reflektierendes Zuhoeren), Summaries (Zusammenfassen)",
  },
  {
    begriff: "Shared Decision Making (SDM / PEF)",
    erklaerung:
      "Partizipative Entscheidungsfindung: Patient und Fachperson entscheiden gemeinsam auf Basis geteilter, verstaendlicher Information",
  },
  {
    begriff: "Adherence (Therapietreue)",
    erklaerung:
      "Ausmass, in dem ein Patient die vereinbarte Therapie einhhaelt. Ersetzt den paternalistischen Begriff 'Compliance'",
  },
  {
    begriff: "StruPI",
    erklaerung:
      "Strukturierte Patienteninformation der DGRh: 3 Module (Krankheitsbild, Therapie, Alltag) fuer neu diagnostizierte RA-Patienten",
  },
  {
    begriff: "Digitale Gesundheitskompetenz",
    erklaerung:
      "Faehigkeit, digitale Gesundheitsinformationen zu finden, bewerten und sinnvoll fuer die eigene Gesundheit zu nutzen",
  },
  {
    begriff: "Selbstmanagement",
    erklaerung:
      "Faehigkeit des Patienten, seine chronische Erkrankung eigenstaendig im Alltag zu managen — Ziel jeder Edukation",
  },
];
