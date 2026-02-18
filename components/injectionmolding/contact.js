import React from "react";

export default function InjectionContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-wrap">
        <h2>Prem Industries India Limited</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <p className="contact-label">Unit 1</p>
            <p>
              C-209, Bulandshahar Road, Industrial Area, Ghaziabad, (U.P) 201009
            </p>
          </div>
          <div className="contact-card">
            <p className="contact-label">Unit 2</p>
            <p>
              22/13, South Side G.T. Road, Industrial Area, Ghaziabad (U.P)
              201009
            </p>
          </div>
          <div className="contact-card">
            <p className="contact-label">Unit 3</p>
            <p>Plot No. 32, Ecotech XII, Greater Noida, (U.P) 201301</p>
          </div>
          <div className="contact-card">
            <p className="contact-label">Unit 4</p>
            <p>
              Dadri Bypass Road, Village Chithera, Dadri, G.B Nagar, (U.P)
              203207
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: #ffffff;
          padding: 50px 0 70px;
        }

        .contact-wrap {
          width: min(1200px, 92%);
          margin: 0 auto;
        }

        .contact-wrap h2 {
          margin: 0 0 24px;
          font-size: clamp(22px, 2.6vw, 32px);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0b3378;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .contact-card {
          background: #f5f7fc;
          border-radius: 12px;
          padding: 18px 20px;
          box-shadow: 0 10px 22px rgba(9, 24, 60, 0.12);
          border: 1px solid rgba(9, 28, 70, 0.08);
        }

        .contact-card p {
          margin: 0;
          color: #203a70;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-label {
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 11px;
          color: #0b3378;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .contact-meta {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }

        .contact-meta a {
          color: #0b3378;
          font-weight: 600;
          text-decoration: none;
        }

        .contact-meta-label {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #6b7aa3;
          margin-bottom: 6px;
        }

        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
