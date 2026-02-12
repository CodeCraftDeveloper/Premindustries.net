"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Clients() {
  return (
    <motion.section
      className="faq-funfact-section mt-3"
      style={{ paddingTop: "100px" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="container">
        <div className="fun-fact-wrapper text-white text-center">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2 className="text-white" style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>
                OUR CLIENTS
              </h2>
            </div>
          </div>
        </div>

        <div className="faq-wrapper mb-5 pb-0">
          <div className="row">
            <div className="col-lg-12 col-12 col-xl-12 pe-lg-0">
              <div className="faq-content shadow-lg">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            HAIER APPLIANCES (INDIA) PVT LTD
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            SYMPHONY LIMITED
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            AMBER ENTERPRISES INDIA LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            POLYCAB INDIA PRIVATE LIMITED
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            MINI METRO EV LLP
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            EASTERN BEARINGS PVT. LTD
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            PURSHOTOM PROFILE PVT. LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            RM COMPONENTS
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <ul>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            EPACK POLYMERS PVT. LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            RELIABLE BARREL PVT. LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            FILTECH
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            RANA MATERIAL HANDELING EQUIPMENT PVT. LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            MAHESHWARI ELECTRICALS MFRS PVT. LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            STROLLER MOUNTING SYSTEMS PVT. LTD.
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            VIJAY SHREE STELL INDUSTRIES
                          </li>
                          <li
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                            className="mb-1"
                          >
                            RADISH TECNOLOGIES
                          </li>
                        </ul>
                      </div>

                      <div
                        className="col-md-12"
                        style={{
                          textAlign: "right",
                          fontSize: "clamp(14px, 2.4vw, 20px)",
                          fontWeight: 800,
                          color: "#14254C",
                        }}
                      >
                        and many more...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
