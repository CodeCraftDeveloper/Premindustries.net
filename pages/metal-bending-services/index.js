import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20metal%20bending%20services.",
  label: "WhatsApp",
};

export default function MetalBendingServicesPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Metal Bending Services"
      intro="Prem Industries provides metal bending services for industrial component programs requiring repeatable forming quality and stable throughput."
      sections={[
        {
          heading: "Reliable bending process control",
          body: "Our bending workflows are aligned to maintain form consistency and reduce variability across repeat runs.",
        },
        {
          heading: "Supports custom and recurring jobs",
          body: "We support both custom part requirements and ongoing production schedules for B2B buyers.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Get Bending Services Quote" }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "View Sheet Metal Capability",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/cnc-sheet-metal-fabrication",
          label: "CNC Sheet Metal Fabrication",
        },
        {
          href: "/sheet-metal/welding-fabrication-services",
          label: "Welding Fabrication Services",
        },
        {
          href: "/sheet-metal/sheet-metal-fabrication-india",
          label: "Sheet Metal Fabrication India",
        },
      ]}
    />
  );
}
