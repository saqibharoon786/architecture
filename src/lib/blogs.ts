export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOGS: BlogPost[] = [
  {
    slug: "what-a-permit-drawing-set-includes",
    title: "What a U.S. permit drawing set actually needs",
    excerpt:
      "Plan reviewers do not approve a mood board. Here is the sheet list that usually carries a residential or small commercial permit, and what to send before drafting starts.",
    date: "March 4, 2026",
    readTime: "7 min read",
    category: "Permit Drawings",
    sections: [
      {
        heading: "Start with the scope, not the software",
        paragraphs: [
          "A permit set is a record of the work you want approved. Before anyone opens a title block, the useful question is simple: what is changing, and which city or county will review it? A kitchen remodel, a rooftop unit replacement, and a new tenant restaurant do not need the same sheets. They do need drawings that match the scope you will build.",
          "Hassan Building Design Group USA prepares architectural, structural, mechanical, electrical, and plumbing documentation for that review. We do not build the project. The drawings are the work product, organized so a reviewer can find the plan, the schedule, and the note that explains them.",
        ],
      },
      {
        heading: "The sheets that show up most often",
        paragraphs: [
          "Architectural sheets usually lead. Existing and proposed floor plans, a site plan, elevations, a building section, and door and window schedules tell the reviewer what the building is. If the structure changes, foundation and framing plans follow, with details for the new beams, posts, or openings. Mechanical, electrical, and plumbing sheets cover equipment, routing, lighting, power, fixtures, and the schedules that tag them.",
          "Fire-related drawings are added when the occupancy or the jurisdiction asks for them. Energy-related notes and calculations appear when the code path for the project requires them. None of this is universal. A county that accepts a short residential package may still ask a restaurant for hood, electrical, and plumbing sheets that a house never needs.",
        ],
      },
      {
        heading: "Consistency is what reviewers notice",
        paragraphs: [
          "The fastest way to collect comments is a set that disagrees with itself. A door on the plan that is missing from the schedule, a panel that feeds equipment the mechanical sheet never shows, or a beam drawn through a duct are all the same problem: the disciplines were drafted apart. We coordinate backgrounds, tags, and sheet order so those conflicts are resolved before the PDF goes to the building department.",
          "General notes matter as much as linework. They should say which codes and project information the drawings were based on, and they should not promise a seal, a special inspection, or a construction method that is outside the scope. Where a licensed architect or Professional Engineer must sign, that review is coordinated with the appropriate U.S.-licensed professional.",
        ],
      },
      {
        heading: "What to send before we draft",
        paragraphs: [
          "The best starting package is ordinary and specific. Send the address, the scope in plain language, any existing plans, photos of the area of work, and a sketch with dimensions you trust. If a previous review left comments, send those too. We would rather redraw from a marked-up rejection than guess what the last reviewer wanted.",
          "From there the process is steady: review the information, confirm the sheet list, draft, coordinate, revise, and issue the final set for your submission. Requirements still vary by city, county, and project type. A complete drawing set makes that conversation shorter. It does not replace the Authority Having Jurisdiction.",
        ],
      },
    ],
  },
  {
    slug: "mep-coordination-before-plan-check",
    title: "MEP coordination before plan check, not after the comments",
    excerpt:
      "Most avoidable plan-check comments are coordination comments. A duct, a beam, and a light fixture cannot occupy the same inch of ceiling.",
    date: "April 16, 2026",
    readTime: "6 min read",
    category: "MEP Coordination",
    sections: [
      {
        heading: "Comments that were visible on day one",
        paragraphs: [
          "Plan check is a poor place to discover that the rooftop unit has no curb on the structural plan, or that the electrical panel sits in the only corridor the architect dimensioned. Those are drafting problems. They become schedule problems when each trade is in a different file, updated on a different day, and nobody overlays them until the city does.",
          "Coordination is the unglamorous middle of the work. It means the mechanical mains, the plumbing risers, the lighting, and the framing are looked at together while the drawings can still change cheaply.",
        ],
      },
      {
        heading: "Where the clashes actually live",
        paragraphs: [
          "Ceilings are the usual collision. A reflected ceiling plan shows a grid. The mechanical plan shows a trunk duct. The structural plan shows a beam at the same elevation. The electrical plan adds a linear light that needs the tile the duct just consumed. Any one of those sheets can look fine alone. Together they describe a ceiling that cannot be built as drawn.",
          "Equipment yards and shafts are the other pattern. Condensing units, transformers, and grease interceptors need space, access, and a path through the building. If that path is not on the architectural and structural sheets, the MEP plans are decorating a building that does not have a route for them.",
        ],
      },
      {
        heading: "One background, one revision",
        paragraphs: [
          "We keep architectural and structural backgrounds as the base for HVAC, electrical, and plumbing. Tags on the plans match the schedules. When a revision moves a wall, the disciplines that touch that wall move with it. That is the practical difference between a folder of trade drawings and a permit set.",
          "Revit helps when the project is modeled, because a moved level or a resized shaft can update more than one view. AutoCAD is still the right tool when the deliverable is a 2D permit set and the team is coordinating by overlay. The software is secondary to the habit of looking at the same building.",
        ],
      },
      {
        heading: "What you gain at submission",
        paragraphs: [
          "A coordinated set will not make every reviewer silent. Codes, energy forms, and local amendments still generate comments. What coordination removes is the stack of comments that say the drawings do not agree. Contractors also read those sheets. A clash that never reaches the field is a coordination meeting you do not have to hold from a ladder.",
          "If the project needs mechanical, electrical, and plumbing together, ask for them as one package. Split scopes are reasonable for a single trade replacement. They are a weak plan for a restaurant, a clinic, or a tenant improvement where all three trades share a ceiling.",
        ],
      },
    ],
  },
  {
    slug: "drawings-for-a-home-addition",
    title: "Drawings for a home addition: what to prepare before design starts",
    excerpt:
      "An addition is a small building tied to an existing one. The drawings have to describe both, including the structure, the HVAC, and the electrical service you already have.",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Residential",
    sections: [
      {
        heading: "The existing house is part of the project",
        paragraphs: [
          "Most addition delays start with a blank page where the existing house should be. Reviewers want to see the rooms you are attaching to, the wall you are opening, the roof you are tying into, and the yard you are building on. If those existing conditions are guessed, the proposed plans inherit the guess.",
          "You do not need a perfect as-built on day one. You do need measurements you have checked, photos of each exterior side, and a note about what is in the attic, the crawlspace, or the basement along the new work. A previous survey or permit set, even an old one, is worth sending.",
        ],
      },
      {
        heading: "Architecture first, then what the addition disturbs",
        paragraphs: [
          "The architectural sheets carry the existing and proposed floor plans, elevations of the sides that change, and a section through the new volume. Door and window sizes should be decided early enough to land on a schedule. A site plan shows the addition against setbacks and the rest of the lot, using the survey or site information you have.",
          "Structure follows the openings. A new header, a removed bearing wall, or a roof that has to carry snow or wind is not a note in the corner of the floor plan. It needs framing information and details. When the jurisdiction requires an engineer’s seal, we coordinate that review rather than implying a stamp we do not provide.",
        ],
      },
      {
        heading: "Mechanical and electrical rarely stay untouched",
        paragraphs: [
          "A bedroom addition needs supply air, a return path, and lighting and power that land on a real circuit. A new bath needs supply, waste, and a vent. Homeowners often plan the square footage and discover the equipment later. It is cheaper to ask, before drafting, whether the furnace, the air handler, or the panel has capacity, and to photograph the nameplates.",
          "We can draft HVAC, electrical, and plumbing sheets for the addition when those disciplines are in scope. If a contractor will design-build a straight equipment change with no permit drawings required, say so. The sheet list should match the submittal, not a catalog of every trade.",
        ],
      },
      {
        heading: "A short list to gather this week",
        paragraphs: [
          "Write the address and a one-paragraph description of the addition. Measure the rooms you are attaching to and the exterior wall. Photograph all four sides, the electrical panel, and the mechanical equipment. Mark north, and note any easement, septic, or HOA limit you already know about. Send prior plans if you have them.",
          "With that package we can tell you which drawings the project likely needs and what is still missing. Cities and counties do not share one residential checklist. The drawings should be detailed enough for your jurisdiction, and honest about the information they were based on.",
        ],
      },
    ],
  },
];
