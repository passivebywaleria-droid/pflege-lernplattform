#!/usr/bin/env npx tsx
/**
 * Gemini API Client — Wrapper für Text-Generierung
 *
 * Nutzt Google Generative AI SDK mit API-Key von aistudio.google.com (kostenlos).
 *
 * Setup:
 *   1. aistudio.google.com → "Get API Key" → "Create API Key"
 *   2. In .env.local: GEMINI_API_KEY=AIza...
 *
 * Usage:
 *   npx tsx scripts/gemini-client.ts --test
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";

// --- API Key laden ---

function loadApiKey(): string {
  // 1. Umgebungsvariable
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  // 2. .env.local lesen
  const envPath = path.join(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf-8");
    const match = content.match(/^GEMINI_API_KEY=(.+)$/m);
    if (match?.[1]) return match[1].trim();
  }

  console.error("❌ Kein GEMINI_API_KEY gefunden.");
  console.error("   → aistudio.google.com → Get API Key → in .env.local eintragen");
  process.exit(1);
}

// --- Client ---

const genAI = new GoogleGenerativeAI(loadApiKey());

export type GeminiModel = "gemini-2.5-pro" | "gemini-2.5-flash";

export interface GeminiOptions {
  model?: GeminiModel;
  temperature?: number;
  maxOutputTokens?: number;
}

/**
 * Generiert Text mit Gemini.
 * Default: gemini-2.5-flash (schnell, 1500 Req/Tag Free Tier)
 * Für komplexe Aufgaben: gemini-2.5-pro (25 Req/Tag Free Tier)
 */
export async function geminiGenerate(
  prompt: string,
  options: GeminiOptions = {}
): Promise<string> {
  const {
    model = "gemini-2.5-flash",
    temperature = 0.7,
    maxOutputTokens = 8192,
  } = options;

  const geminiModel = genAI.getGenerativeModel({
    model,
    generationConfig: { temperature, maxOutputTokens },
  });

  const result = await geminiModel.generateContent(prompt);
  return result.response.text();
}

/**
 * Generiert strukturierten Output (JSON) mit Gemini.
 * Parst die Antwort automatisch.
 */
export async function geminiGenerateJSON<T = unknown>(
  prompt: string,
  options: GeminiOptions = {}
): Promise<T> {
  const fullPrompt = `${prompt}\n\nAntworte NUR mit validem JSON. Kein Markdown, keine Codeblöcke, nur JSON.`;
  const text = await geminiGenerate(fullPrompt, options);

  // JSON aus Markdown-Codeblock extrahieren falls nötig
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const jsonStr = jsonMatch ? jsonMatch[1].trim() : text.trim();

  return JSON.parse(jsonStr) as T;
}

// --- CLI-Test ---

async function testConnection() {
  console.log("🧪 Teste Gemini API-Verbindung...\n");

  try {
    const response = await geminiGenerate(
      "Antworte mit genau einem Satz auf Deutsch: Was ist ein Dekubitus?",
      { model: "gemini-2.5-flash", temperature: 0.3 }
    );
    console.log("✅ Gemini Flash:", response.trim());

    // Pro hat im Free Tier Quota 0 — nur testen wenn --pro Flag
    if (process.argv.includes("--pro")) {
      const response2 = await geminiGenerate(
        "Antworte mit genau einem Satz auf Deutsch: Was ist Dysphagie?",
        { model: "gemini-2.5-pro", temperature: 0.3 }
      );
      console.log("✅ Gemini Pro:", response2.trim());
    } else {
      console.log("ℹ️  Gemini Pro übersprungen (nutze --pro zum Testen)");
    }

    console.log("\n🎉 API funktioniert!");
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("❌ Fehler:", msg);
    if (msg.includes("API_KEY")) {
      console.error("   → Prüfe GEMINI_API_KEY in .env.local");
    }
    process.exit(1);
  }
}

// CLI-Modus
if (process.argv.includes("--test")) {
  testConnection();
}
