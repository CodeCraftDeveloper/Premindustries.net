"use client";

import MachineHero from "@/components/common/MachineHero";

export default function PressShopHero() {
  return (
    <MachineHero
      title={
        <>
          Press
          <br />
          Shop
        </>
      }
      backgroundImage="/sheetmetal/press-new.jpg"
    />
  );
}
