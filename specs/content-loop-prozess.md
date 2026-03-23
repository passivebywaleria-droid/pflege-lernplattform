# Content-Loop-Prozess: Von BIBB-Rahmenplan zu fertiger Lerneinheit

> Dieser Prozess definiert die EXAKTE Reihenfolge der Schritte, die der Content-Loop (Ralph Wiggum) pro Lerneinheit (LE) durchlaeuft. Keine Phase darf uebersprungen werden.
> **Stand:** 2026-03-21

---

## Ueberblick: 7 Phasen pro Lerneinheit

```
Phase 1: BIBB-Analyse         → Was fordert der Rahmenplan?
Phase 2: Didaktische Planung   → Wie wird es gelehrt? (6-Phasen-Struktur)
Phase 3: Wissenschaftliche     → Welche evidenzbasierten Quellen gibt es?
         Recherche
Phase 4: Content-Generierung   → Texte, Fragen, Faelle erstellen
Phase 5: B1-Differenzierung    → Sprachliche Vereinfachung
Phase 6: Qualitaetspruefung    → Fachliche + didaktische Validierung
Phase 7: Export                → TypeScript-Dateien fuer die Plattform
```

**WICHTIG:** Phase 3 (Recherche) MUSS VOR Phase 4 (Generierung) abgeschlossen sein. Content wird NIE ohne wissenschaftliche Grundlage generiert.

---

## Phase 1: BIBB-Analyse (Input-Phase)

### Was wird gelesen?

1. **BIBB-Rahmenplan** (specs/rahmenplan-bibb.md) — CE-Beschreibung, Zeitrichtwert, Kompetenzschwerpunkte
2. **PflAPrV** — Welche Kompetenzbereiche (KB I-V) sind betroffen?
3. **Bildungsziele** der CE — Was sollen Schueler am Ende koennen?
4. **Vorherige LEs** — Was wurde bereits behandelt? (Spiralcurriculum beachten)

### Output von Phase 1

```typescript
interface LEPlanung {
  leId: string;                    // z.B. "le-02-1"
  ceId: string;                    // z.B. "ce-02"
  title: string;                   // z.B. "Bewegung und Mobilitaet foerdern"
  zeitrichtwert: number;           // Stunden laut BIBB
  kompetenzbereiche: string[];     // z.B. ["KB-I.1", "KB-I.2", "KB-II.1"]
  bildungsziele: string[];         // Aus BIBB-Rahmenplan
  bloomStufen: number[];           // Welche Bloom-Stufen abgedeckt? [1,2,3,4]
  voraussetzungen: string[];       // Welche LEs muessen vorher bearbeitet sein?
  pflegedidaktischeDimensionen: {
    technischInstrumentell: string; // Was ist das regelgeleitete Handeln?
    hermeneutischInterpretativ: string; // Was ist das Fallverstehen?
    kritischReflexiv: string;      // Was ist die Reflexionsebene?
  };
}
```

---

## Phase 2: Didaktische Planung

### 6-Phasen-Struktur festlegen

Fuer jede LE wird die 6-Phasen-Struktur konkretisiert:

| Phase | Steps | Bloom | Beschreibung | Fragetypen |
|---|---|---|---|---|
| 1. Ankommen | 1-2 | B1 | Lernziele, Vorwissen aktivieren | Selbsteinschaetzung |
| 2. Situierung | 2-3 | B1-B2 | Fallbeispiel einfuehren | Offene Reflexion |
| 3. Wissenserwerb | 4-6 | B1-B3 | Fachinhalt am Fall | MC, Lueckentext, Zuordnung |
| 4. Anwendung | 3-5 | B3-B5 | Fallarbeit, Entscheidungen | Reihenfolge, Branching, Freitext |
| 5. Reflexion | 1-2 | B4-B6 | Eigenes Handeln reflektieren | Freitext + KI-Feedback |
| 6. Transfer | 1 | B5-B6 | Praxisauftrag | Praxisbeobachtung |

### Fallbeispiel entwerfen

**JEDE LE braucht mindestens 1 Leitfall.** Der Fall wird in Phase 2 eingefuehrt und zieht sich durch alle Phasen.

Fallstruktur:
```
Person:     Name, Alter, Geschlecht, kultureller Hintergrund
Setting:    Wo? (Krankenhaus, Pflegeheim, ambulant, Reha)
Situation:  Was ist passiert? Was ist das Problem?
Ressourcen: Was kann die Person noch? Was hilft?
Kontext:    Angehoerige, Team, rechtliche Aspekte
```

### Kompetenz-Zuordnung

Jeder Step wird einem KB und einer Bloom-Stufe zugeordnet:

```
Step 1 (Ankommen):    KB V,  B1 (Erinnern)
Step 3 (Situierung):  KB II, B2 (Verstehen)
Step 5 (Wissen):      KB I,  B2 (Verstehen)
Step 8 (Anwendung):   KB I,  B3 (Anwenden)
Step 10 (Anwendung):  KB I,  B4 (Analysieren)
Step 12 (Reflexion):  KB IV, B5 (Bewerten)
Step 14 (Transfer):   KB I,  B6 (Erschaffen)
```

---

## Phase 3: Wissenschaftliche Recherche (PFLICHT vor Generierung!)

### 3.1 Recherche-Quellen (Hierarchie)

Die Recherche folgt einer **Evidenz-Pyramide** — hoechste Evidenz zuerst:

| Prioritaet | Quelle | Zugang | Beispiel |
|---|---|---|---|
| 1 (hoechste) | **AWMF S3-Leitlinien** | Kostenlos | Dekubitusprophylaxe, Schmerztherapie |
| 2 | **DNQP-Expertenstandards** | ~30 EUR/Stk | Sturzprophylaxe, Ernaehrungsmanagement |
| 3 | **RKI/KRINKO-Empfehlungen** | Kostenlos | Hygiene, Infektionsschutz |
| 4 | **Cochrane Reviews** | Teilw. kostenlos | Systematische Uebersichten |
| 5 | **PubMed/PMC Volltexte** | Kostenlos (OA) | Aktuelle Pflegeforschung |
| 6 | **ZQP Pflegeleitlinien** | Kostenlos | Uebersicht mit 132 Leitlinien |
| 7 | **Lehrbuecher** (paraphrasiert!) | Eigene | I Care, Thiemes Pflege |
| 8 | **Fachzeitschriften OA** | Kostenlos | HeilberufeSCIENCE, BMC Nursing |

### 3.2 Recherche-Prozess pro LE

```
Schritt 1: AWMF durchsuchen
  → register.awmf.org → Stichwort der LE suchen
  → Relevante S1/S2/S3-Leitlinien identifizieren
  → Kernaussagen extrahieren (Empfehlungsgrad A/B/C notieren)

Schritt 2: DNQP pruefen
  → Welcher Expertenstandard ist relevant?
  → Kernaussagen und Qualitaetsindikatoren notieren

Schritt 3: RKI/KRINKO pruefen
  → Nur bei infektiologischen/hygienischen Themen
  → Aktuelle Empfehlungen extrahieren

Schritt 4: PubMed/PMC-Recherche
  → Suchbegriffe: LE-Titel auf Englisch + "nursing" + "education"
  → Filter: Open Access, letzte 5 Jahre, Review bevorzugt
  → 3-5 relevante Quellen identifizieren

Schritt 5: Quellenregister erstellen
  → Jede Quelle mit: Titel, Autoren, Jahr, URL, Evidenzgrad
  → Wird spaeter jedem Content-Step zugeordnet
```

### 3.3 Output von Phase 3

```typescript
interface LEQuellenregister {
  leId: string;
  rechercheDatum: Date;
  quellen: {
    id: string;           // z.B. "q-awmf-dekubitus-2017"
    typ: 'awmf' | 'dnqp' | 'rki' | 'cochrane' | 'pubmed' | 'lehrbuch' | 'zeitschrift';
    titel: string;
    autoren: string;
    jahr: number;
    url: string;
    evidenzgrad: 'S3' | 'S2k' | 'S2e' | 'S1' | 'RCT' | 'Review' | 'Experte' | 'Lehrbuch';
    kernaussagen: string[];  // 3-5 Kernaussagen pro Quelle
    relevanteAbschnitte: string[]; // Welche Kapitel/Seiten?
  }[];
  zusammenfassung: string;  // 500 Woerter: Was sagt die Evidenz zu diesem Thema?
}
```

**REGEL:** Mindestens 5 Quellen pro LE, davon mindestens 1 Leitlinie (AWMF/DNQP).

---

## Phase 4: Content-Generierung

### 4.1 Erst NACH Phase 3!

Content wird NUR auf Basis der recherchierten Quellen generiert. Der Content-Loop erhaelt:
- Die LE-Planung (Phase 1)
- Die didaktische Struktur (Phase 2)
- Das Quellenregister (Phase 3)

### 4.2 Content pro Step generieren

Jeder Step bekommt:

```typescript
interface ContentStep {
  stepId: string;
  phase: 1 | 2 | 3 | 4 | 5 | 6;  // Didaktische Phase
  stepType: 'text' | 'mc' | 'freetext' | 'sorting' | 'matching' |
            'fillin' | 'truefalse' | 'case' | 'reflection' | 'selfrating' |
            'memory' | 'crossword' | 'dosage' | 'branching' | 'timeline';
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  kompetenzbereich: string;  // z.B. "KB-I.2"

  // Inhalt (C1-Version)
  contentC1: {
    title: string;
    body: string;        // Max. 200 Woerter pro Step
    fallbezug: string;   // "Im Fall von Frau Mueller..."
    glossarBegriffe: string[];  // Markierte Fachwoerter
  };

  // Frage (wenn applicable)
  question?: {
    fragetext: string;
    optionen?: { text: string; isCorrect: boolean; erklaerung: string }[];
    musterantwort?: string;  // Fuer Freitext
    bewertungskriterien?: string[];  // Fuer KI-Feedback
  };

  // Quellennachweis (PFLICHT)
  quellen: string[];  // IDs aus dem Quellenregister
}
```

### 4.3 Regeln fuer Content-Generierung

1. **NIE kopieren, IMMER paraphrasieren** — Buch nicht offen, aus Wissen schreiben
2. **Jeder Step hat Fallbezug** — Kein isoliertes Faktenwissen
3. **Max. 200 Woerter pro Text-Step** — Microlearning
4. **Jede Frage hat Erklaerung** — Warum richtig? Warum falsch?
5. **Quellenangabe ist Pflichtfeld** — Kein Step ohne Quelle
6. **Mind. 40% Anwendungsfragen** — Bloom B3+ pro LE
7. **Mind. 1 Reflexionsfrage** — Pro LE (Freitext mit KI-Feedback)
8. **Glossar-Begriffe markieren** — Jeder neue Fachbegriff wird markiert
9. **Fachsprache + Alltagserklaerung** — "Dekubitus (Druckgeschwuer)"

### 4.4 Content-Verteilung pro LE

| Phase | Steps | Davon Text | Davon Fragen | Davon Faelle |
|---|---|---|---|---|
| Ankommen | 2 | 1 | 1 (Selbsteinschaetzung) | 0 |
| Situierung | 3 | 2 (Fallvorstellung) | 1 (Was faellt auf?) | 1 |
| Wissenserwerb | 5 | 3 | 2 (MC/Lueckentext) | 0 |
| Anwendung | 4 | 1 | 2 (Anwendung) | 1 |
| Reflexion | 2 | 1 | 1 (Freitext) | 0 |
| Transfer | 1 | 1 (Praxisauftrag) | 0 | 0 |
| **GESAMT** | **17** | **9** | **7** | **2** |

---

## Phase 5: B1-Differenzierung

### 5.1 Sprachliche Vereinfachung

Fuer jeden Text-Step wird eine B1-Version erstellt:

| Merkmal | C1-Version | B1-Version |
|---|---|---|
| Satzlaenge | Bis 25 Woerter, Nebensaetze | Max. 15 Woerter, Hauptsaetze |
| Fachwoerter | Fachsprache durchgehend | Alltagswort + Fachbegriff in Klammern |
| Passiv | "Der Verband wird gewechselt" | "Sie wechseln den Verband" |
| Abstraktion | Abstrakte Konzepte | Konkrete Beispiele |
| Erklaerungen | Kompakt | Ausfuehrlicher, mit Alltagsanalogien |

### 5.2 Regeln fuer B1

1. **Gleiches fachliches Niveau** — Nur Sprache aendern, nicht Inhalt
2. **Mehr Glossar-Tooltips** — Jeder Fachbegriff bekommt Tooltip
3. **Satzanfaenge bei Freitext** — "Ich denke, dass...", "Frau Mueller braucht..."
4. **TTS standardmaessig an** — Audio fuer jeden Step
5. **Bildunterstuetzung** — Jeder Step mit Illustration (Platzhalter fuer MVP)

---

## Phase 6: Qualitaetspruefung

### 6.1 Automatische Checks (durch den Loop)

- [ ] Jeder Step hat Quellenangabe?
- [ ] Bloom-Stufen-Verteilung: Mind. 40% auf B3+?
- [ ] Alle 3 didaktischen Dimensionen abgedeckt?
- [ ] Fallbezug in jedem Step vorhanden?
- [ ] B1-Version vorhanden?
- [ ] Glossar-Begriffe markiert?
- [ ] Keine woertlichen Zitate aus Lehrbuechern?
- [ ] KB-Zuordnung korrekt?

### 6.2 Manuelle Pruefung (durch Dozentin)

- [ ] Fachlich korrekt?
- [ ] Fallbeispiel realistisch?
- [ ] Pruefungsrelevanz stimmt?
- [ ] B1-Version verstaendlich?
- [ ] Erklaerungen bei falschen Antworten hilfreich?

---

## Phase 7: Export

### TypeScript-Dateien

```
content/
  ce-01/
    le-01-1/
      planung.ts        // Phase 1+2 Output
      quellen.ts        // Phase 3 Output
      steps.ts          // Phase 4+5 Output (C1 + B1)
      glossar.ts        // Fachbegriffe dieser LE
      flashcards.ts     // Karteikarten
      metadata.ts       // KB-Zuordnung, Bloom, Zeitschlaetzung
  ce-02/
    le-02-1/
      ...
```

---

## Zusammenfassung: Der korrigierte Content-Loop

```
Fuer jede LE:

1. BIBB lesen          → Was fordert der Rahmenplan?
2. Didaktik planen      → 6-Phasen-Struktur, Fall entwerfen, KB zuordnen
3. RECHERCHIEREN        → AWMF, DNQP, RKI, PubMed (mind. 5 Quellen)
4. Content generieren   → Texte + Fragen + Faelle (AUF BASIS der Quellen!)
5. B1 vereinfachen      → Sprachlich anpassen, gleiches fachliches Niveau
6. Qualitaet pruefen    → Automatisch + manuell durch Dozentin
7. Exportieren          → TypeScript-Dateien fuer die Plattform

COMPLETION PROMISE: Wenn alle Steps generiert, alle Checks bestanden
und das Quellenregister vollstaendig ist → "LE_COMPLETE"
```

---

## Zeitschaetzung pro LE (mit KI)

| Phase | Dauer (KI) | Dauer (Dozentin) |
|---|---|---|
| 1. BIBB-Analyse | 5 Min | -- |
| 2. Didaktische Planung | 15 Min | -- |
| 3. Wissenschaftliche Recherche | 20-30 Min | -- |
| 4. Content-Generierung | 30-45 Min | -- |
| 5. B1-Differenzierung | 15-20 Min | -- |
| 6. Qualitaetspruefung (auto) | 5 Min | 30-60 Min |
| 7. Export | 2 Min | -- |
| **GESAMT pro LE** | **~90-120 Min** | **~30-60 Min** |

Bei 38+ LEs: **~60-80 Stunden KI-Arbeit + ~20-40 Stunden Dozentin-Review** fuer die gesamte Ausbildung.
