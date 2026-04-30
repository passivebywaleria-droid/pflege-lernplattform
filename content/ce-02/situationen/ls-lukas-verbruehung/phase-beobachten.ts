// CE-02 Situation Lukas — Phase 2: Beobachten
// Steps: 6 · Bloom: B3–B4 · Zeit: ~25–35 Min
// Brilliant-Prinzip: Step 2.1 — KUSS-Skala zeigen VOR Erklärung
// Quelle: phase-beobachten.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-lukas-beobachten",
  phase: "beobachten",
  titel: "Beobachten — Wundstatus, Schmerz, Kinderschutz-Befund",
  titelB1: "Schaün und Risiken finden",
  kontext:
    "Kathrin ist jetzt dabei. Gemeinsam schaut ihr euch Lukas an. Sandra hält ihn auf dem Schoß, hält seine rechte Hand — den linken Arm lässt sie frei zugänglich. Lukas ist ruhiger geworden, aber er beobachtet euch genau mit großen Augen. Wenn du dich bewegst, schaut er dir nach.\n\nDein Ziel: Eine systematische Beobachtung — Wundinspektion, Schmerzeinschätzung mit der KUSS-Skala, Suche nach weiteren Auffälligkeiten auf der Haut, Einschätzung des Trinkverhaltens und der Vitalzeichen. Das ist keine Routine-Untersuchung. Du beobachtest ein Kind, das Schmerzen hat und Angst vor Berührung — jede Bewegung muss angekündigt sein.\n\nDabei fällt dir noch etwas auf: Du schaust automatisch hin, ob es weitere auffällige Stellen an Lukas' Körper gibt. Das ist kein Misstraün — das ist fachliches Sehen. Kinderschutz-Abklärung heißt: genau hinschaün und dann systematisch einschätzen.",
  kontextB1:
    "Kathrin ist jetzt dabei. Ihr schaut euch Lukas gemeinsam an. Sandra hält Lukas auf dem Schoß. Den linken Arm lässt sie frei. Lukas ist ruhiger. Er schaut euch mit großen Augen an.\n\nDein Ziel: Du beobachtest Lukas systematisch (= nach einem Plan). Du prüfst: Wie ist die Wunde? Hat er Schmerzen? Hat er genug getrunken? Du prüfst die Vitalzeichen.\n\nDu schaust auch: Gibt es andere auffällige Stellen auf der Haut? Das ist kein Misstraün. Das ist fachliches Sehen. Jede Bewegung musst du ankündigen. Lukas hat Schmerzen und Angst.",
  kernSteps: [
    // Step 2.0b — Inline-Wissen: KUSS-Skala Grundlagen
    // Schüler kommt aus Phase 1 (Informieren) in Phase 2 (Beobachten). Bevor er die
    // KUSS-Skala anwendet (Step 2.1 — Brilliant-Highlight), braucht er das Grundwissen:
    // Was ist die KUSS-Skala, warum nicht NRS bei Kleinkindern?
    {
      stepId: "ce02-lukas-beob-00b-kuss-grundlagen",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Büttner/Finke 2000 — KUSS-Skala (validiert 0-4 Jahre)",
        "DNQP 2020 — Expertenstandard Schmerzmanagement",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-beob-kuss-grundlagen",
      tag: "pflege",
      themaPrimaer: "schmerz",
      themenSekundaer: ["säuglingspflege"],
      transition: "Du weißt jetzt was die KUSS-Skala ist. Schau dir Lukas an — und markiere, was du siehst.",
      contentC1: {
        title: "KUSS-Skala — Schmerzmessung bei Kindern, die nicht sprechen können",
        body: "",
        glossarBegriffe: ["KUSS-Skala", "NRS", "Fremdbeobachtung", "Schmerzassessment"],
      },
      contentB1: {
        title: "Wie misst man Schmerz bei kleinen Kindern?",
        body: "",
        glossarBegriffe: ["KUSS-Skala", "NRS (= Numeric Rating Scale)"],
      },
      inlineWissen: {
        bausteinRef: "schmerz-kuss-skala-grundlagen",
        storyAufhaenger:
          "Lukas ist 2,5 Jahre alt. Er kann nicht sagen: \"Mein Schmerz ist eine 8.\" Er sagt: \"Au-au-au! Mama!\" und dreht den Kopf weg. Wie misst du seinen Schmerz, wenn er ihn nicht in Zahlen ausdrücken kann?",
        storyAufhaengerB1:
          "Lukas ist 2,5 Jahre. Er kann nicht sagen wie stark sein Schmerz ist. Er weint und ruft nach Mama. Wie misst du trotzdem seinen Schmerz?",
        kerntext:
          "Bei Frau M. hast du die **NRS (Numeric Rating Scale)** kennengelernt — 0 bis 10, der Patient sagt eine Zahl. Das funktioniert bei Kindern unter 4 Jahren **nicht**. Sie verstehen Zahlen-Skalen noch nicht.\n\n**Stattdessen: KUSS (Kindliche Unbehagens- und Schmerz-Skala)**\n\n• **Validiert** für Kinder von 0 bis 4 Jahren (Büttner/Finke 2000).\n\n• **5 Beobachtungs-Kategorien** — du bewertest was du SIEHST, nicht was das Kind sagt:\n  1. Weinen\n  2. Gesichtsausdruck\n  3. Rumpfhaltung\n  4. Beinstellung\n  5. Motorische Unruhe\n\n• **Jede Kategorie: 0, 1 oder 2 Punkte** → Maximum 10 Punkte.\n\n• **Ab KUSS ≥ 4: interventionspflichtig** — genau wie bei NRS ≥ 4 bei Erwachsenen.\n\n**Der Unterschied zu NRS:** Du fragst nicht — du beobachtest. Das ist Fremdbeobachtung statt Selbstauskunft. Deshalb musst du wissen wie die Kategorien aussehen — gleich wirst du sie bei Lukas anwenden.",
        kerntextB1:
          "Bei Erwachsenen fragst du: \"Wie stark ist der Schmerz von 0 bis 10?\" (= NRS-Skala). Bei Kindern unter 4 Jahren geht das nicht — sie verstehen Zahlen noch nicht.\n\n**Stattdessen: KUSS-Skala**\n\n• Für Kinder von 0 bis 4 Jahren.\n\n• **5 Dinge beobachtest du:**\n  1. Weint das Kind?\n  2. Wie sieht das Gesicht aus?\n  3. Wie liegt der Körper?\n  4. Wie sind die Beine?\n  5. Bewegt sich das Kind unruhig?\n\n• Jede Kategorie: 0, 1 oder 2 Punkte. Zusammen: 0 bis 10.\n\n• **Ab 4 Punkte: Du musst handeln** — Schmerzmittel ansprechen.\n\n**Wichtig:** Du fragst das Kind NICHT nach dem Schmerz. Du schaust hin und bewertest was du siehst.",
        faustregel:
          "NRS bei Erwachsenen = fragen. KUSS bei Kleinkindern = beobachten. Ab ≥ 4 Punkte: immer handeln.",
        faustregelB1:
          "Bei Erwachsenen fragst du nach dem Schmerz. Bei kleinen Kindern beobachtest du. Ab 4 Punkte: handeln.",
        spektrum: [
          {
            patientName: "Frau M. (82, Sturz)",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "NRS — Selbstauskunft bei orientierten Erwachsenen",
            kurzbeschreibung:
              "Bei Frau M. nutzt du die NRS: \"Von 0 bis 10, wie stark?\" Sie kann antworten — auch wenn sie bagatellisiert (NRS 6 sagt sie, NRS 8 meint sie). Aber sie versteht die Frage. Lukas nicht.",
          },
          {
            patientName: "Herr Baür (82, Demenz)",
            situationsId: "ls-baür-demenz-sturz",
            hauptfaktor: "BESD/PAINAD — Fremdbeobachtung bei Demenz",
            kurzbeschreibung:
              "Herr Baür kann NRS nicht mehr zuverlässig zuordnen. Bei ihm nutzt du BESD (Beurteilung von Schmerzen bei Demenz) oder PAINAD — auch Fremdbeobachtung wie bei KUSS, aber mit anderen Kategorien (Atmung, Lautäußerung, Mimik, Körpersprache, Trostbarkeit).",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "NRS in Ruhe UND Bewegung",
            kurzbeschreibung:
              "Bei Frau Yilmaz nach Hüft-TEP: NRS getrennt in Ruhe und Bewegung erheben. Mobilisation gelingt nur bei Bewegungs-NRS ≤ 3-4. Bei Lukas gibt es diese Unterscheidung nicht — KUSS misst den Gesamtausdruck.",
          },
          {
            patientName: "Emilia (4 Monate, Bronchiolitis)",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "KUSS auch für Säuglinge validiert",
            kurzbeschreibung:
              "Emilia ist 4 Monate alt — KUSS funktioniert auch bei ihr. Aber die Beobachtung ist anders: Ein Säugling zeigt Schmerz subtiler (Stirnrunzeln, Nasenflügeln, veränderte Schlafmuster).",
          },
        ],
        karteikarte: {
          vorderseite:
            "Lukas (2,5 J.) schreit, grimassiert, zieht die Beine hoch und stößt dich weg. Du sollst seinen Schmerz messen. Warum nutzt du NRS nicht — und welche Skala nutzt du stattdessen?",
          rueckseite:
            "Kinder unter 4 Jahren verstehen Zahlen-Skalen nicht → keine NRS möglich. Stattdessen: **KUSS-Skala** (Büttner/Finke 2000) — 5 Beobachtungskategorien (Weinen, Gesichtsausdruck, Rumpfhaltung, Beinstellung, Motorische Unruhe), je 0-2 Punkte, max. 10.\n\nSpektrum: Frau M. (NRS), Baür (BESD/PAINAD), Yilmaz (NRS Ruhe+Bewegung), Emilia (KUSS auch bei Säuglingen).\n\nFaustregel: **NRS = fragen, KUSS = beobachten. Ab ≥ 4: immer handeln.**",
        },
      },
    },

    // Step 2.1 — Highlight: KUSS-Skala (BRILLIANT-Frage)
    {
      stepId: "ce02-lukas-beob-01-kuss-skala-brilliant",
      phase: 2,
      stepType: "highlight",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Büttner/Finke 2000 (KUSS-Skala, validiert 0–4 Jahre)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-beob-kuss",
      tag: "pflege",
      transition: "Lukas' Schmerzprofil ist dokumentiert. Jetzt: Was steckt unter dem Verband?",
      contentC1: {
        title: "KUSS-Skala — zürst schaün, dann erklären",
        body: "Vor dir liegt die KUSS-Skala (Kindliche Unbehagens- und Schmerzskala, Büttner/Finke 2000) mit 5 Beobachtungskategorien à 0–2 Punkten (max. 10). Du beobachtest Lukas im Aufnahmemoment — bevor das i.v.-Schmerzmittel voll wirkt. Markiere alle Kategorien, die bei Lukas gerade starken Schmerz anzeigen — ohne dass wir dir vorher erklären wie die Skala funktioniert. Nutz dein Vorwissen und deine Beobachtungsfähigkeit.",
        glossarBegriffe: ["KUSS-Skala"],
      },
      contentB1: {
        title: "KUSS-Skala — erst markieren, dann erklären",
        body: "Das ist die KUSS-Skala. Sie misst Schmerz bei kleinen Kindern. 5 Kategorien, je 0–2 Punkte (zusammen 0–10). Du beobachtest Lukas direkt bei Aufnahme — bevor das Schmerzmittel wirkt. Markiere: Welche Kategorien zeigen bei Lukas starken Schmerz? Erst du — dann erklären wir.",
        glossarBegriffe: ["KUSS-Skala"],
      },
      question: {
        fragetext:
          "Markiere alle KUSS-Kategorien, die bei Lukas gerade starken Schmerz anzeigen.",
        highlightSegments: [
          {
            text: "Weinen: lautes Schreien in Wellen, kurze Wimmerpausen, dann wieder anhaltendes Schreien — Lukas ist bei Aufnahme nicht beruhigbar",
            isError: true,
            reason:
              "KUSS-Kategorie 'Weinen' — Punkte: 0 = gar nicht, 1 = Stöhnen/Wimmern, 2 = Schreien. Lautes anhaltendes Schreien = 2 Punkte. Bei Aufnahme (vor i.v.-Analgesie) zeigt Lukas dies klar.",
            reasonB1:
              "Lautes Schreien = 2 Punkte. Das ist der Höchstwert für Weinen in der KUSS-Skala.",
          },
          {
            text: "Gesichtsausdruck: starkes Grimassieren, fest zusammengekniffene Augen, verzerrter Mund — Lukas kann Schmerz nicht verbal ausdrücken",
            isError: true,
            reason:
              "KUSS-Kategorie 'Gesichtsausdruck' — Punkte: 0 = entspannt, 1 = Mund leicht geöffnet, 2 = Mund/Augen zusammengekniffen/Grimasse. Hier: deutliches Grimassieren = 2 Punkte. Wichtiger Indikator, weil Lukas nicht sagen kann wie stark der Schmerz ist.",
            reasonB1:
              "Starkes Grimassieren = 2 Punkte. Sehr wichtig, weil Lukas nicht sagen kann wie viel Schmerz er hat.",
          },
          {
            text: "Rumpfhaltung: unruhig, angespannter Oberkörper, zieht sich beim Annähern leicht zurück",
            isError: true,
            reason:
              "KUSS-Kategorie 'Rumpfhaltung' — Punkte: 0 = entspannt, 1 = unruhig, 2 = verkrampft/aufbäumend. Hier: angespannt/unruhig, aber nicht aufbäumend = 1 Punkt (i.v.-Analgesie beginnt zu wirken).",
            reasonB1:
              "Unruhiger, angespannter Körper = 1 Punkt. Nicht ganz verkrampft — Schmerzmittel wirkt langsam.",
          },
          {
            text: "Beinstellung: Beine fest hochgezogen, kräftiges Strampeln mit dem gesunden Bein",
            isError: true,
            reason:
              "KUSS-Kategorie 'Beinstellung' — Punkte: 0 = entspannt, 1 = zappelnd, 2 = hochgezogen/strampelnd. Hier: kräftiges Strampeln + Hochziehen = 2 Punkte.",
            reasonB1:
              "Beine hochziehen + strampeln = 2 Punkte. Typisches starkes Schmerzzeichen bei Kleinkindern.",
          },
          {
            text: "Motorische Unruhe: mäßig unruhig, greift wiederholt nach Sandra, stößt gelegentlich weg wenn du dich näherst",
            isError: true,
            reason:
              "KUSS-Kategorie 'Motorische Unruhe' — Punkte: 0 = nicht vorhanden, 1 = mäßig, 2 = ruhelos/strampelnd. Hier: mäßige Unruhe mit gelegentlichem Wegstoßen = 1 Punkt (i.v.-Schmerzmittel beginnt zu wirken). Summe aller 5 Kategorien: 2+2+1+2+1 = KUSS 8/10. Das i.v.-Schmerzmittel wirkt bereits teilweise — ohne Analgesie wäre der Score 10/10.",
            reasonB1:
              "Mäßige Unruhe = 1 Punkt (Schmerzmittel beginnt zu wirken). Zusammen: 2+2+1+2+1 = 8 Punkte. Sehr starker Schmerz, Schmerzmittel wirkt gerade erst.",
          },
        ],
      },
    },

    // Step 2.1b — Inline-Wissen: Verbrühungsgrade (1, 2a, 2b, 3)
    // Schüler hat gerade die KUSS-Skala angewendet und Lukas' Schmerz beobachtet.
    // Bevor Kathrin den Verband löst (Step 2.2), braucht er das Grundwissen:
    // Welche Verbrühungsgrade gibt es, wie sehen sie aus, welche Prognose?
    {
      stepId: "ce02-lukas-beob-01b-verbrühungsgrade",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DGV 2023 — Leitlinie Thermische Verletzungen",
        "Wallace 1951 — Neunerregel",
        "Lund/Browder 1944 — Altersangepasste KOF-Berechnung",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-lukas-beob-verbrühungsgrade",
      tag: "krankheitslehre",
      themaPrimaer: "haut",
      themenSekundaer: ["säuglingspflege"],
      transition: "Jetzt weißt du die Grade. Kathrin löst den Verband — schau genau hin.",
      contentC1: {
        title: "Verbrühungsgrade — 4 Stufen, 4 Prognosen",
        body: "",
        glossarBegriffe: ["Grad 1", "Grad 2a", "Grad 2b", "Grad 3", "Nekrose", "Epithelisierung"],
      },
      contentB1: {
        title: "Verbrühungsgrade — von leicht bis schwer",
        body: "",
        glossarBegriffe: ["Grad 2a", "Nekrose (= abgestorbenes Gewebe)"],
      },
      inlineWissen: {
        bausteinRef: "haut-verbrühungsgrade-uebersicht",
        storyAufhaenger:
          "Kathrin wird gleich den Verband lösen. Was wirst du sehen? Bei Lukas steht \"Grad 2a\" auf der Notaufnahmekarte. Aber was bedeutet das genau — und wie unterscheidest du 2a von 2b oder 3?",
        storyAufhaengerB1:
          "Kathrin löst gleich den Verband. Auf der Karte steht \"Grad 2a\". Was bedeutet das? Wie sieht Grad 2a aus — und wie sehen die anderen Grade aus?",
        kerntext:
          "**Die 4 Verbrühungsgrade (DGV 2023):**\n\n• **Grad 1** — nur Epidermis (Oberhaut). Rötung, Brennen, KEINE Blasen. Wie Sonnenbrand. Heilt in 3-5 Tagen von allein.\n\n• **Grad 2a** — oberflächliche Dermis. **Feuchte Blasen**, rosige Wundfläche, **schmerzhaft** (Nervenenden intakt). Heilt in **10-14 Tagen** ohne Narben bei richtiger Wundversorgung.\n\n• **Grad 2b** — tiefe Dermis. **Trockene, mattweißliche Blasen**, Schmerzempfinden **reduziert** (Nervenenden teilzerstört). Heilt langsam (3-4 Wochen), **Narbenbildung wahrscheinlich**, evtl. OP-pflichtig.\n\n• **Grad 3** — alle Hautschichten zerstört. **Keine Schmerzen** (alle Nerven zerstört), weißlich-braune oder schwarze Nekrose, lederartig. Heilt NICHT von allein — immer OP (Hauttransplantation).\n\n**Merkhilfe:** Je höher der Grad, desto **weniger Schmerz** — weil mehr Nerven zerstört sind. Ein schmerzloses Verbrühungsareal ist ein Alarmsignal, kein gutes Zeichen.\n\n**Bei Lukas:** Feuchte Blasen + starker Schmerz (KUSS 8/10) + rosige Wundfläche = **Grad 2a**. Prognose: Heilt in 10-14 Tagen bei feuchter Wundbehandlung.",
        kerntextB1:
          "**4 Verbrühungsgrade (DGV 2023):**\n\n• **Grad 1** — Rötung, Brennen, keine Blasen. Wie Sonnenbrand. Heilt in 3-5 Tagen.\n\n• **Grad 2a** — **feuchte Blasen**, Schmerzen, rosige Haut. Heilt in **10-14 Tagen** ohne Narben.\n\n• **Grad 2b** — **trockene, weißliche Blasen**, weniger Schmerzen. Heilt langsam, Narben möglich.\n\n• **Grad 3** — **kein Schmerz** (alle Nerven zerstört), schwarze oder braune Haut. Heilt nur mit OP.\n\n**Merkhilfe:** Weniger Schmerz = schlimmerer Grad. Ein schmerzloses Verbrühungsgebiet ist gefährlich.\n\n**Bei Lukas:** Feuchte Blasen + starke Schmerzen + rosige Haut = **Grad 2a**. Heilt in 10-14 Tagen.",
        faustregel:
          "Je weniger Schmerz bei Verbrühung, desto schlimmer der Grad. Schmerzfreiheit = Alarmsignal.",
        faustregelB1:
          "Weniger Schmerz bei Verbrühung = schlimmerer Grad. Kein Schmerz = gefährlich.",
        spektrum: [
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Operationswunde — andere Wundklassifikation",
            kurzbeschreibung:
              "Bei Frau Yilmaz ist die Wunde chirurgisch (sauberer Schnitt, genähte Wundränder). Andere Klassifikation als thermische Verletzung: primäre vs. sekundäre Wundheilung. Aber das Prinzip der Wundbeobachtung ist identisch: Rötung, Schwellung, Exsudat, Geruch.",
          },
          {
            patientName: "Frau Yilmaz (Dekubitus)",
            situationsId: "ls-yilmaz-spirale2",
            hauptfaktor: "Dekubitus — Kategorien statt Grade",
            kurzbeschreibung:
              "Dekubitus wird in 4 Kategorien (EPUAP/NPUAP) klassifiziert — nicht Grade. Kategorie 1 = nicht wegdrückbare Rötung, Kategorie 4 = freiliegender Knochen. Ähnliches Prinzip wie Verbrühungsgrade: steigende Gewebstiefe.",
          },
          {
            patientName: "Herr Petrov (Schlaganfall)",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Haut-Integrität bei Immobilität",
            kurzbeschreibung:
              "Herr Petrov hat keine Verbrühung — aber seine Immobilität nach dem Schlaganfall macht die Haut verletzlich. Dekubitus-Risiko durch fehlende Druckentlastung. Die Hautbeobachtung (Rötung, Blasen, Nekrose) folgt derselben Logik.",
          },
        ],
        sonstBox:
          "Für Kinder gibt es statt der Wallace-Neunerregel die **Lund-Browder-Tabelle** — sie berücksichtigt, dass der Kopf bei Kleinkindern relativ größer ist als bei Erwachsenen (~18 % statt 9 % KOF). Die Handinnenfläche des Patienten = ca. 1 % KOF (\"Handflächenregel\") — für schnelle Ersteinschätzung im Rettungsdienst.",
        sonstBoxB1:
          "Für Kinder gibt es eine eigene KOF-Tabelle (**Lund-Browder**) — der Kopf eines Kleinkindes ist im Verhältnis zum Körper größer als bei Erwachsenen. Schnelle Schätzung: Die Handinnenfläche des Patienten = ca. 1 % KOF.",
        karteikarte: {
          vorderseite:
            "Lukas hat feuchte Blasen, starke Schmerzen (KUSS 8/10) und eine rosige Wundfläche. Welcher Verbrühungsgrad — und warum wäre es ein schlechtes Zeichen wenn er KEINE Schmerzen hätte?",
          rueckseite:
            "Grad 2a (oberflächliche Dermis): feuchte Blasen, Schmerz erhalten, rosige Wundfläche. Prognose: Heilung in 10-14 Tagen.\n\nSchmerzfreiheit bei Verbrühung = Nerven zerstört = Grad 2b oder 3 = tiefere Schädigung, schlechtere Prognose. Grad 3: keine Nerven, keine Heilung ohne OP.\n\nSpektrum: Yilmaz/Hüft-TEP (OP-Wunde), Yilmaz/Spirale2 (Dekubitus-Kategorien), Petrov (Immobilitäts-Haut).\n\nFaustregel: **Je weniger Schmerz, desto schlimmer der Grad.**",
        },
      },
    },

    // Step 2.2 — Text (scenario): Wundinspektion
    {
      stepId: "ce02-lukas-beob-02-wundinspektion",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Deutsche Gesellschaft für Verbrennungsmedizin (DGV) 2023"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-lukas-beob-wundinspektion",
      tag: "krankheitslehre",
      displayFormat: "scenario",
      bildkategorie: "prozedur",
      imageAlt:
        "Pflegeperson schaut vorsichtig Wundauflage eines Kleinkindes an, Mutter hält Kind ruhig, beide in entspannter Haltung",
      bildhinweis:
        "Nurse carefully inspecting wound dressing on toddler arm, mother holding child calmly, kind face-to-face interaction, pediatric ward, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Wundinspektion — was ihr seht",
        body: "Lukas, Zimmer 3, Kinderstation.\n\nKathrin löst vorsichtig den provisorischen Verband. Lukas weint kurz auf, greift nach Sandras Hand. Kathrin kündigt jede Bewegung an: \"Ich schaue jetzt kurz hin — das daürt nur einen Moment.\"\n\nWas ihr seht:\n- Linker Unterarm: 2–3 feuchte Blasen, Durchmesser 2–3 cm, noch intakt (nicht geplatzt)\n- Linke Schulter + Thorax lateral: Rötung mit weißlicher Oberfläche, Wundfläche nässend (Exsudat klar-gelblich)\n- Keine schwarz-weißliche Trockennekrose\n- Wundumgebung: leicht gerötet, warm\n- Schmerzreaktion: Lukas reagiert auf Berührung der Wundfläche — zieht sich zurück, KUSS-Score momentweise auf 8/10\n\n**Einordnung: Grad 2a.** Warum? Feuchte Blasen (intakt) + erhaltenes Schmerzempfinden + rosig-rötliche Wundfläche ohne Nekrose. Grad 2b hätte trockene, mattweißliche Blasen und vermindertes Schmerzempfinden. Grad 3 wäre schmerzlos (nerves destroyed) mit Nekrose. Quelle: _(DGV-Leitlinie Thermische Verletzungen, 2023)_.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a ~15 % KOF. Wundinspektion Tag 1 nach Erstversorgung in der Notaufnahme.",
        glossarBegriffe: ["Grad 2a", "Exsudat", "Nekrose", "KOF"],
      },
      contentB1: {
        title: "Die Wunde — was wir sehen",
        body: "Lukas, Zimmer 3.\n\nKathrin löst den Verband. Lukas weint kurz. Kathrin sagt: \"Ich schaue nur kurz — gleich fertig.\"\n\nWas ihr seht:\n- Linker Unterarm: feuchte Blasen (2–3 cm), noch intakt\n- Linke Schulter + Thorax: Rötung, Wundfläche nässt (= Exsudat)\n- Keine schwarzen oder weißen trockenen Stellen\n- Lukas hat Schmerzen wenn man die Wunde berührt\n\n**Das ist Grad 2a.** Feuchte Blasen + Schmerzen + Rötung = Grad 2a. Gut: Das heilt normalerweise gut — aber es braucht richtige Wundversorgung.",
        fallbezug:
          "Lukas K., 2,5 J., Verbrühung Grad 2a. Wundinspektion Tag 1.",
        glossarBegriffe: ["Grad 2a", "Exsudat", "KOF"],
      },
    },

    // Step 2.3 — MC: Wundgradierung
    {
      stepId: "ce02-lukas-beob-03-wundgradierung-mc",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DGV-Leitlinie 2023"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-beob-grad",
      tag: "krankheitslehre",
      contentC1: {
        title: "Welcher Verbrühungsgrad liegt vor?",
        body: "Lukas hat feuchte, schmerzhafte Blasen, eine rosige Wundumgebung und keine schwarz-weißen Areale. Welcher Verbrühungsgrad liegt vor?",
        glossarBegriffe: ["Verbrühungsgrad", "Nekrose"],
      },
      contentB1: {
        title: "Welcher Grad?",
        body: "Lukas hat feuchte Blasen. Die Wunde ist schmerzhaft. Keine schwarzen oder weißen Stellen. Welcher Grad?",
        glossarBegriffe: ["Verbrühungsgrad"],
      },
      question: {
        fragetext:
          "Feuchte, schmerzhafte Blasen, rosige Wundumgebung, keine Nekrose — welcher Grad?",
        optionen: [
          {
            text: "Grad 1 — Rötung, keine Blasen",
            isCorrect: false,
            explanation:
              "Falsch. Blasen schließen Grad 1 aus. Grad 1 ist oberflächlich (Epidermis) — typisch Sonnenbrand: Rötung, Brennen, keine Blasen. Bei Lukas sind Blasen eindeutig vorhanden.",
            explanationB1:
              "Falsch. Grad 1 hat keine Blasen. Lukas hat Blasen.",
          },
          {
            text: "Grad 2a — feuchte Blasen, schmerzhaft, oberflächlich",
            isCorrect: true,
            explanation:
              "Richtig. Grad 2a ist die oberflächliche Dermis — feuchte (flüssigkeitsgefüllte) Blasen, intakte Nervenendigungen (deshalb schmerzhaft), rosige Wundfarbe. Prognose: Heilt bei richtiger Versorgung in 10–14 Tagen ohne Narbenbildung. Quelle: _(DGV 2023)_.",
            explanationB1:
              "Richtig. Feuchte Blasen + Schmerzen = Grad 2a. Heilt in 10–14 Tagen bei guter Versorgung.",
          },
          {
            text: "Grad 2b — trockene Blasen, verminderte Schmerzempfindung",
            isCorrect: false,
            explanation:
              "Falsch. Grad 2b betrifft die tiefe Dermis — Blasen sind trockener, mattweißlich, Schmerzempfinden ist reduziert (Nervenendigungen geschädigt). Lukas hat nachweislich Schmerzen (KUSS 8/10) — das schließt 2b aus.",
            explanationB1:
              "Falsch. Grad 2b: weniger Schmerzen, trockene Blasen. Lukas hat aber starke Schmerzen — das ist Grad 2a.",
          },
          {
            text: "Grad 3 — keine Schmerzen, Nekrose",
            isCorrect: false,
            explanation:
              "Falsch. Grad 3 ist eine vollständige Zerstörung aller Hautschichten — keine Schmerzempfindung mehr (alle Nerven zerstört), weißlich-braune oder schwarze Verfärbung, kein Exsudat. Lukas hat starke Schmerzen und feuchte Blasen — weit entfernt von Grad 3.",
            explanationB1:
              "Falsch. Grad 3: keine Schmerzen, dunkle Hautfarbe, Nekrose. Lukas hat starke Schmerzen und feuchte Blasen.",
          },
        ],
      },
    },

    // Step 2.4 — Categorize: Hämatome screening
    {
      stepId: "ce02-lukas-beob-04-hämatome-screening",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["§ 4 KKG 2012", "Bundesarbeitsgemeinschaft Kinderschutz 2020"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-lukas-beob-kinderschutz-screening",
      tag: "pflege",
      contentC1: {
        title: "Körperbefunde kinderschutzrelevant einordnen",
        body: "Beim Ausziehen von Lukas für die vollständige Körperuntersuchung schaut ihr systematisch hin. Fünf Befunde werden euch beschrieben. Ordne jeden Befund der richtigen Kategorie zu: Bekannt/erklärt, Unauffällig, oder Abklärungswürdig.",
        glossarBegriffe: ["Hämatom", "Kinderschutz-Screening"],
      },
      contentB1: {
        title: "Was sehen wir bei Lukas?",
        body: "Ihr schaut Lukas' ganzen Körper an. Fünf Befunde werden beschrieben. Sortiere sie: Bekannt, Unauffällig, oder Abklärungswürdig?",
        glossarBegriffe: ["Hämatom"],
      },
      question: {
        fragetext:
          "Ordne jeden Befund der richtigen Kategorie zu.",
        categories: [
          { name: "Befund bekannt / erklärt" },
          { name: "Befund unauffällig" },
          { name: "Befund abklärungswürdig" },
        ],
        categoryItems: [
          {
            text: "Verbrühungsfläche linker Arm + linker Thorax — feuchte Blasen, bekannt seit Aufnahme",
            correctCategory: 0,
          },
          {
            text: "Kleiner Bluterguss rechtes Knie (2 cm, gelblich-grün verfärbt) — Sandra erklärt: Lukas ist letzte Woche beim Spielen gefallen",
            correctCategory: 0,
          },
          {
            text: "Haut an Rücken und Gesäß: unauffällig, keine Hämatome, keine alten Verletzungen",
            correctCategory: 1,
          },
          {
            text: "Schleimhäute: feucht-rosig, Mundhöhle unauffällig",
            correctCategory: 1,
          },
          {
            text: "Zahnstatus: Milchzähne intakt, keine Karies, keine Verletzungen der Mundschleimhaut",
            correctCategory: 1,
          },
        ],
      },
    },

    // Step 2.5 — TrueFalse: Flüssigkeitshaushalt
    {
      stepId: "ce02-lukas-beob-05-trinken-mundschleimhaut",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Holliday/Segar 1957", "GNPI 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-beob-trinken",
      tag: "krankheitslehre",
      contentC1: {
        title: "Flüssigkeitshaushalt bei Lukas — was stimmt?",
        body: "Lukas hat seit dem Unfall um 09:20 Uhr kaum getrunken. Die Mundschleimhaut ist leicht trocken. Prüfe vier Aussagen zu seinem Flüssigkeitshaushalt.",
        glossarBegriffe: ["Exsikkose", "Holliday-Segar-Regel"],
      },
      contentB1: {
        title: "Lukas trinkt zu wenig — was ist richtig?",
        body: "Lukas hat seit dem Unfall kaum getrunken. Die Mundschleimhaut ist leicht trocken. Vier Aussagen — wahr oder falsch?",
        glossarBegriffe: ["Exsikkose (= Austrocknung)"],
      },
      question: {
        fragetext: "Wahr oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Lukas hat seit dem Unfall nur wenig getrunken — das ist bei Verbrühungen normal und kein Risiko.",
            isTrue: false,
            explanation:
              "Falsch. Verbrühungen erhöhen den Flüssigkeitsbedarf: Wundexsudat (Flüssigkeitsverlust durch die Wundfläche) + Stressmetabolismus + Schmerz steigern den Bedarf. Geringe Trinkmenge bei Verbrühung ist ein Risikofaktor für Exsikkose — kein Normalzustand.",
          },
          {
            statement:
              "Trockene Mundschleimhaut ist ein früher Hinweis auf Exsikkose (Austrocknung).",
            isTrue: true,
            explanation:
              "Richtig. Trockene Schleimhäute (Mund, Lippen) zählen zu den frühen klinischen Zeichen der Exsikkose — noch bevor Laborwerte sich verändern. Bei Kleinkindern entwickelt sich Exsikkose schnell (geringes Körpergewasser-Volumen relativ zum Bedarf).",
          },
          {
            statement:
              "Kinder mit Verbrühungen haben keinen erhöhten Flüssigkeitsbedarf im Vergleich zu gesunden Kindern.",
            isTrue: false,
            explanation:
              "Falsch. Der Grundbedarf (Holliday-Segar-Regel: 1160 ml/Tag für Lukas) wird bei Verbrühungen durch den Wundflüssigkeitsverlust erhöht. Zusatzbedarf: ca. 1–2 ml/kg/% KOF in den ersten 24h. Verbrühungspatienten brauchen engmaschige Flüssigkeitsbilanzierung.",
          },
          {
            statement:
              "Lukas kann mir sagen wenn er Durst hat — Kleinkinder können Hunger und Durst gut kommunizieren.",
            isTrue: false,
            explanation:
              "Falsch. Mit 2,5 Jahren hat Lukas noch begrenzte sprachliche und interoceptive Fähigkeit, Durst zuverlässig zu signalisieren. Bei Schmerzen und Stress ist die Wahrnehmung weiter eingeschränkt. Die Pflegeperson muss aktiv Trinkangebote machen — nicht warten bis Lukas bittet.",
          },
        ],
      },
    },

    // Step 2.6 — Comparison: Vitalwerte altersgerecht
    {
      stepId: "ce02-lukas-beob-06-vitalwerte-altersgerecht",
      phase: 2,
      stepType: "comparison",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["GNPI 2022", "Hoehl/Kullick 2019"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-lukas-beob-vitalwerte",
      tag: "anatomie",
      contentC1: {
        title: "Vitalwerte — altersgerecht einschätzen",
        body: "Lukas' Vitalwerte bei Aufnahme: HF 142/min, AF 28/min, SpO₂ 98 %, RR 90/58 mmHg, Temp 37,4 °C. Vergleiche sie mit den Normwerten für Kleinkinder (2–3 Jahre). Bewerte jede Zeile: normal, leicht abweichend oder kritisch.",
        glossarBegriffe: ["Herzfreqünz", "Atemfreqünz", "SpO₂", "Normwerte Kleinkind"],
      },
      contentB1: {
        title: "Lukas' Vitalwerte — sind sie normal?",
        body: "Lukas hat diese Vitalwerte: HF 142/min, AF 28/min, SpO₂ 98 %, RR 90/58 mmHg, Temp 37,4 °C. Vergleiche mit den Normalwerten für Kleinkinder. Was ist normal, was ist auffällig?",
        glossarBegriffe: ["Herzfreqünz (= Herzschlag pro Minute)", "Atemfreqünz (= Atemzüge pro Minute)", "SpO₂ (= Saürstoff im Blut)"],
      },
      question: {
        fragetext:
          "Bewerte jeden Vitalwert: normal, leicht abweichend oder kritisch?",
        columns: [
          { label: "Parameter" },
          { label: "Lukas bei Aufnahme" },
          { label: "Normwert (2–3 Jahre)" },
          { label: "Einschätzung" },
        ],
        rows: [
          {
            criterion: "Herzfreqünz",
            values: [
              "HF 142/min",
              "100–140/min",
              "Leicht erhöht — erklärbar durch Schmerz und Stress. Kein Alarmsignal, aber Verlaufsbeobachtung nötig.",
            ],
            valuesB1: [
              "HF 142/min",
              "100–140/min",
              "Leicht zu hoch — durch Schmerz und Stress. Wird beobachtet.",
            ],
            highlight: 2,
          },
          {
            criterion: "Atemfreqünz",
            values: [
              "AF 28/min",
              "20–30/min",
              "Normal — liegt gut im Normbereich für das Alter.",
            ],
            valuesB1: [
              "AF 28/min",
              "20–30/min",
              "Normal für Kleinkinder.",
            ],
          },
          {
            criterion: "SpO₂",
            values: [
              "SpO₂ 98 %",
              "≥ 95 %",
              "Normal — keine Atemwegbeteiligung (keine Inhalationsverletzung bestätigt).",
            ],
            valuesB1: [
              "SpO₂ 98 %",
              "≥ 95 %",
              "Normal. Lunge ist nicht verletzt.",
            ],
          },
          {
            criterion: "Blutdruck",
            values: [
              "RR 90/58 mmHg",
              "85–100/55–65 mmHg",
              "Normal — liegt im altersgerechten Bereich. Merke: Kleinkinder haben physiologisch niedrigeren Blutdruck als Erwachsene.",
            ],
            valuesB1: [
              "RR 90/58 mmHg",
              "85–100/55–65 mmHg",
              "Normal. Kleinkinder haben niedrigeren Blutdruck als Erwachsene.",
            ],
          },
          {
            criterion: "Temperatur",
            values: [
              "Temp 37,4 °C",
              "36,5–37,5 °C",
              "Normal — kein Fieber, kein Infektionszeichen zum Aufnahmezeitpunkt.",
            ],
            valuesB1: [
              "Temp 37,4 °C",
              "36,5–37,5 °C",
              "Normal. Kein Fieber.",
            ],
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 30,
};
