import React from "react";
import PageBanner from "@/components/banners/banner1";
import PageContent from "@/components/terms-and-conditions/index";
import Head from "next/head";
import SectionReveal from "@/components/common/SectionReveal";

export default function index() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Prem Industries India Limited</title>
        <meta name="description" content="Terms and Conditions" />
        <meta name="title" content="Terms and Conditions" />
      </Head>
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
