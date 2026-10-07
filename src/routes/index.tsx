import { Link, createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Flame,
  Gauge,
  Linkedin,
  FileText,
  Mail,
  Menu,
  Network,
  Pause,
  Play,
  Quote,
  Snowflake,
  Sparkles,
  Star,
  Users,
  Volume2,
  VolumeX,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroCity from "@/assets/hero-city.jpg";
import aboutEngineers from "@/assets/about-engineers.jpg";
import mechanicalPlan from "@/assets/project-mechanical-plan.png";
import schematicDiagram from "@/assets/project-schematic.png";
import salonIso from "@/assets/project-salon-iso.png";
import ceoPortrait from "@/assets/ceo-portrait.png";
import hapSpaceInput from "@/assets/hap-space-input.png";
import hapAhuA from "@/assets/hap-ahu-a.png";
import hapAhuB from "@/assets/hap-ahu-b.png";
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

const SALON_PAGES = [
  { page: 1, title: "Cover and symbols", detail: "Code legend for architectural, mechanical, electrical, and plumbing work." },
  { page: 2, title: "Proposed floor plan", detail: "Styling area, toilet, break room, and corridor." },
  { page: 3, title: "Life safety plan", detail: "Existing doors, firewall, and travel distances." },
  { page: 4, title: "Ceiling and finish notes", detail: "2-by-2 acoustic ceiling notes and related finish direction." },
  { page: 5, title: "Partition details", detail: "Stud, gypsum, and ceiling-height details." },
  { page: 6, title: "Architectural sheet", detail: "Architectural drawing from the salon buildout set." },
  { page: 7, title: "Architectural sheet", detail: "Architectural drawing from the salon buildout set." },
  { page: 8, title: "Slab and floor details", detail: "Existing slab, trench, and new concrete notes." },
  { page: 9, title: "Presentation model", detail: "Three-dimensional view of the tenant space." },
  { page: 10, title: "Electrical specifications", detail: "Division 16 notes for the electrical scope." },
  { page: 11, title: "Power floor plan", detail: "Panel PNL-1 circuits and device layout." },
  { page: 12, title: "Mechanical specifications", detail: "Ductwork and equipment notes tied to the Florida Building Code." },
  { page: 13, title: "Mechanical notes", detail: "General mechanical notes for the hair salon buildout." },
  { page: 14, title: "Proposed mechanical plan", detail: "Supply, return, and exhaust layout, including EF-1 and EF-2." },
  { page: 15, title: "Plumbing cover", detail: "Tenant buildout sheet for the hair salon plumbing set." },
  { page: 16, title: "Fire protection notes", detail: "Protection required at fire-rated openings." },
  { page: 17, title: "Proposed plumbing plan", detail: "Sanitary piping and fixture vent notes." },
  { page: 18, title: "Plumbing riser", detail: "Sanitary and vent tie-in to the existing piping." },
] as const;

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

function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) return;
    videoRef.current?.pause();
    setPaused(true);
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPaused(false);
      return;
    }
    video.pause();
    setPaused(true);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section id="home" className="relative overflow-hidden border-b border-border bg-secondary/45">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-32 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pt-36 lg:pb-20">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
            <span className="h-px w-8 bg-primary" /> Hassan Building Design Group USA
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            U.S. MEP, Structural & Architectural Permit Drawing Services
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Professional design and drafting services for U.S. residential and commercial projects.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Design and documentation only — no construction or installation services.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("#contact")} className="h-13 rounded-full px-8">Request a Quote <ArrowRight /></Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-full px-8"><Link to="/services">View Our Services <ArrowRight /></Link></Button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-md bg-foreground shadow-2xl shadow-foreground/15">
            <video
              ref={videoRef}
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={heroCity}
              preload="metadata"
              aria-label="Hassan Building Design Group USA introduction"
            >
              <source src="/mep-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <Button type="button" variant="secondary" size="icon" className="rounded-full bg-card/95 shadow-lg" onClick={togglePlay} aria-label={paused ? "Play introduction video" : "Pause introduction video"}>
              {paused ? <Play /> : <Pause />}
            </Button>
            <Button type="button" variant="secondary" size="icon" className="rounded-full bg-card/95 shadow-lg" onClick={toggleMute} aria-label={muted ? "Unmute introduction video" : "Mute introduction video"}>
              {muted ? <VolumeX /> : <Volume2 />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
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

function AdSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.pause();
      userPaused.current = true;
      setPaused(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (userPaused.current) return;
        if (entry?.isIntersecting) {
          void video.play();
          setPaused(false);
          return;
        }
        video.pause();
        setPaused(true);
      },
      { threshold: 0.45 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      void video.play();
      setPaused(false);
      return;
    }
    userPaused.current = true;
    video.pause();
    setPaused(true);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section className="border-t border-border bg-secondary/45 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Watch"
            title="A short look at coordinated MEP work."
            copy="See how mechanical, electrical, and plumbing documentation comes together before a set goes out for review."
          />
          <Button size="lg" onClick={() => scrollToSection("#contact")} className="mt-8 h-13 rounded-full px-8">
            Request a Quote <ArrowRight />
          </Button>
        </div>
        <div className="relative mx-auto w-full max-w-[22rem]">
          <div className="overflow-hidden rounded-md bg-foreground shadow-2xl shadow-foreground/15">
            <video
              ref={videoRef}
              className="aspect-[9/16] w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="MEP coordination advertisement"
            >
              <source src="/mep-ad.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <Button type="button" variant="secondary" size="icon" className="rounded-full bg-card/95 shadow-lg" onClick={togglePlay} aria-label={paused ? "Play MEP video" : "Pause MEP video"}>
              {paused ? <Play /> : <Pause />}
            </Button>
            <Button type="button" variant="secondary" size="icon" className="rounded-full bg-card/95 shadow-lg" onClick={toggleMute} aria-label={muted ? "Unmute MEP video" : "Mute MEP video"}>
              {muted ? <VolumeX /> : <Volume2 />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectDrawing({
  image,
  title,
  place,
  detail,
  alt,
  wide = false,
}: {
  image: string;
  title: string;
  place: string;
  detail: string;
  alt: string;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`flex flex-col overflow-hidden rounded-md border border-border bg-card shadow-sm ${wide ? "lg:col-span-2" : ""}`}>
      <button type="button" onClick={() => setOpen(true)} className="bg-white p-3 text-left sm:p-4" aria-label={`View ${title} at full size`}>
        <img src={image} alt={alt} className="mx-auto max-h-[520px] w-full object-contain" />
      </button>
      <div className="flex flex-1 flex-col border-t border-border p-6">
        <p className="text-xs font-semibold uppercase text-primary">{place}</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{detail}</p>
        <Button type="button" variant="link" className="mt-4 justify-start px-0" onClick={() => setOpen(true)}>
          View full size <ArrowRight />
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[94vh] w-[min(96vw,1280px)] max-w-none overflow-auto bg-white p-4 sm:p-6">
          <DialogTitle className="pr-8 text-left text-base font-semibold">{title}</DialogTitle>
          <img src={image} alt={alt} className="w-full object-contain" />
        </DialogContent>
      </Dialog>
    </article>
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

      <HeroSection />

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
          <SectionHeading eyebrow="Recent Projects" title="Drawings you can actually read." copy="Sheets from recent mechanical work, shown full and uncropped. Open any drawing to see the linework at a larger size." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ProjectDrawing
              image={mechanicalPlan}
              title="Mechanical floor plan"
              place="Lockheed Martin · Fort Worth, TX"
              detail="Ductwork, piping, and equipment layout for the North B015 mechanical plan, prepared with the mechanical contractor’s title block."
              alt="Mechanical floor plan for Lockheed Martin in Fort Worth, Texas, showing ductwork, equipment, and a notes column"
            />
            <ProjectDrawing
              image={schematicDiagram}
              title="Geothermal system schematic"
              place="HVAC · Schematic diagram"
              detail="Heat pump, hot-water tank, chilled-water heat exchangers, and fan-coil connections, with the valve and pump legend on the sheet."
              alt="Schematic diagram of a geothermal heat pump system with a hot water tank, fan coils, and heat exchangers"
            />
            <ProjectDrawing
              image={salonIso}
              title="Hair salon mechanical plan"
              place="10650 Metro Parkway #104 · Fort Myers"
              detail="Kitchen, lobby, and service-hall ductwork with the space schedule, kitchen air balance, and equipment schedule on the same sheet."
              alt="Mechanical plan and isometric for a hair salon, showing kitchen, lobby, and service hall ductwork"
              wide
            />
          </div>
        </div>
      </section>

      <section id="salon-set" className="scroll-mt-6 border-t border-border bg-secondary/45 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Full drawing set" title="Hair salon, Metro Parkway — all 18 sheets." copy="Tenant buildout at 10650 Metro Parkway #104, Fort Myers. Every page of the MEP set is below, in order, from the cover through the plumbing riser." />
            <Button asChild variant="outline" className="w-fit">
              <a href="/mep-salon-metro-parkway.pdf" target="_blank" rel="noreferrer">Open original PDF <FileText /></a>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {SALON_PAGES.map((sheet) => (
              <ProjectDrawing
                key={sheet.page}
                image={`/salon/page-${String(sheet.page).padStart(2, "0")}.jpg`}
                title={`${String(sheet.page).padStart(2, "0")} · ${sheet.title}`}
                place={`Sheet ${sheet.page} of 18`}
                detail={sheet.detail}
                alt={`${sheet.title}, sheet ${sheet.page} of 18, hair salon at Metro Parkway`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="hap-report" className="scroll-mt-6 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="HAP Report" title="State Farm, Denver load calculations." copy="Carrier Hourly Analysis Program v4.90 report dated February 11, 2023, prepared by M. Jawad. Two split air handlers were sized for tenant spaces in Denver, Colorado, using ASHRAE 62.1-2007 ventilation inputs." />
            <Button asChild variant="outline" className="w-fit">
              <a href="/hap-report.pdf" target="_blank" rel="noreferrer">Open full report <FileText /></a>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              { name: "AHU — Tenant Space A", area: "1,439 ft²", cooling: "3.1 tons", airflow: "1,910 CFM", heating: "36.1 MBH" },
              { name: "AHU — Tenant Space B", area: "505 ft²", cooling: "1.2 tons", airflow: "710 CFM", heating: "14.3 MBH" },
            ].map((system) => (
              <article key={system.name} className="rounded-md border border-border bg-card p-6">
                <h3 className="text-lg font-bold">{system.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Split AHU · single zone · Denver, Colorado</p>
                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  {[["Floor area", system.area], ["Cooling coil", system.cooling], ["Supply air", system.airflow], ["Heating coil", system.heating]].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="mt-1 text-base font-semibold text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <ProjectDrawing
              image={hapSpaceInput}
              title="Space input data"
              place="State Farm · Denver"
              detail="Room-by-room inputs for tenant spaces, including floor area, ceiling height, and outdoor-air requirements."
              alt="HAP space input data page for the State Farm Denver project"
            />
            <ProjectDrawing
              image={hapAhuA}
              title="Tenant Space A sizing"
              place="AHU summary"
              detail="Cooling coil, heating coil, and supply-fan sizing for the 1,439 square foot tenant A system."
              alt="HAP air system sizing summary for tenant space A at State Farm Denver"
            />
            <ProjectDrawing
              image={hapAhuB}
              title="Tenant Space B sizing"
              place="AHU summary"
              detail="Cooling coil, heating coil, and supply-fan sizing for the 505 square foot tenant B system."
              alt="HAP air system sizing summary for tenant space B at State Farm Denver"
            />
          </div>
        </div>
      </section>

      <section id="ceo" className="scroll-mt-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <img src={ceoPortrait} alt="Chief Executive Officer of Hassan Building Design Group USA" width={768} height={1024} className="mx-auto aspect-[4/5] w-full max-w-md rounded-md object-cover object-top shadow-2xl shadow-foreground/15" />
          <div>
            <SectionHeading eyebrow="Chief Executive Officer" title="A clear set is the whole point of the work." />
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              The CEO of Hassan Building Design Group USA keeps every package to one standard: coordinated architectural, structural, and MEP drawings that a reviewer can follow and a contractor can read. The practice stays in design and documentation for residential and commercial projects across the United States.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Load calculations, floor plans, and schematics leave the office only after the disciplines agree. Construction and installation stay with the teams in the field.
            </p>
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

      <AdSection />

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