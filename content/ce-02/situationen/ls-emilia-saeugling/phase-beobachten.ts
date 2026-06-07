// CE-02 Situation Baby Emilia — Phase 2: Beobachten & Flüssigkeitsstatus
// Steps: 6 Kern + 3 Optional · Bloom: B3-B4 · Zeit: ~20-35 Min
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/phase-beobachten.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-emilia-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Flüssigkeitsstatus einschätzen",
  titelB1: "Emilia beobachten — Flüssigkeit prüfen",
  kontext:
    "Das Aufnahmegespräch ist abgeschlossen. Laura hat dir erklärt: Emilia trinkt in den letzten 24 Stunden deutlich weniger als sonst — drei nasse Windeln statt der üblichen fünf bis sechs. Jetzt geht es um die körperliche Beobachtung. Du willst drei Dinge prüfen: Hautturgor, Ausscheidung, Atemfrequenz und Körpertemperatur. Die zentrale Gefahr bei Trinkschwäche ist Flüssigkeitsmangel (Exsikkose).",
  kontextB1:
    "Das Gespräch ist fertig. Laura hat erklärt: Emilia trinkt weniger als normal. Heute nur 3 nasse Windeln — normal sind 5-6 pro Tag. Jetzt beobachtest du Emilias Körper genau. Die größte Gefahr bei Trinkschwäche ist Flüssigkeitsmangel (= Exsikkose). Du prüfst vier Dinge: Erstens den Hautturgor (= Zustand der Haut). Zweitens Windeln und Ausscheidung. Drittens die Atemfrequenz (= wie oft atmet Emilia pro Minute). Viertens die Körpertemperatur (= Fieber).",
  kernSteps: [
    // Step 2.1 — BRILLIANT: Hautturgor erkennen (vor Erklärung)
    {
      stepId: "ce02-emilia-beob-01-hautturgor-brilliant",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-emilia-beob-turgor",
      tag: "anatomie",
      bildkategorie: "prozedur",
      imageAlt:
        "Zwei Fotos nebeneinander — links: Säuglingshaut die sofort zurückspringt, rechts: Hautfalte die kurz stehen bleibt",
      bildhinweis:
        "Two side-by-side close-up photos of infant belly skin — left: skin snaps back immediately when pinched (normal turgor), right: skin stays folded briefly (reduced turgor indicating dehydration), clinical illustration style, soft lighting, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "Was siehst du — und was bedeutet es?",
        body: "Du siehst zwei Fotos von Emilias Bauch. Links (A): Die Haut springt sofort zurück. Rechts (B): Die Haut bleibt kurz als Falte stehen. **Was ist der Unterschied — und was bedeutet das für Emilias Zustand?** Das ist eine offene Frage — bevor wir erklären, was das bedeutet, schau selbst.",
        glossarBegriffe: ["Hautturgor", "Exsikkose"],
      },
      contentB1: {
        title: "Was siehst du auf den Bildern?",
        body: "Du siehst zwei Fotos. Links (A): Die Haut springt sofort zurück. Rechts (B): Die Haut bleibt kurz stehen. **Was ist der Unterschied — und was bedeutet das?** Schau erst selbst — dann erklären wir es.",
        glossarBegriffe: ["Hautturgor", "Exsikkose"],
      },
      question: {
        fragetext:
          "Was unterscheidet Bild A von Bild B — und was bedeutet das für Emilias Flüssigkeitsstatus?",
        hotspot: {
          imageUrl: "",
          imageAlt:
            "Zwei Fotos nebeneinander: normaler Hautturgor (A) vs. reduzierter Hautturgor (B)",
          instruction:
            "Klicke auf den Bereich der dir auffällt. Dann beschreibe was du siehst.",
          zones: [
            {
              id: "zone-a",
              x: 25,
              y: 50,
              radius: 20,
              label:
                "Bild A — normaler Turgor: Haut springt sofort zurück → ausreichend Flüssigkeit",
            },
            {
              id: "zone-b",
              x: 75,
              y: 50,
              radius: 20,
              label:
                "Bild B — reduzierter Turgor: Haut bleibt als Falte stehen → Zeichen von Flüssigkeitsmangel (Exsikkose)",
            },
          ],
        },
      },
    },

    // Step 2.2 — Text (beforeafter): Hautturgor erklärt
    {
      stepId: "ce02-emilia-beob-02-turgor-erklärt",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-emilia-beob-turgor-erklärt",
      tag: "anatomie",
      displayFormat: "beforeafter",
      contentC1: {
        title: "Hautturgor beim Säugling — so bewertest du ihn",
        body: "Der Hautturgor zeigt den Flüssigkeitszustand des Körpers. Du drückst die Haut kurz zwischen Daumen und Zeigefinger zusammen. **Normaler Turgor:** Die Haut springt sofort zurück — ausreichend Flüssigkeit. **Reduzierter Turgor:** Die Haut bleibt kurz als Falte stehen — Zeichen von Exsikkose (Austrocknung). Beim Säugling prüfst du den Turgor am Bauch oder am Unterarm — nie an den Beinen (dort zu wenig Unterhautfettgewebe für zuverlässige Beurteilung). Ergänzend beobachtest du die vordere Fontanelle: normalerweise flach und leicht federnd. Eingefallen = schwerer Flüssigkeitsmangel. Aufgewölbt = erhöhter Hirndruck.\n\n**Atemfrequenz** = die Anzahl der Atemzüge pro Minute. Beim 4-monatigen Säugling: 30-40/min in Ruhe, bis 50/min wach akzeptabel; >60/min = Tachypnoe. **Atemfrequenz (= Atemzüge pro Minute)** dokumentierst du im Pflegebericht zusammen mit Turgor und Fontanelle. *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: ["Hautturgor", "Exsikkose", "Fontanelle", "Haut", "Flüssigkeit", "Atemfrequenz"],
      },
      contentB1: {
        title: "Hautturgor beim Säugling prüfen",
        body: "Der Hautturgor zeigt: Hat Emilia genug Flüssigkeit? Du drückst kurz auf die Haut (Bauch oder Unterarm). **Normal:** Haut springt sofort zurück. Das ist gut. **Auffällig:** Haut bleibt kurz als Falte stehen. Das ist ein Zeichen von Exsikkose (= Austrocknung). Nie an den Beinen prüfen — dort ist die Haut anders. Außerdem schaust du auf die Fontanelle (= die weiche Stelle am Kopf). Normal: flach und etwas federnd. Eingefallen = zu wenig Flüssigkeit. Aufgewölbt = Alarm.\n\n**Atemfrequenz** = wie oft Emilia pro Minute atmet. Beim 4 Monate alten Baby: 30-40/min in Ruhe ist normal. **Atemfrequenz (= Atemzüge pro Minute)** schreibst du immer in die Dokumentation. *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: ["Hautturgor", "Exsikkose", "Fontanelle", "Haut", "Flüssigkeit", "Atemfrequenz"],
      },
    },

    // Step 2.3 — Categorize: Windeln und Ausscheidung
    {
      stepId: "ce02-emilia-beob-03-windeln-zählen",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-emilia-beob-windeln",
      tag: "pflege",
      contentC1: {
        title: "Windeln einschätzen — normal, auffällig oder Alarm?",
        body: "Emilia ist 4 Monate alt und wird vollgestillt. Zwei Begriffe vorab: **Mekonium** = der erste Stuhl eines Neugeborenen — schwarz-grünlich, zähklebrig, normal in den ersten 2-3 Lebenstagen. **Muttermilchstuhl** = der typische Stuhl gestillter Säuglinge — goldgelb, dünn-pastös, mild riechend. Ordne die folgenden Befunde der richtigen Kategorie zu.",
        glossarBegriffe: ["Mekonium", "Muttermilchstuhl"],
      },
      contentB1: {
        title: "Windeln beurteilen",
        body: "Emilia ist 4 Monate, gestillt. Zwei Begriffe vorab: **Mekonium** = der erste Stuhl bei Neugeborenen, schwarz-grünlich. Nur in den ersten 2-3 Lebenstagen normal. **Muttermilchstuhl** = der Stuhl bei gestillten Babys: goldgelb, weich, riecht mild. Sortiere die Befunde: normal, auffällig oder sofort melden?",
        glossarBegriffe: ["Mekonium", "Muttermilchstuhl"],
      },
      question: {
        fragetext:
          "Ordne jeden Befund der richtigen Kategorie zu: normal / auffällig — leicht / sofort melden.",
        categories: [
          { name: "Normal" },
          { name: "Auffällig — beobachten" },
          { name: "Sofort melden" },
        ],
        categoryItems: [
          { text: "6 nasse Windeln in 24 h", correctCategory: 0 },
          {
            text: "Goldgelber pastöser Stuhl — Muttermilchstuhl",
            correctCategory: 0,
          },
          {
            text: "3 nasse Windeln in 24 h",
            correctCategory: 1,
          },
          {
            text: "1 nasse Windel in 24 h",
            correctCategory: 2,
          },
          {
            text: "Mekonium-ähnliche Stuhlfarbe (schwarz-grünlich) bei 4-monatigem Säugling",
            correctCategory: 2,
          },
          {
            text: "Weißlicher Stuhl",
            correctCategory: 2,
          },
        ],
      },
    },

    // Step 2.4 — Dialog (3 Phasen): Trinkverhalten beobachten
    {
      stepId: "ce02-emilia-beob-04-trinkverhalten-beobachten",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["Hoehl/Kullick 2019", "WHO 2023"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-emilia-beob-trinkverhalten",
      tag: "pflege",
      contentC1: {
        title: "Trinkverhalten beobachten und erklären",
        body: "Du bittest Laura, Emilia anzulegen, während du beobachtest. Emilia macht 3-4 Schlucke, lässt dann los, atmet, versucht wieder anzusetzen — der Teufelskreis von Atemnot und Trinkschwäche ist sichtbar.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Trinken beobachten und erklären",
        body: "Du bittest Laura, Emilia anzulegen. Du schaust zu. Emilia macht 3-4 Schlucke — dann lässt sie los, atmet, versucht wieder. Du siehst den Teufelskreis: Atemnot → wenig Trinken → Atemnot.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Laura schaut dich fragend an. Was erklärst du ihr zu Emilias Trinkverhalten?",
        patientName: "Laura K.",
        dialogPhases: [
          {
            context:
              "Emilia macht wieder 3 Schlucke, lässt dann los. Laura sagt leise:\n\n\"Warum trinkt sie nicht mehr? Ich mache doch alles, was ich kann.\"",
            contextB1:
              "Emilia trinkt kurz, lässt dann los. Laura sagt:\n\n\"Warum trinkt sie nicht? Ich mache doch alles richtig.\"",
            speaker: "Laura K.",
            options: [
              {
                text: "\"Ich verstehe das — und ich kann dir erklären warum das passiert. Das Problem ist nicht die Milch, das ist die Nase.\"",
                textB1:
                  "\"Das erkläre ich dir: Das Problem ist nicht die Milch — es ist die Nase.\"",
                patientResponse:
                  "Laura schaut überrascht. \"Die Nase? Wirklich?\"",
                patientResponseB1:
                  "Laura schaut überrascht. \"Die Nase?\"",
                score: 3,
                feedback:
                  "Empathisch + sachlich — genau die richtige Kombination. Du bestätigst Lauras Beobachtung und gibst sofort die Erklärung. 'Nicht die Milch' entlastet Laura direkt von einem unbegründeten Schuldgefühl.",
                feedbackB1:
                  "Sehr gut. Du siehst Lauras Sorge und erklärst sofort. 'Nicht die Milch' — das ist das Wichtigste für Laura.",
              },
              {
                text: "\"Das ist typisch bei Bronchiolitis — das kennen wir.\"",
                textB1:
                  "\"Das ist normal bei Bronchiolitis.\"",
                patientResponse:
                  "Laura nickt, aber sie schaut noch unsicher.",
                patientResponseB1:
                  "Laura nickt — aber sie versteht noch nicht warum.",
                score: 1,
                feedback:
                  "Sachlich richtig, aber ohne Erklärung und ohne emotionale Verbindung. 'Das kennen wir' beruhigt — aber Laura versteht nicht warum das passiert. Erklären warum ist fast wichtiger als beruhigen.",
                feedbackB1:
                  "Richtig — aber zu kurz. Erkläre Laura warum das passiert. Dann versteht sie und ist ruhiger.",
              },
              {
                text: "\"Vielleicht solltest du mit dem Stillen aufhören und Flasche geben — dann sehen wir mehr.\"",
                textB1:
                  "\"Vielleicht besser Flasche geben?\"",
                patientResponse:
                  "Lauras Schultern sacken. \"Ach so… also doch meine Milch.\"",
                patientResponseB1:
                  "Laura ist unglücklich. \"Also doch meine Milch.\"",
                score: 0,
                feedback:
                  "Du willst Laura eine Lösung anbieten — guter Reflex. Aber dieser Rat ist kontraproduktiv, weil: Erstens ist Muttermilch bei Bronchiolitis aktiv vorteilhaft (Antikörper) — sie ist nicht das Problem. Zweitens bestätigt dieser Rat Lauras schlimmste Befürchtung, sie sei für Emilias Trinkschwäche verantwortlich. Drittens ist die Flasche beim obligaten Nasenatmer genauso schwierig wie die Brust — die Ursache bleibt. Stattdessen: Erkläre Laura den Mechanismus (Nase → Saugen-Atmen-Konflikt), dann Nasenpflege vor jeder Mahlzeit anbieten.",
                feedbackB1:
                  "Du willst Laura helfen — das ist gut. Aber dieser Rat ist kontraproduktiv, weil Muttermilch gerade jetzt sehr gut für Emilia ist (Abwehrstoffe). Und Laura fühlt sich jetzt schuldig — das war nicht deine Absicht. Stattdessen: Erkläre, dass die Nase das Problem ist, nicht die Milch. Beim nächsten Mal: Mechanismus erklären, dann Nasenpflege zeigen.",
              },
            ],
          },
          {
            context:
              "Du hast erklärt: Das Problem ist die Nase. Laura hört gespannt zu und wartet auf mehr.",
            contextB1:
              "Du hast erklärt: die Nase ist das Problem. Laura hört zu und wartet.",
            speaker: "Du",
            options: [
              {
                text: "\"Emilia ist eine obligate Nasenatmerin — sie kann noch nicht durch den Mund atmen. Wenn die Nase voll Schleim ist, muss sie beim Saugen kurz stoppen, um zu atmen. Deshalb trinkt sie so kurz. Wir werden die Nase vor dem Trinken reinigen — dann wird es leichter.\"",
                textB1:
                  "\"Emilia atmet nur durch die Nase — sie kann noch nicht durch den Mund atmen. Wenn die Nase verstopft ist, muss sie beim Trinken stoppen. Deshalb trinkt sie so wenig. Wir reinigen die Nase vor dem Trinken — dann wird es besser.\"",
                patientResponse:
                  "Laura atmet aus. \"Ach so. Das hatte mir niemand erklärt.\"",
                patientResponseB1:
                  "Laura atmet aus. \"Das hat mir noch niemand erklärt.\"",
                score: 3,
                feedback:
                  "Vollständig und klar. Mechanismus erklärt, Maßnahme angekündigt, Hoffnung gegeben. Das ist Pflegeberatung auf gutem Niveau.",
                feedbackB1:
                  "Sehr gut. Einfach erklärt, Maßnahme genannt, Hoffnung gegeben. Laura versteht jetzt.",
              },
              {
                text: "\"Das Saugen ist einfach anstrengend für kleine Babys.\"",
                textB1:
                  "\"Saugen ist anstrengend für kleine Babys.\"",
                patientResponse:
                  "\"Das weiß ich schon. Aber warum wird es auf einmal schlimmer?\"",
                patientResponseB1:
                  "\"Das weiß ich. Aber warum ist es jetzt schlechter?\"",
                score: 1,
                feedback:
                  "Zu vage. 'Saugen ist anstrengend' erklärt nicht warum es bei Emilia gerade jetzt so schwierig ist. Laura merkt das — und fragt nach. Du hast die Chance, den Mechanismus zu erklären, bisher nicht genutzt.",
                feedbackB1:
                  "Zu kurz. Erkläre den Mechanismus: Nase verstopft → Saugen und Atmen gleichzeitig nicht möglich. Dann versteht Laura.",
              },
            ],
          },
          {
            context:
              "Laura nickt. Dann fragt sie:\n\n\"Was kann ich tun — jetzt gerade? Wann reinigen wir die Nase?\"",
            contextB1:
              "Laura nickt. Dann fragt sie:\n\n\"Was kann ich jetzt tun? Wann wird die Nase gereinigt?\"",
            speaker: "Laura K.",
            options: [
              {
                text: "\"Was kann ich tun — jetzt gerade? Wann reinigen wir die Nase?\"",
                textB1:
                  "\"Was kann ich jetzt tun? Wann wird die Nase gereinigt?\"",
                patientResponse:
                  "Du erklärst ihr: Vor jeder Mahlzeit Nase sanft absaugen oder mit NaCl-Tropfen reinigen.",
                patientResponseB1:
                  "Du erklärst: Vor jeder Mahlzeit Nase reinigen — mit NaCl-Tropfen oder sanftem Absaugen.",
                score: 3,
                feedback:
                  "Laura hat verstanden und will selbst handeln — das ist das Ziel der Pflegeberatung. Jetzt konkret antworten: Vor jeder Mahlzeit Nasenpflege, Technik zeigen.",
                feedbackB1:
                  "Laura will selbst helfen — sehr gut. Jetzt zeige ihr wie: Nase vor dem Trinken reinigen.",
              },
              {
                text: "\"Wir kümmern uns darum. Du musst nichts tun.\"",
                textB1:
                  "\"Das machen wir. Du musst nichts tun.\"",
                patientResponse:
                  "Laura nickt, aber ihr Blick wird wieder unsicherer.",
                patientResponseB1:
                  "Laura nickt — aber sie wirkt passiver.",
                score: 1,
                feedback:
                  "Gut gemeint, aber zu passivierend. Laura will handeln — sie will nicht nur zuschauen. Handlungskompetenz zurückgeben ist ein Ziel der Pflegeberatung. Zeige ihr was sie selbst tun kann.",
                feedbackB1:
                  "Du nimmst ihr die Aufgabe weg. Laura will helfen. Zeige ihr was sie selbst tun kann — das macht sie sicherer.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.5 — Sequencing: Fieber messen beim Säugling
    {
      stepId: "ce02-emilia-beob-05-temperatur-messen",
      phase: 2,
      stepType: "sequencing",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-emilia-beob-fiebermessen",
      tag: "pflege",
      contentC1: {
        title: "Fiebermessen beim Säugling — korrekte Reihenfolge",
        body: "Bringe die Schritte beim rektalen Fiebermessen in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Fiebermessen beim Säugling",
        body: "Bringe die Schritte in die richtige Reihenfolge.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Sortiere die Schritte beim rektalen Fiebermessen in die richtige Reihenfolge.",
        sequencing: {
          instruction:
            "In welcher Reihenfolge führst du die Temperaturmessung durch?",
          items: [
            {
              id: "tm1",
              label: "Material vorbereiten — Thermometer reinigen + Gleitmittel bereitstellen",
            },
            {
              id: "tm2",
              label: "Laura informieren was jetzt passiert und warum rektal gemessen wird",
            },
            {
              id: "tm3",
              label: "Emilia sicher in Rückenlage positionieren — Beine leicht anwinkeln",
            },
            {
              id: "tm4",
              label: "Rektal messen — bis Signalton (Dauer geräteabhängig, ca. 10-60 Sek.), Emilia dabei halten und beruhigen",
            },
            {
              id: "tm5",
              label: "Temperatur ablesen und dokumentieren",
            },
            {
              id: "tm6",
              label: "Emilia trösten und sicher halten, Windel wieder schließen",
            },
          ],
        },
      },
    },

    // Step 2.6 — TrueFalse: Atemfrequenz beim Säugling beurteilen
    {
      stepId: "ce02-emilia-beob-06-atemfrequenz-beurteilen",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S2k-Leitlinie Bronchiolitis 2022",
        "Hoehl/Kullick 2019",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-emilia-beob-atemfrequenz",
      tag: "krankheitslehre",
      contentC1: {
        title: "Atemfrequenz beim Säugling richtig beurteilen",
        body: "Beurteile die folgenden Aussagen zur Atemfrequenz beim Säugling: wahr oder falsch?",
        glossarBegriffe: [
          "Tachypnoe",
          "Interkostale Einziehungen",
          "Obligate Nasenatmer",
        ],
      },
      contentB1: {
        title: "Atemfrequenz beim Säugling — wahr oder falsch?",
        body: "Beurteile jede Aussage: wahr oder falsch?",
        glossarBegriffe: [
          "Tachypnoe",
          "Interkostale Einziehungen",
          "Obligate Nasenatmer",
        ],
      },
      question: {
        fragetext:
          "Welche Aussagen zur Atemfrequenz beim Säugling stimmen?",
        trueFalseCards: [
          {
            statement:
              "Beim 4-monatigen Säugling liegt die Ruhe-Atemfrequenz bei 30-40/min, bis 50/min im Wachzustand ist akzeptabel — > 50/min bei Bronchiolitis ist beobachtungspflichtig.",
            isTrue: true,
            explanation:
              "Richtig. Hoehl/Kullick (2019) nennt für Säuglinge 1-12 Monate 30-40/min in Ruhe; bis 50/min wach/aktiv akzeptabel. AAP/AWMF nennt die breitere Spannweite 30-60/min für Säuglinge (alle Aktivitätsniveaus). Gemeinsame Tachypnoe-Schwelle bei Bronchiolitis: > 60/min (AWMF S2k Bronchiolitis 2022). Bei Emilia mit RSV-Bronchiolitis und 50/min: oberer Rand des Normbereichs — beobachten und im Verlauf dokumentieren.",
          },
          {
            statement:
              "Emilia atmet mit 50/min — das ist so auffällig, dass sofort der Arzt gerufen werden muss.",
            isTrue: false,
            explanation:
              "Falsch. 50/min ist beim 4-monatigen Säugling am oberen Rand des Normbereichs (Hoehl/Kullick: bis 50/min wach akzeptabel). Sofortiger Arztkontakt ist nötig bei: > 60/min (Tachypnoe), interkostalen Einziehungen, Nasenflügeln, Zyanose. 50/min wird engmaschig beobachtet (q15min bis q30min) und im Verlauf dokumentiert — kein Sofortalarm, aber Verlaufsmonitoring.",
          },
          {
            statement:
              "Interkostale Einziehungen (Haut zieht sich zwischen den Rippen ein) sind beim Säugling harmlos.",
            isTrue: false,
            explanation:
              "Falsch. Interkostale Einziehungen sind ein deutliches Zeichen erhöhter Atemarbeit — der Säugling kämpft um Luft. Sie müssen dem Arzt gemeldet werden. Emilia hat noch keine Einziehungen — das ist ein positives Zeichen.",
          },
          {
            statement:
              "Nasale Sekretion (Schleim in der Nase) beeinflusst das Saugverhalten beim Säugling.",
            isTrue: true,
            explanation:
              "Richtig. Säuglinge sind obligate Nasenatmer — sie atmen ausschließlich durch die Nase. Nasale Sekretion erschwert das gleichzeitige Saugen und Atmen erheblich. Das ist die Hauptursache für Emilias Trinkschwäche.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Step 2.7 — Flipcard: Fontanelle
    {
      stepId: "ce02-emilia-beob-opt-fontanelle",
      phase: 2,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-beob-fontanelle",
      tag: "anatomie",
      contentC1: {
        title: "Die Fontanelle — was zeigt sie?",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Fontanelle"],
      },
      contentB1: {
        title: "Die Fontanelle",
        body: "Klapp die Karte um.",
        glossarBegriffe: ["Fontanelle"],
      },
      question: {
        fragetext: "Was ist die Fontanelle — und was zeigt sie?",
        flipcard: {
          instruction: "Klappe die Karte um.",
          cards: [
            {
              front: "Was ist die Fontanelle — und was zeigt sie?",
              back: "Die Fontanelle ist eine noch offene Stelle am Schädel — die Knochen sind dort noch nicht zusammengewachsen. Normal: flach, etwas federnd. Eingefallen = zu wenig Flüssigkeit (Exsikkose-Zeichen). Aufgewölbt = erhöhter Hirndruck — sofort melden. *(Hoehl/Kullick, 2019)*",
              backB1:
                "Die Fontanelle ist die weiche Stelle am Kopf. Normal: flach und etwas weich. Eingefallen = zu wenig Flüssigkeit — auffällig. Aufgewölbt = Alarm — sofort melden.",
            },
          ],
        },
      },
    },

    // Step 2.8 — Text (scenario): Muttermilchstuhl
    {
      stepId: "ce02-emilia-beob-opt-muttermilchstuhl",
      phase: 2,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-emilia-beob-stuhl-norm",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Muttermilchstuhl — was ist normal?",
        body: "Gestillte Säuglinge haben oft einen Stuhl der Pflegende überrascht: goldgelb, dünn, manchmal fast flüssig, mild riechend, safranartig gefärbt. Das ist vollständig normal — nicht mit Durchfall verwechseln. Die Häufigkeit variiert stark: bis zu 8× täglich oder auch mal 3 Tage nichts — beides kann im Normbereich liegen. Alarmzeichen sind: weißlicher Stuhl (mögliche Gallenprobleme), schwarzer Stuhl nach dem Mekoniumalter (mögliche Blutung), schleimiger blutiger Stuhl. *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: ["Mekonium", "Muttermilchstuhl"],
      },
      contentB1: {
        title: "Muttermilchstuhl — was ist normal?",
        body: "Gestillte Babys haben gelben, dünnen, manchmal flüssigen Stuhl. Das ist normal. Kein Durchfall. Die Häufigkeit ist sehr unterschiedlich: manchmal 8× pro Tag, manchmal 3 Tage nichts — beides kann normal sein. Sofort melden: weißer Stuhl, schwarzer Stuhl (nach den ersten Tagen), blutiger oder schleimiger Stuhl. *(Hoehl/Kullick, 2019)*",
        glossarBegriffe: ["Muttermilchstuhl"],
      },
    },

    // Step 2.9 — Matching: Exsikkose-Grade
    {
      stepId: "ce02-emilia-beob-opt-exsikkose-grade",
      phase: 2,
      stepType: "matching",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["Hoehl/Kullick 2019", "AWMF S2k-Leitlinie Bronchiolitis 2022"],
      track: "vertiefung",
      modus: "puzzle",
      lernziel: "ce02-emilia-beob-exsikkose-grade",
      tag: "krankheitslehre",
      contentC1: {
        title: "Exsikkose-Grade beim Säugling",
        body: "Ordne die Zeichen der Exsikkose den drei Schweregraden zu.",
        glossarBegriffe: ["Exsikkose"],
      },
      contentB1: {
        title: "Austrocknung erkennen — drei Stufen",
        body: "Ordne jedes Zeichen der richtigen Stufe zu: leicht, mittel oder schwer.",
        glossarBegriffe: ["Exsikkose"],
      },
      question: {
        fragetext:
          "Ordne die Zeichen der Exsikkose dem richtigen Schweregrad zu.",
        matchingPairs: [
          {
            left: "Leichte Exsikkose",
            right:
              "Mundschleimhaut leicht trocken, weniger nasse Windeln als üblich",
          },
          {
            left: "Mittelschwere Exsikkose",
            right:
              "Hautturgor reduziert, Fontanelle eingefallen, kein Tränenfluss beim Weinen",
          },
          {
            left: "Schwere Exsikkose",
            right:
              "Bewusstseinstrübung, flacher schneller Puls, keine Urinproduktion — sofort melden",
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 25,
};
