import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileCheck2, Layers3, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, PERMIT_ITEMS, RESIDENTIAL, COMMERCIAL, PROCESS, REASONS, CLIENTS } from "@/lib/services";
import designImage from "@/assets/design-documentation.jpg";

const REVIT_SERVICES = [
  "Architectural BIM Modeling",
  "Structural BIM Modeling",
  "MEP BIM Modeling",
  "Existing Building Modeling",
  "As-Built Modeling",
  "Revit Families",
  "Drawing Production",
  "Model-Based Documentation",
  "Clash Detection & Coordination",
  "MEP Coordination",
  "Architectural / Structural / MEP Coordination",
];

export function DesignSections() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase text-primary">Architecture & Structural</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">A coordinated foundation for your permit drawings.</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {SERVICES.filter((service) => service.slug === "architectural" || service.slug === "structural").map((service) => (
              <article key={service.slug} className="border-t-2 border-primary pt-7">
                <service.icon className="size-10 text-primary" />
                <h3 className="mt-5 text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{service.copy}</p>
                <p className="mt-5 text-sm font-semibold">Typical deliverables include:</p>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <Check className="size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                {"note" in service && service.note && (
                  <div className="mt-6 border-l-2 border-primary pl-4">
                    {"noteTitle" in service && service.noteTitle && <h4 className="text-sm font-semibold">{service.noteTitle}</h4>}
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.note}</p>
                  </div>
                )}
                <Button asChild variant="link" className="mt-5 px-0">
                  <Link to="/services/$service" params={{ service: service.slug }}>
                    Explore this service <ArrowRight />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bim" className="bg-secondary/55 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <img src={designImage} alt="Architectural drawings and a coordinated structural and MEP building model" loading="lazy" width={1408} height={1056} className="aspect-[4/3] w-full rounded-md object-cover" />
          <div>
            <p className="text-sm font-semibold uppercase text-primary">BIM Modeling & Coordination</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Clear drawings. Connected models.</h2>
            <h3 className="mt-6 text-xl font-bold">Revit BIM Services</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">We develop and coordinate Revit models for architectural, structural, and MEP documentation.</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {REVIT_SERVICES.map((item) => (
                <li key={item} className="flex gap-2 text-sm">
                  <Layers3 className="size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4 border-t border-border pt-6">
              <PenTool className="size-7 shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold">AutoCAD Drafting</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Professional 2D CAD drafting for plans, sections, elevations, details, schedules, schematics, and permit documentation.</p>
              </div>
            </div>
            <Button asChild className="mt-7">
              <Link to="/services/$service" params={{ service: "bim-coordination" }}>
                Explore BIM Services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <FileCheck2 className="size-10 text-primary" />
              <h2 className="mt-5 text-3xl font-bold sm:text-4xl">U.S. Permit Drawing Packages</h2>
              <p className="mt-5 leading-7 text-muted-foreground">We prepare organized drawing packages for residential and commercial projects based on the project scope, applicable codes, and local jurisdiction requirements.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {PERMIT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border pb-3 text-sm">
                  <Check className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 space-y-3 border-l-2 border-primary pl-5 text-sm leading-7 text-muted-foreground">
            <p className="font-semibold text-foreground">Important</p>
            <p>Permit requirements vary by city, county, state, project type, building use, and Authority Having Jurisdiction (AHJ).</p>
            <p>Where professional licensing, signature, or sealing is required, the project must be reviewed and finalized by the appropriately licensed professional.</p>
          </div>
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {[
              { title: "Residential Design Services", copy: "We support U.S. residential projects with design, drafting, coordination, and permit documentation.", lead: "Project types include:", items: RESIDENTIAL },
              { title: "Commercial Design Services", copy: "Our drafting and design services also support commercial projects across these common scopes.", lead: "Project types include:", items: COMMERCIAL },
            ].map((group) => (
              <div key={group.title} className="border-t border-border pt-7">
                <h3 className="text-2xl font-bold">{group.title}</h3>
                <p className="mt-3 text-muted-foreground">{group.copy}</p>
                <p className="mt-4 text-sm font-semibold">{group.lead}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <Check className="size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase text-primary">Our Design Process</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">From your project information to the final documentation.</h2>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map(([title, copy], index) => (
              <div key={title} className="border-t border-primary-foreground/20 pt-6">
                <span className="text-3xl font-bold text-primary">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary-foreground/70">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase text-primary">Why Choose Us</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">Why choose Hassan Building Design Group USA?</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(([title, copy]) => (
              <div key={title} className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-border pt-8">
            <h3 className="text-2xl font-bold">Who We Support</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {CLIENTS.map((client) => (
                <li key={client} className="text-sm text-muted-foreground">{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
