import MachineContentSection from "@/components/common/MachineContentSection";
import SectionReveal from "@/components/common/SectionReveal";
import Hero from "@/components/shearing-machine/hero";

const paragraphs = [
  "At Prem Industries India Limited, our Shearing Machine facility delivers precision-cut sheet metal with industry-leading accuracy and speed. Designed for clean, burr-free edges, our shearing operations are ideal for preparing metal sheets before downstream processing.",
  "We employ high-capacity hydraulic and mechanical shears, capable of cutting mild steel, stainless steel, and aluminum across a range of thicknesses. Rapid setup and programmable back gauging ensure consistent results even when handling wide widths, custom batch orders, and tight tolerances. The robust machine build minimizes distortion while optimizing throughput, which is critical when working with demanding plant schedules.",
  "Our operators are rigorously trained and backed by a structured maintenance and calibration regime, ensuring repeatable quality across every cut. In addition to standard flat shearing, the division offers edge trimming and specific pattern cutting inline, supporting seamless integration into shearing, slitting, or cut-to-length workflows.",
];

const listItems = [
  "Fast, burr-free cuts with tolerance control",
  "Flexibility across thicknesses, widths, and materials",
  "Economical batch and high-volume runs",
  "Prompt processing to match turnaround demands",
];

export default function ShearingMachinePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <MachineContentSection
          paragraphs={paragraphs}
          listIntro="Clients benefit from:"
          listItems={listItems}
          outro="Whether serving automotive, construction, electronics, HVAC, or appliances, our Shearing Machine capacity ensures high-precision parts are delivered reliably and efficiently every time."
        />
      </SectionReveal>
    </>
  );
}
