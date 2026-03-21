// Lektion 20: Komplexe Fallarbeit und Pruefungsvorbereitung
// CE 05 — Block F: Vertiefung & Pruefung
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-20-fallarbeit",
  ceId: "ce-05",
  title: "Komplexe Fallarbeit und Pruefungsvorbereitung",
  titleShort: "Fallarbeit",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 25, b1: 40 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-III.2", "KB-IV.1", "KB-V.1"],
  bloomStufen: [3, 4, 5, 6],
  voraussetzungen: ["le-19-evidenz"],
  leitfall: {
    name: "Margarete Wolf",
    alter: 74,
    beruf: "Pensionierte Postbotin",
    diagnose: "RA + Diabetes Typ 2 + CKD 3a + Osteoporose",
    setting: "Internistische Station",
    kernproblem:
      "Prednisolon-Dilemma: kontrolliert RA-Schub, verschlimmert Diabetes + Osteoporose + Sturzrisiko",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "fallarbeit-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q6", "Q7"],
    contentC1: {
      title: "Bereit fuer komplexe Faelle?",
      body: "Willkommen zur letzten Lektion von CE 05! In 19 Lektionen hast du den gesamten rheumatischen Formenkreis durchgearbeitet — von der Anatomie bis zur Evidenzbasierung. Jetzt kommt die Koenigsdisziplin: Komplexe Fallarbeit.\n\nIn der Pruefung nach PflAPrV bearbeitest du authentische Fallsituationen. Du analysierst, planst, begruendest und reflektierst. Nicht Einzelwissen wird geprueft, sondern deine Faehigkeit, Wissen in komplexen Situationen anzuwenden.\n\nIn dieser Lektion bearbeitest du drei anspruchsvolle Faelle:\n- Fall 1: RA + Diabetes + Niereninsuffizienz + Osteoporose\n- Fall 2: Akuter Gichtanfall + Diabetes + eingeschraenkte Nierenfunktion\n- Fall 3: SLE + Schwangerschaft + beginnende Lupusnephritis\n\nJeder Fall fordert dich heraus, dein Wissen aus verschiedenen Lektionen zu verbinden.",
      glossarBegriffe: ["Kompetenzorientierung", "Fallanalyse"],
    },
    contentB1: {
      title: "Bist du bereit fuer schwierige Faelle?",
      body: "Das ist die letzte Lektion von CE 05!\nDu hast schon 19 Lektionen ueber Rheuma gelernt.\nJetzt kommt die schwerste Aufgabe: Komplexe Faelle loesen.\n\nIn der Pruefung bekommst du einen Patienten-Fall.\nDu musst den Fall analysieren und Pflege planen.\n\nIn dieser Lektion arbeitest du mit drei schwierigen Faellen:\n- Fall 1: Eine Frau mit RA UND Diabetes UND Nierenproblemen\n- Fall 2: Ein Mann mit Gichtanfall UND Diabetes\n- Fall 3: Eine schwangere Frau mit SLE (Lupus)\n\nDu brauchst Wissen aus vielen Lektionen.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich, komplexe Pflegesituationen bei multimorbiden Rheuma-Patienten zu analysieren?",
    },
  },
  {
    stepId: "fallarbeit-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q6", "Q7"],
    contentC1: {
      title: "Systematische Fallbearbeitung",
      body: "",
    },
    question: {
      fragetext:
        "In der Pruefung bearbeitest du einen komplexen Patientenfall. Was ist der ERSTE Schritt einer systematischen Fallanalyse?",
      optionen: [
        {
          text: "Sofort Pflegemassnahmen planen — Zeit ist begrenzt",
          isCorrect: false,
          explanation:
            "Massnahmen ohne vorherige Analyse fuehren zu ungezielter Pflege. Zuerst muss die Situation verstanden werden — welche Probleme, Ressourcen und Zusammenhaenge bestehen?",
        },
        {
          text: "Die Fallsituation vollstaendig lesen und die pflegerischen Probleme identifizieren",
          isCorrect: true,
          explanation:
            "Richtig! Zuerst liest du den Fall komplett, identifizierst Probleme, Ressourcen und Zusammenhaenge. Dann erst folgen Diagnosen, Ziele und Massnahmen. Systematik schlaegt Geschwindigkeit.",
        },
        {
          text: "Die medizinische Diagnose herausarbeiten — daraus ergibt sich die Pflege",
          isCorrect: false,
          explanation:
            "Die medizinische Diagnose ist EIN Aspekt, aber Pflege orientiert sich an Pflegediagnosen (NANDA-I), nicht nur an aerztlichen Diagnosen. Pflegeanamnese erfasst auch psychosoziale, funktionelle und spirituelle Aspekte.",
        },
        {
          text: "Die Kompetenzbereiche aufschreiben, die abgefragt werden koennten",
          isCorrect: false,
          explanation:
            "Strategisches Denken ist gut, aber die Fallanalyse muss inhaltlich beginnen. Die Kompetenzbereiche zeigen sich in deiner Bearbeitung, nicht umgekehrt.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "fallarbeit-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5", "Q8"],
    contentC1: {
      title: "Margarete Wolf — Wenn alles zusammenkommt",
      body: "Margarete Wolf, 74 Jahre, pensionierte Postbotin, wird auf die internistische Station eingewiesen. Grund: entgleister Diabetes (HbA1c 9,2%).\n\nVorgeschichte: Rheumatoide Arthritis seit 22 Jahren (seropositive RA, RF+, Anti-CCP+). Diabetes Typ 2 seit 15 Jahren. CKD Stadium 3a (GFR 52 ml/min). Osteoporose (T-Score LWS -3,1).\n\nAktuelle Situation: Vor 8 Wochen RA-Schub (DAS28 5,4). Rheumatologe erhoehte Prednisolon auf 15 mg/d. MTX wurde pausiert wegen GFR-Abfall auf 48. Seitdem: HbA1c von 7,1% auf 9,2% gestiegen. Nuechternblutzucker morgens 220 mg/dl. Zwei Stuerze in den letzten 3 Monaten (Osteoporose + Muskelschwaeche durch Prednisolon).\n\nMargarete lebt allein seit dem Tod ihres Ehemanns vor 2 Jahren. Ihre Tochter (Apothekerin) wohnt 40 km entfernt. Nachbarn helfen beim Einkauf. Margarete sagt: 'Ich habe 38 Jahre lang bei Wind und Wetter Post ausgetragen. Jetzt schaffe ich es kaum noch zur Toilette.'",
      fallbezug:
        "Margarete ist der Primaerfall dieser Lektion. Ihr Fall zeigt das haeufigste reale Problem: Multimorbiditaet mit sich gegenseitig verschlechternden Erkrankungen und Therapien.",
      glossarBegriffe: [
        "Multimorbiditaet",
        "Polypharmazie",
        "GFR",
      ],
    },
    contentB1: {
      title: "Frau Wolf — Viele Krankheiten gleichzeitig",
      body: "Frau Wolf ist 74 Jahre alt.\nFrueher hat sie als Postbotin gearbeitet.\nJetzt ist sie im Krankenhaus.\nIhr Blutzucker ist zu hoch.\n\nFrau Wolf hat viele Krankheiten:\n- Rheuma (RA) seit 22 Jahren\n- Zucker-Krankheit (Diabetes) seit 15 Jahren\n- Nieren arbeiten nicht mehr so gut (GFR 52)\n- Schwache Knochen (Osteoporose)\n\nDas Problem jetzt:\nVor 8 Wochen hatte sie einen Rheuma-Schub.\nDer Arzt gab ihr Prednisolon (Kortison), 15 mg pro Tag.\nAber: Kortison macht den Blutzucker hoch.\nIhr HbA1c ist von 7,1% auf 9,2% gestiegen.\n\nAusserdem: Sie ist 2 Mal hingefallen in 3 Monaten.\nKortison macht die Muskeln schwach.\nMit schwachen Knochen ist ein Sturz sehr gefaehrlich.\n\nFrau Wolf lebt allein.\nIhr Mann ist vor 2 Jahren gestorben.\nSie sagt: 'Ich habe 38 Jahre Post ausgetragen. Jetzt schaffe ich es kaum zur Toilette.'",
      fallbezug:
        "Frau Wolf ist der wichtigste Fall in dieser Lektion. Sie hat viele Krankheiten gleichzeitig. Das macht die Pflege schwierig.",
    },
  },
  {
    stepId: "fallarbeit-04",
    phase: 2,
    stepType: "sorting",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q8", "Q10"],
    contentC1: {
      title: "Prioritaeten setzen",
      body: "Bei Margarete liegen mehrere Pflegeprobleme gleichzeitig vor. In der Pruefung musst du priorisieren — nicht alles gleichzeitig bearbeiten, sondern die dringendsten Probleme zuerst.",
      fallbezug:
        "Welche Probleme bei Margarete sind am dringendsten? Denke an akute Gefaehrdung vs. langfristige Ziele.",
    },
    question: {
      fragetext:
        "Bringe die pflegerischen Prioritaeten bei Margarete in die richtige Reihenfolge (dringendste zuerst):",
      sortItems: [
        "Sturzprophylaxe (akute Gefaehrdung durch 2 Stuerze + Osteoporose + Prednisolon-Myopathie)",
        "Blutzucker-Monitoring und Insulintherapie-Unterstuetzung (HbA1c 9,2%, Nue-BZ 220)",
        "Prednisolon-Reduktionsplan mit Rheumatologie abstimmen (Ursache fuer Diabetes + Osteoporose)",
        "Alternative Basistherapie fuer RA klaeren (MTX pausiert, Biologikum bei CKD?)",
        "Psychosoziale Unterstuetzung und Entlassplanung (alleinlebend, Sturzangst, Trauer)",
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "fallarbeit-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q5"],
    contentC1: {
      title: "Ahmed Saidi — Gichtanfall und Medikamenten-Dilemma",
      body: "Ahmed Saidi, 58 Jahre, Busfahrer, kommt in die Notaufnahme. Sein rechtes Grosszehengrundgelenk ist massiv geschwollen, geroetet und extrem druckempfindlich — klassisches Podagra. Schmerz: NRS 9/10.\n\nVorerkrankungen: Gicht seit 5 Jahren (Allopurinol 300 mg/d), Diabetes Typ 2 (Metformin 2x 1000 mg + Empagliflozin 10 mg), Hypertonie (Amlodipin 5 mg + HCT 25 mg). Aktuell: Harnsaeure 9,8 mg/dl, CRP 85 mg/l, GFR 45 ml/min (CKD 3b), HbA1c 7,8%.\n\nDas Dilemma: NSAR (Ibuprofen, Diclofenac) sind bei GFR 45 kontraindiziert — Nephrotoxizitaet. Colchicin muss niedrigdosiert werden. HCT erhoeht die Harnsaeure — aber Absetzen verschlechtert den Blutdruck. Und in 3 Wochen beginnt der Ramadan.\n\nAhmed sagt: 'Geben Sie mir einfach Ibuprofen wie letztes Mal. Das hat immer geholfen.'",
      fallbezug:
        "Ahmed zeigt das typische Spannungsfeld zwischen Patientenwunsch und leitliniengerechter Therapie — verstaerkt durch Nierenfunktionseinschraenkung und kulturelle Aspekte.",
      glossarBegriffe: [
        "Podagra",
        "CKD",
        "Nephrotoxizitaet",
      ],
    },
    contentB1: {
      title: "Herr Saidi — Gichtanfall und Medikamenten-Problem",
      body: "Herr Saidi ist 58 Jahre alt.\nEr faehrt Bus bei den Stadtwerken.\nEr kommt in die Notaufnahme.\n\nSein rechter grosser Zeh ist:\n- Sehr geschwollen\n- Rot\n- Extrem schmerzhaft (9 von 10)\nDas ist ein Gichtanfall (Fachsprache: Podagra).\n\nHerr Saidi hat auch Diabetes und Bluthochdruck.\nEr nimmt viele Medikamente.\nEines davon heisst HCT.\nHCT kann Gichtanfaelle ausloesen.\n\nDas Problem:\nHerr Saidi will Ibuprofen.\nDas hat beim letzten Mal geholfen.\nAber: Seine Nieren arbeiten schlecht (GFR 45).\nIbuprofen schadet den Nieren.\nEs gibt aber andere Medikamente.\n\nHerr Saidi hat Angst, dass er nicht mehr Bus fahren kann.\nIn 3 Wochen beginnt der Ramadan.",
      fallbezug:
        "Herr Saidi will ein Medikament, das ihm schadet. Du musst ihm erklaeren warum und eine Alternative anbieten.",
    },
  },
  {
    stepId: "fallarbeit-06",
    phase: 3,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q2", "Q5"],
    contentC1: {
      title: "Ahmed bittet um Ibuprofen",
      body: "Ahmed sagt: 'Beim letzten Mal hat Ibuprofen in 2 Stunden geholfen. Warum wollen Sie mir das jetzt nicht geben? Ich muss morgen wieder arbeiten!'",
      fallbezug:
        "Patientenberatung bei Medikamenten-Kontraindikation — wie erklaerst du es verstaendlich und wertschaetzend?",
    },
    question: {
      fragetext: "Wie reagierst du auf Ahmeds Wunsch nach Ibuprofen?",
      branchingOptions: [
        {
          text: "Ibuprofen ist bei Ihnen nicht moeglich. Ihre Nieren arbeiten eingeschraenkt, und Ibuprofen wuerde sie weiter schaedigen. Wir haben aber gute Alternativen.",
          feedback:
            "Gut! Du kommunizierst klar und ehrlich WARUM Ibuprofen nicht geht (Nierenschaedigung bei GFR 45) und bietest sofort eine Loesung an. Leitliniengerecht waere niedrigdosiertes Colchicin (0,5 mg 2x/d) oder Prednisolon kurzzeitig.",
          isCorrect: true,
        },
        {
          text: "Ich muss den Arzt fragen, ich darf Ihnen kein Ibuprofen geben.",
          feedback:
            "Formal korrekt — du darfst keine Medikamente eigenstaendig geben. Aber du uebergehst Ahmeds Frage und erklaerst nicht WARUM. Als Pflegekraft ist es deine Aufgabe, Patienten zu informieren. Ein kurzes 'Ihre Nieren vertragen Ibuprofen aktuell nicht' waere wichtig.",
          isCorrect: false,
        },
        {
          text: "Das letzte Mal hatten Ihre Nieren noch besser gearbeitet. Jetzt ist Ihre Nierenfunktion eingeschraenkt. Ibuprofen wuerde Ihre Nieren weiter belasten. Der Arzt wird Ihnen ein anderes Schmerzmittel geben, das genauso gut wirkt aber Ihre Nieren schont.",
          feedback:
            "Sehr gut! Du erklaerst den Zusammenhang (GFR frueher besser, jetzt CKD 3b), begruendest nachvollziehbar (Nieren schonen) und gibst Zuversicht (gleichwertiges Alternativmedikament). Empathisch und fachlich korrekt.",
          isCorrect: true,
        },
      ],
    },
  },
  {
    stepId: "fallarbeit-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q4", "Q9"],
    contentC1: {
      title: "Sophia Karagianni — SLE und Schwangerschaft",
      body: "Sophia Karagianni, 29 Jahre, Tieraerztin, kommt zum geplanten Kontrolltermin in die rheumatologische Ambulanz. Sie ist in der 12. Schwangerschaftswoche — ihre erste Schwangerschaft, geplant und gewuenscht.\n\nDiagnose: SLE seit 4 Jahren. Antikoerperprofil: ANA positiv, Anti-dsDNA positiv, Anti-Phospholipid-Antikoerper positiv. Aktuelle Medikation: Hydroxychloroquin (HCQ) 200 mg/d, Azathioprin 75 mg/d, ASS 100 mg/d (wegen APS), niedermolekulares Heparin (NMH) prophylaktisch.\n\nDie Schwangerschaft wurde nach EULAR-Empfehlung geplant: 6 Monate stabile Remission, MTX 8 Monate vor Konzeption abgesetzt, HCQ fortgefuehrt. Alles lief gut — bis zum heutigen Laborbefund.\n\nHeutiges Labor: Proteinurie 0,8 g/24h (vorher: 0,15 g), Komplement C3 erniedrigt (0,65 g/l, Norm > 0,9), Anti-dsDNA-Titer gestiegen. Klinisch: leichte Beinoedeme, Blutdruck 145/92 mmHg.\n\nSophia fragt mit Traenen in den Augen: 'Ist mein Baby in Gefahr?'",
      fallbezug:
        "Sophia zeigt die komplexeste Entscheidungssituation in der Rheumatologie — SLE-Schub in der Schwangerschaft mit V.a. Lupusnephritis.",
      glossarBegriffe: [
        "Lupusnephritis",
        "Anti-Phospholipid-Syndrom",
        "Proteinurie",
      ],
    },
    contentB1: {
      title: "Frau Karagianni — Lupus und Schwangerschaft",
      body: "Frau Karagianni ist 29 Jahre alt.\nSie ist Tieraerztin.\nSie kommt zur Kontrolle beim Rheumatologen.\nSie ist schwanger — in der 12. Woche.\nEs ist ihr erstes Kind.\n\nSie hat SLE (Lupus) seit 4 Jahren.\nBeim Lupus greift das Immunsystem den eigenen Koerper an.\n\nIhre Schwangerschaft wurde geplant.\n6 Monate war der Lupus ruhig.\nIhr Medikament MTX wurde vorher gestoppt.\nMTX schadet dem Baby.\nSie nimmt jetzt HCQ und Azathioprin.\nDiese Medikamente sind erlaubt in der Schwangerschaft.\n\nAber heute zeigt das Labor ein Problem:\n- Zu viel Eiweiss im Urin (Proteinurie)\n- Das heisst: Die Nieren sind betroffen\n- Der Lupus wird wieder aktiv\n\nFrau Karagianni weint.\nSie fragt: 'Ist mein Baby in Gefahr?'",
      fallbezug:
        "Frau Karagianni hat Lupus und ist schwanger. Jetzt wird der Lupus wieder aktiv. Das ist eine schwierige Situation.",
    },
  },
  {
    stepId: "fallarbeit-08",
    phase: 3,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-III.2",
    quellen: ["Q3", "Q4", "Q9"],
    contentC1: {
      title: "Wer muss jetzt zusammenarbeiten?",
      body: "Sophias Situation erfordert sofortige interprofessionelle Abstimmung. Als Pflegekraft in der rheumatologischen Ambulanz bist du die erste Kontaktperson.",
      fallbezug:
        "Welche Fachdisziplinen muessen bei V.a. Lupusnephritis in der 12. SSW einbezogen werden?",
    },
    question: {
      fragetext:
        "Die Laborwerte von Sophia zeigen Zeichen einer beginnenden Lupusnephritis in der 12. SSW. Welche Fachrichtungen muessen ZWINGEND einbezogen werden?",
      optionen: [
        {
          text: "Nur Rheumatologie — SLE ist eine rheumatologische Erkrankung",
          isCorrect: false,
          explanation:
            "Rheumatologie allein reicht nicht. Bei Nierenbeteiligung braucht es Nephrologie, und in der Schwangerschaft zwingend Geburtshilfe. Fragmentierte Versorgung ist das Hauptrisiko bei SLE + Schwangerschaft.",
        },
        {
          text: "Rheumatologie + Nephrologie + Geburtshilfe/Perinatalzentrum",
          isCorrect: true,
          explanation:
            "Richtig! Dieses Trio ist Pflicht: Rheumatologie (SLE-Management, Immunsuppression), Nephrologie (Proteinurie, GFR, ggf. Nierenbiopsie), Geburtshilfe (fetale Ueberwachung, Praeeklampsie-Screening). EULAR und S3-Leitlinie empfehlen die Betreuung in spezialisierten Zentren.",
        },
        {
          text: "Rheumatologie + Geburtshilfe — die Niere ist noch nicht kritisch betroffen",
          isCorrect: false,
          explanation:
            "Proteinurie 0,8 g/d mit Komplement-Abfall IST eine signifikante Nierenbeteiligung. Die S3-Leitlinie SLE definiert Proteinurie > 0,5 g/d als Aktivitaetszeichen. Nephrologische Mitbetreuung ist ab diesem Wert empfohlen.",
        },
        {
          text: "Rheumatologie + Nephrologie + Geburtshilfe + Kardiologie",
          isCorrect: false,
          explanation:
            "Kardiologie ist aktuell nicht zwingend noetig. Der Blutdruck (145/92) wird von Nephrologie/Geburtshilfe mitbetreut (Praeeklampsie-Differenzialdiagnose). Kardiologie waere bei Perikarditis oder Myokarditis relevant.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-12)
  // ==========================================
  {
    stepId: "fallarbeit-09",
    phase: 4,
    stepType: "matching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3"],
    contentC1: {
      title: "Pflegediagnosen — drei Faelle, sechs Diagnosen",
      body: "Du hast drei komplexe Faelle kennengelernt. Jetzt ordnest du NANDA-I-Pflegediagnosen den richtigen Patienten zu. Waehle die PRIMAERE Zuordnung.",
      fallbezug:
        "Alle drei Faelle — Margarete, Ahmed, Sophia — haben unterschiedliche pflegerische Prioritaeten.",
    },
    question: {
      fragetext:
        "Ordne jede Pflegediagnose dem Patienten zu, bei dem sie die HOECHSTE Prioritaet hat:",
      matchingPairs: [
        {
          left: "Sturzrisiko (NANDA-I 00306)",
          right: "Margarete Wolf (74, Osteoporose + Prednisolon-Myopathie + 2 Stuerze)",
        },
        {
          left: "Akuter Schmerz (NANDA-I 00132)",
          right: "Ahmed Saidi (58, Podagra NRS 9/10)",
        },
        {
          left: "Angst (NANDA-I 00146)",
          right: "Sophia Karagianni (29, Angst um Baby bei Lupusnephritis)",
        },
        {
          left: "Instabiler Blutzuckerspiegel (NANDA-I 00179)",
          right: "Margarete Wolf (74, HbA1c 9,2% unter Prednisolon)",
        },
        {
          left: "Beeintraechtigte koerperliche Mobilitaet (NANDA-I 00085)",
          right: "Ahmed Saidi (58, kann nicht auftreten, Busfahrer)",
        },
        {
          left: "Risiko fuer ineffektives Gesundheitsmanagement",
          right: "Sophia Karagianni (29, SLE-Schub + APS + Proteinurie in SSW)",
        },
      ],
    },
  },
  {
    stepId: "fallarbeit-10",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q8", "Q10"],
    contentC1: {
      title: "Pflegeplanung schreiben — Pruefungsformat",
      body: "Stelle dir vor, du schreibst die schriftliche Pruefung. Aufgabe: Erstelle eine Pflegeplanung fuer Margaretes prioritaeres Problem — das Sturzrisiko.",
      fallbezug:
        "Margarete, 74, RA + Osteoporose + Prednisolon-Myopathie, 2 Stuerze in 3 Monaten, lebt allein, Sturzangst.",
    },
    question: {
      fragetext:
        "Erstelle eine Pflegeplanung fuer Margaretes Sturzrisiko. Formuliere: 1) Pflegediagnose (NANDA-I), 2) Ein SMART-Ziel, 3) Drei konkrete Pflegemassnahmen mit Begruendung.",
      musterantwort:
        "1) Pflegediagnose: Sturzrisiko (NANDA-I 00306), begruendet durch: Osteoporose (T-Score -3,1), Prednisolon-induzierte Myopathie (15 mg/d seit 8 Wochen), 2 Stuerze in 3 Monaten, eingeschraenkte Mobilitaet, alleinlebend.\n\n2) SMART-Ziel: Frau Wolf erleidet waehrend des stationaeren Aufenthalts keinen Sturz und kann bei Entlassung 3 Sturzprophylaxe-Massnahmen fuer zu Hause benennen.\n\n3) Massnahmen:\n- Sturzrisiko-Assessment (Morse Fall Scale) bei Aufnahme und woechentlich: Quantifiziert das Risiko, ermoeglicht Verlaufskontrolle (DNQP Expertenstandard Sturzprophylaxe).\n- Nachtlicht, Antirutschsocken, Betthoehe anpassen, Klingel in Reichweite: Umgebungsanpassung reduziert extrinsische Sturzrisikofaktoren.\n- Physiotherapie (Kraft- und Gleichgewichtstraining) 2x taeglich 15 Min: Wirkt der Prednisolon-Myopathie entgegen. Krafttraining senkt Sturzrate um 23% bei aelteren Patienten.",
      bewertungskriterien: [
        "Pflegediagnose mit korrektem NANDA-I-Code und sturzspezifischen Risikofaktoren",
        "SMART-Ziel (spezifisch, messbar, zeitgebunden)",
        "Mind. 3 Massnahmen mit fachlicher Begruendung",
        "Bezug zum konkreten Fall (Prednisolon, Osteoporose, alleinlebend)",
        "Beruecksichtigung eines Expertenstandards (DNQP)",
      ],
      satzanfaengeB1: [
        "Das Hauptproblem von Frau Wolf ist...",
        "Ein Ziel fuer die Pflege ist...",
        "Eine wichtige Massnahme ist... weil...",
      ],
    },
  },
  {
    stepId: "fallarbeit-11",
    phase: 4,
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q3", "Q4", "Q9"],
    contentC1: {
      title: "Sophia fragt: Ist mein Baby in Gefahr?",
      body: "Sophia sitzt weinend im Untersuchungszimmer. Der Rheumatologe hat ihr die Laborergebnisse erklaert — Proteinurie, Komplement-Abfall, V.a. Lupusnephritis. Er hat gesagt, dass weitere Untersuchungen noetig sind und die Schwangerschaft engmaschig ueberwacht werden muss.\n\nSophia dreht sich zu dir und fragt: 'Sagen Sie mir die Wahrheit — wird mein Baby das ueberleben?'",
      fallbezug:
        "Kommunikation in einer emotional hochbelasteten Situation — mit einer gut informierten, aengstlichen Patientin.",
    },
    question: {
      fragetext: "Wie reagierst du auf Sophias Frage?",
      branchingOptions: [
        {
          text: "Die meisten Frauen mit SLE bekommen gesunde Babys — auch wenn es Komplikationen gibt. Ich kann mir vorstellen, wie besorgt Sie sind. Moechten Sie mir erzaehlen, was Ihnen gerade am meisten Angst macht?",
          feedback:
            "Sehr gut! Du gibst eine ehrliche, beruhigende Einordnung (Mehrheit der SLE-Schwangerschaften verlaeuft gut bei engmaschiger Betreuung), validierst ihre Angst und oeffnest den Gespraechsraum. Du stellst keine Diagnosen und machst keine Prognosen — das ist aerztliche Aufgabe. Aber du zeigst: Ich bin da, ich hoere zu.",
          isCorrect: true,
        },
        {
          text: "Machen Sie sich keine Sorgen, das wird schon. Die Medizin ist heute so weit, da passiert nichts.",
          feedback:
            "Gut gemeint, aber problematisch. Bagatellisieren von Sophias Angst kann dazu fuehren, dass sie sich nicht ernst genommen fuehlt. Eine Garantie kannst du nicht geben. Lupusnephritis in der Schwangerschaft IST eine ernste Situation — Ehrlichkeit mit Zuversicht ist besser als falsche Beruhigung.",
          isCorrect: false,
        },
        {
          text: "Das kann ich Ihnen leider nicht sagen — fragen Sie besser den Arzt.",
          feedback:
            "Formal korrekt (Prognose ist aerztliche Aufgabe), aber menschlich unzureichend. Sophia braucht JETZT eine Reaktion — nicht eine Verweisung. Als Pflegekraft kannst du emotionale Unterstuetzung geben, zuhoeren und allgemeine Informationen teilen, ohne eine Prognose zu stellen.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "fallarbeit-12",
    phase: 4,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q5", "Q8"],
    contentC1: {
      title: "Pruefungsfrage: Therapeutisches Dilemma",
      body: "Diese Frage koennte so in der schriftlichen Pruefung vorkommen. Lies sie sorgfaeltig und begruende deine Antwort.",
      fallbezug:
        "Margaretes Prednisolon (15 mg/d) kontrolliert ihren RA-Schub, verschlimmert aber gleichzeitig drei andere Erkrankungen.",
    },
    question: {
      fragetext:
        "Welche Aussage zum Prednisolon-Dilemma bei Frau Wolf ist fachlich KORREKT?",
      optionen: [
        {
          text: "Prednisolon muss sofort abgesetzt werden, weil es den Diabetes verschlechtert",
          isCorrect: false,
          explanation:
            "Abruptes Absetzen von Prednisolon ist gefaehrlich — es droht eine Nebennierenrindeninsuffizienz (Addison-Krise) und ein RA-Schub-Rebound. Die S3-Leitlinie empfiehlt schrittweise Reduktion.",
        },
        {
          text: "Prednisolon verschlimmert alle Komorbiditaeten (Diabetes, Osteoporose, Myopathie) und muss schrittweise reduziert werden, waehrend eine alternative RA-Therapie aufgebaut wird",
          isCorrect: true,
          explanation:
            "Richtig! Prednisolon verschlimmert bei Margarete DREI Komorbiditaeten gleichzeitig: Diabetes (Blutzucker), Osteoporose (Knochenabbau), Muskelschwaeche (Myopathie). Die S3-Leitlinie sagt: max. 3 Monate, spaetestens 6 Monate absetzen. Gleichzeitig muss eine alternative RA-Basistherapie beginnen.",
        },
        {
          text: "Prednisolon ist bei RA-Patienten ueber 70 Jahren Dauertherapie — die Risiken sind akzeptabel",
          isCorrect: false,
          explanation:
            "Falsch. Die AWMF S3-Leitlinie empfiehlt explizit KEIN Prednisolon als Dauertherapie — unabhaengig vom Alter. Bei aelteren Patienten sind die Risiken sogar HOEHER.",
        },
        {
          text: "Prednisolon 15 mg/d ist eine niedrige Dosis und verursacht keine relevanten Nebenwirkungen",
          isCorrect: false,
          explanation:
            "15 mg/d ist KEINE niedrige Dosis. Low-dose ist kleiner-gleich 7,5 mg/d. Ab 10 mg/d steigen die Risiken fuer Diabetes, Osteoporose und Infektionen deutlich. Margaretes HbA1c-Anstieg von 7,1% auf 9,2% zeigt die Auswirkung direkt.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Steps 13-14)
  // ==========================================
  {
    stepId: "fallarbeit-13",
    phase: 5,
    stepType: "sorting",
    bloomLevel: 4,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q6", "Q7"],
    contentC1: {
      title: "Pruefungsstrategie — Faelle systematisch bearbeiten",
      body: "In der Pruefung hast du 120 Minuten fuer eine Fallbearbeitung. Viele Schueler verlieren Punkte nicht durch fehlendes Wissen, sondern durch unstrukturiertes Vorgehen. Hier ist die bewaehrte Methode.",
    },
    question: {
      fragetext:
        "Bringe die Schritte der systematischen Fallbearbeitung in die richtige Reihenfolge:",
      sortItems: [
        "Fall komplett lesen — Probleme, Ressourcen, Zusammenhaenge markieren",
        "Pflegeanamnese strukturieren — nach AEDL/ATL oder Pflegemodell ordnen",
        "Pflegediagnosen formulieren — NANDA-I mit Aetiologie und Symptomen",
        "Pflegeziele ableiten — SMART, patientenorientiert, realistisch",
        "Pflegemassnahmen planen — evidenzbasiert, begruendet, individualisiert",
        "Evaluation beschreiben — Kriterien definieren, Zeitpunkt festlegen",
      ],
    },
  },
  {
    stepId: "fallarbeit-14",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 6,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q6"],
    contentC1: {
      title: "20 Lektionen — Was nimmst du mit?",
      body: "Du hast 20 Lektionen durchgearbeitet — von 'Was ist Rheuma?' bis zu komplexen Fallszenarien mit Multimorbiditaet, Schwangerschaft und ethischen Dilemmata. Du hast 20 verschiedene Patienten kennengelernt, von Petra Meier (45, Erzieherin) bis Sophia Karagianni (29, Tieraerztin).\n\nReflexion ist die hoechste Bloom-Stufe (B6). Es geht nicht um richtig oder falsch — es geht darum, deine eigene Entwicklung zu erkennen.",
    },
    question: {
      fragetext:
        "Reflektiere deine Lernreise durch CE 05: Was war die wichtigste Erkenntnis fuer dich? Was hat dein Bild von Rheuma-Patienten veraendert? Wo fuehlst du dich jetzt sicher, und wo brauchst du noch Uebung?",
      musterantwort:
        "Eine moegliche Reflexion: 'Vor CE 05 dachte ich, Rheuma bedeutet alte Menschen mit steifen Gelenken. Jetzt weiss ich, dass Rheuma ueber 400 Erkrankungen umfasst und Menschen in jedem Alter betrifft. Am meisten hat mich ueberrascht, wie stark die psychosoziale Dimension ist — Omar Mansour (Koch mit Depression) und Amara Diallo (Lehrerin mit unsichtbarer Krankheit) haben mir gezeigt, dass Pflege weit mehr ist als Medikamente verteilen. Sicher fuehle ich mich bei Assessments und Pflegeplanung. Mehr Uebung brauche ich bei der interprofessionellen Kommunikation.'",
      bewertungskriterien: [
        "Bezug auf konkrete Lektionsinhalte oder Faelle aus CE 05",
        "Reflexion der eigenen Kompetenzentwicklung (vorher vs. nachher)",
        "Differenzierte Selbsteinschaetzung (Staerken UND Entwicklungsbereiche)",
        "Erkenntnis ueber die Vielschichtigkeit rheumatologischer Pflege",
      ],
      satzanfaengeB1: [
        "Am Anfang von CE 05 dachte ich...",
        "Jetzt weiss ich, dass...",
        "Am meisten hat mich ueberrascht, dass...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 15)
  // ==========================================
  {
    stepId: "fallarbeit-15",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q6", "Q7"],
    contentC1: {
      title: "CE 05 abgeschlossen — Was kommt jetzt?",
      body: "Du hast es geschafft: 20 Lektionen, 40 Unterrichtseinheiten, alle Kompetenzbereiche. Von der Anatomie des Bewegungsapparats bis zur komplexen Fallarbeit mit drei multimorbiden Patienten. Das ist eine echte Leistung.\n\nWas du jetzt kannst:\n- Rheumatische Erkrankungen erkennen, unterscheiden und pflegerisch begleiten\n- Assessments durchfuehren, Pflegediagnosen stellen, Pflegeplaene schreiben\n- Medikamente und ihre Nebenwirkungen beobachten und Patienten beraten\n- In interprofessionellen Teams kommunizieren und koordinieren\n- Komplexe Faelle systematisch analysieren und Entscheidungen begruenden\n\nWas du mitnehmen solltest:\n- Jeder Patient ist einzigartig — Standard-Pflege reicht bei Rheuma nicht\n- Sprache und Kultur beeinflussen das Krankheitserleben — kultursensibel pflegen\n- Chronische Krankheit bedeutet Lebensveraenderung — psychosoziale Pflege ist Kernkompetenz\n- Evidenz leitet dein Handeln — aber der Patient entscheidet mit (Shared Decision Making)\n\nDein naechster Schritt: Wenn die Pruefung naeher rueckt, wiederhole gezielt die Lektionen, bei denen du unsicher bist. Nutze die Fallbeispiele fuer eigene Uebungs-Pflegeplanungen. Und denk daran: Du bist besser vorbereitet als du denkst.",
      fallbezug:
        "Margarete, Ahmed und Sophia — drei Patienten, die dir in der Praxis so begegnen koennten. Wenn du ihre Faelle bearbeiten kannst, bist du bereit fuer die Pruefung und fuer die Realitaet auf Station.",
    },
    contentB1: {
      title: "CE 05 fertig — Was kommt jetzt?",
      body: "Du hast es geschafft!\n20 Lektionen ueber Rheuma.\n40 Unterrichtseinheiten.\nDas ist eine grosse Leistung.\n\nWas du jetzt kannst:\n- Rheuma-Krankheiten erkennen und unterscheiden\n- Patienten richtig untersuchen (Assessment)\n- Pflegeplaene schreiben\n- Medikamente beobachten und Patienten beraten\n- Mit dem Team zusammenarbeiten\n- Schwierige Faelle loesen\n\nWas du dir merken solltest:\n- Jeder Patient ist anders\n- Sprache und Kultur sind wichtig\n- Rheuma veraendert das ganze Leben\n- Pflege ist mehr als Medikamente geben\n\nDein naechster Schritt:\nWiederhole die Lektionen, bei denen du unsicher bist.\nUebe mit den Fallbeispielen.\nSchreibe eigene Pflegeplanungen.\nDu bist gut vorbereitet!",
      fallbezug:
        "Frau Wolf, Herr Saidi und Frau Karagianni — drei Patienten aus der Praxis. Wenn du ihre Faelle loesen kannst, bist du bereit.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Multimorbiditaet",
    erklaerung:
      "Gleichzeitiges Vorliegen von drei oder mehr chronischen Erkrankungen bei einem Patienten",
  },
  {
    begriff: "Polypharmazie",
    erklaerung:
      "Gleichzeitige Einnahme von fuenf oder mehr Medikamenten — erhoeht das Risiko fuer Wechselwirkungen",
  },
  {
    begriff: "GFR",
    erklaerung:
      "Glomerulaere Filtrationsrate — Mass fuer die Nierenfunktion in ml/min. Normal >90, CKD 3a: 45-59, CKD 3b: 30-44",
  },
  {
    begriff: "CKD",
    erklaerung:
      "Chronic Kidney Disease — chronische Nierenerkrankung, eingeteilt in Stadien 1-5 nach GFR",
  },
  {
    begriff: "Nephrotoxizitaet",
    erklaerung:
      "Schaedigung der Nieren durch Medikamente — z.B. NSAR bei eingeschraenkter GFR",
  },
  {
    begriff: "Podagra",
    erklaerung:
      "Akuter Gichtanfall am Grosszehengrundgelenk — typischste Manifestation der Gicht",
  },
  {
    begriff: "Lupusnephritis",
    erklaerung:
      "Nierenentzuendung als Organbeteiligung des SLE — erkennbar an Proteinurie und Komplement-Abfall",
  },
  {
    begriff: "Anti-Phospholipid-Syndrom",
    erklaerung:
      "Gerinnungsstoerung bei SLE mit erhoehtem Thrombose- und Abortrisiko — Therapie: ASS + NMH",
  },
  {
    begriff: "Proteinurie",
    erklaerung:
      "Erhoehte Eiweissausscheidung im Urin — Zeichen fuer Nierenschaedigung, bei SLE ab 0,5 g/d relevant",
  },
  {
    begriff: "Kompetenzorientierung",
    erklaerung:
      "Pruefungsprinzip nach PflAPrV: Nicht Faktenwissen, sondern pflegerische Handlungskompetenz wird geprueft",
  },
  {
    begriff: "Fallanalyse",
    erklaerung:
      "Systematische Bearbeitung einer Pflegesituation: Anamnese, Diagnose, Ziele, Massnahmen, Evaluation",
  },
  {
    begriff: "Pruefungsrelevanz",
    erklaerung:
      "Bedeutung eines Themas fuer die staatliche Abschlusspruefung nach PflAPrV",
  },
];
