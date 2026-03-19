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
    label: "Mould Design",
    title: "Advanced injection mould design & engineering",
    description:
      "Our mould design process focuses on precision, durability, and repeatability. We validate every tool through detailed analysis before production.",
    bullets: [
      "DFM & DFA analysis",
      "Mould flow & cooling simulation",
      "Multi-cavity & family moulds",
      "Long-life tool design planning",
    ],
    image:
      "https://images.pexels.com/photos/18569745/pexels-photo-18569745.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    label: "Injection Moulding",
    title: "High-performance injection moulding production",
    description:
      "We deliver consistent, high-volume injection moulding using modern machines, optimized cycle times, and automated material handling.",
    bullets: [
      "50-1000 ton injection moulding machines",
      "Thermoplastic & engineering polymers",
      "Robotic part handling",
      "High-repeatability mass production",
    ],
    image:
      "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    label: "Secondary Operations",
    title: "Post-moulding finishing & assembly",
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
    title: "Built-in quality control for injection moulding",
    description:
      "Quality is integrated into every stage of our injection moulding process, ensuring compliance, traceability, and zero-defect output.",
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
          className="services-tabs max-[768px]:!grid max-[768px]:grid-cols-2 max-[768px]:gap-3 max-[768px]:w-full"
        >
          {serviceTabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveService(index)}
              className={`services-tab${
                activeService === index ? " is-active" : ""
              } max-[768px]:!w-full max-[768px]:min-w-0 max-[768px]:whitespace-normal max-[768px]:leading-[1.2]`}
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
          margin: 0 auto 26px;
          text-align: center;
          padding: 20px 0 0;
        }

        .services-heading {
          text-align: center;
          margin-bottom: 16px;
        }

        .services-eyebrow {
          margin: 0 0 10px;
          font-size: clamp(13px, 1.3vw, 16px) !important;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(220, 235, 255, 0.78);
          font-family: "Oswald", sans-serif;
          font-weight: 500;
          line-height: 1.2;
        }

        .services-heading h2 {
          margin: 0;
          font-size: clamp(28px, 3.4vw, 42px);
          font-weight: 700;
          text-transform: none;
          color: #ffffff;
          line-height: 1.12;
          font-family: "Oswald", sans-serif;
        }

        .services-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          width: 100%;
          margin: 0 auto;
        }

        .services-tab {
          border-radius: 999px;
          padding: 11px 20px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.75);
          font-size: 13px;
          font-weight: 600;
          font-family: "Roboto", sans-serif;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          margin: 0;
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
          gap: 38px;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          align-items: center;
        }

        .services-content h3 {
          margin: 0 0 14px;
          font-size: clamp(28px, 2.9vw, 40px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.14;
          font-family: "Oswald", sans-serif;
        }

        .services-description {
          margin: 0 0 24px;
          font-size: 16px;
          color: rgba(235, 245, 255, 0.82);
          line-height: 1.72;
          font-family: "Roboto", sans-serif;
        }

        .services-bullets {
          display: grid;
          gap: 14px 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .services-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: rgba(235, 245, 255, 0.9);
          font-family: "Roboto", sans-serif;
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
          object-fit: cover;
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
            gap: 10px;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 24px 0 36px;
          }

          .services-tabs {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 12px;
            row-gap: 12px;
            width: 100%;
            margin: 12px auto 20px;
            align-items: stretch;
            justify-items: stretch;
          }

          .services-tab {
            display: flex;
            width: 100% !important;
            min-width: 0;
            align-items: center;
            justify-content: center;
            padding: 10px 10px;
            letter-spacing: 0.02em;
            margin: 0;
            text-align: center;
          }

          .services-shell {
            width: min(520px, 92%);
            margin-bottom: 8px;
          }

          .services-eyebrow {
            font-size: clamp(12px, 3.8vw, 14px) !important;
            letter-spacing: 0.14em;
          }

          .services-heading h2 {
            font-size: clamp(24px, 6vw, 32px);
          }

          .services-content {
            gap: 18px;
          }

          .services-description {
            font-size: 14px;
          }

          .services-image {
            border-radius: 14px;
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </section>
  );
}
