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
  const publicHostname = hostToken.replace(/:\d+$/, "");
  const forwardedProtoHeader = request.headers.get("x-forwarded-proto");
  const forwardedProto = forwardedProtoHeader
    ? forwardedProtoHeader.split(",")[0].trim().toLowerCase()
    : "";
  const redirectUrl = request.nextUrl.clone();
  const requestedHostname = redirectUrl.hostname.toLowerCase();
  const requestedPort = redirectUrl.port;
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

  const targetHostname =
    !publicHostname || LEGACY_HOSTS.has(publicHostname)
      ? CANONICAL_HOST
      : publicHostname;

  if (targetHostname !== requestedHostname) {
    redirectUrl.protocol = "https";
    redirectUrl.hostname = targetHostname;
    redirectUrl.port = "";
    shouldRedirect = true;
  }

  if (requestedPort) {
    redirectUrl.protocol = "https";
    redirectUrl.port = "";
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
