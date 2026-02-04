"use client"; // only if using Next.js app/ directory

import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <section className="why-choice-us section-padding mt-5">
      {/* Background image div */}
      <div
        className="why-choice-bg bg-cover d-none d-xl-block"
        style={{ backgroundImage: `url("/about/mission.jpg")` }} // use .src for imported images
      ></div>

      <div className="container">
        <div className="row">
          <div className="offset-xl-7 offset-lg-4 col-lg-8 col-xl-6 col-12 text-center">
            <div className="block-contents">
              <div className="section-title">
                {/* <span>Why Choose Us</span> */}
                <h2 className="text-center">Our Mission</h2>
              </div>
            </div>
            <p style={{ textAlign: "justify" }}>
              We leverage the power of global insights, relationships,
              collaborations and learnings to become one stop solutions
              providers for our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
