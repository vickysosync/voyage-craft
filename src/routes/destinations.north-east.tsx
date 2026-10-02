import { createFileRoute } from "@tanstack/react-router";
import { DestinationsPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/destinations/north-east")({
  head: () => ({
    meta: [
      { title: "North East India Tours — Bandhan Tours" },
      { name: "description", content: "Sikkim, Darjeeling, Meghalaya, Assam and Arunachal Pradesh journeys." },
      { property: "og:title", content: "North East India Tours — Bandhan Tours" },
      { property: "og:description", content: "Sikkim, Darjeeling, Meghalaya, Assam and Arunachal Pradesh journeys." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><DestinationsPage category="North East" /></SiteLayout>;
}
