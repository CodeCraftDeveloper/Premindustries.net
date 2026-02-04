"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-home">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Engineering reliable
            <br />
            Manufacturing
            <br />
            Accross India
          </h1>
          <p className="hero-lead">
            Integrated manufacturing across three core sectors.
          </p>
          <p className="hero-sublead">
            ISO-aligned + PPAP-ready QC with traceability; trusted by FMCG
            brands, auto Tier-1s, and appliance OEMs.
          </p>
          <Link href="/contact" className="hero-cta">
            Explore More
          </Link>
        </div>
      </div>

      <div className="container hero-cards">
        <div className="hero-card accent-red">
          <div className="card-icon" aria-hidden="true">
            P
          </div>
          <h3>Packaging Solutions</h3>
          <p>Rigid to flexible packaging for FMCG &amp; industrial use.</p>
          <a
            href="https://prempackaging.com/"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            Visit
          </a>
        </div>

        <div className="hero-card accent-blue">
          <div className="card-icon" aria-hidden="true">
            S
          </div>
          <h3>Sheet Metal Fabrication</h3>
          <p>
            Precision-engineered components for mobility and infrastructure.
          </p>
          <Link href="/sheet-metal-components" className="card-link">
            Visit
          </Link>
        </div>

        <div className="hero-card accent-green">
          <div className="card-icon" aria-hidden="true">
            I
          </div>
          <h3>Injection Moulding</h3>
          <p>High-volume plastic parts with tight tolerances.</p>
          <Link href="/contact" className="card-link">
            Visit
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero-home {
          position: relative;
          overflow: hidden;
          color: #ffffff;
        }

        .hero-home .container {
          width: 100%;
          padding-left: 0;
          padding-right: 0;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              90deg,
              rgba(8, 16, 24, 0.86) 0%,
              rgba(8, 16, 24, 0.35) 60%,
              rgba(8, 16, 24, 0.15) 100%
            ),
            url("/home/hero-steel.jpg");
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          padding: 0;
        }

        .hero-text {
          color: #ffffff;
          max-width: 640px;
          text-align: left;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .hero-text h1 {
          font-size: clamp(32px, 4.2vw, 58px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0.5px;
          color: #ffffff;
          margin: 0;
          padding: 0;
          text-transform: uppercase;
          max-width: 520px;
        }

        .hero-lead {
          font-size: clamp(16px, 1.7vw, 20px);
          font-weight: 600;
          margin: 0;
          padding: 0;
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-sublead {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.78);
          margin: 0;
          padding: 0;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          border-radius: 12px;
          background: #f04b4f;
          color: #ffffff;
          font-weight: 700;
          text-transform: none;
          box-shadow: 0 12px 24px rgba(240, 75, 79, 0.35);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 28px rgba(240, 75, 79, 0.45);
        }

        .hero-cards {
          position: relative;
          z-index: 2;
          margin-top: 56px;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 18px;
          padding: 22px 22px 18px;
          color: #1a2332;
          box-shadow: 0 18px 40px rgba(10, 20, 30, 0.25);
          backdrop-filter: blur(8px);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .hero-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
        }

        .hero-card p {
          font-size: 14px;
          margin: 0;
          color: rgba(26, 35, 50, 0.75);
        }

        .card-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #ffffff;
          display: grid;
          place-items: center;
          font-weight: 800;
          color: #1a2332;
          box-shadow: 0 8px 18px rgba(10, 20, 30, 0.18);
        }

        .card-link {
          margin-top: auto;
          color: #f04b4f;
          font-weight: 700;
          text-transform: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .card-link::after {
          content: ">";
          font-size: 16px;
        }

        .accent-red {
          border-left: 4px solid #f04b4f;
        }

        .accent-blue {
          border-left: 4px solid #3a5ce5;
        }

        .accent-green {
          border-left: 4px solid #26b36b;
        }

        @media (max-width: 768px) {
          .hero-home {
            padding: 100px 0 60px;
          }

          .hero-home .container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-cards {
            margin-top: 36px;
          }
        }
      `}</style>
    </section>
  );
}
