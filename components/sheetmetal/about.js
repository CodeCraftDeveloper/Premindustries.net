"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function QuickIcon({ name }) {
  if (name === "factory") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 20V9l6 3V9l6 3V9l6 3v8H3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 20v-4m4 4v-6m4 6v-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 20V5h8v15m2 0V9h4v11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h2m-2 4h2m-2 4h2M15 12h2m-2 4h2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "wrench") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14.5 6.5a4 4 0 0 0 3.5 3.5L13 15l-4 4-3-3 4-4 5-5a4 4 0 0 0-.5-3.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6.5" cy="17.5" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3c4.2 1 7 5 7 9 0 5-4 9-9 9-4 0-7-3-7-7 0-4 3-8 9-11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 14c2.5 0 5-2 6-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutTwo() {
  return (
    <>
      <section className="about-section mb-5" style={{ overflowX: "hidden" }}>
        <div className="container">
          <div className="row align-items-center mt-3">
            <div className="col-xl-12 mt-5 mt-lg-0 col-12">
              <div className="block-contents">
                <div className="section-title">
                  <h3
                    className="wow fadeInLeft animated"
                    style={{ fontSize: "40px" }}
                  >
                    Sheet Metal &amp; Components
                  </h3>
                </div>
              </div>

              <p
                className="wow fadeInLeft animated"
                style={{ textAlign: "justify", fontSize: "17px" }}
              >
                At Prem Industries India Limited, our Sheet Metal and Components
                Division is a testament to precision engineering and robust
                infrastructure. Spread across a 22,000 square meter land area,
                the facility boasts a state-of-the-art built-up space of 4.5
                lakh square feet over three floors. First of its kind setup in
                north India with integrated processing from steel coil to
                component, this facility reflects our commitment to end-to-end
                manufacturing excellence.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-6 col-12 pe-xl-0">
              <div className="d-flex flex-column" style={{ gap: 0 }}>
                {/* Optimized Next.js image (equivalent to your background block) */}
                <div
                  className="wow fadeInLeft animated mt-4 shadow-sm"
                  style={{ borderRadius: "12px" }}
                >
                  <div
                    className="position-relative w-100"
                    style={{
                      aspectRatio: "9 / 5",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={"/sheetmetal/about.jpg"}
                      alt="Sheet metal components at Prem Industries"
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </div>
                </div>

                {/* If you prefer to keep a CSS background instead of <Image>, use this block:
              <div
                className="bg-cover wow fadeInLeft animated mt-4 shadow-sm"
                style={{
                  backgroundImage: `url(${typeof AboutImg2 === 'string' ? AboutImg2 : AboutImg2.src})`,
                  borderRadius: '12px',
                  width: '100%',
                  aspectRatio: '9/5',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: 0,
                  marginTop: 0,
                }}
              /> */}
              </div>
            </div>

            <div className="col-xl-6 mt-5 mt-lg-0 col-12">
              <p
                className="wow fadeInLeft animated mt-2"
                style={{ textAlign: "justify", fontSize: "17px" }}
              >
                With an initial investment of Rs 75 crores and a projected Rs
                175 crores investment over the next three years, we are poised
                for exponential growth. Our division is equipped with modern
                machinery, 100% power backup, and advanced technology to meet
                the dynamic needs of automotive, industrial, and appliance
                sectors.
              </p>
              <p
                className="wow fadeInLeft animated mt-2"
                style={{ textAlign: "justify", fontSize: "17px" }}
              >
                We specialize in the design, fabrication, and assembly of
                high-quality sheet metal components, maintaining strict
                adherence to global standards. With a strong focus on
                efficiency, innovation, and scalability, Prem Industries India
                Limited continues to deliver reliable, cost-effective solutions
                across diverse industries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="coverage-section">
        <video
          className="coverage-video"
          src="/home/sustainability2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="coverage-overlay" />
        <div className="container coverage-content">
          <div className="coverage-text">
            <h2>Sheet Metal Industry Coverage</h2>
            <p>
              We deliver components across automotive, construction,
              electronics, and appliances, covering everything from panels to
              structural assemblies.
            </p>
            <p>
              We also support household and consumer products like mailboxes,
              furniture, utensils, cans, and elevators, plus industrial
              machinery housing, brackets, custom machine parts, and tanks.
            </p>
            <Link href="/contact" className="coverage-cta">
              Explore Applications
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="coverage-list">
            <div className="coverage-card">
              <span className="coverage-icon" aria-hidden="true">
                <QuickIcon name="factory" />
              </span>
              <div>
                <h3>Automotive</h3>
                <p>Car doors, interior panels</p>
              </div>
            </div>
            <div className="coverage-card">
              <span className="coverage-icon" aria-hidden="true">
                <QuickIcon name="leaf" />
              </span>
              <div>
                <h3>Construction</h3>
                <p>Roofing, wall cladding, pipe racks</p>
              </div>
            </div>
            <div className="coverage-card">
              <span className="coverage-icon" aria-hidden="true">
                <QuickIcon name="wrench" />
              </span>
              <div>
                <h3>Electronics</h3>
                <p>Device casings, server racks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .coverage-section {
          position: relative;
          margin-top: 48px;
          padding: 48px 0;
          color: #ffffff;
          overflow: hidden;
        }

        .coverage-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .coverage-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(9, 14, 18, 0.88) 0%,
            rgba(9, 14, 18, 0.55) 55%,
            rgba(9, 14, 18, 0.25) 100%
          );
        }

        .coverage-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          align-items: start;
          justify-items: start;
        }

        .coverage-text h2 {
          font-size: clamp(26px, 3.5vw, 40px);
          margin: 0 0 16px;
          font-family: "Oswald", sans-serif;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
        }

        .coverage-text p {
          margin: 0 0 16px;
          color: #ffffff;
          line-height: 1.6;
          font-size: 14px;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
        }

        .coverage-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 999px;
          background: #e92227;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
          text-decoration: none;
        }

        .coverage-list {
          display: grid;
          gap: 16px;
          width: 100%;
          max-width: 640px;
          justify-self: end;
        }

        .coverage-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 16px;
          background: #fff;
          color: #040404;
        }

        .coverage-card h3 {
          margin: 0 0 4px;
          font-size: 18px;
          font-weight: 700;
        }

        .coverage-card p {
          margin: 0;
          font-size: 13px;
          color: rgba(0, 0, 0, 0.75);
        }

        .coverage-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #332c2c;
          display: grid;
          place-items: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .coverage-icon :global(svg) {
          width: 22px;
          height: 22px;
        }

        @media (max-width: 992px) {
          .coverage-section {
            width: 100%;
            padding: 40px 0;
          }

          .coverage-content {
            gap: 16px;
          }

          .coverage-list {
            max-width: 100%;
            justify-self: center;
          }
          .coverage-card {
            width: 60%;
          }
        }

        @media (max-width: 640px) {
          .coverage-list {
            justify-self: center;
          }

          .coverage-card {
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}
