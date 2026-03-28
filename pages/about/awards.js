import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function AwardsPage() {
  return <AboutSubpageLayout pageKey="awards" page={aboutSubpages.awards} />;
}
