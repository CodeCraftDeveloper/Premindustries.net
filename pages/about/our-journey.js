import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function OurJourneyPage() {
  return (
    <AboutSubpageLayout
      pageKey="our-journey"
      page={aboutSubpages["our-journey"]}
    />
  );
}
