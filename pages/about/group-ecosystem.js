import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function GroupEcosystemPage() {
  return (
    <AboutSubpageLayout
      pageKey="group-ecosystem"
      page={aboutSubpages["group-ecosystem"]}
    />
  );
}
