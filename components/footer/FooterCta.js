"use client";

import Link from "next/link";
import Image from "next/image";

const FacebookIcon = () => (
  <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.7-1.6H16V4.8c-.5-.1-1.4-.2-2.3-.2-2.3 0-3.8 1.4-3.8 4V11H7.5v3h2.4v7h3.6Z" />
  </svg>
);

const XIcon = () => (
  <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.9 4H21l-4.6 5.3L22 20h-4.4l-3.5-4.8L9.9 20H7.8l5-5.8L7.4 4h4.5l3.1 4.4L18.9 4Zm-1.5 14h1.2L10.8 5.9H9.5L17.4 18Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.2 8.4a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.7 9.8h3v9.5h-3V9.8Zm4.8 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.1h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6h-3V9.8Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="h-full w-full" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 11.9A8 8 0 0 1 8.3 19l-4.3 1.4 1.4-4.1A8 8 0 1 1 20 11.9Zm-8-6.4a6.4 6.4 0 0 0-5.5 9.7l.2.3-.8 2.5 2.6-.8.3.2A6.4 6.4 0 1 0 12 5.5Zm3.8 8.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.2-.3.2-.5.1-.8-.4-1.5-1-2.1-1.7-.2-.2 0-.4.1-.5l.3-.4c.1-.1.2-.3.1-.5l-.6-1.4c-.1-.2-.2-.2-.4-.2h-.4c-.2 0-.4.1-.5.3-.4.4-.6 1-.6 1.5 0 .4.1.8.4 1.2a8.2 8.2 0 0 0 3.2 3c1.8.8 1.8.5 2.1.5.5 0 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1Z" />
  </svg>
);

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/prem_industries_india/",
    Icon: InstagramIcon,
    external: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/PremIndustriesIndia/",
    Icon: FacebookIcon,
    external: true,
  },
  {
    label: "Prem Industries LinkedIn",
    href: "https://www.linkedin.com/company/prem-industries-india/about/?viewAsMember=true",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/_PremIndustries",
    Icon: XIcon,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "#",
    Icon: WhatsAppIcon,
    external: false,
  },
];

const ScrollToTop = () => {
  if (typeof window !== "undefined") {
    const lenis = window.__lenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }
};

const FooterCta = () => {
  return (
    <div className="relative z-[700]">
      <div className="mx-auto w-full max-w-[1180px] px-0 sm:px-2 lg:px-8">
        <div
          className="grid items-center gap-3 bg-brand-red px-4 py-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]
          sm:px-6 sm:py-6
          md:grid-cols-[auto_1fr]
          lg:grid-cols-[auto_1fr_auto]
          lg:px-12 lg:py-9"
        >
          {/* Logo */}
          <Link href="/" onClick={ScrollToTop} className="flex justify-center px-1 lg:justify-start lg:px-0">
            <Image
              src="/logo-white.png"
              alt="Prem Industries logo"
              width={120}
              height={120}
              className="w-[66px] sm:w-[96px] lg:w-[118px]"
            />
          </Link>

          {/* Text */}
          <div className="mx-auto w-full max-w-[620px] px-1 text-center sm:px-3 lg:justify-self-center lg:px-6">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.06em] sm:text-base lg:text-[1.05rem] lg:tracking-[0.12em]">
              WHERE INNOVATION MEETS INDUSTRIAL SCALE
            </p>
            <p className="mx-auto mt-1 max-w-[520px] text-[12px] leading-5 text-white/90 sm:text-[13px] sm:leading-6">
              Connect with Prem Industries across manufacturing, retail,
              moulding, and construction ventures.
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-wrap justify-center gap-2 px-1 sm:px-3 lg:justify-end lg:px-0">
            {socialLinks.map(({ label, href, Icon, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white/45 bg-white/10 text-white transition hover:border-[#14254c] hover:bg-[#14254c] hover:text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12 lg:border-white/60 lg:bg-white/10 lg:text-white"
                >
                  <span className="inline-flex h-[14px] w-[14px] items-center justify-center lg:h-[18px] lg:w-[18px]">
                    <Icon />
                  </span>
                </a>
              ) : (
                <span
                  key={label}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white/45 bg-white/10 text-white/75 sm:h-10 sm:w-10 lg:h-12 lg:w-12 lg:border-white/60 lg:bg-white/10"
                >
                  <span className="inline-flex h-[14px] w-[14px] items-center justify-center lg:h-[18px] lg:w-[18px]">
                    <Icon />
                  </span>
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCta;
