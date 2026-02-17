/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import { useState } from "react";
import LogoIntro from "@/components/common/LogoIntro";
// import Home from "../components/frontpage/index";
import HomeContent from "../components/home/index";

export default function FrontPage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Head>
        <title>Prem Industries India Limited</title>
        <meta name="title" content="Prem Industries India Limited" />
        <meta name="description" content="Prem Industries India Limited" />
        <meta
          name="google-site-verification"
          content="wy-WtsDt1PUSXEq5FRxcjjANTZezjcBT-9dhlKsRiCc"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W5TJVHXT4T"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-W5TJVHXT4T");
          `}
        </script>
      </Head>
      {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}
      <div className={`intro-shell${showIntro ? " intro-active" : ""}`}>
        <HomeContent />
      </div>

      <style jsx>{`
        .intro-shell :global(.hero-text) {
          animation: heroTextFadeUp 0.7s ease-out both;
        }

        .intro-shell.intro-active :global(.hero-content),
        .intro-shell.intro-active :global(.hero-text),
        .intro-shell.intro-active :global(.hero-cards),
        .intro-shell.intro-active :global(.hero-card),
        .intro-shell.intro-active :global(.hero-cta) {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        @keyframes heroTextFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-shell :global(.hero-text) {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

// This enables static generation (HTML is server-rendered)
export async function getStaticProps() {
  return {
    props: {}, // you can pass static props here if needed
  };
}
