import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { encodeWavPcm16 } from "@/lib/audio/wav";
import { pickRecorderMimeType } from "@/hooks/use-recorder";
import { POST as sttPost } from "@/app/api/stt/route";
import { NextRequest } from "next/server";

describe("encodeWavPcm16", () => {
  it("schreibt einen gültigen RIFF/WAVE-Header mit 16 kHz mono", () => {
    const samples = new Float32Array([0, 0.5, -0.5, 1, -1]);
    const buf = encodeWavPcm16(samples, 16000);
    const view = new DataView(buf);
    const ascii = (o: number, n: number) =>
      String.fromCharCode(...new Uint8Array(buf, o, n));

    expect(buf.byteLength).toBe(44 + samples.length * 2);
    expect(ascii(0, 4)).toBe("RIFF");
    expect(ascii(8, 4)).toBe("WAVE");
    expect(ascii(36, 4)).toBe("data");
    expect(view.getUint16(20, true)).toBe(1); // PCM
    expect(view.getUint16(22, true)).toBe(1); // mono
    expect(view.getUint32(24, true)).toBe(16000);
    expect(view.getUint32(40, true)).toBe(samples.length * 2);
  });

  it("klemmt Samples auf [-1, 1] und skaliert auf Int16", () => {
    const buf = encodeWavPcm16(new Float32Array([2, -2, 1, -1, 0]), 16000);
    const view = new DataView(buf);
    expect(view.getInt16(44, true)).toBe(0x7fff); // 2 → geklemmt auf 1
    expect(view.getInt16(46, true)).toBe(-0x8000); // -2 → geklemmt auf -1
    expect(view.getInt16(48, true)).toBe(0x7fff);
    expect(view.getInt16(50, true)).toBe(-0x8000);
    expect(view.getInt16(52, true)).toBe(0);
  });
});

describe("pickRecorderMimeType", () => {
  it("wählt webm/opus wenn unterstützt (Chrome/Android)", () => {
    expect(pickRecorderMimeType((t) => t.startsWith("audio/webm"))).toBe(
      "audio/webm;codecs=opus"
    );
  });

  it("fällt auf audio/mp4 zurück (iOS Safari kennt kein webm)", () => {
    expect(pickRecorderMimeType((t) => t === "audio/mp4")).toBe("audio/mp4");
  });

  it("gibt undefined zurück wenn nichts passt (Browser entscheidet)", () => {
    expect(pickRecorderMimeType(() => false)).toBeUndefined();
  });
});

describe("POST /api/stt", () => {
  const origEnv = { ...process.env };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    process.env.AZURE_SPEECH_KEY = origEnv.AZURE_SPEECH_KEY;
    process.env.AZURE_SPEECH_REGION = origEnv.AZURE_SPEECH_REGION;
    process.env.AZURE_SPEECH_STT_ENDPOINT = origEnv.AZURE_SPEECH_STT_ENDPOINT;
  });

  const makeRequest = (bytes: number) =>
    new NextRequest("http://localhost/api/stt", {
      method: "POST",
      headers: { "Content-Type": "audio/wav" },
      body: new Uint8Array(bytes),
    });

  it("meldet 503 wenn Azure nicht konfiguriert ist", async () => {
    delete process.env.AZURE_SPEECH_KEY;
    delete process.env.AZURE_SPEECH_REGION;
    delete process.env.AZURE_SPEECH_STT_ENDPOINT;
    const res = await sttPost(makeRequest(2000));
    expect(res.status).toBe(503);
  });

  it("gibt DisplayText als text zurück", async () => {
    process.env.AZURE_SPEECH_KEY = "test-key";
    process.env.AZURE_SPEECH_STT_ENDPOINT = "https://mock.example/stt";
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({
          RecognitionStatus: "Success",
          DisplayText: "Hier ist Station 3.",
        }),
        { status: 200 }
      )
    );

    const res = await sttPost(makeRequest(2000));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ text: "Hier ist Station 3." });

    const [url, init] = fetchSpy.mock.calls[0];
    expect(String(url)).toContain("language=de-DE");
    expect(
      (init?.headers as Record<string, string>)["Ocp-Apim-Subscription-Key"]
    ).toBe("test-key");
  });

  it("gibt leeren text zurück wenn Azure nichts erkannt hat", async () => {
    process.env.AZURE_SPEECH_KEY = "test-key";
    process.env.AZURE_SPEECH_STT_ENDPOINT = "https://mock.example/stt";
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(
        JSON.stringify({ RecognitionStatus: "InitialSilenceTimeout" }),
        { status: 200 }
      )
    );

    const res = await sttPost(makeRequest(2000));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ text: "" });
  });

  it("lehnt zu kurze und zu lange Aufnahmen ab", async () => {
    process.env.AZURE_SPEECH_KEY = "test-key";
    process.env.AZURE_SPEECH_STT_ENDPOINT = "https://mock.example/stt";
    expect((await sttPost(makeRequest(10))).status).toBe(400);
    expect((await sttPost(makeRequest(3 * 1024 * 1024))).status).toBe(413);
  });

  it("meldet 502 bei Azure-Fehler", async () => {
    process.env.AZURE_SPEECH_KEY = "test-key";
    process.env.AZURE_SPEECH_STT_ENDPOINT = "https://mock.example/stt";
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response("nope", { status: 401 })
    );
    expect((await sttPost(makeRequest(2000))).status).toBe(502);
  });
});
