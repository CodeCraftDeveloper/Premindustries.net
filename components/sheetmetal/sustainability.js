"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SustainabilitySection() {
  return (
    <>
      <motion.section
        className="about-section pb-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 mt-3 mt-lg-0 col-12">
              <div className="block-contents">
                <div className="section-title">
                  <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>
                    Sustainability
                  </h2>
                </div>
              </div>

              <p
                className="mb-3"
                style={{
                  textAlign: "justify",
                  fontSize: "clamp(14px, 2.2vw, 17px)",
                }}
              >
                Sustainability is a responsibility we embrace fully. We have
                installed a 0.5 mW solar power plant, reducing our dependence on
                conventional energy and significantly lowering emissions. Our
                long-term goal is to become 100% carbon-free in electrical
                generation by 2030. From efficient machinery to responsible
                sourcing, we are building a cleaner, greener operation that
                supports both performance and environmental care.
              </p>
            </div>

            <div className="col-xl-5 col-12 pe-xl-0 text-center">
              <div
                className="about-cover-bg me-xl-5 shadow-lg"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "9 / 10",
                  //   position: "relative", // Ensure relative positioning for the image
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/sheetmetal/sustainability.jpg"
                    alt="Sustainability at Prem Industries"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-rotate-title-sustainability d-none d-xxl-block">
          GREEN
        </h2>
      </motion.section>
    </>
  );
}
