"use client";

import Image from "next/image";

const certs = [
  {
    alt: "Injection molding certificate 1",
    src: "/injectionmolding/injectionCertificate1.png",
    label: "ISO 14001:2015",
  },
  {
    alt: "Injection molding certificate 2",
    src: "/injectionmolding/injectionCertificate2.png",
    label: "Certificate of Registration",
  },
  {
    alt: "Injection molding certificate 3",
    src: "/injectionmolding/injectionCertificate3.png",
    label: "ISO 9001:2015",
  },
  {
    alt: "Injection molding certificate 4",
    src: "/injectionmolding/injectionCertificate4.png",
    label: "Certificate of Registration",
  },
];

export default function CertificationsSection() {
  return (
    <section className="cert-section">
      <div className="cert-wrap">
        <h2>Certified for Excellence</h2>
        <div className="cert-card">
          <div className="cert-grid">
            {certs.map((cert) => (
              <div className="cert-item" key={cert.src}>
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 900px) 80vw, 240px"
                  className="cert-image"
                />
                <span className="cert-label">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="cert-text">
          Our commitment to quality is backed by internationally recognized
          certifications that validate our processes, standards, and dedication
          to continuous improvement. These certifications aren&apos;t just
          badges&mdash;they&apos;re promises we make to our clients about the
          reliability and excellence you can expect from every partnership with
          Prem Industries.
        </p>
      </div>

      <style jsx>{`
        .cert-section {
          background: #14264f;
          padding: 50px 0 70px;
        }

        .cert-wrap {
          width: min(1100px, 92%);
          margin: 0 auto;
          text-align: center;
        }

        .cert-wrap h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: clamp(22px, 2.6vw, 32px);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .cert-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 22px 22px 26px;
          box-shadow: 0 16px 30px rgba(8, 20, 50, 0.18);
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .cert-item {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 8px;
          overflow: hidden;
          background: #f4f6fb;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .cert-label {
          position: absolute;
          bottom: 8px;
          left: 8px;
          right: 8px;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0b3378;
          background: rgba(255, 255, 255, 0.85);
          padding: 6px 8px;
          border-radius: 999px;
        }

        .cert-image {
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .cert-text {
          margin: 18px auto 0;
          max-width: 900px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .cert-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .cert-card {
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
