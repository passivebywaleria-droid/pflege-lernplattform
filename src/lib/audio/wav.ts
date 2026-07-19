/**
 * WAV-Encoder: Float32-Samples → WAV-Container (16-bit PCM, mono).
 *
 * Warum client-seitig WAV? Der Browser nimmt je nach Engine unterschiedlich
 * auf (Chrome/Android: webm/opus, iOS Safari: mp4/aac). Azure STT (REST,
 * Short Audio) versteht davon nicht alle — WAV PCM 16 kHz versteht es immer.
 * decodeAudioData kann jedes Format dekodieren, das der Browser selbst
 * aufgenommen hat → ein Pfad für alle Geräte.
 */

/**
 * Lineares Resampling auf eine Ziel-Rate (mono). Nötig, weil iOS Safari
 * AudioContext({sampleRate: 16000}) nicht überall respektiert (Kontext läuft
 * dann auf 44,1/48 kHz) — Whisper braucht zwingend 16 kHz.
 */
export function resampleLinear(
  samples: Float32Array,
  fromRate: number,
  toRate: number
): Float32Array {
  if (fromRate === toRate) return samples;
  const outLength = Math.max(1, Math.round((samples.length * toRate) / fromRate));
  const out = new Float32Array(outLength);
  const step = (samples.length - 1) / Math.max(1, outLength - 1);
  for (let i = 0; i < outLength; i++) {
    const pos = i * step;
    const i0 = Math.floor(pos);
    const i1 = Math.min(i0 + 1, samples.length - 1);
    const frac = pos - i0;
    out[i] = samples[i0] * (1 - frac) + samples[i1] * frac;
  }
  return out;
}

/** Samples auf [-1, 1] klemmen und als 16-bit signed PCM schreiben. */
export function encodeWavPcm16(
  samples: Float32Array,
  sampleRate: number
): ArrayBuffer {
  const dataLength = samples.length * 2;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  const writeString = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) {
      view.setUint8(offset + i, s.charCodeAt(i));
    }
  };

  // RIFF-Header
  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataLength, true);
  writeString(8, "WAVE");
  // fmt-Chunk (PCM, mono)
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); // Byte-Rate (mono, 16 bit)
  view.setUint16(32, 2, true); // Block-Align
  view.setUint16(34, 16, true); // Bits pro Sample
  // data-Chunk
  writeString(36, "data");
  view.setUint32(40, dataLength, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const clamped = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
  }

  return buffer;
}
