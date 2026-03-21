// Lektion 5: Spondyloarthritiden und weitere entzuendliche Arthritiden
// CE 05 — Block B: Krankheitsbilder
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-05-spa",
  ceId: "ce-05",
  title: "Spondyloarthritiden und weitere entzuendliche Arthritiden",
  titleShort: "SpA & Arthritiden",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 18, b1: 28 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [1, 5],
  voraussetzungen: ["le-04-ra"],
  leitfall: {
    name: "Tobias Fischer",
    alter: 24,
    beruf: "Dachdecker",
    diagnose: "Axiale Spondyloarthritis (Morbus Bechterew)",
    setting: "Orthopaedie-Praxis, Ueberweisung Rheumatologe",
    kernproblem:
      "2 Jahre Fehldiagnose Bandscheibe, naechtliche Rueckenschmerzen, Uveitis uebersehen",
  },
  glossarCount: 10,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "spa-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Nicht jeder Rueckenschmerz ist gleich",
      body: "Rueckenschmerzen sind der haeufigste Grund fuer Arztbesuche in Deutschland. Die meisten denken an Bandscheibe, Muskeln oder Verschleiss. Aber es gibt eine Ursache, die oft uebersehen wird: Entzuendung.\n\nIn dieser Lektion lernst du die Spondyloarthritiden (SpA) kennen — eine Gruppe entzuendlich-rheumatischer Erkrankungen, die vor allem die Wirbelsaeule und grosse Gelenke betrifft. Die wichtigste Vertreterin: Morbus Bechterew.\n\nDu erfaehrst:\n- Welche SpA-Formen es gibt\n- Wie man entzuendlichen von mechanischem Rueckenschmerz unterscheidet\n- Was HLA-B27, Enthesitis und Uveitis bedeuten\n- Warum die Diagnose oft Jahre dauert",
      glossarBegriffe: ["Spondyloarthritis"],
    },
    contentB1: {
      title: "Nicht alle Rueckenschmerzen sind gleich",
      body: "Rueckenschmerzen sind sehr haeufig.\nViele denken: Das kommt von der Bandscheibe.\nOder: Das sind die Muskeln.\nAber es gibt noch eine andere Ursache: Entzuendung.\n\nIn dieser Lektion lernst du die Spondyloarthritiden (SpA) kennen.\nDas ist eine Gruppe von Krankheiten.\nSie machen Entzuendungen an der Wirbelsaeule und den Gelenken.\nDie bekannteste heisst Morbus Bechterew.\n\nDu lernst:\n- Welche SpA-Formen es gibt\n- Wie du entzuendliche Rueckenschmerzen erkennst\n- Was HLA-B27 und Uveitis (Augenentzuendung) bedeuten\n- Warum Aerzte oft lange brauchen fuer die Diagnose",
      glossarBegriffe: ["Spondyloarthritis"],
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich, entzuendliche und mechanische Rueckenschmerzen zu unterscheiden?",
    },
  },
  {
    stepId: "spa-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Was steckt hinter diesen Symptomen?",
      body: "",
    },
    question: {
      fragetext:
        "Ein 24-Jaehriger hat seit 2 Jahren naechtliche Rueckenschmerzen, die sich bei Bewegung bessern. Morgensteifigkeit ueber 45 Minuten. Welche Ursache ist am wahrscheinlichsten?",
      optionen: [
        {
          text: "Bandscheibenvorfall",
          isCorrect: false,
          explanation:
            "Bandscheibenvorfaelle verursachen typischerweise Schmerzen bei Belastung, die sich in Ruhe bessern. Naechtliche Schmerzen mit Morgensteifigkeit >30 Minuten sprechen gegen einen mechanischen Ursprung.",
        },
        {
          text: "Muskelverspannung durch koerperliche Arbeit",
          isCorrect: false,
          explanation:
            "Muskelverspannungen verursachen keine Morgensteifigkeit ueber 45 Minuten. Sie bessern sich nicht durch Bewegung, sondern durch Ruhe und Waerme.",
        },
        {
          text: "Entzuendlicher Rueckenschmerz (Spondyloarthritis)",
          isCorrect: true,
          explanation:
            "Richtig! Die Kombination aus naechtlichem Schmerz, Morgensteifigkeit >30 Min, Besserung bei Bewegung und Beginn vor dem 40. Lebensjahr sind klassische Zeichen fuer entzuendlichen Rueckenschmerz — ein Leitsymptom der axialen Spondyloarthritis.",
        },
        {
          text: "Osteoporose mit Wirbelkoerperfraktur",
          isCorrect: false,
          explanation:
            "Osteoporose ist bei einem 24-Jaehrigen ohne Risikofaktoren extrem selten. Wirbelkoerperfrakturen verursachen ploetzliche, lokalisierte Schmerzen — nicht schleichende naechtliche Schmerzen mit Morgensteifigkeit.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "spa-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: 'Tobias Fischer — "Keiner glaubt mir"',
      body: 'Tobias Fischer, 24 Jahre, arbeitet als Dachdecker. Seit zwei Jahren hat er zunehmende Rueckenschmerzen im unteren Ruecken. Das Besondere: Die Schmerzen sind nachts am schlimmsten. Oft wacht er um 3 Uhr morgens auf und kann nicht mehr einschlafen. Morgens ist sein Ruecken steif — erst nach einer heissen Dusche und Bewegung wird es besser.\n\nSein Hausarzt hat gesagt: "Das kommt vom Dachdecken. Sie sind noch jung, das ist die Bandscheibe." Physiotherapie und Schmerzmittel haben kaum geholfen.\n\nVor sechs Monaten hatte Tobias eine akute Augenentzuendung — schmerzhaftes rotes Auge, lichtempfindlich. Der Augenarzt behandelte die Uveitis mit Augentropfen. Keiner fragte nach dem Ruecken.\n\nJetzt sitzt Tobias beim Orthopaeden: "Ich bin 24 und fuehle mich wie 70. Morgens kann ich mich kaum buecken. Beim Fussball geht gar nichts mehr. Keiner nimmt mich ernst."\n\nTobias\' Vater hat Psoriasis (Schuppenflechte).',
      fallbezug:
        "Tobias begleitet dich durch diese Lektion. Seine Geschichte zeigt, warum Spondyloarthritiden oft jahrelang uebersehen werden.",
      glossarBegriffe: ["Uveitis", "Psoriasis"],
    },
    contentB1: {
      title: 'Tobias Fischer — "Keiner glaubt mir"',
      body: "Tobias Fischer ist 24 Jahre alt.\nEr arbeitet als Dachdecker.\nSeit 2 Jahren hat er Rueckenschmerzen.\n\nDie Schmerzen sind nachts am schlimmsten.\nOft wacht er um 3 Uhr morgens auf.\nEr kann dann nicht mehr schlafen.\nAm Morgen ist sein Ruecken steif.\nErst nach einer heissen Dusche wird es besser.\nWenn er sich bewegt, wird es auch besser.\n\nSein Arzt hat gesagt: \"Das ist die Bandscheibe.\"\nAber die Behandlung hat nicht geholfen.\n\nVor 6 Monaten hatte Tobias eine Augenentzuendung.\nSein Auge war rot und tat sehr weh.\nDer Augenarzt hat es behandelt.\nAber keiner hat gefragt: \"Haben Sie auch Rueckenschmerzen?\"\n\nTobias sagt: \"Ich bin 24 und fuehle mich wie 70.\"\n\"Keiner nimmt mich ernst.\"\n\nSein Vater hat Psoriasis (Schuppenflechte).",
      fallbezug:
        "Tobias begleitet dich durch diese Lektion. Seine Geschichte zeigt, warum die Diagnose oft Jahre dauert.",
      glossarBegriffe: ["Uveitis", "Psoriasis"],
    },
  },
  {
    stepId: "spa-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Welches Symptom passt nicht?",
      body: "",
      fallbezug: "Denke an Tobias' Symptome zurueck.",
    },
    question: {
      fragetext:
        "Welches von Tobias' Symptomen passt am WENIGSTEN zu einem Bandscheibenvorfall?",
      optionen: [
        {
          text: "Schmerzen im unteren Ruecken",
          isCorrect: false,
          explanation:
            "Schmerzen im unteren Ruecken sind sowohl bei Bandscheibenvorfaellen als auch bei Spondyloarthritiden haeufig — das allein hilft nicht bei der Unterscheidung.",
        },
        {
          text: "Naechtliche Schmerzen, die ihn um 3 Uhr aufwecken",
          isCorrect: true,
          explanation:
            "Richtig! Naechtlicher Schmerz (besonders in der 2. Nachthaelfte) ist ein Leitsymptom des entzuendlichen Rueckenschmerzes. Bei Bandscheibenvorfaellen sind die Schmerzen typischerweise bei Belastung am staerksten und bessern sich in Ruhe.",
        },
        {
          text: "Schwierigkeiten beim Buecken",
          isCorrect: false,
          explanation:
            "Eingeschraenkte Beweglichkeit kommt bei vielen Rueckenerkrankungen vor — sowohl bei mechanischen als auch bei entzuendlichen. Das ist kein gutes Unterscheidungsmerkmal.",
        },
        {
          text: "Schmerzen bei der Arbeit auf dem Dach",
          isCorrect: false,
          explanation:
            "Belastungsabhaengige Schmerzen koennen bei vielen Ursachen auftreten. Der entscheidende Unterschied ist: Entzuendlicher Schmerz bessert sich bei Bewegung, mechanischer Schmerz wird bei Belastung schlimmer.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "spa-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q4", "Q5"],
    contentC1: {
      title: "Die SpA-Familie — vier Erkrankungen, ein Konzept",
      body: "Spondyloarthritiden (SpA) sind eine Gruppe entzuendlich-rheumatischer Erkrankungen. Sie unterscheiden sich deutlich von der Rheumatoiden Arthritis (RA), die du in Lektion 4 kennengelernt hast.\n\nDie vier wichtigsten SpA-Formen:\n\n1. Axiale Spondyloarthritis / Morbus Bechterew: Chronische Entzuendung der Wirbelsaeule und Kreuz-Darmbein-Gelenke (Sakroiliakalgelenke). Kann zur Versteifung fuehren. Beginn typischerweise zwischen 20-40 Jahren.\n\n2. Psoriasis-Arthritis (PsA): Gelenkentzuendung bei Schuppenflechte (Psoriasis). Betrifft 10-25% der Psoriasis-Patienten. Typisch: Wurstfinger (Daktylitis), Nagelbefall.\n\n3. Reaktive Arthritis: Gelenkentzuendung NACH einer Infektion (Darm oder Harnwege). Tritt 1-4 Wochen nach dem Infekt auf. Heilt oft spontan, kann aber chronisch werden.\n\n4. Enteropathische Arthritis: Gelenkentzuendung bei chronisch-entzuendlichen Darmerkrankungen (CED) wie Morbus Crohn oder Colitis ulcerosa. Betrifft 10-20% der CED-Patienten.\n\nWas alle SpA-Formen gemeinsam haben:\n- Haeufig HLA-B27 positiv\n- Enthesitis (Sehnenansatz-Entzuendung)\n- Extraartikulaere Manifestationen (Augen, Haut, Darm)\n- Oft asymmetrischer Gelenkbefall (anders als RA!)",
      glossarBegriffe: [
        "Spondyloarthritis",
        "Sakroiliakalgelenk",
        "Enthesitis",
        "HLA-B27",
        "Daktylitis",
      ],
    },
    contentB1: {
      title: "Vier Krankheiten, die zusammen gehoeren",
      body: "Spondyloarthritiden (kurz: SpA) sind Krankheiten mit Entzuendung.\nSie sind NICHT das Gleiche wie Rheumatoide Arthritis (RA).\nBei RA sind die kleinen Gelenke an den Haenden betroffen.\nBei SpA ist vor allem die Wirbelsaeule betroffen.\n\nEs gibt 4 wichtige SpA-Formen:\n\n1. Morbus Bechterew:\nDie Wirbelsaeule entzuendet sich.\nSie kann steif werden.\nBetrifft oft junge Menschen (20-40 Jahre).\n\n2. Psoriasis-Arthritis:\nGelenke entzuenden sich bei Schuppenflechte.\nTypisch: Der ganze Finger ist dick (Wurstfinger).\n\n3. Reaktive Arthritis:\nGelenke entzuenden sich NACH einer Infektion.\nZum Beispiel nach einem Darminfekt.\n\n4. Enteropathische Arthritis:\nGelenke entzuenden sich bei Darmkrankheiten.\nZum Beispiel bei Morbus Crohn.\n\nWas alle 4 Formen gemeinsam haben:\n- Oft HLA-B27 positiv (ein Bluttest)\n- Enthesitis (Sehnenansatz-Entzuendung)\n- Augen, Haut oder Darm koennen auch betroffen sein",
      glossarBegriffe: [
        "Spondyloarthritis",
        "Sakroiliakalgelenk",
        "Enthesitis",
        "HLA-B27",
        "Daktylitis",
      ],
    },
  },
  {
    stepId: "spa-06",
    phase: 3,
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4", "Q5", "Q9"],
    contentC1: {
      title: "Welche SpA-Form ist das?",
      body: "Jede SpA-Form hat ein typisches Erscheinungsbild. Die richtige Zuordnung ist wichtig fuer die pflegerische Beobachtung und Dokumentation.",
    },
    question: {
      fragetext: "Ordne das Leitsymptom der richtigen SpA-Form zu:",
      matchingPairs: [
        {
          left: "Chronischer Rueckenschmerz + Versteifung der Wirbelsaeule",
          right: "Morbus Bechterew (axiale SpA)",
        },
        {
          left: "Schuppige Hautplaques + geschwollene Finger",
          right: "Psoriasis-Arthritis (PsA)",
        },
        {
          left: "Gelenkentzuendung 2 Wochen nach Darminfekt",
          right: "Reaktive Arthritis",
        },
        {
          left: "Knieschmerzen bei Morbus Crohn",
          right: "Enteropathische Arthritis",
        },
        {
          left: "Schmerzen an der Achillessehne beim Auftreten",
          right: "Enthesitis (typisch fuer alle SpA-Formen)",
        },
      ],
    },
  },
  {
    stepId: "spa-07",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3", "Q4", "Q8"],
    contentC1: {
      title: "Was Pflegende sehen muessen — die drei Warnsignale",
      body: "SpA-Patienten haben oft Beschwerden AUSSERHALB der Gelenke. Diese extraartikulaeren Manifestationen sind fuer Pflegende wichtig, weil sie Hinweise auf die Diagnose geben — oft BEVOR die Gelenkerkrankung erkannt wird.\n\n1. Enthesitis — Sehnenansatz-Entzuendung\nSchmerzen dort, wo Sehnen am Knochen ansetzen. Haeufigste Stelle: Achillessehne und Ferse (Plantarfasziitis). Pflegerische Beobachtung: Patient hat Schmerzen beim Aufstehen und ersten Schritten, Druckschmerz an der Ferse.\n\n2. Daktylitis — Wurstfinger / Wurstzehe\nEin ganzer Finger oder Zeh ist diffus geschwollen — nicht nur das Gelenk, sondern der ganze Finger. Sieht aus wie eine Wurst. Fast pathognomonisch (beweisend) fuer PsA. Pflegerische Beobachtung: Schwellung dokumentieren, Umfang messen, Funktion pruefen.\n\n3. Uveitis — Augenentzuendung\nEntzuendung der mittleren Augenhaut. Symptome: rotes Auge, Schmerzen, Lichtempfindlichkeit, verschwommenes Sehen. Tritt bei 25-40% der Morbus-Bechterew-Patienten auf. NOTFALL: Unbehandelte Uveitis kann zur Erblindung fuehren!\n\nPflegerische Aufgabe: Bei jedem Patienten mit chronischen Rueckenschmerzen oder Gelenkbeschwerden gezielt nach diesen drei Manifestationen fragen und beobachten.",
      glossarBegriffe: ["Plantarfasziitis", "pathognomonisch"],
    },
    contentB1: {
      title: "Drei Warnsignale, die du kennen musst",
      body: "SpA-Patienten haben oft Beschwerden nicht nur an den Gelenken.\nEs gibt 3 wichtige Warnsignale.\nPflegende muessen diese kennen.\n\n1. Enthesitis (Sehnenansatz-Entzuendung):\nDie Stelle, wo die Sehne am Knochen haengt, entzuendet sich.\nOft an der Ferse oder an der Achillessehne.\nDer Patient hat Schmerzen beim Aufstehen.\nDie ersten Schritte tun weh.\n\n2. Daktylitis (Wurstfinger):\nEin ganzer Finger oder Zeh ist geschwollen.\nNicht nur das Gelenk — der ganze Finger.\nEr sieht aus wie eine Wurst.\nDas ist typisch fuer Psoriasis-Arthritis.\n\n3. Uveitis (Augenentzuendung):\nDas Auge ist rot und tut weh.\nLicht tut weh.\nDas Sehen wird unscharf.\nACHTUNG: Ohne Behandlung kann man blind werden!\n25-40 von 100 Bechterew-Patienten bekommen eine Uveitis.\n\nAls Pflegekraft sollst du fragen:\n- \"Haben Sie Schmerzen an der Ferse?\"\n- \"Sind Finger oder Zehen geschwollen?\"\n- \"Hatten Sie eine Augenentzuendung?\"",
      glossarBegriffe: ["Plantarfasziitis", "pathognomonisch"],
    },
  },
  {
    stepId: "spa-08",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q7"],
    contentC1: {
      title: "Die 5 ASAS-Kriterien fuer entzuendlichen Rueckenschmerz",
      body: "Die ASAS (Assessment of SpondyloArthritis international Society) hat 5 Kriterien definiert, um entzuendlichen von mechanischem Rueckenschmerz zu unterscheiden. Wenn 4 von 5 erfuellt sind, spricht man von entzuendlichem Rueckenschmerz.",
    },
    question: {
      fragetext:
        "Sortiere die 5 ASAS-Kriterien fuer entzuendlichen Rueckenschmerz nach ihrer diagnostischen Wichtigkeit (wichtigstes zuerst):",
      sortItems: [
        "Besserung bei Bewegung, NICHT in Ruhe",
        "Naechtlicher Schmerz (mit Besserung beim Aufstehen)",
        "Morgensteifigkeit >30 Minuten",
        "Schleichender Beginn (nicht ploetzlich)",
        "Erstmanifestation vor dem 40. Lebensjahr",
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "spa-09",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7", "Q8"],
    contentC1: {
      title: "Tobias kommt mit rotem Auge",
      body: 'Du arbeitest in der Augenklinik. Tobias Fischer, 24, kommt mit einem schmerzhaften roten Auge. Der Augenarzt diagnostiziert eine anteriore Uveitis. Im Aufnahmegespraech erzaehlt Tobias beilaeufig: "Ich hab seit 2 Jahren auch Rueckenschmerzen, vor allem nachts. Aber das hat ja nichts miteinander zu tun, oder?"',
      fallbezug:
        "Tobias' Uveitis ist kein Zufall — sie ist eine extraartikulaere Manifestation seiner noch nicht diagnostizierten SpA.",
    },
    question: {
      fragetext: "Wie reagierst du als Pflegekraft auf Tobias' Aussage?",
      branchingOptions: [
        {
          text: '"Da haben Sie recht, Augen und Ruecken haben nichts miteinander zu tun. Wir kuemmern uns jetzt um Ihr Auge."',
          feedback:
            "Das ist leider falsch. Uveitis und chronischer Rueckenschmerz koennen sehr wohl zusammenhaengen — beides sind Manifestationen einer Spondyloarthritis. Bei 25-40% der Morbus-Bechterew-Patienten tritt eine Uveitis auf. Durch diese Aussage wird ein wichtiger diagnostischer Hinweis uebersehen.",
          isCorrect: false,
        },
        {
          text: '"Das ist ein interessanter Hinweis. Rueckenschmerzen und Augenentzuendungen koennen bei rheumatischen Erkrankungen zusammenhaengen. Ich notiere das und spreche den Arzt darauf an."',
          feedback:
            "Genau richtig! Du erkennst den moeglichen Zusammenhang und kommunizierst ihn im Team. Genau das ist die pflegerische Aufgabe: Beobachten, dokumentieren, weitergeben. Bei 25-40% der SpA-Patienten tritt eine Uveitis auf. Dein Hinweis koennte Tobias' Diagnose um Jahre beschleunigen.",
          isCorrect: true,
        },
        {
          text: '"Morbus Bechterew! Sie sollten sofort zum Rheumatologen gehen."',
          feedback:
            "Dein Verdacht geht in die richtige Richtung, aber als Pflegekraft stellst du keine Diagnosen. Die korrekte Vorgehensweise: Beobachtung dokumentieren, den Arzt informieren und die Zusammenhaenge im Team besprechen. Eine Ueberweisung ordnet der Arzt an.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "spa-10",
    phase: 4,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q7", "Q8"],
    contentC1: {
      title: "Erfuellt Tobias die ASAS-Kriterien?",
      body: "Die ASAS-Klassifikationskriterien fuer axiale SpA haben zwei Arme: einen Bildgebungsarm (Sakroiliitis im MRT/Roentgen + mind. 1 SpA-Merkmal) und einen klinischen Arm (HLA-B27 positiv + mind. 2 SpA-Merkmale).\n\nSpA-Merkmale sind: entzuendlicher Rueckenschmerz, Arthritis, Enthesitis, Daktylitis, Uveitis, Psoriasis, CED, gutes Ansprechen auf NSAR, erhoehtes CRP, Familienanamnese fuer SpA, HLA-B27.",
      fallbezug:
        "Tobias hat: chronischen Rueckenschmerz seit >3 Monaten, Beginn mit 22 Jahren, entzuendlichen Rueckenschmerz, Uveitis, Vater mit Psoriasis, HLA-B27 positiv.",
    },
    question: {
      fragetext:
        "Tobias' HLA-B27 Test ist positiv. Welche Aussage zu den ASAS-Kriterien trifft zu?",
      optionen: [
        {
          text: "Tobias erfuellt die ASAS-Kriterien im klinischen Arm, weil er HLA-B27 positiv ist und mindestens 2 SpA-Merkmale hat",
          isCorrect: true,
          explanation:
            "Richtig! Klinischer Arm: HLA-B27 positiv + mind. 2 SpA-Merkmale. Tobias hat: entzuendlichen Rueckenschmerz (1), Uveitis (2), Familienanamnese — Vater mit Psoriasis (3). Er erfuellt die Kriterien deutlich.",
        },
        {
          text: "HLA-B27 allein reicht fuer die Diagnose Morbus Bechterew",
          isCorrect: false,
          explanation:
            "Falsch. HLA-B27 ist ein Risikofaktor, kein diagnostischer Test. Ca. 8% der Bevoelkerung sind HLA-B27 positiv, aber nur 5-20% davon entwickeln eine SpA. Zusaetzliche klinische Kriterien muessen erfuellt sein.",
        },
        {
          text: "Die ASAS-Kriterien koennen nur von Rheumatologen angewendet werden",
          isCorrect: false,
          explanation:
            "Die Diagnosestellung obliegt zwar dem Arzt, aber Pflegende muessen die Kriterien kennen, um relevante Beobachtungen zu dokumentieren und im Team zu kommunizieren. Dein Wissen ueber SpA-Merkmale hilft bei der Frueherkennung.",
        },
        {
          text: "Tobias braucht zwingend ein MRT der Sakroiliakalgelenke, bevor die Kriterien anwendbar sind",
          isCorrect: false,
          explanation:
            "Nein. Die ASAS-Kriterien haben ZWEI Arme: Bildgebungsarm (MRT/Roentgen) ODER klinischer Arm (HLA-B27 + 2 SpA-Merkmale). Tobias erfuellt den klinischen Arm auch ohne MRT.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "spa-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q6", "Q7"],
    contentC1: {
      title: "Tobias braucht eine Erklaerung",
      body: 'Tobias hat seine Diagnose bekommen: Axiale Spondyloarthritis (Morbus Bechterew). Er ist erleichtert, dass endlich jemand weiss, was er hat — aber auch geschockt.',
      fallbezug:
        'Tobias fragt dich: "Warum hat 2 Jahre lang keiner erkannt, was ich habe? Was ist das ueberhaupt — Morbus Bechterew?"',
    },
    question: {
      fragetext:
        "Erklaere Tobias in einfachen Worten: (1) Was Morbus Bechterew ist, (2) warum die Diagnose so lange gedauert hat, und (3) was das fuer ihn bedeutet.",
      musterantwort:
        "Morbus Bechterew ist eine entzuendliche Erkrankung der Wirbelsaeule. Das Immunsystem greift die eigenen Gelenke an, besonders die Kreuz-Darmbein-Gelenke und die Wirbelgelenke. Die Diagnose hat so lange gedauert, weil Rueckenschmerzen bei jungen Menschen oft als Bandscheibe oder Muskelproblem eingeordnet werden. Aber Ihre Schmerzen sind anders: Sie kommen nachts, morgens ist alles steif, und es wird besser bei Bewegung — das sind typische Zeichen fuer eine Entzuendung. Zusammen mit der Augenentzuendung und dem positiven HLA-B27 ergibt sich ein klares Bild. Die gute Nachricht: Es gibt wirksame Therapien, und regelmaessige Bewegung ist das Wichtigste.",
      bewertungskriterien: [
        "Entzuendliche Ursache verstaendlich erklaert (Immunsystem, Autoimmun)",
        "Abgrenzung zu mechanischem Schmerz (Bandscheibe) genannt",
        "Diagnoseverzoegerung empathisch erklaert (nicht als Vorwurf an Aerzte)",
        "Zusammenhang Uveitis + Ruecken erwaehnt",
        "Positive Perspektive (Therapie moeglich, Bewegung hilft)",
      ],
      satzanfaengeB1: [
        "Morbus Bechterew ist eine Krankheit, bei der...",
        "Ihre Rueckenschmerzen sind anders, weil...",
        "Die gute Nachricht ist, dass...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "spa-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q6", "Q10"],
    contentC1: {
      title: "Bewegung ist Therapie — Praxisauftrag",
      body: "Bei Morbus Bechterew ist Physiotherapie keine Ergaenzung — sie ist die wichtigste Therapiesaeule. Ohne regelmaessige Bewegung droht die Versteifung der Wirbelsaeule.\n\nWas du als Pflegekraft wissen musst:\n- Bechterew-Gymnastik: Spezielle Uebungen fuer Wirbelsaeulen-Beweglichkeit und Haltung. Taeglich, lebenslang.\n- Bewegung > Schonung: Anders als bei mechanischen Rueckenschmerzen gilt: Bewegung macht BESSER, nicht schlechter.\n- Atemgymnastik: Weil auch die Brustwirbelsaeule und die Rippen-Wirbelgelenke betroffen sein koennen, ist tiefes Atmen wichtig.\n- Motivation ist Pflege: Viele SpA-Patienten hoeren nach Monaten auf mit den Uebungen. Pflegerische Aufgabe: motivieren, erinnern, ermutigen.\n\nPraxisauftrag: Beobachte in deiner naechsten Praxisphase: Gibt es Patienten mit chronischen Rueckenschmerzen? Frage gezielt: \"Wann sind die Schmerzen am schlimmsten — nachts oder tagsueber?\" und \"Wie lange sind Sie morgens steif?\" Diese zwei Fragen koennen den Unterschied machen.",
      fallbezug:
        "Tobias lernt jetzt Bechterew-Gymnastik. Seine Freundin macht die Uebungen mit — das motiviert ihn. In 6 Monaten wird er berichten: \"Der Ruecken ist nicht weg, aber so viel besser.\"",
      glossarBegriffe: ["Bechterew-Gymnastik"],
    },
    contentB1: {
      title: "Bewegung ist die beste Therapie",
      body: "Bei Morbus Bechterew ist Bewegung das Wichtigste.\nOhne Bewegung wird die Wirbelsaeule steif.\n\nWas du als Pflegekraft wissen musst:\n\nBechterew-Gymnastik:\nDas sind spezielle Uebungen fuer die Wirbelsaeule.\nDer Patient macht sie jeden Tag.\nEin Leben lang.\n\nBewegung macht besser, nicht schlechter:\nBei Morbus Bechterew ist es anders als bei Bandscheibe.\nRuhe macht die Schmerzen SCHLIMMER.\nBewegung macht die Schmerzen BESSER.\n\nAtem-Uebungen:\nDie Entzuendung kann auch die Rippen betreffen.\nDann wird das tiefe Atmen schwer.\nAtem-Uebungen helfen.\n\nDeine Aufgabe als Pflegekraft:\nErmutige den Patienten zur Bewegung.\nViele hoeren nach einigen Monaten auf.\nMotiviere sie: \"Die Uebungen helfen Ihrem Ruecken.\"\n\nPraxisauftrag:\nFrage Patienten mit Rueckenschmerzen 2 Fragen:\n1. \"Wann sind die Schmerzen am schlimmsten? Nachts oder tagsueber?\"\n2. \"Wie lange sind Sie morgens steif?\"\nDiese 2 Fragen koennen den Unterschied machen.",
      fallbezug:
        "Tobias macht jetzt Bechterew-Gymnastik. Seine Freundin macht die Uebungen mit. Das motiviert ihn.",
      glossarBegriffe: ["Bechterew-Gymnastik"],
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Spondyloarthritis (SpA)",
    erklaerung:
      "Gruppe entzuendlich-rheumatischer Erkrankungen, die v.a. Wirbelsaeule und grosse Gelenke betreffen",
  },
  {
    begriff: "Morbus Bechterew",
    erklaerung:
      "Chronisch-entzuendliche Erkrankung der Wirbelsaeule (axiale Spondyloarthritis), kann zur Versteifung fuehren",
  },
  {
    begriff: "HLA-B27",
    erklaerung:
      "Genetischer Marker — bei bis zu 94% der Bechterew-Patienten positiv, aber auch bei 8% der gesunden Bevoelkerung",
  },
  {
    begriff: "Enthesitis",
    erklaerung:
      "Entzuendung am Sehnenansatz (dort wo Sehne am Knochen ansetzt), haeufig an Achillessehne und Ferse",
  },
  {
    begriff: "Daktylitis",
    erklaerung:
      "Diffuse Schwellung eines ganzen Fingers oder Zehs (Wurstfinger/-zehe), typisch fuer Psoriasis-Arthritis",
  },
  {
    begriff: "Uveitis",
    erklaerung:
      "Entzuendung der mittleren Augenhaut — rotes Auge, Schmerzen, Lichtempfindlichkeit. Notfall: kann zur Erblindung fuehren",
  },
  {
    begriff: "Sakroiliakalgelenk",
    erklaerung:
      "Kreuz-Darmbein-Gelenk — Verbindung zwischen Wirbelsaeule und Becken, haeufig zuerst bei SpA betroffen",
  },
  {
    begriff: "Psoriasis",
    erklaerung:
      "Schuppenflechte — Hautkrankheit mit schuppigen Plaques, bei 10-25% der Betroffenen mit Gelenkbeteiligung (PsA)",
  },
  {
    begriff: "Plantarfasziitis",
    erklaerung:
      "Entzuendung der Fusssohlen-Sehnenplatte — Fersenschmerz beim Aufstehen, kann Zeichen einer Enthesitis sein",
  },
  {
    begriff: "Bechterew-Gymnastik",
    erklaerung:
      "Spezielle taegliche Uebungen fuer Wirbelsaeulen-Beweglichkeit, Haltung und Atemtraining bei Morbus Bechterew",
  },
];
