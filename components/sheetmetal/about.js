import Image from "next/image";

export default function AboutTwo() {
  return (
    <section className="about-section mb-5" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row align-items-center mt-3">
          <div className="col-xl-12 mt-5 mt-lg-0 col-12">
            <div className="block-contents">
              <div className="section-title">
                <h3
                  className="wow fadeInLeft animated"
                  style={{ fontSize: "40px" }}
                >
                  Sheet Metal &amp; Components
                </h3>
              </div>
            </div>

            <p
              className="wow fadeInLeft animated"
              style={{ textAlign: "justify", fontSize: "17px" }}
            >
              At Prem Industries India Limited, our Sheet Metal and Components
              Division is a testament to precision engineering and robust
              infrastructure. Spread across a 22,000 square meter land area, the
              facility boasts a state-of-the-art built-up space of 4.5 lakh
              square feet over three floors. First of its kind setup in north
              India with integrated processing from steel coil to component,
              this facility reflects our commitment to end-to-end manufacturing
              excellence.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xl-6 col-12 pe-xl-0">
            <div className="d-flex flex-column" style={{ gap: 0 }}>
              {/* Optimized Next.js image (equivalent to your background block) */}
              <div
                className="wow fadeInLeft animated mt-4 shadow-sm"
                style={{ borderRadius: "12px" }}
              >
                <div
                  className="position-relative w-100"
                  style={{
                    aspectRatio: "9 / 5",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={"/sheetmetal/about.jpg"}
                    alt="Sheet metal components at Prem Industries"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
              </div>

              {/* If you prefer to keep a CSS background instead of <Image>, use this block:
              <div
                className="bg-cover wow fadeInLeft animated mt-4 shadow-sm"
                style={{
                  backgroundImage: `url(${typeof AboutImg2 === 'string' ? AboutImg2 : AboutImg2.src})`,
                  borderRadius: '12px',
                  width: '100%',
                  aspectRatio: '9/5',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  minHeight: 0,
                  marginTop: 0,
                }}
              /> */}
            </div>
          </div>

          <div className="col-xl-6 mt-5 mt-lg-0 col-12">
            <p
              className="wow fadeInLeft animated mt-2"
              style={{ textAlign: "justify", fontSize: "17px" }}
            >
              With an initial investment of ₹75 crores and a projected ₹175
              crores investment over the next three years, we are poised for
              exponential growth. Our division is equipped with modern
              machinery, 100% power backup, and advanced technology to meet the
              dynamic needs of automotive, industrial, and appliance sectors.
            </p>
            <p
              className="wow fadeInLeft animated mt-2"
              style={{ textAlign: "justify", fontSize: "17px" }}
            >
              We specialize in the design, fabrication, and assembly of
              high-quality sheet metal components, maintaining strict adherence
              to global standards. With a strong focus on efficiency,
              innovation, and scalability, Prem Industries India Limited
              continues to deliver reliable, cost-effective solutions across
              diverse industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
