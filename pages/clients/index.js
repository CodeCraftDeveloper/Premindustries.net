import React from "react";
import PageBanner from "../../components/banners/banner1";
import ClientInfo from "../../components/clients/info";
import Head from "next/head";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
      <Head>
        <title>Clients - Prem Industries India Limited</title>
        <meta name="title" content="Clients - Prem Industries India Limited" />
        <meta
          name="description"
          content="Clients - Prem Industries India Limited"
        />
      </Head>
      <SectionReveal>
        <PageBanner title="Our Clients" bannerBg="/clients/banner.jpg" />
      </SectionReveal>
      <SectionReveal>
        <ClientInfo
          maintitle="For in-depth contact us information, visit each specific sector."
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
          CardLink1="/"
          CardLink2="/"
          CardLink3="/"
          CardLink4="/"
        />
      </SectionReveal>
    </>
  );
}
