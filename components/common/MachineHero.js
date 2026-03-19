"use client";

const defaultNotice = "We are working on updates. Stay tuned for fresh content.";

export default function MachineHero({
  title,
  backgroundImage,
  notice = defaultNotice,
}) {
  return (
    <section className="bg-white">
      <div className="bg-brand-red px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.22em] text-white sm:text-sm">
        {notice}
      </div>

      <div
        className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-cover bg-center sm:min-h-[520px] lg:min-h-[600px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"
          aria-hidden="true"
        />

        <div className="site-shell relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] text-black sm:text-5xl lg:text-7xl [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
