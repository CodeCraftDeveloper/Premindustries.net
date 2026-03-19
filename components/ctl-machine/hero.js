"use client";

import MachineHero from "@/components/common/MachineHero";

export default function CtlMachineHero() {
  return (
    <MachineHero
      title={
        <>
          CTL
          <br />
          Machine
        </>
      }
      backgroundImage="/sheetmetal/ctl-1.jpg"
    />
  );
}
