"use client";

import Image from "next/image";

const keypoints = [
  {
    title: "Trusted Industrial Partner",
    detail:
      "Built on dependable delivery, transparent communication, and long-term customer relationships.",
    icon: "/about/keyword-trust.png",
  },
  {
    title: "Quality Driven Systems",
    detail:
      "Structured workflows, checkpoints, and process discipline designed for repeatable manufacturing outcomes.",
    icon: "/about/keyword-secure.png",
  },
  {
    title: "Focused On Execution",
    detail:
      "A practical, delivery-minded culture that turns planning into consistent production performance.",
    icon: "/about/keyword-mission.png",
  },
];

const Keypoints = () => {
  return (
    <section className="py-6 pb-12 sm:py-8 sm:pb-16 lg:py-10 lg:pb-20">
      <div className="site-shell-tight">
        <div className="mb-7 text-center sm:mb-9">
          <span className="inline-flex rounded-full bg-brand-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
            Core Strengths
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.15rem)] font-black uppercase leading-[0.96] tracking-[-0.03em] text-brand-navy">
            What Sets Prem Industries Apart
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {keypoints.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[24px] border border-[#dbe2f0] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fd_100%)] px-6 py-7 shadow-[0_18px_42px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.12)] sm:px-7 sm:py-8"
            >
              <div
                className="absolute left-0 top-0 h-1.5 w-full bg-[linear-gradient(90deg,#e11d2e_0%,#f97316_100%)]"
                aria-hidden="true"
              />

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-brand-surface shadow-[inset_0_0_0_1px_rgba(20,37,76,0.06)]">
                  <Image src={item.icon} alt={item.title} height={48} width={48} />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[1.55rem] font-black uppercase leading-[1.02] tracking-[-0.02em] text-brand-navy">
                {item.title}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.8] text-brand-slate sm:text-[15px]">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keypoints;
