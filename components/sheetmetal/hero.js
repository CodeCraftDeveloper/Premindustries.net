"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const featureCards = [
  {
    title: "Precision Sheet Metal Engineering",
    text: "Prem Industries India Limited delivers high-precision sheet metal manufacturing backed by advanced engineering expertise and a robust production infrastructure.",
    image: "/sheetmetal/press-new.jpg",
  },
  {
    title: "Advanced Machinery & Infrastructure",
    text: "Our sheet metal manufacturing facility is equipped with modern machinery, 100% power backup, and automated processes to serve automotive, industrial, and appliance industries efficiently.",
    image: "/sheetmetal/weld.jpg",
  },
  {
    title: "Global Quality & Manufacturing Standards",
    text: "We design, fabricate, and assemble high-quality sheet metal components in strict compliance with international quality standards, ensuring durability, accuracy, and consistency.",
    image: "/sheetmetal/tool.jpg",
  },
];

const quickPills = [
  {
    title: "Manufacturing",
    subtitle: "Speed, flexibility",
    icon: "factory",
  },
  {
    title: "Construction",
    subtitle: "Heavy performance",
    icon: "building",
  },
  {
    title: "Engineering",
    subtitle: "Complex builds",
    icon: "wrench",
  },
  {
    title: "Energy",
    subtitle: "Efficient & clean",
    icon: "leaf",
  },
];

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

const applicationCards = [
  {
    title: "Automotive Manufacturing",
    text: "Precision sheet metal components engineered for automotive applications, meeting high standards of safety, strength, and dimensional accuracy.",
    image: "/sheetmetal/infrastructure/1.jpg",
  },
  {
    title: "Industrial Applications",
    text: "Robust sheet metal solutions for industrial equipment, machinery, and heavy-duty applications with consistent quality and performance.",
    image: "/sheetmetal/infrastructure/2.jpg",
  },
  {
    title: "Consumer Appliance Components",
    text: "High-quality sheet metal parts for home appliances such as air conditioners, coolers, televisions, and refrigerators.",
    image: "/sheetmetal/infrastructure/3.jpg",
  },
  {
    title: "Press Shop Operations",
    text: "Comprehensive press shop capabilities including blanking, punching, bending, forming, and deep drawing for complex sheet metal components.",
    image: "/sheetmetal/infrastructure/5.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroTwo() {
  return (
    <motion.section
      className="sheetmetal-landing"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">
              Precision Sheet Metal Manufacturing in India
            </span>
            <h1>
              Engineering Strength.
              <br />
              Delivering Reliability.
            </h1>

            <p className="hero-lead">
              At Prem Industries India Limited, our Sheet Metal and Components
              Division is a testament to precision engineering and robust
              infrastructure.
            </p>
            <p className="hero-sublead">
              First of its kind setup in north India with integrated processing
              from steel coil to component, this facility reflects our
              commitment to end-to-end manufacturing excellence.
            </p>
            <Link href="/contact" className="hero-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="container feature-grid">
        {featureCards.map((card, index) => (
          <div
            className="feature-card"
            style={{ "--delay": `${index * 90}ms` }}
            key={card.title}
          >
            <div className="feature-media">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      <div className="container quick-row">
        <div className="quick-strip">
          {quickPills.map((item) => (
            <div className="quick-pill" key={item.title}>
              <span className="quick-dot" aria-hidden="true">
                <QuickIcon name={item.icon} />
              </span>
              <div className="quick-text">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container applications">
        <div className="applications-header">
          <h2>Sheet Metal &amp; Components</h2>
          <p>
            With a strong focus on efficiency, innovation, and scalability, Prem
            Industries India Limited continues to deliver reliable,
            cost-effective solutions across diverse industries.
          </p>
        </div>

        <div className="applications-carousel">
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={18}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 14 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 18 },
              1280: { slidesPerView: 4, spaceBetween: 18 },
            }}
          >
            {applicationCards.map((card) => (
              <SwiperSlide key={card.title}>
                <div className="application-card">
                  <div className="application-media">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 25vw"
                    />
                  </div>
                  <div className="application-body">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .sheetmetal-landing {
          --sm-ink: #0b1b2b;
          --sm-ink-soft: rgba(11, 27, 43, 0.72);
          --sm-accent: #e92227;
          --sm-accent-dark: #b31216;
          --sm-cream: #f6f8fc;
          --sm-card: #ffffff;
          --sm-sky: #d9e8fb;
          position: relative;
          padding-bottom: 80px;
          background: linear-gradient(
            180deg,
            rgba(217, 232, 251, 0.9) 0%,
            rgba(243, 248, 255, 0.95) 45%,
            #ffffff 100%
          );
          overflow: hidden;
        }

        .hero {
          position: relative;
          border-radius: 0 0 26px 26px;
          min-height: 520px;
          margin: 0 auto;
          width: 100%;
          overflow: hidden;
        }

        .hero-media {
          position: absolute;
          inset: 0;
          background-image: url("/sheetmetal/best.jpg");
          background-size: cover;
          background-position: center;
          filter: saturate(1.05);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(8, 16, 24, 0.85) 0%,
            rgba(8, 16, 24, 0.45) 55%,
            rgba(8, 16, 24, 0.2) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 88px 36px 100px;
        }

        .hero-text {
          max-width: 920px;
          color: #f8fbff;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-family: "Exo 2", sans-serif;
        }
        .hero-eyebrow {
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 600;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
        }

        .hero-text h1 {
          font-size: clamp(34px, 4.2vw, 58px);
          font-family: "Oswald", sans-serif;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.05;
          color: #ffffff;
          text-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
        }

        .hero-lead {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
          text-shadow: 0 4px 14px rgba(0, 0, 0, 0.45);
        }

        .hero-sublead {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .hero-cta {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 26px;
          border-radius: 999px;
          background: var(--sm-accent);
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 12px 24px rgba(233, 34, 39, 0.35);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
          width: fit-content;
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 30px rgba(233, 34, 39, 0.45);
        }

        .feature-grid {
          margin-top: -70px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
          position: relative;
          z-index: 3;
        }

        .feature-card {
          background: var(--sm-card);
          border-radius: 16px;
          padding: 0 0 18px;
          box-shadow: 0 16px 35px rgba(14, 24, 36, 0.18);
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0;
          transform: translateY(14px);
          animation: rise 0.6s ease forwards;
          animation-delay: var(--delay, 0ms);
        }

        .feature-media {
          position: relative;
          width: 100%;
          aspect-ratio: 2.35 /1;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
        }

        .feature-media :global(img) {
          object-fit: cover;
          object-position: center;
        }

        .feature-card h3 {
          font-size: 16px;
          margin: 0;
          color: var(--sm-ink);
          font-weight: 700;
          font-family: "Exo 2", sans-serif;
          padding: 0 20px;
        }

        .feature-card p {
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          color: var(--sm-ink-soft);
          padding: 0 20px;
        }

        .quick-row {
          margin-top: 24px;
        }

        .quick-strip {
          background: #ffffff;
          border-radius: 20px;
          padding: 14px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 8px;
          box-shadow: 0 16px 30px rgba(14, 24, 36, 0.12);
        }

        .quick-pill {
          border-radius: 16px;
          padding: 12px 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sm-ink);
          transition: transform 0.2s ease;
        }

        .quick-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(11, 60, 160, 0.08);
          color: #ffffff;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border: 1px solid rgba(11, 60, 160, 0.15);
        }

        .quick-dot :global(svg) {
          width: 22px;
          height: 22px;
        }

        .quick-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .quick-text strong {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.1;
        }

        .quick-text span {
          font-size: 12px;
          color: var(--sm-ink-soft);
          line-height: 1.2;
        }

        .applications {
          margin-top: 48px;
        }

        .applications-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 28px;
        }

        .applications-header h2 {
          font-size: clamp(22px, 3vw, 34px);
          margin: 0 0 12px;
          color: var(--sm-ink);
          font-family: "Oswald", sans-serif;
          text-transform: uppercase;
        }

        .applications-header p {
          margin: 0;
          color: var(--sm-ink-soft);
          font-size: 14px;
          line-height: 1.6;
        }

        .applications-carousel {
          position: relative;
          overflow-x: hidden;
          overflow-y: visible;
          padding: 12px 6px 24px;
        }

        .applications-carousel :global(.swiper) {
          padding-bottom: 8px;
          padding-top: 8px;
          overflow: visible;
        }

        .applications-carousel :global(.swiper-wrapper) {
          align-items: stretch;
        }

        .applications-carousel :global(.swiper-slide) {
          height: auto;
          display: flex;
          padding: 6px;
        }

        .applications-carousel :global(.swiper-button-next),
        .applications-carousel :global(.swiper-button-prev) {
          color: var(--sm-ink);
          background: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 12px 24px rgba(14, 24, 36, 0.12);
        }

        .applications-carousel :global(.swiper-button-next::after),
        .applications-carousel :global(.swiper-button-prev::after) {
          font-size: 16px;
          font-weight: 700;
        }

        .application-card {
          background: var(--sm-card);
          border-radius: 16px;
          box-shadow:
            0 14px 28px rgba(14, 24, 36, 0.12),
            0 2px 6px rgba(14, 24, 36, 0.08);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
        }

        .application-media {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .application-media :global(img) {
          object-fit: cover;
          object-position: center;
        }

        .application-body {
          padding: 16px 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .application-body h3 {
          margin: 0;
          font-size: 16px;
          color: var(--sm-ink);
          font-family: "Exo 2", sans-serif;
          font-weight: 700;
        }

        .application-body p {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          color: var(--sm-ink-soft);
        }

        .coverage-section {
          position: relative;
          margin-top: 56px;
          padding: 64px 0;
          background-image: url("/sheetmetal/press-new.jpg");
          background-size: cover;
          background-position: center;
          color: #ffffff;
          overflow: hidden;
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
          gap: 24px;
          align-items: center;
        }

        .coverage-text h2 {
          font-size: clamp(26px, 3.5vw, 40px);
          margin: 0 0 16px;
          font-family: "Oswald", sans-serif;
          text-transform: uppercase;
        }

        .coverage-text p {
          margin: 0 0 16px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          font-size: 14px;
        }

        .coverage-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 999px;
          background: #ffffff;
          color: #0b1b2b;
          font-weight: 700;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
        }

        .coverage-list {
          display: grid;
          gap: 16px;
        }

        .coverage-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
        }

        .coverage-card h3 {
          margin: 0 0 4px;
          font-size: 18px;
          font-weight: 700;
        }

        .coverage-card p {
          margin: 0;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.75);
        }

        .coverage-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: grid;
          place-items: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .coverage-icon :global(svg) {
          width: 22px;
          height: 22px;
        }

        @keyframes rise {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-card {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        @media (max-width: 768px) {
          .hero {
            border-radius: 20px;
          }

          .hero-content {
            padding: 64px 22px 80px;
          }

          .feature-grid {
            margin-top: -40px;
          }

          .quick-strip {
            justify-items: stretch;
            text-align: left;
          }

          .quick-pill {
            justify-content: flex-start;
          }

          .quick-text {
            align-items: flex-start;
          }
        }
      `}</style>
    </motion.section>
  );
}
