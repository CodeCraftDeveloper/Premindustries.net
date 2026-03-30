"use client";

import { useEffect, useState } from "react";

import LogoIntro from "@/components/common/LogoIntro";

export default function PageLogoIntroGate({ storageKey }) {
  const [showLogoIntro, setShowLogoIntro] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasCompletedIntro =
      window.sessionStorage.getItem(storageKey) === "true";

    if (!hasCompletedIntro) {
      setShowLogoIntro(true);
    }
  }, [storageKey]);

  const handleLogoIntroComplete = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(storageKey, "true");
    }

    setShowLogoIntro(false);
  };

  if (!showLogoIntro) {
    return null;
  }

  return <LogoIntro onComplete={handleLogoIntroComplete} />;
}
