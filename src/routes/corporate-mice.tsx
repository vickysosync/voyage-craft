import { createFileRoute } from "@tanstack/react-router";
import { CorporatePage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/corporate-mice")({
  head: () => ({
    meta: [
      { title: "Corporate & MICE Travel — Bandhan Tours" },
      { name: "description", content: "Conferences, incentive trips, team outings and business travel planned end to end." },
      { property: "og:title", content: "Corporate & MICE Travel — Bandhan Tours" },
      { property: "og:description", content: "Conferences, incentive trips, team outings and business travel planned end to end." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><CorporatePage /></SiteLayout>;
}
