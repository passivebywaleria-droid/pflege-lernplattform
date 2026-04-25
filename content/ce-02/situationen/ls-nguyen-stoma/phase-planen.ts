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
        body: "Bevor du das Stoma von Herrn Nguyen versorgst, planst du den Ablauf. Bringe die 8 Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Stomaplatte", "Schutzpaste", "Hygieneregeln"],
      },
      contentB1: {
        title: "Beutelwechsel — in welcher Reihenfolge?",
        body: "Du wechselst den Stoma-Beutel. Sortiere die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: ["Stomaplatte", "Schutzpaste"],
      },
      question: {
        fragetext:
          "Bringe die 8 Schritte des Beutelwechsels in die richtige Reihenfolge.",
        sequencing: {
          instruction: "Sortiere die Schritte des Beutelwechsels.",
          items: [
            { id: "s1", label: "Material vorbereiten + Handschuhe anziehen" },
            { id: "s2", label: "Patienten informieren und Einverständnis einholen" },
            { id: "s3", label: "Alten Beutel von oben nach unten abziehen" },
            { id: "s4", label: "Stomaplatte lösen (warm-feuchter Tupfer erleichtert das Ablösen)" },
            { id: "s5", label: "Stoma + Hautumgebung reinigen mit lauwarmem Wasser, kein Seife/Desinfektionsmittel" },
            { id: "s6", label: "Haut vollständig trocknen lassen (Mazerierung verhindern)" },
            { id: "s7", label: "Schutzpaste auftragen + neue Stomaplatte in passender Größe anpassen und anlegen" },
            { id: "s8", label: "Beutel andrücken, auf Dichtigkeit prüfen, Umgebung kontrollieren" },
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

    // Step 3.4 — Branching: Ernährungsplan post-OP
    {
      stepId: "ce02-nguyen-plan-04-ernaehrungsplan-post-op",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020, AWMF-Register 073-003)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-nguyen-plan-ernaehrung-assessment",
      tag: "pflege",
      contentC1: {
        title: "Ernährung: Assessment vor Intervention",
        body: "Herrn Nguyens Ernährungsprotokoll zeigt: 3 Teelöffel Haferschleim gestern Abend, kein Frühstück heute. Was ist dein nächster Schritt?",
        glossarBegriffe: ["NRS-2002", "Ernährungsassessment", "interprofessionell"],
      },
      contentB1: {
        title: "Herr Nguyen isst kaum — was tust du?",
        body: "Das Ernährungsprotokoll: gestern Abend drei Löffel Haferschleim, heute kein Frühstück. Was ist dein nächster Schritt?",
        glossarBegriffe: ["NRS-2002", "Ernährungsberaterin"],
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
              "Nicht vollständig. Trinknahrung kann sinnvoll sein — aber ohne ärztliche Anordnung und ohne Ernährungsassessment (NRS-2002, Kalorienbedarf berechnen, mögliche Kontraindikationen prüfen) ist das eine unvollständige Maßnahme. Außerdem: Ohne Ernährungsberaterin kann keine individuelle Ernährungsstrategie geplant werden, die das Stoma berücksichtigt (z.B. blähende Lebensmittel meiden, Flüssigkeit erhöhen). Trinknahrung als Sofortmaßnahme muss mit Arzt und Ernährungsberaterin abgestimmt werden.",
            feedbackB1:
              "Nicht ganz falsch — aber ohne Arzt und Ernährungsberaterin nicht vollständig. Erst Assessment, dann Maßnahme.",
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
        glossarBegriffe: ["Körperbild", "Würde", "interkulturell"],
      },
      contentB1: {
        title: "Psychosoziale Pflege — was bedeutet das bei Herrn Nguyen?",
        body: "Psychosoziale Pflege heißt: auch an den Menschen denken, nicht nur an die Körperpflege.\n\nBei Herrn Nguyen heißt das:\n\n1) Erkläre laut was du tust (Linh übersetzt) — Herr Nguyen soll sich nicht ausgeliefert fühlen.\n\n2) Er darf wegschauen — das ist sein Recht. Eigenständigkeit kommt later.\n\n3) Ehefrau Mai ist dabei — sie schaut zu, aber das Anleiten kommt mit dem Stomatherapeuten.\n\n4) Lass Pausen und Stille zu — Herr Nguyen spricht wenig. Das ist okay.",
        fallbezug:
          "Herr Nguyen hat gesagt: 'Ich bin kein richtiger Mann mehr.' Das ist wichtig. Es kommt in Phase 4.",
        glossarBegriffe: ["Würde", "Körperbild"],
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
      quellen: [],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-plan-pflegeplanung",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Wie sieht eine Pflegeplanung aus?",
        body: "Eine Pflegeplanung hat 4 Elemente:\n\n**1) Pflegeproblem** — Was ist das Problem?\n**2) Pflegeziel** (SMART: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert)\n**3) Pflegemaßnahmen** — Was wird konkret getan? Von wem? Wie oft?\n**4) Evaluation** — Wann wird geprüft ob das Ziel erreicht ist?\n\nBeispiel für Herrn Nguyen:\n- Problem: Neuanlage Kolostoma, 4. Tag post-OP — Patient meidet Blickkontakt mit Stoma\n- Ziel: Herr Nguyen benennt bis Entlassung 3 Zeichen, dass das Stoma gesund aussieht\n- Maßnahmen: Tägliche Inspektion mit lauterer Erklärung (+ Tochter als Übersetzerin), Stomatherapeut einbinden, schrittweise Eigenversorgung anleiten\n- Evaluation: täglich, Stomatherapeut und Pflegekraft gemeinsam",
        glossarBegriffe: ["Pflegeplanung", "SMART-Ziel", "Pflegeproblem"],
      },
      contentB1: {
        title: "Was ist eine Pflegeplanung?",
        body: "Eine Pflegeplanung hat 4 Teile:\n\n**1) Problem** — Was ist das Problem?\n**2) Ziel** — Was soll erreicht werden? (SMART = genau, messbar, realistisch, mit Datum)\n**3) Maßnahmen** — Was tust du? Wann? Wie oft?\n**4) Evaluation** — Wann prüfst du, ob das Ziel erreicht ist?\n\nBeispiel Herr Nguyen:\n- Problem: Er schaut nicht auf sein Stoma\n- Ziel: Er nennt bis zur Entlassung 3 Zeichen, dass das Stoma gesund ist\n- Maßnahmen: Jeden Tag erklären + Stomatherapeut einbinden\n- Evaluation: Täglich prüfen",
        glossarBegriffe: ["Pflegeplanung", "Ziel", "Maßnahme"],
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
