# Plan — Inline-Wissens-Architektur + Bausteine-Refactor v2

**Datum:** 2026-04-26
**Status:** Entwurf, wartet auf User-Freigabe
**Auslöser:** User-Gespräch 2026-04-26 — "Wissensbausteine sind nicht pflegetauglich, nicht aufeinander aufbauend, nicht integriert in Situationen."

---

## 1. Vision in einem Satz

Der Schüler erlebt **eine** Lernreise: Beim Durchlaufen einer Pflegesituation werden ihm an genau den Stellen, wo er einen neuen Begriff oder ein neues Konzept braucht, Mini-Wissensbausteine eingeblendet. Diese Bausteine sind storyhaft, an die Patientin der Situation gebunden, mit Spektrum-Verweisen auf andere Patienten — und werden nach Abschluss der Situation automatisch zu Karteikarten für die Wiederholung.

**Es gibt nicht mehr drei Welten** (Themen-Lerntab + Situationen + Karteikarten), sondern **zwei** Lernmodi: Situationen mit eingebettetem Wissen (Hauptweg) + Karteikarten (Spaced Repetition). Plus ein anklickbares Glossar überall.

---

## 2. Die fünf Bausteine der neuen Architektur

### 2.1 Inline-Bausteine in Situationen

**Was:** Vor jedem Anwendungs-Step, der einen neuen Begriff oder ein neues Konzept einführt, kommt ein 30–60-Sek-Wissens-Snack. Visuell als „Pflege-Wissen"-Karte gerahmt — abgesetzt vom Anwendungs-Flow, aber im selben Bildschirm-Kontext.

**Beispiel Frau M.-Sturz Phase 2 (Beobachten):**

```
Step 2.1  [Anwendung]    Du findest Frau M. am Boden. Was prüfst du zuerst? (MC ABCDE)
Step 2.2  [Wissen]       30 Sek: Was ist ABCDE eigentlich?
Step 2.3  [Anwendung]    Frau M. atmet flach, RR 95/60. Wie schätzt du das ein?
Step 2.4  [Wissen]       45 Sek: Die NRS-Schmerzskala — was sagt sie aus?
Step 2.5  [Anwendung]    Frau M. sagt "Hüfte tut weh". Wie fragst du nach NRS?
Step 2.6  [Wissen]       30 Sek: Schellong-Test — und warum jetzt?
Step 2.7  [Anwendung]    RR liegen 95/60, sitzen 80/55 — was ist das?
```

**Logik:** Wissen kommt VOR der Anwendung des Begriffs, nicht danach. Schüler hat keine "Was-soll-ich-jetzt-wissen"-Lücke.

**In der Situation gezeigt:** nur Stufe 3 (Erklärung, ~60 Sek). Kurz, präzise, Lese-Snack — Flow stört nicht.

### 2.2 Patient-Anker aus existierenden Situationen

**Was:** Jedes Thema bekommt **eine** Lehr-Patientin, die aus den existierenden Situations-Patient(inn)en gewählt wird. Die Bausteine eines Themas werden mit dieser Patientin durchgezogen.

**Mapping CE-02 (Vorschlag, finalisierbar):**

| Thema | Lehr-Patient(in) | Situation als Quelle |
|-------|------------------|----------------------|
| sturz-prophylaxe | Frau M. | frau-m-nacht-sturz |
| dekubitus-prophylaxe | Frau Yilmaz (Spirale 2) | ls-yilmaz-spirale2 |
| haut | Frau Yilmaz | ls-yilmaz-spirale2 |
| harnausscheidung | Frau Schmidt oder Frau Kovac | ls-schmidt-adipositas / ls-kovac-ambulant |
| stuhlausscheidung | Herr Nguyen | ls-nguyen-stoma |
| pneumonie-prophylaxe | Frau Kovac (COPD) | ls-kovac-ambulant |
| thrombose-prophylaxe | Frau Yilmaz (Hüft-TEP) | ls-yilmaz-hueft-tep |
| schmerz | Lukas (Verbrühung, KUSS) + Frau M. (NRS) | ls-lukas-verbruehung + frau-m-nacht-sturz |
| mobilisation | Frau Yilmaz (Hüft-TEP) | ls-yilmaz-hueft-tep |
| kontraktur-prophylaxe | Herr Petrov (Schlaganfall, Hemiparese) | ls-petrov-schlaganfall |
| basale-stimulation | Herr Bauer (Demenz) | ls-bauer-demenz-sturz |
| kinaesthetik | Frau Yilmaz oder Herr Petrov | je nach Fokus |
| ernaehrungsgrundlagen | Frau Schmidt (NRS-2002) + Emilia | beide |
| ernaehrungsassessment | Frau Schmidt | ls-schmidt-adipositas |
| enterale-ernaehrung | Herr Petrov (Dysphagie) | ls-petrov-schlaganfall |
| essen-anreichen | Herr Petrov | ls-petrov-schlaganfall |
| blasenkatheter | Herr Petrov (Tag-5-Katheter) | ls-petrov-schlaganfall |
| pflegedokumentation | alle (Querschnitts-Thema) | mehrere |
| pflegeplanung | alle | mehrere |
| pflegeprozess | Frau M. als Anker (alle 6 Phasen) | frau-m-nacht-sturz |
| ganzkörperpflege | Frau Yilmaz oder Herr Bauer | je nach Fokus |
| mundpflege | Herr Petrov (Aspirationsrisiko) | ls-petrov-schlaganfall |
| schlaf | Frau Kovac oder Frau M. | je nach Fokus |
| saeuglingspflege | Emilia | ls-emilia-saeugling |
| assessments-expertenstandards | alle (Querschnitts-Thema) | mehrere |
| positionierung | Frau Yilmaz | ls-yilmaz-spirale2 |

**Vorteil:** Der Schüler kennt die Patientin schon, wenn er die Situation startet. Wiedererkennung baut Engagement auf. Keine erfundenen Patient(inn)en mehr.

**Wo die Bausteine zeitlich spielen:** vor, während oder nach der Situation. Beispiel Frau M.:
- Baustein „Beinahe-Sturz" → spielt 2 Wochen VOR dem nächtlichen Sturz (Tochter erzählt von Beinahe-Sturz)
- Baustein „Risikofaktoren" → die Faktoren, die schon vor dem Krankenhaus zusammenkamen
- Baustein „Risiko-Assessment am Bett" → bei der Aufnahme, kurz bevor die Situation startet

Die Bausteine **erweitern die Patient-Bio** um Vergangenheit + Zukunft — die Situation ist ein Tag, das Leben drumrum sind Bausteine.

### 2.3 Anker + Spektrum-Pattern

**Problem:** Wenn ein Baustein nur Frau M. zeigt, lernt der Schüler nur Frau Ms Profil, nicht das volle Spektrum aller möglichen Risikofaktoren / Krankheitsbilder / Pflegehandlungen.

**Lösung:** Pro Baustein ein zweistufiger Aufbau:

1. **Anker** — Frau M. konkret. Die Story hängt im Kopf, der Begriff bekommt ein Gesicht.
2. **Spektrum** — die fehlenden Aspekte explizit benannt, gekoppelt an andere Situations-Patient(inn)en aus unserem eigenen Universum.

**Beispiel Baustein „Sturz-Risikofaktoren":**

```
Frau M. zeigt dir 5 Risikofaktoren konkret 
(Alter, frühere OP, Polypharmazie, Schlafmittel, Sehminderung).

Aber Sturzrisiko sieht bei jedem Patienten anders aus — 
das Spektrum ist breiter:

→ Herr Bauer (Demenz, du lernst ihn in seiner Situation kennen) 
   hat als Hauptfaktor seine Demenz: Sundowning, läuft nachts 
   orientierungslos.

→ Frau Yilmaz nach Hüft-TEP fällt nicht wegen Alter — bei ihr 
   ist es die akute post-OP-Bewegungseinschränkung + Wundschmerz.

→ Herr Petrov nach Schlaganfall: Halbseiten-Lähmung + Neglect 
   der betroffenen Seite.

Faustregel: Sturzrisiko ist ein Spektrum. Kein Patient hat alle 
Faktoren — jeder Patient hat eigene. Deine Aufgabe: das 
individuelle Profil erkennen, nicht eine Checkliste abhaken.
```

**Wenn ein Faktor in keinem unserer Patient(inn)en vorkommt** (z.B. Parkinson-Bradykinese, akute Synkope durch Herzrhythmusstörung):
- a) **Sonst-Box** — generisch erklärt am Ende des Bausteins
- b) Wenn häufig genug → eine zusätzliche Patient-Skizze (in einer noch zu bauenden Situation) ergänzen
- c) Cross-Reference: „Diesem Faktor begegnest du in CE-06, Situation X"

**Pflege-Kuratierung statt KI-Job:** Welche Patient(in) für welches Spektrum-Element steht — das wird einmal pro Thema festgelegt und dokumentiert (siehe Mapping in 2.2).

### 2.4 Karteikarten konkret/abstrakt

**Was:** Aus jedem in einer Situation eingespielten Inline-Baustein wird automatisch eine Karteikarte. Format:

- **Vorderseite (Frage)** = patientenbezogen → Erinnerungs-Anker, Schüler hat ein Gesicht im Kopf.
- **Rückseite (Antwort)** = abstrakt + standardbezogen → klausurtauglich + Spektrum-Verweise.

**Beispiel:**

```
Vorderseite: „Frau M. (Sturz vor 2 h, NRS 7, Hüftverdacht) — 
              welche Risikofaktoren siehst du, was wäre bei 
              anderen Patienten anders?"

Rückseite:   „Frau M.: 5 Faktoren (Alter, frühere OP, Polypharmazie, 
              Mirtazapin, Sehminderung).
              
              Spektrum bei anderen:
              • Bauer (Demenz) → Kognition + Sundowning
              • Yilmaz (Hüft-TEP) → akute post-OP-Mobilität
              • Schmidt → Polyneuropathie + Bariatrik
              • Petrov → Halbseiten-Lähmung + Neglect
              
              Faustregel: Sturzrisiko ist ein Spektrum. 4+ 
              Faktoren = hohes Risiko. Bei jedem Patienten 
              andere Konstellation. (DNQP 2022)"
```

**Spaced Repetition:** Tag 1 (sofort), Tag 3, Tag 7, Tag 14, Tag 30 — bestehender Karteikarten-Tab kuppelt mit neuem Auto-Add.

**In Karteikarten gezeigt:** Alle 3 Stufen werden hier ausgespielt — Stufe 1 als Vorderseite (Denkfrage), Stufe 2 als Hinweis-Auflöse-Knopf, Stufe 3 + Spektrum als Rückseite. Hier ist „selbst denken" wieder sinnvoll, anders als im Situations-Flow.

### 2.5 Anklickbares Glossar überall

**Was:** Jedes Pflegefachwort in jedem Text (Step-Body, Erklärung, Baustein-Inhalt, Patient-Bio) ist anklickbar und öffnet eine Mini-Definition als Overlay.

**Bestand prüfen:** Es existiert bereits:
- `src/lib/glossar/pflege-glossar.ts` (zentrales Glossar)
- `src/app/[locale]/glossar` Route
- per-Thema `glossar.ts` (5570 Zeilen total)
- `glossarBegriffe: [...]` Array pro Step

**Was fehlt:**
- **Renderer-Komponente `<GlossarText>`**: matcht den Fließtext gegen das zentrale Glossar und macht erkannte Begriffe automatisch klickbar (mit dezentem Unterstrich)
- **Coverage-Audit**: welche Pflegefachwörter sind in unseren Texten verwendet aber nicht im Glossar?
- **Vollständigkeits-Quelle**: ein Pflegefachlexikon als Fallback (z.B. Pschyrembel Pflege 2023 oder Roche Lexikon Pflege 2024)

**Klick-Verhalten:**
- 1. Klick = Overlay mit Kurzdefinition (~150 Zeichen)
- "Mehr lernen" Button = öffnet den vollen Themen-Baustein als Karteikarte (falls existiert) oder reine Glossar-Erklärung

---

## 3. Was sich technisch ändern muss

### 3.1 Schema-Erweiterungen in `content/_types.ts`

```typescript
interface SituationsStep {
  // ... existing fields
  verwendeteBegriffe?: string[];  // NEU: für Curriculum-Validator
}

interface InlineBaustein extends SituationsStep {
  stepType: "inline-wissen";
  bausteinRef: string;             // ID aus dem Themen-Bausteine-Pool
  zeitBudget: 30 | 45 | 60;        // Sekunden
  karteikarteId: string;           // → Auto-Generierung der Karteikarte
}

interface Baustein {
  bausteinId: string;
  themaId: string;
  lehrPatient: string;             // NEU: ID des Situations-Patienten als Anker
  storyAufhaenger: string;         // NEU: Konkrete Patient-Szene
  stufe1: { frage: string; frageB1: string; bewertung: string };
  stufe2: { c1: string; b1: string };
  stufe3: { c1: string; b1: string };
  ahaMoment: string;               // NEU
  faustregel: string;              // NEU
  spektrum: SpektrumEintrag[];     // NEU: Cross-Refs zu anderen Patient(inn)en
  sonstBox?: string;               // NEU: Faktoren ohne Patient-Anker
  distraktoren: Distraktor[];      // bestehend
  bildSlot: { geminiPrompt: string; altText: string };  // NEU
  karteikarte: { vorderseite: string; rueckseite: string };  // NEU
  vorgaenger: string | null;       // NEU: Lerntreppe
  nachfolger: string | null;       // NEU: Lerntreppe
  quellen: string[];               // bestehend
  bloomLevel: 1 | 2 | 3 | 4 | 5 | 6;
  zeitBudget: number;              // Min
}

interface SpektrumEintrag {
  patientName: string;
  situationsId: string;
  hauptfaktor: string;
  kurzbeschreibung: string;        // 1-2 Sätze
}
```

### 3.2 Neuer Step-Typ: `inline-wissen`

- **Renderer:** Neue Komponente `<StepInlineWissen>` in `src/components/learn/`
- Visuell als „Pflege-Wissen"-Insel im Situations-Flow gerahmt (anderer Hintergrund, „📖 Wissen"-Header)
- Inhalt: Stufe-3-Text aus dem referenzierten Baustein, max. 60 Sek Lesezeit
- „Weiter"-Button bleibt — Schüler überspringen falls bereits bekannt
- Tracking: Hat der Schüler den Baustein gelesen? Wird in Karteikarten-SR-Engine eingespeist (bekannter Status → andere Wiederholungs-Frequenz)

### 3.3 Inline-Bausteine-Generator

- KI-Agent: bekommt Sessionplan einer Situation + Themen-Bausteine + Lehr-Patient(in)-Mapping
- Output: erweiterten Sessionplan mit Inline-Bausteinen an den richtigen Stellen
- Logik: pro Step `verwendeteBegriffe` extrahieren → vor erstem Vorkommen den passenden Baustein einfügen

### 3.4 Karteikarten-Auto-Generation

- Bei Abschluss einer Situation: alle Inline-Bausteine sammeln → pro Baustein eine Karteikarte erzeugen → in Schüler-Karteikarten-Stapel einfügen
- Format: konkrete Vorderseite (mit Patient) / abstrakte Rückseite (mit Spektrum)
- SR-Engine bestehend, neue Auto-Add-API

### 3.5 Anklickbares Glossar

- Komponente `<GlossarText>` als Wrapper für Fließtexte
- Matcht gegen `pflege-glossar.ts` (zentrale Quelle)
- Markiert Treffer dezent (gepunktete Unterlinie)
- Click → Overlay mit Definition + Mehr-lernen-Link
- Performance: Trie-basierte Wortmatching pro Render

---

## 4. Pipeline-Erweiterung

Die existierende Content-Pipeline v9 wird um drei Stufen erweitert:

```
Bestehende Pipeline (nach Pflege-Härtung 2026-04-26):
  1. Recherche (kernfakten.md)
  2. Plan-Phase (bausteine-plan.md, sessionsplan.md, patient-plan.md)
  3. Plan-Validator (pflege-validator mode=plan) ← NEU
  4. Code-Generator (phase-*.ts)
  5. Code-Validator (pflege-validator mode=code)
  6. Pflege-Gate

Neue Pipeline v10 (mit Inline-Wissen):
  1. Recherche
  2a. Bausteine-Generator v2 (mit Lehr-Patient + Anker+Spektrum)
  2b. Bausteine-Validator (prüft 9 Pflicht-Elemente pro Baustein, Lerntreppe)
  3. Plan-Phase (Sessionplan mit verwendeteBegriffe pro Step)
  4. Plan-Validator (pflege-validator mode=plan)
  5. Curriculum-Validator ← NEU
       prüft: Jeder verwendete Begriff entweder
         a) im zentralen Glossar erklärt, ODER
         b) im selben Sessionplan vor diesem Step durch Inline-Baustein eingeführt
       → bei Fail: Inline-Baustein-Generator schlägt Position vor
  6. Inline-Bausteine-Insertion (KI-Agent)
  7. Code-Generator
  8. Code-Validator
  9. Karteikarten-Auto-Generation aus Inline-Bausteinen
  10. Pflege-Gate
```

---

## 5. Migration: was passiert mit dem alten Content

### 5.1 Themen-Lerntab

**Aktuell:** 25 Themen pro CE × 8-14 Bausteine in Stufen 1+2+3 als eigenständiger Lernweg.

**Neu:** Themen-Lerntab wird zum **stillen Nachschlagewerk** (wie Wissen-Tab heute). Nicht mehr aktiver Hauptlernweg. Schüler nutzt es zum freien Stöbern oder Vor-/Nachbereitung.

**Bausteine bleiben** — als Datenbank für Inline-Bausteine + Karteikarten. Aber: Sie werden im **v2-Stil** (Lehr-Patient, Spektrum) neu geschrieben.

### 5.2 Bestehende Bausteine

**11 CE × ~25 Themen × ~10 Bausteine = ~2750 Bausteine total.**

Migrationsstrategie:
- **CE-02 zuerst** (10 Situationen + 25 Themen — voll ausgearbeitet)
- **3 Pilot-Bausteine** im v2-Stil als Goldstandard (sturz-prophylaxe, mit Frau M.)
- **User-Review** des Stils
- **Bausteine-Generator v2** mit Pilot-Stil als Style-Guide
- **Skalierung CE-02:** alle 25 Themen × ~10 Bausteine = 250 Bausteine via parallele Sub-Agents (1 Agent pro Thema)
- **Validation:** Bausteine-Validator + Pflege-Validator
- **CE-03 bis CE-11** danach in gleicher Logik

**Zeitaufwand realistisch:**
- Pilot (3 Bausteine): 1 Tag
- Pipeline-Update (Generator v2 + Validator): 2-3 Tage
- CE-02 Skalierung (mit Sub-Agents): 1-2 Tage
- Inline-Renderer + Karteikarten-Auto-Gen: 2-3 Tage
- Anklickbares Glossar: 1-2 Tage
- Pilot-Situation (Frau M.) End-to-End: 1 Tag
- Rest CE-02 ausrollen: 1-2 Tage
- **Gesamt CE-02 fertig: ~10-15 Arbeitstage**
- Skalierung CE-03 bis CE-11: nochmal je ~3-5 Tage = 24-44 Tage Inhaltsarbeit (parallel zu UI)

### 5.3 Existierende Karteikarten

**Aktuell:** `karteikarten-plan.md` + `karteikarten.ts` pro Thema, manuell von Bausteinen abgeleitet.

**Neu:** Karteikarten werden automatisch aus Inline-Bausteinen einer Situation generiert. Die manuellen `karteikarten.ts` werden zur **Migration-Quelle** (Inhalte werden in v2-Bausteine integriert), dann obsolet.

---

## 6. Pilot → Validation → Rollout

### Phase 1 — Stil-Pilot (1 Tag)

- [ ] 3 Bausteine sturz-prophylaxe v2 mit Frau M. als Lehr-Patientin schreiben
- [ ] Anker + Spektrum mit allen relevanten CE-02-Patient(inn)en
- [ ] Karteikarten konkret/abstrakt
- [ ] Bild-Slots mit Gemini-Prompts
- [ ] User-Review des Stils → Go/No-Go

### Phase 2 — Pipeline-Update (2-3 Tage, nach User-Go)

- [ ] `_types.ts` erweitern (Baustein-Schema v2)
- [ ] `dozentin`-Agent neu konditionieren mit Stil-Pflicht v2
- [ ] Bausteine-Validator-Skript (9 Pflicht-Elemente)
- [ ] Mapping-Datei pro CE (Thema → Lehr-Patient(in))
- [ ] Spektrum-Datenbank pro CE (welcher Patient für welches Risiko-Element)

### Phase 3 — Renderer + Auto-Gen (2-3 Tage, parallel zu Phase 2)

- [ ] `<StepInlineWissen>`-Renderer
- [ ] `<GlossarText>`-Wrapper für Fließtexte
- [ ] Karteikarten-Auto-Gen-API (bei Situations-Abschluss)
- [ ] Curriculum-Validator-Skript

### Phase 4 — CE-02 Pilot End-to-End (1-2 Tage)

- [ ] Frau-M.-Sturz: alle Inline-Bausteine eingebaut
- [ ] Sturz-Prophylaxe-Bausteine alle 13 in v2 umgeschrieben (parallele Sub-Agents)
- [ ] Pflege-Validator über das Ergebnis
- [ ] User-Walkthrough live

### Phase 5 — CE-02 Skalierung (1-2 Tage)

- [ ] Alle 25 Themen v2-Bausteine via parallele Sub-Agents
- [ ] Alle 10 Situationen mit Inline-Bausteinen + Curriculum-Validator-PASS
- [ ] Karteikarten automatisch generiert + in SR-Stapel
- [ ] Anklickbares Glossar live

### Phase 6 — CE-03 bis CE-11 (mehrere Wochen)

- [ ] Pro CE: Lehr-Patient-Mapping, Bausteine v2, Situationen mit Inline-Wissen
- [ ] Cross-CE-Validator: Glossar-Konsistenz, Patient-Wiedererkennung
- [ ] Globaler Pflege-Gate über alle CEs

---

## 7. Aufwandsschätzung & Risiken

### 7.1 Aufwand

| Phase | Arbeitstage | Wer |
|-------|-------------|-----|
| Stil-Pilot | 1 | Claude |
| Pipeline-Update | 2-3 | Claude |
| Renderer + Auto-Gen | 2-3 | Claude |
| CE-02 Pilot End-to-End | 1-2 | Claude + Sub-Agents |
| CE-02 Skalierung | 1-2 | Claude + Sub-Agents |
| CE-03 bis CE-11 | 24-44 | Claude + Sub-Agents |
| **Gesamt** | **31-55 Tage** | |

### 7.2 Risiken

1. **KI-Halluzination in Spektrum-Verweisen** — Gefahr: KI erfindet Patient-Eigenschaften, die nicht in der Original-Situation stehen. **Gegenmaßnahme:** Spektrum-Datenbank wird **manuell von User kuratiert** (du gibst pro Patient(in) die 3-5 zentralen Risiko-/Krankheitsbild-Tags vor), KI darf nur aus dieser Liste ziehen.

2. **Lerntreppe-Konflikt zwischen Themen** — z.B. `pflegeprozess` muss vor `pflegeplanung` kommen, aber Schüler springt situational. **Gegenmaßnahme:** Curriculum-Validator prüft pro Situation einen Voraussetzungs-Graphen über alle Themen, nicht nur innerhalb eines Themas.

3. **Karteikarten-Inflation** — Wenn jede Situation 10+ Karteikarten generiert × 10 Situationen pro CE × 11 CE = 1100+ Karten. **Gegenmaßnahme:** Deduplizierung über `bausteinId` — wenn ein Begriff in zwei Situationen vorkommt, eine Karteikarte mit beiden Anker-Optionen.

4. **Visueller Bruch im Situations-Flow** — Inline-Wissen-Karten müssen den Lese-Flow ergänzen, nicht stören. **Gegenmaßnahme:** UX-Test mit Frau-M.-Pilot, Skip-Button immer da.

5. **Bestehender Content geht verloren** — die alten Bausteine-Plans haben Wert. **Gegenmaßnahme:** v1-Bausteine bleiben als Backup, v2 wird parallel erstellt; v1 wird erst entfernt nach User-Sign-off pro CE.

6. **Patient-Universe-Lücken** — manche Risikofaktoren / Krankheitsbilder haben keinen Anker-Patienten in unseren 10 CE-02-Situationen. **Gegenmaßnahme:** Sonst-Box im Baustein + Cross-Reference zu anderen CEs, wo der Patient existiert.

### 7.3 Was wir NICHT tun (jetzt)

- Keine UI-Migration auf andere Frameworks
- Kein Re-Build der Pflege-Validator-Pipeline (die ist gerade fertig, läuft)
- Keine Touch-Gesten/Animationen für Inline-Wissen (erst Funktion, dann Polish)
- Keine Echtzeit-KI im Live-Modus (Bausteine sind statisch generiert, kein LLM zur Laufzeit)
- Kein Pschyrembel-Buch importieren (erst nachdem Coverage-Audit zeigt, ob Lücken da sind)

---

## 8. Offene Entscheidungen (vor User-Go)

1. **Lehr-Patient-Mapping:** Stimmst du der Tabelle in 2.2 zu, oder willst du anders zuordnen?
2. **Pilot-Thema:** sturz-prophylaxe ist mein Vorschlag (passt zu Frau-M.). Alternative wäre ein Querschnitts-Thema wie pflegeprozess. Was ist dir lieber?
3. **Sonst-Box-Strategie:** Faktoren ohne Patient-Anker generisch erklären (a), neue Patient-Skizze einbauen (b), oder Cross-Reference (c)? Mein Vorschlag: (a) als Default, (c) wo sich anbietet.
4. **Spektrum-Tiefe:** Pro Baustein 3-4 Spektrum-Einträge oder weniger? Mein Vorschlag: max. 4 (mehr wird unübersichtlich).
5. **Themen-Lerntab abschalten:** sofort beim Rollout v2 oder erst nach kompletter Migration aller CEs? Mein Vorschlag: erst nach kompletter Migration — bis dahin parallel.
6. **Patient-Bio-Erweiterung:** Sollen wir die existierenden `patient.ts`-Dateien erweitern um Vor-/Nach-Bausteine-Lebensgeschichte, oder Bausteine ziehen separates `patient-bio-erweitert.md`? Mein Vorschlag: separate Datei pro Thema, damit `patient.ts` schlank bleibt.
7. **Karteikarten-Format C1/B1:** Beide Sprachvarianten pro Karte oder Schüler-Profil-abhängig? Mein Vorschlag: beide hinterlegen, Renderer wählt nach Schüler-Sprachprofil.
8. **Pflegefachlexikon als Glossar-Fallback:** Pschyrembel Pflege 2023 (~50 €) kaufen oder mit existierenden Recherche-Indexen leben? Mein Vorschlag: erst Coverage-Audit, dann entscheiden.

---

## 9. Was du jetzt tun musst

1. Plan lesen
2. Antworten auf die 8 offenen Entscheidungen geben (oder „Stimmt alles, los"-Variante)
3. Phase 1 freigeben (Stil-Pilot mit Frau M., 1 Tag)

Danach starte ich Phase 1 sofort. Phase 2-5 nach User-Go nach Phase 1.

---

## 10. Erweiterung 2026-04-26 — Realistische Bausteinmenge + Cross-Linking + 13 Verbesserungen

Nach User-Feedback („Ein Thema wie Ganzkörperpflege kann nicht mit einem Baustein abgearbeitet sein"):

### 10.1 Korrigierte Mengengerüste

- **Pro Thema 5-10 Bausteine**, verteilt über mehrere Situationen (statt 1 Baustein zentral)
- 25 Themen × ~7 Bausteine = **~175 Bausteine pro CE**
- Pro Situation realistisch **12-20 Inline-Bausteine** (statt 8-12)
- Über 11 CEs: ~1925 Bausteine + ~1500 unique Karteikarten total

### 10.2 Cross-Linking — Wiederbegegnung statt Wiederholung

Wenn ein Begriff in mehreren Situationen vorkommt, wird er nicht zweimal vollständig gelehrt. Beim zweiten Vorkommen kommt eine **Wiederbegegnung mit situationsspezifischer Vertiefung** — der Schüler erlebt wachsende Expertise.

**Schema:** `WiederbegegnungEintrag` in `_types.ts` (ab 2026-04-26):
```typescript
wiederbegegnung?: {
  basisBausteinId: string;       // z.B. "sturz-prophylaxe-schellong"
  basisPatient: string;          // z.B. "Frau M."
  vertiefung: string;            // 1-3 Sätze situationsspezifisch
  vertiefungB1?: string;
};
```

**Renderer:** Inline-Baustein mit `wiederbegegnung` wird visuell anders gerendert (kompakter, mit „Du kennst das schon — bei … ist eine Besonderheit"-Header).

### 10.3 Themen-Tracking pro Inline-Baustein

Schema-Erweiterung: jeder Inline-Baustein hat
- `themaPrimaer: string` — Hauptthema
- `themenSekundaer?: string[]` — weitere berührte Themen

Curriculum-Validator + Schüler-Coverage-UI bauen darauf auf.

### 10.4 Die 13 Erweiterungen (sortiert nach Lerneffekt × Differenzierung)

Diese kommen nach CE-02-Skalierung als „Phase 7+ Erweiterungs-Pipeline":

| # | Erweiterung | Aufwand | Diff zum Wettbewerb |
|---|-------------|---------|---------------------|
| 1 | **Cross-Linking Wiederbegegnung** (jetzt im Schema, Renderer in Phase 7) | mittel | hoch |
| 2 | **Patient-Dossier** als ständig zugängliches Pflegeakten-Feature | mittel | hoch |
| 3 | **Curriculum-Coverage-UI für Schüler** (sichtbar pro Thema) | mittel | sehr hoch |
| 4 | **Just-in-Time-Praxismodus** (Mini-Refresh auf Station) | hoch | sehr hoch |
| 5 | **KI-Tutor-Chat im Baustein-Kontext** | mittel | hoch |
| 6 | **Adaptive Spaced Repetition (SM-2)** + Fehler-Schnellschleife (4h) | mittel | mittel |
| 7 | **Tagesempfehlung-Engine** (autonome 8-UE-Tagesplanung) | hoch | sehr hoch |
| 8 | **Lehrer-Dashboard Curriculum-Lücken** pro Schüler | mittel | hoch |
| 9 | **Reflexionsmomente** nach emotional dichten Bausteinen | niedrig | mittel |
| 10 | **Audio-Modus** (TTS Bausteine + Karteikarten, offline) | mittel | mittel |
| 11 | Echte Pflege-Stimmen für Patient-Audios | hoch (Aufnahme) | hoch |
| 12 | Realistik-Calibrierung („78% machen diesen Fehler...") | niedrig | mittel |
| 13 | Pflege-Karriere-Pfad-Visualisierung (AD-Niveau pro Thema) | niedrig | mittel |

### 10.5 Was JETZT mit-gebaut wird (Phase 1.b)

- **Cross-Linking-Schema** — `wiederbegegnung[]` in `InlineWissenData` (✅ done)
- **Themen-Tracking-Schema** — `themaPrimaer` + `themenSekundaer` (✅ done)

Alle anderen 11 Erweiterungen: **Phase 7+ nach CE-02-Skalierung**, dokumentiert hier.

### 10.6 Aufwands-Korrektur

| Phase | Alt | Neu |
|-------|-----|-----|
| Frau-M. komplett | 4-5 h | **8-10 h** (15-18 statt 9 weitere Bausteine) |
| CE-02 Skalierung | 1-2 Tage | **3-4 Wochen** (10 Situationen × 12-20 Bausteine) |
| CE-03 bis CE-11 | 24-44 Tage | **40-66 Tage** parallele Sub-Agents |
| Phase 7+ Erweiterungen | nicht eingeplant | **6-10 Wochen** zusätzlich |
| **Gesamt** | 31-55 Tage | **~6-10 Monate** Inhalts- + Erweiterungs-Arbeit |

Realistisch, machbar — aber kein Wochen-Projekt mehr. Es ist die Vollausbau-Roadmap zur kompletten Theorie-Ausbildungs-Plattform aller 11 CEs.
