"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
    icon: Phone,
    href: "tel:+918447247227",
    label: "+91-844-724-7227",
  },
  {
    icon: Mail,
    href: "mailto:info@premindustries.in",
    label: "info@premindustries.in",
  },
  {
    icon: MapPin,
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
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const aboutLinks = [
  { label: "About Goel Group", href: "/about/goel-group" },
  { label: "Chairman's Office", href: "/about/chairmans-office" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Our Journey", href: "/about/our-journey" },
  { label: "Awards", href: "/about/awards" },
];

const sectorLinks = [
  { label: "Packaging", href: "/packaging" },
  { label: "Sheet Metal", href: "/sheet-metal-components" },
  { label: "Injection Moulding", href: "/injection-molding" },
  { label: "Press Shop", href: "/press-shop" },
];

const otherWebsiteLinks = [
  { label: "Prem Packaging", href: "https://prempackaging.com/" },
  { label: "PH Steel", href: "https://phsteel.in/" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip font-inter">
      {/* 🔵 NAVY SECTION */}
      <div className="bg-brand-navy pt-14 pb-18 text-white lg:pt-18 lg:pb-24">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          {/* Grid */}
          <div className="grid items-start gap-y-8 md:grid-cols-2 md:gap-x-10 xl:grid-cols-[minmax(280px,1.1fr)_minmax(160px,0.6fr)_minmax(160px,0.6fr)_minmax(170px,0.65fr)_minmax(170px,0.65fr)_minmax(340px,1.1fr)] xl:gap-x-8">
            {/* Contact */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-3 flex h-8 items-start">
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#cbd5ff]">
                  Get In Touch
                </h3>
              </div>

              <div className="space-y-3.5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : ""}
                      className="grid grid-cols-[28px_minmax(0,1fr)] items-start gap-x-3 px-0 py-0.5 text-left transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center self-start text-white">
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="max-w-[320px] text-sm font-normal leading-tight text-slate-100/90">
                        {item.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>

            {/* Links */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-2 flex h-8 items-start">
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#cbd5ff]">
                  Quick Links
                </h3>
              </div>

              <ul className="max-w-[220px] space-y-1 max-[640px]:space-y-0.5">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={ScrollToTop}
                      className="flex rounded-xl px-0 py-1 text-left text-sm font-normal leading-[1.35] text-slate-100/90 transition-all duration-300 hover:translate-x-1 hover:text-white max-[640px]:py-0.5 max-[640px]:leading-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* About */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-2 flex h-8 items-start">
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#cbd5ff]">
                  About
                </h3>
              </div>

              <ul className="max-w-[220px] space-y-1 max-[640px]:space-y-0.5">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={ScrollToTop}
                      className="flex rounded-xl px-0 py-1 text-left text-sm font-normal leading-[1.35] text-slate-100/90 transition-all duration-300 hover:translate-x-1 hover:text-white max-[640px]:py-0.5 max-[640px]:leading-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Business */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-2 flex h-8 items-start">
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#cbd5ff]">
                  Business
                </h3>
              </div>

              <ul className="max-w-[220px] space-y-1 max-[640px]:space-y-0.5">
                {sectorLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={ScrollToTop}
                      className="flex rounded-xl px-0 py-1 text-left text-sm font-normal leading-[1.35] text-slate-100/90 transition-all duration-300 hover:translate-x-1 hover:text-white max-[640px]:py-0.5 max-[640px]:leading-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Other Websites */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-2 flex h-8 items-start">
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#cbd5ff]">
                  Other Websites
                </h3>
              </div>

              <ul className="max-w-[220px] space-y-1 max-[640px]:space-y-0.5">
                {otherWebsiteLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex rounded-xl px-0 py-1 text-left text-sm font-normal leading-[1.35] text-slate-100/90 transition-all duration-300 hover:translate-x-1 hover:text-white max-[640px]:py-0.5 max-[640px]:leading-4"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Map */}
            <section className="flex h-full flex-col p-4 lg:p-0">
              <div className="mb-2 flex h-8 items-start justify-between gap-4">
                <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-[#cbd5ff]">
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
      <div className="mt-0 px-4 pt-3 pb-2 sm:-mt-6 sm:px-6 sm:pt-5 sm:pb-4 lg:-mt-24 lg:px-0 lg:pt-6 lg:pb-6">
        <FooterCta />
      </div>

      <div className="bg-white">
        <FooterOneCopyrights />
      </div>
    </footer>
  );
};

export default Footer;
