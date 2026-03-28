import Image from "next/image";
import Link from "next/link";

const featureCards = [
  {
    number: "1",
    title: "In-House Manufacturing",
    points: [
      "End-to-end production control.",
      "30-40% cost advantage on sheet metal.",
      "45-50% savings on plastic moulding.",
    ],
  },
  {
    number: "2",
    title: "BIS Certified",
    points: [
      "ISI Mark compliant.",
      "IS 302 (Part 2/Sec 31): 2009.",
      "Quality assured for dealers.",
    ],
  },
  {
    number: "3",
    title: "OEM & Private Label Ready",
    points: [
      "Custom branding available.",
      "Scalable production (5000+ units/month).",
      "Strong dealer support network.",
    ],
  },
  {
    number: "4",
    title: "Advanced Technology",
    points: [
      "Auto-clean function.",
      "Motion & touch controls.",
      "Energy-efficient motors.",
      "Heat-resistant housings.",
    ],
  },
];

const chips = ["Dealer Network", "OEM Ready", "BIS Certified"];

function FeatureCard({ number, title, points }) {
  return (
    <article className="border-b border-white/10 py-[clamp(0.85rem,1.25vw,1.1rem)] last:border-b-0">
      <div className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-[clamp(0.65rem,1vw,0.9rem)] sm:grid-cols-[2.15rem_minmax(0,1fr)] lg:grid-cols-[2.3rem_minmax(0,1fr)]">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/18 text-[0.8rem] font-medium text-slate-200 sm:h-[2.05rem] sm:w-[2.05rem] sm:text-[0.84rem] lg:h-9 lg:w-9 lg:text-[0.9rem]">
          {number}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-[clamp(1rem,1.15vw,1.26rem)] font-medium leading-[1.2] tracking-[-0.02em] text-slate-50">
            {title}
          </h3>
          <ul className="mt-2 space-y-1 text-[clamp(0.78rem,0.88vw,0.9rem)] leading-[1.55] text-slate-300/85">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Chip({ label }) {
  return (
    <span className="inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-white/12 px-3.5 py-2 text-center text-[0.76rem] font-normal leading-none text-slate-300 sm:text-[0.79rem]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-[0.8rem] w-[0.8rem] shrink-0 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

export default function WhyChoosePremChimneys() {
  return (
    <section
      aria-labelledby="why-choose-prem-chimneys"
      className="relative overflow-hidden bg-[radial-gradient(70rem_36rem_at_14%_10%,rgba(110,126,162,0.12),transparent_65%),radial-gradient(54rem_28rem_at_84%_76%,rgba(48,61,88,0.14),transparent_68%),linear-gradient(180deg,#020406_0%,#060a12_46%,#090f1a_100%)] py-[clamp(1.75rem,3vw,3.25rem)] text-slate-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] bottom-[-28%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(111,126,154,0.16)_0%,rgba(111,126,154,0)_72%)] blur-2xl"
      />

      <div className="site-shell-tight relative z-10">
        <div className="grid items-start gap-[clamp(1.4rem,2vw,2.4rem)] xl:grid-cols-[minmax(0,0.95fr)_minmax(20rem,0.85fr)] 2xl:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.88fr)]">
          <div className="max-w-[42rem]">
            <h2
              id="why-choose-prem-chimneys"
              className="max-w-[11ch] font-display text-[clamp(2rem,4.3vw,4.15rem)] font-medium uppercase leading-[0.9] tracking-[-0.055em] text-slate-50"
            >
              Why Choose Prem Chimneys
            </h2>

            <p className="mt-[clamp(0.55rem,0.8vw,0.85rem)] max-w-[32rem] text-[clamp(0.92rem,0.98vw,1.02rem)] leading-[1.65] text-slate-400">
              Leading the way in innovation and quality
            </p>

            <div className="mt-[clamp(1rem,1.5vw,1.5rem)] grid">
              {featureCards.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>

            <div className="mt-[clamp(1rem,1.6vw,1.4rem)] border-t border-white/10 pt-[clamp(1rem,1.4vw,1.25rem)]">
              <h3 className="font-display text-[clamp(1.5rem,2vw,2rem)] font-medium leading-[1.04] tracking-[-0.03em] text-slate-50">
                Get Started
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </div>

              <div className="mt-4 sm:mt-5">
                <Link
                  href="/contact"
                  className="inline-flex min-h-10 min-w-[9.5rem] items-center justify-center rounded-full border border-white/80 bg-white px-5 text-[0.88rem] font-medium text-slate-950 transition duration-200 hover:bg-slate-100"
                  aria-label="Contact us to get started"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="xl:pt-1">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.25rem] border border-white/8 bg-transparent sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[36rem] 2xl:min-h-[40rem]">
              <Image
                src="/whatsnew/chimneys/chimney6.png"
                alt="Prem chimney hood"
                fill
                priority
                className="object-contain object-center p-[clamp(0.6rem,1.4vw,1.15rem)] drop-shadow-[0_18px_34px_rgba(0,0,0,0.32)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
