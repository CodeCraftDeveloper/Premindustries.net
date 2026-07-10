"use client";

import Image from "next/image";
import Link from "next/link";

const heroCards = [
  {
    href: "https://prempackaging.com/",
    title: "Packaging Solutions",
    eyebrow: "Packaging",
    body: "Custom packaging support for FMCG, retail, D2C, and industrial supply programs with dependable repeat-order execution.",
    accent: "#ef4a3a",
  },
  {
    href: "/sheet-metal-components",
    title: "Sheet Metal Fabrication",
    eyebrow: "Sheet Metal",
    body: "Precision sheet metal components for automotive, appliance, infrastructure, and OEM supply chains.",
    accent: "#2f3577",
  },
  {
    href: "/injection-molding",
    title: "Injection Moulding",
    eyebrow: "Injection",
    body: "High-volume plastic components with controlled tolerances for appliance, consumer, and industrial applications.",
    accent: "#29d17d",
  },
];

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;

  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-var(--site-header-height))] overflow-visible text-white lg:h-[calc(100svh-var(--site-header-height))] lg:overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/u-copy.png"
          alt="Prem Industries India Limited facility"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center [filter:contrast(1.1)_saturate(1.1)]"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(11,15,20,0.65)_0%,rgba(11,15,20,0.45)_35%,rgba(11,15,20,0.15)_70%,rgba(11,15,20,0.05)_100%)] after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(120deg,rgba(255,90,79,0.15)_0%,rgba(255,90,79,0.05)_30%,rgba(0,0,0,0)_62%)]" />

      <div className="relative z-20 h-auto min-h-[calc(100vh-var(--site-header-height))] w-full px-6 sm:px-8 lg:h-full lg:min-h-0 lg:px-12 xl:px-16">
        <div className="flex h-auto min-h-full flex-col pt-20 pb-6 sm:pt-24 sm:pb-7 lg:h-full lg:min-h-0 lg:pt-16 lg:pb-3 xl:pt-20 xl:pb-4 [@media(min-width:1024px)_and_(max-height:900px)]:pt-[3.25rem] [@media(min-width:1024px)_and_(max-height:900px)]:pb-[0.6rem] [@media(min-width:1024px)_and_(max-height:780px)]:pt-10 [@media(min-width:1024px)_and_(max-height:780px)]:pb-[0.4rem]">
          <div className="w-full">
            <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/55 [text-shadow:0_2px_16px_rgba(0,0,0,0.22)] sm:mb-5">
              Prem Industries India Limited
            </p>

            <h1
              className="m-0 w-full max-w-none text-[clamp(48px,6vw,80px)] leading-[1.05] tracking-[-0.04em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.22)] [@media(min-width:1024px)_and_(max-height:900px)]:text-[clamp(40px,4.8vw,62px)] [@media(min-width:1024px)_and_(max-height:900px)]:leading-[1.03] [@media(min-width:1024px)_and_(max-height:780px)]:text-[clamp(34px,4.2vw,52px)]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
              }}
            >
              <span className="block">Prem Industries India Limited</span>
              <span className="block">
                Group Built for{" "}
                <span className="text-[#ff4d4d] [text-shadow:0_4px_20px_rgba(255,77,77,0.4)]">
                  Scale
                </span>
                .
              </span>
              <span className="block">Engineered for Reliability.</span>
            </h1>

            <p className="mt-6 w-full max-w-none text-[clamp(17px,2vw,22px)] font-normal leading-[1.42] text-white/85 [text-shadow:0_2px_16px_rgba(0,0,0,0.22)] sm:mt-7 [@media(min-width:1024px)_and_(max-height:900px)]:mt-4 [@media(min-width:1024px)_and_(max-height:900px)]:text-[clamp(15px,1.5vw,18px)] [@media(min-width:1024px)_and_(max-height:900px)]:leading-[1.34] [@media(min-width:1024px)_and_(max-height:780px)]:mt-3 [@media(min-width:1024px)_and_(max-height:780px)]:text-[14px] [@media(min-width:1024px)_and_(max-height:780px)]:leading-[1.3]">
              Precision manufacturing systems across packaging, sheet metal, and
              injection moulding designed for output stability, traceability,
              and long-term operational confidence.
            </p>

            <div className="mt-9 sm:mt-10 [@media(min-width:1024px)_and_(max-height:900px)]:mt-[1.1rem] [@media(min-width:1024px)_and_(max-height:780px)]:mt-[0.9rem]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff4d4d,#ff2a2a)] px-7 py-3.5 text-[13px] font-semibold tracking-[0.03em] text-white shadow-[0_10px_30px_rgba(255,77,77,0.4)] transition duration-200 hover:-translate-y-0.5"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>

          <div className="mt-auto flex w-full flex-row overflow-x-auto snap-x snap-mandatory gap-4 px-6 -mx-6 w-[calc(100%+3rem)] pt-6 pb-6 scrollbar-none lg:grid lg:grid-cols-3 lg:gap-8 lg:px-20 lg:pt-4 xl:px-32 lg:mx-0 lg:w-full lg:overflow-visible lg:pb-0 [@media(min-width:1024px)_and_(max-height:900px)]:gap-4 [@media(min-width:1024px)_and_(max-height:900px)]:pt-2 [@media(min-width:1024px)_and_(max-height:780px)]:pt-[0.35rem]">
            {heroCards.map((card, index) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative flex min-h-[188px] w-[82vw] shrink-0 snap-center flex-col overflow-hidden rounded-[20px] border border-white/30 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.6)] backdrop-blur-[20px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.6)] lg:w-full lg:min-h-[212px] lg:rounded-[24px] lg:p-8 [@media(min-width:1024px)_and_(max-height:900px)]:min-h-[178px] [@media(min-width:1024px)_and_(max-height:900px)]:p-5 [@media(min-width:1024px)_and_(max-height:780px)]:min-h-[160px] [@media(min-width:1024px)_and_(max-height:780px)]:px-4 [@media(min-width:1024px)_and_(max-height:780px)]:py-[0.9rem]"
                style={{
                  "--card-accent": card.accent,
                  backgroundImage: `radial-gradient(circle at top left, ${hexToRgba(card.accent, 0.15)}, transparent 42%), linear-gradient(145deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55))`,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-90"
                  aria-hidden="true"
                  style={{
                    background: `linear-gradient(90deg, ${hexToRgba(card.accent, 0.95)} 0%, ${hexToRgba(card.accent, 0.42)} 52%, rgba(255,255,255,0.1) 100%)`,
                  }}
                />
                <span
                  className="pointer-events-none absolute -left-8 top-0 h-28 w-28 rounded-full opacity-75 blur-3xl"
                  aria-hidden="true"
                  style={{ backgroundColor: card.accent }}
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.16)_28%,rgba(255,255,255,0.03)_56%,rgba(255,255,255,0)_100%)]"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute inset-[1px] rounded-[23px] border border-white/40"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(15,23,42,0.22) 0.6px, transparent 0.8px)",
                    backgroundSize: "12px 12px",
                  }}
                />

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span
                    className="inline-flex items-center gap-[0.55rem] rounded-full border border-white/60 bg-white/55 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 shadow-[0_6px_16px_rgba(15,23,42,0.06)] [@media(min-width:1024px)_and_(max-height:780px)]:px-[0.65rem] [@media(min-width:1024px)_and_(max-height:780px)]:py-[0.38rem] [@media(min-width:1024px)_and_(max-height:780px)]:text-[9px]"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      aria-hidden="true"
                      style={{
                        backgroundColor: card.accent,
                        boxShadow: `0 0 14px ${card.accent}`,
                      }}
                    />
                    {card.eyebrow}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.24em] text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3
                  className="relative z-10 mt-3 text-[18px] leading-[1.1] tracking-[-0.5px] text-slate-900 lg:mt-5 lg:text-[24px] xl:text-[26px] [@media(min-width:1024px)_and_(max-height:780px)]:mt-3 [@media(min-width:1024px)_and_(max-height:780px)]:text-[18px]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="relative z-10 mt-2 max-w-[32ch] text-[12px] leading-[1.5] text-slate-600 lg:mt-3 lg:text-[14px] lg:leading-[1.65] [@media(min-width:1024px)_and_(max-height:780px)]:mt-[0.45rem] [@media(min-width:1024px)_and_(max-height:780px)]:text-[13px] [@media(min-width:1024px)_and_(max-height:780px)]:leading-[1.4]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {card.body}
                </p>

                <div className="relative z-10 mt-auto flex items-center justify-between gap-4 border-t border-slate-200/70 pt-4 lg:pt-6 [@media(min-width:1024px)_and_(max-height:780px)]:pt-[0.75rem]">
                  <span
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Explore Sector
                  </span>
                  <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[18px] leading-none text-[color:var(--card-accent)] shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:scale-110 lg:h-[52px] lg:w-[52px] lg:text-[22px]">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
