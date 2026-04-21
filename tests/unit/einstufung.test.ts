import { describe, it, expect } from "vitest";
import {
  createInitialState,
  starteEinstufung,
  verarbeiteAntwort,
  berechneErgebnis,
  naechsteFrage,
} from "@/lib/einstufung/algorithmus";

describe("createInitialState", () => {
  it("gibt korrekten initialen State zurück", () => {
    const state = createInitialState();
    expect(state.phase).toBe("willkommen");
    expect(state.aktuelleAchse).toBe("sprache");
    expect(state.aktuellesLevel).toBe(2);
    expect(state.antworten).toHaveLength(0);
    expect(state.ergebnis).toBeNull();
  });
});

describe("starteEinstufung", () => {
  it("wechselt Phase zu sprache", () => {
    const state = createInitialState();
    const result = starteEinstufung(state);
    expect(result.phase).toBe("sprache");
    expect(result.aktuelleAchse).toBe("sprache");
    expect(result.gesamtStartZeit).toBeGreaterThan(0);
  });

  it("setzt erste Frage", () => {
    const state = createInitialState();
    const result = starteEinstufung(state);
    expect(result.aktuelleFrage).not.toBeNull();
    expect(result.frageNummer).toBe(1);
  });
});

describe("verarbeiteAntwort", () => {
  it("speichert korrekte Antwort", () => {
    const state = starteEinstufung(createInitialState());
    const richtigeOption = state.aktuelleFrage!.richtig;
    const result = verarbeiteAntwort(state, richtigeOption);
    expect(result.antworten).toHaveLength(1);
    expect(result.antworten[0].korrekt).toBe(true);
    expect(result.antworten[0].fehlerKategorie).toBeNull();
  });

  it("speichert falsche Antwort mit Fehler-Kategorie", () => {
    const state = starteEinstufung(createInitialState());
    // Wähle eine falsche Option
    const falscheOption = state.aktuelleFrage!.optionen.find(
      (o) => o.id !== state.aktuelleFrage!.richtig
    )!.id;
    const result = verarbeiteAntwort(state, falscheOption);
    expect(result.antworten).toHaveLength(1);
    expect(result.antworten[0].korrekt).toBe(false);
    expect(result.antworten[0].fehlerKategorie).not.toBeNull();
  });

  it("gibt unveränderten State zurück wenn keine Frage aktiv", () => {
    const state = createInitialState(); // phase=willkommen, keine Frage
    const result = verarbeiteAntwort(state, "opt-1");
    expect(result).toEqual(state);
  });
});

describe("naechsteFrage", () => {
  it("gibt nächste Frage auf gleichem oder angepasstem Level", () => {
    let state = starteEinstufung(createInitialState());
    // Beantworte erste Frage
    const richtigeOption = state.aktuelleFrage!.richtig;
    state = verarbeiteAntwort(state, richtigeOption);
    const result = naechsteFrage(state);
    expect(result.aktuelleFrage).not.toBeNull();
    expect(result.frageNummer).toBe(2);
  });
});

describe("berechneErgebnis", () => {
  it("berechnet Score und Level für leere Antworten", () => {
    const state = createInitialState();
    state.gesamtStartZeit = Date.now() - 10000;
    const ergebnis = berechneErgebnis(state);
    expect(ergebnis.sprache.score).toBe(50); // default
    expect(ergebnis.sprache.level).toBe(3);  // default
    expect(ergebnis.fachwissen.score).toBe(50);
  });

  it("berechnet fehlerVerteilung korrekt", () => {
    const state = createInitialState();
    state.gesamtStartZeit = Date.now() - 10000;
    state.antworten = [
      { frageId: "f1", achse: "sprache", schwierigkeit: 2, korrekt: false, zeitMs: 1000, fehlerKategorie: "raten" },
      { frageId: "f2", achse: "sprache", schwierigkeit: 2, korrekt: false, zeitMs: 5000, fehlerKategorie: "konzept" },
      { frageId: "f3", achse: "sprache", schwierigkeit: 2, korrekt: true, zeitMs: 3000, fehlerKategorie: null },
      { frageId: "f4", achse: "sprache", schwierigkeit: 2, korrekt: false, zeitMs: 8000, fehlerKategorie: "konzept" },
    ];
    const ergebnis = berechneErgebnis(state);
    expect(ergebnis.fehlerVerteilung.raten).toBe(1);
    expect(ergebnis.fehlerVerteilung.konzept).toBe(2);
    expect(ergebnis.fehlerVerteilung.sprache).toBe(0);
  });

  it("Score-Level-Mapping: hoher Score → hohes Level", () => {
    const state = createInitialState();
    state.gesamtStartZeit = Date.now() - 10000;
    // Alle richtig + schnell + schwer
    state.antworten = Array.from({ length: 6 }, (_, i) => ({
      frageId: `f${i}`,
      achse: "sprache" as const,
      schwierigkeit: 3 as const,
      korrekt: true,
      zeitMs: 3000,
      fehlerKategorie: null,
    }));
    const ergebnis = berechneErgebnis(state);
    expect(ergebnis.sprache.level).toBeGreaterThanOrEqual(4);
    expect(ergebnis.sprache.score).toBeGreaterThan(80);
  });
});
