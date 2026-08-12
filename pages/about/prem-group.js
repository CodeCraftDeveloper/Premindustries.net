import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function PremGroupPage() {
  return (
    <AboutSubpageLayout
      pageKey="prem-group"
      page={aboutSubpages["prem-group"]}
    />
  );
}
