import KeywordLandingPage from "@/components/common/KeywordLandingPage";
import { serviceDataMap } from "@/lib/seo/serviceDataMap";

export default function PackagingServicePage() {
  return <KeywordLandingPage {...serviceDataMap.packaging} />;
}
