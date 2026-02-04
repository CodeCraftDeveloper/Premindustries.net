"use client"; // only if you're in Next.js app/ directory

import React from "react";

const Vision = () => {
  return (
    <section className="why-choice-us section-padding mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-6 col-12 text-center">
            <div className="block-contents">
              <div className="section-title">
                {/* <span>Why Choose Us</span> */}
                <h2>Our Vision</h2>
              </div>
            </div>
            <p style={{ textAlign: "justify" }}>
              To be a world class leader in businesses that enrich lives and
              contribute to nations in building infrastructure through
              sustainable value creation.
            </p>
          </div>
        </div>
      </div>

      {/* Background image div */}
      <div
        className="why-choice-bg bg-cover d-none d-xl-block offset-xl-7 offset-lg-4 col-lg-8 col-xl-6"
        style={{ backgroundImage: `url(/about/vision.jpg)` }} // use .src for Next.js images
      ></div>
    </section>
  );
};

export default Vision;
