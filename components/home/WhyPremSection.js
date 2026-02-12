"use client";

const points = [
  {
    title: "Multi-Sector Capability",
    text: "Packaging, steel, retail, and construction support under a single operational ecosystem.",
  },
  {
    title: "Execution Reliability",
    text: "Structured planning and process discipline that reduce bottlenecks and delivery variance.",
  },
  {
    title: "Customer-Centric Scaling",
    text: "Solutions are aligned to partner timelines, quality benchmarks, and business growth targets.",
  },
  {
    title: "Quality Governance",
    text: "Documented quality controls across sourcing, production, and dispatch cycles.",
  },
];

export default function WhyPremSection() {
  return (
    <section className="why-prem">
      <div className="container shell">
        <div className="left">
          <p className="kicker">WHY PREM INDUSTRIES</p>
          <h2>A partner built for consistency, scale, and trust.</h2>
          <p>
            We blend manufacturing depth with execution systems that help
            businesses run with fewer disruptions and stronger output
            predictability.
          </p>
        </div>

        <div className="right">
          {points.map((item) => (
            <article key={item.title} className="tile">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-prem {
          padding: 10px 0 22px;
          background: #f8f8f6;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .shell {
          display: grid;
          grid-template-columns: minmax(260px, 0.9fr) minmax(260px, 1.2fr);
          gap: 18px;
        }

        .left {
          background: #0f1b28;
          border-radius: 8px;
          padding: 24px;
          color: #ffffff;
        }

        .kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.14em;
          font-weight: 700;
          color: #ff9e8b;
          text-transform: uppercase;
        }

        .left h2 {
          margin: 10px 0 12px;
          font-size: clamp(23px, 2.4vw, 34px);
          line-height: 1.2;
          color: #ffffff;
        }

        .left p {
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 14px;
          line-height: 1.7;
        }

        .right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .tile {
          background: #ffffff;
          border: 1px solid #ecebe8;
          border-radius: 8px;
          padding: 16px;
        }

        .tile h3 {
          margin: 0;
          color: #1d1d1d;
          font-size: 17px;
          line-height: 1.35;
        }

        .tile p {
          margin: 8px 0 0;
          font-size: 13px;
          line-height: 1.6;
          color: #5f5f5f;
        }

        @media (max-width: 992px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .shell {
            grid-template-columns: 1fr;
          }

          .right {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }
        }
      `}</style>
    </section>
  );
}
