import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function OemInjectionMoldingIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Injection Vertical"
      title="OEM Injection Molding India"
      intro="Prem Industries supports OEM injection molding in India with structured production planning, quality-led execution, and dependable dispatch support."
      sections={[
        {
          heading: "OEM-oriented production model",
          body: "Programs are managed around output consistency, line readiness, and sustained throughput required for OEM assembly environments.",
        },
        {
          heading: "From launch to repeat supply",
          body: "We assist with onboarding, scale-up, and stable production cycles to reduce risk during growth phases.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Start OEM Discussion" }}
      secondaryCta={{
        href: "/oem-manufacturing-india",
        label: "View OEM Manufacturing",
      }}
      relatedLinks={[
        {
          href: "/injection-molding/injection-molding-manufacturer-india",
          label: "Injection Molding Manufacturer India",
        },
        {
          href: "/injection-molding/custom-plastic-molding",
          label: "Custom Plastic Molding",
        },
        {
          href: "/injection-molding/high-precision-plastic-molding",
          label: "High Precision Plastic Molding",
        },
      ]}
    />
  );
}
