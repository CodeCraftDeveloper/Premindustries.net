import React from "react";
import PageBanner from "@/components/banners/banner1";
import PageContent from "@/components/terms-and-conditions/index";
import SectionReveal from "@/components/common/SectionReveal";

export default function index() {
  return (
    <>
      <SectionReveal>
        <PageBanner
          title="Terms and Conditions"
          bannerBg="/terms-and-conditions/banner.jpg"
        />
      </SectionReveal>
      <SectionReveal>
        <PageContent />
      </SectionReveal>
    </>
  );
}
