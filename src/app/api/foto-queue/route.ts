import { NextRequest, NextResponse } from "next/server";
import * as fs from "fs";
import * as path from "path";

export async function GET(request: NextRequest) {
  const le = request.nextUrl.searchParams.get("le");

  if (!le || !/^le-\d{2}$/.test(le)) {
    return NextResponse.json(
      { error: "Parameter 'le' fehlt oder ungültig (Format: le-01)" },
      { status: 400 }
    );
  }

  const queuePath = path.join(process.cwd(), "content", le, "foto-queue.json");

  if (!fs.existsSync(queuePath)) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const data = JSON.parse(fs.readFileSync(queuePath, "utf-8"));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "foto-queue.json konnte nicht gelesen werden" },
      { status: 500 }
    );
  }
}
