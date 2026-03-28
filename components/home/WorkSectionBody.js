"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  revealLeft,
  revealRight,
  revealUp,
  staggerCards,
} from "./homeMotion";

const tabs = [
  {
    id: "packaging",
    label: "PACKAGING SECTOR",
    title: ["PROTECTING YOUR", "PRODUCTS WITH", "INNOVATIVE SOLUTIONS."],
    mobileHeading: "Protecting your products with innovative solutions.",
    desktopTitle: ["Protecting your products", "with innovative solutions."],
    description:
      "For decades, we have been a trusted name in the packaging sector, specializing in high-quality solutions that cater to diverse needs. Our offerings include corrugated boxes, tapes, labels, rigid boxes, flexibles, and pouches. Committed to excellence, we ensure that your products are safely and attractively packaged every time.",
    image: "/home/sector-packagingsector.jpg",
    href: "/packaging",
  },
  {
    id: "steel",
    label: "STEEL SECTOR",
    title: ["FORGING STRENGTH", "AND PRECISION INTO", "EVERY STEEL PRODUCT."],
    mobileHeading: "Forging strength and precision into every steel product.",
    desktopTitle: [
      "Forging strength and precision",
      "into every steel product.",
    ],
    description:
      "As a prominent player in the steel industry, we deliver high-grade steel solutions engineered for strength, consistency, and long-term performance. With modern processing capabilities and strict quality systems, we support demanding industrial applications while continuing to drive innovation across our product range.",
    image: "/home/sector-steelsector.jpg",
    href: "/sheet-metal-components",
  },
  {
    id: "retail",
    label: "RETAIL SECTOR",
    title: ["DELIVERING QUALITY", "AND TRUST ACROSS", "DIVERSE NEEDS."],
    mobileHeading: "Delivering quality and trust across diverse needs.",
    desktopTitle: ["Delivering quality and trust", "across diverse needs."],
    description:
      "In the retail sector, we focus on delivering reliable products, seamless customer experience, and value-driven service at every touchpoint. Our approach combines product quality, efficient supply support, and customer-first execution to meet evolving market expectations across categories.",
    image: "/home/sector-retailsector.jpg",
    ctaLabel: "In Our Network",
  },
  {
    id: "construction",
    label: "CONSTRUCTION SECTOR",
    title: ["BUILDING LANDMARKS", "WITH INNOVATION", "AND INTEGRITY."],
    mobileHeading: "Building landmarks with innovation and integrity.",
    desktopTitle: ["Building landmarks", "with innovation and integrity."],
    description:
      "In the construction sector, we execute projects with a strong focus on structural integrity, timelines, and workmanship excellence. From planning to delivery, our teams bring technical expertise, dependable coordination, and quality-driven processes to build spaces that stand the test of time.",
    image: "/home/sector-constructionsector.jpg",
    ctaLabel: "In Our Network",
  },
  {
    id: "sheet-metal",
    label: "SHEET METAL",
    title: ["PRECISION SHEET", "METAL SOLUTIONS", "BUILT TO SCALE."],
    mobileHeading: "Precision sheet metal solutions built to scale.",
    desktopTitle: ["Precision sheet metal", "solutions built to scale."],
    description:
      "Prem Industries delivers high-precision sheet metal components for automotive, appliance, industrial, and infrastructure applications. Backed by modern fabrication, press shop capability, and strict quality controls, we manufacture durable parts with consistency at scale.",
    image: "/home/sector-steelsector.jpg",
    href: "/sheet-metal-components",
  },
  {
    id: "injection-moulding",
    label: "INJECTION MOULDING",
    title: ["HIGH-VOLUME", "PLASTIC PARTS WITH", "CONSISTENT PRECISION."],
    mobileHeading: "High-volume plastic parts with consistent precision.",
    desktopTitle: ["High-volume plastic parts", "with consistent precision."],
    description:
      "Our injection moulding business combines modern machinery, process discipline, and scalable production to deliver reliable plastic components across consumer, industrial, and appliance categories. We focus on repeatability, finish quality, and dependable delivery.",
    image: "/home/Innovation.jpg",
    href: "/injection-molding",
  },
];

export default function ProjectsTab() {
  const [activeTab, setActiveTab] = useState("packaging");
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section
      id="sectors"
      className="relative z-20 bg-transparent px-3 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14"
      style={{ marginTop: "-11rem" }}
    >
      <div className="site-shell">
        <motion.div
          className="relative border border-[#d8dce6] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          style={{ zIndex: 20, borderColor: "#000000" }}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={revealUp}
          {...getAosProps("up", 40)}
        >
          <div className="relative z-20 bg-white">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
              initial="hidden"
              whileInView="show"
              viewport={homeViewport}
              variants={staggerCards}
              {...getAosProps("up", 80)}
            >
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`font-display h-[64px] border px-3 text-[11px] font-bold uppercase tracking-[0.04em] transition-colors duration-200 sm:h-[82px] sm:px-4 sm:text-[15px] sm:tracking-[0.06em] ${
                      isActive
                        ? "bg-brand-red text-white"
                        : "bg-white text-brand-navy hover:bg-brand-surface"
                    }`}
                    style={{ borderColor: "#000000" }}
                    variants={revealCard}
                  >
                    {tab.label}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          <div className="relative z-10 grid items-center gap-8 bg-white px-4 py-7 sm:px-8 sm:py-9 md:px-12 md:py-10 lg:grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)] lg:gap-10 lg:px-[50px] lg:py-[50px] xl:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]">
            <motion.div
              key={`${current.id}-copy`}
              className="px-0 py-1 sm:px-2 sm:py-2 lg:px-2 lg:py-8 lg:pr-6 xl:px-6 xl:pr-10"
              initial="hidden"
              animate="show"
              variants={revealLeft}
              {...getAosProps("left", 120)}
            >
              <h3
                className="sector-title font-display max-w-[720px] text-[clamp(1.9rem,7vw,2.75rem)] font-semibold leading-[1.05] tracking-normal text-brand-navy sm:text-[3rem] sm:leading-[1.06] lg:max-w-[1020px] xl:max-w-[1120px]"
              >
                <span className="block md:hidden">{current.mobileHeading}</span>
                <span className="hidden md:block">
                  {current.desktopTitle.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </h3>

              <p className="mt-5 max-w-[720px] text-[15px] leading-[1.72] text-brand-slate sm:mt-7 sm:text-[16px] sm:leading-[1.8] lg:mt-9 lg:max-w-[760px] lg:text-[17px] lg:leading-[1.82] xl:max-w-[820px]">
                {current.description}
              </p>

              <div className="mt-6 pt-1 sm:mt-8 sm:pt-2 lg:mt-14 lg:pt-3">
                {!current.href ? (
                  <span className="font-display inline-flex items-center gap-2 px-1 py-1 text-[14px] font-bold uppercase tracking-[0.08em] !text-brand-red sm:text-[16px]">
                    {current.ctaLabel || "Featured"}
                  </span>
                ) : current.external ? (
                  <a
                    href={current.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex items-center gap-2 px-1 py-1 text-[14px] font-bold uppercase tracking-[0.08em] !text-brand-red sm:text-[16px]"
                  >
                    Read More
                    <span aria-hidden="true">&rsaquo;</span>
                  </a>
                ) : (
                  <Link
                    href={current.href}
                    className="font-display inline-flex items-center gap-2 px-1 py-1 text-[14px] font-bold uppercase tracking-[0.08em] !text-brand-red sm:text-[16px]"
                  >
                    {current.ctaLabel || "Read More"}
                    <span aria-hidden="true">&rsaquo;</span>
                  </Link>
                )}
              </div>
            </motion.div>

            <motion.div
              key={`${current.id}-image`}
              className="h-[240px] w-full overflow-hidden sm:h-[320px] md:h-[390px] lg:h-[430px]"
              initial="hidden"
              animate="show"
              variants={revealRight}
              {...getAosProps("right", 180)}
            >
              <Image
                src={current.image}
                alt={current.label}
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .sector-title {
            font-size: 48px !important;
            line-height: 1.05 !important;
            letter-spacing: -0.025em !important;
            max-width: 980px !important;
          }
        }

        @media (min-width: 1280px) {
          .sector-title {
            font-size: 54px !important;
            line-height: 1.03 !important;
            max-width: 1040px !important;
          }
        }
      `}</style>
    </section>
  );
}
