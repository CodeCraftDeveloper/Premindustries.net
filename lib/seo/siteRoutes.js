import { getKeywordPaths } from "@/lib/seo/keywordFunnelMap";
import { directorySlugs } from "@/lib/seo/directoryPageData";
import { serviceDataMap } from "@/lib/seo/serviceDataMap";

export const SITE_URL = "https://premindustries.net";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/clients",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/packaging",
  "/sheet-metal",
  "/sheet-metal-components",
  "/press-shop",
  "/ctl-machine",
  "/shearing-machine",
  "/slitting-machine",
  "/injection-molding",
  "/injectionmoulding",
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
  const serviceRoutes = Object.keys(serviceDataMap).map(
    (service) => `/${service}`,
  );

  const keywordRoutes = getKeywordPaths().map(
    ({ vertical, keyword }) => `/${vertical}/${keyword}`,
  );

  const directoryRoutes = directorySlugs.map((slug) => `/${slug}`);

  return [
    ...new Set([
      ...STATIC_ROUTES,
      ...serviceRoutes,
      ...keywordRoutes,
      ...directoryRoutes,
    ]),
  ];
}
