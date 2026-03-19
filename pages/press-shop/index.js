import Head from "next/head";
import MachineContentSection from "@/components/common/MachineContentSection";
import SectionReveal from "@/components/common/SectionReveal";
import Hero from "@/components/press-shop/hero";

const paragraphs = [
  "Prem Industries India Limited's Press Shop is designed to convert flat sheet blanks into intricate components through stamping, pressing, piercing, and forming. Housing hydraulic, mechanical, and servo press systems, our shop handles part sizes ranging from small brackets to medium panel components with exceptional repeatability and finish.",
  "We operate multiple press capacities, including single-stroke and transfer-type presses for multi-stage operations. Our tooling services support progressive dies, compound operations, bending, embossing, and light coining. The integration of CAD/CAM programming and in-house tool design ensures precise control of part geometry and consistency over long runs.",
];

const listItems = [
  "Quick turnaround for custom die design and production",
  "Tolerance control to plus or minus 0.05 mm where required",
  "Tool monitoring, preventive maintenance, and spare tooling readiness",
  "Final inspection, deburring, and finishing inline",
];

export default function PressShopPage() {
  return (
    <>
      <Head>
        <title>Press Shop - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality Press Shop."
        />
        <meta
          name="title"
          content="Press Shop - Prem Industries India Limited"
        />
      </Head>

      <SectionReveal>
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <MachineContentSection
          paragraphs={paragraphs}
          listIntro="Key advantages include:"
          listItems={listItems}
          outro="Industries served span auto ancillaries, electronics enclosures, HVAC panels, home appliance housings, and more. Each component is inspected for form accuracy, burrs, and finishing standards before dispatch. With skilled operators, robust quality checks, and state-of-the-art machinery, our Press Shop transforms sheet metal into high-precision parts at scale."
        />
      </SectionReveal>
    </>
  );
}
