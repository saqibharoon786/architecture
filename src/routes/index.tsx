import { Link, createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  FileText,
  Mail,
  Pause,
  Play,
  Sparkles,
  Volume2,
  VolumeX,
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
import designImage from "@/assets/design-documentation.jpg";
import { Navbar, Logo } from "@/components/site/navigation";
import { DesignSections } from "@/components/site/design-sections";
import { BLOGS, type BlogPost } from "@/lib/blogs";
import { LOCATIONS } from "@/lib/locations";
import { CLIENTS, DISCLAIMER, SERVICES } from "@/lib/services";
import { SocialLinks, WHATSAPP_DISPLAY, WHATSAPP_URL, WhatsAppIcon } from "@/components/site/social-links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hassan Building Design Group USA — U.S. Design & Permit Drawing Services" },
      {
        name: "description",
        content:
          "Remote architectural, structural, and MEP design, drafting, BIM coordination, and permit documentation for U.S. residential and commercial projects. Design and documentation only.",
      },
      { property: "og:title", content: "Hassan Building Design Group USA — U.S. Design & Permit Drawing Services" },
      {
        property: "og:description",
        content:
          "Remote design, drafting, BIM coordination, and permit documentation for U.S. residential and commercial projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURED_POSTS = [
  "when-a-drawing-needs-a-pe-seal",
  "adu-permit-drawing-checklist",
  "residential-permit-drawings-city-requirements",
  "what-a-permit-drawing-set-includes",
  "hvac-load-calculations-manual-j-vs-hap",
  "mep-permit-drawings-commercial",
]
  .map((slug) => BLOGS.find((post) => post.slug === slug))
  .filter((post): post is BlogPost => post !== undefined);

const CLIENT_VALUES = [
  ["Clear Communication", "Defined scope, organized deliverables, and responsive project coordination."],
  ["Coordinated Documentation", "Multiple disciplines coordinated to reduce drawing conflicts."],
  ["Flexible Support", "Support available for individual drawings, revisions, or complete packages."],
];

const NEXT_STEPS = [
  "We review your project information.",
  "We identify the required drawing disciplines.",
  "We clarify the scope and deliverables.",
  "We provide a project proposal and estimated turnaround.",
  "Work begins after scope approval.",
];

const PROJECT_TYPES = [
  "Single-family home",
  "Home addition",
  "ADU / accessory dwelling unit",
  "Residential remodel",
  "Commercial tenant improvement",
  "Restaurant / food service",
  "Retail",
  "Medical / dental",
  "Office",
  "Warehouse",
  "MEP renovation or equipment replacement",
  "Other",
];

const SALON_PAGES = [
  { page: 1, title: "Cover and symbols", detail: "Code legend for architectural, mechanical, electrical, and plumbing work." },
  { page: 2, title: "Proposed floor plan", detail: "Styling area, toilet, break room, and corridor." },
  { page: 3, title: "Life safety plan", detail: "Existing doors, firewall, and travel distances." },
  { page: 4, title: "Ceiling and finish notes", detail: "2-by-2 acoustic ceiling notes and related finish direction." },
  { page: 5, title: "Partition details", detail: "Stud, gypsum, and ceiling-height details." },
  { page: 6, title: "Architectural sheet", detail: "Architectural drawing from the tenant improvement sample." },
  { page: 7, title: "Architectural sheet", detail: "Architectural drawing from the tenant improvement sample." },
  { page: 8, title: "Slab and floor details", detail: "Existing slab, trench, and new concrete notes." },
  { page: 9, title: "Presentation model", detail: "Three-dimensional view of the tenant space." },
  { page: 10, title: "Electrical specifications", detail: "Division 16 notes for the electrical scope." },
  { page: 11, title: "Power floor plan", detail: "Panel PNL-1 circuits and device layout." },
  { page: 12, title: "Mechanical specifications", detail: "Ductwork and equipment notes tied to the Florida Building Code." },
  { page: 13, title: "Mechanical notes", detail: "General mechanical notes for the tenant improvement." },
  { page: 14, title: "Proposed mechanical plan", detail: "Supply, return, and exhaust layout, including EF-1 and EF-2." },
  { page: 15, title: "Plumbing cover", detail: "Plumbing cover sheet from the tenant improvement sample." },
  { page: 16, title: "Fire protection notes", detail: "Protection required at fire-rated openings." },
  { page: 17, title: "Proposed plumbing plan", detail: "Sanitary piping and fixture vent notes." },
  { page: 18, title: "Plumbing riser", detail: "Sanitary and vent tie-in to the existing piping." },
] as const;

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
            U.S. Architectural, Structural & MEP Design & Permit Drawing Services
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Professional building design, drafting, BIM coordination, and permit documentation for residential and commercial projects across the United States.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
            We support contractors, architects, engineers, developers, and property owners with coordinated drawing packages prepared for local permit and project requirements.
          </p>
          <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-foreground">Design & documentation services only — no construction or installation.</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Where required, professional review, signature, and seal are coordinated with the U.S.-licensed professional designated for the project.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("#contact")} className="h-13 rounded-full px-8">Request a Project Quote <ArrowRight /></Button>
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
            Request a Project Quote <ArrowRight />
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
        Name
        <Input required name="name" placeholder="Your name" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Company
        <Input name="company" placeholder="Company name, if any" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Email
        <Input required type="email" name="email" placeholder="you@company.com" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Phone / WhatsApp
        <Input required type="tel" name="phone" placeholder="Phone or WhatsApp number" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Project location
        <Input required name="location" placeholder="City, State" className="h-12 bg-background px-4" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Project type
        <select
          required
          name="projectType"
          defaultValue=""
          className="h-12 rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
        >
          <option value="" disabled>Select a project type</option>
          {PROJECT_TYPES.map((type) => <option key={type}>{type}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground sm:col-span-2">
        Services required
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
        Upload drawings / files
        <input
          type="file"
          name="files"
          multiple
          accept=".pdf,.dwg,.dxf,.rvt,.png,.jpg,.jpeg,.webp,.tif,.tiff"
          className="block w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-sm file:font-medium"
        />
        <span className="text-xs font-normal text-muted-foreground">PDFs, DWGs, Revit models, sketches, or photos. This preview stays on your device.</span>
      </label>
      <label className="grid gap-2 text-sm font-medium text-foreground sm:col-span-2">
        Project description
        <Textarea required name="message" placeholder="Scope, existing drawings, timeline, and the city or county that will review the project..." className="min-h-32 resize-none bg-background p-4" />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full sm:w-auto">
          Request a Project Quote <ArrowRight />
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
            <SectionHeading eyebrow="About Us" title="Building design documentation for U.S. projects." />
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Hassan Building Design Group USA provides remote architectural, structural, mechanical, electrical, plumbing, BIM, and permit drawing support for residential and commercial projects throughout the United States.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Our team helps clients turn project information, sketches, existing drawings, field measurements, and design requirements into clear and coordinated construction documentation.
            </p>
            <h3 className="mt-8 text-lg font-semibold">Our focus</h3>
            <ul className="mt-4 grid gap-4">
              {[
                ["U.S. Project Documentation", "Drawing and documentation services tailored to U.S. project requirements and local jurisdiction needs."],
                ["Multi-Discipline Coordination", "Architectural, structural, mechanical, electrical, and plumbing documentation coordinated within one workflow."],
                ["Design & Drafting Support", "From individual drawings and revisions to complete multi-discipline drawing packages."],
                ["Remote Project Support", "Work with our team remotely from anywhere in the United States."],
              ].map(([title, copy]) => (
                <li key={title}>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground">Important: </span>
              Permit requirements, professional licensing, plan review, and approval requirements vary by jurisdiction and project. Where a licensed professional&apos;s review, signature, or seal is required, we coordinate with the appropriate U.S.-licensed professional designated for the project.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-40 w-40 border-l-4 border-b-4 border-primary sm:block" />
            <img src={aboutEngineers} alt="Building systems documentation being reviewed against mechanical equipment" loading="lazy" width={1408} height={1056} className="relative aspect-[4/3] w-full rounded-md object-cover shadow-2xl shadow-foreground/15" />
            <div className="absolute right-4 bottom-4 flex max-w-52 items-center gap-3 rounded-md bg-card p-4 shadow-xl sm:right-6 sm:bottom-6">
              <Sparkles className="size-7 shrink-0 text-primary" /><p className="text-sm font-semibold leading-5">Clear, coordinated documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-6 bg-secondary/55 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Our Services" title="Design and drafting under one workflow." copy="Architectural, structural, mechanical, electrical, plumbing, BIM, and coordinated permit documentation for U.S. projects." />
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
          <SectionHeading eyebrow="Selected Work & Drawing Samples" title="Examples of coordinated documentation." copy="Explore examples of architectural, structural, mechanical, electrical, plumbing, BIM, and permit documentation. The samples below demonstrate drafting, design, coordination, and documentation capabilities across different building types and project requirements." />
          <p className="mt-6 max-w-3xl border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">Drawing samples are provided for portfolio and demonstration purposes. Project scope, codes, jurisdiction requirements, and professional review requirements vary by project.</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ProjectDrawing
              image={mechanicalPlan}
              title="Mechanical floor plan"
              place="Commercial Facility · Fort Worth, Texas"
              detail="Representative ductwork, piping, and equipment layout from a commercial mechanical floor plan."
              alt="Mechanical floor plan sample for a commercial facility in Fort Worth, Texas"
            />
            <ProjectDrawing
              image={schematicDiagram}
              title="HVAC system schematic"
              place="Representative schematic sample"
              detail="Heat pump, hot-water tank, chilled-water heat exchangers, and fan-coil connections, with the valve and pump legend on the sheet."
              alt="Schematic diagram sample of a heat pump system with a hot water tank, fan coils, and heat exchangers"
            />
            <ProjectDrawing
              image={salonIso}
              title="Commercial tenant mechanical plan"
              place="Commercial Tenant Improvement · Fort Myers, Florida"
              detail="Ductwork, space schedule, air balance, and equipment schedule from a commercial tenant improvement sample."
              alt="Mechanical plan sample for a commercial tenant improvement in Fort Myers, Florida"
              wide
            />
          </div>
        </div>
      </section>

      <section id="salon-set" className="scroll-mt-6 border-t border-border bg-secondary/45 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Representative Drawing Sample" title="Sample MEP drawing set — commercial tenant improvement." copy="A representative multi-sheet MEP sample for a commercial tenant improvement. Every page is below, in order, from the cover through the plumbing riser. Shown for portfolio and demonstration purposes." />
            <Button asChild variant="outline" className="w-fit">
              <a href="/mep-salon-metro-parkway.pdf" target="_blank" rel="noreferrer">Open sample PDF <FileText /></a>
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
                alt={`${sheet.title}, sheet ${sheet.page} of 18, commercial tenant improvement sample`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="hap-report" className="scroll-mt-6 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Representative HAP Calculation Report" title="Commercial HVAC load calculation sample — Denver, Colorado." copy="Sample HVAC load calculation demonstrating space inputs, system sizing, cooling and heating loads, and airflow requirements. Two split air handlers were sized for tenant spaces in Denver, Colorado." />
            <Button asChild variant="outline" className="w-fit">
              <a href="/hap-report.pdf" target="_blank" rel="noreferrer">Open sample report <FileText /></a>
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
              place="Denver, Colorado"
              detail="Room-by-room inputs for tenant spaces, including floor area, ceiling height, and outdoor-air requirements."
              alt="Sample HAP space input data page for a commercial tenant space in Denver, Colorado"
            />
            <ProjectDrawing
              image={hapAhuA}
              title="Tenant Space A sizing"
              place="AHU summary"
              detail="Cooling coil, heating coil, and supply-fan sizing for the 1,439 square foot tenant A system."
              alt="Sample HAP air system sizing summary for tenant space A in Denver, Colorado"
            />
            <ProjectDrawing
              image={hapAhuB}
              title="Tenant Space B sizing"
              place="AHU summary"
              detail="Cooling coil, heating coil, and supply-fan sizing for the 505 square foot tenant B system."
              alt="Sample HAP air system sizing summary for tenant space B in Denver, Colorado"
            />
          </div>
        </div>
      </section>

      <section id="ceo" className="scroll-mt-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <img src={ceoPortrait} alt="Hassan Ali Qureshi, Founder and Design Coordinator of Hassan Building Design Group USA" width={768} height={1024} className="mx-auto aspect-[4/5] w-full max-w-md rounded-md object-cover object-top shadow-2xl shadow-foreground/15" />
          <div>
            <SectionHeading eyebrow="Founder & Design Coordinator" title="Hassan Ali Qureshi" />
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Hassan Building Design Group USA focuses on providing architectural, structural, MEP, BIM, and permit documentation support for U.S. projects.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              The work is remote design, drafting, coordination, calculations, and documentation. Where a jurisdiction requires a licensed architect or Professional Engineer, that review, signature, and seal stay with the U.S.-licensed professional designated for the project. Construction and installation stay with the teams in the field.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-6 bg-foreground py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div className="overflow-hidden rounded-md">
            <img src={designImage} alt="Coordinated architectural and MEP drawing documentation" loading="lazy" width={1408} height={1056} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-primary"><span className="h-px w-8 bg-primary" />Our Design Team</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Support matched to the project scope.</h2>
            <p className="mt-5 leading-7 text-primary-foreground/65">Our multidisciplinary project team supports architectural, structural, MEP, BIM, drafting, and coordination requirements according to project scope.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Architectural documentation", "Structural documentation", "Mechanical / HVAC", "Electrical", "Plumbing", "BIM coordination"].map((item) => (
                <li key={item} className="flex items-center gap-3 border-t border-primary-foreground/15 pt-3 text-sm font-medium">
                  <Check className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="What Our Clients Value" title="How project support is organized." copy="Real client comments can be added when we have permission to publish them. Until then, these are the working standards behind each package." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CLIENT_VALUES.map(([title, copy]) => (
              <article key={title} className="rounded-md border border-border bg-card p-7 shadow-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase text-muted-foreground">Who We Support</p>
          <div className="mt-7 grid grid-cols-2 gap-y-6 text-center text-sm font-bold text-foreground/55 sm:grid-cols-5">
            {CLIENTS.map((partner) => <span key={partner}>{partner}</span>)}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Blog" title="Notes on U.S. drawing requirements." copy="Practical reads on permit documentation, MEP coordination, load calculations, ADUs, and when a professional seal is required." />
            <Button variant="outline" className="w-fit" asChild><Link to="/blog">All articles <ArrowRight /></Link></Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {FEATURED_POSTS.map((post) => (
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
            <SectionHeading eyebrow="U.S. Project Coverage" title="Remote support for projects across the United States." copy="Our experience and project support can include jurisdictions in California, Texas, Florida, New York, Illinois, Georgia, North Carolina, Arizona, Washington, and Colorado. Project requirements vary by city, county, state, building type, and Authority Having Jurisdiction (AHJ). If your project requires a licensed architect or Professional Engineer, we can prepare the design documentation for review and coordinate with the appropriate U.S.-licensed professional designated for the project." />
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
              <p className="mt-5 leading-7 text-primary-foreground/80">Send us your project information and we will review the available scope and drawing requirements.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary-foreground/10 px-4 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/20">
                <WhatsAppIcon className="size-5" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <p className="mt-6 text-sm font-semibold">You can send</p>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-primary-foreground/85">
                {["Existing drawings", "Architectural plans", "PDFs / DWGs", "Revit models", "Site plans", "Sketches", "Photos", "Project specifications", "Scope of work", "City / county information"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 size-4 shrink-0" />{item}</li>
                ))}
              </ul>
              <div className="mt-8 border-t border-primary-foreground/25 pt-6">
                <p className="text-sm font-semibold">What happens next?</p>
                <ol className="mt-4 space-y-3">
                  {NEXT_STEPS.map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-6 text-primary-foreground/85">
                      <span className="font-semibold text-primary-foreground">{index + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <AdSection />

      <footer className="bg-foreground text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <Logo light />
            <p className="mt-5 text-sm font-semibold leading-6">Hassan Building Design Group USA</p>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/60">Architectural Design | Structural Design | Mechanical / HVAC | Electrical | Plumbing | BIM | Permit Drawing Documentation</p>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/60">U.S. Residential & Commercial Design Support</p>
            <p className="mt-3 text-sm font-medium leading-6">Design & Documentation Only · No Construction or Installation Services</p>
          </div>
          <div><h3 className="text-sm font-semibold">Explore</h3><nav className="mt-5 grid gap-3"><Link to="/services" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Services</Link><Link to="/locations" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Locations</Link><Link to="/blog" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Blogs</Link><a href="#projects" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Selected Work</a><a href="#contact" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Contact</a></nav></div>
          <div><h3 className="text-sm font-semibold">Services</h3><div className="mt-5 grid gap-3">{SERVICES.map((service) => <Link key={service.title} to="/services/$service" params={{service:service.slug}} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">{service.title}</Link>)}</div></div>
          <div><h3 className="text-sm font-semibold">Start a project</h3><p className="mt-5 text-sm leading-6 text-primary-foreground/60">Remote design, drafting, BIM, calculations, and permit documentation. No construction or installation services.</p><Button onClick={() => scrollToSection("#contact")} className="mt-6">Request a Project Quote <ArrowRight /></Button></div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <SocialLinks />
          </div>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <h3 className="text-sm font-semibold">Design & Professional Licensing Disclaimer</h3>
            <p className="mt-3 max-w-5xl text-xs leading-6 text-primary-foreground/55">{DISCLAIMER}</p>
          </div>
          <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/10 px-4 py-5 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>© 2026 Hassan Building Design Group USA. All rights reserved.</p>
            <p className="flex items-center gap-2"><Building2 className="size-4" /> U.S. residential and commercial design support</p>
          </div>
        </div>
      </footer>
    </main>
  );
}