// CE-02 Thema Pflegeplanung — Wissensbausteine (15 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/pflegeplanung/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_PFLEGEPLANUNG_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: pesr-schema (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pesr-schema",
    themaId: "pflegeplanung",
    titel: "Das PESR-Schema",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du schreibst eine Pflegediagnose. Was muss drinstehen, damit eine andere Pflegefachperson genau versteht: Was ist das Problem? Warum? Woran erkennt man es? Was kann der Patient noch selbst?",
      antwort:
        "Das PESR-Schema strukturiert Pflegediagnosen in Deutschland: P = Problem (Was?), Ä = Ätiologie (Warum?), S = Symptome (Woran erkennbar?), R = Ressourcen (Was kann der Patient noch?). Es erweitert das amerikanische PES-Schema um R — die Ressourcenperspektive ist in Deutschland Pflichtbestandteil einer vollständigen Pflegediagnose (Krohwinkel 1993).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das PESR-Schema strukturiert Pflegediagnosen in Deutschland: **P**roblem (Was?), **Ä**tiologie (Warum?), **S**ymptome (Woran erkennbar?), **R**essourcen (Was kann der Patient noch?). Es erweitert das amerikanische PES-Schema um R.",
      textB1:
        "Das PESR-Schema hat vier Teile: **P** = Problem (was ist das Pflegeproblem?), **Ä** = Ursache (warum?), **S** = Zeichen (woran siehst du es?), **R** = Ressourcen (was schafft der Patient noch selbst?). R kommt aus Deutschland.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-01",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["NANDA-I 2021", "Krohwinkel 1993"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-pesr",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Das PESR-Schema",
          body: "Das **PESR-Schema** ist die in Deutschland gebräuchliche Form der Pflegediagnosen-Dokumentation. Es baut auf dem amerikanischen PES-Format auf und ergänzt es um die **Ressourcenperspektive** — wichtig für rehabilitierende Pflege nach Krohwinkel.\n\n**P — Problem:** Was ist das Pflegeproblem? Formuliert als Pflegediagnose (z.B. 'Beeinträchtigte Mobilität').\n**Ä — Ätiologie:** Was hat das Problem verursacht oder hält es aufrecht? (z.B. 'aufgrund von Schmerzen nach Hüft-OP').\n**S — Symptome:** Woran erkennt man das Problem? Beobachtbare Zeichen (z.B. 'erkennbar an: Patient dreht sich nicht selbstständig, grimassiert beim Hochziehen').\n**R — Ressourcen:** Was kann der Patient noch? (z.B. 'Ressource: kann beide Arme gezielt einsetzen').\n\nDie Ressource ist kein optionaler Zusatz — sie ist die Grundlage für die Zielformulierung. (Krohwinkel 1993, NANDA-I 2021)",
          glossarBegriffe: ["PESR-Schema", "Pflegediagnose", "Ätiologie", "Ressource (Pflege)"],
        },
        contentB1: {
          title: "Das PESR-Schema",
          body: "Das **PESR-Schema** hilft dir, eine Pflegediagnose vollständig zu schreiben.\n\n**P — Problem**: Was ist das Pflegeproblem? Zum Beispiel: 'Beeinträchtigte Mobilität'.\n**Ä — Ursache**: Warum? Zum Beispiel: 'wegen Schmerzen nach einer Hüft-OP'.\n**S — Symptome**: Woran siehst du es? Zum Beispiel: 'Patient dreht sich nicht alleine im Bett, er grimassiert beim Aufstehen'.\n**R — Ressourcen**: Was schafft der Patient noch selbst? Zum Beispiel: 'Er kann beide Arme benutzen'.\n\nDas R ist wichtig. Denn was der Patient noch kann, ist die Basis für das Pflegeziel. Das ist typisch für Deutschland — in Amerika gibt es nur PES, kein R. (Krohwinkel 1993)",
          glossarBegriffe: ["PESR-Schema", "Pflegediagnose", "Ätiologie", "Ressource (Pflege)"],
        },
      },
    },
    glossarBegriffe: ["PESR-Schema", "Pflegediagnose", "Ätiologie", "Ressource (Pflege)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: pes-vs-pesr (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pes-vs-pesr",
    themaId: "pflegeplanung",
    titel: "PES vs. PESR — Defizit vs. Ressource",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum könnte es wichtig sein, bei einer Pflegediagnose nicht nur Problem, Ursache und Symptom zu nennen — sondern auch was der Patient noch selbst kann?",
      antwort:
        "PES (amerikanischer NANDA-I-Standard) beschreibt das Defizit: Problem, Ätiologie, Symptome. PESR (deutsche Erweiterung) fügt Ressourcen hinzu — beschreibt was der Patient noch kann. PESR ist rehabilitativ und patientenzentriert: 'Herr K. kann nicht alleine aufstehen — aber er kann sich am Bettgitter festhalten.' Das verändert die Pflege: sie fördert aktiv statt alles zu übernehmen. (Krohwinkel 1993, NANDA-I 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "**PES** (amerikanischer NANDA-I-Standard): Problem, Ätiologie, Symptome — beschreibt das Defizit. **PESR** (deutsche Erweiterung): + Ressourcen — beschreibt was der Patient noch kann. PESR ist rehabilitativ und patientenzentriert. Beide sind klinisch gültig.",
      textB1:
        "**PES** (USA): Problem, Ursache, Symptome. Beschreibt was der Patient nicht kann. **PESR** (Deutschland): + Ressourcen — beschreibt was der Patient noch schafft. PESR schaut nicht nur auf Defizite, sondern auch auf Stärken.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["NANDA-I 2021", "Krohwinkel 1993"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-pes-pesr",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "PES vs. PESR",
          body: "Das **PES-Schema** entstammt der nordamerikanischen Pflegediagnostik (NANDA-I). Es beschreibt ein Pflegeproblem vollständig aus der Defizitperspektive: Was ist falsch (P), warum (Ä), woran erkennbar (S).\n\nDas **PESR-Schema** erweitert PES durch die **R**essource — ein Kerngedanke des deutschen Pflegeverständnisses. Monika Krohwinkel (1993) formulierte: Rehabilitierende Pflege bedeutet, Menschen zu fördern was sie noch können, und zu kompensieren was sie nicht mehr können.\n\n**Praktische Konsequenz:**\n- PES-Denken: 'Herr K. kann nicht alleine aufstehen' → Pflege übernimmt.\n- PESR-Denken: 'Herr K. kann nicht alleine aufstehen (P/Ä/S), aber er kann sich am Bettgitter halten (R)' → Pflege fördert die vorhandene Fähigkeit.\n\nPESR ist in deutschsprachigen Einrichtungen Standard. (Krohwinkel 1993, NANDA-I 2021)",
          glossarBegriffe: ["PESR-Schema", "NANDA-I", "Ressourcenorientierung"],
        },
        contentB1: {
          title: "PES vs. PESR",
          body: "**PES** kommt aus Amerika (NANDA-I). Es beschreibt: Was ist das Problem (P), warum (Ä), woran sieht man es (S). Gut — aber es fragt nicht: Was kann der Patient noch?\n\n**PESR** kommt aus Deutschland. Monika Krohwinkel hat es geprägt: Pflege soll fördern was der Patient noch kann — nicht nur übernehmen was er nicht mehr kann.\n\n**Beispiel:**\n- PES: 'Herr K. kann nicht alleine aufstehen.'\n- PESR: 'Herr K. kann nicht alleine aufstehen — aber er kann sich am Bettgitter festhalten.'\n\nDer PESR-Ansatz macht einen Unterschied: Die Pflege hilft Herrn K., sich selbst aufzustellen (mit Halt), statt alles für ihn zu tun. Das stärkt ihn. (Krohwinkel 1993)",
          glossarBegriffe: ["PESR-Schema", "NANDA-I", "Ressourcenorientierung"],
        },
      },
    },
    glossarBegriffe: ["PESR-Schema", "NANDA-I", "Ressourcenorientierung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: nanda-i-pflegediagnosen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-nanda-i-diagnosen",
    themaId: "pflegeplanung",
    titel: "NANDA-I — 3 Arten von Pflegediagnosen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was ist der Unterschied: 'Herr M. hat das Risiko, zu stürzen' — 'Herr M. ist gestürzt und hat jetzt Angst' — 'Frau K. möchte mehr über gesunde Ernährung wissen'? Sind das verschiedene Arten von Pflegeproblemen?",
      antwort:
        "NANDA-I unterscheidet 3 Arten von Pflegediagnosen: (1) Aktuelle Diagnose — Problem besteht jetzt, mit Symptomen nachweisbar. (2) Risikodiagnose — Problem existiert noch nicht, aber Risikofaktoren sind vorhanden — kein S im Schema. (3) Gesundheitspflege-Diagnose — Patient möchte seinen Gesundheitszustand verbessern. In der Praxis am häufigsten: aktuelle + Risikodiagnosen. (NANDA-I 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "NANDA-I unterscheidet **3 Arten von Pflegediagnosen**: (1) Aktuelle Diagnose — Problem besteht jetzt. (2) Risikodiagnose — Problem existiert noch nicht, aber Risikofaktoren sind vorhanden. (3) Gesundheitspflege-Diagnose — Patient möchte seinen Gesundheitszustand verbessern.",
      textB1:
        "Es gibt **3 Arten von Pflegediagnosen** (NANDA-I): (1) Aktuelle Diagnose — das Problem ist jetzt da. (2) Risikodiagnose — das Problem ist noch nicht da, aber gefährlich. (3) Gesundheitsdiagnose — der Patient will gesünder werden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["NANDA-I 2021"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-nanda-typen",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "NANDA-I — 3 Arten von Pflegediagnosen",
          body: "Die **NANDA-I-Klassifikation** (NANDA International, 2021) strukturiert Pflegediagnosen in drei Typen:\n\n**1. Aktuelle Pflegediagnose**\nDas Problem besteht jetzt und ist durch Symptome (definierte Merkmale) nachweisbar.\nBeispiel: 'Beeinträchtigte Mobilität, bedingt durch Schmerzen (Ätiologie), erkennbar an: Patient dreht sich nicht im Bett, grimassiert (S).'\n\n**2. Risikodiagnose**\nDas Problem besteht noch nicht, aber Risikofaktoren machen es wahrscheinlich.\n→ Kein S-Anteil im PES/PESR (es gibt noch keine Symptome).\nBeispiel: 'Sturzrisiko, bedingt durch Schwindel bei Lagewechsel.'\n\n**3. Gesundheitspflege-Diagnose (Wellness-Diagnose)**\nDer Patient ist motiviert, seinen Gesundheitszustand in einem spezifischen Bereich zu verbessern.\nBeispiel: 'Bereitschaft, die Selbstpflege zu verbessern' (Patient will mehr selbst waschen).\n→ Wird in der Praxis am seltensten dokumentiert. (NANDA-I 2021)",
          glossarBegriffe: ["NANDA-I", "Pflegediagnose", "Risikodiagnose"],
        },
        contentB1: {
          title: "NANDA-I — 3 Arten von Pflegediagnosen",
          body: "NANDA-I (2021) unterscheidet drei Arten von Pflegediagnosen:\n\n**1. Aktuelle Diagnose**\nDas Problem ist jetzt da. Du kannst es sehen oder messen.\nBeispiel: 'Herr M. kann sich nicht alleine im Bett umdrehen, weil er Schmerzen hat.' Du siehst: er bewegt sich nicht, er grimassiert.\n\n**2. Risikodiagnose**\nDas Problem gibt es noch nicht — aber es könnte kommen.\nBeispiel: 'Sturzrisiko wegen Schwindel.' Noch kein Sturz passiert, aber die Gefahr ist da.\n→ Kein Symptom-Teil im Schema, weil das Problem noch nicht da ist.\n\n**3. Gesundheitsdiagnose**\nDer Patient will etwas verbessern.\nBeispiel: 'Frau K. will mehr selbst essen lernen.' Kein Defizit — ein Wunsch.\n→ Im Alltag am seltensten. (NANDA-I 2021)",
          glossarBegriffe: ["NANDA-I", "Pflegediagnose", "Risikodiagnose"],
        },
      },
    },
    glossarBegriffe: ["NANDA-I", "Pflegediagnose", "Risikodiagnose"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: smart-ziele (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-smart-ziele",
    themaId: "pflegeplanung",
    titel: "SMART-Pflegeziele formulieren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was ist der Unterschied zwischen diesen zwei Zielen: (a) 'Herr K. soll mehr trinken' — (b) 'Herr K. trinkt bis Freitag 1500 ml pro Tag selbstständig'?",
      antwort:
        "Ziel (b) ist SMART: Spezifisch (Herr K. trinkt Wasser/Tee), Messbar (1500 ml/Tag), Achievable (realistisch für diesen Patienten), Realistisch (machbar), Terminiert (bis Freitag). Ziel (a) ist nicht überprüfbar — niemand weiß wann oder woran man erkennt ob es erreicht wurde. Nur SMART-Ziele können bei der Evaluation bewertet werden. (Doran 1981)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das SMART-Prinzip macht Pflegeziele messbar und überprüfbar: **S**pezifisch (Was genau?), **M**essbar (Wie viel? Wie oft?), **A**chievable/Erreichbar (realistisch für diesen Patienten?), **R**ealistisch (mit vorhandenen Ressourcen?), **T**erminiert (bis wann?).",
      textB1:
        "SMART macht Pflegeziele klar: **S** = genau formulieren, **M** = messbar (Zahl, Zeit), **A** = erreichbar (für diesen Patienten), **R** = realistisch (mit echten Mitteln), **T** = Termin (bis wann?). Ziele ohne SMART sind nicht überprüfbar.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-04",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Doran 1981"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-smart",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "SMART-Pflegeziele formulieren",
          body: "Das **SMART-Prinzip** stammt aus dem Management (Doran, 1981) und wurde in die Pflege übernommen. Ein Pflegeziel ohne SMART-Kriterien ist keine Arbeitsgrundlage — es ist ein Wunsch.\n\n**S — Spezifisch:** Nicht 'mehr trinken', sondern 'Herr K. trinkt Wasser und Tee'.\n**M — Messbar:** Nicht 'viel trinken', sondern '1500 ml pro Tag'. Menge, Häufigkeit oder Beobachtungskriterium angeben.\n**A — Achievable (Erreichbar):** Das Ziel muss für **diesen Patienten** mit seinen Ressourcen erreichbar sein. Ein Patient mit Dysphagie und 1500 ml/Tag als Schluckziel ist unrealistisch.\n**R — Realistisch:** Mit vorhandenen Pflegeleistungen und Zeit erreichbar — nicht utopisch.\n**T — Terminiert:** Bis wann gilt das Ziel? 'bis Freitag', 'innerhalb von 3 Tagen', 'bis zur Entlassung'.\n\nNur ein SMART-Ziel kann bei der Evaluation bewertet werden: Wurde es erreicht? Wenn ja, nächstes Ziel. Wenn nein, Plan anpassen. (Doran 1981)",
          glossarBegriffe: ["SMART-Kriterien", "Pflegeziel", "Evaluation"],
        },
        contentB1: {
          title: "SMART-Pflegeziele formulieren",
          body: "SMART macht Pflegeziele überprüfbar. Ohne SMART kannst du nicht sagen, ob das Ziel erreicht wurde.\n\n**S** — Genau: Nicht 'trinken', sondern 'Wasser und Tee trinken'.\n**M** — Messbar: Nicht 'viel', sondern '1500 ml täglich'.\n**A** — Erreichbar: Ist das Ziel für diesen Patienten realistisch? (Ein Patient der kaum schlucken kann, schafft vielleicht nur 800 ml.)\n**R** — Realistisch: Haben wir die Zeit und die Mittel dafür?\n**T** — Termin: Bis wann? 'Bis Freitag', 'bis zur Entlassung', 'nach 3 Tagen'.\n\nWarum ist SMART wichtig? Bei der Evaluation fragst du: Wurde das Ziel erreicht? Ohne Termin und Zahl kannst du das nicht beurteilen. (Doran 1981)",
          glossarBegriffe: ["SMART-Kriterien", "Pflegeziel", "Evaluation"],
        },
      },
    },
    glossarBegriffe: ["SMART-Kriterien", "Pflegeziel", "Evaluation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: zielhierarchie (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-zielhierarchie",
    themaId: "pflegeplanung",
    titel: "Zielhierarchie: Nah-, Teil- und Fernziel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau S. hat einen Schlaganfall und kann nicht sprechen. Das Fernziel: 'Frau S. kommuniziert wieder selbstständig'. Was müsste sie zuerst erreichen — und davor?",
      antwort:
        "Pflegeziele werden in 3 Hierarchieebenen eingeteilt: Nahziel (in Stunden bis Tagen), Teilziel (in Tagen bis Wochen), Fernziel (in Wochen bis Monaten). Für Frau S.: Nahziel — 'zeigt heute auf Bildkarten wenn sie Durst hat'. Teilziel — 'benutzt nach 1 Woche eine Kommunikationstafel'. Fernziel — 'kommuniziert nach 3 Monaten Grundbedürfnisse mündlich'. (Krohwinkel 1993)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegeziele werden in **3 Hierarchieebenen** eingeteilt: **Nahziel** (in Stunden bis Tagen, kurzfristig erreichbar), **Teilziel** (in Tagen bis Wochen, Zwischenschritt), **Fernziel** (in Wochen bis Monaten, langfristiger Endzustand).",
      textB1:
        "Es gibt **3 Ziel-Stufen**: **Nahziel** (heute bis morgen), **Teilziel** (diese Woche), **Fernziel** (in Wochen oder Monaten). Sie bauen aufeinander auf: Nahziel → Teilziel → Fernziel.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-05",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Krohwinkel 1993"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-zielhierarchie",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Zielhierarchie: Nah-, Teil- und Fernziel",
          body: "Die **Zielhierarchie** gliedert Pflegeziele nach Zeitraum und Komplexität:\n\n**Nahziel:** Kurzfristig, erreichbar innerhalb von Stunden bis maximal 2-3 Tagen. Beschreibt den nächsten konkreten Schritt.\nBeispiel: 'Frau S. zeigt heute auf Bildkarten, wenn sie Durst hat.'\n\n**Teilziel:** Mittelfristig, erreichbar in Tagen bis 2-3 Wochen. Zwischenschritt auf dem Weg zum Fernziel.\nBeispiel: 'Frau S. benutzt nach 1 Woche eine Kommunikationstafel mit 10 Begriffen.'\n\n**Fernziel:** Langfristig, erreichbar in Wochen bis Monaten. Beschreibt den angestrebten Endzustand.\nBeispiel: 'Frau S. kommuniziert nach 3 Monaten ihre Grundbedürfnisse mündlich.'\n\nDie Hierarchie ist wichtig, weil Patienten Motivation brauchen: Das Nahziel ist erreichbar, gibt Erfolgserlebnisse und macht den Weg zum Fernziel greifbar. (Krohwinkel 1993)",
          glossarBegriffe: ["Pflegeziel", "SMART-Kriterien"],
        },
        contentB1: {
          title: "Zielhierarchie: Nah-, Teil- und Fernziel",
          body: "**3 Ziel-Stufen** in der Pflege:\n\n**Nahziel** — für heute oder morgen. Ein kleiner, konkreter Schritt.\nBeispiel: 'Frau S. zeigt heute auf eine Karte, wenn sie Durst hat.'\n\n**Teilziel** — für diese Woche. Ein Schritt weiter.\nBeispiel: 'Nach einer Woche benutzt Frau S. eine Kommunikationstafel.'\n\n**Fernziel** — für Wochen oder Monate. Das große Ziel.\nBeispiel: 'Nach 3 Monaten kann Frau S. ihre Bedürfnisse wieder mündlich sagen.'\n\nWarum diese Aufteilung? Der Patient braucht Erfolgserlebnisse. Das Nahziel ist erreichbar und zeigt: Es geht vorwärts. Das motiviert. Das Fernziel gibt die Richtung.",
          glossarBegriffe: ["Pflegeziel", "SMART-Kriterien"],
        },
      },
    },
    glossarBegriffe: ["Pflegeziel", "SMART-Kriterien"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: pflegemaßnahmen-5w (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pflegemassnahmen-5w",
    themaId: "pflegeplanung",
    titel: "Pflegemaßnahmen — die 5 W-Fragen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Im Pflegeplan steht: 'Patient trinken lassen'. Was weiß die Nachtschicht daraus? Was fehlt für eine klar umsetzbare Maßnahme?",
      antwort:
        "Pflegemaßnahmen brauchen 5 Angaben: Wer führt durch? Wann (Uhrzeit, Häufigkeit)? Wie (Methode, Technik)? Wie oft (täglich, alle 2 Stunden)? Womit (Material, Hilfsmittel)? Vollständiges Beispiel: 'Pflegehilfe bietet Herrn K. täglich 3× (08:00, 12:00, 18:00 Uhr) 300 ml Wasser oder Tee mit einem Schnabelbecher an und dokumentiert die Trinkmenge.' Nur vollständige Maßnahmen sichern Kontinuität auch bei Schichtwechsel.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegemaßnahmen brauchen 5 Angaben: **Wer** führt durch? **Wann** (Uhrzeit, Häufigkeit)? **Wie** (Methode, Technik)? **Wie oft** (täglich, alle 2 Stunden)? **Womit** (Material, Hilfsmittel)? Nur so kann jede Schicht die Maßnahme korrekt ausführen.",
      textB1:
        "Eine Pflegemaßnahme muss 5 Fragen beantworten: **Wer** macht es? **Wann**? **Wie** (welche Methode)? **Wie oft**? **Womit** (welches Hilfsmittel)? Erst dann ist die Maßnahme vollständig und für jede Schicht umsetzbar.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-06",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-5w",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegemaßnahmen — die 5 W-Fragen",
          body: "Eine **Pflegemaßnahme** ist nur dann handlungsleitend, wenn alle 5 W-Fragen beantwortet sind:\n\n**Wer** — Welche Berufsgruppe, welche Qualifikation ist zuständig? Pflegefachperson, Pflegehilfe, Therapeut?\n**Wann** — Zu welcher Uhrzeit oder in welchem Rhythmus? '08:00 Uhr', 'vor jeder Mahlzeit', 'alle 2 Stunden'.\n**Wie** — Welche Technik oder Methode? 'Basale Stimulation®', 'nach Bobath', 'mit angedickter Flüssigkeit (Stufe 2)'.\n**Wie oft** — Häufigkeit pro Tag, pro Schicht, pro Woche.\n**Womit** — Welches Hilfsmittel oder Material? 'Trinkgefäß mit Schnabelaufsatz', 'Lagerungsrolle', 'Einmalhandschuhe'.\n\n**Beispiel vollständige Maßnahme:** 'Pflegehilfe bietet Herrn K. täglich 3× (08:00, 12:00, 18:00 Uhr) 300 ml Wasser oder Tee mit einem Schnabelbecher an und dokumentiert die Trinkmenge auf dem Trinkprotokoll.'\n\nVollständige Maßnahmen sichern Kontinuität auch bei Schichtwechsel.",
          glossarBegriffe: ["Pflegemaßnahme"],
        },
        contentB1: {
          title: "Pflegemaßnahmen — die 5 W-Fragen",
          body: "Eine Pflegemaßnahme muss 5 Fragen beantworten:\n\n**Wer** — Wer macht es? Pflegefachperson, Pflegehilfe, Ergotherapeutin?\n**Wann** — Um wie viel Uhr? Oder wann im Tagesablauf? 'Vor dem Frühstück', '08:00 Uhr'.\n**Wie** — Wie genau? Welche Methode? 'Mit angedickter Flüssigkeit', 'nach Bobath'.\n**Wie oft** — Wie oft am Tag oder in der Woche?\n**Womit** — Mit welchem Hilfsmittel? 'Schnabelbecher', 'Lagerungsrolle'.\n\n**Beispiel:** 'Pflegehilfe bietet Herrn K. täglich 3× (8, 12, 18 Uhr) 300 ml Tee mit Schnabelbecher an.'\n\nSo kann jede Schicht die Maßnahme ausführen — auch wenn die Kollegin im Urlaub ist.",
          glossarBegriffe: ["Pflegemaßnahme"],
        },
      },
    },
    glossarBegriffe: ["Pflegemaßnahme"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: med-vs-pflegediagnose (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-med-vs-pflegediagnose",
    themaId: "pflegeplanung",
    titel: "Medizinische Diagnose vs. Pflegediagnose",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin hat die ärztliche Diagnose 'Herzinsuffizienz'. Du planst die Pflege. Welche Probleme siehst du als Pflegefachperson — die der Arzt vielleicht nicht dokumentiert?",
      antwort:
        "Die medizinische Diagnose (Arzt) beschreibt die Krankheit — stabil. Die Pflegediagnose (Pflegefachperson) beschreibt die menschliche Reaktion des Patienten auf die Krankheit — täglich veränderlich. Beispiel: 'Herzinsuffizienz' (Arzt) vs. 'Beeinträchtigte Aktivitätstoleranz wegen Dyspnoe' oder 'Angst wegen Atemnot' oder 'Flüssigkeitsüberschuss wegen Ödeme' (Pflege). Beide Perspektiven sind notwendig (NANDA-I 2021, § 4 PflBG).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ärztliche Diagnose: Krankheit, relativ stabil. Pflegediagnose: **Reaktion des Menschen** auf die Krankheit — täglich veränderlich. Beispiel: 'Herzinsuffizienz' (Arzt) vs. 'Beeinträchtigte körperliche Aktivität aufgrund von Belastungsdyspnoe' (Pflege).",
      textB1:
        "Der Arzt schreibt: 'Herzinsuffizienz'. Das ist die Krankheit. Du schreibst: 'Patientin wird beim Waschen kurzatmig und braucht Pausen'. Das ist das Pflegeproblem — was du jeden Tag siehst und veränderst.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-07",
        phase: 1,
        stepType: "matching",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["NANDA-I 2021", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-med-pflegediagnose",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Medizinische Diagnose vs. Pflegediagnose",
          body: "**Medizinische Diagnose** und **Pflegediagnose** sind zwei verschiedene fachliche Perspektiven auf denselben Patienten.\n\n**Medizinische Diagnose (Arzt):**\n- Benennt die Krankheit (Herzinsuffizienz, Pneumonie, Diabetes mellitus Typ 2)\n- Ist relativ stabil — ändert sich selten innerhalb eines Tages\n- Leitet Therapie (Medikamente, Operationen, Interventionen)\n- Rechtlich: nur Ärzte dürfen medizinische Diagnosen stellen\n\n**Pflegediagnose (Pflegefachperson):**\n- Benennt die **Reaktion** des Menschen auf Krankheit, Behandlung oder Lebenssituation\n- Ändert sich täglich — manchmal stündlich\n- Leitet Pflege (Lagerung, Mobilisation, Kommunikation, Beratung)\n- Rechtlich: Pflegefachpersonen stellen Pflegediagnosen autonom (§ 4 PflBG)\n\nDerselbe Patient mit 'Herzinsuffizienz' kann als Pflegediagnosen haben: 'Beeinträchtigte körperliche Aktivität' (Dyspnoe bei Belastung), 'Angst' (Atemnot löst Angst aus), 'Flüssigkeitsüberschuss' (Ödeme sichtbar). Alle drei können gleichzeitig bestehen — und alle drei ändern sich täglich (NANDA-I, 2021).",
          glossarBegriffe: ["Pflegediagnose", "NANDA-I", "PÄS-Format"],
        },
        contentB1: {
          title: "Medizinische Diagnose vs. Pflegediagnose",
          body: "**Arzt und Pflegefachperson** haben verschiedene Aufgaben — deshalb schreiben sie verschiedene Diagnosen.\n\n**Arzt schreibt:** 'Herzinsuffizienz'. Das ist die Krankheit. Sie ändert sich selten.\n**Du schreibst:** Was du bei der Patientin jeden Tag siehst und tust.\n\nDrei Beispiele für dieselbe Patientin:\n- 'Beim Waschen wird sie kurzatmig' → Pflegeziel: selbstständig waschen mit Pausen\n- 'Sie hat Angst vor dem Schlafen wegen Atemnot' → Pflegeziel: ruhig schlafen können\n- 'Beide Beine sind geschwollen' → Pflegeziel: Hochlagerung + Gewicht täglich messen\n\nDer Arzt behandelt die Krankheit. Du begleitest den Alltag. Beide sind notwendig (NANDA-I, 2021).",
          glossarBegriffe: ["Pflegediagnose", "NANDA-I", "PÄS-Format"],
        },
      },
    },
    glossarBegriffe: ["Pflegediagnose", "NANDA-I", "PÄS-Format"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: vorbehaltene-taetigkeit-planung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-vorbehaltene-taetigkeit",
    themaId: "pflegeplanung",
    titel: "Vorbehaltene Tätigkeiten nach § 4 PflBG",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor: Eine Krankenpflegehelferin fragt dich, ob sie den Pflegeplan für Herrn Fischer schreiben darf — sie hat 10 Jahre Erfahrung. Was antwortest du?",
      antwort:
        "Nein — die Pflegeplanung ist eine vorbehaltene Tätigkeit nach § 4 PflBG. Nur Pflegefachpersonen dürfen (1) Pflegebedarf erheben, (2) Pflegeprozess planen, steuern und organisieren, (3) Pflege evaluieren. Die Pflegehilfe darf Maßnahmen durchführen — aber nicht selbstständig planen. Erfahrung ersetzt keine gesetzliche Berechtigung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Planung, Steuerung und Evaluation des Pflegeprozesses ist eine **vorbehaltene Tätigkeit** der Pflegefachperson (§ 4 Abs. 2 PflBG). Hilfskräfte und Auszubildende dürfen keine Pflegepläne selbstständig erstellen — unabhängig von ihrer Erfahrung.",
      textB1:
        "Nur Pflegefachpersonen dürfen den Pflegeplan schreiben — das sagt das Gesetz (§ 4 PflBG). Hilfskräfte dürfen pflegen und unterstützen — aber sie dürfen nicht selbstständig planen. Erfahrung ändert daran nichts.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-08",
        phase: 1,
        stepType: "sorting",
        bloomLevel: 3,
        kompetenzbereich: "V.1",
        quellen: ["§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-vorbehaltene-taetigkeit",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Vorbehaltene Tätigkeiten nach § 4 PflBG",
          body: "**Vorbehaltene Tätigkeiten** sind Aufgaben, die per Gesetz nur examinierten Pflegefachpersonen vorbehalten sind.\n\n§ 4 Abs. 2 PflBG definiert drei vorbehaltene Tätigkeiten:\n1. **Erheben** des Pflegestatus: Pflegeanamnese, Assessment, Pflegediagnose\n2. **Planen** der Pflege: Pflegeziele setzen, Maßnahmen auswählen, Pflegeplan schreiben\n3. **Steuern und Evaluieren** des Pflegeprozesses: Wirksamkeit prüfen, Plan anpassen\n\n**Was das in der Praxis bedeutet:**\n- Pflegehelfer, Schüler im 1. Ausbildungsjahr und Hilfskräfte dürfen Pflege **durchführen** — aber nicht selbstständig planen\n- Die Planung liegt immer bei der examinierten Pflegefachperson\n- Auch wenn jemand 20 Jahre Erfahrung als Helfer hat: kein Examen = keine Planungsverantwortung\n- Die Pflegefachperson trägt die Verantwortung — auch wenn andere durchführen\n\nDies ist keine Frage des Vertrauens oder der Erfahrung. Es ist gesetzliche Kompetenzregelung (§ 4 PflBG).",
          glossarBegriffe: ["Vorbehaltene Tätigkeit", "§ 4 PflBG"],
        },
        contentB1: {
          title: "Vorbehaltene Tätigkeiten nach § 4 PflBG",
          body: "Das Gesetz sagt: Nur **Pflegefachpersonen** dürfen den Pflegeplan schreiben (§ 4 PflBG).\n\n**Was Pflegefachpersonen allein dürfen:**\n1. Den Pflegezustand einschätzen (was braucht der Patient?)\n2. Den Pflegeplan schreiben (Ziele + Maßnahmen)\n3. Prüfen ob die Pflege gewirkt hat\n\n**Was Pflegehelfer dürfen:**\n- Pflegemaßnahmen durchführen, die im Plan stehen\n- Beobachtungen melden\n- Aber nicht: selbst planen\n\nDas gilt auch wenn der Helfer 20 Jahre Erfahrung hat. Denn die Verantwortung liegt beim Examen — nicht bei der Erfahrung. Du als Pflegefachperson bist verantwortlich — auch für das was andere durchführen.",
          glossarBegriffe: ["Vorbehaltene Tätigkeit", "§ 4 PflBG"],
        },
      },
    },
    glossarBegriffe: ["Vorbehaltene Tätigkeit", "§ 4 PflBG"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: pflegemodell-orem (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pflegemodell-orem",
    themaId: "pflegeplanung",
    titel: "Pflegemodell Orem — Selbstpflegedefizit",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient nach Schlaganfall kann sich nicht mehr waschen. Ein anderer Patient nach OP kann sich selbst waschen, braucht aber jemanden der ihm erklärt wie er die Wunde trocken hält. Was unterscheidet die Pflege bei diesen beiden?",
      antwort:
        "Dorothea Orem beschreibt 3 Pflegesysteme nach dem Selbstpflegedefizit: (1) Wholly Compensatory — Patient kann gar nichts selbst, Pflege übernimmt alles (Schlaganfall-Patient). (2) Partly Compensatory — Patient kann manches, Pflege ergänzt. (3) Supportive-Educative — Patient kann sich selbst pflegen, braucht aber Anleitung (OP-Patient mit Wundversorgung). Das Pflegesystem wählt die Pflegefachperson je nach Assessment. (Orem, Self-Care Deficit Theory, 1971)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dorothea Orem entwickelte die **Selbstpflegedefizit-Theorie** (1971): Pflege ist dann notwendig, wenn ein Mensch ein **Selbstpflegedefizit** hat. Orem beschreibt **drei Pflegesysteme:** 1. Wholly Compensatory (Pflege übernimmt alles), 2. Partly Compensatory (Pflege ergänzt), 3. Supportive-Educative (Pflege berät und lehrt).",
      textB1:
        "Dorothea Orem hat eine wichtige Idee entwickelt (1971): Pflege ist notwendig, wenn jemand sich nicht mehr selbst helfen kann. Es gibt 3 Stufen von Pflege: **1. Vollständig übernehmend** — der Patient kann gar nichts selbst. **2. Teilweise übernehmend** — der Patient kann manches, die Pflege ergänzt. **3. Anleitend** — der Patient kann alles, braucht aber Erklärungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-09",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Orem 1971"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-orem",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Pflegemodell Orem — Selbstpflegedefizit",
          body: "**Dorothea Orem (1971)** formulierte die Selbstpflegedefizit-Theorie als Grundlage für professionelle Pflege. Kernaussage: Pflege ist eine menschliche Dienstleistung, die nur dann notwendig ist, wenn ein **Selbstpflegedefizit** besteht.\n\n**Selbstpflegedefizit** = Selbstpflegeanforderung übersteigt die Selbstpflegekompetenz.\n\nDie drei Pflegesysteme nach Orem:\n**1. Wholly Compensatory System:** Pflege übernimmt alles — Patient ist passiv (z.B. komatöser Patient, Intensivpflege).\n**2. Partly Compensatory System:** Patient und Pflege teilen sich Aufgaben — Patient tut was er kann (z.B. wäscht Gesicht selbst, Pflege wäscht Rücken).\n**3. Supportive-Educative System:** Patient führt Selbstpflege durch — Pflege berät, lehrt, leitet an (z.B. Diabetesschulung, Wundversorgung zu Hause).\n\nDas Pflegesystem wählt die Pflegefachperson je nach Assessment — und passt es täglich an (Orem, Self-Care Deficit Theory, 1971).",
          glossarBegriffe: ["Selbstpflegedefizit"],
        },
        contentB1: {
          title: "Pflegemodell Orem — Selbstpflegedefizit",
          body: "**Dorothea Orem** (1971) hat beschrieben, warum Menschen Pflege brauchen: weil sie manchmal nicht mehr für sich selbst sorgen können.\n\nDas nennt sie **Selbstpflegedefizit**: Was jemand braucht ist größer als das was er selbst kann.\n\nDie 3 Pflegesysteme:\n**1. Völlig übernehmend** — Patient kann nichts. Pflege macht alles.\n   → Beispiel: Patient nach Schlaganfall, vollständig pflegebedürftig.\n**2. Teilweise übernehmend** — Patient kann manches. Pflege hilft wo nötig.\n   → Beispiel: Patient wäscht Hände selbst, Pflege hilft beim Rücken.\n**3. Anleitend** — Patient kann alles, braucht aber Erklärungen.\n   → Beispiel: Patient lernt Wundversorgung für zu Hause.\n\nDie Pflegefachperson wählt das richtige System nach Einschätzung (Orem, 1971).",
          glossarBegriffe: ["Selbstpflegedefizit"],
        },
      },
    },
    glossarBegriffe: ["Selbstpflegedefizit"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: pflegemodell-krohwinkel (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pflegemodell-krohwinkel",
    themaId: "pflegeplanung",
    titel: "Pflegemodell Krohwinkel — 13 ABEDLs",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine ältere Frau kommt nach einem Sturz ins Krankenhaus. Sie ist körperlich noch fit — aber sie schläft kaum, isst wenig und sagt: 'Ich hab niemanden mehr.' Wie strukturierst du deine Pflegeplanung für sie?",
      antwort:
        "Das ABEDL-Modell nach Krohwinkel (1993) erfasst 13 Lebensbereiche ganzheitlich — körperlich, psycho-sozial und existenziell. Bei dieser Patientin: körperlich unauffällig — aber psycho-sozial (Einsamkeit, soziale Isolation) und existenziell (Sinn, Verlust) betroffen. Ressourcen und Probleme werden pro ABEDL erfasst. Das macht Krohwinkel zu einem ressourcenorientierten Modell.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Monika Krohwinkel entwickelte 1993 das ABEDL-Modell: **Aktivitäten und existenzielle Erfahrungen des Lebens**. Die **13 ABEDLs** strukturieren das Pflegeassessment ganzheitlich — körperlich, psychisch und sozial. Ressourcen und Probleme werden pro ABEDL erfasst.",
      textB1:
        "Monika Krohwinkel hat 1993 beschrieben: Menschen haben 13 wichtige Lebensbereiche. Diese 13 Bereiche heißen **ABEDLs**. Die Pflege schaut bei jedem dieser 13 Bereiche: Gibt es ein Problem? Was kann der Patient selbst? (Krohwinkel, 1993)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-10",
        phase: 1,
        stepType: "matching",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Krohwinkel 1993"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-krohwinkel",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegemodell Krohwinkel — 13 ABEDLs",
          body: "**Monika Krohwinkel (1993)** entwickelte das ABEDL-Modell als umfassendes Pflegekonzept. Das Kürzel steht für: **A**ktivitäten, **B**eziehungen und **E**xistenzielle **E**rfahrungen **d**es **L**ebens.\n\nDie 13 ABEDLs erfassen den Menschen ganzheitlich — körperlich, psychisch, sozial und spirituell:\n\n**Körperlich:** Sich bewegen, Vitale Funktionen, Sich pflegen, Essen/Trinken, Ausscheiden, Sich kleiden, Ruhen/Schlafen\n**Psycho-sozial:** Kommunizieren, Beschäftigen/Entspannen, Sexualität leben, Soziale Bereiche sichern\n**Existenziell:** Für sichere Umgebung sorgen, Mit existenziellen Erfahrungen des Lebens umgehen (Sterben, Verlust, Sinn)\n\n**Ressourcen und Probleme:** Bei jeder ABEDL werden Ressourcen (was kann die Person?) und Probleme (was kann sie nicht?) erfasst. Das macht Krohwinkel zu einem ressourcenorientierten Modell.\n\nIn der Praxis: Das ABEDL-Modell ist in Deutschland das am weitesten verbreitete Pflegemodell in der stationären Altenpflege (Krohwinkel, 1993 ABEDL).",
          glossarBegriffe: ["ABEDL", "Ressourcenorientierung"],
        },
        contentB1: {
          title: "Pflegemodell Krohwinkel — 13 ABEDLs",
          body: "**Monika Krohwinkel (1993)** hat gezeigt: Menschen brauchen mehr als nur körperliche Pflege.\n\n**ABEDL** steht für: Aktivitäten, Beziehungen und Existenzielle Erfahrungen des Lebens.\n\nDie 13 ABEDLs — vereinfacht:\n**Körper:** Bewegen, Atmen, Waschen, Essen, Trinken, Ausscheiden, Schlafen, Anziehen\n**Soziales:** Reden, Kontakte pflegen, Freizeit gestalten\n**Sinn:** Sexualität, sichere Umgebung, Sterben und Verlust\n\nBei jeder ABEDL fragt die Pflegeperson:\n- Was kann der Patient noch selbst? (Ressource)\n- Wobei braucht er Hilfe? (Problem)\n\nDas macht die Pflege **ganzheitlich** (Krohwinkel, 1993).",
          glossarBegriffe: ["ABEDL", "Ressourcenorientierung"],
        },
      },
    },
    glossarBegriffe: ["ABEDL", "Ressourcenorientierung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: pflegemodell-roper-logan-tierney (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pflegemodell-roper-logan-tierney",
    themaId: "pflegeplanung",
    titel: "Pflegemodell Roper/Logan/Tierney — 12 ATLs",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient kann nach einer Hüft-OP heute noch nicht alleine laufen, schafft es aber, selbst zu essen und zu trinken. Wie hilft das dir bei der Pflegeplanung? Was nützt dir das Wissen über sein Kontinuum?",
      antwort:
        "Roper/Logan/Tierney (1980) beschreiben 12 Lebensaktivitäten (ATLs), jede auf einem Kontinuum von vollständiger Abhängigkeit bis vollständiger Unabhängigkeit. Das Wissen über das Kontinuum zeigt: Wo ist der Patient eigenständig (Essen — 90%)? Wo braucht er Hilfe (Sich bewegen — 20%)? Pflege interveniert nur dort wo sie nötig ist. Ziel: maximale Unabhängigkeit fördern — oder würdevolle Abhängigkeit ermöglichen (z.B. beim Sterben).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Nancy Roper, Winifred Logan und Alison Tierney entwickelten 1980 ein Pflegemodell auf Basis von **12 Lebensaktivitäten (Activities of Living)**. Jede Aktivität liegt auf einem **Abhängigkeits-Unabhängigkeits-Kontinuum**: von 0% bis 100% Unabhängigkeit. Ziel der Pflege: den Patienten Richtung Unabhängigkeit bewegen.",
      textB1:
        "Roper, Logan und Tierney (1980) haben 12 Lebensaktivitäten beschrieben. Für jede dieser Aktivitäten gilt: Wie selbständig ist der Patient? Ganz allein? Mit etwas Hilfe? Gar nicht ohne Hilfe? Das nennen sie das **Kontinuum** von Abhängigkeit bis Unabhängigkeit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-11",
        phase: 1,
        stepType: "matching",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Roper/Logan/Tierney 1980"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-roper",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Pflegemodell Roper/Logan/Tierney — 12 ATLs",
          body: "**Roper, Logan und Tierney (1980)** entwickelten ein Pflegemodell, das auf zwei Kernideen basiert:\n\n**1. Die 12 Lebensaktivitäten (Activities of Living / ATLs):**\nAtmen, Essen und Trinken, Ausscheiden, Körperpflege, Sich kleiden, Körpertemperatur regulieren, Sich bewegen, Arbeiten und Spielen, Sexualität ausdrücken, Schlafen, Sterben, Kommunizieren.\n\n**2. Das Abhängigkeits-Unabhängigkeits-Kontinuum:**\nJede Lebensaktivität liegt auf einem Spektrum von vollständiger Abhängigkeit (0%) bis vollständiger Unabhängigkeit (100%). Der gleiche Patient kann bei 'Essen' 90% unabhängig sein, bei 'Sich bewegen' aber nur 20%.\n\n**Ziel der Pflege:** Den Patienten bei jeder Lebensaktivität so weit wie möglich Richtung Unabhängigkeit zu bewegen — oder eine würdevolle Abhängigkeit zu ermöglichen (z.B. beim Sterben).\n\nDas Modell ist in der UK-Pflege sehr verbreitet und beeinflusst die deutschsprachige Pflegetheorie (Roper/Logan/Tierney, 1980).",
          glossarBegriffe: ["ATL (Lebensaktivitäten)"],
        },
        contentB1: {
          title: "Pflegemodell Roper/Logan/Tierney — 12 ATLs",
          body: "**Roper, Logan und Tierney (1980)** haben gezeigt: Jeder Mensch hat 12 wichtige Aktivitäten im Leben.\n\nDie 12 ATLs (Lebensaktivitäten) — verkürzt:\nAtmen, Essen, Trinken, Ausscheiden, Waschen, Anziehen, Temperatur halten, Bewegen, Schlafen, Sexualität, Arbeiten/Freizeit, Sterben, Kommunizieren.\n\nFür jede Aktivität gibt es ein **Kontinuum**: von 'kann es alleine' bis 'braucht für alles Hilfe'.\n\nBeispiel Patient nach Hüft-OP:\n- Essen: 90% selbständig ✓\n- Sich bewegen: 20% selbständig — hier braucht er Unterstützung\n\nDie Pflege hilft genau da, wo er auf dem Kontinuum schwach ist (Roper/Logan/Tierney, 1980).",
          glossarBegriffe: ["ATL (Lebensaktivitäten)"],
        },
      },
    },
    glossarBegriffe: ["ATL (Lebensaktivitäten)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: pflegeplan-aktualisieren (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pflegeplan-aktualisieren",
    themaId: "pflegeplanung",
    titel: "Evaluation und Pflegeplan-Aktualisierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Klein liegt seit 5 Tagen auf deiner Station. Ihr Pflegeplan wurde am Aufnahmetag geschrieben und seitdem nicht verändert. Was könnten die Folgen sein?",
      antwort:
        "Ein Pflegeplan muss mindestens einmal pro Dienst evaluiert werden — sofort bei Zustandsveränderungen. Ein 5 Tage alter Plan ist meist veraltet: Pflegeziele wurden vielleicht erreicht oder müssen angepasst werden, Medikamente wurden geändert, der Zustand hat sich verbessert oder verschlechtert. Evaluation ist eine vorbehaltene Tätigkeit der Pflegefachperson (§ 4 PflBG; NANDA-I, 2021).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Pflegeplan ist kein Dokument das einmal geschrieben und dann abgeheftet wird. Er muss **regelmäßig evaluiert und aktualisiert** werden. Mindestens **einmal pro Dienst**. Sofort bei: Sturz, neuem Symptom, Medikamentenänderung, Zustandsveränderung. Jede Evaluation dokumentieren: Datum, Uhrzeit, Kürzel.",
      textB1:
        "Der Pflegeplan muss regelmäßig überprüft werden — nicht nur einmal am Anfang. Mindestens **1× pro Dienst**. Sofort wenn sich etwas ändert: Sturz, neues Symptom, schlechterer oder besserer Zustand. Ein veralteter Plan bedeutet falsche Pflege.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-12",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["§ 4 PflBG", "NANDA-I 2021"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-evaluation",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Evaluation und Pflegeplan-Aktualisierung",
          body: "**Evaluation** ist der letzte und zugleich erste Schritt des Pflegeprozesses — denn nach der Evaluation folgt eine neue Planung. Ein Pflegeplan der nicht evaluiert wird, ist rechtlich und fachlich mangelhaft.\n\n**Frequenz:**\n- Mindestens **einmal pro Dienst** — das ist die Mindestanforderung\n- Bei instabilen Patienten: häufiger (z.B. alle 2 Stunden)\n- Sofort bei: Sturz, Schmerzzunahme, Bewusstseinsveränderung, neuer Diagnose, Verlegung, Medikamentenänderung\n\n**Was wird evaluiert?**\n- Sind die Pflegeziele erreicht? Teilweise? Gar nicht?\n- Hat die Pflegemaßnahme gewirkt?\n- Muss das Ziel angepasst werden (realistischer/ehrgeiziger)?\n- Muss die Pflegediagnose angepasst werden?\n\n**Dokumentation:** Jede Evaluation muss im Pflegebericht dokumentiert werden — mit Datum, Uhrzeit und Kürzel.\n\nEin nicht evaluierter Pflegeplan gefährdet die Patientensicherheit und verletzt die Dokumentationspflicht (§ 4 PflBG; NANDA-I, 2021).",
          glossarBegriffe: ["Evaluation", "Kontinuierliche Evaluation"],
        },
        contentB1: {
          title: "Evaluation und Pflegeplan-Aktualisierung",
          body: "Der Pflegeplan muss **regelmäßig überprüft** werden — das nennt man Evaluation.\n\n**Wie oft?**\n- Mindestens **einmal pro Dienst**\n- Sofort wenn sich etwas ändert: Sturz, Schmerzen, besserer oder schlechterer Zustand\n\n**Was frage ich bei der Evaluation?**\n- Hat die Maßnahme geholfen?\n- Ist das Ziel erreicht?\n- Muss etwas geändert werden?\n\n**Und dann?**\n- Plan anpassen wenn nötig\n- Alles dokumentieren mit Datum und Kürzel\n\nEin Pflegeplan der 5 Tage unverändert bleibt, stimmt meist nicht mehr. Veraltete Pläne bedeuten falsche Pflege — das schadet dem Patienten (§ 4 PflBG).",
          glossarBegriffe: ["Evaluation", "Kontinuierliche Evaluation"],
        },
      },
    },
    glossarBegriffe: ["Evaluation", "Kontinuierliche Evaluation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: pflegeplan-schreiben-praxis (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-pflegeplan-schreiben-praxis",
    themaId: "pflegeplanung",
    titel: "Pflegeplan schreiben — patientenzentriert und messbar",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Zwei Pflegeziele: (A) 'Mobilisation verbessern.' — (B) 'Herr Wagner geht bis Freitag täglich 2× mit Rollator 50 m auf dem Flur.' Welches Ziel ist besser — und warum genau?",
      antwort:
        "Ziel B ist besser — es ist SMART: Spezifisch (Herr Wagner, Rollator, 50 m), Messbar (50 m, 2× täglich), Patientenzentriert (Subjekt = Herr Wagner, nicht die Pflege), Terminiert (bis Freitag). Ziel A ist weder messbar noch überprüfbar. Außerdem häufige Fehler: 'Die Pflege mobilisiert täglich' ist eine Maßnahme, kein Ziel. Das Ziel muss immer beschreiben was der Patient erreicht. (NANDA-I 2021; § 4 PflBG)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegeziele und Pflegemaßnahmen müssen **konkret, messbar und patientenzentriert** sein. **Schwammig vs. konkret:** 'Mobilisation verbessern' → 'Herr W. geht 2× täglich 50 m mit Rollator bis Freitag'. **Warum patientenzentriert?** Das Ziel muss aus Sicht des Patienten formuliert sein — was er erreicht, nicht was die Pflege tut.",
      textB1:
        "Pflegeziele müssen konkret und messbar sein — sonst kann niemand prüfen ob sie erreicht wurden. **Schlecht:** 'Mobilisation verbessern.' → Woran erkennst du ob das erreicht wurde? **Gut:** 'Herr Wagner geht täglich 2× 50 m mit Rollator bis Freitag.' Der Patient steht im Mittelpunkt — nicht die Pflegeperson.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-13",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["NANDA-I 2021", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-smart-praxis",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Pflegeplan schreiben — patientenzentriert und messbar",
          body: "**Patientenzentrierte, messbare Pflegeziele** folgen dem **SMART-Prinzip:**\n- **S**pezifisch — Was genau soll erreicht werden?\n- **M**essbar — Woran erkenne ich, dass es erreicht wurde?\n- **A**kzeptabel — Ist das Ziel realistisch für diesen Patienten?\n- **R**ealistisch — Ist es machbar in der vorhandenen Zeit/mit vorhandenen Ressourcen?\n- **T**erminiert — Bis wann soll es erreicht sein?\n\n**Patientenzentriert** bedeutet: Das Subjekt des Satzes ist der Patient — nicht die Pflegeperson.\n- Nicht: 'Die Pflege mobilisiert täglich.' → Das ist eine Maßnahme, kein Ziel.\n- Ja: 'Herr Wagner geht bis Freitag 2× täglich 50 m mit Rollator.'\n\n**Häufige Fehler:**\n1. Ziel = Maßnahme (Verwechslung)\n2. Kein Zeitrahmen ('irgendwann')\n3. Nicht messbar ('besser', 'mehr', 'weniger')\n4. Zu allgemein ('Wohlbefinden steigern')\n\nKonkrete Ziele ermöglichen Evaluation — schwammige Ziele verhindern sie (NANDA-I, 2021; § 4 PflBG).",
          glossarBegriffe: ["Pflegeziel", "SMART-Kriterien"],
        },
        contentB1: {
          title: "Pflegeplan schreiben — patientenzentriert und messbar",
          body: "Ein gutes Pflegeziel ist **SMART**:\n- **S**pezifisch: Was genau?\n- **M**essbar: Woran siehst du es?\n- **A**kzeptabel: Realistisch für den Patienten?\n- **R**ealistisch: Wirklich machbar?\n- **T**erminiert: Bis wann?\n\nDas Ziel beschreibt immer was **der Patient** erreicht — nicht was du tust.\n\n**Schlecht (Maßnahme als Ziel):** 'Die Pflege hilft täglich bei der Mobilisation.'\n**Gut (patientenzentriertes Ziel):** 'Herr Wagner läuft bis Freitag 2× täglich 50 m mit Rollator.'\n\nHäufige Fehler:\n- Kein Datum ('irgendwann')\n- Nicht messbar ('besser fühlen')\n- Zu vage ('Mobilisation verbessern')\n\nSMART = prüfbar = gute Pflege (NANDA-I, 2021).",
          glossarBegriffe: ["Pflegeziel", "SMART-Kriterien"],
        },
      },
    },
    glossarBegriffe: ["Pflegeziel", "SMART-Kriterien"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: ressourcen-orientiert (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-ressourcen-orientiert",
    themaId: "pflegeplanung",
    titel: "Ressourcenorientierte Pflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Zwei Pflegepersonen beschreiben Herrn K. nach Schlaganfall. Pflegeperson A: 'Er kann nicht laufen, nicht selbst essen, braucht Hilfe beim Waschen.' Pflegeperson B: 'Er kann mit Hilfe sitzen, die rechte Hand bewegen und verstehen was man ihm sagt.' Was unterscheidet diese beiden Beschreibungen?",
      antwort:
        "Pflegeperson A denkt defizitorientiert — nur was der Patient nicht kann. Pflegeperson B denkt ressourcenorientiert — was der Patient noch kann. Der Ressourcen-Blick hilft mehr, weil er zeigt wo Pflege ansetzen kann. Ressourcenorientierung erhält Autonomie, fördert Rehabilitation und beugt Überversorgung vor. Kategorien: körperlich, kognitiv, sozial, emotional. (Krohwinkel 1993, NANDA-I 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Ressourcenorientierte Pflege** geht von dem aus, was der Patient noch kann — nicht von dem, was er nicht mehr kann. **Defizitorientiert:** 'Herr K. kann nicht laufen, nicht selbst essen, nicht waschen.' **Ressourcenorientiert:** 'Herr K. kann mit Unterstützung sitzen, die rechte Hand führen, Anweisungen folgen.' Ressourcenorientierung erhält Autonomie und fördert Rehabilitation.",
      textB1:
        "Ressourcenorientierte Pflege bedeutet: Ich schaue zuerst auf das, was der Patient **noch kann** — nicht auf das was er nicht mehr kann. Der Ressourcen-Blick hilft mehr — weil er zeigt wo Pflege ansetzen kann.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-14",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Krohwinkel 1993", "NANDA-I 2021"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-ressourcen",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Ressourcenorientierte Pflege",
          body: "**Ressourcenorientierung** ist ein Grundprinzip professioneller Pflege — verankert in Krohwinkels ABEDL-Modell (1993) und dem NANDA-I-System (2021).\n\n**Ressource** = eine Fähigkeit, Kraft oder Unterstützung die der Patient hat oder nutzen kann.\n- Körperlich: 'Kann mit Rollator 10 m gehen'\n- Kognitiv: 'Versteht Anweisungen, erinnert sich an Tagesablauf'\n- Sozial: 'Hat täglichen Besuch der Tochter'\n- Emotional: 'Motiviert, wieder heimzugehen'\n\n**Warum Ressourcen zuerst?**\n1. **Fachlich:** Pflege die auf vorhandenen Fähigkeiten aufbaut, ist effektiver als Kompensation.\n2. **Ethisch:** Der Patient bleibt Subjekt — er tut was er kann, bekommt Hilfe wo er sie braucht.\n3. **Präventiv:** Ressourcen die nicht genutzt werden, verkümmern — 'use it or lose it'.\n4. **Rechtlich:** Überversorgung ist Sorgfaltspflichtverletzung.\n\n**Ressourcen im Pflegeplan:** Bei jeder ABEDL/ATL werden Ressourcen und Probleme dokumentiert — Ressourcen zuerst (Krohwinkel, 1993 ABEDL; NANDA-I, 2021).",
          glossarBegriffe: ["Ressource (Pflege)", "Ressourcenorientierung"],
        },
        contentB1: {
          title: "Ressourcenorientierte Pflege",
          body: "**Ressourcen** sind das, was der Patient noch kann.\n\nRessourcen können sein:\n- **Körperlich:** 'Kann mit Rollator 10 m gehen'\n- **Kognitiv:** 'Versteht Anweisungen'\n- **Sozial:** 'Tochter kommt täglich'\n- **Emotional:** 'Möchte wieder heimgehen'\n\n**Warum Ressourcen so wichtig?**\n1. Was ich selbst kann, will ich auch selbst tun — das erhält meine Selbstständigkeit.\n2. Was nicht genutzt wird, geht verloren ('use it or lose it').\n3. Zu viel helfen macht abhängig — das ist das Gegenteil von guter Pflege.\n\nDeshalb: Ressourcen zuerst benennen — dann schauen wo Hilfe nötig ist (Krohwinkel, 1993).",
          glossarBegriffe: ["Ressource (Pflege)", "Ressourcenorientierung"],
        },
      },
    },
    glossarBegriffe: ["Ressource (Pflege)", "Ressourcenorientierung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: partizipative-planung (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegeplanung-partizipative-planung",
    themaId: "pflegeplanung",
    titel: "Partizipative Pflegeplanung — Shared Decision Making",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Yilmaz (72) soll nach dem Pflegeplan täglich um 07:00 Uhr aufstehen und geduscht werden. Sie sagt: 'Ich bin mein ganzes Leben nie vor 09:00 Uhr aufgestanden.' Was machst du?",
      antwort:
        "Shared Decision Making (SDM) — gemeinsam entscheiden. Frau Yilmaz ist Expertin ihres eigenen Lebens, du bist Expertin der Pflege. Die richtige Reaktion: Plan auf 09:00 Uhr anpassen — denn ein Plan den sie ablehnt, wird nicht funktionieren. SDM-Schritte: Informieren, Präferenzen erfragen, gemeinsam entscheiden, Patientenpräferenzen dokumentieren. (NANDA-I 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Partizipative Pflegeplanung** bedeutet: Der Patient wird aktiv in die Erstellung und Anpassung des Pflegeplans einbezogen. Das nennt man auch **Shared Decision Making (SDM)**. Warum? Der Patient ist der Experte seines eigenen Lebens. Ein Plan der gegen seinen Willen läuft, wird nicht akzeptiert und scheitert.",
      textB1:
        "**Partizipativ** bedeutet: Du planst nicht alleine — du planst mit dem Patienten zusammen. Das nennt man **Shared Decision Making** — gemeinsam entscheiden. Du bist Expertin der Pflege — sie ist Expertin ihres Lebens.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pflegeplanung-wb-15",
        phase: 1,
        stepType: "branching",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["NANDA-I 2021", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegeplanung-sdm",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Partizipative Pflegeplanung — Shared Decision Making",
          body: "**Shared Decision Making (SDM)** ist in der professionellen Pflege kein optionaler Bonus — es ist ein ethisches und rechtliches Gebot (Patientenautonomie, § 4 PflBG).\n\n**Zwei Expertisen kommen zusammen:**\n- Patient = Experte des eigenen Lebens (Werte, Gewohnheiten, Präferenzen, Lebensziele)\n- Pflegefachperson = Expertin der Pflege (Fachwissen, Risiken, Interventionsmöglichkeiten)\n\n**SDM-Schritte in der Pflegeplanung:**\n1. Informieren: 'Ich erkläre, welche Pflegemaßnahmen sinnvoll sind — und warum.'\n2. Präferenzen erfragen: 'Was ist Ihnen dabei wichtig? Was möchten Sie auf keinen Fall?'\n3. Gemeinsam entscheiden: Plan, der Fachlichkeit und Patientenwünsche verbindet.\n4. Dokumentieren: Patientenpräferenzen im Pflegeplan schriftlich festhalten.\n\n**Schwierige Situationen für SDM:**\n- Demenziell erkrankte Patienten: Mutmaßlicher Wille und gesetzliche Vertretung\n- Patienten im Wachkoma: Vorsorgevollmacht und Patientenverfügung prüfen\n- Minderjährige: Eltern einbeziehen aber Präferenzen des Kindes berücksichtigen\n\nKein Patientenwille — keine partizipative Planung, aber trotzdem Pflicht den mutmaßlichen Willen zu berücksichtigen (NANDA-I, 2021).",
          glossarBegriffe: ["Shared Decision Making (SDM)", "Patientenautonomie"],
        },
        contentB1: {
          title: "Partizipative Pflegeplanung — Shared Decision Making",
          body: "**Shared Decision Making (SDM)** — gemeinsam entscheiden — ist ein wichtiges Prinzip in der Pflege.\n\nDu bist Expertin für Pflege. Die Patientin ist Expertin für ihr Leben.\n\n**In 4 Schritten:**\n1. Erkläre: 'Diese Maßnahmen würde ich empfehlen — weil...'\n2. Frage: 'Was ist Ihnen wichtig? Was möchten Sie nicht?'\n3. Entscheidet gemeinsam was am besten passt.\n4. Schreibe die Präferenzen in den Pflegeplan.\n\n**Beispiel:** Frau Yilmaz schläft bis 09:00. Im Plan steht 07:00. Lösung: Plan auf 09:00 anpassen — denn ein Plan den sie ablehnt, wird nicht funktionieren.\n\nPatientenrechte bedeuten: Ihr Wille zählt (NANDA-I, 2021).",
          glossarBegriffe: ["Shared Decision Making (SDM)", "Patientenautonomie"],
        },
      },
    },
    glossarBegriffe: ["Shared Decision Making (SDM)", "Patientenautonomie"],
    karteikarten: [],
  },
];
