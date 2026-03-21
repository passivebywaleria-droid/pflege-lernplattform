// Lektion 14: Schmerzmanagement bei Rheuma
// CE 05 — Block D: Pflegerisches Handeln
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-14-schmerzmanagement",
  ceId: "ce-05",
  title: "Schmerzmanagement bei Rheuma",
  titleShort: "Schmerz",
  zeitrichtwert: 3,
  geschaetzteLernzeit: { c1: 25, b1: 40 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2", "KB-IV.1", "KB-V.1"],
  bloomStufen: [2, 5],
  voraussetzungen: ["le-11-assessments"],
  leitfall: {
    name: "Thomas Brandt",
    alter: 55,
    beruf: "LKW-Fernfahrer (selbststaendig)",
    diagnose:
      "RA seit 8 Jahren, NSAR-induziertes Ulcus ventriculi nach 3 Jahren Ibuprofen-Dauergebrauch ohne PPI",
    setting: "Gastroenterologische Station, rheumatologisches Konsil",
    kernproblem:
      "NSAR-Overuse, maennliche Schmerzsozialisation, Berufsdilemma LKW-Fuehrerschein vs. wirksame Analgesie",
  },
  glossarCount: 14,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "schmerz-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q3", "Q10"],
    contentC1: {
      title: "Wie sicher bist du bei Schmerzmanagement?",
      body: "Schmerz ist das Leitsymptom rheumatischer Erkrankungen — und gleichzeitig eines der am haeufigsten unterschaetzten Pflegeprobleme. In dieser Lektion lernst du, Schmerzarten zu unterscheiden, das WHO-Stufenschema anzuwenden, nicht-medikamentoese Verfahren gezielt einzusetzen und Schmerz systematisch zu dokumentieren.\n\nDu begegnest Thomas Brandt, einem LKW-Fernfahrer mit RA, der seit 3 Jahren taeglich Ibuprofen nimmt — ohne Magenschutz. Was das mit Schmerzmanagement zu tun hat und warum \"einfach Schmerzmittel nehmen\" nicht reicht, erfaehrst du in den naechsten Steps.\n\nAm Ende kannst du ein Schmerzberatungsgespraech fuehren und reflektierst, warum manche Menschen nie ueber ihre Schmerzen sprechen.",
      glossarBegriffe: ["Schmerzmanagement"],
    },
    contentB1: {
      title: "Wie sicher bist du bei Schmerz-Pflege?",
      body: "Schmerz ist das groesste Problem bei Rheuma.\nViele Patienten haben Schmerzen — und die Pflege kann helfen.\n\nIn dieser Lektion lernst du:\n- Welche Arten von Schmerz es gibt\n- Welche Medikamente bei welchem Schmerz helfen\n- Was man OHNE Medikamente gegen Schmerz tun kann\n- Wie man Schmerz richtig aufschreibt\n- Wie man mit Patienten ueber Schmerz spricht\n\nDu triffst Thomas Brandt.\nEr ist LKW-Fahrer und hat seit 8 Jahren Rheuma.\nEr hat jeden Tag Ibuprofen genommen — ohne Magenschutz.\nJetzt hat er ein Magengeschwuer (Ulcus).\n\nAm Ende kannst du ein Gespraech ueber Schmerz fuehren.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich bei der Durchfuehrung von Schmerzmanagement bei Rheuma-Patienten?",
    },
  },
  {
    stepId: "schmerz-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q8"],
    contentC1: {
      title: "Schmerzarten — Was weisst du schon?",
      body: "",
    },
    question: {
      fragetext:
        "Welche Aussage ueber Schmerz bei rheumatischen Erkrankungen ist korrekt?",
      optionen: [
        {
          text: "Rheuma-Schmerz ist immer entzuendlich bedingt",
          isCorrect: false,
          explanation:
            "Rheuma-Schmerz hat viele Ursachen. Neben entzuendlichem Schmerz (Synovitis) gibt es mechanischen Schmerz (Gelenkzerstoerung), neuropathischen Schmerz (Nervenkompression) und zentral sensitivierten Schmerz (veraenderte Schmerzverarbeitung im Gehirn). Bei vielen Patienten liegen mehrere Schmerzarten gleichzeitig vor.",
        },
        {
          text: "Chronischer Schmerz bei Rheuma ist ein bio-psycho-soziales Phaenomen mit mehreren Schmerzarten",
          isCorrect: true,
          explanation:
            "Richtig. Rheuma-Patienten erleben haeufig eine Mischung aus entzuendlichem, mechanischem, neuropathischem und zentral sensitiviertem Schmerz. Hinzu kommen psychische (Angst, Depression) und soziale Faktoren (Beruf, Teilhabe). Deshalb braucht Schmerzmanagement einen multimodalen Ansatz.",
        },
        {
          text: "Schmerz bei Rheuma wird mit der Zeit immer weniger, weil sich der Koerper daran gewoehnt",
          isCorrect: false,
          explanation:
            "Das Gegenteil kann passieren: Durch Chronifizierung wird das Nervensystem ueberempfindlich (zentrale Sensitivierung). Das Schmerzgedaechtnis sorgt dafuer, dass Schmerz auch dann empfunden wird, wenn die Entzuendung unter Kontrolle ist. Gewoehnung an Schmerz ist ein Mythos.",
        },
        {
          text: "Nur Aerzte sind fuer Schmerzmanagement zustaendig — Pflege dokumentiert nur",
          isCorrect: false,
          explanation:
            "Pflege hat laut DNQP-Expertenstandard eine zentrale Rolle im Schmerzmanagement: Ersteinschaetzung, systematische Erfassung, Koordination, Edukation und Evaluation. Pflege erkennt Schmerz oft als Erste und initiiert Massnahmen.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-5)
  // ==========================================
  {
    stepId: "schmerz-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q5", "Q6"],
    contentC1: {
      title: "Thomas Brandt — \"Ich nehm halt Ibu, dann geht's\"",
      body: "Thomas Brandt, 55, ist selbststaendiger LKW-Fernfahrer. Seit 8 Jahren hat er Rheumatoide Arthritis — diagnostiziert, mit MTX behandelt, aber die Schmerzen waren nie richtig unter Kontrolle.\n\nSeine Loesung: Ibuprofen 600 mg, dreimal taeglich. Aus der Apotheke. Ohne Rezept. Ohne Magenschutz. Seit 3 Jahren.\n\n\"Ich bin Fernfahrer. Wenn ich nicht fahre, verdiene ich nichts. Also nehm ich morgens zwei Ibu, und dann geht's.\" Ueber Schmerzen redet er nicht — nicht mit seiner Frau, nicht mit seinem Rheumatologen. \"Ist halt so mit dem Alter.\"\n\nJetzt liegt Thomas auf der gastroenterologischen Station. Teerstuhl (Melaena) seit 2 Tagen. Die Gastroskopie zeigt ein Magengeschwuer (Ulcus ventriculi, Forrest III) — verursacht durch chronischen NSAR-Gebrauch ohne Gastroprotektion. Das rheumatologische Konsil empfiehlt: Ibuprofen sofort absetzen. Multimodale Schmerztherapie aufbauen.\n\nThomas reagiert panisch: \"Ohne Ibu kann ich nicht arbeiten. Und starke Schmerzmittel — dann darf ich nicht mehr LKW fahren.\"",
      fallbezug:
        "Leitfall-Einfuehrung. Thomas begleitet uns durch die gesamte Lektion.",
      glossarBegriffe: ["Melaena", "Ulcus ventriculi", "Gastroprotektion"],
    },
    contentB1: {
      title: "Thomas Brandt — \"Ich nehme einfach Ibu\"",
      body: "Thomas Brandt ist 55 Jahre alt.\nEr faehrt LKW — das ist sein Beruf.\nEr arbeitet allein. Wenn er nicht faehrt, verdient er kein Geld.\n\nSeit 8 Jahren hat er Rheuma (Rheumatoide Arthritis).\nSein Arzt hat ihm MTX verschrieben.\nAber die Schmerzen waren nie richtig weg.\n\nWas hat Thomas gemacht?\nEr hat Ibuprofen 600 genommen. 3 Tabletten am Tag.\nAus der Apotheke. Ohne Rezept. Ohne Magenschutz.\nSeit 3 Jahren. Jeden Tag.\n\n\"Morgens zwei Ibu, dann kann ich fahren.\"\nUeber Schmerzen redet er nicht.\nNicht mit seiner Frau. Nicht mit dem Arzt.\n\"Ist halt so mit dem Alter.\"\n\nJetzt liegt Thomas im Krankenhaus.\nEr hatte schwarzen Stuhl (das heisst Melaena = Teerstuhl).\nSchwarzer Stuhl bedeutet: Blutung im Magen.\nDie Untersuchung zeigt: ein Magengeschwuer (Ulcus).\nDas Magengeschwuer kommt von dem vielen Ibuprofen.\n\nDer Arzt sagt: Kein Ibuprofen mehr.\nThomas hat Angst: \"Ohne Ibu kann ich nicht arbeiten.\"",
      fallbezug: "Leitfall-Einfuehrung.",
    },
  },
  {
    stepId: "schmerz-04",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q8"],
    contentC1: {
      title: "Nicht jeder Rheuma-Schmerz ist gleich",
      body: "Bei rheumatischen Erkrankungen kommen vier verschiedene Schmerzarten vor — oft gleichzeitig:\n\n**1. Entzuendlicher Schmerz (nozizeptiv-entzuendlich):**\nUrsache: aktive Synovitis, Gelenkerguss. Typisch: Morgensteifigkeit >30 Min, Besserung durch Bewegung, Schwellung, Uebererwaermung. Spricht gut auf Entzuendungshemmer an.\n\n**2. Mechanischer Schmerz (nozizeptiv-mechanisch):**\nUrsache: Gelenkzerstoerung, Fehlstellung, Arthrose als Folgeschaden. Typisch: Belastungsschmerz, Besserung in Ruhe. Spricht weniger auf Entzuendungshemmer an.\n\n**3. Neuropathischer Schmerz:**\nUrsache: Nervenkompression (z.B. Karpaltunnelsyndrom bei RA), Nervenschaedigung. Typisch: brennend, einschliessend, elektrisierend. Braucht spezielle Medikamente (Pregabalin, Duloxetin).\n\n**4. Zentral sensitivierter Schmerz:**\nUrsache: veraenderte Schmerzverarbeitung im ZNS nach langer Schmerzbelastung. Typisch: generalisierter Schmerz, Hyperalgesie, Allodynie. Wie bei Fibromyalgie. Medikamente allein reichen nicht.\n\nThomas hat wahrscheinlich eine Mischung aus entzuendlichem und mechanischem Schmerz — moeglicherweise mit beginnender zentraler Sensitivierung nach 8 Jahren chronischem Schmerz.",
      fallbezug:
        "Thomas' Schmerzbild ist komplex — ein Grund, warum \"einfach Ibuprofen\" nicht genuegt.",
      glossarBegriffe: [
        "Nozizeptiver Schmerz",
        "Neuropathischer Schmerz",
        "Zentrale Sensitivierung",
        "Allodynie",
      ],
    },
    contentB1: {
      title: "Vier Arten von Schmerz bei Rheuma",
      body: "Nicht jeder Schmerz bei Rheuma ist gleich.\nEs gibt vier Arten:\n\n**1. Schmerz durch Entzuendung:**\nDas Gelenk ist geschwollen, warm und rot.\nAm Morgen sind die Gelenke steif (mehr als 30 Minuten).\nWenn man sich bewegt, wird es besser.\nGegen diesen Schmerz helfen Entzuendungshemmer.\n\n**2. Schmerz durch kaputte Gelenke:**\nDas Gelenk ist kaputt (zum Beispiel nach vielen Jahren Rheuma).\nDer Schmerz kommt bei Belastung (beim Gehen, Tragen, Arbeiten).\nIn Ruhe wird es besser.\nEntzuendungshemmer helfen hier weniger.\n\n**3. Schmerz durch Nerven (neuropathischer Schmerz):**\nEin Nerv ist eingeklemmt oder beschaedigt.\nDer Schmerz fuehlt sich brennend oder elektrisierend an.\nMan braucht spezielle Medikamente.\n\n**4. Schmerz durch das Gehirn (zentrale Sensitivierung):**\nDas Gehirn ist ueberempfindlich fuer Schmerz geworden.\nAuch leichte Beruehrung tut weh.\nDer Schmerz ist ueberall. Tabletten allein helfen nicht.\n\nThomas hat wahrscheinlich Schmerz Typ 1 und Typ 2 zusammen.\nNach 8 Jahren kann auch Typ 4 dazukommen.",
      fallbezug:
        "Thomas' Schmerzbild ist komplex — Ibuprofen allein reicht nicht.",
    },
  },
  {
    stepId: "schmerz-05",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4"],
    contentC1: {
      title: "Welche Schmerzart hat Thomas?",
      body: "",
      fallbezug:
        "Thomas klagt ueber Schmerzen in den Fingergrundgelenken (geschwollen, warm, morgens steif fuer 45 Minuten) und belastungsabhaengige Knieschmerzen (knirschend, keine Schwellung, seit der Gelenkzerstoerung vor 3 Jahren).",
    },
    question: {
      fragetext:
        "Thomas hat Schmerzen in den Fingergrundgelenken UND im rechten Knie. Ordne die Beschreibungen den richtigen Schmerzarten zu: Welche Kombination trifft am ehesten zu?",
      optionen: [
        {
          text: "Fingergelenke = entzuendlich, Knie = mechanisch",
          isCorrect: true,
          explanation:
            "Richtig. Die Fingergrundgelenke zeigen klassische Entzuendungszeichen (Schwellung, Uebererwaermung, Morgensteifigkeit >30 Min) — typisch fuer aktive Synovitis (entzuendlicher Schmerz). Das Knie zeigt Belastungsschmerz ohne Entzuendungszeichen mit Krepitation — typisch fuer sekundaere Arthrose nach Gelenkzerstoerung (mechanischer Schmerz). Diese Mischung ist bei RA nach 8 Jahren typisch.",
        },
        {
          text: "Fingergelenke = neuropathisch, Knie = entzuendlich",
          isCorrect: false,
          explanation:
            "Neuropathischer Schmerz wuerde sich brennend, einschliessend oder elektrisierend aeussern und folgt einem Nervenversorgungsgebiet. Die Symptome an den Fingergelenken (Schwellung, Waerme, Morgensteifigkeit) sind klassisch entzuendlich. Das Knie zeigt Belastungsschmerz ohne Entzuendungszeichen — eher mechanisch.",
        },
        {
          text: "Beide Schmerzen = zentrale Sensitivierung",
          isCorrect: false,
          explanation:
            "Zentrale Sensitivierung aeussert sich als generalisierter, diffuser Schmerz mit Hyperalgesie und Allodynie — nicht als lokalisierter Gelenkschmerz mit spezifischen Entzuendungszeichen. Thomas' Schmerzen lassen sich anatomisch klar zuordnen.",
        },
        {
          text: "Fingergelenke = mechanisch, Knie = entzuendlich",
          isCorrect: false,
          explanation:
            "Genau umgekehrt. Morgensteifigkeit >30 Min + Schwellung + Uebererwaermung sind Kardinalsymptome einer aktiven Entzuendung (Synovitis). Belastungsschmerz + Krepitation + keine Schwellung sprechen fuer mechanisch/degenerativ.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 6-10)
  // ==========================================
  {
    stepId: "schmerz-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q8"],
    contentC1: {
      title: "Wenn Schmerz zum Dauerzustand wird",
      body: "**Akuter Schmerz** ist ein Warnsignal: Er zeigt eine Gewebeschaedigung an (z.B. Entzuendung, Verletzung). Er hat eine klare Ursache, einen Anfang und — wenn die Ursache behandelt wird — ein Ende. Akuter Schmerz ist sinnvoll.\n\n**Chronischer Schmerz** (>3 Monate) hat diese Warnfunktion verloren. Er besteht weiter, obwohl die urspruengliche Ursache moeglicherweise behandelt ist. Warum?\n\n**Chronifizierung und Schmerzgedaechtnis:**\nBei anhaltendem Schmerz veraendern sich die Nervenzellen im Rueckenmark und Gehirn. Sie werden empfindlicher (zentrale Sensitivierung). Das Nervensystem \"lernt\" Schmerz — wie ein Musiker, der ein Stueck so oft geuebt hat, dass er es im Schlaf spielt. Dieses Schmerzgedaechtnis sorgt dafuer, dass Schmerz auch dann empfunden wird, wenn die Entzuendung laengst unter Kontrolle ist.\n\n**Konsequenz fuer die Therapie:**\nChronischer Schmerz laesst sich nicht allein durch Entzuendungshemmer oder Schmerzmittel loesen. Er braucht einen multimodalen Ansatz: Medikamente + Bewegung + Psychologie + Edukation. Das WHO-Stufenschema allein reicht nicht.\n\nThomas hat seit 8 Jahren RA. Sein Schmerz hat sich wahrscheinlich laengst chronifiziert — und Ibuprofen behandelt nur einen Teil des Problems.",
      glossarBegriffe: ["Chronifizierung", "Schmerzgedaechtnis"],
    },
    contentB1: {
      title: "Wenn Schmerz nicht mehr aufhoert",
      body: "Es gibt zwei Arten von Schmerz:\n\n**Akuter Schmerz (neu, kurz):**\n- Etwas tut weh, weil etwas kaputt ist.\n- Der Schmerz warnt den Koerper.\n- Wenn die Ursache behandelt wird, hoert der Schmerz auf.\n- Akuter Schmerz ist wichtig und sinnvoll.\n\n**Chronischer Schmerz (laenger als 3 Monate):**\n- Der Schmerz bleibt, auch wenn die Ursache weg ist.\n- Warum?\n\nWenn man lange Schmerzen hat, veraendern sich die Nerven.\nDie Nerven werden empfindlicher.\nDas Gehirn \"lernt\" den Schmerz.\nMan nennt das Schmerzgedaechtnis.\n\nStell dir vor: Ein Musiker uebt ein Lied 1.000 Mal.\nIrgendwann kann er es im Schlaf spielen.\nSo aehnlich ist es mit Schmerz.\nDas Gehirn \"spielt\" den Schmerz automatisch.\n\nTabletten allein reichen bei chronischem Schmerz nicht.\nMan braucht: Medikamente + Bewegung + Entspannung + Wissen ueber Schmerz.\nDas nennt man: multimodale Schmerztherapie.\n\nThomas hat seit 8 Jahren Rheuma.\nSein Schmerz hat sich wahrscheinlich chronifiziert.\nIbuprofen behandelt nur einen kleinen Teil des Problems.",
    },
  },
  {
    stepId: "schmerz-07",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q7", "Q2"],
    contentC1: {
      title: "Das WHO-Stufenschema",
      body: "",
      fallbezug:
        "Thomas nimmt seit 3 Jahren Ibuprofen 600 3x/Tag (Stufe 1). Sein Schmerz ist trotzdem NRS 5-7/10. Jetzt muss Ibuprofen wegen des Magengeschwuers abgesetzt werden.",
      glossarBegriffe: ["WHO-Stufenschema"],
    },
    question: {
      fragetext:
        "Thomas' Ibuprofen muss abgesetzt werden. Sein Schmerz liegt bei NRS 6/10. Nach dem WHO-Stufenschema: Was ist der naechste logische Schritt?",
      optionen: [
        {
          text: "Stufe 2: Schwaches Opioid (z.B. Tramadol) + Nicht-Opioid-Analgetikum (z.B. Metamizol oder Paracetamol)",
          isCorrect: true,
          explanation:
            "Richtig. Da NSAR kontraindiziert sind (Ulcus!), kommt als Nicht-Opioid Metamizol oder Paracetamol in Frage. Bei NRS 6/10 und Versagen der Stufe 1 ist der Schritt zu Stufe 2 leitliniengerecht. WICHTIG: Bei Thomas muss auch das Berufsdilemma besprochen werden — Tramadol kann die Fahrtuchtigkeit beeintraechtigen.",
        },
        {
          text: "Stufe 3: Direkt zu starken Opioiden (z.B. Morphin retard), weil der Schmerz stark ist",
          isCorrect: false,
          explanation:
            "Ein Sprung von Stufe 1 direkt auf Stufe 3 ist nur bei sehr starkem Schmerz (NRS 8-10) oder Tumorschmerz gerechtfertigt. Bei NRS 6/10 ist Stufe 2 der naechste Schritt. Zudem wuerden starke Opioide Thomas' LKW-Fuehrerschein gefaehrden.",
        },
        {
          text: "Einfach ein anderes NSAR (z.B. Diclofenac) statt Ibuprofen",
          isCorrect: false,
          explanation:
            "ALLE NSAR sind nach einer GI-Blutung kontraindiziert — nicht nur Ibuprofen. Das GI-Risiko ist ein Gruppeneffekt. Ein NSAR-Wechsel wuerde das Risiko einer erneuten Blutung nicht senken.",
        },
        {
          text: "Nur nicht-medikamentoese Massnahmen, keine Analgetika mehr",
          isCorrect: false,
          explanation:
            "Bei NRS 6/10 sind nicht-medikamentoese Massnahmen allein nicht ausreichend. Schmerzpatienten haben ein Recht auf angemessene Analgesie. Nicht-medikamentoese Verfahren ergaenzen die medikamentoese Therapie — sie ersetzen sie nicht.",
        },
      ],
    },
  },
  {
    stepId: "schmerz-08",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q8", "Q4"],
    contentC1: {
      title: "Mehr als Tabletten — das multimodale Konzept",
      body: "Multimodale Schmerztherapie bedeutet: Mehrere Behandlungsansaetze werden gleichzeitig eingesetzt, koordiniert durch ein interdisziplinaeres Team. Das Konzept basiert auf dem bio-psycho-sozialen Modell — Schmerz hat koerperliche, psychische und soziale Dimensionen.\n\n**Die vier Saeulen:**\n\n**1. Medikamentoese Therapie** (nach WHO-Stufenschema + Adjuvantien)\nNicht-Opioide, Opioide, Co-Analgetika (Antidepressiva, Antikonvulsiva). Bei Rheuma zusaetzlich: DMARDs zur Krankheitskontrolle.\n\n**2. Physiotherapie und Bewegung**\nAktive Bewegungstherapie, Funktionstraining, Aquatherapie. Evidenz: Regelmaessige Bewegung reduziert Schmerz UND verbessert Funktion.\n\n**3. Psychologische Interventionen**\nSchmerz-Coping, kognitive Verhaltenstherapie, Entspannungsverfahren (PMR, Achtsamkeit). Umgang mit Angst, Depression, Katastrophisieren.\n\n**4. Edukation und Selbstmanagement**\nWissen ueber Schmerz reduziert Angst. Patienten lernen, aktiv mit Schmerz umzugehen: Pacing, Aktivitaetsmanagement, Trigger erkennen.\n\n**Evidenz:** Multimodale Programme sind unimodaler Therapie ueberlegen — besonders bei chronischem Schmerz (S3-Leitlinie GeriPAIN 2025, EULAR 2025).\n\nFuer Thomas bedeutet das: Nicht nur Ibuprofen durch ein anderes Medikament ersetzen, sondern ein ganzes Konzept aufbauen.",
      glossarBegriffe: [
        "Multimodale Schmerztherapie",
        "Coping-Strategien",
      ],
    },
    contentB1: {
      title: "Mehr als Tabletten — verschiedene Methoden zusammen",
      body: "Bei chronischem Schmerz braucht man verschiedene Methoden gleichzeitig.\nDas nennt man multimodale Schmerztherapie.\nMultimodal = viele Methoden zusammen.\n\n**Es gibt 4 Bereiche:**\n\n**1. Medikamente:**\nSchmerzmittel nach dem WHO-Schema.\nBei Rheuma auch: DMARDs (Basistherapie gegen die Krankheit).\n\n**2. Bewegung und Physiotherapie:**\nRegelmaessige Bewegung hilft gegen Schmerz.\nZum Beispiel: Schwimmen, Walken, Gymnastik.\nDer Physiotherapeut zeigt die richtigen Uebungen.\n\n**3. Psychologische Hilfe:**\nEntspannungsuebungen (zum Beispiel PMR).\nLernen, mit Schmerz umzugehen.\nHilfe bei Angst oder Traurigkeit durch den Schmerz.\n\n**4. Wissen und Selbstmanagement:**\nWissen ueber Schmerz hilft gegen Angst.\nPatienten lernen: Was kann ich SELBST tun?\nZum Beispiel: Pausen planen, Trigger erkennen.\n\nTabletten allein reichen nicht.\n\nFuer Thomas bedeutet das:\nNicht nur ein anderes Schmerzmittel statt Ibuprofen.\nSondern ein ganzes Programm mit Bewegung, Entspannung und Beratung.",
    },
  },
  {
    stepId: "schmerz-09",
    phase: 3,
    stepType: "matching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q8", "Q10"],
    contentC1: {
      title: "Welches Verfahren wofuer?",
      body: "Nicht-medikamentoese Schmerzbehandlung umfasst verschiedene Verfahren. Jedes hat eine spezifische Wirkung und Indikation.",
      glossarBegriffe: ["TENS", "Progressive Muskelrelaxation"],
    },
    question: {
      fragetext:
        "Ordne jedes nicht-medikamentoese Verfahren seiner Hauptwirkung zu:",
      matchingPairs: [
        {
          left: "TENS (Transkutane Elektrische Nervenstimulation)",
          right:
            "Schmerzlinderung durch elektrische Impulse, die Schmerzweiterleitung hemmen (Gate-Control-Theorie)",
        },
        {
          left: "Kaelteanwendung (Kryotherapie)",
          right:
            "Entzuendungshemmung und Schmerzlinderung bei akuter Gelenkentzuendung und Schwellung",
        },
        {
          left: "Waermeanwendung (Thermotherapie)",
          right:
            "Muskelentspannung und Durchblutungsfoerderung bei chronischem, nicht-entzuendlichem Schmerz",
        },
        {
          left: "Progressive Muskelrelaxation (PMR)",
          right:
            "Reduktion von Muskelverspannung und Stressabbau durch systematische An- und Entspannung",
        },
        {
          left: "Ergotherapie (Gelenkschutz)",
          right:
            "Erlernen gelenkschonender Bewegungsmuster und Einsatz von Hilfsmitteln im Alltag",
        },
        {
          left: "Aquatherapie",
          right:
            "Schmerzarme Bewegung durch Auftrieb, gleichzeitig Kraeftigung und Beweglichkeit",
        },
      ],
    },
  },
  {
    stepId: "schmerz-10",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q3", "Q10"],
    contentC1: {
      title: "Schmerz systematisch dokumentieren",
      body: "Der DNQP-Expertenstandard fordert eine systematische Schmerzdokumentation. Bei Thomas wird bei Aufnahme eine Schmerzersteinschaetzung durchgefuehrt.",
      glossarBegriffe: ["Schmerzdokumentation", "Expertenstandard"],
    },
    question: {
      fragetext:
        "Bringe die Schritte der pflegerischen Schmerzersteinschaetzung nach DNQP in die richtige Reihenfolge:",
      sortItems: [
        "Schmerzanamnese erheben (Beginn, Dauer, bisherige Therapie, Vorgeschichte)",
        "Aktuelle Schmerzintensitaet erfassen (NRS 0-10)",
        "Schmerzlokalisation und -qualitaet dokumentieren (wo, wie — stechend, brennend, dumpf)",
        "Schmerzausloesende und -lindernde Faktoren identifizieren (Belastung, Ruhe, Waerme, Kaelte)",
        "Individuelle Therapieziele mit dem Patienten vereinbaren (akzeptables Schmerzniveau, Funktionsziele)",
        "Massnahmenplan erstellen (medikamentoes + nicht-medikamentoes) und Evaluationszeitpunkt festlegen",
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 11-13)
  // ==========================================
  {
    stepId: "schmerz-11",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q5", "Q6"],
    contentC1: {
      title: "\"Geben Sie mir einfach wieder mein Ibu\"",
      body: "",
      fallbezug:
        "Tag 3 auf Station. Die Blutung ist gestillt, Thomas fuehlt sich besser. Er hat Metamizol und niedrig dosiertes Tramadol bekommen, aber klagt: \"Das wirkt nicht so gut wie Ibuprofen. Geben Sie mir einfach wieder mein Ibu, mit dem Magenschutz dazu — dann passiert nichts mehr.\" Er wirkt ungeduldig und moechte schnell entlassen werden — sein LKW steht auf dem Hof.",
    },
    question: {
      fragetext:
        "Thomas fordert Ibuprofen zurueck — mit PPI als Magenschutz diesmal. Wie reagierst du als Pflegefachperson?",
      branchingOptions: [
        {
          text: "\"Sie haben Recht, mit PPI-Schutz ist das Risiko geringer. Ich spreche den Arzt an, ob er Ibuprofen mit Pantoprazol verordnet.\"",
          feedback:
            "Problematisch. PPI reduzieren zwar das GI-Risiko, aber nach einer nachgewiesenen NSAR-induzierten Blutung ist die Wiederaufnahme von NSAR eine Hochrisiko-Entscheidung. Die S3-Leitlinie empfiehlt: nach GI-Blutung keine NSAR wenn vermeidbar. Die Ursache der Blutung war NSAR — dieselbe Substanz wieder einzusetzen waere nicht leitliniengerecht.",
          isCorrect: false,
        },
        {
          text: "\"Ich verstehe, dass Ibuprofen bisher fuer Sie funktioniert hat. Aber nach der Blutung muessen wir einen anderen Weg finden. Lassen Sie uns gemeinsam mit dem Arzt besprechen, welche Alternativen es gibt — auch solche, die Ihren Fuehrerschein nicht gefaehrden.\"",
          feedback:
            "Sehr gut. Du nimmst Thomas' Sorge ernst (Wirksamkeit, Fuehrerschein), erklaerst die medizinische Realitaet (NSAR nach Blutung kontraindiziert) und bietest eine Perspektive (Alternativen gemeinsam finden). Das entspricht dem Sandwich-Prinzip und der Schmerzedukation nach DNQP: Patient als Partner, nicht als Befehlsempfaenger.",
          isCorrect: true,
        },
        {
          text: "\"Nein, Ibuprofen ist jetzt verboten. Der Arzt hat das entschieden, daran koennen wir nichts aendern.\"",
          feedback:
            "Inhaltlich nicht falsch, aber kommunikativ schlecht. \"Verboten\" klingt paternalistisch und entmuendigt Thomas. Er versteht nicht WARUM — und wird moeglicherweise nach Entlassung selbst Ibuprofen kaufen. Schmerzedukation bedeutet: erklaeren, nicht verbieten.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "schmerz-12",
    phase: 4,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q3", "Q8", "Q10"],
    contentC1: {
      title: "Thomas aufklaeren",
      body: "",
      fallbezug:
        "Thomas hat akzeptiert, dass Ibuprofen nicht mehr geht. Jetzt moechte er verstehen, warum sein Schmerz trotz Medikamenten nicht weggeht — und was er selbst tun kann.",
      glossarBegriffe: ["Schmerzedukation"],
    },
    question: {
      fragetext:
        "Welche Information ist fuer Thomas im Rahmen der Schmerzedukation am WICHTIGSTEN?",
      optionen: [
        {
          text: "\"Ihr Schmerz nach 8 Jahren RA hat sich wahrscheinlich chronifiziert. Das bedeutet nicht, dass er eingebildet ist — aber es bedeutet, dass Tabletten allein nicht reichen. Bewegung, Entspannung und Wissen ueber Schmerz helfen nachweislich.\"",
          isCorrect: true,
          explanation:
            "Richtig. Das zentrale Element der Schmerzedukation ist: Chronischer Schmerz ist REAL, aber er hat sich verselbststaendigt. Wissen ueber Schmerzchronifizierung reduziert nachweislich Angst und Katastrophisieren. Der Patient erfaehrt, dass er SELBST etwas tun kann — das staerkt Selbstwirksamkeit.",
        },
        {
          text: "\"Sie muessen Ihre Schmerzen einfach mehr akzeptieren. Bei Rheuma gehoert Schmerz leider dazu.\"",
          isCorrect: false,
          explanation:
            "Diese Aussage ist resignierend und therapeutisch kontraproduktiv. Akzeptanz im schmerztherapeutischen Sinn bedeutet nicht \"aufgeben\", sondern \"einen konstruktiven Umgang finden\". So formuliert klingt es nach: \"Finden Sie sich damit ab.\"",
        },
        {
          text: "\"Ihr Schmerzproblem ist rein psychisch. Sie brauchen einen Psychologen, keine Schmerzmittel.\"",
          isCorrect: false,
          explanation:
            "Chronischer Schmerz ist ein bio-psycho-soziales Phaenomen — nicht \"rein psychisch\". Die psychologische Komponente ist real und wichtig, aber die koerperliche Komponente existiert ebenso. \"Rein psychisch\" ist stigmatisierend und fachlich falsch.",
        },
        {
          text: "\"Lesen Sie sich diese Broschuere durch, da steht alles drin.\"",
          isCorrect: false,
          explanation:
            "Eine Broschuere kann ergaenzen, aber ersetzt kein Gespraech. Schmerzedukation nach DNQP ist ein interaktiver Prozess: Informieren, Fragen beantworten, individuelle Sorgen aufgreifen.",
        },
      ],
    },
  },
  {
    stepId: "schmerz-13",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q3", "Q5", "Q10"],
    contentC1: {
      title: "Schreibe ein Schmerzberatungsgespraech",
      body: "",
      fallbezug:
        "Thomas wird morgen entlassen. Er hat jetzt Metamizol + niedrig dosiertes Tramadol, einen Termin beim Schmerztherapeuten in 2 Wochen und eine Verordnung fuer Physiotherapie. Er soll auch PMR lernen. Du fuehrst das Entlassungsgespraech zum Thema Schmerz.",
    },
    contentB1: {
      title: "Schreibe ein Gespraech ueber Schmerz",
      body: "",
      fallbezug:
        "Thomas geht morgen nach Hause. Du sprichst mit ihm ueber seine Schmerz-Behandlung.",
    },
    question: {
      fragetext:
        "Schreibe die wichtigsten Punkte auf, die du Thomas im Entlassungsgespraech zum Schmerzmanagement sagst. Beruecksichtige: (1) Warum NSAR jetzt nicht mehr moeglich sind, (2) was er SELBST tun kann, (3) wann er sich melden soll.",
      musterantwort:
        "Herr Brandt, bevor Sie morgen nach Hause gehen, moechte ich noch einmal ueber Ihr Schmerzmanagement sprechen. Das Ibuprofen hat bei Ihnen zu einer Magenblutung gefuehrt — deshalb duerfen Sie vorerst keine entzuendungshemmenden Schmerzmittel mehr nehmen. Ihr neues Medikament (Metamizol) und das niedrig dosierte Tramadol helfen anders gegen den Schmerz. Bitte nehmen Sie es regelmaessig ein, nicht erst wenn der Schmerz stark ist.\n\nWas Sie selbst tun koennen: Bewegen Sie sich taeglich, am besten 30 Minuten spazieren — das hilft nachweislich gegen Rheuma-Schmerz. Die Physiotherapie ab naechster Woche zeigt Ihnen Uebungen. Die Entspannungsuebung (Progressive Muskelrelaxation), die die Psychologin Ihnen gezeigt hat — probieren Sie die abends vor dem Schlafen. Und bei akutem Gelenkschmerz: Kuehlen bei geschwollenen, warmen Gelenken, Waerme bei steifen, verspannten Muskeln.\n\nMelden Sie sich sofort, wenn: der Stuhl wieder schwarz wird, die Schmerzen ueber NRS 8 steigen, oder Sie Nebenwirkungen des Tramadol bemerken (Schwindel, Uebelkeit). Und denken Sie daran: Kein Ibuprofen aus der Apotheke — auch wenn es frueher geholfen hat.",
      bewertungskriterien: [
        "NSAR-Verbot begruendet (nicht nur 'verboten', sondern erklaert warum)",
        "Mindestens 2 nicht-medikamentoese Massnahmen genannt (Bewegung, Entspannung, Waerme/Kaelte)",
        "Selbstmanagement-Aspekt enthalten (Patient kann selbst etwas tun)",
        "Warnzeichen fuer Wiedervorstellung benannt",
        "Wertschaetzende Kommunikation (kein Paternalismus)",
      ],
      satzanfaengeB1: [
        "Herr Brandt, bevor Sie nach Hause gehen, moechte ich mit Ihnen ueber...",
        "Sie duerfen kein Ibuprofen mehr nehmen, weil...",
        "Was Sie selbst gegen die Schmerzen tun koennen: ...",
        "Bitte kommen Sie sofort wieder, wenn...",
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 14)
  // ==========================================
  {
    stepId: "schmerz-14",
    phase: 5,
    stepType: "mc",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q9", "Q3"],
    contentC1: {
      title: "\"Ein Mann haelt das aus\"",
      body: "Thomas hat 3 Jahre lang taeglich starke Schmerzmittel genommen — aber nie mit jemandem ueber seinen Schmerz gesprochen. Nicht mit seiner Frau. Nicht mit seinem Rheumatologen. \"Schmerz gehoert dazu. Ich bin doch kein Weichei.\"\n\nForschung zeigt: Maenner suchen bei chronischem Schmerz spaeter Hilfe, berichten niedrigere Schmerzintensitaeten als sie tatsaechlich empfinden und nutzen seltener psychologische Angebote. Die Gruende liegen nicht in der Biologie, sondern in der Sozialisation — in dem, was Maennern beigebracht wird, was \"maennlich\" ist.",
      fallbezug:
        "Thomas' NSAR-Overuse war kein medizinisches Problem allein. Es war auch ein Ergebnis seiner Ueberzeugung, dass Schmerz etwas ist, das man auszuhalten hat — und nicht etwas, worueber man spricht.",
    },
    question: {
      fragetext:
        "Welche Konsequenz hat die Reflexion ueber geschlechtsspezifische Schmerzsozialisation fuer dein pflegerisches Handeln?",
      optionen: [
        {
          text: "Bei maennlichen Patienten muss ich systematisch nach Schmerz fragen — ich kann mich nicht darauf verlassen, dass sie von sich aus berichten",
          isCorrect: true,
          explanation:
            "Richtig. Wenn Maenner Schmerz seltener und spaeter aeussern, muss Pflege AKTIV fragen — und zwar systematisch (Assessment-Instrumente nutzen, nicht nur \"Haben Sie Schmerzen?\"). Der DNQP-Expertenstandard fordert systematische Schmerzerfassung bei ALLEN Patienten, unabhaengig davon, ob sie sich aeussern.",
        },
        {
          text: "Maenner empfinden objektiv weniger Schmerz als Frauen — ich muss bei ihnen weniger Analgesie einplanen",
          isCorrect: false,
          explanation:
            "Das ist ein Mythos. Biologische Geschlechtsunterschiede in der Schmerzwahrnehmung sind gering und inkonsistent. Was sich unterscheidet, ist das Schmerzverhalten. Weniger Schmerzaeusserung bedeutet NICHT weniger Schmerz.",
        },
        {
          text: "Geschlecht spielt in der modernen Pflege keine Rolle mehr — ich behandle alle gleich",
          isCorrect: false,
          explanation:
            "\"Alle gleich behandeln\" klingt fair, ignoriert aber reale Unterschiede im Schmerzverhalten. Gendersensible Pflege bedeutet: Unterschiede kennen, Barrieren abbauen, Assessment anpassen.",
        },
        {
          text: "Bei maennlichen Patienten sollte ich auf Schmerzmittel verzichten und stattdessen Bewegung empfehlen",
          isCorrect: false,
          explanation:
            "Das waere eine andere Form der Stereotypisierung. Schmerz braucht eine angemessene, individuelle Therapie — unabhaengig vom Geschlecht. Bewegung ist EIN Element, ersetzt aber keine Analgesie bei NRS 6/10.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 15)
  // ==========================================
  {
    stepId: "schmerz-15",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q3", "Q10"],
    contentC1: {
      title: "Schmerzmanagement in deinem Praxiseinsatz",
      body: "Du hast in dieser Lektion gelernt: Schmerzarten unterscheiden, das WHO-Stufenschema anwenden, nicht-medikamentoese Verfahren zuordnen, Schmerz systematisch dokumentieren und ein Beratungsgespraech fuehren.\n\n**Dein Praxisauftrag fuer den naechsten Praxiseinsatz:**\n\n1. **Beobachte:** Wie wird Schmerz auf deiner Station erfasst? Gibt es ein standardisiertes Assessment (NRS, VAS)? Wird es bei Aufnahme UND im Verlauf durchgefuehrt? Oder nur \"bei Bedarf\"?\n\n2. **Frage nach:** Welche nicht-medikamentoesen Massnahmen werden auf deiner Station eingesetzt? TENS? Waerme/Kaelte? Lagerung? Entspannung? Oder nur Medikamente?\n\n3. **Reflektiere:** Hast du bei einem Patienten erlebt, dass Schmerzaeusserung vom Geschlecht, Alter oder kulturellen Hintergrund beeinflusst wurde? Was hat das fuer dein Assessment bedeutet?\n\n**Thomas Brandt wurde nach 5 Tagen entlassen.** Er hat einen Termin beim Schmerztherapeuten, eine Physiotherapie-Verordnung, ein PMR-Uebungsprogramm und — zum ersten Mal — ein Gespraech ueber seinen Schmerz gefuehrt. \"Ich wusste gar nicht, dass es so viele Moeglichkeiten gibt. Ich dachte immer, Ibu oder Zaehne zusammenbeissen.\"\n\nDer DNQP-Expertenstandard Schmerzmanagement ist dein Kompass in der Praxis. Er beschreibt, was du als Pflegefachperson bei JEDEM Patienten tun sollst — systematisch, nicht zufaellig.",
    },
    contentB1: {
      title: "Dein Auftrag fuer die Praxis",
      body: "Du hast gelernt:\n- Welche Arten von Schmerz es bei Rheuma gibt\n- Wie das WHO-Stufenschema funktioniert\n- Welche Methoden ohne Medikamente gegen Schmerz helfen\n- Wie man Schmerz richtig aufschreibt\n- Wie man ein Gespraech ueber Schmerz fuehrt\n\n**Dein Auftrag fuer den naechsten Praxiseinsatz:**\n\n1. **Beobachte:** Wie wird Schmerz auf deiner Station gemessen?\nGibt es ein System (zum Beispiel NRS 0-10)?\nWird es bei jedem Patienten gemacht?\nOder nur wenn jemand sagt \"Ich habe Schmerzen\"?\n\n2. **Frage nach:** Was wird auf deiner Station gegen Schmerz gemacht?\nNur Medikamente? Oder auch andere Methoden?\n\n3. **Denke nach:** Hast du erlebt, dass ein Patient seine Schmerzen nicht gesagt hat?\nWarum? War es ein Mann? Eine aeltere Person?\n\n**Thomas Brandt wurde nach 5 Tagen entlassen.**\nEr hat einen Termin beim Schmerz-Arzt.\nEr bekommt Physiotherapie.\nEr hat Entspannungsuebungen gelernt.\nUnd er hat zum ersten Mal ueber seinen Schmerz geredet.\n\n\"Ich wusste gar nicht, dass es so viele Moeglichkeiten gibt.\nIch dachte immer: Ibu oder Zaehne zusammenbeissen.\"",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Schmerzmanagement",
    erklaerung:
      "Systematisches Erfassen, Behandeln und Evaluieren von Schmerz durch pflegerische, medikamentoese und nicht-medikamentoese Massnahmen",
  },
  {
    begriff: "Nozizeptiver Schmerz",
    erklaerung:
      "Schmerz durch Gewebeschaedigung — die Schmerzrezeptoren (Nozizeptoren) werden direkt aktiviert. Unterteilt in entzuendlich und mechanisch",
  },
  {
    begriff: "Neuropathischer Schmerz",
    erklaerung:
      "Schmerz durch Schaedigung oder Erkrankung des Nervensystems — typisch brennend, einschliessend, elektrisierend",
  },
  {
    begriff: "Zentrale Sensitivierung",
    erklaerung:
      "Das Gehirn und Rueckenmark werden ueberempfindlich fuer Schmerzsignale — auch normale Reize werden als Schmerz wahrgenommen",
  },
  {
    begriff: "Allodynie",
    erklaerung:
      "Schmerzempfindung bei einem Reiz, der normalerweise keinen Schmerz ausloest (z.B. leichte Beruehrung)",
  },
  {
    begriff: "Chronifizierung",
    erklaerung:
      "Der Uebergang von akutem zu chronischem Schmerz — das Nervensystem veraendert sich dauerhaft und Schmerz verselbststaendigt sich",
  },
  {
    begriff: "Schmerzgedaechtnis",
    erklaerung:
      "Langzeitveraenderung im Nervensystem, durch die Schmerz auch ohne aktuelle Gewebeschaedigung wahrgenommen wird",
  },
  {
    begriff: "WHO-Stufenschema",
    erklaerung:
      "Dreistufiges Modell der Schmerztherapie: Stufe 1 (Nicht-Opioide), Stufe 2 (schwache Opioide + Nicht-Opioide), Stufe 3 (starke Opioide + Nicht-Opioide)",
  },
  {
    begriff: "Multimodale Schmerztherapie",
    erklaerung:
      "Gleichzeitiger Einsatz mehrerer Behandlungsansaetze (Medikamente, Physiotherapie, Psychologie, Edukation) durch ein interdisziplinaeres Team",
  },
  {
    begriff: "TENS",
    erklaerung:
      "Transkutane Elektrische Nervenstimulation — Verfahren, bei dem schwache elektrische Impulse ueber Hautelektroden Schmerzsignale hemmen",
  },
  {
    begriff: "Schmerzdokumentation",
    erklaerung:
      "Systematische Erfassung von Schmerzintensitaet, -lokalisation, -qualitaet, Massnahmen und Wirkung",
  },
  {
    begriff: "Schmerzedukation",
    erklaerung:
      "Patientenaufklaerung ueber Schmerzmechanismen, Therapieoptionen und Selbstmanagement — zentrales Element des DNQP-Expertenstandards",
  },
  {
    begriff: "Coping-Strategien",
    erklaerung:
      "Bewaeltigungsstrategien im Umgang mit Schmerz — aktive (Problemloesen, Bewegung) sind wirksamer als passive (Vermeidung, Rueckzug)",
  },
  {
    begriff: "Melaena",
    erklaerung:
      "Teerstuhl — schwarzer, teerartiger Stuhl als Zeichen einer Blutung im oberen Magen-Darm-Trakt",
  },
];
