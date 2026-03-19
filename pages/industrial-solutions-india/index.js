import Link from "next/link";

const solutionAreas = [
  {
    title: "Industrial component manufacturing",
    detail:
      "High-volume production support for formed metal and plastic components with process stability and controlled quality workflows.",
  },
  {
    title: "OEM-oriented execution",
    detail:
      "Dedicated execution models for quality assurance, lead-time control, and predictable dispatch cycles.",
  },
  {
    title: "End-to-end manufacturing solutions",
    detail:
      "From production onboarding to repeat runs, we support complete industrial delivery workflows for long-term customer programs.",
  },
];

export default function IndustrialSolutionsIndiaPage() {
  return (
    <main className="py-5 bg-white">
      <section className="container">
        <p className="text-uppercase text-muted fw-semibold mb-2">
          Industrial Solutions Provider India
        </p>
        <h1 className="display-6 fw-bold mb-3">Industrial Solutions India</h1>
        <p className="lead text-secondary mb-4">
          Prem Industries delivers industrial solutions in India for OEM and
          B2B buyers that need reliable manufacturing services, engineering
          support, and scalable output across repeat production programs.
        </p>

        <div className="row g-4 mb-4">
          {solutionAreas.map((area) => (
            <div key={area.title} className="col-md-4">
              <article className="border rounded-3 p-4 h-100">
                <h2 className="h5 mb-2">{area.title}</h2>
                <p className="mb-0 text-secondary">{area.detail}</p>
              </article>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-3" style={{ background: "#f6f8fb" }}>
          <h2 className="h5 mb-2">Need an industrial manufacturing partner?</h2>
          <p className="mb-3 text-secondary">
            Connect with our team for project discussions on custom
            manufacturing, production capacity, quality expectations, and
            delivery planning.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Link href="/oem-manufacturing-india">OEM Manufacturing India</Link>
            <Link href="/manufacturing-company-india">
              Manufacturing Company India
            </Link>
            <Link href="/contact">Contact Prem Industries</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
