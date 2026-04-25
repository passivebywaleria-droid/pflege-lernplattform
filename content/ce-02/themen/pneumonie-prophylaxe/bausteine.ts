// CE-02 Thema Pneumonie-Prophylaxe — Wissensbausteine (11 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/pneumonie-prophylaxe/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler, B2)
// Stufe 3 = Erklärung als ContentStep (Anfänger, B1)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_PNEUMONIE_PROPHYLAXE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: pneumonie-definition-risiko (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-definition",
    themaId: "pneumonie-prophylaxe",
    titel: "Definition: Was ist eine Pneumonie?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was passiert in der Lunge, wenn jemand lange flach liegt und wenig atmet? Stell dir vor, du liegst eine ganze Woche auf dem Rücken im Bett und darfst nicht aufstehen.",
      antwort:
        "Eine Pneumonie ist eine Entzündung des Lungengewebes, meist durch Bakterien, Viren oder Pilze. Bei immobilen Patienten entsteht sie häufig als nosokomiale Pneumonie — erworben im Krankenhaus, 48 Stunden nach Aufnahme. Flache Atmung und fehlende Tiefatmung lassen Lungenbereiche unbelüftet (Atelektase). Sekret staut sich, Keime vermehren sich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Eine Pneumonie ist eine Entzündung des Lungengewebes, meist durch Bakterien, Viren oder Pilze. Bei immobilen Patienten entsteht sie häufig als nosokomiale Pneumonie — erworben im Krankenhaus, frühestens 48 Stunden nach Aufnahme. (AWMF S3 2017)",
      textB1:
        "Eine Pneumonie ist eine Lungenentzündung. Meistens machen Bakterien oder Viren die Lunge krank. Wer im Krankenhaus liegt und sich kaum bewegt, bekommt oft eine Pneumonie. Das nennt man nosokomial: im Krankenhaus bekommen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3-Leitlinie Nosokomiale Pneumonie (2017)", "KRINKO (2013)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-definition",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Definition: Was ist eine Pneumonie?",
          body: "Eine **Pneumonie** ist eine akute Entzündung des Lungengewebes, ausgelöst durch Bakterien (häufigster Erreger: Streptococcus pneumoniae), Viren, Pilze oder selten Aspiration. Im Pflege-Kontext ist die **nosokomiale Pneumonie** entscheidend: Sie entsteht frühestens 48 Stunden nach Krankenhausaufnahme und ist nach Harnwegsinfekten die zweithäufigste Krankenhausinfektion in Deutschland.\n\n**Pathophysiologie bei immobilen Patienten:** Flache Atmung und fehlende Tiefatmung lassen Lungenbereiche unbelüftet (Atelektase). Sekret wird nicht abgehustet, staut sich in den Bronchien. Keime vermehren sich in diesem warmen, feuchten Milieu. Gleichzeitig ist die mukoziliäre Clearance (Selbstreinigung der Atemwege durch Flimmerhärchen) reduziert.\n\n**Klinische Zeichen:** Fieber, Husten mit Auswurf, Dyspnoe, rasselnde Atemgeräusche, Tachypnoe (>20/Min), erhöhter CRP-Wert. Bei älteren Patienten oft nur Verwirrtheit und Appetitlosigkeit — kein Fieber. (AWMF S3 2017)",
          glossarBegriffe: ["Pneumonie", "Nosokomiale Pneumonie", "Atelektase", "Mukoziliäre Clearance", "Dyspnoe"],
        },
        contentB1: {
          title: "Was ist eine Pneumonie?",
          body: "Eine **Pneumonie** ist eine Lungenentzündung. Die Lunge wird krank durch Bakterien oder Viren. Wer im Krankenhaus liegt, hat ein hohes Risiko. Das nennt man **nosokomial**: im Krankenhaus bekommen — erst ab 48 Stunden nach Aufnahme.\n\n**Warum wird die Lunge krank?** Wer flach liegt, atmet flacher. Manche Teile der Lunge bekommen keine Luft. Das Sekret (Schleim) bleibt in den Bronchien. Bakterien wachsen dort.\n\n**Diese Zeichen sind wichtig:** Fieber, Husten, Atemnot, schnelle Atmung (mehr als 20x pro Minute), rasselnde Atemgeräusche. Bei alten Menschen oft nur: verwirrt sein, nicht essen wollen. Kein Fieber!",
          glossarBegriffe: ["Pneumonie", "Nosokomiale Pneumonie", "Atelektase"],
        },
      },
    },
    glossarBegriffe: ["Pneumonie", "Nosokomiale Pneumonie", "Atelektase", "Mukoziliäre Clearance", "Dyspnoe"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: risikofaktoren-screening (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-risikofaktoren",
    themaId: "pneumonie-prophylaxe",
    titel: "Risikofaktoren erkennen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Drei Patienten auf deiner Station: ein beatmeter Intensivpatient, ein Schlaganfall-Patient mit Schluckstörung, ein junger Mann mit gebrochenem Arm. Wer hat das höchste Pneumonie-Risiko und warum?",
      antwort:
        "Hauptrisikofaktoren: Immobilität, Bewusstseinseinschränkung, Intubation/Beatmung, Schluckstörung (Dysphagie), Sekretverhaltung, höheres Alter, COPD, Rauchen, Immunschwäche und Magensonde. Je mehr Faktoren zusammenkommen, desto höher das Risiko. Der beatmete Patient hat das höchste Risiko (ausgeschaltete Schutzbarrieren, VAP), gefolgt vom Schlaganfall-Patient (Dysphagie, stille Aspiration).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hauptrisikofaktoren: **Immobilität**, **Bewusstseinseinschränkung**, **Intubation/Beatmung**, **Schluckstörung (Dysphagie)**, **Sekretverhaltung**, höheres Alter, COPD, Rauchen, Immunschwäche und Magensonde. Je mehr Faktoren zusammenkommen, desto höher das Risiko.",
      textB1:
        "Hohes Risiko haben: Patienten die nicht aufstehen, die bewusstlos sind, die beatmet werden, die sich verschlucken, die Sekret nicht abhusten. Dazu: alte Menschen, COPD, Raucher, schwaches Immunsystem, Magensonde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3 (2017)", "KRINKO (2013)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-risikofaktoren",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Risikofaktoren erkennen",
          body: "Die Risikofaktoren lassen sich in 3 Gruppen einteilen:\n\n**Pflegerelevante Hauptrisiken (tägliches Screening):**\n- **Immobilität**: flache Atmung, reduzierter Hustenstoß, Sekretretention. Jeder Tag Bettruhe erhöht das Pneumonie-Risiko.\n- **Bewusstseinseinschränkung**: Hustenreflex und Schluckreflex fehlen oder sind abgeschwächt — Mikroaspiration von Speichel und Magensaft.\n- **Dysphagie (Schluckstörung)**: bei Schlaganfall, M. Parkinson, Demenz — stille Aspiration möglich (ohne Husten).\n- **Intubation/Tracheotomie**: natürliche Schutzbarrieren (Epiglottis, Glottis) ausgehebelt — ventilatorassoziierte Pneumonie (VAP).\n\n**Patientenbedingte Risikofaktoren:**\n- Alter > 65 Jahre, COPD, Herzinsuffizienz, Diabetes, Immunsuppression, Mangelernährung, aktives Rauchen.\n\n**Iatrogene Risikofaktoren:**\n- Magensonde (Reflux-Risiko), Sedativa, Protonenpumpen-Hemmer (pH-Anstieg im Magen → Keimbesiedlung), flache Lagerung.\n\n**Risiko-Einschätzung im Pflegeprozess:** Bei Aufnahme und bei jeder Zustandsänderung. Kein einzelnes Instrument ist Pflicht — klinische Einschätzung führt, ergänzt durch Dysphagie-Screening (z.B. GUSS-Test bei Schlaganfall). (AWMF S3 2017, KRINKO 2013)",
          glossarBegriffe: ["Dysphagie", "Stille Aspiration", "VAP", "GUSS-Test"],
        },
        contentB1: {
          title: "Risikofaktoren erkennen",
          body: "Es gibt **3 Gruppen** von Risiken:\n\n**1. Die Pflege kann etwas tun — hier liegt der Fokus:**\n- **Liegen ohne Bewegung**: Wer liegt, atmet flach. Sekret bleibt in der Lunge.\n- **Bewusstlos**: Kein Husten. Speichel läuft in die Lunge.\n- **Schluckstörung**: Essen oder Trinken kommt in die falsche Röhre. Oft still — ohne Husten!\n- **Beatmung**: Der Schlauch öffnet die Lunge für Keime.\n\n**2. Der Patient selbst bringt Risiken mit:**\n- Älter als 65 Jahre\n- COPD, Herzschwäche, Diabetes\n- Raucher, schlechte Ernährung\n\n**3. Die Behandlung macht Risiken:**\n- Magensonde\n- Beruhigungsmittel\n- Flache Lagerung\n\n**Prüfen:** Bei Aufnahme und bei jeder Veränderung. Bei Schlaganfall: GUSS-Test für Schlucken.",
          glossarBegriffe: ["Dysphagie", "Stille Aspiration", "VAP", "GUSS-Test"],
        },
      },
    },
    glossarBegriffe: ["Dysphagie", "Stille Aspiration", "VAP", "GUSS-Test"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: lisa-prinzip (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-lisa-prinzip",
    themaId: "pneumonie-prophylaxe",
    titel: "Das LISA-Prinzip",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche 4 Stellschrauben hast du in der Pflege, um eine Pneumonie zu verhindern? Überlege: was kannst du körperlich tun, damit die Lunge gut belüftet bleibt?",
      antwort:
        "Das LISA-Prinzip fasst die 4 Säulen der Pneumonie-Prophylaxe zusammen: Lagerung (Oberkörperhochlagerung), Inhalation (Befeuchtung/Medikamente), Sekretmanagement (Abhusten fördern), Atemübungen (Lippenbremse, Tiefatmung). LISA ist eine didaktische Merkhilfe, keine Leitlinie. Bündel-Strategie plus Frühmobilisation wirkt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das **LISA-Prinzip** fasst die 4 Säulen der Pneumonie-Prophylaxe zusammen: **L**agerung (Oberkörperhochlagerung), **I**nhalation (Befeuchtung/Medikamente), **S**ekretmanagement (Abhusten fördern), **A**temübungen (Lippenbremse, Tiefatmung).",
      textB1:
        "**LISA** ist eine Eselsbrücke. Sie steht für 4 Maßnahmen gegen Pneumonie: **L** = Lagerung (Oberkörper hoch). **I** = Inhalation (Luft feucht machen). **S** = Sekret (Schleim aus der Lunge holen). **A** = Atemübungen (bewusst atmen).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3 (2017)", "KRINKO (2013)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-lisa",
        tag: "pflege",
        displayFormat: "mnemonic",
        contentC1: {
          title: "Das LISA-Prinzip",
          body: "Das **LISA-Prinzip** ist eine didaktische Eselsbrücke für die 4 Säulen der Pneumonie-Prophylaxe. Jede Säule zielt auf einen pathophysiologischen Mechanismus:\n\n**L — Lagerung:** Oberkörperhochlagerung 30-45° verbessert die Atemmechanik (Zwerchfell hängt nach unten, mehr Platz für Lungenflügel), reduziert Mikroaspiration (Refluxschutz) und beugt Atelektasen vor. Nachweislich wirksam gegen ventilatorassoziierte Pneumonie (KRINKO 2013).\n\n**I — Inhalation:** Anfeuchtung der Atemluft (Kochsalzinhalation, Raumbefeuchter) verflüssigt zähes Sekret. Ärztlich verordnet können auch Medikamente inhaliert werden (Bronchodilatatoren, Mukolytika). Wichtig: Keine Routine-Inhalation ohne Indikation.\n\n**S — Sekretmanagement:** Atemunterstützung (VRP-1-Flutter, PEP-Systeme), rechtzeitiges Absaugen (nur bei Bedarf, nicht routinemäßig), Hustenunterstützung (Hustenassistent, manuelle Techniken).\n\n**A — Atemübungen:** Lippenbremse, Kontaktatmung, Tiefatmung mit Anhalten, Triflow-Training. Aktivieren die Belüftung aller Lungenbezirke und kräftigen die Atemmuskulatur.\n\n**Grundregel:** LISA wirkt nur in Kombination mit **Frühmobilisation** — kein LISA ohne Bewegung. (AWMF S3 2017)",
          glossarBegriffe: ["LISA-Prinzip", "Atelektase", "Lippenbremse", "PEP-Gerät / VRP-1 Flutter"],
        },
        contentB1: {
          title: "Das LISA-Prinzip",
          body: "**LISA** ist eine Eselsbrücke für 4 Dinge gegen Pneumonie:\n\n**L — Lagerung:** Den Oberkörper hoch lagern (30-45°). Das Zwerchfell kann besser arbeiten. Die Lunge bekommt mehr Platz. Weniger Reflux in die Lunge.\n\n**I — Inhalation:** Die Luft feucht machen. Das Sekret wird dünnflüssiger. Der Arzt kann Medikamente dazu geben.\n\n**S — Sekret weg:** Dem Patienten helfen, den Schleim loszuwerden. Zum Beispiel mit einem **Flutter** (kleines Gerät zum Pusten) oder Absaugen (nur wenn nötig).\n\n**A — Atemübungen:** Lippenbremse, Kontaktatmung, tief einatmen und die Luft halten. Das Training stärkt die Atemmuskeln.\n\n**Wichtig:** LISA hilft nur, wenn der Patient sich auch **bewegt**.",
          glossarBegriffe: ["LISA-Prinzip", "Lippenbremse"],
        },
      },
    },
    glossarBegriffe: ["LISA-Prinzip", "Atelektase", "Lippenbremse"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: oberkoerperhochlagerung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-oberkoerperhoch",
    themaId: "pneumonie-prophylaxe",
    titel: "Oberkörperhochlagerung 30-45°",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum ist es für die Lunge besser, wenn der Kopf höher liegt als die Füße? Und gibt es einen Unterschied, ob 15°, 30° oder 45° gelagert wird?",
      antwort:
        "Die Oberkörperhochlagerung 30-45° ist die bestbelegte Einzelmaßnahme. Sie vergrößert das Atemzugvolumen, senkt die Mikroaspiration aus Oropharynx und Magen und reduziert nachweislich die Rate ventilatorassoziierter Pneumonien. Die Drakulovic-Studie (1999) zeigte: VAP-Rate von 34% auf 8% bei 45°-Lagerung. (KRINKO 2013)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Oberkörperhochlagerung **30-45°** ist die bestbelegte Einzelmaßnahme. Sie vergrößert das Atemzugvolumen, senkt die Mikroaspiration aus Oropharynx und Magen und reduziert nachweislich die Rate ventilatorassoziierter Pneumonien. (KRINKO 2013)",
      textB1:
        "Den Oberkörper **30-45°** hochlagern. Das ist die wirksamste Einzelmaßnahme. Die Lunge bekommt mehr Platz (mehr Luft pro Atemzug). Speichel und Magensaft rutschen weniger in die Lunge. Weniger Pneumonie — besonders bei Beatmung.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-04",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["KRINKO (2013)", "Drakulovic et al. (1999)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-oberkoerperhoch",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Oberkörperhochlagerung 30-45°",
          body: "Die **Oberkörperhochlagerung** zwischen 30° und 45° wirkt über drei Mechanismen:\n\n**1. Atemmechanik:** Das Zwerchfell hängt durch die Schwerkraft nach unten, die Lunge hat mehr Raum zur Entfaltung. Das Atemzugvolumen steigt messbar. Atelektasen in den unteren Lungenbezirken werden reduziert.\n\n**2. Refluxschutz:** Bei flacher Lagerung fließt Magensaft leicht in den Rachen zurück und wird aspiriert (stille Mikroaspiration). Die schräge Position wirkt wie eine natürliche Antireflux-Barriere.\n\n**3. Sekret-Drainage:** Sekret aus den oberen Atemwegen läuft nach unten zum Mund, kann geschluckt oder abgesaugt werden — nicht in die tiefen Atemwege.\n\n**Evidenz:** Die Drakulovic-Studie (1999) zeigte bei beatmeten Patienten eine Senkung der VAP-Rate von 34% auf 8% durch 45°-Lagerung statt Flachlagerung.\n\n**Praktisch:** Keilkissen oder verstellbares Kopfteil nutzen. **Vorsicht:** Reine Kopfteilerhöhung führt oft zum Hochrutschen (Scherkräfte → Dekubitus-Risiko). Daher Kombination mit leichter Knieknickstellung. Bei Patienten mit Schock oder Rückenmarkverletzung: ärztliche Rücksprache. (KRINKO 2013)",
          glossarBegriffe: ["VAP", "Atelektase", "Stille Aspiration"],
        },
        contentB1: {
          title: "Oberkörperhochlagerung 30-45°",
          body: "**Oberkörper 30-45° hoch** — so geht die beste Pneumonie-Lagerung. Das hilft auf 3 Arten:\n\n**1. Bessere Atmung:** Das Zwerchfell rutscht nach unten. Die Lunge bekommt mehr Platz. Der Patient atmet tiefer.\n\n**2. Schutz vor Reflux:** Magensaft bleibt im Magen. Er läuft nicht in die Lunge. Kein stilles Verschlucken mehr.\n\n**3. Sekret läuft raus:** Schleim fließt nach unten zum Mund. Dort schlucken oder absaugen. Nicht mehr tief in die Lunge.\n\n**Studien zeigen:** Bei Beatmung sinkt die Pneumonie-Rate von 34% auf 8% nur durch 45°-Lagerung!\n\n**Wichtig:** Nur das Kopfteil hochstellen macht den Patienten hochrutschen. **Dekubitus-Gefahr!** Deshalb: Knie auch leicht hochstellen. So rutscht er nicht.\n\n**Nicht machen bei:** Schock, Rückenmarksverletzung — erst den Arzt fragen.",
          glossarBegriffe: ["VAP", "Atelektase"],
        },
      },
    },
    glossarBegriffe: ["VAP", "Atelektase", "Stille Aspiration"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: atemuebungen-lippenbremse (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-lippenbremse",
    themaId: "pneumonie-prophylaxe",
    titel: "Atemübungen: Lippenbremse",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du pustest langsam gegen eine Kerze, ohne dass sie ausgeht. Was machst du dabei mit deinen Lippen? Und warum könnte das für einen Patienten mit COPD hilfreich sein?",
      antwort:
        "Die Lippenbremse: Der Patient atmet gegen leicht geschlossene, locker aufeinanderliegende Lippen aus. Dadurch entsteht ein Gegendruck in den Bronchien (PEEP-Effekt) — diese bleiben länger offen, mehr Luft kann ausgeatmet werden. Besonders wirksam bei COPD, Asthma, postoperativer Atemnot. Ausatmung doppelt so lang wie Einatmung.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Lippenbremse**: Der Patient atmet gegen leicht geschlossene, locker aufeinanderliegende Lippen aus. Dadurch entsteht ein Gegendruck in den Bronchien — diese bleiben länger offen, mehr Luft kann ausgeatmet werden. Wichtig bei COPD, Asthma.",
      textB1:
        "Die **Lippenbremse** geht so: Der Patient atmet durch die fast geschlossenen Lippen aus — wie beim Pusten. Dabei entsteht ein kleiner Gegendruck. Die Bronchien bleiben länger offen. Mehr Luft kommt raus. Hilft bei COPD und Asthma.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-05",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["GOLD-Report COPD (2023)", "AWMF S2k COPD"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-lippenbremse",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Atemübungen: Lippenbremse",
          body: "Die **Lippenbremse** (pursed-lip breathing) ist eine der ältesten und wirksamsten Atemtechniken. Die Anleitung:\n\n**Schritt 1:** Der Patient sitzt aufrecht oder lehnt sich leicht nach vorn (Kutschersitz).\n**Schritt 2:** Normal und ruhig durch die Nase einatmen.\n**Schritt 3:** Die Lippen locker aufeinanderlegen, so als würde er das Wort 'f' formen.\n**Schritt 4:** Langsam gegen die Lippen ausatmen — etwa doppelt so lange wie die Einatmung.\n\n**Physiologische Wirkung:** Durch die Verengung entsteht ein positiver endexpiratorischer Druck (PEEP-Effekt). Dieser Druck stabilisiert die kleinen Bronchien und Bronchiolen, die sonst bei Ausatmung kollabieren (dynamischer Bronchialkollaps). Mehr Luft verlässt die Lunge, Air-Trapping und Überblähung werden reduziert. Die Atemfrequenz sinkt, die Atmung wird effektiver.\n\n**Besonders wirksam bei:** COPD, Asthma (Kollapsneigung der Bronchien), postoperativ (Oberbauch-OP, Thorax-OP), bei Atemnot als Sofort-Technik.\n\n**Kombination:** Lippenbremse + Kutschersitz + ruhige Atmung = Notfall-Paket bei Atemnot.\n\n**Anleitung durch Pflege:** Vor dem Patienten selbst vormachen, gemeinsam üben. Mehrmals täglich 5-10 Wiederholungen, nicht bis zum Erschöpfen. (AWMF S3 COPD, GOLD 2023)",
          glossarBegriffe: ["Lippenbremse", "PEEP-Effekt", "Kutschersitz"],
        },
        contentB1: {
          title: "Atemübungen: Lippenbremse",
          body: "Die **Lippenbremse** ist eine wichtige Atemübung. So geht es:\n\n**Schritt 1:** Aufrecht sitzen oder nach vorn lehnen (Kutschersitz).\n**Schritt 2:** Normal durch die Nase einatmen.\n**Schritt 3:** Die Lippen locker aufeinanderlegen. Wie wenn du das 'f' sagst.\n**Schritt 4:** Langsam durch die Lippen ausatmen. Doppelt so lange wie einatmen.\n\n**Warum hilft das?** Durch die Lippen entsteht ein **Gegendruck**. Die kleinen Bronchien bleiben offen. Die Luft kommt besser aus der Lunge. Die Lunge überbläht nicht.\n\n**Gut bei:** COPD, Asthma, nach einer OP am Bauch oder Brustkorb, bei plötzlicher Atemnot.\n\n**Tipp:** Der Kutschersitz (auf Stuhl sitzen, Hände auf Knie, leicht nach vorne lehnen) plus Lippenbremse hilft sofort bei Atemnot.\n\n**So lernt es der Patient:** Zeig es ihm zuerst. Dann übt ihr zusammen. Mehrmals am Tag 5-10 mal. Nicht zu viel auf einmal.",
          glossarBegriffe: ["Lippenbremse", "PEEP-Effekt", "Kutschersitz"],
        },
      },
    },
    glossarBegriffe: ["Lippenbremse", "PEEP-Effekt", "Kutschersitz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: atemuebungen-kontaktatmung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-kontaktatmung",
    themaId: "pneumonie-prophylaxe",
    titel: "Atemübungen: Kontaktatmung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient mit Pneumonie liegt im Bett. Du willst ihm helfen, tiefer zu atmen, aber er kann nicht aktiv mitmachen. Wie könntest du ihn nur durch Berührung dazu anregen, bewusster in bestimmte Lungenbereiche zu atmen?",
      antwort:
        "Die Kontaktatmung ist eine Wahrnehmungs-Technik: Die Pflegeperson legt die Hände auf die Brust- oder Flankenwand des Patienten. Der Patient atmet bewusst gegen den Handkontakt. Das aktiviert gezielt Lungenbezirke, die sonst wenig belüftet sind. Aktiviert propriozeptive Reize, besonders bei schwachen, verwirrten oder dyspnoischen Patienten — ohne Geräte.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Kontaktatmung** ist eine Wahrnehmungs-Technik: Die Pflegeperson legt die Hände auf die Brust- oder Flankenwand des Patienten. Der Patient atmet bewusst gegen den Handkontakt. Das aktiviert gezielt Lungenbezirke, die sonst wenig belüftet sind.",
      textB1:
        "Bei der **Kontaktatmung** legt die Pflegeperson ihre Hände auf die Brust oder die Seite des Patienten. Der Patient atmet bewusst gegen die Hand. So aktiviert er Bereiche der Lunge, die sonst kaum Luft bekommen. Hilft besonders bei Schwachen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-06",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Atemtherapie-Grundlagen (Wacker-Schulz-Konzept)", "I Care Pflege — Thieme"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-kontaktatmung",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Atemübungen: Kontaktatmung",
          body: "Die **Kontaktatmung** gehört zur Atemtherapie nach Wacker-Schulz und ist besonders wertvoll, wenn Patienten kognitiv oder körperlich schwach sind:\n\n**Schritt 1 — Vorbereitung:** Hände warmreiben, Patient informieren, Intimsphäre wahren. Patient in bequemer Position (Seitenlage, halbhohe Rückenlage).\n\n**Schritt 2 — Hand-Kontakt:** Die Hände flach mit dem ganzen Handteller auf die Rippenbögen legen — dort, wo die Belüftung verbessert werden soll (z.B. beidseits Flanken, Unterlappen hinten).\n\n**Schritt 3 — Anleitung:** 'Atme in meine Hand hinein.' — Der Patient fokussiert die Atmung bewusst in den Bereich unter der Hand. Bei der Einatmung hebt sich die Hand leicht.\n\n**Schritt 4 — Exspirationshilfe:** Bei der Ausatmung kann die Pflegeperson leicht mit dem Thorax mitgehen (kein Druck, nur folgen).\n\n**Schritt 5 — Rhythmus:** 5-10 Atemzüge pro Zone, dann Zone wechseln.\n\n**Physiologische Wirkung:** Aktivierung propriozeptiver Reize, gezielte Mehrbelüftung unterbelüfteter Lungenabschnitte, Reduktion von Atelektasen. Gleichzeitig beruhigend und atemsynchronisierend — besonders bei unruhigen oder dyspnoischen Patienten.",
          glossarBegriffe: ["Kontaktatmung", "Atelektase", "Dyspnoe"],
        },
        contentB1: {
          title: "Atemübungen: Kontaktatmung",
          body: "Die **Kontaktatmung** hilft schwachen Patienten, bewusster zu atmen. So geht sie:\n\n**Schritt 1 — Vorbereiten:** Deine Hände warm machen. Den Patienten informieren. Er liegt bequem — auf der Seite oder halb sitzend.\n\n**Schritt 2 — Hände auflegen:** Lege deine Hände flach auf die Rippen. An die Stelle, wo du die Atmung verbessern willst. Zum Beispiel beide Seiten unten hinten.\n\n**Schritt 3 — Anleiten:** Sag: 'Atme in meine Hand hinein.' Der Patient denkt bewusst an die Stelle unter deiner Hand. Er atmet dorthin.\n\n**Schritt 4 — Ausatmung begleiten:** Beim Ausatmen folge leicht mit der Hand. Nicht drücken! Nur mitgehen.\n\n**Schritt 5 — Wechseln:** 5-10 Atemzüge pro Stelle. Dann eine andere Stelle.\n\n**Wie hilft das?** Die Berührung macht die Atmung bewusst. Bereiche der Lunge, die sonst wenig Luft bekommen, werden aktiviert. Die Atmung wird ruhiger. Gut bei Unruhe oder Atemnot.\n\n**Extra:** Die Kontaktatmung geht auch bei Dementen oder schwachen Patienten. Keine Geräte nötig.",
          glossarBegriffe: ["Kontaktatmung", "Atelektase"],
        },
      },
    },
    glossarBegriffe: ["Kontaktatmung", "Atelektase"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: sekretmanagement-huststechniken (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-sekretmanagement",
    themaId: "pneumonie-prophylaxe",
    titel: "Sekretmanagement und Husttechniken",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient nach Bauch-OP hat Schleim in der Lunge, aber beim Husten tut die Wunde so weh, dass er es unterlässt. Welche zwei Probleme entstehen und wie könntest du ihm helfen?",
      antwort:
        "Die zwei Probleme: (1) Schmerz-bedingter Hustenverzicht → Sekret staut sich → Pneumonie-Risiko steigt. (2) Atelektasen durch flache Atmung. Hilfe: Huffing statt Stoßhusten (weniger Schmerz), Bauchdeckenstütze mit Kissen, Schmerztherapie optimieren, PEP-Gerät zur Sekretlockerung, Frühmobilisation.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Sekretmanagement umfasst: **Sekret-Lockerung** (Inhalation, Lagerung, PEP-Geräte wie VRP-1 Flutter), **Hustenunterstützung** (Bauchdecken-Abstützung, Huffing statt Stoßhusten), und bei Bedarf **Absaugen** (nur bei fehlendem Husten, steril, zeitlich begrenzt).",
      textB1:
        "Sekret aus der Lunge holen geht so: **Lockern** (Inhalation, PEP-Geräte zum Pusten), **Abhusten** (Wunde stützen, Huffing statt starker Hustenstoß), **Absaugen** (nur wenn nicht gehustet werden kann — steril, kurz). Das ist Pflege-Handwerk.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-07",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["KRINKO (2013)", "AWMF S3 (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-sekretmanagement",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Sekretmanagement und Husttechniken",
          body: "Das Sekretmanagement folgt einem 3-Stufen-Konzept:\n\n**1. Sekret-Lockerung:**\n- **Inhalation** mit 0,9% NaCl bei zähem Sekret (nur bei Indikation)\n- **Lagerungsdrainage:** Patient so lagern, dass betroffene Lungenabschnitte oben liegen — Sekret fließt zur Trachea\n- **PEP-Geräte** (VRP-1 Flutter, RC-Cornet, Acapella): Beim Ausatmen entsteht Oszillation, die Sekret in den Bronchien löst.\n- **Autogene Drainage** nach Chevaillier: Atmung in 3 Volumina (niedrig-mittel-hoch), um Sekret schrittweise hochzubringen.\n\n**2. Hustentechniken:**\n- **Huffing (Hauchen):** Weit geöffneter Mund, zischendes Ausatmen — bringt Sekret hoch, ohne hohen Intrathorax-Druck. Wertvoll nach Bauch- oder Thorax-OP.\n- **Abgestütztes Husten:** Patient drückt ein Kissen oder die Hände auf die Wunde (postoperativ), um den Schmerz zu reduzieren.\n- **Pflege-Anleitung:** Tief durch die Nase einatmen, 2 Sekunden halten, dann Huffing. 3-5 Wiederholungen pro Sitzung.\n\n**3. Absaugen (nur bei Bedarf!):**\n- **Indikation:** Wenn Patient selbst nicht abhusten kann (Bewusstlosigkeit, Intubation, schwere Muskelschwäche)\n- **Steril**, Handschuhe, Mundschutz\n- **Zeitlich begrenzt:** max 10-15 Sekunden pro Absaugvorgang\n- **Nicht routinemäßig:** Jedes Absaugen reizt die Schleimhaut und kann Keime tiefer bringen.\n\n**Grundregel:** So wenig Absaugen wie möglich, so viel aktive Sekretmobilisierung wie möglich. (KRINKO 2013, AWMF S3 2017)",
          glossarBegriffe: ["Huffing", "Lagerungsdrainage", "PEP-Gerät / VRP-1 Flutter"],
        },
        contentB1: {
          title: "Sekretmanagement und Husttechniken",
          body: "Das Sekret aus der Lunge holen geht in **3 Schritten**:\n\n**1. Schritt — Sekret lockern:**\n- **Inhalation** mit Salzwasser (NaCl 0,9%) — nur wenn der Schleim zäh ist\n- **Lagerung:** Der Patient liegt so, dass der Schleim von oben nach unten zur Luftröhre fließen kann\n- **PEP-Geräte:** Kleine Geräte wie der **VRP-1 Flutter**. Der Patient pustet hinein. Es vibriert. Das löst das Sekret.\n\n**2. Schritt — Husten lernen:**\n- **Huffing (Hauchen):** Mund weit auf, langsam 'ha' ausatmen. Das bringt Schleim hoch — **ohne** starken Stoßhusten. Gut nach OP.\n- **Wunde stützen:** Ein Kissen auf den Bauch drücken beim Husten — es tut weniger weh.\n- **Üben:** Tief durch die Nase einatmen, 2 Sekunden halten, dann Huffing. 3-5 mal.\n\n**3. Schritt — Absaugen:**\n- **Nur wenn** der Patient nicht husten kann: bewusstlos, beatmet, sehr schwach\n- **Steril** arbeiten. Nicht länger als 10-15 Sekunden.\n- **Nicht routinemäßig!** Absaugen reizt die Schleimhaut. Es kann Keime tief bringen.\n\n**Regel:** So wenig Absaugen wie möglich. So viel aktives Abhusten wie möglich.",
          glossarBegriffe: ["Huffing", "Lagerungsdrainage", "PEP-Gerät / VRP-1 Flutter"],
        },
      },
    },
    glossarBegriffe: ["Huffing", "Lagerungsdrainage", "PEP-Gerät / VRP-1 Flutter"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: fruehmobilisation-pneumonie (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-fruehmobilisation",
    themaId: "pneumonie-prophylaxe",
    titel: "Frühmobilisation: Eine Maßnahme — drei Wirkungen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dekubitus, Thrombose und Pneumonie haben eine gemeinsame Schutzmaßnahme. Welche ist das — und warum wirkt sie auf alle drei?",
      antwort:
        "Frühmobilisation ist die wirksamste Einzelmaßnahme gegen Pneumonie — sie senkt zusätzlich Dekubitus- und Thromboserisiko. Schon aufrechtes Sitzen vergrößert das Atemzugvolumen um bis zu 40%. Gehen aktiviert die Lungenbelüftung am stärksten. Aufrechte Position + Bewegung = drei Wirkungen: Lunge belüften, Wadenmuskelpumpe aktivieren, Dauerdruckbelastung verhindern.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Frühmobilisation** ist die wirksamste Einzelmaßnahme gegen Pneumonie — sie senkt zusätzlich Dekubitus- und Thromboserisiko. Schon aufrechtes Sitzen vergrößert das Atemzugvolumen um bis zu 40%. Gehen aktiviert die Lungenbelüftung am stärksten.",
      textB1:
        "**Frühmobilisation** (früh aufstehen und bewegen) ist die wirksamste Maßnahme gegen Pneumonie. Schon das Sitzen auf der Bettkante vergrößert das Atemvolumen um 40%. Wer geht, belüftet die Lunge am besten. Gleichzeitig: weniger Dekubitus und Thrombose.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-08",
        phase: 1,
        stepType: "timeline",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP Mobilität (2020)", "AWMF S3 (2017)", "ERAS-Protokoll"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-fruehmobilisation",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Frühmobilisation: Eine Maßnahme — drei Wirkungen",
          body: "**Frühmobilisation** ist die zentrale Prophylaxe-Säule für Pneumonie, Thrombose und Dekubitus gleichzeitig — eine Maßnahme, drei Wirkungen:\n\n**Wirkung auf die Lunge:**\n- Aufrechte Position vergrößert das Atemzugvolumen (bis zu 40% mehr als in Rückenlage)\n- Das Zwerchfell kann frei nach unten gehen\n- Alle Lungenbereiche werden belüftet (auch die hinteren Unterlappen, die in Rückenlage leicht kollabieren)\n- Sekret wird durch Bewegung mobilisiert\n\n**Konkrete Schritte (ERAS/DNQP-Mobilität 2020):**\n- **Tag der OP:** Aktiv im Bett (Fußkreisen, Beinbewegungen)\n- **Postoperativer Tag 1:** Mobilisation an die Bettkante, mit Kreislaufstabilität erste Schritte\n- **PO-Tag 2+:** Gehen auf dem Flur, steigende Strecke\n\n**Voraussetzungen:** Kreislaufstabilität prüfen (RR, Puls), Schmerztherapie optimiert, Drainagen und Katheter gesichert.\n\n**Pflege-Aufgaben:** Patient motivieren, Hilfsmittel bereitstellen (Gehstock, Rollator, Infusionsständer), Sicherheit gewährleisten (Sturzrisiko!), Dokumentation der erreichten Mobilität.\n\n**Die Formel:** Jede Minute Mobilisation wirkt auf Atmung, Durchblutung, Haut. (DNQP Mobilität 2020, AWMF S3 2017)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Frühmobilisation: Eine Maßnahme — drei Wirkungen",
          body: "**Frühmobilisation** heißt: Der Patient bewegt sich früh — schon am OP-Tag oder am Tag nach der OP. Das ist die beste Prophylaxe — für **3 Sachen auf einmal**:\n\n**1. Pneumonie:** Aufrecht sitzen macht die Lunge größer (40% mehr Luft pro Atemzug). Gehen belüftet alle Teile der Lunge.\n\n**2. Thrombose:** Die Wadenmuskel-Pumpe arbeitet. Blut fließt gut zurück zum Herzen.\n\n**3. Dekubitus:** Keine Stelle drückt zu lange auf die Matratze.\n\n**So geht es Schritt für Schritt:**\n- **OP-Tag:** Fuß-Kreisen, Beine bewegen im Bett\n- **Tag 1 nach OP:** An der Bettkante sitzen, dann kleine Schritte\n- **Ab Tag 2:** Gehen auf dem Flur, immer länger\n\n**Voraussetzung:** Kreislauf stabil, Schmerzen gut eingestellt, Schläuche gesichert.\n\n**Deine Aufgabe:** Den Patienten ermutigen. Hilfsmittel bereitstellen. Auf Sturzgefahr achten. Dokumentieren, was er geschafft hat.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: aspirationsprophylaxe-mundpflege (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-aspiration-mundpflege",
    themaId: "pneumonie-prophylaxe",
    titel: "Aspirationsprophylaxe und Mundpflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine gute Mundpflege senkt nachweislich die Pneumonie-Rate. Wie hängen Zähneputzen und Lungenentzündung zusammen?",
      antwort:
        "Der Mund ist das Einfallstor für Pneumonie-Erreger. Plaque im Mund enthält die gleichen Keime wie eine Pneumonie. Durch Mikroaspiration — kleine Schluck-Unfälle — gelangen sie in die tiefen Atemwege. Konsequente Mundpflege (mind. 2× täglich) senkt die nosokomiale Pneumonie-Rate messbar — bis 40% in Studien bei Altenheim-Bewohnern. (KRINKO 2013)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Mund ist das **Einfallstor** für Pneumonie-Erreger. Plaque im Mund enthält die gleichen Keime wie eine Pneumonie. Konsequente Mundpflege (mind. 2× täglich, besonders bei Risiko-Patienten) senkt die nosokomiale Pneumonie-Rate messbar. (KRINKO 2013)",
      textB1:
        "Der Mund ist der **Eingang** für Pneumonie-Keime. Der Belag (Plaque) auf den Zähnen hat dieselben Bakterien wie eine Pneumonie. Regelmäßige Mundpflege (2× am Tag, bei Risiko öfter) verhindert viele Pneumonien. (KRINKO-Empfehlung, 2013)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["KRINKO (2013)", "AWMF S3 (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-mundpflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Aspirationsprophylaxe und Mundpflege",
          body: "Die Verbindung zwischen Mundhygiene und Pneumonie ist wissenschaftlich gut belegt:\n\n**Pathophysiologie:** Im Mund leben viele Bakterien (orale Mikroflora). Bei guter Mundhygiene sind sie im Gleichgewicht. Bei schlechter Mundpflege vermehren sich **pathogene Keime** (Pseudomonas, Staphylokokken, E. coli) auf Zunge, Zahnbelag und Mundschleimhaut. Durch Mikroaspiration — kleine Schluck-Unfälle — gelangen sie in die tiefen Atemwege. Besonders nachts während des Schlafs.\n\n**Risiko-Faktoren für Plaque-Bildung:**\n- Reduzierter Speichelfluss (Alter, Medikamente, Mundatmung, Sauerstoffgabe)\n- Schluckstörung, Bewusstseinseinschränkung\n- Magensonde (kein normales Essen, weniger mechanische Reinigung)\n- Zahnprothese (Keim-Reservoir)\n\n**Evidenzbasierte Mundpflege bei Risiko-Patienten:**\n- **Mindestens 2× täglich** Zähne putzen (auch bei Zahnlosen: Zunge und Mundschleimhaut reinigen)\n- **Zahnprothese** nach jeder Mahlzeit reinigen, nachts in Reinigungslösung\n- **Chlorhexidin-Spülung** 0,12-0,2% (umstritten — KRINKO 2013 sieht Einsatz kritisch)\n- **Feuchthalten** der Mundschleimhaut (v.a. bei Sauerstoffgabe, Mundatmung)\n- **Bei Intensivpatienten:** spezielle Mundpflege-Sets, Dokumentation alle 2-4 Stunden\n\n**Evidenz:** Studien bei Altenheim-Bewohnern zeigten durch strukturierte Mundpflege eine Senkung der Pneumonie-Sterblichkeit um bis zu 40%. (KRINKO 2013)",
          glossarBegriffe: ["Stille Aspiration", "Dysphagie"],
        },
        contentB1: {
          title: "Aspirationsprophylaxe und Mundpflege",
          body: "Mundpflege und Pneumonie hängen eng zusammen:\n\n**Was passiert:** Im Mund leben viele Bakterien. Bei schlechter Mundpflege vermehren sich **schlechte Keime** — dieselben, die Pneumonie machen. Durch kleine Schluckunfälle (vor allem nachts) kommen sie in die Lunge.\n\n**Diese Patienten haben erhöhtes Risiko:**\n- Trockener Mund (Alter, Medikamente, Sauerstoff)\n- Mundatmung (O2-Brille, Demenz)\n- Schluckstörung\n- Magensonde (kein normales Essen, weniger Speichel)\n- Zahnprothese (Keime sammeln sich)\n\n**So pflegst du gut:**\n- **2× am Tag Zähne putzen** — auch wenn keine Zähne da sind: Zunge reinigen\n- **Zahnprothese** nach dem Essen putzen. Nachts in die Lösung.\n- **Mund feucht halten** — besonders bei Sauerstoff und Mundatmung\n- **Bei Intensivpatienten:** spezielle Sets, alle 2-4 Stunden dokumentieren\n\n**Studien-Fakt:** In Altenheimen senkt gute Mundpflege die Pneumonie-Todesrate um bis zu 40%. (KRINKO, 2013)",
          glossarBegriffe: ["Stille Aspiration", "Dysphagie"],
        },
      },
    },
    glossarBegriffe: ["Stille Aspiration", "Dysphagie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: schluckstoerung-dysphagie-management (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-dysphagie",
    themaId: "pneumonie-prophylaxe",
    titel: "Dysphagie erkennen und handeln",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 78-jährige Patientin nach Schlaganfall hustet beim Trinken, ihre Stimme klingt nach dem Schlucken belegt ('gurgelnd'). Der Arzt hat nichts dokumentiert. Wie gehst du vor? Begründe deine Entscheidung.",
      antwort:
        "Bei V.a. Dysphagie: SOFORT NPO (nichts per os — kein Essen, kein Trinken, keine orale Medikation). Arzt informieren, Verdacht dokumentieren. Logopädie anfordern. GUSS-Test durchführen (Gugging Swallowing Screen, Trapl et al. 2007). Die gurgelnde Stimme und der Husten beim Trinken sind klassische Warnsignale — nie ignorieren.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei V.a. Dysphagie: **sofort NPO** (nichts per os — kein Essen, kein Trinken, keine orale Medikation), Arzt informieren, Logopädie anmelden, **GUSS-Test** durchführen (Gugging Swallowing Screen). Bei bestätigter Dysphagie: angepasste Kostform (IDDSI-Level), aufrechte Haltung beim Essen, langsames Tempo.",
      textB1:
        "Bei Verdacht auf Schluckstörung: Der Patient darf **nichts mehr essen oder trinken** — bis geprüft ist. Arzt rufen. Logopädie bestellen. **GUSS-Test** machen (einfacher Schlucktest). Dann: spezielles Essen, aufrecht sitzen, langsam.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-10",
        phase: 1,
        stepType: "branching",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["AWMF S3 (2017)", "Trapl et al. (2007)", "IDDSI (2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-dysphagie",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Dysphagie erkennen und handeln",
          body: "**Dysphagie** ist eine der häufigsten und gefährlichsten Pneumonie-Ursachen. Nach Schlaganfall haben bis zu 50% der Patienten eine Dysphagie, davon aspirieren rund 50% **still** (ohne Husten).\n\n**Warnzeichen (Pflege-Beobachtung bei JEDEM Essen/Trinken):**\n- Husten während oder nach dem Schlucken\n- Gurgelnde, 'nasse' Stimme nach dem Schlucken\n- Verschleimung, häufiges Räuspern\n- Speichelfluss, Nahrungsreste im Mund\n- Gewichtsverlust, Dehydratation ohne klare Ursache\n\n**Pflegerische Sofortmaßnahmen bei V.a. Dysphagie:**\n1. **NPO** — nichts per os (kein Essen, kein Trinken, keine orale Medikation)\n2. **Arzt informieren**, Dokumentation des Verdachts\n3. **Logopädie anfordern**\n4. **GUSS-Test** (Gugging Swallowing Screen, Trapl et al. 2007): validierter Bedside-Test mit 4 Stufen\n5. **Ggf. FEES** (fiberoptisch-endoskopische Schluckuntersuchung) durch Logopädie/HNO\n\n**Bei bestätigter Dysphagie — angepasste Kostform:**\n- **IDDSI-Framework** (International Dysphagia Diet Standardisation Initiative, 2019): 8 Stufen für Nahrung und Flüssigkeit\n\n**Esshaltung:**\n- Aufrecht sitzen (90° oder so weit wie möglich)\n- Kinn zur Brust (Chin-tuck-Manöver)\n- Kleine Portionen, langsames Tempo\n- Nach dem Essen 30 Min aufrecht bleiben (Refluxschutz)\n\n**Wichtig:** Ohne klare ärztliche Freigabe kein Essen oder Trinken — auch nicht 'einen Schluck Wasser'. (AWMF S3 2017, Trapl et al. 2007)",
          glossarBegriffe: ["Dysphagie", "GUSS-Test", "IDDSI", "NPO", "Stille Aspiration", "Chin-tuck-Manöver"],
        },
        contentB1: {
          title: "Dysphagie erkennen und handeln",
          body: "Eine **Schluckstörung (Dysphagie)** ist eine der häufigsten Gründe für Pneumonie. Nach Schlaganfall haben bis zu **50%** eine Schluckstörung. Die Hälfte davon verschluckt sich **still** — ohne zu husten.\n\n**Zeichen bei Essen oder Trinken (immer beobachten!):**\n- Husten beim Schlucken oder danach\n- **Gurgelnde Stimme** nach dem Schlucken\n- Viel Schleim, oft räuspern\n- Speichel läuft raus\n- Essen bleibt im Mund\n\n**Was du tun musst bei Verdacht:**\n1. **Nichts per os!** Nichts essen, nichts trinken. Auch keine Tabletten.\n2. **Arzt rufen.** Verdacht dokumentieren.\n3. **Logopädie** bestellen.\n4. **GUSS-Test** machen — ein einfacher Schluck-Test (Trapl 2007)\n\n**Wenn Dysphagie bestätigt ist:**\n- Eingedickte Flüssigkeiten und weiche, pürierte Nahrung\n- **IDDSI**: internationales System mit 8 Stufen\n\n**So essen:**\n- **Aufrecht sitzen** (90°)\n- **Kinn zur Brust** beim Schlucken\n- **Kleine Bissen**, langsam\n- **30 Min** nach dem Essen aufrecht bleiben\n\n**Wichtig:** Kein Essen oder Trinken ohne ärztliche Freigabe. Auch kein 'Schlückchen Wasser'.",
          glossarBegriffe: ["Dysphagie", "GUSS-Test", "IDDSI", "NPO", "Stille Aspiration"],
        },
      },
    },
    glossarBegriffe: ["Dysphagie", "GUSS-Test", "IDDSI", "NPO", "Stille Aspiration", "Chin-tuck-Manöver"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: handhygiene-krinko-bundel (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pneumonie-prophylaxe-handhygiene-bundel",
    themaId: "pneumonie-prophylaxe",
    titel: "Händehygiene und KRINKO-Bündel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche Rolle spielen deine Hände in der Pneumonie-Prävention? Und warum ist die KRINKO-Empfehlung eine 'Bündel-Strategie' statt einer Einzelmaßnahme?",
      antwort:
        "Die hygienische Händedesinfektion vor und nach jedem Patientenkontakt ist die wichtigste Einzelmaßnahme gegen nosokomiale Infektionen. Die KRINKO-Empfehlung verbindet sie mit 4 weiteren Säulen: Mundpflege, 30-45° Lagerung, Sekretmanagement, gezieltes Absaugen. Bündel-Strategien senken die VAP-Rate um 30-70%, weil sie alle Eintrittswege gleichzeitig verschließen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **hygienische Händedesinfektion** vor und nach jedem Patientenkontakt ist die wichtigste Einzelmaßnahme gegen nosokomiale Infektionen. Die KRINKO-Empfehlung verbindet sie mit 4 weiteren Säulen: Mundpflege, 30-45° Lagerung, Sekretmanagement, gezieltes Absaugen.",
      textB1:
        "**Hände desinfizieren** vor und nach jedem Patient ist die wichtigste Maßnahme gegen Krankenhaus-Infektionen. Die KRINKO (RKI) empfiehlt dazu ein **Bündel** — mehrere Maßnahmen zusammen: Mundpflege + Lagerung + Sekret + Absaugen + Hände.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pneumonie-wb-11",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["WHO (2009)", "RKI/KRINKO (2013)", "RKI (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pneumonie-handhygiene",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Händehygiene und KRINKO-Bündel",
          body: "Die nosokomiale Pneumonie hat viele Eintrittswege — deshalb braucht sie eine **Bündel-Strategie** (Bundle).\n\n**Die 5 WHO-Momente der Händehygiene (WHO 2009) — bindend:**\n1. Vor Patientenkontakt\n2. Vor aseptischer Tätigkeit (z.B. Katheter, Verband, Injektion)\n3. Nach Kontakt mit potenziell infektiösem Material\n4. Nach Patientenkontakt\n5. Nach Kontakt mit der Umgebung des Patienten\n\n**Durchführung** (nach EN 1500, TRBA 250):\n- Alkoholisches Händedesinfektionsmittel auf trockene Hände\n- Mindestens 30 Sekunden einwirken lassen\n- Alle Flächen: Handflächen, -rücken, Finger, Fingerzwischenräume, Daumen, Fingerkuppen\n- Bei sichtbarer Verschmutzung: zuerst Händewaschen, dann desinfizieren\n\n**KRINKO-Bündel zur Pneumonie-Prävention (2013):**\n1. **Händehygiene** vor/nach jedem Patientenkontakt\n2. **Oberkörperhochlagerung** 30-45°\n3. **Mundpflege** min. 2× täglich\n4. **Sekretmanagement** (gezieltes Absaugen, geschlossene Systeme bei Beatmung)\n5. **Tägliche Prüfung** der Indikation: Beatmung, Sonde, Katheter — so kurz wie möglich\n\n**Warum Bündel?** Studien zeigen: Einzelmaßnahmen wirken begrenzt. Bündel senken die VAP-Rate um 30-70% — weil sie alle Eintrittswege gleichzeitig verschließen.\n\n**Evidenz:** Die WHO-Kampagne 'Clean Hands Save Lives' belegt bis zu 40% Reduktion nosokomialer Infektionen durch konsequente Händehygiene. (WHO 2009, RKI/KRINKO 2013, 2022)",
          glossarBegriffe: ["KRINKO", "5 WHO-Momente der Händehygiene", "VAP", "Nosokomiale Pneumonie"],
        },
        contentB1: {
          title: "Händehygiene und KRINKO-Bündel",
          body: "Die Pneumonie hat viele Eingänge — also braucht es ein **Bündel**: mehrere Maßnahmen zusammen.\n\n**Die 5 WHO-Momente für Händedesinfektion (WHO 2009):**\n1. **Vor** dem Patienten berühren\n2. **Vor** einer sauberen Tätigkeit (Katheter, Verband, Injektion)\n3. **Nach** Kontakt mit etwas möglicherweise Verschmutztem\n4. **Nach** Patienten-Kontakt\n5. **Nach** Umgebungs-Kontakt (Bett, Nachtschrank)\n\n**So geht's richtig** (nach EN 1500):\n- Desinfektionsmittel auf **trockene** Hände\n- **Mindestens 30 Sekunden** reiben\n- Alle Stellen: Handflächen, Handrücken, Finger, zwischen den Fingern, Daumen, Fingerkuppen\n- Wenn sichtbarer Schmutz: **erst waschen**, dann desinfizieren\n\n**Das KRINKO-Bündel gegen Pneumonie (2013):**\n1. **Hände** desinfizieren\n2. **Oberkörper** 30-45° hoch lagern\n3. **Mundpflege** 2× am Tag\n4. **Sekret** managen (gezielt absaugen)\n5. **Jeden Tag prüfen:** Brauchst du noch die Beatmung, die Sonde, den Katheter? So kurz wie möglich!\n\n**Warum Bündel?** Studien zeigen: Ein einzelner Punkt allein hilft wenig. **Alle zusammen** senken die Pneumonie-Rate um **30-70%**.\n\n**Vorsicht:** Nach dem Absaugen wird das Händedesinfizieren oft vergessen. Hohes Risiko!",
          glossarBegriffe: ["KRINKO", "5 WHO-Momente der Händehygiene", "VAP"],
        },
      },
    },
    glossarBegriffe: ["KRINKO", "5 WHO-Momente der Händehygiene", "VAP", "Nosokomiale Pneumonie"],
    karteikarten: [],
  },
];
