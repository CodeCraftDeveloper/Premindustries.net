"use client";

import CountUp from "react-countup";
import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  staggerCards,
} from "./homeMotion";

const stats = [
  { value: 50, label: "Years of Experience" },
  { value: 100, label: "Advanced Machinery" },
  { value: 2000, label: "B2B Partners" },
  { value: 1000, label: "Professionals" },
];

export default function FunFact({ tone = "light" }) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-brand-navy py-6 sm:py-8 lg:py-10" : "bg-white py-6 sm:py-8 lg:py-10"}>
      <div className="w-full px-2 sm:px-3 lg:px-4">
        <motion.div
          className="grid w-full gap-2 sm:gap-3 lg:gap-4 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
          variants={staggerCards}
          {...getAosProps("up", 40)}
        >
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              className={
                dark
                  ? "w-full rounded-panel border-0 bg-transparent px-3 py-5 text-center shadow-none sm:px-4 sm:py-6 lg:px-5 lg:py-7"
                  : "w-full rounded-panel border-0 bg-transparent px-3 py-5 text-center shadow-none sm:px-4 sm:py-6 lg:px-5 lg:py-7"
              }
              variants={revealCard}
              {...getAosProps(index % 2 === 0 ? "up" : "right", 60 + index * 50)}
            >
              <h2
                className={dark ? "font-display font-black text-white" : "font-display font-black text-brand-navy"}
                style={{ fontSize: "clamp(2.5rem, 4.8vw, 4.25rem)", lineHeight: 1 }}
              >
                <CountUp end={item.value} duration={10} />+
              </h2>
              <p
                className={dark ? "mt-3 font-semibold uppercase text-white sm:mt-4" : "mt-3 font-semibold uppercase text-brand-navy sm:mt-4"}
                style={{ fontSize: "clamp(1.1rem, 1.9vw, 1.5rem)", lineHeight: 1.2, letterSpacing: "0.12em" }}
              >
                {item.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
