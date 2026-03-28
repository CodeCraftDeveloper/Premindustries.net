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
  const clientColumns = [
    [
      "HAIER APPLIANCES (INDIA) PVT LTD",
      "SYMPHONY LIMITED",
      "AMBER ENTERPRISES INDIA LTD.",
      "POLYCAB INDIA PRIVATE LIMITED",
      "MINI METRO EV LLP",
      "EASTERN BEARINGS PVT. LTD",
      "PURSHOTOM PROFILE PVT. LTD.",
      "RM COMPONENTS",
    ],
    [
      "EPACK POLYMERS PVT. LTD.",
      "RELIABLE BARREL PVT. LTD.",
      "FILTECH",
      "RANA MATERIAL HANDELING EQUIPMENT PVT. LTD.",
      "MAHESHWARI ELECTRICALS MFRS PVT. LTD.",
      "STROLLER MOUNTING SYSTEMS PVT. LTD.",
      "VIJAY SHREE STELL INDUSTRIES",
      "RADISH TECNOLOGIES",
    ],
  ];

  return (
    <motion.section
      className="faq-funfact-section mt-3"
      style={{ paddingTop: "100px" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="mx-auto w-full max-w-[1380px] px-[14px] sm:px-[18px] lg:px-6">
        <div className="fun-fact-wrapper text-white text-center">
          <div>
            <div className="mb-4">
              <h2
                className="text-white"
                style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
              >
                OUR CLIENTS
              </h2>
            </div>
          </div>
        </div>

        <div className="faq-wrapper mb-5 pb-0">
          <div>
            <div className="lg:pe-0">
              <div className="faq-content shadow-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  {clientColumns.map((column, index) => (
                    <div key={`client-column-${index}`}>
                      <ul className="space-y-1">
                        {column.map((client) => (
                          <li
                            key={client}
                            style={{
                              fontSize: "clamp(13px, 2vw, 17px)",
                              fontWeight: 800,
                              color: "#14254C",
                            }}
                          >
                            {client}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div
                    className="md:col-span-2"
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
    </motion.section>
  );
}
