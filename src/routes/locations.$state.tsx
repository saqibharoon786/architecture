import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCATIONS } from "@/lib/locations";
import { COMPANY, DISCLAIMER, SERVICES } from "@/lib/services";
import heroCity from "@/assets/hero-city.jpg";
import officeProject from "@/assets/project-office.jpg";
import hospitalProject from "@/assets/project-hospital.jpg";
import aboutEngineers from "@/assets/about-engineers.jpg";

const IMAGES = [heroCity, officeProject, hospitalProject, aboutEngineers];

export const Route = createFileRoute("/locations/$state")({
  loader: ({ params }) => {
    const state = LOCATIONS.find((item) => item.slug === params.state);
    if (!state) throw notFound();
    return state.slug;
  },
  head: ({ loaderData }) => {
    const state = LOCATIONS.find((item) => item.slug === loaderData);
    return {
      meta: [
        { title: state ? `Permit Drawings in ${state.name} — ${COMPANY}` : "Location not found" },
        { name: "description", content: state?.summary ?? "The requested location could not be found." },
        { property: "og:title", content: state ? `${state.name} design documentation` : "Location not found" },
        { property: "og:description", content: state?.summary ?? "Explore U.S. permit drawing locations." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: LocationDetail,
  notFoundComponent: LocationNotFound,
});

function LocationDetail() {
  const slug = Route.useLoaderData();
  const state = LOCATIONS.find((item) => item.slug === slug);
  if (!state) return <LocationNotFound />;
  const image = IMAGES[LOCATIONS.findIndex((item) => item.slug === slug) % IMAGES.length];
  const others = LOCATIONS.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Button asChild variant="link" className="px-0">
          <Link to="/locations"><ArrowLeft /> All locations</Link>
        </Button>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
              <MapPin className="size-4" /> {state.region} · United States
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">Permit drawing support in {state.name}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{state.summary}</p>
            <Button asChild className="mt-8">
              <Link to="/" hash="contact">Request a {state.name} quote <ArrowRight /></Link>
            </Button>
          </div>
          <img src={image} alt="" className="aspect-[4/3] w-full rounded-md object-cover" />
        </div>

        <section className="mt-16 space-y-6 border-t border-border pt-10">
          {state.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 28)} className="max-w-4xl leading-8 text-muted-foreground">{paragraph}</p>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Cities we regularly document</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {state.cities.map((city) => (
              <li key={city} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{city}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">How {state.name} projects usually show up</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {state.focus.map((item) => (
              <article key={item.title} className="rounded-md border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold">Common project types</h2>
            <ul className="mt-6 grid gap-3">
              {state.projects.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Services available for {state.name}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <Link key={service.slug} to="/services/$service" params={{ service: service.slug }} className="rounded-md border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="text-2xl font-bold">Other states</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link key={item.slug} to="/locations/$state" params={{ state: item.slug }} className="rounded-md bg-secondary p-5 transition-colors hover:bg-secondary/70">
                <p className="font-semibold">{item.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.cities.slice(0, 2).join(" · ")}</p>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-12 rounded-md bg-secondary p-6 text-sm leading-7 text-muted-foreground">{DISCLAIMER}</p>
      </div>
    </main>
  );
}

function LocationNotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-3xl font-bold">Location not found</h1>
      <Button asChild className="mt-6">
        <Link to="/locations">Browse locations</Link>
      </Button>
    </main>
  );
}
