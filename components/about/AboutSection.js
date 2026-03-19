"use client";

import ExperienceShowcase from "@/components/common/ExperienceShowcase";

const AboutTwo = () => {
  return (
    <ExperienceShowcase
      kicker="About"
      title="Prem Industries India Limited"
      paragraphs={[
        "Prem Industries India Limited has grown into a process-oriented manufacturing company serving OEMs, industrial buyers, and high-demand supply chains with dependable quality and execution discipline.",
        "Our facilities in Uttar Pradesh and the NCR region are structured to support scalable production, disciplined quality assurance, and responsive execution for sheet metal, plastics, and industrial component programs.",
        "With long-term customer partnerships and continued investment in technology, people, and operational systems, we keep strengthening our ability to deliver consistent manufacturing outcomes at scale.",
      ]}
      verticalLabel="About"
    />
  );
};

export default AboutTwo;
