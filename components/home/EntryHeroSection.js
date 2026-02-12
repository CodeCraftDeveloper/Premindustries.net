"use client";

import Link from "next/link";

const pillars = [
  "Global Leaders",
  "People Experience",
  "Brilliant Services",
];

const capabilityCards = [
  {
    title: "Integrated Manufacturing",
    description:
      "From fabrication to finishing, we run tightly controlled production systems that improve throughput and product consistency.",
  },
  {
    title: "Reliable Distribution",
    description:
      "Our dispatch and delivery workflows are structured for predictable movement, reduced delays, and transparent communication.",
  },
  {
    title: "Quality-First Operations",
    description:
      "Every process follows measurable standards, helping customers maintain compliance, performance, and trust at scale.",
  },
];

const operatingHighlights = [
  "Cross-sector expertise in packaging, steel, retail, and construction support.",
  "Strong vendor and partner network enabling faster execution cycles.",
  "Customer-led planning with emphasis on long-term operational value.",
];

export default function EntryHeroSection() {
  return (
    <section className="entry-hero">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-left hero-text">
            <p className="hero-kicker">ABOUT PREM INDUSTRIES</p>
            <h1>World&apos;s Leading Contract Logistics Provider.</h1>
            <p className="hero-copy">
              Prem Industries delivers end-to-end logistics and manufacturing
              support with dependable timelines and quality-controlled execution.
            </p>

            <ul className="hero-points" aria-label="Core strengths">
              {pillars.map((item) => (
                <li key={item}>
                  <span className="point-icon" aria-hidden="true">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="hero-cta">
              Learn More
            </Link>
          </div>

          <div className="hero-right hero-content">
            <div className="hero-stats">
              <article>
                <h3>23+</h3>
                <p>Years Experience</p>
              </article>
              <article>
                <h3>18K</h3>
                <p>Worldwide Clients</p>
              </article>
            </div>

            <div className="hero-image-wrap">
              <img
                src="/sheetmetal/shearing-1.jpg"
                alt="Prem Industries warehouse operations"
                className="hero-image"
              />
            </div>
          </div>
        </div>

        <div className="entry-overview">
          <div className="overview-head">
            <p className="overview-kicker">OUR FOUNDATION</p>
            <h2>Built to deliver dependable industrial growth.</h2>
            <p>
              PremIndustries combines execution discipline, modern processes,
              and customer-centric planning to help businesses scale with
              confidence.
            </p>
          </div>

          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article key={card.title} className="capability-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="operating-model">
          <div className="model-text">
            <p className="overview-kicker">HOW WE OPERATE</p>
            <h2>Execution backed by process and partnership.</h2>
            <p>
              We align teams, technology, and ground-level coordination to
              deliver consistent outcomes across projects of different scale and
              complexity.
            </p>
          </div>

          <ul className="model-points" aria-label="Operating highlights">
            {operatingHighlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .entry-hero {
          padding: 48px 0 56px;
          background: #f8f8f6;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .hero-shell {
          background: #ffffff;
          border-radius: 8px;
          padding: 36px;
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(280px, 1.2fr);
          gap: 28px;
          box-shadow: 0 10px 28px rgba(20, 20, 20, 0.08);
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.14em;
          font-weight: 600;
          color: #8b8b8b;
          text-transform: uppercase;
        }

        .hero-left h1 {
          margin: 14px 0 14px;
          font-size: clamp(28px, 3vw, 44px);
          line-height: 1.08;
          max-width: 460px;
          color: #151515;
          font-weight: 700;
        }

        .hero-copy {
          margin: 0;
          color: #6c6c6c;
          font-size: 14px;
          line-height: 1.6;
          max-width: 460px;
        }

        .hero-points {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
        }

        .hero-points li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 600;
          color: #222222;
        }

        .point-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c5302c;
          color: #ffffff;
          display: grid;
          place-items: center;
          font-size: 8px;
          line-height: 1;
          flex: 0 0 auto;
        }

        .hero-cta {
          margin-top: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          border-radius: 3px;
          background: #0f1b28;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-self: center;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #c72f25;
          color: #ffffff;
        }

        .hero-stats article {
          padding: 16px 18px;
        }

        .hero-stats article + article {
          border-left: 1px solid rgba(255, 255, 255, 0.25);
        }

        .hero-stats h3 {
          margin: 0;
          font-size: clamp(26px, 2vw, 34px);
          font-weight: 800;
          line-height: 1;
        }

        .hero-stats p {
          margin: 8px 0 0;
          font-size: 12px;
          opacity: 0.95;
        }

        .hero-image-wrap {
          height: 260px;
          overflow: hidden;
          background: #f0f0f0;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .entry-overview {
          margin-top: 28px;
          background: #ffffff;
          border-radius: 8px;
          padding: 28px;
          box-shadow: 0 10px 28px rgba(20, 20, 20, 0.07);
        }

        .overview-head h2 {
          margin: 12px 0 10px;
          font-size: clamp(24px, 2.4vw, 34px);
          color: #151515;
          line-height: 1.2;
          max-width: 700px;
        }

        .overview-head p {
          margin: 0;
          color: #5f5f5f;
          font-size: 14px;
          line-height: 1.7;
          max-width: 760px;
        }

        .overview-kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.14em;
          font-weight: 700;
          color: #c5302c;
          text-transform: uppercase;
        }

        .capability-grid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .capability-card {
          background: #f8f8f6;
          border: 1px solid #ecebe8;
          border-radius: 6px;
          padding: 18px;
        }

        .capability-card h3 {
          margin: 0;
          font-size: 17px;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .capability-card p {
          margin: 10px 0 0;
          color: #5e5e5e;
          font-size: 13px;
          line-height: 1.6;
        }

        .operating-model {
          margin-top: 20px;
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);
          gap: 18px;
        }

        .model-text {
          background: #0f1b28;
          border-radius: 8px;
          padding: 26px;
          color: #ffffff;
        }

        .model-text .overview-kicker {
          color: #ff9e8b;
        }

        .model-text h2 {
          margin: 10px 0 10px;
          font-size: clamp(22px, 2.1vw, 30px);
          line-height: 1.2;
          color: #ffffff;
        }

        .model-text p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
        }

        .model-points {
          list-style: none;
          margin: 0;
          padding: 22px;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 10px 28px rgba(20, 20, 20, 0.07);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .model-points li {
          position: relative;
          padding-left: 20px;
          color: #2e2e2e;
          line-height: 1.55;
          font-size: 14px;
        }

        .model-points li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #c5302c;
        }

        @media (max-width: 992px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .hero-shell {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 24px;
          }

          .hero-image-wrap {
            height: 220px;
          }

          .capability-grid {
            grid-template-columns: 1fr;
          }

          .operating-model {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .entry-hero {
            padding: 24px 0 36px;
          }

          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .hero-shell {
            padding: 18px;
          }

          .hero-stats article {
            padding: 12px;
          }

          .hero-left h1 {
            margin-top: 10px;
          }

          .hero-cta {
            width: 100%;
          }

          .entry-overview {
            padding: 20px 16px;
          }

          .model-text,
          .model-points {
            padding: 18px 16px;
          }
        }
      `}</style>
    </section>
  );
}
