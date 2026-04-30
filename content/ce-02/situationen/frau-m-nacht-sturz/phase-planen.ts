// CE-02 Situation Frau M. — Phase 3: Pflege planen
// Steps: 5 · Bloom: B3-B5
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_PLANEN: SituationsPhase = {
  phaseId: "ls-frau-m-planen",
  phase: "planen",
  titel: "Pflege planen",
  titelB1: "Plan machen",
  kontext:
    "Es ist 03:11 Uhr. Frau M. liegt zugedeckt auf dem Boden, eine Wolldecke unter dem Kopf, die du aus dem Schrank geholt hast. Sie atmet jetzt ruhiger, die Schmerzen liegen stabil bei NRS 4. Du hast ihr gesagt, dass du gleich Hilfe holst, dass nichts gebrochen ist, soweit du es jetzt sehen kannst, dass sie nicht allein ist. Sie hat genickt und kurz deine Hand gedrückt, ihre Finger waren kühl, die Haut dünn und durchscheinend wie Pergament. Jetzt der Moment, der in keiner Lehrbuch-Phase auftaucht und doch der wichtigste ist: Du gehst zwei Schritte zurück bis zur Fensterbank. Draußen tiefe Nacht, eine Straßenlaterne wirft ein gelbes Quadrat ans Fenster, ein einzelnes Auto fährt langsam vorbei, sonst nichts. Vor dem Krankenhaus glänzt der nasse Asphalt, es muss leise geregnet haben. Du atmest dreimal bewusst aus, so wie es Frau Schnell in der Schule beigebracht hat. Vier Sekunden ein, sechs Sekunden aus. Es hilft. Dein Kopf war in den letzten zwölf Minuten im Sammeln — Sehen, Hören, Befragen, Prüfen. Jetzt muss er sortieren. Vor deinem inneren Auge das Risiko-Profil von Frau M. wie ein gespanntes Netz: 82 Jahre, Parkinson Stadium II, Osteoporose, Katarakt beidseits. Zolpidem seit 48 Stunden — PRISCUS 2.0 rot, kontraindiziert bei Hochbetagten. HCT morgens, Nykturie zwei- bis dreimal pro Nacht. Pneumonie Tag drei, leichter Fieberverlauf, vielleicht subtil veränderte Vigilanz. Fremdes Bett, fremde Toilette, fremder Boden, neunzig Kilometer von ihrer Wohnung entfernt. Und du kennst jetzt auch die unsichtbaren Faktoren: Frau M. wollte nicht klingeln, weil sie nachts 'niemanden stören' wollte. Sie hat das ihrer Tochter so versprochen, sich nicht 'aufzudrängen'. Eine Generationsgeschichte, eingenäht in das Verhalten dieser Frau. Die Frage ist nicht mehr nur was — sondern wann. Was muss in den nächsten zehn Minuten passieren, bevor sie wieder einschläft? Was diese Nacht? Was bis zur Entlassung? Was heißt das für die Umgebung, was für die Medikation, was für sie als Person? Du holst aus deiner Brusttasche den Stift, drehst ihn zwischen den Fingern, das vertraute Gewicht beruhigt. Du hörst hinter dir Frau M. leise atmen, gleichmäßig, ein vorsichtiges Geräusch wie das Blättern einer Seite. Auf dem Flur klappert ein Wagen, jemand öffnet eine Tür, leise Schritte entfernen sich. Frau Keller kommt gleich vorbei, das hat sie versprochen. Du hast vielleicht drei Minuten, in denen alles strukturiert sein muss: kurzfristig, mittelfristig, langfristig. Sofort, diese Nacht, bis Entlassung. Eine gute Planung jetzt verhindert den nächsten Sturz — den heute Nacht und den in zwei Wochen zuhause.",
  kontextB1:
    "Es ist 03:11 Uhr. Frau M. liegt zugedeckt auf dem Boden. Eine Decke ist unter ihrem Kopf. Sie atmet ruhiger. Die Schmerzen sind stabil bei 4 von 10. Du hast ihr gesagt: 'Ich hole Hilfe. Sie sind nicht allein.' Sie hat genickt und kurz deine Hand gedrückt. Jetzt gehst du zwei Schritte zurück zum Fenster. Draußen ist es dunkel. Eine Lampe leuchtet auf der Straße. Du atmest dreimal tief aus. Dein Kopf war voll mit Sehen und Fragen. Jetzt musst du sortieren. Du denkst an die Risiken von Frau M.: 82 Jahre. Parkinson. Osteoporose. Katarakt. Zolpidem seit 2 Tagen — gefährlich. HCT macht sie nachts pinkeln. Lungenentzündung. Fremdes Krankenhaus. Und: Frau M. wollte nicht klingeln. Sie wollte 'nicht stören'. Sie hat das ihrer Tochter versprochen. Die Frage ist nicht nur: Was machst du? Sondern: Wann machst du was? Was muss SOFORT passieren — bevor sie wieder schläft? Was diese Nacht? Was bis zur Entlassung? Was ist mit der Umgebung? Was mit den Medikamenten? Was mit Frau M. selbst? Du nimmst deinen Stift in die Hand. Du hörst Frau M. ruhig atmen. Im Flur klappert ein Wagen. Frau Keller kommt gleich. Du hast vielleicht drei Minuten Zeit. Eine gute Planung jetzt verhindert den nächsten Sturz — heute Nacht und auch zuhause in zwei Wochen.",
  kernSteps: [
    // Step 3.0b — Inline-Wissen \"DNQP-Sturzprophylaxe — 6 Kriterien"
    // PILOT (Inline-Wissen v1, Phase 3): Strukturiert die Phase. Schüler weiß bevor er
    // Maßnahmen plant: das ist nicht zufällig, das folgt einem Standard mit 6 Punkten.
    {
      stepId: "ce02-frau-m-plan-00b-dnqp-sechs-kriterien",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2022 — Expertenstandard Sturzprophylaxe in der Pflege, 2. Aktualisierung",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-plan-dnqp-grundwissen",
      tag: "pflege",
      transition: "Sechs Kriterien. Dein roter Faden. Jetzt die Massnahmen sortieren.",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["assessments-expertenstandards", "pflegeprozess"],
      contentC1: {
        title: "Sturzprophylaxe nach DNQP — 6 Kriterien als roter Faden",
        body: "",
        glossarBegriffe: ["DNQP", "Expertenstandard", "Sturzprophylaxe"],
      },
      contentB1: {
        title: "Wie plant man Sturzprophylaxe?",
        body: "",
        glossarBegriffe: ["DNQP", "Expertenstandard"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-dnqp-sechs-kriterien",
        storyAufhaenger:
          "Du hast deinen Stift in der Hand, drei Minuten bis Frau Keller zurückkommt. Bevor du planst — DNQP gibt dir die Struktur vor. **6 Kriterien.** Jeder Sturz-Fall folgt diesem Roten Faden — auch der von Frau M.",
        storyAufhaengerB1:
          "Du hast den Stift in der Hand. Bevor du planst: Der DNQP-Standard zeigt dir den Weg. **6 Punkte.** Jeder Fall — auch Frau M. — folgt diesem Plan.",
        kerntext:
          "Der **DNQP-Expertenstandard Sturzprophylaxe** (2. Aktualisierung 2022) ist Pflicht-Lektüre für jede Pflegekraft in Deutschland. Er strukturiert dein Vorgehen in **6 Kriterien**:\n\n• **Kriterium 1: Sturzrisiko einschätzen.** Multifaktoriell, klinische Einschätzung — kein Tinetti, kein STRATIFY zwingend. Bei Aufnahme + bei Veränderungen.\n\n• **Kriterium 2: Information & Beratung.** Patient + Angehörige werden über Risiko + Maßnahmen aufgeklärt — partizipativ, nicht belehrend.\n\n• **Kriterium 3: Gemeinsame Maßnahmenplanung.** \"Mit dem Patienten\" — nicht \"für ihn\". Selbstbestimmung respektieren.\n\n• **Kriterium 4: Maßnahmen durchführen.** Kraft+Balance, Umgebung, Medikamenten-Review, Schuhwerk, Sehkorrektur, Hilfsmittel.\n\n• **Kriterium 5: Bei Sturz: Eskalation + Dokumentation.** Sturzprotokoll, Arzt informieren, Re-Assessment.\n\n• **Kriterium 6: Evaluation des Maßnahmenplans.** Nach 6 Wochen / 3 Monate — funktioniert die Prophylaxe?\n\n**Bei Frau M. heute Nacht:**\n\nDu bist bei **Kriterium 5** angekommen — Sturz ist passiert, jetzt: dokumentieren + Maßnahmen für die kommende Nacht + bis Entlassung anpassen. Aber Kriterium 1-4 bleiben aktiv (das Risiko-Profil hat sich gerade verschärft).\n\n**Wichtig — Kriterium 3 lehrt:** \"Bettgitter hoch, fertig\" ist KEINE partizipative Maßnahmenplanung. Du musst mit Frau M. (nicht über sie) entscheiden — das wird in dieser Phase nochmal kritisch.",
        kerntextB1:
          "Der **DNQP-Standard Sturzprophylaxe** (2022) ist die Standard-Anleitung für Pflegekräfte. **6 Punkte:**\n\n• **Punkt 1: Sturz-Risiko einschätzen** — bei Aufnahme + bei Veränderungen. Klinische Einschätzung, kein Tool zwingend.\n\n• **Punkt 2: Patient + Angehörige aufklären** — gemeinsam, nicht belehrend.\n\n• **Punkt 3: Maßnahmen gemeinsam planen** — MIT dem Patienten, nicht FÜR ihn.\n\n• **Punkt 4: Maßnahmen umsetzen** — Kraft+Balance, Umgebung, Medikamenten-Check, Schuhe, Sehen, Hilfsmittel.\n\n• **Punkt 5: Wenn ein Sturz passiert: Eskalation + Dokumentation** — Sturzprotokoll, Arzt informieren, neu einschätzen.\n\n• **Punkt 6: Plan nach 6 Wochen / 3 Monate prüfen** — funktioniert die Prophylaxe?\n\n**Bei Frau M.:**\n\nDu bist bei **Punkt 5** — der Sturz ist passiert. Jetzt: aufschreiben + neue Maßnahmen für heute Nacht + bis Entlassung.\n\n**Wichtig — Punkt 3 sagt:** \"Bettgitter hoch, fertig\" ist FALSCH. Du musst MIT Frau M. entscheiden, nicht ÜBER sie. Das ist gleich Thema!",
        faustregel:
          "DNQP 6 Kriterien: Einschätzen → Beraten → Gemeinsam Planen → Durchführen → Bei Sturz eskalieren → Evaluieren. Die Reihenfolge ist nicht zufällig.",
        faustregelB1:
          "DNQP 6 Punkte: Einschätzen → Beraten → MIT Patient planen → Tun → Bei Sturz eskalieren → Prüfen.",
        spektrum: [
          {
            patientName: "Herr Bauer (Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Kriterium 3 schwierig bei Demenz",
            kurzbeschreibung:
              "Bei fortgeschrittener Demenz ist \"gemeinsame Maßnahmenplanung\" eingeschränkt — Validation nach Naomi Feil + Einbezug der Tochter Ingrid (gesetzliche Betreuerin) wird zentral.",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Kriterium 4 ist post-OP-spezifisch",
            kurzbeschreibung:
              "Bei ihr ist \"Maßnahmen durchführen\" anders gewichtet: Lagerungsregeln (max. 90° Hüftflexion), Kraft-Balance-Training erst nach Wundheilung, Hilfsmittel = Rollator + Toilettensitzerhöhung.",
          },
          {
            patientName: "Frau Kovac (ambulant)",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Kriterium 6 wichtig im häuslichen Setting",
            kurzbeschreibung:
              "Bei ambulanter Pflege ist \"Evaluation nach 6 Wo / 3 Mo\" Pflicht — Wohnungs-Begehung, Sturzprotokoll der letzten Wochen, Hausarzt-Rückmeldung.",
          },
        ],
        sonstBox:
          "Andere DNQP-Standards die hier eine Rolle spielen werden: **DNQP Schmerzmanagement** (Frau M.s NRS), **DNQP Beziehungsgestaltung Demenz** (für andere Patienten), **DNQP Mobilität**. Auf dnqp.de findest du alle Volltexte.",
        sonstBoxB1:
          "Andere DNQP-Standards: **Schmerzmanagement**, **Beziehungsgestaltung bei Demenz**, **Mobilität**. Im Internet auf dnqp.de findest du alle.",
        karteikarte: {
          vorderseite:
            "Frau M. ist gestürzt — du planst gleich Maßnahmen. Welche 6 Kriterien strukturieren deine Sturzprophylaxe nach DNQP 2022?",
          rueckseite:
            "DNQP Sturzprophylaxe (2022) — 6 Kriterien:\n1. Sturzrisiko einschätzen (multifaktoriell, klinisch)\n2. Information + Beratung (Patient + Angehörige)\n3. Maßnahmenplanung MIT Patient (Kriterium 3 = partizipativ)\n4. Maßnahmen durchführen (Kraft+Balance, Umgebung, Medi-Review, Schuhwerk, Sehen, Hilfsmittel)\n5. Bei Sturz: Eskalation + Sturzprotokoll\n6. Evaluation nach 6 Wo / 3 Mo\n\nFaustregel: Reihenfolge ist nicht zufällig. Bei Sturz bei Kriterium 5 angekommen — aber 1-4 bleiben aktiv.",
        },
      },
    },

    // Step 3.1 — Matrix (2x3)
    {
      stepId: "ce02-frau-m-plan-01-kurzfristig-langfristig",
      phase: 3,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-plan-matrix",
      tag: "pflege",
      transition: "Matrix steht. Jetzt das Zimmer sicher machen.",
      contentC1: {
        title: "Maßnahmen-Matrix: Zeit × Ebene",
        body: "Ordne die Maßnahmen in eine Matrix ein. Zwei Dimensionen: **Wann** (sofort / diese Nacht / bis Entlassung) und **wo** (Person / Umgebung / Medikation).\n\nIn dieser einfachen 2×2-Darstellung: X-Achse = Zeit, Y-Achse = Ebene.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Maßnahmen sortieren",
        body: "Sortiere die Maßnahmen in zwei Dimensionen: **Wann** (sofort oder später) und **Was** (Umgebung oder Medikation/Person).",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne die Maßnahmen in die Matrix ein. X-Achse: Jetzt (sofort) ↔ Später (bis Entlassung). Y-Achse: Umgebung ↔ Medikation/Person.",
        matrix: {
          instruction:
            "Ordne jede Maßnahme einem Quadranten zu: Jetzt+Umgebung (Q1), Jetzt+Medi/Person (Q2), Später+Umgebung (Q3), Später+Medi/Person (Q4).",
          axisX: { label: "Zeitachse", low: "Jetzt (sofort)", high: "Später (bis Entlassung)" },
          axisY: { label: "Ebene", low: "Medikation/Person", high: "Umgebung" },
          items: [
            { id: "m1", text: "Nachtlicht am Bett anschalten", correctQuadrant: 2 },
            { id: "m2", text: "Arzt informieren wegen Zolpidem", correctQuadrant: 1 },
            { id: "m3", text: "Bett-Höhe auf niedrigste Position stellen", correctQuadrant: 2 },
            { id: "m4", text: "Physiotherapie für Mobilisations-Aufbau anfordern", correctQuadrant: 4 },
            { id: "m5", text: "Rutschfeste Socken anziehen", correctQuadrant: 2 },
            { id: "m6", text: "Hüftprotektor für zuhause mit Tochter besprechen", correctQuadrant: 4 },
            { id: "m7", text: "Toilettenstuhl ans Bett stellen", correctQuadrant: 2 },
            { id: "m8", text: "Augenarzt-Termin nach Katarakt-OP sichern", correctQuadrant: 4 },
            { id: "m9", text: "Sturzprotokoll anfertigen", correctQuadrant: 1 },
          ],
        },
      },
    },

    // Step 3.2 — Sequencing: Umgebung anpassen
    {
      stepId: "ce02-frau-m-plan-02-umgebung-anpassen",
      phase: 3,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-frau-m-plan-umgebung",
      tag: "pflege",
      transition: "Umgebung angepasst. Aber da ist noch eine Frage: Bettgitter ja oder nein?",
      contentC1: {
        title: "Umgebungsanpassung bis zum nächsten Schlaf",
        body: "Bevor Frau M. wieder einschläft, muss die Umgebung sicher sein. Bringe die Schritte in die sinnvolle Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Zimmer sicher machen",
        body: "Bevor Frau M. wieder schläft, machst du das Zimmer sicher. Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Umgebungsanpassungen in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "In welcher Reihenfolge führst du die Umgebungsanpassungen durch?",
          items: [
            { id: "u1", label: "Bett-Höhe auf niedrigste Position stellen" },
            { id: "u2", label: "Nachtlicht am Bett einschalten" },
            { id: "u3", label: "Weg zum WC räumen — Infusionsständer beiseite" },
            { id: "u4", label: "Klingel in Reichweite legen und testen" },
            { id: "u5", label: "Rutschfeste Socken anziehen" },
          ],
        },
      },
    },

    // Step 3.2b — Inline-Wissen "§ 1831 BGB Bettgitter / Fixierung"
    // PILOT (Inline-Wissen v1, Phase 3): Vor der Branching-Entscheidung \"Bettgitter ja/nein"
    // wird die rechtliche Lage geklärt — wann ist es Fixierung, wann nicht.
    {
      stepId: "ce02-frau-m-plan-02b-fixierung-recht",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "§ 1831 BGB (Genehmigungspflicht freiheitsentziehender Maßnahmen, ab 2023)",
        "§ 34 StGB (Notfall-Klausel)",
        "BGH Urteil 2019 (Bettgitter als Fixierung)",
        "Werdenfelser Weg 2022",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-plan-bettgitter-recht",
      tag: "pflege",
      transition: "Du kennst das Recht. Jetzt entscheiden.",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["pflegedokumentation"],
      contentC1: {
        title: "Bettgitter — wann ist es Fixierung, wann nicht?",
        body: "",
        glossarBegriffe: ["Fixierung", "freiheitsentziehende Maßnahme", "Werdenfelser Weg"],
      },
      contentB1: {
        title: "Bettgitter — Recht und Gesetz",
        body: "",
        glossarBegriffe: ["Fixierung"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-bettgitter-recht",
        storyAufhaenger:
          "Du wirst gleich entscheiden: Beide Bettgitter hoch — oder eines, oder keine? Das ist KEINE pflegerische Lifestyle-Frage. Das ist **Recht**. § 1831 BGB regelt freiheitsentziehende Maßnahmen — und wer es ignoriert, riskiert Strafe.",
        storyAufhaengerB1:
          "Gleich entscheidest du: Beide Bettgitter hoch — oder eines — oder keines? Das ist nicht nur Pflege, das ist auch **Recht**. § 1831 BGB regelt das.",
        kerntext:
          "**Wann ist ein Bettgitter eine Fixierung?**\n\nLaut **BGH 2019**: Wenn der Patient durch das Bettgitter daran gehindert wird, das Bett zu verlassen. Dann liegt eine **freiheitsentziehende Maßnahme (FEM)** vor.\n\n**Folgen einer FEM:**\n\n• **Patient kann selbst zustimmen** (informed consent + Dokumentation) — dann legal.\n\n• **Patient kann nicht zustimmen** (Demenz, Bewusstlosigkeit, Verwirrung) — Pflicht: **richterliche Genehmigung** nach § 1831 BGB. Antrag durch Betreuer/Bevollmächtigten.\n\n• **Notfall:** § 34 StGB Notstand — kurzfristige FEM ohne Genehmigung erlaubt, **muss aber sofort angezeigt** und nachträglich genehmigt werden.\n\n**Bettgitter ohne FEM-Charakter (kein Genehmigungsbedarf):**\n\n• **Einseitig** + Patient kann selbst raus auf der anderen Seite — dann nur Sturzschutz, keine FEM.\n\n• **Halbe Bettgitter** (1/3 oder 2/3) — Sturzhinweis, kein Hindernis.\n\n• **Mit Patienten-Wunsch** (er fühlt sich sicherer mit Gitter) + Doku.\n\n**Bei Frau M.:** Sie ist **orientiert**, kann **zustimmen oder ablehnen**. Du musst sie fragen — Selbstbestimmung respektieren (DNQP Kriterium 3).\n\n**Werdenfelser Weg (2022):** Alternativen vor FEM. Niedrigbett, Sensormatte, Klingelband am Handgelenk, Bewegungsmelder. Werden in der Praxis zu wenig genutzt — Pflege kann hier viel bewegen.",
        kerntextB1:
          "**Wann ist ein Bettgitter eine Fixierung?**\n\nDas Gericht hat 2019 entschieden: Wenn der Patient durch das Bettgitter NICHT mehr aus dem Bett kommt, ist es eine **Fixierung** (= freiheitsentziehende Maßnahme).\n\n**Wenn es eine Fixierung ist:**\n\n• **Patient sagt selbst Ja** und du schreibst es auf — dann erlaubt.\n\n• **Patient kann nicht entscheiden** (Demenz, bewusstlos) — du brauchst **Erlaubnis vom Richter** (§ 1831 BGB). Den Antrag stellt der Betreuer.\n\n• **Notfall:** Du darfst kurzfristig fixieren ohne Erlaubnis (§ 34 StGB), musst es aber SOFORT melden und nachträglich genehmigen lassen.\n\n**Wann ist es KEINE Fixierung?**\n\n• **Nur ein Gitter** + Patient kann auf der anderen Seite raus — kein Problem.\n\n• **Halbe Bettgitter** (kurze Stücke) — nur als Hinweis, kein Hindernis.\n\n• **Patient will es selbst** + du schreibst es auf — kein Problem.\n\n**Bei Frau M.:** Sie ist **wach und kann selbst entscheiden**. Du musst sie fragen!\n\n**Werdenfelser Weg (2022):** Es gibt **Alternativen**, bevor man fixiert. Z.B.:\n\n• Niedriges Bett\n\n• Sensor-Matte am Boden (klingelt wenn jemand aufsteht)\n\n• Klingelband am Arm",
        faustregel:
          "Beide Bettgitter hoch + nicht-zustimmungsfähig + ohne richterliche Genehmigung = strafbare Freiheitsberaubung. Bei orientierten Patienten: fragen, dokumentieren, Selbstbestimmung respektieren.",
        faustregelB1:
          "Beide Bettgitter hoch + Patient kann nicht zustimmen + keine Erlaubnis vom Richter = STRAFBAR. Bei wachen Patienten immer fragen!",
        spektrum: [
          {
            patientName: "Herr Bauer (Demenz)",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "FEM-Genehmigung über Tochter Ingrid",
            kurzbeschreibung:
              "Bei fortgeschrittener Demenz ist Patient nicht zustimmungsfähig — FEM braucht Genehmigung über gesetzlichen Betreuer (Tochter Ingrid). Werdenfelser Weg: Niedrigbett + Sensormatte vor jedem Gitter.",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Bettgitter post-OP klar nicht-FEM",
            kurzbeschreibung:
              "Bei ihr sind Bettgitter post-OP-Tag-1 unkritisch: orientiert, lehnt nicht ab, kann selbst zustimmen. Plus: nach 90°-Lagerungsregel ohnehin reduzierte Mobilität — Gitter dienen primär dem Selbstschutz.",
          },
          {
            patientName: "Lukas (Säugling, Verbrühung)",
            situationsId: "ls-lukas-verbruehung",
            hauptfaktor: "Sicherheits-Gitter ist Pflicht, keine FEM",
            kurzbeschreibung:
              "Bei Säuglingen/Kleinkindern sind Bett-Gitter Sicherheits-Standard, keine FEM — Eltern oder Sorgeberechtigte stimmen routinemäßig zu (Aufnahmegespräch).",
          },
        ],
        sonstBox:
          "Was wir hier nicht behandeln: **Pharmakologische Fixierung** (Sedativa zur Ruhigstellung) — auch FEM, gleiche Regeln. **Mechanische Fixierung** (Gurte) — nur Notfall + sofortige Genehmigung. **Bauchgurt im Rollstuhl** — wenn fest, FEM. Mehr in CE-09 (Psychiatrie) + Praxis-Schulungen Werdenfelser Weg.",
        sonstBoxB1:
          "Andere Fixierungs-Themen die wir nicht im Detail behandeln: **Beruhigungsmittel zur Ruhigstellung** (auch Fixierung!), **Gurte zum Festbinden**, **Bauchgurt im Rollstuhl**. Mehr in CE-09 (Psychiatrie).",
        karteikarte: {
          vorderseite:
            "Frau M. (orientiert, 82) ist heute Nacht gestürzt. Du überlegst: Beide Bettgitter hoch? Was sagt § 1831 BGB?",
          rueckseite:
            "Bettgitter wird zu FEM, wenn Patient daran gehindert wird, das Bett zu verlassen (BGH 2019).\n\nFolgen:\n• Zustimmungsfähig → Patient fragen + dokumentieren = legal\n• Nicht zustimmungsfähig → § 1831 BGB Genehmigung Richter\n• Notfall → § 34 StGB, sofort melden + nachgenehmigen\n\nKeine FEM:\n• Einseitig + Patient kommt raus\n• Halbe Bettgitter\n• Patient will es selbst\n\nBei Frau M.: orientiert → fragen, Selbstbestimmung. Werdenfelser Weg: Niedrigbett + Sensormatte vor Bettgitter.\n\nFaustregel: Beide hoch + nicht zustimmungsfähig + ohne Richter = strafbare Freiheitsberaubung.",
        },
      },
    },

    // Step 3.3 — Branching (Mini, 3 Pfade): Fixierung-nein
    {
      stepId: "ce02-frau-m-plan-03-fixierung-nein",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["§ 1831 BGB", "DNQP 2022"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-plan-fixierung",
      tag: "pflege",
      transition: "Frau M. hat Angst. Das ist nicht nur ein Risikofaktor. Das ist ein Mensch.",
      contentC1: {
        title: "Die Bettgitter-Entscheidung",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Die Nachtschwester, die an der Tür auftaucht, blickt auf Frau M. und sagt leise:\n\n\"Machen wir doch ein Bettgitter hoch, dann ist sie sicher. Bei der Frau weiß man nie.\"\n\nDie Bettgitter sind hochfahrbar. Beide Seiten sind verfügbar. Frau M. ist orientiert, aber geschwächt. Du musst jetzt entscheiden. Es ist 03:15 Uhr.",
        glossarBegriffe: ["Fixierung", "§ 1831 BGB"],
      },
      contentB1: {
        title: "Bettgitter hochziehen?",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Die Nachtschwester sagt leise:\n\n\"Wir machen ein Bettgitter hoch, dann ist sie sicher.\"\n\nBeide Bettgitter sind möglich. Frau M. ist wach und orientiert. Es ist 03:15 Uhr. Wie reagierst du?",
        glossarBegriffe: ["Fixierung", "§ 1831 BGB"],
      },
      question: {
        fragetext:
          "Wie antwortest du der Kollegin, die beide Bettgitter hochziehen möchte?",
        branchingOptions: [
          {
            text: "\"Ja, sofort hoch — Sicherheit geht vor.\"",
            feedback:
              "Diese Entscheidung ist rechtlich und fachlich problematisch. Beidseitige Bettgitter ohne Zustimmung der orientierten Patientin sind eine **freiheitsentziehende Maßnahme** (§ 1831 BGB). Sie braucht richterliche Genehmigung oder informierte Einwilligung. Zusätzlich: Bettgitter verhindern keine Stürze — sie erhöhen die Fall-Höhe und können Verletzungen verschlimmern (Patienten klettern darüber). Frau M. könnte diese Entscheidung später als Eingriff in ihre Würde empfinden. Besser: Zustimmung einholen ODER Alternativen (Niederflur-Bett, Sturzmatte, Bewegungsmelder).",
            feedbackB1:
              "Diese Entscheidung ist falsch und rechtlich gefährlich. Beide Bettgitter ohne Frau M.s Erlaubnis sind **Fixierung** (§ 1831 BGB). Man braucht Erlaubnis vom Gericht oder von ihr selbst. Außerdem: Bettgitter verhindern keine Stürze — Patienten klettern darüber und fallen tiefer. Besser: Frau M. fragen ODER niedriges Bett, Sturzmatte, Bewegungsmelder.",
            isCorrect: false,
          },
          {
            text: "\"Nein, das ist rechtlich ohne ihre Zustimmung nicht erlaubt — und es schützt sie nicht. Wir nehmen stattdessen Bett niedrig, Nachtlicht, Klingel in Reichweite und ich bleibe die erste Stunde in der Nähe.\"",
            feedback:
              "Hervorragend. Du hast die rechtliche Kernregel verstanden: Beidseitige Bettgitter ohne Zustimmung = freiheitsentziehende Maßnahme (§ 1831 BGB). Du lieferst gleich Alternativen (DNQP 2022-konform): Niedriges Bett (reduziert Fallhöhe), Nachtlicht (verhindert Orientierungs-Sturz), Klingel (ermöglicht Hilfe), Präsenz (beruhigt Frau M.). Das ist fachlich + rechtlich + ethisch richtig. Als Pflegefachperson hast du Aufklärungs- und Widerspruchs-Pflicht gegenüber Kolleg:innen.",
            feedbackB1:
              "Sehr gut. Du hast die Regel verstanden: Bettgitter ohne Erlaubnis sind verboten (§ 1831 BGB). Du hast gute Alternativen: Bett niedrig, Nachtlicht, Klingel, du bleibst in der Nähe. Das ist richtig — rechtlich und fachlich. Als Pflegefachkraft musst du solchen Vorschlägen widersprechen.",
            isCorrect: true,
          },
          {
            text: "\"Ich frage den Arzt morgen früh, dann entscheiden wir.\"",
            feedback:
              "Zwischen-Antwort. Du hast das Bauchgefühl richtig — du zögerst bei der Fixierung. Aber: Frau M. braucht JETZT eine sichere Nacht, nicht morgen. Und: Auch der Arzt darf keine Bettgitter ohne Zustimmung anordnen. Das ist ein rechtliches Thema. Richtig wäre: Sofortmaßnahmen ohne Fixierung (Bett niedrig, Nachtlicht, Klingel, ggf. Präsenz), und am Morgen strukturiertes Gespräch mit Arzt + Frau M. über dauerhafte Lösungen.",
            feedbackB1:
              "Du bist auf dem richtigen Weg — du zögerst. Aber: Frau M. braucht SOFORT eine sichere Nacht. Und: Auch der Arzt darf Bettgitter nicht einfach anordnen. Das ist rechtlich. Mach jetzt: Bett niedrig, Nachtlicht, Klingel. Morgen: Gespräch mit Arzt und Frau M.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 3.4 — Text (scenario): Angst adressieren
    {
      stepId: "ce02-frau-m-plan-04-angst-adressieren",
      phase: 3,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022", "Tinetti et al., Studies on Falls in Elderly"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-plan-angst",
      tag: "pflege",
      transition: "Gleich rufst du den Arzt an. SBAR macht dich in 30 Sekunden praezise.",
      displayFormat: "scenario",
      contentC1: {
        title: "Post-Fall-Angst adressieren",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt jetzt im Bett, die Hände wieder gefaltet. Sie blickt dich an und sagt leise:\n\n> \"Ich habe Angst, ehrlich gesagt. Nicht vor Ihnen, bitte verstehen Sie mich nicht falsch. Ich habe Angst, wieder aufzustehen. Wenn ich nochmal falle — was ist dann mit meiner Wohnung?\"\n\nDas ist der Beginn eines **Post-Fall-Syndroms**: Sturzangst → Bewegungsvermeidung → Muskelabbau (1-2 %/Tag!) → Gleichgewichts-Verlust → erhöhtes Sturzrisiko. Ein Teufelskreis. Deine Aufgabe jetzt: **Angst validieren**, nicht kleinreden. Gleichzeitig Perspektive geben: Die Ursache ist identifizierbar und veränderbar (Zolpidem). Das ist nicht 'das Alter' — das sind konkrete Faktoren, die du benennen kannst. Merke: Aktivität ist die Therapie. Aber sie braucht Zeit, Erfolge und Sicherheit.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Frau M.s Angst ernst nehmen",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt im Bett. Sie faltet die Hände. Sie sagt leise:\n\n> \"Ich habe Angst. Nicht vor Ihnen. Ich habe Angst, wieder aufzustehen. Wenn ich noch einmal falle — was ist dann mit meiner Wohnung?\"\n\nDas ist **Post-Fall-Angst** — der Anfang eines Teufelskreises: Angst → weniger Bewegung → schwächere Muskeln → schlechteres Gleichgewicht → neues Sturzrisiko. Deine Aufgabe: **Angst ernst nehmen**. Nicht sagen: 'Das wird schon.' Und: Perspektive geben. Sage: 'Der Grund ist kein Alter — es war die Tablette. Die kann man ändern.' Merke: Bewegung ist die Therapie. Aber: langsam, mit Erfolgen, sicher.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // Step 3.4b — Inline-Wissen \"SBAR — strukturierter Arzt-Anruf"
    // PILOT (Inline-Wissen v1, Phase 3): Vor dem interprofessionellen Team-Step gibt es
    // den Anruf an den Nachtarzt — SBAR ist die Standard-Übergabe-Struktur.
    {
      stepId: "ce02-frau-m-plan-04b-sbar-arzt-anruf",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: [
        "Aktionsbündnis Patientensicherheit — SBAR-Empfehlung 2014",
        "WHO 2009 Patient Safety Curriculum",
        "DIVI 2020 Übergabe-Standard",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-plan-sbar",
      tag: "pflege",
      transition: "Letzte Frage vor Phase 4: Wer macht was im Team?",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["sturz-prophylaxe"],
      contentC1: {
        title: "SBAR — wie du strukturiert beim Nachtarzt anrufst",
        body: "",
        glossarBegriffe: ["SBAR", "Übergabe"],
      },
      contentB1: {
        title: "SBAR — Anruf beim Arzt",
        body: "",
        glossarBegriffe: ["SBAR"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-sbar",
        storyAufhaenger:
          "Du wirst gleich den Nachtarzt anrufen — Bedarfsanalgesie + Sturzmeldung. **Wenn du unstrukturiert anrufst, fragt er 5x zurück und du verlierst Glaubwürdigkeit.** SBAR macht dich in 30 Sekunden präzise.",
        storyAufhaengerB1:
          "Du rufst gleich den Arzt an. **Wenn du wirr erzählst, fragt er viel zurück.** Mit SBAR brauchst du nur 30 Sekunden — und der Arzt versteht alles.",
        kerntext:
          "**SBAR = Situation, Background, Assessment, Recommendation** — entwickelt von der US-Navy, in der Pflege seit ~2005 Standard, in Deutschland Kern der DIVI-Übergabe-Empfehlung.\n\n**S — Situation (10 Sek):**\n\n• Wer ruft an, von wo, welcher Patient, was ist akut.\n\n• Bei Frau M.: \"Hier Schwester X, Station 3B, Zimmer 14. Frau M., 82, ist um 02:48 Uhr aus dem Bett gestürzt.\"\n\n**B — Background (15 Sek):**\n\n• Aufnahmegrund + relevante Vorgeschichte + Medikation.\n\n• Bei Frau M.: \"Stationäre Aufnahme Dienstag, Pneumonie Tag 3 Antibiose. Vorerkrankungen: Parkinson II, Osteoporose, Katarakt. Seit 2 Tagen neu: Zolpidem 10 mg.\"\n\n**A — Assessment (15 Sek):**\n\n• Vitalwerte + aktueller Befund + deine Einschätzung.\n\n• Bei Frau M.: \"RR 142/88, HF 76, SpO2 95 %, Temp 36,8. Wach, orientiert, NRS 4 in der linken Hüfte. Keine Verkürzung, keine Außenrotation. ABCDE unauffällig. Verdacht: Hüftprellung, Parkinson + Zolpidem als Sturz-Auslöser.\"\n\n**R — Recommendation (10 Sek):**\n\n• Konkreter Vorschlag, was du brauchst.\n\n• Bei Frau M.: \"Ich brauche Bedarfsanalgesie nach AVO und eine ärztliche Sturzbeurteilung morgen früh. Frage: Können wir Zolpidem heute pausieren?\"\n\n**Tipps für sicheren SBAR-Anruf:**\n\n• Notiere die 4 Punkte vorher auf einem Zettel — auch erfahrene Pflegekräfte tun das.\n\n• **Frag nach Repeat-Back:** \"Ich notiere die AVO — können Sie sie nochmal sagen?\" Verhindert Missverständnisse.\n\n• **Dokumentiere AVO sofort** mit Zeitstempel + ärztl. Namen.",
        kerntextB1:
          "**SBAR = Situation, Background, Assessment, Recommendation** — eine Struktur für Übergaben.\n\n**S — Situation (10 Sek):**\n\n• Wer du bist, wo du bist, welcher Patient, was passiert ist.\n\n• Bei Frau M.: \"Hier Schwester X, Station 3B, Zimmer 14. Frau M., 82, ist um 02:48 Uhr aus dem Bett gestürzt.\"\n\n**B — Background (15 Sek):**\n\n• Warum ist Patient hier, was ist die Vorgeschichte, was nimmt sie.\n\n• Bei Frau M.: \"Aufnahme Dienstag, Lungenentzündung Tag 3. Hat Parkinson, Osteoporose. Seit 2 Tagen Schlafmittel Zolpidem.\"\n\n**A — Assessment (15 Sek):**\n\n• Vitalwerte + aktuelle Beobachtung + deine Einschätzung.\n\n• Bei Frau M.: \"RR 142/88, Puls 76, SpO2 95 %. Wach, orientiert, Schmerz 4/10 in der linken Hüfte. Kein Bein-Bruch sichtbar. Vermutung: Prellung.\"\n\n**R — Recommendation (10 Sek):**\n\n• Was du brauchst.\n\n• Bei Frau M.: \"Ich brauche ein Schmerzmittel und morgen ärztliche Untersuchung. Frage: Können wir das Schlafmittel heute pausieren?\"\n\n**Tipps:**\n\n• **Notiere die 4 Punkte vorher** auf Zettel.\n\n• **Frag den Arzt nochmal:** \"Können Sie die Anordnung wiederholen?\"\n\n• **Schreibe sofort auf** mit Uhrzeit + Arztnamen.",
        faustregel:
          "SBAR in 50 Sekunden: 10s Situation + 15s Background + 15s Assessment + 10s Recommendation. Vorher aufschreiben, nachher Repeat-Back.",
        faustregelB1:
          "SBAR = 4 Schritte: WAS jetzt? WARUM hier? WIE geht's? WAS brauche ich? — In 50 Sekunden, vorher aufschreiben.",
        spektrum: [
          {
            patientName: "Herr Petrov (Schlaganfall)",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "SBAR bei Aspiration auf Station",
            kurzbeschreibung:
              "Bei Aspirations-Ereignis schaut SBAR ähnlich aus, aber Recommendation ist anders: \"Ich brauche Schluckdiagnostik durch Logopäde + ärztliche Re-Evaluation IDDSI-Stufe.\"",
          },
          {
            patientName: "Frau Kovac (ambulant)",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "SBAR auf Anrufbeantworter Hausarzt",
            kurzbeschreibung:
              "Im ambulanten Setting hinterlässt du SBAR oft als Sprachnachricht — Background-Teil wird länger (Patient ist beim Hausarzt nicht permanent präsent).",
          },
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "SBAR + Wunddokumentation post-OP",
            kurzbeschreibung:
              "Post-OP-Schichtübergabe nutzt SBAR + zusätzliches Wund-Foto-Dokument (mit Einwilligung). Background-Teil enthält OP-Berichts-Kerndaten.",
          },
        ],
        sonstBox:
          "Andere Übergabe-Strukturen die du kennen solltest: **ISBAR** (mit Identifikation am Anfang), **PACE** (Pflege-Übergabe in der Patientenversorgung), **ABCDE-SBAR** (kombiniert mit Notfall-Schema). SBAR ist das verbreitetste — andere Varianten je nach Klinik.",
        sonstBoxB1:
          "Andere Übergabe-Schemata: **ISBAR** (mit Vorstellung), **PACE**, **ABCDE-SBAR**. SBAR ist am häufigsten — manche Kliniken nutzen andere.",
        karteikarte: {
          vorderseite:
            "Es ist 03:15 Uhr. Du musst den Nachtarzt wegen Frau M. (Sturz, Hüftschmerz NRS 4) anrufen. Welche Struktur, welche Inhalte?",
          rueckseite:
            "SBAR (Situation/Background/Assessment/Recommendation):\n\nS (10s): \"Schwester X, Station 3B, Zimmer 14. Frau M., 82, ist um 02:48 gestürzt.\"\nB (15s): \"Aufnahme Dienstag, Pneumonie Tag 3, Parkinson II, Osteoporose, seit 2 Tagen Zolpidem.\"\nA (15s): \"RR 142/88, HF 76, SpO2 95%. Wach, orientiert, NRS 4 linke Hüfte. Keine Verkürzung/Außenrotation.\"\nR (10s): \"Bedarfsanalgesie nach AVO + ärztliche Sturzbeurteilung morgen. Frage: Zolpidem heute pausieren?\"\n\nFaustregel: 50 Sek total, vorher aufschreiben, nachher Repeat-Back. Sofortige Doku mit Zeitstempel + Arztname. (Aktionsbündnis Patientensicherheit 2014, DIVI 2020)",
        },
      },
    },

    // Step 3.5 — Matching: Interprofessionelles Team
    {
      stepId: "ce02-frau-m-plan-05-interprof-team",
      phase: 3,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-frau-m-plan-team",
      tag: "pflege",
      contentC1: {
        title: "Wer macht was? — Interprofessionelle Zusammenarbeit",
        body: "Sturzprophylaxe ist Teamarbeit. Ordne die Aufgaben den richtigen Berufsgruppen zu.",
        glossarBegriffe: ["Interprofessionell"],
      },
      contentB1: {
        title: "Wer macht was im Team?",
        body: "Bei der Sturzprophylaxe arbeiten viele Berufe zusammen. Welche Aufgabe gehört zu welcher Gruppe?",
        glossarBegriffe: ["Interprofessionell"],
      },
      question: {
        fragetext:
          "Ordne jede Aufgabe der richtigen Berufsgruppe zu.",
        matchingPairs: [
          {
            left: "Arzt",
            right:
              "Medikamentenreview Zolpidem + HCT, Grunderkrankungen behandeln",
          },
          {
            left: "Physiotherapie",
            right: "Mobilisations-Aufbau, Balance-Training, Gangschule",
          },
          {
            left: "Pflege",
            right:
              "Umgebungsanpassung, Nachtbetreuung, Beratung + Koordination",
          },
          {
            left: "Ergotherapie",
            right: "Hilfsmittelberatung für Zuhause (Haltegriffe, Toilettenstuhl)",
          },
          {
            left: "Apotheker",
            right:
              "Brown-Bag-Review für Entlassung (alle Medikamente + Interaktionen)",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 30,
};
