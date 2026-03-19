"use client";

import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = window.__lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-4 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-brand-navy text-white shadow-[0_16px_32px_rgba(8,20,50,0.28)] transition duration-200 hover:bg-brand-red max-[640px]:bottom-4 max-[640px]:right-3 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <i className="fa-solid fa-arrow-up text-sm" aria-hidden="true" />
    </button>
  );
}
