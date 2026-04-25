# Situationen-Katalog CE-06 — Lernsituationen für Akutsituationen und Notfälle

**Erstellt:** 2026-04-23
**Status:** Entwurf — basiert auf Themen-Katalog CE-06 (8 Themen, 3 Cluster)
**Abhängigkeit:** `specs/ce-06/themen-katalog.md`

---

## Überblick

**5 Lernsituationen** für CE-06, verteilt auf 3 Spiralen:
- Spirale 1 (Grundlagen): 2 Situationen, ~6-8 UE
- Spirale 2 (Vertiefung): 2 Situationen, ~6-8 UE
- Spirale 3 (Prüfung): 1 Situation, ~2 UE

**Gesamt:** ~14-18 UE Situations-Content + Wissensbausteine + Karteikarten = ~120 UE Gesamtlernzeit

**SituationsTyp:** `akutsituation` — Notfall-Phasen, KEIN Standard-Pflegeprozess.
Phasen: `erkennen` → `alarmieren` → `erstmassnahmen` → `uebergeben` → `reflektieren` (5 Phasen!).

**Besonderheit:** Kurze Zeitfenster, hohe Kognitive Last, Teamkommunikation (SBAR, Closed-Loop) zentral. Reflexion dient der Verarbeitung belastender Situationen (Debriefing).

**PflBG-Diversität:** Altersgruppen (Säugling bis alter Mensch), Geschlechter, Herkunft abgedeckt.

---

## Spirale 1 — Grundlagen

### LS-01: Herr Wagner — Reanimation auf Normalstation

> **Der Klassiker.** BLS-Algorithmus in echter Stationssituation, mit Team.

| Feld | Wert |
|------|------|
| situationId | `ls-wagner-reanimation` |
| ceId | `ce-06` |
| situationsTyp | `akutsituation` |
| spirale | 1 |
| geschaetzteUE | 3-4 |
| themen | `reanimation-bls`, `kardiovaskulaere-notfaelle`, `notfallkommunikation-sbar`, `schockzustaende` |
| kompetenzbereich | II.1, I.1 |

#### Patient

**Herr Klaus Wagner**, 67 Jahre, stationärer Patient wegen instabiler Angina pectoris — plötzliche Bewusstlosigkeit beim Gang zur Toilette.

- **Diagnosen:** Instabile Angina pectoris, Zustand nach zwei Herzinfarkten (2019, 2023), Diabetes Typ 2, Vorhofflimmern unter Eliquis, Adipositas (BMI 31)
- **Setting:** Kardiologische Normalstation, Flur vor Patientenzimmer 7 — andere Patienten im Flur, 08:15 Uhr (Schichtwechsel-Ende)
- **Persönlichkeit:** Ehemaliger Fernfahrer, liebenswürdig, nennt alle Pflegekräfte "Schwester" oder "Bruder". Kam wegen Schmerzen, fühlte sich heute "besser", wollte alleine zur Toilette gehen
- **Besonderheiten:** Kollaps im Flur = Zeuge unmittelbar dabei, Defi-Standort 30 m entfernt, Stationsarzt auf anderer Station
- **Zitat (2 Min vor Ereignis):** _"Ich schaff das schon, Schwester. Muss mal aufs Klo."_

#### 5 Phasen (akutsituation)

**Phase 1 — Erkennen (~15-25 Min)**
- Szene: Patient liegt im Flur, reagiert nicht auf Ansprache
- 10-Punkte-Check: Bewusstsein, Atmung, Kreislaufzeichen
  - _Wissensbaustein T-04: Bewusstseinsprüfung + GCS (3 Stufen)_
- Atmung prüfen (Sehen, Hören, Fühlen max. 10 Sek)
- Schnappatmung als No-Atmung werten!
  - _Wissensbaustein T-05: Schnappatmung erkennen (3 Stufen)_
- Entscheidung: Herz-Kreislauf-Stillstand → BLS sofort starten

**Phase 2 — Alarmieren (~10-15 Min)**
- Hilfe rufen: laut „Notfall!", Kollegin schickt
- Reanimationsteam intern alarmieren (Code Blue/98)
  - _Wissensbaustein T-07: Interner Notruf + Code Blue (3 Stufen)_
- AED holen lassen: konkret eine Person ansprechen („Sie, holen den Defi!")
- Uhrzeit merken / notieren (Zeugen-Dokumentation)

**Phase 3 — Erstmaßnahmen (~30-45 Min)**
- Harten Untergrund: Patient im Flur belassen, nicht ins Zimmer ziehen (Zeitverlust)
- HDM starten: Druckpunkt, Tiefe 5-6 cm, Frequenz 100-120/min
  - _Wissensbaustein T-05: BLS-Algorithmus (3 Stufen)_
- 30:2 Verhältnis (HDM:Beatmung) mit Beatmungsmaske (Ambu-Beutel)
- AED anschließen: Pads (rechts parasternal + links lateral), Analysephase abwarten
  - _Wissensbaustein T-05: AED-Anwendung (3 Stufen)_
- **KOMPLIKATION 1:** AED empfiehlt Schock — wer drückt? Alle weg vom Patienten?
  - Branching: Ausreichend klar "Alle weg!" gesagt? Schock ausgelöst? HDM sofort weiter?
- **KOMPLIKATION 2:** HDM-Wechsel alle 2 Min — kommuniziert das Team (Closed-Loop)?
  - Offene Frage: Wie sagst du "Ich übernehme"?
  - _Wissensbaustein T-07: Closed-Loop-Kommunikation (3 Stufen)_
- Reversible Ursachen (4H 4T) überlegen: Hypoxie? Herzinfarkt?

**Phase 4 — Übergeben (~20-30 Min)**
- Reanimationsteam übernimmt (Arzt + Intensivpflege)
- SBAR-Übergabe:
  - **S:** „67-jähriger Patient, kollabiert im Flur um 08:18 Uhr"
  - **B:** „Aufnahme wegen instabiler AP, Z.n. 2 Infarkten, VHF unter Eliquis"
  - **A:** „Schnappatmung, kein Puls tastbar, HDM seit 08:20, 1 Schock um 08:25"
  - **R:** „Übernahme Rea-Team, brauchen i.v.-Zugang + Medikamente"
  - _Wissensbaustein T-07: SBAR-Struktur Notfall (3 Stufen)_
- Reanimation fortführen, bis Team vollständig übernommen hat
- Dokumentation: genaue Zeiten, HDM-Dauer, Schockzahl, Medikamente (wer gab was wann)

**Phase 5 — Reflektieren (~15-25 Min)**
- Unmittelbar nach der Reanimation: Teamdebriefing initiieren
  - _Wissensbaustein T-07: Debriefing (3 Stufen)_
- Was lief gut? HDM-Qualität? Team-Kommunikation?
- Was lief weniger gut? AED-Weg zu lang? Rollenverteilung unklar?
- Emotionale Verarbeitung: Wie geht es dem Team? (Kaffeepause, Supervision-Angebot)
- **KOMPLIKATION 3:** Kollegin aus Frühdienst bricht in Tränen aus, war erstmals bei Rea
  - Offene Frage: Was sagst du? Welche Unterstützung gibt es (Seelsorge, Betriebspsychologe)?
- Persönliche Reflexion: Habe ich alle Schritte korrekt befolgt?
- Systemische Frage: Defi-Standort optimieren?

---

### LS-02: Frau Jusufi — Anaphylaxie nach Antibiotikagabe

| Feld | Wert |
|------|------|
| situationId | `ls-jusufi-anaphylaxie` |
| ceId | `ce-06` |
| situationsTyp | `akutsituation` |
| spirale | 1 |
| geschaetzteUE | 3-4 |
| themen | `respiratorische-notfaelle`, `schockzustaende`, `notfallkommunikation-sbar`, `reanimation-bls` |
| kompetenzbereich | II.1, I.1 |

#### Patient

**Frau Fatime Jusufi**, 29 Jahre, stationär wegen Pyelonephritis — Anaphylaxie Grad III während erster Cefuroxim-i.v.-Gabe.

- **Diagnosen:** Pyelonephritis rechts, stationär seit 1 Tag, keine bekannten Allergien in Anamnese, 22. SSW (schwanger!)
- **Setting:** Gynäkologie/Innere Mischstation, Patientenzimmer, 11:30 Uhr — Infusion läuft seit 4 Minuten
- **Persönlichkeit:** Kosovarische Staatsbürgerin, lebt seit 6 Jahren in Deutschland, Deutsch fließend. Erstes Kind, aufgeregt und ängstlich seit Aufnahme. Ehemann am Arbeitsplatz 60 km entfernt.
- **Besonderheiten:** Schwangerschaft (!) — Medikamentenwahl eingeschränkt, Lagerung besonders (Linksseitenkippung), Doppel-Patienten-Verantwortung (Mutter + Kind)
- **Zitat (Minute 1 der Infusion):** _"Ist das normal, dass es so kribbelt im Gesicht? Und warum juckt mir die Hand?"_

#### 5 Phasen (akutsituation)

**Phase 1 — Erkennen (~15-25 Min)**
- Patientin klagt über Kribbeln, Juckreiz, Hitzegefühl → sofort ernst nehmen
- Inspektion: Urtikaria (Quaddeln) an Armen, Gesichtsrötung, geschwollene Lippen
- Atmung: Atemnot entwickelt sich, Stridor? Giemen?
  - _Wissensbaustein T-02: Anaphylaxie-Stufen Grad I-IV (3 Stufen)_
- RR fällt: 95/55 → 80/45 mmHg, Puls steigt auf 130/min
- Einstufung: Grad III — systemische Reaktion mit Kreislauf + Atemwegsbeteiligung
  - _Wissensbaustein T-03: Schock erkennen — distributiv (3 Stufen)_
- Schwangerschaft: Fokus auch auf fetale Perfusion (uteroplazentare Durchblutung)

**Phase 2 — Alarmieren (~5-10 Min)**
- Infusion SOFORT stoppen (wichtigste Einzelmaßnahme!)
- Kollegin rufen: "Anaphylaxie, brauche Adrenalin"
- Stationsarzt rufen: konkret "kommen Sie JETZT, Anaphylaxie in Zimmer 14"
- Notfallwagen ans Bett
- Gynäkologie informieren (wegen Schwangerschaft + mögliches CTG)

**Phase 3 — Erstmaßnahmen (~30-45 Min)**
- Lagerung: Schocklage bei Kreislaufreaktion, ABER wegen Schwangerschaft Linksseitenkippung 15°
  - _Wissensbaustein T-05: Schwangere in der Reanimation (3 Stufen)_
- O2-Gabe: 10-15 l/min über Maske mit Reservoir
- Adrenalin i.m. 0,5 mg (ventroglutäal) nach Anordnung Arzt
  - _Wissensbaustein T-02: Adrenalin bei Anaphylaxie (3 Stufen)_
- Weiterer großlumiger Zugang, Volumenbolus kristalloid
- Kontinuierliches Monitoring: RR, Puls, SpO2, AF
- **KOMPLIKATION 1:** Atemnot verschlechtert sich, Stridor deutlich hörbar
  - Branching: Noch einmal Adrenalin? Anästhesist rufen für Intubation? Notfall-Koniotomie-Set vorbereiten?
- **KOMPLIKATION 2:** Patientin in Panik: "Mein Baby! Stirbt mein Baby?"
  - Offene Frage: Wie beruhigst du, ohne falsche Hoffnung zu machen?
- **KOMPLIKATION 3:** Kreislauf stabilisiert sich nach Adrenalin, Fetalzeichen unklar
  - Gynäkologe kommt mit CTG, interprofessionelle Übergabe

**Phase 4 — Übergeben (~20-30 Min)**
- Übergabe an IMC/Intensiv (Anaphylaxie immer ≥24h Überwachung wegen Biphasischer Reaktion)
  - _Wissensbaustein T-02: Biphasische Anaphylaxie (3 Stufen)_
- SBAR-Übergabe:
  - **S:** „29-jährige Schwangere (22. SSW), Grad-III-Anaphylaxie unter Cefuroxim"
  - **B:** „Pyelonephritis, keine bekannten Allergien, Erstgabe Cefuroxim 11:30 Uhr"
  - **A:** „Nach Adrenalin 0,5 mg i.m. Kreislauf stabil, CTG unauffällig, aber ≥24h Überwachung erforderlich"
  - **R:** „IMC-Verlegung, antihistaminika + Prednisolon laufen, Gynäkologie hat CTG gelegt"
- Angehörigen-Info: Ehemann anrufen (auf Wunsch der Patientin)

**Phase 5 — Reflektieren (~15-25 Min)**
- Teamdebriefing nach Verlegung
- Was lief gut? Schnelle Erkennung? Infusionsstopp?
- Was könnte besser laufen? War Allergieanamnese vollständig? (keine bekannten Allergien ≠ keine Allergien)
- Systemfrage: Wie wird bei Erstgabe von Antibiotika überwacht? Personal unmittelbar verfügbar?
- CIRS-Meldung schreiben: nicht weil Fehler passiert ist, sondern zur Systemverbesserung
- Persönliche Reflexion: Habe ich die ersten Zeichen ernst genommen? Oft werden frühe Symptome als „Nebeneffekt" abgetan

---

## Spirale 2 — Vertiefung

### LS-03: Herr Ríos — Synkope während Dialyse

| Feld | Wert |
|------|------|
| situationId | `ls-rios-synkope-dialyse` |
| ceId | `ce-06` |
| situationsTyp | `akutsituation` |
| spirale | 2 |
| geschaetzteUE | 3-4 |
| themen | `kardiovaskulaere-notfaelle`, `schockzustaende`, `neurologische-notfaelle`, `notfallkommunikation-sbar` |
| kompetenzbereich | II.1, I.1 |

#### Patient

**Herr Miguel Ríos**, 63 Jahre, chronische Niereninsuffizienz im Endstadium — während Dialyse plötzliche Synkope.

- **Diagnosen:** Chronische Niereninsuffizienz Stadium 5, Hämodialyse 3×/Woche, Diabetes mellitus Typ 2, diabetische Nephropathie, Hypertonie, Shunt linker Unterarm
- **Setting:** Dialysezentrum, während 2. Stunde Dialyse, 14:15 Uhr — 5 weitere Patienten anwesend, 2 Pflegekräfte
- **Persönlichkeit:** Chilenischer Patient, seit 40 Jahren in Deutschland, Deutsch perfekt. Ehemaliger Bauleiter, rational, macht schwarzen Humor über seine Dialyse. Ehefrau Carmen ist da (wartet immer im Warteraum).
- **Besonderheiten:** Dialyse-induzierte Hypotonie vs. kardiales Ereignis — Differentialdiagnose wichtig, Shuntschutz beim Umlagern
- **Zitat (Stunde 1, noch bei Bewusstsein):** _"Heute fühle ich mich komisch. Aber wahrscheinlich das Wetter."_

#### 5 Phasen (akutsituation)

**Phase 1 — Erkennen (~15-25 Min)**
- Patient wird plötzlich blass, verdreht Augen, antwortet nicht mehr
- Monitor zeigt: RR-Abfall auf 70/40, HF 60 → 48, SpO2 stabil
- Bewusstseinsprüfung: auf Schmerzreiz reagiert, GCS geschätzt 10-11
  - _Wissensbaustein T-04: GCS schnell einschätzen (3 Stufen)_
- Atmung vorhanden, Puls tastbar aber schwach
- Differenzialdiagnose:
  - Dialyse-induzierte Hypotonie (häufig) → Volumenausgleich
  - Kardiales Ereignis (Herzinfarkt, Arrhythmie) → EKG
  - Hypoglykämie (Diabetes!) → BZ
  - TIA/Schlaganfall → FAST
  - _Wissensbaustein T-01: FAST-Schema (3 Stufen)_
- BZ-Kontrolle sofort: 48 mg/dl (Hypoglykämie bestätigt!)
  - _Wissensbaustein T-04: Hypoglykämie erkennen (3 Stufen)_

**Phase 2 — Alarmieren (~5-10 Min)**
- Kollegin rufen, Dialyse-Arzt informieren
- Arzt priorisieren: Dialyse reduzieren? Stoppen?
- Rettungsdienst-Indikation prüfen (bei Stabilisierung nicht nötig, bei Verschlechterung ja)

**Phase 3 — Erstmaßnahmen (~30-45 Min)**
- Dialyse: UF-Rate auf 0 reduzieren (kein weiterer Flüssigkeitsentzug)
- Trendelenburg-Lage (Oberkörper flach, Beine hoch)
- Bei Hypoglykämie + Bewusstseinstrübung: Glukose 40% i.v. 10-20 ml in Dialyse-Zugang (auf ärztliche Anordnung)
  - _Wissensbaustein T-04: Hypoglykämie-Behandlung bewusstlos (3 Stufen)_
- **KOMPLIKATION 1:** Shunt nicht für Medikamentengabe freigeben (nur Dialyse)
  - Branching: Wo sonst Zugang legen? Venen rar bei Dialysepatient!
- Kontinuierliches Monitoring: RR, HF, BZ alle 5 Min
- Parallel: 12-Kanal-EKG ableiten, um kardiales Ereignis auszuschließen
  - _Wissensbaustein T-01: EKG-Veränderungen erkennen (3 Stufen)_
- **KOMPLIKATION 2:** Patient wird wach, will aufstehen, versteht Lage nicht
  - Offene Frage: Wie kommunizierst du? Wie verhinderst du, dass er den Shunt-Zugang herausreißt?
- **KOMPLIKATION 3:** Ehefrau sieht Aufruhr durch Glastür, wird unruhig
  - Wie informieren? Wer spricht mit ihr? Datenschutz vs. Angehörigen-Info

**Phase 4 — Übergeben (~20-30 Min)**
- Übergabe an Stationsarzt, evtl. Übernahme auf Innere Station
- SBAR-Übergabe:
  - **S:** „63-jähriger Dialysepatient, Synkope während Stunde 2 der HD"
  - **B:** „CNI Stadium 5, DM Typ 2 unter Insulin — hat vor Dialyse gefrühstückt, aber ungewöhnlich wenig"
  - **A:** „Hypoglykämie 48 mg/dl, nach Glukose-Gabe BZ 120, wach, orientiert, EKG unauffällig"
  - **R:** „Verlegung Innere zur 24h-Überwachung, BZ-Profil engmaschig, Insulinanpassung"
- Shunt-Funktion prüfen und dokumentieren
- Ehefrau persönlich informieren

**Phase 5 — Reflektieren (~15-20 Min)**
- Teamdebriefing: Warum wurde Hypoglykämie nicht früher erkannt?
- Frühwarnzeichen übersehen: „Ich fühle mich komisch" — war das Warnsignal?
- Systemfrage: BZ-Routine-Kontrolle während Dialyse bei Diabetikern?
- Patienten-Edukation: Insulinanpassung bei Dialyse-Tagen besprechen mit Patient + Diabetologe
- Persönliche Reflexion: Habe ich Anzeichen rechtzeitig wahrgenommen?

---

### LS-04: Frau Lehmann — Sturz mit SHT im Pflegeheim

| Feld | Wert |
|------|------|
| situationId | `ls-lehmann-sht-sturz` |
| ceId | `ce-06` |
| situationsTyp | `akutsituation` |
| spirale | 2 |
| geschaetzteUE | 3-4 |
| themen | `traumatologische-erstversorgung`, `neurologische-notfaelle`, `notfallkommunikation-sbar`, `schockzustaende` |
| kompetenzbereich | II.1, I.1 |

#### Patient

**Frau Anneliese Lehmann**, 86 Jahre, Sturz im Pflegeheim beim nächtlichen Toilettengang — Schädel-Hirn-Trauma mit initial unklarem Bewusstsein.

- **Diagnosen:** Mittelschwere vaskuläre Demenz, Osteoporose, Antikoagulation mit Apixaban (wegen VHF!), Sturz-Anamnese (3 Stürze in 6 Monaten)
- **Setting:** Pflegeheim (stationäre Einrichtung), Zimmer, 02:45 Uhr Nacht — Nachtdienst mit 2 Pflegekräften für 48 Bewohner
- **Persönlichkeit:** Ehemalige Verkäuferin, war schon tagsüber unruhig, ruft oft "Mutti!". Tochter Gudrun (58) hat Vorsorgevollmacht, ist emotional engagiert, kritisch gegenüber Heim
- **Besonderheiten:** Antikoagulation → hohe Blutungsneigung → mögliche intrakranielle Blutung auch nach „leichtem" Sturz, Demenz erschwert GCS-Beurteilung, nachts reduziertes Team, Haftungsfragen
- **Zitat (nach dem Sturz, verwirrt):** _"Ich wollte nur... Wo ist Mutti? Lasst mich los!"_

#### 5 Phasen (akutsituation)

**Phase 1 — Erkennen (~15-25 Min)**
- Sturzgeräusch gehört → Zimmer betreten
- Frau Lehmann liegt auf dem Boden neben Bett, blutet am Kopf (Platzwunde rechte Stirn)
- Bewusstseinsprüfung: reagiert auf Ansprache verwirrt, „wo bin ich?"
  - _Wissensbaustein T-04: GCS bei Demenz (3 Stufen)_
- ABCDE-Schema:
  - **A:** Atemweg frei
  - **B:** Atmung spontan, unauffällig
  - **C:** Puls 85, RR noch nicht gemessen, Hautfarbe blass
  - **D:** GCS geschätzt 13-14 (verwirrt, aber reagiert)
  - **E:** Platzwunde Stirn, Hämatom am rechten Auge, weitere Verletzungen prüfen
  - _Wissensbaustein T-06: ABCDE-Schema (3 Stufen)_
- Wichtig: Antikoagulation = intrakranielle Blutung möglich auch bei „kleinem" Sturz
- HWS-Verletzung ausschließen: Bewegung kontrollieren!

**Phase 2 — Alarmieren (~5-10 Min)**
- Kollegin rufen, Zimmer sichern
- Notarzt 112 rufen — SHT unter Antikoagulation = immer Klinikeinweisung
  - _Wissensbaustein T-07: Notruf 112 — 5 W-Fragen (3 Stufen)_
- Heimarzt informieren (nachts oft nur ärztlicher Bereitschaftsdienst)
- Tochter anrufen (Vorsorgevollmacht, will immer informiert werden)

**Phase 3 — Erstmaßnahmen (~30-45 Min)**
- HWS-Stabilisierung: Kopf manuell halten, wenig bewegen
- Patientin nicht hochheben, auf Boden belassen bis Notarzt da ist (HWS-Trauma!)
  - _Wissensbaustein T-06: HWS-Trauma bei Sturz älterer Menschen (3 Stufen)_
- Platzwunde: sterile Kompresse, leichter Druck
- Wärmeerhalt: Decken
- Vitalzeichen alle 5 Min: RR, Puls, SpO2, GCS
- **KOMPLIKATION 1:** GCS fällt von 14 auf 11 innerhalb 10 Min (ein Warnsignal!)
  - Branching: Notarzt nochmal drängeln? Rettungshubschrauber anfordern lassen? Nur warten?
  - _Wissensbaustein T-04: Cushing-Trias bei Hirndruck (3 Stufen)_
- **KOMPLIKATION 2:** Frau Lehmann wird aggressiv, schlägt nach dir
  - Offene Frage: Wie schützt du dich? Wie die Patientin (Sturz nochmal)? Deeskalation?
- **KOMPLIKATION 3:** Andere Bewohnerin klingelt mit Notrufknopf — Personalnot nachts
  - Wie priorisieren? Kollegin zum Klingeln, du bei Frau Lehmann?

**Phase 4 — Übergeben (~20-30 Min)**
- Übergabe an Notarzt + Rettungsdienst vor Ort
- SBAR-Übergabe:
  - **S:** „86-jährige Heimbewohnerin, Sturz Toilettengang 02:30 Uhr, SHT mit Platzwunde Stirn"
  - **B:** „Mittelschwere Demenz, VHF unter Apixaban, 3 Stürze in 6 Monaten"
  - **A:** „Initial GCS 14, aktuell 11 — Verschlechterung! HWS bisher nicht verletzt, Vitalparameter stabil aber GCS fällt"
  - **R:** „Transport in neurochirurgische Klinik, CT-Indikation gegeben, Antikoagulation muss berücksichtigt werden"
- Medikamentenliste, Patientenverfügung (!) mitgeben
- Tochter informieren, wohin Patientin verlegt wird

**Phase 5 — Reflektieren (~15-25 Min)**
- Teamdebriefing im Nachtdienst (kurz, Langversion in Frühbesprechung)
- Sturzanalyse: War Sturzrisiko bekannt? Prophylaxen durchgeführt?
  - Niedrigbett? Bettgitter? Nachtlicht? Bewegungsmelder?
- Systemfrage: Nachtdienst-Besetzung ausreichend? (2 Pflegekräfte für 48 Bewohner)
- Dokumentation: Sturzprotokoll + Unfallanzeige
- Angehörigen-Kommunikation am Morgen (Tochter verlangt Gespräch)
- Persönliche Reflexion: War ich aufmerksam? Hätte ich Sturz verhindern können?
- Belastungsverarbeitung: Sturz eines bekannten Bewohners ist emotional — Pausengespräch mit Kollegin

---

## Spirale 3 — Prüfung

### LS-05: Prüfungsfall — Multi-Notfall im Pflegeheim

| Feld | Wert |
|------|------|
| situationId | `ls-pruefung-ce06` |
| ceId | `ce-06` |
| situationsTyp | `akutsituation` |
| spirale | 3 |
| geschaetzteUE | 2 |
| themen | Alle CE-06-Themen möglich |
| kompetenzbereich | II.1, I.1, I.2 |

#### Patient

**Herr Dennis Pfeiffer**, 22 Jahre, stationär in psychiatrischer Klinik wegen Depression + Medikamentenabhängigkeit — Suizidversuch mit Medikamenten, wird vom Pflegenden im Bad gefunden.

- **Setting:** Psychiatrische Akutstation, Badezimmer Patient, 06:10 Uhr (direkt nach Übergabe)
- **Diagnosen:** Rezidivierende depressive Episode, Substanzgebrauchsstörung (Benzodiazepine), bekannte Suizidalität (früherer Versuch vor 2 Jahren)
- **Besonderheiten:** Kombination von Notfall (Medikamentenintoxikation) + Suizidalität (Kommunikation, Sicherung), Eltern in USA, keine Angehörigen vor Ort

#### Prüfungsmodus

- Kein KI-Feedback bis zur Abgabe
- Keine Wissensbausteine (Schüler muss Wissen abrufen)
- Zeitdruck (~90 Min)
- Alle 5 Phasen, überwiegend offene Fragen (Freitext)
- Bewertung: ABCDE-Anwendung, Suizidalitäts-Assessment, SBAR-Übergabe, ethische Reflexion (Schweigepflicht vs. Angehörigen-Information)

---

## Situations-Übersicht

| # | Patient | Spirale | UE | Themen (Schwerpunkte) | Altersgruppe | Herkunft |
|---|---------|---------|----|-----------------------|--------------|----------|
| LS-01 | Herr Wagner, 67 | 1 | 3-4 | Reanimation, BLS, SBAR | Alt | deutsch |
| LS-02 | Frau Jusufi, 29 (schwanger) | 1 | 3-4 | Anaphylaxie, Schock | Junger Erw. | kosovarisch |
| LS-03 | Herr Ríos, 63 | 2 | 3-4 | Synkope, Hypoglykämie, Differentialdiagnose | Mittlerer Erw. | chilenisch |
| LS-04 | Frau Lehmann, 86 | 2 | 3-4 | SHT, Trauma, HWS | Alt | deutsch |
| LS-05 | Herr Pfeiffer, 22 | 3 | 2 | Prüfung — Suizid + Intox | Junger Erw. | deutsch |

---

## Themen-Abdeckung

| Thema | In welchen Situationen? |
|-------|------------------------|
| Kardiovaskuläre Notfälle (T-01) | LS-01, LS-03, LS-05 |
| Respiratorische Notfälle (T-02) | LS-02, LS-05 |
| Schockzustände (T-03) | LS-01, LS-02, LS-03, LS-04 |
| Neurologische Notfälle (T-04) | LS-03, LS-04, LS-05 |
| Reanimation BLS (T-05) | LS-01, LS-02 |
| Traumatologische Erstversorgung (T-06) | LS-04, LS-05 |
| Notfallkommunikation SBAR (T-07) | **Alle** (Phase 4) |
| Suizidalität und Erstintervention (T-08) | LS-05 |

**Abdeckung:** 8 von 8 Themen in mindestens einer Situation.

---

## Adaptivität: Wie Schüler verschiedene Wege gehen

### Beispiel LS-01, Phase 3 (HDM starten)

**Starke Schülerin (C1, Vorerfahrung):**
```
Step: HDM starten
→ Simulation mit Video-Feedback (Tiefe, Frequenz)
→ Selbsteinschätzung + Verbesserung
→ Keine Wissensbausteine nötig
→ Dauer Phase 3: ~20 Min
```

**Mittlere Schülerin (B2, erste BLS-Schulung):**
```
Step: HDM starten
→ Sequencing: Reihenfolge der Schritte
→ Timer-Frage: Wie viele Kompressionen pro Minute?
→ Bei Fehler: Wissensbaustein T-05 Stufe 2
→ Dauer Phase 3: ~35 Min
```

**Schwache Schülerin (B1, keine BLS-Praxis):**
```
Step: Was ist BLS?
→ Erklärung Stufe 3 + B1 + TTS
→ Video mit Untertiteln
→ Schritt-für-Schritt-Karten
→ Sequencing mit Bildern
→ Übungsmodus (Timer + visuelles Feedback)
→ Dauer Phase 3: ~60 Min
```

---

## Besonderheiten CE-06: Akutsituationen

### Warum 5 Phasen statt 6?

Notfälle haben keine „Planen"-Phase — es wird nach Algorithmus gehandelt. Dokumentation und Reflexion (letzte Phase „Reflektieren") übernimmt die Funktion der Evaluation + Dokumentation:
- **Teamdebriefing** direkt nach dem Ereignis
- **CIRS-Meldung** bei Systemfehlern oder Beinahefehlern
- **Belastungsverarbeitung** — Psychohygiene des Teams
- **Persönliche Reflexion** — Was habe ich gelernt?
- **Systemreflexion** — Was muss verbessert werden?

### Zeitliche Dichte

Notfallsituationen in CE-06 sind zeitlich extrem verdichtet (Sekunden bis Minuten bei Erkennen/Erstmaßnahmen). Die geschätzten UE reflektieren Lernzeit, nicht Echtzeit. Lernende verbringen viel Zeit mit:
- Regeln verstehen (Algorithmen, Schemas)
- Simulation und Wiederholung
- Reflexion nach Simulationsszenarien

### Sprachkompetenz im Notfall

Im Notfall muss jeder Schüler:
- Standardisierte Formulierungen sicher beherrschen (SBAR, Closed-Loop)
- Unter Stress sprachlich handlungsfähig bleiben
- Für B1-Schüler besonders wichtig: Notfall-Vokabel-Training + Simulations-Wiederholung

---

## Offene Entscheidungen

| # | Frage | Kandidat |
|---|-------|----------|
| S1 | 5 Situationen ausreichend für 120 UE CE-06? | Ja — viel Zeit geht in Wissensbausteine + Simulation |
| S2 | Suizidalität als Prüfungsfall — ethisch angemessen? | Ja, aber mit extra Debriefing + Seelsorge-Hinweis |
| S3 | Kinder-Notfall (z.B. Kind mit Fremdkörper)? | Kann als 6. Situation ergänzt werden |
| S4 | Reanimation in häuslicher Pflege? | Abgegrenzt zu CE-11 (Psychiatrie, Krisenintervention) |
