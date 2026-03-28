import React from "react";
import PageContent from "@/components/contact/index";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
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
          CardLink1="/packaging"
          CardLink2="/sheet-metal-components"
          CardLink3=""
          CardLink4=""
        />
      </SectionReveal>
    </>
  );
}
