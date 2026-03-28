import React from "react";
import Hero from "@/components/sheetmetal/hero";
import AboutSection from "@/components/sheetmetal/about";
import FabricationProcessSection from "@/components/sheetmetal/fabrication";
import InfrastructureSection from "@/components/sheetmetal/infrastructure";
import SustainabilitySection from "@/components/sheetmetal/sustainability";
import CorporateVideoSection from "@/components/sheetmetal/corporate";
import ClientSection from "@/components/sheetmetal/clients";
import SectionReveal from "@/components/common/SectionReveal";
import FaqBlock from "@/components/common/FaqBlock";

const sheetMetalFaqs = [
  {
    question: "What sheet metal services does Prem Industries provide?",
    answer:
      "We support integrated sheet metal workflows including fabrication, forming, infrastructure-backed production, and quality-controlled component dispatch for industrial applications.",
  },
  {
    question: "Which industries do your sheet metal components serve?",
    answer:
      "Our sheet metal components are supplied to automotive, construction, electronics, appliance, and general engineering sectors where consistency and dimensional control are critical.",
  },
  {
    question: "Can you support custom and repeat production programs?",
    answer:
      "Yes. We support both custom development and repeat production with process checkpoints, traceability, and schedule-focused execution to help customers manage downstream assembly planning.",
  },
  {
    question:
      "How do you maintain dimensional accuracy in sheet metal components?",
    answer:
      "We rely on process discipline, tooling control, and inspection checkpoints to help keep formed and fabricated parts consistent across repeat production batches.",
  },
  {
    question: "Can you support appliance and automotive sheet metal parts?",
    answer:
      "Yes. We support sheet metal components used in appliance, automotive, industrial, and engineered product applications where repeatability, fit, and finish are important.",
  },
];

export default function Index() {
  return (
    <>
      <div className="intro-shell">
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
        <SectionReveal>
          <FaqBlock
            title="Sheet Metal FAQs"
            intro="Answers to common questions about our sheet metal fabrication capability, component applications, quality systems, and production support for OEM and industrial programs."
            faqs={sheetMetalFaqs}
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
