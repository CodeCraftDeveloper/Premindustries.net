"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import InfrastructureData from "../../components/sheetmetal/infrastructureData";

// If this image is in /public, use: const sectionBg = '/assets/img/project-bg-new.jpg';

const srcOf = (img) => (typeof img === "string" ? img : img?.src || "");

export default function Infrastructure() {
  return (
    <section
      className="project-carousel-wrapper bg-cover section-padding mb-5 pb-5 mt-4"
      style={{
        backgroundImage: `url(${srcOf("/sheetmetal/infrastructure/bg.jpg")})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div className="block-contents">
              <div className="section-title">
                <h2 className="text-white" style={{ fontSize: "40px" }}>
                  INFRASTRUCTURE FOR PRESS SHOP
                </h2>
                <p
                  className="text-white mt-5"
                  style={{ textAlign: "justify", fontSize: "17px" }}
                >
                  Equipped with a range of mechanical and hydraulic presses, our
                  press shop handles blanking, punching, bending, forming, and
                  deep drawing. All operations are managed by skilled
                  technicians under strict quality protocols, with a focus on
                  dimensional accuracy, strength, and consistency for ACs,
                  coolers, TVs, and refrigerators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-carousel-card-active text-white">
        <Swiper
          slidesPerView={3}
          loop
          navigation
          modules={[Navigation]}
          breakpoints={{
            "@0.00": { slidesPerView: 1, spaceBetween: 20 },
            "@0.75": { slidesPerView: 2, spaceBetween: 20 },
            "@1.00": { slidesPerView: 2, spaceBetween: 20 },
            "@1.50": { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {InfrastructureData.map((data) => (
            <SwiperSlide
              className="single-project-card shadow-lg"
              key={data.id}
            >
              <Link
                href={data.category}
                className="project-thumb bg-cover"
                style={{ backgroundImage: `url(${srcOf(data.img)})` }}
              />
              <div className="contents" style={{ backgroundColor: "#E92227" }}>
                <div className="project-number">
                  <h2>{data.index}</h2>
                </div>
                <div className="project-details">
                  <h3>
                    <Link href={data.category}>{data.location}</Link>
                  </h3>
                  <Link href={data.category}>{data.client}</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
