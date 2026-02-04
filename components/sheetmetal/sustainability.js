import Image from "next/image";

export default function SustainabilitySection() {
  return (
    <>
      <section className="about-section pb-5 wow fadeInLeft animated">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 mt-3 mt-lg-0 col-12">
              <div className="block-contents">
                <div className="section-title">
                  <h2 style={{ fontSize: "40px" }}>Sustainability</h2>
                </div>
              </div>

              <p
                className="mb-3"
                style={{ textAlign: "justify", fontSize: "17px" }}
              >
                Sustainability is a responsibility we embrace fully. We have
                installed a 0.5 mW solar power plant, reducing our dependence on
                conventional energy and significantly lowering emissions. Our
                long-term goal is to become 100% carbon-free in electrical
                generation by 2030. From efficient machinery to responsible
                sourcing, we are building a cleaner, greener operation that
                supports both performance and environmental care.
              </p>
            </div>

            <div className="col-xl-5 col-12 pe-xl-0 text-center">
              <div
                className="about-cover-bg me-xl-5 shadow-lg"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "9 / 10",
                  //   position: "relative", // Ensure relative positioning for the image
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/sheetmetal/sustainability.jpg"
                    alt="Sustainability at Prem Industries"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-rotate-title-sustainability d-none d-xxl-block">
          GREEN
        </h2>
      </section>
    </>
  );
}
