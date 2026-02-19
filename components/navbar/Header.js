// app/components/HeaderTwo.tsx (or /components/HeaderTwo.tsx)
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const HeaderTwo = () => {
  const [search] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => setMobileMenu((m) => !m);
  const closeMobileMenu = () => setMobileMenu(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileMenu);
    return () => document.body.classList.remove("nav-open");
  }, [mobileMenu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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

          <div className="main-menu desktop-nav">
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

          <div className="mobile-nav-trigger">
            <div className="mobile-nav-wrap">
              <button
                id="hamburger"
                type="button"
                onClick={handleMobileMenu}
                className={mobileMenu ? "hamburger-btn is-open" : "hamburger-btn"}
                aria-expanded={mobileMenu}
                aria-controls="mobile-nav-panel"
                aria-label={mobileMenu ? "Close menu" : "Open menu"}
              >
                <span />
                <span />
                <span />
              </button>
              <MobileMenu
                mobileMenu={mobileMenu}
                handleMobileMenu={handleMobileMenu}
                closeMobileMenu={closeMobileMenu}
              />
            </div>
            <button
              type="button"
              className={mobileMenu ? "overlay active" : "overlay"}
              aria-label="Close menu"
              onClick={closeMobileMenu}
            />
          </div>

          <div className="right-elements desktop-right d-flex align-items-center">
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
