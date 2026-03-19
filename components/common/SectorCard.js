"use client";

import Link from "next/link";
import Image from "next/image";

const SectorCard = ({
  title,
  image,
  href = "",
  imgAlt,
  width = 600,
  height = 320,
  priority = false,
}) => {
  const alt = imgAlt || title || "Sector image";
  const isExternal = /^https?:\/\//i.test(href);

  const content = (
    <article className="group h-full overflow-hidden rounded-panel border border-brand-border/70 bg-white shadow-panel transition duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-6">
        <h3 className="mb-0 font-display text-xl font-bold uppercase tracking-[0.08em] text-brand-navy">
          {title}
        </h3>
        {href ? (
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-surface text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </span>
        ) : (
          <span className="inline-flex rounded-full bg-brand-surface px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-slate">
            Listed
          </span>
        )}
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
};

export default SectorCard;
