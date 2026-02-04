"use client"; // Add if using App Router

import Link from "next/link";
import Image from "next/image";

export default function Card({ CardLink, CardImage, CardTitle }) {
  return (
    <div className="card mt-2">
      <Link href={CardLink} className="text-decoration-none">
        <Image
          src={CardImage}
          className="card-img-top"
          alt={CardTitle || "Card image"}
          width={400} // adjust as needed
          height={380} // adjust as needed
        />
        <div className="card-body">
          <h5 className="card-title">{CardTitle}</h5>
        </div>
      </Link>
    </div>
  );
}
