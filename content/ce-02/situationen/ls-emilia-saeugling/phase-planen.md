# Phase 3 — Planen

**situationId:** ls-emilia-saeugling
**Phase:** planen (Phase 3 von 6)
**Zeit:** ~15–25 Min
**Bloom:** B3–B4
**Kern-Frage:** Welche Maßnahmen braucht Emilia — und welche Ziele setzen wir für die nächsten 24 Stunden?
**Steps:** 5

---

## Kontext

Du hast Emilia beobachtet. Das Bild ist klar: Trinkschwäche durch Atemwegsbehinderung, leichter Flüssigkeitsdefizit, Mutter Laura verunsichert. Der Arzt hat die stationäre Behandlung angeordnet: Beobachtung, engmaschige Flüssigkeitsbilanz, keine i.v.-Infusion zunächst — orales Angebot optimieren. Jetzt planst du gemeinsam mit Laura und dem Team die konkreten Pflegeziele und Maßnahmen für die nächsten 24 Stunden.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-pflegeziele-formulieren` | **freetext** (kurz, 2-3 Sätze) | B4 | *"Formuliere 2 Pflegeziele für Emilia für die nächsten 24 Stunden."* KI-Feedback prüft: Ziele messbar (nicht "Emilia soll besser trinken" sondern "Emilia trinkt in 24h mindestens 5× und produziert min. 5 nasse Windeln"), zeitgebunden, realistisch. Für B1-Schüler: Vorschläge zur Auswahl mit Begründungsaufgabe statt Freitext. Bloom 4 — Analysieren + Formulieren. | pflege |
| 3.2 | `plan-02-fluessigkeitsbilanz-konzept` | **text** (displayFormat: `stepbystep`) | B3 | Erklär-Step: Was ist eine Flüssigkeitsbilanz beim Säugling? Vier Schritte: 1) Einfuhr dokumentieren (ml beim Stillen geschätzt, Abpumpen messbar), 2) Ausfuhr dokumentieren (Windeln wiegen — vor und nach dem Wechseln, 1 g ≈ 1 ml), 3) Bilanz berechnen (Einfuhr minus Ausfuhr), 4) Bilanz mit Arzt besprechen. Normwert: Säugling 4 Monate braucht ~800-900 ml/d Flüssigkeit. *(Hoehl/Kullick, 2019)* | pflege |
| 3.3 | `plan-03-massnahmen-matrix` | **matrix** (2×3) | B4 | Matrix: Maßnahmen nach Ziel und Verantwortung einordnen. Zeilen: Flüssigkeitszufuhr verbessern / Mutter entlasten und anleiten / Atemwegsbehinderung reduzieren. Spalten: Pflege / Arzt / Mutter Laura. 9 Karten einsortieren: Nasensekret absaugen (Pflege), häufigere aber kürzere Stillmahlzeiten anbieten (Mutter), Nasentropfen NaCl 0,9% (Arzt-Anordnung), Windeln wiegen und dokumentieren (Pflege), Mutter beim Baden anleiten (Pflege), Arztvisite benachrichtigen wenn Zustand verschlechtert (Pflege), Emilia nach dem Stillen aufrecht halten (Mutter), Umgebungstemperatur im Zimmer prüfen ~20-22°C (Pflege). | pflege |
| 3.4 | `plan-04-schlafposition-sids` | **mc** (Single-Choice) | B4 | *"Laura fragt dich: 'Wenn Emilia Schnupfen hat, schläft sie besser auf der Seite — darf ich das?'"* A) Ja, bei Schnupfen ist Seitenlage empfohlen. B) Nein — Emilia muss immer auf dem Rücken schlafen, auch mit Schnupfen. C) Das entscheidet der Arzt, ich sage dazu nichts. D) Halbsitzend wäre besser, 30° erhöhter Oberkörper. **Richtig: B.** Rückenlage ist SIDS-Prävention — sie gilt immer, auch bei Erkältung. Falsch-Feedback bei A: Die AAP-Empfehlung (2022) ist klar: Rückenlage für alle gesunden Säuglinge, auch bei leichten Atemwegsinfekten, keine Ausnahme ohne Arztanweisung. **Trigger für Baustein `saeuglingspflege-schlafposition-sids` Stufe 2–3.** | pflege |
| 3.5 | `plan-05-prioritaeten-sequencing` | **sequencing** | B3 | Reihenfolge der geplanten Maßnahmen für die nächste Stunde festlegen: [Nasensekret sanft absaugen → Trinkversuch (Mutter stillt)] → [Windel wechseln und Windel wiegen] → [Emilia in aufrechter Position 15 Min halten] → [Dokumentation Trinkversuch und Windelgewicht] → [Hautzustand prüfen — Windelbereich]. Bloom 3 — Reihenfolge nach Dringlichkeit. | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 3.6 | `plan-opt-bilanz-berechnung` | **calculation** | B3 | Fortgeschrittene die Bilanz-Mathematik üben wollen | Emilia hat heute getrunken (geschätzt): 4× je 60 ml + 1× 40 ml = 280 ml. Windeln: 3 Windeln à 30 g, 40 g, 25 g Nass-Überschuss (Tara abgezogen) = 95 ml Urin + 1 Stuhl (nicht bilanziert). Bilanz: 280 ml minus 95 ml = +185 ml. Interpretiere: Positive Bilanz — aber unter dem Tagesbedarf von ~800 ml. Was bedeutet das? | pflege |
| 3.7 | `plan-opt-pflegeprozess-verbindung` | **flipcard** | B2 | B1-Schüler | Vorderseite: "Was kommt NACH der Planung im Pflegeprozess?" Rückseite: "Durchführung der Maßnahmen — du setzt jetzt das um was du geplant hast. Danach: Evaluation — hat es gewirkt? Das ist der 6-Schritte-Kreislauf nach Fiechter/Meier (1981)." | pflege |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| Step 3.1 — Pflegeziele nicht messbar formuliert | `pflegeprozess-zielformulierung` | Stufe 2–3 |
| Step 3.4 — Antwort A oder D gewählt | `saeuglingspflege-schlafposition-sids` | Stufe 2–3 |
| Step 3.5 — Reihenfolge falsch | `pflegeprozess-planung-prioritaeten` | Sequencer wählt |

---

## Phase-3-Abschluss

*Zwischenseite:* "Der Plan steht: engmaschige Flüssigkeitsbilanz, häufigere kürzere Stillmahlzeiten, Nasenpflege vor jedem Trinken, Rückenlage immer. Laura weiß was sie tun kann. Jetzt setzen wir das um."
