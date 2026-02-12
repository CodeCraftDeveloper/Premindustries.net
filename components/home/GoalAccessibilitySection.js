"use client";

import Image from "next/image";
import Link from "next/link";

const points = [
  "Focus on sustainability and process safety",
  "Industry-ready quality standards",
  "People-first engineering culture",
  "Manufacturing backed by accountability",
];

export default function GoalAccessibilitySection() {
  return (
    <section className="goal-section">
      <div className="container">
        <div className="shell">
          <div className="left">
            <div className="image-main">
              <Image
                src="/home/sector-steelsector.jpg"
                alt="Industrial operations"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 34vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="image-side">
              <Image
                src="/home/sector-constructionsector.jpg"
                alt="Industrial team"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 22vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="badge">
              <strong>50+</strong>
              <span>Years Experience</span>
            </div>
          </div>

          <div className="right">
            <p className="kicker">WHO WE ARE</p>
            <h2>Engineering Precision. Delivering Excellence.</h2>
            <p className="copy">
              Prem Industries is committed to delivering high-quality sheet
              metal components and precision-engineered solutions for
              automotive, industrial, and appliance sectors. Through advanced
              manufacturing, disciplined execution, and customer-focused
              innovation, we ensure reliability, efficiency, and long-term value
              in every project.
            </p>

            <div className="points">
              {points.map((item) => (
                <div key={item} className="point">
                  <span className="dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="footer">
              <Link href="/contact" className="cta">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .goal-section {
          background: #f2f2f2;
          padding: 18px 0 32px;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .shell {
          background: #ffffff;
          border-radius: 6px;
          padding: 18px;
          display: grid;
          grid-template-columns: minmax(280px, 0.95fr) minmax(280px, 1.05fr);
          gap: 22px;
          box-shadow: 0 8px 28px rgba(20, 20, 20, 0.08);
        }

        .left {
          position: relative;
          min-height: 270px;
        }

        .image-main,
        .image-side {
          position: absolute;
          overflow: hidden;
          border: 4px solid #ffffff;
          box-shadow: 0 10px 24px rgba(15, 18, 24, 0.18);
        }

        .image-main {
          left: 0;
          top: 0;
          width: 64%;
          height: 84%;
          z-index: 1;
        }

        .image-side {
          right: 2%;
          top: 14%;
          width: 48%;
          height: 78%;
          z-index: 2;
        }

        .badge {
          position: absolute;
          left: 8%;
          bottom: 2%;
          z-index: 3;
          background: #e92127;
          color: #ffffff;
          min-width: 120px;
          padding: 10px 14px;
        }

        .badge strong {
          display: block;
          font-size: 26px;
          line-height: 1;
        }

        .badge span {
          font-size: 11px;
          opacity: 0.95;
        }

        .kicker {
          margin: 0;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: #e92127;
          text-transform: uppercase;
          font-weight: 700;
        }

        .right h2 {
          margin: 8px 0 10px;
          font-size: clamp(28px, 2.5vw, 40px);
          line-height: 1.05;
          color: #13224d;
          text-transform: none;
        }

        .copy {
          margin: 0;
          font-size: 13px;
          line-height: 1.65;
          color: #6f6f6f;
          max-width: 640px;
        }

        .points {
          margin-top: 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 16px;
        }

        .point {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #444444;
          font-size: 13px;
        }

        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e92127;
          flex: 0 0 auto;
        }

        .footer {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid #e8e8e8;
          padding-top: 14px;
        }

        .cta {
          background: #13224d;
          color: #ffffff;
          padding: 10px 16px;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.08em;
          border-radius: 2px;
        }

        .stat {
          margin: 0;
          color: #6a6a6a;
          font-size: 12px;
        }

        .stat strong {
          color: #1f1f1f;
        }

        @media (max-width: 991px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .shell {
            grid-template-columns: 1fr;
          }

          .left {
            min-height: 300px;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .shell {
            padding: 14px;
          }

          .points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
