import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function TurnkeyManufacturingServicesPage() {
  return (
    <KeywordLandingPage
      eyebrow="Industrial OEM Vertical"
      title="Turnkey Manufacturing Services"
      intro="Turnkey manufacturing services from Prem Industries for businesses that need coordinated end-to-end execution across manufacturing workflows and supply cycles."
      sections={[
        {
          heading: "End-to-end manufacturing coordination",
          body: "Our turnkey model integrates production planning, quality systems, vendor coordination, and delivery control to simplify execution for customers.",
        },
        {
          heading: "Scalable partner for growth stages",
          body: "We support stable transitions from initial runs to sustained high-volume output with operational discipline and repeat-order readiness.",
        },
        {
          heading: "Designed to reduce execution friction",
          body: "A single accountable manufacturing partner helps reduce coordination gaps and improves visibility across the full project cycle.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Discuss Turnkey Manufacturing" }}
      secondaryCta={{
        href: "/industrial-solutions-india",
        label: "Explore Industrial Solutions",
      }}
      relatedLinks={[
        {
          href: "/contract-manufacturing-india",
          label: "Contract Manufacturing India",
        },
        {
          href: "/custom-product-manufacturing-india",
          label: "Custom Product Manufacturing India",
        },
        {
          href: "/third-party-manufacturing-india",
          label: "Third Party Manufacturing India",
        },
      ]}
    />
  );
}
