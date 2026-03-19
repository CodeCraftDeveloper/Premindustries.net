"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

    let apiSuccess = false;
    let apiError = "";

    try {
      const res = await fetch(
        "https://premindustries-in-form-api.vercel.app/api/submit-form-contact.js",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
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

    try {
      await fetch("https://premindustries-contact-form.netlify.app/", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          subject: form.subject,
          phone: form.phone_no,
          message: form.message,
          timestamp,
        }).toString(),
      });
    } catch {
      // ignore Netlify errors
    }

    if (apiSuccess) {
      setForm({
        name: "",
        email: "",
        subject: "",
        phone_no: "",
        message: "",
      });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2500);
    } else {
      setStatus(apiError);
    }

    setLoading(false);
  };

  const labelClassName = "text-xs font-medium tracking-[0.04em] text-[#63758c]";
  const fieldShellClassName =
    "mt-1 border-b-2 border-[#d6dde4] transition focus-within:border-[#53336c]";
  const inputClassName =
    "w-full appearance-none border-0 bg-transparent px-0 pb-2 pt-1 text-base font-normal text-brand-navy outline-none transition placeholder:text-[#9ba8b7] focus:ring-0 sm:text-lg";

  return (
    <>
      <form
        className="contact-form-grid grid gap-7"
        id="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="contact-form-two-col grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Your Name</span>
            <div className={fieldShellClassName}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={inputClassName}
              />
            </div>
          </label>

          <label className="block">
            <span className={labelClassName}>Your Email</span>
            <div className={fieldShellClassName}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={inputClassName}
              />
            </div>
          </label>
        </div>

        <label className="block">
          <span className={labelClassName}>Your Subject</span>
          <div className={fieldShellClassName}>
            <input
              type="text"
              name="subject"
              placeholder="Tell us what you need help with"
              value={form.subject}
              onChange={handleChange}
              required
              className={inputClassName}
            />
          </div>
        </label>

        <label className="block">
          <span className={labelClassName}>Phone Number</span>
          <div className={fieldShellClassName}>
            <input
              type="tel"
              name="phone_no"
              placeholder="Enter your phone number"
              value={form.phone_no}
              onChange={handleChange}
              autoComplete="tel"
              className={inputClassName}
            />
          </div>
        </label>

        <label className="block">
          <span className={`${labelClassName} text-[#e11d2e]`}>Message</span>
          <div className={fieldShellClassName}>
            <textarea
              name="message"
              placeholder="Write your requirement or message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className={`contact-form-textarea ${inputClassName} min-h-[112px] resize-y`}
            />
          </div>
        </label>

        <div className="contact-form-actions flex flex-wrap items-center gap-4 pt-1">
          <button
            className="contact-form-button inline-flex min-w-[150px] items-center justify-center rounded-[8px] border border-[#1b2f5b] bg-[#1b2f5b] px-6 py-3 text-sm font-semibold tracking-[0.02em] text-white shadow-[0_14px_30px_rgba(27,47,91,0.18)] transition hover:border-[#e11d2e] hover:bg-[#e11d2e] disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && !showPopup ? (
            <p className="text-sm font-medium text-red-600" role="alert">
              {status}
            </p>
          ) : null}
        </div>
      </form>

      {showPopup ? (
        <div
          className="fixed left-1/2 top-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[linear-gradient(90deg,#38ef7d,#11998e)] px-8 py-4 text-center text-lg font-bold text-white shadow-float"
          role="status"
          aria-live="polite"
        >
          Form submitted successfully!
        </div>
      ) : null}

      <style jsx>{`
        @media (min-width: 1024px) and (max-height: 900px) {
          .contact-form-grid {
            gap: 1.15rem;
          }

          .contact-form-two-col {
            gap: 1rem 1.5rem;
          }

          .contact-form-textarea {
            min-height: 84px;
          }

          .contact-form-actions {
            padding-top: 0;
          }

          .contact-form-button {
            min-width: 138px;
            padding: 0.7rem 1.25rem;
          }
        }

        @media (min-width: 1280px) and (max-height: 860px) {
          .contact-form-grid {
            gap: 1rem;
          }

          .contact-form-textarea {
            min-height: 74px;
          }
        }

        @media (min-width: 1024px) and (max-height: 780px) {
          .contact-form-grid {
            gap: 0.8rem;
          }

          .contact-form-two-col {
            gap: 0.8rem 1rem;
          }

          .contact-form-grid :global(label > span:first-child) {
            font-size: 12px;
          }

          .contact-form-grid :global(input),
          .contact-form-grid :global(textarea) {
            font-size: 16px;
            padding-top: 0.2rem;
            padding-bottom: 0.35rem;
          }

          .contact-form-grid :global(div[class*="border-b"]) {
            margin-top: 0.2rem;
          }

          .contact-form-textarea {
            min-height: 56px;
          }

          .contact-form-button {
            min-width: 128px;
            padding: 0.62rem 1.1rem;
            font-size: 12px;
          }
        }

        @media (min-width: 1024px) and (max-height: 700px) {
          .contact-form-grid {
            gap: 0.65rem;
          }

          .contact-form-two-col {
            gap: 0.65rem 0.9rem;
          }

          .contact-form-grid :global(input),
          .contact-form-grid :global(textarea) {
            font-size: 16px;
            padding-bottom: 0.28rem;
          }

          .contact-form-textarea {
            min-height: 44px;
          }

          .contact-form-button {
            min-width: 120px;
            padding: 0.55rem 1rem;
          }
        }
      `}</style>
    </>
  );
}
