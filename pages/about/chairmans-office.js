import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function ChairmansOfficePage() {
  return (
    <AboutSubpageLayout
      pageKey="chairmans-office"
      page={aboutSubpages["chairmans-office"]}
    />
  );
}
