import Link from "next/link";

const capabilities = [
  "Contract manufacturing programs for industrial and consumer product categories",
  "Integrated sheet metal components, press shop, and injection moulding capability",
  "Production planning support for stable, repeatable, high-volume output",
  "Quality-focused execution with process control, documentation, and batch traceability",
];

export default function ManufacturingCompanyIndiaPage() {
  return (
    <main className="py-5 bg-white">
      <section className="container">
        <p className="text-uppercase text-muted fw-semibold mb-2">
          Prem Industries India Limited
        </p>
        <h1 className="display-6 fw-bold mb-3">
          Industrial Manufacturing Company India
        </h1>
        <p className="lead text-secondary mb-4">
          Prem Industries is an industrial manufacturing company in India
          delivering end-to-end production support for OEMs, industrial buyers,
          and high-volume product teams.
        </p>
        <div className="row g-4">
          <div className="col-lg-8">
            <h2 className="h4 mb-3">
              Why enterprises choose our manufacturing group
            </h2>
            <ul className="ps-3 mb-4">
              {capabilities.map((item) => (
                <li key={item} className="mb-2 text-secondary">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-secondary mb-4">
              As a multi-sector manufacturing company, we combine engineering,
              production, quality systems, and delivery coordination to support
              scalable product programs across India.
            </p>
          </div>
          <aside className="col-lg-4">
            <div className="border rounded-3 p-4 h-100">
              <h2 className="h5 mb-3">Explore capabilities</h2>
              <ul className="list-unstyled mb-0 d-grid gap-2">
                <li>
                  <Link href="/sheet-metal-components">
                    Sheet Metal Components
                  </Link>
                </li>
                <li>
                  <Link href="/injectionmoulding">Injection Moulding</Link>
                </li>
                <li>
                  <Link href="/press-shop">Press Shop Services</Link>
                </li>
                <li>
                  <Link href="/contact">
                    Request Manufacturing Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
