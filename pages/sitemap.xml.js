import { SITE_URL, getSitemapEntries } from "@/lib/seo/siteRoutes";

// Key service pages that have important hero images worth indexing
const PAGE_IMAGES = {
  "/": {
    loc: `${SITE_URL}/home/u-copy.png`,
    title: "Prem Industries Manufacturing Facility",
  },
  "/sheet-metal-components": {
    loc: `${SITE_URL}/sheetmetal/press-new.jpg`,
    title: "Sheet Metal Components - Press Shop",
  },
  "/injection-molding": {
    loc: `${SITE_URL}/injectionmolding/injection.webp`,
    title: "Injection Moulding Facility",
  },
  "/press-shop": {
    loc: `${SITE_URL}/sheetmetal/press-new.jpg`,
    title: "Press Shop Services - Prem Industries",
  },
  "/ctl-machine": {
    loc: `${SITE_URL}/sheetmetal/ctl-1.jpg`,
    title: "Cut-to-Length Machine Services",
  },
  "/shearing-machine": {
    loc: `${SITE_URL}/sheetmetal/shearing-1.jpg`,
    title: "Shearing Machine Services",
  },
  "/slitting-machine": {
    loc: `${SITE_URL}/sheetmetal/slitting-1.jpg`,
    title: "Slitting Machine Services",
  },
};

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

function buildImageTag(url) {
  const img = PAGE_IMAGES[url];
  if (!img) return "";
  return `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`;
}

function buildXml(entries) {
  const items = entries
    .map(
      ({ url, lastmod }) => `  <url>
    <loc>${SITE_URL}${url === "/" ? "" : url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangeFreq(url)}</changefreq>
    <priority>${getPriority(url)}</priority>
${buildImageTag(url)}  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${items}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const xml = buildXml(getSitemapEntries());

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200",
  );
  res.write(xml);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  return null;
}
