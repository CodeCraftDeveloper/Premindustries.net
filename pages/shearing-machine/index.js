import React from "react";
import Head from "next/head";
import Hero from "@/components/shearing-machine/hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>Shearing Machine - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality shearing machines."
        />
        <meta
          name="title"
          content="Shearing Machine - Prem Industries India Limited"
        />
      </Head>
      <Hero />
      <div className="container-fluid why-choice-us pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{ textAlign: "justify" }}>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                At Prem Industries India Limited, our Shearing Machine facility
                delivers precision-cut sheet metal with industry-leading
                accuracy and speed. Designed for clean, burr free edges, our
                shearing operations are ideal for preparing metal sheets before
                downstream processing.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                We employ high capacity hydraulic and mechanical shears, capable
                of cutting mild steel, stainless steel, and aluminium across a
                range of thicknesses. Rapid set up and programmable back gauging
                ensure consistent results even when handling large tolerances,
                wide widths, or custom batch orders. The robust machine build
                minimizes distortion while optimizing throughput—a critical
                advantage when working with tight plant schedules.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Our operators are rigorously trained and backed by a structured
                maintenance and calibration regime, ensuring repeatable quality
                across every cut. In addition to standard flat shearing, the
                division offers edge trimming and specific pattern cutting
                inline, supporting seamless integration into shearing to
                slitting or cut to length workflows.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Clients benefit from:
              </p>
              <ul>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Fast, burr free cuts with tolerance control
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Flexibility across thicknesses, widths and materials
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Economic scale batch and high volume runs
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Prompt processing to match turnaround demands
                </li>
              </ul>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Whether serving automotive, construction, electronics, HVAC, or
                appliances, our Shearing Machine capacity ensures high precision
                parts are delivered reliably and efficiently, every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
