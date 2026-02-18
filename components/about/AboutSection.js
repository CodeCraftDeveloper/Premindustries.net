"use client"; // add if you're using Next.js app/ directory

import React from "react";
import Link from "next/link";
import Image from "next/image";

const d = new Date();
let currentYear = d.getFullYear();

const AboutTwo = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-12 pe-xl-0">
            <div
              className="about-cover-bg bg-cover me-xl-5 wow fadeInLeft animated"
              style={{ backgroundImage: `url("/home/about-img.jpg")` }} // `.src` for Next image import
            >
              <div className="our-experience-years shadow-lg">
                <div className="year-outline">
                  <h2>{currentYear - 1976 || 50}</h2>
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
                  About
                </span>
                <h2 className="wow fadeInLeft animated">
                  Prem Industries India Limited
                </h2>
              </div>
              {/* <blockquote>Innovation in Action</blockquote> */}
            </div>

            <p
              className="wow fadeInLeft animated"
              style={{ textAlign: "justify", fontSize: "17px" }}
            >
              Goel Groups foundation was laid in 1975 by the Chairman Mr. Ved
              Prakash Goel. Goel Group is now a diversified organization in
              India with focus on B2B sector. It has created a big footprint in
              northern India with a portfolio comprising from packaging, steel,
              retail and construction as the main drivers of growth.
              Headquartered in Uttar Pradesh, India, it has positioned itself to
              be the North Indian market leader in packaging and steel trading
              businesses focusing on large scale development in the region with
              O&M practices benchmarked to global standards. <br />
              The group owes it success and leadership position to its core
              philosophy of ‘nation building’ driven by ‘growth with goodness’-
              a guiding principle for sustainable growth. <br />
              Out of our 25 lakh square feet covered area, 20 lakh square feet
              are in prime locations across Delhi NCR catering to meet various
              demands.
            </p>
          </div>
        </div>
      </div>
      <h2 className="section-rotate-title d-none d-xxl-block">ABOUT</h2>
    </section>
  );
};

export default AboutTwo;
