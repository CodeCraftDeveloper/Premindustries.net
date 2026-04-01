import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function ContractManufacturingIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Industrial OEM Vertical"
      title="Contract Manufacturing India"
      intro="Prem Industries India Limited offers contract manufacturing in India for enterprises that need dependable production support, quality discipline, and scalable output planning."
      sections={[
        {
          heading: "Structured contract execution",
          body: "We align production planning, quality checkpoints, material flow, and dispatch management to support continuity across recurring orders.",
        },
        {
          heading: "Suitable for B2B manufacturing demand",
          body: "Our model supports industrial programs that require reliable timelines, repeatable quality, and multi-stage coordination across teams.",
        },
        {
          heading: "Built for repeat supply",
          body: "We help customers stabilize recurring orders through process discipline, production visibility, and practical execution planning.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Get Contract Manufacturing Quote",
      }}
      secondaryCta={{
        href: "/oem-manufacturing-india",
        label: "Explore OEM Manufacturing",
      }}
      relatedLinks={[
        {
          href: "/industrial-manufacturing-services",
          label: "Industrial Manufacturing Services",
        },
        {
          href: "/turnkey-manufacturing-services",
          label: "Turnkey Manufacturing Services",
        },
        {
          href: "/custom-product-manufacturing-india",
          label: "Custom Product Manufacturing India",
        },
      ]}
    />
  );
}
