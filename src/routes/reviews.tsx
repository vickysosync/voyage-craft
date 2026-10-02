import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Traveller Reviews — Bandhan Tours" },
      { name: "description", content: "What our travellers say about their Bandhan Tours holidays." },
      { property: "og:title", content: "Traveller Reviews — Bandhan Tours" },
      { property: "og:description", content: "What our travellers say about their Bandhan Tours holidays." },
    ],
  }),
  component: Page,
});

function Page() {
  return <SiteLayout><ReviewsPage /></SiteLayout>;
}
