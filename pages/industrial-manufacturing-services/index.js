import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function IndustrialManufacturingServicesPage() {
  return (
    <KeywordLandingPage
      eyebrow="Industrial OEM Vertical"
      title="Industrial Manufacturing Services"
      intro="Industrial manufacturing services from Prem Industries for OEM and B2B brands that need stable production systems, quality control, and delivery-focused execution."
      sections={[
        {
          heading: "Engineering to production continuity",
          body: "We connect engineering intent with repeatable production workflows to support consistent output quality across commercial volumes.",
        },
        {
          heading: "Scalable industrial support",
          body: "From medium to high-volume demand, we help customers sustain throughput with practical manufacturing controls and coordinated planning.",
        },
        {
          heading: "Execution built for long-term programs",
          body: "Our manufacturing services are designed to support recurring orders, changing schedules, and continuous supply expectations.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Discuss Industrial Requirement" }}
      secondaryCta={{
        href: "/industrial-solutions-india",
        label: "View Industrial Solutions",
      }}
      relatedLinks={[
        {
          href: "/contract-manufacturing-india",
          label: "Contract Manufacturing India",
        },
        {
          href: "/third-party-manufacturing-india",
          label: "Third Party Manufacturing India",
        },
        {
          href: "/custom-product-manufacturing-india",
          label: "Custom Product Manufacturing India",
        },
      ]}
    />
  );
}
