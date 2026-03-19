import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import LogoIntro from "@/components/common/LogoIntro";
// import Home from "../components/frontpage/index";
import HomeContent from "../components/home/index";

const INTRO_SESSION_KEY = "prem-logo-intro-seen";

export default function FrontPage() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasSeenIntro = window.sessionStorage.getItem(INTRO_SESSION_KEY) === "1";

    if (!prefersReducedMotion && !hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    }

    setShowIntro(false);
  };

  return (
    <>
      <Head>
        <title>
          Industrial Manufacturing Company in India | Prem Industries India
          Limited
        </title>
        <meta
          name="title"
          content="Industrial Manufacturing Company in India | Prem Industries India Limited"
        />
        <meta
          name="description"
          content="Prem Industries India Limited is an industrial manufacturing company in India offering sheet metal fabrication, injection moulding, packaging support, and OEM-focused production services."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W5TJVHXT4T"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W5TJVHXT4T');
        `}
      </Script>
      {showIntro ? <LogoIntro onComplete={handleIntroComplete} /> : null}
      <div className="bg-white">
        <HomeContent />
      </div>
    </>
  );
}

// This enables static generation (HTML is server-rendered)
export async function getStaticProps() {
  return {
    props: {},
  };
}
