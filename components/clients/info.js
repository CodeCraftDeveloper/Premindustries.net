"use client"; // Add this if you're using Next.js App Router (app directory)

import Card from "./card";

const ClientPageContents = ({
  maintitle,
  CardTitle1,
  CardImage1,
  CardLink1,
  CardTitle2,
  CardImage2,
  CardLink2,
  CardTitle3,
  CardImage3,
  CardLink3,
  CardTitle4,
  CardImage4,
  CardLink4,
}) => {
  return (
    <div className="contact-us-wrapper section-padding">
      <div className="container">
        <div className="row eq-height">
          <div className="col-lg-12 col-12">
            <div className="contact-form text-center shadow-sm">
              <h2>{maintitle}</h2>

              {/* Form is commented out, you can integrate with Next.js API routes later */}

              <div className="row">
                <div className="col-md-6">
                  <Card
                    CardTitle={CardTitle1}
                    CardImage={CardImage1}
                    CardLink={CardLink1}
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    CardTitle={CardTitle2}
                    CardImage={CardImage2}
                    CardLink={CardLink2}
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    CardTitle={CardTitle3}
                    CardImage={CardImage3}
                    CardLink={CardLink3}
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    CardTitle={CardTitle4}
                    CardImage={CardImage4}
                    CardLink={CardLink4}
                  />
                </div>
              </div>

              <span className="form-message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPageContents;
