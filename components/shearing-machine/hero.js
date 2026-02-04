"use client";

// Slider removed: no Swiper imports or CSS needed

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

      {/* Single static banner */}
      <div className="hero-slider-2">
        <div
          className="single-slide"
          style={singleSlideStyle("/sheetmetal/shearing-1.jpg")} // change path if needed
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
                    Shearing <br /> Machine
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
