// app/components/FooterCta.tsx (or /components/FooterCta.tsx)
"use client";

import Link from "next/link";
import Image from "next/image";

const ScrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const FooterCta = () => {
  return (
    <div className="footer-cta-wrapper">
      <div className="container">
        <div
          className="footer-cta-bg-wrapper"
          style={{ backgroundColor: "#E92227" }}
        >
          <div className="row justify-content-around align-items-center">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="footer-logo">
                <Link href="/" onClick={ScrollToTop}>
                  <Image
                    src="/logo-white.png"
                    alt="logo"
                    width={150}
                    height={150}
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 ps-lg-0 offset-lg-1 col-12">
              <div className="footer-middle-text mt-4 mb-4 mt-md-0 mb-md-0 text-white">
                {/* <p>Where you see Innovation in Action! (TAGLINE)</p> */}
              </div>
            </div>

            <div className="col-md-4 col-lg-4 col-12">
              <div className="footer-social-icon ms-md-5 text-lg-md-end">
                {/* replace "/" with your real social links; add target="_blank" rel="noreferrer" if external */}
                <Link href="/" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="/" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="/" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="/" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="/" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCta;
