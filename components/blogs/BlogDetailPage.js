"use client";

import Image from "next/image";
import Link from "next/link";
import FaqBlock from "@/components/common/FaqBlock";
import SectionReveal from "@/components/common/SectionReveal";

function MetaPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/78 backdrop-blur-sm">
      {children}
    </span>
  );
}

export default function BlogDetailPage({ post }) {
  return (
    <>
      <SectionReveal
        className="relative overflow-hidden bg-[linear-gradient(135deg,#081a38_0%,#112852_52%,#182d5d_100%)] text-white"
        style={{ minHeight: "calc(100dvh - var(--site-header-height))" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(233,34,39,0.18),transparent_24%)]" />

        <div
          className="site-shell-tight relative z-[2] flex min-h-[calc(100dvh-var(--site-header-height))] flex-col justify-center py-10 sm:py-12 lg:py-14"
          style={{ minHeight: "calc(100dvh - var(--site-header-height))" }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.88fr)] lg:items-center lg:gap-10">
            <div className="max-w-3xl">
              <Link
                href="/blogs"
                className="inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-white/62 transition hover:text-white"
              >
                Back To Blogs
              </Link>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <MetaPill>{post.category}</MetaPill>
                <MetaPill>{post.dateLabel}</MetaPill>
              </div>

              <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(2.15rem,4.2vw,4rem)] font-extrabold leading-[0.94] tracking-[-0.04em] text-white">
                {post.title}
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.8] text-white/78">
                {post.excerpt}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {post.quickFacts?.map((fact) => (
                  <article
                    key={fact.label}
                    className="rounded-[20px] border border-white/12 bg-white/8 px-4 py-3.5 backdrop-blur-sm"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/54">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-[13px] font-semibold leading-[1.45] text-white">
                      {fact.value}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[38px] bg-[radial-gradient(circle,rgba(233,34,39,0.16)_0%,rgba(233,34,39,0)_70%)] blur-2xl" />
              <article className="relative overflow-hidden p-1">
                <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-contain object-center"
                    />
                </div>

                <div className="mt-3 flex items-center justify-end">
                  <a
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/72 transition hover:text-white"
                  >
                    <span>Official Source</span>
                    <span aria-hidden="true">+</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_34%,#f8fbff_100%)] py-12 sm:py-14 lg:py-18">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(20,37,76,0.05),transparent_60%)]" />
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(260px,0.2fr)] lg:items-start xl:gap-14">
          <article className="relative mx-auto w-full max-w-[980px] overflow-hidden px-2 sm:px-3">
            <div className="border-b border-[#e6ecf4] pb-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                Event Overview
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.8rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-brand-navy">
                Prem Industries India Limited at AAHAR 2026
              </h2>
              <p className="mt-4 max-w-4xl text-[16px] leading-[1.9] text-brand-slate">
                Prem Industries India Limited participated in AAHAR 2026 in New
                Delhi and presented packaging and manufacturing capability at
                the event.
              </p>
            </div>

            <div className="py-8 sm:py-9">
              <div className="space-y-6">
                {post.body.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "max-w-3xl font-display text-[clamp(1.4rem,2vw,1.9rem)] leading-[1.55] tracking-[-0.028em] text-brand-navy"
                        : "max-w-3xl text-[15px] leading-[2] text-brand-slate"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {post.sections?.map((section) => (
                <section
                  key={section.heading}
                  className="mt-12 border-t border-[#e6ecf4] pt-8"
                >
                  <h3 className="max-w-3xl font-display text-[1.75rem] font-bold leading-[1.08] tracking-[-0.035em] text-brand-navy">
                    {section.heading}
                  </h3>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-3xl text-[15px] leading-[1.95] text-brand-slate"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.points?.length ? (
                    <ul className="mt-6 grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex border-t border-[#e6ecf4] pt-4 text-[14px] leading-[1.8] text-brand-slate"
                        >
                          <span className="mt-[8px] mr-3 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="mt-9 border-t border-[#e6ecf4] pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  Key Highlights
                </p>
                <div className="mt-5 grid max-w-4xl gap-5 md:grid-cols-3">
                  {post.highlights.map((highlight, index) => (
                    <article
                      key={highlight}
                      className="relative border-t border-[#e6ecf4] pt-5"
                    >
                      <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-brand-surface px-3 text-[11px] font-bold tracking-[0.14em] text-brand-navy">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-4 text-[14px] leading-[1.8] text-brand-slate">
                        {highlight}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </article>

          <aside className="space-y-10 lg:sticky lg:top-28 lg:border-l lg:border-[#e3eaf4] lg:pl-6 xl:pl-8">
            <section className="w-full px-1 py-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                Official Reference
              </p>
              <p className="mt-3 text-[15px] leading-[1.8] text-brand-slate">
                This event update is based on the official AAHAR 2026 microsite
                and ITPO fact sheet materials.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-brand-red"
                >
                  Visit Event Page
                </a>
                <a
                  href={post.sourceFactSheetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
                >
                  Open Fact Sheet
                </a>
              </div>
            </section>

            <section className="w-full border-t border-[#dde5f1] px-1 pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                Next Step
              </p>
              <h2 className="mt-3 font-display text-[1.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-brand-navy">
                {post.ctaTitle}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-brand-slate">
                {post.ctaBody}
              </p>
              {post.ctaPoints?.length ? (
                <ul className="mt-5 space-y-3">
                  {post.ctaPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start text-[14px] leading-[1.75] text-brand-slate"
                    >
                      <span className="mt-[8px] mr-3 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[#cf171d]"
                >
                  Contact Prem
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-navy hover:text-white"
                >
                  Back To Blogs
                </Link>
              </div>
            </section>
          </aside>
          </div>
        </div>
      </SectionReveal>

      {post.faq?.length ? (
        <SectionReveal>
          <FaqBlock
            title="Event FAQs"
            intro="Find practical answers about AAHAR 2026, the official venue, the event dates, and how Prem Industries India Limited used the exhibition to connect around packaging and manufacturing conversations."
            faqs={post.faq}
          />
        </SectionReveal>
      ) : null}
    </>
  );
}
