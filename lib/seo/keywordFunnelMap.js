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
      "packaging-company-india": withDefaults("packaging", {
        title: "Packaging Company India",
        intro:
          "Packaging company support in India for D2C, retail, and B2B buyers looking for reliable supply, quality control, and growth-ready execution.",
        sections: [
          {
            heading: "Business-focused packaging support",
            body: "We support practical packaging workflows aligned to quality consistency, dispatch timelines, and recurring demand cycles.",
          },
          {
            heading: "Built for continuity",
            body: "Our model supports ongoing procurement needs with predictable output and response-driven coordination.",
          },
        ],
        seo: {
          title: "Packaging Company India | Prem Industries",
          description:
            "Packaging company in India supporting D2C and B2B brands with reliable packaging execution and scalable supply programs.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.coreCommercial[1],
            packagingKeywords.customB2B[4],
            packagingKeywords.industrySpecific[4],
            packagingKeywords.longTail[0],
            packagingKeywords.conversion[2],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "packaging-supplier-india": withDefaults("packaging", {
        title: "Packaging Supplier India",
        intro:
          "Packaging supplier support in India for brands and procurement teams needing dependable packaging quality and recurring supply.",
        sections: [
          {
            heading: "Supplier model for recurring demand",
            body: "We support recurring procurement with process consistency, practical planning, and dependable dispatch readiness.",
          },
          {
            heading: "Aligned to B2B buying cycles",
            body: "Our packaging support model is designed for continuity and repeat-order confidence.",
          },
        ],
        seo: {
          title: "Packaging Supplier India | Prem Industries",
          description:
            "Packaging supplier in India for D2C and B2B buyers needing quality consistency, operational reliability, and scalable support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.coreCommercial[3],
            packagingKeywords.customB2B[0],
            packagingKeywords.location[0],
            packagingKeywords.longTail[1],
            packagingKeywords.conversion[3],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "custom-packaging-supplier-india": withDefaults("packaging", {
        title: "Custom Packaging Supplier India",
        intro:
          "Custom packaging supplier in India for brands that require tailored packaging solutions and dependable quality across repeat runs.",
        sections: [
          {
            heading: "Tailored packaging execution",
            body: "We support custom packaging requirements based on product profile, usage conditions, and dispatch realities.",
          },
          {
            heading: "Repeatable quality over cycles",
            body: "Our workflows are structured for consistency across recurring production and replenishment schedules.",
          },
        ],
        seo: {
          title: "Custom Packaging Supplier India | Prem Industries",
          description:
            "Custom packaging supplier in India supporting tailored packaging requirements with quality consistency and scalable output.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.customB2B[0],
            packagingKeywords.longTail[2],
            packagingKeywords.longTail[3],
            packagingKeywords.industrySpecific[0],
            packagingKeywords.conversion[0],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "bulk-packaging-manufacturer": withDefaults("packaging", {
        title: "Bulk Packaging Manufacturer",
        intro:
          "Bulk packaging manufacturer support for businesses that require high-volume supply with stable quality and delivery confidence.",
        sections: [
          {
            heading: "Volume-ready packaging output",
            body: "We support high-volume packaging programs with structured production planning and repeat quality checkpoints.",
          },
          {
            heading: "Dependable for large demand cycles",
            body: "Our processes are designed for repeat dispatch and continuity in large-order procurement environments.",
          },
        ],
        seo: {
          title: "Bulk Packaging Manufacturer | Prem Industries",
          description:
            "Bulk packaging manufacturer for B2B and D2C programs requiring high-volume supply, consistency, and dispatch reliability.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.customB2B[1],
            packagingKeywords.coreCommercial[4],
            packagingKeywords.ecommerce[3],
            packagingKeywords.location[4],
            packagingKeywords.conversion[3],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "eco-friendly-packaging-manufacturer": withDefaults("packaging", {
        title: "Eco Friendly Packaging Manufacturer",
        intro:
          "Eco friendly packaging manufacturer support for brands prioritizing sustainability without compromising commercial reliability.",
        sections: [
          {
            heading: "Sustainability-oriented packaging support",
            body: "We support packaging programs that align with environmentally conscious brand requirements and supply continuity.",
          },
          {
            heading: "Built for growing D2C brands",
            body: "Our model supports practical scaling with quality consistency for sustainability-led product programs.",
          },
        ],
        seo: {
          title: "Eco Friendly Packaging Manufacturer | Prem Industries",
          description:
            "Eco friendly packaging manufacturer for D2C and B2B brands needing sustainable packaging support with repeatable quality.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.longTail[4],
            packagingKeywords.blog[4],
            packagingKeywords.customB2B[2],
            packagingKeywords.industrySpecific[2],
            packagingKeywords.conversion[4],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "fmcg-packaging-manufacturer": withDefaults("packaging", {
        title: "FMCG Packaging Manufacturer",
        intro:
          "FMCG packaging manufacturer support for fast-moving product categories requiring continuity, consistency, and dispatch-ready execution.",
        sections: [
          {
            heading: "Optimized for FMCG demand",
            body: "We support FMCG packaging programs with repeat output quality and practical lead-time planning.",
          },
          {
            heading: "Reliable recurring supply",
            body: "Our teams support sustained replenishment cycles for brands with continuous market movement.",
          },
        ],
        seo: {
          title: "FMCG Packaging Manufacturer | Prem Industries",
          description:
            "FMCG packaging manufacturer in India for brands needing repeat quality, dependable supply, and scalable packaging support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.industrySpecific[0],
            packagingKeywords.industrySpecific[1],
            packagingKeywords.coreCommercial[0],
            packagingKeywords.longTail[0],
            packagingKeywords.conversion[1],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "custom-packaging-solutions": withDefaults("packaging", {
        title: "Custom Packaging Solutions",
        intro:
          "Custom packaging solutions for brands needing product-fit packaging, reliable execution, and repeat supply continuity.",
        sections: [
          {
            heading: "Packaging designed around your use case",
            body: "We support custom structures and practical packaging workflows aligned to product handling, shelf use, and logistics.",
          },
          {
            heading: "Built for repeat demand",
            body: "Our execution model supports recurring production cycles with quality consistency and operational reliability.",
          },
        ],
        seo: {
          title: "Custom Packaging Solutions | Prem Industries",
          description:
            "Custom packaging solutions for D2C and B2B brands requiring tailored packaging execution and scalable supply support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.coreCommercial[4],
            packagingKeywords.customB2B[0],
            packagingKeywords.longTail[2],
            packagingKeywords.longTail[3],
            packagingKeywords.conversion[2],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "ecommerce-packaging": withDefaults("packaging", {
        title: "Ecommerce Packaging",
        intro:
          "Ecommerce packaging support for online and D2C brands needing courier-safe output, brand consistency, and scalable operations.",
        sections: [
          {
            heading: "Courier-ready packaging execution",
            body: "We support e-commerce packaging requirements with practical focus on protection, presentation, and dispatch reliability.",
          },
          {
            heading: "Aligned to growth-stage brands",
            body: "Our model supports repeat demand and campaign-led volume variation across D2C operations.",
          },
        ],
        seo: {
          title: "Ecommerce Packaging | Prem Industries",
          description:
            "Ecommerce packaging partner for D2C and online brands needing courier-safe quality and repeat supply support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.ecommerce[0],
            packagingKeywords.ecommerce[1],
            packagingKeywords.ecommerce[2],
            packagingKeywords.ecommerce[4],
            packagingKeywords.conversion[4],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "industrial-packaging": withDefaults("packaging", {
        title: "Industrial Packaging",
        intro:
          "Industrial packaging support for B2B supply programs requiring robust packaging quality, consistency, and repeat dispatch readiness.",
        sections: [
          {
            heading: "Industrial-first packaging workflows",
            body: "We support packaging requirements for heavy-use and B2B distribution contexts with controlled quality checkpoints.",
          },
          {
            heading: "Supply continuity for recurring programs",
            body: "Our teams align production and dispatch planning to support stable recurring procurement cycles.",
          },
        ],
        seo: {
          title: "Industrial Packaging | Prem Industries",
          description:
            "Industrial packaging solutions for B2B programs requiring robust execution, quality consistency, and scalable support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.industrySpecific[4],
            packagingKeywords.coreCommercial[3],
            packagingKeywords.corrugatedBoxes[3],
            packagingKeywords.customB2B[1],
            packagingKeywords.conversion[3],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "food-packaging-boxes": withDefaults("packaging", {
        title: "Food Packaging Boxes",
        intro:
          "Food packaging boxes for brands seeking reliable packaging quality, repeat supply, and production continuity for food categories.",
        sections: [
          {
            heading: "Packaging support for food category needs",
            body: "We support practical food packaging programs with process discipline and quality consistency for repeat procurement.",
          },
          {
            heading: "Built for recurring dispatch cycles",
            body: "Our model supports demand continuity and coordinated supply for growing food-focused brands.",
          },
        ],
        seo: {
          title: "Food Packaging Boxes | Prem Industries",
          description:
            "Food packaging boxes manufacturer support for brands needing dependable packaging quality and repeat supply continuity.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.industrySpecific[1],
            packagingKeywords.coreCommercial[0],
            packagingKeywords.corrugatedBoxes[4],
            packagingKeywords.longTail[0],
            packagingKeywords.conversion[1],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "printed-packaging-boxes": withDefaults("packaging", {
        title: "Printed Packaging Boxes",
        intro:
          "Printed packaging boxes for D2C and B2B brands looking for presentation-ready output with dependable production consistency.",
        sections: [
          {
            heading: "Brand-forward packaging execution",
            body: "We support printed packaging requirements aligned to brand presentation and practical dispatch readiness.",
          },
          {
            heading: "Consistent quality across repeat runs",
            body: "Our workflows support recurring production programs with stable output standards.",
          },
        ],
        seo: {
          title: "Printed Packaging Boxes | Prem Industries",
          description:
            "Printed packaging boxes for D2C and B2B brands needing strong presentation quality and scalable supply support.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.customB2B[0],
            packagingKeywords.coreCommercial[2],
            packagingKeywords.luxuryPackaging[1],
            packagingKeywords.longTail[1],
            packagingKeywords.conversion[2],
          ]),
          image: "/home/hero-packaging.jpg",
        },
      }),
      "export-packaging": withDefaults("packaging", {
        title: "Export Packaging",
        intro:
          "Export packaging support for businesses that need durable packaging quality, handling readiness, and reliable shipment continuity.",
        sections: [
          {
            heading: "Packaging built for shipment stress",
            body: "We support export-oriented packaging needs focused on protection, consistency, and transport readiness.",
          },
          {
            heading: "Dependable repeat supply",
            body: "Our model supports recurring export cycles with operational planning and stable output quality.",
          },
        ],
        seo: {
          title: "Export Packaging | Prem Industries",
          description:
            "Export packaging services for B2B programs requiring durable packaging performance and repeat supply reliability.",
          keywords: getKeywordsForMetadata([
            packagingKeywords.corrugatedBoxes[2],
            packagingKeywords.corrugatedBoxes[4],
            packagingKeywords.customB2B[1],
            packagingKeywords.industrySpecific[4],
            packagingKeywords.conversion[3],
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
      "injection-molding-services-india": withDefaults("injection-molding", {
        title: "Injection Molding Services India",
        intro:
          "Injection molding services in India for OEM and industrial buyers needing repeat quality, process control, and scalable component output.",
        sections: [
          {
            heading: "Service reliability for B2B programs",
            body: "We support ongoing injection molding requirements with structured process discipline and quality checkpoints.",
          },
          {
            heading: "Scale-ready component production",
            body: "Our model supports medium to high-volume output with dispatch-focused planning.",
          },
        ],
        seo: {
          title: "Injection Molding Services India | Prem Industries",
          description:
            "Injection molding services in India for B2B and OEM programs requiring process consistency and scalable output.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.core[3],
            injectionKeywords.customOem[1],
            injectionKeywords.industryBased[4],
            injectionKeywords.highIntent[4],
            injectionKeywords.conversion[0],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "injection-molding-supplier-india": withDefaults("injection-molding", {
        title: "Injection Molding Supplier India",
        intro:
          "Injection molding supplier in India for businesses requiring dependable molded component supply and repeat manufacturing quality.",
        sections: [
          {
            heading: "Supplier stability for recurring demand",
            body: "We support recurring molded-part requirements through structured execution and repeat-process control.",
          },
          {
            heading: "Aligned to OEM expectations",
            body: "Our production model supports consistency, planning clarity, and program continuity.",
          },
        ],
        seo: {
          title: "Injection Molding Supplier India | Prem Industries",
          description:
            "Injection molding supplier in India supporting OEM and industrial programs with quality consistency and scalable supply.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.core[2],
            injectionKeywords.location[4],
            injectionKeywords.customOem[4],
            injectionKeywords.highIntent[2],
            injectionKeywords.conversion[4],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "industrial-plastic-parts-manufacturer": withDefaults(
        "injection-molding",
        {
          title: "Industrial Plastic Parts Manufacturer",
          intro:
            "Industrial plastic parts manufacturer support for applications needing controlled quality, repeatability, and production continuity.",
          sections: [
            {
              heading: "Industrial application readiness",
              body: "We support part programs where process consistency and durability expectations are critical.",
            },
            {
              heading: "Reliable long-run output",
              body: "Our teams support ongoing production schedules with repeat quality checkpoints.",
            },
          ],
          seo: {
            title: "Industrial Plastic Parts Manufacturer | Prem Industries",
            description:
              "Industrial plastic parts manufacturer for OEM and B2B buyers requiring repeat quality and dependable production support.",
            keywords: getKeywordsForMetadata([
              injectionKeywords.productBased[3],
              injectionKeywords.productBased[0],
              injectionKeywords.industryBased[4],
              injectionKeywords.highIntent[1],
              injectionKeywords.conversion[1],
            ]),
            image: "/injectionmolding/injection.webp",
          },
        },
      ),
      "contract-injection-molding": withDefaults("injection-molding", {
        title: "Contract Injection Molding",
        intro:
          "Contract injection molding support in India for OEM and industrial buyers requiring process reliability and scalable production continuity.",
        sections: [
          {
            heading: "Contract-focused execution",
            body: "We support contract manufacturing programs with process discipline, output stability, and clear planning.",
          },
          {
            heading: "Built for long-term partnerships",
            body: "Our model supports sustained supply programs where recurring quality and reliability are essential.",
          },
        ],
        seo: {
          title: "Contract Injection Molding | Prem Industries",
          description:
            "Contract injection molding in India for OEM and B2B programs requiring dependable quality and scalable execution.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.customOem[1],
            injectionKeywords.customOem[4],
            injectionKeywords.highIntent[0],
            injectionKeywords.longTail[2],
            injectionKeywords.conversion[3],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "thermoplastic-injection-molding": withDefaults("injection-molding", {
        title: "Thermoplastic Injection Molding",
        intro:
          "Thermoplastic injection molding support for precision parts requiring controlled processing and repeatable manufacturing output.",
        sections: [
          {
            heading: "Technical process consistency",
            body: "We support thermoplastic part programs with process checkpoints designed for repeat quality.",
          },
          {
            heading: "Ready for OEM integration",
            body: "Our model supports production continuity and dimensional consistency for ongoing component programs.",
          },
        ],
        seo: {
          title: "Thermoplastic Injection Molding | Prem Industries",
          description:
            "Thermoplastic injection molding support for OEM and industrial buyers requiring technical process control and repeat quality.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.technical[0],
            injectionKeywords.technical[3],
            injectionKeywords.productBased[1],
            injectionKeywords.longTail[4],
            injectionKeywords.conversion[2],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "custom-plastic-components-india": withDefaults("injection-molding", {
        title: "Custom Plastic Components India",
        intro:
          "Custom plastic components support in India for OEM and industrial part programs requiring tailored production and repeatable quality.",
        sections: [
          {
            heading: "Custom component manufacturing",
            body: "We support tailored part requirements with controlled workflows aligned to repeat quality goals.",
          },
          {
            heading: "Scalable from onboarding to repeat",
            body: "Our model supports both pilot scale and ongoing production continuity for B2B buyers.",
          },
        ],
        seo: {
          title: "Custom Plastic Components India | Prem Industries",
          description:
            "Custom plastic components in India for OEM and industrial requirements needing repeat quality and scalable production.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.productBased[1],
            injectionKeywords.productBased[2],
            injectionKeywords.customOem[2],
            injectionKeywords.highIntent[3],
            injectionKeywords.location[4],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "plastic-injection-molding-india": withDefaults("injection-molding", {
        title: "Plastic Injection Molding India",
        intro:
          "Plastic injection molding in India for OEM and industrial programs needing repeatable quality, process control, and scalable output.",
        sections: [
          {
            heading: "India-focused manufacturing support",
            body: "We support production requirements for B2B buyers looking for process consistency and long-run reliability.",
          },
          {
            heading: "Built for recurring component demand",
            body: "Our teams align planning and quality checkpoints for stable repeat dispatch cycles.",
          },
        ],
        seo: {
          title: "Plastic Injection Molding India | Prem Industries",
          description:
            "Plastic injection molding in India for OEM and industrial buyers requiring repeat quality and scalable component supply.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.core[0],
            injectionKeywords.core[1],
            injectionKeywords.highIntent[0],
            injectionKeywords.location[4],
            injectionKeywords.conversion[0],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "oem-injection-molding": withDefaults("injection-molding", {
        title: "OEM Injection Molding",
        intro:
          "OEM injection molding support for industrial buyers needing process reliability, quality stability, and long-term production continuity.",
        sections: [
          {
            heading: "OEM-ready production discipline",
            body: "Programs are managed with repeat-process controls to support stable component quality over long cycles.",
          },
          {
            heading: "Scalable for recurring supply",
            body: "Our model supports sustained output and delivery planning for ongoing OEM requirements.",
          },
        ],
        seo: {
          title: "OEM Injection Molding | Prem Industries",
          description:
            "OEM injection molding services for industrial buyers requiring stable quality and scalable manufacturing support.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.customOem[0],
            injectionKeywords.customOem[4],
            injectionKeywords.productBased[4],
            injectionKeywords.highIntent[2],
            injectionKeywords.conversion[4],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "automotive-plastic-parts": withDefaults("injection-molding", {
        title: "Automotive Plastic Parts",
        intro:
          "Automotive plastic parts manufacturing support for programs needing repeat precision, stable quality, and scalable production continuity.",
        sections: [
          {
            heading: "Automotive program consistency",
            body: "We support automotive part workflows with disciplined process checkpoints and repeat quality controls.",
          },
          {
            heading: "Production continuity for OEM demand",
            body: "Our teams support recurring schedules for ongoing automotive component supply requirements.",
          },
        ],
        seo: {
          title: "Automotive Plastic Parts | Prem Industries",
          description:
            "Automotive plastic parts manufacturer support for OEM and tier supply programs requiring quality stability and repeat output.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.industryBased[0],
            injectionKeywords.productBased[0],
            injectionKeywords.productBased[3],
            injectionKeywords.highIntent[4],
            injectionKeywords.conversion[1],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "medical-plastic-components": withDefaults("injection-molding", {
        title: "Medical Plastic Components",
        intro:
          "Medical plastic components support for quality-sensitive requirements where process consistency and repeat output are critical.",
        sections: [
          {
            heading: "Quality-led component execution",
            body: "We support controlled molding workflows designed for high-consistency manufacturing requirements.",
          },
          {
            heading: "Reliable recurring production",
            body: "Our production model is aligned to support repeat schedules and quality continuity.",
          },
        ],
        seo: {
          title: "Medical Plastic Components | Prem Industries",
          description:
            "Medical plastic components manufacturing support with process consistency and repeat quality for industrial supply programs.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.industryBased[2],
            injectionKeywords.productBased[1],
            injectionKeywords.technical[4],
            injectionKeywords.longTail[1],
            injectionKeywords.conversion[2],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "electrical-plastic-parts": withDefaults("injection-molding", {
        title: "Electrical Plastic Parts",
        intro:
          "Electrical plastic parts support for component programs requiring repeat quality, process control, and production scalability.",
        sections: [
          {
            heading: "Component reliability focus",
            body: "We support electrical plastic part programs with process discipline and repeat quality checkpoints.",
          },
          {
            heading: "Scalable supply model",
            body: "Our teams support recurring output for long-term industrial and OEM requirements.",
          },
        ],
        seo: {
          title: "Electrical Plastic Parts | Prem Industries",
          description:
            "Electrical plastic parts manufacturer support for industrial programs requiring repeat quality and dependable supply.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.industryBased[1],
            injectionKeywords.productBased[0],
            injectionKeywords.productBased[2],
            injectionKeywords.highIntent[1],
            injectionKeywords.conversion[3],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "abs-molding": withDefaults("injection-molding", {
        title: "ABS Molding",
        intro:
          "ABS molding support for product and industrial part programs needing repeat dimensional consistency and dependable output.",
        sections: [
          {
            heading: "Material-focused process control",
            body: "We support ABS part requirements through controlled processing and structured quality checks.",
          },
          {
            heading: "Production continuity for B2B demand",
            body: "Our model supports recurring schedules with stable quality and delivery alignment.",
          },
        ],
        seo: {
          title: "ABS Molding | Prem Industries",
          description:
            "ABS molding services for OEM and industrial buyers requiring process control, repeat quality, and scalable support.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.technical[0],
            injectionKeywords.technical[3],
            injectionKeywords.productBased[2],
            injectionKeywords.longTail[0],
            injectionKeywords.conversion[2],
          ]),
          image: "/injectionmolding/injection.webp",
        },
      }),
      "pp-molding": withDefaults("injection-molding", {
        title: "PP Molding",
        intro:
          "PP molding support for high-volume part programs requiring repeatability, quality consistency, and cost-efficient scale.",
        sections: [
          {
            heading: "Stable molding execution",
            body: "We support PP part production with process consistency and repeat quality control across batches.",
          },
          {
            heading: "Built for volume continuity",
            body: "Our workflows support recurring high-volume requirements with practical production planning.",
          },
        ],
        seo: {
          title: "PP Molding | Prem Industries",
          description:
            "PP molding services for industrial and OEM programs requiring repeat quality and volume-ready production support.",
          keywords: getKeywordsForMetadata([
            injectionKeywords.technical[3],
            injectionKeywords.productBased[3],
            injectionKeywords.longTail[2],
            injectionKeywords.highIntent[4],
            injectionKeywords.conversion[1],
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
      "metal-fabrication-services-india": withDefaults("sheet-metal", {
        title: "Metal Fabrication Services India",
        intro:
          "Metal fabrication services in India for industrial and OEM buyers requiring process reliability, component consistency, and scalable execution.",
        sections: [
          {
            heading: "End-to-end fabrication support",
            body: "We support cutting, forming, and assembly-ready workflows with quality checkpoints for repeat performance.",
          },
          {
            heading: "Built for recurring B2B demand",
            body: "Our model supports continuity across repeat orders and long-running industrial requirements.",
          },
        ],
        seo: {
          title: "Metal Fabrication Services India | Prem Industries",
          description:
            "Metal fabrication services in India for OEM and industrial programs requiring controlled quality and scalable output.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[4],
            sheetMetalKeywords.services[4],
            sheetMetalKeywords.b2bOem[4],
            sheetMetalKeywords.industries[3],
            sheetMetalKeywords.conversion[3],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-fabrication-company": withDefaults("sheet-metal", {
        title: "Sheet Metal Fabrication Company",
        intro:
          "Sheet metal fabrication company support for OEM and B2B buyers seeking repeat quality, scalable output, and dependable execution.",
        sections: [
          {
            heading: "Company-scale fabrication workflows",
            body: "We support fabrication programs with practical planning and quality consistency for repeat industrial demand.",
          },
          {
            heading: "Focused on operational reliability",
            body: "Our teams align process controls to maintain output stability across ongoing requirements.",
          },
        ],
        seo: {
          title: "Sheet Metal Fabrication Company | Prem Industries",
          description:
            "Sheet metal fabrication company in India for OEM and industrial buyers requiring dependable quality and scalable support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[3],
            sheetMetalKeywords.core[0],
            sheetMetalKeywords.scaling[0],
            sheetMetalKeywords.b2bOem[3],
            sheetMetalKeywords.conversion[0],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "industrial-metal-fabrication": withDefaults("sheet-metal", {
        title: "Industrial Metal Fabrication",
        intro:
          "Industrial metal fabrication support for heavy-use applications requiring robust process discipline and repeatable output quality.",
        sections: [
          {
            heading: "Industrial-grade process discipline",
            body: "We support fabrication workflows aligned to industrial quality expectations and repeat production reliability.",
          },
          {
            heading: "Suitable for OEM supply programs",
            body: "Our model supports scalable supply for customers with sustained industrial demand.",
          },
        ],
        seo: {
          title: "Industrial Metal Fabrication | Prem Industries",
          description:
            "Industrial metal fabrication services for OEM and B2B requirements needing controlled quality and dependable throughput.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.industries[3],
            sheetMetalKeywords.industries[0],
            sheetMetalKeywords.products[4],
            sheetMetalKeywords.scaling[2],
            sheetMetalKeywords.conversion[4],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "contract-metal-fabrication": withDefaults("sheet-metal", {
        title: "Contract Metal Fabrication",
        intro:
          "Contract metal fabrication support in India for OEM and industrial buyers needing continuity, controlled quality, and scalable execution.",
        sections: [
          {
            heading: "Contract-ready manufacturing model",
            body: "We support contract fabrication programs with process consistency and structured quality checkpoints.",
          },
          {
            heading: "Reliable long-term support",
            body: "Our teams are aligned for recurring production cycles and dispatch continuity.",
          },
        ],
        seo: {
          title: "Contract Metal Fabrication | Prem Industries",
          description:
            "Contract metal fabrication in India for OEM and B2B buyers requiring dependable execution and repeat quality.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.b2bOem[1],
            sheetMetalKeywords.b2bOem[0],
            sheetMetalKeywords.core[5],
            sheetMetalKeywords.scaling[1],
            sheetMetalKeywords.conversion[3],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "custom-metal-components": withDefaults("sheet-metal", {
        title: "Custom Metal Components",
        intro:
          "Custom metal components support for OEM and industrial programs requiring part-specific fabrication and repeat process control.",
        sections: [
          {
            heading: "Part-specific fabrication support",
            body: "We support custom component requirements with process checkpoints aligned to repeat quality goals.",
          },
          {
            heading: "Scalable B2B production",
            body: "Our model supports both onboarding requirements and long-term production continuity.",
          },
        ],
        seo: {
          title: "Custom Metal Components | Prem Industries",
          description:
            "Custom metal components manufacturer for OEM and industrial programs requiring controlled quality and scalable fabrication.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.products[1],
            sheetMetalKeywords.products[0],
            sheetMetalKeywords.b2bOem[2],
            sheetMetalKeywords.longTail[2],
            sheetMetalKeywords.conversion[2],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "prototype-metal-fabrication": withDefaults("sheet-metal", {
        title: "Prototype Metal Fabrication",
        intro:
          "Prototype metal fabrication support for product development and low-volume validation needs before full-scale production programs.",
        sections: [
          {
            heading: "Prototype-focused fabrication",
            body: "We support early-stage metal component requirements with quality checks and practical turnaround alignment.",
          },
          {
            heading: "Bridge to production scale",
            body: "Our model supports transition from prototype validation to recurring manufacturing programs.",
          },
        ],
        seo: {
          title: "Prototype Metal Fabrication | Prem Industries",
          description:
            "Prototype metal fabrication for OEM and industrial teams needing low-volume validation and scale-ready process support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.longTail[3],
            sheetMetalKeywords.longTail[2],
            sheetMetalKeywords.products[3],
            sheetMetalKeywords.services[0],
            sheetMetalKeywords.conversion[1],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "heavy-duty-metal-fabrication": withDefaults("sheet-metal", {
        title: "Heavy Duty Metal Fabrication",
        intro:
          "Heavy duty metal fabrication support for industrial applications requiring robust component execution and long-run production reliability.",
        sections: [
          {
            heading: "Built for high-load applications",
            body: "We support heavy-duty fabrication requirements with process control and repeatability for industrial operations.",
          },
          {
            heading: "Reliable for sustained demand",
            body: "Our workflows are aligned to support recurring heavy-duty component demand with consistent quality.",
          },
        ],
        seo: {
          title: "Heavy Duty Metal Fabrication | Prem Industries",
          description:
            "Heavy duty metal fabrication services for industrial and OEM programs requiring durable output and dependable production support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.longTail[4],
            sheetMetalKeywords.industries[4],
            sheetMetalKeywords.services[3],
            sheetMetalKeywords.scaling[4],
            sheetMetalKeywords.conversion[4],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "cnc-bending-services": withDefaults("sheet-metal", {
        title: "CNC Bending Services",
        intro:
          "CNC bending services for industrial and OEM programs needing repeat form accuracy, process consistency, and scalable output.",
        sections: [
          {
            heading: "Precision bending process control",
            body: "We support CNC bending requirements through structured workflows designed for repeat quality.",
          },
          {
            heading: "Built for recurring manufacturing demand",
            body: "Our model supports ongoing production cycles with stable quality and dispatch planning.",
          },
        ],
        seo: {
          title: "CNC Bending Services | Prem Industries",
          description:
            "CNC bending services for industrial and OEM buyers requiring repeat form accuracy and dependable production support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[2],
            sheetMetalKeywords.services[1],
            sheetMetalKeywords.products[4],
            sheetMetalKeywords.longTail[1],
            sheetMetalKeywords.conversion[1],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-welding-services": withDefaults("sheet-metal", {
        title: "Sheet Metal Welding Services",
        intro:
          "Sheet metal welding services for industrial assemblies requiring process consistency, weld integrity, and repeat production quality.",
        sections: [
          {
            heading: "Welding quality for assembly readiness",
            body: "We support welding workflows designed for repeatable outcomes and downstream assembly reliability.",
          },
          {
            heading: "Dependable for recurring jobs",
            body: "Our teams support recurring fabrication schedules with stable quality controls.",
          },
        ],
        seo: {
          title: "Sheet Metal Welding Services | Prem Industries",
          description:
            "Sheet metal welding services for OEM and industrial projects needing repeatable weld quality and dependable support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[3],
            sheetMetalKeywords.services[4],
            sheetMetalKeywords.b2bOem[1],
            sheetMetalKeywords.industries[3],
            sheetMetalKeywords.conversion[3],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "stainless-steel-fabrication": withDefaults("sheet-metal", {
        title: "Stainless Steel Fabrication",
        intro:
          "Stainless steel fabrication support for industrial and OEM components requiring durable finish quality and repeat process control.",
        sections: [
          {
            heading: "Material-specific fabrication discipline",
            body: "We support stainless fabrication requirements through quality checkpoints aligned to repeat output standards.",
          },
          {
            heading: "Ready for long-term supply programs",
            body: "Our model supports recurring B2B demand with stable process and dispatch continuity.",
          },
        ],
        seo: {
          title: "Stainless Steel Fabrication | Prem Industries",
          description:
            "Stainless steel fabrication services for OEM and industrial requirements needing durable quality and dependable production.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[4],
            sheetMetalKeywords.products[4],
            sheetMetalKeywords.industries[3],
            sheetMetalKeywords.scaling[2],
            sheetMetalKeywords.conversion[2],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "aluminum-sheet-fabrication": withDefaults("sheet-metal", {
        title: "Aluminum Sheet Fabrication",
        intro:
          "Aluminum sheet fabrication support for lightweight component programs requiring repeat quality and scalable manufacturing continuity.",
        sections: [
          {
            heading: "Lightweight fabrication workflows",
            body: "We support aluminum component requirements with controlled processes for consistency and reliability.",
          },
          {
            heading: "Designed for repeat output",
            body: "Our teams support recurring production schedules with stable quality and practical planning.",
          },
        ],
        seo: {
          title: "Aluminum Sheet Fabrication | Prem Industries",
          description:
            "Aluminum sheet fabrication services for OEM and industrial buyers needing repeat quality and dependable manufacturing.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.core[5],
            sheetMetalKeywords.products[1],
            sheetMetalKeywords.services[1],
            sheetMetalKeywords.longTail[2],
            sheetMetalKeywords.conversion[0],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "powder-coating-services": withDefaults("sheet-metal", {
        title: "Powder Coating Services",
        intro:
          "Powder coating services for fabricated metal components requiring finish consistency, durability, and repeatable production support.",
        sections: [
          {
            heading: "Finish consistency at scale",
            body: "We support coating workflows designed to maintain stable finish quality across recurring production cycles.",
          },
          {
            heading: "Integrated fabrication support",
            body: "Our model aligns coating requirements with fabrication schedules for continuity and speed.",
          },
        ],
        seo: {
          title: "Powder Coating Services | Prem Industries",
          description:
            "Powder coating services for industrial and OEM components requiring durable finish quality and repeat process reliability.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.services[4],
            sheetMetalKeywords.products[4],
            sheetMetalKeywords.industries[4],
            sheetMetalKeywords.scaling[1],
            sheetMetalKeywords.conversion[4],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-fabrication-delhi": withDefaults("sheet-metal", {
        title: "Sheet Metal Fabrication Delhi",
        intro:
          "Sheet metal fabrication support in Delhi for OEM and industrial buyers needing repeat quality and dependable local execution.",
        sections: [
          {
            heading: "Local execution with industrial discipline",
            body: "We support Delhi-region fabrication requirements through controlled workflows and practical dispatch planning.",
          },
          {
            heading: "Built for recurring B2B needs",
            body: "Our model supports ongoing production requirements with process stability and quality continuity.",
          },
        ],
        seo: {
          title: "Sheet Metal Fabrication Delhi | Prem Industries",
          description:
            "Sheet metal fabrication Delhi for OEM and industrial requirements needing repeat quality and reliable support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.location[0],
            sheetMetalKeywords.core[0],
            sheetMetalKeywords.services[1],
            sheetMetalKeywords.scaling[0],
            sheetMetalKeywords.conversion[0],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-fabrication-gurgaon": withDefaults("sheet-metal", {
        title: "Sheet Metal Fabrication Gurgaon",
        intro:
          "Sheet metal fabrication Gurgaon support for industrial programs requiring quality consistency and recurring manufacturing reliability.",
        sections: [
          {
            heading: "Regional fabrication support",
            body: "We support Gurgaon-region industrial requirements with structured process controls and repeatable quality outcomes.",
          },
          {
            heading: "Reliable for repeat schedules",
            body: "Our teams support recurring fabrication demand with clear production and dispatch planning.",
          },
        ],
        seo: {
          title: "Sheet Metal Fabrication Gurgaon | Prem Industries",
          description:
            "Sheet metal fabrication Gurgaon for OEM and industrial buyers requiring dependable quality and scale-ready support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.location[2],
            sheetMetalKeywords.core[1],
            sheetMetalKeywords.services[2],
            sheetMetalKeywords.scaling[1],
            sheetMetalKeywords.conversion[1],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
      "sheet-metal-fabrication-noida": withDefaults("sheet-metal", {
        title: "Sheet Metal Fabrication Noida",
        intro:
          "Sheet metal fabrication Noida support for OEM and B2B buyers seeking repeat quality, process reliability, and local responsiveness.",
        sections: [
          {
            heading: "Noida-focused industrial support",
            body: "We support regional fabrication requirements with controlled processes and dependable delivery continuity.",
          },
          {
            heading: "Scale-ready for recurring programs",
            body: "Our model supports sustained manufacturing demand with quality and planning discipline.",
          },
        ],
        seo: {
          title: "Sheet Metal Fabrication Noida | Prem Industries",
          description:
            "Sheet metal fabrication Noida for industrial and OEM requirements needing repeat quality and reliable support.",
          keywords: getKeywordsForMetadata([
            sheetMetalKeywords.location[1],
            sheetMetalKeywords.core[0],
            sheetMetalKeywords.services[0],
            sheetMetalKeywords.scaling[2],
            sheetMetalKeywords.conversion[2],
          ]),
          image: "/sheetmetal/press-new.jpg",
        },
      }),
    },
  },
};

const toTitleCase = (value) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const createProgrammaticPages = ({
  vertical,
  keywordGroups,
  image,
  avoidSlugs,
}) => {
  const pages = {};
  const localUsed = new Set();

  Object.values(keywordGroups)
    .flat()
    .forEach((keyword) => {
      if (typeof keyword !== "string") {
        return;
      }

      const trimmedKeyword = keyword.trim();
      if (!trimmedKeyword) {
        return;
      }

      const title = toTitleCase(trimmedKeyword);
      const baseSlug = toSlug(trimmedKeyword);
      if (!baseSlug) {
        return;
      }

      let slug = baseSlug;
      let dedupeIndex = 2;
      while (
        avoidSlugs.has(slug) ||
        localUsed.has(slug) ||
        Object.prototype.hasOwnProperty.call(pages, slug)
      ) {
        slug = `${baseSlug}-${dedupeIndex}`;
        dedupeIndex += 1;
      }

      localUsed.add(slug);
      pages[slug] = withDefaults(vertical, {
        title,
        intro: `${title} support from Prem Industries for OEM and B2B programs requiring dependable execution, process consistency, and scalable production continuity.`,
        sections: [
          {
            heading: `${title} execution model`,
            body: "We support industrial sourcing requirements through controlled workflows, repeat quality checkpoints, and delivery-focused planning.",
          },
          {
            heading: "Built for recurring demand",
            body: "Our teams align production and dispatch operations to support long-term B2B supply continuity and operational confidence.",
          },
        ],
        seo: {
          title: `${title} | Prem Industries`,
          description: `${title} solutions for OEM and industrial buyers in India looking for reliable quality, scalable output, and repeat supply support.`,
          keywords: getKeywordsForMetadata([trimmedKeyword]),
          image,
          noindex: true,
        },
      });
    });

  return pages;
};

const mergeProgrammaticPages = (vertical, pages) => {
  const target = keywordFunnelMap[vertical]?.pages;
  if (!target) {
    return;
  }

  Object.entries(pages).forEach(([slug, page]) => {
    if (!target[slug]) {
      target[slug] = page;
    }
  });
};

const packagingProgrammaticPages = createProgrammaticPages({
  vertical: "packaging",
  keywordGroups: packagingKeywords,
  image: "/home/hero-packaging.jpg",
  avoidSlugs: new Set(Object.keys(keywordFunnelMap.packaging.pages)),
});

const injectionProgrammaticPages = createProgrammaticPages({
  vertical: "injection-molding",
  keywordGroups: injectionKeywords,
  image: "/injectionmolding/injection.webp",
  avoidSlugs: new Set(Object.keys(keywordFunnelMap["injection-molding"].pages)),
});

const sheetMetalProgrammaticPages = createProgrammaticPages({
  vertical: "sheet-metal",
  keywordGroups: sheetMetalKeywords,
  image: "/sheetmetal/press-new.jpg",
  avoidSlugs: new Set(Object.keys(keywordFunnelMap["sheet-metal"].pages)),
});

mergeProgrammaticPages("packaging", packagingProgrammaticPages);
mergeProgrammaticPages("injection-molding", injectionProgrammaticPages);
mergeProgrammaticPages("sheet-metal", sheetMetalProgrammaticPages);

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
