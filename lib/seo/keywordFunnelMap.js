import {
  getKeywordsForMetadata,
  seoArchitecture,
} from "@/lib/seo/keywordArchitecture";
import { serviceDataMap } from "@/lib/seo/serviceDataMap";

const packagingKeywords = seoArchitecture.verticals.packaging.keywordGroups;
const injectionKeywords =
  seoArchitecture.verticals.injectionMolding.keywordGroups;
const sheetMetalKeywords =
  seoArchitecture.verticals.sheetMetalFabrication.keywordGroups;

const withDefaults = (vertical, page) => {
  const base = serviceDataMap[vertical] || {};
  return {
    eyebrow: page.eyebrow || base.eyebrow,
    title: page.title,
    intro: page.intro,
    sections: page.sections || [],
    primaryCta: page.primaryCta || base.primaryCta,
    secondaryCta: page.secondaryCta || base.secondaryCta,
    whatsappCta: page.whatsappCta || base.whatsappCta,
    relatedLinks: page.relatedLinks || base.relatedLinks || [],
    seo: page.seo,
  };
};

export const keywordFunnelMap = {
  packaging: {
    pages: {
      "packaging-manufacturer-india": withDefaults("packaging", {
        title: "Packaging Manufacturer India",
        intro:
          "Packaging manufacturer support in India for D2C and B2B brands requiring custom packaging solutions and scalable supply.",
        sections: [
          {
            heading: "Brand-ready packaging execution",
            body: "We support packaging workflows aligned to product protection, dispatch reliability, and quality consistency.",
          },
          {
            heading: "Scalable for growth",
            body: "From startup to high-volume demand, our model supports practical lead times and bulk order readiness.",
          },
        ],
        seo: {
          title: "Packaging Manufacturer India | Prem Industries",
          description:
            "Packaging manufacturer in India for D2C and B2B brands needing custom, scalable, and conversion-ready packaging support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.coreCommercial[0],
            packagingKeywords.customB2B[1],
            packagingKeywords.ecommerce[0],
            packagingKeywords.conversion[0],
            packagingKeywords.longTail[0],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "custom-packaging-manufacturer": withDefaults("packaging", {
        title: "Custom Packaging Manufacturer",
        intro:
          "Custom packaging manufacturer support for brands that need flexible packaging design execution with dependable production quality.",
        sections: [
          {
            heading: "Custom packaging built for product fit",
            body: "We support custom box and packaging development aligned to product dimensions, category requirements, and shipping use cases.",
          },
          {
            heading: "Consistent quality, repeat supply",
            body: "Our process supports repeatable output across recurring runs for growing D2C and B2B brands.",
          },
        ],
        seo: {
          title: "Custom Packaging Manufacturer | Prem Industries",
          description:
            "Custom packaging manufacturer for D2C and B2B brands seeking tailored packaging solutions with scalable supply support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.coreCommercial[2],
            packagingKeywords.longTail[2],
            packagingKeywords.longTail[3],
            packagingKeywords.longTail[4],
            packagingKeywords.conversion[2],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "corrugated-box-manufacturer-india": withDefaults("packaging", {
        title: "Corrugated Box Manufacturer India",
        intro:
          "Corrugated box manufacturer in India for shipping, bulk dispatch, and brand packaging programs requiring consistency and scale.",
        sections: [
          {
            heading: "Reliable corrugated packaging supply",
            body: "We support corrugated packaging requirements with practical production planning for recurring business needs.",
          },
          {
            heading: "Optimized for logistics use",
            body: "Our corrugated solutions are aligned to handling strength and transport readiness for e-commerce and industrial shipment flows.",
          },
        ],
        seo: {
          title: "Corrugated Box Manufacturer India | Prem Industries",
          description:
            "Corrugated box manufacturer in India providing shipping-ready and bulk packaging support for B2B and e-commerce brands.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.corrugatedBoxes[1],
            packagingKeywords.corrugatedBoxes[0],
            packagingKeywords.corrugatedBoxes[3],
            packagingKeywords.ecommerce[3],
            packagingKeywords.conversion[1],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "ecommerce-packaging-supplier": withDefaults("packaging", {
        title: "Ecommerce Packaging Supplier",
        intro:
          "Ecommerce packaging supplier support for digital brands and marketplace sellers needing scale-ready packaging output.",
        sections: [
          {
            heading: "Packaging aligned to e-commerce operations",
            body: "We support courier-safe, dispatch-ready packaging with quality consistency for repeat order cycles.",
          },
          {
            heading: "Built for D2C growth",
            body: "Our model supports emerging and scaling brands that need reliable packaging partners for demand expansion.",
          },
        ],
        seo: {
          title: "Ecommerce Packaging Supplier | Prem Industries",
          description:
            "Ecommerce packaging supplier for D2C and online brands requiring courier-ready packaging, repeat quality, and scalable supply.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.ecommerce[0],
            packagingKeywords.ecommerce[2],
            packagingKeywords.ecommerce[4],
            packagingKeywords.longTail[3],
            packagingKeywords.conversion[4],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "luxury-packaging-manufacturer": withDefaults("packaging", {
        title: "Luxury Packaging Manufacturer",
        intro:
          "Luxury packaging manufacturer support for premium brands looking for rigid and high-end packaging execution with quality control.",
        sections: [
          {
            heading: "Premium presentation packaging",
            body: "We support rigid and high-value packaging programs designed for premium retail and gifting categories.",
          },
          {
            heading: "Quality-driven repeat execution",
            body: "Our workflows are aligned to maintain presentation standards across recurring production runs.",
          },
        ],
        seo: {
          title: "Luxury Packaging Manufacturer | Prem Industries",
          description:
            "Luxury packaging manufacturer for premium brands requiring rigid box solutions and high-end packaging quality at scale.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.luxuryPackaging[0],
            packagingKeywords.luxuryPackaging[1],
            packagingKeywords.luxuryPackaging[2],
            packagingKeywords.luxuryPackaging[4],
            packagingKeywords.longTail[4],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
    },
  },
  "injection-molding": {
    pages: {
      "injection-molding-manufacturer-india": withDefaults(
        "injection-molding",
        {
          title: "Injection Molding Manufacturer India",
          intro:
            "Injection molding manufacturer in India for OEM and industrial programs requiring repeatability, quality control, and scalable production.",
          sections: [
            {
              heading: "Scale-ready injection programs",
              body: "We support medium and high-volume component production with practical process controls and dispatch planning.",
            },
            {
              heading: "Built for OEM reliability",
              body: "Our execution model supports stable output quality and program continuity for ongoing manufacturing requirements.",
            },
          ],
          seo: {
            title: "Injection Molding Manufacturer India | Prem Industries",
            description:
              "Injection molding manufacturer in India for OEM and B2B buyers seeking custom components, precision output, and scalable production.",
            keywords: getKeywordsForMetadata([
              injectionKeywords.core[0],
              injectionKeywords.core[2],
              injectionKeywords.customOem[0],
              injectionKeywords.longTail[1],
              injectionKeywords.conversion[0],
            ]),
            image: "/injectionmolding/injection.webp",
          },
        },
      ),
      "plastic-injection-molding-company": withDefaults("injection-molding", {
        title: "Plastic Injection Molding Company",
        intro:
          "Plastic injection molding company support for appliance and industrial part programs requiring repeat quality and throughput reliability.",
        sections: [
          {
            heading: "Repeatable molded part output",
            body: "Our teams run process checkpoints and setup controls to support consistent molded component quality.",
          },
          {
            heading: "Production planning support",
            body: "We align production schedules for recurring dispatch and long-running customer programs.",
          },
        ],
        seo: {
          title: "Plastic Injection Molding Company | Prem Industries",
          description:
            "Plastic injection molding company delivering repeatable quality for OEM and industrial programs across India.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.core[1],
            injectionKeywords.productBased[2],
            injectionKeywords.productBased[4],
            injectionKeywords.industryBased[4],
            injectionKeywords.highIntent[1],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "custom-plastic-molding": withDefaults("injection-molding", {
        title: "Custom Plastic Molding",
        intro:
          "Custom plastic molding solutions for customer-specific components with controlled manufacturing workflows and scalable production support.",
        sections: [
          {
            heading: "Custom part execution",
            body: "We support product-specific molding requirements through process monitoring, setup discipline, and quality verification.",
          },
          {
            heading: "B2B-ready scaling",
            body: "Our model supports production ramp-ups while maintaining part consistency and operational reliability.",
          },
        ],
        seo: {
          title: "Custom Plastic Molding | Prem Industries",
          description:
            "Custom plastic molding support for OEM and industrial buyers requiring repeatable quality and scalable manufacturing output.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.core[4],
            injectionKeywords.customOem[2],
            injectionKeywords.productBased[1],
            injectionKeywords.highIntent[3],
            injectionKeywords.conversion[2],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "oem-injection-molding-india": withDefaults("injection-molding", {
        title: "OEM Injection Molding India",
        intro:
          "OEM injection molding in India with quality-led execution, production continuity, and dependable dispatch support for long-term programs.",
        sections: [
          {
            heading: "OEM-focused production model",
            body: "Programs are executed around quality consistency, line-readiness, and schedule stability for OEM environments.",
          },
          {
            heading: "Program continuity support",
            body: "We support both onboarding and sustained production cycles to reduce ramp-up risks for customers.",
          },
        ],
        seo: {
          title: "OEM Injection Molding India | Prem Industries",
          description:
            "OEM injection molding in India for B2B buyers requiring stable process control, component quality, and scalable supply.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.customOem[0],
            injectionKeywords.customOem[1],
            injectionKeywords.productBased[4],
            injectionKeywords.conversion[4],
            injectionKeywords.highIntent[0],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "high-precision-plastic-molding": withDefaults("injection-molding", {
        title: "High Precision Plastic Molding",
        intro:
          "High precision plastic molding support for components requiring controlled quality, repeatability, and stable long-run production.",
        sections: [
          {
            heading: "Precision-driven process control",
            body: "Quality checkpoints and in-process validation help maintain dimensional consistency across production cycles.",
          },
          {
            heading: "Engineered for high-value applications",
            body: "We support precision molding for industrial and engineered product requirements where fit and finish are critical.",
          },
        ],
        seo: {
          title: "High Precision Plastic Molding | Prem Industries",
          description:
            "High precision plastic molding for OEM and industrial buyers needing consistent quality and repeatable production output.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.longTail[1],
            injectionKeywords.technical[0],
            injectionKeywords.technical[4],
            injectionKeywords.longTail[4],
            injectionKeywords.highIntent[2],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
    },
  },
  "sheet-metal": {
    pages: {
      "sheet-metal-fabrication-india": withDefaults("sheet-metal", {
        title: "Sheet Metal Fabrication India",
        intro:
          "Sheet metal fabrication in India for OEM and industrial buyers seeking repeatable quality, precision workflows, and scalable throughput.",
        sections: [
          {
            heading: "High-ticket fabrication execution",
            body: "We support fabrication programs with controlled workflows across cutting, forming, and assembly-oriented requirements.",
          },
          {
            heading: "Built for industrial continuity",
            body: "Our model focuses on production reliability and quality checkpoints for recurring B2B manufacturing demand.",
          },
        ],
        seo: {
          title: "Sheet Metal Fabrication India | Prem Industries",
          description:
            "Sheet metal fabrication in India for industrial and OEM programs requiring precision parts and dependable manufacturing output.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[0],
            sheetMetalKeywords.core[2],
            sheetMetalKeywords.industries[2],
            sheetMetalKeywords.b2bOem[4],
            sheetMetalKeywords.conversion[0],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-manufacturer-india": withDefaults("sheet-metal", {
        title: "Sheet Metal Manufacturer India",
        intro:
          "Sheet metal manufacturer in India for precision components and industrial programs requiring stable quality and supply continuity.",
        sections: [
          {
            heading: "Manufacturing consistency at scale",
            body: "We support repeat output quality through controlled process workflows and structured quality checkpoints.",
          },
          {
            heading: "OEM and B2B readiness",
            body: "Our execution model supports component supply programs where throughput and repeatability are critical.",
          },
        ],
        seo: {
          title: "Sheet Metal Manufacturer India | Prem Industries",
          description:
            "Sheet metal manufacturer in India providing precision components and dependable output for OEM and industrial requirements.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[1],
            sheetMetalKeywords.products[0],
            sheetMetalKeywords.products[2],
            sheetMetalKeywords.b2bOem[0],
            sheetMetalKeywords.scaling[2],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "custom-sheet-metal-fabrication": withDefaults("sheet-metal", {
        title: "Custom Sheet Metal Fabrication",
        intro:
          "Custom sheet metal fabrication for customer-specific parts with controlled quality workflows and scale-ready production support.",
        sections: [
          {
            heading: "Part-specific fabrication support",
            body: "We support custom fabrication requirements with process discipline and inspection checkpoints.",
          },
          {
            heading: "Designed for recurring programs",
            body: "Our model supports production continuity from onboarding through repeat batch dispatch.",
          },
        ],
        seo: {
          title: "Custom Sheet Metal Fabrication | Prem Industries",
          description:
            "Custom sheet metal fabrication support for OEM and industrial buyers requiring controlled quality and scalable manufacturing.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[4],
            sheetMetalKeywords.b2bOem[2],
            sheetMetalKeywords.products[1],
            sheetMetalKeywords.longTail[3],
            sheetMetalKeywords.conversion[2],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "precision-sheet-metal-parts": withDefaults("sheet-metal", {
        title: "Precision Sheet Metal Parts",
        intro:
          "Precision sheet metal parts manufacturing for industrial and OEM applications requiring dimensional consistency and repeatable output.",
        sections: [
          {
            heading: "Precision-first process control",
            body: "Our quality checkpoints are aligned to maintain tolerance stability and repeat quality across batches.",
          },
          {
            heading: "Application-ready components",
            body: "We support precision part programs for automotive, electronics, and industrial assemblies.",
          },
        ],
        seo: {
          title: "Precision Sheet Metal Parts | Prem Industries",
          description:
            "Precision sheet metal parts supplier for industrial programs requiring repeatability, quality control, and reliable delivery.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.products[2],
            sheetMetalKeywords.products[0],
            sheetMetalKeywords.longTail[1],
            sheetMetalKeywords.scaling[4],
            sheetMetalKeywords.conversion[2],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "oem-sheet-metal-manufacturer": withDefaults("sheet-metal", {
        title: "OEM Sheet Metal Manufacturer",
        intro:
          "OEM sheet metal manufacturer support for high-volume industrial programs requiring quality-led execution and production continuity.",
        sections: [
          {
            heading: "OEM-oriented execution",
            body: "Programs are managed around repeatability, part quality, and stable dispatch for downstream assembly readiness.",
          },
          {
            heading: "Scalable B2B manufacturing",
            body: "We support onboarding and long-running programs where volume reliability and process control are key.",
          },
        ],
        seo: {
          title: "OEM Sheet Metal Manufacturer | Prem Industries",
          description:
            "OEM sheet metal manufacturer for industrial buyers requiring scalable output, controlled quality, and dependable program execution.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.b2bOem[0],
            sheetMetalKeywords.b2bOem[3],
            sheetMetalKeywords.industries[4],
            sheetMetalKeywords.scaling[1],
            sheetMetalKeywords.conversion[4],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "laser-cutting-services-india": withDefaults("sheet-metal", {
        title: "Laser Cutting Services India",
        intro:
          "Laser cutting services in India for industrial buyers needing profile accuracy, quality consistency, and dependable fabrication readiness.",
        sections: [
          {
            heading: "Accuracy-driven cutting execution",
            body: "Our cutting workflows are designed to reduce rework risk and improve downstream process readiness.",
          },
          {
            heading: "Supports diverse metal applications",
            body: "We support industrial programs where profile accuracy and repeatability are critical to assembly quality.",
          },
        ],
        whatsappCta: {
          href: "https://wa.me/918447247227?text=I%20need%20laser%20cutting%20services%20in%20India.",
          label: "WhatsApp",
        },
        relatedLinks: [
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
        ],
        seo: {
          title: "Laser Cutting Services India | Prem Industries",
          description:
            "Laser cutting services in India for industrial fabrication workflows requiring profile accuracy, quality consistency, and reliable throughput.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[0],
            sheetMetalKeywords.services[4],
            sheetMetalKeywords.blog[2],
            sheetMetalKeywords.industries[1],
            sheetMetalKeywords.location[4],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "cnc-sheet-metal-fabrication": withDefaults("sheet-metal", {
        title: "CNC Sheet Metal Fabrication",
        intro:
          "CNC sheet metal fabrication support for OEM and B2B programs requiring consistent repeatability, controlled quality, and scalable execution.",
        sections: [
          {
            heading: "Controlled CNC fabrication workflow",
            body: "We combine process controls with production discipline to support repeatable quality over ongoing production cycles.",
          },
          {
            heading: "Ready for OEM and B2B programs",
            body: "Our CNC fabrication support is built for customers needing scalable output and dependable dispatch planning.",
          },
        ],
        whatsappCta: {
          href: "https://wa.me/918447247227?text=I%20need%20CNC%20sheet%20metal%20fabrication%20support.",
          label: "WhatsApp",
        },
        relatedLinks: [
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
        ],
        seo: {
          title: "CNC Sheet Metal Fabrication | Prem Industries",
          description:
            "CNC sheet metal fabrication services for OEM and B2B programs needing repeatable processing, controlled quality, and scalable execution.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[1],
            sheetMetalKeywords.core[2],
            sheetMetalKeywords.b2bOem[4],
            sheetMetalKeywords.industries[2],
            sheetMetalKeywords.conversion[4],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "metal-bending-services": withDefaults("sheet-metal", {
        title: "Metal Bending Services",
        intro:
          "Metal bending services for sheet metal programs needing dependable forming quality, repeatability, and production-ready component output.",
        sections: [
          {
            heading: "Reliable bending process control",
            body: "Our bending workflows are aligned to maintain form consistency and reduce variability across repeat runs.",
          },
          {
            heading: "Supports custom and recurring jobs",
            body: "We support both custom part requirements and ongoing production schedules for B2B buyers.",
          },
        ],
        whatsappCta: {
          href: "https://wa.me/918447247227?text=I%20need%20metal%20bending%20services.",
          label: "WhatsApp",
        },
        relatedLinks: [
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
        ],
        seo: {
          title: "Metal Bending Services | Prem Industries",
          description:
            "Metal bending services for sheet metal programs that need dependable forming quality and production-ready component output.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[2],
            sheetMetalKeywords.products[4],
            sheetMetalKeywords.industries[3],
            sheetMetalKeywords.longTail[2],
            sheetMetalKeywords.conversion[0],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "welding-fabrication-services": withDefaults("sheet-metal", {
        title: "Welding Fabrication Services",
        intro:
          "Welding fabrication services for industrial and OEM projects requiring strong assembly integrity and repeatable fabrication quality.",
        sections: [
          {
            heading: "Fabrication quality built into process",
            body: "Our teams follow process checkpoints to support repeatable welding outcomes and stable production quality.",
          },
          {
            heading: "Application-ready component support",
            body: "We support fabrication requirements for industrial, construction, and OEM-focused component programs.",
          },
        ],
        whatsappCta: {
          href: "https://wa.me/918447247227?text=I%20need%20welding%20fabrication%20services.",
          label: "WhatsApp",
        },
        relatedLinks: [
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
        ],
        seo: {
          title: "Welding Fabrication Services | Prem Industries",
          description:
            "Welding fabrication services for industrial and OEM projects requiring strong assembly integrity and repeatable fabrication quality.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[3],
            sheetMetalKeywords.services[4],
            sheetMetalKeywords.industries[2],
            sheetMetalKeywords.b2bOem[1],
            sheetMetalKeywords.conversion[3],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-fabrication-quote": withDefaults("sheet-metal", {
        title: "Sheet Metal Fabrication Quote",
        intro:
          "Request a sheet metal fabrication quote for custom components, OEM manufacturing requirements, and bulk industrial fabrication programs.",
        sections: [
          {
            heading: "Quote support for B2B requirements",
            body: "Share your part requirement, expected volume, and timeline to receive a structured response from our production team.",
          },
          {
            heading: "Fast-response engagement",
            body: "Our team supports quote discussions for custom fabrication, precision parts, and repeat manufacturing programs.",
          },
        ],
        whatsappCta: {
          href: "https://wa.me/918447247227?text=Please%20share%20a%20sheet%20metal%20fabrication%20quote.",
          label: "WhatsApp",
        },
        relatedLinks: [
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
        ],
        seo: {
          title: "Sheet Metal Fabrication Quote | Prem Industries",
          description:
            "Request a sheet metal fabrication quote for custom components, OEM manufacturing requirements, and bulk industrial fabrication programs.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.conversion[0],
            sheetMetalKeywords.conversion[1],
            sheetMetalKeywords.conversion[4],
            sheetMetalKeywords.core[0],
            sheetMetalKeywords.location[3],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
    },
  },
};

export const getKeywordPaths = () =>
  Object.entries(keywordFunnelMap).flatMap(([vertical, config]) =>
    Object.keys(config.pages).map((keyword) => ({ vertical, keyword })),
  );

export const getKeywordPageData = (vertical, keyword) =>
  keywordFunnelMap[vertical]?.pages?.[keyword] || null;

export const getKeywordSeoByPath = () =>
  Object.entries(keywordFunnelMap).reduce((acc, [vertical, config]) => {
    Object.entries(config.pages).forEach(([keyword, pageData]) => {
      acc[`/${vertical}/${keyword}`] = pageData.seo;
    });
    return acc;
  }, {});
