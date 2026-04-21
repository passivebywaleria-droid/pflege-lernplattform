# KONZEPT: Adaptives & Situationsbasiertes Lernen

**Erstellt:** 2026-04-18
**Quelle:** Diskussion Gründerin + Claude (Konzeptentwicklung)
**Status:** Konzeptpapier — noch nicht implementiert
**Betrifft:** Content-Architektur, Sequencer, Dozentin-Pipeline, Schulanbindung, Datenmodell

---

## Gedankengang

Dieses Konzept entstand aus einer einzigen Frage:

> "Langsame Schüler schaffen in 40 UE nicht den gleichen Stoff wie schnelle. Wie optimieren wir das Lernerlebnis, damit auch sie das Wichtigste lernen?"

Der Gedankengang:
1. Langsame Schüler schaffen nicht alles → Content priorisieren?
2. Aber Schulzeit vs. Freizeit unterscheiden → Zug fährt weiter, Nachholplan
3. Verschiedene Schulen haben verschiedene LE-Aufteilungen → Flexibilität nötig
4. Quereinstieg: Schüler können nicht sagen was sie "hatten" → Testen statt fragen
5. Aber auch Tests sind nur Stichproben → Sequencer als Live-Diagnostik
6. PflBG fordert Situationsorientierung → Lernsituationen statt isolierte Themen
7. Themen als Navigation für Schüler → "Ich will Dekubitus wiederholen"
8. Schulen brauchen nur CE + Stundennachweise → Einfaches Schulmodell
9. Pilot vs. Vision trennen → Was jetzt, was später

---

## Teil 1: Das Architekturmodell

### 1.1 Drei Schichten

```
SCHICHT 1 — CE + THEMEN (Navigation & Tracking)
│
│  11 CEs (vom Rahmenlehrplan)
│  ~80-100 Themen innerhalb der CEs
│
│  Schulen wählen: CE für ihre Klasse
│  Schüler navigieren: über Themen ("Dekubitus wiederholen")
│  Plattform trackt: Stunden + Kompetenzen pro CE
│
├── SCHICHT 2 — WISSENSBAUSTEINE (Wissen, wiederverwendbar)
│   │
│   │  Pro Thema: Fakten, Definitionen, Assessments
│   │  3 Stufen: Denkfrage → Hinweis → Erklärung
│   │  Unabhängig von Patienten/Situationen
│   │  Erscheinen bei Bedarf, nicht vorangestellt
│   │  Werden zu Karteikarten für Spaced Repetition
│   │
│   └── SCHICHT 3 — LERNSITUATIONEN (Erleben, fallbasiert)
│       │
│       │  Konkrete Patienten-Fälle
│       │  Verweben mehrere Themen gleichzeitig
│       │  Folgen dem Pflegeprozess (6 Phasen)
│       │  Verschiedene Schwierigkeiten (Spiralen 1-4)
│       │  Adaptiv: gleicher Fall, verschiedene Wege
│       │
│       └── Fallback: Wenn kein Fall passt → Baustein einzeln
```

### 1.2 Wie die Schichten zusammenspielen

**Themen sind Wegweiser, keine Container.** Ein Thema zeigt auf Situationen und Bausteine — es enthält sie nicht exklusiv. Dekubitus kommt in Situation Yilmaz UND in Situation Schmidt vor.

```
CE-02: Menschen in der Bewegung unterstützen
│
├── Thema: Dekubitus-Prophylaxe
│   ├── → Situation Yilmaz (Phase 2: Hautinspektion)
│   ├── → Situation Schmidt (Spirale 2: Wundversorgung)
│   ├── → Wissensbausteine (Stadien, Braden, Maßnahmen)
│   ├── → Karteikarten (FSRS)
│   └── → Prüfungsfragen
│
├── Thema: Thrombose-Prophylaxe
│   ├── → Situation Yilmaz (Phase 2: Beine prüfen)
│   ├── → Wissensbausteine (Virchow-Trias, Zeichen)
│   └── → Karteikarten
│
├── Thema: Sturzprophylaxe
│   ├── → Situation Bauer (dementer Patient, gestürzt)
│   └── → Wissensbausteine (Risikofaktoren, Assessment)
│
├── Thema: Mobilisation
│   ├── → Situation Yilmaz (Phase 4: Bettkante)
│   ├── → Situation Schmidt (Hemiplegie)
│   └── → Karteikarten
│
└── Thema: Kontraktur-Prophylaxe
    ├── → Situation Bauer (Phase 3: Bewegungsübungen)
    └── → Wissensbausteine

Schüler sucht "Dekubitus" → sieht alle Zugänge:
  🏥 Lernsituation (Frau Yilmaz, ~3 UE)
  ⚡ Schnell wiederholen (5 Fragen + Karteikarten, ~10 Min)
  📝 Prüfungssimulation (Fallbasiert, ~15 Min)
```

### 1.3 Drei Wissensarten, drei Ansätze

Nicht alles ist Fall. Die Ausbildung hat verschiedene Wissensarten:

| Wissensart | Anteil | Ansatz | Beispiel |
|---|---|---|---|
| **Handlungswissen** | ~70% | Lernsituation (Patient) | Prophylaxen, Mobilisation, Wundversorgung |
| **Konzeptwissen** | ~20% | Thema → dann am Fall anwenden | Pflegeprozess, Pflegemodelle, Ethik |
| **Orientierungswissen** | ~10% | Information (lesen, merken) | Gesetze, Ausbildungsstruktur, QM |

Situationsbasiert ist das Ideal für 70% des Contents. Für den Rest funktionieren Wissensbausteine + Karteikarten auch ohne Patient.

---

## Teil 2: Schulanbindung & Stundennachweis

### 2.1 Was Schulen nachweisen müssen (PflBG/PflAPrV)

```
1. STUNDENNACHWEIS pro Kompetenzbereich:
   → 2.100 Stunden Theorie gesamt
   → Verteilt auf 11 CEs
   → "Schüler X hat 160 Stunden in CE-02 absolviert"

2. KOMPETENZ-ERREICHUNG:
   → Nachgewiesen durch Leistungsüberprüfungen
   → "Schüler X kann Prophylaxen planen und durchführen"

3. PRÜFUNGSZULASSUNG:
   → Mindeststunden erfüllt
   → Leistungsnachweise bestanden
```

**Was Schulen NICHT nachweisen müssen:**
- Welche LEs sie wie aufgeteilt haben (schulintern)
- Ob situationsbasiert oder themenbasiert unterrichtet wurde
- Welche Reihenfolge innerhalb eines CE

### 2.2 Das einfache Schulmodell

```
SCHULE gibt Input:    CE + UE-Budget ("CE-02, 40 UE diese Woche")
PLATTFORM liefert:    Content adaptiv pro Schüler
PLATTFORM trackt:     Aktive Lernzeit + Kompetenzen
SCHULE bekommt:       Stundennachweis + Kompetenz-Report + PDF
```

Die LE-Aufteilung ist schulintern. Ob die Schule ihre CE-02-Stunden "LE-06 Mobilität" oder "Modul 4b Prophylaxen" nennt — ist der Plattform egal. Wir liefern Content pro CE.

### 2.3 Unterrichtszeit vs. Eigenzeit

Im Unterricht fährt der Zug weiter. Die Lehrerin wartet nicht. In der Freizeit holt der Schüler nach.

**Schulzeit (Lehrer aktiviert CE-Block):**
```
Lehrer-Dashboard:
  "CE-02, Woche 5, 40 UE für Klasse 1A" → [Aktivieren]

→ Alle Schüler sehen CE-02 Content
→ Jede aktive Minute wird als UNTERRICHTSZEIT geloggt
→ Zählt für den Stundennachweis
→ Lehrer sieht live: Wer arbeitet, wer nicht
→ Ende der Woche: Zug fährt weiter zu CE-04
```

**Eigenzeit (Schüler lernt freiwillig):**
```
Schüler öffnet App abends:

  📋 Nachholplan:
     CE-02: 2 Themen wiederholen
     → Dekubitus Quick-Check       10 Min
     → Thrombose Karteikarten      10 Min

  🔍 Thema suchen:
     → "Dekubitus" → Lernsituation oder Quick-Check

  🃏 Karteikarten fällig: 14

→ Wird als EIGENSTUDIUM geloggt (separat ausgewiesen)
→ Schüler sieht Fortschritt, Lehrer kann es sehen
```

### 2.4 Aktive Lernzeit messen

```
Was zählt als aktive Lernzeit (= 1 UE à 45 Min)?

  AKTIV:
    ✅ Step bearbeiten (lesen, antworten, zuordnen)
    ✅ Wissensbaustein lesen (Scrolltiefe + Verweildauer)
    ✅ Karteikarten üben
    ✅ Prüfungssimulation
    ✅ Pflegebericht schreiben

  INAKTIV (zählt NICHT):
    ❌ App offen aber keine Aktion (> 3 Min)
    ❌ Nur Scrollen ohne Interaktion
    ❌ Dashboard, Einstellungen, Navigation

  PAUSE-ERKENNUNG:
    → 3 Min keine Aktion → Timer stoppt automatisch
    → Nächste Aktion → Timer läuft weiter
```

### 2.5 Stundennachweis (Lehrer-Dashboard)

```
┌──────────────────────────────────────────────────┐
│  Klasse 1A — Woche 5 Zusammenfassung             │
│                                                  │
│  CE-02: Mobilität unterstützen                   │
│  Geplant: 40 UE | Durchschnitt: 34,5 UE         │
│                                                  │
│  Themen-Abdeckung:                               │
│  ✅ Dekubitus:      22/25 Schüler                │
│  ✅ Mobilisation:   20/25 Schüler                │
│  ⚠️ Thrombose:      15/25 Schüler                │
│  ❌ Sturz:           8/25 Schüler                │
│  ❌ Kontraktur:      5/25 Schüler                │
│                                                  │
│  Empfehlung: Thrombose + Sturz nächste Woche     │
│                                                  │
│  3 Schüler brauchen Einzelförderung:             │
│  Lisa (1,5 UE), Mehmet (3,1 UE), Ahmad (2,8 UE) │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│  Schülerin: Elif Yıldırım — Halbjahresbericht   │
│                                                  │
│  CE    Soll    Unterricht  Eigen   Status         │
│  01     80 UE    78 UE     12 UE   ✅ erfüllt    │
│  02    160 UE   142 UE     28 UE   ⚠️ 18 UE offen│
│  04    120 UE    95 UE      8 UE   ⚠️ 25 UE offen│
│  05     80 UE    80 UE      0 UE   ✅ erfüllt    │
│                                                  │
│  Unterricht = zählt für Nachweis                 │
│  Eigenstudium = separat ausgewiesen              │
│                                                  │
│  [PDF exportieren]                               │
└──────────────────────────────────────────────────┘
```

### 2.6 Kompetenz-Nachweis pro CE

```
┌──────────────────────────────────────────────────┐
│  CE-02 — Elif Yıldırım                           │
│                                                  │
│  II.2.a Einschränkungen erkennen   85%  ✅       │
│  II.2.b Prophylaxen planen        65%  ⚠️       │
│          Lücken: Thrombose, Kontraktur           │
│  II.2.c Mobilisation durchführen   95%  ✅       │
│  II.2.d Pflegeprozess anwenden     45%  ❌       │
│          Lücken: Dokumentation, Evaluation       │
│                                                  │
│  Prüfungsreife CE-02: NOCH NICHT                 │
│  Empfehlung: Thrombose + Dokumentation üben      │
└──────────────────────────────────────────────────┘
```

---

## Teil 3: Lernsituationen (Content-Format)

### 3.1 Was ist eine Lernsituation?

Ein konkreter Pflegefall mit einem Patienten, an dem mehrere Kompetenzen gleichzeitig gelernt werden. Folgt dem Pflegeprozess (6 Phasen).

**Warum situationsbasiert?**

| | Themenbasiert (heute) | Situationsbasiert (neu) |
|---|---|---|
| Struktur | Kapitel isoliert | Patient verwebt alles |
| Praxisnähe | Abstrakt → dann anwenden | Von Anfang an konkret |
| PflBG-konform | Nur bedingt | Ja (Rahmenlehrplan) |
| Für schwache Schüler | Abstrakte Definitionen = schwer | Konkrete Patientin = greifbar |
| Prüfungsformat | Einzelfragen | Fallbasiert (= echte Prüfung) |
| Vernetztes Denken | Themen bleiben isoliert | Zusammenhänge sichtbar |

### 3.2 Grundstruktur einer Lernsituation

```
Lernsituation (z.B. "Frau Yilmaz")
│
├── Phase 1: Ankommen & Informieren
│   ├── Step: Übergabe verstehen
│   └── Step: Patientenakte lesen
│
├── Phase 2: Beobachten & Risiken erkennen
│   ├── Step: Gespräch (Schmerzassessment)
│   │   └── [Wissensbaustein: NRS — bei Bedarf]
│   ├── Step: Hautinspektion
│   │   └── [Wissensbaustein: Dekubitus-Stadien — bei Bedarf]
│   └── Step: Risiko-Zusammenfassung (Zuordnung)
│
├── Phase 3: Pflege planen
│   ├── Step: PÄS formulieren (3 Level: Freitext/Lückentext/MC)
│   └── Step: Maßnahmen priorisieren (Sortierung)
│
├── Phase 4: Maßnahmen durchführen
│   ├── Step: Mobilisation (Reihenfolge)
│   ├── KOMPLIKATION: Orthostatische Hypotonie (Branching)
│   └── KOMPLIKATION: Angehörigengespräch (offene Frage)
│
├── Phase 5: Evaluieren
│   ├── Step: Nachmittags-Check
│   └── Step: Folgeplanung
│
└── Phase 6: Dokumentieren
    └── Step: Pflegebericht (Freitext/Bausteine)
```

### 3.3 Wissensbausteine: 3 Stufen

Wissensbausteine erscheinen INNERHALB der Situation, genau wenn der Schüler sie braucht.

| Stufe | Für wen | Methode | Beispiel |
|---|---|---|---|
| 1 — Denkfrage | Starke Schüler | Selbst erschließen | "Was passiert mit Haut unter Druck?" |
| 2 — Hinweis | Mittlere Schüler | Kontext-Erklärung | "3 Tage Rückenlage → Rötung = Dekubitus Grad 1" |
| 3 — Erklärung | Schwache Schüler | Vollständig + B1 + TTS + Glossar | Definition + 4 Stadien + Bilder |

**Prinzip:** Das Sprachlevel bestimmt WIE erklärt wird. Die Antwort bestimmt OB erklärt wird. Jeder bekommt Feedback — aber passend:

- **Schwache Schülerin:** ERKLÄREN → "Das ist eine Kontraktur..."
- **Mittlere Schülerin:** HINWEISEN → "Denk an die Gelenke..."
- **Starke Schülerin:** FRAGEN → "Was passiert mit unbewegten Gelenken?"

Wenn die starke Schülerin die Denkfrage nicht beantworten kann → Sequencer stuft auf Stufe 2 oder 3 runter. Nicht weil sie schwach ist, sondern weil sie es nicht wusste.

### 3.4 Content-Pool statt fester Pfad

Pro Situation: ein POOL von Steps. Jeder Schüler sieht eine andere Auswahl.

- 8-10 Steps Kern (Pflegeprozess-Phasen, jeder sieht sie)
- 4-6 Wissensbausteine (3 Stufen, Sequencer wählt passende)
- 3-4 alternative Übungstypen pro Konzept
- 1-2 Komplikationen (Branching)
- 1 Dokumentationsaufgabe (Freitext oder Bausteine je nach Level)

**Jeder Schüler sieht ~10-18 Steps, aber ANDERE.**

### 3.5 Adaptivität: Drei Schülerinnen, ein Fall

| | C1 + Abi | B1 + Pflegehelfer | B1 + Anfängerin |
|---|---|---|---|
| Dauer | 2 UE | 2,5 UE | 4 UE |
| Einstieg | Direkt Analyse | Direkt (kennt Praxis) | Geführt |
| Wissensbausteine | Stufe 1 (Denkfragen) | Stufe 1 + Sprachübung | Stufe 3 (vollständig + B1) |
| Übungen | Freitext, Branching | MC + Fachbegriffe | MC + Bilder |
| Dokumentation | Freitext-Bericht | Inhalt gut, Sprachkorrektur | Baustein-Bericht |
| Schwerpunkt | Fachliche Vertiefung | Fachsprache + Theorie | Grundlagen verstehen |

### 3.6 Situationen und Themen-Konfiguration

Themen kombinieren sich nicht frei. Die Medizin bestimmt welche Themen zusammengehören:

```
Hüft-TEP-Patient  → IMMER Dekubitus + Thrombose + Mobilisation
Dementer Patient   → IMMER Sturz + Kontraktur + Kommunikation
Schlaganfall       → IMMER Mobilisation + Dekubitus + Aphasie
```

Wenn eine Schule eine Themen-Kombination wählt die keine Situation abdeckt:
- Situationen liefern was passt (ggf. mit angepasstem Fokus)
- Einzelne Themen werden als Wissensbausteine ausgespielt (Fallback)
- Funktioniert weniger immersiv, aber trotzdem adaptiv

---

## Teil 4: Spaced Repetition mit Lernsituationen

### 4.1 Das Problem

Man kann eine Lernsituation nicht wiederholen — der Schüler erinnert sich an die Story, nicht an das Wissen.

### 4.2 Drei Wiederholungsarten

| Art | Was | Wann | Dauer |
|---|---|---|---|
| **Karteikarten** | Einzelne Fakten (FSRS) | 1, 4, 14, 30 Tage | 5 Min |
| **Quick-Check** | 3 MC-Fragen zu Konzept | Vor neuer Situation | 3 Min |
| **Neue Situation** | Anderer Patient, gleiche Kompetenzen, höheres Niveau | 2-4 Wochen | 2-4 UE |

Karteikarten prüfen ob du es WEISST. Neue Situationen prüfen ob du es KANNST.

### 4.3 Spiralcurriculares Prinzip

Gleiche Kompetenzen kommen wieder — an anderen Patienten, auf höherem Niveau:

```
Spirale 1 (Woche 1):  Frau Yilmaz — Dekubitus Grad 1, einfach
Spirale 2 (Woche 3):  Herr Schmidt — Schlaganfall, Grad 2, komplexer
Spirale 3 (Woche 6):  Frau Petrow — Multimorbid, hochkomplex
Spirale 4 (Prüfung):  Unbekannter Patient, Prüfungsformat, ohne Hilfe
```

### 4.4 Automatische Karteikarten

Nach jeder Situation werden aus den Wissensbausteinen automatisch Karteikarten generiert und in den FSRS-Algorithmus eingespeist.

---

## Teil 5: Quereinstieg

### 5.1 Das Problem

Schüler die später einsteigen können nicht zuverlässig sagen was sie schon "hatten". Selbsteinschätzung ist wertlos. Und selbst Tests sind nur Stichproben — 3 Fragen pro CE können nie alles abdecken.

### 5.2 Die Lösung: Sequencer als Live-Diagnostik

Keine separate Diagnostik nötig. Der Sequencer merkt WÄHREND dem Lernen was der Schüler kann:

```
Schüler im 2. Lehrjahr öffnet CE-02:
→ Erster Kern-Step, normales Tempo
→ Antwortet schnell und richtig → Sequencer beschleunigt
→ Bei Kapitel 3 plötzlich alles falsch → Sequencer bremst
→ HIER war die Lücke. Kein Test hätte sie vorher gefunden.
```

Bestehender Einstufungstest (Sprache + Fachwissen allgemein) bleibt. Themenspezifische Diagnostik passiert organisch durch den Sequencer.

---

## Teil 6: Dozentin-Pipeline

### 6.1 Was die Dozentin NEU produziert

**Pro Thema (einmal, wiederverwendbar):**
- Wissensbausteine (3 Stufen: Denkfrage, Hinweis, Erklärung + B1)
- Glossar-Begriffe
- Karteikarten-Vorlagen

**Pro Lernsituation:**

| Datei | Inhalt |
|---|---|
| `situation.md` | Patient, Kontext, Kompetenzen, Spirale |
| `phasen-plan.md` | 6 Phasen des Pflegeprozesses mit Steps |
| `wissensbausteine.md` | Referenzen auf Themen-Bausteine + situationsspezifische Anpassungen |
| `komplikationen.md` | Branching-Punkte |
| `glossar-plan.md` | Fachbegriffe aus der Situation |
| `karteikarten-plan.md` | Fakten für Spaced Repetition |
| `spiral-varianten.md` | Gleiche Kompetenzen, anderer Patient |

### 6.2 Pipeline-Änderungen

```
HEUTE:
  Dozentin → 8 Plan-Dateien (Kapitel-linear)
  B1-Dozentin → Inline B1
  Generator → 11 TypeScript-Dateien
  KI-Prüfer → 32 Kriterien

NEU:
  Dozentin → Situation + Phasen + Baustein-Referenzen
  B1-Dozentin → B1 nur für Stufe 3 + Situationsbeschreibung
  Generator → Neues Datenmodell (Situation → TypeScript)
  KI-Prüfer → + Pflegeprozess vollständig? Kompetenzen abgedeckt? Spiral-Kohärenz?
```

### 6.3 Content-Aufwand

| | Pro Thema | Pro Situation | Gesamt |
|---|---|---|---|
| Wissensbausteine | ~2h | — | ~80 Themen × 2h = 160h |
| Lernsituation | — | ~4h | ~30-40 × 4h = 120-160h |
| Spiral-Varianten | — | ~1-2h (KI-unterstützt) | ~60-80h |
| **Gesamt** | | | **~340-400h** |

Zum Vergleich: 55 LEs × 6h (heutiges Format) = 330h. Ähnlicher Aufwand, aber besseres Produkt.

---

## Teil 7: Datenmodell (TypeScript-Entwurf)

```typescript
// --- Themen & Wissensbausteine ---

interface Thema {
  themaId: string;                    // "dekubitus-prophylaxe"
  ce: string;                         // "CE-02"
  rahmenlehrplanKompetenz: string;    // "II.2.d"
  titel: string;
  wissensbausteine: Wissensbaustein[];
  voraussetzungen: string[];          // ["haut-grundlagen"]
}

interface Wissensbaustein {
  bausteinId: string;                 // "dekubitus-stadien"
  themaId: string;
  stufe1: {                           // Für Starke
    typ: "denkfrage";
    frage: string;
    richtigeAntwort: string;
  };
  stufe2: {                           // Für Mittlere
    typ: "hinweis";
    text: string;
    textB1?: string;
  };
  stufe3: {                           // Für Schwache
    typ: "erklaerung";
    step: ContentStep;
    stepB1?: ContentStep;
  };
  glossarBegriffe: string[];
  karteikarten: Karteikarte[];
}

// --- Lernsituationen ---

interface Lernsituation {
  situationId: string;                // "sit-yilmaz-immobil"
  patient: PatientBeschreibung;
  themen: string[];                   // ["dekubitus", "thrombose", "mobilisation"]
  spirale: 1 | 2 | 3 | 4;
  voraussetzungen: string[];
  geschaetzteUE: number;              // 3-5
  phasen: PflegeProzessPhase[];
  komplikationen: Komplikation[];
  bausteinReferenzen: {               // Wann welcher Baustein eingeblendet wird
    phase: string;
    trigger: string;                  // "haut-frage-falsch"
    bausteinId: string;
  }[];
}

interface PatientBeschreibung {
  name: string;
  alter: number;
  diagnose: string;
  kontext: string;                    // Station, Zuhause, Notaufnahme
  vorerkrankungen: string[];
  besonderheiten: string[];           // Sprachbarriere, Demenz
  soziales: string;
}

interface PflegeProzessPhase {
  phaseId: string;
  pflegeprozessSchritt:
    | "informieren" | "beobachten" | "planen"
    | "durchfuehren" | "evaluieren" | "dokumentieren";
  steps: ContentStep[];
}

interface Komplikation {
  komplikationId: string;
  trigger: string;                    // "phase4-nach-aufsetzen"
  beschreibung: string;
  step: ContentStep;                  // Branching-Step
}

// --- Schulanbindung ---

interface SchulCEBlock {
  blockId: string;
  schuleId: string;
  klasseId: string;
  ce: string;                        // "CE-02"
  geplanteUE: number;                // 40
  startDatum: string;
  endDatum: string;
  modus: "unterricht" | "eigen";
}

interface LernzeitLog {
  schuelerId: string;
  ce: string;
  datum: string;
  modus: "unterricht" | "eigen";
  aktivMinuten: number;              // Nur aktive Zeit (Pause abgezogen)
  themen: string[];                  // Welche Themen bearbeitet
  situationId?: string;              // In welcher Situation
}
```

---

## Teil 8: Prototyp — Lernsituation "Frau Yilmaz"

### Patient
Frau Ayşe Yilmaz, 79, Oberschenkelhalsbruch rechts, Hüft-TEP, 3. Tag post-OP, immobil, Angst vor Bewegung. Ehemann spricht nur Türkisch. Diabetes Typ 2, Adipositas (BMI 34).

### Kompetenzen
Dekubitus-Prophylaxe, Thrombose-Prophylaxe, Mobilisation, Schmerzmanagement, Kommunikation (interkulturell), Dokumentation.

### 6 Phasen (Kurzfassung)

**Phase 1 — Ankommen (~20-40 Min):** Übergabe verstehen, Akte lesen, Zimmer betreten (Kommunikation als Prinzip).

**Phase 2 — Beobachten (~30-50 Min):** Schmerzassessment (NRS/Gesichter-Skala bei Sprachbarriere), Hautinspektion (Dekubitus Grad 1 erkennen), Beine prüfen (Thrombose?), Risiko-Zusammenfassung (Zuordnung Befund → Risiko, ALLE Risiken werden erklärt — auch übersehene, in 3 Stufen).

**Phase 3 — Planen (~20-40 Min):** PÄS formulieren (Freitext/Lückentext/MC je nach Level), Maßnahmen priorisieren (Schlüsseleinsicht: Schmerzmittel VOR Mobilisation).

**Phase 4 — Durchführen (~30-50 Min):** Mobilisation an Bettkante (Reihenfolge), Komplikation: Orthostatische Hypotonie (Branching), Komplikation: Ehemann hat Angst (interkulturelle Kommunikation).

**Phase 5 — Evaluieren (~15-25 Min):** Nachmittags-Check, Folgeplanung.

**Phase 6 — Dokumentieren (~20-30 Min):** Pflegebericht (Freitext oder Textbausteine je nach Level).

### Spiral-Varianten

| Spirale | Patient | Fokus | Neu gegenüber vorher |
|---|---|---|---|
| 1 | Frau Yilmaz, Hüft-TEP | Grundlagen | Alles neu |
| 2 | Herr Schmidt, Schlaganfall | Vertiefung | + Wundversorgung, + Aphasie |
| 3 | Frau Petrow, Multimorbid | Komplex | + Demenz, + Priorisierung |
| 4 | Prüfungsfall | Prüfungsformat | Ohne Hilfe, unter Zeitdruck |

---

## Teil 9: Was haben wir, was fehlt?

### Für den Piloten (v1)

| Feature | Status | Was fehlt |
|---|---|---|
| Lernzeit-Tracking | ✅ gebaut | Unterricht/Eigen trennen |
| Lehrer-Dashboard | ✅ gebaut | CE-basierte Ansicht |
| PDF-Export | ✅ gebaut | Stundennachweis-Format |
| Kompetenz-Register | ✅ gebaut | Rahmenlehrplan-Mapping |
| Adaptiver Sequencer | ✅ gebaut | Phasenbasierte Navigation |
| 42 Step-Typen | ✅ gebaut | Reicht aus |
| Content (2 LEs) | ⚠️ begonnen | CE+Themen-Struktur |
| Schulzeit-Modus | ❌ | Lehrer aktiviert CE-Block |
| Eigenzeit-Modus | ❌ | Nachholplan + Themen-Suche |
| Inaktivitäts-Timer | ❌ | 3 Min Pause → Timer stoppt |
| Themen-Navigation | ❌ | Schüler sucht "Dekubitus" |

### Für Version 2

| Feature | Priorität |
|---|---|
| Situationsbasierte Lernsituationen (6 Phasen) | Hoch |
| Wissensbausteine mit 3 Stufen | Hoch |
| Spiralprinzip (neue Patienten) | Mittel |
| KI-generierte Spiral-Varianten | Mittel |
| Admin-Panel für Schulkonfiguration | Mittel |
| Prüfungsmodus mit Spirale 4 | Niedrig (haben wir teilweise) |

---

## Teil 10: Entscheidungen

| # | Frage | Entscheidung |
|---|---|---|
| E1 | Primäre Content-Einheit | Lernsituation (Patient) für Handlungswissen, Thema für Konzept-/Orientierungswissen |
| E2 | Schul-Konfiguration | Einfach: Schule wählt CE, Plattform liefert. Keine LE-Konfiguration nötig |
| E3 | Themen-Rolle | Navigation für Schüler ("Dekubitus wiederholen"), nicht Konfigurations-Feature für Schulen |
| E4 | Stundennachweis | Unterricht vs. Eigen getrennt. Nur Unterricht zählt für PflBG |
| E5 | Quereinstieg | Kein separater CE-Diagnostik-Test. Sequencer als Live-Diagnostik |
| E6 | Wissensbausteine | 3 Stufen (Denkfrage/Hinweis/Erklärung), wiederverwendbar quer über Situationen |
| E7 | Spaced Repetition | Karteikarten (Fakten) + neue Situation (Können) + Quick-Check |
| E8 | Themen-Kombination | Medizinisch realistisch (natürliche Cluster). Fallback: Bausteine einzeln |
| E9 | Pilot vs. Vision | Pilot: CE+Themen-Struktur, Stundennachweise. Vision: Situationsbasiert |

---

*Dieses Konzept entstand am 18.04.2026 aus einer strukturierten Diskussion. Von "langsame Schüler schaffen nicht alles" über Curriculum-Flexibilität, PflBG-Situationsorientierung, Spaced Repetition bis zum Schulmodell. Es bildet die Grundlage für die Content-Architektur ab Sprint B.*
