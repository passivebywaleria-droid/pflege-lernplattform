# Phase Informieren — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**Phase:** informieren (1 von 6)
**Bloom:** B2–B3
**Zeit:** ~20–35 Min
**Steps:** 6 (5 Kern + 1 Optional)
**Kern-Frage:** Was weiß ich über Frau Yilmaz? Wie bereite ich mich auf das erste Gespräch vor?

---

## Kontext

Du stehst im Stationszimmer der orthopädischen Station. Es ist 7:40 Uhr. Frau Wendt, deine Praxisanleiterin, hat dir gerade die Übergabe für Frau Yilmaz gegeben. Du weißt:

- **Frau Ayşe Yilmaz, 79 Jahre**, 3. Tag nach Hüft-TEP rechts
- Gestern war der erste Aufstehversuch — er wurde abgebrochen (NRS 7, Schmerz zu stark nach 2 Minuten an der Bettkante)
- **Mobilisationsstufe 3**: Aufstehen mit Unterarmgehstützen erlaubt, Belastung rechts bis 20 kg
- **Lagerungsvorschrift** aktiv: Hüftbeugung < 90°, keine Beinkreuzung
- **Antikoagulation** läuft, Redon-Drainage noch in situ
- Ehemann Mustafa ist bereits da, spricht kein Deutsch

Frau Wendt sagt:
> _"Heute muss der Aufstehversuch klappen — Tag 3 ist der optimale Zeitpunkt nach dieser OP-Art. Schau zuerst wie es ihr geht, dann planen wir gemeinsam. Ich bin nebenan."_

Du hast 5 Minuten, bevor du das Zimmer betrittst. Was machst du mit diesen 5 Minuten?

---

## Kern-Steps

### Step 1.1 — Übergabe verstehen

| Feld | Wert |
|------|------|
| **Step-ID** | `info-01-uebergabe-lesen` |
| **Step-Typ** | `text` (displayFormat: `scenario`) |
| **Bloom** | B2 |
| **Tag** | pflege |

**Inhalt:**

Vor dir liegt die verkürzte SBAR-Übergabe aus der Pflegedokumentation:

---

**S — Situation:**
Frau Yilmaz, Zi. 12, 79 J., 3. post-OP-Tag nach Hüft-TEP rechts (Oberschenkelhalsbruch nach Sturz). Redon-Drainage in situ, Fördermenge heute Morgen 40 ml serös-blutig.

**B — Background:**
Diabetes mellitus Typ 2 (orale Antidiabetika), Adipositas (BMI 34). Analgesie: Metamizol 4× tgl., Ibuprofen bei Bedarf. Fondaparinux 2,5 mg s.c. tgl. seit OP-Tag. Lagerungsvorschrift aktiv (Hüftbeugung < 90°, kein Überkreuzen). Sprache: Türkisch/Deutsch (mit Akzent, versteht alles).

**A — Assessment:**
Gestern erster Aufstehversuch abgebrochen — Schmerz NRS 7 nach 2 Min. an Bettkante. Haut Steiß und Fersen noch unauffällig laut Nachtdienst. Schlaf unruhig, mehrfach geläutet.

**R — Recommendation:**
Heute erneuter Aufstehversuch geplant. Schmerzassessment vor Mobilisation. Ehemann anwesend, kommuniziert nur auf Türkisch.

---

*(Lese-Step — du verarbeitest die Information, bevor du handelst. Kein richtig/falsch.)*

**Übergangstext:** "Du hast die Übergabe gelesen. Eine Information fällt dir besonders auf: Der Aufstehversuch ist gestern gescheitert. Bevor du das Zimmer betrittst — was weißt du jetzt über die Herausforderung, die heute vor dir liegt?"

---

### Step 1.2 — Prioritäten setzen

| Feld | Wert |
|------|------|
| **Step-ID** | `info-02-priortaet-setzen` |
| **Step-Typ** | `mc` (Single-Choice) |
| **Bloom** | B3 |
| **Tag** | pflege |

**Frage:** "Was ist beim ersten Betreten des Zimmers DEINE wichtigste Aufgabe?"

**Optionen:**
- A) Sofort den Aufstehversuch ankündigen, damit keine Zeit verloren geht
- B) Frau Yilmaz begrüßen, kurz prüfen wie es ihr geht, dann gemeinsam planen ✅
- C) Zuerst die Redon-Drainage kontrollieren — das ist medizinisch am dringlichsten
- D) Den Ehemann bitten, das Zimmer kurz zu verlassen

**Richtige Antwort:** B

**Feedback B (richtig):** "Genau — der erste Eindruck entscheidet über das Vertrauen. Wer gleich mit dem Aufstehversuch anfängt, bevor er weiß wie es Frau Yilmaz geht, riskiert, dass die Mobilisation scheitert — nicht wegen des Schmerzes, sondern wegen fehlendem Vertrauen. Begrüßen, hören, dann gemeinsam vorgehen."

**Feedback A (falsch):** "Du denkst an das Ziel — das ist gut. Aber Effizienz ohne Beziehung funktioniert in der Pflege selten. Wenn Frau Yilmaz sich überrumpelt fühlt, wird der Aufstehversuch wahrscheinlich erneut scheitern. Zuerst die Situation einschätzen — dann den Plan machen."

**Feedback C (falsch):** "Die Drainage ist wichtig und wird kontrolliert — aber nicht zuerst. Die Drainage gibt dir Informationen, entscheidet aber nicht über das Handeln in den nächsten Minuten. Medizinisch ist alles stabil. Der Mensch vor dir ist die erste Priorität."

**Feedback D (falsch):** "Ehemann Mustafa wegzuschicken wäre ein Fehler. Er gibt Frau Yilmaz Sicherheit — in einem fremden, deutschen Krankenhaus, nach einer schweren OP. Den Angehörigen einzubeziehen (auch wenn er kein Deutsch spricht) ist Teil der ganzheitlichen Pflege. Kommunikation mit Händen und Füßen ist besser als keine Kommunikation."

---

### Step 1.3 — Zimmer betreten: Dialog

| Feld | Wert |
|------|------|
| **Step-ID** | `info-03-dialog-begruessung` |
| **Step-Typ** | `dialog` (3 Entscheidungspunkte) |
| **Bloom** | B3 |
| **Tag** | pflege |

**Szenario:** Du betrittst Zimmer 12. Frau Yilmaz liegt im Bett, das Kopfteil ist leicht erhöht. Ehemann Mustafa sitzt auf dem Stuhl rechts neben ihr, nickt dir zu. Du tritt näher heran.

**Patientenzitat Z2:** _"Können wir das nicht morgen machen? Es tut weh."_

*(Frau Yilmaz sagt das, bevor du ein Wort sagst.)*

**Entscheidung 1 — Wie reagierst du?**

- A) "Frau Yilmaz, ich verstehe Sie — aber heute müssen wir aufstehen, das ist medizinisch wichtig."
- B) "Guten Morgen, Frau Yilmaz. Ich höre Sie — das tut weh. Darf ich mich kurz zu Ihnen setzen?" ✅
- C) "Erst schauen wir, wie es Ihnen geht, dann entscheiden wir gemeinsam."

**Feedback bei B (richtig):** "Genau das ist Gesprächsführung in der Pflege. Du bestätigst zuerst was sie sagt — das signalisiert: Ich höre dich. Dann fragst du um Erlaubnis, dich zu setzen — das gibt ihr Kontrolle. Frau Yilmaz entspannt sich ein bisschen."

**Feedback bei A (falsch):** "Du hast recht, dass Mobilisation heute medizinisch sinnvoll ist — aber dieser erste Satz läuft direkt gegen ihre Angst. Sie hört: 'Wir machen das, ob du willst oder nicht.' Das erzeugt Widerstand. Erster Schritt: bestätigen, dann informieren."

**Fortsetzung (nach Entscheidung):**

Du sitzt jetzt neben Frau Yilmaz. Du lächelst auch kurz Mustafa zu — er nickt zurück.

**Entscheidung 2 — Wie beziehst du Mustafa ein?**

- A) Kurz nicken und bei Frau Yilmaz weitermachen — er versteht ja sowieso nichts
- B) Frau Yilmaz fragen: "Darf ich Ihren Mann kurz grüßen?" und ihm dann ein paar Gesten machen (Lächeln, Nicken, Hand aufs Herz) ✅
- C) Den Dolmetscher-Service anrufen (dauert 30 Minuten)

**Feedback bei B (richtig):** "Mustafa ist Ehemann — kein Möbelstück. Auch ohne gemeinsame Sprache kann man Respekt und Vertrauen zeigen. Frau Yilmaz sieht, dass ihr Mann einbezogen wird — das stärkt ihr Vertrauen in dich."

---

### Step 1.4 — Dokumentation prüfen (Lagerungsvorschriften)

| Feld | Wert |
|------|------|
| **Step-ID** | `info-04-lagerungsregel-pruefen` |
| **Step-Typ** | `matching` |
| **Bloom** | B2 |
| **Tag** | pflege |

**Aufgabe:** "Ordne die folgenden Lagerungsregeln nach Hüft-TEP dem richtigen Grund zu."

| Lagerungsregel | Grund |
|----------------|-------|
| Hüftbeugung < 90° | Luxationsprävention — Oberschenkel darf Beckenwinkel nicht überschreiten |
| Keine Beinkreuzung | Luxationsprävention — Innenrotation erhöht Luxationsrisiko |
| Erhöhte Kopflagerung max. 30° | Hüftbeugung kontrollieren — zu starkes Aufsitzen = Hüftwinkel > 90° |
| Kissen zwischen die Beine in Rückenlage | Adduktionsprophylaxe — Beine auseinanderhalten, kein Überkreuzen im Schlaf |

**Feedback (richtig):** "Gut. Die Lagerungsregeln sind kein Selbstzweck — jede Regel verhindert eine spezifische Gefahr. Das musst du wissen, damit du es Frau Yilmaz erklären kannst — und damit du erkennst, wenn etwas nicht stimmt."

**Feedback (falsch):** "Diese Regeln kommen aus der chirurgischen Nachsorge nach Hüft-TEP. Die wichtigste: Hüftbeugung < 90° — das Hüftgelenk ist noch nicht vollständig eingewachsen, ein falscher Winkel kann zur Luxation führen. Das ist schmerzhaft und erfordert sofortige Reposition."

**Baustein-Trigger:** Wenn Schüler < 2 Paare richtig zuordnet → `mobilisation-lagerungsregel-tep` einblenden (Stufe je nach Profil).

---

### Step 1.5 — Zusammenfassung und Ziel formulieren

| Feld | Wert |
|------|------|
| **Step-ID** | `info-05-ziel-formulieren` |
| **Step-Typ** | `selfrating` |
| **Bloom** | B2 |
| **Tag** | pflege |

**Aufgabe:** "Bevor wir weitermachen: Wie gut kennst du die Situation von Frau Yilmaz jetzt?"

Skala 1–5:
- 1 — Ich bin noch unsicher, ich brauche mehr Information
- 2 — Ich kenne die wichtigsten Fakten
- 3 — Ich verstehe die Situation medizinisch und emotional
- 4 — Ich kann die Lage gut einschätzen und einen Plan formulieren
- 5 — Ich könnte das jetzt selbstständig machen

*(Kein richtig/falsch — ehrliche Selbsteinschätzung. Wird in Phase 5 gespiegelt.)*

**Übergangstext:** "Du hast die Übergabe verarbeitet, Frau Yilmaz begrüßt und erste Infos gesammelt. Was du noch nicht weißt: Wie schmerzhaft ist es wirklich gerade? Wie sieht ihre Haut aus? Gibt es Anzeichen für eine Thrombose? Das klärst du jetzt — Phase 2: Beobachten."

---

## Optionaler Step

### Step 1.6 (Optional) — SBAR-Übung

| Feld | Wert |
|------|------|
| **Step-ID** | `info-06-sbar-optional` |
| **Step-Typ** | `fillin` (Lückentext) |
| **Bloom** | B2 |
| **Für wen** | B1-Schüler, die SBAR noch nicht kennen |
| **Tag** | pflege |

**Aufgabe:** "Fülle die Lücken im SBAR-Schema aus. Nutze die Informationen aus dem Kontext."

| SBAR-Element | Bedeutung | Beispiel aus Frau Yilmaz' Fall |
|---|---|---|
| **S** — Situation | Was ist gerade das Problem? | Frau Yilmaz, 79 J., Tag ___ nach Hüft-TEP rechts |
| **B** — Background | Was ist der medizinische Hintergrund? | Diabetes Typ 2, ___, Lagerungsvorschriften aktiv |
| **A** — Assessment | Was beobachte ich jetzt? | Erster Aufstehversuch gestern gescheitert (NRS ___) |
| **R** — Recommendation | Was soll als nächstes passieren? | Erneuter Aufstehversuch heute, vorher ___ |

**Lösungen:** 3 / Adipositas (BMI 34) / 7 / Schmerzassessment

**Baustein-Trigger:** Wenn Schüler in SBAR-Elementen Fehler macht → `pflegedokumentation-sbar-schema` einblenden (Stufe 3).

---

## Baustein-Trigger (Phase informieren)

| Trigger | Baustein-ID | Stufe |
|---------|-------------|-------|
| Step 1.4 < 2 richtig | `mobilisation-lagerungsregel-tep` | Sequencer wählt (1-3) |
| Step 1.6 Fehler in SBAR | `pflegedokumentation-sbar-schema` | Stufe 3 (B1) / Stufe 2 (B2) |

---

## Phase-Abschluss

**Zwischenseite:** "Du bist bei Frau Yilmaz angekommen. Sie liegt im Bett, ist wach, etwas angespannt. Ehemann Mustafa sitzt daneben. Du hast die Lage verstanden.

Jetzt kommt der wichtigste Teil: Was siehst du, wenn du genauer hinschaust? Schmerz? Haut? Thrombose-Zeichen? Genau das klärst du in Phase 2."
