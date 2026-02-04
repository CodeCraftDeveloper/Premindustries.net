"use client";

import React, { useEffect, useRef } from "react";
import Card from "./card";
import ContactForm from "./contactform";

export default function ContactPageContents(props) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Safety: only run in browser
    if (typeof window === "undefined") return;

    const sidebar = sidebarRef.current;
    const footer = document.querySelector("footer");

    const adjustSidebar = () => {
      if (!sidebar || !footer) return;
      const sidebarRect = sidebar.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      if (sidebarRect.bottom > footerRect.top) {
        sidebar.style.marginTop = "0";
        sidebar.style.marginBottom = "0";
      } else {
        sidebar.style.marginTop = "auto";
        sidebar.style.marginBottom = "auto";
      }
    };

    // Initial run + listeners
    adjustSidebar();
    window.addEventListener("scroll", adjustSidebar, { passive: true });
    window.addEventListener("resize", adjustSidebar);

    return () => {
      window.removeEventListener("scroll", adjustSidebar);
      window.removeEventListener("resize", adjustSidebar);
    };
  }, []);

  return (
    <div className="contact-us-wrapper section-padding">
      <div className="container p-0">
        <div className="row eq-height">
          <div className="col-lg-8 col-12 d-flex flex-column">
            <ContactForm />
            <div className="contact-form text-center shadow-sm">
              <h2>{props.maintitle}</h2>

              <div className="row">
                <div className="col-md-6">
                  <Card
                    CardTitle={props.CardTitle1}
                    CardImage={props.CardImage1}
                    CardLink={props.CardLink1}
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    CardTitle={props.CardTitle2}
                    CardImage={props.CardImage2}
                    CardLink={props.CardLink2}
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    CardTitle={props.CardTitle3}
                    CardImage={props.CardImage3}
                    CardLink={props.CardLink3}
                  />
                </div>
                <div className="col-md-6">
                  <Card
                    CardTitle={props.CardTitle4}
                    CardImage={props.CardImage4}
                    CardLink={props.CardLink4}
                  />
                </div>
              </div>

              <span className="form-message" />
            </div>
          </div>
          <div className="col-lg-4 col-12 d-flex flex-column justify-content-center">
            <div
              ref={sidebarRef}
              className="contact-us-sidebar pt-5 mt-lg-0 shadow-lg"
            >
              <div className="contact-info">
                <h2>CONTACT DETAILS</h2>

                <div className="single-info">
                  <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="text">
                    <span>Email Us</span>
                    <h5 style={{ textTransform: "lowercase" }}>
                      <a href={`mailto:${props.email}`}>{props.email}</a>
                    </h5>
                  </div>
                </div>

                <div className="single-info">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <span>Call Us</span>
                    <h5>
                      <a href={`tel:${props.number}`}>{props.number}</a>
                    </h5>
                  </div>
                </div>

                <div className="single-info">
                  <div className="text">
                    <h5>
                      <a
                        href="https://maps.app.goo.gl/yQVeh98nkHBfGWaR9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {props.address}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /sidebar col */}
        </div>
      </div>
    </div>
  );
}
