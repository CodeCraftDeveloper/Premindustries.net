import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/title-logo.png" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="cqhSIS65Vmd737jO-JPThqumO0QxC0-88YsA25-s3Dg"
        />

        {/* Telephone format detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload hero LCP image */}
        <link
          rel="preload"
          as="image"
          href="/home/u-copy.png"
          fetchPriority="high"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
