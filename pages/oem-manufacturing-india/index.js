import Link from "next/link";

const oemHighlights = [
  "OEM manufacturing company in India with multi-process production capability",
  "Contract manufacturing programs designed for high-volume and repeat consistency",
  "Engineering and production teams aligned for quality-first execution",
  "Single-partner model for component manufacturing and delivery coordination",
];

export default function OemManufacturingIndiaPage() {
  return (
    <main className="py-5 bg-white">
      <section className="container">
        <p className="text-uppercase text-muted fw-semibold mb-2">
          OEM Manufacturing Company India
        </p>
        <h1 className="display-6 fw-bold mb-3">OEM Manufacturing India</h1>
        <p className="lead text-secondary mb-4">
          We support OEM manufacturing in India through structured production,
          quality-focused contract execution, and scalable industrial supply
          support.
        </p>

        <div className="row g-4 mb-4">
          <div className="col-lg-8">
            <h2 className="h4 mb-3">
              OEM and contract manufacturing strengths
            </h2>
            <ul className="ps-3 mb-0">
              {oemHighlights.map((point) => (
                <li key={point} className="mb-2 text-secondary">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="border rounded-3 p-4 h-100">
              <h2 className="h5 mb-3">Related manufacturing pages</h2>
              <ul className="list-unstyled mb-0 d-grid gap-2">
                <li>
                  <Link href="/industrial-solutions-india">
                    Industrial Solutions India
                  </Link>
                </li>
                <li>
                  <Link href="/manufacturing-company-india">
                    Manufacturing Company India
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Get Manufacturing Quote</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
