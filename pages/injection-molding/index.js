import KeywordLandingPage from "@/components/common/KeywordLandingPage";
import { serviceDataMap } from "@/lib/seo/serviceDataMap";

export default function InjectionMoldingServicePage() {
  return <KeywordLandingPage {...serviceDataMap["injection-molding"]} />;
}
