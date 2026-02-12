import Image from "next/image";

export default function QualityChecklistSection() {
  return (
    <section className="quality-section">
      <div className="quality-wrap">
        <div className="quality-bg">
          <Image
            src="https://images.pexels.com/photos/60575/smoke-smoking-chimney-fireplace-60575.jpeg"
            alt="Injection molding facility"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="quality-overlay" />
        <div className="quality-wedge" aria-hidden="true" />

        <div className="quality-content">
          <h2>Injection Molded Part Quality Control Checklist</h2>
          <p>
            Quality isn&apos;t just a goal&mdash;it&apos;s our standard. Every
            component that leaves our facility undergoes rigorous inspection to
            ensure it meets the highest industry benchmarks. From dimensional
            accuracy to surface finish, our comprehensive quality control
            processes guarantee consistency, reliability, and excellence in
            every single piece we produce.
          </p>
          <div className="quality-list">
            <span>Dimensional Precision</span>
            <span>Material Integrity</span>
            <span>Surface Finish</span>
            <span>Structural Strength</span>
            <span>Color Consistency</span>
            <span>Functional Testing</span>
          </div>
        </div>

        <div className="quality-photo">
          <Image
            src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
            alt="Injection molding machine"
            fill
            sizes="(max-width: 900px) 70vw, 360px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <style jsx>{`
        .quality-section {
          background: #ffffff;
          padding: 36px 0 56px;
        }

        .quality-wrap {
          position: relative;
          width: 100%;
          height: clamp(280px, 34vw, 420px);
          margin: 0;
          border-radius: 0;
          overflow: hidden;
          border: 1px solid rgba(10, 34, 90, 0.2);
          box-shadow: 0 18px 40px rgba(6, 22, 60, 0.18);
          background: #0b3378;
        }

        .quality-bg {
          position: absolute;
          inset: 0;
        }

        .quality-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(6, 36, 86, 0.85) 0%,
            rgba(6, 36, 86, 0.7) 45%,
            rgba(6, 36, 86, 0.4) 70%,
            rgba(6, 36, 86, 0) 100%
          );
        }

        .quality-wedge {
          position: absolute;
          top: -10%;
          right: -6%;
          width: 40%;
          height: 120%;
          background: #2a73ff;
          clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
          z-index: 1;
        }

        .quality-wedge::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.55) 2px,
            transparent 2px
          );
          background-size: 14px 14px;
          opacity: 0.45;
        }

        .quality-content {
          position: relative;
          z-index: 2;
          padding: clamp(36px, 5vw, 60px);
          max-width: clamp(620px, 70vw, 920px);
        }

        .quality-content h2 {
          margin: 0;
          color: #ffffff;
          font-weight: 500;
          font-size: clamp(22px, 3vw, 34px);
          line-height: 1.2;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .quality-content p {
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: clamp(13px, 1.2vw, 16px);
          line-height: 1.7;
          max-width: 100%;
          text-align: justify;
          text-justify: inter-word;
        }

        .quality-list {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .quality-list span {
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .quality-photo {
          position: absolute;
          right: 8%;
          top: 18%;
          width: clamp(180px, 24vw, 280px);
          height: clamp(200px, 26vw, 320px);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 14px 26px rgba(5, 18, 50, 0.35);
          transform: rotate(-4deg);
          z-index: 3;
          border: 4px solid #ffffff;
          background: #ffffff;
          z-index: 3;
        }

        @media (max-width: 900px) {
          .quality-wrap {
            height: clamp(260px, 46vw, 360px);
          }

          .quality-content {
            max-width: 420px;
          }

          .quality-photo {
            right: 6%;
            top: 16%;
          }
        }

        @media (max-width: 640px) {
          .quality-wrap {
            height: auto;
            padding-bottom: 40px;
          }

          .quality-content {
            padding: 28px;
            max-width: none;
          }

          .quality-photo {
            position: relative;
            inset: auto;
            margin: 12px 0 0 24px;
            width: min(70%, 260px);
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
