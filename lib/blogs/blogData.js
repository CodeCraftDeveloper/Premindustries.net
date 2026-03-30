export const blogPosts = [
  {
    slug: "aahar-2026-delhi",
    title: "Prem Industries India Limited At AAHAR 2026, New Delhi",
    category: "Recent Event",
    dateLabel: "March 10-14, 2026",
    publishedLabel: "Published March 20, 2026",
    lastModified: "2026-03-20T00:00:00+00:00",
    excerpt:
      "Prem Industries India Limited marked its recent event presence at AAHAR 2026 in Bharat Mandapam, New Delhi, presenting its packaging and manufacturing capabilities to food and hospitality buyers.",
    coverImage: "/aahar/AaharBanner2026.jpeg",
    heroImage: "/aahar/AaharBanner2026.jpeg",
    venue: "Bharat Mandapam, New Delhi",
    sourceUrl: "https://www.itpo.gov.in/aahar-2026-delhi",
    sourceFactSheetUrl:
      "https://www.itpo.gov.in/assets/images/aahar-2026-delhi/pdf/AAHAR-2026-Fact-Sheet.pdf",
    highlights: [
      "AAHAR 2026 was the 40th edition of the International Food & Hospitality Fair.",
      "The event was held from March 10 to March 14, 2026.",
      "The official venue was Bharat Mandapam, New Delhi.",
    ],
    quickFacts: [
      { label: "Edition", value: "40th edition" },
      { label: "Dates", value: "March 10-14, 2026" },
      { label: "Venue", value: "Bharat Mandapam, New Delhi" },
    ],
    body: [
      "Prem Industries India Limited participated in AAHAR 2026 at Bharat Mandapam, New Delhi, where the team presented packaging and manufacturing capabilities.",
      "The event brought Prem Industries into direct conversation with food, hospitality, retail, and packaging-focused businesses.",
      "Official ITPO material identifies AAHAR 2026 as the 40th edition of the International Food & Hospitality Fair and confirms that it was held at Bharat Mandapam, New Delhi, from March 10-14, 2026.",
    ],
    sections: [
      {
        heading: "Prem Industries at AAHAR 2026",
        paragraphs: [
          "At AAHAR 2026, Prem Industries India Limited presented packaging and manufacturing capability to visitors from food, hospitality, retail, and related sectors.",
          "The event created space for product discussions, buyer meetings, and direct conversations around packaging support and manufacturing requirements.",
        ],
        points: [
          "Packaging and manufacturing capability presentation",
          "Direct interaction with business visitors",
          "Industry presence at Bharat Mandapam, New Delhi",
        ],
      },
      {
        heading: "What Prem Industries India Limited presented at the event",
        paragraphs: [
          "The team used the event to present packaging capability, manufacturing support, and the company’s role in industrial supply programs.",
          "AAHAR also gave Prem Industries an opportunity to meet prospective buyers and continue business discussions after the exhibition.",
        ],
        points: [
          "Packaging-oriented capability presentation",
          "Manufacturing support and execution readiness",
          "Business conversations with prospective buyers and partners",
        ],
      },
      {
        heading: "Official event details from ITPO",
        paragraphs: [
          "According to official ITPO material, AAHAR 2026 was the 40th edition of the International Food & Hospitality Fair. The event took place from March 10, 2026 to March 14, 2026 at Bharat Mandapam, New Delhi.",
          "The official event page and fact sheet were used to confirm the venue, dates, and edition details.",
        ],
      },
    ],
    faq: [
      {
        question: "What is AAHAR 2026?",
        answer:
          "AAHAR 2026 was the 40th edition of the International Food & Hospitality Fair, organized at Bharat Mandapam, New Delhi from March 10 to March 14, 2026 according to official ITPO material.",
      },
      {
        question: "Why did Prem Industries India Limited participate in AAHAR 2026?",
        answer:
          "Prem Industries India Limited used AAHAR 2026 to present its packaging and manufacturing capabilities, connect with buyers, and build visibility among food, hospitality, and related business audiences.",
      },
      {
        question: "Where was the AAHAR 2026 event held?",
        answer:
          "The official venue for AAHAR 2026 was Bharat Mandapam, New Delhi.",
      },
      {
        question:
          "What kind of businesses could connect with Prem Industries India Limited at the event?",
        answer:
          "Businesses looking for packaging support, manufacturing execution, industrial supply continuity, and project discussions could connect with Prem Industries India Limited through the event presence.",
      },
    ],
    ctaTitle: "Want to connect after AAHAR 2026?",
    ctaBody:
      "If you discovered Prem Industries India Limited through the event, our team can continue the conversation around packaging, industrial manufacturing support, and project requirements.",
    ctaPoints: [
      "Discuss packaging requirements",
      "Explore manufacturing support options",
      "Start a direct business conversation with the Prem Industries India Limited team",
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}
