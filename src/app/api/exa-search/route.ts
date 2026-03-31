import { NextRequest, NextResponse } from "next/server";

const EXA_API_URL = "https://api.exa.ai/search";

// Nur wissenschaftliche Pflege-Domains (Whitelist)
const SCIENTIFIC_DOMAINS = [
  "awmf.org",
  "register.awmf.org",
  "dnqp.de",
  "pubmed.ncbi.nlm.nih.gov",
  "ncbi.nlm.nih.gov",
  "cochrane.org",
  "link.springer.com",
  "thieme-connect.com",
  "rki.de",
  "who.int",
  "dgrh.de",
  "dgppn.de",
  "dgkj.de",
  "deg-online.de",
];

interface ExaResult {
  title: string;
  url: string;
  text: string;
  publishedDate?: string;
  score: number;
}

interface ExaResponse {
  results: ExaResult[];
  costDollars?: { total: number };
}

export interface ExaSearchResult {
  query: string;
  results: {
    title: string;
    url: string;
    snippet: string;
    year?: string;
    domain: string;
  }[];
  cost: number;
  source: "exa" | "fallback";
}

/**
 * Exa AI Recherche-Route — Wissenschaftliche Quellensuche
 * Nur Whitelist-Domains (AWMF, DNQP, PubMed, Cochrane, etc.)
 * Ergebnisse sind Snippets zum Paraphrasieren, nie Volltext.
 */
export async function POST(request: NextRequest) {
  try {
    const { query, maxResults = 5 } = (await request.json()) as {
      query: string;
      maxResults?: number;
    };

    if (!query || typeof query !== "string" || query.trim().length < 3) {
      return NextResponse.json(
        { error: "query muss min. 3 Zeichen lang sein" },
        { status: 400 }
      );
    }

    const clampedMax = Math.min(Math.max(maxResults, 1), 10);

    // Key-Rotation: Key 1 → Key 2
    const key1 = process.env.EXA_API_KEY_1;
    const key2 = process.env.EXA_API_KEY_2;

    if (!key1 && !key2) {
      return NextResponse.json({
        query: query.trim(),
        results: [],
        cost: 0,
        source: "fallback",
        error: "Keine Exa API Keys konfiguriert",
      } satisfies ExaSearchResult & { error: string });
    }

    // Versuche Key 1, dann Key 2
    const keys = [key1, key2].filter(Boolean) as string[];
    for (const apiKey of keys) {
      const result = await searchExa(apiKey, query.trim(), clampedMax);
      if (result) return NextResponse.json(result);
    }

    return NextResponse.json(
      { error: "Beide Exa API Keys erschöpft. Neue Keys in .env.local eintragen." },
      { status: 402 }
    );
  } catch (error) {
    console.error("Exa-Search error:", error);
    return NextResponse.json(
      { error: "Exa-Suche fehlgeschlagen" },
      { status: 500 }
    );
  }
}

async function searchExa(
  apiKey: string,
  query: string,
  maxResults: number
): Promise<ExaSearchResult | null> {
  const response = await fetch(EXA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      query,
      numResults: maxResults,
      type: "auto",
      includeDomains: SCIENTIFIC_DOMAINS,
      contents: {
        text: { maxCharacters: 1000 },
      },
    }),
  });

  const body = await response.text();

  // Credit-Check
  if (body.includes("NO_MORE_CREDITS")) return null;
  if (!response.ok) return null;

  const data: ExaResponse = JSON.parse(body);

  return {
    query,
    results: (data.results ?? []).map((r) => ({
      title: r.title,
      url: r.url,
      snippet: r.text?.slice(0, 500) ?? "",
      year: r.publishedDate?.slice(0, 4),
      domain: new URL(r.url).hostname,
    })),
    cost: data.costDollars?.total ?? 0,
    source: "exa",
  };
}
