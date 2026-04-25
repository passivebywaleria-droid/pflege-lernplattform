# Situationen-Katalog CE-05 — Lernsituationen für kurative Pflege und Patientensicherheit

**Erstellt:** 2026-04-23
**Status:** Entwurf — basiert auf Themen-Katalog CE-05 (12 Themen, 4 Cluster)
**Abhängigkeit:** `specs/ce-05/themen-katalog.md`

---

## Überblick

**6 Lernsituationen** für CE-05, verteilt auf 4 Spiralen:
- Spirale 1 (Grundlagen): 2 Situationen, ~7-9 UE
- Spirale 2 (Vertiefung): 2 Situationen, ~7-9 UE
- Spirale 3 (Komplex): 1 Situation, ~4-5 UE
- Spirale 4 (Prüfung): 1 Situation, ~2 UE

**Gesamt:** ~20-25 UE Situations-Content + Wissensbausteine + Karteikarten = ~340 UE Gesamtlernzeit

**SituationsTyp:** `pflegeprozess` — Standard-6-Phasen.
Phasen: `informieren` → `beobachten` → `planen` → `durchfuehren` → `evaluieren` → `dokumentieren`.

**PflBG-Diversität:** Altersgruppen (junger Erwachsener, mittlerer Erwachsener, alter Mensch), Geschlechter, Herkunft (deutsch, türkisch, syrisch, rumänisch, vietnamesisch) abgedeckt.

---

## Spirale 1 — Grundlagen

### LS-01: Frau Bergmann — Hüft-TEP und perioperative Pflege

> **Der Einstieg ins chirurgische Handeln.** Verbindet CE-02 (Mobilisation, Dekubitus) mit perioperativen Standards.

| Feld | Wert |
|------|------|
| situationId | `ls-bergmann-hueft-tep` |
| ceId | `ce-05` |
| situationsTyp | `pflegeprozess` |
| spirale | 1 |
| geschaetzteUE | 4-5 |
| themen | `perioperative-pflege`, `wundversorgung`, `drainagemanagement`, `akutes-schmerzmanagement`, `vitalzeichenmonitoring` |
| kompetenzbereich | II.1, IV.1 |

#### Patient

**Frau Regina Bergmann**, 68 Jahre, Zustand nach geplanter Hüft-TEP rechts (1. Tag post-OP).

- **Diagnosen:** Z.n. Hüft-TEP rechts (Coxarthrose), arterielle Hypertonie, Adipositas Grad I (BMI 32), Redon-Drainage, PCA-Pumpe mit Piritramid
- **Setting:** Chirurgische Station, Zweibettzimmer
- **Persönlichkeit:** Pensionierte Lehrerin, sehr strukturiert und informationshungrig. Liest Beipackzettel. Hat vor OP viel recherchiert und kennt Fachbegriffe. Mann Walter besucht täglich, ist besorgt um Blutverdünner-Therapie.
- **Besonderheiten:** Gut informierte Patientin — stellt kritische Fragen, prüft 6-R-Regel unbewusst mit. ERAS-Konzept wird angewendet.
- **Zitat:** _"Ist das jetzt das richtige Schmerzmittel? Ich habe gelesen, Piritramid kann Übelkeit machen."_

#### 6 Phasen

**Phase 1 — Informieren (~20-40 Min)**
- Übergabe aus dem Aufwachraum lesen (SBAR): OP-Verlauf, Blutverlust, Anästhesie-Nachwirkungen
- Patientenakte: Medikation, PCA-Einstellungen, Drainage-Protokoll, Anordnungen zur Mobilisation
- Zimmer betreten: Begrüßung, Orientierung (Zeit/Ort), Schmerzstatus direkt erfragen
- _Wissensbaustein T-01: ERAS-Konzept (3 Stufen)_

**Phase 2 — Beobachten & Risiken erkennen (~30-50 Min)**
- Vitalzeichen-Check: RR, Puls, Atemfrequenz, SpO2, Temperatur — NEWS2 berechnen
  - _Wissensbaustein T-08: NEWS2 (3 Stufen)_
- Schmerz erfragen: NRS in Ruhe und bei Bewegung — Ziel ≤3/10
  - _Wissensbaustein T-07: NRS + Schmerz-Assessment (3 Stufen)_
- Wundverband inspizieren: Durchblutung, Nachblutung, Rötung
- Drainage-Kontrolle: Sogindikator, Sekretmenge, Farbe, Konsistenz
  - _Wissensbaustein T-03: Redon-Drainage (3 Stufen)_
- Thrombosezeichen: Beinumfang, Wadenschmerz, Homans-Zeichen
- PONV-Screening: Übelkeit, Erbrechen?

**Phase 3 — Planen (~20-40 Min)**
- Mobilisationsplan: heute Aufstehen an Bettkante (PT zieht nach)
- Schmerzplan: Basis-Analgesie + PCA bei Bedarf, vor Mobilisation Bolus
- Thromboseprophylaxe: niedermolekulares Heparin s.c. + Kompressionsstrümpfe
- Priorisierung: Schmerz kontrollieren VOR Mobilisation
- _Wissensbaustein T-07: WHO-Stufenschema (3 Stufen)_

**Phase 4 — Durchführen (~40-60 Min)**
- PCA-Bolus 20 Min vor Mobilisation, Wirkung abwarten
- Heparin s.c. injizieren (Bauchdecke, Hautfalte, 90°)
- Erste Mobilisation: Bett flach → Seitenlage → Aufrichten → Bettkante
- **KOMPLIKATION 1:** Blutdruck-Abfall beim Aufstehen (orthostatische Hypotonie)
  - Branching: Zurück ins Bett? Beine hochlegen? Kreislauf messen? Arzt rufen?
- **KOMPLIKATION 2:** Ehemann fragt, ob Medikamente "richtig" sind
  - Offene Frage: Wie erklärst du die PCA? Was ist Datenschutz vs. Einbeziehung?
- Verbandwechsel falls durchgeblutet (aseptisch, steriles Set)
- _Wissensbaustein T-02: Aseptischer Verbandwechsel (3 Stufen)_

**Phase 5 — Evaluieren (~15-25 Min)**
- Nachmittags: Schmerz NRS? Drainage-Menge? Mobilisation geschafft?
- PCA-Verbrauch dokumentieren
- Kreislaufparameter stabil?

**Phase 6 — Dokumentieren (~20-30 Min)**
- Pflegebericht: Mobilisationsstufe, Schmerzentwicklung, Drainage-Bilanz
- Drainage-Protokoll (Menge + Farbe)
- NEWS2-Dokumentation und Eskalation bei Anstieg

---

### LS-02: Herr Schuster — Herzinsuffizienz NYHA III

| Feld | Wert |
|------|------|
| situationId | `ls-schuster-herzinsuffizienz` |
| ceId | `ce-05` |
| situationsTyp | `pflegeprozess` |
| spirale | 1 |
| geschaetzteUE | 3-4 |
| themen | `herzkreislauf-pflege`, `vitalzeichenmonitoring`, `infusionstherapie`, `medikamentengabe`, `arzneimittellehre` |
| kompetenzbereich | II.1, II.2, IV.1 |

#### Patient

**Herr Gerhard Schuster**, 74 Jahre, dekompensierte Herzinsuffizienz NYHA III mit Lungenödem.

- **Diagnosen:** Herzinsuffizienz NYHA III, Zustand nach Hinterwandinfarkt (2022), Vorhofflimmern unter Marcumar, Diabetes Typ 2, Beinödeme beidseits
- **Setting:** Innere Station, seit 2 Tagen, PVK am linken Unterarm, kontinuierliches Monitoring (Puls, SpO2)
- **Persönlichkeit:** Ehemaliger Schlosser, bodenständig, eher schweigsam. Ehefrau Ingrid (71) ist täglich da, sehr fürsorglich, will Mann "pampern". Patient möchte "keine Umstände machen" und meldet Beschwerden oft zu spät.
- **Besonderheiten:** Furosemid-Therapie (Bilanzierung!), Marcumar mit Interaktionen, Selbstmessung RR lernen
- **Zitat:** _"Ach, ein bisschen Luftnot, das wird schon. Ich bin halt alt."_

#### 6 Phasen

**Phase 1 — Informieren (~15-25 Min)**
- Übergabe: Dyspnoe verbessert, Gewicht -1,5 kg, Bilanz -800 ml seit gestern
- Akte: Flüssigkeitsbilanz, Gewichtsverlauf, INR-Kontrolle, Medikationsplan (11 Medikamente)
- Kurze Begrüßung, Tagesorientierung

**Phase 2 — Beobachten (~25-40 Min)**
- Dyspnoe-Einschätzung: Atemfrequenz, SpO2, Sprechdyspnoe, Atemmuster
  - _Wissensbaustein T-04: NYHA-Klassifikation (3 Stufen)_
- Ödeme: Beine prüfen, Delle drücken, Knöchel-Umfang
- RR + Puls (unregelmäßig bei Vorhofflimmern)
- Gewicht nüchtern, standardisiert
- Blutzuckerkontrolle (nüchtern)
  - _Wissensbaustein T-08: Blutzuckermessung (3 Stufen)_
- Hautzeichen: Hautturgor, Zyanose, Kapillarfüllzeit
- Flüssigkeitsbilanz der letzten 24h prüfen

**Phase 3 — Planen (~20-30 Min)**
- Medikationsplan durchgehen: 11 Medikamente, Zeiten, Interaktionen
  - _Wissensbaustein T-09: Polypharmazie + Beers-Kriterien (3 Stufen)_
- Bilanzierungsplan: jede Ein-/Ausfuhr dokumentieren
- Patientenedukation: Selbstkontrolle Gewicht zuhause (Warnsignale)

**Phase 4 — Durchführen (~30-50 Min)**
- Morgendliche Medikamentengabe nach 6-R-Regel
  - _Wissensbaustein T-10: 6-R-Regel (3 Stufen)_
- Furosemid i.v. über PVK, Wirkung abwarten, Bilanz anpassen
- **KOMPLIKATION 1:** PVK ist infiltriert (Schwellung, Schmerz bei Spülung)
  - Branching: Ziehen? Umspritzen lassen? Kompresse? Arzt informieren?
  - _Wissensbaustein T-06: VIP-Score + Paravasation (3 Stufen)_
- **KOMPLIKATION 2:** Herr Schuster hustet Schaum ab (Lungenödem-Zeichen)
  - Branching: Oberkörper hoch? O2 erhöhen? Pflegerischen Dienst rufen? Notarzt?
- Ernährungsberatung: salzarme Kost, Trinkmenge begrenzt
- Ehefrau einbeziehen: warum nicht zu viel zu trinken erlaubt ist

**Phase 5 — Evaluieren (~15-20 Min)**
- Bilanz am Abend: Trend negativ?
- Dyspnoe in Ruhe besser?
- Gewicht morgen kontrollieren
- Hat Patient Selbstmesstechnik verstanden?

**Phase 6 — Dokumentieren (~15-25 Min)**
- Bilanzprotokoll, Gewichtsverlauf
- Medikamenten-Dokumentation (Zeit, Menge, Reaktion)
- Pflegebericht: Patientenedukation dokumentieren

---

## Spirale 2 — Vertiefung

### LS-03: Herr Öztürk — MRSA auf Isolierstation

| Feld | Wert |
|------|------|
| situationId | `ls-oeztuerk-mrsa-isolierung` |
| ceId | `ce-05` |
| situationsTyp | `pflegeprozess` |
| spirale | 2 |
| geschaetzteUE | 3-4 |
| themen | `basishygiene-isolierung`, `wundversorgung`, `patientensicherheit-cirs`, `medikamentengabe`, `akutes-schmerzmanagement` |
| kompetenzbereich | I.3, II.1, II.2 |

#### Patient

**Herr Erdem Öztürk**, 56 Jahre, chronische Wunde am Unterschenkel mit MRSA-Befund.

- **Diagnosen:** Ulcus cruris venosum links mit MRSA-Kolonisation, postthrombotisches Syndrom, Diabetes Typ 2, adipös (BMI 35)
- **Setting:** Chirurgische Station, Einzelzimmer mit Kontaktisolierung, seit 5 Tagen
- **Persönlichkeit:** Selbständiger Autoverwerter, laut und freundlich. Arbeitet weiter trotz Wunde. Fühlt sich durch Isolierung gedemütigt ("Bin ich ein Aussätziger?"). Deutsch seit 35 Jahren, fehlerfrei. Tochter Zeynep (29) ist Medizinstudentin und pocht auf korrektes Vorgehen.
- **Besonderheiten:** Isolierungsregeln + PSA-Wechsel + Wundversorgung + Sanierungsschema (Octenidin 5 Tage), Fehlerkultur (Tochter findet, dass letzte Pflegerin "falsche Handschuhe" trug)
- **Zitat:** _"Ich bin doch kein schmutziger Mensch! Und jetzt komm ich hier nicht raus..."_

#### 6 Phasen

**Phase 1 — Informieren (~15-25 Min)**
- Übergabe: MRSA-Status, Sanierungsschema seit Tag 3/5, Wundstatus
- Hygieneplan der Station, Isolierungskarte an der Tür
- PSA bereitstellen (Schutzkittel, Handschuhe, MNS) — Reihenfolge Anlegen durchgehen
- _Wissensbaustein T-11: 5 Momente Händehygiene (3 Stufen)_

**Phase 2 — Beobachten (~20-35 Min)**
- Wundinspektion: Größe (L×B×T), Exsudat, Wundrand, Geruch, Fotodokumentation
  - _Wissensbaustein T-02: TIME-Konzept (3 Stufen)_
- Umgebungshaut: Mazeration, Rötung, Ekzem
- Sanierungs-Status: Mundabstrich, Nasenabstrich-Zeitplan prüfen
- Schmerzassessment: NRS, Qualität des Schmerzes
- Psychosoziale Belastung: Wie geht es mit Isolierung?

**Phase 3 — Planen (~20-30 Min)**
- Wundversorgung planen: Materialien, aseptisches Arbeiten, Entsorgung
- Patientenedukation: Warum Isolierung? Wie lange? Welche Regeln nach Entlassung?
- Angehörigengespräch mit Tochter vorbereiten
- Zimmer-Routine: Was zuerst rein, was zuletzt raus? Abfall-Entsorgung

**Phase 4 — Durchführen (~40-60 Min)**
- PSA korrekt anlegen: Schutzkittel, Maske, Handschuhe — in richtiger Reihenfolge
  - _Wissensbaustein T-11: PSA An- und Ablegen (3 Stufen)_
- Wundversorgung: Spülung Octenidin, Hydrofaser + Schaumstoff, Kompressionsverband
  - _Wissensbaustein T-02: Feuchte Wundbehandlung (3 Stufen)_
- Sanierungs-Nasensalbe (Mupirocin) applizieren
- **KOMPLIKATION 1:** Tochter kommt ohne PSA ins Zimmer
  - Branching: Sofort rausschicken? Freundlich erklären? PSA anlegen lassen?
  - _Wissensbaustein T-12: Fehlerkultur und CIRS (3 Stufen)_
- **KOMPLIKATION 2:** Patient fragt aufgebracht, warum Hilfspflegerin gestern ohne Kittel kam
  - Offene Frage: Was sagst du? CIRS-Meldung? Wie mit Fehler umgehen?
- PSA ablegen am Zimmerausgang (kontaminierte Seite außen!)
- Händedesinfektion

**Phase 5 — Evaluieren (~15-20 Min)**
- Wundstatus Vergleich Foto gestern/heute
- Sanierungsschema: noch 2 Tage, danach Abstriche
- Isolierungsbelastung: Patient + Tochter beruhigt?
- Selbstreflexion: Habe ich alle Hygieneregeln eingehalten?

**Phase 6 — Dokumentieren (~20-30 Min)**
- Wunddokumentation (Foto + Maße + Beschreibung)
- Sanierungsprotokoll (Tag 3 durchgeführt)
- CIRS-Meldung zum Vorfall gestern schreiben (anonymisiert, sachlich)
- Pflegebericht: Angehörigengespräch, Patientenedukation

---

### LS-04: Frau Dinescu — Schmerztitration postoperativ

| Feld | Wert |
|------|------|
| situationId | `ls-dinescu-schmerztitration` |
| ceId | `ce-05` |
| situationsTyp | `pflegeprozess` |
| spirale | 2 |
| geschaetzteUE | 3-4 |
| themen | `akutes-schmerzmanagement`, `infusionstherapie`, `medikamentengabe`, `arzneimittellehre`, `vitalzeichenmonitoring` |
| kompetenzbereich | II.1, II.2, IV.1 |

#### Patient

**Frau Ana Dinescu**, 34 Jahre, Zustand nach Sectio (4. Tag post-OP, schwierige Wundheilung, Wundinfektion).

- **Diagnosen:** Z.n. sekundärer Sectio bei Geburtsstillstand, Wundinfektion Bauchdecke, chronischer Schmerz (Lumbago vorbestehend), stillt Neugeborenes
- **Setting:** Gynäkologische Station, Einzelzimmer, Kind (Tag 4) bei Mutter ("Rooming-in")
- **Persönlichkeit:** Rumänische Patientin, seit 3 Jahren in Deutschland, Deutsch auf B1. Pflegehilfskraft in einem Altenheim. Will "stark" sein, meldet Schmerzen selten direkt. Ehemann arbeitet 300 km entfernt, kommt nur am Wochenende.
- **Besonderheiten:** Schmerz bei Wundinfektion + chronischer Schmerz kombiniert, Stillen schränkt Medikamentenwahl ein, B1-Sprachniveau → Schmerzskala mit Gesichtern
- **Zitat:** _"Geht schon... muss halt. Baby brauchen Mama."_

#### 6 Phasen

**Phase 1 — Informieren (~15-25 Min)**
- Übergabe: Wundinfektion seit gestern, Antibiose i.v. gestartet, Schmerz NRS 7-8 trotz Ibuprofen
- Akte: Stillstatus, Medikamente stillkompatibel, chronischer Rückenschmerz-Anamnese
- Begrüßung in einfacher Sprache, Baby würdigen

**Phase 2 — Beobachten (~25-40 Min)**
- Schmerzassessment strukturiert: NRS + Gesichter-Skala (B1-adaptiert) + Lokalisation + Qualität
  - _Wissensbaustein T-07: Schmerz-Assessments für verschiedene Patientengruppen (3 Stufen)_
- Wundinspektion: Rötung, Schwellung, Sekretion, Geruch
- Vitalzeichen: Tachykardie bei Schmerz? Fieber?
- Lumbalschmerz: unverändert oder verstärkt? Ausstrahlung?
- Stillen: Wie oft? Probleme?

**Phase 3 — Planen (~20-30 Min)**
- WHO-Stufenschema anpassen: Stufe I allein reicht nicht — Stufe II (Tramadol stillkompatibel prüfen)
- Schmerzzielvereinbarung: NRS ≤3 in Ruhe, ≤5 bei Belastung
- Nicht-medikamentös: Wärmflasche Rücken, Lagerung mit Kissen, Atemübungen
  - _Wissensbaustein T-07: Nicht-medikamentöse Schmerzmaßnahmen (3 Stufen)_
- Kommunikation B1: Bildkarten vorbereiten
- _Wissensbaustein T-09: Stillen + Pharmakokinetik (3 Stufen)_

**Phase 4 — Durchführen (~40-60 Min)**
- Antibiose i.v. (Cefuroxim) über PVK — Einlaufzeit beachten
  - _Wissensbaustein T-06: Infusionspumpe Tropfen/Min (3 Stufen)_
- Analgesie titrieren: Paracetamol oral + Ibuprofen + Tramadol bei Durchbruchschmerz
- Wundversorgung: steriler Verbandwechsel mit Wundspülung
- Nicht-medikamentös: Wärmflasche Lendenregion, Stillkissen-Lagerung
- **KOMPLIKATION 1:** Tramadol verursacht Übelkeit, Patientin will es nicht mehr
  - Branching: Metoclopramid geben? Antidot? Alternative? Arzt besprechen?
  - _Wissensbaustein T-09: Opioide UAW (3 Stufen)_
- **KOMPLIKATION 2:** Patientin sagt plötzlich "Ich fühle nichts mehr" (emotional überfordert, Baby schreit)
  - Offene Frage: Wie reagierst du? Hebamme? Psychologischen Dienst? Wer hilft in B1?
- Stillberatung: passende Positionen nach Sectio

**Phase 5 — Evaluieren (~15-20 Min)**
- Schmerzreevaluation nach 1h: NRS besser? Ziel erreicht?
- UAW Tramadol: Übelkeit weg?
- Wundsekretion: Weniger, mehr, unverändert?
- Stillen funktioniert?

**Phase 6 — Dokumentieren (~15-25 Min)**
- Schmerzprotokoll: Verlauf NRS + Medikation + Reaktion
- Wunddokumentation (Bild + Beschreibung)
- Medikamenten-Dokumentation inkl. UAW
- Pflegebericht: Emotionale Belastung + Stillberatung

---

## Spirale 3 — Komplex

### LS-05: Patientenverwechslung — CIRS-Fall und Teamreflexion

| Feld | Wert |
|------|------|
| situationId | `ls-cirs-medikamentenfehler` |
| ceId | `ce-05` |
| situationsTyp | `pflegeprozess` |
| spirale | 3 |
| geschaetzteUE | 4-5 |
| themen | `patientensicherheit-cirs`, `medikamentengabe`, `arzneimittellehre`, `basishygiene-isolierung`, `vitalzeichenmonitoring` |
| kompetenzbereich | I.3, II.2, V.1 |

#### Patient

**Herr Nguyen Van Minh**, 81 Jahre, Zustand nach Sturz mit Schenkelhalsfraktur + gleichzeitig Zimmernachbar Herr Bach (79, Diabetes) — Fast-Medikamentenverwechslung durch Azubi.

- **Diagnosen (Herr Nguyen):** Z.n. konservativ versorgter Schenkelhalsfraktur, leichte Demenz, Hypertonie, Apixaban
- **Diagnosen (Herr Bach, Nachbar):** Diabetes Typ 2 entgleist, BZ-Tagesprofil, Insulintherapie neu eingestellt
- **Setting:** Geriatrische Station, Zweibettzimmer — beide Herren sprechen gebrochen Deutsch (Herr Nguyen vietnamesisch, Herr Bach schlesisch)
- **Persönlichkeit:** Ehemaliger Koch (Nguyen), zurückhaltend. Nachbar Bach ist laut und ungeduldig. Azubi im 2. Lehrjahr fast Insulin dem falschen Patienten gegeben (Bein gewechselt, Patient aufgestanden, Verwechslung bemerkt VOR der Injektion)
- **Besonderheiten:** Nahtloser Übergang zwischen Beinahe-Fehler (CIRS Level 1) und echtem Fehlerrisiko, Reflexion über System (keine Barcodes, Namensbändchen schwer lesbar)
- **Zitat (Azubi):** _"Ich wollte doch alles richtig machen... Wieso hab ich das nicht gemerkt?"_

#### 6 Phasen

**Phase 1 — Informieren (~20-30 Min)**
- Übergabe: Beide Patienten, Medikationsplan beider
- Vorfall vom Vormittag: Azubi hatte Insulin-Spritze (für Herr Bach) und wollte sie Herrn Nguyen injizieren — Namensbändchen-Check verhinderte Schaden
- CIRS-System der Klinik: Meldung intern verfasst
- _Wissensbaustein T-12: CIRS-Prinzip (3 Stufen)_

**Phase 2 — Beobachten (~30-45 Min)**
- Herr Nguyen: Mobilisation, Schmerz, Apixaban-Monitoring (Blutungszeichen)
- Herr Bach: BZ-Kontrolle, Insulinstellen, Verständnis Insulintherapie
- Zimmerorganisation beobachten: Namensbändchen-Lesbarkeit, Betten-Kennzeichnung, Medikamenten-Tabletts
- Kommunikationsbeobachtung: Verstehen Patienten sich gegenseitig? Verwechslungsrisiko?

**Phase 3 — Planen (~25-40 Min)**
- Systemanalyse planen: Warum konnte es fast passieren?
  - Menschliche Faktoren: Azubi müde? Zeitdruck? Nicht eingelernt?
  - Systemfaktoren: Keine Barcodes, 6-R-Regel nicht konsequent
- Maßnahmen planen: Namensbändchen ersetzen (besser lesbar), Medikamentencheck im Vier-Augen-Prinzip bei high-alert Medikamenten
  - _Wissensbaustein T-10: High-Alert Medikamente + Vier-Augen-Prinzip (3 Stufen)_
- CIRS-Meldung strukturieren: Was ist passiert? Warum? Was hat Schaden verhindert?
- Azubi-Gespräch vorbereiten: "Just Culture" — System statt Person

**Phase 4 — Durchführen (~45-60 Min)**
- Medikamentengabe beider Patienten mit konsequenter 6-R-Regel
  - _Wissensbaustein T-10: 6-R-Regel Vertiefung (3 Stufen)_
- Herr Nguyen: Apixaban oral, Blutdruck-Mittel, Schmerzmedikation
- Herr Bach: Insulin s.c. (ventroglutäal, Stellenwechsel dokumentiert)
- Bei jedem Patienten: Namen laut sagen, Namensbändchen prüfen, Patient identifiziert sich selbst
- **KOMPLIKATION 1:** Herr Nguyen versteht "Geburtsdatum bitte" nicht — wie identifizieren?
  - Branching: Tochter anrufen? Foto in Akte? Namensbändchen + Gesichtsabgleich? Zwei-Quellen-Prinzip?
- **KOMPLIKATION 2:** Azubi bricht in Tränen aus, will kündigen
  - Offene Frage: Wie reagierst du? Fehlerkultur zeigen? Pflegepädagogin einbinden?
  - _Wissensbaustein T-12: Just Culture und psychologische Sicherheit (3 Stufen)_
- **KOMPLIKATION 3:** Herr Bach beschwert sich laut über "Unfähigkeit" der Azubi
  - Wie schützt du Azubi-Würde? Wie mit Patienten-Kritik umgehen?
- Teambesprechung initiieren: Systemänderung vorschlagen

**Phase 5 — Evaluieren (~20-30 Min)**
- Beide Patienten: Medikation korrekt verabreicht?
- Azubi: Gefühlslage nach Reflexionsgespräch?
- Teamabend: Findet Klausur zum Fall statt?
- Systemänderung angestoßen (neue Namensbändchen)?

**Phase 6 — Dokumentieren (~25-40 Min)**
- CIRS-Meldung final (anonymisiert, sachlich, nicht anklagend)
  - _Wissensbaustein T-12: CIRS-Meldung formulieren (3 Stufen)_
- Medikamenten-Dokumentation für beide Patienten
- Pflegebericht Azubi-Betreuung (nicht schuldzuweisend)
- Empfehlung an Stationsleitung: Vorschlag für Barcode-System

---

## Spirale 4 — Prüfung

### LS-06: Prüfungsfall — Komplexe post-operative Situation

| Feld | Wert |
|------|------|
| situationId | `ls-pruefung-ce05` |
| ceId | `ce-05` |
| situationsTyp | `pflegeprozess` |
| spirale | 4 |
| geschaetzteUE | 2 |
| themen | Alle CE-05-Themen möglich |
| kompetenzbereich | II.1, II.2, I.3, IV.1 |

#### Patient

**Frau Khalil Zahra**, 52 Jahre, Z.n. Cholezystektomie laparoskopisch (2. Tag post-OP) + perioperative Komplikation (Wundinfektion + Fieber).

- **Setting:** Chirurgische Station, Einzelzimmer
- **Diagnosen:** Z.n. lap. CCE bei Cholezystolithiasis, Wundinfektion (Hauptzugang Nabel), Fieber 38,7°C, Diabetes Typ 2 (Metformin pausiert perioperativ), Jacksonische Drainage
- **Besonderheiten:** Spricht Arabisch + Deutsch B2, Ehemann verreist (Jordanien), Tochter kommt abends — Patientin allein tagsüber

#### Prüfungsmodus

- Kein KI-Feedback bis zur Abgabe
- Keine Wissensbausteine (Schülerin muss Wissen abrufen)
- Zeitdruck (~90 Min)
- Alle 6 Phasen, überwiegend offene Fragen (Freitext)
- Bewertung: NEWS2-Berechnung, Wundassessment, Medikamentenplan, 6-R-Regel-Anwendung, SBAR-Übergabe an Arzt

---

## Situations-Übersicht

| # | Patient | Spirale | UE | Themen (Schwerpunkte) | Altersgruppe | Herkunft |
|---|---------|---------|----|-----------------------|--------------|----------|
| LS-01 | Frau Bergmann, 68 | 1 | 4-5 | Perioperativ, Wunde, Drainage, Schmerz | Alt | deutsch |
| LS-02 | Herr Schuster, 74 | 1 | 3-4 | Herz, Vitalzeichen, Medikation | Alt | deutsch |
| LS-03 | Herr Öztürk, 56 | 2 | 3-4 | Hygiene, MRSA, Wunde, CIRS | Mittlerer Erw. | türkisch |
| LS-04 | Frau Dinescu, 34 | 2 | 3-4 | Schmerz, Infusion, Arzneimittel | Junger Erw. | rumänisch |
| LS-05 | Herren Nguyen + Bach | 3 | 4-5 | CIRS, Medikamentensicherheit, Team | Alt | vietnamesisch + deutsch |
| LS-06 | Frau Khalil, 52 | 4 | 2 | Prüfung — alle Themen | Mittlerer Erw. | syrisch |

---

## Themen-Abdeckung

| Thema | In welchen Situationen? |
|-------|------------------------|
| Perioperative Pflege (T-01) | LS-01, LS-06 |
| Wundversorgung (T-02) | LS-01, LS-03, LS-06 |
| Drainagemanagement (T-03) | LS-01, LS-06 |
| Herzkreislauf-Pflege (T-04) | LS-02 |
| Atemwegs-Pflege (T-05) | LS-02 (implizit Lungenödem), LS-06 |
| Infusionstherapie (T-06) | LS-02, LS-04, LS-06 |
| Akutes Schmerzmanagement (T-07) | LS-01, LS-03, LS-04, LS-06 |
| Vitalzeichenmonitoring (T-08) | **Alle** |
| Arzneimittellehre (T-09) | LS-02, LS-04, LS-05 |
| Medikamentengabe (T-10) | LS-02, LS-03, LS-05, LS-06 |
| Basishygiene & Isolierung (T-11) | LS-03, LS-05 |
| Patientensicherheit & CIRS (T-12) | LS-03, LS-05 |

**Abdeckung:** 12 von 12 Themen in mindestens einer Situation.

---

## Adaptivität: Wie Schüler verschiedene Wege gehen

### Beispiel LS-02, Phase 4 (Medikamentengabe)

**Starke Schülerin (C1, Vorerfahrung):**
```
Step: 6-R-Regel anwenden
→ Freitext: "Beschreibe, wie du die Gabe von Furosemid i.v. planst."
→ Antwort vollständig → Weiter zur Komplikation
→ Kein Wissensbaustein nötig
→ Dauer Phase 4: ~30 Min
```

**Mittlere Schülerin (B2, erste Praxiserfahrung):**
```
Step: 6-R-Regel als Checkliste
→ Sequencing: Ordne 6 Schritte
→ Falsche Reihenfolge → Wissensbaustein T-10 Stufe 2 (Hinweis)
→ Dann: Konkrete Situation durchspielen
→ Dauer Phase 4: ~45 Min
```

**Schwache Schülerin (B1, keine Praxis):**
```
Step: Was bedeutet die 6-R-Regel?
→ Zunächst: Erklärung Stufe 3 + B1 + Glossar + TTS
→ Dann: Bildkarten-Zuordnung (Patient, Medikament, Weg, Zeit, Dokumentation)
→ Dann: Simulierte Gabe Schritt für Schritt
→ Dann: MC-Kontrollfragen
→ Dauer Phase 4: ~75 Min
```

---

## Offene Entscheidungen

| # | Frage | Kandidat |
|---|-------|----------|
| S1 | 6 Situationen genug? | Kann auf 7 erweitert werden (z.B. Thoraxdrainage-Fall) |
| S2 | Prüfungsfall mit Ehemann abwesend — zu schwer? | Bewusst gewählt, um Isolations-Thema (Sprache + Alleinsein) zu prüfen |
| S3 | LS-05 als Doppel-Patient-Situation? | Einzigartig — thematisiert Verwechslungsgefahr authentisch |
| S4 | Stomapflege als eigene Situation? | Bereits in CE-02 LS-09 (Nguyen) abgedeckt — CE-05 Fokus bleibt kurativ |
