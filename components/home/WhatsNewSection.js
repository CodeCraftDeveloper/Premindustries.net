"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getAosProps,
  homeViewport,
  motion,
  revealLeft,
  revealRight,
  staggerCards,
} from "./homeMotion";

const chimneyImages = [
  "/whatsnew/chimneys/2.jpeg",
  "/whatsnew/chimneys/8.webp",
  "/whatsnew/chimneys/9.webp",
  "/whatsnew/chimneys/1.jpeg",
];

const coolerImages = [
  "/whatsnew/coolers/cooler5.jpeg",
  "/whatsnew/coolers/cooler.jpeg",
  "/whatsnew/coolers/cooler2.jpeg",
  "/whatsnew/coolers/cooler3.jpeg",
];

export default function WhatsNewSection() {
  const [chimneyIndex, setChimneyIndex] = useState(0);
  const [coolerIndex, setCoolerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChimneyIndex((prev) => (prev + 1) % chimneyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Stagger the cooler slider changes by 2 seconds
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCoolerIndex((prev) => (prev + 1) % coolerImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="site-shell">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[800px] text-center md:mb-14">
          <motion.h2
            className="font-display text-[2rem] font-extrabold uppercase leading-tight text-brand-navy sm:text-[2.5rem] md:text-[2.85rem]"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 40)}
          >
            What&apos;s New at Prem?
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-[700px] text-sm leading-relaxed text-brand-slate sm:text-base font-medium"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealRight}
            {...getAosProps("right", 80)}
          >
            We keep our innovation game always on! See our latest arrivals,
            soon-to-be-launched products, technology, and more here.
          </motion.p>
        </div>

        {/* Two-Column Grid */}
        <motion.div
          className="grid grid-cols-1 overflow-hidden border border-brand-border/60 bg-white shadow-lg md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={staggerCards}
        >
          {/* Left card: Chimney */}
          <Link
            href="/redirects/whatsnew/chimney"
            className="group relative block aspect-[4/3] sm:aspect-[16/10] overflow-hidden cursor-pointer border-b border-brand-border/60 md:aspect-auto md:min-h-[440px] md:border-b-0 md:border-r"
          >
            {chimneyImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === chimneyIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Chimney segment image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Slide Indicators */}
            <div className="absolute right-4 top-4 z-30 flex gap-1.5 bg-black/25 px-2.5 py-1.5 rounded-full backdrop-blur-xs sm:right-6 sm:top-6">
              {chimneyImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === chimneyIndex ? "w-4 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Text details */}
            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-8 flex flex-col justify-end">
              <h3 className="font-display text-lg font-bold text-white leading-tight sm:text-2xl md:text-3xl">
                Now Entering Chimney and ODM Segment
              </h3>
              <p className="mt-2 text-xs text-white/90 font-medium sm:text-sm md:text-base">
                Innovation-led chimney solutions built for modern kitchens.
              </p>
            </div>
          </Link>

          {/* Right card: Coolers */}
          <Link
            href="/redirects/whatsnew/coolers"
            className="group relative block aspect-[4/3] sm:aspect-[16/10] overflow-hidden cursor-pointer md:aspect-auto md:min-h-[440px]"
          >
            {coolerImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === coolerIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Cooler segment image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Slide Indicators */}
            <div className="absolute right-4 top-4 z-30 flex gap-1.5 bg-black/25 px-2.5 py-1.5 rounded-full backdrop-blur-xs sm:right-6 sm:top-6">
              {coolerImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === coolerIndex ? "w-4 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Text details */}
            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-8 flex flex-col justify-end">
              <h3 className="font-display text-lg font-bold text-white leading-tight sm:text-2xl md:text-3xl">
                Coolers and OEM Segments
              </h3>
              <p className="mt-2 text-xs text-white/90 font-medium sm:text-sm md:text-base">
                High-performance cooler solutions built for reliable everyday
                use.
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
