// CE-06 Situation „Herr Novak — akute psychotische Erregung" — Patient
// SituationsTyp: akutsituation. Showcase: akuten Erregungszustand DIAGNOSTIZIEREN (inkl. organische
// Ursachen ausschließen) + Erste Hilfe einleiten (Sicherheit, Deeskalation, Recht) — LE1-K4.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_NOVAK_PATIENT: PatientBeschreibung = {
  patientId: "pat-novak-erregung",
  name: "Daniel Novak",
  alter: 34,
  geschlecht: "m",
  diagnosen: ["ambulant erworbene Pneumonie mit Fieber (39,2 °C)"],
  nebendiagnosen: [
    "bekannte paranoide Schizophrenie",
    "antipsychotische Dauermedikation",
  ],
  setting: "Internistische Station, Einzelzimmer, 23:30 Uhr — Nachtdienst, du bist als Erste beim Patienten",
  hintergrund:
    "Herr Novak wurde vor zwei Tagen mit einer Lungenentzündung aufgenommen. Er lebt sonst in einer betreuten Wohngruppe, nimmt seine antipsychotischen Medikamente meist regelmäßig. Tagsüber war er zugewandt. In dieser Nacht steht er plötzlich am Bett, wirkt gehetzt, ist laut und misstrauisch: Er ist überzeugt, das Personal wolle ihn über die Infusion vergiften.",
  hintergrundB1:
    "Herr Novak kam vor zwei Tagen mit einer Lungenentzündung. Er lebt sonst in einer betreuten Wohngruppe und nimmt meist seine Medikamente. Tagsüber war er freundlich. In dieser Nacht steht er plötzlich am Bett, ist laut und misstrauisch. Er glaubt, das Personal wolle ihn über die Infusion vergiften.",
  persoenlichkeit:
    "Aktuell akut angespannt und angstgetrieben (paranoides Erleben); er nimmt Zuwendung schnell als Bedrohung wahr. Nüchtern/stabil ist er höflich und kooperativ. WICHTIG: Sein Fieber (Pneumonie) kann die Erregung mitverursachen oder verstärken — der Zustand ist nicht automatisch 'nur die Schizophrenie'.",
  persoenlichkeitB1:
    "Gerade ist er sehr angespannt und hat Angst. Er nimmt Nähe schnell als Bedrohung wahr. Sonst ist er höflich. WICHTIG: Sein Fieber kann die Erregung mit auslösen — es ist nicht automatisch 'nur die Schizophrenie'.",
  zitate: [
    "Bleiben Sie weg! Sie wollen mich vergiften!",
  ],
};
