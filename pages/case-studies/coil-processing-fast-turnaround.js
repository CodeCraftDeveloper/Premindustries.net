import Head from "next/head";
import Link from "next/link";

export default function CoilProcessingCaseStudy() {
  return (
    <>
      <Head>
        <title>Coil Processing Fast-Turnaround Program | Case Study</title>
        <meta
          name="description"
          content="Case study on improving turnaround predictability for a fabrication customer through coordinated CTL, shearing, and slitting operations."
        />
      </Head>

      <section className="bg-brand-surface py-12 sm:py-16 lg:py-20">
        <div className="site-shell-tight">
          <article className="rounded-shell border border-brand-border/70 bg-white px-6 py-7 shadow-panel sm:px-8 sm:py-9 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-red">
              Case Study
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-brand-navy sm:text-5xl">
              Coil Processing Fast-Turnaround Program
            </h1>

            <div className="mt-6 space-y-6 text-[16px] leading-8 text-brand-slate sm:text-[17px]">
              <p>
                A fabrication customer needed tighter turnaround reliability for
                converted coil material feeding multiple job schedules. Delays
                in material conversion were affecting workshop sequencing.
              </p>
              <p>
                We structured a coordinated processing window covering
                cut-to-length planning, shearing sequence, and slit-width
                preparation. Production checkpoints were aligned to dispatch
                commitments so line balancing improved across runs.
              </p>
              <p>
                The result was stronger schedule predictability and better
                synchronization between material conversion and fabrication
                readiness.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sheet-metal-components"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Related sheet metal solutions
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.08em] text-white"
              >
                Talk to our team
                <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
