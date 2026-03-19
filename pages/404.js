import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-surface py-16 sm:py-20 lg:py-24">
      <div className="site-shell-tight">
        <div className="rounded-shell bg-white px-6 py-12 text-center shadow-panel sm:px-10 sm:py-16">
          <div className="mx-auto flex max-w-xl flex-col items-center">
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.24em] text-brand-red">
              Error 404
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight text-brand-navy sm:text-5xl">
              Page Not Found
            </h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-brand-slate sm:text-lg">
              The page you are looking for is not available. Please check the
              URL or return to the homepage.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#cf171d]"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
