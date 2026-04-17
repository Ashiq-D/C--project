import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ── Simple Rate Limiter (in-memory, per-instance) ──
// For production at scale, use Redis-backed rate limiting (e.g., @upstash/ratelimit)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 120; // 120 requests per minute per IP

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(key);

  if (!record || now > record.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  record.count++;
  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  return false;
}

// Clean up stale entries every 5 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimit.entries()) {
    if (now > value.resetTime) {
      rateLimit.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip rate limiting for static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js")
  ) {
    return NextResponse.next();
  }

  // ── Rate Limiting ──
  const clientKey = getRateLimitKey(request);

  if (isRateLimited(clientKey)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": "60",
        "Content-Type": "text/plain",
      },
    });
  }

  // ── Bot / Suspicious Request Blocking ──
  const userAgent = request.headers.get("user-agent") || "";

  // Block known malicious scanners and empty user agents
  const blockedBots = [
    "sqlmap",       // SQL injection scanner
    "nikto",        // Web vulnerability scanner
    "nmap",         // Network scanner
    "masscan",      // Mass port scanner
    "dirbuster",    // Directory brute-forcer
    "gobuster",     // Directory brute-forcer
    "wpscan",       // WordPress scanner (irrelevant to your site)
    "havij",        // SQL injection tool
    "acunetix",     // Vulnerability scanner
  ];

  const lowerUA = userAgent.toLowerCase();
  if (!userAgent || blockedBots.some((bot) => lowerUA.includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── Block Suspicious Paths ──
  // Attackers commonly probe for these paths on every website
  const blockedPaths = [
    "/wp-admin",
    "/wp-login",
    "/wp-content",
    "/xmlrpc.php",
    "/phpmyadmin",
    "/admin.php",
    "/.env",
    "/config.php",
    "/shell",
    "/cmd",
    "/eval",
    "/console",
  ];

  if (blockedPaths.some((p) => pathname.toLowerCase().startsWith(p))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
