import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function LeadershipPage() {
  return (
    <AboutSubpageLayout
      pageKey="leadership"
      page={aboutSubpages.leadership}
    />
  );
}
