// CE-02 Situation Kovac — Inline-Wissens-Bausteine
// Themen: pneumonie-prophylaxe, schlaf, harnausscheidung (Wiederbegegnung), pflegeprozess (Wiederbegegnung)
// Bausteine: 10 · Verteilt ueber 6 Phasen · Lehr-Patientin: Frau Kovac
// Generiert: 2026-04-26

import type { ContentStep } from "../../../_types";

// ============================================================
// PHASE 1 — INFORMIEREN (2 Bausteine)
// ============================================================

/**
 * 1A — Pneumonie-Prophylaxe: COPD + Pneumonierisiko
 * Position: VOR Step 1.2 (Prioritaeten vor der Tuer) — Schueler muss wissen,
 * warum Erschoepfung nach 3 Min Atemuebungen ein Pneumonie-Risikosignal ist.
 */
export const CE02_KOVAC_INLINE_01A_PNEUMONIE_COPD: ContentStep = {
  stepId: "ce02-kovac-info-01b-pneumonie-copd-risiko",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie nosokomiale Pneumonie 2017",
    "GOLD-Report COPD 2023",
    "KRINKO 2013",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-info-pneumonierisiko",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  themenSekundaer: ["schlaf"],
  transition:
    "Du weisst jetzt, warum Frau Kovacs Lunge besonders gefaehrdet ist. Aber welche Informationen aus der Uebergabe sind am dringendsten?",
  contentC1: {
    title: "Warum ist Frau Kovacs Lunge so gefaehrdet?",
    body: "",
    glossarBegriffe: ["Pneumonie", "nosokomial", "Atelektase", "Sekretverhaltung"],
  },
  contentB1: {
    title: "Warum ist die Lunge von Frau Kovac in Gefahr?",
    body: "",
    glossarBegriffe: ["Pneumonie", "Atelektase"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-definition",
    storyAufhaenger:
      "Petras Uebergabezettel sagt: \"Frau Kovac erschoepft nach 3 Min Atemuebungen.\" Das klingt harmlos. Aber bei COPD III bedeutet das: Die Lunge schafft es kaum noch, sich selbst sauber zu halten. Und genau das ist der Moment, in dem eine Pneumonie entstehen kann.",
    storyAufhaengerB1:
      "Im Uebergabezettel steht: Frau Kovac war nach 3 Minuten Atem-Uebungen erschoepft. Das klingt wenig. Aber bei ihrer schweren Lungenerkrankung (COPD) ist das ein Warnsignal. Die Lunge kann sich nicht mehr gut selbst reinigen.",
    kerntext:
      "**Pneumonie bei COPD — warum Frau Kovac besonders gefaehrdet ist:**\n\n• Bei COPD III ist die **mukoziliaere Clearance** (Selbstreinigung der Atemwege durch Flimmerhaerchen) stark reduziert. Sekret bleibt in den Bronchien liegen.\n\n• Frau Kovac hustet nachts viel, aber der Schleim \"will nicht raus\" — ein Zeichen fuer **Sekretverhaltung**. Zaehes Sekret + flache Atmung = idealer Naehrboden fuer Keime.\n\n• Ihre **geringe Trinkmenge** (800 ml) verschaerft das Problem: Weniger Fluessigkeit = zaeheres Sekret = schwieriger abzuhusten.\n\n• Im ambulanten Setting fehlt die 24h-Beobachtung — eine beginnende Pneumonie (Fieber, veraenderter Auswurf, Tachypnoe) kann zwischen den Besuchen unbemerkt bleiben.\n\nQuelle: (AWMF S3 2017; GOLD-Report COPD 2023)",
    kerntextB1:
      "**Warum ist Frau Kovacs Lunge in Gefahr?**\n\n• Bei schwerer COPD arbeiten die **Flimmerhaerchen** in der Lunge nicht mehr richtig. Der Schleim bleibt liegen.\n\n• Frau Kovac hustet nachts — aber der Schleim kommt nicht raus. Das ist gefaehrlich: Bakterien wachsen im Schleim.\n\n• Sie trinkt zu wenig (800 ml). Dadurch wird der Schleim noch zaeherer.\n\n• Ambulant heisst: Zwischen den Besuchen sieht niemand ob sich etwas verschlechtert. Du musst bei jedem Besuch genau hinschauen.\n\nQuelle: (AWMF S3 2017; GOLD 2023)",
    faustregel:
      "**COPD + wenig Trinken + zaehes Sekret = Pneumonie-Alarm.** Jeder Morgenbesuch beginnt mit Sekret-Check.",
    faustregelB1:
      "COPD + wenig trinken + zaehes Sekret = Lungenentzuendungs-Gefahr. Jeden Morgen Schleim kontrollieren.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Pneumonie Tag 3, stationaer",
        kurzbeschreibung:
          "Bei Frau M. ist die Pneumonie bereits da — Tag 3 der Behandlung. Bei Frau Kovac willst du verhindern, dass es so weit kommt.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlaganfall + Dysphagie",
        kurzbeschreibung:
          "Bei ihm kommt Aspirationsgefahr dazu — Speichel und Nahrung koennen in die Lunge gelangen. Anderer Mechanismus, gleiches Risiko.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP Immobilitaet",
        kurzbeschreibung:
          "Nach der Hueft-OP liegt sie viel — flache Atmung, reduzierter Hustenstoss. Bei ihr ist es die Immobilitaet, bei Kovac die COPD selbst.",
      },
    ],
    sonstBox:
      "Weitere Risikofaktoren fuer Pneumonie, die bei Frau Kovac nicht im Vordergrund stehen: Intubation/Beatmung (VAP), Bewusstseinseinschraenkung, Immunsuppression, Magensonde. Diese werden bei Herr Petrov (Schlaganfall) und in CE-06 (Akutsituationen) vertieft.",
    sonstBoxB1:
      "Andere Pneumonie-Risiken: Beatmung, Bewusstlosigkeit, schwaches Immunsystem, Magensonde. Das lernst du bei anderen Patienten — z.B. Herr Petrov (Schlaganfall).",
    karteikarte: {
      vorderseite:
        "Frau Kovac (84, COPD III) trinkt 800 ml/Tag und hustet nachts zaehes Sekret. Warum ist sie pneumoniegefaehrdet — und was kannst du tun?",
      rueckseite:
        "COPD III = reduzierte mukoziliaere Clearance + Sekretverhaltung. Geringe Trinkmenge macht Sekret zaeher. Ambulant fehlt 24h-Beobachtung. Massnahmen: Trinkmenge steigern (Sekretverduennung), Atemuebungen mit Lippenbremse (Sekretmobilisation), Sekretfarbe bei jedem Besuch pruefen (gelb-gruen = Infekt → Arzt). Spektrum: Frau M. (Pneumonie Tag 3), Petrov (Aspiration), Yilmaz (Immobilitaet). Faustregel: COPD + wenig Trinken + zaehes Sekret = Pneumonie-Alarm.",
    },
  },
};

/**
 * 1B — Pflegeprozess (Wiederbegegnung): SBAR im ambulanten Setting
 * Position: VOR Step 1.2 — Schueler hat SBAR bei Frau M. gelernt,
 * hier: ambulante Uebergabe ist KEIN vollstaendiges SBAR.
 */
export const CE02_KOVAC_INLINE_01B_PFLEGEPROZESS_SBAR: ContentStep = {
  stepId: "ce02-kovac-info-01c-sbar-ambulant",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "DNQP Kontinenzfoerderung 2014",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-info-sbar-ambulant",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Petras Zettel ist typisch ambulant — knapp, aber nicht vollstaendig. Jetzt sortierst du, was am dringendsten ist.",
  contentC1: {
    title: "SBAR im ambulanten Setting — was fehlt?",
    body: "",
    glossarBegriffe: ["SBAR", "Pflegeprozess", "Informationssammlung"],
  },
  contentB1: {
    title: "SBAR — was fehlt auf Petras Zettel?",
    body: "",
    glossarBegriffe: ["SBAR", "Uebergabe"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-informationssammlung",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-informationssammlung",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du SBAR als vollstaendige stationaere Uebergabe kennengelernt (Situation-Background-Assessment-Recommendation). In der ambulanten Pflege sieht Realitaet anders aus: Petras Zettel liefert S und B — aber Assessment und Recommendation fehlen. Das ist kein Versagen von Petra, sondern ambulante Praxis. Du musst A und R heute Morgen selbst ergaenzen.",
      vertiefungB1:
        "Bei Frau M. hast du SBAR gelernt — eine Struktur fuer Uebergaben. Petras Zettel hat nur S und B (was war + Hintergrund). Assessment (was denke ich?) und Recommendation (was schlage ich vor?) fehlen. Das ist normal ambulant — du ergaenzt das heute selbst.",
    },
    storyAufhaenger:
      "Petras Zettel liegt vor dir: \"Fr. Kovac unruhig. Hat kaum gegessen — nur Brot. Trinkmenge 820 ml. Stuehlgang seit 4 Tagen keiner. Kompressionsstruempfe abgelehnt.\" Klingt vollstaendig? Bei Frau M. auf Station haettest du jetzt auch Petras Einschaetzung (A) und ihren Vorschlag fuer heute (R). Hier nicht.",
    storyAufhaengerB1:
      "Petras Zettel sagt was gestern passiert ist. Aber: Was hat Petra dazu gedacht? Und was schlaegt sie fuer heute vor? Das steht nicht auf dem Zettel. Bei Frau M. im Krankenhaus war die Uebergabe vollstaendiger.",
    kerntext:
      "**SBAR ambulant vs. stationaer:**\n\n• **S (Situation)** ✔ Petra beschreibt: unruhig, wenig gegessen, Atemuebungen kurz.\n\n• **B (Background)** ✔ Trinkmenge, Obstipation 4 Tage, Struempfe verweigert.\n\n• **A (Assessment)** ✘ Fehlt. Was hat Petra eingeschaetzt? War die Unruhe auffaellig? Hat sie einen Infektverdacht?\n\n• **R (Recommendation)** ✘ Fehlt. Was soll heute Morgen Prioritaet sein?\n\n**Warum ist das normal?** Ambulante Uebergaben sind kuerzer — Petra hatte nach dem Abendbesuch noch 4 weitere Patienten. Die vollstaendige SBAR-Struktur ist das Ideal; in der ambulanten Praxis ist S+B oft alles, was du bekommst. Deine Aufgabe: A und R selbst ergaenzen.\n\nQuelle: (Fiechter/Meier 1981; DNQP 2014)",
    kerntextB1:
      "**Was hat Petras Zettel — und was fehlt?**\n\n• **S (Situation)** ✔ Was war? Frau Kovac unruhig, wenig gegessen.\n\n• **B (Background)** ✔ Trinkmenge, Verstopfung, Struempfe abgelehnt.\n\n• **A (Assessment)** ✘ Was denkt Petra darueber? Das fehlt.\n\n• **R (Recommendation)** ✘ Was schlaegt Petra fuer heute vor? Das fehlt auch.\n\n**Warum ist das so?** Ambulant hat Petra wenig Zeit. Nach Frau Kovac kamen noch 4 andere Patienten. Deshalb ist der Zettel kurz. Du musst das A und R heute selbst machen.",
    faustregel:
      "**Ambulante Uebergabe = oft nur S+B.** Assessment und Recommendation ergaenzt du beim Besuch selbst.",
    faustregelB1:
      "Ambulant bekommst du oft nur Situation + Background. Assessment und Recommendation machst du selbst.",
    karteikarte: {
      vorderseite:
        "Petras Uebergabezettel bei Frau Kovac enthaelt S und B, aber kein A und kein R. Warum — und was tust du?",
      rueckseite:
        "Ambulante Uebergaben sind kuerzer als stationaere — Zeitdruck, viele Patienten. S+B (Fakten) sind dokumentiert, A (Einschaetzung) und R (Empfehlung) fehlen oft. Pflegerische Aufgabe: A und R beim naechsten Besuch selbst ergaenzen. Faustregel: Ambulante Uebergabe = oft nur S+B. Bei Frau M. (stationaer) war SBAR vollstaendig — dort ist das Team groesser und die Uebergabe strukturierter.",
    },
  },
};

// ============================================================
// PHASE 2 — BEOBACHTEN (3 Bausteine)
// ============================================================

/**
 * 2A — Pneumonie-Prophylaxe: Atembeobachtung systematisch
 * Position: VOR Step 2.1 (Brilliant-Frage Atembeobachtung) — gibt dem Schueler
 * das Wissen, das er fuer die Freitext-Antwort braucht.
 */
export const CE02_KOVAC_INLINE_02A_PNEUMONIE_ATEMBEOB: ContentStep = {
  stepId: "ce02-kovac-beob-00b-pneumonie-atembeobachtung",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie nosokomiale Pneumonie 2017",
    "GOLD-Report COPD 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-pneumonie-prophylaxe",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  themenSekundaer: ["schlaf"],
  transition:
    "Du weisst jetzt, worauf du bei der Atmung achten musst. Beschreibe in eigenen Worten, was du siehst.",
  contentC1: {
    title: "Pneumonie-Prophylaxe bei der Atembeobachtung",
    body: "",
    glossarBegriffe: ["Pneumonie-Prophylaxe", "Sputum", "Atemfrequenz", "Lippenbremse"],
  },
  contentB1: {
    title: "Worauf achtest du bei der Atmung?",
    body: "",
    glossarBegriffe: ["Pneumonie-Prophylaxe", "Sputum"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-risikofaktoren",
    storyAufhaenger:
      "Frau Kovac sitzt im Sessel und atmet. In Phase 1 hast du gelesen: \"Heute Nacht hab ich gehusten. Viel. Der Schleim will nicht raus.\" Bevor du die Atmung beobachtest — was genau suchst du, das auf eine beginnende Pneumonie hinweisen koennte?",
    storyAufhaengerB1:
      "Frau Kovac sitzt im Sessel. Sie hat nachts viel gehustet. Der Schleim kam nicht raus. Bevor du ihre Atmung beobachtest: Was genau suchst du? Welche Zeichen koennten auf eine Lungenentzuendung hinweisen?",
    kerntext:
      "**Pneumonie-Fruehzeichen bei der Atembeobachtung:**\n\n• **Sputum-Farbe** ist der wichtigste ambulante Frueh-Indikator. Weiss-klar = normal bei COPD. **Gelb-gruen = Infektverdacht** → Arzt informieren. Rostig-schaumig = Lungenbeteiligung/Oedem.\n\n• **Atemfrequenz** >20/Min (Tachypnoe) — nicht nur bei Belastung, auch in Ruhe pruefen. Bei Frau Kovac mit COPD III ist die Baseline schon erhoehter als bei Gesunden.\n\n• **Rasselgeraeusche** bei der Ausatmung — du hoerst sie ohne Stethoskop wenn die Sekretansammlung stark genug ist.\n\n• **Fieber fehlt oft bei aelteren Menschen** — stattdessen: Verwirrtheit, Appetitlosigkeit, erhoehte Sturzneigung. Bei Frau Kovac: War die \"Unruhe\" von gestern Abend ein Fruehzeichen?\n\n• **Ambulanter Zusatz:** Zwischen den Besuchen kann sich eine Pneumonie entwickeln, ohne dass es jemand sieht. Deshalb: Angehoerige (Darko bei Telefonaten) und Patientin selbst instruieren — auf Fieber, veraenderten Schleim, Atemnot achten.\n\nQuelle: (AWMF S3 2017; GOLD 2023; KRINKO 2013)",
    kerntextB1:
      "**Worauf achtest du bei der Atmung — um eine Lungenentzuendung frueh zu erkennen?**\n\n• **Schleim-Farbe** = wichtigstes Zeichen. Weiss = normal. **Gelb-gruen = moegliche Infektion** → Arzt informieren.\n\n• **Wie schnell atmet sie?** Mehr als 20 Mal pro Minute in Ruhe = Warnsignal.\n\n• **Hoerst du Rasseln?** Wenn der Schleim in der Lunge liegt, hoerst du manchmal ein Rasseln — auch ohne Stethoskop.\n\n• **Kein Fieber heisst nicht gesund.** Aeltere Menschen haben oft kein Fieber bei Pneumonie. Stattdessen: Verwirrtheit, kein Appetit, Stuerze.\n\n• **Ambulant:** Zwischen den Besuchen kann sich viel aendern. Sag Frau Kovac: Wenn der Schleim gelb wird oder du Fieber hast — Pflegedienst anrufen.",
    faustregel:
      "**Schleim-Farbe jeden Morgen pruefen.** Gelb-gruen bei COPD = Arzt informieren, nicht abwarten.",
    faustregelB1:
      "Jeden Morgen Schleim-Farbe pruefen. Gelb-gruen = Arzt informieren.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Pneumonie Tag 3, Fieber + CRP erhoehrt",
        kurzbeschreibung:
          "Bei Frau M. ist die Pneumonie schon diagnostiziert — Fieber, erhoehter CRP, rasselnde Atemgeraeusche. Bei Kovac suchst du die Fruehzeichen, bevor es so weit kommt.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, Pneumonie-Fruehzeichen oft nur Verwirrtheit",
        kurzbeschreibung:
          "Bei Demenz zeigt sich Pneumonie haeufig nur als akute Verwirrtheit — kein Fieber, kein Husten. Aeltere wie Frau Kovac koennen aehnlich atypisch reagieren.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Aspirationspneumonie durch Dysphagie",
        kurzbeschreibung:
          "Sein Pneumonierisiko kommt vom Schlucken — Speichel und Nahrung gelangen in die Lunge. Anderer Mechanismus als bei Kovac (Sekretverhaltung).",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac (COPD III) hustet nachts zaehes Sekret. Welche Sputum-Farbe ist ein Alarmsignal — und was tust du dann?",
      rueckseite:
        "Gelb-gruenes Sputum = bakterieller Infektverdacht → Arzt informieren, nicht abwarten. Weiss-klar = normal bei COPD. Rostig-schaumig = Lungenoedem-Verdacht. Zusaetzlich pruefen: Atemfrequenz (>20/Min Ruhe), Rasselgeraeusche, Verwirrtheit (Fieber fehlt bei Aelteren oft). Spektrum: Frau M. (Pneumonie manifest), Bauer (Demenz: nur Verwirrtheit), Petrov (Aspiration). Faustregel: Schleim-Farbe jeden Morgen pruefen.",
    },
  },
};

/**
 * 2B — Schlaf: Schlafphasen + zirkadianer Rhythmus
 * Position: VOR Step 2.4 (Schlafanamnese Dialog) — Schueler braucht Grundwissen
 * ueber Schlafarchitektur, um Frau Kovacs Schlafmuster einordnen zu koennen.
 */
export const CE02_KOVAC_INLINE_02B_SCHLAF_PHYSIOLOGIE: ContentStep = {
  stepId: "ce02-kovac-beob-03b-schlaf-physiologie",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AASM Scoring Manual 2020",
    "Borbely 1982 — Two Process Model",
    "DGSM S3-Leitlinie Insomnie 2017/2020",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-schlafphysiologie",
  tag: "anatomie",
  themaPrimaer: "schlaf",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Du kennst jetzt die Grundlagen des Schlafs. Gleich fragst du Frau Kovac nach ihrer Nacht — mit diesem Wissen verstehst du ihre Antworten besser.",
  contentC1: {
    title: "Wie Schlaf funktioniert — und warum Frau Kovac nicht durchschlaeft",
    body: "",
    glossarBegriffe: ["NREM", "REM", "Schlafzyklus", "Melatonin", "Zirkadianer Rhythmus"],
  },
  contentB1: {
    title: "Wie funktioniert Schlaf?",
    body: "",
    glossarBegriffe: ["Schlafzyklus", "Melatonin"],
  },
  inlineWissen: {
    bausteinRef: "schlaf-zyklen-nrem-rem",
    storyAufhaenger:
      "Frau Kovac sagt: \"Ich schlafe ein, aber um zwei bin ich wieder wach.\" Das klingt nach Zufall — ist es aber nicht. Der Koerper hat eine innere Uhr, und Frau Kovacs Schlaf folgt einem Muster, das du verstehen musst, bevor du mit ihr ueber Schlafhygiene sprichst.",
    storyAufhaengerB1:
      "Frau Kovac sagt: \"Um zwei bin ich wieder wach.\" Das ist kein Zufall. Der Koerper hat eine innere Uhr. Bevor du sie nach dem Schlaf fragst, solltest du verstehen wie Schlaf funktioniert.",
    kerntext:
      "**Schlaf in 90-Minuten-Zyklen:**\n\nDer Mensch durchlaeuft pro Nacht **4-6 Schlafzyklen** a 90 Minuten. Jeder Zyklus wechselt zwischen **NREM** (Koerper erholt sich) und **REM** (Gehirn verarbeitet).\n\n• **Erste Nachthaelfte:** Tiefschlaf (N3) dominiert — koerperliche Regeneration.\n• **Zweite Nachthaelfte:** REM-Phasen werden laenger — Gedaechtnis, Traum.\n\n**Bei Frau Kovac (84, COPD III):**\n• Sie schlaeft gegen 23 Uhr ein → erster Tiefschlaf-Block bis ca. 0:30 Uhr.\n• Erwachen um 2 Uhr = **Ende des 2. Zyklus** — typischer Aufwachzeitpunkt.\n• COPD verstärkt das Problem: naechtliche Hypoxie und Hustenreiz wecken sie genau dann, wenn der Schlaf ohnehin leichter wird.\n• **Melatonin** (Schlafhormon) wird bei Dunkelheit ausgeschuettet, durch **Blaulicht vom Fernseher gehemmt** — Frau Kovacs TV-Ritual verzoegert das Einschlafen.\n\nQuelle: (AASM 2020; Borbely 1982; DGSM 2017/2020)",
    kerntextB1:
      "**Schlaf laeuft in Zyklen:**\n\nPro Nacht hat der Mensch **4-6 Schlafzyklen**. Jeder dauert etwa **90 Minuten**.\n\n• **Erste Nachthaelfte:** Tiefer Schlaf — der Koerper erholt sich.\n• **Zweite Nachthaelfte:** Mehr Traumschlaf (REM) — das Gehirn verarbeitet.\n\n**Bei Frau Kovac:**\n• Sie schlaeft um 23 Uhr ein.\n• Um 2 Uhr wird sie wach — das ist nach dem 2. Zyklus. Das ist ein typischer Aufwachmoment.\n• Ihre Lungenerkrankung (COPD) macht es schlimmer: Nachts wird die Atmung schlechter, der Husten weckt sie.\n• **Melatonin** (Schlaf-Hormon) braucht Dunkelheit. Der **Fernseher** stoert — blaues Licht hemmt Melatonin.",
    faustregel:
      "**Erwachen nach 2-3 Zyklen (3-4,5 Stunden) ist physiologisch.** Bei COPD + Blaulicht wird die Rueckkehr in den Schlaf zum Problem.",
    faustregelB1:
      "Nach 3 bis 4 Stunden aufzuwachen ist normal. Bei COPD und Fernseher wird das Wiedereinschlafen schwer.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Sundowning",
        kurzbeschreibung:
          "Bei Demenz ist der zirkadiane Rhythmus massiv gestoert — Herr Bauer ist nachts desorientiert und unruhig. Anderer Mechanismus als bei Kovac, aber aehnliches Ergebnis: kein durchgehender Schlaf.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas + Schlafapnoe-Risiko",
        kurzbeschreibung:
          "Bei BMI 38 besteht Risiko fuer obstruktive Schlafapnoe — naechtliche Atemaussetzer wecken sie. Schlaf-Stoerung durch einen anderen Atemmechanismus.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlaganfall + veraenderter Schlaf-Wach-Rhythmus",
        kurzbeschreibung:
          "Nach Schlaganfall ist der Schlaf-Wach-Rhythmus oft gestoert — laengere Schlafepisoden tagsueber, naechtliche Wachphasen. Neurologische Ursache.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac schlaeft um 23 Uhr ein und wacht um 2 Uhr auf. Warum — und welche Rolle spielt der Fernseher?",
      rueckseite:
        "Erwachen um 2 Uhr = Ende des 2. Schlafzyklus (a 90 Min). Physiologisch normal. Bei COPD: naechtliche Hypoxie + Hustenreiz wecken zusaetzlich. Fernseher: Blaulicht hemmt Melatonin-Ausschuettung (Schlafhormon) → verzoegertes Einschlafen + gestoerter zirkadianer Rhythmus. Spektrum: Bauer (Demenz/Sundowning), Schmidt (Schlafapnoe-Risiko), Petrov (neurologisch). Faustregel: Erwachen nach 2-3 Zyklen ist physiologisch — aber COPD + Blaulicht verhindern Wiedereinschlafen.",
    },
  },
};

/**
 * 2C — Harnausscheidung (Wiederbegegnung): Trinkmenge + Harnausscheidung
 * Position: VOR Step 2.5 (Trinkprotokoll-Berechnung) — verknuepft Trinkmenge
 * mit der Harnausscheidung-Thematik (Lehr-Patient: Herr Petrov).
 */
export const CE02_KOVAC_INLINE_02C_HARNAUSSCHEIDUNG: ContentStep = {
  stepId: "ce02-kovac-beob-04b-harnausscheidung-trink",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Kontinenzfoerderung 2014",
    "AWMF S2k Harninkontinenz 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-harnausscheidung",
  tag: "pflege",
  themaPrimaer: "harnausscheidung",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Du verstehst jetzt den Zusammenhang zwischen Trinken und Ausscheidung. Rechne jetzt das Trinkprotokoll aus.",
  contentC1: {
    title: "Warum Frau Kovac zu wenig trinkt — und was das mit der Harnausscheidung zu tun hat",
    body: "",
    glossarBegriffe: ["Harnausscheidung", "Inkontinenzangst", "Exsikkose", "Fluidbalance"],
  },
  contentB1: {
    title: "Warum trinkt Frau Kovac so wenig?",
    body: "",
    glossarBegriffe: ["Harnausscheidung", "Exsikkose"],
  },
  inlineWissen: {
    bausteinRef: "harnausscheidung-urin-normalwerte",
    wiederbegegnung: {
      basisBausteinId: "harnausscheidung-urin-normalwerte",
      basisPatient: "Herr Petrov",
      vertiefung:
        "Urin-Normalwerte kennst du von Herr Petrov (Katheter-Management). Bei Frau Kovac ist die Besonderheit: Sie trinkt absichtlich wenig, weil sie Angst hat, staendig zur Toilette zu muessen. Das ist ein haeufiges ambulantes Problem — Inkontinenzangst fuehrt zu Dehydration, und Dehydration verschlimmert die COPD (zaeheres Sekret).",
      vertiefungB1:
        "Urin-Normalwerte kennst du von Herr Petrov. Bei Frau Kovac ist es anders: Sie trinkt extra wenig, weil sie nicht staendig zur Toilette will. Das Problem: Wenig trinken macht den Schleim in der Lunge zaeh. So haengt alles zusammen.",
    },
    storyAufhaenger:
      "Du nimmst das Trinkprotokoll vom Kuechentisch. 800 ml gestern — deutlich unter dem aerztlichen Zielwert von 1.200 ml. Frau Kovac wird spaeter sagen: \"Ich trink nicht gern viel, weil ich dann dauernd muss.\" Hinter dieser Aussage steckt ein Kreislauf, den du als Pflegekraft durchbrechen kannst.",
    storyAufhaengerB1:
      "800 ml hat Frau Kovac gestern getrunken. Zu wenig. Sie wird spaeter sagen: \"Wenn ich viel trinke, muss ich dauernd auf die Toilette.\" Das ist der Grund warum sie so wenig trinkt.",
    kerntext:
      "**Der Trinkvermeidungs-Kreislauf:**\n\n• Frau Kovac hat **Angst vor Harndrang** — besonders nachts (Nykturie-Angst). Aufstehen im Dunkeln mit Kontrakturen und COPD = Sturzrisiko.\n\n• Deshalb trinkt sie weniger → **konzentrierterer Urin** (dunkelgelb, spez. Gewicht erhoehrt) → reizt die Blasenschleimhaut → paradoxerweise **mehr Harndrang**, nicht weniger.\n\n• Gleichzeitig: weniger Fluessigkeit → **zaeheres Sekret** in der Lunge → schwieriger abzuhusten → Pneumonierisiko steigt.\n\n• Normalwert Harnausscheidung: **1.500-2.000 ml/24h**. Bei 800 ml Trinkmenge wird Frau Kovac deutlich darunter liegen — ein Exsikkose-Indikator.\n\n**Pflegerischer Ansatz:** Nicht \"mehr trinken\" befehlen, sondern das Hindernis (Inkontinenzangst) adressieren und die Trinkmenge ueber den Tag verteilen.\n\nQuelle: (DNQP Kontinenzfoerderung 2014; AWMF S2k 2023)",
    kerntextB1:
      "**Warum trinkt Frau Kovac so wenig?**\n\n• Sie hat Angst: Wenn sie viel trinkt, muss sie oft zur Toilette. Nachts ist das gefaehrlich — Aufstehen mit steifen Knien und Atemnot = Sturzrisiko.\n\n• Deshalb trinkt sie weniger. Aber der Urin wird dadurch **dunkler und staerker**. Und das reizt die Blase — sie muss **trotzdem** oft.\n\n• Gleichzeitig: Wenig Trinken macht den **Schleim in der Lunge zaeh**. Abhusten wird schwerer. Das erhoehrt die Pneumonie-Gefahr.\n\n• Normal: Ein Erwachsener macht 1,5-2 Liter Urin pro Tag. Bei 800 ml Trinken ist das viel weniger.\n\n**Was kannst du tun?** Nicht befehlen \"Trinken Sie mehr!\" — sondern das Problem verstehen und die Trinkmenge ueber den Tag verteilen.",
    faustregel:
      "**Inkontinenzangst → Trinkvermeidung → zaehes Sekret → Pneumonierisiko.** Durchbreche den Kreislauf — mit Verteilung, nicht mit Druck.",
    faustregelB1:
      "Angst vor Toilette → wenig trinken → zaehes Sekret → Lungenentzuendungs-Gefahr. Trinken verteilen, nicht befehlen.",
    karteikarte: {
      vorderseite:
        "Frau Kovac trinkt 800 ml/Tag weil sie Angst vor haeufigem Harndrang hat. Warum verschlimmert das ihr COPD-Problem?",
      rueckseite:
        "Wenig Trinken → zaeheres Bronchialsekret → reduzierte Clearance → Pneumonierisiko. Gleichzeitig: konzentrierter Urin → Blasenreizung → paradox MEHR Harndrang. Normalwert: 1.500-2.000 ml Urinausscheidung/24h. Pflegerisch: Trinkmenge ueber Tag verteilen (3 Becher a 200 ml), nicht einmalig grosse Menge. Spektrum: Petrov (Katheter, andere Problematik), Schmidt (Adipositas, Beckenbodenbelastung). Faustregel: Inkontinenzangst → Trinkvermeidung → zaehes Sekret → Pneumonie.",
    },
  },
};

// ============================================================
// PHASE 3 — PLANEN (2 Bausteine)
// ============================================================

/**
 * 3A — Schlaf: Schlafhygiene-Regeln
 * Position: VOR Step 3.4 (Schlafberatung Sequencing) — Schueler braucht
 * Schlafhygiene-Wissen um die Reihenfolge des Gespraechs planen zu koennen.
 */
export const CE02_KOVAC_INLINE_03A_SCHLAFHYGIENE: ContentStep = {
  stepId: "ce02-kovac-plan-03b-schlafhygiene-regeln",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGSM S3-Leitlinie Insomnie 2017/2020",
    "ICSD-3 Text Revision 2023",
    "Beers-Liste AGS 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-plan-schlafhygiene",
  tag: "pflege",
  themaPrimaer: "schlaf",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du kennst jetzt die Schlafhygiene-Regeln. Aber wie baust du das Gespraech mit Frau Kovac auf? In welcher Reihenfolge?",
  contentC1: {
    title: "Schlafhygiene — 6 Regeln fuer besseren Schlaf",
    body: "",
    glossarBegriffe: ["Schlafhygiene", "Blaulicht", "Melatonin", "Insomnie"],
  },
  contentB1: {
    title: "6 Regeln fuer besseren Schlaf",
    body: "",
    glossarBegriffe: ["Schlafhygiene", "Melatonin"],
  },
  inlineWissen: {
    bausteinRef: "schlaf-schlafhygiene-regeln",
    storyAufhaenger:
      "Du planst das Schlafgespraech fuer heute Abend. Frau Kovac schaut bis Mitternacht fern, schlaeft gegen 23 Uhr ein, wacht um 2 Uhr auf. Bevor du ihr etwas empfiehlst, musst du wissen welche Schlafhygiene-Regeln evidenzbasiert sind — und welche bei einer 84-Jaehrigen mit COPD realistisch umsetzbar.",
    storyAufhaengerB1:
      "Heute Abend willst du mit Frau Kovac ueber ihren Schlaf sprechen. Bevor du ihr Tipps gibst, lerne die Regeln fuer besseren Schlaf — und was bei einer 84-jaehrigen Frau mit Lungenerkrankung realistisch ist.",
    kerntext:
      "**6 evidenzbasierte Schlafhygiene-Regeln (DGSM 2017/2020):**\n\n• **Regelmaessige Schlafzeiten** — jeden Tag zur gleichen Zeit ins Bett und aufstehen. Die innere Uhr braucht Routine.\n\n• **Blaulicht meiden** ab 1-2 Stunden vor dem Schlafen — Fernseher, Tablet, Smartphone hemmen Melatonin. Alternative: Radio, Hoerbuch, gedimmtes Licht.\n\n• **Schlafzimmer nur zum Schlafen** — kein Fernseher im Bett (bei Frau Kovac: Sessel-TV und Bett trennen).\n\n• **Kein Koffein ab 14 Uhr** — Frau Kovacs Abendkaffee (18:30) ist kontraproduktiv. Halbwertszeit von Koffein: 5-6 Stunden.\n\n• **Tagesschlaf begrenzen** — max. 20-30 Min Mittagsschlaf. Frau Kovac \"macht nach dem Mittag die Augen zu\" → pruefen wie lange.\n\n• **Keine Schlafmittel als Erstloesung** — Benzodiazepine und Z-Substanzen sind bei >65-Jaehrigen nach Beers-Liste (AGS 2023) potenziell inadaequat: Sturzrisiko, kognitive Einschraenkung, Abhaengigkeit.\n\n**Bei Frau Kovac realistisch:** Nicht alles auf einmal aendern. Ein Punkt pro Woche. Start: Blaulicht (TV → Radio).\n\nQuelle: (DGSM S3 2017/2020; Beers-Liste AGS 2023)",
    kerntextB1:
      "**6 Regeln fuer besseren Schlaf:**\n\n• **Immer zur gleichen Zeit schlafen** — die innere Uhr braucht Routine.\n\n• **Kein Fernseher 1-2 Stunden vor dem Schlafen** — das blaue Licht stoert das Schlaf-Hormon (Melatonin). Besser: Radio oder Hoerbuch.\n\n• **Bett nur zum Schlafen** — nicht zum Fernsehen.\n\n• **Kein Kaffee ab 14 Uhr** — Koffein wirkt 5-6 Stunden. Frau Kovacs Abendkaffee (18:30) stoert den Schlaf.\n\n• **Mittagsschlaf nicht laenger als 30 Minuten** — sonst ist man abends nicht muede.\n\n• **Keine Schlaftabletten** — bei Aelteren gefaehrlich (Sturzrisiko, Suchtgefahr). Nur Arzt darf entscheiden.\n\n**Bei Frau Kovac:** Nicht alles auf einmal. Start mit einem Punkt: Radio statt Fernseher.",
    faustregel:
      "**Ein Tipp pro Woche, nicht sechs auf einmal.** Start bei Frau Kovac: Blaulicht reduzieren (TV → Radio).",
    faustregelB1:
      "Ein Tipp pro Woche reicht. Fuer Frau Kovac zuerst: Radio statt Fernseher.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Tag-Nacht-Umkehr",
        kurzbeschreibung:
          "Bei Demenz ist die innere Uhr stark gestoert. Schlafhygiene hilft wenig — Lichttherapie am Morgen und strukturierter Tagesablauf sind wichtiger.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hueft-tep",
        hauptfaktor: "Post-OP Schmerz stoert den Schlaf",
        kurzbeschreibung:
          "Nach der Hueft-OP ist Schmerz der Hauptgrund fuer Schlaflosigkeit. Hier geht Schmerzmanagement vor Schlafhygiene.",
      },
    ],
    sonstBox:
      "Weitere Schlafstoerungs-Ursachen, die bei Frau Kovac nicht im Vordergrund stehen: Restless-Legs-Syndrom, obstruktive Schlafapnoe, periodische Beinbewegungen (PLMS). Bei Verdacht: Arzt informieren, ggf. Schlaflabor-Ueberweisung.",
    sonstBoxB1:
      "Andere Schlafstoerungs-Gruende: Unruhige Beine (Restless Legs), Atemaussetzer im Schlaf (Schlafapnoe). Das muss der Arzt abklaeren.",
    karteikarte: {
      vorderseite:
        "Frau Kovac schaut bis Mitternacht fern, trinkt Abendkaffee um 18:30 und schlaeft nach dem Mittagessen kurz. Welche 3 Schlafhygiene-Regeln sind fuer sie am relevantesten?",
      rueckseite:
        "1. Blaulicht meiden 1-2h vor Schlaf (TV → Radio). 2. Kein Koffein ab 14 Uhr (Abendkaffee streichen oder entkoffeiniert). 3. Tagesschlaf begrenzen auf 20-30 Min. Nicht alles auf einmal — ein Tipp pro Woche. Keine Schlafmittel bei >65 (Beers-Liste AGS 2023: Sturzrisiko + Abhaengigkeit). Spektrum: Bauer (Demenz, Tag-Nacht-Umkehr), Yilmaz (Schmerz stoert Schlaf). Faustregel: Ein Tipp pro Woche, nicht sechs auf einmal.",
    },
  },
};

/**
 * 3B — Pflegeprozess (Wiederbegegnung): SMART-Ziele im ambulanten Setting
 * Position: VOR Step 3.5 (Fillin SMART-Ziele) — Wiederbegegnung des
 * SMART-Prinzips mit ambulantem Fokus (Patienten-Akzeptanz besonders kritisch).
 */
export const CE02_KOVAC_INLINE_03B_SMART_AMBULANT: ContentStep = {
  stepId: "ce02-kovac-plan-04b-smart-ambulant",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "Doran SMART 1981",
    "DNQP Mobilitaet 2017/2024",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-plan-smart-ambulant",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["schlaf", "harnausscheidung"],
  transition:
    "Du weisst jetzt, warum das A in SMART ambulant entscheidend ist. Formuliere die Pflegeziele fuer Frau Kovac.",
  contentC1: {
    title: "SMART-Ziele ambulant — warum das A entscheidet",
    body: "",
    glossarBegriffe: ["SMART-Ziel", "Pflegeplanung", "Patientenautonomie"],
  },
  contentB1: {
    title: "SMART-Ziele: Warum muss Frau Kovac Ja sagen?",
    body: "",
    glossarBegriffe: ["SMART-Ziel", "Pflegeziel"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-schritt-3-ziele-smart",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-schritt-3-ziele-smart",
      basisPatient: "Frau M.",
      vertiefung:
        "SMART-Ziele kennst du von Frau M. (stationaer). In der ambulanten Pflege ist das A (Akzeptiert) besonders kritisch: Du bist Gast in Frau Kovacs Wohnung. Wenn sie dem Ziel nicht zustimmt, kann sie dich bitten zu gehen. Stationaer hast du das Team und den Rahmen — ambulant hast du nur dein Wort und ihr Vertrauen.",
      vertiefungB1:
        "SMART-Ziele kennst du von Frau M. im Krankenhaus. Ambulant ist das A (Akzeptiert) noch wichtiger: Frau Kovac muss dem Ziel zustimmen. Wenn sie Nein sagt, kannst du sie nicht zwingen — du bist in ihrer Wohnung.",
    },
    storyAufhaenger:
      "Du willst Pflegeziele formulieren: Trinkmenge steigern, Bewegungsuebungen, Schlafhygiene. Aber Frau Kovac hat gerade die Kompressionsstruempfe abgelehnt. Sie ist eine Frau mit eigenem Kopf. Ein Pflegeziel das sie nicht mittraegt, ist wertlos.",
    storyAufhaengerB1:
      "Du willst Ziele fuer Frau Kovac setzen: mehr Trinken, Uebungen, besser Schlafen. Aber sie hat gerade Nein zu den Struempfen gesagt. Wenn sie dem Ziel nicht zustimmt, funktioniert es nicht.",
    kerntext:
      "**SMART ambulant — warum das A entscheidet:**\n\n• **S** (Spezifisch) — \"Frau Kovac trinkt 1.200 ml\" statt \"mehr trinken\".\n• **M** (Messbar) — Trinkprotokoll zeigt es.\n• **A** (Akzeptiert) — **Hier liegt der Unterschied.** Stationaer akzeptiert der Patient oft stillschweigend. Ambulant muss Frau Kovac **aktiv Ja sagen** — sonst fuehrt sie das Ziel allein nicht aus, denn du bist nicht da.\n• **R** (Realistisch) — Von 800 ml direkt auf 1.500 ml? Unrealistisch. Besser: 1.000 ml als Nahziel.\n• **T** (Terminiert) — \"In 3 Tagen\" — nicht \"irgendwann\".\n\n**Ambulante Besonderheit:** Du siehst Frau Kovac 2x/Tag je 30-45 Min. Die restlichen 23 Stunden ist sie allein. Jedes Ziel muss **ohne dich funktionieren**. Deshalb: einfach, konkret, von ihr mitgetragen.\n\nQuelle: (Doran 1981; Fiechter/Meier 1981)",
    kerntextB1:
      "**Was ist das SMART-Prinzip?**\n\n• **S** = Genau sagen was du willst (\"1.200 ml trinken\", nicht \"mehr trinken\").\n• **M** = Messbar (das Trinkprotokoll zeigt es).\n• **A** = Frau Kovac sagt Ja. Ohne ihr Ja funktioniert es nicht.\n• **R** = Erreichbar (von 800 ml auf 1.000 ml — nicht sofort 1.500 ml).\n• **T** = Bis wann? (\"In 3 Tagen\").\n\n**Ambulant besonders wichtig:** Du bist nur kurz da. 23 Stunden ist Frau Kovac allein. Das Ziel muss so einfach sein, dass sie es allein schaffen kann.",
    faustregel:
      "**Ambulante SMART-Ziele muessen ohne dich funktionieren.** Wenn Frau Kovac nicht Ja sagt, ist es kein Ziel — es ist dein Wunsch.",
    faustregelB1:
      "Ein Pflegeziel ambulant muss so einfach sein, dass die Patientin es allein schafft. Ohne ihr Ja ist es kein Ziel.",
    karteikarte: {
      vorderseite:
        "Warum ist das A (Akzeptiert) in SMART-Zielen ambulant noch wichtiger als stationaer?",
      rueckseite:
        "Ambulant ist die Patientin 23h/Tag allein. Ziele muessen ohne Pflegekraft funktionieren. Stationaer gibt es das Team, ambulant nur das Vertrauen. Frau Kovac lehnt Struempfe ab — ein Ziel gegen ihren Willen ist wirkungslos. Faustregel: Ambulante SMART-Ziele muessen ohne dich funktionieren. Bei Frau M. (stationaer) war das A weniger kritisch — dort war das Team permanent anwesend.",
    },
  },
};

// ============================================================
// PHASE 4 — DURCHFUEHREN (2 Bausteine)
// ============================================================

/**
 * 4A — Pneumonie-Prophylaxe: Lippenbremse — Wirkprinzip
 * Position: VOR Step 4.2 (MC Lippenbremse) — Schueler braucht das Wirkprinzip
 * (PEEP-Effekt), um die MC-Frage beantworten zu koennen.
 */
export const CE02_KOVAC_INLINE_04A_LIPPENBREMSE: ContentStep = {
  stepId: "ce02-kovac-dur-01b-lippenbremse-wirkprinzip",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "GOLD-Report COPD 2023",
    "Pflege Heute 7. Aufl. Kap. Atmung",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-dur-lippenbremse-wirkprinzip",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  transition:
    "Du kennst jetzt den PEEP-Effekt der Lippenbremse. Woran erkennst du, dass Frau Kovac sie richtig macht?",
  contentC1: {
    title: "Die Lippenbremse — warum sie bei COPD so wichtig ist",
    body: "",
    glossarBegriffe: ["Lippenbremse", "PEEP-Effekt", "Atemwegskollaps", "Kontaktatmung"],
  },
  contentB1: {
    title: "Warum hilft die Lippenbremse?",
    body: "",
    glossarBegriffe: ["Lippenbremse", "PEEP-Effekt"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-lippenbremse",
    storyAufhaenger:
      "Du hast gerade die Atemuebungen mit Frau Kovac durchgefuehrt — Schritt fuer Schritt. Sie pfeift beim Ausatmen durch fast geschlossene Lippen. Aber warum genau hilft das ihrer Lunge? Das Wirkprinzip zu verstehen ist wichtig, weil du gleich beurteilen musst ob sie es richtig macht.",
    storyAufhaengerB1:
      "Frau Kovac macht die Atemuebung: Sie atmet langsam durch fast geschlossene Lippen aus. Es pfeift leise. Aber warum hilft das? Bevor du beobachtest ob sie es richtig macht, verstehe das Wirkprinzip.",
    kerntext:
      "**Warum die Lippenbremse bei COPD wirkt:**\n\n• Bei COPD III sind die kleinen Atemwege (Bronchiolen) **instabil** — sie kollabieren beim Ausatmen. Luft bleibt in der Lunge gefangen (**Air Trapping**).\n\n• Die Lippenbremse erzeugt einen erhoehten Druck beim Ausatmen — den **PEEP-Effekt** (Positive End-Expiratory Pressure). Dieser Druck haelt die Bronchiolen offen.\n\n• **Verhaeltnis Einatmung : Ausatmung = 1:2** (2 Sek ein, 4 Sek aus). Die verlaengerte Ausatmung gibt der Lunge mehr Zeit, Luft abzugeben.\n\n• **Kontaktatmung** (Haende auf unteren Brustkorb) ist ein **propriozeptiver Reiz** — Frau Kovac spuert ihre eigene Atmung und kann sie besser steuern. Die Haende druecken nicht, sie folgen.\n\n• **Pneumonie-Bezug:** Durch effektivere Ausatmung wird Sekret in den Atemwegen bewegt → leichteres Abhusten → weniger Sekretverhaltung → geringeres Pneumonierisiko.\n\nQuelle: (GOLD-Report COPD 2023; Pflege Heute 7. Aufl.)",
    kerntextB1:
      "**Warum hilft die Lippenbremse?**\n\n• Bei COPD sind die kleinen Atemwege **locker** — sie fallen beim Ausatmen zusammen. Luft bleibt in der Lunge stecken.\n\n• Die Lippenbremse baut **Druck auf** beim Ausatmen. Dieser Druck haelt die Atemwege offen. Das nennt man **PEEP-Effekt**.\n\n• **2 Sekunden einatmen, 4 Sekunden ausatmen** — doppelt so lang ausatmen wie einatmen.\n\n• Die Haende auf dem Brustkorb helfen Frau Kovac, ihre Atmung zu spueren. Du drueckst nicht — du folgst nur.\n\n• **Warum ist das gut gegen Pneumonie?** Besseres Ausatmen → Schleim bewegt sich → leichter abhusten → weniger Lungenentzuendungs-Gefahr.",
    faustregel:
      "**Lippenbremse = innerer Druck haelt Atemwege offen.** Erkennungszeichen: Ausatmung laenger als Einatmung + leises Pfeifen.",
    faustregelB1:
      "Lippenbremse haelt die Atemwege offen. Zeichen: Ausatmen laenger als Einatmen + leises Pfeifen.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Pneumonie Tag 3, Atemuebungen therapeutisch",
        kurzbeschreibung:
          "Bei Frau M. ist die Lippenbremse Teil der Pneumonie-Therapie — bei Kovac ist sie Prophylaxe. Gleiche Technik, anderer Kontext.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiplegie, Koordination eingeschraenkt",
        kurzbeschreibung:
          "Bei Hemiplegie kann die Kontaktatmung einseitig eingeschraenkt sein. Die Lippenbremse funktioniert aber trotzdem — sie ist unabhaengig von der Koerperseite.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was ist der PEEP-Effekt bei der Lippenbremse — und warum ist er bei COPD III besonders wichtig?",
      rueckseite:
        "PEEP = Positive End-Expiratory Pressure. Die fast geschlossenen Lippen erzeugen beim Ausatmen einen erhoehten Druck, der die instabilen Bronchiolen offenhaelt und Air Trapping verhindert. Verhaeltnis 1:2 (2 Sek ein, 4 Sek aus). Bei COPD III sind die Atemwege besonders instabil → PEEP-Effekt besonders wichtig. Pneumonie-Bezug: bessere Ausatmung → Sekretmobilisation → weniger Sekretverhaltung. Faustregel: Lippenbremse = innerer Druck haelt Atemwege offen.",
    },
  },
};

/**
 * 4B — Harnausscheidung (Wiederbegegnung): Obstipation + Fluessigkeit
 * Position: VOR Step 4.6 (Trinkgespraech) — vertieft den Zusammenhang
 * zwischen Obstipation, Fluessigkeitsmangel und Harnausscheidung.
 */
export const CE02_KOVAC_INLINE_04B_OBSTIPATION_TRINK: ContentStep = {
  stepId: "ce02-kovac-dur-05b-obstipation-fluessigkeit",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Kontinenzfoerderung 2014",
    "AWMF S2k Harninkontinenz 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-dur-obstipation-trinken",
  tag: "pflege",
  themaPrimaer: "harnausscheidung",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Du verstehst jetzt den Dreifach-Zusammenhang. Gleich fuehrst du das Trinkgespraech — mit diesem Wissen im Hintergrund.",
  contentC1: {
    title: "Obstipation, Trinkmenge und Harnausscheidung — der Dreifach-Zusammenhang",
    body: "",
    glossarBegriffe: ["Obstipation", "Harnausscheidung", "Darmperistaltik", "Exsikkose"],
  },
  contentB1: {
    title: "Verstopfung, Trinken und Urin — wie haengt das zusammen?",
    body: "",
    glossarBegriffe: ["Obstipation", "Exsikkose"],
  },
  inlineWissen: {
    bausteinRef: "harnausscheidung-urin-normalwerte",
    wiederbegegnung: {
      basisBausteinId: "harnausscheidung-urin-normalwerte",
      basisPatient: "Herr Petrov",
      vertiefung:
        "Die Urin-Normalwerte kennst du. Bei Frau Kovac zeigt sich ein Dreifach-Zusammenhang: Zu wenig Trinken → Obstipation (4 Tage kein Stuhlgang) + zaehes Bronchialsekret + konzentrierter Urin. Eine Massnahme (Trinkmenge steigern) verbessert drei Probleme gleichzeitig.",
      vertiefungB1:
        "Urin-Werte kennst du. Bei Frau Kovac haengt alles zusammen: Wenig trinken → Verstopfung + zaehes Sekret + dunkler Urin. Mehr trinken hilft bei allen drei Problemen.",
    },
    storyAufhaenger:
      "Frau Kovac hat seit 4 Tagen keinen Stuhlgang, trinkt 800 ml und hustet zaehes Sekret. Das klingt nach drei verschiedenen Problemen. In Wirklichkeit ist es eines: Fluessigkeitsmangel — mit drei Auswirkungen.",
    storyAufhaengerB1:
      "4 Tage kein Stuhlgang. 800 ml getrunken. Zaehes Sekret in der Lunge. Drei Probleme? Nein — ein Problem mit drei Auswirkungen: zu wenig Wasser im Koerper.",
    kerntext:
      "**Der Dreifach-Zusammenhang bei Frau Kovac:**\n\n• **Darm:** Wenig Fluessigkeit → harter Stuhl → verlangsamte Peristaltik → Obstipation. 4 Tage ohne Stuhlgang bei 800 ml Trinkmenge ist erwartbar, nicht ueberraschend.\n\n• **Lunge:** Wenig Fluessigkeit → zaehes Bronchialsekret → schlechtere Clearance → erhoehtes Pneumonierisiko (bei COPD III ohnehin schon reduziert).\n\n• **Niere/Blase:** Wenig Fluessigkeit → konzentrierter Urin → Blasenreizung → paradoxerweise haeufigerer Harndrang → Frau Kovac trinkt noch weniger (Teufelskreis).\n\n**Eine Massnahme, drei Effekte:** Trinkmenge schrittweise auf 1.200 ml steigern (aerztlich vereinbart).\n• Darm: weicherer Stuhl, bessere Peristaltik\n• Lunge: fluessigeres Sekret, leichteres Abhusten\n• Blase: weniger konzentrierter Urin, weniger Reizung\n\nQuelle: (DNQP 2014; AWMF S2k 2023)",
    kerntextB1:
      "**Drei Probleme — eine Ursache:**\n\n• **Darm:** Wenig Trinken → harter Stuhlgang → 4 Tage Verstopfung.\n• **Lunge:** Wenig Trinken → zaehes Sekret → schwer abzuhusten.\n• **Blase:** Wenig Trinken → dunkler Urin → reizt die Blase → muss oefter zur Toilette → trinkt noch weniger.\n\n**Eine Loesung:** Schrittweise mehr trinken (Ziel: 1.200 ml/Tag). Das hilft dem Darm, der Lunge UND der Blase gleichzeitig.",
    faustregel:
      "**Fluessigkeitsmangel ist nie nur ein Problem.** Bei Frau Kovac: Obstipation + zaehes Sekret + konzentrierter Urin = ein gemeinsamer Nenner.",
    faustregelB1:
      "Zu wenig Trinken betrifft nie nur eine Sache. Bei Frau Kovac: Verstopfung + Schleim + Urin — alles gleichzeitig.",
    karteikarte: {
      vorderseite:
        "Frau Kovac: 800 ml Trinkmenge, 4 Tage Obstipation, zaehes Sekret. Welcher Zusammenhang — und welche eine Massnahme hilft bei allen drei?",
      rueckseite:
        "Gemeinsamer Nenner: Fluessigkeitsmangel. (1) Darm: harter Stuhl + verlangsamte Peristaltik. (2) Lunge: zaehes Sekret + reduzierte Clearance + Pneumonierisiko. (3) Blase: konzentrierter Urin + Blasenreizung + Teufelskreis Trinkvermeidung. Massnahme: Trinkmenge schrittweise auf 1.200 ml (aerztlich vereinbart) — verbessert alle drei. Faustregel: Fluessigkeitsmangel ist nie nur ein Problem.",
    },
  },
};

// ============================================================
// PHASE 5 — EVALUIEREN (1 Baustein)
// ============================================================

/**
 * 5A — Pflegeprozess (Wiederbegegnung): Evaluation als Regelkreis
 * Position: VOR Step 5.1 (Trinkprotokoll Kategorisierung) — erinnert an
 * den Regelkreis-Charakter des Pflegeprozesses.
 */
export const CE02_KOVAC_INLINE_05A_EVALUATION_REGELKREIS: ContentStep = {
  stepId: "ce02-kovac-eval-00b-evaluation-regelkreis",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "DNQP Mobilitaet 2017/2024",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-eval-regelkreis",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["schlaf", "harnausscheidung"],
  transition:
    "Evaluation ist keine Endstation — sie ist der Start fuer morgen. Schau jetzt, was heute funktioniert hat und was nicht.",
  contentC1: {
    title: "Evaluation — der Regelkreis in der ambulanten Praxis",
    body: "",
    glossarBegriffe: ["Evaluation", "Regelkreis", "Soll-Ist-Abgleich", "Pflegeprozess"],
  },
  contentB1: {
    title: "Evaluation — was hat funktioniert?",
    body: "",
    glossarBegriffe: ["Evaluation", "Pflegeprozess"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-schritt-6-evaluation",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-schritt-6-evaluation",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du den Soll-Ist-Abgleich gelernt: Pflegeziel (Soll) vs. tatsaechlicher Zustand (Ist). Ambulant ist Evaluation schwieriger — du hast nicht den ganzen Tag beobachtet. Du musst dich auf das Trinkprotokoll, Frau Kovacs Eigenaussagen und deine Stichproben-Beobachtung verlassen. Evaluation mit lueckenhaften Daten ist ambulanter Alltag.",
      vertiefungB1:
        "Den Soll-Ist-Vergleich kennst du von Frau M.: Ziel vs. Realitaet. Ambulant ist es schwerer — du warst nicht den ganzen Tag da. Du musst dich auf das Protokoll und Frau Kovacs Worte verlassen.",
    },
    storyAufhaenger:
      "Es ist 18:30 Uhr, Abendbesuch. Du hast heute Morgen Ziele vereinbart: Trinkmenge steigern, Uebungen, Schlafgespraech vorbereiten. Jetzt schaust du: Was ist passiert in den 10 Stunden, die du nicht da warst?",
    storyAufhaengerB1:
      "Du bist zum Abendbesuch da. Heute Morgen hast du Ziele vereinbart. Was ist in den 10 Stunden passiert, als du nicht da warst?",
    kerntext:
      "**Evaluation ambulant — 3 Besonderheiten:**\n\n• **Lueckenhafte Daten:** Du warst 45 Min morgens da. Was dazwischen passiert ist, weisst du nur aus dem Trinkprotokoll und Frau Kovacs Erzaehlung. Das ist weniger als stationaer — aber es ist, was du hast.\n\n• **Soll-Ist mit Vorsicht:** \"2 von 3 Bechern geleert\" = 680 ml bis 18:30 Uhr. Ziel: 1.200 ml/Tag. Auf den ersten Blick: nicht erreicht. Aber: 680 ml bis 18:30 ist mehr als gestern (800 ml den ganzen Tag). Die Richtung stimmt — und das zaehlt.\n\n• **Regelkreis-Konsequenz:** Teilweise erreicht → Massnahme nicht abbrechen, sondern anpassen. Morgen: 4. Becher hinstellen statt 3. Tee anbieten statt Wasser (Frau Kovac mag Tee). Ziel bleibt 1.200 ml — der Weg aendert sich.\n\n**Evaluation ist keine Erfolgskontrolle** — sie ist Datenerhebung fuer den naechsten Plan.\n\nQuelle: (Fiechter/Meier 1981; DNQP 2017/2024)",
    kerntextB1:
      "**Evaluation ambulant — 3 Punkte:**\n\n• **Du warst nicht den ganzen Tag da.** Du weisst nur was im Protokoll steht und was Frau Kovac erzaehlt.\n\n• **Vergleich Ziel und Realitaet:** 680 ml bis 18:30 — Ziel ist 1.200 ml. Nicht erreicht? Stimmt. Aber gestern war es 800 ml den ganzen Tag. Es geht in die richtige Richtung.\n\n• **Was jetzt?** Morgen: Einen Becher mehr hinstellen. Tee anbieten statt nur Wasser. Das Ziel bleibt — der Weg aendert sich.\n\nEvaluation heisst nicht: geschafft oder nicht geschafft. Es heisst: Was muss ich morgen anders machen?",
    faustregel:
      "**Evaluation ambulant = Richtung zaehlt mehr als Zielwert.** 680 ml statt 800 ml ist ein Erfolg — auch wenn 1.200 ml noch fehlen.",
    faustregelB1:
      "Die Richtung zaehlt. 680 ml bis zum Abend ist besser als gestern 800 ml den ganzen Tag. Morgen wird es mehr.",
    karteikarte: {
      vorderseite:
        "Frau Kovac hat bis 18:30 Uhr 680 ml getrunken (Ziel: 1.200 ml). Ist die Evaluation positiv oder negativ — und was aendert sich morgen?",
      rueckseite:
        "Weder noch — Evaluation ist Datenerhebung, keine Wertung. Richtung stimmt: 680 ml bis 18:30 > 800 ml/ganzer Tag gestern. Regelkreis: Teilziel nicht erreicht → Massnahme anpassen (4 Becher statt 3, Tee statt Wasser, aerztliches Tagesziel 1.200 ml bleibt). Bei Frau M. (stationaer) war der Soll-Ist-Vergleich einfacher — 24h-Dokumentation. Ambulant: lueckenhafte Daten sind normal. Faustregel: Richtung zaehlt mehr als Zielwert.",
    },
  },
};

// ============================================================
// EXPORT — alle 10 Inline-Wissens-Bausteine
// ============================================================

export const CE02_KOVAC_AMBULANT_INLINE_WISSEN: ContentStep[] = [
  // Phase 1
  CE02_KOVAC_INLINE_01A_PNEUMONIE_COPD,
  CE02_KOVAC_INLINE_01B_PFLEGEPROZESS_SBAR,
  // Phase 2
  CE02_KOVAC_INLINE_02A_PNEUMONIE_ATEMBEOB,
  CE02_KOVAC_INLINE_02B_SCHLAF_PHYSIOLOGIE,
  CE02_KOVAC_INLINE_02C_HARNAUSSCHEIDUNG,
  // Phase 3
  CE02_KOVAC_INLINE_03A_SCHLAFHYGIENE,
  CE02_KOVAC_INLINE_03B_SMART_AMBULANT,
  // Phase 4
  CE02_KOVAC_INLINE_04A_LIPPENBREMSE,
  CE02_KOVAC_INLINE_04B_OBSTIPATION_TRINK,
  // Phase 5
  CE02_KOVAC_INLINE_05A_EVALUATION_REGELKREIS,
];
