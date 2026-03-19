import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20a%20sheet%20metal%20fabrication%20quote.",
  label: "WhatsApp",
};

export default function SheetMetalFabricationIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Sheet Metal Fabrication India"
      intro="Prem Industries provides sheet metal fabrication in India for OEM and industrial programs that require dependable quality and scalable production throughput."
      sections={[
        {
          heading: "Integrated fabrication execution",
          body: "We support end-to-end fabrication workflows with practical process controls for repeatability and schedule confidence.",
        },
        {
          heading: "Designed for B2B manufacturing needs",
          body: "Our execution model supports industrial buyers seeking stable output, quality checkpoints, and timely dispatch performance.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Get Fabrication Quote" }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "Explore Sheet Metal",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/sheet-metal-manufacturer-india",
          label: "Sheet Metal Manufacturer India",
        },
        {
          href: "/sheet-metal/custom-sheet-metal-fabrication",
          label: "Custom Sheet Metal Fabrication",
        },
        {
          href: "/sheet-metal/sheet-metal-fabrication-quote",
          label: "Sheet Metal Fabrication Quote",
        },
      ]}
    />
  );
}
