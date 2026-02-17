// app/components/HeaderTwo.tsx (or /components/HeaderTwo.tsx)
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const HeaderTwo = () => {
  const [search, setSearch] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleSearch = () => setSearch((s) => !s);
  const handleMobileMenu = () => setMobileMenu((m) => !m);

  return (
    <header className="header-wrap header-2">
      <div className="main-header-wrapper">
        <div
          className="container-fluid align-items-center justify-content-between d-flex"
          style={{ backgroundColor: "white" }}
        >
          <div className="logo wow fadeInLeft animated">
            <Link href="/" scroll>
              <Image src="/logo.png" alt="logo" width={100} height={70} />
            </Link>
          </div>

          <div className="main-menu d-none d-lg-block">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">about us</Link>
              </li>

              <li>
                <Link href="/">
                  Sectors <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="https://prempackaging.com/">
                      Packaging <br />
                      Sector{" "}
                      <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Steel Sector{" "}
                      <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/" onClick={(e) => e.preventDefault()}>
                          Manufacturing{" "}
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/sheet-metal-components">
                              Sheet Metal Components
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link href="/" onClick={(e) => e.preventDefault()}>
                          Trading{" "}
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ fontSize: "14px" }}
                          ></i>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/mangaldeep-steels">
                              Mangaldeep Steels
                            </Link>
                          </li>
                          <li>
                            <Link href="/premhari">Premhari</Link>
                          </li>
                          <li>
                            <a
                              href="https://www.phsteel.in/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              PH Steels
                            </a>
                          </li>
                          <li>
                            <Link href="/dream-metplast">Dream metplast</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/injectionmoulding">
                      Moulding <br />
                      Sector{" "}
                      <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Retail Sector{" "}
                      <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/prem-paints">Prem Paints</Link>
                      </li>
                      <li>
                        <Link href="/nourishing-foods">Nourishing Foods</Link>
                      </li>
                      <li>
                        <Link href="/prem-shanti">Prem Shanti</Link>
                      </li>
                      <li>
                        <Link href="/prem-pigments">Prem Pigments</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/">
                      Construction Sector{" "}
                      <i
                        className="fa-solid fa-chevron-right"
                        style={{ fontSize: "14px" }}
                      ></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/ved-kranti-constructions">
                          Ved Kranti Constructions
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* <li><Link href="/news">News</Link></li> */}

              <li>
                <Link href="/clients">Our Clients</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>

              <li>
                <Link href="/">
                  Other Websites <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link
                      href="https://prempackaging.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Prem Packaging
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://phsteel.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PH Steel
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="d-inline-block d-lg-none">
            <div className="mobile-nav-wrap">
              <div id="hamburger" onClick={handleMobileMenu}>
                <i className="fa fa-bars" />
              </div>
              <MobileMenu
                mobileMenu={mobileMenu}
                handleMobileMenu={handleMobileMenu}
              />
            </div>
            <div className="overlay" />
          </div>

          <div className="right-elements d-none d-xl-flex d-flex align-items-center">
            <div className="search-icon">
              {/* Toggle button (uncomment if you need a trigger icon) */}
              {/* <span className="search-btn" onClick={handleSearch} style={{ cursor: "pointer" }}>
                <i className="fas fa-search" />
              </span> */}
              <div className={search ? "search-box" : "search-box show"}>
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fal fa-search" />
                  </button>
                </form>
              </div>
            </div>

            {/* <div className="call-action text-center">
              <a href="tel:+918447247227">
                <span>Contact us</span>
                <p>+918447247227</p>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
