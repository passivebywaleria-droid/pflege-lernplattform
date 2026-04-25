// CE-02 Situation Frau Yilmaz — Spirale 2 — Patientenbeschreibung
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_PATIENT: PatientBeschreibung = {
  patientId: "pat-yilmaz",
  name: "Ayşe Yilmaz",
  alter: 79,
  geschlecht: "w",
  diagnosen: [
    "Hüft-TEP rechts nach Schenkelhalsfraktur (OP vor 14 Tagen)",
    "Dekubitus Kategorie II am Sakrum (neu entdeckt, 2×3 cm)",
    "Diabetes mellitus Typ 2 — orale Antidiabetika, HbA1c 8,1 %",
    "Adipositas — BMI 34",
    "Periphere Neuropathie (diabetisch) — reduziertes Schmerzempfinden Fersen + Sakrum",
  ],
  nebendiagnosen: [
    "Pflegegrad beantragt (noch keiner bewilligt)",
  ],
  setting:
    "Orthopädische Station, Zweibettzimmer — Tag 14 post-OP Hüft-TEP rechts",
  hintergrund:
    "Ayşe Yilmaz wuchs in einem Dorf bei Ankara auf und zog mit 28 Jahren nach Deutschland. Über 30 Jahre arbeitete sie als Reinigungskraft in einem Bürogebäude, bis die Knie und später die Hüfte nicht mehr mitmachten. Deutsch spricht sie funktional — für das tägliche Leben reicht es, für abstrakte medizinische Gespräche braucht sie Hilfe. Ihr Mann Mustafa (83) kommt täglich auf die Station und spricht kaum Deutsch. Die Tochter Sevim kommt abends. Sie wohnen gemeinsam im Erdgeschoss. Gepflegt zu werden empfindet Frau Yilmaz als Scham — sie schüttelt oft den Kopf: 'Ich mach das selbst, danke.' Auch wenn sie es gerade nicht kann. Sie will nach Hause — zu Mustafa. Und sie will nicht, dass Sevim Urlaub nehmen muss.",
  hintergrundB1:
    "Frau Ayşe Yilmaz ist 79 Jahre alt. Sie ist verheiratet. Ihr Mann heißt Mustafa. Er ist 83 Jahre alt. Sie wohnen zusammen im Erdgeschoss. Ihre Tochter heißt Sevim. Sie kommt abends auf die Station. Frau Yilmaz hat noch keinen Pflegegrad. Der Antrag läuft. Sie spricht Deutsch für das tägliche Leben. Schwierige Fachbegriffe versteht sie nicht gut.",
  persoenlichkeit:
    "Fürsorgliche Frau, selbstständig sozialisiert, empfindet Gepflegtwerden als Scham. Lehnt Hilfe verbal ab, obwohl sie sie braucht. Deutsch mit türkischem Akzent, einfache bis mittlere Satzstrukturen. Fachbegriffe wie 'Dekubitus' oder 'Erosion' muss man erklären. Schmerz schildert sie eher durch Gestik als durch Worte — neuropathisch bedingt. Reagiert auf Respekt und Geduld, öffnet sich langsam.",
  zitate: [
    "Was ist das? Da tut es nicht weh — ich hab nichts gemerkt. Ist das schlimm?",
    "Die Schwestern haben mich immer auf die Seite gelegt. Ich hab das manchmal nicht gewollt — das war unbequem. Aber sie haben es trotzdem gemacht.",
    "So liegt man also. Kissen da, Kissen da. Ist das nicht umständlich?",
    "Sie schreiben alles auf. Ist das für mich oder für die Akte?",
    "Ich will nach Hause. Mustafa kann nicht gut kochen. Er braucht mich.",
    "Als ich jung war, haben wir Wunden mit Honig behandelt. Das klingt vielleicht verrückt. Aber es hat funktioniert.",
  ],
};
