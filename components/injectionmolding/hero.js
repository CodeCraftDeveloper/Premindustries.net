"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const heroCtaClass =
  "inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_16px_30px_rgba(0,0,0,0.25)] lg:px-7 lg:py-3.5 lg:text-[12px] xl:px-8 xl:py-4 xl:text-[13px] min-[1600px]:px-9 min-[1600px]:text-[14px]";

const experienceCtaClass =
  "inline-flex w-fit items-center justify-center rounded-full border border-white/60 bg-transparent px-[22px] py-[12px] text-[12px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10 lg:px-[24px] lg:py-[13px] lg:text-[13px]";

const cornerClass =
  "absolute h-8 w-8 border-white/70 max-[768px]:h-7 max-[768px]:w-7 max-[480px]:h-6 max-[480px]:w-6";

export default function InjectionHero() {
  const [useVideoFallback, setUseVideoFallback] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const probe = document.createElement("video");
    const canPlayWebm =
      probe.canPlayType?.('video/webm; codecs="vp9"') ||
      probe.canPlayType?.('video/webm; codecs="vp8"') ||
      probe.canPlayType?.("video/webm");

    if (!canPlayWebm) {
      setUseVideoFallback(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const saveData = navigator.connection?.saveData;

    if (!prefersReducedMotion && !saveData) {
      const frameId = window.requestAnimationFrame(() => {
        setShouldLoadVideo(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  return (
    <>
      <div className="relative">
        <section className="relative z-[6] h-[calc(92svh-64px)] min-h-[calc(92svh-64px)] max-h-[calc(92svh-64px)] overflow-hidden border-t-4 border-[#e11d2e] bg-[#0b3b6c] sm:h-[calc(92svh-68px)] sm:min-h-[calc(92svh-68px)] sm:max-h-[calc(92svh-68px)] lg:h-[calc(88svh-74px)] lg:min-h-[calc(88svh-74px)] lg:max-h-[calc(88svh-74px)] xl:h-[calc(88svh-78px)] xl:min-h-[calc(88svh-78px)] xl:max-h-[calc(88svh-78px)]">
          <div className="absolute inset-0">
            {useVideoFallback || !shouldLoadVideo ? (
              <Image
                src="/injectionmolding/injection.webp"
                alt="Injection moulding production line"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <video
                className="block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/injectionmolding/machines/3000ton.png"
                onError={() => setUseVideoFallback(true)}
              >
                <source src="/injectionmolding/hero.webm" type="video/webm" />
              </video>
            )}
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,66,120,0.82)_0%,rgba(8,66,120,0.62)_45%,rgba(8,66,120,0.2)_75%,rgba(8,66,120,0)_100%)]" />

          <div
            className="pointer-events-none absolute inset-0 mix-blend-screen bg-[linear-gradient(120deg,rgba(13,106,173,0)_0%,rgba(13,106,173,0.45)_55%,rgba(13,106,173,0.9)_100%)]"
            style={{ clipPath: "polygon(72% 0, 100% 0, 100% 100%, 48% 100%)" }}
            aria-hidden="true"
          />

          <div className="relative z-[3] flex w-[min(90%,680px)] max-w-[680px] flex-col items-start px-5 pt-12 pb-20 text-left text-white sm:px-8 md:px-12 lg:h-full lg:w-1/2 lg:max-w-none lg:justify-center lg:px-16 lg:py-0 xl:px-24 min-[1600px]:px-[132px] max-[1200px]:max-w-[600px] max-[900px]:w-[min(92%,640px)] max-[900px]:pt-11 max-[900px]:pb-[180px] max-[768px]:w-[min(96%,720px)] max-[768px]:max-w-full max-[768px]:px-4">
            <span className="inline-flex w-fit items-center rounded-full bg-white/18 px-[14px] py-[6px] text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[12px] sm:tracking-[0.18em] lg:px-4 lg:py-[7px] lg:text-[12px] xl:px-[18px] xl:py-[8px] xl:text-[13px] min-[1600px]:text-[14px]">
              Injection Moulding Manufacturer In India
            </span>
            <h1 className="mt-3 mb-[10px] font-condensed font-[700] text-[clamp(24px,6vw,48px)] uppercase leading-[1.05] tracking-[0.06em] text-white [text-shadow:0_6px_18px_rgba(0,0,0,0.45)] lg:mt-4 lg:mb-4 lg:max-w-full lg:text-[clamp(50px,3.9vw,68px)] xl:text-[clamp(58px,4.1vw,80px)] min-[1600px]:text-[clamp(68px,4.3vw,92px)] max-[768px]:max-w-[94vw] max-[768px]:text-[clamp(22px,9.2vw,40px)] max-[768px]:tracking-[0.04em]">
              Precision Injection Moulding For OEM And Industrial Programs
            </h1>
            <p className="mb-[18px] max-w-[620px] font-roboto text-[14px] leading-[1.6] tracking-[0.01em] text-white/90 [text-shadow:0_4px_12px_rgba(0,0,0,0.35)] sm:text-[15px] lg:mb-7 lg:max-w-full lg:text-[17px] lg:leading-[1.65] xl:text-[19px] xl:leading-[1.62] min-[1600px]:text-[22px] min-[1600px]:leading-[1.58] max-[768px]:max-w-[94vw]">
              Prem Industries operates a state-of-the-art injection moulding
              division with machine capacity from 160 to 3000 tons, supporting
              OEM plastic components, consumer durables, industrial assemblies,
              and scale-ready production programs.
            </p>
            <Link href="/contact" className={heroCtaClass}>
              Request An Injection Quote
            </Link>
          </div>
        </section>

        <div
          className="pointer-events-none absolute right-[10%] top-[calc(92svh-64px-365px)] z-[12] w-[40vw] min-w-[260px] max-w-[600px] max-[1400px]:max-w-[700px] sm:top-[calc(92svh-68px-375px)] max-[1200px]:max-w-[580px] lg:top-[calc(88svh-74px-385px)] max-[900px]:top-[calc(92svh-68px-295px)] max-[900px]:max-w-[520px] max-[768px]:top-[calc(92svh-64px-250px)] max-[768px]:max-w-[420px] max-[640px]:top-[calc(92svh-64px-215px)] max-[640px]:max-w-[360px] max-[480px]:top-[calc(92svh-64px-175px)] max-[480px]:max-w-[260px]"
          style={{
            filter:
              "drop-shadow(0 24px 40px rgba(8, 24, 40, 0.35)) drop-shadow(0 6px 12px rgba(8, 24, 40, 0.25))",
          }}
        >
          <Image
            src="/injectionmolding/machine.png"
            alt="Injection moulding machine"
            width={800}
            height={448}
            sizes="(max-width: 1200px) 90vw, 800px"
            className="mx-auto block h-auto w-full max-w-full object-contain"
            priority
          />
        </div>

        <section className="relative z-[3] mt-[32px] mb-[30px] overflow-x-clip bg-[#14254c] px-6 pt-[64px] pb-14 max-[1024px]:mt-[24px] max-[1024px]:pt-[56px] max-[900px]:mt-[18px] max-[900px]:mb-[18px] max-[900px]:px-4 max-[900px]:pt-[42px] max-[900px]:pb-9 max-[640px]:mt-[14px] max-[640px]:px-3 max-[640px]:pt-[32px] max-[640px]:pb-7 max-[480px]:mt-[12px] max-[480px]:px-3 max-[480px]:pt-[24px] max-[480px]:pb-6">
          <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-[360px_minmax(0,1fr)] items-center text-white [gap:clamp(24px,3vw,42px)] pt-1 min-[1500px]:max-w-[1380px] max-[1200px]:grid-cols-[300px_minmax(0,1fr)] max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div className="relative flex min-h-[320px] items-center justify-center rounded-[4px] bg-white/[0.03] px-10 py-12 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] max-[900px]:min-h-[240px] max-[900px]:px-8 max-[900px]:py-10 max-[480px]:px-6 max-[480px]:py-8">
              <span
                className={`${cornerClass} left-5 top-5 border-l-2 border-t-2 max-[480px]:left-[14px] max-[480px]:top-[14px]`}
                aria-hidden="true"
              />
              <span
                className={`${cornerClass} right-5 top-5 border-r-2 border-t-2 max-[480px]:right-[14px] max-[480px]:top-[14px]`}
                aria-hidden="true"
              />
              <span
                className={`${cornerClass} bottom-5 left-5 border-l-2 border-b-2 max-[480px]:bottom-[14px] max-[480px]:left-[14px]`}
                aria-hidden="true"
              />
              <span
                className={`${cornerClass} right-5 bottom-5 border-r-2 border-b-2 max-[480px]:right-[14px] max-[480px]:bottom-[14px]`}
                aria-hidden="true"
              />

              <div className="relative flex translate-y-1 flex-col items-center leading-none">
                <span className="font-condensed text-[clamp(64px,13vw,164px)] font-extrabold leading-[0.82] tracking-[-0.03em] text-white/18 max-[768px]:text-[80px] max-[480px]:text-[64px] max-[360px]:text-[56px]">
                  50
                </span>
                <span className="absolute right-[-26px] top-0 font-condensed text-[clamp(34px,4.8vw,48px)] font-bold text-white/22 max-[768px]:right-[-18px] max-[768px]:text-[28px] max-[480px]:right-[-14px] max-[480px]:text-[22px]">
                  +
                </span>
                <span className="mt-2 pl-[0.35em] font-condensed text-[clamp(22px,3.8vw,42px)] font-bold tracking-[0.35em] text-white max-[768px]:text-[28px] max-[480px]:text-[22px] max-[360px]:text-[20px]">
                  YEARS
                </span>
              </div>
            </div>

            <div className="relative flex min-h-[320px] min-w-0 flex-col justify-center overflow-visible bg-transparent pt-1 pr-8 max-[1200px]:pr-4 max-[900px]:min-h-0 max-[900px]:items-center max-[900px]:px-2 max-[900px]:text-center">
              <div className="relative z-[2] flex min-h-full max-w-[840px] flex-col justify-center">
                <h2 className="mb-1 font-condensed text-[clamp(28px,3.4vw,40px)] font-[700] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.9)]">
                  50+ Years of Excellence
                </h2>
                <span className="mb-2 inline-flex font-roboto text-[clamp(15px,1.7vw,19px)] font-normal uppercase tracking-[0.06em] text-[rgba(220,235,255,0.85)]">
                  Business Experience
                </span>
                <p className="mb-6 max-w-full font-roboto text-[14px] font-light leading-[1.8] text-[rgba(235,245,255,0.9)] [text-align:justify] [text-justify:inter-word] lg:text-[15px] max-[900px]:max-w-none max-[900px]:text-left">
                  Prem Industries brings decades of manufacturing experience to
                  injection moulding, combining established execution discipline
                  with modern plastic processing capability. Our goal is to help
                  customers source molded components from a partner that
                  understands quality consistency, production planning, and
                  long-term supply reliability.
                </p>
                <Link href="/about" className={experienceCtaClass}>
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 right-[4%] w-[46%] rounded-[2px] bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.01)_100%)] opacity-50 max-[768px]:hidden"
              style={{ clipPath: "polygon(34% 0, 100% 0, 100% 100%, 0% 100%)" }}
              aria-hidden="true"
            />
          </div>
        </section>
      </div>

      <section className="overflow-x-clip bg-white">
        <div className="grid w-full max-w-full grid-cols-[minmax(280px,1fr)_minmax(320px,1fr)] max-[768px]:grid-cols-1">
          <div className="relative min-h-[340px] overflow-hidden [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] max-[768px]:min-h-[280px] max-[768px]:[clip-path:none]">
            <Image
              src="/injectionmolding/machines/1400Ton.png"
              alt="Injection moulding machine"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              className="object-cover object-center max-[768px]:object-contain"
            />
          </div>

          <div className="relative z-[2] ml-[-60px] flex flex-col bg-white px-12 pt-6 pb-0 max-[1024px]:ml-[-40px] max-[768px]:ml-0 max-[768px]:mt-[-40px] max-[768px]:px-5 max-[768px]:pt-10 max-[640px]:px-[18px] max-[640px]:pt-8">
            <div className="relative mb-[18px] flex items-start max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-4 max-[768px]:text-center">
              <div className="relative z-[2] flex flex-col gap-2 max-[768px]:items-center">
                <span className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#0b3378] sm:text-[18px]">
                  Prem Industries India Limited
                </span>
                <span
                  className="h-[3px] w-[140px] bg-[#e11d2e] sm:w-[200px]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mb-[18px] flex flex-1 flex-col gap-1 max-[768px]:items-center max-[768px]:text-center">
                <span className="text-[15px] font-semibold uppercase tracking-[0.04em] text-[#0b3378] sm:text-[18px]">
                Expanding Into
                </span>
              <span className="text-[18px] font-extrabold uppercase tracking-[0.02em] text-[#0b3378] sm:text-[22px]">
                Injection Moulding
              </span>
                <span className="text-[15px] font-semibold uppercase leading-[1.4] tracking-[0.04em] text-[#0b3378] sm:text-[18px]">
                to expand and reinforce our industrial manufacturing capability
                </span>
            </div>

            <div className="mb-[18px] grid gap-[10px] text-[14px] leading-[1.6] text-[#1c2d57]">
              <p className="m-0">
                We&apos;re investing &#8377;100 crore over the next three years
                to build a world-class injection moulding facility that combines
                advanced infrastructure, modern machinery, and highly skilled
                talent for large-scale manufacturing.
              </p>
              <p className="m-0">
                Our vision is clear: to become India&apos;s trusted partner for
                precision plastic moulding across diverse sectors.
              </p>
            </div>

            <div className="mx-[-48px] bg-[#0b3378] px-6 py-4 text-[13px] font-medium leading-[1.5] tracking-[0.02em] text-white max-[768px]:mx-[-20px] max-[768px]:px-5 max-[768px]:py-[14px] max-[768px]:text-center max-[768px]:text-[11px]">
              <span className="mb-[10px] block text-[12px] font-bold uppercase tracking-[0.1em]">
                What We Manufacture
              </span>
              <ul className="m-0 grid gap-[6px] pl-[18px] max-[768px]:pl-4 max-[768px]:text-left">
                <li>
                  Consumer Durables: AC components, cooler parts, appliance
                  housings, and repeat-use home appliance parts
                </li>
                <li>
                  E-commerce &amp; Logistics Solutions: Durable pallets, storage
                  bins, and totes designed for heavy-duty operations
                </li>
                <li>
                  Custom Components: Tailored moulding solutions engineered to
                  meet product-specific industry requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
