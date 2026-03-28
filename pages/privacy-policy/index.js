import React from "react";
import PageBanner from "@/components/banners/banner1";
import PageContent from "@/components/privacy/index";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
      <SectionReveal>
        <PageBanner title="Privacy Policy" bannerBg="/privacy/banner.jpg" />
      </SectionReveal>
      <SectionReveal>
        <PageContent />
      </SectionReveal>
    </>
  );
}
