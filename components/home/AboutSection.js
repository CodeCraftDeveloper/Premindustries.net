"use client";

import ExperienceShowcase from "@/components/common/ExperienceShowcase";
import { getAosProps, homeViewport, motion, revealRight } from "./homeMotion";

export default function AboutTwo(props) {
  const paragraphs = [props.text1, props.text2, props.text3].filter(Boolean);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={homeViewport}
      variants={revealRight}
      {...getAosProps("right", 40)}
    >
      <ExperienceShowcase
        kicker={props.subhead}
        title={props.head}
        paragraphs={paragraphs}
        buttonText={props.btnText}
        buttonHref="/about"
        surface="muted"
        verticalLabel={props.verticalText}
      />
    </motion.div>
  );
}
