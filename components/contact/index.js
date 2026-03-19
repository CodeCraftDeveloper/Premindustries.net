"use client";

import React from "react";
import Card from "./card";
import ContactForm from "./contactform";

const infoItems = [
  {
    key: "phone",
    icon: "fa-phone",
    content: (props) => (
      <>
        <span>{props.number}</span>
        <span>Manufacturing & project support</span>
      </>
    ),
    href: (props) => `tel:${props.number}`,
  },
  {
    key: "email",
    icon: "fa-envelope",
    content: (props) => (
      <>
        <span>{props.email}</span>
        <span>Business, RFQ, and production queries</span>
      </>
    ),
    href: (props) => `mailto:${props.email}`,
  },
  {
    key: "address",
    icon: "fa-location-dot",
    content: (props) => (
      <>
        <span>{props.address}</span>
        <span>Ghaziabad, Uttar Pradesh</span>
      </>
    ),
    href: () => "https://maps.app.goo.gl/yQVeh98nkHBfGWaR9",
    external: true,
  },
];

export default function ContactPageContents(props) {
  return (
    <>
      <section className="contact-hero relative overflow-hidden bg-[#fff] py-4 sm:py-5 lg:flex lg:min-h-[calc(100vh-var(--site-header-height))] lg:items-center lg:py-6">
        <div
          className="absolute left-[-140px] top-[100px] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(84,106,200,0.12)_0%,rgba(84,106,200,0)_72%)]"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-140px] top-[40px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(226,75,75,0.1)_0%,rgba(226,75,75,0)_72%)]"
          aria-hidden="true"
        />

        <div className="contact-stage site-shell-tight relative w-full">
          <div className="contact-intro mx-auto max-w-3xl text-center">
            <h2 className="contact-heading font-display text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-brand-navy sm:text-5xl">
              Get In Touch
            </h2>
            <p className="contact-copy mx-auto mt-2 max-w-2xl text-base font-normal leading-[1.75] text-brand-slate sm:text-lg">
              {props.maintitle}
            </p>
          </div>

          <div className="contact-shell mx-auto mt-4 w-full rounded-[30px] border border-[#e7ebf1] bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:mt-6">
            <div className="contact-grid grid items-stretch gap-0 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[380px_minmax(0,1fr)]">
              <aside className="contact-panel relative overflow-hidden rounded-[22px] border border-[#23396f] bg-[#1b2f5b] px-6 py-7 text-white sm:px-7 sm:py-8">
                <div
                  className="absolute bottom-[-88px] right-[-58px] h-[210px] w-[210px] rounded-full bg-[radial-gradient(circle,rgba(225,29,46,0.3)_0%,rgba(225,29,46,0.14)_38%,rgba(225,29,46,0)_72%)]"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h3 className="contact-panel-title font-hero text-xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-2xl">
                    Contact Information
                  </h3>
                  <p
                    className="contact-panel-copy mt-2.5 max-w-[300px] text-[13px] leading-[1.4] text-white/86 lg:max-w-none"
                    style={{ fontWeight: 600 }}
                  >
                    We&apos;ll respond to technical discussions, RFQs,
                    production planning, and business support inquiries.
                  </p>

                  <div className="contact-panel-list mt-3 space-y-4">
                    {infoItems.map((item) => (
                      <a
                        key={item.key}
                        href={item.href(props)}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-[18px] border border-white/10 bg-[#223a71] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:bg-[#28427e]"
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1b2f5b]">
                          <i
                            className={`fa-solid ${item.icon}`}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="grid gap-1 pt-1">
                          {item.content(props)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="contact-form-wrap bg-[#fbfcff] px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] pb-8 pt-4 sm:pb-10 sm:pt-6">
        <div className="site-shell-tight">
          <div className="mx-auto max-w-[1180px] rounded-[28px] bg-white px-5 py-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] sm:px-8 sm:py-8">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-black uppercase leading-tight text-brand-navy sm:text-3xl">
                Explore Our Core Sectors
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-brand-slate">
                Reach out directly for sheet metal, packaging, retail-linked,
                and construction-related discussions through our connected
                business network.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Card
                CardTitle={props.CardTitle1}
                CardImage={props.CardImage1}
                CardLink={props.CardLink1}
              />
              <Card
                CardTitle={props.CardTitle2}
                CardImage={props.CardImage2}
                CardLink={props.CardLink2}
              />
              <Card
                CardTitle={props.CardTitle3}
                CardImage={props.CardImage3}
                CardLink={props.CardLink3}
              />
              <Card
                CardTitle={props.CardTitle4}
                CardImage={props.CardImage4}
                CardLink={props.CardLink4}
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-stage {
          width: min(100% - (var(--site-gutter) * 2), 80rem);
          margin-inline: auto;
        }

        .contact-shell {
          max-width: 1140px;
        }

        a span.grid :global(span:first-child) {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.7;
          color: #ffffff;
        }

        @media (min-width: 640px) {
          a span.grid :global(span:first-child) {
            font-size: 16px;
          }
        }

        a span.grid :global(span:last-child) {
          font-size: 11px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.78);
        }

        @media (min-width: 1024px) and (max-height: 900px) {
          .contact-hero {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }

          .contact-heading {
            font-size: clamp(1.9rem, 2.5vw, 2.8rem);
          }

          .contact-copy {
            margin-top: 0.45rem;
            line-height: 1.6;
          }

          .contact-shell {
            margin-top: 0.9rem;
          }

          .contact-panel {
            padding: 1.4rem 1.2rem;
          }

          .contact-panel-title {
            font-size: 1.65rem;
          }

          .contact-panel-copy {
            margin-top: 0.75rem;
            line-height: 1.45;
          }

          .contact-panel-list {
            margin-top: 0.9rem;
          }

          .contact-form-wrap {
            padding: 1.4rem 1.6rem;
          }
        }

        @media (min-width: 1024px) and (max-width: 1599px) {
          .contact-stage {
            width: min(100% - 1.75rem, 84rem);
          }

          .contact-shell {
            max-width: 1080px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1536px) {
          .contact-stage {
            width: min(100% - 1.5rem, 86rem);
          }

          .contact-shell {
            max-width: 1120px;
          }

          .contact-grid {
            grid-template-columns: 360px minmax(0, 1fr);
          }
        }

        @media (min-width: 1280px) and (max-height: 860px) {
          .contact-panel {
            padding: 1.25rem 1.1rem;
          }

          .contact-form-wrap {
            padding: 1.25rem 1.5rem;
          }
        }

        @media (min-width: 1024px) and (max-height: 780px) {
          .contact-hero {
            padding-top: 0.35rem;
            padding-bottom: 0.35rem;
          }

          .contact-intro {
            max-width: 46rem;
          }

          .contact-heading {
            font-size: clamp(1.75rem, 2.1vw, 2.35rem);
          }

          .contact-copy {
            margin-top: 0.3rem;
            line-height: 1.5;
            max-width: 42rem;
          }

          .contact-shell {
            margin-top: 0.6rem;
            padding: 0.35rem;
          }

          .contact-grid {
            grid-template-columns: 360px minmax(0, 1fr);
          }

          .contact-panel {
            padding: 1rem 0.95rem;
          }

          .contact-panel-title {
            font-size: 1.45rem;
          }

          .contact-panel-copy {
            margin-top: 0.5rem;
            font-size: 11.5px;
            line-height: 1.35;
          }

          .contact-panel-list {
            margin-top: 0.65rem;
          }

          .contact-form-wrap {
            padding: 1rem 1.2rem;
          }

          a {
            gap: 0.75rem;
          }

          a span.grid :global(span:first-child) {
            font-size: 14px;
            line-height: 1.5;
          }

          a span.grid :global(span:last-child) {
            font-size: 10px;
            line-height: 1.45;
          }
        }

        @media (min-width: 1024px) and (max-height: 700px) {
          .contact-grid {
            grid-template-columns: 332px minmax(0, 1fr);
          }

          .contact-panel {
            padding: 0.85rem 0.85rem;
          }

          .contact-panel-title {
            font-size: 1.3rem;
          }

          .contact-panel-copy {
            font-size: 11px;
          }

          .contact-panel-list {
            margin-top: 0.5rem;
          }

          .contact-form-wrap {
            padding: 0.85rem 1rem;
          }
        }

        @media (min-width: 1700px) {
          .contact-shell {
            max-width: 1220px;
          }
        }
      `}</style>
    </>
  );
}
