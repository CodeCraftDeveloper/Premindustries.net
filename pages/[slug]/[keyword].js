import KeywordLandingPage from "@/components/common/KeywordLandingPage";
import {
  getKeywordPageData,
  getKeywordPaths,
} from "@/lib/seo/keywordFunnelMap";

export default function VerticalKeywordPage({ pageData }) {
  return <KeywordLandingPage {...pageData} />;
}

export function getStaticPaths() {
  const paths = getKeywordPaths().map(({ vertical, keyword }) => ({
    params: { slug: vertical, keyword },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const pageData = getKeywordPageData(params.slug, params.keyword);

  if (!pageData) {
    return { notFound: true };
  }

  return {
    props: {
      pageData,
    },
  };
}
