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
import SectionReveal from "@/components/common/SectionReveal";

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
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <FabricationProcessSection />
        </SectionReveal>
        <SectionReveal>
          <InfrastructureSection />
        </SectionReveal>
        <div className="pt-5"></div>
        <SectionReveal>
          <SustainabilitySection />
        </SectionReveal>
        <SectionReveal>
          <CorporateVideoSection />
        </SectionReveal>
        <SectionReveal>
          <ClientSection />
        </SectionReveal>
      </div>

      <style jsx>{`
        .intro-shell {
          width: 100%;
          overflow-x: clip;
        }

        :global(body) {
          overflow-x: hidden;
        }

        .intro-shell :global(.hero-text) {
          animation: heroTextFadeUp 0.7s ease-out both;
        }

        .intro-shell.intro-active :global(.hero-content),
        .intro-shell.intro-active :global(.hero-text),
        .intro-shell.intro-active :global(.hero-eyebrow),
        .intro-shell.intro-active :global(.hero-lead),
        .intro-shell.intro-active :global(.hero-sublead),
        .intro-shell.intro-active :global(.hero-btn) {
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
