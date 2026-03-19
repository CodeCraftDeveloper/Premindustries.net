"use client";

import Link from "next/link";

const currentYear = new Date().getFullYear();

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const ScrollToTop = () => {
  if (typeof window !== "undefined") {
    const lenis = window.__lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }
};

const FooterOneCopyrights = () => {
  return (
    <div className="bg-white py-4">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-sm leading-5 text-brand-navy">
            &copy; {currentYear}{" "}
            <Link
              href="/"
              onClick={ScrollToTop}
              className="font-semibold text-brand-navy transition hover:text-brand-red"
            >
              Prem Industries India Limited
            </Link>
            . All Rights Reserved
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
            {legalLinks.map((item, index) => (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 ? (
                  <span
                    className="h-4 w-px bg-brand-border"
                    aria-hidden="true"
                  />
                ) : null}
                <Link
                  href={item.href}
                  onClick={ScrollToTop}
                  className="text-sm font-medium text-brand-navy transition hover:text-brand-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterOneCopyrights;
