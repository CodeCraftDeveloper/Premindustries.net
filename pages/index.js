// GA is now loaded globally from pages/_app.js — no need to repeat it here.
import HomeContent from "../components/home/index";

export default function FrontPage() {
  return (
    <div className="bg-white">
      <HomeContent />
    </div>
  );
}

// Static generation — HTML is server-rendered at build time
export async function getStaticProps() {
  return {
    props: {},
  };
}
