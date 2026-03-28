import Link from "next/link";

export default function InjectionMoldingApplianceCaseStudy() {
  return (
    <>
      <section className="bg-brand-surface py-12 sm:py-16 lg:py-20">
        <div className="site-shell-tight">
          <article className="rounded-shell border border-brand-border/70 bg-white px-6 py-7 shadow-panel sm:px-8 sm:py-9 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-red">
              Case Study
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-brand-navy sm:text-5xl">
              Injection Moulding Appliance Housing Ramp-Up
            </h1>

            <div className="mt-6 space-y-6 text-[16px] leading-8 text-brand-slate sm:text-[17px]">
              <p>
                An appliance-focused customer required a rapid production ramp
                for moulded housing components while maintaining fit-and-finish
                consistency across batches.
              </p>
              <p>
                Our team prioritized mould condition checks, setup discipline,
                and in-process verification for critical part features. This
                reduced production uncertainty and helped maintain repeatable
                quality through the scale-up phase.
              </p>
              <p>
                The program achieved steadier output planning and stronger line
                readiness for final assembly schedules, supporting commercial
                delivery commitments.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/injection-molding"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Explore injection moulding
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Request a consultation
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
