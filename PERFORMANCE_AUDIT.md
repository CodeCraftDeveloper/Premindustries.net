# Performance Audit Report - Prem Industries

**Date:** March 21, 2026  
**Lighthouse Score:** 48/100 → Target: 75+ ✅

---

## Executive Summary

Your site has **critical performance issues** causing a **48/100 Lighthouse score**. The main problems are:

1. **Server latency (TTFB: 625ms)** - Most critical
2. **Render-blocking external CSS** (Animate.css)
3. **Unoptimized images** (196 KiB waste)
4. **Inefficient font loading** (40ms waste)
5. **Poor code splitting** (all dependencies loaded)

These can realistically be fixed to achieve **75+ score** with the actions below.

---

## 1. CRITICAL: Reduce Server Latency (TTFB - 625ms → 200ms)

### Impact: 530ms improvement

**Root Cause:** Server response time is very slow. This is likely due to:

- Complex SEO metadata generation in \_app.js
- Middleware redirects processing
- No server-side caching

### Actions:

#### A. Optimize \_app.js (Immediate Win)

Move the massive `SEO_BY_PATH` object to a separate file and cache it:

**Create:** `/lib/seo/seoConfig.js`

```javascript
// This file should contain all your SEO_BY_PATH data
// It will be static and cached at build time

export const SEO_BY_PATH = {
  // ... all your existing SEO configuration
};

export const DEFAULT_SEO = { ... };
```

**Update:** `/pages/_app.js`

```javascript
// BEFORE: ~700 lines of SEO config in _app.js
// AFTER: Just import
import { SEO_BY_PATH, DEFAULT_SEO } from "@/lib/seo/seoConfig";
```

**Expected Saving:** 150-200ms

#### B. Reduce Redirect Chains

**File:** `/next.config.mjs`

Current: 4 redirects for domain aliases. Consolidate:

```javascript
async redirects() {
  return [
    {
      source: "/:path*",
      has: [{
        type: "host",
        value: "premindustries.in|www.premindustries.in|permindustries.in|www.permindustries.in"
      }],
      destination: "https://premindustries.net/:path*",
      permanent: true,
    },
    // ... rest of redirects
  ];
}
```

**Expected Saving:** 50-100ms

---

## 2. HIGH: Fix Render-Blocking CSS (Animate.css)

### Impact: 40ms improvement + perceived speed

**Current Issue:** `/pages/_document.js`

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
```

This blocks rendering until the CSS loads.

### Fix:

**Update `/pages/_document.js`:**

```javascript
<Head>
  <link rel="icon" href="/title-logo.png" />

  {/* Load Animate.css asynchronously */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    media="print"
    onLoad="this.media='all'"
  />

  {/* Fallback for no-JS */}
  <noscript>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </noscript>
</Head>
```

Or use Next.js Script tag:

```javascript
import Script from "next/script";

<Script
  src="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  strategy="lazyOnload"
/>;
```

**Expected Saving:** 40ms (faster FCP/LCP)

---

## 3. HIGH: Optimize Images (196 KiB savings)

### Current Issues:

- JPG files not converted to WebP
- No responsive sizes
- No priority attribute on above-fold images
- Missing width/height (causes layout shift)

### Action 1: Set Priority on Hero Images

**File:** `/components/home/index.js` (and other page hero components)

```javascript
// BEFORE
<Image
  src="/home/hero-packaging.jpg"
  alt="Hero"
  width={1920}
  height={1080}
/>

// AFTER
<Image
  src="/home/hero-packaging.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority={true}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
/>
```

### Action 2: Convert Images to WebP

**Tools:**

- Use ImageMagick: `magick convert input.jpg -quality 85 output.webp`
- Or online: https://www.freeconvert.com/jpg-to-webp

**Images to Convert (Priority):**

```
/home/hero-packaging.jpg (32 KiB → 12 KiB)
/about/banner.jpg
/contact/banner.jpg
/clients/banner.jpg
/privacy/banner.jpg
/sheetmetal/press-new.jpg (28 KiB → 10 KiB)
logo-main-desktop.png (10 KiB → 4 KiB)
logo-main-mobile.png (8 KiB → 3 KiB)
```

### Action 3: Consolidate Logos

You have:

- `/logo-main-desktop.png`
- `/logo-main-mobile.png`
- `/logo.png`
- `/logo-white.png`

**Fix:** Use one SVG logo for all and resize with CSS:

```javascript
<Image src="/logo.svg" alt="Prem Industries" width={w} height={h} priority />
```

**Expected Saving:** 150-200 KiB total

---

## 4. MEDIUM: Font Loading Optimization (40ms)

### Current: Good (using `display: swap`)

But can be better.

### Fix 1: Move Fonts to Head in \_document.js

**Update `/pages/_document.js`:**

```javascript
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-ui",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export default function Document() {
  return (
    <Html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <Head>{/* ... rest */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### Fix 2: Remove Plus_Jakarta_Sans for Body

If Plus_Jakarta_Sans is only used for headings, set `display: "optional"`:

```javascript
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-display",
  weight: ["500", "600", "700", "800"],
  display: "optional", // Not critical for LCP
});
```

**Expected Saving:** 30-40ms

---

## 5. MEDIUM: Footer Component Optimization

### Current Issue: Inefficient Icon Rendering

**File:** `/components/footer/Footer.js` (Lines 94-120)

```javascript
// INEFFICIENT
{contactItems.map((item) => (
  (() => {
    const Icon = item.icon;
    return (
      <a ...>
        <span className="inline-flex h-7 w-7...">
          <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </span>
      </a>
    );
  })()
))}
```

### Fix: Extract Component & Memoize

**Create:** `/components/footer/ContactLink.js`

```javascript
import { memo } from "react";

const ContactLink = memo(({ icon: Icon, href, label, external }) => (
  <a
    key={label}
    href={href}
    target={external ? "_blank" : "_self"}
    rel={external ? "noopener noreferrer" : ""}
    className="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-3 px-0 py-0.5 text-left transition-all duration-300 hover:translate-x-1 hover:text-white"
  >
    <span className="inline-flex h-7 w-7 items-center justify-center self-start text-white">
      <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
    </span>
    <span className="max-w-[320px] text-sm font-normal leading-tight text-slate-100/90">
      {label}
    </span>
  </a>
));

ContactLink.displayName = "ContactLink";

export default ContactLink;
```

**Update Footer.js:**

```javascript
import ContactLink from "./ContactLink";

// In JSX:
<div className="space-y-3.5">
  {contactItems.map((item) => (
    <ContactLink
      key={item.label}
      icon={item.icon}
      href={item.href}
      label={item.label}
      external={item.external}
    />
  ))}
</div>;
```

**Expected Saving:** 15-25ms per render

---

## 6. MEDIUM: Lazy Load Non-Critical Libraries

### Current Bundle Issue:

Loading all of these on every page:

- `recharts` (60 KiB)
- `leaflet` (140 KiB)
- `swiper` (45 KiB)

### Fix: Dynamic Imports

**Example - Charts only on specific pages:**

```javascript
// pages/case-studies/index.js
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/Chart"), {
  loading: () => <div>Loading chart...</div>,
  ssr: false,
});

export default function CaseStudies() {
  return <Chart data={data} />;
}
```

**For Maps (Leaflet):**

```javascript
// pages/contact.js
const PlantsMap = dynamic(() => import("@/components/footer/PlantsMap"), {
  loading: () => <div>Loading map...</div>,
  ssr: false,
});
```

**Expected Saving:** 200-250 KiB bundle size

---

## 7. LOW: Code Splitting for Dependencies

### Current Issue:

Large dependencies loaded upfront:

```json
{
  "@studio-freight/lenis": "^1.0.42",
  "framer-motion": "^11.0.0",
  "react-countup": "^6.5.3",
  "react-icons": "^5.6.0"
}
```

### Action:

With the Icon change to `lucide-react` in Footer.js, you can **remove `react-icons`**:

**Update `/package.json`:**
Remove the line:

```json
"react-icons": "^5.6.0"  // DELETE THIS
```

Search for `react-icons` usage:

```bash
npm uninstall react-icons
```

**Expected Saving:** 25-35 KiB

---

## Quick Fix Implementation Order

### Day 1 (Critical)

1. [ ] Create `/lib/seo/seoConfig.js` and move SEO data there
2. [ ] Fix Animate.css in \_document.js (make async)
3. [ ] Add `priority` props to hero images
4. [ ] Start converting PNG/JPG to WebP

### Day 2 (High)

5. [ ] Update Footer.js with ContactLink component
6. [ ] Set up dynamic imports for Recharts/Leaflet
7. [ ] Consolidate logo files (use SVG)
8. [ ] Test with Lighthouse

### Day 3 (Medium)

9. [ ] Optimize font loading in \_document.js
10. [ ] Remove react-icons dependency
11. [ ] Add responsive image sizes
12. [ ] Final Lighthouse audit

---

## Expected Results

| Metric           | Before | After  | Improvement |
| ---------------- | ------ | ------ | ----------- |
| Lighthouse Score | 48     | 70+    | +22 points  |
| TTFB             | 625ms  | 300ms  | -325ms      |
| LCP              | ~4.5s  | ~2.5s  | -2s         |
| CLS              | 0.05   | 0.01   | -80%        |
| FCP              | ~1.8s  | ~1.2s  | -0.6s       |
| Bundle Size      | ~800KB | ~550KB | -250KB      |

---

## Monitoring

Once fixed, track these metrics monthly:

- Use [PageSpeed Insights](https://pagespeed.web.dev)
- Set up [Web.dev measurement](https://web.dev)
- Monitor [Core Web Vitals](https://web.dev/vitals)

---

## Questions?

Refer to:

- Next.js Image optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images
- Web.dev performance guide: https://web.dev/performance
- Lighthouse docs: https://developer.chrome.com/docs/lighthouse/
