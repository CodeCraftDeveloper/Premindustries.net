"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules"; // If you're on Swiper v9, use: from 'swiper'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Static image imports (works in Next.js)
// If you keep them as files next to this component, these paths are fine.
// If you move images to /public, switch to string paths like '/Images/banner/best.jpg'
// import PressBanner from "./Images/banner/press-new.jpg";
// import WeldBanner from "./Images/banner/weld.jpg";
// import ToolBanner from "./Images/banner/tool.jpg";
// import BestBanner from "./Images/banner/best.jpg";

const textOutlineStyle = {
  color: "#000",
  fontWeight: "bold",
  textShadow: `
    -1px -1px 0 white,
     1px -1px 0 white,
    -1px  1px 0 white,
     1px  1px 0 white
  `,
};

const bannerHeight = "600px";

const singleSlideStyle = (img) => ({
  backgroundImage: `url(${typeof img === "string" ? img : img?.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: bannerHeight,
  display: "flex",
  alignItems: "center",
});

export default function HeroTwo() {
  return (
    <section className="hero-wrapper hero-2">
      <marquee style={{ backgroundColor: "#E92227", color: "white" }}>
        <b>We Are Working On Updates. Stay Tuned For Fresh Content!</b>
      </marquee>

      <Swiper navigation modules={[Navigation, EffectFade]} effect="fade" loop>
        <SwiperSlide className="hero-slider-2">
          <div
            className="single-slide"
            style={singleSlideStyle("/sheetmetal/best.jpg")}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 pe-lg-5 col-xxl-12 col-lg-12">
                  <div className="hero-contents pe-lg-3">
                    <h1
                      style={textOutlineStyle}
                      className="wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                    >
                      Best Quality
                      <br /> Sheet Metal <br /> Components
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slider-2">
          <div
            className="single-slide"
            style={singleSlideStyle("/sheetmetal/press-new.jpg")}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 pe-lg-5 col-xxl-7 col-lg-9">
                  <div className="hero-contents pe-lg-3">
                    <h1
                      style={textOutlineStyle}
                      className="wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                    >
                      Press <br /> Shop
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slider-2">
          <div
            className="single-slide"
            style={singleSlideStyle("/sheetmetal/weld.jpg")}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 pe-lg-5 col-xxl-7 col-lg-9">
                  <div className="hero-contents pe-lg-3">
                    <h1
                      style={textOutlineStyle}
                      className="wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                    >
                      Weld <br /> Shop
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slider-2">
          <div
            className="single-slide"
            style={singleSlideStyle("/sheetmetal/tool.jpg")}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 pe-lg-5 col-xxl-7 col-lg-9">
                  <div className="hero-contents pe-lg-3">
                    <h1
                      style={textOutlineStyle}
                      className="wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                    >
                      Tool <br /> Room
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
