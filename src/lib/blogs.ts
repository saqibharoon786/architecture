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
  {
    slug: "residential-permit-drawings-city-requirements",
    title: "Residential permit drawings: what does a city usually require?",
    excerpt:
      "Cities do not share one residential checklist. These are the sheets that show up most often, and the items that still depend on the jurisdiction.",
    date: "June 9, 2026",
    readTime: "6 min read",
    category: "Permit Drawings",
    sections: [
      {
        heading: "Ask for the local checklist first",
        paragraphs: [
          "A residential permit drawing set describes the work a homeowner or contractor wants reviewed. It does not approve the work. The city, county, or other Authority Having Jurisdiction decides what the submittal must contain and whether the package is accepted.",
          "Start with the address and the scope. A kitchen remodel, a second-story addition, and a new single-family home land on different checklists. Send any published submittal list from that building department with the photos and existing plans.",
        ],
      },
      {
        heading: "Sheets that appear on most house projects",
        paragraphs: [
          "Reviewers usually expect a site plan, existing and proposed floor plans, elevations for the sides that change, and at least one building section. Door and window schedules, general notes, and construction details follow when the scope is more than a fixture swap. If a wall, roof, or foundation changes, structural sheets are added.",
          "Mechanical, electrical, and plumbing sheets are included when those systems change. A bedroom addition often needs supply air, a return path, lighting, power, and a plumbing connection. An equipment replacement may need a much shorter set. The sheet list should match the application, not a catalog of every trade.",
        ],
      },
      {
        heading: "What still varies",
        paragraphs: [
          "Energy documentation, special inspections, flood or wind information, and professional seals are jurisdiction-specific. Some cities accept owner-prepared drawings for limited residential work. Others require an architect or Professional Engineer for the same scope. We prepare the documentation and coordinate sealing with the licensed professional designated for the project when that review is required.",
          "A useful package is organized, consistent, and honest about the information it was based on. It is prepared for submission. Acceptance remains with the reviewer.",
        ],
      },
    ],
  },
  {
    slug: "mep-permit-drawings-commercial",
    title: "MEP permit drawings for U.S. commercial projects",
    excerpt:
      "Commercial plan review looks for coordinated mechanical, electrical, and plumbing sheets that match the architectural background and the occupancy.",
    date: "June 24, 2026",
    readTime: "6 min read",
    category: "MEP Coordination",
    sections: [
      {
        heading: "Commercial review is a coordination review",
        paragraphs: [
          "A small office, a restaurant, and a clinic can share a lease form and still need different MEP drawings. Reviewers look for equipment, routing, ventilation intent, panel information, fixture counts, and notes that match the floor plan. Fire-protection coordination is added when the occupancy or the jurisdiction asks for it.",
          "We prepare those sheets as design and documentation support. The package is organized for the project scope and the local submittal. It is not a promise that the city will approve it.",
        ],
      },
      {
        heading: "What a coordinated commercial set usually includes",
        paragraphs: [
          "Mechanical sheets cover equipment layouts, ductwork, supply and return, exhaust, schedules, and load or ventilation calculations when they are in scope. Electrical sheets cover lighting, power, panel schedules, load calculations, and single-line diagrams. Plumbing sheets cover domestic water, sanitary drainage, vents, fixtures, and isometrics or risers.",
          "The architectural background is the common reference. If the ceiling, the shaft, or a rated wall moves, the trade sheets should move with it. That is the practical difference between three separate PDFs and one permit drawing package.",
        ],
      },
      {
        heading: "Send the occupancy with the drawings",
        paragraphs: [
          "Tell us the city and county, the building use, and whether this is a tenant improvement or a shell. Include the lease outline, existing plans, equipment cut sheets, and any previous review comments. A restaurant hood and a dental compressor do not get documented from the same assumptions.",
          "Where a licensed professional must sign or seal the MEP documents, that step is coordinated with the U.S.-licensed professional designated for the project.",
        ],
      },
    ],
  },
  {
    slug: "hvac-load-calculations-manual-j-vs-hap",
    title: "HVAC load calculations: Manual J vs HAP",
    excerpt:
      "Manual J and Carrier HAP answer related questions at different scales. The right report is the one the project and the reviewer are actually asking for.",
    date: "July 8, 2026",
    readTime: "6 min read",
    category: "Mechanical",
    sections: [
      {
        heading: "Both are load tools, not permits",
        paragraphs: [
          "A load calculation estimates heating and cooling demand so equipment and airflow can be selected with a basis. It does not approve the installation, and it does not replace the mechanical drawings. Reviewers use the report to see whether the equipment on the plans has a documented size.",
          "Manual J, published through ACCA, is the residential method most contractors and energy programs expect for houses. Carrier HAP, the Hourly Analysis Program, is commonly used for commercial and larger multi-zone work where hourly loads, ventilation, and system sizing need a fuller report.",
        ],
      },
      {
        heading: "Where the methods diverge",
        paragraphs: [
          "Manual J is room-by-room and built around a dwelling: orientation, insulation, windows, infiltration, and the design temperatures for that house. It is a poor fit for a restaurant with a makeup-air unit and a long equipment schedule. HAP is built for nonresidential spaces, with system sizing summaries, ventilation inputs, and zone data that can follow ASHRAE ventilation procedures when the project requires them.",
          "Using a house method on a commercial tenant, or a commercial hourly model on a simple bedroom addition, creates a report the reviewer did not ask for. We match the calculation to the building type and the jurisdiction’s submittal, then keep the equipment schedule tied to that result.",
        ],
      },
      {
        heading: "What the sample should show",
        paragraphs: [
          "A useful report shows the space inputs, the outdoor-air assumption, the cooling and heating loads, and the airflow used to size the equipment. Those numbers should be traceable to the mechanical plan. If the plan says 3 tons and the report says something else, the set is not coordinated.",
          "Load calculations are part of design documentation. Equipment selection still has to suit the existing service, the structure, and any licensed-professional review the jurisdiction requires.",
        ],
      },
    ],
  },
  {
    slug: "what-is-a-panel-schedule",
    title: "What is a panel schedule?",
    excerpt:
      "A panel schedule is the index of a panelboard. Reviewers use it to see how the lighting, receptacles, and equipment on the plans are actually fed.",
    date: "July 22, 2026",
    readTime: "5 min read",
    category: "Electrical",
    sections: [
      {
        heading: "The schedule is the panel, written down",
        paragraphs: [
          "A panel schedule lists the circuits in a panel: breaker size, poles, load description, and often the calculated load. It is the sheet a reviewer uses to connect a symbol on the power plan to a specific circuit. Without it, the lighting and receptacle layout is a picture with no source.",
          "Residential upgrades and commercial tenant improvements both need this clarity. A new air handler, a kitchen equipment connection, or an EV charger circuit should appear on the schedule if it appears on the plan.",
        ],
      },
      {
        heading: "What reviewers compare",
        paragraphs: [
          "They compare the schedule with the load calculation, the single-line diagram, and the devices drawn on the floor plan. A circuit that feeds equipment the mechanical sheet never shows, or a panel name that does not match the plan, is a coordination comment. Those are avoidable if the electrical set is drafted against the other disciplines.",
          "Service and distribution notes explain how that panel relates to the building service. They are not a substitute for a utility approval or a licensed electrical engineer’s seal when the jurisdiction requires one.",
        ],
      },
      {
        heading: "What to send before the schedule is drafted",
        paragraphs: [
          "Photograph the existing panel with the directory readable, and send the service size if you know it. List new equipment with nameplate data. If the utility or a previous review already limited the service, include that letter. We would rather schedule the circuits you have than invent spare capacity.",
          "The finished schedule is documentation for the agreed scope. It is prepared so the plan and the panel tell the same story.",
        ],
      },
    ],
  },
  {
    slug: "architectural-vs-structural-permit-drawings",
    title: "Architectural vs structural permit drawings",
    excerpt:
      "Architectural sheets describe the building you occupy. Structural sheets describe how it stands up. Permit review fails when those two stories disagree.",
    date: "August 5, 2026",
    readTime: "6 min read",
    category: "Permit Drawings",
    sections: [
      {
        heading: "Two disciplines, one building",
        paragraphs: [
          "Architectural permit drawings show rooms, doors, windows, elevations, sections, and the existing versus proposed scope. Structural drawings show foundations, framing, beams, columns, and the details that connect them. A reviewer reads the architectural set to understand the work, then reads the structural set to see whether the changed walls and roofs are documented.",
          "An opening that appears on the floor plan and nowhere on the framing plan is the usual comment. So is a roof drawn one way in elevation and another way on the roof framing sheet. Coordination is the remedy, not a thicker set of notes.",
        ],
      },
      {
        heading: "Who prepares which sheets",
        paragraphs: [
          "We can draft both. The architectural package covers plans, site information, elevations, schedules, life safety plans, and details. The structural package covers foundation and framing plans, sections, connection details, and schedules. They should use the same grids and the same dimensions.",
          "Many jurisdictions require a licensed architect, a Professional Engineer, or both before those sheets can be submitted for permit. We do not substitute for that license. Where a seal is required, the documents are coordinated with the U.S.-licensed professional designated for the project.",
        ],
      },
      {
        heading: "How to scope the set",
        paragraphs: [
          "If the work does not change structure, say so. A finish upgrade does not need a foundation plan. If the work removes a wall, adds a story, or cuts a new opening, the structural sheets belong in the scope from the start. Guessing that a wall is non-bearing is how sets come back.",
          "Send existing plans, photos of the structure you can see, and the city’s checklist. We will identify which discipline the submittal is likely to need. The authority still decides.",
        ],
      },
    ],
  },
  {
    slug: "adu-permit-drawing-checklist",
    title: "ADU permit drawing checklist",
    excerpt:
      "Accessory dwelling units are a residential permit in a tight space. The drawings have to show the new unit and the lot it sits on.",
    date: "August 19, 2026",
    readTime: "6 min read",
    category: "Residential",
    sections: [
      {
        heading: "An ADU is a small dwelling, not a room label",
        paragraphs: [
          "Cities review ADUs as dwelling units: living space, a kitchen, a bath, a way out, and a relationship to the existing house and the lot. A garage conversion, a detached backyard unit, and an interior apartment do not share one sheet list, but they share the need for existing and proposed plans.",
          "Start with the address, the ADU type, and any local ADU handout. State rules and city ordinances both move. We draft to the jurisdiction on the application, not to a national ADU template.",
        ],
      },
      {
        heading: "Drawings that usually belong in the set",
        paragraphs: [
          "Expect a site plan, floor plans, elevations, a section, door and window information, and notes that separate existing work from new work. Structural sheets follow when the conversion cuts the slab, opens a wall, or adds a roof. Mechanical, electrical, and plumbing sheets follow the new kitchen, bath, and heating and cooling.",
          "Life safety information matters even on a small unit. Exiting, fire separation from the main house, and ceiling heights are reviewer topics. They should be on the drawings, not left for a phone call after submittal.",
        ],
      },
      {
        heading: "Information to gather before drafting",
        paragraphs: [
          "Measure the garage or yard, photograph all sides, and send the survey or site plan if you have one. Note setbacks, easements, and septic or sewer if you already know them. Photograph the electrical service and the existing mechanical equipment. An ADU often fails on utilities and lot coverage before it fails on the floor plan.",
          "Professional sealing, if required for the architectural or structural sheets, is coordinated with the licensed professional for that project. The checklist gets the set ready to submit. The city decides whether the ADU is approved.",
        ],
      },
    ],
  },
  {
    slug: "commercial-tenant-improvement-drawing-sets",
    title: "Commercial tenant improvement drawing sets",
    excerpt:
      "A tenant improvement is an existing building with a new occupancy pressed into it. The drawings have to show both.",
    date: "September 2, 2026",
    readTime: "6 min read",
    category: "Commercial",
    sections: [
      {
        heading: "The shell is part of the scope",
        paragraphs: [
          "Office, retail, restaurant, medical, and salon build-outs are judged against the base building. Reviewers want the demising walls, the exits, the restrooms, and the equipment the tenant is adding. A set that draws only the new furniture layout does not describe the permit.",
          "We document tenant improvements as coordinated drawing packages: architectural plans, and the MEP sheets the occupancy requires. Fire-protection coordination is included when the project scope calls for it.",
        ],
      },
      {
        heading: "A practical sheet list",
        paragraphs: [
          "Architectural sheets often include existing and proposed plans, a life safety or exiting plan, reflected ceilings, and interior elevations or partition details. Mechanical sheets cover HVAC zones, ventilation, and exhaust. Electrical sheets cover lighting, power, and panel changes. Plumbing sheets cover fixtures and any new wet walls.",
          "Restaurants and clinics add equipment connections that a standard office never needs. Say the use in the first email. A salon and a dental office should not inherit each other’s notes.",
        ],
      },
      {
        heading: "What the landlord already has",
        paragraphs: [
          "Ask for the base-building plans, the lease outline, and any landlord criteria before drafting starts. Previous tenant drawings help, even when they are old. If a prior review rejected a set, send the comments. Redrawing from a marked-up letter is faster than guessing.",
          "Samples on a portfolio page are not a claim that every tenant name is a direct client. Your set will be prepared for your address, your scope, and your jurisdiction. Approval stays with the Authority Having Jurisdiction.",
        ],
      },
    ],
  },
  {
    slug: "what-is-bim-coordination",
    title: "What is BIM coordination?",
    excerpt:
      "BIM coordination keeps architectural, structural, and MEP information in one model so the drawings agree before they are issued.",
    date: "September 16, 2026",
    readTime: "5 min read",
    category: "BIM",
    sections: [
      {
        heading: "A model is a working record",
        paragraphs: [
          "Building information modeling, usually in Revit for this kind of work, stores walls, levels, equipment, and mains so plans, sections, and schedules can come from the same source. Coordination is the review of that model across disciplines. The point is fewer conflicts on the sheets, not a rendered picture of the building.",
          "AutoCAD remains the right deliverable when the jurisdiction or the project team expects precise 2D permit drawings. The software follows the submittal. The habit that matters is looking at one building.",
        ],
      },
      {
        heading: "What coordination actually checks",
        paragraphs: [
          "Clash detection looks for objects that occupy the same space: a duct through a beam, a light in a trunk duct, a plumbing riser in a rated wall that was never opened on the architectural plan. We focus on conflicts that would change the permit drawings or the construction documents.",
          "Existing-building and as-built modeling are part of the same service when the project starts from a building that is already standing. A tenant improvement modeled on an invented shell will coordinate the wrong building.",
        ],
      },
      {
        heading: "What you receive",
        paragraphs: [
          "Depending on scope, the deliverable is a Revit model, drawing sheets produced from that model, or coordinated CAD sheets. Families, schedules, and views are included when they are part of the agreement. A model is not a license, and it is not a construction contract.",
          "If the project needs an architect or engineer of record, the model is prepared for that professional’s review. We coordinate the documentation. We do not present the model as a sealed instrument.",
        ],
      },
    ],
  },
  {
    slug: "how-mep-coordination-reduces-conflicts",
    title: "How MEP coordination reduces construction conflicts",
    excerpt:
      "Most expensive field conflicts were visible on the drawings. Coordination is the pass that finds them while the lines can still move.",
    date: "September 28, 2026",
    readTime: "5 min read",
    category: "MEP Coordination",
    sections: [
      {
        heading: "Conflicts are a documentation problem first",
        paragraphs: [
          "A duct, a beam, and a light cannot occupy the same inch of ceiling. If each trade is drafted alone, that conflict waits for the field. Coordination overlays mechanical, electrical, plumbing, and fire-protection information on the architectural and structural backgrounds while revisions are still inexpensive.",
          "This is drawing support. It does not replace the contractor’s means and methods, and it does not guarantee a comment-free review. It removes the comments that say the sheets disagree.",
        ],
      },
      {
        heading: "Where to look",
        paragraphs: [
          "Ceilings, shafts, equipment yards, and rated walls produce most of the clashes. A reflected ceiling plan, a mechanical plan, and a structural framing plan should be read together. Equipment that needs a curb, a pad, or a working clearance should appear on more than one discipline.",
          "Tags have to match schedules. If the plan says AHU-1 and the schedule says something else, the coordination is unfinished even when the lines do not touch.",
        ],
      },
      {
        heading: "When to ask for one package",
        paragraphs: [
          "A single equipment replacement can be a single-trade drawing. A restaurant, clinic, or office tenant improvement usually should not be. Those projects share a ceiling. Asking for mechanical, electrical, and plumbing together is how the overlay happens before submission.",
          "Send the architectural background, even a rough one, before the trades are drawn. Coordination without a background is three sets of lines with nowhere to land.",
        ],
      },
    ],
  },
  {
    slug: "when-a-drawing-needs-a-pe-seal",
    title: "When does a drawing need a Professional Engineer’s seal?",
    excerpt:
      "Sealing rules are set by the state and the project, not by the drafter. Here is how to tell when a U.S.-licensed professional has to review the set.",
    date: "October 7, 2026",
    readTime: "7 min read",
    category: "Professional Review",
    sections: [
      {
        heading: "The seal follows the law, not the title block",
        paragraphs: [
          "Many states require engineering documents that fall under their practice acts to be prepared or reviewed by a licensed Professional Engineer and to carry that engineer’s seal. Architectural documents submitted for permitting can have a parallel requirement for a licensed architect. Texas and California are often cited because their statutes and board rules are explicit, but they are not the only states with sealing rules.",
          "Hassan Building Design Group USA provides design, drafting, calculation, and documentation support. We do not represent an unlicensed person or company as a licensed U.S. architect or Professional Engineer. When a seal is required, the drawing package is coordinated with the licensed professional designated for the project.",
        ],
      },
      {
        heading: "Questions that decide the issue",
        paragraphs: [
          "Ask three things. What is the state, city, and county? What is the occupancy and the scope? Which sheets are structural, mechanical, electrical, plumbing, or architectural? A residential equipment replacement and a commercial structural alteration do not share a sealing answer. The Authority Having Jurisdiction and the state licensing board are the sources that control.",
          "Some limited projects are exempt. Exemptions are narrow, and they change. Do not assume a previous city accepted unsealed sheets for a different address. Send the checklist or the reviewer comment that mentions a seal, and we will plan the documentation around that requirement.",
        ],
      },
      {
        heading: "How coordination with a licensee works",
        paragraphs: [
          "The usual path is straightforward. We prepare the drawings and calculations in the agreed scope. The owner’s or client’s U.S.-licensed architect or Professional Engineer reviews the package, requests revisions, and signs or seals the documents they are willing to take responsibility for. We do not apply someone else’s seal, and we do not imply that a draft set is already approved.",
          "Permit approval is a separate decision, made by the Authority Having Jurisdiction. A complete, coordinated set makes that review easier to follow. It is not a guarantee.",
        ],
      },
    ],
  },
];
