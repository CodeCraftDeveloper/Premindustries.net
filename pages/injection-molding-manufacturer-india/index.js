import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function InjectionMoldingManufacturerIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Injection Vertical"
      title="Injection Molding Manufacturer India"
      intro="Prem Industries supports OEM and industrial buyers as an injection molding manufacturer in India with scalable production and process control."
      sections={[
        {
          heading: "Production-focused injection programs",
          body: "We support medium and high-volume programs with stable cycle planning, material handling discipline, and repeatable part quality.",
        },
        {
          heading: "Built for OEM timelines",
          body: "Our execution model aligns tooling readiness, in-process checks, and dispatch coordination to keep customer assembly schedules on track.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Get Injection Molding Quote" }}
      secondaryCta={{
        href: "/injectionmoulding",
        label: "Explore Injection Capability",
      }}
      relatedLinks={[
        {
          href: "/injection-molding/plastic-injection-molding-company",
          label: "Plastic Injection Molding Company",
        },
        {
          href: "/injection-molding/custom-plastic-molding",
          label: "Custom Plastic Molding",
        },
        {
          href: "/injection-molding/oem-injection-molding-india",
          label: "OEM Injection Molding India",
        },
      ]}
    />
  );
}
