import Head from "next/head";
// import Home from "../components/frontpage/index";
import HomeContent from "../components/home/index";

export default function FrontPage() {
  return (
    <>
      <Head>
        <title>Prem Industries India Limited</title>
        <meta name="title" content="Prem Industries India Limited" />
        <meta name="description" content="Prem Industries India Limited" />
        <meta
          name="google-site-verification"
          content="wy-WtsDt1PUSXEq5FRxcjjANTZezjcBT-9dhlKsRiCc"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W5TJVHXT4T"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-W5TJVHXT4T");
          `}
        </script>
      </Head>
      <HomeContent />
    </>
  );
}

// This enables static generation (HTML is server-rendered)
export async function getStaticProps() {
  return {
    props: {}, // you can pass static props here if needed
  };
}
