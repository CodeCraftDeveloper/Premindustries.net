import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    number: 1,
    title: "In-House Manufacturing",
    points: [
      "End-to-end production control.",
      "30-40% cost advantage on sheet metal.",
      "45-50% savings on plastic molding.",
    ],
  },
  {
    number: 2,
    title: "BIS Certified",
    points: [
      "ISI Mark compliant.",
      "IS 302 (Part 2/Sec 31): 2009.",
      "Quality assured for dealers.",
    ],
  },
  {
    number: 3,
    title: "OEM & Private Label Ready",
    points: [
      "Custom branding available.",
      "Scalable production (5000+ units/month).",
      "Strong dealer support network.",
    ],
  },
  {
    number: 4,
    title: "Advanced Technology",
    points: [
      "Auto-clean function.",
      "Motion & touch controls.",
      "Energy-efficient motors.",
      "Heat-resistant housings.",
    ],
  },
];

const chips = ["Dealer Network", "OEM Ready", "BIS Certified"];

function FeatureCard({ number, title, points }) {
  return (
    <article className="wcp-feature-card">
      <div className="wcp-feature-inner">
        <span className="wcp-feature-badge">{number}</span>
        <div className="wcp-feature-copy">
          <h3>{title}</h3>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Chip({ label }) {
  return (
    <span className="wcp-chip">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="wcp-chip-icon"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8" />
      </svg>
      {label}
    </span>
  );
}

export default function WhyChoosePremChimneys() {
  return (
    <section aria-labelledby="why-choose-prem-chimneys" className="wcp-section">
      <div className="wcp-bg-glow" aria-hidden="true"></div>

      <div className="wcp-container">
        <div className="wcp-grid">
          <div className="wcp-left">
            <h2 id="why-choose-prem-chimneys" className="wcp-title">
              WHY CHOOSE
              <br />
              PREM CHIMNEYS
            </h2>

            <p className="wcp-subtitle">
              Leading the way in innovation and quality
            </p>

            <div className="wcp-card-list">
              {featureCards.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>

            <h3 className="wcp-get-started">Get Started</h3>

            <div className="wcp-chip-row">
              {chips.map((chip) => (
                <Chip key={chip} label={chip} />
              ))}
            </div>

            <div className="wcp-action-row">
              <Link
                href="/contact"
                className="wcp-contact-btn"
                aria-label="Contact us to get started"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="wcp-right">
            <div className="wcp-image-frame" aria-hidden="true">
              <div className="wcp-image-panel"></div>
              <Image
                src="/whatsnew/chimneys/chimney6.png"
                alt="Prem chimney hood"
                fill
                priority
                className="wcp-product-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
