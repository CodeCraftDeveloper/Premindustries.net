const keywordServices = [
  "packaging manufacturer",
  "custom packaging",
  "corrugated box",
  "ecommerce packaging",
  "rigid box packaging",
  "industrial packaging",
  "food packaging",
  "retail packaging",
  "bulk packaging",
  "export packaging",
  "injection molding",
  "plastic injection molding",
  "custom plastic molding",
  "oem injection molding",
  "precision plastic parts",
  "plastic component manufacturer",
  "thermoplastic molding",
  "engineering plastic parts",
  "automotive plastic parts",
  "industrial plastic components",
  "sheet metal fabrication",
  "sheet metal manufacturer",
  "metal bending",
  "laser cutting",
  "welding fabrication",
  "press shop services",
  "coil slitting services",
  "cut to length services",
  "metal stamping",
  "precision fabrication",
  "oem manufacturing",
  "contract manufacturing",
  "industrial manufacturing",
  "third party manufacturing",
  "turnkey manufacturing",
  "private label manufacturing",
  "b2b manufacturing",
  "high volume manufacturing",
  "custom product manufacturing",
  "end to end manufacturing",
];

const keywordIntents = [
  "services",
  "solutions",
  "company",
  "supplier",
  "manufacturer",
  "partner",
  "quote",
  "cost",
  "pricing",
  "near me",
  "for OEM",
  "for B2B",
  "for startups",
  "for enterprises",
  "for export",
];

const keywordModifiers = [
  "best",
  "trusted",
  "reliable",
  "certified",
  "high quality",
  "affordable",
  "custom",
  "precision",
  "bulk",
  "industrial",
];

const keywordLocations = [
  "India",
  "Delhi",
  "Noida",
  "Gurgaon",
  "Ghaziabad",
  "Faridabad",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Jaipur",
  "Lucknow",
  "Indore",
  "Surat",
  "Vadodara",
  "Nagpur",
  "Coimbatore",
  "Ludhiana",
  "Kanpur",
  "Bhopal",
  "Visakhapatnam",
  "Nashik",
];

function buildAdditionalKeywordArray(limit = 1200) {
  const terms = [];

  for (const service of keywordServices) {
    for (const intent of keywordIntents) {
      for (const location of keywordLocations) {
        terms.push(`${service} ${intent} ${location}`);
        for (const modifier of keywordModifiers) {
          terms.push(`${modifier} ${service} ${intent} ${location}`);
        }
      }
    }
  }

  const unique = [...new Set(terms)];
  return unique.slice(0, limit);
}

export const ADDITIONAL_META_KEYWORD_ARRAY = buildAdditionalKeywordArray(1200);
export const ADDITIONAL_META_KEYWORDS =
  ADDITIONAL_META_KEYWORD_ARRAY.join(", ");
