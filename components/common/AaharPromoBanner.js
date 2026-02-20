"use client";

import Image from "next/image";
import Link from "next/link";

export default function AaharPromoBanner() {
  return (
    <section className="aahar-promo">
      <div className="aahar-image-wrap">
        <Image
          src="/aahar/AaharBanner2026.jpeg"
          alt="AAHAR 2026 banner"
          width={1920}
          height={500}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className="aahar-copy">
        <h2>AAHAR 2026</h2>
        <p>
          Visit Prem Industries at AAHAR 2026 to explore our latest sustainable
          packaging innovations.{" "}
          <Link href="/contact" className="accent">
            CONNECT WITH OUR TEAM
          </Link>{" "}
          for product demos and business discussions.
        </p>
      </div>

      <style jsx>{`
        .aahar-promo {
          background: #f5f5f5;
          margin: 0;
          padding: 22px 0 0;
        }

        .aahar-image-wrap {
          line-height: 0;
          width: min(100% - 32px, 1200px);
          margin: 0 auto;
          border-radius: 8px;
          overflow: hidden;
        }

        .aahar-image-wrap :global(img) {
          max-height: none;
          object-fit: contain;
        }

        .aahar-copy {
          text-align: center;
          padding: 14px 18px 10px;
        }

        .aahar-copy h2 {
          margin: 0 0 10px;
          color: #0f1d3d;
          font-size: clamp(28px, 2.6vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0.01em;
        }

        .aahar-copy p {
          margin: 0;
          color: #27364f;
          font-size: clamp(16px, 1.1vw, 36px);
          line-height: 1.35;
          max-width: 1360px;
          margin-left: auto;
          margin-right: auto;
        }

        :global(.aahar-copy a.accent) {
          color: #e12929;
          font-weight: 700;
          text-decoration: none;
        }

        :global(.aahar-copy a.accent:visited),
        :global(.aahar-copy a.accent:hover),
        :global(.aahar-copy a.accent:focus) {
          color: #e12929 !important;
        }

        @media (max-width: 767px) {
          .aahar-promo {
            margin: 0;
            padding: 14px 0 0;
          }

          .aahar-image-wrap {
            width: min(100% - 20px, 1200px);
          }

          .aahar-image-wrap :global(img) {
            max-height: none;
          }

          .aahar-copy {
            padding: 10px 14px 8px;
          }
        }
      `}</style>
    </section>
  );
}
