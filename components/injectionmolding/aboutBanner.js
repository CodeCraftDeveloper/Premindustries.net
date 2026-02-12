"use client";

export default function AboutBannerSection() {
  return (
    <section className="about-banner">
      <div className="about-banner-inner">
        <div className="about-banner-text">
          <h2>About Us</h2>
          <p>Text</p>
        </div>
        <div className="about-banner-shapes" aria-hidden="true">
          <span className="shape one" />
          <span className="shape two" />
        </div>
      </div>

      <style jsx>{`
        .about-banner {
          background: linear-gradient(90deg, #0b1d4a 0%, #0b2d7a 60%, #0a2e86 100%);
          padding: 48px 0;
          overflow: hidden;
        }

        .about-banner-inner {
          width: min(1200px, 92%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(220px, 0.8fr);
          align-items: center;
          gap: 24px;
        }

        .about-banner-text h2 {
          margin: 0 0 10px;
          font-size: clamp(38px, 6vw, 72px);
          color: #ffffff;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .about-banner-text p {
          margin: 0;
          font-size: clamp(26px, 4vw, 56px);
          color: #ffffff;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.06em;
        }

        .about-banner-shapes {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-height: 180px;
        }

        .shape {
          position: absolute;
          width: 180px;
          height: 240px;
          background: linear-gradient(160deg, #121a5a 0%, #0a1a4e 100%);
          transform: skewX(-12deg);
          box-shadow: 0 18px 30px rgba(5, 12, 40, 0.35);
        }

        .shape.one {
          right: 140px;
          background: linear-gradient(160deg, #0a1c63 0%, #07174a 100%);
        }

        .shape.two {
          right: 0;
          background: linear-gradient(160deg, #1a0c4a 0%, #2a0d3f 100%);
        }

        @media (max-width: 900px) {
          .about-banner-inner {
            grid-template-columns: 1fr;
            text-align: left;
          }

          .about-banner-shapes {
            justify-content: flex-start;
          }

          .shape.one {
            right: auto;
            left: 0;
          }

          .shape.two {
            right: auto;
            left: 120px;
          }
        }
      `}</style>
    </section>
  );
}
