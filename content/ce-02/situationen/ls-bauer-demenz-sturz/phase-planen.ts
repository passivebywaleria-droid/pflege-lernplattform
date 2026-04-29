// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 3: Pflege planen
// Steps: 7 (4 Kern + 1 Inline-Wissen + 2 Optional) · Bloom: B2-B4
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-planen.md
// Pipeline v9 — 2026-04-23
// Inline-Wissen: 1 Baustein (ganzkörperpflege bei Demenz — Vorbereitung Morgenpflege)

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_PLANEN: SituationsPhase = {
  phaseId: "ls-bauer-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Du hast Herrn Bauer beobachtet. Du hast Informationen gesammelt. Jetzt musst du entscheiden, was zu tun ist — nicht nach Bauchgefühl, sondern nach System. Der Pflegeprozess verlangt, dass du Ziele formulierst, bevor du handelst. Was soll nach einer Woche anders sein als heute? Drei Problemfelder warten auf deinen Plan: 1) Sturzgefahr — Herr Bauer ist letzte Nacht gestürzt. 2) Körperpflege und Kontraktur — er lehnt Pflege ab. 3) Trinken und Mundschleimhaut — 900 ml sind zu wenig.",
  kontextB1:
    "Du weißt jetzt: Herr Bauer hat drei große Probleme. Erstens: Er kann wieder stürzen. Zweitens: Seine Knie werden steifer, weil er Körperpflege ablehnt. Drittens: Er trinkt zu wenig. Für jedes Problem brauchst du: ein Ziel und eine Maßnahme.",
  kernSteps: [
    // Step 3.1 — Freetext: Pflegeziele formulieren
    {
      stepId: "ce02-bauer-plan-01-ziele-formulieren",
      phase: 3,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier (1981): Pflegeprozess-Modell"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-plan-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele formulieren",
        body: "Formuliere für ZWEI der drei Problemfelder je ein messbares Pflegeziel. Hinweis: Ein Pflegeziel nennt, was der Patient in X Tagen zeigen/können/erleben soll — konkret und überprüfbar.",
        glossarBegriffe: ["Pflegeziel", "Pflegeprozess", "messbar"],
      },
      contentB1: {
        title: "Pflegeziele schreiben",
        body: "Schreibe für ZWEI Probleme je ein Pflegeziel. Ein Pflegeziel sagt: Was soll Herr Bauer in X Tagen zeigen oder schaffen? Es muss messbar sein (= man kann prüfen ob es erreicht wurde).",
        glossarBegriffe: ["Pflegeziel", "messbar"],
      },
      question: {
        fragetext:
          "Formuliere für zwei der drei Problemfelder (Sturzgefahr / Kontraktur / Trinken) je ein messbares Pflegeziel.",
        musterantwort:
          "Sturzgefahr: Herr Bauer stürzt in den nächsten 7 Tagen nicht erneut, nachdem Nachtlicht, Niedrigbett und Toilettenangebot vor dem Schlafengehen eingeführt wurden. — Trinken: Herr Bauer nimmt täglich mindestens 1300 ml Flüssigkeit zu sich, ermöglicht durch Malzbier-Angebot und Trinkprotokoll.",
        bewertungskriterien: [
          "Pflegeziel ist messbar (konkrete Zahl oder beobachtbares Verhalten)",
          "Zeitrahmen genannt (z. B. in 7 Tagen)",
          "Patientenorientiert formuliert (nicht: 'die Pflege soll...')",
        ],
        satzanfaengeB1: [
          "Herr Bauer stürzt in den nächsten ... Tagen nicht, weil ...",
          "Herr Bauer trinkt täglich mindestens ... ml, indem ...",
          "Herrn Bauers Knie können sich ... bewegen nach ...",
        ],
      },
    },

    // Step 3.2 — Matching: Sturzprophylaxe-Maßnahmen
    {
      stepId: "ce02-bauer-plan-02-sturzprophylaxe-massnahmen",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-bauer-plan-sturzschutz",
      tag: "pflege",
      contentC1: {
        title: "Sturzschutz-Maßnahmen zuordnen",
        body: "Welche Sturzschutz-Maßnahme gehört zu welchem Sturzrisiko? Ordne die 5 Paare zu.",
        glossarBegriffe: ["Sturzprophylaxe", "Niedrigbett", "Sensormatte"],
      },
      contentB1: {
        title: "Welche Maßnahme passt wozu?",
        body: "Verbinde jede Maßnahme mit ihrem passenden Sturzrisiko.",
        glossarBegriffe: ["Sturzprophylaxe", "Nachtlicht", "Niedrigbett"],
      },
      question: {
        fragetext:
          "Ordne jede Sturzschutz-Maßnahme dem passenden Risikofaktor zu.",
        matchingPairs: [
          {
            left: "Nachtlicht + Sensormatte am Bett",
            right: "Desorientierung in der Nacht",
          },
          {
            left: "Niedrigbett-Position zur Nacht",
            right: "Sturzfolgen reduzieren (Höhe verringern)",
          },
          {
            left: "Tagesstruktur mit Beschäftigungsangeboten",
            right: "Unruhe und Weglauftendenz",
          },
          {
            left: "Toilettengang vor dem Schlafengehen anbieten",
            right: "Nächtlicher Harndrang als Aufsteh-Auslöser",
          },
          {
            left: "Rutschfeste Socken",
            right: "Bodenkontakt beim unerwarteten Aufstehen",
          },
        ],
      },
    },

    // Step 3.2b — Inline-Wissen: Ganzkörperpflege bei Demenz
    // Bevor der Schueler den Bewegungsablauf der Morgenpflege plant (3.3), muss er
    // verstehen: Ganzkörperpflege bei Demenz ist NICHT nur Hygiene — sie ist
    // Beziehungsgestaltung, Schmerzbeobachtung und Kontraktur-Prophylaxe in einem.
    {
      stepId: "ce02-bauer-plan-02b-ganzkoerperpflege-demenz",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Bienstein C./Froehlich A. (2021): Basale Stimulation in der Pflege",
        "DNQP 2018 — Beziehungsgestaltung bei Demenz",
        "Kitwood T. (1997): Dementia Reconsidered",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-ganzkoerperpflege",
      tag: "pflege",
      themaPrimaer: "ganzkörperpflege",
      themenSekundaer: ["basale-stimulation", "kontraktur-prophylaxe"],
      transition: "Ganzkörperpflege ist bei Herrn Bauer mehr als Hygiene. Jetzt: der konkrete Bewegungsablauf.",
      contentC1: {
        title: "Ganzkörperpflege bei Demenz — drei Ziele in einer Handlung",
        body: "",
        glossarBegriffe: ["Ganzkörperpflege", "Initialberuehrung", "Beziehungsgestaltung"],
      },
      contentB1: {
        title: "Wie pflege ich Herrn Bauer?",
        body: "",
        glossarBegriffe: ["Ganzkörperpflege", "Beziehungsgestaltung"],
      },
      inlineWissen: {
        bausteinRef: "ganzkoerperpflege-bei-demenz",
        storyAufhaenger:
          "Morgen frueh wirst du Herrn Bauer waschen. Er hat heute bei der Gesichtswaesche zugeschlagen. Er trinkt wenig. Seine Knie werden steifer. Die Ganzkörperpflege ist deine einzige Gelegenheit, drei Probleme gleichzeitig anzugehen — aber nur wenn du sie richtig planst.",
        storyAufhaengerB1:
          "Morgen frueh waeschst du Herrn Bauer. Heute hat er zugeschlagen als du sein Gesicht waschen wolltest. Seine Knie werden steifer. Er trinkt zu wenig. Die Morgen-Pflege ist deine Chance, drei Probleme auf einmal zu loesen.",
        kerntext:
          "Ganzkörperpflege bei Menschen mit Demenz verfolgt **drei Ziele gleichzeitig** (Bienstein/Froehlich 2021, Kitwood 1997):\n\n**1. Beziehungsgestaltung (DNQP 2018)**\n\n• Initialberuehrung an immer gleicher Stelle (z. B. Schulter) — Wiedererkennungs-Signal\n• Jeden Handgriff ankuendigen: \"Ich wasche jetzt deinen rechten Arm\"\n• Nie gegen Widerstand waschen — Pause ist legitim\n• Biografische Ressourcen nutzen: Lieblingsmusik, vertraute Gerueche\n\n**2. Schmerzbeobachtung (BESD waehrend Pflege)**\n\n• Jede Beruehrung ist eine diagnostische Gelegenheit: Reagiert er mit Grimasse? Abwehr? Steifheit?\n• BESD in Ruhe VOR der Pflege, dann WAEHREND der Pflege (Bewegung) erheben\n\n**3. Kontraktur-Prophylaxe (integriert)**\n\n• Arme und Beine waehrend der Waschung aktiv-assistiv bewegen\n• Fußsohlenstimulation beim Abtrocknen (Spitzfuß-Prophylaxe)\n• Maximaler Bewegungsumfang nutzen — nicht ueber Schmerzgrenze\n\n**Reihenfolge nach Hygiene:**\n\nGesicht → Haende/Arme → Brust → Bauch → Ruecken → Beine/Fueße → Genital → Anal\n(sauber → unrein, DNQP Hygienestandard)",
        kerntextB1:
          "Ganzkörperpflege bei Demenz hat **drei Ziele auf einmal**:\n\n**1. Beziehung aufbauen**\n\n• Immer an der gleichen Stelle anfassen (z. B. Schulter) — so erkennt er dich wieder\n• Immer sagen was du tust: \"Ich wasche jetzt deinen Arm\"\n• Stoppen wenn er sich wehrt\n• Musik anmachen die er mag\n\n**2. Schmerz beobachten**\n\n• Jede Beruehrung zeigt dir: Hat er Schmerzen? Grimasse? Steifheit? Abwehr?\n• BESD vor der Pflege und waehrend der Pflege messen\n\n**3. Gelenke bewegen**\n\n• Arme und Beine beim Waschen bewegen\n• Fußsohlen beim Abtrocknen stimulieren\n• Nicht ueber die Schmerzgrenze gehen\n\n**Reihenfolge:** Gesicht zuerst → Arme → Brust → Bauch → Ruecken → Beine → Genitalbereich zuletzt (sauber nach unrein)",
        faustregel:
          "Ganzkörperpflege bei Demenz ist nicht Hygiene — sie ist Beziehung, Schmerzbeobachtung und Kontraktur-Prophylaxe in einem Handlungsablauf.",
        faustregelB1:
          "Die Morgen-Pflege ist bei Demenz drei Dinge gleichzeitig: Beziehung, Schmerzbeobachtung, Gelenkbewegung.",
        spektrum: [
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Post-OP Einschraenkung",
            kurzbeschreibung:
              "Nach Hueft-TEP: Ganzkörperpflege im Bett mit Bewegungseinschraenkung (keine Adduktion, max. 90 Grad). Patientin ist orientiert und kooperativ — Hauptherausforderung ist die Lagerungsregel, nicht die Beziehung.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Hemiparese — betroffene Seite integrieren",
            kurzbeschreibung:
              "Nach Schlaganfall: Die betroffene Seite wird bei der Pflege gezielt einbezogen (Bobath-Konzept). Waschen der gelaehmten Hand MIT der gelaehmten Hand fuehren — Koerperschema aktivieren.",
          },
          {
            patientName: "Emilia (Saeugling)",
            situationsId: "ls-emilia-saeugling",
            hauptfaktor: "Saeugling, Bronchiolitis",
            kurzbeschreibung:
              "Bei Saeugling: Baden/Waschen ist somatische Stimulation pur. Wassertemperatur 37 Grad, kurze Dauer, Haut-zu-Haut-Kontakt danach. Saubere-nach-unrein-Reihenfolge gilt auch hier (Nabelrest → Genitalbereich zuletzt).",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Bariatrik + Hautfalten",
            kurzbeschreibung:
              "Bei BMI 38: besondere Aufmerksamkeit auf Hautfalten (Intertrigo-Risiko). Koerperpflege-Herausforderung: Zugang zu allen Hautpartien, Equipment-Bedarf (Schwerlast-Bett, Lifter). Pflege-Beziehung: Scham ansprechen, nicht ignorieren.",
          },
        ],
        sonstBox:
          "Unterschied beruhigende vs. belebende Waschung (Bienstein/Froehlich 2021): **Beruhigend** = in Haarwuchsrichtung (von peripher nach zentral: Schulter → Hand), Wassertemperatur koerperwarm. **Belebend** = gegen Haarwuchsrichtung (Hand → Schulter), Wasser etwas kuehler. Bei Herrn Bauer morgens: beruhigend (er ist agitiert). Abends oder bei Apathie: belebend koennte sinnvoll sein.",
        sonstBoxB1:
          "Zwei Arten der Waschung: **Beruhigend** = in Haarrichtung waschen (von Schulter zur Hand), warmes Wasser. **Belebend** = gegen Haarrichtung (von Hand zur Schulter), kuehler. Bei Herrn Bauer morgens: beruhigend (weil er aufgeregt ist).",
        karteikarte: {
          vorderseite:
            "Du planst die Ganzkörperpflege bei Herrn Bauer (Demenz FAST 6a, Kontrakturgefahr, Sturzfolge). Welche drei Ziele verfolgst du gleichzeitig?",
          rueckseite:
            "1. **Beziehungsgestaltung**: Initialberuehrung, Ankuendigung, Biografiearbeit (Musik), keine Zwangspflege (DNQP 2018, Kitwood 1997)\n2. **Schmerzbeobachtung**: BESD in Ruhe + bei Bewegung waehrend der Pflege\n3. **Kontraktur-Prophylaxe**: Arme/Beine aktiv-assistiv bewegen, Fußsohlenstimulation\n\nReihenfolge: sauber → unrein (Gesicht zuerst, Genital/Anal zuletzt). Beruhigende Waschung: in Haarwuchsrichtung, koerperwarmes Wasser (Bienstein/Froehlich 2021). Faustregel: **Ganzkörperpflege bei Demenz = Beziehung + Schmerzbeobachtung + Kontraktur-Prophylaxe in einem.**",
        },
      },
    },

    // Step 3.3 — Sequencing: Bewegungsablauf Morgenpflege planen
    {
      stepId: "ce02-bauer-plan-03-bewegungsplan",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Bienstein C./Fröhlich A. (2021)",
        "DNQP Kontrakturprophylaxe 2014",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-plan-bewegungsablauf",
      tag: "pflege",
      contentC1: {
        title: "Bewegungsablauf Morgenpflege planen",
        body: "Plane den Bewegungsablauf für die Morgenpflege bei Herrn Bauer. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Basale Stimulation", "Spitzfußprophylaxe", "Kontrakturprophylaxe"],
      },
      contentB1: {
        title: "Reihenfolge der Morgenpflege",
        body: "Bringe die Schritte der Morgenpflege in die richtige Reihenfolge.",
        glossarBegriffe: ["Basale Stimulation", "Spitzfuß", "Bewegung"],
      },
      question: {
        fragetext:
          "Sortiere die Schritte des Bewegungsablaufs bei der Morgenpflege in die richtige Reihenfolge (1 = zuerst).",
        sequencing: {
          instruction: "Ziehe die Karten in die richtige Reihenfolge.",
          items: [
            {
              id: "b1",
              label:
                "Raum vorbereiten — Pflegemittel bereitstellen, Zimmer angenehm warm",
            },
            {
              id: "b2",
              label:
                "Kontakt herstellen — Namen nennen, ankündigen was du tust",
            },
            {
              id: "b3",
              label:
                "Körperpflege mit Basaler Stimulation (beruhigend, in Haarwuchsrichtung)",
            },
            {
              id: "b4",
              label:
                "Passive Kniebewegung während/nach Pflege — maximal bis schmerzfreie Grenze",
            },
            {
              id: "b5",
              label:
                "Spitzfuß-Prophylaxe: Fußsohle gegen Brett oder weiches Kissen stellen",
            },
            {
              id: "b6",
              label:
                "Lagerungskontrolle — Knie nicht dauerhaft flektiert lassen, auspolstern",
            },
          ],
        },
      },
    },

    // Step 3.4 — Matrix: Interprofessionelle Zuständigkeiten
    {
      stepId: "ce02-bauer-plan-04-interprofessionell",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Sturzprophylaxe 2022",
        "Interdisziplinäre Pflegestandards",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-plan-interprofessionalitaet",
      tag: "pflege",
      contentC1: {
        title: "Interprofessionelle Matrix: Wer macht was wann?",
        body: "Ordne jede Maßnahme in die Matrix ein: Zeilen = Berufsgruppe (Pflege / Physiotherapie / Arzt), Spalten = Zeitrahmen (Heute / Diese Woche).",
        glossarBegriffe: [
          "Interdisziplinär",
          "Physiotherapie",
          "Mirtazapin",
        ],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Ordne die Maßnahmen zu: Wer macht es (Pflege, Physiotherapie, Arzt)? Und wann (Heute oder Diese Woche)?",
        glossarBegriffe: ["Physiotherapie", "Arzt", "Pflege"],
      },
      question: {
        fragetext:
          "Ordne jede Maßnahme einem Quadranten zu: Pflege/Heute (Q1), Arzt/Heute (Q2), Pflege/Diese Woche (Q3), Physiotherapie/Diese Woche (Q4).",
        matrix: {
          instruction:
            "Ordne jede Maßnahme einem Quadranten zu. Achse X: Heute ↔ Diese Woche. Achse Y: Pflege ↔ Arzt/Physio.",
          axisX: {
            label: "Zeitrahmen",
            low: "Heute (sofort)",
            high: "Diese Woche",
          },
          axisY: {
            label: "Berufsgruppe",
            low: "Pflege",
            high: "Arzt / Physiotherapie",
          },
          items: [
            {
              id: "p1",
              text: "Nachtlicht und Niedrigbett einrichten",
              correctQuadrant: 1,
            },
            {
              id: "p2",
              text: "Sturzprotokoll vervollständigen",
              correctQuadrant: 1,
            },
            {
              id: "p3",
              text: "Trinkprotokoll einführen",
              correctQuadrant: 1,
            },
            {
              id: "p4",
              text: "Mirtazapin-Dosis prüfen lassen (Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste — Sturzrisiko)",
              correctQuadrant: 2,
            },
            {
              id: "p5",
              text: "Tochter Ingrid über Sturzgeschehen informieren",
              correctQuadrant: 1,
            },
            {
              id: "p6",
              text: "Passives Durchbewegen Knie täglich durch Physio",
              correctQuadrant: 4,
            },
          ],
        },
      },
    },
  ],

  optionaleSteps: [
    // Step 3.5 — Checklist: Trinken bei Demenz
    {
      stepId: "ce02-bauer-plan-05-trinken-strategie",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Förderung Harnkontinenz 2014"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-plan-trinken",
      tag: "krankheitslehre",
      displayFormat: "checklist",
      contentC1: {
        title: "Trinkmenge erhöhen bei Demenz — 5 Strategien",
        body: "Herr Bauer trinkt auf Aufforderung nicht. Wie erhöhst du die Trinkmenge trotzdem? 5 Strategien die funktionieren:\n\n✓ Tasse in die Hand geben — nicht bitten: Er trinkt bereitwilliger wenn er eine Tasse in der Hand hält.\n✓ Lieblingsgetränk: alkoholfreies Malzgetränk (Malzbier, Malztrunk — nicht zu verwechseln mit alkoholhaltigem Bier; Alkohol wäre wegen Mirtazapin kontraindiziert) aus Biographie bereitstellen — erhöht Trinkmotivation.\n✓ Trinken im sozialen Kontext: Frühstück, Mittagessen — kein isoliertes Trinken.\n✓ Flüssigkeitsreiche Lebensmittel: Suppe, Joghurt, Wassermelone — zählen zur Flüssigkeitsbilanz.\n✓ Miktionsprotokoll führen — um die Tendenz zu erkennen und den Plan zu justieren.\n\nQuelle: DNQP Förderung der Harnkontinenz (2014).",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Miktionsprotokoll", "Exsikkose"],
      },
      contentB1: {
        title: "Wie trinkt Herr Bauer mehr?",
        body: "Herr Bauer trinkt nicht, wenn man ihn bittet. Wie geht das trotzdem? 5 Strategien:\n\n✓ Tasse in die Hand geben — er trinkt dann besser.\n✓ Alkoholfreies Malzgetränk (Malzbier ohne Alkohol) anbieten — das mag er (aus seiner Lebensgeschichte). Wichtig: Kein Alkohol — er nimmt Mirtazapin.\n✓ Beim Essen trinken — nicht alleine.\n✓ Suppe und Joghurt geben — das zählt auch als Trinken.\n✓ Aufschreiben wie viel er trinkt — dann weißt du wie es sich verändert.",
        glossarBegriffe: ["Flüssigkeit", "Exsikkose"],
      },
    },

    // Step 3.6 — TrueFalse: Freiheitsentziehung rechtlich
    {
      stepId: "ce02-bauer-plan-06-freiheitsentziehung",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["§ 1831 BGB", "DNQP Sturzprophylaxe 2022"],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-bauer-plan-rechtliches",
      tag: "pflege",
      contentC1: {
        title: "Freiheitsentziehende Maßnahmen — richtig/falsch?",
        body: "Rechtliche Fragen rund um Sturzschutz bei Demenz. Welche Aussagen stimmen?",
        glossarBegriffe: [
          "Freiheitsentziehende Maßnahme",
          "§ 1831 BGB",
          "Richterliche Genehmigung",
        ],
      },
      contentB1: {
        title: "Darf ich das? — Rechtliche Fragen",
        body: "Was darf die Pflege bei Herrn Bauer tun? Welche Aussagen stimmen?",
        glossarBegriffe: ["Freiheitsentziehung", "Genehmigung", "Bettgitter"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Ein Bettgitter darf bei Herrn Bauer ohne Genehmigung hochgestellt werden, wenn er in der Nacht weglaufen will.",
            isTrue: false,
            explanation:
              "Falsch — Bettgitter ist eine freiheitsentziehende Maßnahme. § 1831 BGB verlangt richterliche Genehmigung oder Einwilligung des rechtlichen Betreuers. Nur in unmittelbarer Notlage (akute Selbstverletzungs- oder Lebensgefahr, rechtfertigender Notstand nach § 34 StGB) kurzzeitig erlaubt — danach muss umgehend eine richterliche Genehmigung beantragt werden. \"Akute Sturzgefahr\" als Dauerzustand bei Demenz reicht hierfür nicht aus.",
          },
          {
            statement:
              "Ein Niedrigbett (Pflegebett in unterster Position) ist keine freiheitsentziehende Maßnahme.",
            isTrue: true,
            explanation:
              "Richtig — ein Niedrigbett schränkt die Bewegungsfreiheit nicht ein. Es ist eine Sicherheitsmaßnahme ohne Fixierung. Keine Genehmigung erforderlich, aber Einwilligung des Betreuers ist empfehlenswert.",
          },
          {
            statement:
              "Sensormatten am Boden neben dem Bett (Alarm bei Bodenberührung) gelten als freiheitsentziehende Maßnahme.",
            isTrue: false,
            explanation:
              "Falsch — Sensormatten schränken die Bewegungsfreiheit nicht ein. Sie lösen nur Alarm aus. Sie gelten rechtlich nicht als Fixierung. Einwilligung des Betreuers wird dennoch empfohlen.",
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
