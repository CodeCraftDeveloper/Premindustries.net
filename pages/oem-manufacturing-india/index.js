import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const oemHighlights = [
  "OEM manufacturing support with multi-process production capability",
  "Contract manufacturing programs designed for high-volume and repeat consistency",
  "Engineering and production teams aligned for quality-first execution",
  "Single-partner model for component manufacturing and delivery coordination",
];

export default function OemManufacturingIndiaPage() {
  const relatedLinks = [
    {
      href: "/industrial-solutions-india",
      label: "Industrial Solutions India",
      description: "Broader industrial support for OEM programs",
    },
    {
      href: "/manufacturing-company-india",
      label: "Manufacturing Company India",
      description: "Our full-scale manufacturing capability overview",
    },
    {
      href: "/contact",
      label: "Get Manufacturing Quote",
      description: "Share requirements and receive a direct response",
    },
  ];

  const internalLinks = [
    {
      href: "/industrial-solutions-india",
      label: "Industrial Solutions India",
      description: "Broader industrial support for OEM programs",
    },
    {
      href: "/manufacturing-company-india",
      label: "Manufacturing Company India",
      description: "Our full-scale manufacturing capability overview",
    },
    {
      href: "/third-party-manufacturing-india",
      label: "Third Party Manufacturing India",
      description: "Outsourced production programs with quality control",
    },
    {
      href: "/industrial-manufacturing-services",
      label: "Industrial Manufacturing Services",
      description: "Execution systems for high-volume industrial clients",
    },
    {
      href: "/turnkey-manufacturing-services",
      label: "Turnkey Manufacturing Services",
      description: "End-to-end delivery from onboarding to dispatch",
    },
    {
      href: "/contact",
      label: "Get Manufacturing Quote",
      description: "Share requirements and receive a direct response",
    },
  ];

  return (
    <KeywordLandingPage
      eyebrow="OEM Manufacturing Company India"
      title="OEM Manufacturing India"
      intro="We support OEM manufacturing in India through structured production, quality-focused contract execution, and scalable industrial supply support."
      highlights={oemHighlights}
      sections={[
        {
          heading: "OEM and contract manufacturing strengths",
          body: "Our OEM programs are structured to help customers reduce execution uncertainty through tighter process control, aligned engineering support, and repeatable production management.",
        },
        {
          heading: "Designed for recurring industrial demand",
          body: "We support long-term component supply programs where consistency, delivery coordination, and quality documentation matter as much as throughput capacity.",
        },
        {
          heading: "Single-partner thinking for manufacturing buyers",
          body: "By combining multiple manufacturing capabilities within one operating framework, we help procurement and operations teams simplify coordination while improving production visibility.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Get Manufacturing Quote" }}
      secondaryCta={{
        href: "/manufacturing-company-india",
        label: "Manufacturing Company India",
      }}
      whatsappCta={{
        href: "https://wa.me/918447247227?text=I%20need%20OEM%20manufacturing%20support%20in%20India.",
        label: "WhatsApp",
      }}
      relatedTitle="Related manufacturing pages"
      relatedLinks={relatedLinks}
      internalLinksTitle="Related OEM Service Pages"
      internalLinks={internalLinks}
      heroImage="/sheetmetal/press-new.jpg"
    />
  );
}
