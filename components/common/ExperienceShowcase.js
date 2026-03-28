"use client";

import Image from "next/image";
import Link from "next/link";

const ScrollToTop = () => {
  if (typeof window !== "undefined") {
    const lenis = window.__lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }
};

const ExperienceShowcase = ({
  kicker,
  title,
  paragraphs = [],
  buttonText,
  buttonHref = "/about",
  image = "/home/about-img.jpg",
  verticalLabel,
  surface = "white",
}) => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 1976;
  const sectionStyle =
    surface === "muted" ? { backgroundColor: "#ffffff" } : undefined;

  return (
    <section className="experience-showcase" style={sectionStyle}>
      <div className="experience-shell">
        <div className="experience-vertical-wrap" aria-hidden={!verticalLabel}>
          {verticalLabel ? (
            <div className="experience-vertical" aria-hidden="true">
              {verticalLabel}
            </div>
          ) : null}
        </div>

        <div className="experience-media">
          <div className="experience-image">
            <Image
              src={image}
              alt={title}
              fill
              className="experience-image-asset"
              sizes="(max-width: 1199px) 100vw, 34rem"
            />
          </div>

          <div className="experience-badge">
            <div className="experience-badge-number">{years}</div>
            <p>
              Years of <span>Experience</span>
            </p>
          </div>
        </div>

        <div className="experience-copy">
          {kicker ? <p className="experience-kicker">{kicker}</p> : null}
          <h2>{title}</h2>

          <div className="experience-paragraphs">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {buttonText ? (
            <Link
              href={buttonHref}
              className="experience-btn"
              onClick={ScrollToTop}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "10.25rem",
                padding: "1rem 1.75rem",
                background: "#202a67",
                color: "#ffffff",
                fontFamily: 'var(--font-hero, "Montserrat", sans-serif)',
                fontSize: "0.98rem",
                fontWeight: 800,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {buttonText}
            </Link>
          ) : null}
        </div>
      </div>

      <style jsx>{`
        .experience-showcase {
          position: relative;
          overflow: hidden;
          padding: clamp(4.5rem, 8vw, 7rem) 0;
          background: #ffffff;
        }

        .experience-shell {
          position: relative;
          display: grid;
          grid-template-columns: 15% 35% 50%;
          align-items: center;
          gap: 0;
          width: min(100% - 3rem, 92rem);
          margin: 0 auto;
          padding-left: 0;
        }

        .experience-vertical-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          min-height: 100%;
          overflow: hidden;
        }

        .experience-vertical {
          font-family: var(--font-hero, "Montserrat", sans-serif);
          font-size: clamp(4.5rem, 9vw, 7rem);
          font-weight: 700;
          letter-spacing: 0.04em;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 2px rgba(20, 37, 76, 0.12);
          opacity: 0.95;
          text-transform: uppercase;
          user-select: none;
          pointer-events: none;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
        }

        .experience-media {
          position: relative;
          min-width: 0;
          height: clamp(27rem, 40vw, 34rem);
          min-height: clamp(27rem, 40vw, 34rem);
          margin-right: clamp(1.25rem, 2vw, 2rem);
        }

        .experience-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          box-shadow: 0 26px 55px rgba(20, 37, 76, 0.16);
        }

        .experience-image-asset {
          object-fit: cover;
          object-position: center;
        }

        .experience-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(64, 16, 10, 0.28) 0%,
            rgba(20, 37, 76, 0.1) 100%
          );
          pointer-events: none;
        }

        .experience-badge {
          position: absolute;
          right: 0;
          bottom: 0;
          transform: translate(0, 18%);
          min-width: clamp(12rem, 18vw, 14rem);
          background: #ffffff;
          padding: 1rem 1.1rem 0.9rem;
          box-shadow: 0 22px 48px rgba(20, 37, 76, 0.15);
          text-align: center;
        }

        .experience-badge-number {
          font-family: var(--font-hero, "Montserrat", sans-serif);
          font-size: clamp(4.25rem, 7vw, 5.6rem);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: -0.05em;
          color: #202a67;
        }

        .experience-badge p {
          margin-top: 0.4rem;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: #202a67;
        }

        .experience-badge span {
          font-weight: 800;
        }

        .experience-copy {
          position: relative;
          z-index: 1;
          min-width: 0;
          max-width: none;
          padding-left: clamp(1rem, 1.8vw, 2rem);
          padding-right: 0;
        }

        .experience-kicker {
          margin: 0 0 0.85rem;
          font-family: var(--font-hero, "Montserrat", sans-serif);
          font-size: 0.98rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #14254c;
        }

        .experience-copy h2 {
          margin: 0;
          max-width: 12ch;
          font-family: var(--font-hero, "Montserrat", sans-serif);
          font-size: clamp(2.75rem, 5vw, 4.25rem);
          font-weight: 800;
          line-height: 0.96;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          color: #202a67;
        }

        .experience-paragraphs {
          display: grid;
          gap: 1rem;
          margin-top: 1.55rem;
        }

        .experience-paragraphs p {
          margin: 0;
          max-width: none;
          font-size: clamp(1rem, 1.4vw, 1.1rem);
          line-height: 1.7;
          text-align: justify;
          color: #4f5973;
        }

        .experience-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 2.45rem;
          min-width: 10.25rem;
          background: #202a67;
          padding: 1rem 1.75rem;
          font-family: var(--font-hero, "Montserrat", sans-serif);
          font-size: 0.98rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #ffffff !important;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background-color 0.2s ease;
        }

        .experience-btn:hover {
          transform: translateY(-2px);
          background: #14254c;
          box-shadow: 0 16px 34px rgba(20, 37, 76, 0.18);
        }

        @media (max-width: 1399px) {
          .experience-vertical-wrap {
            display: none;
          }

          .experience-shell {
            grid-template-columns: minmax(0, 32rem) minmax(0, 1fr);
            gap: clamp(1.5rem, 2.2vw, 2.4rem);
            width: min(100% - 2rem, 86rem);
          }

          .experience-media {
            margin-right: 0;
          }

          .experience-copy {
            padding-left: clamp(0.5rem, 1.2vw, 1.25rem);
          }
        }

        @media (min-width: 1400px) and (max-width: 1599px) {
          .experience-shell {
            grid-template-columns: 15% 35% 50%;
            width: min(100% - 2rem, 96rem);
          }

          .experience-media {
            height: clamp(24rem, 35vw, 30rem);
            min-height: clamp(24rem, 35vw, 30rem);
            margin-right: 1.5rem;
          }

          .experience-badge {
            right: 1rem;
            bottom: 1rem;
            transform: none;
            min-width: 10rem;
          }

          .experience-copy {
            width: 100%;
            max-width: none;
            padding-left: 1rem;
            padding-right: 0;
          }

          .experience-copy h2 {
            max-width: 9ch;
            font-size: clamp(2.4rem, 4vw, 3.35rem);
          }

          .experience-paragraphs {
            margin-top: 1.25rem;
          }

          .experience-paragraphs p {
            max-width: none;
            font-size: 0.98rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 1279px) {
          .experience-showcase {
            padding: clamp(4rem, 7vw, 5.5rem) 0;
          }

          .experience-shell {
            grid-template-columns: minmax(0, 30rem) minmax(0, 1fr);
            gap: 2.5rem;
            width: min(100% - 2.5rem, 78rem);
            padding-left: 0;
          }

          .experience-media {
            height: clamp(24rem, 42vw, 31rem);
            min-height: clamp(24rem, 42vw, 31rem);
            margin-right: 0;
          }

          .experience-copy h2 {
            max-width: 10ch;
            font-size: clamp(2.5rem, 4.8vw, 3.7rem);
          }

          .experience-paragraphs p {
            font-size: 1rem;
            line-height: 1.65;
          }
        }

        @media (max-width: 1199px) {
          .experience-shell {
            width: min(100% - 2.5rem, 76rem);
            grid-template-columns: minmax(0, 24rem) minmax(0, 1fr);
            gap: 2.25rem;
            padding-left: 0;
          }

          .experience-media {
            height: clamp(22rem, 40vw, 28rem);
            min-height: clamp(22rem, 40vw, 28rem);
          }

          .experience-badge {
            min-width: 10.5rem;
            padding: 0.85rem 0.95rem 0.8rem;
          }

          .experience-badge-number {
            font-size: clamp(3.7rem, 6vw, 4.8rem);
          }

          .experience-copy h2 {
            max-width: none;
            font-size: clamp(2.25rem, 4.4vw, 3.2rem);
            line-height: 0.98;
          }

          .experience-copy {
            max-width: none;
            padding-left: 0;
          }

          .experience-paragraphs {
            margin-top: 1.2rem;
            gap: 0.85rem;
          }

          .experience-paragraphs p {
            font-size: 0.98rem;
            line-height: 1.6;
          }

          .experience-btn {
            margin-top: 2rem;
            min-width: 9.5rem;
            padding: 0.9rem 1.4rem;
            font-size: 0.92rem;
          }
        }

        @media (max-width: 991px) {
          .experience-shell {
            grid-template-columns: minmax(0, 1fr);
            gap: 2.5rem;
            width: min(100% - 2rem, 48rem);
          }

          .experience-media {
            order: 1;
            height: clamp(22rem, 70vw, 30rem);
            min-height: clamp(22rem, 70vw, 30rem);
          }

          .experience-copy {
            order: 2;
            max-width: none;
            padding-right: 0;
          }

          .experience-copy h2 {
            max-width: 11ch;
          }
        }

        @media (max-width: 767px) {
          .experience-showcase {
            padding: 3.5rem 0 4rem;
          }

          .experience-shell {
            width: min(100% - 1.5rem, 76rem);
            gap: 2rem;
          }

          .experience-media {
            height: 21rem;
            min-height: 21rem;
          }

          .experience-badge {
            right: 0.85rem;
            bottom: 0.85rem;
            transform: none;
            min-width: 9rem;
            padding: 0.8rem 0.85rem 0.75rem;
          }

          .experience-badge-number {
            font-size: 3.7rem;
          }

          .experience-badge p {
            font-size: 0.85rem;
          }

          .experience-copy h2 {
            max-width: none;
            font-size: clamp(2rem, 10vw, 2.85rem);
            line-height: 1;
          }

          .experience-paragraphs {
            margin-top: 1.2rem;
            gap: 0.85rem;
          }

          .experience-paragraphs p {
            font-size: 0.98rem;
            line-height: 1.65;
            text-align: left;
          }

          .experience-btn {
            margin-top: 1.9rem;
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 575px) {
          .experience-showcase {
            padding: 3rem 0 3.75rem;
          }

          .experience-shell {
            width: min(100% - 1rem, 76rem);
            gap: 1.75rem;
          }

          .experience-media {
            height: 18rem;
            min-height: 18rem;
          }

          .experience-kicker {
            margin-bottom: 0.65rem;
            font-size: 0.88rem;
          }

          .experience-copy h2 {
            font-size: clamp(1.85rem, 11vw, 2.45rem);
            letter-spacing: -0.04em;
          }

          .experience-paragraphs p {
            font-size: 0.92rem;
            line-height: 1.55;
          }

          .experience-badge {
            right: 0.65rem;
            bottom: 0.65rem;
            min-width: 8rem;
            padding: 0.75rem 0.75rem 0.65rem;
          }

          .experience-badge-number {
            font-size: 3.15rem;
          }

          .experience-badge p {
            font-size: 0.78rem;
          }

          .experience-btn {
            padding: 0.85rem 1.2rem;
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceShowcase;
