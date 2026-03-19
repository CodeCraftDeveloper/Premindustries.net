import KeywordLandingPage from "@/components/common/KeywordLandingPage";
import { serviceDataMap } from "@/lib/seo/serviceDataMap";

export default function SheetMetalServicePage() {
  return <KeywordLandingPage {...serviceDataMap["sheet-metal"]} />;
}
