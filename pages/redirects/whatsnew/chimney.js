import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DIRECT_LINK = "https://premindustries.net/redirects/whatsnew/chimney";

const detailItems = [
  {
    title: "50+ Years",
    text: "Manufacturing Experience",
  },
  {
    title: "4 Units",
    text: "Strategic Production Facilities",
  },
  {
    title: "₹4,000-6,000 Cr",
    text: "Market Size by 2030",
  },
  {
    title: "5,000+ Units/Month",
    text: "Production Capacity",
  },
];

const heroSlides = [
  {
    image: "/whatsnew/chimneys/1.jpeg",
    leftTag: "Smart Kitchen Chimneys for Next India",
    leftTitle:
      "Manufacturing Excellence Since 1975 | Made in India with Global Standards",
    leftCopy:
      "Built at our facility with controlled quality checks, durable materials, and production-grade exhaust engineering. Powerful suction (1000-1500 m³/hr), baffle filtration, and heat-resistant finishes engineered for Indian cooking.",
    title: "In-House Manufacturing",
    sku: "End-to-end production control",
    copy: "30-40% cost advantage on sheet metal and 45-50% savings on plastic molding.",
  },
  {
    image: "/whatsnew/chimneys/2.jpeg",
    leftTag: "Smart Kitchen Chimneys for Next India",
    leftTitle:
      "Manufacturing Excellence Since 1975 | Made in India with Global Standards",
    leftCopy:
      "Built at our facility with controlled quality checks, durable materials, and production-grade exhaust engineering. Powerful suction (1000-1500 m³/hr), baffle filtration, and heat-resistant finishes engineered for Indian cooking.",
    title: "BIS Certified",
    sku: "ISI Mark compliant | IS 302 (Part 2/Sec 31): 2009",
    copy: "Quality assured product range designed for dealer confidence and long-term consumer trust.",
  },
  {
    image: "/whatsnew/chimneys/3.png",
    leftTag: "Smart Kitchen Chimneys for Next India",
    leftTitle:
      "Manufacturing Excellence Since 1975 | Made in India with Global Standards",
    leftCopy:
      "Built at our facility with controlled quality checks, durable materials, and production-grade exhaust engineering. Powerful suction (1000-1500 m³/hr), baffle filtration, and heat-resistant finishes engineered for Indian cooking.",
    title: "OEM & Private Label Ready",
    sku: "Custom branding | 5,000+ units/month",
    copy: "Scalable manufacturing and strong dealer support network for fast market expansion.",
  },
];

const productFeatures = [
  {
    image: "/whatsnew/chimneys/6.webp",
    title: "In-House Manufacturing",
    text: "End-to-end production control.\n30-40% cost advantage on sheet metal.\n45-50% savings on plastic molding.",
  },
  {
    image: "/whatsnew/chimneys/8.webp",
    title: "BIS Certified",
    text: "ISI Mark compliant.\nIS 302 (Part 2/Sec 31): 2009.\nQuality assured for dealers.",
  },
  {
    image: "/whatsnew/chimneys/9.webp",
    title: "OEM & Private Label Ready",
    text: "Custom branding available.\nScalable production (5,000+ units/month).\nStrong dealer support network.",
  },
  {
    image: "/whatsnew/chimneys/10.jpeg",
    title: "Advanced Technology",
    text: "Auto-clean function.\nMotion & touch controls.\nEnergy-efficient motors.\nHeat-resistant housings.",
  },
];

const manufacturingHighlights = [
  {
    title: "Manufacturing Heritage",
    text: "50 Years of Excellence. Established 1975 | 4 Strategic Production Units | 40-650 Ton Press Capacity.",
  },
  {
    title: "Production Capabilities",
    text: "Industry-Leading Infrastructure. Sheet Metal: 40-650 Tons | Injection Molding: 160-3000 Tons | 75m Assembly Line.",
  },
  {
    title: "Quality Promise",
    text: "Built for Indian Kitchens. Handles heavy tadka & oil | 58-65 dB quiet operation | Baffle filtration | Auto-clean technology.",
  },
];

const chimneyCategories = [
  "Wall-Mounted Chimneys - Popular in standard kitchens",
  "Island Chimneys - For open-plan kitchens with central cooking",
  "Inclined Glass Chimneys - Contemporary look plus performance",
  "Straight-Line Chimneys - Compact, minimalist profiles",
  "Built-in/Integrated - Concealed for seamless kitchens",
];

const revealUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ChimneyProductPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const section = heroSectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const maxScrollableInSection = Math.max(
        sectionHeight - window.innerHeight,
        0,
      );
      const scrollInSection = Math.min(
        Math.max(window.scrollY - sectionTop, 0),
        maxScrollableInSection,
      );
      const progress =
        maxScrollableInSection > 0
          ? scrollInSection / maxScrollableInSection
          : 0;
      // Make early scroll feel more responsive so first slide change happens sooner.
      const adjustedProgress = Math.pow(progress, 0.8);
      const nextIndex = Math.min(
        heroSlides.length - 1,
        Math.floor(adjustedProgress * heroSlides.length),
      );
      setActiveSlide((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Smart Kitchen Chimneys for Next India | Prem Industries</title>
        <meta
          name="description"
          content="Manufacturing excellence since 1975. Built in India with global standards, powerful suction, baffle filtration, and advanced auto-clean chimney technology."
        />
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Smart Kitchen Chimneys for Next India | Prem Industries"
        />
        <meta
          property="og:description"
          content="In-house manufacturing, BIS certification, OEM/private label readiness, and advanced chimney technology for Indian kitchens."
        />
        <meta property="og:url" content={DIRECT_LINK} />
        <link rel="canonical" href={DIRECT_LINK} />
      </Head>

      <section
        className="whatsnew-page"
        ref={heroSectionRef}
        style={{ "--hero-steps": heroSlides.length, "--hero-scroll-factor": 0.45 }}
      >
        <div className="hero-card">
          <p className="label">What&apos;s New</p>

          <h1 className="display-title">Chimneys</h1>
          <video
            className="hero-bg-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/whatsnew/Comp1_1.mp4" type="video/mp4" />
          </video>

          <div className="left-copy-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-copy-${activeSlide}`}
                className="text-swap-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <p className="left-tag">{currentSlide.leftTag}</p>
                <h2>{currentSlide.leftTitle}</h2>
                <p className="left-copy-body">{currentSlide.leftCopy}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="hero-gallery-corners"
            aria-label="Chimney product gallery"
          >
            {[0, 2].map((index) => {
              const slide = heroSlides[index];
              return (
                <button
                  type="button"
                  key={`${slide.image}-${slide.sku}`}
                  className={`gallery-card gallery-corner${index === 0 ? " left" : " right"}${activeSlide === index ? " active" : ""}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={slide.title}
                >
                  <span className="gallery-image-wrap">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={180}
                      height={120}
                      className={`gallery-image gallery-image-${index + 1}`}
                    />
                  </span>
                  <span className="gallery-copy">
                    <span className="gallery-title">{slide.title}</span>
                    <span className="gallery-subtitle">
                      {slide.sku.replace("SKU: ", "")}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="detail-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={`detail-copy-${activeSlide}`}
                className="text-swap-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <h2>{currentSlide.title}</h2>
                <p className="sku">{currentSlide.sku}</p>
                <p className="copy">{currentSlide.copy}</p>
              </motion.div>
            </AnimatePresence>
            <div className="dot-row">
              {heroSlides.map((slide, index) => (
                <span
                  key={slide.image}
                  className={`dot${activeSlide === index ? " active" : ""}`}
                ></span>
              ))}
            </div>
            <a
              href="https://premindustries.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      <section className="details-strip-wrap">
        <div className="details-strip">
          <h3 className="details-heading">Manufacturing Heritage</h3>
          <div className="highlight-grid">
            {manufacturingHighlights.map((item, index) => (
              <article className="highlight-item" key={item.title}>
                <motion.div
                  custom={index}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </motion.div>
              </article>
            ))}
          </div>
          <h3 className="details-heading stats-heading">Key Industry Numbers</h3>
          <div className="details-grid">
            {detailItems.map((item, index) => (
              <article className="detail-tile" key={item.title}>
                <motion.div
                  custom={index}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="detail-title">{item.title}</p>
                  <p className="detail-text">{item.text}</p>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section-wrap">
        <div className="product-section">
          <h3>Why Prem Chimneys</h3>
          <div className="feature-list">
            {productFeatures.map((feature, index) => (
              <article className="feature-item" key={feature.title}>
                <motion.div
                  custom={index}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="feature-item-motion">
                    <div className="feature-visual feature-visual-badge" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="feature-divider">
                      <span></span>
                    </div>
                    <div className="feature-copy">
                      <h4>{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
          <div className="category-list-wrap">
            <h3>5 Categories</h3>
            <ul className="category-list">
              {chimneyCategories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
          <div className="product-cta-row">
            <Link href="/contact" className="primary-btn query-btn">
              Request Quote
            </Link>
            <a
              href="/whatsnew/chimneys/CHIMNEY%20CATALOGUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn query-btn"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");

        :global(header.header-2) {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1200;
        }

        .whatsnew-page {
          --nav-offset: 92px;
          position: relative;
          width: 100%;
          height: calc(
            var(--hero-steps, 3) * (100vh - var(--nav-offset)) *
              var(--hero-scroll-factor, 0.45) +
              var(--nav-offset)
          );
          min-height: 100vh;
          padding-top: var(--nav-offset);
          background: #000000;
        }

        .hero-card {
          position: sticky;
          top: var(--nav-offset);
          width: 100%;
          height: calc(100vh - var(--nav-offset));
          min-height: calc(100vh - var(--nav-offset));
          overflow: hidden;
          border-radius: 0;
          border: none;
          padding: 36px 38px;
          background: #000000;
          box-shadow: 0 24px 70px rgba(15, 20, 32, 0.45);
          perspective: 1400px;
        }

        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.85);
          pointer-events: none;
          z-index: 4;
        }

        .hero-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.24) 0%,
            rgba(255, 255, 255, 0.08) 28%,
            rgba(255, 255, 255, 0) 60%
          );
          filter: blur(8px);
          opacity: 0.9;
          pointer-events: none;
          z-index: 1;
        }

        .hero-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            1200px 520px at 50% 78%,
            rgba(255, 255, 255, 0.22) 0%,
            rgba(255, 255, 255, 0.06) 30%,
            rgba(255, 255, 255, 0) 68%
          );
          filter: blur(22px);
          pointer-events: none;
          z-index: 1;
        }

        .brand {
          position: absolute;
          top: 28px;
          left: 38px;
          color: rgba(245, 248, 253, 0.88);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: lowercase;
          margin: 0;
        }

        .label {
          position: absolute;
          top: 42px;
          right: 40px;
          color: rgba(219, 227, 241, 0.75);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0;
        }

        .display-title {
          position: absolute;
          left: 50%;
          top: clamp(190px, 30vh, 320px);
          margin: 0;
          font-size: clamp(54px, 11vw, 154px);
          line-height: 0.88;
          letter-spacing: -0.02em;
          text-transform: none;
          transform: translateX(-50%);
          text-align: center;
          color: #e8edf7;
          pointer-events: none;
          z-index: 2;
        }

        .left-copy-panel {
          position: absolute;
          left: clamp(16px, 3vw, 44px);
          top: clamp(160px, 28vh, 320px);
          width: min(30vw, 360px);
          z-index: 9;
        }

        .left-tag {
          margin: 0 0 8px;
          color: #8fb4ff;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .left-copy-panel h2 {
          margin: 0 0 10px;
          font-size: clamp(20px, 2.2vw, 30px);
          line-height: 1.2;
          color: #e8eefb;
          text-transform: none;
          min-height: calc(1.2em * 2);
        }

        .left-copy-panel p {
          margin: 0;
          color: #b7c5de;
          font-size: 14px;
          line-height: 1.7;
        }

        .left-copy-body {
          min-height: calc(1.7em * 4);
        }

        .product-render {
          position: absolute;
          left: 51%;
          top: clamp(35%, 30vh, 50%);
          width: clamp(300px, 30vw, 450px);
          aspect-ratio: 612 / 408;
          height: auto;
          transform: translate(-50%, -50%) rotate(-16deg) translateZ(56px);
          z-index: 8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            transform 0.45s ease,
            filter 0.45s ease;
          will-change: transform, filter;
          animation: coolerGlide 3.2s ease-in-out infinite;
        }

        .hero-gallery-corners {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 200px;
          z-index: 11;
          pointer-events: none;
        }

        .gallery-corner {
          position: absolute;
          width: min(360px, 28vw);
          pointer-events: auto;
        }

        .gallery-corner.left {
          left: 36px;
        }

        .gallery-corner.right {
          right: 36px;
        }

        .gallery-card {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
          background: linear-gradient(
            180deg,
            rgba(15, 21, 33, 0.92) 0%,
            rgba(8, 13, 22, 0.95) 100%
          );
          border: 1px solid rgba(159, 177, 209, 0.28);
          border-radius: 6px;
          padding: 8px;
          text-align: left;
          cursor: pointer;
          min-height: 158px;
          transition:
            border-color 0.2s ease,
            transform 0.2s ease,
            filter 0.2s ease,
            background 0.2s ease;
          filter: saturate(0.8) brightness(0.9);
        }

        .gallery-card:hover {
          border-color: rgba(208, 224, 249, 0.6);
          transform: translateY(-2px);
        }

        .gallery-card.active {
          border-color: rgba(149, 222, 255, 0.95);
          background: linear-gradient(
            180deg,
            rgba(28, 39, 60, 0.98) 0%,
            rgba(11, 19, 32, 0.98) 100%
          );
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.32);
          filter: none;
        }

        .gallery-image-wrap {
          width: 100%;
          height: 86px;
          border-radius: 4px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(154, 176, 210, 0.18),
              rgba(45, 58, 80, 0.1) 56%,
              rgba(8, 12, 20, 0.92) 100%
            ),
            linear-gradient(
              180deg,
              rgba(14, 21, 34, 0.92),
              rgba(7, 10, 18, 0.95)
            );
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(157, 176, 207, 0.24);
        }

        .gallery-image {
          width: auto;
          height: 100%;
          max-width: none;
          object-fit: contain;
          display: block;
          transition: transform 0.2s ease;
        }

        .gallery-image-1 {
          transform: scale(2.05) translateY(6%);
        }

        .gallery-image-2 {
          transform: scale(1.38) translateY(5%);
        }

        .gallery-image-3 {
          transform: scale(1.45) translateY(4%);
        }

        .gallery-card.active .gallery-image-1 {
          transform: scale(2.15) translateY(6%);
        }

        .gallery-card.active .gallery-image-2 {
          transform: scale(1.45) translateY(5%);
        }

        .gallery-card.active .gallery-image-3 {
          transform: scale(1.52) translateY(4%);
        }

        .gallery-copy {
          display: block;
          margin-top: 9px;
        }

        .gallery-title {
          color: #dbe5f7;
          font-size: 11px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: block;
        }

        .gallery-subtitle {
          color: rgba(175, 190, 213, 0.8);
          font-size: 9px;
          line-height: 1.25;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: block;
          margin-top: 3px;
        }

        .product-render::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 56%;
          width: 145%;
          height: 78%;
          transform: translate(-50%, -50%);
          background: radial-gradient(
            ellipse at center,
            rgba(116, 160, 255, 0.22) 0%,
            rgba(45, 69, 115, 0.12) 45%,
            rgba(18, 28, 46, 0) 74%
          );
          filter: blur(24px);
          z-index: -1;
          pointer-events: none;
          transition:
            filter 0.45s ease,
            opacity 0.45s ease;
          animation: glowGlide 3.2s ease-in-out infinite;
        }

        .hero-cooler-image {
          position: relative;
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          transform: translateZ(98px);
          filter: drop-shadow(0 18px 28px rgba(2, 8, 18, 0.32))
            drop-shadow(0 52px 86px rgba(2, 8, 18, 0.62))
            drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2));
          animation: coolerFloat 4.8s ease-in-out infinite;
          transition: filter 0.45s ease;
        }

        .cooler-shadow {
          position: absolute;
          left: -35%;
          right: -35%;
          bottom: -14%;
          height: 22%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(4, 9, 20, 0.62) 0%,
            rgba(4, 9, 20, 0.06) 70%
          );
          transform: rotate(16deg);
          filter: blur(10px);
          transition:
            filter 0.45s ease,
            opacity 0.45s ease;
        }

        @keyframes coolerGlide {
          0% {
            transform: translate(-50%, -50%) rotate(-16deg) translateZ(56px);
          }
          50% {
            transform: translate(-49%, -52%) rotate(-14deg) translateZ(74px)
              scale(1.02);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-16deg) translateZ(56px);
          }
        }

        @keyframes glowGlide {
          0% {
            filter: blur(24px);
            opacity: 0.78;
          }
          50% {
            filter: blur(30px);
            opacity: 0.96;
          }
          100% {
            filter: blur(24px);
            opacity: 0.78;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-render,
          .product-render::before,
          .hero-cooler-image,
          .cooler-shadow {
            transition: none;
          }

          .text-swap-block {
            animation: none;
          }
        }

        @keyframes coolerFloat {
          0% {
            transform: translateY(0) translateZ(82px);
          }
          50% {
            transform: translateY(-10px) translateZ(94px);
          }
          100% {
            transform: translateY(0) translateZ(82px);
          }
        }

        .detail-panel {
          position: absolute;
          right: clamp(14px, 2.5vw, 42px);
          top: clamp(150px, 22vh, 220px);
          width: min(32vw, 360px);
          max-width: 360px;
          text-align: center;
          z-index: 10;
        }

        .detail-panel h2 {
          margin: 0 0 8px;
          color: #e9eef9;
          font-size: 17px;
          line-height: 1.4;
          text-transform: none;
          min-height: calc(1.4em * 2);
        }

        .sku {
          margin: 0 0 14px;
          color: #9eb0cc;
          font-size: 12px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .copy {
          margin: 0;
          color: #a8b6cc;
          line-height: 1.7;
          font-size: 14px;
          min-height: calc(1.7em * 4);
        }

        .text-swap-block {
          animation: textSwapIn 280ms ease both;
          will-change: opacity, transform;
        }

        @keyframes textSwapIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dot-row {
          display: flex;
          gap: 8px;
          margin-top: 20px;
          margin-bottom: 20px;
          justify-content: center;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(213, 222, 238, 0.28);
        }

        .dot.active {
          background: #ffffff;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 126px;
          height: 38px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
          color: #102036;
          background: #ffffff;
        }

        .details-strip-wrap,
        .product-section-wrap {
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0;
          background: #000000;
        }

        .details-strip-wrap {
          padding-top: 0;
          padding-bottom: 26px;
        }

        .product-section-wrap {
          padding-bottom: 70px;
        }

        .details-strip,
        .product-section {
          width: 100%;
          border-radius: 0;
          background: linear-gradient(180deg, #0c111c 0%, #000000 100%);
          border: none;
          border-top: none;
          padding: 28px 36px 32px;
        }

        .details-strip h3,
        .product-section h3 {
          margin: 0 0 18px;
          text-align: center;
          font-size: 22px;
          color: #edf1fa;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .details-heading {
          font-family: "Poppins", sans-serif;
          font-weight: 600;
        }

        .stats-heading {
          margin-top: 24px !important;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 6px;
        }

        .highlight-item {
          border: 1px solid rgba(154, 173, 201, 0.24);
          border-radius: 14px;
          padding: 16px;
          background: rgba(16, 24, 39, 0.68);
        }

        .highlight-item h4 {
          margin: 0 0 8px;
          color: #ecf2ff;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .highlight-item p {
          margin: 0;
          color: #aebfd9;
          font-size: 13px;
          line-height: 1.6;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .detail-tile {
          text-align: center;
          border-radius: 14px;
          border: 1px solid rgba(168, 183, 207, 0.18);
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(199, 211, 230, 0.22),
              rgba(99, 113, 138, 0.1) 48%,
              rgba(15, 21, 33, 0.9) 75%
            ),
            linear-gradient(140deg, #212b3d 0%, #151d2b 100%);
          padding: 20px 14px 16px;
          min-height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .detail-title {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #d9e4f8;
        }

        .detail-text {
          margin: 6px 0 0;
          color: #9fb0cb;
          font-size: 12px;
          text-transform: none;
          letter-spacing: 0;
        }

        .dot-row.center {
          margin-top: 18px;
          justify-content: center;
        }

        .product-section {
          border-radius: 0;
          padding-top: 40px;
          padding-bottom: 34px;
        }

        .feature-list {
          position: relative;
          margin: 6px auto 0;
          width: min(760px, 100%);
          max-width: 760px;
          transform: translateX(56px);
        }

        .feature-list::before {
          display: none;
        }

        .feature-item {
          margin: 0 auto 18px;
          width: 100%;
          max-width: none;
        }

        .feature-item-motion {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          align-items: center;
          gap: 28px;
          min-height: 142px;
          width: 100%;
        }

        .feature-visual {
          width: 168px;
          height: 168px;
          border-radius: 18px;
          background: linear-gradient(140deg, #243148 0%, #1a2436 100%);
          box-shadow: 0 16px 26px rgba(0, 0, 0, 0.35);
          justify-self: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(143, 160, 186, 0.35);
          justify-self: start;
          margin-right: 0;
        }

        .feature-visual-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at 35% 30%,
              rgba(138, 194, 255, 0.26),
              rgba(23, 36, 56, 0.95) 70%
            ),
            linear-gradient(140deg, #22314a 0%, #131d2e 100%);
          border-color: rgba(115, 168, 220, 0.45);
        }

        .feature-visual-badge span {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #d7e8ff;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 2px;
        }

        .feature-divider {
          display: none;
        }

        .feature-divider span {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 2px solid #6ad8f3;
          background: #0f1724;
          box-shadow: 0 0 0 4px rgba(87, 206, 237, 0.14);
          position: relative;
          z-index: 2;
        }

        .feature-copy {
          justify-self: start;
          margin-left: 0;
        }

        .feature-copy h4 {
          margin: 0 0 8px;
          color: #e9effb;
          font-size: 19px;
          text-transform: none;
        }

        .feature-copy p {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: #9db0cf;
          max-width: 480px;
          white-space: pre-line;
        }

        .category-list-wrap {
          margin-top: 12px;
          border-top: 1px solid rgba(130, 154, 189, 0.24);
          padding-top: 18px;
          max-width: 980px;
          margin-left: auto;
          margin-right: auto;
        }

        .category-list {
          margin: 0 auto;
          width: fit-content;
          max-width: min(100%, 860px);
          color: #b8c7de;
          font-size: 14px;
          line-height: 1.8;
          padding-left: 20px;
          text-align: left;
        }

        .product-cta-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 14px;
        }

        .query-btn {
          background: #ffffff;
          color: #0f1d33;
        }

        .product-cta-row :global(a.query-btn),
        .product-cta-row :global(a.query-btn:hover),
        .product-cta-row :global(a.query-btn:focus),
        .product-cta-row :global(a.query-btn:visited) {
          background: #ffffff !important;
          color: #0f1d33 !important;
          border: 1px solid #ffffff !important;
          min-width: 196px !important;
          height: 50px !important;
          padding: 0 24px !important;
          border-radius: 999px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          letter-spacing: 0.02em !important;
          text-transform: none !important;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25) !important;
          text-decoration: none !important;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background-color 0.2s ease !important;
        }

        .product-cta-row :global(a.query-btn:hover),
        .product-cta-row :global(a.query-btn:focus-visible) {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(0, 0, 0, 0.32) !important;
          background: #f6fbff !important;
        }

        .footer-row {
          position: absolute;
          left: 38px;
          bottom: 34px;
          right: 38px;
          z-index: 5;
        }

        .direct-link-box {
          border-top: 1px solid rgba(184, 200, 223, 0.25);
          padding-top: 12px;
        }

        .direct-label {
          margin: 0 0 4px;
          font-size: 10px;
          color: rgba(213, 224, 241, 0.74);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .direct-link-box a {
          color: #d8e2f4;
          font-size: 12px;
          line-height: 1.5;
          word-break: break-all;
          font-weight: 500;
        }

        @media (max-width: 980px) {
          .whatsnew-page {
            --nav-offset: 84px;
            height: calc(
              var(--hero-steps, 3) * (100vh - var(--nav-offset)) *
                var(--hero-scroll-factor, 0.45) +
                var(--nav-offset)
            );
            min-height: 100vh;
          }

          .hero-card {
            height: calc(100vh - var(--nav-offset));
            min-height: calc(100vh - var(--nav-offset));
            padding: 24px 22px;
          }

          .brand {
            left: 24px;
          }

          .label {
            right: 24px;
          }

          .display-title {
            left: 50%;
            top: 180px;
            font-size: clamp(60px, 17vw, 118px);
            transform: translateX(-50%);
          }

          .product-render {
            left: 50%;
            top: 42%;
            transform: translate(-50%, -50%) rotate(-10deg) translateZ(42px);
            width: min(64vw, 300px);
          }

          .detail-panel {
            left: 24px;
            right: 24px;
            top: auto;
            bottom: 126px;
            width: auto;
            max-width: none;
          }

          .left-copy-panel {
            left: 24px;
            right: 24px;
            width: auto;
            top: 170px;
            text-align: center;
          }

          .hero-gallery-corners {
            bottom: 64px;
          }

          .gallery-corner {
            width: min(320px, 40vw);
          }

          .gallery-corner.left {
            left: 16px;
          }

          .gallery-corner.right {
            right: 16px;
          }

          .gallery-card {
            min-height: 142px;
            padding: 7px;
          }

          .gallery-image-wrap {
            height: 76px;
          }

          .gallery-title {
            font-size: 10px;
          }

          .gallery-subtitle {
            font-size: 8px;
          }

          .footer-row {
            left: 24px;
            right: 24px;
            bottom: 24px;
          }

          .details-strip,
          .product-section {
            border-radius: 0;
            padding-left: 20px;
            padding-right: 20px;
          }

          .details-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .highlight-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .feature-item {
            width: 100%;
            max-width: none;
          }

          .feature-list {
            transform: none;
          }

          .feature-item-motion {
            grid-template-columns: 140px minmax(0, 1fr);
            min-height: 128px;
          }

          .feature-visual {
            width: 124px;
            height: 124px;
            margin-right: 46px;
          }

          .feature-copy {
            margin-left: 46px;
          }

          .feature-copy h4 {
            font-size: 16px;
          }

          .feature-copy p {
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .whatsnew-page {
            --nav-offset: 78px;
            height: calc(
              var(--hero-steps, 3) * (100vh - var(--nav-offset)) *
                var(--hero-scroll-factor, 0.45) +
                var(--nav-offset)
            );
            min-height: 100vh;
          }

          .hero-card {
            height: calc(100vh - var(--nav-offset));
            min-height: calc(100vh - var(--nav-offset));
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .hero-bg-video {
            left: 0;
            right: 0;
            transform: scaleX(1.85);
            transform-origin: center;
            object-fit: fill;
            object-position: center;
            opacity: 0.9;
          }

          .label {
            display: none;
          }

          .display-title {
            display: none;
          }

          .left-copy-panel {
            display: block;
            position: absolute;
            top: auto;
            bottom: 18px;
            left: 14px;
            right: 14px;
            width: auto;
            max-width: none;
            text-align: left;
            z-index: 30;
          }

          .left-tag {
            margin-bottom: 6px;
            font-size: 10px;
            letter-spacing: 0.08em;
          }

          .left-copy-panel h2 {
            margin-bottom: 8px;
            font-size: clamp(42px, 11vw, 56px);
            line-height: 1.02;
            min-height: 0;
          }

          .left-copy-panel p {
            font-size: 12px;
            line-height: 1.55;
            max-width: 95%;
          }

          .product-render {
            position: static;
            left: auto;
            top: auto;
            width: min(76vw, 290px);
            transform: rotate(-10deg) translateZ(30px);
            margin: 2px auto;
          }

          .detail-panel {
            position: static;
            width: 100%;
            max-width: 520px;
            text-align: center;
            margin-top: 4px;
          }

          .detail-panel h2,
          .detail-panel .sku,
          .detail-panel .copy,
          .detail-panel .primary-btn,
          .detail-panel .dot-row {
            display: none;
          }

          .left-copy-panel h2,
          .left-copy-body,
          .detail-panel h2,
          .copy {
            min-height: 0;
          }

          .hero-gallery-corners {
            display: none;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }

          .feature-list::before {
            display: none;
          }

          .feature-item {
            padding: 12px 10px;
            margin-bottom: 12px;
            border: 1px solid rgba(147, 168, 198, 0.2);
            border-radius: 14px;
            background: rgba(23, 32, 46, 0.55);
          }

          .feature-item-motion {
            grid-template-columns: 110px minmax(0, 1fr);
            gap: 14px;
          }

          .feature-divider {
            display: none;
          }

          .feature-visual {
            width: 96px;
            height: 96px;
            justify-self: start;
            margin-right: 0;
          }

          .feature-copy {
            margin-left: 0;
          }

          .category-list {
            font-size: 13px;
            line-height: 1.7;
          }
        }

        @media (max-width: 540px) {
          .whatsnew-page {
            --nav-offset: 78px;
            height: calc(
              var(--hero-steps, 3) * (100vh - var(--nav-offset)) *
                var(--hero-scroll-factor, 0.45) +
                var(--nav-offset)
            );
            min-height: 100vh;
            padding-top: var(--nav-offset);
          }

          .hero-card {
            border-radius: 0;
            height: calc(100vh - var(--nav-offset));
            min-height: calc(100vh - var(--nav-offset));
            padding: 0;
          }

          .label {
            font-size: 10px;
          }

          .display-title {
            width: 100%;
            font-size: clamp(44px, 17vw, 74px);
          }

          .hero-bg-video {
            width: 100%;
            transform: scaleX(2);
          }

          .detail-panel h2 {
            font-size: 16px;
          }

          .detail-panel {
            margin-top: 2px;
          }

          .left-copy-panel {
            max-width: 100%;
          }

          .left-copy-panel h2 {
            font-size: 20px;
          }

          .left-copy-panel p {
            font-size: 13px;
            line-height: 1.6;
          }

          .product-render {
            width: min(74vw, 240px);
          }

          .hero-gallery-corners {
            display: none;
          }

          .gallery-card {
            border-radius: 10px;
            padding: 8px;
          }

          .gallery-image-wrap {
            height: 70px;
          }

          .gallery-title {
            font-size: 10px;
          }

          .gallery-subtitle {
            font-size: 8px;
          }

          .copy {
            font-size: 13px;
          }

          .details-strip h3,
          .product-section h3 {
            font-size: 18px;
          }

          .highlight-item {
            padding: 12px;
          }

          .feature-list::before {
            display: none;
          }

          .feature-item {
            padding: 12px 8px;
            margin-bottom: 12px;
            border: 1px solid rgba(147, 168, 198, 0.2);
            border-radius: 14px;
            background: rgba(23, 32, 46, 0.55);
          }

          .feature-item-motion {
            grid-template-columns: 84px minmax(0, 1fr);
            gap: 12px;
          }

          .feature-divider {
            display: none;
          }

          .feature-visual {
            width: 76px;
            height: 76px;
            justify-self: start;
          }

          .feature-copy p {
            max-width: none;
          }

          .category-list {
            font-size: 12px;
            line-height: 1.65;
          }
        }
      `}</style>
    </>
  );
}
