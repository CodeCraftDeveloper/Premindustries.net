import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/common/SectionReveal";

export default function NotFound() {
  return (
    <SectionReveal>
      <div>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-12 text-center mb-3">
              <Image src="/logo.png" height={100} width={130} alt="logo" />
            </div>
          </div>
        </div>
        <h1 className="text-center">Page Not Found</h1>
        <p className="text-center pb-5 mb-5">
          The page you are looking for is not available. Please check the URL or
          return to the homepage.
        </p>
      </div>
    </SectionReveal>
  );
}
