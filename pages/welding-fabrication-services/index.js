import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20welding%20fabrication%20services.",
  label: "WhatsApp",
};

export default function WeldingFabricationServicesPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Welding Fabrication Services"
      intro="Welding fabrication services from Prem Industries for industrial customers needing dependable assembly integrity and fabrication consistency."
      sections={[
        {
          heading: "Fabrication quality built into process",
          body: "Our teams follow process checkpoints to support repeatable welding outcomes and stable production quality.",
        },
        {
          heading: "Application-ready component support",
          body: "We support fabrication requirements for industrial, construction, and OEM-focused component programs.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Request Welding Fabrication Quote",
      }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "Explore Fabrication Programs",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/metal-bending-services",
          label: "Metal Bending Services",
        },
        {
          href: "/sheet-metal/custom-sheet-metal-fabrication",
          label: "Custom Sheet Metal Fabrication",
        },
        {
          href: "/sheet-metal/oem-sheet-metal-manufacturer",
          label: "OEM Sheet Metal Manufacturer",
        },
      ]}
    />
  );
}
