"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FabricationProcess() {
  return (
    <motion.section
      className="container text-center pt-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <h1 className="text-center" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>
        SHEET METAL FABRICATION PROCESS
      </h1>

      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <Image
          src="/sheetmetal/fabrication-process.jpg"
          alt="SHEET METAL FABRICATION PROCESS"
          priority
          className="img-fluid"
          height={600}
          width={2200}
        />
      </div>
    </motion.section>
  );
}
