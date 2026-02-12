"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.35 },
};

const aboutHighlights = [
  "25 years of proven manufacturing excellence",
  "\u20b9100 crore investment in state-of-the-art infrastructure",
  "Machines ranging from 160 to 3000 tons for maximum versatility",
  "Comprehensive quality management and certification",
  "Dedicated to building long-term production partnerships",
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <motion.div {...fadeUp} className="about-panel">
        <div className="about-panel-inner">
          <div className="about-text">
            <div className="about-tag">
              <span className="about-dot" />
              <span>About Us</span>
            </div>
            <h2>About Prem Industries</h2>
            <p className="about-copy">
              Founded with a vision to revolutionize manufacturing in India,
              Prem Industries India Limited has grown from a single facility to
              a multi-unit operation spanning across Ghaziabad and Greater
              Noida.
            </p>
            <p className="about-copy">
              With 25 years of industry experience, we&apos;ve built our
              reputation on three core principles: innovation, quality, and
              unwavering commitment to our clients&apos; success.
            </p>
            <p className="about-copy">
              Our entry into injection molding represents the next chapter in
              our growth story&mdash;one where we combine decades of manufacturing
              excellence with cutting-edge technology to deliver solutions that
              drive industries forward.
            </p>
            <div className="about-points">
              {aboutHighlights.map((item) => (
                <div key={item} className="about-point">
                  <span className="about-dot" />
                  <p className="about-point-title">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-shapes" aria-hidden="true">
            <span className="about-shape one" />
            <span className="about-shape two" />
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .about-section {
          background: #ffffff;
          padding: 0 0 24px;
          margin-top: -32px;
        }

        .about-panel {
          width: min(1400px, 94%);
          margin: 0 auto;
          background: linear-gradient(135deg, #0d144a 0%, #151d5f 45%, #1f2a7a 100%);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 44px rgba(8, 16, 48, 0.35);
        }

        .about-panel-inner {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(180px, 0.6fr);
          gap: clamp(18px, 4vw, 40px);
          align-items: stretch;
          padding: clamp(24px, 4vw, 42px);
        }

        .about-text {
          color: #0b1b2b;
          display: grid;
          gap: 12px;
        }

        .about-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.32em;
          color: #6b7280;
        }

        .about-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e11d2e;
        }

        .about-text h2 {
          margin: 6px 0 4px;
          font-size: clamp(26px, 3.2vw, 38px);
          text-transform: none;
          color: #0b1b2b;
          font-family: "Oswald", sans-serif;
        }

        .about-points {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 8px 0 0;
        }

        .about-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .about-point .about-dot {
          margin-top: 6px;
          flex-shrink: 0;
        }

        .about-point-title {
          margin: 0;
          color: #0b1b2b;
          font-weight: 600;
          font-size: 13px;
          line-height: 1.5;
        }

        .about-copy {
          margin: 0;
          color: #4a587a;
          font-size: 13px;
          line-height: 1.7;
        }

        .about-shapes {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-height: 180px;
        }

        .about-shape {
          position: absolute;
          width: clamp(120px, 18vw, 200px);
          height: clamp(200px, 26vw, 320px);
          background: linear-gradient(160deg, #1f0c4a 0%, #2a0d3f 100%);
          transform: skewX(-12deg);
          box-shadow: 0 18px 30px rgba(5, 12, 40, 0.35);
          opacity: 0.9;
        }

        .about-shape.one {
          right: clamp(120px, 10vw, 180px);
          background: linear-gradient(160deg, #1a2a7a 0%, #111a5c 100%);
        }

        .about-shape.two {
          right: 0;
        }

        @media (max-width: 900px) {
          .about-panel-inner {
            grid-template-columns: 1fr;
          }

          .about-shapes {
            min-height: 0;
            justify-content: flex-start;
            display: none;
          }

          .about-points {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
