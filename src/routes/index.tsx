import { Link, createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  Droplets,
  Flame,
  Gauge,
  Linkedin,
  Mail,
  Menu,
  Network,
  Quote,
  Snowflake,
  Sparkles,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroCity from "@/assets/hero-city.jpg";
import aboutEngineers from "@/assets/about-engineers.jpg";
import officeProject from "@/assets/project-office.jpg";
import hospitalProject from "@/assets/project-hospital.jpg";
import teamEngineers from "@/assets/team-engineers.jpg";
import { Navbar, Logo } from "@/components/site/navigation";
import { DesignSections } from "@/components/site/design-sections";
import { BLOGS } from "@/lib/blogs";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES, COMPANY } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hassan Building Design Group USA — U.S. Permit Drawing Services" },
      {
        name: "description",
        content:
          "Architectural, Structural, MEP and permit drawing services for U.S. residential and commercial projects. Design and documentation only.",
      },
      { property: "og:title", content: "Hassan Building Design Group USA — U.S. Permit Drawing Services" },
      {
        property: "og:description",
        content:
          "U.S. architectural, structural, mechanical, electrical, plumbing and BIM design documentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TEAM = [
  { name: "Sarah Mitchell", role: "Mechanical Engineer" },
  { name: "Daniel Carter", role: "Project Director" },
  { name: "Maya Robinson", role: "Electrical Engineer" },
  { name: "Ethan Lee", role: "BIM Lead" },
];

const TESTIMONIALS = [
  {
    quote:
      "The design team brought clarity to a complex coordination process. Their drawings were thoughtful, accurate, and easy for our contractors to follow.",
    name: "Michael Torres",
    role: "Project Executive",
  },
  {
    quote:
      "Responsive, practical, and genuinely collaborative. They understood our goals and delivered a solution that balanced performance with budget.",
    name: "Rachel Adams",
    role: "Senior Architect",
  },
  {
    quote:
      "Their attention to detail helped us identify issues early and keep construction moving. We would gladly work with them again.",
    name: "James Wilson",
    role: "Development Manager",
  },
];

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
        <span className="h-px w-8 bg-primary" /> {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted-foreground">{copy}</p>}
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center bg-card p-8 text-center sm:p-12">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-foreground">Project request preview complete.</h3>
        <p className="mt-3 max-w-md leading-7 text-muted-foreground">
          This preview confirms the form locally only; your request has not been sent or saved.
        </p>
        <Button type="button" variant="outline" className="mt-7" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 bg-card p-6 sm:grid-cols-2 sm:p-10">
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Full name
        <Input required name="name" placeholder="Your name" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Work email
        <Input required type="email" name="email" placeholder="you@company.com" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Phone number
        <Input required type="tel" name="phone" placeholder="Your phone number" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Service needed
        <select
          required
          name="service"
          defaultValue=""
          className="h-12 rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
        >
          <option value="" disabled>Select a service</option>
          {SERVICES.map((service) => <option key={service.title}>{service.title}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground sm:col-span-2">
        Tell us about your project
        <Textarea required name="message" placeholder="Project type, location, timeline, and any specific requirements..." className="min-h-32 resize-none bg-background p-4" />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full sm:w-auto">
          Send Project Request <ArrowRight />
        </Button>
      </div>
    </form>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar onHome />

      <section id="home" className="relative flex min-h-[min(850px,92svh)] items-center justify-center">
        <img src={heroCity} alt="City skyline at sunset with construction cranes" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/30 to-foreground/60" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 pt-36 pb-24 text-center sm:px-6">
          <p className="mb-5 text-sm font-semibold uppercase text-primary-foreground/90">Hassan Building Design Group USA</p>
          <h1 className="text-3xl font-bold leading-tight text-primary-foreground drop-shadow-lg sm:text-4xl lg:text-5xl">U.S. MEP, Structural & Architectural Permit Drawing Services</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-foreground/90 sm:text-lg">
            Professional design and drafting services for U.S. residential and commercial projects.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/85">Design and documentation only — no construction or installation services.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("#contact")} className="h-13 rounded-full px-8 shadow-xl shadow-primary/30">Request a Quote <ArrowRight /></Button>
            <Button asChild size="lg" variant="secondary" className="h-13 rounded-full px-8 shadow-xl"><Link to="/services">View Our Services <ArrowRight /></Link></Button>
          </div>
        </div>
        <Button variant="ghost" size="icon" aria-label="Scroll to about us" onClick={() => scrollToSection("#about")} className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/80 transition-colors hover:text-primary-foreground">
          <ChevronDown className="size-8 animate-bounce" />
        </Button>
      </section>

      <section id="about" className="scroll-mt-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About Us" title="One team for your building design documentation." />
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Hassan Building Design Group USA provides detailed Architectural, Mechanical, Electrical, Plumbing (MEP), Structural, and permit drawing sets for contractors, architects, engineers, developers, and property owners across the United States.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-border py-7">
              {[["U.S.", "Project focus"], ["A–S–MEP", "Coordinated disciplines"], ["Design", "Documentation only"]].map(([value, label]) => (
                <div key={label}><strong className="block text-xl font-bold text-primary sm:text-2xl">{value}</strong><span className="mt-1 block text-xs leading-5 text-muted-foreground sm:text-sm">{label}</span></div>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-medium sm:grid-cols-2">
              {["Integrated design process", "Responsive project support", "U.S.-focused documentation", "Buildable documentation"].map((item) => (
                <li key={item} className="flex items-center gap-3"><BadgeCheck className="size-5 text-primary" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-40 w-40 border-l-4 border-b-4 border-primary sm:block" />
            <img src={aboutEngineers} alt="MEP engineers reviewing technical plans in a mechanical plant room" loading="lazy" width={1408} height={1056} className="relative aspect-[4/3] w-full rounded-md object-cover shadow-2xl shadow-foreground/15" />
            <div className="absolute right-4 bottom-4 flex max-w-52 items-center gap-3 rounded-md bg-card p-4 shadow-xl sm:right-6 sm:bottom-6">
              <Sparkles className="size-7 shrink-0 text-primary" /><p className="text-sm font-semibold leading-5">Clear, coordinated documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-6 bg-secondary/55 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Our Services" title="Design & drafting under one team." copy="Architectural, Structural, Mechanical, Electrical, Plumbing and coordinated permit packages for U.S. projects." />
            <Button variant="outline" className="w-fit" asChild><Link to="/services">View All Services <ArrowRight /></Link></Button>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group min-h-64 bg-card p-7 transition-colors hover:bg-primary sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground"><Icon className="size-6" /></span>
                    <span className="text-sm font-medium text-muted-foreground/60 group-hover:text-primary-foreground/60">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-foreground group-hover:text-primary-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-primary-foreground/80">{service.copy}</p>
                  <Button asChild variant="link" className="mt-4 px-0 text-primary group-hover:text-primary-foreground"><Link to="/services/$service" params={{service:service.slug}}>View Details <ArrowRight /></Link></Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <DesignSections />

      <section id="projects" className="scroll-mt-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Recent Projects" title="Designed with purpose. Delivered with precision." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { image: officeProject, title: "Horizon Corporate Center", type: "Commercial · Full MEP Design", place: "Business Campus" },
              { image: hospitalProject, title: "Westview Medical Pavilion", type: "Healthcare · MEP & Fire Protection", place: "Medical District" },
            ].map((project) => (
              <article key={project.title} className="group relative min-h-[430px] overflow-hidden rounded-md">
                <img src={project.image} alt={project.title} loading="lazy" width={1408} height={1008} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground sm:p-8">
                  <p className="text-xs font-semibold uppercase text-primary-foreground/75">{project.type}</p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <div><h3 className="text-2xl font-bold sm:text-3xl">{project.title}</h3><p className="mt-2 text-sm text-primary-foreground/75">{project.place}</p></div>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary-foreground/40 transition-colors group-hover:bg-primary group-hover:border-primary"><ArrowRight className="size-5" /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-6 bg-foreground py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div className="overflow-hidden rounded-md">
            <img src={teamEngineers} alt="A multidisciplinary engineering team in their design studio" loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-primary"><span className="h-px w-8 bg-primary" />Meet the team</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Experienced minds. One shared standard.</h2>
            <p className="mt-5 leading-7 text-primary-foreground/65">Our multidisciplinary team works side by side, combining technical depth with the communication needed to keep every project moving.</p>
            <div className="mt-9 grid gap-px overflow-hidden rounded-md bg-primary-foreground/15 sm:grid-cols-2">
              {TEAM.map((person) => (
                <div key={person.name} className="flex items-center justify-between bg-foreground p-4">
                  <div><p className="font-semibold">{person.name}</p><p className="mt-1 text-xs text-primary-foreground/55">{person.role}</p></div>
                  <a href="#contact" aria-label={`Contact ${person.name}`} className="text-primary-foreground/50 transition-colors hover:text-primary"><Linkedin className="size-4" /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center"><SectionHeading eyebrow="Client Stories" title="Trusted where it matters most." /></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure key={item.name} className="flex min-h-80 flex-col rounded-md border border-border bg-card p-7 shadow-sm">
                <div className="flex justify-between"><Quote className="size-9 text-primary/30" /><div className="flex gap-1 text-chart-4" aria-label="5 out of 5 stars">{[1,2,3,4,5].map((star) => <Star key={star} className="size-4 fill-current" />)}</div></div>
                <blockquote className="mt-7 flex-1 text-base leading-7 text-foreground">“{item.quote}”</blockquote>
                <figcaption className="mt-7 border-t border-border pt-5"><p className="font-semibold">{item.name}</p><p className="mt-1 text-sm text-muted-foreground">{item.role}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase text-muted-foreground">Who we work with</p>
          <div className="mt-7 grid grid-cols-2 gap-y-6 text-center text-sm font-bold text-foreground/55 sm:grid-cols-5">
            {["ARCHITECTS", "CONTRACTORS", "DEVELOPERS", "OWNERS", "FACILITY TEAMS"].map((partner) => <span key={partner}>{partner}</span>)}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Blog" title="Notes on sets that survive plan check." copy="Three practical reads on permit sheets, MEP coordination, and home additions." />
            <Button variant="outline" className="w-fit" asChild><Link to="/blog">All articles <ArrowRight /></Link></Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {BLOGS.map((post) => (
              <article key={post.slug} className="flex flex-col rounded-md border border-border bg-card p-7">
                <p className="text-xs font-semibold uppercase text-primary">{post.category}</p>
                <h3 className="mt-4 text-xl font-bold leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                <Button asChild variant="link" className="mt-5 justify-start px-0"><Link to="/blog/$slug" params={{ slug: post.slug }}>Read article <ArrowRight /></Link></Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/55 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Locations" title="Key states we document." />
            <Button variant="outline" className="w-fit" asChild><Link to="/locations">All locations <ArrowRight /></Link></Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {LOCATIONS.map((state) => (
              <Button key={state.slug} asChild variant="secondary" className="rounded-full">
                <Link to="/locations/$state" params={{ state: state.slug }}>{state.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-md border border-border shadow-xl shadow-foreground/5 lg:grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="bg-primary p-7 text-primary-foreground sm:p-10 lg:p-12">
              <Mail className="size-10" />
              <h2 className="mt-8 text-3xl font-bold leading-tight sm:text-4xl">Have a U.S. project that needs drawings?</h2>
              <p className="mt-5 leading-7 text-primary-foreground/80">Send us your project information, existing drawings, sketches, or scope of work. We’ll review your requirements and provide a clear proposal for the required design and drafting services.</p>
              <div className="mt-10 space-y-5 border-t border-primary-foreground/25 pt-8">
                {["Clear scope and next steps", "Coordinated multidisciplinary review", "Practical, responsive support"].map((item) => <p key={item} className="flex items-center gap-3 text-sm font-medium"><Check className="size-5" />{item}</p>)}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8"><Logo light /><p className="mt-5 text-sm leading-6 text-primary-foreground/60">Architectural | Structural | Mechanical | Electrical | Plumbing | Permit Drawings. Design and drafting support across the United States.</p></div>
          <div><h3 className="text-sm font-semibold">Explore</h3><nav className="mt-5 grid gap-3"><Link to="/services" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Services</Link><Link to="/locations" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Locations</Link><Link to="/blog" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Blogs</Link><a href="#projects" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Projects</a><a href="#contact" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Contact</a></nav></div>
          <div><h3 className="text-sm font-semibold">Services</h3><div className="mt-5 grid gap-3">{SERVICES.map((service) => <Link key={service.title} to="/services/$service" params={{service:service.slug}} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">{service.title}</Link>)}</div></div>
          <div><h3 className="text-sm font-semibold">Start a project</h3><p className="mt-5 text-sm leading-6 text-primary-foreground/60">Design and documentation only. No construction or installation services.</p><Button onClick={() => scrollToSection("#contact")} className="mt-6">Request a Quote <ArrowRight /></Button></div>
        </div>
        <div className="border-t border-primary-foreground/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-6"><p>© 2026 Hassan Building Design Group USA. All rights reserved.</p><p className="flex items-center gap-2"><Building2 className="size-4" /> Designed for better buildings.</p></div></div>
      </footer>
    </main>
  );
}