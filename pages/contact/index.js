import React from "react";
import PageBanner from "@/components/banners/banner1";
import Head from "next/head";
import PageContent from "@/components/contact/index";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
      <Head>
        <title>Contact Us - Prem Industries India Limited</title>
        <meta
          name="title"
          content="Contact Us - Prem Industries India Limited"
        />
        <meta
          name="description"
          content="Contact Us - Prem Industries India Limited"
        />
      </Head>
      <SectionReveal>
        <PageBanner title="Contact Us" bannerBg="/contact/banner.jpg" />
      </SectionReveal>
      <SectionReveal>
        <PageContent
          maintitle="For in-depth information, visit each specific sector."
          email="info@premindustries.in"
          number="+918447247227"
          address="C-209, Bulandshahr Road Industrial Area, Ghaziabad, Uttar Pradesh 201009"
          CardTitle1="Packaging Sector"
          CardTitle2="Steel Sector"
          CardTitle3="Retail Sector"
          CardTitle4="Construction Sector"
          CardImage1="/clients/PackagingSector.jpg"
          CardImage2="/clients/SteelSector.jpg"
          CardImage3="/clients/RetailSector.jpg"
          CardImage4="/clients/ConstructionSector.jpg"
          CardLink1="https://prempackaging.com/"
          CardLink2="https://phsteel.in/"
          CardLink3="/"
          CardLink4="/"
        />
      </SectionReveal>
    </>
  );
}
