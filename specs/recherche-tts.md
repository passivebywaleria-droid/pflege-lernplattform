# TTS-Recherche: Text-to-Speech für Pflege-Lernplattform

**Stand:** 2026-03-21
**Zweck:** Pflegeschüler (teils B1-Niveau) hören Fachbegriffe korrekt ausgesprochen
**Sprache:** Deutsch (de-DE), natürliche Qualität, kein Roboterklang

---

## 1. Web Speech API (Browser-eingebaut)

**Wie:** `window.speechSynthesis` — läuft komplett im Browser, kein Server nötig
**Kosten:** 0 € — immer

**Verfügbarkeit deutschsprachiger Stimmen:**
- **Chrome/Edge (Desktop):** Sehr gut — greift auf OS-Systemstimmen zu, listet alle installierten Stimmen auf. Unter Windows: Microsoft Katja/Hedda (neural-klingend). Unter macOS: Anna.
- **Safari:** Problematisch — listet installierte Qualitätsstimmen oft NICHT auf, Anna-Stimme teils verschwunden nach Updates. Unzuverlässig.
- **Firefox:** Nutzt OS-Stimmen, Qualität variiert je nach Betriebssystem. Auf Android oft nur Espeak (klingt roboterhaft).
- **Mobile Chrome (Android):** Google DE-Stimme — akzeptabel bis gut.
- **Mobile Safari (iOS):** Anna (kompakt) — mittelmäßig, aber nutzbar.

**Fazit:** Kostenlos, aber inkonsistent. Auf Smartphones der Schüler funktioniert es, klingt aber je nach Gerät sehr unterschiedlich. Nicht produkionsreif als einzige Lösung. Gut als **Fallback**.

---

## 2. Google Cloud Text-to-Speech

**API:** `cloud.google.com/text-to-speech`
**Deutschen Stimmen:**
- `de-DE-Neural2-*` (A–F) — höchste Qualität, natürlich, ausdrucksstark
- `de-DE-Wavenet-*` — sehr gut, leicht älter
- `de-DE-Standard-*` — hörbar synthetisch

**Free Tier:**
- Standard-Stimmen: **4 Mio. Zeichen/Monat** kostenlos
- WaveNet/Neural2-Stimmen: **1 Mio. Zeichen/Monat** kostenlos
- Danach: ~0,016 $/1000 Zeichen (Neural2)

**Qualität:** Neural2 ist exzellent für Deutsch — klare Aussprache, gutes Intonationsmuster, medizinische Begriffe meist korrekt. Eines der besten auf dem Markt.

**Einschränkung:** Braucht API-Key (Server-seitig aufrufen, nie im Frontend exponieren). Google-Infrastruktur (US-Firma) — DSGVO-Konformität über EU-Vertragsklauseln möglich, aber nicht ideal.

**Bewertung: 8/10**

---

## 3. Azure Cognitive Services (Microsoft)

**API:** `azure.microsoft.com/speech-services`
**Deutsche Stimmen:**
- `de-DE-KatjaNeural` — weiblich, sehr natürlich, Standard-Empfehlung
- `de-DE-ConradNeural` — männlich, solide (Emotion-Styles fehlerhaft, neutraler Ton gut)
- `de-DE-AmalaNeural`, `de-DE-BerndNeural` u.v.m. — 25+ DE-Stimmen
- HD-Stimmen (nicht im Free Tier): noch natürlicher

**Free Tier (F0):**
- **500.000 Zeichen/Monat** Neural TTS kostenlos (dauerhaft, kein Zeitlimit)
- Danach: ~0,016 $/1000 Zeichen

**Qualität:** KatjaNeural gilt als eine der besten deutschen TTS-Stimmen überhaupt — sehr natürlich, gut für Fachterminologie, kaum synthetischer Eindruck. Qualitätsunterschied zu Google Neural2 minimal.

**SSML-Support:** Ja — Betonung, Pausen, Aussprachesteuerung für Fachbegriffe per `<phoneme>` möglich.

**Einschränkung:** Microsoft-Infrastruktur (US-Firma), aber EU-Rechenzentren verfügbar. Für DSGVO: Azure-Serverstandort Deutschland/EU wählbar.

**Bewertung: 9/10** ← Top-Empfehlung für Cloud-TTS

---

## 4. Amazon Polly

**Deutsche Stimmen:** Vicki (Neural, weiblich), Hans (Standard), Marlene (Standard)
**Free Tier (erste 12 Monate):**
- Neural: **1 Mio. Zeichen/Monat**
- Standard: **5 Mio. Zeichen/Monat**
- Danach: ~0,016 $/1000 Zeichen (Neural)

**Qualität:** Vicki (Neural) ist gut, aber Deutsche Muttersprachler bewerten sie meist schlechter als Azure KatjaNeural oder Google Neural2. Intonation klingt gelegentlich unnatürlich bei langen Sätzen.

**Einschränkung:** AWS (US), kein permanentes Free Tier (nur 12 Monate)

**Bewertung: 7/10**

---

## 5. ElevenLabs

**Deutsche Stimmen:** Klonbare Stimmen, sehr hohe Qualität
**Free Tier:** Nur **10.000 Zeichen/Monat** — zu wenig für produktive Nutzung
**Preis danach:** Ab 5 $/Monat (30.000 Zeichen)
**Kommerzielle Nutzung:** Nicht im Free Tier erlaubt

**Fazit:** Beste verfügbare Qualität, aber Free Tier völlig unzureichend für eine Lernplattform. Für Produktion zu teuer im Verhältnis zum Nutzen wenn Azure/Google ausreichen.

**Bewertung: 5/10** (wegen Kosten/Limit)

---

## 6. Microsoft Edge-TTS (open-source Python-Wrapper)

**Was:** Inoffizielle Python/Node-Bibliothek, die die Edge-Browser-TTS-API anzapft
**Qualität:** Identisch mit Azure Neural (KatjaNeural etc.) — exzellent
**Kosten:** 0 € — aber **rechtlich grau**

**Problem:** Microsoft Q&A bestätigt: Nutzung des Edge-TTS-Wrappers für kommerzielle Web-Apps verstößt gegen die ToS. Empfehlung von Microsoft: Offizielle Azure Speech API nutzen. Für eine B2B-Plattform mit 149 €/Schüler/Jahr ist das juristische Risiko nicht tragbar.

**Fazit:** Nur für persönliche Tests / Prototypen. Niemals für Produktion.

---

## 7. Open-Source Browser-TTS (Piper, Coqui/VITS)

**Piper TTS:**
- Läuft per WASM im Browser — kein Server nötig
- Deutsches Modell verfügbar (`de_DE-thorsten-*`)
- Qualität: Gut für open-source, aber klingt leicht roboterhaft im Vergleich zu Azure/Google Neural
- Modell-Download: 50–100 MB beim ersten Laden — schlechte UX auf Mobile
- MIT-Lizenz, keine laufenden Kosten

**Coqui TTS (VITS):**
- `tts_models/deu/fairseq/vits` für Deutsch
- Firma geschlossen (Dez. 2024), Community-Fork aktiv
- Für Browser: WASM-Build existiert aber instabil und groß
- Eher für Server-seitige Nutzung geeignet

**Fazit:** Interessant für Datenschutz-MaximalistInnen oder Offline-Szenarien, aber zu großes Modell (schlechte Mobile-UX) und nicht top Qualität für Medizin-Aussprache.

**Bewertung: 6/10** (als primäre Lösung)

---

## 8. Wie machen es andere Pflegelernplattformen?

- **MediLingo** (UK): Vorproduzierte Audio-Dateien + eigene Aussprache-Aufnahmen der Fachbegriffe
- **MyLab Medical Terminology** (Pearson): TTS + Schüler spricht nach, KI bewertet Aussprache
- **ReadSpeaker**: Kommerzieller TTS-Dienst speziell für eLearning, custom pronunciation dictionaries für medizinische Begriffe — zu teuer für Start
- **Standard-Ansatz:** Cloud-TTS (Azure/Google) mit vorproduzierter Audio für kritische Fachbegriffe, SSML für Betonung

**Key Learning:** Für Fachbegriffe empfehlen Experten eine **Aussprache-Whitelist** / custom pronunciation dictionary, weil TTS bei lateinischen/griechischen Medizinbegriffen ohne Training versagen kann. Azure und Google unterstützen beide SSML `<phoneme>` Tags.

---

## 9. Next.js-Integration

### Option A: Web Speech API (Client-only, kein Server)
```typescript
// hooks/useTTS.ts
export function useTTS() {
  const speak = (text: string, lang = 'de-DE') => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9; // etwas langsamer für Lernende
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de'));
    if (deVoice) utterance.voice = deVoice;
    window.speechSynthesis.speak(utterance);
  };
  return { speak };
}
```

### Option B: Azure TTS via Next.js API Route (empfohlen)
```typescript
// app/api/tts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  const ssml = `<speak version='1.0' xml:lang='de-DE'>
    <voice name='de-DE-KatjaNeural'>${text}</voice>
  </speak>`;
  const response = await fetch(
    `https://${process.env.AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
    {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.AZURE_SPEECH_KEY!,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
      },
      body: ssml,
    }
  );
  const audioBuffer = await response.arrayBuffer();
  return new NextResponse(audioBuffer, {
    headers: { 'Content-Type': 'audio/mpeg' },
  });
}
```

### Caching-Strategie (wichtig für Kosten)
- Fachbegriffe (ca. 500 Stück) einmal generieren, als `.mp3` speichern → Hetzner Storage
- Nur dynamischer Text (KI-Feedback) geht live durch die TTS-API
- Spart 80-90% der API-Aufrufe

---

## Empfehlung (Fazit)

| Lösung | Qualität | Kosten | DSGVO | Empfehlung |
|--------|----------|--------|-------|------------|
| Azure KatjaNeural | ★★★★★ | 500k Zeichen/Mo gratis | EU-Rechenzentrum wählbar | **Primär** |
| Google Neural2 | ★★★★★ | 1M Zeichen/Mo gratis | EU-Vertragsklauseln | Backup/Alternative |
| Web Speech API | ★★★☆☆ | Gratis | Lokal | Fallback |
| Piper WASM | ★★★☆☆ | Gratis | Lokal/100% | Offline-Option |
| ElevenLabs | ★★★★★ | 10k Zeichen gratis | EU möglich | Zu teuer |
| Edge-TTS (inoffiziell) | ★★★★★ | Gratis | - | ToS-Verstoß |

**Konkrete Empfehlung für MVP (AKTUALISIERT 2026-03-21):**

1. **ElevenLabs (1 Account)** für einmalige Generierung der ~500 Pflege-Fachbegriffe als MP3
   - Qualität: MOS 4.14 (höchster aller Anbieter), natürlichere Prosodie als Azure
   - 500 Begriffe × ~20 Zeichen = ~10.000 Zeichen → passt in 1 Free-Tier-Monat
   - Pronunciation Dictionaries für lateinische/griechische Medizinbegriffe verfügbar
   - ⚠️ Multi-Account ist GEGEN ToS → Accounts werden auf gleicher IP geflaggt und gesperrt
   - ✅ 1 Account für einmalige Batch-Generierung ist legal und ausreichend
2. **Azure KatjaNeural** als laufende TTS-Engine für dynamischen Text (500k Zeichen/Mo dauerhaft gratis)
3. **Web Speech API** als clientseitiger Fallback (wenn Azure nicht erreichbar)
4. **Caching aller Fachbegriff-MP3s** auf Hetzner Object Storage (~1 €/Mo)
5. Azure SSML `<phoneme>` für Begriffe die NICHT vorproduziert sind

**Kostenschätzung Produktion (100 aktive Schüler/Mo):**
- ElevenLabs: 0 € (einmalig, bereits generiert und gecacht)
- Azure Free Tier: ausreichend für Betaphase
- Bei 1000 Schülern: ca. 5–8 €/Mo für Azure TTS (Caching vorausgesetzt)
