"use client"; // only if you're inside Next.js app/ directory

import React from "react";
import Image from "next/image";

const Keypoints = () => {
  return (
    <div className="container mb-5">
      <div className="row mt-lg-5 mt-3">
        <div className="col-md-6 col-12 col-lg-4">
          <div className="single-icon-border-box">
            <div className="icon">
              <Image
                src="/about/keyword-trust.png"
                alt="Trust"
                height={100}
                width={100}
              />
            </div>
            <div className="content">
              <h6>
                <span>Trusted</span> Worldwide
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12 col-lg-4">
          <div className="single-icon-border-box">
            <div className="icon">
              <Image
                src="/about/keyword-secure.png"
                alt="Secure"
                height={100}
                width={100}
              />
            </div>
            <div className="content">
              <h6>
                <span>Secure</span> Registered by Govt
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12 col-lg-4">
          <div className="single-icon-border-box">
            <div className="icon">
              <Image
                src="/about/keyword-mission.png"
                alt="Mission"
                height={100}
                width={100}
              />
            </div>
            <div className="content">
              <h6>
                <span>Mission</span> For Achievement
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keypoints;
