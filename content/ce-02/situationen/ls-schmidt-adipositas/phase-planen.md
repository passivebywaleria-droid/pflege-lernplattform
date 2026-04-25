# Phase 3 — Pflege planen

**situationId:** ls-schmidt-adipositas
**Phase:** planen
**Zeit:** ~25–35 Min
**Bloom:** B3–B5
**Kern-Frage:** Welche Pflegemaßnahmen für welches Ziel — und was davon kann Pflege alleine, was braucht das interprofessionelle Team?
**Steps:** 6

---

## Kontext

Du hast das Assessment abgeschlossen. Du sitzt kurz auf dem Stuhl neben Frau Schmidts Bett und schreibst deine Notizen. Frau Schmidt schaut aus dem Fenster. Sie ist ruhig, aber du merkst: Sie wartet auf das, was jetzt kommt.

Frau Bayraktar taucht kurz auf: „Wie war das Assessment?" Du fasst zusammen. Sie nickt: „Gut. Dann mach jetzt den Pflegeplan. Und denk dran — heute Nachmittag kommt die Ernährungsberaterin, das haben wir schon angefordert. Deine Aufgabe ist das Gespräch am Vormittag und die Hautpflege."

**kontextB1:** Du hast das Assessment gemacht. Jetzt weißt du: Was hat Frau Schmidt? Was braucht sie?
Du schreibst Notizen. Frau Schmidt wartet ruhig.
Deine Praxisanleiterin fragt: "Wie war das Assessment?"
Du erklärst kurz. Sie sagt: "Gut! Mach jetzt den Pflegeplan."
Heute Nachmittag kommt die Ernährungs-Beraterin.
Deine Aufgabe heute Morgen: Gespräch mit Frau Schmidt + Haut-Pflege.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-pflegediagnosen` | **matching** | B3 | Pflegediagnosen-Zuordnung nach PESR-Schema: Schüler ordnet Probleme → passende Pflegediagnose. 3 Paare: Problem „Albumin 31 g/l, einseitige Fertigkost-Ernährung, NRS 3" → PD „Mangelernährung bezogen auf Proteinzufuhr" / Problem „Hautfalten submammär und inguinal, feucht, adipös" → PD „Risiko für Intertrigo" / Problem „unwillkürlicher Urinverlust bei körperlicher Belastung seit 2 Jahren" → PD „Belastungsinkontinenz". Bloom 3: Zuordnen + Strukturieren. **Trigger für Baustein `pflegeplanung-pesr-schema`.** | pflege |
| 3.2 | `plan-02-ziele-smart` | **freetext` (kurz, 1-2 Sätze) | B4 | SMART-Pflegeziel formulieren. Aufgabe: _„Formuliere ein SMART-Ziel für das Ernährungsproblem von Frau Schmidt."_ Erwartung: Spezifisch (Protein), Messbar (Albumin-Zielwert, oder: täglich 3 eiweißreiche Mahlzeiten), Erreichbar (stationär machbar), Relevant (für Heilung, BZ-Kontrolle), Terminiert (bis Entlassung in ca. 5 Tagen). KI-Feedback prüft SMART-Kriterien und gibt Sandwich-Feedback. B1-Schüler: SMART-Vorlage als Textbaustein-Hilfe. | pflege |
| 3.3 | `plan-03-interprof-team` | **matrix** (2×4) | B4 | Matrix: Wer macht was für Frau Schmidt? Zwei Achsen: **Berufsgruppe** (Pflege, Ernährungsberatung, Podologie, Arzt) × **Aufgabe** (4 Aufgaben aus dem Assessment). Karten einsortieren: Nagelpflege → nur Podologe. Ernährungsplan → Ernährungsberaterin. Metformin-Anpassung je nach BZ → Arzt. Hautinspektion täglich, Hautpflege, Inkontinenzversorgung → Pflege. Bloom 4: Analyse der Kompetenzgrenzen. | pflege |
| 3.4 | `plan-04-hautpflege-planen` | **sequencing** | B3 | Reihenfolge: Hautpflege für die Hautfalten bei Adipositas planen. Karten: [Hautfalten täglich inspizieren (morgens bei Pflege)] → [Trocknen nach Waschen — Falten auseinander und trocken tupfen, nie reiben] → [Hautschutz-Lotion oder Zinkpaste dünn auftragen (nicht in feuchten Falten, nur vorbeugend)] → [Auf Rötung, Mazerierung, Geruch achten] → [Befund täglich dokumentieren]. Bloom 3: Handlungsreihenfolge sichern. **Trigger für Baustein `haut-intertrigo`.** | pflege |
| 3.5 | `plan-05-mobilisation-planen` | **text` (displayFormat: `scenario`) | B3 | Erklär-Step: Mobilisationsplan bei Adipositas. Szenario: Du überlegst mit Frau Schmidt gemeinsam. Frau Schmidt sagt: **Zitat Z4:** _„Ich hab's versucht, wirklich. Aber dann bin ich so außer Atem. Das ist mir unangenehm, wenn alle zuschauen."_ Text (C1, ~160 Wörter): Motivation durch kleine erreichbare Schritte — nicht „Sport", sondern „dreimal täglich zum Waschbecken gehen". Mobilisation nutzt der BZ-Einstellung (Insulinsensitivität steigt), der Dekubitus-Prävention (Druckentlastung) und der Inkontinenz (Beckenboden wird aktiviert). Quelle: (DNQP 2020; Deutsche Gesellschaft für Geriatrie DGG 2022). | pflege |
| 3.6 | `plan-06-inkontinenz-wuerde` | **branching** (Klein-Branching) | B5 | _„Frau Schmidt braucht eine Inkontinenzversorgung für den stationären Aufenthalt. Wie gehst du das an?"_ Drei Pfade: A) _„Ich lege eine Vorlage aufs Bett und sage nichts — das ist weniger unangenehm."_ → Feedback: Kein Informieren, keine Selbstbestimmung. Würde verletzt durch Schweigen. B) _„Frau Schmidt, ich würde Ihnen eine diskrete Versorgung empfehlen, damit Sie sich sicher fühlen. Darf ich erklären, was wir haben?"_ → richtiger Pfad. C) _„Ich trage es einfach im Pflegebericht ein, Arzt entscheidet."_ → Feedback: Pflege darf nicht schweigen, Beratung ist Pflegeaufgabe nach DNQP 2017. **Trigger für Baustein `harnausscheidung-inkontinenz-versorgung`.** | pflege |

---

## Optionale Steps (Sequencer wählt)

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 3.7 | `plan-07-pflegeplan-template` | **text` (displayFormat: `stepbystep`) | B2 | B1-Schüler | Pflegeplan-Struktur erklärt: Problem → Pflegediagnose → Ziel → Maßnahmen → Evaluationsdatum. Verlinkung zu Baustein `pflegeplanung-pesr-schema` Stufe 3. |
| 3.8 | `plan-08-dekubitus-braden` | **mc` (Single-Choice) | B3 | Mittlere | Braden-Skala: Wie viele Punkte hätte Frau Schmidt? A) 23 (kein Risiko) B) 17 (leichtes Risiko) C) 13 (mittleres Risiko) D) 9 (hohes Risiko). **Richtig: B (17)** — Adipositas erhöht mechanischen Druck, aber Frau Schmidt ist noch mobil. Falsch-Feedback bei C/D: Hohe Einstufung nur bei vollständiger Immobilität. **Trigger für Baustein `dekubitus-prophylaxe-braden`.** |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| plan-01-matching-Fehler | `pflegeplanung-pesr-schema` | Stufe 2–3 |
| plan-02-ziel-nicht-smart | `pflegeplanung-smart-ziele` | Stufe 2–3 |
| plan-03-podologe-falsch-eingeordnet | `ganzkörperpflege-diabetischer-fuss` | Stufe 3 (Pflicht-Trigger, K.O.-Wissen) |
| plan-04-reihenfolge-falsch | `haut-intertrigo` | Stufe 2 |
| plan-06-pfad-A | `harnausscheidung-inkontinenz-versorgung` | Stufe 3 |

---

---

## B1-Versionen der Kern-Steps

### Step 3.1 — bodyB1
Pflege-Diagnosen nach PESR (= Pflege-Problem, Einflussfaktor, Symptom, Ressource) zuordnen.
Ordne zu: Welches Problem → welche Pflege-Diagnose?
- Problem: Albumin 31 g/l, Fertig-Essen, NRS-Score 3 → Pflege-Diagnose: **Mangel-Ernährung bezogen auf Protein-Zufuhr**
- Problem: Haut-Falten feucht und gerötet, Übergewicht → Pflege-Diagnose: **Risiko für Intertrigo** (= Haut-Entzündung in Falten)
- Problem: Frau Schmidt verliert manchmal Urin bei Bewegung → Pflege-Diagnose: **Belastungs-Inkontinenz** (= unkontrollierter Harn-Verlust)

### Step 3.2 — bodyB1
SMART-Ziel formulieren für Frau Schmidts Ernährungs-Problem.
SMART bedeutet:
- **S** — Spezifisch (genau beschrieben)
- **M** — Messbar (man kann prüfen ob es erreicht ist)
- **A** — Erreichbar (realistisch)
- **R** — Relevant (wichtig für Frau Schmidt)
- **T** — Terminiert (bis wann?)
Beispiel: "Frau Schmidt isst bis zur Entlassung (in 5 Tagen) täglich 3 eiweiß-reiche Mahlzeiten."
Eiweiß (= Protein) ist wichtig für: Wunden heilen, Immunsystem stärken.

### Step 3.3 — bodyB1
Wer macht was? Ordne zu:
- Nägel schneiden am Fuß → **nur der Podologe** (= Fußpflege-Spezialist)
- Ernährungs-Plan erstellen → **die Ernährungs-Beraterin**
- Metformin-Dosis anpassen → **der Arzt**
- Haut-Falten täglich inspizieren → **die Pflege**
- Haut-Pflege durchführen → **die Pflege**
- Inkontinenz-Versorgung → **die Pflege**
Grenzen kennen ist wichtig! Nur wer weiß was er darf, macht keine Fehler.

### Step 3.4 — bodyB1
Haut-Pflege der Haut-Falten planen — bringe in die richtige Reihenfolge:
1. Haut-Falten täglich morgens inspizieren (= genau anschauen)
2. Nach dem Waschen: Falten auseinander halten und trocken tupfen — nicht reiben!
3. Haut-Schutz-Creme dünn auftragen (nur wenn die Haut gesund und trocken ist)
4. Auf Rötung, Nässe und Geruch achten
5. Befund (= was du siehst) sofort dokumentieren

### Step 3.5 — bodyB1
Mobilisations-Plan bei Übergewicht:
Du planst mit Frau Schmidt zusammen kleine Bewegungsschritte.
Frau Schmidt sagt: "Ich hab's versucht. Aber dann bin ich so außer Atem. Das ist mir unangenehm."
Was hilft? Nicht "Sport machen" — das ist zu viel.
Besser: Kleine Schritte — zum Beispiel dreimal täglich kurz aufstehen und zum Waschbecken gehen.
Warum ist das wichtig?
- Bewegung senkt den Blutzucker (= der Körper braucht weniger Insulin)
- Bewegung schützt vor Dekubitus (= Druck-Stelle) — der Druck ändert sich
- Bewegung stärkt den Beckenboden (= hilft bei Inkontinenz)

### Step 3.6 — bodyB1
Frau Schmidt braucht eine Inkontinenz-Versorgung. Wie gehst du vor?
A) Du legst eine Vorlage hin und sagst nichts. Das ist weniger unangenehm.
   → Nein! Frau Schmidt hat keine Wahl. Das ist nicht respektvoll.
B) Du sagst: "Frau Schmidt, darf ich eine diskrete Versorgung empfehlen?" ← Das ist richtig!
   Diskret (= niemand sieht es) und informiert — so bleibt Frau Schmidt in ihrer Würde.
C) Du schreibst es in den Pflege-Bericht. Der Arzt entscheidet.
   → Nein! Beratung und Versorgung bei Inkontinenz ist Pflege-Aufgabe.

---

## Phase-3-Abschluss

_Zwischenseite:_ „Der Pflegeplan steht. Ernährungsberaterin, Podologie, Hautpflege, Inkontinenzversorgung — alles geplant, Zuständigkeiten klar. Jetzt kommt der schwierige Teil: die Umsetzung. Besonders das Ernährungsgespräch."
