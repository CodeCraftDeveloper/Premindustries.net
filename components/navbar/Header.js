"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import { desktopNavItems } from "./navData";

const formatNavLabel = (label) =>
  typeof label === "string" ? label.toUpperCase() : label;

const itemMatchesPath = (item, pathname) => {
  if (!item || !pathname) {
    return false;
  }

  if (item.href && !item.external) {
    if (item.href === "/") {
      return pathname === "/";
    }

    if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
      return true;
    }
  }

  return Array.isArray(item.children)
    ? item.children.some((child) => itemMatchesPath(child, pathname))
    : false;
};

const MenuLink = ({ item, className, children, onClick, ariaCurrent }) => {
  if (!item.href) {
    return (
      <span className={className} aria-current={ariaCurrent}>
        {children}
      </span>
    );
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
    <Link
      href={item.href}
      className={className}
      onClick={onClick}
      aria-current={ariaCurrent}
    >
      {children}
    </Link>
  );
};

const DesktopNavItem = ({
  item,
  depth = 0,
  pathname,
  openRootKey,
  openBranchKey,
  setOpenBranchKey,
  setOpenRootKey,
  itemKey,
  closeMenus,
}) => {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const isActive = itemMatchesPath(item, pathname);
  const isRoot = depth === 0;
  const isRootOpen = isRoot && openRootKey === itemKey;
  const isNestedOpen =
    !isRoot &&
    typeof openBranchKey === "string" &&
    (openBranchKey === itemKey || openBranchKey.startsWith(`${itemKey}-`));
  const isSubmenuOpen = isRoot ? isRootOpen : isNestedOpen;
  const wrapperClassName = isRoot
    ? "site-header-item site-header-item-root group/nav relative mx-3 flex shrink-0 items-center self-stretch xl:mx-4"
    : "site-header-item site-header-item-nested group/nav relative w-full";
  const submenuClassName = isRoot
    ? `site-header-submenu site-header-submenu-root absolute left-0 top-full z-50 min-w-64 rounded-panel border border-brand-border bg-white/98 p-2 text-brand-navy shadow-float transition duration-200 ${
        isSubmenuOpen
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-2 opacity-0"
      }`
    : `site-header-submenu site-header-submenu-nested absolute left-full top-0 z-50 min-w-60 rounded-panel border border-brand-border/70 bg-white p-2 shadow-float transition duration-200 ${
        isSubmenuOpen
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-1 opacity-0"
      }`;
  const baseRootClassName =
    "site-header-link site-header-top-link inline-flex h-full items-center gap-1 whitespace-nowrap px-1 py-0 font-sans text-[15px] leading-none font-semibold uppercase tracking-[0.07em] !text-black transition-colors";
  const rootStateClassName = isActive
    ? "!text-black"
    : "!text-black hover:!text-black";
  const baseChildClassName =
    "site-header-link flex items-center justify-between rounded-xl px-4 py-3 font-sans text-[15px] leading-none font-semibold uppercase tracking-[0.08em] !text-black transition";
  const childStateClassName = isActive
    ? "bg-black/5 !text-black"
    : "!text-black hover:bg-black/5 hover:!text-black";
  const CaretIcon = isRoot ? ChevronDown : ChevronRight;

  if (!hasChildren) {
    return (
      <li
        className={wrapperClassName}
        onMouseEnter={() => {
          if (isRoot) {
            closeMenus();
          } else {
            setOpenBranchKey(itemKey);
          }
        }}
      >
        <MenuLink
          item={item}
          className={
            isRoot
              ? `${baseRootClassName} ${rootStateClassName}`
              : `${baseChildClassName} ${childStateClassName}`
          }
          onClick={closeMenus}
          ariaCurrent={isActive ? "page" : undefined}
        >
          <span>{formatNavLabel(item.label)}</span>
        </MenuLink>
      </li>
    );
  }

  return (
    <li
      className={wrapperClassName}
      onMouseEnter={() => {
        if (isRoot) {
          setOpenRootKey(itemKey);
        }
        setOpenBranchKey(itemKey);
      }}
      onMouseLeave={isRoot ? closeMenus : undefined}
      onFocusCapture={() => {
        if (isRoot) {
          setOpenRootKey(itemKey);
        }
        setOpenBranchKey(itemKey);
      }}
    >
      {item.href ? (
        <MenuLink
          item={item}
          className={
            isRoot
              ? `${baseRootClassName} ${rootStateClassName}`
              : `${baseChildClassName} ${childStateClassName}`
          }
          onClick={closeMenus}
          ariaCurrent={isActive ? "page" : undefined}
        >
          <span>{formatNavLabel(item.label)}</span>
          <CaretIcon className="h-[10px] w-[10px]" aria-hidden="true" />
        </MenuLink>
      ) : (
        <button
          type="button"
          onClick={() => {
            if (isRoot) {
              if (isRootOpen) {
                closeMenus();
              } else {
                setOpenRootKey(itemKey);
                setOpenBranchKey(itemKey);
              }
            } else {
              setOpenBranchKey(itemKey);
            }
          }}
          aria-expanded={isSubmenuOpen}
          className={
            isRoot
              ? `${baseRootClassName} ${rootStateClassName}`
              : `${baseChildClassName} ${childStateClassName} w-full text-left`
          }
        >
          <span>{formatNavLabel(item.label)}</span>
          <CaretIcon className="h-[10px] w-[10px]" aria-hidden="true" />
        </button>
      )}

      <ul className={submenuClassName}>
        {item.children.map((child) => (
          <DesktopNavItem
            key={`${itemKey}-${child.label}`}
            item={child}
            depth={depth + 1}
            pathname={pathname}
            openRootKey={openRootKey}
            openBranchKey={openBranchKey}
            setOpenBranchKey={setOpenBranchKey}
            setOpenRootKey={setOpenRootKey}
            itemKey={`${itemKey}-${child.label}`}
            closeMenus={closeMenus}
          />
        ))}
      </ul>
    </li>
  );
};

const Header = () => {
  const router = useRouter();
  const headerRef = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openRootKey, setOpenRootKey] = useState(null);
  const [openBranchKey, setOpenBranchKey] = useState(null);

  const handleMobileMenu = () => setMobileMenu((open) => !open);
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenRootKey(null);
    setOpenBranchKey(null);
  };
  const closeMenus = () => {
    setOpenRootKey(null);
    setOpenBranchKey(null);
  };

  useEffect(() => {
    document.body.classList.toggle("site-nav-open", mobileMenu);

    return () => {
      document.body.classList.remove("site-nav-open");
    };
  }, [mobileMenu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenRootKey(null);
        setOpenBranchKey(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenRootKey(null);
        setOpenBranchKey(null);
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setOpenRootKey(null);
    setOpenBranchKey(null);
    setMobileMenu(false);
  }, [router.asPath]);

  return (
    <header
      ref={headerRef}
      className="site-header-bridge relative z-40 bg-white"
    >
      <div className="site-header-shell site-shell">
        <div className="site-header-inner flex h-[var(--site-header-height)] items-center justify-between gap-3 py-1 lg:grid lg:grid-cols-[160px_minmax(0,1fr)_160px] lg:items-center lg:gap-0 lg:py-0 xl:grid-cols-[190px_minmax(0,1fr)_190px]">
          <Link
            href="/"
            scroll
            className="site-header-logo relative flex shrink-0 items-center py-1.5 lg:justify-self-center"
            aria-label="Prem Industries home"
          >
            <Image
              src="/logo.png"
              alt="Prem Industries"
              width={100}
              height={70}
              className="h-auto w-[52px] sm:w-[60px] lg:w-[74px] xl:w-[84px]"
              priority
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="site-header-nav hidden lg:flex lg:min-w-0 lg:justify-center lg:self-stretch"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            <ul className="site-header-list flex h-full items-stretch gap-0">
              {desktopNavItems.map((item) => (
                <DesktopNavItem
                  key={item.label}
                  item={item}
                  pathname={router.pathname}
                  openRootKey={openRootKey}
                  openBranchKey={openBranchKey}
                  setOpenBranchKey={setOpenBranchKey}
                  setOpenRootKey={setOpenRootKey}
                  itemKey={item.label}
                  closeMenus={closeMenus}
                />
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block" aria-hidden="true" />

          <button
            type="button"
            onClick={handleMobileMenu}
            className="site-header-toggle inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-brand-surface text-brand-navy transition hover:border-brand-red hover:text-brand-red lg:hidden"
            aria-expanded={mobileMenu}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">
              {mobileMenu ? "Close menu" : "Open menu"}
            </span>
            <div className="flex flex-col gap-1.5">
              <span
                className={
                  mobileMenu
                    ? "block h-0.5 w-5 translate-y-2 rotate-45 rounded-full bg-current transition"
                    : "block h-0.5 w-5 rounded-full bg-current transition"
                }
              />
              <span
                className={
                  mobileMenu
                    ? "block h-0.5 w-5 opacity-0 rounded-full bg-current transition"
                    : "block h-0.5 w-5 rounded-full bg-current transition"
                }
              />
              <span
                className={
                  mobileMenu
                    ? "block h-0.5 w-5 -translate-y-2 -rotate-45 rounded-full bg-current transition"
                    : "block h-0.5 w-5 rounded-full bg-current transition"
                }
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[#e11d2e]"
        aria-hidden="true"
      />

      <MobileMenu
        mobileMenu={mobileMenu}
        handleMobileMenu={handleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      <style jsx>{`
        .site-header-bridge {
          position: relative;
          z-index: 40;
          background: #ffffff;
          box-shadow: inset 0 1px 0 rgba(18, 33, 63, 0.18);
        }

        .site-header-shell {
          width: min(100% - 2rem, 110rem);
          margin-inline: auto;
        }

        .site-header-inner {
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.25rem 0;
        }

        .site-header-nav {
          justify-self: center;
          height: 100%;
          align-self: stretch;
        }

        .site-header-list {
          display: flex;
          align-items: stretch;
          height: 100%;
          gap: 0;
          list-style: none;
        }

        .site-header-item {
          position: relative;
        }

        .site-header-item-root {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .site-header-link,
        .site-header-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0;
          font-family: var(--font-roboto);
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #000000;
          background: transparent;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .site-header-link:hover,
        .site-header-link:focus-visible,
        .site-header-trigger:hover,
        .site-header-trigger:focus-visible {
          color: #000000;
          outline: none;
        }

        .site-header-submenu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 50;
          min-width: 15rem;
          padding: 0.5rem;
          border: 1px solid rgba(217, 225, 240, 1);
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 22px 55px rgba(20, 37, 76, 0.2);
        }

        .site-header-submenu-nested {
          left: 100%;
          top: 0;
          margin-left: 0.5rem;
        }

        .site-header-item-nested:hover > .site-header-submenu-nested,
        .site-header-item-nested:focus-within > .site-header-submenu-nested {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .site-header-submenu :global(.site-header-link),
        .site-header-submenu :global(.site-header-trigger) {
          width: 100%;
          justify-content: space-between;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-family: var(--font-roboto);
          font-size: 15px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #000000;
        }

        .site-header-submenu :global(.site-header-link:hover),
        .site-header-submenu :global(.site-header-link:focus-visible),
        .site-header-submenu :global(.site-header-trigger:hover),
        .site-header-submenu :global(.site-header-trigger:focus-visible) {
          background: #f6f8fc;
        }

        .site-header-nav :global(a.site-header-top-link),
        .site-header-nav :global(button.site-header-top-link),
        .site-header-nav :global(.site-header-submenu a.site-header-link),
        .site-header-nav :global(.site-header-submenu button.site-header-link) {
          font-family: var(--font-roboto) !important;
          font-size: 15px !important;
          font-weight: 600 !important;
          line-height: 1 !important;
          letter-spacing: 0.07em !important;
          text-transform: uppercase;
        }

        .site-header-nav :global(a.site-header-top-link),
        .site-header-nav :global(button.site-header-top-link) {
          height: 100% !important;
          display: inline-flex !important;
          align-items: center !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }

        .site-header-toggle {
          flex-shrink: 0;
        }

        @media (max-width: 1023px) {
          .site-header-shell {
            width: min(100% - 1.5rem, 110rem);
          }

          .site-header-inner {
            min-height: 56px;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .site-header-inner {
            min-height: 60px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .site-header-shell {
            width: min(100% - 1.5rem, 110rem);
          }

          .site-header-inner {
            grid-template-columns: 160px minmax(0, 1fr) 160px;
            gap: 0;
          }

          .site-header-list {
            gap: 0;
          }

          .site-header-link,
          .site-header-trigger {
            padding: 0.2rem 0;
            font-size: 15px;
            letter-spacing: 0.07em;
          }
        }

        @media (min-width: 1024px) {
          .site-header-inner {
            min-height: 68px;
            height: 68px;
          }
        }

        @media (min-width: 1280px) {
          .site-header-inner {
            min-height: 72px;
            height: 72px;
          }

          .site-header-link,
          .site-header-trigger {
            padding: 0;
            font-size: 15px;
            letter-spacing: 0.07em;
          }

          .site-header-list {
            gap: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
