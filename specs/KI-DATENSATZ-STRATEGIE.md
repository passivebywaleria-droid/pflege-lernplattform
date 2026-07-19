# KI-Datensatz-Strategie — Pflegefachwissen als Trainings-Asset

> **Kernidee:** Wir bauen KEIN eigenes Foundation-Modell (zu teuer, unnötig). Aber
> während wir die CE Wort für Wort lesen, gegrounden und paraphrasieren, entsteht der
> teuerste Rohstoff überhaupt: ein kuratierter, quellenbelegter, von einer Pflege-
> pädagogin geprüfter, mit KB/Bloom/LE gelabelter Pflegefachwissens-Datensatz. Dieses
> Spec hält fest, wie die Content-Arbeit NEBENBEI datensatz-fähig bleibt — ohne
> Mehraufwand und ohne Pilot-Delay.

## Die Lizenz-Trennlinie (unverhandelbar)

Es gibt zwei Ebenen im Content — sie dürfen NIE vermischt werden:

| Ebene | Beispiel | Urheberrecht | Trainierbar? |
|-------|----------|--------------|--------------|
| **Verbatim-Beleg** (intern) | Zitat aus I-Care/Pflege heute in den Kernfakten | geschützt (fremd) | ❌ **NIE** in ein Modell, das Ausgaben erzeugt |
| **Paraphrase/Autoren-Ebene** (Produkt) | unser kerntext, unsere Q&A, unser Feedback | unser Werk | ✅ ja |

Ein Modell, das geschützte Passagen reproduziert, ist dieselbe Urheberrechtsfalle wie
sichtbare Zitate. Unsere Paraphrasier-Disziplin (5-Wort-Abstandstest = 0 Treffer) macht
die Produkt-Ebene von sich aus trainings-sauber. Die Verbatim-Belege bleiben ausschließlich
internes Prüf-Material (Grounding, Faktentreue) — sie werden im Export **hart ausgeschlossen**.

## Datenschema der Trainings-Paare (fällt aus dem Content heraus)

Jeder Baustein/Step liefert ohne Zusatzarbeit gelabelte Paare:

### 1. Grounding-/Faktentreue-Paare (aus Kernfakten)
```
{ claim: <paraphrasierte Aussage>, quelle: <Primärquelle sichtbar>,
  kernfaktId: "F-XX", kb: "I.4", ce: "ce-06", le: "CE06-LE1-W1",
  _belegVerbatim: <NUR intern, NICHT exportieren> }
```
Nutzen: bringt einem Modell bei, Aussagen an Quellen zu binden (Anti-Halluzination).

### 2. Instruktions-/QA-Paare (aus Frage-Steps)
```
{ frage: <fragetext>, korrekt: <richtige Option>,
  distraktoren: [<falsche Optionen>], erklaerung: {richtig, warum_falsch[]},
  stepType, bloom, kb, ce, le }
```
Nutzen: Instruction-Tuning auf echte Pflege-Prüfungslogik.

### 3. Präferenz-Paare (aus richtig vs. falsch + Erklärung)
```
{ prompt: <fragetext>, chosen: <richtige Antwort+Begründung>,
  rejected: <plausibler Anfängerfehler+warum falsch> }
```
Nutzen: DPO/Präferenz-Training — Modell lernt die fachlich bessere Antwort zu bevorzugen.

### 4. Didaktik-Stil-Paare (aus Sandwich-Feedback)
```
{ situation: <Schülerantwort/Fehler>, feedback: <Sandwich: loben→korrigieren→ermutigen>,
  b1_variante: <feedbackB1> }
```
Nutzen: prägt den „Carovia-Tutor"-Ton (nie abwertend, B1-fähig, standardsbelegt).

### 5. Klassifikations-Labels (aus Markern)
kb · bloom · le · themaPrimaer · situationsTyp → für Klassifikatoren + Coverage-Analyse.

## Drei Verwertungswege — gestaffelt

1. **JETZT — RAG (kein Training):** Der KI-Tutor (VISION) beantwortet Fragen aus den
   gegroundeten CE-Inhalten (Llama 3.3 / Nebius EU, DSGVO-konform, anonymisiert). Braucht
   nur den Korpus, den wir eh bauen. Grounding-Paare (#1) = Retrieval-Basis.
2. **SPÄTER — Fine-Tune (LoRA auf offenes Modell, z. B. Llama/Mistral):** mit #2–#4 →
   ein pflegespezialisierter Tutor in unserem didaktischen Stil. Bezahlbar, sobald genug
   Paare vorliegen. Nur auf der Paraphrase-Ebene.
3. **IMMER — Gold-Benchmark:** Die geprüften Inhalte messen jedes Modell (Halluzination?
   fachlich korrekt? richtiger KB/Bloom?). Test-Set aus zurückgehaltenen Bausteinen.

## DSGVO

- Fachinhalte enthalten keine personenbezogenen Daten → unkritisch.
- Falls später auf ECHTEN Schüler-Interaktionen fine-getunt wird: nur anonymisiert
  (kein Name, keine User-ID — bestehende Nebius-Regel), Server DE.

## Was jetzt zu tun ist (fast nichts)

Kein Extra-Bau. Nur Disziplin, die wir ohnehin haben:
- [ ] sauber paraphrasieren (Abstandstest 0) — schon Pflicht
- [ ] Marker vollständig (kb/bloom/le/kernfaktId) — schon Pflicht
- [ ] Verbatim-Belege strikt getrennt in den Kernfakten (nie im Produkt-String) — schon Pflicht
- [ ] später: ein kleines Export-Skript `scripts/export-trainingset.ts`, das aus den
  TypeScript-Content-Objekten die Paare #1–#5 assembliert und die `_belegVerbatim`-Felder
  hart herausfiltert. (Erst bauen, wenn wir trainieren wollen — der Content liegt schon
  im richtigen Format vor.)

> Fazit: Wir halten die Option auf ein eigenes Pflege-KI offen, ohne heute etwas Zusätzliches
> zu bauen. Der Datensatz wächst mit jedem Baustein mit.
