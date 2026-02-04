import React from "react";
import Head from "next/head";
import Hero from "@/components/press-shop/hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>Press Shop - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality Press Shop."
        />
        <meta
          name="title"
          content="Press Shop - Prem Industries India Limited"
        />
      </Head>
      <Hero />
      <div className="container-fluid why-choice-us pt-5 pb-5">
        <div className="container">
          {/* test */}
          <div className="row">
            <div className="col-md-12" style={{ textAlign: "justify" }}>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Prem Industries India Limited’s Press Shop is designed to
                convert flat sheet blanks into intricate components via
                stamping, pressing, piercing, and forming. Housing hydraulic,
                mechanical, and servo press systems, our shop handles part sizes
                ranging from small brackets to medium panel components with
                exceptional repeatability and finish.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                We operate multiple press capacities, including single stroke
                and transfer type presses for multi stage operations. Our
                tooling services support progressive dies, compound operations,
                bending, embossing, and light coining. The integration of
                CAD/CAM programming and in house tool design ensures precise
                control of part geometry and consistency over long runs.
              </p>
              <br />

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Key advantages include:
              </p>
              <ul>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Quick turn around for custom die design and production
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Tolerance control to ± 0.05 mm where required
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Tool monitoring, preventive maintenance, and spare tooling
                  readiness
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Final inspection, deburring, and finishing inline
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
                Industries served span auto ancillaries, electronics enclosures,
                HVAC panels, home appliance housings, and more. Each component
                is inspected for form accuracy, burrs, and finishing standards
                before dispatch. With skilled operators, robust quality checks,
                and state of art machinery, our Press Shop transforms sheet
                metal into high precision parts at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
