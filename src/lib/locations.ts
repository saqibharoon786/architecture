export type LocationPage = {
  slug: string;
  name: string;
  region: string;
  summary: string;
  cities: string[];
  intro: string[];
  focus: { title: string; copy: string }[];
  projects: string[];
};

export const LOCATIONS: LocationPage[] = [
  {
    slug: "california",
    name: "California",
    region: "West",
    summary: "Permit drawings for seismic, energy, ADU, and commercial projects from major metros to smaller jurisdictions.",
    cities: ["Los Angeles", "San Diego", "San Jose", "Sacramento", "Oakland", "Irvine"],
    intro: [
      "California projects ask drawings to do several jobs at once. The architectural set has to describe the work, the structural sheets have to be readable against seismic expectations, and energy-related information often travels with the permit package. We prepare that documentation for homeowners, contractors, and design teams anywhere in the state.",
      "Coastal humidity, inland heat, and wildland edge conditions change what a mechanical and architectural set should show. We do not treat Los Angeles, the Central Valley, and the Bay Area as the same climate or the same building department. You send the address. We draft to that project.",
    ],
    focus: [
      { title: "Additions, ADUs, and remodels", copy: "Existing and proposed plans, elevations, and the structural sheets that go with a new opening or a new dwelling unit." },
      { title: "Energy-related documentation", copy: "Drawing notes and supporting information organized for the energy path your project is actually using." },
      { title: "MEP for tight sites", copy: "Equipment, ducts, and panels placed with the lot, the roof, and the existing service in mind." },
    ],
    projects: ["ADUs and garage conversions", "Home additions", "Tenant improvements", "HVAC and electrical upgrades", "Small commercial buildings", "Restaurant and retail fit-outs"],
  },
  {
    slug: "texas",
    name: "Texas",
    region: "South",
    summary: "Drawing sets for fast-growing residential and light commercial work across the state’s major metros.",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "Plano"],
    intro: [
      "Texas work moves quickly, and the drawings have to keep up without becoming sloppy. We support new homes, additions, warehouses, restaurants, and tenant improvements with architectural, structural, and MEP sheets that a local reviewer can actually use.",
      "Houston’s wind and flood context, North Texas storms, and the heat that drives HVAC sizing are project facts, not decorations. We document equipment, envelopes, and site information from what you provide and from the scope the jurisdiction is likely to review. Permit rules still change by city.",
    ],
    focus: [
      { title: "Growth markets, clear sheet lists", copy: "Residential and small commercial packages organized so a busy plan review does not have to hunt for the floor plan or the panel schedule." },
      { title: "Hot-climate mechanical sets", copy: "Equipment layouts, ductwork, and ventilation drawn for buildings that run cooling for most of the year." },
      { title: "Commercial fit-outs", copy: "Offices, retail, and restaurants with coordinated architectural and MEP backgrounds." },
    ],
    projects: ["Single-family homes", "Warehouses and small commercial", "Restaurant build-outs", "Office tenant improvements", "HVAC replacements", "Electrical service upgrades"],
  },
  {
    slug: "florida",
    name: "Florida",
    region: "South",
    summary: "Documentation for wind, flood, and humidity-conscious residential and commercial permit sets.",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "Naples"],
    intro: [
      "Florida permit sets are judged on more than floor plans. Wind, flood, and opening information show up early in review, and mechanical drawings have to make sense in a humid climate. We prepare architectural, structural, and MEP documentation that keeps those topics on the sheets where reviewers look for them.",
      "A coastal house addition and an inland restaurant are different submittals. We ask for the address, the flood information you already have, and any prior comments before we lock a sheet list. Where an engineer’s seal is required for structural or wind-related documents, that review is coordinated with a U.S.-licensed professional.",
    ],
    focus: [
      { title: "Openings and the exterior", copy: "Elevations, window and door schedules, and notes organized so impact or protection requirements are not buried." },
      { title: "Mechanical in a humid climate", copy: "Equipment, ventilation, and exhaust drawn for houses and small commercial spaces that stay cooled and dehumidified." },
      { title: "Renovations that touch the shell", copy: "Existing and proposed plans for remodels, additions, and tenant work, with structure identified where the shell changes." },
    ],
    projects: ["Home additions and remodels", "Impact-opening upgrades", "Condo and house HVAC replacements", "Restaurant and retail spaces", "Small commercial buildings", "Electrical and plumbing modifications"],
  },
  {
    slug: "new-york",
    name: "New York",
    region: "Northeast",
    summary: "As-built-heavy drawing sets for New York City and for cities and towns across the rest of the state.",
    cities: ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse", "Long Island"],
    intro: [
      "New York work is often an existing building with a precise scope pressed into it. We draft existing and proposed plans, elevations, and MEP sheets for alterations, tenant improvements, and residential renovations. New York City and a smaller upstate city do not share a checklist, so the sheet list follows the authority that will actually review the file.",
      "Cold winters and older building stock show up in the mechanical and architectural set: equipment that has to fit an existing room, ventilation for a new occupancy, and structural notes when a wall or a floor opening changes. We coordinate those disciplines instead of issuing them as unrelated PDFs.",
    ],
    focus: [
      { title: "Existing buildings, documented", copy: "As-built and proposed plans that separate demolition from new work in apartments, brownstones, and small commercial floors." },
      { title: "Tenant improvements", copy: "Offices, clinics, and retail with architectural backgrounds and matching electrical, HVAC, and plumbing sheets." },
      { title: "Heating-season mechanical work", copy: "Equipment replacements and ventilation plans drawn against the space you actually have." },
    ],
    projects: ["Apartment and townhouse renovations", "Office tenant improvements", "Restaurant fit-outs", "HVAC replacements", "Structural opening drawings", "Mixed-use alterations"],
  },
  {
    slug: "illinois",
    name: "Illinois",
    region: "Midwest",
    summary: "Chicago-area and statewide permit drawings for cold-climate residential and commercial projects.",
    cities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield"],
    intro: [
      "Illinois drawings have to read clearly in a review culture that expects complete sets, especially in and around Chicago. We prepare architectural, structural, and MEP documentation for renovations, tenant improvements, and small commercial projects, with heating and ventilation treated as part of the design rather than a late add-on.",
      "Older masonry buildings, tight ceilings, and long heating seasons are typical constraints. Equipment schedules, roof framing, and electrical upgrades are drafted so they agree with the floor plans. Local amendments still decide the final checklist.",
    ],
    focus: [
      { title: "Cold-climate HVAC", copy: "Heating equipment, distribution, and ventilation shown with schedules a reviewer can match to the plans." },
      { title: "Urban renovations", copy: "Existing and proposed drawings for offices, restaurants, and residences where the building is already standing." },
      { title: "Coordinated permit packages", copy: "Architectural and trade sheets issued together when the project needs more than one discipline." },
    ],
    projects: ["Office and retail tenant improvements", "Restaurant build-outs", "Home additions", "Heating equipment replacements", "Electrical upgrades", "Small commercial alterations"],
  },
  {
    slug: "georgia",
    name: "Georgia",
    region: "South",
    summary: "Atlanta-metro and statewide drawing support for residential growth and light commercial fit-outs.",
    cities: ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon", "Sandy Springs"],
    intro: [
      "Georgia’s growth shows up as additions, new homes, medical and office fit-outs, and restaurants that need a full drawing set before a lease starts. We draft those packages for contractors and owners who want architectural and MEP sheets from one team.",
      "Humid cooling loads, attic equipment, and tenant ceilings are the coordination issues we see most. The drawings show where the units go, how ducts run, and how power and plumbing meet the architectural plan. Requirements in the City of Atlanta are not the requirements in a smaller county, and we do not pretend they are.",
    ],
    focus: [
      { title: "Residential expansions", copy: "Additions, basement finish, and new home permit sets with plans, elevations, and supporting structure." },
      { title: "Cooling-led mechanical plans", copy: "Equipment and duct layouts for houses and small commercial spaces in a long cooling season." },
      { title: "Lease-driven commercial work", copy: "Retail, restaurant, and office drawings organized for a permit schedule, not a design exercise with no sheet list." },
    ],
    projects: ["Home additions", "New single-family documentation", "Medical and office fit-outs", "Restaurants", "HVAC change-outs", "Plumbing and electrical remodels"],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    region: "South",
    summary: "Permit documentation for the Piedmont building boom and for coastal communities with different review pressures.",
    cities: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Wilmington", "Asheville"],
    intro: [
      "North Carolina projects range from Charlotte and Raleigh infill to coastal houses that live with wind and flood questions. We prepare residential and light commercial drawings for both, and we keep the sheet list tied to the jurisdiction on the application, not to a statewide average.",
      "Additions and renovations dominate the residential work: new square footage, a reworked kitchen, a change in how the house is conditioned or powered. Commercial work is often a tenant improvement that needs architecture plus MEP on a short calendar.",
    ],
    focus: [
      { title: "Piedmont housing", copy: "Plans, elevations, and structural sheets for additions and new single-family work in the state’s fastest-growing counties." },
      { title: "Coastal versus inland", copy: "Exterior, site, and structural information adjusted to the exposure of the actual address." },
      { title: "Small commercial MEP", copy: "HVAC, electrical, and plumbing coordinated to the same architectural background." },
    ],
    projects: ["Home additions and remodels", "ADUs", "Office tenant improvements", "Retail and restaurant spaces", "HVAC replacements", "Electrical upgrades"],
  },
  {
    slug: "arizona",
    name: "Arizona",
    region: "West",
    summary: "Heat-driven mechanical and architectural permit drawings for Phoenix, Tucson, and the communities around them.",
    cities: ["Phoenix", "Tucson", "Mesa", "Scottsdale", "Chandler", "Gilbert"],
    intro: [
      "In Arizona the mechanical drawings are not a side sheet. Cooling equipment, duct routes, and ventilation decide whether a house addition or a small commercial space is documented honestly. We draft those plans with the architectural and electrical sheets so the unit, the panel, and the roof or yard actually agree.",
      "Phoenix-area production and custom residential work, tenant improvements, and restaurants all land in plan review with different expectations. We build the set from your scope and the city’s ask. Extreme heat is treated as a design condition for equipment layout and load work, not as a slogan.",
    ],
    focus: [
      { title: "HVAC that fits the building", copy: "Equipment sizing support, layouts, and schedules for buildings that depend on mechanical cooling." },
      { title: "Residential permit sets", copy: "Additions, remodels, and new-home architectural sheets with structure where the scope changes the frame." },
      { title: "Electrical alongside the equipment", copy: "Power for mechanical equipment, lighting, and panel changes drawn on sheets that match the HVAC plans." },
    ],
    projects: ["Home additions", "HVAC replacements", "Custom residential documentation", "Restaurant and retail fit-outs", "Office tenant improvements", "Electrical service upgrades"],
  },
  {
    slug: "washington",
    name: "Washington",
    region: "West",
    summary: "Seattle-area and statewide drawings with energy, seismic, and rain-conscious documentation.",
    cities: ["Seattle", "Bellevue", "Tacoma", "Spokane", "Vancouver", "Everett"],
    intro: [
      "Washington reviews, especially around Seattle, expect drawing sets that take energy and existing construction seriously. We prepare architectural, structural, and MEP documentation for alterations, additions, and tenant improvements, and we keep energy-related notes with the sheets they support.",
      "Seismic context and wet weather show up in how openings, roofs, and ventilation are drawn. A house in Spokane and a mixed-use alteration in Seattle are not documented with the same assumptions. Send the jurisdiction with the photos.",
    ],
    focus: [
      { title: "Energy-conscious sheet sets", copy: "Plans and notes organized so envelope, mechanical, and lighting information can be reviewed together." },
      { title: "Existing-building alterations", copy: "As-built and proposed plans for houses and commercial floors that are already occupied." },
      { title: "Structural clarity", copy: "Framing and opening drawings coordinated with architecture, with licensed engineering review arranged when a seal is required." },
    ],
    projects: ["Home additions and ADUs", "Townhouse and house renovations", "Office tenant improvements", "Restaurant ventilation", "Electrical upgrades", "Multi-discipline permit sets"],
  },
  {
    slug: "colorado",
    name: "Colorado",
    region: "West",
    summary: "Front Range and mountain-community drawings that respect snow, cold, and a fast residential market.",
    cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder", "Lakewood"],
    intro: [
      "Colorado permit sets have to respect snow, heating, and the difference between a Front Range subdivision and a mountain town. We draft architectural and structural sheets for additions and new residential work, and HVAC drawings that treat heating as a primary system.",
      "Denver, Colorado Springs, Fort Collins, and the mountain jurisdictions do not share one snow load or one submittal portal. We use the project address to frame the sheet list. High-altitude equipment questions are flagged for the mechanical scope instead of copied from a sea-level template.",
    ],
    focus: [
      { title: "Snow and structure", copy: "Roof framing and addition structure drawn so the architectural roof and the structural roof describe the same building." },
      { title: "Heating-first mechanical", copy: "Equipment layouts and schedules for homes and small commercial spaces in a long heating season." },
      { title: "Front Range growth", copy: "Residential remodels, additions, and light commercial fit-outs with a coordinated permit package." },
    ],
    projects: ["Home additions", "Roof and framing changes", "Basement finish", "Office and retail improvements", "Heating equipment replacements", "Whole-home renovation sets"],
  },
];
