import React from "react";
import Hero from "@/components/sheetmetal/hero";
import AboutSection from "@/components/sheetmetal/about";
import FabricationProcessSection from "@/components/sheetmetal/fabrication";
import InfrastructureSection from "@/components/sheetmetal/infrastructure";
import SustainabilitySection from "@/components/sheetmetal/sustainability";
import CorporateVideoSection from "@/components/sheetmetal/corporate";
import ClientSection from "@/components/sheetmetal/clients";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Sheet Metal Components - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality sheet metal components."
        />
        <meta name="title" content="Sheet Metal Components" />
      </Head>
      <Hero />
      <AboutSection />
      <FabricationProcessSection />
      <InfrastructureSection />
      <div className="pt-5"></div>
      <SustainabilitySection />
      <CorporateVideoSection />
      <ClientSection />
    </>
  );
}
