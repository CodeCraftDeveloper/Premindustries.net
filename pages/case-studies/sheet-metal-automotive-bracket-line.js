import Head from "next/head";
import Link from "next/link";

export default function SheetMetalAutomotiveCaseStudy() {
  return (
    <>
      <Head>
        <title>Automotive Bracket Line Stabilization | Case Study</title>
        <meta
          name="description"
          content="Case study on improving output stability and rejection control for an automotive bracket line using structured sheet metal production support."
        />
      </Head>

      <section className="bg-brand-surface py-12 sm:py-16 lg:py-20">
        <div className="site-shell-tight">
          <article className="rounded-shell border border-brand-border/70 bg-white px-6 py-7 shadow-panel sm:px-8 sm:py-9 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-red">
              Case Study
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-brand-navy sm:text-5xl">
              Automotive Bracket Line Stabilization
            </h1>

            <div className="mt-6 space-y-6 text-[16px] leading-8 text-brand-slate sm:text-[17px]">
              <p>
                A regional automotive supplier needed tighter dimensional
                consistency for formed brackets used in downstream assembly.
                Their recurring issue was output variation across lots,
                resulting in avoidable inspection hold-ups.
              </p>
              <p>
                We aligned raw material handling, forming sequence checks, and
                stage-wise inspection points to stabilize repeatability. The
                workflow emphasized practical controls: first-off validation,
                interval checks, and batch traceability for quicker root-cause
                review.
              </p>
              <p>
                Within the operational cycle, the customer reported smoother
                assembly acceptance and improved planning confidence due to more
                predictable dispatch quality.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sheet-metal-components"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Explore sheet metal services
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Discuss your requirement
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
