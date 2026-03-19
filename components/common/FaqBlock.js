import { useState } from "react";
import Head from "next/head";

export default function FaqBlock({ title, intro, faqs, embedded = false }) {
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.question ?? null);
  const [searchQuery, setSearchQuery] = useState("");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleFaqs = embedded
    ? faqs
    : faqs.filter((faq) => {
        if (!normalizedQuery) return true;

        return (
          faq.question.toLowerCase().includes(normalizedQuery) ||
          faq.answer.toLowerCase().includes(normalizedQuery)
        );
      });

  if (embedded) {
    const content = (
      <div className="flex h-full flex-col rounded-[1.5rem] bg-white px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:px-5 sm:py-5">
        <div className="min-h-[82px] sm:min-h-[90px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-slate">
            Support
          </p>
          <h2
            className="mt-2 font-display text-[1.2rem] font-black uppercase leading-tight text-brand-navy sm:text-[1.35rem]"
            style={{ textWrap: "balance" }}
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-2 max-w-3xl text-[11px] leading-5 text-brand-slate sm:text-[11.5px] sm:leading-5.5">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="mt-3 divide-y divide-brand-border/70">
          {faqs.map((faq) => {
            const isOpen = faq.question === openQuestion;

            return (
              <article key={faq.question} className="py-1">
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display text-[12px] font-bold leading-5.5 text-brand-navy sm:text-[13px]"
                    style={{ textWrap: "balance" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-border/80 text-brand-navy transition ${
                      isOpen ? "rotate-90 bg-brand-surface" : "bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="text-base leading-none">&rsaquo;</span>
                  </span>
                </button>
                <div
                  className={`overflow-hidden pr-8 text-brand-slate transition-all duration-300 ease-out ${
                    isOpen
                      ? "max-h-28 pb-3 opacity-100"
                      : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <p className="text-[10.5px] leading-5 sm:text-[11px] sm:leading-5.5">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );

    return (
      <section className="py-12 sm:py-14 lg:py-16">
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </Head>
        <div className="h-full">{content}</div>
      </section>
    );
  }

  const content = (
    <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
      <div className="relative overflow-hidden rounded-t-[2rem] bg-[linear-gradient(135deg,#10224b_0%,#1d3a73_56%,#e92227_100%)] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
            Help Center
          </p>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.02] text-white sm:text-[2.8rem]">
            How can we help you?
          </h2>
          {intro ? (
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.6] text-white/88 sm:text-[16px] sm:leading-[1.65]">
              {intro}
            </p>
          ) : null}

          <div className="mx-auto mt-7 w-full max-w-[420px]">
            <label className="relative block w-full">
              <span
                className="pointer-events-none absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-surface text-brand-red sm:left-5"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4.5 w-4.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m20 20-3.8-3.8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search FAQs"
                aria-label={`Search ${title}`}
                className="block h-[60px] w-full rounded-full bg-white pl-16 pr-16 text-left text-[15px] leading-none text-brand-navy shadow-[0_12px_28px_rgba(9,18,41,0.18)] outline-none placeholder:text-brand-navy/60 sm:h-[62px] sm:pl-[4.5rem] sm:pr-[4.5rem]"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 inline-flex h-9 -translate-y-1/2 items-center justify-center rounded-full px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy/70 transition hover:text-brand-navy sm:right-5 sm:px-3 sm:text-xs"
                >
                  Clear
                </button>
              ) : (
                <span
                  className="pointer-events-none absolute right-4 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-brand-navy/75 sm:right-5"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m13 6 6 6-6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
              )}
            </label>
          </div>
        </div>
      </div>

      <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(240px,0.36fr)_minmax(0,0.64fr)] lg:gap-14 lg:px-12 lg:py-12">
        <div className="lg:pt-2">
          <p className="text-sm font-semibold text-brand-slate">Support</p>
          <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-brand-navy">
            FAQs
          </h3>
          <p className="mt-5 max-w-[280px] text-[16px] leading-[1.65] text-brand-slate">
            Have questions? We&apos;ve got answers. Explore the most common
            questions, process details, and support guidance in one place.
          </p>
        </div>

        <div className="divide-y divide-brand-border/70">
          {visibleFaqs.length ? (
            visibleFaqs.map((faq) => {
              const isOpen = faq.question === openQuestion;

              return (
                <article key={faq.question} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : faq.question)
                    }
                    className="flex w-full items-center justify-between gap-6 py-3.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[1.02rem] font-bold leading-[1.25] text-brand-navy sm:text-[1.12rem]">
                      {faq.question}
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-border/80 text-brand-navy transition ${
                        isOpen ? "rotate-90 bg-brand-surface" : "bg-white"
                      }`}
                      aria-hidden="true"
                    >
                      <span className="text-xl leading-none">&rsaquo;</span>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden pr-12 text-brand-slate transition-all duration-300 ease-out ${
                      isOpen
                        ? "max-h-40 pb-4 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-[15px] leading-7 sm:text-[16px] sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="py-6">
              <p className="font-display text-[1.02rem] font-bold text-brand-navy sm:text-[1.12rem]">
                No matching FAQs found.
              </p>
              <p className="mt-2 max-w-xl text-[15px] leading-7 text-brand-slate sm:text-[16px] sm:leading-7">
                Try a different keyword like quality, tooling, production, or
                materials.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-brand-surface py-12 sm:py-14 lg:py-16">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="mx-auto w-[85%] max-w-none">{content}</div>
    </section>
  );
}
