import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, DISCLAIMER, SERVICE_PAGES, SERVICES } from "@/lib/services";
import designImage from "@/assets/design-documentation.jpg";
import aboutEngineers from "@/assets/about-engineers.jpg";
import officeProject from "@/assets/project-office.jpg";
import hospitalProject from "@/assets/project-hospital.jpg";

const IMAGES = [designImage, officeProject, hospitalProject, aboutEngineers];

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = SERVICES.find((item) => item.slug === params.service);
    if (!service) throw notFound();
    return service.slug;
  },
  head: ({ loaderData }) => {
    const service = SERVICES.find((item) => item.slug === loaderData);
    const page = loaderData ? SERVICE_PAGES[loaderData] : undefined;
    const description = page?.overview[0] ?? service?.copy ?? "The requested design service could not be found.";
    return {
      meta: [
        { title: service ? `${service.title} — ${COMPANY}` : "Service Not Found — Hassan Building Design Group USA" },
        { name: "description", content: description },
        { property: "og:title", content: service?.title ?? "Service Not Found" },
        { property: "og:description", content: service?.copy ?? "Explore our U.S. building design services." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceDetail() {
  const slug = Route.useLoaderData();
  const service = SERVICES.find((item) => item.slug === slug);
  const page = SERVICE_PAGES[slug];
  if (!service || !page) return <ServiceNotFound />;

  const image = IMAGES[SERVICES.findIndex((item) => item.slug === slug) % IMAGES.length];
  const related = SERVICES.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Button asChild variant="link" className="px-0">
          <Link to="/services"><ArrowLeft /> All Services</Link>
        </Button>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">U.S. design & drafting</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{service.copy}</p>
            <Button asChild className="mt-8">
              <Link to="/" hash="contact">Request a Quote <ArrowRight /></Link>
            </Button>
          </div>
          <img src={image} alt="" width={1408} height={1056} className="aspect-[4/3] w-full rounded-md object-cover" />
        </div>

        <section className="mt-16 grid gap-6 border-t border-border pt-10">
          {page.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="max-w-4xl text-base leading-8 text-muted-foreground">{paragraph}</p>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold">What this work includes</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {page.highlights.map((item) => (
              <article key={item.title} className="rounded-md border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.copy}</p>
              </article>
            ))}
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-border pb-3 text-sm">
                <Check className="size-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          {"note" in service && service.note && (
            <p className="mt-8 border-l-2 border-primary pl-5 text-sm leading-7 text-muted-foreground">{service.note}</p>
          )}
        </section>

        <section className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Who this is for</h2>
            <ul className="mt-6 grid gap-3">
              {page.audience.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6">
                  <Check className="size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Typical projects</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.projects.map((item) => (
                <li key={item} className="rounded-md bg-secondary px-4 py-3 text-sm font-medium">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14 border-t border-border pt-10">
          <h2 className="text-2xl font-bold">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} to="/services/$service" params={{ service: item.slug }} className="rounded-md border border-border p-5 transition-colors hover:border-primary">
                <item.icon className="size-6 text-primary" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-12 rounded-md bg-secondary p-6 text-sm leading-7 text-muted-foreground">{DISCLAIMER}</p>
      </div>
    </main>
  );
}

function ServiceNotFound() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <Button asChild className="mt-6">
        <Link to="/services">Browse Services</Link>
      </Button>
    </main>
  );
}
