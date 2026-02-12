"use client";

import Image from "next/image";
import Link from "next/link";

export default function InjectionCtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-wrap">
        <div className="cta-image">
          <Image
            src="/injectionmolding/machines/850Ton.png"
            alt="Injection molding tool"
            fill
            sizes="(max-width: 900px) 100vw, 30vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="cta-body">
          {/* <div className="cta-stripes" aria-hidden="true" /> */}
          <h2>Ready to Start Your Next Project?</h2>
          <p>
            Let&apos;s talk about how Prem Industries can bring precision,
            reliability, and innovation to your manufacturing needs. Whether you
            need consumer durables, e-commerce solutions, or custom components
            tailored to your specifications, we have the expertise and
            technology to make it happen.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button ghost">
              Schedule a Facility Tour
            </Link>
          </div>
          {/* <div className="cta-corner" aria-hidden="true" /> */}
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: #ffffff;
          padding: 30px 0 60px;
        }

        .cta-wrap {
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(220px, 0.35fr) minmax(320px, 0.65fr);
          border-radius: 12px;
          overflow: hidden;
          background: #0d2f66;
          box-shadow: 0 18px 36px rgba(5, 16, 40, 0.25);
        }

        .cta-image {
          position: relative;
          min-height: 180px;
          filter: grayscale(100%);
        }

        .cta-body {
          position: relative;
          padding: 24px 32px;
          color: #ffffff;
          display: grid;
          gap: 12px;
        }

        .cta-body h2 {
          margin: 0;
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          color: #ffffff;
        }

        .cta-body p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 10px 18px;
          border-radius: 4px;
          background: #ffffff;
          color: #0d2f66;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-decoration: none;
          font-size: 12px;
          border: 1px solid transparent;
        }

        .cta-button.ghost {
          background: transparent;
          border-color: rgba(255, 255, 255, 0.6);
          color: #ffffff;
        }

        :global(.cta-section h2),
        :global(.cta-section p),
        :global(.cta-section a) {
          color: #ffffff !important;
        }

        :global(.cta-section .cta-button) {
          color: #0d2f66 !important;
        }

        :global(.cta-section .cta-button.ghost) {
          color: #ffffff !important;
        }

        .cta-stripes {
          position: absolute;
          left: -8px;
          top: 16px;
          width: 10px;
          height: 60px;
          background: repeating-linear-gradient(
            180deg,
            #ffffff 0 6px,
            transparent 6px 12px
          );
        }

        .cta-corner {
          position: absolute;
          right: 18px;
          bottom: 10px;
          width: 90px;
          height: 22px;
          background: repeating-linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.35) 0 8px,
            transparent 8px 14px
          );
        }

        @media (max-width: 900px) {
          .cta-wrap {
            grid-template-columns: 1fr;
          }

          .cta-image {
            min-height: 200px;
          }

          .cta-body {
            padding: 20px 24px;
          }
        }
      `}</style>
    </section>
  );
}
