import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20custom%20sheet%20metal%20fabrication%20support.",
  label: "WhatsApp",
};

export default function CustomSheetMetalFabricationPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Custom Sheet Metal Fabrication"
      intro="Prem Industries offers custom sheet metal fabrication for product teams that need part-specific execution with reliable process control."
      sections={[
        {
          heading: "Custom component execution",
          body: "We support customer-specific part requirements through controlled fabrication stages and structured quality checks.",
        },
        {
          heading: "From prototype intent to repeat supply",
          body: "Our workflows help customers move from early requirement definition to stable repeat manufacturing cycles.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Start Custom Fabrication Inquiry",
      }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "See Sheet Metal Services",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/precision-sheet-metal-parts",
          label: "Precision Sheet Metal Parts",
        },
        {
          href: "/sheet-metal/cnc-sheet-metal-fabrication",
          label: "CNC Sheet Metal Fabrication",
        },
        {
          href: "/sheet-metal/sheet-metal-fabrication-quote",
          label: "Sheet Metal Fabrication Quote",
        },
      ]}
    />
  );
}
