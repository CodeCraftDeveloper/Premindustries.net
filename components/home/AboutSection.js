// components/AboutTwo.js
"use client";

import Link from "next/link";

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

export default function AboutTwo(props) {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 1976;

  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-12 pe-xl-0">
            <div
              className="about-cover-bg bg-cover me-xl-5 wow fadeInLeft animated"
              style={{ backgroundImage: "url(home/about-img.jpg)" }}
            >
              <div className="our-experience-years shadow-lg">
                <div className="year-outline">
                  <h2>{years}</h2>
                </div>
                <p>
                  Years of <span>Experience</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-6 mt-5 mt-lg-0 col-12">
            <div className="block-contents">
              <div className="section-title">
                <span
                  className="wow fadeInLeft animated"
                  style={{ fontSize: "17px" }}
                >
                  {props.subhead}
                </span>
                <h2 className="wow fadeInLeft animated">{props.head}</h2>
              </div>
              {/* <blockquote>Innovation in Action</blockquote> */}
            </div>

            <p
              className="wow fadeInLeft animated"
              style={{ textAlign: "justify", fontSize: "17px" }}
            >
              {props.text1} <br />
              {props.text2} <br />
              {props.text3}
            </p>

            <Link
              href="/about"
              className={props.btnClass}
              onClick={ScrollToTop}
            >
              {props.btnText}
            </Link>
          </div>
        </div>
      </div>

      <h2 className="section-rotate-title d-none d-xxl-block">
        {props.verticalText}
      </h2>
    </section>
  );
}
