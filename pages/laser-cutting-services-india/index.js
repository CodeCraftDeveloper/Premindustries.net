import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const whatsappCta = {
  href: "https://wa.me/918447247227?text=I%20need%20laser%20cutting%20services%20in%20India.",
  label: "WhatsApp",
};

export default function LaserCuttingServicesIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Sheet Metal Vertical"
      title="Laser Cutting Services India"
      intro="Laser cutting services in India from Prem Industries for customers needing precise profile cutting aligned with downstream fabrication workflows."
      sections={[
        {
          heading: "Accuracy-driven cutting execution",
          body: "Our cutting workflows are designed to reduce rework risk and improve downstream process readiness.",
        },
        {
          heading: "Supports diverse metal applications",
          body: "We support industrial programs where profile accuracy and repeatability are critical to assembly quality.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Get Laser Cutting Quote" }}
      secondaryCta={{
        href: "/sheet-metal-components",
        label: "View Fabrication Capabilities",
      }}
      whatsappCta={whatsappCta}
      relatedLinks={[
        {
          href: "/sheet-metal/cnc-sheet-metal-fabrication",
          label: "CNC Sheet Metal Fabrication",
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
