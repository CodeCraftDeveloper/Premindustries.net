// app/components/FooterOneCopyrights.tsx
"use client";

import Link from "next/link";

const currentYear = new Date().getFullYear();

const ScrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const FooterOneCopyrights = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 text-center text-md-start">
            <div className="copyright-info">
              <p>
                &copy; {currentYear}{" "}
                <Link href="/" onClick={ScrollToTop}>
                  Prem Industries India Limited
                </Link>
                . All Rights Reserved
              </p>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="footer-menu mt-3 mt-md-0 text-center text-md-end">
              <ul>
                <li>
                  <Link href="/terms-and-conditions" onClick={ScrollToTop}>
                    Terms &#38; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" onClick={ScrollToTop}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOneCopyrights;
