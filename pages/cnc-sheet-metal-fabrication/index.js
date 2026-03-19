import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20CNC%20sheet%20metal%20fabrication%20support.",
  label: "WhatsApp",
};

export default function CncSheetMetalFabricationPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="CNC Sheet Metal Fabrication"
      intro="CNC sheet metal fabrication support from Prem Industries for programs requiring consistent repeatability, efficient processing, and industrial-grade quality output."
      sections={[
        {
          heading: "Controlled CNC fabrication workflow",
          body: "We combine process controls with production discipline to support repeatable quality over ongoing production cycles.",
        },
        {
          heading: "Ready for OEM and B2B programs",
          body: "Our CNC fabrication support is built for customers needing scalable output and dependable dispatch planning.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Request CNC Fabrication Quote" }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "Explore Sheet Metal Programs",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/laser-cutting-services-india",
          label: "Laser Cutting Services India",
        },
        {
          href: "/sheet-metal/metal-bending-services",
          label: "Metal Bending Services",
        },
        {
          href: "/sheet-metal/welding-fabrication-services",
          label: "Welding Fabrication Services",
        },
      ]}
    />
  );
}
