import { getAosProps, homeViewport, motion, revealUp } from "./homeMotion";

export default function ProjectsTabHead() {
  return (
    <section
      className="bg-brand-navy px-4 pt-10 sm:px-6 sm:pt-12"
      style={{ paddingBottom: "13rem" }}
    >
      <div className="site-shell">
        <div className="text-center">
          <motion.h2
            className="font-display font-black uppercase leading-none tracking-normal text-white"
            style={{ fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)" }}
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
            variants={revealUp}
            {...getAosProps("up", 40)}
          >
            Sectors We Work In
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
