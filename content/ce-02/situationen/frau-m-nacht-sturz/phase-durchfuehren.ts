// CE-02 Situation Frau M. — Phase 4: Maßnahmen durchführen
// Steps: 7 · Bloom: B4-B5 · Herzstück der Situation (2 Branchings)
// Quelle: phasen-plan.md + sessionsplan.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN: SituationsPhase = {
  phaseId: "ls-frau-m-durchführen",
  phase: "durchführen",
  titel: "Maßnahmen durchführen",
  titelB1: "Maßnahmen umsetzen",
  kontext:
    "03:14 Uhr. Frau Keller hat den Türrahmen kurz mit der Hüfte angeschoben und steht jetzt neben dir. Sie riecht nach Veilchen-Bonbon, ihr Kasak ist an der Schulter leicht gebügelt, die Ärmel hochgekrempelt. Sie wirft einen Blick auf Frau M., einen auf dich, sagt halblaut: 'Ok. Was hast du?' — und du merkst, dass jetzt nicht die Zeit für Selbstzweifel ist. Du gehst durch deinen Plan, Stichpunkt für Stichpunkt. Sie nickt, ergänzt eine Sache, dann: 'Gut. Mach.' Du führst jetzt — gemeinsam mit Frau Keller. Frau M. liegt noch in derselben Position, aber sie zittert leicht, der Boden ist kalt, ihre Füße in dünnen Wollsocken sind weiß. Ihr werdet sie hochbringen — nicht heben, sondern kinästhetisch begleiten: Frau M. macht die Bewegung selbst, ihr sichert über Seitlage und Kniestand, wie du es im Skills-Lab geübt hast. Aber: Du hast es noch nie nachts mit einer realen 82-Jährigen getan. Dein Herz schlägt höher, du fühlst es bis in die Kehle. Du hockst dich an ihre rechte Seite, sprichst leise: 'Frau M., wir gehen jetzt vorsichtig hoch — gemeinsam. Sie machen die Bewegung, ich begleite. Erst zur Seite, dann auf die Knie, dann ans Bett. Sie sagen das Tempo. Ja?' Sie nickt. Ihre Augen sind wach. Du spürst die Wärme ihres Oberkörpers durch die dünne Baumwolle, ihre Hand ist leicht. Frau Keller ist links, stützt das linke Becken und kontrolliert die Hüfte. Drei, zwei, eins — und es geht. Langsam. Geräuschlos. Sie atmet kurz ein, einmal stöhnt sie leise, du fragst sofort nach den Schmerzen — NRS 5. Das ist moderater Schmerz, kein 'im Rahmen' — du wirst das im SBAR-Anruf an den Arzt erwähnen und Bedarfsanalgesie ansprechen. Im Bett dann: zudecken, Kopfteil leicht hoch, Rufknopf in die Hand. Aber das ist nur Schritt eins. Vor dir liegt jetzt die zweite Schwelle: SBAR-Anruf an den diensthabenden Arzt. Die Stimme am Telefon hörbar müde. Du hast genau diese Sätze. Danach: Schellong-Test vor erster Mobilisation — RR im Liegen messen, mindestens eine Minute am Bettrand sitzen lassen, dann erst RR im Stehen, erst dann Standversuch. Und dann ein Moment, den keine Checkliste vorhersagt: Frau M. greift nach deiner Hand, schaut dich an, fragt: 'Sind Sie böse auf mich, dass ich gestürzt bin?' Du hältst inne. Was sagst du? Später, gegen 04:30, wirst du mit ihr über den Hüftprotektor sprechen — sie weiß noch nicht, dass es so etwas gibt. Im Hintergrund klappert leise der Medikamentenwagen auf dem Flur, Frau Keller hat ihre Hand kurz auf deine Schulter gelegt und genickt, ein wortloses 'mach weiter'. Vor dem Fenster zieht eine Krankenwagensirene langsam vorbei, fern, gedämpft. Die nächsten 90 Minuten sind nicht Routine. Sie sind das Herzstück dieser Schicht — fachlich präzise und menschlich aufmerksam. Beides, gleichzeitig. Du wirst entscheiden müssen, manchmal in Sekunden, manchmal in Minuten, immer mit Frau M. als Mensch im Mittelpunkt.",
  kontextB1:
    "03:14 Uhr. Frau Keller ist da. Sie steht neben dir. Sie sagt leise: 'Ok. Was hast du?' Du erklärst deinen Plan. Sie nickt. Sie sagt: 'Gut. Mach.' Du führst jetzt — gemeinsam mit Frau Keller. Frau M. liegt noch auf dem Boden. Sie zittert ein bisschen. Der Boden ist kalt. Ihre Füße sind weiß. Ihr bringt sie hoch. Nicht heben. Frau M. macht die Bewegung selbst — ihr begleitet und sichert. Über die Seite, auf die Knie, ins Bett. Das nennt man Kinästhetik. Du hast es geübt. Aber heute ist es echt. Dein Herz schlägt schnell. Du hockst dich neben Frau M. Du sagst leise: 'Frau M., wir gehen jetzt gemeinsam hoch. Sie machen die Bewegung, ich begleite. Sie sagen das Tempo. Ja?' Sie nickt. Frau Keller ist auf der anderen Seite. Sie stützt die linke Seite und das Becken. Drei, zwei, eins. Es geht. Langsam. Frau M. stöhnt einmal kurz. Du fragst nach den Schmerzen. 5 von 10. Das ist nicht wenig — du wirst das dem Arzt sagen und nach Schmerzmedikation fragen. Im Bett: zudecken, Kopf hoch, Rufknopf in ihre Hand. Aber das ist erst Schritt eins. Jetzt rufst du den Arzt an. Du benutzt SBAR. Du hast die Sätze im Kopf. Danach: Schellong-Test. Du misst Blutdruck im Liegen. Dann setzt sich Frau M. an den Bettrand. Sie wartet mindestens eine Minute. Du misst wieder. Erst dann: Aufstehen. Und dann: Frau M. nimmt deine Hand. Sie schaut dich an. Sie fragt: 'Sind Sie böse auf mich?' Du hältst inne. Was sagst du? Später um 04:30 redest du mit ihr über den Hüftprotektor. Sie kennt das Wort nicht. Wie bringst du es ein? Die nächsten 90 Minuten sind keine Routine. Du musst fachlich richtig sein und gleichzeitig menschlich da sein. Beides — gleichzeitig.",
  kernSteps: [
    // Step 4.0b — Inline-Wissen \"Kinästhetik nach Hatch/Maietta — Transfer Boden → Bett"
    // PILOT (Inline-Wissen v1, Phase 4): Vor dem Sorting-Step zum Transfer wird
    // Kinästhetik-Prinzip geklärt — Anti-Pattern \"ich hebe Sie hoch" muss bewusst werden.
    {
      stepId: "ce02-frau-m-dur-00b-kinästhetik-transfer",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.2",
      quellen: [
        "Hatch F./Maietta L. (1996) — Kinästhetik in der Pflege",
        "DGUV 207-018 (2022) — Patiententransfer",
        "DNQP Mobilität 2014/2024",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-dur-kinästhetik",
      tag: "pflege",
      transition: "Du weisst wie. Jetzt die Reihenfolge.",
      themaPrimaer: "kinästhetik",
      themenSekundaer: ["mobilisation", "sturz-prophylaxe"],
      contentC1: {
        title: "Kinästhetik — bevor du Frau M. hochbringst",
        body: "",
        glossarBegriffe: ["Kinästhetik", "Hatch/Maietta", "Patiententransfer"],
      },
      contentB1: {
        title: "Kinästhetik — was ist das?",
        body: "",
        glossarBegriffe: ["Kinästhetik"],
      },
      inlineWissen: {
        bausteinRef: "kinästhetik-transfer-boden",
        storyAufhaenger:
          "Frau M. liegt auf dem Boden, will hoch ins Bett. Du gehst gleich an den Transfer. Aber: **Du hebst sie nicht hoch.** Das ist Anti-Pattern. Hatch & Maietta haben Pflege-Kinästhetik aus Behavioral Cybernetics (Karl U. Smith) und Bewegungsanalyse entwickelt — Patient bewegt sich selbst, du begleitest.",

        storyAufhaengerB1:
          "Frau M. liegt auf dem Boden. Du musst sie ins Bett bringen. Aber: **Du hebst sie NICHT hoch.** Das ist falsch. Bei Kinästhetik bewegt sich Frau M. selbst, du begleitest sie nur.",
        kerntext:
          "**Kinästhetik nach Hatch & Maietta (1996)** ist ein Konzept zur Pflege-Bewegung. Kerngedanke: **Du nimmst dem Patienten nicht die Bewegung weg — du gibst sie ihm.**\n\n**Die 6 Konzepte (Stichworte):**\n\n• **Interaktion** — Bewegung als Kommunikation\n\n• **Funktionale Anatomie** — Knochen tragen, Muskeln bewegen\n\n• **Menschliche Bewegung** — Spirale + Parallelbewegung\n\n• **Anstrengung** — Zug + Druck als Werkzeug\n\n• **Menschliche Funktion** — einfache Aktivitäten unterstützen\n\n• **Umgebung** — Raum nutzen statt überwinden\n\n**Praktisch beim Transfer Boden → Bett (Frau M.):**\n\n• **Schritt 1:** Frau M. dreht sich auf die nicht-schmerzhafte Seite (rechts).\n\n• **Schritt 2:** Sie zieht ihre Knie an, setzt sich auf den Boden.\n\n• **Schritt 3:** Mit einer Hand am Bett stützt sie sich, du begleitest am Becken (NICHT unter den Achseln).\n\n• **Schritt 4:** Sie kommt auf die Knie, drückt sich am Bett hoch.\n\n• **Schritt 5:** Sie setzt sich auf die Bettkante, dann ins Bett.\n\n**Anti-Patterns (verboten):**\n\n• ❌ \"Ich hebe Sie hoch\" — Pflege-Rücken + Patient passiv\n\n• ❌ Greifen unter den Achseln — Schultergelenk-Risiko\n\n• ❌ \"Ich ziehe Sie am Arm\" — Subluxation möglich\n\n• ❌ \"Schnell, einmal hoch\" — kein Tempo des Patienten\n\n**Pflege-Aufgabe:**\n\nDu **begleitest** mit Hand am Becken/Rumpf, **sicherst** vor Sturz, **sprichst** das Tempo mit Frau M. ab. **Sie führt** die Bewegung — du machst sie sicher.",
        kerntextB1:
          "**Kinästhetik nach Hatch & Maietta (1996)** ist eine Methode für Pflege-Bewegung. Hauptidee: **Du machst die Bewegung NICHT für den Patienten — du machst sie MIT ihm.**\n\n**6 Grundprinzipien (kurz):**\n\n• **Interaktion** — Bewegung ist auch Kommunikation\n\n• **Anatomie** — Knochen tragen das Gewicht, Muskeln bewegen\n\n• **Bewegungs-Muster** — Drehen + paralleles Schieben\n\n• **Kraft** — Ziehen + Drücken statt Heben\n\n• **Aktivität** — einfache Sachen unterstützen\n\n• **Raum** — den Raum nutzen\n\n**Bei Frau M. — Transfer vom Boden ins Bett:**\n\n• **Schritt 1:** Frau M. dreht sich auf die rechte Seite (= keine Schmerzen).\n\n• **Schritt 2:** Sie zieht die Knie an, setzt sich auf den Boden.\n\n• **Schritt 3:** Mit einer Hand am Bett stützt sie sich. Du legst eine Hand am **Becken** (NICHT unter die Achseln!).\n\n• **Schritt 4:** Sie geht auf die Knie. Sie drückt sich am Bett hoch.\n\n• **Schritt 5:** Sie setzt sich auf die Bettkante. Dann ins Bett.\n\n**FALSCH (verboten):**\n\n• ❌ \"Ich hebe Sie hoch\" — schlecht für deinen Rücken + Frau M. macht nichts\n\n• ❌ Du greifst unter die Achseln — Risiko für Schulter\n\n• ❌ Du ziehst am Arm — Schulter kann auskugeln\n\n• ❌ \"Schnell, einmal hoch\" — Frau M. braucht ihr Tempo\n\n**Deine Aufgabe:**\n\nDu **begleitest** mit Hand am Becken, **sicherst**, **fragst** Frau M. nach dem Tempo. **Sie macht die Bewegung — du machst sie sicher.**",
        faustregel:
          "Patient bewegt sich selbst. Pflege begleitet + sichert. Hand am Becken, NICHT unter Achseln. Tempo entscheidet der Patient.",
        faustregelB1:
          "Patient bewegt sich selbst. Du begleitest. Hand am Becken — NICHT unter den Achseln. Patient gibt das Tempo vor.",
        spektrum: [
          {
            patientName: "Frau Yilmaz (Hüft-TEP)",
            situationsId: "ls-yilmaz-hüft-tep",
            hauptfaktor: "Kinästhetik post-OP mit Lagerungsregeln",
            kurzbeschreibung:
              "Bei ihr: Kinästhetik unter Beachtung der Hüft-TEP-Verbote (max. 90° Flexion, keine Adduktion über Mittellinie, keine Innenrotation). Das schränkt Bewegungs-Ablauf ein — du brauchst Plan vorher.",
          },
          {
            patientName: "Herr Petrov (Schlaganfall)",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Kinästhetik + Bobath-Prinzipien",
            kurzbeschreibung:
              "Bei Hemiparese rechts wird Kinästhetik mit Bobath kombiniert: betroffene Seite einbeziehen (statt vergessen), Schulter sichern, Patient aktiviert die nicht-betroffene Seite — Pflege begleitet symmetrisch.",
          },
          {
            patientName: "Frau Schmidt (Adipositas, BMI 38)",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Kinästhetik mit bariatrischem Equipment",
            kurzbeschreibung:
              "Bei BMI > 35 reicht eine Pflegekraft nicht — 2-3 Helfer + Schwerlast-Bett (Standard 135-185 kg) + ggf. Lifter. Kinästhetik-Prinzip bleibt: Patientin macht aktiv mit, aber Helferzahl steigt.",
          },
        ],
        sonstBox:
          "Andere Bewegungs-Konzepte die du kennen solltest: **Bobath** (Schlaganfall, neurologisch), **Pneumatische Hilfsmittel** (Hover-Matte für Querverlagerung), **Stehlifter** (sit-to-stand-Hilfe). Kinästhetik ist die Grundphilosophie — die anderen sind Technik-Erweiterungen.",
        sonstBoxB1:
          "Andere Methoden: **Bobath** (für Schlaganfall), **Hover-Matte** (Luftkissen zum Verschieben), **Stehlifter** (hilft beim Aufstehen). Kinästhetik ist die Grund-Idee — die anderen sind Technik.",
        karteikarte: {
          vorderseite:
            "Frau M. (82) liegt auf dem Boden, will ins Bett. Du wirst sie begleiten — wie nach Kinästhetik?",
          rueckseite:
            "Kinästhetik nach Hatch/Maietta (1996): **Patient bewegt sich selbst, Pflege begleitet.**\n\n5 Schritte Boden → Bett:\n1. Drehung auf nicht-schmerzhafte Seite\n2. Knie anziehen, Sitz auf Boden\n3. Mit Hand am Bett abstützen (Pflege begleitet am Becken)\n4. Auf die Knie, am Bett hochdrücken\n5. Auf Bettkante, ins Bett\n\nAnti-Patterns:\n• Heben hoch (Pflege-Rücken, Patient passiv)\n• Unter den Achseln (Schulter-Risiko)\n• Am Arm ziehen (Subluxation)\n• Schnelles Tempo erzwingen\n\nFaustregel: Patient bewegt selbst, Pflege begleitet + sichert + fragt das Tempo. Hand am Becken, nicht unter Achseln.",
        },
      },
    },

    // Step 4.1 — Sorting: Transfer vom Boden
    {
      stepId: "ce02-frau-m-dur-01-transfer-vom-boden",
      phase: 4,
      stepType: "sorting",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022", "Kinästhetik-Prinzipien"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-dur-transfer",
      tag: "pflege",
      transition: "Frau M. ist im Bett. Zugedeckt. Rufknopf in der Hand. Jetzt: den Arzt anrufen.",
      bildkategorie: "szene",
      imageAlt:
        "Ältere Frau auf dem Krankenhausboden neben dem Bett, Pflegekraft kniet unterstützend, ruhige kontrollierte Atmosphäre",
      bildhinweis:
        "Elderly woman on hospital floor next to bed, nurse kneeling beside her in supportive posture, calm controlled atmosphere, respectful professional setting, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Transfer von Frau M. vom Boden ins Bett",
        body: "Frau M. liegt noch immer neben dem Bett. Keine sichtbare Hüftfraktur-Zeichen (keine Verkürzung, keine Außenrotation), Schmerzen NRS 4/10.\n\n**Hüftfraktur** = ein Bruch am hüftnahen Oberschenkelknochen (proximales Femur, meist Schenkelhals oder pertrochantär) — ca. 140.000-160.000 Fälle/Jahr in Deutschland (Destatis 2023). Klinische Zeichen: Bein-Verkürzung + Außenrotation des Fußes + Belastungsschmerz. **Außenrotation** bedeutet: Der Fuß dreht sich nach außen — bei Frau M. nicht sichtbar (gutes Zeichen).\n\nDu hast Frau Keller dazugeholt. Jetzt: Transfer über Seitlage und Kniestand (kinästhetisches Prinzip — nicht heben, sondern bewegen lassen).\n\nBringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Hüftfraktur", "Außenrotation"],
      },
      contentB1: {
        title: "Frau M. vom Boden ins Bett",
        body: "Frau M. liegt noch neben dem Bett. Keine sichtbaren Zeichen für einen Hüftbruch.\n\n**Hüftfraktur** = ein Bruch am Knochen oben am Oberschenkel, nahe der Hüfte. Häufig bei alten Menschen mit Osteoporose. Zeichen: Bein ist kürzer, Fuß dreht nach außen, starke Schmerzen beim Stehen. **Außenrotation** = der Fuß dreht sich nach außen. Bei Frau M. ist das NICHT zu sehen — gutes Zeichen.\n\nSchmerzen: 4 von 10. Frau Keller ist da.\n\nJetzt bringst du sie ins Bett — nicht heben, sondern führen (Kinästhetik). Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Hüftfraktur", "Außenrotation"],
      },
      question: {
        fragetext: "Sortiere die Transfer-Schritte in die richtige Reihenfolge.",
        sortItems: [
          "Kurzes Assessment Wirbelsäule/Hüfte — keine Fraktur-Zeichen?",
          "Frau M. informieren, was jetzt passiert",
          "Frau Keller dazuholen für 2-Personen-Transfer",
          "Kinästhetischer Transfer über Seitlage und Kniestand (Bewegung führen, nicht heben)",
          "Im Bett: Lagerung prüfen, Schmerz-Reassessment",
        ],
      },
    },

    // Step 4.2 — Freetext (kurz, SBAR)
    {
      stepId: "ce02-frau-m-dur-02-arzt-sbar",
      phase: 4,
      stepType: "freetext",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022", "SBAR-Standard"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-frau-m-dur-sbar",
      tag: "pflege",
      transition: "Arzt informiert. Bevor du Frau M. mobilisierst: Material vorbereiten.",
      contentC1: {
        title: "SBAR-Anruf beim diensthabenden Arzt",
        body: "Frau M. ist im Bett, Vitalzeichen stabil, Schmerz NRS 4 in linker Hüfte. Du rufst jetzt den diensthabenden Arzt an.\n\nFormuliere in 2-3 Sätzen die Situation in SBAR-Struktur. Die KI prüft, ob alle 4 Elemente (S, B, A, R) enthalten sind.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Arzt anrufen — SBAR",
        body: "Frau M. liegt im Bett. Vitalzeichen sind stabil.\n\nSchmerz: 4 von 10 in der Hüfte. Du rufst den Arzt an.\n\nSchreibe in 2-3 Sätzen, was du sagst. Benutze SBAR: Situation, Background (Hintergrund), Assessment (Einschätzung), Recommendation (Empfehlung).",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Schreibe den SBAR-Anruf an den diensthabenden Arzt in 2-3 Sätzen.",
        musterantwort:
          "S — Sturz heute Nacht 02:40 Uhr, Zimmer 14, Frau M. 82. B — Pneumonie Tag 3, Parkinson II, neu Zolpidem seit 2 Tagen, HCT bekannt. A — ansprechbar, orientiert, Hüftschmerz links NRS 4, keine sichtbare Deformität, VZ stabil (RR 135/82, HF 78, SpO2 95 %). R — Bitte Arzt-Visite und Medikamentenreview, speziell Zolpidem.",
        bewertungskriterien: [
          "S (Situation): Sturz, Zeit, Ort, Patientin genannt",
          "B (Background): Hintergrund — Pneumonie, Parkinson, Zolpidem neu",
          "A (Assessment): Einschätzung — ansprechbar/orientiert, Schmerz, Vitalzeichen",
          "R (Recommendation): Empfehlung — Visite + Medikamentenreview Zolpidem",
        ],
        satzanfaengeB1: [
          "Situation: Um [Uhrzeit] ist Frau M. gestürzt …",
          "Hintergrund: Sie ist im Krankenhaus wegen …",
          "Einschätzung: Sie ist wach und orientiert, hat …",
          "Empfehlung: Bitte kommen Sie zur Visite und …",
        ],
      },
    },

    // ───── Inline-Wissen: Trochanter major ─────
    // Der Begriff wird im nachfolgenden Pflegewagen-Step im Kontext der
    // Mobilisation verwendet. Schüler muss den anatomischen Bezugspunkt kennen.
    {
      stepId: "ce02-frau-m-dur-iw-trochanter-major",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "I Care Anatomie, 2. Aufl. 2020, Thieme",
        "DNQP 2022 — Expertenstandard Sturzprophylaxe in der Pflege",
        "Hoehl/Kullick 2019",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-dur-trochanter-major",
      tag: "anatomie",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["kinästhetik", "mobilisation"],
      transition: "Du weißt jetzt wo der Trochanter major liegt — und warum er bei Frau M. gefährdet ist. Gleich richtest du das Material her.",
      contentC1: {
        title: "Trochanter major — warum dieser Knochenvorsprung bei Stürzen entscheidend ist",
        body: "",
        glossarBegriffe: ["Trochanter major", "Hüftfraktur", "Schenkelhalsfraktur"],
      },
      contentB1: {
        title: "Trochanter major — der gefährdete Knochen an der Hüfte",
        body: "",
        glossarBegriffe: ["Trochanter major"],
      },
      inlineWissen: {
        bausteinRef: "trochanter-major",
        storyAufhaenger:
          "Frau M. hat Schmerzen in der linken Hüfte — NRS 4 bei Bewegung. Keine sichtbare Verkürzung, keine Außenrotation. Aber bei Osteoporose (T-Wert -3,1) ist der **Trochanter major** der Knochen, der bei einem Sturz als erstes aufprallt — und am häufigsten bricht.",
        storyAufhaengerB1:
          "Frau M. hat Hüftschmerzen links. Bei ihren schwachen Knochen (Osteoporose) ist ein bestimmter Knochen an der Hüfte besonders gefährdet: der **Trochanter major**.",
        kerntext:
          "Der **Trochanter major** ist der große Knochenvorsprung an der Außenseite des Oberschenkelknochens (Femur), den du bei schlanken Menschen seitlich an der Hüfte tasten kannst.\n\n**Warum ist er sturzrelevant?**\n\n• Bei einem Sturz auf die Seite prallt der **Trochanter major direkt auf den Boden** — er ist kaum durch Muskulatur oder Fettgewebe gepolstert\n\n• Die häufigste Fraktur bei älteren Menschen nach Sturz ist die **proximale Femurfraktur** (Schenkelhalsfraktur oder pertrochantäre Fraktur) — zusammen ca. **140.000–160.000 Fälle pro Jahr** in Deutschland (Destatis 2023, Tendenz steigend)\n\n• Bei Osteoporose (wie bei Frau M., T-Wert -3,1) reicht bereits ein Sturz aus niedriger Höhe (Bettkante) für eine Fraktur\n\n**Klinische Zeichen einer Schenkelhalsfraktur:**\n\n• **Bein-Verkürzung** auf der betroffenen Seite\n\n• **Außenrotation** des Beins (Fuß dreht nach außen)\n\n• **Belastungsschmerz** — Patient kann nicht auf dem Bein stehen\n\n**Bei Frau M.:** Keine Verkürzung, keine Außenrotation — gute Zeichen. Aber: Mikrofrakturen sind klinisch nicht sichtbar. Deshalb: Bildgebung (Röntgen) bei der Arzt-Visite morgen empfehlen.\n\n**Hüftprotektor:** Polster, die den Trochanter major bei einem Sturz abfedern — dazu gleich mehr.",
        kerntextB1:
          "Der **Trochanter major** ist ein Knochen-Vorsprung an der Seite der Hüfte. Du kannst ihn an der Außenseite des Oberschenkels tasten.\n\n**Warum ist er wichtig?**\n\n• Wenn man auf die Seite fällt, trifft man genau diesen Knochen\n\n• Er hat wenig Schutz durch Muskeln oder Fett\n\n• Bei alten Menschen mit Osteoporose kann er leicht brechen (**Schenkelhalsfraktur**) — ca. 140.000–160.000 Mal pro Jahr in Deutschland (Destatis 2023)\n\n**Zeichen für einen Bruch:**\n\n• Das Bein ist kürzer\n\n• Der Fuß dreht nach außen\n\n• Man kann nicht darauf stehen\n\n**Bei Frau M.:** Kein kurzes Bein, kein nach außen gedrehter Fuß — gute Zeichen. Aber: Kleine Brüche sieht man von außen nicht. Deshalb morgen Röntgen empfehlen.\n\n**Hüftprotektor:** Ein Polster, der genau diesen Knochen schützt. Dazu kommt gleich mehr.",
        faustregel:
          "Trochanter major = Aufprallzone bei seitlichem Sturz. Bei Osteoporose reicht ein Sturz aus Betthöhe für eine Fraktur.",
        faustregelB1:
          "Trochanter major = der Knochen, der bei einem Sturz auf die Seite als erstes den Boden trifft.",
        karteikarte: {
          vorderseite:
            "Frau M. (82, Osteoporose T-Wert -3,1) ist auf die linke Seite gestürzt. Was ist der Trochanter major — und warum ist er sturzrelevant?",
          rueckseite:
            "Trochanter major = großer Knochenvorsprung am seitlichen Femur. Aufprallzone bei seitlichem Sturz, kaum gepolstert. Proximale Femurfraktur = häufigste Fraktur bei Älteren (~140.000–160.000/Jahr DE, Destatis 2023). Zeichen: Bein-Verkürzung, Außenrotation, Belastungsschmerz. Bei Frau M.: keine Zeichen, aber Mikrofraktur nicht ausschließbar → Röntgen empfehlen. Hüftprotektor polstert den Trochanter. Faustregel: Trochanter = Aufprallzone.",
        },
      },
    },

    // Step 4.2b — Pflegewagen: Material für die erste Mobilisation vorbereiten
    {
      stepId: "ce02-frau-m-dur-02b-mobi-vorbereitung",
      phase: 4,
      stepType: "pflegewagen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Sturzprophylaxe 2022", "I Care Pflege"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-mobi-vorbereitung",
      tag: "pflege",
      transition: "Material liegt bereit. Die grosse Frage: Toilette oder nicht?",
      contentC1: {
        title: "Material vorbereiten — erste Mobilisation",
        body: "Frau M. liegt jetzt im Bett, der Arzt ist informiert. Bevor du sie zum ersten Aufstehen nach dem Sturz mobilisierst, richtest du dein Material her.\n\n**Mobilisation** = die geführte Aktivierung von Bewegung (Aufstehen, Gehen, Lagewechsel) zur Förderung der Selbstständigkeit und zur Prophylaxe von Komplikationen langer Bettruhe (DNQP Mobilität 2014/2024). Erste Mobilisation nach Sturz = besonders kritisch: nur nach Schellong-Test und mit 2 Personen.\n\nWas brauchst du wirklich — und was nicht?",
        glossarBegriffe: ["Schellong-Test", "Trochanter major", "Orthostase", "Mobilisation"],
      },
      contentB1: {
        title: "Material vorbereiten",
        body: "Frau M. liegt jetzt im Bett. Der Arzt weiß Bescheid. Jetzt bereitest du Marianne vor, dass sie das erste Mal aufsteht.\n\n**Mobilisation** = das geführte Aufstehen, Gehen oder Lagewechsel mit Pflegehilfe. Es hilft Frau M. wieder selbstständig zu werden und beugt Komplikationen langer Bettruhe vor (DNQP).\n\nWas legst du auf den Wagen? Was brauchst du nicht?",
        glossarBegriffe: ["Schellong-Test", "Mobilisation"],
      },
      question: {
        fragetext:
          "Welches Material brauchst du für Mariannes erste Mobilisation? Tippe ein Material an, dann auf den passenden Bereich.",
        pflegewagen: {
          fragetext:
            "Welches Material brauchst du für Mariannes erste Mobilisation? Tippe ein Material an, dann auf den passenden Bereich.",
          fragetextB1:
            "Was brauchst du für die erste Mobilisation? Tippe ein Material an. Dann tippe auf den richtigen Bereich.",
          zonen: [
            {
              id: "wagen",
              label: "Mobilisations-Wagen",
              labelB1: "Auf den Wagen",
              beschreibung: "Was du JETZT für Marianne brauchst",
              beschreibungB1: "Was du jetzt brauchst",
              variant: "primary",
            },
            {
              id: "weglegen",
              label: "Brauche ich jetzt nicht",
              labelB1: "Brauche ich nicht",
              beschreibung: "Gehört nicht zur Mobilisation",
              beschreibungB1: "Nicht für jetzt",
              variant: "discard",
            },
          ],
          items: [
            {
              id: "socken",
              label: "Antirutsch-Socken",
              labelB1: "Anti-Rutsch-Socken",
              icon: "Footprints",
              korrekteZoneId: "wagen",
              erklaerung:
                "Schützen vor Ausrutschen auf glattem Linoleum — Standard bei jedem Mobilisations-Versuch nach Sturz (DNQP).",
              erklaerungB1:
                "Sie schützen vor dem Ausrutschen. Das ist wichtig nach einem Sturz.",
            },
            {
              id: "hüftprotektor",
              label: "Hüftprotektor",
              labelB1: "Hüft-Schutz",
              icon: "ShieldCheck",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Im Akut-Setting nach Sturz nicht primär — die Indikation muss erst geprüft werden (Akzeptanz, Hauttoleranz, Gangbild). Das wird später in Ruhe besprochen, nicht spontan beim ersten Aufstehen. Siehe MC-Step im Anschluss.",
              erklaerungB1:
                "Jetzt nicht. Erst muss man prüfen, ob Frau M. das gut findet, ob die Haut den Schutz verträgt und wie sie geht. Das macht ihr später in Ruhe.",
            },
            {
              id: "rrmanschette",
              label: "Blutdruckmanschette",
              labelB1: "Blutdruck-Manschette",
              icon: "Gauge",
              korrekteZoneId: "wagen",
              erklaerung:
                "Schellong-Test vor dem Aufstehen: messen im Liegen, im Sitzen, im Stehen. Orthostase ist die häufigste Sturzursache bei älteren Menschen unter Z-Substanzen.",
              erklaerungB1:
                "Du misst den Blutdruck im Liegen, im Sitzen, im Stehen. So findest du heraus, ob der Kreislauf stabil ist.",
            },
            {
              id: "rufknopf",
              label: "Notrufkabel in Reichweite",
              labelB1: "Notruf-Kabel",
              icon: "BellRing",
              korrekteZoneId: "wagen",
              erklaerung:
                "Marianne muss jederzeit Hilfe rufen können — auch wenn du den Raum kurz verlässt, um etwas zu holen.",
              erklaerungB1:
                "Marianne muss immer Hilfe rufen können. Das Kabel ist wichtig.",
            },
            {
              id: "wasser",
              label: "Trinkglas Wasser",
              labelB1: "Glas Wasser",
              icon: "GlassWater",
              korrekteZoneId: "wagen",
              erklaerung:
                "Dehydratation verstärkt Orthostase. Vor und nach dem Aufstehen trinken stabilisiert den Kreislauf.",
              erklaerungB1:
                "Wasser hilft dem Kreislauf. Marianne trinkt vor und nach dem Aufstehen.",
            },
            {
              id: "brille",
              label: "Brille",
              labelB1: "Brille",
              icon: "Glasses",
              korrekteZoneId: "wagen",
              erklaerung:
                "Marianne hat Katarakt. Ohne Brille verschlechtert sich die Tiefenwahrnehmung — das Sturzrisiko steigt deutlich.",
              erklaerungB1:
                "Marianne sieht ohne Brille schlecht. Sie braucht die Brille zum sicheren Aufstehen.",
            },
            {
              id: "buch",
              label: "Buch",
              labelB1: "Buch",
              icon: "Book",
              korrekteZoneId: null,
              erklaerung:
                "Das Buch ist für die Pause später — bei der Mobilisation lenkt es nur ab.",
              erklaerungB1:
                "Das Buch ist für später. Jetzt nicht wichtig.",
            },
            {
              id: "spray",
              label: "Putzspray",
              labelB1: "Putz-Spray",
              icon: "SprayCan",
              korrekteZoneId: null,
              erklaerung:
                "Reinigung gehört nicht zur Mobilisationsvorbereitung. Anderer Arbeitsbereich, andere Zeit.",
              erklaerungB1:
                "Putzen machst du jetzt nicht. Das ist eine andere Aufgabe.",
            },
            {
              id: "schere",
              label: "Verbandschere",
              labelB1: "Verband-Schere",
              icon: "Scissors",
              korrekteZoneId: null,
              erklaerung:
                "Frau M. hat keine offene Wunde, die einen Verbandwechsel braucht. Die Schere wäre für andere Patient:innen.",
              erklaerungB1:
                "Marianne hat keine Wunde. Die Schere brauchst du nicht.",
            },
          ],
          begruendung:
            "Sturzprophylaxe nach Sturz folgt einem klaren Standard (DNQP): Sicherheit zuerst (Antirutsch-Socken, Brille, Notruf), Kreislauf-Stabilisierung (Schellong-Test, Wasser). Frakturschutz wie der Hüftprotektor wird nicht spontan beim ersten Aufstehen eingeführt — die Indikation klärt ihr später in Ruhe (siehe MC-Step im Anschluss).",
          begruendungB1:
            "Nach einem Sturz brauchst du jetzt: Schutz (Socken, Brille), Sicherheit (Notruf), Kreislauf-Hilfe (Blutdruck, Wasser). Den Hüft-Schutz besprichst du später in Ruhe — nicht jetzt beim ersten Aufstehen.",
        },
      },
    },

    // Step 4.3 — Branching (GROSS, 3 Pfade): Mobilisation-Hauptbranching
    {
      stepId: "ce02-frau-m-dur-03-mobilisation-hauptbranching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-dur-mobilisation-haupt",
      tag: "pflege",
      transition: "Entschieden. Jetzt am Bettrand: reden.",
      contentC1: {
        title: "HAUPT-BRANCHING: Mobilisation zur Toilette?",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. ist zurück im Bett. Schmerz NRS 4/10. Sie wendet sich zu dir und sagt:\n\n> \"Ich muss wirklich dringend zur Toilette. Ich halte das nicht mehr.\"\n\nEs ist 03:30 Uhr. Was tust du? Hier gibt es drei realistische Optionen — deine Wahl prägt die nächsten Schritte.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "WICHTIGE ENTSCHEIDUNG: Zur Toilette?",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. ist im Bett. Schmerz: 4 von 10. Sie sagt:\n\n> \"Ich muss wirklich zur Toilette. Ich kann nicht mehr warten.\"\n\nEs ist 03:30 Uhr. Was tust du? Drei Möglichkeiten. Welche wählst du?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wie reagierst du auf Frau M.s Wunsch zur Toilette?",
        branchingOptions: [
          {
            text: "Ich hole den Toilettenstuhl ans Bett, mache 2-Personen-Transfer mit Frau Keller und bleibe bei Frau M., bis sie fertig ist.",
            feedback:
              "Perfekt. Du respektierst ihre Würde (keine Bettpfanne für eine orientierte Frau), gibst ihrem Bedürfnis nach (akut, kein Aufschieben), sicherst den Transfer (2 Personen nach frischem Sturz), und bleibst präsent (Sturz-Prävention + Beruhigung). Das ist der richtige Pfad. Als Nächstes erlebst du das Dialog-Gespräch am Bettrand mit Frau M.'s Parkinson-Hinweis.",
            feedbackB1:
              "Perfekt. Du denkst an alles: Würde (kein Bettpfanne), akutes Bedürfnis (jetzt gehen), Sicherheit (2 Personen nach dem Sturz), Frau M. nicht allein lassen. Das ist richtig. Jetzt geht es zum Dialog am Bettrand.",
            isCorrect: true,
          },
          {
            text: "Ich gebe ihr die Bettpfanne, das ist sicherer.",
            feedback:
              "Gut gemeint, aber problematisch. Frau M. ist eine orientierte, ehemals selbstständige Frau. Eine Bettpfanne in dieser Situation wäre eine **Entwürdigung**, die sie noch tiefer in die Scham treibt ('jetzt werde ich wie ein Säugling behandelt'). Fachlich: Sicherheit ist wichtig, aber nicht um den Preis der Würde. Der Toilettenstuhl + 2-Personen-Transfer ist beides: sicher UND würdevoll. Überdenke deine Wahl.",
            feedbackB1:
              "Gut gemeint, aber nicht gut. Frau M. ist wach und war zuhause selbstständig. Eine Bettpfanne wäre für sie peinlich und entwürdigend. Fachlich: Sicher sein ist wichtig — aber nicht um den Preis ihrer Würde. Besser: Toilettenstuhl + 2 Personen. Das ist beides — sicher UND würdevoll.",
            isCorrect: false,
          },
          {
            text: "Sie soll warten, bis morgen früh die Physio kommt.",
            feedback:
              "Das geht nicht. Drei Probleme: (1) Würde — Frau M. hat akutes Bedürfnis, Warten ist respektlos. (2) Fachlich — Harnverhalt über Stunden kann Harnwegsinfekt fördern (bei ohnehin pneumonie-belasteter Immunlage gefährlich). (3) Zeitrahmen — Physio kommt erst ab 8 Uhr, das sind 4,5 Stunden. Als Nachtdienst-Pflege musst DU jetzt eine Lösung finden. Der richtige Weg: Toilettenstuhl + 2-Personen-Transfer.",
            feedbackB1:
              "Das geht nicht. Drei Gründe: (1) Würde — Frau M. muss jetzt. Warten ist respektlos. (2) Fachlich — wenn sie den Urin zurückhält, kann eine Blasenentzündung kommen. Sie hat schon Pneumonie. (3) Zeit — Physio kommt erst um 8 Uhr, das sind 4,5 Stunden. Du musst jetzt eine Lösung finden. Richtig: Toilettenstuhl + 2 Personen.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.4 — Dialog (4 Phasen): Mobilisation
    {
      stepId: "ce02-frau-m-dur-04-dialog-mobilisation",
      phase: 4,
      stepType: "dialog",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-dur-dialog-mobilisation",
      tag: "pflege",
      transition: "Frau M. wird schwindelig. Was tust du?",
      contentC1: {
        title: "Gespräch am Bettrand",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt am Bettrand, Füße auf dem Boden. Du hast den Schellong-Test abgewartet: RR im Liegen 138/82, dann mindestens eine Minute Sitzen mit Beinen unten — RR im Sitzen 132/80, kein Schwindel. Kreislauf stabil, Aufstehen jetzt vertretbar. Frau Keller steht bereit mit dem Toilettenstuhl. Frau M. sagt leise:\n\n> \"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als gehörten sie mir nicht ganz. Wenn ich kurz warte, wird es besser — das kenne ich so vom Parkinson, das ist normal.\"",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Reden am Bettrand",
        // FIX (walkthrough B-14): Markdown-Underscores entfernt.
        body: "Frau M. sitzt auf der Bettkante. Füße am Boden. Du hast den Schellong-Test gemacht: Blutdruck im Liegen 138/82, im Sitzen (nach 1 Minute) 132/80. Der Kreislauf ist stabil. Sie kann sicher aufstehen. Frau Keller steht bereit mit dem Toilettenstuhl. Frau M. sagt leise:\n\n> \"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als wären sie nicht meine. Wenn ich warte, wird es besser — das kenne ich vom Parkinson, das ist normal.\"",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Wähle deine Antwort und dein Verhalten.",
        patientName: "Frau M.",
        dialogPhases: [
          {
            context:
              "Du nimmst wahr, dass Frau M. gerade etwas Wichtiges sagt.\n\n\"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als gehörten sie mir nicht ganz.\"",
            contextB1:
              "Du hörst: Frau M. sagt etwas Wichtiges.\n\n\"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als wären sie nicht meine.\"",
            speaker: "Du",
            options: [
              {
                text: "\"Das machen wir, Frau M. Nehmen Sie sich die Zeit, die Sie brauchen. Ich warte hier mit Ihnen.\"",
                textB1:
                  "\"Natürlich, Frau M. Nehmen Sie sich Zeit. Ich warte bei Ihnen.\"",
                patientResponse:
                  "Frau M. atmet tief ein und aus. \"Danke. Richard, mein Mann, hatte das auch so gesagt — Zeit lassen hilft.\"",
                patientResponseB1:
                  "Frau M. atmet tief. \"Danke. Mein Mann sagte immer: Zeit lassen hilft.\"",
                score: 3,
                feedback:
                  "Ideal. Validierend, präsent, ohne Zeitdruck. Frau M. fühlt sich sicher. Der Satz 'Richard, mein Mann' zeigt dir: Sie öffnet sich. Solche Momente schaffen Vertrauen, das du in den nächsten Stunden brauchst.",
                feedbackB1:
                  "Perfekt. Du gibst ihr Zeit. Du bist da. Frau M. fühlt sich sicher. Sie spricht sogar über ihren Mann — das heißt: Sie vertraut dir jetzt mehr.",
              },
              {
                text: "\"Wir müssen aber auch weiterkommen — sonst dauert das bis morgen früh.\"",
                textB1:
                  "\"Wir müssen auch weitermachen, sonst dauert es bis morgen.\"",
                patientResponse:
                  "Frau M. versteift sich. \"Natürlich. Ich versuche mein Bestes.\"",
                patientResponseB1:
                  "Frau M. wird steif. \"Natürlich. Ich gebe mir Mühe.\"",
                score: 1,
                feedback:
                  "Zeitdruck ist in dieser Situation destruktiv. Frau M. spürt: Sie macht Umstände. Sie versteift sich, was orthostatische Dysregulation verschlimmern kann (Schwindel beim Aufstehen). Gerade jetzt braucht sie Raum, nicht Tempo.",
                feedbackB1:
                  "Du hast die Situation als Zeitfrage erkannt — das ist nachvollziehbar. Aber Zeitdruck ist hier trotzdem falsch, denn Frau M. denkt: 'Ich mache Umstände.' Sie wird angespannt, weil sie sich als Last fühlt. Das macht das Aufstehen gefährlicher, denn Anspannung verstärkt orthostatischen Schwindel. Stattdessen: Gib ihr Raum und Ruhe — die zwei Minuten sind investierte Sicherheit, nicht verlorene Zeit. Beim nächsten Mal: Sage 'Nehmen Sie sich die Zeit, die Sie brauchen.'",
              },
              {
                text: "\"Soll ich Ihnen die Beine etwas massieren, dann geht es schneller?\"",
                textB1:
                  "\"Soll ich Ihnen die Beine massieren, dann geht es schneller?\"",
                patientResponse:
                  "Frau M. lächelt höflich. \"Das ist nett, aber nein danke. Warten reicht.\"",
                patientResponseB1:
                  "Frau M. lächelt höflich. \"Das ist lieb, aber nein danke. Warten ist gut.\"",
                score: 2,
                feedback:
                  "Gut gemeint, aber übereifrig. Frau M. hat dir gerade gesagt, dass sie Zeit braucht (Parkinson-bedingt). Eine Massage ändert das nicht und könnte als Bevormundung wirken. Besser: Einfach da sein, Ruhe aushalten.",
                feedbackB1:
                  "Lieb gemeint, aber zu viel. Frau M. hat gesagt: Warten hilft. Massage bringt nichts und kann bevormundend wirken. Besser: Einfach da sein, die Stille aushalten.",
              },
            ],
          },
          {
            context:
              "Nach 2 Minuten Stille sagt Frau M. leise: 'Jetzt geht es.' Wie gehst du weiter?",
            contextB1:
              "Nach 2 Minuten Stille sagt Frau M.: 'Jetzt geht es.' Wie machst du weiter?",
            speaker: "Du",
            options: [
              {
                text: "\"Perfekt. Ich stehe neben Ihnen, Frau Keller auf der anderen Seite. Wir führen die Bewegung, Sie sagen das Tempo vor.\"",
                textB1:
                  "\"Perfekt. Ich stehe neben Ihnen, Frau Keller auf der anderen Seite. Wir helfen, Sie bestimmen das Tempo.\"",
                patientResponse:
                  "Frau M. nickt fest. \"Ja. Drei, zwei, eins.\" — sie steht auf.",
                patientResponseB1:
                  "Frau M. nickt fest. \"Drei, zwei, eins.\" — sie steht auf.",
                score: 3,
                feedback:
                  "Optimal. 2-Personen-Transfer mit klarer Rollenverteilung. Wichtig: 'Sie sagen das Tempo vor' — das gibt Frau M. die Kontrolle zurück, die sie nach dem Sturz verloren hat. Kinästhetische Prinzipien werden eingehalten.",
                feedbackB1:
                  "Sehr gut. 2 Personen zum Helfen. Klare Rollen. Wichtig: 'Sie bestimmen das Tempo.' Das gibt Frau M. die Kontrolle. Nach dem Sturz hat sie das Gefühl: Alles passiert mit ihr, nicht durch sie. Du gibst ihr die Kontrolle zurück.",
              },
              {
                text: "\"Gut — ich nehme Sie unter den Achseln und helfe Ihnen hoch, dann gehen wir langsam.\"",
                textB1:
                  "\"Gut — ich nehme Sie unter den Achseln und helfe Ihnen hoch. Dann gehen wir langsam.\"",
                patientResponse:
                  "Frau M.: \"Oh — äh, ja…\"",
                patientResponseB1:
                  "Frau M.: \"Oh — ja…\"",
                score: 1,
                feedback:
                  "Du hast erkannt, dass Frau M. Unterstützung beim Aufstehen braucht — das ist richtig gedacht. Allerdings ist 'unter den Achseln nehmen' problematisch, weil es kinästhetisch falsch ist: Du hebelst statt Bewegung zu führen, dein Rücken wird belastet und Frau M.s Schultergelenk ist gefährdet (Subluxationsrisiko bei Osteoporose). Außerdem entmachtet es Frau M., denn sie wird zum Objekt und verliert die Kontrolle über ihr eigenes Tempo. Stattdessen (Hatch/Maietta): Frau M. macht die Bewegung selbst, du sicherst seitlich am Becken/Rumpf, Frau Keller auf der anderen Seite. Beim nächsten Mal: Hand ans Becken, nicht unter die Achseln.",
                feedbackB1:
                  // FIX (walkthrough B-08): Sandwich-Prinzip — Loben vor Korrigieren.
                  "Du willst Frau M. helfen — das ist richtig. Aber 'Unter den Achseln' passt hier nicht. Erstens: Dein Rücken leidet. Zweitens: Frau M.s Schulter kann verletzt werden (sie ist 82 mit Osteoporose). Drittens: Sie wird zum Objekt, verliert die Kontrolle. Besser: Sie macht die Bewegung selbst, du und Frau Keller sichern seitlich. Du bist nah dran!",
              },
            ],
          },
          {
            context:
              "Frau M. steht sicher, du und Frau Keller stützen. Sie setzt sich auf den Toilettenstuhl. Nach 2 Minuten ist sie fertig. Transfer zurück ins Bett. Sie schaut dich an.",
            contextB1:
              "Frau M. steht sicher. Du und Frau Keller stützen. Sie geht zum Toilettenstuhl. Danach zurück ins Bett. Sie schaut dich an.",
            speaker: "Frau M.",
            options: [
              {
                text: "\"Das war weniger schlimm, als ich dachte. Danke, dass Sie das so ruhig gemacht haben.\"",
                textB1:
                  "\"Das war nicht so schlimm wie ich dachte. Danke, dass Sie ruhig waren.\"",
                patientResponse: "(Frau M. ist sichtlich erleichtert.)",
                patientResponseB1: "(Frau M. ist erleichtert.)",
                score: 3,
                feedback:
                  "Das ist der Kernmoment. Frau M. hat einen ersten Mini-Erfolg gegen die Post-Fall-Angst erlebt. Diesen Moment musst du jetzt gleich in Worte fassen (nächster Dialog-Schritt).",
                feedbackB1:
                  "Das ist ein wichtiger Moment. Frau M. hat einen kleinen Erfolg. Sie hat die Angst etwas besiegt. Halte das fest — erzähle es ihr später.",
              },
              {
                text: "\"Bitte sagen Sie niemandem, dass ich so umständlich bin.\"",
                textB1:
                  "\"Bitte sagen Sie niemandem, dass ich so umständlich bin.\"",
                patientResponse: "(Frau M. schaut beschämt.)",
                patientResponseB1: "(Frau M. schaut beschämt.)",
                score: 1,
                feedback:
                  "Wichtiger Moment. Frau M. zeigt offen ihre Scham — und zeigt damit Vertrauen zu dir. Die fachlich richtige Reaktion ist sofortige Validierung: 'Sie sind nicht umständlich, Frau M. Sie sind eine 82-jährige Frau, die nach einem Sturz das erste Mal aufsteht — und Sie machen das sehr gut.' Die Aussage hat zwei Teile: 1. Beschämung explizit zurückweisen ('nicht umständlich'). 2. Realität benennen (Sturz + Alter + erstmaliges Aufstehen). Damit nimmst du der Scham die Grundlage.",
                feedbackB1:
                  "Wichtig. Frau M. schämt sich. Sie zeigt dir das offen — sie vertraut dir. Was du jetzt sagst: 'Sie sind nicht umständlich, Frau M. Sie sind 82, Sie sind gestürzt, und Sie stehen das erste Mal wieder auf. Sie machen das sehr gut.' Zwei Teile: 1. 'Nicht umständlich' (Scham widersprechen). 2. Realität benennen (Alter, Sturz, erstes Aufstehen). So nimmst du der Scham den Boden.",
              },
            ],
          },
          {
            context:
              "Frau M. ist zurück im Bett. Wie schließt du den Transfer ab?",
            contextB1: "Frau M. liegt wieder im Bett. Wie endest du?",
            speaker: "Du",
            options: [
              {
                text: "\"Frau M., ich will Ihnen kurz sagen: Das haben Sie richtig gut gemacht. Drei Minuten warten, ruhig aufgestanden, Tempo selbst bestimmt — genau so macht man das. Erzählen Sie mir das morgen früh nochmal, ja?\"",
                textB1:
                  "\"Frau M., das haben Sie sehr gut gemacht. Warten, ruhig aufstehen, Tempo selbst bestimmen — so ist es richtig. Erzählen Sie mir das morgen nochmal, ja?\"",
                patientResponse:
                  "Frau M. sieht dich an. Ihre Augen werden feucht. \"Das werde ich. Danke.\"",
                patientResponseB1:
                  "Frau M. schaut dich an. Tränen kommen. \"Das mache ich. Danke.\"",
                score: 3,
                feedback:
                  "Hervorragend. Positive Verstärkung, konkret (nicht 'gut gemacht' allgemein, sondern die 3 richtigen Dinge benannt), und Anker für morgen ('erzählen Sie mir das nochmal'). Das wirkt gegen das Post-Fall-Syndrom — ein konkret erinnerter Erfolg.",
                feedbackB1:
                  "Super. Lob ist konkret (3 Sachen benannt, nicht nur 'gut'). Und: 'Erzählen Sie morgen nochmal' macht einen Anker für morgen. Das ist wichtig gegen die Post-Fall-Angst — sie erinnert sich an einen Erfolg.",
              },
              {
                text: "\"So, geschafft — schlafen Sie gut.\"",
                textB1: "\"Geschafft — schlafen Sie gut.\"",
                patientResponse: "Frau M. nickt kurz.",
                patientResponseB1: "Frau M. nickt.",
                score: 1,
                feedback:
                  "Du lässt eine wichtige Chance ungenutzt. Ein strukturierter Abschluss mit positiver Verstärkung hilft gegen das Post-Fall-Syndrom. Beim nächsten Mal: Erfolge benennen.",
                feedbackB1:
                  "Chance verpasst. Mit Lob kann man die Angst kleiner machen. Nächstes Mal: Sag konkret, was sie gut gemacht hat.",
              },
            ],
          },
        ],
      },
    },

    // Step 4.5 — Branching (Klein, 2 Pfade): Balance-Check
    {
      stepId: "ce02-frau-m-dur-05-balance-check-kleinbranching",
      phase: 4,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-frau-m-dur-balance",
      tag: "pflege",
      transition: "Der Schwindel ist vorbei. Aber die Angst nicht.",
      contentC1: {
        title: "Schwindel beim Aufstehen — was tust du?",
        body: "Anders als im Hauptbranching: Hier lagst du mit Pfad A richtig und Frau M. ist bereits unterwegs zum Toilettenstuhl. Beim zweiten Schritt vom Bett weg wird sie plötzlich kurz schwindelig und greift nach deinem Arm.\n\nIhre Knie zittern.",
        glossarBegriffe: ["Orthostatische Dysregulation"],
      },
      contentB1: {
        title: "Schwindel beim Aufstehen",
        body: "Beim zweiten Schritt zum Toilettenstuhl wird Frau M. schwindelig. Sie greift deinen Arm. Ihre Knie zittern. Was machst du?",
        glossarBegriffe: ["Orthostatische Dysregulation"],
      },
      question: {
        fragetext: "Wie reagierst du auf Frau M.s Schwindel?",
        branchingOptions: [
          {
            text: "Ich setze sie sofort wieder hin (zurück auf die Bettkante), hole Frau Keller dazu und mache ein Reassessment.",
            feedback:
              "Genau richtig. Bei Schwindel NACH frischem Sturz + Parkinson + Sedierung durch Zolpidem ist Sicherheit die absolute Priorität. Setzen = sicherer Untergrund. Reassessment = Schweregrad prüfen. Frau Keller dazu = 2-Personen-Unterstützung. Mögliche Ursachen: Orthostase (Blutdruckabfall), Restwirkung Zolpidem, Muskelzittern nach Schrecken. Nicht weitergehen!",
            feedbackB1:
              "Richtig. Nach dem Sturz + Parkinson + Zolpidem ist Sicherheit wichtig. Setzen = sicherer. Reassessment = prüfen wie schlimm. Frau Keller dazu = 2 Personen. Mögliche Gründe: Blutdruck fällt, Zolpidem wirkt noch, Muskeln zittern vom Schreck. Nicht weitergehen!",
            isCorrect: true,
          },
          {
            text: "Ich sage ihr, sie soll tief atmen, und wir gehen langsam weiter zum Toilettenstuhl.",
            feedback:
              "Du hast erkannt, dass Frau M. Unterstützung braucht — guter Reflex. Allerdings ist 'weitergehen' bei Schwindel NACH frischem Sturz + Parkinson + Restwirkung Zolpidem keine Option, weil das Sturzrisiko akut ist. Ein zweiter Sturz in derselben Nacht wäre traumatisch (Post-Fall-Syndrom verstärken) und fachlich vermeidbar. Tief atmen hilft bei leichter Nervosität, aber nicht bei echter Orthostase, denn der Blutdruck-Abfall verschwindet dadurch nicht. Stattdessen: Sofort sicheren Untergrund (zurück auf Bettkante), Reassessment, 2. Person dazu. Beim nächsten Mal: Bei Schwindel immer Sicherheit vor Ziel — setzen, prüfen, dann entscheiden.",
            feedbackB1:
              "Du willst Frau M. das Ziel erreichen lassen — das ist verständlich. Aber 'weitergehen' ist hier gefährlich, denn nach Sturz + Parkinson + Zolpidem ist das Sturzrisiko sehr hoch. Ein zweiter Sturz in derselben Nacht wäre schlimm, weil sie dann noch mehr Angst bekommt. Tief atmen hilft bei Nervosität, aber nicht bei echter Orthostase, denn der Blutdruck steigt davon nicht. Stattdessen: Sofort hinsetzen, prüfen, 2. Person holen. Beim nächsten Mal: Bei Schwindel immer zuerst Sicherheit — setzen, dann denken.",
            isCorrect: false,
          },
        ],
      },
    },

    // Step 4.6 — Text (scenario): Beratung gegen Angst
    {
      stepId: "ce02-frau-m-dur-06-beratung-angst",
      phase: 4,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: ["DNQP 2022 Kriterium 2 Information & Beratung"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-frau-m-dur-beratung",
      tag: "pflege",
      transition: "Noch etwas: Hüftprotektor. Sie kennt das Wort nicht.",
      displayFormat: "scenario",
      contentC1: {
        title: "Beratung gegen Sturzangst — 3 Bausteine",
        body: "Nach der Toilette, zurück im Bett. Frau M. ist erleichtert, aber immer noch leicht zittrig. Du setzt dich kurz zu ihr. Jetzt: Beratung gegen die Sturzangst in 3 Bausteinen.\n\n**Baustein 1 — Ursache benennen.** Nicht 'das Alter', sondern konkret: 'Das Zolpidem hat zu stark gewirkt. Ich melde das morgen dem Arzt, dann wird es wahrscheinlich abgesetzt oder getauscht.' Ursache-Aufklärung gibt Kontroll-Gefühl zurück.\n\n**Baustein 2 — Gemeinsamen Plan für morgen.** 'Morgen kommt die Physio vorbei und übt mit Ihnen das sichere Aufstehen. Das werden wir dreimal machen, bevor Sie nach Hause gehen. Dann haben Sie wieder Sicherheit.' Plan = Struktur, Struktur = Kontrolle.\n\n**Baustein 3 — Konkrete Sicherheitsmaßnahmen.** 'Heute Nacht lassen wir das Nachtlicht an. Die Klingel liegt hier, in Ihrer Reichweite. Wenn Sie zur Toilette müssen, drücken Sie — ich komme. Der Toilettenstuhl bleibt neben dem Bett stehen.' Konkrete Sicherheit, die Frau M. sehen und anfassen kann.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
      contentB1: {
        title: "Gegen die Angst — 3 Schritte",
        body: "Frau M. ist zurück im Bett. Sie ist etwas entspannter, aber immer noch zittrig. Du setzt dich zu ihr. Die Beratung hat 3 Teile:\n\n**Teil 1 — Grund erklären.** Nicht 'das Alter'. Sondern konkret: 'Das Zolpidem hat zu stark gewirkt. Morgen sage ich es dem Arzt. Er setzt es wahrscheinlich ab.' Wenn sie die Ursache kennt, fühlt sie sich weniger hilflos.\n\n**Teil 2 — Plan für morgen.** 'Morgen kommt die Physio. Sie üben das Aufstehen. Dreimal, bevor Sie nach Hause gehen. Dann sind Sie wieder sicher.' Ein Plan gibt Struktur. Struktur gibt Kontrolle.\n\n**Teil 3 — Konkrete Sicherheit heute Nacht.** 'Das Nachtlicht bleibt an. Die Klingel liegt hier. Der Toilettenstuhl steht neben dem Bett. Wenn Sie müssen, drücken Sie — ich komme.' Frau M. soll die Sicherheit sehen und anfassen können.",
        glossarBegriffe: ["Post-Fall-Syndrom"],
      },
    },

    // ───── Inline-Wissen: Hüftprotektor ─────
    // Der Begriff wird im nachfolgenden MC-Step verwendet.
    // Schüler muss wissen was ein Hüftprotektor ist, bevor er über die Indikation entscheidet.
    {
      stepId: "ce02-frau-m-dur-iw-hüftprotektor",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2022 — Expertenstandard Sturzprophylaxe in der Pflege",
        "Cochrane Review Santesso et al. 2014 (basierend auf Parker et al. 2006) — Hip protectors for preventing hip fractures in older people",
        "I Care Pflege, 2. Aufl. 2020, Thieme",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-frau-m-dur-hüftprotektor-grundwissen",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["mobilisation"],
      transition: "Du weißt jetzt was ein Hüftprotektor ist und wann er sinnvoll ist. Gleich entscheidest du: Empfiehlst du ihn Frau M. — ja, nein, oder kommt drauf an?",
      contentC1: {
        title: "Hüftprotektor — was ist das und wann hilft er?",
        body: "",
        glossarBegriffe: ["Hüftprotektor", "Trochanter major"],
      },
      contentB1: {
        title: "Hüftprotektor — was ist das?",
        body: "",
        glossarBegriffe: ["Hüftprotektor"],
      },
      inlineWissen: {
        bausteinRef: "hüftprotektor",
        storyAufhaenger:
          "Es ist 04:30 Uhr. Frau M. liegt im Bett, der erste Toilettengang hat geklappt. Du willst mit ihr über einen **Hüftprotektor** sprechen — ein Hilfsmittel, das sie noch nicht kennt. Aber bevor du berätst, musst du selbst wissen: Was ist das genau, und bei wem hilft es wirklich?",
        storyAufhaengerB1:
          "Frau M. liegt im Bett. Du willst mit ihr über einen **Hüftprotektor** sprechen. Sie kennt das Wort nicht. Was ist das — und wem hilft es?",
        kerntext:
          "Ein **Hüftprotektor** ist eine gepolsterte Unterhose mit integrierten Schalen oder Polstern über den Trochanteren major (die seitlichen Knochenvorsprünge am Oberschenkel). Bei einem Sturz auf die Seite absorbiert das Polster die Aufprallenergie und verteilt sie — statt dass der Knochen direkt den Boden trifft.\n\n**Evidenz (Cochrane Review Santesso et al. 2014, basierend auf Parker et al. 2006):**\n\n• **In Pflegeheimen:** Signifikante Reduktion von Hüftfrakturen bei konsequentem Tragen\n\n• **Im häuslichen Setting:** Evidenz schwächer — das Hauptproblem ist **Compliance** (Patienten tragen den Protektor nicht konsequent)\n\n• **Im Akutkrankenhaus:** Keine klare Empfehlung — Aufenthalt zu kurz für Gewöhnung\n\n**Compliance-Probleme (das Haupthindernis):**\n\n• Unbequem unter der Kleidung (Hitze, Druckstellen)\n\n• Schwierig allein anzuziehen (bei eingeschränkter Mobilität)\n\n• Ästhetik — viele Patienten empfinden ihn als stigmatisierend\n\n• Inkontinenz — Wechseln wird aufwändiger\n\n**Indikation nach DNQP 2022:**\n\n• Hochrisiko-Patient (Sturzgeschichte + Osteoporose)\n\n• Besonders: Pflegeheim, ambulant mit wiederholten Stürzen\n\n• Immer: **mit** dem Patienten besprechen, nicht **über** ihn entscheiden\n\n**Bei Frau M.:** Osteoporose T-Wert -3,1 + frischer Sturz = grundsätzlich Indikation. Aber: im Akutkrankenhaus nicht primär sinnvoll (kurzer Aufenthalt, Compliance noch nicht getestet). Für die Entlassung nach Hause mit Tochter besprechen.",
        kerntextB1:
          "Ein **Hüftprotektor** ist eine spezielle Unterhose mit Polstern an der Seite. Die Polster schützen den Knochen an der Hüfte (Trochanter major), wenn man auf die Seite fällt.\n\n**Hilft das wirklich?**\n\n• Im **Pflegeheim:** ja — wenn man ihn regelmäßig trägt\n\n• **Zu Hause:** hilft auch — aber viele tragen ihn nicht regelmäßig\n\n• Im **Krankenhaus:** zu kurze Zeit, um sich daran zu gewöhnen\n\n**Warum tragen viele ihn nicht?**\n\n• Unbequem (warm, drückt)\n\n• Schwer alleine anzuziehen\n\n• Peinlich (sieht man unter der Kleidung)\n\n• Bei Inkontinenz: Wechseln dauert länger\n\n**Wann empfohlen (DNQP 2022)?**\n\n• Hohes Sturzrisiko + Osteoporose\n\n• Vor allem: Pflegeheim oder zuhause mit vielen Stürzen\n\n• Immer: **mit** der Patientin besprechen\n\n**Bei Frau M.:** Osteoporose + Sturz = grundsätzlich ja. Aber: jetzt im Krankenhaus nicht sinnvoll. Für zuhause mit ihrer Tochter besprechen.",
        faustregel:
          "Hüftprotektor polstert den Trochanter major bei Seitensturz. Wirksam bei Compliance — und die ist das Hauptproblem.",
        faustregelB1:
          "Hüftprotektor = Polster an der Hüfte. Schützt bei Sturz. Aber: nur wenn man ihn auch trägt.",
        karteikarte: {
          vorderseite:
            "Frau M. (82, Osteoporose, frischer Sturz) — was ist ein Hüftprotektor, und würdest du ihn im Akutkrankenhaus empfehlen?",
          rueckseite:
            "Hüftprotektor = gepolsterte Unterhose, schützt Trochanter major bei Seitensturz. Evidenz (Cochrane Santesso et al. 2014): signifikant in Pflegeheimen, schwächer ambulant, keine Empfehlung Akutkrankenhaus. Hauptproblem: Compliance (Komfort, Ästhetik, Inkontinenz). Bei Frau M.: Indikation ja (Osteoporose + Sturz), aber akut nicht sinnvoll — für Entlassung mit Tochter besprechen. Faustregel: Wirksam wenn getragen — Compliance ist der Schlüssel.",
        },
      },
    },

    // Step 4.7 — MC (fallstrick): Hüftprotektor
    {
      stepId: "ce02-frau-m-dur-07-hüftprotektor-option",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2022"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-frau-m-dur-hüftprotektor",
      tag: "pflege",
      contentC1: {
        title: "Hüftprotektor für Frau M.?",
        body: "Frau M. hat Osteoporose (T-Wert -3,1) und gerade einen Sturz hinter sich. Würdest du ihr für den Rest des Aufenthalts einen Hüftprotektor empfehlen?\n\nDas ist eine nuancierte Frage — nicht alle 'Ja'-Antworten sind gleich richtig.",
        glossarBegriffe: ["Hüftprotektor"],
      },
      contentB1: {
        title: "Hüftprotektor für Frau M.?",
        body: "Frau M. hat schwache Knochen (Osteoporose) und ist gerade gestürzt. Soll sie einen Hüftprotektor tragen? Die Antwort ist nicht einfach Ja oder Nein.",
        glossarBegriffe: ["Hüftprotektor"],
      },
      question: {
        fragetext:
          "Würdest du Frau M. für den Rest des Aufenthalts einen Hüftprotektor empfehlen?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ja, grundsätzlich für alle über 80.",
            isCorrect: false,
            explanation:
              "Nicht ganz — das ist eine Generalisierung. Hüftprotektoren sind keine Universal-Lösung für alle Älteren. Empfohlen werden sie bei **Hochrisiko-Patienten** (Sturzrisiko + Osteoporose + oft Demenz/Pflegeheim). Frau M. hat zwar Osteoporose — aber sie ist akut im Krankenhaus, nicht in Langzeitpflege. Außerdem: Compliance-Problem (Inkontinenz, Komfort).",
            explanationB1:
              "Nicht ganz — das ist zu allgemein. Hüftprotektoren sind nicht für alle Alten. Sie sind für Menschen mit sehr hohem Risiko: Sturzgefahr + Osteoporose + oft Demenz/Pflegeheim. Frau M. hat Osteoporose — aber sie ist im Krankenhaus, nicht in Langzeitpflege. Und: Viele tragen sie nicht regelmäßig.",
          },
          {
            text: "Nein, Hüftprotektoren sind nach einem Sturz kontraindiziert.",
            isCorrect: false,
            explanation:
              "Nein, das ist falsch. Hüftprotektoren haben keine Kontraindikation nach Sturz — im Gegenteil, bei Hochrisiko-Patienten werden sie oft erst nach einem Sturz-Ereignis verordnet (Sekundärprophylaxe). Das Problem ist die Indikation und Compliance, nicht eine Kontraindikation.",
            explanationB1:
              "Nein, das stimmt nicht. Hüftprotektoren sind nach Stürzen nicht verboten. Oft werden sie erst nach einem Sturz empfohlen, um weitere Brüche zu verhindern. Das Problem ist die Entscheidung: Wem nützt es?",
          },
          {
            text: "Bei diesem akuten Aufenthalt eher nicht — Compliance schlecht, Fokus auf Medikamentenreview + Umgebung; für Entlassung nach Hause ggf. mit Tochter besprechen.",
            isCorrect: true,
            explanation:
              "Genau — nuancierte, evidenzbasierte Antwort. Im Akut-Setting ist der Nutzen fraglich: Compliance ist bei neuer Versorgung schwer herzustellen, die Hauptrisiken (Zolpidem, Umgebung) werden bereits adressiert. Für **zu Hause** — wo sie allein lebt und weiter stürzen könnte — ist ein Hüftprotektor eine Option, die mit der Tochter (und ggf. Ergotherapie für Gesamt-Hilfsmittel-Beratung) besprochen werden sollte. Das respektiert auch Frau M.s Autonomie.",
            explanationB1:
              "Sehr gut — kluge Antwort. Jetzt im Krankenhaus bringt er wenig: Sie muss erst lernen, ihn zu tragen. Die wichtigeren Sachen (Zolpidem, sichere Umgebung) machen wir schon. Aber: Für **zu Hause** ist es sinnvoll — sie wohnt alleine. Also: Mit ihr und der Tochter besprechen.",
          },
          {
            text: "Nur wenn sie eine Hüftfraktur hätte.",
            isCorrect: false,
            explanation:
              "Nein — logisch falsch. Eine Hüftfraktur wird nicht mit einem Hüftprotektor behandelt (da braucht es OP). Hüftprotektoren sind **präventiv** — sie verhindern Frakturen beim nächsten Sturz, sie behandeln keine bestehenden. Die Indikation ist hochrisiko + osteoporotisch + sturzgefährdet, BEVOR etwas passiert.",
            explanationB1:
              "Nein — das ist falsch. Ein Hüftbruch wird operiert, nicht mit einem Protektor behandelt. Hüftprotektoren sind zum Vorbeugen: Sie schützen beim nächsten Sturz. Sie behandeln nichts.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 45,
};
