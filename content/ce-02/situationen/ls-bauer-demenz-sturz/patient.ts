// CE-02 Situation Herr Bauer — Demenz und Sturz — Patientenbeschreibung
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_PATIENT: PatientBeschreibung = {
  patientId: "pat-friedrich-bauer",
  name: "Friedrich Bauer",
  alter: 82,
  geschlecht: "m",
  diagnosen: [
    "Alzheimer-Demenz, mittelschweres Stadium (FAST-Skala 6a)",
    "Kontrakturgefährdung beider Knie (Streckdefizit rechts 20°, links 10°)",
    "Belastungsinkontinenz / nächtliche Dranginkontinenz",
    "Exsikkosegefahr (Trinkdurchschnitt 900–1100 ml/Tag, Ziel 1500 ml)",
  ],
  nebendiagnosen: [
    "Sturzereignis vergangene Nacht (ca. 02:30 Uhr, Flur vor Zimmer 8), Sturzprotokoll unvollständig",
  ],
  setting:
    "Gerontopsychiatrische Station, Einzelzimmer (Station 4b), Frühschicht nach Nachtereignis",
  hintergrund:
    "Friedrich Bauer wurde 1944 in Ansbach geboren, zweites Kind einer Schreinerfamilie. Mit 16 begann er die Schreinerlehre beim Vater, mit 34 übernahm er den Betrieb. Er beschäftigte zeitweise sieben Gesellen. Er war ein Mensch der Hände — holzschnitzende Hände, reparierte Stühle, baute Schränke für die halbe Gemeinde. Mit seiner Frau Margarete war er 51 Jahre verheiratet. Ihr Tod vor vier Jahren traf ihn hart. Die Demenzdiagnose kam 6 Monate danach — ob Trauer und Demenz zusammenhängen, blieb offen. In lichten Momenten ist er ruhig, manchmal sogar witzig. Er mag Handberührungen und erkennt seine Tochter Ingrid (55, Grundschullehrerin) regelmäßig, obwohl er ihren Namen nicht immer findet — er sagt dann \"mein Kind\". In verwirrten Phasen glaubt er, er müsse in die Werkstatt. Er wird unruhig, manchmal aggressiv bei Körperpflege, weil er nicht versteht was passiert. Er schlägt nach Pflegenden — nicht aus Böswilligkeit, sondern aus Angst. Er lebt seit 8 Monaten auf der gerontopsychiatrischen Station (Pflegegrad 4). Rechtliche Vertretung: Tochter Ingrid Bauer ist seit 2024 als gesetzliche Betreuerin (Aufgabenkreise Gesundheitssorge, Aufenthaltsbestimmung, Vermögenssorge) bestellt — sie ist auskunftsberechtigt und Ansprechpartnerin für medizinisch-pflegerische Entscheidungen. Aktuelle Medikation (Auszug): Donepezil 10 mg, Mirtazapin 15 mg z. N. (Antidepressivum mit dosisabhängiger Sedierung, PRISCUS-Liste — Sturzrisiko), Tamsulosin 0,4 mg, Macrogol bei Bedarf.",
  hintergrundB1:
    "Herr Bauer ist 82 Jahre alt. Er war Schreiner — er hat Holz bearbeitet, Möbel gebaut. Mit seiner Frau Margarete war er 51 Jahre zusammen. Sie ist vor 4 Jahren gestorben. Danach bekam er Alzheimer-Demenz (= Gedächtnis-Erkrankung). Er wohnt seit 8 Monaten auf der Pflegestation. Er hat Pflegegrad 4 — er braucht viel Hilfe. Seine Tochter Ingrid besucht ihn 3× pro Woche. Sie ist auch seine gesetzliche Betreuerin (= sie darf für ihn entscheiden und Auskunft bekommen). Manchmal ist er ruhig und witzig. Manchmal ist er verwirrt und hat Angst. Er mag Handberührungen und Musik aus den 1960er Jahren (z. B. Freddy Quinn). Er nimmt unter anderem Mirtazapin (Schlaf- und Stimmungsmittel — kann müde machen, erhöht Sturzrisiko). Heute Nacht ist er gestürzt (= hingefallen). Es war ca. 02:30 Uhr.",
  persoenlichkeit:
    "Ablehnung der Körperpflege (besonders Waschen von Gesicht und Genitalbereich), nächtliche Weglaufversuche, unregelmäßiges Trinken — er trinkt bereitwilliger, wenn er eine Tasse in die Hand bekommt. Lieblingsgetränk: alkoholfreies Malzgetränk (\"Malzbier\", Malztrunk — keine Verwechslung mit alkoholhaltigen Sorten; Kombination Mirtazapin + Alkohol wäre kontraindiziert). Ressourcen: reagiert auf ruhige Stimmen, mag Berührungen am Rücken, beruhigt sich bei Liedern aus den 1960er Jahren (Zarah Leander, Freddy Quinn). Handwerkliche Gegenstände (Holzstück, Schleifpapier) halten seine Aufmerksamkeit für kurze Zeit.",
  zitate: [
    "Ich muss zur Arbeit! Lasst mich raus! Die Bestellung kommt noch heute!",
    "Au — da tut's weh.",
    "Nein! Nein!",
    "Du bist nett.",
    "Mein Kind...",
  ],
};
