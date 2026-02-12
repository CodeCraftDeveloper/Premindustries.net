import React from "react";
import Head from "next/head";
import Hero from "@/components/slitting-machine/hero";
import SectionReveal from "@/components/common/SectionReveal";

export default function Index() {
  return (
    <>
      <Head>
        <title>Slitting Machine - Prem Industries India Limited</title>
        <meta
          name="description"
          content="Explore our high-quality Slitting Machines."
        />
        <meta
          name="title"
          content="Slitting Machine - Prem Industries India Limited"
        />
      </Head>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
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
                At our Slitting Division, we boast top tier slitters engineered
                for high speed, high-precision conversion of coil into narrow
                strips or widths customized to your needs. Whether producing
                coils for further processing or strips for integration, our
                slitting line ensures consistent, burr free, and distortion
                minimized metal widths.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Our slitting machinery includes precision-driven slitters and
                recoilers compatible with steels, aluminium, and non ferrous
                alloys. The line supports width ranges typically from 300 mm to
                1,400 mm, thicknesses between approx. 0.3 to 2.5 mm, and feed
                speeds up to ~120 m/min.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                We offer slit coil weights up to 10 MT per bundle, with custom
                tolerance demands handled smoothly by our experienced
                engineering team. Whether you require narrow strips for deep
                draw applications, HVAC frames, filters, or strips for welding
                or assembly, our Slitting Machine service is engineered for
                versatility.
              </p>
              <br />
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                Our slitting workflow includes:
              </p>
              <ul>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Coil inspection and labeling
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Precise slit-width selection and tolerance programming
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Recoiling with uniform tension and consistent coil density
                </li>
                <li
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    fontWeight: "500",
                  }}
                >
                  • Visual and dimensional inspection at delivery
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
                For clients in appliance manufacturing, fabrication, auto parts,
                HVAC, and industrial machinery, our slitting solutions combine
                speed, flexibility, and accuracy—leaving no edge imperfect.
              </p>
            </div>
          </div>
        </div>
        </div>
      </SectionReveal>
    </>
  );
}
