"use client";

import Link from "next/link";
import {
  getAosProps,
  homeViewport,
  motion,
  revealLeft,
  revealRight,
} from "./homeMotion";

export default function HomeCtaSection() {
  return (
    <section className="bg-white px-4 pb-[34px] pt-[28px] sm:px-[18px] lg:px-6">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid items-center gap-[22px] rounded-[10px] bg-[linear-gradient(100deg,#101d2b_0%,#172b3f_100%)] px-[22px] py-6 text-white md:grid-cols-[minmax(260px,1.2fr)_minmax(220px,0.8fr)] md:px-8 md:py-[30px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 40)}
          >
            <p className="m-0 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ff9e8b]">
              NEXT STEP
            </p>
            <h2 className="my-[10px] text-[clamp(24px,2.5vw,34px)] leading-[1.2] text-white">
              Let&apos;s plan your next manufacturing program together.
            </h2>
            <p className="m-0 text-[14px] leading-[1.7] text-white/90">
              Share your drawings, target volumes, quality expectations, and
              timelines with our team to start a practical project discussion.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[10px]"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealRight}
            {...getAosProps("right", 100)}
          >
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] bg-[#c5302c] px-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-transform duration-200 hover:-translate-y-[1px]"
            >
              Request A Callback
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[5px] border border-white/40 px-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-white hover:text-white"
            >
              Know More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
