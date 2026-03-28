"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs/blogData";

export default function RecentBlogsSection() {
  const featuredPost = blogPosts[0];

  if (!featuredPost) {
    return null;
  }

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="site-shell-tight">
        <div className="rounded-[30px] border border-brand-border/70 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] px-6 py-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:px-8 sm:py-9 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:items-center lg:gap-9">
            <div>
              <span className="inline-flex rounded-full bg-brand-red/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                Latest Blogs
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.1rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-brand-navy">
                Recent events and updates from Prem Industries India Limited.
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-brand-slate">
                We are building a dedicated blogs and events stream to share
                recent exhibitions, business updates, and important milestones
                across Prem Industries India Limited and its broader business
                ecosystem.
              </p>

              <article className="mt-7 rounded-[24px] border border-brand-border bg-white p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                  {featuredPost.category}
                </p>
                <h3 className="mt-3 font-display text-[1.7rem] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-brand-navy">
                  {featuredPost.title}
                </h3>
                <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-slate">
                  {featuredPost.dateLabel}
                </p>
                <p className="mt-4 text-[15px] leading-[1.8] text-brand-slate">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-brand-navy px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-brand-red"
                  >
                    Read Event Update
                  </Link>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center justify-center rounded-full border border-brand-navy px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.1em] text-brand-navy transition hover:bg-brand-navy hover:text-white"
                  >
                    View All Blogs
                  </Link>
                </div>
              </article>
            </div>

            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="group block overflow-hidden rounded-[28px] shadow-[0_24px_55px_rgba(20,37,76,0.16)]"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,36,0.05)_0%,rgba(8,18,36,0.62)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/72">
                    Recent Event
                  </p>
                  <p className="mt-2 font-display text-[1.45rem] font-extrabold uppercase leading-[1.02] tracking-[-0.02em]">
                    AAHAR 2026
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.7] text-white/82">
                    Bharat Mandapam, New Delhi
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
