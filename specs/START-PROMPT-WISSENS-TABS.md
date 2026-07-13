# Start-Prompt — Wissens-Tabs für eine CE bauen

> **So nutzt du das:** Öffne einen neuen Claude-Code-Chat im Projekt, ersetze
> `CE-XX` durch die CE-Nummer (z. B. `CE-05`), und kopiere den Block unten als
> erste Nachricht. **Ein Chat = eine CE.** Nie zwei Chats an derselben CE
> (Kollisionsgefahr). Am besten je CE ein eigener Git-Branch.

---

```
Du baust die Wissens-Tabs (stepType "inlineWissen") für CE-XX der
Pflege-Lernplattform. Wir haben die Methodik gemeinsam festgelegt — halte dich
exakt daran, keine Abkürzungen, nichts raten.

PFLICHT-LEKTÜRE ZUERST (in dieser Reihenfolge, bevor du irgendetwas schreibst):
0. specs/DIDAKTIK-WISSENSNETZ.md — der didaktische Leitfaden (Grundlagen + Leitprinzip
   „ein Kern-Wissen, mehrere Begegnungen" + Ideen-Katalog). Gilt für JEDE CE.
   Pro LE zuerst die Wissens-Verteilungs-Karte bauen (Muster: specs/ce-06/WISSENS-VERTEILUNG-LE1.md).
0b. specs/CROSS-CE-KONZEPTREGISTER.md — das Spiralcurriculum über alle 11 CE. NUR LESEN,
   nicht in die Master-Tabelle schreiben. Prüfe: Wo ist DEINE CE Heimat eines Querschnitts-
   Konzepts (tief lehren)? Wo Wiederbegegnung (kurz anknüpfen + Bloom höher + Rückverweis
   „kennst du aus CE-X")? Neue Querschnitts-Ideen unten in „Vorschläge (append-only)".
1. specs/ce-06/PLAN-WISSENS-TABS-CE06.md  — die verbindliche Methodik (Abschnitte
   0-7 gelten für JEDE CE; Abschnitt 8 ist die CE-06-Landkarte als Beispiel).
2. content/ce-06/situationen/ls-wagner-reanimation/phases.ts — der Step
   "ce06-wagner-erk-01b-hks-erkennen" ist der GOLD-STANDARD-BAUSTEIN. Bau GENAU so.
3. content/ce-06/glossar.ts — so sieht ein Glossar-Eintrag aus.
4. specs/curriculum/ce-XX-lernergebnisse.json — die Lernergebnisse. Verifiziere jedes
   verwendete Lernergebnis gegen recherche/curriculum-generalistik-volltext (quellzeile).
5. specs/ce-XX/kernfakten/  — die bereits belegten Kernfakten (falls vorhanden).

RECHTSHIERARCHIE — WAS IST BUNDESWEIT VERBINDLICH (nicht durcheinanderwerfen):
- 5 KOMPETENZBEREICHE (KB I-V, PflBG § 5 + PflAPrV Anlagen 1-2) = RECHTSVERBINDLICH,
  deutschlandweit. Der Kompetenz-Nachweis hängt hier dran. Feingliederung (I.1, I.4 …)
  = der „Kompetenzschwerpunkt" aus den Anlagen.
- 11 CE (Fachkommission § 53 PflBG) = bundeseinheitlich EMPFOHLEN (nicht verbindlich),
  de-facto-Standard.
- LERNEINHEITEN (LE) = UMSETZUNGSEBENE (Landes-/Schulcurriculum, unsere Quelle ist
  NRW-geprägt). Das ist EINE curriculare Umsetzung, KEINE Bundesvorgabe. Andere Länder
  schneiden die CE anders. → Aussagen/Nachweise auf KB + CE verankern, LE nur als
  Umsetzung behandeln.

KB-MARKER-REGEL (präzisiert — steuert den Kompetenznachweis): Der `kompetenzbereich`
jedes Steps MUSS aus dem Schwerpunkt-SET der LE stammen (Katalog: kompetenzbereichPrimaer
+ …Sekundaer), nie außerhalb, nie geraten aus der LE-Nummer.
  · Wissens-Tabs (inlineWissen) → immer der LE-PRIMÄR-Schwerpunkt.
  · Anwendungs-Steps → der KB, den der Step TATSÄCHLICH trainiert, aber nur aus dem LE-Set
    (Kern-Handlung → Primär-Schwerpunkt; echte Kommunikation → II.x; Team → III.x;
    Reflexion des eigenen Handelns → V.x).
  · Coverage-Ziel: über die Situation/LE die Schwerpunkte nachweisbar abdecken.

K.O.-REGELN (Verstoß = Baustein geht nicht live):
- CURRICULUM-FIRST: Erst aus den Lernergebnissen die Wissens-Landkarte ableiten
  (welche Wissens-Tabs braucht es?), DANN bauen. Nicht Situation-first.
- LITERATUR-FIRST: Die Primärliteratur (recherche/*-volltext/, NICHT die
  -layout-Indexe) WORTWÖRTLICH lesen, BEVOR du schreibst. Nie aus dem Gedächtnis,
  nie aus eigenem Pflege-/Krankheitslehre-Wissen.
- PARAPHRASIEREN: Fakten sind frei, Formulierungen geschützt. Schreibe in EIGENER
  Sprache — KEINE Verbatim-Zitate im Produkt. Verbatim-Belege nur intern in den
  Kernfakten. Prüfe jeden Baustein mit einem 5-Wort-N-Gramm-Abstand gegen die
  Original-Passagen (0 Treffer). Sichtbar sind nur Primärquellen/Standards
  (ERC, DNQP, § BGB), NIE Lehrbuch-Namen.
- BAUSTEIN-AUFBAU (wie der Gold-Standard): Antizipation (Denkfehler wecken) →
  das WARUM (belegt) → die Regel → mentales Modell (Kette/Netz) → Faustregel →
  Spektrum (3-5 Kontrast-Patienten, jeder belegt) → Karteikarte.
- MARKER VOLLSTÄNDIG (K.O. wenn eins fehlt — sonst fällt der Baustein aus Spaced
  Repetition/Interleaving): lernzielId (Rahmenlehrplan-LE) · bloomLevel (die
  Stufe des Lernergebnisses steuert die Tiefe) · kompetenzbereich (primär +
  unterschwellig) · themaPrimaer/themenSekundaer · kernfaktId (intern) · quellen
  (Primärquelle sichtbar) · karteikarte.
- GLOSSAR + KARTEIKARTE MIT JEDEM BAUSTEIN: neue Fachbegriffe in
  content/ce-XX/glossar.ts eintragen (DE-Erklärung belegt + paraphrasiert),
  glossarBegriffe im Baustein markieren. Karteikarte ist Teil des Bausteins.
- NUR C1. B1-Varianten und die 8 Übersetzungen kommen in einem separaten
  End-Durchgang — jetzt NICHT.

GATES (jeder Baustein muss bestehen, bevor er als fertig gilt):
- zitat-verifizierer (Kernfakt-Beleg existiert wörtlich)
- Abstands-Check (0 wörtliche 5-Wort-Übernahmen)
- pflege-validator + klinik-panel (fachlich korrekt, kein Anti-Pattern)
- npx tsc --noEmit && npm run build müssen grün bleiben

CURRICULARE VOLLSTÄNDIGKEIT (die App wird deutschlandweit angeboten und muss sich
an den Rahmenlehrplan halten — diese vier Achsen sind K.O.):

1) COVERAGE (Umfang): JEDES Wissens-Lernergebnis der CE ist abgedeckt — das ist
   das harte Ziel, nicht eine geratene Stückzahl. Mindestumfang leitet sich aus
   den ZRW-Stunden der CE ab (im Rahmenlehrplan-Volltext nachschlagen): Zeit-Budget
   = Stunden × Faktor ~0,27 (an CE-02 geeicht, calculate-content-budget). Das Budget
   ist Plausibilitäts-Check, NICHT Ziel. Lieber üppig als knapp.

2) BLOOM-STEIGERUNG: Innerhalb der CE muss eine sichtbare Progression von niedrigen
   zu hohen Stufen entstehen. Wissens-Tabs liegen auf Stufe 1-2 (verstehen). Die
   ANWENDUNG in den Situationen muss bis zur Ziel-Bloom-Stufe des jeweiligen
   Lernergebnisses gehen (`bloomStufe` im Katalog, bis 6 = „entwerfen/entwickeln").
   Prüfe pro LE: wird die im Katalog geforderte Stufe irgendwo tatsächlich erreicht?

3) AUSBILDUNGSDRITTEL: Content muss zum Drittel der CE passen (im Rahmenlehrplan
   nachschlagen — welches Drittel, wie viele Stunden). Kein Inhalt aus einem
   späteren Drittel vorwegnehmen, kein Vorwissen voraussetzen, das dort noch nicht
   vermittelt wurde.

4) KOMPETENZBEREICH-NACHWEIS (unverzichtbar — Schulen weisen der Bezirksregierung
   nach, in welchen KB Kompetenzen erworben wurden): Jeder Baustein UND jeder
   Antwort-Step trägt `kompetenzbereich` = den im Katalog hinterlegten Schwerpunkt
   der Lerneinheit (`kompetenzbereichPrimaer`), NICHT deine fachliche Vermutung.
   Die Neben-Schwerpunkte (`kompetenzbereicheSekundaer`) dürfen zusätzlich getippt
   werden. Fehlt der Marker oder ist er geraten → der Nachweis wird unbelegbar.
   Prüfe am Ende: sind alle 5 KB der CE über die Bausteine/Steps abgedeckt?

ARBEITSWEISE: Schritt für Schritt im Chat. Zeig mir zu JEDEM Baustein zuerst die
gelesene Literatur-Stelle + den belegten Fakt, DANN den Text. Ich (Gründerin,
Pflegepädagogin) lese gegen und gebe das Prüf-Siegel frei. Kein Agent, keine
Massen-Generierung.

Beginne mit: der Wissens-Landkarte für CE-XX (aus den Lernergebnissen), dann dem
ersten Baustein von LE1.
```

---

## Praktische Regeln für parallele Chats

- **Ein Chat = eine CE = ein Ordner** (`content/ce-XX/`). Nie zwei Chats an derselben CE.
- **Je CE ein Git-Branch** (`content/ce-XX-wissenstabs`), am Ende sauber mergen — sonst Konflikte.
- **Gründerin-Review bleibt Pflicht** pro CE, bevor etwas live geht. Der Prompt + die Gates fangen die harten Fehler; die didaktische Qualität sicherst du.
- **Reihenfolge-Empfehlung:** CEs mit vorhandenen Kernfakten zuerst (schnellerer Start), dann die übrigen.
