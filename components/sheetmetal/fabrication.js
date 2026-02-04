import Image from "next/image";

export default function FabricationProcess() {
  return (
    <div className="container text-center pt-2">
      <h1 className="text-center" style={{ fontSize: "40px" }}>
        SHEET METAL FABRICATION PROCESS
      </h1>

      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <Image
          src="/sheetmetal/fabrication-process.jpg"
          alt="SHEET METAL FABRICATION PROCESS"
          priority
          className="img-fluid"
          height={600}
          width={2200}
        />
      </div>
    </div>
  );
}
