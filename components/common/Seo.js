import Head from "next/head";
import { ADDITIONAL_META_KEYWORDS } from "@/lib/seo/metaKeywordPool";
import { SITE_URL } from "@/lib/seo/siteConfig";

const DEFAULT_IMAGE_PATH = "/logo-main-desktop.png";
const SERVICE_SCHEMA_EXCLUSIONS = [
  "/",
  "/about",
  "/blogs",
  "/case-studies",
  "/career",
  "/clients",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/redirects",
  "/404",
];

function sanitizePath(path = "/") {
  if (!path || typeof path !== "string") {
    return "/";
  }

  const cleanPath = path.split("?")[0].split("#")[0] || "/";
  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
}

function absoluteUrl(path = "/") {
  const normalizedPath = sanitizePath(path);
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

function absoluteImage(image = DEFAULT_IMAGE_PATH) {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return absoluteUrl(image.startsWith("/") ? image : `/${image}`);
}

function mergeKeywords(primaryKeywords, additionalKeywords) {
  const source = [primaryKeywords, additionalKeywords]
    .filter(Boolean)
    .join(", ");

  const unique = [
    ...new Set(
      source
        .split(",")
        .map((token) => token.trim())
        .filter(Boolean),
    ),
  ];

  return unique.join(", ");
}

function toTitleCase(text = "") {
  return text
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildBreadcrumbJsonLd(path, fullTitle) {
  const normalizedPath = sanitizePath(path);
  const segments = normalizedPath.split("/").filter(Boolean);

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    const label = isLast
      ? fullTitle.split("|")[0].trim()
      : toTitleCase(segment.replace(/-/g, " "));

    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: label,
      item: absoluteUrl(currentPath),
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function buildArticleJsonLd(article, canonicalUrl, imageUrl) {
  if (!article) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": article.schemaType || "Article",
    headline: article.headline,
    description: article.description,
    image: [article.image || imageUrl],
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: article.authorName || "Prem Industries India Limited",
    },
    publisher: {
      "@type": "Organization",
      name: "Prem Industries India Limited",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo-main-desktop.png"),
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
  };
}

function shouldRenderServiceSchema(path, article, noindex, service) {
  if (service === false || noindex || article) {
    return false;
  }

  const normalizedPath = sanitizePath(path);
  return !SERVICE_SCHEMA_EXCLUSIONS.some(
    (prefix) =>
      normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  );
}

function buildServiceJsonLd(service, canonicalUrl, fullTitle, fullDescription) {
  if (service === false) {
    return null;
  }

  const normalizedService = service || {};
  const serviceName = normalizedService.name || fullTitle.split("|")[0].trim();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: normalizedService.serviceType || serviceName,
    description: normalizedService.description || fullDescription,
    url: canonicalUrl,
    areaServed:
      normalizedService.areaServed || {
        "@type": "Country",
        name: "India",
      },
    audience: normalizedService.audience
      ? {
          "@type": "BusinessAudience",
          audienceType: normalizedService.audience,
        }
      : {
          "@type": "BusinessAudience",
          audienceType: "OEM buyers, procurement teams, and industrial brands",
        },
    provider: {
      "@type": "Organization",
      name: "Prem Industries India Limited",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: canonicalUrl,
    },
  };
}

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE_PATH,
  noindex = false,
  keywords,
  article,
  service,
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteImage(image);
  const robotsContent = noindex
    ? "noindex,follow"
    : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";
  const mergedKeywords = mergeKeywords(keywords, ADDITIONAL_META_KEYWORDS);
  const fullTitle = title || "Prem Industries India Limited";
  const fullDescription =
    description ||
    "Prem Industries India Limited delivers sheet metal components, steel processing, precision fabrication, press shop services, and injection moulding solutions in India.";

  // ── Organization + LocalBusiness structured data ────────────────────────
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Prem Industries India Limited",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo-main-desktop.png"),
      width: 320,
      height: 60,
    },
    image: absoluteUrl("/logo-main-desktop.png"),
    description:
      "Prem Industries India Limited provides sheet metal fabrication, injection moulding, coil processing, and OEM manufacturing services.",
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-18:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6571,
      longitude: 77.4258,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@premindustries.in",
      telephone: "+91-8447247227",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "C-209, Bulandshahr Road Industrial Area",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201009",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/prem-industries-india/about/?viewAsMember=true",
      "https://www.instagram.com/prem_industries_india/",
      "https://www.facebook.com/PremIndustriesIndia/",
      "https://x.com/_PremIndustries",
    ],
  };

  // ── WebSite schema with Sitelinks SearchAction ───────────────────────────
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prem Industries India Limited",
    url: SITE_URL,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(path, fullTitle);
  const articleJsonLd = buildArticleJsonLd(article, canonicalUrl, imageUrl);
  const serviceJsonLd = shouldRenderServiceSchema(path, article, noindex, service)
    ? buildServiceJsonLd(service, canonicalUrl, fullTitle, fullDescription)
    : null;
  const openGraphType = article ? "article" : "website";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta key="description" name="description" content={fullDescription} />
      <meta key="title" name="title" content={fullTitle} />
      <meta key="robots" name="robots" content={robotsContent} />
      <meta key="googlebot" name="googlebot" content={robotsContent} />
      <meta key="author" name="author" content="Prem Industries India Limited" />
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="theme-color" name="theme-color" content="#222956" />
      {mergedKeywords ? (
        <meta key="keywords" name="keywords" content={mergedKeywords} />
      ) : null}

      <link key="canonical" rel="canonical" href={canonicalUrl} />

      {/* Hreflang for Indian English audience */}
      <link key="hreflang-en-in" rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link key="hreflang-x-default" rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta key="og:type" property="og:type" content={openGraphType} />
      <meta key="og:site_name" property="og:site_name" content="Prem Industries India Limited" />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:description" property="og:description" content={fullDescription} />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:image:alt" property="og:image:alt" content={fullTitle} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta key="og:locale" property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content="@_PremIndustries" />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta key="twitter:description" name="twitter:description" content={fullDescription} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script
        key="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        key="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        key="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceJsonLd ? (
        <script
          key="service-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      ) : null}
      {articleJsonLd ? (
        <script
          key="article-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      ) : null}
    </Head>
  );
}
