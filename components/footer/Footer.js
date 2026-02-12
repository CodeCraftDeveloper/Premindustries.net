"use client";

import Link from "next/link";
import FooterCta from "./FooterCta";
import FooterOneCopyrights from "./FooterOneCopyrights";
import PlantsMap from "./PlantsMap";
import { footerPlants } from "./footerPlants";

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

const FooterTwo = () => {
  return (
    <footer className="footer-2 footer-wrap">
      <div className="footer-widgets-wrapper text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 pe-xl-0 col-sm-6 col-12">
              <div className="single-footer-wid site_info_widget">
                <div className="wid-title">
                  <h3>Get In Touch</h3>
                </div>

                <div className="contact-us">
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-info">
                      <a href="tel:+918447247227">
                        <p>+91-844-724-7227</p>
                      </a>
                    </div>
                  </div>

                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                      <a href="mailto:info@premindustries.in">
                        <p>info@premindustries.in</p>
                      </a>
                    </div>
                  </div>

                  <div className="single-contact-info">
                    <div className="contact-info">
                      <Link
                        href="https://maps.app.goo.gl/yQVeh98nkHBfGWaR9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        C-209, Bulandshahr Road Industrial Area, Ghaziabad,
                        Uttar Pradesh 201009
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12">
              <div className="single-footer-wid">
                <div className="wid-title">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <Link href="/" onClick={ScrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={ScrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/sectors" onClick={ScrollToTop}>
                      Sectors
                    </Link>
                  </li>
                  <li>
                    <Link href="/clients" onClick={ScrollToTop}>
                      Our Clients
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={ScrollToTop}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">
              <div className="single-footer-wid newsletter_widget">
                <div className="wid-title text-center">
                  <h3>Our Footprint</h3>
                </div>
                <div className="map-location">
                  <PlantsMap plants={footerPlants} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterCta />
      <FooterOneCopyrights />
    </footer>
  );
};

export default FooterTwo;
