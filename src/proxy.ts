import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-me";

// In-memory rate limiter (resets on cold start — acceptable for a single-server store)
const authAttempts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = authAttempts.get(ip);
  if (!record || now > record.resetAt) {
    authAttempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  record.count++;
  return record.count > RATE_LIMIT;
}

function getIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

function verifyAdminToken(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Bearer ")) return false;
  try {
    const payload = jwt.verify(auth.slice(7), JWT_SECRET) as { role?: string };
    return payload?.role === "admin";
  } catch {
    return false;
  }
}

export function proxy(req: NextRequest) {
  const { pathname, host } = req.nextUrl;
  const method = req.method;

  // Rate-limit brute-force on auth endpoints
  if (pathname.startsWith("/api/auth/")) {
    if (isRateLimited(getIp(req))) {
      return NextResponse.json(
        { error: "Too many requests. Try again in 15 minutes." },
        { status: 429, headers: { "Retry-After": "900" } }
      );
    }
  }

  // Server-side guard for admin API routes (defense-in-depth on top of per-route checks)
  if (pathname.startsWith("/api/admin/")) {
    if (!verifyAdminToken(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // CSRF origin check: reject cross-origin state-changing API calls
  if (
    ["POST", "PUT", "PATCH", "DELETE"].includes(method) &&
    pathname.startsWith("/api/")
  ) {
    const origin = req.headers.get("origin");
    if (origin) {
      try {
        const originHost = new URL(origin).host;
        if (originHost !== host) {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }
      } catch {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
