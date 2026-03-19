import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20a%20sheet%20metal%20manufacturer%20for%20my%20project.",
  label: "WhatsApp",
};

export default function SheetMetalManufacturerIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Sheet Metal Manufacturer India"
      intro="As a sheet metal manufacturer in India, Prem Industries supports precision component programs across automotive, appliance, and industrial categories."
      sections={[
        {
          heading: "Production consistency at scale",
          body: "Our manufacturing process emphasizes dimensional control, repeatable quality, and reliable throughput for ongoing customer programs.",
        },
        {
          heading: "Industrial application support",
          body: "We manufacture sheet metal parts designed for downstream assembly environments where fit and repeatability are critical.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Discuss Manufacturing Requirement",
      }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "View Capabilities",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/sheet-metal-fabrication-india",
          label: "Sheet Metal Fabrication India",
        },
        {
          href: "/sheet-metal/precision-sheet-metal-parts",
          label: "Precision Sheet Metal Parts",
        },
        {
          href: "/sheet-metal/oem-sheet-metal-manufacturer",
          label: "OEM Sheet Metal Manufacturer",
        },
      ]}
    />
  );
}
