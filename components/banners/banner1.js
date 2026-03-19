"use client";

import React from "react";

const PageBanner = ({ bannerBg, title }) => {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-navy/[0.9] via-brand-navy/[0.72] to-black/[0.45]"
        aria-hidden="true"
      />

      <div className="site-shell-tight relative flex min-h-[280px] items-end py-16 sm:min-h-[320px] sm:py-20 lg:min-h-[360px] lg:py-24">
        <div className="max-w-4xl">
          <h1 className="wow fadeInLeft animated mb-0 font-display text-4xl font-extrabold uppercase tracking-[0.1em] text-white sm:text-5xl lg:text-7xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
