"use client";

import Image from "next/image";

const ImageStatementSection = ({
  title,
  body,
  image,
  imagePosition = "left",
  eyebrow = "Our Direction",
  accentLabel = "Prem Industries",
}) => {
  const imageFirst = imagePosition === "left";

  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="site-shell-tight">
        <article className="direction-shell overflow-hidden rounded-[26px] border border-[#dbe2f0] bg-[linear-gradient(135deg,#ffffff_0%,#f7f9fd_55%,#edf3fb_100%)] shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
          <div className="grid xl:grid-cols-[minmax(300px,0.94fr)_minmax(0,1.06fr)]">
            <div
              className={
                imageFirst
                  ? "relative min-h-[290px] xl:min-h-[360px]"
                  : "relative min-h-[290px] xl:order-2 xl:min-h-[360px]"
              }
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1280px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(125deg,rgba(10,22,58,0.72)_0%,rgba(10,22,58,0.18)_48%,rgba(10,22,58,0.58)_100%)]"
                aria-hidden="true"
              />

              <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                <div className="inline-flex max-w-[280px] flex-col rounded-[18px] border border-white/20 bg-white/12 px-4 py-3 text-white backdrop-blur-md">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">
                    {eyebrow}
                  </span>
                  <span className="mt-2 font-display text-xl font-black uppercase leading-[1.05]">
                    {accentLabel}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                imageFirst
                  ? "relative flex items-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
                  : "relative flex items-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:order-1"
              }
            >
              <div
                className="absolute left-0 top-0 h-full w-2 bg-[linear-gradient(180deg,#e11d2e_0%,#f57f17_100%)]"
                aria-hidden="true"
              />

              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-brand-navy px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  {eyebrow}
                </span>

                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-brand-navy">
                  {title}
                </h2>

                <div className="mt-5 h-[3px] w-24 bg-brand-red" aria-hidden="true" />

                <p className="mt-6 max-w-[780px] text-[16px] leading-[1.9] text-[#45556f] sm:text-[17px]">
                  {body}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ImageStatementSection;
