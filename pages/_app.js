import "@/styles/tailwind.css";
import "swiper/css";
import "swiper/css/navigation";
import "leaflet/dist/leaflet.css";
import {
  Exo_2,
  Inter,
  Montserrat,
  Oswald,
  Plus_Jakarta_Sans,
  Roboto,
} from "next/font/google";
import Script from "next/script";
import { useRouter } from "next/router";
import Header from "../components/navbar/Header";
import Footer from "../components/footer/Footer";
import Seo from "@/components/common/Seo";
import ScrollTopButton from "@/components/common/ScrollTopButton";
import { getSeoData } from "@/lib/seo/seoConfig";

// ─── Fonts ─────────────────────────────────────────────────────────────────
// Font roles
// Inter → body / UI text
// Plus_Jakarta_Sans → display headings
// Exo_2 → home section accent text
// Oswald → condensed headline treatments
// Montserrat → hero and showcase accents
// Roboto → navigation and supporting UI text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-ui",
  weight: ["400", "500"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-home-ui",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-condensed-ui",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-hero-ui",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-ui",
  weight: ["400", "500", "700"],
  display: "swap",
});

// ─── GA Measurement ID ─────────────────────────────────────────────────────
const GA_ID = "G-W5TJVHXT4T";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const seoData = getSeoData(router.asPath || "/");

  // Apply all active font variables to the root element
  const classNames = `${inter.variable} ${jakarta.variable} ${exo.variable} ${oswald.variable} ${montserrat.variable} ${roboto.variable}`;

  return (
    <>
      {/* ── Google Analytics – present on every page ──────────────── */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>

      <main className={`${classNames} font-sans`}>
        <Header />
        <Seo {...seoData} />
        <Component {...pageProps} />
        <Footer />
        <ScrollTopButton />
      </main>
    </>
  );
}
