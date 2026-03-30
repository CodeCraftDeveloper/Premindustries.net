import KeywordLandingPage from "@/components/common/KeywordLandingPage";

const capabilities = [
  "Contract manufacturing programs for industrial and consumer product categories",
  "Integrated sheet metal components, press shop, and injection moulding capability",
  "Production planning support for stable, repeatable, high-volume output",
  "Quality-focused execution with process control, documentation, and batch traceability",
];

export default function ManufacturingCompanyIndiaPage() {
  const relatedLinks = [
    {
      href: "/sheet-metal-components",
      label: "Sheet Metal Components",
      description: "Precision fabricated metal component capabilities",
    },
    {
      href: "/injection-molding",
      label: "Injection Moulding",
      description: "Scalable plastic component manufacturing programs",
    },
    {
      href: "/press-shop",
      label: "Press Shop Services",
      description: "Stamping and forming workflows for industrial buyers",
    },
    {
      href: "/contact",
      label: "Request Manufacturing Consultation",
      description: "Start a direct discussion for your project",
    },
  ];

  const internalLinks = [
    {
      href: "/industrial-solutions-india",
      label: "Industrial Solutions India",
      description: "Explore our industrial execution approach",
    },
    {
      href: "/oem-manufacturing-india",
      label: "OEM Manufacturing India",
      description: "See our contract and OEM manufacturing support",
    },
    {
      href: "/sheet-metal-components",
      label: "Sheet Metal Components",
      description: "Precision fabricated metal component capabilities",
    },
    {
      href: "/injection-molding",
      label: "Injection Moulding",
      description: "Scalable plastic component manufacturing programs",
    },
    {
      href: "/press-shop",
      label: "Press Shop Services",
      description: "Stamping and forming workflows for industrial buyers",
    },
    {
      href: "/contact",
      label: "Request Manufacturing Consultation",
      description: "Start a direct discussion for your project",
    },
  ];

  return (
    <KeywordLandingPage
      eyebrow="Prem Industries India Limited"
      title="Industrial Manufacturing Company India"
      intro="Prem Industries delivers end-to-end production support for OEMs, industrial buyers, and high-volume product teams."
      highlights={capabilities}
      sections={[
        {
          heading: "Why enterprises choose Prem Industries",
          body: "As a multi-sector manufacturing company, we combine engineering, production, quality systems, and delivery coordination to support scalable product programs across India.",
        },
        {
          heading: "Built for cross-functional production reliability",
          body: "Our manufacturing structure is designed to support sourcing teams that need consistent component quality, realistic production planning, and dependable dispatch execution across repeat cycles.",
        },
        {
          heading: "A broader industrial capability in one place",
          body: "From formed metal parts and injection moulded components to press-shop execution and customer-specific manufacturing support, our group model helps reduce vendor fragmentation for growing programs.",
        },
      ]}
      primaryCta={{ href: "/contact", label: "Request Manufacturing Consultation" }}
      secondaryCta={{
        href: "/industrial-solutions-india",
        label: "Explore Industrial Solutions",
      }}
      whatsappCta={{
        href: "https://wa.me/918447247227?text=I%20need%20support%20from%20an%20industrial%20manufacturing%20company%20in%20India.",
        label: "WhatsApp",
      }}
      relatedTitle="Explore capabilities"
      relatedLinks={relatedLinks}
      internalLinksTitle="Explore More Manufacturing Services"
      internalLinks={internalLinks}
      heroImage="/sheetmetal/press-new.jpg"
    />
  );
}
