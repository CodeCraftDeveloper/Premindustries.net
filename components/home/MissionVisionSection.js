"use client";

const cards = [
  {
    title: "Our Mission",
    text: "To deliver dependable industrial solutions that improve speed, quality, and operational confidence for every partner we serve.",
  },
  {
    title: "Our Vision",
    text: "To be India&apos;s most trusted cross-sector manufacturing and supply-chain growth partner.",
  },
  {
    title: "Our Promise",
    text: "Transparent execution, measurable quality standards, and long-term partnerships built on consistent delivery.",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="mission-vision">
      <div className="container">
        <div className="head">
          <p className="kicker">OUR DIRECTION</p>
          <h2>Purpose-driven growth with execution at the center.</h2>
        </div>

        <div className="grid">
          {cards.map((card) => (
            <article key={card.title} className="card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mission-vision {
          padding: 22px 0 10px;
          background: #f8f8f6;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
        }

        .head {
          max-width: 820px;
        }

        .kicker {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.14em;
          font-weight: 700;
          color: #c5302c;
          text-transform: uppercase;
        }

        .head h2 {
          margin: 10px 0 0;
          color: #1b1b1b;
          font-size: clamp(24px, 2.5vw, 36px);
          line-height: 1.2;
        }

        .grid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .card {
          background: #ffffff;
          border: 1px solid #ecebe8;
          border-radius: 8px;
          padding: 18px;
          box-shadow: 0 8px 22px rgba(20, 20, 20, 0.06);
        }

        .card h3 {
          margin: 0;
          font-size: 18px;
          color: #171717;
        }

        .card p {
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.65;
          color: #595959;
        }

        @media (max-width: 992px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .grid {
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
