// components/ProjectsTab.js
"use client";

import Link from "next/link";
import Image from "next/image";

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

export default function ProjectsTab() {
  return (
    <section className="our-info-tabs-wrapper home-tabs">
      <div className="container home-tabs-container">
        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="project-tabs-wrapper">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-tab1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tab-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-tab-1"
                    aria-selected="true"
                  >
                    Packaging Sector
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-tab2"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tab-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-tab-2"
                    aria-selected="false"
                  >
                    Steel Sector
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-tab3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tab-3"
                    type="button"
                    role="tab"
                    aria-controls="pills-tab-3"
                    aria-selected="false"
                  >
                    Retail Sector
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-tab4"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tab-4"
                    type="button"
                    role="tab"
                    aria-controls="pills-tab-4"
                    aria-selected="false"
                  >
                    Construction Sector
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                {/* Packaging */}
                <div
                  className="tab-pane fade show active"
                  id="pills-tab-1"
                  role="tabpanel"
                  aria-labelledby="pills-tab-1"
                >
                  <div className="tab-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h2>
                          Protecting your products with innovative solutions.
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                          For decades, we have been a trusted name in the
                          packaging sector, specializing in high-quality
                          solutions that cater to diverse needs. Our offerings
                          include corrugated boxes, tapes, labels, rigid boxes,
                          flexibles, and pouches. Committed to excellence, we
                          ensure that your products are safely and attractively
                          packaged every time.
                        </p>
                        <a
                          href="https://prempackaging.com/"
                          style={{ color: "#E92227" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read More{" "}
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </a>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="tab-img">
                          <Image
                            src="/home/sector-packagingsector.jpg"
                            alt="Packaging sector"
                            width={900}
                            height={600}
                            style={{ width: "100%", height: "auto" }}
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Steel */}
                <div
                  className="tab-pane fade"
                  id="pills-tab-2"
                  role="tabpanel"
                  aria-labelledby="pills-tab-2"
                >
                  <div className="tab-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h2>
                          Forging strength and precision into every steel
                          product.
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                          As a prominent player in the steel industry, we are
                          dedicated to delivering top-quality products and
                          driving innovation. Our associated companies PH Steel
                          Industries, Mangaldeep Steels, PH Steels, PremHari
                          Steels Private Ltd, and Dream Metplast Private Limited
                          are known for setting industry benchmarks for
                          excellence.
                        </p>
                        <a
                          href="https://www.phsteels.com/"
                          style={{ color: "#E92227" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read More{" "}
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </a>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="tab-img">
                          <Image
                            src="/home/sector-steelsector.jpg"
                            alt="Steel sector"
                            width={900}
                            height={600}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Retail */}
                <div
                  className="tab-pane fade"
                  id="pills-tab-3"
                  role="tabpanel"
                  aria-labelledby="pills-tab-3"
                >
                  <div className="tab-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h2>
                          Delivering quality and trust across diverse consumer
                          needs.
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                          We lead the retail sector by offering top-quality
                          products through our associated companies Prem Paints,
                          Nourishing Foods Pvt. Ltd., Prem Shanti and Company,
                          Mangaldeep, and Prem Pigments Limited. Our focus on
                          excellence and innovation ensures that we remain a
                          trusted name in the industry.
                        </p>
                        <Link
                          href="/retail-sector"
                          style={{ color: "#E92227" }}
                          onClick={ScrollToTop}
                        >
                          Read More{" "}
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="tab-img">
                          <Image
                            src="/home/sector-retailsector.jpg"
                            alt="Retail sector"
                            width={900}
                            height={600}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Construction */}
                <div
                  className="tab-pane fade"
                  id="pills-tab-4"
                  role="tabpanel"
                  aria-labelledby="pills-tab-4"
                >
                  <div className="tab-content-wrapper">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h2>
                          Building landmarks with innovation and integrity.
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                          Through our expertise in the construction sector, we
                          have successfully completed a wide range of projects,
                          including malls, multiplexes, institutions, and
                          industrial sheds. Our commitment to quality and timely
                          delivery makes us a reliable partner in building
                          robust and innovative structures.
                        </p>
                        <Link
                          href="/construction-sector"
                          style={{ color: "#E92227" }}
                          onClick={ScrollToTop}
                        >
                          Read More{" "}
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="tab-img">
                          <Image
                            src="/home/sector-constructionsector.jpg"
                            alt="Construction sector"
                            width={900}
                            height={600}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End tabs */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-tabs-container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        :global(.home-tabs .project-tabs-wrapper .nav.nav-pills) {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          margin-left: 0;
        }

        :global(.home-tabs .project-tabs-wrapper .nav.nav-pills .nav-item) {
          width: 100%;
        }

        @media (max-width: 992px) {
          .home-tabs-container {
            padding-left: 18px;
            padding-right: 18px;
          }

          :global(.home-tabs .project-tabs-wrapper .nav.nav-pills) {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 6px;
            scrollbar-width: thin;
          }

          :global(.home-tabs .project-tabs-wrapper .nav.nav-pills .nav-item) {
            width: auto;
            min-width: 240px;
            flex: 0 0 auto;
          }

          :global(.home-tabs .project-tabs-wrapper .nav.nav-pills .nav-link) {
            white-space: nowrap;
          }
        }

        @media (max-width: 576px) {
          .home-tabs-container {
            padding-left: 14px;
            padding-right: 14px;
          }
        }
      `}</style>
    </section>
  );
}
