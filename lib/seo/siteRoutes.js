import { getKeywordPaths } from "@/lib/seo/keywordFunnelMap";
import { directorySlugs } from "@/lib/seo/directoryPageData";
import { serviceDataMap } from "@/lib/seo/serviceDataMap";
import { blogPosts } from "@/lib/blogs/blogData";
import { BUILD_LASTMOD } from "@/lib/generated/buildMeta";
import { SITE_URL } from "@/lib/seo/siteConfig";
import { isIndexablePath } from "@/lib/seo/seoConfig";

export { SITE_URL };

const STATIC_ROUTES = [
  "/",
  "/about",
  "/clients",
  "/contact",
  "/career",
  "/blogs",
  "/privacy-policy",
  "/terms-and-conditions",
  "/about/prem-group",
  "/about/group-ecosystem",
  "/about/chairmans-office",
  "/about/leadership",
  "/about/our-journey",
  "/about/awards",
  "/packaging",
  "/sheet-metal-components",
  "/press-shop",
  "/ctl-machine",
  "/shearing-machine",
  "/slitting-machine",
  "/manufacturing-company-india",
  "/industrial-solutions-india",
  "/oem-manufacturing-india",
  "/contract-manufacturing-india",
  "/industrial-manufacturing-services",
  "/custom-product-manufacturing-india",
  "/third-party-manufacturing-india",
  "/turnkey-manufacturing-services",
  "/case-studies",
  "/case-studies/sheet-metal-automotive-bracket-line",
  "/case-studies/injection-molding-appliance-housing",
  "/case-studies/coil-processing-fast-turnaround",
];

export function getSitemapRoutes() {
  return getSitemapEntries().map((entry) => entry.url);
}

export function getSitemapEntries() {
  const serviceRoutes = Object.keys(serviceDataMap).map((service) => `/${service}`);

  const keywordRoutes = getKeywordPaths().map(
    ({ vertical, keyword }) => `/${vertical}/${keyword}`,
  );

  const directoryRoutes = directorySlugs.map((slug) => `/${slug}`);
  const blogEntries = blogPosts.map((post) => ({
    url: `/blogs/${post.slug}`,
    lastmod: post.lastModified || BUILD_LASTMOD,
  }));

  const entryMap = new Map();

  [
    ...STATIC_ROUTES,
    ...serviceRoutes,
    ...keywordRoutes,
    ...directoryRoutes,
  ].forEach((url) => {
    if (!entryMap.has(url) && isIndexablePath(url)) {
      entryMap.set(url, { url, lastmod: BUILD_LASTMOD });
    }
  });

  blogEntries.forEach((entry) => {
    if (isIndexablePath(entry.url)) {
      entryMap.set(entry.url, entry);
    }
  });

  return [...entryMap.values()].sort((a, b) => a.url.localeCompare(b.url));
}
