"use client";

const steps = [
  {
    id: "01",
    title: "Discovery",
    text: "We understand requirements, volumes, and performance constraints before recommending an execution model.",
  },
  {
    id: "02",
    title: "Planning",
    text: "Cross-functional teams align production, procurement, and logistics to remove downstream uncertainty.",
  },
  {
    id: "03",
    title: "Execution",
    text: "Projects move through controlled workflows with milestone visibility and quality checkpoints.",
  },
  {
    id: "04",
    title: "Optimization",
    text: "Post-delivery reviews improve cost, speed, and quality for repeat cycles and long-term growth.",
  },
];

export default function ExecutionProcessSection() {
  return (
    <section className="execution-process">
      <div className="container">
        <div className="head">
          <p className="kicker">DELIVERY MODEL</p>
          <h2>How Prem Industries executes with confidence.</h2>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <article key={step.id} className="step">
              <span className="step-id">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .execution-process {
          padding: 28px 0;
          background: #ffffff;
        }

        .container {
          max-width: 1380px;
          padding-left: 24px;
          padding-right: 24px;
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
          font-size: clamp(24px, 2.5vw, 34px);
          line-height: 1.2;
          color: #161616;
        }

        .steps {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .step {
          border-radius: 8px;
          border: 1px solid #ecebe8;
          padding: 16px;
          background: #f8f8f6;
        }

        .step-id {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #c5302c;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
        }

        .step h3 {
          margin: 12px 0 8px;
          font-size: 18px;
          color: #1d1d1d;
        }

        .step p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          color: #5c5c5c;
        }

        @media (max-width: 992px) {
          .container {
            padding-left: 18px;
            padding-right: 18px;
          }

          .steps {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
