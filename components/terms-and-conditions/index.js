"use client";

const sections = [
  {
    body: [
      "Welcome to Prem Industries India Limited. These Terms & Conditions govern your use of our website and any services, products, or information provided across our four sectors: Packaging, Retail, Steel, and Construction & Infrastructure. By accessing or using our website or services, you agree to comply with and be bound by these Terms.",
    ],
  },
  {
    title: "Use of Services",
    list: [
      "Eligibility: By using our services, you confirm that you are at least 18 years old and legally capable of entering into binding contracts.",
      "Account Registration: Certain services may require you to create an account. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account. You agree to provide accurate, current, and complete information during the registration process.",
      "Prohibited Uses: You agree not to misuse our services. This includes, but is not limited to, using our website or services for any unlawful purpose, to infringe on others rights, or to distribute harmful software or content.",
    ],
  },
  {
    title: "Product and Service Terms",
    list: [
      "Packaging Sector: All orders, deliveries, and warranties related to packaging products are subject to specific terms outlined at the time of purchase or service agreement. Prices and availability are subject to change without notice.",
      "Retail Sector: Retail transactions, including purchases and returns, are governed by the terms and conditions displayed at the point of sale. Promotions and discounts are subject to specific terms and may change without prior notice.",
      "Steel Sector: Orders for steel products and related services are governed by contractual agreements that include delivery timelines, payment terms, and warranties. All transactions are subject to applicable industry standards and regulations.",
      "Construction & Infrastructure Sector: Projects undertaken by our Construction & Infrastructure division are governed by detailed contracts that outline project scope, timelines, costs, and responsibilities. Any changes to project specifications must be agreed upon in writing.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on our website, including text, images, logos, and designs, is the intellectual property of Prem Industries India Limited or its licensors. Unauthorized use, reproduction, or distribution of this content is prohibited.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "Prem Industries India Limited shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or products, except where such liability cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "We reserve the right to modify these Terms at any time. Any changes will be posted on our website, and your continued use of our services constitutes acceptance of the updated Terms.",
    ],
  },
];

export default function TermsAndConditions() {
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

                {section.body?.map((paragraph) => (
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
