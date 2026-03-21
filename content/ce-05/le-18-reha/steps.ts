// Lektion 18: Rehabilitation, Hilfsmittel und interprofessionelle Zusammenarbeit
// CE 05 — Block E: Beratung & Psychosoziales
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-18-reha",
  ceId: "ce-05",
  title: "Rehabilitation, Hilfsmittel und interprofessionelle Zusammenarbeit",
  titleShort: "Reha & Team",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 15, b1: 25 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-III.2", "KB-IV.1"],
  bloomStufen: [1, 3],
  voraussetzungen: ["le-15-interventionen"],
  leitfall: {
    name: "Fatima Benali",
    alter: 56,
    beruf: "Reinigungskraft im Seniorenheim",
    diagnose: "RA seit 10 Jahren, Z.n. Synovektomie rechtes Handgelenk",
    setting: "Reha-Klinik (AHB), Ueberleitung in ambulante Versorgung",
    kernproblem:
      "Greifkraft 8 kg (Norm 25), berufliche Zukunft ungeklaert, Hilfsmittel-Ablehnung aus Stolz",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "reha-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Willkommen — Was weisst du ueber Rehabilitation bei Rheuma?",
      body: "Rehabilitation bedeutet: Einen Menschen dabei unterstuetzen, nach Krankheit oder Operation wieder moeglichst selbststaendig zu leben und zu arbeiten. Bei rheumatischen Erkrankungen ist Rehabilitation besonders wichtig — denn Rheuma betrifft den ganzen Alltag: Ankleiden, Kochen, Arbeiten, soziale Teilhabe.\n\nIn dieser Lektion lernst du:\n- Welche Reha-Formen es gibt (ambulant, stationaer, AHB)\n- Was das ICF-Modell ist und wie du es anwendest\n- Welche Hilfsmittel Rheuma-Patienten im Alltag helfen\n- Wie das interprofessionelle Team zusammenarbeitet\n- Wie du eine Ueberleitung von der Reha nach Hause planst",
      glossarBegriffe: ["Rehabilitation"],
    },
    contentB1: {
      title: "Willkommen — Was weisst du ueber Reha?",
      body: "Rehabilitation (kurz: Reha) bedeutet:\nNach einer Krankheit oder Operation wieder selbststaendig leben.\nUnd wenn moeglich: wieder arbeiten.\n\nBei Rheuma ist Reha sehr wichtig.\nRheuma betrifft den ganzen Alltag:\n- Sich anziehen\n- Kochen\n- Arbeiten\n- Freunde treffen\n\nIn dieser Lektion lernst du:\n- Welche Reha-Formen es gibt\n- Was das ICF-Modell ist\n- Welche Hilfsmittel bei Rheuma helfen\n- Wie verschiedene Berufe zusammenarbeiten\n- Wie du die Entlassung aus der Reha planst",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Rehabilitation und interprofessionelle Zusammenarbeit?",
    },
  },
  {
    stepId: "reha-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q3", "Q9"],
    contentC1: {
      title: "Rechtsgrundlage der Rehabilitation",
      body: "",
    },
    question: {
      fragetext:
        "Welche Aussage zum Anspruch auf medizinische Rehabilitation in Deutschland ist korrekt?",
      optionen: [
        {
          text: "Rehabilitation ist eine freiwillige Zusatzleistung der Krankenkasse",
          isCorrect: false,
          explanation:
            "Falsch. Rehabilitation ist ein gesetzlich verankertes Recht. Nach Paragraph 40 SGB V haben Versicherte Anspruch auf Leistungen zur medizinischen Rehabilitation, wenn ambulante Behandlung nicht ausreicht.",
        },
        {
          text: "Anspruch auf Reha besteht, wenn die Erwerbsfaehigkeit gefaehrdet ist oder ambulante Behandlung nicht ausreicht",
          isCorrect: true,
          explanation:
            "Richtig! Die Deutsche Rentenversicherung (DRV) traegt Reha-Kosten bei Gefaehrdung der Erwerbsfaehigkeit (Paragraph 15 SGB VI). Die Krankenkasse zahlt nach Paragraph 40 SGB V, wenn ambulante Behandlung nicht ausreicht. Grundsatz: Reha vor Rente.",
        },
        {
          text: "Nur Patienten ueber 60 Jahre haben Anspruch auf stationaere Rehabilitation",
          isCorrect: false,
          explanation:
            "Falsch. Es gibt keine Altersgrenze fuer Rehabilitation. Auch juengere Patienten haben Anspruch — gerade bei rheumatischen Erkrankungen, die oft im erwerbsfaehigen Alter beginnen.",
        },
        {
          text: "Rehabilitation muss immer stationaer erfolgen",
          isCorrect: false,
          explanation:
            "Falsch. Es gilt der Grundsatz ambulant vor stationaer. Ambulante Reha wird bevorzugt, wenn die haeusliche Versorgung gesichert ist und der Patient mobil genug ist.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-5)
  // ==========================================
  {
    stepId: "reha-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5"],
    contentC1: {
      title: "Fatima Benali — nach der Operation",
      body: "Fatima Benali, 56 Jahre, arbeitet seit 18 Jahren als Reinigungskraft in einem Seniorenheim. Seit 10 Jahren hat sie Rheumatoide Arthritis. Vor drei Wochen wurde an ihrem rechten Handgelenk eine Synovektomie durchgefuehrt — die entzuendete Gelenkinnenhaut wurde operativ entfernt.\n\nJetzt ist Fatima in der Anschlussheilbehandlung (AHB) in einer Reha-Klinik. Ihre Greifkraft rechts betraegt nur noch 8 kg (normal waeren 25 kg). Einen Wischmop kann sie nicht fuehren, einen Eimer nicht heben. Auch links hat sie Probleme — Schwanenhalsdeformitaet an drei Fingern.\n\nFatima sagt zur Pflegenden: 'Ich will wieder arbeiten. Ich putze seit 18 Jahren. Das ist mein Job. Wenn ich nicht arbeite, wer bezahlt dann?'\n\nIhr Ehemann Hassan faehrt LKW und ist oft tagelang unterwegs. Tochter Samira (28) ist Krankenschwester und uebersetzt bei Arztgespraechen. Fatimas Deutsch ist im Alltag gut (B1-B2), aber medizinische Fachsprache faellt ihr schwer.",
      fallbezug:
        "Fatima begleitet dich durch die gesamte Lektion. An ihrem Beispiel lernst du, wie Rehabilitation, Hilfsmittel und das interprofessionelle Team zusammenwirken.",
      glossarBegriffe: [
        "Synovektomie",
        "AHB",
        "Schwanenhalsdeformitaet",
      ],
    },
    contentB1: {
      title: "Fatima Benali — nach der Operation",
      body: "Fatima Benali ist 56 Jahre alt.\nSie arbeitet seit 18 Jahren als Reinigungskraft in einem Seniorenheim.\nSeit 10 Jahren hat sie Rheuma (Rheumatoide Arthritis).\n\nVor drei Wochen hatte sie eine Operation am rechten Handgelenk.\nDer Arzt hat die entzuendete Gelenkinnenhaut entfernt.\nDas nennt man Synovektomie (Entfernung der Gelenkinnenhaut).\n\nJetzt ist Fatima in der Reha-Klinik.\nDas nennt man AHB (Anschlussheilbehandlung).\nDie AHB kommt direkt nach dem Krankenhaus.\n\nFatima hat ein grosses Problem:\nIhre Hand ist sehr schwach. Greifkraft nur 8 kg.\nNormal waeren 25 kg.\nSie kann keinen Wischmop halten.\nSie kann keinen Eimer heben.\n\nFatima sagt: 'Ich will wieder arbeiten. Wer bezahlt sonst?'\n\nIhr Mann Hassan faehrt LKW. Er ist oft nicht da.\nIhre Tochter Samira ist Krankenschwester.\nSamira uebersetzt fuer Fatima beim Arzt.",
      fallbezug:
        "Fatima begleitet dich durch die ganze Lektion. Du lernst an ihrem Beispiel, wie Reha funktioniert.",
    },
  },
  {
    stepId: "reha-04",
    phase: 2,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q10"],
    contentC1: {
      title: "Das ICF-Modell — Fatimas Situation verstehen",
      body: "Die ICF (Internationale Klassifikation der Funktionsfaehigkeit, Behinderung und Gesundheit) ist das Standardmodell der Rehabilitation. Sie beschreibt nicht nur die Krankheit, sondern den ganzen Menschen in seinem Lebenskontext.\n\nAm Beispiel Fatima:\n\nKoerperfunktionen/-strukturen: Greifkraft 8 kg rechts (Norm 25 kg), Schwanenhalsdeformitaet links, Morgensteifigkeit 45 Min, Schmerz NRS 5/10\n\nAktivitaeten: Kann keinen Wischmop fuehren, Eimer nicht heben, Knoepfe schwierig, Kochen eingeschraenkt (Messer halten, Topf tragen)\n\nPartizipation (Teilhabe): Beruf als Reinigungskraft gefaehrdet, Kochen fuer Familie eingeschraenkt, Moscheegemeinde-Besuche reduziert wegen Erschoepfung\n\nUmweltfaktoren: Hilfsmittel noch nicht vorhanden, interprofessionelles Team in der Reha verfuegbar, Tochter als Uebersetzerin, Arbeitgeber wartet auf Rueckkehr-Termin\n\nPersonenbezogene Faktoren: 56 Jahre, hohe Arbeitsmotivation, 10 Jahre RA-Erfahrung, Deutsch B1-B2, marokkanischer Hintergrund, Ramadan in 4 Wochen\n\nDer entscheidende Unterschied zur reinen Diagnose: Die ICF fragt nicht 'Was hat Fatima?', sondern 'Was kann Fatima — und was braucht sie, um wieder teilhaben zu koennen?'",
      fallbezug:
        "Das ICF-Modell zeigt: Fatimas Situation ist komplex. 'Einfache Arbeit' bedeutet nicht 'einfache Reha'. Reinigung erfordert Greifkraft, Heben, Wischen — alles genau das, was Fatima nicht kann.",
      glossarBegriffe: ["ICF", "Partizipation"],
    },
    contentB1: {
      title: "Das ICF-Modell — Fatimas Situation verstehen",
      body: "Die ICF ist ein Modell fuer die Rehabilitation.\nICF steht fuer: Internationale Klassifikation der Funktionsfaehigkeit.\nDie ICF schaut nicht nur auf die Krankheit.\nSie schaut auf den ganzen Menschen.\n\nBei Fatima sieht das so aus:\n\nKoerper: Greifkraft nur 8 kg. Finger verformt. Schmerzen.\n\nWas sie tun kann (Aktivitaet):\nSie kann keinen Mop halten.\nSie kann keinen Eimer heben.\nKnoepfe sind schwierig.\nKochen ist schwer (Messer halten, Topf tragen).\n\nTeilhabe am Leben (Partizipation):\nArbeit als Reinigungskraft ist in Gefahr.\nSie kann nicht mehr fuer die Familie kochen.\nSie geht seltener in die Moschee.\n\nUmwelt (was um Fatima herum ist):\nEs gibt noch keine Hilfsmittel.\nIn der Reha gibt es ein Team.\nIhre Tochter hilft beim Uebersetzen.\n\nFatima selbst:\nSie ist 56 Jahre alt.\nSie ist sehr motiviert.\nSie kennt ihre Krankheit seit 10 Jahren.\n\nDie ICF fragt nicht: 'Was hat Fatima?'\nSie fragt: 'Was kann Fatima? Was braucht sie?'",
      fallbezug:
        "Fatimas Situation ist nicht einfach. Reinigung braucht starke Haende. Genau das kann Fatima nicht.",
    },
  },
  {
    stepId: "reha-05",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q10"],
    contentC1: {
      title: "ICF anwenden",
      body: "",
      fallbezug:
        "Fatimas Tochter Samira dolmetscht beim Teamgespraech. Auf welcher ICF-Ebene ordnest du das ein?",
    },
    question: {
      fragetext:
        "Fatimas Tochter Samira uebersetzt bei Arztgespraechen. Welcher ICF-Komponente ordnest du 'Tochter uebersetzt' zu?",
      optionen: [
        {
          text: "Koerperfunktion — weil es um Sprache geht",
          isCorrect: false,
          explanation:
            "Nein. Koerperfunktionen beschreiben biologische Funktionen des Koerpers (z.B. Greifkraft, Gelenkbeweglichkeit). Fatimas Sprachkompetenz waere eine Koerperfunktion — aber die Tochter als Uebersetzerin ist etwas anderes.",
        },
        {
          text: "Aktivitaet — weil Kommunikation eine Aktivitaet ist",
          isCorrect: false,
          explanation:
            "Aktivitaeten beschreiben, was eine Person tun KANN (z.B. sich ankleiden, kochen). Kommunikation im Arztgespraech ist eine Aktivitaet — aber die Tochter als Ressource ist ein Kontextfaktor.",
        },
        {
          text: "Umweltfaktor — weil die Tochter eine unterstuetzende Ressource in Fatimas Umfeld ist",
          isCorrect: true,
          explanation:
            "Richtig! Umweltfaktoren sind aeussere Einfluesse auf die Funktionsfaehigkeit. Samira als Uebersetzerin ist ein foerdernder Umweltfaktor (Unterstuetzung und Beziehungen). Ohne sie waere Fatimas Teilhabe am Gespraech eingeschraenkt.",
        },
        {
          text: "Partizipation — weil es um Teilhabe am Gespraech geht",
          isCorrect: false,
          explanation:
            "Partizipation beschreibt die Teilhabe am Leben (Arbeit, Gemeinschaft). Das Arztgespraech betrifft eher die Aktivitaetsebene. Die Tochter als Ressource ist ein Umweltfaktor, der Partizipation ERMOEGLICHT.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 6-8)
  // ==========================================
  {
    stepId: "reha-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3", "Q8"],
    contentC1: {
      title: "Ambulant, stationaer oder AHB — welche Reha wann?",
      body: "Es gibt drei wesentliche Reha-Formen fuer Rheuma-Patienten:\n\n1. Anschlussheilbehandlung (AHB)\n- Direkt nach Krankenhausaufenthalt (innerhalb 14 Tagen)\n- Stationaer oder ganztaegig ambulant\n- Dauer: meist 3 Wochen\n- Kostentraeger: DRV oder Krankenkasse\n- Beispiel: Fatima nach ihrer Handgelenks-OP\n\n2. Stationaere Rehabilitation\n- Unabhaengig von Krankenhausaufenthalt beantragbar\n- Wenn ambulante Reha nicht ausreicht\n- Dauer: meist 3 Wochen (Verlaengerung moeglich)\n- Indikation: Schwere Funktionseinschraenkung, haeusliche Versorgung nicht gesichert\n- Kostentraeger: DRV (bei Erwerbstaetigen) oder Krankenkasse\n\n3. Ambulante Rehabilitation\n- Patient wohnt zuhause, kommt taeglich in die Reha-Einrichtung\n- Ganztaegig ambulant (mindestens 4 Stunden/Tag)\n- Vorteil: Alltagsnaehe, soziales Umfeld bleibt erhalten\n- Voraussetzung: Patient ist mobil genug, haeusliche Versorgung gesichert\n\nGrundsatz: Ambulant vor stationaer. Ambulante Reha ist gleichwertig — die DRV meldet steigende Zahlen (156.000 ambulante Reha-Leistungen 2023, +8,6%).\n\nZusaetzlich nach der Reha:\n- Funktionstraining (Trocken-/Wassergymnastik): 1-2x/Woche, bis 24 Monate\n- Rehasport: Gruppentraining, max. 50 UE in 18 Monaten",
      glossarBegriffe: ["DRV", "Funktionstraining"],
    },
    contentB1: {
      title: "Welche Reha-Formen gibt es?",
      body: "Es gibt drei Reha-Formen:\n\n1. AHB (Anschlussheilbehandlung)\nDas ist Reha direkt nach dem Krankenhaus.\nSie muss in 14 Tagen nach der Entlassung beginnen.\nDauer: meistens 3 Wochen.\nBeispiel: Fatima nach ihrer Hand-Operation.\n\n2. Stationaere Reha\nDer Patient wohnt in der Reha-Klinik.\nDas geht auch ohne vorherigen Krankenhausaufenthalt.\nDauer: meistens 3 Wochen.\nWann? Wenn die Probleme sehr gross sind.\n\n3. Ambulante Reha\nDer Patient wohnt zuhause.\nEr faehrt jeden Tag in die Reha-Einrichtung.\nMindestens 4 Stunden am Tag.\nVorteil: Man bleibt in seinem Umfeld.\n\nWichtige Regel: Ambulant vor stationaer.\nDas heisst: Ambulante Reha wird bevorzugt.\n\nNach der Reha:\n- Funktionstraining: Gymnastik in der Gruppe, 1-2 mal pro Woche\n- Rehasport: Sport in der Gruppe\n\nWer bezahlt?\nDie Rentenversicherung (DRV) bezahlt, wenn man noch arbeitet.\nDie Krankenkasse bezahlt in anderen Faellen.",
    },
  },
  {
    stepId: "reha-07",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q5", "Q7"],
    contentC1: {
      title: "Welches Hilfsmittel fuer welches Problem?",
      body: "Hilfsmittel koennen den Alltag von Rheuma-Patienten erheblich erleichtern. Die Verordnung erfolgt durch den Arzt (Rezept), die Krankenkasse genehmigt und uebernimmt die Kosten (Zuzahlung: 10%, mind. 5 EUR, max. 10 EUR).",
      glossarBegriffe: ["Orthese", "Greifhilfe"],
    },
    question: {
      fragetext: "Ordne jedes Alltagsproblem dem passenden Hilfsmittel zu:",
      matchingPairs: [
        {
          left: "Kann Flasche nicht oeffnen (Greifkraft fehlt)",
          right: "Elektrischer Flaschenoeffner / Antirutsch-Oeffner",
        },
        {
          left: "Kann Socken nicht anziehen (Buecken + Greifen)",
          right: "Strumpfanzieher (Anziehhilfe)",
        },
        {
          left: "Handgelenk instabil nach OP",
          right: "Handgelenksorthese (Schiene)",
        },
        {
          left: "Kann Gegenstaende nicht vom Boden aufheben",
          right: "Greifzange (Greifhilfe)",
        },
        {
          left: "Stift/Besteck rutscht aus der Hand",
          right: "Griffverdickung (Schaumstoff-Aufsatz)",
        },
        {
          left: "Unsicher beim Duschen (Sturzgefahr)",
          right: "Duschhocker mit Haltegriff",
        },
      ],
    },
  },
  {
    stepId: "reha-08",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q1", "Q6"],
    contentC1: {
      title: "Wer macht was im Reha-Team?",
      body: "Rehabilitation bei Rheuma ist Teamarbeit. Kein einzelner Beruf kann alles abdecken. Das interprofessionelle Team bei Fatima:\n\nReha-Arzt/Rheumatologe: Medizinische Leitung, Therapieplan, Medikamentenanpassung, Arbeitsfaehigkeits-Beurteilung\n\nPflege: 24h-Beobachtung, Medikamentengabe, Schmerzmonitoring, Wundversorgung (OP-Naht), Patientenedukation, Koordination, Ueberleitung\n\nErgotherapie: Gelenkschutztraining, Hilfsmittelberatung und -anpassung, Schienenversorgung (Orthesen), Feinmotorik-Training, Arbeitsplatzberatung\n\nPhysiotherapie: Bewegungstherapie, Kraftaufbau (Greifkraft!), Funktionstraining, Waerme-/Kaelteanwendungen, Gangschulung\n\nSozialarbeit/Sozialdienst: Kostentraeger-Klaerung, Reha-Antrag, Hilfsmittelversorgung organisieren, berufliche Wiedereingliederung (BEM), Schwerbehindertenausweis\n\nPsychologie: Krankheitsbewaeltigung, Angst vor Arbeitsplatzverlust, Umgang mit chronischer Erkrankung\n\nDie Pflege hat eine Schluesselrolle: Pflegende sehen den Patienten am haeufigsten und beobachten, was im Alltag funktioniert und was nicht. Sie koordinieren zwischen den Berufsgruppen und sind oft die ersten, denen Patienten ihre Sorgen erzaehlen.",
      glossarBegriffe: ["Interprofessionell", "BEM"],
    },
    contentB1: {
      title: "Wer arbeitet im Reha-Team?",
      body: "Reha bei Rheuma ist Teamarbeit.\nViele Berufe arbeiten zusammen.\nDas nennt man: interprofessionelles Team.\n\nBei Fatima arbeiten zusammen:\n\nArzt: Macht den Therapieplan. Passt Medikamente an.\n\nPflege: Sieht Fatima jeden Tag. Gibt Medikamente. Beobachtet Schmerzen. Koordiniert das Team.\n\nErgotherapie: Zeigt Fatima Gelenkschutz. Beratet ueber Hilfsmittel. Macht Schienen (Orthesen). Trainiert Feinmotorik.\n\nPhysiotherapie: Trainiert Kraft und Bewegung. Macht Waerme- und Kaelteanwendungen.\n\nSozialarbeit: Klaert wer bezahlt. Hilft beim Reha-Antrag. Plant die Rueckkehr zur Arbeit.\n\nPsychologie: Hilft bei Angst vor Jobverlust. Hilft bei Umgang mit der Krankheit.\n\nPflege ist besonders wichtig:\nPflegende sehen den Patienten am meisten.\nSie merken als Erste, wenn etwas nicht klappt.\nPatienten erzaehlen Pflegenden oft zuerst ihre Sorgen.",
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "reha-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q9", "Q6"],
    contentC1: {
      title: "Fatimas Ueberleitung — Schritt fuer Schritt",
      body: "Fatimas Reha endet in 5 Tagen. Die Ueberleitung in die ambulante Versorgung muss rechtzeitig geplant werden. Nach Paragraph 39 Abs. 1a SGB V ist strukturiertes Entlassmanagement Pflicht.",
      fallbezug:
        "Fatima braucht: Hilfsmittel zuhause, ambulante Ergotherapie, Funktionstraining, Termin beim Rheumatologen, Klaerung der beruflichen Situation. Ohne Planung steht sie nach der Reha allein da — das waere ein Versorgungsbruch.",
      glossarBegriffe: [
        "Ueberleitungsbogen",
        "Versorgungskontinuitaet",
      ],
    },
    question: {
      fragetext:
        "Bringe die Schritte der Ueberleitungsplanung in die richtige Reihenfolge:",
      sortItems: [
        "Entlassassessment: Versorgungsbedarf erfassen (Was braucht Fatima zuhause?)",
        "Teamkonferenz: Reha-Ziele evaluieren, Entlassplan abstimmen",
        "Hilfsmittel verordnen und bei Sanitaetshaus bestellen (VOR Entlassung!)",
        "Ambulante Weiterversorgung organisieren (Ergotherapie, Physiotherapie, Rheumatologe)",
        "Entlassbrief und Ueberleitungsbogen erstellen (fuer Hausarzt + ambulante Pflege)",
        "Entlassgespraech mit Fatima und Tochter Samira (Medikamente, Termine, Hilfsmittel erklaeren)",
      ],
    },
  },
  {
    stepId: "reha-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q4", "Q5", "Q6"],
    contentC1: {
      title: "Fatima braucht Hilfsmittel — aber welche?",
      body: "Es ist Mittwoch, die Ergotherapeutin hat mit Fatima einen Hilfsmittel-Check gemacht. Fatima sagt: 'Ich brauche nichts. Samira hilft mir zuhause.' Die Ergotherapeutin berichtet dir: 'Fatima lehnt fast alle Hilfsmittel ab. Aber ihr Mann ist oft tagelang weg und Samira arbeitet Vollzeit.'",
      fallbezug:
        "Fatima ist stolz auf ihre Selbststaendigkeit. Hilfsmittel bedeuten fuer sie: Ich bin behindert. Wie reagierst du als Pflegende?",
    },
    question: {
      fragetext: "Wie gehst du vor?",
      branchingOptions: [
        {
          text: "'Fatima, Sie MUESSEN die Hilfsmittel nehmen. Ohne geht es nicht.'",
          feedback:
            "Problematisch. Paternalismus. Du uebergehst Fatimas Autonomie. 'Muessen' erzeugt Widerstand, besonders bei einer Patientin die seit 10 Jahren ihre Erkrankung selbststaendig managt. Fatima wird sich bevormundet fuehlen.",
          isCorrect: false,
        },
        {
          text: "'Fatima, ich verstehe dass Sie selbststaendig sein wollen. Genau dafuer sind die Hilfsmittel da — sie machen Sie UNabhaengiger von Samira. Darf ich Ihnen zeigen, wie der Flaschenoeffner funktioniert?'",
          feedback:
            "Sehr gut! Du anerkennst Fatimas Wunsch nach Selbststaendigkeit und nutzt genau diesen Wunsch als Argument FUER Hilfsmittel. Konkretes Ausprobieren ('Darf ich zeigen?') ist ueberzeugender als Worte. Die Unabhaengigkeit von Samira ist ein starkes Argument — Fatima moechte ihrer Tochter nicht zur Last fallen.",
          isCorrect: true,
        },
        {
          text: "'Okay, wenn Sie nichts brauchen, dann lassen wir das.'",
          feedback:
            "Problematisch. Du akzeptierst die Ablehnung ohne Rueckfrage. Fatimas Ablehnung basiert auf Scham, nicht auf einer informierten Entscheidung. Pflegerische Beratung bedeutet: Respektvoll nachhaken, Vorteile zeigen, Entscheidung der Patientin ueberlassen — aber NICHT einfach aufgeben.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "reha-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q9", "Q6"],
    contentC1: {
      title: "Fatimas Ueberleitung dokumentieren",
      body: "Fatima wird am Freitag entlassen. Du schreibst den pflegerischen Anteil des Ueberleitungsbogens fuer den Hausarzt und die ambulante Versorgung.",
      fallbezug:
        "Denke an alles was du ueber Fatima weisst: RA seit 10 Jahren, Synovektomie rechts, Greifkraft 8 kg, Schwanenhalsdeformitaet links, Reinigungskraft, Ehemann unterwegs, Tochter uebersetzt, Deutsch B1-B2, Ramadan in 4 Wochen.",
      glossarBegriffe: ["Case Management"],
    },
    contentB1: {
      title: "Fatimas Ueberleitung dokumentieren",
      body: "Fatima geht am Freitag nach Hause.\nDu schreibst einen Bericht fuer den Hausarzt.\nDer Hausarzt muss wissen, was Fatima braucht.",
      fallbezug:
        "Denke an alles, was du ueber Fatima weisst: Ihre Krankheit, ihre Operation, ihre Familie, ihre Arbeit.",
    },
    question: {
      fragetext:
        "Schreibe den pflegerischen Anteil des Ueberleitungsbogens fuer Fatima. Nenne mindestens 4 Bereiche die der Hausarzt und die ambulante Versorgung wissen muessen.",
      musterantwort:
        "1. Aktuelle Funktionseinschraenkungen: Greifkraft rechts 8 kg, Schwanenhalsdeformitaet links, Morgensteifigkeit 45 Min, Schmerz NRS 5/10. Eingeschraenkt in: Ankleiden, Kochen, Koerperpflege, berufliche Taetigkeit.\n2. Hilfsmittelversorgung: Handgelenksorthese rechts, Griffverdickungen, Strumpfanzieher, Greifzange. Lieferung Sanitaetshaus laeuft.\n3. Medikamente: MTX 15 mg/Wo s.c. (Donnerstag), Folsaeure 5 mg (Freitag), Prednisolon 5 mg (Ausschleichen). CAVE: Ramadan in 4 Wochen — Einnahme besprechen.\n4. Ambulante Weiterversorgung: Ergotherapie 2x/Wo, Physiotherapie 1x/Wo, Funktionstraining Wassergymnastik beantragt, Rheumatologe-Termin in 4 Wochen.\n5. Berufliche Situation: BEM-Gespraech empfohlen, Sozialdienst hat Kontakt aufgenommen, Arbeitsplatzanpassung pruefen.\n6. Sprachliche Unterstuetzung: Fachgespraeche mit Tochter Samira als Dolmetscherin.",
      bewertungskriterien: [
        "Funktionelle Einschraenkungen konkret benannt (mit Zahlen wie Greifkraft, NRS)",
        "Hilfsmittel aufgelistet (mindestens 2 konkrete Hilfsmittel)",
        "Medikamentenplan erwaehnt (inkl. besonderer Hinweise wie Ramadan)",
        "Ambulante Weiterversorgung (mindestens 2 Massnahmen)",
        "Berufliche oder soziale Situation angesprochen",
      ],
      satzanfaengeB1: [
        "Fatima hat folgende Probleme: ...",
        "Sie braucht diese Hilfsmittel: ...",
        "Nach der Entlassung soll sie ...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "reha-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q6"],
    contentC1: {
      title: "Dein Praxisauftrag",
      body: "Rehabilitation bei Rheuma ist kein einmaliges Ereignis, sondern ein fortlaufender Prozess. Was du in dieser Lektion gelernt hast, begegnet dir in jedem Pflegesetting:\n\nAuftrag fuer dein naechstes Praktikum oder deine naechste Praxisphase:\n\n1. Beobachte: Welche Hilfsmittel nutzen Patienten mit Rheuma oder anderen chronischen Erkrankungen auf deiner Station? Frage einen Patienten, welches Hilfsmittel ihm am meisten hilft — und warum.\n\n2. Finde heraus: Welche Berufsgruppen arbeiten auf deiner Station oder Einrichtung zusammen? Wer koordiniert die Zusammenarbeit? Gibt es regelmaessige Teambesprechungen?\n\n3. Reflektiere: Hast du schon erlebt, dass ein Patient Hilfsmittel abgelehnt hat? Was koennten die Gruende gewesen sein? Wie haettest du reagiert?\n\nMerke: Die ICF ist nicht nur ein Modell fuer die Reha-Klinik. Jedes Mal, wenn du einen Patienten ganzheitlich betrachtest — seine Funktionen, seine Aktivitaeten, seine Teilhabe, seine Ressourcen — denkst du in der ICF. Das ist biopsychosoziale Pflege.",
    },
    contentB1: {
      title: "Dein Auftrag fuer die Praxis",
      body: "Reha ist kein einmaliges Ereignis.\nReha ist ein langer Prozess.\nWas du in dieser Lektion gelernt hast, brauchst du ueberall:\nIm Krankenhaus, im Pflegeheim, in der ambulanten Pflege.\n\nAuftrag fuer dein naechstes Praktikum:\n\n1. Schau dich um: Welche Hilfsmittel nutzen Patienten?\nFrage einen Patienten: Welches Hilfsmittel hilft Ihnen am meisten?\n\n2. Finde heraus: Welche Berufsgruppen arbeiten auf deiner Station zusammen?\nWer organisiert die Zusammenarbeit?\n\n3. Denke nach: Hast du erlebt, dass ein Patient Hilfsmittel abgelehnt hat?\nWarum wohl? Was haettest du gesagt?\n\nMerke: Wenn du einen Patienten ganz anschaust —\nseinen Koerper, seine Aktivitaeten, seine Teilhabe am Leben —\ndann denkst du schon in der ICF.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Rehabilitation (Reha)",
    erklaerung:
      "Massnahmen zur Wiederherstellung oder Verbesserung der Funktionsfaehigkeit nach Krankheit oder Operation",
  },
  {
    begriff: "ICF",
    erklaerung:
      "Internationale Klassifikation der Funktionsfaehigkeit, Behinderung und Gesundheit — WHO-Modell fuer Rehabilitation",
  },
  {
    begriff: "AHB (Anschlussheilbehandlung)",
    erklaerung:
      "Rehabilitation direkt nach Krankenhausaufenthalt, muss innerhalb von 14 Tagen beginnen",
  },
  {
    begriff: "Synovektomie",
    erklaerung:
      "Operative Entfernung der entzuendeten Gelenkinnenhaut (Synovialis)",
  },
  {
    begriff: "Schwanenhalsdeformitaet",
    erklaerung:
      "Typische Fingerfehlstellung bei RA — Ueberstreckung im Mittelgelenk, Beugung im Endgelenk",
  },
  {
    begriff: "Partizipation",
    erklaerung:
      "Teilhabe am gesellschaftlichen Leben — Arbeit, Freizeit, Familie, Gemeinschaft",
  },
  {
    begriff: "DRV (Deutsche Rentenversicherung)",
    erklaerung:
      "Kostentraeger fuer Rehabilitation bei Erwerbstaetigen — Grundsatz: Reha vor Rente",
  },
  {
    begriff: "Funktionstraining",
    erklaerung:
      "Krankengymnastik in der Gruppe (Trocken oder Wasser), bis 24 Monate, verordnet bei Rheuma",
  },
  {
    begriff: "Orthese",
    erklaerung:
      "Aeussere Stuetzvorrichtung zur Stabilisierung, Entlastung oder Korrektur von Gelenken",
  },
  {
    begriff: "Interprofessionell",
    erklaerung:
      "Verschiedene Berufsgruppen arbeiten gleichberechtigt zusammen an einem gemeinsamen Ziel",
  },
  {
    begriff: "BEM (Betriebliches Eingliederungsmanagement)",
    erklaerung:
      "Verfahren zur Wiedereingliederung nach langer Krankheit (Paragraph 167 SGB IX)",
  },
  {
    begriff: "Versorgungskontinuitaet",
    erklaerung:
      "Lueckenlose Versorgung beim Wechsel zwischen Versorgungsbereichen (z.B. Reha nach ambulant)",
  },
];
