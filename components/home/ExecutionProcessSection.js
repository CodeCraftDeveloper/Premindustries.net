"use client";

import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  revealLeft,
  staggerCards,
} from "./homeMotion";

const steps = [
  {
    id: "01",
    title: "Requirement Study",
    text: "We review drawings, material needs, annual volumes, and application demands before recommending the right manufacturing approach.",
  },
  {
    id: "02",
    title: "Production Planning",
    text: "Cross-functional teams align tooling, procurement, quality checkpoints, and dispatch planning to reduce downstream uncertainty.",
  },
  {
    id: "03",
    title: "Controlled Execution",
    text: "Projects move through documented workflows with traceability, in-process monitoring, and quality verification at key stages.",
  },
  {
    id: "04",
    title: "Repeat Improvement",
    text: "Post-dispatch reviews improve quality, speed, and commercial efficiency for repeat orders and long-term manufacturing partnerships.",
  },
];

export default function ExecutionProcessSection() {
  return (
    <section className="bg-white px-[14px] py-7 sm:px-[18px] lg:px-6">
      <div className="mx-auto max-w-[1380px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={revealLeft}
          {...getAosProps("left", 40)}
        >
          <p className="m-0 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c5302c]">
            DELIVERY MODEL
          </p>
          <h2 className="mt-[10px] text-[clamp(24px,2.5vw,34px)] leading-[1.2] text-[#161616]">
            How Prem Industries manages industrial programs with confidence.
          </h2>
        </motion.div>

        <motion.div
          className="mt-[18px] grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={staggerCards}
          {...getAosProps("right", 80)}
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              className="rounded-[8px] border border-[#ecebe8] bg-white p-4"
              variants={revealCard}
              {...getAosProps(index % 2 === 0 ? "right" : "left", 80 + index * 60)}
            >
              <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#c5302c] text-[12px] font-bold text-white">
                {step.id}
              </span>
              <h3 className="mb-2 mt-3 text-[18px] text-[#1d1d1d]">
                {step.title}
              </h3>
              <p className="m-0 text-[13px] leading-[1.6] text-[#5c5c5c]">
                {step.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
