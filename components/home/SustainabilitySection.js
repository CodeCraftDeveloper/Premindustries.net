export default function Sustainability() {
  return (
    <section className="about-section pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 mt-5 mt-lg-0 col-12">
            <div className="block-contents">
              <div className="section-title">
                <h2>Sustainability</h2>
              </div>
            </div>

            <p
              className="pb-2"
              style={{ textAlign: "justify", fontSize: "17px" }}
            >
              As we work towards creating the best customer experience, we also
              ensure that sustainable alternatives are offered. We are a
              tailored company with mindful efforts toward decreasing our carbon
              footprint. At Prem Industries, we constantly innovate towards
              sustainability, building a host of eco-friendly products made from
              recycled materials. We advocate responsible functioning, which
              ensures that the footsteps of sustainable development are followed
              thoughtfully.
            </p>
          </div>

          <div className="col-xl-6 col-12 pe-xl-0">
            <div
              className="about-cover-bg bg-cover me-xl-5 shadow-lg"
              style={{ backgroundImage: "url(/home/Sustainability.jpg)" }}
            ></div>
          </div>
        </div>
      </div>

      <h2 className="section-rotate-title-sustainability d-none d-xxl-block">
        GREEN
      </h2>
    </section>
  );
}
