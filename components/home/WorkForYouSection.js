"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  revealLeft,
  revealRight,
  staggerCards,
} from "./homeMotion";

export default function WorkForYouSection() {
  const [showVideo, setShowVideo] = useState(false);
  const mediaRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = navigator.connection?.saveData;

    if (prefersReducedMotion || saveData || !mediaRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShowVideo(true);
        observer.disconnect();
      },
      { rootMargin: "160px 0px" },
    );

    observer.observe(mediaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-[14px] pb-[34px] pt-[26px] sm:px-[18px] lg:px-6">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-[14px] grid items-start gap-[18px] lg:grid-cols-[minmax(280px,1fr)_minmax(260px,0.7fr)]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 40)}
          >
            <h2 className="mt-2 max-w-[720px] text-[clamp(25px,7vw,36px)] leading-[1.08] text-[#202020] sm:text-[clamp(30px,2.8vw,44px)]">
              Supporting Indian manufacturing since{" "}
              <span className="text-[#e92127]">1977</span> with dependable
              industrial execution
            </h2>
          </motion.div>
          <motion.p
            className="mt-[2px] text-left text-[13px] leading-[1.6] text-[#7a7a7a]"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealRight}
            {...getAosProps("right", 120)}
          >
            Prem Industries combines decades of operational experience with
            modern production systems to support OEM sourcing, industrial
            manufacturing, and supply continuity for growing businesses.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-[10px] lg:grid-cols-[minmax(300px,1fr)_minmax(220px,0.42fr)]"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={staggerCards}
        >
          <motion.div
            className="relative min-h-[280px] overflow-hidden rounded-[4px] lg:min-h-[360px]"
            variants={revealLeft}
            {...getAosProps("left", 60)}
            ref={mediaRef}
          >
            {showVideo ? (
              <video
                className="block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/home/luxury-packaging.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/home/hero-packaging.jpg"
                alt="Prem Industries packaging operations"
                fill
                priority={false}
                sizes="(max-width: 1023px) 100vw, 70vw"
                className="object-cover"
              />
            )}
          </motion.div>

          <div className="grid gap-[10px] lg:grid-rows-[auto_1fr]">
            <motion.article
              className="rounded-[4px] bg-[#13224d] px-[18px] py-4 text-white"
              variants={revealCard}
              {...getAosProps("right", 120)}
            >
              <h3 className="m-0 text-[20px] font-bold text-white">
                Prem Industries
              </h3>
              <p className="mb-[10px] mt-2 text-[12px] leading-[1.5] text-white/90">
                Discuss your product requirement, production volume, and
                delivery timeline with our team.
              </p>
              <div className="grid gap-[6px]">
                <a
                  href="tel:+918447247227"
                  className="text-[13px] font-bold !text-[#dce7ff] transition-colors duration-200 hover:!text-white"
                >
                  +918447247227
                </a>
                <a
                  href="mailto:ecommerce@premindustries.in"
                  className="text-[13px] font-bold !text-[#dce7ff] transition-colors duration-200 hover:!text-white"
                >
                  ecommerce@premindustries.in
                </a>
                <Link
                  href="/contact"
                  className="mt-1 inline-flex w-fit items-center justify-center rounded-full border border-[#e92127] bg-[#e92127] px-[14px] py-2 text-[13px] tracking-[0.04em] !text-white transition-all duration-200 hover:-translate-y-[1px] hover:border-white hover:bg-white hover:!text-[#13224d]"
                >
                  Contact Form
                </Link>
              </div>
            </motion.article>

            <motion.div
              className="relative min-h-[164px] overflow-hidden rounded-[4px]"
              variants={revealRight}
              {...getAosProps("right", 180)}
            >
              <Image
                src="/home/Innovation.jpg"
                alt="Industrial operations"
                fill
                unoptimized
                sizes="(max-width: 991px) 100vw, 30vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
