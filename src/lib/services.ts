import { Building2, Snowflake, Zap, Droplets, Layers3, Flame, Network } from "lucide-react";

export const COMPANY = "Hassan Building Design Group USA";
export const SERVICES = [
  {
    slug: "architectural",
    icon: Building2,
    title: "Architectural Design & Permit Drawings",
    copy: "Architectural drafting and documentation for residential and commercial projects, including new construction, additions, renovations, tenant improvements, and remodeling projects.",
    items: ["Floor Plans", "Site Plans", "Roof Plans", "Exterior Elevations", "Building Sections", "Door & Window Schedules", "Life Safety Plans", "Reflected Ceiling Plans", "Construction Details", "General Notes", "Existing & Proposed Plans"],
  },
  {
    slug: "mechanical-hvac",
    icon: Snowflake,
    title: "Mechanical / HVAC Design",
    copy: "HVAC design and drafting support for residential and commercial buildings, from individual equipment replacements to complete mechanical permit documentation.",
    items: ["HVAC Floor Plans", "Equipment Layouts", "Ductwork Layouts", "Supply & Return Air Distribution", "Exhaust & Ventilation Systems", "Equipment Schedules", "HVAC Load Calculations", "Heating & Cooling Equipment Selection", "Mechanical Details", "Refrigerant Piping Layouts", "Ventilation Calculations", "Energy-related HVAC Documentation", "Existing & Proposed HVAC Plans"],
  },
  {
    slug: "electrical",
    icon: Zap,
    title: "Electrical Design & Permit Drawings",
    copy: "Electrical drafting and design documentation for residential and commercial projects.",
    items: ["Lighting Plans", "Power Plans", "Electrical Layouts", "Panel Schedules", "Load Calculations", "Single-Line Diagrams", "Equipment Connections", "Receptacle & Device Layouts", "Electrical Notes & Details", "Service & Distribution Documentation", "Existing & Proposed Electrical Plans", "EV Charger Electrical Plans", "Electrical Equipment Schedules"],
  },
  {
    slug: "plumbing",
    icon: Droplets,
    title: "Plumbing Design & Permit Drawings",
    copy: "Plumbing design and drafting support for residential and commercial building projects.",
    items: ["Domestic Water Plans", "Sanitary Drainage Plans", "Vent Plans", "Storm Drainage Plans", "Plumbing Isometrics", "Fixture Layouts", "Pipe Sizing", "Equipment Connections", "Water Heater Layouts", "Plumbing Details", "Riser Diagrams", "Plumbing Schedules"],
  },
  {
    slug: "structural",
    icon: Layers3,
    title: "Structural Design & Permit Drawings",
    copy: "Structural drafting and documentation support for residential and commercial building projects.",
    items: ["Foundation Plans", "Framing Plans", "Roof Framing Plans", "Beam & Column Layouts", "Structural Details", "Structural Sections", "Connection Details", "General Structural Notes", "Structural Schedules", "Existing & Proposed Structural Plans"],
    noteTitle: "Professional Review & Sealing",
    note: "Where a project or jurisdiction requires documents to be prepared, reviewed, signed, or sealed by a U.S.-licensed Professional Engineer, we can coordinate the drawing package with the appropriate licensed professional designated for the project. We do not represent an unlicensed individual or entity as a licensed U.S. professional.",
  },
  {
    slug: "mepf-permit-sets",
    icon: Flame,
    title: "Complete MEPF Design & Permit Drawing Packages",
    copy: "Coordinated mechanical, electrical, plumbing, and fire-protection documentation for residential and commercial projects.",
    items: ["HVAC Plans", "Mechanical Equipment Schedules", "Electrical Plans", "Lighting & Power Plans", "Panel Schedules", "Load Calculations", "Plumbing Plans", "Plumbing Isometrics", "Fire Protection Coordination", "General Notes", "Equipment Schedules", "Construction Details", "MEP Coordination", "Architectural / MEP Overlay Coordination"],
    note: "All deliverables are developed according to the project scope and applicable jurisdiction requirements.",
  },
  {
    slug: "bim-coordination",
    icon: Network,
    title: "BIM Modeling & Coordination",
    copy: "We develop and coordinate Revit models for architectural, structural, and MEP documentation, and produce precise 2D CAD drawings when the project needs them.",
    items: ["Architectural BIM Modeling", "Structural BIM Modeling", "MEP BIM Modeling", "Existing Building Modeling", "As-Built Modeling", "Revit Families", "Drawing Production", "Model-Based Documentation", "Clash Detection & Coordination", "MEP Coordination", "Architectural / Structural / MEP Coordination", "AutoCAD Drafting"],
  },
];

export const PERMIT_ITEMS = ["Architectural Plans", "Site Plans", "Structural Plans", "HVAC Plans", "Electrical Plans", "Plumbing Plans", "Life Safety Plans", "Equipment Schedules", "Panel Schedules", "Load Calculations", "Construction Details", "General Notes", "Code-related Drawing Information", "Energy-related Documentation"];
export const RESIDENTIAL = ["Single-Family Homes", "New Construction", "Home Additions", "Remodeling", "ADUs / Accessory Dwelling Units", "Basement Finishing", "Garage Conversions", "Interior Renovations", "HVAC Replacements", "Electrical Upgrades", "Plumbing Modifications", "Residential Tenant Improvements"];
export const COMMERCIAL = ["Office Tenant Improvements", "Restaurant / Food Service", "Retail", "Medical / Dental", "Salon", "Offices", "Small Warehouses", "Small Commercial Buildings", "Tenant Improvements", "Renovations", "MEP Renovations", "Equipment Replacements"];
export const PROCESS = [
  ["Project Information", "Send us your drawings, site information, scope, photos, dimensions, or existing plans."],
  ["Project Review", "We review the available information and identify the required drawing disciplines and deliverables."],
  ["Design & Drafting", "Our team develops the required architectural, structural, mechanical, electrical, and plumbing drawings."],
  ["Coordination", "We coordinate the disciplines to identify drawing conflicts and maintain consistency across the plan set."],
  ["Review & Revisions", "We incorporate your comments and required revisions according to the agreed scope."],
  ["Final Documentation", "Organized drawing package delivered according to the agreed scope and intended submission workflow."],
];
export const REASONS = [
  ["U.S.-Focused Documentation", "We focus on drawing and documentation requirements for U.S. residential and commercial projects."],
  ["Multi-Discipline Capability", "Architectural, structural, mechanical, electrical, plumbing, and BIM services under one coordinated workflow."],
  ["Clear & Detailed Drawings", "Our goal is to produce organized drawings that are easy for clients, contractors, and reviewers to understand."],
  ["Flexible Project Support", "From a single drawing or revision to a complete multi-discipline project package."],
  ["Remote Collaboration", "Work with our team remotely from anywhere in the United States."],
  ["Design & Drafting Focus", "Our business focuses on design, drafting, BIM coordination, calculations, and documentation. We do not provide construction or installation services."],
];
export const CLIENTS = ["Architects", "Engineers", "General Contractors", "MEP Contractors", "Construction Companies", "Developers", "Property Owners", "Homeowners", "Design-Build Companies", "Real Estate Professionals"];

export const DISCLAIMER =
  "Hassan Building Design Group USA provides design, drafting, BIM, coordination, calculation, and documentation support. We do not provide construction or installation services. Permit requirements and professional licensing requirements vary by jurisdiction and project. Where a licensed architect or Professional Engineer is required, final documents must be reviewed, signed, and/or sealed by the appropriately licensed professional responsible for the project. Hassan Building Design Group USA does not guarantee permit approval, as approval decisions are made by the applicable Authority Having Jurisdiction (AHJ).";

export const SERVICE_PAGES: Record<
  string,
  {
    overview: string[];
    highlights: { title: string; copy: string }[];
    audience: string[];
    projects: string[];
  }
> = {
  architectural: {
    overview: [
      "Architectural permit drawings are the sheets most reviewers open first. They show how the building is organized, how people move through it, and how the proposed work relates to what is already there. We draft those sheets so a plan reviewer, a contractor, and the rest of the design team can read the same story.",
      "A typical set starts with existing and proposed plans, then adds site information, elevations, sections, and the schedules that keep doors, windows, and rooms consistent from sheet to sheet. We prepare residential and commercial packages, from a single-room remodel to a full permit set for a new building or tenant improvement.",
    ],
    highlights: [
      { title: "Existing and proposed, shown clearly", copy: "Demolition, new work, and what stays are separated so the scope is obvious before anyone reviews the engineering sheets." },
      { title: "Elevations, sections, and schedules", copy: "Exterior views, building sections, and door and window schedules are drawn to match the plans, not added as an afterthought." },
      { title: "Ready for the other disciplines", copy: "Floor plans, roof plans, and reflected ceilings are organized so structural and MEP drawings can align to the same backgrounds." },
    ],
    audience: ["Homeowners planning an addition or remodel", "General contractors submitting for permit", "Architects who need production support", "Developers packaging a small commercial building"],
    projects: ["Single-family new homes", "Home additions and ADUs", "Interior renovations", "Tenant improvements", "Small retail and office buildings", "As-built documentation"],
  },
  "mechanical-hvac": {
    overview: [
      "HVAC drawings explain how a building is heated, cooled, and ventilated. Reviewers look for equipment, duct or piping routes, ventilation intent, and schedules that match the plans. We prepare those sheets for residential replacements and for commercial spaces where equipment, shafts, and ceilings have to share the same room.",
      "Load calculations, equipment sizing, and ventilation notes are included when they are part of the agreed scope. The goal is a mechanical set that coordinates with architecture and structure, so ducts are not drawn through beams and equipment has a real place to sit.",
    ],
    highlights: [
      { title: "Layouts a reviewer can follow", copy: "Supply, return, exhaust, and equipment are shown on plans with tags that match the schedule." },
      { title: "Residential and commercial scopes", copy: "From a change-out in a house to a rooftop unit on a small commercial building, the sheet list follows the project, not a generic template." },
      { title: "Coordination with ceilings and structure", copy: "Duct routes are checked against reflected ceilings, framing, and electrical equipment so conflicts show up on the drawings." },
    ],
    audience: ["HVAC contractors", "General contractors", "Property owners replacing equipment", "Design-build teams"],
    projects: ["HVAC replacements", "Home additions that need new conditioning", "Restaurant and retail ventilation", "Office tenant improvements", "Warehouse ventilation", "Equipment layout updates"],
  },
  electrical: {
    overview: [
      "Electrical permit drawings cover how a space is lit, powered, and connected back to the service. A useful set shows lighting, receptacles, equipment, panel schedules, and the diagrams a reviewer expects for the project type. We draft residential upgrades and commercial layouts with the same attention to tags, notes, and sheet order.",
      "Load calculations and single-line diagrams are prepared when the scope calls for them. Panel schedules stay tied to the plans, so a circuit on the drawing can be found on the schedule without guessing.",
    ],
    highlights: [
      { title: "Lighting and power, kept separate", copy: "Lighting plans and power plans are organized so fixtures, switching, receptacles, and equipment do not collapse into one unreadable sheet." },
      { title: "Panels and loads", copy: "Panel schedules, load information, and single-line diagrams are developed to match the devices shown on the plans." },
      { title: "Equipment that has a location", copy: "Panels, disconnects, and mechanical equipment connections are placed with working clearance in mind and coordinated with the other trades." },
    ],
    audience: ["Electrical contractors", "Homeowners upgrading a service", "Architects coordinating a tenant improvement", "Developers of small commercial buildings"],
    projects: ["Service and panel upgrades", "Lighting renovations", "Kitchen and bath remodels", "Office power and lighting", "Restaurant equipment connections", "Commercial permit sets"],
  },
  plumbing: {
    overview: [
      "Plumbing drawings show where water comes in, where waste leaves, and how vents and fixtures connect. Permit reviewers use those sheets to confirm fixture counts, routing, and equipment connections. We draft floor plans, risers or isometrics, and schedules so the system can be read without flipping between unmarked layers.",
      "Residential remodels and commercial fit-outs both need this clarity. A bathroom addition, a restaurant kitchen, or a tenant restroom stack is documented with fixture layouts, supply, sanitary drainage, and venting that agree with the architectural plan.",
    ],
    highlights: [
      { title: "Fixtures matched to the floor plan", copy: "Every fixture on the architectural plan has a plumbing location, a tag, and a path back to the schedules." },
      { title: "Supply, waste, and vent", copy: "Water, sanitary, and vent piping are shown as distinct systems, with isometrics when the project needs them." },
      { title: "Equipment connections", copy: "Water heaters, kitchen equipment, and specialty fixtures are connected on the drawings instead of left as a note to the field." },
    ],
    audience: ["Plumbing contractors", "Restaurant and retail owners", "Homeowners adding baths or kitchens", "General contractors"],
    projects: ["Bathroom and kitchen remodels", "Home additions", "Restaurant kitchens", "Tenant restrooms", "Water heater replacements", "Commercial plumbing permit sets"],
  },
  structural: {
    overview: [
      "Structural permit drawings describe how the building stands up: foundations, framing, beams, columns, and the details that connect them. We prepare those sheets for residential and commercial projects so the architectural plans and the structural plans describe the same building.",
      "Openings, roof framing, and new beams in a remodel are easy places for drawings to drift apart. We keep grids, dimensions, and member marks consistent across the set. Where a project or jurisdiction requires a U.S.-licensed Professional Engineer’s review, signature, or seal, we coordinate the package with the licensed professional designated for the project. We do not represent an unlicensed individual or entity as a licensed U.S. professional.",
    ],
    highlights: [
      { title: "Foundations and framing", copy: "Foundation plans, floor framing, and roof framing are drawn as a sequence, not as isolated sketches." },
      { title: "Details that match the plans", copy: "Connections, sections, and schedules refer to the members shown on the framing sheets." },
      { title: "Remodels and new work", copy: "Existing structure and new structure are identified so an addition or a beam replacement has a clear scope." },
    ],
    audience: ["Homeowners opening a wall or adding a story", "Contractors submitting structural sheets", "Architects who need framing documentation", "Developers of small commercial buildings"],
    projects: ["Room additions", "Load-bearing wall removals", "New single-family homes", "Garage conversions", "Roof framing changes", "Small commercial structures"],
  },
  "mepf-permit-sets": {
    overview: [
      "A complete MEPF design and permit drawing package is for projects that should not be split across unrelated drafters. Mechanical, electrical, plumbing, and fire-protection coordination sheets are produced together and checked against the architectural and structural backgrounds.",
      "Coordination is the point of the package. Ceiling space, equipment yards, shafts, and rated walls get one pass across disciplines before the set is issued. You receive organized sheets, schedules, and details according to the agreed scope and the applicable jurisdiction requirements. Approval remains with the Authority Having Jurisdiction.",
    ],
    highlights: [
      { title: "One coordinated package", copy: "HVAC, electrical, plumbing, and applicable fire-related drawings share backgrounds, sheet order, and revision control." },
      { title: "Conflicts caught on paper", copy: "Ducts, piping, panels, and structure are reviewed together so clashes are marked in the set instead of in the field." },
      { title: "Scales with the project", copy: "Use the full package for a new building or a tenant improvement, or start with the disciplines the jurisdiction is actually asking for." },
    ],
    audience: ["General contractors", "Design-build companies", "Developers", "Owners of restaurants, offices, and small commercial buildings"],
    projects: ["Small commercial ground-up buildings", "Restaurant build-outs", "Office tenant improvements", "Multi-trade remodels", "Equipment replacement projects", "Coordinated residential custom homes"],
  },
  "bim-coordination": {
    overview: [
      "BIM coordination is how we keep architectural, structural, and MEP information in one model instead of in disconnected CAD files. Revit is used for models, views, and schedules. AutoCAD is used when the deliverable is a precise 2D permit set or when the project team is still working in CAD.",
      "The model is a working tool, not a picture. Walls, levels, equipment, and mains are modeled so plans, sections, and schedules come from the same source. Clash review focuses on the issues that affect permit drawings and construction coordination: structure versus ducts, ceilings versus lighting, and equipment that does not fit the room drawn for it.",
    ],
    highlights: [
      { title: "Revit for the model", copy: "Architectural, structural, and MEP models produce plans, sections, and schedules that stay linked when the design moves." },
      { title: "AutoCAD for the sheet", copy: "2D plans, details, and permit sheets are drafted in AutoCAD when that is the format your jurisdiction or consultant expects." },
      { title: "Clash review with a purpose", copy: "We look for conflicts that would change the drawings, then update the model and the sheets together." },
    ],
    audience: ["Architects", "MEP engineers", "Contractors running coordination meetings", "Owners who want one documented model"],
    projects: ["Multi-discipline permit models", "Tenant improvement coordination", "As-built model updates", "CAD-to-Revit documentation", "Clash reviews before plan check", "Schedule-driven drawing sets"],
  },
};