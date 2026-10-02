import { createFileRoute } from "@tanstack/react-router";
import { DestinationsPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations — Bandhan Tours" },
      { name: "description", content: "Explore domestic, international and North East destinations with Bandhan Tours." },
      { property: "og:title", content: "Destinations — Bandhan Tours" },
      { property: "og:description", content: "Explore domestic, international and North East destinations with Bandhan Tours." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><DestinationsPage /></SiteLayout>;
}
