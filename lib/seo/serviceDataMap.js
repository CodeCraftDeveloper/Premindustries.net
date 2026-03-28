import {
  getKeywordsForMetadata,
  seoArchitecture,
} from "@/lib/seo/keywordArchitecture";

const packagingKeywords = seoArchitecture.verticals.packaging.keywordGroups;
const injectionKeywords =
  seoArchitecture.verticals.injectionMolding.keywordGroups;
const sheetMetalKeywords =
  seoArchitecture.verticals.sheetMetalFabrication.keywordGroups;

export const serviceDataMap = {
  packaging: {
    eyebrow: "Packaging Lead Engine",
    title: "Packaging Manufacturer India",
    intro:
      "Prem Industries supports D2C, retail, and B2B packaging requirements in India through custom packaging execution, bulk supply capability, and delivery-focused coordination for growing brands.",
    sections: [
      {
        heading: "Built for commercial and industrial demand",
        body: "From startup-friendly runs to enterprise scale, our packaging workflows support repeatability, quality consistency, and practical lead-time planning for brands that need dependable supply.",
      },
      {
        heading: "Ready for e-commerce, retail, and distribution",
        body: "We support corrugated, e-commerce, rigid, and custom packaging programs aligned to shipping performance, shelf presentation, and product protection expectations.",
      },
      {
        heading: "Designed for repeat orders",
        body: "Our packaging execution model focuses on commercial continuity, dispatch readiness, and output consistency for customers managing recurring demand.",
      },
    ],
    primaryCta: { href: "/contact", label: "Get Packaging Quote" },
    secondaryCta: {
      href: "/industrial-solutions-india",
      label: "Explore Industrial Solutions",
    },
    whatsappCta: {
      href: "https://wa.me/918447247227?text=I%20need%20a%20packaging%20quote.",
      label: "WhatsApp",
    },
    relatedLinks: [
      { href: "/packaging", label: "Packaging Hub" },
      {
        href: "/blogs/aahar-2026-delhi",
        label: "AAHAR 2026 Event Update",
      },
      { href: "/case-studies", label: "Manufacturing Case Studies" },
      {
        href: "/manufacturing-company-india",
        label: "Manufacturing Company India",
      },
      {
        href: "/oem-manufacturing-india",
        label: "OEM Manufacturing India",
      },
      { href: "/contact", label: "Contact Team" },
    ],
    seo: {
      title: "Packaging Manufacturer India | Prem Industries",
      description:
        "Packaging manufacturer in India for D2C and B2B buyers seeking custom packaging solutions, bulk supply reliability, and repeat-order support.",
      keywords: getKeywordsForMetadata([
        packagingKeywords.coreCommercial[0],
        packagingKeywords.coreCommercial[1],
        packagingKeywords.corrugatedBoxes[0],
        packagingKeywords.ecommerce[0],
        packagingKeywords.conversion[0],
      ]),
      image: "/home/hero-packaging.jpg",
    },
  },
  "injection-molding": {
    eyebrow: "Injection Molding Lead Engine",
    title: "Injection Molding Manufacturer India",
    intro:
      "Prem Industries delivers injection molding support for OEM and industrial buyers that need repeatable plastic component quality, scale-ready throughput, and structured production control.",
    sections: [
      {
        heading: "OEM-aligned injection moulding programs",
        body: "We support program stability with process discipline, tooling alignment, quality checkpoints, and coordinated dispatch planning.",
      },
      {
        heading: "From custom parts to repeat volume",
        body: "Our model supports custom plastic part requirements and long-running production cycles where consistency, finish, and fit are critical.",
      },
      {
        heading: "Built for production scale-up",
        body: "We help customers move from onboarding to stable recurring output with disciplined setup control, machine capacity planning, and delivery-focused execution.",
      },
    ],
    primaryCta: { href: "/contact", label: "Get Injection Quote" },
    secondaryCta: {
      href: "/injection-molding",
      label: "Explore Injection Capability",
    },
    whatsappCta: {
      href: "https://wa.me/918447247227?text=I%20need%20an%20injection%20molding%20quote.",
      label: "WhatsApp",
    },
    relatedLinks: [
      {
        href: "/injection-molding",
        label: "Injection Molding Hub",
      },
      {
        href: "/injection-molding/oem-injection-molding-india",
        label: "OEM Injection Molding India",
      },
      {
        href: "/injection-molding/custom-plastic-molding",
        label: "Custom Plastic Molding",
      },
      {
        href: "/injection-molding/high-precision-plastic-molding",
        label: "High Precision Plastic Molding",
      },
      {
        href: "/case-studies/injection-molding-appliance-housing",
        label: "Injection Moulding Case Study",
      },
      { href: "/contact", label: "Request Injection Quote" },
    ],
    seo: {
      title: "Injection Molding Manufacturer India | Prem Industries",
      description:
        "Injection molding manufacturer in India for OEM and B2B buyers requiring custom plastic components, controlled quality, and scalable production support.",
      keywords: getKeywordsForMetadata([
        injectionKeywords.core[0],
        injectionKeywords.core[1],
        injectionKeywords.customOem[0],
        injectionKeywords.longTail[1],
        injectionKeywords.conversion[0],
      ]),
      image: "/injectionmolding/injection.webp",
    },
  },
  "sheet-metal": {
    eyebrow: "Sheet Metal Lead Engine",
    title: "Sheet Metal Fabrication India",
    intro:
      "Prem Industries supports sheet metal fabrication programs for OEM and industrial buyers with precision-focused execution, scalable throughput, and dependable delivery reliability.",
    sections: [
      {
        heading: "Integrated fabrication capability",
        body: "We support fabrication workflows across cutting, forming, press operations, and assembly-oriented requirements with practical process control.",
      },
      {
        heading: "Designed for B2B continuity",
        body: "Our execution model emphasizes repeatability, tolerance control, quality checkpoints, and dependable supply support for long-term industrial programs.",
      },
      {
        heading: "Aligned to OEM supply programs",
        body: "From component onboarding to recurring dispatch, we help customers manage sheet metal requirements with stable execution and production visibility.",
      },
    ],
    primaryCta: { href: "/contact", label: "Get Sheet Metal Quote" },
    secondaryCta: {
      href: "/sheet-metal-components",
      label: "Explore Sheet Metal Capability",
    },
    whatsappCta: {
      href: "https://wa.me/918447247227?text=I%20need%20a%20sheet%20metal%20fabrication%20quote.",
      label: "WhatsApp",
    },
    relatedLinks: [
      { href: "/sheet-metal", label: "Sheet Metal Hub" },
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
      {
        href: "/case-studies/sheet-metal-automotive-bracket-line",
        label: "Sheet Metal Case Study",
      },
      {
        href: "/case-studies/coil-processing-fast-turnaround",
        label: "Coil Processing Case Study",
      },
      { href: "/contact", label: "Request Sheet Metal Quote" },
    ],
    seo: {
      title: "Sheet Metal Fabrication India | Prem Industries",
      description:
        "Sheet metal fabrication in India for OEM and industrial buyers seeking precision manufacturing, custom metal components, and scalable fabrication support.",
      keywords: getKeywordsForMetadata([
        sheetMetalKeywords.core[0],
        sheetMetalKeywords.core[1],
        sheetMetalKeywords.services[1],
        sheetMetalKeywords.b2bOem[0],
        sheetMetalKeywords.conversion[0],
      ]),
      image: "/sheetmetal/press-new.jpg",
    },
  },
};

export const serviceSlugs = Object.keys(serviceDataMap);
