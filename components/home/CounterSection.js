"use client";

import CountUp from "react-countup";

export default function FunFact() {
  return (
    <section className="fun-fact-wrapper pb-5 text-center wow fadeInLeft animated">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 mt-30 col-12">
            <div className="single-fun-fact">
              <h2>
                <CountUp end={50} duration={10} />+
              </h2>
              <h3>Years of Experience</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-30 col-12">
            <div className="single-fun-fact">
              <h2>
                <CountUp end={100} duration={10} />+
              </h2>
              <h3>Advanced Machinery</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-30 col-12">
            <div className="single-fun-fact">
              <h2>
                <CountUp end={2000} duration={10} />+
              </h2>
              <h3>B2B Partners</h3>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-30 col-12">
            <div className="single-fun-fact">
              <h2>
                <CountUp end={1000} duration={10} />+
              </h2>
              <h3>Professionals</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
