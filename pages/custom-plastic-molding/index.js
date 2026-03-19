import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function CustomPlasticMoldingPage() {
  return (
    <KeywordLandingPage
      eyebrow="Injection Vertical"
      title="Custom Plastic Molding"
      intro="Prem Industries provides custom plastic molding support for product teams that need repeatable quality, process visibility, and scalable dispatch planning."
      sections={[
        {
          heading: "Custom component execution",
          body: "We support customer-specific parts with practical controls around mold setup, process stability, and quality verification.",
        },
        {
          heading: "Industrial and OEM readiness",
          body: "Our custom molding model is aligned to B2B quality requirements where fit, finish, and production continuity are critical.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Discuss Custom Parts" }}
      secondaryCta={{
        href: "/injectionmoulding",
        label: "See Injection Programs",
      }}
      relatedLinks={[
        {
          href: "/injection-molding/injection-molding-manufacturer-india",
          label: "Injection Molding Manufacturer India",
        },
        {
          href: "/injection-molding/plastic-injection-molding-company",
          label: "Plastic Injection Molding Company",
        },
        {
          href: "/injection-molding/high-precision-plastic-molding",
          label: "High Precision Plastic Molding",
        },
      ]}
    />
  );
}
