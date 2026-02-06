import React, { useState } from "react";
import Hero from "@/components/sheetmetal/hero";
import AboutSection from "@/components/sheetmetal/about";
import FabricationProcessSection from "@/components/sheetmetal/fabrication";
import InfrastructureSection from "@/components/sheetmetal/infrastructure";
import SustainabilitySection from "@/components/sheetmetal/sustainability";
import CorporateVideoSection from "@/components/sheetmetal/corporate";
import ClientSection from "@/components/sheetmetal/clients";
import Head from "next/head";
import LogoIntro from "@/components/common/LogoIntro";

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Head>
        <title>Sheet Metal Components - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality sheet metal components."
        />
        <meta name="title" content="Sheet Metal Components" />
      </Head>
      {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}
      <div className={`intro-shell${showIntro ? " intro-active" : ""}`}>
        <Hero />
        <AboutSection />
        <FabricationProcessSection />
        <InfrastructureSection />
        <div className="pt-5"></div>
        <SustainabilitySection />
        <CorporateVideoSection />
        <ClientSection />
      </div>

      <style jsx>{`
        .intro-shell :global(.hero-text) {
          animation: heroTextFadeUp 0.7s ease-out both;
        }

        .intro-shell.intro-active :global(.hero-text) {
          opacity: 0;
          transform: translateY(18px);
          animation: none;
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
