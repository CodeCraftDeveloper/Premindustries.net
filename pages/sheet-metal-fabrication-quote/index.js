import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=Please%20share%20a%20sheet%20metal%20fabrication%20quote.",
  label: "WhatsApp",
};

export default function SheetMetalFabricationQuotePage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Sheet Metal Fabrication Quote"
      intro="Request a sheet metal fabrication quote from Prem Industries for custom components, OEM programs, and high-volume industrial fabrication requirements."
      sections={[
        {
          heading: "Quote support for B2B requirements",
          body: "Share your part requirement, expected volume, and timeline to receive a structured response from our production team.",
        },
        {
          heading: "Fast-response engagement",
          body: "Our team supports quote discussions for custom fabrication, precision parts, and repeat manufacturing programs.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Submit Quote Request" }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "View Sheet Metal Capabilities",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/sheet-metal-fabrication-india",
          label: "Sheet Metal Fabrication India",
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
