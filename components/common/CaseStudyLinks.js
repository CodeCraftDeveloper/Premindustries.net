import Link from "next/link";

export default function CaseStudyLinks({
  title,
  intro,
  studies,
  embedded = false,
}) {
  const content = (
    <div className={embedded ? "flex h-full flex-col" : undefined}>
      <div className={embedded ? "min-h-[74px] sm:min-h-[82px]" : undefined}>
        <h2
          className={`font-display font-black uppercase leading-tight text-brand-navy ${
            embedded ? "text-[1.15rem] sm:text-[1.25rem]" : "text-3xl sm:text-4xl"
          }`}
          style={embedded ? { textWrap: "balance" } : undefined}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={`max-w-3xl text-brand-slate ${
              embedded
                ? "mt-1 text-[11px] leading-5 sm:text-[11.5px] sm:leading-5.5"
                : "text-[16px] leading-7 sm:text-[17px] sm:leading-8"
            }`}
          >
            {intro}
          </p>
        ) : null}
      </div>

      <div
        className={`grid ${embedded ? "mt-3 gap-2 md:grid-cols-1 xl:grid-cols-1" : "mt-7 gap-4 md:grid-cols-2 xl:grid-cols-3"}`}
      >
        {studies.map((study) => (
          <article
            key={study.href}
            className={`rounded-panel ${
              embedded
                ? "flex flex-col bg-white px-3 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.05)] sm:px-3.5 sm:py-3.5"
                : "bg-brand-surface px-4 py-5 sm:px-5"
            }`}
          >
            <p
              className={`font-bold uppercase tracking-[0.12em] text-brand-red ${
                embedded ? "text-[9px]" : "text-xs"
              }`}
            >
              Case Study
            </p>
            <h3
              className={`mt-2 font-display font-bold leading-tight text-brand-navy ${
                embedded ? "text-[11px] sm:text-[12px]" : "text-xl"
              }`}
              style={embedded ? { textWrap: "balance" } : undefined}
            >
              {study.title}
            </h3>
            <p
              className={`text-brand-slate ${
                embedded
                  ? "mt-1 text-[10.5px] leading-5 sm:text-[11px] sm:leading-5.5"
                  : "mt-3 text-[15px] leading-7"
              }`}
            >
              {study.excerpt}
            </p>
            <Link
              href={study.href}
              className={`inline-flex items-center gap-2 font-display font-bold uppercase tracking-[0.08em] text-brand-red ${
                embedded ? "mt-2 pt-0 text-[9px]" : "mt-4 text-sm"
              }`}
            >
              Read case study
              <span aria-hidden="true">&rsaquo;</span>
            </Link>
          </article>
        ))}
      </div>

      <div className={embedded ? "mt-2" : "mt-8"}>
        <Link
          href="/case-studies"
          className={`inline-flex items-center gap-2 rounded-full bg-brand-navy font-display font-bold uppercase tracking-[0.08em] text-white ${
            embedded ? "px-3.5 py-1.5 text-[9px]" : "px-5 py-3 text-sm"
          }`}
        >
          View all case studies
          <span aria-hidden="true">&rsaquo;</span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      {embedded ? (
        <div className="h-full">{content}</div>
      ) : (
        <div className="site-shell-tight">
          <div className="rounded-shell border border-brand-border/70 bg-white px-6 py-7 shadow-panel sm:px-8 sm:py-9 lg:px-10">
            {content}
          </div>
        </div>
      )}
    </section>
  );
}
