"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const values = [
  {
    title: "Precision-Driven Manufacturing",
    body: "We focus on high-precision manufacturing across sheet metal fabrication and injection moulding, ensuring dimensional accuracy, repeatability, and consistent product quality for every production cycle.",
    stat: "01",
  },
  {
    title: "Scalable Production Capability",
    body: "Our processes are designed for both low-volume prototyping and high-volume manufacturing, helping businesses scale efficiently with reliable lead times and optimized production workflows.",
    stat: "02",
  },
  {
    title: "Quality & Compliance Standards",
    body: "We follow strict quality control systems, industry standards, and inspection protocols to deliver defect-free components that meet global manufacturing and export requirements.",
    stat: "03",
  },
  {
    title: "Trusted Industrial Partnerships",
    body: "We build long-term partnerships with OEMs, suppliers, and industrial clients by ensuring transparency, on-time delivery, and consistent engineering support.",
    stat: "04",
  },
];

const impactPoints = [
  "Repeatable process control",
  "OEM-ready execution discipline",
  "Scale with delivery confidence",
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: 0.3 },
  },
};

export default function Values() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 lg:py-16">
      <div className="site-shell-tight">
        <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#f7f8fc_0%,#edf2fb_45%,#ffffff_100%)] px-6 py-10 shadow-[0_28px_70px_rgba(15,23,42,0.12)] lg:px-10">
          {/* Background Glow */}
          <div
            className="absolute right-[-80px] top-[-90px] h-[240px] w-[240px] rounded-full bg-blue-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-110px] left-[-90px] h-[260px] w-[260px] rounded-full bg-red-500/10 blur-3xl"
            aria-hidden="true"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative grid gap-10 xl:grid-cols-[0.9fr_1.1fr]"
          >
            {/* LEFT CONTENT */}
            <motion.div variants={fadeUp} className="xl:sticky xl:top-32">
              <span className="inline-flex rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red shadow-sm">
                Manufacturing Excellence
              </span>

              <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-brand-navy">
                The Principles
                <br />
                Behind Every
                <br />
                Delivery Cycle
              </h2>

              <p className="mt-5 max-w-[460px] text-[15px] leading-[1.9] text-brand-slate">
                Our values define how we engineer, execute, and deliver across
                sheet metal and injection moulding manufacturing at scale.
              </p>

              <div className="mt-8 space-y-3">
                {impactPoints.map((item, i) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-3 rounded-xl border border-brand-navy/10 bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                      +
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT GRID */}
            <motion.div
              variants={container}
              className="grid gap-6 md:grid-cols-2"
            >
              {values.map((item) => (
                <motion.article
                  key={item.stat}
                  variants={fadeUp}
                  initial="rest"
                  whileHover={prefersReducedMotion ? "rest" : "hover"}
                  animate="rest"
                  className="group relative flex flex-col justify-between rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm"
                >
                  {/* Top Line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#172b63] via-[#4b3f98] to-[#e11d2e]" />

                  <div className="flex items-start justify-between">
                    <h3 className="min-h-[60px] text-[1.3rem] font-black uppercase leading-tight text-brand-navy">
                      {item.title}
                    </h3>

                    <span className="text-2xl font-black text-brand-navy/10">
                      {item.stat}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-brand-slate">
                    {item.body}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mt-12 rounded-2xl bg-brand-navy p-6 text-white shadow-lg"
          >
            <div className="grid gap-4 lg:grid-cols-2 items-center">
              <p className="text-lg font-bold uppercase">
                Built for precision tooling, custom fabrication & large-scale
                production.
              </p>
              <p className="text-sm text-white/80">
                We combine engineering discipline, advanced manufacturing, and
                strict quality control to ensure every production cycle delivers
                consistent results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
