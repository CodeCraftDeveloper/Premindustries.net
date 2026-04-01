import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const solutionAreas = [
  {
    title: "Industrial component manufacturing",
    detail:
      "High-volume production support for formed metal and plastic components with process stability and controlled quality workflows.",
  },
  {
    title: "OEM-oriented execution",
    detail:
      "Dedicated execution models for quality assurance, lead-time control, and predictable dispatch cycles.",
  },
  {
    title: "End-to-end manufacturing solutions",
    detail:
      "From production onboarding to repeat runs, we support complete industrial delivery workflows for long-term customer programs.",
  },
];

export default function IndustrialSolutionsIndiaPage() {
  const internalLinks = [
    {
      href: "/manufacturing-company-india",
      label: "Industrial Manufacturing Company India",
      description: "Enterprise-scale production support and execution",
    },
    {
      href: "/oem-manufacturing-india",
      label: "OEM Manufacturing India",
      description: "Reliable contract manufacturing for long-term programs",
    },
    {
      href: "/contract-manufacturing-india",
      label: "Contract Manufacturing India",
      description: "Structured outsourcing and scalable supply models",
    },
    {
      href: "/custom-product-manufacturing-india",
      label: "Custom Product Manufacturing India",
      description: "Tailored production workflows for unique products",
    },
    {
      href: "/turnkey-manufacturing-services",
      label: "Turnkey Manufacturing Services",
      description: "End-to-end manufacturing execution and delivery",
    },
    {
      href: "/contact",
      label: "Contact Prem Industries India Limited",
      description: "Discuss your industrial project requirements",
    },
  ];

  return (
    <KeywordLandingPage
      eyebrow="Industrial Solutions Provider India"
      title="Industrial Solutions India"
      intro="Prem Industries India Limited delivers industrial solutions in India for OEM and B2B buyers that need reliable manufacturing services, engineering support, and scalable output across repeat production programs."
      spotlightCards={solutionAreas}
      sections={[
        {
          heading: "Need an industrial manufacturing partner?",
          body: "Connect with our team for project discussions on custom manufacturing, production capacity, quality expectations, and delivery planning across multi-process industrial programs.",
        },
        {
          heading: "Structured for long-term program support",
          body: "Our industrial solutions model is built to help customers consolidate execution under a dependable manufacturing partner with practical process discipline and supply continuity.",
        },
        {
          heading: "Aligned to OEM and B2B procurement logic",
          body: "These service structures are designed for buyers who need clear capability positioning, repeat-order reliability, and fast pathways into technical or commercial conversations.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Contact Prem Industries India Limited" }}
      secondaryCta={{
        href: "/oem-manufacturing-india",
        label: "OEM Manufacturing India",
      }}
      whatsappCta={{
        href: "https://wa.me/918447247227?text=I%20need%20industrial%20solutions%20support%20in%20India.",
        label: "WhatsApp",
      }}
      relatedTitle="Related industrial pages"
      relatedLinks={internalLinks.slice(0, 4)}
      internalLinksTitle="Related Industrial Service Pages"
      internalLinks={internalLinks}
      heroImage="/sheetmetal/press-new.jpg"
    />
  );
}
