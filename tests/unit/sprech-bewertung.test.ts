import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  verifiziereChecklist,
  komponiereSprechFeedback,
} from "@/lib/learn/sprech-bewertung";
import { pruefeGefahren } from "@/lib/learn/gefahren-check";
import type { SprechKriterium } from "../../content/_types";

const TRANSKRIPT =
  "Herr Wagner, 67, ist im Flur kollabiert. Er hat Vorhofflimmern unter Apixaban. Wir haben mit der Herzdruckmassage begonnen. Ich brauche einen i.v.-Zugang.";

describe("verifiziereChecklist — Zitatpflicht mechanisch", () => {
  const ids = ["sbar-s", "sbar-b"];

  it("akzeptiert erfüllt NUR mit wörtlichem Transkript-Zitat", () => {
    const urteile = verifiziereChecklist(
      TRANSKRIPT,
      [
        { id: "sbar-s", erfuellt: true, zitat: "Herr Wagner, 67, ist im Flur kollabiert" },
        { id: "sbar-b", erfuellt: true, zitat: "Vorhofflimmern unter Apixaban" },
      ],
      ids
    );
    expect(urteile).toEqual([
      { id: "sbar-s", erfuellt: true, zitat: "Herr Wagner, 67, ist im Flur kollabiert", verworfen: false },
      { id: "sbar-b", erfuellt: true, zitat: "Vorhofflimmern unter Apixaban", verworfen: false },
    ]);
  });

  it("VERWIRFT halluzinierte Erfüllung (Zitat steht nicht im Transkript)", () => {
    const urteile = verifiziereChecklist(
      TRANSKRIPT,
      [{ id: "sbar-s", erfuellt: true, zitat: "instabile Angina pectoris seit Tagen" }],
      ids
    );
    expect(urteile[0]).toEqual({
      id: "sbar-s",
      erfuellt: false,
      zitat: null,
      verworfen: true,
    });
  });

  it("verwirft erfüllt ohne Zitat und zu kurze Pseudo-Zitate", () => {
    const urteile = verifiziereChecklist(
      TRANSKRIPT,
      [
        { id: "sbar-s", erfuellt: true },
        { id: "sbar-b", erfuellt: true, zitat: "hat" },
      ],
      ids
    );
    expect(urteile[0].erfuellt).toBe(false);
    expect(urteile[0].verworfen).toBe(true);
    expect(urteile[1].erfuellt).toBe(false);
    expect(urteile[1].verworfen).toBe(true);
  });

  it("toleriert Satzzeichen-/Whitespace-Unterschiede im Zitat", () => {
    const urteile = verifiziereChecklist(
      TRANSKRIPT,
      [{ id: "sbar-s", erfuellt: true, zitat: "Herr Wagner 67 ist im Flur kollabiert" }],
      ["sbar-s"]
    );
    expect(urteile[0].erfuellt).toBe(true);
  });

  it("fehlende Kriterien in der LLM-Antwort → nicht erfüllt (nicht verworfen)", () => {
    const urteile = verifiziereChecklist(TRANSKRIPT, [], ids);
    expect(urteile).toHaveLength(2);
    expect(urteile.every((u) => !u.erfuellt && !u.verworfen)).toBe(true);
  });

  it("übersteht kaputte LLM-Antworten (null/undefined)", () => {
    expect(verifiziereChecklist(TRANSKRIPT, null, ids)).toHaveLength(2);
    expect(verifiziereChecklist(TRANSKRIPT, undefined, ids)).toHaveLength(2);
  });
});

describe("komponiereSprechFeedback — Sätze NUR aus Content", () => {
  const kriterien: SprechKriterium[] = [
    {
      id: "k1",
      label: "Situation",
      labelB1: "Situation (einfach)",
      pruefHinweis: "…",
      feedbackFehlt: "Die Situation fehlt: wer, was, wann.",
      feedbackFehltB1: "Es fehlt: wer, was, wann.",
    },
    {
      id: "k2",
      label: "Background",
      pruefHinweis: "…",
      feedbackFehlt: "Der Background fehlt.",
    },
  ];

  it("erfüllt → kein Satz; fehlt → wortgleicher Content-Satz", () => {
    const fb = komponiereSprechFeedback(
      kriterien,
      [
        { id: "k1", erfuellt: true, zitat: "x", verworfen: false },
        { id: "k2", erfuellt: false, zitat: null, verworfen: false },
      ],
      "c1"
    );
    expect(fb.zeilen[0]).toMatchObject({ erfuellt: true, satz: null });
    expect(fb.zeilen[1]).toMatchObject({
      erfuellt: false,
      satz: "Der Background fehlt.",
    });
    expect(fb.anzahlErfuellt).toBe(1);
    expect(fb.alleErfuellt).toBe(false);
  });

  it("B1 nutzt B1-Label und B1-Satz, fällt sonst auf C1 zurück", () => {
    const fb = komponiereSprechFeedback(
      kriterien,
      [
        { id: "k1", erfuellt: false, zitat: null, verworfen: false },
        { id: "k2", erfuellt: false, zitat: null, verworfen: false },
      ],
      "b1"
    );
    expect(fb.zeilen[0].label).toBe("Situation (einfach)");
    expect(fb.zeilen[0].satz).toBe("Es fehlt: wer, was, wann.");
    expect(fb.zeilen[1].satz).toBe("Der Background fehlt."); // kein B1 → C1
  });
});

describe("pruefeGefahren — deterministische Anti-Pattern-Schicht", () => {
  it.each([
    ["NRS 5, das ist okay", "AP-NRS-OK"],
    ["dann ziehe ich Sie hoch", "AP-HEBEN-ZIEHEN"],
    ["ich greife unter die Achseln", "AP-UNTER-ACHSELN"],
    ["Sie haben Glück gehabt, ist ja nichts passiert", "AP-GLUECK-VOR-ASSESSMENT"],
    ["ich mache beide Bettgitter hoch", "AP-BETTGITTER-BEIDSEITIG"],
    ["die Rötung würde ich massieren", "AP-DEKUBITUS-MASSAGE"],
    ["wir lagern alle zwei Stunden um", "AP-2H-LAGERUNG-STARR"],
    ["ich mache gedämpftes Licht an", "AP-LICHT-INDIREKT"],
  ])("erkennt: %s → %s", (text, id) => {
    const treffer = pruefeGefahren(text);
    expect(treffer.map((t) => t.id)).toContain(id);
    const t = treffer.find((x) => x.id === id)!;
    expect(t.hinweis.length).toBeGreaterThan(20);
    expect(t.hinweisB1.length).toBeGreaterThan(20);
  });

  it("schlägt bei korrekten Aussagen NICHT an", () => {
    expect(
      pruefeGefahren(
        "Ich schalte das Licht voll ein, prüfe zuerst auf Verletzungen und sichere Herrn Wagner seitlich am Becken. Er bewegt sich selbst, NRS 5 dokumentiere ich und spreche die Bedarfsanalgesie an."
      )
    ).toEqual([]);
  });

  it("Sync: jede AP-ID existiert in der Anti-Pattern-Registry (pflege-konformitaet.md)", () => {
    const doc = fs.readFileSync(
      path.join(process.cwd(), ".claude/rules/pflege-konformitaet.md"),
      "utf8"
    );
    const alleIds = [
      ...new Set(
        [
          "NRS 6 ist ok",
          "ich hebe Sie hoch",
          "unter den Achseln",
          "Glück gehabt",
          "beide Bettgitter",
          "Rötung massieren",
          "alle 2 Stunden lagern",
          "gedämpftes Licht",
        ].flatMap((t) => pruefeGefahren(t).map((x) => x.id))
      ),
    ];
    expect(alleIds.length).toBeGreaterThanOrEqual(8);
    for (const id of alleIds) {
      expect(doc, `${id} fehlt in pflege-konformitaet.md`).toContain(id);
    }
  });
});
