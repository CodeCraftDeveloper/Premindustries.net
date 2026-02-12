"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CorporateVideo() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <style jsx>{`
        .video-outer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px;
        }

        /* Desktop / Laptop view */
        .video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 60vh;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .video-el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; /* fill area */
        }

        /* Mobile view: show full video without cropping */
        @media (max-width: 640px) {
          .video-wrap {
            aspect-ratio: auto;
            min-height: auto;
            height: auto;
            border-radius: 10px;
          }
          .video-el {
            position: static;
            width: 100%;
            height: auto;
            object-fit: contain;
            max-height: 70vh;
            display: block;
            background: #000;
          }
        }

        .pattern-bg {
          background-image: radial-gradient(#e6e6e6 1px, transparent 0);
        }
      `}</style>

      <div className="container-fluid pt-1 pattern-bg" />

      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)" }}>
              Our Corporate Video
            </h1>
          </div>
        </div>
      </div>

      <div className="video-outer pb-5">
        <div className="video-wrap">
          <video className="video-el" controls preload="metadata" playsInline>
            <source src="/sheetmetal/sheet-metal-small.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </motion.section>
  );
}
