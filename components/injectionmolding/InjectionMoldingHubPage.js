"use client";

import SectionReveal from "@/components/common/SectionReveal";
import Hero from "@/components/injectionmolding/hero";
import AboutSection from "@/components/injectionmolding/about";
import FabricationProcessSection from "@/components/injectionmolding/fabrication";
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
import FaqBlock from "@/components/common/FaqBlock";

const injectionFaqs = [
  {
    question: "What type of injection moulding programs do you support?",
    answer:
      "We support medium and high-volume injection moulding programs for industrial and consumer categories with process-focused production control and repeatability.",
  },
  {
    question: "How do you maintain quality consistency in moulded parts?",
    answer:
      "Our teams follow setup discipline, in-process verification, and documented quality checkpoints to maintain dimensional and finish consistency across batches.",
  },
  {
    question: "Can Prem Industries support production scale-up requirements?",
    answer:
      "Yes. We are equipped to support ramp-ups through structured planning, machine capacity alignment, and delivery-focused execution for ongoing customer programs.",
  },
  {
    question: "Which industries do your moulded components serve?",
    answer:
      "We supply moulded components for appliances, consumer durables, industrial assemblies, and other high-volume product categories that require repeatable finish and fit.",
  },
  {
    question: "Do you support tooling and new product development?",
    answer:
      "Yes. We work with customers on product onboarding, mould planning, process setup, and structured production launches to support smooth scale-up.",
  },
];

export default function InjectionMoldingHubPage() {
  return (
    <>
      <div className="intro-shell">
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
        <div className="pt-5" />
        <SectionReveal>
          <CertificationsSection bgColor="#14264f" />
        </SectionReveal>
        <SectionReveal>
          <InjectionCtaSection />
        </SectionReveal>
        <SectionReveal>
          <InjectionAdvantages />
        </SectionReveal>
        <div className="pt-5" />
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
        <SectionReveal>
          <FaqBlock
            title="Injection Moulding FAQs"
            intro="Find practical answers about our injection moulding capacity, tooling support, quality control systems, OEM program handling, and production planning for repeat manufacturing."
            faqs={injectionFaqs}
          />
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
