export const DEFAULT_SITE_URL = "https://premindustries.in";

function normalizeSiteUrl(url) {
  if (!url || typeof url !== "string") {
    return DEFAULT_SITE_URL;
  }

  const trimmed = url.trim().replace(/\/$/, "");
  if (!/^https?:\/\//i.test(trimmed)) {
    return DEFAULT_SITE_URL;
  }

  return trimmed;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
);
