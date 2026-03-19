import { SITE_URL, getSitemapRoutes } from "@/lib/seo/siteRoutes";

function getPriority(url) {
  if (url === "/") return "1.0";
  if (url.startsWith("/case-studies/")) return "0.8";
  const depth = url.split("/").filter(Boolean).length;
  if (depth > 1) return "0.7";
  return "0.9";
}

function getChangeFreq(url) {
  if (url === "/") return "daily";
  if (url.startsWith("/case-studies/")) return "monthly";
  return "weekly";
}

function buildXml(urls) {
  const now = new Date().toISOString();

  const items = urls
    .map(
      (url) => `  <url>
    <loc>${SITE_URL}${url === "/" ? "" : url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${getChangeFreq(url)}</changefreq>
    <priority>${getPriority(url)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const xml = buildXml(getSitemapRoutes());

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
