"use client";

import { useState } from "react";

const cards = [
  {
    title: "Material Management & Polymer Know-How",
    body: "Efficient injection molding begins with understanding materials. We work with carefully selected plastics chosen for their strength, durability, and suitability for your specific applications. Our controlled storage, drying, and feeding systems maintain material integrity from start to finish, ensuring smooth flow and a consistent, high-quality finish every time.",
  },
  {
    title: "Inspection Standard",
    body: "Quality isn't checked\u2014it's built into every stage of production. Our comprehensive inspection protocols verify dimensional accuracy, structural integrity, and aesthetic perfection at multiple checkpoints. This systematic approach ensures that only components meeting our exacting standards make it to your facility.",
  },
  {
    title: "Quality Traceability & Documentation",
    body: "Every production batch is supported by structured documentation and traceability systems. Process records, inspection logs, and batch tracking provide complete transparency and accountability. This systematic documentation strengthens quality assurance, builds client confidence, and ensures long-term program stability.",
  },
  {
    title: "Supply Chain & Delivery Assurance",
    body: "Our injection molding operations are backed by a structured supply chain system. Planned sourcing, inventory control, and production scheduling ensure uninterrupted manufacturing. Coordinated dispatch and logistics processes enable timely deliveries across varied volumes. This reliability allows you to depend on us for consistent supply and operational continuity.",
  },
  {
    title: "Technology-Ready Manufacturing Platform",
    body: "Our injection molding setup is designed to adapt to future technologies and evolving manufacturing requirements. Flexible systems and upgrade-ready infrastructure allow seamless integration of advanced automation, monitoring, and process enhancements. This forward-thinking approach ensures long-term relevance and competitiveness in an ever-changing industrial landscape.",
  },
];

const icons = [
  <svg key="1" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M8 28h32v6H8z" />
    <path d="M18 10h12v10H18z" />
    <path d="M16 20h16v6H16z" />
    <path d="M24 6v4" />
  </svg>,
  <svg key="2" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M10 16h28v6H10z" />
    <path d="M14 22v10m8-10v10m8-10v10" />
    <path d="M8 32h32v6H8z" />
  </svg>,
  <svg key="3" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M16 10h16l-3 12H19z" />
    <path d="M22 22v12m4-12v12" />
    <path d="M12 34h24v6H12z" />
  </svg>,
  <svg key="4" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M14 8h20v8H14z" />
    <path d="M10 18h28v14H10z" />
    <path d="M16 22h6m4 0h6m-16 6h16" />
  </svg>,
  <svg key="5" viewBox="0 0 48 48" aria-hidden="true">
    <path d="M12 8h24v26H12z" />
    <path d="M16 14h16m-16 6h16m-16 6h10" />
    <path d="M18 34h12v6H18z" />
  </svg>,
];

export default function InjectionAdvantages() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="advantages-section">
      <div className="advantages-intro">
        <div className="advantages-intro-text">
          <p className="advantages-kicker">This Isn&apos;t Just a Machine</p>
          <h2 className="advantages-title">
            It&apos;s Speed, Precision, and Creativity Coming Together to Shape
            the Products of Tomorrow
          </h2>
          <div className="advantages-highlight">
            <span className="highlight-pill">
              UP TO 25% CYCLE TIME REDUCTION
            </span>
            <p>
              Conformal cooling in injection molding optimizes heat dissipation,
              allowing faster and more uniform cooling of the mold. This
              accelerates material solidification, reduces overall cycle time,
              and increases production efficiency&mdash;all while maintaining
              exceptional part quality.
            </p>
          </div>
          <div className="advantages-benefits">
            <h3>What This Means for You</h3>
            <ul>
              <li>
                Faster turnaround times without compromising the quality,
                precision, or reliability of every molded component
              </li>
              <li>
                Higher production volumes that help you confidently meet
                growing market demand and delivery commitments
              </li>
              <li>
                Reduced energy consumption and lower overall operational costs
                through more efficient cooling and process control
              </li>
              <li>
                Enhanced part consistency across every production run for better
                fit, finish, and long-term performance stability
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="advantages-heading">Five-Point Value Proposition</h2>
      <div className="advantages-wrap">
        {cards.map((card, index) => {
          const isOpen = openIndex === index;
          return (
            <button
              key={card.title}
              type="button"
              className={`adv-card${isOpen ? " is-open" : ""}`}
              onClick={() => toggleCard(index)}
              aria-expanded={isOpen}
            >
              <div className="adv-top">
                <span className="adv-icon">{icons[index]}</span>
              </div>
              <div className="adv-body">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <div className="adv-footer">
                {String(index + 1).padStart(2, "0")}
              </div>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        .advantages-section {
          background: #ffffff;
          // padding: 40px 24px 64px;
        }

        .advantages-intro {
          width: 100%;
          margin: 0 0 36px;
          background: linear-gradient(135deg, #0b2a63 0%, #113b7a 100%);
          // border-radius: 18px;
          padding: clamp(24px, 4vw, 40px);
          color: #ffffff;
          box-shadow: 0 18px 40px rgba(7, 18, 48, 0.3);
        }

        .advantages-kicker {
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }

        .advantages-title {
          margin: 0 0 16px;
          font-size: clamp(22px, 2.8vw, 34px);
          line-height: 1.2;
          color: #ffffff;
        }

        .advantages-highlight {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 16px;
        }

        .highlight-pill {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 0 999px 999px 0;
          background: #e11d2e;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .advantages-highlight p {
          margin: 12px 0 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          line-height: 1.6;
        }

        .advantages-benefits h3 {
          margin: 0 0 10px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.7);
        }

        .advantages-benefits ul {
          margin: 0;
          padding: 0;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          list-style: none;
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
        }

        .advantages-benefits li {
          padding: 12px 14px;
          border-right: 1px solid rgba(255, 255, 255, 0.28);
          border-bottom: 1px solid rgba(255, 255, 255, 0.28);
          line-height: 1.45;
        }

        .advantages-benefits li:nth-child(2n) {
          border-right: none;
        }

        .advantages-benefits li:nth-last-child(-n + 2) {
          border-bottom: none;
        }

        .advantages-heading {
          margin: 0 0 24px;
          text-align: center;
          font-size: clamp(22px, 2.4vw, 30px);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #0b3378;
          font-weight: 600;
        }

        .advantages-wrap {
          width: 100%;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .adv-card {
          border: none;
          padding: 0;
          background: #ffffff;
          border-radius: 6px;
          box-shadow:
            0 14px 26px rgba(10, 25, 60, 0.22),
            0 4px 0 rgba(9, 33, 78, 0.15);
          display: grid;
          grid-template-rows: auto auto auto;
          overflow: visible;
          text-align: left;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
          position: relative;
          z-index: 0;
          align-self: start;
        }

        .adv-card::after {
          content: "";
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: -10px;
          height: 12px;
          background: rgba(10, 25, 60, 0.18);
          filter: blur(10px);
          z-index: -1;
          border-radius: 10px;
        }

        .adv-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 26px rgba(10, 25, 60, 0.22);
        }

        .adv-top {
          background: linear-gradient(135deg, #6ea9da 0%, #2f6db8 100%);
          padding: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 74px;
        }

        .adv-icon :global(svg) {
          width: 34px;
          height: 34px;
          stroke: #ffffff;
          fill: none;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .adv-body {
          padding: 0 14px;
          background: #ffffff;
          transition:
            max-height 0.35s ease,
            opacity 0.35s ease,
            transform 0.35s ease,
            padding 0.35s ease;
          max-height: 0;
          opacity: 0;
          transform: translateY(-6px);
          overflow: hidden;
        }

        .adv-body h3 {
          margin: 0 0 8px;
          font-size: 14px;
          text-transform: uppercase;
          color: #123a78;
          letter-spacing: 0.04em;
          font-weight: 700;
        }

        .adv-body p {
          margin: 0;
          font-size: 12px;
          line-height: 1.5;
          color: #1a3c7a;
        }

        .adv-footer {
          background: linear-gradient(135deg, #5c8fcb 0%, #2458a3 100%);
          color: #ffffff;
          font-weight: 700;
          text-align: center;
          padding: 10px 0;
          letter-spacing: 0.1em;
        }

        .adv-card.is-open .adv-body {
          max-height: 360px;
          opacity: 1;
          transform: translateY(0);
          padding: 16px 14px 12px;
        }

        @media (max-width: 1100px) {
          .advantages-wrap {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .advantages-wrap {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 520px) {
          .advantages-wrap {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .advantages-section {
            padding: 32px 16px 56px;
          }
        }
      `}</style>
    </section>
  );
}
