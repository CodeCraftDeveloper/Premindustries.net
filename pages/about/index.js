import React from "react";
import PageBanner from "../../components/banners/banner1";
import AboutSection from "../../components/about/AboutSection";
import CounterSection from "../../components/home/CounterSection";
import MissionSection from "../../components/about/MissionSection";
import VisionSection from "../../components/about/VisionSection";
import ValueSection from "../../components/about/ValueSection";
import KeypointSection from "../../components/about/KeyPointSection";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>About Us - Prem Industries India Limited</title>
        <meta name="title" content="About Us - Prem Industries India Limited" />
        <meta
          name="description"
          content="About Us - Prem Industries India Limited"
        />
      </Head>
      <PageBanner title="About Us" bannerBg="/about/banner.jpg" />
      <AboutSection />
      <div
        className="container-fluid text-white"
        style={{ backgroundColor: "#14254C" }}
      >
        <CounterSection />
      </div>
      <MissionSection />
      <VisionSection />
      <div
        className="container-fluid pt-4 pb-5"
        style={{ backgroundColor: "#14254C" }}
      >
        <div className="row">
          {/* <div className="col-md-12 text-center text-white">
            <h1>Our Values</h1>
          </div> */}
        </div>
      </div>
      <ValueSection />
      <KeypointSection />
    </>
  );
}
