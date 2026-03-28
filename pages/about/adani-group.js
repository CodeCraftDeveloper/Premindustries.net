import AboutSubpageLayout from "@/components/about/AboutSubpageLayout";
import { aboutSubpages } from "@/lib/about/subpages";

export default function AdaniGroupPage() {
  return (
    <AboutSubpageLayout
      pageKey="adani-group"
      page={aboutSubpages["adani-group"]}
    />
  );
}
