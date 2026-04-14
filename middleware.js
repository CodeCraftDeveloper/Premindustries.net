import { NextResponse } from "next/server";
import { normalizeRoutePath } from "@/lib/seo/routeRules";

const CANONICAL_HOST = "premindustries.net";
const LEGACY_HOSTS = new Set([
  "premindustries.in",
  "www.premindustries.in",
  "permindustries.in",
  "www.permindustries.in",
  "www.premindustries.net",
]);

export function middleware(request) {
  const hostHeader = request.headers.get("host");
  const host = hostHeader ? hostHeader.toLowerCase() : "";
  const hostWithoutPort = host.replace(/:\d+$/, "");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const redirectUrl = request.nextUrl.clone();
  let shouldRedirect = false;
  const isLocalHost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]") ||
    host.includes(".devtunnels.") ||
    host.includes(".ngrok.") ||
    host.includes(".local");

  if (isLocalHost) {
    return NextResponse.next();
  }

  if (forwardedProto && forwardedProto.split(",")[0].trim() !== "https") {
    redirectUrl.protocol = "https";
    shouldRedirect = true;
  }

  if (LEGACY_HOSTS.has(hostWithoutPort) || hostWithoutPort === "") {
    redirectUrl.protocol = "https";
    redirectUrl.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (hostWithoutPort === CANONICAL_HOST && host.endsWith(":3000")) {
    redirectUrl.protocol = "https";
    redirectUrl.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  const { pathname } = redirectUrl;
  const hasFileExtension = /\/[^/]+\.[^/]+$/.test(pathname);
  const normalizedPathname = hasFileExtension
    ? pathname.replace(/\/{2,}/g, "/")
    : normalizeRoutePath(pathname);

  if (normalizedPathname !== pathname) {
    redirectUrl.pathname = normalizedPathname;
    shouldRedirect = true;
  }

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
