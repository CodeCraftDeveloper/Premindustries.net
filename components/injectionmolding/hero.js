"use client";

import Image from "next/image";
import Link from "next/link";

export default function InjectionHero() {
  return (
    <>
      <section className="injection-hero">
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/injectionmolding/machines/3000ton.png"
          >
            <source src="/injectionmolding/hero.webm" type="video/webm" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-cut" aria-hidden="true" />
        <div className="hero-band" aria-hidden="true" />

        <div className="hero-machine">
          <Image
            src="/injectionmolding/machine.png"
            alt="Injection molding machine"
            width={800}
            height={448}
            sizes="(max-width: 1200px) 90vw, 800px"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
              margin: "0 auto",
            }}
            priority
          />
        </div>

        <div className="hero-content">
          <span className="hero-eyebrow">Injection Molding</span>
          <h1>Shaping Tomorrow, One Mold at a Time</h1>
          <p>
            Welcome to Prem Industries&apos; state-of-the-art injection molding
            division. With cutting-edge technology ranging from 160 to 3000
            tons, we&apos;re not just manufacturing parts&mdash;we&apos;re
            engineering solutions that power industries forward.
          </p>
          <Link href="/contact" className="experience-cta">
            Discuss Your Part
          </Link>
        </div>
      </section>

      <section className="experience-band">
        <div className="experience-card">
          <div className="experience-left">
            <span className="experience-bracket tl" aria-hidden="true" />
            <span className="experience-bracket bl" aria-hidden="true" />
            <span className="experience-bracket tr" aria-hidden="true" />
            <span className="experience-bracket br" aria-hidden="true" />
            <div className="experience-years">
              <span className="years-number">50</span>
              <span className="years-plus">+</span>
              <span className="years-label">YEARS</span>
            </div>
          </div>
          <div className="experience-right">
            <div className="experience-right-inner">
              <h2 className="experience-title">50+ Years of Excellence</h2>
              <span className="experience-subtitle">Business Experience</span>
              <p className="experience-copy">
                For over two decades, Prem Industries has been at the forefront
                of manufacturing innovation. Our journey into injection molding
                represents more than expansion&mdash;it&apos;s our commitment to
                delivering world-class solutions that meet the evolving needs of
                modern industry. With a quarter-century of expertise behind us,
                we bring unmatched reliability, precision, and partnership to
                every project we undertake.
              </p>
              <Link href="/about" className="experience-cta">
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="experience-diagonal" aria-hidden="true" />
        </div>
      </section>

      <section className="venture-section">
        <div className="venture-wrap">
          <div className="venture-image">
            <Image
              src="/injectionmolding/machines/1400Ton.png"
              alt="Injection molding machine"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="venture-panel">
            <div className="venture-header">
              <div className="venture-title-wrap">
                <span className="venture-title">
                  Prem Industries India Limited
                </span>
                <span className="venture-title-line" aria-hidden="true" />
              </div>
              {/* <div className="venture-icon">
                <Image
                  src="/injectionmolding/machinecut.jpg"
                  alt=""
                  fill
                  sizes="120px"
                  style={{ objectFit: "contain" }}
                />
              </div> */}
            </div>
            <div className="venture-body">
              <span className="venture-intro">Venturing Into</span>
              <span className="venture-highlight">Injection Molding</span>
              <span className="venture-desc">
                to expand and reinforce our manufacturing capabilities
              </span>
            </div>
            <div className="venture-copy">
              <p>
                We&apos;re investing &#8377;100 crore over the next three years
                to build something extraordinary&mdash;a world-class injection
                molding facility that combines advanced infrastructure,
                cutting-edge machinery, and highly skilled talent.
              </p>
              <p>
                Our vision is clear: to become India&apos;s trusted partner for
                precision molding across diverse sectors.
              </p>
            </div>
            <div className="venture-footer">
              <span className="venture-footer-title">What We Manufacture</span>
              <ul className="venture-list">
                <li>
                  Consumer Durables: High-quality AC components, cooler parts,
                  and other home appliance essentials
                </li>
                <li>
                  E-commerce &amp; Logistics Solutions: Durable pallets, storage
                  bins, and totes designed for heavy-duty operations
                </li>
                <li>
                  Custom Components: Tailored molding solutions engineered to
                  meet your specific industry requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .injection-hero {
          position: relative;
          min-height: 100vh;
          height: 100vh;
          overflow: hidden;
          border-top: 4px solid #e11d2e;
          background: #0b3b6c;
          min-height: 100svh;
          height: 100svh;
        }

        .hero-media {
          position: absolute;
          inset: 0;
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(8, 66, 120, 0.82) 0%,
            rgba(8, 66, 120, 0.62) 45%,
            rgba(8, 66, 120, 0.2) 75%,
            rgba(8, 66, 120, 0) 100%
          );
        }

        .hero-cut {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(13, 106, 173, 0) 0%,
            rgba(13, 106, 173, 0.45) 55%,
            rgba(13, 106, 173, 0.9) 100%
          );
          clip-path: polygon(72% 0, 100% 0, 100% 100%, 48% 100%);
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .hero-band {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 24%;
          background: #ffffff;
        }

        .hero-machine {
          position: absolute;
          right: 10%;
          bottom: 0;
          width: clamp(260px, 40vw, 600px);
          max-width: 600px;
          height: auto;
          aspect-ratio: 2 / 1;
          z-index: 2;
          filter: drop-shadow(0 24px 40px rgba(8, 24, 40, 0.35))
            drop-shadow(0 6px 12px rgba(8, 24, 40, 0.25));
        }

        .hero-content {
          position: relative;
          z-index: 3;
          padding: clamp(48px, 7vw, 84px) clamp(20px, 6vw, 120px)
            clamp(72px, 8vw, 96px);
          max-width: 680px;
          width: min(90%, 680px);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .hero-content h1 {
          margin: 12px 0 10px;
          font-size: clamp(30px, 3.8vw, 48px);
          font-family: "Oswald", sans-serif;
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: 0.06em;
          color: #ffffff;
          text-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
        }

        .hero-content p {
          margin: 0 0 18px;
          font-size: 15px;
          line-height: 1.6;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.88);
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        }

        :global(.hero-cta) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 999px;
          background: #ff6b35;
          color: #ffffff !important;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .experience-band {
          background: linear-gradient(135deg, #0a2a6a 0%, #0c3f8e 100%);
          padding: 24px 24px 48px;
          margin-top: -145px;
          margin-bottom: 30px;
          overflow-x: clip;
        }

        .experience-card {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(240px, 32%) minmax(0, 1fr);
          align-items: stretch;
          color: #ffffff;
          overflow: hidden;
          min-height: 320px;
        }

        .experience-left {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          background: linear-gradient(
            180deg,
            rgba(10, 42, 106, 0.6) 0%,
            rgba(12, 63, 142, 0.4) 100%
          );
          border-radius: 8px;
          margin-right: 16px;
        }

        .experience-bracket {
          position: absolute;
          width: 28px;
          height: 28px;
          border: 2px solid rgba(255, 255, 255, 0.7);
        }

        .experience-left .experience-bracket.tl {
          top: 20px;
          left: 20px;
          border-right: none;
          border-bottom: none;
        }

        .experience-left .experience-bracket.tr {
          top: 20px;
          right: 20px;
          border-left: none;
          border-bottom: none;
        }

        .experience-left .experience-bracket.bl {
          bottom: 20px;
          left: 20px;
          border-right: none;
          border-top: none;
        }

        .experience-left .experience-bracket.br {
          bottom: 20px;
          right: 20px;
          border-left: none;
          border-top: none;
        }

        .experience-years {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
          position: relative;
        }

        .years-number {
          font-size: clamp(80px, 12vw, 140px);
          font-weight: 800;
          font-family: "Oswald", sans-serif;
          letter-spacing: -0.02em;
          color: rgba(255, 255, 255, 0.2);
          line-height: 0.85;
        }

        .years-plus {
          position: absolute;
          top: 0;
          right: -24px;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          font-family: "Oswald", sans-serif;
          color: rgba(255, 255, 255, 0.25);
        }

        .years-label {
          font-size: clamp(22px, 3.5vw, 36px);
          font-weight: 700;
          font-family: "Oswald", sans-serif;
          letter-spacing: 0.35em;
          color: #ffffff;
          margin-top: 4px;
          padding-left: 0.35em;
        }

        .experience-right {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px 40px 32px 24px;
          min-width: 0;
        }

        .experience-right .experience-bracket.tl {
          top: 0;
          left: 0;
          border-right: none;
          border-bottom: none;
        }

        .experience-right .experience-bracket.tr {
          top: 0;
          right: 0;
          border-left: none;
          border-bottom: none;
        }

        .experience-right .experience-bracket.bl {
          bottom: 0;
          left: 0;
          border-right: none;
          border-top: none;
        }

        .experience-right .experience-bracket.br {
          bottom: 0;
          right: 0;
          border-left: none;
          border-top: none;
        }

        .experience-right-inner {
          padding-top: 0;
        }

        .experience-title {
          font-size: clamp(22px, 2.8vw, 30px);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          font-family: "Oswald", sans-serif;
          margin: 0 0 4px;
          color: rgba(255, 255, 255, 0.9);
        }

        .experience-subtitle {
          font-size: clamp(13px, 1.4vw, 16px);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 400;
          color: rgba(220, 235, 255, 0.85);
          margin-bottom: 20px;
        }

        .experience-copy {
          margin: 0 0 24px;
          font-size: 12px;
          line-height: 1.75;
          color: rgba(235, 245, 255, 0.9);
          max-width: 100%;
          text-align: justify;
          text-justify: inter-word;
          font-style: italic;
        }

        .experience-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 8px 20px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #ffffff !important;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 10px;
          transition: all 0.3s ease;
        }

        .experience-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.8);
        }

        .experience-diagonal {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 40%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.06) 0%,
            rgba(255, 255, 255, 0.01) 100%
          );
          clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
          pointer-events: none;
        }

        :global(.experience-cta) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 7px 14px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: #ffffff !important;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 10px;
        }

        .venture-section {
          background: #ffffff;
          padding: 0;
          overflow-x: clip;
        }

        .venture-wrap {
          width: 100%;
          margin: 0;
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(320px, 1fr);
          overflow: visible;
          box-shadow: none;
          max-width: 100%;
        }

        .venture-image {
          position: relative;
          min-height: 340px;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }

        .venture-panel {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          padding: 24px 32px 0 48px;
          margin-left: -60px;
          position: relative;
          z-index: 2;
        }

        .venture-header {
          position: relative;
          display: flex;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .venture-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 2;
        }

        .venture-title {
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #0b3378;
        }

        .venture-title-line {
          width: 200px;
          height: 3px;
          background: #e11d2e;
        }

        .venture-icon {
          position: absolute;
          top: -220px;
          right: 0;
          width: 320px;
          height: 320px;
          pointer-events: none;
          z-index: 1;
        }

        .venture-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 18px;
          flex: 1;
        }

        .venture-intro {
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          color: #0b3378;
          letter-spacing: 0.04em;
        }

        .venture-highlight {
          font-size: 22px;
          font-weight: 800;
          text-transform: uppercase;
          color: #0b3378;
          letter-spacing: 0.02em;
        }

        .venture-desc {
          font-size: 18px;
          font-weight: 600;
          text-transform: uppercase;
          color: #0b3378;
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        .venture-copy {
          display: grid;
          gap: 10px;
          margin-bottom: 18px;
          color: #1c2d57;
          font-size: 14px;
          line-height: 1.6;
          text-transform: none;
        }

        .venture-copy p {
          margin: 0;
        }

        .venture-footer-title {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .venture-list {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 6px;
        }

        .venture-footer {
          background: #0b3378;
          color: #ffffff;
          padding: 16px 24px;
          font-weight: 500;
          text-transform: none;
          font-size: 13px;
          letter-spacing: 0.02em;
          margin: 0 -32px 0 -48px;
          line-height: 1.5;
        }

        @media (min-width: 1400px) {
          .hero-content {
            max-width: 760px;
          }

          .hero-content h1 {
            font-size: clamp(34px, 3.6vw, 56px);
          }

          .hero-machine {
            max-width: 700px;
            aspect-ratio: 2 / 1;
          }

          .experience-card {
            max-width: 1320px;
          }
        }

        @media (max-width: 1200px) {
          .hero-content {
            max-width: 600px;
            padding: clamp(44px, 6vw, 70px) clamp(18px, 5vw, 84px)
              clamp(64px, 7vw, 90px);
          }

          .hero-machine {
            max-width: 580px;
            aspect-ratio: 2 / 1;
          }

          .experience-card {
            grid-template-columns: minmax(220px, 36%) minmax(0, 1fr);
          }

          .experience-right {
            padding: 28px 28px 28px 16px;
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            width: min(92%, 640px);
          }

          .hero-band {
            height: 28%;
          }

          .venture-panel {
            margin-left: -40px;
          }
        }

        @media (max-width: 900px) {
          .injection-hero {
            height: auto;
            min-height: 100svh;
            padding-bottom: clamp(220px, 46vw, 380px);
          }

          .experience-band {
            padding: 24px 16px 36px;
            margin-top: 0;
            margin-bottom: 18px;
          }

          .experience-card {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .experience-left {
            margin-right: 0;
            padding: 40px 32px;
          }

          .experience-right {
            padding: 24px;
            text-align: center;
          }

          .experience-right-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .experience-copy {
            text-align: center;
          }

          .hero-content {
            padding-top: 44px;
            padding-bottom: clamp(140px, 28vw, 220px);
          }

          .hero-machine {
            max-width: 520px;
            aspect-ratio: 2 / 1;
          }
        }

        @media (max-width: 768px) {
          .hero-band {
            height: 24%;
          }

          .hero-machine {
            max-width: 470px;
            aspect-ratio: 2 / 1;
          }

          .hero-content {
            max-width: 100%;
            padding-left: 20px;
            padding-right: 20px;
          }

          .years-number {
            font-size: 72px;
          }

          .years-plus {
            right: -18px;
            font-size: 24px;
          }

          .years-label {
            font-size: 24px;
          }

          .experience-bracket {
            width: 22px;
            height: 22px;
          }

          .experience-diagonal {
            display: none;
          }

          .venture-section {
            padding: 40px 0 60px;
          }

          .venture-wrap {
            grid-template-columns: 1fr;
          }

          .venture-image {
            min-height: 240px;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          }

          .venture-panel {
            margin-left: 0;
            margin-top: -40px;
            padding: 40px 20px 0;
          }

          .venture-header {
            flex-direction: column;
            gap: 16px;
            align-items: center;
            text-align: center;
          }

          .venture-title-wrap {
            align-items: center;
          }

          .venture-icon {
            width: 100px;
            height: 70px;
          }

          .venture-body {
            text-align: center;
            align-items: center;
          }

          .venture-intro,
          .venture-desc {
            font-size: 15px;
          }

          .venture-highlight {
            font-size: 18px;
          }

          .venture-footer {
            text-align: center;
            font-size: 11px;
            margin: 0 -20px;
            padding: 14px 20px;
          }

          .venture-list {
            text-align: left;
            padding-left: 16px;
          }
        }

        @media (max-width: 640px) {
          .injection-hero {
            min-height: 88svh;
            padding-bottom: clamp(200px, 52vw, 300px);
          }

          .hero-content h1 {
            font-size: clamp(24px, 6vw, 34px);
          }

          .hero-content p {
            font-size: 14px;
          }

          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .hero-band {
            height: 22%;
          }

          .hero-machine {
            max-width: 420px;
            aspect-ratio: 2 / 1;
          }

          .experience-band {
            padding: 20px 12px 28px;
          }

          .experience-right {
            padding: 20px 16px;
          }

          .venture-panel {
            padding: 32px 18px 0;
          }
        }

        @media (max-width: 480px) {
          .injection-hero {
            padding-bottom: clamp(180px, 60vw, 280px);
          }

          .experience-band {
            padding: 24px 12px;
          }

          .experience-left {
            padding: 32px 24px;
          }

          .experience-left .experience-bracket.tl,
          .experience-left .experience-bracket.tr,
          .experience-left .experience-bracket.bl,
          .experience-left .experience-bracket.br {
            width: 18px;
            height: 18px;
          }

          .experience-left .experience-bracket.tl {
            top: 14px;
            left: 14px;
          }

          .experience-left .experience-bracket.tr {
            top: 14px;
            right: 14px;
          }

          .experience-left .experience-bracket.bl {
            bottom: 14px;
            left: 14px;
          }

          .experience-left .experience-bracket.br {
            bottom: 14px;
            right: 14px;
          }

          .years-number {
            font-size: 60px;
          }

          .years-plus {
            right: -14px;
            font-size: 20px;
          }

          .years-label {
            font-size: 20px;
          }

          .experience-title {
            font-size: 18px;
            letter-spacing: 0.08em;
          }

          .experience-subtitle {
            font-size: 11px;
          }

          .experience-right {
            padding: 20px 16px;
          }

          .experience-copy {
            font-size: 11px;
          }

          .hero-machine {
            max-width: 300px;
            aspect-ratio: 2 / 1;
          }

          .venture-title {
            font-size: 14px;
          }

          .venture-icon {
            width: 90px;
            height: 60px;
          }

          .venture-title-line {
            width: 140px;
          }
        }

        @media (max-width: 360px) {
          .hero-content h1 {
            font-size: 22px;
          }

          .hero-content p {
            font-size: 13px;
          }

          .years-number {
            font-size: 52px;
          }

          .years-label {
            font-size: 18px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
