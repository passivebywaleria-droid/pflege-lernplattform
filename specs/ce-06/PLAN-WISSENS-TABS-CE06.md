# SPEC — CE-06 Wissens-Tabs: curriculum-first, belegt, Bloom- & KB-kalibriert

**Erstellt:** 2026-07-12
**Autor:** Senior-Product-Design-Durchgang (Claude) + Gründerin (Dozentin)
**Status:** Plan, wartet auf Freigabe
**Geltung:** CE-06 zuerst — etabliert das **Muster für alle 11 CE**.
**Auslöser:** CE-06 fehlen die Wissens-Bausteine komplett (215 `inlineWissen` in
CE-02, **0** in CE-06). Beschluss: nachbauen — aber richtig herum und in einer
Qualität, die uns von Novaheal & Co. abhebt.

---

## 0. Oberste Prinzipien (K.O.-Kriterien — kein Baustein geht live, der eines verletzt)

1. **Pflegefachlichkeit über allem.** Erst die Primärliteratur **wortwörtlich
   lesen**, dann schreiben. Nie aus dem Gedächtnis, nie aus Scout-Notizen.
2. **Urheberrecht.** Verbatim-Belege bleiben **intern** (Kernfakten). Der
   Produkt-Content ist **paraphrasiert** und besteht den **N-Gramm-Abstandstest**
   (`check-artikel-abstand.ts`, U1-Block). Sichtbar sind **Primärquellen/
   Standards**, nie Lehrbuch-Zitate.
3. **Curriculum-first.** Reihenfolge: **Rahmenlehrplan → Wissen → Anwendung.**
   Nicht Situation-first. Der Fachkommissions-Rahmenlehrplan (§ 53 PflBG) ist die
   Wahrheitsquelle (deutschlandweit gültig).

---

## 1. Die Methodik (die richtige Reihenfolge)

```
Rahmenlehrplan-Lernergebnisse (was MUSS der Schüler wissen/können?)
        ↓
Wissens-Landkarte (welche Wissens-Tabs deckt das ab?)
        ↓
Wissens-Tab je Thema (Literatur-belegt geschrieben)
        ↓
Anwendung in Situationen (das Wissen wird auf Bloom-Ziel-Stufe angewandt)
        ↓
Coverage-Nachweis (alle Lernergebnisse × alle 5 KB × richtige Bloom-Stufe)
```

Das Wissen ist die **Grundlage**, die Situation der **Anwendungsort** — nie
umgekehrt.

---

## 2. Grounding- & Urheberrechts-Architektur

| Ebene | Was | Sichtbar? |
|-------|-----|-----------|
| **Kernfakt** (`specs/ce-06/kernfakten/*.md`) | Fakt + **Verbatim-Zitat** aus `recherche/*-volltext/` | NEIN — intern |
| **Baustein-Content** (Produkt) | **paraphrasiert**, eigene didaktische Schöpfung | JA |
| **Quellenangabe** (Produkt) | **Primärquelle/Standard** (ERC 2021, DNQP, § BGB, ICN) | JA |
| **Prüf-Siegel** (Produkt) | „Fachlich geprüft von einer Pflegepädagogin" (neutral, ohne Name — Entscheidung Gründerin) | JA |

**Pflicht-Checks pro Baustein:** `zitat-verifizierer` (Kernfakt-Beleg existiert
wörtlich) · `check-artikel-abstand` (Content weit genug vom Original) ·
`faktentreue-check` (kein ungedeckter Fakt).

**Offener Rechtspunkt:** Ob konkrete **Lehrbuch**-Namen als Quelle sichtbar sein
dürfen oder nur Primärquellen/Standards — juristisch zu bestätigen (Abschnitt 10).
Vorläufige, konservative Linie: **nur Primärquellen/Standards/Gesetze sichtbar.**

---

## 3. Der Gold-Standard-Baustein (Aufbau)

Nicht „Fakten präsentieren" (Novaheal-Niveau), sondern **verändern, wie jemand
denkt.** Aufbau am Beispiel „Herz-Kreislauf-Stillstand erkennen":

1. **Antizipation** — den Impuls/Denkfehler wecken, bevor erklärt wird
   („Ein Teil von dir denkt: ‚atmet ja noch' — genau hier entscheidet sich alles").
2. **Das WARUM** (belegt) — warum der Fehler tückisch ist (Schnappatmung =
   Sterbe-Zeichen, das wie Lebenszeichen aussieht).
3. **Die Regel** — der prüfbare Fakt (keine Reaktion + keine normale Atmung).
4. **Mentales Modell** — Einordnung in Kette/Netz (Glied 1 der Rettungskette).
5. **Faustregel** — der eine Satz, der hängenbleibt.
6. **Spektrum** — 3–5 Kontrast-Anker zu anderen Patienten, **jeder einzeln belegt**.
7. **Karteikarte** — auto-generiert (patientenbezogen vorn, abstrakt hinten).

**Pflicht-Marker pro Baustein** (macht Coverage beweisbar):
- `lernergebnisId` (z. B. `CE06-LE1-W1`)
- `bloomStufe` + `bloomVerb` (steuert die Tiefe)
- `kompetenzbereich` **primär** + `kompetenzbereicheSekundaer[]` (unterschwellig)
- `quellen[]` (Primärquellen/Standards — sichtbar)
- `kernfaktId[]` (interner Verbatim-Beleg — unsichtbar)
- **B1-Variante Pflicht** für jeden Textblock (Zwei-Achsen-Adaptivität).

---

## 4. Bloom als Tiefe-Steuerung (Übertreffen-Feature #2)

Die Bloom-Stufe steht schon in jedem Lernergebnis (`bloomStufe` im Katalog).

- **Wissens-Tab** = Stufe 1–2 (nennen/verstehen) → vermittelt.
- **Anwendung in Situation** = Ziel-Stufe des Lernergebnisses (bis 6) → geübt.

| Verb | Bloom | Schüler muss… | CE-06-Beispiel |
|------|-------|---------------|----------------|
| benennen | 1 | wiedergeben | LE5-W2 Transplantationen |
| erläutern | 2 | **verstehen (Warum)** | LE1-W1 BLS |
| analysieren | 4 | zerlegen/prüfen | LE1-K5 Notfallpläne |
| **entwickeln** | **6** | **Neues entwerfen** | LE2-K4 Coping-Vorschläge |

**Als Architektur-Prinzip:** Wir schreiben die Bloom-Stufe ohnehin in jeden
Baustein → daraus wird später die **dritte Adaptivitäts-Achse** (Sprache ×
Fachwissen × **kognitive Tiefe**): Wer ein Thema auf Stufe 2 sicher hat, bekommt
es beim nächsten Mal auf Stufe 4. Das misst kein Konkurrent.

---

## 5. Die fünf Kompetenzbereiche (unterschwellige Prüfungsvorbereitung)

Die staatliche Prüfung fragt nach den 5 KB — also übt **jeder** Baustein sie
mit, auch ein reiner Wissens-Tab.

CE-06 laut offizieller Kompetenzmatrix: **KB I** (Schwerpunkt) + **KB III**
(adressiert); Rahmenlehrplan-Kopf nennt zusätzlich II.1, II.3, III.2, V.2.

Beispiel HKS-erkennen: **KB I** (pflegediagnostisch erfassen) primär · **KB V**
(warum evidenzbasiert kein Pulstasten) · **KB III** (Notfallteam) — unterschwellig.

**Coverage-Nachweis:** Am Ende belegt eine Matrix, dass CE-06 alle 5 KB und die
richtigen Bloom-Stufen abdeckt (`kompetenzbereicheSekundaer` macht es zählbar).

---

## 6. Die Übertreffen-Features (priorisiert)

| # | Feature | Wann | Warum es übertrifft |
|---|---------|------|---------------------|
| **1′** | **Primärquellen-Transparenz + Dozentin-Siegel** (statt Lehrbuch-Zitat) | **jetzt** | Vertrauen für Schulen, evidenzbasiert (KB V) — rechtssicher |
| **2** | **Bloom-Adaptivitäts-Achse** (kognitive Tiefe tracken) | mittel | Niemand misst Denkstufen, nur „gelernt/nicht" |
| **3** | **Rückwärts von der Prüfung** (echte Operatoren + Simulator, 5 KB) | teils da | „Du bestehst" > „Du lernst" — messbar |
| **4** | **Sichtbares Wissensnetz** (Wiederbegegnung navigierbar, CE-übergreifend) | mittel | Baut Experten-Denken statt Themen-Silos |
| **5** | **Fehler-getriebene Didaktik** (Content schärft sich an realen Fehlern) | nach Pilot | Selbstverbessernd, nicht kopierbar (eigene Daten) |

**Jetzt umgesetzt:** #1′ (in jeden Baustein) + #2 als Marker (Architektur).

---

## 7. Workflow pro Baustein (die Pipeline, literatur-first)

1. **Lernergebnis** aus dem Katalog wählen + **gegen den Volltext verifizieren**
   (nicht blind der JSON trauen).
2. **Literatur wortwörtlich lesen** (`recherche/*-volltext/`), Passage im Kontext.
3. **Kernfakt** anlegen/prüfen: Fakt + Verbatim-Beleg → `zitat-verifizierer`.
4. **Baustein paraphrasiert schreiben** (Aufbau aus Abschnitt 3), Marker setzen.
5. **`check-artikel-abstand`** — Abstand zum Original ausreichend?
6. **`faktentreue-check`** — kein ungedeckter Fakt?
7. **`pflege-validator` + `klinik-panel`** — fachlich korrekt, kein Anti-Pattern?
8. **Dozentin-Review** (Gründerin liest gegen) → Prüf-Siegel.

Nur wer alle 8 Schritte besteht, geht live.

---

## 8. Wissens-Landkarte CE-06 (aus dem Rahmenlehrplan abgeleitet)

**LE1 — Reanimation & Erste Hilfe:** HKS-Erkennen · BLS-Ablauf (Alarmieren,
Herzdruckmassage 5–6 cm/100–120, 30:2, Beatmung) · AED · ALS-Prinzipien ·
Kammerflimmern · Reanimations-Indikationen · Erste-Hilfe Recht/Ethik ·
neurolog. Akutsituationen (Synkope/Apoplex/Krampfanfall) · psychot. Erregung
**LE2 — Herz-Kreislauf/Schock/Herzinfarkt:** Herz-Kreislauf-System ·
Schockursachen & -formen · Notfallmedikamente · Herzinfarkt Klinik/Therapie ·
Reizleitungsstörungen · Elektrolyte · Infusionssysteme · Perfusor · Sauerstoffgabe
**LE3 — Akutes Abdomen/Stoma/Drainagen:** akutes Abdomen (DD) · Ileo- vs.
Colostoma · Drainagesysteme · viszeraler/Kolik-/abdom. Schmerz · Mobilisation mit
Drainagen · Katheter-Infektionsprophylaxe · postop. Überwachung
**LE4 — Katastrophe & Triage:** Notfall-Spezifika · eigenes „Funktionieren" ·
Katastrophenschutzplan · Triage-Instrumente
**LE5 — Organspende & Hirntod:** fehlende Spenderorgane · Transplantationen DE ·
Ablauf postmortale Spende · Pflege hirntoter Mensch · Recht/Ethik (TPG)

Die vollständige Tabelle (Thema → LE-ID → Bloom → KB → Quelle → Situation als
Anwendungsort) wird als `specs/ce-06/wissens-landkarte.md` geführt und pro
fertigem Baustein abgehakt.

---

## 9. Bau-Reihenfolge + Qualitätssicherung

- **Start: LE1** (Pilot-relevant — Wagner; Kernfakten `reanimation-bls` schon belegt).
- Pro LE: Wissens-Themen der Reihe nach (Workflow Abschnitt 7).
- **Gold-Standard zuerst:** *ein* Baustein voll fertig → Dozentin-Freigabe → dann
  Muster skalieren. Kein Massen-Bau im ungeprüften Stil.
- Coverage-Gate am LE-Ende: alle Wissens-Lernergebnisse abgedeckt, Bloom + 5 KB
  nachgewiesen.

---

## 10. Offene Punkte (vor Live zu klären)

1. **Urheberrecht — Sichtbarkeit von Quellen** (juristisch): Nur Primärquellen/
   Standards sichtbar (konservativ, empfohlen) oder auch Lehrbuch-Namen? Anwalt.
2. **Dozentin-Siegel:** exakter Wortlaut + ob mit Name/Foto (Vertrauen) oder
   neutral. Entscheidung Gründerin.
3. **Renderer:** `step-inline-wissen.tsx` um sichtbare Quellenangabe + Siegel
   erweitern (Bau-Schritt, sobald Format steht).
4. **Menge:** Ø 20 Bausteine/Situation (wie CE-02) als Zielkorridor bestätigen.
