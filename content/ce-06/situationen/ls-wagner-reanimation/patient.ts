// CE-06 Situation „Herr Wagner — Reanimation auf Normalstation" — Patient
// SituationsTyp: akutsituation. Showcase: BLS-Algorithmus + AED + Team-Kommunikation
// unter Zeitdruck (Demo-Wow: Branching in der Erstmaßnahmen-Phase).

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_WAGNER_PATIENT: PatientBeschreibung = {
  patientId: "pat-wagner-rea",
  name: "Klaus Wagner",
  alter: 67,
  geschlecht: "m",
  diagnosen: ["instabile Angina pectoris"],
  nebendiagnosen: [
    "Zustand nach zwei Herzinfarkten (2019, 2023)",
    "Typ-2-Diabetes mellitus",
    "Vorhofflimmern unter Apixaban",
    "Adipositas (BMI 31)",
  ],
  setting: "Kardiologische Normalstation, Flur vor Zimmer 7, 08:15 Uhr (Ende Nachtdienst)",
  hintergrund:
    "Herr Wagner war Fernfahrer, bis das Herz ihn zwang aufzuhören. Er kam vor zwei Tagen wegen Brustschmerzen auf die Station. Heute Morgen fühlte er sich 'viel besser' und wollte allein zur Toilette gehen — auf dem Flur bricht er plötzlich zusammen. Eine Pflegende ist unmittelbar dabei, der nächste Defibrillator hängt rund 30 Meter entfernt am Stationsstützpunkt, der Stationsarzt ist auf einer anderen Station.",
  hintergrundB1:
    "Herr Wagner war früher Fernfahrer. Er kam vor zwei Tagen wegen Brustschmerzen auf die Station. Heute fühlte er sich besser und wollte allein zur Toilette. Auf dem Flur fällt er plötzlich um. Du bist direkt dabei. Der Defibrillator hängt 30 Meter weiter am Stützpunkt. Der Arzt ist auf einer anderen Station.",
  persoenlichkeit:
    "Liebenswürdig und ein bisschen stur. Nennt alle Pflegenden 'Schwester' oder 'Bruder' und will niemandem zur Last fallen. Genau deshalb ist er allein losgegangen. In dieser Situation ist er nicht ansprechbar — die Persönlichkeit spielt erst in der Reflexion und im Umgang mit den Angehörigen wieder eine Rolle.",
  persoenlichkeitB1:
    "Freundlich und ein bisschen stur. Er will niemandem zur Last fallen. Darum ist er allein losgegangen. Jetzt ist er nicht ansprechbar.",
  zitate: [
    "Ich schaff das schon, Schwester. Muss mal aufs Klo.",
  ],
};
