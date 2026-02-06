"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const infraCards = [
  {
    title: "Automotive Panels",
    text: "Car doors and interior panels with consistent fit and finish.",
    icon: "spark",
  },
  {
    title: "Construction Systems",
    text: "Roofing, wall cladding, and pipe racks built for long service.",
    icon: "check",
  },
  {
    title: "Electronics Enclosures",
    text: "Device casings and server racks with airflow-ready layouts.",
    icon: "shield",
  },
  {
    title: "Appliance Housings",
    text: "Refrigerator cabinets and microwave casings for precision assembly.",
    icon: "bolt",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function InfraIcon({ name }) {
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3v3m0 12v3M4.2 5.2l2.1 2.1m9.4 9.4 2.1 2.1M3 12h3m12 0h3M5.2 18.8l2.1-2.1m9.4-9.4 2.1-2.1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8.5 12.2 11 14.7l4.5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13 2 4 13h7l-1 9 9-12h-7l1-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Infrastructure() {
  return (
    <motion.section
      className="press-infra"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="container press-infra-grid">
        <div className="press-infra-text">
          <h2>INFRASTRUCTURE FOR PRESS SHOP</h2>
          <p>
            Equipped with a range of mechanical and hydraulic presses, our press
            shop handles blanking, punching, bending, forming, and deep drawing.
            All operations are managed by skilled technicians under strict
            quality protocols, with a focus on dimensional accuracy, strength,
            and consistency for ACs, coolers, TVs, and refrigerators.
          </p>
          <div className="press-infra-cards">
            {infraCards.map((card) => (
              <div className="press-infra-card" key={card.title}>
                <span className="press-infra-icon" aria-hidden="true">
                  <InfraIcon name={card.icon} />
                </span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="press-infra-media">
          <div className="press-infra-image">
            <Image
              src="/sheetmetal/infrastructure/2.jpg"
              alt="Press shop infrastructure"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .press-infra {
          background: radial-gradient(
            circle at top,
            rgba(220, 234, 252, 0.8),
            rgba(247, 250, 255, 0.9) 55%,
            #ffffff 100%
          );
          padding: 72px 0;
          color: #0b1b2b;
        }

        .press-infra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 36px;
          align-items: stretch;
        }

        .press-infra-text h2 {
          font-size: clamp(26px, 3.4vw, 40px);
          margin: 0 0 12px;
          color: #0b1b2b;
          font-family: "Oswald", sans-serif;
        }

        .press-infra-text p {
          margin: 0 0 22px;
          color: #2b3c4c;
          line-height: 1.6;
          font-size: 14px;
        }

        .press-infra-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .press-infra-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px;
          display: flex;
          gap: 12px;
          box-shadow: 0 16px 26px rgba(13, 28, 45, 0.12);
        }

        .press-infra-card h3 {
          margin: 0 0 6px;
          font-size: 15px;
          color: #0b1b2b;
          font-weight: 700;
        }

        .press-infra-card p {
          margin: 0;
          font-size: 12px;
          color: #2b3c4c;
          line-height: 1.5;
        }

        .press-infra-icon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(17, 76, 160, 0.08);
          color: #0b3ca0;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .press-infra-icon :global(svg) {
          width: 20px;
          height: 20px;
        }

        .press-infra-media {
          display: flex;
          justify-content: center;
          align-self: stretch;
        }

        .press-infra-image {
          position: relative;
          width: min(620px, 100%);
          height: 100%;
          min-height: 360px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 22px 36px rgba(12, 20, 32, 0.18);
        }

        .press-infra-image :global(img) {
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 900px) {
          .press-infra {
            padding: 56px 0;
          }

          .press-infra-media {
            order: -1;
          }

          .press-infra-image {
            width: 100%;
            height: auto;
            min-height: 240px;
            aspect-ratio: 4 / 3;
          }
        }

        @media (max-width: 640px) {
          .press-infra-cards {
            grid-template-columns: 1fr;
          }

          .press-infra-card {
            padding: 14px;
          }
        }
      `}</style>
    </motion.section>
  );
}
