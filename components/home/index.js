// components/HomeTwoClient.js
"use client";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorkSectionHead from "./WorkSectionHead";
import WorkSectionBody from "./WorkSectionBody";
import SustainabilitySection from "./SustainabilitySection";
import InnovationSection from "./InnovationSection";
import CounterSection from "./CounterSection";
import { motion } from "framer-motion";
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
    <>
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AboutSection
          subhead="About"
          head="Prem Industries India Limited"
          text1="Goel Group's foundation was laid in 1975 by the Chairman Mr. Ved Prakash Goel. Goel Group is now a diversified organization in India with focus on B2B sector. It has created a big footprint in northern India with a portfolio comprising from packaging, steel, retail and construction as the main drivers of growth. Headquartered in Uttar Pradesh, India, it has positioned itself to be the North Indian market leader in packaging and steel trading businesses focusing on large scale development in the region with O&M practices benchmarked to global standards."
          btnClass="theme-btn mt-35"
          btnText="read more"
          verticalText="ABOUT"
        />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WorkSectionHead />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <WorkSectionBody />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SustainabilitySection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <InnovationSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <CounterSection />
      </motion.section>

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

      <style jsx>{`
        .popup {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: block;
          z-index: 999;
        }
        .popup-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          padding: 20px;
          border-radius: 10px;
          overflow: hidden;
        }
        .close-popup {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 34px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
