"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

export default function InjectionProcess() {
  const machineSlides = [
    {
      title: "250 Ton - Precision Series",
      description:
        "Ideal for tight-tolerance parts and intricate components. Optimized for repeatability with fast cycle times and excellent surface finish.",
      image: "/injectionmolding/machines/250Ton.png",
    },
    {
      title: "600 Ton - High Volume Line",
      description:
        "Balanced for speed and stability. Suitable for medium to large parts with consistent dimensional control and low scrap rates.",
      image: "/injectionmolding/machines/600ton.png",
    },
    {
      title: "850 Ton - Assembly Line",
      description:
        "Integrated assembly and inspection workflows to ensure ready-to-ship components with consistent quality checks.",
      image: "/injectionmolding/machines/850Ton.png",
    },
    {
      title: "1000 Ton - Structural Molding",
      description:
        "Built for heavier-duty components. Supports complex tooling and multi-cavity molds without compromising precision.",
      image: "/injectionmolding/machines/1000ton.png",
    },
    {
      title: "1800 Ton - Large Part Cell",
      description:
        "For large industrial parts requiring stable clamping force, uniform fill, and repeatable quality across long runs.",
      image: "/injectionmolding/machines/1800ton.png",
      scale: 0.8,
    },
    {
      title: "3000 Ton - Heavy Duty Platform",
      description:
        "Our largest capacity system for oversized parts and demanding tolerances with robust automation support.",
      image: "/injectionmolding/machines/3000ton.png",
      scale: 0.8,
    },
  ];

  return (
    <section className="range-section">
      <div className="range-shell">
        <h2>Ranging from 160 Tons to 3000 Tons</h2>
        <div className="range-grid">
          <div className="range-text">
            <p className="range-copy">
              Our facility houses state-of-the-art injection molding machines
              capable of handling projects of any scale&mdash;from intricate
              small components to large industrial parts.
            </p>
            <p className="range-copy">
              Whether you need high-volume production or specialized precision
              molding, our diverse machine range ensures we can deliver exactly
              what your project demands.
            </p>
          </div>
        </div>
      </div>

      <div className="range-carousel">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="range-swiper"
        >
          {machineSlides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="range-slide">
                <div className="slide-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
                <div className="slide-media">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1200}
                    height={700}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="slide-image"
                    style={
                      slide.scale
                        ? { transform: `scale(${slide.scale})` }
                        : undefined
                    }
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .range-section {
          background: #ffffff;
          padding: 10px 0 24px;
        }

        .range-shell {
          width: 100%;
          padding: 0 42px 18px;
          max-width: none;
          margin: 0;
        }

        .range-shell h2 {
          margin: 0 0 12px;
          font-size: clamp(24px, 3.4vw, 40px);
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0b3378;
          text-transform: uppercase;
          line-height: 1.15;
          position: relative;
          display: block;
          font-family: "Oswald", sans-serif;
          text-align: center;
        }

        .range-shell h2::after {
          content: "";
          display: block;
          width: 72px;
          height: 4px;
          background: #e11d2e;
          border-radius: 999px;
          margin: 10px auto 0;
        }

        .range-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 3vw, 32px);
          align-items: start;
          justify-items: center;
          width: 100%;
        }

        .range-text {
          display: grid;
          gap: 10px;
          text-align: center;
          justify-items: center;
          width: 100%;
        }

        .range-copy {
          margin: 0;
          font-size: 15px;
          color: #415070;
          line-height: 1.7;
          max-width: none;
          width: 100%;
        }

        .range-carousel {
          padding: 0 42px 8px;
          position: relative;
        }

        .range-slide {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(16px, 3vw, 28px);
          align-items: center;
          background: #0b1d3a;
          border-radius: 22px;
          padding: clamp(22px, 3.2vw, 32px);
          color: #f7f9ff;
          min-height: clamp(240px, 28vw, 380px);
          overflow: hidden;
        }

        .slide-text {
          padding-left: 24px;
          text-align: center;
          display: grid;
          justify-items: center;
        }

        .range-slide::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 30%,
            rgba(255, 255, 255, 0.08),
            transparent 55%
          );
          pointer-events: none;
        }

        .slide-text h3 {
          margin: 0 0 12px;
          font-size: clamp(20px, 2.4vw, 30px);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-family: "Oswald", sans-serif;
          color: #f8fbff;
          line-height: 1.2;
        }

        .slide-text p {
          margin: 0;
          color: rgba(247, 249, 255, 0.88);
          line-height: 1.75;
          font-size: 15.5px;
          max-width: 42ch;
        }

        .slide-media {
          position: relative;
          width: 100%;
          height: 420px; /* fixed visual area */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        :global(.slide-media > span) {
          display: flex !important;
          align-items: center;
          justify-content: center;
          width: 100% !important;
          height: 100% !important;
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
          align-self: center;
          display: block;
          filter: drop-shadow(0 18px 28px rgba(4, 12, 28, 0.35));
        }

        :global(.range-swiper .swiper-button-next),
        :global(.range-swiper .swiper-button-prev) {
          color: #ffffff;
          width: 44px;
          height: 44px;
          background: rgba(11, 29, 58, 0.8);
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
        }

        :global(.range-swiper .swiper-button-next::after),
        :global(.range-swiper .swiper-button-prev::after) {
          font-size: 18px;
          font-weight: 700;
        }

        :global(.range-swiper .swiper-button-prev) {
          left: -8px;
        }

        :global(.range-swiper .swiper-button-next) {
          right: -8px;
        }

        :global(.range-swiper .swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        :global(.range-swiper .swiper-pagination-bullet-active) {
          background: #ffffff;
        }

        @media (max-width: 768px) {
          .range-shell {
            padding: 0 16px 12px;
          }

          .range-shell h2 {
            letter-spacing: 0.08em;
          }

          .range-grid {
            grid-template-columns: 1fr;
          }

          .range-carousel {
            padding: 0 16px 12px;
          }

          .range-slide {
            grid-template-columns: 1fr;
            min-height: unset;
          }

          .slide-media {
            height: 280px;
          }

          .slide-image {
            width: 100%;
            height: 100%;
          }

          :global(.range-swiper .swiper-button-next),
          :global(.range-swiper .swiper-button-prev) {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
