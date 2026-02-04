import React from "react";
import Head from "next/head";
import Hero from "@/components/ctl-machine/hero";

export default function Index() {
  return (
    <>
      <Head>
        <title>CTL Machine - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality CTL Machines."
        />
        <meta
          name="title"
          content="CTL Machine - Prem Industries India Limited"
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
                Our CTL (Cut to Length) Machine section expertly transforms raw
                coil into flat, cut sheets that exactly match your project
                dimensions. This precision process begins with full coil
                decoiling and proceeds through levelling and slitting and then
                precision cutting—perfect for clients who require sheet blanks
                rather than coil rolls.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Equipped with modern decoilers, high accuracy levelers, and
                programmable sensors, our system maintains tight control over
                thickness, flatness, and dimensional tolerances. We handle
                metals such as cold rolled steel, hot rolled steel, galvanized
                steel, aluminium and stainless steel—with both manual setup and
                automated run modes to support efficient, high volume
                throughput.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Ideal for components requiring exact length and width
                specifications, our CTL facility delivers sheet metal that is
                prepped and perfectly ready for further fabrication—stamping,
                bending, pressing, or assembly. Each sheet is flattened, square
                edged, and free of coil memory, enabling smoother downstream
                processing and better integration into press shop or stamping
                lines.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Quality checkpoints monitor:
              </p>
              <ul>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Strip flatness and surface finish
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Cut to length precision (± 0.1 mm or better)
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Coil tracking and handling for consistency
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
                Clients from the appliance, electrical housing, automotive and
                industrial parts sectors rely on our CTL operations for
                streamlined supply of high accuracy sheet blanks. Our CTL
                Machine section ensures superior dimensional control, faster
                lead times, and ready to use material in every batch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
