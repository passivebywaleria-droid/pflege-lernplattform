// CE-02 Situation Viktor Petrov — Ischämischer Schlaganfall mit Hemiparese rechts
// Quelle: content/ce-02/situationen/ls-petrov-schlaganfall/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_PETROV_SCHLAGANFALL_PATIENT: PatientBeschreibung = {
  patientId: "pat-petrov-apoplex",
  name: "Viktor Petrov",
  alter: 58,
  geschlecht: "m",
  diagnosen: [
    "Ischämischer Apoplex, A. cerebri media links (5. Tag post-Event)",
    "Hemiparese rechts (Arm funktionell komplett ausgefallen, Bein partiell)",
    "Dysphagie Grad 2 nach GUSS-Protokoll (Trapl 2007)",
    "Leichte Broca-Aphasie (versteht alles, spricht in 2-3 Wörtern)",
    "Blasenverweilkatheter (BVK, Silikon, Ch 16, seit Tag 1)",
  ],
  nebendiagnosen: [
    "Arterielle Hypertonie (Ramipril 5 mg, seit 8 Jahren)",
    "Hypercholesterinämie (Atorvastatin 40 mg, seit 3 Jahren)",
    "Nikotinabusus (ehemalig, bis vor 2 Jahren 20 Zigaretten/Tag)",
    "Pneumoniegefahr (Atelektasen durch reduzierte Atemtiefe + Dysphagie)",
  ],
  setting:
    "Neurologische Normalstation (Zimmer 112), Frühschicht, 5. Tag nach Ereignis, gestern von Stroke Unit verlegt",
  hintergrund:
    "Viktor Petrov wuchs in Kiew auf, studierte Maschinenbau und kam vor 22 Jahren nach Deutschland. Er spricht fließend Deutsch mit russischem Akzent. In der Fabrik ist er als ruhiger, verlässlicher Teamleiter bekannt. Körperlich war er aktiv: Fußball mit den Kollegen, Fahrradtouren mit der Familie. Vor 5 Tagen wurde er vom Kollegen bewusstlos im Büro aufgefunden — links-hemisphärischer Mediainfarkt. Akuttherapie mit i.v.-Lyse innerhalb von 3 Stunden. Er ist verheiratet mit Natalya (55), hat zwei erwachsene Kinder. Das Einfamilienhaus hat das Schlafzimmer im Obergeschoss. Die Diagnose trifft ihn mit voller Wucht: Der rechte Arm, mit dem er Zeichnungen erstellt hat, Schrauben festgezogen, seinem Sohn Gitarre gezeigt hat — der Arm funktioniert nicht mehr.",
  hintergrundB1:
    "Herr Petrov ist 58 Jahre alt. Er ist Ingenieur. Vor 5 Tagen hatte er einen Schlaganfall (= Apoplex). Ein Blutgefäß im Gehirn war verstopft. Das heißt: ischämischer Apoplex. Das Gehirn auf der linken Seite war betroffen. Deshalb funktioniert die rechte Körperseite nicht gut: Das nennt man Hemiparese (= halbseitige Schwäche). Der rechte Arm bewegt sich gar nicht mehr. Das rechte Bein kann er ein wenig heben. Herr Petrov hat auch eine Schluck-Störung. Das heißt Dysphagie (= Dysphagie Grad 2). Er kann breiige Speisen schlucken. Aber dünne Flüssigkeiten sind gefährlich. Sie können in die Lunge kommen. Er versteht alles, was du sagst. Aber er kann selbst kaum sprechen. Das ist eine Aphasie (= Sprech-Störung). Er sagt manchmal 2-3 Wörter. Er nickt und schüttelt den Kopf. Er hat einen Blasen-Katheter (= BVK). Der Katheter leitet den Urin ab. Herr Petrov hat früher viel Sport gemacht. Er war immer aktiv. Jetzt kann er sich nicht selbst waschen. Das ist schwer für ihn.",
  persoenlichkeit:
    "Ruhig, verlässlich, lösungsorientiert. Macht keine Worte — macht Ergebnisse. Weint selten, und wenn, dann schweigend: wenn Natalya geht, wenn er allein ist, wenn er merkt, dass er nach dem Waschen Hilfe braucht und sich nicht bedanken kann, weil ihm die Worte fehlen. Zentrales Thema: Kontrollverlust bei vollem Bewusstsein. Herr Petrov versteht jeden Satz, jede Erklärung, jedes Gespräch um ihn herum — er sitzt im eigenen Körper wie in einem fremden Fahrzeug, dessen Steuerung ausgefallen ist. Er nickt, wenn etwas stimmt. Er zeigt auf sein rechtes Bein, wenn es zieht. Er schüttelt den Kopf, wenn ihm etwas nicht gefällt. Einmal hat er mit der linken Hand den Becher weggeschoben — nicht aus Trotz, aus Unverständnis.",
  zitate: [
    "Morgen... besser?",
    "Nix... da. Nix.",
    "Bitte... langsam.",
    "(hustet heftig, greift mit linker Hand zur Kehle)",
    "(nach 8 Minuten an der Bettkante, Daumen der linken Hand hoch)",
  ],
};
