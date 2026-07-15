# CE-06 — Fragen/Entscheidungen für die Gründerin

> Hier landet, was ich NICHT selbst entscheiden darf (echter fachlicher Zweifel, fehlende
> Quelle, Rechtsstand unklar). Ich wecke niemanden — ich sammle hier.

## Offen

### Arabisch-Demo: welche ZWEITE Situation neben Wagner? (2026-07-15)
Wagner (Reanimation, Demo-Wow) ist als AR-Demo-Pfad gesetzt. Die AR-Sprachbrücke läuft technisch über
das zentrale CE-06-Glossar (alle 102 Begriffe DE/AR befüllt) + das neue Sprache-Sheet im Situation-Player —
sie greift damit in ALLEN 11 CE-06-Situationen. Für die Demo-Kommunikation („diese 2 Situationen zeigen wir")
braucht es aber eine kuratierte zweite Situation.
→ **Vorschlag: Ríos (Synkope)** — zeigt die Zwei-Achsen-Adaptivität am schönsten (B1 ↔ C1 direkt umschaltbar
im neuen Sprache-Sheet), ist fachlich direkt mit Wagner verlinkt (Synkope ↔ Kreislaufstillstand-Abgrenzung)
und kurz genug für eine Live-Demo. Alternative: Yıldız (Herzinfarkt, größte AR-Fachwort-Dichte im Glossar).
→ **Entscheidung Waleria** — kein Blocker, da technisch nichts mehr zu bauen ist.

### Arabische Glossar-Termini — Dozentin-/Muttersprachler-Gegenlese (2026-07-15)
Alle 102 `uebersetzungAr` in `content/ce-06/glossar.ts` befüllt (MSA-Fachtermini, kontextgeprüft gegen die
deutsche `erklaerung`, adversarialer Zweitcheck durch separaten Review-Agenten). Maschinell nicht
verifizierbar wie deutsche Verbatim-Belege — vor dem Pilot einmal von einem arabischsprachigen
Pflege-Profi (oder der Bedarfsgruppe selbst) gegenlesen lassen. Kein Blocker für die Demo.

### DSO-Transplantationszahlen 2024 (Erlemann erm-03) — Final-Abgleich
Beim 2025-Re-Grounding wurde die veraltete Beispielzahl „2017 = 821 Lebertransplantationen" auf die aktuellen
DSO-Zahlen 2024 gehoben: **3.701 Organe transplantiert (3.013 postmortal, 688 Lebendspende)** (Kernfakt F-07 +
erm-03-Content). Quelle: DSO-Jahresbericht „Organspende und Transplantation in Deutschland 2024" (Web-Recherche,
BMG/DSO-Pressemeldung). Das ist eine **externe amtliche Primärquelle** (wie BfArM/BÄK) — der lokale zitat-verifizierer
kann sie nicht bestätigen (nur die historische 2017-Zahl aus Pflege heute). Intern konsistent (3.013+688=3.701),
jahres- und quellengetaggt.
→ **Zu tun (Gründerin, vor Live):** das Zahlentripel einmal gegen den echten DSO-Jahresbericht-2024-PDF gegenlesen —
der einzige nicht maschinell verifizierbare Wert der 2025-Runde. Kein Blocker.

## ✅ Erledigt — 2026-07-13 (Dozentin-Freigabe „passt so" + Web-Recherche + Korpus-Abgleich)

Alle vier zuvor geparkten Currency-/Didaktik-Punkte umgesetzt. Recherche mit ausschließlich amtlichen/
wissenschaftlichen Quellen; danach Abgleich mit dem vorhandenen Korpus (Ergebnis: 3 der 4 sogar intern
groundbar). Korpus-Stand bestätigt: **I care Pflege 2. Aufl. (2020)**, **I care Krankheitslehre/Anatomie 1. Aufl.**
— **keine 3. Auflage** vorhanden (deshalb Register nur extern belegbar).

### 1. Status epilepticus — Handlungsschwelle „länger als 5 Minuten" (Ríos)
War „~10–15 Min" (Pflege heute). **Korpus-Abgleich ergab einen echten Widerspruch:** I care Krankheitslehre
sagt verbatim *„Dauert der Anfall länger als 5 Minuten, handelt es sich um einen Status epilepticus"*, I care Pflege
„5–10 Min" — beide kürzer als Pflege heute; **ILAE 2015** (Trinka et al., Epilepsia 56:1515–1523) setzt t1 = 5 Min.
→ **F-12 auf „länger als 5 Minuten" geändert, verbatim gegroundet auf I care Krankheitslehre** (+ ILAE 2015 sichtbar).
Krampfanfall-MC (C1+B1) + Quellen nachgezogen. zitat-verifizierer ✅.

### 2. Hirntod-Feststellung — „zwei qualifizierte Ärzte, beide erfahren" (Erlemann)
War „wenigstens einer erfahren" (Pflege heute — die ungenaueste der drei Fassungen). **I care Pflege sagt verbatim
*„2 dafür qualifizierte Ärzte"*** (beide qualifiziert, keine „wenigstens einer"-Einschränkung); die **BÄK-Richtlinie IHA
(§ 16 TPG)** verlangt beide mit mehrjähriger Intensiverfahrung bei schwer Hirngeschädigten + mind. einen Facharzt
Neurologie/Neurochirurgie. → **F-04 auf „zwei qualifizierte Ärzte" geändert** (verbatim I care Pflege)
**+ BÄK-Detail** als sichtbare Primärquelle (wie ERC/§ BGB). Tab B, ala-01 (Option+Erklärung C1/B1), Faustregel,
Spektrum, Karteikarte nachgezogen. zitat-verifizierer ✅.
**Nachtrag (klinik-panel M1):** Fortschreibungs-Nummer bewusst WEGGELASSEN — Korpus (I care Pflege 2020) nennt „4.
Fortschreibung 2015", die DSO-Seite „5."; da nicht korpus-eindeutig belegt und die Qualifikations-Anforderung über die
Fassungen stabil, zitieren wir nur „BÄK-Richtlinie IHA gemäß § 16 TPG". → **Optional (du):** aktuell gültige Fassung
bestätigen, ggf. `recherche/standards-currency.json`-Eintrag für deterministisches Drift-Fangen.

### 3. Organspende-Register seit 18.03.2024 (Erlemann)
Nicht im Korpus (Buch 2020) — **einziger rein externer Punkt**. → **Neuer Kernfakt F-10** (Register als zusätzlicher
Weg, Entscheidungslösung unverändert), belegt über **BfArM/BMG** (amtliche Primärquelle, kein Korpus-Verbatim — im
Kernfakt so gekennzeichnet). Tab B + Faustregel + Karteikarte ergänzt. Passt zum „kein Ausweis gefunden"-Beat.

### 4. AED-Analyse-Pause (Wagner `erm-02`)
Hände-weg-während-Analyse ergänzt. → **Neuer Kernfakt F-14** (AED-Anweisungen folgen; bei Analyse und Schock niemand
berühren), gegroundet auf I care Pflege verbatim *„Bildanweisungen des AED gefolgt werden"* + **ERC 2021** („clear of
the patient"). Kurze Zeile in die Branching-Szene eingefügt, „Alle weg!"-vor-Schock-Logik unverändert.

**Quellen (Web-Recherche):** ILAE/Trinka 2015 (Epilepsia); DSO/BÄK-Richtlinie IHA (§ 16 TPG); BMG/BfArM
Organspende-Register (Start 18.03.2024); ERC 2021 Adult ALS/BLS.
