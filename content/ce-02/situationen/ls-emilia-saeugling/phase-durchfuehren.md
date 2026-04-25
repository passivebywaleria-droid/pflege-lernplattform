# Phase 4 — Durchführen

**situationId:** ls-emilia-saeugling
**Phase:** durchfuehren (Phase 4 von 6)
**Zeit:** ~25–40 Min
**Bloom:** B4–B5
**Kern-Frage:** Wie führe ich das Säuglingsbad, das Wickeln und die Mutterberatung richtig durch — und wie reagiere ich, wenn Mutter Laura plötzlich weint?
**Steps:** 7 (inkl. 1 großes Branching — Komplikation Mutter weint)
**Komplikationen:** K1 (Mutter weint — emotionale Überforderung), K2 (Emilia schreit beim Baden)

---

## Kontext

Es ist 10:00 Uhr. Emilia hat eine kleine Trinkmahlzeit hinter sich — besser als erwartet, 40 ml in zwei Versuchen. Die Windel ist nass, Stuhl gelblich-pastös, Turgor stabil. Jetzt: Säuglingsbad. Das ist auch ein Lehrmoment für Laura — sie hat Emilia noch nie richtig gebadet, nur Katzenwäsche gemacht. Du wirst das Bad durchführen und Laura dabei anleiten. Andrea schaut kurz rein, geht aber dann wieder — du bist verantwortlich.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.1 | `dur-01-bad-vorbereitung-sortierung` | **sorting** | B4 | Sortierung: Was bereitest du VOR dem Bad vor? Karten in die richtige Reihenfolge: [Wanne füllen — 37°C Wassertemperatur messen mit Badethermometer] → [Alle Materialien griffbereit legen: Handtuch, frische Windel, Kleidung, Seife falls nötig] → [Raumtemperatur prüfen: min. 24°C, kein Luftzug] → [Eigene Hände waschen] → [Laura erklären was jetzt passiert] → [Emilia ausziehen — erst dann ins Wasser]. Bloom 4 — Risikoeinschätzung (Auskühlung, Verbrühung). | pflege |
| 4.2 | `dur-02-infant-handling-erklaert` | **text** (displayFormat: `stepbystep`) | B3 | Erklär-Step vor dem Bad: Infant Handling beim Säuglingsbad. 5 Prinzipien: 1) Kopf immer sicher halten (Nacken liegt auf dem Unterarm), 2) Haltearm schafft feste Führung, freie Hand wäscht, 3) Bewegungen langsam und ankündigen (Emilia braucht Zeit zum Registrieren), 4) Erst Gesicht (trockener Waschlappen), dann Körper, zuletzt Haare — nach unten, damit Schmutz nicht nach oben gelangt, 5) Augen wischen von innen nach außen. *(Hoehl/Kullick, 2019 — Infant Handling)* | pflege |
| 4.3 | `dur-03-bad-durchfuehren` | **dialog** (5 Phasen) | B4 | Langer Dialog-Step: Du führst das Bad durch, Laura schaut zu. Schritt für Schritt benennt die Plattform was du tust und fragt dich was als nächstes kommt. Zwischendurch fragt Laura: **Zitat Z4:** *"Darf ich das auch mal machen? Ich habe sie noch nie richtig gebadet — immer nur Katzenwäsche zuhause."* Du wählst: A) "Heute nicht — das mache ich erst." B) "Gerne — ich zeige dir jetzt und beim nächsten Bad bist du dran, ich helfe dir." C) "Du kannst jetzt gleich die Haare waschen." Richtig: B — Anleitung statt Übernahme. Bloom 4 — Entscheidung im Handlungsmoment. | pflege |
| 4.4 | `dur-04-wickeln-kinaesthetik` | **sequencing** | B4 | Reihenfolge beim kinästhetischen Wickeln: [Emilia sicher auf Wickelunterlage ablegen] → [Schmutzige Windel nach vorne klappen, Emilia anheben durch Griff am Becken — nie an den Knöcheln ziehen!] → [Reinigung von vorne nach hinten] → [Haut trockentupfen] → [Frische Windel unterlegen, Becken sanft ablegen] → [Windel schließen — nicht zu fest, 1-2 Finger Platz] → [Kleidung anziehen]. Bloom 4 — korrektes Handling verhindert Hüftschaden. **Trigger für Baustein `kinaesthetik-infant-handling` falls Reihenfolge falsch.** | pflege |
| 4.5 | `dur-05-mutter-anleitung` | **branching` (HAUPT-BRANCHING — Komplikation Mutter weint)` | B5 | **KOMPLIKATION K1.** Nach dem Bad sitzt Laura mit Emilia auf dem Bett. Sie schaut lange auf Emilia. Dann weint sie leise. **Zitat Z5:** *"Tut mir leid... ich weiß nicht was los ist mit mir. Ich bin einfach so müde. Und ich will das alles richtig machen für sie."* Du musst jetzt entscheiden. Pfad A: "Nehmen Sie sich ruhig einen Moment. Das ist alles sehr viel gerade." → (richtig) → führt zu Dialog-Step mit aktiver Zuhörung. Pfad B: "Ach, das ist doch alles gut gegangen, Emilia geht es gut!" → (falsch — Entwertung) → Erklärung: Bypassing — warum es nicht hilft, wenn man die Emotion wegerklärt. Pfad C: Aus dem Zimmer gehen und Andrea holen. → (Zwischenpfad — Feedback: Unterstützung holen ist okay, aber kurz da sein zuerst). | pflege |
| 4.6 | `dur-06-beratung-nach-komplikation` | **text** (displayFormat: `scenario`) | B4 | Nach Pfad A: Du setzt dich neben Laura. Drei Elemente guter Beratung in dieser Situation: 1) Aktive Zuhörung — nicht sofort Ratschläge, erst verstehen (offene Frage: "Was macht dir am meisten zu schaffen gerade?"), 2) Normalisieren ohne Entwerten ("Vielen Müttern geht es so — Erschöpfung nach schlaflosen Nächten ist normal"), 3) Konkretes anbieten ("Was würde dir jetzt helfen? Magst du kurz schlafen während ich Emilia beobachte?"). Quelle: *(Kommunikation im Gesundheitswesen — aktive Zuhörung; [Transfer])* | pflege |
| 4.7 | `dur-07-schlafposition-abschluss` | **mc** (Single-Choice) | B4 | Du legst Emilia nach dem Bad zum Schlafen hin. Laura fragt: *"Wie lege ich sie am besten hin?"* A) Seitlage mit Decke unter den Arm B) Bauchlage, so atmet sie besser C) Rückenlage, ohne Kopfkissen, ohne lockere Bettwäsche, in der eigenen Schlafumgebung D) Schräglage 30°. **Richtig: C.** SIDS-Prävention: Rückenlage, feste Matratze, kein Kissen, kein Kuscheltier im Schlafbereich des Säuglings. *(AAP, 2022)* | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 4.8 | `dur-opt-babyhaut-pflege` | **text** (displayFormat: `checklist`) | B2 | B1-Schüler | Was kommt ans Baby — was nicht? Checkliste: ✓ Wasser allein (reicht meist), ✓ pH-neutrale Baby-Waschlotion wenn nötig, ✗ Parfümierte Seifen, ✗ Alkohol-haltige Pflegeprodukte, ✗ Puder (Einatmungsgefahr). *(Hoehl/Kullick, 2019)* | pflege |
| 4.9 | `dur-opt-windeldermatitis` | **flipcard` | B3 | Mittlere bis Fortgeschrittene | Vorderseite: "Was ist Windeldermatitis — und wie verhinderst du sie?" Rückseite: "Windeldermatitis entsteht durch Kontakt der Haut mit Stuhl und Urin in der feuchten Windelumgebung. Prävention: Windeln häufig wechseln (alle 2-3h, sofort nach Stuhlgang), Haut nach Reinigung gut trocknen, Wundschutzpaste (z.B. Zinkoxid) bei Rötung. *(DGKJ, S2k-Leitlinie Windeldermatitis 2021)*" | pflege |

---

## Komplikations-Übersicht

| # | Trigger | Beschreibung | Step-Typ |
|---|---------|-------------|----------|
| K1 | Step 4.5 — nach Bad | Mutter Laura weint, Überforderung | **branching** |
| K2 | Step 4.3 — während Bad | Emilia schreit plötzlich laut | Text-Einblendung: kurze Erklärung (normales Verhalten beim Bad, kein Grund zum Abbruch) + Fortsetzung |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| Step 4.1 — Vorbereitungsreihenfolge falsch | `saeuglingspflege-badvorbereitung` | Stufe 2–3 |
| Step 4.4 — Wickeln-Reihenfolge falsch (besonders Hochheben an Knöcheln) | `kinaesthetik-infant-handling` | Stufe 2–3 |
| Step 4.5 — Pfad B gewählt (Entwertung) | `kommunikation-aktive-zuhoerung` | Stufe 2–3 |

---

## Phase-4-Abschluss

*Zwischenseite:* "Emilia ist sauber, warm, schläft auf dem Rücken. Laura hat Tränen und erste Entspannung gleichzeitig. Du hast heute nicht nur gepflegt — du hast begleitet. Jetzt: Wie wirkt das was ihr gemacht habt?"
