import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CertificationsSection from "../../../components/injectionmolding/certifications";
const DIRECT_LINK = "https://premindustries.net/redirects/whatsnew/coolers";

const heroCards = [
  {
    id: "01",
    title: "Complete Cooler Component Manufacturing",
    text: "In-house end-to-end production",
    rightTitle: "Complete Cooler Component Manufacturing",
    rightSub: "Under One Roof",
    rightCopy:
      "We manufacture cooler bodies, front grills, louvers, water tank housings, blower and fan assemblies, motor mounts, structural frames, plastic ducts, and assembly-ready sub-components.",
  },
  {
    id: "02",
    title: "Advanced Injection Molding Infrastructure",
    text: "160 to 3000 ton capacity",
    rightTitle: "Advanced Injection Molding Infrastructure",
    rightSub: "160 To 3000 Ton Capacity",
    rightCopy:
      "Our wide tonnage range supports both large cooler cabinets and high-precision functional parts with consistent dimensional control and repeatable production quality.",
  },
  {
    id: "03",
    title: "Quality Traceability and Certifications",
    text: "Documentation-driven production assurance",
    rightTitle: "Quality Traceability and Certifications",
    rightSub: "Documentation-Driven Assurance",
    rightCopy:
      "Structured documentation, process records, inspection logs, and batch tracking systems ensure transparent quality control and long-term production accountability.",
  },
];

const componentScopeTop = [
  "Cooler Bodies and Outer Cabinets",
  "Front Grills and Louvers",
  "Water Tank Housings",
  "Blower and Fan Assemblies",
];

const componentScopeBottom = [
  "Cooler Bodies and Outer Cabinets",
  "Front Grills and Louvers",
  "Water Tank Housings",
  "Blower and Fan Assemblies",
  "Motor Mounts and Structural Frames",
  "Plastic Ducts and Internal Functional Parts",
  "Assembly-ready sub-components",
];

const infraFeatures = [
  {
    image: "/whatsnew/coolers/cooler4.jpeg",
    title: "Tower cooler",
  },
  {
    image: "/whatsnew/coolers/cooler2.jpeg",
    title: "Desert cooler",
  },
  {
    image: "/whatsnew/coolers/cooler3.jpeg",
    title: "Room cooler",
  },
];

const tonnageItems = [
  "250 TON",
  "360 TON",
  "450 TON",
  "600 TON",
  "850 TON",
  "1000 TON",
  "1400 TON",
  "1800 TON",
  "3000 TON",
];

export default function CoolersProductPage() {
  const [activeHeroCard, setActiveHeroCard] = useState(1);
  const selectedHeroCard = heroCards[activeHeroCard];
  return (
    <>
      <Head>
        <title>Coolers | Prem Industries</title>
        <meta
          name="description"
          content="Precision injection molded cooler components built for scale, with advanced tonnage infrastructure and quality traceability."
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Coolers | Prem Industries" />
        <meta
          property="og:description"
          content="Complete cooler component manufacturing under one roof with advanced injection molding infrastructure."
        />
        <meta property="og:url" content={DIRECT_LINK} />
        <link rel="canonical" href={DIRECT_LINK} />
      </Head>

      <section className="coolers-page">
        <div className="hero">
          <p className="hero-label">What&apos;s New</p>
          <h1>Coolers</h1>

          <div className="hero-left">
            <p className="hero-kicker">
              Precision Injection Moulded Cooler Components - Built for Scale
            </p>
            <h2>Engineered for Performance</h2>
            <p>
              Prem Industries India Limited has unlocked a new level of
              innovation with advanced injection molding capabilities from 160
              Tons to 3000 Tons, enabling high-performance coolers and complete
              cooler components with unmatched precision and consistency.
            </p>
          </div>

          <div className="hero-image-wrap" aria-hidden="true">
            <Image
              src="/whatsnew/1.png"
              alt="Cooler component"
              fill
              className="hero-image"
              sizes="(max-width: 768px) 220px, 280px"
              priority
            />
          </div>

          <div className="hero-right">
            <h3>{selectedHeroCard.rightTitle}</h3>
            <p className="hero-right-sub">{selectedHeroCard.rightSub}</p>
            <p>{selectedHeroCard.rightCopy}</p>
            <Link href="/contact" className="pill-btn">
              Ask For Quote
            </Link>
          </div>

          <div className="hero-cards">
            {heroCards.map((card, index) => (
              <button
                type="button"
                key={card.id}
                className={`hero-card${index === activeHeroCard ? " active" : ""}`}
                onClick={() => setActiveHeroCard(index)}
                aria-pressed={index === activeHeroCard}
              >
                <span className="hero-card-id">{card.id}</span>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </button>
            ))}
          </div>
        </div>

        <section className="surface-section">
          <h2>Complete Cooler Component Manufacturing Under One Roof</h2>
          <div className="chips-row">
            {componentScopeTop.map((item) => (
              <div key={item} className="chip">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2 className="infra-title">
            Advanced Injection Molding Infrastructure
          </h2>
          <div className="feature-list">
            {infraFeatures.map((feature) => (
              <article className="feature-item" key={feature.title}>
                <div className="feature-image-wrap">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="feature-image"
                    sizes="(max-width: 900px) 90vw, 360px"
                  />
                </div>
              </article>
            ))}
          </div>

          <h2 className="mt scope-title">Complete Component Scope</h2>
          <p className="subtext scope-subtext">
            With dedicated in-house assembly lines, we support seamless
            integration from molded part to finished product.
          </p>
          <div className="scope-grid">
            {componentScopeBottom.map((item) => (
              <div key={item} className="scope-chip">
                {item}
              </div>
            ))}
          </div>

          <h2 className="mt">Injection Molding Machine Infrastructure</h2>
          <p className="subtext">
            This wide tonnage range enables both large cooler cabinets and
            precision functional components with equal efficiency.
          </p>
          <div className="tonnage-grid">
            {tonnageItems.map((item) => (
              <div key={item} className="tonnage-item">
                {item}
              </div>
            ))}
          </div>

          <p className="subtext subtext-bottom">
            Conformal cooling technology enables up to 25% cycle-time reduction
            while preserving dimensional accuracy and surface finish.
          </p>
        </section>

        <CertificationsSection bgColor="#0c1424" />
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

        .coolers-page {
          --nav-offset: 92px;
          background:
            radial-gradient(
              circle at center,
              rgba(52, 74, 106, 0.8) 0%,
              rgba(12, 20, 36, 1) 70%
            ),
            #0c1424;
          color: #e7efff;
          font-family: "Poppins", sans-serif;
          overflow-x: clip;
        }

        .coolers-page :global(*) {
          font-family: "Poppins", sans-serif !important;
        }

        .hero {
          position: relative;
          padding: 46px 36px 20px;
          height: calc(100vh - var(--nav-offset));
          min-height: calc(100vh - var(--nav-offset));
          background:
            radial-gradient(
              circle at center,
              rgba(52, 74, 106, 0.8) 0%,
              rgba(12, 20, 36, 1) 70%
            ),
            #0c1424;
          overflow: hidden;
        }

        .hero-label {
          position: absolute;
          top: 36px;
          right: 38px;
          margin: 0;
          color: rgba(218, 230, 252, 0.8);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: inherit;
        }

        .hero h1 {
          position: absolute;
          top: 36%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          margin: 0;
          text-align: center;
          font-size: clamp(72px, 13vw, 136px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          font-family: inherit;
          color: rgba(231, 240, 255, 0.96);
          text-transform: none;
          text-wrap: balance;
        }

        .hero-left {
          position: absolute;
          left: 36px;
          top: 160px;
          width: min(320px, 32vw);
          z-index: 4;
        }

        .hero-kicker {
          margin: 0 0 12px;
          font-size: 13px;
          line-height: 1.5;
          color: #c7d8fa;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-family: inherit;
        }

        .hero-left h2 {
          margin: 0;
          font-size: 50px;
          line-height: 1.02;
          letter-spacing: 0.01em;
          font-family: inherit;
          text-transform: none;
          color: #f1f6ff;
          text-wrap: balance;
        }

        .hero-left p:last-child {
          margin: 14px 0 0;
          font-size: 13px;
          line-height: 1.8;
          color: #b7c9e8;
          font-family: inherit;
        }

        .hero-image-wrap {
          position: absolute;
          left: 50%;
          top: 108px;
          width: 260px;
          height: 430px;
          transform: translateX(-50%) rotate(-14deg);
          z-index: 3;
          filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.48));
          transition:
            transform 0.45s ease,
            filter 0.45s ease;
          animation: coolerGlide 1.8s ease-in-out infinite;
        }

        .hero-image {
          object-fit: contain;
          transition: transform 0.45s ease;
          animation: coolerFloat 1.8s ease-in-out infinite;
        }

        @keyframes coolerGlide {
          0% {
            transform: translateX(-50%) rotate(-14deg) translateY(0);
          }
          50% {
            transform: translateX(-50%) rotate(-13deg) translateY(-10px);
          }
          100% {
            transform: translateX(-50%) rotate(-14deg) translateY(0);
          }
        }

        @keyframes coolerFloat {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .hero-right {
          position: absolute;
          right: 42px;
          top: 174px;
          width: min(320px, 32vw);
          text-align: center;
          z-index: 4;
        }

        .hero-right h3 {
          margin: 0;
          font-size: 27px;
          line-height: 1.12;
          color: #eff4ff;
          font-family: inherit;
          text-transform: none;
          text-wrap: balance;
        }

        .hero-right-sub {
          margin: 6px 0 12px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8c9e8;
          font-family: inherit;
        }

        .hero-right p {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: #b5c8e7;
          font-family: inherit;
        }

        .pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          min-width: 190px;
          min-height: 42px;
          padding: 0 20px;
          border-radius: 999px;
          background: #ffffff;
          color: #142033;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.1;
          text-transform: none;
          letter-spacing: 0;
          font-family: inherit;
          border: 1px solid #ffffff;
          box-shadow: 0 8px 16px rgba(4, 10, 20, 0.22);
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background-color 0.2s ease;
        }

        :global(a.pill-btn),
        :global(a.pill-btn:hover),
        :global(a.pill-btn:focus),
        :global(a.pill-btn:visited) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 999px !important;
          min-height: 42px !important;
          padding: 0 20px !important;
          border: 1px solid #ffffff !important;
          background: #ffffff !important;
          color: #142033 !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          line-height: 1.1 !important;
          letter-spacing: 0 !important;
          text-transform: none !important;
          text-decoration: none !important;
          white-space: nowrap !important;
          box-shadow: 0 8px 16px rgba(4, 10, 20, 0.22) !important;
        }

        :global(a.pill-btn:hover),
        :global(a.pill-btn:focus-visible) {
          background: #f3f5f9 !important;
          border-color: #f3f5f9 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 12px 20px rgba(4, 10, 20, 0.28) !important;
        }

        .hero-cards {
          position: absolute;
          left: 50%;
          bottom: 12px;
          transform: translateX(-50%);
          width: min(980px, calc(100% - 72px));
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .hero-card {
          width: 100%;
          position: relative;
          cursor: pointer;
          text-align: center;
          appearance: none;
          -webkit-appearance: none;
          border: 1px solid rgba(108, 134, 182, 0.5);
          border-radius: 10px;
          background: linear-gradient(
            180deg,
            rgba(5, 12, 30, 0.95) 0%,
            rgba(3, 9, 24, 0.98) 100%
          );
          padding: 20px 14px 12px;
          min-height: 112px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: inherit;
          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .hero-card:focus-visible {
          outline: 1px solid rgba(147, 189, 255, 0.9);
          outline-offset: 2px;
        }
        .hero-card.active {
          border-color: rgba(143, 174, 236, 0.88);
          background: linear-gradient(
            180deg,
            rgba(36, 47, 94, 0.86) 0%,
            rgba(19, 30, 66, 0.94) 100%
          );
          box-shadow: inset 0 0 0 1px rgba(140, 173, 230, 0.28);
        }

        .hero-card-id {
          position: absolute;
          top: 12px;
          left: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(137, 165, 214, 0.7);
          background: rgba(16, 30, 58, 0.45);
          font-size: 10px;
          color: #e1ecff;
          font-family: inherit;
          font-weight: 700;
          line-height: 1;
        }

        .hero-card h4 {
          margin: 8px 0 6px;
          font-size: clamp(12px, 1vw, 13px);
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-family: inherit;
          color: #f2f7ff;
          line-height: 1.28;
          max-width: 100%;
        }

        .hero-card p {
          margin: 0;
          font-size: 10px;
          color: #9eb9e2;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.25;
          font-family: inherit;
        }

        .surface-section,
        .content-section {
          padding-left: 36px;
          padding-right: 36px;
        }

        .surface-section {
          padding-top: 20px;
          padding-bottom: 34px;
          background: transparent;
        }

        .content-section {
          padding-top: 54px;
          padding-bottom: 70px;
          background: transparent;
        }

        .surface-section h2,
        .content-section h2 {
          margin: 0;
          text-align: center;
          color: #e8f0ff;
          line-height: 1.12;
          font-family: inherit;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .surface-section h2 {
          font-size: 20px;
          letter-spacing: 0.04em;
        }

        .content-section h2 {
          font-size: 40px;
        }

        .chips-row {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .chip {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid rgba(101, 124, 165, 0.36);
          border-radius: 13px;
          color: #b3c1da;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
          padding: 10px;
          font-family: inherit;
          text-transform: uppercase;
          background:
            radial-gradient(
              190px 86px at 50% 52%,
              rgba(112, 133, 171, 0.22) 0%,
              rgba(42, 58, 90, 0.15) 42%,
              rgba(8, 15, 30, 0.92) 78%
            ),
            linear-gradient(
              180deg,
              rgba(10, 18, 34, 0.9) 0%,
              rgba(6, 12, 24, 0.96) 100%
            );
        }

        .dot-row {
          margin-top: 12px;
          display: flex;
          justify-content: center;
          gap: 7px;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(163, 181, 211, 0.42);
        }

        .dot.active {
          background: #ffffff;
        }

        .feature-list {
          margin: 24px auto 0;
          max-width: 1120px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .feature-item {
          width: 100%;
        }

        .feature-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 18px;
          border: 1px solid rgba(130, 155, 198, 0.28);
          background:
            radial-gradient(
              circle at 30% 20%,
              rgba(150, 178, 230, 0.2),
              rgba(28, 45, 79, 0.06) 55%,
              rgba(10, 20, 39, 0.9) 100%
            ),
            linear-gradient(180deg, #1a2844 0%, #101a31 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 18px rgba(0, 0, 0, 0.24);
          overflow: hidden;
        }

        .feature-image {
          object-fit: cover;
          object-position: center center;
        }

        .feature-copy h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.1;
          color: #f0f5ff;
          font-family: inherit;
          text-transform: none;
          font-weight: 600;
        }

        .feature-copy p {
          margin: 7px 0 0;
          color: #8ea5cb;
          font-size: 13px;
          line-height: 1.6;
          font-family: inherit;
          max-width: 520px;
        }

        .cta-wrap {
          margin-top: 22px;
          text-align: center;
        }

        .infra-title {
          font-size: 30px !important;
          letter-spacing: 0.03em;
          line-height: 1.14;
        }

        .infra-cta-wrap {
          margin-top: 12px;
        }

        .infra-cta-wrap .pill-btn {
          min-width: 190px;
          height: 42px;
          font-size: 14px;
          letter-spacing: 0;
          text-transform: none;
        }

        .mt {
          margin-top: 44px !important;
        }

        .subtext {
          margin: 8px auto 0;
          max-width: 920px;
          text-align: center;
          color: #a5bad9;
          font-size: 12px;
          line-height: 1.7;
          font-family: inherit;
        }

        .scope-grid {
          margin: 16px auto 0;
          max-width: 1040px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px 12px;
        }

        .scope-chip {
          min-height: 54px;
          border: 1px solid rgba(122, 150, 193, 0.36);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8px 14px;
          font-size: 12px;
          color: #d2dff6;
          font-family: inherit;
          text-transform: none;
          background: rgba(14, 24, 47, 0.42);
        }

        .scope-grid .scope-chip:nth-child(7) {
          grid-column: 2;
        }

        .scope-title {
          font-size: 42px !important;
          letter-spacing: 0.02em;
          line-height: 1.08;
        }

        .scope-subtext {
          max-width: 860px;
          margin-top: 10px;
        }

        .tonnage-grid {
          margin: 18px auto 0;
          max-width: 920px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .tonnage-item {
          min-height: 62px;
          border: 1px solid rgba(129, 156, 198, 0.36);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          line-height: 1.1;
          color: #e9f1ff;
          font-family: inherit;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .subtext-bottom {
          margin-top: 10px;
          margin-bottom: 30px;
        }

        @media (min-width: 1201px) and (max-height: 820px) {
          .hero {
            height: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 28px 30px 22px;
          }

          .hero-label {
            position: static;
            align-self: flex-end;
            margin: 0;
          }

          .hero h1 {
            position: static;
            top: auto;
            left: auto;
            transform: none;
            width: auto;
            margin: 0;
            font-size: clamp(58px, 9vw, 96px);
            line-height: 0.92;
            text-align: center;
          }

          .hero-left,
          .hero-right {
            position: static;
            width: 100%;
            max-width: 820px;
            text-align: center;
          }

          .hero-image-wrap {
            position: relative;
            left: auto;
            top: auto;
            transform: rotate(-10deg);
            width: 220px;
            height: 340px;
            margin: 4px auto;
            animation: none;
          }

          .hero-image {
            animation: none;
          }

          .hero-cards {
            position: static;
            transform: none;
            width: 100%;
            max-width: 980px;
            margin-top: 6px;
          }
        }

        @media (max-width: 1200px) {
          .hero {
            height: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
            padding: 34px 24px 28px;
          }

          .hero-label {
            position: static;
            align-self: flex-end;
            margin: 0;
          }

          .hero h1 {
            position: static;
            top: auto;
            left: auto;
            transform: none;
            width: auto;
            margin: 0;
            font-size: clamp(62px, 12vw, 100px);
            line-height: 0.94;
            text-align: center;
          }

          .hero-left,
          .hero-right {
            position: static;
            width: 100%;
            max-width: 760px;
            text-align: center;
          }

          .hero-image-wrap {
            position: relative;
            left: auto;
            top: auto;
            transform: rotate(-9deg);
            width: min(250px, 40vw);
            height: min(390px, 62vw);
            margin: 8px auto 4px;
            animation: none;
          }

          .hero-image {
            animation: none;
          }

          .hero-cards {
            position: static;
            transform: none;
            width: 100%;
            max-width: 900px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 8px;
          }

          .hero-card:last-child {
            grid-column: 1 / -1;
          }

          .surface-section,
          .content-section {
            padding-left: 24px;
            padding-right: 24px;
          }

          .chips-row,
          .scope-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1100px) and (min-height: 1200px) {
          .hero h1 {
            font-size: clamp(68px, 10vw, 104px);
          }

          .hero-left,
          .hero-right {
            max-width: 820px;
          }

          .feature-list {
            max-width: 760px;
          }

          .tonnage-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 700px;
          }
        }

        @media (max-width: 1100px) {
          .hero-left h2,
          .surface-section h2,
          .content-section h2,
          .feature-copy h3 {
            font-size: 32px;
          }

          .tonnage-item {
            font-size: 24px;
          }
        }

        @media (max-width: 900px) {
          .coolers-page {
            --nav-offset: 84px;
          }

          .hero {
            padding-bottom: 28px;
          }

          .hero h1 {
            font-size: clamp(54px, 17vw, 88px);
          }

          .hero-left,
          .hero-right {
            max-width: 680px;
          }

          .hero-image-wrap {
            transform: rotate(-8deg);
            width: min(220px, 52vw);
            height: min(360px, 78vw);
            margin: 8px auto 2px;
          }

          .hero-cards {
            max-width: 760px;
          }

          .chips-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .feature-item {
            text-align: center;
          }

          .feature-list {
            grid-template-columns: 1fr;
            max-width: 520px;
          }

          .scope-grid {
            grid-template-columns: 1fr;
            max-width: 560px;
            gap: 10px;
          }

          .scope-grid .scope-chip:nth-child(7) {
            grid-column: auto;
          }

          .scope-chip {
            min-height: 58px;
            padding: 10px 16px;
            border-radius: 16px;
          }
        }

        @media (max-width: 640px) {
          .coolers-page {
            --nav-offset: 78px;
          }

          .hero,
          .surface-section,
          .content-section {
            padding-left: 14px;
            padding-right: 14px;
          }

          .hero {
            padding-top: 28px;
          }

          .hero-label {
            align-self: center;
          }

          .hero h1 {
            font-size: clamp(48px, 22vw, 74px);
          }

          .hero-left h2,
          .surface-section h2,
          .content-section h2,
          .feature-copy h3 {
            font-size: 24px;
          }

          .hero-cards,
          .scope-grid,
          .chips-row {
            grid-template-columns: 1fr;
          }

          .hero-card:last-child {
            grid-column: auto;
          }

          .tonnage-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .tonnage-item {
            min-height: 56px;
            font-size: 20px;
          }

          .hero-card {
            min-height: 0;
          }
        }

        @media (max-width: 420px) {
          .pill-btn {
            width: 100%;
            min-width: 0;
          }

          .tonnage-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 400px) {
          .hero h1 {
            font-size: clamp(42px, 16vw, 60px);
          }

          .hero-left h2 {
            font-size: 24px;
          }

          .hero-left p:last-child,
          .hero-right p {
            font-size: 12px;
            line-height: 1.6;
          }

          .hero-card {
            padding: 16px 12px 12px;
          }
        }
      `}</style>
    </>
  );
}
