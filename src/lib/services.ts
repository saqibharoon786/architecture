import { Building2, Snowflake, Zap, Droplets, Layers3, Flame, Network } from "lucide-react";

export const COMPANY = "Hassan Building Design Group USA";
export const SERVICES = [
  { slug: "architectural", icon: Building2, title: "Architectural Permit Drawings", copy: "We prepare clear and detailed architectural drawing sets for residential and commercial permit submissions.", items: ["Floor Plans", "Site Plans", "Roof Plans", "Elevations", "Building Sections", "Door & Window Schedules", "Reflected Ceiling Plans", "Existing & Proposed Plans", "As-Built Drawings", "Residential & Commercial Permit Sets"] },
  { slug: "mechanical-hvac", icon: Snowflake, title: "Mechanical / HVAC Design", copy: "Professional HVAC design and drafting for residential and commercial buildings.", items: ["HVAC Layouts", "Ductwork Design", "Equipment Layouts", "HVAC Schedules", "Load Calculations", "Ventilation & Exhaust Plans", "Equipment Sizing", "Residential HVAC Permit Drawings", "Commercial HVAC Drawings", "Mechanical Schedules and Details"] },
  { slug: "electrical", icon: Zap, title: "Electrical Design & Permit Drawings", copy: "Detailed electrical plans prepared for permit documentation and project coordination.", items: ["Lighting Plans", "Power Plans", "Electrical Layouts", "Panel Schedules", "Load Calculations", "Single-Line Diagrams", "Electrical Equipment Layouts", "Receptacle Plans", "Electrical Details", "Residential & Commercial Electrical Permit Sets"] },
  { slug: "plumbing", icon: Droplets, title: "Plumbing Design & Drawings", copy: "Complete plumbing drafting and design documentation for residential and commercial projects.", items: ["Plumbing Floor Plans", "Water Supply Layouts", "Sanitary Drainage", "Vent Piping", "Fixture Layouts", "Isometric Drawings", "Plumbing Schedules", "Equipment Connections", "Plumbing Permit Drawings"] },
  { slug: "structural", icon: Layers3, title: "Structural Design & Permit Drawings", copy: "Detailed structural drawings to support residential and commercial construction permitting.", items: ["Foundation Plans", "Framing Plans", "Roof Framing Plans", "Structural Details", "Beam & Column Layouts", "Structural Sections", "Connection Details", "Structural Schedules", "Residential Structural Permit Sets", "Commercial Structural Drawings"], note: "Where required by the jurisdiction, structural documents requiring a licensed Professional Engineer’s review, signature, or seal can be coordinated with the appropriate U.S.-licensed professional." },
  { slug: "mepf-permit-sets", icon: Flame, title: "Complete MEPF Permit Sets", copy: "One team for your building design documentation. We coordinate multiple disciplines into a consolidated permit drawing package.", items: ["Mechanical / HVAC", "Electrical", "Plumbing", "Fire Protection / Fire-related drawings where applicable", "Architectural & Structural Coordination", "Coordinated Schedules and Details"], note: "Our coordinated drawing sets help reduce conflicts between architectural, structural, and MEP systems before permit submission and construction." },
  { slug: "bim-coordination", icon: Network, title: "BIM Modeling & Coordination", copy: "Coordinated building models bring architectural, structural and MEP documentation together for clearer project review.", items: ["Architectural BIM Modeling", "Structural BIM Modeling", "MEP BIM Modeling", "Multi-Discipline Coordination", "Clash Review", "Revit Model Documentation", "AutoCAD Drawing Coordination"] },
];

export const PERMIT_ITEMS = ["Architectural Plans", "Structural Plans", "HVAC Plans", "Electrical Plans", "Plumbing Plans", "Site Plans", "Equipment Schedules", "Panel Schedules", "Load Calculations", "Energy-related documentation", "Construction Details", "General Notes", "Code-related drawing information"];
export const RESIDENTIAL = ["Single-Family Homes", "New Construction", "Home Additions", "Remodeling", "Basement Finishing", "Garage Conversions", "ADUs", "Interior Renovations", "HVAC Replacements", "Electrical Upgrades", "Plumbing Modifications"];
export const COMMERCIAL = ["Retail Buildings", "Restaurants", "Offices", "Warehouses", "Small Commercial Buildings", "Tenant Improvements", "Renovations", "Equipment Replacements", "MEP Modifications", "Commercial Permit Packages"];
export const PROCESS = [
  ["Project Information", "Send us your drawings, site information, scope, photos, dimensions, or existing plans."],
  ["Project Review", "We review the available information and identify the required drawing disciplines and deliverables."],
  ["Design & Drafting", "Our team develops the required architectural, structural, mechanical, electrical, and plumbing drawings."],
  ["Coordination", "We coordinate the disciplines to identify drawing conflicts and maintain consistency across the plan set."],
  ["Review & Revisions", "We incorporate your comments and required revisions according to the agreed scope."],
  ["Final Drawing Set", "You receive organized, professional drawings prepared for your intended permit/submission workflow."],
];
export const REASONS = [
  ["U.S.-Focused Design Services", "We work specifically with U.S. projects, drawing standards, and permit documentation requirements."],
  ["Multi-Discipline Capability", "Architectural, Structural, Mechanical, Electrical, and Plumbing services under one team."],
  ["Detailed Drawings", "We focus on clear, coordinated, and construction-ready documentation."],
  ["Flexible Project Support", "From individual drawings to complete multi-discipline permit packages."],
  ["Remote Design Support", "Work with us remotely from anywhere in the United States."],
  ["Design & Drafting Only", "Our business focuses on design, drafting, documentation, and drawing production. We do not provide construction or installation services."],
];
export const CLIENTS = ["Homeowners", "Contractors", "General Contractors", "Architects", "Engineers", "Developers", "Real Estate Professionals", "MEP Contractors", "Construction Companies", "Design-Build Companies"];

export const DISCLAIMER =
  "Design and documentation only — no construction or installation services. Final permit requirements vary by city, county, state, project type, and Authority Having Jurisdiction (AHJ). Where a licensed architect or Professional Engineer seal is required, that review can be coordinated with the appropriate U.S.-licensed professional.";

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
      "Openings, roof framing, and new beams in a remodel are easy places for drawings to drift apart. We keep grids, dimensions, and member marks consistent across the set. When a jurisdiction requires a licensed Professional Engineer’s review or seal, that step is coordinated with the appropriate U.S.-licensed professional.",
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
      "A complete MEPF permit set is for projects that should not be split across unrelated drafters. Mechanical, electrical, plumbing, and fire-protection or fire-related sheets are produced together and checked against the architectural and structural backgrounds.",
      "Coordination is the point of the package. Ceiling space, equipment yards, shafts, and rated walls get one pass across disciplines before the set is issued. You receive organized sheets, schedules, and details prepared for your permit workflow, with a single team to call when a revision touches more than one trade.",
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