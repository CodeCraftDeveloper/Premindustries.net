"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = navigator.connection?.saveData;

    if (!prefersReducedMotion && !saveData) {
      const frameId = window.requestAnimationFrame(() => {
        setShouldLoadVideo(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <>
      <section className="about-section mb-5 overflow-x-hidden">
        <div className="mx-auto w-full max-w-[1380px] px-[14px] py-4 sm:px-[18px] sm:py-5 lg:px-6 lg:py-6">
          <div className="max-w-[1220px]">
            <h3 className="font-condensed text-[clamp(2.1rem,4vw,3.5rem)] uppercase leading-[1.02] tracking-[0.01em] text-[#0b1b2b]">
              Sheet Metal Components Manufacturing
            </h3>

            <p className="mt-4 max-w-[1240px] text-[clamp(14px,1.2vw,17px)] leading-[1.7] text-[#22354a]">
              Prem Industries India Limited operates an integrated sheet metal
              components manufacturing division designed for dimensional
              accuracy, repeatability, and high-volume dispatch. From coil
              handling and cutting to forming and fabrication, our workflow is
              aligned for OEM and industrial production programs where quality
              consistency matters in every batch.
            </p>
          </div>

          <div className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] xl:gap-8">
            <div className="relative overflow-hidden rounded-[18px] shadow-[0_20px_40px_rgba(10,20,35,0.1)]">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/sheetmetal/about.jpg"
                  alt="Sheet metal components at Prem Industries India Limited"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col gap-7 pt-1 text-[clamp(14px,1.15vw,17px)] leading-[1.75] text-[#22354a] xl:pt-8">
              <p>
                Our manufacturing setup combines modern machinery, process
                monitoring, and trained teams to serve automotive, appliance,
                infrastructure, and general engineering applications. We focus
                on stable throughput, controlled tolerances, and practical lead
                times so customers can plan downstream assembly, vendor
                schedules, and material movement with confidence.
              </p>
              <p>
                Beyond part manufacturing, we emphasize engineering support,
                quality checkpoints, packaging discipline, and dispatch
                readiness to reduce rejection risk at customer plants. This
                approach helps us deliver reliable sheet metal components that
                are ready for immediate use in production lines.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="coverage-section">
        {shouldLoadVideo ? (
          <video
            className="coverage-video"
            src="/home/sustainability2.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          />
        ) : (
          <Image
            src="/sheetmetal/press-new.jpg"
            alt="Sheet metal industry coverage at Prem Industries India Limited"
            fill
            sizes="100vw"
            className="coverage-video"
          />
        )}
        <div className="coverage-overlay" />
        <div className="mx-auto grid w-full max-w-[1380px] items-start justify-items-start gap-5 px-[14px] sm:px-[18px] lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:px-6 coverage-content">
          <div className="coverage-text">
            <h2>Sheet Metal Industry Coverage</h2>
            <p>
              Our sheet metal component portfolio spans automotive,
              construction, electrical, appliance, and consumer categories, with
              production capability for both standard and custom engineered
              parts.
            </p>
            <p>
              We support applications such as enclosures, support brackets,
              structural members, utility parts, and fabricated assemblies,
              backed by process control designed for repeat business and OEM
              supply continuity.
            </p>
            <Link href="/contact" className="coverage-cta">
              Request A Quote
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
                <p>Brackets, reinforcements, structural and formed parts</p>
              </div>
            </div>
            <div className="coverage-card">
              <span className="coverage-icon" aria-hidden="true">
                <QuickIcon name="leaf" />
              </span>
              <div>
                <h3>Construction</h3>
                <p>Support systems, channels, structural accessories</p>
              </div>
            </div>
            <div className="coverage-card">
              <span className="coverage-icon" aria-hidden="true">
                <QuickIcon name="wrench" />
              </span>
              <div>
                <h3>Electronics</h3>
                <p>Panels, cabinets, control housings, device enclosures</p>
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
          font-family: var(--font-condensed);
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
