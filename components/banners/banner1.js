"use client";

import React from "react";
import Link from "next/link";

const PageBanner = ({ bannerBg, title }) => {
  return (
    <div
      className="page-banner-wrap bg-cover testing-css"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="page-heading text-white">
              <h1 className="wow fadeInLeft animated">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
