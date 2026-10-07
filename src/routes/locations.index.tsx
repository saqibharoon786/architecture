import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCATIONS } from "@/lib/locations";
import { COMPANY } from "@/lib/services";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: `Locations — ${COMPANY}` },
      { name: "description", content: "Permit drawing support for projects in California, Texas, Florida, New York, and other key U.S. states." },
      { property: "og:title", content: `Where we work — ${COMPANY}` },
      { property: "og:description", content: "State pages for U.S. architectural, structural, and MEP permit documentation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase text-primary">Locations</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Permit drawings for key states across the U.S.</h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
        We work remotely with owners, contractors, and design teams. These state pages describe the documentation we prepare most often. If your project is in another state, send the address — the sheet list still follows that jurisdiction.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {LOCATIONS.map((state) => (
          <article key={state.slug} className="flex flex-col rounded-md border border-border p-7">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">{state.name}</h2>
              <MapPin className="size-5 text-primary" />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">{state.region}</p>
            <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{state.summary}</p>
            <p className="mt-4 text-sm text-foreground">{state.cities.slice(0, 4).join(" · ")}</p>
            <Button asChild variant="link" className="mt-4 justify-start px-0">
              <Link to="/locations/$state" params={{ state: state.slug }}>View {state.name} <ArrowRight /></Link>
            </Button>
          </article>
        ))}
      </div>
    </main>
  );
}
