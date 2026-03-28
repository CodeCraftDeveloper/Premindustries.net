// components/HomeTwoClient.js
"use client";

import EntryHeroSection from "./EntryHeroSection";
import AboutSection from "./AboutSection";
import WorkSectionHead from "./WorkSectionHead";
import WorkSectionBody from "./WorkSectionBody";
import WorkForYouSection from "./WorkForYouSection";
// import GoalAccessibilitySection from "./GoalAccessibilitySection";
// import ConstructionTrustSection from "./ConstructionTrustSection";
import SustainabilitySection from "./SustainabilitySection";
import InnovationSection from "./InnovationSection";
import CounterSection from "./CounterSection";
import MissionVisionSection from "./MissionVisionSection";
import WhyPremSection from "./WhyPremSection";
import ExecutionProcessSection from "./ExecutionProcessSection";
import HomeCtaSection from "./HomeCtaSection";
import HeroSection from "./HeroSection";
import RecentBlogsSection from "@/components/blogs/RecentBlogsSection";
// If you later want the popup, place the image in /public and import it:
// import Image from "next/image";
// import PopupImg from "/public/your-popup-image.png";
// import { useEffect, useState } from "react";

export default function HomeTwoClient() {
  // Popup logic (uncomment if you decide to use it)
  // const [showPopup, setShowPopup] = useState(false);
  // useEffect(() => { setShowPopup(true); }, []);
  // const handleClosePopup = () => setShowPopup(false);
  // const handleOutsideClick = (e) => {
  //   if (e.target.id === "popup") setShowPopup(false);
  // };
  return (
    <div className="home-typography">
      <section>
        <HeroSection />
      </section>

      <section>
        <AboutSection
          subhead="About"
          head="Prem Industries India Limited"
          text1="Prem Industries India Limited is a manufacturing company in India serving OEMs, industrial buyers, and supply chain partners through sheet metal fabrication, steel processing, injection moulding, and packaging-linked support. Our facilities in Uttar Pradesh are built for repeatability, production discipline, and dependable delivery."
          text2="From engineering alignment and tooling support to production control and dispatch planning, every stage is managed with measurable quality systems and process visibility. We work with customers who need consistent output, practical lead times, and a long-term manufacturing partner."
          text3="Our focus is to manufacture reliable industrial products, reduce execution risk for customers, and strengthen supply chains with scalable, quality-driven production."
          btnText="read more"
          verticalText="ABOUT"
        />
      </section>

      <section>
        <WorkForYouSection />
      </section>

      {/* <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <GoalAccessibilitySection />
      </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ConstructionTrustSection />
      </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MissionVisionSection />
      </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EntryHeroSection />
      </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WhyPremSection />
      </motion.section> */}

      <section>
        <WorkSectionHead />
        <WorkSectionBody />
      </section>

      <section>
        <ExecutionProcessSection />
      </section>

      <section>
        <SustainabilitySection />
      </section>

      <section>
        <InnovationSection />
      </section>

      <section>
        <HomeCtaSection />
      </section>

      <section>
        <RecentBlogsSection />
      </section>

      <section>
        <CounterSection />
      </section>

      {/* Popup (uncomment to enable)
      {showPopup && (
        <div id="popup" className="popup" onClick={handleOutsideClick}>
          <div className="popup-content">
            <Image src={PopupImg} alt="Aahar Invite" fill style={{ objectFit: "contain" }} />
            <span className="close-popup text-white" onClick={handleClosePopup}>
              &times;
            </span>
          </div>
        </div>
      )} */}
    </div>
  );
}
