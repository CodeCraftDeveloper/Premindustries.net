import MachineContentSection from "@/components/common/MachineContentSection";
import SectionReveal from "@/components/common/SectionReveal";
import Hero from "@/components/slitting-machine/hero";

const paragraphs = [
  "At our Slitting Division, we use top-tier slitters engineered for high-speed, high-precision conversion of coil into narrow strips or widths customized to your needs. Whether producing coils for further processing or strips for integration, our slitting line ensures consistent, burr-free, and distortion-minimized metal widths.",
  "Our slitting machinery includes precision-driven slitters and recoilers compatible with steel, aluminum, and non-ferrous alloys. The line supports width ranges typically from 300 mm to 1,400 mm, thicknesses between approximately 0.3 and 2.5 mm, and feed speeds up to about 120 m/min.",
  "We offer slit coil weights up to 10 MT per bundle, with custom tolerance demands handled smoothly by our experienced engineering team. Whether you require narrow strips for deep-draw applications, HVAC frames, filters, or strips for welding or assembly, our Slitting Machine service is engineered for versatility.",
];

const listItems = [
  "Coil inspection and labeling",
  "Precise slit-width selection and tolerance programming",
  "Recoiling with uniform tension and consistent coil density",
  "Visual and dimensional inspection at delivery",
];

export default function SlittingMachinePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <MachineContentSection
          paragraphs={paragraphs}
          listIntro="Our slitting workflow includes:"
          listItems={listItems}
          outro="For clients in appliance manufacturing, fabrication, auto parts, HVAC, and industrial machinery, our slitting solutions combine speed, flexibility, and accuracy, leaving no edge imperfect."
        />
      </SectionReveal>
    </>
  );
}
