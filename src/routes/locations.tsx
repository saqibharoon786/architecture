import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/locations")({
  component: PageShell,
});
