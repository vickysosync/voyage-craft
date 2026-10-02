import { createFileRoute } from "@tanstack/react-router";
import { DestinationDetail } from "@/components/pages";
import { SiteLayout } from "@/components/site";

export const Route = createFileRoute("/destinations/$destination")({
  head: () => ({
    meta: [
      { title: "Destination Details — Bandhan Tours" },
      { name: "description", content: "Highlights, best time to visit and packages for this destination." },
      { property: "og:title", content: "Destination Details — Bandhan Tours" },
      { property: "og:description", content: "Highlights, best time to visit and packages for this destination." },
    ],
  }),
  component: Page,
});

function Page() {
  const { destination } = Route.useParams();
  return <SiteLayout><DestinationDetail id={destination} /></SiteLayout>;
}
