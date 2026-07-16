/**
 * OfflinePilotCache — stilles Vorcachen der Situations-Dokumente einer CE
 * für den Klassenzimmer-Pilot (Kern-Loop offline).
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import {
  OfflinePilotCache,
  situationUrls,
  warmSituationCache,
} from "@/components/learn/offline-pilot-cache";

function mockCaches() {
  const put = vi.fn().mockResolvedValue(undefined);
  const open = vi.fn().mockResolvedValue({ put });
  vi.stubGlobal("caches", { open });
  return { open, put };
}

describe("situationUrls", () => {
  it("baut Player-URLs mit und ohne ?ce=-Query", () => {
    const urls = situationUrls("de", "ce-06", ["ls-wagner-reanimation"]);
    expect(urls).toEqual([
      "/de/lernen/situation/ls-wagner-reanimation?ce=ce-06",
      "/de/lernen/situation/ls-wagner-reanimation",
    ]);
  });
});

describe("warmSituationCache", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("legt alle erreichbaren Dokumente in den lektion-pages-Cache", async () => {
    const { open, put } = mockCaches();
    const count = await warmSituationCache("de", "ce-06", ["ls-a", "ls-b"]);
    expect(open).toHaveBeenCalledWith("lektion-pages");
    expect(put).toHaveBeenCalledTimes(4); // 2 Situationen × (mit + ohne Query)
    expect(count).toBe(4);
  });

  it("ignoriert Einzelfehler und cached den Rest weiter", async () => {
    const { put } = mockCaches();
    (fetch as ReturnType<typeof vi.fn>)
      .mockRejectedValueOnce(new Error("network"))
      .mockResolvedValue({ ok: true });
    const count = await warmSituationCache("de", "ce-06", ["ls-a"]);
    expect(count).toBe(1);
    expect(put).toHaveBeenCalledTimes(1);
  });
});

describe("OfflinePilotCache", () => {
  beforeEach(() => {
    const store: Record<string, string> = {};
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => {
        store[k] = v;
      },
      removeItem: (k: string) => {
        delete store[k];
      },
    });
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
    Object.defineProperty(navigator, "serviceWorker", {
      configurable: true,
      value: { ready: Promise.resolve({}) },
    });
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("wärmt den Cache nach SW-ready und drosselt auf 1× pro Tag", async () => {
    const { put } = mockCaches();
    const { unmount } = render(
      <OfflinePilotCache locale="de" ceId="ce-06" situationIds={["ls-a"]} />
    );
    await waitFor(() => expect(put).toHaveBeenCalledTimes(2));
    unmount();

    // Zweiter Mount am selben Tag → gedrosselt, kein weiterer fetch
    put.mockClear();
    (fetch as ReturnType<typeof vi.fn>).mockClear();
    render(
      <OfflinePilotCache locale="de" ceId="ce-06" situationIds={["ls-a"]} />
    );
    await new Promise((r) => setTimeout(r, 50));
    expect(fetch).not.toHaveBeenCalled();
    expect(put).not.toHaveBeenCalled();
  });

  it("rendert nichts sichtbares", () => {
    mockCaches();
    const { container } = render(
      <OfflinePilotCache locale="de" ceId="ce-06" situationIds={[]} />
    );
    expect(container.innerHTML).toBe("");
  });
});
