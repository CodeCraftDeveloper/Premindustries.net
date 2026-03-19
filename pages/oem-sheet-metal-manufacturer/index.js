import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20an%20OEM%20sheet%20metal%20manufacturer.",
  label: "WhatsApp",
};

export default function OemSheetMetalManufacturerPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="OEM Sheet Metal Manufacturer"
      intro="Prem Industries supports OEM sheet metal manufacturing programs with structured process control, quality consistency, and delivery-focused execution."
      sections={[
        {
          heading: "OEM-oriented manufacturing model",
          body: "Programs are managed around repeatability, part quality, and production continuity to support assembly-line stability.",
        },
        {
          heading: "Scalable B2B execution",
          body: "We support production scale requirements from customer onboarding through ongoing dispatch cycles.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Start OEM Sheet Metal Discussion",
      }}
      secondaryCta={{
        href: "/oem-manufacturing-india",
        label: "Explore OEM Manufacturing",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/sheet-metal-manufacturer-india",
          label: "Sheet Metal Manufacturer India",
        },
        {
          href: "/sheet-metal/precision-sheet-metal-parts",
          label: "Precision Sheet Metal Parts",
        },
        {
          href: "/sheet-metal/sheet-metal-fabrication-quote",
          label: "Sheet Metal Fabrication Quote",
        },
      ]}
    />
  );
}
