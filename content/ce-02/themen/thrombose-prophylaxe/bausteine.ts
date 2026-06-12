// CE-02 Thema Thrombose-Prophylaxe — Wissensbausteine (15 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/thrombose-prophylaxe/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_THROMBOSE_PROPHYLAXE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: virchow-trias (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-virchow-trias",
    themaId: "thrombose-prophylaxe",
    titel: "Virchow-Trias: Drei Säulen der Thromboseentstehung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum bildet sich ein Blutgerinnsel nicht einfach zufällig, sondern braucht bestimmte Bedingungen? Welche drei könnten das sein?",
      antwort:
        "Rudolf Virchow beschrieb 1856 drei Faktoren, die gemeinsam eine Thrombose auslösen: (1) Schaden an der Gefäßwand (Endothel), (2) verlangsamter oder verwirbelter Blutfluss (Stase), (3) veränderte Blutzusammensetzung (Hyperkoagulabilität). Die Kombination mehrerer Faktoren erhöht das Risiko exponentiell.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Rudolf Virchow beschrieb 1856 drei Faktoren, die gemeinsam eine Thrombose auslösen: (1) Schaden an der Gefäßwand, (2) verlangsamter oder verwirbelter Blutfluss (Stase), (3) veränderte Blutzusammensetzung (Hyperkoagulabilität). Meist wirken mehrere gleichzeitig.",
      textB1:
        "Drei Gründe, warum ein Blutgerinnsel entsteht: erstens ein Schaden an der Gefäßwand, zweitens langsamer Blutfluss, drittens Blut, das leichter gerinnt. Schon zwei dieser Gründe zusammen sind gefährlich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Virchow 1856", "AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-virchow-trias",
        tag: "pflege",
        displayFormat: "procontra",
        bildkategorie: "anatomie",
        imageAlt:
          "Drei überlappende Kreise: Gefäßwandschaden, Stase, Hyperkoagulabilität — Überschneidung in der Mitte = Thrombose",
        bildhinweis:
          "Venn diagram with three overlapping circles labeled: Gefäßwandschaden, Stase, Hyperkoagulabilität. The overlapping center area is highlighted in red to represent Thrombose. Minimal, clean SVG style, no additional text.",
        contentC1: {
          title: "Virchow-Trias: Warum entsteht eine Thrombose?",
          body: "Die Virchow-Trias beschreibt, warum eine Thrombose entsteht — nicht die Symptome, sondern die drei Ursachen. **Erstens: Gefäßwandschaden.** Die innere Gefäßwand (Endothel) ist normalerweise glatt — bei Verletzung, Entzündung oder Katheter wird sie rau, und Blutplättchen bleiben kleben. **Zweitens: Stase**, also verlangsamter Blutfluss. Wenn du lange liegst oder sitzt, pumpt die Wadenmuskel-Pumpe nicht mehr. Das Blut staut sich in den Beinvenen und gerinnt leichter. **Drittens: Hyperkoagulabilität** — erhöhte Gerinnungsbereitschaft. Das kann durch Pille, Rauchen, Schwangerschaft, Tumor, Dehydration oder angeborene Störungen entstehen. Wichtig: **Die Kombination ist das Gefährlichste.** Ein frisch Hüftoperierter hat Wandschaden (OP) + Stase (Bett) + Hyperkoagulabilität (Entzündungsreaktion) — alle drei Säulen gleichzeitig.",
          glossarBegriffe: ["Virchow-Trias", "Thrombose", "Stase", "Hyperkoagulabilität"],
        },
        contentB1: {
          title: "Virchow-Trias: Drei Gründe für ein Blutgerinnsel",
          body: "Drei Gründe machen ein Blutgerinnsel wahrscheinlich. **Grund 1: Schaden an der Gefäßwand.** Die Innenwand der Ader ist normalerweise glatt. Wenn sie verletzt ist, kleben Blutplättchen daran fest. **Grund 2: Langsamer Blutfluss (Stase).** Wenn du lange liegst, bewegen sich die Wadenmuskeln nicht. Dann fließt das Blut zu langsam. **Grund 3: Blut gerinnt leichter (Hyperkoagulabilität).** Das kann durch Medikamente, Krebs oder zu wenig Trinken passieren. **Wichtig: Wenn mehrere Gründe zusammen kommen, ist es besonders gefährlich.** Zum Beispiel nach einer Hüft-OP: Schaden durch OP + langes Liegen + Entzündungsreaktion.",
          glossarBegriffe: ["Virchow-Trias", "Thrombose", "Stase", "Hyperkoagulabilität"],
        },
      },
    },
    glossarBegriffe: ["Virchow-Trias", "Thrombose", "Stase", "Hyperkoagulabilität"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: tvt-vs-phlebitis (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-tvt-phlebitis",
    themaId: "thrombose-prophylaxe",
    titel: "TVT vs. Thrombophlebitis: Was ist gefährlicher?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient hat eine gerötete, schmerzhafte Stelle am Unterschenkel-Oberfläche. Ein anderer hat sein ganzes Bein geschwollen, aber nichts Rotes sichtbar. Wer ist gefährlicher und warum?",
      antwort:
        "Der Patient mit dem geschwollenen Bein ist gefährlicher: Tiefe Venenthrombose (TVT) sitzt in den tiefen Leitvenen — unsichtbar, aber mit Lungenembolie-Risiko. Die oberflächliche Phlebitis ist meist harmlos, sichtbar als roter Strang — kann aber in tiefe Venen einwachsen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Tiefe Venenthrombose (TVT) betrifft die tiefen Leitvenen — unsichtbar, aber gefährlich (Lungenembolie-Risiko). Oberflächliche Phlebitis betrifft Venen direkt unter der Haut — sichtbar, oft harmlos. Aber Achtung: Phlebitis kann einwachsen und zur TVT werden.",
      textB1:
        "Die tiefe Beinvenen-Thrombose (TVT) sieht man nicht, ist aber sehr gefährlich — das Gerinnsel kann in die Lunge wandern. Die Thrombophlebitis (Entzündung in einer Oberflächenvene) sieht man — roter Strang, schmerzhaft — ist meist harmloser. Aber auch sie kann in die Tiefe einwachsen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-tvt-phlebitis",
        tag: "pflege",
        displayFormat: "procontra",
        bildkategorie: "anatomie",
        imageAlt:
          "Querschnitt Bein: oberflächliche Vene mit Phlebitis (roter Strang direkt unter Haut) vs. tiefe Leitvene mit Thrombus (dicker Pfropf in tiefer Vene)",
        bildhinweis:
          "Cross-section of a leg showing a superficial vein near the skin surface with a red inflamed cord (Thrombophlebitis) and a deep vein (V. femoralis) with a dark thrombus blocking it. German labels: oberflächliche Vene, tiefe Leitvene, Thrombus. Minimal anatomical SVG style, no extra text.",
        contentC1: {
          title: "TVT vs. Thrombophlebitis",
          body: "**Tiefe Venenthrombose (TVT, Phlebothrombose)** sitzt in den tiefen Leitvenen des Beins — also genau den Venen, über die 80% des Bluts aus dem Bein zurück zum Herzen fließen. Wird ein solcher Thrombus gelöst, wandert er über das rechte Herz in die Lunge — **Lungenembolie**. Etwa 90% aller TVT entstehen in den Beinen. Symptome oft wenig spezifisch oder klinisch stumm. **Thrombophlebitis** ist die Entzündung einer oberflächlichen Vene unter der Haut — meist harmlos, sichtbar als geröteter Strang. **Risiko:** Wenn die oberflächliche Thrombose aszendiert (nach oben wächst) und in die tiefen Venen einwächst, wird sie zur TVT. **Faustregel:** Sichtbar ist oft harmloser — unsichtbar ist oft gefährlicher.",
          glossarBegriffe: ["Tiefe Venenthrombose (TVT)", "Thrombophlebitis"],
        },
        contentB1: {
          title: "TVT vs. Thrombophlebitis — was ist der Unterschied?",
          body: "**Tiefe Venenthrombose (TVT):** Das Gerinnsel sitzt tief im Bein, in den großen Venen. Man sieht es nicht von außen. Aber es ist gefährlich: Das Gerinnsel kann sich lösen und in die Lunge wandern. Das heißt Lungenembolie und kann tödlich sein. **Thrombophlebitis:** Das Gerinnsel sitzt in einer Vene direkt unter der Haut. Man sieht einen roten, harten Strang. Das schmerzt, ist aber meist harmlos. **Aber:** Wenn die Entzündung nach oben wächst, kann sie in die tiefen Venen einwachsen — dann wird es gefährlich. Deshalb: **Auch Phlebitis immer melden und dokumentieren.**",
          glossarBegriffe: ["Tiefe Venenthrombose (TVT)", "Thrombophlebitis"],
        },
      },
    },
    glossarBegriffe: ["Tiefe Venenthrombose (TVT)", "Thrombophlebitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: lungenembolie-komplikation (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-lungenembolie",
    themaId: "thrombose-prophylaxe",
    titel: "Lungenembolie: Der Weg des Thrombus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Thrombus in der Wade — wie kann er tödlich werden? Beschreibe den Weg durch den Körper.",
      antwort:
        "Tiefe Beinvene → untere Hohlvene → rechter Vorhof → rechte Kammer → Lungenarterie. Dort Verschluss → reduzierte Sauerstoffaufnahme → Rechtsherzbelastung → potenziell tödlich. Etwa 50% aller proximalen TVT verursachen Lungenembolien, oft unbemerkt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Eine Lungenembolie entsteht, wenn ein Thrombus aus den tiefen Beinvenen sich löst, über das rechte Herz wandert und die Lungenarterie verschließt. Etwa 50% aller proximalen TVT verursachen Lungenembolien — oft unbemerkt.",
      textB1:
        "Ein Blutgerinnsel löst sich aus der tiefen Beinvene. Es wandert durch die Hohlvene in das rechte Herz und dann in die Lunge. Dort verstopft es eine Ader. Das Blut kann nicht mehr genug Sauerstoff aufnehmen. Eine große Lungenembolie kann tödlich sein.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-lungenembolie",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "anatomie",
        imageAlt:
          "Körper-Querschnitt: Thrombus aus Wade (rot markiert), Pfeil nach oben durch Beinvenen, über rechtes Herz, in Lunge (blau verstopft)",
        bildhinweis:
          "Human body outline showing the path of a thrombus: starting from the deep leg vein (rote Markierung), arrow up through the inferior vena cava, through the right atrium and right ventricle, into the pulmonary artery (blocked, blue). German labels: Beinvene, rechter Vorhof, rechte Kammer, Lungenarterie. Copic marker sketch style, no extra text.",
        contentC1: {
          title: "Lungenembolie: Der tödliche Weg des Thrombus",
          body: "Die Lungenembolie ist die gefürchtetste Komplikation der TVT. **Der Weg:** Ein Thrombusteil löst sich aus der tiefen Beinvene (meist Oberschenkel oder Becken). Er wird über die großen Körpervenen in den rechten Vorhof geschwemmt, dann in die rechte Kammer, und von dort in die Lungenarterien. Dort bleibt er stecken — je nach Größe in einer kleinen oder großen Arterie. **Folge:** Der Teil der Lunge hinter dem Verschluss bekommt keinen Blutfluss mehr — Sauerstoffaufnahme bricht ein, rechtes Herz muss gegen einen Widerstand pumpen und kann versagen. Eine massive Lungenembolie kann innerhalb von Minuten tödlich sein. Sie ist eine häufige Todesursache im Krankenhaus. Deshalb ist Prophylaxe lebensrettend.",
          glossarBegriffe: ["Lungenembolie", "Thrombose"],
        },
        contentB1: {
          title: "Lungenembolie: Wie wird ein Gerinnsel tödlich?",
          body: "Ein Gerinnsel in der Beinvene ist schon gefährlich. Aber es wird noch gefährlicher, wenn es sich löst. **Der Weg durch den Körper:** Das Gerinnsel löst sich. Es schwimmt durch die große Ader (Hohlvene) nach oben. Es kommt in den rechten Teil des Herzens. Von dort wird es in die Lungenader gedrückt. Dort verstopft es. Das Blut kommt nicht mehr weiter. Die Lunge bekommt keinen Sauerstoff mehr. Das Herz muss stärker pumpen. Eine große Verstopfung kann in wenigen Minuten tödlich sein. Deshalb ist Thrombose-Vorbeugung so wichtig.",
          glossarBegriffe: ["Lungenembolie", "Thrombose"],
        },
      },
    },
    glossarBegriffe: ["Lungenembolie", "Thrombose"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: risikoassessment-padua-caprini (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-assessment",
    themaId: "thrombose-prophylaxe",
    titel: "Risikoassessment: Padua- und Caprini-Score",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 65-jähriger Patient kommt frisch operiert von Hüft-OP. Eine 28-jährige Frau kommt wegen Pneumonie ins Krankenhaus. Brauchen beide dieselbe Thromboseprophylaxe?",
      antwort:
        "Nein — beide brauchen Prophylaxe, aber unterschiedlich. Der chirurgische Patient wird mit dem Caprini-Score bewertet, die internistische Patientin mit dem Padua-Score (ACCP-Leitlinie). Re-Assessment bei Zustandsänderung (neue OP, Infekt, Immobilität) ist Pflicht.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die AWMF S3-Leitlinie empfiehlt bei Aufnahme ein strukturiertes Risiko-Assessment. Für chirurgische Patienten eignet sich der Caprini-Score, für internistische Patienten der Padua-Score. Re-Assessment bei Zustandsänderung (neue OP, Infekt, Immobilität).",
      textB1:
        "Beim Aufnehmen eines Patienten muss das Thromboserisiko eingeschätzt werden. Für Patienten nach einer OP: Caprini-Score. Für kranke Patienten ohne OP: Padua-Score. Wenn sich der Zustand ändert, wird das Assessment wiederholt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-04",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015", "ACCP-Leitlinie"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-assessment",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Risikoassessment: Padua- und Caprini-Score",
          body: "Thromboserisiko ist individuell — deshalb gibt es Scores, die Faktoren systematisch erfassen. **Der Caprini-Score** wurde für chirurgische Patienten validiert: OP-Art, Alter, Immobilität, Vorerkrankungen, Medikamente werden mit Punkten gewichtet. **Der Padua-Score** ist für internistische Patienten (ACCP-Leitlinie): aktive Tumorerkrankung, Immobilität >3 Tage, VTE-Anamnese, Infektion, Herzinsuffizienz erhalten Punkte. Je höher der Score, desto wichtiger die medikamentöse Prophylaxe. Wichtig: Scores ersetzen nicht die klinische Einschätzung — sie ergänzen sie. **Re-Assessment bei jeder Zustandsänderung ist Pflicht** — nicht nur einmalig bei Aufnahme.",
          glossarBegriffe: ["Virchow-Trias", "Thrombose"],
        },
        contentB1: {
          title: "Risikoassessment: Welches Instrument für wen?",
          body: "Nicht alle Patienten brauchen dasselbe. Deshalb gibt es Bewertungs-Tools. **Caprini-Score:** Für Patienten nach einer Operation. Er zählt Punkte für Risiken wie: OP-Art, Alter, Liegen, Vorerkrankungen. **Padua-Score:** Für Patienten ohne OP (zum Beispiel bei Lungenentzündung). Er zählt Punkte für: Tumor, langes Liegen, frühere Thrombose, Infektion, Herzinsuffizienz. **Je mehr Punkte → desto wichtiger ist die Prophylaxe.** Wichtig: Das Assessment wird wiederholt — bei jeder Veränderung des Zustands. Es ist keine einmalige Aufgabe.",
          glossarBegriffe: ["Virchow-Trias", "Thrombose"],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: fruehmobilisation-basismassnahme (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-fruehmobilisation",
    themaId: "thrombose-prophylaxe",
    titel: "Frühmobilisation: Die stärkste Basismaßnahme",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was glaubst du: Ist die wirksamste Einzelmaßnahme gegen Thrombose eine Spritze, ein Strumpf oder etwas ganz anderes?",
      antwort:
        "Frühmobilisation. Sie aktiviert die Wadenmuskel-Pumpe, die 80% des venösen Rückflusses bewirkt. Schon wenige Schritte am 1. postoperativen Tag wirken — stärker als jede einzelne medikamentöse oder physikalische Maßnahme allein.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Frühmobilisation ist die am besten belegte Basismaßnahme. Sie aktiviert die Wadenmuskel-Pumpe, die 80% des venösen Rückflusses bewirkt. Schon wenige Schritte am 1. postoperativen Tag wirken — und jede nicht-notwendige Bettruhe erhöht das Thromboserisiko.",
      textB1:
        "Die wirksamste Maßnahme gegen Thrombose ist Bewegung — Frühmobilisation. Wenn du gehst, drücken die Wadenmuskeln das Blut aus den Beinvenen nach oben. Das macht 80% des Blutrückflusses aus. Schon wenige Schritte am 1. Tag nach der OP helfen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-fruehmobilisation",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "szene",
        imageAlt:
          "Pflegefachperson unterstützt älteren Mann bei ersten Schritten nach Hüft-OP — Patient mit OP-Hemd, Krückstock, Infusionsständer",
        bildhinweis:
          "Nurse supporting elderly man taking first steps after hip surgery, patient wearing hospital gown, using crutch, IV pole nearby, encouraging atmosphere, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Frühmobilisation: Stärker als jede Spritze",
          body: "Frühmobilisation ist das Wirksamste, was du als Pflegefachperson gegen Thrombose tun kannst — stärker als jeder einzelne Strumpf oder Spritzen allein. **Warum?** Die Wadenmuskel-Pumpe: Wenn du gehst oder auf der Stelle trittst, drückt die Wadenmuskulatur die Venen zusammen und presst das Blut nach oben Richtung Herz. Das macht etwa **80% des venösen Rückflusses** aus dem Bein aus. Wenn du liegst, läuft diese Pumpe nicht — das Blut staut sich, Gerinnung startet (Stase + endotheliale Aktivierung). Moderne ERAS-Konzepte setzen deshalb auf: Mobilisation am OP-Tag, spätestens am 1. post-OP-Tag. Schon wenige Schritte oder aktives Fußkreisen sind wirksam. **Deine Aufgabe:** Patient ermutigen, anleiten, sicher begleiten. Bei bewusstlosen Patienten: passive Fußkreisen, Bein anheben/senken.",
          glossarBegriffe: ["Wadenmuskelpumpe"],
        },
        contentB1: {
          title: "Frühmobilisation: Bewegen schützt vor Thrombose",
          body: "Die stärkste Maßnahme gegen Thrombose ist Bewegung. Deshalb: **so früh wie möglich aufstehen und gehen.** Warum hilft das? Wenn du gehst, drücken die Wadenmuskeln das Blut in den Beinvenen nach oben — zum Herzen. Das ist wie eine Pumpe. Diese Pumpe macht **80% des Blutrückflusses** aus dem Bein. Wenn jemand lange liegt, funktioniert die Pumpe nicht. Das Blut staut sich. Es kann ein Gerinnsel entstehen. **Deine Aufgabe:** Den Patienten ermutigen und sicher begleiten. Am Tag nach der OP schon: ein paar Schritte gehen. Auch Fußkreisen im Bett hilft.",
          glossarBegriffe: ["Wadenmuskelpumpe"],
        },
      },
    },
    glossarBegriffe: ["Wadenmuskelpumpe"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: nmh-doaks-medikamentoes (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-nmh-doaks",
    themaId: "thrombose-prophylaxe",
    titel: "Medikamentöse Prophylaxe: NMH und DOAKs",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum bekommt fast jeder stationäre Patient eine Bauchspritze — und was müsstest du dabei beobachten?",
      antwort:
        "Niedermolekulares Heparin (NMH, z.B. Enoxaparin) ist Standard der medikamentösen Prophylaxe: 1x täglich subkutan in die Bauchhaut. Pflege beobachtet: Blutungszeichen (blaue Flecken, Nasenbluten, Blut im Urin/Stuhl), Thrombozyten-Verlauf (HIT nach 5-14 Tagen!), Nierenfunktion.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Niedermolekulares Heparin (NMH, z.B. Enoxaparin) ist Standard der medikamentösen Prophylaxe: 1x täglich subkutan in die Bauchhaut. Alternativen: Fondaparinux (bei HIT-Risiko) oder DOAKs (oral bei elektiver Hüft-/Knie-TEP, z.B. Rivaroxaban).",
      textB1:
        "NMH ist die Standard-Spritze für Thrombosevorbeugung — einmal täglich in die Bauchhaut. Als Alternative gibt es Tabletten (DOAKs) — zum Beispiel nach einer Hüft-OP. Pflege beobachtet: Blutungszeichen, Thrombozyten-Abfall, Nierenwerte.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-06",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-nmh-doaks",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Medikamentöse Prophylaxe: NMH und DOAKs",
          body: "Die medikamentöse Prophylaxe erfolgt meist mit **niedermolekularem Heparin (NMH)**. Vorteile gegenüber klassischem unfraktioniertem Heparin (UFH): längere Halbwertszeit (1x täglich statt mehrmals), niedrigeres HIT-Risiko, keine aPTT-Kontrolle nötig. Bei HIT oder Allergie: Fondaparinux. Bei elektiver Hüft-/Knie-TEP: **DOAKs oral** (Rivaroxaban, Apixaban) — Alternative zum NMH. **Deine Pflege-Aufgabe:** korrekt injizieren, beobachten auf **Blutungszeichen** (blaue Flecken, Blut im Urin/Stuhl, Nasenbluten, Kopfschmerz), auf **HIT** (Thrombozytenabfall >50% nach 5-14 Tagen), und **Nierenfunktion** (NMH wird renal ausgeschieden). Bei Auffälligkeit: Arzt informieren, Laborwerte prüfen.",
          glossarBegriffe: ["Niedermolekulares Heparin (NMH)", "DOAK (Direktes Orales Antikoagulans)", "HIT (Heparin-induzierte Thrombozytopenie)"],
        },
        contentB1: {
          title: "Bauchspritze und Tabletten: Medikamente gegen Thrombose",
          body: "Das häufigste Medikament gegen Thrombose ist **NMH** — eine Spritze in die Bauchhaut, einmal am Tag. Es macht das Blut etwas dünner. Als Alternative gibt es **Tabletten (DOAKs)** — zum Beispiel nach einer Hüft-OP. **Was die Pflege beobachtet:** Gibt es Blutungszeichen? Blaue Flecken? Blut in Urin oder Stuhl? Nasenbluten? Das sind Zeichen, dass das Blut zu dünn ist. **Wichtig:** Nach 5-14 Tagen Heparin — Thrombozyten prüfen (HIT möglich). **Bei jeder Auffälligkeit: sofort Arzt informieren.**",
          glossarBegriffe: ["Niedermolekulares Heparin (NMH)", "DOAK (Direktes Orales Antikoagulans)", "HIT (Heparin-induzierte Thrombozytopenie)"],
        },
      },
    },
    glossarBegriffe: ["Niedermolekulares Heparin (NMH)", "DOAK (Direktes Orales Antikoagulans)", "HIT (Heparin-induzierte Thrombozytopenie)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: heparin-spritztechnik (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-spritztechnik",
    themaId: "thrombose-prophylaxe",
    titel: "NMH-Spritztechnik: Die drei Nicht-Regeln",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sollst deine erste Heparin-Spritze in die Bauchhaut geben. Was musst du VOR der Injektion prüfen — und welche drei Dinge darfst du auf keinen Fall tun?",
      antwort:
        "Vor der Injektion: Hände desinfizieren, Patient informieren, Stelle auswählen (5 cm seitlich vom Nabel, wechseln). Drei Verbote: (1) NICHT aspirieren (Hämatom-Risiko), (2) NICHT reiben nach Injektion (Hämatom-Risiko), (3) Luftbläschen NICHT entfernen (absichtlicher Luftblock).",
    },
    stufe2: {
      typ: "hinweis",
      text: "NMH-Injektion: mindestens 5 cm seitlich vom Bauchnabel, abwechselnd links/rechts. Hautfalte abheben und bis Ende halten. Nadel im 90°-Winkel. NICHT aspirieren, NICHT reiben, Luftbläschen NICHT entfernen — das ist der absichtliche Luftblock.",
      textB1:
        "NMH-Spritze in die Bauchhaut: mindestens 5 cm vom Nabel, links und rechts wechseln. Hautfalte halten. Nadel gerade rein. Drei Verbote: NICHT zurückziehen und prüfen (aspirieren), NICHT reiben danach, Luftbläschen in der Spritze NICHT raus — das ist so gewollt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-07",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-spritztechnik",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "prozedur",
        imageAlt:
          "Bauchhaut mit markierten Injektionszonen (mindestens 5 cm vom Nabel), Hautfalte zwischen Daumen und Zeigefinger, Nadel im 90°-Winkel",
        bildhinweis:
          "Diagram of abdomen showing injection zones (both sides, at least 5 cm from navel), fingers pinching skin fold, syringe inserted at 90° angle. German labels: 5 cm Nabelabstand, Hautfalte, 90° Einstichwinkel. Minimal SVG style, no extra text.",
        contentC1: {
          title: "NMH-Spritztechnik: Schritt für Schritt",
          body: "Die korrekte NMH-Spritzentechnik folgt einer klaren Reihenfolge. **Vorbereitung:** Händedesinfektion, Patient informieren, Stelle auswählen (min. 5 cm seitlich vom Nabel, abwechselnd links/rechts, nicht in Narbe oder blauen Fleck). **Durchführung:** Hautfalte zwischen Daumen und Zeigefinger abheben. Nadel im 90°-Winkel vollständig einstechen. Wirkstoff langsam injizieren, dabei Hautfalte halten. Erst nach vollständiger Injektion Nadel zurückziehen. **Die drei Verbote — und warum:** (1) **KEIN Aspirieren** — verursacht Hämatome ohne Nutzen (s.c., nicht i.m.). (2) **KEIN Reiben nach Injektion** — Hauptursache für Hämatome. (3) **Luftbläschen NICHT entfernen** — absichtlicher Luftblock, damit Wirkstoff vollständig im Gewebe bleibt. **Danach:** Dokumentation, Injektionsstelle wechseln.",
          glossarBegriffe: ["Niedermolekulares Heparin (NMH)"],
        },
        contentB1: {
          title: "NMH-Spritze geben: So geht es richtig",
          body: "So gibst du die NMH-Spritze: **Schritt 1:** Hände desinfizieren. Patient sagen, was du machst. **Schritt 2:** Stelle suchen — mindestens 5 cm vom Bauchnabel. Links und rechts wechseln. Keine Narben, keine blauen Flecken. **Schritt 3:** Hautfalte zwischen Daumen und Zeigefinger hochziehen. **Schritt 4:** Nadel gerade (90°) einstechen. **Schritt 5:** Langsam einspritzen. Hautfalte halten. **Schritt 6:** Nadel rausziehen. Dann Hautfalte loslassen. **Drei Dinge, die du NICHT tun darfst:** (1) **Nicht zurückziehen und prüfen (aspirieren)** — macht blaue Flecken. (2) **Nicht reiben danach** — macht blaue Flecken. (3) **Luftblasen NICHT rausmachen** — die sind absichtlich drin.",
          glossarBegriffe: ["Niedermolekulares Heparin (NMH)"],
        },
      },
    },
    glossarBegriffe: ["Niedermolekulares Heparin (NMH)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: mtps-anwendung-indikation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-mtps",
    themaId: "thrombose-prophylaxe",
    titel: "MTPS: Indikation und korrekte Anwendung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dein Kollege sagt: 'MTPS legen wir allen stationären Patienten an, sicher ist sicher.' Was sagst du dazu?",
      antwort:
        "Das ist nicht mehr leitliniengerecht. Die aktuelle AWMF-Leitlinie sieht MTPS kritischer: klare Indikation nur noch, wenn medikamentöse Prophylaxe kontraindiziert ist (z.B. akute Blutung, HIT). Zusatznutzen zu NMH ist nicht eindeutig belegt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "MTPS (Medizinische Thromboseprophylaxe-Strümpfe) haben einen definierten Druckverlauf (höchster Druck am Knöchel). Aktuelle AWMF-Leitlinie sieht sie kritischer: klare Indikation nur noch, wenn medikamentöse Prophylaxe kontraindiziert ist (Blutungsrisiko).",
      textB1:
        "MTPS sind spezielle Kompressionsstrümpfe — kein normaler Stützstrumpf. Der höchste Druck ist am Knöchel. Aktuelle Leitlinien sagen: Nicht für alle Patienten. Nur wenn eine Spritze nicht möglich ist (z.B. wegen Blutung).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-mtps",
        tag: "pflege",
        displayFormat: "beforeafter",
        bildkategorie: "szene",
        imageAlt:
          "Zwei Beine: links korrekt angelegter MTPS (glatt, bis Knie), rechts falsch angelegter MTPS (umgeschlagen, Falten am Knöchel als Druckstelle markiert)",
        bildhinweis:
          "Side-by-side comparison of two legs: left leg with correctly applied MTPS stockings (smooth, no wrinkles, reaching the knee), right leg with incorrectly applied MTPS (rolled over at top, wrinkles at ankle creating pressure point marked red). Minimal SVG style, absolutely no text.",
        contentC1: {
          title: "MTPS: Wann, wie — und für wen wirklich?",
          body: "MTPS sind **Medizinprodukte** mit definiertem Druckverlauf: höchster Druck am Knöchel (ca. 18-21 mmHg), abnehmend nach proximal. Das aktiviert den venösen Rückfluss. **Aktuelle Leitlage:** Die AWMF S3-Leitlinie sieht MTPS kritischer. Große Studien (CLOTS nach Schlaganfall, Hüft-TEP-Studien) zeigten: Zusatznutzen zu NMH ist nicht eindeutig belegt. **Klare Indikation** bleibt nur noch, wenn medikamentöse Prophylaxe kontraindiziert ist (z.B. akute Blutung, HIT). **Korrekte Anlage:** Morgens vor dem Aufstehen anlegen (vor Beinödem). **Faltenfrei** — Falten verursachen Druckstellen! Richtige Größe messen (Knöchel, Wade). Tagsüber tragen, nachts ausziehen. Merke: 'Sicher ist sicher' ist kein Argument gegen die Leitlinie.",
          glossarBegriffe: ["MTPS (Medizinische Thromboseprophylaxe-Strümpfe)"],
        },
        contentB1: {
          title: "MTPS: Wann anlegen und wie?",
          body: "MTPS sind **spezielle Kompressionsstrümpfe** — kein normaler Stützstrumpf aus dem Supermarkt. Sie drücken das Blut in den Beinvenen nach oben. **Wann anlegen?** Nur wenn eine Spritze (NMH) nicht möglich ist — zum Beispiel bei starker Blutungsneigung. Nicht einfach bei allen Patienten. **Wie anlegen?** Morgens anlegen — bevor der Patient aufsteht (sonst sind die Beine schon angeschwollen). **Wichtig: Keine Falten im Strumpf!** Falten drücken auf die Haut und machen Wunden. Richtige Größe messen. Tagsüber tragen, nachts ausziehen.",
          glossarBegriffe: ["MTPS (Medizinische Thromboseprophylaxe-Strümpfe)"],
        },
      },
    },
    glossarBegriffe: ["MTPS (Medizinische Thromboseprophylaxe-Strümpfe)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: mtps-kontraindikation-pavk (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-mtps-kontraindikation",
    themaId: "thrombose-prophylaxe",
    titel: "MTPS-Kontraindikation: pAVK und Knöchel-Arm-Index",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 78-jähriger Raucher kommt mit Pneumonie. Seine Füße sind kühl und blass. Die Anordnung lautet: MTPS anlegen. Was tust du?",
      antwort:
        "Nicht anlegen ohne Abklärung. Kühle, blasse Füße sind klassische pAVK-Zeichen. Bei Verdacht auf pAVK muss der Knöchel-Arm-Index (ABI) geprüft werden. ABI <0,5 = absolute Kontraindikation für MTPS. Arzt informieren, Beobachtung dokumentieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Periphere arterielle Verschlusskrankheit (pAVK) ist harte Kontraindikation für MTPS. Kühle, blasse oder livide Füße sind Warnzeichen. Vor Anlage: Knöchel-Arm-Index (ABI) prüfen oder ärztliche Freigabe einholen. ABI <0,5 = absolute Kontraindikation.",
      textB1:
        "Wenn die Füße kalt, blass oder bläulich sind, könnte das pAVK bedeuten — die Arterien im Bein sind verengt. Bei pAVK ist MTPS verboten. Der Knöchel-Arm-Index (ABI) zeigt, ob die Durchblutung ausreicht. ABI unter 0,5 = MTPS absolute verboten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-mtps-kontraindikation",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "MTPS-Kontraindikation: pAVK ist eine Grenze",
          body: "Die gefährlichste MTPS-Kontraindikation ist die **periphere arterielle Verschlusskrankheit (pAVK)**. Bei pAVK sind die Beinarterien verengt — die Durchblutung des Fußes ist bereits reduziert. Ein MTPS drückt auf das Bein — das kann die ohnehin schwache arterielle Durchblutung weiter beeinträchtigen. **Folge:** Druckschäden, Hautnekrosen, im Extremfall Amputation. Deshalb: Vor Erstanlage **IMMER** die arterielle Durchblutung abklären. Standard ist der **Knöchel-Arm-Index (ABI)** — Blutdruck am Knöchel ÷ Blutdruck am Arm. **ABI <0,5 = schwere pAVK = absolute Kontraindikation.** ABI 0,5-0,9 = nur mit ärztlicher Freigabe und engmaschiger Kontrolle. Weitere Kontraindikationen: dekompensierte Herzinsuffizienz, septische Phlebitis, akute Hautinfektionen, schwere diabetische Neuropathie. **Als Pflegefachperson:** Bei Verdacht NIE einfach anlegen. Arzt informieren, ABI-Befund prüfen, dokumentieren.",
          glossarBegriffe: ["pAVK (Periphere arterielle Verschlusskrankheit)", "ABI (Knöchel-Arm-Index)", "MTPS (Medizinische Thromboseprophylaxe-Strümpfe)"],
        },
        contentB1: {
          title: "Wann dürfen MTPS NICHT angelegt werden?",
          body: "MTPS darf man **nicht anlegen**, wenn die Durchblutung in den Beinarterien schlecht ist. Das nennt sich **pAVK** — die Arterien im Bein sind verengt. **Zeichen für pAVK:** Füße sind kalt, blass oder bläulich. **Was du tun musst:** Nicht einfach anlegen. Den Arzt informieren. Der **Knöchel-Arm-Index (ABI)** zeigt, wie gut die Durchblutung ist. Man misst den Blutdruck am Knöchel und am Arm und vergleicht. **ABI unter 0,5 = MTPS ist absolut verboten.** Bei MTPS trotz pAVK können Druckwunden entstehen — bis hin zu Gewebetod (Nekrose). **Merke: Immer erst abklären, dann anlegen.**",
          glossarBegriffe: ["pAVK (Periphere arterielle Verschlusskrankheit)", "ABI (Knöchel-Arm-Index)", "MTPS (Medizinische Thromboseprophylaxe-Strümpfe)"],
        },
      },
    },
    glossarBegriffe: ["pAVK (Periphere arterielle Verschlusskrankheit)", "ABI (Knöchel-Arm-Index)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: ipk-pneumatische-kompression (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-ipk",
    themaId: "thrombose-prophylaxe",
    titel: "IPK: Intermittierende Pneumatische Kompression",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor: Ein Gerät pumpt rhythmisch Luft in Manschetten um die Waden und drückt sie zusammen. Was bewirkt das — und wann könnte man es einsetzen?",
      antwort:
        "Das ahmt die Wadenmuskelpumpe nach und presst das venöse Blut nach oben. Einsatz (IPK): wenn medikamentöse Prophylaxe kontraindiziert ist oder zusätzlich bei Hochrisikopatienten (z.B. nach Schlaganfall). Kontraindiziert bei akuter TVT.",
    },
    stufe2: {
      typ: "hinweis",
      text: "IPK (Intermittierende Pneumatische Kompression) sind Geräte mit Luftmanschetten, die rhythmisch die Waden zusammendrücken — ahmt die Wadenmuskelpumpe nach. Einsatz: wenn medikamentöse Prophylaxe kontraindiziert ist oder zusätzlich bei Hochrisiko.",
      textB1:
        "IPK ist ein Gerät mit Luftkissen um die Waden. Es pumpt auf und lässt Luft wieder raus — immer wieder. So wird das Blut nach oben gedrückt, wie beim Gehen. Man setzt es ein, wenn die Spritze (NMH) nicht möglich ist.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015", "CLOTS-3-Studie 2013"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-ipk",
        tag: "pflege",
        displayFormat: "analogy",
        contentC1: {
          title: "IPK: Künstliche Wadenmuskelpumpe",
          body: "Die **Intermittierende Pneumatische Kompression (IPK)** ist eine mechanische Prophylaxe: Luftkissen-Manschetten werden um die Waden gelegt und ein Gerät pumpt sie rhythmisch auf und lässt die Luft wieder ab. Das presst das venöse Blut nach oben — wie eine **künstliche Wadenmuskelpumpe.** Indikation nach AWMF-Leitlinie: wenn medikamentöse Prophylaxe kontraindiziert ist, oder bei Hochrisikopatienten zusätzlich zu NMH (z.B. nach Schlaganfall, nach großen OPs). CLOTS-3-Studie zeigte Wirksamkeit bei Schlaganfall-Patienten. Tragezeit: mehrere Stunden pro Tag. **Kontraindikationen:** pAVK, akute TVT (Embolie-Risiko durch Thrombuslösung!), schwere Herzinsuffizienz.",
          glossarBegriffe: ["IPK (Intermittierende Pneumatische Kompression)", "Wadenmuskelpumpe"],
        },
        contentB1: {
          title: "IPK: Das Gerät, das die Wadenpumpe imitiert",
          body: "**IPK** ist ein Gerät mit Luftkissen um die Waden. Es pumpt auf und lässt die Luft wieder raus — rhythmisch, immer wieder. Das drückt das Blut nach oben. **Wie beim Gehen, aber ohne Bewegung.** **Wann einsetzen?** Wenn die Spritze (NMH) nicht möglich ist. Oder zusätzlich bei sehr hohem Risiko. **Wann ist es verboten?** Bei einer bestehenden Thrombose (TVT) — das Gerät könnte das Gerinnsel lösen und eine Lungenembolie auslösen! Auch bei schlechter Arteriendurchblutung (pAVK) und schwerer Herzschwäche.",
          glossarBegriffe: ["IPK (Intermittierende Pneumatische Kompression)", "Wadenmuskelpumpe"],
        },
      },
    },
    glossarBegriffe: ["IPK (Intermittierende Pneumatische Kompression)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: tvt-symptome-homans-veraltet (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-tvt-symptome",
    themaId: "thrombose-prophylaxe",
    titel: "TVT-Symptome und das veraltete Homans-Zeichen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du vermutest bei deinem Patienten eine tiefe Venenthrombose. Welche Zeichen siehst du beim Vergleich der Beine — und welchen klassischen Test solltest du NICHT mehr durchführen?",
      antwort:
        "Leitsymptome TVT: einseitige Beinschwellung, Wadenschmerz, Überwärmung, livide Verfärbung, verstärkte Venenzeichnung. Das Homans-Zeichen (Dorsalflexion des Fußes) ist veraltet, unzuverlässig und gefährlich — kann Thrombusteile lösen. Moderner Standard: Wells-Score + D-Dimer + Kompressionssonographie.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Leitsymptome TVT: einseitige Beinschwellung, Wadenschmerz (beim Auftreten), Überwärmung, livide Verfärbung, verstärkte Venenzeichnung. Achtung: 50% der TVT sind klinisch stumm! Das Homans-Zeichen gilt heute als veraltet, unzuverlässig — und kann Thrombusteile lösen.",
      textB1:
        "Zeichen einer tiefen Beinvenenthrombose: Ein Bein ist dicker als das andere. Das Bein schmerzt beim Auftreten. Das Bein fühlt sich wärmer an. Bläulich-rötliche Verfärbung. Manchmal sind keine Zeichen sichtbar. Das Homans-Zeichen (Fuß nach oben biegen) macht man NICHT mehr — es ist gefährlich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-11",
        phase: 1,
        stepType: "hotspot",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-tvt-symptome",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "szene",
        imageAlt:
          "Zwei Beine im Vergleich: linkes Bein normal, rechtes Bein mit TVT-Zeichen — geschwollen, bläulich-rötlich verfärbt, sichtbare oberflächliche Venen",
        bildhinweis:
          "Side-by-side comparison of two lower legs: left leg normal, right leg showing DVT signs — clearly swollen in the calf area, bluish-reddish discoloration, prominent surface veins visible. Labeled areas: Schwellung, Überwärmung, Verfärbung, Venenzeichnung. Clean medical illustration style, absolutely no text labels.",
        contentC1: {
          title: "TVT-Symptome erkennen — und das Homans-Zeichen vergessen",
          body: "Die klassischen **Leitsymptome** einer TVT: **Einseitige Beinschwellung** (das betroffene Bein ist dicker — Umfang messen!), **Wadenschmerz** (besonders beim Auftreten), **Überwärmung** (mit Handrücken vergleichen), **livide-zyanotische Verfärbung** (bläulich-rot), **verstärkte Venenzeichnung** (Pratt-Warnvenen). ABER: Etwa **50% aller TVT** verlaufen klinisch stumm oder mit wenigen Symptomen. Bei Risikopatienten: auf subtile Zeichen achten, regelmäßig Beine vergleichen, bei Verdacht sofort melden. **WICHTIG:** Das **Homans-Zeichen** (Wadenschmerz bei Dorsalflexion des Fußes) gilt heute als **veraltet und gefährlich**. Sensitivität nur 60-90%, Spezifität schlecht — und das Manöver kann Thrombusteile lösen → Lungenembolie. Moderner Standard: **Wells-Score + D-Dimer + Kompressionssonographie.** Deine Rolle: Beobachten, melden — nicht provozieren.",
          glossarBegriffe: ["Homans-Zeichen", "Tiefe Venenthrombose (TVT)"],
        },
        contentB1: {
          title: "TVT-Zeichen erkennen: Was du beobachten musst",
          body: "Eine Beinvenen-Thrombose erkennt man an diesen Zeichen: **Ein Bein ist dicker** als das andere. Umfang messen! **Schmerz in der Wade** — besonders beim Gehen oder Auftreten. **Ein Bein fühlt sich wärmer an** als das andere. **Bläulich-rötliche Farbe** in der Haut. **Man sieht mehr Venen** unter der Haut. **Aber Achtung:** Die Hälfte aller Thrombosen hat keine klaren Zeichen! Deshalb: immer beobachten, vergleichen, bei Verdacht melden. **Das Homans-Zeichen machst du NICHT.** Früher hat man den Fuß nach oben gebogen — wenn die Wade schmerzt, sollte das eine Thrombose anzeigen. Aber der Test ist unzuverlässig und **gefährlich**: Er kann das Gerinnsel lösen und eine Lungenembolie auslösen.",
          glossarBegriffe: ["Homans-Zeichen", "Tiefe Venenthrombose (TVT)"],
        },
      },
    },
    glossarBegriffe: ["Homans-Zeichen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: lungenembolie-notfall-erkennung (Bloom 6)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-lungenembolie-notfall",
    themaId: "thrombose-prophylaxe",
    titel: "Lungenembolie-Notfall: Erkennen und sofort handeln",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du betrittst das Zimmer von Frau M. — 3 Tage nach Hüft-OP. Sie wirkt unruhig, atmet schnell, klagt über plötzlichen Thoraxschmerz und Atemnot. Was tust du zuerst?",
      antwort:
        "Sofort Notruf/Arzt rufen — Zeit = Leben. Patient nicht allein lassen, beruhigen. Lagerung: Oberkörper hoch bei Dyspnoe. O2-Gabe. Keine Bewegung des Patienten zulassen. Monitoring vorbereiten. Das ist ein lebensbedrohlicher Notfall — jede Minute zählt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Leitsymptome akute Lungenembolie: plötzliche Atemnot (80%), Thoraxschmerz, Tachykardie, Tachypnoe, Zyanose, Angst/Unruhe, Kollaps. Bei Verdacht: SOFORT Notruf/Arzt, O2, flach oder Oberkörper hoch, Patient beruhigen, KEINE Bewegung, Monitoring.",
      textB1:
        "Zeichen einer Lungenembolie: Plötzliche Atemnot, Schmerz in der Brust, schneller Puls, Angst, blaue Lippen. Was tun? Sofort Arzt rufen. Patient nicht allein lassen. Oberkörper hoch lagern. Sauerstoff geben. Patientin darf sich NICHT bewegen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 6,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-lungenembolie-notfall",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "szene",
        imageAlt:
          "Pflegefachperson im Patientenzimmer greift zum Notrufknopf, Patientin im Bett mit Atemnot — Hand an Brust, angestrengtes Gesicht",
        bildhinweis:
          "Nurse in patient room reaching for emergency call button, patient in bed showing signs of respiratory distress (hand on chest, labored breathing expression), urgent but professional atmosphere, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Lungenembolie-Notfall: Jede Minute zählt",
          body: "Die Erkennung einer Lungenembolie ist eine deiner wichtigsten Pflegekompetenzen — weil sie lebensrettend ist. **Typische Symptome:** Plötzliche Atemnot (Dyspnoe, **80% aller Fälle**), atemabhängiger Thoraxschmerz (meist stechend, lateral), Tachykardie >100/min, Tachypnoe >20/min, Zyanose (Lippen/Nagelbetten blau), Unruhe, Todesangst, Schwindel, Synkope. **Wichtig:** Symptome können unspezifisch sein. Bei jedem Risikopatienten (postoperativ, immobil, Tumor) mit neu aufgetretener Atemnot: Lungenembolie ausschließen! **Sofortmaßnahmen bei Verdacht:** (1) **Notruf/Arzt SOFORT** — Zeit = Leben. (2) Patientin **NICHT allein lassen**, beruhigen. (3) **Lagerung:** bei Schock flach, bei Dyspnoe Oberkörper hoch. (4) **O2-Gabe** (4-6 L/min). (5) **Monitoring:** Pulsoxymetrie, Blutdruck, Puls. (6) Venösen Zugang vorbereiten. (7) **KEINE körperliche Belastung** — nicht aufstehen, nicht Toilette. (8) Dokumentation sobald möglich. Merke: Lieber einmal zu oft den Notruf als einmal zu spät.",
          glossarBegriffe: ["Lungenembolie"],
        },
        contentB1: {
          title: "Lungenembolie: Das ist ein Notfall — sofort handeln",
          body: "Eine Lungenembolie ist lebensbedrohlich. So erkennst du sie: **Plötzliche Atemnot** — das häufigste Zeichen. **Schmerz in der Brust** — oft beim Einatmen. **Schneller Puls** (über 100). **Angst, Unruhe, Todesangst.** **Blaue Lippen oder Nagelbetten** (Zyanose). **Was tust du sofort?** (1) **Arzt/Notruf SOFORT rufen.** Nicht warten, nicht schauen ob es besser wird. (2) Patientin **nicht allein lassen.** Beruhigen, bei ihr bleiben. (3) **Lagerung:** Oberkörper hoch bei Atemnot. Bei Schock: flach legen. (4) **Sauerstoff geben.** (5) Puls und Sauerstoff messen. (6) **Keine Bewegung.** Patientin darf nicht aufstehen, nicht zur Toilette. (7) Dokumentieren. Merke: Lieber einmal zu viel den Notruf als einmal zu wenig.",
          glossarBegriffe: ["Lungenembolie"],
        },
      },
    },
    glossarBegriffe: ["Lungenembolie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: pflegeaufgabe-beobachten-melden-dokumentieren (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-pflegerolle",
    themaId: "thrombose-prophylaxe",
    titel: "Pflegerische Kernaufgaben bei der Thromboseprophylaxe",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Kollegin sagt: 'Thrombose ist Arzt-Sache, wir machen nur Spritzen.' Stimmt das? Was ist die Kern-Verantwortung der Pflege bei der Thromboseprophylaxe?",
      antwort:
        "Nein, so stimmt das nicht. Die Pflege trägt Kernverantwortung: Beobachten (Beine vergleichen, Vitalzeichen), Assessment dokumentieren, Maßnahmen durchführen (NMH, MTPS, Mobilisation), bei Verdacht SOFORT melden — nicht auf Visite warten, lückenlos dokumentieren. Rechtsgrundlage: vorbehaltene Tätigkeit nach § 4 PflBG.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflege macht keine Diagnosen, aber trägt Kern-Verantwortung: Beobachten (Beine vergleichen, Vitalzeichen), Assessment dokumentieren, Maßnahmen durchführen (Mobilisation, NMH, MTPS), bei Verdacht SOFORT melden, lückenlos dokumentieren.",
      textB1:
        "Die Pflege macht keine Diagnosen, aber ist für viel verantwortlich: Beine täglich vergleichen, Risiko einschätzen, Spritzen geben und Strümpfe anlegen, Patienten zur Bewegung bringen, bei Verdacht sofort Arzt rufen, alles dokumentieren.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "V.1",
        quellen: ["§ 4 PflBG", "AWMF S3-Leitlinie VTE 2015"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-pflegerolle",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegerische Kernaufgaben bei der Thromboseprophylaxe",
          body: "Die Thromboseprophylaxe ist interdisziplinär — aber die Pflege hat die **Kern-Rolle an der Front.** Was du NICHT machst: Diagnosen stellen, Medikamente eigenständig anordnen. Was du MACHST und **verantwortest:** **(1) BEOBACHTEN** — täglich beide Beine vergleichen (Umfang messen bei Verdacht), Hautfarbe, Überwärmung, Atemfrequenz, Vitalzeichen. **(2) ASSESSMENT** — Risiko-Score bei Aufnahme erheben, bei Zustandsänderung wiederholen, dokumentieren. **(3) DURCHFÜHREN** — NMH subkutan nach ärztlicher Anordnung, MTPS anlegen (nach Indikationsprüfung!), Mobilisation aktiv unterstützen. **(4) MELDEN** — bei Verdacht auf TVT oder LE **SOFORT** Arzt. Nicht auf Visite warten. **(5) DOKUMENTIEREN** — alle Beobachtungen, Maßnahmen, Auffälligkeiten. 'Was nicht dokumentiert ist, gilt als nicht durchgeführt.' Rechtlich: **vorbehaltene Tätigkeit nach § 4 PflBG.**",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Was ist Aufgabe der Pflege bei der Thrombose-Prophylaxe?",
          body: "Die Pflege ist sehr wichtig bei der Thrombose-Vorbeugung. Hier sind deine 5 Kernaufgaben: **(1) SCHAUEN** — Jeden Tag beide Beine vergleichen. Ist ein Bein dicker? Wärmer? Verfärbt? Auch Vitalzeichen messen. **(2) RISIKOEINSCHÄTZUNG** — Schon bei Aufnahme: Wie hoch ist das Thromboserisiko? Aufschreiben. Bei Zustandsänderung wiederholen. **(3) MASSNAHMEN** — Spritzen geben (NMH), Strümpfe anlegen (MTPS — wenn erlaubt!), Patient zum Gehen motivieren. **(4) MELDEN** — Bei Verdacht auf Thrombose oder Lungenembolie: Arzt sofort rufen. Nicht auf die Visite warten. **(5) DOKUMENTIEREN** — Alles aufschreiben. Was nicht dokumentiert ist, gilt als nicht gemacht. Merke: **Ohne Pflege keine wirksame Prophylaxe.**",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: herz-aufbau-herzzyklus (Bloom 2) — AP-2 LE6 #2 (Herz)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-herz-aufbau",
    themaId: "thrombose-prophylaxe",
    titel: "Das Herz: Aufbau und Herzzyklus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum hat das Herz vier Räume und zwei getrennte Hälften — und nicht einfach einen großen Pumpraum? Was wäre das Problem, wenn die beiden Blutkreisläufe sich vermischen würden?",
      antwort:
        "Die Herzscheidewand trennt das Herz in zwei Pumpen: Die rechte Hälfte pumpt sauerstoffarmes Blut in den Lungenkreislauf, die linke Hälfte sauerstoffreiches Blut in den Körperkreislauf. Würden sie sich mischen, käme sauerstoffarmes Blut in den Körper — die Organe würden nicht versorgt. Jede Hälfte hat einen Vorhof (Sammelkammer) und eine Kammer (Druckpumpe), die Klappen lassen das Blut nur in eine Richtung. (I Care Anatomie, Kap. 6)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das Herz hat 4 Räume: rechter Vorhof + rechte Kammer, linker Vorhof + linke Kammer; die Scheidewand teilt es in 2 Hälften. Rechte Hälfte → Lungenkreislauf (sauerstoffarm), linke Hälfte → Körperkreislauf (sauerstoffreich, dickere Wand). 4 Klappen sichern die Flussrichtung (rechts Trikuspidal + Pulmonal, links Mitral + Aorta). Herzzyklus: Systole (Auswurf) + Diastole (Füllung). Richtwerte: HF 60-80/min, Schlagvolumen ca. 70 ml, HZV ca. 5 l/min. Takt: Sinusknoten → AV-Knoten → His → Purkinje. (I Care Anatomie, Kap. 6)",
      textB1:
        "Das Herz hat 4 Räume: oben 2 Vorhöfe (Sammelräume), unten 2 Kammern (Pumpen). Eine Wand teilt es in eine rechte und eine linke Hälfte. Rechts pumpt es Blut zur Lunge (sauerstoffarm), links zum Körper (sauerstoffreich). 4 Klappen sorgen dafür, dass das Blut nur in eine Richtung fließt. Das Herz schlägt etwa 60-80 mal pro Minute. Anspannen heißt Systole, Erschlaffen heißt Diastole.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-14-herz",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["I Care Anatomie, Kap. 6 (Herz: Aufbau, Klappen, Herzzyklus, Erregungsleitung)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-herz-aufbau",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Das Herz: Aufbau und Herzzyklus",
          body: "Das Herz ist eine **Doppelpumpe**, etwa faustgroß, kegelförmig und schräg im Brustkorb gelegen — die Spitze zeigt nach links unten (etwa 5. Zwischenrippenraum) (I Care Anatomie, Kap. 6).\n\n**4 Räume, 2 Hälften:**\nDie **Herzscheidewand (Septum)** teilt das Herz in eine **rechte** und eine **linke Hälfte**. Jede Hälfte hat:\n- einen **Vorhof** (Atrium) — sammelt das ankommende Blut\n- eine **Kammer** (Ventrikel) — die eigentliche Druckpumpe\n\nDie **rechte Hälfte** pumpt sauerstoffarmes Blut in den **Lungenkreislauf** (kleiner Kreislauf). Die **linke Hälfte** pumpt sauerstoffreiches Blut in den **Körperkreislauf** (großer Kreislauf) — ihre Wand ist deshalb dicker (ca. 10-12 mm), weil sie gegen höheren Druck arbeitet.\n\n**4 Herzklappen** (Ventile, lassen Blut nur in eine Richtung):\n- rechts: **Trikuspidalklappe** (Vorhof → Kammer) und **Pulmonalklappe** (Kammer → Lungenarterie)\n- links: **Mitralklappe** (Bikuspidalklappe, Vorhof → Kammer) und **Aortenklappe** (Kammer → Aorta)\n\n**Herzwand** (von innen nach außen): **Endokard** (Innenhaut), **Myokard** (Muskelschicht), **Epikard** (Außenhaut); umhüllt vom **Herzbeutel** (Perikard).\n\n**Der Herzzyklus** ist der ständige Wechsel aus:\n- **Systole** — Anspannung und **Auswurf** des Blutes\n- **Diastole** — Erschlaffung und **Füllung**\n\n**Richtwerte:** Herzfrequenz **60-80/min**, Schlagvolumen **ca. 70 ml**, Herzzeitvolumen **ca. 5 l/min**.\n\n**Der Takt** kommt vom herzeigenen Erregungssystem: **Sinusknoten** (Taktgeber) → **AV-Knoten** → **His-Bündel** → **Tawara-Schenkel** → **Purkinje-Fasern**. Das Herz selbst wird über die **Koronararterien** versorgt — ein Verschluss führt zum Herzinfarkt.\n\n**Pflege-Relevanz:** Du überwachst die Herzarbeit über **Puls und Blutdruck**; bei Herzschwäche (Herzinsuffizienz) achtest du z.B. auf Ödeme, Atemnot und Gewicht. (I Care Anatomie, Kap. 6)",
          glossarBegriffe: ["Herz (Aufbau)", "Herzzyklus (Systole/Diastole)", "Herzklappen"],
        },
        contentB1: {
          title: "Das Herz: Aufbau und Herzzyklus",
          body: "Das Herz ist eine **Doppelpumpe**, etwa so groß wie eine Faust. Es liegt schräg im Brustkorb, die Spitze zeigt nach links unten (I Care Anatomie, Kap. 6).\n\n**4 Räume, 2 Hälften:**\nEine **Wand (Scheidewand)** teilt das Herz in **rechts** und **links**. Jede Hälfte hat:\n- einen **Vorhof** oben — er sammelt das Blut\n- eine **Kammer** unten — sie pumpt das Blut weiter\n\nDie **rechte Hälfte** pumpt Blut zur **Lunge** (sauerstoffarm). Die **linke Hälfte** pumpt Blut zum **Körper** (sauerstoffreich). Die linke Wand ist dicker, weil sie kräftiger pumpen muss.\n\n**4 Klappen** sorgen dafür, dass das Blut nur **in eine Richtung** fließt: rechts Trikuspidal- und Pulmonalklappe, links Mitral- und Aortenklappe.\n\n**Die Herzwand** hat 3 Schichten: innen das **Endokard**, in der Mitte der Muskel (**Myokard**), außen das **Epikard**. Außen liegt der **Herzbeutel**.\n\n**Der Herzschlag** wechselt ständig:\n- **Systole** = anspannen und Blut **auswerfen**\n- **Diastole** = erschlaffen und sich **füllen**\n\n**Werte:** Herz schlägt **60-80 mal pro Minute**, jedes Mal ca. **70 ml**, zusammen **ca. 5 Liter pro Minute**.\n\nDer Takt kommt vom **Sinusknoten** (der 'Taktgeber'). Das Herz selbst bekommt Blut über die **Herzkranzgefäße** — sind sie verstopft, gibt es einen Herzinfarkt.\n\n**Für die Pflege:** Du misst **Puls und Blutdruck**. Bei Herzschwäche achtest du auf dicke Beine, Atemnot und Gewicht.",
          glossarBegriffe: ["Herz (Aufbau)", "Herzzyklus (Systole/Diastole)", "Herzklappen"],
        },
      },
    },
    glossarBegriffe: ["Herz (Aufbau)", "Herzzyklus (Systole/Diastole)", "Herzklappen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: blutgefaesse-kreislauf-puls (Bloom 2) — AP-2 LE6 #3/#4 (Gefäße, Puls)
  // ═══════════════════════════════════════════
  {
    bausteinId: "thrombose-prophylaxe-blutgefaesse-puls",
    themaId: "thrombose-prophylaxe",
    titel: "Blutgefäße, Kreislauf und Puls",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum schwellen die Beine an, wenn jemand lange unbewegt sitzt — und warum ist 'Bewegung' die wirksamste Thromboseprophylaxe? Welche zwei Mechanismen bringen das Venenblut überhaupt gegen die Schwerkraft nach oben?",
      antwort:
        "Venen transportieren das Blut zurück zum Herzen — nach oben, gegen die Schwerkraft. Dabei helfen zwei Dinge: die Muskelpumpe (arbeitende Muskeln drücken das Blut nach oben) und die Venenklappen (verhindern, dass es zurückfließt). Ohne Bewegung fehlt die Muskelpumpe, das Blut staut sich, die Beine schwellen und die Thrombosegefahr steigt. Deshalb aktiviert Bewegung die Muskelpumpe — die stärkste Basismaßnahme. (I Care Anatomie, Kap. 7)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Gefäßarten: Arterien (vom Herzen weg, Hochdrucksystem), Venen (zum Herzen hin, Niederdrucksystem, mit Venenklappen), Kapillaren (kleinste Gefäße, Stoffaustausch). Zwei Kreisläufe: Lungenkreislauf (klein) und Körperkreislauf (groß). Venöser Rückfluss gegen die Schwerkraft durch Muskelpumpe + Venenklappen + Atmung. Der Puls ist die tastbare Druckpulswelle der Arterien, ausgelöst durch den Auswurf in der Systole. (I Care Anatomie, Kap. 7)",
      textB1:
        "Es gibt 3 Arten von Gefäßen: Arterien führen Blut vom Herzen weg, Venen führen Blut zum Herzen hin, Kapillaren sind die kleinsten Gefäße (dort findet der Austausch von Sauerstoff statt). Das Blut fließt in zwei Kreisläufen: zur Lunge und zum Körper. In den Beinvenen muss das Blut nach oben — dabei helfen die Muskelpumpe und die Venenklappen. Der Puls ist die Welle, die du an Arterien dicht unter der Haut tasten kannst.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-thrombose-wb-15-gefaesse",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["I Care Anatomie, Kap. 7 (Blutgefäße, Körper-/Lungenkreislauf, venöser Rückfluss, Puls)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-thrombose-blutgefaesse-puls",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Blutgefäße, Kreislauf und Puls",
          body: "Die Blutgefäße bilden zusammen mit dem Herzen das **Herz-Kreislauf-System** (I Care Anatomie, Kap. 7).\n\n**Drei Gefäßarten:**\n- **Arterien** — führen das Blut **vom Herzen weg**. Sie sind ein **Hochdrucksystem** mit dicker, elastischer Wand.\n- **Venen** — führen das Blut **zum Herzen hin**. Sie sind ein **Niederdrucksystem** und besitzen **Venenklappen**.\n- **Kapillaren** — die kleinsten Gefäße. Hier findet der **Stoffaustausch** statt (Sauerstoff, Kohlendioxid, Nährstoffe).\n\n**Wichtig — nicht verwechseln:** Arterien sind über *Richtung* definiert (vom Herzen weg), **nicht** über den Sauerstoffgehalt. Im Lungenkreislauf führt die Lungenarterie z.B. sauerstoffarmes Blut.\n\n**Zwei Kreisläufe:**\n- **Lungenkreislauf** (kleiner Kreislauf): rechtes Herz → Lunge → linkes Herz. Hier wird das Blut mit Sauerstoff beladen.\n- **Körperkreislauf** (großer Kreislauf): linkes Herz → Organe → rechtes Herz. Hier gibt das Blut Sauerstoff ab.\n\n**Venöser Rückfluss — gegen die Schwerkraft:** Damit das Blut aus den Beinen zum Herzen zurückkommt, wirken zusammen:\n- die **Muskelpumpe** (v.a. die **Wadenmuskelpumpe**): arbeitende Muskeln drücken das Blut nach oben\n- die **Venenklappen**: sie verhindern, dass das Blut zurücksackt\n- die **Atmung** (Sog im Brustkorb)\n\n**Der Puls:** Bei jedem Auswurf (Systole) breitet sich eine **Druckpulswelle** über die Arterienwände aus. An Stellen, an denen größere Arterien **dicht unter der Haut** liegen (Handgelenk, Hals, Leiste), ist sie als **Puls tastbar**.\n\n**Pflege-Relevanz:**\n- **Thromboseprophylaxe = Muskelpumpe aktivieren**: Bewegung, Fußkreisen, Frühmobilisation; Beine hochlagern unterstützt den venösen Rückfluss\n- **Puls tasten** an der A. radialis (Handgelenk); bei Schock/Reanimation zentral an der A. carotis (Hals)\n- **Beim Waschen** an Armen und Beinen **Richtung Herz** wischen — das unterstützt den venösen Rückfluss (I Care Anatomie, Kap. 7)",
          glossarBegriffe: ["Arterien und Venen", "Puls (Druckpulswelle)", "Venöser Rückfluss"],
        },
        contentB1: {
          title: "Blutgefäße, Kreislauf und Puls",
          body: "Das Herz und die Gefäße bilden zusammen das **Herz-Kreislauf-System** (I Care Anatomie, Kap. 7).\n\n**Drei Arten von Gefäßen:**\n- **Arterien** — führen Blut **vom Herzen weg**. Hoher Druck, dicke Wand.\n- **Venen** — führen Blut **zum Herzen hin**. Niedriger Druck, mit **Venenklappen**.\n- **Kapillaren** — die kleinsten Gefäße. Hier wird **Sauerstoff** ausgetauscht.\n\n**Achtung:** Arterien heißen so, weil das Blut **vom Herzen weg** fließt — nicht, weil es sauerstoffreich ist. In der Lunge ist es umgekehrt.\n\n**Zwei Kreisläufe:**\n- **Lungenkreislauf:** rechtes Herz → Lunge → linkes Herz (Blut holt Sauerstoff)\n- **Körperkreislauf:** linkes Herz → Körper → rechtes Herz (Blut gibt Sauerstoff ab)\n\n**Blut zurück nach oben — gegen die Schwerkraft:** Damit das Blut aus den Beinen zurückkommt, helfen:\n- die **Muskelpumpe** (vor allem die **Wadenmuskelpumpe**): Muskeln drücken das Blut nach oben\n- die **Venenklappen**: sie halten das Blut, damit es nicht zurückfällt\n- die **Atmung**\n\n**Der Puls:** Bei jedem Herzschlag läuft eine **Druckwelle** durch die Arterien. Wo eine Arterie **dicht unter der Haut** liegt (Handgelenk, Hals, Leiste), kannst du den **Puls tasten**.\n\n**Für die Pflege:**\n- **Thromboseprophylaxe = Muskelpumpe in Gang bringen**: Bewegung, Fußkreisen; Beine hochlegen\n- **Puls tasten** am Handgelenk; im Notfall am Hals\n- **Beim Waschen** an Armen und Beinen **Richtung Herz** wischen",
          glossarBegriffe: ["Arterien und Venen", "Puls (Druckpulswelle)", "Venöser Rückfluss"],
        },
      },
    },
    glossarBegriffe: ["Arterien und Venen", "Puls (Druckpulswelle)", "Venöser Rückfluss"],
    karteikarten: [],
  },
];
