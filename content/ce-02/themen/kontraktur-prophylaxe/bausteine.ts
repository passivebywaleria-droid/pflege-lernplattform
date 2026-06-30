// CE-02 Thema Kontraktur-Prophylaxe — Wissensbausteine (9 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/kontraktur-prophylaxe/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥ 3)
// Stufe 2 = Hinweis (mittlere Schüler, Bloom 2-3)
// Stufe 3 = Erklärung als ContentStep (schwache Schüler, Bloom 1-2)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_KONTRAKTUR_PROPHYLAXE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: kontraktur-prophylaxe-definition (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-definition",
    themaId: "kontraktur-prophylaxe",
    titel: "Definition: Was ist eine Kontraktur?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hältst deinen Arm 2 Wochen im Gips. Was passiert danach mit deinem Ellenbogen — kannst du ihn sofort wieder ganz beugen und strecken?",
      antwort:
        "Eine Kontraktur ist eine dauerhafte Gelenkversteifung mit eingeschränkter aktiver und passiver Beweglichkeit plus verhärteter Muskulatur. Drei Merkmale: (1) aktive Bewegung eingeschränkt, (2) passive Bewegung eingeschränkt, (3) verhärtete Muskulatur mit erhöhtem Dehnungswiderstand. Kontrakturen sind meist prophylaxefähig.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Eine Kontraktur ist eine dauerhafte Gelenkversteifung. Das Gelenk lässt sich weder aktiv noch passiv voll bewegen. Typische Zeichen: Bewegungseinschränkung, verhärtete Muskulatur, Gelenkverformung. (Neutral-Null-Methode, AAOS)",
      textB1:
        "Eine Kontraktur ist eine Gelenkversteifung. Das Gelenk bleibt steif. Der Patient kann es nicht mehr richtig bewegen. Auch du kannst das Gelenk nicht mehr richtig bewegen, wenn du hilfst. Der Muskel ist hart.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["Bundesärztekammer (AAOS-Standard)", "MDS 2018"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-definition",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Definition: Was ist eine Kontraktur?",
          body: "Eine **Kontraktur** ist die dauerhafte Versteifung eines Gelenks mit eingeschränkter oder aufgehobener Beweglichkeit. Drei Merkmale gehören dazu: (1) die **aktive Bewegung** ist limitiert — der Patient kann das Gelenk nicht selbst voll strecken oder beugen; (2) die **passive Bewegung** ist ebenfalls eingeschränkt — auch wenn Pflegekräfte bewegen, stößt man an einen Widerstand; (3) die **Muskulatur ist verhärtet** und es zeigt sich ein erhöhter Widerstand gegen Dehnung. Betroffen sind meist **Schulter-, Ellenbogen-, Hüft- und Kniegelenk** sowie das **obere Sprunggelenk (Spitzfuß)**. Kontrakturen sind in der Pflege überwiegend **prophylaxefähig** — das heißt, durch rechtzeitige Bewegung und korrekte Positionierung vermeidbar. Abgrenzung: Eine vorübergehende Steifigkeit nach dem Aufwachen ist keine Kontraktur.",
          glossarBegriffe: ["Kontraktur", "aktive Bewegung", "passive Bewegung"],
        },
        contentB1: {
          title: "Was ist eine Kontraktur?",
          body: "Eine **Kontraktur** ist, wenn ein Gelenk steif wird und steif bleibt. Drei Zeichen siehst du: (1) Der Patient kann das Gelenk **selbst** nicht mehr voll bewegen. (2) Auch du kannst das Gelenk beim Helfen nicht mehr ganz bewegen. (3) Der **Muskel ist hart** und spannt sich gegen die Bewegung. Oft betroffen: Schulter, Ellenbogen, Hüfte, Knie und das Fußgelenk (Spitzfuß). Wichtig: **Kontrakturen kann man oft vermeiden**. Mit Bewegung und richtiger Lagerung verhinderst du, dass ein Gelenk steif wird. Steif nach dem Aufstehen ist keine Kontraktur.",
          glossarBegriffe: ["Kontraktur"],
        },
        question: {
          fragetext:
            "Welche 3 Merkmale hat eine Kontraktur? Wähle alle richtigen Antworten.",
          multiSelect: true,
          optionen: [
            {
              text: "Dauerhafte Einschränkung der aktiven Bewegung",
              isCorrect: true,
              explanation:
                "Richtig. Bei einer Kontraktur kann der Patient das Gelenk nicht mehr selbst voll bewegen.",
              explanationB1:
                "Richtig. Der Patient kann das Gelenk nicht mehr selbst bewegen.",
            },
            {
              text: "Eingeschränkte passive Bewegung (auch Pflege stößt auf Widerstand)",
              isCorrect: true,
              explanation:
                "Richtig. Auch wenn die Pflegekraft das Gelenk bewegt, gibt es einen Widerstand — das Gelenk ist nicht mehr frei beweglich.",
              explanationB1:
                "Richtig. Auch wenn du hilfst, geht das Gelenk nicht mehr ganz.",
            },
            {
              text: "Verhärtete Muskulatur mit erhöhtem Dehnungswiderstand",
              isCorrect: true,
              explanation:
                "Richtig. Die Muskeln um das Gelenk sind verhärtet und leisten Widerstand beim Dehnen.",
              explanationB1:
                "Richtig. Der Muskel ist hart und spannt sich gegen die Bewegung.",
            },
            {
              text: "Vorübergehende Steifigkeit nach dem Aufwachen",
              isCorrect: false,
              explanation:
                "Nicht ganz — die morgendliche Steifigkeit ist vorübergehend und löst sich nach kurzer Zeit. Eine Kontraktur ist dauerhaft und bessert sich nicht von selbst.",
              explanationB1:
                "Nein — steif am Morgen ist normal. Das geht wieder weg. Eine Kontraktur bleibt.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Kontraktur", "aktive Bewegung", "passive Bewegung", "Neutral-Null-Methode"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: kontraktur-prophylaxe-entstehung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-entstehung",
    themaId: "kontraktur-prophylaxe",
    titel: "Entstehungskette: Wie entsteht eine Kontraktur?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K. liegt nach einem schweren Schlaganfall seit 10 Tagen fast durchgehend im Bett. Welche Kette läuft in ihren Gelenken ab, bis ein Ellenbogen steif wird? Beschreibe die Schritte.",
      antwort:
        "Die Kette: Immobilität → Muskelverkürzung (Sarkomer-Anpassung) → Bindegewebsumbau um die Gelenkkapsel nach 4-14 Tagen → Gelenksteife. Die frühen Stufen sind reversibel — jeder Tag aktiver Bewegung zählt für die Prophylaxe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Kette läuft in drei Schritten: Immobilität → Muskelverkürzung → Kontraktur. Schon nach **4-14 Tagen** Ruhigstellung bildet sich elastisches Bindegewebe um die Gelenkkapsel. Der Bewegungsradius sinkt, das Gelenk versteift.",
      textB1:
        "Die Kette: **Wenig Bewegung → Muskel wird kürzer → Gelenk wird steif**. Nach **4 bis 14 Tagen** ohne Bewegung verändert sich das Gewebe um das Gelenk. Das Gelenk kann sich dann nicht mehr so weit bewegen wie vorher.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-02",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bundesärztekammer (AAOS-Standard)", "Bobath B. (1990)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-entstehung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Entstehungskette: Wie entsteht eine Kontraktur?",
          body: "Die Entstehung folgt einer klaren Kette: **Immobilität → Muskelverkürzung → Bindegewebsumbau → Gelenksteife.**\n\n**Schritt 1 — Immobilität:** Ein Mensch reduziert seinen Bewegungsradius. Gründe: Bettruhe nach OP, Schlaganfall, Schmerzen, Schonhaltung, demenzielle Abbauprozesse, freiheitsentziehende Maßnahmen (FeM, § 1831 BGB).\n\n**Schritt 2 — Muskelverkürzung:** Wird ein Muskel nicht mehr in seiner vollen Länge beansprucht, passt er seine Sarkomerzahl an. Er wird **kürzer und schwächer**. Der Dehnungswiderstand steigt.\n\n**Schritt 3 — Bindegewebsumbau (extraartikulär):** Bereits nach **4-14 Tagen** ohne Gelenkbewegung bildet sich um die Gelenkkapsel neues, weniger elastisches Bindegewebe. Die Gelenkkapsel selbst verkürzt sich.\n\n**Schritt 4 — Gelenksteife:** Der Bewegungsradius sinkt. Die Gelenke, die am häufigsten betroffen sind: **Schulter, Knie** und das **obere Sprunggelenk** (Spitzfuß).\n\nWichtig: Die ersten Veränderungen sind reversibel — deshalb zählt jeder Tag.",
          glossarBegriffe: ["Kontraktur", "Freiheitsentziehende Maßnahme (FeM)"],
        },
        contentB1: {
          title: "Wie entsteht eine Kontraktur?",
          body: "So entsteht eine Kontraktur:\n\n**Schritt 1 — Wenig Bewegung:** Der Mensch bewegt sich weniger. Gründe: Bettruhe, Schlaganfall, Schmerzen, Fixierung.\n\n**Schritt 2 — Muskel wird kürzer:** Ein Muskel, der nie ganz gedehnt wird, wird kürzer. Er fühlt sich hart an. Dehnen tut weh.\n\n**Schritt 3 — Gewebe verändert sich:** Schon nach **4 bis 14 Tagen** bildet sich neues Gewebe um das Gelenk. Dieses Gewebe ist **nicht so elastisch** wie vorher. Die Gelenkkapsel wird kürzer.\n\n**Schritt 4 — Gelenk wird steif:** Der Bewegungsweg wird kleiner. Am häufigsten: **Schulter, Knie und Fuß (Spitzfuß)**.\n\nMerke: Am Anfang kann man es noch zurückdrehen. **Jeder Tag zählt.**",
          glossarBegriffe: ["Kontraktur"],
        },
        question: {
          fragetext:
            "Nach wie vielen Tagen Ruhigstellung beginnt sich Bindegewebe um die Gelenkkapsel zu bilden?",
          optionen: [
            {
              text: "1-3 Tage",
              isCorrect: false,
              explanation:
                "Nicht ganz — so früh beginnen noch keine relevanten Bindegewebsveränderungen. Aber bereits nach wenigen Tagen ist Vorsicht geboten — besonders für den Spitzfuß.",
              explanationB1:
                "Nein — so früh noch nicht. Aber du sollst trotzdem sofort anfangen zu bewegen.",
            },
            {
              text: "4-14 Tage",
              isCorrect: true,
              explanation:
                "Richtig. Bereits nach 4-14 Tagen Ruhigstellung bildet sich weniger elastisches Bindegewebe um die Gelenkkapsel. Deshalb ist frühzeitige Bewegung so wichtig.",
              explanationB1:
                "Richtig. Nach 4 bis 14 Tagen fängt das Gewebe an, sich zu verändern. Deshalb: sofort bewegen.",
            },
            {
              text: "4-6 Wochen",
              isCorrect: false,
              explanation:
                "Nicht ganz — die ersten Bindegewebsveränderungen beginnen viel früher, bereits nach 4-14 Tagen. Ein Spitzfuß kann schon nach wenigen Tagen strikter Bettruhe entstehen.",
              explanationB1:
                "Nein — es geht viel schneller. Schon nach 4 bis 14 Tagen beginnen die Veränderungen.",
            },
            {
              text: "Nur bei bereits bestehender Vorschädigung",
              isCorrect: false,
              explanation:
                "Nicht ganz — Bindegewebsveränderungen entstehen durch Immobilität, nicht nur bei Vorschädigung. Jeder bettlägerige Patient ist gefährdet.",
              explanationB1:
                "Nein — das passiert bei jedem Menschen, der sich zu wenig bewegt.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Kontraktur", "Freiheitsentziehende Maßnahme (FeM)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: kontraktur-prophylaxe-funktionsstellung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-funktionsstellung",
    themaId: "kontraktur-prophylaxe",
    titel: "Funktionsstellung und Neutral-Null-Methode",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn ein Gelenk versteifen würde — in welcher Stellung wäre es für den Patienten am **wenigsten schlimm**? Denke an eine Hand: Faust zu oder flach offen? Warum?",
      antwort:
        "Funktionsstellung ist gelenk-spezifisch: Ellenbogen 90°, Knie gestreckt, oberes Sprunggelenk 90°, Schulter leicht abduziert + außenrotiert. Grundlage: Die Neutral-Null-Methode (AAOS-Standard). Bei jeder Positionierung prüfen — Hohlräume polstern, Muskeln entspannen lassen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Funktionsstellung** ist die Gelenkposition, in der ein Gelenk — falls es versteifen würde — dem Patienten den größten Restnutzen lässt. Grundlage ist die **Neutral-Null-Methode**: Jedes Gelenk hat eine Ausgangsstellung, von der aus Beweglichkeit gemessen wird.",
      textB1:
        "Die **Funktionsstellung** ist die **beste** Stellung für ein Gelenk — falls es wirklich steif werden sollte. In dieser Stellung kann der Patient noch am meisten tun. Ausgangsbasis: Die **Neutral-Null-Stellung** ist die Position im aufrechten Stand.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-03",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Bobath B. (1990)", "Bundesärztekammer (AAOS-Standard)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-funktionsstellung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Funktionsstellung und Neutral-Null-Methode",
          body: "Die **Neutral-Null-Methode** (AAOS-Standard) beschreibt für jedes Gelenk eine Ausgangsstellung — gedacht als Position, die der Körper im aufrechten, lockeren Stand einnimmt. Abweichungen werden in Grad gemessen.\n\nDie **Funktionsstellung** ist davon abgeleitet die **pflegerisch-funktionell wichtigste Position** — in ihr lässt sich ein steifes Gelenk noch am besten gebrauchen:\n\n| Gelenk | Funktionsstellung | Grund |\n|--------|-------------------|---------|\n| Schulter | leichte Abduktion (30-40°), Außenrotation | Hand kann zum Gesicht geführt werden |\n| Ellenbogen | 90° Beugung | Essen, Gesicht waschen, Türen öffnen |\n| Handgelenk | leichte Dorsalextension (~20°) | Kraftvoller Griff möglich |\n| Finger | leichte Flexion (Intrinsic-plus) | Greifen und Halten |\n| Hüfte | Streckung 0°, leichte Abduktion | Gehen, Stehen |\n| Knie | Streckung 0° | Stehen, Gehen |\n| Oberes Sprunggelenk | Neutral (90°-Winkel zum Unterschenkel) | Ferse aufsetzen, Spitzfußprophylaxe |\n\n**Praxis-Konsequenz:** Bei jeder Positionierung prüfst du, ob die Gelenke in Neutral-Null-Stellung oder Funktionsstellung liegen. Hohlräume werden so unterpolstert, dass Muskeln den Tonus abgeben können und Gelenke **keine Extrempositionen** halten müssen.",
          glossarBegriffe: ["Neutral-Null-Methode", "Funktionsstellung", "Dorsalextension"],
        },
        contentB1: {
          title: "Funktionsstellung und Neutral-Null-Stellung",
          body: "Die **Neutral-Null-Stellung** ist die normale Position eines Gelenks. Stell dir vor: Du stehst gerade, Arme hängen neben dem Körper. Das ist Neutral-Null.\n\nDie **Funktionsstellung** ist die **beste Notfall-Position**. Falls ein Gelenk wirklich steif werden sollte — in welcher Stellung kann der Patient am meisten tun?\n\n| Gelenk | Funktionsstellung | Warum |\n|--------|-------------------|---------|\n| Schulter | leicht vom Körper weg, nach außen gedreht | Hand zum Gesicht möglich |\n| Ellenbogen | 90° gebeugt | Essen, Waschen |\n| Handgelenk | leicht nach hinten gekippt | Feste Faust |\n| Finger | leicht gebeugt | Greifen |\n| Hüfte | gestreckt | Stehen, Gehen |\n| Knie | gestreckt | Stehen |\n| Fußgelenk | 90° zum Bein | Ferse auf dem Boden |\n\n**Praxis:** Immer prüfen — liegt das Gelenk in einer guten Position? Hohlräume polstern, damit die Muskeln sich entspannen können.",
          glossarBegriffe: ["Neutral-Null-Methode", "Funktionsstellung"],
        },
        question: {
          fragetext:
            "Was ist die Funktionsstellung des Ellenbogens — und warum gerade diese?",
          optionen: [
            {
              text: "Vollständige Streckung (0°), damit der Arm die volle Länge hat",
              isCorrect: false,
              explanation:
                "Nicht ganz — in vollständiger Streckung kann der Patient die Hand nicht zum Gesicht führen. Die Funktionsstellung ist nicht 'möglichst gestreckt', sondern 'möglichst funktional'. Beim Ellenbogen bedeutet das 90°-Beugung.",
              explanationB1:
                "Nein — in dieser Position kann der Patient nicht essen oder das Gesicht waschen.",
            },
            {
              text: "90°-Beugung, damit der Patient noch essen und das Gesicht waschen kann",
              isCorrect: true,
              explanation:
                "Richtig. Die 90°-Beugung ist die Funktionsstellung des Ellenbogens. In dieser Position kann der Patient noch selbstständig essen, das Gesicht waschen und Türen öffnen — auch wenn das Gelenk versteifen würde.",
              explanationB1:
                "Richtig. 90° bedeutet: Hand geht zum Mund. Das ist wichtig für das Essen und Waschen.",
            },
            {
              text: "Maximale Beugung (150°), damit der Arm kompakt ist",
              isCorrect: false,
              explanation:
                "Nicht ganz — maximale Beugung ist keine Funktionsstellung. In dieser Position ist der Arm zwar kompakt, aber der Patient kann kaum noch etwas damit tun.",
              explanationB1:
                "Nein — so gebeugt kann der Patient die Hand nirgendwo hinbringen.",
            },
            {
              text: "Es gibt keine feste Funktionsstellung — das ist bei jedem Patienten individuell",
              isCorrect: false,
              explanation:
                "Nicht ganz — die Funktionsstellungen sind nach AAOS-Standard definiert und gelten allgemein. Beim Ellenbogen ist es 90°. Individuelle Anpassungen können darüber hinaus nötig sein (z.B. bei Hemiplegie nach Bobath).",
              explanationB1:
                "Nein — beim Ellenbogen ist die Funktionsstellung immer 90°. Das gilt für alle.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Neutral-Null-Methode", "Funktionsstellung", "Dorsalextension", "Bobath-Konzept"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: kontraktur-prophylaxe-spitzfuss (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-spitzfuss",
    themaId: "kontraktur-prophylaxe",
    titel: "Spitzfuß: häufigste Kontraktur in der Pflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr S. liegt nach einer Knie-OP seit 6 Tagen im Bett. Die Bettdecke drückt auf seine Füße. Was kannst du in seinen Fußgelenken kontrollieren, damit später nichts Dauerhaftes zurückbleibt?",
      antwort:
        "Spitzfuß ist die häufigste Kontraktur — Versteifung des oberen Sprunggelenks in Plantarflexion. Prophylaxe: 90°-Winkel Fuß-Unterschenkel, Bettbogen gegen Bettdeckendruck, regelmäßige Dorsalextension aktiv/passiv, kein Kissen unter der Kniekehle.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein **Spitzfuß** (Pes equinus) ist die häufigste Kontraktur in der Pflege. Das obere Sprunggelenk versteift in Plantarflexion — die Ferse kann nicht mehr den Boden erreichen. Ursache: Druck der Bettdecke + fehlende Dorsalextension bei Bettruhe.",
      textB1:
        "Ein **Spitzfuß** ist die häufigste Kontraktur in der Pflege. Der Fuß bleibt **nach unten gestreckt**. Der Patient kann die **Ferse nicht mehr auf den Boden** setzen. Ursache: Bettdecke drückt von oben, der Fuß bewegt sich zu wenig.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-04",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Bundesärztekammer (AAOS-Standard)", "Bobath B. (1990)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-spitzfuss",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "prozedur",
        imageAlt: "Fuß in Spitzfußstellung und Fuß in Neutralstellung (90° zum Unterschenkel) im Vergleich, medizinische Skizze",
        bildhinweis: "Foot in equinus position (pointing downward like ballet) vs foot in neutral 90-degree position against lower leg, side-by-side comparison, copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Spitzfuß: häufigste Kontraktur in der Pflege",
          body: "Der **Spitzfuß (Pes equinus)** ist die Versteifung des oberen Sprunggelenks in **Plantarflexion** — der Fuß steht nach unten gestreckt, wie auf Zehenspitzen. Folge: Die Ferse kann nicht mehr auf den Boden gesetzt werden, normales Gehen und Stehen sind unmöglich.\n\n**Entstehung bei Bettruhe:**\n- Die **Bettdecke** drückt von oben auf den Vorfuß.\n- Das **Eigengewicht** des Fußes zieht ihn bei Rückenlage in Plantarflexion.\n- Die Wadenmuskulatur (Musculus triceps surae) verkürzt sich.\n- Schon **wenige Tage** strikte Bettruhe reichen — besonders bei bewusstseinsgetrübten Patienten.\n\n**Prophylaxe:**\n- **90°-Winkel** Fuß zu Unterschenkel aktiv oder passiv halten\n- **Bettdecke abheben** (Bettbogen, Kissen am Fußende)\n- **Regelmäßig dorsalextensieren** (Fuß nach oben ziehen)\n- **Keine Kissen unter die Kniekehle** (das Fußgelenk muss frei bleiben)",
          glossarBegriffe: ["Spitzfuß", "Plantarflexion", "Dorsalextension", "Bettbogen"],
        },
        contentB1: {
          title: "Spitzfuß: die häufigste Kontraktur",
          body: "Der **Spitzfuß** ist die häufigste Kontraktur. Der Fuß bleibt **nach unten gestreckt**, wie auf Zehenspitzen. Der Patient kann die **Ferse nicht mehr auf den Boden** stellen.\n\n**Wie entsteht er?**\n- Die **Bettdecke** drückt von oben auf den Fuß.\n- Das Gewicht des Fußes zieht ihn nach unten.\n- Die Wadenmuskeln werden kürzer.\n- Schon **wenige Tage** Bettruhe reichen.\n\n**Was machst du dagegen?**\n- Fuß in **90°** zum Bein halten — aktiv oder passiv\n- Die **Bettdecke hochheben** (Bettbogen oder kleines Kissen)\n- Den Fuß regelmäßig **nach oben** ziehen\n- **Keine Kissen** unter die Kniekehle — das Fußgelenk muss frei sein",
          glossarBegriffe: ["Spitzfuß", "Plantarflexion", "Dorsalextension", "Bettbogen"],
        },
        question: {
          fragetext:
            "Welche Maßnahme ist FALSCH bei der Spitzfuß-Prophylaxe?",
          optionen: [
            {
              text: "90°-Winkel zwischen Fuß und Unterschenkel halten",
              isCorrect: false,
              explanation:
                "Das ist eine richtige Maßnahme. Der 90°-Winkel verhindert, dass der Fuß in Plantarflexion versteift.",
              explanationB1:
                "Das ist richtig. Der Fuß soll im 90°-Winkel zum Bein stehen.",
            },
            {
              text: "Bettbogen benutzen, um Bettdeckendruck vom Fuß fernzuhalten",
              isCorrect: false,
              explanation:
                "Das ist eine richtige Maßnahme. Der Bettbogen hält die Bettdecke vom Vorfuß fern und verhindert Plantarflexion durch Deckendruck.",
              explanationB1:
                "Das ist richtig. Der Bettbogen hält die Decke hoch, damit sie nicht auf den Fuß drückt.",
            },
            {
              text: "Ein festes Kissen unter die Kniekehle legen, damit das Bein entspannt liegt",
              isCorrect: true,
              explanation:
                "Falsch — ein Kissen unter die Kniekehle fördert die Kniebeugekontraktur und beeinflusst nicht positiv das Sprunggelenk. Gegen Spitzfuß hilft: 90°-Winkel am Fuß, Bettbogen, regelmäßige Dorsalextension. Merke: Kein Kissen unter die Kniekehle.",
              explanationB1:
                "Falsch — ein Kissen unter das Knie macht eine Beugekontraktur am Knie, hilft aber nicht gegen Spitzfuß. Merke: Kein Kissen unters Knie.",
            },
            {
              text: "Regelmäßig den Fuß nach oben (Dorsalextension) bewegen",
              isCorrect: false,
              explanation:
                "Das ist eine richtige Maßnahme. Regelmäßige Dorsalextension — aktiv durch den Patienten oder passiv durch die Pflege — ist zentraler Teil der Spitzfuß-Prophylaxe.",
              explanationB1:
                "Das ist richtig. Den Fuß regelmäßig nach oben ziehen schützt vor Spitzfuß.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Spitzfuß", "Plantarflexion", "Dorsalextension", "Bettbogen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: kontraktur-prophylaxe-risikogruppen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-risikogruppen",
    themaId: "kontraktur-prophylaxe",
    titel: "Risikogruppen für Kontrakturen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du arbeitest auf einer gemischten Station. Welche deiner Patienten sind am stärksten von Kontrakturen gefährdet? Nenne mindestens 3 Gruppen und begründe kurz.",
      antwort:
        "Hochrisiko: Schlaganfall (Hemiplegie, dysregulierter Muskeltonus), Intensivpatienten (Sedierung, Beatmung), Demenz (Bewegungsreduktion), Parkinson (Rigor), fixierte Patienten (FeM), multimorbide Pflegeheimbewohner. Prävalenz: 15-70 % älterer Krankenhauspatienten (Gnass 2010), 59,1 % ambulant Pflegebedürftiger (MDS 2018).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hochrisikogruppen: **Schlaganfall** (Hemiplegie mit dysreguliertem Muskeltonus), **Intensivpatienten** (Sedierung, Beatmung), **Demenz** (Bewegungsreduktion), **Parkinson** (Rigor), **Fixierte** (FeM § 1831 BGB), **Multimorbide Pflegeheimbewohner**.",
      textB1:
        "Besonders gefährdet sind: **Schlaganfall**-Patienten (halbseitige Lähmung), **Intensivpatienten** (Sedierung), Menschen mit **Demenz**, mit **Parkinson**, **fixierte** Patienten und Menschen im **Pflegeheim** mit vielen Krankheiten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-05",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Gnass I. et al. (2010)", "MDS (2018)", "Sackley C.M. et al. (2008)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-risikogruppen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Risikogruppen für Kontrakturen",
          body: "**Hochrisikogruppen für Kontrakturen:**\n\n| Gruppe | Grund |\n|--------|-------|\n| **Schlaganfall (Hemiplegie)** | Dysregulierter Muskeltonus, Spastik, reduzierte Eigenbewegung. Häufigkeit Kontrakturen > Stürze (Sackley 2008) |\n| **Intensivpatienten** | Sedierung, Beatmung, Immobilität. Häufig Spitzfuß + Schulter-/Ellenbogen-Kontrakturen |\n| **Demenz** | Reduktion des gewohnten Bewegungsradius, demenzielle Abbauprozesse, oft kombiniert mit Schmerzvermeidung |\n| **Parkinson** | Muskulärer Rigor, verminderte Mitbewegung, Schonhaltung |\n| **Fixierte Patienten** | Freiheitsentziehende Maßnahmen (§ 1831 BGB) reduzieren Bewegung — FeM können selbst Kontrakturen verursachen |\n| **Multimorbide Pflegeheimbewohner** | Kombination aus Schmerz, Medikamenten, Schonhaltung, geringer Aktivität |\n| **Z.n. Mammaablatio** | Schulter-Arm-Syndrom durch fehlende Nutzung der betroffenen Seite |\n\n**Prävalenz-Zahlen (belegt):**\n- **15-70 %** der älteren Krankenhauspatienten in Deutschland leiden unter Kontrakturen (Gnass et al. 2010)\n- **59,1 %** der ambulant pflegebedürftigen älteren Menschen sind kontrakturrisikogefährdet (MDS 2018)",
          glossarBegriffe: ["Hemiplegie", "Freiheitsentziehende Maßnahme (FeM)"],
        },
        contentB1: {
          title: "Diese Menschen sind besonders gefährdet",
          body: "**Diese Menschen sind besonders gefährdet:**\n\n| Gruppe | Warum |\n|--------|-------|\n| **Schlaganfall-Patienten** | Der Muskeltonus stimmt nicht mehr. Eine Seite ist gelähmt. |\n| **Intensivpatienten** | Sie sind lange sediert und bewegen sich wenig. Oft Spitzfuß. |\n| **Menschen mit Demenz** | Sie bewegen sich immer weniger. |\n| **Parkinson-Patienten** | Die Muskeln sind steif (Rigor). |\n| **Fixierte Patienten** | Sie dürfen sich nicht bewegen. Das schafft selbst Kontrakturen. |\n| **Pflegeheimbewohner mit vielen Krankheiten** | Schmerzen, Medikamente, Schonhaltung. |\n| **Nach Brustamputation** | Die Schulter wird auf der OP-Seite nicht mehr bewegt. |\n\n**Zahlen (belegt):**\n- **15 bis 70 %** der alten Krankenhauspatienten haben Kontrakturen (Gnass 2010).\n- **59 %** der ambulant gepflegten alten Menschen sind gefährdet (MDS 2018).",
          glossarBegriffe: ["Hemiplegie", "Freiheitsentziehende Maßnahme (FeM)"],
        },
        question: {
          fragetext:
            "Welche Aussage über Fixierung und Kontrakturen ist richtig?",
          optionen: [
            {
              text: "Fixierung schützt den Patienten vor Kontrakturen, weil er ruhig liegt",
              isCorrect: false,
              explanation:
                "Nicht ganz — Fixierung kann **selbst Kontrakturen verursachen**, weil die Bewegung reduziert wird. Freiheitsentziehende Maßnahmen (§ 1831 BGB) brauchen strenge Indikation und richterliche Genehmigung. Bewegungsförderung ist die richtige Alternative.",
              explanationB1:
                "Nein — Fixierung **macht** Kontrakturen. Der Patient kann sich nicht mehr bewegen. Das ist schlecht für die Gelenke.",
            },
            {
              text: "Fixierung kann selbst Kontrakturen verursachen, weil sie die Bewegung reduziert",
              isCorrect: true,
              explanation:
                "Richtig. Freiheitsentziehende Maßnahmen (FeM, § 1831 BGB) zählen zu den Kontraktur-Risikogruppen, weil sie den Bewegungsradius einschränken. FeM sind nur mit richterlicher Genehmigung oder Einwilligung erlaubt.",
              explanationB1:
                "Richtig. Fixierung hält den Patienten fest — das schafft Kontrakturen. Deshalb ist Fixierung nur in Ausnahmen erlaubt.",
            },
            {
              text: "Fixierung beeinflusst die Kontrakturrisiko nicht, da Kontrakturen nur durch Krankheiten entstehen",
              isCorrect: false,
              explanation:
                "Nicht ganz — Immobilität durch Fixierung ist ein bekannter Kontraktur-Risikofaktor, unabhängig von der Grunderkrankung.",
              explanationB1:
                "Nein — auch Fixierung macht das Risiko größer, nicht nur Krankheiten.",
            },
            {
              text: "Nur bettlägerige Patienten brauchen Kontrakturprophylaxe",
              isCorrect: false,
              explanation:
                "Nicht ganz — schon eine Reduktion des gewohnten Bewegungsradius reicht. Laut MDS (2018) sind 59,1 % der ambulant gepflegten alten Menschen kontrakturrisikogefährdet.",
              explanationB1:
                "Nein — auch wer nicht im Bett liegt, kann Kontrakturen bekommen. 59 % der ambulant gepflegten alten Menschen sind gefährdet (MDS 2018).",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Hemiplegie", "Freiheitsentziehende Maßnahme (FeM)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: kontraktur-prophylaxe-assessment (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-assessment",
    themaId: "kontraktur-prophylaxe",
    titel: "Kontraktur-Risikoassessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Es gibt (noch) keine einheitliche Kontraktur-Skala wie die Braden-Skala. Wie würdest du **trotzdem** das Kontrakturrisiko eines Patienten einschätzen? Welche 4-5 Fragen würdest du stellen oder welche Beobachtungen machen?",
      antwort:
        "Kein standardisiertes Einzelinstrument für Kontrakturrisiko. Klinikeigene Bewegungsanalysen: Timed-Up-and-Go, MOTPA (Brach 2006), EBoMo (Zegelin 2007). Klinisches Urteil führt. Bei Veränderung neu einschätzen. DNQP Mobilität 2020.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Es gibt **kein** standardisiertes Einzelinstrument für Kontrakturrisiko. Klinikeigene Bewegungsanalysen und Mobilitätsassessments sind Pflicht. Etabliert: **Barthel-Index**, **Timed-Up-and-Go**, **MOTPA** (Brach 2006), **EBoMo** (Zegelin 2007). Klinisches Urteil führt.",
      textB1:
        "Es gibt **keine** einzelne Kontraktur-Skala. Stattdessen nutzen Pflegekräfte mehrere Werkzeuge: **Barthel-Index** (wie selbstständig?), **Timed-Up-and-Go** (wie schnell aufstehen?), Beobachtung im Alltag. Das **klinische Auge** ist wichtig.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-06",
        phase: 1,
        stepType: "sorting",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Brach M. et al. (2006): MOTPA", "Zegelin A. (2007): EBoMo", "DNQP Mobilität (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-assessment",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Kontraktur-Risikoassessment — pragmatische Schritte",
          body: "**Kontraktur-Risikoassessment — pragmatische Schritte:**\n\n1. **Bewegungsradius beobachten:**\n   - Wie bewegt sich der Patient im Bett (Kopfwärtsrücken, Seitenlage, Aufsetzen)?\n   - Kann er frei an der Bettkante sitzen (Rumpfkontrolle)?\n   - Steht und geht er? Rollt er die Ferse ab?\n\n2. **Aktivitätstest spielerisch:**\n   - 'Können Sie bitte das Handtuch neben Ihrem Kopf vom Haken nehmen?' → prüft Oberkörperrotation, Schulterbeweglichkeit, Fingergebrauch.\n\n3. **Mobilitätsassessments einsetzen:**\n   - **Timed-Up-and-Go**: Aufstehen, 3 m gehen, umdrehen, hinsetzen — misst alltagsnahe Mobilität.\n   - **MOTPA** (Brach et al. 2006) — Krankenhaus.\n   - **EBoMo** (Zegelin & Reuther 2007) — Pflegeheim.\n\n4. **Neutralstellung prüfen:**\n   - Jedes Gelenk in Neutral-Null bewegen (sanft, langsam). Widerstand, Schmerz oder Bewegungseinschränkung dokumentieren.\n\n5. **Risikofaktoren aus der Anamnese:**\n   - Welche Grunderkrankungen (Schlaganfall, Parkinson, Demenz)?\n   - Medikamente mit Sedierung/Bewegungshemmung?\n   - Schmerzen, Schonhaltungen, Narben?\n\nDer DNQP-Expertenstandard Mobilität (2020) verankert die Bewegungsanalyse als Pflegeleistung. Das klinische Urteil bleibt führend.",
          glossarBegriffe: ["Timed-Up-and-Go", "MOTPA", "EBoMo"],
        },
        contentB1: {
          title: "So schätzt du das Kontrakturrisiko ein",
          body: "**So schätzt du das Kontrakturrisiko ein:**\n\n1. **Schau zu, wie der Patient sich bewegt:**\n   - Kann er sich im Bett drehen und hochrücken?\n   - Kann er an der Bettkante sitzen?\n   - Kann er aufstehen und gehen?\n\n2. **Mach einen kleinen Test:**\n   - 'Bitte nehmen Sie das Handtuch neben Ihrem Kopf.' → Du siehst, wie gut Schulter und Finger funktionieren.\n\n3. **Nutze Test-Werkzeuge:**\n   - **Timed-Up-and-Go**: Der Patient steht auf, geht 3 Meter, dreht sich, setzt sich. Wie lange braucht er?\n   - **MOTPA** (für Krankenhaus), **EBoMo** (für Pflegeheim).\n\n4. **Teste jedes Gelenk:**\n   - Bewege jedes Gelenk **sanft** in alle Richtungen. Wo ist ein Widerstand? Wo hat der Patient Schmerz?\n\n5. **Schau in die Patientengeschichte:**\n   - Hat er Schlaganfall, Parkinson, Demenz?\n   - Welche Medikamente nimmt er?\n\nWichtig: Kein einzelnes Werkzeug reicht allein. Dein **Blick und deine Erfahrung** zählen immer.",
          glossarBegriffe: ["Timed-Up-and-Go"],
        },
        question: {
          fragetext:
            "Was empfiehlt der DNQP-Expertenstandard Mobilität (2020) zum Kontraktur-Assessment?",
          optionen: [
            {
              text: "Die Braden-Skala anwenden, da sie auch Mobilität misst",
              isCorrect: false,
              explanation:
                "Nicht ganz — die Braden-Skala ist ein **Dekubitus**-Assessment. Sie misst zwar u.a. Mobilität, aber nicht gezielt Gelenkbeweglichkeit. Für Kontrakturrisiko nutzt man klinikeigene Bewegungsanalysen plus MOTPA/EBoMo. Merke: Braden = Dekubitus, nicht Kontraktur.",
              explanationB1:
                "Nein — die Braden-Skala ist für Dekubitus. Für Kontraktur nimmst du MOTPA oder EBoMo und deinen Blick im Alltag.",
            },
            {
              text: "Klinische Bewegungsanalyse, ergänzt durch Instrumente wie MOTPA oder Timed-Up-and-Go",
              isCorrect: true,
              explanation:
                "Richtig. Der DNQP-Standard Mobilität (2020) verankert die Bewegungsanalyse als Pflegeleistung. Das klinische Urteil führt, unterstützt durch Instrumente wie MOTPA (Krankenhaus), EBoMo (Pflegeheim) und Timed-Up-and-Go.",
              explanationB1:
                "Richtig. Beobachten im Alltag + Timed-Up-and-Go + MOTPA oder EBoMo + jedes Gelenk prüfen. Kein einzelnes Werkzeug reicht.",
            },
            {
              text: "Assessment nur bei Aufnahme — danach reicht die Dokumentation",
              isCorrect: false,
              explanation:
                "Nicht ganz — das Risiko verändert sich. Bei Verschlechterung (neuer Schlaganfall, Schmerzen, Medikamentenwechsel) oder Verbesserung muss neu eingeschätzt werden. Der Pflegeprozess ist ein Regelkreis — auch Assessments gehören dazu.",
              explanationB1:
                "Nein — das Risiko ändert sich. Wenn der Patient schlechter oder besser wird, musst du neu einschätzen.",
            },
            {
              text: "Kontrakturrisiko ist Aufgabe des Arztes, nicht der Pflege",
              isCorrect: false,
              explanation:
                "Nicht ganz — Kontraktur-Risikoassessment ist eine genuin pflegerische Aufgabe (§ 4 PflBG). Der DNQP-Standard Mobilität (2020) verankert dies explizit als Pflegeleistung.",
              explanationB1:
                "Nein — das ist Aufgabe der Pflege (§ 4 PflBG). Der DNQP-Standard sagt das klar.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Timed-Up-and-Go", "MOTPA", "EBoMo"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: kontraktur-prophylaxe-massnahmen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-massnahmen",
    themaId: "kontraktur-prophylaxe",
    titel: "Maßnahmen-Überblick: Die 5 Säulen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was ist nach deinem Gefühl die **wichtigste** Maßnahme gegen Kontrakturen — und warum? (Ein Wort reicht für die Maßnahme.)",
      antwort:
        "Bewegung ist das oberste Gebot. Die 5 Säulen: (1) Aktiv/assistiv/passiv bewegen, (2) normaler Tagesablauf mit Positionswechseln, (3) korrekte Positionierung (flach, Hohlräume polstern, Neutral-Null), (4) Schmerztherapie, (5) Teamarbeit mit Physio/Ergo. Dokumentation nicht vergessen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Oberstes Gebot: Bewegung.** Jedes Gelenk, das nicht aus medizinischen Gründen ruhiggestellt sein muss, wird **aktiv oder passiv durchbewegt**. Ergänzend: normaler Tagesablauf mit Positionswechseln, Aktivierung, korrekte Positionierung, Schmerztherapie, Teamarbeit mit Physio.",
      textB1:
        "**Das Wichtigste ist Bewegung.** Jedes Gelenk, das sich bewegen **darf**, soll auch bewegt werden — aktiv oder passiv. Dazu: normaler Tagesablauf, verschiedene Positionen, richtig lagern, Schmerzen behandeln, mit der Physio zusammenarbeiten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-07",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["§ 4 PflBG", "Bobath B. (1990)", "DNQP Mobilität (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-massnahmen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Die 5 Säulen der Kontraktur-Prophylaxe",
          body: "**Säule 1 — Bewegung (oberstes Gebot):**\n- Jedes Gelenk, das nicht medizinisch ruhiggestellt ist, **täglich** aktiv oder passiv durchbewegen.\n- **Aktiv**: Patient bewegt selbst.\n- **Assistiv**: Patient bewegt, Pflege unterstützt.\n- **Passiv**: Pflege bewegt bei bewusstseinsgetrübten oder gelähmten Patienten.\n- Richtschnur: in physiologischem Ausmaß, schmerzfrei, mit leichter Endposition.\n\n**Säule 2 — Normaler Tagesablauf + Positionswechsel:**\n- Wechsel zwischen **Gehen, Sitzen, Stehen, Liegen** anbieten.\n- Bewegungsmotivierende Situationen schaffen (z.B. Essen am Tisch statt im Bett).\n\n**Säule 3 — Korrekte Positionierung:**\n- Flach gestelltes Kopfteil in Rücken- und Seitenlage.\n- **Kein Kissen unter der Kniekehle**.\n- Hohlräume flächig unterpolstern (Nacken, Rücken, Knie, Fußsohle), damit Muskeln Tonus abgeben können.\n- Gelenke in **Neutral-Null-Stellung** oder Funktionsstellung.\n\n**Säule 4 — Schmerztherapie und Schonhaltungen adressieren:**\n- Ursache suchen, interdisziplinäre Schmerztherapie, ggf. Wärmetherapie.\n- Ziel: Bewegung ohne Schmerzvermeidung.\n\n**Säule 5 — Teamarbeit mit Physio- und Ergotherapie:**\n- Verordnete Schienen anbringen, auf funktionale Gelenkposition achten.\n- Gemeinsame Übungspläne, gemeinsame Dokumentation.",
          glossarBegriffe: ["aktive Bewegung", "assistive Bewegung", "passive Bewegung"],
        },
        contentB1: {
          title: "Die 5 Säulen gegen Kontrakturen",
          body: "**Säule 1 — Bewegung (das Wichtigste):**\n- Jedes Gelenk **täglich** bewegen.\n- **Aktiv**: Der Patient bewegt selbst.\n- **Assistiv**: Patient bewegt, du hilfst.\n- **Passiv**: Du bewegst bei bewusstlosen oder gelähmten Patienten.\n- **Sanft**, **ohne Schmerz**, bis zur **normalen** Endposition.\n\n**Säule 2 — Verschiedene Positionen:**\n- Wechsel zwischen **Gehen, Sitzen, Stehen, Liegen**.\n- Gründe zum Bewegen schaffen (Essen am Tisch, nicht im Bett).\n\n**Säule 3 — Richtig lagern:**\n- Kopfteil **flach** in Rücken- und Seitenlage.\n- **Kein Kissen unter das Knie**.\n- Hohlräume mit Handtüchern oder kleinen Kissen **flächig** ausfüllen.\n- Gelenke in **Neutral-Null** oder **Funktionsstellung**.\n\n**Säule 4 — Schmerzen behandeln:**\n- Schmerzursache finden, Schmerzmittel geben, Wärme anwenden.\n- Ziel: Der Patient bewegt sich ohne Angst.\n\n**Säule 5 — Mit Physio und Ergo zusammenarbeiten:**\n- Schienen richtig anbringen.\n- Gemeinsame Übungspläne, gemeinsame Dokumentation.",
          glossarBegriffe: ["aktive Bewegung", "assistive Bewegung", "passive Bewegung"],
        },
        question: {
          fragetext:
            "Was ist das oberste Gebot der Kontrakturprophylaxe?",
          optionen: [
            {
              text: "Schienen regelmäßig anlegen — das hält Gelenke in Position",
              isCorrect: false,
              explanation:
                "Nicht ganz — Schienen sind **ergänzend**, nicht ersetzend. Sie halten ein Gelenk in Position, aber **Bewegung bleibt oberstes Gebot**. Schienen werden nach ärztlicher Verordnung in funktionaler Gelenkposition angebracht. Merke: Schiene + Bewegung, nicht Schiene statt Bewegung.",
              explanationB1:
                "Nein — Schienen helfen, aber sie ersetzen nicht die Bewegung. Das Wichtigste bleibt: Das Gelenk wird bewegt.",
            },
            {
              text: "Bewegung — jedes Gelenk täglich aktiv, assistiv oder passiv durchbewegen",
              isCorrect: true,
              explanation:
                "Richtig. Bewegung ist das oberste Gebot der Kontrakturprophylaxe. Jedes Gelenk, das nicht medizinisch ruhiggestellt ist, wird täglich in physiologischem Ausmaß, schmerzfrei bewegt.",
              explanationB1:
                "Richtig. Jedes Gelenk, das sich bewegen darf, soll auch bewegt werden — täglich.",
            },
            {
              text: "Schmerztherapie zuerst — ohne Schmerzfreiheit kann man nicht bewegen",
              isCorrect: false,
              explanation:
                "Nicht ganz — Schmerztherapie ist Säule 4 und wichtig, aber das oberste Gebot ist Bewegung. Schmerzen werden behandelt, damit Bewegung möglich wird — nicht stattdessen. Innerhalb schmerzfreier Grenzen wird immer bewegt.",
              explanationB1:
                "Nicht ganz — Schmerzen behandeln ist wichtig, aber das Wichtigste bleibt die Bewegung. Schmerz behandeln, dann bewegen.",
            },
            {
              text: "Richtige Lagerung allein reicht aus",
              isCorrect: false,
              explanation:
                "Nicht ganz — Lagerung ist Säule 3 der Prophylaxe, aber ohne aktive Bewegung unzureichend. Lagerung schützt vor Extrempositionen, ersetzt aber das Durchbewegen nicht.",
              explanationB1:
                "Nein — richtig lagern ist gut, aber nicht genug. Bewegen muss dazu kommen.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["aktive Bewegung", "assistive Bewegung", "passive Bewegung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: kontraktur-prophylaxe-bewegungsarten (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-bewegungsarten",
    themaId: "kontraktur-prophylaxe",
    titel: "Aktiv, assistiv, passiv — wann welche Bewegungsart?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Drei Patienten: (A) Frau L., 78, wach und kooperativ, nach Hüft-OP. (B) Herr M., 64, 3. Tag nach Schlaganfall, linke Seite gelähmt, wach aber erschöpft. (C) Frau B., 52, im Koma auf ICU. Welche Bewegungsart passt zu welchem Patienten — aktiv, assistiv oder passiv? Begründe.",
      antwort:
        "Frau L. (wach, kooperativ) → aktiv mit Anleitung. Herr M. (wach, halbseitig gelähmt) → assistiv nach Bobath für die betroffene Seite, aktiv für die gesunde. Frau B. (Koma) → passiv mehrmals täglich, schmerzfrei, physiologisch. Alle drei Arten: langsam, schmerzfrei, angekündigt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Bewegungsarten, drei Indikationen: **Aktiv** = Patient bewegt selbst (Standard bei Kooperation). **Assistiv** = Patient bewegt, Pflege unterstützt (Schwäche, teilweise Lähmung). **Passiv** = Pflege bewegt allein (Bewusstlose, komplette Lähmung, Schmerz).",
      textB1:
        "Drei Arten zu bewegen: **Aktiv** = Patient bewegt allein. **Assistiv** = Patient bewegt mit, du hilfst. **Passiv** = Du bewegst allein (wenn Patient bewusstlos ist oder gar nicht selbst kann). Du wählst nach dem **Zustand** des Patienten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-08",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Bobath B. (1990)", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-bewegungsarten",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Aktiv, assistiv, passiv — die drei Bewegungsarten",
          body: "**1. Aktive Bewegung — Patient bewegt selbst:**\n- Indikation: wacher, kooperativer, ausreichend kräftiger Patient.\n- Rolle der Pflege: anleiten, motivieren, Sicherheit geben.\n- Beispiele: 'Heben Sie Ihren Arm über den Kopf', 'Ziehen Sie die Zehen zum Schienbein'.\n- Vorteil: Maximaler Trainingseffekt, Erhalt von Kraft + Beweglichkeit.\n\n**2. Assistive Bewegung — Patient bewegt mit, Pflege unterstützt:**\n- Indikation: Schwäche, Erschöpfung, teilweise Lähmung, Schmerzen im Tagesverlauf.\n- Rolle der Pflege: führend-stützend. Patient macht, was er kann; die Pflege trägt das Gewicht, das er nicht mehr trägt.\n- Beispiel: Hemiplegie nach Schlaganfall — der betroffene Arm wird nach Bobath-Prinzip geführt.\n- Vorteil: Schult Eigenwahrnehmung, erhält Reste der Bewegung.\n\n**3. Passive Bewegung — Pflege bewegt allein:**\n- Indikation: Bewusstlose, sedierte Intensivpatienten, vollständig gelähmte Gliedmaßen, komatöse Patienten.\n- Technik: Ein Gelenk gleichzeitig, zweifache Fixation (ober- und unterhalb), 5-10 Wiederholungen.\n- Vorteil: Erhalt der Gelenkbeweglichkeit auch ohne aktive Mitarbeit.\n\n**Wichtige Regeln (für alle 3 Arten):**\n- Immer **schmerzfrei**, **physiologisch**, **angekündigt**.\n- Bei Hemiplegie Bobath-Prinzip beachten.\n- Nach Kinästhetik: Bewegungsimpulse setzen, statt zu heben.",
          glossarBegriffe: ["aktive Bewegung", "assistive Bewegung", "passive Bewegung", "Bobath-Konzept", "Hemiplegie"],
        },
        contentB1: {
          title: "Die 3 Bewegungsarten — wann welche?",
          body: "**1. Aktiv — Der Patient macht selbst:**\n- Wann? Patient ist **wach, kräftig, kann** sich bewegen.\n- Du machst: Anleiten, ermutigen, Sicherheit geben.\n- Vorteil: Bester Effekt — baut Kraft und Beweglichkeit auf.\n\n**2. Assistiv — Der Patient macht mit, du hilfst:**\n- Wann? Patient ist **schwach** oder **halb gelähmt** oder **erschöpft**.\n- Du machst: Den Teil bewegen, den der Patient nicht schafft.\n- Beispiel: Nach Schlaganfall — gesunde Seite macht allein, gelähmte Seite bewegst du mit nach **Bobath**.\n- Vorteil: Patient spürt sich selbst, Reste der Bewegung bleiben.\n\n**3. Passiv — Du machst allein:**\n- Wann? Patient ist **bewusstlos**, **komplett gelähmt** oder **im Koma**.\n- Du machst: Langsam, ruhig, **ohne Schmerz**.\n- Technik: **Ein Gelenk**, mit beiden Händen halten (oben und unten), **5-10 mal** wiederholen.\n\n**Regeln für alle 3:**\n- **Ohne Schmerz** bewegen.\n- Vorher **ankündigen**: 'Ich bewege jetzt Ihren Arm.'\n- Bei Schlaganfall nach **Bobath**.",
          glossarBegriffe: ["aktive Bewegung", "assistive Bewegung", "passive Bewegung", "Bobath-Konzept"],
        },
        question: {
          fragetext:
            "Herr M. ist wach, aber nach seinem Schlaganfall ist die linke Seite gelähmt. Welche Bewegungsart ist für seinen linken Arm richtig?",
          optionen: [
            {
              text: "Aktiv — er soll seinen linken Arm selbst bewegen",
              isCorrect: false,
              explanation:
                "Nicht ganz — bei vollständiger Lähmung kann der Patient die betroffene Seite nicht selbst bewegen. Aktive Bewegung ist für Herr M. nur auf der gesunden Seite möglich.",
              explanationB1:
                "Nicht ganz — die gelähmte Seite kann der Patient nicht selbst bewegen.",
            },
            {
              text: "Assistiv nach Bobath — du führst den Arm, nutzt Bewegungsimpulse, Patient nimmt mit so viel er kann",
              isCorrect: true,
              explanation:
                "Richtig. Bei Hemiplegie (halbseitige Lähmung nach Schlaganfall) wird die betroffene Seite assistiv nach dem Bobath-Konzept geführt. Das fördert Wahrnehmung und Bewegungsreste, reguliert Muskeltonus und beugt Kontraktur vor.",
              explanationB1:
                "Richtig. Den gelähmten Arm bewegst du nach Bobath mit — sanft, mit Bewegungsimpulsen. Patient hilft so viel er kann.",
            },
            {
              text: "Passiv — du bewegst komplett allein, der Patient macht nichts",
              isCorrect: false,
              explanation:
                "Nicht ganz — Herr M. ist wach und kann teilweise mitmachen. Passiv ist für vollständig bewusstlose oder komplett gelähmte Patienten. Bei Hemiplegie nach Schlaganfall ist assistives Bewegen nach Bobath die richtige Wahl.",
              explanationB1:
                "Nicht ganz — passiv nur bei bewusstlosen Patienten. Herr M. ist wach. Assistiv nach Bobath ist besser.",
            },
            {
              text: "Gar nicht bewegen — bei Lähmung ist Bewegung gefährlich",
              isCorrect: false,
              explanation:
                "Falsch — gerade bei Hemiplegie ist frühzeitige Bewegung nach Bobath essenziell, um Kontrakturen und Spastiken zu verhindern. Studien zeigen: Kontrakturen entstehen bei Schlaganfall häufiger als Stürze (Sackley 2008).",
              explanationB1:
                "Falsch — gerade nach Schlaganfall muss die gelähmte Seite bewegt werden. Sonst entsteht eine Kontraktur.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["aktive Bewegung", "assistive Bewegung", "passive Bewegung", "Bobath-Konzept", "Hemiplegie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: kontraktur-prophylaxe-folgen-teamarbeit (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kontraktur-prophylaxe-folgen-teamarbeit",
    themaId: "kontraktur-prophylaxe",
    titel: "Folgen von Kontrakturen und interdisziplinäre Teamarbeit",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir Frau H. vor. Sie hat durch jahrelange Bettruhe eine schwere Beugekontraktur der Hüfte und Knie. Welche **Folgeprobleme** kann das im Alltag auslösen? Nenne mindestens 3 — es geht nicht nur um das Gelenk.",
      antwort:
        "Folgen sind vielfältig: Dekubitus (Zwangshaltung), Pneumonie (Brustkorbfixation), Intertrigo (Hautfalten), Ulzera (Kniekehle), Schmerzen, Pflegeabhängigkeit, sozialer Rückzug. Teamarbeit ist Pflicht (DNQP Mobilität 2020): Pflege — Physio — Ergo — Arzt — Bezugspersonen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kontrakturen sind **nicht nur orthopädisch**. Sie führen zu **Dekubitus** (Druckstellen in Hautfalten), **Pneumonie** (eingeschränkte Atmung bei Brustkorbfixation), **Intertrigo** (Pilze in Hautfalten), **Schmerzen**, **Pflegeabhängigkeit**, **sozialem Rückzug**.",
      textB1:
        "Kontrakturen machen nicht nur steife Gelenke. Folgen sind auch: **Druckstellen** in Hautfalten, **Lungenentzündung** (Brustkorb bewegt sich weniger), **Hautpilz** zwischen Fingern, **Schmerzen**, mehr **Hilfe** nötig, **weniger Teilhabe**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-kontraktur-wb-09",
        phase: 1,
        stepType: "conceptmap",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Mobilität (2020)", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-kontraktur-folgen-teamarbeit",
        tag: "pflege",
        displayFormat: "news",
        contentC1: {
          title: "Folgen von Kontrakturen und interdisziplinäre Teamarbeit",
          body: "**Folgen von Kontrakturen — der systemische Blick:**\n\n**Körperlich:**\n- **Dekubitus**: Durch Zwangshaltung entstehen neue Druckstellen an ungewöhnlichen Stellen (z.B. Knieinnenseite bei Beugekontraktur).\n- **Pneumonie**: Brustkorbfixation und flache Atmung erhöhen das Pneumonierisiko — Kontrakturprophylaxe ist immer auch Pneumonieprophylaxe.\n- **Intertrigo**: In Finger-, Zehen- und Hautfalten sammelt sich Feuchtigkeit, Candida-Infektionen entstehen.\n- **Ulzera in Kniekehlen**: Hautschichten komprimieren sich, schlimmstenfalls Amputation.\n\n**Psychosozial:**\n- **Schmerzen**: Starke Schmerzen in steifen Gelenken, oft permanent.\n- **Pflegeabhängigkeit**: Waschen, Anziehen, Essen brauchen mehr Zeit und Personal.\n- **Mangelnde Teilhabe**: Rückzug aus sozialem Leben, depressive Verstimmungen.\n\n**Teamarbeit — wer macht was:**\n- **Pflege**: tägliche Bewegung, Positionierung, Beobachtung, Dokumentation.\n- **Physiotherapie**: spezielle Übungspläne, Schienenverordnung, Schulung der Pflege.\n- **Ergotherapie**: Alltagsfunktion trainieren, Hilfsmittel anpassen.\n- **Arzt**: Schmerztherapie, Schienenverordnung, ggf. OP bei schwerer Kontraktur.\n- **Bezugspersonen**: Anleitung zur Bewegungsförderung zuhause.\n\nDer DNQP-Expertenstandard Mobilität (2020) verlangt **interdisziplinäre** Kontraktur-Arbeit — keine Einzelleistung.",
          glossarBegriffe: ["Intertrigo", "Dekubitus", "interdisziplinär"],
        },
        contentB1: {
          title: "Folgen — nicht nur steife Gelenke",
          body: "**Körperlich:**\n- **Druckstellen**: In Hautfalten entstehen neue Dekubitus-Stellen.\n- **Lungenentzündung**: Der Brustkorb bewegt sich weniger, die Atmung wird flach. Mehr Gefahr für eine Pneumonie.\n- **Hautpilz (Intertrigo)**: Zwischen den Fingern und Zehen sammelt sich Feuchtigkeit.\n- **Wunden in der Kniekehle**: Im schlimmsten Fall Amputation.\n\n**Seelisch und sozial:**\n- **Schmerzen**: Dauerhaft in den steifen Gelenken.\n- **Mehr Pflege nötig**: Waschen, Anziehen, Essen dauern länger.\n- **Rückzug**: Der Patient kann weniger mitmachen, wird traurig.\n\n**Wer arbeitet zusammen?**\n- **Pflege**: Jeden Tag bewegen, lagern, beobachten, dokumentieren.\n- **Physio**: Übungspläne, Schienen, Pflege schulen.\n- **Ergo**: Alltag trainieren, Hilfsmittel anpassen.\n- **Arzt**: Schmerzen behandeln, Schienen verordnen, manchmal OP.\n- **Familie**: Zuhause weiter bewegen.\n\nDer **Expertenstandard Mobilität** (DNQP 2020) verlangt: **Alle arbeiten zusammen** — kein Einzelkämpfer.",
          glossarBegriffe: ["Intertrigo"],
        },
        question: {
          fragetext:
            "Welche der folgenden Folgeprobleme entstehen direkt durch Kontrakturen? (Mehrere richtig)",
          multiSelect: true,
          optionen: [
            {
              text: "Dekubitus durch Zwangshaltung in Hautfalten",
              isCorrect: true,
              explanation:
                "Richtig. Durch Kontraktur-bedingte Zwangshaltungen entstehen Druckstellen an ungewöhnlichen Stellen (z.B. Knieinnenseite, Hautfalten). Kontrakturprophylaxe ist immer auch Dekubitusprophylaxe.",
              explanationB1:
                "Richtig. Steife Gelenke erzwingen ungünstige Lagen. Druckstellen entstehen in Hautfalten.",
            },
            {
              text: "Pneumonierisiko durch Brustkorbfixation und flache Atmung",
              isCorrect: true,
              explanation:
                "Richtig. Kontrakturen des Brustkorbbereichs schränken die Atemtiefe ein. Kontrakturprophylaxe ist damit immer auch Pneumonieprophylaxe.",
              explanationB1:
                "Richtig. Wenn der Brustkorb sich nicht mehr gut bewegt, wird die Atmung flach. Das erhöht das Lungenentzündungsrisiko.",
            },
            {
              text: "Intertrigo (Pilzinfektion) in Finger- und Zehenfalten",
              isCorrect: true,
              explanation:
                "Richtig. Bei Finger- und Zehengelenkkontrakturen sammelt sich Feuchtigkeit in den Falten, was Pilzinfektionen (Intertrigo) begünstigt.",
              explanationB1:
                "Richtig. In den Falten zwischen Fingern und Zehen sammelt sich Feuchtigkeit. Pilze wachsen.",
            },
            {
              text: "Erhöhtes Sturzrisiko durch verbesserte Mobilität",
              isCorrect: false,
              explanation:
                "Nicht ganz — Kontrakturen reduzieren die Mobilität und erhöhen dadurch das Sturzrisiko, nicht weil die Mobilität verbessert wird, sondern weil sie eingeschränkt ist. 'Verbesserte Mobilität' ist kein Kontraktur-Folgeproblem.",
              explanationB1:
                "Nein — Kontrakturen machen die Mobilität schlechter, nicht besser. Dadurch steigt das Sturzrisiko.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Intertrigo", "Freiheitsentziehende Maßnahme (FeM)"],
    karteikarten: [],
  },
];
