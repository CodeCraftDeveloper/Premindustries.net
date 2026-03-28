export const desktopNavItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Sectors",
    children: [
      {
        label: "Packaging Sector",
        href: "/packaging",
      },
      {
        label: "Steel Sector",
        children: [
          {
            label: "Manufacturing",
            children: [
              {
                label: "Sheet Metal Components",
                href: "/sheet-metal-components",
              },
            ],
          },
          {
            label: "Trading",
            children: [
              { label: "Mangaldeep Steels" },
              { label: "Premhari" },
              {
                label: "PH Steels",
                href: "https://www.phsteel.in/",
                external: true,
              },
              { label: "Dream Metplast" },
            ],
          },
        ],
      },
      {
        label: "Moulding Sector",
        href: "/injection-molding",
      },
      {
        label: "Retail Sector",
        children: [
          { label: "Prem Paints" },
          { label: "Nourishing Foods" },
          { label: "Prem Shanti" },
          { label: "Prem Pigments" },
        ],
      },
      {
        label: "Construction Sector",
        children: [
          {
            label: "Ved Kranti Constructions",
          },
        ],
      },
    ],
  },
  { label: "Our Clients", href: "/clients" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Other Websites",
    children: [
      {
        label: "Prem Packaging",
        href: "https://prempackaging.com/",
        external: true,
      },
      {
        label: "PH Steel",
        href: "https://phsteel.in/",
        external: true,
      },
    ],
  },
];

export const mobileNavItems = desktopNavItems;
