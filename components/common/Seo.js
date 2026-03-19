import Head from "next/head";

const SITE_URL = "https://premindustries.net";
const DEFAULT_IMAGE_PATH = "/logo-main-desktop.png";

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

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE_PATH,
  noindex = false,
  keywords,
}) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteImage(image);
  const robotsContent = noindex ? "noindex,nofollow" : "index,follow";
  const fullTitle = title || "Prem Industries India Limited";
  const fullDescription =
    description ||
    "Prem Industries India Limited delivers sheet metal components, steel processing, precision fabrication, press shop services, and injection moulding solutions in India.";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prem Industries India Limited",
    url: SITE_URL,
    logo: absoluteUrl("/logo-main-desktop.png"),
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
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prem Industries India Limited",
    url: SITE_URL,
    inLanguage: "en-IN",
  };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="title" content={fullTitle} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content="Prem Industries India Limited" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#222956" />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Prem Industries India Limited" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </Head>
  );
}
