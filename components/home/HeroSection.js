"use client";

import Image from "next/image";
import Link from "next/link";
import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  revealLeft,
  staggerCards,
  staggerContainer,
} from "./homeMotion";

const heroCards = [
  {
    href: "https://prempackaging.com/",
    title: "Packaging Solutions",
    body: "Custom packaging support for FMCG, retail, D2C, and industrial supply programs with dependable repeat-order execution.",
    accent: "#ef4a3a",
    external: true,
  },
  {
    href: "/sheet-metal-components",
    title: "Sheet Metal Fabrication",
    body: "Precision sheet metal components for automotive, appliance, infrastructure, and OEM supply chains.",
    accent: "#2f3577",
  },
  {
    href: "/injectionmoulding",
    title: "Injection Moulding",
    body: "High-volume plastic components with controlled tolerances for appliance, consumer, and industrial applications.",
    accent: "#29d17d",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-var(--site-header-height))] overflow-hidden px-4 py-6 text-white sm:px-5 sm:py-8 md:px-6 md:py-10 lg:h-[calc(100vh-var(--site-header-height))] lg:px-7 lg:py-12 xl:px-8 xl:py-14">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sheetmetal/best.jpg"
          alt="Prem Industries facility"
          fill
          priority
          className="object-cover object-[center_top] sm:object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-transparent" />

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1360px] flex-col justify-start pt-3 sm:pt-4 lg:pt-5 xl:pt-7">
        <motion.div
          className="hero-text flex max-w-[980px] flex-col gap-2 text-left text-white sm:gap-3 lg:max-w-[900px] xl:max-w-[1040px]"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={revealLeft}
          {...getAosProps("left", 40)}
        >
          <p className="font-hero home-heavy text-[9px] uppercase tracking-[0.16em] text-white/82 sm:text-[11px] sm:tracking-[0.2em]">
            Prem Industries India Limited
          </p>
          <h1 className="hero-main-title font-hero home-heavy m-0 max-w-[820px] text-[clamp(20px,5.4vw,52px)] uppercase leading-[0.96] tracking-[-0.02em] text-white sm:max-w-[820px] lg:text-[clamp(36px,3.2vw,46px)] xl:max-w-[920px] xl:text-[clamp(40px,3vw,52px)] 2xl:max-w-[980px] 2xl:text-[clamp(52px,4vw,72px)]">
            Prem Industries group solutions built for scale and reliability
          </h1>
          <p className="hero-subtitle font-hero m-0 max-w-[780px] text-[clamp(12px,2.4vw,20px)] font-extrabold leading-[1.28] text-white/95 lg:max-w-[760px] lg:text-[clamp(16px,1.5vw,20px)] xl:max-w-[840px] xl:text-[clamp(17px,1.45vw,21px)] 2xl:max-w-[900px] 2xl:text-[clamp(20px,2vw,28px)]">
            Packaging, sheet metal fabrication, injection moulding, retail, and
            construction support from one process-driven business group.
          </p>
          <p className="hero-copy m-0 max-w-[760px] text-[12px] font-medium leading-[1.58] text-white/90 sm:text-[14px] sm:leading-[1.7] lg:max-w-[720px] lg:text-[14px] lg:leading-[1.68] xl:max-w-[800px] xl:text-[15px] xl:leading-[1.72] 2xl:max-w-[860px] 2xl:text-[17px] 2xl:leading-[1.78]">
            ISO-aligned quality systems, traceability, and disciplined execution
            trusted by FMCG brands, OEMs, infrastructure partners, and
            multi-sector enterprises.
          </p>
          <div className="pt-1 sm:pt-2">
            <Link
              href="/contact"
              className="font-hero inline-flex w-fit items-center justify-center rounded-[14px] bg-[#ef3a32] px-4 py-2.5 text-[12px] font-extrabold !text-white shadow-[0_12px_24px_rgba(239,58,50,0.35)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_28px_rgba(239,58,50,0.45)] sm:px-6 sm:py-3 sm:text-[15px] lg:px-5 lg:py-2.5 lg:text-[14px] xl:px-6 xl:py-3 xl:text-[15px]"
            >
              Discuss Your Requirement
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-5 grid w-full grid-cols-1 gap-3 pb-2 sm:mt-7 sm:gap-2.5 lg:mx-auto lg:mt-auto lg:max-w-[1020px] lg:grid-cols-3 lg:gap-3 lg:pb-0 xl:max-w-[1140px] xl:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={staggerContainer}
          {...getAosProps("right", 120)}
        >
          {heroCards.map((card, index) => {
            const cardClassName =
              "hero-sector-card group relative mx-auto flex h-full min-h-[132px] w-full max-w-[400px] cursor-pointer flex-col items-center rounded-[20px] border border-white bg-white px-4 pb-3 pt-3 text-center shadow-[0_18px_38px_rgba(12,20,32,0.18)] transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_24px_42px_rgba(12,20,32,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/90 sm:min-h-[150px] sm:max-w-[460px] sm:rounded-[22px] sm:px-5 sm:pb-4 sm:pt-4 lg:mx-0 lg:min-h-[168px] lg:w-full lg:max-w-[320px] lg:px-5 lg:pb-4 lg:pt-4 xl:min-h-[182px] xl:max-w-[360px] xl:px-6 xl:pb-5 xl:pt-5";
            const content = (
              <div className="flex h-full w-full flex-col items-center justify-between">
                <div className="flex w-full flex-col items-center">
                  <h3
                    className="hero-sector-title m-0 mb-2 w-full whitespace-nowrap px-1 font-extrabold uppercase tracking-normal sm:mb-3 sm:px-2"
                    style={{
                      fontFamily: '"Exo 2", sans-serif',
                      color: "#202a67",
                      fontSize: "clamp(12px, 3.8vw, 18px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="hero-sector-copy mt-2 m-0 min-h-[3.6em] max-w-[340px] px-1 text-[11px] font-bold leading-[1.45] sm:mt-2.5 sm:min-h-[4.2em] sm:text-[13px] sm:leading-[1.55] lg:mt-2.5 lg:min-h-[4.35em] lg:text-[13px] lg:leading-[1.45] xl:mt-3 xl:min-h-[4.65em] xl:text-[14px] xl:leading-[1.55]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "#535b6e",
                    }}
                  >
                    {card.body}
                  </p>
                </div>
                <span
                  className="hero-sector-cta font-hero mt-auto inline-flex items-center gap-[6px] pt-2 text-[11px] font-extrabold tracking-normal sm:pt-3 sm:text-[13px] lg:pt-3 lg:text-[13px] xl:text-[14px]"
                  style={{ color: "#ef3a32" }}
                >
                  Visit
                  <span aria-hidden="true" className="text-[16px] leading-none">
                    &gt;
                  </span>
                </span>
              </div>
            );

            if (card.external) {
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClassName}
                  style={{ boxShadow: `inset 4px 0 0 ${card.accent}` }}
                  variants={revealCard}
                  custom={index}
                >
                  {content}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={card.title}
                className="h-full"
                variants={revealCard}
                custom={index}
              >
                <Link
                  href={card.href}
                  className={cardClassName}
                  style={{ boxShadow: `inset 4px 0 0 ${card.accent}` }}
                >
                  {content}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) and (max-width: 1699px) {
          .hero-main-title {
            max-width: 760px !important;
            font-size: 36px !important;
            line-height: 0.96 !important;
          }

          .hero-subtitle {
            max-width: 700px !important;
            font-size: 16px !important;
            line-height: 1.26 !important;
          }

          .hero-copy {
            max-width: 680px !important;
            font-size: 13px !important;
            line-height: 1.68 !important;
          }
        }

        @media (min-width: 1280px) and (max-width: 1699px) {
          .hero-main-title {
            font-size: 40px !important;
          }

          .hero-subtitle {
            font-size: 17px !important;
          }
        }

        @media (min-width: 1024px) and (max-width: 1699px) {
          .hero-sector-card {
            min-height: 128px !important;
            max-width: 292px !important;
            padding: 0.6rem 0.95rem 0.55rem !important;
          }

          .hero-sector-title {
            margin-bottom: 0.25rem !important;
          }

          .hero-sector-copy {
            margin-top: 0.25rem !important;
            min-height: 4.1em !important;
          }

          .hero-sector-cta {
            padding-top: 0.35rem !important;
          }
        }

        @media (min-width: 1280px) and (max-width: 1699px) {
          .hero-sector-card {
            min-height: 134px !important;
            max-width: 304px !important;
          }
        }

        @media (min-width: 1700px) {
          .hero-main-title {
            max-width: 980px !important;
            font-size: 58px !important;
          }

          .hero-subtitle {
            max-width: 900px !important;
            font-size: 22px !important;
          }

          .hero-copy {
            max-width: 860px !important;
            font-size: 17px !important;
          }
        }
      `}</style>
    </section>
  );
}
