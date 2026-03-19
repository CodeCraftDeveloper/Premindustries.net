import KeywordLandingPage from "@/components/common/KeywordLandingPage";

export default function ThirdPartyManufacturingIndiaPage() {
  return (
    <KeywordLandingPage
      eyebrow="Industrial OEM Vertical"
      title="Third Party Manufacturing India"
      intro="Third party manufacturing support in India from Prem Industries for brands seeking a reliable production partner with scalable execution capability and process visibility."
      sections={[
        {
          heading: "Reliable outsourcing support",
          body: "We provide manufacturing support models for brands that need external production without compromising on quality consistency or delivery discipline.",
        },
        {
          heading: "Operational transparency",
          body: "Process visibility, planned checkpoints, and dispatch alignment help maintain confidence across outsourced manufacturing programs.",
        },
        {
          heading: "Suitable for scaling brands",
          body: "Our model helps growing brands outsource production to a dependable partner while maintaining commercial continuity and product consistency.",
        },
      ]}
      primaryCta={{
        href: "/contact",
        label: "Request Third Party Manufacturing Quote",
      }}
      secondaryCta={{
        href: "/oem-manufacturing-india",
        label: "View OEM Manufacturing",
      }}
      relatedLinks={[
        {
          href: "/contract-manufacturing-india",
          label: "Contract Manufacturing India",
        },
        {
          href: "/industrial-manufacturing-services",
          label: "Industrial Manufacturing Services",
        },
        {
          href: "/turnkey-manufacturing-services",
          label: "Turnkey Manufacturing Services",
        },
      ]}
    />
  );
}
