import React, { useState } from "react";
import Head from "next/head";
import LogoIntro from "@/components/common/LogoIntro";
import SectionReveal from "@/components/common/SectionReveal";
import Hero from "@/components/injectionmolding/hero";
import AboutSection from "@/components/injectionmolding/about";
import FabricationProcessSection from "@/components/injectionmolding/fabrication";
import InfrastructureSection from "@/components/injectionmolding/infrastructure";
import IndustrySegmentsSection from "@/components/injectionmolding/segments";
import QualityChecklistSection from "@/components/injectionmolding/quality";
import ServicesSection from "@/components/injectionmolding/services";
import CertificationsSection from "@/components/injectionmolding/certifications";
import InjectionCtaSection from "@/components/injectionmolding/cta";
import InjectionAdvantages from "@/components/injectionmolding/advantages";
import InjectionContactSection from "@/components/injectionmolding/contact";
import SustainabilitySection from "@/components/injectionmolding/sustainability";
import CorporateVideoSection from "@/components/injectionmolding/corporate";
import ClientSection from "@/components/injectionmolding/clients";
import AboutBannerSection from "@/components/injectionmolding/aboutBanner";

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Head>
        <title>Injection Molding - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality injection molding capabilities."
        />
        <meta name="title" content="Injection Molding" />
      </Head>
      {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}
      <div className={`intro-shell${showIntro ? " intro-active" : ""}`}>
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <IndustrySegmentsSection />
        </SectionReveal>
        <SectionReveal>
          <FabricationProcessSection />
        </SectionReveal>
        <SectionReveal>
          <QualityChecklistSection />
        </SectionReveal>
        <SectionReveal>
          <ServicesSection />
        </SectionReveal>
        <SectionReveal>
          <AboutSection />
        </SectionReveal>

        <div className="pt-5"></div>
        <SectionReveal>
          <CertificationsSection bgColor="#14264f" />
        </SectionReveal>
        <SectionReveal>
          <InjectionCtaSection />
        </SectionReveal>
        <SectionReveal>
          <InjectionAdvantages />
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
        <SectionReveal>
          <InjectionContactSection />
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
        .intro-shell.intro-active :global(.hero-eyebrow),
        .intro-shell.intro-active :global(.hero-content h1),
        .intro-shell.intro-active :global(.hero-content p),
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
