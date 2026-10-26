import { useState } from "react";
import { ArrowRight, Droplets, FileText, Flame, Lightbulb, Waves, Wind, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Plan = {
  title: string;
  place: string;
  detail: string;
  image: string;
  alt: string;
  pdf?: string;
  sheet?: string;
};

const TEXAS_HVAC: Plan = {
  title: "Texas HVAC Ducting Layout Plan",
  place: "SSU Fort Worth B015 · Fort Worth, Texas",
  sheet: "Sheet M-02",
  detail:
    "Supply, return, fresh-air, and exhaust ductwork for the Fort Worth mechanical floor. The sheet shows duct sizes, airflow tags, and equipment connections on the HVAC ducting layout.",
  image: "/projects/texas-hvac.jpg",
  alt: "HVAC ducting layout plan, sheet M-02, for SSU Fort Worth B015 in Fort Worth, Texas",
};

const HIGHRISE_PLANS: Array<Plan & { icon: typeof Lightbulb }> = [
  {
    icon: Lightbulb,
    title: "Electrical Lighting Plan",
    place: "High Rise Mixed Building",
    sheet: "ELG-1000 · Level 01",
    detail: "Suroor-01 lighting layout, with fixture positions across the residential and commercial floor.",
    image: "/projects/highrise-lighting.jpg",
    pdf: "/projects/highrise-lighting.pdf",
    alt: "Level 01 electrical lighting layout for the high-rise mixed building, sheet ELG-1000",
  },
  {
    icon: Zap,
    title: "Electrical Power Plan",
    place: "High Rise Mixed Building",
    sheet: "EPR-1000 · Level 01",
    detail: "Small-power layout for outlets, appliances, and device circuits on the Level 01 floor.",
    image: "/projects/highrise-power.jpg",
    pdf: "/projects/highrise-power.pdf",
    alt: "Level 01 electrical small power layout for the high-rise mixed building, sheet EPR-1000",
  },
  {
    icon: Flame,
    title: "Fire Protection Plan",
    place: "High Rise Mixed Building",
    sheet: "Level 01",
    detail: "Fire protection layout coordinated on the same mixed-use residential and commercial floor plate.",
    image: "/projects/highrise-fire.jpg",
    alt: "Fire protection layout plan for the high-rise mixed building",
  },
  {
    icon: Waves,
    title: "Drainage Layout Plan",
    place: "High Rise Mixed Building",
    sheet: "Level 01",
    detail: "Drainage piping routed through the Level 01 residential and commercial units and the central corridor.",
    image: "/projects/highrise-drainage.jpg",
    alt: "Drainage layout plan for the high-rise mixed building",
  },
  {
    icon: Droplets,
    title: "Water Supply Layout Plan",
    place: "High Rise Mixed Building",
    sheet: "Level 01",
    detail: "Domestic water supply layout for the Level 01 floor, with enlarged details on the sheet.",
    image: "/projects/highrise-water.jpg",
    alt: "Water supply layout plan for the high-rise mixed building",
  },
];

const PDF_SETS: Plan[] = [
  {
    title: "County Road P Plumbing Set",
    place: "Glenn County, California",
    sheet: "6 sheets · July 12, 2022",
    detail: "Waste, vent, and domestic water plans, with riser diagrams, details, and the fixture schedule.",
    image: "/projects/county-road-plumbing.jpg",
    pdf: "/projects/county-road-plumbing.pdf",
    alt: "Plumbing floor plan from the County Road P set in Glenn County, California",
  },
  {
    title: "Evans Street HVAC Set",
    place: "7386 Evans Street · Riverside, California",
    sheet: "6 sheets · June 10, 2022",
    detail: "Duct layout, mechanical piping, gas piping notes, installation details, and equipment schedules.",
    image: "/projects/evans-hvac.jpg",
    pdf: "/projects/evans-hvac.pdf",
    alt: "HVAC floor plan from the Evans Street mechanical set in Riverside, California",
  },
  {
    title: "Evans Street Plumbing Set",
    place: "7386 Evans Street · Riverside, California",
    sheet: "5 sheets · June 10, 2022",
    detail: "Sanitary layout, domestic water and vent riser, plumbing details, and the fixture schedule.",
    image: "/projects/evans-plumbing.jpg",
    pdf: "/projects/evans-plumbing.pdf",
    alt: "Plumbing floor plan from the Evans Street plumbing set in Riverside, California",
  },
];

function DrawingDialog({
  open,
  onOpenChange,
  title,
  image,
  alt,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[94vh] w-[min(96vw,1280px)] max-w-none overflow-auto bg-white p-4 sm:p-6">
        <DialogTitle className="pr-8 text-left text-base font-semibold">{title}</DialogTitle>
        <img src={image} alt={alt} className="w-full object-contain" />
      </DialogContent>
    </Dialog>
  );
}

function TexasHvacProject() {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-md border border-border bg-card shadow-sm lg:grid lg:grid-cols-[1.25fr_0.75fr]">
      <button type="button" onClick={() => setOpen(true)} className="bg-white p-4 text-left sm:p-6" aria-label={`View ${TEXAS_HVAC.title} at full size`}>
        <img src={TEXAS_HVAC.image} alt={TEXAS_HVAC.alt} className="mx-auto max-h-[560px] w-full object-contain" />
      </button>
      <div className="flex flex-col border-t border-border p-6 sm:p-8 lg:border-t-0 lg:border-l">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
          <Wind className="size-4" /> {TEXAS_HVAC.place}
        </p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-foreground sm:text-3xl">{TEXAS_HVAC.title}</h3>
        <p className="mt-2 text-sm font-semibold text-foreground">{TEXAS_HVAC.sheet}</p>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{TEXAS_HVAC.detail}</p>
        <ul className="mt-6 grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {["Supply air", "Return air", "Fresh air", "Exhaust"].map((item) => (
            <li key={item} className="border-t border-border pt-2">{item}</li>
          ))}
        </ul>
        <Button type="button" variant="link" className="mt-6 justify-start px-0" onClick={() => setOpen(true)}>
          View full size <ArrowRight />
        </Button>
      </div>
      <DrawingDialog open={open} onOpenChange={setOpen} title={TEXAS_HVAC.title} image={TEXAS_HVAC.image} alt={TEXAS_HVAC.alt} />
    </article>
  );
}

function HighRiseProject() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const plan = HIGHRISE_PLANS[active];
  const Icon = plan.icon;

  return (
    <article className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase text-primary">One project · five coordinated plans</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">High Rise Mixed Building</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          Al Mamsha Seerah, Phase 1 — Suroor residential and commercial buildings, Mowailah Commercial, Sharjah. Level 01 lighting, power, fire protection, drainage, and water supply on one floor plate.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-[18rem_minmax(0,1fr)]">
        <div className="grid gap-2 border-b border-border p-4 sm:grid-cols-2 lg:grid-cols-1 lg:border-r lg:border-b-0 lg:p-5" role="tablist" aria-label="High rise mixed building plans">
          {HIGHRISE_PLANS.map((item, index) => {
            const ItemIcon = item.icon;
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`flex items-start gap-3 rounded-md border px-3 py-3 text-left transition-colors ${selected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/40"}`}
              >
                <ItemIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  <span className="block text-sm font-semibold leading-5">{item.title}</span>
                  <span className={`mt-1 block text-xs ${selected ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{item.sheet}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="min-w-0">
          <button type="button" onClick={() => setOpen(true)} className="block w-full bg-white p-4 text-left sm:p-6" aria-label={`View ${plan.title} at full size`}>
            <img src={plan.image} alt={plan.alt} className="mx-auto max-h-[620px] w-full object-contain" />
          </button>
          <div className="flex flex-col gap-4 border-t border-border p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
                <Icon className="size-4" /> {plan.sheet}
              </p>
              <h4 className="mt-2 text-lg font-bold text-foreground">{plan.title}</h4>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{plan.detail}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(true)}>
                View full size <ArrowRight />
              </Button>
              {plan.pdf && (
                <Button asChild variant="outline">
                  <a href={plan.pdf} target="_blank" rel="noreferrer">
                    Open PDF <FileText />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <DrawingDialog open={open} onOpenChange={setOpen} title={`${plan.title} — High Rise Mixed Building`} image={plan.image} alt={plan.alt} />
    </article>
  );
}

function PdfSetCard({ plan }: { plan: Plan }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm">
      <button type="button" onClick={() => setOpen(true)} className="bg-white p-3 text-left sm:p-4" aria-label={`View ${plan.title} at full size`}>
        <img src={plan.image} alt={plan.alt} className="mx-auto max-h-[280px] w-full object-contain" />
      </button>
      <div className="flex flex-1 flex-col border-t border-border p-6">
        <p className="text-xs font-semibold uppercase text-primary">{plan.place}</p>
        <h3 className="mt-2 text-xl font-bold text-foreground">{plan.title}</h3>
        <p className="mt-1 text-xs font-medium text-muted-foreground">{plan.sheet}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{plan.detail}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          <Button type="button" variant="link" className="h-auto justify-start px-0" onClick={() => setOpen(true)}>
            View full size <ArrowRight />
          </Button>
          {plan.pdf && (
            <Button asChild variant="link" className="h-auto justify-start px-0">
              <a href={plan.pdf} target="_blank" rel="noreferrer">
                Open PDF <FileText />
              </a>
            </Button>
          )}
        </div>
      </div>
      <DrawingDialog open={open} onOpenChange={setOpen} title={plan.title} image={plan.image} alt={plan.alt} />
    </article>
  );
}

export function ProjectSets() {
  return (
    <div className="mt-12 grid gap-8">
      <TexasHvacProject />
      <HighRiseProject />
      <div>
        <h3 className="text-lg font-bold text-foreground">Residential drawing packages</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Full mechanical and plumbing sets for California houses. Open a sheet preview, or the complete PDF.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {PDF_SETS.map((plan) => (
            <PdfSetCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
