"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  revealLeft,
  staggerCards,
} from "@/components/home/homeMotion";
import { blogPosts } from "@/lib/blogs/blogData";

export default function RecentBlogsSection() {
  const featuredPost = blogPosts[0];

  if (!featuredPost) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="site-shell">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-14">
          <motion.p
            className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 30)}
          >
            <span className="inline-block h-[9px] w-[9px] bg-brand-red" />
            News &amp; Journal
            <span className="inline-block h-[9px] w-[9px] bg-brand-red" />
          </motion.p>
          <motion.h2
            className="font-display text-[2rem] font-extrabold uppercase leading-tight text-brand-navy sm:text-[2.5rem] md:text-[2.85rem]"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 50)}
          >
            Latest From The Journal
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-[700px] text-sm font-medium leading-relaxed text-brand-slate sm:text-base"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 70)}
          >
            Event participation, industry coverage, and milestone records from
            Prem Industries India Limited — detailed plainly, backed by official
            references.
          </motion.p>
        </div>

        {/* Featured story */}
        <motion.div
          className="grid overflow-hidden rounded-panel border border-brand-border/70 bg-white shadow-panel md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={staggerCards}
          {...getAosProps("up", 40)}
        >
          {/* Media */}
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group relative block min-h-[240px] overflow-hidden bg-brand-navy sm:min-h-[340px] md:min-h-[480px]"
            aria-label={`Read ${featuredPost.title}`}
          >
            <Image
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            <span className="absolute left-0 top-0 inline-flex items-center gap-2 bg-brand-red px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              <span className="h-1.5 w-1.5 rotate-45 bg-white" />
              Featured
            </span>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/85">
                <span>{featuredPost.dateLabel}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                <span>{featuredPost.venue}</span>
              </div>
            </div>
          </Link>

          {/* Content */}
          <motion.div
            className="flex flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12"
            variants={revealCard}
            {...getAosProps("up", 120)}
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(20,37,76,0.08) 1.2px, transparent 1.2px)",
              backgroundSize: "18px 18px",
            }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">
              {featuredPost.category}
            </p>

            <h3 className="mt-3 font-display text-[clamp(1.45rem,2.6vw,2.35rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-brand-navy">
              {featuredPost.title}
            </h3>

            <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.75] text-brand-slate">
              {featuredPost.excerpt}
            </p>

            {/* Quick facts strip */}
            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-brand-border/80 pt-6">
              {featuredPost.quickFacts.map((fact) => (
                <div key={fact.label} className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-slate/70">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 font-display text-[13.5px] font-extrabold leading-snug text-brand-navy sm:text-[15px]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[5px] bg-brand-red px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-transform duration-200 hover:-translate-y-[1px]"
              >
                Read The Full Coverage
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>
              <Link
                href="/blogs"
                className="group inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-[5px] border border-brand-navy/20 px-5 text-[12px] font-bold uppercase tracking-[0.08em] text-brand-navy transition-colors duration-200 hover:border-brand-navy/50"
              >
                View All Blogs
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}