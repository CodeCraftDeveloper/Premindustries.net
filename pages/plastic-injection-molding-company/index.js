import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function PlasticInjectionMoldingCompanyPage() {
  return (
    <KeywordLandingPage
      eyebrow="Injection Vertical"
      title="Plastic Injection Molding Company"
      intro="As a plastic injection molding company, Prem Industries delivers consistent molded component output for appliance, industrial, and consumer applications."
      sections={[
        {
          heading: "Quality consistency in molded parts",
          body: "Our teams follow setup controls and structured checkpoints to maintain dimensional and finish consistency across repeat batches.",
        },
        {
          heading: "Scale-ready manufacturing",
          body: "From onboarding to production ramp-up, we support predictable throughput planning for long-running programs.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Request Production Discussion" }}
      secondaryCta={{
        href: "/injectionmoulding",
        label: "View Injection Services",
      }}
      relatedLinks={[
        {
          href: "/injection-molding/injection-molding-manufacturer-india",
          label: "Injection Molding Manufacturer India",
        },
        {
          href: "/injection-molding/high-precision-plastic-molding",
          label: "High Precision Plastic Molding",
        },
        {
          href: "/injection-molding/oem-injection-molding-india",
          label: "OEM Injection Molding India",
        },
      ]}
    />
  );
}
