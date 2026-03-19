/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  distDir: isDevelopment ? ".next-dev" : ".next",
  async redirects() {
    return [
      {
        source: "/packaging-manufacturer-india",
        destination: "/packaging/packaging-manufacturer-india",
        permanent: true,
      },
      {
        source: "/custom-packaging-manufacturer",
        destination: "/packaging/custom-packaging-manufacturer",
        permanent: true,
      },
      {
        source: "/corrugated-box-manufacturer-india",
        destination: "/packaging/corrugated-box-manufacturer-india",
        permanent: true,
      },
      {
        source: "/ecommerce-packaging-supplier",
        destination: "/packaging/ecommerce-packaging-supplier",
        permanent: true,
      },
      {
        source: "/luxury-packaging-manufacturer",
        destination: "/packaging/luxury-packaging-manufacturer",
        permanent: true,
      },
      {
        source: "/injection-molding-manufacturer-india",
        destination: "/injection-molding/injection-molding-manufacturer-india",
        permanent: true,
      },
      {
        source: "/plastic-injection-molding-company",
        destination: "/injection-molding/plastic-injection-molding-company",
        permanent: true,
      },
      {
        source: "/custom-plastic-molding",
        destination: "/injection-molding/custom-plastic-molding",
        permanent: true,
      },
      {
        source: "/oem-injection-molding-india",
        destination: "/injection-molding/oem-injection-molding-india",
        permanent: true,
      },
      {
        source: "/high-precision-plastic-molding",
        destination: "/injection-molding/high-precision-plastic-molding",
        permanent: true,
      },
      {
        source: "/sheet-metal-fabrication-india",
        destination: "/sheet-metal/sheet-metal-fabrication-india",
        permanent: true,
      },
      {
        source: "/sheet-metal-manufacturer-india",
        destination: "/sheet-metal/sheet-metal-manufacturer-india",
        permanent: true,
      },
      {
        source: "/custom-sheet-metal-fabrication",
        destination: "/sheet-metal/custom-sheet-metal-fabrication",
        permanent: true,
      },
      {
        source: "/precision-sheet-metal-parts",
        destination: "/sheet-metal/precision-sheet-metal-parts",
        permanent: true,
      },
      {
        source: "/oem-sheet-metal-manufacturer",
        destination: "/sheet-metal/oem-sheet-metal-manufacturer",
        permanent: true,
      },
      {
        source: "/laser-cutting-services-india",
        destination: "/sheet-metal/laser-cutting-services-india",
        permanent: true,
      },
      {
        source: "/cnc-sheet-metal-fabrication",
        destination: "/sheet-metal/cnc-sheet-metal-fabrication",
        permanent: true,
      },
      {
        source: "/metal-bending-services",
        destination: "/sheet-metal/metal-bending-services",
        permanent: true,
      },
      {
        source: "/welding-fabrication-services",
        destination: "/sheet-metal/welding-fabrication-services",
        permanent: true,
      },
      {
        source: "/sheet-metal-fabrication-quote",
        destination: "/sheet-metal/sheet-metal-fabrication-quote",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "logos.hunter.io",
      },
    ],
  },
};

export default nextConfig;
