import Link from "next/link";

const studies = [
  {
    href: "/case-studies/sheet-metal-automotive-bracket-line",
    title: "Automotive Bracket Line Stabilization",
    excerpt:
      "How a tier supplier improved dimensional consistency and dispatch predictability using our sheet metal manufacturing support.",
    service: "/sheet-metal-components",
  },
  {
    href: "/case-studies/injection-molding-appliance-housing",
    title: "Appliance Housing Ramp-Up",
    excerpt:
      "A high-volume injection moulding program delivered with tighter process control and reduced rejection impact.",
    service: "/injection-molding",
  },
  {
    href: "/case-studies/coil-processing-fast-turnaround",
    title: "Coil Processing Fast-Turnaround Program",
    excerpt:
      "A coordinated CTL, shearing, and slitting workflow that helped a fabrication client shorten conversion lead times.",
    service: "/sheet-metal-components",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="site-shell-tight">
          <div className="rounded-shell border border-brand-border/70 px-6 py-7 shadow-panel sm:px-8 sm:py-9 lg:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-red">
              Insights
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-brand-navy sm:text-5xl">
              Manufacturing Case Studies
            </h1>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-brand-slate sm:text-[17px] sm:leading-8">
              These case studies showcase how production discipline, process
              visibility, and engineering support can improve reliability across
              industrial programs.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {studies.map((study) => (
                <article
                  key={study.href}
                  className="rounded-panel border border-brand-border/80 bg-brand-surface px-4 py-5 sm:px-5"
                >
                  <h2 className="font-display text-2xl font-bold leading-tight text-brand-navy">
                    {study.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-brand-slate">
                    {study.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={study.href}
                      className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-brand-red"
                    >
                      Read study
                      <span aria-hidden="true">&rsaquo;</span>
                    </Link>
                    <Link
                      href={study.service}
                      className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.08em] text-brand-navy"
                    >
                      Related service
                      <span aria-hidden="true">&rsaquo;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
