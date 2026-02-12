"use client";

import Image from "next/image";
import Link from "next/link";

export default function WorkForYouSection() {
  return (
    <section className="work-for-you">
      <div className="container">
        <div className="head">
          <div className="left">
            {/* <p className="kicker">ABOUT US</p> */}
            <h2>
              We Work For You Since <span>1977</span> Industrial Around The
            </h2>
          </div>
          <p className="intro">
            Welcome to Prem Industries. Your trusted partner in delivering
            top-quality metal solutions. We combine legacy knowledge and modern
            industrial expertise.
          </p>
        </div>

        <div className="body">
          <div className="photo-main">
            <video
              className="main-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/home/luxury-packaging.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="side">
            <article className="badge">
              <h3>Prem Industries</h3>
              <p>we build the business in world together with quality</p>
              <div className="badge-links">
                <a href="tel:+918447247227">+918447247227</a>
                <a href="mailto:ecommerce@premindustries.in">
                  ecommerce@premindustries.in
                </a>
                <Link href="/contact" className="badge-cta">
                  Contact Form
                </Link>
              </div>
            </article>

            <div className="photo-small">
              <Image
                src="/home/Innovation.jpg"
                alt="Industrial operations"
                fill
                unoptimized
                sizes="(max-width: 991px) 100vw, 30vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .work-for-you {
          padding: 26px 0 34px;
          background: #f5f5f5;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .head {
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(260px, 0.7fr);
          gap: 18px;
          align-items: start;
          margin-bottom: 14px;
        }

        .kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8a8a8a;
          font-weight: 700;
        }

        .left h2 {
          margin: 8px 0 0;
          font-size: clamp(30px, 2.8vw, 44px);
          line-height: 1.08;
          color: #202020;
          text-transform: none;
          max-width: 720px;
        }

        .left h2 span {
          color: #e92127;
        }

        .intro {
          margin: 2px 0 0;
          color: #7a7a7a;
          font-size: 13px;
          line-height: 1.6;
          text-align: left;
        }

        .body {
          display: grid;
          grid-template-columns: minmax(300px, 1fr) minmax(220px, 0.42fr);
          gap: 10px;
        }

        .photo-main,
        .photo-small {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .photo-main {
          min-height: 360px;
        }

        .main-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .side {
          display: grid;
          grid-template-rows: auto 1fr;
          gap: 10px;
        }

        .badge {
          background: #13224d;
          color: #ffffff;
          border-radius: 4px;
          padding: 16px 18px;
        }

        .badge h3 {
          margin: 0;
          font-size: 20px;
          color: #ffffff;
          text-transform: none;
          font-weight: 700;
        }

        .badge p {
          margin: 8px 0 10px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.5;
        }

        .badge-links {
          display: grid;
          gap: 6px;
        }

        .badge-links a {
          color: #dce7ff !important;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .badge-links a:hover {
          color: #ffffff !important;
        }

        .badge .badge-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          margin-top: 4px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #e92127;
          background: #e92127;
          color: #ffffff !important;
          letter-spacing: 0.04em;
          transition: background 0.2s ease, border-color 0.2s ease,
            color 0.2s ease, transform 0.2s ease;
        }

        .badge .badge-cta:hover {
          background: #ffffff;
          border-color: #ffffff;
          color: #13224d !important;
          transform: translateY(-1px);
        }

        .photo-small {
          min-height: 164px;
        }

        @media (max-width: 991px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .head,
          .body {
            grid-template-columns: 1fr;
          }

          .photo-main {
            min-height: 280px;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .left h2 {
            font-size: clamp(25px, 7vw, 36px);
          }
        }
      `}</style>
    </section>
  );
}
