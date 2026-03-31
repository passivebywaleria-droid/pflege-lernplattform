"use client";

/**
 * StepCrossword — Echtes Kreuzworträtsel-Grid
 *
 * Features:
 * - Automatische Grid-Generierung aus Wort-Liste
 * - Wörter kreuzen sich wo möglich
 * - Buchstabe-für-Buchstabe-Eingabe
 * - Nummerierte Start-Zellen mit Hinweisen
 * - Aktives Wort wird farblich hervorgehoben
 * - Mobile-optimiert: Grid skaliert, Hinweise darunter
 */

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";

interface CrosswordWord {
  word: string;
  clue: string;
}

interface StepCrosswordProps {
  title: string;
  body?: string;
  words: CrosswordWord[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

// ===== Grid-Generierung =====

interface PlacedWord {
  word: string;
  clue: string;
  row: number;
  col: number;
  direction: "across" | "down";
  number: number;
}

interface GridCell {
  letter: string;
  wordIndices: number[]; // Welche platzierten Wörter diese Zelle nutzen
  number?: number;
}

function generateGrid(words: CrosswordWord[]): {
  grid: (GridCell | null)[][];
  placed: PlacedWord[];
  width: number;
  height: number;
} {
  // Sortiere nach Länge (längste zuerst für bessere Platzierung)
  const sorted = [...words].sort((a, b) => b.word.length - a.word.length);

  // Arbeits-Grid (groß genug)
  const SIZE = 30;
  const work: (string | null)[][] = Array.from({ length: SIZE }, () =>
    Array(SIZE).fill(null)
  );
  const placed: Omit<PlacedWord, "number">[] = [];

  // Erstes Wort horizontal in der Mitte
  const first = sorted[0];
  const startRow = Math.floor(SIZE / 2);
  const startCol = Math.floor((SIZE - first.word.length) / 2);
  for (let i = 0; i < first.word.length; i++) {
    work[startRow][startCol + i] = first.word[i].toUpperCase();
  }
  placed.push({
    word: first.word.toUpperCase(),
    clue: first.clue,
    row: startRow,
    col: startCol,
    direction: "across",
  });

  // Restliche Wörter platzieren
  for (let wi = 1; wi < sorted.length; wi++) {
    const w = sorted[wi].word.toUpperCase();
    let bestScore = -1;
    let bestPos: { row: number; col: number; dir: "across" | "down" } | null = null;

    // Versuche jede Kreuzung mit bereits platzierten Buchstaben
    for (let ci = 0; ci < w.length; ci++) {
      const ch = w[ci];
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (work[r][c] !== ch) continue;

          // Versuche vertikal (Wort geht nach unten, kreuzt bei [r][c])
          const vRow = r - ci;
          const vCol = c;
          if (canPlace(work, w, vRow, vCol, "down", SIZE)) {
            const score = scorePlace(work, w, vRow, vCol, "down", SIZE);
            if (score > bestScore) {
              bestScore = score;
              bestPos = { row: vRow, col: vCol, dir: "down" };
            }
          }

          // Versuche horizontal (Wort geht nach rechts, kreuzt bei [r][c])
          const hRow = r;
          const hCol = c - ci;
          if (canPlace(work, w, hRow, hCol, "across", SIZE)) {
            const score = scorePlace(work, w, hRow, hCol, "across", SIZE);
            if (score > bestScore) {
              bestScore = score;
              bestPos = { row: hRow, col: hCol, dir: "across" };
            }
          }
        }
      }
    }

    if (bestPos) {
      placeWord(work, w, bestPos.row, bestPos.col, bestPos.dir);
      placed.push({
        word: w,
        clue: sorted[wi].clue,
        row: bestPos.row,
        col: bestPos.col,
        direction: bestPos.dir,
      });
    } else {
      // Fallback: Wort separat platzieren
      // Finde freie Zeile
      let fallbackRow = startRow + placed.length * 2;
      if (fallbackRow >= SIZE - w.length) fallbackRow = 1 + placed.length * 2;
      const fallbackCol = Math.floor((SIZE - w.length) / 2);
      const dir = placed.length % 2 === 0 ? "across" : "down";

      if (dir === "across" && fallbackCol >= 0 && fallbackCol + w.length < SIZE) {
        placeWord(work, w, fallbackRow, fallbackCol, "across");
        placed.push({
          word: w,
          clue: sorted[wi].clue,
          row: fallbackRow,
          col: fallbackCol,
          direction: "across",
        });
      } else if (dir === "down" && fallbackRow >= 0 && fallbackRow + w.length < SIZE) {
        placeWord(work, w, 2, fallbackCol, "down");
        placed.push({
          word: w,
          clue: sorted[wi].clue,
          row: 2,
          col: fallbackCol,
          direction: "down",
        });
      }
    }
  }

  // Bounding-Box bestimmen
  let minR = SIZE, maxR = 0, minC = SIZE, maxC = 0;
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (work[r][c] !== null) {
        minR = Math.min(minR, r);
        maxR = Math.max(maxR, r);
        minC = Math.min(minC, c);
        maxC = Math.max(maxC, c);
      }
    }
  }

  const height = maxR - minR + 1;
  const width = maxC - minC + 1;

  // Nummerierung: Sortiere nach Position (oben-links zuerst)
  const numberedPlaced = placed
    .map((p) => ({ ...p, row: p.row - minR, col: p.col - minC }))
    .sort((a, b) => a.row - b.row || a.col - b.col)
    .map((p, _i) => ({ ...p, number: 0 }));

  // Nummern vergeben (jede einzigartige Startposition bekommt eine Nummer)
  let num = 1;
  const numberMap = new Map<string, number>();
  for (const p of numberedPlaced) {
    const key = `${p.row},${p.col}`;
    if (!numberMap.has(key)) {
      numberMap.set(key, num++);
    }
    p.number = numberMap.get(key)!;
  }

  // Grid bauen
  const grid: (GridCell | null)[][] = Array.from({ length: height }, () =>
    Array(width).fill(null)
  );

  for (let pi = 0; pi < numberedPlaced.length; pi++) {
    const p = numberedPlaced[pi];
    for (let i = 0; i < p.word.length; i++) {
      const r = p.direction === "down" ? p.row + i : p.row;
      const c = p.direction === "across" ? p.col + i : p.col;

      if (!grid[r][c]) {
        grid[r][c] = { letter: p.word[i], wordIndices: [pi] };
      } else {
        grid[r][c]!.wordIndices.push(pi);
      }

      // Nummer nur an Startposition
      if (i === 0) {
        grid[r][c]!.number = p.number;
      }
    }
  }

  return { grid, placed: numberedPlaced as PlacedWord[], width, height };
}

function canPlace(
  work: (string | null)[][],
  word: string,
  row: number,
  col: number,
  dir: "across" | "down",
  size: number
): boolean {
  const dr = dir === "down" ? 1 : 0;
  const dc = dir === "across" ? 1 : 0;

  // Bounds-Check
  const endR = row + dr * (word.length - 1);
  const endC = col + dc * (word.length - 1);
  if (row < 0 || col < 0 || endR >= size || endC >= size) return false;

  // Zelle vor dem Wort muss leer sein
  const beforeR = row - dr;
  const beforeC = col - dc;
  if (beforeR >= 0 && beforeC >= 0 && work[beforeR][beforeC] !== null) return false;

  // Zelle nach dem Wort muss leer sein
  const afterR = row + dr * word.length;
  const afterC = col + dc * word.length;
  if (afterR < size && afterC < size && work[afterR][afterC] !== null) return false;

  let intersections = 0;
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    const existing = work[r][c];

    if (existing !== null) {
      if (existing !== word[i]) return false; // Konflikt
      intersections++;
    } else {
      // Keine parallelen Nachbarn (senkrecht zur Richtung)
      if (dir === "across") {
        if (r > 0 && work[r - 1][c] !== null) return false;
        if (r < size - 1 && work[r + 1][c] !== null) return false;
      } else {
        if (c > 0 && work[r][c - 1] !== null) return false;
        if (c < size - 1 && work[r][c + 1] !== null) return false;
      }
    }
  }

  return intersections > 0; // Mindestens eine Kreuzung
}

function scorePlace(
  work: (string | null)[][],
  word: string,
  row: number,
  col: number,
  dir: "across" | "down",
  size: number
): number {
  const dr = dir === "down" ? 1 : 0;
  const dc = dir === "across" ? 1 : 0;
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    if (r >= 0 && r < size && c >= 0 && c < size && work[r][c] === word[i]) {
      score += 2; // Kreuzung = mehr Punkte
    }
  }
  // Kompaktheit belohnen (näher zur Mitte)
  const center = size / 2;
  score -= (Math.abs(row - center) + Math.abs(col - center)) * 0.01;
  return score;
}

function placeWord(
  work: (string | null)[][],
  word: string,
  row: number,
  col: number,
  dir: "across" | "down"
) {
  for (let i = 0; i < word.length; i++) {
    const r = dir === "down" ? row + i : row;
    const c = dir === "across" ? col + i : col;
    work[r][c] = word[i];
  }
}

// ===== Komponente =====

export function StepCrossword({
  title,
  body,
  words,
  glossar,
  onNext,
}: StepCrosswordProps) {
  const { grid, placed, width, height } = useMemo(() => generateGrid(words), [words]);

  // User-Eingaben: [row][col] → Buchstabe
  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    Array.from({ length: height }, () => Array(width).fill(""))
  );
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const cellRefs = useRef<(HTMLInputElement | null)[][]>(
    Array.from({ length: height }, () => Array(width).fill(null))
  );

  // Aktives Wort: Zellen die hervorgehoben werden
  const activeCells = useMemo(() => {
    if (activeWordIdx === null) return new Set<string>();
    const p = placed[activeWordIdx];
    const cells = new Set<string>();
    for (let i = 0; i < p.word.length; i++) {
      const r = p.direction === "down" ? p.row + i : p.row;
      const c = p.direction === "across" ? p.col + i : p.col;
      cells.add(`${r},${c}`);
    }
    return cells;
  }, [activeWordIdx, placed]);

  // Nächste leere Zelle im aktiven Wort finden
  const focusNextEmpty = useCallback(
    (wordIdx: number, afterRow: number, afterCol: number) => {
      const p = placed[wordIdx];
      const dr = p.direction === "down" ? 1 : 0;
      const dc = p.direction === "across" ? 1 : 0;

      // Finde Position im Wort
      const posInWord =
        p.direction === "across" ? afterCol - p.col : afterRow - p.row;

      // Suche ab nächster Position
      for (let i = posInWord + 1; i < p.word.length; i++) {
        const r = p.row + dr * i;
        const c = p.col + dc * i;
        if (!userGrid[r][c]) {
          cellRefs.current[r]?.[c]?.focus();
          return;
        }
      }
      // Alle gefüllt — bleibe
    },
    [placed, userGrid]
  );

  const handleCellInput = useCallback(
    (row: number, col: number, value: string) => {
      if (checked) return;
      const ch = value.slice(-1).toUpperCase();
      setUserGrid((prev) => {
        const next = prev.map((r) => [...r]);
        next[row][col] = ch;
        return next;
      });
      if (ch && activeWordIdx !== null) {
        // Focus nächste leere Zelle nach Microtask (state muss updaten)
        setTimeout(() => focusNextEmpty(activeWordIdx, row, col), 0);
      }
    },
    [checked, activeWordIdx, focusNextEmpty]
  );

  const handleCellKeyDown = useCallback(
    (row: number, col: number, e: React.KeyboardEvent) => {
      if (checked) return;
      if (e.key === "Backspace" && !userGrid[row][col]) {
        // Zurück zur vorherigen Zelle
        if (activeWordIdx !== null) {
          const p = placed[activeWordIdx];
          const dr = p.direction === "down" ? 1 : 0;
          const dc = p.direction === "across" ? 1 : 0;
          const posInWord = p.direction === "across" ? col - p.col : row - p.row;
          if (posInWord > 0) {
            const prevR = row - dr;
            const prevC = col - dc;
            cellRefs.current[prevR]?.[prevC]?.focus();
          }
        }
      }
    },
    [checked, userGrid, activeWordIdx, placed]
  );

  const handleCellFocus = useCallback(
    (row: number, col: number) => {
      const cell = grid[row]?.[col];
      if (!cell) return;
      // Finde passendes Wort (bevorzuge das aktive, sonst das erste)
      if (
        activeWordIdx !== null &&
        cell.wordIndices.includes(activeWordIdx)
      ) {
        return; // Bleibt beim aktiven Wort
      }
      setActiveWordIdx(cell.wordIndices[0]);
    },
    [grid, activeWordIdx]
  );

  // Ergebnis prüfen
  const wordResults = useMemo(() => {
    if (!checked) return [];
    return placed.map((p) => {
      let correct = true;
      for (let i = 0; i < p.word.length; i++) {
        const r = p.direction === "down" ? p.row + i : p.row;
        const c = p.direction === "across" ? p.col + i : p.col;
        if (userGrid[r][c] !== p.word[i]) {
          correct = false;
          break;
        }
      }
      return correct;
    });
  }, [checked, placed, userGrid]);

  const correctCount = wordResults.filter(Boolean).length;
  const allCorrect = correctCount === placed.length;

  // Zelle: korrekt/falsch nach Check
  const getCellStatus = useCallback(
    (row: number, col: number): "correct" | "wrong" | "none" => {
      if (!checked) return "none";
      const cell = grid[row]?.[col];
      if (!cell) return "none";
      return userGrid[row][col] === cell.letter ? "correct" : "wrong";
    },
    [checked, grid, userGrid]
  );

  // Zellegröße berechnen (passt sich an Breite an)
  const cellSize = Math.min(38, Math.floor(320 / width));

  // Clues aufteilen in Waagerecht/Senkrecht
  const acrossClues = placed.filter((p) => p.direction === "across");
  const downClues = placed.filter((p) => p.direction === "down");

  return (
    <div className="space-y-5 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      {/* Grid */}
      <div className="flex justify-center overflow-x-auto -mx-4 px-4">
        <div
          className="inline-grid gap-[2px]"
          style={{
            gridTemplateColumns: `repeat(${width}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${height}, ${cellSize}px)`,
          }}
        >
          {Array.from({ length: height }, (_, row) =>
            Array.from({ length: width }, (_, col) => {
              const cell = grid[row]?.[col];
              if (!cell) {
                return (
                  <div
                    key={`${row}-${col}`}
                    style={{ width: cellSize, height: cellSize }}
                  />
                );
              }

              const isActive = activeCells.has(`${row},${col}`);
              const status = getCellStatus(row, col);

              return (
                <div
                  key={`${row}-${col}`}
                  className={`relative border transition-colors ${
                    status === "correct"
                      ? "border-[#30D158] bg-[#30D158]/10"
                      : status === "wrong"
                        ? "border-[#FF3B30] bg-[#FF3B30]/10"
                        : isActive
                          ? "border-[#0071e3] bg-[#0071e3]/5"
                          : "border-[#d2d2d7] bg-white"
                  }`}
                  style={{ width: cellSize, height: cellSize }}
                >
                  {/* Nummer */}
                  {cell.number && (
                    <span
                      className="absolute font-bold text-[#0071e3] leading-none"
                      style={{
                        fontSize: Math.max(8, cellSize * 0.25),
                        top: 1,
                        left: 2,
                      }}
                    >
                      {cell.number}
                    </span>
                  )}
                  <input
                    ref={(el) => {
                      if (!cellRefs.current[row]) cellRefs.current[row] = [];
                      cellRefs.current[row][col] = el;
                    }}
                    type="text"
                    inputMode="text"
                    autoComplete="off"
                    autoCapitalize="characters"
                    value={
                      checked && status === "wrong"
                        ? cell.letter
                        : userGrid[row]?.[col] || ""
                    }
                    onChange={(e) => handleCellInput(row, col, e.target.value)}
                    onKeyDown={(e) => handleCellKeyDown(row, col, e)}
                    onFocus={() => handleCellFocus(row, col)}
                    readOnly={checked}
                    className={`w-full h-full text-center font-bold uppercase bg-transparent focus:outline-none ${
                      checked && status === "wrong"
                        ? "text-[#FF3B30]"
                        : "text-[#1d1d1f]"
                    }`}
                    style={{
                      fontSize: Math.max(12, cellSize * 0.5),
                      paddingTop: cell.number ? Math.max(4, cellSize * 0.15) : 0,
                      caretColor: "#0071e3",
                    }}
                    maxLength={2}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Hinweise */}
      <div className="space-y-4">
        {acrossClues.length > 0 && (
          <div>
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-xs">→</span>
              Waagerecht
            </h3>
            <div className="space-y-1.5">
              {acrossClues.map((p) => (
                <button
                  key={`a-${p.number}`}
                  onClick={() => {
                    setActiveWordIdx(placed.indexOf(p));
                    cellRefs.current[p.row]?.[p.col]?.focus();
                  }}
                  className={`w-full text-left rounded-xl px-3 py-2.5 text-sm transition-all ${
                    activeWordIdx !== null && placed[activeWordIdx] === p
                      ? "bg-[#0071e3]/10 border border-[#0071e3]/20"
                      : "bg-[#f5f5f7] border border-transparent"
                  } ${
                    checked && wordResults[placed.indexOf(p)]
                      ? "opacity-60 line-through"
                      : ""
                  }`}
                >
                  <span className="font-bold text-[#0071e3] mr-2">{p.number}.</span>
                  {p.clue}
                  <span className="text-[#86868b] ml-1">({p.word.length})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {downClues.length > 0 && (
          <div>
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-xs">↓</span>
              Senkrecht
            </h3>
            <div className="space-y-1.5">
              {downClues.map((p) => (
                <button
                  key={`d-${p.number}`}
                  onClick={() => {
                    setActiveWordIdx(placed.indexOf(p));
                    cellRefs.current[p.row]?.[p.col]?.focus();
                  }}
                  className={`w-full text-left rounded-xl px-3 py-2.5 text-sm transition-all ${
                    activeWordIdx !== null && placed[activeWordIdx] === p
                      ? "bg-[#0071e3]/10 border border-[#0071e3]/20"
                      : "bg-[#f5f5f7] border border-transparent"
                  } ${
                    checked && wordResults[placed.indexOf(p)]
                      ? "opacity-60 line-through"
                      : ""
                  }`}
                >
                  <span className="font-bold text-[#0071e3] mr-2">{p.number}.</span>
                  {p.clue}
                  <span className="text-[#86868b] ml-1">({p.word.length})</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Prüfen / Weiter */}
      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              allCorrect
                ? "bg-[#30D158]/10 border border-[#30D158]/30"
                : "bg-[#FF9500]/10 border border-[#FF9500]/30"
            }`}
          >
            <p className="font-semibold">
              {allCorrect
                ? <>Alle Begriffe korrekt! <HandDrawnIcon name="celebration" size={18} color="#30D158" className="inline-block ml-1" /></>
                : `${correctCount}/${placed.length} richtig. Falsche Buchstaben sind rot markiert — die Lösung wird angezeigt.`}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(allCorrect)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
