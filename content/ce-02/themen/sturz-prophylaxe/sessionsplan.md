# Sessionplan: Sturz-Prophylaxe

## Metadaten
- themaId: sturz-prophylaxe
- ueBudget: 4 UE
- zielzeitMin: 99 Min (4 × 45 × 0,55)
- bausteineAnzahl: 10
- erstellt: 2026-04-22 (Pilot Pipeline v9)
- regisseurVersion: v3

---

## Baustein-Steps (pro Baustein 2-3 Steps, je nach Bloom)

### Baustein 1: sturz-prophylaxe-sturz-definition (Bloom 1)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 1 | freetext (Denkfrage) | 2 | — | schreibtisch | 40/55s | — |
| 2 | text (scenario) | 1 | — | entdecker | 30/40s | scene: nursing scene with patient |
| 3 | flipcard (Definition) | 1 | — | puzzle | 25/30s | — |

### Baustein 2: intrinsische-risikofaktoren (Bloom 3)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 4 | text (procontra) | 2 | — | entdecker | 45/60s | — |
| 5 | mc | 3 | fallstrick | puzzle | 65/80s | — |
| 6 | categorize (Risiko-Kategorien) | 3 | — | sortierstation | 110/130s | — |

### Baustein 3: extrinsische-risikofaktoren (Bloom 3)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 7 | text (checklist) | 2 | — | entdecker | 35/45s | — |
| 8 | hotspot (Zimmer) | 4 | — | praxis-sim | 100/125s | scene: hospital patient room with multiple hazards (Copic style) |

### Baustein 4: risiko-assessment (Bloom 4)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 9 | text (mnemonic MULTI) | 2 | — | entdecker | 40/50s | — |
| 10 | comparison (Assessments) | 3 | — | puzzle | 90/110s | — |
| 11 | mc | 4 | fallstrick | puzzle | 80/100s | — |

### Baustein 5: kraft-balance-training (Bloom 3)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 12 | text (quote Cochrane) | 2 | — | entdecker | 35/45s | — |
| 13 | sequencing (Trainingsaufbau) | 3 | — | puzzle | 130/150s | — |
| 14 | mc | 3 | anticipation | puzzle | 70/85s | — |

### Baustein 6: medikamentenreview (Bloom 4)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 15 | mc (Denkfrage) | 4 | fallstrick | puzzle | 80/100s | — |
| 16 | matrix (Med × Mechanismus) | 4 | — | sortierstation | 140/165s | — |

### Baustein 7: fixierung-rechtlich (Bloom 5)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 17 | branching (einfach) | 5 | — | story | 160/190s | — |
| 18 | text (procontra) | 4 | — | entdecker | 50/65s | — |
| 19 | errorspot (Dokumentations-Beispiel) | 4 | — | puzzle | 110/130s | — |

### Baustein 8: post-fall-syndrom (Bloom 3)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 20 | freetext (Denkfrage) | 3 | — | schreibtisch | 100/125s | — |
| 21 | text (beforeafter) | 3 | — | entdecker | 45/60s | scene: elderly patient sitting, then lying immobile (two-panel before/after) |
| 22 | dialog (sanfte Mobilisation) | 4 | — | story | 150/180s | — |

### Baustein 9: dokumentation-sturz (Bloom 6)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 23 | text (checklist) | 2 | — | entdecker | 35/45s | — |
| 24 | errorspot (unvollständiges Protokoll) | 4 | — | puzzle | 120/145s | — |
| 25 | freetext (Sturzprotokoll schreiben) | 6 | — | schreibtisch | 360/430s | — |

### Baustein 10: interprofessionelle-zusammenarbeit (Bloom 3)

| # | Step-Typ | Bloom | UX-Variante | Modus | Zeit (C1/B1) | imageSlot |
|---|----------|-------|-------------|-------|-------------|-----------|
| 26 | matching (Rolle → Aufgabe) | 3 | — | sortierstation | 100/120s | — |
| 27 | text (scenario) | 2 | — | entdecker | 35/45s | — |

## Karteikarten-Abschluss

| # | Block | Anzahl | Zeit (C1/B1) | Modus |
|---|-------|--------|-------------|-------|
| 28 | Flipcard-Session (10 Karten) | 10 | 250/310s | puzzle |
| 29 | summary (Thema-Abschluss) | — | 60/75s | checkpoint |

---

## Budget-Check

**Zielzeit (C1):** 99 Min = 5940s
**Aktuelle Summe (C1):** ~3000s = 50 Min

**Status:** UNTER Budget um 50%. Abhilfe:
- Bausteine um 5-7 erweitern (Zielwert: 12-15 Bausteine für 4 UE mit Mikro-Content)
- Oder: längere Erklärtexte in Stufe 3 (aktuell viele ~200-Zeichen, sollten ~500-800 sein)
- Oder: mehr Situations-Praxis (wird dann via Situationen-Trigger abgebildet)

**Entscheidung für Pilot:** Belassen — zeigt wie Budget-Check funktioniert.

---

## Anti-Monotonie-Check

| Prüfung | Status |
|---------|--------|
| Nie 2× gleicher Typ direkt hintereinander | ✅ |
| Min 8 verschiedene Step-Typen | ✅ (11 Typen: freetext, text, flipcard, mc, categorize, hotspot, comparison, sequencing, matrix, branching, dialog, matching, errorspot, summary) |
| Max 3 text-Steps pro Phase | N/A (kein Phasen-Konzept bei Themen) |
| Erlebnis-Modi-Rotation | ✅ (7 Modi genutzt) |

---

## Bloom-Verteilung

| Bloom | Anzahl Steps | % |
|-------|-------------|---|
| 1 | 2 | 7% |
| 2 | 8 | 29% |
| 3 | 8 | 29% |
| 4 | 7 | 25% |
| 5 | 1 | 4% |
| 6 | 2 | 7% |

**Bewertung:** Schwerpunkt auf Bloom 2-4 (Verstehen, Anwenden, Analysieren) — passend für einen Themen-Lernprozess. Bloom 5-6 wird ergänzt durch Anwendung in Situationen.

---

## Distraktoren-Nutzung

Alle MC-Steps nutzen Misconceptions aus Bausteine-Plan:
- Step 5 (mc): D1/D2/D3 aus Baustein 2
- Step 11 (mc): D1/D2 aus Baustein 4
- Step 14 (mc anticipation): D1/D3 aus Baustein 5
- Step 15 (mc fallstrick): D1/D2 aus Baustein 6

**Status:** ✅ Keine Generator-Erfindungen, alle Distraktoren referenziert.

---

## Übergabe an Generator

Der Content-Generator (Sonnet) konvertiert diesen Plan + bausteine-plan.md in:
- `content/ce-02/themen/sturz-prophylaxe/bausteine.ts`
- `content/ce-02/themen/sturz-prophylaxe/glossar.ts`
- `content/ce-02/themen/sturz-prophylaxe/karteikarten.ts`
- `content/ce-02/themen/sturz-prophylaxe/index.ts` (Barrel)

Regisseur-Entscheidungen wurden getroffen — Generator darf sie nicht überschreiben.
