import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, MapPin, Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCATIONS } from "@/lib/locations";
import { SERVICES } from "@/lib/services";

const SECTION_LINKS = [
  { label: "Home", hash: "home" },
  { label: "About Us", hash: "about" },
  { label: "Work", hash: "projects" },
  { label: "Team", hash: "team" },
  { label: "Contact", hash: "contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="Hassan Building Design Group USA home" className={`flex items-center gap-2 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      <Building2 className="size-8 shrink-0 text-primary" />
      <span className="text-sm font-bold leading-tight">
        HASSAN
        <span className="block text-[10px] font-medium">BUILDING DESIGN GROUP USA</span>
      </span>
    </Link>
  );
}

function ServiceMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full px-3" aria-label="Services menu">
          Services <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={12} className="w-[min(44rem,calc(100vw-2rem))] p-3">
        <DropdownMenuLabel className="text-xs uppercase tracking-wide text-muted-foreground">All design services</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link to="/services" className="font-semibold text-primary">
            View all services <ArrowRight className="ml-auto" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="grid gap-1 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <DropdownMenuItem key={service.slug} asChild>
              <Link to="/services/$service" params={{ service: service.slug }} className="items-start gap-3 py-3">
                <service.icon className="mt-0.5 text-primary" />
                <span className="whitespace-normal">
                  <span className="block font-medium leading-5">{service.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">{service.copy}</span>
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LocationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full px-3" aria-label="Locations menu">
          Locations <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" sideOffset={12} className="w-[min(40rem,calc(100vw-2rem))] p-3">
        <DropdownMenuLabel className="text-xs uppercase tracking-wide text-muted-foreground">U.S. project coverage</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link to="/locations" className="font-semibold text-primary">
            View all locations <ArrowRight className="ml-auto" />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="grid gap-1 sm:grid-cols-2">
          {LOCATIONS.map((state) => (
            <DropdownMenuItem key={state.slug} asChild>
              <Link to="/locations/$state" params={{ state: state.slug }} className="items-start gap-3 py-3">
                <MapPin className="mt-0.5 text-primary" />
                <span className="whitespace-normal">
                  <span className="block font-medium leading-5">{state.name}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">{state.cities.slice(0, 3).join(" · ")}</span>
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar({ onHome = false }: { onHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={onHome ? "absolute inset-x-0 top-0 z-30" : "relative z-30 border-b border-border bg-secondary/50"}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-6">
        <div className="rounded-full bg-card/95 px-4 py-3 shadow-sm">
          <Logo />
        </div>
        <nav aria-label="Main navigation" className="hidden items-center rounded-full bg-card/95 p-1.5 xl:flex">
          {SECTION_LINKS.slice(0, 2).map((link) => (
            <Button key={link.hash} asChild variant="ghost" size="sm" className="rounded-full px-3">
              <Link to="/" hash={link.hash}>{link.label}</Link>
            </Button>
          ))}
          <ServiceMenu />
          <LocationMenu />
          <Button asChild variant="ghost" size="sm" className="rounded-full px-3">
            <Link to="/blog">Blogs</Link>
          </Button>
          {SECTION_LINKS.slice(2).map((link) => (
            <Button key={link.hash} asChild variant="ghost" size="sm" className="rounded-full px-3">
              <Link to="/" hash={link.hash}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <Button asChild size="sm" className="hidden rounded-full xl:inline-flex">
          <Link to="/" hash="contact">Request a Project Quote <ArrowRight /></Link>
        </Button>
        <Button variant="secondary" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="xl:hidden">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="mx-4 mb-4 max-h-[70vh] overflow-y-auto rounded-md border border-border bg-card p-3 shadow-lg xl:hidden">
          {SECTION_LINKS.slice(0, 2).map((link) => (
            <Button key={link.hash} asChild variant="ghost" className="w-full justify-start" onClick={close}>
              <Link to="/" hash={link.hash}>{link.label}</Link>
            </Button>
          ))}
          <details className="group border-t border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
              Services <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="grid pb-2">
              <Button asChild variant="ghost" className="justify-start text-primary" onClick={close}>
                <Link to="/services">All services</Link>
              </Button>
              {SERVICES.map((service) => (
                <Button key={service.slug} asChild variant="ghost" className="h-auto justify-start whitespace-normal py-2 text-left" onClick={close}>
                  <Link to="/services/$service" params={{ service: service.slug }}>{service.title}</Link>
                </Button>
              ))}
            </div>
          </details>
          <details className="group border-t border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
              Locations <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="grid pb-2">
              <Button asChild variant="ghost" className="justify-start text-primary" onClick={close}>
                <Link to="/locations">All locations</Link>
              </Button>
              {LOCATIONS.map((state) => (
                <Button key={state.slug} asChild variant="ghost" className="justify-start" onClick={close}>
                  <Link to="/locations/$state" params={{ state: state.slug }}>{state.name}</Link>
                </Button>
              ))}
            </div>
          </details>
          <div className="grid border-t border-border pt-1">
            <Button asChild variant="ghost" className="justify-start" onClick={close}>
              <Link to="/blog">Blogs</Link>
            </Button>
            {SECTION_LINKS.slice(2).map((link) => (
              <Button key={link.hash} asChild variant="ghost" className="justify-start" onClick={close}>
                <Link to="/" hash={link.hash}>{link.label}</Link>
              </Button>
            ))}
            <Button asChild className="mt-2" onClick={close}>
              <Link to="/" hash="contact">Request a Project Quote <ArrowRight /></Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
