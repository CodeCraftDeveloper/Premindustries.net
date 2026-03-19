import React from "react";

const sections = [
  {
    body: [
      "Prem Industries India Limited is committed to protecting the privacy and confidentiality of the personal information we collect from our customers, clients, employees, and business partners. This Privacy Policy outlines how we handle, store, and process personal information across our four key sectors: Packaging, Retail, Steel, and Construction & Infrastructure.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "We may collect personal information such as name, contact details, email addresses, job titles, and other relevant data when you interact with us through our website, customer service, or business transactions. For employees, we may also collect additional information, such as identification numbers, financial details, and employment history.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "The personal information we collect is used for various purposes, including:",
      "In addition, we may use your information for internal record-keeping, compliance with legal obligations, and to protect our rights and interests.",
    ],
    list: [
      "Packaging Sector: To process orders, manage customer relationships, and improve our products and services.",
      "Retail Sector: To manage sales transactions, enhance customer service, and tailor marketing efforts to your preferences.",
      "Steel Sector: To facilitate business operations, ensure the timely delivery of products, and maintain robust supply chain management.",
      "Construction & Infrastructure Sector: To manage projects, communicate with stakeholders, and ensure compliance with regulatory requirements.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We implement stringent security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Our systems are regularly updated and monitored to ensure data integrity and confidentiality.",
    ],
  },
  {
    title: "Data Sharing and Disclosure",
    body: [
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in operating our business, provided they agree to keep your information confidential. We may also disclose your information when required by law or to protect our legal rights.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to access, correct, or delete your personal information held by us. If you wish to exercise these rights or have any concerns about how we handle your data, please contact us at +918447247227.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on our website, and we encourage you to review this policy periodically.",
    ],
  },
];

export default function Index() {
  return (
    <section className="bg-brand-surface py-12 sm:py-16 lg:py-20">
      <div className="site-shell-tight">
        <article className="rounded-shell bg-white px-4 py-5 shadow-panel sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="space-y-6 text-[15px] leading-7 text-brand-slate sm:space-y-8 sm:text-[17px] sm:leading-8">
            {sections.map((section) => (
              <section key={section.title || section.body[0]} className="space-y-3 sm:space-y-4">
                {section.title ? (
                  <h2 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-brand-navy sm:text-3xl sm:tracking-[0.08em]">
                    {section.title}
                  </h2>
                ) : null}

                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-left sm:text-justify">
                    {paragraph}
                  </p>
                ))}

                {section.list ? (
                  <ol className="space-y-2 pl-5 sm:space-y-3">
                    {section.list.map((item, index) => {
                      const [label, ...rest] = item.split(": ");

                      return (
                        <li key={item} className="list-decimal leading-7 sm:leading-8">
                          <span className="font-semibold text-brand-navy">
                            {index + 1}. {label}:
                          </span>{" "}
                          <span>{rest.join(": ")}</span>
                        </li>
                      );
                    })}
                  </ol>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
