"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

const serviceTabs = [
  {
    label: "Mold Design",
    title: "Advanced injection mold design & engineering",
    description:
      "Our mold design process focuses on precision, durability, and repeatability. We validate every tool through detailed analysis before production.",
    bullets: [
      "DFM & DFA analysis",
      "Mold flow & cooling simulation",
      "Multi-cavity & family molds",
      "Long-life tool design planning",
    ],
    image:
      "https://images.pexels.com/photos/18569745/pexels-photo-18569745.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    label: "Injection Molding",
    title: "High-performance injection molding production",
    description:
      "We deliver consistent, high-volume injection molding using modern machines, optimized cycle times, and automated material handling.",
    bullets: [
      "50-1000 ton injection molding machines",
      "Thermoplastic & engineering polymers",
      "Robotic part handling",
      "High-repeatability mass production",
    ],
    image:
      "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    label: "Secondary Operations",
    title: "Post-molding finishing & assembly",
    description:
      "Our secondary operations ensure parts are production-ready with precise finishing, assembly, and packaging under one roof.",
    bullets: [
      "Ultrasonic welding & heat staking",
      "Pad printing & laser marking",
      "Insert fitting & sub-assemblies",
      "Custom kitting & packaging",
    ],
    image:
      "https://images.pexels.com/photos/4225118/pexels-photo-4225118.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    label: "Quality Assurance",
    title: "Built-in quality control for injection molding",
    description:
      "Quality is integrated into every stage of our injection molding process, ensuring compliance, traceability, and zero-defect output.",
    bullets: [
      "ISO-compliant quality systems",
      "First article & PPAP inspection",
      "In-process & final inspection",
      "Batch-level traceability",
    ],
    image:
      "https://images.pexels.com/photos/28146795/pexels-photo-28146795.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const service = serviceTabs[activeService];

  return (
    <section id="services" className="services-section">
      <div className="services-shell">
        <motion.div {...fadeUp} className="services-heading">
          <p className="services-eyebrow">Our Services</p>
          <h2>We&apos;re providing quality moulding services</h2>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="services-tabs"
        >
          {serviceTabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveService(index)}
              className={`services-tab${
                activeService === index ? " is-active" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="services-content">
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
          <h3>{service.title}</h3>
          <p className="services-description">{service.description}</p>
          <div className="services-bullets">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="services-bullet">
                <span className="services-dot" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="services-image">
            <Image
              src={service.image}
              alt={service.label}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="services-image-media"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .services-section {
          background: #14264f;
          color: #ffffff;
          padding: 40px 0 56px;
        }

        .services-shell {
          width: min(1200px, 92%);
          margin: 0 auto 18px;
          text-align: center;
          padding: 24px 0 0;
        }

        .services-heading {
          text-align: center;
          margin-bottom: 20px;
        }

        .services-eyebrow {
          margin: 18px 0 0;
          font-size: clamp(22px, 3vw, 60px) !important;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          font-family: "Oswald", sans-serif;
          line-height: 1.1;
        }

        .services-heading h2 {
          margin: 12px 0 0;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 600;
          text-transform: none;
          color: #ffffff;
          line-height: 1.2;
        }

        .services-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          width: 100%;
          margin: 18px auto 28px;
        }

        .services-tab {
          border-radius: 999px;
          padding: 10px 18px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.75);
          font-size: 13px;
          font-weight: 600;
          font-family: "Oswald", sans-serif;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          margin: 0 10px;
        }

        .services-tab:hover {
          border-color: rgba(255, 255, 255, 0.6);
          color: #ffffff;
        }

        .services-tab.is-active {
          background: #e11d2e;
          border-color: #e11d2e;
          color: #ffffff;
        }

        .services-content {
          width: min(1200px, 92%);
          margin: 0 auto;
          display: grid;
          gap: 30px;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          align-items: start;
        }

        .services-content h3 {
          margin: 0 0 12px;
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 600;
          color: #ffffff;
        }

        .services-description {
          margin: 0 0 20px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .services-bullets {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .services-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        .services-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e11d2e;
        }

        .services-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          overflow: hidden;
          box-shadow: 0 16px 32px rgba(6, 20, 50, 0.4);
        }

        .services-image-media {
          object-fit: contain;
          object-position: center;
        }

        @media (max-width: 900px) {
          .services-content {
            grid-template-columns: 1fr;
          }

          .services-bullets {
            grid-template-columns: 1fr;
          }

          .services-tabs {
            width: min(720px, 94%);
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 24px 0 36px;
          }

          .services-tabs {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            width: min(520px, 92%);
            margin: 12px auto 20px;
          }

          .services-tab {
            width: 100%;
            padding: 9px 12px;
            letter-spacing: 0.02em;
            margin: 0;
          }

          .services-shell {
            width: min(520px, 92%);
            margin-bottom: 8px;
          }

          .services-eyebrow {
            font-size: clamp(18px, 7vw, 32px) !important;
            letter-spacing: 0.24em;
          }

          .services-heading h2 {
            font-size: clamp(20px, 6vw, 28px);
          }

          .services-content {
            gap: 18px;
          }

          .services-description {
            font-size: 13px;
          }

          .services-image {
            border-radius: 14px;
            aspect-ratio: 4 / 3;
          }
        }

        @media (max-width: 480px) {
          .services-tabs {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
