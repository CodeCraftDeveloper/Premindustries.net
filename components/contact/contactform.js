"use client";

import React, { useState } from "react";

export default function FooterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    const timestamp = new Date().toISOString();
    const payload = { ...form, timestamp };

    // Submit to current API
    let apiSuccess = false;
    let apiError = "";
    try {
      const res = await fetch(
        "https://premindustries-in-form-api.vercel.app/api/submit-form-contact.js",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        apiSuccess = true;
      } else {
        apiError = data?.error || "API submission failed.";
      }
    } catch {
      apiError = "API submission failed.";
    }

    // Fire-and-forget Netlify submission (ignore response)
    try {
      await fetch("https://premindustries-contact-form.netlify.app/", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          phone: form.phone_no,
          message: form.message,
          timestamp,
        }).toString(),
      });
    } catch {
      // ignore Netlify errors
    }

    if (apiSuccess) {
      setForm({ name: "", email: "", phone_no: "", message: "" });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2500);
    } else {
      setStatus(apiError);
    }
    setLoading(false);
  };

  return (
    <section className="contact-sec-wrapper fix section-bg pt-5 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="text-white">Get in Touch</h2>
            <p className="text-white pb-4">
              Have any questions about your order or feedback about our service?
              We’d love to hear from you.
            </p>

            {/* Responsive form wrapper */}
            <div
              className="homepage-contact-from"
              style={{
                maxWidth: "100%",
                margin: "0 auto",
                background: "rgba(0,0,0,0.15)",
                borderRadius: "12px",
                padding: "32px 20px",
                boxSizing: "border-box",
              }}
            >
              <form
                className="row p-2"
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
                style={{ margin: 0 }}
              >
                <div className="col-md-6 col-12 mb-3">
                  <div className="single-personal-info">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="col-md-6 col-12 mb-3">
                  <div className="single-personal-info">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-12 mb-3">
                  <div className="single-personal-info">
                    <input
                      type="tel"
                      name="phone_no"
                      placeholder="Number*"
                      value={form.phone_no}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-12 mb-3">
                  <div className="single-personal-info">
                    <textarea
                      name="message"
                      placeholder="Message*"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      style={{ width: "100%", resize: "vertical" }}
                    />
                  </div>
                </div>

                <div className="col-md-12 col-12">
                  <input
                    className="submit-btn"
                    type="submit"
                    value={loading ? "Submitting Form..." : "Submit Details"}
                    disabled={loading}
                    aria-busy={loading}
                    style={{ width: "100%" }}
                  />
                </div>
              </form>

              {/* Success popup */}
              {showPopup && (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "linear-gradient(90deg,#38ef7d,#11998e)",
                    color: "#fff",
                    padding: "16px 32px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    zIndex: 9999,
                    transition: "opacity 0.3s",
                  }}
                  role="status"
                  aria-live="polite"
                >
                  Form submitted successfully!
                </div>
              )}

              {/* Inline error */}
              {status && !showPopup && (
                <span
                  className="form-message"
                  style={{ color: "#ff0000" }}
                  role="alert"
                >
                  {status}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
