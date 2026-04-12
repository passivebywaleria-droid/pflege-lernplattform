// LE-08 Wissens-Tab: Artikel-Kapitel (Vollständig — 12 Kapitel)
// Quelle: Unterrichtsentwurf LE-08, I Care Pflege Kap. 18 (S. 442–476), I Care Anatomie
// Verifiziert gegen I Care Pflege PDF (Thieme, 2020)

import type { ArtikelKapitel } from "../_types";

export const LE08_ARTIKEL: ArtikelKapitel[] = [
  // ── Kapitel 1: Verdauungstrakt ──────────────────────────
  {
    kapitelId: "le08-kap-01",
    titel: "Der Verdauungstrakt",
    titelB1: "Wie funktioniert die Verdauung?",
    tag: "anatomie",
    geschaetzteDauer: 8,
    glossarBegriffe: ["Peristaltik", "Sphinkter", "Amylase", "Pepsin", "Resorption"],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Die Nahrung durchläuft auf ihrem Weg durch den Körper sechs Stationen: Mundhöhle, Speiseröhre (Ösophagus), Magen (Gaster), Dünndarm, Dickdarm und Rektum. An jeder Station wird die Nahrung weiter zerkleinert, chemisch aufgespalten und die verwertbaren Bestandteile resorbiert.",
        contentB1:
          "Das Essen geht durch sechs Stationen im Körper:\nMund → Speiseröhre → Magen → Dünndarm → Dickdarm → Enddarm.\nJede Station hat eine eigene Aufgabe.",
      },
      {
        type: "tabelle",
        contentC1: "Übersicht der Verdauungsorgane und ihre Pflege-Relevanz",
        contentB1: "Die Organe der Verdauung — einfach erklärt",
        headers: ["Organ", "Funktion", "Pflege-Relevanz"],
        rows: [
          [
            "Mundhöhle",
            "Zerkleinern, Speichelbeimischung (Amylase spaltet Stärke), Schluckreflex einleiten",
            "Mundpflege, Zahnprothese, Soor-/Parotitisprophylaxe",
          ],
          [
            "Speiseröhre (Ösophagus)",
            "Transport zum Magen durch Peristaltik, unterer Sphinkter verhindert Reflux",
            "Schluckstörungen, Aspirationsgefahr, Reflux",
          ],
          [
            "Magen (Gaster)",
            "Speicherung, Durchmischung mit Magensaft (HCl + Pepsin), Proteinverdauung",
            "Nüchternheit prä-OP, Magensonde, Übelkeit/Erbrechen",
          ],
          [
            "Dünndarm",
            "Hauptverdauung und Resorption (KH, Proteine, Fette, Vitamine)",
            "Mangelernährung bei Kurzdarmsyndrom, M. Crohn",
          ],
          [
            "Leber + Gallenblase",
            "Galleproduktion für Fettverdauung, Entgiftung, Glykogenspeicher",
            "Ikterus, Leberzirrhose",
          ],
          [
            "Bauchspeicheldrüse (Pankreas)",
            "Verdauungsenzyme (Lipase, Amylase, Trypsin) + Insulin/Glukagon",
            "Diabetes mellitus, Pankreatitis",
          ],
          [
            "Dickdarm",
            "Wasserresorption (1–2 l/Tag), Darmflora, Stuhlformung",
            "Obstipation, Diarrhö, Stoma",
          ],
        ],
        quelle: "I Care Anatomie, S. 195–230",
      },
      {
        type: "merke",
        contentC1:
          "Der Schluckakt verläuft in drei Phasen:\n1. Orale Phase (willkürlich): Nahrung wird zerkleinert und zum Bolus geformt\n2. Pharyngeale Phase (reflektorisch): Schluckreflex wird ausgelöst, Kehldeckel verschließt die Luftröhre\n3. Ösophageale Phase: Peristaltik transportiert den Bolus zum Magen",
        contentB1:
          "Schlucken hat 3 Phasen:\n1. Im Mund: Essen wird gekaut und zu einem Brei geformt\n2. Im Rachen: Der Schluckreflex startet, die Luftröhre schließt sich\n3. In der Speiseröhre: Der Brei wird in den Magen geschoben",
      },
      {
        type: "text",
        contentC1:
          "Die Peristaltik — wellenförmige Kontraktionen der glatten Muskulatur — bewegt die Nahrung auch gegen die Schwerkraft vorwärts. Deshalb kann man theoretisch auch im Kopfstand schlucken. Für die Pflege ist entscheidend: Die Peristaltik funktioniert autonom, kann aber durch Immobilität, Medikamente (Opioide!) und Elektrolytstörungen beeinträchtigt werden.",
        contentB1:
          "Die Muskeln im Verdauungstrakt schieben das Essen automatisch weiter. Man nennt das Peristaltik. Sie funktioniert auch gegen die Schwerkraft.\nAber: Wenn ein Patient sich wenig bewegt oder bestimmte Medikamente nimmt, wird die Peristaltik langsamer.",
      },
      {
        type: "text",
        contentC1:
          "Der Dünndarm ist mit 5–6 Metern das längste Verdauungsorgan. Seine innere Oberfläche ist durch Zotten und Mikrovilli auf ca. 200 m² vergrößert — eine Fläche so groß wie ein Tennisplatz. Hier werden etwa 90 % aller Nährstoffe resorbiert. Bei einem Kurzdarmsyndrom (z. B. nach Darmresektion bei M. Crohn) kann die verbleibende Darmfläche nicht genug Nährstoffe aufnehmen — parenterale Ernährung wird dann notwendig.",
        contentB1:
          "Der Dünndarm ist 5–6 Meter lang. Innen ist er gefaltet wie ein Handtuch — dadurch hat er eine riesige Oberfläche (so groß wie ein Tennisplatz!). Hier nimmt der Körper fast alle Nährstoffe auf.\nWenn ein Stück Dünndarm fehlt (z. B. nach einer Operation), kann der Körper nicht genug Nährstoffe aufnehmen.",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-07 (Haut-/Körperpflege): Mundpflege, Soor-/Parotitisprophylaxe — direkt verknüpft mit der oralen Phase des Schluckakts",
        contentB1: "→ LE-07: Mundpflege — wichtig für gutes Schlucken",
        zielLeId: "le-07",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-09 (Ausscheidung): Obstipation, Diarrhö — Fortsetzung der Verdauung im Dickdarm",
        contentB1: "→ LE-09: Verstopfung und Durchfall — was im Dickdarm passiert",
        zielLeId: "le-09",
      },
    ],
  },

  // ── Kapitel 2: Nährstoffe & Energiebedarf ──────────────
  {
    kapitelId: "le08-kap-02",
    titel: "Nährstoffe und Energiebedarf",
    titelB1: "Was braucht der Körper?",
    tag: "pflege",
    geschaetzteDauer: 10,
    glossarBegriffe: [
      "Makronährstoffe",
      "Mikronährstoffe",
      "Ballaststoffe",
      "Grundumsatz",
      "PAL-Wert",
      "D-A-CH-Referenzwerte",
    ],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Der Körper benötigt Nährstoffe für drei Zwecke: Energiegewinnung, Aufbau und Reparatur von Gewebe sowie Regulation von Stoffwechselprozessen. Man unterscheidet Makronährstoffe (liefern Energie) und Mikronährstoffe (regulieren Prozesse, liefern keine Energie).",
        contentB1:
          "Der Körper braucht Nährstoffe für drei Dinge:\n1. Energie (Kraft zum Leben)\n2. Aufbau (Muskeln, Knochen, Haut reparieren)\n3. Steuerung (Körperfunktionen regeln)\n\nEs gibt zwei Gruppen: Makronährstoffe und Mikronährstoffe.",
      },
      {
        type: "tabelle",
        contentC1: "Makronährstoffe — Energielieferanten",
        contentB1: "Makronährstoffe — sie geben dem Körper Energie",
        headers: ["Nährstoff", "Energiegehalt", "Vorkommen", "Funktion"],
        rows: [
          [
            "Kohlenhydrate",
            "4 kcal/g",
            "Brot, Kartoffeln, Reis, Obst",
            "Schnelle Energiequelle, Gehirnnahrung",
          ],
          [
            "Proteine (Eiweiß)",
            "4 kcal/g",
            "Fleisch, Fisch, Hülsenfrüchte, Milch",
            "Muskelaufbau, Immunsystem, Enzyme",
          ],
          [
            "Fette (Lipide)",
            "9 kcal/g",
            "Öl, Butter, Nüsse, Avocado",
            "Energiespeicher, Zellmembranen, Vitaminaufnahme",
          ],
        ],
        quelle: "I Care Pflege, S. 449–451",
      },
      {
        type: "text",
        contentC1:
          "Fette werden unterteilt in gesättigte Fettsäuren (v. a. tierische Fette — erhöhen LDL-Cholesterin), einfach ungesättigte Fettsäuren (Olivenöl — günstig für Herz-Kreislauf) und mehrfach ungesättigte Fettsäuren. Besonders wichtig: Omega-3-Fettsäuren (Fisch, Leinöl — entzündungshemmend) und Omega-6-Fettsäuren (Sonnenblumenöl). Das Verhältnis ω-6 zu ω-3 sollte idealerweise 5:1 betragen.",
        contentB1:
          "Fette sind nicht alle gleich:\n- Gesättigte Fette (Butter, Wurst) → nicht so gut für das Herz\n- Ungesättigte Fette (Olivenöl, Fisch, Nüsse) → gut für das Herz\n\nBesonders gesund: Omega-3-Fettsäuren aus Fisch und Leinöl.",
      },
      {
        type: "text",
        contentC1:
          "Mikronährstoffe liefern keine Energie, sind aber lebensnotwendig. Vitamine werden in fettlösliche (A, D, E, K — Merkhilfe: 'EDeKA') und wasserlösliche (B-Komplex, C) unterteilt. Fettlösliche Vitamine können im Körper gespeichert werden — eine Überdosierung ist daher möglich. Wasserlösliche Vitamine müssen regelmäßig zugeführt werden.\n\nMineralstoffe wie Natrium, Kalium, Kalzium, Eisen und Magnesium sind an Nervenleitung, Muskelkontraktion, Knochenaufbau und Sauerstofftransport beteiligt.",
        contentB1:
          "Mikronährstoffe geben keine Energie, aber der Körper braucht sie trotzdem.\n\nVitamine: Es gibt fettlösliche Vitamine (A, D, E, K) und wasserlösliche (B, C).\nMerkhilfe für fettlösliche Vitamine: 'EDeKA'\n\nMineralstoffe wie Kalzium (für Knochen) und Eisen (für Blut) sind auch sehr wichtig.",
      },
      {
        type: "merke",
        contentC1:
          "Ballaststoffe sind unverdauliche Nahrungsbestandteile, die keine Energie liefern, aber essenziell für die Verdauung sind. Sie fördern die Peristaltik, beugen Obstipation vor, sättigen und unterstützen eine gesunde Darmflora. Die DGE empfiehlt mindestens 30 g Ballaststoffe pro Tag. Präbiotika sind Ballaststoffe, die das Wachstum physiologischer Darmbakterien fördern. Probiotika sind gesundheitsförderliche Mikroorganismen (z. B. Milchsäurebakterien in Joghurt).",
        contentB1:
          "Ballaststoffe kann der Körper nicht verdauen — aber sie sind trotzdem wichtig!\nSie helfen dem Darm, gut zu arbeiten, und machen lange satt.\nZiel: Mindestens 30 g pro Tag (z. B. Vollkornbrot, Gemüse, Obst).\n\nPräbiotika = Ballaststoffe, die gute Darmbakterien füttern.\nProbiotika = gute Bakterien (z. B. im Joghurt).",
      },
      {
        type: "text",
        contentC1:
          "Die Ernährungspyramide der DGE zeigt die empfohlene Verteilung: Getränke bilden die breite Basis (mindestens 1,5 Liter/Tag), gefolgt von pflanzlichen Lebensmitteln (reichlich), tierischen Produkten (mäßig) und Fetten/Süßigkeiten an der Spitze (sparsam). Die 8 Lebensmittelgruppen sind farblich gekennzeichnet: Grün = reichlich, Gelb = mäßig, Rot = sparsam. Die Portionsgröße wird individuell mit der Handgröße des Pflegeempfängers gemessen.",
        contentB1:
          "Die Ernährungspyramide zeigt, was man wie viel essen soll:\nUnten (viel): Wasser trinken + Gemüse, Obst, Brot\nMitte (mittel): Fleisch, Fisch, Milch\nOben (wenig): Fett, Süßigkeiten\n\nAmpel-Farben: Grün = viel, Gelb = mittel, Rot = wenig.\nEine Portion = so groß wie die eigene Hand.",
      },
      {
        type: "rechner",
        contentC1:
          "Der Grundumsatz eines gesunden Erwachsenen beträgt 20–25 kcal pro kg Körpergewicht pro Tag. Der Gesamtumsatz ergibt sich aus Grundumsatz × PAL-Wert (Physical Activity Level).\n\nPAL-Werte:\n• 1,2–1,3 = bettlägerig\n• 1,4–1,5 = sitzende Tätigkeit\n• 1,6–1,7 = gehende/stehende Tätigkeit\n• 1,8–1,9 = körperlich anstrengende Arbeit (z. B. Pflegefachkraft auf Station!)\n\nBei Krankheit ist der Energiebedarf erhöht: Immobile Patienten ca. 25–30 kcal/kg, akut Kranke 30–35 kcal/kg, Rekonvaleszenz 35–45 kcal/kg.",
        contentB1:
          "So rechnet man den Energiebedarf aus:\n\n1. Grundumsatz = 20–25 kcal pro kg Körpergewicht pro Tag\n2. Dann mal den PAL-Wert (wie aktiv ist die Person?)\n\nBeispiel: Bettlägeriger Patient, 70 kg:\n70 × 25 = 1.750 kcal × 1,2 = 2.100 kcal pro Tag\n\nBei Krankheit braucht der Körper mehr Energie!",
        formel: "Gesamtumsatz = Gewicht (kg) × 25 kcal × PAL",
        einheit: "kcal/Tag",
        quelle: "I Care Pflege, S. 452; DGEM-Leitlinie 2007",
      },
      {
        type: "rechner",
        contentC1:
          "Der Flüssigkeitsbedarf eines gesunden Erwachsenen liegt bei 30–35 ml pro kg Körpergewicht pro Tag. Bei Fieber steigt der Bedarf um ca. 500 ml pro 1 °C über 37 °C. Bei Diarrhö, Erbrechen und starkem Schwitzen ist der Bedarf ebenfalls erhöht. Bei Herz- oder Niereninsuffizienz kann eine Einfuhrbeschränkung nötig sein — dann IMMER ärztliche Anordnung zur Trinkmenge beachten!",
        contentB1:
          "So viel soll ein Mensch trinken:\n30–35 ml pro kg Körpergewicht pro Tag\n\nBeispiel: Person mit 70 kg:\n70 × 30 = 2.100 ml (ca. 2 Liter)\n\nMehr trinken bei: Fieber, Durchfall, Erbrechen\nWeniger trinken bei: Herzschwäche, Nierenproblemen (Arzt fragen!)",
        formel: "Flüssigkeitsbedarf = Gewicht (kg) × 30 ml",
        einheit: "ml/Tag",
        quelle: "I Care Pflege, S. 453",
      },
      {
        type: "warnung",
        contentC1:
          "Sondennahrung enthält einen erheblichen Wasseranteil (ca. 75–85 %). Dieser MUSS in die Flüssigkeitsbilanz einbezogen werden. Häufiger Fehler: Sondennahrung wird nicht bilanziert, Patient erhält zusätzlich volle Trinkmenge → Überhydratation.",
        contentB1:
          "Sondennahrung enthält viel Wasser (ca. 75–85 %). Dieses Wasser muss man mitzählen!\nHäufiger Fehler: Patient bekommt Sondennahrung UND volle Trinkmenge → zu viel Flüssigkeit!",
      },
      {
        type: "text",
        contentC1:
          "Alkohol ist kein essenzieller Nährstoff, liefert aber Energie (7 kcal/g). Die DGE empfiehlt maximal 10 g/Tag für Frauen und 20 g/Tag für Männer. 20 g Alkohol entspricht ca. 0,5 l Bier oder 0,25 l Wein. Für Schwangere, Stillende und Kinder/Jugendliche gilt: kein Alkohol. Chronischer Alkoholmissbrauch führt über Fettleber zur Leberzirrhose.",
        contentB1:
          "Alkohol ist kein Nährstoff, gibt aber Energie (7 kcal/g).\n\nMaximal pro Tag:\n- Frauen: 10 g (= ca. ein kleines Glas Wein)\n- Männer: 20 g (= ca. 0,5 Liter Bier)\n\nKein Alkohol für: Schwangere, Stillende, Kinder und Jugendliche.",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-24 (Diabetes mellitus): Kohlenhydratberechnung, Broteinheiten — vertieft die Nährstoff-Thematik",
        contentB1: "→ LE-24: Diabetes und Kohlenhydrate berechnen",
        zielLeId: "le-24",
      },
    ],
  },

  // ── Kapitel 3: Ernährung in verschiedenen Lebensphasen ──
  {
    kapitelId: "le08-kap-03",
    titel: "Ernährung in verschiedenen Lebensphasen",
    titelB1: "Essen in jedem Alter",
    tag: "pflege",
    geschaetzteDauer: 8,
    glossarBegriffe: ["Beikost", "Perzentilenkurve", "Sarkopenie", "Altersanorexie"],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Die Ernährungsbedürfnisse verändern sich mit dem Lebensalter grundlegend. Jede Lebensphase hat spezifische Anforderungen an Nährstoffzufuhr, Mahlzeitengestaltung und pflegerische Unterstützung.",
        contentB1:
          "In jedem Alter braucht der Körper anderes Essen.\nBabys, Kinder, Erwachsene und alte Menschen haben unterschiedliche Bedürfnisse.",
      },
      {
        type: "text",
        contentC1:
          "Säuglinge (0–12 Monate): In den ersten 6 Monaten ist Stillen die optimale Ernährung (mind. 6–8×/Tag). Bei voll gestillten Kindern ist keine zusätzliche Flüssigkeit nötig. Alternativ: Pre-Nahrung (Lactose-basiert, der Muttermilch am ähnlichsten). Ab dem 5.–7. Monat wird Beikost eingeführt — stufenweise mit Gemüse-Kartoffel-Fleisch-Brei. Vitamin-D-Supplementierung (500 IE/Tag) zur Rachitisprophylaxe und Fluorid (0,25 mg/Tag) zur Kariesprophylaxe ab Geburt. Ab 10.–12. Monat Übergang zu Familienkost.",
        contentB1:
          "Babys (0–12 Monate):\n- Erste 6 Monate: Muttermilch ist am besten (6–8 mal am Tag stillen)\n- Kein extra Wasser nötig beim Stillen\n- Ab 5.–7. Monat: Brei dazugeben (Gemüse-Kartoffel-Fleisch-Brei)\n- Vitamin D (500 IE/Tag) für starke Knochen ab Geburt\n- Ab 10–12 Monate: normales Familienessen",
        quelle: "I Care Pflege, S. 453–454",
      },
      {
        type: "text",
        contentC1:
          "Kinder und Jugendliche: Stufenweise Anpassung an Erwachsenenkost. Die Optimierte Mischkost (OMK) nach FKE empfiehlt reichlich pflanzliche Lebensmittel, mäßig tierische Produkte, sparsam Süßes. Phasenweise Ablehnung bestimmter Lebensmittel ist bei Normalgewicht normal und kein Grund zur Sorge. Bei Tonsillektomie: gelenkte Wunschkost — Vanilleeis ja, Fruchteis nein (Säure brennt auf der Wunde!).",
        contentB1:
          "Kinder und Jugendliche:\n- Gesunde Mischkost: viel Gemüse/Obst, etwas Fleisch, wenig Süßes\n- Wenn ein Kind bestimmtes Essen nicht mag: Das ist normal und geht vorbei\n- Nach Mandel-OP: Vanilleeis erlaubt, aber kein Fruchteis (die Säure tut weh!)",
        quelle: "I Care Pflege, S. 454",
      },
      {
        type: "text",
        contentC1:
          "Erwachsene: Ausgewogene Ernährung nach der Ernährungspyramide der DGE. 8 Lebensmittelgruppen, farblich gekennzeichnet (grün = reichlich, gelb = mäßig, rot = sparsam). Energiebedarf abhängig von Aktivität (PAL-Wert). D-A-CH-Referenzwerte als Orientierung für die Nährstoffzufuhr.",
        contentB1:
          "Erwachsene:\n- Essen nach der Ernährungspyramide\n- Viel Gemüse und Obst (grün), etwas Fleisch und Milch (gelb), wenig Süßes (rot)\n- Wie viel Energie man braucht, hängt davon ab, wie aktiv man ist",
        quelle: "I Care Pflege, S. 455",
      },
      {
        type: "merke",
        contentC1:
          "Ältere Menschen: Der Energiebedarf sinkt, aber der Vitamin- und Mineralstoffbedarf bleibt gleich oder steigt sogar. Proteinbedarf: 0,8–1,5 g/kg KG (im Alter wird oft zu wenig Eiweiß gegessen!). Das Durstempfinden nimmt ab → aktive Trinkerinnerung nötig. Vitamin-D-Gabe bei Bettlägerigkeit (fehlende Sonneneinstrahlung). Mahlzeiten geben dem Tag Struktur und haben hohe soziale Bedeutung.",
        contentB1:
          "Ältere Menschen:\n- Brauchen weniger Kalorien, aber genauso viele Vitamine\n- Oft essen sie zu wenig Eiweiß → Muskeln werden schwächer\n- Das Durstgefühl lässt nach → aktiv ans Trinken erinnern!\n- Vitamin D geben, wenn der Mensch nicht nach draußen kann\n- Essen zusammen ist wichtig für die Seele",
      },
      {
        type: "warnung",
        contentC1:
          "Teufelskreis im Alter: Altersanorexie (physiologische Appetitlosigkeit) → Mangelernährung → Sarkopenie (Muskelschwund) → weniger Bewegung → weniger Appetit → noch weniger Essen → noch mehr Muskelschwund. Dieser Kreislauf muss frühzeitig erkannt und durchbrochen werden! Bei Demenz: Fingerfood anbieten, Speisen als solche erkennbar machen (nicht alles püriert mischen), auch nachts Angebot bereitstellen.",
        contentB1:
          "Gefährlicher Kreislauf im Alter:\nWeniger Appetit → weniger Essen → Muskeln werden schwächer → noch weniger Bewegung → noch weniger Appetit\n\nDiesen Kreislauf muss man früh stoppen!\n\nBei Demenz: Fingerfood anbieten, Essen muss erkennbar sein (nicht alles zusammen pürieren).",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-35 (Demenz): Essverhalten bei Demenz, Schluckstörungen — vertieft die Altersernährung",
        contentB1: "→ LE-35: Essen bei Demenz",
        zielLeId: "le-35",
      },
    ],
  },

  // ── Kapitel 4: Mangelernährung ──────────────────────────
  {
    kapitelId: "le08-kap-04",
    titel: "Mangelernährung und Refeeding-Syndrom",
    titelB1: "Wenn der Körper zu wenig bekommt",
    tag: "krankheitslehre",
    geschaetzteDauer: 10,
    glossarBegriffe: ["Mangelernährung", "Sarkopenie", "Refeeding-Syndrom", "Exsikkose"],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Mangelernährung (DNQP 2017): Ein anhaltendes Defizit an Energie und/oder Nährstoffen, entstanden durch eine negative Bilanz zwischen Aufnahme und Bedarf. Sie führt zu Einbußen in Ernährungszustand, physiologischer Funktion und Gesundheitszustand. Wichtig: Mangelernährung ist auch bei übergewichtigen Menschen möglich (Fehlernährung)! Ein adipöser Patient mit Zinkmangel ist mangelernährt. 32–55 % der Krankenhauspatienten sind betroffen, 18,2 % bereits bei Aufnahme.",
        contentB1:
          "Mangelernährung bedeutet: Der Körper bekommt nicht genug Nährstoffe oder Energie.\n\nWichtig: Auch übergewichtige Menschen können mangelernährt sein! Ein dicker Patient kann trotzdem Vitaminmangel haben.\n\nIm Krankenhaus ist fast jeder dritte Patient mangelernährt.",
        quelle: "I Care Pflege, S. 408–411; DNQP 2017a",
      },
      {
        type: "tabelle",
        contentC1: "5 Risikofaktor-Gruppen für Mangelernährung",
        contentB1: "Warum essen Menschen zu wenig?",
        headers: ["Gruppe", "Beispiele"],
        rows: [
          [
            "Erkrankungen",
            "Demenz, Apoplex (Dysphagie), COPD, Tumorerkrankungen, Morbus Crohn, Depression",
          ],
          [
            "Soziale Faktoren",
            "Einsamkeit, Armut, Isolation, allein essen",
          ],
          [
            "Medikamente",
            "Polypharmazie → Appetitlosigkeit (z. B. Benzodiazepine, Digitalispräparate)",
          ],
          [
            "Funktionell",
            "Schlechte Zahnprothese, Kauschwierigkeiten, Schluckstörungen, eingeschränkte Armfunktion",
          ],
          [
            "Institutionell",
            "Unruhige Essensumgebung, nicht schmeckende Mahlzeiten, Abendessen um 17 Uhr",
          ],
        ],
      },
      {
        type: "text",
        contentC1:
          "Auswirkungen der Mangelernährung: Wundheilungsstörungen, erhöhte Infektanfälligkeit, Sarkopenie (Muskelschwund) → Sturzgefahr → Immobilität → Dekubitus. Kognitive Leistungsverschlechterung, Rückzug aus sozialem Leben. Erhöhte Mortalität. Der Teufelskreis Mangelernährung → Sarkopenie → Immobilität → mehr Mangelernährung muss früh erkannt werden.",
        contentB1:
          "Was passiert bei Mangelernährung?\n- Wunden heilen schlechter\n- Man wird öfter krank\n- Muskeln werden schwächer (Sarkopenie) → Sturzgefahr\n- Man kann nicht mehr gut denken\n- Im schlimmsten Fall: Tod\n\nWie Dominosteine: Eines kippt, alle fallen.",
      },
      {
        type: "merke",
        contentC1:
          "Signifikanter Gewichtsverlust: ≥5 % in 3 Monaten oder ≥10 % in 6 Monaten. Weitere Zeichen: Wadenumfang <31 cm (Muskelabbau), Trizepshautfaltendicke reduziert, Albumin <3,5 g/dl. BIA (bioelektrische Impedanzanalyse) misst Fett-/Muskelanteil objektiv.",
        contentB1:
          "Wann ist Gewichtsverlust gefährlich?\n- 5 % in 3 Monaten (z. B. 3,5 kg bei 70 kg)\n- 10 % in 6 Monaten (z. B. 7 kg bei 70 kg)\n\nWeitere Warnzeichen: dünne Waden (<31 cm), zu wenig Eiweiß im Blut (Albumin <3,5).",
      },
      {
        type: "warnung",
        contentC1:
          "Refeeding-Syndrom: Lebensbedrohlich! Tritt auf, wenn einem ausgezehrten Körper zu schnell zu viel Nahrung zugeführt wird. Durch den plötzlichen Insulinanstieg werden Elektrolyte (v. a. Phosphat) in die Zellen verschoben → Hypophosphatämie → neurologische Ausfälle → Herzrhythmusstörungen → schlimmstenfalls Atemstillstand. Deshalb: Nahrungszufuhr bei schwerer Mangelernährung LANGSAM steigern! Beginn mit ca. 10 kcal/kg/Tag, tägliche Steigerung, Phosphat engmaschig überwachen.",
        contentB1:
          "WARNUNG — Refeeding-Syndrom:\nWenn ein sehr magerer Mensch plötzlich viel Essen bekommt, kann das lebensgefährlich sein!\n\nDer Körper gerät durcheinander → Elektrolyte im Blut stimmen nicht mehr → das Herz kann stehen bleiben.\n\nRegel: Ganz LANGSAM mit dem Essen anfangen und jeden Tag ein bisschen mehr geben!",
        quelle: "I Care Pflege, S. 411",
      },
      {
        type: "text",
        contentC1:
          "Ernährung bei Wundheilungsstörungen: Der Nährstoffbedarf ist erhöht. Protein 1,2–1,5 g/kg KG, Zink (fördert Zellteilung), Vitamin C (Kollagensynthese), Vitamin A (Epithelisierung), Eisen (Sauerstofftransport). Der DNQP-Expertenstandard Chronische Wunden empfiehlt Ernährungsscreening als festen Bestandteil des Wundmanagements.",
        contentB1:
          "Bei schlechter Wundheilung braucht der Körper mehr:\n- Eiweiß (für neue Zellen)\n- Zink (hilft bei der Heilung)\n- Vitamin C (für festes Gewebe)\n- Eisen (bringt Sauerstoff zur Wunde)\n\nBei jeder Wunde sollte man auch die Ernährung prüfen!",
        quelle: "I Care Pflege, S. 445–446; DNQP Wundmanagement",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-06 (Mobilität): Dekubitusprophylaxe — Mangelernährung als Risikofaktor für Druckgeschwüre",
        contentB1: "→ LE-06: Dekubitus — Mangelernährung macht die Haut empfindlicher",
        zielLeId: "le-06",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-42 (Chronische Wunden): Mangelernährung als Risikofaktor für Wundheilungsstörungen",
        contentB1: "→ LE-42: Wundheilung — wer schlecht isst, heilt schlechter",
        zielLeId: "le-42",
      },
    ],
  },

  // ── Kapitel 5: Dehydratation & Exsikkose ────────────────
  {
    kapitelId: "le08-kap-05",
    titel: "Dehydratation und Exsikkose",
    titelB1: "Wenn der Körper zu wenig Wasser hat",
    tag: "krankheitslehre",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Dehydratation", "Exsikkose"],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Exsikkose bezeichnet die Austrocknung des Körpers durch ein Defizit an Körperwasser. Sie ist besonders häufig bei älteren Menschen. Der Wasseranteil des Körpers beträgt bei Erwachsenen 50–60 %, bei Säuglingen sogar 70 % — daher sind Säuglinge bei Flüssigkeitsverlust (z. B. Diarrhö, Erbrechen) besonders schnell gefährdet.",
        contentB1:
          "Exsikkose bedeutet: Der Körper hat zu wenig Wasser.\nDas passiert besonders oft bei alten Menschen.\n\nDer Körper von Erwachsenen besteht zu 50–60 % aus Wasser.\nBei Babys sind es sogar 70 % — deshalb ist Durchfall bei Babys besonders gefährlich!",
        quelle: "I Care Pflege, S. 453, 410",
      },
      {
        type: "merke",
        contentC1:
          "5 klinische Zeichen der Exsikkose:\n1. Stehende Hautfalten (v. a. am Handrücken oder Sternum)\n2. Trockene Schleimhäute (Mund, Zunge, Lippen)\n3. Konzentrierter, dunkler Urin (geringe Menge)\n4. Verwirrtheit, Unruhe, Somnolenz\n5. Tachykardie (Herzfrequenz erhöht)\n\nWeitere Zeichen: eingefallene Augen, Gewichtsverlust, Obstipation.",
        contentB1:
          "5 Zeichen für Austrocknung:\n1. Hautfalten bleiben stehen (Haut zurückziehen → Falte bleibt)\n2. Mund und Lippen sind trocken\n3. Urin ist dunkel und wenig\n4. Person ist verwirrt oder unruhig\n5. Herz schlägt schnell",
      },
      {
        type: "tabelle",
        contentC1: "Ursachen der Dehydratation nach Lebensalter",
        contentB1: "Warum haben Menschen zu wenig Wasser?",
        headers: ["Gruppe", "Häufige Ursachen"],
        rows: [
          [
            "Ältere Menschen",
            "Vermindertes Durstgefühl, Angst vor Inkontinenz, Schluckstörungen, vergessen zu trinken",
          ],
          [
            "Demenziell Veränderte",
            "Vergessen zu trinken, erkennen Getränke nicht, lehnen Hilfe ab",
          ],
          [
            "Säuglinge/Kinder",
            "Schneller Flüssigkeitsverlust bei Diarrhö/Erbrechen, hohes Oberfläche-Volumen-Verhältnis",
          ],
          [
            "Akut Kranke",
            "Fieber (+500 ml pro °C über 37 °C), Diarrhö, Erbrechen, Drainage-Verluste",
          ],
        ],
      },
      {
        type: "text",
        contentC1:
          "Pflegerische Maßnahmen: Trinkplan erstellen (kleine Mengen über den Tag verteilt), bevorzugte Getränke bereitstellen, Trinkgefäße gut erreichbar platzieren, Trinkprotokoll führen, tägliche Gewichtskontrolle. Bei schwerer Exsikkose: Arzt informieren, ggf. subkutane oder intravenöse Flüssigkeitsgabe.",
        contentB1:
          "Was kann die Pflege tun?\n- Einen Trinkplan machen (jede Stunde ein Glas)\n- Lieblingsgetränke hinstellen\n- Glas in Reichweite stellen\n- Aufschreiben, wie viel der Patient trinkt\n- Jeden Tag wiegen\n- Bei starker Austrocknung: Arzt rufen!",
      },
    ],
  },

  // ── Kapitel 6: Ernährungszustand erfassen ───────────────
  {
    kapitelId: "le08-kap-06",
    titel: "Ernährungszustand erfassen",
    titelB1: "Wie gut isst der Patient?",
    tag: "pflege",
    geschaetzteDauer: 10,
    glossarBegriffe: ["BMI", "MNA", "NRS 2002", "Waist-to-Hip-Ratio"],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Bei Aufnahme werden immer Körpergröße und Körpergewicht erfasst. Die Messung der Körpergröße erfolgt morgens (abends kann man durch Bandscheibenkompression bis zu 2–3 cm kleiner sein). Bei Kindern werden Perzentilenkurven zur Beurteilung der Entwicklung genutzt (3.–97. Perzentile gilt als unbedenklich).",
        contentB1:
          "Bei der Aufnahme misst man immer Größe und Gewicht.\n- Größe morgens messen (abends ist man etwas kleiner)\n- Bei Kindern: Wachstumskurven benutzen (Perzentilenkurven)",
        quelle: "I Care Pflege, S. 456–457",
      },
      {
        type: "rechner",
        contentC1:
          "BMI (Body-Mass-Index) = Gewicht (kg) / Größe² (m)\n\nKategorien:\n• <18,5 = Untergewicht\n• 18,5–24,9 = Normalgewicht\n• 25–29,9 = Übergewicht (Präadipositas)\n• 30–34,9 = Adipositas Grad I\n• 35–39,9 = Adipositas Grad II\n• ≥40 = Adipositas Grad III\n\nACHTUNG: BMI allein reicht NICHT! Nicht aussagekräftig bei: Ödemen, Amputationen, Kyphose, Schwangerschaft, Muskelmasse (Sportler). Gewichtsverläufe sind aussagekräftiger als ein einzelner BMI-Wert.",
        contentB1:
          "BMI berechnen:\nGewicht (kg) geteilt durch Größe (m) mal Größe (m)\n\nBeispiel: 70 kg, 1,70 m groß:\n70 ÷ (1,70 × 1,70) = 70 ÷ 2,89 = 24,2 → Normalgewicht\n\n<18,5 = zu leicht\n18,5–25 = normal\n25–30 = zu schwer\n>30 = stark übergewichtig\n\nAchtung: BMI allein sagt nicht genug! Ödeme oder fehlende Gliedmaßen verfälschen das Ergebnis.",
        formel: "BMI = Gewicht (kg) / Größe² (m)",
        einheit: "kg/m²",
        quelle: "I Care Pflege, S. 459",
      },
      {
        type: "merke",
        contentC1:
          "BMI = Braucht Mehr Information! Der BMI ist ein erster Anhaltspunkt, aber nie alleinige Grundlage. Bei älteren Menschen sind höhere BMI-Werte akzeptiert (>65 Jahre: erhöhtes Risiko erst bei BMI <24). Bei Amputierten muss das Gewicht korrigiert werden (Bein: +15 %, Unterschenkel+Fuß: +6 %, Arm: +5 %). Der DNQP-Expertenstandard fordert ein Screening bei JEDER Aufnahme.",
        contentB1:
          "Merksatz: BMI = Braucht Mehr Information!\n\nDer BMI ist nur ein erster Hinweis. Man muss immer auch andere Dinge prüfen:\n- Wie hat sich das Gewicht verändert?\n- Hat der Patient Wassereinlagerungen?\n- Wie sieht die Haut aus? Wie sind die Muskeln?",
      },
      {
        type: "text",
        contentC1:
          "Waist-to-Hip-Ratio (WHR) = Taillenumfang / Hüftumfang. Risikoerhöht ab: Frauen >0,85, Männer >1,0. Die WHR misst die abdominale Fettverteilung und ist aussagekräftiger als der BMI bezüglich kardiovaskulärem Risiko. Apfeltyp (stammbetont, häufiger bei Männern) hat ein höheres Risiko als Birnentyp (hüftbetont, häufiger bei Frauen).",
        contentB1:
          "Waist-to-Hip-Ratio (WHR) = Bauchumfang geteilt durch Hüftumfang\n\nRisiko erhöht wenn:\n- Frauen: über 0,85\n- Männer: über 1,0\n\nBauchfett ist gefährlicher als Hüftfett!",
        quelle: "I Care Pflege, S. 461",
      },
      {
        type: "tabelle",
        contentC1: "Screening-Instrumente: Welches wann?",
        contentB1: "Welchen Test benutze ich?",
        headers: ["Instrument", "Setting", "Zielgruppe", "Aufbau"],
        rows: [
          [
            "MNA (Mini Nutritional Assessment)",
            "Pflegeheim, ambulant",
            "≥65 Jahre",
            "Short Form 6 Fragen → ggf. Voll-MNA 18 Fragen. 24–30 = normal, 17–23,5 = Risiko, <17 = Mangelernährung",
          ],
          [
            "NRS 2002 (Nutritional Risk Screening)",
            "Krankenhaus",
            "Alle Erwachsenen",
            "Vorscreening 4 Fragen → Hauptscreening. Score ≥3 = Intervention nötig",
          ],
          [
            "SGA (Subjective Global Assessment)",
            "Krankenhaus",
            "Alle Erwachsenen",
            "Anamnese + körperliche Untersuchung. Einteilung A/B/C",
          ],
          [
            "STRONGkids",
            "Krankenhaus",
            "Kinder (1–18 Jahre)",
            "4 Fragen. Score 0 = gering, 1–3 = mittel, 4–5 = hohes Risiko",
          ],
        ],
        quelle: "I Care Pflege, S. 456–461; DNQP 2017",
      },
      {
        type: "warnung",
        contentC1:
          "Häufiger Schülerfehler: MNA im Krankenhaus einsetzen (statt NRS 2002) oder NRS 2002 im Pflegeheim (statt MNA). Das Setting bestimmt das Assessment! Flowchart: Patient kommt an → Setting prüfen → Krankenhaus: NRS 2002 / Geriatrie/Pflegeheim: MNA / Kinder: STRONGkids.",
        contentB1:
          "Häufiger Fehler: falschen Test benutzen!\n\nSo geht es richtig:\n- Krankenhaus → NRS 2002\n- Pflegeheim / alte Menschen → MNA\n- Kinder → STRONGkids\n\nMerke: Das Setting bestimmt den Test!",
      },
      {
        type: "text",
        contentC1:
          "Ess- und Trinkprotokolle sind das Standardinstrument zur Erfassung der tatsächlichen Nahrungsaufnahme. Dokumentation pro Mahlzeit: geschätzte Menge in Portionen oder ml/g. Dazu gehören auch Zwischenmahlzeiten und Getränke. Die Nährwertberechnung kann über Software (PRODI, OptiDiet) erfolgen.",
        contentB1:
          "Essprotokoll: Aufschreiben, was und wie viel der Patient isst.\n- Frühstück, Mittag, Abend + Snacks\n- Menge schätzen (z. B. halbe Portion, 200 ml Tee)\n- Auch Getränke zählen!",
        quelle: "I Care Pflege, S. 461–462",
      },
    ],
  },

  // ── Kapitel 7: Essen und Trinken anreichen ──────────────
  {
    kapitelId: "le08-kap-07",
    titel: "Essen und Trinken anreichen",
    titelB1: "Beim Essen und Trinken helfen",
    tag: "pflege",
    geschaetzteDauer: 10,
    glossarBegriffe: ["Aspirationsprophylaxe", "Schnabelbecher", "Ziffernblatt-Methode"],
    bloecke: [
      {
        type: "tabelle",
        contentC1: "6 Stufen des Hilfebedarfs bei der Nahrungsaufnahme",
        contentB1: "Wie viel Hilfe braucht der Patient?",
        headers: ["Stufe", "Beschreibung", "Pflegerische Aufgabe"],
        rows: [
          [
            "1. Vollständig selbstständig",
            "Isst und trinkt ohne jede Hilfe",
            "Beobachtung",
          ],
          [
            "2. Selbstständig",
            "Braucht nur Bereitstellung",
            "Mahlzeit vorbereiten, Verpackungen öffnen",
          ],
          [
            "3. Eingeschränkt selbstständig",
            "Braucht teilweise Hilfe",
            "Brot schmieren, Fleisch schneiden",
          ],
          [
            "4. Selbstständig mit Hilfe",
            "Braucht Anleitung und Motivation",
            "Anleiten, erinnern, ermutigen",
          ],
          [
            "5. Hoher Hilfebedarf",
            "Kann nur wenig selbst",
            "Essen anreichen, geduldig begleiten",
          ],
          [
            "6. Sehr hoher Hilfebedarf",
            "Orale Nahrung nicht möglich",
            "Sondenernährung, parenterale Ernährung",
          ],
        ],
        quelle: "I Care Pflege, S. 472",
      },
      {
        type: "merke",
        contentC1:
          "Täglich neu bewerten! Der Hilfebedarf kann sich von Tag zu Tag ändern. Ressourcenorientiert unterstützen: So viel Hilfe wie nötig, so wenig wie möglich (aktivierende Pflege).",
        contentB1:
          "Jeden Tag neu schauen: Wie viel Hilfe braucht der Patient heute?\nRegel: So viel helfen wie nötig, so wenig wie möglich.",
      },
      {
        type: "text",
        contentC1:
          "Positionierung beim Essen:\n• Am Tisch: 90° Kniewinkel, Rücken an Lehne, Gesäß tief im Stuhl\n• An der Bettkante: Nur bei stabiler Rumpfmuskulatur! Sitzwürfel verwenden\n• Im Bett sitzend: Kopfteil ≥70° erhöht, Rutschbremse (zusammengerolltes Handtuch am Fußende)\n• Im Liegen: Linke Seitenlage bevorzugt (Magenkorpus links → weniger Übelkeit). NIE in Rückenlage → Aspirationsgefahr!\n• Nach dem Essen: Oberkörper noch ca. 20 Min. erhöht lassen (Aspirationsprophylaxe)",
        contentB1:
          "Wie soll der Patient sitzen beim Essen?\n\n- Am Tisch: Aufrecht sitzen, Füße auf dem Boden\n- Im Bett: Kopfteil hoch (mindestens 70°)\n- Nie flach auf dem Rücken essen! (Verschluckungsgefahr)\n- Nach dem Essen: Oberkörper 20 Minuten hochlassen",
        quelle: "I Care Pflege, S. 472–474",
      },
      {
        type: "text",
        contentC1:
          "Grundsätze beim Essenanreichen:\n• Patient bestimmt Tempo\n• Besteck von vorne, unten an den Mund führen\n• Verschiedene Konsistenzen NICHT mischen (Aspirationsgefahr!)\n• Mund vollständig entleert, bevor nachgereicht wird\n• Mund mit Serviette abwischen — nie mit Löffel oder Hand\n• Sehbeeinträchtigte: Ziffernblatt-Methode für Telleranordnung (z. B. 'Kartoffeln auf 12 Uhr, Gemüse auf 3 Uhr'), kontrastreiches Geschirr",
        contentB1:
          "Regeln beim Essen anreichen:\n1. Patient bestimmt das Tempo — nicht drängeln!\n2. Löffel von vorne und unten zum Mund führen\n3. Verschiedenes Essen NICHT mischen (gefährlich!)\n4. Warten bis der Mund leer ist, bevor man mehr gibt\n5. Mund mit Serviette abwischen — nicht mit dem Löffel\n6. Bei blinden Patienten: Uhr-Methode ('Kartoffeln auf 12 Uhr')",
        quelle: "I Care Pflege, S. 474–475",
      },
      {
        type: "warnung",
        contentC1:
          "Schnabelbecher bleiben im Schrank! Der 'Schnabel' begünstigt ein unphysiologisches Trinkverhalten: Der Kopf wird überstreckt, der Kehldeckel öffnet sich, Flüssigkeit läuft unkontrolliert in den Rachen → erhöhtes Aspirationsrisiko. Die BESTE Trinkhilfe ist ein Strohhalm — auch bei kognitiver Beeinträchtigung nutzbar. Alternativen: Glas mit Nasenausschnitt, Andickungsmittel (z. B. Nutilis Powder) bei schweren Schluckstörungen.",
        contentB1:
          "WICHTIG: Schnabelbecher NICHT benutzen!\nDer Patient muss den Kopf nach hinten neigen → die Luftröhre öffnet sich → Verschluckungsgefahr!\n\nBeste Trinkhilfe: ein Strohhalm!\nAuch gut: Glas mit Nasenausschnitt.\nBei starken Schluckproblemen: Getränke andicken.",
        quelle: "I Care Pflege, S. 475",
      },
      {
        type: "warnung",
        contentC1:
          "Medikamente NIE heimlich im Essen verstecken — das ist Körperverletzung nach § 223 StGB! Auch bei Demenz, auch 'im besten Interesse' des Patienten. Stattdessen: andere Darreichungsform suchen (Saft, Schmelztablette), Kinn Richtung Brust beim Tablettenschlucken, manche Antibiotika nicht mit Milchprodukten (z. B. Tetracycline). Große Tabletten nur teilen, wenn eine Bruchkerbe vorhanden ist.",
        contentB1:
          "VERBOTEN: Medikamente heimlich ins Essen mischen!\nDas ist eine Straftat (Körperverletzung).\n\nStattdessen:\n- Andere Form fragen (Saft, Tropfen)\n- Kinn nach unten beim Schlucken\n- Manche Medikamente nicht mit Milch nehmen\n- Große Tabletten nur teilen wenn eine Kerbe da ist",
        quelle: "I Care Pflege, S. 476",
      },
      {
        type: "text",
        contentC1:
          "Erste Hilfe bei Aspiration: Wenn ein Patient sich sichtbar verschluckt und hustet, Oberkörper nach vorne beugen und zum kräftigen Husten auffordern. Fünf Schläge zwischen die Schulterblätter (Rücken). Bei Erfolglosigkeit: Heimlich-Manöver (Oberbauchkompressionen). Bei Bewusstlosigkeit: Notruf, kardiopulmonale Reanimation einleiten.",
        contentB1:
          "Erste Hilfe wenn jemand sich verschluckt:\n1. Nach vorne beugen lassen\n2. Kräftig husten lassen\n3. 5 Schläge zwischen die Schulterblätter\n4. Wenn das nicht hilft: Heimlich-Griff (Druck auf den Oberbauch)\n5. Bei Bewusstlosigkeit: Notruf 112 und Wiederbelebung starten!",
      },
    ],
  },

  // ── Kapitel 8: Dysphagie & Aspiration ───────────────────
  {
    kapitelId: "le08-kap-08",
    titel: "Schluckstörungen und Aspiration",
    titelB1: "Wenn Schlucken gefährlich wird",
    tag: "krankheitslehre",
    geschaetzteDauer: 8,
    glossarBegriffe: ["Dysphagie", "Aspiration", "Epiglottis", "IDDSI", "F.O.T.T."],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Dysphagie (Schluckstörung) tritt häufig auf nach Apoplex, bei Demenz, bei Parkinson, nach Operationen im HNO-Bereich. Der Aspirationsmechanismus: Normalerweise schließt der Kehldeckel (Epiglottis) beim Schlucken → Nahrung gleitet am Kehlkopf vorbei in die Speiseröhre. Bei Dysphagie schließt der Kehldeckel nicht richtig → Nahrung/Flüssigkeit gelangt in die Luftröhre → Aspirationspneumonie.",
        contentB1:
          "Dysphagie = Schluckstörung. Kommt vor nach:\n- Schlaganfall\n- bei Demenz\n- bei Parkinson\n- nach Operationen am Hals\n\nWas passiert? Der Kehldeckel schließt nicht richtig → Essen oder Trinken kommt in die Luftröhre → Lungenentzündung!",
        quelle: "I Care Pflege, S. 455–456, 475",
      },
      {
        type: "merke",
        contentC1:
          "5 sichtbare Dysphagie-Zeichen:\n1. Husten/Würgen beim oder nach dem Essen/Trinken\n2. Feuchte, gurgelnde Stimme nach dem Schlucken\n3. Häufiges Räuspern\n4. Nahrungsreste im Mund nach dem Schlucken\n5. Unerklärter Gewichtsverlust\n\nCAVE: Stille Aspiration = KEINE sichtbaren Zeichen! Patient aspiriert OHNE Hustenreflex → besonders gefährlich, weil es unbemerkt bleibt.",
        contentB1:
          "5 Zeichen für Schluckprobleme:\n1. Husten beim Essen oder Trinken\n2. Gurgelnde Stimme nach dem Schlucken\n3. Ständiges Räuspern\n4. Essen bleibt im Mund\n5. Gewicht geht runter ohne Grund\n\nACHTUNG: Manchmal gibt es KEINE Zeichen! Das heißt 'stille Aspiration' — besonders gefährlich!",
      },
      {
        type: "tabelle",
        contentC1:
          "IDDSI-Konsistenzstufen (International Dysphagia Diet Standardisation Initiative)",
        contentB1: "Wie dick muss das Essen sein?",
        headers: ["Stufe", "Bezeichnung", "Beschreibung"],
        rows: [
          ["0", "Dünnflüssig", "Normales Wasser, Tee, Kaffee"],
          ["1", "Leicht angedickt", "Dickflüssiger als Wasser, fließt vom Löffel"],
          ["2", "Mäßig angedickt", "Tropft langsam vom Löffel"],
          ["3", "Stark angedickt / Liquidisiert", "Hält sich auf dem Löffel"],
          ["4", "Püriert", "Brei-Konsistenz, kein Kauen nötig"],
          ["5", "Zerkleinert und weich", "Kleine Stücke, leicht zu kauen"],
          ["6", "Weich und mundgerecht", "Weiche Stücke, normaler Biss"],
          ["7", "Normal", "Alle Konsistenzen, normales Kauen"],
        ],
        quelle: "I Care Pflege, S. 475; IDDSI Framework",
      },
      {
        type: "text",
        contentC1:
          "Die Konsistenzstufe wird durch die Logopädin festgelegt, die Pflege setzt sie um. Angedickte Flüssigkeiten werden mit Andickungsmittel (z. B. Nutilis Powder) hergestellt. Kalte oder kohlensäurehaltige Getränke können den Schluckreflex stimulieren. Kinnneigung beim Schlucken schützt die Atemwege. F.O.T.T. (Facio-Orale Trakt-Therapie) ist ein therapeutisches Konzept in Zusammenarbeit mit der Logopädie.",
        contentB1:
          "Wichtig bei Schluckstörungen:\n- Die Logopädin sagt, wie dick die Getränke sein müssen\n- Die Pflege macht es dann so (z. B. Pulver zum Andicken)\n- Kalte Getränke oder Sprudel können helfen, den Schluckreflex auszulösen\n- Kinn nach unten beim Schlucken = sicherer",
      },
      {
        type: "text",
        contentC1:
          "Aspirationsprophylaxe — Zusammenfassung:\n• Oberkörperhochlagerung mindestens 30°, besser 60–90°\n• Kleine Bissen, langsam essen\n• Nach dem Schlucken: Leerschlucken (2× schlucken)\n• Konsistenzen nach logopädischer Empfehlung anpassen\n• 20–30 Minuten nach dem Essen Oberkörper hochgelagert lassen\n• Mundpflege nach jeder Mahlzeit (Nahrungsreste entfernen)\n• Bei Bewusstseinseinschränkung: keine orale Nahrung!",
        contentB1:
          "So schützt man den Patienten vor Verschlucken:\n- Oberkörper hoch (mindestens 30°)\n- Kleine Bissen, langsam essen\n- 2× schlucken nach jedem Bissen\n- Essen in der richtigen Konsistenz geben\n- Nach dem Essen: 20–30 Minuten aufrecht bleiben\n- Mundpflege nach dem Essen\n- Wenn Patient nicht wach ist: KEIN Essen durch den Mund!",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-07 (Haut-/Körperpflege): Mundpflege bei Dysphagie — Soor-/Parotitisprophylaxe und Schluckreflex",
        contentB1: "→ LE-07: Mundpflege — besonders wichtig bei Schluckproblemen",
        zielLeId: "le-07",
      },
    ],
  },

  // ── Kapitel 9: Künstliche Ernährung ─────────────────────
  {
    kapitelId: "le08-kap-09",
    titel: "Künstliche Ernährung",
    titelB1: "Ernährung über Sonde und Infusion",
    tag: "pflege",
    geschaetzteDauer: 12,
    glossarBegriffe: [
      "Enterale Ernährung",
      "Parenterale Ernährung",
      "PEG",
      "Magensonde",
      "ZVK",
    ],
    bloecke: [
      {
        type: "merke",
        contentC1:
          "Grundsatz: 'If the gut works, use it' — enterale Ernährung ist IMMER der parenteralen vorzuziehen, wenn der Magen-Darm-Trakt funktioniert. Die Darmzotten bilden sich bei fehlender enteraler Ernährung zurück (Zottenatrophie) → Barrierefunktion geht verloren → Bakterientranslokation möglich.\n\nStufenschema der Ernährungstherapie (Valentini et al. 2013):\n1. Orale Ernährung + Supplemente\n2. Orale Nahrungssupplementation (ONS/Trinknahrung)\n3. Enterale Ernährung (Sondenernährung)\n4. Parenterale Ernährung (i.v.)",
        contentB1:
          "Wichtigster Grundsatz: Wenn der Darm funktioniert, benutze ihn!\n\nSo geht man vor:\n1. Zuerst: Normales Essen + Nahrungsergänzung\n2. Dann: Trinknahrung\n3. Dann: Sonde in den Magen\n4. Zuletzt: Nährstoffe direkt ins Blut\n\nWarum? Wenn der Darm nicht benutzt wird, wird er schwächer.",
      },
      {
        type: "text",
        contentC1:
          "Oral bilanzierte Diäten (Trinknahrung/ONS): Hochkalorische Trinknahrungen (1–2,4 kcal/ml) als Ergänzung oder Alleinernährung. Verschiedene Geschmacksrichtungen (süß, herzhaft, als Suppe/Creme). Proteinreiche Varianten bei Mangelernährung: mind. 1,0 g/kg KG Protein/Tag. Compliance-Problem: Viele Patienten lehnen den Geschmack ab → verschiedene Geschmacksrichtungen anbieten, gekühlt servieren, in kleinen Portionen über den Tag verteilen.",
        contentB1:
          "Trinknahrung: Fertige Drinks mit extra viel Energie und Nährstoffen.\n- Gibt es in vielen Geschmacksrichtungen (Vanille, Erdbeere, Suppe)\n- Manche Patienten mögen den Geschmack nicht → verschiedene probieren lassen\n- Tipp: Gekühlt schmeckt es besser, kleine Mengen über den Tag verteilen",
        quelle: "I Care Pflege, S. 464",
      },
      {
        type: "text",
        contentC1:
          "Nasogastrale Sonde (Magensonde): Über Nase → Ösophagus → Magen. Kurzzeit-Lösung (max. 2–4 Wochen). Lagekontrolle vor JEDER Nahrungsgabe: Aspiration von Magensaft (pH <5), Auskultation (Luftinsufflation), im Zweifel röntgenologische Kontrolle. Bei dislozierter Sonde besteht die Gefahr der pulmonalen Aspiration!",
        contentB1:
          "Magensonde durch die Nase:\n- Ein dünner Schlauch geht durch die Nase in den Magen\n- Nur für kurze Zeit (2–4 Wochen)\n- WICHTIG: Vor jedem Füttern prüfen, ob die Sonde noch richtig liegt!\n  → Magensaft ansaugen (sauer = richtig)\n  → Luft reinpusten und am Bauch horchen",
        quelle: "I Care Pflege, S. 465",
      },
      {
        type: "text",
        contentC1:
          "PEG (Perkutane Endoskopische Gastrostomie): Direkte Verbindung durch die Bauchdecke zum Magen. Langzeit-Lösung (>4 Wochen). Anlage durch Gastroenterologen unter Endoskopie.\n\nPflege der Einstichstelle: Täglich inspizieren (Rötung, Schwellung, Eiter), Verbandwechsel nach Hausstandard. Sondenkost-Applikation: per Schwerkraft oder Ernährungspumpe. Bolus-Gabe (portionsweise, 200–300 ml über 15–30 Min.) oder kontinuierliche Gabe (langsamer Dauerlauf). Vor und nach jeder Gabe: Sonde mit 30–50 ml Wasser spülen!",
        contentB1:
          "PEG-Sonde: Ein Schlauch direkt durch die Bauchdecke in den Magen.\n- Für lange Zeit (mehr als 4 Wochen)\n- Der Arzt legt sie mit einer Kamera an\n\nPflege:\n- Jeden Tag die Stelle anschauen (rot? geschwollen? Eiter?)\n- Verband wechseln\n- Vor und nach dem Füttern: Sonde mit Wasser spülen (30–50 ml)",
        quelle: "I Care Pflege, S. 465–468",
      },
      {
        type: "text",
        contentC1:
          "Parenterale Ernährung: Nährstoffzufuhr unter Umgehung des Magen-Darm-Trakts, direkt ins Blut über einen zentralvenösen Katheter (ZVK). Indikation: wenn enterale Ernährung nicht möglich oder nicht ausreichend (z. B. Kurzdarmsyndrom, schwere Pankreatitis, Ileus, postoperativ). Enthält: Aminosäuren, Glukose, Fettemulsionen, Elektrolyte, Vitamine, Spurenelemente (All-in-One-Beutel).",
        contentB1:
          "Parenterale Ernährung: Nährstoffe direkt ins Blut über einen großen Venenkatheter (ZVK).\n\nWann? Wenn der Darm gar nicht funktioniert:\n- Darm zu kurz (nach OP)\n- Schwere Bauchspeicheldrüsen-Entzündung\n- Darmverschluss\n\nDer Beutel enthält alles: Zucker, Eiweiß, Fett, Vitamine.",
        quelle: "I Care Pflege, S. 468–470",
      },
      {
        type: "warnung",
        contentC1:
          "Komplikationen der parenteralen Ernährung:\n1. Katheterinfektionen (häufigste Komplikation!) → strenge Hygiene, aseptischer Verbandwechsel\n2. Thrombose am ZVK\n3. Hyperglykämie (zu viel Glukose) → Blutzuckerkontrollen\n4. Elektrolytentgleisung\n5. Hepatische Steatose (Fettleber bei Langzeit-PN)\n6. Refeeding-Syndrom bei Mangelernährten\n7. Luftembolie bei Diskonnektion\n\nDaher: Engmaschige Überwachung von Laborwerten, Vitalzeichen und Einstichstelle!",
        contentB1:
          "Risiken bei Ernährung über die Vene:\n1. Infektion am Katheter (häufigste Komplikation!) → Alles muss steril sein\n2. Blutzucker kann zu hoch werden → regelmäßig messen\n3. Salze im Blut können durcheinander geraten\n4. Leber kann verfetten (bei langer Dauer)\n\nWichtig: Regelmäßig Blut kontrollieren und Einstichstelle prüfen!",
      },
    ],
  },

  // ── Kapitel 10: Kostformen & Diäten ─────────────────────
  {
    kapitelId: "le08-kap-10",
    titel: "Kostformen und Diäten",
    titelB1: "Welches Essen im Krankenhaus?",
    tag: "pflege",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Kostform", "Vollkost", "Leichte Vollkost", "Wunschkost"],
    bloecke: [
      {
        type: "tabelle",
        contentC1: "Kostformen im klinischen Setting",
        contentB1: "Verschiedene Essensarten im Krankenhaus",
        headers: ["Kostform", "Beschreibung", "Einsatz"],
        rows: [
          [
            "Vollkost",
            "Ausgewogene, vollwertige Kost",
            "Gesunde Patienten, Normalstation",
          ],
          [
            "Leichte Vollkost",
            "Gut verträglich, keine blähenden/fettigen Lebensmittel",
            "Bei Magen-Darm-Beschwerden",
          ],
          [
            "Passierte Kost",
            "Alles püriert, keine festen Stücke",
            "Bei Schluckstörungen (Dysphagie)",
          ],
          ["Flüssigkost", "Nur flüssige Nahrung", "Prä-/postoperativ"],
          [
            "Wunschkost",
            "Was der Patient möchte",
            "Palliativ, Onkologie — Lebensqualität",
          ],
        ],
        quelle: "I Care Pflege, S. 470–471",
      },
      {
        type: "text",
        contentC1:
          "Spezialdiäten (nur nach ärztlicher Anordnung): Diabeteskost (angepasste Kohlenhydrate), Dialysekost (Kalium-, Phosphat-, Flüssigkeitsrestriktion), glutenfreie Kost (bei Zöliakie — lebenslang!), laktosefreie Kost, purinarme Kost (bei Gicht).",
        contentB1:
          "Spezielle Diäten (nur wenn der Arzt es sagt):\n- Diabetes: Weniger Zucker und angepasste Kohlenhydrate\n- Dialyse: Weniger Kalium, Phosphat und Flüssigkeit\n- Zöliakie: Kein Gluten (kein Weizen, Roggen, Gerste) — für immer!\n- Laktose-Intoleranz: Keine Milchprodukte",
      },
      {
        type: "text",
        contentC1:
          "Nahrungsmittelunverträglichkeiten vs. Allergien: Intoleranz = enzymatischer Mangel (Laktose: Laktasemangel; Fruktose: Transportdefekt) — unangenehm, aber nicht lebensbedrohlich. Allergie = Immunreaktion (z. B. Nüsse, Meeresfrüchte) → Anaphylaxie möglich! Zöliakie = Autoimmunreaktion auf Gluten → glutenfreie Kost lebenslang. Pflegerisch: Kostform-Kennzeichnung im Kurvenblatt ist essenziell — Verwechslungen können lebensbedrohlich sein.",
        contentB1:
          "Unverträglichkeit vs. Allergie:\n- Unverträglichkeit (z. B. Laktose): Bauchschmerzen, Durchfall — nicht gefährlich\n- Allergie (z. B. Nüsse): Kann sehr gefährlich sein! (Schwellung, Atemnot)\n\nSehr wichtig: Im Kurvenblatt muss stehen, was der Patient NICHT essen darf!",
        quelle: "I Care Pflege, S. 470",
      },
      {
        type: "text",
        contentC1:
          "Kulturelle und religiöse Ernährungsaspekte: Islam — Halal (kein Schwein, kein Alkohol), Ramadan-Fasten beachten. Judentum — Koscher (Fleisch/Milch getrennt). Hinduismus — oft vegetarisch. Pflegerisch: Bei Aufnahme Ernährungsgewohnheiten und -tabus erfragen, Küche informieren, Alternativen anbieten. Fasten bei Krankheit: Meist gibt es religiöse Ausnahmen — sensibel und respektvoll ansprechen.",
        contentB1:
          "Verschiedene Kulturen, verschiedenes Essen:\n- Islam: Kein Schweinefleisch, kein Alkohol. Im Ramadan wird tagsüber gefastet\n- Judentum: Fleisch und Milch dürfen nicht zusammen sein\n- Hinduismus: Oft kein Fleisch\n\nBei der Aufnahme fragen: Was essen Sie? Was essen Sie nicht?\nBei Fasten und Krankheit: Oft gibt es Ausnahmen — freundlich nachfragen",
      },
    ],
  },

  // ── Kapitel 11: Flüssigkeitsbilanz ──────────────────────
  {
    kapitelId: "le08-kap-11",
    titel: "Flüssigkeitsbilanz",
    titelB1: "Wie viel Wasser rein und raus?",
    tag: "pflege",
    geschaetzteDauer: 6,
    glossarBegriffe: ["Flüssigkeitsbilanz", "Einfuhr", "Ausfuhr"],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Flüssigkeitsbilanz = Einfuhr minus Ausfuhr. Sie zeigt, ob der Patient zu viel oder zu wenig Flüssigkeit im Körper hat.\n\nEinfuhr: Orale Trinkmenge + Infusionen + Wasseranteil der Sondennahrung (75–85 %) + Wasseranteil fester Nahrung (ca. 0,33 ml/kcal) + Spülmengen (50–100 ml vor/nach Medikamentengabe über Sonde)\n\nAusfuhr: Urin (Messbecher) + Stuhl (geschätzt) + Drainagen + Erbrechen + geschätzter Schweiß (ca. 500–900 ml/Tag, bei Fieber mehr) + Atmung (Perspiratio insensibilis ca. 400 ml/Tag)",
        contentB1:
          "Flüssigkeitsbilanz = Wie viel Wasser rein kommt minus wie viel raus geht.\n\nWas zählt als REIN?\n- Trinken\n- Infusionen\n- Wasser in der Sondennahrung\n- Spülwasser bei Medikamenten\n\nWas zählt als RAUS?\n- Urin (genau messen)\n- Stuhl, Erbrechen, Drainage\n- Schweiß und Atmung (schätzen)",
        quelle: "I Care Pflege, S. 462–463",
      },
      {
        type: "merke",
        contentC1:
          "Positive Bilanz = Einfuhr > Ausfuhr → Flüssigkeit sammelt sich an (z. B. Ödeme bei Herzinsuffizienz). Negative Bilanz = Ausfuhr > Einfuhr → Flüssigkeit geht verloren (z. B. Exsikkose). Die Bilanz muss über 24 Stunden geführt werden, jede Menge exakt erfassen. Das Einfuhr-/Ausfuhrprotokoll ist ein juristisches Dokument!",
        contentB1:
          "Plus-Bilanz: Mehr rein als raus → Wassereinlagerung (Ödeme)\nMinus-Bilanz: Mehr raus als rein → Austrocknung (Exsikkose)\n\nWichtig: 24 Stunden lang alles aufschreiben — jeder Schluck zählt!\nDas Protokoll ist ein wichtiges Dokument!",
      },
      {
        type: "warnung",
        contentC1:
          "Häufige Fehler bei der Bilanzierung:\n1. Sondennahrung-Wasseranteil vergessen → Bilanz erscheint fälschlicherweise negativ\n2. Spülmengen nicht bilanziert → zusätzliche Einfuhr wird übersehen\n3. Perspiratio insensibilis (Schweiß + Atmung) nicht einberechnet\n4. Bei Fieber: +500 ml pro °C über 37 °C nicht berücksichtigt\n5. Infusionsraten nicht korrekt umgerechnet",
        contentB1:
          "Häufige Fehler:\n1. Vergessen, dass Sondennahrung viel Wasser enthält\n2. Spülwasser nicht aufschreiben\n3. Schweiß und Atmung vergessen (500–900 ml pro Tag!)\n4. Bei Fieber: Extra 500 ml pro Grad über 37 °C nicht dazurechnen",
      },
    ],
  },

  // ── Kapitel 12: Ethik & Recht bei Ernährung ─────────────
  {
    kapitelId: "le08-kap-12",
    titel: "Ethische und rechtliche Grundlagen",
    titelB1: "Recht und Ethik beim Essen",
    tag: "pflege",
    geschaetzteDauer: 8,
    glossarBegriffe: [
      "Patientenverfügung",
      "Einwilligung",
      "Körperverletzung",
      "DNQP",
    ],
    bloecke: [
      {
        type: "text",
        contentC1:
          "Nahrungsverweigerung als Patientenrecht: Jeder einwilligungsfähige Patient hat das Recht, Nahrung und Flüssigkeit abzulehnen — auch wenn das medizinisch ungünstig ist. Das gilt auch für die Ablehnung einer PEG-Sonde oder Infusionstherapie. Pflicht der Pflegekraft: Aufklären über Konsequenzen, Entscheidung respektieren, DOKUMENTIEREN. Nahrungsverweigerung ≠ Suizidalität! Eine bewusste Entscheidung am Lebensende ist keine psychiatrische Indikation.",
        contentB1:
          "Jeder Patient darf selbst entscheiden:\n- 'Ich will nicht essen' → Das ist sein Recht!\n- 'Ich will keine Sonde' → Das ist auch sein Recht!\n\nWas muss die Pflegekraft tun?\n1. Erklären, was passiert wenn man nicht isst\n2. Die Entscheidung respektieren\n3. Alles aufschreiben (dokumentieren)",
        quelle: "I Care Pflege, S. 175, 179",
      },
      {
        type: "text",
        contentC1:
          "PEG-Anlage und Einwilligung: Die PEG-Anlage ist ein invasiver Eingriff → erfordert informierte Einwilligung.\n• Patient einwilligungsfähig → Patient entscheidet selbst\n• Patient NICHT einwilligungsfähig → Patientenverfügung prüfen (§ 1901a BGB)\n• Keine Patientenverfügung → Betreuer/Bevollmächtigter entscheidet nach mutmaßlichem Willen\n• Kein Betreuer bestellt → Betreuungsgericht einschalten\n\nBei Demenz: Ethische Fallbesprechung im interdisziplinären Team. Evidenz: PEG bei fortgeschrittener Demenz verlängert NICHT die Lebenszeit und verbessert NICHT die Lebensqualität (Cochrane Review).",
        contentB1:
          "Wer entscheidet über eine PEG-Sonde?\n1. Patient kann selbst entscheiden → Er/sie entscheidet\n2. Patient kann nicht entscheiden → Patientenverfügung lesen\n3. Keine Verfügung → Betreuer entscheidet\n4. Kein Betreuer → Gericht entscheiden lassen\n\nBei Demenz: Das ganze Team bespricht es zusammen.\nWichtig: Bei schwerer Demenz hilft eine PEG-Sonde oft nicht!",
        quelle: "I Care Pflege, S. 179; DNQP 2017a",
      },
      {
        type: "warnung",
        contentC1:
          "Zwangsernährung ist in Deutschland NUR in der Psychiatrie unter eng definierten Bedingungen erlaubt:\n• Akute Lebensgefahr (z. B. schwere Anorexia nervosa mit BMI <13)\n• Richterliche Genehmigung nach PsychKG des jeweiligen Bundeslandes\n• Alle milderen Mittel müssen ausgeschöpft sein\n\nIm Pflegeheim oder Krankenhaus: KEINE Zwangsernährung. Nahrungsverweigerung ist zu respektieren. Schüler verwechseln häufig 'Fürsorge' mit 'Zwang' — das muss klar getrennt werden.",
        contentB1:
          "Zwangsernährung:\n- Fast IMMER verboten!\n- Nur in der Psychiatrie erlaubt, wenn jemand in Lebensgefahr ist (z. B. sehr schwere Magersucht)\n- Im Pflegeheim: VERBOTEN. Wenn ein Patient nicht essen will, respektieren!\n\nWichtig: Jemanden zum Essen drängen ist nicht das Gleiche wie helfen!",
      },
      {
        type: "text",
        contentC1:
          "Haftung der Pflegekraft bei Ernährungsproblemen:\n• Aspiration nach fehlender Lagekontrolle: Wenn vor Sondennahrungsgabe die Sondenlage NICHT kontrolliert wird → persönliche Haftung möglich\n• Exsikkose durch fehlende Bilanzierung: Wenn Dehydratation nicht erkannt wird → Pflegefehler\n• Mangelernährung ohne Assessment: Wenn kein Screening auf Mangelernährung bei Aufnahme durchgeführt wird → Verstoß gegen DNQP-Expertenstandard\n\nSchutz: Lückenlose Dokumentation. Essprotokoll, Bilanz, Gewichtsverlauf = juristische Dokumente.",
        contentB1:
          "Wann ist die Pflegekraft verantwortlich?\n- Sondenlage nicht geprüft → Patient verschluckt sich → Pflegekraft haftet\n- Trinkmenge nicht aufgeschrieben → Patient trocknet aus → Pflegefehler\n- Kein Ernährungstest bei Aufnahme → Mangelernährung übersehen → Verstoß gegen Standard\n\nSchutz: Alles aufschreiben! Dokumentation ist dein Beweis.",
        quelle: "I Care Pflege, S. 187; DNQP 2017a",
      },
      {
        type: "text",
        contentC1:
          "Dokumentationspflicht: Essprotokoll (was + wie viel hat der Patient gegessen/getrunken — täglich), Gewichtsverlauf (mindestens wöchentlich), Screening-Ergebnisse (MNA/NRS bei Aufnahme + bei Veränderung), Flüssigkeitsbilanz (bei Anordnung), Kostform und Diätanpassungen, Ablehnungen des Patienten (mit Begründung und Aufklärung). Der DNQP-Expertenstandard Ernährungsmanagement (2017) fordert: Screening innerhalb von 24 h nach Aufnahme, individuelle Maßnahmenplanung, regelmäßige Evaluation.",
        contentB1:
          "Was muss aufgeschrieben werden?\n- Essprotokoll: Was und wie viel hat der Patient gegessen?\n- Gewicht: Mindestens 1× pro Woche wiegen\n- Ernährungstest: Bei Aufnahme und wenn sich etwas ändert\n- Trinkmenge: Wenn der Arzt es anordnet\n- Wenn der Patient nicht essen will: Aufschreiben warum und was man erklärt hat\n\nExpertenstandard: Ernährungstest muss in den ersten 24 Stunden gemacht werden!",
        quelle: "DNQP Expertenstandard Ernährungsmanagement 2017",
      },
      {
        type: "querverweis",
        contentC1:
          "→ LE-28 (Sterbende): Ernährung am Lebensende — ethische Fragen, Nahrungs- und Flüssigkeitsverzicht",
        contentB1:
          "→ LE-28: Essen und Trinken am Lebensende — schwierige Entscheidungen",
        zielLeId: "le-28",
      },
    ],
  },
];
