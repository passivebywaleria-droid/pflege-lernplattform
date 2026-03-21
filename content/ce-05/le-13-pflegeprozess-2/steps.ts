// Lektion 13: Der pflegerische Prozess bei Rheuma — Teil 2
// CE 05 — Block D: Pflegerisches Handeln
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-13-pflegeprozess-2",
  ceId: "ce-05",
  title: "Der pflegerische Prozess bei Rheuma — Teil 2",
  titleShort: "Pflegeprozess 2",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-IV.1"],
  bloomStufen: [3, 5],
  voraussetzungen: ["le-12-pflegeprozess-1"],
  leitfall: {
    name: "Heinrich Vogel",
    alter: 72,
    beruf: "Pensionierter Tischlermeister",
    diagnose:
      "RA seit 8 Jahren, akuter Schub nach eigenmaechtigem MTX-Absetzen (DAS28 5,2)",
    setting: "Rheumatologische Tagesklinik",
    kernproblem:
      "Sturzrisiko nach Sturz in Werkstatt, falsche Waermeanwendung, Fatigue, Identitaetsverlust durch Handlungsunfaehigkeit",
  },
  glossarCount: 12,
  quellenCount: 10,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "pflproz2-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Wie sicher bist du bei Pflegeinterventionen?",
      body: "In LE 12 hast du gelernt, wie man eine Pflegeanamnese erhebt, Pflegediagnosen formuliert und SMART-Ziele setzt. Jetzt geht es um die naechsten Schritte: Pflegemassnahmen durchfuehren und evaluieren.\n\nTeil 2 des Pflegeprozesses umfasst die konkrete Umsetzung: Welche Intervention passt wann? Was machst du im akuten Schub anders als in der Remission? Wie erkennst du, ob deine Massnahmen wirken — und was tust du, wenn nicht?\n\nDu lernst Schubmanagement, Gelenkschutz, Sturzprophylaxe, Fatigue-Management und den richtigen Einsatz von Waerme und Kaelte. Am Ende kannst du einen Evaluationsbericht schreiben.",
      glossarBegriffe: ["Schubmanagement", "Evaluation"],
    },
    contentB1: {
      title: "Wie sicher bist du bei der Pflege?",
      body: "In LE 12 hast du gelernt:\n- Informationen sammeln\n- Probleme benennen\n- Ziele setzen\n\nJetzt kommt der naechste Teil:\nDu fuehrst Massnahmen durch.\nUnd du pruefst: Hat es funktioniert?\n\nIn dieser Lektion lernst du:\n- Was tun im akuten Schub?\n- Wann Waerme, wann Kaelte?\n- Wie schuetzt man Gelenke?\n- Wie verhindert man Stuerze?\n- Was tun bei grosser Muedigkeit?\n\nAm Ende schreibst du einen Bericht.",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich bei der Durchfuehrung und Evaluation von Pflegemassnahmen bei Rheuma-Patienten?",
    },
  },
  {
    stepId: "pflproz2-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q7"],
    contentC1: {
      title: "Vom Plan zur Tat",
      body: "",
    },
    question: {
      fragetext:
        "Ein Pflegeplan fuer einen Rheuma-Patienten wurde erstellt. Was ist der WICHTIGSTE Unterschied zwischen Pflegeplanung und Pflegedurchfuehrung?",
      optionen: [
        {
          text: "Die Durchfuehrung ist einfacher als die Planung, weil man nur noch abarbeitet",
          isCorrect: false,
          explanation:
            "Die Durchfuehrung ist keineswegs nur abarbeiten. Sie erfordert laufende Beobachtung, Anpassung an die aktuelle Situation (z.B. Schub vs. Remission) und fachliche Entscheidungen in Echtzeit. Ein Patient im akuten Schub braucht andere Interventionen als gestern noch geplant.",
        },
        {
          text: "Die Durchfuehrung erfordert laufende klinische Beurteilung — Massnahmen muessen an den aktuellen Zustand angepasst werden",
          isCorrect: true,
          explanation:
            "Richtig! Der Pflegeplan ist ein Rahmen, aber die Durchfuehrung erfordert klinisches Urteilsvermoegen. Ein Rheuma-Patient kann morgens im Schub sein und nachmittags besser — die Pflegekraft muss Massnahmen situativ anpassen und die Reaktion des Patienten beobachten.",
        },
        {
          text: "In der Durchfuehrung muss man sich exakt an den Plan halten, ohne Abweichungen",
          isCorrect: false,
          explanation:
            "Starre Plantreue ist bei Rheuma kontraproduktiv. Der Zustand schwankt — manchmal taeglich. Eine Pflegekraft, die stur den Plan abarbeitet, ohne den aktuellen Zustand zu beruecksichtigen, handelt nicht professionell. Anpassung und Evaluation sind Kernelemente.",
        },
        {
          text: "Die Durchfuehrung betrifft nur die Pflegekraft, der Patient ist dabei passiv",
          isCorrect: false,
          explanation:
            "Gerade bei chronisch Kranken ist der Patient aktiver Partner der Durchfuehrung. Gelenkschutz, Fatigue-Management und Sturzprophylaxe funktionieren nur, wenn der Patient mitmacht. Partizipation ist keine Option — sie ist Voraussetzung fuer den Erfolg.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "pflproz2-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: '"Ohne meine Werkstatt bin ich nichts"',
      body: 'Heinrich Vogel, 72 Jahre, kommt in die rheumatologische Tagesklinik. Ueberwiesen vom Hausarzt — nach einem Sturz in seiner Werkstatt im Keller.\n\nHeinrich war 45 Jahre lang selbststaendiger Tischlermeister. Seit der Pension vor 7 Jahren ist die Kellerwerkstatt sein Lebensmittelpunkt: Regale bauen fuer die Tochter, Spielzeug fuer die Enkel, Reparaturen fuer die Nachbarn. Seine Frau Margret ist vor 5 Jahren an Krebs gestorben. "Die Werkstatt hat mich ueber die schlimmste Zeit gebracht", sagt Heinrich.\n\nRA seit 8 Jahren. Drei Jahre lang stabile Remission unter MTX und Leflunomid. Vor 4 Monaten hat Heinrich das MTX eigenmaechtig abgesetzt: "Mir ging\'s doch gut — wozu brauche ich das Gift?" Sein Hausarzt hat davon nichts erfahren.\n\nJetzt: DAS28 5,2 (hoch aktiv). Beide Kniegelenke geschwollen, Handgelenke schmerzen. Gestern ist Heinrich in der Werkstatt ueber einen Holzbalken gestolpert — Haematom am linken Unterarm, keine Fraktur. Seit Wochen legt er sich abends eine Waermflasche auf die Knie. Die Knie sind staerker geschwollen als je zuvor.\n\nHeinrich sagt: "Ich brauche keine Hilfe. Geben Sie mir einfach wieder die Tabletten, dann wird das schon." Tochter Lisa (42) am Telefon: "Papa, du bist dreimal diese Woche fast gestuerzt. Bitte hoer auf die Aerzte."',
      fallbezug:
        "Heinrich begleitet dich durch diese gesamte Lektion. Du wirst Pflegeinterventionen fuer ihn planen, durchfuehren und evaluieren — von Sturzprophylaxe bis Fatigue-Management.",
      glossarBegriffe: ["Remission", "Morgensteifigkeit"],
    },
    contentB1: {
      title: "Herr Vogel kommt in die Klinik",
      body: "Heinrich Vogel ist 72 Jahre alt.\nEr war 45 Jahre lang Tischlermeister.\nEr hat eine Werkstatt im Keller.\nDie Werkstatt ist sehr wichtig fuer ihn.\n\nSeine Frau ist vor 5 Jahren gestorben.\nDie Werkstatt hat ihm geholfen.\nEr baut Regale und Spielzeug.\n\nHerr Vogel hat seit 8 Jahren Rheuma.\n3 Jahre ging es ihm gut mit Medikamenten.\nVor 4 Monaten hat er ein Medikament abgesetzt.\nEr dachte: \"Mir geht es gut. Ich brauche das nicht.\"\nEr hat den Arzt nicht gefragt.\n\nJetzt hat er einen starken Schub.\nSeine Knie sind geschwollen.\nSeine Haende tun weh.\nGestern ist er in der Werkstatt gestuerzt.\n\nEr legt jeden Abend eine Waermflasche auf die Knie.\nAber die Knie werden schlechter.\n\nHerr Vogel sagt: \"Ich brauche keine Hilfe.\"\nSeine Tochter Lisa sagt: \"Papa, du bist dreimal fast gestuerzt.\"",
    },
  },
  {
    stepId: "pflproz2-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q2", "Q3", "Q6"],
    contentC1: {
      title: "Was faellt dir auf?",
      body: "",
      fallbezug:
        "Du liest Heinrichs Akte und sprichst mit ihm. Mehrere Dinge fallen dir sofort auf.",
    },
    question: {
      fragetext:
        "Welches Problem hat bei Heinrich die HOECHSTE pflegerische Prioritaet?",
      optionen: [
        {
          text: "Das eigenmaechtige Absetzen von MTX — Heinrich braucht eine Medikamentenschulung",
          isCorrect: false,
          explanation:
            "Das MTX-Absetzen ist die URSACHE des Schubs und muss aerztlich besprochen werden. Aber akut ist es keine pflegerische Prioritaet — die Medikamente werden ohnehin wieder angesetzt. Pflegerisch ist die unmittelbare Gefaehrdung wichtiger.",
        },
        {
          text: "Die Waermflasche auf den entzuendeten Knien — Heinrich verschlimmert seine Entzuendung",
          isCorrect: false,
          explanation:
            "Die falsche Waermeanwendung muss korrigiert werden — Waerme auf entzuendete Gelenke verstaerkt die Schwellung. Aber es ist kein akutes Sicherheitsrisiko. Edukation ist wichtig, aber nicht die hoechste Prioritaet.",
        },
        {
          text: "Das Sturzrisiko — Heinrich ist bereits gestuerzt und lebt allein in einem Haus mit Keller-Werkstatt",
          isCorrect: true,
          explanation:
            "Richtig! Heinrich hat ein extrem hohes Sturzrisiko: Bereits gestuerzt, geschwollene Kniegelenke (Instabilitaet), Morgensteifigkeit, allein lebend, Werkstatt im Keller (Treppe!). Ein Sturz mit Fraktur bei einem 72-Jaehrigen unter Immunsuppression waere eine potenzielle Katastrophe. Sicherheit geht vor — DNQP-Expertenstandard Sturzprophylaxe.",
        },
        {
          text: "Die Fatigue — Heinrich schafft nicht mehr so viel wie frueher",
          isCorrect: false,
          explanation:
            "Fatigue ist belastend und muss adressiert werden. Aber sie ist kein akutes Sicherheitsrisiko. Das Sturzrisiko gefaehrdet Heinrichs koerperliche Unversehrtheit und hat daher die hoechste Prioritaet nach dem DNQP-Expertenstandard Sturzprophylaxe.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "pflproz2-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q9"],
    contentC1: {
      title: "Schubmanagement: Akuter Schub vs. Remission",
      body: "Der pflegerische Prozess bei Rheuma ist nie statisch. Die Interventionen aendern sich fundamental je nach Krankheitsphase:\n\n**Im akuten Schub (wie bei Heinrich jetzt):**\n- Schmerzlinderung hat Vorrang: Kaelteanwendungen, Lagerung in Entlastungsposition\n- Schonung der entzuendeten Gelenke — KEINE forcierte Bewegung\n- Nur isometrische Uebungen (Muskelspannung ohne Gelenkbewegung)\n- Sturzprophylaxe verstaerken (Gelenke instabil, Patient unsicher)\n- Fatigue beachten: Kuerzere Aktivitaetsphasen, mehr Pausen\n- Gelenkschutz konsequent: Hilfsmittel anbieten, Belastung minimieren\n- Engmaschige Evaluation: Schmerz, Schwellung, Funktion taeglich dokumentieren\n\n**In Remission (Ziel fuer Heinrich):**\n- Aktive Bewegungstherapie: Dynamische Uebungen, Funktionstraining\n- Waermeanwendungen erlaubt (Fango, Paraffinbad fuer Haende)\n- Gelenkschutz beibehalten — auch ohne Schmerz\n- Selbstmanagement staerken: Patient fuehrt Uebungen selbststaendig durch\n- Evaluationsintervalle groesser (woechentlich statt taeglich)\n- Medikamenten-Adhaerenez sichern — damit der naechste Schub verhindert wird\n\nDer Uebergang zwischen Schub und Remission ist fliessend. Die Pflegekraft beobachtet Zeichen der Besserung (weniger Schwellung, kuerzere Morgensteifigkeit, mehr Belastbarkeit) und passt Interventionen schrittweise an.",
      glossarBegriffe: ["Schubmanagement"],
    },
    contentB1: {
      title: "Was tun im Schub? Was tun ohne Schub?",
      body: "Bei Rheuma aendert sich der Zustand oft.\nEs gibt zwei Phasen:\n\n**Akuter Schub (Gelenke entzuendet):**\n- Kaelte auf die Gelenke (Kuehlpack, 15-20 Minuten)\n- Gelenke schonen, nicht stark bewegen\n- Mehr Pausen machen\n- Auf Stuerze achten (Gelenke sind wackelig)\n- Hilfsmittel benutzen\n- Jeden Tag pruefen: Wird es besser?\n\n**Remission (kein Schub, ruhige Phase):**\n- Jetzt darf man Waerme benutzen\n- Aktive Bewegung ist gut\n- Selbst Uebungen machen\n- Gelenkschutz weiter beachten\n- Seltener pruefen (einmal pro Woche)\n- Medikamente weiternehmen!\n\nWichtig: Der Wechsel ist fliessend.\nDie Pflegekraft beobachtet genau.\nWird es besser? Dann aendern wir die Pflege.",
    },
  },
  {
    stepId: "pflproz2-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q6", "Q9"],
    contentC1: {
      title: "Waerme, Kaelte, Lagerung — die richtigen Mittel zur richtigen Zeit",
      body: "**Kaelte bei Entzuendung (akuter Schub):**\n- Wirkung: Schmerzlinderung, Schwellungsreduktion, Entzuendungshemmung\n- Anwendung: Kuehlpack in Tuch gewickelt, 15-20 Minuten, 2-3x taeglich\n- Alternativen: Quarkwickel, Kohlwickel (traditionell, gute Evidenz)\n- CAVE: Nie direkt auf die Haut — Erfrierungsgefahr. Nicht bei Durchblutungsstoerungen.\n\n**Waerme in Remission (kein aktives Entzuendungszeichen):**\n- Wirkung: Durchblutungsfoerderung, Muskelentspannung, Schmerzlinderung\n- Anwendung: Fango, Paraffinbad (besonders Haende), Waermflasche, Rotlicht\n- Dauer: 15-30 Minuten\n- CAVE: NIE auf entzuendete, geroetete, uebererwaermte Gelenke — verstaerkt Entzuendung!\n\n**Lagerung und Positionierung:**\n- Entzuendete Gelenke leicht erhoehen (Abschwellung foerdern)\n- Kniegelenke: NICHT in Dauerbeugung lagern — Kontrakturgefahr!\n- Handgelenke: Funktionsstellung sichern (leichte Dorsalextension)\n- Wechsellagerung alle 2-3 Stunden wenn moeglich\n- Nachtlagerung: Kissen zwischen die Knie (Seitenlage), Rolle unter die Knie vermeiden\n\n**Sturzprophylaxe (DNQP-Expertenstandard):**\n- Risikofaktoren bei Rheuma: Gelenkinstabilitaet, Morgensteifigkeit, Fatigue, Medikamente\n- Umgebungsanpassung: Handlauf, rutschfeste Matten, Stolperfallen beseitigen\n- Festes Schuhwerk mit rutschfester Sohle\n- Nachtlicht fuer den Weg zur Toilette\n- Hilfsmittel: Gehstock, Rollator bei Bedarf",
      glossarBegriffe: [
        "Kryotherapie",
        "Thermotherapie",
        "Kontrakturprophylaxe",
        "Lagerung",
        "Sturzprophylaxe",
      ],
    },
    contentB1: {
      title: "Waerme, Kaelte und richtig liegen",
      body: "**Kaelte bei Entzuendung:**\nDas Gelenk ist rot, geschwollen und warm.\nDann hilft Kaelte.\nLegen Sie einen Kuehlpack in ein Tuch.\n15-20 Minuten auf das Gelenk legen.\nDas macht man 2-3 Mal am Tag.\nNie direkt auf die Haut!\n\n**Waerme ohne Entzuendung:**\nDas Gelenk ist nicht rot und nicht geschwollen.\nDann hilft Waerme.\nZum Beispiel eine Waermflasche.\nOder ein Paraffinbad fuer die Haende.\n15-30 Minuten.\nNIE auf ein entzuendetes Gelenk!\n\n**Richtig liegen:**\nEntzuendete Gelenke etwas hoeher legen.\nKnie NICHT dauerhaft anwinkeln!\nSonst werden sie steif.\nAlle 2-3 Stunden die Lage aendern.\n\n**Stuerze verhindern:**\nBei Rheuma ist das Sturzrisiko hoch.\nGelenke sind wackelig.\nMorgens ist man steif.\nMassnahmen: Handlauf, rutschfeste Matten, gute Schuhe, Nachtlicht.",
    },
  },
  {
    stepId: "pflproz2-07",
    phase: 3,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q6", "Q9"],
    contentC1: {
      title: "Waerme oder Kaelte?",
      body: "",
      fallbezug:
        "Heinrich legt sich seit Wochen jeden Abend eine Waermflasche auf die Knie. Die Knie sind geschwollen, geroetet und uebererwaermt. DAS28 5,2 — akuter Schub.",
    },
    question: {
      fragetext:
        'Heinrich fragt dich: "Warum werden meine Knie nicht besser? Ich mache doch jeden Abend meine Waermflasche drauf." Was antwortest du?',
      optionen: [
        {
          text: '"Die Waermflasche ist gut — machen Sie weiter, vielleicht etwas laenger."',
          isCorrect: false,
          explanation:
            "Waerme auf ein akut entzuendetes Gelenk ist kontraindiziert! Waerme foerdert die Durchblutung und verstaerkt damit die Entzuendungsreaktion — mehr Schwellung, mehr Schmerz. Das ist der Grund, warum Heinrichs Knie schlechter werden.",
        },
        {
          text: '"Ihre Knie sind akut entzuendet — da brauchen Sie Kaelte statt Waerme. Die Waerme verstaerkt die Schwellung. Ich zeige Ihnen, wie Sie einen Kuehlpack richtig anwenden."',
          isCorrect: true,
          explanation:
            "Genau! Im akuten Schub mit Entzuendungszeichen (Schwellung, Roetung, Uebererwaermung) ist Kaelte das Mittel der Wahl. Kuehlpack in ein Tuch gewickelt, 15-20 Minuten, 2-3x taeglich. Waerme darf Heinrich erst wieder anwenden, wenn die Entzuendung abgeklungen ist.",
        },
        {
          text: '"Weder Waerme noch Kaelte — nur Medikamente helfen bei Rheuma."',
          isCorrect: false,
          explanation:
            "Thermotherapie ist ein evidenzbasierter Bestandteil der Rheuma-Behandlung. Kaelte im akuten Schub reduziert nachweislich Schmerz und Schwellung. Medikamente UND nicht-medikamentoese Massnahmen ergaenzen sich — es ist kein Entweder-oder.",
        },
        {
          text: '"Sie sollten die Waermflasche auf andere Koerperteile legen, nicht auf die Knie."',
          isCorrect: false,
          explanation:
            "Das Problem ist nicht die Stelle, sondern die Methode. Waerme auf ein entzuendetes Gelenk — egal welches — verstaerkt die Entzuendung. Die Faustregel: Roetung, Schwellung, Uebererwaermung = Kaelte. Keine Entzuendungszeichen = Waerme erlaubt.",
        },
      ],
    },
  },
  {
    stepId: "pflproz2-08",
    phase: 3,
    stepType: "matching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q6", "Q9"],
    contentC1: {
      title: "Intervention zur richtigen Zeit",
      body: "Pflegerische Interventionen bei Rheuma haengen entscheidend von der Krankheitsphase ab. Ordne jede Massnahme der richtigen Phase zu.",
    },
    question: {
      fragetext:
        "Ordne jede pflegerische Intervention der richtigen Krankheitsphase zu:",
      matchingPairs: [
        {
          left: "Kuehlpack auf geschwollenes Kniegelenk, 15 Min",
          right: "Akuter Schub",
        },
        {
          left: "Dynamisches Funktionstraining mit Theraband",
          right: "Remission",
        },
        {
          left: "Isometrische Quadrizeps-Uebung im Bett",
          right: "Akuter Schub",
        },
        {
          left: "Paraffinbad fuer die Haende vor der Ergotherapie",
          right: "Remission",
        },
        {
          left: "Treppensteigen nur mit Begleitung, Handlauf nutzen",
          right: "Akuter Schub",
        },
        {
          left: "Eigenstaendiges Gelenkschutztraining zu Hause",
          right: "Remission",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "pflproz2-09",
    phase: 4,
    stepType: "branching",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3", "Q5", "Q10"],
    contentC1: {
      title: "Heinrich will in die Werkstatt",
      body: 'Nach zwei Tagen in der Tagesklinik geht es Heinrich etwas besser. Die Knie sind noch geschwollen, aber der Schmerz ist von NRS 7 auf NRS 4 gesunken. Die Glukokortikoide wirken.\n\nHeinrich sagt: "Morgen ist Samstag. Mein Enkel Lukas hat Geburtstag naechste Woche. Ich muss in die Werkstatt und sein Regal fertigbauen. Das schaffe ich schon."',
      fallbezug:
        "Die Werkstatt ist im Keller (steile Treppe, kein Handlauf). Ueberall liegt Werkzeug und Holz. Heinrich will stundenlang stehen und arbeiten — mit geschwollenen Knien und Handgelenken.",
    },
    question: {
      fragetext: "Wie reagierst du auf Heinrichs Wunsch?",
      branchingOptions: [
        {
          text: '"Herr Vogel, das kommt ueberhaupt nicht in Frage. Sie duerfen nicht in den Keller — das ist viel zu gefaehrlich."',
          feedback:
            "Verstaendlich, aber kontraproduktiv. Ein striktes Verbot wird Heinrich ignorieren — er hat schon bewiesen, dass er sich nicht vorschreiben laesst (MTX-Absetzung). Du verlierst sein Vertrauen, und er geht trotzdem in die Werkstatt — dann ohne jede Beratung.",
          isCorrect: false,
        },
        {
          text: '"Ich verstehe, dass das Regal fuer Lukas wichtig ist. Lassen Sie uns gemeinsam ueberlegen, wie Sie das SICHER machen koennen: Handlauf an der Treppe, Sitzarbeitsplatz statt Stehen, maximal 30 Minuten mit Pause, und Lisa sollte im Haus sein."',
          feedback:
            "Hervorragend! Du nimmst Heinrichs Beduerfnis ernst (Regal fuer den Enkel = Identitaet + Beziehung) und machst es sicher statt es zu verbieten. Gelenkschutzprinzipien (Sitzarbeitsplatz), Sturzprophylaxe (Handlauf, Begleitung), Fatigue-Management (30 Min + Pause) — alles integriert. Heinrich wird kooperieren, weil er sich respektiert fuehlt.",
          isCorrect: true,
        },
        {
          text: '"Natuerlich, wenn Sie sich gut fuehlen, koennen Sie in die Werkstatt. Hoeren Sie einfach auf Ihren Koerper."',
          feedback:
            'Das ist keine pflegerische Beratung, das ist Laissez-faire. Heinrichs Koerpergefuehl hat ihn bereits getaeuscht — er hat MTX abgesetzt, weil er sich "gut fuehlte", und Waermflaschen auf entzuendete Gelenke gelegt. "Auf den Koerper hoeren" reicht nicht — er braucht konkrete Gelenkschutz- und Sicherheitsmassnahmen.',
          isCorrect: false,
        },
      ],
    },
  },
  {
    stepId: "pflproz2-10",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q8"],
    contentC1: {
      title: "Fatigue-Management: Heinrichs Tagesplan",
      body: 'Heinrich klagt: "Frueher habe ich 10 Stunden in der Werkstatt gestanden. Jetzt bin ich nach 2 Stunden fertig. Mittags koennte ich im Stehen einschlafen."\n\nFatigue bei Rheuma ist mehr als Muedigkeit — es ist eine ueberwaeeltigende Erschoepfung, die durch Entzuendung, Schmerz und Schlafmangel verstaerkt wird. Die beste Strategie: Pacing — Aktivitaeten in kleinere Einheiten aufteilen und Pausen einplanen.',
      fallbezug:
        "Du erstellst mit Heinrich einen Tagesplan fuer einen guten Tag. Bringe die Aktivitaeten in eine sinnvolle Reihenfolge nach dem Pacing-Prinzip.",
      glossarBegriffe: ["Fatigue", "Pacing"],
    },
    question: {
      fragetext:
        "Bringe Heinrichs Tagesplan in die richtige Reihenfolge (Pacing-Prinzip: Aktivitaet — Pause — Aktivitaet):",
      sortItems: [
        "Morgens: Aufstehen, 15 Min Morgengymnastik (leichte isometrische Uebungen gegen Morgensteifigkeit)",
        "Fruehstueck in Ruhe, Medikamente nehmen, Kuehlpack auf die Knie (15 Min)",
        "Vormittags: Leichte Aktivitaet (z.B. Spaziergang 20 Min oder Werkstatt 30 Min mit Sitzarbeitsplatz)",
        "Mittagspause: Beine hochlegen, 30-45 Min Ruhe (kein Schlaf — sonst Nachtschlaf gestoert)",
        "Nachmittags: Zweite leichte Aktivitaet (z.B. Besuch von Nachbar Baumann, Schachspielen)",
        "Abends: Kuehlpack auf die Knie, leichte Dehnuebungen, frueh ins Bett (Schlafhygiene)",
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "pflproz2-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q3", "Q7"],
    contentC1: {
      title: "Evaluation — Hat es funktioniert?",
      body: "Evaluation ist der am haeufigsten uebersprungene Schritt im Pflegeprozess. Dabei ist er der wichtigste: Ohne Evaluation weisst du nicht, ob deine Massnahmen wirken — oder ob du den Pflegeplan anpassen musst.\n\nBei Rheuma ist Evaluation besonders wichtig, weil sich der Zustand staendig aendert. Was gestern half, kann heute kontraproduktiv sein.",
      fallbezug:
        "Heinrich ist seit 10 Tagen in der Tagesklinik. Die Glukokortikoide wurden reduziert, MTX wurde wieder angesetzt. Du evaluierst die Pflegemassnahme Sturzprophylaxe.\n\nAusgangssituation (Tag 1): Gestuerzt in Werkstatt, geschwollene Kniegelenke, kein Handlauf, Sturzrisiko HOCH.\nMassnahmen: Handlauf-Empfehlung (Tochter Lisa organisiert Einbau), rutschfeste Matten, Werkstatt nur mit Begleitung, Gehstock fuer den Weg zur Toilette nachts, Nachtlicht.\nAktueller Zustand (Tag 10): Knie weniger geschwollen, NRS 3 (statt 7), Morgensteifigkeit 30 Min (statt >60), kein weiterer Sturz, Handlauf wird naechste Woche eingebaut.",
      glossarBegriffe: ["Evaluation"],
    },
    contentB1: {
      title: "Hat die Pflege gewirkt?",
      body: "Evaluation heisst: Pruefen, ob die Pflege gewirkt hat.\n\nHerr Vogel ist seit 10 Tagen in der Klinik.\nAm Anfang war es so:\n- Er ist gestuerzt.\n- Seine Knie waren sehr geschwollen.\n- Kein Handlauf an der Treppe.\n- Sturzrisiko: HOCH.\n\nWir haben Massnahmen gemacht:\n- Empfehlung fuer einen Handlauf.\n- Rutschfeste Matten.\n- Werkstatt nur mit Begleitung.\n- Gehstock fuer die Nacht.\n- Nachtlicht.\n\nJetzt (Tag 10):\n- Knie weniger geschwollen.\n- Schmerz: 3 statt 7.\n- Morgensteifigkeit: 30 Minuten statt 60.\n- Kein neuer Sturz.\n\nSchreibe auf: Was hat gewirkt? Was muss noch geaendert werden?",
    },
    question: {
      fragetext:
        "Schreibe einen kurzen Evaluationsbericht (5-8 Saetze): Welche Massnahmen haben gewirkt? Welche muessen angepasst werden? Ist das Pflegeziel erreicht? Was ist der naechste Schritt?",
      musterantwort:
        "Die Sturzprophylaxe-Massnahmen zeigen Wirkung: Seit Beginn der Intervention ist kein weiterer Sturz aufgetreten. Die Kniegelenksschwellung ist ruecklaeufig (DAS28 von 5,2 auf 3,8), was die Gelenkstabilitaet verbessert. Die Morgensteifigkeit hat sich von ueber 60 Min auf 30 Min reduziert — das Sturzrisiko am Morgen bleibt aber erhoet. Herr Vogel akzeptiert den Gehstock fuer den Nachtweg zur Toilette. Die Werkstatt betritt er nur noch in Begleitung der Tochter.\n\nAnpassungsbedarf: Der Handlauf-Einbau steht noch aus (naechste Woche) — bis dahin bleibt die Werkstatt-Regelung bestehen. Langfristig sollte ein Treppenhandlauf auf beiden Seiten installiert werden. Die Beleuchtung im Keller sollte verbessert werden (Bewegungsmelder).\n\nPflegeziel 'Kein erneuter Sturz in 2 Wochen' ist auf gutem Weg. Naechster Schritt: Evaluation der Selbststaendigkeit bei Gelenkschutz-Massnahmen im Alltag.",
      bewertungskriterien: [
        "Bezug auf konkrete Massnahmen und deren Ergebnis",
        "Vergleich Ausgangssituation vs. aktueller Zustand (messbar)",
        "Benennung von Anpassungsbedarf",
        "Aussage zum Zielerreichungsgrad",
        "Naechsten Schritt formuliert",
      ],
      satzanfaengeB1: [
        "Die Massnahmen haben gewirkt, weil...",
        "Herr Vogel ist seit 10 Tagen nicht mehr gestuerzt, weil...",
        "Wir muessen noch aendern: ...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "pflproz2-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 5,
    kompetenzbereich: "KB-IV.1",
    quellen: ["Q1", "Q3", "Q7"],
    contentC1: {
      title: "Praxisauftrag — Evaluation als Routine",
      body: "Du hast den kompletten Pflegeprozess durchlaufen: Von der Anamnese (LE 12) ueber Diagnosen und Ziele (LE 12) bis zur Durchfuehrung und Evaluation (diese Lektion). Heinrich zeigt, warum Evaluation kein optionaler Luxus ist — sie ist der Moment, in dem Pflege professionell wird.\n\n**Dein Praxisauftrag fuer den naechsten Praxiseinsatz:**\n\n1. Waehle einen Patienten mit einer chronischen Erkrankung auf deiner Station\n2. Lies seinen Pflegeplan — welche Massnahmen stehen dort?\n3. Pruefe: Wurde die letzte Evaluation dokumentiert? Wenn ja — was stand darin? Wenn nein — warum nicht?\n4. Fuehre selbst eine Mini-Evaluation durch: Hat die Massnahme gewirkt? Muss etwas angepasst werden?\n\n**Reflexionsfragen:**\n- Wie oft wird auf deiner Station der Pflegeplan tatsaechlich evaluiert und angepasst?\n- Was passiert mit Patienten wie Heinrich, die sich nicht an Empfehlungen halten — werden sie als uneinsichtig abgestempelt oder wird nach dem WARUM gefragt?\n- Wuerde Heinrich sagen: Die Pfleger haben mich verstanden — oder: Die haben mir Vorschriften gemacht?\n\n**Merke fuer die Pruefung:**\n- Schub: Kaelte, Schonung, isometrische Uebungen, engmaschige Evaluation\n- Remission: Waerme erlaubt, dynamische Uebungen, Selbstmanagement staerken\n- Evaluation = Vergleich IST vs. SOLL + Anpassung + Dokumentation\n- Sturzprophylaxe bei Rheuma: Gelenkinstabilitaet + Morgensteifigkeit + Medikamente als Risikofaktoren",
      glossarBegriffe: ["Gelenkschutz"],
    },
    contentB1: {
      title: "Aufgabe fuer die Praxis",
      body: "Du hast den ganzen Pflegeprozess gelernt:\n1. Informationen sammeln (LE 12)\n2. Probleme benennen (LE 12)\n3. Ziele setzen (LE 12)\n4. Massnahmen durchfuehren (diese Lektion)\n5. Pruefen: Hat es gewirkt? (diese Lektion)\n\nAufgabe fuer deinen naechsten Praxistag:\n1. Waehle einen Patienten auf deiner Station.\n2. Lies seinen Pflegeplan.\n3. Pruefe: Wurde die letzte Auswertung geschrieben?\n4. Pruefe selbst: Hat die Massnahme gewirkt?\n\nFrage dich:\n- Wie oft wird der Pflegeplan auf deiner Station geprueft?\n- Wuerde Herr Vogel sagen: Die haben mich verstanden?\n\nMerke dir:\n- Schub = Kaelte, Schonung, Pausen, oft pruefen\n- Kein Schub = Waerme erlaubt, aktive Bewegung, selbst machen\n- Immer pruefen: Hat es gewirkt? Was muss sich aendern?",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Schubmanagement",
    erklaerung:
      "Gezielte pflegerische und medizinische Massnahmen im akuten Schub: Schmerzlinderung, Gelenkschonung, Kaelteanwendung, engmaschige Evaluation",
  },
  {
    begriff: "Remission",
    erklaerung:
      "Phase niedriger oder fehlender Krankheitsaktivitaet bei Rheuma — Ziel der Therapie, erfordert weiterhin Medikamente und Gelenkschutz",
  },
  {
    begriff: "Kryotherapie",
    erklaerung:
      "Kaeltetherapie — Anwendung von Kaelte (Kuehlpack, Eisbeutel, Quarkwickel) zur Schmerz- und Entzuendungslinderung im akuten Schub",
  },
  {
    begriff: "Thermotherapie",
    erklaerung:
      "Waermetherapie — Anwendung von Waerme (Fango, Paraffinbad, Rotlicht) zur Muskelentspannung und Durchblutungsfoerderung in der Remission",
  },
  {
    begriff: "Sturzprophylaxe",
    erklaerung:
      "Massnahmen zur Verhinderung von Stuerzen: Umgebungsanpassung, Hilfsmittel, Bewegungstraining, Medikamentenreview — DNQP-Expertenstandard",
  },
  {
    begriff: "Gelenkschutz",
    erklaerung:
      "Massnahmen zur Schonung der Gelenke im Alltag: Grosse Gelenke statt kleine belasten, Hilfsmittel nutzen, ergonomische Haltung, Hebelgesetz",
  },
  {
    begriff: "Fatigue",
    erklaerung:
      "Ueberwaeeltigende Erschoepfung bei Rheuma — multifaktoriell (Entzuendung, Schmerz, Schlaf), nicht durch Schlaf behebbar, erfordert Pacing-Strategie",
  },
  {
    begriff: "Lagerung",
    erklaerung:
      "Positionierung des Patienten zur Schmerzlinderung und Kontrakturprophylaxe — bei Rheuma: Gelenke nicht dauerhaft in Beugestellung",
  },
  {
    begriff: "Evaluation",
    erklaerung:
      "Systematische Ueberpruefung der Pflegemassnahmen: IST vs. SOLL vergleichen, Wirksamkeit beurteilen, Pflegeplan anpassen",
  },
  {
    begriff: "Kontrakturprophylaxe",
    erklaerung:
      "Massnahmen zur Verhinderung von Gelenkversteifungen: Regelmaeessige Lagewechsel, keine Dauerbeugestellung, Bewegungsuebungen",
  },
  {
    begriff: "Pacing",
    erklaerung:
      "Aktivitaetsmanagement bei Fatigue: Aktivitaeten in kleine Einheiten aufteilen, Pausen einplanen, Tagesstruktur anpassen",
  },
  {
    begriff: "Morgensteifigkeit",
    erklaerung:
      "Typisches RA-Symptom: Gelenke sind morgens steif und schmerzhaft, Dauer >60 Minuten ist ein ACR/EULAR-Kriterium fuer aktive RA",
  },
];
