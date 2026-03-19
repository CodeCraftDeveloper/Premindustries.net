import Link from "next/link";

export default function KeywordLandingPage({
  eyebrow,
  title,
  intro,
  sections = [],
  primaryCta,
  secondaryCta,
  whatsappCta,
  relatedLinks = [],
}) {
  const defaultWhatsappCta = {
    href: "https://wa.me/918447247227",
    label: "WhatsApp",
  };
  const activeWhatsappCta =
    whatsappCta === false ? null : whatsappCta || defaultWhatsappCta;

  return (
    <main className="py-5 bg-white">
      <section className="container">
        <p className="text-uppercase text-muted fw-semibold mb-2">{eyebrow}</p>
        <h1 className="display-6 fw-bold mb-3">{title}</h1>
        <p className="lead text-secondary mb-4">{intro}</p>

        <div className="row g-4">
          <div className="col-lg-8">
            {sections.map((section) => (
              <article key={section.heading} className="mb-4">
                <h2 className="h4 mb-2">{section.heading}</h2>
                <p className="text-secondary mb-0">{section.body}</p>
              </article>
            ))}

            <div className="d-flex flex-wrap gap-3 mt-3">
              {primaryCta ? (
                <Link href={primaryCta.href} className="btn btn-danger">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="btn btn-outline-dark">
                  {secondaryCta.label}
                </Link>
              ) : null}
              {activeWhatsappCta ? (
                <a
                  href={activeWhatsappCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  {activeWhatsappCta.label}
                </a>
              ) : null}
            </div>
          </div>

          <aside className="col-lg-4">
            <div className="border rounded-3 p-4 h-100">
              <h2 className="h5 mb-3">Related pages</h2>
              <ul className="list-unstyled mb-0 d-grid gap-2">
                {relatedLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
