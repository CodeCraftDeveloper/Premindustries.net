"use client";

import MachineHero from "@/components/common/MachineHero";

export default function ShearingMachineHero() {
  return (
    <MachineHero
      title={
        <>
          Shearing
          <br />
          Machine
        </>
      }
      backgroundImage="/sheetmetal/shearing-1.jpg"
    />
  );
}
