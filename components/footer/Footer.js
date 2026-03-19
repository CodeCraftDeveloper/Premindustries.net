"use client";

import Link from "next/link";
import FooterCta from "./FooterCta";
import FooterOneCopyrights from "./FooterOneCopyrights";
import PlantsMap from "./PlantsMap";
import { footerPlants } from "./footerPlants";

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

const contactItems = [
  {
    icon: "fa-phone",
    href: "tel:+918447247227",
    label: "+91-844-724-7227",
  },
  {
    icon: "fa-envelope",
    href: "mailto:info@premindustries.in",
    label: "info@premindustries.in",
  },
  {
    icon: "fa-location-dot",
    href: "https://maps.app.goo.gl/yQVeh98nkHBfGWaR9",
    label:
      "C-209, Bulandshahr Road Industrial Area, Ghaziabad, Uttar Pradesh 201009",
    external: true,
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Sectors", href: "/#sectors" },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* 🔵 NAVY SECTION */}
      <div className="bg-brand-navy pt-14 pb-18 text-white lg:pt-18 lg:pb-24">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-[1fr_0.78fr_1.08fr] xl:gap-16">
            {/* Contact */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-6 flex h-8 items-start">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.12em]">
                  Get In Touch
                </h3>
              </div>

              <div className="space-y-3.5">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-3 px-0 py-1 text-left"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center self-start text-base leading-none text-white">
                      <i className={`fa-solid ${item.icon}`} />
                    </span>
                    <span className="max-w-[320px] text-sm font-medium leading-8 text-slate-100">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Links */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-6 flex h-8 items-start">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.12em]">
                  Quick Links
                </h3>
              </div>

              <ul className="max-w-[220px] space-y-1 max-[640px]:space-y-0.5">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={ScrollToTop}
                      className="flex rounded-xl px-0 py-1 text-left text-sm font-medium leading-8 text-white transition-colors duration-200 hover:text-white/75 max-[640px]:py-0.5 max-[640px]:leading-6"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Map */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-6 flex h-8 items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.12em]">
                  Our Footprint
                </h3>
              </div>

              <PlantsMap plants={footerPlants} />
            </section>
          </div>

          {/* 🔥 CTA */}
        </div>
      </div>

      {/* ⚪ Bottom */}
      <div className="-mt-2 px-4 sm:-mt-4 sm:px-6 lg:-mt-28 lg:px-0">
        <FooterCta />
      </div>

      <div className="bg-white pt-3 sm:pt-4 lg:pt-5">
        <FooterOneCopyrights />
      </div>
    </footer>
  );
};

export default Footer;
