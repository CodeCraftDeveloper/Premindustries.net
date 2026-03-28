import MachineContentSection from "@/components/common/MachineContentSection";
import SectionReveal from "@/components/common/SectionReveal";
import Hero from "@/components/ctl-machine/hero";

const paragraphs = [
  "Our CTL, or Cut to Length, Machine section expertly transforms raw coil into flat, cut sheets that match your project dimensions exactly. This precision process begins with full coil decoiling and proceeds through leveling, slitting, and precision cutting, making it ideal for clients who require sheet blanks rather than coil rolls.",
  "Equipped with modern decoilers, high-accuracy levelers, and programmable sensors, our system maintains tight control over thickness, flatness, and dimensional tolerances. We handle metals such as cold-rolled steel, hot-rolled steel, galvanized steel, aluminum, and stainless steel, with both manual setup and automated run modes to support efficient high-volume throughput.",
  "Ideal for components requiring exact length and width specifications, our CTL facility delivers sheet metal that is ready for further fabrication, including stamping, bending, pressing, and assembly. Each sheet is flattened, square-edged, and free of coil memory, enabling smoother downstream processing and better integration into press shop or stamping lines.",
];

const listItems = [
  "Strip flatness and surface finish",
  "Cut-to-length precision of plus or minus 0.1 mm or better",
  "Coil tracking and handling for consistency",
];

export default function CtlMachinePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <MachineContentSection
          paragraphs={paragraphs}
          listIntro="Quality checkpoints monitor:"
          listItems={listItems}
          outro="Clients from the appliance, electrical housing, automotive, and industrial parts sectors rely on our CTL operations for streamlined supply of high-accuracy sheet blanks. Our CTL Machine section ensures superior dimensional control, faster lead times, and ready-to-use material in every batch."
        />
      </SectionReveal>
    </>
  );
}
