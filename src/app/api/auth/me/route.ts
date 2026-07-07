import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth/session"

// Öffentlicher Endpunkt (middleware apiPublicPaths enthält "/api/auth/").
// Erlaubt Client-Komponenten, den Login-Status zu erfragen — der
// Session-Cookie ist httpOnly und daher nicht per JS lesbar.
// DSGVO: gibt nur zurück OB eingeloggt + Rolle, keine personenbezogenen Daten.
export async function GET() {
  const session = await getSession()
  return NextResponse.json({
    authenticated: Boolean(session),
    role: session?.role ?? null,
  })
}
