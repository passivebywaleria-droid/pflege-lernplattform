// Öffentliche Wissens-Seiten (/wissen) — SEO/AEO.
// Jede Seite = 1 Frage + tiefe, fachlich belegte Antwort + FAQ + Quellen.
// Inhalt deutschsprachig, gegroundet auf Primärquellen (NPUAP/EPUAP, DNQP).
// Kein erfundener Content — alle Fakten stammen aus content/ce-02 (belegt).

export interface WissenFaqItem {
  frage: string
  antwort: string
}

export interface WissenTable {
  caption?: string
  headers: string[]
  rows: string[][]
}

export interface WissenSection {
  /** H2-Überschrift; idealerweise als (Teil-)Frage formuliert. */
  heading: string
  /** Absätze. Markdown-light: **fett** wird gerendert. */
  body?: string[]
  bullets?: string[]
  table?: WissenTable
}

export interface WissenHowToStep {
  name: string
  text: string
}

export interface WissenRelated {
  slug: string
  label: string
}

export interface WissenPage {
  slug: string
  /** H1 — die wörtliche Suchfrage. */
  frage: string
  /** TL;DR (40–60 Wörter) — eigenständig zitierbar für AI-Antworten. */
  kurzantwort: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** ISO-Datum der letzten inhaltlichen Aktualisierung. */
  updated: string
  lesezeitMin: number
  /** Einordnung im Curriculum, z. B. "CE 02 · Pflegeprozess". */
  ceContext?: string
  sections: WissenSection[]
  faq: WissenFaqItem[]
  /** Optionales HowTo-Schema (Handlungsabfolge). */
  howTo?: { name: string; steps: WissenHowToStep[] }
  quellen: string[]
  related: WissenRelated[]
}

export const wissenPages: WissenPage[] = [
  {
    slug: "dekubitus-stadien",
    frage: "Die 4 Dekubitus-Stadien (Kategorien I–IV) einfach erklärt",
    kurzantwort:
      "Ein Dekubitus wird nach NPUAP/EPUAP (2019) in 4 Kategorien eingeteilt: Kategorie I — nicht-wegdrückbare Rötung bei intakter Haut. Kategorie II — Teilverlust der Haut (Blase oder flache offene Wunde). Kategorie III — Hautverlust bis ins Unterhautfettgewebe. Kategorie IV — freiliegender Muskel, Knochen oder Sehne. Dazu kommen zwei Sonderformen: „nicht einstufbar“ und „Deep Tissue Injury“.",
    metaTitle: "Dekubitus-Stadien I–IV einfach erklärt (NPUAP/EPUAP)",
    metaDescription:
      "Die 4 Dekubitus-Kategorien (Grad/Stadium I–IV) verständlich erklärt: Merkmale, Fingertest, Sonderformen, Prädilektionsstellen. Fachlich belegt nach NPUAP/EPUAP 2019 & DNQP.",
    keywords: [
      "dekubitus stadien",
      "dekubitus kategorien",
      "dekubitus grad 1 2 3 4",
      "dekubitus einteilung",
      "fingertest dekubitus",
      "deep tissue injury",
    ],
    updated: "2026-06-29",
    lesezeitMin: 6,
    ceContext: "CE 02 · Pflegeprozess · Dekubitusprophylaxe",
    sections: [
      {
        heading: "Die 4 Dekubitus-Stadien im Überblick",
        body: [
          "Ein **Dekubitus** (Druckgeschwür) ist eine lokale Schädigung der Haut und/oder des darunterliegenden Gewebes, meist über einem Knochenvorsprung, verursacht durch anhaltenden **Druck** — allein oder in Kombination mit **Scherkräften**. Zur einheitlichen Beschreibung der Tiefe wird der Dekubitus klassifiziert.",
          "Die international gebräuchliche Einteilung stammt von **NPUAP/EPUAP/PPPIA (2019)**. Die Begriffe **Grad**, **Stadium** und **Kategorie** meinen dasselbe — die aktuelle Klassifikation spricht von „Kategorie“.",
        ],
        table: {
          caption: "Dekubitus-Kategorien I–IV nach NPUAP/EPUAP (2019)",
          headers: ["Kategorie", "Haut", "Merkmal"],
          rows: [
            ["I", "intakt", "Nicht-wegdrückbare Rötung (Fingertest bleibt rot)"],
            ["II", "Teilverlust", "Blase oder flache offene Wunde (Dermis betroffen)"],
            ["III", "Vollverlust", "Wunde bis ins Unterhautfettgewebe, Fett sichtbar"],
            ["IV", "Vollverlust", "Muskel, Knochen oder Sehne liegen frei"],
          ],
        },
      },
      {
        heading: "Kategorie I: Nicht-wegdrückbare Rötung",
        body: [
          "Die Haut ist **intakt**, zeigt aber eine umschriebene Rötung, die sich auf Druck **nicht** weiß färbt. Der **Fingertest** ist der Schlüssel: Drückt man auf die Rötung und sie bleibt rot (wird nicht weiß), spricht das für einen Dekubitus Kategorie I.",
          "Bei dunkler Hauttönung ist die Rötung schwer zu erkennen — dann auf **Verhärtung, Wärme, Schwellung oder Farbänderung** im Vergleich zur Umgebung achten.",
        ],
      },
      {
        heading: "Kategorie II: Teilverlust der Haut",
        body: [
          "Es zeigt sich ein **Teilverlust der Haut**: eine flache, offene Wunde (Erosion) mit rosa-rotem Wundgrund oder eine intakte bzw. geöffnete, mit Wundflüssigkeit gefüllte **Blase**. Betroffen ist die Dermis; das Unterhautfettgewebe ist noch nicht sichtbar.",
        ],
      },
      {
        heading: "Kategorie III: Verlust bis ins Unterhautfettgewebe",
        body: [
          "Es liegt ein **vollständiger Hautverlust** vor. **Fettgewebe** kann im Wundgrund sichtbar werden. Faszien, Muskeln, Sehnen und Knochen sind jedoch **nicht** freigelegt. Die Tiefe variiert je nach Körperregion (z. B. am Ohr flacher, am Gesäß tiefer).",
        ],
      },
      {
        heading: "Kategorie IV: Freiliegender Muskel, Knochen oder Sehne",
        body: [
          "Der schwerste Grad: **vollständiger Haut- und Gewebeverlust** mit **freiliegendem Muskel, Knochen oder Sehne**. Es besteht ein hohes Risiko für tiefe Infektionen (z. B. Osteomyelitis).",
        ],
      },
      {
        heading: "Die zwei Sonderformen",
        bullets: [
          "**Nicht einstufbar:** Voller Haut-/Gewebeverlust, aber die Tiefe ist nicht beurteilbar, weil der Wundgrund von Belag oder Schorf bedeckt ist. Erst nach Entfernung lässt sich die Kategorie (III oder IV) bestimmen.",
          "**Deep Tissue Injury (tiefe Gewebeschädigung):** Lokal begrenzte, violette oder kastanienbraune Verfärbung intakter Haut oder eine blutgefüllte Blase — Zeichen einer Schädigung des tiefer liegenden Gewebes. Kann sich rasch verschlechtern.",
        ],
      },
      {
        heading: "Wichtig: Die Einstufung geht nie zurück",
        body: [
          "Eine einmal vergebene Kategorie wird **nicht zurückgestuft**. Ein abheilender Dekubitus Kategorie IV wird nicht zu „Kategorie II“, sondern als **„in Abheilung befindlicher Dekubitus Kategorie IV“** dokumentiert. Grund: Das ursprünglich zerstörte Gewebe (z. B. Muskel) wird durch funktionsärmeres Narbengewebe ersetzt, nicht originalgetreu wiederhergestellt.",
        ],
      },
      {
        heading: "Wo entsteht ein Dekubitus am häufigsten?",
        body: [
          "An **Prädilektionsstellen** — Körperregionen mit wenig Weichteilpolster über einem Knochenvorsprung. In Rückenlage sind das vor allem das **Steißbein/Sakrum (~46 %)** und die **Ferse (~19 %)**, dazu Hinterhaupt und Schulterblätter. In Seitenlage der **Trochanter** (Hüftknochen) und der äußere Knöchel.",
          "Zunehmend wichtig sind **geräte-assoziierte Druckschäden** (z. B. durch Sauerstoffbrille, Katheter, Sonden) — sie machen bis zu einem Drittel der Krankenhaus-Dekubiti aus.",
        ],
      },
    ],
    howTo: {
      name: "Dekubitus-Stadium bestimmen",
      steps: [
        {
          name: "Haut inspizieren",
          text: "Die gefährdete Stelle bei guter Beleuchtung anschauen. Ist die Haut intakt oder bereits offen?",
        },
        {
          name: "Fingertest durchführen",
          text: "Bei geröteter, intakter Haut mit dem Finger auf die Rötung drücken. Bleibt sie rot (nicht-wegdrückbar) = Kategorie I.",
        },
        {
          name: "Tiefe beurteilen",
          text: "Bei offener Wunde die Tiefe einordnen: Blase/flache Wunde = II, Fettgewebe sichtbar = III, Muskel/Knochen/Sehne sichtbar = IV.",
        },
        {
          name: "Sonderformen prüfen",
          text: "Wundgrund von Belag bedeckt = „nicht einstufbar“. Violette intakte Haut = „Deep Tissue Injury“.",
        },
        {
          name: "Dokumentieren",
          text: "Kategorie, Lokalisation, Größe und Wundgrund schriftlich festhalten — die Einstufung wird nie zurückgestuft.",
        },
      ],
    },
    faq: [
      {
        frage: "Wie viele Dekubitus-Stadien gibt es?",
        antwort:
          "Es gibt 4 Kategorien (Grad I–IV) nach NPUAP/EPUAP (2019) plus 2 Sonderformen: „nicht einstufbar“ und „Deep Tissue Injury“.",
      },
      {
        frage: "Was ist der Unterschied zwischen Grad, Stadium und Kategorie?",
        antwort:
          "Die drei Begriffe meinen dasselbe. Die aktuelle internationale Klassifikation (NPUAP/EPUAP 2019) verwendet den Begriff „Kategorie“. Ältere Quellen sprechen von „Grad“ oder „Stadium“.",
      },
      {
        frage: "Was ist der Fingertest beim Dekubitus?",
        antwort:
          "Man drückt mit dem Finger auf eine gerötete, intakte Hautstelle. Färbt sie sich weiß und dann wieder rot, ist die Durchblutung intakt. Bleibt sie rot (nicht-wegdrückbar), liegt ein Dekubitus Kategorie I vor.",
      },
      {
        frage: "Kann ein Dekubitus Grad 4 wieder zu Grad 1 werden?",
        antwort:
          "Nein. Die Einstufung wird nicht zurückgestuft. Ein abheilender Grad-IV-Dekubitus heißt „in Abheilung befindlicher Dekubitus Kategorie IV“, weil zerstörtes Gewebe durch Narbengewebe ersetzt wird.",
      },
      {
        frage: "Was ist eine Deep Tissue Injury?",
        antwort:
          "Eine tiefe Gewebeschädigung: eine violette oder kastanienbraune Verfärbung intakter Haut bzw. eine blutgefüllte Blase. Sie zeigt eine Schädigung des tieferen Gewebes an und kann sich rasch verschlechtern.",
      },
      {
        frage: "Wo entstehen Dekubitus am häufigsten?",
        antwort:
          "An Prädilektionsstellen über Knochenvorsprüngen — in Rückenlage vor allem am Steißbein (~46 %) und an der Ferse (~19 %).",
      },
    ],
    quellen: [
      "NPUAP/EPUAP/PPPIA: Prevention and Treatment of Pressure Ulcers/Injuries — Clinical Practice Guideline (2019)",
      "DNQP: Expertenstandard Dekubitusprophylaxe in der Pflege (2017, 2. Aktualisierung 2024)",
      "RKI: Daten zu geräte-assoziierten Druckschäden (2023)",
    ],
    related: [],
  },
]

export function getWissenPage(slug: string): WissenPage | undefined {
  return wissenPages.find((p) => p.slug === slug)
}

export function allWissenSlugs(): string[] {
  return wissenPages.map((p) => p.slug)
}
