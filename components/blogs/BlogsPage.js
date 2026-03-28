"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/banners/banner1";
import SectionReveal from "@/components/common/SectionReveal";
import { blogPosts } from "@/lib/blogs/blogData";

function EventMetaPill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#dbe4f1] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-navy/72">
      {label}
    </span>
  );
}

export default function BlogsPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  if (!featuredPost) {
    return null;
  }

  return (
    <>
      <SectionReveal>
        <PageBanner title="Blogs & Events" bannerBg="/clients/banner.jpg" />
      </SectionReveal>

      <SectionReveal className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_34%,#f8fbff_100%)] py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(20,37,76,0.06),transparent_60%)]" />

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(260px,0.2fr)] lg:items-start xl:gap-14">
            <section className="mx-auto w-full max-w-[980px] px-2 sm:px-3">
              <div className="border-b border-[#e6ecf4] pb-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  Latest Updates
                </p>
                <h1 className="mt-3 max-w-[12ch] font-display text-[clamp(2.6rem,5vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-brand-navy">
                  Blogs, Events & Industry Updates
                </h1>
                <p className="mt-5 max-w-4xl text-[16px] leading-[1.9] text-brand-slate">
                  Explore recent exhibitions, event highlights, and business
                  updates from Prem Industries India Limited. This page is
                  designed as an editorial record of where we participate, what
                  we present, and how our manufacturing and packaging journey
                  connects with real industry conversations.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <EventMetaPill label="Industry Events" />
                  <EventMetaPill label="Exhibitions" />
                  <EventMetaPill label="Manufacturing Updates" />
                </div>
              </div>

              <article className="mt-10 grid gap-8 lg:grid-cols-[minmax(320px,0.44fr)_minmax(0,0.56fr)] lg:items-start lg:gap-10">
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="group block overflow-hidden rounded-[28px]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-[#eef3fb]">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </Link>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    Featured Event
                  </p>
                  <h2 className="mt-3 max-w-[14ch] font-display text-[clamp(2rem,3.2vw,3.1rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-brand-navy">
                    {featuredPost.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-slate/72">
                    <span>{featuredPost.dateLabel}</span>
                    <span>{featuredPost.venue}</span>
                    <span>{featuredPost.publishedLabel}</span>
                  </div>

                  <p className="mt-5 max-w-3xl text-[15px] leading-[1.95] text-brand-slate">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2">
                    {featuredPost.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex border-t border-[#e6ecf4] pt-4 text-[14px] leading-[1.8] text-brand-slate"
                      >
                        <span className="mt-[8px] mr-3 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-brand-red"
                    >
                      Read Full Event
                    </Link>
                    <a
                      href={featuredPost.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
                    >
                      Official Source
                    </a>
                  </div>
                </div>
              </article>

              <div className="mt-12 border-t border-[#e6ecf4] pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  Coverage Focus
                </p>
                <div className="mt-5 grid max-w-4xl gap-5 md:grid-cols-3">
                  <article className="border-t border-[#e6ecf4] pt-5">
                    <h3 className="font-display text-[1.15rem] font-bold leading-[1.15] tracking-[-0.02em] text-brand-navy">
                      Event presence
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-brand-slate">
                      Coverage of exhibitions, trade fairs, and industry-facing
                      participation by Prem Industries India Limited.
                    </p>
                  </article>

                  <article className="border-t border-[#e6ecf4] pt-5">
                    <h3 className="font-display text-[1.15rem] font-bold leading-[1.15] tracking-[-0.02em] text-brand-navy">
                      Capability updates
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-brand-slate">
                      Practical updates around packaging, manufacturing, buyer
                      engagement, and execution relevance.
                    </p>
                  </article>

                  <article className="border-t border-[#e6ecf4] pt-5">
                    <h3 className="font-display text-[1.15rem] font-bold leading-[1.15] tracking-[-0.02em] text-brand-navy">
                      Official references
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-brand-slate">
                      Event pages, fact sheets, and source-backed context to
                      keep each update credible and search-friendly.
                    </p>
                  </article>
                </div>
              </div>

              {otherPosts.length > 0 ? (
                <div className="mt-12 border-t border-[#e6ecf4] pt-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                    More Updates
                  </p>
                  <div className="mt-5 grid gap-6 md:grid-cols-2">
                    {otherPosts.map((post) => (
                      <article key={post.slug} className="border-t border-[#e6ecf4] pt-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                          {post.category}
                        </p>
                        <h3 className="mt-3 font-display text-[1.45rem] font-bold leading-[1.06] tracking-[-0.02em] text-brand-navy">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-[1.8] text-brand-slate">
                          {post.excerpt}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>

            <aside className="space-y-10 lg:sticky lg:top-28 lg:border-l lg:border-[#e3eaf4] lg:pl-6 xl:pl-8">
              <section className="w-full px-1 py-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  Current Feature
                </p>
                <h3 className="mt-3 font-display text-[1.65rem] font-bold leading-[1.04] tracking-[-0.03em] text-brand-navy">
                  AAHAR 2026, New Delhi
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-brand-slate">
                  Prem Industries India Limited participated in AAHAR 2026 at
                  Bharat Mandapam, New Delhi, presenting packaging and
                  manufacturing capability to food and hospitality buyers.
                </p>
              </section>

              <section className="w-full border-t border-[#dde5f1] px-1 pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  Quick Links
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-brand-red"
                  >
                    Read Featured Event
                  </Link>
                  <a
                    href={featuredPost.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
                  >
                    View Official Source
                  </a>
                  {featuredPost.sourceFactSheetUrl ? (
                    <a
                      href={featuredPost.sourceFactSheetUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-brand-navy px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
                    >
                      Open Fact Sheet
                    </a>
                  ) : null}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
