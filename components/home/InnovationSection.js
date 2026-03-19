import Image from "next/image";
import {
  getAosProps,
  homeViewport,
  motion,
  revealCard,
  revealLeft,
  revealRight,
  staggerCards,
} from "./homeMotion";

const innovationItems = [
  {
    title: "Integrated Manufacturing Capability",
    body: "We connect production planning, process control, quality systems, and dispatch support across multiple sectors to give customers more dependable execution.",
  },
  {
    title: "Process And Technology Discipline",
    body: "Modern machinery, tooling alignment, production monitoring, and structured quality checkpoints help us deliver repeatable output across demanding manufacturing programs.",
  },
  {
    title: "Customer-Focused Product Execution",
    body: "We adapt our manufacturing workflows to application-specific requirements, whether the need is precision sheet metal parts, molded plastic components, or packaging aligned to commercial scale.",
  },
];

export default function Innovation() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
      <div className="site-shell">
        <div className="grid items-stretch gap-4 overflow-hidden bg-white lg:gap-6 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:gap-8">
          <motion.div
            className="relative min-h-[360px] sm:min-h-[440px] xl:min-h-[640px]"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 40)}
          >
            <Image
              src="/home/Innovation.jpg"
              alt="Innovation at Prem Industries"
              fill
              priority={false}
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 48vw"
            />
          </motion.div>

          <motion.div
            className="flex items-center justify-center bg-white px-8 py-10 text-center sm:px-12 sm:py-12 lg:px-14 lg:py-16 xl:px-[56px]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(20,37,76,0.14) 1.2px, transparent 1.2px)",
              backgroundSize: "18px 18px",
            }}
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealRight}
            {...getAosProps("right", 80)}
          >
            <motion.div
              className="mx-auto max-w-[640px] space-y-8 sm:space-y-9 lg:space-y-10"
              initial="hidden"
              whileInView="show"
              viewport={homeViewport}
              variants={staggerCards}
            >
              <h2 className="font-display text-[2.35rem] font-black uppercase leading-[0.95] tracking-normal text-brand-navy sm:text-[3rem] lg:text-[3.75rem]">
                Manufacturing Innovation
              </h2>

              <div className="space-y-9 sm:space-y-10 lg:space-y-11">
                {innovationItems.map((item) => (
                  <motion.article
                    key={item.title}
                    className="max-w-[640px]"
                    variants={revealCard}
                    {...getAosProps("right", 120)}
                  >
                    <h3 className="font-display text-[1.75rem] font-black uppercase leading-[1.08] tracking-normal text-brand-navy sm:text-[2rem] lg:text-[2.3rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[620px] text-[16px] leading-[1.7] text-brand-slate sm:text-[16.5px]">
                      {item.body}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
