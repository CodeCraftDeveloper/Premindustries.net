"use client";

import Link from "next/link";

export default function HomeCtaSection() {
  return (
    <section className="home-cta">
      <div className="container">
        <div className="cta-shell">
          <div className="cta-copy">
            <p className="kicker">NEXT STEP</p>
            <h2>Let&apos;s build your next industrial milestone together.</h2>
            <p>
              Connect with our team to discuss your requirement, project scope,
              and execution timelines.
            </p>
          </div>

          <div className="cta-actions">
            <Link href="/contact" className="cta-btn solid">
              Start a Conversation
            </Link>
            <Link href="/about" className="cta-btn outline">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-cta {
          padding: 10px 0 26px;
          background: #f8f8f6;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .cta-shell {
          background: linear-gradient(100deg, #101d2b 0%, #172b3f 100%);
          border-radius: 10px;
          padding: 26px;
          color: #ffffff;
          display: grid;
          grid-template-columns: minmax(260px, 1.2fr) minmax(220px, 0.8fr);
          gap: 18px;
          align-items: center;
        }

        .kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.14em;
          font-weight: 700;
          color: #ff9e8b;
          text-transform: uppercase;
        }

        .cta-copy h2 {
          margin: 10px 0;
          font-size: clamp(24px, 2.5vw, 34px);
          line-height: 1.2;
          color: #ffffff;
        }

        .cta-copy p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cta-btn {
          min-height: 44px;
          border-radius: 5px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: center;
          padding: 0 16px;
        }

        .cta-btn.solid {
          background: #c5302c;
          color: #ffffff;
        }

        .cta-btn.outline {
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .cta-shell {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }
        }
      `}</style>
    </section>
  );
}
