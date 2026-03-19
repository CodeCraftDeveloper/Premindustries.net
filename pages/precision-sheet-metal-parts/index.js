import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20precision%20sheet%20metal%20parts.",
  label: "WhatsApp",
};

export default function PrecisionSheetMetalPartsPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Precision Sheet Metal Parts"
      intro="Prem Industries manufactures precision sheet metal parts with process discipline designed for dimensional consistency and repeat production quality."
      sections={[
        {
          heading: "Precision-focused quality controls",
          body: "Inspection checkpoints and process stability controls help maintain reliable tolerance outcomes across batches.",
        },
        {
          heading: "Built for industrial assemblies",
          body: "We support programs requiring precision parts for automotive, electronics, and engineered product applications.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Request Precision Parts Quote" }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "Explore Component Programs",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/sheet-metal-manufacturer-india",
          label: "Sheet Metal Manufacturer India",
        },
        {
          href: "/sheet-metal/oem-sheet-metal-manufacturer",
          label: "OEM Sheet Metal Manufacturer",
        },
        {
          href: "/sheet-metal/sheet-metal-fabrication-quote",
          label: "Sheet Metal Fabrication Quote",
        },
      ]}
    />
  );
}
