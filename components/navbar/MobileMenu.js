// app/components/MobileMenu.tsx (or /components/MobileMenu.tsx)
"use client";

import Link from "next/link";

const MobileMenu = ({ mobileMenu, handleMobileMenu, closeMobileMenu }) => {
  // Close menu when a nav item is clicked (optional UX)
  const onNavClick = () => closeMobileMenu();

  return (
    <div
      id="mobile-nav-panel"
      className={mobileMenu ? "mobile-nav show" : "mobile-nav"}
      aria-hidden={!mobileMenu}
    >
      <button onClick={handleMobileMenu} type="button" className="close-nav">
        <i className="fa fa-times-circle"></i>
      </button>

      <nav className="sidebar-nav">
        <ul className="metismenu" id="mobile-menu">
          <li>
            <Link className="fa-arrow" href="/" onClick={onNavClick}>
              HOME
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={onNavClick}>
              ABOUT US
            </Link>
          </li>

          <li>
            <Link href="/" onClick={onNavClick}>
              SECTORS
            </Link>
            <ul className="sub-menu">
              <li>
                <a
                  href="https://prempackaging.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PACKAGING SECTOR
                </a>
                <ul className="sub-menu">
                  <li style={{ paddingLeft: "20px" }}>
                    <Link href="/" target="_blank" rel="noreferrer">
                      FLEXIBLE DIVISION
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="https://phsteel.in/" target="_blank" rel="noreferrer">
                  STEEL SECTOR
                </a>
                <ul className="sub-menu">
                  <li style={{ paddingLeft: "20px" }}>
                    <Link
                      href="/sheet-metal-components"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SHEET METAL COMPONENTS
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <Link
                      href="/mangaldeep-steels"
                      target="_blank"
                      rel="noreferrer"
                    >
                      MANGALDEEP STEELS
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <Link href="/premhari" target="_blank" rel="noreferrer">
                      PREM HARI
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <a
                      href="https://www.phsteel.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PH STEELS
                    </a>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <Link
                      href="/dream-metplast"
                      target="_blank"
                      rel="noreferrer"
                    >
                      DREAM METPLAST
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/retail-sector" onClick={onNavClick}>
                  RETAIL SECTOR
                </Link>
                <ul className="sub-menu">
                  <li style={{ paddingLeft: "20px" }}>
                    <Link href="/prem-paints" target="_blank" rel="noreferrer">
                      PREM PAINTS
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <Link
                      href="/nourishing-foods"
                      target="_blank"
                      rel="noreferrer"
                    >
                      NOURISHING FOODS
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <Link href="/prem-shanti" target="_blank" rel="noreferrer">
                      PREM SHANTI
                    </Link>
                  </li>
                  <li style={{ paddingLeft: "20px" }}>
                    <Link
                      href="/prem-pigments"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PREM PIGMENTS
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/construction-sector" onClick={onNavClick}>
                  CONSTRUCTION SECTOR
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link className="fa-arrow" href="/clients" onClick={onNavClick}>
              OUR CLIENTS
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={onNavClick}>
              CONTACT US
            </Link>
          </li>

          <li>
            <Link href="/" onClick={onNavClick}>
              OTHER WEBSITES
            </Link>
            <ul className="sub-menu">
              <li>
                <a
                  href="https://prempackaging.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PREM PACKAGING
                </a>
              </li>
              <li>
                <a href="https://phsteel.in/" target="_blank" rel="noreferrer">
                  PH STEEL
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="action-bar">
        <a href="mailto:info@premindustries.in">
          <i className="fa fa-envelope"></i>info@premindustries.in
        </a>
        <a href="tel:+918447247227">
          <i className="fa fa-phone"></i>+91-84-472-47227
        </a>
        <Link href="/contact" className="d-btn theme-btn" onClick={onNavClick}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
