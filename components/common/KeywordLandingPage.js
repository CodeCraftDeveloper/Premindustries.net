"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Factory,
  MessageCircleMore,
  ShieldCheck,
} from "lucide-react";

const defaultHeroImage = "/sheetmetal/press-new.jpg";

const defaultSignals = [
  {
    icon: Factory,
    label: "Built for B2B Demand",
    copy: "Structured for repeat industrial sourcing, operational continuity, and quote-led engagement.",
  },
  {
    icon: ShieldCheck,
    label: "Quality-Led Delivery",
    copy: "Clear process language, dependable execution, and production-oriented customer support.",
  },
  {
    icon: Factory,
    label: "Enterprise-Ready",
    copy: "Designed to feel credible for OEM buyers, industrial procurement teams, and high-intent visitors.",
  },
];

export default function KeywordLandingPage({
  eyebrow,
  title,
  intro,
  sections = [],
  primaryCta,
  secondaryCta,
  whatsappCta,
  relatedLinks = [],
  internalLinks,
  relatedTitle = "Related Pages",
  internalLinksTitle = "More Internal Service Links",
  highlights = [],
  spotlightCards = [],
  heroImage,
  seo,
}) {
  const defaultWhatsappCta = {
    href: "https://wa.me/918447247227",
    label: "WhatsApp",
  };
  const activeWhatsappCta =
    whatsappCta === false ? null : whatsappCta || defaultWhatsappCta;

  const activeInternalLinks = internalLinks || relatedLinks;
  const enrichedInternalLinks = activeInternalLinks.map((item) => ({
    ...item,
    description: item.description || "Explore this related manufacturing page",
  }));
  const heroVisual = heroImage || seo?.image || defaultHeroImage;
  const displayTitle =
    typeof title === "string" && title.includes(" for ")
      ? title.replace(" for ", "\nfor ")
      : title;

  const trustItems =
    highlights.length > 0
      ? highlights.slice(0, 3).map((item, index) => ({
          icon: defaultSignals[index % defaultSignals.length].icon,
          label: `Signal ${index + 1}`,
          copy: item,
        }))
      : spotlightCards.length > 0
        ? spotlightCards.slice(0, 3).map((item, index) => ({
            icon: defaultSignals[index % defaultSignals.length].icon,
            label: item.title,
            copy: item.detail,
          }))
        : defaultSignals;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef3fb_0%,#f8fafd_34%,#ffffff_100%)]">
      <section className="relative h-[calc(100vh-var(--site-header-height))] min-h-[calc(100vh-var(--site-header-height))] w-screen overflow-hidden bg-[#0B0F14] text-white">
        <div className="absolute inset-0">
          <Image
            src={heroVisual}
            alt={title}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center opacity-30 scale-[1.04]"
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_right,rgba(255,90,79,0.12)_0%,transparent_60%)] lg:block" />

        <div className="relative z-10 flex h-full w-full items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                {eyebrow}
              </p>
              <h1 className="hero-title mt-4 max-w-4xl whitespace-pre-line font-display text-[clamp(2.4rem,5vw,5rem)] font-extrabold leading-[1.05] tracking-[-1.2px] text-[#f5f7fb]">
                {displayTitle}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
                {intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FF5A4F,#FF3B30)] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_rgba(255,90,79,0.35)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
                  >
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur-[10px] transition duration-300 hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
                {activeWhatsappCta ? (
                  <a
                    href={activeWhatsappCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(37,211,102,0.3)] bg-[rgba(37,211,102,0.15)] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#d9ffee] transition duration-300 hover:bg-[rgba(37,211,102,0.22)]"
                  >
                    <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                    <span>{activeWhatsappCta.label}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="rounded-[24px] border border-white/10 bg-[rgba(20,25,35,0.55)] p-5 backdrop-blur-[18px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
                  Quick navigation
                </p>
                <h2 className="mt-3 font-display text-[1.35rem] font-bold leading-[1.05] text-white">
                  {relatedTitle}
                </h2>
                <div className="mt-5 grid gap-2.5">
                  {relatedLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-start justify-between gap-3 rounded-[18px] border border-white/8 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white/86 transition duration-300 hover:translate-x-1.5 hover:bg-[rgba(255,255,255,0.08)]"
                    >
                      <span>
                        <span className="block text-sm font-semibold leading-[1.35] text-white">
                          {item.label}
                        </span>
                        {item.description ? (
                          <span className="mt-1 block text-[12px] leading-[1.55] text-white/58">
                            {item.description}
                          </span>
                        ) : null}
                      </span>
                      <ChevronRight
                        className="mt-1 h-4 w-4 shrink-0 text-white/54 transition group-hover:translate-x-0.5 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#0F1623] border-t border-white/10">
        <div className="grid w-full gap-6 px-6 py-10 sm:px-8 md:grid-cols-3 lg:px-12">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="flex items-start gap-4">
                <span className="inline-flex rounded-xl bg-white/10 p-3 text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-white">
                    {item.label}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {item.copy}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="w-full px-6 sm:px-8 lg:px-12">
        <section className="grid gap-10 py-16 lg:grid-cols-[1fr_320px] lg:gap-12 lg:py-20">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={section.heading}
                className="rounded-2xl border border-[#e6ecf5] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 pt-1 text-sm font-bold text-brand-red">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-[1.28rem] font-bold leading-[1.12] tracking-[-0.02em] text-brand-navy sm:text-[1.4rem]">
                      {section.heading}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-brand-slate">
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border border-[#d9e2f0] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.06)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                Why this page exists
              </p>
              <h2 className="mt-2 font-display text-[1.22rem] font-bold leading-tight text-brand-navy">
                Built for high-intent buyers
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                Designed for procurement teams and OEM decision makers that need
                fast clarity on fit, capability, and next steps.
              </p>
            </div>

            <div className="rounded-2xl bg-[#0B0F14] p-6 text-white shadow-[0_16px_34px_rgba(11,15,20,0.35)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
                Quick action
              </p>
              <div className="mt-4 grid gap-2.5">
                {primaryCta ? (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF5A4F,#FF3B30)] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:brightness-105"
                  >
                    {primaryCta.label}
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
                {activeWhatsappCta ? (
                  <a
                    href={activeWhatsappCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[rgba(37,211,102,0.35)] bg-[rgba(37,211,102,0.18)] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#d9ffee] transition duration-300 hover:bg-[rgba(37,211,102,0.24)]"
                  >
                    {activeWhatsappCta.label}
                  </a>
                ) : null}
              </div>
            </div>
          </aside>
        </section>

        <section className="pb-20">
          <h2 className="font-display text-2xl font-bold text-brand-navy">
            {internalLinksTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrichedInternalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-[#dbe4f2] bg-white p-5 shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(15,23,42,0.12)]"
              >
                <h3 className="text-[1.02rem] font-semibold text-gray-900">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-red">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .hero-overlay {
          background: linear-gradient(
            110deg,
            rgba(10, 15, 25, 0.75) 0%,
            rgba(10, 15, 25, 0.55) 40%,
            rgba(255, 90, 79, 0.15) 100%
          );
        }

        .hero-title {
          text-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </main>
  );
}
