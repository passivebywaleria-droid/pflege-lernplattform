# Wissensbausteine: Impfungen und Infektionsschutz

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `impfungen-infektionsschutz` |
| ceId | `ce-04` |
| cluster | A |
| wissensart | konzept |
| geschaetzteUE | 12 |
| zielzeitMin | 297 (12 UE × 45 × 0,55) |
| bausteineAnzahl | 11 |
| voraussetzungen | `gesundheitsmodelle` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 |

**Bloom-Verteilung:** Bloom 1-2: 27%, Bloom 3-4: 55%, Bloom 5-6: 18%

**Primärquellen:**
- STIKO (aktuell 2024/2025): Impfempfehlungen, Robert Koch-Institut
- Infektionsschutzgesetz (IfSG), § 20a (Masern-Impfpflicht seit 2020)
- WHO: Immunisations-Empfehlungen
- Paul-Ehrlich-Institut (PEI): Impfstoff-Zulassung Deutschland
- § 60 IfSG (Impfschaden)
- Gemeinsamer Bundesausschuss (G-BA): Schutzimpfungs-Richtlinie

---

## Baustein 1: aktive-vs-passive-immunisierung

### Metadaten
- **bausteinId:** impfungen-aktiv-passiv
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Nach einem Hundebiss bekommt ein Patient eine Spritze gegen Tetanus. Am gleichen Tag noch eine andere Spritze. Was ist der Unterschied?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Aktive Immunisierung**: Impfstoff mit **abgeschwächten/abgetöteten Erregern** oder Teilen davon → Körper bildet **selbst Antikörper**. Langer Schutz (Jahre). **Passive Immunisierung**: Fertige **Antikörper** werden zugeführt → sofortiger Schutz, aber kurz (Wochen)."

**B1 (230 Zeichen):** "**Aktive Impfung**: Der Körper bekommt **Teile des Erregers** und bildet **selbst Abwehr** (Antikörper). Schutz: Jahre. **Passive Impfung**: Man gibt fertige **Antikörper** direkt. Schutz: sofort, aber nur Wochen."

- **Step-Typ:** comparison (Tabelle: aktiv vs. passiv)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Es gibt zwei grundsätzlich verschiedene Wege, gegen Infektionen zu schützen:

**1. Aktive Immunisierung (Impfung im engeren Sinn)**
- **Prinzip**: Der Körper bekommt einen **Impfstoff** mit abgeschwächten/abgetöteten Erregern oder deren Bestandteilen (Antigene, mRNA bei Corona)
- **Immunsystem reagiert**: bildet Antikörper + Gedächtniszellen
- **Zeitlicher Schutz**: Aufbau in 2-4 Wochen, Dauer: Jahre bis lebenslang
- **Beispiele**: Masern, Tetanus, Hepatitis B, Influenza, COVID-19

**2. Passive Immunisierung**
- **Prinzip**: Fertige **Antikörper** werden verabreicht (z.B. Tetanus-Immunglobulin)
- **Immunsystem reagiert NICHT selbst**
- **Zeitlicher Schutz**: sofort wirksam, aber **nur wenige Wochen** (Antikörper werden abgebaut)
- **Einsatz**: **Notfall-Situationen** (Hundebiss + unsicherer Impfstatus, Exposition gegen Hepatitis B, Tollwut)
- **Natürliche passive Immunisierung**: Baby erhält Antikörper über die Plazenta und Muttermilch ('Nestschutz')

**3. Simultanimpfung**: Kombination aktiv + passiv — sofort Schutz (passiv) PLUS langfristig Aufbau (aktiv). Z.B. nach Hundebiss: Tetanus-Impfstoff + Tetanus-Immunglobulin. (RKI, STIKO)"

**B1 (615 Zeichen):**
"Es gibt **2 Wege**, gegen Krankheiten zu schützen:

**1. Aktive Impfung** (normale Impfung)
- **So funktioniert es**: Der Körper bekommt Teile vom Erreger (abgeschwächt oder kaputt)
- **Der Körper**: Bildet **selbst Abwehrstoffe** (Antikörper + Gedächtniszellen)
- **Zeit**: Aufbau dauert 2-4 Wochen. Schutz: Jahre bis Leben lang
- **Beispiele**: Masern, Tetanus, Hepatitis B, Grippe, COVID-19

**2. Passive Impfung**
- **So funktioniert es**: Man gibt **fertige Antikörper** (kein Erreger)
- **Der Körper**: Macht **nichts selbst**
- **Zeit**: Sofort da — aber nur **Wochen** lang
- **Wann?** Im **Notfall** (z.B. nach Hundebiss ohne bekannten Impfschutz, nach Kontakt mit Hepatitis B)
- **Natürlich passiv**: Baby bekommt Antikörper von der Mutter über die Plazenta und Muttermilch ('Nestschutz')

**3. Simultanimpfung**: Beides gleichzeitig — sofort Schutz (passiv) PLUS Aufbau (aktiv). Zum Beispiel nach Hundebiss: Tetanus-Spritze + Tetanus-Antikörper."

- **Erklärungs-Step:** stepType `comparison` (Zweispaltig + Beispiele)
- **Glossar-Begriffe:** [aktive Immunisierung, passive Immunisierung, Antigen, Antikörper, Immunglobulin, Simultanimpfung, Nestschutz]

### Misconceptions → Distraktoren

**D1: "Bei passiver Immunisierung bildet der Körper auch Gedächtniszellen"**
- **Fachbegriff:** Passiv-Aktiv-Verwechslung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — bei passiver Immunisierung werden **nur fertige Antikörper** verabreicht. Der Körper lernt **nichts**, bildet **keine Gedächtniszellen**. Darum wirkt es nur Wochen. Bei erneuter Exposition: kein Schutz mehr. Aktiver Aufbau fehlt. Merke: Passiv = kein Lernen = kein Dauerhaftigkeit."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — bei passiver Impfung bekommt man nur **fertige Antikörper**. Der Körper **lernt nichts** und bildet **keine Gedächtniszellen**. Deswegen hält der Schutz nur Wochen. Aktive Impfung ist anders — da lernt der Körper. Merke: Passiv = kein Lernen."

**D2: "Aktive Impfung hilft sofort"**
- **Fachbegriff:** Wirkungszeit-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — aktive Impfungen brauchen **2-4 Wochen** für den Aufbau des Schutzes. Der Körper muss erst Antikörper bilden. Deswegen: Bei akuter Exposition (z.B. Hundebiss) wird oft **zusätzlich passiv** geimpft (Simultanimpfung). Merke: Aktiv = Aufbau, braucht Zeit."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — aktive Impfung braucht **2-4 Wochen**. Der Körper muss selbst Abwehr bauen. Bei einem Notfall (zum Beispiel Hundebiss) gibt man **auch passiv** dazu — das hilft sofort. Das nennt man Simultanimpfung. Merke: Aktiv = Zeit brauchen."

**D3: "Der Nestschutz ist aktive Immunisierung"**
- **Fachbegriff:** Nestschutz-Zuordnung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — der **Nestschutz** ist **passive Immunisierung** (natürlich). Das Baby bekommt die Antikörper **fertig** über Plazenta (vor Geburt) und Muttermilch (nach Geburt). Es bildet sie nicht selbst. Deswegen hält er auch nur **Monate**. Aktive Immunisierung startet mit den ersten Impfungen. Merke: Nestschutz = passiv."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Nestschutz** ist **passive** Immunisierung. Das Baby bekommt **fertige** Antikörper von der Mutter (vor Geburt und durch Muttermilch). Es bildet sie nicht selbst. Deswegen hält es nur Monate. Merke: Nestschutz kommt von der Mutter = passiv."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Aktiv: Körper bekommt Antigene, bildet selbst Antikörper + Gedächtniszellen, Schutz Jahre bis lebenslang. Passiv: fertige Antikörper, sofort wirksam, aber nur Wochen, keine Gedächtniszellen. Simultan: Kombination für Notfall. Nestschutz: natürlich passiv (Plazenta, Muttermilch)."

**B1 (245 Zeichen):** "Sehr gut. Aktiv: Körper lernt, baut selbst Abwehr. Lang wirksam. Passiv: Fertige Antikörper, sofort da, aber nur Wochen. Simultan: beides zusammen für Notfälle. Nestschutz: Baby bekommt Antikörper von der Mutter — natürlich passiv."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen aktiver und passiver Immunisierung?"
- **Rückseite:** "Aktiv: Antigene → Körper bildet selbst Antikörper + Gedächtniszellen (Schutz Jahre). Passiv: fertige Antikörper werden verabreicht (Sofort-Schutz, aber nur Wochen)."
- **Kategorie:** fachbegriff

---

## Baustein 2: stiko-empfehlungen-uebersicht

### Metadaten
- **bausteinId:** impfungen-stiko
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wer bestimmt in Deutschland, welche Impfungen empfohlen werden? Weißt du den Namen der Kommission?"
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die **STIKO (Ständige Impfkommission)** beim **Robert Koch-Institut** erarbeitet jährlich die Impfempfehlungen. Der **Gemeinsame Bundesausschuss (G-BA)** erklärt sie zur Regelleistung der GKV. Update: meist **Januar** jeden Jahres — Epidemiologisches Bulletin."

**B1 (225 Zeichen):** "Die **STIKO** (Ständige Impfkommission) beim **Robert Koch-Institut** macht in Deutschland die Impfempfehlungen. Jedes Jahr neu (meist im Januar). Der **G-BA** (Gemeinsamer Bundesausschuss) entscheidet: Krankenkasse zahlt es."

- **Step-Typ:** text (displayFormat: news — STIKO aktuell)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die **STIKO (Ständige Impfkommission)** ist beim **Robert Koch-Institut (RKI)** angesiedelt. Sie besteht aus 12-18 unabhängigen Expertinnen und Experten (Ärzte, Epidemiologen, Gesundheits-Ökonomen).

**Aufgaben:**
- Empfehlungen zu Schutzimpfungen
- Bewertung epidemiologischer Daten
- Aktualisierung der Impfkalender

**Veröffentlichungsweg:**
- Jährliches Update im **Epidemiologischen Bulletin** des RKI (meist Januar)
- **STIKO-Empfehlungen** sind Grundlage für die **Schutzimpfungs-Richtlinie** des G-BA (seit 2007 bundesweit einheitlich)

**Kategorien der STIKO-Empfehlungen:**
- **Standardimpfungen** (Kinder/Jugendliche/Erwachsene): Impfkalender
- **Indikationsimpfungen**: bei bestimmten Risiken (z.B. Pneumokokken bei chronisch Kranken)
- **Berufliche Impfungen**: Pflegepersonal (Hepatitis B, MMR, Influenza, Varizellen, Pertussis)
- **Reiseimpfungen**: Gelbfieber, Tollwut, Meningokokken ACWY, Typhus
- **Postexpositions-Impfungen**: nach Kontakt (z.B. Tetanus nach Verletzung)

**Bindungskraft:**
- STIKO-Empfehlungen sind **keine gesetzliche Pflicht** (mit Ausnahme § 20a IfSG: Masern in bestimmten Berufen)
- Aber: G-BA-umgesetzte STIKO-Empfehlungen = **Regelleistung** der GKV. (RKI/STIKO 2024)"

**B1 (625 Zeichen):**
"Die **STIKO** (Ständige Impfkommission) ist beim **Robert Koch-Institut (RKI)**. Hier arbeiten 12-18 unabhängige Expertinnen und Experten (Ärzte, Epidemiologen).

**Was macht die STIKO?**
- Gibt Empfehlungen zu Impfungen
- Wertet Daten aus
- Aktualisiert den Impfkalender jedes Jahr

**Wo erscheint es?**
- Einmal im Jahr im **Epidemiologischen Bulletin** des RKI (meist Januar)
- Der **G-BA** (Gemeinsamer Bundesausschuss) macht daraus die **Schutzimpfungs-Richtlinie** — dann zahlt die Krankenkasse

**Arten von STIKO-Empfehlungen:**
- **Standard-Impfungen** für Kinder, Jugendliche, Erwachsene (Impfkalender)
- **Indikations-Impfungen** für Risikogruppen (zum Beispiel Pneumokokken bei chronisch Kranken)
- **Berufliche Impfungen** für Pflegepersonal: Hepatitis B, MMR, Grippe, Varizellen, Pertussis
- **Reise-Impfungen**: Gelbfieber, Tollwut
- **Nach Kontakt**: zum Beispiel Tetanus nach Verletzung

**Muss man STIKO-Empfehlungen befolgen?**
- **Nicht Pflicht** (außer § 20a IfSG: Masern in Pflege)
- Aber: G-BA setzt sie um — dann bezahlt die Krankenkasse."

- **Erklärungs-Step:** stepType `reveal` (Kategorien)
- **Glossar-Begriffe:** [STIKO, RKI, G-BA, Schutzimpfungs-Richtlinie, Epidemiologisches Bulletin, Indikationsimpfung]

### Misconceptions → Distraktoren

**D1: "STIKO-Empfehlungen sind eine gesetzliche Pflicht — alle müssen sich danach impfen"**
- **Fachbegriff:** Pflicht-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **STIKO ist keine Pflicht**, sondern eine **Empfehlung**. Ausnahme: § 20a IfSG (Masern-Impfpflicht in Pflege, Krankenhaus, Kita, Schule). Alle anderen Impfungen sind **freiwillig**. Aber: Wenn STIKO empfiehlt und G-BA umsetzt, zahlt die GKV. Merke: Empfehlung, nicht Pflicht."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — STIKO gibt nur **Empfehlungen**, keine Pflicht. Ausnahme: § 20a IfSG (Masern in Pflege, Krankenhaus, Kita, Schule — das ist Pflicht). Alle anderen Impfungen sind **freiwillig**. Aber: Wenn STIKO empfiehlt, zahlt die Krankenkasse. Merke: Empfehlung."

**D2: "Pflegekräfte brauchen keine speziellen Berufsimpfungen"**
- **Fachbegriff:** Berufsimpfungs-Unterschätzung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — die STIKO empfiehlt **berufliche Impfungen** für Pflegepersonal: **Hepatitis B**, **MMR (Masern-Mumps-Röteln)**, **Influenza** (jährlich!), **Varizellen** (Windpocken), **Pertussis** (Keuchhusten). Begründung: Schutz von Pflegekraft UND Patienten. Arbeitgeber prüft Impfstatus. Merke: Beruflich explizit empfohlen."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die STIKO empfiehlt für **Pflegekräfte extra** diese Impfungen: **Hepatitis B**, **MMR**, **Grippe** (jedes Jahr!), **Windpocken**, **Keuchhusten**. Warum? Schutz für dich UND die Patienten. Der Arbeitgeber prüft das. Merke: Berufsimpfungen sind wichtig."

**D3: "Die STIKO wird vom Bundestag eingesetzt und bestimmt"**
- **Fachbegriff:** Politik-Zuordnung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die STIKO ist eine **unabhängige** Kommission am **Robert Koch-Institut**. Ihre Mitglieder werden auf Vorschlag des Bundesgesundheitsministeriums berufen, aber arbeiten fachlich unabhängig. Die STIKO ist kein Politik-Organ. Merke: Wissenschaftlich unabhängig."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die STIKO ist **unabhängig** von der Politik. Sie ist am Robert Koch-Institut. Die Mitglieder werden zwar vom Ministerium vorgeschlagen, aber sie arbeiten **wissenschaftlich unabhängig**. Merke: Nicht politisch — wissenschaftlich."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. STIKO beim RKI erarbeitet Impfempfehlungen (jährlich Januar im Epidemiologischen Bulletin). G-BA setzt sie als GKV-Regelleistung um. Kategorien: Standard-, Indikations-, beruflich, Reise-, Postexpositions-Impfungen. Empfehlung, keine Pflicht (Ausnahme § 20a IfSG: Masern in Pflege)."

**B1 (245 Zeichen):** "Sehr gut. STIKO beim RKI macht die Impfempfehlungen (jährlich Januar). Der G-BA entscheidet: Krankenkasse zahlt. Arten: Standard, Indikation, Beruf, Reise, Nach Kontakt. Meistens **Empfehlung** (Ausnahme § 20a IfSG: Masern in Pflege = Pflicht)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wo werden die aktuellen STIKO-Impfempfehlungen veröffentlicht?"
- **Rückseite:** "Im Epidemiologischen Bulletin des Robert Koch-Instituts, meist im Januar jedes Jahres. Online unter rki.de/STIKO."
- **Kategorie:** fakt

---

## Baustein 3: impfkalender-kinder

### Metadaten
- **bausteinId:** impfungen-kalender-kinder
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Neugeborenes — welche Impfungen bekommt es im ersten Lebensjahr? Welche im Kindergarten-Alter?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Impfkalender STIKO (Kinder): **6 Wochen** Rotavirus; **2, 4, 11 Monate** 6-fach-Impfung (Diphtherie, Tetanus, Pertussis, Hib, Polio, Hep B) + Pneumokokken; **11-14 Monate** MMR 1. Dosis + Varizellen; **15-23 Monate** MMR 2. Dosis; **5-6 Jahre** Auffrischung."

**B1 (230 Zeichen):** "Impfkalender für Kinder: **6 Wochen** Rotavirus. **2-11 Monate** 6-fach-Impfung (Diphtherie, Tetanus, Pertussis, Hib, Polio, Hepatitis B) + Pneumokokken. **11-14 Monate** MMR + Windpocken. **15-23 Monate** MMR 2. Dose. **5-6 Jahre** Auffrischung."

- **Step-Typ:** timeline (Impfkalender)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Der **Impfkalender STIKO** (Stand 2024) — Kern-Impfungen Kinder/Jugendliche:

**Säuglingsalter (0-12 Monate):**
- **6 Wochen**: Rotavirus (1. Dosis, Schluckimpfung)
- **2 Monate**: 6-fach-Impfung (Diphtherie, Tetanus, Pertussis/Keuchhusten, Hib, Polio, Hepatitis B) + Pneumokokken + Rotavirus (2.)
- **4 Monate**: wie oben (2. Dosis)
- **11 Monate**: Abschluss 6-fach + Pneumokokken (3. Dosis)

**Kleinkindalter (12-23 Monate):**
- **11-14 Monate**: **MMR** (Masern-Mumps-Röteln, 1. Dosis) + **Varizellen** (Windpocken) + Meningokokken C
- **15-23 Monate**: MMR (2. Dosis) + Varizellen (2.)

**Vorschulalter (5-6 Jahre):**
- **Auffrischung**: Diphtherie, Tetanus, Pertussis (Tdap)

**Schulalter (9-17 Jahre):**
- **9-16 Jahre**: HPV (Humane Papillomaviren) — beide Geschlechter!
- **12-17 Jahre**: Meningokokken B (Entscheidung individuell)
- **15-17 Jahre**: Auffrischung Tdap/Polio

**Wichtig:**
- **Impfabstände einhalten** (STIKO-Impfabstands-Tabelle)
- **Verpasste Impfungen nachholen** — es gibt keinen 'zu späten' Zeitpunkt
- **Kontraindikationen prüfen**: akuter fieberhafter Infekt, schwere Allergie, Schwangerschaft (bei Lebendimpfstoffen)

(RKI/STIKO 2024, Epidemiologisches Bulletin)"

**B1 (670 Zeichen):**
"**Impfkalender der STIKO** (Stand 2024) — die wichtigsten Impfungen für Kinder:

**Erstes Lebensjahr (0-12 Monate):**
- **6 Wochen**: Rotavirus (Schluckimpfung)
- **2 Monate**: **6-fach-Impfung** (Diphtherie, Tetanus, Keuchhusten, Hib, Polio, Hepatitis B) + Pneumokokken + Rotavirus (2.)
- **4 Monate**: das Gleiche (2. Dosis)
- **11 Monate**: Abschluss 6-fach + Pneumokokken (3. Dosis)

**Kleinkind (12-23 Monate):**
- **11-14 Monate**: **MMR** (Masern-Mumps-Röteln, 1. Dosis) + **Windpocken** + Meningokokken C
- **15-23 Monate**: MMR (2. Dosis) + Windpocken (2.)

**Vor der Schule (5-6 Jahre):**
- **Auffrischung**: Diphtherie, Tetanus, Keuchhusten

**Schule (9-17 Jahre):**
- **9-16 Jahre**: HPV (gegen Gebärmutterhalskrebs und andere Tumoren — für **Mädchen UND Jungen**!)
- **12-17 Jahre**: Meningokokken B (individuell)
- **15-17 Jahre**: Auffrischung Tetanus/Diphtherie/Keuchhusten/Polio

**Wichtig:**
- Abstände einhalten
- Verpasste Impfungen **nachholen** — nie zu spät
- Wann nicht impfen? Bei Fieber, schwerer Allergie, Schwangerschaft (bei Lebendimpfstoffen)"

- **Erklärungs-Step:** stepType `timeline` (Kalender visuell)
- **Glossar-Begriffe:** [Impfkalender, 6-fach-Impfung, MMR, Hib, Pertussis, HPV, Lebendimpfstoff, Totimpfstoff]

### Misconceptions → Distraktoren

**D1: "HPV-Impfung ist nur für Mädchen"**
- **Fachbegriff:** HPV-Gender-Fehler
- **Feedback (C1, 310 Zeichen):** "Nicht mehr aktuell — seit **2018** empfiehlt die STIKO HPV für **alle Geschlechter** (9-16 Jahre). Grund: HPV verursacht nicht nur Gebärmutterhals-, sondern auch Anal-, Rachen-, Penis-Krebs. Und: Männer übertragen HPV. Beidseitige Impfung erhöht die Herdenimmunität. Merke: HPV für alle."
- **Feedback (B1, 275 Zeichen):** "Nicht mehr richtig — seit **2018** empfiehlt die STIKO HPV für **alle** (Mädchen UND Jungen, 9-16 Jahre). Grund: HPV macht auch bei Männern Krebs (Hals, After, Penis). Und: Männer übertragen HPV. Wenn alle geimpft sind, schützt das die ganze Gesellschaft. Merke: HPV für alle."

**D2: "Verpasste Impfungen kann man nicht mehr nachholen"**
- **Fachbegriff:** Nachhol-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **jede verpasste Impfung kann nachgeholt werden**. Die STIKO hat explizite **Nachhol-Tabellen**. Bei Kindern: Mindestabstände beachten, aber alle Grund-Immunisierungen möglich. Bei Erwachsenen: Tetanus alle 10 Jahre auffrischen, MMR bei nach 1970 Geborenen prüfen. Merke: Nie zu spät."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — man kann **jede Impfung nachholen**. Die STIKO hat dafür eigene Tabellen. Bei Kindern: Die Abstände müssen stimmen, aber alles geht. Bei Erwachsenen: Tetanus alle 10 Jahre auffrischen. MMR prüfen, wenn nach 1970 geboren. Merke: Nie zu spät."

**D3: "Die 6-fach-Impfung ist zu viel für ein kleines Kind"**
- **Fachbegriff:** Belastungs-Mythos
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — das Immunsystem eines Säuglings **verkraftet mehrere Antigene gleichzeitig**. Täglich begegnet das Kind in der Umwelt **Millionen von Antigenen**. Die 6-fach-Impfung mit wenigen Antigenen ist ein **Bruchteil** davon. Kombinationen reduzieren die Anzahl der Spritzen und Klinikbesuche. Merke: Wissenschaftlich sicher."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — das Immunsystem eines Babys **schafft mehrere Impfungen zusammen**. Jeden Tag trifft das Kind **Millionen** von Erregern in der Umwelt. Die 6-fach-Impfung ist **viel weniger**. Kombinations-Impfungen sind besser: weniger Spritzen, weniger Arztbesuche. Merke: Sicher und besser."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Impfkalender STIKO: Säuglingsalter (6 Wochen bis 11 Monate): 6-fach + Pneumokokken + Rotavirus. Kleinkind (11-23 Monate): MMR + Varizellen + Meningokokken C. Vorschule (5-6 J): Auffrischung Tdap. Schule (9-17 J): HPV (alle!), Meningokokken B, Tdap/Polio. Nachholen jederzeit möglich."

**B1 (255 Zeichen):** "Sehr gut. Impfkalender: Säugling (6 Wochen-11 Monate): 6-fach + Pneumokokken + Rotavirus. Kleinkind (11-23 Monate): MMR + Windpocken + Meningokokken C. Vorschule (5-6 J): Auffrischung. Schule (9-17 J): HPV (alle!), Meningokokken B, Tetanus/Polio. Nachholen immer möglich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Komponenten sind in der 6-fach-Impfung enthalten?"
- **Rückseite:** "Diphtherie, Tetanus, Pertussis (Keuchhusten), Hib (Haemophilus influenzae Typ b), Polio, Hepatitis B."
- **Kategorie:** fakt

---

## Baustein 4: masern-impfpflicht-20a

### Metadaten
- **bausteinId:** impfungen-masern-20a
- **bloomLevel:** 3
- **wissensart:** recht
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Du beginnst deine Pflegeausbildung. Dein neuer Arbeitgeber fragt nach deinem Masern-Impfschutz. Warum? Was passiert, wenn du nicht geimpft bist?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Seit **1. März 2020** (Bestand ab **15. März 2022**): **Einrichtungsbezogene Masern-Impfpflicht** (§ 20a IfSG). Gilt für: **Pflege-, Kranken-, Reha-Einrichtungen, Kitas, Schulen, Asylunterkünfte**. Nachweis: 2 Impfungen, Titer, oder durchgemacht."

**B1 (230 Zeichen):** "Seit **1. März 2020** (für alle ab **15. März 2022**): **Masern-Impfpflicht** für bestimmte Berufe (§ 20a IfSG). Gilt in: **Pflege, Krankenhaus, Kita, Schule, Asylunterkunft**. Nachweis: 2× geimpft, Bluttest, oder Krankheit gehabt."

- **Step-Typ:** text (displayFormat: news — Gesetz als Nachricht)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Die **einrichtungsbezogene Masern-Impfpflicht** wurde durch das **Masernschutzgesetz** (15. Februar 2020) eingeführt und ist in **§ 20a IfSG** geregelt. Sie gilt seit **1. März 2020** für alle neu Beginnenden und seit **15. März 2022** auch für den **Bestand**.

**Wer ist betroffen?**
- **Pflegepersonal** in Pflegeeinrichtungen und Pflegediensten
- **Gesundheitspersonal** in Krankenhäusern und Praxen (inkl. Auszubildende)
- **Kita-Personal**, **Schulpersonal**, **Tagespflege**
- **Asylunterkünfte, Obdachlosenheime**
- Kinder ab 1 Jahr in Kita und Schule

**Wie wird der Nachweis erbracht?**
1. **Impfausweis mit 2 MMR-Impfungen** (seit Geburtsjahr 1971)
2. **Antikörper-Titer** (Labor-Bluttest)
3. **Ärztliches Zeugnis** einer durchgemachten Masern-Erkrankung
4. **Kontraindikations-Bescheinigung** (z.B. Schwangerschaft, starke Immunschwäche)

**Konsequenzen bei fehlendem Nachweis:**
- **Neue Beschäftigte**: **Tätigkeits-Verbot** (darf nicht anfangen)
- **Bestand**: Meldung ans Gesundheitsamt → kann **Betretungs- oder Tätigkeits-Verbot** aussprechen
- **Bußgeld** bis 2.500 € für Arbeitgeber bei Nicht-Prüfung

**Hintergrund**: Masern sind **hochansteckend** (Herdenimmunität-Schwelle 95%), können bei ungeimpften Erwachsenen schwer verlaufen (Enzephalitis-Risiko 1:1000). Pflege-/Gesundheitspersonal hat enge Kontakte zu Risikogruppen (Säuglinge, Immungeschwächte)."

**B1 (640 Zeichen):**
"Die **Masern-Impfpflicht** kam durch das **Masernschutzgesetz** (2020). Sie steht in **§ 20a IfSG**. Seit **1. März 2020** gilt sie für neue Mitarbeiter. Seit **15. März 2022** für **alle** (Bestand).

**Wer muss geimpft sein?**
- **Pflegepersonal** (Pflegeheim, Pflegedienst)
- **Gesundheitspersonal** (Krankenhaus, Praxis, Auszubildende)
- **Kita-, Schulpersonal**
- **Asylunterkünfte**
- **Kinder** ab 1 Jahr in Kita und Schule

**Wie zeigt man den Impfschutz?**
1. **Impfpass** mit **2× MMR**-Impfung (seit Geburtsjahr 1971)
2. **Bluttest** (Antikörper-Titer)
3. **Arzt-Zeugnis** — ich hatte Masern
4. **Kontraindikations-Bescheinigung** (zum Beispiel Schwangerschaft, Immunschwäche)

**Was passiert ohne Nachweis?**
- **Neue Mitarbeiter**: **Arbeits-Verbot** (darf nicht anfangen)
- **Bestand**: Gesundheitsamt wird informiert → kann **Arbeits-Verbot** aussprechen
- **Strafe** bis 2.500 € für den Arbeitgeber, wenn er nicht prüft

**Warum das alles?** Masern sind **sehr ansteckend** (Herdenimmunität braucht 95%). Bei Erwachsenen können sie **schwer verlaufen** (Hirnhautentzündung 1 von 1000 Fällen). Pflege hat Kontakt zu Risikogruppen (Babys, Immungeschwächte)."

- **Erklärungs-Step:** stepType `reveal` (Betroffene + Nachweise + Konsequenzen)
- **Glossar-Begriffe:** [§ 20a IfSG, Masernschutzgesetz, Herdenimmunität, Titer, MMR, Kontraindikation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Masern-Impfpflicht gilt nur für Neueinstellungen"**
- **Fachbegriff:** Bestandsschutz-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — seit **15. März 2022** gilt sie auch für den **Bestand** (alle bereits Beschäftigten). Das war die ursprüngliche Übergangsfrist. Heute müssen **alle** in den betroffenen Einrichtungen den Nachweis haben. Merke: Nicht nur neue, sondern alle."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — seit **15. März 2022** müssen **alle** den Nachweis haben — auch die, die schon lange arbeiten. Das war die Übergangsfrist. Heute müssen **alle** in Pflege, Krankenhaus, Kita, Schule geimpft sein (oder Nachweis haben). Merke: Alle, nicht nur neue."

**D2: "Eine einzige Masern-Impfung reicht als Nachweis"**
- **Fachbegriff:** Impfdosis-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — seit Geburtsjahr **1971** sind **2 Dosen MMR** Pflicht (für § 20a-Nachweis). Eine Dosis reicht nicht aus — die zweite ist notwendig, um den Schutz bei den 5% Non-Respondern zu erreichen. Geborene vor 1971 gelten meist als immun (hohe Durchseuchung). Merke: 2× impfen."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — bei Menschen, die **nach 1970** geboren sind, brauchst du **2 Impfungen**. Eine Dosis reicht nicht — 5% werden davon nicht geschützt. Menschen **vor 1971** gelten meist als immun (sie hatten Masern als Kinder). Merke: 2× impfen bei jüngeren."

**D3: "Bei Schwangerschaft kann man einfach nicht impfen und muss keinen Nachweis erbringen"**
- **Fachbegriff:** Kontraindikations-Pauschale
- **Feedback (C1, 310 Zeichen):** "Fast — bei **temporärer Kontraindikation** (Schwangerschaft ist eine, weil MMR ein Lebendimpfstoff ist) braucht es eine **ärztliche Bescheinigung**. Diese gilt nur **während** der Kontraindikation. Nach der Schwangerschaft: nachholen. Ohne Bescheinigung kein Zugang zum Arbeitsplatz. Merke: Bescheinigung zählt."
- **Feedback (B1, 275 Zeichen):** "Fast — bei **Schwangerschaft** (da man MMR nicht impfen darf, weil es ein Lebendimpfstoff ist) brauchst du eine **ärztliche Bescheinigung**. Die gilt nur während der Schwangerschaft. Danach: nachholen. Ohne Bescheinigung kein Zugang zum Arbeitsplatz. Merke: Bescheinigung ist Pflicht."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. § 20a IfSG (Masern-Impfpflicht): Gilt in Pflege, Krankenhaus, Kita, Schule, Asylunterkunft. Nachweis: 2× MMR (geb. ab 1971), Titer, durchgemacht, oder Kontraindikations-Bescheinigung. Ohne Nachweis: Tätigkeits-Verbot + Bußgeld. Seit 2020 für Neue, seit März 2022 für Bestand."

**B1 (260 Zeichen):** "Sehr gut. § 20a IfSG (Masern-Impfpflicht): Gilt in Pflege, Krankenhaus, Kita, Schule, Asylunterkunft. Nachweis: 2× MMR (ab 1971), Bluttest, Krankheit gehabt, Kontraindikation. Ohne Nachweis: Arbeits-Verbot + Bußgeld. Seit 2020 für neue, seit März 2022 für alle."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Paragraph regelt die einrichtungsbezogene Masern-Impfpflicht und für welche Berufe gilt sie?"
- **Rückseite:** "§ 20a IfSG. Pflege-, Gesundheits-, Kita-, Schul-Personal und Asylunterkünfte. Seit 1.3.2020 (neu) / 15.3.2022 (Bestand)."
- **Kategorie:** recht

---

## Baustein 5: herdenimmunitaet

### Metadaten
- **bausteinId:** impfungen-herdenimmunitaet
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Warum impft man Babys gegen Keuchhusten? Babys können gar nicht die erste Impfung bekommen! Was passiert, wenn alle älteren Menschen geimpft sind?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Herdenimmunität** (Gemeinschaftsschutz): Wenn genug Menschen geimpft sind, wird die Ausbreitung eines Erregers unterbrochen — auch **Ungeimpfte** sind geschützt. Schwellenwerte: **Masern 95%**, Pertussis 92-94%, Polio 80-86%."

**B1 (225 Zeichen):** "**Herdenimmunität**: Wenn **viele** geimpft sind, kann sich der Erreger nicht ausbreiten — auch **nicht geimpfte** Menschen (Babys, Immungeschwächte) sind geschützt. Bei Masern: **95%** müssen geimpft sein."

- **Step-Typ:** diagram (Ausbreitung mit und ohne Herdenimmunität)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"**Herdenimmunität** (auch Gemeinschaftsschutz, Populationsimmunität) ist einer der **zentralen Gründe** für Impfempfehlungen — nicht nur der Eigenschutz der geimpften Person zählt.

**Prinzip:** Wenn ein ausreichend hoher Anteil der Bevölkerung immun ist (durch Impfung oder durchgemachte Erkrankung), findet der Erreger nicht mehr genug Menschen, um sich auszubreiten. **Die Infektionsketten werden unterbrochen.**

**Schwellenwerte** (abhängig von der Ansteckungsfähigkeit R₀ des Erregers):
- **Masern**: R₀ = 12-18 → Impfquote **95%** nötig
- **Pertussis (Keuchhusten)**: R₀ = 5-17 → Impfquote **92-94%**
- **Polio**: R₀ = 5-7 → Impfquote **80-86%**
- **Influenza**: R₀ = 1-2 → Impfquote **33-50%** (aber saisonal schwankend)
- **SARS-CoV-2 (Varianten)**: R₀ höher variabel

**Wer wird durch Herdenimmunität geschützt?**
- **Babys vor ihrer ersten Impfung** (z.B. vor der 6-fach-Impfung)
- **Immungeschwächte** (Chemotherapie, HIV, Transplantierte) — können nicht geimpft werden
- **Schwangere** bei bestimmten Impfungen
- **Non-Responder** (~3-5% bilden keinen vollen Schutz)

**Impfverweigerung gefährdet Dritte**: Deswegen ist Impfen auch ein **solidarisches Thema** — nicht nur Eigenschutz. (RKI, WHO)"

**B1 (620 Zeichen):**
"**Herdenimmunität** (auch Gemeinschaftsschutz) ist ein wichtiger Grund für Impfungen — nicht nur für deinen eigenen Schutz, sondern auch für andere.

**So funktioniert es:** Wenn **genug Menschen** immun sind (durch Impfung oder durchgemachte Krankheit), kann sich der Erreger nicht mehr ausbreiten. **Die Kette wird unterbrochen.**

**Schwellenwerte** (wie ansteckend der Erreger ist):
- **Masern**: sehr ansteckend — **95%** müssen immun sein
- **Keuchhusten**: **92-94%**
- **Polio**: **80-86%**
- **Grippe**: **33-50%** (je nach Jahr)

**Wer wird durch Herdenimmunität geschützt?**
- **Babys**, die noch nicht geimpft werden konnten
- **Menschen mit schwachem Immunsystem** (Chemotherapie, HIV, Organ-Transplantation) — sie können nicht geimpft werden
- **Schwangere** bei bestimmten Impfungen
- **Menschen, bei denen die Impfung nicht gewirkt hat** (~3-5%)

**Wenn man nicht impft, gefährdet man andere** — deswegen ist Impfen auch eine **Frage der Solidarität**, nicht nur Eigenschutz."

- **Erklärungs-Step:** stepType `diagram` (Ausbreitung mit/ohne Herdenimmunität)
- **Glossar-Begriffe:** [Herdenimmunität, Gemeinschaftsschutz, R₀ (Basisreproduktionszahl), Non-Responder, Immunsuppression]

### Misconceptions → Distraktoren

**D1: "Impfung ist nur Privatsache — jeder entscheidet für sich selbst"**
- **Fachbegriff:** Individualismus
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Impfung ist auch ein **solidarisches Thema**. Ungeimpfte gefährden: Babys, Chemotherapie-Patienten, HIV-Positive, Organtransplantierte. Diese Menschen können sich **nicht selbst** schützen — sie brauchen die Herdenimmunität. Merke: Impfen schützt auch andere."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Impfen betrifft auch **andere Menschen**. Wer nicht geimpft ist, kann Babys, Krebskranke, Menschen mit Organ-Transplantation anstecken. Die können sich **nicht selbst** schützen. Sie brauchen dich. Merke: Impfen ist auch Solidarität."

**D2: "Wenn einige wenige nicht impfen, macht das nichts"**
- **Fachbegriff:** Schwellen-Unterschätzung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — es gibt **kritische Schwellen** (Masern 95%). Wenn die Quote auch nur leicht sinkt, bricht die Herdenimmunität zusammen. Das sehen wir regelmäßig: Masern-Ausbrüche in Europa 2018-2019 wegen sinkender Impfquoten. **Jede einzelne ungeimpfte Person schwächt** den Gemeinschaftsschutz. Merke: Schwellen sind hart."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die Schwelle ist **hart**: Bei Masern müssen 95% immun sein. Wenn es weniger wird, kann sich die Krankheit wieder ausbreiten. Das haben wir 2018-2019 in Europa gesehen: Masern-Ausbrüche, weil weniger Menschen geimpft waren. Merke: Jede Person zählt."

**D3: "Herdenimmunität kann man auch ohne Impfung erreichen — durch durchgemachte Krankheit"**
- **Fachbegriff:** Natürliche-Immunität-Mythos
- **Feedback (C1, 335 Zeichen):** "Formal stimmt das (durchgemachte Erkrankung führt zu Immunität), aber **der Preis ist hoch**: Bei Masern 1:1000 Enzephalitis, 1:5000 Tod. Um 95% Herdenimmunität 'natürlich' zu erreichen, müssten Millionen erkranken. Mit **hunderten vermeidbaren Todesfällen und bleibenden Schäden**. Impfung ist **ethisch die einzig vertretbare** Option."
- **Feedback (B1, 290 Zeichen):** "Formal richtig (wer krank war, ist immun), aber **der Preis ist hoch**: Bei Masern 1 von 1000 bekommt Hirnhaut-Entzündung, 1 von 5000 stirbt. Um 95% Herdenimmunität zu erreichen, müssten Millionen krank werden — mit Hunderten Toten und bleibenden Schäden. Impfung ist ethisch die einzige gute Option."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Herdenimmunität = Unterbrechung der Erreger-Ausbreitung bei ausreichender Immunitäts-Quote in der Bevölkerung. Schwellen R₀-abhängig: Masern 95%, Pertussis 92-94%, Polio 80-86%. Schützt: Babys, Immungeschwächte, Non-Responder. Impfen = solidarischer Beitrag, nicht nur Eigenschutz."

**B1 (250 Zeichen):** "Sehr gut. Herdenimmunität = wenn genug Menschen immun sind, kann sich der Erreger nicht ausbreiten. Schwellen: Masern 95%, Keuchhusten 92-94%, Polio 80-86%. Schützt Babys, Menschen mit schwachem Immunsystem, Non-Responder. Impfen ist auch Solidarität."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Impfquote ist für Herdenimmunität gegen Masern nötig und warum gerade diese Zahl?"
- **Rückseite:** "Mindestens 95%. Grund: Masern-R₀ = 12-18 (sehr ansteckend). Unter 95% können Ausbrüche entstehen und gefährden Ungeimpfte (Babys, Immungeschwächte)."
- **Kategorie:** fakt

---

## Baustein 6: impfgespraech-fuehren

### Metadaten
- **bausteinId:** impfungen-impfgespraech
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Mutter sagt: 'Ich lasse mein Kind nicht gegen Masern impfen. Die Impfung macht Autismus.' Wie reagierst du? Was sagst du — und was NICHT?"
- **Step-Typ:** freetext (Bloom 5 — Kommunikation)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Impfgespräch: **Zuhören ohne zu urteilen**. Ängste/Sorgen ernst nehmen. **Fakten und Quellen** anbieten (RKI, WHO). **Motivierende Gesprächsführung** nutzen (offene Fragen, Reflektieren). **Nicht überreden** — Autonomie respektieren."

**B1 (230 Zeichen):** "Im Impfgespräch: **Zuhören** ohne zu urteilen. Ängste **ernst nehmen**. **Fakten** anbieten (RKI, WHO). **Offene Fragen** stellen. **Nicht überreden**! Der Mensch entscheidet selbst. Deine Aufgabe: informieren, nicht zwingen."

- **Step-Typ:** dialog (Impfgespräch simulieren)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Das **Impfgespräch** ist ein sensibles Beratungsgespräch. Pflegefachkräfte sind oft die ersten Ansprechpartner bei Impf-Sorgen. Wichtig ist: **Informieren, nicht überreden**.

**Häufige Einwände und ihre Fakten-Grundlage:**

| Einwand | Fakten-Antwort |
|---------|----------------|
| 'Impfung macht Autismus' | Studie Wakefield 1998 gefälscht, 2010 zurückgezogen. 20+ Großstudien (n > 1.000.000): **Kein Zusammenhang** |
| 'Zu viele Impfstoffe auf einmal überfordern das Kind' | Immunsystem verarbeitet Millionen Antigene täglich. 6-fach-Impfung ist ein Bruchteil |
| 'Impfung hat Nebenwirkungen' | Leichte Reaktionen normal (Rötung, Fieber). Schwere Reaktionen 1:10⁶ bis 1:10⁴ |
| 'Kind wird die Krankheit trotzdem bekommen' | Effektivität MMR: 97% nach 2 Dosen. Einzelne Versager ja, aber meistens ohne schwere Folgen |
| 'Früher gab es keine Impfungen und wir haben überlebt' | Durchgemachte Masern: 1:1000 Enzephalitis, 1:5000 Tod |

**Gesprächsstruktur (nach Motivational Interviewing):**
1. **Ankommen**: 'Was haben Sie gehört?' (Ängste erfragen)
2. **Verstehen**: Aktives Zuhören, ohne zu unterbrechen
3. **Informieren**: Fakten anbieten, Quellen nennen (RKI, WHO, Kinderarzt)
4. **Reflektieren**: 'Was denken Sie jetzt darüber?'
5. **Entscheiden lassen**: Autonomie respektieren

**Wichtig**: Nicht überreden. **Impfskeptiker haben oft komplexe Motive** (Vertrauensverlust in Medizin, Erfahrungen, soziale Peer-Group). Aggression verhärtet Fronten. **Beziehung > Argumente.** (STIKO 2024)"

**B1 (670 Zeichen):**
"Das **Impfgespräch** ist ein wichtiges Beratungsgespräch. Pflegekräfte sind oft die Ersten, mit denen Eltern über Impfen reden. Wichtig: **Informieren, nicht überreden**.

**Häufige Einwände und die Fakten:**

| Einwand | Antwort mit Fakten |
|---------|-------------------|
| 'Impfung macht Autismus' | Die Studie (Wakefield 1998) war **gefälscht**! 2010 zurückgezogen. Viele große Studien (über 1 Million Kinder): **Kein Zusammenhang** |
| 'Zu viele Impfungen auf einmal' | Das Immunsystem schafft jeden Tag Millionen Antigene. Die 6-fach-Impfung ist wenig |
| 'Impfung hat Nebenwirkungen' | Leichte Reaktionen sind normal (Rötung, Fieber). Schwere sehr selten |
| 'Mein Kind bekommt die Krankheit trotzdem' | MMR wirkt zu 97% (nach 2 Dosen). Selten versagt sie |
| 'Früher gab es keine Impfungen' | Masern: 1 von 1000 bekam Hirnhautentzündung, 1 von 5000 starb |

**Gesprächs-Ablauf (Motivierende Gesprächsführung):**
1. **Ankommen**: 'Was haben Sie gehört?' (Ängste fragen)
2. **Verstehen**: Zuhören, nicht unterbrechen
3. **Informieren**: Fakten geben, Quellen nennen (RKI, WHO)
4. **Reflektieren**: 'Was denken Sie jetzt?'
5. **Entscheiden lassen**: Der Mensch entscheidet

**Wichtig**: **Nicht überreden**. Impfskeptiker haben oft viele Gründe (Misstrauen, Erfahrungen, Freunde). Wer drängt, verhärtet nur. **Beziehung ist wichtiger als Argumente.**"

- **Erklärungs-Step:** stepType `comparison` (Einwände vs. Fakten)
- **Glossar-Begriffe:** [Motivational Interviewing, Wakefield-Studie, Impfskepsis, Aktives Zuhören, Evidenzbasierte Beratung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Impfskeptiker muss man mit harten Fakten überzeugen"**
- **Fachbegriff:** Überzeugungs-Illusion
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — Studien zeigen: Wer **konfrontativ** argumentiert, **verstärkt** die Skepsis (Backfire-Effekt, Nyhan 2014). Motivational Interviewing ist wirksamer: **Zuhören, Ängste erfragen, Beziehung aufbauen**. Fakten werden dann eher gehört. Merke: Beziehung vor Fakten. Wer drängt, verliert."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Forschung zeigt: Wenn du **streitest**, wird die Skepsis **stärker** (das nennt man Backfire-Effekt). Besser: **Zuhören, Ängste fragen, Beziehung aufbauen**. Dann hört man die Fakten auch wirklich. Merke: Beziehung kommt vor Fakten. Drängen verliert."

**D2: "Die Wakefield-Studie hat einen Zusammenhang zwischen Impfung und Autismus gezeigt"**
- **Fachbegriff:** Wakefield-Mythos
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — die Studie von **Wakefield 1998** war **gefälscht**. Er hatte finanzielle Interessen, manipulierte Daten, nur 12 Kinder untersucht. Die Studie wurde **2010 zurückgezogen** (Retraction), er verlor seine Approbation. Seither haben **20+ Großstudien (n > 1 Mio.)** keinen Zusammenhang gefunden. Merke: Wakefield = Betrug."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — die Wakefield-Studie war **gefälscht**. Er hatte finanzielle Vorteile, manipulierte Daten, nur 12 Kinder. 2010 wurde die Studie **zurückgezogen**. Wakefield verlor seine Approbation. Viele spätere Studien (über 1 Million Kinder) zeigen: Kein Zusammenhang. Merke: War Betrug."

**D3: "Bei Impfverweigerung muss man die Behörden einschalten"**
- **Fachbegriff:** Autoritäts-Zwang
- **Feedback (C1, 305 Zeichen):** "Fast — das geht nur bei **gesetzlicher Impfpflicht** (§ 20a IfSG: Masern in Pflege/Kita/Schule). Sonst ist Impfverweigerung **legal** und **keine Behörden-Sache**. Dein Part: Informieren, respektieren, dokumentieren. Bei Kindern: Kinderarzt weiter beraten lassen. Merke: Verweigerung ist meistens legal."
- **Feedback (B1, 270 Zeichen):** "Fast — Behörden können nur bei **gesetzlicher Pflicht** einschreiten (§ 20a IfSG: Masern in Pflege, Kita, Schule). Sonst ist Nicht-Impfen **legal**. Deine Aufgabe: Informieren, respektieren, aufschreiben. Bei Kindern den Kinderarzt weiter beraten lassen. Merke: Meist legal."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Impfgespräch: Ängste ernst nehmen, zuhören, Fakten anbieten (RKI, WHO), Motivational Interviewing nutzen. Nicht überreden — Autonomie respektieren. Häufige Einwände kennen (Autismus-Mythos, Wakefield 1998 gefälscht). Beziehung vor Argumenten — Drängen löst Backfire-Effekt aus."

**B1 (255 Zeichen):** "Sehr gut. Impfgespräch: Ängste ernst nehmen, zuhören, Fakten geben (RKI, WHO), offen fragen. Nicht überreden — der Mensch entscheidet. Einwände kennen (Wakefield war gefälscht, keine Autismus-Verbindung). Beziehung wichtiger als Argumente. Drängen verliert."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie reagierst du auf: 'Impfungen verursachen Autismus'?"
- **Rückseite:** "Zuhören, Angst ernst nehmen. Dann Fakten: Die Wakefield-Studie (1998) war gefälscht, 2010 zurückgezogen. 20+ Großstudien (n > 1 Mio.): kein Zusammenhang. Aber: nicht überreden."
- **Kategorie:** handlung

---

## Baustein 7: impfreaktion-impfkomplikation-impfschaden

### Metadaten
- **bausteinId:** impfungen-reaktion-komplikation-schaden
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Nach einer Impfung hat ein Kind Fieber von 38,5 °C. Ist das normal, oder muss man sich Sorgen machen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Impfreaktion** (normal, häufig): Rötung, Fieber <39°C, Schmerz — 1-2 Tage. **Impfkomplikation** (selten): über 39°C, Fieberkrampf, schwere Allergie. **Impfschaden** (sehr selten): dauerhafte gesundheitliche Schädigung — nach § 60 IfSG entschädigungspflichtig."

**B1 (230 Zeichen):** "**Impfreaktion** (normal): Rötung, Fieber unter 39°C, Schmerz — 1-2 Tage. **Impfkomplikation** (selten): Fieber über 39°C, Fieberkrampf, Allergie. **Impfschaden** (sehr selten): bleibender Schaden — nach § 60 IfSG bezahlt der Staat."

- **Step-Typ:** comparison (3 Stufen)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Drei Begriffe, die **oft verwechselt** werden:

**1. Impfreaktion (häufig, ungefährlich)**
- **Was**: Normale Reaktion des Immunsystems
- **Symptome**: Rötung/Schwellung/Schmerz an Injektionsstelle, Fieber <39°C, Müdigkeit, Kopfschmerzen
- **Dauer**: 1-3 Tage
- **Pflege**: Ruhe, ausreichend Trinken, evtl. Paracetamol
- **Meldung**: nicht erforderlich

**2. Impfkomplikation (selten, aber bedeutsam)**
- **Was**: Über das übliche Maß hinausgehende Reaktion
- **Beispiele**: Fieber >39°C, Fieberkrampf, anhaltende Rötung/Schwellung >3 Tage, Urtikaria, Bronchospasmus
- **Häufigkeit**: 1:10⁴ bis 1:10⁶ (je nach Impfstoff)
- **Pflege**: Arzt informieren, Dokumentation
- **Meldung**: PEI-Meldung empfehlenswert (Paul-Ehrlich-Institut)

**3. Impfschaden (sehr selten)**
- **Was**: **Dauerhafte** gesundheitliche Schädigung, die kausal auf die Impfung zurückgeht
- **Beispiele**: Bleibende neurologische Ausfälle nach schwerer Komplikation
- **Häufigkeit**: 1:10⁵ bis 1:10⁶
- **Rechtlich**: **§ 60 IfSG** — Staat entschädigt (Versorgungsamt)
- **Voraussetzung**: Die STIKO-empfohlene Impfung + anerkannter Kausalzusammenhang

**Anaphylaxie** (sehr selten, 1:10⁶ bei Impfungen): Immer Notfall-Set in Impfpraxis bereithalten (Adrenalin, Cortison, Antihistaminikum). Mindestens 15 Min Beobachtung nach Impfung."

**B1 (640 Zeichen):**
"Drei Begriffe, die **oft verwechselt** werden:

**1. Impfreaktion (häufig, nicht gefährlich)**
- **Was**: Normale Reaktion des Körpers
- **Symptome**: Rötung/Schmerz, Fieber unter 39°C, müde, Kopfschmerzen
- **Wie lang**: 1-3 Tage
- **Was tun**: Ruhe, Trinken, bei Bedarf Paracetamol
- **Melden**: Nicht nötig

**2. Impfkomplikation (selten, aber ernst)**
- **Was**: Stärkere Reaktion als normal
- **Beispiele**: Fieber über 39°C, Fieberkrampf, Schwellung länger als 3 Tage, Nesselsucht, Atemnot
- **Wie oft**: 1 zu 10.000 bis 1 zu 1 Million
- **Was tun**: Arzt informieren, aufschreiben
- **Melden**: An das Paul-Ehrlich-Institut (PEI) sinnvoll

**3. Impfschaden (sehr selten)**
- **Was**: **Dauerhafte** Schädigung durch die Impfung
- **Beispiele**: Bleibende Nervenschäden nach schwerer Komplikation
- **Wie oft**: 1 zu 100.000 bis 1 zu 1 Million
- **Gesetz**: **§ 60 IfSG** — Staat zahlt Entschädigung
- **Wann bezahlt**: STIKO-Impfung + nachgewiesener Zusammenhang

**Anaphylaxie** (sehr selten, 1:1.000.000): In der Impfpraxis muss immer ein **Notfall-Set** da sein (Adrenalin, Cortison). **Mindestens 15 Minuten beobachten** nach der Impfung."

- **Erklärungs-Step:** stepType `comparison` (3-spaltig)
- **Glossar-Begriffe:** [Impfreaktion, Impfkomplikation, Impfschaden, § 60 IfSG, PEI, Anaphylaxie, Urtikaria]

### Misconceptions → Distraktoren

**D1: "Fieber nach einer Impfung ist immer eine Komplikation"**
- **Fachbegriff:** Fieber-Panikreaktion
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Fieber bis 39°C** ist eine **normale Impfreaktion** (keine Komplikation). Es zeigt, dass das Immunsystem arbeitet. Ab **39°C** oder mit Fieberkrampf = Komplikation. Bei Impfreaktion: Ruhe, Trinken, bei Bedarf Paracetamol. Merke: Fieber unter 39 ist okay."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Fieber bis 39°C** ist **normal** nach einer Impfung (das Immunsystem arbeitet). Erst ab **39°C** oder bei Fieberkrampf = Komplikation. Bei normaler Reaktion: Ruhe, Trinken, wenn nötig Paracetamol. Merke: Unter 39°C okay."

**D2: "Beim Impfschaden muss man selbst den Anwalt bezahlen und vor Gericht gehen"**
- **Fachbegriff:** Entschädigungs-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei einem Impfschaden ist das **Versorgungsamt** des Bundeslandes zuständig (**§ 60 IfSG**). Man stellt einen **Antrag** — **keine gerichtliche Klage nötig**. Die Prüfung erfolgt nach Aktenlage und ärztlichen Gutachten. Bei Ablehnung kann man Widerspruch einlegen. Merke: Behördenweg, nicht Gericht."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — bei einem Impfschaden ist das **Versorgungsamt** (vom Bundesland) zuständig. Man stellt einen **Antrag** — **kein Gericht nötig**. Das Amt prüft mit Gutachten. Bei Ablehnung kann man Widerspruch einlegen. Merke: Das geht übers Amt, nicht vor Gericht."

**D3: "Eine Impfreaktion zeigt, dass die Impfung funktioniert"**
- **Fachbegriff:** Reaktions-Wirkungs-Kopplung
- **Feedback (C1, 310 Zeichen):** "Fast — die Impfreaktion zeigt, dass das **Immunsystem reagiert**. Aber: **Keine Reaktion bedeutet nicht 'die Impfung wirkt nicht'**! Es gibt viele Menschen ohne Reaktion, die dennoch voll geschützt sind. Die Schutzwirkung misst man nur über den Antikörper-Titer (Labor), nicht über Fieber. Merke: Reaktion ≠ Wirkung."
- **Feedback (B1, 275 Zeichen):** "Fast — eine Reaktion zeigt, dass der Körper **reagiert**. Aber: Auch ohne Reaktion wirkt die Impfung! Viele Menschen haben keine Reaktion und sind trotzdem geschützt. Den echten Schutz sieht man nur im **Bluttest** (Antikörper-Titer), nicht am Fieber. Merke: Reaktion ≠ Wirkung."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. 3 Stufen: Impfreaktion (häufig, normal: Rötung, Fieber <39°C, 1-3 Tage). Impfkomplikation (selten: >39°C, Fieberkrampf, Allergie — PEI-Meldung). Impfschaden (sehr selten, dauerhaft — § 60 IfSG Entschädigung durchs Versorgungsamt). Anaphylaxie: 15 Min Beobachtung nach Impfung."

**B1 (255 Zeichen):** "Sehr gut. 3 Stufen: Impfreaktion (häufig, normal: Rötung, Fieber unter 39°C). Impfkomplikation (selten: über 39°C, Fieberkrampf, Allergie). Impfschaden (sehr selten, dauerhaft — § 60 IfSG, Versorgungsamt zahlt). Anaphylaxie: 15 Min nach Impfung beobachten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welcher Paragraph regelt die Entschädigung bei Impfschaden und wer ist zuständig?"
- **Rückseite:** "§ 60 IfSG. Zuständig: Versorgungsamt des Bundeslandes. Antrag stellen, gutachterliche Prüfung, kein Gerichtsverfahren nötig."
- **Kategorie:** recht

---

## Baustein 8: meldepflichtige-erkrankungen-pflege

### Metadaten
- **bausteinId:** impfungen-meldepflicht
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient auf deiner Station hat plötzlich einen roten Ausschlag + Fieber + Schnupfen. Der Arzt vermutet Masern. Was passiert jetzt — und wer muss informiert werden?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Meldepflichtige Erkrankungen (§ 6 IfSG) namentlich: **Masern, Mumps, Röteln, Hepatitis A-E, Tuberkulose, Meningokokken, COVID-19** u.v.a. Meldung: innerhalb **24h** ans **Gesundheitsamt**. Melder: Arzt. Pflege: Informationspflicht an Arzt."

**B1 (230 Zeichen):** "Meldepflichtige Krankheiten (§ 6 IfSG) mit Namen: **Masern, Mumps, Röteln, Hepatitis A-E, Tuberkulose, Meningokokken, COVID-19** und andere. Melden in **24 Stunden** ans **Gesundheitsamt**. **Arzt meldet**. Pflege informiert Arzt."

- **Step-Typ:** text (displayFormat: checklist — meldepflichtige Krankheiten)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"**Meldepflichtige Erkrankungen** sind in **§ 6 IfSG** aufgelistet. Die Meldung geht innerhalb **24 Stunden** an das **Gesundheitsamt** — von dort zum **RKI**.

**§ 6 Abs. 1 — Namentlich meldepflichtig bei Verdacht, Erkrankung, Tod:**
- **Masern, Mumps, Röteln, Varizellen** (seit 2013)
- **Hepatitis A, B, C, D, E**
- **Tuberkulose**
- **Meningokokken-Meningitis, Pneumokokken-Meningitis**
- **Cholera, Pest, Diphtherie, Polio** (heute selten in DE)
- **Typhus, Paratyphus**
- **COVID-19** (seit 2020)
- **Enteropathogene Escherichia coli, Campylobacter** (bei gehäuften Fällen)
- **Akute Virushepatitis, akute Virusinfektion des ZNS**

**§ 6 Abs. 2 — Nicht-namentlich meldepflichtig:**
- **HIV**, **Syphilis**, **Toxoplasmose** (bei Konnataler Infektion), **Röteln** bei Schwangeren

**§ 7 IfSG — Erreger-Meldepflicht durch Labor** (namentlich)

**Wer meldet?**
- **Primär**: Feststellender **Arzt** (Klinik, Praxis)
- **Meldeweg**: Arzt → Gesundheitsamt → RKI
- **Pflegekräfte**: Informationspflicht an Arzt und Leitung
- **Heimleitung**: Eigene Meldepflicht bei Ausbrüchen in Pflegeeinrichtungen (**§ 8 IfSG**)

**Nach der Meldung:**
- Gesundheitsamt entscheidet über Quarantäne/Isolierung
- Kontaktpersonen informieren
- Hygiene-Maßnahmen (Händedesinfektion, Schutzkleidung, Isolierzimmer)
- Dokumentation"

**B1 (660 Zeichen):**
"**Meldepflichtige Krankheiten** stehen in **§ 6 IfSG**. Die Meldung muss **in 24 Stunden** ans **Gesundheitsamt** gehen.

**§ 6 Abs. 1 — Mit Namen melden** (schon bei Verdacht):
- **Masern, Mumps, Röteln, Windpocken**
- **Hepatitis A, B, C, D, E**
- **Tuberkulose**
- **Meningokokken** (Hirnhautentzündung)
- **Cholera, Pest, Diphtherie, Polio** (in Deutschland selten)
- **Typhus**
- **COVID-19**
- **E. coli, Campylobacter** (bei Gruppen)
- **Hirnhautentzündung durch Viren**

**§ 6 Abs. 2 — Ohne Namen melden:**
- **HIV**, **Syphilis**, **Toxoplasmose** (beim Neugeborenen), **Röteln** bei Schwangeren

**§ 7 — Labor meldet Erreger** (mit Name)

**Wer meldet?**
- **Arzt** — er muss melden (Klinik oder Praxis)
- **Weg**: Arzt → Gesundheitsamt → RKI
- **Pflegekräfte**: Info an Arzt und Leitung
- **Heimleitung**: Bei Ausbrüchen in Pflegeheimen muss sie selbst melden (**§ 8 IfSG**)

**Nach der Meldung:**
- Gesundheitsamt entscheidet: Quarantäne? Isolierung?
- Kontakte informieren
- **Hygiene-Maßnahmen** (Händedesinfektion, Schutzkleidung, eigenes Zimmer)
- Aufschreiben"

- **Erklärungs-Step:** stepType `reveal` (Kategorien § 6 Abs. 1/2, § 7, § 8)
- **Glossar-Begriffe:** [§ 6 IfSG, § 7 IfSG, § 8 IfSG, Gesundheitsamt, namentlich, Ausbruch, Meldeweg]

### Misconceptions → Distraktoren

**D1: "Meldepflicht gilt nur bei bestätigter Erkrankung, nicht bei Verdacht"**
- **Fachbegriff:** Verdachts-Ignoranz
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Meldepflicht gilt schon beim Verdacht** (nicht erst bei Bestätigung). Grund: Bei hochansteckenden Erkrankungen (z.B. Masern) darf man nicht auf Laborbestätigung warten — dann wären Kontaktpersonen schon angesteckt. Die Meldung löst Maßnahmen aus. Merke: Verdacht + Erkrankung + Tod."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — man meldet schon bei **Verdacht** (nicht erst bei Bestätigung). Warum? Bei ansteckenden Krankheiten (zum Beispiel Masern) darf man nicht warten — sonst stecken sich alle in der Nähe an. Die Meldung löst Maßnahmen aus. Merke: Schon bei Verdacht."

**D2: "Die Meldung geht direkt ans RKI"**
- **Fachbegriff:** Meldeweg-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — der Weg ist: **Arzt → Gesundheitsamt** (binnen 24h) **→ RKI** (vom Gesundheitsamt weitergeleitet). Das Gesundheitsamt ist die **lokale Behörde**, die Kontaktpersonen informiert und Maßnahmen vor Ort koordiniert. Das RKI sammelt bundesweit Daten. Merke: Über Gesundheitsamt."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — der Weg ist: **Arzt → Gesundheitsamt** (in 24 Stunden) **→ RKI** (das Gesundheitsamt leitet weiter). Das Gesundheitsamt ist die **lokale Behörde** — es informiert Kontakte und macht Maßnahmen. Das RKI sammelt Daten für ganz Deutschland. Merke: Übers Gesundheitsamt."

**D3: "Als Pflegekraft muss ich selbst melden"**
- **Fachbegriff:** Rollenfehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die **Meldepflicht liegt beim Arzt** (§ 6 IfSG). Pflegekräfte haben eine **Informationspflicht**: Bei Verdacht den **Arzt** informieren + Leitung. Ausnahme: Bei Ausbrüchen in Pflegeeinrichtungen hat die **Heimleitung** eigene Meldepflicht (§ 8 IfSG). Merke: Pflege informiert, Arzt meldet."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — die **Meldepflicht hat der Arzt** (§ 6 IfSG). Als Pflege musst du **den Arzt informieren** (und die Leitung). Ausnahme: Bei Ausbrüchen in Pflegeheimen muss die **Heimleitung** selbst melden (§ 8 IfSG). Merke: Pflege informiert — der Arzt meldet."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Meldepflichtige Erkrankungen § 6 IfSG (namentlich): Masern, Mumps, Röteln, Hepatitis A-E, Tuberkulose, Meningokokken, COVID-19 u.v.a. Nicht-namentlich (§ 6 Abs. 2): HIV, Syphilis. Meldeweg: Arzt → Gesundheitsamt (24h) → RKI. Pflege: Informationspflicht. Heimleitung § 8 bei Ausbrüchen."

**B1 (260 Zeichen):** "Sehr gut. Meldepflichtige Krankheiten § 6 IfSG: Masern, Mumps, Röteln, Hepatitis A-E, TB, Meningokokken, COVID-19 u.a. Ohne Namen (§ 6 Abs. 2): HIV, Syphilis. Weg: Arzt → Gesundheitsamt (24h) → RKI. Pflege: Info an Arzt. Heimleitung meldet bei Ausbrüchen (§ 8)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Innerhalb welcher Zeit muss eine meldepflichtige Erkrankung nach § 6 IfSG gemeldet werden und wohin?"
- **Rückseite:** "Innerhalb von 24 Stunden an das zuständige Gesundheitsamt. Das Gesundheitsamt leitet an das RKI weiter."
- **Kategorie:** recht

---

## Baustein 9: hygiene-standard-und-erweitert

### Metadaten
- **bausteinId:** impfungen-hygiene
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient hat MRSA. Welche Schutzmaßnahmen brauchst du jetzt zusätzlich zur normalen Hygiene?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Standard-Hygiene** (immer, bei jedem Patienten): Händedesinfektion, PSA bei Kontakt mit Körperflüssigkeiten. **Erweiterte Hygiene**: bei bekannten MRE (MRSA, VRE, MRGN), Clostridium difficile, offenen Infektionen — Isolierung + FFP2/Kittel/Handschuhe."

**B1 (225 Zeichen):** "**Standard-Hygiene** (immer): Händedesinfektion, Schutzkleidung bei Körperflüssigkeiten. **Erweiterte Hygiene** (bei MRSA, VRE, C. difficile und Infektionen): eigenes Zimmer, Kittel, Handschuhe, Maske."

- **Step-Typ:** comparison (Standard vs. erweitert)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Hygiene in der Pflege folgt zwei Stufen: **Standard** und **erweitert**.

**Standard-Hygiene (bei JEDEM Patienten)**
- **5 Momente der Händehygiene** (WHO): (1) Vor Patienten-Kontakt, (2) Vor aseptischen Tätigkeiten, (3) Nach Körperflüssigkeiten-Kontakt, (4) Nach Patienten-Kontakt, (5) Nach Kontakt mit Patienten-Umgebung
- **Händedesinfektion**: 30 Sekunden, bis trocken
- **PSA bei Körperflüssigkeiten**: Handschuhe, ggf. Schürze/Kittel, Mund-Nase-Schutz
- **Sichere Entsorgung** von Kanülen, Verbänden

**Erweiterte Hygiene / Isolationsmaßnahmen**

**Kontakt-Isolierung** (MRSA, VRE, MRGN):
- Einzelzimmer oder Kohorte
- Kittel und Handschuhe im Zimmer
- Separate Geräte
- Umgebungsreinigung intensiv

**Tröpfchen-Isolierung** (Influenza, Pertussis):
- MNS (Mund-Nasen-Schutz) ab 1-2 m Abstand
- Einzelzimmer empfohlen

**Aerogene Isolierung** (Tuberkulose, Masern, SARS-CoV-2):
- **FFP2/FFP3-Masken**
- Einzelzimmer mit Unterdruck
- Lüftung + UV-C bei großen Ausbrüchen

**Kombi-Isolierung** (häufigster Fall, z.B. COVID-19): Tröpfchen + Kontakt + aerogen.

**Dokumentation**: Isolierungs-Grund, Beginn, Ende, Umgebungsreinigung. (RKI-KRINKO, WHO)"

**B1 (620 Zeichen):**
"Hygiene in der Pflege hat **2 Stufen**: Standard und erweitert.

**Standard-Hygiene (bei JEDEM Patienten)**
- **5 Momente der Händehygiene** (WHO): (1) Vor Patient, (2) Vor sterilen Tätigkeiten, (3) Nach Körperflüssigkeiten, (4) Nach Patient, (5) Nach Patienten-Umgebung
- **Händedesinfektion**: 30 Sekunden, bis trocken
- **Schutzkleidung** bei Körperflüssigkeiten: Handschuhe, Schürze/Kittel, Mund-Nase-Schutz
- **Sichere Entsorgung** von Kanülen, Verbänden

**Erweiterte Hygiene / Isolierung**

**Kontakt-Isolierung** (MRSA, VRE, MRGN):
- Eigenes Zimmer
- Kittel und Handschuhe im Zimmer
- Eigene Geräte
- Zimmer extra reinigen

**Tröpfchen-Isolierung** (Grippe, Keuchhusten):
- Mund-Nasen-Schutz ab 1-2 m
- Eigenes Zimmer empfohlen

**Aerogene Isolierung** (Tuberkulose, Masern, SARS-CoV-2):
- **FFP2/FFP3-Masken**
- Eigenes Zimmer mit Unterdruck
- Lüften + UV-Licht bei Ausbrüchen

**Kombi-Isolierung** (z.B. COVID-19): mehrere Arten zusammen.

**Aufschreiben**: Warum isoliert, wann angefangen, wann aufgehört, Reinigung."

- **Erklärungs-Step:** stepType `reveal` (4 Isolations-Arten)
- **Glossar-Begriffe:** [MRSA, MRE, VRE, MRGN, Kontakt-, Tröpfchen-, Aerogene Isolierung, FFP2, KRINKO]

### Misconceptions → Distraktoren

**D1: "Bei MRSA reichen Handschuhe"**
- **Fachbegriff:** PSA-Unterschätzung
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — bei **MRSA** (Kontakt-Isolierung) braucht es **Handschuhe + Kittel + ggf. MNS**. Besonders bei Tätigkeiten mit Körperflüssigkeits-Kontakt (Verbandswechsel, Körperpflege). Einzelzimmer oder Kohorte. Händedesinfektion bleibt obligatorisch. Merke: Volle PSA."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — bei **MRSA** braucht es **Handschuhe + Kittel + eventuell Maske**. Besonders bei Verbandswechsel und Körperpflege. Eigenes Zimmer. Händedesinfektion bleibt wichtig. Merke: Alle Schutzkleidung."

**D2: "MNS und FFP2 schützen gleich gut vor Aerosolen"**
- **Fachbegriff:** Maskentyp-Verwechslung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **MNS (chirurgische Maske)** schützt vor **Tröpfchen** (~5 μm), nicht vor **Aerosolen** (<5 μm). Für aerogene Übertragung (Tuberkulose, Masern, SARS-CoV-2) braucht es **FFP2/FFP3**. Die unterschiedliche Filterleistung: MNS ~50%, FFP2 ~94%, FFP3 ~99%. Merke: FFP2 bei Aerosolen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **MNS** (OP-Maske) schützt vor **Tröpfchen**, nicht vor **feinen Aerosolen**. Bei Tuberkulose, Masern, SARS-CoV-2 brauchst du **FFP2 oder FFP3**. Filterleistung: MNS ~50%, FFP2 ~94%, FFP3 ~99%. Merke: FFP2 bei Aerosolen."

**D3: "Standard-Hygiene reicht, wenn keine Infektion bekannt ist"**
- **Fachbegriff:** Infektions-Reduktionismus
- **Feedback (C1, 310 Zeichen):** "Fast — Standard-Hygiene ist der **Mindeststandard bei jedem Patienten**. Aber: Viele Infektionen sind **unbekannt** (MRSA-Kolonisation ohne Symptome, HIV, Hepatitis C, COVID-19 asymptomatisch). Die Standard-Hygiene geht von 'jeder Patient könnte infektiös sein' aus. Merke: Universal Precautions."
- **Feedback (B1, 275 Zeichen):** "Fast — Standard-Hygiene ist **immer** wichtig. Viele Patienten haben Infektionen, ohne dass man es weiß (MRSA ohne Symptome, HIV, Hepatitis C, COVID-19). Deswegen gilt: **Bei jedem Patienten so vorgehen, als könnte er ansteckend sein.** Merke: Immer gleich sorgfältig."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Standard-Hygiene (immer): 5 Momente Händehygiene (WHO), PSA bei Körperflüssigkeits-Kontakt. Erweiterte Hygiene/Isolierung: Kontakt (MRSA, VRE, MRGN), Tröpfchen (Grippe, Pertussis — MNS), Aerogene (TB, Masern, SARS-CoV-2 — FFP2/3), Kombi (COVID-19). RKI-KRINKO-Empfehlungen."

**B1 (260 Zeichen):** "Sehr gut. Standard-Hygiene (immer): 5 Momente der Hände-Hygiene, Schutzkleidung bei Körperflüssigkeiten. Erweiterte Hygiene: Kontakt (MRSA, VRE, MRGN), Tröpfchen (Grippe, Keuchhusten — MNS), Aerogen (TB, Masern, SARS-CoV-2 — FFP2/3), Kombi (COVID-19). RKI-KRINKO."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Masken-Art wird bei aerogener Isolierung (z.B. Tuberkulose) verwendet?"
- **Rückseite:** "FFP2 oder FFP3 — sie filtern auch feine Aerosole (FFP2 ~94%, FFP3 ~99%). Ein chirurgischer MNS reicht nicht."
- **Kategorie:** handlung

---

## Baustein 10: reiseimpfungen-und-berufsimpfungen

### Metadaten
- **bausteinId:** impfungen-reise-beruf
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Pflegeschülerin will in Kenia ein Praktikum machen. Welche zusätzlichen Impfungen braucht sie?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "**Berufsimpfungen Pflege** (STIKO): Hepatitis B (Pflicht bei Patientenkontakt), MMR, Varizellen, Pertussis, Influenza jährlich. **Reiseimpfungen**: länderabhängig (Gelbfieber, Typhus, Tollwut, Cholera, Meningokokken ACWY, Hepatitis A)."

**B1 (225 Zeichen):** "**Impfungen für Pflege** (STIKO): Hepatitis B (Pflicht bei Patientenkontakt), MMR, Windpocken, Keuchhusten, Grippe jedes Jahr. **Reiseimpfungen**: je nach Land (Gelbfieber, Typhus, Tollwut, Cholera, Meningokokken, Hep A)."

- **Step-Typ:** text (displayFormat: checklist — Berufs- und Reiseimpfungen)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"**Berufliche Impfungen** (STIKO-Empfehlungen für Gesundheitspersonal):

**Pflicht bzw. dringend empfohlen:**
- **Masern (§ 20a IfSG)**: 2× MMR — gesetzlich Pflicht
- **Hepatitis B**: Aktivimpfung + Titer-Kontrolle (Anti-HBs >100 IE/l). Bei Non-Respondern: Booster
- **Influenza**: jährlich — Schutz für Personal + Patienten
- **Pertussis (Keuchhusten)**: Kombinationsimpfstoff Tdap alle 10 Jahre
- **Varizellen (Windpocken)**: wenn keine Immunität vorhanden
- **COVID-19**: je nach aktueller Empfehlung

**Situativ je nach Arbeitsbereich:**
- **Hepatitis A**: bei Kinderstation, Kinderheim, Stuhl-Exposition
- **Meningokokken ACWY**: bei Kontakt zu Erkrankten
- **Tollwut**: bei Hunde-/Tierbissen (Tierarztpraxen)

**Reiseimpfungen** (je nach Zielland):
- **Gelbfieber**: subsaharisches Afrika, Südamerika — Pflicht in manchen Ländern zur Einreise
- **Typhus**: Süd-/Südostasien, Afrika, Lateinamerika
- **Hepatitis A**: überall außer Westeuropa/Nordamerika
- **Tollwut**: Süd-/Südostasien, Afrika
- **Cholera**: nur in Ausbruchsgebieten (oral)
- **Meningokokken ACWY**: Pilgerreise nach Mekka (Hadsch), Sahelzone

**Beratung: Fachärzte für Tropenmedizin**, **Reisemedizinische Zentren** (z.B. BNITM Hamburg). (STIKO 2024, CRM-Handbuch)"

**B1 (650 Zeichen):**
"**Impfungen für Pflegeberuf** (STIKO):

**Pflicht oder sehr wichtig:**
- **Masern (§ 20a IfSG)**: 2× MMR — **gesetzlich Pflicht**
- **Hepatitis B**: aktive Impfung + Bluttest (Titer-Kontrolle)
- **Grippe**: **jedes Jahr** — Schutz für dich + Patienten
- **Keuchhusten (Pertussis)**: als Tdap-Kombi alle 10 Jahre
- **Windpocken (Varizellen)**: wenn du noch keine hattest
- **COVID-19**: je nach aktueller Empfehlung

**Je nach Arbeitsplatz:**
- **Hepatitis A**: bei Kinderstation, Kinderheim, Stuhl-Kontakt
- **Meningokokken ACWY**: bei Kontakt zu Erkrankten
- **Tollwut**: bei Tierbissen (Tierarzt-Praxen)

**Reiseimpfungen** (je nach Land):
- **Gelbfieber**: Afrika, Südamerika — in manchen Ländern Pflicht zum Einreisen
- **Typhus**: Süd-/Südost-Asien, Afrika, Lateinamerika
- **Hepatitis A**: fast überall außer Westeuropa, Nordamerika
- **Tollwut**: Süd-/Südost-Asien, Afrika
- **Cholera**: nur in Ausbruchs-Gebieten (Schluckimpfung)
- **Meningokokken ACWY**: bei der Pilgerreise nach Mekka, Sahelzone

**Wer berät?** **Fachärzte für Tropenmedizin**, **Reisemedizinische Zentren** (zum Beispiel BNITM Hamburg)."

- **Erklärungs-Step:** stepType `categorize` (Impfungen → Beruf / Reise)
- **Glossar-Begriffe:** [Berufsimpfung, Reiseimpfung, Titer, Booster, BNITM, Gelbfieber-Zertifikat, Tdap]

### Misconceptions → Distraktoren

**D1: "Als Pflegeschüler bin ich bei Berufsimpfungen noch nicht einbezogen"**
- **Fachbegriff:** Lernenden-Ausschluss
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **Auszubildende sind explizit eingeschlossen** (PflBG + § 20a IfSG). Schon vor dem ersten Praktikum müssen die Berufsimpfungen stehen (Masern-Pflicht, Hepatitis B empfohlen). Die Schule prüft das. Die Kosten trägt der Arbeitgeber/die Schule. Merke: Ab Tag 1."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Auszubildende müssen auch geimpft sein** (PflBG + § 20a IfSG). Schon vor dem ersten Praktikum: Masern-Pflicht, Hepatitis B empfohlen. Die Schule prüft das. Arbeitgeber oder Schule zahlt. Merke: Ab Tag 1 dabei."

**D2: "Reiseimpfungen werden von der gesetzlichen Krankenkasse übernommen"**
- **Fachbegriff:** Kostenerstattungs-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Reiseimpfungen für **private** Reisen sind meist **Selbstzahler**-Leistungen. Ausnahmen: einige Kassen erstatten freiwillig, manche Arbeitgeber bei Dienstreise. Berufs-bedingte Reisen (z.B. Praktikum im Ausland im Rahmen der Ausbildung): Kostenübernahme durch den Arbeitgeber klären."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Reiseimpfungen bezahlt man bei **privaten** Reisen meistens **selbst**. Manche Kassen erstatten freiwillig. Bei **Dienstreisen** zahlt oft der Arbeitgeber. Bei einem Praktikum im Ausland im Rahmen der Ausbildung: mit Arbeitgeber/Schule klären. Merke: Oft selbst zahlen."

**D3: "Nach Hepatitis-B-Impfung ist man für immer geschützt"**
- **Fachbegriff:** Dauer-Schutz-Mythos
- **Feedback (C1, 310 Zeichen):** "Fast — bei den meisten Menschen hält der Schutz **mindestens 10-20 Jahre**, oft ein Leben lang. Aber: **Non-Responder** (~5%) haben keinen vollen Schutz. Deswegen **Titer-Kontrolle** nach Grundimmunisierung: Anti-HBs >100 IE/l = ok. Bei Risikoberuf: Titer-Check alle 10 Jahre, ggf. Booster. Merke: Titer prüfen."
- **Feedback (B1, 275 Zeichen):** "Fast — bei den meisten hält der Schutz **10-20 Jahre oder länger**. Aber: Etwa **5% haben keinen vollen Schutz** (Non-Responder). Deswegen: **Bluttest** (Titer) nach der Grundimpfung. Bei Risikoberuf: alle 10 Jahre testen, wenn nötig auffrischen. Merke: Titer kontrollieren."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Berufsimpfungen Pflege: Masern (§ 20a Pflicht), Hepatitis B (Titer-Kontrolle), Influenza (jährlich), Pertussis (Tdap alle 10 Jahre), Varizellen, COVID-19. Situativ: Hep A, Meningokokken ACWY, Tollwut. Reiseimpfungen je nach Land (Gelbfieber, Typhus, Hep A, Tollwut, Cholera, Meningokokken)."

**B1 (260 Zeichen):** "Sehr gut. Pflege-Impfungen: Masern (§ 20a Pflicht), Hepatitis B (+ Bluttest), Grippe (jedes Jahr), Keuchhusten (alle 10 Jahre), Windpocken, COVID-19. Je nach Arbeitsplatz: Hep A, Meningokokken, Tollwut. Reiseimpfungen je nach Land (Gelbfieber, Typhus, Hep A u.a.)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Titer-Kontrolle ist bei Hepatitis-B-Impfung empfohlen und welcher Wert gilt als Schutz?"
- **Rückseite:** "Anti-HBs Bluttest 4-8 Wochen nach Grundimmunisierung. Schutz ab Anti-HBs >100 IE/l. Bei Non-Respondern: Booster-Impfung."
- **Kategorie:** handlung

---

## Baustein 11: allergie-grundlagen

### Metadaten
- **bausteinId:** impfungen-allergie-grundlagen
- **bloomLevel:** 2
- **wissensart:** definition
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Heuschnupfen, Nahrungsmittelallergie, Bienenstich-Schock: Was haben sie gemeinsam? Und was ist der Unterschied zu einer normalen Reaktion?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Allergie**: Überreaktion des Immunsystems auf eigentlich harmlose Substanzen (Allergene). Typ I (Soforttyp, IgE-vermittelt): Heuschnupfen, Asthma, Bienenstich, Anaphylaxie. **Atopie**: genetische Veranlagung. **Sensibilisierung** ≠ manifeste Allergie."

**B1 (230 Zeichen):** "**Allergie**: Der Körper reagiert zu stark auf etwas, das eigentlich nicht gefährlich ist (zum Beispiel Pollen). **Atopie**: man hat eine genetische Veranlagung. **Sensibilisierung**: der Körper kennt das Allergen — das ist noch keine Allergie."

- **Step-Typ:** text (displayFormat: stepbystep — Allergie-Entwicklung)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"**Allergie** ist eine Fehlreaktion des Immunsystems. Statt schädlicher Erreger (Viren, Bakterien) bekämpft der Körper harmlose Substanzen (z.B. Pollen, Erdnüsse).

**Wichtige Begriffe:**
- **Allergen**: Auslöser der Allergie (Pollen, Milben, Tierhaare, Nahrungsmittel, Medikamente)
- **IgE**: spezieller Antikörper, der bei Typ-I-Allergien eine Rolle spielt
- **Sensibilisierung**: Immunsystem kennt das Allergen — bildet IgE — **noch keine manifeste Allergie**
- **Allergie**: Symptome treten bei Kontakt mit Allergen auf
- **Atopie**: erbliche Veranlagung zu Typ-I-Allergien

**Allergie-Typen (nach Coombs-Gell):**

**Typ I — Soforttyp (IgE-vermittelt, am häufigsten)**
- Reaktion innerhalb Minuten
- Beispiele: Heuschnupfen, allergisches Asthma, Urtikaria, Bienenstich-Allergie, **Anaphylaxie**

**Typ II — zytotoxisch**: IgG-/IgM-vermittelt. Beispiel: Blutgruppen-Unverträglichkeit

**Typ III — Immunkomplex**: Beispiel: Serumkrankheit

**Typ IV — Spättyp (T-Zell-vermittelt, verzögert)**
- Reaktion nach Stunden/Tagen
- Beispiele: Kontakt-Ekzem (Nickelallergie), Transplantat-Abstoßung

**Primärprävention Allergien**: **Frühes Einführen** von potenziellen Allergenen (Erdnuss ab 6 Mo), Stillen, Haustiere im 1. Lebensjahr (verringern Risiko). Keine Überhygiene ('Dreck-Hypothese'). (AWMF-Leitlinie)"

**B1 (640 Zeichen):**
"**Allergie** heißt: Das Immunsystem reagiert falsch. Statt gegen Viren und Bakterien kämpft es gegen harmlose Dinge (zum Beispiel Pollen, Erdnüsse).

**Wichtige Begriffe:**
- **Allergen**: Das, was die Allergie auslöst (Pollen, Milben, Tierhaare, Essen, Medikamente)
- **IgE**: ein spezieller Antikörper im Blut
- **Sensibilisierung**: Der Körper kennt das Allergen und hat IgE — **aber noch keine Allergie!**
- **Allergie**: Symptome kommen bei Kontakt
- **Atopie**: erbliche Neigung zu Allergien

**4 Typen von Allergien** (Coombs/Gell):

**Typ I — Soforttyp (am häufigsten)**
- Reaktion in wenigen Minuten
- Beispiele: Heuschnupfen, Asthma, Nesselsucht, Bienenstich, **Anaphylaxie** (Schock)

**Typ II — Zytotoxisch**: Blutgruppen-Unverträglichkeit

**Typ III — Immunkomplex**: Serumkrankheit

**Typ IV — Spättyp (verzögert)**
- Reaktion nach Stunden/Tagen
- Beispiele: **Kontaktallergie** (Nickel), Transplantat-Abstoßung

**Allergien vermeiden (Primärprävention):**
- Kinder **früh** mit möglichen Allergenen in Kontakt bringen (Erdnuss ab 6 Monaten)
- Stillen
- Haustiere im ersten Lebensjahr (senkt das Risiko)
- **Nicht** zu viel Hygiene ('Dreck-Hypothese')"

- **Erklärungs-Step:** stepType `reveal` (4 Allergie-Typen)
- **Glossar-Begriffe:** [Allergie, Allergen, Atopie, Sensibilisierung, IgE, Anaphylaxie, Urtikaria, Dreck-Hypothese]

### Misconceptions → Distraktoren

**D1: "Sensibilisierung und Allergie sind dasselbe"**
- **Fachbegriff:** Sensibilisierungs-Verwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Sensibilisierung** bedeutet nur: Der Körper hat IgE gegen ein Allergen gebildet. Das kann man im Bluttest messen. **Aber**: Viele sensibilisierte Menschen haben **keine Symptome**. Erst wenn bei Kontakt Symptome auftreten, spricht man von **manifester Allergie**. Merke: IgE ≠ Allergie."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Sensibilisierung** heißt nur: Der Körper kennt das Allergen und hat Antikörper (IgE). Das sieht man im Bluttest. **Aber**: Viele haben keine Symptome. Erst wenn bei Kontakt Symptome kommen, ist es eine **Allergie**. Merke: Erst die Symptome machen die Allergie."

**D2: "Allergien entstehen durch zu wenig Hygiene"**
- **Fachbegriff:** Hygiene-Umkehr
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **genau umgekehrt**: Die **Dreck-Hypothese** (Strachan 1989) besagt: **Zu viel Hygiene** im Kindesalter kann Allergie-Risiko **erhöhen**. Das Immunsystem lernt in einer 'sauberen' Umgebung nicht, was wirklich gefährlich ist. Landkinder mit Haustieren haben weniger Allergien. Merke: Zu viel, nicht zu wenig."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **genau andersherum**: **Zu viel Hygiene** im Kindesalter kann Allergien **erhöhen** (Dreck-Hypothese, 1989). Das Immunsystem lernt in einer 'zu sauberen' Umgebung nicht, was wirklich gefährlich ist. Kinder auf dem Land mit Tieren haben weniger Allergien. Merke: Zu viel ist das Problem."

**D3: "Eine Kontaktallergie (Nickel) ist Typ I — Soforttyp"**
- **Fachbegriff:** Typ-I-IV-Verwechslung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — die **Kontaktallergie (Nickel)** ist **Typ IV (Spättyp)**. Sie wird von **T-Zellen** vermittelt (nicht IgE). Reaktion kommt **nach Stunden bis Tagen** — ein rotes, juckendes Ekzem. Typ I (Soforttyp) wäre innerhalb Minuten — z.B. Heuschnupfen, Bienenstich-Schock. Merke: Nickel = Typ IV."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — die **Nickel-Allergie** ist **Typ IV (Spättyp)**. Sie kommt von **T-Zellen** (nicht IgE). Die Reaktion dauert **Stunden bis Tage** — rotes, juckendes Ekzem. Typ I wäre in Minuten (Heuschnupfen, Bienenstich). Merke: Nickel = Typ IV, nicht Typ I."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Allergie = fehlgeleitete Immunreaktion auf harmlose Substanzen. Wichtige Begriffe: Allergen, IgE, Sensibilisierung (≠ Allergie), Atopie. 4 Typen (Coombs-Gell): Typ I (IgE-vermittelt, sofort — Heuschnupfen, Anaphylaxie), II, III, IV (T-Zellen, verzögert — Nickel). Prävention: frühe Exposition."

**B1 (255 Zeichen):** "Sehr gut. Allergie = Immunsystem reagiert zu stark auf harmlose Sachen. Wichtige Begriffe: Allergen, IgE, Sensibilisierung (≠ Allergie), Atopie. 4 Typen: Typ I (sofort — Heuschnupfen, Anaphylaxie), II, III, IV (verzögert — Nickel). Prävention: früh Kontakt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen Sensibilisierung und Allergie?"
- **Rückseite:** "Sensibilisierung: Körper hat IgE gebildet (messbar im Blut). Allergie: Symptome treten bei Kontakt mit Allergen auf. Viele sensibilisierte Menschen haben keine Allergie."
- **Kategorie:** fachbegriff

---

## Zeit-Budget-Check

**Zielzeit:** 297 Min (12 UE × 45 × 0,55)
**Bausteine (Stufe 2+3):** ~45 Min (11 Bausteine × ~4 Min)
**Verbleibend:** ~250 Min für Situationen + Übungen → PASS

## Cluster-Querverbindungen

Voraussetzung: `gesundheitsmodelle` (Präventionsebenen, IfSG)
Weiterführend: `betriebliche-gesundheitsfoerderung`, `patientenberatung` (Impfgespräch)
Interleaving mit CE-02 (Hygiene), CE-06 (Akutsituation Anaphylaxie)
