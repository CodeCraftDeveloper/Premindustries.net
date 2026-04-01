import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function CustomProductManufacturingIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Industrial OEM Vertical"
      title="Custom Product Manufacturing India"
      intro="Prem Industries India Limited supports custom product manufacturing in India with production planning models designed for repeatability, quality confidence, and schedule control."
      sections={[
        {
          heading: "Custom requirements, industrial discipline",
          body: "We manage custom manufacturing programs using process checkpoints, documented workflows, and structured quality verification.",
        },
        {
          heading: "Built for long-term B2B programs",
          body: "Our execution approach helps customers maintain continuity from product onboarding to repeat dispatch cycles and long-term sourcing programs.",
        },
        {
          heading: "Supports product-specific execution",
          body: "We adapt manufacturing plans to application requirements, target volumes, and buyer expectations without compromising process discipline.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Start Custom Manufacturing Inquiry",
      }}
      secondaryCta={{
        href: "/manufacturing-company-india",
        label: "About Manufacturing Capability",
      }}
      relatedLinks={[
        {
          href: "/contract-manufacturing-india",
          label: "Contract Manufacturing India",
        },
        {
          href: "/industrial-manufacturing-services",
          label: "Industrial Manufacturing Services",
        },
        {
          href: "/turnkey-manufacturing-services",
          label: "Turnkey Manufacturing Services",
        },
      ]}
    />
  );
}
