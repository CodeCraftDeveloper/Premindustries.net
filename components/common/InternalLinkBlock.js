import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InternalLinkBlock({
  title = "Related Services",
  links = [],
}) {
  if (!links.length) {
    return null;
  }

  return (
    <section className="mt-5 rounded-[30px] border border-[#d8e1ef] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fe_100%)] px-5 py-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-6 sm:py-7">
      <div className="max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
          Internal navigation
        </p>
        <h2 className="mt-3 font-display text-[1.5rem] font-bold leading-[1.08] text-brand-navy sm:text-[1.8rem]">
          {title}
        </h2>
      </div>

      <ul className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-[22px] border border-[#dbe4f2] bg-white px-4 py-4 shadow-[0_14px_36px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-[#c7d6ea] hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)]"
            >
              <span>
                <span className="block text-[15px] font-semibold leading-[1.35] text-brand-navy">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-2 block text-[13px] leading-[1.7] text-brand-slate">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-red">
                <span>Explore</span>
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
