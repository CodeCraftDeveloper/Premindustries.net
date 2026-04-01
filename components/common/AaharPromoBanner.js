"use client";

import Image from "next/image";
import Link from "next/link";

export default function AaharPromoBanner() {
  return (
    <section className="bg-white px-4 pb-0 pt-[22px] sm:px-5 sm:pt-[14px] lg:px-8 lg:pt-[22px]">
      <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[8px] leading-none">
        <Image
          src="/aahar/AaharBanner2026.jpeg"
          alt="AAHAR 2026 banner"
          width={1920}
          height={500}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="px-[18px] pb-[10px] pt-[14px] text-center sm:px-[14px] sm:pb-[8px] sm:pt-[10px]">
        <h2 className="mb-[10px] text-[clamp(28px,2.6vw,52px)] font-extrabold leading-[1.1] tracking-[0.01em] text-[#0f1d3d]">
          AAHAR 2026
        </h2>
        <p className="mx-auto max-w-[1360px] text-[clamp(16px,1.1vw,36px)] leading-[1.35] text-[#27364f]">
          Visit Prem Industries India Limited at AAHAR 2026 to explore our
          latest sustainable packaging innovations.{" "}
          <Link href="/contact" className="font-bold !text-[#e12929]">
            CONNECT WITH OUR TEAM
          </Link>{" "}
          for product demos and business discussions.
        </p>
      </div>
    </section>
  );
}
