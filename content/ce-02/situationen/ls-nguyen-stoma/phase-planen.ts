// CE-02 Situation Herr Nguyen — Phase 3: Pflege planen
// Steps: 5 Kern + 2 Optional · Bloom: B3–B5 · Zeit: ~25–35 Min
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-planen.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_PLANEN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-planen",
  phase: "planen",
  titel: "Pflege planen — Fünf Probleme, ein Morgen",
  titelB1: "Plan machen — Was zuerst?",
  kontext:
    "Du stehst jetzt vor dieser Ausgangslage: Stoma aktiv, aber Beutel muss dringend gewechselt werden, Haut leicht gereizt. Ernährung kaum vorhanden, Albumin bereits erniedrigt, Ernährungsberaterin noch nicht da. Dekubitus: Braden 14, wenig Polsterung, post-OP-Schmerz limitiert Eigenbewegung. Thrombose: Heparin läuft, aber Mobilisation heute erstmals möglich. Psychosoziales: Herr Nguyen weicht dem Stoma aus. Die Ehefrau hat Angst vor der Versorgung zuhause. Fünf Probleme, ein Morgen. Du hast Frau Santos-Weber, den Stomatherapeuten Herrn Baum (kommt um 10 Uhr), die Ernährungsberaterin (Termin noch offen) und die Physiotherapeutin (heute Nachmittag).",
  kontextB1:
    "Jetzt planst du. Du hast folgende Probleme: 1) Stoma-Beutel voll — muss gewechselt werden. 2) Herr Nguyen isst kaum. 3) Dekubitus-Risiko ist vorhanden. 4) Thrombose-Risiko ist vorhanden. 5) Herr Nguyen hat Angst und schämt sich. Was tust du zuerst?",
  kernSteps: [
    // Step 3.1 — Sorting: Priorisierung
    {
      stepId: "ce02-nguyen-plan-01-priorisierung",
      phase: 3,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020)",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-plan-priorisierung",
      tag: "pflege",
      contentC1: {
        title: "Priorisierung: Was kommt zuerst?",
        body: "Fünf Pflegeprobleme müssen heute Morgen angegangen werden. Bringe sie in eine Reihenfolge — und begründe dabei deine Entscheidung. Es gibt kein starres System, aber es gibt eine fachliche Logik.",
        glossarBegriffe: ["Priorisierung", "Pflegeproblem", "Dekubitus", "Thrombose"],
      },
      contentB1: {
        title: "Was machst du zuerst?",
        body: "Du hast fünf Pflegeprobleme. Sortiere sie: Was ist am dringendsten?",
        glossarBegriffe: ["Stoma", "Ernährung", "Dekubitus", "Thrombose"],
      },
      question: {
        fragetext:
          "Bringe die fünf Pflegeprobleme in die Reihenfolge ihrer Dringlichkeit. Was kommt zuerst?",
        sortItems: [
          "Stoma-Beutelwechsel (akuter hygienischer Bedarf — Beutel seit gestern Abend halb voll)",
          "Dekubitus-Prophylaxe + Mobilisationsplanung (direkte Pflegehandlung, heute möglich)",
          "Ernährungsberaterin anfordern (Sofortmaßnahme — Albumin 28, kritisch)",
          "Thromboseprophylaxe: Heparin prüfen + Beinübungen planen (läuft pharmakologisch, physikalisch ergänzen)",
          "Psychosoziale Begleitung (läuft parallel zu allen Handlungen — kein separater Schritt, sondern eine Haltung)",
        ],
      },
    },

    // Step 3.1b — InlineWissen: Hautschutz-Schablone
    // Position: VOR Step 3.2 (Sequencing: Beutelwechsel-Ablauf)
    // Grund: "Hautschutz-Schablone" wird im Sequencing als zentrales Material-Element verwendet
    {
      stepId: "ce02-nguyen-plan-iw-hautschutz-schablone",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "I Care Pflege, 2. Aufl. (2020): Kap. Stoma — Versorgungsmaterial",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-plan-hautschutz-schablone",
      tag: "pflege",
      themaPrimaer: "stuhlausscheidung",
      themenSekundaer: ["pflegeprozess"],
      transition:
        "Schablone und Hautschutzplatte verstanden. Jetzt: Bringe die 9 Schritte des Beutelwechsels in Reihenfolge.",
      contentC1: {
        title: "Hautschutz-Schablone — das Werkzeug für die richtige Lochgröße",
        body: "",
        glossarBegriffe: ["Hautschutz-Schablone", "Hautschutzplatte", "Stoma-Durchmesser", "Schablone"],
      },
      contentB1: {
        title: "Hautschutz-Schablone — wie misst du das Stoma?",
        body: "",
        glossarBegriffe: ["Hautschutz-Schablone", "Hautschutzplatte", "Schablone"],
      },
      inlineWissen: {
        bausteinRef: "hautschutz-schablone",
        storyAufhaenger:
          "Gleich planst du den Beutelwechsel bei Herrn Nguyen. Im Materialset liegt eine durchsichtige Schablone mit konzentrischen Kreisen — die Hautschutz-Schablone. Sie sieht unscheinbar aus, aber sie ist das wichtigste Werkzeug gegen Mazerierung.",
        kerntext:
          "**Was ist die Hautschutz-Schablone?** Eine transparente Messhilfe (auch: Stoma-Messschablone) mit konzentrischen Kreisen oder Ovalen in verschiedenen Größen (in mm-Schritten). Sie wird direkt auf das Stoma gelegt, um den aktuellen Stoma-Durchmesser zu bestimmen.\n\n**Wie wird sie verwendet?**\n\n1. Schablone auf das Stoma legen (Patient flach oder leicht aufgerichtet)\n2. Den Kreis finden, der das Stoma knapp umschließt — ohne es einzuklemmen\n3. Durchmesser ablesen (z. B. 60 mm)\n4. Auf die **Hautschutzplatte** (= die klebende Basisplatte des Beutel-Systems) übertragen: Durchmesser + 2 mm anzeichnen\n5. Mit einer scharfen Schere exakt ausschneiden — keine ausgefransten Ränder\n\n**Hautschutzplatte** = die klebende Platte, die auf die Bauchhaut geklebt wird und den Beutel trägt. Sie hat eine Schutzschicht (meist Pektin-basiert), die die Haut vor Stomainhalt schützt.\n\n**Warum bei JEDEM Wechsel messen?** Das Stoma schwillt in den ersten 6–8 Wochen post-OP ab. Ohne Nachmessen passt die Platte nicht mehr → Leckage → Mazerierung. Erst nach Erreichen der Endgröße (ca. Woche 6–8) kann die Schablone durch eine vorgeschnittene Standardplatte ersetzt werden.",
        kerntextB1:
          "**Was ist die Hautschutz-Schablone?** Eine durchsichtige Schablone mit Kreisen zum Messen des Stomas.\n\n**Wie benutzt du sie?**\n1. Schablone auf das Stoma legen\n2. Den Kreis finden, der genau passt\n3. Größe ablesen (z. B. 60 mm)\n4. Auf die **Hautschutzplatte** (= die Klebeplatte) übertragen: Stoma + 2 mm\n5. Ausschneiden\n\n**Hautschutzplatte** = die klebende Platte auf der Bauchhaut. Sie schützt die Haut und hält den Beutel.\n\n**Warum jedes Mal messen?** Das Stoma wird in den ersten 6–8 Wochen kleiner. Ohne Nachmessen passt die Platte nicht → Stuhl auf der Haut.",
        faustregel:
          "**Schablone = Maßband fürs Stoma.** Bei jedem Wechsel: messen → anzeichnen → ausschneiden → +2 mm. Nicht schätzen.",
        faustregelB1:
          "Schablone = Maß-Hilfe fürs Stoma. Jedes Mal messen, nie schätzen.",
        karteikarte: {
          vorderseite: "Was ist eine Hautschutz-Schablone — und warum wird sie bei jedem Beutelwechsel benutzt?",
          rueckseite:
            "Transparente Messhilfe mit konzentrischen Kreisen. Wird auf das Stoma gelegt → Durchmesser ablesen → auf Hautschutzplatte übertragen (+2 mm) → ausschneiden. Bei jedem Wechsel messen, weil das Stoma 6–8 Wochen post-OP abschwillt. Ohne Nachmessen: Platte passt nicht → Leckage → Mazerierung. **Schablone + 2 mm = Hautschutz.**",
          vorderseiteB1: "Was ist eine Hautschutz-Schablone?",
          rueckseiteB1:
            "Eine durchsichtige Schablone zum Messen des Stomas. Jedes Mal benutzen, weil das Stoma kleiner wird. Loch = Stoma + 2 mm.",
        },
      },
    },

    // Step 3.2 — Sequencing: Beutelwechsel-Ablauf
    {
      stepId: "ce02-nguyen-plan-02-stoma-versorgungsplan",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-nguyen-plan-beutelwechsel",
      tag: "pflege",
      contentC1: {
        title: "Beutelwechsel — strukturierter Ablauf",
        body: "Bevor du das Stoma von Herrn Nguyen versorgst, planst du den Ablauf. Wichtig: Die Lochgröße der Hautschutzplatte wird bei JEDEM Wechsel neu mit der Schablone gemessen — das Stoma schwillt in den ersten 6–8 Wochen post-OP ab. Standard nach FG SKM 2023: Stoma-Durchmesser + 2 mm Sicherheitsabstand. Ein Wert aus dem Patientenblatt von vor Tagen ist bereits veraltet und führt zu Leckage. Bringe die 9 Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Stomaplatte", "Schutzpaste", "Hautschutz-Schablone", "Hygieneregeln"],
      },
      contentB1: {
        title: "Beutelwechsel — in welcher Reihenfolge?",
        body: "Du wechselst den Stoma-Beutel. Wichtig: Du misst die Lochgröße jedes Mal neu mit der Schablone. Das Stoma wird in den ersten 6–8 Wochen kleiner. Loch = Stoma + 2 mm. Sortiere die Schritte.",
        glossarBegriffe: ["Stomaplatte", "Schutzpaste", "Schablone"],
      },
      question: {
        fragetext:
          "Bringe die 9 Schritte des Beutelwechsels in die richtige Reihenfolge.",
        sequencing: {
          instruction: "Sortiere die Schritte des Beutelwechsels.",
          items: [
            { id: "s1", label: "Material vorbereiten + Handschuhe anziehen" },
            { id: "s2", label: "Patienten informieren und Einverständnis einholen — Schwerkraft-Prinzip beim Abziehen kurz erklären" },
            { id: "s3", label: "Alten Beutel/Platte von oben nach unten abziehen — eine Hand zieht, die andere Hand hält die Haut sanft gegen (Schwerkraft hält Stuhl im Beutel zurück, Hauteinriss vermeiden)" },
            { id: "s4", label: "Stomaplatte vollständig lösen (warm-feuchter Tupfer erleichtert das Ablösen)" },
            { id: "s5", label: "Stoma + Hautumgebung mit lauwarmem Wasser reinigen — bei Bedarf milde, pH-neutrale Waschlotion. KEIN alkalisches Seifenwasser, keine Desinfektionsmittel, kein Lanolin-/Parfüm-haltiges Produkt" },
            { id: "s6", label: "Haut vollständig trocknen lassen (Mazerierung verhindern)" },
            { id: "s7", label: "Stoma mit Schablone neu ausmessen (jeden Wechsel — Stoma schwillt in den ersten 6–8 Wochen ab) und Loch in die neue Platte schneiden: Stoma-Durchmesser + 2 mm Sicherheitsabstand, niemals Wert aus Patientenblatt übernehmen" },
            { id: "s8", label: "Schutzpaste dünn ringförmig auftragen, kurz antrocknen lassen, neue Stomaplatte anlegen + andrücken" },
            { id: "s9", label: "Beutel auf Platte aufsetzen, auf Dichtigkeit prüfen, Umgebung kontrollieren" },
          ],
        },
      },
    },

    // Step 3.3 — Matching: Stomatherapeut-Rolle
    {
      stepId: "ce02-nguyen-plan-03-stomatherapeut-rolle",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-plan-stomatherapeut",
      tag: "pflege",
      contentC1: {
        title: "Wer macht was? — Stomatherapeut vs. Pflegekraft vs. Ernährungsberaterin",
        body: "Im interprofessionellen Team hat jeder eine Rolle. Ordne die Aufgaben der richtigen Person zu. Besonders: Nicht alles ist Pflegekraft-Aufgabe — und das ist gut so.",
        glossarBegriffe: ["Stomatherapeut", "interprofessionell", "Ernährungsberaterin"],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Im Team arbeiten verschiedene Fachkräfte. Ordne die Aufgaben zu.",
        glossarBegriffe: ["Stomatherapeut", "Ernährungsberaterin"],
      },
      question: {
        fragetext: "Ordne jede Aufgabe der richtigen Person zu.",
        matchingPairs: [
          { left: "Täglichen Beutelwechsel durchführen", right: "Pflegekraft" },
          { left: "Beutelgröße und -typ individuell anpassen + Produkt auswählen", right: "Stomatherapeut" },
          { left: "Ehefrau Mai zuhause im Beutelwechsel anleiten", right: "Stomatherapeut" },
          { left: "Ernährungs-Empfehlungen bei Stoma-Kost (was förderlich, was meiden?)", right: "Ernährungsberaterin" },
          { left: "Hautschutz-Produkte (Schutzpaste, Hautbarriere-Spray) auswählen", right: "Stomatherapeut" },
          { left: "Pflegeplanung schreiben und aktualisieren", right: "Pflegekraft" },
        ],
      },
    },

    // Step 3.3b — InlineWissen: Ernährungsassessment
    // Position: VOR Step 3.4 (Branching: Ernährungsplan post-OP)
    // Grund: "Ernährungsassessment" wird in Step 3.4 als zentraler Begriff im Branching verwendet
    {
      stepId: "ce02-nguyen-plan-iw-ernährungsassessment",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM (2020): S3-Leitlinie Klinische Ernährung in der Chirurgie (AWMF-Register 073-003)",
        "DNQP (2017): Expertenstandard Ernährungsmanagement zur Sicherstellung und Förderung der oralen Ernährung",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-plan-ernährungsassessment",
      tag: "pflege",
      themaPrimaer: "ernährungsassessment",
      themenSekundaer: ["stuhlausscheidung", "pflegeprozess"],
      transition:
        "Ernährungsassessment verstanden. Jetzt: Was ist dein nächster Schritt bei Herrn Nguyens Ernährung?",
      contentC1: {
        title: "Ernährungsassessment — systematisch statt Bauchgefühl",
        body: "",
        glossarBegriffe: ["Ernährungsassessment", "NRS-2002", "interprofessionell", "Ernährung"],
      },
      contentB1: {
        title: "Ernährungs-Assessment — Ernährung richtig einschätzen",
        body: "",
        glossarBegriffe: ["Ernährungsassessment", "NRS-2002", "Ernährung"],
      },
      inlineWissen: {
        bausteinRef: "ernährungsassessment",
        storyAufhaenger:
          "Herr Nguyen isst seit Tagen kaum etwas. Du hast den minimalen Intake beobachtet und dokumentiert. Aber 'isst wenig' ist keine Facheinschätzung. Ein Ernährungsassessment wandelt Beobachtung in eine systematische Bewertung um — und leitet konkrete Maßnahmen ab.",
        kerntext:
          "**Was ist ein Ernährungsassessment?** Die systematische Erhebung und Bewertung des Ernährungszustands eines Patienten — mit standardisierten Instrumenten statt subjektivem Eindruck.\n\n**Stufen des Ernährungsassessments (DNQP 2017):**\n\n**1. Screening** (Pflege-Aufgabe): NRS-2002 bei Aufnahme + bei Veränderung\n→ Score ≥ 3 = Mangelernährungs-Risiko\n\n**2. Assessment** (Ernährungsberaterin + Pflege): Detaillierte Erhebung\n• Gewichtsverlauf (kg/Zeitraum)\n• Nahrungsaufnahme (Ernährungsprotokoll: Was, Wann, Wieviel)\n• Labor (Albumin, Präalbumin, CRP zum Ausschluss von Akut-Phase-Verzerrung)\n• Funktioneller Status (Handkraft, Mobilität)\n• Stoma-spezifisch: Output-Menge (Flüssigkeitsverlust!), Kostverträglichkeit\n\n**3. Intervention** (interprofessionell): Ernährungsplan\n• Orale Ernährung optimieren (Wunschkost, Anreicherung, Trinknahrung)\n• Bei Bedarf: enterale Ernährung (Sonde) oder parenterale Ernährung (i.v.)\n• Bei Stoma: blähende Lebensmittel meiden, Flüssigkeitsbilanz beachten\n\n**Interprofessionell** bedeutet: Pflege screent, Ernährungsberaterin bewertet, Arzt verordnet. Keine Fachkraft allein macht alles.\n\n**Bei Herrn Nguyen:** Screening ergibt NRS ≥ 3 → Ernährungsberaterin anfordern → gemeinsamen Ernährungsplan erstellen.",
        kerntextB1:
          "**Was ist ein Ernährungs-Assessment?** Die Ernährung eines Patienten genau prüfen — nicht nur 'er isst wenig'.\n\n**3 Stufen:**\n\n**1. Screening** (du machst das): NRS-2002-Fragebogen. Ab 3 Punkten = Risiko.\n\n**2. Assessment** (Ernährungsberaterin + du): Genau prüfen:\n• Wie viel isst er? (Ernährungsprotokoll)\n• Hat er abgenommen?\n• Laborwerte (Albumin)\n• Was kommt aus dem Stoma? (Flüssigkeitsverlust!)\n\n**3. Ernährungs-Plan** (gemeinsam im Team):\n• Was darf er essen? Was nicht?\n• Braucht er Trinknahrung?\n• Bei Stoma: keine blähenden Lebensmittel\n\n**Interprofessionell** = im Team: Du screenst, die Beraterin bewertet, der Arzt verordnet.",
        faustregel:
          "**Assessment vor Intervention.** Erst messen (NRS-2002), dann bewerten (Ernährungsberaterin), dann handeln (Ernährungsplan). Nie ohne Daten handeln.",
        faustregelB1:
          "Erst messen (NRS-2002), dann Beraterin einschalten, dann Ernährungs-Plan. Nie aus dem Bauch heraus handeln.",
        karteikarte: {
          vorderseite: "Was ist ein Ernährungsassessment — und warum reicht 'isst wenig' als Einschätzung nicht?",
          rueckseite:
            "Ernährungsassessment = systematische Erhebung mit standardisierten Instrumenten. 3 Stufen: 1) Screening (NRS-2002, Pflege), 2) Assessment (Ernährungsberaterin + Labor + Protokoll), 3) Intervention (interprofessioneller Ernährungsplan). 'Isst wenig' = nicht messbar, nicht auswertbar. Bei Stoma: Output als Flüssigkeitsverlust mitrechnen. **Assessment vor Intervention — erst messen, dann handeln.**",
          vorderseiteB1: "Was bedeutet Ernährungs-Assessment?",
          rueckseiteB1:
            "Die Ernährung genau prüfen — mit Fragebogen (NRS-2002), Protokoll und Laborwerten. Im Team: Pflege screent, Beraterin bewertet, Arzt verordnet.",
        },
      },
    },

    // Step 3.4 — Branching: Ernährungsplan post-OP
    {
      stepId: "ce02-nguyen-plan-04-ernährungsplan-post-op",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020, AWMF-Register 073-003)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-nguyen-plan-ernährung-assessment",
      tag: "pflege",
      contentC1: {
        title: "Ernährung: Assessment vor Intervention",
        body: "**Kalorien** = Maßeinheit für die Energie, die Nahrung dem Körper liefert (1 kcal = 4,18 kJ). Ein Erwachsener im Krankenhaus benötigt durchschnittlich 1500–2500 kcal pro Tag.\n\n**Trinknahrung** = bilanzierte flüssige Nahrung mit definiertem Kalorien- und Eiweißgehalt (z.B. Fresubin 2 kcal/ml), die als Ergänzung zur normalen Kost oder als Hauptnahrungsquelle eingesetzt wird, wenn Patienten zu wenig essen können oder wollen.\n\nHerrn Nguyens Ernährungsprotokoll zeigt: 3 Teelöffel Haferschleim gestern Abend, kein Frühstück heute. Was ist dein nächster Schritt?",
        glossarBegriffe: ["NRS-2002", "Ernährungsassessment", "interprofessionell", "Trinknahrung"],
      },
      contentB1: {
        title: "Herr Nguyen isst kaum — was tust du?",
        body: "**Kalorien** = Maß für die Energie im Essen. Ein Erwachsener im Krankenhaus braucht etwa 1500–2500 Kalorien pro Tag.\n\n**Trinknahrung** = flüssige Nahrung mit viel Energie und Eiweiß, in kleinen Flaschen. Wird gegeben, wenn ein Patient nicht genug essen kann.\n\nDas Ernährungsprotokoll: gestern Abend drei Löffel Haferschleim, heute kein Frühstück. Was ist dein nächster Schritt?",
        glossarBegriffe: ["NRS-2002", "Ernährungsberaterin", "Trinknahrung"],
      },
      question: {
        fragetext:
          "Herr Nguyens Ernährungsprotokoll zeigt minimalen Intake. Was ist dein nächster Schritt?",
        branchingOptions: [
          {
            text: "Ich animiere ihn mehr zu essen — er muss Kraft aufbauen.",
            feedback:
              "Zu oberflächlich. 'Mehr essen' ohne Ursachenklärung greift nicht: Warum isst er nicht? Übelkeit? Schmerzen? Erschöpfung? Körperbild-Belastung? Ohne Assessment keine sinnvolle Intervention. Außerdem: Albumin 28 g/l + 6 kg Gewichtsverlust = aktive Mangelernährung — das erfordert eine Ernährungsberaterin, nicht nur Ermutigung. Quelle: DGEM 2020.",
            feedbackB1:
              "Nicht genug. Wir wissen nicht warum er nicht isst. Ohne Ursache keine Lösung. Außerdem: Er hat eine Mangelernährung — da brauchen wir Fachunterstützung.",
            isCorrect: false,
          },
          {
            text: "Ich dokumentiere den minimalen Intake, fordere die Ernährungsberaterin an und frage — durch Linh — nach Übelkeit.",
            feedback:
              "Richtig. Drei Schritte mit Fachlogik: 1) Dokumentation (Verlaufsmessbarkeit, Behandlungskontinuität), 2) Interprofessionelle Anforderung (Ernährungsberaterin = Fachkraft für Ernährungsplan bei Mangelernährung post-OP), 3) Assessment vor Intervention (Übelkeit? Schmerz? beides sollte vor Ernährungsmaßnahme geklärt sein). Das ist das NRS-2002-Prinzip: Screening → Bewertung → Intervention. Quelle: DGEM Leitlinie Chirurgie 2020.",
            feedbackB1:
              "Richtig. Du tust drei Dinge: aufschreiben, Fachkraft anfordern, nach Ursache fragen. Das ist gutes Assessment.",
            isCorrect: true,
          },
          {
            text: "Ich gebe ihm Trinknahrung aus dem Stationsvorrat.",
            feedback:
              "Du hast die Energieproblematik erkannt — Trinknahrung kann tatsächlich sinnvoll sein. Allerdings unvollständig, weil ohne ärztliche Anordnung und ohne Ernährungsassessment (NRS-2002, Kalorienbedarf berechnen, Kontraindikationen prüfen) eine wichtige Sicherheitsstufe fehlt. Stattdessen: Erst Ernährungsberaterin anfordern + Arzt informieren — sie planen mit dir die individuelle Strategie für ein Kolostoma (blähende Lebensmittel meiden, Flüssigkeitsbedarf erhöhen). Trinknahrung wird dann gezielt eingesetzt.",
            feedbackB1:
              "Du hast erkannt, dass Herr Nguyen mehr Energie braucht — das stimmt. Aber unvollständig, weil ohne Arzt und Ernährungsberaterin die Strategie nicht passt. Stattdessen: Erst Assessment (NRS-2002, Beraterin), dann Trinknahrung als geplante Maßnahme.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 3.5 — Text (scenario): Psychosoziales einplanen
    {
      stepId: "ce02-nguyen-plan-05-psychosozial-einplanen",
      phase: 3,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-nguyen-plan-psychosozial",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Psychosoziale Pflege — kein Extra, sondern parallel",
        body: "Planung auf der chirurgischen Station, 8:05 Uhr.\n\nPsychosoziale Pflege ist keine Zusatzaufgabe für später — sie läuft gleichzeitig mit jeder körperlichen Pflegehandlung. Was das für Herrn Nguyen heute konkret bedeutet:\n\n1) **Beim Beutelwechsel erkläre laut, was du tust** (auch wenn Linh übersetzt) — Herr Nguyen wird Schritt für Schritt einbezogen, auch sprachlich. Er soll nicht das Gefühl haben, dass 'etwas an ihm gemacht wird'.\n\n2) **Ermögliche Herrn Nguyen wegzuschauen** — das ist sein Recht. Das Ziel ist langfristig Eigenständigkeit, nicht heute. Würde geht vor Tempo.\n\n3) **Ehefrau Mai ist beim Wechsel dabei** — nicht als Lernende, sondern als unterstützende Angehörige. Die strukturierte Anleitung für zuhause kommt mit dem Stomatherapeuten Herrn Baum um 10 Uhr — nicht jetzt, nicht ad hoc.\n\n4) **Plane Zeit für Pausen und stille Momente** — das Schweigen von Herrn Nguyen ist Kommunikation. Kulturell respektvoller Umgang mit Scham bedeutet: Raum lassen, nicht aufdrängen.",
        fallbezug:
          "Herr Nguyen, 72 J., hat gesagt 'Ich bin kein richtiger Mann mehr.' Dieses Zitat ist kein Nebensatz — es ist das zentrale psychosoziale Thema dieser Lernsituation. Es wird in Phase 4 explizit aufgegriffen.",
        glossarBegriffe: ["Körperbild", "Würde", "interkulturell", "Angehörige", "Beutelwechsel", "Kommunikation", "Körperpflege", "Pflege", "Planung", "Ziel"],
      },
      contentB1: {
        title: "Psychosoziale Pflege — was bedeutet das bei Herrn Nguyen?",
        body: "Psychosoziale Pflege heißt: auch an den Menschen denken, nicht nur an die Körperpflege.\n\nBei Herrn Nguyen heißt das:\n\n1) Erkläre laut was du tust (Linh übersetzt) — Herr Nguyen soll sich nicht ausgeliefert fühlen.\n\n2) Er darf wegschauen — das ist sein Recht. Eigenständigkeit kommt later.\n\n3) Ehefrau Mai ist dabei — sie schaut zu, aber das Anleiten kommt mit dem Stomatherapeuten.\n\n4) Lass Pausen und Stille zu — Herr Nguyen spricht wenig. Das ist okay.",
        fallbezug:
          "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Das ist wichtig. Es kommt in Phase 4.",
        glossarBegriffe: ["Würde", "Körperbild", "Beutelwechsel", "Kommunikation", "Körperpflege", "Pflege", "Angehörige"],
      },
    },
  ],
  optionaleSteps: [
    // 3.opt-1 — Text (stepbystep): Pflegeplanung-Format für B1
    {
      stepId: "ce02-nguyen-plan-opt1-pflegeplanung-format",
      phase: 3,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Fiechter/Meier (1981): Pflegeplanung — Eine Anleitung für die Praxis (6-stufiger Pflegeprozess)",
        "§ 630f BGB — Dokumentationspflicht der Behandelnden",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-plan-pflegeplanung",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Wie sieht eine Pflegeplanung aus?",
        body: "Eine Pflegeplanung hat 4 Elemente:\n\n**1) Pflegeproblem** — Was ist das Problem?\n**2) Pflegeziel** (SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert)\n**3) Pflegemaßnahmen** — Was wird konkret getan? Von wem? Wie oft?\n**4) Evaluation** — Wann wird geprüft ob das Ziel erreicht ist?\n\nBeispiel für Herrn Nguyen:\n- Problem: Neuanlage Kolostoma, 4. Tag post-OP — Patient meidet Blickkontakt mit Stoma\n- Ziel: Herr Nguyen benennt bis Entlassung 3 Zeichen, dass das Stoma gesund aussieht\n- Maßnahmen: Tägliche Inspektion mit lauterer Erklärung (+ Tochter als Übersetzerin), Stomatherapeut einbinden, schrittweise Eigenversorgung anleiten\n- Evaluation: täglich, Stomatherapeut und Pflegekraft gemeinsam",
        glossarBegriffe: ["Pflegeplanung", "SMART-Ziel", "Pflegeproblem", "Evaluation", "Kolostoma", "Patient", "Pflegemaßnahmen", "Pflegeziel", "Problem", "Stoma", "Stomatherapeut"],
      },
      contentB1: {
        title: "Was ist eine Pflegeplanung?",
        body: "Eine Pflegeplanung hat 4 Teile:\n\n**1) Problem** — Was ist das Problem?\n**2) Ziel** — Was soll erreicht werden? (SMART = genau, messbar, realistisch, mit Datum)\n**3) Maßnahmen** — Was tust du? Wann? Wie oft?\n**4) Evaluation** — Wann prüfst du, ob das Ziel erreicht ist?\n\nBeispiel Herr Nguyen:\n- Problem: Er schaut nicht auf sein Stoma\n- Ziel: Er nennt bis zur Entlassung 3 Zeichen, dass das Stoma gesund ist\n- Maßnahmen: Jeden Tag erklären + Stomatherapeut einbinden\n- Evaluation: Täglich prüfen",
        glossarBegriffe: ["Pflegeplanung", "Ziel", "massnahme", "Evaluation", "Patient", "Stoma", "Stomatherapeut", "Problem", "Kolostoma", "Pflegemaßnahmen", "Pflegeziel"],
      },
    },

    // 3.opt-2 — Comparison: Lagerungsoptionen
    {
      stepId: "ce02-nguyen-plan-opt2-lagerungsplan",
      phase: 3,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP — Expertenstandard Dekubitusprophylaxe in der Pflege, 3. Aktualisierung (2017)",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-plan-lagerung",
      tag: "pflege",
      contentC1: {
        title: "Lagerungsoptionen bei Stoma + Dekubitusrisiko",
        body: "Welche Lagerungsoptionen gibt es, und was ist bei Herrn Nguyen zu beachten?",
        glossarBegriffe: ["30°-Schräglage", "Weichlagerung", "Druckentlastung"],
      },
      contentB1: {
        title: "Wie lagere ich Herrn Nguyen richtig?",
        body: "Bei Dekubitusrisiko muss Herr Nguyen regelmäßig umgelagert werden. Was sind die Optionen?",
        glossarBegriffe: ["Lagerung", "Dekubitus", "Druckentlastung"],
      },
      question: {
        fragetext:
          "Vergleiche die Lagerungsoptionen: Was passt wann bei Herrn Nguyen?",
        comparison: {
          instruction:
            "Vergleiche die drei Lagerungsoptionen für Herrn Nguyen.",
          columns: [
            { label: "30°-Schräglage" },
            { label: "Weichlagerungsmatratze" },
            { label: "90°-Seitlage" },
          ],
          rows: [
            {
              criterion: "Druckentlastung",
              values: [
                "Gut — Druck wird auf Oberschenkel + Schulter verteilt statt Steißbein/Ferse",
                "Gut — Gewichtsverteilung auf gesamte Körperoberfläche",
                "Nur für kurze Intervalle — hoher Druck auf Trochanter",
              ],
            },
            {
              criterion: "Stoma-Besonderheit",
              values: [
                "Auf Stoma-Seite vermeiden — Beutel kann abknicken. Gegenseite bevorzugen.",
                "Stoma liegt oben — Beutel füllt sich problemlos. Ideal.",
                "Stoma-Seite unten: Risiko für Leckage. Gegenüberliegende Seite nutzen.",
              ],
            },
            {
              criterion: "Wann sinnvoll?",
              values: [
                "2-stündlicher Wechsel — Standard-Lagerungsintervall DNQP",
                "Dauerhaft — bei sehr hohem Dekubitusrisiko (Braden < 12)",
                "Nur kurz (< 30 Min) — zu hoher Trochanter-Druck für Dauerposition",
              ],
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 30,
};
