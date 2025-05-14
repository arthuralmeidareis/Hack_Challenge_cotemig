import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "./lib/jwt"

// Paths that require authentication
const PROTECTED_PATHS = ["/api/lectures", "/api/users"]

// Paths that are exceptions (don't require auth)
const PUBLIC_PATHS = ["/api/auth/login", "/api/auth/register", "/api/check-in"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if path is public
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // Check if path is protected
  if (PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
    // For GET requests to /api/lectures, allow public access
    if (pathname.startsWith("/api/lectures") && request.method === "GET") {
      return NextResponse.next()
    }

    // Get authorization header
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Token de autenticação não fornecido" }, { status: 401 })
    }

    // Extract token
    const token = authHeader.split(" ")[1]

    // Verify token
    const { valid } = verifyToken(token)

    if (!valid) {
      return NextResponse.json({ error: "Token de autenticação inválido" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*"],
}
