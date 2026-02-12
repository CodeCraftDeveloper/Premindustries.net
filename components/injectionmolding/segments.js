"use client";

const segments = [
  {
    title: <>Automotive</>,
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="26" width="36" height="16" rx="4" />
        <path d="M18 26l6-8h12l6 8" />
        <circle cx="20" cy="44" r="4" />
        <circle cx="40" cy="44" r="4" />
        <path d="M50 22l-6 10h6l-6 10" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Consumer
        <br />
        Durables
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="12" y="12" width="18" height="22" rx="3" />
        <rect x="34" y="14" width="18" height="18" rx="3" />
        <rect x="22" y="36" width="22" height="16" rx="3" />
        <circle cx="21" cy="22" r="4" />
        <circle cx="44" cy="22" r="3" />
      </svg>
    ),
  },
  {
    title: (
      <>
        E-commerce
        <br />
        & Logistics
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 26l22-12 22 12v22H10z" />
        <path d="M22 48V32h20v16" />
        <path d="M12 40h10m20 0h10" />
      </svg>
    ),
  },
  {
    title: <>Packaging</>,
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="16" y="16" width="32" height="12" rx="2" />
        <rect x="14" y="30" width="36" height="12" rx="2" />
        <rect x="12" y="44" width="40" height="10" rx="2" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Commercial
        <br />
        Solutions
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 24h32l-4 18H20z" />
        <path d="M24 24l-2-8h-6" />
        <circle cx="26" cy="46" r="3" />
        <circle cx="40" cy="46" r="3" />
        <path d="M34 16v10m-4-6h8" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Industrial
        <br />
        Products
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="24" y="10" width="16" height="6" rx="2" />
        <path d="M22 16h20l-2 30H24z" />
        <path d="M18 38h6m16 0h6" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Healthcare
        <br />
        & Hygiene
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="16" y="26" width="32" height="10" rx="2" />
        <path d="M20 36v14M44 36v14" />
        <rect x="14" y="20" width="14" height="6" rx="2" />
        <rect x="36" y="20" width="14" height="6" rx="2" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Material
        <br />
        Handling
      </>
    ),
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="14" y="18" width="20" height="20" rx="3" />
        <rect x="30" y="26" width="20" height="20" rx="3" />
        <path d="M24 28h6m-3-3v6" />
      </svg>
    ),
  },
];

export default function IndustrySegmentsSection() {
  return (
    <section className="segments-section">
      <div className="segments-shell">
        <h2>Industries We Serve</h2>
        <div className="segments-grid">
          {segments.map((segment, index) => (
            <div className="segment-card" key={index}>
              <div className="segment-icon">{segment.icon}</div>
              <div className="segment-label">{segment.title}</div>
            </div>
          ))}
        </div>
        <p className="segments-copy">
          From automotive precision to logistics efficiency, we deliver
          components that keep your operations running smoothly. Our expertise
          spans multiple sectors, ensuring you get the right solution for your
          unique needs.
        </p>
      </div>

      <style jsx>{`
        .segments-section {
          background: #ffffff;
          padding: 56px 0 72px;
        }

        .segments-shell {
          width: min(1200px, 92%);
          margin: 0 auto;
          text-align: center;
        }

        .segments-shell h2 {
          margin: 0 0 26px;
          font-size: clamp(32px, 3vw, 48px);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0b3378;
          font-family: "Oswald", sans-serif;
        }

        .segments-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .segments-copy {
          margin: 22px auto 0;
          max-width: 820px;
          font-size: 14px;
          color: #4a5b7a;
          line-height: 1.6;
        }

        .segment-card {
          background: linear-gradient(
            160deg,
            #eef2ff 0%,
            #a9b9f0 45%,
            #4a67cf 100%
          );
          border-radius: 18px;
          padding: 18px 12px 16px;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow:
            0 14px 24px rgba(15, 34, 80, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .segment-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
        }

        .segment-icon :global(svg) {
          width: 52px;
          height: 52px;
          fill: none;
          stroke: #ffffff;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .segment-label {
          font-size: 24px;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: none;
          line-height: 1.2;
        }

        @media (max-width: 900px) {
          .segments-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 520px) {
          .segments-grid {
            grid-template-columns: 1fr;
          }

          .segment-card {
            min-height: 120px;
          }
        }
      `}</style>
    </section>
  );
}
