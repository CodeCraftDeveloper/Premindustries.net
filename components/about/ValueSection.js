"use client"; // only if inside app/ directory

import React from "react";
import Image from "next/image";

const Values = () => {
  return (
    <section className="our-info-tabs-wrapper mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="project-tabs-wrapper">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-tab-1"
                  role="tabpanel"
                  aria-labelledby="pills-tab-1"
                >
                  <div className="tab-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h1 className="text-center">Our Values</h1>
                        <ul className="mt-5">
                          <li>
                            <span>&bull;</span> We shall embrace new ideas and
                            businesses.
                          </li>
                          <li>
                            <span>&bull;</span> We shall believe in our
                            employees and other shareholders.
                          </li>
                          <li>
                            <span>&bull;</span> We shall stand by our promises
                            and adhere to high
                          </li>
                          <li>
                            <span>&bull;</span> Standards of business
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6 col-12">
                        <div className="tab-img">
                          {/* ✅ Next.js optimized image */}
                          <Image
                            src="/about/value.jpg"
                            alt="Our Values"
                            className="img-fluid"
                            width={500}
                            height={300}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
