"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function LogoIntro({ onComplete = () => {} }) {
  const finishedRef = useRef(false);
  const cleanupRef = useRef(null);
  const cleanedRef = useRef(false);
  const virtualScrollRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef(null);
  const lenisRef = useRef(null);
  const wheelHandlerRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchMoveRef = useRef(null);
  const touchEndRef = useRef(null);
  const prevStylesRef = useRef(null);

  const [logoSrc, setLogoSrc] = useState("/logo-main-desktop.png");

  /* --------------------------------------------------
   * Finish helper
   * -------------------------------------------------- */
  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      document.documentElement.style.overscrollBehavior = "";
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("logoIntro:complete"));
    }
    if (lenisRef.current && typeof lenisRef.current.start === "function") {
      lenisRef.current.start();
    }
    if (cleanupRef.current && !cleanedRef.current) {
      cleanedRef.current = true;
      cleanupRef.current();
    }
    onComplete();
  }, [onComplete]);

  /* --------------------------------------------------
   * Responsive logo source
   * -------------------------------------------------- */
  useEffect(() => {
    const media = window.matchMedia("(max-width: 480px)");

    const update = () => {
      setLogoSrc(
        media.matches ? "/logo-main-mobile.png" : "/logo-main-desktop.png",
      );
    };

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  /* --------------------------------------------------
   * Motion values
   * -------------------------------------------------- */
  const targetProgress = useMotionValue(0);

  const smoothProgress = useSpring(targetProgress, {
    stiffness: 60,
    damping: 28,
    mass: 1.4,
  });

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.6, 2.6]);
  const y = useTransform(smoothProgress, [0, 1], [0, -160]);
  const opacity = useTransform(smoothProgress, [0, 0.75, 1], [1, 1, 0]);

  /* --------------------------------------------------
   * Scroll lock + smooth wheel control
   * -------------------------------------------------- */
  useEffect(() => {
    const lenis = typeof window !== "undefined" ? window.__lenis : null;
    lenisRef.current = lenis;
    if (lenis && typeof lenis.stop === "function") lenis.stop();

    const prevOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevOverscroll = document.body.style.overscrollBehavior;
    const prevHtmlOverscroll =
      document.documentElement.style.overscrollBehavior;
    prevStylesRef.current = {
      prevOverflow,
      prevHtmlOverflow,
      prevOverscroll,
      prevHtmlOverscroll,
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";

    const MAX_SCROLL = window.innerHeight * 1.4;

    const WHEEL_STRENGTH = 0.18; // slower + smoother
    const TOUCH_STRENGTH = 0.28; // touch needs a bit more
    const MAX_VELOCITY = 18;
    const FRICTION = 0.92; // tuned for high-refresh feel

    let running = false;
    let lastTime = performance.now();

    const tick = (now) => {
      if (finishedRef.current) return;

      const deltaTime = (now - lastTime) / 1000; // seconds
      lastTime = now;

      // integrate velocity
      virtualScrollRef.current += velocityRef.current * deltaTime * 60;
      virtualScrollRef.current = Math.max(
        0,
        Math.min(MAX_SCROLL, virtualScrollRef.current),
      );

      const p = virtualScrollRef.current / MAX_SCROLL;
      targetProgress.set(p);

      // 🧈 time-based friction (THIS is the magic)
      velocityRef.current *= Math.pow(FRICTION, deltaTime * 60);

      if (Math.abs(velocityRef.current) < 0.01) {
        velocityRef.current = 0;
        running = false;
        return;
      }

      if (p >= 1) {
        targetProgress.set(1);
        finishIntro();
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    function onWheel(e) {
      if (finishedRef.current) return;
      e.preventDefault();

      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;

      velocityRef.current += delta * WHEEL_STRENGTH;

      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, velocityRef.current),
      );

      if (!running) {
        running = true;
        lastTime = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    function onTouchStart(e) {
      if (finishedRef.current) return;
      if (!e.touches || e.touches.length === 0) return;
      touchActive = true;
      lastTouchY = e.touches[0].clientY;
    }

    function onTouchMove(e) {
      if (finishedRef.current) return;
      if (!touchActive || !e.touches || e.touches.length === 0) return;
      e.preventDefault();

      const currentY = e.touches[0].clientY;
      const delta = lastTouchY - currentY; // swipe up -> positive
      lastTouchY = currentY;

      velocityRef.current += delta * TOUCH_STRENGTH;
      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, velocityRef.current),
      );

      if (!running) {
        running = true;
        lastTime = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    function onTouchEnd() {
      touchActive = false;
    }

    let touchActive = false;
    let lastTouchY = 0;

    wheelHandlerRef.current = onWheel;
    touchStartRef.current = onTouchStart;
    touchMoveRef.current = onTouchMove;
    touchEndRef.current = onTouchEnd;

    cleanupRef.current = () => {
      const wheelHandler = wheelHandlerRef.current;
      const touchStart = touchStartRef.current;
      const touchMove = touchMoveRef.current;
      const touchEnd = touchEndRef.current;

      if (wheelHandler) window.removeEventListener("wheel", wheelHandler);
      if (touchStart) window.removeEventListener("touchstart", touchStart);
      if (touchMove) window.removeEventListener("touchmove", touchMove);
      if (touchEnd) {
        window.removeEventListener("touchend", touchEnd);
        window.removeEventListener("touchcancel", touchEnd);
      }

      cancelAnimationFrame(rafRef.current);

      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      document.documentElement.style.overscrollBehavior = "";

      if (lenis && typeof lenis.start === "function") lenis.start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      if (cleanupRef.current && !cleanedRef.current) {
        cleanedRef.current = true;
        cleanupRef.current();
      }
    };
  }, [finishIntro, targetProgress]);

  /* --------------------------------------------------
   * Render
   * -------------------------------------------------- */
  return (
    <div className="logo-intro-root">
      <motion.img
        src={logoSrc}
        alt=""
        draggable={false}
        className="logo-intro-art"
        style={{ scale, y, opacity }}
      />
      <div className="logo-intro-scroll" aria-hidden="true">
        Scroll up
      </div>

      <style jsx>{`
        .logo-intro-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
        }

        .logo-intro-art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform-origin: center;
          will-change: transform, opacity;
          user-select: none;
        }

        .logo-intro-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.85);
          text-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          animation: scrollHint 1.6s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes scrollHint {
          0% {
            opacity: 0.65;
            transform: translate(-50%, 6px);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, 0px);
          }
          100% {
            opacity: 0.65;
            transform: translate(-50%, -6px);
          }
        }

        @media (max-width: 480px) {
          .logo-intro-art {
            object-fit: cover;
            object-position: center;
          }
        }
      `}</style>
    </div>
  );
}
