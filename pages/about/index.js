import React from "react";
import PageBanner from "../../components/banners/banner1";
import AboutSection from "../../components/about/AboutSection";
import CounterSection from "../../components/home/CounterSection";
import MissionSection from "../../components/about/MissionSection";
import VisionSection from "../../components/about/VisionSection";
import ValueSection from "../../components/about/ValueSection";
import KeypointSection from "../../components/about/KeyPointSection";
import SectionReveal from "@/components/common/SectionReveal";

export default function index() {
  return (
    <>
      <SectionReveal>
        <PageBanner title="About Us" bannerBg="/about/banner.jpg" />
      </SectionReveal>

      <SectionReveal>
        <AboutSection />
      </SectionReveal>

      <SectionReveal>
        <CounterSection tone="dark" />
      </SectionReveal>

      <SectionReveal>
        <MissionSection />
      </SectionReveal>

      <SectionReveal>
        <VisionSection />
      </SectionReveal>

      <SectionReveal>
        <ValueSection />
      </SectionReveal>

      <SectionReveal>
        <KeypointSection />
      </SectionReveal>
    </>
  );
}
