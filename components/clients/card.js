"use client";

import SectorCard from "@/components/common/SectorCard";

export default function Card({ CardLink, CardImage, CardTitle }) {
  return <SectorCard href={CardLink} image={CardImage} title={CardTitle} />;
}
