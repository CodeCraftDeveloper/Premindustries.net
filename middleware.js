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
  const forwardedHostHeader = request.headers.get("x-forwarded-host");
  const rawHost = (forwardedHostHeader || hostHeader || "").toLowerCase();
  const hostToken = rawHost.split(",")[0].trim();
  const hostWithoutPort = hostToken.replace(/:\d+$/, "");
  const forwardedProtoHeader = request.headers.get("x-forwarded-proto");
  const forwardedProto = forwardedProtoHeader
    ? forwardedProtoHeader.split(",")[0].trim().toLowerCase()
    : "";
  const redirectUrl = request.nextUrl.clone();
  let shouldRedirect = false;
  const isLocalHost =
    hostToken.startsWith("localhost") ||
    hostToken.startsWith("127.0.0.1") ||
    hostToken.startsWith("[::1]") ||
    hostToken.includes(".devtunnels.") ||
    hostToken.includes(".ngrok.") ||
    hostToken.includes(".local");

  if (isLocalHost) {
    return NextResponse.next();
  }

  if (forwardedProto && forwardedProto !== "https") {
    redirectUrl.protocol = "https";
    shouldRedirect = true;
  }

  if (LEGACY_HOSTS.has(hostWithoutPort) || hostWithoutPort === "") {
    redirectUrl.protocol = "https";
    redirectUrl.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (hostWithoutPort === CANONICAL_HOST && hostToken.includes(":")) {
    redirectUrl.protocol = "https";
    redirectUrl.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (hostWithoutPort && redirectUrl.host !== hostWithoutPort) {
    redirectUrl.host = hostWithoutPort;
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
