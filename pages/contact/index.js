import React from "react";
import Head from "next/head";
import PageContent from "@/components/contact/index";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
      <Head>
        <title>Contact Prem Industries | Industrial Manufacturing Inquiries</title>
        <meta
          name="title"
          content="Contact Prem Industries | Industrial Manufacturing Inquiries"
        />
        <meta
          name="description"
          content="Contact Prem Industries India Limited for sheet metal fabrication, injection moulding, OEM manufacturing support, production planning, and project discussions."
        />
      </Head>
      <SectionReveal>
        <PageContent
          maintitle="Connect with our manufacturing teams for RFQs, technical discussions, development support, and production planning across our core sectors."
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
          CardLink2="/sheet-metal"
          CardLink3=""
          CardLink4=""
        />
      </SectionReveal>
    </>
  );
}
