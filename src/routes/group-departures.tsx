import { createFileRoute } from "@tanstack/react-router";
import { DeparturesPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/group-departures")({
  head: () => ({
    meta: [
      { title: "Group Departures — Bandhan Tours" },
      { name: "description", content: "Upcoming fixed-date group tours with seats available." },
      { property: "og:title", content: "Group Departures — Bandhan Tours" },
      { property: "og:description", content: "Upcoming fixed-date group tours with seats available." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><DeparturesPage /></SiteLayout>;
}
