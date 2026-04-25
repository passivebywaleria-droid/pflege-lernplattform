# Baustein-Trigger: ls-bauer-demenz-sturz

**situationId:** ls-bauer-demenz-sturz
**Gesamt-Trigger:** 18 (verteilt über 6 Phasen)
**Mindest-Trigger aktiviert pro Schüler:** 3–6 (je nach Profil und Performance)

---

## Prinzip

Ein Baustein-Trigger ist ein Auslöseereignis, das den Sequencer anweist: "Zeige dem Schüler jetzt diesen Wissensbaustein." Der Baustein erscheint inline in der Situation — nicht als Ablenkung, sondern als Lernhilfe genau dann, wenn der Schüler es braucht.

**Stufen-Auswahl:** Der Sequencer wählt die Stufe basierend auf dem Schüler-Profil:
- C1 + Vorerfahrung → Stufe 1 (Denkfrage)
- B2 + etwas Praxis → Stufe 2 (Hinweis)
- B1 + Anfänger → Stufe 3 (Erklärung + B1-Version + Glossar + TTS)

---

## Trigger-Tabelle (alle 18)

| # | Phase | Step-ID | Auslöser | Baustein-ID | Stufe |
|---|-------|---------|----------|-------------|-------|
| T-01 | 1 | `info-02-was-fehlt` | <4 Kategorien korrekt | `pflegeprozess-informationssammlung` | Sequencer wählt |
| T-02 | 1 | `info-03-validation-grundlage` | B1-Schüler-Profil | `basale-stimulation-kommunikation-demenz` | 3 |
| T-03 | 1 | `info-04-zimmer-betreten` | Option A oder C gewählt | `pflegeprozess-beziehungsgestaltung-demenz` | Sequencer wählt |
| T-04 | 1 | `info-05-demenzstadien` (Optional) | aktiviert | `basale-stimulation-konzept-herkunft` | 3 (B1) |
| T-05 | 2 | `beob-02-sturz-assessment` | <4 korrekt sortiert | `sturz-prophylaxe-sturz-assessment` | Sequencer wählt |
| T-06 | 2 | `beob-04-haut-trinkprotokoll` | <3 Textstellen markiert | `harnausscheidung-exsikkose` | 2–3 |
| T-07 | 2 | `beob-04-haut-trinkprotokoll` | Soor-Stelle nicht markiert | `mundpflege-soor` | 2 |
| T-08 | 2 | `beob-05-risiken-einordnen` | Kontraktur-Gruppe <50% | `kontraktur-prophylaxe-definition` | Sequencer wählt |
| T-09 | 2 | `beob-06-besd-skala` (Optional) | B1-Profil | `pflegeprozess-schmerzerfassung-demenz` | 3 |
| T-10 | 2 | `beob-07-kontraktur-neutral-null` (Optional) | aktiviert | `kontraktur-prophylaxe-funktionsstellung` | 2 |
| T-11 | 3 | `plan-01-ziele-formulieren` | Pflegeziel nicht messbar | `pflegeprozess-pflegeziele` | 2–3 |
| T-12 | 3 | `plan-02-sturzprophylaxe-massnahmen` | <3 korrekt gematcht | `sturz-prophylaxe-massnahmen-umgebung` | 2 |
| T-13 | 3 | `plan-04-interprofessionell` | <4 Karten korrekt | `pflegeprozess-interprofessionalitaet` | 2 |
| T-14 | 3 | `plan-06-freiheitsentziehung` (Optional) | falsche Antworten | `sturz-prophylaxe-rechtliche-grundlagen` | Sequencer wählt |
| T-15 | 4 | `dur-01-basale-vorbereitung` | B1/B2-Profil | `basale-stimulation-beruhigende-waschung` | 2–3 |
| T-16 | 4 | `dur-02-abwehr-komplikation` | Pfad A gewählt | `pflegeprozess-wuerde-selbstbestimmung` | 3 |
| T-17 | 4 | `dur-04-bewegungsuebungen` | <3 korrekt sortiert | `kontraktur-prophylaxe-passiv-aktivdurchbewegen` | 2–3 |
| T-18 | 4 | `dur-05-mundpflege` | Antwort C oder D | `mundpflege-soor-prophylaxe` | 2 |

---

## Zusatz-Trigger (Phase 5 + 6)

| # | Phase | Step-ID | Auslöser | Baustein-ID | Stufe |
|---|-------|---------|----------|-------------|-------|
| T-19 | 5 | `eval-02-angehoerigen-gespraech` | frühe Fehler im Dialog | `pflegeprozess-angehoerigenkommunikation` | 2–3 |
| T-20 | 5 | `eval-02-angehoerigen-gespraech` | B1-Profil | `pflegeprozess-beziehungsgestaltung-demenz` | 3 |
| T-21 | 6 | `dok-01-sturzprotokoll-frei` | <6 Kriterien erfüllt | `pflegeprozess-dokumentation-sturzprotokoll` | 2–3 |
| T-22 | 6 | `dok-03-miktionsprotokoll` | >2 Felder leer | `harnausscheidung-miktionsprotokoll` | 2 |

---

## Baustein-IDs vollständige Referenz

Alle referenzierten Bausteine existieren (oder werden erwartet) in diesen Themen-Ordnern:

| Baustein-ID | Thema | Datei |
|-------------|-------|-------|
| `pflegeprozess-informationssammlung` | pflegeprozess | `content/ce-02/themen/pflegeprozess/bausteine-plan.md` |
| `pflegeprozess-pflegeziele` | pflegeprozess | idem |
| `pflegeprozess-interprofessionalitaet` | pflegeprozess | idem |
| `pflegeprozess-angehoerigenkommunikation` | pflegeprozess | idem |
| `pflegeprozess-dokumentation-sturzprotokoll` | pflegeprozess | idem |
| `pflegeprozess-wuerde-selbstbestimmung` | pflegeprozess | idem |
| `pflegeprozess-beziehungsgestaltung-demenz` | pflegeprozess | idem |
| `pflegeprozess-schmerzerfassung-demenz` | pflegeprozess | idem |
| `pflegeprozess-patientenwillen-demenz` | pflegeprozess | idem |
| `sturz-prophylaxe-sturz-assessment` | sturz-prophylaxe | `content/ce-02/themen/sturz-prophylaxe/bausteine-plan.md` |
| `sturz-prophylaxe-massnahmen-umgebung` | sturz-prophylaxe | idem |
| `sturz-prophylaxe-rechtliche-grundlagen` | sturz-prophylaxe | idem |
| `sturz-prophylaxe-dokumentation` | sturz-prophylaxe | idem |
| `kontraktur-prophylaxe-definition` | kontraktur-prophylaxe | `content/ce-02/themen/kontraktur-prophylaxe/bausteine-plan.md` |
| `kontraktur-prophylaxe-funktionsstellung` | kontraktur-prophylaxe | idem |
| `kontraktur-prophylaxe-passiv-aktivdurchbewegen` | kontraktur-prophylaxe | idem |
| `basale-stimulation-konzept-herkunft` | basale-stimulation | `content/ce-02/themen/basale-stimulation/bausteine-plan.md` |
| `basale-stimulation-kommunikation-demenz` | basale-stimulation | idem |
| `basale-stimulation-beruhigende-waschung` | basale-stimulation | idem |
| `mundpflege-soor` | mundpflege | `content/ce-02/themen/mundpflege/bausteine-plan.md` |
| `mundpflege-soor-prophylaxe` | mundpflege | idem |
| `harnausscheidung-exsikkose` | harnausscheidung | `content/ce-02/themen/harnausscheidung/bausteine-plan.md` |
| `harnausscheidung-miktionsprotokoll` | harnausscheidung | idem |

---

## Sequencer-Verhalten

**Maximale Bausteine pro Phase:** 3 (Sequencer bricht ab wenn mehr als 3 Trigger in einer Phase ausgelöst werden würden — zeigt die 3 relevantesten)

**Priorität bei mehrfachen Triggern in einer Phase:**
1. K.O.-Bausteine (Sicherheit: freiheitsentziehende Maßnahmen, Schmerzsignale bei Demenz)
2. Bausteine für niedrigstes Profil (B1 hat Vorrang)
3. Bausteine die am häufigsten falsch beantwortet wurden (Schwachstellenoptimierung)

**Nie wiederholen:** Ein Baustein der in dieser Situation bereits gezeigt wurde, wird nicht erneut eingeblendet — außer in Phase 6 bei Summary/Karteikarten.
