// CE-02 Situation Herr Nguyen — Phase 1: Informieren
// Steps: 4 Kern + 3 Optional · Bloom: B2–B3 · Zeit: ~20–30 Min
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-informieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-informieren",
  phase: "informieren",
  titel: "Informieren — Was weiß ich über Herrn Nguyen?",
  titelB1: "Informieren — Was weiß ich?",
  kontext:
    "Es ist 7:45 Uhr. Die Übergabe auf der chirurgischen Station ist gerade abgeschlossen. Frau Santos-Weber hat dich kurz zu Herrn Nguyen gebrieft — aber das war wenig. Du stehst jetzt vor der Pflegedokumentation am Computer und hast 10 Minuten, bevor du das Zimmer betrittst. Herr Nguyen ist 72 Jahre alt. Vier Tage nach der Sigmaresektion bei Kolonkarzinom. Ein endständiges Kolostoma — das heißt: der Dickdarm wird daürhaft über die Bauchdecke ausgeleitet. Das Stoma ist kein Übergangszustand. Es ist sein neüs Körperbild. Was erwartet dich? Die Tochter ist schon da. Die Ehefrau vermutlich auch. Der Beutel muss gewechselt werden. Und Herr Nguyen hat gestern kaum gegessen.",
  kontextB1:
    "Es ist 7:45 Uhr. Die Übergabe ist fertig. Deine Anleiterin sagt: 'Du versorgst heute Herrn Nguyen. Der Stoma-Beutel muss gewechselt werden. Ich bin nebenan. Ruf mich wenn du Hilfe brauchst.' Die Tochter Linh ist schon im Zimmer. Sie übersetzt für ihren Vater. Du hast jetzt 10 Minuten um die Pflegeakte zu lesen.",
  kernSteps: [
    // Step 1.1 — Text (scenario): SBAR-Übergabe lesen
    {
      stepId: "ce02-nguyen-info-01-uebergabe-lesen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      imageAlt:
        "Krankenhauscomputer am frühen Morgen, Pflegekraft liest digitale Patientenakte, gedämpftes Licht auf der chirurgischen Station",
      bildhinweis:
        "Early morning hospital nursing station, nurse reading digital patient record, soft warm light, chirurgical ward, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Die digitale Pflegeakte — Übergabe SBAR",
        body: "7:45 Uhr, Stationscomputer der chirurgischen Station.\n\nDu öffnest die digitale Pflegeakte von Herrn Nguyen. Die Nachtschicht hat eine SBAR-Übergabe hinterlassen: **S**ituation — Tran Nguyen, 72 J., 4. Tag post-OP Sigmaresektion, endständiges Kolostoma. **B**ackground — Mangelernährung (BMI 19, Albumin 28 g/l), Braden 14, Heparin-Prophylaxe läuft, Mobilisation gestern erstmals an Bettkante. **A**ssessment — Stoma aktiv: rosig, ca. 1,5 cm prominent (NS-Befund, dokumentiert 04:30), Output dünnflüssig-gelblich-braun, Beutel halb voll seit gestern Abend, noch nicht gewechselt. Bauchdeckenwunde leicht gerötet. Kaum Nahrungs-Intake seit OP. **R**ecommendation — Beutelwechsel heute Morgen notwendig, Ernährungsstatus evaluieren, erste Mobilisationsübung planen. Tochter Linh anwesend (übersetzt), Ehefrau Mai heute früh angereist. Stomatherapeut Herr Baum kommt um 10 Uhr.",
        fallbezug:
          "Herr Nguyen (72, Kolonkarzinom, 4. Tag post-OP) — fünf Pflegeprobleme gleichzeitig. Du bist Pflegeschüler/in im 3. Ausbildungsdrittel, Frühdienst auf der chirurgischen Station.",
        glossarBegriffe: ["Sigmaresektion", "Kolostoma", "endständig", "SBAR"],
      },
      contentB1: {
        title: "Die Pflegeakte lesen",
        body: "7:45 Uhr, Computer auf der Station.\n\nDu liest die Pflegeakte von Herrn Nguyen. Die Nachtschicht hat folgendes aufgeschrieben: **S** = Herr Nguyen, 72 Jahre, 4 Tage nach der Operation. Er hat ein Stoma (= Öffnung am Bauch). **B** = Er isst fast nichts (BMI 19, Albumin 28 g/l = zu niedrig). Braden-Skala: 14 (= leichtes Druck-Geschwür-Risiko). Heparin-Spritze läuft. **A** = Das Stoma sieht rosig aus, ca. 1,5 cm groß (Befund Nachtschicht). Der Output ist dünn und gelb-braun. Der Stoma-Beutel ist seit gestern Abend halb voll — er wurde nicht mehr gewechselt. Die Bauch-Wunde ist leicht rot. Herr Nguyen isst fast nichts seit der Operation. **R** = Beutel heute Morgen wechseln. Ernährung prüfen. Tochter Linh übersetzt. Stoma-Fachkraft Herr Baum kommt um 10 Uhr.",
        fallbezug:
          "Herr Nguyen, 72 Jahre alt, 4 Tage nach der Operation. Du bist Schüler/in im 3. Ausbildungsjahr. Du arbeitest heute Morgen auf der chirurgischen Station.",
        glossarBegriffe: ["Stoma", "Beutelwechsel", "Braden-Skala", "Albumin"],
      },
    },

    // Step 1.2 — MC (Single-Choice): Diagnose einordnen
    {
      stepId: "ce02-nguyen-info-02-diagnose-einordnen",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-nguyen-info-stoma-arten",
      tag: "krankheitslehre",
      contentC1: {
        title: "Endständiges Kolostoma einordnen",
        body: "Herr Nguyen hat ein endständiges Kolostoma nach Sigmaresektion. Was bedeutet das genau — und was unterscheidet es von anderen Stomaformen?",
        glossarBegriffe: ["endständig", "Kolostoma", "Ileostoma", "Doppelläufig"],
      },
      contentB1: {
        title: "Was ist ein endständiges Kolostoma?",
        body: "Herr Nguyen hat ein Stoma. Es heißt: 'endständiges Kolostoma'. Was bedeutet das?",
        glossarBegriffe: ["Kolostoma", "Ileostoma", "Stoma"],
      },
      question: {
        fragetext:
          "Was bedeutet 'endständiges Kolostoma' im Vergleich zu einem vorübergehenden Stoma?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Das Stoma wird in 6 Monaten rückverlegt.",
            isCorrect: false,
            explanation:
              "Das wäre ein doppelläufiges (temporäres) Stoma — z.B. nach Rektumkarzinom ohne Sphinktererhalt. Bei Herrn Nguyen wurde das Sigma reseziert, der Mastdarm ebenfalls entfernt. Eine Rückverlage ist biologisch nicht möglich. Das endständige Stoma ist daürhaft.",
            explanationB1:
              "Nein — das ist ein anderes Stoma (doppelläufig). Bei Herrn Nguyen wurde das Sigma entfernt. Das Stoma bleibt für immer. Es gibt keine Rück-Operation.",
          },
          {
            text: "Das Stoma ist daürhaft — der Dickdarm wird daürhaft über die Bauchdecke ausgeleitet, eine Rückverlage ist nicht geplant.",
            isCorrect: true,
            explanation:
              "Richtig. 'Endständig' bedeutet: Das Ende des verbliebenen Dickdarms wird durch die Bauchdecke nach außen geführt und vernäht. Der Mastdarm wurde ebenfalls entfernt — eine Rückverlage ist nicht möglich. Herr Nguyen wird das Stoma sein ganzes Leben lang haben. Das ist sein neüs Körperbild.",
            explanationB1:
              "Richtig. 'Endständig' heißt: Das Darm-Ende kommt durch die Bauch-Wand nach draußen. Es bleibt für immer so. Das ist Herrn Nguyens neüs Körperbild.",
          },
          {
            text: "Das Stoma sitzt im Dünndarm (Ileostoma).",
            isCorrect: false,
            explanation:
              "Nein — ein Ileostoma liegt im Dünndarm (Ileum). Ein Kolostoma liegt im Dickdarm (Kolon). Herr Nguyen hat eine Sigmaresektion — Sigma ist der letzte Teil des Dickdarms. Deshalb: Kolostoma, nicht Ileostoma. Wichtiger Unterschied: Ileostoma hat mehr Flüssigkeit und mehr Enzyme → höhere Hautgefährdung.",
            explanationB1:
              "Nein — ein Ileostoma liegt im Dünndarm. Herr Nguyen hat ein Kolostoma — das liegt im Dickdarm. Das ist ein Unterschied. Beim Ileostoma ist der Stuhl flüssiger und aggressiver für die Haut.",
          },
          {
            text: "Das Stoma funktioniert noch nicht, erst ab Tag 7.",
            isCorrect: false,
            explanation:
              "Nicht korrekt. Das Stoma ist bei Herrn Nguyen bereits aktiv — die Übergabe beschreibt dünnflüssig-gelblichen Output. Das ist normal für die frühe Transitphase (Tag 3-7 post-OP). Ab Kostaufbau wird der Stuhl fester.",
            explanationB1:
              "Nicht richtig. Das Stoma von Herrn Nguyen funktioniert bereits — die Pflegeakte sagt: dünnflüssig, gelblich-braun. Das ist normal in den ersten Tagen.",
          },
        ],
      },
    },

    // Step 1.3 — Categorize: 5 Pflegeprobleme erkennen
    {
      stepId: "ce02-nguyen-info-03-5-probleme-sehen",
      phase: 1,
      stepType: "categorize",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP — Expertenstandard Dekubitusprophylaxe, 3. Aktualisierung (2017)",
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020)",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-info-pflegeprobleme",
      tag: "pflege",
      contentC1: {
        title: "Fünf Pflegeproblembereiche gleichzeitig",
        body: "Vor dir liegt eine Liste von Informationen über Herrn Nguyen aus der Pflegeakte. Ordne sie den fünf Pflegeproblembereichen zu, die heute relevant sind.",
        glossarBegriffe: ["Pflegeproblem", "Priorisierung"],
      },
      contentB1: {
        title: "Probleme erkennen und sortieren",
        body: "Vor dir sind Informationen über Herrn Nguyen. Sortiere sie: Welches Problem gehört wohin?",
        glossarBegriffe: ["Stoma", "Ernährung", "Dekubitus", "Thrombose"],
      },
      question: {
        fragetext:
          "Ordne jede Information dem passenden Pflegeproblembereich zu.",
        categories: [
          { name: "Stoma-Versorgung" },
          { name: "Ernährung & Gewicht" },
          { name: "Dekubitus-Prophylaxe" },
          { name: "Thrombose-Prophylaxe" },
          { name: "Psychosoziales & Kulturell" },
        ],
        categoryItems: [
          { text: "Stoma aktiv, Beutel halb voll, Bauchdeckenwunde leicht gerötet", correctCategory: 0 },
          { text: "BMI 19,2 kg/m², Albumin 28 g/l (↓)", correctCategory: 1 },
          { text: "Braden-Skala: 14 Punkte, wenig Unterhautfettgewebe", correctCategory: 2 },
          { text: "Heparin läuft, 4. Tag Bettruhe mit Auflockerung", correctCategory: 3 },
          { text: "Meidet Blickkontakt beim Beutelwechsel, Tochter übersetzt", correctCategory: 4 },
        ],
      },
    },

    // Step 1.4 — Sequencing: Vorbereitung vor Zimmerbetreten
    {
      stepId: "ce02-nguyen-info-04-vorbereitung",
      phase: 1,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-info-vorbereitung",
      tag: "pflege",
      contentC1: {
        title: "Vorbereitung vor dem Zimmerbetreten",
        body: "Bevor du das Zimmer betrittst, gibt es mehrere Schritte, die du jetzt am Computer und am Stationsflur erledigen kannst. Standard nach FG SKM 2023: erst Patientendaten und Tagesplan klären → dann Material vorbereiten → erst dann ins Zimmer gehen. Sortiere in dieser Logik.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was bereitest du vor?",
        body: "Bevor du ins Zimmer gehst — was tust du zürst? Erst Plan und Daten lesen, dann Material vorbereiten. Sortiere in dieser Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Vorbereitungsschritte in die sinnvolle Reihenfolge, bevor du das Zimmer betrittst (FG SKM 2023: Daten → Plan → Material → Patient).",
        sequencing: {
          instruction:
            "Bringe die Schritte in die richtige Reihenfolge: erst Tagesplan/Termine prüfen, dann Patientendaten lesen, dann Begrüßung überlegen, zuletzt Material vorbereiten.",
          items: [
            { id: "s3", label: "Prüfen, ob Stomatherapeut Herr Baum heute bestätigt ist (Uhrzeit)" },
            { id: "s1", label: "Ernährungsprotokoll der letzten 24h in der Akte anschaün" },
            { id: "s4", label: "Kurz überlegen, wie du Herrn Nguyen begrüßt (Tochter als Übersetzerin)" },
            { id: "s2", label: "Beutelwechsel-Utensilien vorbereiten und bereitlegen" },
            { id: "s5", label: "Intimpflege-Set für Ganzkörperpflege bereitstellen" },
          ],
        },
      },
    },

    // Step 1.4b — InlineWissen: Rollenkonflikt
    // Position: VOR Step 1.5 (TrueFalse: Dolmetscher-Frage)
    // Grund: Begriff "Rollenkonflikt" wird in Step 1.5 verwendet — muss vorher erklärt sein
    {
      stepId: "ce02-nguyen-info-iw-rollenkonflikt",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)", "Schulz von Thun F. (2019): Miteinander reden, Bd. 1–3"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-info-rollenkonflikt",
      tag: "pflege",
      themaPrimaer: "kommunikation",
      themenSekundaer: ["pflegeprozess"],
      transition:
        "Rollenkonflikt verstanden. Jetzt: Prüfe die Dolmetscher-Situation bei Herrn Nguyen.",
      contentC1: {
        title: "Was ist ein Rollenkonflikt?",
        body: "",
        glossarBegriffe: ["Rollenkonflikt"],
      },
      contentB1: {
        title: "Was ist ein Rollenkonflikt?",
        body: "",
        glossarBegriffe: ["Rollenkonflikt"],
      },
      inlineWissen: {
        bausteinRef: "rollenkonflikt",
        storyAufhaenger:
          "Tochter Linh sitzt neben ihrem Vater und übersetzt für dich. Klingt praktisch — aber Linh ist gleichzeitig Tochter, Übersetzerin und emotionale Stütze. Drei Rollen, die sich gegenseitig behindern können. Das nennt man einen Rollenkonflikt.",
        kerntext:
          "**Was ist ein Rollenkonflikt?** Eine Person hat gleichzeitig mehrere Rollen mit widersprüchlichen Erwartungen. Sie kann nicht allen Rollen gleichzeitig gerecht werden.\n\n**Beispiel Linh:**\n\n• **Rolle 1 — Tochter:** Sie will ihren Vater schützen und trösten. Schlechte Nachrichten würde sie vielleicht abmildern.\n\n• **Rolle 2 — Übersetzerin:** Sie soll medizinische Informationen sachlich und vollständig übersetzen — auch unangenehme.\n\n• **Rolle 3 — Emotionale Stütze:** Sie trägt selbst Angst und Traür, soll aber ruhig und souverän bleiben.\n\n**Warum ist das ein Problem?** Eine Tochter, die ihren Vater schützen will, übersetzt möglicherweise abgemildert: 'Die Ärztin hat gesagt, es wird alles gut' — statt der tatsächlichen Aussage. Das verzerrt die Patientenaufklärung und kann rechtliche und ethische Probleme erzeugen.\n\n**Professionelle Alternative:** Telefon-Dolmetscherdienst oder Video-Dolmetscher (kultursensibel, medizinisch geschult). In der Akutversorgung ist die Tochter oft die pragmatische Lösung — aber mit Bewusstsein für die Grenzen (ICN 2021, § 2 PflBG).",
        kerntextB1:
          "**Was ist ein Rollenkonflikt?** Eine Person hat mehrere Aufgaben gleichzeitig, die nicht zusammenpassen.\n\n**Beispiel Linh:**\n• **Tochter:** Sie will ihren Vater beschützen.\n• **Übersetzerin:** Sie soll alles genau übersetzen — auch schlechte Nachrichten.\n• **Stütze:** Sie hat selbst Angst — soll aber ruhig bleiben.\n\n**Das Problem:** Als Tochter will sie vielleicht schlechte Nachrichten abschwächen. Als Übersetzerin muss sie genau sein. Das geht nicht beides.\n\n**Besser wäre:** Ein professioneller Dolmetscher (per Telefon oder Video). Aber der ist nicht immer sofort verfügbar. Dann hilft Linh — aber wir wissen: Es gibt Grenzen.",
        faustregel:
          "**Angehörige als Übersetzer = Rollenkonflikt.** Tochter, Übersetzerin, Stütze — drei Rollen, die sich widersprechen.",
        faustregelB1:
          "Angehörige als Übersetzer: Sie sind Tochter UND Übersetzerin. Das widerspricht sich manchmal.",
        karteikarte: {
          vorderseite: "Was ist ein Rollenkonflikt — und warum entsteht er, wenn Tochter Linh für Herrn Nguyen übersetzt?",
          rueckseite:
            "Rollenkonflikt = eine Person hat gleichzeitig Rollen mit widersprüchlichen Erwartungen. Linh: Tochter (beschützen) + Übersetzerin (sachlich übersetzen) + Stütze (eigene Angst tragen). Risiko: Abgemilderte Übersetzung → verfälschte Aufklärung. Professioneller Dolmetscher ist die Norm, Angehörige die Realität — mit Bewusstsein für Grenzen. **Rollenkonflikt = mehrere Rollen, die sich widersprechen.**",
          vorderseiteB1: "Was bedeutet Rollenkonflikt bei Linh?",
          rueckseiteB1:
            "Linh ist gleichzeitig Tochter und Übersetzerin. Als Tochter will sie beschützen. Als Übersetzerin muss sie alles genau sagen. Das passt manchmal nicht zusammen.",
        },
      },
    },

    // Step 1.5 — TrueFalse (Mehrfach): Dolmetscher-Situation
    {
      stepId: "ce02-nguyen-info-05-dolmetscher-frage",
      phase: 1,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "III.2",
      quellen: ["Ethik-Kodex ICN (2021)"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-nguyen-info-dolmetscher",
      tag: "pflege",
      contentC1: {
        title: "Tochter als Übersetzerin — was stimmt?",
        body: "Tochter Linh übersetzt für ihren Vater. Das ist die Realität auf der Station — aber ethisch und fachlich komplex. Welche Aussagen zur Dolmetscher-Situation mit Angehörigen stimmen?",
        glossarBegriffe: ["Dolmetscher", "Rollenkonflikt"],
      },
      contentB1: {
        title: "Übersetzerin Linh — was ist richtig?",
        body: "Tochter Linh übersetzt für Herrn Nguyen. Was stimmt bei dieser Situation?",
        glossarBegriffe: ["übersetzen", "Patient", "Tochter"],
      },
      question: {
        fragetext:
          "Welche Aussagen zur Dolmetscher-Situation mit Angehörigen stimmen?",
        trueFalseCards: [
          {
            statement:
              "Die Tochter als Übersetzerin ist die ideale Lösung, weil sie den Vater kennt.",
            isTrue: false,
            explanation:
              "Falsch — Angehörige als Übersetzer sind ethisch komplex: Rollenkonflikt (Tochter schützt Vater → übersetzt ggf. abgemildert), keine medizinische Übersetzungsschulung, mögliche DSGVO-Konflikte. Professionelle Dolmetscherdienste sind die Norm. Die Tochter ist die Realität — aber keine ideale Lösung.",
          },
          {
            statement:
              "Professionelle Dolmetscherdienste wären die Norm, sind aber nicht immer kurzfristig verfügbar.",
            isTrue: true,
            explanation:
              "Richtig. Telefon-Dolmetscher oder kultursensible Dienste sind die fachliche Empfehlung. Sie stehen aber nicht immer kurzfristig zur Verfügung. Die Tochter ist dann die praktische Lösung — mit Bewusstsein für die Grenzen.",
          },
          {
            statement:
              "Ich spreche ausschließlich mit der Tochter, weil Herr Nguyen kein Deutsch kann.",
            isTrue: false,
            explanation:
              "Falsch — Augenkontakt und direkte Ansprache bleiben beim Patienten, auch wenn die Tochter übersetzt. Herr Nguyen ist der Patient. Er soll das Gefühl haben: 'Du sprichst mit mir.' Die Tochter ist das Kommunikationsmittel, nicht der Gesprächspartner.",
          },
          {
            statement:
              "Beim Beutelwechsel kann die Tochter helfen, indem sie erklärt, was ich tue.",
            isTrue: true,
            explanation:
              "Richtig — mit Einverständnis von Herrn Nguyen. Laufende Erklärungen (was du gerade tust, warum) werden von der Tochter kurz übersetzt. Das gibt Herrn Nguyen Kontrolle und reduziert Scham. Aber: Er entscheidet, ob und wie viel die Tochter einbezogen wird.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // 1.opt-1 — Text (analogy): Kolostoma-Anatomie für B1
    {
      stepId: "ce02-nguyen-info-opt1-kolostoma-anatomie",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-info-anatomie",
      tag: "anatomie",
      displayFormat: "analogy",
      contentC1: {
        title: "Kurzanatomie: Was ist das Sigma und wo sitzt es?",
        body: "Das Sigma (Colon sigmoideum) ist der S-förmige letzte Teil des Dickdarms vor dem Mastdarm (Rektum). Analogie: 'Das Sigma ist wie das letzte Stück Rohr vor dem Abfluss — der engste und kurvenreichste Teil. Wenn dort ein Tumor wächst, wird dieser Teil entfernt.' Bei Herrn Nguyen wurde das gesamte Sigma und der Mastdarm entfernt. Das restliche Dickdarm-Ende wird dann durch die Bauchdecke nach außen geleitet — das ist das endständige Kolostoma.",
        glossarBegriffe: ["Sigma", "Kolon", "Rektum", "endständig"],
      },
      contentB1: {
        title: "Was ist das Sigma?",
        body: "Das Sigma ist der letzte Teil des Dickdarms. Es kommt kurz vor dem After. Analogie: Stell dir ein Rohr vor. Das Sigma ist das letzte Stück Rohr vor dem Abfluss. Bei Herrn Nguyen war dort ein Tumor. Der Arzt hat diesen Teil entfernt. Das Ende des Dickdarms kommt jetzt durch die Bauch-Wand nach außen. Das nennt man Kolostoma.",
        glossarBegriffe: ["Sigma", "Kolostoma", "Tumor"],
      },
    },

    // 1.opt-2 — Flipcard: Braden-Skala kurz erklärt
    {
      stepId: "ce02-nguyen-info-opt2-braden-einlesen",
      phase: 1,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP — Expertenstandard Dekubitusprophylaxe, 3. Aktualisierung (2017)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-info-braden",
      tag: "pflege",
      contentC1: {
        title: "Braden-Skala: Was bedeutet Wert 14?",
        body: "Die Braden-Skala misst das Dekubitusrisiko anhand von 6 Subskalen. Lerne die Grundstruktur.",
        glossarBegriffe: ["Braden-Skala", "Dekubitusrisiko"],
      },
      contentB1: {
        title: "Braden-Skala — kurz erklärt",
        body: "Die Braden-Skala misst das Risiko für Druckgeschwüre (Dekubitus). Lerne die Grundstruktur.",
        glossarBegriffe: ["Braden-Skala", "Dekubitus"],
      },
      question: {
        fragetext: "Klicke die Karten um, um die Braden-Skala zu verstehen.",
        flipcard: {
          instruction: "Klicke jede Karte um.",
          cards: [
            {
              front: "Braden-Skala: 14 Punkte — was bedeutet das?",
              back: "Maximalpunktzahl = 23 (kein Risiko). Unter 18 = Risiko vorhanden. 14 = gering-moderate Gefährdung. Bei Herrn Nguyen: wenig Unterhautfettgewebe, post-OP-Schmerz limitiert Bewegung — beides sind Risikofaktoren.",
              backB1: "Maximal sind 23 Punkte möglich. Das wäre kein Risiko. 14 Punkte = leichtes Risiko. Herr Nguyen hat wenig Fettgewebe und Schmerzen — das ist ein Risiko.",
            },
            {
              front: "Was sind die 6 Subskalen der Braden-Skala?",
              back: "1) Sensorisches Empfinden, 2) Feuchtigkeit, 3) Aktivität, 4) Mobilität, 5) Ernährung, 6) Reibung/Scherkräfte. Jede Skala gibt 1–4 Punkte. Gesamt: 6–23 Punkte.",
              backB1: "Die Braden-Skala hat 6 Bereiche: Empfinden, Feuchtigkeit, Aktivität, Bewegung, Ernährung, Reibung. Jeder Bereich gibt 1–4 Punkte.",
            },
          ],
          shuffled: false,
        },
      },
    },

    // 1.opt-3 — MC: Heparin-Injektionsort
    {
      stepId: "ce02-nguyen-info-opt3-heparin-ort",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "Pflege heute, 7. Aufl. — Subkutane Injektion / Heparin-Applikation",
        "AWMF S3-Leitlinie Prophylaxe der venösen Thromboembolie (Reg. 003-001)",
      ],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-nguyen-info-heparin",
      tag: "pflege",
      contentC1: {
        title: "Heparin-Injektion bei Herrn Nguyen: Wo?",
        body: "Herr Nguyen bekommt täglich Heparin (niedermolekulares Heparin, NMH) zur Thromboseprophylaxe. Standard-Ort ist die Bauchdecke periumbilikal mit 3–5 cm Abstand zum Nabel und alternierenden Quadranten (Stelle jeden Tag rotieren). ABER: Herr Nguyen hat eine frische Bauchdeckenwunde im unteren Abdomen und ein Kolostoma im linken Unterbauch. Mindestabstand 5 cm zu Wunde und Stoma ist Pflicht. Wo gibst du die Heparin-Spritze konkret?",
        glossarBegriffe: ["niedermolekulares Heparin", "subkutan", "Thromboseprophylaxe", "alternierende Quadranten"],
      },
      contentB1: {
        title: "Heparin-Spritze bei Herrn Nguyen — wo?",
        body: "Herr Nguyen bekommt jeden Tag eine Heparin-Spritze. Heparin schützt vor Thrombose (= Blutgerinnsel in der Vene). Normal: Bauchdecke, 3–5 cm neben dem Nabel — und du wechselst die Stelle täglich (alternierende Quadranten). Aber: Herr Nguyen hat eine frische Wunde am Bauch und ein Stoma. Mindestens 5 cm Abstand zu Wunde und Stoma. Wo gibst du die Spritze?",
        glossarBegriffe: ["Heparin", "Thrombose", "Spritze"],
      },
      question: {
        fragetext:
          "Bei Herrn Nguyen (frische Bauchdeckenwunde unten, Kolostoma links) — wo gibst du die Heparin-Spritze?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Bauchnabelnah, 2–3 cm Abstand zum Nabel — wie im Standard",
            isCorrect: false,
            explanation:
              "Falsch. Standard-Abstand zum Nabel ist 3–5 cm (nicht 2–3 cm — das ist zu nah am Nabel und der Linea alba). Außerdem ist bei Herrn Nguyen der Spielraum zu eng: frische OP-Naht im unteren Abdomen + Kolostoma links + Mindestabstand 5 cm zu Wunde/Stoma lässt sich periumbilikal kaum einhalten. In dieser konkreten Situation weicht man auf laterale Oberschenkelaußenseite oder kontralateralen Oberbauch aus.",
            explanationB1:
              "Falsch. Der Standard-Abstand zum Nabel ist 3–5 cm — nicht 2–3 cm. Und bei Herrn Nguyen ist die Bauchdecke nicht gut nutzbar: Er hat dort eine Wunde und ein Stoma. Es gibt zu wenig Platz.",
          },
          {
            text: "Laterale Oberschenkelaußenseite oder kontralateraler Oberbauch — mit ≥5 cm Abstand zu Wunde und Stoma, alternierende Quadranten",
            isCorrect: true,
            explanation:
              "Richtig. Wenn die Bauchdecke wegen Wunde + Stoma nicht sicher nutzbar ist, weicht man auf alternative Standardorte aus: laterale Oberschenkelaußenseite (für NMH freigegeben) oder kontralateraler Oberbauch. Mindestabstand: 3–5 cm vom Nabel und ≥5 cm zu OP-Naht und Stoma. Injektionsorte werden in alternierenden Quadranten rotiert (z.B. Tag 1 rechts oben, Tag 2 links oben, Tag 3 rechts unten, Tag 4 links unten — bei Herrn Nguyen: Bauchdecke gemieden, also Oberschenkel-Quadranten rotieren). Gereizte oder hämatombelastete Stellen meiden. Quelle: Pflege heute 7. Aufl.; AWMF S3-Leitlinie VTE-Prophylaxe.",
            explanationB1:
              "Richtig. Wenn die Bauchdecke nicht geht (Wunde + Stoma) — dann seitlich am Oberschenkel oder oben am Bauch, weit weg von Wunde und Stoma (≥5 cm Abstand). Du wechselst die Stelle jeden Tag — nicht immer rechts, nicht immer links. Das nennt man 'alternierende Quadranten'.",
          },
          {
            text: "Oberarm",
            isCorrect: false,
            explanation:
              "Kein Standardort für NMH-Injektionen. Der Oberarm eignet sich für andere subkutane Injektionen (z.B. Insulin bei einigen Patienten), nicht für niedermolekulares Heparin.",
            explanationB1:
              "Nicht richtig. Der Arm ist kein Standard für Heparin.",
          },
          {
            text: "Gluteus (Gesäß)",
            isCorrect: false,
            explanation:
              "Nein. Gluteale Injektionen sind intramuskulär — Heparin ist subkutan. Falscher Weg und falscher Ort.",
            explanationB1:
              "Nein. Das Gesäß ist für Muskel-Spritzen. Heparin kommt unter die Haut.",
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
