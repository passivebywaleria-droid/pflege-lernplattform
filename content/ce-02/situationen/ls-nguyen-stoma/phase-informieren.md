# Phase 1 — Informieren

**situationId:** ls-nguyen-stoma
**Phase:** informieren (Phase 1 von 6)
**Zeit:** ~20–30 Min
**Bloom:** B2–B3
**Kern-Frage:** Was weiß ich über diesen Patienten, bevor ich sein Zimmer betrete?

---

## Kontext

Es ist 7:45 Uhr. Die Übergabe auf der chirurgischen Station ist gerade abgeschlossen. Frau Santos-Weber hat dich kurz zu Herrn Nguyen gebrieft — aber das war wenig. Du stehst jetzt vor der Pflegedokumentation am Computer und hast 10 Minuten, bevor du das Zimmer betrittst.

Herr Nguyen ist 72 Jahre alt. Vier Tage nach der Sigmaresektion bei Kolonkarzinom. Ein endständiges Kolostoma — das heißt: der Dickdarm wird dauerhaft über die Bauchdecke ausgeleitet. Das Stoma ist kein Übergangszustand. Es ist sein neues Körperbild.

Was erwartet dich? Die Tochter ist schon da. Die Ehefrau vermutlich auch. Der Beutel muss gewechselt werden. Und Herr Nguyen hat gestern kaum gegessen.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 1.1 | `info-01-uebergabe-lesen` | **text** (displayFormat: `scenario`) | B2 | Szene: Du öffnest die digitale Pflegeakte. Die Übergabe der Nachtschicht erscheint als strukturierter SBAR-Text: **S** = Herr Nguyen, 72 J., 4. Tag post-OP Sigmaresektion, Kolostoma. **B** = Mangelernährung BMI 19, Braden 14, Heparin-Prophylaxe läuft, Mobilisation gestern erstmals an Bettkante. **A** = Stoma aktiv (dünnflüssig, gelblich-braun), Beutel halb voll, gestern Abend nicht gewechselt. Bauchdeckenwunde leicht gerötet. Kaum Nahrungs-Intake. **R** = Beutelwechsel heute Morgen notwendig, Ernährungsstatus evaluieren, erste Mobilisationsübung geplant. Tochter Linh anwesend, Ehefrau Mai heute früh angereist. | pflege |
| 1.2 | `info-02-diagnose-einordnen` | **mc** (Single-Choice) | B3 | _"Was bedeutet 'endständiges Kolostoma' im Vergleich zu einem vorübergehenden Stoma?"_ A) Das Stoma wird in 6 Monaten rückverlegt. B) Das Stoma ist dauerhaft — der Dickdarm wird dauerhaft über die Bauchdecke ausgeleitet, eine Rückverlage ist nicht geplant. C) Das Stoma sitzt im Dünndarm (Ileostoma). D) Das Stoma funktioniert noch nicht, erst ab Tag 7. **Richtig: B.** Bloom 3 — Verstehen und einordnen. Falsch-Feedback bei A adressiert Verwechslung mit doppelläufigem Stoma. **Trigger für Baustein `stuhlausscheidung-stoma-arten` bei Wahl A oder C.** | krankheitslehre |
| 1.3 | `info-03-5-probleme-sehen` | **categorize** | B3 | Kategorisierung: Vor dir liegt eine Liste von Informationen über Herrn Nguyen. Ordne sie 5 Pflege-Problembereichen zu: [Stoma-Versorgung / Ernährung & Gewicht / Dekubitus-Prophylaxe / Thrombose-Prophylaxe / Psychosoziales & Kulturell]. Karten: "BMI 19, Albumin 28 g/l" → Ernährung. "Braden 14, wenig Unterhautfettgewebe" → Dekubitus. "Heparin läuft, 4. Tag Bettruhe mit Auflockerung" → Thrombose. "Stoma aktiv, Beutel halb voll, Wunde gerötet" → Stoma. "Verweigert Blickkontakt beim Beutelwechsel, Tochter übersetzt" → Psychosoziales. | pflege |
| 1.4 | `info-04-vorbereitung` | **sequencing** | B3 | Sequenz: Was bereitest du vor, bevor du das Zimmer betrittst? Ordne in die richtige Reihenfolge: [Beutelwechsel-Utensilien bereitlegen] → [Ernährungsprotokoll der letzten 24h anschauen] → [kurz überlegen, wie du Herrn Nguyen begrüßt (Dolmetscher-Situation)] → [informieren ob Stomatherapeut heute kommt] → [Intimpflege-Set bereitstellen für Ganzkörperpflege]. Bloom 3 — Anwenden: strukturierte Vorbereitung. | pflege |
| 1.5 | `info-05-dolmetscher-frage` | **truefalse** (Mehrfach) | B3 | Aussagen zur Dolmetscher-Situation mit Angehörigen. 1) "Die Tochter als Übersetzerin ist die ideale Lösung, weil sie den Vater kennt." (falsch — Rollenkonflikt, Filterung möglich, Datenschutz) 2) "Professionelle Dolmetscherdienste wären die Norm, sind aber nicht immer kurzfristig verfügbar." (wahr) 3) "Ich spreche ausschließlich mit der Tochter, weil Herr Nguyen kein Deutsch kann." (falsch — Augenkontakt und Ansprache bleiben beim Patienten, auch wenn Tochter übersetzt) 4) "Beim Beutelwechsel kann die Tochter helfen, indem sie erklärt, was ich tue." (wahr — mit Einverständnis von Herrn Nguyen). | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 1.opt-1 | `info-opt-kolostoma-anatomie` | **text** (displayFormat: `analogy`) | B2 | B1-Schüler/innen | Kurze Anatomie-Erklärung: Was ist das Sigma und wo sitzt es? Analogie: "Das Sigma ist der letzte Teil des Dickdarms — wie das letzte Stück Rohr, bevor der Abfluss kommt. Wenn dort ein Tumor wächst, wird dieser Teil entfernt." Mit einfacher Körpersilhouette (Bildbeschreibung). |
| 1.opt-2 | `info-opt-braden-einlesen` | **flipcard** | B2 | Mittlere + B1 | Braden-Skala kurz: Was bedeutet Braden 14? Karte Vorderseite: "Braden-Skala: 14 Punkte — was ist das?" Rückseite: "Maximalpunktzahl = 23 (kein Risiko). Unter 18 = Risiko. 14 = geringe bis moderate Gefährdung. Herr Nguyen: wenig Unterhautfettgewebe, post-OP-Schmerz limitiert Bewegung — Risikofaktoren beachten." |
| 1.opt-3 | `info-opt-heparin-ort` | **mc** | B2 | Alle | "Heparin-Injektionen zur Thromboseprophylaxe werden standardmäßig wo gegeben?" A) Oberschenkel innen B) Bauchnabelnah, 2-3 cm Abstand C) Oberarm D) Gluteus. **Richtig: B.** Injektionsort + Abstand zum Nabel + frischer OP-Bauchdecke beachten. |

---

## Phase-1-Abschluss

_Zwischenseite:_ "Du kennst Herrn Nguyen jetzt auf dem Papier. Fünf Problembereiche gleichzeitig. Ein Mann, der Würde über alles stellt. Eine Tochter, die übersetzt und schützt. Eine Ehefrau, die zuhause das Stoma versorgen wird. Jetzt betrittst du das Zimmer."

---

## Baustein-Trigger Phase 1

| Trigger | Step | Bedingung | Baustein-ID | Didaktischer Zweck |
|---------|------|-----------|-------------|-------------------|
| T-01 | 1.2 | Antwort A oder C gewählt | `stuhlausscheidung-stoma-arten` | Stoma-Typen unterscheiden: endständig vs. doppelläufig, Kolostoma vs. Ileostoma |
| T-02 | 1.3 | < 3 von 5 Karten richtig zugeordnet | `pflegeplanung-priorisierung` | Priorisierung bei mehreren Pflegeproblemen gleichzeitig |

---

## Diversity-Check Phase 1

- Step-Typen: text (scenario), mc, categorize, sequencing, truefalse → 5 verschiedene ✓
- Keine 2× dasselbe hintereinander ✓
- Min 1 interaktiv (categorize, sequencing) ✓
- Min 1 visuell (flipcard in optional) ✓
- Tags: 3× pflege, 1× krankheitslehre ✓
