"use client";

import SectorCard from "@/components/common/SectorCard";

export default function Card({
  CardTitle,
  CardImage,
  CardLink = "",
  imgAlt,
  width = 600,
  height = 220,
  priority = false,
}) {
  return (
    <SectorCard
      href={CardLink}
      image={CardImage}
      imgAlt={imgAlt}
      title={CardTitle}
      width={width}
      height={height}
      priority={priority}
    />
  );
}
