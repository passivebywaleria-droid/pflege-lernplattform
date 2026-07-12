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
1. specs/ce-06/PLAN-WISSENS-TABS-CE06.md  — die verbindliche Methodik (Abschnitte
   0-7 gelten für JEDE CE; Abschnitt 8 ist die CE-06-Landkarte als Beispiel).
2. content/ce-06/situationen/ls-wagner-reanimation/phases.ts — der Step
   "ce06-wagner-erk-01b-hks-erkennen" ist der GOLD-STANDARD-BAUSTEIN. Bau GENAU so.
3. content/ce-06/glossar.ts — so sieht ein Glossar-Eintrag aus.
4. specs/curriculum/ce-XX-lernergebnisse.json — die Lernergebnisse (Wahrheitsquelle,
   aus dem Fachkommissions-Rahmenlehrplan). Verifiziere jedes verwendete
   Lernergebnis gegen recherche/curriculum-generalistik-volltext (quellzeile).
5. specs/ce-XX/kernfakten/  — die bereits belegten Kernfakten (falls vorhanden).

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

MENGE: Nicht "Ø 20 pro Situation" raten. Coverage ist das harte Ziel: JEDES
Wissens-Lernergebnis abgedeckt, alle 5 Kompetenzbereiche getroffen, richtige
Bloom-Stufen. Das Zeit-Budget (calculate-content-budget, Faktor ~0,27 an CE-02
geeicht) ist nur ein grober Plausibilitäts-Check.

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
