import React from "react";
import PageBanner from "@/components/banners/banner1";
import Head from "next/head";
import PageContent from "@/components/privacy/index";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Prem Industries India Limited</title>
        <meta name="description" content="Privacy Policy" />
        <meta name="title" content="Privacy Policy" />
      </Head>
      <SectionReveal>
        <PageBanner title="Privacy Policy" bannerBg="/privacy/banner.jpg" />
      </SectionReveal>
      <SectionReveal>
        <PageContent />
      </SectionReveal>
    </>
  );
}
