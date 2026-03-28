"use client";

import Link from "next/link";
import PageBanner from "@/components/banners/banner1";
import SectionReveal from "@/components/common/SectionReveal";

const talentAreas = [
  {
    title: "Production & Operations",
    body: "Roles across shop-floor planning, execution control, dispatch coordination, and daily manufacturing discipline.",
  },
  {
    title: "Quality & Process",
    body: "Teams focused on inspection systems, process control, documentation, traceability, and continuous improvement.",
  },
  {
    title: "Engineering & Tooling",
    body: "Opportunities in development support, machine readiness, maintenance planning, and production problem-solving.",
  },
  {
    title: "Sales & Customer Programs",
    body: "Customer-facing roles that align quotations, onboarding, coordination, and long-term account growth.",
  },
];

const valuePoints = [
  "Structured industrial environment with process-driven execution",
  "Cross-functional exposure across manufacturing, OEM supply, and operations",
  "Growth opportunities backed by long-term business expansion",
  "People-first culture built on accountability, discipline, and practical learning",
];

const hiringSteps = [
  "Share your profile or CV with the role or function you are targeting.",
  "Our team reviews experience fit, technical strengths, and business alignment.",
  "Shortlisted candidates are contacted for discussion, evaluation, and next steps.",
];

export default function CareerPage() {
  return (
    <>
      <SectionReveal>
        <PageBanner title="Careers" bannerBg="/about/banner.jpg" />
      </SectionReveal>

      <SectionReveal className="bg-[linear-gradient(180deg,#f6f8fc_0%,#ffffff_100%)] py-12 sm:py-14 lg:py-18">
        <div className="site-shell-tight grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-start lg:gap-10">
          <div>
            <span className="inline-flex rounded-full bg-brand-red/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
              Build With Prem
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-brand-navy">
              Careers for people who want to build disciplined industrial work.
            </h1>
            <p className="mt-5 max-w-3xl text-[15px] leading-[1.9] text-brand-slate sm:text-[16px]">
              Prem Industries is growing across manufacturing, OEM support,
              quality systems, and customer-led execution. We look for people
              who value accountability, operational clarity, and long-term
              contribution inside a process-oriented industrial business.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:info@premindustries.in?subject=Career%20Application%20-%20Prem%20Industries"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#cf171d]"
              >
                Send Your CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Talk To HR
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[26px] bg-brand-navy px-6 py-6 text-white shadow-[0_22px_55px_rgba(20,37,76,0.18)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Work Environment
              </p>
              <p className="mt-3 font-display text-[1.9rem] font-extrabold uppercase leading-none tracking-[-0.04em]">
                Manufacturing-first
              </p>
              <p className="mt-3 text-[14px] leading-[1.75] text-white/82">
                Built for operators, engineers, planners, and business teams who
                want structured industrial execution.
              </p>
            </div>

            <div className="rounded-[26px] border border-brand-border bg-white px-6 py-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                What Matters Here
              </p>
              <ul className="mt-4 space-y-3">
                {valuePoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-[1.7] text-brand-slate"
                  >
                    <span className="mt-[7px] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="site-shell-tight">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-brand-surface px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
              Where You Can Contribute
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-brand-navy">
              Core career paths across operations, quality, engineering, and growth.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {talentAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[24px] border border-brand-border bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fd_100%)] px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
              >
                <span className="inline-flex rounded-full bg-brand-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
                  Role Area
                </span>
                <h3 className="mt-4 font-display text-[1.45rem] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-brand-navy">
                  {area.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-brand-slate">
                  {area.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-[#14254c] py-12 text-white sm:py-14 lg:py-16">
        <div className="site-shell-tight grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,1.05fr)] lg:items-start">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/74">
              Hiring Process
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-white">
              Simple, direct, and built around role fit.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-white/78">
              We value clarity and practical alignment. If your background fits
              our work environment, our team will connect with you for the next
              stage.
            </p>
          </div>

          <div className="grid gap-4">
            {hiringSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[22px] border border-white/12 bg-white/6 px-5 py-5"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/54">
                  Step 0{index + 1}
                </div>
                <p className="mt-3 text-[15px] leading-[1.8] text-white">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="site-shell-tight rounded-[30px] bg-[linear-gradient(135deg,#10224b_0%,#17346a_58%,#e92227_100%)] px-6 py-8 text-white shadow-[0_24px_60px_rgba(20,37,76,0.18)] sm:px-8 sm:py-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              Apply Now
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em]">
              Send your profile and let’s start the conversation.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-white/84">
              Share your resume, role interest, and relevant experience with our
              team at <span className="font-semibold">info@premindustries.in</span>.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
            <a
              href="mailto:info@premindustries.in?subject=Career%20Application%20-%20Prem%20Industries"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-brand-navy transition hover:bg-white/90"
            >
              Email Your CV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/45 px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
