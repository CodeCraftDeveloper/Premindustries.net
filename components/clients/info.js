"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Landmark } from "lucide-react";
import {
  clientEvidence,
  clientGroups,
  clientLogoDomains,
  clientsPageSources,
  featuredClientStories,
} from "@/lib/clients/clientSourceData";

const badgeThemes = {
  navy: {
    shell: "#14254c",
    accent: "#e92227",
    glow: "rgba(233,34,39,0.18)",
  },
  red: {
    shell: "#981f2a",
    accent: "#ffd7dc",
    glow: "rgba(255,215,220,0.16)",
  },
  slate: {
    shell: "#24344f",
    accent: "#9bc0ff",
    glow: "rgba(155,192,255,0.16)",
  },
};

function toInitials(name) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function SourceLink({ href, children, light = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition sm:gap-2 sm:text-[11px] sm:tracking-[0.12em] ${
        light
          ? "text-white/78 hover:text-white"
          : "text-brand-navy hover:text-brand-red"
      }`}
    >
      <span>{children}</span>
      <ExternalLink className="h-[10px] w-[10px]" aria-hidden="true" />
    </a>
  );
}

function ClientBadge({ name, tone = "navy", size = 72 }) {
  const theme = badgeThemes[tone] || badgeThemes.navy;
  const initials = toInitials(name);
  const logoDomain = clientLogoDomains[name];

  if (logoDomain) {
    return (
      <span
        className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-[#dbe4f2] bg-white p-2 shadow-[0_8px_20px_rgba(20,37,76,0.08)]"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <Image
          src={`https://logos.hunter.io/${logoDomain}`}
          alt={`${name} logo`}
          width={size - 10}
          height={size - 10}
          className="h-full w-full object-contain"
          unoptimized
        />
      </span>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="4" y="4" width="64" height="64" rx="20" fill={theme.shell} />
      <path
        d="M16 55 L55 16"
        stroke={theme.accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="54" cy="55" r="8" fill={theme.glow} />
      <text
        x="36"
        y="42"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="22"
        fontWeight="800"
        fontFamily="Exo 2, sans-serif"
        letterSpacing="0.08em"
      >
        {initials}
      </text>
    </svg>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="px-3 py-3 sm:px-4 sm:py-4">
      <div className="text-[1.6rem] font-black leading-none tracking-[-0.04em] text-white sm:text-[1.9rem] sm:tracking-[-0.05em]">
        {value}
      </div>
      <div className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 sm:mt-2 sm:text-[11px] sm:tracking-[0.16em]">
        {label}
      </div>
    </div>
  );
}

function EvidenceCard({ value, label, body, sourceUrl }) {
  return (
    <article className="rounded-[18px] border border-[#dbe4f2] bg-white px-3.5 py-3.5 shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:px-6 sm:py-5">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2.5 sm:gap-4">
        <div className="min-w-0 flex-1">
          <div className="text-[1.55rem] font-black leading-none tracking-[-0.04em] text-brand-navy sm:text-[2rem] sm:tracking-[-0.05em]">
            {value}
          </div>
          <h3 className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-red sm:mt-3 sm:text-[12px] sm:tracking-[0.16em]">
            {label}
          </h3>
        </div>
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-surface text-brand-navy sm:h-11 sm:w-11">
          <Landmark
            className="h-[12px] w-[12px] sm:h-[16px] sm:w-[16px]"
            aria-hidden="true"
          />
        </span>
      </div>
      <p className="mt-2.5 text-[11px] leading-[1.6] text-brand-slate sm:mt-3 sm:text-sm sm:leading-[1.75]">
        {body}
      </p>
      <div className="mt-3 sm:mt-4">
        <SourceLink href={sourceUrl}>Source</SourceLink>
      </div>
    </article>
  );
}

function FeaturedClientCard({ name, segment, highlight, sourceUrl, tone }) {
  const theme = badgeThemes[tone] || badgeThemes.navy;

  return (
    <article
      className="min-w-0 border-l-2 py-2 pl-3 pr-0.5 sm:pl-4 sm:pr-1"
      style={{ borderLeftColor: theme.accent }}
    >
      <div className="flex items-start gap-3">
        <div className="relative">
          <ClientBadge name={name} tone={tone} size={40} />
          {!clientLogoDomains[name] ? (
            <span
              className="absolute right-[-2px] top-[-2px] h-2.5 w-2.5 rounded-full"
              style={{ background: theme.accent }}
              aria-hidden="true"
            />
          ) : null}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
            Business account
          </p>
          <h3 className="mt-1 font-display text-[0.96rem] font-black leading-[1.08] tracking-[-0.02em] text-white sm:text-[1.02rem]">
            {name}
          </h3>
          <p className="mt-1 text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.12em] text-white/60">
            {segment}
          </p>
        </div>
      </div>

      <p className="mt-2 overflow-hidden text-[11px] leading-[1.55] text-white/76 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] sm:text-[12px]">
        {highlight}
      </p>

      <div className="mt-2">
        <SourceLink href={sourceUrl} light>
          Public reference
        </SourceLink>
      </div>
    </article>
  );
}

function ClientTile({ name, tone }) {
  return (
    <li className="flex h-full min-h-[56px] items-center gap-2.5 rounded-[14px] border border-[#d9e1f0] bg-white px-3 py-2.5 shadow-[0_8px_18px_rgba(20,37,76,0.05)] sm:min-h-[64px] sm:gap-3 sm:rounded-[18px] sm:px-4 sm:py-3 sm:shadow-[0_10px_24px_rgba(20,37,76,0.05)]">
      <ClientBadge name={name} tone={tone} size={40} />
      <div className="min-w-0">
        <div className="font-display text-[13px] font-semibold leading-[1.2] text-brand-navy sm:text-[15px]">
          {name}
        </div>
      </div>
    </li>
  );
}

export default function ClientPageContents() {
  return (
    <main className="overflow-x-hidden bg-[linear-gradient(180deg,#eef3fb_0%,#ffffff_32%,#f7f9fd_100%)] pb-12 sm:pb-14 lg:pb-16">
      <section
        className="relative overflow-hidden border-t-4 border-brand-red bg-[#0f2348] text-white"
        style={{ minHeight: "calc(100dvh - var(--site-header-height))" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/clients/banner.jpg"
            alt="Prem Industries client network"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(10,22,44,0.92)_0%,rgba(10,22,44,0.8)_40%,rgba(10,22,44,0.42)_70%,rgba(10,22,44,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(233,34,39,0.18),transparent_22%)]" />

        <div
          className="site-shell relative z-[2] grid gap-7 px-0 py-12 sm:gap-8 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center lg:py-20"
          style={{ minHeight: "calc(100dvh - var(--site-header-height))" }}
        >
          <div className="px-4 sm:px-0">
            <span className="inline-flex rounded-full bg-white/12 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white/82 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[10px]">
              B2B Client Network
            </span>
            <h1 className="mt-4 max-w-[860px] font-condensed text-[clamp(2rem,4.8vw,3.95rem)] font-[700] uppercase leading-[0.92] tracking-[0.012em] text-white sm:mt-5 sm:tracking-[0.025em] lg:max-w-[780px]">
              Trusted By Procurement Teams, OEM Programs, Marketplace Accounts,
              And Industrial Buyers
            </h1>
            <p className="mt-3.5 max-w-[700px] text-[12px] leading-[1.65] text-white/84 sm:mt-4 sm:text-[14px] sm:leading-[1.72] lg:text-[14.5px]">
              Prem Industries works with a broad B2B client base across
              packaging, repeat supply programs, industrial demand,
              retail-linked operations, and OEM-facing execution. This page now
              presents that network in the same industrial visual language used
              across the rest of the site.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-7 sm:gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.11em] text-white transition hover:bg-[#cf171d] sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.12em]"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>

          <div className="w-full px-0">
            <div className="grid w-full gap-5 sm:gap-6">
              <div className="grid w-full grid-cols-3 gap-3 sm:gap-4">
                {clientEvidence.map((item) => (
                  <MiniStat
                    key={item.label}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell-tight pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {clientEvidence.map((item) => (
            <EvidenceCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="mt-4 bg-[#14254c] py-10 text-white sm:mt-6 sm:py-11 lg:mt-8 lg:py-12">
        <div className="site-shell-tight grid gap-5 sm:gap-6 lg:grid-cols-[minmax(220px,0.28fr)_minmax(0,0.72fr)] lg:gap-8">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/74">
              Featured Accounts
            </span>
            <h2 className="mt-4 font-condensed text-[clamp(1.8rem,3.8vw,2.9rem)] font-[700] uppercase leading-[0.96] tracking-[0.04em]">
              Relationship Signals For B2B Buyers
            </h2>
            <p className="mt-3 max-w-[360px] text-[13px] leading-[1.65] text-white/76 sm:text-[14px] sm:leading-[1.75]">
              A tighter featured-account strip built to read like industrial
              proof, not a stack of promo cards.
            </p>
          </div>

          <div className="grid gap-x-4 gap-y-3 sm:gap-x-6 xl:grid-cols-3">
            {featuredClientStories.map((item) => (
              <FeaturedClientCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="client-band-shell pt-12 sm:pt-14 lg:pt-16">
        <div>
          <span className="inline-flex rounded-full bg-brand-surface px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
            Client Bands
          </span>
          <h2 className="mt-4 max-w-5xl font-condensed text-[clamp(2rem,4vw,3.2rem)] font-[700] uppercase leading-[0.96] tracking-[0.04em] text-brand-navy">
            Sector Clusters For A More Industrial B2B Presentation
          </h2>
          <p className="mt-4 max-w-4xl text-[15px] leading-[1.85] text-brand-slate">
            The roster is now organized as a tighter business list, making it
            easier for sourcing and procurement visitors to scan who Prem
            already serves.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4">
          {clientGroups.map((group) => (
            <section
              key={group.title}
              className="border-b border-[#dbe4f2] py-4 last:border-b-0 sm:py-6 lg:grid lg:grid-cols-[minmax(380px,430px)_minmax(0,1fr)] lg:items-start lg:gap-8"
            >
              <div className="max-w-[420px] self-start">
                <h3 className="font-display text-[1.45rem] font-bold leading-[1.08] tracking-[-0.02em] text-brand-navy sm:text-[1.7rem] lg:text-[1.9rem]">
                  {group.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-brand-slate sm:text-[14px] sm:leading-[1.7]">
                  {group.body}
                </p>
                <div className="mt-4">
                  <SourceLink href={group.sourceUrl}>Roster source</SourceLink>
                </div>
              </div>

              <div className="mt-4 self-start lg:mt-0">
                <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4 [grid-auto-rows:1fr]">
                  {group.clients.map((client) => (
                    <ClientTile key={client} name={client} tone={group.tone} />
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="site-shell-tight pt-12 sm:pt-14 lg:pt-16">
        <div className="rounded-[30px] bg-[linear-gradient(120deg,#10224b_0%,#17346a_58%,#e92227_100%)] px-5 py-7 text-white shadow-[0_24px_60px_rgba(20,37,76,0.22)] sm:px-8 sm:py-9 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/68">
              Next Step
            </p>
            <h2 className="mt-3 font-condensed text-[clamp(2rem,4vw,3.1rem)] font-[700] uppercase leading-[0.96] tracking-[0.04em]">
              Need A Stronger Partner Proof Page Or Sector-Specific B2B
              Capability Deck?
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-white/82">
              We can extend this client-network approach into packaging, sheet
              metal, injection moulding, retail-supply, or industrial-program
              proof pages that match the rest of the Prem site language.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-display text-sm font-bold uppercase tracking-[0.12em] text-brand-navy transition hover:bg-white/90"
            >
              Talk To Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
