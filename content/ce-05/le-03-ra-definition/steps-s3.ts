// Lektion 03: RA — Definition, Ursachen, Pathomechanismus
// CE 05 — Block B: Rheumatoide Arthritis
// Session 3: "Transfer & Pruefung" (Neuer Patient: Elisabeth Richter)
// Generiert durch Didaktik-Loop v2 — 2026-03-22

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // ─── Step 1: Standort-MC (testet S1+S2-Wissen) ───
  {
    stepId: "ra-def-s3-01",
    lernziel: "ce05-le03-ra-pathomechanismus",
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Standortbestimmung",
      body: "Der RA-Pathomechanismus hat 4 Phasen — welche fuehrt zum bleibenden Schaden?",
    },
    question: {
      fragetext:
        "Welche Phase des RA-Pathomechanismus fuehrt zur irreversiblen Gelenkzerstoerung?",
      optionen: [
        {
          text: "Phase 1: Initiation (T-Zell-Aktivierung)",
          isCorrect: false,
          explanation:
            "Falsch. Phase 1 ist nur der Startschuss — T-Zellen werden aktiviert, aber es gibt noch keinen Schaden.",
        },
        {
          text: "Phase 2: Entzuendung (Zytokinfreisetzung)",
          isCorrect: false,
          explanation:
            "Falsch. Phase 2 verursacht Schmerz und Schwellung, aber noch keine strukturelle Zerstoerung.",
        },
        {
          text: "Phase 3: Synovitis (Pannusbildung)",
          isCorrect: false,
          explanation:
            "Fast! Der Pannus bildet sich in Phase 3, aber die eigentliche Zerstoerung passiert in Phase 4.",
        },
        {
          text: "Phase 4: Destruktion (Pannus zerstoert Knorpel/Knochen)",
          isCorrect: true,
          explanation:
            "Richtig! Phase 4 = irreversible Zerstoerung. Der Pannus frisst Knorpel und Knochen. Zerstoerter Knorpel waechst nicht nach.",
        },
      ],
    },
  },

  // ─── Step 2: Story — Frau Richter ───
  {
    stepId: "ra-def-s3-02",
    lernziel: "ce05-le03-kommunikation",
    phase: 1,
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    contentC1: {
      title: "Neue Patientin: Elisabeth Richter",
      body: "Eine neue Patientin wird auf die Innere Station aufgenommen. Aufnahmegespraech.",
    },
    contentB1: {
      title: "Eine neue Patientin",
      body: "Du arbeitest auf der Station. Eine neue Patientin kommt. Du machst die Aufnahme.",
    },
    question: {
      patientName: "Elisabeth Richter",
      fragetext: "Frau Richter stellt sich vor.",
      dialogPhases: [
        {
          context:
            "Frau Richter, 67 Jahre, betritt das Zimmer. Sie bewegt sich steif und langsam. Ihre Haende zeigen sichtbare Fehlstellungen — die Finger weichen nach aussen ab (Ulnardeviation). Sie sagt: 'Guten Tag, ich bin Stammgast hier. Dritter Schub in zwei Jahren. Aber diesmal ist der Hals auch dabei — das macht mir Angst.'",
          vitals:
            "Aufnahme: RR 138/82, Puls 84, Temp 37.4 C, CRP 58 mg/l, DAS28 5.8",
          options: [
            {
              text: "Willkommen Frau Richter. Erzaehlen Sie mir mehr — seit wann ist der Hals beteiligt? Wie geht es Ihnen heute Morgen?",
              patientResponse:
                "Seit etwa 3 Wochen. Ich kann den Kopf kaum drehen. Und morgens... ich brauche 90 Minuten bis ich ueberhaupt aufstehen kann. Meine Enkelin kommt um 8 zum Fruehstueck und ich liege noch im Bett.",
              score: 3,
              feedback:
                "Sehr gut! Du fragst gezielt nach Verlauf und aktuellen Einschraenkungen. Die HWS-Beteiligung ist ein Alarmsignal bei RA.",
            },
            {
              text: "Setzen Sie sich erstmal. Ich hole den Arzt.",
              patientResponse:
                "Ja... ich kenne den Ablauf. Aber ich haette gerne erstmal jemanden der mir zuhoert.",
              score: 1,
              feedback:
                "Zu schnell. Frau Richter will gehoert werden. Als Pflegekraft bist du der erste Ansprechpartner — nimm dir Zeit fuer die Aufnahme.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 2b: DAS28-Erklaerung (Wissen aufbauen!) ───
  {
    stepId: "ra-def-s3-02b",
    lernziel: "ce05-le03-ra-verlauf",
    phase: 1,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Wie misst man RA-Aktivitaet?",
      body: "Frau Richter hat einen DAS28 von 5.8. Was bedeutet das?\n\nDer DAS28 (Disease Activity Score) misst die Krankheitsaktivitaet bei RA anhand von 28 Gelenken:\n\n| DAS28 | Bedeutung |\n|-------|----------|\n| < 2.6 | Remission |\n| 2.6-3.2 | Niedrige Aktivitaet |\n| 3.2-5.1 | Moderate Aktivitaet |\n| > 5.1 | Hohe Aktivitaet |\n\nFrau Richter: DAS28 = 5.8 = hohe Krankheitsaktivitaet. Starke Entzuendung, viele betroffene Gelenke, dringender Handlungsbedarf.",
      glossarBegriffe: ["DAS28"],
    },
    contentB1: {
      title: "Wie schlimm ist die Entzuendung?",
      body: "Aerzte messen, wie aktiv die RA ist. Dafuer gibt es den DAS28-Wert.\n\nNiedrig (unter 2.6) = fast keine Entzuendung.\nHoch (ueber 5.1) = starke Entzuendung.\n\nFrau Richter hat 5.8. Das ist HOCH. Sie braucht dringend eine bessere Therapie.",
    },
  },

  // ─── Step 2c: Brilliant — Warum versagt die Therapie? ───
  {
    stepId: "ra-def-s3-02c",
    lernziel: "ce05-le03-ra-therapie",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4"],
    contentC1: {
      title: "Denkanstoß",
      body: "Frau Richter nimmt seit 6 Jahren MTX — ein Medikament das die Entzuendung bremsen soll. Trotzdem hat sie einen schweren Schub mit DAS28 = 5.8.",
      fallbezug: "Was glaubst du — BEVOR wir es erklaeren?",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Frau Richter nimmt seit 6 Jahren Medikamente. Trotzdem ist die Entzuendung stark. Warum?",
    },
    question: {
      fragetext:
        "Frau Richter nimmt seit 6 Jahren MTX. Trotzdem hat sie einen schweren Schub. Was glaubst du — warum?",
      optionen: [
        {
          text: "Sie hat ihre Medikamente nicht regelmaessig genommen",
          isCorrect: false,
          explanation:
            "Moeglich — aber Frau Richter fuehrt seit 8 Jahren ein Tagebuch, sehr zuverlaessig. Der Grund liegt woanders.",
        },
        {
          text: "Die Entzuendung kann sich veraendern und staerker werden als MTX sie kontrollieren kann",
          isCorrect: true,
          explanation:
            "Richtig gedacht! Die RA-Aktivitaet kann schwanken. Wenn csDMARDs wie MTX nicht reichen, kommen Biologika ins Spiel.",
        },
        {
          text: "MTX verliert nach einigen Jahren automatisch seine Wirkung",
          isCorrect: false,
          explanation:
            "Nicht ganz. MTX KANN jahrelang wirken. Das Problem ist nicht das Medikament, sondern dass die Krankheitsaktivitaet sich aendern kann.",
        },
        {
          text: "RA kann man sowieso nicht behandeln",
          isCorrect: false,
          explanation:
            "Falsch! RA ist behandelbar. Es gibt viele wirksame Medikamente. Das Ziel ist Remission (DAS28 < 2.6). Mehr in LE 05.",
        },
      ],
    },
  },

  // ─── Step 3: Transfer — Pannus nach 8 Jahren ───
  {
    stepId: "ra-def-s3-03",
    lernziel: "ce05-le03-ra-pathomechanismus",
    phase: 2,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "8 Jahre RA — was der Pannus angerichtet hat",
      body: "Frau Richters Haende zeigen das Ergebnis von 8 Jahren Pannuswachstum:\n\nUlnardeviation — die Finger weichen nach aussen ab, weil der Pannus die Sehnen und Baender zerstoert hat.\n\nDas ist Phase 4 des Pathomechanismus in Aktion: Irreversible Destruktion. Der Knorpel ist abgebaut, die Knochenstruktur veraendert.\n\nBei Mehmet (LE Anfang) war der Pannus noch am Anfang. Bei Frau Richter hat er 8 Jahre gearbeitet.",
      fallbezug:
        "Frau Richter zeigt die Langzeitfolgen dessen, was bei Mehmet gerade erst beginnt.",
      glossarBegriffe: ["Pannus", "Extraartikulaer"],
    },
    contentB1: {
      title: "Was ist in 8 Jahren passiert?",
      body: "Frau Richters Finger sind verformt. Sie zeigen nach aussen. Das nennt man Ulnardeviation.\n\nDer Grund: Der Pannus hat 8 Jahre lang den Knorpel und die Knochen angegriffen. Das ist nicht mehr rueckgaengig zu machen.\n\nBei Mehmet hat die Krankheit gerade erst angefangen. Bei Frau Richter sieht man, was OHNE fruehe Therapie passiert.",
    },
  },

  // ─── Step 4: MC Ulnardeviation ───
  {
    stepId: "ra-def-s3-04",
    lernziel: "ce05-le03-ra-pathomechanismus",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Sichtbare Folgen",
      body: "Frau Richters Finger zeigen eine deutliche Ulnardeviation. Welche Phase des RA-Pathomechanismus hat das verursacht?",
    },
    question: {
      fragetext:
        "Welche Phase des Pathomechanismus hat die Ulnardeviation bei Frau Richter verursacht?",
      optionen: [
        {
          text: "Phase 1: Initiation",
          isCorrect: false,
          explanation:
            "Falsch. Phase 1 ist nur der Beginn — die T-Zellen werden aktiviert. Sichtbare Schaeden entstehen spaeter.",
        },
        {
          text: "Phase 2: Entzuendung (Zytokinfreisetzung)",
          isCorrect: false,
          explanation:
            "Falsch. Phase 2 ist die Entzuendungsreaktion. Sie verursacht Schmerz und Schwellung, aber noch keine strukturellen Schaeden.",
        },
        {
          text: "Phase 3: Synovitis (Pannusbildung)",
          isCorrect: false,
          explanation:
            "Fast! Der Pannus bildet sich in Phase 3, aber die eigentliche Zerstoerung passiert in Phase 4.",
        },
        {
          text: "Phase 4: Destruktion (Pannus zerstoert Knorpel/Knochen)",
          isCorrect: true,
          explanation:
            "Richtig! Phase 4: Der Pannus hat ueber Jahre Knorpel, Knochen und Sehnen zerstoert — die Gelenke verloren ihre Stabilitaet.",
        },
      ],
    },
  },

  // ─── Step 5: Branching — Therapieversagen ───
  {
    stepId: "ra-def-s3-05",
    lernziel: "ce05-le03-ra-therapie",
    phase: 3,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q4"],
    contentC1: {
      title: "Warum wirkt das MTX nicht mehr?",
      body: "Frau Richter fragt: 'Warum wirkt das MTX nicht mehr? 6 Jahre hat es gehalten!'",
      fallbezug:
        "Frau Richter ist informiert und erwartet eine fachlich fundierte Antwort.",
    },
    contentB1: {
      title: "Frau Richter fragt nach ihren Medikamenten",
      body: "Frau Richter nimmt seit 6 Jahren MTX. Jetzt wirkt es nicht mehr. Sie fragt: 'Warum?'",
    },
    question: {
      fragetext:
        "Frau Richter fragt: 'Warum wirkt das MTX nach 6 Jahren nicht mehr?' Was ist die beste Antwort?",
      branchingOptions: [
        {
          text: "MTX verliert grundsaetzlich nach einigen Jahren seine Wirkung — das ist normal",
          feedback:
            "Nicht ganz. MTX kann jahrelang wirken. Die Entzuendung kann sich aber veraendern und staerker werden als MTX sie kontrolliert.",
          isCorrect: false,
        },
        {
          text: "Die Entzuendung ist staerker geworden als MTX sie kontrollieren kann. Es gibt aber andere Medikamente wie Biologika, die helfen koennen.",
          feedback:
            "Richtig! Wenn csDMARDs wie MTX nicht ausreichen, kommen bDMARDs (Biologika) ins Spiel — z.B. TNF-alpha-Blocker.",
          isCorrect: true,
        },
        {
          text: "Sie haben das Medikament wahrscheinlich nicht regelmaessig genommen",
          feedback:
            "Problematisch! Du unterstellst Non-Compliance ohne nachzufragen. Frau Richter fuehrt seit 8 Jahren ein Tagebuch — immer erst fragen.",
          isCorrect: false,
        },
      ],
    },
  },

  // ─── Step 6: Sorting Krankheitsverlauf ───
  {
    stepId: "ra-def-s3-06",
    lernziel: "ce05-le03-ra-verlauf",
    phase: 3,
    stepType: "sorting",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Frau Richters Krankheitsverlauf",
      body: "RA entwickelt sich ueber Jahre — von ersten Symptomen bis zur stationaeren Aufnahme.",
    },
    question: {
      fragetext: "Bringe Frau Richters Verlauf in die richtige Reihenfolge:",
      sortItems: [
        "Erste Symptome: Morgensteifigkeit, Gelenkschwellungen",
        "Diagnose RA + Start MTX-Therapie",
        "Stabile Phase mit niedriger Krankheitsaktivitaet",
        "Schuebe werden haeufiger, MTX reicht nicht mehr",
        "Ulnardeviation sichtbar, HWS-Beteiligung neu",
        "Stationaere Aufnahme, DAS28 = 5.8",
      ],
    },
  },

  // ─── Step 6b: Cortison-Nebenwirkung erklaeren ───
  {
    stepId: "ra-def-s3-06b",
    lernziel: "ce05-le03-ra-therapie",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4"],
    contentC1: {
      title: "Langzeit-Cortison und seine Nebenwirkungen",
      body: "Frau Richter nimmt seit Jahren Prednisolon 10 mg/Tag. Cortison hemmt die Entzuendung — aber Langzeit-Einnahme hat Nebenwirkungen.\n\nSteroidinduzierte Osteoporose: Cortison hemmt den Knochenaufbau und foerdert den Abbau.\n\nFrau Richters Nebendiagnose Osteoporose ist nicht altersbedingt, sondern medikamentenbedingt.",
    },
    contentB1: {
      title: "Warum hat Frau Richter Osteoporose?",
      body: "Frau Richter nimmt seit Jahren Cortison (Prednisolon). Das hilft gegen die Entzuendung.\n\nAber Cortison hat Nebenwirkungen: Es macht die Knochen duenn und bruechig. Das nennt man Osteoporose.\n\nFrau Richters Osteoporose kommt nicht vom Alter. Sie kommt von den Medikamenten.",
    },
  },

  // ─── Step 7: MC Osteoporose ───
  {
    stepId: "ra-def-s3-07",
    lernziel: "ce05-le03-ra-therapie",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4"],
    contentC1: {
      title: "Nebendiagnose Osteoporose",
      body: "Frau Richter hat als Nebendiagnose eine Osteoporose. Was ist die wahrscheinlichste Ursache in ihrem Fall?",
    },
    question: {
      fragetext:
        "Frau Richter hat Osteoporose. Was ist die wahrscheinlichste Ursache?",
      optionen: [
        {
          text: "Alter allein",
          isCorrect: false,
          explanation:
            "Alter ist EIN Faktor, aber bei Frau Richter gibt es einen staerkeren Grund: ihre Langzeit-Cortisontherapie.",
        },
        {
          text: "Langzeit-Cortisontherapie (Prednisolon)",
          isCorrect: true,
          explanation:
            "Richtig! Glukokortikoide wie Prednisolon foerdern den Knochenabbau (steroidinduzierte Osteoporose). Frau Richter nimmt Prednisolon 10mg/d. Das ist ein haeufiges Problem bei RA-Patienten.",
        },
        {
          text: "Kalziummangel durch falsche Ernaehrung",
          isCorrect: false,
          explanation:
            "Moeglich, aber bei einer RA-Patientin mit Prednisolon-Therapie ist die steroidinduzierte Osteoporose die wahrscheinlichste Ursache.",
        },
        {
          text: "Bewegungsmangel",
          isCorrect: false,
          explanation:
            "Bewegungsmangel kann Osteoporose foerdern, aber bei Frau Richter ist die Langzeit-Cortisontherapie der Hauptgrund.",
        },
      ],
    },
  },

  // ─── Step 8: Vergleich Patient A vs B ───
  {
    stepId: "ra-def-s3-08",
    lernziel: "ce05-le03-ra-verlauf",
    phase: 3,
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Zwei Patienten — eine Erkrankung",
      body: "| | Mehmet Demir | Elisabeth Richter |\n|---|---|---|\n| Alter | 43 | 67 |\n| RA seit | 3 Monaten (V.a.) | 8 Jahren |\n| Setting | Ambulanz | Station |\n| Coping | Verdraengend | Informiert |\n| Risikofaktor | Raucher, 20 PY | Langzeit-Cortison |\n| Gelenke | Geschwollen, noch intakt | Ulnardeviation, HWS |\n| Therapie | Noch keine | MTX (versagt) |\n\nGleiche Erkrankung, voellig andere Pflegesituation. Bei Mehmet geht es um Fruehdiagnose und Lebensstilaenderung. Bei Frau Richter um Therapieanpassung und Alltagsbewaeltigung.",
    },
    contentB1: {
      title: "Mehmet und Frau Richter — ein Vergleich",
      body: "Mehmet ist 43 Jahre alt. Er hat RA seit 3 Monaten. Alles ist neu fuer ihn.\n\nFrau Richter ist 67 Jahre alt. Sie hat RA seit 8 Jahren. Sie kennt die Krankheit gut.\n\nBeide haben RA. Aber die Pflege ist ganz anders:\n- Mehmet braucht Aufklaerung und Motivation\n- Frau Richter braucht neue Therapie und Hilfe im Alltag",
    },
  },

  // ─── Step 9: Freetext Vergleich ───
  {
    stepId: "ra-def-s3-09",
    lernziel: "ce05-le03-ra-verlauf",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Analysiere die Unterschiede",
      body: "Vergleiche die Pflegesituation von Mehmet (Erstdiagnose) und Frau Richter (8 Jahre RA).",
      fallbezug: "Gleiche Erkrankung, verschiedene Pflegebeduerfnisse.",
    },
    contentB1: {
      title: "Vergleiche die zwei Patienten",
      body: "Was ist bei Mehmet anders als bei Frau Richter? Was braucht jeder?",
    },
    question: {
      fragetext:
        "Welche Risikofaktoren hatten Mehmet und Elisabeth jeweils? Was unterscheidet die Pflegesituation bei einer Erstdiagnose von einem 8-jaehrigen Verlauf?",
      musterantwort:
        "Mehmet: Risikofaktoren sind Rauchen (20 PY), genetische Praedisposition (Vater), Stress. Bei der Erstdiagnose geht es um Aufklaerung, Lebensstilaenderung (Rauchstopp), fruehen Therapiebeginn und Angstbewaeltigung. Elisabeth: Kein Rauchen, aber Langzeit-Cortison als Risiko fuer Osteoporose. Nach 8 Jahren geht es um Therapieanpassung (MTX versagt), Alltagsbewaeltigung (kann sich nicht anziehen), psychosoziale Unterstuetzung (lebt allein) und neue Komplikationen (HWS).",
      bewertungskriterien: [
        "Risikofaktoren fuer beide Patienten benannt",
        "Unterschied Erstdiagnose vs. Langzeitverlauf erkannt",
        "Pflegerische Konsequenzen abgeleitet",
      ],
      satzanfaengeB1: [
        "Mehmet hat diese Risikofaktoren: ...",
        "Bei Frau Richter ist es anders, weil...",
        "Die Pflege ist verschieden: Mehmet braucht..., Frau Richter braucht...",
      ],
    },
  },

  // ─── Step 10: Kreuzwortraetsel Gesamt ───
  {
    stepId: "ra-def-s3-10",
    lernziel: "ce05-le03-ra-definition",
    phase: 4,
    stepType: "crossword",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Kreuzwortraetsel — alle 3 Sessions",
      body: "7 zentrale Fachbegriffe aus allen 3 Sessions — von Autoimmun bis Rheumafaktor.",
    },
    question: {
      fragetext: "7 Begriffe aus dem gesamten Thema:",
      crosswordWords: [
        { word: "PANNUS", clue: "Aggressives Gewebe das den Knorpel zerstoert" },
        {
          word: "CITRULLINIERUNG",
          clue: "Proteinveraenderung durch Rauchen in der Lunge",
        },
        { word: "TNFALPHA", clue: "Zentrales Entzuendungszytokin bei RA" },
        {
          word: "SYNOVITIS",
          clue: "Entzuendung der Gelenkinnenhaut (Phase 3)",
        },
        { word: "AUTOIMMUN", clue: "Koerper greift sich selbst an" },
        {
          word: "WINDOW",
          clue: "____ of Opportunity: Zeitfenster fuer fruehe Therapie",
        },
        {
          word: "RHEUMAFAKTOR",
          clue: "Antikoerper gegen IgG, positiv bei 70% der RA-Patienten",
        },
      ],
    },
  },

  // ─── Step 11: Dialog — emotionaler Moment ───
  {
    stepId: "ra-def-s3-11",
    lernziel: "ce05-le03-kommunikation",
    phase: 4,
    stepType: "dialog",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    contentC1: {
      title: "Ein schwieriger Moment",
      body: "Frau Richter liegt in ihrem Bett. Es ist Abend. Sie versucht in ihr Tagebuch zu schreiben.",
      fallbezug:
        "Frau Richter hat 35 Jahre lang an die Tafel geschrieben. Jetzt kann sie keinen Stift mehr halten.",
    },
    contentB1: {
      title: "Abends auf Station",
      body: "Frau Richter will in ihr Tagebuch schreiben. Aber ihre Hand zittert. Der Stift faellt ihr aus der Hand.",
    },
    question: {
      patientName: "Elisabeth Richter",
      fragetext: "Frau Richter versucht zu schreiben.",
      dialogPhases: [
        {
          context:
            "Frau Richter schaut auf ihre Haende. Die Finger sind ulnar abgewichen. Sie sagt leise: 'Diese Haende haben 2000 Kindern Schreiben beigebracht. Und jetzt kann ich selbst keinen Stift mehr halten.' Eine Traene laeuft ihr ueber die Wange.",
          options: [
            {
              text: "Das muss sehr schwer sein fuer Sie. 35 Jahre Lehrerin — das ist eine grosse Leistung. Moechten Sie mir mehr erzaehlen?",
              patientResponse:
                "Wissen Sie, das Schlimmste ist nicht der Schmerz. Das Schlimmste ist, dass ich morgens meine Enkelin nicht fruehstuecken kann weil ich im Bett liege. 90 Minuten Morgensteifigkeit. Sie kommt um 8 und ich liege noch.",
              score: 3,
              feedback:
                "Einfuehlsam und professionell. Du gibst ihr Raum. Die 90-Minuten-Morgensteifigkeit ist ein wichtiger Verlaufsparameter.",
            },
            {
              text: "Vielleicht koennen Sie ein Tablet zum Schreiben benutzen?",
              patientResponse:
                "Ein Tablet... ja, vielleicht. Aber darum geht es nicht. Es geht darum dass mein Koerper mich im Stich laesst.",
              score: 2,
              feedback:
                "Praktisch gedacht, aber Frau Richter braucht gerade Empathie, nicht Problemloesung.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 12: MC Interleaving ───
  {
    stepId: "ra-def-s3-12",
    lernziel: "ce05-le03-ra-definition",
    phase: 4,
    stepType: "mc",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3"],
    contentC1: {
      title: "Interleaving: Anatomie",
      body: "Die Synovialfluessigkeit bei RA ist trueb und zellreich (>2000 Leukozyten/Mikroliter). Was ist NORMAL?",
    },
    question: {
      fragetext:
        "Wie sieht normale, gesunde Synovialfluessigkeit aus?",
      optionen: [
        {
          text: "Klar, viskoes und zellarm",
          isCorrect: true,
          explanation:
            "Richtig! Normale Synovialfluessigkeit ist klar, zaehfluessig und zellarm. Bei RA trueb und voller Entzuendungszellen.",
        },
        {
          text: "Trueb, duennfluessig und zellreich",
          isCorrect: false,
          explanation:
            "Das beschreibt die Synovialfluessigkeit bei ENTZUENDUNG (z.B. RA). Normal ist klar und zellarm.",
        },
        {
          text: "Blutig und dickfluessig",
          isCorrect: false,
          explanation:
            "Falsch. Blutige Gelenkfluessigkeit (Haemarthros) tritt bei Verletzungen auf, nicht im Normalzustand.",
        },
        {
          text: "Es gibt keine Fluessigkeit im gesunden Gelenk",
          isCorrect: false,
          explanation:
            "Falsch! Jedes gesunde Gelenk enthaelt Synovialfluessigkeit — sie schmiert und ernaehrt den Knorpel.",
        },
      ],
    },
  },

  // ─── Step 13: Freetext kritisch-reflexiv ───
  {
    stepId: "ra-def-s3-13",
    lernziel: "ce05-le03-ra-pflege",
    phase: 4,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Vorurteile ueber Rheuma",
      body: "Mehmet hat 3 Monate gewartet bevor er zum Arzt ging. Er dachte: 'Rheuma haben nur alte Frauen' und 'Das geht schon wieder weg.'",
      fallbezug:
        "3 Monate Verzoegerung — bei einem Window of Opportunity von 12 Wochen ist das kritisch.",
    },
    contentB1: {
      title: "Warum warten Patienten zu lange?",
      body: "Mehmet hat 3 Monate gewartet. Er dachte: 'Rheuma ist fuer alte Leute.' Das war ein Fehler. 12 Wochen sind die wichtigste Zeit.",
    },
    question: {
      fragetext:
        "Welche gesellschaftlichen Vorurteile ueber Rheuma koennten dazu beitragen, dass Patienten zu spaet zum Arzt gehen? Was bedeutet das fuer die Pflegepraxis?",
      musterantwort:
        "Vorurteile: (1) Rheuma = alte Leute — fuehrt dazu dass juengere Patienten Symptome ignorieren. (2) Gelenkschmerzen sind normal — Bagatellisierung. (3) Maenner gehen nicht zum Arzt wegen Schmerzen — Geschlechterrolle. Fuer die Pflege bedeutet das: Aufklaerung ist wichtig. Pflegekraefte sollten bei Gelenkbeschwerden hellhoerig werden und an entzuendliche Ursachen denken. Fruehe Erkennung ist entscheidend weil das Window of Opportunity nur 12 Wochen offen ist.",
      bewertungskriterien: [
        "Mindestens 2 gesellschaftliche Vorurteile benannt",
        "Bezug zum Window of Opportunity hergestellt",
        "Konsequenzen fuer die pflegerische Praxis abgeleitet",
      ],
      satzanfaengeB1: [
        "Viele Menschen denken, dass Rheuma...",
        "Das ist ein Problem, weil...",
        "Als Pflegekraft sollte man...",
      ],
    },
  },

  // ─── Step 14: Timer Gesamtreview ───
  {
    stepId: "ra-def-s3-14",
    lernziel: "ce05-le03-ra-definition",
    phase: 5,
    stepType: "timer",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3"],
    contentC1: {
      title: "Final-Quiz!",
      body: "Gesamtreview: RA-Grundlagen, Pathomechanismus und Therapie.",
    },
    question: {
      fragetext: "Letzte Runde — gib alles!",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Richtige Reihenfolge: Initiation → ? → Synovitis → ?",
          options: [
            "Destruktion, Entzuendung",
            "Entzuendung, Destruktion",
            "Pannus, Remission",
            "Synovitis, Initiation",
          ],
          correctIndex: 1,
        },
        {
          question: "Staerkster modifizierbarer Risikofaktor?",
          options: ["Stress", "Rauchen", "HLA-DR4", "Alter"],
          correctIndex: 1,
        },
        {
          question: "Was zerstoert bei RA den Knorpel?",
          options: ["Arthrose", "Pannus", "Cortison", "Bakterien"],
          correctIndex: 1,
        },
        {
          question: "RA oder Arthrose: symmetrischer Befall?",
          options: ["RA", "Arthrose", "Beide", "Keine"],
          correctIndex: 0,
        },
        {
          question: "Window of Opportunity = wie viele Wochen?",
          options: ["4 Wochen", "12 Wochen", "6 Monate", "1 Jahr"],
          correctIndex: 1,
        },
        {
          question:
            "Interleaving (LE 02): Was sind die 5 Entzuendungszeichen?",
          options: [
            "Roetung, Schwellung, Waerme, Schmerz, Funktionseinschraenkung",
            "Fieber, Husten, Schnupfen, Schmerz, Muedigkeit",
            "Roetung, Juckreiz, Schwellung, Blaesse, Kaelte",
            "Schwellung, Fieber, Durchfall, Erbrechen, Schmerz",
          ],
          correctIndex: 0,
        },
        {
          question:
            "Interleaving (LE 01): Welche gehoert NICHT zum rheumatischen Formenkreis?",
          options: ["RA", "Gicht", "Arthrose", "Pneumonie"],
          correctIndex: 3,
        },
      ],
    },
  },

  // ─── Step 15: Branching — Kurkuma ───
  {
    stepId: "ra-def-s3-15",
    lernziel: "ce05-le03-kommunikation",
    phase: 5,
    stepType: "branching",
    bloomLevel: 5,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1"],
    contentC1: {
      title: "Frau Richter und das Internet",
      body: "Frau Richter hat recherchiert und moechte etwas besprechen.",
      fallbezug:
        "Als informierte Patientin hat Frau Richter eigene Ideen zur Therapie.",
    },
    contentB1: {
      title: "Frau Richter hat im Internet gelesen",
      body: "Frau Richter sagt: 'Ich habe gelesen, dass Kurkuma gegen Rheuma hilft.'",
    },
    question: {
      fragetext:
        "Frau Richter sagt: 'Ich hab im Internet gelesen, Kurkuma hilft gegen Rheuma. Ich moechte das MTX absetzen.' Wie reagierst du?",
      branchingOptions: [
        {
          text: "Auf keinen Fall! Nehmen Sie Ihre Medikamente!",
          feedback:
            "Zu autoritaer! Patienten haben das Recht auf eigene Entscheidungen. Informieren, nicht befehlen.",
          isCorrect: false,
        },
        {
          text: "Kurkuma kann ergaenzend helfen, aber es ersetzt die RA-Therapie nicht. Sprechen Sie mit Ihrer Aerztin bevor Sie MTX absetzen.",
          feedback:
            "Sehr gut! Recherche ernst nehmen, sachlich informieren, an Aerztin verweisen — Shared Decision Making.",
          isCorrect: true,
        },
        {
          text: "Da steht viel Unsinn im Internet. Hoeren Sie nicht darauf.",
          feedback:
            "Abwertend! Du diskreditierst ihre Informationsquelle. Frau Richter ist gebildet — Muendigkeit respektieren.",
          isCorrect: false,
        },
      ],
    },
  },

  // ─── Step 16: Categorize Fakten vs. Vorurteile ───
  {
    stepId: "ra-def-s3-16",
    lernziel: "ce05-le03-ra-definition",
    phase: 5,
    stepType: "categorize",
    bloomLevel: 4,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q1", "Q3"],
    contentC1: {
      title: "Fakten vs. Vorurteile",
      body: "Über Rheuma kursieren viele Vorurteile. Als Pflegekraft musst du Fakten von Mythen unterscheiden können.",
    },
    question: {
      fragetext: "Fakt oder Vorurteil? Ordne richtig zu:",
      categories: [
        { name: "Fakt ueber RA" },
        { name: "Vorurteil ueber Rheuma" },
      ],
      categoryItems: [
        {
          text: "Nur aeltere Frauen bekommen Rheuma",
          correctCategory: 1,
        },
        {
          text: "RA ist eine Autoimmunerkrankung",
          correctCategory: 0,
        },
        {
          text: "Rheuma ist nicht so schlimm",
          correctCategory: 1,
        },
        {
          text: "RA kann auch Organe wie Lunge und Herz befallen",
          correctCategory: 0,
        },
        {
          text: "Rauchen hat nichts mit Rheuma zu tun",
          correctCategory: 1,
        },
        {
          text: "Fruehe Therapie innerhalb von 12 Wochen ist entscheidend",
          correctCategory: 0,
        },
        {
          text: "Rheuma kommt vom schlechten Wetter",
          correctCategory: 1,
        },
        {
          text: "Gelenkzerstoerung durch RA ist irreversibel",
          correctCategory: 0,
        },
      ],
    },
  },

  // ─── Step 17: Freetext Pflegebericht ───
  {
    stepId: "ra-def-s3-17",
    lernziel: "ce05-le03-ra-pflege",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 6,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    contentC1: {
      title: "Pflegebericht schreiben",
      body: "Formuliere einen kurzen Aufnahmebericht fuer Herrn Demir bei seiner Erstvorstellung in der rheumatologischen Ambulanz. Nutze Fachsprache.",
      fallbezug: "Erstvorstellung Mehmet Demir, 43 Jahre.",
    },
    contentB1: {
      title: "Schreibe einen Bericht",
      body: "Schreibe auf, was wichtig ist fuer die Akte von Herrn Demir. Benutze Fachwoerter.",
    },
    question: {
      fragetext:
        "Formuliere einen kurzen Aufnahmebericht fuer Herrn Demir. Verwende Fachsprache. Nenne: Vorstellungsgrund, Anamnese, aktuelle Beschwerden, pflegerisch relevante Informationen.",
      musterantwort:
        "Patient Mehmet Demir, 43 Jahre, stellt sich erstmalig in der rheumatologischen Ambulanz vor. Vorstellungsgrund: Symmetrische Gelenkschwellungen und -schmerzen der MCP-Gelenke II-IV beidseits seit ca. 3 Monaten, progredient. Morgensteifigkeit >60 Minuten. Risikofaktoren: Nikotinabusus (20 Pack-Years), positive Familienanamnese. Beruf: Fliesenleger (selbststaendig), berichtet ueber zunehmende Einschraenkungen bei der Arbeit. V.a. Rheumatoide Arthritis.",
      bewertungskriterien: [
        "Fachsprachlich korrekte Formulierung (Fachbegriffe verwendet)",
        "Relevante Informationen vollstaendig (Symptome, Risikofaktoren, Beruf)",
        "Pflegerisch relevante Informationen erkannt (Einschraenkungen im Alltag)",
      ],
      satzanfaengeB1: [
        "Der Patient heisst... und ist... Jahre alt.",
        "Er kommt zum Arzt, weil...",
        "Wichtig fuer die Pflege ist...",
      ],
    },
  },

  // ─── Step 18: MC Labordiagnostik ───
  {
    stepId: "ra-def-s3-18",
    lernziel: "ce05-le03-ra-definition",
    phase: 5,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2"],
    contentC1: {
      title: "Bruecke zur naechsten LE",
      body: "Welche Laborwerte sind fuer die RA-Diagnostik am SPEZIFISCHSTEN?",
      glossarBegriffe: ["Anti-CCP", "Rheumafaktor (RF)"],
    },
    question: {
      fragetext:
        "Welche Laborwerte sind fuer die RA-Diagnostik am spezifischsten?",
      optionen: [
        {
          text: "CRP + BSG (Entzuendungswerte)",
          isCorrect: false,
          explanation:
            "Falsch. CRP und BSG zeigen eine Entzuendung an, sind aber UNSPEZIFISCH — sie sind bei vielen Erkrankungen erhoeht, nicht nur bei RA.",
        },
        {
          text: "Anti-CCP + Rheumafaktor (RF)",
          isCorrect: true,
          explanation:
            "Richtig! Anti-CCP ist hochspezifisch fuer RA (>95%). Der Rheumafaktor ist weniger spezifisch, aber beide zusammen machen die Diagnose wahrscheinlich.",
        },
        {
          text: "Leukozyten + Thrombozyten",
          isCorrect: false,
          explanation:
            "Falsch. Diese Werte koennen bei RA veraendert sein, sind aber fuer die Diagnose nicht spezifisch.",
        },
        {
          text: "Leberwerte (GOT + GPT)",
          isCorrect: false,
          explanation:
            "Falsch. Leberwerte haben nichts mit der RA-Diagnostik zu tun. Sie werden aber vor MTX-Therapie kontrolliert (Nebenwirkung).",
        },
      ],
    },
  },

  // ─── Step 19: Ausblick LE 04 ───
  {
    stepId: "ra-def-s3-19",
    lernziel: "ce05-le03-ra-verlauf",
    phase: 6,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "Geschafft — Ausblick LE 04",
      body: "In LE 04 geht es weiter:\n- Welche Symptome hat RA genau?\n- Welche Formen gibt es?\n- Wie wird RA diagnostiziert?\n\nMehmet wartet noch auf seine vollstaendigen Ergebnisse. Anti-CCP, DAS28, Roentgen — was werden sie zeigen?",
    },
    contentB1: {
      title: "Geschafft!",
      body: "Naechste Lektion:\n- Welche Symptome hat RA?\n- Wie stellt der Arzt die Diagnose?\n\nMehmet wartet auf seine Ergebnisse.",
    },
  },

  // ─── Step 20: Gesamt-Checkpoint ───
  {
    stepId: "ra-def-s3-20",
    lernziel: "ce05-le03-ra-definition",
    phase: 6,
    stepType: "selfrating",
    bloomLevel: 3,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    contentC1: {
      title: "LE 03 — Gesamtergebnis",
      body: "5 Key Takeaways aus allen 3 Sessions:\n\n1. RA = Autoimmunerkrankung — chronisch, systemisch, symmetrisch\n2. Ursachen = Gene + Umwelt + Trigger — multifaktoriell, Rauchen staerkster Risikofaktor\n3. 4 Phasen: Initiation → Zytokine → Synovitis/Pannus → Destruktion\n4. Pannus zerstoert irreversibel — daher Window of Opportunity (12 Wochen!)\n5. Gleiche Erkrankung, verschiedene Pflegesituationen — Erstdiagnose vs. Langzeitverlauf\n\nEmpfehlung: Wiederholung in 3 Tagen (Spaced Repetition).",
    },
    contentB1: {
      title: "Das hast du in allen 3 Sessions gelernt",
      body: "5 wichtige Dinge:\n\n1. RA ist eine Autoimmunerkrankung\n2. Rauchen ist der groesste Risikofaktor\n3. 4 Schritte im Gelenk: von Immunzellen bis Knorpelzerstoerung\n4. Fruehe Therapie ist entscheidend\n5. Jeder Patient ist anders — die Pflege muss sich anpassen\n\nTipp: Wiederhole das Thema in 3 Tagen!",
    },
    question: {
      fragetext: "Wie sicher fuehlst du dich insgesamt mit dem Thema RA?",
      optionen: [
        {
          text: "Sehr sicher — ich kann RA erklaeren, Ursachen benennen und den Pathomechanismus beschreiben",
          isCorrect: false,
          explanation:
            "Fantastisch! Du bist bereit fuer LE 04: Symptome, Formen und Diagnose.",
        },
        {
          text: "Ziemlich sicher — Grundlagen sitzen, Details muss ich noch festigen",
          isCorrect: false,
          explanation:
            "Sehr gut! Die Details kommen in den naechsten LEs nochmal vor. Wiederholung in 3 Tagen hilft.",
        },
        {
          text: "Noch etwas unsicher — moechte das Thema nochmal wiederholen",
          isCorrect: false,
          explanation:
            "Kein Problem! Du kannst jede Session jederzeit nochmal machen. Wiederholung ist der beste Weg zum Lernerfolg.",
        },
      ],
    },
  },
];
