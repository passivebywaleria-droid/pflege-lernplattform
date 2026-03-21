// Lektion 12: Der pflegerische Prozess bei Rheuma — Teil 1
// CE 05 — Block D: Pflegerisches Handeln
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-12-pflegeprozess-1",
  ceId: "ce-05",
  title: "Der pflegerische Prozess bei Rheuma — Teil 1",
  titleShort: "Pflegeprozess 1",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-II.2"],
  bloomStufen: [1, 5],
  voraussetzungen: ["le-11-assessments"],
  leitfall: {
    name: "Nadia Haddad",
    alter: 58,
    beruf: "Kuechenhilfe in einer Schulkantine",
    diagnose: "Rheumatoide Arthritis seit 12 Jahren, akuter Schub (DAS28 5,8)",
    setting: "Stationaere Aufnahme Rheumatologie, Uniklinik",
    kernproblem:
      "Multiple ATL-Einschraenkungen im Schub, Scham ueber Hilfsbeduerfigkeit trotz 12 Jahren Selbstmanagement",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "pflproz1-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q2", "Q8"],
    contentC1: {
      title: "Wie sicher bist du im Pflegeprozess?",
      body: "In dieser Lektion wendest du den Pflegeprozess auf eine Rheuma-Patientin an. Du wirst eine Pflegeanamnese erheben, Pflegediagnosen formulieren, SMART-Ziele setzen und einen Pflegeplan erstellen.\n\nDer Pflegeprozess ist das zentrale Werkzeug der professionellen Pflege — er macht pflegerisches Handeln planbar, nachvollziehbar und evaluierbar. Bei chronischen Erkrankungen wie Rheuma ist er besonders wichtig, weil sich der Zustand staendig veraendert (Schub vs. Remission).\n\nDu hast in LE 11 gelernt, welche Assessments bei Rheuma eingesetzt werden. Jetzt geht es darum: Was machst du mit den Ergebnissen?",
      glossarBegriffe: ["Pflegeprozess"],
    },
    contentB1: {
      title: "Wie sicher bist du beim Pflegeplan?",
      body: "In dieser Lektion uebst du den Pflegeprozess.\nDu lernst das an einem Beispiel.\nEine Patientin hat Rheuma.\nDu machst fuer sie einen Pflegeplan.\n\nDer Pflegeprozess hat 6 Schritte:\n1. Informationen sammeln\n2. Probleme erkennen\n3. Ziele setzen\n4. Massnahmen planen\n5. Massnahmen durchfuehren\n6. Pruefen: Hat es funktioniert?\n\nBei Rheuma ist der Pflegeprozess wichtig.\nDer Zustand aendert sich oft.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich bei der Erstellung eines Pflegeplans fuer einen Rheuma-Patienten?",
    },
  },
  {
    stepId: "pflproz1-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q8"],
    contentC1: {
      title: "Pflegeanamnese — Der erste Schritt",
      body: "",
    },
    question: {
      fragetext:
        "Eine Patientin mit Rheumatoider Arthritis wird auf deine Station aufgenommen. Welche Information ist fuer die Pflegeanamnese am WICHTIGSTEN?",
      optionen: [
        {
          text: "Der genaue Rheumafaktor-Wert aus dem letzten Labor",
          isCorrect: false,
          explanation:
            "Der Rheumafaktor ist ein aerztlicher Laborwert. Fuer die Pflegeanamnese sind die Auswirkungen auf den Alltag wichtiger — was kann die Patientin noch selbst, wo braucht sie Hilfe?",
        },
        {
          text: "Welche Alltagsaktivitaeten die Patientin selbststaendig ausfuehren kann und wo sie Unterstuetzung braucht",
          isCorrect: true,
          explanation:
            "Genau! Die Pflegeanamnese erfasst systematisch, welche AEDL eingeschraenkt sind — und welche Ressourcen die Patientin mitbringt. Das ist die Grundlage fuer den gesamten Pflegeplan.",
        },
        {
          text: "Ob die Patientin privat oder gesetzlich versichert ist",
          isCorrect: false,
          explanation:
            "Die Versicherung ist administrativ relevant, aber kein Bestandteil der Pflegeanamnese. Der Pflegeprozess orientiert sich am Pflegebedarf, nicht am Versicherungsstatus.",
        },
        {
          text: "Wie der Arzt die Prognose einschaetzt",
          isCorrect: false,
          explanation:
            "Die aerztliche Prognose ist wichtig fuer das Gesamtbild, aber die Pflegeanamnese fokussiert auf die aktuelle Lebenssituation: Was kann die Patientin? Was sind ihre Ziele? Wo braucht sie Pflege?",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "pflproz1-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q5"],
    contentC1: {
      title: 'Nadia Haddad — "Ich habe immer alles alleine geschafft"',
      body: "Nadia Haddad, 58 Jahre, wird auf die rheumatologische Station aufgenommen. Sie hat seit 12 Jahren Rheumatoide Arthritis und kennt ihre Krankheit genau — sie weiss, was ein Schub ist, nimmt zuverlaessig MTX und seit 4 Monaten Adalimumab.\n\nSeit zwei Wochen hat sie einen schweren Schub. DAS28: 5,8 (hoch aktiv). Beide Handgelenke sind geschwollen, die MCP-Gelenke (Fingergrundgelenke) schmerzen stark. Eine beginnende Ulnardeviation ist sichtbar.\n\nNadia arbeitet seit 20 Jahren als Kuechenhilfe in einer Schulkantine. Kochen ist nicht nur ihr Beruf — es ist ihre Leidenschaft. Sie kocht irakisch fuer die Nachbarn, fuer den Sohn wenn er zu Besuch kommt. Seit dem Schub kann sie keinen Kochloeffel mehr halten. Morgens braucht sie 20 Minuten zum Haarekaeemmen. Knoepfe schliessen geht kaum noch.\n\nIhr Ehemann ist vor 3 Jahren gestorben. Sohn Tarek (30) lebt in Muenchen. Nachbarin Frau Weber schaut taeglich vorbei. Nadia sagt bei der Aufnahme: \"Ich brauche keine Hilfe — ich schaffe das alleine. Ich habe 12 Jahre mit Rheuma gelebt.\"\n\nAber ihre Haende erzaehlen eine andere Geschichte.",
      fallbezug:
        "Nadia begleitet dich durch diese gesamte Lektion. Fuer sie wirst du eine Pflegeanamnese erheben, Diagnosen formulieren und einen Pflegeplan erstellen.",
      glossarBegriffe: ["Ulnardeviation", "MCP-Gelenke"],
    },
    contentB1: {
      title: "Frau Haddad kommt ins Krankenhaus",
      body: "Nadia Haddad ist 58 Jahre alt.\nSie kommt aus dem Irak.\nSie lebt seit 30 Jahren in Deutschland.\n\nFrau Haddad hat seit 12 Jahren Rheuma.\nSie kennt ihre Krankheit gut.\nSie nimmt ihre Medikamente regelmaessig.\n\nJetzt hat sie einen starken Schub.\nIhre Haende sind geschwollen und tun weh.\nSie kann keine Knoepfe mehr schliessen.\nHaare kaemmen dauert 20 Minuten.\nEinen Kochloeffel kann sie nicht mehr halten.\n\nFrau Haddad arbeitet in einer Schulkantine.\nSie kocht sehr gern.\nSeit 2 Wochen kann sie nicht arbeiten.\n\nIhr Mann ist vor 3 Jahren gestorben.\nIhr Sohn Tarek lebt in Muenchen.\nEine Nachbarin schaut jeden Tag vorbei.\n\nFrau Haddad sagt: \"Ich brauche keine Hilfe.\"\nAber ihre Haende zeigen: Sie braucht jetzt Hilfe.",
    },
  },
  {
    stepId: "pflproz1-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q8", "Q10"],
    contentC1: {
      title: "Erste Beobachtung",
      body: "",
      fallbezug:
        'Nadia sagt "Ich schaffe das alleine" — aber du beobachtest, dass sie beim Aufnahmegespraech Schwierigkeiten hat, das Wasserglas zu greifen.',
    },
    question: {
      fragetext:
        "Nadia sagt, sie brauche keine Hilfe. Was ist deine wichtigste pflegerische Aufgabe in diesem Moment?",
      optionen: [
        {
          text: "Nadia widersprechen und erklaeren, dass sie offensichtlich Hilfe braucht",
          isCorrect: false,
          explanation:
            "Nadia direkt zu widersprechen beschaedigt die Vertrauensbasis. Sie hat 12 Jahre Erfahrung mit ihrer Krankheit — sie ist keine unwissende Patientin, sondern eine Expertin, die gerade eine Krise erlebt.",
        },
        {
          text: "Nadias Aussage akzeptieren und keine weitere Anamnese durchfuehren",
          isCorrect: false,
          explanation:
            "Das waere eine Unterlassung. Pflegerische Beobachtung zeigt deutliche Einschraenkungen. Die Pflegeanamnese ist Pflicht — aber sie muss wertschaetzend und partizipativ erfolgen.",
        },
        {
          text: "Nadias Expertenwissen anerkennen und gemeinsam mit ihr erheben, wo sie aktuell Unterstuetzung braucht",
          isCorrect: true,
          explanation:
            'Richtig! Partizipative Pflegeanamnese: Nadia als Expertin fuer ihre eigene Krankheit ernst nehmen, gleichzeitig objektiv beobachten und die aktuelle Situation gemeinsam einschaetzen. "Frau Haddad, Sie kennen Ihre Krankheit sehr gut. Lassen Sie uns gemeinsam schauen, wo Sie gerade Unterstuetzung brauchen."',
        },
        {
          text: "Den Arzt informieren, dass Nadia uneinsichtig ist",
          isCorrect: false,
          explanation:
            'Nadia ist nicht "uneinsichtig" — sie zeigt eine verstaendliche Reaktion: Scham ueber Hilfsbeduerfigkeit bei einer Frau, die 12 Jahre alles alleine geschafft hat. Das ist eine psychosoziale Herausforderung, keine Uneinsichtigkeit.',
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-7)
  // ==========================================
  {
    stepId: "pflproz1-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q5", "Q6", "Q8"],
    contentC1: {
      title: "Systematische Pflegeanamnese — AEDL bei Rheuma",
      body: "Die Pflegeanamnese bei Rheuma orientiert sich an den AEDL nach Krohwinkel. Bei einem akuten Schub sind typischerweise diese AEDL besonders betroffen:\n\n**Sich bewegen:** Morgensteifigkeit (bei Nadia >60 Min), eingeschraenkte Gelenkbeweglichkeit, Kraftverlust in den Haenden, Sturzrisiko durch geschwollene Fussgelenke.\n\n**Sich waschen und kleiden:** Haare kaemmen, Zaehne putzen, Knoepfe schliessen, Reissverschluesse — alles erfordert Feinmotorik der Haende. Bei Nadia: 20 Min fuer Haare, Knoepfe kaum moeglich.\n\n**Essen und trinken:** Besteck halten, Flaschen oeffnen, Brot schneiden, Glas greifen. Bei Nadia besonders belastend: Kochen ist ihre Identitaet.\n\n**Sich beschaeftigen / Arbeit:** Berufliche Einschraenkung (Kuechenhilfe = Handarbeit). Hobbys eingeschraenkt. Soziale Teilhabe reduziert.\n\n**Kommunizieren:** Bei Schmerz und Stress faellt Nadia ins Arabische zurueck — sprachliche Barriere im akuten Moment.\n\n**Fuer Sicherheit sorgen:** Medikamentenmanagement (MTX, Adalimumab), Sturzrisiko, Gelenkschutz im Alltag.\n\nWICHTIG: Immer auch Ressourcen erfassen! Nadia kennt ihre Krankheit, ist motiviert, hat soziales Netz (Nachbarin, Sohn).",
      glossarBegriffe: ["AEDL", "Pflegeanamnese", "Gelenkschutz"],
    },
    contentB1: {
      title: "Was kann Frau Haddad nicht mehr alleine?",
      body: "Bei der Aufnahme pruefen wir:\nWas kann die Patientin noch alleine?\nWo braucht sie Hilfe?\nWir nutzen die AEDL (Aktivitaeten des taeglichen Lebens).\n\nBei Rheuma sind oft diese Bereiche betroffen:\n\n**Sich bewegen:**\nDie Gelenke sind steif am Morgen.\nFrau Haddad braucht ueber 60 Minuten.\n\n**Sich waschen und anziehen:**\nHaare kaemmen ist schwer.\nKnoepfe schliessen geht fast nicht.\n\n**Essen und trinken:**\nEin Glas halten ist schwer.\nBrot schneiden geht nicht.\nFrau Haddad kann nicht mehr kochen.\n\n**Arbeiten:**\nFrau Haddad kann nicht arbeiten.\nDas macht sie traurig.\n\nWICHTIG: Wir fragen auch nach Staerken!\nFrau Haddad kennt ihre Krankheit.\nSie hat eine Nachbarin, die hilft.",
    },
  },
  {
    stepId: "pflproz1-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q9", "Q10"],
    contentC1: {
      title: "Von der Anamnese zur Diagnose — und zum Ziel",
      body: 'Aus der Pflegeanamnese leiten wir Pflegediagnosen ab. Das NANDA-I-System (2024–2026) bietet standardisierte Diagnosen. Bei Rheuma haeufig:\n\n**Relevante NANDA-I-Diagnosen:**\n- Beeintraechtigte koerperliche Mobilitaet (00085) — eingeschraenkte Gelenkbeweglichkeit, Schmerz\n- Selbstpflegedefizit Kleiden (00109) — kann Knoepfe nicht schliessen\n- Selbstpflegedefizit Koerperpflege (00108) — Haarekaeemmen, Zaehneputzen erschwert\n- Chronischer Schmerz (00133) — Gelenkschmerzen, Morgensteifigkeit\n- Aktivitaetsintoleranz (00092) — Fatigue, reduzierte Belastbarkeit\n\n**SMART-Ziele formulieren:**\nJede Pflegediagnose braucht ein Ziel. SMART bedeutet:\n- **S**pezifisch: Was genau soll erreicht werden?\n- **M**essbar: Woran erkennen wir den Erfolg?\n- **A**kzeptiert: Hat die Patientin zugestimmt?\n- **R**ealistisch: Ist es in der gegebenen Zeit erreichbar?\n- **T**erminiert: Bis wann?\n\n**Beispiel fuer Nadia:**\nDiagnose: Selbstpflegedefizit Kleiden (00109)\nZiel: "Frau Haddad kleidet sich innerhalb von 2 Wochen mit Hilfsmitteln (Knoepfhilfe, Klettverschluesse) selbststaendig an."',
      glossarBegriffe: [
        "NANDA-I",
        "Pflegediagnose",
        "SMART-Ziele",
        "Selbstpflegedefizit",
      ],
    },
    contentB1: {
      title: "Probleme benennen und Ziele setzen",
      body: "Wir haben Informationen gesammelt.\nJetzt benennen wir die Probleme.\nDafuer nutzen wir NANDA-I.\nDas ist ein System fuer Pflegediagnosen.\n\nPflegediagnosen bei Frau Haddad:\n- Sie kann sich nicht alleine anziehen.\n- Sie kann sich schwer waschen.\n- Sie hat starke Schmerzen.\n- Sie wird schnell muede.\n- Sie kann sich schlecht bewegen.\n\nFuer jedes Problem brauchen wir ein Ziel.\nZiele muessen SMART sein:\n- **S** = Genau\n- **M** = Messbar\n- **A** = Abgesprochen\n- **R** = Realistisch\n- **T** = Mit Zeit\n\nBeispiel fuer Frau Haddad:\nProblem: Sie kann sich nicht alleine anziehen.\nZiel: \"In 2 Wochen zieht Frau Haddad sich mit Hilfsmitteln selbst an.\"\nEine Knoepfhilfe ist ein kleines Geraet fuer Knoepfe.",
    },
  },
  {
    stepId: "pflproz1-07",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q8"],
    contentC1: {
      title: "Der Pflegeprozess — die richtige Reihenfolge",
      body: "Der Pflegeprozess ist ein systematischer, zirkulaerer Ablauf. Die Reihenfolge ist entscheidend — jeder Schritt baut auf dem vorherigen auf. Bei Rheuma ist der Prozess besonders dynamisch, weil sich der Zustand zwischen Schub und Remission staendig aendert.",
      glossarBegriffe: ["Pflegeprozess"],
    },
    question: {
      fragetext:
        "Bringe die 6 Schritte des Pflegeprozesses in die richtige Reihenfolge:",
      sortItems: [
        "Informationssammlung (Pflegeanamnese + Assessment)",
        "Pflegeprobleme und -diagnosen erkennen (NANDA-I)",
        "Pflegeziele festlegen (SMART)",
        "Pflegemassnahmen planen",
        "Pflegemassnahmen durchfuehren",
        "Evaluation — Wirksamkeit pruefen und Pflegeplan anpassen",
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 8-10)
  // ==========================================
  {
    stepId: "pflproz1-08",
    phase: 4,
    stepType: "matching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q5", "Q10"],
    contentC1: {
      title: "Von der Beobachtung zur Diagnose — Nadias Fall",
      body: "Du hast Nadias Pflegeanamnese erhoben. Jetzt ordnest du die beobachteten Einschraenkungen den passenden NANDA-I-Pflegediagnosen zu.",
      fallbezug:
        "Alle Beobachtungen beziehen sich auf Nadias aktuelle Situation im akuten Schub.",
    },
    question: {
      fragetext:
        "Ordne jede Beobachtung bei Nadia der passenden NANDA-I-Pflegediagnose zu:",
      matchingPairs: [
        {
          left: "Nadia braucht 20 Min zum Haarekaeemmen",
          right: "Selbstpflegedefizit Koerperpflege (00108)",
        },
        {
          left: "Nadia kann keine Knoepfe schliessen",
          right: "Selbstpflegedefizit Kleiden (00109)",
        },
        {
          left: "Nadia kann den Kochloeffel nicht halten",
          right: "Beeintraechtigte koerperliche Mobilitaet (00085)",
        },
        {
          left: "DAS28 5,8 und Morgensteifigkeit >60 Min",
          right: "Chronischer Schmerz (00133)",
        },
        {
          left: "Nadia schafft nach 30 Min Aktivitaet nichts mehr",
          right: "Aktivitaetsintoleranz (00092)",
        },
        {
          left: 'Nadia sagt "Ich brauche keine Hilfe" trotz Einschraenkung',
          right: "Unwirksames Gesundheitsmanagement (00276)",
        },
      ],
    },
  },
  {
    stepId: "pflproz1-09",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q9"],
    contentC1: {
      title: "Pflegeziel formulieren — gemeinsam mit Nadia",
      body: 'Du moechtest mit Nadia ein Pflegeziel fuer das Problem "Selbstpflegedefizit Kleiden" formulieren. Nadia sagt: "Ich will wieder alles alleine koennen — so wie frueher. In einer Woche bin ich wieder fit."',
      fallbezug:
        "Nadia ueberschaetzt ihre Genesungsgeschwindigkeit. Ein akuter Schub bei DAS28 5,8 braucht typischerweise 4-8 Wochen bis zur deutlichen Besserung. Wie gehst du mit diesem Wunsch um?",
    },
    question: {
      fragetext: "Wie formulierst du das Pflegeziel mit Nadia?",
      branchingOptions: [
        {
          text: "\"Frau Haddad kleidet sich in einer Woche wieder vollstaendig selbststaendig an — wie vor dem Schub.\"",
          feedback:
            "Das ist Nadias Wunsch — aber kein realistisches Ziel. DAS28 5,8 bedeutet hohe Krankheitsaktivitaet. Eine Woche reicht fuer eine deutliche Besserung der Handmotorik nicht aus. Ein unrealistisches Ziel fuehrt zu Frustration. SMART sagt: Realistisch!",
          isCorrect: false,
        },
        {
          text: "\"Frau Haddad kleidet sich innerhalb von 2 Wochen mit Hilfsmitteln (Knoepfhilfe, Klettverschluesse) selbststaendig an.\"",
          feedback:
            "Sehr gut! Dieses Ziel ist SMART: Spezifisch (Kleiden mit Hilfsmitteln), Messbar (selbststaendig = ohne Hilfe einer Pflegekraft), Akzeptiert (Nadias Ziel der Selbststaendigkeit wird aufgegriffen), Realistisch (Hilfsmittel kompensieren die Handeinschraenkung), Terminiert (2 Wochen). Du nimmst Nadias Wunsch ernst und machst ihn erreichbar.",
          isCorrect: true,
        },
        {
          text: "\"Wir schauen mal, wie es sich entwickelt. Wenn die Medikamente wirken, wird es besser.\"",
          feedback:
            "Das ist kein Pflegeziel — das ist Abwarten. Ohne konkretes Ziel fehlt die Grundlage fuer die Pflegeplanung und die Evaluation. Der Pflegeprozess braucht messbare Ziele. Auch wenn die medikamentoese Therapie Zeit braucht, kann die Pflege sofort handeln.",
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "pflproz1-10",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q8", "Q9"],
    contentC1: {
      title: "Dein Pflegeplan — Nadia braucht dich",
      body: "Du hast die Pflegeanamnese erhoben, Diagnosen gestellt und Ziele formuliert. Jetzt formulierst du konkrete Pflegemassnahmen fuer EINE Pflegediagnose.",
      fallbezug:
        "Waehle eine von Nadias Pflegediagnosen (z.B. Selbstpflegedefizit Kleiden) und schreibe einen kurzen Pflegeplan.",
      glossarBegriffe: ["Pflegeplanung", "Hilfsmittel"],
    },
    contentB1: {
      title: "Schreibe einen Pflegeplan fuer Frau Haddad",
      body: "Du hast die Probleme von Frau Haddad gesehen.\nDu hast Pflegediagnosen gelernt.\nDu hast SMART-Ziele gelernt.\n\nJetzt schreibst du einen kurzen Pflegeplan.\nWaehle ein Problem von Frau Haddad.",
    },
    question: {
      fragetext:
        "Formuliere fuer eine von Nadias Pflegediagnosen: (1) Die Pflegediagnose, (2) Ein SMART-Ziel, (3) Drei konkrete Pflegemassnahmen.",
      musterantwort:
        'Pflegediagnose: Selbstpflegedefizit Kleiden (00109) b/f eingeschraenkte Handfunktion und Schmerz i/d Unfaehigkeit, Knoepfe zu schliessen und Reissverschluesse zu bedienen.\n\nSMART-Ziel: Frau Haddad kleidet sich innerhalb von 2 Wochen mit Hilfsmitteln selbststaendig an.\n\nPflegemassnahmen:\n1. Bereitstellung und Anleitung im Umgang mit Knoepfhilfe und langem Schuhloefel (Ergotherapie einbeziehen)\n2. Gemeinsam mit Frau Haddad Kleidung mit Klettverschluessen und weiten Aermeln auswaehlen (Ressource: Sohn Tarek bringt am Wochenende geeignete Kleidung mit)\n3. Morgendliche Unterstuetzung beim Ankleiden in der ersten Woche, ab Woche 2 nur noch Supervision mit schrittweiser Reduktion',
      bewertungskriterien: [
        "NANDA-I-Pflegediagnose korrekt benannt (Nummer oder Titel)",
        "Ziel ist SMART formuliert (spezifisch, messbar, realistisch, terminiert)",
        "Mindestens 2 konkrete, nachvollziehbare Massnahmen",
        "Ressourcen der Patientin einbezogen",
        "Hilfsmittel benannt",
      ],
      satzanfaengeB1: [
        "Die Pflegediagnose fuer Frau Haddad ist...",
        "Das Ziel ist: Frau Haddad soll in ... Wochen...",
        "Massnahme 1: Wir geben Frau Haddad...",
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "pflproz1-11",
    phase: 5,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1", "Q8"],
    contentC1: {
      title: "Reflexion — Pflegeprozess bei chronischer Erkrankung",
      body: "",
      fallbezug:
        "Denke an Nadia: Sie lebt seit 12 Jahren mit RA. Der aktuelle Pflegeplan gilt fuer den Schub — aber was passiert, wenn der Schub vorbei ist?",
    },
    question: {
      fragetext:
        "Was unterscheidet den Pflegeprozess bei einer chronischen Erkrankung wie Rheuma von dem bei einer akuten Erkrankung?",
      optionen: [
        {
          text: "Bei chronischen Erkrankungen braucht man keinen Pflegeprozess, weil die Patienten ihre Krankheit kennen",
          isCorrect: false,
          explanation:
            "Auch erfahrene Patienten wie Nadia brauchen professionelle Pflege — gerade im Schub. Aber: Ihre Expertise muss einbezogen werden. Der Pflegeprozess ist IMMER noetig, aber bei chronisch Kranken ist er partizipativer.",
        },
        {
          text: "Der Pflegeprozess ist zirkulaer und muss staendig angepasst werden — im Schub andere Ziele als in Remission, Patientenexpertise als Ressource nutzen",
          isCorrect: true,
          explanation:
            "Genau! Bei Rheuma ist der Pflegeprozess besonders dynamisch: Im Schub stehen Schmerzlinderung und Alltagsunterstuetzung im Vordergrund. In Remission geht es um Selbstmanagement, Praevention und Hilfsmitteloptimierung. Langzeitpatienten wie Nadia bringen Expertenwissen mit.",
        },
        {
          text: "Der Pflegeprozess ist bei chronischen Erkrankungen einfacher, weil die Diagnosen immer gleich bleiben",
          isCorrect: false,
          explanation:
            "Die Diagnosen aendern sich staendig! Im Schub dominieren Schmerz und Selbstpflegedefizite. In Remission stehen Praevention und Selbstmanagement im Vordergrund. Neue Komplikationen koennen jederzeit auftreten.",
        },
        {
          text: "Bei chronischen Erkrankungen reicht es, den Pflegeplan einmal zu erstellen und dann umzusetzen",
          isCorrect: false,
          explanation:
            "Ein statischer Pflegeplan funktioniert bei Rheuma nicht. Die Evaluation fuehrt regelmaessig zu Anpassungen. Mindestens bei jedem Statuswechsel (Schub vs. Remission) muss der Plan ueberarbeitet werden.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "pflproz1-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q6", "Q7"],
    contentC1: {
      title: "Praxisauftrag — Pflegeprozess anwenden",
      body: "Du hast den Pflegeprozess bei Rheuma von der Anamnese bis zum Pflegeplan durchgearbeitet. In LE 13 geht es weiter mit der Durchfuehrung und Evaluation — inklusive Schubmanagement und Gelenkschutz.\n\n**Dein Praxisauftrag (fuer den naechsten Praxiseinsatz):**\n\n1. Waehle einen Patienten mit einer chronischen Erkrankung (muss nicht Rheuma sein)\n2. Erhebe eine Pflegeanamnese nach AEDL — notiere fuer jedes relevante AEDL: Problem UND Ressource\n3. Formuliere mindestens eine NANDA-I-Pflegediagnose mit passendem SMART-Ziel\n\n**Reflexionsfragen:**\n- Hast du die Patientin/den Patienten nach IHRER Einschaetzung gefragt?\n- Welche Ressourcen hat der Patient, die du in der Pflegeplanung nutzen kannst?\n- Was wuerde Nadia zu deinem Pflegeplan sagen — fuehlt sie sich als Partnerin oder als \"Pflegefall\"?\n\n**Hilfsmittel-Tipp fuer die Praxis:**\nFrage bei deinem naechsten Einsatz die Ergotherapie: Welche Hilfsmittel werden auf eurer Station am haeufigsten eingesetzt? Knoepfhilfe? Griffverstaerkung? Strumpfanzieher? Probiere sie selbst aus — nur wer sie kennt, kann sie empfehlen.",
      fallbezug:
        "Nadia wartet auf dich in LE 13. Dort setzt du den Pflegeplan um und lernst, was passiert wenn der Schub nachlaeesst — und warum Evaluation der wichtigste Schritt ist.",
      glossarBegriffe: ["Pflegedokumentation"],
    },
    contentB1: {
      title: "Aufgabe fuer die Praxis",
      body: "Du hast den Pflegeprozess gelernt.\nIn der naechsten Lektion (LE 13) geht es weiter.\nDort lernst du: Was tun im Schub?\n\nAufgabe fuer deinen naechsten Praxistag:\n1. Waehle einen Patienten.\n2. Schreibe auf: Was kann der Patient alleine? Wo braucht er Hilfe?\n3. Schreibe ein Ziel auf. Das Ziel muss SMART sein.\n\nFrage dich:\n- Hast du den Patienten gefragt?\n- Was kann der Patient gut?\n- Wuerde Frau Haddad sagen: \"Ihr nehmt mich ernst\"?\n\nTipp: Frage die Ergotherapie auf deiner Station.\nWelche Hilfsmittel gibt es?\nProbiere sie selbst aus!",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Pflegeprozess",
    erklaerung:
      "Systematischer, zirkulaerer Ablauf in 6 Schritten: Anamnese, Diagnose, Ziele, Planung, Durchfuehrung, Evaluation",
  },
  {
    begriff: "Pflegeanamnese",
    erklaerung:
      "Systematische Erhebung des Pflegebedarfs bei Aufnahme — erfasst Probleme UND Ressourcen",
  },
  {
    begriff: "AEDL",
    erklaerung:
      "Aktivitaeten und existenzielle Erfahrungen des Lebens — Pflegemodell nach Krohwinkel mit 13 Lebensbereichen",
  },
  {
    begriff: "NANDA-I",
    erklaerung:
      "Internationales Klassifikationssystem fuer Pflegediagnosen — aktuelle Ausgabe 2024-2026 mit 277 Diagnosen",
  },
  {
    begriff: "Pflegediagnose",
    erklaerung:
      "Standardisierte Benennung eines Pflegeproblems nach NANDA-I — Grundlage fuer Pflegeziele und -massnahmen",
  },
  {
    begriff: "SMART-Ziele",
    erklaerung:
      "Zielformulierung: Spezifisch, Messbar, Akzeptiert, Realistisch, Terminiert",
  },
  {
    begriff: "Selbstpflegedefizit",
    erklaerung:
      "NANDA-I-Diagnose: Patient kann eine Selbstpflegeaktivitaet nicht selbststaendig durchfuehren (Kleiden, Koerperpflege, Essen)",
  },
  {
    begriff: "Ulnardeviation",
    erklaerung:
      "Typische Fehlstellung bei RA: Finger weichen zur Kleinfingerseite (ulnar) ab — Zeichen fortgeschrittener Gelenkzerstoerung",
  },
  {
    begriff: "MCP-Gelenke",
    erklaerung:
      "Metakarpophalangealgelenke — Fingergrundgelenke, bei RA haeufig als erstes betroffen",
  },
  {
    begriff: "Gelenkschutz",
    erklaerung:
      "Massnahmen zur Schonung der Gelenke im Alltag: Grosse Gelenke statt kleine belasten, Hilfsmittel nutzen, ergonomische Haltung",
  },
  {
    begriff: "Hilfsmittel",
    erklaerung:
      "Geraete zur Unterstuetzung im Alltag bei Rheuma: Knoepfhilfe, Griffverstaerkung, Strumpfanzieher, ergonomisches Besteck",
  },
  {
    begriff: "Pflegedokumentation",
    erklaerung:
      "Schriftliche Erfassung aller pflegerischen Massnahmen, Beobachtungen und Ergebnisse — rechtlich und fachlich Pflicht",
  },
];
