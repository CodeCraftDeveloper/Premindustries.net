"use client";

import Head from "next/head";
import Link from "next/link";
import SectionReveal from "@/components/common/SectionReveal";
import { aboutSubpageLinks } from "@/lib/about/subpages";

function SectionRenderer({ section }) {
  const useWideIntro = section.fullWidthIntro;
  const bodyWidthClass = useWideIntro ? "w-full" : "space-y-5";
  const pointsWidthClass = useWideIntro ? "w-full space-y-3 pt-2" : "space-y-3 pt-2";

  if (section.type === "journey") {
    return (
      <section className="space-y-8">
        <div className={`${useWideIntro ? "w-full" : "max-w-3xl"} space-y-4`}>
          <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] text-brand-navy">
            {section.heading}
          </h2>
          {section.intro ? (
            <p className="text-[16px] leading-[1.85] text-brand-slate">
              {section.intro}
            </p>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#dfe6f2] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fd_100%)] p-6 shadow-[0_24px_65px_rgba(15,23,42,0.08)] md:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e92227_0%,#ff8a6a_100%)]" />
          <div className="grid gap-5 lg:grid-cols-2">
            {section.items.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[24px] border border-[#e3e9f4] bg-white/92 p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-brand-navy text-[11px] font-bold tracking-[0.14em] text-white shadow-[0_10px_22px_rgba(20,37,76,0.18)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-[1.45rem] font-semibold leading-[1.1] tracking-[-0.03em] text-brand-navy">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-[#e5ebf4]" />

                <p className="mt-5 text-[15px] leading-[1.9] text-brand-slate">
                  {item.body}
                </p>

                {item.supporting ? (
                  <p className="mt-4 text-[13px] leading-[1.8] text-brand-slate/82">
                    {item.supporting}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === "cards") {
    const shouldUseSlider = section.items.length > 1;

    return (
      <section className="space-y-8">
        <div className={`${useWideIntro ? "w-full" : "max-w-3xl"} space-y-4`}>
          <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] text-brand-navy">
            {section.heading}
          </h2>
          {section.intro ? (
            <p className="text-[16px] leading-[1.85] text-brand-slate">
              {section.intro}
            </p>
          ) : null}
        </div>

        {shouldUseSlider ? (
          <>
            <div className="grid gap-4 md:hidden">
              {section.items.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-[24px] border border-[#e3e9f4] bg-white p-5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e92227_0%,#ff7b61_100%)]" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-3 font-display text-[1.1rem] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-navy">
                        {item.title}
                      </h3>
                    </div>

                    <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[#dbe3f0] bg-white px-3 text-[10px] font-bold tracking-[0.16em] text-brand-navy/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-4 h-px w-full bg-[#e4eaf4]">
                    <span className="absolute left-0 top-1/2 h-1.5 w-10 -translate-y-1/2 rounded-full bg-brand-red" />
                  </div>

                  <p className="relative mt-4 text-[13px] leading-[1.62] text-brand-slate">
                    {item.body}
                  </p>

                  {item.supporting ? (
                    <p className="relative mt-3 border-t border-[#e4eaf4] pt-3 text-[11.5px] leading-[1.52] text-brand-slate/88">
                      {item.supporting}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="about-cards-rail hidden w-full md:relative md:left-1/2 md:block md:w-screen md:-translate-x-1/2 md:px-6 lg:px-10 xl:px-14 2xl:px-20">
              <div className="about-cards-track">
                {section.items.map((item, index) => (
                  <article
                    key={item.title}
                    className="about-cards-slide group relative flex min-h-[220px] flex-col overflow-hidden rounded-[28px] border border-[#e3e9f4] bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[#d8e0ee]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e92227_0%,#ff7b61_100%)]" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red">
                          {item.eyebrow}
                        </p>
                        <h3 className="mt-3 max-w-[16ch] font-display text-[1.25rem] font-semibold leading-[1.02] tracking-[-0.03em] text-brand-navy">
                          {item.title}
                        </h3>
                      </div>

                      <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[#dbe3f0] bg-white px-3 text-[11px] font-bold tracking-[0.18em] text-brand-navy/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative mt-5 h-px w-full bg-[#e4eaf4]">
                      <span className="absolute left-0 top-1/2 h-1.5 w-12 -translate-y-1/2 rounded-full bg-brand-red" />
                    </div>

                    <p className="relative mt-5 text-[13.5px] leading-[1.68] text-brand-slate">
                      {item.body}
                    </p>

                    {item.supporting ? (
                      <p className="relative mt-3 border-t border-[#e4eaf4] pt-3 text-[12px] leading-[1.58] text-brand-slate/88">
                        {item.supporting}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:gap-6">
            {section.items.map((item, index) => (
              <article
                key={item.title}
                className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-[28px] border border-[#e3e9f4] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#d8e0ee]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e92227_0%,#ff7b61_100%)]" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-[16ch] font-display text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.03em] text-brand-navy">
                      {item.title}
                    </h3>
                  </div>

                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[#dbe3f0] bg-white px-3 text-[11px] font-bold tracking-[0.18em] text-brand-navy/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-6 h-px w-full bg-[#e4eaf4]">
                  <span className="absolute left-0 top-1/2 h-1.5 w-16 -translate-y-1/2 rounded-full bg-brand-red" />
                </div>

                <p className="relative mt-6 text-[15px] leading-[1.9] text-brand-slate">
                  {item.body}
                </p>

                {item.supporting ? (
                  <p className="relative mt-4 border-t border-[#e4eaf4] pt-4 text-[13px] leading-[1.8] text-brand-slate/88">
                    {item.supporting}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>
    );
  }

  if (section.type === "timeline") {
    return (
      <section className="space-y-8">
        <div className={`${useWideIntro ? "w-full" : "max-w-3xl"} space-y-4`}>
          <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] text-brand-navy">
            {section.heading}
          </h2>
          {section.intro ? (
            <p className="text-[16px] leading-[1.85] text-brand-slate">
              {section.intro}
            </p>
          ) : null}
        </div>

        <div className="relative border-l border-brand-border pl-6 space-y-8">
          {section.items.map((item) => (
            <article key={item.title} className="relative">
              <span className="absolute -left-[10px] top-2 h-3 w-3 rounded-full bg-brand-red" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
                {item.eyebrow}
              </p>

              <h3 className="mt-2 font-display text-[1.3rem] font-semibold text-brand-navy">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] leading-[1.85] text-brand-slate">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className={`${useWideIntro ? "w-full" : "max-w-3xl"} space-y-4`}>
        <h2 className="font-display text-[2rem] font-bold tracking-[-0.03em] text-brand-navy">
          {section.heading}
        </h2>
        {section.intro ? (
          <p className="text-[16px] leading-[1.85] text-brand-slate">
            {section.intro}
          </p>
        ) : null}
      </div>

      <div className={bodyWidthClass}>
        {section.paragraphs?.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[16px] leading-[1.9] text-brand-slate"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {section.points?.length && (
        <ul className={pointsWidthClass}>
          {section.points.map((point) => (
            <li key={point} className="flex gap-3 text-[15px] text-brand-slate">
              <span className="mt-[8px] h-2 w-2 rounded-full bg-brand-red" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function AboutSubpageLayout({ pageKey, page }) {
  const isFullWidthPage = pageKey === "goel-group";
  const leadSection = isFullWidthPage ? page.sections?.[0] : null;
  const remainingSections = isFullWidthPage
    ? page.sections?.slice(1) || []
    : page.sections || [];
  const relatedLinks = aboutSubpageLinks.filter(
    (item) => !item.href.endsWith(pageKey),
  );

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="title" content={page.metaTitle} />
        <meta name="description" content={page.metaDescription} />
      </Head>

      <main className="bg-[linear-gradient(180deg,#f4f7fd_0%,#ffffff_32%,#f8fbff_100%)]">
        <SectionReveal
          className="relative overflow-hidden bg-[#0f2348] text-white"
          style={{ minHeight: "calc(100dvh - var(--site-header-height))" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_82%_18%,rgba(233,34,39,0.18),transparent_24%),linear-gradient(120deg,#10224b_0%,#17346a_58%,#0f2348_100%)]" />
          <div
            className="site-shell-tight relative z-10 flex min-h-[calc(100dvh-var(--site-header-height))] flex-col justify-center py-16 lg:py-20"
            style={{ minHeight: "calc(100dvh - var(--site-header-height))" }}
          >
            <Link
              href="/about"
              className="text-sm uppercase tracking-[0.22em] text-white/60 transition hover:text-white"
            >
              Back to About Us
            </Link>

            <div className="mt-10 max-w-4xl">
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white">
                {page.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                {page.description}
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-[1.9] text-white/58">
                {page.heroNote}
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {page.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl"
                >
                  <p className="font-display text-2xl font-bold leading-none tracking-[-0.03em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <section className="py-20">
          {isFullWidthPage ? (
            <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(260px,0.2fr)] lg:items-start xl:gap-14">
                <div className="space-y-16">
                  {leadSection ? (
                    <SectionRenderer section={leadSection} />
                  ) : null}
                </div>

                <aside className="space-y-6 lg:sticky lg:top-28">
                  <section className="rounded-2xl bg-brand-navy p-6 text-white shadow-[0_20px_50px_rgba(20,37,76,0.18)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                      {page.spotlight.label}
                    </p>
                    <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-white">
                      {page.spotlight.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      {page.spotlight.body}
                    </p>
                  </section>

                  <section className="rounded-2xl bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-brand-red">
                      Explore
                    </p>
                    <div className="mt-4 space-y-2">
                      {relatedLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm text-brand-navy transition hover:text-brand-red"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-2xl bg-gradient-to-br from-[#ef4a3a] to-brand-red p-6 text-white shadow-[0_18px_40px_rgba(233,34,39,0.2)]">
                    <h3 className="text-lg font-semibold">
                      Let&apos;s build something together
                    </h3>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
                      >
                        Contact
                      </Link>
                      <Link
                        href="/career"
                        className="inline-flex items-center justify-center rounded-full border border-white px-4 py-2 text-sm transition hover:bg-white/10"
                      >
                        Careers
                      </Link>
                    </div>
                  </section>
                </aside>
              </div>

              {remainingSections.length ? (
                <div className="mt-16 space-y-16">
                  {remainingSections.map((section) => (
                    <SectionRenderer key={section.heading} section={section} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="site-shell-tight grid gap-16 lg:grid-cols-[1fr_320px] lg:items-start">
              <div className="space-y-16">
                {remainingSections.map((section) => (
                  <SectionRenderer key={section.heading} section={section} />
                ))}
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28">
                <section className="rounded-2xl bg-brand-navy p-6 text-white shadow-[0_20px_50px_rgba(20,37,76,0.18)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                    {page.spotlight.label}
                  </p>
                  <h2 className="mt-3 text-xl font-bold tracking-[-0.02em] text-white">
                    {page.spotlight.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {page.spotlight.body}
                  </p>
                </section>

                <section className="rounded-2xl bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-red">
                    Explore
                  </p>
                  <div className="mt-4 space-y-2">
                    {relatedLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-brand-navy transition hover:text-brand-red"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="rounded-2xl bg-gradient-to-br from-[#ef4a3a] to-brand-red p-6 text-white shadow-[0_18px_40px_rgba(233,34,39,0.2)]">
                  <h3 className="text-lg font-semibold">
                    Let&apos;s build something together
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/career"
                      className="inline-flex items-center justify-center rounded-full border border-white px-4 py-2 text-sm transition hover:bg-white/10"
                    >
                      Careers
                    </Link>
                  </div>
                </section>
              </aside>
            </div>
          )}
        </section>
      </main>

      <style jsx global>{`
        .about-cards-rail {
          width: 100%;
          overflow-x: auto;
          padding: 0.25rem 0 0.75rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: #cfd9ea transparent;
          -webkit-overflow-scrolling: touch;
          background: transparent !important;
          box-shadow: none !important;
        }

        .about-cards-rail::-webkit-scrollbar {
          height: 8px;
        }

        .about-cards-rail::-webkit-scrollbar-track {
          background: transparent;
        }

        .about-cards-rail::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: #cfd9ea;
        }

        .about-cards-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(0, 100%);
          gap: 1rem;
        }

        .about-cards-slide {
          scroll-snap-align: start;
        }

        @media (min-width: 640px) {
          .about-cards-track {
            gap: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .about-cards-track {
            grid-auto-columns: minmax(0, calc((100% - 1.5rem) / 2));
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
