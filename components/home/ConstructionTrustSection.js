"use client";

import Image from "next/image";
import Link from "next/link";

const bullets = [
  "PremIndustries: diversified industrial growth platform",
  "Prempackaging: packaging solutions for B2B supply chains",
  "Sheet Metal: precision fabrication for industrial applications",
  "Injection Moulding: high-volume plastic component manufacturing",
];

export default function ConstructionTrustSection() {
  return (
    <section className="construction-trust">
        <div className="container">
        <div className="shell">
          <article className="left-panel">
            <p className="kicker">PREM INDUSTRIES</p>
            <h2>Integrated Business Verticals Built For Scale And Quality</h2>

            <div className="left-image">
              <Image
                src="/home/hero-construction.jpg"
                alt="Construction planning and helmet"
                fill
                sizes="(max-width: 991px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </article>

          <article className="right-panel">
            <div className="right-image">
              <Image
                src="/home/sector-constructionsector.jpg"
                alt="Construction team on site"
                fill
                sizes="(max-width: 991px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="right-content">
              <div className="bullet-list">
                {bullets.map((item) => (
                  <p key={item}>
                    <span className="dot" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>

            <div className="stat-card">
                <h3>4 Core Business Verticals</h3>
                <span>One Group. Multiple Capabilities.</span>
                <p>
                  Delivering packaging, sheet metal, and injection moulding
                  excellence through PremIndustries.
                </p>
              </div>
            </div>

            <div className="footer">
              <Link href="/about" className="cta">
                Explore Group
              </Link>
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .construction-trust {
          background: #f3f3f3;
          padding: 14px 0 30px;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .shell {
          background: #ffffff;
          border-radius: 6px;
          padding: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          box-shadow: 0 8px 26px rgba(16, 16, 16, 0.08);
        }

        .left-panel,
        .right-panel {
          border: 1px solid #ececec;
          border-radius: 4px;
          padding: 12px;
        }

        .kicker {
          margin: 0;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: #9d9d9d;
          font-weight: 700;
          text-transform: uppercase;
        }

        .left-panel h2 {
          margin: 8px 0 12px;
          font-size: clamp(26px, 2.2vw, 38px);
          line-height: 1.06;
          color: #13224d;
          text-transform: none;
          max-width: 520px;
        }

        .left-image {
          position: relative;
          width: 100%;
          min-height: 220px;
          border-radius: 4px;
          overflow: hidden;
        }

        .right-image {
          position: relative;
          width: 100%;
          min-height: 184px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .right-content {
          display: grid;
          grid-template-columns: minmax(200px, 1fr) minmax(180px, 0.9fr);
          gap: 10px;
        }

        .bullet-list {
          padding: 8px 8px 8px 2px;
        }

        .bullet-list p {
          margin: 0 0 8px;
          color: #666;
          font-size: 12px;
          line-height: 1.45;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e92127;
          flex: 0 0 auto;
        }

        .stat-card {
          background: #13224d;
          color: #fff;
          border-radius: 4px;
          padding: 12px;
        }

        .stat-card h3 {
          margin: 0 0 6px;
          color: #ffffff;
          font-size: 15px;
          line-height: 1.2;
          text-transform: none;
        }

        .stat-card span {
          font-size: 12px;
          font-weight: 700;
          opacity: 0.95;
        }

        .stat-card p {
          margin: 8px 0 0;
          font-size: 11px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.93);
        }

        .footer {
          margin-top: 10px;
          display: flex;
          justify-content: flex-start;
        }

        .cta {
          background: #e92127;
          color: #fff;
          min-height: 34px;
          padding: 0 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 991px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .shell {
            grid-template-columns: 1fr;
          }

          .right-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .shell {
            padding: 10px;
          }

          .left-panel h2 {
            font-size: clamp(22px, 7vw, 32px);
          }
        }
      `}</style>
    </section>
  );
}
