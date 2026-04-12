// Glossar — LE 06 Menschen aller Altersstufen in ihrer Mobilität unterstützen
// 21 Einträge aus Rohmaterial Abschnitt B)
// CONTENT-QUALITAET.md G1: Alle Fachbegriffe aus Steps
// CONTENT-QUALITAET.md G2: B1-Alltagswörter markiert

import type { GlossarEntry } from "../_types";

export const GLOSSAR_LE06: GlossarEntry[] = [
  // === Bewegung & Mobilisation ===
  {
    begriff: "Kinästhetik",
    erklaerung: "Wissenschaftlich fundiertes Konzept zur Analyse und Unterstützung menschlicher Bewegung und Aktivität, entwickelt von Hatch/Maietta. Zielt auf ressourcenorientierte Bewegungsförderung und Stärkung der Eigenbewegung.",
    erklaerungB1: "Eine Methode: Wie bewegen wir uns richtig? Wie helfen wir dem Patienten bei der Bewegung?",
    uebersetzungTr: "Kinestetik",
    uebersetzungAr: "علم الحركة",
    uebersetzungEn: "Kinaesthetics",
    vorsilbeNachsilbe: "kin- (Bewegung) + -ästhetik (Wahrnehmung)",
  },
  {
    begriff: "Mobilisation",
    erklaerung: "Gezielte pflegerische Maßnahme zur Förderung der Beweglichkeit und Selbstständigkeit eines Pflegeempfängers, z. B. vom Liegen zum Sitzen oder Stehen.",
    erklaerungB1: "Den Patienten aus dem Bett helfen und beim Bewegen unterstützen.",
    uebersetzungTr: "Mobilizasyon",
    uebersetzungAr: "التعبئة",
    uebersetzungEn: "Mobilisation",
    istB1Alltagswort: true,
    vorsilbeNachsilbe: "mobil- (beweglich) + -isation (Vorgang)",
  },
  {
    begriff: "Positionierung",
    erklaerung: "Gezielte Lagerung eines Pflegeempfängers in eine therapeutisch oder prophylaktisch wirksame Körperposition, z. B. 30°-Seitenlage zur Dekubitusprophylaxe.",
    erklaerungB1: "Den Patienten in eine bestimmte Lage bringen (z. B. Seitenlage).",
    uebersetzungTr: "Pozisyon verme",
    uebersetzungAr: "التموضع",
    uebersetzungEn: "Positioning",
    vorsilbeNachsilbe: "Position (Lage) + -ierung (Vorgang)",
  },
  {
    begriff: "Grundposition",
    erklaerung: "Eine der 7 kinästhetischen Körperpositionen von liegend bis stehend (Rückenlage, Bauchlage mit Ellbogenstütz, Schneidersitz, Hand-Knie-Stand, Einbein-Knie-Stand, Einbeinstand, Zweibeinstand).",
    erklaerungB1: "7 Körperpositionen von liegend bis stehend (z. B. Rückenlage, Schneidersitz, Stand).",
    uebersetzungTr: "Temel pozisyon",
    uebersetzungAr: "الوضع الأساسي",
    uebersetzungEn: "Basic position",
  },
  {
    begriff: "Transfer",
    erklaerung: "Ortswechsel eines Pflegeempfängers von einer Oberfläche oder Position zu einer anderen, z. B. vom Bett in den Rollstuhl.",
    erklaerungB1: "Den Patienten von einem Platz zum anderen bewegen (z. B. vom Bett in den Rollstuhl).",
    uebersetzungTr: "Transfer",
    uebersetzungAr: "النقل",
    uebersetzungEn: "Transfer",
    istB1Alltagswort: true,
  },

  // === Prophylaxen ===
  {
    begriff: "Prophylaxe",
    erklaerung: "Vorbeugende Maßnahme zur Verhinderung einer Erkrankung oder Komplikation, bevor sie entsteht. In der Pflege: Sturz-, Dekubitus-, Thrombose-, Kontrakturen-, Pneumonieprophylaxe.",
    erklaerungB1: "Vorbeugung — etwas tun, BEVOR ein Problem entsteht.",
    uebersetzungTr: "Profilaksi",
    uebersetzungAr: "الوقاية",
    uebersetzungEn: "Prophylaxis",
    istB1Alltagswort: true,
    vorsilbeNachsilbe: "pro- (vorher) + -phylaxe (Schutz)",
  },
  {
    begriff: "Kontraktur",
    erklaerung: "Dauerhafte Versteifung eines Gelenks durch Schrumpfung von Muskeln, Sehnen oder Bändern infolge längerer Immobilität. Besonders gefährdet: Sprunggelenk (Spitzfuß), Handgelenk, Hüfte, Knie.",
    erklaerungB1: "Ein Gelenk ist steif geworden, weil es sich lange nicht bewegt hat.",
    uebersetzungTr: "Kontraktür",
    uebersetzungAr: "التقلص",
    uebersetzungEn: "Contracture",
    vorsilbeNachsilbe: "con- (zusammen) + -traktur (Ziehen)",
  },
  {
    begriff: "Thrombose",
    erklaerung: "Bildung eines Blutgerinnsels (Thrombus) in einem Blutgefäß, meist in den tiefen Beinvenen. Kann zur lebensbedrohlichen Lungenembolie führen.",
    erklaerungB1: "Ein Blutgerinnsel in einem Blutgefäß (gefährlich!).",
    uebersetzungTr: "Tromboz",
    uebersetzungAr: "الجلطة",
    uebersetzungEn: "Thrombosis",
    vorsilbeNachsilbe: "thromb- (Gerinnsel) + -ose (Zustand/Erkrankung)",
  },
  {
    begriff: "Virchow-Trias",
    erklaerung: "Drei pathophysiologische Faktoren der Thromboseentstehung nach Rudolf Virchow: 1) verlangsamter Blutfluss, 2) Gefäßwandschädigung, 3) veränderte Blutzusammensetzung.",
    erklaerungB1: "3 Gründe für eine Thrombose (langsamer Blutfluss + Gefäßschaden + Blut-Veränderung).",
    uebersetzungTr: "Virchow triadı",
    uebersetzungAr: "ثالوث فيرخوف",
    uebersetzungEn: "Virchow's triad",
  },
  {
    begriff: "Dekubitus",
    erklaerung: "Lokale Schädigung der Haut und des darunterliegenden Gewebes durch anhaltenden Druck, häufig über Knochenvorsprüngen. Klassifikation nach EPUAP/NPUAP in 4 Grade.",
    erklaerungB1: "Druckgeschwür — die Haut geht kaputt weil zu lange Druck darauf war.",
    uebersetzungTr: "Bası yarası",
    uebersetzungAr: "قرحة الضغط",
    uebersetzungEn: "Pressure ulcer / Decubitus",
    istB1Alltagswort: true,
    vorsilbeNachsilbe: "de- (nieder) + -cubitus (Liegen)",
  },
  {
    begriff: "Pneumonie",
    erklaerung: "Entzündung des Lungengewebes, meist infektiös bedingt. Risikofaktoren in der Pflege: Bettlägerigkeit, Immobilität, Schonatmung, Schluckstörung (Aspiration).",
    erklaerungB1: "Lungenentzündung.",
    uebersetzungTr: "Pnömoni",
    uebersetzungAr: "التهاب رئوي",
    uebersetzungEn: "Pneumonia",
    vorsilbeNachsilbe: "pneumo- (Lunge) + -ie (Erkrankung)",
  },
  {
    begriff: "Aspiration",
    erklaerung: "Eindringen von Nahrung, Flüssigkeit oder Mageninhalt in die unteren Atemwege (Trachea/Bronchien). Kann eine Aspirationspneumonie auslösen.",
    erklaerungB1: "Essen oder Trinken kommt in die Lunge statt in den Magen.",
    uebersetzungTr: "Aspirasyon",
    uebersetzungAr: "الشفط",
    uebersetzungEn: "Aspiration",
    vorsilbeNachsilbe: "a- (zu) + -spiration (Einatmen)",
  },

  // === Sturzprophylaxe ===
  {
    begriff: "Sturz",
    erklaerung: "Unfreiwilliges, unkontrolliertes Ereignis, bei dem eine Person auf den Boden oder eine tiefere Ebene gelangt. Sturzrisikofaktoren werden systematisch per Assessment erfasst.",
    erklaerungB1: "Wenn ein Patient hinfällt.",
    uebersetzungTr: "Düşme",
    uebersetzungAr: "السقوط",
    uebersetzungEn: "Fall",
    istB1Alltagswort: true,
  },
  {
    begriff: "Timed-Up-and-Go-Test",
    erklaerung: "Standardisierter Mobilitätstest: Aufstehen, 3 m gehen, umdrehen, zurückgehen, hinsetzen. Auswertung: <10 s = normal, 10–19 s = leichtes Risiko, ≥20 s = erhöhtes Sturzrisiko.",
    erklaerungB1: "Ein Test: Aufstehen, 3 Meter gehen, umdrehen, zurück, hinsetzen — wie schnell?",
    uebersetzungTr: "Zamanlı kalk-yürü testi",
    uebersetzungAr: "اختبار النهوض والمشي",
    uebersetzungEn: "Timed Up and Go test (TUG)",
  },

  // === Medikamente & Hilfsmittel ===
  {
    begriff: "Anti-Thrombose-Strümpfe (MTS)",
    erklaerung: "Medizinische Kompressionsstrümpfe, die durch graduierten Druck den venösen Rückfluss in den Beinen fördern und so einer Thrombose vorbeugen.",
    erklaerungB1: "Enge Strümpfe die das Blut in den Beinen schneller fließen lassen.",
    uebersetzungTr: "Anti-tromboz çorabı",
    uebersetzungAr: "جوارب مضادة للجلطة",
    uebersetzungEn: "Anti-embolism stockings (TED)",
  },
  {
    begriff: "Heparin",
    erklaerung: "Antikoagulans (Gerinnungshemmer), das subkutan injiziert wird, um die Bildung von Blutgerinnseln zu verhindern. Standardmäßig zur Thromboseprophylaxe bei immobilen Patienten.",
    erklaerungB1: "Ein Medikament das Blutgerinnsel verhindert (Spritze unter die Haut).",
    uebersetzungTr: "Heparin",
    uebersetzungAr: "الهيبارين",
    uebersetzungEn: "Heparin",
  },
  {
    begriff: "Rollator",
    erklaerung: "Fahrbare Gehhilfe mit vier Rädern, Bremsen und ggf. Sitzfläche zur Unterstützung bei mittlerer Gangunsicherheit. Beide Hände frei, stabiler als Gehstock.",
    erklaerungB1: "Ein Gehgestell mit Rädern und Bremsen zum sicheren Gehen.",
    uebersetzungTr: "Yürüteç",
    uebersetzungAr: "المشاية",
    uebersetzungEn: "Rollator / Walker",
    istB1Alltagswort: true,
  },

  // === Konzepte & Assessments ===
  {
    begriff: "Bobath-Konzept",
    erklaerung: "Ganzheitliches neurophysiologisches Therapiekonzept für Patienten mit ZNS-Schädigung (z. B. Schlaganfall). Grundprinzip: Betroffene Seite aktiv einbeziehen statt kompensieren.",
    erklaerungB1: "Eine Methode für Patienten nach Schlaganfall: Die kranke Seite wird einbezogen.",
    uebersetzungTr: "Bobath konsepti",
    uebersetzungAr: "مفهوم بوباث",
    uebersetzungEn: "Bobath concept",
  },
  {
    begriff: "Barthel-Index",
    erklaerung: "Standardisiertes Assessment zur Einschätzung der Selbstständigkeit in 10 ADL-Bereichen (Essen, Baden, Körperpflege, An-/Auskleiden, Stuhl-/Harnkontrolle, Toilette, Transfer, Mobilität, Treppe). Skala 0–100.",
    erklaerungB1: "Ein Test mit 10 Bereichen: Wie viel kann der Patient alleine? 0 = braucht bei allem Hilfe, 100 = alles alleine.",
    uebersetzungTr: "Barthel indeksi",
    uebersetzungAr: "مؤشر بارثل",
    uebersetzungEn: "Barthel Index",
  },

  // === Spezifische Begriffe ===
  {
    begriff: "Spitzfuß",
    erklaerung: "Fußfehlstellung (Pes equinus) mit dauerhafter Plantarflexion des Sprunggelenks durch Kontraktur der Wadenmuskulatur. Häufigste Kontraktur bei Bettlägerigkeit.",
    erklaerungB1: "Der Fuß steht nach unten und kann nicht mehr flach stehen.",
    uebersetzungTr: "Çarpık ayak",
    uebersetzungAr: "القدم المدببة",
    uebersetzungEn: "Drop foot / Equinus foot",
    vorsilbeNachsilbe: "Spitz- (spitz zulaufend) + -fuß (Körperteil)",
  },
  {
    begriff: "Scherkraft",
    erklaerung: "Tangential auf die Haut einwirkende Kraft, die entsteht wenn Hautschichten gegeneinander verschoben werden (z. B. beim Herunterrutschen im Bett). Begünstigt Dekubitusentstehung.",
    erklaerungB1: "Reibung auf der Haut wenn der Patient rutscht — kann Dekubitus verursachen.",
    uebersetzungTr: "Kesme kuvveti",
    uebersetzungAr: "قوة القص",
    uebersetzungEn: "Shear force",
    vorsilbeNachsilbe: "Scher- (schneiden/gleiten) + -kraft (Einwirkung)",
  },
];
