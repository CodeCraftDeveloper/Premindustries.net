"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink, Mail, Phone, X } from "lucide-react";
import { mobileNavItems } from "./navData";

const formatNavLabel = (label) => (typeof label === "string" ? label.toUpperCase() : label);

const MobileLink = ({ item, className, onClick, children }) => {
  if (!item.href) {
    return <span className={className}>{children}</span>;
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

const MobileNavItem = ({ item, depth = 0, closeMobileMenu }) => {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const itemClassName =
    depth === 0
      ? "flex items-center justify-between px-0 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] leading-[1.2] text-white transition hover:text-white/80"
      : "flex items-center justify-between px-0 py-2 text-sm font-semibold uppercase tracking-[0.08em] leading-[1.2] text-slate-100 transition hover:text-white";
  const detailsClassName =
    depth === 0
      ? "group"
      : "group";
  const summaryClassName =
    depth === 0
      ? "flex cursor-pointer list-none items-center justify-between gap-3 px-0 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] leading-[1.2] text-white"
      : "flex cursor-pointer list-none items-center justify-between gap-3 px-0 py-2 text-sm font-semibold uppercase tracking-[0.08em] leading-[1.2] text-white";

  if (!hasChildren) {
    return (
      <li>
        <MobileLink item={item} className={itemClassName} onClick={closeMobileMenu}>
          <span>{formatNavLabel(item.label)}</span>
        </MobileLink>
      </li>
    );
  }

  return (
    <li>
      <details className={detailsClassName}>
        <summary className={summaryClassName}>
          <span>{formatNavLabel(item.label)}</span>
          <ChevronDown
            className="h-[11px] w-[11px] transition group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>

        <div className="px-2 pb-2">
          {item.href ? (
            <MobileLink
              item={item}
              className="mb-1.5 flex items-center justify-between px-0 py-2 text-xs font-semibold uppercase tracking-[0.1em] leading-[1.2] text-white transition hover:text-white/80"
              onClick={closeMobileMenu}
            >
              <span>VISIT {formatNavLabel(item.label)}</span>
              <ExternalLink
                className="h-[11px] w-[11px]"
                aria-hidden="true"
              />
            </MobileLink>
          ) : null}

          <ul className={depth === 0 ? "space-y-2" : "space-y-1 pl-3"}>
            {item.children.map((child) => (
              <MobileNavItem
                key={`${depth}-${child.label}`}
                item={child}
                depth={depth + 1}
                closeMobileMenu={closeMobileMenu}
              />
            ))}
          </ul>
        </div>
      </details>
    </li>
  );
};

const MobileMenu = ({ mobileMenu, handleMobileMenu, closeMobileMenu }) => {
  return (
    <div
      className={
        mobileMenu
          ? "site-mobile-menu fixed inset-0 z-50 lg:hidden"
          : "site-mobile-menu pointer-events-none fixed inset-0 z-50 lg:hidden"
      }
      aria-hidden={!mobileMenu}
    >
      <button
        type="button"
        onClick={closeMobileMenu}
        className={
          mobileMenu
            ? "site-mobile-overlay absolute inset-0 opacity-100 backdrop-blur-[2px] transition"
            : "site-mobile-overlay absolute inset-0 opacity-0 transition"
        }
        aria-label="Close menu"
      />

      <aside
        id="mobile-nav-panel"
        className={
          mobileMenu
            ? "site-mobile-panel absolute right-0 top-0 flex h-full w-full max-w-sm translate-x-0 flex-col bg-brand-navy px-5 pb-6 pt-5 shadow-float transition duration-300"
            : "site-mobile-panel absolute right-0 top-0 flex h-full w-full max-w-sm translate-x-full flex-col bg-brand-navy px-5 pb-6 pt-5 shadow-float transition duration-300"
        }
        style={{ fontFamily: "var(--font-roboto)" }}
        >
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center rounded-xl bg-white px-3 py-2">
            <Image
              src="/logo.png"
              alt="Prem Industries India Limited"
              width={100}
              height={70}
              className="h-auto w-[84px]"
              priority
            />
          </div>

          <button
            onClick={handleMobileMenu}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/15"
            aria-label="Close menu"
          >
            <X className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pr-1" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {mobileNavItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                closeMobileMenu={closeMobileMenu}
              />
            ))}
          </ul>
        </nav>

        <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-slate-100">
          <a
            href="mailto:info@premindustries.in"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
          >
            <Mail
              className="h-[18px] w-[18px] text-brand-red"
              aria-hidden="true"
            />
            <span>info@premindustries.in</span>
          </a>

          <a
            href="tel:+918447247227"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
          >
            <Phone
              className="h-[18px] w-[18px] text-brand-red"
              aria-hidden="true"
            />
            <span>+91-84-472-47227</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-red px-4 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#cf171d]"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </aside>

      <style jsx>{`
        .site-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 50;
        }

        .site-mobile-overlay {
          position: absolute;
          inset: 0;
          background: rgba(20, 37, 76, 0.55);
          transition:
            opacity 0.3s ease,
            backdrop-filter 0.3s ease;
        }

        .site-mobile-panel {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          height: 100%;
          width: min(100%, 24rem);
          flex-direction: column;
          background: #14254c;
          box-shadow: 0 22px 55px rgba(20, 37, 76, 0.28);
        }
      `}</style>
    </div>
  );
};

export default MobileMenu;
