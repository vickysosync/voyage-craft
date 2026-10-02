import { createFileRoute } from "@tanstack/react-router";
import { DestinationsPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/destinations/domestic")({
  head: () => ({
    meta: [
      { title: "Domestic Destinations — Bandhan Tours" },
      { name: "description", content: "Goa, Kerala, Kashmir, Rajasthan and more Indian holidays." },
      { property: "og:title", content: "Domestic Destinations — Bandhan Tours" },
      { property: "og:description", content: "Goa, Kerala, Kashmir, Rajasthan and more Indian holidays." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><DestinationsPage category="Domestic" /></SiteLayout>;
}
