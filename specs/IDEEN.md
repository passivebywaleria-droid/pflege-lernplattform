# IDEEN.md — Feature-Ideen für später

> Gesammelte Ideen die NICHT im aktuellen Sprint sind.
> Werden bei Bedarf in den Sprint-Plan übernommen.

---

## 1. Rive-Animierte Gesprächssimulation

**Idee:** Animierte Figuren (Pfleger, Patient, Praxisanleiter) via Rive-App erstellen. Der Schüler sieht eine lebendige Szene — nicht nur Chat-Blasen, sondern bewegte Charaktere mit Mimik und Gestik.

**Wie es funktionieren könnte:**
- Rive-Charaktere (2D-animiert) stehen sich gegenüber
- Patient spricht (Sprechblase + TTS-Audio + Charakter-Animation)
- Schüler tippt frei ein was er als Pfleger sagen würde
- KI (Llama) simuliert die Reaktion des Patienten basierend auf dem Gesagten
- Patient reagiert emotional (Rive-State-Machine: zufrieden / verwirrt / verärgert / erleichtert)
- Praxisanleiter kann als dritte Figur dazukommen und Feedback geben

**Szenarien:**
- Pfleger ↔ Patient: Aufklärungsgespräch, Schmerzerfassung, Anamnese
- Pfleger ↔ Praxisanleiter: Reflexionsgespräch, Fehler besprechen, Lob
- Pfleger ↔ Arzt: Übergabe, Rückfragen, ISBAR-Kommunikation
- Pfleger ↔ Angehörige: Schwierige Nachrichten, Beratung, Beschwerden

**Technisch:**
- Rive Runtime für React: `@rive-app/react-canvas`
- State Machines für Emotionen (idle, speaking, happy, confused, worried)
- KI-Bewertung: Empathie, Fachsprache, Vollständigkeit, Ton
- Bloom-Level: B3 (Standard-Gespräch) bis B6 (ethisches Dilemma führen)

**Warum das stark wäre:**
- Pflege ist ein SPRECHBERUF — tippen/lesen reicht nicht
- Emotionale Reaktion der Figur gibt sofortiges Feedback
- Viel immersiver als Chat-Blasen
- Differenzierung: B1-Schüler bekommt Satzanfänge, C1-Schüler schreibt frei

**Aufwand:** Hoch (Rive-Design + KI-Integration + State Machines)
**Priorität:** Nach MVP, wenn Kern-Engine steht

---

## 2. [Nächste Idee hier ergänzen]

---

*Neue Ideen einfach unten anfügen mit Nummer, Beschreibung und geschätztem Aufwand.*
