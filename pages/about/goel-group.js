import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function GoelGroupPage() {
  return (
    <AboutSubpageLayout
      pageKey="goel-group"
      page={aboutSubpages["goel-group"]}
    />
  );
}
