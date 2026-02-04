import React from "react";
import PageBanner from "@/components/banners/banner1";
import Head from "next/head";
import PageContent from "@/components/privacy/index";

export default function Index() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Prem Industries India Limited</title>
        <meta name="description" content="Privacy Policy" />
        <meta name="title" content="Privacy Policy" />
      </Head>
      <PageBanner title="Privacy Policy" bannerBg="/privacy/banner.jpg" />
      <PageContent />
    </>
  );
}
