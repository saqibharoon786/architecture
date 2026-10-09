import { Link, Outlet } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BLOGS } from "@/lib/blogs";
import { DISCLAIMER, SERVICES } from "@/lib/services";
import { Logo, Navbar } from "@/components/site/navigation";
import { SocialLinks } from "@/components/site/social-links";

export function PageShell() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:pr-6">
          <Logo light />
          <p className="mt-5 text-sm leading-6 text-primary-foreground/60">
            Architectural Design | Structural Design | Mechanical / HVAC | Electrical | Plumbing | BIM | Permit Drawing Documentation
          </p>
          <p className="mt-3 text-sm leading-6 text-primary-foreground/60">U.S. Residential & Commercial Design Support</p>
          <p className="mt-3 text-sm font-medium leading-6">Design & Documentation Only · No Construction or Installation Services</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Explore</h2>
          <nav className="mt-5 grid gap-3">
            <Link to="/services" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Services</Link>
            <Link to="/locations" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Locations</Link>
            <Link to="/blog" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Blogs</Link>
            <Link to="/" hash="contact" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Services</h2>
          <nav className="mt-5 grid gap-3">
            {SERVICES.slice(0, 5).map((service) => (
              <Link key={service.slug} to="/services/$service" params={{ service: service.slug }} className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Start a project</h2>
          <p className="mt-5 text-sm leading-6 text-primary-foreground/60">
            Remote design and documentation support for projects across the United States. No construction or installation services.
          </p>
          <Button asChild className="mt-6">
            <Link to="/" hash="contact">Request a Project Quote <ArrowRight /></Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <SocialLinks />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <h2 className="text-sm font-semibold">Design & Professional Licensing Disclaimer</h2>
          <p className="mt-3 max-w-5xl text-xs leading-6 text-primary-foreground/55">{DISCLAIMER}</p>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Hassan Building Design Group USA. All rights reserved.</p>
          <p>{BLOGS.length} notes on permit drawings, coordination, and professional review.</p>
        </div>
      </div>
    </footer>
  );
}
