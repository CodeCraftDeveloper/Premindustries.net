"use client";

import Image from "next/image";
import {
  getAosProps,
  homeViewport,
  motion,
  revealLeft,
  revealRight,
} from "@/components/home/homeMotion";

export default function SustainabilitySection() {
  return (
    <section className="relative mt-12 mb-24 min-h-[600px] overflow-hidden bg-white px-4 py-12 md:mt-16 md:mb-28 md:min-h-[700px] md:py-16 lg:mt-20 lg:mb-32 lg:py-20">
      <div className="mx-auto w-full max-w-[1720px] px-2 md:px-4 xl:px-6">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[15%_40%_45%] lg:items-center lg:gap-10 xl:gap-8 2xl:grid-cols-[13%_41%_46%] 2xl:gap-6">
          <motion.div
            className="hidden lg:flex lg:justify-center lg:self-center"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 20)}
          >
            <span
              className="pointer-events-none rotate-[-90deg] text-[150px] font-bold uppercase text-[#1f2a5a]/8 xl:text-[180px]"
              style={{ fontFamily: 'var(--font-home, "Exo 2", sans-serif)' }}
            >
              GREEN
            </span>
          </motion.div>

          <motion.div
            className="max-w-[760px] lg:max-w-[680px] lg:justify-self-start lg:self-center xl:max-w-[760px] 2xl:max-w-[860px]"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealLeft}
            {...getAosProps("left", 80)}
          >
            <h2 className="mb-4 text-[34px] font-extrabold uppercase leading-tight text-[#1f2a5a] md:text-[48px] lg:text-[56px]">
              Sustainability
            </h2>

            <p className="mt-4 text-[16.5px] leading-relaxed text-gray-600 xl:text-[17px] 2xl:text-[18px]">
              Sustainability is a responsibility we embrace fully. We have
              installed a 0.5 mW solar power plant, reducing our dependence on
              conventional energy and significantly lowering emissions. Our
              long-term goal is to become 100% carbon-free in electrical
              generation by 2030. From efficient machinery to responsible
              sourcing, we are building a cleaner, greener operation that
              supports both performance and environmental care.
            </p>
          </motion.div>

          <motion.div
            className="mt-2 flex justify-center lg:mt-0 lg:justify-self-start lg:self-center"
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealRight}
            {...getAosProps("right", 140)}
          >
            <div className="h-[360px] w-full max-w-[520px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:h-[420px] md:h-[460px] lg:h-[500px] lg:max-w-[560px] xl:h-[560px] xl:max-w-[640px] 2xl:h-[620px] 2xl:max-w-[720px]">
              <Image
                src="/sheetmetal/sustainability.jpg"
                alt="Sustainability at Prem Industries India Limited"
                width={600}
                height={700}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
