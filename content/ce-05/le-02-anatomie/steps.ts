// Lektion 2: Anatomie und Physiologie des Bewegungsapparats
// CE 05 — Block A: Grundlagen
// Generiert durch Content-Loop (7 Phasen) — 2026-03-21

import type { ContentStep, GlossarEntry, LektionMetadata } from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-02-anatomie",
  ceId: "ce-05",
  title: "Anatomie und Physiologie des Bewegungsapparats",
  titleShort: "Anatomie",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 25, b1: 40 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [1, 3],
  voraussetzungen: ["le-01-einfuehrung"],
  leitfall: {
    name: "Karim Hassan",
    alter: 34,
    beruf: "Buerokaufmann",
    diagnose: "Sprunggelenksdistorsion rechts",
    setting: "Notaufnahme Kreiskrankenhaus, Samstagabend",
    kernproblem:
      "Bagatellisiert Verletzung, will keine Krankschreibung, Ehefrau schwanger",
  },
  glossarCount: 12,
  quellenCount: 12,
};

export const STEPS: ContentStep[] = [
  // ==========================================
  // PHASE 1: ANKOMMEN (Steps 1-2)
  // ==========================================
  {
    stepId: "anatomie-01",
    phase: 1,
    stepType: "selfrating",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q10", "Q11"],
    contentC1: {
      title: "Was weisst du ueber den Bewegungsapparat?",
      body: "In dieser Lektion lernst du die anatomischen Grundlagen des Bewegungsapparats — Knochen, Knorpel, Gelenke, Sehnen, Baender und Muskeln. Dieses Wissen brauchst du, um zu verstehen, was bei rheumatischen Erkrankungen im Koerper passiert.\n\nDer Bewegungsapparat wird in zwei Teile unterteilt:\n- Passiver Stuetzapparat: Knochen, Knorpel, Gelenke, Baender — gibt dem Koerper Form und Stabilitaet\n- Aktiver Bewegungsapparat: Skelettmuskulatur, Sehnen — erzeugt Bewegung\n\nNach dieser Lektion kannst du:\n- Den Aufbau eines Gelenks beschreiben\n- Gelenktypen unterscheiden\n- Erklaeren, warum Knorpel so schlecht heilt\n- Den Bezug zu Rheuma herstellen",
      glossarBegriffe: ["Bewegungsapparat"],
    },
    contentB1: {
      title: "Was weisst du ueber Knochen und Gelenke?",
      body: "In dieser Lektion lernst du ueber den Bewegungsapparat.\nDer Bewegungsapparat besteht aus Knochen, Knorpel und Gelenken.\nEr besteht auch aus Sehnen, Baendern und Muskeln.\n\nEs gibt zwei Teile:\n- Passiv: Knochen, Knorpel, Gelenke und Baender. Sie geben dem Koerper Form.\n- Aktiv: Muskeln und Sehnen. Sie machen Bewegung.\n\nNach dieser Lektion kannst du:\n- Beschreiben, wie ein Gelenk aufgebaut ist\n- Verschiedene Gelenktypen unterscheiden\n- Erklaeren, warum Knorpel schlecht heilt\n- Den Zusammenhang mit Rheuma erklaeren",
    },
    question: {
      fragetext:
        "Wie sicher fuehlst du dich beim Thema Anatomie des Bewegungsapparats?",
    },
  },
  {
    stepId: "anatomie-02",
    phase: 1,
    stepType: "mc",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Schaetzfrage zum Einstieg",
      body: "",
    },
    question: {
      fragetext:
        "Wie viele echte Gelenke (mit Gelenkspalt) hat der menschliche Koerper ungefaehr?",
      optionen: [
        {
          text: "Etwa 70",
          isCorrect: false,
          explanation:
            "Zu wenig. 70 Gelenke — das waeren weniger als in beiden Haenden zusammen. Allein jede Hand hat ueber 30 Gelenke.",
        },
        {
          text: "Etwa 140",
          isCorrect: true,
          explanation:
            "Richtig! Der menschliche Koerper hat etwa 140 echte Gelenke (Diarthrosen). Dazu kommen zahlreiche unechte Gelenke (Synarthrosen), z.B. die Schaedelnaehte.",
        },
        {
          text: "Etwa 300",
          isCorrect: false,
          explanation:
            "Zu viel. 300 — das waere fast so viel wie die Anzahl der Knochen (206). Echte Gelenke sind etwa 140.",
        },
        {
          text: "Etwa 500",
          isCorrect: false,
          explanation:
            "Deutlich zu viel. Der Mensch hat 206 Knochen und etwa 140 echte Gelenke.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 2: SITUIERUNG (Steps 3-4)
  // ==========================================
  {
    stepId: "anatomie-03",
    phase: 2,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q8"],
    contentC1: {
      title: "Samstagabend in der Notaufnahme",
      body: "Karim Hassan, 34 Jahre, Buerokaufmann bei einer Versicherung. Jeden Samstag spielt er Fussball in der Kreisliga — sein Ausgleich zum Bueroalltag. Heute Abend ist er im Zweikampf umgeknickt. Sein rechtes Sprunggelenk ist sofort angeschwollen, er konnte nicht mehr auftreten.\n\nSeine Mannschaftskollegen haben ihn in die Notaufnahme gebracht. Karim sitzt auf der Liege, sein Fuss ist hochgelagert und mit einem Kuehlpack umwickelt.\n\nEr sagt zur Pflegefachkraft: 'Das ist nur verstaucht, ich brauch eigentlich nur ein Kuehlpack und eine Bandage. Am Montag hab ich eine wichtige Praesentation, da kann ich nicht fehlen.'\n\nSein Mannschaftskollege Ali sagt: 'Lass das mal untersuchen. Mein Bruder hatte das auch und jetzt wackelt sein Knoechel immer noch.'\n\nKarims Ehefrau ist im 7. Monat schwanger. Er will auf keinen Fall laenger ausfallen — die Elternzeit steht bevor, und er macht sich Sorgen ums Geld.",
      fallbezug:
        "Karim begleitet dich durch diese Lektion. An seinem Sprunggelenk lernst du, wie ein Gelenk aufgebaut ist — und warum 'nur verstaucht' mehr sein kann als gedacht.",
      glossarBegriffe: ["Sprunggelenk", "Distorsion"],
    },
    contentB1: {
      title: "Karim geht in die Notaufnahme",
      body: "Karim Hassan ist 34 Jahre alt.\nEr arbeitet als Buerokaufmann.\nJeden Samstag spielt er Fussball.\n\nHeute Abend ist er umgeknickt.\nSein rechtes Sprunggelenk (Knoechel) ist sofort dick geworden.\nEr kann nicht mehr auftreten.\nSeine Mannschaftskollegen bringen ihn in die Notaufnahme.\n\nKarim sagt: 'Das ist nur verstaucht.'\n'Ich brauche nur ein Kuehlpack.'\n'Am Montag muss ich arbeiten.'\n\nSein Kollege Ali sagt: 'Lass das untersuchen!'\n'Mein Bruder hatte das auch.'\n'Jetzt wackelt sein Knoechel immer noch.'\n\nKarims Frau ist schwanger.\nEr will auf keinen Fall lange ausfallen.\nEr macht sich Sorgen ums Geld.",
      fallbezug:
        "Karim begleitet dich durch diese Lektion. An seinem Sprunggelenk lernst du, wie ein Gelenk aufgebaut ist.",
    },
  },
  {
    stepId: "anatomie-04",
    phase: 2,
    stepType: "mc",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q8"],
    contentC1: {
      title: "Nur verstaucht?",
      body: "",
    },
    question: {
      fragetext:
        "Karim sagt: 'Ist nur verstaucht.' Welche Strukturen koennten bei einem Umknicken des Sprunggelenks tatsaechlich verletzt sein?",
      optionen: [
        {
          text: "Nur die Haut und das Unterhautfettgewebe",
          isCorrect: false,
          explanation:
            "Bei einem Umknicken werden tiefere Strukturen belastet — nicht die Haut. Die Schwellung kommt von INNEN, aus dem Gelenkbereich.",
        },
        {
          text: "Baender, Knorpel und moeglicherweise auch Knochen",
          isCorrect: true,
          explanation:
            "Richtig! Beim Umknicken werden zuerst die Aussenbaender ueberdehnt oder reissen. In schweren Faellen kann auch der Gelenkknorpel geschaedigt oder ein Knochen gebrochen werden. Deshalb muss eine Verstauchung immer untersucht werden.",
        },
        {
          text: "Nur der Knochen — Verstauchung bedeutet immer Knochenbruch",
          isCorrect: false,
          explanation:
            "Nicht jede Verstauchung ist ein Bruch! Oft sind 'nur' Baender betroffen. Aber ohne Untersuchung weiss man das nicht — deshalb ist Diagnostik wichtig.",
        },
        {
          text: "Nur die Muskeln — Gelenke sind beim Umknicken nicht betroffen",
          isCorrect: false,
          explanation:
            "Beim Umknicken ist das GELENK direkt betroffen — besonders die Baender, die das Gelenk stabilisieren. Muskeln sind seltener primaer verletzt.",
        },
      ],
    },
  },

  // ==========================================
  // PHASE 3: WISSENSERWERB (Steps 5-8)
  // ==========================================
  {
    stepId: "anatomie-05",
    phase: 3,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q4"],
    contentC1: {
      title: "Knochen und Knorpel — Das Grundgeruest",
      body: "Knochen bilden das Skelett — 206 Stueck beim Erwachsenen. Sie geben dem Koerper Form, schuetzen Organe und dienen als Ansatzpunkt fuer Muskeln. Es gibt drei Knochentypen:\n- Roehrenknochen (lang): Oberschenkel, Oberarm — Hebel fuer Bewegung\n- Platte Knochen: Schaedel, Brustbein, Schulterblatt — Schutzfunktion\n- Kurze Knochen: Handwurzelknochen, Wirbelkoerper — Stabilitaet und Beweglichkeit\n\nKnorpel ueberzieht die Gelenkflaechen der Knochen — wie eine Schutzschicht. Hyaliner Knorpel (der haeufigste Gelenkknorpel) ist glatt, elastisch und verteilt den Druck gleichmaessig.\n\nDas Besondere am Knorpel: Er ist bradytroph — das heisst:\n- Keine eigene Blutversorgung\n- Ernaehrung nur durch Diffusion aus der Gelenkfluessigkeit (Synovia)\n- Sehr langsamer Stoffwechsel\n- Kaum Regenerationsfaehigkeit — einmal zerstoerter Knorpel waechst nicht nach!\n\nDas ist der Grund, warum Knorpelschaeden bei Arthrose UND bei Rheuma so problematisch sind.",
      glossarBegriffe: [
        "Knochen",
        "Knorpel",
        "Bradytroph",
        "Hyaliner Knorpel",
      ],
    },
    contentB1: {
      title: "Knochen und Knorpel — Die Grundlage",
      body: "Knochen sind hart. Sie bilden das Skelett.\nEin Erwachsener hat 206 Knochen.\nEs gibt drei Arten:\n- Lange Knochen: Oberschenkel, Oberarm — fuer Bewegung\n- Platte Knochen: Schaedel, Brustbein — zum Schutz\n- Kurze Knochen: Handwurzel, Wirbel — fuer Stabilitaet\n\nKnorpel ist eine Schutzschicht auf den Knochen im Gelenk.\nKnorpel ist glatt und elastisch.\nEr sorgt dafuer, dass Knochen nicht aneinander reiben.\n\nWichtig: Knorpel ist bradytroph (langsam ernaehrt).\nDas bedeutet:\n- Knorpel hat KEINE Blutgefaesse\n- Naehrstoffe kommen nur aus der Gelenkfluessigkeit (Synovia)\n- Der Stoffwechsel ist sehr langsam\n- Knorpel kann sich kaum selbst reparieren!\n\nWenn Knorpel kaputt geht, waechst er nicht nach.\nDas ist ein grosses Problem bei Rheuma und Arthrose.",
    },
  },
  {
    stepId: "anatomie-06",
    phase: 3,
    stepType: "text",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3", "Q5"],
    contentC1: {
      title: "Wie ist ein Gelenk aufgebaut?",
      body: "Ein echtes Gelenk (Diarthrose) hat folgende Bestandteile — von innen nach aussen:\n\n1. Gelenkflaechen — Die Knochenenden, ueberzogen mit hyalinem Knorpel. Dieser Knorpel sorgt dafuer, dass die Knochen nicht direkt aneinander reiben.\n\n2. Gelenkspalt — Der schmale Raum zwischen den Gelenkflaechen. Er ist mit Synovia (Gelenkfluessigkeit) gefuellt.\n\n3. Synovia (Gelenkfluessigkeit) — Eine zaehe, klare Fluessigkeit mit drei Aufgaben:\n- Schmierung: Reduziert Reibung bei Bewegung\n- Ernaehrung: Versorgt den Knorpel mit Naehrstoffen (einziger Weg, da Knorpel bradytroph ist!)\n- Stossdaempfung: Faengt Belastungen ab\n\n4. Gelenkkapsel — Umschliesst das Gelenk wie eine Huelle. Zwei Schichten:\n- Innere Schicht (Membrana synovialis): Produziert die Synovia\n- Aeussere Schicht (Membrana fibrosa): Festes Bindegewebe, gibt Stabilitaet\n\n5. Baender — Stabilisieren das Gelenk von aussen, begrenzen die Bewegung",
      fallbezug:
        "Karims Sprunggelenk hat genau diesen Aufbau. Beim Umknicken wurden moeglicherweise die Aussenbaender ueberdehnt — und wenn er Pech hat, ist auch der Knorpel betroffen.",
      glossarBegriffe: [
        "Diarthrose",
        "Synovia",
        "Synovialis",
        "Gelenkkapsel",
      ],
    },
    contentB1: {
      title: "Wie ist ein Gelenk aufgebaut?",
      body: "Ein echtes Gelenk hat fuenf Teile.\nVon innen nach aussen:\n\n1. Gelenkknorpel\nEr liegt auf den Knochenenden.\nWie eine Schutzschicht.\n\n2. Gelenkspalt\nEin kleiner Raum zwischen den Knochen.\nEr ist mit Gelenkfluessigkeit (Synovia) gefuellt.\n\n3. Synovia (Gelenkfluessigkeit)\nEine zaehe, klare Fluessigkeit.\nSie hat drei Aufgaben:\n- Sie macht das Gelenk gleitfaehig (wie Oel)\n- Sie ernaehrt den Knorpel (einziger Weg!)\n- Sie faengt Stoesse ab\n\n4. Gelenkkapsel\nEine Huelle um das Gelenk.\nZwei Schichten:\n- Innen: Synovialis — macht die Gelenkfluessigkeit\n- Aussen: Festes Bindegewebe — gibt Halt\n\n5. Baender\nSie halten das Gelenk zusammen.\nSie begrenzen die Bewegung.\n\nKarims Sprunggelenk hat genau diesen Aufbau.\nBeim Umknicken wurden vielleicht die Baender ueberdehnt.",
      fallbezug:
        "Karims Sprunggelenk hat genau diesen Aufbau. Beim Umknicken wurden vielleicht die Baender ueberdehnt.",
    },
  },
  {
    stepId: "anatomie-07",
    phase: 3,
    stepType: "matching",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2", "Q3"],
    contentC1: {
      title: "Welcher Gelenktyp ist das?",
      body: "Gelenke werden nach ihrer Form und ihren Bewegungsachsen eingeteilt. Je mehr Achsen, desto mehr Bewegungsmoeglichkeiten — aber auch weniger Stabilitaet.",
    },
    question: {
      fragetext:
        "Ordne jeden Gelenktyp dem richtigen Beispiel und der Bewegungsmoeglichkeit zu:",
      matchingPairs: [
        {
          left: "Kugelgelenk (3 Achsen)",
          right:
            "Schulter, Huefte — groesste Beweglichkeit",
        },
        {
          left: "Scharniergelenk (1 Achse)",
          right:
            "Ellbogen, Fingergelenke — nur Beugung/Streckung",
        },
        {
          left: "Sattelgelenk (2 Achsen)",
          right: "Daumengrundgelenk — Beugung + Seitbewegung",
        },
        {
          left: "Eigelenk (2 Achsen)",
          right: "Handgelenk — Beugung + Seitbewegung, kein Drehen",
        },
        {
          left: "Drehgelenk (1 Achse)",
          right: "Elle-Speiche — nur Drehbewegung (Unterarm drehen)",
        },
      ],
    },
  },
  {
    stepId: "anatomie-08",
    phase: 3,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q2", "Q6", "Q7"],
    contentC1: {
      title:
        "Was haelt den Koerper zusammen — und was veraendert sich im Alter?",
      body: "Sehnen verbinden Muskeln mit Knochen. Wenn ein Muskel sich zusammenzieht (kontrahiert), uebertraegt die Sehne die Kraft auf den Knochen — und das Gelenk bewegt sich. Beispiel: Die Achillessehne verbindet Wadenmuskel mit Fersenbein.\n\nBaender verbinden Knochen mit Knochen. Sie stabilisieren Gelenke und begrenzen die Bewegung. Beispiel: Die Aussenbaender am Sprunggelenk verhindern, dass der Fuss zu weit nach innen knickt.\n\nSkelettmuskulatur erzeugt aktive Bewegung. Der Mensch hat ueber 650 Skelettmuskeln. Sie arbeiten immer als Gegenspieler: Einer beugt (Flexor), der andere streckt (Extensor).\n\nWas veraendert sich im Alter?\n- Knochen: Ab 40 nimmt die Knochendichte ab (Osteopenie, bei starkem Verlust Osteoporose)\n- Knorpel: Wird duenner, verliert Elastizitaet — Gelenke werden weniger belastbar\n- Baender und Sehnen: Werden steifer und sproder — hoehere Verletzungsgefahr\n- Muskeln: Muskelmasse nimmt ab (Sarkopenie) — beginnt schon ab ca. 30 Jahren! Ohne Training verliert man pro Jahrzehnt 3-8% Muskelmasse",
      fallbezug:
        "Karim ist 34 — die Sarkopenie hat gerade erst begonnen. Aber seine Baender und sein Knorpel sind nicht mehr so elastisch wie mit 20. Deshalb ist seine Verletzung ernst zu nehmen.",
      glossarBegriffe: ["Sehne", "Band", "Sarkopenie", "Osteoporose"],
    },
    contentB1: {
      title: "Was haelt den Koerper zusammen?",
      body: "Sehnen verbinden Muskeln mit Knochen.\nWenn ein Muskel sich zusammenzieht, zieht die Sehne am Knochen.\nSo bewegt sich das Gelenk.\nBeispiel: Die Achillessehne am Fuss.\n\nBaender verbinden Knochen mit Knochen.\nSie halten Gelenke stabil.\nBeispiel: Die Aussenbaender am Sprunggelenk.\n\nMuskeln machen Bewegung.\nWir haben ueber 650 Muskeln.\nMuskeln arbeiten immer zu zweit:\nEiner beugt, der andere streckt.\n\nWas veraendert sich im Alter?\n- Knochen: Ab 40 werden Knochen duenner (Osteoporose = Knochenschwund)\n- Knorpel: Wird duenner. Gelenke halten weniger aus.\n- Baender: Werden steif. Reissen leichter.\n- Muskeln: Ab 30 baut der Koerper Muskeln ab (Sarkopenie = Muskelabbau). Ohne Training verliert man alle 10 Jahre 3-8% Muskeln.\n\nKarim ist 34.\nDer Muskelabbau hat gerade erst begonnen.\nAber seine Baender sind nicht mehr so elastisch wie mit 20.",
      fallbezug:
        "Karim ist 34. Der Muskelabbau hat gerade erst begonnen. Aber seine Baender sind nicht mehr so elastisch wie mit 20.",
    },
  },

  // ==========================================
  // PHASE 4: ANWENDUNG (Steps 9-10)
  // ==========================================
  {
    stepId: "anatomie-09",
    phase: 4,
    stepType: "sorting",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    contentC1: {
      title: "Von innen nach aussen",
      body: "Du hast den Aufbau eines Gelenks kennengelernt. Jetzt sortiere die Strukturen — von der innersten Schicht (direkt am Knochen) bis zur aeussersten Schicht.",
    },
    question: {
      fragetext:
        "Ordne die Strukturen eines echten Gelenks von INNEN nach AUSSEN:",
      sortItems: [
        "Gelenkknorpel (ueberzieht die Knochenenden)",
        "Gelenkspalt mit Synovia (Gelenkfluessigkeit)",
        "Membrana synovialis (innere Kapselschicht, produziert Synovia)",
        "Membrana fibrosa (aeussere Kapselschicht, festes Bindegewebe)",
        "Baender (stabilisieren das Gelenk von aussen)",
      ],
    },
  },
  {
    stepId: "anatomie-10",
    phase: 4,
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q8", "Q9"],
    contentC1: {
      title: "Diagnostik in der Notaufnahme",
      body: "Karim sitzt in der Notaufnahme. Sein rechtes Sprunggelenk ist deutlich geschwollen und verfaerbt sich blau. Er kann den Fuss kaum bewegen. Die Aerztin kommt und untersucht ihn.\n\nDu bist als Pflegefachkraft dabei. Was sollte die Aerztin als naechstes tun?",
      fallbezug:
        "An Karims Sprunggelenk kannst du jetzt dein Anatomie-Wissen anwenden: Welche Strukturen koennten betroffen sein? Wie findet man das heraus?",
    },
    question: {
      fragetext: "Was ist das richtige Vorgehen bei Karim?",
      branchingOptions: [
        {
          text: "Nur kuehlen und elastische Bandage anlegen — Karim hat recht, das ist nur verstaucht",
          feedback:
            "Ohne Untersuchung weiss niemand, ob 'nur' Baender ueberdehnt sind oder ob ein Band gerissen, Knorpel geschaedigt oder ein Knochen gebrochen ist. Kuehlen ist als Sofortmassnahme richtig — aber eine klinische Untersuchung ist Pflicht. Karims Bagatellisierung darf die Diagnostik nicht bestimmen.",
          isCorrect: false,
        },
        {
          text: "Sprunggelenk systematisch abtasten, Bandstabilitaet pruefen, bei Verdacht roentgen",
          feedback:
            "Richtig! Die Aerztin tastet zuerst die Knochen ab (Ottawa Ankle Rules: Schmerz am Innen-/Aussenknoechel oder an bestimmten Fuss-Knochen?). Dann prueft sie die Bandstabilitaet (Schubladentest). Bei Verdacht auf Fraktur wird geroentgt. So findet sie heraus, welche der anatomischen Strukturen betroffen sind — Baender, Knorpel oder Knochen.",
          isCorrect: true,
        },
        {
          text: "Sofort MRT anordnen — nur so sieht man alle Strukturen",
          feedback:
            "Ein MRT zeigt zwar Weichteile (Baender, Knorpel) sehr gut, ist aber teuer und nicht immer verfuegbar. Die klinische Untersuchung kommt IMMER zuerst — abtasten, Stabilitaet pruefen, bewegen. Erst wenn der klinische Befund unklar ist oder eine Bandverletzung vermutet wird, kommt ein MRT in Frage.",
          isCorrect: false,
        },
      ],
    },
  },

  // ==========================================
  // PHASE 5: REFLEXION (Step 11)
  // ==========================================
  {
    stepId: "anatomie-11",
    phase: 5,
    stepType: "freetext",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q4", "Q5", "Q12"],
    contentC1: {
      title: "Von der Anatomie zur Krankheit",
      body: "Du hast gelernt, dass Knorpel bradytroph ist — er hat keine eigene Blutversorgung. Jetzt stell dir vor: Bei der rheumatoiden Arthritis (RA) greift das Immunsystem die Synovialis an. Der entzuendete Pannus waechst in den Gelenkspalt und zerstoert den Knorpel.",
      fallbezug:
        "Wenn Karims Knorpel bei der Verletzung geschaedigt wurde, wird dieser Schaden dauerhaft sein. Und bei Frau Meier aus Lektion 1 — wenn sie RA hat, wird der Knorpel in ihren Fingergelenken von innen zerstoert.",
    },
    contentB1: {
      title: "Knorpel und Rheuma",
      body: "Du hast gelernt: Knorpel hat keine Blutgefaesse.\nEr bekommt Naehrstoffe nur aus der Gelenkfluessigkeit.\nDeshalb heilt er sehr schlecht.\n\nBei der Rheumatoiden Arthritis (RA) passiert etwas Schlimmes:\nDas Immunsystem greift die Gelenkschleimhaut (Synovialis) an.\nEntzuendetes Gewebe waechst in das Gelenk hinein.\nDieses Gewebe zerstoert den Knorpel.\n\nWeil Knorpel nicht nachwachsen kann, ist der Schaden fuer immer.",
      fallbezug:
        "Wenn Karims Knorpel kaputt ist, wird er nicht wieder heilen. Bei Frau Meier aus Lektion 1 zerstoert Rheuma den Knorpel von innen.",
    },
    question: {
      fragetext:
        "Erklaere in eigenen Worten: Warum heilt Knorpel so schlecht? Und was bedeutet das fuer Menschen mit rheumatoider Arthritis?",
      musterantwort:
        "Knorpel ist bradytroph — er hat keine eigenen Blutgefaesse und wird nur durch Diffusion aus der Synovia ernaehrt. Dadurch hat er einen sehr langsamen Stoffwechsel und kann sich kaum selbst reparieren. Einmal zerstoerter Knorpel waechst nicht nach. Bei der rheumatoiden Arthritis zerstoert die Autoimmunreaktion (Pannus) den Gelenkknorpel von innen. Da der Knorpel sich nicht regenerieren kann, ist der Schaden dauerhaft. Deshalb ist fruehe Therapie bei RA so entscheidend — je frueher die Entzuendung gestoppt wird, desto weniger Knorpel geht verloren.",
      bewertungskriterien: [
        "Bradytroph / keine eigene Blutversorgung erwaehnt",
        "Diffusion als einziger Ernaehrungsweg beschrieben",
        "Schlechte oder fehlende Regeneration als Konsequenz",
        "Bezug zu RA hergestellt (Knorpelzerstoerung ist dauerhaft)",
      ],
      satzanfaengeB1: [
        "Knorpel heilt schlecht, weil...",
        "Bei Rheuma ist das ein Problem, weil...",
        "Deshalb ist fruehe Behandlung wichtig, weil...",
      ],
    },
  },

  // ==========================================
  // PHASE 6: TRANSFER (Step 12)
  // ==========================================
  {
    stepId: "anatomie-12",
    phase: 6,
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V.1",
    quellen: ["Q10", "Q11", "Q12"],
    contentC1: {
      title: "Dein Blick auf Gelenke — ab heute",
      body: "Du kennst jetzt die Grundlagen des Bewegungsapparats:\n- Knochen geben Form und Stabilitaet (206 Stueck)\n- Knorpel schuetzt Gelenkflaechen — ist aber bradytroph und heilt kaum\n- Gelenke ermoeglichen Bewegung (ca. 140 echte Gelenke)\n- Synovia schmiert und ernaehrt — ohne sie stirbt der Knorpel\n- Sehnen verbinden Muskel mit Knochen, Baender stabilisieren Gelenke\n- Im Alter nimmt alles ab: Knochendichte, Knorpeldicke, Muskelmasse\n\nPraxisauftrag: Wenn du das naechste Mal auf Station oder im Praktikum bist — beobachte bewusst die Gelenke deiner Patienten:\n- Sind Gelenke geschwollen?\n- Sind sie geroetet oder uebererwaermt?\n- Kann der Patient das Gelenk frei bewegen?\n- Klagt er ueber Morgensteifigkeit?\n\nDas sind genau die Zeichen, die dir in Lektion 3 (Pathophysiologie) und Lektion 11 (Pflegerische Assessments) wieder begegnen werden.",
      fallbezug:
        "Karim wird in 6 Wochen voraussichtlich wieder Fussball spielen — wenn seine Baender richtig ausheilen. Sein Knorpel muss beobachtet werden. Und Frau Meier aus Lektion 1? Wenn sie RA hat, greift die Entzuendung genau die Strukturen an, die du heute kennengelernt hast — Synovialis, Knorpel, Knochen. In Lektion 3 erfaehrst du, wie das auf Zellebene passiert.",
    },
    contentB1: {
      title: "Was du jetzt weisst",
      body: "Du hast die Grundlagen gelernt:\n- Knochen geben Form (206 Stueck)\n- Knorpel schuetzt Gelenke — heilt aber kaum\n- Gelenke machen Bewegung moeglich (etwa 140)\n- Synovia macht Gelenke gleitfaehig und ernaehrt Knorpel\n- Sehnen verbinden Muskel mit Knochen\n- Baender halten Gelenke zusammen\n- Im Alter werden Knochen duenner, Knorpel duenner, Muskeln weniger\n\nPraxisauftrag: Beobachte bei deinen Patienten:\n- Sind Gelenke dick (geschwollen)?\n- Sind Gelenke rot oder warm?\n- Kann der Patient das Gelenk gut bewegen?\n- Hat der Patient morgens steife Gelenke?\n\nIn der naechsten Lektion lernst du:\nWie greift Rheuma den Koerper auf Zellebene an?\n\nKarim wird bald wieder Fussball spielen.\nAber sein Knorpel muss beobachtet werden.\nUnd Frau Meier aus Lektion 1?\nWenn sie Rheuma hat, werden genau diese Strukturen angegriffen.",
      fallbezug:
        "Karim wird bald wieder Fussball spielen. Frau Meier aus Lektion 1 — bei Rheuma werden genau diese Strukturen angegriffen.",
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Bradytroph",
    erklaerung:
      "Langsam ernaehrt — Gewebe ohne eigene Blutversorgung, Naehrstoffe nur durch Diffusion (z.B. Knorpel)",
  },
  {
    begriff: "Band (Ligament)",
    erklaerung:
      "Bindegewebsstrang, verbindet Knochen mit Knochen, stabilisiert Gelenke",
  },
  {
    begriff: "Diarthrose",
    erklaerung:
      "Echtes Gelenk mit Gelenkspalt — im Gegensatz zur Synarthrose (unechtes Gelenk ohne Gelenkspalt)",
  },
  {
    begriff: "Distorsion",
    erklaerung:
      "Verstauchung — Ueberdehnung oder Riss von Baendern an einem Gelenk",
  },
  {
    begriff: "Gelenkkapsel",
    erklaerung:
      "Bindegewebige Huelle um das Gelenk (aussen: Membrana fibrosa, innen: Membrana synovialis)",
  },
  {
    begriff: "Hyaliner Knorpel",
    erklaerung:
      "Haeufigster Gelenkknorpel — glatt, elastisch, ueberzieht die Gelenkflaechen",
  },
  {
    begriff: "Knorpel",
    erklaerung:
      "Elastisches Stuetzgewebe auf Gelenkflaechen — bradytroph, kaum regenerationsfaehig",
  },
  {
    begriff: "Osteoporose",
    erklaerung:
      "Krankhafter Knochenschwund — Knochen werden bruechig und brechen leichter",
  },
  {
    begriff: "Sarkopenie",
    erklaerung:
      "Altersbedingter Muskelabbau — beginnt ab ca. 30 Jahren, 3-8% Verlust pro Jahrzehnt ohne Training",
  },
  {
    begriff: "Sehne",
    erklaerung:
      "Bindegewebsstrang, verbindet Muskel mit Knochen — uebertraegt Muskelkraft auf das Skelett",
  },
  {
    begriff: "Synovia",
    erklaerung:
      "Gelenkfluessigkeit — schmiert das Gelenk, ernaehrt den Knorpel, daempft Stoesse",
  },
  {
    begriff: "Synovialis (Membrana synovialis)",
    erklaerung:
      "Innere Schicht der Gelenkkapsel — produziert die Synovia. Bei RA Ziel der Autoimmunreaktion",
  },
];
