import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function HighPrecisionPlasticMoldingPage() {
  return (
    <KeywordLandingPage
      eyebrow="Injection Vertical"
      title="High Precision Plastic Molding"
      intro="High precision plastic molding support from Prem Industries for applications that demand tight consistency, repeatability, and controlled production workflows."
      sections={[
        {
          heading: "Precision through process control",
          body: "Quality checkpoints, setup discipline, and structured in-process reviews help maintain stable part quality over long production runs.",
        },
        {
          heading: "Suitable for high-value applications",
          body: "We support precision-focused components used in appliance, industrial, and engineered product categories.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Request Precision Quote" }}
      secondaryCta={{
        href: "/injectionmoulding",
        label: "Explore Injection Capabilities",
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
