"use client";

import Link from "next/link";
import Image from "next/image";

export default function Card({
  CardTitle,
  CardImage,
  CardLink = "",
  imgAlt,
  width = 600,
  height = 220,
  priority = false,
}) {
  const alt = imgAlt || CardTitle || "Card image";
  const isExternal = /^https?:\/\//i.test(CardLink);

  const Content = (
    <>
      <Image
        src={CardImage}
        alt={alt}
        width={width}
        height={height}
        className="card-img-top"
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="card-body">
        <h5 className="card-title">{CardTitle}</h5>
      </div>
    </>
  );

  return (
    <div className="card mt-2">
      {CardLink ? (
        isExternal ? (
          <a href={CardLink} target="_blank" rel="noopener noreferrer">
            {Content}
          </a>
        ) : (
          <Link href={CardLink}>{Content}</Link>
        )
      ) : (
        Content
      )}
    </div>
  );
}
